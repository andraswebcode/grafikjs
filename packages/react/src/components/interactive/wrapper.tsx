import {
	useRef,
	useState,
	useEffect,
	useCallback
} from 'react';
import {
	useCanvas
} from './../../hooks';

const Wrapper = ({
	className = 'grafik-wrapper',
	children
}: any) => {

	const canvas: any = useCanvas();
	const [style, setStyle] = useState(canvas.get(['width', 'height']));
	const onCanvasSet = useCallback(() => {
		setStyle(canvas.get(['width', 'height']));
	}, []);

	useEffect(() => {

		canvas.on('set', onCanvasSet);

		return () => {
			canvas.off('set', onCanvasSet);
		};

	}, []);
	const ref = useRef(null);
	const onResize = useCallback(() => {
		if (ref?.current){
			const {
				clientWidth,
				clientHeight
			} = ref.current.parentElement;
			canvas.setResponsiveSize(clientWidth, clientHeight);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={className}
			style={style} >
			{children}
		</div>
	);

};

export {
	Wrapper
};
