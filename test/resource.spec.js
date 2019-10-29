'use strict';

const sinon = require('sinon');

const Client = require('../jwplatform/client');
const Resource = require('../jwplatform/resource');

describe('Resource', function() {
    const makeRequestStub = sinon.stub(Client.prototype, 'makeRequest');
    const mockClient = new Client('key', 'secret', 5000);
    const mockPath = 'test';
    const resource = new Resource(mockClient, mockPath);

    afterEach(() => {
        makeRequestStub.resetHistory();
    });

    describe('create action', function() {
        it('have an create action that call makeRequest', () => {
            resource.create();
            sinon.assert.calledOnce(makeRequestStub);
        });
        it('should use "POST" request method and "body" param type by default', () => {
            resource.create();
            makeRequestStub.calledWith(`${mockPath}/create`, 'body', 'POST');
        });
    });

    describe('delete action', function() {
        it('have a delete action that call makeRequest', () => {
            resource.delete();
            sinon.assert.calledOnce(makeRequestStub);
        });
        it('should use "POST" request method and "body" param type by default', () => {
            resource.delete();
            makeRequestStub.calledWith(`${mockPath}/delete`, 'body', 'POST');
        });
    });

    describe('list action', function() {
        it('have a list action that call makeRequest', () => {
            resource.list();
            sinon.assert.calledOnce(makeRequestStub);
        });
        it('should use "GET" request method and "qs" param type by default', () => {
            resource.list();
            makeRequestStub.calledWith(`${mockPath}/list`, 'qs', 'GET');
        });
    });

    describe('show action', function() {
        it('have a show action that call makeRequest', () => {
            resource.show();
            sinon.assert.calledOnce(makeRequestStub);
        });

        it('should use "GET" request method and "qs" param type by default', () => {
            resource.show();
            makeRequestStub.calledWith(`${mockPath}/show`, 'qs', 'GET');
        });
    });

    describe('update action', function() {
        it('have an update action that call makeRequest', () => {
            resource.update();
            sinon.assert.calledOnce(makeRequestStub);
        });
        it('should use "POST" request method and "body" param type by default', () => {
            resource.show();
            makeRequestStub.calledWith(`${mockPath}/update`, 'body', 'POST');
        });
    });

    describe('overrides', function() {
        const mockShowOverride = {
            show: { method: 'POST', paramType: 'body' },
        };
        const overrideResource = new Resource(
            mockClient,
            mockPath,
            mockShowOverride
        );

        it('honor overridden request method and param type', () => {
            overrideResource.show();
            makeRequestStub.calledWith(`${mockPath}/show`, 'body', 'POST');
        });
    });
});
