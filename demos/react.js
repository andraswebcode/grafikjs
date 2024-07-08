/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./packages/styles/src/styles.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./packages/styles/src/styles.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.grafik-wrapper {
  position: relative;
  overflow: hidden;
}

.grafik-canvas,
.grafik-interactive {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.grafik-interactive * {
  box-sizing: border-box;
}

.grafik-selector {
  position: absolute;
  background: rgba(173, 216, 230, 0.4);
  border: dashed 2px rgba(75, 170, 200, 0.4);
}

.grafik-control {
  position: absolute;
}

.grafik-transform-control {
  cursor: move;
  border: dashed 2px forestgreen;
}

.grafik-text-control {
  cursor: text;
  border: dashed 2px forestgreen;
}

.grafik-control-node {
  position: absolute;
  width: 12px;
  height: 12px;
  background: forestgreen;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  cursor: crosshair;
}

.grafik-control-node__o {
  width: 6px;
  height: 6px;
  background: transparent;
  border: solid 1px forestgreen;
}
.grafik-control-node__o:before, .grafik-control-node__o:after {
  content: "";
  position: absolute;
  display: inline-block;
  left: 50%;
  top: 50%;
  background: forestgreen;
  transform: translate(-50%, -50%);
}
.grafik-control-node__o:before {
  width: 18px;
  height: 1px;
}
.grafik-control-node__o:after {
  width: 1px;
  height: 18px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./packages/styles/src/styles.scss":
/*!*****************************************!*\
  !*** ./packages/styles/src/styles.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./packages/styles/src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./packages/core/src/animation/animation-base.ts":
/*!*******************************************************!*\
  !*** ./packages/core/src/animation/animation-base.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationBase: () => (/* binding */ AnimationBase)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./packages/core/src/utils/index.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./packages/core/src/mixins/index.ts");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../observable */ "./packages/core/src/observable.ts");
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

/***/ "./packages/core/src/animation/animation.ts":
/*!**************************************************!*\
  !*** ./packages/core/src/animation/animation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var _animation_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-base */ "./packages/core/src/animation/animation-base.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./packages/core/src/mixins/index.ts");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track */ "./packages/core/src/animation/track.ts");
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
        return this;
    };
    Animation.prototype.pause = function () {
        this._isPlaying = false;
        this.trigger('paused', this.shape);
        this.shape.trigger('animation:paused', this);
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

/***/ "./packages/core/src/animation/easings.ts":
/*!************************************************!*\
  !*** ./packages/core/src/animation/easings.ts ***!
  \************************************************/
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

/***/ "./packages/core/src/animation/index.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/animation/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_1__.Animation),
/* harmony export */   Keyframe: () => (/* reexport safe */ _keyframe__WEBPACK_IMPORTED_MODULE_3__.Keyframe),
/* harmony export */   Timeline: () => (/* reexport safe */ _timeline__WEBPACK_IMPORTED_MODULE_0__.Timeline),
/* harmony export */   Track: () => (/* reexport safe */ _track__WEBPACK_IMPORTED_MODULE_2__.Track),
/* harmony export */   easings: () => (/* reexport safe */ _easings__WEBPACK_IMPORTED_MODULE_4__.easings)
/* harmony export */ });
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline */ "./packages/core/src/animation/timeline.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./packages/core/src/animation/animation.ts");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track */ "./packages/core/src/animation/track.ts");
/* harmony import */ var _keyframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyframe */ "./packages/core/src/animation/keyframe.ts");
/* harmony import */ var _easings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./easings */ "./packages/core/src/animation/easings.ts");







/***/ }),

/***/ "./packages/core/src/animation/keyframe.ts":
/*!*************************************************!*\
  !*** ./packages/core/src/animation/keyframe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keyframe: () => (/* binding */ Keyframe)
/* harmony export */ });
/* harmony import */ var _animation_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-base */ "./packages/core/src/animation/animation-base.ts");
/* harmony import */ var _easings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easings */ "./packages/core/src/animation/easings.ts");
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
        return this.startValue + (this.endValue - this.startValue) * t;
    };
    Keyframe.prototype.toJSON = function () {
        return {
            to: this.to,
            value: this.endValue,
            easing: 'linear'
        };
    };
    return Keyframe;
}(_animation_base__WEBPACK_IMPORTED_MODULE_0__.AnimationBase));



/***/ }),

/***/ "./packages/core/src/animation/timeline.ts":
/*!*************************************************!*\
  !*** ./packages/core/src/animation/timeline.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timeline: () => (/* binding */ Timeline)
/* harmony export */ });
/* harmony import */ var _animation_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-base */ "./packages/core/src/animation/animation-base.ts");
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
    return Timeline;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_animation_base__WEBPACK_IMPORTED_MODULE_0__.AnimationBase)));



/***/ }),

/***/ "./packages/core/src/animation/track.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/animation/track.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Track: () => (/* binding */ Track)
/* harmony export */ });
/* harmony import */ var _animation_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-base */ "./packages/core/src/animation/animation-base.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./packages/core/src/mixins/index.ts");
/* harmony import */ var _keyframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyframe */ "./packages/core/src/animation/keyframe.ts");
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
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive */ "./packages/core/src/interactive/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./packages/core/src/animation/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./packages/core/src/utils/index.ts");
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
        _this.tagName = 'svg';
        _this.xmlns = 'http://www.w3.org/2000/svg';
        _this.preserveAspectRatio = 'xMidYMid slice';
        _this.className = 'grafik-canvas';
        _this.width = 0;
        _this.height = 0;
        _this.viewportMatrix = new _maths__WEBPACK_IMPORTED_MODULE_4__.Matrix();
        // protected drawingAreaMatrix = new Matrix();
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
        _this.set(params, true);
        _this.trigger('init', _this);
        return _this;
    }
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
    Canvas.prototype._onPointerStartInDrawMode = function (e) { };
    Canvas.prototype._onPointerMoveInDrawMode = function (e) { };
    Canvas.prototype._onPointerEndInDrawMode = function (e) { };
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

/***/ "./packages/core/src/defs/clip-path.ts":
/*!*********************************************!*\
  !*** ./packages/core/src/defs/clip-path.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipPath: () => (/* binding */ ClipPath)
/* harmony export */ });
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definition */ "./packages/core/src/defs/definition.ts");
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

/***/ "./packages/core/src/defs/color-stop.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/defs/color-stop.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorStop: () => (/* binding */ ColorStop)
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

/***/ "./packages/core/src/defs/definition.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/defs/definition.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Definition: () => (/* binding */ Definition)
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

/***/ "./packages/core/src/defs/gradient.ts":
/*!********************************************!*\
  !*** ./packages/core/src/defs/gradient.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gradient: () => (/* binding */ Gradient)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./packages/core/src/defs/index.ts");
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

/***/ "./packages/core/src/defs/index.ts":
/*!*****************************************!*\
  !*** ./packages/core/src/defs/index.ts ***!
  \*****************************************/
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
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definition */ "./packages/core/src/defs/definition.ts");
/* harmony import */ var _clip_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clip-path */ "./packages/core/src/defs/clip-path.ts");
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/defs/gradient.ts");
/* harmony import */ var _linear_gradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear-gradient */ "./packages/core/src/defs/linear-gradient.ts");
/* harmony import */ var _radial_gradient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radial-gradient */ "./packages/core/src/defs/radial-gradient.ts");
/* harmony import */ var _color_stop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-stop */ "./packages/core/src/defs/color-stop.ts");
/* harmony import */ var _pattern__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern */ "./packages/core/src/defs/pattern.ts");









/***/ }),

/***/ "./packages/core/src/defs/linear-gradient.ts":
/*!***************************************************!*\
  !*** ./packages/core/src/defs/linear-gradient.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearGradient: () => (/* binding */ LinearGradient)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/defs/gradient.ts");
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

/***/ "./packages/core/src/defs/pattern.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/defs/pattern.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pattern: () => (/* binding */ Pattern)
/* harmony export */ });
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definition */ "./packages/core/src/defs/definition.ts");
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

