import {
	useContext,
	useReducer,
	useMemo,
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
import {
	DEFCLASSES
} from './utils';

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

const __experimental_useCanvasReducer = () => {
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

const __experimental_useAttributes = (object: any, defs: any = {}) => {

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

const useCreateDef = (defName: string, initState: any = {}) : [any, Function] => {

	const def = useMemo(() => new DEFCLASSES[defName](initState), []);
	const setDef = useCallback(options => {
		def.set(options);
	}, []);

	return [def, setDef];

};

export {
	useCanvas,
	useCollection,
	useCreateDef
};
