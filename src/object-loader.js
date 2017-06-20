'use strict';

module.exports = ObjectLoader;

function ObjectLoader(templates) {
	this.templates = templates;
}

ObjectLoader.prototype.getSource = function (name) {
	return {
		src: this.templates[name],
		path: name
	};
};
