'use strict';

const JsSha = require('jssha');

module.exports = resize;

/**
 * Resize a Smooth Storage image
 *
 * @param {String} url
 * @param {Object} options
 * @param {String} transformSecret
 * @return {Promise}
 */
function resize(url, options, transformSecret) {
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

		const sha = new JsSha('SHA-256', 'TEXT');
		sha.setHMACKey(transformSecret, 'TEXT');
		sha.update(url);

		url += '&accessToken=' + sha.getHMAC('HEX');

		resolve(url);
	});
}
