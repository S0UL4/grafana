"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["react-monaco-editor"],{

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayLikeToArray": () => (/* binding */ _arrayLikeToArray),
/* harmony export */   "arrayWithHoles": () => (/* binding */ _arrayWithHoles),
/* harmony export */   "defineProperty": () => (/* binding */ _defineProperty),
/* harmony export */   "iterableToArrayLimit": () => (/* binding */ _iterableToArrayLimit),
/* harmony export */   "nonIterableRest": () => (/* binding */ _nonIterableRest),
/* harmony export */   "objectSpread2": () => (/* binding */ _objectSpread2),
/* harmony export */   "slicedToArray": () => (/* binding */ _slicedToArray),
/* harmony export */   "unsupportedIterableToArray": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/config/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs'
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _loader_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _loader_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/loader/index.js");




/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/loader/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var state_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/state-local-npm-1.0.7-9005e49ea6-d1afcf1429.zip/node_modules/state-local/lib/es/state-local.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/config/index.js");
/* harmony import */ var _validators_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/validators/index.js");
/* harmony import */ var _utils_compose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/compose.js");
/* harmony import */ var _utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js");
/* harmony import */ var _utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js");








/** the local state of the module */

var _state$create = state_local__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  config: _config_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.slicedToArray)(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function config(config) {
  setState(function (state) {
    return {
      config: (0,_utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.config, _validators_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].config(config))
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized: isInitialized
    };
  });

  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Promise.resolve(window.monaco));
    }

    (0,_utils_compose_js__WEBPACK_IMPORTED_MODULE_4__["default"])(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }

  return (0,_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/compose.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/curry.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curry);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");


function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)((0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__.objectSpread2)({}, target), source);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CANCELATION_MESSAGE": () => (/* binding */ CANCELATION_MESSAGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCancelable);



/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/validators/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler),
/* harmony export */   "errorMessages": () => (/* binding */ errorMessages)
/* harmony export */ });
/* harmony import */ var _utils_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/curry.js");
/* harmony import */ var _utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js");



/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler('configIsRequired');
  if (!(0,_utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config)) errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = (0,_utils_curry_js__WEBPACK_IMPORTED_MODULE_0__["default"])(throwError)(errorMessages);
var validators = {
  config: validateConfig
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validators);



/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js");
/* harmony import */ var _hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");
/* harmony import */ var _hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/utils/index.js");








function DiffEditor({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,

  /* === */
  originalModelPath,
  modifiedModelPath,
  keepCurrentOriginalModel,
  keepCurrentModifiedModel,
  theme,
  loading,
  options,

  /* === */
  height,
  width,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount
}) {
  const [isEditorReady, setIsEditorReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const monacoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onMount);
  const beforeMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(beforeMount);
  (0,_hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    const cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const modifiedEditor = editorRef.current.getModifiedEditor();

    if (modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      modifiedEditor.setValue(modified);
    } else {
      if (modified !== modifiedEditor.getValue()) {
        modifiedEditor.executeEdits('', [{
          range: modifiedEditor.getModel().getFullModelRange(),
          text: modified,
          forceMoveMarkers: true
        }]);
        modifiedEditor.pushUndoStop();
      }
    }
  }, [modified], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const {
      original,
      modified
    } = editorRef.current.getModel();
    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  const setModels = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    beforeMountRef.current(monacoRef.current);
    const originalModel = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, original, originalLanguage || language, originalModelPath);
    const modifiedModel = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, modified, modifiedLanguage || language, modifiedModelPath);
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);
  const createEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options
    });
    setModels();
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [options, theme, setModels]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  function disposeEditor() {
    const models = editorRef.current.getModel();

    if (!keepCurrentOriginalModel) {
      var _models$original;

      (_models$original = models.original) === null || _models$original === void 0 ? void 0 : _models$original.dispose();
    }

    if (!keepCurrentModifiedModel) {
      var _models$modified;

      (_models$modified = models.modified) === null || _models$modified === void 0 ? void 0 : _models$modified.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

DiffEditor.propTypes = {
  original: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  modified: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  language: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  originalLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  modifiedLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /* === */
  originalModelPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  modifiedModelPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  keepCurrentOriginalModel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  keepCurrentModifiedModel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /* === */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  wrapperProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /* === */
  beforeMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
DiffEditor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  keepCurrentOriginalModel: false,
  keepCurrentModifiedModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop,
  onMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiffEditor);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _DiffEditor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js");



var index = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_DiffEditor_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Editor/Editor.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js");
/* harmony import */ var _hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");
/* harmony import */ var _hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/utils/index.js");
/* harmony import */ var _hooks_usePrevious_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js");









const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,

  /* === */
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,

  /* === */
  width,
  height,
  className,
  wrapperProps,

  /* === */
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isMonacoMounting, setIsMonacoMounting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const monacoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onMount);
  const beforeMountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(beforeMount);
  const subscriptionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value);
  const previousPath = (0,_hooks_usePrevious_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(path);
  (0,_hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    const cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const model = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
    if (!(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  (0,_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    beforeMountRef.current(monacoRef.current);
    const autoCreatedModelPath = path || defaultPath;
    const defaultModel = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_6__.getOrCreateModel)(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      model: defaultModel,
      automaticLayout: true,
      ...options
    }, overrideServices);
    saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription

  valueRef.current = value;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;

      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
        const editorValue = editorRef.current.getValue();

        if (valueRef.current !== editorValue) {
          onChange(editorValue, event);
        }
      });
    }
  }, [isEditorReady, onChange]); // onValidate

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers(uris => {
        var _editorRef$current$ge;

        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;

        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find(uri => uri.path === editorUri.path);

          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    var _subscriptionRef$curr2;

    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;

      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperProps: wrapperProps
  });
}

Editor.propTypes = {
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  defaultPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  defaultLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  language: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  path: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /* === */
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  line: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  overrideServices: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  saveViewState: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  keepCurrentModel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /* === */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  wrapperProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /* === */
  beforeMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onMount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onValidate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
Editor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,

  /* === */
  width: '100%',
  height: '100%',
  wrapperProps: {},

  /* === */
  beforeMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop,
  onMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop,
  onValidate: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__.noop
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Editor/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Editor/Editor.js");



var index = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_Editor_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Loading/Loading.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading({
  content
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: loadingStyles
  }, content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var _Loading_Loading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Loading/Loading.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js");






// one of the reasons why we use a separate prop for passing ref instead of using forwardref

function MonacoContainer({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperProps
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_2__["extends"])({
    style: { ..._styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].wrapper,
      width,
      height
    }
  }, wrapperProps), !isEditorReady && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading_Loading_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: _ref,
    style: { ..._styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].fullWidth,
      ...(!isEditorReady && _styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].hide)
    },
    className: className
  }));
}

MonacoContainer.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired,
  isEditorReady: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  wrapperProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoContainer);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _MonacoContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js");



var MonacoContainer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_MonacoContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoContainer);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/_virtual/_rollupPluginBabelHelpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extends": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}




/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useMount_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");




function useMonaco() {
  const [monaco, setMonaco] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].__getMonacoInstance());
  (0,_useMount_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    let cancelable;

    if (!monaco) {
      cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();
      cancelable.then(monaco => {
        setMonaco(monaco);
      });
    }

    return () => {
      var _cancelable;

      return (_cancelable = cancelable) === null || _cancelable === void 0 ? void 0 : _cancelable.cancel();
    };
  });
  return monaco;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMonaco);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


function useMount(effect) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, []);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePrevious);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdate);


/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiffEditor": () => (/* reexport safe */ _DiffEditor_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _Editor_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "loader": () => (/* reexport safe */ _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useMonaco": () => (/* reexport safe */ _hooks_useMonaco_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-loader-virtual-3ea47d31f8/0/cache/@monaco-editor-loader-npm-1.2.0-dfa48eef64-b483d8d748.zip/node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var _DiffEditor_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js");
/* harmony import */ var _hooks_useMonaco_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js");
/* harmony import */ var _Editor_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/Editor/index.js");






/***/ }),

/***/ "./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateModel": () => (/* binding */ getOrCreateModel),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco.editor.getModel(createModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && createModelUri(monaco, path));
}

function createModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}




/***/ }),

/***/ "./packages/grafana-ui/src/components/Monaco/ReactMonacoEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactMonacoEditor": () => (/* binding */ ReactMonacoEditor)
/* harmony export */ });
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@monaco-editor-react-virtual-97b49dd0c6/0/cache/@monaco-editor-react-npm-4.3.1-c128c62d31-477349e640.zip/node_modules/@monaco-editor/react/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/index.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/theme.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





let initalized = false;

function initMonaco() {
  var _window$__grafana_pub;

  if (initalized) {
    return;
  }

  _monaco_editor_react__WEBPACK_IMPORTED_MODULE_0__.loader.config({
    paths: {
      vs: ((_window$__grafana_pub = window.__grafana_public_path__) !== null && _window$__grafana_pub !== void 0 ? _window$__grafana_pub : 'public/') + 'lib/monaco/min/vs'
    }
  });
  initalized = true;
  _monaco_editor_react__WEBPACK_IMPORTED_MODULE_0__.loader.init().then(monaco => {
    // this call makes sure the themes exist.
    // they will not have the correct colors,
    // but we need them to exist since the beginning,
    // because if we start a monaco instance with
    // a theme that does not exist, it will not work well.
    (0,_theme__WEBPACK_IMPORTED_MODULE_3__["default"])(monaco);
  });
}

const ReactMonacoEditor = props => {
  const theme = (0,_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const monaco = (0,_monaco_editor_react__WEBPACK_IMPORTED_MODULE_0__.useMonaco)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // monaco can be null at the beginning, because it is loaded in asynchronously
    if (monaco !== null) {
      (0,_theme__WEBPACK_IMPORTED_MODULE_3__["default"])(monaco, theme);
    }
  }, [monaco, theme]);
  initMonaco();
  const monacoTheme = theme.isDark ? 'grafana-dark' : 'grafana-light';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_0__["default"], Object.assign({
    theme: monacoTheme
  }, props));
};

/***/ }),

/***/ "./packages/grafana-ui/src/components/Monaco/theme.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defineThemes)
/* harmony export */ });
function getColors(theme) {
  if (theme === undefined) {
    return {};
  } else {
    return {
      'editor.background': theme.components.input.background,
      'minimap.background': theme.colors.background.secondary
    };
  }
} // we support calling this without a theme, it will make sure the themes
// are registered in monaco, even if the colors are not perfect.


function defineThemes(monaco, theme) {
  // color tokens are defined here https://github.com/microsoft/vscode/blob/main/src/vs/platform/theme/common/colorRegistry.ts#L174
  const colors = getColors(theme);
  monaco.editor.defineTheme('grafana-dark', {
    base: 'vs-dark',
    inherit: true,
    colors: colors,
    // fallback syntax highlighting for languages that microsoft doesn't handle (ex cloudwatch's metric math)
    rules: [{
      token: 'predefined',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('purple')
    }, {
      token: 'operator',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('orange')
    }, {
      token: 'tag',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('green')
    }]
  });
  monaco.editor.defineTheme('grafana-light', {
    base: 'vs',
    inherit: true,
    colors: colors,
    // fallback syntax highlighting for languages that microsoft doesn't handle (ex cloudwatch's metric math)
    rules: [{
      token: 'predefined',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('purple')
    }, {
      token: 'operator',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('orange')
    }, {
      token: 'tag',
      foreground: theme === null || theme === void 0 ? void 0 : theme.visualization.getColorByName('green')
    }]
  });
}

