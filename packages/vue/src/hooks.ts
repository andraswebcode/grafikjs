import { Canvas, isEqual, Observable } from '@grafikjs/core';
import { inject, onMounted, onUnmounted, reactive, toRefs } from 'vue';

type CollectorFunction<T> = (context: T) => any;
type Collector<T> = CollectorFunction<T> | null;
type Actions<T> = CollectorFunction<T> | null;
type Collected<T> = {
	state: any;
	actions: any;
	context: T;
};
type Subscribe = (...args: any[]) => void;

const _useCollector = <Context extends Observable>(
	collector: Collector<Context>,
	actions: Actions<Context> = null,
	context: Context,
	eventName = 'all',
	subscribe?: Subscribe
): Collected<Context> => {
	const state = reactive(collector?.(context) || {});
	const collectedActions = actions?.(context) || null;
	const onEventEmited = (...args) => {
		const collected = collector?.(context) || {};
		Object.keys(collected).forEach((key) => {
			if (!isEqual(state[key], collected[key])) {
				state[key] = collected[key];
			}
		});
		subscribe?.(...args);
	};

	onMounted(() => {
		context.on(eventName, onEventEmited);
	});
	onUnmounted(() => {
		context.off(eventName, onEventEmited);
	});

	return { state: toRefs(state), actions: collectedActions, context };
};

const useCanvas = (
	collector: Collector<Canvas>,
	actions: Actions<Canvas> = null,
	eventName = 'all',
	subscribe?: Subscribe
): Collected<Canvas> => {
	const canvas: Canvas | undefined = inject('canvas');

	if (!canvas) {
		console.warn('No canvas provided.');
		return {
			state: {},
			actions: {},
			context: new Canvas()
		};
	}

	return _useCollector<Canvas>(collector, actions, canvas, eventName, subscribe);
};

const useCollection = (
	collector: Collector<any>,
	actions: Actions<any> = null,
	eventName = 'all',
	subscribe?: Subscribe
): Collected<any> => {
	const collection: any = inject('collection');

	if (!collection) {
		console.warn('No collection provided.');
		return {
			state: {},
			actions: {},
			context: {}
		};
	}

	return _useCollector(collector, actions, collection, eventName, subscribe);
};

const useObject = (
	object: any,
	collector: Collector<any>,
	actions: Actions<any> = null,
	eventName = 'all',
	subscribe?: Subscribe
): Collected<any> => {
	return _useCollector(collector, actions, object, eventName, subscribe);
};

export { useCanvas, useCollection, useObject };
