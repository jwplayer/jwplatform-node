'use strict';

const JWPlatformAPI = require('../../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

if (!process.env.CHANNEL_KEY || !process.env.VIDEO_KEY) {
    return console.warn('CHANNEL_KEY and VIDEO_KEY required');
}

jwApiInstance.channels
    .show({
        channel_key: process.env.CHANNEL_KEY,
        video_key: process.env.VIDEO_KEY,
    })
    .then(response => console.log(response));
