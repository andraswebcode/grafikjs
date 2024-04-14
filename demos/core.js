/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/core/src/canvas.ts":
/*!*************************************!*\
  !*** ./packages/core/src/canvas.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./packages/core/src/element.ts");
/* harmony import */ var _mixins_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/collection */ "./packages/core/src/mixins/collection.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'svg';
        _this.attrMap = [
            'width',
            'height',
            'viewBox'
        ];
        _this.xmlns = 'http://www.w3.org/2000/svg';
        _this.width = 0;
        _this.height = 0;
        _this.set(params);
        return _this;
    }
    Canvas.prototype.set = function (key, value) {
        _super.prototype.set.call(this, key, value);
        this.setViewBox();
    };
    Canvas.prototype.setViewBox = function () {
        this.viewBox = [0, 0, this.width, this.height];
    };
    return Canvas;
}((0,_mixins_collection__WEBPACK_IMPORTED_MODULE_1__.Collection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



/***/ }),

/***/ "./packages/core/src/colors/gradient.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/colors/gradient.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gradient: () => (/* binding */ Gradient)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./packages/core/src/element.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Gradient = /** @class */ (function (_super) {
    __extends(Gradient, _super);
    function Gradient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colorStops = [];
        return _this;
    }
    return Gradient;
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element));



/***/ }),

/***/ "./packages/core/src/colors/linear-gradient.ts":
/*!*****************************************************!*\
  !*** ./packages/core/src/colors/linear-gradient.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearGradient: () => (/* binding */ LinearGradient)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/colors/gradient.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LinearGradient = /** @class */ (function (_super) {
    __extends(LinearGradient, _super);
    function LinearGradient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'linearGradient';
        return _this;
    }
    return LinearGradient;
}(_gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient));



/***/ }),

/***/ "./packages/core/src/colors/pattern.ts":
/*!*********************************************!*\
  !*** ./packages/core/src/colors/pattern.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pattern: () => (/* binding */ Pattern)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./packages/core/src/element.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Pattern = /** @class */ (function (_super) {
    __extends(Pattern, _super);
    function Pattern() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'pattern';
        return _this;
    }
    return Pattern;
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element));



/***/ }),

/***/ "./packages/core/src/colors/radial-gradient.ts":
/*!*****************************************************!*\
  !*** ./packages/core/src/colors/radial-gradient.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialGradient: () => (/* binding */ RadialGradient)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/colors/gradient.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RadialGradient = /** @class */ (function (_super) {
    __extends(RadialGradient, _super);
    function RadialGradient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'radialGradient';
        return _this;
    }
    return RadialGradient;
}(_gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient));



/***/ }),

/***/ "./packages/core/src/controls/control.ts":
/*!***********************************************!*\
  !*** ./packages/core/src/controls/control.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* binding */ Control)
/* harmony export */ });
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());



/***/ }),

/***/ "./packages/core/src/controls/path-control.ts":
/*!****************************************************!*\
  !*** ./packages/core/src/controls/path-control.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathControl: () => (/* binding */ PathControl)
/* harmony export */ });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./packages/core/src/controls/control.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PathControl = /** @class */ (function (_super) {
    __extends(PathControl, _super);
    function PathControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PathControl;
}(_control__WEBPACK_IMPORTED_MODULE_0__.Control));



/***/ }),

/***/ "./packages/core/src/controls/transform-control.ts":
/*!*********************************************************!*\
  !*** ./packages/core/src/controls/transform-control.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformControl: () => (/* binding */ TransformControl)
/* harmony export */ });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./packages/core/src/controls/control.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TransformControl = /** @class */ (function (_super) {
    __extends(TransformControl, _super);
    function TransformControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TransformControl;
}(_control__WEBPACK_IMPORTED_MODULE_0__.Control));



/***/ }),

