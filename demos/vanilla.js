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
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins */ "./packages/core/src/mixins/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maths */ "./packages/core/src/maths/index.ts");
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
        if (params === void 0) { params = {}; }
        var _this = _super.call(this) || this;
        _this.isCanvas = true;
        _this.tagName = 'svg';
        _this.xmlns = 'http://www.w3.org/2000/svg';
        _this.width = 0;
        _this.height = 0;
        _this.viewportMatrix = new _maths__WEBPACK_IMPORTED_MODULE_2__.Matrix();
        _this.set(params);
        return _this;
    }
    Canvas.prototype.getAttrMap = function () {
        return [
            'xmlns',
            'width',
            'height',
            'viewBox'
        ];
    };
    Canvas.prototype.set = function (key, value) {
        _super.prototype.set.call(this, key, value);
        this.setViewBox();
        return this;
    };
    Canvas.prototype.setViewBox = function () {
        this.viewBox = [0, 0, this.width, this.height];
    };
    return Canvas;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



/***/ }),

/***/ "./packages/core/src/controls/control-node.ts":
/*!****************************************************!*\
  !*** ./packages/core/src/controls/control-node.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlNode: () => (/* binding */ ControlNode)
/* harmony export */ });
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.ts");

var ControlNode = /** @class */ (function () {
    function ControlNode() {
        this.position = new _maths__WEBPACK_IMPORTED_MODULE_0__.Point();
    }
    ControlNode.prototype.onPointerDown = function () { };
    ControlNode.prototype.onPointerMove = function () { };
    ControlNode.prototype.onPointerUp = function () { };
    return ControlNode;
}());



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
        this.nodes = [];
        this.setNodes();
    }
    Control.prototype.setNodes = function () {
        console.warn('setNodes() must be implemented by subclass.');
        return this;
    };
    Control.prototype.getNodes = function () {
        return this.nodes;
    };
    Control.prototype.addNode = function () {
        var _a;
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        (_a = this.nodes).push.apply(_a, nodes);
        return this;
    };
    return Control;
}());



/***/ }),

/***/ "./packages/core/src/controls/index.ts":
/*!*********************************************!*\
  !*** ./packages/core/src/controls/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_0__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _control_node__WEBPACK_IMPORTED_MODULE_3__.ControlNode),
/* harmony export */   PathControl: () => (/* reexport safe */ _path_control__WEBPACK_IMPORTED_MODULE_2__.PathControl),
/* harmony export */   TransformControl: () => (/* reexport safe */ _transform_control__WEBPACK_IMPORTED_MODULE_1__.TransformControl)
/* harmony export */ });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./packages/core/src/controls/control.ts");
/* harmony import */ var _transform_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-control */ "./packages/core/src/controls/transform-control.ts");
/* harmony import */ var _path_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path-control */ "./packages/core/src/controls/path-control.ts");
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-node */ "./packages/core/src/controls/control-node.ts");






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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./packages/core/src/controls/index.ts");
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
    TransformControl.prototype.setNodes = function () {
        this.addNode();
        return this;
    };
    return TransformControl;
}(___WEBPACK_IMPORTED_MODULE_0__.Control));



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
        this._listeners = {};
    }
    Element.prototype.getAttrMap = function () {
        return [];
    };
    Element.prototype.set = function (key, value, silent) {
        var _a;
        if (silent === void 0) { silent = false; }
        if (typeof key === 'string' && typeof value !== 'undefined') {
            this._set(key, value);
            if (!silent) {
                this.trigger('set', (_a = {}, _a[key] = value, _a));
            }
        }
        else {
            for (var prop in key) {
                this._set(prop, key[prop]);
            }
            if (!silent) {
                this.trigger('set', key);
            }
        }
        return this;
    };
    Element.prototype._set = function (key, value) {
        if (this.hasOwnProperty(key)) {
            this[key] = value;
        }
    };
    Element.prototype.get = function (key) {
        var _this = this;
        if (Array.isArray(key)) {
            return key.reduce(function (memo, k) {
                memo[k] = _this[k];
                return memo;
            }, {});
        }
        else {
            return this[key];
        }
    };
    Element.prototype.getAttributes = function () {
        var _this = this;
        var attrMap = this.getAttrMap();
        var value;
        return attrMap.reduce(function (memo, key) {
            if (_this.hasOwnProperty(key)) {
                value = _this[key];
                value = Array.isArray(value) ? value.join(' ') : value;
                memo[key] = value;
            }
            return memo;
        }, {});
    };
    Element.prototype.on = function (eventName, listener) {
        if (typeof eventName === 'object') {
            for (var key in eventName) {
                this.on(key, eventName[key]);
            }
        }
        else {
            if (!this._listeners[eventName]) {
                this._listeners[eventName] = [];
            }
            if (this._listeners[eventName].indexOf(listener) === -1) {
                this._listeners[eventName].push(listener);
            }
        }
        return this;
    };
    Element.prototype.once = function () {
        return this;
    };
    Element.prototype.off = function (eventName, listener) {
        if (typeof eventName === 'object') {
            for (var key in eventName) {
                this.off(key, eventName[key]);
            }
        }
        else {
            var listeners = this._listeners[eventName];
            if (listeners) {
                var index = listeners.indexOf(listener);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        }
        return this;
    };
    Element.prototype.trigger = function (eventName, options) {
        if (options === void 0) { options = {}; }
        var listeners = this._listeners[eventName];
        if (!listeners) {
            return this;
        }
        for (var i = 0; i < listeners.length; i++) {
            listeners[i].call(this, options);
        }
        return this;
    };
    return Element;
}());



