'use strict';

const assert = require('assert');

const JWPlatformAPI = require('../jwplatform/client');

const MOCK_KEY = 'abcdefgh';
const MOCK_SECRET = 'abadsfscdqwasdw';

describe('JWPlayerPlatformAPI', function() {
    it('should instantiate with api key and secret', () => {
        const apiInstance = new JWPlatformAPI(MOCK_KEY, MOCK_SECRET);
        assert(apiInstance instanceof JWPlatformAPI);
    });
});
