'use strict';

const assert = require('assert');
const expect = require('chai').expect;

const utils = require('../jwplatform/utils');

describe('Utils', function() {
    describe('generate nonce', function() {
        const nonce = utils.generateNonce();

        it('should generate random 8 character string', () => {
            expect(nonce.length).to.equal(8);
        });
        it('should be a string', () => {
            expect(nonce).to.be.string;
        });
        it('should be convertable to an integer', () => {
            Number(nonce);
        });
    });
    describe('alphabetical sort', function() {
        it('should sort strings alphabetically in ascending order', () => {
            expect(utils.alphabeticalSort('a', 'z')).to.equal(-1);
            expect(utils.alphabeticalSort('z', 'a')).to.equal(1);
        });
    });
});
