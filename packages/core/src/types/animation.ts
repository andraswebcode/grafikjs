interface TimelineObject {}

interface AnimationObject {}

interface TrackObject {
	property: string;
	duration: number;
}

interface KeyframeObject {
	duration: number;
	delay: number;
	easing: string;
}

export { TimelineObject, AnimationObject, TrackObject, KeyframeObject };
