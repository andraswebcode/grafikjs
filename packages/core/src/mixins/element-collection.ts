import { Collection } from './collection';
import { Constructor } from './../types/mixin';
import { Point } from './../maths';

function ElementCollection<TBase extends Constructor>(Base: TBase) {
	return class ElementCollection extends Collection(Base) {
		public add(children: any | any[], silent = false) {
			children = Array.isArray(children) ? children : [children];

			children.forEach((child) => {
				// Set up child.
				this.children.push(child);
				child.set('parent', this, true);
				if (!silent) {
					child.trigger('addedto', this);
				}
				// @ts-ignore
				if (this.isCanvas) {
					const setCanvas = (child) => child.set('canvas', this, true);
					setCanvas(child);
					if (child.isCollection) {
						child.eachChild(setCanvas);
					}
				}
				// Set up defs.
				const defs = child.get('_defs') || {};
				const def2Add: any[] = [];
				let key, def;
				for (key in defs) {
					def = defs[key];
					if (def?.isDefinition) {
						def2Add.push(def);
					}
				}
				if (def2Add.length) {
					// @ts-ignore
					child.get('canvas')?.addDefs(def2Add);
				}
			});

			if (!silent) {
				// @ts-ignore
				this.trigger('added', children);
			}

			return this;
		}
		/*
		public remove(children: any|any[], silent = false){

			if (!silent){
				// @ts-ignore
				this.trigger('removed', children);
			}

			return this;

		}
*/
		public findChildrenByPointer(pointer: Point): any[] {
			return this.mapChildren((child) => {
				const bBox = child.get('bBox');
				if (!bBox) {
					return false;
				}
				const polygon = bBox.toPolygon(child.getWorldMatrix());
				return polygon.containsPoint(pointer, 1) && child;
			}).filter((child) => child?.selectable);
		}

		public findLastChildByPointer(pointer: Point) {
			const children = this.findChildrenByPointer(pointer);
			return children[children.length - 1];
		}
	};
}

export { ElementCollection };