/***/ "./packages/core/src/defs/radial-gradient.ts":
/*!***************************************************!*\
  !*** ./packages/core/src/defs/radial-gradient.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadialGradient: () => (/* binding */ RadialGradient)
/* harmony export */ });
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/defs/gradient.ts");
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

/***/ "./packages/core/src/element.ts":
/*!**************************************!*\
  !*** ./packages/core/src/element.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: () => (/* binding */ Element)
/* harmony export */ });
/* harmony import */ var _mixins_statueful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/statueful */ "./packages/core/src/mixins/statueful.ts");
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable */ "./packages/core/src/observable.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./packages/core/src/utils/index.ts");
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

/***/ "./packages/core/src/index.ts":
/*!************************************!*\
  !*** ./packages/core/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   Gradient: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_4__.Gradient),
/* harmony export */   GradientControl: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_5__.GradientControl),
/* harmony export */   Group: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Group),
/* harmony export */   HorizontalLineCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.HorizontalLineCurve),
/* harmony export */   Image: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Image),
/* harmony export */   Keyframe: () => (/* reexport safe */ _animation__WEBPACK_IMPORTED_MODULE_7__.Keyframe),
/* harmony export */   LineCurve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_6__.LineCurve),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_4__.LinearGradient),
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
/* harmony export */   Rect: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_3__.Rect),
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
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable */ "./packages/core/src/observable.ts");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./packages/core/src/element.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ "./packages/core/src/canvas.ts");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes */ "./packages/core/src/shapes/index.ts");
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defs */ "./packages/core/src/defs/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive */ "./packages/core/src/interactive/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation */ "./packages/core/src/animation/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./packages/core/src/utils/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types */ "./packages/core/src/types/index.ts");
// Core



// Shapes

// Definitions

// Interactive

// Maths

// Animation

// Utils

// Types



/***/ }),

/***/ "./packages/core/src/interactive/control-node.ts":
/*!*******************************************************!*\
  !*** ./packages/core/src/interactive/control-node.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlNode: () => (/* binding */ ControlNode)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./packages/core/src/element.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./packages/core/src/mixins/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.ts");
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

/***/ "./packages/core/src/interactive/control-nodes/angle-control-node.ts":
/*!***************************************************************************!*\
  !*** ./packages/core/src/interactive/control-nodes/angle-control-node.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleControlNode: () => (/* binding */ AngleControlNode)
/* harmony export */ });
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../control-node */ "./packages/core/src/interactive/control-node.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./packages/core/src/utils/index.ts");
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

/***/ "./packages/core/src/interactive/control-nodes/index.ts":
/*!**************************************************************!*\
  !*** ./packages/core/src/interactive/control-nodes/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleControlNode: () => (/* reexport safe */ _angle_control_node__WEBPACK_IMPORTED_MODULE_0__.AngleControlNode),
/* harmony export */   OriginControlNode: () => (/* reexport safe */ _origin_control_node__WEBPACK_IMPORTED_MODULE_1__.OriginControlNode),
/* harmony export */   ScaleControlNode: () => (/* reexport safe */ _scale_control_node__WEBPACK_IMPORTED_MODULE_2__.ScaleControlNode)
/* harmony export */ });
/* harmony import */ var _angle_control_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angle-control-node */ "./packages/core/src/interactive/control-nodes/angle-control-node.ts");
/* harmony import */ var _origin_control_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./origin-control-node */ "./packages/core/src/interactive/control-nodes/origin-control-node.ts");
/* harmony import */ var _scale_control_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale-control-node */ "./packages/core/src/interactive/control-nodes/scale-control-node.ts");





/***/ }),

/***/ "./packages/core/src/interactive/control-nodes/origin-control-node.ts":
/*!****************************************************************************!*\
  !*** ./packages/core/src/interactive/control-nodes/origin-control-node.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OriginControlNode: () => (/* binding */ OriginControlNode)
/* harmony export */ });
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../control-node */ "./packages/core/src/interactive/control-node.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./packages/core/src/utils/index.ts");
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

/***/ "./packages/core/src/interactive/control-nodes/scale-control-node.ts":
/*!***************************************************************************!*\
  !*** ./packages/core/src/interactive/control-nodes/scale-control-node.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScaleControlNode: () => (/* binding */ ScaleControlNode)
/* harmony export */ });
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../control-node */ "./packages/core/src/interactive/control-node.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./packages/core/src/utils/index.ts");
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

/***/ "./packages/core/src/interactive/control.ts":
/*!**************************************************!*\
  !*** ./packages/core/src/interactive/control.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./packages/core/src/element.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./packages/core/src/mixins/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.ts");
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

/***/ "./packages/core/src/interactive/controls/gradient-control.ts":
/*!********************************************************************!*\
  !*** ./packages/core/src/interactive/controls/gradient-control.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GradientControl: () => (/* binding */ GradientControl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/interactive/index.ts");
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

/***/ "./packages/core/src/interactive/controls/index.ts":
/*!*********************************************************!*\
  !*** ./packages/core/src/interactive/controls/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GradientControl: () => (/* reexport safe */ _gradient_control__WEBPACK_IMPORTED_MODULE_3__.GradientControl),
/* harmony export */   PathControl: () => (/* reexport safe */ _path_control__WEBPACK_IMPORTED_MODULE_1__.PathControl),
/* harmony export */   TextControl: () => (/* reexport safe */ _text_control__WEBPACK_IMPORTED_MODULE_2__.TextControl),
/* harmony export */   TransformControl: () => (/* reexport safe */ _transform_control__WEBPACK_IMPORTED_MODULE_0__.TransformControl)
/* harmony export */ });
/* harmony import */ var _transform_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform-control */ "./packages/core/src/interactive/controls/transform-control.ts");
/* harmony import */ var _path_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-control */ "./packages/core/src/interactive/controls/path-control.ts");
/* harmony import */ var _text_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-control */ "./packages/core/src/interactive/controls/text-control.ts");
/* harmony import */ var _gradient_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gradient-control */ "./packages/core/src/interactive/controls/gradient-control.ts");






/***/ }),

/***/ "./packages/core/src/interactive/controls/path-control.ts":
/*!****************************************************************!*\
  !*** ./packages/core/src/interactive/controls/path-control.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PathControl: () => (/* binding */ PathControl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/interactive/index.ts");
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

/***/ "./packages/core/src/interactive/controls/text-control.ts":
/*!****************************************************************!*\
  !*** ./packages/core/src/interactive/controls/text-control.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextControl: () => (/* binding */ TextControl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/interactive/index.ts");
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

/***/ "./packages/core/src/interactive/controls/transform-control.ts":
/*!*********************************************************************!*\
  !*** ./packages/core/src/interactive/controls/transform-control.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransformControl: () => (/* binding */ TransformControl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/interactive/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils */ "./packages/core/src/utils/index.ts");
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

/***/ "./packages/core/src/interactive/index.ts":
/*!************************************************!*\
  !*** ./packages/core/src/interactive/index.ts ***!
  \************************************************/
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
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector */ "./packages/core/src/interactive/selector.ts");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control */ "./packages/core/src/interactive/control.ts");
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-node */ "./packages/core/src/interactive/control-node.ts");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./packages/core/src/interactive/controls/index.ts");
/* harmony import */ var _control_nodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-nodes */ "./packages/core/src/interactive/control-nodes/index.ts");







/***/ }),

/***/ "./packages/core/src/interactive/selector.ts":
/*!***************************************************!*\
  !*** ./packages/core/src/interactive/selector.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Selector: () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./packages/core/src/element.ts");
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

/***/ "./packages/core/src/loaders/image-loader.ts":
/*!***************************************************!*\
  !*** ./packages/core/src/loaders/image-loader.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageLoader: () => (/* binding */ ImageLoader)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./packages/core/src/loaders/loader.ts");
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

var ImageLoader = /** @class */ (function (_super) {
    __extends(ImageLoader, _super);
    function ImageLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageLoader.prototype.fromURL = function (url) {
        var _this = this;
        var img = new Image();
        img.src = url;
        img.onload = function () {
            _this.trigger('loaded', img);
        };
        return this;
    };
    return ImageLoader;
}(_loader__WEBPACK_IMPORTED_MODULE_0__.Loader));



