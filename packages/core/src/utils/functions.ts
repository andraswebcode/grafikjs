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

const rad2Deg = (degree: number) : number => (degree / PIBY180);

const uniqueId = () : string => {
	// @ts-ignore
	if (!uniqueId._index){
		// @ts-ignore
		uniqueId._index = 0;
	}
	// @ts-ignore
	return 'elem' + uniqueId._index++;
};

const getClassFromTagName = (tagName: string) => {
	return shapes[CLASSNAMES[tagName]];
}

export {
	clamp,
	deg2Rad,
	rad2Deg,
	uniqueId,
	getClassFromTagName
};