/***/ "./packages/core/src/element.ts":
/*!**************************************!*\
  !*** ./packages/core/src/element.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element)
/* harmony export */ });
var Element = /** @class */ (function () {
    function Element() {
    }
    Element.prototype.set = function (key, value) {
        if (typeof key === 'string' && value) {
            this._set(key, value);
        }
        else {
            for (var prop in key) {
                this._set(prop, key[prop]);
            }
        }
    };
    Element.prototype._set = function (key, value) {
        if (this.hasOwnProperty(key)) {
            this[key] = value;
        }
    };
    Element.prototype.getAttributes = function () {
        var _this = this;
        var value;
        return this.attrMap.reduce(function (memo, key) {
            if (_this.hasOwnProperty(key)) {
                value = _this[key];
                value = Array.isArray(value) ? value.join(' ') : value;
                memo[key] = value;
            }
            return memo;
        }, {});
    };
    return Element;
}());



/***/ }),

/***/ "./packages/core/src/index.ts":
/*!************************************!*\
  !*** ./packages/core/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.BBox),
/* harmony export */   Canvas: () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas),
/* harmony export */   Color: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Color),
/* harmony export */   Control: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.Control),
/* harmony export */   Element: () => (/* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   Gradient: () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_3__.Gradient),
/* harmony export */   Importer: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.Importer),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_3__.LinearGradient),
/* harmony export */   LottieImporter: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.LottieImporter),
/* harmony export */   Matrix: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Matrix),
/* harmony export */   PIBY180: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.PIBY180),
/* harmony export */   PathControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.PathControl),
/* harmony export */   Pattern: () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_3__.Pattern),
/* harmony export */   Point: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Point),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_3__.RadialGradient),
/* harmony export */   Rect: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Rect),
/* harmony export */   SVGImporter: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.SVGImporter),
/* harmony export */   Shape: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Shape),
/* harmony export */   TransformControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.TransformControl),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.deg2Rad)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./packages/core/src/element.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./packages/core/src/canvas.ts");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes */ "./packages/core/src/shapes/index.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors */ "./packages/core/src/colors/index.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./packages/core/src/controls/index.js");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maths */ "./packages/core/src/maths/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./packages/core/src/utils/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./packages/core/src/types/index.ts");
// Core


// Shapes

// Colors

// Controls

// Maths

// Utils

// Types



/***/ }),

/***/ "./packages/core/src/maths/bbox.ts":
/*!*****************************************!*\
  !*** ./packages/core/src/maths/bbox.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: () => (/* binding */ BBox)
/* harmony export */ });
var BBox = /** @class */ (function () {
    function BBox() {
    }
    return BBox;
}());



/***/ }),

/***/ "./packages/core/src/maths/color.ts":
/*!******************************************!*\
  !*** ./packages/core/src/maths/color.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color)
/* harmony export */ });
var Color = /** @class */ (function () {
    function Color() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1;
    }
    return Color;
}());



/***/ }),

/***/ "./packages/core/src/maths/matrix.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/maths/matrix.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix: () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./packages/core/src/utils/index.ts");

