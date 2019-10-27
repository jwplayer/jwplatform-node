// This is an early playground for development. Will be removed. Can be run with `yarn sandbox`.
const JWPlatformAPI = require('./api');

const jw = new JWPlatformAPI('INSERT API KEY', 'INSERT API SECRET');
console.log(jw.videos.conversions.list({ video_key: 'INSERT VIDEO KEY' }));