/***/ }),

/***/ "./.yarn/cache/state-local-npm-1.0.7-9005e49ea6-d1afcf1429.zip/node_modules/state-local/lib/es/state-local.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtbW9uYWNvLWVkaXRvci41YzRkODQ1ZGI0NjlmOWE0MDE2Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsK0JBQStCO0FBQzdFOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Q0FBeUMsU0FBUzs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXdVOzs7Ozs7Ozs7Ozs7QUN6R3hVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDTmlCO0FBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEK0M7QUFDM0Q7QUFDVTtBQUNNO0FBQ047QUFDQTtBQUNjOztBQUV4RDs7QUFFQSxvQkFBb0IsMERBQVk7QUFDaEMsVUFBVSx3REFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxxQkFBcUIsbUZBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxX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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1sb2FkZXItdmlydHVhbC0zZWE0N2QzMWY4LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItbG9hZGVyLW5wbS0xLjIuMC1kZmE0OGVlZjY0LWI0ODNkOGQ3NDguemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9sb2FkZXIvbGliL2VzL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLWxvYWRlci12aXJ0dWFsLTNlYTQ3ZDMxZjgvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1sb2FkZXItbnBtLTEuMi4wLWRmYTQ4ZWVmNjQtYjQ4M2Q4ZDc0OC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL2xvYWRlci9saWIvZXMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1sb2FkZXItdmlydHVhbC0zZWE0N2QzMWY4LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItbG9hZGVyLW5wbS0xLjIuMC1kZmE0OGVlZjY0LWI0ODNkOGQ3NDguemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9sb2FkZXIvbGliL2VzL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1sb2FkZXItdmlydHVhbC0zZWE0N2QzMWY4LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItbG9hZGVyLW5wbS0xLjIuMC1kZmE0OGVlZjY0LWI0ODNkOGQ3NDguemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9sb2FkZXIvbGliL2VzL2xvYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItbG9hZGVyLXZpcnR1YWwtM2VhNDdkMzFmOC8wL2NhY2hlL0Btb25hY28tZWRpdG9yLWxvYWRlci1ucG0tMS4yLjAtZGZhNDhlZWY2NC1iNDgzZDhkNzQ4LnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy91dGlscy9jb21wb3NlLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1sb2FkZXItdmlydHVhbC0zZWE0N2QzMWY4LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItbG9hZGVyLW5wbS0xLjIuMC1kZmE0OGVlZjY0LWI0ODNkOGQ3NDguemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9sb2FkZXIvbGliL2VzL3V0aWxzL2N1cnJ5LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1sb2FkZXItdmlydHVhbC0zZWE0N2QzMWY4LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItbG9hZGVyLW5wbS0xLjIuMC1kZmE0OGVlZjY0LWI0ODNkOGQ3NDguemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9sb2FkZXIvbGliL2VzL3V0aWxzL2RlZXBNZXJnZS5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItbG9hZGVyLXZpcnR1YWwtM2VhNDdkMzFmOC8wL2NhY2hlL0Btb25hY28tZWRpdG9yLWxvYWRlci1ucG0tMS4yLjAtZGZhNDhlZWY2NC1iNDgzZDhkNzQ4LnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy91dGlscy9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItbG9hZGVyLXZpcnR1YWwtM2VhNDdkMzFmOC8wL2NhY2hlL0Btb25hY28tZWRpdG9yLWxvYWRlci1ucG0tMS4yLjAtZGZhNDhlZWY2NC1iNDgzZDhkNzQ4LnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy91dGlscy9tYWtlQ2FuY2VsYWJsZS5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItbG9hZGVyLXZpcnR1YWwtM2VhNDdkMzFmOC8wL2NhY2hlL0Btb25hY28tZWRpdG9yLWxvYWRlci1ucG0tMS4yLjAtZGZhNDhlZWY2NC1iNDgzZDhkNzQ4LnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvbG9hZGVyL2xpYi9lcy92YWxpZGF0b3JzL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL0RpZmZFZGl0b3IvRGlmZkVkaXRvci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9EaWZmRWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL0VkaXRvci9FZGl0b3IuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLXJlYWN0LXZpcnR1YWwtOTdiNDlkZDBjNi8wL2NhY2hlL0Btb25hY28tZWRpdG9yLXJlYWN0LW5wbS00LjMuMS1jMTI4YzYyZDMxLTQ3NzM0OWU2NDAuemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9yZWFjdC9saWIvZXMvRWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL0xvYWRpbmcvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9Nb25hY29Db250YWluZXIvTW9uYWNvQ29udGFpbmVyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL01vbmFjb0NvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9Nb25hY29Db250YWluZXIvc3R5bGVzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL0Btb25hY28tZWRpdG9yLXJlYWN0LXZpcnR1YWwtOTdiNDlkZDBjNi8wL2NhY2hlL0Btb25hY28tZWRpdG9yLXJlYWN0LW5wbS00LjMuMS1jMTI4YzYyZDMxLTQ3NzM0OWU2NDAuemlwL25vZGVfbW9kdWxlcy9AbW9uYWNvLWVkaXRvci9yZWFjdC9saWIvZXMvaG9va3MvdXNlTW9uYWNvL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL2hvb2tzL3VzZU1vdW50L2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL2hvb2tzL3VzZVByZXZpb3VzL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9AbW9uYWNvLWVkaXRvci1yZWFjdC12aXJ0dWFsLTk3YjQ5ZGQwYzYvMC9jYWNoZS9AbW9uYWNvLWVkaXRvci1yZWFjdC1ucG0tNC4zLjEtYzEyOGM2MmQzMS00NzczNDllNjQwLnppcC9ub2RlX21vZHVsZXMvQG1vbmFjby1lZGl0b3IvcmVhY3QvbGliL2VzL2hvb2tzL3VzZVVwZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vQG1vbmFjby1lZGl0b3ItcmVhY3QtdmlydHVhbC05N2I0OWRkMGM2LzAvY2FjaGUvQG1vbmFjby1lZGl0b3ItcmVhY3QtbnBtLTQuMy4xLWMxMjhjNjJkMzEtNDc3MzQ5ZTY0MC56aXAvbm9kZV9tb2R1bGVzL0Btb25hY28tZWRpdG9yL3JlYWN0L2xpYi9lcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcGFja2FnZXMvZ3JhZmFuYS11aS9zcmMvY29tcG9uZW50cy9Nb25hY28vUmVhY3RNb25hY29FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wYWNrYWdlcy9ncmFmYW5hLXVpL3NyYy9jb21wb25lbnRzL01vbmFjby90aGVtZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvc3RhdGUtbG9jYWwtbnBtLTEuMC43LTkwMDVlNDllYTYtZDFhZmNmMTQyOS56aXAvbm9kZV9tb2R1bGVzL3N0YXRlLWxvY2FsL2xpYi9lcy9zdGF0ZS1sb2NhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZXhwb3J0IHsgX2FycmF5TGlrZVRvQXJyYXkgYXMgYXJyYXlMaWtlVG9BcnJheSwgX2FycmF5V2l0aEhvbGVzIGFzIGFycmF5V2l0aEhvbGVzLCBfZGVmaW5lUHJvcGVydHkgYXMgZGVmaW5lUHJvcGVydHksIF9pdGVyYWJsZVRvQXJyYXlMaW1pdCBhcyBpdGVyYWJsZVRvQXJyYXlMaW1pdCwgX25vbkl0ZXJhYmxlUmVzdCBhcyBub25JdGVyYWJsZVJlc3QsIF9vYmplY3RTcHJlYWQyIGFzIG9iamVjdFNwcmVhZDIsIF9zbGljZWRUb0FycmF5IGFzIHNsaWNlZFRvQXJyYXksIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSB9O1xuIiwidmFyIGNvbmZpZyA9IHtcbiAgcGF0aHM6IHtcbiAgICB2czogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbW9uYWNvLWVkaXRvckAwLjI4LjEvbWluL3ZzJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCJpbXBvcnQgbG9hZGVyIGZyb20gJy4vbG9hZGVyL2luZGV4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2xvYWRlci9pbmRleC5qcyc7XG4iLCJpbXBvcnQgeyBzbGljZWRUb0FycmF5IGFzIF9zbGljZWRUb0FycmF5IH0gZnJvbSAnLi4vX3ZpcnR1YWwvX3JvbGx1cFBsdWdpbkJhYmVsSGVscGVycy5qcyc7XG5pbXBvcnQgc3RhdGUgZnJvbSAnc3RhdGUtbG9jYWwnO1xuaW1wb3J0IGNvbmZpZyQxIGZyb20gJy4uL2NvbmZpZy9pbmRleC5qcyc7XG5pbXBvcnQgdmFsaWRhdG9ycyBmcm9tICcuLi92YWxpZGF0b3JzL2luZGV4LmpzJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4uL3V0aWxzL2NvbXBvc2UuanMnO1xuaW1wb3J0IG1lcmdlIGZyb20gJy4uL3V0aWxzL2RlZXBNZXJnZS5qcyc7XG5pbXBvcnQgbWFrZUNhbmNlbGFibGUgZnJvbSAnLi4vdXRpbHMvbWFrZUNhbmNlbGFibGUuanMnO1xuXG4vKiogdGhlIGxvY2FsIHN0YXRlIG9mIHRoZSBtb2R1bGUgKi9cblxudmFyIF9zdGF0ZSRjcmVhdGUgPSBzdGF0ZS5jcmVhdGUoe1xuICBjb25maWc6IGNvbmZpZyQxLFxuICBpc0luaXRpYWxpemVkOiBmYWxzZSxcbiAgcmVzb2x2ZTogbnVsbCxcbiAgcmVqZWN0OiBudWxsLFxuICBtb25hY286IG51bGxcbn0pLFxuICAgIF9zdGF0ZSRjcmVhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3N0YXRlJGNyZWF0ZSwgMiksXG4gICAgZ2V0U3RhdGUgPSBfc3RhdGUkY3JlYXRlMlswXSxcbiAgICBzZXRTdGF0ZSA9IF9zdGF0ZSRjcmVhdGUyWzFdO1xuLyoqXG4gKiBzZXQgdGhlIGxvYWRlciBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKi9cblxuXG5mdW5jdGlvbiBjb25maWcoY29uZmlnKSB7XG4gIHNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IG1lcmdlKHN0YXRlLmNvbmZpZywgdmFsaWRhdG9ycy5jb25maWcoY29uZmlnKSlcbiAgICB9O1xuICB9KTtcbn1cbi8qKlxuICogaGFuZGxlcyB0aGUgaW5pdGlhbGl6YXRpb24gb2YgdGhlIG1vbmFjby1lZGl0b3JcbiAqIEByZXR1cm4ge1Byb21pc2V9IC0gcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBtb25hY28gKHdpdGggYSBjYW5jZWxhYmxlIHByb21pc2UpXG4gKi9cblxuXG5mdW5jdGlvbiBpbml0KCkge1xuICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBpc0luaXRpYWxpemVkID0gX3JlZi5pc0luaXRpYWxpemVkO1xuICAgIHJldHVybiB7XG4gICAgICBpc0luaXRpYWxpemVkOiBpc0luaXRpYWxpemVkXG4gICAgfTtcbiAgfSk7XG5cbiAgaWYgKCFzdGF0ZS5pc0luaXRpYWxpemVkKSB7XG4gICAgaWYgKHdpbmRvdy5tb25hY28gJiYgd2luZG93Lm1vbmFjby5lZGl0b3IpIHtcbiAgICAgIHN0b3JlTW9uYWNvSW5zdGFuY2Uod2luZG93Lm1vbmFjbyk7XG4gICAgICByZXR1cm4gbWFrZUNhbmNlbGFibGUoUHJvbWlzZS5yZXNvbHZlKHdpbmRvdy5tb25hY28pKTtcbiAgICB9XG5cbiAgICBjb21wb3NlKGluamVjdFNjcmlwdHMsIGdldE1vbmFjb0xvYWRlclNjcmlwdCkoY29uZmlndXJlTG9hZGVyKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBpc0luaXRpYWxpemVkOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWFrZUNhbmNlbGFibGUod3JhcHBlclByb21pc2UpO1xufVxuLyoqXG4gKiBpbmplY3RzIHByb3ZpZGVkIHNjcmlwdHMgaW50byB0aGUgZG9jdW1lbnQuYm9keVxuICogQHBhcmFtIHtPYmplY3R9IHNjcmlwdCAtIGFuIEhUTUwgc2NyaXB0IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gLSB0aGUgaW5qZWN0ZWQgSFRNTCBzY3JpcHQgZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gaW5qZWN0U2NyaXB0cyhzY3JpcHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cbi8qKlxuICogY3JlYXRlcyBhbiBIVE1MIHNjcmlwdCBlbGVtZW50IHdpdGgvd2l0aG91dCBwcm92aWRlZCBzcmNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3JjXSAtIHRoZSBzb3VyY2UgcGF0aCBvZiB0aGUgc2NyaXB0XG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdGhlIGNyZWF0ZWQgSFRNTCBzY3JpcHQgZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlU2NyaXB0KHNyYykge1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHJldHVybiBzcmMgJiYgKHNjcmlwdC5zcmMgPSBzcmMpLCBzY3JpcHQ7XG59XG4vKipcbiAqIGNyZWF0ZXMgYW4gSFRNTCBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBtb25hY28gbG9hZGVyIHNyY1xuICogQHJldHVybiB7T2JqZWN0fSAtIHRoZSBjcmVhdGVkIEhUTUwgc2NyaXB0IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE1vbmFjb0xvYWRlclNjcmlwdChjb25maWd1cmVMb2FkZXIpIHtcbiAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIGNvbmZpZyA9IF9yZWYyLmNvbmZpZyxcbiAgICAgICAgcmVqZWN0ID0gX3JlZjIucmVqZWN0O1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgfTtcbiAgfSk7XG4gIHZhciBsb2FkZXJTY3JpcHQgPSBjcmVhdGVTY3JpcHQoXCJcIi5jb25jYXQoc3RhdGUuY29uZmlnLnBhdGhzLnZzLCBcIi9sb2FkZXIuanNcIikpO1xuXG4gIGxvYWRlclNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbmZpZ3VyZUxvYWRlcigpO1xuICB9O1xuXG4gIGxvYWRlclNjcmlwdC5vbmVycm9yID0gc3RhdGUucmVqZWN0O1xuICByZXR1cm4gbG9hZGVyU2NyaXB0O1xufVxuLyoqXG4gKiBjb25maWd1cmVzIHRoZSBtb25hY28gbG9hZGVyXG4gKi9cblxuXG5mdW5jdGlvbiBjb25maWd1cmVMb2FkZXIoKSB7XG4gIHZhciBzdGF0ZSA9IGdldFN0YXRlKGZ1bmN0aW9uIChfcmVmMykge1xuICAgIHZhciBjb25maWcgPSBfcmVmMy5jb25maWcsXG4gICAgICAgIHJlc29sdmUgPSBfcmVmMy5yZXNvbHZlLFxuICAgICAgICByZWplY3QgPSBfcmVmMy5yZWplY3Q7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgfTtcbiAgfSk7XG4gIHZhciByZXF1aXJlID0gd2luZG93LnJlcXVpcmU7XG5cbiAgcmVxdWlyZS5jb25maWcoc3RhdGUuY29uZmlnKTtcblxuICByZXF1aXJlKFsndnMvZWRpdG9yL2VkaXRvci5tYWluJ10sIGZ1bmN0aW9uIChtb25hY28pIHtcbiAgICBzdG9yZU1vbmFjb0luc3RhbmNlKG1vbmFjbyk7XG4gICAgc3RhdGUucmVzb2x2ZShtb25hY28pO1xuICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBzdGF0ZS5yZWplY3QoZXJyb3IpO1xuICB9KTtcbn1cbi8qKlxuICogc3RvcmUgbW9uYWNvIGluc3RhbmNlIGluIGxvY2FsIHN0YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzdG9yZU1vbmFjb0luc3RhbmNlKG1vbmFjbykge1xuICBpZiAoIWdldFN0YXRlKCkubW9uYWNvKSB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgbW9uYWNvOiBtb25hY29cbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBpbnRlcm5hbCBoZWxwZXIgZnVuY3Rpb25cbiAqIGV4dHJhY3RzIHN0b3JlZCBtb25hY28gaW5zdGFuY2VcbiAqIEByZXR1cm4ge09iamVjdHxudWxsfSAtIHRoZSBtb25hY28gaW5zdGFuY2VcbiAqL1xuXG5cbmZ1bmN0aW9uIF9fZ2V0TW9uYWNvSW5zdGFuY2UoKSB7XG4gIHJldHVybiBnZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICB2YXIgbW9uYWNvID0gX3JlZjQubW9uYWNvO1xuICAgIHJldHVybiBtb25hY287XG4gIH0pO1xufVxuXG52YXIgd3JhcHBlclByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHJldHVybiBzZXRTdGF0ZSh7XG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICByZWplY3Q6IHJlamVjdFxuICB9KTtcbn0pO1xudmFyIGxvYWRlciA9IHtcbiAgY29uZmlnOiBjb25maWcsXG4gIGluaXQ6IGluaXQsXG4gIF9fZ2V0TW9uYWNvSW5zdGFuY2U6IF9fZ2V0TW9uYWNvSW5zdGFuY2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRlcjtcbiIsInZhciBjb21wb3NlID0gZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gZm5zLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uICh5LCBmKSB7XG4gICAgICByZXR1cm4gZih5KTtcbiAgICB9LCB4KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2U7XG4iLCJmdW5jdGlvbiBjdXJyeShmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLmxlbmd0aCA+PSBmbi5sZW5ndGggPyBmbi5hcHBseSh0aGlzLCBhcmdzKSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgbmV4dEFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgbmV4dEFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnJpZWQuYXBwbHkoX3RoaXMsIFtdLmNvbmNhdChhcmdzLCBuZXh0QXJncykpO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJ5O1xuIiwiaW1wb3J0IHsgb2JqZWN0U3ByZWFkMiBhcyBfb2JqZWN0U3ByZWFkMiB9IGZyb20gJy4uL192aXJ0dWFsL19yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMuanMnO1xuXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChzb3VyY2Vba2V5XSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgaWYgKHRhcmdldFtrZXldKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oc291cmNlW2tleV0sIG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgdGFyZ2V0KSwgc291cmNlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2U7XG4iLCJmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkuaW5jbHVkZXMoJ09iamVjdCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdDtcbiIsIi8vIFRoZSBzb3VyY2UgKGhhcyBiZWVuIGNoYW5nZWQpIGlzIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNTQ2NSNpc3N1ZWNvbW1lbnQtMTU3ODg4MzI1XG52YXIgQ0FOQ0VMQVRJT05fTUVTU0FHRSA9IHtcbiAgdHlwZTogJ2NhbmNlbGF0aW9uJyxcbiAgbXNnOiAnb3BlcmF0aW9uIGlzIG1hbnVhbGx5IGNhbmNlbGVkJ1xufTtcblxuZnVuY3Rpb24gbWFrZUNhbmNlbGFibGUocHJvbWlzZSkge1xuICB2YXIgaGFzQ2FuY2VsZWRfID0gZmFsc2U7XG4gIHZhciB3cmFwcGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIGhhc0NhbmNlbGVkXyA/IHJlamVjdChDQU5DRUxBVElPTl9NRVNTQUdFKSA6IHJlc29sdmUodmFsKTtcbiAgICB9KTtcbiAgICBwcm9taXNlW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgfSk7XG4gIHJldHVybiB3cmFwcGVkUHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGhhc0NhbmNlbGVkXyA9IHRydWU7XG4gIH0sIHdyYXBwZWRQcm9taXNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ2FuY2VsYWJsZTtcbmV4cG9ydCB7IENBTkNFTEFUSU9OX01FU1NBR0UgfTtcbiIsImltcG9ydCBjdXJyeSBmcm9tICcuLi91dGlscy9jdXJyeS5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi4vdXRpbHMvaXNPYmplY3QuanMnO1xuXG4vKipcbiAqIHZhbGlkYXRlcyB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgYW5kIGluZm9ybXMgYWJvdXQgZGVwcmVjYXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgXG4gKiBAcmV0dXJuIHtPYmplY3R9IGNvbmZpZyAtIHRoZSB2YWxpZGF0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcbiAqL1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbmZpZyhjb25maWcpIHtcbiAgaWYgKCFjb25maWcpIGVycm9ySGFuZGxlcignY29uZmlnSXNSZXF1aXJlZCcpO1xuICBpZiAoIWlzT2JqZWN0KGNvbmZpZykpIGVycm9ySGFuZGxlcignY29uZmlnVHlwZScpO1xuXG4gIGlmIChjb25maWcudXJscykge1xuICAgIGluZm9ybUFib3V0RGVwcmVjYXRpb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aHM6IHtcbiAgICAgICAgdnM6IGNvbmZpZy51cmxzLm1vbmFjb0Jhc2VcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbi8qKlxuICogbG9ncyBkZXByZWNhdGlvbiBtZXNzYWdlXG4gKi9cblxuXG5mdW5jdGlvbiBpbmZvcm1BYm91dERlcHJlY2F0aW9uKCkge1xuICBjb25zb2xlLndhcm4oZXJyb3JNZXNzYWdlcy5kZXByZWNhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3JNZXNzYWdlcywgdHlwZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlc1t0eXBlXSB8fCBlcnJvck1lc3NhZ2VzW1wiZGVmYXVsdFwiXSk7XG59XG5cbnZhciBlcnJvck1lc3NhZ2VzID0ge1xuICBjb25maWdJc1JlcXVpcmVkOiAndGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGlzIHJlcXVpcmVkJyxcbiAgY29uZmlnVHlwZTogJ3RoZSBjb25maWd1cmF0aW9uIG9iamVjdCBzaG91bGQgYmUgYW4gb2JqZWN0JyxcbiAgXCJkZWZhdWx0XCI6ICdhbiB1bmtub3duIGVycm9yIGFjY3VyZWQgaW4gYEBtb25hY28tZWRpdG9yL2xvYWRlcmAgcGFja2FnZScsXG4gIGRlcHJlY2F0aW9uOiBcIkRlcHJlY2F0aW9uIHdhcm5pbmchXFxuICAgIFlvdSBhcmUgdXNpbmcgZGVwcmVjYXRlZCB3YXkgb2YgY29uZmlndXJhdGlvbi5cXG5cXG4gICAgSW5zdGVhZCBvZiB1c2luZ1xcbiAgICAgIG1vbmFjby5jb25maWcoeyB1cmxzOiB7IG1vbmFjb0Jhc2U6ICcuLi4nIH0gfSlcXG4gICAgdXNlXFxuICAgICAgbW9uYWNvLmNvbmZpZyh7IHBhdGhzOiB7IHZzOiAnLi4uJyB9IH0pXFxuXFxuICAgIEZvciBtb3JlIHBsZWFzZSBjaGVjayB0aGUgbGluayBodHRwczovL2dpdGh1Yi5jb20vc3VyZW4tYXRveWFuL21vbmFjby1sb2FkZXIjY29uZmlnXFxuICBcIlxufTtcbnZhciBlcnJvckhhbmRsZXIgPSBjdXJyeSh0aHJvd0Vycm9yKShlcnJvck1lc3NhZ2VzKTtcbnZhciB2YWxpZGF0b3JzID0ge1xuICBjb25maWc6IHZhbGlkYXRlQ29uZmlnXG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0b3JzO1xuZXhwb3J0IHsgZXJyb3JIYW5kbGVyLCBlcnJvck1lc3NhZ2VzIH07XG4iLCJpbXBvcnQgbG9hZGVyIGZyb20gJ0Btb25hY28tZWRpdG9yL2xvYWRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTW9uYWNvQ29udGFpbmVyIGZyb20gJy4uL01vbmFjb0NvbnRhaW5lci9pbmRleC5qcyc7XG5pbXBvcnQgdXNlTW91bnQgZnJvbSAnLi4vaG9va3MvdXNlTW91bnQvaW5kZXguanMnO1xuaW1wb3J0IHVzZVVwZGF0ZSBmcm9tICcuLi9ob29rcy91c2VVcGRhdGUvaW5kZXguanMnO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVNb2RlbCwgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2luZGV4LmpzJztcblxuZnVuY3Rpb24gRGlmZkVkaXRvcih7XG4gIG9yaWdpbmFsLFxuICBtb2RpZmllZCxcbiAgbGFuZ3VhZ2UsXG4gIG9yaWdpbmFsTGFuZ3VhZ2UsXG4gIG1vZGlmaWVkTGFuZ3VhZ2UsXG5cbiAgLyogPT09ICovXG4gIG9yaWdpbmFsTW9kZWxQYXRoLFxuICBtb2RpZmllZE1vZGVsUGF0aCxcbiAga2VlcEN1cnJlbnRPcmlnaW5hbE1vZGVsLFxuICBrZWVwQ3VycmVudE1vZGlmaWVkTW9kZWwsXG4gIHRoZW1lLFxuICBsb2FkaW5nLFxuICBvcHRpb25zLFxuXG4gIC8qID09PSAqL1xuICBoZWlnaHQsXG4gIHdpZHRoLFxuICBjbGFzc05hbWUsXG4gIHdyYXBwZXJQcm9wcyxcblxuICAvKiA9PT0gKi9cbiAgYmVmb3JlTW91bnQsXG4gIG9uTW91bnRcbn0pIHtcbiAgY29uc3QgW2lzRWRpdG9yUmVhZHksIHNldElzRWRpdG9yUmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNNb25hY29Nb3VudGluZywgc2V0SXNNb25hY29Nb3VudGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgZWRpdG9yUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBtb25hY29SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgb25Nb3VudFJlZiA9IHVzZVJlZihvbk1vdW50KTtcbiAgY29uc3QgYmVmb3JlTW91bnRSZWYgPSB1c2VSZWYoYmVmb3JlTW91bnQpO1xuICB1c2VNb3VudCgoKSA9PiB7XG4gICAgY29uc3QgY2FuY2VsYWJsZSA9IGxvYWRlci5pbml0KCk7XG4gICAgY2FuY2VsYWJsZS50aGVuKG1vbmFjbyA9PiAobW9uYWNvUmVmLmN1cnJlbnQgPSBtb25hY28pICYmIHNldElzTW9uYWNvTW91bnRpbmcoZmFsc2UpKS5jYXRjaChlcnJvciA9PiAoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLnR5cGUpICE9PSAnY2FuY2VsYXRpb24nICYmIGNvbnNvbGUuZXJyb3IoJ01vbmFjbyBpbml0aWFsaXphdGlvbjogZXJyb3I6JywgZXJyb3IpKTtcbiAgICByZXR1cm4gKCkgPT4gZWRpdG9yUmVmLmN1cnJlbnQgPyBkaXNwb3NlRWRpdG9yKCkgOiBjYW5jZWxhYmxlLmNhbmNlbCgpO1xuICB9KTtcbiAgdXNlVXBkYXRlKCgpID0+IHtcbiAgICBjb25zdCBtb2RpZmllZEVkaXRvciA9IGVkaXRvclJlZi5jdXJyZW50LmdldE1vZGlmaWVkRWRpdG9yKCk7XG5cbiAgICBpZiAobW9kaWZpZWRFZGl0b3IuZ2V0T3B0aW9uKG1vbmFjb1JlZi5jdXJyZW50LmVkaXRvci5FZGl0b3JPcHRpb24ucmVhZE9ubHkpKSB7XG4gICAgICBtb2RpZmllZEVkaXRvci5zZXRWYWx1ZShtb2RpZmllZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtb2RpZmllZCAhPT0gbW9kaWZpZWRFZGl0b3IuZ2V0VmFsdWUoKSkge1xuICAgICAgICBtb2RpZmllZEVkaXRvci5leGVjdXRlRWRpdHMoJycsIFt7XG4gICAgICAgICAgcmFuZ2U6IG1vZGlmaWVkRWRpdG9yLmdldE1vZGVsKCkuZ2V0RnVsbE1vZGVsUmFuZ2UoKSxcbiAgICAgICAgICB0ZXh0OiBtb2RpZmllZCxcbiAgICAgICAgICBmb3JjZU1vdmVNYXJrZXJzOiB0cnVlXG4gICAgICAgIH1dKTtcbiAgICAgICAgbW9kaWZpZWRFZGl0b3IucHVzaFVuZG9TdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbW9kaWZpZWRdLCBpc0VkaXRvclJlYWR5KTtcbiAgdXNlVXBkYXRlKCgpID0+IHtcbiAgICBlZGl0b3JSZWYuY3VycmVudC5nZXRNb2RlbCgpLm9yaWdpbmFsLnNldFZhbHVlKG9yaWdpbmFsKTtcbiAgfSwgW29yaWdpbmFsXSwgaXNFZGl0b3JSZWFkeSk7XG4gIHVzZVVwZGF0ZSgoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb3JpZ2luYWwsXG4gICAgICBtb2RpZmllZFxuICAgIH0gPSBlZGl0b3JSZWYuY3VycmVudC5nZXRNb2RlbCgpO1xuICAgIG1vbmFjb1JlZi5jdXJyZW50LmVkaXRvci5zZXRNb2RlbExhbmd1YWdlKG9yaWdpbmFsLCBvcmlnaW5hbExhbmd1YWdlIHx8IGxhbmd1YWdlKTtcbiAgICBtb25hY29SZWYuY3VycmVudC5lZGl0b3Iuc2V0TW9kZWxMYW5ndWFnZShtb2RpZmllZCwgbW9kaWZpZWRMYW5ndWFnZSB8fCBsYW5ndWFnZSk7XG4gIH0sIFtsYW5ndWFnZSwgb3JpZ2luYWxMYW5ndWFnZSwgbW9kaWZpZWRMYW5ndWFnZV0sIGlzRWRpdG9yUmVhZHkpO1xuICB1c2VVcGRhdGUoKCkgPT4ge1xuICAgIG1vbmFjb1JlZi5jdXJyZW50LmVkaXRvci5zZXRUaGVtZSh0aGVtZSk7XG4gIH0sIFt0aGVtZV0sIGlzRWRpdG9yUmVhZHkpO1xuICB1c2VVcGRhdGUoKCkgPT4ge1xuICAgIGVkaXRvclJlZi5jdXJyZW50LnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gIH0sIFtvcHRpb25zXSwgaXNFZGl0b3JSZWFkeSk7XG4gIGNvbnN0IHNldE1vZGVscyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBiZWZvcmVNb3VudFJlZi5jdXJyZW50KG1vbmFjb1JlZi5jdXJyZW50KTtcbiAgICBjb25zdCBvcmlnaW5hbE1vZGVsID0gZ2V0T3JDcmVhdGVNb2RlbChtb25hY29SZWYuY3VycmVudCwgb3JpZ2luYWwsIG9yaWdpbmFsTGFuZ3VhZ2UgfHwgbGFuZ3VhZ2UsIG9yaWdpbmFsTW9kZWxQYXRoKTtcbiAgICBjb25zdCBtb2RpZmllZE1vZGVsID0gZ2V0T3JDcmVhdGVNb2RlbChtb25hY29SZWYuY3VycmVudCwgbW9kaWZpZWQsIG1vZGlmaWVkTGFuZ3VhZ2UgfHwgbGFuZ3VhZ2UsIG1vZGlmaWVkTW9kZWxQYXRoKTtcbiAgICBlZGl0b3JSZWYuY3VycmVudC5zZXRNb2RlbCh7XG4gICAgICBvcmlnaW5hbDogb3JpZ2luYWxNb2RlbCxcbiAgICAgIG1vZGlmaWVkOiBtb2RpZmllZE1vZGVsXG4gICAgfSk7XG4gIH0sIFtsYW5ndWFnZSwgbW9kaWZpZWQsIG1vZGlmaWVkTGFuZ3VhZ2UsIG9yaWdpbmFsLCBvcmlnaW5hbExhbmd1YWdlLCBvcmlnaW5hbE1vZGVsUGF0aCwgbW9kaWZpZWRNb2RlbFBhdGhdKTtcbiAgY29uc3QgY3JlYXRlRWRpdG9yID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGVkaXRvclJlZi5jdXJyZW50ID0gbW9uYWNvUmVmLmN1cnJlbnQuZWRpdG9yLmNyZWF0ZURpZmZFZGl0b3IoY29udGFpbmVyUmVmLmN1cnJlbnQsIHtcbiAgICAgIGF1dG9tYXRpY0xheW91dDogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9KTtcbiAgICBzZXRNb2RlbHMoKTtcbiAgICBtb25hY29SZWYuY3VycmVudC5lZGl0b3Iuc2V0VGhlbWUodGhlbWUpO1xuICAgIHNldElzRWRpdG9yUmVhZHkodHJ1ZSk7XG4gIH0sIFtvcHRpb25zLCB0aGVtZSwgc2V0TW9kZWxzXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRWRpdG9yUmVhZHkpIHtcbiAgICAgIG9uTW91bnRSZWYuY3VycmVudChlZGl0b3JSZWYuY3VycmVudCwgbW9uYWNvUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW2lzRWRpdG9yUmVhZHldKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAhaXNNb25hY29Nb3VudGluZyAmJiAhaXNFZGl0b3JSZWFkeSAmJiBjcmVhdGVFZGl0b3IoKTtcbiAgfSwgW2lzTW9uYWNvTW91bnRpbmcsIGlzRWRpdG9yUmVhZHksIGNyZWF0ZUVkaXRvcl0pO1xuXG4gIGZ1bmN0aW9uIGRpc3Bvc2VFZGl0b3IoKSB7XG4gICAgY29uc3QgbW9kZWxzID0gZWRpdG9yUmVmLmN1cnJlbnQuZ2V0TW9kZWwoKTtcblxuICAgIGlmICgha2VlcEN1cnJlbnRPcmlnaW5hbE1vZGVsKSB7XG4gICAgICB2YXIgX21vZGVscyRvcmlnaW5hbDtcblxuICAgICAgKF9tb2RlbHMkb3JpZ2luYWwgPSBtb2RlbHMub3JpZ2luYWwpID09PSBudWxsIHx8IF9tb2RlbHMkb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9tb2RlbHMkb3JpZ2luYWwuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGlmICgha2VlcEN1cnJlbnRNb2RpZmllZE1vZGVsKSB7XG4gICAgICB2YXIgX21vZGVscyRtb2RpZmllZDtcblxuICAgICAgKF9tb2RlbHMkbW9kaWZpZWQgPSBtb2RlbHMubW9kaWZpZWQpID09PSBudWxsIHx8IF9tb2RlbHMkbW9kaWZpZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9tb2RlbHMkbW9kaWZpZWQuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGVkaXRvclJlZi5jdXJyZW50LmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb25hY29Db250YWluZXIsIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgaXNFZGl0b3JSZWFkeTogaXNFZGl0b3JSZWFkeSxcbiAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgIF9yZWY6IGNvbnRhaW5lclJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICB3cmFwcGVyUHJvcHM6IHdyYXBwZXJQcm9wc1xuICB9KTtcbn1cblxuRGlmZkVkaXRvci5wcm9wVHlwZXMgPSB7XG4gIG9yaWdpbmFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtb2RpZmllZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9yaWdpbmFsTGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1vZGlmaWVkTGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyogPT09ICovXG4gIG9yaWdpbmFsTW9kZWxQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtb2RpZmllZE1vZGVsUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAga2VlcEN1cnJlbnRPcmlnaW5hbE1vZGVsOiBQcm9wVHlwZXMuYm9vbCxcbiAga2VlcEN1cnJlbnRNb2RpZmllZE1vZGVsOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyogPT09ICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKiA9PT0gKi9cbiAgYmVmb3JlTW91bnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdW50OiBQcm9wVHlwZXMuZnVuY1xufTtcbkRpZmZFZGl0b3IuZGVmYXVsdFByb3BzID0ge1xuICB0aGVtZTogJ2xpZ2h0JyxcbiAgbG9hZGluZzogJ0xvYWRpbmcuLi4nLFxuICBvcHRpb25zOiB7fSxcbiAga2VlcEN1cnJlbnRPcmlnaW5hbE1vZGVsOiBmYWxzZSxcbiAga2VlcEN1cnJlbnRNb2RpZmllZE1vZGVsOiBmYWxzZSxcblxuICAvKiA9PT0gKi9cbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHdyYXBwZXJQcm9wczoge30sXG5cbiAgLyogPT09ICovXG4gIGJlZm9yZU1vdW50OiBub29wLFxuICBvbk1vdW50OiBub29wXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWZmRWRpdG9yO1xuIiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWZmRWRpdG9yIGZyb20gJy4vRGlmZkVkaXRvci5qcyc7XG5cbnZhciBpbmRleCA9IC8qI19fUFVSRV9fKi9tZW1vKERpZmZFZGl0b3IpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImltcG9ydCBsb2FkZXIgZnJvbSAnQG1vbmFjby1lZGl0b3IvbG9hZGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBNb25hY29Db250YWluZXIgZnJvbSAnLi4vTW9uYWNvQ29udGFpbmVyL2luZGV4LmpzJztcbmltcG9ydCB1c2VNb3VudCBmcm9tICcuLi9ob29rcy91c2VNb3VudC9pbmRleC5qcyc7XG5pbXBvcnQgdXNlVXBkYXRlIGZyb20gJy4uL2hvb2tzL3VzZVVwZGF0ZS9pbmRleC5qcyc7XG5pbXBvcnQgeyBnZXRPckNyZWF0ZU1vZGVsLCBub29wLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzL2luZGV4LmpzJztcbmltcG9ydCB1c2VQcmV2aW91cyBmcm9tICcuLi9ob29rcy91c2VQcmV2aW91cy9pbmRleC5qcyc7XG5cbmNvbnN0IHZpZXdTdGF0ZXMgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIEVkaXRvcih7XG4gIGRlZmF1bHRWYWx1ZSxcbiAgZGVmYXVsdExhbmd1YWdlLFxuICBkZWZhdWx0UGF0aCxcbiAgdmFsdWUsXG4gIGxhbmd1YWdlLFxuICBwYXRoLFxuXG4gIC8qID09PSAqL1xuICB0aGVtZSxcbiAgbGluZSxcbiAgbG9hZGluZyxcbiAgb3B0aW9ucyxcbiAgb3ZlcnJpZGVTZXJ2aWNlcyxcbiAgc2F2ZVZpZXdTdGF0ZSxcbiAga2VlcEN1cnJlbnRNb2RlbCxcblxuICAvKiA9PT0gKi9cbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgY2xhc3NOYW1lLFxuICB3cmFwcGVyUHJvcHMsXG5cbiAgLyogPT09ICovXG4gIGJlZm9yZU1vdW50LFxuICBvbk1vdW50LFxuICBvbkNoYW5nZSxcbiAgb25WYWxpZGF0ZVxufSkge1xuICBjb25zdCBbaXNFZGl0b3JSZWFkeSwgc2V0SXNFZGl0b3JSZWFkeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc01vbmFjb01vdW50aW5nLCBzZXRJc01vbmFjb01vdW50aW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBtb25hY29SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBvbk1vdW50UmVmID0gdXNlUmVmKG9uTW91bnQpO1xuICBjb25zdCBiZWZvcmVNb3VudFJlZiA9IHVzZVJlZihiZWZvcmVNb3VudCk7XG4gIGNvbnN0IHN1YnNjcmlwdGlvblJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgdmFsdWVSZWYgPSB1c2VSZWYodmFsdWUpO1xuICBjb25zdCBwcmV2aW91c1BhdGggPSB1c2VQcmV2aW91cyhwYXRoKTtcbiAgdXNlTW91bnQoKCkgPT4ge1xuICAgIGNvbnN0IGNhbmNlbGFibGUgPSBsb2FkZXIuaW5pdCgpO1xuICAgIGNhbmNlbGFibGUudGhlbihtb25hY28gPT4gKG1vbmFjb1JlZi5jdXJyZW50ID0gbW9uYWNvKSAmJiBzZXRJc01vbmFjb01vdW50aW5nKGZhbHNlKSkuY2F0Y2goZXJyb3IgPT4gKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci50eXBlKSAhPT0gJ2NhbmNlbGF0aW9uJyAmJiBjb25zb2xlLmVycm9yKCdNb25hY28gaW5pdGlhbGl6YXRpb246IGVycm9yOicsIGVycm9yKSk7XG4gICAgcmV0dXJuICgpID0+IGVkaXRvclJlZi5jdXJyZW50ID8gZGlzcG9zZUVkaXRvcigpIDogY2FuY2VsYWJsZS5jYW5jZWwoKTtcbiAgfSk7XG4gIHVzZVVwZGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgbW9kZWwgPSBnZXRPckNyZWF0ZU1vZGVsKG1vbmFjb1JlZi5jdXJyZW50LCBkZWZhdWx0VmFsdWUgfHwgdmFsdWUsIGRlZmF1bHRMYW5ndWFnZSB8fCBsYW5ndWFnZSwgcGF0aCk7XG5cbiAgICBpZiAobW9kZWwgIT09IGVkaXRvclJlZi5jdXJyZW50LmdldE1vZGVsKCkpIHtcbiAgICAgIHNhdmVWaWV3U3RhdGUgJiYgdmlld1N0YXRlcy5zZXQocHJldmlvdXNQYXRoLCBlZGl0b3JSZWYuY3VycmVudC5zYXZlVmlld1N0YXRlKCkpO1xuICAgICAgZWRpdG9yUmVmLmN1cnJlbnQuc2V0TW9kZWwobW9kZWwpO1xuICAgICAgc2F2ZVZpZXdTdGF0ZSAmJiBlZGl0b3JSZWYuY3VycmVudC5yZXN0b3JlVmlld1N0YXRlKHZpZXdTdGF0ZXMuZ2V0KHBhdGgpKTtcbiAgICB9XG4gIH0sIFtwYXRoXSwgaXNFZGl0b3JSZWFkeSk7XG4gIHVzZVVwZGF0ZSgoKSA9PiB7XG4gICAgZWRpdG9yUmVmLmN1cnJlbnQudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgfSwgW29wdGlvbnNdLCBpc0VkaXRvclJlYWR5KTtcbiAgdXNlVXBkYXRlKCgpID0+IHtcbiAgICBpZiAoZWRpdG9yUmVmLmN1cnJlbnQuZ2V0T3B0aW9uKG1vbmFjb1JlZi5jdXJyZW50LmVkaXRvci5FZGl0b3JPcHRpb24ucmVhZE9ubHkpKSB7XG4gICAgICBlZGl0b3JSZWYuY3VycmVudC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gZWRpdG9yUmVmLmN1cnJlbnQuZ2V0VmFsdWUoKSkge1xuICAgICAgICBlZGl0b3JSZWYuY3VycmVudC5leGVjdXRlRWRpdHMoJycsIFt7XG4gICAgICAgICAgcmFuZ2U6IGVkaXRvclJlZi5jdXJyZW50LmdldE1vZGVsKCkuZ2V0RnVsbE1vZGVsUmFuZ2UoKSxcbiAgICAgICAgICB0ZXh0OiB2YWx1ZSxcbiAgICAgICAgICBmb3JjZU1vdmVNYXJrZXJzOiB0cnVlXG4gICAgICAgIH1dKTtcbiAgICAgICAgZWRpdG9yUmVmLmN1cnJlbnQucHVzaFVuZG9TdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbdmFsdWVdLCBpc0VkaXRvclJlYWR5KTtcbiAgdXNlVXBkYXRlKCgpID0+IHtcbiAgICBtb25hY29SZWYuY3VycmVudC5lZGl0b3Iuc2V0TW9kZWxMYW5ndWFnZShlZGl0b3JSZWYuY3VycmVudC5nZXRNb2RlbCgpLCBsYW5ndWFnZSk7XG4gIH0sIFtsYW5ndWFnZV0sIGlzRWRpdG9yUmVhZHkpO1xuICB1c2VVcGRhdGUoKCkgPT4ge1xuICAgIC8vIHJlYXNvbiBmb3IgdW5kZWZpbmVkIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vc3VyZW4tYXRveWFuL21vbmFjby1yZWFjdC9wdWxsLzE4OFxuICAgIGlmICghaXNVbmRlZmluZWQobGluZSkpIHtcbiAgICAgIGVkaXRvclJlZi5jdXJyZW50LnJldmVhbExpbmUobGluZSk7XG4gICAgfVxuICB9LCBbbGluZV0sIGlzRWRpdG9yUmVhZHkpO1xuICB1c2VVcGRhdGUoKCkgPT4ge1xuICAgIG1vbmFjb1JlZi5jdXJyZW50LmVkaXRvci5zZXRUaGVtZSh0aGVtZSk7XG4gIH0sIFt0aGVtZV0sIGlzRWRpdG9yUmVhZHkpO1xuICBjb25zdCBjcmVhdGVFZGl0b3IgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYmVmb3JlTW91bnRSZWYuY3VycmVudChtb25hY29SZWYuY3VycmVudCk7XG4gICAgY29uc3QgYXV0b0NyZWF0ZWRNb2RlbFBhdGggPSBwYXRoIHx8IGRlZmF1bHRQYXRoO1xuICAgIGNvbnN0IGRlZmF1bHRNb2RlbCA9IGdldE9yQ3JlYXRlTW9kZWwobW9uYWNvUmVmLmN1cnJlbnQsIHZhbHVlIHx8IGRlZmF1bHRWYWx1ZSwgZGVmYXVsdExhbmd1YWdlIHx8IGxhbmd1YWdlLCBhdXRvQ3JlYXRlZE1vZGVsUGF0aCk7XG4gICAgZWRpdG9yUmVmLmN1cnJlbnQgPSBtb25hY29SZWYuY3VycmVudC5lZGl0b3IuY3JlYXRlKGNvbnRhaW5lclJlZi5jdXJyZW50LCB7XG4gICAgICBtb2RlbDogZGVmYXVsdE1vZGVsLFxuICAgICAgYXV0b21hdGljTGF5b3V0OiB0cnVlLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH0sIG92ZXJyaWRlU2VydmljZXMpO1xuICAgIHNhdmVWaWV3U3RhdGUgJiYgZWRpdG9yUmVmLmN1cnJlbnQucmVzdG9yZVZpZXdTdGF0ZSh2aWV3U3RhdGVzLmdldChhdXRvQ3JlYXRlZE1vZGVsUGF0aCkpO1xuICAgIG1vbmFjb1JlZi5jdXJyZW50LmVkaXRvci5zZXRUaGVtZSh0aGVtZSk7XG4gICAgc2V0SXNFZGl0b3JSZWFkeSh0cnVlKTtcbiAgfSwgW2RlZmF1bHRWYWx1ZSwgZGVmYXVsdExhbmd1YWdlLCBkZWZhdWx0UGF0aCwgdmFsdWUsIGxhbmd1YWdlLCBwYXRoLCBvcHRpb25zLCBvdmVycmlkZVNlcnZpY2VzLCBzYXZlVmlld1N0YXRlLCB0aGVtZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0VkaXRvclJlYWR5KSB7XG4gICAgICBvbk1vdW50UmVmLmN1cnJlbnQoZWRpdG9yUmVmLmN1cnJlbnQsIG1vbmFjb1JlZi5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtpc0VkaXRvclJlYWR5XSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIWlzTW9uYWNvTW91bnRpbmcgJiYgIWlzRWRpdG9yUmVhZHkgJiYgY3JlYXRlRWRpdG9yKCk7XG4gIH0sIFtpc01vbmFjb01vdW50aW5nLCBpc0VkaXRvclJlYWR5LCBjcmVhdGVFZGl0b3JdKTsgLy8gc3Vic2NyaXB0aW9uXG4gIC8vIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHVwZGF0ZXMgKGF0dGFjaCAtIGRpc3Bvc2UgbGlzdGVuZXIpIGluIHN1YnNjcmlwdGlvblxuXG4gIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNFZGl0b3JSZWFkeSAmJiBvbkNoYW5nZSkge1xuICAgICAgdmFyIF9zdWJzY3JpcHRpb25SZWYkY3VyciwgX2VkaXRvclJlZiRjdXJyZW50O1xuXG4gICAgICAoX3N1YnNjcmlwdGlvblJlZiRjdXJyID0gc3Vic2NyaXB0aW9uUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9zdWJzY3JpcHRpb25SZWYkY3VyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N1YnNjcmlwdGlvblJlZiRjdXJyLmRpc3Bvc2UoKTtcbiAgICAgIHN1YnNjcmlwdGlvblJlZi5jdXJyZW50ID0gKF9lZGl0b3JSZWYkY3VycmVudCA9IGVkaXRvclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZWRpdG9yUmVmJGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lZGl0b3JSZWYkY3VycmVudC5vbkRpZENoYW5nZU1vZGVsQ29udGVudChldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRvclZhbHVlID0gZWRpdG9yUmVmLmN1cnJlbnQuZ2V0VmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCAhPT0gZWRpdG9yVmFsdWUpIHtcbiAgICAgICAgICBvbkNoYW5nZShlZGl0b3JWYWx1ZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtpc0VkaXRvclJlYWR5LCBvbkNoYW5nZV0pOyAvLyBvblZhbGlkYXRlXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNFZGl0b3JSZWFkeSkge1xuICAgICAgY29uc3QgY2hhbmdlTWFya2Vyc0xpc3RlbmVyID0gbW9uYWNvUmVmLmN1cnJlbnQuZWRpdG9yLm9uRGlkQ2hhbmdlTWFya2Vycyh1cmlzID0+IHtcbiAgICAgICAgdmFyIF9lZGl0b3JSZWYkY3VycmVudCRnZTtcblxuICAgICAgICBjb25zdCBlZGl0b3JVcmkgPSAoX2VkaXRvclJlZiRjdXJyZW50JGdlID0gZWRpdG9yUmVmLmN1cnJlbnQuZ2V0TW9kZWwoKSkgPT09IG51bGwgfHwgX2VkaXRvclJlZiRjdXJyZW50JGdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZWRpdG9yUmVmJGN1cnJlbnQkZ2UudXJpO1xuXG4gICAgICAgIGlmIChlZGl0b3JVcmkpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50RWRpdG9ySGFzTWFya2VyQ2hhbmdlcyA9IHVyaXMuZmluZCh1cmkgPT4gdXJpLnBhdGggPT09IGVkaXRvclVyaS5wYXRoKTtcblxuICAgICAgICAgIGlmIChjdXJyZW50RWRpdG9ySGFzTWFya2VyQ2hhbmdlcykge1xuICAgICAgICAgICAgY29uc3QgbWFya2VycyA9IG1vbmFjb1JlZi5jdXJyZW50LmVkaXRvci5nZXRNb2RlbE1hcmtlcnMoe1xuICAgICAgICAgICAgICByZXNvdXJjZTogZWRpdG9yVXJpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9uVmFsaWRhdGUgPT09IG51bGwgfHwgb25WYWxpZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25WYWxpZGF0ZShtYXJrZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2hhbmdlTWFya2Vyc0xpc3RlbmVyID09PSBudWxsIHx8IGNoYW5nZU1hcmtlcnNMaXN0ZW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hhbmdlTWFya2Vyc0xpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbaXNFZGl0b3JSZWFkeSwgb25WYWxpZGF0ZV0pO1xuXG4gIGZ1bmN0aW9uIGRpc3Bvc2VFZGl0b3IoKSB7XG4gICAgdmFyIF9zdWJzY3JpcHRpb25SZWYkY3VycjI7XG5cbiAgICAoX3N1YnNjcmlwdGlvblJlZiRjdXJyMiA9IHN1YnNjcmlwdGlvblJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfc3Vic2NyaXB0aW9uUmVmJGN1cnIyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3Vic2NyaXB0aW9uUmVmJGN1cnIyLmRpc3Bvc2UoKTtcblxuICAgIGlmIChrZWVwQ3VycmVudE1vZGVsKSB7XG4gICAgICBzYXZlVmlld1N0YXRlICYmIHZpZXdTdGF0ZXMuc2V0KHBhdGgsIGVkaXRvclJlZi5jdXJyZW50LnNhdmVWaWV3U3RhdGUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZWRpdG9yUmVmJGN1cnJlbnQkZ2UyO1xuXG4gICAgICAoX2VkaXRvclJlZiRjdXJyZW50JGdlMiA9IGVkaXRvclJlZi5jdXJyZW50LmdldE1vZGVsKCkpID09PSBudWxsIHx8IF9lZGl0b3JSZWYkY3VycmVudCRnZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lZGl0b3JSZWYkY3VycmVudCRnZTIuZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGVkaXRvclJlZi5jdXJyZW50LmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb25hY29Db250YWluZXIsIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgaXNFZGl0b3JSZWFkeTogaXNFZGl0b3JSZWFkeSxcbiAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgIF9yZWY6IGNvbnRhaW5lclJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICB3cmFwcGVyUHJvcHM6IHdyYXBwZXJQcm9wc1xuICB9KTtcbn1cblxuRWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0UGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdExhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyogPT09ICovXG4gIHRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsaW5lOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvdmVycmlkZVNlcnZpY2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzYXZlVmlld1N0YXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAga2VlcEN1cnJlbnRNb2RlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyogPT09ICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKiA9PT0gKi9cbiAgYmVmb3JlTW91bnQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblZhbGlkYXRlOiBQcm9wVHlwZXMuZnVuY1xufTtcbkVkaXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRoZW1lOiAnbGlnaHQnLFxuICBsb2FkaW5nOiAnTG9hZGluZy4uLicsXG4gIG9wdGlvbnM6IHt9LFxuICBvdmVycmlkZVNlcnZpY2VzOiB7fSxcbiAgc2F2ZVZpZXdTdGF0ZTogdHJ1ZSxcbiAga2VlcEN1cnJlbnRNb2RlbDogZmFsc2UsXG5cbiAgLyogPT09ICovXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3cmFwcGVyUHJvcHM6IHt9LFxuXG4gIC8qID09PSAqL1xuICBiZWZvcmVNb3VudDogbm9vcCxcbiAgb25Nb3VudDogbm9vcCxcbiAgb25WYWxpZGF0ZTogbm9vcFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9FZGl0b3IuanMnO1xuXG52YXIgaW5kZXggPSAvKiNfX1BVUkVfXyovbWVtbyhFZGl0b3IpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGxvYWRpbmdTdHlsZXMgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgaGVpZ2h0OiAnMTAwJScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn07XG5cbmZ1bmN0aW9uIExvYWRpbmcoe1xuICBjb250ZW50XG59KSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgc3R5bGU6IGxvYWRpbmdTdHlsZXNcbiAgfSwgY29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGV4dGVuZHMgYXMgX2V4dGVuZHMgfSBmcm9tICcuLi9fdmlydHVhbC9fcm9sbHVwUGx1Z2luQmFiZWxIZWxwZXJzLmpzJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcvTG9hZGluZy5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmpzJztcblxuLy8gb25lIG9mIHRoZSByZWFzb25zIHdoeSB3ZSB1c2UgYSBzZXBhcmF0ZSBwcm9wIGZvciBwYXNzaW5nIHJlZiBpbnN0ZWFkIG9mIHVzaW5nIGZvcndhcmRyZWZcblxuZnVuY3Rpb24gTW9uYWNvQ29udGFpbmVyKHtcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgaXNFZGl0b3JSZWFkeSxcbiAgbG9hZGluZyxcbiAgX3JlZixcbiAgY2xhc3NOYW1lLFxuICB3cmFwcGVyUHJvcHNcbn0pIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBfZXh0ZW5kcyh7XG4gICAgc3R5bGU6IHsgLi4uc3R5bGVzLndyYXBwZXIsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIH1cbiAgfSwgd3JhcHBlclByb3BzKSwgIWlzRWRpdG9yUmVhZHkgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywge1xuICAgIGNvbnRlbnQ6IGxvYWRpbmdcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICByZWY6IF9yZWYsXG4gICAgc3R5bGU6IHsgLi4uc3R5bGVzLmZ1bGxXaWR0aCxcbiAgICAgIC4uLighaXNFZGl0b3JSZWFkeSAmJiBzdHlsZXMuaGlkZSlcbiAgICB9LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0pKTtcbn1cblxuTW9uYWNvQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gIGlzRWRpdG9yUmVhZHk6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb25hY29Db250YWluZXI7XG4iLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vbmFjb0NvbnRhaW5lciQxIGZyb20gJy4vTW9uYWNvQ29udGFpbmVyLmpzJztcblxudmFyIE1vbmFjb0NvbnRhaW5lciA9IC8qI19fUFVSRV9fKi9tZW1vKE1vbmFjb0NvbnRhaW5lciQxKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9uYWNvQ29udGFpbmVyO1xuIiwiY29uc3Qgc3R5bGVzID0ge1xuICB3cmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHRBbGlnbjogJ2luaXRpYWwnXG4gIH0sXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgaGlkZToge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgeyBfZXh0ZW5kcyBhcyBleHRlbmRzIH07XG4iLCJpbXBvcnQgbG9hZGVyIGZyb20gJ0Btb25hY28tZWRpdG9yL2xvYWRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNb3VudCBmcm9tICcuLi91c2VNb3VudC9pbmRleC5qcyc7XG5cbmZ1bmN0aW9uIHVzZU1vbmFjbygpIHtcbiAgY29uc3QgW21vbmFjbywgc2V0TW9uYWNvXSA9IHVzZVN0YXRlKGxvYWRlci5fX2dldE1vbmFjb0luc3RhbmNlKCkpO1xuICB1c2VNb3VudCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGFibGU7XG5cbiAgICBpZiAoIW1vbmFjbykge1xuICAgICAgY2FuY2VsYWJsZSA9IGxvYWRlci5pbml0KCk7XG4gICAgICBjYW5jZWxhYmxlLnRoZW4obW9uYWNvID0+IHtcbiAgICAgICAgc2V0TW9uYWNvKG1vbmFjbyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdmFyIF9jYW5jZWxhYmxlO1xuXG4gICAgICByZXR1cm4gKF9jYW5jZWxhYmxlID0gY2FuY2VsYWJsZSkgPT09IG51bGwgfHwgX2NhbmNlbGFibGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jYW5jZWxhYmxlLmNhbmNlbCgpO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gbW9uYWNvO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNb25hY287XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZU1vdW50KGVmZmVjdCkge1xuICB1c2VFZmZlY3QoZWZmZWN0LCBbXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vdW50O1xuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVByZXZpb3VzO1xuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZVVwZGF0ZShlZmZlY3QsIGRlcHMsIGFwcGx5Q2hhbmdlcyA9IHRydWUpIHtcbiAgY29uc3QgaXNJbml0aWFsTW91bnQgPSB1c2VSZWYodHJ1ZSk7XG4gIHVzZUVmZmVjdChpc0luaXRpYWxNb3VudC5jdXJyZW50IHx8ICFhcHBseUNoYW5nZXMgPyAoKSA9PiB7XG4gICAgaXNJbml0aWFsTW91bnQuY3VycmVudCA9IGZhbHNlO1xuICB9IDogZWZmZWN0LCBkZXBzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVXBkYXRlO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBsb2FkZXIgfSBmcm9tICdAbW9uYWNvLWVkaXRvci9sb2FkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaWZmRWRpdG9yIH0gZnJvbSAnLi9EaWZmRWRpdG9yL2luZGV4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlTW9uYWNvIH0gZnJvbSAnLi9ob29rcy91c2VNb25hY28vaW5kZXguanMnO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRWRpdG9yL2luZGV4LmpzJztcbiIsImZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBnZXRPckNyZWF0ZU1vZGVsKG1vbmFjbywgdmFsdWUsIGxhbmd1YWdlLCBwYXRoKSB7XG4gIHJldHVybiBnZXRNb2RlbChtb25hY28sIHBhdGgpIHx8IGNyZWF0ZU1vZGVsKG1vbmFjbywgdmFsdWUsIGxhbmd1YWdlLCBwYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TW9kZWwobW9uYWNvLCBwYXRoKSB7XG4gIHJldHVybiBtb25hY28uZWRpdG9yLmdldE1vZGVsKGNyZWF0ZU1vZGVsVXJpKG1vbmFjbywgcGF0aCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RlbChtb25hY28sIHZhbHVlLCBsYW5ndWFnZSwgcGF0aCkge1xuICByZXR1cm4gbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh2YWx1ZSwgbGFuZ3VhZ2UsIHBhdGggJiYgY3JlYXRlTW9kZWxVcmkobW9uYWNvLCBwYXRoKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGVsVXJpKG1vbmFjbywgcGF0aCkge1xuICByZXR1cm4gbW9uYWNvLlVyaS5wYXJzZShwYXRoKTtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0ID09PSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCB7IGdldE9yQ3JlYXRlTW9kZWwsIGlzVW5kZWZpbmVkLCBub29wIH07XG4iLCJpbXBvcnQgTW9uYWNvRWRpdG9yLCB7IGxvYWRlciBhcyBtb25hY29FZGl0b3JMb2FkZXIsIHVzZU1vbmFjbyB9IGZyb20gJ0Btb25hY28tZWRpdG9yL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVRoZW1lMiB9IGZyb20gJy4uLy4uL3RoZW1lcyc7XG5cbmltcG9ydCBkZWZpbmVUaGVtZXMgZnJvbSAnLi90aGVtZSc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0TW9uYWNvRWRpdG9yUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxubGV0IGluaXRhbGl6ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGluaXRNb25hY28oKSB7XG4gIGlmIChpbml0YWxpemVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbW9uYWNvRWRpdG9yTG9hZGVyLmNvbmZpZyh7XG4gICAgcGF0aHM6IHtcbiAgICAgIHZzOiAod2luZG93Ll9fZ3JhZmFuYV9wdWJsaWNfcGF0aF9fID8/ICdwdWJsaWMvJykgKyAnbGliL21vbmFjby9taW4vdnMnLFxuICAgIH0sXG4gIH0pO1xuICBpbml0YWxpemVkID0gdHJ1ZTtcbiAgbW9uYWNvRWRpdG9yTG9hZGVyLmluaXQoKS50aGVuKChtb25hY28pID0+IHtcbiAgICAvLyB0aGlzIGNhbGwgbWFrZXMgc3VyZSB0aGUgdGhlbWVzIGV4aXN0LlxuICAgIC8vIHRoZXkgd2lsbCBub3QgaGF2ZSB0aGUgY29ycmVjdCBjb2xvcnMsXG4gICAgLy8gYnV0IHdlIG5lZWQgdGhlbSB0byBleGlzdCBzaW5jZSB0aGUgYmVnaW5uaW5nLFxuICAgIC8vIGJlY2F1c2UgaWYgd2Ugc3RhcnQgYSBtb25hY28gaW5zdGFuY2Ugd2l0aFxuICAgIC8vIGEgdGhlbWUgdGhhdCBkb2VzIG5vdCBleGlzdCwgaXQgd2lsbCBub3Qgd29yayB3ZWxsLlxuICAgIGRlZmluZVRoZW1lcyhtb25hY28pO1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IFJlYWN0TW9uYWNvRWRpdG9yID0gKHByb3BzOiBSZWFjdE1vbmFjb0VkaXRvclByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IG1vbmFjbyA9IHVzZU1vbmFjbygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbW9uYWNvIGNhbiBiZSBudWxsIGF0IHRoZSBiZWdpbm5pbmcsIGJlY2F1c2UgaXQgaXMgbG9hZGVkIGluIGFzeW5jaHJvbm91c2x5XG4gICAgaWYgKG1vbmFjbyAhPT0gbnVsbCkge1xuICAgICAgZGVmaW5lVGhlbWVzKG1vbmFjbywgdGhlbWUpO1xuICAgIH1cbiAgfSwgW21vbmFjbywgdGhlbWVdKTtcblxuICBpbml0TW9uYWNvKCk7XG5cbiAgY29uc3QgbW9uYWNvVGhlbWUgPSB0aGVtZS5pc0RhcmsgPyAnZ3JhZmFuYS1kYXJrJyA6ICdncmFmYW5hLWxpZ2h0JztcblxuICByZXR1cm4gPE1vbmFjb0VkaXRvciB0aGVtZT17bW9uYWNvVGhlbWV9IHsuLi5wcm9wc30gLz47XG59O1xuIiwiaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBNb25hY28sIG1vbmFjb1R5cGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmZ1bmN0aW9uIGdldENvbG9ycyh0aGVtZT86IEdyYWZhbmFUaGVtZTIpOiBtb25hY29UeXBlcy5lZGl0b3IuSUNvbG9ycyB7XG4gIGlmICh0aGVtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAnZWRpdG9yLmJhY2tncm91bmQnOiB0aGVtZS5jb21wb25lbnRzLmlucHV0LmJhY2tncm91bmQsXG4gICAgICAnbWluaW1hcC5iYWNrZ3JvdW5kJzogdGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5LFxuICAgIH07XG4gIH1cbn1cblxuLy8gd2Ugc3VwcG9ydCBjYWxsaW5nIHRoaXMgd2l0aG91dCBhIHRoZW1lLCBpdCB3aWxsIG1ha2Ugc3VyZSB0aGUgdGhlbWVzXG4vLyBhcmUgcmVnaXN0ZXJlZCBpbiBtb25hY28sIGV2ZW4gaWYgdGhlIGNvbG9ycyBhcmUgbm90IHBlcmZlY3QuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZpbmVUaGVtZXMobW9uYWNvOiBNb25hY28sIHRoZW1lPzogR3JhZmFuYVRoZW1lMikge1xuICAvLyBjb2xvciB0b2tlbnMgYXJlIGRlZmluZWQgaGVyZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3ZzY29kZS9ibG9iL21haW4vc3JjL3ZzL3BsYXRmb3JtL3RoZW1lL2NvbW1vbi9jb2xvclJlZ2lzdHJ5LnRzI0wxNzRcbiAgY29uc3QgY29sb3JzID0gZ2V0Q29sb3JzKHRoZW1lKTtcbiAgbW9uYWNvLmVkaXRvci5kZWZpbmVUaGVtZSgnZ3JhZmFuYS1kYXJrJywge1xuICAgIGJhc2U6ICd2cy1kYXJrJyxcbiAgICBpbmhlcml0OiB0cnVlLFxuICAgIGNvbG9yczogY29sb3JzLFxuICAgIC8vIGZhbGxiYWNrIHN5bnRheCBoaWdobGlnaHRpbmcgZm9yIGxhbmd1YWdlcyB0aGF0IG1pY3Jvc29mdCBkb2Vzbid0IGhhbmRsZSAoZXggY2xvdWR3YXRjaCdzIG1ldHJpYyBtYXRoKVxuICAgIHJ1bGVzOiBbXG4gICAgICB7IHRva2VuOiAncHJlZGVmaW5lZCcsIGZvcmVncm91bmQ6IHRoZW1lPy52aXN1YWxpemF0aW9uLmdldENvbG9yQnlOYW1lKCdwdXJwbGUnKSB9LFxuICAgICAgeyB0b2tlbjogJ29wZXJhdG9yJywgZm9yZWdyb3VuZDogdGhlbWU/LnZpc3VhbGl6YXRpb24uZ2V0Q29sb3JCeU5hbWUoJ29yYW5nZScpIH0sXG4gICAgICB7IHRva2VuOiAndGFnJywgZm9yZWdyb3VuZDogdGhlbWU/LnZpc3VhbGl6YXRpb24uZ2V0Q29sb3JCeU5hbWUoJ2dyZWVuJykgfSxcbiAgICBdLFxuICB9KTtcblxuICBtb25hY28uZWRpdG9yLmRlZmluZVRoZW1lKCdncmFmYW5hLWxpZ2h0Jywge1xuICAgIGJhc2U6ICd2cycsXG4gICAgaW5oZXJpdDogdHJ1ZSxcbiAgICBjb2xvcnM6IGNvbG9ycyxcbiAgICAvLyBmYWxsYmFjayBzeW50YXggaGlnaGxpZ2h0aW5nIGZvciBsYW5ndWFnZXMgdGhhdCBtaWNyb3NvZnQgZG9lc24ndCBoYW5kbGUgKGV4IGNsb3Vkd2F0Y2gncyBtZXRyaWMgbWF0aClcbiAgICBydWxlczogW1xuICAgICAgeyB0b2tlbjogJ3ByZWRlZmluZWQnLCBmb3JlZ3JvdW5kOiB0aGVtZT8udmlzdWFsaXphdGlvbi5nZXRDb2xvckJ5TmFtZSgncHVycGxlJykgfSxcbiAgICAgIHsgdG9rZW46ICdvcGVyYXRvcicsIGZvcmVncm91bmQ6IHRoZW1lPy52aXN1YWxpemF0aW9uLmdldENvbG9yQnlOYW1lKCdvcmFuZ2UnKSB9LFxuICAgICAgeyB0b2tlbjogJ3RhZycsIGZvcmVncm91bmQ6IHRoZW1lPy52aXN1YWxpemF0aW9uLmdldENvbG9yQnlOYW1lKCdncmVlbicpIH0sXG4gICAgXSxcbiAgfSk7XG59XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gZm5zLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uICh5LCBmKSB7XG4gICAgICByZXR1cm4gZih5KTtcbiAgICB9LCB4KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3VycnkoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLmxlbmd0aCA+PSBmbi5sZW5ndGggPyBmbi5hcHBseSh0aGlzLCBhcmdzKSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgbmV4dEFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgbmV4dEFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnJpZWQuYXBwbHkoX3RoaXMsIFtdLmNvbmNhdChhcmdzLCBuZXh0QXJncykpO1xuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKS5pbmNsdWRlcygnT2JqZWN0Jyk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoYW5nZXMoaW5pdGlhbCwgY2hhbmdlcykge1xuICBpZiAoIWlzT2JqZWN0KGNoYW5nZXMpKSBlcnJvckhhbmRsZXIoJ2NoYW5nZVR5cGUnKTtcbiAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLnNvbWUoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgcmV0dXJuICFoYXNPd25Qcm9wZXJ0eShpbml0aWFsLCBmaWVsZCk7XG4gIH0pKSBlcnJvckhhbmRsZXIoJ2NoYW5nZUZpZWxkJyk7XG4gIHJldHVybiBjaGFuZ2VzO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIGVycm9ySGFuZGxlcignc2VsZWN0b3JUeXBlJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSGFuZGxlcihoYW5kbGVyKSB7XG4gIGlmICghKGlzRnVuY3Rpb24oaGFuZGxlcikgfHwgaXNPYmplY3QoaGFuZGxlcikpKSBlcnJvckhhbmRsZXIoJ2hhbmRsZXJUeXBlJyk7XG4gIGlmIChpc09iamVjdChoYW5kbGVyKSAmJiBPYmplY3QudmFsdWVzKGhhbmRsZXIpLnNvbWUoZnVuY3Rpb24gKF9oYW5kbGVyKSB7XG4gICAgcmV0dXJuICFpc0Z1bmN0aW9uKF9oYW5kbGVyKTtcbiAgfSkpIGVycm9ySGFuZGxlcignaGFuZGxlcnNUeXBlJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW5pdGlhbChpbml0aWFsKSB7XG4gIGlmICghaW5pdGlhbCkgZXJyb3JIYW5kbGVyKCdpbml0aWFsSXNSZXF1aXJlZCcpO1xuICBpZiAoIWlzT2JqZWN0KGluaXRpYWwpKSBlcnJvckhhbmRsZXIoJ2luaXRpYWxUeXBlJyk7XG4gIGlmIChpc0VtcHR5KGluaXRpYWwpKSBlcnJvckhhbmRsZXIoJ2luaXRpYWxDb250ZW50Jyk7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IoZXJyb3JNZXNzYWdlcywgdHlwZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlc1t0eXBlXSB8fCBlcnJvck1lc3NhZ2VzW1wiZGVmYXVsdFwiXSk7XG59XG5cbnZhciBlcnJvck1lc3NhZ2VzID0ge1xuICBpbml0aWFsSXNSZXF1aXJlZDogJ2luaXRpYWwgc3RhdGUgaXMgcmVxdWlyZWQnLFxuICBpbml0aWFsVHlwZTogJ2luaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGFuIG9iamVjdCcsXG4gIGluaXRpYWxDb250ZW50OiAnaW5pdGlhbCBzdGF0ZSBzaG91bGRuXFwndCBiZSBhbiBlbXB0eSBvYmplY3QnLFxuICBoYW5kbGVyVHlwZTogJ2hhbmRsZXIgc2hvdWxkIGJlIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uJyxcbiAgaGFuZGxlcnNUeXBlOiAnYWxsIGhhbmRsZXJzIHNob3VsZCBiZSBhIGZ1bmN0aW9ucycsXG4gIHNlbGVjdG9yVHlwZTogJ3NlbGVjdG9yIHNob3VsZCBiZSBhIGZ1bmN0aW9uJyxcbiAgY2hhbmdlVHlwZTogJ3Byb3ZpZGVkIHZhbHVlIG9mIGNoYW5nZXMgc2hvdWxkIGJlIGFuIG9iamVjdCcsXG4gIGNoYW5nZUZpZWxkOiAnaXQgc2VhbXMgeW91IHdhbnQgdG8gY2hhbmdlIGEgZmllbGQgaW4gdGhlIHN0YXRlIHdoaWNoIGlzIG5vdCBzcGVjaWZpZWQgaW4gdGhlIFwiaW5pdGlhbFwiIHN0YXRlJyxcbiAgXCJkZWZhdWx0XCI6ICdhbiB1bmtub3duIGVycm9yIGFjY3VyZWQgaW4gYHN0YXRlLWxvY2FsYCBwYWNrYWdlJ1xufTtcbnZhciBlcnJvckhhbmRsZXIgPSBjdXJyeSh0aHJvd0Vycm9yKShlcnJvck1lc3NhZ2VzKTtcbnZhciB2YWxpZGF0b3JzID0ge1xuICBjaGFuZ2VzOiB2YWxpZGF0ZUNoYW5nZXMsXG4gIHNlbGVjdG9yOiB2YWxpZGF0ZVNlbGVjdG9yLFxuICBoYW5kbGVyOiB2YWxpZGF0ZUhhbmRsZXIsXG4gIGluaXRpYWw6IHZhbGlkYXRlSW5pdGlhbFxufTtcblxuZnVuY3Rpb24gY3JlYXRlKGluaXRpYWwpIHtcbiAgdmFyIGhhbmRsZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YWxpZGF0b3JzLmluaXRpYWwoaW5pdGlhbCk7XG4gIHZhbGlkYXRvcnMuaGFuZGxlcihoYW5kbGVyKTtcbiAgdmFyIHN0YXRlID0ge1xuICAgIGN1cnJlbnQ6IGluaXRpYWxcbiAgfTtcbiAgdmFyIGRpZFVwZGF0ZSA9IGN1cnJ5KGRpZFN0YXRlVXBkYXRlKShzdGF0ZSwgaGFuZGxlcik7XG4gIHZhciB1cGRhdGUgPSBjdXJyeSh1cGRhdGVTdGF0ZSkoc3RhdGUpO1xuICB2YXIgdmFsaWRhdGUgPSBjdXJyeSh2YWxpZGF0b3JzLmNoYW5nZXMpKGluaXRpYWwpO1xuICB2YXIgZ2V0Q2hhbmdlcyA9IGN1cnJ5KGV4dHJhY3RDaGFuZ2VzKShzdGF0ZSk7XG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuICAgIHZhbGlkYXRvcnMuc2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHJldHVybiBzZWxlY3RvcihzdGF0ZS5jdXJyZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKGNhdXNlZENoYW5nZXMpIHtcbiAgICBjb21wb3NlKGRpZFVwZGF0ZSwgdXBkYXRlLCB2YWxpZGF0ZSwgZ2V0Q2hhbmdlcykoY2F1c2VkQ2hhbmdlcyk7XG4gIH1cblxuICByZXR1cm4gW2dldFN0YXRlLCBzZXRTdGF0ZV07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RDaGFuZ2VzKHN0YXRlLCBjYXVzZWRDaGFuZ2VzKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKGNhdXNlZENoYW5nZXMpID8gY2F1c2VkQ2hhbmdlcyhzdGF0ZS5jdXJyZW50KSA6IGNhdXNlZENoYW5nZXM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHN0YXRlLCBjaGFuZ2VzKSB7XG4gIHN0YXRlLmN1cnJlbnQgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgc3RhdGUuY3VycmVudCksIGNoYW5nZXMpO1xuICByZXR1cm4gY2hhbmdlcztcbn1cblxuZnVuY3Rpb24gZGlkU3RhdGVVcGRhdGUoc3RhdGUsIGhhbmRsZXIsIGNoYW5nZXMpIHtcbiAgaXNGdW5jdGlvbihoYW5kbGVyKSA/IGhhbmRsZXIoc3RhdGUuY3VycmVudCkgOiBPYmplY3Qua2V5cyhjaGFuZ2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgIHZhciBfaGFuZGxlciRmaWVsZDtcblxuICAgIHJldHVybiAoX2hhbmRsZXIkZmllbGQgPSBoYW5kbGVyW2ZpZWxkXSkgPT09IG51bGwgfHwgX2hhbmRsZXIkZmllbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oYW5kbGVyJGZpZWxkLmNhbGwoaGFuZGxlciwgc3RhdGUuY3VycmVudFtmaWVsZF0pO1xuICB9KTtcbiAgcmV0dXJuIGNoYW5nZXM7XG59XG5cbnZhciBpbmRleCA9IHtcbiAgY3JlYXRlOiBjcmVhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sIm5hbWVzIjpbIk1vbmFjb0VkaXRvciIsImxvYWRlciIsIm1vbmFjb0VkaXRvckxvYWRlciIsInVzZU1vbmFjbyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlVGhlbWUyIiwiZGVmaW5lVGhlbWVzIiwiaW5pdGFsaXplZCIsImluaXRNb25hY28iLCJjb25maWciLCJwYXRocyIsInZzIiwid2luZG93IiwiX19ncmFmYW5hX3B1YmxpY19wYXRoX18iLCJpbml0IiwidGhlbiIsIm1vbmFjbyIsIlJlYWN0TW9uYWNvRWRpdG9yIiwicHJvcHMiLCJ0aGVtZSIsIm1vbmFjb1RoZW1lIiwiaXNEYXJrIiwiZ2V0Q29sb3JzIiwidW5kZWZpbmVkIiwiY29tcG9uZW50cyIsImlucHV0IiwiYmFja2dyb3VuZCIsImNvbG9ycyIsInNlY29uZGFyeSIsImVkaXRvciIsImRlZmluZVRoZW1lIiwiYmFzZSIsImluaGVyaXQiLCJydWxlcyIsInRva2VuIiwiZm9yZWdyb3VuZCIsInZpc3VhbGl6YXRpb24iLCJnZXRDb2xvckJ5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=