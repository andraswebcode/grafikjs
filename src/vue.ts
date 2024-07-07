import { createApp } from 'vue';
import App from './example.vue';
import { createGrafik } from '@grafikjs/vue';
import '@grafikjs/styles';

const grafik = createGrafik({
	hasDrawingArea: true,
	autoSize: true,
	showGrid: true,
	gridSize: 50,
	drawingWidth: 200,
	drawingHeight: 200
});

createApp(App).use(grafik).mount('#wrap');
