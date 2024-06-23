/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectScope: () => (/* binding */ EffectScope),
/* harmony export */   ITERATE_KEY: () => (/* binding */ ITERATE_KEY),
/* harmony export */   ReactiveEffect: () => (/* binding */ ReactiveEffect),
/* harmony export */   ReactiveFlags: () => (/* binding */ ReactiveFlags),
/* harmony export */   TrackOpTypes: () => (/* binding */ TrackOpTypes),
/* harmony export */   TriggerOpTypes: () => (/* binding */ TriggerOpTypes),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   customRef: () => (/* binding */ customRef),
/* harmony export */   deferredComputed: () => (/* binding */ deferredComputed),
/* harmony export */   effect: () => (/* binding */ effect),
/* harmony export */   effectScope: () => (/* binding */ effectScope),
/* harmony export */   enableTracking: () => (/* binding */ enableTracking),
/* harmony export */   getCurrentScope: () => (/* binding */ getCurrentScope),
/* harmony export */   isProxy: () => (/* binding */ isProxy),
/* harmony export */   isReactive: () => (/* binding */ isReactive),
/* harmony export */   isReadonly: () => (/* binding */ isReadonly),
/* harmony export */   isRef: () => (/* binding */ isRef),
/* harmony export */   isShallow: () => (/* binding */ isShallow),
/* harmony export */   markRaw: () => (/* binding */ markRaw),
/* harmony export */   onScopeDispose: () => (/* binding */ onScopeDispose),
/* harmony export */   pauseScheduling: () => (/* binding */ pauseScheduling),
/* harmony export */   pauseTracking: () => (/* binding */ pauseTracking),
/* harmony export */   proxyRefs: () => (/* binding */ proxyRefs),
/* harmony export */   reactive: () => (/* binding */ reactive),
/* harmony export */   readonly: () => (/* binding */ readonly),
/* harmony export */   ref: () => (/* binding */ ref),
/* harmony export */   resetScheduling: () => (/* binding */ resetScheduling),
/* harmony export */   resetTracking: () => (/* binding */ resetTracking),
/* harmony export */   shallowReactive: () => (/* binding */ shallowReactive),
/* harmony export */   shallowReadonly: () => (/* binding */ shallowReadonly),
/* harmony export */   shallowRef: () => (/* binding */ shallowRef),
/* harmony export */   stop: () => (/* binding */ stop),
/* harmony export */   toRaw: () => (/* binding */ toRaw),
/* harmony export */   toRef: () => (/* binding */ toRef),
/* harmony export */   toRefs: () => (/* binding */ toRefs),
/* harmony export */   toValue: () => (/* binding */ toValue),
/* harmony export */   track: () => (/* binding */ track),
/* harmony export */   trigger: () => (/* binding */ trigger),
/* harmony export */   triggerRef: () => (/* binding */ triggerRef),
/* harmony export */   unref: () => (/* binding */ unref)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/


function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    /**
     * @internal
     */
    this._active = true;
    /**
     * @internal
     */
    this.effects = [];
    /**
     * @internal
     */
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else if (true) {
      warn(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if (true) {
    warn(
      `onScopeDispose() is called when there is no active effect scope to be associated with.`
    );
  }
}

let activeEffect;
class ReactiveEffect {
  constructor(fn, trigger, scheduler, scope) {
    this.fn = fn;
    this.trigger = trigger;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    /**
     * @internal
     */
    this._dirtyLevel = 5;
    /**
     * @internal
     */
    this._trackId = 0;
    /**
     * @internal
     */
    this._runnings = 0;
    /**
     * @internal
     */
    this._shouldSchedule = false;
    /**
     * @internal
     */
    this._depsLength = 0;
    recordEffectScope(this, scope);
  }
  get dirty() {
    if (this._dirtyLevel === 2)
      return false;
    if (this._dirtyLevel === 3 || this._dirtyLevel === 4) {
      this._dirtyLevel = 1;
      pauseTracking();
      for (let i = 0; i < this._depsLength; i++) {
        const dep = this.deps[i];
        if (dep.computed) {
          if (dep.computed.effect._dirtyLevel === 2)
            return true;
          triggerComputed(dep.computed);
          if (this._dirtyLevel >= 5) {
            break;
          }
        }
      }
      if (this._dirtyLevel === 1) {
        this._dirtyLevel = 0;
      }
      resetTracking();
    }
    return this._dirtyLevel >= 5;
  }
  set dirty(v) {
    this._dirtyLevel = v ? 5 : 0;
  }
  run() {
    this._dirtyLevel = 0;
    if (!this.active) {
      return this.fn();
    }
    let lastShouldTrack = shouldTrack;
    let lastEffect = activeEffect;
    try {
      shouldTrack = true;
      activeEffect = this;
      this._runnings++;
      preCleanupEffect(this);
      return this.fn();
    } finally {
      postCleanupEffect(this);
      this._runnings--;
      activeEffect = lastEffect;
      shouldTrack = lastShouldTrack;
    }
  }
  stop() {
    if (this.active) {
      preCleanupEffect(this);
      postCleanupEffect(this);
      this.onStop && this.onStop();
      this.active = false;
    }
  }
}
function triggerComputed(computed) {
  return computed.value;
}
function preCleanupEffect(effect2) {
  effect2._trackId++;
  effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
  if (effect2.deps.length > effect2._depsLength) {
    for (let i = effect2._depsLength; i < effect2.deps.length; i++) {
      cleanupDepEffect(effect2.deps[i], effect2);
    }
    effect2.deps.length = effect2._depsLength;
  }
}
function cleanupDepEffect(dep, effect2) {
  const trackId = dep.get(effect2);
  if (trackId !== void 0 && effect2._trackId !== trackId) {
    dep.delete(effect2);
    if (dep.size === 0) {
      dep.cleanup();
    }
  }
}
function effect(fn, options) {
  if (fn.effect instanceof ReactiveEffect) {
    fn = fn.effect.fn;
  }
  const _effect = new ReactiveEffect(fn, _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP, () => {
    if (_effect.dirty) {
      _effect.run();
    }
  });
  if (options) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(_effect, options);
    if (options.scope) recordEffectScope(_effect, options.scope);
  }
  if (!options || !options.lazy) {
    _effect.run();
  }
  const runner = _effect.run.bind(_effect);
  runner.effect = _effect;
  return runner;
}
function stop(runner) {
  runner.effect.stop();
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
  pauseScheduleStack++;
}
function resetScheduling() {
  pauseScheduleStack--;
  while (!pauseScheduleStack && queueEffectSchedulers.length) {
    queueEffectSchedulers.shift()();
  }
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
  var _a;
  if (dep.get(effect2) !== effect2._trackId) {
    dep.set(effect2, effect2._trackId);
    const oldDep = effect2.deps[effect2._depsLength];
    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect2);
      }
      effect2.deps[effect2._depsLength++] = dep;
    } else {
      effect2._depsLength++;
    }
    if (true) {
      (_a = effect2.onTrack) == null ? void 0 : _a.call(effect2, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({ effect: effect2 }, debuggerEventExtraInfo));
    }
  }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
  var _a;
  pauseScheduling();
  for (const effect2 of dep.keys()) {
    if (!dep.computed && effect2.computed) {
      if (dep.get(effect2) === effect2._trackId && effect2._runnings > 0) {
        effect2._dirtyLevel = 2;
        continue;
      }
    }
    let tracking;
    if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
      if (effect2.computed && effect2._dirtyLevel === 2) {
        effect2._shouldSchedule = true;
      }
      effect2._dirtyLevel = dirtyLevel;
    }
    if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      if (true) {
        (_a = effect2.onTrigger) == null ? void 0 : _a.call(effect2, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({ effect: effect2 }, debuggerEventExtraInfo));
      }
      effect2.trigger();
      if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 3) {
        effect2._shouldSchedule = false;
        if (effect2.scheduler) {
          queueEffectSchedulers.push(effect2.scheduler);
        }
      }
    }
  }
  resetScheduling();
}

const createDep = (cleanup, computed) => {
  const dep = /* @__PURE__ */ new Map();
  dep.cleanup = cleanup;
  dep.computed = computed;
  return dep;
};

const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol( true ? "iterate" : 0);
const MAP_KEY_ITERATE_KEY = Symbol( true ? "Map key iterate" : 0);
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
    }
    trackEffect(
      activeEffect,
      dep,
       true ? {
        target,
        type,
        key
      } : 0
    );
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key2) && key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  pauseScheduling();
  for (const dep of deps) {
    if (dep) {
      triggerEffects(
        dep,
        5,
         true ? {
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget
        } : 0
      );
    }
  }
  resetScheduling();
}
function getDepFromReactive(object, key) {
  const depsMap = targetMap.get(object);
  return depsMap && depsMap.get(key);
}

const isNonTrackableKeys = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)
);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      pauseScheduling();
      const res = toRaw(this)[key].apply(this, args);
      resetScheduling();
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key)) key = String(key);
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
    if (!isReadonly2) {
      if (targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? res : res.value;
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? Number(key) < target.length : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    if (true) {
      warn(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key) {
    if (true) {
      warn(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
  true
);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);

const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly = false, isShallow = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(key, rawKey)) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(key, rawKey)) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
  target = target["__v_raw"];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget =  true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target) ? new Map(target) : new Set(target) : 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn(
        `${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
    warn(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}

const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1 /* COMMON */;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2 /* COLLECTION */;
    default:
      return 0 /* INVALID */;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */ : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    if (true) {
      warn(
        `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(
          target
        )}`
      );
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0 /* INVALID */) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (Object.isExtensible(value)) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
const toReadonly = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;

const COMPUTED_SIDE_EFFECT_WARN = `Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free`;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly, isSSR) {
    this.getter = getter;
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this.effect = new ReactiveEffect(
      () => getter(this._value),
      () => triggerRefValue(
        this,
        this.effect._dirtyLevel === 3 ? 3 : 4
      )
    );
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly;
  }
  get value() {
    const self = toRaw(this);
    if ((!self._cacheable || self.effect.dirty) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(self._value, self._value = self.effect.run())) {
      triggerRefValue(self, 5);
    }
    trackRefValue(self);
    if (self.effect._dirtyLevel >= 2) {
      if ( true && this._warnRecursive) {
        warn(COMPUTED_SIDE_EFFECT_WARN, `

getter: `, this.getter);
      }
      triggerRefValue(self, 3);
    }
    return self._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(v) {
    this.effect.dirty = v;
  }
  // #endregion
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter =  true ? () => {
      warn("Write operation failed: computed value is readonly");
    } : 0;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if ( true && debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}

function trackRefValue(ref2) {
  var _a;
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    trackEffect(
      activeEffect,
      (_a = ref2.dep) != null ? _a : ref2.dep = createDep(
        () => ref2.dep = void 0,
        ref2 instanceof ComputedRefImpl ? ref2 : void 0
      ),
       true ? {
        target: ref2,
        type: "get",
        key: "value"
      } : 0
    );
  }
}
function triggerRefValue(ref2, dirtyLevel = 5, newVal, oldVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    triggerEffects(
      dep,
      dirtyLevel,
       true ? {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal,
        oldValue: oldVal
      } : 0
    );
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(newVal, this._rawValue)) {
      const oldVal = this._rawValue;
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, 5, newVal, oldVal);
    }
  }
}
function triggerRef(ref2) {
  triggerRefValue(ref2, 5,  true ? ref2.value : 0);
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this.dep = void 0;
    this.__v_isRef = true;
    const { get, set } = factory(
      () => trackRefValue(this),
      () => triggerRefValue(this)
    );
    this._get = get;
    this._set = set;
  }
  get value() {
    return this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
function toRefs(object) {
  if ( true && !isProxy(object)) {
    warn(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
  }
  get value() {
    return this._getter();
  }
}
function toRef(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source)) {
    return new GetterRefImpl(source);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}

const deferredComputed = computed;

const TrackOpTypes = {
  "GET": "get",
  "HAS": "has",
  "ITERATE": "iterate"
};
const TriggerOpTypes = {
  "SET": "set",
  "ADD": "add",
  "DELETE": "delete",
  "CLEAR": "clear"
};
const ReactiveFlags = {
  "SKIP": "__v_skip",
  "IS_REACTIVE": "__v_isReactive",
  "IS_READONLY": "__v_isReadonly",
  "IS_SHALLOW": "__v_isShallow",
  "RAW": "__v_raw"
};




/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransition: () => (/* binding */ BaseTransition),
/* harmony export */   BaseTransitionPropsValidators: () => (/* binding */ BaseTransitionPropsValidators),
/* harmony export */   Comment: () => (/* binding */ Comment),
/* harmony export */   DeprecationTypes: () => (/* binding */ DeprecationTypes),
/* harmony export */   EffectScope: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   ErrorCodes: () => (/* binding */ ErrorCodes),
/* harmony export */   ErrorTypeStrings: () => (/* binding */ ErrorTypeStrings),
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   KeepAlive: () => (/* binding */ KeepAlive),
/* harmony export */   ReactiveEffect: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   Static: () => (/* binding */ Static),
/* harmony export */   Suspense: () => (/* binding */ Suspense),
/* harmony export */   Teleport: () => (/* binding */ Teleport),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   TrackOpTypes: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.TrackOpTypes),
/* harmony export */   TriggerOpTypes: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.TriggerOpTypes),
/* harmony export */   assertNumber: () => (/* binding */ assertNumber),
/* harmony export */   callWithAsyncErrorHandling: () => (/* binding */ callWithAsyncErrorHandling),
/* harmony export */   callWithErrorHandling: () => (/* binding */ callWithErrorHandling),
/* harmony export */   camelize: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize),
/* harmony export */   capitalize: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize),
/* harmony export */   cloneVNode: () => (/* binding */ cloneVNode),
/* harmony export */   compatUtils: () => (/* binding */ compatUtils),
/* harmony export */   computed: () => (/* binding */ computed),
/* harmony export */   createBlock: () => (/* binding */ createBlock),
/* harmony export */   createCommentVNode: () => (/* binding */ createCommentVNode),
/* harmony export */   createElementBlock: () => (/* binding */ createElementBlock),
/* harmony export */   createElementVNode: () => (/* binding */ createBaseVNode),
/* harmony export */   createHydrationRenderer: () => (/* binding */ createHydrationRenderer),
/* harmony export */   createPropsRestProxy: () => (/* binding */ createPropsRestProxy),
/* harmony export */   createRenderer: () => (/* binding */ createRenderer),
/* harmony export */   createSlots: () => (/* binding */ createSlots),
/* harmony export */   createStaticVNode: () => (/* binding */ createStaticVNode),
/* harmony export */   createTextVNode: () => (/* binding */ createTextVNode),
/* harmony export */   createVNode: () => (/* binding */ createVNode),
/* harmony export */   customRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   defineAsyncComponent: () => (/* binding */ defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* binding */ defineComponent),
/* harmony export */   defineEmits: () => (/* binding */ defineEmits),
/* harmony export */   defineExpose: () => (/* binding */ defineExpose),
/* harmony export */   defineModel: () => (/* binding */ defineModel),
/* harmony export */   defineOptions: () => (/* binding */ defineOptions),
/* harmony export */   defineProps: () => (/* binding */ defineProps),
/* harmony export */   defineSlots: () => (/* binding */ defineSlots),
/* harmony export */   devtools: () => (/* binding */ devtools),
/* harmony export */   effect: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   effectScope: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   getCurrentInstance: () => (/* binding */ getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   getTransitionRawChildren: () => (/* binding */ getTransitionRawChildren),
/* harmony export */   guardReactiveProps: () => (/* binding */ guardReactiveProps),
/* harmony export */   h: () => (/* binding */ h),
/* harmony export */   handleError: () => (/* binding */ handleError),
/* harmony export */   hasInjectionContext: () => (/* binding */ hasInjectionContext),
/* harmony export */   initCustomFormatter: () => (/* binding */ initCustomFormatter),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   isMemoSame: () => (/* binding */ isMemoSame),
/* harmony export */   isProxy: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   isReactive: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   isReadonly: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   isRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   isRuntimeOnly: () => (/* binding */ isRuntimeOnly),
/* harmony export */   isShallow: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   isVNode: () => (/* binding */ isVNode),
/* harmony export */   markRaw: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   mergeDefaults: () => (/* binding */ mergeDefaults),
/* harmony export */   mergeModels: () => (/* binding */ mergeModels),
/* harmony export */   mergeProps: () => (/* binding */ mergeProps),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   normalizeClass: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass),
/* harmony export */   normalizeProps: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeProps),
/* harmony export */   normalizeStyle: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle),
/* harmony export */   onActivated: () => (/* binding */ onActivated),
/* harmony export */   onBeforeMount: () => (/* binding */ onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* binding */ onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* binding */ onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* binding */ onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* binding */ onErrorCaptured),
/* harmony export */   onMounted: () => (/* binding */ onMounted),
/* harmony export */   onRenderTracked: () => (/* binding */ onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* binding */ onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* binding */ onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* binding */ onUnmounted),
/* harmony export */   onUpdated: () => (/* binding */ onUpdated),
/* harmony export */   openBlock: () => (/* binding */ openBlock),
/* harmony export */   popScopeId: () => (/* binding */ popScopeId),
/* harmony export */   provide: () => (/* binding */ provide),
/* harmony export */   proxyRefs: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   pushScopeId: () => (/* binding */ pushScopeId),
/* harmony export */   queuePostFlushCb: () => (/* binding */ queuePostFlushCb),
/* harmony export */   reactive: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   readonly: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   ref: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   registerRuntimeCompiler: () => (/* binding */ registerRuntimeCompiler),
/* harmony export */   renderList: () => (/* binding */ renderList),
/* harmony export */   renderSlot: () => (/* binding */ renderSlot),
/* harmony export */   resolveComponent: () => (/* binding */ resolveComponent),
/* harmony export */   resolveDirective: () => (/* binding */ resolveDirective),
/* harmony export */   resolveDynamicComponent: () => (/* binding */ resolveDynamicComponent),
/* harmony export */   resolveFilter: () => (/* binding */ resolveFilter),
/* harmony export */   resolveTransitionHooks: () => (/* binding */ resolveTransitionHooks),
/* harmony export */   setBlockTracking: () => (/* binding */ setBlockTracking),
/* harmony export */   setDevtoolsHook: () => (/* binding */ setDevtoolsHook),
/* harmony export */   setTransitionHooks: () => (/* binding */ setTransitionHooks),
/* harmony export */   shallowReactive: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   shallowReadonly: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   shallowRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   ssrContextKey: () => (/* binding */ ssrContextKey),
/* harmony export */   ssrUtils: () => (/* binding */ ssrUtils),
/* harmony export */   stop: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   toDisplayString: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString),
/* harmony export */   toHandlerKey: () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey),
/* harmony export */   toHandlers: () => (/* binding */ toHandlers),
/* harmony export */   toRaw: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   toRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   toRefs: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   toValue: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toValue),
/* harmony export */   transformVNodeArgs: () => (/* binding */ transformVNodeArgs),
/* harmony export */   triggerRef: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   unref: () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   useAttrs: () => (/* binding */ useAttrs),
/* harmony export */   useModel: () => (/* binding */ useModel),
/* harmony export */   useSSRContext: () => (/* binding */ useSSRContext),
/* harmony export */   useSlots: () => (/* binding */ useSlots),
/* harmony export */   useTransitionState: () => (/* binding */ useTransitionState),
/* harmony export */   version: () => (/* binding */ version),
/* harmony export */   warn: () => (/* binding */ warn),
/* harmony export */   watch: () => (/* binding */ watch),
/* harmony export */   watchEffect: () => (/* binding */ watchEffect),
/* harmony export */   watchPostEffect: () => (/* binding */ watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* binding */ watchSyncEffect),
/* harmony export */   withAsyncContext: () => (/* binding */ withAsyncContext),
/* harmony export */   withCtx: () => (/* binding */ withCtx),
/* harmony export */   withDefaults: () => (/* binding */ withDefaults),
/* harmony export */   withDirectives: () => (/* binding */ withDirectives),
/* harmony export */   withMemo: () => (/* binding */ withMemo),
/* harmony export */   withScopeId: () => (/* binding */ withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/





const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg, ...args) {
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
    return raw ? value : [`${key}=`, value];
  }
}
function assertNumber(val, type) {
  if (false) {}
  if (val === void 0) {
    return;
  } else if (typeof val !== "number") {
    warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
  } else if (isNaN(val)) {
    warn$1(`${type} is NaN - the duration expression might be incorrect.`);
  }
}

const ErrorCodes = {
  "SETUP_FUNCTION": 0,
  "0": "SETUP_FUNCTION",
  "RENDER_FUNCTION": 1,
  "1": "RENDER_FUNCTION",
  "WATCH_GETTER": 2,
  "2": "WATCH_GETTER",
  "WATCH_CALLBACK": 3,
  "3": "WATCH_CALLBACK",
  "WATCH_CLEANUP": 4,
  "4": "WATCH_CLEANUP",
  "NATIVE_EVENT_HANDLER": 5,
  "5": "NATIVE_EVENT_HANDLER",
  "COMPONENT_EVENT_HANDLER": 6,
  "6": "COMPONENT_EVENT_HANDLER",
  "VNODE_HOOK": 7,
  "7": "VNODE_HOOK",
  "DIRECTIVE_HOOK": 8,
  "8": "DIRECTIVE_HOOK",
  "TRANSITION_HOOK": 9,
  "9": "TRANSITION_HOOK",
  "APP_ERROR_HANDLER": 10,
  "10": "APP_ERROR_HANDLER",
  "APP_WARN_HANDLER": 11,
  "11": "APP_WARN_HANDLER",
  "FUNCTION_REF": 12,
  "12": "FUNCTION_REF",
  "ASYNC_COMPONENT_LOADER": 13,
  "13": "ASYNC_COMPONENT_LOADER",
  "SCHEDULER": 14,
  "14": "SCHEDULER"
};
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  } else if (true) {
    warn$1(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`
    );
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo =  true ? ErrorTypeStrings$1[type] : 0;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  if (true) {
    const info = ErrorTypeStrings$1[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {}
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = isFlushing ? flushIndex + 1 : 0) {
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      if ( true && checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if ( true && checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      if (cb.active !== false) cb();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre) return -1;
    if (b.pre && !a.pre) return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check =  true ? (job) => checkRecursiveUpdates(seen, job) : 0;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if ( true && check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      handleError(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      );
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}

let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Set();
if (true) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    instance.effect.dirty = true;
    instance.update();
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      instance.parent.effect.dirty = true;
      queueJob(() => {
        instance.parent.update();
        hmrDirtyComponents.delete(oldComp);
      });
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
  }
  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(
        normalizeClassComponent(instance.type)
      );
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}

let devtools$1;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools$1) {
    devtools$1.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook$1(hook, target) {
  var _a, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version) {
  emit$1("app:init" /* APP_INIT */, app, version, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app) {
  emit$1("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added" /* COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed" /* COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools$1.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      component.parent ? component.parent.uid : void 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start" /* PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end" /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1(
    "component:emit" /* COMPONENT_EMIT */,
    component.appContext.app,
    component,
    event,
    params
  );
}

function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
  if (true) {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event) in propsOptions)) {
          warn$1(
            `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)}" prop.`
          );
        }
      } else {
        const validator = emitsOptions[event];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(
              `Invalid event arguments: event validation failed for event "${event}".`
            );
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener = event.startsWith("update:");
  const modelArg = isModelListener && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber);
    }
  }
  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }
  if (true) {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(lowerCaseEvent)]) {
      warn$1(
        `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(
          event
        )}" instead of "${event}".`
      );
    }
  }
  let handlerName;
  let handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
  props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event))];
  if (!handler && isModelListener) {
    handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key);
}

