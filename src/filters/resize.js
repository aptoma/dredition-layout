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
		url = url.replace(/(&|\?)accessToken=[a-f0-9]*/, '');

		options = Object.assign({}, options);

		// __keywords is added by nunjucks
		delete options.__keywords;

		// remove all instances of t[resize] parameters in URL before adding only new values
		url = url.replace(/(&|\?)t\[resize\]\[\w*\]=(<|>|\^|!|%|@|\d)*/g, '');
		Object.keys(options).forEach((key) => {
			url += (url.match(/\?/) ? '&' : '?') + 't[resize][' + key + ']=' + encodeURIComponent(options[key]);
		});

		url = utils.signUrl(url, secret);
		url = url.replace(/\[/g, '%5B').replace(/\]/g, '%5D');

		resolve(url);
	});
}
