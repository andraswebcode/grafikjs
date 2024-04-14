import * as shapes from './../shapes';

class Importer {

	public static classNames = {
		'svg':'Canvas',
		'g':'Group',
		'rect':'Rect',
		'circle':'Circle'
	};

	public static getClassFromTagName(tagName: string) : object {
		return shapes[this.classNames[tagName]];
	}

}

export {
	Importer
};
