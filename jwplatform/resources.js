'use strict';

// All available overrides, includes overrides or unsupported routes
module.exports = {
    'accounts/tags': {
        create: {
            method: 'post',
            paramType: 'qs',
        },
        delete: {
            method: 'post',
            paramType: 'qs',
        },
        update: {
            method: 'post',
            paramType: 'qs',
        },
    },
    'accounts/usage': {
        list: {
            method: 'post',
            paramType: 'body',
        },
    },
    channels: {
        create: {
            method: 'post',
            paramType: 'qs',
        },
        delete: {
            method: 'post',
            paramType: 'qs',
        },
    },
    'channels/videos': {},
    players: {},
    videos: {},
    'videos/conversions': {
        update: null,
    },
    'videos/tags': {
        create: null,
        delete: null,
        show: null,
        update: null,
    },
    'videos/thumbnails': {
        create: null,
        delete: null,
        list: null,
    },
    'videos/tracks': {},
};
