'use strict';

class UnsupportedAction extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, UnsupportedAction);
    }
}

module.exports = {
    UnsupportedAction,
};
