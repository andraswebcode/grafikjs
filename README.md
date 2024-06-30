# GrafikJS

**A simple and powerful JavaScript SVG library**

GrafikJS is an interactive JavaScript library tailored for creating Scalable Vector Graphics (SVG) in web applications, particularly suited for use with popular frameworks like React, Angular, or Vue.js. It provides a flexible and intuitive API for building dynamic and interactive graphics, featuring a two-layer architecture for drawing and interactivity. With its focus on scalability, ease of use, and unique features such as recursive grouping and animations, GrafikJS empowers developers to effortlessly create stunning visuals for their web applications.

## Installation

### Vanilla JS

```
npm install @grafikjs/vanilla
```

### React JS

```
npm install @grafikjs/react
```

### Vue JS

```
npm install @grafikjs/vue
```

## Getting Started

### Vanilla JS

```js
const wrap = document.getElementById('wrap');
const canvas = new grafik.Canvas({
	width: 1200,
	height: 800
});
const renderer = new grafik.Renderer(canvas);
const rect = new grafik.Rect({
	width: 200,
	height: 200,
	left: 400,
	top: 400,
	angle: 45,
	fill: '#00ff00'
});

canvas.add(rect);

renderer.appendTo(wrap);
```

### React JS

```jsx
import { CanvasProvider, Canvas, Rect, Wrapper, Interactive, Selector } from '@grafikjs/react';

<CanvasProvider>
	<Wrapper>
		<Canvas width={1200} height={800}>
			<Rect width={200} height={200} left={400} top={400} angle={45} fill="#00ff00" />
		</Canvas>
		<Interactive>
			<Selector />
		</Interactive>
	</Wrapper>
</CanvasProvider>;
```

### React JS

```js
import { createApp } from 'vue';
import App from './example.vue';
import { createGrafik } from '@grafikjs/vue';
import '@grafikjs/styles';

const grafik = createGrafik({});

createApp(App).use(grafik).mount('#wrap');
```

```vue
<script>
import { Canvas, Rect, Wrapper, Interactive, Selector } from '@grafikjs/vue';
</script>
<template>
	<Wrapper>
		<Canvas :width="400" :height="400">
			<Rect :width="200" :height="200" :left="400" :top="400" :angle="45" fill="#00ff00" />
		</Canvas>
		<Interactive>
			<Selector />
		</Interactive>
	</Wrapper>
</template>
```

## Examples

Check the collection of examples on [CodePen](https://codepen.io/collection/ExJELG).
