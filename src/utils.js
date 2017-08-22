'use strict';

const JSSHA = require('jssha');

module.exports = {
	signUrl(url, secret) {
		return url + (url.match(/\?/) ? '&' : '?') + 'accessToken=' + this.getAccessToken(url, secret);
	},

	getAccessToken(url, secret) {
		const sha = new JSSHA('SHA-256', 'TEXT');
		sha.setHMACKey(secret, 'TEXT');
		sha.update(url);

		return sha.getHMAC('HEX');
	}
};
