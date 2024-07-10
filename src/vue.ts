import { createApp } from 'vue';
import App from './example2.vue';
import { createGrafik } from '@grafikjs/vue';
import '@grafikjs/styles';

const grafik = createGrafik({
	hasDrawingArea: true,
	autoSize: true,
	showGrid: true,
	gridSize: 50,
	mode: 'draw',
	penWidth: 4,
	penColor: 'forestgreen',
	drawingWidth: 400,
	drawingHeight: 400
});

createApp(App).use(grafik).mount('#wrap');