/***/ }),

/***/ "./packages/core/src/extras/clip-path.ts":
/*!***********************************************!*\
  !*** ./packages/core/src/extras/clip-path.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipPath: () => (/* binding */ ClipPath)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./packages/core/src/element.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./packages/core/src/mixins/index.ts");
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


var ClipPath = /** @class */ (function (_super) {
    __extends(ClipPath, _super);
    function ClipPath() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'clipPath';
        return _this;
    }
    return ClipPath;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



/***/ }),

/***/ "./packages/core/src/extras/gradient.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/extras/gradient.ts ***!
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

/***/ "./packages/core/src/extras/index.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/extras/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipPath: () => (/* reexport safe */ _clip_path__WEBPACK_IMPORTED_MODULE_0__.ClipPath),
/* harmony export */   Gradient: () => (/* reexport safe */ _gradient__WEBPACK_IMPORTED_MODULE_1__.Gradient),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _linear_gradient__WEBPACK_IMPORTED_MODULE_2__.LinearGradient),
/* harmony export */   Pattern: () => (/* reexport safe */ _pattern__WEBPACK_IMPORTED_MODULE_4__.Pattern),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _radial_gradient__WEBPACK_IMPORTED_MODULE_3__.RadialGradient)
/* harmony export */ });
/* harmony import */ var _clip_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clip-path */ "./packages/core/src/extras/clip-path.ts");
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/extras/gradient.ts");
/* harmony import */ var _linear_gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear-gradient */ "./packages/core/src/extras/linear-gradient.ts");
/* harmony import */ var _radial_gradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radial-gradient */ "./packages/core/src/extras/radial-gradient.ts");
/* harmony import */ var _pattern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pattern */ "./packages/core/src/extras/pattern.ts");







/***/ }),

/***/ "./packages/core/src/extras/linear-gradient.ts":
/*!*****************************************************!*\
  !*** ./packages/core/src/extras/linear-gradient.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearGradient: () => (/* binding */ LinearGradient)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/extras/gradient.ts");
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

/***/ "./packages/core/src/extras/pattern.ts":
/*!*********************************************!*\
  !*** ./packages/core/src/extras/pattern.ts ***!
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

/***/ "./packages/core/src/extras/radial-gradient.ts":
/*!*****************************************************!*\
  !*** ./packages/core/src/extras/radial-gradient.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialGradient: () => (/* binding */ RadialGradient)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/extras/gradient.ts");
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

/***/ "./packages/core/src/index.ts":
/*!************************************!*\
  !*** ./packages/core/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.BBox),
/* harmony export */   CLASSNAMES: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.CLASSNAMES),
/* harmony export */   Canvas: () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas),
/* harmony export */   ClipPath: () => (/* reexport safe */ _extras__WEBPACK_IMPORTED_MODULE_3__.ClipPath),
/* harmony export */   Color: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Color),
/* harmony export */   Control: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.ControlNode),
/* harmony export */   CubicBezierCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.CubicBezierCurve),
/* harmony export */   Curve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Curve),
/* harmony export */   Element: () => (/* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   Gradient: () => (/* reexport safe */ _extras__WEBPACK_IMPORTED_MODULE_3__.Gradient),
/* harmony export */   Group: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Group),
/* harmony export */   Importer: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.Importer),
/* harmony export */   LineCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.LineCurve),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _extras__WEBPACK_IMPORTED_MODULE_3__.LinearGradient),
/* harmony export */   LottieImporter: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.LottieImporter),
/* harmony export */   Matrix: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Matrix),
/* harmony export */   PIBY180: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.PIBY180),
/* harmony export */   Path: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Path),
/* harmony export */   PathControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.PathControl),
/* harmony export */   Pattern: () => (/* reexport safe */ _extras__WEBPACK_IMPORTED_MODULE_3__.Pattern),
/* harmony export */   Point: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Point),
/* harmony export */   QuadraticBezierCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.QuadraticBezierCurve),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _extras__WEBPACK_IMPORTED_MODULE_3__.RadialGradient),
/* harmony export */   Rect: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Rect),
/* harmony export */   SVGImporter: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.SVGImporter),
/* harmony export */   Shape: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Shape),
/* harmony export */   TransformControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.TransformControl),
/* harmony export */   clamp: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.deg2Rad),
/* harmony export */   getClassFromTagName: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.getClassFromTagName),
/* harmony export */   uniqueId: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.uniqueId)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./packages/core/src/element.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./packages/core/src/canvas.ts");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes */ "./packages/core/src/shapes/index.ts");
/* harmony import */ var _extras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras */ "./packages/core/src/extras/index.ts");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./packages/core/src/controls/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./packages/core/src/utils/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./packages/core/src/types/index.ts");
// Core


