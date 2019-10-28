'use strict';

const JWPlatformAPI = require('../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

jwApiInstance.players
    .list({
        channel_key: process.env.CHANNEL_KEY,
        video_key: process.env.CHANNEL_KEY,
    })
    .then(response => console.log(response));