var Matrix = /** @class */ (function () {
    function Matrix() {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
    }
    Matrix.prototype.fromArray = function (matrix) {
        this.a = matrix[0];
        this.b = matrix[1];
        this.c = matrix[2];
        this.d = matrix[3];
        this.tx = matrix[4];
        this.ty = matrix[5];
        return this;
    };
    Matrix.prototype.fromObject = function (object) {
        this.a = object.a;
        this.b = object.b;
        this.c = object.c;
        this.d = object.d;
        this.tx = object.tx;
        this.ty = object.ty;
        return this;
    };
    Matrix.prototype.fromOptions = function (object) {
        var left = object.left, top = object.top, angle = object.angle, scaleX = object.scaleX, scaleY = object.scaleY, skewX = object.skewX, skewY = object.skewY;
        this.translate(left, top);
        this.rotate(angle);
        this.scaleX(scaleX);
        this.scaleX(scaleY);
        this.skewX(skewX);
        this.skewY(skewY);
        return this;
    };
    Matrix.prototype.fromCSS = function (value) {
        var array = value.replace('matrix(', '').replace(')', '').split(' ').map(parseFloat);
        // @ts-ignore
        this.fromArray(array);
        return this;
    };
    Matrix.prototype.toArray = function () {
        return [this.a, this.b, this.c, this.d, this.tx, this.ty];
    };
    Matrix.prototype.toObject = function () {
        return {
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d,
            tx: this.tx,
            ty: this.ty
        };
    };
    Matrix.prototype.toOptions = function () {
        return {
            left: 0,
            top: 0,
            angle: 0,
            scaleX: 0,
            scaleY: 0,
            skewX: 0,
            skewY: 0
        };
    };
    Matrix.prototype.toCSS = function () {
        var array = this.toArray().join(' ');
        return "matrix(".concat(array, ")");
    };
    Matrix.prototype.translate = function (tx, ty) {
        if (tx)
            this.tx = tx;
        if (ty)
            this.ty = ty;
        return this;
    };
    Matrix.prototype.rotate = function (angle) {
        if (!angle) {
            return this;
        }
        var theta = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deg2Rad)(angle);
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        var m = new Matrix().fromArray([cos, sin, -sin, cos, 0, 0]);
        this.multiply(m);
        return this;
    };
    Matrix.prototype.scale = function (sx, sy) {
        if (!sx) {
            return this;
        }
        if (!sy)
            sy = sx;
        var m = new Matrix().fromArray([sx, 0, 0, sy, 0, 0]);
        this.multiply(m);
        return this;
    };
    Matrix.prototype.scaleX = function (scale) {
        if (!scale) {
            return this;
        }
        var m = new Matrix().fromArray([scale, 0, 0, 1, 0, 0]);
        this.multiply(m);
        return this;
    };
    Matrix.prototype.scaleY = function (scale) {
        if (!scale) {
            return this;
        }
        var m = new Matrix().fromArray([1, 0, 0, scale, 0, 0]);
        this.multiply(m);
        return this;
    };
    Matrix.prototype.skewX = function (angle) {
        if (!angle) {
            return this;
        }
        var theta = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deg2Rad)(angle);
        var m = new Matrix().fromArray([1, 0, Math.tan(theta), 1, 0, 0]);
        this.multiply(m);
        return this;
    };
    Matrix.prototype.skewY = function (angle) {
        if (!angle) {
            return this;
        }
        var theta = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deg2Rad)(angle);
        var m = new Matrix().fromArray([1, Math.tan(theta), 0, 1, 0, 0]);
        this.multiply(m);
        return this;
    };
    Matrix.prototype.multiply = function (m) {
        var a = this.a * m.a + this.c * m.b;
        var b = this.b * m.a + this.d * m.b;
        var c = this.a * m.c + this.c * m.d;
        var d = this.b * m.c + this.d * m.d;
        var tx = this.a * m.tx + this.c * m.ty + this.tx;
        var ty = this.b * m.tx + this.d * m.ty + this.ty;
        this.fromObject({ a: a, b: b, c: c, d: d, tx: tx, ty: ty });
        return this;
    };
    return Matrix;
}());



/***/ }),

/***/ "./packages/core/src/maths/point.ts":
/*!******************************************!*\
  !*** ./packages/core/src/maths/point.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Point: () => (/* binding */ Point)
/* harmony export */ });
var Point = /** @class */ (function () {
    function Point() {
        this.x = 0;
        this.y = 0;
    }
    return Point;
}());



/***/ }),

/***/ "./packages/core/src/mixins/collection.ts":
/*!************************************************!*\
  !*** ./packages/core/src/mixins/collection.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* binding */ Collection)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Collection(Base) {
    return /** @class */ (function (_super) {
        __extends(Collection, _super);
        function Collection() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isCollection = true;
            _this.shapes = [];
            return _this;
        }
        Collection.prototype.add = function () {
            var shapes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                shapes[_i] = arguments[_i];
            }
            return this;
        };
        Collection.prototype.remove = function () {
            var shapes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                shapes[_i] = arguments[_i];
            }
            return this;
        };
        return Collection;
    }(Base));
}



/***/ }),

/***/ "./packages/core/src/shapes/index.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/shapes/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rect: () => (/* reexport safe */ _rect__WEBPACK_IMPORTED_MODULE_1__.Rect),
/* harmony export */   Shape: () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_0__.Shape)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./packages/core/src/shapes/shape.ts");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rect */ "./packages/core/src/shapes/rect.ts");




/***/ }),

