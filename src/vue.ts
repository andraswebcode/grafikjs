import {
	createApp
} from 'vue';
import App from './example.vue';
import {
	createGrafik
} from '@grafikjs/vue';
import '@grafikjs/styles';

const grafik = createGrafik();

createApp(App).use(grafik).mount('#wrap');
