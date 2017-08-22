'use strict';

const utils = require('../utils.js');
const qs = require('qs');

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
		const urlParts = url.split('?');
		const baseUrl = urlParts[0];
		const query = urlParts.length > 1 ? qs.parse(urlParts[1]) : {};

		// __keywords is added by nunjucks
		options = Object.assign({}, options);
		delete options.__keywords;

		if (!query.t) {
			query.t = {};
		}

		delete query.accessToken;
		query.t.resize = Object.assign({}, options);

		const queryString = qs.stringify(query);
		const signUrl = baseUrl + (queryString ? '?' + decodeURIComponent(queryString) : '');
		const accessToken = utils.getAccessToken(signUrl, secret);

		// We return a new URL with encoded query parameters
		resolve(baseUrl + '?' + (queryString ? queryString + '&' : '') + 'accessToken=' + accessToken);
	});
}
