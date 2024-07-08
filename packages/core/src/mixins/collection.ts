import { Constructor } from './../types/mixin';

function Collection<TBase extends Constructor>(Base: TBase) {
	return class Collection extends Base {
		public readonly isCollection = true;
		protected children: any[] = [];

		get childrenLength() {
			return this.children.length;
		}

		public setChildren(children: any | any[], silent = false): Collection {
			this.children = [];

			this.add(children, silent);

			return this;
		}

		public getChildren() {
			return this.children;
		}

		public add(children: any | any[], silent = false): Collection {
			children = Array.isArray(children) ? children : [children];

			children.forEach((child) => {
				this.children.push(child);
				child.set('parent', this, true);
			});

			if (!silent) {
				// @ts-ignore
				this.trigger('added', children);
			}

			return this;
		}

		public remove(children: any | any[], silent = false): Collection {
			children = Array.isArray(children) ? children : [children];
			let index;

			// Using splice, instead of filter to mutate, and keep the original array.
			children.forEach((child) => {
				index = this.children.indexOf(child);
				if (index !== -1) {
					this.children.splice(index, 1);
				}
			});

			if (!silent) {
				// @ts-ignore
				this.trigger('removed', children);
			}

			return this;
		}

		public eachChild(callback: (v: any, i: number, a: any[]) => void): Collection {
			this.children.forEach(callback);
			return this;
		}

		public mapChildren(callback): any[] {
			return this.children.map(callback);
		}

		public reduceChildren<T>(callback, initValue: T): T {
			return this.children.reduce(callback, initValue);
		}

		public childAt(index: number) {
			return this.children[index];
		}

		public firstChild() {
			return this.children[0];
		}

		public lastChild() {
			return this.children[this.childrenLength - 1];
		}

		public childById(id: string) {
			return this.children.find((el) => el.id === id);
		}

		public childByName(name: string) {
			return this.children.find((el) => el.name === name);
		}

		public childByIdDeep(id: string) {
			let child = this.childById(id);

			if (child) {
				return child;
			}

			this.eachChild((item) => {
				if (item.isCollection) {
					const _child = item.childByIdDeep(item);
					if (_child) {
						child = _child;
					}
				}
			});

			return child;
		}

		public childByNameDeep(name: string) {
			let child = this.childByName(name);

			if (child) {
				return child;
			}

			this.eachChild((item) => {
				if (item.isCollection) {
					const _child = item.childByNameDeep(item);
					if (_child) {
						child = _child;
					}
				}
			});

			return child;
		}

		public moveChildTo(child: any, index: number): Collection {
			const fromIndex = this.children.indexOf(child);

			if (fromIndex !== -1) {
				this.children.splice(fromIndex, 1);
				this.children.splice(index, 0, child);
				// @ts-ignore
				this.trigger('sorted', child, this.children);
			}

			return this;
		}

		public moveChildUp(child: any): Collection {
			const fromIndex = this.children.indexOf(child);

			return this.moveChildTo(child, fromIndex + 1);
		}

		public moveChildDown(child: any): Collection {
			const fromIndex = this.children.indexOf(child);

			return this.moveChildTo(child, fromIndex - 1);
		}
	};
}

export { Collection };
