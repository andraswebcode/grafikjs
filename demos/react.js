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
}

.grafik-canvas,
.grafik-interactive {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
}

.grafik-control {
  position: absolute;
}

.grafik-control-node {
  position: absolute;
  width: 12px;
  height: 12px;
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
        _this.className = 'grafik-canvas';
        _this.xmlns = 'http://www.w3.org/2000/svg';
        _this.width = 0;
        _this.height = 0;
        _this.viewportMatrix = new _maths__WEBPACK_IMPORTED_MODULE_2__.Matrix();
        _this._selectedShapes = [];
        _this.set(params);
        return _this;
    }
    Canvas.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this).concat([
            'xmlns',
            'width',
            'height',
            'viewBox'
        ]);
    };
    Canvas.prototype.set = function (key, value) {
        _super.prototype.set.call(this, key, value);
        this.setViewBox();
        return this;
    };
    Canvas.prototype.setViewBox = function () {
        this.viewBox = [0, 0, this.width, this.height];
    };
    Canvas.prototype.selectShapes = function () {
        var _this = this;
        var shapes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            shapes[_i] = arguments[_i];
        }
        shapes.forEach(function (shape) {
            // @ts-ignore
            if (!_this._selectedShapes.includes(shape)) {
                // @ts-ignore
                _this._selectedShapes.push(shape);
            }
        });
        this.trigger('selected', shapes);
        return this;
    };
    Canvas.prototype.releaseShapes = function () {
        var shapes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            shapes[_i] = arguments[_i];
        }
        if (shapes === null || shapes === void 0 ? void 0 : shapes[0]) {
            this._selectedShapes = this._selectedShapes.filter(function (shape) { return !shapes.includes(shape); });
        }
        else { // If args are empty, we remove all shapes from selection.
            this._selectedShapes = [];
        }
        this.trigger('released', shapes);
        return this;
    };
    Canvas.prototype.getSelectedShapes = function () {
        return this._selectedShapes;
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
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../element */ "./packages/core/src/element.ts");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../mixins */ "./packages/core/src/mixins/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.ts");
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




var ControlNode = /** @class */ (function (_super) {
    __extends(ControlNode, _super);
    function ControlNode(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'div';
        _this.className = 'grafik-control-node';
        _this.name = '';
        _this.id = '';
        _this.offset = new _maths__WEBPACK_IMPORTED_MODULE_2__.Point();
        _this.set(params);
        _this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.uniqueId)();
        if (_this.name) {
            _this.addClass('grafik-control-node__' + _this.name);
        }
        if (params.getPosition) {
            _this.getPosition = params.getPosition.bind(_this);
        }
        return _this;
    }
    Object.defineProperty(ControlNode.prototype, "x", {
        set: function (value) {
            this.offset.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ControlNode.prototype, "y", {
        set: function (value) {
            this.offset.y = value;
        },
        enumerable: false,
        configurable: true
    });
    ControlNode.prototype.getPosition = function () {
        var size = this.parent.getSize();
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
    ControlNode.prototype.getStyle = function () {
        var _a = this.getPosition(), x = _a.x, y = _a.y;
        return {
            left: x,
            top: y
        };
    };
    return ControlNode;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



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



var Control = /** @class */ (function (_super) {
    __extends(Control, _super);
    function Control(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'div';
        _this.className = 'grafik-control';
        _this.set(params);
        _this.setNodes();
        return _this;
    }
    Control.prototype.setNodes = function () {
        console.warn('setNodes() must be implemented by subclass.');
        return this;
    };
    Control.prototype.getSize = function () {
        var _a = this.shape.getWorldMatrix().toOptions(), scaleX = _a.scaleX, scaleY = _a.scaleY;
        return this.shape.bBox.getSize().multiply(new _maths__WEBPACK_IMPORTED_MODULE_2__.Point(scaleX, scaleY));
    };
    Control.prototype.getStyle = function () {
        var _a = this.shape.getWorldMatrix().toOptions(), left = _a.left, top = _a.top, angle = _a.angle;
        var size = this.getSize();
        var _b = this.shape.origin.clone().multiplyScalar(100), x = _b.x, y = _b.y;
        return {
            width: Math.abs(size.x),
            height: Math.abs(size.y),
            left: left,
            top: top,
            transform: "translate(".concat(-x, "%, ").concat(-y, "%) rotate(").concat(angle, "deg)"),
            transformOrigin: "".concat(x, "% ").concat(y, "%")
        };
    };
    return Control;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



/***/ }),

/***/ "./packages/core/src/controls/gradient-control.ts":
/*!********************************************************!*\
  !*** ./packages/core/src/controls/gradient-control.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GradientControl: () => (/* binding */ GradientControl)
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

var GradientControl = /** @class */ (function (_super) {
    __extends(GradientControl, _super);
    function GradientControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GradientControl;
}(___WEBPACK_IMPORTED_MODULE_0__.Control));



/***/ }),

/***/ "./packages/core/src/controls/index.ts":
/*!*********************************************!*\
  !*** ./packages/core/src/controls/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_0__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _control_node__WEBPACK_IMPORTED_MODULE_4__.ControlNode),
/* harmony export */   GradientControl: () => (/* reexport safe */ _gradient_control__WEBPACK_IMPORTED_MODULE_3__.GradientControl),
/* harmony export */   PathControl: () => (/* reexport safe */ _path_control__WEBPACK_IMPORTED_MODULE_2__.PathControl),
/* harmony export */   TransformControl: () => (/* reexport safe */ _transform_control__WEBPACK_IMPORTED_MODULE_1__.TransformControl)
/* harmony export */ });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control */ "./packages/core/src/controls/control.ts");
/* harmony import */ var _transform_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-control */ "./packages/core/src/controls/transform-control.ts");
/* harmony import */ var _path_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path-control */ "./packages/core/src/controls/path-control.ts");
/* harmony import */ var _gradient_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gradient-control */ "./packages/core/src/controls/gradient-control.ts");
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-node */ "./packages/core/src/controls/control-node.ts");







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

