import { h, ref, inject, onMounted, onUnmounted, watch } from 'vue';
import { omitBy } from '@grafikjs/core';
import { CLASSES } from './utils';

const withCollectionContext = (Component, tagName: string) => {
	const Shape = CLASSES[tagName];

	if (!Shape) {
		return {
			setup() {
				return () => '';
			}
		};
	}

	return {
		props: new Shape().toJSON(), // Define default props.
		setup(props) {
			const collection: any = inject('collection');
			const shape = new Shape(omitBy(props, (value) => typeof value === 'undefined'));
			onMounted(() => {
				collection.add(shape);
			});
			onUnmounted(() => {
				collection.remove(shape);
			});
			return () =>
				h(Component, {
					tagName,
					shape,
					props
				});
		}
	};
};

export { withCollectionContext };
