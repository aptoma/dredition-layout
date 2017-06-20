'use strict';

const Promise = require('bluebird');
const nunjucks = require('nunjucks');
const ObjectLoader = require('./object-loader');
const resizeFilter = require('./filters/resize');

exports.renderString = renderString;
exports.renderJsonTemplate = renderJsonTemplate;

/**
 * Render a template string
 *
 * @param {String} template
 * @param {Object} data
 * @param {Object} [options={}]
 * @return {Promise}
 */
function renderString(template, data, options = {}) {
	const env = getEnvironment(undefined, options.transformSecret);
	const renderTemplate = Promise.promisify(env.renderString, {context: env});

	return renderTemplate(template, data);
}

/**
 * Render a JSON structured template
 *
 * @param {Object} templates
 * @param {Object} data
 * @param {Object} [options={}]
 * @return {Promise}
 */
function renderJsonTemplate(templates, data, options = {}) {
	options = Object.assign({
		entrypoint: 'index.html',
		transformSecret: null
	}, options);

	const env = getEnvironment([new ObjectLoader(templates)], options.transformSecret);

	// For some reason, env.render didn't like being promisified wit Promise.promisify in this case
	return new Promise((resolve, reject) => {
		env.render(options.entrypoint, data, (err, res) => {
			if (err) {
				return reject(err);
			}

			resolve(res);
		});
	});
}

/**
 * Get a nunjucks environment
 *
 * @param {Object[]} loaders
 * @param {String} imageTransformSecret
 * @return {nunjucks.Environment}
 */
function getEnvironment(loaders, imageTransformSecret) {
	const env = new nunjucks.Environment(loaders, {
		autoescape: true
	});

	env.addFilter('resize', (url, options, done) => {
		resizeFilter(url, options, imageTransformSecret)
			.then((url) => done(null, url));
	}, true);

	return env;
}
