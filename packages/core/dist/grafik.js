(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["grafik"] = factory();
	else
		root["grafik"] = factory();
})(window, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animation/animation-base.ts":
/*!*****************************************!*\
  !*** ./src/animation/animation-base.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationBase: () => (/* binding */ AnimationBase)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../observable */ "./src/observable.ts");
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



var AnimationBase = /** @class */ (function (_super) {
    __extends(AnimationBase, _super);
    function AnimationBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = '';
        _this.name = '';
        return _this;
    }
    AnimationBase.prototype.createId = function () {
        if (!this.id) {
            this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.uniqueId)(this.name);
        }
    };
    AnimationBase.prototype.toJSON = function () {
        return {};
    };
    return AnimationBase;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Stateful)(_observable__WEBPACK_IMPORTED_MODULE_2__.Observable)));



/***/ }),

/***/ "./src/animation/animation.ts":
/*!************************************!*\
  !*** ./src/animation/animation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var _animation_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-base */ "./src/animation/animation-base.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track */ "./src/animation/track.ts");
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



var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation(shape) {
        var _this = _super.call(this) || this;
        _this._isPlaying = false;
        _this._startTime = 0;
        _this._currentTime = 0;
        _this.shape = shape;
        _this.name = 'animation';
        _this.createId();
        return _this;
    }
    Object.defineProperty(Animation.prototype, "tracks", {
        get: function () {
            return this.getChildren();
        },
        set: function (value) { },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "duration", {
        get: function () {
            var durs = this.mapChildren(function (child) { return child.duration; });
            return durs.length ? Math.max.apply(Math, durs) : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "time", {
        get: function () {
            return this._currentTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "playing", {
        get: function () {
            return this._isPlaying;
        },
        enumerable: false,
        configurable: true
    });
    Animation.prototype.play = function () {
        if (this._isPlaying) {
            return this;
        }
        this._isPlaying = true;
        this._startTime = performance.now() - this._currentTime;
        requestAnimationFrame(this._render.bind(this));
        this.trigger('played', this.shape);
        this.shape.trigger('animation:played', this);
        this.shape.canvas.trigger('shapes:animation:played', this, this.shape);
        return this;
    };
    Animation.prototype.pause = function () {
        this._isPlaying = false;
        this.trigger('paused', this.shape);
        this.shape.trigger('animation:paused', this);
        this.shape.canvas.trigger('shapes:animation:paused', this, this.shape);
        return this;
    };
    Animation.prototype.seek = function (time) {
        this._currentTime = time;
        this._update();
        return this;
    };
    Animation.prototype._render = function (timeStamp) {
        if (!this._isPlaying)
            return;
        this._currentTime = timeStamp - this._startTime;
        this._update();
        if (this._currentTime <= this.duration) {
            requestAnimationFrame(this._render.bind(this));
        }
        else {
            this._isPlaying = false;
            this._startTime = 0;
            this._currentTime = 0;
            this.trigger('completed', this.shape);
            this.shape.trigger('animation:completed', this);
            this.shape.canvas.trigger('shapes:animation:completed', this, this.shape);
        }
    };
    Animation.prototype._update = function () {
        var _this = this;
        this.eachChild(function (track) {
            var value = track.getValueAt(_this._currentTime);
            if (value !== null) {
                _this.shape.set(track.property, value, true);
            }
        });
        this.trigger('updated', this.shape);
        this.shape.trigger('animation:updated', this);
        this.shape.canvas.trigger('shapes:animation:updated', this, this.shape);
    };
    Animation.prototype.setTracks = function (objects) {
        var _this = this;
        var tracks = objects.map(function (obj) { return _this.addTrack(obj.property, obj.keyframes); });
        this.setChildren(tracks);
        return this;
    };
    Animation.prototype.addTrack = function (property, keyframes) {
        var track = new _track__WEBPACK_IMPORTED_MODULE_2__.Track(property, this.shape.get(property), keyframes);
        this.add(track);
        return track;
    };
    Animation.prototype.toJSON = function () {
        return {
            tracks: this.mapChildren(function (track) { return track.toJSON(); })
        };
    };
    return Animation;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_animation_base__WEBPACK_IMPORTED_MODULE_0__.AnimationBase)));



/***/ }),

/***/ "./src/animation/easings.ts":
/*!**********************************!*\
  !*** ./src/animation/easings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easings: () => (/* binding */ easings)
/* harmony export */ });
var easings = {
    linear: function (k) { return k; },
    quadraticIn: function (k) { return k * k; },
    quadraticOut: function (k) { return 1 - Math.pow(1 - k, 2); },
    quadraticInOut: function (k) { return (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2); },
    cubicIn: function (k) { return k * k * k; },
    cubicOut: function (k) { return 1 - Math.pow(1 - k, 3); },
    cubicInOut: function (k) { return (k < 0.5 ? 4 * Math.pow(k, 3) : 1 - Math.pow(-2 * k + 2, 3) / 2); },
    bounceIn: function (k) { return 1 - easings.bounceOut(1 - k); },
    bounceOut: function (k) {
        var n1 = 7.5625;
        var d1 = 2.75;
        if (k < 1 / d1) {
            return n1 * k * k;
        }
        else if (k < 2 / d1) {
            return n1 * (k -= 1.5 / d1) * k + 0.75;
        }
        else if (k < 2.5 / d1) {
            return n1 * (k -= 2.25 / d1) * k + 0.9375;
        }
        else {
            return n1 * (k -= 2.625 / d1) * k + 0.984375;
        }
    },
    bounceInOut: function (k) {
        return k < 0.5 ? (1 - easings.bounceOut(1 - 2 * k)) / 2 : (1 + easings.bounceOut(2 * k - 1)) / 2;
    },
    backIn: function (k) { return 2.70158 * Math.pow(k, 3) - 1.70158 * Math.pow(k, 2); },
    backOut: function (k) { return 1 + 2.70158 * Math.pow(k - 1, 3) + 1.70158 * Math.pow(k - 1, 2); }
};



/***/ }),

/***/ "./src/animation/index.ts":
/*!********************************!*\
  !*** ./src/animation/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.Animation),
/* harmony export */   Keyframe: () => (/* reexport safe */ _keyframe__WEBPACK_IMPORTED_MODULE_3__.Keyframe),
/* harmony export */   Timeline: () => (/* reexport safe */ _timeline__WEBPACK_IMPORTED_MODULE_0__.Timeline),
/* harmony export */   Track: () => (/* reexport safe */ _track__WEBPACK_IMPORTED_MODULE_2__.Track),
/* harmony export */   easings: () => (/* reexport safe */ _easings__WEBPACK_IMPORTED_MODULE_4__.easings)
/* harmony export */ });
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline */ "./src/animation/timeline.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation/animation.ts");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track */ "./src/animation/track.ts");
/* harmony import */ var _keyframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyframe */ "./src/animation/keyframe.ts");
/* harmony import */ var _easings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./easings */ "./src/animation/easings.ts");







/***/ }),

/***/ "./src/animation/keyframe.ts":
/*!***********************************!*\
  !*** ./src/animation/keyframe.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keyframe: () => (/* binding */ Keyframe)
/* harmony export */ });
/* harmony import */ var _animation_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-base */ "./src/animation/animation-base.ts");
/* harmony import */ var _easings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easings */ "./src/animation/easings.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
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



var Keyframe = /** @class */ (function (_super) {
    __extends(Keyframe, _super);
    function Keyframe(from, to, startValue, endValue, easing) {
        if (easing === void 0) { easing = 'linear'; }
        var _this = _super.call(this) || this;
        _this.from = 0;
        _this.to = 0;
        _this.startValue = null;
        _this.endValue = null;
        _this.from = from;
        _this.to = to;
        _this.startValue = startValue;
        _this.endValue = endValue;
        _this._startValue = _this._parseValue(startValue);
        _this._endValue = _this._parseValue(endValue);
        _this.easing = typeof easing === 'string' ? _easings__WEBPACK_IMPORTED_MODULE_1__.easings[easing] : easing;
        _this.name = 'keyframe';
        _this.createId();
        return _this;
    }
    Object.defineProperty(Keyframe.prototype, "duration", {
        get: function () {
            return this.to - this.from;
        },
        enumerable: false,
        configurable: true
    });
    Keyframe.prototype.getValueAt = function (time) {
        if (time < this.from || time > this.to) {
            return null;
        }
        var t = (time - this.from) / (this.to - this.from);
        var eased = this.easing(t);
        return this._interpolateValue(eased);
    };
    Keyframe.prototype._interpolateValue = function (t) {
        var _this = this;
        if (Array.isArray(this._startValue) && Array.isArray(this._endValue)) {
            return this._startValue
                .map(function (startChunk, i) {
                var endChunk = _this._endValue[i];
                return typeof startChunk === 'number' && typeof endChunk === 'number'
                    ? startChunk + (endChunk - startChunk) * t
                    : startChunk;
            })
                .join('');
        }
        if (typeof this.startValue !== 'number' || typeof this.endValue !== 'number') {
            return 0;
        }
        return this.startValue + (this.endValue - this.startValue) * t;
    };
    Keyframe.prototype._parseValue = function (value) {
        if (typeof value === 'number') {
            return value;
        }
        if (_maths__WEBPACK_IMPORTED_MODULE_2__.Color.isColor(value)) {
            // If value is an any color format, eg #000, or black,
            // first we need to convert this to a value
            // that contains decimal numbers eg. rgba().
            var color = new _maths__WEBPACK_IMPORTED_MODULE_2__.Color(value);
            value = color.toRGBA();
        }
        if (typeof value === 'string') {
            value = value
                .split(/(\d+\.?\d*)|(\D+)/g)
                .filter(Boolean)
                .map(function (chunk) {
                var n = parseFloat(chunk);
                return isNaN(n) ? chunk : n;
            });
        }
        return value;
    };
    Keyframe.prototype.toJSON = function () {
        return {
            to: this.to,
            value: this.endValue,
            easing: this.easing.name
        };
    };
    return Keyframe;
}(_animation_base__WEBPACK_IMPORTED_MODULE_0__.AnimationBase));



/***/ }),

/***/ "./src/animation/timeline.ts":
/*!***********************************!*\
  !*** ./src/animation/timeline.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timeline: () => (/* binding */ Timeline)
/* harmony export */ });
/* harmony import */ var _animation_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-base */ "./src/animation/animation-base.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./src/mixins/index.ts");
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


var Timeline = /** @class */ (function (_super) {
    __extends(Timeline, _super);
    function Timeline() {
        var _this = _super.call(this) || this;
        _this.name = 'timeline';
        _this.createId();
        return _this;
    }
    Object.defineProperty(Timeline.prototype, "animations", {
        get: function () {
            return this.getChildren();
        },
        set: function (value) { },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timeline.prototype, "duration", {
        get: function () {
            var durs = this.mapChildren(function (child) { return child.duration; });
            return durs.length ? Math.max.apply(Math, durs) : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timeline.prototype, "time", {
        get: function () {
            var longest = this.reduceChildren(function (max, animation) { return (animation.duration > max.duration ? animation : max); }, this.firstChild());
            return this.childrenLength ? longest.time : 0;
        },
        enumerable: false,
        configurable: true
    });
    Timeline.prototype.play = function () {
        this.eachChild(function (child) { return child.play(); });
        return this;
    };
    Timeline.prototype.pause = function () {
        this.eachChild(function (child) { return child.pause(); });
        return this;
    };
    Timeline.prototype.seek = function (time) {
        this.eachChild(function (child) { return child.seek(time); });
        return this;
    };
    Timeline.prototype.toJSON = function () {
        return {
            animations: this.mapChildren(function (animation) { return animation.toJSON(); })
        };
    };
    return Timeline;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_animation_base__WEBPACK_IMPORTED_MODULE_0__.AnimationBase)));



/***/ }),

/***/ "./src/animation/track.ts":
/*!********************************!*\
  !*** ./src/animation/track.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Track: () => (/* binding */ Track)
/* harmony export */ });
/* harmony import */ var _animation_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-base */ "./src/animation/animation-base.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _keyframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyframe */ "./src/animation/keyframe.ts");
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



var Track = /** @class */ (function (_super) {
    __extends(Track, _super);
    function Track(property, originalValue, keyframes) {
        var _this = _super.call(this) || this;
        _this.property = '';
        _this.originalValue = 0;
        _this.property = property;
        _this.originalValue = originalValue;
        keyframes === null || keyframes === void 0 ? void 0 : keyframes.forEach(function (kf) {
            _this.addKeyframe(kf);
        });
        _this.name = 'track';
        _this.createId();
        return _this;
    }
    Object.defineProperty(Track.prototype, "keyframes", {
        get: function () {
            return this.getChildren();
        },
        set: function (value) { },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "duration", {
        get: function () {
            return this.reduceChildren(function (memo, child) {
                return memo + child.duration;
            }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Track.prototype.addKeyframe = function (kf) {
        var prevKf = this.lastChild();
        var from = prevKf ? prevKf.to : 0;
        var startValue = prevKf ? prevKf.endValue : this.originalValue;
        var keyframe = new _keyframe__WEBPACK_IMPORTED_MODULE_2__.Keyframe(from, kf.to, startValue, kf.value, kf.easing);
        this.add(keyframe);
        return keyframe;
    };
    Track.prototype.getValueAt = function (time) {
        if (!this.childrenLength) {
            return null;
        }
        for (var i = 0; i < this.childrenLength; i++) {
            var kf = this.childAt(i);
            if (!kf) {
                continue;
            }
            var value = kf.getValueAt(time);
            if (value !== null && value !== undefined) {
                return value;
            }
        }
        return null;
    };
    Track.prototype.toJSON = function () {
        return {
            property: this.property,
            originalValue: this.originalValue,
            keyframes: this.mapChildren(function (kf) { return kf.toJSON(); })
        };
    };
    return Track;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_animation_base__WEBPACK_IMPORTED_MODULE_0__.AnimationBase)));



/***/ }),

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins */ "./src/mixins/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive */ "./src/interactive/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./src/animation/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maths */ "./src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shapes */ "./src/shapes/index.ts");
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
        _this.multiselection = true;
        _this.zoomable = true;
        _this.mode = 'select';
        _this.penWidth = 2;
        _this.penColor = '#000';
        _this.tagName = 'svg';
        _this.xmlns = 'http://www.w3.org/2000/svg';
        _this.preserveAspectRatio = 'xMidYMid slice';
        _this.className = 'grafik-canvas';
        _this.width = 0;
        _this.height = 0;
        _this.viewportMatrix = new _maths__WEBPACK_IMPORTED_MODULE_4__.Matrix();
        _this.hasDrawingArea = false;
        _this.showGrid = false;
        _this.autoSize = false;
        _this.gridColorDark = '#EEEEEE';
        _this.gridColorLight = '#FFFFFF';
        _this.gridSize = 10;
        _this.drawingWidth = 0;
        _this.drawingHeight = 0;
        _this._defs = [];
        _this._animation = new _animation__WEBPACK_IMPORTED_MODULE_3__.Timeline();
        _this._selectedShapes = [];
        _this._selector = new _interactive__WEBPACK_IMPORTED_MODULE_2__.Selector();
        _this._selection = false;
        _this._zoom = 1;
        _this._pan = new _maths__WEBPACK_IMPORTED_MODULE_4__.Point();
        _this._isDragging = false;
        _this._startVector = new _maths__WEBPACK_IMPORTED_MODULE_4__.Point();
        _this._isDrawing = false;
        _this.set(params, true);
        _this.trigger('init', _this);
        return _this;
    }
    Object.defineProperty(Canvas.prototype, "viewBox", {
        get: function () {
            return this._viewBox ? this._viewBox.join(' ') : '0 0 0 0';
        },
        set: function (value) {
            if (typeof value === 'string') {
                this._viewBox = value.split(' ').map(function (n) { return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.toFixed)(n); });
            }
            else {
                this._viewBox = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        set: function (value) {
            this._zoom = value;
            this.zoomTo(this._zoom, this._pan);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "panX", {
        get: function () {
            return this._pan.x;
        },
        set: function (value) {
            this._pan.x = value;
            this.zoomTo(this._zoom, this._pan);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "panY", {
        get: function () {
            return this._pan.y;
        },
        set: function (value) {
            this._pan.y = value;
            this.zoomTo(this._zoom, this._pan);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "pan", {
        get: function () {
            return this._pan;
        },
        enumerable: false,
        configurable: true
    });
    Canvas.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this)
            .concat(['xmlns', 'width', 'height', 'viewBox', 'preserveAspectRatio']);
    };
    Canvas.prototype.getDrawingAreaPosition = function () {
        return this.hasDrawingArea
            ? new _maths__WEBPACK_IMPORTED_MODULE_4__.Point(this.width / 2 - this.drawingWidth / 2, this.height / 2 - this.drawingHeight / 2)
            : new _maths__WEBPACK_IMPORTED_MODULE_4__.Point();
    };
    Canvas.prototype.getDrawingAreaSize = function () {
        return this.hasDrawingArea
            ? new _maths__WEBPACK_IMPORTED_MODULE_4__.Point(this.drawingWidth, this.drawingHeight)
            : new _maths__WEBPACK_IMPORTED_MODULE_4__.Point(this.width, this.height);
    };
    Canvas.prototype.getShapesWrapperAttributes = function () {
        if (!this.hasDrawingArea) {
            return {};
        }
        var _a = this.getDrawingAreaPosition(), x = _a.x, y = _a.y;
        return {
            transform: "translate(".concat(x, ", ").concat(y, ")")
        };
    };
    Canvas.prototype.getDrawingAreaAttributes = function () {
        if (!this.hasDrawingArea) {
            return {};
        }
        var _a = this.getDrawingAreaPosition(), x = _a.x, y = _a.y;
        return {
            x: x,
            y: y,
            width: this.drawingWidth,
            height: this.drawingHeight
        };
    };
    Canvas.prototype.getGridPatternAttributes = function () {
        if (!this.showGrid) {
            return {};
        }
        var _a = this.getDrawingAreaPosition(), x = _a.x, y = _a.y;
        return {
            id: 'grafik-grid',
            width: this.gridSize * 2,
            height: this.gridSize * 2,
            x: x,
            y: y,
            patternUnits: 'userSpaceOnUse'
        };
    };
    Canvas.prototype.getGridPatternPaths = function (makeKebabeCase) {
        var _a, _b;
        if (makeKebabeCase === void 0) { makeKebabeCase = false; }
        if (!this.showGrid) {
            return [];
        }
        var s = this.gridSize;
        var s2 = s * 2;
        return [
            (_a = {
                    d: "M 0 0 L ".concat(s2, " 0 ").concat(s2, " ").concat(s2, " 0 ").concat(s2, " Z"),
                    fill: this.gridColorDark,
                    stroke: 'none'
                },
                _a[makeKebabeCase ? 'stroke-width' : 'strokeWidth'] = 0,
                _a),
            (_b = {
                    d: "M ".concat(s, " 0 L ").concat(s2, " 0 ").concat(s2, " ").concat(s, " 0 ").concat(s, " 0 ").concat(s2, " ").concat(s, " ").concat(s2, " Z"),
                    fill: this.gridColorLight,
                    stroke: 'none'
                },
                _b[makeKebabeCase ? 'stroke-width' : 'strokeWidth'] = 0,
                _b)
        ];
    };
    Canvas.prototype.selectShapes = function (shapes, silent) {
        var _this = this;
        if (silent === void 0) { silent = false; }
        shapes = Array.isArray(shapes) ? shapes : [shapes];
        var prevShapesLength = this._selectedShapes.length;
        shapes.forEach(function (shape) {
            // @ts-ignore
            if (!_this._selectedShapes.includes(shape) && shape.selectable) {
                // @ts-ignore
                _this._selectedShapes.push(shape);
            }
        });
        if (!silent || prevShapesLength !== this._selectedShapes.length) {
            this.trigger('shapes:selected', shapes);
            this.trigger('shapes:selection:updated', shapes);
        }
        return this;
    };
    Canvas.prototype.releaseShapes = function (shapes, silent) {
        if (silent === void 0) { silent = false; }
        shapes = Array.isArray(shapes) ? shapes : [shapes];
        var prevShapesLength = this._selectedShapes.length;
        if (shapes === null || shapes === void 0 ? void 0 : shapes[0]) {
            this._selectedShapes = this._selectedShapes.filter(function (shape) { return !shapes.includes(shape); });
        }
        else {
            // If shapes are empty, we remove all shapes from selection.
            this._selectedShapes = [];
        }
        if (!silent || prevShapesLength !== this._selectedShapes.length) {
            this.trigger('shapes:released', shapes);
            this.trigger('shapes:selection:updated', shapes);
        }
        return this;
    };
    Canvas.prototype.getSelectedShapes = function () {
        return this._selectedShapes;
    };
    Canvas.prototype.eachSelectedShape = function (callback) {
        this._selectedShapes.forEach(callback);
        return this;
    };
    Canvas.prototype.mapSelectedShapes = function (callback) {
        return this._selectedShapes.map(callback);
    };
    Canvas.prototype.addDefs = function (defs, silent) {
        var _this = this;
        if (silent === void 0) { silent = false; }
        defs = Array.isArray(defs) ? defs : [defs];
        defs.forEach(function (def) {
            // @ts-ignore
            if (!_this._defs.includes(def)) {
                // @ts-ignore
                _this._defs.push(def);
            }
        });
        if (!silent) {
            this.trigger('defs:added', defs);
        }
        return this;
    };
    Canvas.prototype.removeDefs = function (defs, silent) {
        if (silent === void 0) { silent = false; }
        return this;
    };
    Canvas.prototype.getDefs = function () {
        return this._defs;
    };
    Canvas.prototype.hasDefs = function () {
        return this.hasDrawingArea || this.showGrid || !!this._defs.length;
    };
    Canvas.prototype.eachDef = function (callback) {
        this._defs.forEach(callback);
        return this;
    };
    Canvas.prototype.mapDefs = function (callback) {
        return this._defs.map(callback);
    };
    Canvas.prototype.getSelector = function () {
        return this._selector;
    };
    Canvas.prototype.getAnimation = function () {
        return this._animation;
    };
    Canvas.prototype.setResponsiveSize = function (element) {
        if (!this.autoSize || !element) {
            return;
        }
        element.style.display = 'none';
        var _a = element.parentElement || {}, _b = _a.clientWidth, clientWidth = _b === void 0 ? 0 : _b, _c = _a.clientHeight, clientHeight = _c === void 0 ? 0 : _c;
        element.style.display = '';
        this.set({ width: clientWidth, height: clientHeight }).zoomTo();
    };
    Canvas.prototype.zoomTo = function (zoom, pan) {
        if (zoom === void 0) { zoom = 1; }
        if (pan === void 0) { pan = new _maths__WEBPACK_IMPORTED_MODULE_4__.Point(); }
        // First we have to set viewport to update shapes world matrix.
        var size = this.getSize();
        var zoomSize = size.clone().multiplyScalar(zoom);
        var translate = new _maths__WEBPACK_IMPORTED_MODULE_4__.Point()
            .subtractPoints(zoomSize, size)
            .divideScalar(2)
            .multiplyScalar(-1)
            .add(pan);
        this.viewportMatrix.fromArray([zoom, 0, 0, zoom, translate.x, translate.y]);
        // And we also need to calculate viewBox from viewport to update svg attribute.
        var _a = this.viewportMatrix, a = _a.a, d = _a.d, tx = _a.tx, ty = _a.ty;
        var _b = this, width = _b.width, height = _b.height;
        this.set('viewBox', [-tx / a, -ty / d, width / a, height / d]);
        // Update cache values too.
        this._zoom = zoom;
        this._pan.copy(pan);
        return this;
    };
    Canvas.prototype.getSize = function () {
        return new _maths__WEBPACK_IMPORTED_MODULE_4__.Point(this.width, this.height);
    };
    Canvas.prototype.getPointer = function (e) {
        // @ts-ignore
        var _a = 'ontouchstart' in window ? e.touches[0] : e, clientX = _a.clientX, clientY = _a.clientY, currentTarget = _a.currentTarget;
        var _b = currentTarget.getBoundingClientRect(), left = _b.left, top = _b.top;
        return new _maths__WEBPACK_IMPORTED_MODULE_4__.Point(clientX - left, clientY - top);
    };
    Canvas.prototype._onPointerStartInSelectMode = function (e) {
        // @ts-ignore
        var dataset = e.target.dataset;
        var shape = dataset.shape, name = dataset.name;
        var isNode = 'controlNode' in dataset;
        var pointer = this.getPointer(e);
        var founded = this.findLastChildByPointer(pointer);
        if (isNode) {
            this._currentNode = name;
            this.eachSelectedShape(function (shape) {
                var _a;
                (_a = shape.getControl().childByName(name)) === null || _a === void 0 ? void 0 : _a.onPointerStart(e);
            });
        }
        else {
            if (!shape) {
                if (founded) {
                    this.releaseShapes().selectShapes(founded);
                }
                else {
                    this.releaseShapes();
                    if (this.multiselection) {
                        this._selector.bBox.reset().min.copy(pointer);
                        this._selector.bBox.max.copy(pointer);
                        this.trigger('selector:updated');
                        this._selection = true;
                    }
                }
            }
            this.eachSelectedShape(function (shape) {
                shape.getControl().onPointerStart(e);
            });
        }
    };
    Canvas.prototype._onPointerMoveInSelectMode = function (e) {
        var _this = this;
        if (this._selection) {
            this._selector.bBox.max.copy(this.getPointer(e));
            this.trigger('selector:updated');
        }
        else {
            this.eachSelectedShape(function (shape) {
                var _a;
                shape.getControl().onPointerMove(e);
                (_a = shape.getControl().childByName(_this._currentNode)) === null || _a === void 0 ? void 0 : _a.onPointerMove(e);
            });
        }
    };
    Canvas.prototype._onPointerEndInSelectMode = function (e) {
        var _this = this;
        if (this._selection) {
            var selectedShapes = this.mapChildren(function (shape) {
                var selectorPolygon = _this._selector.bBox.toPolygon();
                var shapePolygon = shape.toPolygon();
                return (!_this._selector.bBox.isEmpty() &&
                    selectorPolygon.intersects(shapePolygon) &&
                    shape);
            }).filter(function (shape) { return !!shape; });
            this.selectShapes(selectedShapes);
            this._selector.bBox.reset();
            this.trigger('selector:updated');
            this._selection = false;
        }
        else {
            this.eachSelectedShape(function (shape) {
                var _a;
                shape.getControl().onPointerEnd(e);
                (_a = shape.getControl().childByName(_this._currentNode)) === null || _a === void 0 ? void 0 : _a.onPointerEnd(e);
            });
            this._currentNode = '';
        }
    };
    Canvas.prototype._onPointerStartInPanMode = function (e) {
        this._isDragging = true;
        this._startVector.subtractPoints(this.getPointer(e), this._pan);
    };
    Canvas.prototype._onPointerMoveInPanMode = function (e) {
        if (!this._isDragging) {
            return;
        }
        var pan = this.getPointer(e).subtract(this._startVector);
        this.zoomTo(this._zoom, pan);
    };
    Canvas.prototype._onPointerEndInPanMode = function (e) {
        this._isDragging = false;
    };
    Canvas.prototype._onPointerStartInDrawMode = function (e) {
        var _a = this.getPointer(e)
            .transform(this.viewportMatrix.clone().invert())
            .subtract(this.getDrawingAreaPosition()), x = _a.x, y = _a.y;
        var path = new _shapes__WEBPACK_IMPORTED_MODULE_6__.Path({
            left: 0,
            top: 0,
            originX: 0,
            originY: 0,
            stroke: this.penColor,
            strokeWidth: this.penWidth,
            fill: 'none'
        });
        path.getPath().moveTo(x, y);
        this._isDrawing = true;
        this._drawingPath = path;
        this.add(path);
    };
    Canvas.prototype._onPointerMoveInDrawMode = function (e) {
        if (!this._isDrawing) {
            return;
        }
        var _a = this.getPointer(e)
            .transform(this.viewportMatrix.clone().invert())
            .subtract(this.getDrawingAreaPosition()), x = _a.x, y = _a.y;
        this._drawingPath.getPath().lineTo(x, y);
        // Call set, just to trigger events, and rerender views.
        this._drawingPath.updateBBox().set({});
    };
    Canvas.prototype._onPointerEndInDrawMode = function (e) {
        if (!this._isDrawing) {
            return;
        }
        var path = this._drawingPath;
        var curves = path.getPath();
        var bBox = curves.getBBox();
        var translate = bBox.min.clone().add(bBox.getSize().divideScalar(2));
        curves.adjust();
        path.updateBBox().set({
            left: translate.x,
            top: translate.y,
            originX: 0.5,
            originY: 0.5
        });
        this._isDrawing = false;
    };
    Canvas.prototype.onPointerStart = function (e) {
        switch (this.mode) {
            case 'select':
                this._onPointerStartInSelectMode(e);
                break;
            case 'pan':
                this._onPointerStartInPanMode(e);
                break;
            case 'draw':
                this._onPointerStartInDrawMode(e);
                break;
            default:
                break;
        }
    };
    Canvas.prototype.onPointerMove = function (e) {
        switch (this.mode) {
            case 'select':
                this._onPointerMoveInSelectMode(e);
                break;
            case 'pan':
                this._onPointerMoveInPanMode(e);
                break;
            case 'draw':
                this._onPointerMoveInDrawMode(e);
                break;
            default:
                break;
        }
    };
    Canvas.prototype.onPointerEnd = function (e) {
        switch (this.mode) {
            case 'select':
                this._onPointerEndInSelectMode(e);
                break;
            case 'pan':
                this._onPointerEndInPanMode(e);
                break;
            case 'draw':
                this._onPointerEndInDrawMode(e);
                break;
            default:
                break;
        }
    };
    Canvas.prototype.onWheel = function (e) {
        if (this.zoomable) {
            e.preventDefault();
            var pointer = this.getPointer(e);
            var size = this.getSize();
            this.zoomTo((0,_utils__WEBPACK_IMPORTED_MODULE_5__.toFixed)(this.zoom * Math.pow(0.999, e.deltaY)), this._pan);
        }
    };
    return Canvas;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.ElementCollection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



/***/ }),

/***/ "./src/defs/clip-path.ts":
/*!*******************************!*\
  !*** ./src/defs/clip-path.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipPath: () => (/* binding */ ClipPath)
/* harmony export */ });
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definition */ "./src/defs/definition.ts");
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
    function ClipPath(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'clipPath';
        _this.init(params);
        return _this;
    }
    return ClipPath;
}(_definition__WEBPACK_IMPORTED_MODULE_0__.Definition));



