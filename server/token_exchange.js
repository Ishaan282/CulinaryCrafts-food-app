const axios = require('axios');
const qs = require('querystring');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
//! the link to get the token :- 
//https://login.microsoftonline.com/2113a880-ca86-4b73-9e00-653b69c61387/oauth2/v2.0/authorize?client_id=cb6059f1-7bc2-4261-afeb-eeaf970c3a39&response_type=code&redirect_uri=http://localhost:5000/auth/onedrive/callback&response_mode=query&scope=offline_access%20user.read%20files.readwrite&state=12345
const exchangeCodeForToken = async (authorizationCode) => {
    const tokenUrl = `https://login.microsoftonline.com/${process.env.ONEDRIVE_TENANT_ID}/oauth2/v2.0/token`;
    const params = {
        client_id: process.env.ONEDRIVE_CLIENT_ID,
        client_secret: process.env.ONEDRIVE_CLIENT_SECRET,
        redirect_uri: process.env.ONEDRIVE_REDIRECT_URI,
        code: authorizationCode,
        grant_type: 'authorization_code'
    };

    try {
        const response = await axios.post(tokenUrl, qs.stringify(params), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;

        // Update .env file with the new access token and refresh token
        updateEnvFile('ONEDRIVE_ACCESS_TOKEN', accessToken);
        updateEnvFile('ONEDRIVE_REFRESH_TOKEN', refreshToken);

        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);
    } catch (error) {
        console.error('Error exchanging code for access token:', error.response ? error.response.data : error.message);
    }
};

const updateEnvFile = (key, value) => {
    const envFilePath = path.resolve(__dirname, '.env');
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

// Replace 'authorization_code_here' with the actual authorization code you received
const authorizationCode = '1.AVAAgKgTIYbKc0ueAGU7acYTh_FZYMvCe2FCr-vur5cMOjm2AB5QAA.AgABBAIAAADW6jl31mB3T7ugrWTT8pFeAwDs_wUA9P9BTdC_RRam_S-szV9i66fKQfLIbOj_0K3F09Yus_qjOccK-OEH83M704MA-knsSHnRfbFhyeDi6UPxzOG5QdhEqZBFeA77Uu6ytyqU2RVzKW4icf2LcPblNbWiW4MY13H5Tls-2LNNjkrNLC7J-84bXtomb1Wx6Upmx7eVRYfmeSN53TWdxc6mOgobnE57J3fa92y3DtpwiVBaOV0UrasgAKr6ex04VerfnDL9Mm0npGPG2WYsXB6xJikD7ixlGLsoD7AHKPUooEGiPQyV568aO-qR465C3OBe_J5TWunsviRWsyyou4WOecu5c3Bkv1O3oWWuQoaNhyT33PRNKM8vKhvlC8sJH5LjS6Jch9oE0thDNaWB2HOqj61V13sIm7KI3Kx8A3jfBSZCzjRG37lA_L2WpGSwW0hR2e6QhHfWLBSMRUFb3U7jHYovfzdTDJFpkMUVmfOD-t9i64iY9U6QiCpGpgIXD90-OPiYekbte6eviKUrAU5ljh547zF4WwptOozAHMKOW5Tz8cjszezBbpdOv3K-1vkTe_yLtOm_kPjgMNDoi7yl7zLCgPxInb2-121r9GXbpAzYUu8jsDpazcuRtEtWGgChvNXDSXbiPdtKIoQU2k0DfIc49lSBnebhZhjHhZq9j7pmotRtLss8fdmdzhu1scnQOMJYavmDS6hHxOLj2vtAtvItIn-RxTzg0rTiXqzOr0q8G6RyGMHVq2DJLWahn0agdiVs2zzX0YEYcLdSlQuew--4S0Jd4iOeY9tKdn_8nMhSq_0VOh8dJwSzP6j-CZjhBxc8epPCmpxcKuylvTWq6qzNAEE';
exchangeCodeForToken(authorizationCode);