/***/ }),

/***/ "./packages/core/src/loaders/index.ts":
/*!********************************************!*\
  !*** ./packages/core/src/loaders/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageLoader: () => (/* reexport safe */ _image_loader__WEBPACK_IMPORTED_MODULE_3__.ImageLoader),
/* harmony export */   Loader: () => (/* reexport safe */ _loader__WEBPACK_IMPORTED_MODULE_0__.Loader),
/* harmony export */   LottieLoader: () => (/* reexport safe */ _lottie_loader__WEBPACK_IMPORTED_MODULE_2__.LottieLoader),
/* harmony export */   SVGLoader: () => (/* reexport safe */ _svg_loader__WEBPACK_IMPORTED_MODULE_1__.SVGLoader)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./packages/core/src/loaders/loader.ts");
/* harmony import */ var _svg_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-loader */ "./packages/core/src/loaders/svg-loader.ts");
/* harmony import */ var _lottie_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lottie-loader */ "./packages/core/src/loaders/lottie-loader.ts");
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-loader */ "./packages/core/src/loaders/image-loader.ts");






/***/ }),

/***/ "./packages/core/src/loaders/loader.ts":
/*!*********************************************!*\
  !*** ./packages/core/src/loaders/loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../observable */ "./packages/core/src/observable.ts");
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

var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loader.prototype.fromURL = function (url) {
        return this;
    };
    Loader.prototype.fromString = function (string) {
        return this;
    };
    Loader.prototype.onLoad = function (callback) {
        return this.on('loaded', callback);
    };
    Loader.prototype.onError = function (callback) {
        return this;
    };
    return Loader;
}(_observable__WEBPACK_IMPORTED_MODULE_0__.Observable));



/***/ }),

/***/ "./packages/core/src/loaders/lottie-loader.ts":
/*!****************************************************!*\
  !*** ./packages/core/src/loaders/lottie-loader.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LottieLoader: () => (/* binding */ LottieLoader)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./packages/core/src/loaders/loader.ts");
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

var LottieLoader = /** @class */ (function (_super) {
    __extends(LottieLoader, _super);
    function LottieLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LottieLoader;
}(_loader__WEBPACK_IMPORTED_MODULE_0__.Loader));



/***/ }),

/***/ "./packages/core/src/loaders/svg-loader.ts":
/*!*************************************************!*\
  !*** ./packages/core/src/loaders/svg-loader.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGLoader: () => (/* binding */ SVGLoader)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./packages/core/src/loaders/loader.ts");
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

var SVGLoader = /** @class */ (function (_super) {
    __extends(SVGLoader, _super);
    function SVGLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SVGLoader;
}(_loader__WEBPACK_IMPORTED_MODULE_0__.Loader));



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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./packages/core/src/maths/index.ts");

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
        return (point.x >= this.min.x && point.x <= this.max.x &&
            point.y >= this.min.y && point.y <= this.max.y);
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
        return (this.min.isEqual(bBox.min) && this.max.isEqual(bBox.max));
    };
    BBox.prototype.isEmpty = function () {
        return (this.min.isEqual(this.max));
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
    Color.isColor = function (value) {
        return (Color.isHEX(value) || Color.isRGB(value) || Color.isColorName(value));
    };
    Color.isColorName = function (value) {
        return Color.isHEX(Color.colorNameMap[value]);
    };
    Color.isHEX = function (value) {
        var isHex = /^(#?)([a-f0-9]{3}){1,2}$/i.test(value);
        var isHexa = /^(#?)([a-f0-9]{8})$/i.test(value);
        return (isHex || isHexa);
    };
    Color.isRGB = function (value) {
        var isRgb = /^(rgb)[(]\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*[)]$/.test(value);
        var isRgba = /^(rgba)[(]\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*,\s*([\d.]+\s*)\s*[)]$/.test(value);
        return (isRgb || isRgba);
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

/***/ "./packages/core/src/maths/curve-path.ts":
/*!***********************************************!*\
  !*** ./packages/core/src/maths/curve-path.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurvePath: () => (/* binding */ CurvePath)
/* harmony export */ });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./packages/core/src/maths/point.ts");
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbox */ "./packages/core/src/maths/bbox.ts");
/* harmony import */ var _curves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curves */ "./packages/core/src/maths/curves/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils */ "./packages/core/src/utils/index.ts");




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

/***/ "./packages/core/src/maths/curve.ts":
/*!******************************************!*\
  !*** ./packages/core/src/maths/curve.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Curve: () => (/* binding */ Curve)
/* harmony export */ });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./packages/core/src/maths/point.ts");
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbox */ "./packages/core/src/maths/bbox.ts");


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
        var isRelative = (curve[0] === curve[0].toLowerCase());
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
            if (point = this['p' + p]) {
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

/***/ "./packages/core/src/maths/curves/arc-curve.ts":
/*!*****************************************************!*\
  !*** ./packages/core/src/maths/curves/arc-curve.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcCurve: () => (/* binding */ ArcCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/maths/index.ts");
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

/***/ "./packages/core/src/maths/curves/close-curve.ts":
/*!*******************************************************!*\
  !*** ./packages/core/src/maths/curves/close-curve.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseCurve: () => (/* binding */ CloseCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/maths/index.ts");
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

/***/ "./packages/core/src/maths/curves/cubic-bezier-curve.ts":
/*!**************************************************************!*\
  !*** ./packages/core/src/maths/curves/cubic-bezier-curve.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CubicBezierCurve: () => (/* binding */ CubicBezierCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/maths/index.ts");
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

/***/ "./packages/core/src/maths/curves/horizontal-line-curve.ts":
/*!*****************************************************************!*\
  !*** ./packages/core/src/maths/curves/horizontal-line-curve.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontalLineCurve: () => (/* binding */ HorizontalLineCurve)
/* harmony export */ });
/* harmony import */ var _line_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-curve */ "./packages/core/src/maths/curves/line-curve.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../point */ "./packages/core/src/maths/point.ts");
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
        var isRelative = (curve[0] === curve[0].toLowerCase());
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
        return this.command + ' ' + this.p1.x;
    };
    return HorizontalLineCurve;
}(_line_curve__WEBPACK_IMPORTED_MODULE_0__.LineCurve));



/***/ }),

/***/ "./packages/core/src/maths/curves/index.ts":
/*!*************************************************!*\
  !*** ./packages/core/src/maths/curves/index.ts ***!
  \*************************************************/
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
/* harmony import */ var _move_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move-curve */ "./packages/core/src/maths/curves/move-curve.ts");
/* harmony import */ var _line_curve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-curve */ "./packages/core/src/maths/curves/line-curve.ts");
/* harmony import */ var _horizontal_line_curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal-line-curve */ "./packages/core/src/maths/curves/horizontal-line-curve.ts");
/* harmony import */ var _vertical_line_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vertical-line-curve */ "./packages/core/src/maths/curves/vertical-line-curve.ts");
/* harmony import */ var _arc_curve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arc-curve */ "./packages/core/src/maths/curves/arc-curve.ts");
/* harmony import */ var _quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quadratic-bezier-curve */ "./packages/core/src/maths/curves/quadratic-bezier-curve.ts");
/* harmony import */ var _cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cubic-bezier-curve */ "./packages/core/src/maths/curves/cubic-bezier-curve.ts");
/* harmony import */ var _smooth_quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smooth-quadratic-bezier-curve */ "./packages/core/src/maths/curves/smooth-quadratic-bezier-curve.ts");
/* harmony import */ var _smooth_cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./smooth-cubic-bezier-curve */ "./packages/core/src/maths/curves/smooth-cubic-bezier-curve.ts");
/* harmony import */ var _close_curve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./close-curve */ "./packages/core/src/maths/curves/close-curve.ts");












/***/ }),

/***/ "./packages/core/src/maths/curves/line-curve.ts":
/*!******************************************************!*\
  !*** ./packages/core/src/maths/curves/line-curve.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineCurve: () => (/* binding */ LineCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils */ "./packages/core/src/utils/index.ts");
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

