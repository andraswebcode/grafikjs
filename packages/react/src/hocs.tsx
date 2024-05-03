import {
	useMemo,
	useEffect
} from 'react';

import {
	useCollectionContext
} from './hooks';
import {
	CLASSES
} from './utils';

const withCollectionContext = (Component, tagName: string) => ({
	children,
	...props
}: any) => {

	const collection: any = useCollectionContext();
	
	const shape = useMemo(() => {
		const Shape = CLASSES[tagName];
		return new Shape(props);
	}, []);

	useEffect(() => {

		collection.add(shape);

		return () => {
			collection.remove(shape);
		};

	}, []);

	return (
		<Component
			TagName={tagName}
			shape={shape}
			props={props} >
			{children}
		</Component>
	);

};

export {
	withCollectionContext
};
