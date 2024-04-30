import {
	Constructor
} from './../types/mixin';
import {
	Point,
	CurvePath
} from './../maths';
import {
	MoveCurve,
	LineCurve
} from './../maths/curves';

function Collection<TBase extends Constructor>(Base: TBase){

	return class Collection extends Base {

		public readonly isCollection = true;
		private children: any[] = [];

		public setChildren(children: any|any[], silent = false) : Collection {

			this.children = [];

			this.add(children, silent);

			return this;

		}

		public getChildren(){
			return this.children;
		}

		public add(children: any|any[], silent = false) : Collection {

			children = Array.isArray(children) ? children : [children];
			// @ts-ignore
			const canvas = this.isCanvas ? this : this.canvas;

			children.forEach(child => {
				this.children.push(child);
				child.set({
					parent:this,
					canvas
				}, true);
				const defs = child.get('_defs') || {};
				const def2Add: any = [];
				let key, def;
				for (key in defs){
					def = defs[key];
					if (def?.isDefinition){
						def2Add.push(def);
					}
				}
				if (def2Add.length){
					canvas?.addDefs(def2Add);
				}
			});

			if (!silent){
				// @ts-ignore
				this.trigger('added', children);
			}

			return this;

		}

		public remove(children: any|any[], silent = false) : Collection {

			if (!silent){
				// @ts-ignore
				this.trigger('removed', children);
			}

			return this;

		}

		public eachChild(callback: (v: any, i: number, a: any[]) => void) : Collection {
			this.children.forEach(callback);
			return this;
		}

		public mapChildren(callback) : any[] {
			return this.children.map(callback);
		}

		public childAt(index: number){
			return this.children[index];
		}

		public childById(id: string){
			return this.children.find(el => (el.id === id));
		}

		public findChildrenByPointer(pointer: Point) : any[] {

			return this.mapChildren(child => {
				const bBox = child.get('bBox');
				if (!bBox){
					return false;
				}
				const [tl, tr, br, bl] = bBox.getLineEdges(child.getWorldMatrix());
				const polygon = new CurvePath(
					new MoveCurve(tl),
					new LineCurve(tl, tr),
					new LineCurve(tr, br),
					new LineCurve(br, bl),
					new LineCurve(bl, tl)
				);
				return (polygon.containsPoint(pointer, 1) && child);
			}).filter(child => !!child);

		}

		public findLastChildByPointer(pointer: Point){
			const children = this.findChildrenByPointer(pointer);
			return children[children.length - 1];
		}

	}

}

export {
	Collection
};
