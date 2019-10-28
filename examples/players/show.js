'use strict';

const JWPlatformAPI = require('../jwplatform/api');

const jwApiInstance = new JWPlatformAPI(
    process.env.API_KEY,
    process.env.API_SECRET
);

if (!process.env.PLAYER_KEY) {
    return console.warn('PLAYER_KEY is required');
}

jwApiInstance.players
    .show({ player_key: process.env.PLAYER_KEY })
    .then(response => console.log(response));
