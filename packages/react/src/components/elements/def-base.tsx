import {
	useState,
	useEffect,
	useCallback
} from 'react';

const DefBase = ({
	TagName,
	def
}: any) => {

	const [attributes, setAttributes] = useState(def.getAttributes());
	const onDefSet = useCallback(() => {
		setAttributes(def.getAttributes());
	}, []);

	useEffect(() => {

		def.on('set', onDefSet);

		return () => {
			def.off('set', onDefSet);
		};

	}, []);

	return (
		<TagName {...attributes}>
			{def.isCollection && def.mapChildren(child => (
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
