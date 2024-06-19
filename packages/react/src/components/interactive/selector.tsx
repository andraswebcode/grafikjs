import {
	useCanvas
} from './../../hooks'

const Selector = () => {

	const {
		style,
		attributes,
		multiselection
	} : any = useCanvas(canvas => ({
		style:canvas.getSelector().getStyle(),
		attributes:canvas.getSelector().getAttributes(),
		multiselection:canvas.multiselection
	}), 'selector:updated');

	return multiselection ? (
		<div
			style={style}
			{...attributes} />
	) : null;

};

export {
	Selector
};
