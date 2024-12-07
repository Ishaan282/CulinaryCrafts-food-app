// server/controllers/onedrive.auth.controller.js
const axios = require('axios');
require('dotenv').config();

const uploadImageToOneDrive = async (filePath, fileName) => {
    const accessToken = process.env.ONEDRIVE_ACCESS_TOKEN;
    const url = `https://graph.microsoft.com/v1.0/me/drive/root:/path/to/folder/${fileName}:/content`;

    try {
        const response = await axios.put(url, filePath, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'image/jpeg'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading to OneDrive:', error);
        throw new Error('Error uploading image to OneDrive');
    }
};

module.exports = { uploadImageToOneDrive };