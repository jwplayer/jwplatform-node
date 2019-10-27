'use strict';

function generateNonce() {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

function alphabeticalSort(a, b) {
    return a.localeCompare(b);
}

module.exports = {
    alphabeticalSort,
    generateNonce,
};
