import {
	Renderer,
	Canvas,
	Group,
	Rect
} from '@grafikjs/vanilla';

const wrap = document.getElementById('wrap');

const canvas = new Canvas({
	width:1200,
	height:800
});

const rect = new Rect({
	left:400,
	top:400,
	width:200,
	height:200,
	angle:45,
	stroke:'black',
	strokeWidth:8,
	fill:'none'
});

canvas.add(rect);

const group = new Group({
	left:400,
	top:400,
	strokeWidth:20
}).add(
	new Rect({
		left:-100,
		top:-100,
		width:200,
		height:200
	}),
	new Rect({
		left:100,
		top:100,
		width:200,
		height:200
	})
);

canvas.add(group);

const renderer = new Renderer(canvas).appendTo(wrap);

// @ts-ignore
window.renderer = renderer;
