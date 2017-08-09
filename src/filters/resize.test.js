'use strict';
process.env.NODE_ENV = 'test';

const resize = require('./resize');
const expect = require('chai').expect;

describe('Resize images', () => {
	it('should generate a new URL', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg?t[resize][width]=200',
			{width: 300, height: 200, flag: '!'},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&t%5Bresize%5D%5Bflag%5D=!&accessToken=9cc8aca0ff6e9febc2efddfae52cdc46d4272db437e7fbf89ec5479f3dfcc6bd');
			});
	});

	it('should work on URLs without parameters', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg',
			{width: 1},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=1&accessToken=681714c0de2a8640b16cfc4080d19bb83046a7aaf4e1b41e094195c9b50672db');
			});
	});

	it('should add accessToken even when no parameters', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg',
			{},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?accessToken=b1b33e9006bc0833fbeb57bf10c07a59099b13edff52977aa2db6443628152c4');
			});
	});

	it('should preserve non-resize parameters', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg?yo=true',
			{width: 1},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?yo=true&t%5Bresize%5D%5Bwidth%5D=1&accessToken=5abcdf69e9b5cd521060c3eb60e08ebfa135c225aa91aa4b8c52a7b50d6ed3db');
			});
	});

	it('should remove all existing resize paramters', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bsnakes%5D=1000000',
			{width: 1},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=1&accessToken=681714c0de2a8640b16cfc4080d19bb83046a7aaf4e1b41e094195c9b50672db');
			});
	});

	it('should replace existing accessToken', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg?accessToken=abc123',
			{width: 1},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=1&accessToken=681714c0de2a8640b16cfc4080d19bb83046a7aaf4e1b41e094195c9b50672db');
			});
	});

	it('should add all resize parameters', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg',
			{width: 1, height: 1},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=1&t%5Bresize%5D%5Bheight%5D=1&accessToken=e5c85ac1fb1529f395ce5bff6e38f24c0bce5efb0e9e4c5ba2f75f72bde4965e');
			});
	});
});
