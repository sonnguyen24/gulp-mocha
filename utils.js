'use strict';

// TODO: Use `Object.entries` when targeting Node.js 8
function objectEntries(object) {
	const entries = [];

	for (const key of Object.keys(object)) {
		const value = object[key];
		entries.push([key, value]);
	}

	return entries;
}

function convertValue(key, value) {
	if (typeof value === 'object') {
		return objectEntries(value)
			.map(e => convertValue(key.concat([e[0]]), e[1]))
			.join(',');
	}
	return key.join('.') + '=' + value.toString();
}
function convertObjectToList(object) {
	return objectEntries(object)
		.map(e => convertValue([e[0]], e[1]))
		.join(',');
}

module.exports = {
	convertObjectToList
};
