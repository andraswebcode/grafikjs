import {
	useState,
	useEffect,
	useCallback
} from 'react';
import {
	useElement
} from './../../hooks';

const DefBase = ({
	TagName,
	def
}: any) => {

	const {
		attributes,
		isCollection,
		mapDefs
	} = useElement(def, def => ({
		attributes:def.getAttributes(),
		isCollection:def.isCollection,
		mapDefs:def.mapChildren.bind(def)
	}), 'set');

	return (
		<TagName {...attributes}>
			{isCollection && mapDefs(child => (
				<DefBase
					key={child.id}
					TagName={child.get('tagName')}
					def={child} />
			))}
		</TagName>
	);

};

export {
	DefBase
};
