'use strict';

const { UnsupportedAction } = require('../jwplatform/errors');
const JWPlatformAPI = require('../jwplatform/api');
const Resource = require('../jwplatform/resource');

const expect = require('chai').expect;

const MOCK_KEY = 'abcdefgh';
const MOCK_SECRET = 'abadsfscdqwasdw';

describe('JWPlayerPlatformAPI', function() {
    const api = new JWPlatformAPI(MOCK_KEY, MOCK_SECRET);

    it('should instantiate with api key and secret', () => {
        expect(api).to.be.instanceOf(JWPlatformAPI);
    });

    describe('videos resource', function() {
        it('should be an instance of a resource', () => {
            expect(api.videos).to.be.instanceOf(Resource);
        });
        it('should have a create function', () => {
            expect(api.videos.create).to.be.a('function');
        });
        it('should have a delete function', () => {
            expect(api.videos.delete).to.be.a('function');
        });
        it('should have a list function', () => {
            expect(api.videos.list).to.be.a('function');
        });
        it('should have a show function', () => {
            expect(api.videos.show).to.be.a('function');
        });
        it('should have an update function', () => {
            expect(api.videos.update).to.be.a('function');
        });
    });

    describe('accounts tags resource', function() {
        it('should be an instance of a resource', () => {
            expect(api.accounts.tags).to.be.instanceOf(Resource);
        });
        it('should have a create function', () => {
            expect(api.accounts.tags.create).to.be.a('function');
        });
        it('should have a delete function', () => {
            expect(api.accounts.tags.delete).to.be.a('function');
        });
        it('should have a list function', () => {
            expect(api.accounts.tags.list).to.be.a('function');
        });
        it('should have a show function', () => {
            expect(api.accounts.tags.show).to.be.a('function');
        });
        it('should have an update function', () => {
            expect(api.accounts.tags.update).to.be.a('function');
        });
    });

    describe('accounts usage resource', function() {
        it('should be an instance of a resource', () => {
            expect(api.accounts.usage).to.be.instanceOf(Resource);
        });
        it('should not have a create function', () => {
            expect(api.accounts.usage.create).to.throw(UnsupportedAction);
        });
        it('should not have a delete function', () => {
            expect(api.accounts.usage.delete).to.throw(UnsupportedAction);
        });
        it('should have a list function', () => {
            expect(api.accounts.usage.list).to.be.a('function');
        });
        it('should have a show function', () => {
            expect(api.accounts.usage.show).to.be.a('function');
        });
        it('should not have an update function', () => {
            expect(api.accounts.usage.update).to.throw(UnsupportedAction);
        });
    });

    describe('channels resource', function() {
        it('should be an instance of a resource', () => {
            expect(api.channels).to.be.instanceOf(Resource);
        });
        it('should have a create function', () => {
            expect(api.channels.create).to.be.a('function');
        });
        it('should have a delete function', () => {
            expect(api.channels.delete).to.be.a('function');
        });
        it('should have a list function', () => {
            expect(api.channels.list).to.be.a('function');
        });
        it('should have a show function', () => {
            expect(api.channels.show).to.be.a('function');
        });
        it('should have an update function', () => {
            expect(api.channels.update).to.be.a('function');
        });
    });

    describe('channels videos resource', function() {
        it('should be an instance of a resource', () => {
            expect(api.channels.videos).to.be.instanceOf(Resource);
        });
        it('should have a create function', () => {
            expect(api.channels.videos.create).to.be.a('function');
        });
        it('should have a delete function', () => {
            expect(api.channels.videos.delete).to.be.a('function');
        });
        it('should have a list function', () => {
            expect(api.channels.videos.list).to.be.a('function');
        });
        it('should have a show function', () => {
            expect(api.channels.videos.show).to.be.a('function');
        });
        it('should have an update function', () => {
            expect(api.channels.videos.update).to.be.a('function');
        });
    });

    describe('players resource', function() {
        it('should be an instance of a resource', () => {
            expect(api.players).to.be.instanceOf(Resource);
        });
        it('should have a create function', () => {
            expect(api.players.create).to.be.a('function');
        });
        it('should have a delete function', () => {
            expect(api.players.delete).to.be.a('function');
        });
        it('should have a list function', () => {
            expect(api.players.list).to.be.a('function');
        });
        it('should have a show function', () => {
            expect(api.players.show).to.be.a('function');
        });
        it('should have an update function', () => {
            expect(api.players.update).to.be.a('function');
        });
    });

    describe('videos conversions resource', function() {
        it('should be an instance of a resource', () => {
            expect(api.videos.conversions).to.be.instanceOf(Resource);
        });
        it('should have a create function', () => {
            expect(api.videos.conversions.create).to.be.a('function');
        });
        it('should have a delete function', () => {
            expect(api.videos.conversions.delete).to.be.a('function');
        });
        it('should have a list function', () => {
            expect(api.videos.conversions.list).to.be.a('function');
        });
        it('should have a show function', () => {
            expect(api.videos.conversions.show).to.be.a('function');
        });
        it('should not have an update function', () => {
            expect(() => api.videos.conversions.update()).to.throw(
                UnsupportedAction
            );
        });
    });

    describe('videos tags resource', function() {
        it('should be an instance of a resource', () => {
            expect(api.videos.tags).to.be.instanceOf(Resource);
        });
        it('should not have a create function', () => {
            expect(api.videos.tags.create).to.throw(UnsupportedAction);
        });
        it('should not have a delete function', () => {
            expect(api.videos.tags.delete).to.throw(UnsupportedAction);
        });
        it('should have a list function', () => {
            expect(api.videos.tags.list).to.be.a('function');
        });
        it('should not have a show function', () => {
            expect(api.videos.tags.show).to.throw(UnsupportedAction);
        });
        it('should not have an update function', () => {
            expect(api.videos.tags.update).to.throw(UnsupportedAction);
        });
    });

    describe('videos thumbnails resource', function() {
        it('should be an instance of a resource', () => {
            expect(api.videos.thumbnails).to.be.instanceOf(Resource);
        });
        it('should not have a create function', () => {
            expect(api.videos.thumbnails.create).to.throw(UnsupportedAction);
        });
        it('should not have a delete function', () => {
            expect(api.videos.thumbnails.delete).to.throw(UnsupportedAction);
        });
        it('should not have an list function', () => {
            expect(api.videos.thumbnails.list).to.throw(UnsupportedAction);
        });
        it('should have a show function', () => {
            expect(api.videos.thumbnails.show).to.be.a('function');
        });
        it('should have a update function', () => {
            expect(api.videos.thumbnails.update).to.be.a('function');
        });

        describe('videos tracks resource', function() {
            it('should be an instance of a resource', () => {
                expect(api.videos.tracks).to.be.instanceOf(Resource);
            });
            it('should have a create function', () => {
                expect(api.videos.tracks.create).to.be.a('function');
            });
            it('should have a delete function', () => {
                expect(api.videos.tracks.delete).to.be.a('function');
            });
            it('should have a list function', () => {
                expect(api.videos.tracks.list).to.be.a('function');
            });
            it('should have a show function', () => {
                expect(api.videos.tracks.show).to.be.a('function');
            });
            it('should have an update function', () => {
                expect(api.videos.tracks.update).to.be.a('function');
            });
        });
    });
});
