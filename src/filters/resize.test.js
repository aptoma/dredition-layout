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
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=300&t%5Bresize%5D%5Bheight%5D=200&t%5Bresize%5D%5Bflag%5D=!&accessToken=ade8cc25cceffe1aca3a91162f1705e118c3cfb21570ab64aff26011e4965b21');
			});
	});

	it('should work on URLs without parameters', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg',
			{width: 1},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=1&accessToken=626b3dc7b0cfdaad20d15f09ed0b32a2153066ae41320a79f21dd32ca0c636af');
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
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?yo=true&t%5Bresize%5D%5Bwidth%5D=1&accessToken=84be4536679e2777dd631d59ea1a606ad2d77998f03715d1b9d8316feec0c27f');
			});
	});

	it('should remove all existing resize paramters', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bsnakes%5D=1000000',
			{width: 1},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=1&accessToken=626b3dc7b0cfdaad20d15f09ed0b32a2153066ae41320a79f21dd32ca0c636af');
			});
	});

	it('should replace existing accessToken', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg?accessToken=abc123',
			{width: 1},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=1&accessToken=626b3dc7b0cfdaad20d15f09ed0b32a2153066ae41320a79f21dd32ca0c636af');
			});
	});

	it('should add all resize parameters', () => {
		return resize(
			'http://ass.com/users/aptoma/images/1.jpg',
			{width: 1, height: 1},
			'secret'
		)
			.then((url) => {
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t%5Bresize%5D%5Bwidth%5D=1&t%5Bresize%5D%5Bheight%5D=1&accessToken=ed6dab29d3b5c311d302456ed033a3dc6a6b631bae553310349cf089d5723282');
			});
	});
});