var PathControl = /** @class */ (function (_super) {
    __extends(PathControl, _super);
    function PathControl(params) {
        var _this = _super.call(this, params) || this;
        _this.addClass('grafik-path-control');
        return _this;
    }
    PathControl.prototype.setNodes = function () {
        var nodes = this.path.toPoints().map(function (position) { return new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            position: position
        }); });
        this.setChildren(nodes);
        return this;
    };
    return PathControl;
}(___WEBPACK_IMPORTED_MODULE_0__.Control));



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


var TransformControl = /** @class */ (function (_super) {
    __extends(TransformControl, _super);
    function TransformControl(params) {
        var _this = _super.call(this, params) || this;
        _this.addClass('grafik-transform-control');
        return _this;
    }
    TransformControl.prototype.setNodes = function () {
        var control = this;
        var shape = control.shape;
        // Create control nodes.
        var tl = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            name: 'tl',
            x: 0,
            y: 0
        });
        var tc = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            name: 'tc',
            x: 0.5,
            y: 0
        });
        var tr = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            name: 'tr',
            x: 1,
            y: 0
        });
        var ml = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            name: 'ml',
            x: 0,
            y: 0.5
        });
        var mr = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            name: 'mr',
            x: 1,
            y: 0.5
        });
        var bl = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            name: 'bl',
            x: 0,
            y: 1
        });
        var bc = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            name: 'bc',
            x: 0.5,
            y: 1
        });
        var br = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            name: 'br',
            x: 1,
            y: 1
        });
        var a = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
            name: 'a',
            getPosition: function () {
                var x = control.getSize().x;
                var dist = 20;
                return new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(x + dist, -dist);
            }
        });
        var o = new ___WEBPACK_IMPORTED_MODULE_0__.ControlNode({
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
    return TransformControl;
}(___WEBPACK_IMPORTED_MODULE_0__.Control));



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
    function ColorStop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'stop';
        return _this;
    }
    return ColorStop;
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element));



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


var Gradient = /** @class */ (function (_super) {
    __extends(Gradient, _super);
    function Gradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Gradient;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



/***/ }),

/***/ "./packages/core/src/defs/index.ts":
/*!*****************************************!*\
  !*** ./packages/core/src/defs/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClipPath: () => (/* reexport safe */ _clip_path__WEBPACK_IMPORTED_MODULE_0__.ClipPath),
