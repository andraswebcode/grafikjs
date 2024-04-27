import {
	useContext,
	useReducer
} from 'react';
import {
	CanvasContext,
	CollectionContext
} from './contexts';

const useCanvas = () : object => useContext(CanvasContext);

const useCollection = () : object => useContext(CollectionContext);

const _canvasReducer = (state, {method, args}) => {
	if (!state.canvas[method]){
		console.warn(`Method: ${method}() does not exists on canvas.`);
		return {...state};
	}
	state.canvas[method](...args);
	return {...state};
};

const useCanvasReducer = () => {
	const canvas = useCanvas();
	// @ts-ignore
	const [state, dispatch] = useReducer(_canvasReducer, {canvas});
	return {
		// @ts-ignore
		dispatch:(method, ...args) => dispatch({
			method,
			args
		}),
		canvas:state.canvas
	};
};

export {
	useCanvas,
	useCollection,
	useCanvasReducer
};
