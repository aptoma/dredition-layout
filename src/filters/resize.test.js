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
				expect(url).to.equal('http://ass.com/users/aptoma/images/1.jpg?t[resize][width]=300&t[resize][height]=200&t[resize][flag]=!&accessToken=ade8cc25cceffe1aca3a91162f1705e118c3cfb21570ab64aff26011e4965b21');
			});
	});
});
