import {
	useCanvas
} from './../../hooks';

const Wrapper = ({
	className = 'grafik-wrapper',
	children
}: any) => {

	const canvas = useCanvas();
	// @ts-ignore
	const style = canvas.get(['width', 'height']);

	return (
		<div
			className={className}
			style={style} >
			{children}
		</div>
	);

};

export {
	Wrapper
};
