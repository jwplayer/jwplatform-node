'use strict';

const axios = require('axios');
const Client = require('./client');
const FormData = require('form-data');
const fs = require('fs');
const utils = require('./utils');
const Resource = require('./resource');
const resources = require('./resources');
const resolve = require('path').resolve;
const qs = require('qs');

class JWPlatformAPI {
    constructor(opts = { timeout: 5000 }) {
        const { apiKey, apiSecret, timeout } = opts;
        this._client = new Client(apiKey, apiSecret, timeout);

        this._loadResources();
        this.upload = this.upload.bind(this);
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
            const qsParams = Object.assign({}, response.link.query, {
                api_format: 'json',
            });
            const qsParamString = qs.stringify(qsParams, {
                charset: 'utf-8',
                sort: utils.alphabeticalSort,
            });
            const uploadUrl = `${protocol}://${address}${path}?${qsParamString}`;
            const formData = new FormData();
            formData.append('file', fs.createReadStream(resolve(filePath)));
            return axios.post(uploadUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        });
    }
}

module.exports = JWPlatformAPI;
