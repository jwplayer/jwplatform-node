'use strict';

const JWPlatformAPI = require('../../jwplatform/api');

const jwApiInstance = new JWPlatformAPI({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
});

jwApiInstance.videos.tags.list().then(response => console.log(response));
