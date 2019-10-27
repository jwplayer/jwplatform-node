'use strict';

const Client = require('./client');
const Resource = require('./resource');
const resources = require('./resources');

class JWPlatformAPI {
    constructor(apiKey, apiSecret, timeout = 5000) {
        this._client = new Client(apiKey, apiSecret, timeout);

        this._loadResources();
    }

    _loadResources() {
        const { _client } = this;
        const self = this;
        Object.keys(resources).forEach(resource => {
            if (resource.includes('/')) {
                const [parentResource, childResource] = resource.split('/');
                if (!self[parentResource]) {
                    self[parentResource] = {};
                }
                self[parentResource][childResource] = new Resource(
                    _client,
                    resource,
                    resources[resource]
                );
            } else {
                self[resource] = new Resource(_client, resource);
            }
        });
    }
}

module.exports = JWPlatformAPI;
