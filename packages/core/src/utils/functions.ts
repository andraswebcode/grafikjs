import { ParsedCurve, ParsedPath } from './../types';
import { PIBY180 } from './constants';

const clamp = (value: number, min: number, max: number): number =>
	Math.min(Math.max(value, min), max);

const toFixed = (value: any, fractionDigits = 2): number => {
	const _value = parseFloat(value) || 0;
	return Math.round(_value * 10 ** fractionDigits) / 10 ** fractionDigits || 0;
};

const deg2Rad = (degree: number): number => degree * PIBY180;

const rad2Deg = (degree: number): number => degree / PIBY180;

const randInt = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const uniqueId = (prefix?: string): string => {
	const pf = prefix ? prefix + '-' : '';
	const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let str = '',
		i;

	for (i = 0; i < 12; i++) {
		str += charset[randInt(0, charset.length - 1)];
	}

	return pf + str;
};

const kebabize = (name: string) => name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const camelize = (name: string) => name.replace(/-([a-z])/g, (_m, letter) => letter.toUpperCase());

// Thanks ChatGPT! :-)
const isEqual = (value1: any, value2: any, visited = new Set()): boolean => {
	// Check if both values are of the same type
	if (typeof value1 !== typeof value2) {
		return false;
	}

	// If values are primitive types, directly compare them
	if (typeof value1 !== 'object' || value1 === null || value2 === null) {
		return value1 === value2;
	}

	// If both values are the same object reference, they are equal
	if (value1 === value2) {
		return true;
	}

	// Check for circular references
	if (visited.has(value1) || visited.has(value2)) {
		return false;
	}

	visited.add(value1);
	visited.add(value2);

	// Check if both values are arrays
	if (Array.isArray(value1) && Array.isArray(value2)) {
		if (value1.length !== value2.length) {
			return false;
		}
		// Compare array elements recursively
		for (let i = 0; i < value1.length; i++) {
			if (!isEqual(value1[i], value2[i], visited)) {
				return false;
			}
		}
		return true;
	}

	// Check if both values are functions
	if (typeof value1 === 'function' && typeof value2 === 'function') {
		// Check if function sources are the same
		return value1.toString() === value2.toString();
	}

	// Check if both values are objects
	if (typeof value1 === 'object' && typeof value2 === 'object') {
		const keys1 = Object.keys(value1);
		const keys2 = Object.keys(value2);

		// Check if both objects have the same number of keys
		if (keys1.length !== keys2.length) {
			return false;
		}

		// Compare keys and values recursively
		for (const key of keys1) {
			if (!isEqual(value1[key], value2[key], visited)) {
				return false;
			}
		}
		return true;
	}

	// If values are of different types and not arrays or objects, they are not equal
	return false;
};

const omitBy = (obj: any, callback: (value: any, key: string, object: any) => boolean) => {
	const newObj = {};

	for (let key in obj) {
		if (!callback(obj[key], key, obj)) {
			newObj[key] = obj[key];
		}
	}

	return newObj;
};

const CURVE_VALUES_LENGTHS = {
	M: 2,
	m: 2,
	L: 2,
	l: 2,
	H: 1,
	h: 1,
	V: 1,
	v: 1,
	C: 6,
	c: 6,
	S: 4,
	s: 4,
	Q: 4,
	q: 4,
	T: 2,
	t: 2,
	A: 7,
	a: 7,
	Z: 0,
	z: 0
};

const _groupArray = (array: any[], size) => {
	const grouped: any[] = [];

	for (let i = 0; i < array.length; i += size) {
		grouped.push(array.slice(i, i + size));
	}

	return grouped;
};

const parsePath = (string: string): ParsedPath => {
	const parsed: ParsedCurve[] = [];

	(string.match(/([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]+)?/g) || []).forEach(
		(curve, i, array) => {
			curve = curve.trim();
			const command = curve.replace(/[^MmLlHhVvCcSsQqTtAaZz]/g, '');
			const values = (curve.match(/[\-\.\d]+/g) || []).map((n: string) => toFixed(n));
			const commandLength = CURVE_VALUES_LENGTHS[command];
			if (values.length === commandLength) {
				// @ts-ignore
				parsed.push([command, ...values]);
			} else {
				_groupArray(values, commandLength).forEach((values) => {
					//@ts-ignore
					parsed.push([command, ...values]);
				});
			}
		}
	);

	return parsed;
};

export {
	clamp,
	toFixed,
	deg2Rad,
	rad2Deg,
	randInt,
	uniqueId,
	isEqual,
	kebabize,
	camelize,
	omitBy,
	parsePath
};
