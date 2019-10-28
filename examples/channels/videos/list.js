'use strict';

const JWPlatformAPI = require('../../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

if (!process.env.CHANNEL_KEY) {
    return console.warn('CHANNEL_KEY is required');
}

jwApiInstance.channels
    .list({ channel_key: process.env.CHANNEL_KEY })
    .then(response => console.log(response));