/***/ "./packages/core/src/maths/curves/move-curve.ts":
/*!******************************************************!*\
  !*** ./packages/core/src/maths/curves/move-curve.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoveCurve: () => (/* binding */ MoveCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/maths/index.ts");
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

/***/ "./packages/core/src/maths/curves/quadratic-bezier-curve.ts":
/*!******************************************************************!*\
  !*** ./packages/core/src/maths/curves/quadratic-bezier-curve.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuadraticBezierCurve: () => (/* binding */ QuadraticBezierCurve)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ */ "./packages/core/src/maths/index.ts");
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

/***/ "./packages/core/src/maths/curves/smooth-cubic-bezier-curve.ts":
/*!*********************************************************************!*\
  !*** ./packages/core/src/maths/curves/smooth-cubic-bezier-curve.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmoothCubicBezierCurve: () => (/* binding */ SmoothCubicBezierCurve)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier-curve */ "./packages/core/src/maths/curves/cubic-bezier-curve.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../point */ "./packages/core/src/maths/point.ts");
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

/***/ "./packages/core/src/maths/curves/smooth-quadratic-bezier-curve.ts":
/*!*************************************************************************!*\
  !*** ./packages/core/src/maths/curves/smooth-quadratic-bezier-curve.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmoothQuadraticBezierCurve: () => (/* binding */ SmoothQuadraticBezierCurve)
/* harmony export */ });
/* harmony import */ var _quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quadratic-bezier-curve */ "./packages/core/src/maths/curves/quadratic-bezier-curve.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../point */ "./packages/core/src/maths/point.ts");
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

/***/ "./packages/core/src/maths/curves/vertical-line-curve.ts":
/*!***************************************************************!*\
  !*** ./packages/core/src/maths/curves/vertical-line-curve.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerticalLineCurve: () => (/* binding */ VerticalLineCurve)
/* harmony export */ });
/* harmony import */ var _line_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-curve */ "./packages/core/src/maths/curves/line-curve.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../point */ "./packages/core/src/maths/point.ts");
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
        var isRelative = (curve[0] === curve[0].toLowerCase());
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
        return this.command + ' ' + this.p1.y;
    };
    return VerticalLineCurve;
}(_line_curve__WEBPACK_IMPORTED_MODULE_0__.LineCurve));



/***/ }),

/***/ "./packages/core/src/maths/index.ts":
/*!******************************************!*\
  !*** ./packages/core/src/maths/index.ts ***!
  \******************************************/
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
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbox */ "./packages/core/src/maths/bbox.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./packages/core/src/maths/color.ts");
/* harmony import */ var _curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve */ "./packages/core/src/maths/curve.ts");
/* harmony import */ var _curves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curves */ "./packages/core/src/maths/curves/index.ts");
/* harmony import */ var _curve_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./curve-path */ "./packages/core/src/maths/curve-path.ts");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matrix */ "./packages/core/src/maths/matrix.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point */ "./packages/core/src/maths/point.ts");









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
        ;
        this.y = x * sin + y * cos + center.y;
        ;
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
        return (this.x * point.x + this.y * point.y);
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
        return (this.x === point.x && this.y === point.y);
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
            this.children = [];
            this.add(children, silent);
            return this;
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

/***/ "./packages/core/src/mixins/element-collection.ts":
/*!********************************************************!*\
  !*** ./packages/core/src/mixins/element-collection.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementCollection: () => (/* binding */ ElementCollection)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./packages/core/src/mixins/collection.ts");
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

/***/ "./packages/core/src/mixins/index.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/mixins/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* reexport safe */ _collection__WEBPACK_IMPORTED_MODULE_0__.Collection),
/* harmony export */   ElementCollection: () => (/* reexport safe */ _element_collection__WEBPACK_IMPORTED_MODULE_1__.ElementCollection),
/* harmony export */   Stateful: () => (/* reexport safe */ _statueful__WEBPACK_IMPORTED_MODULE_2__.Stateful)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./packages/core/src/mixins/collection.ts");
/* harmony import */ var _element_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-collection */ "./packages/core/src/mixins/element-collection.ts");
/* harmony import */ var _statueful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statueful */ "./packages/core/src/mixins/statueful.ts");





/***/ }),

/***/ "./packages/core/src/mixins/statueful.ts":
/*!***********************************************!*\
  !*** ./packages/core/src/mixins/statueful.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stateful: () => (/* binding */ Stateful)
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
                this[key] = value;
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

/***/ "./packages/core/src/observable.ts":
/*!*****************************************!*\
  !*** ./packages/core/src/observable.ts ***!
  \*****************************************/
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

/***/ "./packages/core/src/shapes/circle.ts":
/*!********************************************!*\
  !*** ./packages/core/src/shapes/circle.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Circle: () => (/* binding */ Circle)
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

/***/ "./packages/core/src/shapes/ellipse.ts":
/*!*********************************************!*\
  !*** ./packages/core/src/shapes/ellipse.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ellipse: () => (/* binding */ Ellipse)
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

/***/ "./packages/core/src/shapes/image.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/shapes/image.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rect */ "./packages/core/src/shapes/rect.ts");
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../loaders */ "./packages/core/src/loaders/index.ts");
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
        _this.loader = new _loaders__WEBPACK_IMPORTED_MODULE_1__.ImageLoader();
        _this.init(params);
        _this.setImage(_this.href);
        return _this;
    }
    Image.prototype.setImage = function (src) {
        var _this = this;
        this.loader.fromURL(src).onLoad(function (_a) {
            var width = _a.width, height = _a.height;
            return _this.set({
                width: width,
                height: height
            });
        });
        return this;
    };
    Image.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this).concat(['href']);
    };
    return Image;
}(_rect__WEBPACK_IMPORTED_MODULE_0__.Rect));



/***/ }),

/***/ "./packages/core/src/shapes/index.ts":
/*!*******************************************!*\
  !*** ./packages/core/src/shapes/index.ts ***!
  \*******************************************/
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
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./packages/core/src/shapes/shape.ts");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rect */ "./packages/core/src/shapes/rect.ts");
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./circle */ "./packages/core/src/shapes/circle.ts");
/* harmony import */ var _ellipse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ellipse */ "./packages/core/src/shapes/ellipse.ts");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path */ "./packages/core/src/shapes/path.ts");
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polygon */ "./packages/core/src/shapes/polygon.ts");
/* harmony import */ var _polyline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./polyline */ "./packages/core/src/shapes/polyline.ts");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text */ "./packages/core/src/shapes/text.ts");
/* harmony import */ var _text_path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./text-path */ "./packages/core/src/shapes/text-path.ts");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image */ "./packages/core/src/shapes/image.ts");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./group */ "./packages/core/src/shapes/group.ts");













/***/ }),

/***/ "./packages/core/src/shapes/path.ts":
/*!******************************************!*\
  !*** ./packages/core/src/shapes/path.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Path: () => (/* binding */ Path)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./packages/core/src/shapes/shape.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../interactive */ "./packages/core/src/interactive/index.ts");
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
    return Path;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape));



/***/ }),

/***/ "./packages/core/src/shapes/polygon.ts":
/*!*********************************************!*\
  !*** ./packages/core/src/shapes/polygon.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Polygon: () => (/* binding */ Polygon)
/* harmony export */ });
/* harmony import */ var _polyline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyline */ "./packages/core/src/shapes/polyline.ts");
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

/***/ "./packages/core/src/shapes/polyline.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/shapes/polyline.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Polyline: () => (/* binding */ Polyline)
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
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../interactive */ "./packages/core/src/interactive/index.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../animation */ "./packages/core/src/animation/index.ts");
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

/***/ "./packages/core/src/shapes/text-path.ts":
/*!***********************************************!*\
  !*** ./packages/core/src/shapes/text-path.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextPath: () => (/* binding */ TextPath)
/* harmony export */ });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./packages/core/src/shapes/text.ts");
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

/***/ "./packages/core/src/shapes/text.ts":
/*!******************************************!*\
  !*** ./packages/core/src/shapes/text.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./packages/core/src/shapes/shape.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../interactive */ "./packages/core/src/interactive/index.ts");
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

