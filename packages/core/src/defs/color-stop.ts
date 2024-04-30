import {
	Element
} from './../element';

class ColorStop extends Element {

	protected readonly tagName = 'stop';

	private offset = 0;
	private stopColor: any = '';
	private stopOpacity = 1;

	public constructor(params?){
		super();
		this.set(params);
		this.createId('stop');
	}

	protected getAttrMap() : string[] {
		return [
			'offset',
			'stopColor',
			'stopOpacity'
		];
	}

}

export {
	ColorStop
};