let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
const withScopeId = (_id) => withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    if (true) {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}

let accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit,
    render,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  if (true) {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy =  true && setupState.__isScriptSetup ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render.call(
          thisProxy,
          proxyToUse,
          renderCache,
           true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(props) : 0,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if ( true && attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(
        render2.length > 1 ? render2(
           true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(props) : 0,
           true ? {
            get attrs() {
              markAttrsAccessed();
              return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(attrs);
            },
            slots,
            emit
          } : 0
        ) : render2(
           true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(props) : 0,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if ( true && result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      } else if ( true && !accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn$1(
            `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
          );
        }
        if (eventAttrs.length) {
          warn$1(
            `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
          );
        }
      }
    }
  }
  if (vnode.dirs) {
    if ( true && !isElementRoot(root)) {
      warn$1(
        `Runtime directive used on component with non-element root node. The directives will not function as intended.`
      );
    }
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if ( true && !isElementRoot(root)) {
      warn$1(
        `Component inside <Transition> renders non-element root node that cannot be animated.`
      );
    }
    root.transition = vnode.transition;
  }
  if ( true && setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren, false);
  if (!childRoot) {
    return [vnode, void 0];
  } else if ( true && childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
    return getChildRoot(childRoot);
  }
  const index = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
          if ( true && recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
            return filterSingleRoot(singleRoot.children);
          }
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
const isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}

const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    if ( true && warnMissing && !res) {
      const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else if (true) {
    warn$1(
      `resolve${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type.slice(0, -1))} can only be used in render() or setup().`
    );
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]);
}

const isSuspense = (type) => type.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    if (n1 == null) {
      mountSuspense(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    } else {
      if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
        n2.suspense = n1.suspense;
        n2.suspense.vnode = n2;
        n2.el = n1.el;
        return;
      }
      patchSuspense(
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        namespace,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl ;
function triggerEvent(vnode, name) {
  const eventListener = vnode.props && vnode.props[name];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(eventListener)) {
    eventListener();
  }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
  const {
    p: patch,
    o: { createElement }
  } = rendererInternals;
  const hiddenContainer = createElement("div");
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    container,
    hiddenContainer,
    anchor,
    namespace,
    slotScopeIds,
    optimized,
    rendererInternals
  );
  patch(
    null,
    suspense.pendingBranch = vnode.ssContent,
    hiddenContainer,
    null,
    parentComponent,
    suspense,
    namespace,
    slotScopeIds
  );
  if (suspense.deps > 0) {
    triggerEvent(vnode, "onPending");
    triggerEvent(vnode, "onFallback");
    patch(
      null,
      vnode.ssFallback,
      container,
      anchor,
      parentComponent,
      null,
      // fallback tree will not have suspense context
      namespace,
      slotScopeIds
    );
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    suspense.resolve(false, true);
  }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
  const suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  const newBranch = n2.ssContent;
  const newFallback = n2.ssFallback;
  const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
  if (pendingBranch) {
    suspense.pendingBranch = newBranch;
    if (isSameVNodeType(newBranch, pendingBranch)) {
      patch(
        pendingBranch,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        if (!isHydrating) {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      }
    } else {
      suspense.pendingId = suspenseId++;
      if (isHydrating) {
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      }
      suspense.deps = 0;
      suspense.effects.length = 0;
      suspense.hiddenContainer = createElement("div");
      if (isInFallback) {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(
          activeBranch,
          newBranch,
          container,
          anchor,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        suspense.resolve(true);
      } else {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      patch(
        activeBranch,
        newBranch,
        container,
        anchor,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      setActiveBranch(suspense, newBranch);
    } else {
      triggerEvent(n2, "onPending");
      suspense.pendingBranch = newBranch;
      if (newBranch.shapeFlag & 512) {
        suspense.pendingId = newBranch.component.suspenseId;
      } else {
        suspense.pendingId = suspenseId++;
      }
      patch(
        null,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else {
        const { timeout, pendingId } = suspense;
        if (timeout > 0) {
          setTimeout(() => {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
  if ( true && !hasWarned) {
    hasWarned = true;
    console[console.info ? "info" : "log"](
      `<Suspense> is an experimental feature and its API will likely change.`
    );
  }
  const {
    p: patch,
    m: move,
    um: unmount,
    n: next,
    o: { parentNode, remove }
  } = rendererInternals;
  let parentSuspenseId;
  const isSuspensible = isVNodeSuspensible(vnode);
  if (isSuspensible) {
    if (parentSuspense && parentSuspense.pendingBranch) {
      parentSuspenseId = parentSuspense.pendingId;
      parentSuspense.deps++;
    }
  }
  const timeout = vnode.props ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props.timeout) : void 0;
  if (true) {
    assertNumber(timeout, `Suspense timeout`);
  }
  const initialAnchor = anchor;
  const suspense = {
    vnode,
    parent: parentSuspense,
    parentComponent,
    namespace,
    container,
    hiddenContainer,
    deps: 0,
    pendingId: suspenseId++,
    timeout: typeof timeout === "number" ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !isHydrating,
    isHydrating,
    isUnmounted: false,
    effects: [],
    resolve(resume = false, sync = false) {
      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error(
            `suspense.resolve() is called without a pending branch.`
          );
        }
        if (suspense.isUnmounted) {
          throw new Error(
            `suspense.resolve() is called on an already unmounted suspense boundary.`
          );
        }
      }
      const {
        vnode: vnode2,
        activeBranch,
        pendingBranch,
        pendingId,
        effects,
        parentComponent: parentComponent2,
        container: container2
      } = suspense;
      let delayEnter = false;
      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = () => {
            if (pendingId === suspense.pendingId) {
              move(
                pendingBranch,
                container2,
                anchor === initialAnchor ? next(activeBranch) : anchor,
                0
              );
              queuePostFlushCb(effects);
            }
          };
        }
        if (activeBranch) {
          if (parentNode(activeBranch.el) !== suspense.hiddenContainer) {
            anchor = next(activeBranch);
          }
          unmount(activeBranch, parentComponent2, suspense, true);
        }
        if (!delayEnter) {
          move(pendingBranch, container2, anchor, 0);
        }
      }
      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false;
      let parent = suspense.parent;
      let hasUnresolvedAncestor = false;
      while (parent) {
        if (parent.pendingBranch) {
          parent.effects.push(...effects);
          hasUnresolvedAncestor = true;
          break;
        }
        parent = parent.parent;
      }
      if (!hasUnresolvedAncestor && !delayEnter) {
        queuePostFlushCb(effects);
      }
      suspense.effects = [];
      if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0 && !sync) {
            parentSuspense.resolve();
          }
        }
      }
      triggerEvent(vnode2, "onResolve");
    },
    fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }
      const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
      triggerEvent(vnode2, "onFallback");
      const anchor2 = next(activeBranch);
      const mountFallback = () => {
        if (!suspense.isInFallback) {
          return;
        }
        patch(
          null,
          fallbackVNode,
          container2,
          anchor2,
          parentComponent2,
          null,
          // fallback tree will not have suspense context
          namespace2,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, fallbackVNode);
      };
      const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }
      suspense.isInFallback = true;
      unmount(
        activeBranch,
        parentComponent2,
        null,
        // no suspense so unmount hooks fire now
        true
        // shouldRemove
      );
      if (!delayEnter) {
        mountFallback();
      }
    },
    move(container2, anchor2, type) {
      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
      suspense.container = container2;
    },
    next() {
      return suspense.activeBranch && next(suspense.activeBranch);
    },
    registerDep(instance, setupRenderEffect, optimized2) {
      const isInPendingSuspense = !!suspense.pendingBranch;
      if (isInPendingSuspense) {
        suspense.deps++;
      }
      const hydratedEl = instance.vnode.el;
      instance.asyncDep.catch((err) => {
        handleError(err, instance, 0);
      }).then((asyncSetupResult) => {
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }
        instance.asyncResolved = true;
        const { vnode: vnode2 } = instance;
        if (true) {
          pushWarningContext(vnode2);
        }
        handleSetupResult(instance, asyncSetupResult, false);
        if (hydratedEl) {
          vnode2.el = hydratedEl;
        }
        const placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(
          instance,
          vnode2,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          parentNode(hydratedEl || instance.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          hydratedEl ? null : next(instance.subTree),
          suspense,
          namespace,
          optimized2
        );
        if (placeholder) {
          remove(placeholder);
        }
        updateHOCHostEl(instance, vnode2.el);
        if (true) {
          popWarningContext();
        }
        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount(parentSuspense2, doRemove) {
      suspense.isUnmounted = true;
      if (suspense.activeBranch) {
        unmount(
          suspense.activeBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
      if (suspense.pendingBranch) {
        unmount(
          suspense.pendingBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
    }
  };
  return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    node.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    namespace,
    slotScopeIds,
    optimized,
    rendererInternals,
    true
  );
  const result = hydrateNode(
    node,
    suspense.pendingBranch = vnode.ssContent,
    parentComponent,
    suspense,
    slotScopeIds,
    optimized
  );
  if (suspense.deps === 0) {
    suspense.resolve(false, true);
  }
  return result;
}
function normalizeSuspenseChildren(vnode) {
  const { shapeFlag, children } = vnode;
  const isSlotChildren = shapeFlag & 32;
  vnode.ssContent = normalizeSuspenseSlot(
    isSlotChildren ? children.default : children
  );
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
  let block;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
    const trackBlock = isBlockTreeEnabled && s._c;
    if (trackBlock) {
      s._d = false;
      openBlock();
    }
    s = s();
    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
    const singleChild = filterSingleRoot(s);
    if ( true && !singleChild && s.filter((child) => child !== NULL_DYNAMIC_COMPONENT).length > 0) {
      warn$1(`<Suspense> slots expect a single root node.`);
    }
    s = singleChild;
  }
  s = normalizeVNode(s);
  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter((c) => c !== s);
  }
  return s;
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  const { vnode, parentComponent } = suspense;
  let el = branch.el;
  while (!el && branch.component) {
    branch = branch.component.subTree;
    el = branch.el;
  }
  vnode.el = el;
  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}
function isVNodeSuspensible(vnode) {
  const suspensible = vnode.props && vnode.props.suspensible;
  return suspensible != null && suspensible !== false;
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else if (true) {
    const apiName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
    warn$1(
      `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().` + (` If you are using async setup(), make sure to register lifecycle hooks before the first await statement.` )
    );
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook(
  "rtg"
);
const onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}

function validateDirectiveName(name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isBuiltInDirective)(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
     true && warn$1(`withDirectives can only be used inside render functions.`);
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ] = directives[i];
    if (dir) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    }
  }
}

function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    if ( true && !Number.isInteger(source)) {
      warn$1(`The v-for range expect an integer value but got ${source}.`);
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}

function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res) res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}

