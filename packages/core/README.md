# GrafikJS Core

The Core package is the foundational library of GrafikJS, providing the essential object model and engine that powers all GrafikJS functionalities. It handles the computation of transformation matrices, manages animations, and ensures efficient event handling, making it the backbone of GrafikJS's interactive and scalable vector graphics capabilities.

## Purpose and Usage

It's important to note that while the Core package provides core functionalities for managing graphics data and behavior, it does not handle rendering or direct interaction with the DOM. For rendering SVG graphics in web applications, GrafikJS offers integrations with [Vue.js](https://github.com/andraswebcode/grafikjs/blob/master/packages/vue/README.md), [React](https://github.com/andraswebcode/grafikjs/blob/master/packages/react/README.md), [Angular](https://github.com/andraswebcode/grafikjs/blob/master/packages/angular/README.md), and [Svelte](https://github.com/andraswebcode/grafikjs/blob/master/packages/svelte/README.md) packages, which integrate with Core library.

Developers can enhance their applications by utilizing the Core library to manage and manipulate graphical elements efficiently, whether within a framework ecosystem or as a standalone utility for mathematical computations and graphical data management.

## Standalone Utility

While the Core library is primarily designed for use with graphical rendering frameworks, it can also be utilized independently as a powerful utility library. Developers can leverage it for:

**2D Transformation Matrices:** Performing mathematical calculations with 2D transformation matrices for various graphic manipulations.

```js
const m1 = new grafik.Matrix().fromArray([0.5, 0, 0, 0.5, 500, 400]);
const m2 = new grafik.Matrix().fromArray([1.5, 0, 0, 1.5, 200, 300]);

m2.rotate(45);

m1.multiply(m2);

m1.scale(2);

console.log(m1.toCSS()); // Expected output: 'matrix(1.0606, 1.0606, -1.0606, 1.0606, 600, 550)'
```

**Point Class:** Representing and manipulating coordinates (x, y) within a graphical context.

```js
const p1 = new grafik.Point(20, 25);
const p2 = new grafik.Point(12, 18);

p1.rotate(p2, 45); // Center point, and angle

p2.lerp(p1, 0.4);

console.log(p1.toString()); // Expected output: '12.7071 28.6066'
```

**Bounding Box Calculations:** Computing Axis-Aligned Bounding Boxes (AABBs) to determine the boundaries of graphical elements.

```js
const b1 = new grafik.BBox(new grafik.Point(-10, -10), new grafik.Point(10, 10)); // Min, and max
const b2 = new grafik.BBox().fromPoints([
	new grafik.Point(10, 10),
	new grafik.Point(30, 10),
	new grafik.Point(30, 30),
	new grafik.Point(10, 30)
]);
const p = new grafik.Point(20, 20);

console.log(b1.intersects(b2)); // Expected output: true
console.log(b1.contains(p)); // Expected output: false
console.log(b2.contains(p)); // Expected output: true

b1.union(b2);

console.log(b1.getSize()); // Expected output: > Point {x: 40, y: 40}
console.log(b1.getOrigin()); // Expected output: > Point {x: 0.25, y: 0.25}
```

**Curve Paths and Segments:** Dynamically creating and managing SVG paths using various curve types such as:

-   Cubic Bezier Curve (CubicBezierCurve)
-   Quadratic Bezier Curve (QuadraticBezierCurve)
-   Line Curve (LineCurve)
-   Arc Curve (ArcCurve)

```js
const cp = new grafik.CurvePath();
cp.moveTo(50, 50)
	.lineTo(100, 100)
	.quadraticCurveTo(150, 50, 200, 100)
	.cubicCurveTo(250, 150, 300, 100, 350, 150);

console.log(cp.updateBBox().getBBox().getSize()); // Expected output: > Point {x: 300, y: 100}
console.log(cp.toString()); // Expected output: M 50 50 L 100 100 Q 150 50 200 100 C 250 150 300 100 350 150
```