/***/ "./packages/core/src/shapes/rect.ts":
/*!******************************************!*\
  !*** ./packages/core/src/shapes/rect.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rect: () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./packages/core/src/shapes/shape.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'rect';
        _this.attrMap = [
            'width',
            'height',
            'fill',
            'stroke',
            'strokeWidth',
        ];
        _this.width = 0;
        _this.height = 0;
        _this.init(params);
        return _this;
    }
    return Rect;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape));



/***/ }),

/***/ "./packages/core/src/shapes/shape.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/shapes/shape.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shape: () => (/* binding */ Shape)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./packages/core/src/element.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.left = 0;
        _this.top = 0;
        _this.angle = 0;
        _this.scaleX = 0;
        _this.scaleY = 0;
        _this.skewX = 0;
        _this.skewY = 0;
        _this.originX = 0.5;
        _this.originY = 0.5;
        _this.fill = '';
        _this.stroke = '';
        _this.strokeWidth = 0;
        return _this;
    }
    Shape.prototype.init = function (params) {
        this.set(params);
        this.matrix = new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix().fromOptions(this);
        this.bBox = new _maths__WEBPACK_IMPORTED_MODULE_1__.BBox();
    };
    Shape.prototype.getAttributes = function () {
        var defaultAttributes = _super.prototype.getAttributes.call(this);
        var x = 0;
        var y = 0;
        return __assign(__assign({}, defaultAttributes), { transform: "translate(".concat(x, ", ").concat(y, ")") });
    };
    Shape.prototype.getWrapperAttributes = function () {
        return {
            transform: this.matrix.toCSS()
        };
    };
    return Shape;
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element));



/***/ }),

/***/ "./packages/core/src/types/index.ts":
/*!******************************************!*\
  !*** ./packages/core/src/types/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./packages/core/src/types/math.ts");
/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixin */ "./packages/core/src/types/mixin.ts");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object */ "./packages/core/src/types/object.ts");





/***/ }),

/***/ "./packages/core/src/types/math.ts":
/*!*****************************************!*\
  !*** ./packages/core/src/types/math.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./packages/core/src/types/mixin.ts":
/*!******************************************!*\
  !*** ./packages/core/src/types/mixin.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./packages/core/src/types/object.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/types/object.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
;
;



/***/ }),

/***/ "./packages/core/src/utils/constants.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/utils/constants.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PIBY180: () => (/* binding */ PIBY180)
/* harmony export */ });
var PIBY180 = Math.PI / 180;


/***/ }),

/***/ "./packages/core/src/utils/functions.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/utils/functions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deg2Rad: () => (/* binding */ deg2Rad)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/core/src/utils/constants.ts");

var deg2Rad = function (degree) { return (degree * _constants__WEBPACK_IMPORTED_MODULE_0__.PIBY180); };



/***/ }),

/***/ "./packages/core/src/utils/importer.ts":
/*!*********************************************!*\
  !*** ./packages/core/src/utils/importer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Importer: () => (/* binding */ Importer)
/* harmony export */ });
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shapes */ "./packages/core/src/shapes/index.ts");

var Importer = /** @class */ (function () {
    function Importer() {
    }
    Importer.getClassFromTagName = function (tagName) {
        return _shapes__WEBPACK_IMPORTED_MODULE_0__[this.classNames[tagName]];
    };
    Importer.classNames = {
        'svg': 'Canvas',
        'g': 'Group',
        'rect': 'Rect',
        'circle': 'Circle'
    };
    return Importer;
}());



/***/ }),

/***/ "./packages/core/src/utils/index.ts":
/*!******************************************!*\
  !*** ./packages/core/src/utils/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Importer: () => (/* reexport safe */ _importer__WEBPACK_IMPORTED_MODULE_0__.Importer),
