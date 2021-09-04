const { createGraph } = require('../src/core');

describe('core', () => {
	test('foobar', () => {
		expect(typeof createGraph).toBe('function');
	});
});
