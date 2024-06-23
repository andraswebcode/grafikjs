import { h, ref, inject, onMounted, onUnmounted, watch } from 'vue';
import { CLASSES } from './utils';

const withCollectionContext = (Component, tagName: string) => {
	const Shape = CLASSES[tagName];
	return {
		props: new Shape().toJSON(), // Define default props.
		setup(props) {
			const collection: any = inject('collection');
			const shape = new Shape(props);
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
