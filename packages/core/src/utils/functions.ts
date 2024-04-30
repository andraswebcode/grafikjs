import {
	PIBY180
} from './constants';

const clamp = (value: number, min: number, max: number) : number => Math.min(Math.max(value, min), max);

const toFixed = (value: number, fractionDigits = 2) : number => ((Math.round(value * (10 ** fractionDigits)) / (10 ** fractionDigits)) || 0);

const deg2Rad = (degree: number) : number => (degree * PIBY180);

const rad2Deg = (degree: number) : number => (degree / PIBY180);

const randInt = (min: number, max: number) : number => Math.floor(Math.random() * (max - min + 1)) + min;

const uniqueId = (prefix?: string) : string => {

	const pf = prefix ? prefix + '-' : '';
	const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let str = '', i;

	for (i = 0; i < 12; i++){
		str += charset[randInt(0, charset.length - 1)];
	}

	return pf + str;

};

const isEqual = (obj1: any, obj2: any) : boolean => {

	let isEqual = true;

	if (Object.keys(obj1).length !== Object.keys(obj2).length){
		return false;
	}

	Object.keys(obj1).forEach(key => {
		if (obj1[key] !== obj2[key]){
			isEqual = false;
		}
	});

	return isEqual;

};

export {
	clamp,
	toFixed,
	deg2Rad,
	rad2Deg,
	randInt,
	uniqueId,
	isEqual
};
