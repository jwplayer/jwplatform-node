'use strict';

const JWPlatformAPI = require('../../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

jwApiInstance.videos.tracks
    .show({ track_key: process.env.TRACK_KEY })
    .then(response => console.log(response));
