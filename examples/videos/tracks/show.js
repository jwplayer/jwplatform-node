'use strict';

const JWPlatformAPI = require('../../jwplatform/api');

const jwApiInstance = new JWPlatformAPI({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
});

if (!process.env.TRACK_KEY) {
    return console.warn('TRACK_KEY is required');
}

jwApiInstance.videos.tracks
    .show({ track_key: process.env.TRACK_KEY })
    .then(response => console.log(response));
