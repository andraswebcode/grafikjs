import {
	useMemo,
	useEffect
} from 'react';
import {
	Group
} from '@grafikjs/core';

import {
	CollectionContext
} from './../../contexts';
import {
	useCollection
} from './../../hooks';
import {
	ShapeBase
} from './shape-base';

const ReactGroup = ({
	children,
	...props
}: any) => {

	const collection: any = useCollection();
	
	const group = useMemo(() => new Group(), []);

	useEffect(() => {

		collection.add(group);

		return () => {
			collection.remove(group);
		};

	}, []);

	return (
		<CollectionContext.Provider value={group}>
			<ShapeBase
				TagName='g'
				shape={group}
				props={props} >
				{children}
			</ShapeBase>
		</CollectionContext.Provider>
	);

};

export {
	ReactGroup as Group
};
