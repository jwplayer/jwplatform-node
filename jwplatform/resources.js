'use strict';

// All available resources, includes overrides and unavailable routes (specified via null value)
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
        create: null,
        delete: null,
        list: {
            method: 'post',
            paramType: 'body',
        },
        update: null,
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
