import { Exporter } from './exporter';

// The plan is this will provide an array of raster image buffers,
// that you can use to create gif, mp4, or any raster file.
class RasterExporter extends Exporter {
	protected _mimeType: string;
	protected _extension: string;
	private _buffers = [];

	protected _createDefs() {}

	protected _build() {
		throw new Error('Method not implemented.');
	}

	protected _createCanvas() {
		throw new Error('Method not implemented.');
	}

	protected _createShape() {
		throw new Error('Method not implemented.');
	}

	protected _createAnimation() {
		throw new Error('Method not implemented.');
	}

	public getBuffers() {
		return this._buffers;
	}
}

export { RasterExporter };