/***/ }),

/***/ "./src/defs/color-stop.ts":
/*!********************************!*\
  !*** ./src/defs/color-stop.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorStop: () => (/* binding */ ColorStop)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./src/element.ts");
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

var ColorStop = /** @class */ (function (_super) {
    __extends(ColorStop, _super);
    function ColorStop(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'stop';
        _this.offset = 0;
        _this.stopColor = '';
        _this.stopOpacity = 1;
        _this.set(params);
        _this.createId('stop');
        return _this;
    }
    ColorStop.prototype.getAttrMap = function () {
        return ['offset', 'stopColor', 'stopOpacity'];
    };
    return ColorStop;
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element));



/***/ }),

/***/ "./src/defs/definition.ts":
/*!********************************!*\
  !*** ./src/defs/definition.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Definition: () => (/* binding */ Definition)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./src/element.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./src/mixins/index.ts");
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


var Definition = /** @class */ (function (_super) {
    __extends(Definition, _super);
    function Definition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDefinition = true;
        return _this;
    }
    Definition.prototype.init = function (params) {
        this.set(params, true);
        this.createId(this.tagName);
        this.trigger('init', this);
    };
    Definition.prototype.getAttrMap = function () {
        return ['id'];
    };
    return Definition;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



/***/ }),

/***/ "./src/defs/gradient.ts":
/*!******************************!*\
  !*** ./src/defs/gradient.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gradient: () => (/* binding */ Gradient)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/defs/index.ts");
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Gradient.prototype, "colorStops", {
        get: function () {
            return this.getChildren();
        },
        set: function (value) {
            var colorStops = value.map(function (stop) { return new ___WEBPACK_IMPORTED_MODULE_0__.ColorStop(stop); });
            this.setChildren(colorStops, true);
        },
        enumerable: false,
        configurable: true
    });
    return Gradient;
}(___WEBPACK_IMPORTED_MODULE_0__.Definition));



/***/ }),

/***/ "./src/defs/index.ts":
/*!***************************!*\
  !*** ./src/defs/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipPath: () => (/* reexport safe */ _clip_path__WEBPACK_IMPORTED_MODULE_1__.ClipPath),
/* harmony export */   ColorStop: () => (/* reexport safe */ _color_stop__WEBPACK_IMPORTED_MODULE_5__.ColorStop),
/* harmony export */   Definition: () => (/* reexport safe */ _definition__WEBPACK_IMPORTED_MODULE_0__.Definition),
/* harmony export */   Gradient: () => (/* reexport safe */ _gradient__WEBPACK_IMPORTED_MODULE_2__.Gradient),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _linear_gradient__WEBPACK_IMPORTED_MODULE_3__.LinearGradient),
/* harmony export */   Pattern: () => (/* reexport safe */ _pattern__WEBPACK_IMPORTED_MODULE_6__.Pattern),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _radial_gradient__WEBPACK_IMPORTED_MODULE_4__.RadialGradient)
/* harmony export */ });
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definition */ "./src/defs/definition.ts");
/* harmony import */ var _clip_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clip-path */ "./src/defs/clip-path.ts");
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gradient */ "./src/defs/gradient.ts");
/* harmony import */ var _linear_gradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear-gradient */ "./src/defs/linear-gradient.ts");
/* harmony import */ var _radial_gradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radial-gradient */ "./src/defs/radial-gradient.ts");
/* harmony import */ var _color_stop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-stop */ "./src/defs/color-stop.ts");
/* harmony import */ var _pattern__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern */ "./src/defs/pattern.ts");









/***/ }),

/***/ "./src/defs/linear-gradient.ts":
/*!*************************************!*\
  !*** ./src/defs/linear-gradient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearGradient: () => (/* binding */ LinearGradient)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./src/defs/gradient.ts");
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
    function LinearGradient(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'linearGradient';
        _this.init(params);
        return _this;
    }
    return LinearGradient;
}(_gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient));



/***/ }),

/***/ "./src/defs/pattern.ts":
/*!*****************************!*\
  !*** ./src/defs/pattern.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pattern: () => (/* binding */ Pattern)
/* harmony export */ });
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definition */ "./src/defs/definition.ts");
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
    function Pattern(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'pattern';
        _this.init(params);
        return _this;
    }
    return Pattern;
}(_definition__WEBPACK_IMPORTED_MODULE_0__.Definition));



/***/ }),

/***/ "./src/defs/radial-gradient.ts":
/*!*************************************!*\
  !*** ./src/defs/radial-gradient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialGradient: () => (/* binding */ RadialGradient)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./src/defs/gradient.ts");
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
    function RadialGradient(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'radialGradient';
        _this.init(params);
        return _this;
    }
    return RadialGradient;
}(_gradient__WEBPACK_IMPORTED_MODULE_0__.Gradient));



/***/ }),

/***/ "./src/element.ts":
/*!************************!*\
  !*** ./src/element.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element)
/* harmony export */ });
/* harmony import */ var _mixins_statueful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/statueful */ "./src/mixins/statueful.ts");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable */ "./src/observable.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
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



var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    function Element() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = '';
        _this.name = '';
        _this.className = '';
        return _this;
    }
    Element.prototype.getAttrMap = function () {
        return ['className'];
    };
    Element.prototype.getAttributes = function (makeKebabeCase) {
        var _this = this;
        if (makeKebabeCase === void 0) { makeKebabeCase = false; }
        var attrMap = this.getAttrMap();
        var value;
        return attrMap.reduce(function (memo, key) {
            if (typeof _this[key] !== 'undefined') {
                value = _this[key];
                value = Array.isArray(value) ? value.join(' ') : value;
                memo[makeKebabeCase ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.kebabize)(key) : key] = value;
            }
            return memo;
        }, {});
    };
    Element.prototype.getStyle = function () {
        return {};
    };
    Element.prototype.createId = function (prefix) {
        if (!this.id) {
            this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.uniqueId)(prefix);
        }
    };
    Element.prototype.addClass = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var currentClasses = this.className.split(' ').filter(function (cn) { return cn; });
        var newClasses = classNames.filter(function (cn) { return cn && !currentClasses.includes(cn); });
        this.set('className', currentClasses.concat(newClasses).join(' '));
        return this;
    };
    Element.prototype.removeClass = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var currentClasses = this.className.split(' ');
        this.set('className', currentClasses.filter(function (cn) { return !classNames.includes(cn); }).join(' '));
        return this;
    };
    Element.prototype.toJSON = function () {
        var _a = this, id = _a.id, name = _a.name, tagName = _a.tagName;
        var json = __assign({ id: id, name: name, tagName: tagName }, this.getAttributes());
        // @ts-ignore
        var children = this.isCollection && this.mapChildren(function (child) { return child.toJSON(); });
        if (children) {
            json.children = children;
        }
        return json;
    };
    return Element;
}((0,_mixins_statueful__WEBPACK_IMPORTED_MODULE_0__.Stateful)(_observable__WEBPACK_IMPORTED_MODULE_1__.Observable)));



/***/ }),

/***/ "./src/exporters/exporter.ts":
/*!***********************************!*\
  !*** ./src/exporters/exporter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Exporter: () => (/* binding */ Exporter)
/* harmony export */ });
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
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

var Exporter = /** @class */ (function () {
    function Exporter(canvas, options) {
        if (options === void 0) { options = {}; }
        this._canvas = canvas;
        this._options = options;
        this._build();
    }
    Exporter.prototype.download = function (filename) {
        if (filename === void 0) { filename = 'grafik'; }
        var link = document.createElement('a');
        link.href = this.getHref();
        link.download = filename + '.' + this._extension;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    Exporter.prototype.getContent = function () {
        return this._content;
    };
    Exporter.prototype.getHref = function () {
        return 'data:' + this._mimeType + ';charset=utf-8,' + encodeURIComponent(this._content);
    };
    Exporter.prototype.getOption = function (key) {
        return this._options[key];
    };
    Exporter.prototype._getCanvasAttributes = function () {
        var zoom = this._canvas.zoom;
        var pan = this._canvas.pan;
        // Reset viewport.
        this._canvas.zoomTo(1, new _maths__WEBPACK_IMPORTED_MODULE_0__.Point());
        var attrs = this._canvas.getAttributes();
        // Restore viewport.
        this._canvas.zoomTo(zoom, pan);
        // OverWrite canvas size, if it has drawing area.
        var overWrites = {};
        if (this._canvas.hasDrawingArea) {
            var size = this._canvas.getDrawingAreaSize();
            overWrites.width = size.x;
            overWrites.height = size.y;
            overWrites.viewBox = "0 0 ".concat(size.x, " ").concat(size.y);
        }
        return __assign(__assign({}, attrs), overWrites);
    };
    return Exporter;
}());



/***/ }),

/***/ "./src/exporters/index.ts":
/*!********************************!*\
  !*** ./src/exporters/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Exporter: () => (/* reexport safe */ _exporter__WEBPACK_IMPORTED_MODULE_0__.Exporter),
/* harmony export */   LottieExporter: () => (/* reexport safe */ _lottie_exporter__WEBPACK_IMPORTED_MODULE_4__.LottieExporter),
/* harmony export */   RasterExporter: () => (/* reexport safe */ _raster_exporter__WEBPACK_IMPORTED_MODULE_5__.RasterExporter),
/* harmony export */   SVGCSSExporter: () => (/* reexport safe */ _svg_css_exporter__WEBPACK_IMPORTED_MODULE_2__.SVGCSSExporter),
/* harmony export */   SVGExporter: () => (/* reexport safe */ _svg_exporter__WEBPACK_IMPORTED_MODULE_1__.SVGExporter),
/* harmony export */   SVGJSExporter: () => (/* reexport safe */ _svg_js_exporter__WEBPACK_IMPORTED_MODULE_3__.SVGJSExporter)
/* harmony export */ });
/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ "./src/exporters/exporter.ts");
/* harmony import */ var _svg_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-exporter */ "./src/exporters/svg-exporter.ts");
/* harmony import */ var _svg_css_exporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg-css-exporter */ "./src/exporters/svg-css-exporter.ts");
/* harmony import */ var _svg_js_exporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-js-exporter */ "./src/exporters/svg-js-exporter.ts");
/* harmony import */ var _lottie_exporter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lottie-exporter */ "./src/exporters/lottie-exporter.ts");
/* harmony import */ var _raster_exporter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./raster-exporter */ "./src/exporters/raster-exporter.ts");








/***/ }),

/***/ "./src/exporters/lottie-exporter.ts":
/*!******************************************!*\
  !*** ./src/exporters/lottie-exporter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LottieExporter: () => (/* binding */ LottieExporter)
/* harmony export */ });
/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ "./src/exporters/exporter.ts");
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

var LottieExporter = /** @class */ (function (_super) {
    __extends(LottieExporter, _super);
    function LottieExporter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mimeType = 'application/json';
        _this._extension = 'json';
        return _this;
    }
    LottieExporter.prototype._createDefs = function () { };
    LottieExporter.prototype._build = function () {
        throw new Error('Method not implemented.');
    };
    LottieExporter.prototype._createCanvas = function () {
        throw new Error('Method not implemented.');
    };
    LottieExporter.prototype._createShape = function () {
        throw new Error('Method not implemented.');
    };
    LottieExporter.prototype._createAnimation = function () {
        throw new Error('Method not implemented.');
    };
    return LottieExporter;
}(_exporter__WEBPACK_IMPORTED_MODULE_0__.Exporter));



/***/ }),

/***/ "./src/exporters/raster-exporter.ts":
/*!******************************************!*\
  !*** ./src/exporters/raster-exporter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RasterExporter: () => (/* binding */ RasterExporter)
/* harmony export */ });
/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ "./src/exporters/exporter.ts");
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

// The plan is this will provide an array of raster image buffers,
// that you can use to create gif, mp4, or any raster file.
var RasterExporter = /** @class */ (function (_super) {
    __extends(RasterExporter, _super);
    function RasterExporter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._buffers = [];
        return _this;
    }
    RasterExporter.prototype._createDefs = function () { };
    RasterExporter.prototype._build = function () {
        throw new Error('Method not implemented.');
    };
    RasterExporter.prototype._createCanvas = function () {
        throw new Error('Method not implemented.');
    };
    RasterExporter.prototype._createShape = function () {
        throw new Error('Method not implemented.');
    };
    RasterExporter.prototype._createAnimation = function () {
        throw new Error('Method not implemented.');
    };
    RasterExporter.prototype.getBuffers = function () {
        return this._buffers;
    };
    return RasterExporter;
}(_exporter__WEBPACK_IMPORTED_MODULE_0__.Exporter));



/***/ }),

/***/ "./src/exporters/svg-css-exporter.ts":
/*!*******************************************!*\
  !*** ./src/exporters/svg-css-exporter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGCSSExporter: () => (/* binding */ SVGCSSExporter)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.ts");
/* harmony import */ var _svg_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-exporter */ "./src/exporters/svg-exporter.ts");
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


