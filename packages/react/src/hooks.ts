import {
	useRef,
	useContext,
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

const useCanvasContext = () : any => useContext(CanvasContext);

const useCollectionContext = () : any => useContext(CollectionContext);

const _useCollector = (collector: Function, context: any, eventName = 'all') => {

	const collectedRef = useRef(null);

	if (!collectedRef.current){
		collectedRef.current = collector(context);
	}

	const [collected, setCollected] = useState(collectedRef.current);
	const onEventEmitted = useCallback(() => {
		const newCollected = collector(context);
		if (!isEqual(collectedRef.current, newCollected)){
			setCollected(newCollected);
			collectedRef.current = newCollected;
		}
	}, []);

	useEffect(() => {

		context.on(eventName, onEventEmitted);

		return () => {
			context.off(eventName, onEventEmitted);
		};

	}, []);

	return collected;

};

const useCanvas = (collector: Function, eventName?: string) => {
	const canvas = useCanvasContext();
	return _useCollector(collector, canvas, eventName);
};

const useCollection = (collector: Function, eventName?: string) => {
	const collection = useCollectionContext();
	return _useCollector(collector, collection, eventName);
};

const useElement = (element: any, collector: Function, eventName?: string) => {
	return _useCollector(collector, element, eventName);
};

export {
	useCanvas,
	useCollection,
	useElement,
	useCanvasContext,
	useCollectionContext
};
