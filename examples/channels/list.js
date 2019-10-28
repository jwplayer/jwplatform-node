'use strict';

const JWPlatformAPI = require('../jwplatform/api');

const jwApiInstance = new JWPlatformAPI({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
});

if (!process.env.ACCOUNT_KEY) {
    return console.warn('ACCOUNT_KEY is required');
}

jwApiInstance.channels
    .list({ account_key: process.env.ACCOUNT_KEY })
    .then(response => console.log(response));
