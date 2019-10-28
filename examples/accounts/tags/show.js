'use strict';

const JWPlatformAPI = require('../../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

if (!process.env.TAG_NAME) {
    return console.warn('TAG_NAME required');
}

jwApiInstance.accounts.tags
    .show({ name: process.env.TAG_NAME })
    .then(response => console.log(response));