// Shapes

// Extras

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
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./packages/core/src/maths/point.ts");

var BBox = /** @class */ (function () {
    function BBox(min, max) {
        if (min === void 0) { min = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(); }
        if (max === void 0) { max = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(); }
        this.min = min;
        this.max = max;
    }
    BBox.prototype.fromSizeAndOrigin = function (size, origin) {
        if (origin === void 0) { origin = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(0.5, 0.5); }
        var mByOrigin = size.clone().multiply(origin).multiplyScalar(-1);
        this.min.copy(mByOrigin);
        this.max.copy(size.clone().add(mByOrigin));
        return this;
    };
    BBox.prototype.getSize = function () {
        return new _point__WEBPACK_IMPORTED_MODULE_0__.Point().subtractPoints(this.max, this.min);
    };
    BBox.prototype.copy = function (bBox) {
        this.min.copy(bBox.min);
        this.max.copy(bBox.max);
        return this;
    };
    BBox.prototype.clone = function () {
        return new BBox().copy(this);
    };
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
    function Color(r, g, b, a) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1;
        this.set(r, g, b, a);
    }
    Color.prototype.set = function (r, g, b, a) {
        return this;
    };
    Color.prototype.fromHEX = function (color) {
        var match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (match) {
            this.r = parseInt(match[1], 16);
            this.g = parseInt(match[2], 16);
            this.b = parseInt(match[3], 16);
            this.a = (typeof match[4] !== 'undefined') ? parseFloat(match[4]) : 1;
        }
        return this;
    };
    Color.prototype.fromRGB = function (color) {
        var match = color.match(/^rgba?\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i);
        if (match) {
            this.r = parseInt(match[1], 10);
            this.g = parseInt(match[2], 10);
            this.b = parseInt(match[3], 10);
            this.a = (typeof match[4] !== 'undefined') ? parseFloat(match[4]) : 1;
        }
        return this;
    };
    Color.prototype.fromHSL = function (color) {
        return this;
    };
    Color.prototype.fromArray = function (color) {
        this.r = color[0];
        this.g = color[1];
        this.b = color[2];
        this.a = color[3];
        return this;
    };
    Color.prototype.fromObject = function (color) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        this.a = color.a;
        return this;
    };
    Color.prototype.toHEX = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        r = (r.length === 1) ? ('0' + r) : r;
        g = (g.length === 1) ? ('0' + g) : g;
        b = (b.length === 1) ? ('0' + b) : b;
        return '#' + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
    };
    Color.prototype.toHEXA = function () {
        // @ts-ignore
        var a = parseInt(this.a * 255).toString(16);
        a = (a.length === 1) ? ('0' + a) : a;
        return this.toHEX() + a.toUpperCase();
    };
    Color.prototype.toRGB = function () {
        var _a = this, r = _a.r, g = _a.g, b = _a.b;
        return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    };
    Color.prototype.toRGBA = function () {
        var _a = this, r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    };
    Color.prototype.toHSL = function () {
        return '';
    };
    Color.prototype.toArray = function () {
        var _a = this, r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        return [r, g, b, a];
    };
    Color.prototype.toObject = function () {
        var _a = this, r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        return { r: r, g: g, b: b, a: a };
    };
    Color.prototype.copy = function (color) {
        return this.fromArray(color.toArray());
    };
    Color.prototype.clone = function () {
        return new Color().copy(this);
    };
    return Color;
}());



/***/ }),

/***/ "./packages/core/src/maths/cubic-bezier-curve.ts":
/*!*******************************************************!*\
  !*** ./packages/core/src/maths/cubic-bezier-curve.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CubicBezierCurve: () => (/* binding */ CubicBezierCurve)
/* harmony export */ });
/* harmony import */ var _curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve */ "./packages/core/src/maths/curve.ts");
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

var CubicBezierCurve = /** @class */ (function (_super) {
    __extends(CubicBezierCurve, _super);
    function CubicBezierCurve(p0, p1, p2, p3) {
        var _this = _super.call(this) || this;
        _this.p0 = p0;
        _this.p1 = p1;
        _this.p2 = p2;
        _this.p3 = p3;
        return _this;
    }
    return CubicBezierCurve;
}(_curve__WEBPACK_IMPORTED_MODULE_0__.Curve));



/***/ }),

/***/ "./packages/core/src/maths/curve.ts":
/*!******************************************!*\
  !*** ./packages/core/src/maths/curve.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Curve: () => (/* binding */ Curve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./packages/core/src/maths/index.ts");

