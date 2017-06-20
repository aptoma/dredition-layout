'use strict';

const utils = require('../utils.js');

module.exports = resize;

/**
 * Resize a Smooth Storage image
 *
 * @param {String} url
 * @param {Object} options
 * @param {String} secret
 * @return {Promise}
 */
function resize(url, options, secret) {
	return new Promise((resolve) => {
		url = url.split('?');

		if (url.length <= 1) {
			return resolve(url);
		}

		url = url[0];
		options = Object.assign({}, options);

		// __keywords is added by nunjucks
		delete options.__keywords;

		const resize = [];
		Object.keys(options).forEach((key) => {
			resize.push('t[resize][' + key + ']=' + options[key]);
		});

		url += '?' + decodeURIComponent(resize.join('&'));

		resolve(utils.signUrl(url, secret));
	});
}