var TRANSFORM_VALUES = {
    left: {
        fn: 'translateX',
        defValue: 0,
        unit: 'px'
    },
    top: {
        fn: 'translateY',
        defValue: 0,
        unit: 'px'
    },
    scaleX: {
        fn: 'scaleX',
        defValue: 1,
        unit: ''
    },
    scaleY: {
        fn: 'scaleY',
        defValue: 1,
        unit: ''
    },
    angle: {
        fn: 'rotate',
        defValue: 0,
        unit: 'deg'
    }
};
var TRANSFORM_PROPERTIES = Object.keys(TRANSFORM_VALUES);
var TRANSFORM_ORDER = ['top', 'left', 'angle', 'scaleY', 'scaleX'];
var EASING_FUNCTIONS = {
    linear: 'linear',
    // Quadratic
    quadraticIn: 'cubic-bezier(0.11, 0, 0.5, 0)',
    quadraticOut: 'cubic-bezier(0.5, 1, 0.89, 1)',
    quadraticInOut: 'cubic-bezier(0.45, 0, 0.55, 1)',
    quadraticOutIn: 'cubic-bezier(0, 0.45, 1, 0.55)',
    // Cubic
    cubicIn: 'cubic-bezier(0.32, 0, 0.67, 0)',
    cubicOut: 'cubic-bezier(0.33, 1, 0.68, 1)',
    cubicInOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
    cubicOutIn: 'cubic-bezier(0, 0.65, 1, 0.35)',
    // Quartic
    quarticIn: 'cubic-bezier(0.5, 0, 0.75, 0)',
    quarticOut: 'cubic-bezier(0.25, 1, 0.5, 1)',
    quarticInOut: 'cubic-bezier(0.76, 0, 0.24, 1)',
    quarticOutIn: 'cubic-bezier(0, 0.76, 1, 0.24)',
    // Quintic
    quinticIn: 'cubic-bezier(0.64, 0, 0.78, 0)',
    quinticOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
    quinticInOut: 'cubic-bezier(0.83, 0, 0.17, 1)',
    quinticOutIn: 'cubic-bezier(0, 0.83, 1, 0.17)',
    // Sine
    sineIn: 'cubic-bezier(0.12, 0, 0.39, 0)',
    sineOut: 'cubic-bezier(0.61, 1, 0.88, 1)',
    sineInOut: 'cubic-bezier(0.37, 0, 0.63, 1)',
    sineOutIn: 'cubic-bezier(0, 0.37, 1, 0.63)',
    // Exponential
    exponentialIn: 'cubic-bezier(0.7, 0, 0.84, 0)',
    exponentialOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    exponentialInOut: 'cubic-bezier(0.87, 0, 0.13, 1)',
    exponentialOutIn: 'cubic-bezier(0, 0.87, 1, 0.13)',
    // Circular
    circularIn: 'cubic-bezier(0.55, 0, 1, 0.45)',
    circularOut: 'cubic-bezier(0, 0.55, 0.45, 1)',
    circularInOut: 'cubic-bezier(0.85, 0, 0.15, 1)',
    circularOutIn: 'cubic-bezier(0, 0.85, 1, 0.15)',
    // Back
    backIn: '',
    backOut: '',
    backInOut: '',
    backOutIn: '',
    // Bounce
    bounceIn: '',
    bounceOut: '',
    bounceInOut: '',
    bounceOutIn: '',
    // Elastic
    elasticIn: '',
    elasticOut: '',
    elasticInOut: '',
    elasticOutIn: ''
};
var SVGCSSExporter = /** @class */ (function (_super) {
    __extends(SVGCSSExporter, _super);
    function SVGCSSExporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGCSSExporter.prototype._createDefs = function () {
        var _this = this;
        var canvas = this._canvas;
        var animation = canvas.getAnimation();
        var style = animation.mapChildren(function (child) { return _this._createAnimation(child); }).join('');
        return "\n\t\t<style>\n\t\t\t".concat(style, "\n\t\t</style>\n\t\t");
    };
    SVGCSSExporter.prototype._createShape = function (shape) {
        var _this = this;
        var wAttrs = this._serializeAttributes(shape.getWrapperAttributes());
        var attrs = this._serializeAttributes(shape.getAttributes(true));
        var animatedTransforms = this._getAnimatedTransformProps(shape);
        var tag = shape.get('tagName');
        var id = shape.get('id');
        if (shape.isCollection && shape.childrenLength) {
            var shapes = shape.mapChildren(function (child) { return _this._createShape(child); });
            if (animatedTransforms.length) {
                return this._createGroupsForTransform(animatedTransforms, shape.id, "<g id=\"".concat(id, "\"><g ").concat(attrs, ">").concat(shapes, "</g></g>"));
            }
            return "<g ".concat(wAttrs, "><g ").concat(attrs, ">").concat(shapes, "</g></g>");
        }
        if (animatedTransforms.length) {
            return this._createGroupsForTransform(animatedTransforms, shape.id, "<g id=\"".concat(id, "\"><").concat(tag, " ").concat(attrs, " /></g>"));
        }
        return "<g ".concat(wAttrs, "><").concat(tag, " ").concat(attrs, " /></g>");
    };
    SVGCSSExporter.prototype._createGroupsForTransform = function (properties, shapeId, children) {
        var output = '', id = '', child = '';
        for (var i = properties.length - 1; i >= 0; i--) {
            id = "".concat(shapeId, "-").concat(properties[i]);
            child = i === properties.length - 1 ? children : output;
            output = "<g id=\"".concat(id, "\">").concat(child, "</g>");
        }
        return output;
    };
    SVGCSSExporter.prototype._createAnimation = function (animation) {
        var _this = this;
        var shape = animation.shape;
        var id = shape.get('id');
        var tag = shape.get('tagName');
        var duration = this.getOption('duration') || animation.duration;
        var delay = this.getOption('delay') || '0';
        var repeat = this.getOption('repeat') || '1';
        var direction = this.getOption('direction') || 'normal';
        var fillMode = this.getOption('fillMode') || 'both';
        var animationNames = animation
            .mapChildren(function (track) { return track.property; })
            .filter(function (prop) { return !TRANSFORM_PROPERTIES.includes(prop); })
            .map(function (prop) { return "".concat(id, "-").concat(prop); })
            .join(', ');
        var keyframes = this._createKeyframes(animation);
        var transformCSS = this._getAnimatedTransformProps(shape)
            .map(function (prop) { return "\n\t\t\t#".concat(id, "-").concat(prop, " {\n\t\t\t\tanimation-name: ").concat(id, "-").concat(prop, ";\n\t\t\t\tanimation-duration: ").concat(duration, "ms;\n\t\t\t\tanimation-delay: ").concat(delay, "ms;\n\t\t\t\tanimation-iteration-count: ").concat(repeat, ";\n\t\t\t\tanimation-direction: ").concat(direction, ";\n\t\t\t\tanimation-fill-mode: ").concat(fillMode, ";\n\t\t\t\ttransform: ").concat(_this._getTransformValue(prop, shape.get(prop)), "\n\t\t\t}\n\t\t\t"); })
            .join('');
        var output = "\n\t\t\t#".concat(id, " ").concat(tag, " {\n\t\t\t\tanimation-name: ").concat(animationNames, ";\n\t\t\t\tanimation-duration: ").concat(duration, "ms;\n\t\t\t\tanimation-delay: ").concat(delay, "ms;\n\t\t\t\tanimation-iteration-count: ").concat(repeat, ";\n\t\t\t\tanimation-direction: ").concat(direction, ";\n\t\t\t\tanimation-fill-mode: ").concat(fillMode, ";\n\t\t\t}\n\t\t\t").concat(transformCSS, "\n\t\t\t").concat(keyframes, "\n\t\t");
        return output;
    };
    SVGCSSExporter.prototype._createKeyframes = function (animation) {
        var _this = this;
        var duration = animation.duration, shape = animation.shape;
        var id = shape.id;
        return animation
            .mapChildren(function (track) {
            var property = track.property, originalValue = track.originalValue;
            var output = "@keyframes ".concat(id, "-").concat(property, " {");
            var cssDeclaration = '';
            output += "\n\t\t\t\t\t0% {\n\t\t\t\t\t\t".concat(_this._getCSSDeclaration(property, originalValue), "\n\t\t\t\t\t}\n\t\t\t\t");
            output += track
                .mapChildren(function (kf) {
                var _a = kf.toJSON(), to = _a.to, value = _a.value, easing = _a.easing;
                var prc = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toFixed)((to / duration) * 100);
                var easingFn = EASING_FUNCTIONS[easing] || 'linear';
                cssDeclaration = _this._getCSSDeclaration(property, value);
                return "\n\t\t\t\t\t\t\t".concat(prc, "% {\n\t\t\t\t\t\t\t\t").concat(cssDeclaration, "\n\t\t\t\t\t\t\t\tanimation-timing-function: ").concat(easingFn, ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t");
            })
                .join('');
            output += "\n\t\t\t\t\t100% {\n\t\t\t\t\t\t".concat(cssDeclaration, "\n\t\t\t\t\t}\n\t\t\t\t");
            output += '}';
            return output;
        })
            .join('');
    };
    SVGCSSExporter.prototype._getAnimatedTransformProps = function (shape) {
        return shape
            .getAnimation()
            .mapChildren(function (track) { return track.property; })
            .filter(function (prop) { return TRANSFORM_PROPERTIES.includes(prop); })
            .sort(function (a, b) { return TRANSFORM_ORDER.indexOf(a) - TRANSFORM_ORDER.indexOf(b); });
    };
    SVGCSSExporter.prototype._getCSSDeclaration = function (property, value) {
        var transformValue = this._getTransformValue(property, value);
        if (transformValue) {
            return "transform: ".concat(transformValue, ";");
        }
        var unit = typeof value === 'number' ? 'px' : '';
        return "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.kebabize)(property), ": ").concat(value).concat(unit, ";");
    };
    SVGCSSExporter.prototype._getTransformValue = function (property, value) {
        if (!TRANSFORM_VALUES[property]) {
            return '';
        }
        var _a = TRANSFORM_VALUES[property], fn = _a.fn, defValue = _a.defValue, unit = _a.unit;
        var val = typeof value === 'undefined' ? defValue : value;
        return "".concat(fn, "(").concat(val).concat(unit, ")");
    };
    return SVGCSSExporter;
}(_svg_exporter__WEBPACK_IMPORTED_MODULE_1__.SVGExporter));



/***/ }),

/***/ "./src/exporters/svg-exporter.ts":
/*!***************************************!*\
  !*** ./src/exporters/svg-exporter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGExporter: () => (/* binding */ SVGExporter)
/* harmony export */ });
/* harmony import */ var _exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exporter */ "./src/exporters/exporter.ts");
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

var SVGExporter = /** @class */ (function (_super) {
    __extends(SVGExporter, _super);
    function SVGExporter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mimeType = 'image/svg+xml';
        _this._extension = 'svg';
        return _this;
    }
    SVGExporter.prototype._build = function () {
        this._content = this._createCanvas();
    };
    SVGExporter.prototype._createCanvas = function () {
        var _this = this;
        var canvas = this._canvas;
        var attrs = this._serializeAttributes(this._getCanvasAttributes());
        var defs = this._createDefs();
        var shapes = canvas.mapChildren(function (child) { return _this._createShape(child); }).join('');
        return "\n\t\t\t<svg ".concat(attrs, ">\n\t\t\t\t").concat(defs, "\n\t\t\t\t").concat(shapes, "\n\t\t\t</svg>\n\t\t");
    };
    SVGExporter.prototype._serializeAttributes = function (attrs) {
        var output = [];
        for (var key in attrs) {
            output.push("".concat(key, "=\"").concat(attrs[key], "\""));
        }
        return output.join(' ');
    };
    return SVGExporter;
}(_exporter__WEBPACK_IMPORTED_MODULE_0__.Exporter));



/***/ }),

/***/ "./src/exporters/svg-js-exporter.ts":
/*!******************************************!*\
  !*** ./src/exporters/svg-js-exporter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGJSExporter: () => (/* binding */ SVGJSExporter)
/* harmony export */ });
/* harmony import */ var _svg_exporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg-exporter */ "./src/exporters/svg-exporter.ts");
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

var SVGJSExporter = /** @class */ (function (_super) {
    __extends(SVGJSExporter, _super);
    function SVGJSExporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGJSExporter.prototype._createDefs = function () {
        return '';
    };
    SVGJSExporter.prototype._createShape = function (shape) {
        var _this = this;
        var wAttrs = this._serializeAttributes(shape.getWrapperAttributes());
        var attrs = this._serializeAttributes(shape.getAttributes(true));
        var tag = shape.get('tagName');
        if (shape.isCollection && shape.childrenLength) {
            var shapes = shape.mapChildren(function (child) { return _this._createShape(child); });
            return "<g ".concat(wAttrs, "><g ").concat(attrs, ">").concat(shapes, "</g></g>");
        }
        return "<g ".concat(wAttrs, "><").concat(tag, " ").concat(attrs, " /></g>");
    };
    SVGJSExporter.prototype._createAnimation = function () { };
    return SVGJSExporter;
}(_svg_exporter__WEBPACK_IMPORTED_MODULE_0__.SVGExporter));



/***/ }),

/***/ "./src/importers/classes.ts":
/*!**********************************!*\
  !*** ./src/importers/classes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHAPES: () => (/* binding */ SHAPES)
/* harmony export */ });
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shapes */ "./src/shapes/index.ts");

var SHAPES = {
    g: _shapes__WEBPACK_IMPORTED_MODULE_0__.Group,
    rect: _shapes__WEBPACK_IMPORTED_MODULE_0__.Rect,
    circle: _shapes__WEBPACK_IMPORTED_MODULE_0__.Circle,
    ellipse: _shapes__WEBPACK_IMPORTED_MODULE_0__.Ellipse,
    path: _shapes__WEBPACK_IMPORTED_MODULE_0__.Path,
    polygon: _shapes__WEBPACK_IMPORTED_MODULE_0__.Polygon,
    polyline: _shapes__WEBPACK_IMPORTED_MODULE_0__.Polyline,
    image: _shapes__WEBPACK_IMPORTED_MODULE_0__.Image,
    text: _shapes__WEBPACK_IMPORTED_MODULE_0__.Text,
    'text-path': _shapes__WEBPACK_IMPORTED_MODULE_0__.TextPath
};



/***/ }),

/***/ "./src/importers/importer.ts":
/*!***********************************!*\
  !*** ./src/importers/importer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Importer: () => (/* binding */ Importer)
/* harmony export */ });
var Importer = /** @class */ (function () {
    function Importer(canvas) {
        this._canvas = canvas;
    }
    return Importer;
}());



/***/ }),

/***/ "./src/importers/index.ts":
/*!********************************!*\
  !*** ./src/importers/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Importer: () => (/* reexport safe */ _importer__WEBPACK_IMPORTED_MODULE_0__.Importer),
/* harmony export */   JSONImporter: () => (/* reexport safe */ _json_importer__WEBPACK_IMPORTED_MODULE_1__.JSONImporter),
/* harmony export */   LottieImporter: () => (/* reexport safe */ _lottie_importer__WEBPACK_IMPORTED_MODULE_2__.LottieImporter),
/* harmony export */   SVGImporter: () => (/* reexport safe */ _svg_importer__WEBPACK_IMPORTED_MODULE_3__.SVGImporter)
/* harmony export */ });
/* harmony import */ var _importer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importer */ "./src/importers/importer.ts");
/* harmony import */ var _json_importer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-importer */ "./src/importers/json-importer.ts");
/* harmony import */ var _lottie_importer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lottie-importer */ "./src/importers/lottie-importer.ts");
/* harmony import */ var _svg_importer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-importer */ "./src/importers/svg-importer.ts");






/***/ }),

/***/ "./src/importers/json-importer.ts":
/*!****************************************!*\
  !*** ./src/importers/json-importer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONImporter: () => (/* binding */ JSONImporter)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/importers/classes.ts");
/* harmony import */ var _importer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./importer */ "./src/importers/importer.ts");
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var JSONImporter = /** @class */ (function (_super) {
    __extends(JSONImporter, _super);
    function JSONImporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONImporter.prototype.load = function (content) {
        var _this = this;
        if (!content) {
            return this._canvas;
        }
        var children = content.children, options = __rest(content, ["children"]);
        // Set canvas options.
        this._canvas.set(options);
        if (!(children === null || children === void 0 ? void 0 : children.length)) {
            return this._canvas;
        }
        // Add shapes.
        var shapes = children.map(function (child) { return _this._parseShape(child); }).filter(function (child) { return !!child; });
        // @ts-ignore
        return this._canvas.setChildren(shapes);
    };
    JSONImporter.prototype._parseShape = function (shapeOptions) {
        var _this = this;
        var tagName = shapeOptions.tagName, children = shapeOptions.children, options = __rest(shapeOptions, ["tagName", "children"]);
        var Shape = _classes__WEBPACK_IMPORTED_MODULE_0__.SHAPES[tagName];
        if (!Shape) {
            return console.warn("The specified tagName - ".concat(tagName, " does not have a class definition."));
        }
        var shape = new Shape(options);
        if (children === null || children === void 0 ? void 0 : children.length) {
            var childShapes = children
                .map(function (child) { return _this._parseShape(child); })
                .filter(function (child) { return !!child; });
            shape.add(childShapes);
        }
        return shape;
    };
    return JSONImporter;
}(_importer__WEBPACK_IMPORTED_MODULE_1__.Importer));



/***/ }),

/***/ "./src/importers/lottie-importer.ts":
/*!******************************************!*\
  !*** ./src/importers/lottie-importer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LottieImporter: () => (/* binding */ LottieImporter)
/* harmony export */ });
/* harmony import */ var _importer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./importer */ "./src/importers/importer.ts");
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
    LottieImporter.prototype.load = function (content) {
        throw new Error('Method not implemented.');
    };
    LottieImporter.prototype._parseShape = function (shape) {
        throw new Error('Method not implemented.');
    };
    return LottieImporter;
}(_importer__WEBPACK_IMPORTED_MODULE_0__.Importer));



/***/ }),

/***/ "./src/importers/svg-importer.ts":
/*!***************************************!*\
  !*** ./src/importers/svg-importer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGImporter: () => (/* binding */ SVGImporter)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/importers/classes.ts");
/* harmony import */ var _importer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./importer */ "./src/importers/importer.ts");
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
    SVGImporter.prototype.load = function (content) {
        var _this = this;
        if (!content) {
            return this._canvas;
        }
        var parser = new DOMParser();
        var doc = parser.parseFromString(content, 'image/svg+xml');
        var svg = doc.querySelector('svg');
        if (!svg) {
            console.warn('No <svg> element found in the provided content.');
            return this._canvas;
        }
        // Set canvas options.
        this._canvas.set(this._getAttributes(svg));
        var children = this._getChildren(svg);
        if (!children.length) {
            return this._canvas;
        }
        // Add shapes.
        var shapes = children.map(function (child) { return _this._parseShape(child); }).filter(function (child) { return !!child; });
        // @ts-ignore
        return this._canvas.setChildren(shapes);
    };
    SVGImporter.prototype._parseShape = function (shapeDOM) {
        var _this = this;
        var tagName = shapeDOM.tagName.toLowerCase();
        var attrs = this._getAttributes(shapeDOM);
        var Shape = _classes__WEBPACK_IMPORTED_MODULE_0__.SHAPES[tagName];
        if (!Shape) {
            return console.warn("The specified tagName - ".concat(tagName, " does not have a class definition."));
        }
        var shape = new Shape(attrs);
        var children = this._getChildren(shapeDOM);
        if (children === null || children === void 0 ? void 0 : children.length) {
            var childShapes = children
                .map(function (child) { return _this._parseShape(child); })
                .filter(function (child) { return !!child; });
            shape.add(childShapes);
        }
        return shape;
    };
    SVGImporter.prototype._getAttributes = function (element) {
        var attributes = {};
        var i, attr;
        for (i = 0; i < element.attributes.length; i++) {
            attr = element.attributes[i];
            attributes[attr.name] = attr.value;
        }
        return attributes;
    };
    SVGImporter.prototype._getChildren = function (element) {
        return Array.from(element.childNodes);
    };
    return SVGImporter;
}(_importer__WEBPACK_IMPORTED_MODULE_1__.Importer));



/***/ }),

/***/ "./src/interactive/control-node.ts":
/*!*****************************************!*\
  !*** ./src/interactive/control-node.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlNode: () => (/* binding */ ControlNode)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./src/element.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
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



var ControlNode = /** @class */ (function (_super) {
    __extends(ControlNode, _super);
    function ControlNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'div';
        _this.className = 'grafik-control-node';
        _this.name = '';
        _this.offset = new _maths__WEBPACK_IMPORTED_MODULE_2__.Point();
        return _this;
    }
    ControlNode.prototype.init = function (params) {
        this.set(params);
        this.createId('node');
        if (this.name) {
            this.addClass('grafik-control-node__' + this.name);
        }
        if (params.getPosition) {
            this.getPosition = params.getPosition.bind(this);
        }
        this.onPointerStart = this.onPointerStart.bind(this);
        this.onPointerMove = this.onPointerMove.bind(this);
        this.onPointerEnd = this.onPointerEnd.bind(this);
    };
    Object.defineProperty(ControlNode.prototype, "x", {
        get: function () {
            return this.offset.x;
        },
        set: function (value) {
            this.offset.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ControlNode.prototype, "y", {
        get: function () {
            return this.offset.y;
        },
        set: function (value) {
            this.offset.y = value;
        },
        enumerable: false,
        configurable: true
    });
    ControlNode.prototype.getPosition = function () {
        var size = this.getControlSize();
        var _a = this.offset, x = _a.x, y = _a.y;
        return new _maths__WEBPACK_IMPORTED_MODULE_2__.Point(size.x * x, size.y * y);
    };
    ControlNode.prototype.connectTo = function (node) {
        this.connectedWith = node;
        return node;
    };
    ControlNode.prototype.getLineMatrix = function () {
        if (!this.connectedWith) {
            return new _maths__WEBPACK_IMPORTED_MODULE_2__.Matrix();
        }
        var p1 = this.getPosition();
        var p2 = this.connectedWith.getPosition();
        var m = new _maths__WEBPACK_IMPORTED_MODULE_2__.Matrix();
        var a = -p1.angleTo(p2);
        return m.rotate(a);
    };
    ControlNode.prototype.getShape = function () {
        return this.parent.shape;
    };
    ControlNode.prototype.getControlSize = function () {
        return this.parent.getSize();
    };
    ControlNode.prototype.getStyle = function () {
        var _a = this.getPosition(), x = _a.x, y = _a.y;
        return {
            left: x + 'px',
            top: y + 'px'
        };
    };
    ControlNode.prototype.getAttributes = function () {
        var defaultAttributes = _super.prototype.getAttributes.call(this);
        return __assign(__assign({}, defaultAttributes), { 'data-control-node': true, 'data-id': this.id, 'data-name': this.name, 'data-shape': this.getShape().get('id') });
    };
    ControlNode.prototype.onPointerStart = function (e) { };
    ControlNode.prototype.onPointerMove = function (e) { };
    ControlNode.prototype.onPointerEnd = function (e) { };
    return ControlNode;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



/***/ }),

/***/ "./src/interactive/control-nodes/angle-control-node.ts":
/*!*************************************************************!*\
  !*** ./src/interactive/control-nodes/angle-control-node.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleControlNode: () => (/* binding */ AngleControlNode)