/* harmony export */   LottieImporter: () => (/* reexport safe */ _lottie_importer__WEBPACK_IMPORTED_MODULE_2__.LottieImporter),
/* harmony export */   PIBY180: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.PIBY180),
/* harmony export */   SVGImporter: () => (/* reexport safe */ _svg_importer__WEBPACK_IMPORTED_MODULE_1__.SVGImporter),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.deg2Rad)
/* harmony export */ });
/* harmony import */ var _importer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importer */ "./packages/core/src/utils/importer.ts");
/* harmony import */ var _svg_importer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-importer */ "./packages/core/src/utils/svg-importer.ts");
/* harmony import */ var _lottie_importer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lottie-importer */ "./packages/core/src/utils/lottie-importer.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./packages/core/src/utils/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions */ "./packages/core/src/utils/functions.ts");







/***/ }),

/***/ "./packages/core/src/utils/lottie-importer.ts":
/*!****************************************************!*\
  !*** ./packages/core/src/utils/lottie-importer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LottieImporter: () => (/* binding */ LottieImporter)
/* harmony export */ });
/* harmony import */ var _importer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importer */ "./packages/core/src/utils/importer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LottieImporter = /** @class */ (function (_super) {
    __extends(LottieImporter, _super);
    function LottieImporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LottieImporter;
}(_importer__WEBPACK_IMPORTED_MODULE_0__.Importer));



/***/ }),

/***/ "./packages/core/src/utils/svg-importer.ts":
/*!*************************************************!*\
  !*** ./packages/core/src/utils/svg-importer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGImporter: () => (/* binding */ SVGImporter)
/* harmony export */ });
/* harmony import */ var _importer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importer */ "./packages/core/src/utils/importer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SVGImporter = /** @class */ (function (_super) {
    __extends(SVGImporter, _super);
    function SVGImporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SVGImporter;
}(_importer__WEBPACK_IMPORTED_MODULE_0__.Importer));



/***/ }),

/***/ "./packages/core/src/colors/index.js":
/*!*******************************************!*\
  !*** ./packages/core/src/colors/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gradient: () => (/* reexport safe */ _gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _linear_gradient__WEBPACK_IMPORTED_MODULE_1__.LinearGradient),
/* harmony export */   Pattern: () => (/* reexport safe */ _pattern__WEBPACK_IMPORTED_MODULE_3__.Pattern),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _radial_gradient__WEBPACK_IMPORTED_MODULE_2__.RadialGradient)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/colors/gradient.ts");
/* harmony import */ var _linear_gradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear-gradient */ "./packages/core/src/colors/linear-gradient.ts");
/* harmony import */ var _radial_gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radial-gradient */ "./packages/core/src/colors/radial-gradient.ts");
/* harmony import */ var _pattern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pattern */ "./packages/core/src/colors/pattern.ts");






/***/ }),

/***/ "./packages/core/src/controls/index.js":
/*!*********************************************!*\
  !*** ./packages/core/src/controls/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_0__.Control),
/* harmony export */   PathControl: () => (/* reexport safe */ _path_control__WEBPACK_IMPORTED_MODULE_2__.PathControl),
/* harmony export */   TransformControl: () => (/* reexport safe */ _transform_control__WEBPACK_IMPORTED_MODULE_1__.TransformControl)
/* harmony export */ });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./packages/core/src/controls/control.ts");
/* harmony import */ var _transform_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-control */ "./packages/core/src/controls/transform-control.ts");
/* harmony import */ var _path_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path-control */ "./packages/core/src/controls/path-control.ts");





/***/ }),

/***/ "./packages/core/src/maths/index.js":
/*!******************************************!*\
  !*** ./packages/core/src/maths/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: () => (/* reexport safe */ _bbox__WEBPACK_IMPORTED_MODULE_0__.BBox),
/* harmony export */   Color: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.Color),
/* harmony export */   Matrix: () => (/* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix),
/* harmony export */   Point: () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_3__.Point)
/* harmony export */ });
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbox */ "./packages/core/src/maths/bbox.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./packages/core/src/maths/color.ts");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix */ "./packages/core/src/maths/matrix.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./packages/core/src/maths/point.ts");






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");

var wrap = document.getElementById('wrap');
var canvas = new _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Canvas({
    width: 1200,
    height: 800
});
var rect = new _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Rect({
    width: 200,
    height: 200,
    stroke: 'black',
    strokeWidth: 2,
    fill: 'none'
});
canvas.add(rect);

})();

/******/ })()
;