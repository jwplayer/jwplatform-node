'use strict';

const axios = require('axios');
const sha1 = require('js-sha1');
const qs = require('qs');

const utils = require('./utils');

class Client {
    constructor(apiKey, apiSecret, timeout) {
        this.axios = axios.create({
            baseURL: 'https://api.jwplatform.com/v1/',
            timeout,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        this._apiKey = apiKey;
        this._apiSecret = apiSecret;

        this.makeRequest = this.makeRequest.bind(this);
    }

    makeRequest(path, requestMethod, paramType, params = null) {
        const requestParams = this._buildUrl(path, params);
        const requestUrl =
            paramType == 'qs' ? `${path}?${requestParams}` : path;
        return this._fetch(requestUrl, requestMethod, requestParams);
    }

    _buildUrl(path, params) {
        const preSignatureParams = Object.assign(
            {},
            params,
            this._generateBaseQsParams()
        );
        const qsParamString = qs.stringify(preSignatureParams, {
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
        return new Promise((resolve, reject) =>
            this.axios
                .request({ method, url, data })
                .then(response => resolve(response.data))
                .catch(e => reject(e))
        );
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
