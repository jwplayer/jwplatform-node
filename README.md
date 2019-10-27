# JW Platform API

This repository contains a node client for interfacing with the `v1` JW Platform management API.

## Example Usage

```
const JWPlatformAPI = require('jwplatform/api');

const jwApi = new JWPlatformAPI('INSERT API KEY', 'INSERT API SECRET');

const myVideo = jwApi.videos.show({ video_key: 'INSERT VIDEO KEY' })
```

## Supported Operations

All API methods documentated on the API are available in this client. Please refer [here](https://beta-developer.jwplayer.com/jwplayer/reference).
