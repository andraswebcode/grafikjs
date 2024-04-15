import * as shapes from './../shapes';
import {
	PIBY180,
	CLASSNAMES
} from './constants';

const clamp = (value: number, min: number, max: number) : number => {
	// @ts-ignore
	const _value = parseFloat(value) || 0;
	return Math.min(Math.max(_value, min), max);
}

const deg2Rad = (degree: number) : number => (degree * PIBY180);

const getClassFromTagName = (tagName: string) => {
	return shapes[CLASSNAMES[tagName]];
}

export {
	clamp,
	deg2Rad,
	getClassFromTagName
};
