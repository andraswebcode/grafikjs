/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*
import {
    Renderer,
    Canvas,
    Group,
    Rect,
    Point,
    Matrix,
    // CurveChain,
    // MoveCurve,
    // CloseCurve,
    // CubicBezierCurve,
    rad2Deg
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
    angle:45,
    stroke:'black',
    strokeWidth:20,
    fill:'none'
}).add(
    new Group({
        left:200
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
    ),
    new Group({
        top:200
    }).add(
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
    )
);

canvas.add(group);

const renderer = new Renderer(canvas).appendTo(wrap);

// @ts-ignore
window.renderer = renderer;
/*
const path = new CurveChain().add(
    new MoveCurve(new Point(0, 0)),
    new CubicBezierCurve(new Point(0, 0), new Point(100, 0), new Point(100, 100), new Point(0, 100)),
    new CloseCurve()
);

// @ts-ignore
window.path = path;
*/ 

/******/ })()
;