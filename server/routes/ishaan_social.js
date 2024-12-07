const express = require('express');
const router = express.Router();
const { chat_index, chat_create, chat_delete, upload_image } = require('../controllers/ishaan_social');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', chat_index);

// Route for creating a new chat message
router.post('/', chat_create);

// Route for deleting a chat message
router.delete('/:id', chat_delete);

// Route for uploading an image
router.post('/upload', upload.single('file'), upload_image);

// Route to handle OneDrive callback
router.get('/auth/onedrive/callback', async (req, res) => {
    const code = req.query.code;
    const tokenUrl = 'https://login.microsoftonline.com/common/oauth2/v2.0/token';
    const params = {
        client_id: process.env.ONEDRIVE_CLIENT_ID,
        client_secret: process.env.ONEDRIVE_CLIENT_SECRET,
        redirect_uri: process.env.ONEDRIVE_REDIRECT_URI,
        code: code,
        grant_type: 'authorization_code'
    };

    try {
        const response = await axios.post(tokenUrl, new URLSearchParams(params).toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const { access_token: accessToken, refresh_token: refreshToken } = response.data;

        updateEnvFile('ONEDRIVE_ACCESS_TOKEN', accessToken);
        updateFile('ONEDRIVE_REFRESH_TOKEN', refreshToken);

        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);
        res.send('Access token received and saved.');
    } catch (error) {
        console.error('Error exchanging code for access token:', error);
        res.status(500).send('Error exchanging code for access token.');
    }
});

const updateEnvFile = (key, value) => {
    const envFilePath = path.resolve(__dirname, '../.env');
    const envFileContent = fs.readFileSync(envFilePath, 'utf8');
    const envVars = envFileContent.split('\n');
    const updatedEnvVars = envVars.map((line) => {
        if (line.startsWith(`${key}=`)) {
            return `${key}=${value}`;
        }
        return line;
    });

    if (!updatedEnvVars.some((line) => line.startsWith(`${key}=`))) {
        updatedEnvVars.push(`${key}=${value}`);
    }

    fs.writeFileSync(envFilePath, updatedEnvVars.join('\n'), 'utf8');
};

module.exports = router;