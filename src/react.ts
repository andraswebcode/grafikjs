import {
	createElement
} from 'react';
import {
	createRoot
} from 'react-dom/client';
import {
	Example
} from './example';

const container = document.getElementById('wrap');
const root = createRoot(container);

root.render(createElement(Example));
