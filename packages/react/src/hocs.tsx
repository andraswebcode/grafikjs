import {
	useMemo,
	useEffect
} from 'react';

import {
	useCollection
} from './hooks';
import {
	CLASSNAMES
} from './utils';

const withCollectionContext = (Component, tagName: string) => (props: any) => {

	const collection: any = useCollection();
	
	const shape = useMemo(() => {
		const Shape = CLASSNAMES[tagName];
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
			props={props} />
	);

};

export {
	withCollectionContext
};
