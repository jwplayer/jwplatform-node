'use strict';

function generateNonce() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
}

function alphabeticalSort(a, b) {
    return a.localeCompare(b);
}

module.exports = {
    alphabeticalSort,
    generateNonce,
};
