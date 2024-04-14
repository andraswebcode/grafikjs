class Element {

	protected tagName: string;
	protected attrMap: string[] = [];

	public set(key, value?){
		if (typeof key === 'string' && value){
			this._set(key, value);
		} else {
			for (let prop in key){
				this._set(prop, key[prop]);
			}
		}
	}

	protected _set(key: string, value: string|number){
		if (this.hasOwnProperty(key)){
			this[key] = value;
		}
	}

	public getAttributes() : object {
		let value;
		return this.attrMap.reduce((memo:object, key:string) : object => {
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
