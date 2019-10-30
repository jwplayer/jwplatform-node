'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');

const Client = require('../jwplatform/client');

const MOCK_KEY = 'abcdefgh';
const MOCK_SECRET = 'abadsfscdqwasdw';

describe('Client', function() {
    let sandbox;
    const client = new Client(MOCK_KEY, MOCK_SECRET, 5000);

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('make request', function() {
        it('should request the given endpoint once', () => {
            const fetchStub = sandbox.stub(Client.prototype, '_fetch');
            client.makeRequest('test', 'hi', 'there');
            sinon.assert.calledOnce(fetchStub);
            fetchStub.restore();
        });
    });

    describe('build url', () => {
        it('should return a string', () => {
            const url = client._buildUrl('test');
            expect(url).to.be.a('string');
            expect(url).to.include('test');
        });

        it('should accept paramaters, include them in url', () => {
            const url = client._buildUrl('test', { hey: 'there' });
            expect(url).to.include('test');
            expect(url).to.include('&hey=there');
        });

        it('should return a sorted list of key values, with signature at the end', () => {
            sandbox.stub(client, '_generateBaseQsParams').callsFake(() => {
                return {
                    api_format: 'json',
                    api_nonce: '12345678',
                    api_timestamp: 1234567890,
                    api_key: 'key',
                };
            });
            sandbox
                .stub(client, '_generateSignature')
                .callsFake(() => 'abcdef');
            const params = {
                a: 'b',
                c: 'd',
            };
            const path = 'test';
            const url = client._buildUrl(path, params);
            expect(url).to.equal(
                'test?a=b&api_format=json&api_key=key&api_nonce=12345678&api_timestamp=1234567890&c=d&api_signature=abcdef'
            );
        });
    });

    describe('base request paramaters', () => {
        const baseParams = client._generateBaseQsParams();

        it('should have key "api_nonce", a 8 digit string', () => {
            expect(baseParams.api_nonce).to.be.a('string');
            expect(baseParams.api_nonce.length).to.equal(8);
            Number(baseParams.api_nonce);
        });

        it('should have key "api_timestamp", a unix timestamp', () => {
            expect(baseParams.api_timestamp.toString().length).to.equal(10);
            expect(baseParams.api_timestamp).to.be.a('number');
        });

        it('should have key "api_format", with value "json"', () => {
            expect(baseParams.api_format).to.equal('json');
        });

        it('should have key "api_key", with value of instantiated api key', () => {
            expect(baseParams.api_key).to.equal(MOCK_KEY);
        });
    });

    describe('fetch', () => {
        it('should call axios request once with method, url, and data', () => {
            const requestStub = sandbox
                .stub(client.axios, 'request')
                .resolves({ data: 'value' });
            return client._fetch('test', 'get', 'data').then(resp => {
                expect(resp).to.be.equal('value');
                sinon.assert.calledOnce(requestStub);
                requestStub.calledWith({
                    url: 'test',
                    method: 'get',
                    data: 'data',
                });
            });
        });

        it('should parse data from response json', () => {
            const requestStub = sandbox
                .stub(client.axios, 'request')
                .resolves({ data: 'value' });
            return client._fetch('test', 'get', 'data').then(resp => {
                expect(resp).to.be.equal('value');
                sinon.assert.calledOnce(requestStub);
                requestStub.calledWith({
                    url: 'test',
                    method: 'get',
                    data: 'data',
                });
            });
        });
    });
    it('should reject on error', () => {
        sandbox.stub(client.axios, 'request').returns(Promise.reject('reject'));
        client._fetch('test', 'get', 'data').catch(e => {
            expect(e).to.be.equal('reject');
        });
    });
});
