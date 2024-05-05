import {
	Loader
} from './loader';

class ImageLoader extends Loader {

	fromURL(url: string){

		const img = new Image();

		img.src = url;

		img.onload = () => {
			this.trigger('loaded', img);
		};

		return this;

	}

}

export {
	ImageLoader
};
