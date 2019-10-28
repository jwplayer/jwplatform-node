# JW Platform API

Node client for interfacing with the JW Platform management API.

## Example Usage

```
const JWPlatformAPI = require('jwplatform');

const jwApi = new JWPlatformAPI('INSERT API KEY', 'INSERT API SECRET');

jwApi.videos.show({ video_key: 'INSERT VIDEO KEY' }).then((response) => { 
    // handle response data 
});
```

## Demo

To run a demo of this client, run the following command:

```
API_KEY='INSERT API KEY' \
API_SECRET='INSERT API SECRET' \
// Different routes will need different ID's. Refer to documentation for required fields.
VIDEO_KEY='INSERT VIDEO ID' \
// i.e. videos/list or videos/conversions/list
DEMO = '{RESOURCE}/{ACTION}'
make demo
```

**Note that only LIST and SHOW actions are available.**

## Supported Operations

All API methods documentated on the API are available in this client. Please refer [here](https://beta-developer.jwplayer.com/jwplayer/reference).

## Testing

The JW Platform client is tested using `chai` and `mocha`. To run the test suite, run the command `yarn test`.

Coverage reports are available through [Istanbul.js](https://istanbul.js.org/), and can be accessed by running `yarn coverage`.

## Linting

This repository is lintned using ESLint and Prettier. To 

## License

This code is provided under the Apache 2.0 License.

