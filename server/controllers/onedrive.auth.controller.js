const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { refreshAccessToken } = require('./token_manager');

const uploadImageToOneDrive = async (filePath, fileName) => {
    let accessToken = process.env.ONEDRIVE_ACCESS_TOKEN;
    if (!accessToken) {
        accessToken = await refreshAccessToken();
    }

    const uploadUrl = `https://graph.microsoft.com/v1.0/me/drive/root:/CulinaryCrafts-food-app/social-pictures/${fileName}:/content`;

    try {
        // Upload the image to OneDrive
        const uploadResponse = await axios.put(uploadUrl, fs.createReadStream(filePath), {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'image/jpeg'
            }
        });

        const itemId = uploadResponse.data.id;

        // Set the sharing permissions to make the file accessible to everyone
        const sharingUrl = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/createLink`;
        const sharingResponse = await axios.post(sharingUrl, {
            type: 'view',
            scope: 'anonymous'
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        return sharingResponse.data.link.webUrl;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // Token might be expired, try refreshing it
            try {
                accessToken = await refreshAccessToken();
                const uploadResponse = await axios.put(uploadUrl, fs.createReadStream(filePath), {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'image/jpeg'
                    }
                });

                const itemId = uploadResponse.data.id;

                const sharingUrl = `https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/createLink`;
                const sharingResponse = await axios.post(sharingUrl, {
                    type: 'view',
                    scope: 'anonymous'
                }, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });

                return sharingResponse.data.link.webUrl;
            } catch (refreshError) {
                console.error('Error uploading to OneDrive after refreshing token:', refreshError);
                throw new Error('Error uploading image to OneDrive after refreshing token');
            }
        } else {
            console.error('Error uploading to OneDrive:', error);
            throw new Error('Error uploading image to OneDrive');
        }
    }
};

const deleteImageFromOneDrive = async (fileUrl) => {
    let accessToken = process.env.ONEDRIVE_ACCESS_TOKEN;
    if (!accessToken) {
        accessToken = await refreshAccessToken();
    }
    const url = `https://graph.microsoft.com/v1.0/me/drive/root:${fileUrl}`;

    try {
        await axios.delete(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // Token might be expired, try refreshing it
            try {
                accessToken = await refreshAccessToken();
                await axios.delete(url, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
            } catch (refreshError) {
                console.error('Error deleting from OneDrive after refreshing token:', refreshError);
                throw new Error('Error deleting image from OneDrive after refreshing token');
            }
        } else {
            console.error('Error deleting from OneDrive:', error);
            throw new Error('Error deleting image from OneDrive');
        }
    }
};

module.exports = { uploadImageToOneDrive, deleteImageFromOneDrive };