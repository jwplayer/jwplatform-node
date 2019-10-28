'use strict';

const JWPlatformAPI = require('../../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

jwApiInstance.videos.conversions
    .list({ video_key: process.env.VIDEO_KEY })
    .then(response => console.log(response));
