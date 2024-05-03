import {
	uniqueId
} from './utils';

class Element {

	protected readonly tagName: string;
	protected id = '';
	protected name = '';
	protected className = '';
	private _listeners = {};

	protected getAttrMap() : string[] {
		return ['className'];
	}

	public set(key, value?, silent = false){

		if (typeof key === 'string' && typeof value !== 'undefined'){
			this._set(key, value);
			if (!silent){
				this.trigger('set', {[key]:value});
			}
		} else {
			for (let prop in key){
				this._set(prop, key[prop]);
			}
			// Attention please: here - if 'key' is an object - 'value' becomes the 'silent'!
			if (!value){
				this.trigger('set', key);
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

	public on(eventName, listener){

		if (typeof eventName === 'object'){
			for (let key in eventName){
				this.on(key, eventName[key]);
			}
		} else {
			if (!this._listeners[eventName]){
				this._listeners[eventName] = [];
			}
			if (this._listeners[eventName].indexOf(listener) === -1){
				this._listeners[eventName].push(listener);
			}
		}

		return this;

	}

	public once(){
		return this;
	}

	public off(eventName, listener){

		if (typeof eventName === 'object'){
			for (let key in eventName){
				this.off(key, eventName[key]);
			}
		} else {
			const listeners: Function[] = this._listeners[eventName];
			if (listeners){
				const index = listeners.indexOf(listener);
				if (index !== -1){
					listeners.splice(index, 1);
				}
			}
		}

		return this;

	}

	public trigger(eventName: string, options = {}){

		const listeners: Function[] = this._listeners[eventName];

		if (!listeners){
			return this;
		}

		for (let i = 0; i < listeners.length; i++){
			listeners[i].call(this, options);
		}

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