var Curve = /** @class */ (function () {
    function Curve() {
    }
    Curve.prototype.getPoint = function (t) {
        return new ___WEBPACK_IMPORTED_MODULE_0__.Point();
    };
    Curve.prototype.getPoints = function (divisions) {
        if (divisions === void 0) { divisions = 10; }
        return [];
    };
    return Curve;
}());



/***/ }),

/***/ "./packages/core/src/maths/index.ts":
/*!******************************************!*\
  !*** ./packages/core/src/maths/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: () => (/* reexport safe */ _bbox__WEBPACK_IMPORTED_MODULE_0__.BBox),
/* harmony export */   Color: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.Color),
/* harmony export */   CubicBezierCurve: () => (/* reexport safe */ _cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_5__.CubicBezierCurve),
/* harmony export */   Curve: () => (/* reexport safe */ _curve__WEBPACK_IMPORTED_MODULE_2__.Curve),
/* harmony export */   LineCurve: () => (/* reexport safe */ _line_curve__WEBPACK_IMPORTED_MODULE_3__.LineCurve),
/* harmony export */   Matrix: () => (/* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_6__.Matrix),
/* harmony export */   Path: () => (/* reexport safe */ _path__WEBPACK_IMPORTED_MODULE_7__.Path),
/* harmony export */   Point: () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_8__.Point),
/* harmony export */   QuadraticBezierCurve: () => (/* reexport safe */ _quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_4__.QuadraticBezierCurve)
/* harmony export */ });
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbox */ "./packages/core/src/maths/bbox.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./packages/core/src/maths/color.ts");
/* harmony import */ var _curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve */ "./packages/core/src/maths/curve.ts");
/* harmony import */ var _line_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-curve */ "./packages/core/src/maths/line-curve.ts");
/* harmony import */ var _quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quadratic-bezier-curve */ "./packages/core/src/maths/quadratic-bezier-curve.ts");
/* harmony import */ var _cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cubic-bezier-curve */ "./packages/core/src/maths/cubic-bezier-curve.ts");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matrix */ "./packages/core/src/maths/matrix.ts");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./path */ "./packages/core/src/maths/path.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./point */ "./packages/core/src/maths/point.ts");











/***/ }),

/***/ "./packages/core/src/maths/line-curve.ts":
/*!***********************************************!*\
  !*** ./packages/core/src/maths/line-curve.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineCurve: () => (/* binding */ LineCurve)
/* harmony export */ });
/* harmony import */ var _curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve */ "./packages/core/src/maths/curve.ts");
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

var LineCurve = /** @class */ (function (_super) {
    __extends(LineCurve, _super);
    function LineCurve(p0, p1) {
        var _this = _super.call(this) || this;
        _this.p0 = p0;
        _this.p1 = p1;
        return _this;
    }
    return LineCurve;
}(_curve__WEBPACK_IMPORTED_MODULE_0__.Curve));



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
        this.reset();
        this.translate(left, top);
        this.rotate(angle);
        this.scaleX(scaleX);
        this.scaleY(scaleY);
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
        this.tx = tx;
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
        return this.multiply(m);
    };
    Matrix.prototype.scale = function (sx, sy) {
        if (typeof sx === 'undefined') {
            return this;
        }
        if (typeof sy === 'undefined')
            sy = sx;
        var m = new Matrix().fromArray([sx, 0, 0, sy, 0, 0]);
        return this.multiply(m);
    };
    Matrix.prototype.scaleX = function (scale) {
        if (typeof scale === 'undefined') {
            return this;
        }
        var m = new Matrix().fromArray([scale, 0, 0, 1, 0, 0]);
        return this.multiply(m);
    };
    Matrix.prototype.scaleY = function (scale) {
        if (typeof scale === 'undefined') {
            return this;
        }
        var m = new Matrix().fromArray([1, 0, 0, scale, 0, 0]);
        return this.multiply(m);
    };
    Matrix.prototype.skewX = function (angle) {
        if (!angle) {
            return this;
        }
        var theta = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deg2Rad)(angle);
        var m = new Matrix().fromArray([1, 0, Math.tan(theta), 1, 0, 0]);
        return this.multiply(m);
    };
    Matrix.prototype.skewY = function (angle) {
        if (!angle) {
            return this;
        }
        var theta = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deg2Rad)(angle);
        var m = new Matrix().fromArray([1, Math.tan(theta), 0, 1, 0, 0]);
        return this.multiply(m);
    };
    Matrix.prototype.multiply = function (m) {
        var a = this.a * m.a + this.c * m.b;
        var b = this.b * m.a + this.d * m.b;
        var c = this.a * m.c + this.c * m.d;
        var d = this.b * m.c + this.d * m.d;
        var tx = this.a * m.tx + this.c * m.ty + this.tx;
        var ty = this.b * m.tx + this.d * m.ty + this.ty;
        return this.fromObject({ a: a, b: b, c: c, d: d, tx: tx, ty: ty });
    };
    Matrix.prototype.reset = function () {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
        return this;
    };
    Matrix.prototype.copy = function (matrix) {
        return this.fromArray(matrix.toArray());
    };
    Matrix.prototype.clone = function () {
        return new Matrix().copy(this);
    };
    return Matrix;
}());



