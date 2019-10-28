'use strict';

const JWPlatformAPI = require('../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

jwApiInstance.channels
    .list({ account_key: process.env.ACCOUNT_KEY })
    .then(response => console.log(response));