/* harmony export */   ColorStop: () => (/* reexport safe */ _color_stop__WEBPACK_IMPORTED_MODULE_4__.ColorStop),
/* harmony export */   Gradient: () => (/* reexport safe */ _gradient__WEBPACK_IMPORTED_MODULE_1__.Gradient),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _linear_gradient__WEBPACK_IMPORTED_MODULE_2__.LinearGradient),
/* harmony export */   Pattern: () => (/* reexport safe */ _pattern__WEBPACK_IMPORTED_MODULE_5__.Pattern),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _radial_gradient__WEBPACK_IMPORTED_MODULE_3__.RadialGradient)
/* harmony export */ });
/* harmony import */ var _clip_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clip-path */ "./packages/core/src/defs/clip-path.ts");
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gradient */ "./packages/core/src/defs/gradient.ts");
/* harmony import */ var _linear_gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear-gradient */ "./packages/core/src/defs/linear-gradient.ts");
/* harmony import */ var _radial_gradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radial-gradient */ "./packages/core/src/defs/radial-gradient.ts");
/* harmony import */ var _color_stop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-stop */ "./packages/core/src/defs/color-stop.ts");
/* harmony import */ var _pattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern */ "./packages/core/src/defs/pattern.ts");








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
    function LinearGradient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'linearGradient';
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
    function RadialGradient() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'radialGradient';
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
var Element = /** @class */ (function () {
    function Element() {
        this.className = '';
        this._listeners = {};
    }
    Element.prototype.getAttrMap = function () {
        return ['className'];
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
            // Attention please: here - if 'key' is an object, 'silent' becomes 'value'!
            if (!value) {
                this.trigger('set', key);
            }
        }
        return this;
    };
    Element.prototype._set = function (key, value) {
        if (typeof this[key] !== 'function') {
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
    Element.prototype.getStyle = function () {
        return {};
    };
    Element.prototype.addClass = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var currentClasses = this.className.split(' ').filter(function (cn) { return cn; });
        var newClasses = classNames.filter(function (cn) { return (cn && !currentClasses.includes(cn)); });
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

/***/ "./packages/core/src/index.ts":
/*!************************************!*\
  !*** ./packages/core/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.BBox),
/* harmony export */   Canvas: () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas),
/* harmony export */   Circle: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Circle),
/* harmony export */   ClipPath: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_3__.ClipPath),
/* harmony export */   CloseCurve: () => (/* reexport safe */ _maths_curves__WEBPACK_IMPORTED_MODULE_6__.CloseCurve),
/* harmony export */   Color: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Color),
/* harmony export */   ColorStop: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_3__.ColorStop),
/* harmony export */   Control: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.ControlNode),
/* harmony export */   CubicBezierCurve: () => (/* reexport safe */ _maths_curves__WEBPACK_IMPORTED_MODULE_6__.CubicBezierCurve),
/* harmony export */   Curve: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Curve),
/* harmony export */   CurvePath: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.CurvePath),
/* harmony export */   Element: () => (/* reexport safe */ _element__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   Ellipse: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Ellipse),
/* harmony export */   Gradient: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_3__.Gradient),
/* harmony export */   GradientControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.GradientControl),
/* harmony export */   Group: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Group),
/* harmony export */   Image: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Image),
/* harmony export */   Importer: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Importer),
/* harmony export */   LineCurve: () => (/* reexport safe */ _maths_curves__WEBPACK_IMPORTED_MODULE_6__.LineCurve),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_3__.LinearGradient),
/* harmony export */   LottieImporter: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.LottieImporter),
/* harmony export */   Matrix: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Matrix),
/* harmony export */   MoveCurve: () => (/* reexport safe */ _maths_curves__WEBPACK_IMPORTED_MODULE_6__.MoveCurve),
/* harmony export */   PIBY180: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.PIBY180),
/* harmony export */   Path: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Path),
/* harmony export */   PathControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.PathControl),
/* harmony export */   Pattern: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_3__.Pattern),
/* harmony export */   Point: () => (/* reexport safe */ _maths__WEBPACK_IMPORTED_MODULE_5__.Point),
/* harmony export */   Polygon: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Polyline),
/* harmony export */   QuadraticBezierCurve: () => (/* reexport safe */ _maths_curves__WEBPACK_IMPORTED_MODULE_6__.QuadraticBezierCurve),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _defs__WEBPACK_IMPORTED_MODULE_3__.RadialGradient),
/* harmony export */   Rect: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Rect),
/* harmony export */   SVGImporter: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.SVGImporter),
/* harmony export */   Shape: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Shape),
/* harmony export */   Text: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Text),
/* harmony export */   TextPath: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.TextPath),
/* harmony export */   TransformControl: () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_4__.TransformControl),
/* harmony export */   clamp: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.deg2Rad),
/* harmony export */   rad2Deg: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.rad2Deg),
/* harmony export */   toFixed: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.toFixed),
/* harmony export */   uniqueId: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.uniqueId)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./packages/core/src/element.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./packages/core/src/canvas.ts");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes */ "./packages/core/src/shapes/index.ts");
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defs */ "./packages/core/src/defs/index.ts");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./packages/core/src/controls/index.ts");
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _maths_curves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maths/curves */ "./packages/core/src/maths/curves/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./packages/core/src/utils/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "./packages/core/src/types/index.ts");
// Core


// Shapes

// Definitions

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
        this.reset();
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
    BBox.prototype.contains = function (point) {
        return (point.x >= this.min.x && point.x <= this.max.x &&
            point.y >= this.min.y && point.y <= this.max.y);
    };
    BBox.prototype.intersects = function (bBox) {
        return false;
    };
    BBox.prototype.transform = function (matrix) {
        return this;
    };
    BBox.prototype.reset = function () {
        this.min.set(0, 0);
        this.max.set(0, 0);
        return this;
    };
    BBox.prototype.isEqual = function (bBox) {
        return (this.min.isEqual(bBox.min) && this.max.isEqual(bBox.max));
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _curves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curves */ "./packages/core/src/maths/curves/index.ts");