/***/ }),

/***/ "./packages/core/src/maths/path.ts":
/*!*****************************************!*\
  !*** ./packages/core/src/maths/path.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Path: () => (/* binding */ Path)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./packages/core/src/maths/index.ts");

var Path = /** @class */ (function () {
    function Path() {
        this.curves = [];
        this.currentPoint = new ___WEBPACK_IMPORTED_MODULE_0__.Point();
    }
    Path.prototype.add = function () {
        var _a;
        var curves = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            curves[_i] = arguments[_i];
        }
        (_a = this.curves).push.apply(_a, curves);
        return this;
    };
    Path.prototype.moveTo = function (x, y) {
        this.currentPoint.set(x, y);
        return this;
    };
    Path.prototype.lineTo = function (x, y) {
        var curve = new ___WEBPACK_IMPORTED_MODULE_0__.LineCurve(this.currentPoint.clone(), new ___WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this.currentPoint.set(x, y);
        return this.add(curve);
    };
    Path.prototype.quadraticCurveTo = function (cx, cy, x, y) {
        var curve = new ___WEBPACK_IMPORTED_MODULE_0__.QuadraticBezierCurve(this.currentPoint.clone(), new ___WEBPACK_IMPORTED_MODULE_0__.Point(cx, cy), new ___WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this.currentPoint.set(x, y);
        return this.add(curve);
    };
    Path.prototype.cubicCurveTo = function (c1x, c1y, c2x, c2y, x, y) {
        var curve = new ___WEBPACK_IMPORTED_MODULE_0__.CubicBezierCurve(this.currentPoint.clone(), new ___WEBPACK_IMPORTED_MODULE_0__.Point(c1x, c1y), new ___WEBPACK_IMPORTED_MODULE_0__.Point(c2x, c2y), new ___WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this.currentPoint.set(x, y);
        return this.add(curve);
    };
    Path.prototype.closePath = function () {
        return this;
    };
    Path.prototype.fromString = function (string) {
        return this;
    };
    Path.prototype.toString = function () {
        return '';
    };
    return Path;
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./packages/core/src/utils/index.ts");

var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = 0;
        this.y = 0;
        this.set(x, y);
    }
    Point.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Point.prototype.fromObject = function (object) {
        this.x = object.x;
        this.y = object.y;
        return this;
    };
    Point.prototype.toObject = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    Point.prototype.fromString = function (point) {
        return this;
    };
    Point.prototype.toString = function () {
        return "".concat(this.x, ", ").concat(this.y);
    };
    Point.prototype.add = function (point) {
        this.x += point.x;
        this.y += point.y;
        return this;
    };
    Point.prototype.addScalar = function (scale) {
        this.x += scale;
        this.y += scale;
        return this;
    };
    Point.prototype.addPoints = function (p1, p2) {
        this.x = p1.x + p2.x;
        this.y = p1.y + p2.y;
        return this;
    };
    Point.prototype.subtract = function (point) {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    };
    Point.prototype.subtractScalar = function (scale) {
        this.x -= scale;
        this.y -= scale;
        return this;
    };
    Point.prototype.subtractPoints = function (p1, p2) {
        this.x = p1.x - p2.x;
        this.y = p1.y - p2.y;
        return this;
    };
    Point.prototype.multiply = function (point) {
        this.x *= point.x;
        this.y *= point.y;
        return this;
    };
    Point.prototype.multiplyScalar = function (scale) {
        this.x *= scale;
        this.y *= scale;
        return this;
    };
    Point.prototype.divide = function (point) {
        this.x /= point.x;
        this.y /= point.y;
        return this;
    };
    Point.prototype.divideScalar = function (scale) {
        this.x /= scale;
        this.y /= scale;
        return this;
    };
    Point.prototype.lerp = function (point, t) {
        t = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(t, 0, 1);
        this.x += (point.x - this.x) * t;
        this.y += (point.y - this.y) * t;
        return this;
    };
    Point.prototype.rotate = function (center, angle) {
        var theta = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.deg2Rad)(angle);
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        var x = this.x - center.x;
        var y = this.y - center.y;
        this.x = x * cos - y * sin + center.x;
        ;
        this.y = x * sin + y * cos + center.y;
        ;
        return this;
    };
    Point.prototype.copy = function (point) {
        this.set(point.x, point.y);
        return this;
    };
    Point.prototype.clone = function () {
        return new Point().copy(this);
    };
    return Point;
}());



/***/ }),

/***/ "./packages/core/src/maths/quadratic-bezier-curve.ts":
/*!***********************************************************!*\
  !*** ./packages/core/src/maths/quadratic-bezier-curve.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuadraticBezierCurve: () => (/* binding */ QuadraticBezierCurve)
/* harmony export */ });
/* harmony import */ var _curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve */ "./packages/core/src/maths/curve.ts");
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

