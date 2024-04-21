class Interpolations {

	static quadraticBezier(t: number, p0: number, p1: number, p2: number) : number {
		const tn = 1 - t;
		return tn * tn * p0 + 2 * tn * t * p1 + t * t * p2;
	}

	static cubicBezier(t: number, p0: number, p1: number, p2: number, p3: number) : number {
		const tn = 1 - t;
		return tn * tn * tn * p0 + 3 * tn * tn * t * p1 + 3.0 * tn * t * t * p2 + t * t * t * p3;
	}

}

export {
	Interpolations
};
