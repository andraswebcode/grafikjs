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

interface KeyframeObject {
	time: number;
	value: any;
	easing: EasingName;
}

interface TrackObject {
	property: string;
	children: KeyframeObject[];
}

interface AnimationObject {
	shape: any;
	children: TrackObject[];
}

interface TimelineObject {
	children: AnimationObject[];
}

export { TimelineObject, AnimationObject, TrackObject, KeyframeObject, EasingName };