/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve, reject) => {
          const userRetry = () => resolve(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if ( true && !comp) {
        warn$1(
          `Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`
        );
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      if ( true && comp && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        throw new Error(`Invalid async component load result: ${comp}`);
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(
          err,
          instance,
          13,
          !errorComponent
        );
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
      const error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
      const delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          instance.parent.effect.dirty = true;
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref2, props, children, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref2;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}

function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    if (name !== "default") props.name = name;
    return createVNode("slot", props, fallback && fallback());
  }
  let slot = slots[name];
  if ( true && slot && slot.length > 1) {
    warn$1(
      `SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`
    );
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(
    Fragment,
    {
      key: props.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      validSlotContent && validSlotContent.key || `_${name}`
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}

function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
    warn$1(`v-on with no argument expects an object value.`);
    return ret;
  }
  for (const key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
  }
  return ret;
}

const getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.props) : 0,
    $attrs: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.attrs) : 0,
    $slots: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.slots) : 0,
    $refs: (i) =>  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.refs) : 0,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => __VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i) => i.f || (i.f = () => {
      i.effect.dirty = true;
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => __VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && !state.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if ( true && key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1 /* SETUP */:
            return setupState[key];
          case 2 /* DATA */:
            return data[key];
          case 4 /* CONTEXT */:
            return ctx[key];
          case 3 /* PROPS */:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1 /* SETUP */;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        accessCache[key] = 2 /* DATA */;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)
      ) {
        accessCache[key] = 3 /* PROPS */;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
        accessCache[key] = 4 /* CONTEXT */;
        return ctx[key];
      } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
        accessCache[key] = 0 /* OTHER */;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance.attrs, "get", "");
         true && markAttrsAccessed();
      } else if ( true && key === "$slots") {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
      accessCache[key] = 4 /* CONTEXT */;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if ( true && currentRenderingInstance && (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && isReservedPrefix(key[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        warn$1(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn$1(
          `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if ( true && setupState.__isScriptSetup && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
      data[key] = value;
      return true;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(instance.props, key)) {
       true && warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
       true && warn$1(
        `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
      );
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
if (true) {
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
  {},
  PublicInstanceProxyHandlers,
  {
    get(target, key) {
      if (key === Symbol.unscopables) {
        return;
      }
      return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
      const has = key[0] !== "_" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyAllowed)(key);
      if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
        warn$1(
          `Property ${JSON.stringify(
            key
          )} should not start with _ which is a reserved prefix for Vue internals.`
        );
      }
      return has;
    }
  }
);
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(
          `setup() return property ${JSON.stringify(
            key
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    }
  });
}

const warnRuntimeUsage = (method) => warn$1(
  `${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function defineProps() {
  if (true) {
    warnRuntimeUsage(`defineProps`);
  }
  return null;
}
function defineEmits() {
  if (true) {
    warnRuntimeUsage(`defineEmits`);
  }
  return null;
}
function defineExpose(exposed) {
  if (true) {
    warnRuntimeUsage(`defineExpose`);
  }
}
function defineOptions(options) {
  if (true) {
    warnRuntimeUsage(`defineOptions`);
  }
}
function defineSlots() {
  if (true) {
    warnRuntimeUsage(`defineSlots`);
  }
  return null;
}
function defineModel() {
  if (true) {
    warnRuntimeUsage("defineModel");
  }
}
function withDefaults(props, defaults) {
  if (true) {
    warnRuntimeUsage(`withDefaults`);
  }
  return null;
}
function useSlots() {
  return getContext().slots;
}
function useAttrs() {
  return getContext().attrs;
}
function getContext() {
  const i = getCurrentInstance();
  if ( true && !i) {
    warn$1(`useContext() called without active instance.`);
  }
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props) ? props.reduce(
    (normalized, p) => (normalized[p] = null, normalized),
    {}
  ) : props;
}
function mergeDefaults(raw, defaults) {
  const props = normalizePropsOrEmits(raw);
  for (const key in defaults) {
    if (key.startsWith("__skip")) continue;
    let opt = props[key];
    if (opt) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt)) {
        opt = props[key] = { type: opt, default: defaults[key] };
      } else {
        opt.default = defaults[key];
      }
    } else if (opt === null) {
      opt = props[key] = { default: defaults[key] };
    } else if (true) {
      warn$1(`props default key "${key}" has no corresponding declaration.`);
    }
    if (opt && defaults[`__skip_${key}`]) {
      opt.skipFactory = true;
    }
  }
  return props;
}
function mergeModels(a, b) {
  if (!a || !b) return a || b;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(a) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(b)) return a.concat(b);
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
  const ret = {};
  for (const key in props) {
    if (!excludedKeys.includes(key)) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        get: () => props[key]
      });
    }
  }
  return ret;
}
function withAsyncContext(getAwaitable) {
  const ctx = getCurrentInstance();
  if ( true && !ctx) {
    warn$1(
      `withAsyncContext called without active current instance. This is likely a bug.`
    );
  }
  let awaitable = getAwaitable();
  unsetCurrentInstance();
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(awaitable)) {
    awaitable = awaitable.catch((e) => {
      setCurrentInstance(ctx);
      throw e;
    });
  }
  return [awaitable, () => setCurrentInstance(ctx)];
}

function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties =  true ? createDuplicateChecker() : 0;
  if (true) {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props" /* PROPS */, key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
        if (true) {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {}
        if (true) {
          checkDuplicateProperties("Methods" /* METHODS */, key);
        }
      } else if (true) {
        warn$1(
          `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
        );
      }
    }
  }
  if (dataOptions) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataOptions)) {
      warn$1(
        `The data option must be a function. Plain object usage is no longer supported.`
      );
    }
    const data = dataOptions.call(publicThis, publicThis);
    if ( true && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(data)) {
      warn$1(
        `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
      );
    }
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
       true && warn$1(`data() should return an object.`);
    } else {
      instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);
      if (true) {
        for (const key in data) {
          checkDuplicateProperties("Data" /* DATA */, key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set) ? opt.set.bind(publicThis) :  true ? () => {
        warn$1(
          `Write operation failed: computed property "${key}" is readonly.`
        );
      } : 0;
      const c = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      if (true) {
        checkDuplicateProperties("Computed" /* COMPUTED */, key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    if (true) {
      checkDuplicateProperties("Inject" /* INJECT */, key);
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
    const handler = ctx[raw];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
        watch(getter, handler, raw);
      } else if (true) {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else if (true) {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
       true && warn$1(
        `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
      );
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend))(
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(to) ? to.call(this, this) : to,
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(to) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp(rootComponent, rootProps = null) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(rootComponent)) {
      rootComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, rootComponent);
    }
    if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
       true && warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        if (true) {
          warn$1(
            `app.config cannot be replaced. Modify individual options instead.`
          );
        }
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
           true && warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else if (true) {
          warn$1(
            `A plugin must either be a function or an object with an "install" function.`
          );
        }
        return app;
      },
      mixin(mixin) {
        if (__VUE_OPTIONS_API__) {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else if (true) {
            warn$1(
              "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
            );
          }
        } else if (true) {
          warn$1("Mixins are only available in builds supporting Options API");
        }
        return app;
      },
      component(name, component) {
        if (true) {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if ( true && context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (true) {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if ( true && context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          if ( true && rootContainer.__vue_app__) {
            warn$1(
              `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
            );
          }
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (true) {
            context.reload = () => {
              render(
                cloneVNode(vnode),
                rootContainer,
                namespace
              );
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getComponentPublicInstance(vnode.component);
        } else if (true) {
          warn$1(
            `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
          );
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container);
          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else if (true) {
          warn$1(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if ( true && key in context.provides) {
          warn$1(
            `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
          );
        }
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else if (true) {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else if (true) {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
function hasInjectionContext() {
  return !!(currentInstance || currentRenderingInstance || currentApp);
}

const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;

function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive)(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId) return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !( true && isInHmrContext(instance)) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) === key || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance.attrs, "set", "");
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    const castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0 /* shouldCast */]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1 /* shouldCastTrue */] && (value === "" || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
      cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
    }
    return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? { type: opt } : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0 /* shouldCast */] = booleanIndex > -1;
          prop[1 /* shouldCastTrue */] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
    return true;
  } else if (true) {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null) continue;
    validateProp(
      key,
      resolvedValues[key],
      opt,
       true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(resolvedValues) : 0,
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))
    );
  }
}
function validateProp(name, value, prop, props, isAbsent) {
  const { type, required, validator, skipCheck } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value, props)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value);
  } else if (expectedType === "Array") {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toRawType)(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}

const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if ( true && currentInstance && (!ctx || ctx.root === currentInstance.root)) {
      warn$1(
        `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
      );
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      if (true) {
        warn$1(
          `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
        );
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  if ( true && !isKeepAlive(instance.vnode) && true) {
    warn$1(
      `Non-function value encountered for default slot. Prefer function slots for better performance.`
    );
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(slots, "_", type, true);
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if ( true && isHmrUpdating) {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set", "$slots");
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};

function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref } = rawRef;
  if ( true && !owner) {
    warn$1(
      `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
    );
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
      refs[oldRef] = null;
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(oldRef)) {
      oldRef.value = null;
    }
  }
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
    callWithErrorHandling(ref, owner, 12, [value, refs]);
  } else {
    const _isString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref);
    const _isRef = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
          if (isUnmount) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(existing, refValue);
          } else {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing)) {
              if (_isString) {
                refs[ref] = [refValue];
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
                  setupState[ref] = refs[ref];
                }
              } else {
                ref.value = [refValue];
                if (rawRef.k) refs[rawRef.k] = ref.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref] = value;
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
            setupState[ref] = value;
          }
        } else if (_isRef) {
          ref.value = value;
          if (rawRef.k) refs[rawRef.k] = value;
        } else if (true) {
          warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (true) {
      warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
    }
  }
}

let hasLoggedMismatchError = false;
const logMismatchError = () => {
  if (hasLoggedMismatchError) {
    return;
  }
  console.error("Hydration completed but contains mismatches.");
  hasLoggedMismatchError = true;
};
const isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
const getContainerType = (container) => {
  if (isSVGContainer(container)) return "svg";
  if (isMathMLContainer(container)) return "mathml";
  return void 0;
};
const isComment = (node) => node.nodeType === 8 /* COMMENT */;
function createHydrationFunctions(rendererInternals) {
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp,
      createText,
      nextSibling,
      parentNode,
      remove,
      insert,
      createComment
    }
  } = rendererInternals;
  const hydrate = (vnode, container) => {
    if (!container.hasChildNodes()) {
      ( true) && warn$1(
        `Attempting to hydrate existing markup but container is empty. Performing full mount instead.`
      );
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      isFragmentStart
    );
    const { type, ref, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (true) {
      if (!("__vnode" in node)) {
        Object.defineProperty(node, "__vnode", {
          value: vnode,
          enumerable: false
        });
      }
      if (!("__vueParentComponent" in node)) {
        Object.defineProperty(node, "__vueParentComponent", {
          value: parentComponent,
          enumerable: false
        });
      }
    }
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3 /* TEXT */) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            ( true) && warn$1(
              `Hydration text mismatch in`,
              node.parentNode,
              `
  - rendered on server: ${JSON.stringify(
                node.data
              )}
  - expected on client: ${JSON.stringify(vnode.children)}`
            );
            logMismatchError();
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (isTemplateNode(node)) {
          nextNode = nextSibling(node);
          replaceNode(
            vnode.el = node.content.firstChild,
            node,
            parentComponent
          );
        } else if (domType !== 8 /* COMMENT */ || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 /* ELEMENT */ || domType === 3 /* TEXT */) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 /* ELEMENT */ ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
        break;
      default:
        if (shapeFlag & 1) {
          if ((domType !== 1 /* ELEMENT */ || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          if (isFragmentStart) {
            nextNode = locateClosingAnchor(node);
          } else if (isComment(node) && node.data === "teleport start") {
            nextNode = locateClosingAnchor(node, node.data, "teleport end");
          } else {
            nextNode = nextSibling(node);
          }
          mountComponent(
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            getContainerType(container),
            optimized
          );
          if (isAsyncWrapper(vnode)) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8 /* COMMENT */) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateChildren
            );
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            getContainerType(parentNode(node)),
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateNode
          );
        } else if (true) {
          warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
    }
    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
    const forcePatch = type === "input" || type === "option";
    if (true) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      let needCallTransitionHooks = false;
      if (isTemplateNode(el)) {
        needCallTransitionHooks = needTransition(parentSuspense, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
        const content = el.content.firstChild;
        if (needCallTransitionHooks) {
          transition.beforeEnter(content);
        }
        replaceNode(content, el, parentComponent);
        vnode.el = el = content;
      }
      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(
          el.firstChild,
          vnode,
          el,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        let hasWarned = false;
        while (next) {
          if (( true) && !hasWarned) {
            warn$1(
              `Hydration children mismatch on`,
              el,
              `
Server rendered element contains more child nodes than client vdom.`
            );
            hasWarned = true;
          }
          logMismatchError();
          const cur = next;
          next = next.nextSibling;
          remove(cur);
        }
      } else if (shapeFlag & 8) {
        if (el.textContent !== vnode.children) {
          ( true) && warn$1(
            `Hydration text content mismatch on`,
            el,
            `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`
          );
          logMismatchError();
          el.textContent = vnode.children;
        }
      }
      if (props) {
        if (true) {
          for (const key in props) {
            if (( true) && propHasMismatch(el, key, props[key], vnode, parentComponent)) {
              logMismatchError();
            }
            if (forcePatch && (key.endsWith("value") || key === "indeterminate") || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) || // force hydrate v-bind with .prop modifiers
            key[0] === ".") {
              patchProp(
                el,
                key,
                null,
                props[key],
                void 0,
                void 0,
                parentComponent
              );
            }
          }
        } else {}
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    let hasWarned = false;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      if (node) {
        node = hydrateNode(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      } else if (vnode.type === Text && !vnode.children) {
        insert(vnode.el = createText(""), container);
      } else {
        if (( true) && !hasWarned) {
          warn$1(
            `Hydration children mismatch on`,
            container,
            `
Server rendered element contains fewer child nodes than client vdom.`
          );
          hasWarned = true;
        }
        logMismatchError();
        patch(
          null,
          vnode,
          container,
          null,
          parentComponent,
          parentSuspense,
          getContainerType(container),
          slotScopeIds
        );
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(
      nextSibling(node),
      vnode,
      container,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      logMismatchError();
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    ( true) && warn$1(
      `Hydration node mismatch:
- rendered on server:`,
      node,
      node.nodeType === 3 /* TEXT */ ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``,
      `
- expected on client:`,
      vnode.type
    );
    logMismatchError();
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove(node);
    patch(
      null,
      vnode,
      container,
      next,
      parentComponent,
      parentSuspense,
      getContainerType(container),
      slotScopeIds
    );
    return next;
  };
  const locateClosingAnchor = (node, open = "[", close = "]") => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === open) match++;
        if (node.data === close) {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  const replaceNode = (newNode, oldNode, parentComponent) => {
    const parentNode2 = oldNode.parentNode;
    if (parentNode2) {
      parentNode2.replaceChild(newNode, oldNode);
    }
    let parent = parentComponent;
    while (parent) {
      if (parent.vnode.el === oldNode) {
        parent.vnode.el = parent.subTree.el = newNode;
      }
      parent = parent.parent;
    }
  };
  const isTemplateNode = (node) => {
    return node.nodeType === 1 /* ELEMENT */ && node.tagName.toLowerCase() === "template";
  };
  return [hydrate, hydrateNode];
}
function propHasMismatch(el, key, clientValue, vnode, instance) {
  var _a;
  let mismatchType;
  let mismatchKey;
  let actual;
  let expected;
  if (key === "class") {
    actual = el.getAttribute("class");
    expected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(clientValue);
    if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) {
      mismatchType = mismatchKey = `class`;
    }
  } else if (key === "style") {
    actual = el.getAttribute("style") || "";
    expected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(clientValue) ? clientValue : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.stringifyStyle)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(clientValue));
    const actualMap = toStyleMap(actual);
    const expectedMap = toStyleMap(expected);
    if (vnode.dirs) {
      for (const { dir, value } of vnode.dirs) {
        if (dir.name === "show" && !value) {
          expectedMap.set("display", "none");
        }
      }
    }
    const root = instance == null ? void 0 : instance.subTree;
    if (vnode === root || // eslint-disable-next-line no-restricted-syntax
    (root == null ? void 0 : root.type) === Fragment && root.children.includes(vnode)) {
      const cssVars = (_a = instance == null ? void 0 : instance.getCssVars) == null ? void 0 : _a.call(instance);
      for (const key2 in cssVars) {
        expectedMap.set(`--${key2}`, String(cssVars[key2]));
      }
    }
    if (!isMapEqual(actualMap, expectedMap)) {
      mismatchType = mismatchKey = "style";
    }
  } else if (el instanceof SVGElement && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isKnownSvgAttr)(key) || el instanceof HTMLElement && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isBooleanAttr)(key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isKnownHtmlAttr)(key))) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isBooleanAttr)(key)) {
      actual = el.hasAttribute(key);
      expected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(clientValue);
    } else if (clientValue == null) {
      actual = el.hasAttribute(key);
      expected = false;
    } else {
      if (el.hasAttribute(key)) {
        actual = el.getAttribute(key);
      } else if (key === "value" && el.tagName === "TEXTAREA") {
        actual = el.value;
      } else {
        actual = false;
      }
      expected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isRenderableAttrValue)(clientValue) ? String(clientValue) : false;
    }
    if (actual !== expected) {
      mismatchType = `attribute`;
      mismatchKey = key;
    }
  }
  if (mismatchType) {
    const format = (v) => v === false ? `(not rendered)` : `${mismatchKey}="${v}"`;
    const preSegment = `Hydration ${mismatchType} mismatch on`;
    const postSegment = `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    {
      warn$1(preSegment, el, postSegment);
    }
    return true;
  }
  return false;
}
function toClassSet(str) {
  return new Set(str.trim().split(/\s+/));
}
function isSetEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const s of a) {
    if (!b.has(s)) {
      return false;
    }
  }
  return true;
}
function toStyleMap(str) {
  const styleMap = /* @__PURE__ */ new Map();
  for (const item of str.split(";")) {
    let [key, value] = item.split(":");
    key = key == null ? void 0 : key.trim();
    value = value == null ? void 0 : value.trim();
    if (key && value) {
      styleMap.set(key, value);
    }
  }
  return styleMap;
}
function isMapEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (const [key, value] of a) {
    if (value !== b.get(key)) {
      return false;
    }
  }
  return true;
}

