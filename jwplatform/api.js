'use strict';

const Client = require('./client');
const Resource = require('./resource');
const resources = require('./resources');

class JWPlatformAPI {
    constructor(opts = { timeout: 5000 }) {
        const { apiKey, apiSecret, timeout } = opts;
        this._client = new Client(apiKey, apiSecret, timeout);

        this._loadResources();
    }

    _loadResources() {
        const { _client } = this;
        Object.keys(resources).forEach(resource => {
            if (resource.includes('/')) {
                const [parentResource, childResource] = resource.split('/');
                this[parentResource] = this[parentResource] || {};
                this[parentResource][childResource] = new Resource(
                    _client,
                    resource,
                    resources[resource]
                );
            } else {
                this[resource] = new Resource(_client, resource);
            }
        });
    }
}

module.exports = JWPlatformAPI;