var CURVES = {
    'M': _curves__WEBPACK_IMPORTED_MODULE_1__.MoveCurve,
    'L': _curves__WEBPACK_IMPORTED_MODULE_1__.LineCurve,
    'Q': _curves__WEBPACK_IMPORTED_MODULE_1__.QuadraticBezierCurve,
    'C': _curves__WEBPACK_IMPORTED_MODULE_1__.CubicBezierCurve,
    'Z': _curves__WEBPACK_IMPORTED_MODULE_1__.CloseCurve
};
var CurvePath = /** @class */ (function () {
    function CurvePath() {
        var curves = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            curves[_i] = arguments[_i];
        }
        this.curves = [];
        this.currentPoint = new ___WEBPACK_IMPORTED_MODULE_0__.Point();
        this.set(curves);
    }
    Object.defineProperty(CurvePath.prototype, "length", {
        get: function () {
            return this.curves.length;
        },
        enumerable: false,
        configurable: true
    });
    CurvePath.prototype.at = function (index) {
        return this.curves[index];
    };
    CurvePath.prototype.add = function () {
        var _a;
        var curves = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            curves[_i] = arguments[_i];
        }
        (_a = this.curves).push.apply(_a, curves);
        return this;
    };
    CurvePath.prototype.set = function (curves) {
        this.curves = curves;
        return this;
    };
    CurvePath.prototype.moveTo = function (x, y) {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_1__.MoveCurve(new ___WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this.currentPoint.set(x, y);
        return this.add(curve);
    };
    CurvePath.prototype.lineTo = function (x, y) {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_1__.LineCurve(this.currentPoint.clone(), new ___WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this.currentPoint.set(x, y);
        return this.add(curve);
    };
    CurvePath.prototype.quadraticCurveTo = function (cx, cy, x, y) {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_1__.QuadraticBezierCurve(this.currentPoint.clone(), new ___WEBPACK_IMPORTED_MODULE_0__.Point(cx, cy), new ___WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this.currentPoint.set(x, y);
        return this.add(curve);
    };
    CurvePath.prototype.cubicCurveTo = function (c1x, c1y, c2x, c2y, x, y) {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_1__.CubicBezierCurve(this.currentPoint.clone(), new ___WEBPACK_IMPORTED_MODULE_0__.Point(c1x, c1y), new ___WEBPACK_IMPORTED_MODULE_0__.Point(c2x, c2y), new ___WEBPACK_IMPORTED_MODULE_0__.Point(x, y));
        this.currentPoint.set(x, y);
        return this.add(curve);
    };
    CurvePath.prototype.closePath = function () {
        var curve = new _curves__WEBPACK_IMPORTED_MODULE_1__.CloseCurve();
        return this.add(curve);
    };
    CurvePath.prototype.fromString = function (string) {
        var regex = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]+)?/g;
        var curves = (string.match(regex) || []).map(function (curve, i, array) {
            curve = curve.trim();
            var command = curve.replace(/[^MmLlHhVvCcSsQqTtAaZz]/g, '');
            var Curve = CURVES[command];
            return new Curve().fromString(curve, array[i - 1]);
        });
        return this.set(curves);
    };
    CurvePath.prototype.toString = function () {
        // @ts-ignore
        return this.curves.map(function (curve) { return curve.toString(' '); }).join(' ');
    };
    CurvePath.prototype.toPoints = function (divisions) {
        var pp; // Previous point.
        return this.mapCurves(function (curve) { return curve.getPoints(divisions); }).flat().filter(function (p, i, array) {
            pp = array[i - 1];
            if (!pp) {
                return true;
            }
            return !p.isEqual(pp);
        });
    };
    CurvePath.prototype.containsPoint = function (point, divisions) {
        var x = point.x, y = point.y;
        var polygon = this.mapCurves(function (curve) { return curve.getPoints(divisions); }).flat();
        var contains = false, intersects, i, j, xi, yi, xj, yj;
        for (i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            xi = polygon[i].x;
            yi = polygon[i].y;
            xj = polygon[j].x;
            yj = polygon[j].y;
            intersects = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersects) {
                contains = !contains;
            }
        }
        return contains;
    };
    CurvePath.prototype.eachCurve = function (callback) {
        this.curves.forEach(callback);
        return this;
    };
    CurvePath.prototype.mapCurves = function (callback) {
        return this.curves.map(callback);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ "./packages/core/src/utils/index.ts");


var Curve = /** @class */ (function () {
    function Curve() {
        this.command = '';
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
    Curve.prototype.fromString = function (string, prevString) {
        if (prevString === void 0) { prevString = ''; }
        var prevValues = (prevString.match(/[\-\.\d]+/g) || []).map(function (n) { return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toFixed)(n); });
        var values = (string.match(/[\-\.\d]+/g) || []).map(function (n) { return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toFixed)(n); });
        var prevLength = prevValues.length;
        var length = values.length;
        var point;
        // @ts-ignore
        if (this.p0) {
            if (this.command === 'M') {
                // @ts-ignore
                this.p0.set(values[0], values[1]);
            }
            else {
                // @ts-ignore
                this.p0.set(prevValues[prevLength - 2], prevValues[prevLength - 1]);
            }
        }
        for (var i = 0, p = 1; i < length - 1; i += 2, p++) {
            if (point = this['p' + p]) {
                point.set(values[i], values[i + 1]);
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
    return Curve;
}());



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

/***/ "./packages/core/src/maths/curves/index.ts":
/*!*************************************************!*\
  !*** ./packages/core/src/maths/curves/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseCurve: () => (/* reexport safe */ _close_curve__WEBPACK_IMPORTED_MODULE_4__.CloseCurve),
/* harmony export */   CubicBezierCurve: () => (/* reexport safe */ _cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_3__.CubicBezierCurve),
/* harmony export */   LineCurve: () => (/* reexport safe */ _line_curve__WEBPACK_IMPORTED_MODULE_1__.LineCurve),
/* harmony export */   MoveCurve: () => (/* reexport safe */ _move_curve__WEBPACK_IMPORTED_MODULE_0__.MoveCurve),
/* harmony export */   QuadraticBezierCurve: () => (/* reexport safe */ _quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_2__.QuadraticBezierCurve)
/* harmony export */ });
/* harmony import */ var _move_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move-curve */ "./packages/core/src/maths/curves/move-curve.ts");
/* harmony import */ var _line_curve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-curve */ "./packages/core/src/maths/curves/line-curve.ts");
/* harmony import */ var _quadratic_bezier_curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quadratic-bezier-curve */ "./packages/core/src/maths/curves/quadratic-bezier-curve.ts");
/* harmony import */ var _cubic_bezier_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubic-bezier-curve */ "./packages/core/src/maths/curves/cubic-bezier-curve.ts");
/* harmony import */ var _close_curve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./close-curve */ "./packages/core/src/maths/curves/close-curve.ts");







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

/***/ "./packages/core/src/maths/index.ts":
/*!******************************************!*\
  !*** ./packages/core/src/maths/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: () => (/* reexport safe */ _bbox__WEBPACK_IMPORTED_MODULE_0__.BBox),
