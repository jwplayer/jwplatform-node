'use strict';

const axios = require('axios').default;
const sha1 = require('js-sha1');
const qs = require('qs');

const utils = require('./utils');

class Client {
    constructor(apiKey, apiSecret, timeout) {
        this.axios = axios.create({
            baseURL: 'https://api.jwplatform.com/v1/',
            timeout,
            headers: { 'Content-Type': 'application/json' },
        });

        this._apiKey = apiKey;
        this._apiSecret = apiSecret;

        this.makeRequest = this.makeRequest.bind(this);
        this._fetch = this._fetch.bind(this);
        this._buildUrl = this._buildUrl.bind(this);
        this._generateBaseQsParams = this._generateBaseQsParams.bind(this);
        this._generateSignature = this._generateSignature.bind(this);
    }

    makeRequest(path, requestMethod, paramType, params = null) {
        const qsParams = paramType === 'qs' ? params : {};
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

        const qsParamString = qs.stringify(preHashParams, {
            charset: 'utf-8',
            sort: utils.alphabeticalSort,
        });
        const signature = this._generateSignature(qsParamString);
        const signedParams = `${qsParamString}&api_signature=${signature}`;
        return `${path}?${signedParams}`;
    }

    _generateSignature(qsParamString) {
        return sha1(`${qsParamString}${this._apiSecret}`);
    }

    _fetch(url, method, data) {
        return new Promise((resolve, reject) => {
            return (
                this.axios
                    .request({ url, method, data })
                    // to do: look at responses to see if I can parse the specific resource data out easily
                    .then(response => resolve(response.data))
                    .catch(e => reject(e))
            );
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
