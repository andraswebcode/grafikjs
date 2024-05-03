import {
	useState,
	useEffect,
	useCallback
} from 'react';
import {
	useCanvasContext
} from './../../hooks'

const Selector = () => {

	const canvas: any = useCanvasContext();
	const selector = canvas.getSelector();
	const [style, setStyle] = useState(selector.getStyle());
	const onShapesSelecting = useCallback(() => {
		setStyle(selector.getStyle());
	}, []);

	useEffect(() => {

		canvas.on('selector:updated', onShapesSelecting);

		return () => {
			canvas.off('selector:updated', onShapesSelecting);
		};

	}, []);

	return canvas.multiselection ? (
		<div
			style={style}
			{...selector.getAttributes()} />
	) : null;

};

export {
	Selector
};