/***/ "./packages/core/src/types/animation.ts":
/*!**********************************************!*\
  !*** ./packages/core/src/types/animation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./packages/core/src/types/index.ts":
/*!******************************************!*\
  !*** ./packages/core/src/types/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./packages/core/src/types/animation.ts");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./packages/core/src/types/math.ts");
/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixin */ "./packages/core/src/types/mixin.ts");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./packages/core/src/types/object.ts");






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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/core/src/utils/constants.ts");
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
    return Math.round(value * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits) || 0;
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

/***/ "./packages/core/src/utils/index.ts":
/*!******************************************!*\
  !*** ./packages/core/src/utils/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PIBY180: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.PIBY180),
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/core/src/utils/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./packages/core/src/utils/functions.ts");




/***/ }),

/***/ "./packages/react/src/components/canvas-provider.tsx":
/*!***********************************************************!*\
  !*** ./packages/react/src/components/canvas-provider.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvasProvider: () => (/* binding */ CanvasProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contexts */ "./packages/react/src/contexts.ts");
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




var CanvasProvider = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var canvas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () { return new _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__.Canvas(props); }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_3__.CanvasContext.Provider, { value: canvas, children: children }));
};



/***/ }),

/***/ "./packages/react/src/components/elements/canvas.tsx":
/*!***********************************************************!*\
  !*** ./packages/react/src/components/elements/canvas.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../contexts */ "./packages/react/src/contexts.ts");
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




var SVG = function (_a) {
    var children = _a.children, canvas = _a.canvas, props = _a.props;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(canvas.getAttributes()), attributes = _b[0], setAttributes = _b[1];
    var onCanvasSet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        var _a;
        setAttributes(canvas.getAttributes());
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, canvas);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        canvas.on('set', onCanvasSet);
        // Usually, I do not love setTimeout() for any reason like this,
        // but I still didn't find any solution to re-render the parent component: <Wrapper>
        // when we set width, and height props for <Canvas> component.
        setTimeout(function () { return canvas.set(props); }, 0);
        return function () {
            canvas.off('set', onCanvasSet);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        canvas.set(props);
    }, [props]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", __assign({}, attributes, { children: children })));
};
var Canvas = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var canvas = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCanvasContext)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_3__.CollectionContext.Provider, { value: canvas, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SVG, { canvas: canvas, props: props, children: children }) }));
};



/***/ }),

/***/ "./packages/react/src/components/elements/def-base.tsx":
/*!*************************************************************!*\
  !*** ./packages/react/src/components/elements/def-base.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefBase: () => (/* binding */ DefBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");
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


var DefBase = function (_a) {
    var TagName = _a.TagName, def = _a.def;
    var _b = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useElement)(def, function (def) {
        var _a;
        return ({
            attributes: def.getAttributes(),
            isCollection: def.isCollection,
            mapDefs: (_a = def.mapChildren) === null || _a === void 0 ? void 0 : _a.bind(def)
        });
    }, 'set'), attributes = _b.attributes, isCollection = _b.isCollection, mapDefs = _b.mapDefs;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TagName, __assign({}, attributes, { children: isCollection && mapDefs(function (child) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DefBase, { TagName: child.get('tagName'), def: child }, child.id)); }) })));
};



/***/ }),

/***/ "./packages/react/src/components/elements/definitions.tsx":
/*!****************************************************************!*\
  !*** ./packages/react/src/components/elements/definitions.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipPath: () => (/* binding */ ClipPath),
/* harmony export */   LinearGradient: () => (/* binding */ LinearGradient),
/* harmony export */   Pattern: () => (/* binding */ Pattern),
/* harmony export */   RadialGradient: () => (/* binding */ RadialGradient)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _def_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./def-base */ "./packages/react/src/components/elements/def-base.tsx");
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


var withTagName = function (tagName) { return function (props) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_def_base__WEBPACK_IMPORTED_MODULE_1__.DefBase, __assign({ TagName: tagName }, props))); }; };
var LinearGradient = withTagName('linearGradient');
var RadialGradient = withTagName('radialGradient');
var Pattern = withTagName('pattern');
var ClipPath = withTagName('clipPath');



/***/ }),

/***/ "./packages/react/src/components/elements/defs.tsx":
/*!*********************************************************!*\
  !*** ./packages/react/src/components/elements/defs.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Defs: () => (/* binding */ Defs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");
/* harmony import */ var _def_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./def-base */ "./packages/react/src/components/elements/def-base.tsx");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var Defs = function () {
    var canvas = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCanvasContext)();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(canvas.getDefs()), defs = _a[0], setDefs = _a[1];
    var onSetDefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        setDefs(__spreadArray([], canvas.getDefs(), true));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        canvas.on('defs:added', onSetDefs);
        return function () {
            canvas.off('defs:added', onSetDefs);
        };
    }, []);
    if (!defs.length) {
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: defs.map(function (def) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_def_base__WEBPACK_IMPORTED_MODULE_3__.DefBase, { TagName: def.get('tagName'), def: def }, def.id)); }) }));
};



/***/ }),

/***/ "./packages/react/src/components/elements/group.tsx":
/*!**********************************************************!*\
  !*** ./packages/react/src/components/elements/group.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Group: () => (/* binding */ ReactGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../contexts */ "./packages/react/src/contexts.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");
/* harmony import */ var _shape_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shape-base */ "./packages/react/src/components/elements/shape-base.tsx");
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






var ReactGroup = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var collection = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useCollectionContext)();
    var group = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () { return new _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__.Group(); }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        collection.add(group);
        return function () {
            collection.remove(group);
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_3__.CollectionContext.Provider, { value: group, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shape_base__WEBPACK_IMPORTED_MODULE_5__.ShapeBase, { TagName: 'g', shape: group, props: props, children: children }) }));
};



/***/ }),

/***/ "./packages/react/src/components/elements/index.ts":
/*!*********************************************************!*\
  !*** ./packages/react/src/components/elements/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas),
/* harmony export */   Circle: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_4__.Circle),
/* harmony export */   ClipPath: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.ClipPath),
/* harmony export */   Defs: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_1__.Defs),
/* harmony export */   Ellipse: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_4__.Ellipse),
/* harmony export */   Group: () => (/* reexport safe */ _group__WEBPACK_IMPORTED_MODULE_3__.Group),
/* harmony export */   Image: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_4__.Image),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.LinearGradient),
/* harmony export */   Path: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_4__.Path),
/* harmony export */   Pattern: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.Pattern),
/* harmony export */   Polygon: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_4__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_4__.Polyline),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.RadialGradient),
/* harmony export */   Rect: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_4__.Rect),
/* harmony export */   ShapeTree: () => (/* reexport safe */ _shape_tree__WEBPACK_IMPORTED_MODULE_6__.ShapeTree),
/* harmony export */   Text: () => (/* reexport safe */ _text__WEBPACK_IMPORTED_MODULE_5__.Text)
/* harmony export */ });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./packages/react/src/components/elements/canvas.tsx");
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defs */ "./packages/react/src/components/elements/defs.tsx");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ "./packages/react/src/components/elements/definitions.tsx");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group */ "./packages/react/src/components/elements/group.tsx");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shapes */ "./packages/react/src/components/elements/shapes.tsx");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./packages/react/src/components/elements/text.tsx");
/* harmony import */ var _shape_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shape-tree */ "./packages/react/src/components/elements/shape-tree.tsx");









/***/ }),

/***/ "./packages/react/src/components/elements/shape-base.tsx":
/*!***************************************************************!*\
  !*** ./packages/react/src/components/elements/shape-base.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShapeBase: () => (/* binding */ ShapeBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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


