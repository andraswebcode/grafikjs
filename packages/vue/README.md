# GrafikJS Vue.js

The Vue package is a specialized extension of the GrafikJS library, designed specifically for integrating GrafikJS's powerful SVG capabilities into Vue.js applications. This package allows Vue.js developers to seamlessly create and manage interactive and scalable vector graphics within their Vue components.

## Installation

To get started with @grafikjs/vue, you'll first need to install the package along with GrafikJS styles. You can do this using npm:

```bash
npm install @grafikjs/vue
npm install @grafikjs/styles
```

## Basic Setup

Next, you'll need to set up your Vue application to use the GrafikJS components. Here's a basic example to help you get started:

### Import GrafikJS and Initialize the Application

```js
import { createApp } from 'vue';
import { createGrafik } from '@grafikjs/vue';
import App from './App.vue';
import '@grafikjs/styles';

// Here you can specify the default canvas setting.
const grafik = createGrafik({
	width: 400,
	height: 400,
	multiselection: false
});

createApp(App).use(grafik).mount('#wrap');
```

In this setup, createGrafik() provides the canvas object model, which is essential for using GrafikJS components.

### Define the Template with GrafikJS Components

```vue
<script>
import { Canvas, Rect, Wrapper, Interactive } from '@grafikjs/vue';
</script>

<template>
	<Wrapper>
		<Canvas :width="400" :height="400">
			<Rect :width="200" :height="200" :left="100" :top="100" :angle="45" fill="#00ff00" />
		</Canvas>
		<Interactive />
	</Wrapper>
</template>
```

-   **Wrapper:** A container component for GrafikJS elements.
-   **Canvas:** The drawing area where you place your SVG elements.
-   **Rect:** An example SVG element representing a rectangle.
-   **Interactive:** A component that makes shapes transformable, enabling operations such as translate, scale, and rotate.

This basic setup will render a rectangle that is 200x200 pixels in size, rotated 45 degrees, and positioned at coordinates (100, 100) within a 400x400 canvas.
The Interactive component renders the top layer that allows for interactive transformations of shapes, such as translating, scaling, and rotating.