let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  if (true) {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(
      `<${formatComponentName(instance, instance.type)}> ${type}`,
      startTag,
      endTag
    );
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  if (true) {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}

function initFeatureFlags() {
  const needWarn = [];
  if (typeof __VUE_OPTIONS_API__ !== "boolean") {
     true && needWarn.push(`__VUE_OPTIONS_API__`);
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_OPTIONS_API__ = true;
  }
  if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") {
     true && needWarn.push(`__VUE_PROD_DEVTOOLS__`);
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
  }
  if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ !== "boolean") {
     true && needWarn.push(`__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`);
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
  }
  if ( true && needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(
      `Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}

const queuePostRenderEffect = queueEffectWithSuspense ;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
  target.__VUE__ = true;
  if (true) {
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized =  true && isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        } else if (true) {
          patchStaticNode(n1, n2, container, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (true) {
          warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
    }
    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const patchStaticNode = (n1, n2, container, namespace) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        namespace
      );
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
          hostPatchProp(
            el,
            key,
            null,
            props[key],
            namespace,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (true) {
      Object.defineProperty(el, "__vnode", {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, "__vueParentComponent", {
        value: parentComponent,
        enumerable: false
      });
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if ( true && subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    const newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if ( true && isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
      if (true) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          namespace
        );
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(
                el,
                key,
                prev,
                next,
                namespace,
                n1.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(
        el,
        n2,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        namespace
      );
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren
            );
          }
        }
      }
      for (const key in newProps) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(
            el,
            key,
            prev,
            next,
            namespace,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if ( true && // #5523 dev root fragment may inherit directives
    (isHmrUpdating || patchFlag & 2048)) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (true) {
          traverseStaticChildren(n1, n2);
        } else {}
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = (initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    ));
    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }
    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      if (true) {
        startMeasure(instance, `init`);
      }
      setupComponent(instance);
      if (true) {
        endMeasure(instance, `init`);
      }
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
    if (true) {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        if (true) {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        if (true) {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.effect.dirty = true;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            if (true) {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
            if (true) {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (true) {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          if (true) {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        if (true) {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        if (true) {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        if (true) {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        if (true) {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        if (true) {
          startMeasure(instance, `patch`);
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        if (true) {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
        if (true) {
          devtoolsComponentUpdated(instance);
        }
        if (true) {
          popWarningContext();
        }
      }
    };
    const effect = instance.effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect(
      componentUpdateFn,
      _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP,
      () => queueJob(update),
      instance.scope
      // track it in component's effect scope
    );
    const update = instance.update = () => {
      if (effect.dirty) {
        effect.run();
      }
    };
    update.id = instance.uid;
    toggleRecurse(instance, true);
    if (true) {
      effect.onTrack = instance.rtc ? (e) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtc, e) : void 0;
      effect.onTrigger = instance.rtg ? (e) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtg, e) : void 0;
      update.ownerInstance = instance;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    flushPreFlushCbs(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if ( true && keyToNewIndexMap.has(nextChild.key)) {
            warn$1(
              `Duplicate keys found during update:`,
              JSON.stringify(nextChild.key),
              `Make sure keys are unique.`
            );
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove2 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove2();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove2, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      memoIndex
    } = vnode;
    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }
    if (memoIndex != null) {
      parentComponent.renderCache[memoIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          optimized,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      if ( true && vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const { bum, scope, update, subTree, um, m, a } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  let isFlushing = false;
  const render = (vnode, container, namespace) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs();
      flushPostFlushCbs();
      isFlushing = false;
    }
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
      if ( true && c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++) hooks[i].active = false;
  }
}

const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    if (!ctx) {
       true && warn$1(
        `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
      );
    }
    return ctx;
  }
};

function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(
    effect,
    null,
     true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, options, { flush: "post" }) : 0
  );
}
function watchSyncEffect(effect, options) {
  return doWatch(
    effect,
    null,
     true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, options, { flush: "sync" }) : 0
  );
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cb)) {
    warn$1(
      `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
    );
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, {
  immediate,
  deep,
  flush,
  once,
  onTrack,
  onTrigger
} = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
  if (cb && once) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      unwatch();
    };
  }
  if ( true && deep !== void 0 && typeof deep === "number") {
    warn$1(
      `watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.`
    );
  }
  if ( true && !cb) {
    if (immediate !== void 0) {
      warn$1(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn$1(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (once !== void 0) {
      warn$1(
        `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const warnInvalidSource = (s) => {
    warn$1(
      `Invalid watch source: `,
      s,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const instance = currentInstance;
  const reactiveGetter = (source2) => deep === true ? source2 : (
    // for deep: false, only traverse root-level properties
    traverse(source2, deep === false ? 1 : void 0)
  );
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(source)) {
    getter = () => source.value;
    forceTrigger = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(source);
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(s));
    getter = () => source.map((s) => {
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(s)) {
        return s.value;
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s)) {
        return reactiveGetter(s);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else {
         true && warnInvalidSource(s);
      }
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
     true && warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
      cleanup = effect.onStop = void 0;
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active || !effect.dirty) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(v, oldValue[i])) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance) job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect = new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect(getter, _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP, scheduler);
  const scope = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)();
  const unwatch = () => {
    effect.stop();
    if (scope) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(scope.effects, effect);
    }
  };
  if (true) {
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(
      effect.run.bind(effect),
      instance && instance.suspense
    );
  } else {
    effect.run();
  }
  if (ssrCleanup) ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  depth--;
  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    traverse(value.value, depth, seen);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMap)(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
  name: `KeepAlive`,
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const sharedContext = instance.ctx;
    if (!sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    const cache = /* @__PURE__ */ new Map();
    const keys = /* @__PURE__ */ new Set();
    let current = null;
    if (true) {
      instance.__v_cache = cache;
    }
    const parentSuspense = instance.suspense;
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement }
      }
    } = sharedContext;
    const storageContainer = createElement("div");
    sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
      const instance2 = vnode.component;
      move(vnode, container, anchor, 0, parentSuspense);
      patch(
        instance2.vnode,
        vnode,
        container,
        anchor,
        instance2,
        parentSuspense,
        namespace,
        vnode.slotScopeIds,
        optimized
      );
      queuePostRenderEffect(() => {
        instance2.isDeactivated = false;
        if (instance2.a) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance2.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
      }, parentSuspense);
      if (true) {
        devtoolsComponentAdded(instance2);
      }
    };
    sharedContext.deactivate = (vnode) => {
      const instance2 = vnode.component;
      invalidateMount(instance2.m);
      invalidateMount(instance2.a);
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance2.da) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance2.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
        instance2.isDeactivated = true;
      }, parentSuspense);
      if (true) {
        devtoolsComponentAdded(instance2);
      }
    };
    function unmount(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }
    function pruneCache(filter) {
      cache.forEach((vnode, key) => {
        const name = getComponentName(vnode.type);
        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }
    function pruneCacheEntry(key) {
      const cached = cache.get(key);
      if (!current || !isSameVNodeType(cached, current)) {
        unmount(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
      cache.delete(key);
      keys.delete(key);
    }
    watch(
      () => [props.include, props.exclude],
      ([include, exclude]) => {
        include && pruneCache((name) => matches(include, name));
        exclude && pruneCache((name) => !matches(exclude, name));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: true }
    );
    let pendingCacheKey = null;
    const cacheSubtree = () => {
      if (pendingCacheKey != null) {
        if (isSuspense(instance.subTree.type)) {
          queuePostRenderEffect(() => {
            cache.set(pendingCacheKey, getInnerChild(instance.subTree));
          }, instance.subTree.suspense);
        } else {
          cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        }
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache.forEach((cached) => {
        const { subTree, suspense } = instance;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && cached.key === vnode.key) {
          resetShapeFlag(vnode);
          const da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount(cached);
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        if (true) {
          warn$1(`KeepAlive should contain exactly one component child.`);
        }
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
        current = null;
        return rawVNode;
      }
      let vnode = getInnerChild(rawVNode);
      const comp = vnode.type;
      const name = getComponentName(
        isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
      );
      const { include, exclude, max } = props;
      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }
      const key = vnode.key == null ? comp : vnode.key;
      const cachedVNode = cache.get(key);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & 128) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key);
        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
    return pattern.some((p) => matches(p, name));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
    return pattern.split(",").includes(name);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isRegExp)(pattern)) {
    return pattern.test(name);
  }
  return false;
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= ~256;
  vnode.shapeFlag &= ~512;
}
function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}

const leaveCbKey = Symbol("_leaveCb");
const enterCbKey = Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        let hasFound = false;
        for (const c of children) {
          if (c.type !== Comment) {
            if ( true && hasFound) {
              warn$1(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            child = c;
            hasFound = true;
            if (false) {}
          }
        }
      }
      const rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
      const { mode } = rawProps;
      if ( true && mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
        warn$1(`invalid <transition> mode: ${mode}`);
      }
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state,
        instance,
        // #11061, ensure enterHooks is fresh after clone
        (hooks) => enterHooks = hooks
      );
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
        const leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (instance.update.active !== false) {
              instance.effect.dirty = true;
              instance.update();
            }
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook(hook, args);
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el[enterCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey] = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove) {
      const key2 = String(vnode.key);
      if (el[enterCbKey]) {
        el[enterCbKey](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove();
      }
      callHook(onBeforeLeave, [el]);
      let called = false;
      const done = el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove();
        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state,
        instance,
        postClone
      );
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  if (!isKeepAlive(vnode)) {
    return vnode;
  }
  if ( true && vnode.component) {
    return vnode.component.subTree;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
    if (!select) {
       true && warn$1(
        `Current renderer does not support string target for Teleports. (missing querySelector renderer option)`
      );
      return null;
    } else {
      const target = select(targetSelector);
      if ( true && !target && !isTeleportDisabled(props)) {
        warn$1(
          `Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
        );
      }
      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn$1(`Invalid Teleport target: ${targetSelector}`);
    }
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if ( true && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }
    if (n1 == null) {
      const placeholder = n2.el =  true ? createComment("teleport start") : 0;
      const mainAnchor = n2.anchor =  true ? createComment("teleport end") : 0;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const target = n2.target = resolveTarget(n2.props, querySelector);
      const targetAnchor = n2.targetAnchor = createText("");
      if (target) {
        insert(targetAnchor, target);
        if (namespace === "svg" || isTargetSVG(target)) {
          namespace = "svg";
        } else if (namespace === "mathml" || isTargetMathML(target)) {
          namespace = "mathml";
        }
      } else if ( true && !disabled) {
        warn$1("Invalid Teleport target on mount:", target, `(${typeof target})`);
      }
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          } else if (true) {
            warn$1(
              "Invalid Teleport target on update:",
              target,
              `(${typeof target})`
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
    }
    updateCssVars(n2);
  },
  remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
    if (target) {
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount(
          child,
          parentComponent,
          parentSuspense,
          shouldRemove,
          !!child.dynamicChildren
        );
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(
          children[i],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector }
}, hydrateChildren) {
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(
          nextSibling(node),
          vnode,
          parentNode(node),
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          targetAnchor = nextSibling(targetAnchor);
          if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
            vnode.targetAnchor = targetAnchor;
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        }
        hydrateChildren(
          targetNode,
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode);
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node = vnode.children[0].el;
    while (node && node !== vnode.targetAnchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}

const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
    n1.shapeFlag &= ~256;
    n2.shapeFlag &= ~512;
    return false;
  }
  return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
  return _createVNode(
    ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
  );
};
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref,
  ref_key,
  ref_for
}) => {
  if (typeof ref === "number") {
    ref = "" + ref;
  }
  return ref != null ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref) ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(children) ? 8 : 16;
  }
  if ( true && vnode.key !== vnode.key) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode =  true ? createVNodeWithArgsTransform : 0;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn$1(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
      props.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
        style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
      }
      props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
    }
  }
  const shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type) ? 4 : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type) ? 2 : 0;
  if ( true && shapeFlag & 4 && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(type)) {
    type = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(type);
    warn$1(
      `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
      `
Component that was made reactive: `,
      type
    );
  }
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(props) || isInternalObject(props) ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  true && patchFlag === -1 && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}

const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  if (true) {
    instance.ctx = createDevRenderContext(instance);
  } else {}
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set) => set(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("slot,component");
function validateComponentName(name, { isNativeTag }) {
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1(
      "Do not use built-in or reserved HTML elements as component id: " + name
    );
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  var _a;
  const Component = instance.type;
  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn$1(
        `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
      );
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  if (true) {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
         true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.props) : 0,
        setupContext
      ]
    );
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    reset();
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if ( true && !instance.suspense) {
          const name = (_a = Component.name) != null ? _a : "Anonymous";
          warn$1(
            `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
          );
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn$1(
        `setup() should not return VNodes directly - return a render function instead.`
      );
    }
    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(setupResult);
    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== void 0) {
    warn$1(
      `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
    );
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
  compile = _compile;
  installWithProxy = (i) => {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
}
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        if (true) {
          startMeasure(instance, `compile`);
        }
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
        if (true) {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  if (__VUE_OPTIONS_API__ && true) {
    const reset = setCurrentInstance(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    try {
      applyOptions(instance);
    } finally {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      reset();
    }
  }
  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP && !isSSR) {
    if (!compile && Component.template) {
      warn$1(
        `Component provided template option but runtime compilation is not supported in this build of Vue.` + (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".` )
      );
    } else {
      warn$1(`Component is missing template or render function: `, Component);
    }
  }
}
const attrsProxyHandlers =  true ? {
  get(target, key) {
    markAttrsAccessed();
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(target, "get", "");
    return target[key];
  },
  set() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  },
  deleteProperty() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  }
} : 0;
function getSlotsProxy(instance) {
  return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
    get(target, key) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get", "$slots");
      return target[key];
    }
  }));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (true) {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(exposed)) {
            exposedType = "array";
          } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1(
            `expose() should be passed a plain object, received ${exposedType}.`
          );
        }
      }
    }
    instance.exposed = exposed || {};
  };
  if (true) {
    let attrsProxy;
    return Object.freeze({
      get attrs() {
        return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
      },
      get slots() {
        return getSlotsProxy(instance);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  } else {}
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && "__vccOpts" in value;
}

const computed = (getterOrOptions, debugOptions) => {
  const c = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
  if (true) {
    const i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c._warnRecursive = true;
    }
  }
  return c;
};

function useModel(props, name, options = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
  const i = getCurrentInstance();
  if ( true && !i) {
    warn$1(`useModel() called without active instance.`);
    return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
  }
  if ( true && !i.propsOptions[0][name]) {
    warn$1(`useModel() called with prop "${name}" which is not declared.`);
    return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
  }
  const camelizedName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name);
  const hyphenatedName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name);
  const res = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef)((track, trigger) => {
    let localValue;
    watchSyncEffect(() => {
      const propValue = props[name];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(localValue, propValue)) {
        localValue = propValue;
        trigger();
      }
    });
    return {
      get() {
        track();
        return options.get ? options.get(localValue) : localValue;
      },
      set(value) {
        const rawProps = i.vnode.props;
        if (!(rawProps && // check if parent has passed v-model
        (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps)) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(value, localValue)) {
          localValue = value;
          trigger();
        }
        i.emit(`update:${name}`, options.set ? options.set(value) : value);
      }
    };
  });
  const modifierKey = name === "modelValue" ? "modelModifiers" : `${name}Modifiers`;
  res[Symbol.iterator] = () => {
    let i2 = 0;
    return {
      next() {
        if (i2 < 2) {
          return { value: i2++ ? props[modifierKey] || {} : res, done: false };
        } else {
          return { done: true };
        }
      }
    };
  };
  return res;
}

function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}

function initCustomFormatter() {
  if ( false || typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#1677ff" };
  const stringStyle = { style: "color:#f5222d" };
  const keywordStyle = { style: "color:#eb2f96" };
  const formatter = {
    header(obj) {
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(obj.value),
          `>`
        ];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj) ? ` (readonly)` : ``}`
        ];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.props)));
    }
    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data)));
    }
    const computed = extractKeys(instance, "computed");
    if (computed) {
      blocks.push(createInstanceBlock("computed", computed));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
      return ["object", { object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isShallow)(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}

function withMemo(memo, render, cache, index) {
  const cached = cache[index];
  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }
  const ret = render();
  ret.memo = memo.slice();
  ret.memoIndex = index;
  return cache[index] = ret;
}
function isMemoSame(cached, memo) {
  const prev = cached.memo;
  if (prev.length != memo.length) {
    return false;
  }
  for (let i = 0; i < prev.length; i++) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(prev[i], memo[i])) {
      return false;
    }
  }
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }
  return true;
}

const version = "3.4.29";
const warn =  true ? warn$1 : 0;
const ErrorTypeStrings = ErrorTypeStrings$1 ;
const devtools =  true ? devtools$1 : 0;
const setDevtoolsHook =  true ? setDevtoolsHook$1 : 0;
const _ssrUtils = {
  createComponentInstance,
  setupComponent,
  renderComponentRoot,
  setCurrentRenderingInstance,
  isVNode: isVNode,
  normalizeVNode,
  getComponentPublicInstance
};
const ssrUtils = _ssrUtils ;
const resolveFilter = null;
const compatUtils = null;
const DeprecationTypes = null;




/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransition: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   BaseTransitionPropsValidators: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransitionPropsValidators),
/* harmony export */   Comment: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   DeprecationTypes: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.DeprecationTypes),
/* harmony export */   EffectScope: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   ErrorCodes: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ErrorCodes),
/* harmony export */   ErrorTypeStrings: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeStrings),
/* harmony export */   Fragment: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   KeepAlive: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   ReactiveEffect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   Static: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   Suspense: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   Teleport: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   Text: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   TrackOpTypes: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.TrackOpTypes),
/* harmony export */   Transition: () => (/* binding */ Transition),
/* harmony export */   TransitionGroup: () => (/* binding */ TransitionGroup),
/* harmony export */   TriggerOpTypes: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.TriggerOpTypes),
/* harmony export */   VueElement: () => (/* binding */ VueElement),
/* harmony export */   assertNumber: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assertNumber),
/* harmony export */   callWithAsyncErrorHandling: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   callWithErrorHandling: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   camelize: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   capitalize: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   cloneVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   compatUtils: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   computed: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   createApp: () => (/* binding */ createApp),
/* harmony export */   createBlock: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   createCommentVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   createElementBlock: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   createElementVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   createHydrationRenderer: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   createPropsRestProxy: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   createRenderer: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   createSSRApp: () => (/* binding */ createSSRApp),
/* harmony export */   createSlots: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   createStaticVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   createTextVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   createVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   customRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   defineAsyncComponent: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   defineCustomElement: () => (/* binding */ defineCustomElement),
/* harmony export */   defineEmits: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   defineExpose: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   defineModel: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineModel),
/* harmony export */   defineOptions: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineOptions),
/* harmony export */   defineProps: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   defineSSRCustomElement: () => (/* binding */ defineSSRCustomElement),
/* harmony export */   defineSlots: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineSlots),
/* harmony export */   devtools: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   effect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   effectScope: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   getCurrentInstance: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   getTransitionRawChildren: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   guardReactiveProps: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   h: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   handleError: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   hasInjectionContext: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.hasInjectionContext),
/* harmony export */   hydrate: () => (/* binding */ hydrate),
/* harmony export */   initCustomFormatter: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   initDirectivesForSSR: () => (/* binding */ initDirectivesForSSR),
/* harmony export */   inject: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   isMemoSame: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   isProxy: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   isReactive: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   isReadonly: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   isRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   isRuntimeOnly: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   isShallow: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   isVNode: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   markRaw: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   mergeDefaults: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   mergeModels: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeModels),
/* harmony export */   mergeProps: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   nextTick: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   normalizeClass: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   normalizeProps: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   normalizeStyle: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   onActivated: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   onBeforeMount: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   onMounted: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   onRenderTracked: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   onUpdated: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   openBlock: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   popScopeId: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   provide: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   proxyRefs: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   pushScopeId: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   queuePostFlushCb: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   reactive: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   readonly: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   ref: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   registerRuntimeCompiler: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderList: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   renderSlot: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   resolveComponent: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   resolveDirective: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   resolveDynamicComponent: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   resolveFilter: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   resolveTransitionHooks: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   setBlockTracking: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   setDevtoolsHook: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   setTransitionHooks: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   shallowReactive: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   shallowReadonly: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   shallowRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   ssrContextKey: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   ssrUtils: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   stop: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   toDisplayString: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   toHandlerKey: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   toHandlers: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   toRaw: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   toRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   toRefs: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   toValue: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toValue),
/* harmony export */   transformVNodeArgs: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   triggerRef: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   unref: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   useAttrs: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   useCssModule: () => (/* binding */ useCssModule),
/* harmony export */   useCssVars: () => (/* binding */ useCssVars),
/* harmony export */   useModel: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useModel),
/* harmony export */   useSSRContext: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   useSlots: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   useTransitionState: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   vModelCheckbox: () => (/* binding */ vModelCheckbox),
/* harmony export */   vModelDynamic: () => (/* binding */ vModelDynamic),
/* harmony export */   vModelRadio: () => (/* binding */ vModelRadio),
/* harmony export */   vModelSelect: () => (/* binding */ vModelSelect),
/* harmony export */   vModelText: () => (/* binding */ vModelText),
/* harmony export */   vShow: () => (/* binding */ vShow),
/* harmony export */   version: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   warn: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   watch: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   watchEffect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   watchPostEffect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   withAsyncContext: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   withCtx: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   withDefaults: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   withDirectives: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   withKeys: () => (/* binding */ withKeys),
/* harmony export */   withMemo: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   withModifiers: () => (/* binding */ withModifiers),
/* harmony export */   withScopeId: () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/




const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};

const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const Transition = (props, { slots }) => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(
  {},
  _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const callHook = (hook, args = []) => {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      addTransitionClass(el, leaveActiveClass);
      forceReflow();
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(onLeave, [el, resolve]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
  if (true) {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assertNumber)(res, "<transition> explicit duration");
  }
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto") return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}

function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}

const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
if (true) {
  vShow.name = "show";
}
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
function initVShowForSSR() {
  vShow.getSSRProps = ({ value }) => {
    if (!value) {
      return { style: { display: "none" } };
    }
  };
}

const CSS_VAR_TEXT = Symbol( true ? "CSS_VAR_TEXT" : 0);
function useCssVars(getter) {
  const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  if (!instance) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssVars is called without current active component instance.`);
    return;
  }
  const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)
    ).forEach((node) => setVarsOnNode(node, vars));
  };
  if (true) {
    instance.getCssVars = () => getter(instance.proxy);
  }
  const setVars = () => {
    const vars = getter(instance.proxy);
    setVarsOnVNode(instance.subTree, vars);
    updateTeleports(vars);
  };
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect)(setVars);
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    let cssText = "";
    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key]);
      cssText += `--${key}: ${vars[key]};`;
    }
    style[CSS_VAR_TEXT] = cssText;
  }
}

