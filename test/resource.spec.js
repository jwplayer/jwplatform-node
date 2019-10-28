'use strict';

const sinon = require('sinon');

const Client = require('../jwplatform/client');
const Resource = require('../jwplatform/resource');

describe('Resource', function() {
    const makeRequestSpy = sinon.stub(Client.prototype, 'makeRequest');
    const mockClient = new Client('key', 'secret', 5000);
    const mockPath = 'test';
    const resource = new Resource(mockClient, mockPath);

    this.beforeEach(() => {
        makeRequestSpy.resetHistory();
    });

    describe('create action', function() {
        it('have a create action that call makeRequest', () => {
            resource.create();
            sinon.assert.calledOnce(makeRequestSpy);
        });
        it('should use "POST" request method and "body" param type by default', () => {
            resource.create();
            makeRequestSpy.calledWith(`${mockPath}/create`, 'body', 'POST');
        });
    });

    describe('delete action', function() {
        it('have a delete action that call makeRequest', () => {
            resource.delete();
            sinon.assert.calledOnce(makeRequestSpy);
        });
        it('should use "POST" request method and "body" param type by default', () => {
            resource.delete();
            makeRequestSpy.calledWith(`${mockPath}/delete`, 'body', 'POST');
        });
    });

    describe('list action', function() {
        it('have a list action that call makeRequest', () => {
            resource.list();
            sinon.assert.calledOnce(makeRequestSpy);
        });
        it('should use "GET" request method and "qs" param type by default', () => {
            resource.list();
            makeRequestSpy.calledWith(`${mockPath}/list`, 'qs', 'GET');
        });
    });

    describe('show action', function() {
        it('have a show action that call makeRequest', () => {
            resource.show();
            sinon.assert.calledOnce(makeRequestSpy);
        });

        it('should use "GET" request method and "qs" param type by default', () => {
            resource.show();
            makeRequestSpy.calledWith(`${mockPath}/show`, 'qs', 'GET');
        });
    });

    describe('update action', function() {
        it('have an update action that call makeRequest', () => {
            resource.update();
            sinon.assert.calledOnce(makeRequestSpy);
        });
        it('should use "POST" request method and "body" param type by default', () => {
            resource.show();
            makeRequestSpy.calledWith(`${mockPath}/update`, 'body', 'POST');
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
            makeRequestSpy.calledWith(`${mockPath}/show`, 'body', 'POST');
        });
    });
});
