type EasingName =
	| 'linear'
	| 'quadraticIn'
	| 'quadraticOut'
	| 'quadraticInOut'
	| 'cubicIn'
	| 'cubicOut'
	| 'cubicInOut'
	| 'bounceIn'
	| 'bounceOut'
	| 'bounceInOut'
	| 'backIn'
	| 'backOut';

type EasingFunction = (k: number) => number;

type Easings = {
	[name in EasingName]: EasingFunction;
};

interface KeyframeObject {
	to: number;
	value: any;
	easing?: EasingName;
}

interface TrackObject {
	property: string;
	originalValue: any;
	keyframes: KeyframeObject[];
}

interface AnimationObject {
	loop?: boolean;
	tracks: TrackObject[];
}

interface TimelineObject {
	animations: AnimationObject[];
}

export {
	EasingName,
	EasingFunction,
	Easings,
	TimelineObject,
	AnimationObject,
	TrackObject,
	KeyframeObject
};