/* harmony export */   Color: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.Color),
/* harmony export */   Curve: () => (/* reexport safe */ _curve__WEBPACK_IMPORTED_MODULE_2__.Curve),
/* harmony export */   CurvePath: () => (/* reexport safe */ _curve_path__WEBPACK_IMPORTED_MODULE_3__.CurvePath),
/* harmony export */   Matrix: () => (/* reexport safe */ _matrix__WEBPACK_IMPORTED_MODULE_4__.Matrix),
/* harmony export */   Point: () => (/* reexport safe */ _point__WEBPACK_IMPORTED_MODULE_5__.Point)
/* harmony export */ });
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbox */ "./packages/core/src/maths/bbox.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./packages/core/src/maths/color.ts");
/* harmony import */ var _curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve */ "./packages/core/src/maths/curve.ts");
/* harmony import */ var _curve_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curve-path */ "./packages/core/src/maths/curve-path.ts");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matrix */ "./packages/core/src/maths/matrix.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point */ "./packages/core/src/maths/point.ts");








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
    Point.prototype.angleTo = function (point) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.rad2Deg)(Math.atan2(point.y - this.y, point.x - this.x));
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
    Point.prototype.max = function (point) {
        this.x = Math.max(this.x, point.x);
        this.y = Math.max(this.y, point.y);
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
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../maths */ "./packages/core/src/maths/index.ts");
/* harmony import */ var _maths_curves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../maths/curves */ "./packages/core/src/maths/curves/index.ts");
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
        Collection.prototype.setChildren = function (children, silent) {
            if (silent === void 0) { silent = false; }
            this.children = [];
            this.add(children, silent);
            return this;
        };
        Collection.prototype.add = function (children, silent) {
            var _this = this;
            if (silent === void 0) { silent = false; }
            children = Array.isArray(children) ? children : [children];
            children.forEach(function (child) {
                _this.children.push(child);
                child.set({
                    parent: _this,
                    // @ts-ignore
                    canvas: _this.isCanvas ? _this : _this.canvas
                }, true);
            });
            if (!silent) {
                // @ts-ignore
                this.trigger('added', children);
            }
            return this;
        };
        Collection.prototype.remove = function (children, silent) {
            if (silent === void 0) { silent = false; }
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
        Collection.prototype.childAt = function (index) {
            return this.children[index];
        };
        Collection.prototype.childById = function (id) {
            return this.children.find(function (el) { return (el.id === id); });
        };
        Collection.prototype.findChildrenByPointer = function (pointer) {
            return this.mapChildren(function (child) {
                var bBox = child.get('bBox');
                if (!bBox) {
                    return false;
                }
                var _a = bBox.getLineEdges(child.getWorldMatrix()), tl = _a[0], tr = _a[1], br = _a[2], bl = _a[3];
                var polygon = new _maths__WEBPACK_IMPORTED_MODULE_0__.CurvePath(new _maths_curves__WEBPACK_IMPORTED_MODULE_1__.MoveCurve(tl), new _maths_curves__WEBPACK_IMPORTED_MODULE_1__.LineCurve(tl, tr), new _maths_curves__WEBPACK_IMPORTED_MODULE_1__.LineCurve(tr, br), new _maths_curves__WEBPACK_IMPORTED_MODULE_1__.LineCurve(br, bl), new _maths_curves__WEBPACK_IMPORTED_MODULE_1__.LineCurve(bl, tl));
                return (polygon.containsPoint(pointer, 1) && child);
            }).filter(function (child) { return !!child; });
        };
        Collection.prototype.findLastChildByPointer = function (pointer) {
            var children = this.findChildrenByPointer(pointer);
            return children[children.length - 1];
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
        return _super.prototype.getAttrMap.call(this).concat([
            'r',
            'cx',
            'cy'
        ]);
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
        return _super.prototype.getAttrMap.call(this).concat([
            'rx',
            'ry',
            'cx',
            'cy'
        ]);
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
        return _this;
    }
    return Group;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape)));



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

var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'image';
        return _this;
    }
    return Image;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape));



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
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../controls */ "./packages/core/src/controls/index.ts");
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



