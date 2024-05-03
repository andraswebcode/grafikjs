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

const _useCollector = (collector: Function, context: any) => {

	const collectedRef = useRef(null);

	if (!collectedRef.current){
		collectedRef.current = collector(context);
	}

	const [collected, setCollected] = useState(collectedRef.current);
	const onAll = useCallback(() => {
		const newCollected = collector(context);
		if (!isEqual(collectedRef.current, newCollected)){
			setCollected(newCollected);
			collectedRef.current = newCollected;
		}
	}, []);

	useEffect(() => {

		context.on('all', onAll);

		return () => {
			context.off('all', onAll);
		};

	}, []);

	return collected;

};

const useCanvas = (collector: Function) => {
	const canvas = useCanvasContext();
	return _useCollector(collector, canvas);
};

const useCollection = (collector: Function) => {
	const collection = useCollectionContext();
	return _useCollector(collector, collection);
};

export {
	useCanvas,
	useCollection,
	useCanvasContext,
	useCollectionContext
};
