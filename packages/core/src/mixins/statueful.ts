import { Constructor } from './../types/mixin';

function Stateful<TBase extends Constructor>(Base: TBase) {
	return class Stateful extends Base {
		public set(key: any, value?: any, silent = false) {
			if (typeof key === 'string') {
				this._set(key, value);
				if (!silent) {
					// @ts-ignore
					this.trigger('set', { [key]: value }, this);
				}
			} else {
				for (let prop in key) {
					this._set(prop, key[prop]);
				}
				// Attention please: here - if 'key' is an object - 'value' becomes the 'silent'!
				if (!value) {
					// @ts-ignore
					this.trigger('set', key, this);
				}
			}

			return this;
		}

		protected _set(key: string, value: string | number) {
			if (typeof this[key] !== 'function' && typeof value !== 'undefined') {
				this[key] = value;
			}
		}

		public get(key: string | string[]): any {
			if (Array.isArray(key)) {
				return key.reduce((memo: object, k: string): object => {
					memo[k] = this[k];
					return memo;
				}, {});
			} else {
				return this[key];
			}
		}
	};
}

export { Stateful };
