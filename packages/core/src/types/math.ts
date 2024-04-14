interface MatrixObject {
	a:number;
	b:number;
	c:number;
	d:number;
	tx:number;
	ty:number;
}

type MatrixArray = [number, number, number, number, number, number];

interface PointObject {
	x:number;
	y:number;
}

interface ColorObject {
	r:number;
	g:number;
	b:number;
	a:number;
}

type ColorArray = [number, number, number, number];

type AnyColor = string|ColorArray|ColorObject;

interface BBoxObject {}

type ViewBoxArray = [number, number, number, number];

export {
	MatrixObject,
	MatrixArray,
	PointObject,
	ColorObject,
	ColorArray,
	AnyColor,
	BBoxObject,
	ViewBoxArray
};