const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null) val = "";
    if (true) {
      if (semicolonRE.test(val)) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          `Unexpected semicolon at the end of '${name}' style value: '${val}'`
        );
      }
    }
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}

const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : String(value));
    }
  }
}

function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? "" : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.includeBooleanAttr)(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if ( true && !needRemove) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
        e
      );
    }
  }
  needRemove && el.removeAttribute(key);
}

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value =  true ? sanitizeEventValue(nextValue, rawName) : 0;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
         true ? sanitizeEventValue(nextValue, rawName) : 0,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function sanitizeEventValue(value, propName) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    return value;
  }
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
    `Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`
  );
  return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
}
function patchStopImmediatePropagation(e, value) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}

const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(
      el,
      key,
      nextValue,
      prevChildren,
      parentComponent,
      parentSuspense,
      unmountChildren
    );
    if (key === "value" || key === "checked" || key === "selected") {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    return false;
  }
  return key in el;
}

/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineCustomElement(options, extraOptions, hydrate2) {
  const Comp = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(options, extraOptions);
  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, hydrate2);
    }
  }
  VueCustomElement.def = Comp;
  return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */
const defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */ (options, extraOptions) => {
  return /* @__PURE__ */ defineCustomElement(options, extraOptions, hydrate);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
  constructor(_def, _props = {}, hydrate2) {
    super();
    this._def = _def;
    this._props = _props;
    /**
     * @internal
     */
    this._instance = null;
    this._connected = false;
    this._resolved = false;
    this._numberProps = null;
    this._ob = null;
    if (this.shadowRoot && hydrate2) {
      hydrate2(this._createVNode(), this.shadowRoot);
    } else {
      if ( true && this.shadowRoot) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          `Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`
        );
      }
      this.attachShadow({ mode: "open" });
      if (!this._def.__asyncLoader) {
        this._resolveProps(this._def);
      }
    }
  }
  connectedCallback() {
    this._connected = true;
    if (!this._instance) {
      if (this._resolved) {
        this._update();
      } else {
        this._resolveDef();
      }
    }
  }
  disconnectedCallback() {
    this._connected = false;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
      if (!this._connected) {
        if (this._ob) {
          this._ob.disconnect();
          this._ob = null;
        }
        render(null, this.shadowRoot);
        this._instance = null;
      }
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = true;
    for (let i = 0; i < this.attributes.length; i++) {
      this._setAttr(this.attributes[i].name);
    }
    this._ob = new MutationObserver((mutations) => {
      for (const m of mutations) {
        this._setAttr(m.attributeName);
      }
    });
    this._ob.observe(this, { attributes: true });
    const resolve = (def, isAsync = false) => {
      const { props, styles } = def;
      let numberProps;
      if (props && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props)) {
        for (const key in props) {
          const opt = props[key];
          if (opt === Number || opt && opt.type === Number) {
            if (key in this._props) {
              this._props[key] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(this._props[key]);
            }
            (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key)] = true;
          }
        }
      }
      this._numberProps = numberProps;
      if (isAsync) {
        this._resolveProps(def);
      }
      this._applyStyles(styles);
      this._update();
    };
    const asyncDef = this._def.__asyncLoader;
    if (asyncDef) {
      asyncDef().then((def) => resolve(def, true));
    } else {
      resolve(this._def);
    }
  }
  _resolveProps(def) {
    const { props } = def;
    const declaredPropKeys = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(props) ? props : Object.keys(props || {});
    for (const key of Object.keys(this)) {
      if (key[0] !== "_" && declaredPropKeys.includes(key)) {
        this._setProp(key, this[key], true, false);
      }
    }
    for (const key of declaredPropKeys.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)) {
      Object.defineProperty(this, key, {
        get() {
          return this._getProp(key);
        },
        set(val) {
          this._setProp(key, val);
        }
      });
    }
  }
  _setAttr(key) {
    let value = this.hasAttribute(key) ? this.getAttribute(key) : void 0;
    const camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
    if (this._numberProps && this._numberProps[camelKey]) {
      value = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(value);
    }
    this._setProp(camelKey, value, false);
  }
  /**
   * @internal
   */
  _getProp(key) {
    return this._props[key];
  }
  /**
   * @internal
   */
  _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
    if (val !== this._props[key]) {
      this._props[key] = val;
      if (shouldUpdate && this._instance) {
        this._update();
      }
      if (shouldReflect) {
        if (val === true) {
          this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), "");
        } else if (typeof val === "string" || typeof val === "number") {
          this.setAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key), val + "");
        } else if (!val) {
          this.removeAttribute((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key));
        }
      }
    }
  }
  _update() {
    render(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const vnode = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(this._def, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, this._props));
    if (!this._instance) {
      vnode.ce = (instance) => {
        this._instance = instance;
        instance.isCE = true;
        if (true) {
          instance.ceReload = (newStyles) => {
            if (this._styles) {
              this._styles.forEach((s) => this.shadowRoot.removeChild(s));
              this._styles.length = 0;
            }
            this._applyStyles(newStyles);
            this._instance = null;
            this._update();
          };
        }
        const dispatch = (event, args) => {
          this.dispatchEvent(
            new CustomEvent(event, {
              detail: args
            })
          );
        };
        instance.emit = (event, ...args) => {
          dispatch(event, args);
          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event) !== event) {
            dispatch((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event), args);
          }
        };
        let parent = this;
        while (parent = parent && (parent.parentNode || parent.host)) {
          if (parent instanceof VueElement) {
            instance.parent = parent._instance;
            instance.provides = parent._instance.provides;
            break;
          }
        }
      };
    }
    return vnode;
  }
  _applyStyles(styles) {
    if (styles) {
      styles.forEach((css) => {
        const s = document.createElement("style");
        s.textContent = css;
        this.shadowRoot.appendChild(s);
        if (true) {
          (this._styles || (this._styles = [])).push(s);
        }
      });
    }
  }
}

function useCssModule(name = "$style") {
  {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    if (!instance) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssModule must be called inside setup()`);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
    const modules = instance.type.__cssModules;
    if (!modules) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS modules injected.`);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
    const mod = modules[name];
    if (!mod) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS module named "${name}".`);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
    return mod;
  }
}

const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const TransitionGroupImpl = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    const state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
    let prevChildren;
    let children;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(
        prevChildren[0].el,
        instance.vnode.el,
        moveClass
      )) {
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow();
      movedChildren.forEach((c) => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el[moveCbKey] = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener("transitionend", cb);
            el[moveCbKey] = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
    });
    return () => {
      const rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
      prevChildren = [];
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.el && child.el instanceof Element) {
            prevChildren.push(child);
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(
              child,
              (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(
                child,
                cssTransitionProps,
                state,
                instance
              )
            );
            positionMap.set(
              child,
              child.el.getBoundingClientRect()
            );
          }
        }
      }
      children = slots.default ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(
            child,
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance)
          );
        } else if (true) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<TransitionGroup> children must be keyed.`);
        }
      }
      return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
    };
  }
};
const removeMode = (props) => delete props.mode;
/* @__PURE__ */ removeMode(TransitionGroupImpl.props);
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el = c.el;
  if (el[moveCbKey]) {
    el[moveCbKey]();
  }
  if (el[enterCbKey]) {
    el[enterCbKey]();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const s = c.el.style;
    s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function hasCSSTransform(el, root, moveClass) {
  const clone = el.cloneNode();
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
  clone.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);
  const { hasTransform } = getTransitionInfo(clone);
  container.removeChild(clone);
  return hasTransform;
}

const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing) return;
      let domValue = el.value;
      if (trim) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(domValue);
      }
      el[assignKey](domValue);
    });
    if (trim) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign = el[assignKey];
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        const index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el[assignKey](getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, { value, modifiers: { number } }, vnode) {
    const isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
        (o) => number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseToNumber)(getValue(o)) : getValue(o)
      );
      el[assignKey](
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
      el._assigning = true;
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        el._assigning = false;
      });
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, { value, modifiers: { number } }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, { value, modifiers: { number } }) {
    if (!el._assigning) {
      setSelected(el, value);
    }
  }
};
function setSelected(el, value, number) {
  const isMultiple = el.multiple;
  const isArrayValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
  if (isMultiple && !isArrayValue && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some((v) => String(v) === String(optionValue));
        } else {
          option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue);
      }
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
      if (el.selectedIndex !== i) el.selectedIndex = i;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(
    el.tagName,
    vnode.props && vnode.props.type
  );
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
  vModelText.getSSRProps = ({ value }) => ({ value });
  vModelRadio.getSSRProps = ({ value }, vnode) => {
    if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(vnode.props.value, value)) {
      return { checked: true };
    }
  };
  vModelCheckbox.getSSRProps = ({ value }, vnode) => {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
      if (vnode.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1) {
        return { checked: true };
      }
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return { checked: true };
      }
    } else if (value) {
      return { checked: true };
    }
  };
  vModelDynamic.getSSRProps = (binding, vnode) => {
    if (typeof vnode.type !== "string") {
      return;
    }
    const modelToUse = resolveDynamicModel(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      vnode.type.toUpperCase(),
      vnode.props && vnode.props.type
    );
    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}

const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  });
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);
    if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  });
};

const rendererOptions = /* @__PURE__ */ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
  return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const render = (...args) => {
  ensureRenderer().render(...args);
};
const hydrate = (...args) => {
  ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app._component;
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
const createSSRApp = (...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, resolveRootNamespace(container));
    }
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function injectNativeTagCheck(app) {
  Object.defineProperty(app.config, "isNativeTag", {
    value: (tag) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMathMLTag)(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly)()) {
    const isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
          `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
        );
      }
    });
    const compilerOptions = app.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
    Object.defineProperty(app.config, "compilerOptions", {
      get() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
        return compilerOptions;
      },
      set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
    const res = document.querySelector(container);
    if ( true && !res) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
        `Failed to mount app: mount target selector "${container}" returned null.`
      );
    }
    return res;
  }
  if ( true && window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(
      `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
    );
  }
  return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = () => {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
} ;




/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_ARR: () => (/* binding */ EMPTY_ARR),
/* harmony export */   EMPTY_OBJ: () => (/* binding */ EMPTY_OBJ),
/* harmony export */   NO: () => (/* binding */ NO),
/* harmony export */   NOOP: () => (/* binding */ NOOP),
/* harmony export */   PatchFlagNames: () => (/* binding */ PatchFlagNames),
/* harmony export */   PatchFlags: () => (/* binding */ PatchFlags),
/* harmony export */   ShapeFlags: () => (/* binding */ ShapeFlags),
/* harmony export */   SlotFlags: () => (/* binding */ SlotFlags),
/* harmony export */   camelize: () => (/* binding */ camelize),
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   def: () => (/* binding */ def),
/* harmony export */   escapeHtml: () => (/* binding */ escapeHtml),
/* harmony export */   escapeHtmlComment: () => (/* binding */ escapeHtmlComment),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   genPropsAccessExp: () => (/* binding */ genPropsAccessExp),
/* harmony export */   generateCodeFrame: () => (/* binding */ generateCodeFrame),
/* harmony export */   getGlobalThis: () => (/* binding */ getGlobalThis),
/* harmony export */   hasChanged: () => (/* binding */ hasChanged),
/* harmony export */   hasOwn: () => (/* binding */ hasOwn),
/* harmony export */   hyphenate: () => (/* binding */ hyphenate),
/* harmony export */   includeBooleanAttr: () => (/* binding */ includeBooleanAttr),
/* harmony export */   invokeArrayFns: () => (/* binding */ invokeArrayFns),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isBooleanAttr: () => (/* binding */ isBooleanAttr),
/* harmony export */   isBuiltInDirective: () => (/* binding */ isBuiltInDirective),
/* harmony export */   isDate: () => (/* binding */ isDate),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isGloballyAllowed: () => (/* binding */ isGloballyAllowed),
/* harmony export */   isGloballyWhitelisted: () => (/* binding */ isGloballyWhitelisted),
/* harmony export */   isHTMLTag: () => (/* binding */ isHTMLTag),
/* harmony export */   isIntegerKey: () => (/* binding */ isIntegerKey),
/* harmony export */   isKnownHtmlAttr: () => (/* binding */ isKnownHtmlAttr),
/* harmony export */   isKnownSvgAttr: () => (/* binding */ isKnownSvgAttr),
/* harmony export */   isMap: () => (/* binding */ isMap),
/* harmony export */   isMathMLTag: () => (/* binding */ isMathMLTag),
/* harmony export */   isModelListener: () => (/* binding */ isModelListener),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isOn: () => (/* binding */ isOn),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isRenderableAttrValue: () => (/* binding */ isRenderableAttrValue),
/* harmony export */   isReservedProp: () => (/* binding */ isReservedProp),
/* harmony export */   isSSRSafeAttrName: () => (/* binding */ isSSRSafeAttrName),
/* harmony export */   isSVGTag: () => (/* binding */ isSVGTag),
/* harmony export */   isSet: () => (/* binding */ isSet),
/* harmony export */   isSpecialBooleanAttr: () => (/* binding */ isSpecialBooleanAttr),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isSymbol: () => (/* binding */ isSymbol),
/* harmony export */   isVoidTag: () => (/* binding */ isVoidTag),
/* harmony export */   looseEqual: () => (/* binding */ looseEqual),
/* harmony export */   looseIndexOf: () => (/* binding */ looseIndexOf),
/* harmony export */   looseToNumber: () => (/* binding */ looseToNumber),
/* harmony export */   makeMap: () => (/* binding */ makeMap),
/* harmony export */   normalizeClass: () => (/* binding */ normalizeClass),
/* harmony export */   normalizeProps: () => (/* binding */ normalizeProps),
/* harmony export */   normalizeStyle: () => (/* binding */ normalizeStyle),
/* harmony export */   objectToString: () => (/* binding */ objectToString),
/* harmony export */   parseStringStyle: () => (/* binding */ parseStringStyle),
/* harmony export */   propsToAttrMap: () => (/* binding */ propsToAttrMap),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   slotFlagsText: () => (/* binding */ slotFlagsText),
/* harmony export */   stringifyStyle: () => (/* binding */ stringifyStyle),
/* harmony export */   toDisplayString: () => (/* binding */ toDisplayString),
/* harmony export */   toHandlerKey: () => (/* binding */ toHandlerKey),
/* harmony export */   toNumber: () => (/* binding */ toNumber),
/* harmony export */   toRawType: () => (/* binding */ toRawType),
/* harmony export */   toTypeString: () => (/* binding */ toTypeString)
/* harmony export */ });
/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function makeMap(str, expectsLowerCase) {
  const set = new Set(str.split(","));
  return expectsLowerCase ? (val) => set.has(val.toLowerCase()) : (val) => set.has(val);
}