var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    function Path(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'path';
        _this.path = new _maths__WEBPACK_IMPORTED_MODULE_1__.CurvePath();
        _this.init(params);
        _this.addControl('path', new _controls__WEBPACK_IMPORTED_MODULE_2__.PathControl({
            shape: _this,
            path: _this.path
        }));
        return _this;
    }
    Path.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this).concat([
            'd'
        ]);
    };
    Path.prototype.updateOthersWithKeys = function (keys) {
        if (keys.includes('d')) {
            this.path.fromString(this.d);
            this.updateBBox();
        }
        return this;
    };
    Path.prototype.updateBBox = function () {
        this.bBox.fromPoints(this.path.toPoints());
        this.origin.copy(this.bBox.getOrigin());
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


var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(params) {
        var _this = _super.call(this) || this;
        _this.tagName = 'polyline';
        _this.path = new _maths__WEBPACK_IMPORTED_MODULE_1__.CurvePath();
        _this.init(params);
        return _this;
    }
    Polyline.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this).concat([
            'points'
        ]);
    };
    Polyline.prototype.updateOthersWithKeys = function (keys) {
        if (keys.includes('points')) {
            this.path.fromString(this.points);
        }
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
        return _super.prototype.getAttrMap.call(this).concat([
            'width',
            'height'
        ]);
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
        _this.isShape = true;
        _this.matrix = new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix();
        _this.bBox = new _maths__WEBPACK_IMPORTED_MODULE_1__.BBox();
        _this.origin = new _maths__WEBPACK_IMPORTED_MODULE_1__.Point(0.5, 0.5);
        _this.controls = {};
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
        return _this;
    }
    Object.defineProperty(Shape.prototype, "originX", {
        set: function (value) {
            this.origin.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "originY", {
        set: function (value) {
            this.origin.y = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.init = function (params) {
        this.set(params, true);
        this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.uniqueId)();
        this.addControl('transform', new _controls__WEBPACK_IMPORTED_MODULE_2__.TransformControl({
            shape: this
        })).setControl('transform');
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
            this.updateOthersWithKeys([key]);
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
                this.updateOthersWithKeys(Object.keys(key));
                if (!value) {
                    this.trigger('set', key);
                }
                break;
            }
        }
        return this;
    };
    Shape.prototype.getAttrMap = function () {
        return [
            'fill',
            'stroke',
            'strokeWidth'
        ];
    };
    Shape.prototype.updateOthersWithKeys = function (keys) {
        return this;
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
            this.controls[name] = control;
        }
        return this;
    };
    Shape.prototype.getControl = function (name) {
        return this.controls[name || this._activeControl];
    };
    Shape.prototype.setControl = function (name) {
        this._activeControl = name;
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
    Shape.prototype.getWorldMatrix = function () {
        var _a = this.parent, viewportMatrix = _a.viewportMatrix, isCanvas = _a.isCanvas;
        return new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix().copy(isCanvas ? viewportMatrix : this.parent.getWorldMatrix()).multiply(this.matrix);
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

var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = 'text';
        return _this;
    }
    return Text;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape));



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
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   deg2Rad: () => (/* binding */ deg2Rad),
/* harmony export */   rad2Deg: () => (/* binding */ rad2Deg),
/* harmony export */   toFixed: () => (/* binding */ toFixed),
/* harmony export */   uniqueId: () => (/* binding */ uniqueId)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/core/src/utils/constants.ts");

var clamp = function (value, min, max) { return Math.min(Math.max(value, min), max); };
var toFixed = function (value, fractionDigits) {
    if (fractionDigits === void 0) { fractionDigits = 2; }
    return ((Math.round(value * (Math.pow(10, fractionDigits))) / (Math.pow(10, fractionDigits))) || 0);
};
var deg2Rad = function (degree) { return (degree * _constants__WEBPACK_IMPORTED_MODULE_0__.PIBY180); };
var rad2Deg = function (degree) { return (degree / _constants__WEBPACK_IMPORTED_MODULE_0__.PIBY180); };
var uniqueId = function () {
    // @ts-ignore
    if (!uniqueId._index) {
        // @ts-ignore
        uniqueId._index = 0;
    }
    // @ts-ignore
    return 'elem' + uniqueId._index++;
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
/* harmony export */   Importer: () => (/* reexport safe */ _importer__WEBPACK_IMPORTED_MODULE_0__.Importer),
/* harmony export */   LottieImporter: () => (/* reexport safe */ _lottie_importer__WEBPACK_IMPORTED_MODULE_2__.LottieImporter),
/* harmony export */   PIBY180: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.PIBY180),
/* harmony export */   SVGImporter: () => (/* reexport safe */ _svg_importer__WEBPACK_IMPORTED_MODULE_1__.SVGImporter),
/* harmony export */   clamp: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.deg2Rad),
/* harmony export */   rad2Deg: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.rad2Deg),
/* harmony export */   toFixed: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_4__.toFixed),
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
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../contexts */ "./packages/react/src/contexts.ts");
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



var Canvas = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var canvas = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useCanvas)();
    canvas.set(props);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_2__.CollectionContext.Provider, { value: canvas, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", __assign({}, canvas.getAttributes(), { children: children })) }));
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
    var collection = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useCollection)();
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
/* harmony export */   Circle: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Circle),
/* harmony export */   Ellipse: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Ellipse),
/* harmony export */   Group: () => (/* reexport safe */ _group__WEBPACK_IMPORTED_MODULE_1__.Group),
/* harmony export */   Path: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Path),
/* harmony export */   Polygon: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Polyline),
/* harmony export */   Rect: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Rect)
/* harmony export */ });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./packages/react/src/components/elements/canvas.tsx");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ "./packages/react/src/components/elements/group.tsx");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes */ "./packages/react/src/components/elements/shapes.tsx");





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
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), wrapperAttributes = _b[0], setWrapperAttributes = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), attributes = _c[0], setAttributes = _c[1];
    var onShapeSet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        setWrapperAttributes(shape.getWrapperAttributes());
        setAttributes(shape.getAttributes());
    }, []);
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

/***/ "./packages/react/src/components/elements/shapes.tsx":
/*!***********************************************************!*\
  !*** ./packages/react/src/components/elements/shapes.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Circle: () => (/* binding */ Circle),
/* harmony export */   Ellipse: () => (/* binding */ Ellipse),
/* harmony export */   Path: () => (/* binding */ Path),
/* harmony export */   Polygon: () => (/* binding */ Polygon),
/* harmony export */   Polyline: () => (/* binding */ Polyline),
/* harmony export */   Rect: () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _hocs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../hocs */ "./packages/react/src/hocs.tsx");
/* harmony import */ var _shape_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape-base */ "./packages/react/src/components/elements/shape-base.tsx");


