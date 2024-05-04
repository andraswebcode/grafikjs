import {
	Constructor
} from './../types/mixin';
import {
	Point
} from './../maths';

function Collection<TBase extends Constructor>(Base: TBase){

	return class Collection extends Base {

		public readonly isCollection = true;
		protected children: any[] = [];

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

			children.forEach(child => {
				this.children.push(child);
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

		public childByName(name: string){
			return this.children.find(el => (el.name === name));
		}

	}

}

export {
	Collection
};