const EMPTY_OBJ =  true ? Object.freeze({}) : 0;
const EMPTY_ARR =  true ? Object.freeze([]) : 0;
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str) => {
  const s = str ? `on${capitalize(str)}` : ``;
  return s;
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}

const PatchFlags = {
  "TEXT": 1,
  "1": "TEXT",
  "CLASS": 2,
  "2": "CLASS",
  "STYLE": 4,
  "4": "STYLE",
  "PROPS": 8,
  "8": "PROPS",
  "FULL_PROPS": 16,
  "16": "FULL_PROPS",
  "NEED_HYDRATION": 32,
  "32": "NEED_HYDRATION",
  "STABLE_FRAGMENT": 64,
  "64": "STABLE_FRAGMENT",
  "KEYED_FRAGMENT": 128,
  "128": "KEYED_FRAGMENT",
  "UNKEYED_FRAGMENT": 256,
  "256": "UNKEYED_FRAGMENT",
  "NEED_PATCH": 512,
  "512": "NEED_PATCH",
  "DYNAMIC_SLOTS": 1024,
  "1024": "DYNAMIC_SLOTS",
  "DEV_ROOT_FRAGMENT": 2048,
  "2048": "DEV_ROOT_FRAGMENT",
  "HOISTED": -1,
  "-1": "HOISTED",
  "BAIL": -2,
  "-2": "BAIL"
};
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `NEED_HYDRATION`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};

const ShapeFlags = {
  "ELEMENT": 1,
  "1": "ELEMENT",
  "FUNCTIONAL_COMPONENT": 2,
  "2": "FUNCTIONAL_COMPONENT",
  "STATEFUL_COMPONENT": 4,
  "4": "STATEFUL_COMPONENT",
  "TEXT_CHILDREN": 8,
  "8": "TEXT_CHILDREN",
  "ARRAY_CHILDREN": 16,
  "16": "ARRAY_CHILDREN",
  "SLOTS_CHILDREN": 32,
  "32": "SLOTS_CHILDREN",
  "TELEPORT": 64,
  "64": "TELEPORT",
  "SUSPENSE": 128,
  "128": "SUSPENSE",
  "COMPONENT_SHOULD_KEEP_ALIVE": 256,
  "256": "COMPONENT_SHOULD_KEEP_ALIVE",
  "COMPONENT_KEPT_ALIVE": 512,
  "512": "COMPONENT_KEPT_ALIVE",
  "COMPONENT": 6,
  "6": "COMPONENT"
};

const SlotFlags = {
  "STABLE": 1,
  "1": "STABLE",
  "DYNAMIC": 2,
  "2": "DYNAMIC",
  "FORWARDED": 3,
  "3": "FORWARDED"
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};

const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  start = Math.max(0, Math.min(start, source.length));
  end = Math.max(0, Math.min(end, source.length));
  if (start > end) return "";
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(
          `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`
        );
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(
            1,
            end > count ? lineLength - pad : end - start
          );
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}

function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    if (isString(value) || typeof value === "number") {
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}

const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);

const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(
  `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(
  `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
);
function isRenderableAttrValue(value) {
  if (value == null) {
    return false;
  }
  const type = typeof value;
  return type === "string" || type === "number" || type === "boolean";
}

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html += escaped;
  }
  return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}

const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};




/***/ }),

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

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Canvas.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Canvas.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'Canvas',
    props: {
        width: { type: Number, required: true },
        height: { type: Number, required: true }
    },
    setup: function (__props, _a) {
        var __expose = _a.expose;
        __expose();
        var props = __props;
        var canvas = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('canvas');
        __webpack_require__.g.c = canvas;
        var attrs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(canvas.getAttributes());
        var onSet = function () {
            attrs.value = canvas.getAttributes();
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
            canvas.on('set', onSet).set(props);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
            canvas.off('set', onSet);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(props, function (props) {
            canvas.set(props);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('collection', canvas);
        var __returned__ = { props: props, canvas: canvas, attrs: attrs, onSet: onSet };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Group.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Group.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");
/* harmony import */ var _ShapeBase_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShapeBase.vue */ "./packages/vue/src/components/elements/ShapeBase.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'Group',
    props: {
        tagName: { type: String, required: false },
        fill: { type: [String, Array, Object], required: false },
        stroke: { type: [String, Array, Object], required: false },
        strokeWidth: { type: Number, required: false },
        width: { type: Number, required: false },
        height: { type: Number, required: false },
        r: { type: Number, required: false },
        rx: { type: Number, required: false },
        ry: { type: Number, required: false },
        d: { type: String, required: false },
        points: { type: String, required: false },
        left: { type: Number, required: false },
        top: { type: Number, required: false },
        angle: { type: Number, required: false },
        scaleX: { type: Number, required: false },
        scaleY: { type: Number, required: false },
        skewX: { type: Number, required: false },
        skewY: { type: Number, required: false }
    },
    setup: function (__props, _a) {
        var __expose = _a.expose;
        __expose();
        var props = __props;
        var collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('collection');
        var group = new _grafikjs_core__WEBPACK_IMPORTED_MODULE_1__.Group((0,_grafikjs_core__WEBPACK_IMPORTED_MODULE_1__.omitBy)(props, function (value) { return typeof value === 'undefined'; }));
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('collection', group);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
            collection.add(group);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
            collection.remove(group);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(props, function (props) {
            group.set(props);
        });
        var __returned__ = { props: props, collection: collection, group: group, ShapeBase: _ShapeBase_vue__WEBPACK_IMPORTED_MODULE_2__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/ShapeBase.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/ShapeBase.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'ShapeBase',
    props: {
        tagName: { type: String, required: true },
        shape: { type: null, required: true },
        props: { type: Object, required: true }
    },
    setup: function (__props, _a) {
        var __expose = _a.expose;
        __expose();
        var props = __props;
        var shape = props.shape, tagName = props.tagName;
        var wAttrs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(shape.getWrapperAttributes());
        var attrs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(shape.getAttributes());
        var onSet = function () {
            wAttrs.value = shape.getWrapperAttributes();
            attrs.value = shape.getAttributes();
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
            shape.on('set', onSet);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
            shape.off('set', onSet);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(props.props, function (props) {
            shape.set(props);
        });
        var __returned__ = { props: props, shape: shape, tagName: tagName, wAttrs: wAttrs, attrs: attrs, onSet: onSet };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Canvas.vue?vue&type=template&id=4037770f&ts=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Canvas.vue?vue&type=template&id=4037770f&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)($setup.attrs)), [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
    ], 16 /* FULL_PROPS */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Group.vue?vue&type=template&id=4bf63698&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Group.vue?vue&type=template&id=4bf63698&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["ShapeBase"], {
        tagName: "g",
        shape: $setup.group,
        props: $setup.props
    }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () { return [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
        ]; }),
        _: 3 /* FORWARDED */
    }, 8 /* PROPS */, ["shape", "props"]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/ShapeBase.vue?vue&type=template&id=84062faa&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/ShapeBase.vue?vue&type=template&id=84062faa&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("g", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)($setup.wAttrs)), [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($setup.tagName), (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)($setup.attrs)), {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () { return [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
            ]; }),
            _: 3 /* FORWARDED */
        }, 16 /* FULL_PROPS */))
    ], 16 /* FULL_PROPS */));
}


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
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../observable */ "./packages/core/src/observable.ts");
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


var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Animation;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_observable__WEBPACK_IMPORTED_MODULE_0__.Observable)));



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
/* harmony export */   Track: () => (/* reexport safe */ _track__WEBPACK_IMPORTED_MODULE_2__.Track)
/* harmony export */ });
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline */ "./packages/core/src/animation/timeline.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./packages/core/src/animation/animation.ts");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track */ "./packages/core/src/animation/track.ts");
/* harmony import */ var _keyframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyframe */ "./packages/core/src/animation/keyframe.ts");






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

var Keyframe = /** @class */ (function (_super) {
    __extends(Keyframe, _super);
    function Keyframe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Keyframe;
}(_observable__WEBPACK_IMPORTED_MODULE_0__.Observable));



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
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../observable */ "./packages/core/src/observable.ts");
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Timeline;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_observable__WEBPACK_IMPORTED_MODULE_0__.Observable)));



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
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../observable */ "./packages/core/src/observable.ts");
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


var Track = /** @class */ (function (_super) {
    __extends(Track, _super);
    function Track() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Track;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.Collection)(_observable__WEBPACK_IMPORTED_MODULE_0__.Observable)));



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
/* harmony import */ var _grafikjs_vanilla__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafikjs/vanilla */ "./packages/vanilla/src/index.ts");
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






var POINTEREVENTS = {
    start: {
        select: '_onPointerStartInSelectMode',
        pan: '_onPointerStartInPanMode',
        draw: '_onPointerStartInDrawMode'
    },
    move: {
        select: '_onPointerMoveInSelectMode',
        pan: '_onPointerMoveInPanMode',
        draw: '_onPointerMoveInDrawMode'
    },
    end: {
        select: '_onPointerEndInSelectMode',
        pan: '_onPointerEndInPanMode',
        draw: '_onPointerEndInDrawMode'
    }
};
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
        _this.preserveAspectRatio = 'xMinYMin slice';
        _this.className = 'grafik-canvas';
        _this.width = 0;
        _this.height = 0;
        _this.viewportMatrix = new _maths__WEBPACK_IMPORTED_MODULE_4__.Matrix();
        _this._defs = [];
        _this._animation = new _grafikjs_vanilla__WEBPACK_IMPORTED_MODULE_3__.Timeline();
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
    Canvas.prototype.getAttrMap = function () {
        return _super.prototype.getAttrMap.call(this)
            .concat(['xmlns', 'width', 'height', 'viewBox', 'preserveAspectRatio']);
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
    Canvas.prototype.setResponsiveSize = function (width, height) {
        return this;
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
        var _a = e.currentTarget.getBoundingClientRect(), left = _a.left, top = _a.top;
        var _b = 'ontouchstart' in window ? e.touches[0] : e, clientX = _b.clientX, clientY = _b.clientY;
        return new _maths__WEBPACK_IMPORTED_MODULE_4__.Point(clientX - left, clientY - top);
    };
    Canvas.prototype._onPointerStartInSelectMode = function (e) {
        var dataset = e.target.dataset;
        var shape = dataset.shape;
        var isNode = 'controlNode' in dataset;
        var pointer = this.getPointer(e);
        var founded = this.findLastChildByPointer(pointer);
        if (this.getSelectedShapes().includes(founded) && founded.isCollection) {
            founded = founded.findLastChildByPointer(pointer);
            if (founded)
                shape = ''; // To create recursive selection.
        }
        if (isNode) {
            this._currentNodeId = dataset.id;
            this.eachSelectedShape(function (shape) {
                var _a, _b;
                (_b = (_a = shape.getControl()) === null || _a === void 0 ? void 0 : _a.childById(dataset.id)) === null || _b === void 0 ? void 0 : _b.onPointerStart(e);
            });
        }
        else {
            if (!shape) {
                if (founded) {
                    this.releaseShapes();
                    this.selectShapes(founded);
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
        this.eachSelectedShape(function (shape) {
            var _a, _b;
            shape.getControl().onPointerMove(e);
            (_b = (_a = shape.getControl()) === null || _a === void 0 ? void 0 : _a.childById(_this._currentNodeId)) === null || _b === void 0 ? void 0 : _b.onPointerMove(e);
        });
        if (this._selection) {
            this._selector.bBox.max.copy(this.getPointer(e));
            this.trigger('selector:updated');
        }
    };
    Canvas.prototype._onPointerEndInSelectMode = function (e) {
        var _this = this;
        this.eachSelectedShape(function (shape) {
            var _a, _b;
            shape.getControl().onPointerEnd(e);
            (_b = (_a = shape.getControl()) === null || _a === void 0 ? void 0 : _a.childById(_this._currentNodeId)) === null || _b === void 0 ? void 0 : _b.onPointerEnd(e);
        });
        this._currentNodeId = '';
        if (this._selection) {
            var selectedShapes = this.mapChildren(function (shape) {
                var selectorPolygon = _this._selector.bBox.toPolygon();
                var shapePolygon = shape.bBox.toPolygon(shape.getWorldMatrix());
                return (!_this._selector.bBox.isEmpty() &&
                    selectorPolygon.intersects(shapePolygon) &&
                    shape);
            }).filter(function (shape) { return !!shape; });
            this.selectShapes(selectedShapes);
            this._selector.bBox.reset();
            this.trigger('selector:updated');
        }
        this._selection = false;
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
        this[POINTEREVENTS.start[this.mode]](e);
    };
    Canvas.prototype.onPointerMove = function (e) {
        this[POINTEREVENTS.move[this.mode]](e);
    };
    Canvas.prototype.onPointerEnd = function (e) {
        this[POINTEREVENTS.end[this.mode]](e);
    };
    Canvas.prototype.onWheel = function (e) {
        if (this.zoomable) {
            e.preventDefault();
            var pointer = this.getPointer(e);
            var size = this.getSize();
            this.zoomTo((0,_utils__WEBPACK_IMPORTED_MODULE_5__.toFixed)(this.zoom * Math.pow(0.999, e.deltaY)));
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
        return [
            'offset',
            'stopColor',
            'stopOpacity'
        ];
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
        return [
            'id'
        ];
    };
    return Definition;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.ElementCollection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



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
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable */ "./packages/core/src/observable.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./packages/core/src/utils/index.ts");
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
    Element.prototype.set = function (key, value, silent) {
        var _a;
        if (silent === void 0) { silent = false; }
        if (typeof key === 'string' && typeof value !== 'undefined') {
            this._set(key, value);
            if (!silent) {
                this.trigger('set', (_a = {}, _a[key] = value, _a), this);
            }
        }
        else {
            for (var prop in key) {
                this._set(prop, key[prop]);
            }
            // Attention please: here - if 'key' is an object - 'value' becomes the 'silent'!
            if (!value) {
                this.trigger('set', key, this);
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
            if (typeof _this[key] !== 'undefined') {
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
    Element.prototype.createId = function (prefix) {
        if (!this.id) {
            this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.uniqueId)(prefix);
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
}(_observable__WEBPACK_IMPORTED_MODULE_0__.Observable));



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
/* harmony export */   clamp: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.deg2Rad),
/* harmony export */   isEqual: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_8__.isEqual),
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
            left: x,
            top: y
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
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.ElementCollection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



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
        var _a = shape.getWorldMatrix().toOptions(), left = _a.left, top = _a.top;
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
        var vpt = shape.parent.isCanvas ? canvas.get('viewportMatrix').clone() : shape.parent.getWorldMatrix();
        var move = canvas.getPointer(e).subtract(this._startVector.clone().subtract(this._startPosition)).transform(vpt.clone().invert());
        var dimMatrix = shape.getWorldMatrix().invert().translate(0, 0);
        var origin = canvas.getPointer(e).subtract(this._startVector).divide(shape.bBox.getSize()).transform(dimMatrix).add(this._startOrigin);
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
        var wMatrix = shape.getWorldMatrix();
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
        var _a = shape.getWorldMatrix().toOptions(), left = _a.left, top = _a.top;
        var scale = shape.getLocalPointer(e, this._startMatrix).divide(this._startVector).multiply(this._startScale).abs();
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
    Control.prototype.getAttributes = function () {
        var defaultAttributes = _super.prototype.getAttributes.call(this);
        return __assign(__assign({}, defaultAttributes), { 'data-control': true, 'data-shape': this.shape.get('id') });
    };
    Control.prototype.onPointerStart = function (e) { };
    Control.prototype.onPointerMove = function (e) { };
    Control.prototype.onPointerEnd = function (e) { };
    return Control;
}((0,_mixins__WEBPACK_IMPORTED_MODULE_1__.ElementCollection)(_element__WEBPACK_IMPORTED_MODULE_0__.Element)));



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
        var vpt = shape.parent.isCanvas ? canvas.get('viewportMatrix').clone() : shape.parent.getWorldMatrix();
        var move = canvas.getPointer(e).subtract(this._startVector).transform(vpt.invert());
        shape.set({
            left: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(move.x),
            top: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.toFixed)(move.y)
        });
    };
    TransformControl.prototype.onPointerEnd = function (e) {
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
            left: _min.x,
            top: _min.y,
            width: _size.x,
            height: _size.y
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
    'M': _curves__WEBPACK_IMPORTED_MODULE_2__.MoveCurve,
    'L': _curves__WEBPACK_IMPORTED_MODULE_2__.LineCurve,
    'V': _curves__WEBPACK_IMPORTED_MODULE_2__.VerticalLineCurve,
    'H': _curves__WEBPACK_IMPORTED_MODULE_2__.HorizontalLineCurve,
    'Q': _curves__WEBPACK_IMPORTED_MODULE_2__.QuadraticBezierCurve,
    'C': _curves__WEBPACK_IMPORTED_MODULE_2__.CubicBezierCurve,
    'T': _curves__WEBPACK_IMPORTED_MODULE_2__.SmoothQuadraticBezierCurve,
    'S': _curves__WEBPACK_IMPORTED_MODULE_2__.SmoothCubicBezierCurve,
    'A': _curves__WEBPACK_IMPORTED_MODULE_2__.ArcCurve,
    'Z': _curves__WEBPACK_IMPORTED_MODULE_2__.CloseCurve
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
    return (project1.max < project2.min) || (project2.max < project1.min);
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
        ;
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
        var cPoint = this._currentPoint.clone().multiplyScalar(2).subtract(this._currentControlPoint);
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
        var cPoint = this._currentPoint.clone().multiplyScalar(2).subtract(this._currentControlPoint);
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
        var nums = numbers.replace(/\,\s?/g, ' ').split(' ').map(function (n) { return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.toFixed)(n); });
        var curves = [];
        var i, prevPoint;
        for (i = 0; i < nums.length; i += 2) {
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
        }).filter(function (str) { return !!str; }).join(' ');
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
            intersects = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
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
        this.ry = curve[2];
        this.xAxisRotation = curve[3];
        this.largeArcFlag = curve[4];
        this.sweepFlag = curve[5];
        this.p1.set(curve[6], curve[7]);
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
        var isRelative = (curve[0] === curve[0].toLowerCase());
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
        this.p2.set(curve[1], curve[2]);
        this.p3.set(curve[3], curve[4]);
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
        var isRelative = (curve[0] === curve[0].toLowerCase());
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
        this.p2.set(curve[1], curve[2]);
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
                _this.children.push(child);
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
        Collection.prototype.childAt = function (index) {
            return this.children[index];
        };
        Collection.prototype.childById = function (id) {
            return this.children.find(function (el) { return el.id === id; });
        };
        Collection.prototype.childByName = function (name) {
            return this.children.find(function (el) { return el.name === name; });
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
                // Set up child.
                _this.children.push(child);
                child.set('parent', _this, true);
                // @ts-ignore
                if (_this.isCanvas) {
                    var setCanvas = function (child) { return child.set('canvas', _this, true); };
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
            });
            if (!silent) {
                // @ts-ignore
                this.trigger('added', children);
            }
            return this;
        };
        /*
        public remove(children: any|any[], silent = false){

            if (!silent){
                // @ts-ignore
                this.trigger('removed', children);
            }

            return this;

        }
*/
        ElementCollection.prototype.findChildrenByPointer = function (pointer) {
            return this.mapChildren(function (child) {
                var bBox = child.get('bBox');
                if (!bBox) {
                    return false;
                }
                var polygon = bBox.toPolygon(child.getWorldMatrix());
                return polygon.containsPoint(pointer, 1) && child;
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
/* harmony export */   ElementCollection: () => (/* reexport safe */ _element_collection__WEBPACK_IMPORTED_MODULE_1__.ElementCollection)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./packages/core/src/mixins/collection.ts");
/* harmony import */ var _element_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-collection */ "./packages/core/src/mixins/element-collection.ts");




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
    Path.prototype.getAttributes = function () {
        var defaultAttributes = _super.prototype.getAttributes.call(this);
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
    Polyline.prototype.getAttributes = function () {
        var defaultAttributes = _super.prototype.getAttributes.call(this);
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
        _this._animation = new _animation__WEBPACK_IMPORTED_MODULE_3__.Animation();
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
        _this._defs = {};
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
    Shape.prototype.init = function (params) {
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
    Shape.prototype.getWorldMatrix = function () {
        var _a = this.parent, viewportMatrix = _a.viewportMatrix, isCanvas = _a.isCanvas;
        return new _maths__WEBPACK_IMPORTED_MODULE_1__.Matrix()
            .copy(isCanvas ? viewportMatrix : this.parent.getWorldMatrix())
            .multiply(this.matrix);
    };
    Shape.prototype.getLocalPointer = function (e, matrix) {
        var pointer = this.canvas.getPointer(e);
        return pointer.transform(matrix || this.getWorldMatrix().invert());
    };
    Shape.prototype.animate = function () {
        return this._animation;
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
        return __assign(__assign(__assign({}, json), transform), defs);
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
        CANVASCONTEXT.font = "".concat(this.fontSize, "px ").concat(this.fontFamily);
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
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   deg2Rad: () => (/* binding */ deg2Rad),
/* harmony export */   isEqual: () => (/* binding */ isEqual),
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
            parsed.push(__spreadArray([command], values, true));
        }
        else {
            _groupArray(values, commandLength).forEach(function (values) {
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
/* harmony export */   clamp: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.deg2Rad),
/* harmony export */   isEqual: () => (/* reexport safe */ _functions__WEBPACK_IMPORTED_MODULE_1__.isEqual),
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

/***/ "./packages/vanilla/src/index.ts":
/*!***************************************!*\
  !*** ./packages/vanilla/src/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngleControlNode: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.AngleControlNode),
/* harmony export */   Animation: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Animation),
/* harmony export */   ArcCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.ArcCurve),
/* harmony export */   BBox: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.BBox),
/* harmony export */   Canvas: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Canvas),
/* harmony export */   Circle: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Circle),
/* harmony export */   ClipPath: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.ClipPath),
/* harmony export */   CloseCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.CloseCurve),
/* harmony export */   Color: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Color),
/* harmony export */   ColorStop: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.ColorStop),
/* harmony export */   Control: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Control),
/* harmony export */   ControlNode: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.ControlNode),
/* harmony export */   CubicBezierCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.CubicBezierCurve),
/* harmony export */   Curve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Curve),
/* harmony export */   CurvePath: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.CurvePath),
/* harmony export */   Definition: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Definition),
/* harmony export */   Element: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   Ellipse: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Ellipse),
/* harmony export */   Gradient: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Gradient),
/* harmony export */   GradientControl: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.GradientControl),
/* harmony export */   Group: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Group),
/* harmony export */   HorizontalLineCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.HorizontalLineCurve),
/* harmony export */   Image: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Image),
/* harmony export */   Keyframe: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Keyframe),
/* harmony export */   LineCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.LineCurve),
/* harmony export */   LinearGradient: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.LinearGradient),
/* harmony export */   Matrix: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Matrix),
/* harmony export */   MoveCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.MoveCurve),
/* harmony export */   Observable: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Observable),
/* harmony export */   OriginControlNode: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.OriginControlNode),
/* harmony export */   PIBY180: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.PIBY180),
/* harmony export */   Path: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Path),
/* harmony export */   PathControl: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.PathControl),
/* harmony export */   Pattern: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Pattern),
/* harmony export */   Point: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Point),
/* harmony export */   Polygon: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Polygon),
/* harmony export */   Polyline: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Polyline),
/* harmony export */   QuadraticBezierCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.QuadraticBezierCurve),
/* harmony export */   RadialGradient: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.RadialGradient),
/* harmony export */   Rect: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Rect),
/* harmony export */   Renderer: () => (/* reexport safe */ _renderer__WEBPACK_IMPORTED_MODULE_1__.Renderer),
/* harmony export */   ScaleControlNode: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.ScaleControlNode),
/* harmony export */   Selector: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Selector),
/* harmony export */   Shape: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Shape),
/* harmony export */   SmoothCubicBezierCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.SmoothCubicBezierCurve),
/* harmony export */   SmoothQuadraticBezierCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.SmoothQuadraticBezierCurve),
/* harmony export */   Text: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   TextControl: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.TextControl),
/* harmony export */   TextPath: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.TextPath),
/* harmony export */   Timeline: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Timeline),
/* harmony export */   Track: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Track),
/* harmony export */   TransformControl: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.TransformControl),
/* harmony export */   VerticalLineCurve: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.VerticalLineCurve),
/* harmony export */   clamp: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   deg2Rad: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.deg2Rad),
/* harmony export */   isEqual: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.isEqual),
/* harmony export */   omitBy: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.omitBy),
/* harmony export */   parsePath: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.parsePath),
/* harmony export */   rad2Deg: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.rad2Deg),
/* harmony export */   randInt: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.randInt),
/* harmony export */   toFixed: () => (/* reexport safe */ _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.toFixed),
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
        this.isInteractive = false;
        this.canvas = canvas;
        this.xmlns = canvas.get('xmlns');
        this.createCanvasElement();
        this.appendShapes();
    }
    Renderer.prototype.createCanvasElement = function () {
        // @ts-ignore
        this.canvasElement = document.createElementNS(this.xmlns, this.canvas.get('tagName'));
        this.setAttributes(this.canvasElement, this.canvas.getAttributes());
        this.canvas.eachChild(this.createShapeElement.bind(this));
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
            object.eachChild(this.createShapeElement.bind(this));
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



/***/ }),

