import {
	useState,
	useEffect,
	useCallback
} from 'react';

import {
	useCanvasContext
} from './../../hooks';
import {
	DefBase
} from './def-base';

const Defs = () => {

	const canvas: any = useCanvasContext();
	const [defs, setDefs] = useState(canvas.getDefs());
	const onSetDefs = useCallback(() => {
		setDefs([...canvas.getDefs()]);
	}, []);

	useEffect(() => {
		canvas.on('defs:added', onSetDefs);
		return () => {
			canvas.off('defs:added', onSetDefs);
		};
	}, []);

	if (!defs.length){
		return null;
	}

	return (
		<defs>
			{defs.map(def => (
				<DefBase
					key={def.id}
					TagName={def.get('tagName')}
					def={def} />
			))}
		</defs>
	);

};

export {
	Defs
};