var Rect = (0,_hocs__WEBPACK_IMPORTED_MODULE_0__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_1__.ShapeBase, 'rect');
var Circle = (0,_hocs__WEBPACK_IMPORTED_MODULE_0__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_1__.ShapeBase, 'circle');
var Ellipse = (0,_hocs__WEBPACK_IMPORTED_MODULE_0__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_1__.ShapeBase, 'ellipse');
var Path = (0,_hocs__WEBPACK_IMPORTED_MODULE_0__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_1__.ShapeBase, 'path');
var Polygon = (0,_hocs__WEBPACK_IMPORTED_MODULE_0__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_1__.ShapeBase, 'polygon');
var Polyline = (0,_hocs__WEBPACK_IMPORTED_MODULE_0__.withCollectionContext)(_shape_base__WEBPACK_IMPORTED_MODULE_1__.ShapeBase, 'polyline');



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
/* harmony export */   Control: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_2__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_2__.ControlNode),
/* harmony export */   Ellipse: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Ellipse),
/* harmony export */   Group: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Group),
/* harmony export */   Interactive: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_2__.Interactive),
/* harmony export */   Path: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Path),
/* harmony export */   Polygon: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Polyline),
/* harmony export */   Rect: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_1__.Rect),
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
        return function () {
            control.shape.off('set', onShapeSet);
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TagName, __assign({}, attributes, { style: style, onMouseDown: control.onPointerStart, onMouseMove: control.onPointerMove, onMouseUp: control.onPointerEnd, children: control.mapChildren(function (node) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ControlNode, { node: node }, node.id)); }) })));
};



/***/ }),

/***/ "./packages/react/src/components/interactive/index.ts":
/*!************************************************************!*\
  !*** ./packages/react/src/components/interactive/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* reexport safe */ _control__WEBPACK_IMPORTED_MODULE_2__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _control_node__WEBPACK_IMPORTED_MODULE_3__.ControlNode),
/* harmony export */   Interactive: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_1__.Interactive),
/* harmony export */   Wrapper: () => (/* reexport safe */ _wrapper__WEBPACK_IMPORTED_MODULE_0__.Wrapper)
/* harmony export */ });
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ "./packages/react/src/components/interactive/wrapper.tsx");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive */ "./packages/react/src/components/interactive/interactive.tsx");
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control */ "./packages/react/src/components/interactive/control.tsx");
/* harmony import */ var _control_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-node */ "./packages/react/src/components/interactive/control-node.tsx");






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
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./packages/react/src/components/interactive/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");





var Interactive = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'grafik-interactive' : _b, children = _a.children;
    var _c = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useCanvasReducer)(), canvas = _c.canvas, dispatch = _c.dispatch;
    var shapes = canvas.getSelectedShapes();
    var onMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
        var _a = e.currentTarget.getBoundingClientRect(), left = _a.left, top = _a.top;
        var pointer = new _grafikjs_core__WEBPACK_IMPORTED_MODULE_2__.Point(e.clientX - left, e.clientY - top);
        var founded = canvas.findLastChildByPointer(pointer);
        var method = founded ? 'selectShapes' : 'releaseShapes';
        if (method === 'selectShapes' && !e.ctrlKey) {
            // Here we do not use dispatch to avoid multiple renders of this component.
            canvas.releaseShapes();
        }
        dispatch(method, founded);
    }, []);
    var onMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) { }, []);
    var onMouseUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) { }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: className, onMouseDown: onMouseDown, onMouseMove: onMouseMove, onMouseUp: onMouseUp, children: [shapes.map(function (shape) { return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Control, { control: shape.getControl() }, shape.id)); }), children] }));
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
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../hooks */ "./packages/react/src/hooks.ts");


var Wrapper = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'grafik-wrapper' : _b, children = _a.children;
    var canvas = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useCanvas)();
    // @ts-ignore
    var style = canvas.get(['width', 'height']);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: className, style: style, children: children }));
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




var withCollectionContext = function (Component, tagName) { return function (props) {
    var collection = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useCollection)();
    var shape = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        var Shape = _utils__WEBPACK_IMPORTED_MODULE_3__.CLASSNAMES[tagName];
        return new Shape(props);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        collection.add(shape);
        return function () {
            collection.remove(shape);
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, { TagName: tagName, shape: shape, props: props }));
}; };



/***/ }),

/***/ "./packages/react/src/hooks.ts":
/*!*************************************!*\
  !*** ./packages/react/src/hooks.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCanvas: () => (/* binding */ useCanvas),
/* harmony export */   useCanvasReducer: () => (/* binding */ useCanvasReducer),
/* harmony export */   useCollection: () => (/* binding */ useCollection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contexts */ "./packages/react/src/contexts.ts");
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


var useCanvas = function () { return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__.CanvasContext); };
var useCollection = function () { return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__.CollectionContext); };
var _canvasReducer = function (state, _a) {
    var _b;
    var method = _a.method, args = _a.args;
    if (!state.canvas[method]) {
        console.warn("Method: ".concat(method, "() does not exists on canvas."));
        return __assign({}, state);
    }
    (_b = state.canvas)[method].apply(_b, args);
    return __assign({}, state);
};
var useCanvasReducer = function () {
    var canvas = useCanvas();
    // @ts-ignore
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_canvasReducer, { canvas: canvas }), state = _a[0], dispatch = _a[1];
    return {
        // @ts-ignore
        dispatch: function (method) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return dispatch({
                method: method,
                args: args
            });
        },
        canvas: state.canvas
    };
};



/***/ }),

