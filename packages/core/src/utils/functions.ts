import {
	PIBY180
} from './constants';

const clamp = (value: number, min: number, max: number) : number => Math.min(Math.max(value, min), max);

const toFixed = (value: number, fractionDigits = 2) : number => ((Math.round(value * (10 ** fractionDigits)) / (10 ** fractionDigits)) || 0);

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
	uniqueId,
	isEqual
};