/* harmony export */ });
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../control-node */ "./src/interactive/control-node.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../maths */ "./src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./src/utils/index.ts");
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



var AngleControlNode = /** @class */ (function (_super) {
    __extends(AngleControlNode, _super);
    function AngleControlNode(params) {
        var _this = _super.call(this) || this;
        _this._isDragging = false;
        _this._startAngle = 0;
        _this._startVector = 0;
        _this.init(params);
        return _this;
    }
    AngleControlNode.prototype.onPointerStart = function (e) {
        var shape = this.getShape();
        var _a = shape.getWorldMatrix(true).toOptions(), left = _a.left, top = _a.top;
        this._isDragging = true;
        this._startAngle = shape.get('angle');
        // We do not want to get the whole world matrix, just want to get the translate matrix here.
        this._startMatrix = new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix().translate(left, top).invert();
        this._startVector = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point().angleTo(shape.getLocalPointer(e, this._startMatrix));
    };
    AngleControlNode.prototype.onPointerMove = function (e) {
        if (!this._isDragging) {
            return;
        }
        var shape = this.getShape();
        var p = shape.getLocalPointer(e, this._startMatrix);
        var v = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point().angleTo(p);
        var cv = v - this._startVector;
        var angle = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(this._startAngle + cv);
        // Normalize angle to be between 0, and 360.
        if (angle < 0)
            angle += 360;
        angle %= 360;
        shape.set('angle', angle);
    };
    AngleControlNode.prototype.onPointerEnd = function (e) {
        this._isDragging = false;
    };
    return AngleControlNode;
}(_control_node__WEBPACK_IMPORTED_MODULE_0__.ControlNode));



/***/ }),

/***/ "./src/interactive/control-nodes/index.ts":
/*!************************************************!*\
  !*** ./src/interactive/control-nodes/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleControlNode: () => (/* reexport safe */ _angle_control_node__WEBPACK_IMPORTED_MODULE_0__.AngleControlNode),
/* harmony export */   OriginControlNode: () => (/* reexport safe */ _origin_control_node__WEBPACK_IMPORTED_MODULE_1__.OriginControlNode),
/* harmony export */   ScaleControlNode: () => (/* reexport safe */ _scale_control_node__WEBPACK_IMPORTED_MODULE_2__.ScaleControlNode)
/* harmony export */ });
/* harmony import */ var _angle_control_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angle-control-node */ "./src/interactive/control-nodes/angle-control-node.ts");
/* harmony import */ var _origin_control_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./origin-control-node */ "./src/interactive/control-nodes/origin-control-node.ts");
/* harmony import */ var _scale_control_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale-control-node */ "./src/interactive/control-nodes/scale-control-node.ts");





/***/ }),

/***/ "./src/interactive/control-nodes/origin-control-node.ts":
/*!**************************************************************!*\
  !*** ./src/interactive/control-nodes/origin-control-node.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OriginControlNode: () => (/* binding */ OriginControlNode)
/* harmony export */ });
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../control-node */ "./src/interactive/control-node.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../maths */ "./src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./src/utils/index.ts");
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



var OriginControlNode = /** @class */ (function (_super) {
    __extends(OriginControlNode, _super);
    function OriginControlNode(params) {
        var _this = _super.call(this) || this;
        _this._isDragging = false;
        _this._startVector = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point();
        _this._startPosition = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point();
        _this._startOrigin = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point();
        _this.init(params);
        return _this;
    }
    OriginControlNode.prototype.onPointerStart = function (e) {
        var shape = this.getShape();
        var canvas = shape.get('canvas');
        var _a = shape.getWorldMatrix().toOptions(), left = _a.left, top = _a.top;
        this._isDragging = true;
        this._startVector.copy(canvas.getPointer(e));
        this._startPosition.set(left, top);
        this._startOrigin.copy(shape.get('origin'));
    };
    OriginControlNode.prototype.onPointerMove = function (e) {
        if (!this._isDragging) {
            return;
        }
        var shape = this.getShape();
        var canvas = shape.get('canvas');
        var vpt = shape.parent.isCanvas
            ? canvas.get('viewportMatrix').clone()
            : shape.parent.getWorldMatrix();
        var move = canvas
            .getPointer(e)
            .subtract(this._startVector.clone().subtract(this._startPosition))
            .transform(vpt.clone().invert());
        var dimMatrix = shape.getWorldMatrix().invert().translate(0, 0);
        var origin = canvas
            .getPointer(e)
            .subtract(this._startVector)
            .divide(shape.bBox.getSize())
            .transform(dimMatrix)
            .add(this._startOrigin);
        shape.set({
            left: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(move.x),
            top: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(move.y),
            originX: origin.x,
            originY: origin.y
        });
    };
    OriginControlNode.prototype.onPointerEnd = function (e) {
        this._isDragging = false;
    };
    return OriginControlNode;
}(_control_node__WEBPACK_IMPORTED_MODULE_0__.ControlNode));



/***/ }),

/***/ "./src/interactive/control-nodes/scale-control-node.ts":
/*!*************************************************************!*\
  !*** ./src/interactive/control-nodes/scale-control-node.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScaleControlNode: () => (/* binding */ ScaleControlNode)
/* harmony export */ });
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../control-node */ "./src/interactive/control-node.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../maths */ "./src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./src/utils/index.ts");
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



var ScaleControlNode = /** @class */ (function (_super) {
    __extends(ScaleControlNode, _super);
    function ScaleControlNode(params) {
        var _this = _super.call(this) || this;
        _this.axis = '';
        _this._isDragging = false;
        _this._startScale = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point();
        _this._startVector = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point();
        _this._startMatrix = new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix();
        _this.init(params);
        return _this;
    }
    ScaleControlNode.prototype.onPointerStart = function (e) {
        var shape = this.getShape();
        var wMatrix = shape.getWorldMatrix(true);
        var _a = wMatrix.toOptions(), left = _a.left, top = _a.top;
        var _b = shape.get(['scaleX', 'scaleY']), scaleX = _b.scaleX, scaleY = _b.scaleY;
        this._startScale.set(scaleX, scaleY);
        this._startVector.copy(shape.getLocalPointer(e));
        this._startMatrix.copy(wMatrix.invert());
        this._isDragging = true;
    };
    ScaleControlNode.prototype.onPointerMove = function (e) {
        if (!this._isDragging) {
            return;
        }
        var shape = this.getShape();
        var scale = shape
            .getLocalPointer(e, this._startMatrix)
            .divide(this._startVector)
            .multiply(this._startScale)
            .abs();
        var ratio = this._startScale.x / this._startScale.y;
        var set = {};
        if (this.axis === 'x') {
            set.scaleX = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(scale.x);
        }
        else if (this.axis === 'y') {
            set.scaleY = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(scale.y);
        }
        else {
            set.scaleX = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(Math.max(scale.x, scale.y));
            set.scaleY = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(Math.max(scale.x, scale.y)) / ratio;
        }
        shape.set(set);
    };
    ScaleControlNode.prototype.onPointerEnd = function (e) {
        this._isDragging = false;
    };
    return ScaleControlNode;
}(_control_node__WEBPACK_IMPORTED_MODULE_0__.ControlNode));



/***/ }),

/***/ "./src/interactive/control.ts":
/*!************************************!*\
  !*** ./src/interactive/control.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./src/element.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./src/mixins/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
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



var Control = /** @class */ (function (_super) {
    __extends(Control, _super);
    function Control() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'div';
        _this.className = 'grafik-control';
        return _this;
    }
    Control.prototype.init = function (params) {
        this.set(params);
        this.setNodes();
        this.onPointerStart = this.onPointerStart.bind(this);
        this.onPointerMove = this.onPointerMove.bind(this);
        this.onPointerEnd = this.onPointerEnd.bind(this);
    };
    Control.prototype.setNodes = function () {
        return this;
    };
    Control.prototype.getSize = function () {
        var _a = this.shape.getWorldMatrix().toOptions(), scaleX = _a.scaleX, scaleY = _a.scaleY;
        return this.shape.bBox.getSize().multiply(new _maths__WEBPACK_IMPORTED_MODULE_2__.Point(scaleX, scaleY));
    };
    Control.prototype.getStyle = function () {
        var shape = this.shape;
        var _a = shape.getWorldMatrix(true).toOptions(), left = _a.left, top = _a.top, angle = _a.angle;
        var size = this.getSize();
        var _b = shape.origin.clone().multiplyScalar(100), x = _b.x, y = _b.y;
        return {
            width: Math.abs(size.x) + 'px',
            height: Math.abs(size.y) + 'px',
            left: left + 'px',
            top: top + 'px',
            transform: "translate(".concat(-x, "%, ").concat(-y, "%) rotate(").concat(angle, "deg)"),
            transformOrigin: "".concat(x, "% ").concat(y, "%")
        };
    };
    Control.prototype.getAttributes = function () {
        var defaultAttributes = _super.prototype.getAttributes.call(this);
        return __assign(__assign({}, defaultAttributes), { 'data-control': true, 'data-shape': this.shape.get('id') });
    };
    Control.prototype.onPointerStart = function (e) { };
    Control.prototype.onPointerMove = function (e) { };
    Control.prototype.onPointerEnd = function (e) { };
    return Control;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



/***/ }),

/***/ "./src/interactive/controls/gradient-control.ts":
/*!******************************************************!*\
  !*** ./src/interactive/controls/gradient-control.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GradientControl: () => (/* binding */ GradientControl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/interactive/index.ts");
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

var GradientControl = /** @class */ (function (_super) {
    __extends(GradientControl, _super);
    function GradientControl(params) {
        var _this = _super.call(this) || this;
        _this.init(params);
        _this.addClass('grafik-gradient-control');
        return _this;
    }
    return GradientControl;
}(___WEBPACK_IMPORTED_MODULE_0__.Control));



/***/ }),

/***/ "./src/interactive/controls/index.ts":
/*!*******************************************!*\
  !*** ./src/interactive/controls/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GradientControl: () => (/* reexport safe */ _gradient_control__WEBPACK_IMPORTED_MODULE_3__.GradientControl),
/* harmony export */   PathControl: () => (/* reexport safe */ _path_control__WEBPACK_IMPORTED_MODULE_1__.PathControl),
/* harmony export */   TextControl: () => (/* reexport safe */ _text_control__WEBPACK_IMPORTED_MODULE_2__.TextControl),
/* harmony export */   TransformControl: () => (/* reexport safe */ _transform_control__WEBPACK_IMPORTED_MODULE_0__.TransformControl)
/* harmony export */ });
/* harmony import */ var _transform_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform-control */ "./src/interactive/controls/transform-control.ts");
/* harmony import */ var _path_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-control */ "./src/interactive/controls/path-control.ts");
/* harmony import */ var _text_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-control */ "./src/interactive/controls/text-control.ts");
/* harmony import */ var _gradient_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gradient-control */ "./src/interactive/controls/gradient-control.ts");






/***/ }),

/***/ "./src/interactive/controls/path-control.ts":
/*!**************************************************!*\
  !*** ./src/interactive/controls/path-control.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathControl: () => (/* binding */ PathControl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/interactive/index.ts");
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
    function PathControl(params) {
        var _this = _super.call(this) || this;
        _this.init(params);
        _this.addClass('grafik-path-control');
        return _this;
    }
    PathControl.prototype.setNodes = function () {
        return this;
    };
    return PathControl;
}(___WEBPACK_IMPORTED_MODULE_0__.Control));



/***/ }),

/***/ "./src/interactive/controls/text-control.ts":
/*!**************************************************!*\
  !*** ./src/interactive/controls/text-control.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextControl: () => (/* binding */ TextControl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/interactive/index.ts");
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

var TextControl = /** @class */ (function (_super) {
    __extends(TextControl, _super);
    function TextControl(params) {
        var _this = _super.call(this) || this;
        _this.init(params);
        _this.addClass('grafik-text-control');
        return _this;
    }
    return TextControl;
}(___WEBPACK_IMPORTED_MODULE_0__.Control));



/***/ }),

/***/ "./src/interactive/controls/transform-control.ts":
/*!*******************************************************!*\
  !*** ./src/interactive/controls/transform-control.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformControl: () => (/* binding */ TransformControl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/interactive/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../maths */ "./src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./src/utils/index.ts");
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
    function TransformControl(params) {
        var _this = _super.call(this) || this;
        _this._isDragging = false;
        _this._startVector = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point();
        _this.init(params);
        _this.addClass('grafik-transform-control');
        return _this;
    }
    TransformControl.prototype.setNodes = function () {
        var control = this;
        var shape = control.shape;
        // Create control nodes.
        var tl = new ___WEBPACK_IMPORTED_MODULE_0__.ScaleControlNode({
            name: 'tl',
            axis: '',
            x: 0,
            y: 0
        });
        var tc = new ___WEBPACK_IMPORTED_MODULE_0__.ScaleControlNode({
            name: 'tc',
            axis: 'y',
            x: 0.5,
            y: 0
        });
        var tr = new ___WEBPACK_IMPORTED_MODULE_0__.ScaleControlNode({
            name: 'tr',
            axis: '',
            x: 1,
            y: 0
        });
        var ml = new ___WEBPACK_IMPORTED_MODULE_0__.ScaleControlNode({
            name: 'ml',
            axis: 'x',
            x: 0,
            y: 0.5
        });
        var mr = new ___WEBPACK_IMPORTED_MODULE_0__.ScaleControlNode({
            name: 'mr',
            axis: 'x',
            x: 1,
            y: 0.5
        });
        var bl = new ___WEBPACK_IMPORTED_MODULE_0__.ScaleControlNode({
            name: 'bl',
            axis: '',
            x: 0,
            y: 1
        });
        var bc = new ___WEBPACK_IMPORTED_MODULE_0__.ScaleControlNode({
            name: 'bc',
            axis: 'y',
            x: 0.5,
            y: 1
        });
        var br = new ___WEBPACK_IMPORTED_MODULE_0__.ScaleControlNode({
            name: 'br',
            axis: '',
            x: 1,
            y: 1
        });
        var a = new ___WEBPACK_IMPORTED_MODULE_0__.AngleControlNode({
            name: 'a',
            getPosition: function () {
                var x = control.getSize().x;
                var dist = 20;
                return new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(x + dist, -dist);
            }
        });
        var o = new ___WEBPACK_IMPORTED_MODULE_0__.OriginControlNode({
            name: 'o',
            getPosition: function () {
                var size = control.getSize();
                var _a = shape.get('origin'), x = _a.x, y = _a.y;
                return new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(size.x * x, size.y * y);
            }
        });
        this.add([tl, tc, tr, ml, mr, bl, bc, br, a, o]);
        return this;
    };
    TransformControl.prototype.onPointerStart = function (e) {
        var shape = this.shape;
        var canvas = shape.get('canvas');
        var _a = shape.getWorldMatrix().toOptions(), left = _a.left, top = _a.top;
        this._isDragging = true;
        this._startVector.subtractPoints(canvas.getPointer(e), new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(left, top));
    };
    TransformControl.prototype.onPointerMove = function (e) {
        if (!this._isDragging) {
            return;
        }
        var shape = this.shape;
        var canvas = shape.get('canvas');
        var vpt = shape.parent.isCanvas
            ? canvas.get('viewportMatrix').clone()
            : shape.parent.getWorldMatrix();
        var move = canvas.getPointer(e).subtract(this._startVector).transform(vpt.invert());
        shape.set({
            left: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(move.x),
            top: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(move.y)
        });
    };
    TransformControl.prototype.onPointerEnd = function (e) {
        if (this._isDragging) {
            var _a = this.shape, left = _a.left, top_1 = _a.top;
            this.shape.trigger('updated', { left: left, top: top_1 }, this.shape);
            if (this.shape.canvas) {
                this.shape.canvas.trigger('shapes:updated', { left: left, top: top_1 }, this.shape);
            }
        }
        this._isDragging = false;
    };
    return TransformControl;
}(___WEBPACK_IMPORTED_MODULE_0__.Control));



/***/ }),

/***/ "./src/interactive/index.ts":
/*!**********************************!*\
  !*** ./src/interactive/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleControlNode: () => (/* reexport safe */ _control_nodes__WEBPACK_IMPORTED_MODULE_4__.AngleControlNode),
/* harmony export */   Control: () => (/* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_1__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _control_node__WEBPACK_IMPORTED_MODULE_2__.ControlNode),
/* harmony export */   GradientControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_3__.GradientControl),
/* harmony export */   OriginControlNode: () => (/* reexport safe */ _control_nodes__WEBPACK_IMPORTED_MODULE_4__.OriginControlNode),
/* harmony export */   PathControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_3__.PathControl),
/* harmony export */   ScaleControlNode: () => (/* reexport safe */ _control_nodes__WEBPACK_IMPORTED_MODULE_4__.ScaleControlNode),
/* harmony export */   Selector: () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_0__.Selector),
/* harmony export */   TextControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_3__.TextControl),
/* harmony export */   TransformControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_3__.TransformControl)
/* harmony export */ });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector */ "./src/interactive/selector.ts");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control */ "./src/interactive/control.ts");
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-node */ "./src/interactive/control-node.ts");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./src/interactive/controls/index.ts");
/* harmony import */ var _control_nodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-nodes */ "./src/interactive/control-nodes/index.ts");







/***/ }),

/***/ "./src/interactive/selector.ts":
/*!*************************************!*\
  !*** ./src/interactive/selector.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Selector: () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./src/element.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
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


var _min = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point();
var _max = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point();
var _size = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point();
var Selector = /** @class */ (function (_super) {
    __extends(Selector, _super);
    function Selector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'div';
        _this.className = 'grafik-selector';
        _this.bBox = new _maths__WEBPACK_IMPORTED_MODULE_1__.BBox();
        return _this;
    }
    Selector.prototype.getAttributes = function () {
        var defaultAttributes = _super.prototype.getAttributes.call(this);
        return __assign(__assign({}, defaultAttributes), { 'data-selector': true });
    };
    Selector.prototype.getStyle = function () {
        var _a = this.bBox, min = _a.min, max = _a.max;
        _min.minPoints(min, max);
        _max.maxPoints(min, max);
        _size.subtractPoints(_max, _min);
        return {
            left: _min.x + 'px',
            top: _min.y + 'px',
            width: _size.x + 'px',
            height: _size.y + 'px'
        };
    };
    return Selector;
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element));



/***/ }),

/***/ "./src/maths/bbox.ts":
/*!***************************!*\
  !*** ./src/maths/bbox.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: () => (/* binding */ BBox)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./src/maths/index.ts");

