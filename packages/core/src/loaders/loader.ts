import {
	Observable
} from './../observable';

class Loader extends Observable {

	public fromURL(url: string){
		return this;
	}

	public fromString(string: string){
		return this;
	}

	public onLoad(callback: Function){
		return this.on('loaded', callback);
	}

	public onError(callback: Function){
		return this;
	}

}

export {
	Loader
};
