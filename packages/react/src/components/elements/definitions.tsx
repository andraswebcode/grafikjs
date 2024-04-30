import {
	DefBase
} from './def-base';

const withTagName = tagName => props => (
	<DefBase
		TagName={tagName}
		{...props} />
);

const LinearGradient = withTagName('linearGradient');

export {
	LinearGradient
};
