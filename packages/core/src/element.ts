import {
	Observable
} from './observable';
import {
	uniqueId
} from './utils';

class Element extends Observable {

	protected readonly tagName: string;
	protected id = '';
	protected name = '';
	protected className = '';

	protected getAttrMap() : string[] {
		return ['className'];
	}

	public set(key, value?, silent = false){

		if (typeof key === 'string' && typeof value !== 'undefined'){
			this._set(key, value);
			if (!silent){
				this.trigger('set', {[key]:value}, this);
			}
		} else {
			for (let prop in key){
				this._set(prop, key[prop]);
			}
			// Attention please: here - if 'key' is an object - 'value' becomes the 'silent'!
			if (!value){
				this.trigger('set', key, this);
			}
		}

		return this;

	}

	protected _set(key: string, value: string|number){
		if (typeof this[key] !== 'function'){
			this[key] = value;
		}
	}

	public get(key: string|string[]) : any {
		if (Array.isArray(key)){
			return key.reduce((memo: object, k: string) : object => {
				memo[k] = this[k];
				return memo;
			}, {});
		} else {
			return this[key];
		}
	}

	public getAttributes() : object {
		const attrMap = this.getAttrMap();
		let value;
		return attrMap.reduce((memo:object, key:string) : object => {
			if (typeof this[key] !== 'undefined'){
				value = this[key];
				value = Array.isArray(value) ? value.join(' ') : value;
				memo[key] = value;
			}
			return memo;
		}, {});
	}

	public getStyle() : object {
		return {};
	}

	public createId(prefix?: string){
		if (!this.id){
			this.id = uniqueId(prefix);
		}
	}

	public addClass(...classNames: string[]){
		const currentClasses = this.className.split(' ').filter(cn => cn);
		const newClasses = classNames.filter(cn => (cn && !currentClasses.includes(cn)));
		this.set('className', currentClasses.concat(newClasses).join(' '));
		return this;
	}

	public removeClass(...classNames: string[]){
		const currentClasses = this.className.split(' ');
		this.set('className', currentClasses.filter(cn => !classNames.includes(cn)).join(' '));
		return this;
	}

	public toJSON() : object {

		const {id, name, tagName} = this;
		const json: any = {
			id,
			name,
			tagName,
			...this.getAttributes()
		};
		// @ts-ignore
		const children = this.isCollection && this.mapChildren(child => child.toJSON());

		if (children){
			json.children = children;
		}

		return json;

	}

}

export {
	Element
};