var QuadraticBezierCurve = /** @class */ (function (_super) {
    __extends(QuadraticBezierCurve, _super);
    function QuadraticBezierCurve(p0, p1, p2) {
        var _this = _super.call(this) || this;
        _this.p0 = p0;
        _this.p1 = p1;
        _this.p2 = p2;
        return _this;
    }
    return QuadraticBezierCurve;
}(_curve__WEBPACK_IMPORTED_MODULE_0__.Curve));



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
            var _this = this;
            var shapes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                shapes[_i] = arguments[_i];
            }
            shapes.forEach(function (shape) {
                _this.shapes.push(shape);
                shape.set({
                    parent: _this,
                    // @ts-ignore
                    canvas: _this.isCanvas ? _this : _this.canvas
                });
            });
            // @ts-ignore
            this.trigger('added', shapes);
            return this;
        };
        Collection.prototype.remove = function () {
            var shapes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                shapes[_i] = arguments[_i];
            }
            return this;
        };
        Collection.prototype.eachShape = function (callback) {
            this.shapes.forEach(callback);
            return this;
        };
        Collection.prototype.shapeAt = function (index) {
            return this.shapes[index];
        };
        Collection.prototype.shapeById = function (id) {
            return this.shapes.find(function (el) { return (el.id === id); });
        };
        return Collection;
    }(Base));
}



/***/ }),

/***/ "./packages/core/src/mixins/index.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/mixins/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* reexport safe */ _collection__WEBPACK_IMPORTED_MODULE_0__.Collection)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./packages/core/src/mixins/collection.ts");



/***/ }),

/***/ "./packages/core/src/shapes/group.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/shapes/group.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Group: () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./packages/core/src/shapes/shape.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./packages/core/src/mixins/index.ts");
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


var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'g';
        _this.init(params);
        return _this;
    }
    return Group;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape)));



/***/ }),

/***/ "./packages/core/src/shapes/index.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/shapes/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Group: () => (/* reexport safe */ _group__WEBPACK_IMPORTED_MODULE_2__.Group),
/* harmony export */   Rect: () => (/* reexport safe */ _rect__WEBPACK_IMPORTED_MODULE_1__.Rect),
/* harmony export */   Shape: () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_0__.Shape)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./packages/core/src/shapes/shape.ts");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rect */ "./packages/core/src/shapes/rect.ts");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group */ "./packages/core/src/shapes/group.ts");





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
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.ts");
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
        _this.width = 0;
        _this.height = 0;
        _this.init(params);
        return _this;
    }
    Rect.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this).concat([
            'width',
            'height'
        ]);
    };
    Rect.prototype.set = function (key, value) {
        _super.prototype.set.call(this, key, value);
        if (key === 'width' || key === 'height') {
            this.updateBBox();
        }
        return this;
    };
    Rect.prototype.updateBBox = function () {
        this.bBox.fromSizeAndOrigin(new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(this.width, this.height), this.origin);
        return this;
    };
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
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../controls */ "./packages/core/src/controls/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils */ "./packages/core/src/utils/index.ts");
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
        _this.canvas = null;
        _this.parent = null;
        _this.id = '';
        _this.matrix = new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix();
        _this.bBox = new _maths__WEBPACK_IMPORTED_MODULE_1__.BBox();
        _this.origin = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(0.5, 0.5);
        _this.transformControl = new _controls__WEBPACK_IMPORTED_MODULE_2__.TransformControl();
        _this.transformProps = [
            'left',
            'top',
            'angle',
            'scaleX',
            'scaleY',
            'skewX',
            'skewY'
        ];
        _this.left = 0;
        _this.top = 0;
        _this.angle = 0;
        _this.scaleX = 1;
        _this.scaleY = 1;
        _this.skewX = 0;
        _this.skewY = 0;
        _this.fill = 'none';
        _this.stroke = 'black';
        _this.strokeWidth = 1;
        return _this;
    }
    Shape.prototype.init = function (params) {
        this.set(params);
        this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.uniqueId)();
        this.updateMatrix();
        this.updateBBox();
    };
    Shape.prototype.set = function (key, value, silent) {
        var _a;
        if (silent === void 0) { silent = false; }
        _super.prototype.set.call(this, key, value, true);
        if (!key) {
            return this;
        }
        var props = this.transformProps;
        // Check props if key is a string.
        if (typeof key === 'string') {
            if (props.includes(key)) {
                this.updateMatrix();
            }
            if (!silent) {
                this.trigger('set', (_a = {}, _a[key] = value, _a));
            }
            return this;
        }
        var i, prop;
        // Also check props if key is an object.
        for (i = 0; i < props.length; i++) {
            prop = props[i];
            if (prop in key) {
                this.updateMatrix();
                if (!silent) {
                    this.trigger('set', key);
                }
                break;
            }
        }
        return this;
    };
    Shape.prototype.setOrigin = function (x, y) {
        this.origin.set(x, y);
        return this;
    };
    Shape.prototype.getAttrMap = function () {
        return [
            'fill',
            'stroke',
            'strokeWidth'
        ];
    };
    Shape.prototype.getAttributes = function () {
        var defaultAttributes = _super.prototype.getAttributes.call(this);
        // @ts-ignore
        if (this.isCollection) {
            return defaultAttributes;
        }
        var translate = this.bBox.getSize().multiply(this.origin).multiplyScalar(-1).toString();
        return __assign(__assign({}, defaultAttributes), { transform: "translate(".concat(translate, ")") });
    };
    Shape.prototype.getWrapperAttributes = function () {
        return {
            id: this.id,
            transform: this.matrix.toCSS()
        };
    };
    Shape.prototype.updateMatrix = function () {
        this.matrix.fromOptions(this.get(this.transformProps));
        return this;
    };
    Shape.prototype.updateBBox = function () {
        console.warn('updateBBox() must be implemented by subclass.');
        return this;
    };
    Shape.prototype.getWorldMatrix = function () {
        return new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix();
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
;



/***/ }),

