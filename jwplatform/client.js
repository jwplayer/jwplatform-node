'use strict';

const axios = require('axios').default;
const sha1 = require('js-sha1');
const qs = require('qs');

const utils = require('./utils');

class Client {
    constructor(apiKey, apiSecret, timeout) {
        this.axios = axios.create({
            baseURL: 'http://api.jwplatform.com/v1/',
            timeout,
            headers: { 'Content-Type': 'application/json' },
        });

        this._apiKey = apiKey;
        this._apiSecret = apiSecret;

        this.makeRequest = this.makeRequest.bind(this);
        this._fetch = this._fetch.bind(this);
        this._buildUrl = this._buildUrl.bind(this);
        this._generateBaseQsParams = this._generateBaseQsParams.bind(this);
    }

    makeRequest(path, requestMethod, paramType, params) {
        let qsParams = paramType === 'qs' ? params : {};
        const requestBody = paramType === 'body' ? params : {};

        const fullyQualifiedPath = this._buildUrl(path, qsParams);

        return this._fetch(fullyQualifiedPath, requestMethod, requestBody);
    }

    _buildUrl(path, params) {
        const preHashParams = Object.assign(
            {},
            params,
            this._generateBaseQsParams()
        );

        let qsParamString = qs.stringify(preHashParams, {
            charset: 'utf-8',
            sort: utils.alphabeticalSort,
        });

        const apiSignature = sha1(`${qsParamString}${this._apiSecret}`);
        const fullQsParamString = `${qsParamString}&api_signature=${apiSignature}`;
        return `${path}?${fullQsParamString}`;
    }

    _fetch(url, method, data) {
        this.axios
            .request({ method, url, data })
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(e => {
                console.warn(e.toJSON());
            });
    }

    _generateBaseQsParams() {
        return {
            api_nonce: utils.generateNonce(),
            api_key: this._apiKey,
            api_format: 'json',
            api_timestamp: Math.floor(Date.now() / 1000),
        };
    }
}

module.exports = Client;
