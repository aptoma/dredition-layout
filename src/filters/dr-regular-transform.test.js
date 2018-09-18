'use strict';
process.env.NODE_ENV = 'test';

const transform = require('./dr-regular-transform');
const expect = require('chai').expect;

describe('Transformed object', () => {
	it('should return empty output for empty input', () => {
		expect(transform([])).to.eql([]);
	});
});

describe('Transformed object', () => {
	it('should put root item into group named pakke-basic', () => {
		expect(transform(
			[{item: {data: {id: '1234'}}}]
		)).to.eql([
			{
				data: {},
				items: [{data: {id: '1234'}}],
				name: 'pakke-basic'
			}
		]);
	});
});

describe('Transformed object', () => {
	it('should keep grouped items in group', () => {
		expect(transform([
			{
				group: {data: {name: 'pakke-name'}},
				items: []
			}
		]
		)).to.eql([
			{
				data: {name: 'pakke-name'},
				items: [],
				name: 'pakke-name'
			}
		]);
	});
});

describe('Transformed object', () => {
	it('should correctly handle the drtv placeholder', () => {
		expect(transform(
			[{item: {data: {id: 'drtv'}}}]
		)).to.eql([
			{
				data: {},
				items: [],
				name: 'drtv'
			}
		]);
	});
});
