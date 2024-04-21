import {
	Constructor
} from './../types/mixin';
import {
	Point,
	CurvePath
} from './../maths';
import {
	LineCurve
} from './../maths/curves';

function Collection<TBase extends Constructor>(Base: TBase){

	return class Collection extends Base {

		public readonly isCollection = true;
		private children:any[] = [];

		public add(...children: any[]) : Collection {
			children.forEach(child => {
				this.children.push(child);
				child.set({
					parent:this,
					// @ts-ignore
					canvas:this.isCanvas ? this : this.canvas
				});
			});
			// @ts-ignore
			this.trigger('added', children);
			return this;
		}

		public remove(...children) : Collection {
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
					new LineCurve(tl, tr),
					new LineCurve(tr, br),
					new LineCurve(br, bl),
					new LineCurve(bl, tl)
				);
				return (polygon.containsPoint(pointer) && child);
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