/***/ "./packages/vue/src/components/elements/index.ts":
/*!*******************************************************!*\
  !*** ./packages/vue/src/components/elements/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _Canvas_vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Group: () => (/* reexport safe */ _Group_vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ShapeBase: () => (/* reexport safe */ _ShapeBase_vue__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   ShapeTree: () => (/* reexport safe */ _ShapeTree_vue__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _Canvas_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas.vue */ "./packages/vue/src/components/elements/Canvas.vue");
/* harmony import */ var _Group_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group.vue */ "./packages/vue/src/components/elements/Group.vue");
/* harmony import */ var _ShapeBase_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShapeBase.vue */ "./packages/vue/src/components/elements/ShapeBase.vue");
/* harmony import */ var _ShapeTree_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShapeTree.vue */ "./packages/vue/src/components/elements/ShapeTree.vue");







/***/ }),

/***/ "./packages/vue/src/components/index.ts":
/*!**********************************************!*\
  !*** ./packages/vue/src/components/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Canvas),
/* harmony export */   Control: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_1__.Control),
/* harmony export */   Group: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.Group),
/* harmony export */   Interactive: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_1__.Interactive),
/* harmony export */   Selector: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_1__.Selector),
/* harmony export */   ShapeBase: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.ShapeBase),
/* harmony export */   ShapeTree: () => (/* reexport safe */ _elements__WEBPACK_IMPORTED_MODULE_0__.ShapeTree),
/* harmony export */   Wrapper: () => (/* reexport safe */ _interactive__WEBPACK_IMPORTED_MODULE_1__.Wrapper)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./packages/vue/src/components/elements/index.ts");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive */ "./packages/vue/src/components/interactive/index.ts");




/***/ }),

/***/ "./packages/vue/src/components/interactive/index.ts":
/*!**********************************************************!*\
  !*** ./packages/vue/src/components/interactive/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* reexport safe */ _Control_vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Interactive: () => (/* reexport safe */ _Interactive_vue__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Selector: () => (/* reexport safe */ _Selector_vue__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Wrapper: () => (/* reexport safe */ _Wrapper_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Control_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control.vue */ "./packages/vue/src/components/interactive/Control.vue");
/* harmony import */ var _Wrapper_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wrapper.vue */ "./packages/vue/src/components/interactive/Wrapper.vue");
/* harmony import */ var _Interactive_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Interactive.vue */ "./packages/vue/src/components/interactive/Interactive.vue");
/* harmony import */ var _Selector_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Selector.vue */ "./packages/vue/src/components/interactive/Selector.vue");







/***/ }),

/***/ "./packages/vue/src/hocs.ts":
/*!**********************************!*\
  !*** ./packages/vue/src/hocs.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withCollectionContext: () => (/* binding */ withCollectionContext)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./packages/vue/src/utils/index.ts");


var withCollectionContext = function (Component, tagName) {
    var Shape = _utils__WEBPACK_IMPORTED_MODULE_1__.CLASSES[tagName];
    return {
        props: new Shape().toJSON(), // Define default props.
        setup: function (props) {
            var collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('collection');
            var shape = new Shape(props);
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
                collection.add(shape);
            });
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
                collection.remove(shape);
            });
            return function () {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Component, {
                    tagName: tagName,
                    shape: shape,
                    props: props
                });
            };
        }
    };
};



/***/ }),

/***/ "./packages/vue/src/index.ts":
/*!***********************************!*\
  !*** ./packages/vue/src/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Canvas),
/* harmony export */   Circle: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Circle),
/* harmony export */   Control: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Control),
/* harmony export */   Group: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Group),
/* harmony export */   Interactive: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Interactive),
/* harmony export */   Path: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Path),
/* harmony export */   Rect: () => (/* reexport safe */ _shapes__WEBPACK_IMPORTED_MODULE_2__.Rect),
/* harmony export */   Selector: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Selector),
/* harmony export */   ShapeBase: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ShapeBase),
/* harmony export */   ShapeTree: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ShapeTree),
/* harmony export */   Wrapper: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Wrapper),
/* harmony export */   createGrafik: () => (/* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_0__.createGrafik)
/* harmony export */ });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./packages/vue/src/plugin.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./packages/vue/src/components/index.ts");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes */ "./packages/vue/src/shapes.ts");





/***/ }),

/***/ "./packages/vue/src/plugin.ts":
/*!************************************!*\
  !*** ./packages/vue/src/plugin.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGrafik: () => (/* binding */ createGrafik)
/* harmony export */ });
/* harmony import */ var _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafikjs/core */ "./packages/core/src/index.ts");

var createGrafik = function (opt) { return ({
    install: function (app, options) {
        if (options === void 0) { options = opt; }
        var canvas = new _grafikjs_core__WEBPACK_IMPORTED_MODULE_0__.Canvas(options);
        app.provide('canvas', canvas);
    }
}); };



/***/ }),

/***/ "./packages/vue/src/shapes.ts":
/*!************************************!*\
  !*** ./packages/vue/src/shapes.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Circle: () => (/* binding */ Circle),
/* harmony export */   Path: () => (/* binding */ Path),
/* harmony export */   Rect: () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _hocs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hocs */ "./packages/vue/src/hocs.ts");
/* harmony import */ var _components_elements_ShapeBase_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/elements/ShapeBase.vue */ "./packages/vue/src/components/elements/ShapeBase.vue");


var Rect = (0,_hocs__WEBPACK_IMPORTED_MODULE_0__.withCollectionContext)(_components_elements_ShapeBase_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'rect');
var Circle = (0,_hocs__WEBPACK_IMPORTED_MODULE_0__.withCollectionContext)(_components_elements_ShapeBase_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'circle');
var Path = (0,_hocs__WEBPACK_IMPORTED_MODULE_0__.withCollectionContext)(_components_elements_ShapeBase_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'path');



/***/ }),

/***/ "./packages/vue/src/utils/constants.ts":
/*!*********************************************!*\
  !*** ./packages/vue/src/utils/constants.ts ***!
  \*********************************************/
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

/***/ "./packages/vue/src/utils/index.ts":
/*!*****************************************!*\
  !*** ./packages/vue/src/utils/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.CLASSES),
/* harmony export */   DEFCLASSES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.DEFCLASSES)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/vue/src/utils/constants.ts");



/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./packages/vue/src/components/elements/Canvas.vue":
/*!*********************************************************!*\
  !*** ./packages/vue/src/components/elements/Canvas.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Canvas_vue_vue_type_template_id_4037770f_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas.vue?vue&type=template&id=4037770f&ts=true */ "./packages/vue/src/components/elements/Canvas.vue?vue&type=template&id=4037770f&ts=true");
/* harmony import */ var _Canvas_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas.vue?vue&type=script&setup=true&lang=ts */ "./packages/vue/src/components/elements/Canvas.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Canvas_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Canvas_vue_vue_type_template_id_4037770f_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/vue/src/components/elements/Canvas.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./packages/vue/src/components/elements/Group.vue":
/*!********************************************************!*\
  !*** ./packages/vue/src/components/elements/Group.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Group_vue_vue_type_template_id_4bf63698_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Group.vue?vue&type=template&id=4bf63698&ts=true */ "./packages/vue/src/components/elements/Group.vue?vue&type=template&id=4bf63698&ts=true");
/* harmony import */ var _Group_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group.vue?vue&type=script&setup=true&lang=ts */ "./packages/vue/src/components/elements/Group.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Group_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Group_vue_vue_type_template_id_4bf63698_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/vue/src/components/elements/Group.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./packages/vue/src/components/elements/ShapeBase.vue":
/*!************************************************************!*\
  !*** ./packages/vue/src/components/elements/ShapeBase.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShapeBase_vue_vue_type_template_id_84062faa_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShapeBase.vue?vue&type=template&id=84062faa&ts=true */ "./packages/vue/src/components/elements/ShapeBase.vue?vue&type=template&id=84062faa&ts=true");
/* harmony import */ var _ShapeBase_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShapeBase.vue?vue&type=script&setup=true&lang=ts */ "./packages/vue/src/components/elements/ShapeBase.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ShapeBase_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ShapeBase_vue_vue_type_template_id_84062faa_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/vue/src/components/elements/ShapeBase.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./packages/vue/src/components/elements/ShapeTree.vue":
/*!************************************************************!*\
  !*** ./packages/vue/src/components/elements/ShapeTree.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShapeTree_vue_vue_type_template_id_77382678__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShapeTree.vue?vue&type=template&id=77382678 */ "./packages/vue/src/components/elements/ShapeTree.vue?vue&type=template&id=77382678");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_ShapeTree_vue_vue_type_template_id_77382678__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/vue/src/components/elements/ShapeTree.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./packages/vue/src/components/interactive/Control.vue":
/*!*************************************************************!*\
  !*** ./packages/vue/src/components/interactive/Control.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Control_vue_vue_type_template_id_1447250f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control.vue?vue&type=template&id=1447250f */ "./packages/vue/src/components/interactive/Control.vue?vue&type=template&id=1447250f");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Control_vue_vue_type_template_id_1447250f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/vue/src/components/interactive/Control.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./packages/vue/src/components/interactive/Interactive.vue":
/*!*****************************************************************!*\
  !*** ./packages/vue/src/components/interactive/Interactive.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Interactive_vue_vue_type_template_id_2730e714__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interactive.vue?vue&type=template&id=2730e714 */ "./packages/vue/src/components/interactive/Interactive.vue?vue&type=template&id=2730e714");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Interactive_vue_vue_type_template_id_2730e714__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/vue/src/components/interactive/Interactive.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./packages/vue/src/components/interactive/Selector.vue":
/*!**************************************************************!*\
  !*** ./packages/vue/src/components/interactive/Selector.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Selector_vue_vue_type_template_id_fd85e2c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selector.vue?vue&type=template&id=fd85e2c6 */ "./packages/vue/src/components/interactive/Selector.vue?vue&type=template&id=fd85e2c6");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Selector_vue_vue_type_template_id_fd85e2c6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/vue/src/components/interactive/Selector.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./packages/vue/src/components/interactive/Wrapper.vue":
/*!*************************************************************!*\
  !*** ./packages/vue/src/components/interactive/Wrapper.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Wrapper_vue_vue_type_template_id_1d0a8d76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wrapper.vue?vue&type=template&id=1d0a8d76 */ "./packages/vue/src/components/interactive/Wrapper.vue?vue&type=template&id=1d0a8d76");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Wrapper_vue_vue_type_template_id_1d0a8d76__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/vue/src/components/interactive/Wrapper.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/example.vue":
/*!*************************!*\
  !*** ./src/example.vue ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _example_vue_vue_type_template_id_4408a6be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example.vue?vue&type=template&id=4408a6be */ "./src/example.vue?vue&type=template&id=4408a6be");
