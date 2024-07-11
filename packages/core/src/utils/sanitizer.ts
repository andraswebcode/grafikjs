import { toFixed } from './functions';

class Sanitizer {
	private _types = {
		left: 'number',
		top: 'number',
		width: 'number',
		height: 'number'
	};

	public sanitize(property: string, value: any): any {
		const type = this._types[property];

		if (!type) {
			return value;
		}

		const fn = this['_' + type];

		if (!fn) {
			return value;
		}

		return fn(value);
	}

	private _number(value: any): number {
		return toFixed(value);
	}
}

export { Sanitizer };
