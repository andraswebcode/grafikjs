class Loader {

	protected _listeners = {
		load:[],
		error:[]
	};

	public fromURL(url: string){
		return this;
	}

	public fromString(string: string){
		return this;
	}

	public onLoad(callback: Function){

		if (!this._listeners.load.includes(callback)){
			this._listeners.load.push(callback);
		}

		return this;

	}

	public onError(callback: Function){

		if (!this._listeners.error.includes(callback)){
			this._listeners.error.push(callback);
		}

		return this;

	}

}

export {
	Loader
};
