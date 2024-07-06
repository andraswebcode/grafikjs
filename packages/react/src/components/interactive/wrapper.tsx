import { useRef, useState, useEffect, useCallback } from 'react';
import { useCanvas } from './../../hooks';

const Wrapper = ({ className = 'grafik-wrapper', children }: any) => {
	const { style }: any = useCanvas(
		(canvas) => ({
			style: canvas.get(['width', 'height'])
		}),
		'set'
	);
	const ref = useRef(null);
	const onResize = useCallback(() => {
		if (ref?.current) {
			const { clientWidth, clientHeight } = ref.current.parentElement;
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return (
		<div ref={ref} className={className} style={style}>
			{children}
		</div>
	);
};

export { Wrapper };
