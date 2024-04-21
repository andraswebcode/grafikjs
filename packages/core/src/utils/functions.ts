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

export {
	clamp,
	toFixed,
	deg2Rad,
	rad2Deg,
	uniqueId
};
