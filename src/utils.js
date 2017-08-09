'use strict';

const JSSHA = require('jssha');

module.exports = {
	signUrl(url, secret) {
		const sha = new JSSHA('SHA-256', 'TEXT');
		sha.setHMACKey(secret, 'TEXT');
		sha.update(url);

		return url + (url.match(/\?/) ? '&' : '?') + 'accessToken=' + sha.getHMAC('HEX');
	}
};
