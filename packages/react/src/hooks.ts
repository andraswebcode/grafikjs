import {
	useContext
} from 'react';
import {
	CanvasContext
} from './contexts';

const useCanvas = () : object => useContext(CanvasContext);

export {
	useCanvas
};
