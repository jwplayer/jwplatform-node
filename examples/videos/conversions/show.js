'use strict';

const JWPlatformAPI = require('../../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

jwApiInstance.videos.conversions
    .show({ conversion_key: process.env.CONVERSION_KEY })
    .then(response => console.log(response));
