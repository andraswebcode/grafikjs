import {
	createElement
} from 'react';
import {
	createRoot
} from 'react-dom/client';
import {
	TestApp
} from './test-app';

const container = document.getElementById('wrap');
const root = createRoot(container);

root.render(createElement(TestApp));
