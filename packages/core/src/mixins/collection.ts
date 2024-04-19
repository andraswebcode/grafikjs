import {
	Constructor
} from './../types/mixin';

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

		public childAt(index: number){
			return this.children[index];
		}

		public childById(id: string){
			return this.children.find(el => (el.id === id));
		}

	}

}

export {
	Collection
};
