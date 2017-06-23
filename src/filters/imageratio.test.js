'use strict';
process.env.NODE_ENV = 'test';

const ratio = require('./imageratio');
const expect = require('chai').expect;

describe('Image ratio', () => {
	it('should calculate the ratio of the image', () => {
		expect(ratio({width: 160, height: 90})).to.equal('16-9');
		expect(ratio({width: 320, height: 180})).to.equal('16-9');
		expect(ratio({width: 480, height: 360})).to.equal('4-3');
		expect(ratio({width: 500, height: 600})).to.equal('5-6');
	});

	it('should find closest matching ratio', () => {
		expect(ratio({width: 480, height: 361})).to.equal('4-3');
	});

	it('should support custom separators', () => {
		expect(ratio({width: 320, height: 180}, 'x')).to.equal('16x9');
	});

	it('should support matching closest ratio of custom ratios', () => {
		expect(ratio({width: 500, height: 601})).to.equal('500-601');
		expect(ratio({width: 500, height: 601}, '-', [[5, 6]])).to.equal('5-6');
	});
});
