import {
	useState,
	useEffect
} from 'react';

import {
	useCanvas
} from './../../hooks';
import {
	DefBase
} from './def-base';

const Defs = () => {

	const canvas: any = useCanvas();
	const [defs, setDefs] = useState(canvas.getDefs());

	useEffect(() => {
		canvas.on('defs:added', setDefs);
		return () => {
			canvas.off('defs:added', setDefs);
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
