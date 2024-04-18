import {
	Constructor
} from './../types/mixin';

function Collection<TBase extends Constructor>(Base: TBase){

	return class Collection extends Base {

		public readonly isCollection = true;
		private shapes:any[] = [];

		public add(...shapes: any[]) : Collection {
			shapes.forEach(shape => {
				this.shapes.push(shape);
				shape.set({
					parent:this,
					// @ts-ignore
					canvas:this.isCanvas ? this : this.canvas
				});
			});
			// @ts-ignore
			this.trigger('added', shapes);
			return this;
		}

		public remove(...shapes) : Collection {
			return this;
		}

		public eachShape(callback: (v: any, i: number, a: any[]) => void) : Collection {
			this.shapes.forEach(callback);
			return this;
		}

		public shapeAt(index: number){
			return this.shapes[index];
		}

		public shapeById(id: string){
			return this.shapes.find(el => (el.id === id));
		}

	}

}

export {
	Collection
};
