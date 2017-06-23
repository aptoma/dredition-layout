'use strict';

module.exports = getImageRatio;

// Typically used ratios
const normalRatios = [
	[1, 1],
	[16, 9],
	[9, 16],
	[2, 1],
	[1, 2],
	[4, 3],
	[3, 4],
	[3, 2],
	[2, 3]
];

/**
 * Reduce down to the lowest possible fraction
 *
 * This is copy/paste with some formatting changes
 *
 * @param {Number} numerator
 * @param {Number} denominator
 * @return {Array} lowest numerator, denominator
 */
function reduce(numerator, denominator) {
	const gcd = (a, b) => {
		return b ? gcd(b, a % b) : a;
	};

	const cd = gcd(numerator, denominator);

	return [numerator / cd, denominator / cd];
}

/**
 * Get approximated ratio
 *
 * Get either the lowest ratio, or one that matches closely to the accepted ratios
 *
 * @param {Number} width
 * @param {Number} height
 * @param {Array[]} acceptedRatios
 * @return {Array} width, height
 */
function getApproximatedRatio(width, height, acceptedRatios) {
	const ratio = width / height;
	let [reducedWidth, reducedHeight] = reduce(width, height);

	acceptedRatios.forEach(([ratioWidth, ratioHeight]) => {
		const normalRatio = ratioWidth / ratioHeight;

		if (Math.abs(ratio - normalRatio) < 0.005) {
			reducedWidth = ratioWidth;
			reducedHeight = ratioHeight;
		}
	});

	return [reducedWidth, reducedHeight];
}

/**
 * Get the image ratio
 *
 * @param {Object} image must contain width and height
 * @param {String} [separator='-']
 * @param {Array} [acceptedRatios=normalRatios]
 * @return {String}
 */
function getImageRatio(image, separator = '-', acceptedRatios = normalRatios) {
	const {width, height} = image;
	const [reducedWidth, reducedHeight] = getApproximatedRatio(width, height, acceptedRatios);

	return reducedWidth + separator + reducedHeight;
}
