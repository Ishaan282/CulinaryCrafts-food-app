// server/controllers/token_manager.js
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const refreshAccessToken = async () => {
    const refreshToken = process.env.ONEDRIVE_REFRESH_TOKEN;
    const clientId = process.env.ONEDRIVE_CLIENT_ID;
    const clientSecret = process.env.ONEDRIVE_CLIENT_SECRET;
    const redirectUri = process.env.ONEDRIVE_REDIRECT_URI;

    const url = 'https://login.microsoftonline.com/common/oauth2/v2.0/token';
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('refresh_token', refreshToken);
    params.append('grant_type', 'refresh_token');
    params.append('redirect_uri', redirectUri);

    try {
        const response = await axios.post(url, params);
        const newAccessToken = response.data.access_token;
        const newRefreshToken = response.data.refresh_token;

        // Update .env file with the new access token and refresh token
        updateEnvFile('ONEDRIVE_ACCESS_TOKEN', newAccessToken);
        updateEnvFile('ONEDRIVE_REFRESH_TOKEN', newRefreshToken);

        console.log('New Access Token:', newAccessToken);
        console.log('New Refresh Token:', newRefreshToken);

        return newAccessToken;
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw new Error('Error refreshing access token');
    }
};

const updateEnvFile = (key, value) => {
    const envFilePath = path.resolve(__dirname, '../../.env');
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

module.exports = { refreshAccessToken };