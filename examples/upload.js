'use strict';

const JWPlatformAPI = require('./jwplatform/api');

const jwApiInstance = new JWPlatformAPI({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
});

const filePath = './examples/test.mp4';

jwApiInstance
    .upload(
        {
            title: 'My new video!',
        },
        filePath
    )
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.warn(e));
