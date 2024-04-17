import {
	Renderer,
	Canvas,
	Rect
} from '@grafikjs/vanilla';

const wrap = document.getElementById('wrap');

const canvas = new Canvas({
	width:1200,
	height:800
});

const rect = new Rect({
	width:200,
	height:200,
	stroke:'black',
	strokeWidth:2,
	fill:'none'
});

canvas.add(rect);

const renderer = new Renderer(canvas).appendTo(wrap);

// @ts-ignore
window.renderer = renderer;
