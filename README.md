# JW Platform API

Node client for interfacing with the JW Platform management API.

## Example Usage

```
const JWPlatformAPI = require('jwplatform');

const jwApi = new JWPlatformAPI('INSERT API KEY', 'INSERT API SECRET');

const myVideo = jwApi.videos.show({ video_key: 'INSERT VIDEO KEY' })
```

## Supported Operations

All API methods documentated on the API are available in this client. Please refer [here](https://beta-developer.jwplayer.com/jwplayer/reference).

## Testing

The JW Platform client is tested using `chai` and `mocha`. To run the test suite, run the command `yarn test`.

Coverage reports are available through [Istanbul.js](https://istanbul.js.org/), and can be accessed by running `yarn coverage`.

## Linting

This repository is lintned using ESLint and Prettier. To 

## License

This code is provided under the Apache 2.0 License.

