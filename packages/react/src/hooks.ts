import {
	useContext,
	useReducer,
	useState,
	useEffect,
	useCallback
} from 'react';
import {
	isEqual
} from '@grafikjs/core';

import {
	CanvasContext,
	CollectionContext
} from './contexts';

const useCanvas = () : object => useContext(CanvasContext);

const useCollection = () : object => useContext(CollectionContext);

const _canvasReducer = (state, {method, args}) => {
	if (!method){
		return {...state};
	}
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

const useAttributes = (object: any, defs: any = {}) => {

	const [attributes, setAttributes] = useState(defs);
	const onObjectSet = useCallback(() => {
		const attrs = Object.keys(defs).reduce((memo, key) => {
			memo[key] = object.get(key);
			return memo;
		}, {});
		if (!isEqual(attrs, attributes)){
			// setAttributes(attrs);
		}
	}, []);

	useEffect(() => {
		object.on('set', onObjectSet);
		return () => {
			object.off('set', onObjectSet);
		};
	}, []);

	useEffect(() => {
		object.set(attributes, true);
	}, []);

	return {
		attributes,
		setAttributes
	};

};

export {
	useCanvas,
	useCollection,
	useCanvasReducer
};
