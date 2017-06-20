'use strict';
process.env.NODE_ENV = 'test';

const layout = require('./');
const helper = require('../test/helper');

const expect = require('chai').expect;

describe('Layout rendering', () => {
	let data;

	beforeEach(() => {
		data = {
			groups: [
				{
					id: 'group-1',
					name: 'group',
					items: [
						{
							data: {
								id: 1,
								title: 'Article 1',
								image: {
									url: 'https://smooth-storage.aptoma.no/users/aptoma/images/3816022.jpg?t%5Bcrop%5D%5Bx%5D=4&t%5Bcrop%5D%5By%5D=0&t%5Bcrop%5D%5Bwidth%5D=3996&t%5Bcrop%5D%5Bheight%5D=2248&t%5Bresize%5D%5Bwidth%5D=3996&t%5Bresize%5D%5Bheight%5D=2248&accessToken=a406eeada211036851c44766729c58bc4ff4563bafab245cec0d173885384267'
								},
								priority: true
							}
						},
						{
							data: {
								id: 2,
								title: 'Article 2',
								summary: 'Article summary',
								image: {
									url: 'http://example.com/image.jpg'
								}
							}
						}
					]
				},
				{
					id: 'group-2',
					name: 'group',
					items: [
						{
							data: {
								id: 3,
								title: 'Article 3',
								summary: 'Article summary',
								image: {
									url: 'http://example.com/image.jpg'
								}
							}
						},
						{
							data: {
								id: 4,
								title: 'Article 4',
								image: {
									url: 'http://example.com/image.jpg'
								}
							}
						}
					]
				}
			]
		};
	});

	describe('renderString', () => {
		it('should render the template', () => {
			return layout
				.renderString(helper.layoutTemplate, data, {transformSecret: 'secret'})
				.then((html) => {
					expect(html).to.equal(helper.renderedLayout);
				});
		});
	});

	describe('renderJsonTemplate', () => {
		it('should render the json structured template', () => {
			const template = {
				'index.html': helper.layoutTemplate
			};

			return layout
				.renderJsonTemplate(template, data, {transformSecret: 'secret'})
				.then((html) => {
					expect(html).to.equal(helper.renderedLayout);
				});
		});
	});
});
