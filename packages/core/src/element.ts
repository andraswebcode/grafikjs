class Element {

	protected tagName: string;

	protected getAttrMap() : string[] {
		return [];
	}

	public set(key, value?){
		if (typeof key === 'string' && value){
			this._set(key, value);
		} else {
			for (let prop in key){
				this._set(prop, key[prop]);
			}
		}
		return this;
	}

	protected _set(key: string, value: string|number){
		if (this.hasOwnProperty(key)){
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
			if (this.hasOwnProperty(key)){
				value = this[key];
				value = Array.isArray(value) ? value.join(' ') : value
				memo[key] = value;
			}
			return memo;
		}, {});
	}

}

export {
	Element
};
