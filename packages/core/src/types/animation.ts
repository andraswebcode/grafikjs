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
	to: number;
	value: any;
	easing?: EasingName;
}

interface TrackObject {
	property: string;
	easing?: EasingName;
	keyframes: KeyframeObject[];
}

interface AnimationObject {
	easing?: EasingName;
	tracks: TrackObject[];
}

interface TimelineObject {
	animations: AnimationObject[];
}

export { TimelineObject, AnimationObject, TrackObject, KeyframeObject, EasingName };