var BBox = /** @class */ (function () {
    function BBox(min, max) {
        if (min === void 0) { min = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        if (max === void 0) { max = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        this.min = min;
        this.max = max;
    }
    BBox.prototype.fromSizeAndOrigin = function (size, origin) {
        if (origin === void 0) { origin = new ___WEBPACK_IMPORTED_MODULE_0__.Point(0.5, 0.5); }
        var mByOrigin = size.clone().multiply(origin).multiplyScalar(-1);
        this.min.copy(mByOrigin);
        this.max.copy(size.clone().add(mByOrigin));
        return this;
    };
    BBox.prototype.fromPoints = function (points) {
        if (!points.length) {
            return this;
        }
        this.flip();
        for (var i = 0; i < points.length; i++) {
            this.expandByPoint(points[i]);
        }
        return this;
    };
    BBox.prototype.expandByPoint = function (point) {
        this.min.min(point);
        this.max.max(point);
        return this;
    };
    BBox.prototype.getSize = function () {
        return new ___WEBPACK_IMPORTED_MODULE_0__.Point().subtractPoints(this.max, this.min);
    };
    BBox.prototype.getOrigin = function () {
        if (this.isEmpty()) {
            return new ___WEBPACK_IMPORTED_MODULE_0__.Point(0.5, 0.5);
        }
        return new ___WEBPACK_IMPORTED_MODULE_0__.Point().subtract(this.min).divide(this.getSize());
    };
    BBox.prototype.getLineEdges = function (matrix) {
        var minX = this.min.x;
        var minY = this.min.y;
        var maxX = this.max.x;
        var maxY = this.max.y;
        var tl = new ___WEBPACK_IMPORTED_MODULE_0__.Point(minX, maxY);
        var tr = new ___WEBPACK_IMPORTED_MODULE_0__.Point(maxX, maxY);
        var bl = new ___WEBPACK_IMPORTED_MODULE_0__.Point(minX, minY);
        var br = new ___WEBPACK_IMPORTED_MODULE_0__.Point(maxX, minY);
        if (matrix) {
            tl = tl.transform(matrix);
            tr = tr.transform(matrix);
            bl = bl.transform(matrix);
            br = br.transform(matrix);
        }
        return [tl, tr, br, bl];
    };
    BBox.prototype.toPolygon = function (matrix) {
        var _a = this.getLineEdges(matrix), tl = _a[0], tr = _a[1], br = _a[2], bl = _a[3];
        return new ___WEBPACK_IMPORTED_MODULE_0__.CurvePath([
            new ___WEBPACK_IMPORTED_MODULE_0__.MoveCurve(tl),
            new ___WEBPACK_IMPORTED_MODULE_0__.LineCurve(tl, tr),
            new ___WEBPACK_IMPORTED_MODULE_0__.LineCurve(tr, br),
            new ___WEBPACK_IMPORTED_MODULE_0__.LineCurve(br, bl),
            new ___WEBPACK_IMPORTED_MODULE_0__.LineCurve(bl, tl)
        ]);
    };
    BBox.prototype.contains = function (point) {
        return (point.x >= this.min.x &&
            point.x <= this.max.x &&
            point.y >= this.min.y &&
            point.y <= this.max.y);
    };
    BBox.prototype.intersects = function (bBox) {
        return (bBox.max.x >= this.min.x &&
            bBox.min.x <= this.max.x &&
            bBox.max.y >= this.min.y &&
            bBox.min.y <= this.max.y);
    };
    BBox.prototype.transform = function (matrix) {
        var tx = matrix.tx, ty = matrix.ty;
        var edges = this.getLineEdges(matrix.clone().translate(0, 0));
        return this.fromPoints(edges).translate(tx, ty);
    };
    BBox.prototype.translate = function (x, y) {
        var point = new ___WEBPACK_IMPORTED_MODULE_0__.Point(x, y);
        this.min.add(point);
        this.max.add(point);
        return this;
    };
    BBox.prototype.reset = function () {
        this.min.set(0, 0);
        this.max.set(0, 0);
        return this;
    };
    BBox.prototype.flip = function () {
        this.min.set(Infinity, Infinity);
        this.max.set(-Infinity, -Infinity);
        return this;
    };
    BBox.prototype.isEqual = function (bBox) {
        return this.min.isEqual(bBox.min) && this.max.isEqual(bBox.max);
    };
    BBox.prototype.isEmpty = function () {
        return this.min.isEqual(this.max);
    };
    BBox.prototype.intersect = function (bBox) {
        this.min.max(bBox.min);
        this.max.min(bBox.max);
        return this;
    };
    BBox.prototype.union = function (bBox) {
        this.min.min(bBox.min);
        this.max.max(bBox.max);
        return this;
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

/***/ "./src/maths/color.ts":
/*!****************************!*\
  !*** ./src/maths/color.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color)
/* harmony export */ });
var Color = /** @class */ (function () {
    function Color(color) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1;
        if (Color.isColorName(color)) {
            // @ts-ignore
            this.fromColorName(color);
        }
        else if (Color.isHEX(color)) {
            // @ts-ignore
            this.fromHEX(color);
        }
        else if (Color.isRGB(color)) {
            // @ts-ignore
            this.fromRGB(color);
        }
        else if (Color.isHSL(color)) {
            // @ts-ignore
            this.fromHSL(color);
        }
        else if (Array.isArray(color)) {
            this.fromArray(color);
        }
        else {
            // @ts-ignore
            this.fromObject(color);
        }
    }
    Color.prototype.fromColorName = function (color) {
        this.fromHEX(Color.colorNameMap[color]);
        return this;
    };
    Color.prototype.fromHEX = function (color) {
        var match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (match) {
            this.r = parseInt(match[1], 16);
            this.g = parseInt(match[2], 16);
            this.b = parseInt(match[3], 16);
            this.a = typeof match[4] !== 'undefined' ? parseFloat(match[4]) : 1;
        }
        return this;
    };
    Color.prototype.fromRGB = function (color) {
        var match = color.match(/^rgba?\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i);
        if (match) {
            this.r = parseInt(match[1], 10);
            this.g = parseInt(match[2], 10);
            this.b = parseInt(match[3], 10);
            this.a = typeof match[4] !== 'undefined' ? parseFloat(match[4]) : 1;
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
        r = r.length === 1 ? '0' + r : r;
        g = g.length === 1 ? '0' + g : g;
        b = b.length === 1 ? '0' + b : b;
        return '#' + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
    };
    Color.prototype.toHEXA = function () {
        // @ts-ignore
        var a = parseInt(this.a * 255).toString(16);
        a = a.length === 1 ? '0' + a : a;
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
        return this.fromObject(color);
    };
    Color.prototype.clone = function () {
        return new Color(this);
    };
    Color.isColor = function (value) {
        return (Color.isHEX(value) ||
            Color.isRGB(value) ||
            Color.isHSL(value) ||
            Color.isColorName(value));
    };
    Color.isColorName = function (value) {
        return Color.isHEX(Color.colorNameMap[value]);
    };
    Color.isHEX = function (value) {
        // There was a bug: isHEX test below passed both 3, and 6-digits numbers too.
        // So we first check if it is a string at all.
        if (typeof value !== 'string') {
            return false;
        }
        var isHex = /^(#?)([a-f0-9]{3}){1,2}$/i.test(value);
        var isHexa = /^(#?)([a-f0-9]{8})$/i.test(value);
        return isHex || isHexa;
    };
    Color.isRGB = function (value) {
        var isRgb = /^(rgb)[(]\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*[)]$/.test(value);
        var isRgba = /^(rgba)[(]\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*[)]$/.test(value);
        return isRgb || isRgba;
    };
    Color.isHSL = function (value) {
        return false;
    };
    Color.colorNameMap = {
        aliceblue: '#F0F8FF',
        antiquewhite: '#FAEBD7',
        aqua: '#00FFFF',
        aquamarine: '#7FFFD4',
        azure: '#F0FFFF',
        beige: '#F5F5DC',
        bisque: '#FFE4C4',
        black: '#000000',
        blanchedalmond: '#FFEBCD',
        blue: '#0000FF',
        blueviolet: '#8A2BE2',
        brown: '#A52A2A',
        burlywood: '#DEB887',
        cadetblue: '#5F9EA0',
        chartreuse: '#7FFF00',
        chocolate: '#D2691E',
        coral: '#FF7F50',
        cornflowerblue: '#6495ED',
        cornsilk: '#FFF8DC',
        crimson: '#DC143C',
        cyan: '#00FFFF',
        darkblue: '#00008B',
        darkcyan: '#008B8B',
        darkgoldenrod: '#B8860B',
        darkgray: '#A9A9A9',
        darkgrey: '#A9A9A9',
        darkgreen: '#006400',
        darkkhaki: '#BDB76B',
        darkmagenta: '#8B008B',
        darkolivegreen: '#556B2F',
        darkorange: '#FF8C00',
        darkorchid: '#9932CC',
        darkred: '#8B0000',
        darksalmon: '#E9967A',
        darkseagreen: '#8FBC8F',
        darkslateblue: '#483D8B',
        darkslategray: '#2F4F4F',
        darkslategrey: '#2F4F4F',
        darkturquoise: '#00CED1',
        darkviolet: '#9400D3',
        deeppink: '#FF1493',
        deepskyblue: '#00BFFF',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1E90FF',
        firebrick: '#B22222',
        floralwhite: '#FFFAF0',
        forestgreen: '#228B22',
        fuchsia: '#FF00FF',
        gainsboro: '#DCDCDC',
        ghostwhite: '#F8F8FF',
        gold: '#FFD700',
        goldenrod: '#DAA520',
        gray: '#808080',
        grey: '#808080',
        green: '#008000',
        greenyellow: '#ADFF2F',
        honeydew: '#F0FFF0',
        hotpink: '#FF69B4',
        indianred: '#CD5C5C',
        indigo: '#4B0082',
        ivory: '#FFFFF0',
        khaki: '#F0E68C',
        lavender: '#E6E6FA',
        lavenderblush: '#FFF0F5',
        lawngreen: '#7CFC00',
        lemonchiffon: '#FFFACD',
        lightblue: '#ADD8E6',
        lightcoral: '#F08080',
        lightcyan: '#E0FFFF',
        lightgoldenrodyellow: '#FAFAD2',
        lightgray: '#D3D3D3',
        lightgrey: '#D3D3D3',
        lightgreen: '#90EE90',
        lightpink: '#FFB6C1',
        lightsalmon: '#FFA07A',
        lightseagreen: '#20B2AA',
        lightskyblue: '#87CEFA',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#B0C4DE',
        lightyellow: '#FFFFE0',
        lime: '#00FF00',
        limegreen: '#32CD32',
        linen: '#FAF0E6',
        magenta: '#FF00FF',
        maroon: '#800000',
        mediumaquamarine: '#66CDAA',
        mediumblue: '#0000CD',
        mediumorchid: '#BA55D3',
        mediumpurple: '#9370DB',
        mediumseagreen: '#3CB371',
        mediumslateblue: '#7B68EE',
        mediumspringgreen: '#00FA9A',
        mediumturquoise: '#48D1CC',
        mediumvioletred: '#C71585',
        midnightblue: '#191970',
        mintcream: '#F5FFFA',
        mistyrose: '#FFE4E1',
        moccasin: '#FFE4B5',
        navajowhite: '#FFDEAD',
        navy: '#000080',
        oldlace: '#FDF5E6',
        olive: '#808000',
        olivedrab: '#6B8E23',
        orange: '#FFA500',
        orangered: '#FF4500',
        orchid: '#DA70D6',
        palegoldenrod: '#EEE8AA',
        palegreen: '#98FB98',
        paleturquoise: '#AFEEEE',
        palevioletred: '#DB7093',
        papayawhip: '#FFEFD5',
        peachpuff: '#FFDAB9',
        peru: '#CD853F',
        pink: '#FFC0CB',
        plum: '#DDA0DD',
        powderblue: '#B0E0E6',
        purple: '#800080',
        rebeccapurple: '#663399',
        red: '#FF0000',
        rosybrown: '#BC8F8F',
        royalblue: '#4169E1',
        saddlebrown: '#8B4513',
        salmon: '#FA8072',
        sandybrown: '#F4A460',
        seagreen: '#2E8B57',
        seashell: '#FFF5EE',
        sienna: '#A0522D',
        silver: '#C0C0C0',
        skyblue: '#87CEEB',
        slateblue: '#6A5ACD',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#FFFAFA',
        springgreen: '#00FF7F',
        steelblue: '#4682B4',
        tan: '#D2B48C',
        teal: '#008080',
        thistle: '#D8BFD8',
        tomato: '#FF6347',
        turquoise: '#40E0D0',
        violet: '#EE82EE',
        wheat: '#F5DEB3',
        white: '#FFFFFF',
        whitesmoke: '#F5F5F5',
        yellow: '#FFFF00',
        yellowgreen: '#9ACD32',
        none: '#00000000',
        transparent: '#00000000'
    };
    return Color;
}());



/***/ }),

/***/ "./src/maths/curve-path.ts":
/*!*********************************!*\
  !*** ./src/maths/curve-path.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurvePath: () => (/* binding */ CurvePath)
/* harmony export */ });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/maths/point.ts");
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbox */ "./src/maths/bbox.ts");
/* harmony import */ var _curves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curves */ "./src/maths/curves/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.ts");




var CURVES = {
    M: _curves__WEBPACK_IMPORTED_MODULE_2__.MoveCurve,
    L: _curves__WEBPACK_IMPORTED_MODULE_2__.LineCurve,
    V: _curves__WEBPACK_IMPORTED_MODULE_2__.VerticalLineCurve,
    H: _curves__WEBPACK_IMPORTED_MODULE_2__.HorizontalLineCurve,
    Q: _curves__WEBPACK_IMPORTED_MODULE_2__.QuadraticBezierCurve,
    C: _curves__WEBPACK_IMPORTED_MODULE_2__.CubicBezierCurve,
    T: _curves__WEBPACK_IMPORTED_MODULE_2__.SmoothQuadraticBezierCurve,
    S: _curves__WEBPACK_IMPORTED_MODULE_2__.SmoothCubicBezierCurve,
    A: _curves__WEBPACK_IMPORTED_MODULE_2__.ArcCurve,
    Z: _curves__WEBPACK_IMPORTED_MODULE_2__.CloseCurve
};
var _axis = new _point__WEBPACK_IMPORTED_MODULE_0__.Point();
// Function to project a polygon onto an axis. Thanks ChatGPT! :-)
function _project(points, axis) {
    var min = Infinity, max = -Infinity, i, point, dot;
    for (i = 0; i < points.length; i++) {
        point = points[i];
        dot = point.dot(axis);
        min = Math.min(min, dot);
        max = Math.max(max, dot);
    }
    return { min: min, max: max };
}
// Function to check if an edge separates two polygons. Thanks ChatGPT! :-)
function _separate(points1, points2, axis) {
    var project1 = _project(points1, axis);
    var project2 = _project(points2, axis);
    return project1.max < project2.min || project2.max < project1.min;
}
var CurvePath = /** @class */ (function () {
    function CurvePath(curves) {
        this._curves = [];
        this._currentCommand = '';
        this._currentPoint = new _point__WEBPACK_IMPORTED_MODULE_0__.Point();
        this._currentControlPoint = new _point__WEBPACK_IMPORTED_MODULE_0__.Point();
        this._bBox = new _bbox__WEBPACK_IMPORTED_MODULE_1__.BBox();
        if (curves) {
            this.set(curves);
        }
    }
    Object.defineProperty(CurvePath.prototype, "length", {
        get: function () {
            return this._curves.length;
        },
        enumerable: false,
        configurable: true
    });
    CurvePath.prototype.at = function (index) {
        return this._curves[index];
    };
    CurvePath.prototype.add = function (curves) {
        var _a;
        curves = Array.isArray(curves) ? curves : [curves];
        (_a = this._curves).push.apply(_a, curves);
        return this;
    };
    CurvePath.prototype.remove = function (curves) {
        curves = Array.isArray(curves) ? curves : [curves];
        this._curves = this._curves.filter(function (c) { return !curves.includes(c); });
        return this;
    };
    CurvePath.prototype.set = function (curves) {
        this._curves = [];
        return this.add(curves);
    };
    CurvePath.prototype.moveTo = function (x, y) {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.MoveCurve(new _point__WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this._currentPoint.set(x, y);
        this._currentCommand = 'M';
        return this.add(curve);
    };
    CurvePath.prototype.lineTo = function (x, y) {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.LineCurve(this._currentPoint.clone(), new _point__WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this._currentPoint.set(x, y);
        this._currentCommand = 'L';
        return this.add(curve);
    };
    CurvePath.prototype.horizontalLineTo = function (x) {
        var cp = this._currentPoint.clone();
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.HorizontalLineCurve(cp, new _point__WEBPACK_IMPORTED_MODULE_0__.Point(x, cp.y));
        this._currentPoint.setX(x);
        this._currentCommand = 'H';
        return this.add(curve);
    };
    CurvePath.prototype.verticalLineTo = function (y) {
        var cp = this._currentPoint.clone();
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.VerticalLineCurve(cp, new _point__WEBPACK_IMPORTED_MODULE_0__.Point(cp.x, y));
        this._currentPoint.setY(y);
        this._currentCommand = 'V';
        return this.add(curve);
    };
    CurvePath.prototype.quadraticCurveTo = function (cx, cy, x, y) {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.QuadraticBezierCurve(this._currentPoint.clone(), new _point__WEBPACK_IMPORTED_MODULE_0__.Point(cx, cy), new _point__WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this._currentPoint.set(x, y);
        this._currentControlPoint.set(cx, cy);
        this._currentCommand = 'Q';
        return this.add(curve);
    };
    CurvePath.prototype.smoothQuadraticCurveTo = function (x, y) {
        if (this._currentCommand !== 'T' && this._currentCommand !== 'Q') {
            console.warn('The previous method must be an other smoothQuadraticCurveTo(), or a quadraticCurveTo().');
        }
        var cPoint = this._currentPoint
            .clone()
            .multiplyScalar(2)
            .subtract(this._currentControlPoint);
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.SmoothQuadraticBezierCurve(this._currentPoint.clone(), cPoint, new _point__WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this._currentPoint.set(x, y);
        this._currentControlPoint.copy(cPoint);
        this._currentCommand = 'T';
        return this.add(curve);
    };
    CurvePath.prototype.cubicCurveTo = function (c1x, c1y, c2x, c2y, x, y) {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.CubicBezierCurve(this._currentPoint.clone(), new _point__WEBPACK_IMPORTED_MODULE_0__.Point(c1x, c1y), new _point__WEBPACK_IMPORTED_MODULE_0__.Point(c2x, c2y), new _point__WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this._currentPoint.set(x, y);
        this._currentControlPoint.set(c2x, c2y);
        this._currentCommand = 'C';
        return this.add(curve);
    };
    CurvePath.prototype.smoothCubicCurveTo = function (cx, cy, x, y) {
        if (this._currentCommand !== 'S' && this._currentCommand !== 'C') {
            console.warn('The previous method must be an other smoothCubicCurveTo(), or a cubicCurveTo().');
        }
        var cPoint = this._currentPoint
            .clone()
            .multiplyScalar(2)
            .subtract(this._currentControlPoint);
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.SmoothCubicBezierCurve(this._currentPoint.clone(), cPoint, new _point__WEBPACK_IMPORTED_MODULE_0__.Point(cx, cy), new _point__WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this._currentPoint.set(x, y);
        this._currentControlPoint.copy(cPoint);
        this._currentCommand = 'S';
        return this;
    };
    CurvePath.prototype.arcTo = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.ArcCurve(this._currentPoint.clone(), rx, ry, xAxisRotation, largeArcFlag, sweepFlag, new _point__WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this._currentPoint.set(x, y);
        this._currentCommand = 'A';
        return this.add(curve);
    };
    CurvePath.prototype.closePath = function () {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_2__.CloseCurve();
        this._currentCommand = 'Z';
        return this.add(curve);
    };
    CurvePath.prototype.fromString = function (string) {
        var curves = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.parsePath)(string).map(function (curve, i, array) {
            var command = (curve[0] || '').toUpperCase();
            var Curve = CURVES[command];
            return new Curve().fromArray(curve, i, array);
        });
        return this.set(curves);
    };
    CurvePath.prototype.toString = function () {
        // @ts-ignore
        return this._curves.map(function (curve) { return curve.toString(' '); }).join(' ');
    };
    // Parses points attribute of polyline, or polygon.
    CurvePath.prototype.fromNumbers = function (numbers) {
        // @ts-ignore
        var nums = numbers
            .replace(/\,\s?/g, ' ')
            .split(' ')
            .map(function (n) { return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toFixed)(n); });
        var curves = [];
        for (var i = 0; i < nums.length; i += 2) {
            curves.push(new _curves__WEBPACK_IMPORTED_MODULE_2__.LineCurve(new _point__WEBPACK_IMPORTED_MODULE_0__.Point(nums[i], nums[i + 1]), new _point__WEBPACK_IMPORTED_MODULE_0__.Point(nums[(i + 2) % nums.length], nums[(i + 3) % nums.length])));
        }
        return this.set(curves);
    };
    // Makes points attribute for polyline, or polygon.
    CurvePath.prototype.toNumbers = function () {
        return this.mapCurves(function (curve) {
            if (curve instanceof _curves__WEBPACK_IMPORTED_MODULE_2__.LineCurve) {
                return curve.p0.toString();
            }
        })
            .filter(function (str) { return !!str; })
            .join(' ');
    };
    CurvePath.prototype.toPoints = function (divisions) {
        var pp; // Previous point.
        return this.mapCurves(function (curve) { return curve.getPoints(divisions); })
            .flat()
            .filter(function (p, i, array) {
            pp = array[i - 1];
            if (!pp) {
                return true;
            }
            return !p.isEqual(pp);
        });
    };
    CurvePath.prototype.updateBBox = function () {
        var _this = this;
        if (!this.length) {
            return this;
        }
        this._bBox.flip();
        return this.eachCurve(function (curve) {
            _this._bBox.union(curve.updateBBox().getBBox());
        });
    };
    CurvePath.prototype.getBBox = function () {
        return this._bBox;
    };
    CurvePath.prototype.adjust = function () {
        var _a = this._bBox.min, x = _a.x, y = _a.y;
        this.eachCurve(function (curve) {
            curve.translate(-x, -y);
        });
        return this;
    };
    // Thanks ChatGPT to help implementing the raycasting algorithm! :-)
    CurvePath.prototype.containsPoint = function (point, divisions) {
        var x = point.x, y = point.y;
        var polygon = this.toPoints(divisions);
        var contains = false, intersects, i, j, xi, yi, xj, yj;
        for (i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            xi = polygon[i].x;
            yi = polygon[i].y;
            xj = polygon[j].x;
            yj = polygon[j].y;
            intersects = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
            if (intersects) {
                contains = !contains;
            }
        }
        return contains;
    };
    // Thanks ChatGPT to help implementing the Separating Axis Theorem (SAT) algorithm! :-)
    CurvePath.prototype.intersects = function (curvePath, divisions) {
        var points1 = this.toPoints(divisions);
        var points2 = curvePath.toPoints(divisions);
        var p1Length = points1.length;
        var p2Length = points2.length;
        var i, point, next, x, y;
        for (i = 0; i < p1Length; i++) {
            point = points1[i];
            next = points1[(i + 1) % p1Length];
            _axis.copy(next).subtract(point);
            x = _axis.x;
            y = _axis.y;
            if (_separate(points1, points2, _axis.set(-y, x))) {
                return false;
            }
        }
        for (i = 0; i < p2Length; i++) {
            point = points2[i];
            next = points2[(i + 1) % p2Length];
            _axis.copy(next).subtract(point);
            x = _axis.x;
            y = _axis.y;
            if (_separate(points1, points2, _axis.set(-y, x))) {
                return false;
            }
        }
        return true;
    };
    CurvePath.prototype.eachCurve = function (callback) {
        this._curves.forEach(callback);
        return this;
    };
    CurvePath.prototype.mapCurves = function (callback) {
        return this._curves.map(callback);
    };
    return CurvePath;
}());



/***/ }),

/***/ "./src/maths/curve.ts":
/*!****************************!*\
  !*** ./src/maths/curve.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Curve: () => (/* binding */ Curve)
/* harmony export */ });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/maths/point.ts");
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbox */ "./src/maths/bbox.ts");


