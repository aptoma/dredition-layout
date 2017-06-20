'use strict';

const JsSha = require('jssha');

module.exports = {
	signUrl(url, secret) {
		const sha = new JsSha('SHA-256', 'TEXT');
		sha.setHMACKey(secret, 'TEXT');
		sha.update(url);

		return url + '&accessToken=' + sha.getHMAC('HEX');
	}
};
