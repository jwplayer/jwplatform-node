'use strict';

const rp = require('request-promise');
const sha1 = require('js-sha1');
const qs = require('qs');

const utils = require('./utils');

class Client {
    constructor(apiKey, apiSecret, timeout) {
        this.baseUrl = 'https://api.jwplatform.com/v1/';
        this.timeout = timeout;
        this.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        this._apiKey = apiKey;
        this._apiSecret = apiSecret;

        this.makeRequest = this.makeRequest.bind(this);
    }

    makeRequest(path, requestMethod, paramType, params = null) {
        const requestParams = this._buildParams(params);
        const requestUrl =
            paramType == 'qs' ? `${path}?${requestParams}` : path;
        return this._fetch(requestUrl, requestMethod, requestParams);
    }

    _buildParams(params) {
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
        return signedParams;
    }

    _generateSignature(qsParamString) {
        return sha1(`${qsParamString}${this._apiSecret}`);
    }

    _fetch(url, method, data) {
        return rp({
            method,
            uri: `${this.baseUrl}${url}`,
            headers: this.headers,
            json: true,
            body: data,
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