var _point = new _point__WEBPACK_IMPORTED_MODULE_0__.Point();
var Curve = /** @class */ (function () {
    function Curve() {
        this.command = '';
        this._bBox = new _bbox__WEBPACK_IMPORTED_MODULE_1__.BBox();
    }
    Curve.prototype.getPoint = function (t) {
        console.warn('getPoint() must be implemented by subclass.');
        return new _point__WEBPACK_IMPORTED_MODULE_0__.Point();
    };
    Curve.prototype.getPoints = function (divisions) {
        if (divisions === void 0) { divisions = 10; }
        var points = [];
        for (var d = 0; d <= divisions; d++) {
            // @ts-ignore
            points.push(this.getPoint(d / divisions));
        }
        return points;
    };
    Curve.prototype.updateBBox = function () {
        this._bBox.fromPoints(this.getPoints());
        return this;
    };
    Curve.prototype.getBBox = function () {
        return this._bBox;
    };
    Curve.prototype.fromArray = function (curve, index, path) {
        var prevCurve = path[index - 1] || [];
        var prevLength = prevCurve.length;
        var length = curve.length;
        var isRelative = curve[0] === curve[0].toLowerCase();
        var prevCurveEndPoint = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(
        // @ts-ignore
        prevCurve[prevLength - 2], 
        // @ts-ignore
        prevCurve[prevLength - 1]);
        var point, i, p;
        // @ts-ignore
        if (this.p0) {
            if (this.command === 'M') {
                // @ts-ignore
                this.p0.set(curve[1], curve[2]);
            }
            else {
                // @ts-ignore
                this.p0.copy(prevCurveEndPoint);
            }
        }
        for (i = 0, p = 1; i < length - 1; i += 2, p++) {
            if ((point = this['p' + p])) {
                point.set(curve[i + 1], curve[i + 2]);
                if (isRelative) {
                    point.add(prevCurveEndPoint);
                }
            }
        }
        return this;
    };
    Curve.prototype.toString = function () {
        var points = [];
        var n = this.command === 'M' ? 0 : 1;
        while (this['p' + n]) {
            // @ts-ignore
            points.push(this['p' + n].toString());
            n++;
        }
        return this.command + ' ' + points.join(' ');
    };
    Curve.prototype.translate = function (x, y) {
        var n = 0;
        while (this['p' + n]) {
            this['p' + n].add(_point.set(x, y));
            n++;
        }
        return this;
    };
    return Curve;
}());



/***/ }),

/***/ "./src/maths/curves/arc-curve.ts":
/*!***************************************!*\
  !*** ./src/maths/curves/arc-curve.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcCurve: () => (/* binding */ ArcCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/maths/index.ts");
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

var ArcCurve = /** @class */ (function (_super) {
    __extends(ArcCurve, _super);
    function ArcCurve(p0, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, p1) {
        if (p0 === void 0) { p0 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        if (rx === void 0) { rx = 0; }
        if (ry === void 0) { ry = 0; }
        if (xAxisRotation === void 0) { xAxisRotation = 0; }
        if (largeArcFlag === void 0) { largeArcFlag = 0; }
        if (sweepFlag === void 0) { sweepFlag = 0; }
        if (p1 === void 0) { p1 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        var _this = _super.call(this) || this;
        _this.command = 'A';
        _this.p0 = p0;
        _this.p1 = p1;
        _this.rx = rx;
        _this.ry = ry;
        _this.xAxisRotation = xAxisRotation;
        _this.largeArcFlag = largeArcFlag;
        _this.sweepFlag = sweepFlag;
        return _this;
    }
    ArcCurve.prototype.getPoint = function (t) {
        return new ___WEBPACK_IMPORTED_MODULE_0__.Point();
    };
    ArcCurve.prototype.fromArray = function (curve, index, path) {
        var prevCurve = path[index - 1] || [];
        var prevLength = prevCurve.length;
        var length = curve.length;
        // @ts-ignore
        this.p0.set(prevCurve[prevLength - 2], prevCurve[prevLength - 1]);
        this.rx = curve[1];
        this.ry = curve[2] || 0;
        this.xAxisRotation = curve[3] || 0;
        this.largeArcFlag = curve[4] || 0;
        this.sweepFlag = curve[5] || 0;
        this.p1.set(curve[6] || 0, curve[7] || 0);
        return this;
    };
    ArcCurve.prototype.toString = function () {
        var _a = this, command = _a.command, rx = _a.rx, ry = _a.ry, xAxisRotation = _a.xAxisRotation, largeArcFlag = _a.largeArcFlag, sweepFlag = _a.sweepFlag, p1 = _a.p1;
        return "".concat(command, " ").concat(rx, " ").concat(ry, " ").concat(xAxisRotation, " ").concat(largeArcFlag, " ").concat(sweepFlag, " ").concat(p1.toString());
    };
    return ArcCurve;
}(___WEBPACK_IMPORTED_MODULE_0__.Curve));



/***/ }),

/***/ "./src/maths/curves/close-curve.ts":
/*!*****************************************!*\
  !*** ./src/maths/curves/close-curve.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseCurve: () => (/* binding */ CloseCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/maths/index.ts");
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

var CloseCurve = /** @class */ (function (_super) {
    __extends(CloseCurve, _super);
    function CloseCurve() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.command = 'Z';
        return _this;
    }
    CloseCurve.prototype.getPoints = function (divisions) {
        if (divisions === void 0) { divisions = 10; }
        return [];
    };
    return CloseCurve;
}(___WEBPACK_IMPORTED_MODULE_0__.Curve));



/***/ }),

/***/ "./src/maths/curves/cubic-bezier-curve.ts":
/*!************************************************!*\
  !*** ./src/maths/curves/cubic-bezier-curve.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CubicBezierCurve: () => (/* binding */ CubicBezierCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/maths/index.ts");
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
        if (p0 === void 0) { p0 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        if (p1 === void 0) { p1 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        if (p2 === void 0) { p2 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        if (p3 === void 0) { p3 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        var _this = _super.call(this) || this;
        _this.command = 'C';
        _this.p0 = p0;
        _this.p1 = p1;
        _this.p2 = p2;
        _this.p3 = p3;
        return _this;
    }
    CubicBezierCurve.prototype.getPoint = function (t) {
        return new ___WEBPACK_IMPORTED_MODULE_0__.Point(CubicBezierCurve.interpolation(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x), CubicBezierCurve.interpolation(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y));
    };
    CubicBezierCurve.interpolation = function (t, p0, p1, p2, p3) {
        var tn = 1 - t;
        return tn * tn * tn * p0 + 3 * tn * tn * t * p1 + 3.0 * tn * t * t * p2 + t * t * t * p3;
    };
    return CubicBezierCurve;
}(___WEBPACK_IMPORTED_MODULE_0__.Curve));



/***/ }),

/***/ "./src/maths/curves/horizontal-line-curve.ts":
/*!***************************************************!*\
  !*** ./src/maths/curves/horizontal-line-curve.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontalLineCurve: () => (/* binding */ HorizontalLineCurve)
/* harmony export */ });
/* harmony import */ var _line_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-curve */ "./src/maths/curves/line-curve.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../point */ "./src/maths/point.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./src/utils/index.ts");
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



var HorizontalLineCurve = /** @class */ (function (_super) {
    __extends(HorizontalLineCurve, _super);
    function HorizontalLineCurve() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.command = 'H';
        return _this;
    }
    HorizontalLineCurve.prototype.fromArray = function (curve, index, path) {
        var prevCurve = path[index - 1] || [];
        var prevLength = prevCurve.length;
        var isRelative = curve[0] === curve[0].toLowerCase();
        var prevCurveEndPoint = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(
        // @ts-ignore
        prevCurve[prevLength - 2], 
        // @ts-ignore
        prevCurve[prevLength - 1]);
        var x = 0;
        var y = 0;
        var xSet = false;
        var ySet = false;
        var _i = index, _curve, _prevCurve;
        // Walking through the path array backward, and pick up the first x, or y value.
        // And stops at the curve, that is not V, or H. So, the curve.length is not equals to 2.
        while (path[_i--].length === 2) {
            _curve = path[_i];
            _prevCurve = path[_i - 1];
            switch (_curve[0]) {
                case 'H':
                    if (!xSet) {
                        x = _curve[1];
                        xSet = true;
                    }
                    break;
                case 'V':
                    if (!ySet) {
                        y = _curve[1];
                        ySet = true;
                    }
                    break;
                default:
                    if (!xSet) {
                        // @ts-ignore
                        x = _curve[_curve.length - 2];
                        xSet = true;
                    }
                    if (!ySet) {
                        // @ts-ignore
                        y = _curve[_curve.length - 1];
                        ySet = true;
                    }
                    break;
            }
        }
        this.p0.set(x, y);
        this.p1.set(curve[1], y);
        if (isRelative) {
            this.p0.add(prevCurveEndPoint);
            this.p1.add(prevCurveEndPoint);
        }
        return this;
    };
    HorizontalLineCurve.prototype.toString = function () {
        return this.command + ' ' + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(this.p1.x);
    };
    return HorizontalLineCurve;
}(_line_curve__WEBPACK_IMPORTED_MODULE_0__.LineCurve));



/***/ }),

/***/ "./src/maths/curves/index.ts":
/*!***********************************!*\
  !*** ./src/maths/curves/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcCurve: () => (/* reexport safe */ _arc_curve__WEBPACK_IMPORTED_MODULE_4__.ArcCurve),
/* harmony export */   CloseCurve: () => (/* reexport safe */ _close_curve__WEBPACK_IMPORTED_MODULE_9__.CloseCurve),
/* harmony export */   CubicBezierCurve: () => (/* reexport safe */ _cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_6__.CubicBezierCurve),
/* harmony export */   HorizontalLineCurve: () => (/* reexport safe */ _horizontal_line_curve__WEBPACK_IMPORTED_MODULE_2__.HorizontalLineCurve),
/* harmony export */   LineCurve: () => (/* reexport safe */ _line_curve__WEBPACK_IMPORTED_MODULE_1__.LineCurve),
/* harmony export */   MoveCurve: () => (/* reexport safe */ _move_curve__WEBPACK_IMPORTED_MODULE_0__.MoveCurve),
/* harmony export */   QuadraticBezierCurve: () => (/* reexport safe */ _quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_5__.QuadraticBezierCurve),
/* harmony export */   SmoothCubicBezierCurve: () => (/* reexport safe */ _smooth_cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_8__.SmoothCubicBezierCurve),
/* harmony export */   SmoothQuadraticBezierCurve: () => (/* reexport safe */ _smooth_quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_7__.SmoothQuadraticBezierCurve),
/* harmony export */   VerticalLineCurve: () => (/* reexport safe */ _vertical_line_curve__WEBPACK_IMPORTED_MODULE_3__.VerticalLineCurve)
/* harmony export */ });
/* harmony import */ var _move_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move-curve */ "./src/maths/curves/move-curve.ts");
/* harmony import */ var _line_curve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-curve */ "./src/maths/curves/line-curve.ts");
/* harmony import */ var _horizontal_line_curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal-line-curve */ "./src/maths/curves/horizontal-line-curve.ts");
/* harmony import */ var _vertical_line_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vertical-line-curve */ "./src/maths/curves/vertical-line-curve.ts");
/* harmony import */ var _arc_curve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arc-curve */ "./src/maths/curves/arc-curve.ts");
/* harmony import */ var _quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quadratic-bezier-curve */ "./src/maths/curves/quadratic-bezier-curve.ts");
/* harmony import */ var _cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cubic-bezier-curve */ "./src/maths/curves/cubic-bezier-curve.ts");
/* harmony import */ var _smooth_quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smooth-quadratic-bezier-curve */ "./src/maths/curves/smooth-quadratic-bezier-curve.ts");
/* harmony import */ var _smooth_cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./smooth-cubic-bezier-curve */ "./src/maths/curves/smooth-cubic-bezier-curve.ts");
/* harmony import */ var _close_curve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./close-curve */ "./src/maths/curves/close-curve.ts");












/***/ }),

/***/ "./src/maths/curves/line-curve.ts":
/*!****************************************!*\
  !*** ./src/maths/curves/line-curve.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineCurve: () => (/* binding */ LineCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils */ "./src/utils/index.ts");
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
        if (p0 === void 0) { p0 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        if (p1 === void 0) { p1 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        var _this = _super.call(this) || this;
        _this.command = 'L';
        _this.p0 = p0;
        _this.p1 = p1;
        return _this;
    }
    LineCurve.prototype.getPoint = function (t) {
        t = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.clamp)(t, 0, 1);
        var point = this.p1.clone();
        if (t === 1) {
            return point;
        }
        else {
            point.subtract(this.p0).multiplyScalar(t).add(this.p0);
        }
        return point;
    };
    return LineCurve;
}(___WEBPACK_IMPORTED_MODULE_0__.Curve));



/***/ }),

/***/ "./src/maths/curves/move-curve.ts":
/*!****************************************!*\
  !*** ./src/maths/curves/move-curve.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoveCurve: () => (/* binding */ MoveCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/maths/index.ts");
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

var MoveCurve = /** @class */ (function (_super) {
    __extends(MoveCurve, _super);
    function MoveCurve(p0) {
        if (p0 === void 0) { p0 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        var _this = _super.call(this) || this;
        _this.command = 'M';
        _this.p0 = p0;
        return _this;
    }
    MoveCurve.prototype.getPoint = function (t) {
        return this.p0.clone();
    };
    MoveCurve.prototype.getPoints = function (divisions) {
        if (divisions === void 0) { divisions = 10; }
        return [this.getPoint(0)];
    };
    return MoveCurve;
}(___WEBPACK_IMPORTED_MODULE_0__.Curve));



/***/ }),

/***/ "./src/maths/curves/quadratic-bezier-curve.ts":
/*!****************************************************!*\
  !*** ./src/maths/curves/quadratic-bezier-curve.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuadraticBezierCurve: () => (/* binding */ QuadraticBezierCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./src/maths/index.ts");
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
        if (p0 === void 0) { p0 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        if (p1 === void 0) { p1 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        if (p2 === void 0) { p2 = new ___WEBPACK_IMPORTED_MODULE_0__.Point(); }
        var _this = _super.call(this) || this;
        _this.command = 'Q';
        _this.p0 = p0;
        _this.p1 = p1;
        _this.p2 = p2;
        return _this;
    }
    QuadraticBezierCurve.prototype.getPoint = function (t) {
        return new ___WEBPACK_IMPORTED_MODULE_0__.Point(QuadraticBezierCurve.interpolation(t, this.p0.x, this.p1.x, this.p2.x), QuadraticBezierCurve.interpolation(t, this.p0.y, this.p1.y, this.p2.y));
    };
    QuadraticBezierCurve.interpolation = function (t, p0, p1, p2) {
        var tn = 1 - t;
        return tn * tn * p0 + 2 * tn * t * p1 + t * t * p2;
    };
    return QuadraticBezierCurve;
}(___WEBPACK_IMPORTED_MODULE_0__.Curve));



/***/ }),

/***/ "./src/maths/curves/smooth-cubic-bezier-curve.ts":
/*!*******************************************************!*\
  !*** ./src/maths/curves/smooth-cubic-bezier-curve.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmoothCubicBezierCurve: () => (/* binding */ SmoothCubicBezierCurve)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier-curve */ "./src/maths/curves/cubic-bezier-curve.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../point */ "./src/maths/point.ts");
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


var SmoothCubicBezierCurve = /** @class */ (function (_super) {
    __extends(SmoothCubicBezierCurve, _super);
    function SmoothCubicBezierCurve() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.command = 'S';
        return _this;
    }
    SmoothCubicBezierCurve.prototype.fromArray = function (curve, index, path) {
        var prevCurve = path[index - 1] || [];
        var prevLength = prevCurve.length;
        var isRelative = curve[0] === curve[0].toLowerCase();
        var isCorSCurve = ['C', 'c', 'S', 's'].includes(prevCurve[0]);
        var prevCurveEndPoint = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(
        // @ts-ignore
        prevCurve[prevLength - 2], 
        // @ts-ignore
        prevCurve[prevLength - 1]);
        var prevCurveControlPoint = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(
        // @ts-ignore
        prevCurve[prevLength - 4], 
        // @ts-ignore
        prevCurve[prevLength - 3]);
        this.p0.copy(prevCurveEndPoint);
        if (isCorSCurve) {
            this.p1.copy(prevCurveEndPoint).multiplyScalar(2).subtract(prevCurveControlPoint);
        }
        else {
            console.warn('The previous command must be an other S, or C command.');
            this.p1.copy(prevCurveEndPoint);
        }
        this.p2.set(curve[1] || 0, curve[2] || 0);
        this.p3.set(curve[3] || 0, curve[4] || 0);
        if (isRelative) {
            for (var i = 0; i < 4; i++) {
                this['p' + i].add(prevCurveEndPoint);
            }
        }
        return this;
    };
    SmoothCubicBezierCurve.prototype.toString = function () {
        return this.command + ' ' + this.p2.toString() + ' ' + this.p3.toString();
    };
    return SmoothCubicBezierCurve;
}(_cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_0__.CubicBezierCurve));



/***/ }),

/***/ "./src/maths/curves/smooth-quadratic-bezier-curve.ts":
/*!***********************************************************!*\
  !*** ./src/maths/curves/smooth-quadratic-bezier-curve.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmoothQuadraticBezierCurve: () => (/* binding */ SmoothQuadraticBezierCurve)
/* harmony export */ });
/* harmony import */ var _quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quadratic-bezier-curve */ "./src/maths/curves/quadratic-bezier-curve.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../point */ "./src/maths/point.ts");
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


var SmoothQuadraticBezierCurve = /** @class */ (function (_super) {
    __extends(SmoothQuadraticBezierCurve, _super);
    function SmoothQuadraticBezierCurve() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.command = 'T';
        return _this;
    }
    SmoothQuadraticBezierCurve.prototype.fromArray = function (curve, index, path) {
        var prevCurve = path[index - 1] || [];
        var prevLength = prevCurve.length;
        var isRelative = curve[0] === curve[0].toLowerCase();
        var isQorTCurve = ['Q', 'q', 'T', 't'].includes(prevCurve[0]);
        var prevCurveEndPoint = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(
        // @ts-ignore
        prevCurve[prevLength - 2], 
        // @ts-ignore
        prevCurve[prevLength - 1]);
        var prevCurveControlPoint = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(
        // @ts-ignore
        prevCurve[prevLength - 4], 
        // @ts-ignore
        prevCurve[prevLength - 3]);
        this.p0.copy(prevCurveEndPoint);
        if (isQorTCurve) {
            this.p1.copy(prevCurveEndPoint).multiplyScalar(2).subtract(prevCurveControlPoint);
        }
        else {
            console.warn('The previous command must be an other T, or Q command.');
            this.p1.copy(prevCurveEndPoint);
        }
        this.p2.set(curve[1] || 0, curve[2] || 0);
        if (isRelative) {
            for (var i = 0; i < 4; i++) {
                this['p' + i].add(prevCurveEndPoint);
            }
        }
        return this;
    };
    SmoothQuadraticBezierCurve.prototype.toString = function () {
        return this.command + ' ' + this.p2.toString();
    };
    return SmoothQuadraticBezierCurve;
}(_quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_0__.QuadraticBezierCurve));



/***/ }),

/***/ "./src/maths/curves/vertical-line-curve.ts":
/*!*************************************************!*\
  !*** ./src/maths/curves/vertical-line-curve.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerticalLineCurve: () => (/* binding */ VerticalLineCurve)
/* harmony export */ });
/* harmony import */ var _line_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-curve */ "./src/maths/curves/line-curve.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../point */ "./src/maths/point.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./src/utils/index.ts");
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



var VerticalLineCurve = /** @class */ (function (_super) {
    __extends(VerticalLineCurve, _super);
    function VerticalLineCurve() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.command = 'V';
        return _this;
    }
    VerticalLineCurve.prototype.fromArray = function (curve, index, path) {
        var prevCurve = path[index - 1] || [];
        var prevLength = prevCurve.length;
        var isRelative = curve[0] === curve[0].toLowerCase();
        var prevCurveEndPoint = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(
        // @ts-ignore
        prevCurve[prevLength - 2], 
        // @ts-ignore
        prevCurve[prevLength - 1]);
        var x = 0;
        var y = 0;
        var xSet = false;
        var ySet = false;
        var _i = index, _curve, _prevCurve;
        // Walking through the path array backward, and pick up the first x, or y value.
        // And stops at the curve, that is not V, or H. So, the curve.length is not equals to 2.
        while (path[_i--].length === 2) {
            _curve = path[_i];
            _prevCurve = path[_i - 1];
            switch (_curve[0]) {
                case 'H':
                    if (!xSet) {
                        x = _curve[1];
                        xSet = true;
                    }
                    break;
                case 'V':
                    if (!ySet) {
                        y = _curve[1];
                        ySet = true;
                    }
                    break;
                default:
                    if (!xSet) {
                        // @ts-ignore
                        x = _curve[_curve.length - 2];
                        xSet = true;
                    }
                    if (!ySet) {
                        // @ts-ignore
                        y = _curve[_curve.length - 1];
                        ySet = true;
                    }
                    break;
            }
        }
        this.p0.set(x, y);
        this.p1.set(x, curve[1]);
        if (isRelative) {
            this.p0.add(prevCurveEndPoint);
            this.p1.add(prevCurveEndPoint);
        }
        return this;
    };
    VerticalLineCurve.prototype.toString = function () {
        return this.command + ' ' + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(this.p1.y);
    };
    return VerticalLineCurve;
}(_line_curve__WEBPACK_IMPORTED_MODULE_0__.LineCurve));



/***/ }),

/***/ "./src/maths/index.ts":
/*!****************************!*\
  !*** ./src/maths/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.ArcCurve),
/* harmony export */   BBox: () => (/* reexport safe */ _bbox__WEBPACK_IMPORTED_MODULE_0__.BBox),
/* harmony export */   CloseCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.CloseCurve),
/* harmony export */   Color: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.Color),
/* harmony export */   CubicBezierCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.CubicBezierCurve),
/* harmony export */   Curve: () => (/* reexport safe */ _curve__WEBPACK_IMPORTED_MODULE_2__.Curve),
/* harmony export */   CurvePath: () => (/* reexport safe */ _curve_path__WEBPACK_IMPORTED_MODULE_4__.CurvePath),
/* harmony export */   HorizontalLineCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.HorizontalLineCurve),
/* harmony export */   LineCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.LineCurve),
/* harmony export */   Matrix: () => (/* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_5__.Matrix),
/* harmony export */   MoveCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.MoveCurve),
/* harmony export */   Point: () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_6__.Point),
/* harmony export */   QuadraticBezierCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.QuadraticBezierCurve),
/* harmony export */   SmoothCubicBezierCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.SmoothCubicBezierCurve),
/* harmony export */   SmoothQuadraticBezierCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.SmoothQuadraticBezierCurve),
/* harmony export */   VerticalLineCurve: () => (/* reexport safe */ _curves__WEBPACK_IMPORTED_MODULE_3__.VerticalLineCurve)
/* harmony export */ });
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbox */ "./src/maths/bbox.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/maths/color.ts");
/* harmony import */ var _curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve */ "./src/maths/curve.ts");
/* harmony import */ var _curves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curves */ "./src/maths/curves/index.ts");
/* harmony import */ var _curve_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./curve-path */ "./src/maths/curve-path.ts");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matrix */ "./src/maths/matrix.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point */ "./src/maths/point.ts");