// This component should be optimized,
// because it renders twice, when it gets new props.
var ShapeBase = function (_a) {
    var shape = _a.shape, TagName = _a.TagName, props = _a.props, children = _a.children;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(shape.getWrapperAttributes()), wrapperAttributes = _b[0], setWrapperAttributes = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(shape.getAttributes()), attributes = _c[0], setAttributes = _c[1];
    var onShapeSet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        var _a;
        setWrapperAttributes(shape.getWrapperAttributes());
        setAttributes(shape.getAttributes());
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, shape);
    }, [props.onChange]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        shape.on('set', onShapeSet);
        return function () {
            shape.off('set', onShapeSet);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        // How to optimize this?
        // When we set silent to true, the component can't updated from props.
        // When we leave it false, the component updated two times.
        shape.set(props /* , true */);
    }, [props]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", __assign({}, wrapperAttributes, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TagName, __assign({}, attributes, { children: children })) })));
};



/***/ }),

/***/ "./packages/react/src/components/elements/shape-tree.tsx":
/*!***************************************************************!*\
  !*** ./packages/react/src/components/elements/shape-tree.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShapeTree: () => (/* binding */ ShapeTree)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape-base */ "./packages/react/src/components/elements/shape-base.tsx");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group */ "./packages/react/src/components/elements/group.tsx");
/* harmony import */ var _hocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../hocs */ "./packages/react/src/hocs.tsx");
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




var Shape = function (_a) {
    var tagName = _a.tagName, children = _a.children, props = __rest(_a, ["tagName", "children"]);
    var Component = tagName === 'g' ? _group__WEBPACK_IMPORTED_MODULE_2__.Group : (0,_hocs__WEBPACK_IMPORTED_MODULE_3__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_1__.ShapeBase, tagName);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, __assign({}, props, { children: children === null || children === void 0 ? void 0 : children.map(function (child) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Shape, __assign({}, child), child.id)); }) })));
};
var ShapeTree = function (_a) {
    var _b = _a.json, json = _b === void 0 ? [] : _b;
    return json.map(function (shape) { return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Shape, __assign({}, shape), shape.id); });
};



/***/ }),

/***/ "./packages/react/src/components/elements/shapes.tsx":
/*!***********************************************************!*\
  !*** ./packages/react/src/components/elements/shapes.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Circle: () => (/* binding */ Circle),
/* harmony export */   Ellipse: () => (/* binding */ Ellipse),
/* harmony export */   Image: () => (/* binding */ Image),
/* harmony export */   Path: () => (/* binding */ Path),
/* harmony export */   Polygon: () => (/* binding */ Polygon),
/* harmony export */   Polyline: () => (/* binding */ Polyline),
/* harmony export */   Rect: () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _shape_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape-base */ "./packages/react/src/components/elements/shape-base.tsx");
/* harmony import */ var _hocs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../hocs */ "./packages/react/src/hocs.tsx");


var Rect = (0,_hocs__WEBPACK_IMPORTED_MODULE_1__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_0__.ShapeBase, 'rect');
var Circle = (0,_hocs__WEBPACK_IMPORTED_MODULE_1__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_0__.ShapeBase, 'circle');
var Ellipse = (0,_hocs__WEBPACK_IMPORTED_MODULE_1__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_0__.ShapeBase, 'ellipse');
var Path = (0,_hocs__WEBPACK_IMPORTED_MODULE_1__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_0__.ShapeBase, 'path');
var Polygon = (0,_hocs__WEBPACK_IMPORTED_MODULE_1__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_0__.ShapeBase, 'polygon');
var Polyline = (0,_hocs__WEBPACK_IMPORTED_MODULE_1__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_0__.ShapeBase, 'polyline');
var Image = (0,_hocs__WEBPACK_IMPORTED_MODULE_1__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_0__.ShapeBase, 'image');



/***/ }),

/***/ "./packages/react/src/components/elements/text.tsx":
/*!*********************************************************!*\
  !*** ./packages/react/src/components/elements/text.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ ReactText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _hocs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../hocs */ "./packages/react/src/hocs.tsx");
/* harmony import */ var _shape_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shape-base */ "./packages/react/src/components/elements/shape-base.tsx");
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



var TextBase = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shape_base__WEBPACK_IMPORTED_MODULE_2__.ShapeBase, __assign({}, props, { children: props.props.text })));
};
var ReactText = (0,_hocs__WEBPACK_IMPORTED_MODULE_1__.withCollectionContext)(TextBase, 'text');



/***/ }),

/***/ "./packages/react/src/components/index.ts":
/*!************************************************!*\
  !*** ./packages/react/src/components/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Canvas),
/* harmony export */   CanvasProvider: () => (/* reexport safe */ _canvas_provider__WEBPACK_IMPORTED_MODULE_0__.CanvasProvider),
/* harmony export */   Circle: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Circle),
/* harmony export */   ClipPath: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.ClipPath),
/* harmony export */   Control: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_2__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_2__.ControlNode),
/* harmony export */   Defs: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Defs),
/* harmony export */   Ellipse: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Ellipse),
/* harmony export */   Group: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Group),
/* harmony export */   Image: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Image),
/* harmony export */   Interactive: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_2__.Interactive),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.LinearGradient),
/* harmony export */   Path: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Path),
/* harmony export */   Pattern: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Pattern),
/* harmony export */   Polygon: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Polyline),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.RadialGradient),
/* harmony export */   Rect: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Rect),
/* harmony export */   Selector: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_2__.Selector),
/* harmony export */   ShapeTree: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.ShapeTree),
/* harmony export */   Text: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Text),
/* harmony export */   Wrapper: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_2__.Wrapper)
/* harmony export */ });
/* harmony import */ var _canvas_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas-provider */ "./packages/react/src/components/canvas-provider.tsx");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./packages/react/src/components/elements/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive */ "./packages/react/src/components/interactive/index.ts");





/***/ }),

/***/ "./packages/react/src/components/interactive/control-node.tsx":
/*!********************************************************************!*\
  !*** ./packages/react/src/components/interactive/control-node.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlNode: () => (/* binding */ ControlNode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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

var ControlNode = function (_a) {
    var node = _a.node;
    var TagName = node.get('tagName');
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TagName, __assign({}, node.getAttributes(), { style: node.getStyle() })));
};



/***/ }),

/***/ "./packages/react/src/components/interactive/control.tsx":
/*!***************************************************************!*\
  !*** ./packages/react/src/components/interactive/control.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./packages/react/src/components/interactive/index.ts");
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



var Control = function (_a) {
    var control = _a.control;
    var TagName = control.get('tagName');
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(control.getAttributes()), attributes = _b[0], setAttributes = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(control.getStyle()), style = _c[0], setStyle = _c[1];
    var onShapeSet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        setAttributes(control.getAttributes());
        setStyle(control.getStyle());
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        control.shape.on('set', onShapeSet);
        control.shape.canvas.on('set', onShapeSet);
        return function () {
            control.shape.off('set', onShapeSet);
            control.shape.canvas.off('set', onShapeSet);
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TagName, __assign({}, attributes, { style: style, children: control.mapChildren(function (node) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ControlNode, { node: node }, node.id)); }) })));
};



/***/ }),

/***/ "./packages/react/src/components/interactive/index.ts":
/*!************************************************************!*\
  !*** ./packages/react/src/components/interactive/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_3__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _control_node__WEBPACK_IMPORTED_MODULE_4__.ControlNode),
/* harmony export */   Interactive: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_1__.Interactive),
/* harmony export */   Selector: () => (/* reexport safe */ _selector__WEBPACK_IMPORTED_MODULE_2__.Selector),
/* harmony export */   Wrapper: () => (/* reexport safe */ _wrapper__WEBPACK_IMPORTED_MODULE_0__.Wrapper)
/* harmony export */ });
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ "./packages/react/src/components/interactive/wrapper.tsx");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive */ "./packages/react/src/components/interactive/interactive.tsx");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selector */ "./packages/react/src/components/interactive/selector.tsx");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control */ "./packages/react/src/components/interactive/control.tsx");
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-node */ "./packages/react/src/components/interactive/control-node.tsx");







/***/ }),

/***/ "./packages/react/src/components/interactive/interactive.tsx":
/*!*******************************************************************!*\
  !*** ./packages/react/src/components/interactive/interactive.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Interactive: () => (/* binding */ Interactive)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./packages/react/src/components/interactive/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");




