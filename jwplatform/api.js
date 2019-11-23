'use strict';

const Client = require('./client');
const fs = require('fs');
const Resource = require('./resource');
const resources = require('./resources');
const resolve = require('path').resolve;
const rp = require('request-promise');

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
    upload(videoOptions, filePath) {
        const videoData = Object.assign({}, videoOptions, {
            upload_method: 'single',
        });
        return this.videos.create(videoData).then(response => {
            const { path, protocol, address } = response.link;
            const uploadUrl = `${protocol}://${address}${path}`;
            return rp({
                method: 'POST',
                uri: uploadUrl,
                json: true,
                formData: {
                    file: fs.createReadStream(resolve(filePath)),
                },
                qs: Object.assign({}, response.link.query, {
                    api_format: 'json',
                }),
            });
        });
    }
}

module.exports = JWPlatformAPI;
