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
		url = decodeURIComponent(url);
		url = url.replace(/(&|\?)accessToken=[a-f0-9].*/, '');

		options = Object.assign({}, options);

		// __keywords is added by nunjucks
		delete options.__keywords;

		Object.keys(options).some((key) => {
			if (key === 'width' || key === 'height') {
				url = url.replace(/\&t\[resize\]\[(width|height)\]=\d.*/g, '');
				url += (url.match(/\?/) ? '&' : '?') + 't[resize][' + key + ']=' + options[key];
				return false;
			}
		});

		resolve(utils.signUrl(url, secret));
	});
}