/***/ "./packages/react/src/index.ts":
/*!*************************************!*\
  !*** ./packages/react/src/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSNAMES: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.CLASSNAMES),
/* harmony export */   Canvas: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Canvas),
/* harmony export */   CanvasContext: () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_1__.CanvasContext),
/* harmony export */   CanvasProvider: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.CanvasProvider),
/* harmony export */   Circle: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Circle),
/* harmony export */   CollectionContext: () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_1__.CollectionContext),
/* harmony export */   Control: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ControlNode),
/* harmony export */   Ellipse: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Ellipse),
/* harmony export */   Group: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Group),
/* harmony export */   Interactive: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Interactive),
/* harmony export */   Path: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Path),
/* harmony export */   Polygon: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Polyline),
/* harmony export */   Rect: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Rect),
/* harmony export */   Wrapper: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Wrapper),
/* harmony export */   useCanvas: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useCanvas),
/* harmony export */   useCanvasReducer: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useCanvasReducer),
/* harmony export */   useCollection: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useCollection),
/* harmony export */   withCollectionContext: () => (/* reexport safe */ _hocs__WEBPACK_IMPORTED_MODULE_2__.withCollectionContext)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./packages/react/src/components/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contexts */ "./packages/react/src/contexts.ts");
/* harmony import */ var _hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs */ "./packages/react/src/hocs.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./packages/react/src/hooks.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./packages/react/src/utils/index.ts");







/***/ }),

/***/ "./packages/react/src/utils/constants.ts":
/*!***********************************************!*\
  !*** ./packages/react/src/utils/constants.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSNAMES: () => (/* binding */ CLASSNAMES)
/* harmony export */ });
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");

var CLASSNAMES = {
    'svg': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Canvas,
    'g': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Group,
    'rect': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Rect,
    'circle': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Circle,
    'ellipse': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Ellipse,
    'path': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Path,
    'polygon': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Polygon,
    'polyline': _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Polyline
};



/***/ }),

/***/ "./packages/react/src/utils/index.ts":
/*!*******************************************!*\
  !*** ./packages/react/src/utils/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSNAMES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CLASSNAMES)
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
/* harmony import */ var _grafikjs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafikjs/react */ "./packages/react/src/index.ts");
/* harmony import */ var _grafikjs_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafikjs/styles */ "./packages/styles/src/index.js");




var TestComponent = function (props) {
    var cv = (0,_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.useCanvas)();
    var cl = (0,_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.useCollection)();
    console.log(cv, cl);
    setTimeout(function () {
        // @ts-ignore
        window.path = cv.childAt(4);
    }, 40);
    return null;
};
var TestApp = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(400), left = _a[0], setLeft = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(400), top = _b[0], setTop = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), angle = _c[0], setAngle = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), scaleX = _d[0], setScaleX = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), scaleY = _e[0], setScaleY = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), skewX = _f[0], setSkewX = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), skewY = _g[0], setSkewY = _g[1];
    var _h = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(12), sw = _h[0], setSw = _h[1];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.CanvasProvider, { width: 1200, height: 800, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Wrapper, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Canvas, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TestComponent, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Group, { left: 250, top: 250, angle: angle, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Group, { skewX: 20, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Rect, { left: -50, top: -50, width: 100, height: 100, stroke: 'forestgreen', strokeWidth: 2, fill: 'none' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Rect, { left: 50, top: -50, width: 100, height: 100, stroke: 'forestgreen', strokeWidth: 2, fill: 'none' })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Group, { skewX: -20, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Rect, { left: -50, top: 50, width: 100, height: 100, stroke: 'forestgreen', strokeWidth: 2, fill: 'none' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Rect, { left: 50, top: 50, width: 100, height: 100, stroke: 'forestgreen', strokeWidth: 2, fill: 'none' })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Rect, { left: left, top: top, angle: angle, scaleX: scaleX, scaleY: scaleY, skewX: skewX, skewY: skewY, originX: 0.2, originY: 0.8, width: 200, height: 200, stroke: 'black', strokeWidth: sw, fill: 'none' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Ellipse, { left: left, top: top, angle: angle, rx: 80, ry: 40, stroke: 'black', strokeWidth: 2, fill: 'none' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Circle, { left: left, top: top, angle: angle, r: 40, stroke: 'black', strokeWidth: 2, fill: 'none' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Path, { d: 'M0 100 C 40 0 160 0 200 100 C 160 200 40 200 0 100Z', left: 800, top: 200, width: 200, height: 200, angle: angle, stroke: 'black', strokeWidth: 8, fill: 'none' })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafikjs_react__WEBPACK_IMPORTED_MODULE_2__.Interactive, {})] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Left:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'number', value: left, onChange: function (e) { return setLeft(parseInt(e.target.value) || 0); }, step: 10 })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Top:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'number', value: top, onChange: function (e) { return setTop(parseInt(e.target.value) || 0); }, step: 10 })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Angle:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'number', value: angle, onChange: function (e) { return setAngle(parseInt(e.target.value) || 0); } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["ScaleX:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'number', value: scaleX, onChange: function (e) { return setScaleX(parseFloat(e.target.value) || 0); }, step: 0.1 })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["ScaleY:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'number', value: scaleY, onChange: function (e) { return setScaleY(parseFloat(e.target.value) || 0); }, step: 0.1 })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["SkewX:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'number', value: skewX, onChange: function (e) { return setSkewX(parseInt(e.target.value) || 0); } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["SkewY:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'number', value: skewY, onChange: function (e) { return setSkewY(parseInt(e.target.value) || 0); } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { children: ["Stroke Width:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: 'number', value: sw, onChange: function (e) { return setSw(parseInt(e.target.value) || 0); } })] })] }));
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