import { h, onMounted, onUnmounted } from 'vue';
import { CLASSES } from './utils';
import { useCollection } from './hooks';

const withCollectionContext = (Component, tagName: string) => {
	const Shape = CLASSES[tagName];

	if (!Shape) {
		return {
			setup() {
				return () => 'No class belongs to the provided tag name.';
			}
		};
	}

	return {
		props: new Shape().toJSON(), // Define default props.
		setup(props) {
			const {
				actions: { add, remove }
			} = useCollection(null, (collection) => ({
				add: collection.add.bind(collection),
				remove: collection.remove.bind(collection)
			}));
			const shape = new Shape(props);
			onMounted(() => {
				add(shape);
			});
			onUnmounted(() => {
				remove(shape);
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