var Interactive = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'grafik-interactive' : _b, children = _a.children;
    var _c = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useCanvas)(function (canvas) { return ({
        shapes: canvas.getSelectedShapes(),
        onPointerStart: canvas.onPointerStart.bind(canvas),
        onPointerMove: canvas.onPointerMove.bind(canvas),
        onPointerEnd: canvas.onPointerEnd.bind(canvas),
        onWheel: canvas.onWheel.bind(canvas)
    }); }, 'shapes:selection:updated'), shapes = _c.shapes, onPointerStart = _c.onPointerStart, onPointerMove = _c.onPointerMove, onPointerEnd = _c.onPointerEnd, onWheel = _c.onWheel;
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    var onMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
        e.preventDefault();
        onPointerStart(e);
    }, []);
    var onMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
        onPointerMove(e);
    }, []);
    var onMouseUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
        onPointerEnd(e);
    }, []);
    var onMouseWheel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
        onWheel(e);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        var _a, _b, _c, _d;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.addEventListener('wheel', onMouseWheel);
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.addEventListener('touchstart', onMouseDown);
        (_c = ref.current) === null || _c === void 0 ? void 0 : _c.addEventListener('touchmove', onMouseMove);
        (_d = ref.current) === null || _d === void 0 ? void 0 : _d.addEventListener('touchend', onMouseUp);
        return function () {
            var _a, _b, _c, _d;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('wheel', onMouseWheel);
            (_b = ref.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('touchstart', onMouseDown);
            (_c = ref.current) === null || _c === void 0 ? void 0 : _c.removeEventListener('touchmove', onMouseMove);
            (_d = ref.current) === null || _d === void 0 ? void 0 : _d.removeEventListener('touchend', onMouseUp);
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ref: ref, className: className, onMouseDown: onMouseDown, onMouseMove: onMouseMove, onMouseUp: onMouseUp, onMouseLeave: onMouseUp, children: [shapes.map(function (shape) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Control, { control: shape.getControl() }, shape.id)); }), children] }));
};



/***/ }),

/***/ "./packages/react/src/components/interactive/selector.tsx":
/*!****************************************************************!*\
  !*** ./packages/react/src/components/interactive/selector.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Selector: () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");
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


var Selector = function () {
    var _a = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useCanvas)(function (canvas) { return ({
        style: canvas.getSelector().getStyle(),
        attributes: canvas.getSelector().getAttributes(),
        multiselection: canvas.multiselection
    }); }, 'selector:updated'), style = _a.style, attributes = _a.attributes, multiselection = _a.multiselection;
    return multiselection ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ style: style }, attributes))) : null;
};



/***/ }),

/***/ "./packages/react/src/components/interactive/wrapper.tsx":
/*!***************************************************************!*\
  !*** ./packages/react/src/components/interactive/wrapper.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wrapper: () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");



var Wrapper = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'grafik-wrapper' : _b, children = _a.children;
    var style = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCanvas)(function (canvas) { return ({
        style: canvas.get(['width', 'height'])
    }); }, 'set').style;
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var onResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        if (ref === null || ref === void 0 ? void 0 : ref.current) {
            var _a = ref.current.parentElement, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        window.addEventListener('resize', onResize);
        return function () {
            window.removeEventListener('resize', onResize);
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref, className: className, style: style, children: children }));
};



/***/ }),

/***/ "./packages/react/src/contexts.ts":
/*!****************************************!*\
  !*** ./packages/react/src/contexts.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CanvasContext: () => (/* binding */ CanvasContext),
/* harmony export */   CollectionContext: () => (/* binding */ CollectionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CanvasContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var CollectionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});



/***/ }),

/***/ "./packages/react/src/hocs.tsx":
/*!*************************************!*\
  !*** ./packages/react/src/hocs.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withCollectionContext: () => (/* binding */ withCollectionContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./packages/react/src/hooks.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./packages/react/src/utils/index.ts");
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




var withCollectionContext = function (Component, tagName) {
    return function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        var collection = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCollectionContext)();
        var shape = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
            var Shape = _utils__WEBPACK_IMPORTED_MODULE_3__.CLASSES[tagName];
            return new Shape(props);
        }, []);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
            collection.add(shape);
            return function () {
                collection.remove(shape);
            };
        }, []);
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, { TagName: tagName, shape: shape, props: props, children: children }));
    };
};



/***/ }),

/***/ "./packages/react/src/hooks.ts":
/*!*************************************!*\
  !*** ./packages/react/src/hooks.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCanvas: () => (/* binding */ useCanvas),
/* harmony export */   useCanvasContext: () => (/* binding */ useCanvasContext),
/* harmony export */   useCollection: () => (/* binding */ useCollection),
/* harmony export */   useCollectionContext: () => (/* binding */ useCollectionContext),
/* harmony export */   useElement: () => (/* binding */ useElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts */ "./packages/react/src/contexts.ts");



var useCanvasContext = function () { return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_2__.CanvasContext); };
var useCollectionContext = function () { return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_2__.CollectionContext); };
var _useCollector = function (collector, context, eventName) {
    if (eventName === void 0) { eventName = 'all'; }
    var collectedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (!collectedRef.current) {
        collectedRef.current = collector(context);
    }
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(collectedRef.current), collected = _a[0], setCollected = _a[1];
    var onEventEmitted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        var newCollected = collector(context);
        if (!(0,_grafikjs_core__WEBPACK_IMPORTED_MODULE_1__.isEqual)(collectedRef.current, newCollected)) {
            setCollected(newCollected);
            collectedRef.current = newCollected;
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        context.on(eventName, onEventEmitted);
        return function () {
            context.off(eventName, onEventEmitted);
        };
    }, []);
    return collected;
};
var useCanvas = function (collector, eventName) {
    var canvas = useCanvasContext();
    return _useCollector(collector, canvas, eventName);
};
var useCollection = function (collector, eventName) {
    var collection = useCollectionContext();
    return _useCollector(collector, collection, eventName);
};
var useElement = function (element, collector, eventName) {
    return _useCollector(collector, element, eventName);
};



/***/ }),

/***/ "./packages/react/src/index.ts":
/*!*************************************!*\
  !*** ./packages/react/src/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Canvas),
/* harmony export */   CanvasContext: () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_1__.CanvasContext),
/* harmony export */   CanvasProvider: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.CanvasProvider),
/* harmony export */   Circle: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Circle),
/* harmony export */   ClipPath: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ClipPath),
/* harmony export */   CollectionContext: () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_1__.CollectionContext),
/* harmony export */   Control: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ControlNode),
/* harmony export */   Defs: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Defs),
/* harmony export */   Ellipse: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Ellipse),
/* harmony export */   Group: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Group),
/* harmony export */   Image: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Image),
/* harmony export */   Interactive: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Interactive),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.LinearGradient),
/* harmony export */   Path: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Path),
/* harmony export */   Pattern: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Pattern),
/* harmony export */   Polygon: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Polyline),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.RadialGradient),
/* harmony export */   Rect: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Rect),
/* harmony export */   Selector: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Selector),
/* harmony export */   ShapeTree: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ShapeTree),
/* harmony export */   Text: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   Wrapper: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Wrapper),
/* harmony export */   useCanvas: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useCanvas),
/* harmony export */   useCanvasContext: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useCanvasContext),
/* harmony export */   useCollection: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useCollection),
/* harmony export */   useCollectionContext: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useCollectionContext),
/* harmony export */   useElement: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useElement),
/* harmony export */   withCollectionContext: () => (/* reexport safe */ _hocs__WEBPACK_IMPORTED_MODULE_2__.withCollectionContext)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./packages/react/src/components/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contexts */ "./packages/react/src/contexts.ts");
/* harmony import */ var _hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs */ "./packages/react/src/hocs.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./packages/react/src/hooks.ts");






/***/ }),

/***/ "./packages/react/src/utils/constants.ts":
/*!***********************************************!*\
  !*** ./packages/react/src/utils/constants.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSES: () => (/* binding */ CLASSES),
/* harmony export */   DEFCLASSES: () => (/* binding */ DEFCLASSES)
/* harmony export */ });
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");