/***/ "./packages/core/src/utils/constants.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/utils/constants.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSNAMES: () => (/* binding */ CLASSNAMES),
/* harmony export */   PIBY180: () => (/* binding */ PIBY180)
/* harmony export */ });
var PIBY180 = Math.PI / 180;
var CLASSNAMES = {
    'svg': 'Canvas',
    'g': 'Group',
    'rect': 'Rect',
    'circle': 'Circle'
};



/***/ }),

/***/ "./packages/core/src/utils/functions.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/utils/functions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   deg2Rad: () => (/* binding */ deg2Rad),
/* harmony export */   getClassFromTagName: () => (/* binding */ getClassFromTagName),
/* harmony export */   uniqueId: () => (/* binding */ uniqueId)
/* harmony export */ });
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shapes */ "./packages/core/src/shapes/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./packages/core/src/utils/constants.ts");


var clamp = function (value, min, max) {
    // @ts-ignore
    var _value = parseFloat(value) || 0;
    return Math.min(Math.max(_value, min), max);
};
var deg2Rad = function (degree) { return (degree * _constants__WEBPACK_IMPORTED_MODULE_1__.PIBY180); };
var uniqueId = function () {
    // @ts-ignore
    if (!uniqueId._index) {
        // @ts-ignore
        uniqueId._index = 0;
    }
    // @ts-ignore
    return 'shape' + uniqueId._index++;
};
var getClassFromTagName = function (tagName) {
    return _shapes__WEBPACK_IMPORTED_MODULE_0__[_constants__WEBPACK_IMPORTED_MODULE_1__.CLASSNAMES[tagName]];
};



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
var Importer = /** @class */ (function () {
    function Importer() {
    }
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
/* harmony export */   CLASSNAMES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.CLASSNAMES),
/* harmony export */   Importer: () => (/* reexport safe */ _importer__WEBPACK_IMPORTED_MODULE_0__.Importer),
/* harmony export */   LottieImporter: () => (/* reexport safe */ _lottie_importer__WEBPACK_IMPORTED_MODULE_2__.LottieImporter),
/* harmony export */   PIBY180: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.PIBY180),
/* harmony export */   SVGImporter: () => (/* reexport safe */ _svg_importer__WEBPACK_IMPORTED_MODULE_1__.SVGImporter),
/* harmony export */   clamp: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.deg2Rad),
/* harmony export */   getClassFromTagName: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.getClassFromTagName),
/* harmony export */   uniqueId: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.uniqueId)
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

/***/ "./packages/vanilla/src/index.ts":
/*!***************************************!*\
  !*** ./packages/vanilla/src/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.BBox),
/* harmony export */   CLASSNAMES: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.CLASSNAMES),
/* harmony export */   Canvas: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Canvas),
/* harmony export */   ClipPath: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.ClipPath),
/* harmony export */   Color: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Color),
/* harmony export */   Control: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.ControlNode),
/* harmony export */   CubicBezierCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.CubicBezierCurve),
/* harmony export */   Curve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Curve),
/* harmony export */   Element: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   Gradient: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Gradient),
/* harmony export */   Group: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Group),
/* harmony export */   Importer: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Importer),
/* harmony export */   LineCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.LineCurve),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.LinearGradient),
/* harmony export */   LottieImporter: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.LottieImporter),
/* harmony export */   Matrix: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Matrix),
/* harmony export */   PIBY180: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.PIBY180),
/* harmony export */   Path: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Path),
/* harmony export */   PathControl: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.PathControl),
/* harmony export */   Pattern: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Pattern),
/* harmony export */   Point: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Point),
/* harmony export */   QuadraticBezierCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.QuadraticBezierCurve),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.RadialGradient),
/* harmony export */   Rect: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Rect),
/* harmony export */   Renderer: () => (/* reexport safe */ _renderer__WEBPACK_IMPORTED_MODULE_1__.Renderer),
/* harmony export */   SVGImporter: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.SVGImporter),
/* harmony export */   Shape: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Shape),
/* harmony export */   TransformControl: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.TransformControl),
/* harmony export */   clamp: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.deg2Rad),
/* harmony export */   getClassFromTagName: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.getClassFromTagName),
/* harmony export */   uniqueId: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.uniqueId)
/* harmony export */ });
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./packages/vanilla/src/renderer.ts");