/* harmony import */ var _example_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example.vue?vue&type=script&setup=true&lang=js */ "./src/example.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_example_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_example_vue_vue_type_template_id_4408a6be__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/example.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/example.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/example.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _grafikjs_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafikjs/vue */ "./packages/vue/src/index.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'example',
  setup(__props, { expose: __expose }) {
  __expose();

const width = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1280);
const height = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(720);
const rotate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(45);
const json = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([
	{
		id: 'rect-Yta5Pdq4y2je',
		name: '',
		tagName: 'rect',
		fill: { id: 'pattern-aIQ65qznRkSV', name: '', tagName: 'pattern', children: [] },
		width: 1200,
		height: 800,
		left: 600,
		top: 400,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'g-M7NEAs01Icl1',
		name: '',
		tagName: 'g',
		children: [
			{
				id: 'rect-Cj6aGLV9ZMI4',
				name: '',
				tagName: 'rect',
				fill: 'none',
				stroke: '#000',
				strokeWidth: 2,
				width: 100,
				height: 100,
				left: -100,
				top: 0,
				angle: 45,
				scaleX: 1,
				scaleY: 1,
				skewX: 0,
				skewY: 0
			},
			{
				id: 'rect-kWdNZKVOn7lf',
				name: '',
				tagName: 'rect',
				fill: 'none',
				stroke: '#000',
				strokeWidth: 2,
				width: 100,
				height: 100,
				left: 100,
				top: 0,
				angle: 45,
				scaleX: 1,
				scaleY: 1,
				skewX: 0,
				skewY: 0
			}
		],
		left: 400,
		top: 400,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'circle-NjxlXyZCpbKh',
		name: '',
		tagName: 'circle',
		fill: {
			id: 'radialGradient-hnDPTtTNeRlo',
			name: '',
			tagName: 'radialGradient',
			children: [
				{
					id: 'stop-joPLt0LglRvO',
					name: '',
					tagName: 'stop',
					offset: 0,
					stopColor: 'red',
					stopOpacity: 1
				},
				{
					id: 'stop-U1ROJ5u0XNQn',
					name: '',
					tagName: 'stop',
					offset: 1,
					stopColor: 'blue',
					stopOpacity: 1
				}
			]
		},
		r: 50,
		cx: 50,
		cy: 50,
		left: 600,
		top: 400,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'rect-Rrjr8i7cvlLD',
		name: '',
		tagName: 'rect',
		fill: 'none',
		stroke: '#000',
		strokeWidth: 2,
		width: 100,
		height: 100,
		left: 0,
		top: 0,
		angle: 45,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'path-kGa1gK1SYKhr',
		name: '',
		tagName: 'path',
		fill: {
			id: 'linearGradient-7UoNA93OaDg8',
			name: '',
			tagName: 'linearGradient',
			children: [
				{
					id: 'stop-todvI6PKpDEJ',
					name: '',
					tagName: 'stop',
					offset: 0,
					stopColor: 'red',
					stopOpacity: 1
				},
				{
					id: 'stop-1HuymXTDy3CM',
					name: '',
					tagName: 'stop',
					offset: 1,
					stopColor: '#F44',
					stopOpacity: 1
				}
			]
		},
		d: 'M 41.376 11.025000000000002 C 26.375999999999998 -13.974999999999998 -22.624000000000002 11.025000000000002 11.376 46.025000000000006 L 41.376 76.025 L 71.376 46.025000000000006 C 105.376 6.025000000000002 56.376 -13.974999999999998 41.376 11.025000000000002',
		left: 450,
		top: 250,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'polyline-C4eoMzQX67qY',
		name: '',
		tagName: 'polygon',
		fill: {
			id: 'linearGradient-FEf53VpA0ZMX',
			name: '',
			tagName: 'linearGradient',
			children: [
				{
					id: 'stop-R29LzAzEtWhq',
					name: '',
					tagName: 'stop',
					offset: 0,
					stopColor: 'red',
					stopOpacity: 1
				},
				{
					id: 'stop-Ey3n54yJKfrq',
					name: '',
					tagName: 'stop',
					offset: 1,
					stopColor: 'blue',
					stopOpacity: 1
				}
			]
		},
		points: '50 0 100 100 0 100',
		left: 350,
		top: 150,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'text-crKouhcmBjUO',
		name: '',
		tagName: 'text',
		x: 0,
		y: 40,
		fontFamily: 'Arial',
		fontSize: 40,
		left: 800,
		top: 250,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'rect-XUcgrfmJZuEc',
		name: '',
		tagName: 'image',
		width: 512,
		height: 342,
		href: 'img.jpg',
		left: 300,
		top: 600,
		angle: 0,
		scaleX: 0.4,
		scaleY: 0.4,
		skewX: 0,
		skewY: 0
	}
]);

const __returned__ = { width, height, rotate, json, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, get Canvas() { return _grafikjs_vue__WEBPACK_IMPORTED_MODULE_1__.Canvas }, get Group() { return _grafikjs_vue__WEBPACK_IMPORTED_MODULE_1__.Group }, get Rect() { return _grafikjs_vue__WEBPACK_IMPORTED_MODULE_1__.Rect }, get ShapeTree() { return _grafikjs_vue__WEBPACK_IMPORTED_MODULE_1__.ShapeTree }, get Wrapper() { return _grafikjs_vue__WEBPACK_IMPORTED_MODULE_1__.Wrapper }, get Interactive() { return _grafikjs_vue__WEBPACK_IMPORTED_MODULE_1__.Interactive }, get Selector() { return _grafikjs_vue__WEBPACK_IMPORTED_MODULE_1__.Selector } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./packages/vue/src/components/elements/Canvas.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************!*\
  !*** ./packages/vue/src/components/elements/Canvas.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Canvas_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Canvas_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Canvas.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Canvas.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./packages/vue/src/components/elements/Group.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************!*\
  !*** ./packages/vue/src/components/elements/Group.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Group_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Group_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Group.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Group.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./packages/vue/src/components/elements/ShapeBase.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************!*\
  !*** ./packages/vue/src/components/elements/ShapeBase.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_ShapeBase_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_ShapeBase_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./ShapeBase.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/ShapeBase.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./packages/vue/src/components/elements/Canvas.vue?vue&type=template&id=4037770f&ts=true":
/*!***********************************************************************************************!*\
  !*** ./packages/vue/src/components/elements/Canvas.vue?vue&type=template&id=4037770f&ts=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Canvas_vue_vue_type_template_id_4037770f_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Canvas_vue_vue_type_template_id_4037770f_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Canvas.vue?vue&type=template&id=4037770f&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Canvas.vue?vue&type=template&id=4037770f&ts=true");


/***/ }),

/***/ "./packages/vue/src/components/elements/Group.vue?vue&type=template&id=4bf63698&ts=true":
/*!**********************************************************************************************!*\
  !*** ./packages/vue/src/components/elements/Group.vue?vue&type=template&id=4bf63698&ts=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Group_vue_vue_type_template_id_4bf63698_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Group_vue_vue_type_template_id_4bf63698_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Group.vue?vue&type=template&id=4bf63698&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/Group.vue?vue&type=template&id=4bf63698&ts=true");


/***/ }),

/***/ "./packages/vue/src/components/elements/ShapeBase.vue?vue&type=template&id=84062faa&ts=true":
/*!**************************************************************************************************!*\
  !*** ./packages/vue/src/components/elements/ShapeBase.vue?vue&type=template&id=84062faa&ts=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_ShapeBase_vue_vue_type_template_id_84062faa_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_ShapeBase_vue_vue_type_template_id_84062faa_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./ShapeBase.vue?vue&type=template&id=84062faa&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/ShapeBase.vue?vue&type=template&id=84062faa&ts=true");


/***/ }),

/***/ "./src/example.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************!*\
  !*** ./src/example.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_example_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_example_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./example.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/example.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./packages/vue/src/components/elements/ShapeTree.vue?vue&type=template&id=77382678":
/*!******************************************************************************************!*\
  !*** ./packages/vue/src/components/elements/ShapeTree.vue?vue&type=template&id=77382678 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_ShapeTree_vue_vue_type_template_id_77382678__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_ShapeTree_vue_vue_type_template_id_77382678__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./ShapeTree.vue?vue&type=template&id=77382678 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/ShapeTree.vue?vue&type=template&id=77382678");


/***/ }),

/***/ "./packages/vue/src/components/interactive/Control.vue?vue&type=template&id=1447250f":
/*!*******************************************************************************************!*\
  !*** ./packages/vue/src/components/interactive/Control.vue?vue&type=template&id=1447250f ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Control_vue_vue_type_template_id_1447250f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Control_vue_vue_type_template_id_1447250f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Control.vue?vue&type=template&id=1447250f */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Control.vue?vue&type=template&id=1447250f");


/***/ }),

/***/ "./packages/vue/src/components/interactive/Interactive.vue?vue&type=template&id=2730e714":
/*!***********************************************************************************************!*\
  !*** ./packages/vue/src/components/interactive/Interactive.vue?vue&type=template&id=2730e714 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Interactive_vue_vue_type_template_id_2730e714__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Interactive_vue_vue_type_template_id_2730e714__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Interactive.vue?vue&type=template&id=2730e714 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Interactive.vue?vue&type=template&id=2730e714");


/***/ }),

/***/ "./packages/vue/src/components/interactive/Selector.vue?vue&type=template&id=fd85e2c6":
/*!********************************************************************************************!*\
  !*** ./packages/vue/src/components/interactive/Selector.vue?vue&type=template&id=fd85e2c6 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Selector_vue_vue_type_template_id_fd85e2c6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Selector_vue_vue_type_template_id_fd85e2c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Selector.vue?vue&type=template&id=fd85e2c6 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Selector.vue?vue&type=template&id=fd85e2c6");


/***/ }),

/***/ "./packages/vue/src/components/interactive/Wrapper.vue?vue&type=template&id=1d0a8d76":
/*!*******************************************************************************************!*\
  !*** ./packages/vue/src/components/interactive/Wrapper.vue?vue&type=template&id=1d0a8d76 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Wrapper_vue_vue_type_template_id_1d0a8d76__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Wrapper_vue_vue_type_template_id_1d0a8d76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Wrapper.vue?vue&type=template&id=1d0a8d76 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Wrapper.vue?vue&type=template&id=1d0a8d76");


/***/ }),

/***/ "./src/example.vue?vue&type=template&id=4408a6be":
/*!*******************************************************!*\
  !*** ./src/example.vue?vue&type=template&id=4408a6be ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_example_vue_vue_type_template_id_4408a6be__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_example_vue_vue_type_template_id_4408a6be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./example.vue?vue&type=template&id=4408a6be */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/example.vue?vue&type=template&id=4408a6be");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/ShapeTree.vue?vue&type=template&id=77382678":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/elements/ShapeTree.vue?vue&type=template&id=77382678 ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });

function render(_ctx, _cache) {
  return null
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Control.vue?vue&type=template&id=1447250f":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Control.vue?vue&type=template&id=1447250f ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div"))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Interactive.vue?vue&type=template&id=2730e714":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Interactive.vue?vue&type=template&id=2730e714 ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = { class: "grafik-interactive" }

function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Selector.vue?vue&type=template&id=fd85e2c6":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Selector.vue?vue&type=template&id=fd85e2c6 ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = { class: "grafik-selector" }

function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Wrapper.vue?vue&type=template&id=1d0a8d76":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./packages/vue/src/components/interactive/Wrapper.vue?vue&type=template&id=1d0a8d76 ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = { class: "grafik-wrapper" }

function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/example.vue?vue&type=template&id=4408a6be":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/example.vue?vue&type=template&id=4408a6be ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Wrapper"], null, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Canvas"], {
          width: $setup.width,
          height: $setup.height
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Rect"], {
              width: 200,
              height: 200,
              left: 400,
              top: 400,
              angle: $setup.rotate,
              fill: "green"
            }, null, 8 /* PROPS */, ["angle"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Group"], {
              left: 200,
              top: 200
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Rect"], {
                  width: 200,
                  height: 200,
                  left: 100,
                  top: 100,
                  fill: "green"
                }),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Rect"], {
                  width: 200,
                  height: 200,
                  left: -100,
                  top: -100,
                  fill: "green"
                })
              ]),
              _: 1 /* STABLE */
            }),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ShapeTree"], { json: $setup.json }, null, 8 /* PROPS */, ["json"])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["width", "height"]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Interactive"], null, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Selector"])
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Width: "),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "number",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.width) = $event))
      }, null, 512 /* NEED_PATCH */), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.width]
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Height: "),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "number",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.height) = $event))
      }, null, 512 /* NEED_PATCH */), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.height]
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rotate: "),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "number",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.rotate) = $event))
      }, null, 512 /* NEED_PATCH */), [
        [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.rotate]
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm-bundler.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm-bundler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTransition: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   BaseTransitionPropsValidators: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransitionPropsValidators),
/* harmony export */   Comment: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   DeprecationTypes: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.DeprecationTypes),
/* harmony export */   EffectScope: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   ErrorCodes: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ErrorCodes),
/* harmony export */   ErrorTypeStrings: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ErrorTypeStrings),
/* harmony export */   Fragment: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   KeepAlive: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   ReactiveEffect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ReactiveEffect),
/* harmony export */   Static: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   Suspense: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   Teleport: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   Text: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   TrackOpTypes: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TrackOpTypes),
/* harmony export */   Transition: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   TransitionGroup: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   TriggerOpTypes: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TriggerOpTypes),
/* harmony export */   VueElement: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.VueElement),
/* harmony export */   assertNumber: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.assertNumber),
/* harmony export */   callWithAsyncErrorHandling: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   callWithErrorHandling: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   camelize: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   capitalize: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   cloneVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   compatUtils: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   computed: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   createApp: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   createBlock: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   createCommentVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   createElementBlock: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementBlock),
/* harmony export */   createElementVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createElementVNode),
/* harmony export */   createHydrationRenderer: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   createPropsRestProxy: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createPropsRestProxy),
/* harmony export */   createRenderer: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   createSSRApp: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   createSlots: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   createStaticVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   createTextVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   createVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   customRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   defineAsyncComponent: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   defineComponent: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   defineCustomElement: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineCustomElement),
/* harmony export */   defineEmits: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmits),
/* harmony export */   defineExpose: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineExpose),
/* harmony export */   defineModel: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineModel),
/* harmony export */   defineOptions: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineOptions),
/* harmony export */   defineProps: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   defineSSRCustomElement: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineSSRCustomElement),
/* harmony export */   defineSlots: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineSlots),
/* harmony export */   devtools: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   effect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effect),
/* harmony export */   effectScope: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   getCurrentInstance: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   getCurrentScope: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   getTransitionRawChildren: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   guardReactiveProps: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps),
/* harmony export */   h: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   handleError: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   hasInjectionContext: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hasInjectionContext),
/* harmony export */   hydrate: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   initCustomFormatter: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   initDirectivesForSSR: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initDirectivesForSSR),
/* harmony export */   inject: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   isMemoSame: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isMemoSame),
/* harmony export */   isProxy: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   isReactive: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   isReadonly: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   isRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   isRuntimeOnly: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   isShallow: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   isVNode: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   markRaw: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   mergeDefaults: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   mergeModels: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeModels),
/* harmony export */   mergeProps: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   nextTick: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   normalizeClass: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeClass),
/* harmony export */   normalizeProps: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   normalizeStyle: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle),
/* harmony export */   onActivated: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   onBeforeMount: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   onBeforeUnmount: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   onBeforeUpdate: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   onDeactivated: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   onErrorCaptured: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   onMounted: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   onRenderTracked: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   onRenderTriggered: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   onScopeDispose: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   onServerPrefetch: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   onUnmounted: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   onUpdated: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   openBlock: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   popScopeId: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   provide: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   proxyRefs: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   pushScopeId: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   queuePostFlushCb: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   reactive: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   readonly: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   ref: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   registerRuntimeCompiler: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   render: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   renderList: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   renderSlot: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   resolveComponent: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   resolveDirective: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   resolveDynamicComponent: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   resolveFilter: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   resolveTransitionHooks: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   setBlockTracking: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   setDevtoolsHook: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   setTransitionHooks: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   shallowReactive: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   shallowReadonly: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   shallowRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   ssrContextKey: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   ssrUtils: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   stop: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.stop),
/* harmony export */   toDisplayString: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   toHandlerKey: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   toHandlers: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   toRaw: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   toRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   toRefs: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   toValue: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toValue),
/* harmony export */   transformVNodeArgs: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   triggerRef: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   unref: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   useAttrs: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   useCssModule: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   useCssVars: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   useModel: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useModel),
/* harmony export */   useSSRContext: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   useSlots: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   useTransitionState: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   vModelCheckbox: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   vModelDynamic: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   vModelRadio: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   vModelSelect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   vModelText: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   vShow: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   version: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   warn: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   watch: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   watchEffect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   watchPostEffect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   watchSyncEffect: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect),
/* harmony export */   withAsyncContext: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withAsyncContext),
/* harmony export */   withCtx: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   withDefaults: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDefaults),
/* harmony export */   withDirectives: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   withKeys: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   withMemo: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withMemo),
/* harmony export */   withModifiers: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   withScopeId: () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/



function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.initCustomFormatter)();
  }
}

if (true) {
  initDev();
}
const compile = () => {
  if (true) {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)(
      `Runtime compilation is not supported in this build of Vue.` + (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".` )
    );
  }
};




/***/ }),

/***/ "./packages/styles/src/index.js":
/*!**************************************!*\
  !*** ./packages/styles/src/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./packages/styles/src/styles.scss");



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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/*!********************!*\
  !*** ./src/vue.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _example_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example.vue */ "./src/example.vue");
/* harmony import */ var _grafikjs_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafikjs/vue */ "./packages/vue/src/index.ts");
/* harmony import */ var _grafikjs_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafikjs/styles */ "./packages/styles/src/index.js");




var grafik = (0,_grafikjs_vue__WEBPACK_IMPORTED_MODULE_2__.createGrafik)();
(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_example_vue__WEBPACK_IMPORTED_MODULE_1__["default"]).use(grafik).mount('#wrap');

})();

/******/ })()
;