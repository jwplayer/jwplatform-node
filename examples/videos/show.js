'use strict';

const JWPlatformAPI = require('../jwplatform/api');

const jwApiInstance = new JWPlatformAPI({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
});

if (!process.env.VIDEO_KEY) {
    return console.warn('VIDEO_KEY is required');
}

jwApiInstance.videos
    .show({ video_key: process.env.VIDEO_KEY })
    .then(response => console.log(response));
