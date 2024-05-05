import {
	Renderer,
	Canvas,
	Group,
	Rect,
	Path,
	Point,
	Matrix,
	CurvePath,
	MoveCurve,
	CloseCurve,
	CubicBezierCurve,
	rad2Deg
} from '@grafikjs/vanilla';

import '@grafikjs/styles';

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
	//angle:45,
	stroke:'black',
	strokeWidth:8,
	fill:'none'
});

canvas.add(rect);

const path = new Path({
	d:'M0 100 C 40 0 160 0 200 100 C 160 200 40 200 0 100 Z',
	left:800,
	top:200,
	width:200,
	height:200,
	angle:45,
	stroke:'black',
	strokeWidth:8,
	fill:'none'
});

canvas.add(path);

const group = new Group({
	left:400,
	top:400,
	angle:45,
	stroke:'black',
	strokeWidth:20,
	fill:'none'
}).add([
	new Group({
		left:200
	}).add([
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
	]),
	new Group({
		top:200
	}).add([
		new Rect({
			left:100,
			top:-100,
			width:200,
			height:200
		}),
		new Rect({
			left:-100,
			top:100,
			width:200,
			height:200
		})
	])
]);

canvas.add(group);

const renderer = new Renderer(canvas).appendTo(wrap);

// @ts-ignore
window.renderer = renderer;

const cp = new CurvePath().add([
	new MoveCurve(new Point(0, 0)),
	new CubicBezierCurve(new Point(0, 0), new Point(100, 0), new Point(100, 100), new Point(0, 100)),
	new CloseCurve()
]);

// @ts-ignore
window.path = cp;

console.log(cp.fromString('M 10 315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10'));
