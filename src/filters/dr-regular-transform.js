'use strict';

module.exports = transform;

/**
 * Change regular edition data into those matching DR transformed editions
 *
 * @param {Object} positions
 * @return {Object}
 */
function transform(positions) {
	const groups = [];
	positions.forEach((position) => {
		if (position.group) {
			groups.push({
				items: position.items,
				data: position.group.data,
				name: position.group.data.name
			});
		} else {
			// All items not in a group is put in an new group to match transformed behavior
			groups.push({
				// If drtv placeholder is detected, an empty group is returned
				items: position.item.data.id === 'drtv' ? [] : [position.item],
				data: {},
				// The default name for root items wrapped in a new group should be "pakke-basic"
				name: position.item.data.id === 'drtv' ? 'drtv' : 'pakke-basic'
			});
		}
	});
	return groups;
}
