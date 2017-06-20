# DrEdition layout

Functions to render a DrEdition layout

# Installation

`npm install @aptoma/dredition-layout`

# Usage


## A single template string

```javascript
const layout = require('@aptoma/dredition-layout');

const groups = [
	{title: 'Group 1'},
	{title: 'Group 2'}
];

const templateString = `<div>
	{% for group in groups %}
		<h1>{{ group.title }}</h1>
	{% endfor %}
</div>`;

layout.renderString(template, data)
	.then((html) => {
		console.log('Result:', html);
	});
```

## JSON/object templates

```javascript
const templateObject = {
	'parent.html': '<h1>Groups</h1>{% block groups %}{% endblock %}',
	'index.html': `
{% extends 'parent.html'}

{% block groups %}
	<div>
		{% for group in groups %}
			<h1>{{ group.title }}</h1>
		{% endfor %}
	</div>
{% endblock %}`,
};

layout.renderJsonTemplate(template, data)
	.then((html) => {
		console.log('Result:', html);
	});

```