/***/ }),

/***/ "./packages/vanilla/src/renderer.ts":
/*!******************************************!*\
  !*** ./packages/vanilla/src/renderer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderer: () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./packages/vanilla/src/utils.ts");

var Renderer = /** @class */ (function () {
    function Renderer(canvas, options) {
        if (options === void 0) { options = {}; }
        this.elements = {};
        this.renderControls = false;
        this.canvas = canvas;
        this.xmlns = canvas.get('xmlns');
        this.createCanvasElement();
        this.appendShapes();
    }
    Renderer.prototype.createCanvasElement = function () {
        // @ts-ignore
        this.canvasElement = document.createElementNS(this.xmlns, this.canvas.get('tagName'));
        this.setAttributes(this.canvasElement, this.canvas.getAttributes());
        this.canvas.eachShape(this.createShapeElement.bind(this));
        return this;
    };
    Renderer.prototype.createShapeElement = function (object) {
        var wrapper = document.createElementNS(this.xmlns, 'g');
        var shape = document.createElementNS(this.xmlns, object.tagName);
        var id = object.get('id');
        this.setAttributes(wrapper, object.getWrapperAttributes());
        this.setAttributes(shape, object.getAttributes());
        wrapper.appendChild(shape);
        this.elements[id] = {
            id: id,
            wrapper: wrapper,
            shape: shape,
            object: object
        };
        // @ts-ignore
        if (object.isCollection) {
            // @ts-ignore
            object.eachShape(this.createShapeElement.bind(this));
        }
        return this;
    };
    Renderer.prototype.appendShapes = function () {
        var canvasElement = this.canvasElement;
        var elements = this.elements;
        for (var id in elements) {
            var element = elements[id];
            var object = element.object, wrapper = element.wrapper;
            var parent_1 = object.get('parent');
            if (parent_1.isCanvas) {
                canvasElement.appendChild(wrapper);
            }
            else {
                var parentId = parent_1.get('id');
                var parentElement = elements[parentId];
                parentElement.shape.appendChild(wrapper);
            }
            this.bindEvents(element);
        }
        return this;
    };
    Renderer.prototype.setOptions = function (options) {
        for (var key in options) {
            this[key] = options[key];
        }
        return this;
    };
    Renderer.prototype.appendTo = function (element) {
        element.appendChild(this.canvasElement);
        return this;
    };
    Renderer.prototype.setAttributes = function (element, attributes) {
        var key, value;
        for (key in attributes) {
            value = attributes[key];
            element.setAttribute((0,_utils__WEBPACK_IMPORTED_MODULE_0__.kebabize)(key), value);
        }
        return this;
    };
    Renderer.prototype.bindEvents = function (_a) {
        var _this = this;
        var object = _a.object, wrapper = _a.wrapper, shape = _a.shape;
        object.on('set', function () {
            _this.setAttributes(wrapper, object.getWrapperAttributes());
            _this.setAttributes(shape, object.getAttributes());
        });
        return this;
    };
    return Renderer;
}());



/***/ }),

/***/ "./packages/vanilla/src/utils.ts":
/*!***************************************!*\
  !*** ./packages/vanilla/src/utils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kebabize: () => (/* binding */ kebabize)
/* harmony export */ });
var kebabize = function (string) { return ('' + string).replace(/[A-Z]+(?![a-z])|[A-Z]/g, function ($, ofs) { return (ofs ? "-" : "") + $.toLowerCase(); }); };



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
/* harmony import */ var _grafikjs_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafikjs/vanilla */ "./packages/vanilla/src/index.ts");

var wrap = document.getElementById('wrap');
var canvas = new _grafikjs_vanilla__WEBPACK_IMPORTED_MODULE_0__.Canvas({
    width: 1200,
    height: 800
});
var rect = new _grafikjs_vanilla__WEBPACK_IMPORTED_MODULE_0__.Rect({
    left: 400,
    top: 400,
    width: 200,
    height: 200,
    angle: 45,
    stroke: 'black',
    strokeWidth: 8,
    fill: 'none'
});
canvas.add(rect);
var group = new _grafikjs_vanilla__WEBPACK_IMPORTED_MODULE_0__.Group({
    left: 400,
    top: 400,
    strokeWidth: 20
}).add(new _grafikjs_vanilla__WEBPACK_IMPORTED_MODULE_0__.Rect({
    left: -100,
    top: -100,
    width: 200,
    height: 200
}), new _grafikjs_vanilla__WEBPACK_IMPORTED_MODULE_0__.Rect({
    left: 100,
    top: 100,
    width: 200,
    height: 200
}));
canvas.add(group);
var renderer = new _grafikjs_vanilla__WEBPACK_IMPORTED_MODULE_0__.Renderer(canvas).appendTo(wrap);
// @ts-ignore
window.renderer = renderer;

})();

/******/ })()
;