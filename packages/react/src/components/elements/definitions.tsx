import {
	DefBase
} from './def-base';

const withTagName = tagName => props => (
	<DefBase
		TagName={tagName}
		{...props} />
);

const LinearGradient = withTagName('linearGradient');
const RadialGradient = withTagName('radialGradient');
const Pattern = withTagName('pattern');

export {
	LinearGradient,
	RadialGradient,
	Pattern
};