/***/ }),

/***/ "./src/maths/matrix.ts":
/*!*****************************!*\
  !*** ./src/maths/matrix.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix: () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.ts");

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
        var _a = this, a = _a.a, b = _a.b, c = _a.c, d = _a.d, tx = _a.tx, ty = _a.ty;
        var angle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.rad2Deg)(Math.atan2(b, a));
        var denom = Math.pow(a, 2) + Math.pow(b, 2);
        var scaleX = Math.sqrt(denom);
        var scaleY = (a * d - c * b) / scaleX;
        var skewX = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.rad2Deg)(Math.atan2(a * c + b * d, denom));
        return {
            left: tx,
            top: ty,
            angle: angle,
            scaleX: scaleX,
            scaleY: scaleY,
            skewX: skewX,
            skewY: 0
        };
    };
    Matrix.prototype.toCSS = function () {
        var array = this.toArray().join(', ');
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
    Matrix.prototype.invert = function () {
        var _a = this, a = _a.a, b = _a.b, c = _a.c, d = _a.d, tx = _a.tx, ty = _a.ty;
        var determinant = a * d - b * c;
        if (determinant === 0) {
            return this.fromArray([0, 0, 0, 0, 0, 0]);
        }
        return this.fromArray([
            d / determinant,
            -b / determinant,
            -c / determinant,
            a / determinant,
            (c * ty - d * tx) / determinant,
            (b * tx - a * ty) / determinant
        ]);
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

/***/ "./src/maths/point.ts":
/*!****************************!*\
  !*** ./src/maths/point.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Point: () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.ts");

var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.set(x, y);
    }
    Point.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    Point.prototype.setY = function (y) {
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
    Point.prototype.fromString = function (point, separator) {
        if (separator === void 0) { separator = ', '; }
        var array = point.split(separator).map(function (n) { return parseFloat(n); });
        this.x = array[0];
        this.y = array[1];
        return this;
    };
    Point.prototype.toString = function (separator) {
        if (separator === void 0) { separator = ' '; }
        var array = [this.x, this.y];
        return array.join(separator);
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
    Point.prototype.multiplyPoints = function (p1, p2) {
        this.x = p1.x * p2.x;
        this.y = p1.y * p2.y;
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
    Point.prototype.dividePoints = function (p1, p2) {
        this.x = p1.x / p2.x;
        this.y = p1.y / p2.y;
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
        this.y = x * sin + y * cos + center.y;
        return this;
    };
    Point.prototype.angleTo = function (point) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.rad2Deg)(Math.atan2(point.y - this.y, point.x - this.x));
    };
    Point.prototype.distanceTo = function (point) {
        var dx = this.x - point.x;
        var dy = this.y - point.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    };
    Point.prototype.dot = function (point) {
        return this.x * point.x + this.y * point.y;
    };
    Point.prototype.transform = function (matrix) {
        var _a = this, x = _a.x, y = _a.y;
        var a = matrix.a, b = matrix.b, c = matrix.c, d = matrix.d, tx = matrix.tx, ty = matrix.ty;
        this.x = a * x + c * y + tx;
        this.y = b * x + d * y + ty;
        return this;
    };
    Point.prototype.min = function (point) {
        this.x = Math.min(this.x, point.x);
        this.y = Math.min(this.y, point.y);
        return this;
    };
    Point.prototype.minPoints = function (p1, p2) {
        this.x = Math.min(p1.x, p2.x);
        this.y = Math.min(p1.y, p2.y);
        return this;
    };
    Point.prototype.max = function (point) {
        this.x = Math.max(this.x, point.x);
        this.y = Math.max(this.y, point.y);
        return this;
    };
    Point.prototype.maxPoints = function (p1, p2) {
        this.x = Math.max(p1.x, p2.x);
        this.y = Math.max(p1.y, p2.y);
        return this;
    };
    Point.prototype.abs = function () {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    };
    Point.prototype.clamp = function (min, max) {
        this.x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.x, min.x, max.x);
        this.y = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.y, min.y, max.y);
        return this;
    };
    Point.prototype.isEqual = function (point) {
        return this.x === point.x && this.y === point.y;
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

/***/ "./src/mixins/collection.ts":
/*!**********************************!*\
  !*** ./src/mixins/collection.ts ***!
  \**********************************/
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
            _this.children = [];
            return _this;
        }
        Object.defineProperty(Collection.prototype, "childrenLength", {
            get: function () {
                return this.children.length;
            },
            enumerable: false,
            configurable: true
        });
        Collection.prototype.setChildren = function (children, silent) {
            if (silent === void 0) { silent = false; }
            return this.reset().add(children, silent);
        };
        Collection.prototype.getChildren = function () {
            return this.children;
        };
        Collection.prototype.add = function (children, silent) {
            var _this = this;
            if (silent === void 0) { silent = false; }
            children = Array.isArray(children) ? children : [children];
            children.forEach(function (child) {
                if (!_this.children.includes(child)) {
                    _this.children.push(child);
                    child.set('parent', _this, true);
                }
            });
            if (!silent) {
                // @ts-ignore
                this.trigger('added', children);
            }
            return this;
        };
        Collection.prototype.remove = function (children, silent) {
            var _this = this;
            if (silent === void 0) { silent = false; }
            children = Array.isArray(children) ? children : [children];
            var index;
            // Using splice, instead of filter to mutate, and keep the original array.
            children.forEach(function (child) {
                index = _this.children.indexOf(child);
                if (index !== -1) {
                    _this.children.splice(index, 1);
                }
            });
            if (!silent) {
                // @ts-ignore
                this.trigger('removed', children);
            }
            return this;
        };
        Collection.prototype.reset = function () {
            this.children = [];
            return this;
        };
        Collection.prototype.eachChild = function (callback) {
            this.children.forEach(callback);
            return this;
        };
        Collection.prototype.mapChildren = function (callback) {
            return this.children.map(callback);
        };
        Collection.prototype.reduceChildren = function (callback, initValue) {
            return this.children.reduce(callback, initValue);
        };
        Collection.prototype.childAt = function (index) {
            return this.children[index];
        };
        Collection.prototype.firstChild = function () {
            return this.children[0];
        };
        Collection.prototype.lastChild = function () {
            return this.children[this.childrenLength - 1];
        };
        Collection.prototype.childById = function (id) {
            return this.children.find(function (el) { return el.id === id; });
        };
        Collection.prototype.childByName = function (name) {
            return this.children.find(function (el) { return el.name === name; });
        };
        Collection.prototype.childByIdDeep = function (id) {
            var child = this.childById(id);
            if (child) {
                return child;
            }
            this.eachChild(function (item) {
                if (item.isCollection) {
                    var _child = item.childByIdDeep(item);
                    if (_child) {
                        child = _child;
                    }
                }
            });
            return child;
        };
        Collection.prototype.childByNameDeep = function (name) {
            var child = this.childByName(name);
            if (child) {
                return child;
            }
            this.eachChild(function (item) {
                if (item.isCollection) {
                    var _child = item.childByNameDeep(item);
                    if (_child) {
                        child = _child;
                    }
                }
            });
            return child;
        };
        Collection.prototype.moveChildTo = function (child, index) {
            var fromIndex = this.children.indexOf(child);
            if (fromIndex !== -1) {
                this.children.splice(fromIndex, 1);
                this.children.splice(index, 0, child);
                // @ts-ignore
                this.trigger('sorted', child, this.children);
            }
            return this;
        };
        Collection.prototype.moveChildUp = function (child) {
            var fromIndex = this.children.indexOf(child);
            return this.moveChildTo(child, fromIndex + 1);
        };
        Collection.prototype.moveChildDown = function (child) {
            var fromIndex = this.children.indexOf(child);
            return this.moveChildTo(child, fromIndex - 1);
        };
        return Collection;
    }(Base));
}



/***/ }),

/***/ "./src/mixins/element-collection.ts":
/*!******************************************!*\
  !*** ./src/mixins/element-collection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementCollection: () => (/* binding */ ElementCollection)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/mixins/collection.ts");
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

function ElementCollection(Base) {
    return /** @class */ (function (_super) {
        __extends(ElementCollection, _super);
        function ElementCollection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ElementCollection.prototype.add = function (children, silent) {
            var _this = this;
            if (silent === void 0) { silent = false; }
            children = Array.isArray(children) ? children : [children];
            children.forEach(function (child) {
                var _a;
                if (_this.children.includes(child)) {
                    return;
                }
                // Set up child.
                _this.children.push(child);
                child.set('parent', _this, true);
                // @ts-ignore
                if (_this.isCanvas) {
                    var setCanvas = function (child) {
                        child.set('canvas', _this, true);
                        // @ts-ignore
                        _this.on('set', function (set) { return child.trigger('canvas:set', set); });
                        // @ts-ignore
                        _this.getAnimation().add(child.getAnimation());
                    };
                    setCanvas(child);
                    if (child.isCollection) {
                        child.eachChild(setCanvas);
                    }
                }
                // Set up defs.
                var defs = child.get('_defs') || {};
                var def2Add = [];
                var key, def;
                for (key in defs) {
                    def = defs[key];
                    if (def === null || def === void 0 ? void 0 : def.isDefinition) {
                        def2Add.push(def);
                    }
                }
                if (def2Add.length) {
                    // @ts-ignore
                    (_a = child.get('canvas')) === null || _a === void 0 ? void 0 : _a.addDefs(def2Add);
                }
                if (!silent) {
                    child.trigger('addedto', _this);
                }
            });
            if (!silent) {
                // @ts-ignore
                this.trigger('added', children);
            }
            return this;
        };
        ElementCollection.prototype.findChildrenByPointer = function (pointer) {
            return this.mapChildren(function (child) {
                var polygon = child.toPolygon();
                return polygon.containsPoint(pointer) && child;
            }).filter(function (child) { return child === null || child === void 0 ? void 0 : child.selectable; });
        };
        ElementCollection.prototype.findLastChildByPointer = function (pointer) {
            var children = this.findChildrenByPointer(pointer);
            return children[children.length - 1];
        };
        return ElementCollection;
    }((0,_collection__WEBPACK_IMPORTED_MODULE_0__.Collection)(Base)));
}



/***/ }),

/***/ "./src/mixins/index.ts":
/*!*****************************!*\
  !*** ./src/mixins/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* reexport safe */ _collection__WEBPACK_IMPORTED_MODULE_0__.Collection),
/* harmony export */   ElementCollection: () => (/* reexport safe */ _element_collection__WEBPACK_IMPORTED_MODULE_1__.ElementCollection),
/* harmony export */   Stateful: () => (/* reexport safe */ _statueful__WEBPACK_IMPORTED_MODULE_2__.Stateful)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/mixins/collection.ts");
/* harmony import */ var _element_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-collection */ "./src/mixins/element-collection.ts");
/* harmony import */ var _statueful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statueful */ "./src/mixins/statueful.ts");





/***/ }),

/***/ "./src/mixins/statueful.ts":
/*!*********************************!*\
  !*** ./src/mixins/statueful.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stateful: () => (/* binding */ Stateful)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/utils/index.ts");
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

var _sanitizer = new _utils__WEBPACK_IMPORTED_MODULE_0__.Sanitizer();
function Stateful(Base) {
    return /** @class */ (function (_super) {
        __extends(Stateful, _super);
        function Stateful() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Stateful.prototype.set = function (key, value, silent) {
            var _a;
            if (silent === void 0) { silent = false; }
            if (typeof key === 'string') {
                this._set(key, value);
                if (!silent) {
                    // @ts-ignore
                    this.trigger('set', (_a = {}, _a[key] = value, _a), this);
                }
            }
            else {
                for (var prop in key) {
                    this._set(prop, key[prop]);
                }
                // Attention please: here - if 'key' is an object - 'value' becomes the 'silent'!
                if (!value) {
                    // @ts-ignore
                    this.trigger('set', key, this);
                }
            }
            return this;
        };
        Stateful.prototype._set = function (key, value) {
            if (typeof this[key] !== 'function' && typeof value !== 'undefined') {
                this[key] = _sanitizer.sanitize(key, value);
            }
        };
        Stateful.prototype.get = function (key) {
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
        return Stateful;
    }(Base));
}



/***/ }),

/***/ "./src/observable.ts":
/*!***************************!*\
  !*** ./src/observable.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: () => (/* binding */ Observable)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Observable = /** @class */ (function () {
    function Observable() {
        this._listeners = {};
    }
    Observable.prototype.on = function (eventName, listener) {
        var _this = this;
        if (typeof eventName === 'object') {
            for (var key in eventName) {
                this.on(key, eventName[key]);
            }
        }
        else if (typeof eventName === 'string' && eventName.indexOf(' ') !== -1) {
            eventName.split(' ').forEach(function (en) { return _this.on(en, listener); });
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
    Observable.prototype.once = function () {
        return this;
    };
    Observable.prototype.off = function (eventName, listener) {
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
    Observable.prototype.trigger = function (eventName) {
        var _a, _b;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var listeners = this._listeners[eventName];
        var allListeners = this._listeners.all;
        if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
                (_a = listeners[i]).call.apply(_a, __spreadArray(__spreadArray([this], args, false), [eventName], false));
            }
        }
        if (allListeners) {
            for (var i = 0; i < allListeners.length; i++) {
                (_b = allListeners[i]).call.apply(_b, __spreadArray(__spreadArray([this], args, false), [eventName], false));
            }
        }
        return this;
    };
    return Observable;
}());



/***/ }),

/***/ "./src/shapes/circle.ts":
/*!******************************!*\
  !*** ./src/shapes/circle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Circle: () => (/* binding */ Circle)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shapes/shape.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
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


var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'circle';
        _this.r = 0;
        _this.cx = 0;
        _this.cy = 0;
        _this.init(params);
        return _this;
    }
    Circle.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this).concat(['r', 'cx', 'cy']);
    };
    Circle.prototype.updateOthersWithKeys = function (keys) {
        if (keys.includes('r')) {
            this.updateBBox();
            this.cx = this.r;
            this.cy = this.r;
        }
        return this;
    };
    Circle.prototype.updateBBox = function () {
        this.bBox.fromSizeAndOrigin(new _maths__WEBPACK_IMPORTED_MODULE_1__.Point().addScalar(this.r * 2), this.origin);
        return this;
    };
    return Circle;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape));



/***/ }),

/***/ "./src/shapes/ellipse.ts":
/*!*******************************!*\
  !*** ./src/shapes/ellipse.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ellipse: () => (/* binding */ Ellipse)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shapes/shape.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
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


var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'ellipse';
        _this.rx = 0;
        _this.ry = 0;
        _this.cx = 0;
        _this.cy = 0;
        _this.init(params);
        return _this;
    }
    Ellipse.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this).concat(['rx', 'ry', 'cx', 'cy']);
    };
    Ellipse.prototype.updateOthersWithKeys = function (keys) {
        if (keys.includes('rx') || keys.includes('ry')) {
            this.updateBBox();
            this.cx = this.rx;
            this.cy = this.ry;
        }
        return this;
    };
    Ellipse.prototype.updateBBox = function () {
        this.bBox.fromSizeAndOrigin(new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(this.rx, this.ry).multiplyScalar(2), this.origin);
        return this;
    };
    return Ellipse;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape));



/***/ }),

/***/ "./src/shapes/group.ts":
/*!*****************************!*\
  !*** ./src/shapes/group.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Group: () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shapes/shape.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./src/mixins/index.ts");
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
        _this.updateBBox = _this.updateBBox.bind(_this);
        return _this;
    }
    Group.prototype.updateBBox = function () {
        var edges = this.mapChildren(function (child) { return child.bBox.getLineEdges(child.matrix); }).flat();
        this.bBox.fromPoints(edges);
        this.origin.copy(this.bBox.getOrigin());
        return this;
    };
    Group.prototype.add = function (children, silent) {
        var _this = this;
        _super.prototype.add.call(this, children, silent);
        children = Array.isArray(children) ? children : [children];
        children.forEach(function (child) { return child.on('set', _this.updateBBox); });
        this.updateBBox();
        return this;
    };
    Group.prototype.remove = function (children, silent) {
        var _this = this;
        _super.prototype.remove.call(this, children, silent);
        children = Array.isArray(children) ? children : [children];
        children.forEach(function (child) { return child.off('set', _this.updateBBox); });
        this.updateBBox();
        return this;
    };
    return Group;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.ElementCollection)(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape)));



/***/ }),

/***/ "./src/shapes/image.ts":
/*!*****************************!*\
  !*** ./src/shapes/image.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rect */ "./src/shapes/rect.ts");
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

var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'image';
        _this.href = '';
        _this.init(params);
        _this.setImage(_this.href);
        return _this;
    }
    Image.prototype.setImage = function (src) {
        return this;
    };
    Image.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this).concat(['href']);
    };
    return Image;
}(_rect__WEBPACK_IMPORTED_MODULE_0__.Rect));



/***/ }),

/***/ "./src/shapes/index.ts":
/*!*****************************!*\
  !*** ./src/shapes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Circle: () => (/* reexport safe */ _circle__WEBPACK_IMPORTED_MODULE_2__.Circle),
/* harmony export */   Ellipse: () => (/* reexport safe */ _ellipse__WEBPACK_IMPORTED_MODULE_3__.Ellipse),
/* harmony export */   Group: () => (/* reexport safe */ _group__WEBPACK_IMPORTED_MODULE_10__.Group),
/* harmony export */   Image: () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_9__.Image),
/* harmony export */   Path: () => (/* reexport safe */ _path__WEBPACK_IMPORTED_MODULE_4__.Path),
/* harmony export */   Polygon: () => (/* reexport safe */ _polygon__WEBPACK_IMPORTED_MODULE_5__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _polyline__WEBPACK_IMPORTED_MODULE_6__.Polyline),
/* harmony export */   Rect: () => (/* reexport safe */ _rect__WEBPACK_IMPORTED_MODULE_1__.Rect),
/* harmony export */   Shape: () => (/* reexport safe */ _shape__WEBPACK_IMPORTED_MODULE_0__.Shape),
/* harmony export */   Text: () => (/* reexport safe */ _text__WEBPACK_IMPORTED_MODULE_7__.Text),
/* harmony export */   TextPath: () => (/* reexport safe */ _text_path__WEBPACK_IMPORTED_MODULE_8__.TextPath)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shapes/shape.ts");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rect */ "./src/shapes/rect.ts");
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circle */ "./src/shapes/circle.ts");
/* harmony import */ var _ellipse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ellipse */ "./src/shapes/ellipse.ts");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path */ "./src/shapes/path.ts");
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polygon */ "./src/shapes/polygon.ts");
/* harmony import */ var _polyline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./polyline */ "./src/shapes/polyline.ts");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text */ "./src/shapes/text.ts");
/* harmony import */ var _text_path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./text-path */ "./src/shapes/text-path.ts");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image */ "./src/shapes/image.ts");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./group */ "./src/shapes/group.ts");













/***/ }),

/***/ "./src/shapes/path.ts":
/*!****************************!*\
  !*** ./src/shapes/path.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Path: () => (/* binding */ Path)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shapes/shape.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../interactive */ "./src/interactive/index.ts");
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



var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    function Path(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'path';
        _this.path = new _maths__WEBPACK_IMPORTED_MODULE_1__.CurvePath();
        _this.init(params);
        _this.addControl('path', new _interactive__WEBPACK_IMPORTED_MODULE_2__.PathControl({
            shape: _this,
            path: _this.path
        }));
        return _this;
    }
    Path.prototype.getAttributes = function (makeKebabeCase) {
        var defaultAttributes = _super.prototype.getAttributes.call(this, makeKebabeCase);
        return __assign(__assign({}, defaultAttributes), { d: this.path.toString() });
    };
    Path.prototype.updateOthersWithKeys = function (keys) {
        if (keys.includes('d')) {
            this.path.fromString(this.d).adjust();
            this.updateBBox();
        }
        return this;
    };
    Path.prototype.updateBBox = function () {
        this.bBox.fromSizeAndOrigin(this.path.updateBBox().getBBox().getSize(), this.origin);
        return this;
    };
    Path.prototype.getPath = function () {
        return this.path;
    };
    return Path;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape));



/***/ }),

/***/ "./src/shapes/polygon.ts":
/*!*******************************!*\
  !*** ./src/shapes/polygon.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Polygon: () => (/* binding */ Polygon)
/* harmony export */ });
/* harmony import */ var _polyline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyline */ "./src/shapes/polyline.ts");
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

var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'polygon';
        return _this;
    }
    return Polygon;
}(_polyline__WEBPACK_IMPORTED_MODULE_0__.Polyline));



/***/ }),

/***/ "./src/shapes/polyline.ts":
/*!********************************!*\
  !*** ./src/shapes/polyline.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Polyline: () => (/* binding */ Polyline)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shapes/shape.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
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


var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'polyline';
        _this.path = new _maths__WEBPACK_IMPORTED_MODULE_1__.CurvePath();
        _this.init(params);
        return _this;
    }
    Polyline.prototype.getAttributes = function (makeKebabeCase) {
        var defaultAttributes = _super.prototype.getAttributes.call(this, makeKebabeCase);
        return __assign(__assign({}, defaultAttributes), { points: this.path.toNumbers() });
    };
    Polyline.prototype.updateOthersWithKeys = function (keys) {
        if (keys.includes('points')) {
            this.path.fromNumbers(this.points).adjust();
            this.updateBBox();
        }
        return this;
    };
    Polyline.prototype.updateBBox = function () {
        this.bBox.fromSizeAndOrigin(this.path.updateBBox().getBBox().getSize(), this.origin);
        return this;
    };
    return Polyline;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape));



/***/ }),

