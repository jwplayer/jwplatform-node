'use strict';

const JWPlatformAPI = require('../../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

if (!process.env.CONVERSION_KEY) {
    return console.warn('CONVERSION_KEY is required');
}

jwApiInstance.videos.conversions
    .show({ conversion_key: process.env.CONVERSION_KEY })
    .then(response => console.log(response));