var CLASSES = {
    'svg': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Canvas,
    'g': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Group,
    'rect': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Rect,
    'circle': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Circle,
    'ellipse': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Ellipse,
    'path': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Path,
    'polygon': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Polygon,
    'polyline': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Polyline,
    'image': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Image,
    'text': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Text,
    'text-path': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.TextPath
};
var DEFCLASSES = {
    'linearGradient': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.LinearGradient
};



/***/ }),

/***/ "./packages/react/src/utils/index.ts":
/*!*******************************************!*\
  !*** ./packages/react/src/utils/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CLASSES),
/* harmony export */   DEFCLASSES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.DEFCLASSES)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/react/src/utils/constants.ts");



/***/ }),

/***/ "./src/test-app.tsx":
/*!**************************!*\
  !*** ./src/test-app.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestApp: () => (/* binding */ TestApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");
/* harmony import */ var _grafikjs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafikjs/react */ "./packages/react/src/index.ts");
/* harmony import */ var _grafikjs_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafikjs/styles */ "./packages/styles/src/index.js");





var TestComponent = function () {
    var _a = (0,_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.useCanvas)(function (canvas) {
        var _a;
        return ({
            canvas: canvas,
            width: canvas.get('width'),
            zoom: canvas.get('zoom'),
            set: canvas.set.bind(canvas),
            setShape: (_a = canvas.getSelectedShapes()[0]) === null || _a === void 0 ? void 0 : _a.set.bind(canvas.getSelectedShapes()[0]),
            shapes: canvas.getChildren()
        });
    }), canvas = _a.canvas, width = _a.width, zoom = _a.zoom, set = _a.set, setShape = _a.setShape, shapes = _a.shapes;
    // @ts-ignore
    window.c = canvas;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["ZOOM:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "number", value: zoom, onChange: function (e) { return set('zoom', parseFloat(e.target.value)); } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["WIDTH:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "number", value: width, onChange: function (e) { return set('width', parseFloat(e.target.value)); } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: shapes === null || shapes === void 0 ? void 0 : shapes.map(function (shape) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { style: {
                            background: canvas.getSelectedShapes().includes(shape)
                                ? '#0f0'
                                : '#eee'
                        }, onClick: function () {
                            canvas.releaseShapes().selectShapes(shape);
                        }, children: shape.tagName }) }, shape.id)); }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: function () {
                    canvas.set('mode', canvas.get('mode') === 'select' ? 'pan' : 'select');
                }, children: canvas.get('mode') === 'select' ? 'Switch to Pan Mode' : 'Switch to Select Mode' })] }));
};
var TestCanvas = function (_a) {
    var children = _a.children;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1200), w = _b[0], setW = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(800), h = _c[0], setH = _c[1];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Canvas, { width: w, height: h, children: children }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { style: {
                    position: 'relative',
                    zIndex: 9
                }, type: "number", value: w, onChange: function (e) { return setW(parseInt(e.target.value)); } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { style: {
                    position: 'relative',
                    zIndex: 9
                }, type: "number", value: h, onChange: function (e) { return setH(parseInt(e.target.value)); } })] }));
};
var json = [
    {
        id: 'g-QyAzNX8TCHXT',
        name: '',
        tagName: 'g',
        children: [
            {
                id: 'rect-hMFHNAa0Uf2e',
                name: '',
                tagName: 'rect',
                fill: {
                    id: 'linearGradient-JZ7WYmdncNv4',
                    name: '',
                    tagName: 'linearGradient',
                    children: [
                        {
                            id: 'stop-EQ87jx2suVlf',
                            name: '',
                            tagName: 'stop',
                            offset: 0,
                            stopColor: '#FF0',
                            stopOpacity: 1
                        },
                        {
                            id: 'stop-vXBHNTYnYYxy',
                            name: '',
                            tagName: 'stop',
                            offset: 1,
                            stopColor: '#00F',
                            stopOpacity: 1
                        }
                    ]
                },
                stroke: '#000',
                strokeWidth: 2,
                width: 100,
                height: 100,
                transform: 'translate(-50 -50)',
                left: -100,
                top: 0,
                angle: 45,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                skewY: 0
            },
            {
                id: 'rect-V7M80dAWO7CE',
                name: '',
                tagName: 'rect',
                fill: {
                    id: 'linearGradient-JZ7WYmdncNv4',
                    name: '',
                    tagName: 'linearGradient',
                    children: [
                        {
                            id: 'stop-EQ87jx2suVlf',
                            name: '',
                            tagName: 'stop',
                            offset: 0,
                            stopColor: '#FF0',
                            stopOpacity: 1
                        },
                        {
                            id: 'stop-vXBHNTYnYYxy',
                            name: '',
                            tagName: 'stop',
                            offset: 1,
                            stopColor: '#00F',
                            stopOpacity: 1
                        }
                    ]
                },
                stroke: '#000',
                strokeWidth: 2,
                width: 100,
                height: 100,
                transform: 'translate(-50 -50)',
                left: 100,
                top: 0,
                angle: 45,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                skewY: 0
            }
        ],
        left: 600,
        top: 400,
        angle: 0,
        scaleX: 1,
        scaleY: 1,
        skewX: 0,
        skewY: 0
    }
];
var colorStops1 = [
    {
        offset: 0,
        stopColor: 'red'
    },
    {
        offset: 1,
        stopColor: 'blue'
    }
];
var colorStops2 = [
    {
        offset: 0,
        stopColor: 'red'
    },
    {
        offset: 1,
        stopColor: '#F44'
    }
];
var TestApp1 = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.CanvasProvider, { width: 1200, height: 800, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Canvas, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Defs, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.ShapeTree, { json: json })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Interactive, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Selector, {}) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestComponent, {})] }));
};
var TestApp3 = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.CanvasProvider, { width: 1200, height: 800, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Canvas, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Defs, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Group, { left: 600, top: 400, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Rect, { left: -100, top: 0, width: 100, height: 100, angle: 45, stroke: "#000", strokeWidth: 2, fill: "none" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Rect, { left: 100, top: 0, width: 100, height: 100, angle: 45, stroke: "#000", strokeWidth: 2, fill: "none" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Interactive, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Selector, {}) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestComponent, {})] }));
};
var TestApp = function () {
    var lg1 = new _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__.LinearGradient({
        colorStops: colorStops1
    });
    var lg2 = new _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__.LinearGradient({
        colorStops: colorStops2
    });
    var lg3 = new _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__.RadialGradient({
        colorStops: colorStops1
    });
    var pt = new _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__.Pattern({
    //
    });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.CanvasProvider, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Canvas, { width: 1200, height: 800, zoom: 2, mode: "select", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Defs, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Rect, { selectable: false, width: 1200, height: 800, left: 600, top: 400, fill: pt }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Group, { left: 400, top: 400, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Rect, { left: -100, top: 0, width: 100, height: 100, angle: 45, stroke: "#000", strokeWidth: 2, fill: "none" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Rect, { left: 100, top: 0, width: 100, height: 100, angle: 45, stroke: "#000", strokeWidth: 2, fill: "none" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Circle, { left: 600, top: 400, r: 50, fill: lg3 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Rect, { left: 0, top: 0, width: 100, height: 100, angle: 45, stroke: "#000", strokeWidth: 2, fill: "none" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Path, { d: "M50,25C35,0,-14,25,20,60L50,90L80,60C114,20,65,0,50,25", fill: lg2, left: 450, top: 250 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Polygon, { points: "120 70 170 170 70 170", fill: lg1, left: 350, top: 150 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Text, { text: "Hello GrafikJS! :-)", left: 800, top: 250 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Image, { href: "img.jpg", left: 300, top: 600, scaleX: 0.4, scaleY: 0.4 })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Interactive, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_3__.Selector, {}) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestComponent, {})] }));
};



/***/ }),

/***/ "./packages/styles/src/index.js":
/*!**************************************!*\
  !*** ./packages/styles/src/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./packages/styles/src/styles.scss");



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/react.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _test_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-app */ "./src/test-app.tsx");



var container = document.getElementById('wrap');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_test_app__WEBPACK_IMPORTED_MODULE_2__.TestApp));

})();

/******/ })()
;