/***/ "./src/shapes/rect.ts":
/*!****************************!*\
  !*** ./src/shapes/rect.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rect: () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shapes/shape.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
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
        return _super.prototype.getAttrMap.call(this).concat(['width', 'height']);
    };
    Rect.prototype.updateOthersWithKeys = function (keys) {
        if (keys.includes('width') || keys.includes('height')) {
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

/***/ "./src/shapes/shape.ts":
/*!*****************************!*\
  !*** ./src/shapes/shape.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shape: () => (/* binding */ Shape)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./src/element.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../interactive */ "./src/interactive/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../animation */ "./src/animation/index.ts");
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
        _this.isShape = true;
        _this.selectable = true;
        _this.matrix = new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix();
        _this.bBox = new _maths__WEBPACK_IMPORTED_MODULE_1__.BBox();
        _this.origin = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(0.5, 0.5);
        _this._controls = {};
        _this.transformProps = ['left', 'top', 'angle', 'scaleX', 'scaleY', 'skewX', 'skewY'];
        _this.left = 0;
        _this.top = 0;
        _this.angle = 0;
        _this.scaleX = 1;
        _this.scaleY = 1;
        _this.skewX = 0;
        _this.skewY = 0;
        _this._fill = 'black';
        _this._stroke = 'black';
        _this._defs = {};
        _this.strokeWidth = 0;
        _this.opacity = 1;
        return _this;
    }
    Object.defineProperty(Shape.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (value) {
            var _a, _b;
            if (this._defs.fill) {
                (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.removeDefs(this._defs.fill);
            }
            if (_maths__WEBPACK_IMPORTED_MODULE_1__.Color.isColor(value)) {
                this._fill = value;
                this._defs.fill = null;
            }
            else {
                value.shape = this;
                (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.addDefs(value);
                this._fill = "url(#".concat(value.id, ")");
                this._defs.fill = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "stroke", {
        get: function () {
            return this._stroke;
        },
        set: function (value) {
            var _a, _b;
            if (this._defs.stroke) {
                (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.removeDefs(this._defs.stroke);
            }
            if (_maths__WEBPACK_IMPORTED_MODULE_1__.Color.isColor(value)) {
                this._stroke = value;
                this._defs.stroke = null;
            }
            else {
                value.shape = this;
                (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.addDefs(value);
                this._stroke = "url(#".concat(value.id, ")");
                this._defs.stroke = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "originX", {
        get: function () {
            return this.origin.x;
        },
        set: function (value) {
            this.origin.x = value;
            this.bBox.fromSizeAndOrigin(this.bBox.getSize(), this.origin);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "originY", {
        get: function () {
            return this.origin.y;
        },
        set: function (value) {
            this.origin.y = value;
            this.bBox.fromSizeAndOrigin(this.bBox.getSize(), this.origin);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "animation", {
        get: function () {
            return this._animation.toJSON();
        },
        set: function (value) {
            var tracks = value.tracks;
            this._animation.setTracks(tracks);
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.init = function (params) {
        this._animation = new _animation__WEBPACK_IMPORTED_MODULE_3__.Animation(this);
        this.set(params, true);
        this.createId(this.tagName);
        this.addControl('transform', new _interactive__WEBPACK_IMPORTED_MODULE_2__.TransformControl({
            shape: this
        })).setControl('transform');
        this.updateMatrix();
        this.updateBBox();
        this.trigger('init', this);
    };
    Shape.prototype.set = function (key, value, silent) {
        var _a, _b;
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
            this.updateOthersWithKeys([key]);
            if (!silent) {
                this.trigger('set', (_a = {}, _a[key] = value, _a), this);
                if (this.canvas) {
                    this.canvas.trigger('shapes:set', (_b = {}, _b[key] = value, _b), this);
                }
            }
        }
        else {
            // Check props if key is an object.
            var i = void 0, prop = void 0;
            for (i = 0; i < props.length; i++) {
                prop = props[i];
                if (prop in key) {
                    this.updateMatrix();
                    break;
                }
            }
            this.updateOthersWithKeys(Object.keys(key));
            // If key is an object, the 'value' represents the 'silent'.
            if (!value) {
                this.trigger('set', key, this);
                if (this.canvas) {
                    this.canvas.trigger('shapes:set', key, this);
                }
            }
        }
        return this;
    };
    Shape.prototype.getAttrMap = function () {
        return ['fill', 'stroke', 'strokeWidth'];
    };
    Shape.prototype.updateOthersWithKeys = function (keys) {
        return this;
    };
    Shape.prototype.getAttributes = function (makeKebabeCase) {
        var defaultAttributes = _super.prototype.getAttributes.call(this, makeKebabeCase);
        // @ts-ignore
        if (this.isCollection) {
            return defaultAttributes;
        }
        var translate = this.bBox.getSize().multiply(this.origin).multiplyScalar(-1).toString();
        return __assign(__assign({}, defaultAttributes), { transform: "translate(".concat(translate, ")") });
    };
    Shape.prototype.getWrapperAttributes = function () {
        var attrs = {
            id: this.id,
            transform: this.matrix.toCSS()
        };
        if (this.className) {
            attrs.className = this.className;
        }
        return attrs;
    };
    Shape.prototype.addControl = function (name, control) {
        if (name) {
            this._controls[name] = control;
        }
        return this;
    };
    Shape.prototype.getControl = function (name) {
        return this._controls[name || this._activeControl];
    };
    Shape.prototype.setControl = function (name) {
        this._activeControl = name;
        this.trigger('control:switched', this.getControl(), this);
        if (this.canvas) {
            this.canvas.trigger('shapes:control:switched', this.getControl(), this);
        }
        return this;
    };
    Shape.prototype.updateMatrix = function () {
        this.matrix.fromOptions(this.get(this.transformProps));
        return this;
    };
    Shape.prototype.updateBBox = function () {
        console.warn('updateBBox() must be implemented by subclass.');
        return this;
    };
    Shape.prototype.getWorldMatrix = function (withDrawingArea) {
        var _a = this.parent, viewportMatrix = _a.viewportMatrix, isCanvas = _a.isCanvas, hasDrawingArea = _a.hasDrawingArea;
        var matrix;
        if (isCanvas) {
            if (withDrawingArea && hasDrawingArea) {
                var _b = this.parent.getDrawingAreaPosition(), x = _b.x, y = _b.y;
                var daMatrix = new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix().fromArray([1, 0, 0, 1, x, y]);
                matrix = viewportMatrix.clone().multiply(daMatrix);
            }
            else {
                matrix = viewportMatrix;
            }
        }
        else {
            matrix = this.parent.getWorldMatrix();
        }
        return new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix().copy(matrix).multiply(this.matrix);
    };
    Shape.prototype.getLocalPointer = function (e, matrix) {
        var pointer = this.canvas.getPointer(e);
        return pointer.transform(matrix || this.getWorldMatrix(true).invert());
    };
    Shape.prototype.getAnimation = function () {
        return this._animation;
    };
    Shape.prototype.animate = function (property, keyframes) {
        return this._animation.addTrack(property, keyframes);
    };
    Shape.prototype.toPolygon = function () {
        return this.bBox.toPolygon(this.getWorldMatrix(true));
    };
    Shape.prototype.toJSON = function () {
        var _this = this;
        var json = _super.prototype.toJSON.call(this);
        var transform = this.transformProps.reduce(function (memo, prop) {
            if (typeof _this[prop] !== 'undefined') {
                memo[prop] = _this[prop];
            }
            return memo;
        }, {});
        var defs = {};
        var key, def;
        for (key in this._defs) {
            def = this._defs[key];
            if (def) {
                defs[key] = def.toJSON();
            }
        }
        delete json.transform;
        return __assign(__assign(__assign(__assign({}, json), transform), defs), { animation: this.animation });
    };
    return Shape;
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element));



/***/ }),

/***/ "./src/shapes/text-path.ts":
/*!*********************************!*\
  !*** ./src/shapes/text-path.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextPath: () => (/* binding */ TextPath)
/* harmony export */ });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./src/shapes/text.ts");
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

var TextPath = /** @class */ (function (_super) {
    __extends(TextPath, _super);
    function TextPath() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'textPath';
        return _this;
    }
    return TextPath;
}(_text__WEBPACK_IMPORTED_MODULE_0__.Text));



/***/ }),

/***/ "./src/shapes/text.ts":
/*!****************************!*\
  !*** ./src/shapes/text.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/shapes/shape.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./src/maths/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../interactive */ "./src/interactive/index.ts");
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



// We use CanvasRenderingContext2D API to measure text size.
var CANVASCONTEXT = document.createElement('canvas').getContext('2d');
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'text';
        _this.text = '';
        _this.fontFamily = 'Arial';
        _this.fontSize = 40;
        _this.fontWeight = 'normal';
        _this.x = 0;
        _this.y = 40;
        _this.init(params);
        _this.addControl('text', new _interactive__WEBPACK_IMPORTED_MODULE_2__.TextControl({
            shape: _this
        }));
        return _this;
    }
    Text.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this).concat(['x', 'y', 'fontFamily', 'fontSize']);
    };
    Text.prototype.updateOthersWithKeys = function (keys) {
        if (keys.includes('text') || keys.includes('fontFamily') || keys.includes('fontSize')) {
            this.updateBBox();
        }
        if (keys.includes('fontSize')) {
            this.y = this.fontSize;
        }
        return this;
    };
    Text.prototype.updateBBox = function () {
        this.bBox.fromSizeAndOrigin(this.getTextSize(), this.origin);
        return this;
    };
    Text.prototype.getTextSize = function () {
        // @ts-ignore
        CANVASCONTEXT.font = "".concat(this.fontSize, "px ").concat(this.fontFamily);
        // @ts-ignore
        var _a = CANVASCONTEXT.measureText(this.text), width = _a.width, fontBoundingBoxAscent = _a.fontBoundingBoxAscent, fontBoundingBoxDescent = _a.fontBoundingBoxDescent;
        return new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(width, fontBoundingBoxAscent + fontBoundingBoxDescent);
    };
    return Text;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape));



/***/ }),

/***/ "./src/types/animation.ts":
/*!********************************!*\
  !*** ./src/types/animation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/types/animation.ts");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./src/types/math.ts");
/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixin */ "./src/types/mixin.ts");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./src/types/object.ts");






/***/ }),

/***/ "./src/types/math.ts":
/*!***************************!*\
  !*** ./src/types/math.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/types/mixin.ts":
/*!****************************!*\
  !*** ./src/types/mixin.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/types/object.ts":
/*!*****************************!*\
  !*** ./src/types/object.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PIBY180: () => (/* binding */ PIBY180)
/* harmony export */ });
var PIBY180 = Math.PI / 180;



/***/ }),

/***/ "./src/utils/functions.ts":
/*!********************************!*\
  !*** ./src/utils/functions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelize: () => (/* binding */ camelize),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   deg2Rad: () => (/* binding */ deg2Rad),
/* harmony export */   isEqual: () => (/* binding */ isEqual),
/* harmony export */   kebabize: () => (/* binding */ kebabize),
/* harmony export */   omitBy: () => (/* binding */ omitBy),
/* harmony export */   parsePath: () => (/* binding */ parsePath),
/* harmony export */   rad2Deg: () => (/* binding */ rad2Deg),
/* harmony export */   randInt: () => (/* binding */ randInt),
/* harmony export */   toFixed: () => (/* binding */ toFixed),
/* harmony export */   uniqueId: () => (/* binding */ uniqueId)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/utils/constants.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var clamp = function (value, min, max) {
    return Math.min(Math.max(value, min), max);
};
var toFixed = function (value, fractionDigits) {
    if (fractionDigits === void 0) { fractionDigits = 2; }
    var _value = parseFloat(value) || 0;
    return Math.round(_value * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits) || 0;
};
var deg2Rad = function (degree) { return degree * _constants__WEBPACK_IMPORTED_MODULE_0__.PIBY180; };
var rad2Deg = function (degree) { return degree / _constants__WEBPACK_IMPORTED_MODULE_0__.PIBY180; };
var randInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var uniqueId = function (prefix) {
    var pf = prefix ? prefix + '-' : '';
    var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var str = '', i;
    for (i = 0; i < 12; i++) {
        str += charset[randInt(0, charset.length - 1)];
    }
    return pf + str;
};
var kebabize = function (name) { return name.replace(/[A-Z]/g, function (letter) { return "-".concat(letter.toLowerCase()); }); };
var camelize = function (name) { return name.replace(/-([a-z])/g, function (_m, letter) { return letter.toUpperCase(); }); };
// Thanks ChatGPT! :-)
var isEqual = function (value1, value2, visited) {
    if (visited === void 0) { visited = new Set(); }
    // Check if both values are of the same type
    if (typeof value1 !== typeof value2) {
        return false;
    }
    // If values are primitive types, directly compare them
    if (typeof value1 !== 'object' || value1 === null || value2 === null) {
        return value1 === value2;
    }
    // If both values are the same object reference, they are equal
    if (value1 === value2) {
        return true;
    }
    // Check for circular references
    if (visited.has(value1) || visited.has(value2)) {
        return false;
    }
    visited.add(value1);
    visited.add(value2);
    // Check if both values are arrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
        if (value1.length !== value2.length) {
            return false;
        }
        // Compare array elements recursively
        for (var i = 0; i < value1.length; i++) {
            if (!isEqual(value1[i], value2[i], visited)) {
                return false;
            }
        }
        return true;
    }
    // Check if both values are functions
    if (typeof value1 === 'function' && typeof value2 === 'function') {
        // Check if function sources are the same
        return value1.toString() === value2.toString();
    }
    // Check if both values are objects
    if (typeof value1 === 'object' && typeof value2 === 'object') {
        var keys1 = Object.keys(value1);
        var keys2 = Object.keys(value2);
        // Check if both objects have the same number of keys
        if (keys1.length !== keys2.length) {
            return false;
        }
        // Compare keys and values recursively
        for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
            var key = keys1_1[_i];
            if (!isEqual(value1[key], value2[key], visited)) {
                return false;
            }
        }
        return true;
    }
    // If values are of different types and not arrays or objects, they are not equal
    return false;
};
var omitBy = function (obj, callback) {
    var newObj = {};
    for (var key in obj) {
        if (!callback(obj[key], key, obj)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};
var CURVE_VALUES_LENGTHS = {
    M: 2,
    m: 2,
    L: 2,
    l: 2,
    H: 1,
    h: 1,
    V: 1,
    v: 1,
    C: 6,
    c: 6,
    S: 4,
    s: 4,
    Q: 4,
    q: 4,
    T: 2,
    t: 2,
    A: 7,
    a: 7,
    Z: 0,
    z: 0
};
var _groupArray = function (array, size) {
    var grouped = [];
    for (var i = 0; i < array.length; i += size) {
        grouped.push(array.slice(i, i + size));
    }
    return grouped;
};
var parsePath = function (string) {
    var parsed = [];
    (string.match(/([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]+)?/g) || []).forEach(function (curve, i, array) {
        curve = curve.trim();
        var command = curve.replace(/[^MmLlHhVvCcSsQqTtAaZz]/g, '');
        var values = (curve.match(/[\-\.\d]+/g) || []).map(function (n) { return toFixed(n); });
        var commandLength = CURVE_VALUES_LENGTHS[command];
        if (values.length === commandLength) {
            // @ts-ignore
            parsed.push(__spreadArray([command], values, true));
        }
        else {
            _groupArray(values, commandLength).forEach(function (values) {
                //@ts-ignore
                parsed.push(__spreadArray([command], values, true));
            });
        }
    });
    return parsed;
};



/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PIBY180: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PIBY180),
/* harmony export */   Sanitizer: () => (/* reexport safe */ _sanitizer__WEBPACK_IMPORTED_MODULE_2__.Sanitizer),
/* harmony export */   camelize: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.camelize),
/* harmony export */   clamp: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.deg2Rad),
/* harmony export */   isEqual: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.isEqual),
/* harmony export */   kebabize: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.kebabize),
/* harmony export */   omitBy: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.omitBy),
/* harmony export */   parsePath: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.parsePath),
/* harmony export */   rad2Deg: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.rad2Deg),
/* harmony export */   randInt: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.randInt),
/* harmony export */   toFixed: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.toFixed),
/* harmony export */   uniqueId: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.uniqueId)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/utils/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/utils/functions.ts");
/* harmony import */ var _sanitizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sanitizer */ "./src/utils/sanitizer.ts");





/***/ }),

/***/ "./src/utils/sanitizer.ts":
/*!********************************!*\
  !*** ./src/utils/sanitizer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sanitizer: () => (/* binding */ Sanitizer)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/utils/functions.ts");

var Sanitizer = /** @class */ (function () {
    function Sanitizer() {
        this._types = {
            left: 'number',
            top: 'number',
            width: 'number',
            height: 'number'
        };
    }
    Sanitizer.prototype.sanitize = function (property, value) {
        var type = this._types[property];
        if (!type) {
            return value;
        }
        var fn = this['_' + type];
        if (!fn) {
            return value;
        }
        return fn(value);
    };
    Sanitizer.prototype._number = function (value) {
        return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.toFixed)(value);
    };
    return Sanitizer;
}());



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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleControlNode: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.AngleControlNode),
/* harmony export */   Animation: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_7__.Animation),
/* harmony export */   ArcCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.ArcCurve),
/* harmony export */   BBox: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.BBox),
/* harmony export */   Canvas: () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_2__.Canvas),
/* harmony export */   Circle: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Circle),
/* harmony export */   ClipPath: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_4__.ClipPath),
/* harmony export */   CloseCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.CloseCurve),
/* harmony export */   Color: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.Color),
/* harmony export */   ColorStop: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_4__.ColorStop),
/* harmony export */   Control: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.ControlNode),
/* harmony export */   CubicBezierCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.CubicBezierCurve),
/* harmony export */   Curve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.Curve),
/* harmony export */   CurvePath: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.CurvePath),
/* harmony export */   Definition: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_4__.Definition),
/* harmony export */   Element: () => (/* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_1__.Element),
/* harmony export */   Ellipse: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Ellipse),
/* harmony export */   Exporter: () => (/* reexport safe */ _exporters__WEBPACK_IMPORTED_MODULE_11__.Exporter),
/* harmony export */   Gradient: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_4__.Gradient),
/* harmony export */   GradientControl: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.GradientControl),
/* harmony export */   Group: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Group),
/* harmony export */   HorizontalLineCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.HorizontalLineCurve),
/* harmony export */   Image: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Image),
/* harmony export */   Importer: () => (/* reexport safe */ _importers__WEBPACK_IMPORTED_MODULE_10__.Importer),
/* harmony export */   JSONImporter: () => (/* reexport safe */ _importers__WEBPACK_IMPORTED_MODULE_10__.JSONImporter),
/* harmony export */   Keyframe: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_7__.Keyframe),
/* harmony export */   LineCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.LineCurve),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_4__.LinearGradient),
/* harmony export */   LottieExporter: () => (/* reexport safe */ _exporters__WEBPACK_IMPORTED_MODULE_11__.LottieExporter),
/* harmony export */   LottieImporter: () => (/* reexport safe */ _importers__WEBPACK_IMPORTED_MODULE_10__.LottieImporter),
/* harmony export */   Matrix: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.Matrix),
/* harmony export */   MoveCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.MoveCurve),
/* harmony export */   Observable: () => (/* reexport safe */ _observable__WEBPACK_IMPORTED_MODULE_0__.Observable),
/* harmony export */   OriginControlNode: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.OriginControlNode),
/* harmony export */   PIBY180: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.PIBY180),
/* harmony export */   Path: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Path),
/* harmony export */   PathControl: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.PathControl),
/* harmony export */   Pattern: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_4__.Pattern),
/* harmony export */   Point: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.Point),
/* harmony export */   Polygon: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Polyline),
/* harmony export */   QuadraticBezierCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.QuadraticBezierCurve),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_4__.RadialGradient),
/* harmony export */   RasterExporter: () => (/* reexport safe */ _exporters__WEBPACK_IMPORTED_MODULE_11__.RasterExporter),
/* harmony export */   Rect: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Rect),
/* harmony export */   SVGCSSExporter: () => (/* reexport safe */ _exporters__WEBPACK_IMPORTED_MODULE_11__.SVGCSSExporter),
/* harmony export */   SVGExporter: () => (/* reexport safe */ _exporters__WEBPACK_IMPORTED_MODULE_11__.SVGExporter),
/* harmony export */   SVGImporter: () => (/* reexport safe */ _importers__WEBPACK_IMPORTED_MODULE_10__.SVGImporter),
/* harmony export */   SVGJSExporter: () => (/* reexport safe */ _exporters__WEBPACK_IMPORTED_MODULE_11__.SVGJSExporter),
/* harmony export */   Sanitizer: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.Sanitizer),
/* harmony export */   ScaleControlNode: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.ScaleControlNode),
/* harmony export */   Selector: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.Selector),
/* harmony export */   Shape: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Shape),
/* harmony export */   SmoothCubicBezierCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.SmoothCubicBezierCurve),
/* harmony export */   SmoothQuadraticBezierCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.SmoothQuadraticBezierCurve),
/* harmony export */   Text: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Text),
/* harmony export */   TextControl: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.TextControl),
/* harmony export */   TextPath: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.TextPath),
/* harmony export */   Timeline: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_7__.Timeline),
/* harmony export */   Track: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_7__.Track),
/* harmony export */   TransformControl: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.TransformControl),
/* harmony export */   VerticalLineCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.VerticalLineCurve),
/* harmony export */   camelize: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.camelize),
/* harmony export */   clamp: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.deg2Rad),
/* harmony export */   easings: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_7__.easings),
/* harmony export */   isEqual: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.isEqual),
/* harmony export */   kebabize: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.kebabize),
/* harmony export */   omitBy: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.omitBy),
/* harmony export */   parsePath: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.parsePath),
/* harmony export */   rad2Deg: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.rad2Deg),
/* harmony export */   randInt: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.randInt),
/* harmony export */   toFixed: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.toFixed),
/* harmony export */   uniqueId: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.uniqueId)
/* harmony export */ });
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable */ "./src/observable.ts");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./src/element.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes */ "./src/shapes/index.ts");
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defs */ "./src/defs/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive */ "./src/interactive/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maths */ "./src/maths/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation */ "./src/animation/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types */ "./src/types/index.ts");
/* harmony import */ var _importers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./importers */ "./src/importers/index.ts");
/* harmony import */ var _exporters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exporters */ "./src/exporters/index.ts");
// Core



// Shapes

// Definitions

// Interactive

// Maths

// Animation

// Utils

// Types

// Importers

// Exporters


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});