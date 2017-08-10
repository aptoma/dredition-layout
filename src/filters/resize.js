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
		// Decode all ASS [t]ransform array brackets
		url = url.replace(/(&|\?)t%5B\w*%5D%5B\w*%5D/g, (assParam) => {
			return assParam.replace(/%5B/g, '[').replace(/%5D/g, ']');
		});

		url = url.replace(/(&|\?)accessToken=[a-f0-9]*/, '');

		options = Object.assign({}, options);

		// __keywords is added by nunjucks
		delete options.__keywords;

		// remove all instances of t[resize] parameters in URL before adding only new values
		url = url.replace(/(&|\?)t\[resize\]\[\w*\]=(<|>|\^|!|%|@|\d)*/g, '');
		Object.keys(options).forEach((key) => {
			url += (url.match(/\?/) ? '&' : '?') + 't[resize][' + key + ']=' + encodeURIComponent(options[key]);
		});

		// Add ASS accessToken before encoding array brackets
		url = utils.signUrl(url, secret);

		// Encode all ASS [t]ransform array brackets
		url = url.replace(/(&|\?)t\[\w*]\[\w*\]/g, (assParam) => {
			return assParam.replace(/\[/g, '%5B').replace(/\]/g, '%5D');
		});

		resolve(url);
	});
}
