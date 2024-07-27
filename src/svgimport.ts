import { createApp } from 'vue';
import App from './svgimport/App.vue';
import { createGrafik } from '@grafikjs/vue';
import '@grafikjs/styles';

const grafik = createGrafik({
	hasDrawingArea: true,
	autoSize: true,
	showGrid: true,
	gridSize: 50,
	drawingWidth: 400,
	drawingHeight: 400
});

createApp(App).use(grafik).mount('#wrap');
