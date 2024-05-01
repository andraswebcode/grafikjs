import {
	Loader
} from './loader';

class ImageLoader extends Loader {

	fromURL(url: string){

		const img = new Image();

		img.src = url;

		img.addEventListener('load', () => {
			this._listeners.load.forEach(callback => {
				callback.call(this, img);
			});
		});

		return this;

	}

}

export {
	ImageLoader
};
