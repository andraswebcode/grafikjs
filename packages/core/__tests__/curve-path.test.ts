import { CurvePath } from '../src/maths';

describe('CurvePath', () => {
	test('should handle fromString and toString methods', () => {
		const path = new CurvePath();
		path.fromString('M 10 10 c 10 20 20 20 20 10');
		expect(path.toString()).toBe('M 10 10 C 20 30 30 30 30 20');
	});
});
