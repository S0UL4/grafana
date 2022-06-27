"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["graphitePlugin"],{

/***/ "./public/app/core/utils/version.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SemVersion": () => (/* binding */ SemVersion),
/* harmony export */   "isVersionGtOrEq": () => (/* binding */ isVersionGtOrEq)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const versionPattern = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z\.]+))?/;
class SemVersion {
  constructor(version) {
    _defineProperty(this, "major", void 0);

    _defineProperty(this, "minor", void 0);

    _defineProperty(this, "patch", void 0);

    _defineProperty(this, "meta", void 0);

    this.major = 0;
    this.minor = 0;
    this.patch = 0;
    this.meta = '';
    const match = versionPattern.exec(version);

    if (match) {
      this.major = Number(match[1]);
      this.minor = Number(match[2] || 0);
      this.patch = Number(match[3] || 0);
      this.meta = match[4];
    }
  }

  isGtOrEq(version) {
    const compared = new SemVersion(version);

    for (let i = 0; i < this.comparable.length; ++i) {
      if (this.comparable[i] > compared.comparable[i]) {
        return true;
      }

      if (this.comparable[i] < compared.comparable[i]) {
        return false;
      }
    }

    return true;
  }

  isValid() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(this.major);
  }

  get comparable() {
    return [this.major, this.minor, this.patch];
  }

}
function isVersionGtOrEq(a, b) {
  const aSemver = new SemVersion(a);
  return aSemver.isGtOrEq(b);
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/AddGraphiteFunction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddGraphiteFunction": () => (/* binding */ AddGraphiteFunction)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function AddGraphiteFunction({
  funcDefs
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.mapFuncDefsToSelectables)(funcDefs), [funcDefs]); // Note: actions.addFunction will add a component that will have a dropdown or input in auto-focus
  // (the first param of the function). This auto-focus will cause onBlur() on AddGraphiteFunction's
  // Segment component and trigger onChange once again. (why? we call onChange if the user dismissed
  // the dropdown, see: SegmentSelect.onCloseMenu for more details). To avoid it we need to wait for
  // the Segment to disappear first (hence useEffect) and then dispatch the action that will add new
  // components.

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if ((value === null || value === void 0 ? void 0 : value.value) !== undefined) {
      dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.addFunction({
        name: value.value
      }));
      setValue(undefined);
    }
  }, [value, dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    Component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      icon: "plus",
      variant: "secondary",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.button),
      "aria-label": "Add new function"
    }),
    options: options,
    onChange: setValue,
    inputMinWidth: 150
  });
}

function getStyles(theme) {
  return {
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionEditor": () => (/* binding */ FunctionEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _FunctionEditorControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionEditorControls.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _TooltipContent, _span;

const _excluded = ["onMoveLeft", "onMoveRight", "func"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const getStyles = theme => {
  return {
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing(0.5)};
    `,
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.bodySmall.fontSize,
      // to match .gf-form-label
      cursor: 'pointer',
      display: 'inline-block'
    })
  };
};

const FunctionEditor = _ref => {
  let {
    onMoveLeft,
    onMoveRight,
    func
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  const renderContent = ({
    updatePopperPosition
  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_FunctionEditorControls__WEBPACK_IMPORTED_MODULE_3__.FunctionEditorControls, Object.assign({}, props, {
    func: func,
    onMoveLeft: () => {
      onMoveLeft(func);
      updatePopperPosition();
    },
    onMoveRight: () => {
      onMoveRight(func);
      updatePopperPosition();
    }
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [func.def.unknown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      content: _TooltipContent || (_TooltipContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TooltipContent, {})),
      placement: "bottom",
      interactive: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        "data-testid": "warning-icon",
        name: "exclamation-triangle",
        size: "xs",
        className: styles.icon
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      content: renderContent,
      placement: "top",
      interactive: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: styles.label,
        children: func.def.name
      })
    })]
  });
};

const TooltipContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(() => {
  return _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
    children: ["This function is not supported. Check your function for typos and", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      target: "_blank",
      className: "external-link",
      rel: "noreferrer noopener",
      href: "https://graphite.readthedocs.io/en/latest/functions.html",
      children: "read the docs"
    }), ' ', "to see whether you need to upgrade your data source\u2019s version to make this function available."]
  }));
});
TooltipContent.displayName = 'FunctionEditorTooltipContent';


/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionEditorControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionEditorControls": () => (/* binding */ FunctionEditorControls)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;





const FunctionDescription = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(async () => {
  // @ts-ignore
  const {
    default: rst2html
  } = await __webpack_require__.e(/* import() | rst2html */ "rst2html").then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/rst2html-https-e87da7ea2f-63d5ff3068.zip/node_modules/rst2html/dist/rst2html.min.js", 23));
  return {
    default(props) {
      var _props$description;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: rst2html((_props$description = props.description) !== null && _props$description !== void 0 ? _props$description : '')
        }
      });
    }

  };
});

const FunctionHelpButton = props => {
  if (props.description) {
    let tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        children: "Loading description..."
      })),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FunctionDescription, {
        description: props.description
      })
    });

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      content: tooltip,
      placement: 'bottom-end',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        className: props.description ? undefined : 'pointer',
        name: "question-circle"
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    className: "pointer",
    name: "question-circle",
    onClick: () => {
      window.open('http://graphite.readthedocs.org/en/latest/functions.html#graphite.render.functions.' + props.name, '_blank');
    }
  });
};

const FunctionEditorControls = props => {
  const {
    func,
    onMoveLeft,
    onMoveRight,
    onRemove
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      display: 'flex',
      width: '60px',
      justifyContent: 'space-between'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "arrow-left",
      onClick: () => onMoveLeft(func)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FunctionHelpButton, {
      name: func.def.name,
      description: func.def.description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "times",
      onClick: () => onRemove(func)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "arrow-right",
      onClick: () => onMoveRight(func)
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionParamEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionParamEditor": () => (/* binding */ FunctionParamEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





/**
 * Render a function parameter with a segment dropdown for multiple options or simple input.
 */
function FunctionParamEditor({
  editableParam,
  onChange,
  onExpandedChange,
  autofocus
}) {
  var _editableParam$option;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (((_editableParam$option = editableParam.options) === null || _editableParam$option === void 0 ? void 0 : _editableParam$option.length) > 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      autofocus: autofocus,
      value: editableParam.value,
      inputPlaceholder: editableParam.name,
      className: styles.segment,
      options: editableParam.options,
      placeholder: ' +' + editableParam.name,
      onChange: value => {
        onChange(value.value || '');
      },
      onExpandedChange: onExpandedChange,
      inputMinWidth: 150,
      allowCustomValue: true,
      allowEmptyValue: true
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentInput, {
      autofocus: autofocus,
      className: styles.input,
      value: editableParam.value || '',
      placeholder: ' +' + editableParam.name,
      inputPlaceholder: editableParam.name,
      onChange: value => {
        onChange(value.toString());
      },
      onExpandedChange: onExpandedChange // input style
      ,
      style: {
        height: '25px',
        paddingTop: '2px',
        marginTop: '2px',
        paddingLeft: '4px',
        minWidth: '100px'
      }
    });
  }
}

const getStyles = theme => ({
  segment: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    margin: 0,
    padding: 0
  }),
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: 0;
    padding: 0;
    input {
      height: 25px;
    },
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/FunctionsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionsSection": () => (/* binding */ FunctionsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AddGraphiteFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/AddGraphiteFunction.tsx");
/* harmony import */ var _GraphiteFunctionEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteFunctionEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function FunctionsSection({
  functions = [],
  funcDefs
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentSection, {
    label: "Functions",
    fill: true,
    children: [functions.map((func, index) => {
      return !func.hidden && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GraphiteFunctionEditor__WEBPACK_IMPORTED_MODULE_3__.GraphiteFunctionEditor, {
        func: func
      }, index);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AddGraphiteFunction__WEBPACK_IMPORTED_MODULE_2__.AddGraphiteFunction, {
      funcDefs: funcDefs
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteFunctionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteFunctionEditor": () => (/* binding */ GraphiteFunctionEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _FunctionEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionEditor.tsx");
/* harmony import */ var _FunctionParamEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionParamEditor.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











/**
 * Allows editing function params and removing/moving a function (note: editing function name is not supported)
 */
function GraphiteFunctionEditor({
  func
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles); // keep track of mouse over and isExpanded state to display buttons for adding optional/multiple params
  // only when the user mouse over over the function editor OR any param editor is expanded.

  const [mouseOver, setIsMouseOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [expanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  let params = (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.mapFuncInstanceToParams)(func);
  params = params.filter((p, index) => {
    // func.added is set for newly added functions - see autofocus below
    return index < func.def.params.length && !p.optional || func.added || p.value || expanded || mouseOver;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, {
      [styles.error]: func.def.unknown
    }),
    onMouseOver: () => setIsMouseOver(true),
    onMouseLeave: () => setIsMouseOver(false),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      spacing: "none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FunctionEditor__WEBPACK_IMPORTED_MODULE_5__.FunctionEditor, {
        func: func,
        onMoveLeft: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.moveFunction({
            func,
            offset: -1
          }));
        },
        onMoveRight: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.moveFunction({
            func,
            offset: 1
          }));
        },
        onRemove: () => {
          dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.removeFunction({
            func
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
        className: styles.label,
        children: "("
      }), params.map((editableParam, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FunctionParamEditor__WEBPACK_IMPORTED_MODULE_6__.FunctionParamEditor, {
            autofocus: index === 0 && func.added,
            editableParam: editableParam,
            onChange: value => {
              if (value !== '' || editableParam.optional) {
                dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.updateFunctionParam({
                  func,
                  index,
                  value
                }));
              }

              setIsExpanded(false);
              setIsMouseOver(false);
            },
            onExpandedChange: setIsExpanded
          }), index !== params.length - 1 ? ',' : '']
        }, index);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
        className: styles.label,
        children: ")"
      })]
    })
  });
}

const getStyles = theme => ({
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.shape.borderRadius(),
    marginRight: theme.spacing(0.5),
    padding: `0 ${theme.spacing(1)}`,
    height: `${theme.v1.spacing.formInputHeight}px`
  }),
  error: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    border: 1px solid ${theme.colors.error.main};
  `,
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: 0,
    margin: 0
  }),
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: theme.spacing(0.5)
  })
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteQueryEditor": () => (/* binding */ GraphiteQueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _FunctionsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/FunctionsSection.tsx");
/* harmony import */ var _GraphiteTextEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteTextEditor.tsx");
/* harmony import */ var _SeriesSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/SeriesSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _GraphiteQueryEditorC;












function GraphiteQueryEditor({
  datasource,
  onRunQuery,
  onChange,
  query,
  range,
  queries
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_state_context__WEBPACK_IMPORTED_MODULE_4__.GraphiteQueryEditorContext, {
    datasource: datasource,
    onRunQuery: onRunQuery,
    onChange: onChange,
    query: query,
    queries: queries,
    range: range,
    children: _GraphiteQueryEditorC || (_GraphiteQueryEditorC = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(GraphiteQueryEditorContent, {}))
  });
}

function GraphiteQueryEditorContent() {
  var _state$target, _state$target2, _state$queryModel;

  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const state = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useGraphiteState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: styles.visualEditor,
      children: [((_state$target = state.target) === null || _state$target === void 0 ? void 0 : _state$target.textEditor) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_GraphiteTextEditor__WEBPACK_IMPORTED_MODULE_6__.GraphiteTextEditor, {
        rawQuery: state.target.target
      }), !((_state$target2 = state.target) !== null && _state$target2 !== void 0 && _state$target2.textEditor) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_SeriesSection__WEBPACK_IMPORTED_MODULE_7__.SeriesSection, {
          state: state
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FunctionsSection__WEBPACK_IMPORTED_MODULE_5__.FunctionsSection, {
          functions: (_state$queryModel = state.queryModel) === null || _state$queryModel === void 0 ? void 0 : _state$queryModel.functions,
          funcDefs: state.funcDefs
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: styles.toggleButton,
      icon: "pen",
      variant: "secondary",
      "aria-label": "Toggle editor mode",
      onClick: () => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.toggleEditorMode());
      }
    })]
  });
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
    `,
    visualEditor: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
    `,
    toggleButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/GraphiteTextEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteTextEditor": () => (/* binding */ GraphiteTextEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function GraphiteTextEditor({
  rawQuery
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const updateQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(query => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.updateQuery({
      query
    }));
  }, [dispatch]);
  const runQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.runQuery());
  }, [dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.QueryField, {
    query: rawQuery,
    onChange: updateQuery,
    onBlur: runQuery,
    onRunQuery: runQuery,
    placeholder: 'Enter a Graphite query (run with Shift+Enter)',
    portalOrigin: "graphite"
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricSegment.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricSegment": () => (/* binding */ MetricSegment)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








/**
 * Represents a single metric node in the metric path at the given index. Allows to change the metric name to one of the
 * provided options or a custom value.
 *
 * Options for tag names and metric names are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 *
 * getAltSegmentsSelectables() also returns list of tags for segment with index=0. Once a tag is selected the editor
 * enters tag-adding mode (see SeriesSection and GraphiteQueryModel.seriesByTagUsed).
 */
function MetricSegment({
  metricIndex,
  segment,
  state
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_5__.getAltSegmentsSelectables)(state, metricIndex, value || '');
  }, [state, metricIndex]);
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(loadOptions, 200, {
    leading: true
  }), [loadOptions]);
  const onSegmentChanged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(selectableValue => {
    // selectableValue.value is always defined because emptyValues are not allowed in SegmentAsync by default
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.segmentValueChanged({
      segment: selectableValue.value,
      index: metricIndex
    }));
  }, [dispatch, metricIndex]); // segmentValueChanged action will destroy SegmentAsync immediately if a tag is selected. To give time
  // for the clean up the action is debounced.

  const onSegmentChangedDebounced = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(onSegmentChanged, 100), [onSegmentChanged]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentAsync, {
    value: segment.value,
    inputMinWidth: 150,
    allowCustomValue: true,
    loadOptions: debouncedLoadOptions,
    reloadOptionsOnChange: true,
    onChange: onSegmentChangedDebounced
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricTankMetaInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricTankMetaInspector": () => (/* binding */ MetricTankMetaInspector)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/meta.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2, _p3, _div, _h;









class MetricTankMetaInspector extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  renderMeta(meta, key) {
    var _meta$consolidatorNo;

    const styles = getStyles();
    const buckets = (0,_meta__WEBPACK_IMPORTED_MODULE_5__.parseSchemaRetentions)(meta['schema-retentions']);
    const rollupNotice = (0,_meta__WEBPACK_IMPORTED_MODULE_5__.getRollupNotice)([meta]);
    const runtimeNotice = (0,_meta__WEBPACK_IMPORTED_MODULE_5__.getRuntimeConsolidationNotice)([meta]);
    const normFunc = ((_meta$consolidatorNo = meta['consolidator-normfetch']) !== null && _meta$consolidatorNo !== void 0 ? _meta$consolidatorNo : '').replace('Consolidator', '');
    const totalSeconds = buckets.reduce((acc, bucket) => acc + (bucket.retention ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(bucket.retention) : 0), 0);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.metaItem,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.metaItemHeader,
        children: ["Schema: ", meta['schema-name'], /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "small muted",
          children: ["Series count: ", meta.count]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.metaItemBody,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 1: Fetch"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepDescription,
            children: "First data is fetched, either from raw data archive or a rollup archive"
          }), rollupNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: rollupNotice.text
          }), !rollupNotice && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: "No rollup archive was used"
          }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            children: buckets.map((bucket, index) => {
              const bucketLength = bucket.retention ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(bucket.retention) : 0;
              const lengthPercent = bucketLength / totalSeconds * 100;
              const isActive = index === meta['archive-read'];
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: styles.bucket,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: styles.bucketInterval,
                  children: bucket.interval
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bucketRetention, {
                    [styles.bucketRetentionActive]: isActive
                  }),
                  style: {
                    flexGrow: lengthPercent
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  style: {
                    flexGrow: 100 - lengthPercent
                  },
                  children: bucket.retention
                })]
              }, bucket.retention);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 2: Normalization"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepDescription,
            children: "Normalization happens when series with different intervals between points are combined."
          }), meta['aggnum-norm'] > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            children: ["Normalization did occur using ", normFunc]
          }), meta['aggnum-norm'] === 1 && (_p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: "No normalization was needed"
          })))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 3: Runtime consolidation"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.stepDescription,
            children: "If there are too many data points at this point Metrictank will consolidate them down to below max data points (set in queries tab)."
          }), runtimeNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: runtimeNotice.text
          }), !runtimeNotice && (_p3 || (_p3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: "No runtime consolidation"
          })))]
        })]
      })]
    }, key);
  }

  render() {
    const {
      data
    } = this.props; // away to dedupe them

    const seriesMetas = {};

    for (const series of data) {
      if (series.meta && series.meta.custom) {
        for (const metaItem of series.meta.custom.seriesMetaList) {
          // key is to dedupe as many series will have identitical meta
          const key = `${JSON.stringify(metaItem)}`;

          if (seriesMetas[key]) {
            seriesMetas[key].count += metaItem.count;
          } else {
            seriesMetas[key] = metaItem;
          }
        }
      }
    }

    if (Object.keys(seriesMetas).length === 0) {
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "No response meta data"
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        className: "page-heading",
        children: "Metrictank Lineage"
      })), Object.keys(seriesMetas).map(key => this.renderMeta(seriesMetas[key], key))]
    });
  }

}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(() => {
  const {
    theme
  } = app_core_config__WEBPACK_IMPORTED_MODULE_4__.config;
  const borderColor = theme.isDark ? theme.palette.gray25 : theme.palette.gray85;
  const background = theme.isDark ? theme.palette.dark1 : theme.palette.white;
  const headerBg = theme.isDark ? theme.palette.gray15 : theme.palette.gray85;
  return {
    metaItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${background};
      border: 1px solid ${borderColor};
      margin-bottom: ${theme.spacing.md};
    `,
    metaItemHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${headerBg};
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: ${theme.typography.size.md};
      display: flex;
      justify-content: space-between;
    `,
    metaItemBody: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing.md};
    `,
    stepHeading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.md};
    `,
    stepDescription: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.textWeak};
      margin-bottom: ${theme.spacing.sm};
    `,
    step: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.lg};

      &:last-child {
        margin-bottom: 0;
      }
    `,
    bucket: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin-bottom: ${theme.spacing.sm};
      border-radius: ${theme.border.radius.md};
    `,
    bucketInterval: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 0;
      width: 60px;
    `,
    bucketRetention: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: linear-gradient(0deg, ${theme.palette.blue85}, ${theme.palette.blue95});
      text-align: center;
      color: ${theme.palette.white};
      margin-right: ${theme.spacing.md};
      border-radius: ${theme.border.radius.md};
    `,
    bucketRetentionActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: linear-gradient(0deg, ${theme.palette.greenBase}, ${theme.palette.greenShade});
    `
  };
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/MetricsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsSection": () => (/* binding */ MetricsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _MetricSegment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricSegment.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function MetricsSection({
  segments = [],
  state
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: segments.map((segment, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MetricSegment__WEBPACK_IMPORTED_MODULE_1__.MetricSegment, {
        segment: segment,
        metricIndex: index,
        state: state
      }, index);
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/PlayButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayButton": () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PlayButton() {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_2__.actions.unpause());
  }, [dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "play",
    onClick: onClick,
    type: "button",
    variant: "secondary",
    "aria-label": "Unpause query"
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/SeriesSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesSection": () => (/* binding */ SeriesSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _MetricsSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricsSection.tsx");
/* harmony import */ var _TagsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/TagsSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function SeriesSection({
  state
}) {
  var _state$queryModel, _state$queryModel2;

  const sectionContent = (_state$queryModel = state.queryModel) !== null && _state$queryModel !== void 0 && _state$queryModel.seriesByTagUsed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TagsSection__WEBPACK_IMPORTED_MODULE_3__.TagsSection, {
    tags: (_state$queryModel2 = state.queryModel) === null || _state$queryModel2 === void 0 ? void 0 : _state$queryModel2.tags,
    state: state
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MetricsSection__WEBPACK_IMPORTED_MODULE_2__.MetricsSection, {
    segments: state.segments,
    state: state
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SegmentSection, {
    label: "Series",
    fill: true,
    children: sectionContent
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/TagEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagEditor": () => (/* binding */ TagEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










/**
 * Editor for a tag at given index. Allows changing the name of the tag, operator or value. Tag names are provided with
 * getTagsSelectables and contain only valid tags (it may depend on currently used tags). The dropdown for tag names is
 * also used for removing tag (with a special "--remove tag--" option provided by getTagsSelectables).
 *
 * Options for tag names and values are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 */
function TagEditor({
  tag,
  tagIndex,
  state
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const getTagsOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(inputValue => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_5__.getTagsSelectables)(state, tagIndex, inputValue || '');
  }, [state, tagIndex]);
  const debouncedGetTagsOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(getTagsOptions, 200, {
    leading: true
  }), [getTagsOptions]);
  const getTagValueOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(inputValue => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_5__.getTagValuesSelectables)(state, tag, tagIndex, inputValue || '');
  }, [state, tagIndex, tag]);
  const debouncedGetTagValueOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(getTagValueOptions, 200, {
    leading: true
  }), [getTagValueOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentAsync, {
      inputMinWidth: 150,
      value: tag.key,
      loadOptions: debouncedGetTagsOptions,
      reloadOptionsOnChange: true,
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.tagChanged({
          tag: Object.assign({}, tag, {
            key: value.value
          }),
          index: tagIndex
        }));
      },
      allowCustomValue: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      inputMinWidth: 50,
      value: tag.operator,
      options: (0,_state_providers__WEBPACK_IMPORTED_MODULE_5__.getTagOperatorsSelectables)(),
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.tagChanged({
          tag: Object.assign({}, tag, {
            operator: value.value
          }),
          index: tagIndex
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentAsync, {
      inputMinWidth: 150,
      value: tag.value,
      loadOptions: debouncedGetTagValueOptions,
      reloadOptionsOnChange: true,
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_3__.actions.tagChanged({
          tag: Object.assign({}, tag, {
            value: value.value
          }),
          index: tagIndex
        }));
      },
      allowCustomValue: true
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/TagsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsSection": () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/context.tsx");
/* harmony import */ var _state_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/providers.ts");
/* harmony import */ var _PlayButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/PlayButton.tsx");
/* harmony import */ var _TagEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/TagEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _PlayButton;














/**
 * Renders all tags and a button allowing to add more tags.
 *
 * Options for tag names are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 */
function TagsSection({
  tags,
  state
}) {
  const dispatch = (0,_state_context__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles); // Options are reloaded while user is typing with backend taking care of auto-complete (auto-complete cannot be
  // implemented in front-end because backend returns only limited number of entries)

  const getTagsAsSegmentsOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(inputValue => {
    return (0,_state_providers__WEBPACK_IMPORTED_MODULE_6__.getTagsAsSegmentsSelectables)(state, inputValue || '');
  }, [state]);
  const debouncedGetTagsAsSegments = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(getTagsAsSegmentsOptions, 200, {
    leading: true
  }), [getTagsAsSegmentsOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [tags.map((tag, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TagEditor__WEBPACK_IMPORTED_MODULE_8__.TagEditor, {
        tagIndex: index,
        tag: tag,
        state: state
      }, index);
    }), tags.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentAsync, {
      inputMinWidth: 150,
      onChange: value => {
        dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__.actions.addNewTag({
          segment: value.value
        }));
      },
      loadOptions: debouncedGetTagsAsSegments,
      reloadOptionsOnChange: true,
      Component: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: "plus",
        variant: "secondary",
        className: styles.button,
        "aria-label": "Add new tag"
      })
    }), state.paused && (_PlayButton || (_PlayButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PlayButton__WEBPACK_IMPORTED_MODULE_7__.PlayButton, {})))]
  });
}

function getStyles(theme) {
  return {
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/components/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapFuncDefsToSelectables": () => (/* binding */ mapFuncDefsToSelectables),
/* harmony export */   "mapFuncInstanceToParams": () => (/* binding */ mapFuncInstanceToParams),
/* harmony export */   "mapSegmentsToSelectables": () => (/* binding */ mapSegmentsToSelectables),
/* harmony export */   "mapStringsToSelectables": () => (/* binding */ mapStringsToSelectables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function mapStringsToSelectables(values) {
  return values.map(value => ({
    value,
    label: value
  }));
}
function mapSegmentsToSelectables(segments) {
  return segments.map(segment => ({
    label: segment.value,
    value: segment
  }));
}
function mapFuncDefsToSelectables(funcDefs) {
  const categories = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(funcDefs, funcDef => {
    if (!funcDef.category) {
      return;
    }

    if (!categories[funcDef.category]) {
      categories[funcDef.category] = {
        label: funcDef.category,
        value: funcDef.category,
        options: []
      };
    }

    categories[funcDef.category].options.push({
      label: funcDef.name,
      value: funcDef.name
    });
  });
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.sortBy)(categories, 'label');
}

function createEditableParam(paramDef, additional, value) {
  var _paramDef$options$map, _paramDef$options;

  return {
    name: paramDef.name,
    value: (value === null || value === void 0 ? void 0 : value.toString()) || '',
    optional: !!paramDef.optional || additional,
    // only first param is required when multiple are allowed
    multiple: !!paramDef.multiple,
    options: (_paramDef$options$map = (_paramDef$options = paramDef.options) === null || _paramDef$options === void 0 ? void 0 : _paramDef$options.map(option => ({
      value: option.toString(),
      label: option.toString()
    }))) !== null && _paramDef$options$map !== void 0 ? _paramDef$options$map : []
  };
}
/**
 * Create a list of params that can be edited in the function editor.
 */


function mapFuncInstanceToParams(func) {
  var _params;

  // list of required parameters (from func.def)
  const params = func.def.params.map((paramDef, index) => createEditableParam(paramDef, false, func.params[index])); // list of additional (multiple or optional) params entered by the user

  while (params.length < func.params.length) {
    const paramDef = func.def.params[func.def.params.length - 1];
    const value = func.params[params.length];
    params.push(createEditableParam(paramDef, true, value));
  } // extra "fake" param to allow adding more multiple values at the end


  if (params.length && params[params.length - 1].value && (_params = params[params.length - 1]) !== null && _params !== void 0 && _params.multiple) {
    const paramDef = func.def.params[func.def.params.length - 1];
    params.push(createEditableParam(paramDef, true, ''));
  }

  return params;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor),
/* harmony export */   "SHOW_MAPPINGS_HELP_KEY": () => (/* binding */ SHOW_MAPPINGS_HELP_KEY)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/versions.ts");
/* harmony import */ var _MappingsConfiguration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/MappingsConfiguration.tsx");
/* harmony import */ var _parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/parseLokiLabelMappings.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _Alert, _h, _InlineFormLabel;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const {
  Select,
  Switch
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;
const SHOW_MAPPINGS_HELP_KEY = 'grafana.datasources.graphite.config.showMappingsHelp';
const graphiteVersions = _versions__WEBPACK_IMPORTED_MODULE_5__.GRAPHITE_VERSIONS.map(version => ({
  label: `${version}.x`,
  value: version
}));
const graphiteTypes = Object.entries(_types__WEBPACK_IMPORTED_MODULE_4__.GraphiteType).map(([label, value]) => ({
  label,
  value
}));
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderTypeHelp", () => {
      return _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
        children: ["There are different types of Graphite compatible backends. Here you can specify the type you are using. If you are using", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
          href: "https://github.com/grafana/metrictank",
          className: "pointer",
          target: "_blank",
          rel: "noreferrer",
          children: "Metrictank"
        }), ' ', "then select that here. This will enable Metrictank specific features like query processing meta data. Metrictank is a multi-tenant timeseries engine for Graphite and friends."]
      }));
    });

    this.state = {
      showMappingsHelp: app_core_store__WEBPACK_IMPORTED_MODULE_3__["default"].getObject(SHOW_MAPPINGS_HELP_KEY, true)
    };
  }

  componentDidMount() {
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)(this.props, 'graphiteVersion', this.currentGraphiteVersion);
  }

  render() {
    var _options$jsonData$imp, _options$jsonData$imp2;

    const {
      options,
      onOptionsChange
    } = this.props;
    const currentVersion = graphiteVersions.find(item => item.value === this.currentGraphiteVersion);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [options.access === 'direct' && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: "Deprecation Notice",
        severity: "warning",
        children: "This data source uses browser access mode. This mode is deprecated and will be removed in the future. Please use server access mode instead."
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DataSourceHttpSettings, {
        defaultUrl: "http://localhost:8080",
        dataSourceConfig: options,
        onChange: onOptionsChange
      }), _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
        className: "page-heading",
        children: "Graphite details"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "gf-form-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "gf-form",
            children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
              tooltip: "This option controls what functions are available in the Graphite query editor.",
              children: "Version"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Select, {
              "aria-label": "Graphite version",
              value: currentVersion,
              options: graphiteVersions,
              width: 8,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'graphiteVersion')
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "gf-form",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
              tooltip: this.renderTypeHelp,
              children: "Type"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Select, {
              "aria-label": "Graphite backend type",
              options: graphiteTypes,
              value: graphiteTypes.find(type => type.value === options.jsonData.graphiteType),
              width: 8,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'graphiteType')
            })]
          })
        }), options.jsonData.graphiteType === _types__WEBPACK_IMPORTED_MODULE_4__.GraphiteType.Metrictank && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Switch, {
              label: "Rollup indicator",
              labelClass: 'width-10',
              tooltip: "Shows up as an info icon in panel headers when data is aggregated",
              checked: !!options.jsonData.rollupIndicatorEnabled,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOptionChecked)(this.props, 'rollupIndicatorEnabled')
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_MappingsConfiguration__WEBPACK_IMPORTED_MODULE_6__.MappingsConfiguration, {
        mappings: (((_options$jsonData$imp = options.jsonData.importConfiguration) === null || _options$jsonData$imp === void 0 ? void 0 : (_options$jsonData$imp2 = _options$jsonData$imp.loki) === null || _options$jsonData$imp2 === void 0 ? void 0 : _options$jsonData$imp2.mappings) || []).map(_parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_7__.toString),
        showHelp: this.state.showMappingsHelp,
        onDismiss: () => {
          this.setState({
            showMappingsHelp: false
          });
          app_core_store__WEBPACK_IMPORTED_MODULE_3__["default"].setObject(SHOW_MAPPINGS_HELP_KEY, false);
        },
        onRestoreHelp: () => {
          this.setState({
            showMappingsHelp: true
          });
          app_core_store__WEBPACK_IMPORTED_MODULE_3__["default"].setObject(SHOW_MAPPINGS_HELP_KEY, true);
        },
        onChange: mappings => {
          onOptionsChange(Object.assign({}, options, {
            jsonData: Object.assign({}, options.jsonData, {
              importConfiguration: Object.assign({}, options.jsonData.importConfiguration, {
                loki: {
                  mappings: mappings.map(_parseLokiLabelMappings__WEBPACK_IMPORTED_MODULE_7__.fromString)
                }
              })
            })
          }));
        }
      })]
    });
  }

  get currentGraphiteVersion() {
    return this.props.options.jsonData.graphiteVersion || _versions__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_GRAPHITE_VERSION;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/MappingsConfiguration.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MappingsConfiguration": () => (/* binding */ MappingsConfiguration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _MappingsHelp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/MappingsHelp.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Icon;






const MappingsConfiguration = props => {
  const [mappings, setMappings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.mappings || []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      className: "page-heading",
      children: "Label mappings"
    })), !props.showHelp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        fill: "text",
        onClick: props.onRestoreHelp,
        children: "Learn how label mappings work"
      })
    }), props.showHelp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_MappingsHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onDismiss: props.onDismiss
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gf-form-group",
      children: [mappings.map((mapping, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
          label: `Mapping (${i + 1})`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
            width: 50,
            onChange: changeEvent => {
              let newMappings = mappings.concat();
              newMappings[i] = changeEvent.target.value;
              setMappings(newMappings);
            },
            onBlur: () => {
              props.onChange(mappings);
            },
            placeholder: "e.g. test.metric.(labelName).*",
            value: mapping
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "button",
          "aria-label": "Remove header",
          variant: "secondary",
          size: "xs",
          onClick: _ => {
            let newMappings = mappings.concat();
            newMappings.splice(i, 1);
            setMappings(newMappings);
            props.onChange(newMappings);
          },
          children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            name: "trash-alt"
          }))
        })]
      }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "secondary",
        icon: "plus",
        type: "button",
        onClick: () => {
          setMappings([...mappings, '']);
        },
        children: "Add label mapping"
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/MappingsHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MappingsHelp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2, _p3, _p4, _table;





function MappingsHelp(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
    severity: "info",
    title: "How to map Graphite metrics to labels?",
    onRemove: props.onDismiss,
    children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "Mappings are currently supported only between Graphite and Loki queries."
    })), _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "When you switch your data source from Graphite to Loki, your queries are mapped according to the mappings defined in the example below. To define a mapping, write the full path of the metric and replace nodes you want to map to label with the label name in parentheses. The value of the label is extracted from your Graphite query when you switch data sources."
    })), _p3 || (_p3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "All tags are automatically mapped to labels regardless of the mapping configuration. Graphite matching patterns (using {}) are converted to Loki's regular expressions matching patterns. When you use functions in your queries, the metrics, and tags are extracted to match them with defined mappings."
    })), _p4 || (_p4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: ["Example: for a mapping = ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
        children: "servers.(cluster).(server).*"
      }), ":"]
    })), _table || (_table = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Graphite query"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Mapped to Loki query"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["alias(servers.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "west"
              }), ".", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "001"
              }), ".cpu,1,2)"]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["{cluster=\"", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "west"
              }), "\", server=\"", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "001"
              }), "\"}"]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["alias(servers.*.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "{001,002}"
              }), ".*,1,2)"]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("code", {
              children: ["{server=~\"", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("u", {
                children: "(001|002)"
              }), "\"}"]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "interpolate(seriesByTag('foo=bar', 'server=002'), inf))"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: "{foo=\"bar\", server=\"002\"}"
            })
          })]
        })]
      })]
    }))]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/configuration/parseLokiLabelMappings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
/**
 * Converts a simple string used in LokiLogsMappings component (e.g. "servers.(name).*")
 * to data model saved in data source configuration.
 */
function fromString(text) {
  return {
    matchers: text.split('.').map(metricNode => {
      if (metricNode.startsWith('(') && metricNode.endsWith(')')) {
        return {
          value: '*',
          labelName: metricNode.slice(1, -1)
        };
      } else {
        return {
          value: metricNode
        };
      }
    })
  };
}
/**
 * Coverts configuration stored in data source configuration into a string displayed in LokiLogsMappings component.
 */

function toString(mapping) {
  return mapping.matchers.map(matcher => {
    return matcher.labelName ? `(${matcher.labelName})` : `${matcher.value}`;
  }).join('.');
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteDatasource": () => (/* binding */ GraphiteDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/version.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var app_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/graphite/meta.ts");
/* harmony import */ var _features_variables_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _gfunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/graphite/gfunc.ts");
/* harmony import */ var _graphite_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/graphite/graphite_query.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/graphite/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/graphite/utils.ts");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/graphite/versions.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // Types




const GRAPHITE_TAG_COMPARATORS = {
  '=': _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.Equal,
  '!=': _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.NotEqual,
  '=~': _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.EqualRegEx,
  '!=~': _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.NotEqualRegEx
};
/**
 * Converts Graphite glob-like pattern to a regular expression
 */

function convertGlobToRegEx(text) {
  if (text.includes('*') || text.includes('{')) {
    return '^' + text.replace(/\*/g, '.*').replace(/\{/g, '(').replace(/}/g, ')').replace(/,/g, '|');
  } else {
    return text;
  }
}

class GraphiteDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourceApi {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)()) {
    var _instanceSettings$jso, _instanceSettings$jso2;

    super(instanceSettings);

    _defineProperty(this, "basicAuth", void 0);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "graphiteVersion", void 0);

    _defineProperty(this, "supportsTags", void 0);

    _defineProperty(this, "isMetricTank", void 0);

    _defineProperty(this, "rollupIndicatorEnabled", void 0);

    _defineProperty(this, "cacheTimeout", void 0);

    _defineProperty(this, "withCredentials", void 0);

    _defineProperty(this, "funcDefs", null);

    _defineProperty(this, "funcDefsPromise", null);

    _defineProperty(this, "_seriesRefLetters", void 0);

    _defineProperty(this, "metricMappings", void 0);

    _defineProperty(this, "convertResponseToDataFrames", result => {
      const data = [];

      if (!result || !result.data) {
        return {
          data
        };
      } // Series are either at the root or under a node called 'series'


      const series = result.data.series || result.data;

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(series)) {
        throw {
          message: 'Missing series in result',
          data: result
        };
      }

      for (let i = 0; i < series.length; i++) {
        const s = series[i]; // Disables Grafana own series naming

        s.title = s.target;

        for (let y = 0; y < s.datapoints.length; y++) {
          s.datapoints[y][1] *= 1000;
        }

        const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toDataFrame)(s); // Metrictank metadata

        if (s.meta) {
          frame.meta = {
            custom: {
              requestMetaList: result.data.meta,
              // info for the whole request
              seriesMetaList: s.meta // Array of metadata

            }
          };

          if (this.rollupIndicatorEnabled) {
            const rollupNotice = (0,app_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_5__.getRollupNotice)(s.meta);
            const runtimeNotice = (0,app_plugins_datasource_graphite_meta__WEBPACK_IMPORTED_MODULE_5__.getRuntimeConsolidationNotice)(s.meta);

            if (rollupNotice) {
              frame.meta.notices = [rollupNotice];
            } else if (runtimeNotice) {
              frame.meta.notices = [runtimeNotice];
            }
          } // only add the request stats to the first frame


          if (i === 0 && result.data.meta.stats) {
            frame.meta.stats = this.getRequestStats(result.data.meta);
          }
        }

        data.push(frame);
      }

      return {
        data
      };
    });

    this.templateSrv = templateSrv;
    this.basicAuth = instanceSettings.basicAuth;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name; // graphiteVersion is set when a datasource is created but it hadn't been set in the past so we're
    // still falling back to the default behavior here for backwards compatibility (see also #17429)

    this.graphiteVersion = instanceSettings.jsonData.graphiteVersion || _versions__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_GRAPHITE_VERSION;
    this.metricMappings = ((_instanceSettings$jso = instanceSettings.jsonData.importConfiguration) === null || _instanceSettings$jso === void 0 ? void 0 : (_instanceSettings$jso2 = _instanceSettings$jso.loki) === null || _instanceSettings$jso2 === void 0 ? void 0 : _instanceSettings$jso2.mappings) || [];
    this.isMetricTank = instanceSettings.jsonData.graphiteType === _types__WEBPACK_IMPORTED_MODULE_9__.GraphiteType.Metrictank;
    this.supportsTags = supportsTags(this.graphiteVersion);
    this.cacheTimeout = instanceSettings.cacheTimeout;
    this.rollupIndicatorEnabled = instanceSettings.jsonData.rollupIndicatorEnabled;
    this.withCredentials = instanceSettings.withCredentials;
    this.funcDefs = null;
    this.funcDefsPromise = null;
    this._seriesRefLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  getQueryOptionsInfo() {
    return {
      maxDataPoints: true,
      cacheTimeout: true,
      links: [{
        text: 'Help',
        url: 'http://docs.grafana.org/features/datasources/graphite/#using-graphite-in-grafana'
      }]
    };
  }

  getImportQueryConfiguration() {
    return {
      loki: {
        mappings: this.metricMappings
      }
    };
  }

  async exportToAbstractQueries(queries) {
    return queries.map(query => this.exportToAbstractQuery(query));
  }

  exportToAbstractQuery(query) {
    const graphiteQuery = new _graphite_query__WEBPACK_IMPORTED_MODULE_8__["default"](this, Object.assign({}, query, {
      target: query.target || '',
      textEditor: false
    }), (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)());
    graphiteQuery.parseTarget();
    let labels = [];
    const config = this.getImportQueryConfiguration().loki;

    if (graphiteQuery.seriesByTagUsed) {
      graphiteQuery.tags.forEach(tag => {
        labels.push({
          name: tag.key,
          operator: GRAPHITE_TAG_COMPARATORS[tag.operator],
          value: tag.value
        });
      });
    } else {
      const targetNodes = graphiteQuery.segments.map(segment => segment.value);
      let mappings = config.mappings.filter(mapping => mapping.matchers.length <= targetNodes.length);

      for (let mapping of mappings) {
        const matchers = mapping.matchers.concat();
        matchers.every((matcher, index) => {
          if (matcher.labelName) {
            let value = targetNodes[index];

            if (value === '*') {
              return true;
            }

            const converted = convertGlobToRegEx(value);
            labels.push({
              name: matcher.labelName,
              operator: converted !== value ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.EqualRegEx : _grafana_data__WEBPACK_IMPORTED_MODULE_1__.AbstractLabelOperator.Equal,
              value: converted
            });
            return true;
          }

          return targetNodes[index] === matcher.value || matcher.value === '*';
        });
      }
    }

    return {
      refId: query.refId,
      labelMatchers: labels
    };
  }

  query(options) {
    const graphOptions = {
      from: this.translateTime(options.range.raw.from, false, options.timezone),
      until: this.translateTime(options.range.raw.to, true, options.timezone),
      targets: options.targets,
      format: options.format,
      cacheTimeout: options.cacheTimeout || this.cacheTimeout,
      maxDataPoints: options.maxDataPoints
    };
    const params = this.buildGraphiteParams(graphOptions, options.scopedVars);

    if (params.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)({
        data: []
      });
    }

    if (this.isMetricTank) {
      params.push('meta=true');
    }

    const httpOptions = {
      method: 'POST',
      url: '/render',
      data: params.join('&'),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    this.addTracingHeaders(httpOptions, options);

    if (options.panelId) {
      httpOptions.requestId = this.name + '.panelId.' + options.panelId;
    }

    return this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(this.convertResponseToDataFrames));
  }

  addTracingHeaders(httpOptions, options) {
    const proxyMode = !this.url.match(/^http/);

    if (proxyMode) {
      if (options.dashboardId) {
        httpOptions.headers['X-Dashboard-Id'] = options.dashboardId;
      }

      if (options.panelId) {
        httpOptions.headers['X-Panel-Id'] = options.panelId;
      }
    }
  }

  getRequestStats(meta) {
    const stats = [];

    for (const key in meta.stats) {
      let unit = undefined;

      if (key.endsWith('.ms')) {
        unit = 'ms';
      }

      stats.push({
        displayName: key,
        value: meta.stats[key],
        unit
      });
    }

    return stats;
  }

  parseTags(tagString) {
    let tags = [];
    tags = tagString.split(',');

    if (tags.length === 1) {
      tags = tagString.split(' ');

      if (tags[0] === '') {
        tags = [];
      }
    }

    return tags;
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;

    if (queries && queries.length > 0) {
      expandedQueries = queries.map(query => {
        var _query$target;

        const expandedQuery = Object.assign({}, query, {
          datasource: this.getRef(),
          target: this.templateSrv.replace((_query$target = query.target) !== null && _query$target !== void 0 ? _query$target : '', scopedVars)
        });
        return expandedQuery;
      });
    }

    return expandedQueries;
  }

  annotationQuery(options) {
    // Graphite metric as annotation
    if (options.annotation.target) {
      const target = this.templateSrv.replace(options.annotation.target, {}, 'glob');
      const graphiteQuery = {
        range: options.range,
        targets: [{
          target: target
        }],
        format: 'json',
        maxDataPoints: 100
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.query(graphiteQuery).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(result => {
        const list = [];

        for (let i = 0; i < result.data.length; i++) {
          const target = result.data[i];

          for (let y = 0; y < target.length; y++) {
            const time = target.fields[0].values.get(y);
            const value = target.fields[1].values.get(y);

            if (!value) {
              continue;
            }

            list.push({
              annotation: options.annotation,
              time,
              title: target.name
            });
          }
        }

        return list;
      })));
    } else {
      // Graphite event as annotation
      const tags = this.templateSrv.replace(options.annotation.tags);
      return this.events({
        range: options.range,
        tags: tags
      }).then(results => {
        const list = [];

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(results.data)) {
          console.error(`Unable to get annotations from ${results.url}.`);
          return [];
        }

        for (let i = 0; i < results.data.length; i++) {
          const e = results.data[i];
          let tags = e.tags;

          if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(e.tags)) {
            tags = this.parseTags(e.tags);
          }

          list.push({
            annotation: options.annotation,
            time: e.when * 1000,
            title: e.what,
            tags: tags,
            text: e.data
          });
        }

        return list;
      });
    }
  }

  events(options) {
    try {
      let tags = '';

      if (options.tags) {
        tags = '&tags=' + options.tags;
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest({
        method: 'GET',
        url: '/events/get_data?from=' + this.translateTime(options.range.raw.from, false, options.timezone) + '&until=' + this.translateTime(options.range.raw.to, true, options.timezone) + tags
      }));
    } catch (err) {
      return Promise.reject(err);
    }
  }

  targetContainsTemplate(target) {
    var _target$target;

    return this.templateSrv.containsTemplate((_target$target = target.target) !== null && _target$target !== void 0 ? _target$target : '');
  }

  translateTime(date, roundUp, timezone) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(date)) {
      if (date === 'now') {
        return 'now';
      } else if (date.indexOf('now-') >= 0 && date.indexOf('/') === -1) {
        date = date.substring(3);
        date = date.replace('m', 'min');
        date = date.replace('M', 'mon');
        return date;
      }

      date = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(date, roundUp, timezone);
    } // graphite' s from filter is exclusive
    // here we step back one minute in order
    // to guarantee that we get all the data that
    // exists for the specified range


    if (roundUp) {
      if (date.get('s')) {
        date.add(1, 's');
      }
    } else if (roundUp === false) {
      if (date.get('s')) {
        date.subtract(1, 's');
      }
    }

    return date.unix();
  }

  metricFindQuery(query, optionalOptions) {
    const options = optionalOptions || {}; // First attempt to check for tag-related functions (using empty wildcard for interpolation)

    let interpolatedQuery = this.templateSrv.replace(query, (0,_features_variables_utils__WEBPACK_IMPORTED_MODULE_6__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '',
      options: optionalOptions
    })); // special handling for tag_values(<tag>[,<expression>]*), this is used for template variables

    let allParams = interpolatedQuery.match(/^tag_values\((.*)\)$/);
    let expressions = allParams ? allParams[1].split(',').filter(p => !!p) : undefined;

    if (expressions) {
      options.limit = 10000;
      return this.getTagValuesAutoComplete(expressions.slice(1), expressions[0], undefined, options);
    } // special handling for tags(<expression>[,<expression>]*), this is used for template variables


    allParams = interpolatedQuery.match(/^tags\((.*)\)$/);
    expressions = allParams ? allParams[1].split(',').filter(p => !!p) : undefined;

    if (expressions) {
      options.limit = 10000;
      return this.getTagsAutoComplete(expressions, undefined, options);
    } // If no tag-related query was found, perform metric-based search (using * as the wildcard for interpolation)


    let useExpand = query.match(/^expand\((.*)\)$/);
    query = useExpand ? useExpand[1] : query;
    interpolatedQuery = this.templateSrv.replace(query, (0,_features_variables_utils__WEBPACK_IMPORTED_MODULE_6__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '*',
      options: optionalOptions
    }));
    let range;

    if (options.range) {
      range = {
        from: this.translateTime(options.range.from, false, options.timezone),
        until: this.translateTime(options.range.to, true, options.timezone)
      };
    }

    if (useExpand) {
      return this.requestMetricExpand(interpolatedQuery, options.requestId, range);
    } else {
      return this.requestMetricFind(interpolatedQuery, options.requestId, range);
    }
  }
  /**
   * Search for metrics matching giving pattern using /metrics/find endpoint. It will
   * return all possible values at the last level of the query, for example:
   *
   * metrics: prod.servers.001.cpu, prod.servers.002.cpu
   * query: *.servers.*
   * result: 001, 002
   *
   * For more complex searches use requestMetricExpand
   */


  requestMetricFind(query, requestId, range) {
    const httpOptions = {
      method: 'POST',
      url: '/metrics/find',
      params: {},
      data: `query=${query}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // for cancellations
      requestId: requestId
    };

    if (range) {
      httpOptions.params.from = range.from;
      httpOptions.params.until = range.until;
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, metric => {
        return {
          text: metric.text,
          expandable: metric.expandable ? true : false
        };
      });
    })));
  }
  /**
   * Search for metrics matching giving pattern using /metrics/expand endpoint.
   * The result will contain all metrics (with full name) matching provided query.
   * It's a more flexible version of /metrics/find endpoint (@see requestMetricFind)
   */


  requestMetricExpand(query, requestId, range) {
    const httpOptions = {
      method: 'GET',
      url: '/metrics/expand',
      params: {
        query
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // for cancellations
      requestId
    };

    if (range) {
      httpOptions.params.from = range.from;
      httpOptions.params.until = range.until;
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data.results, metric => {
        return {
          text: metric,
          expandable: false
        };
      });
    })));
  }

  getTags(optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags',
      // for cancellations
      requestId: options.requestId
    };

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, tag => {
        return {
          text: tag.tag,
          id: tag.id
        };
      });
    })));
  }

  getTagValues(options = {}) {
    const httpOptions = {
      method: 'GET',
      url: '/tags/' + this.templateSrv.replace(options.key),
      // for cancellations
      requestId: options.requestId
    };

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      if (results.data && results.data.values) {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data.values, value => {
          return {
            text: value.value,
            id: value.id
          };
        });
      } else {
        return [];
      }
    })));
  }

  getTagsAutoComplete(expressions, tagPrefix, optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags/autoComplete/tags',
      params: {
        expr: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(expressions, expression => this.templateSrv.replace((expression || '').trim()))
      },
      // for cancellations
      requestId: options.requestId
    };

    if (tagPrefix) {
      httpOptions.params.tagPrefix = tagPrefix;
    }

    if (options.limit) {
      httpOptions.params.limit = options.limit;
    }

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }

  getTagValuesAutoComplete(expressions, tag, valuePrefix, optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags/autoComplete/values',
      params: {
        expr: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(expressions, expression => this.templateSrv.replace((expression || '').trim())),
        tag: this.templateSrv.replace((tag || '').trim())
      },
      // for cancellations
      requestId: options.requestId
    };

    if (valuePrefix) {
      httpOptions.params.valuePrefix = valuePrefix;
    }

    if (options.limit) {
      httpOptions.params.limit = options.limit;
    }

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }

  getVersion(optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/version',
      requestId: options.requestId
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      if (results.data) {
        const semver = new app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__.SemVersion(results.data);
        return semver.isValid() ? results.data : '';
      }

      return '';
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)('');
    })));
  }

  createFuncInstance(funcDef, options) {
    return _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].createFuncInstance(funcDef, options, this.funcDefs);
  }

  getFuncDef(name) {
    return _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].getFuncDef(name, this.funcDefs);
  }

  waitForFuncDefsLoaded() {
    return this.getFuncDefs();
  }

  getFuncDefs() {
    if (this.funcDefsPromise !== null) {
      return this.funcDefsPromise;
    }

    if (!supportsFunctionIndex(this.graphiteVersion)) {
      this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].getFuncDefs(this.graphiteVersion);
      this.funcDefsPromise = Promise.resolve(this.funcDefs);
      return this.funcDefsPromise;
    }

    const httpOptions = {
      method: 'GET',
      url: '/functions',
      // add responseType because if this is not defined,
      // backend_srv defaults to json
      responseType: 'text'
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.doGraphiteRequest(httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
      // Fix for a Graphite bug: https://github.com/graphite-project/graphite-web/issues/2609
      // There is a fix for it https://github.com/graphite-project/graphite-web/pull/2612 but
      // it was merged to master in July 2020 but it has never been released (the last Graphite
      // release was 1.1.7 - March 2020). The bug was introduced in Graphite 1.1.7, in versions
      // 1.1.0 - 1.1.6 /functions endpoint returns a valid JSON
      const fixedData = JSON.parse(results.data.replace(/"default": ?Infinity/g, '"default": 1e9999'));
      this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].parseFuncDefs(fixedData);
      return this.funcDefs;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(error => {
      console.error('Fetching graphite functions error', error);
      this.funcDefs = _gfunc__WEBPACK_IMPORTED_MODULE_7__["default"].getFuncDefs(this.graphiteVersion);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(this.funcDefs);
    })));
  }

  testDatasource() {
    const query = {
      panelId: 3,
      rangeRaw: {
        from: 'now-1h',
        to: 'now'
      },
      range: {
        raw: {
          from: 'now-1h',
          to: 'now'
        }
      },
      targets: [{
        target: 'constantLine(100)'
      }],
      maxDataPoints: 300
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.query(query)).then(() => ({
      status: 'success',
      message: 'Data source is working'
    }));
  }

  doGraphiteRequest(options) {
    if (this.basicAuth || this.withCredentials) {
      options.withCredentials = true;
    }

    if (this.basicAuth) {
      options.headers = options.headers || {};
      options.headers.Authorization = this.basicAuth;
    }

    options.url = this.url + options.url;
    options.inspect = {
      type: 'graphite'
    };
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.throwError)((0,_utils__WEBPACK_IMPORTED_MODULE_10__.reduceError)(err));
    }));
  }

  buildGraphiteParams(options, scopedVars) {
    const graphiteOptions = ['from', 'until', 'rawData', 'format', 'maxDataPoints', 'cacheTimeout'];
    const cleanOptions = [],
          targets = {};
    let target, targetValue, i;
    const regex = /\#([A-Z])/g;
    const intervalFormatFixRegex = /'(\d+)m'/gi;
    let hasTargets = false;
    options['format'] = 'json';

    function fixIntervalFormat(match) {
      return match.replace('m', 'min').replace('M', 'mon');
    }

    for (i = 0; i < options.targets.length; i++) {
      target = options.targets[i];

      if (!target.target) {
        continue;
      }

      if (!target.refId) {
        target.refId = this._seriesRefLetters[i];
      }

      targetValue = this.templateSrv.replace(target.target, scopedVars);
      targetValue = targetValue.replace(intervalFormatFixRegex, fixIntervalFormat);
      targets[target.refId] = targetValue;
    }

    function nestedSeriesRegexReplacer(match, g1) {
      return targets[g1] || match;
    }

    for (i = 0; i < options.targets.length; i++) {
      target = options.targets[i];

      if (!target.target) {
        continue;
      }

      targetValue = targets[target.refId];
      targetValue = targetValue.replace(regex, nestedSeriesRegexReplacer);
      targets[target.refId] = targetValue;

      if (!target.hide) {
        hasTargets = true;
        cleanOptions.push('target=' + encodeURIComponent(targetValue));
      }
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(options, (value, key) => {
      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(graphiteOptions, key) === -1) {
        return;
      }

      if (value) {
        cleanOptions.push(key + '=' + encodeURIComponent(value));
      }
    });

    if (!hasTargets) {
      return [];
    }

    return cleanOptions;
  }

}

function supportsTags(version) {
  return (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__.isVersionGtOrEq)(version, '1.1');
}

function supportsFunctionIndex(version) {
  return (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_3__.isVersionGtOrEq)(version, '1.1');
}

function mapToTags() {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(results => {
    if (results.data) {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results.data, value => {
        return {
          text: value
        };
      });
    } else {
      return [];
    }
  }));
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/gfunc.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuncInstance": () => (/* binding */ FuncInstance),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/version.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const index = {};

function addFuncDef(funcDef) {
  funcDef.params = funcDef.params || [];
  funcDef.defaultParams = funcDef.defaultParams || [];
  index[funcDef.name] = funcDef;

  if (funcDef.shortName) {
    index[funcDef.shortName] = funcDef;
  }
}

const optionalSeriesRefArgs = [{
  name: 'other',
  type: 'value_or_series',
  optional: true,
  multiple: true
}];
addFuncDef({
  name: 'scaleToSeconds',
  category: 'Transform',
  params: [{
    name: 'seconds',
    type: 'int'
  }],
  defaultParams: [1]
});
addFuncDef({
  name: 'perSecond',
  category: 'Transform',
  params: [{
    name: 'max value',
    type: 'int',
    optional: true
  }],
  defaultParams: []
});
addFuncDef({
  name: 'holtWintersForecast',
  category: 'Calculate'
});
addFuncDef({
  name: 'holtWintersConfidenceBands',
  category: 'Calculate',
  params: [{
    name: 'delta',
    type: 'int'
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'holtWintersAberration',
  category: 'Calculate',
  params: [{
    name: 'delta',
    type: 'int'
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'nPercentile',
  category: 'Calculate',
  params: [{
    name: 'Nth percentile',
    type: 'int'
  }],
  defaultParams: [95]
});
addFuncDef({
  name: 'diffSeries',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'stddevSeries',
  params: optionalSeriesRefArgs,
  defaultParams: [''],
  category: 'Combine'
});
addFuncDef({
  name: 'divideSeries',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'multiplySeries',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'asPercent',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'group',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A', '#B'],
  category: 'Combine'
});
addFuncDef({
  name: 'sumSeries',
  shortName: 'sum',
  category: 'Combine',
  params: optionalSeriesRefArgs,
  defaultParams: ['']
});
addFuncDef({
  name: 'averageSeries',
  shortName: 'avg',
  category: 'Combine',
  params: optionalSeriesRefArgs,
  defaultParams: ['']
});
addFuncDef({
  name: 'rangeOfSeries',
  category: 'Combine'
});
addFuncDef({
  name: 'percentileOfSeries',
  category: 'Combine',
  params: [{
    name: 'n',
    type: 'int'
  }, {
    name: 'interpolate',
    type: 'boolean',
    options: ['true', 'false']
  }],
  defaultParams: [95, 'false']
});
addFuncDef({
  name: 'sumSeriesWithWildcards',
  category: 'Combine',
  params: [{
    name: 'node',
    type: 'int',
    multiple: true
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'maxSeries',
  shortName: 'max',
  category: 'Combine'
});
addFuncDef({
  name: 'minSeries',
  shortName: 'min',
  category: 'Combine'
});
addFuncDef({
  name: 'averageSeriesWithWildcards',
  category: 'Combine',
  params: [{
    name: 'node',
    type: 'int',
    multiple: true
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'alias',
  category: 'Alias',
  params: [{
    name: 'alias',
    type: 'string'
  }],
  defaultParams: ['alias']
});
addFuncDef({
  name: 'aliasSub',
  category: 'Alias',
  params: [{
    name: 'search',
    type: 'string'
  }, {
    name: 'replace',
    type: 'string'
  }],
  defaultParams: ['', '\\1']
});
addFuncDef({
  name: 'consolidateBy',
  category: 'Special',
  params: [{
    name: 'function',
    type: 'string',
    options: ['sum', 'average', 'min', 'max']
  }],
  defaultParams: ['max']
});
addFuncDef({
  name: 'cumulative',
  category: 'Special',
  params: [],
  defaultParams: []
});
addFuncDef({
  name: 'groupByNode',
  category: 'Combine',
  params: [{
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }, {
    name: 'function',
    type: 'string',
    options: ['sum', 'avg', 'maxSeries']
  }],
  defaultParams: [3, 'sum']
});
addFuncDef({
  name: 'aliasByNode',
  category: 'Alias',
  params: [{
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    multiple: true
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'substr',
  category: 'Special',
  params: [{
    name: 'start',
    type: 'int',
    options: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }, {
    name: 'stop',
    type: 'int',
    options: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }],
  defaultParams: [0, 0]
});
addFuncDef({
  name: 'sortByName',
  category: 'Sorting',
  params: [{
    name: 'natural',
    type: 'boolean',
    options: ['true', 'false'],
    optional: true
  }],
  defaultParams: ['false']
});
addFuncDef({
  name: 'sortByMaxima',
  category: 'Sorting'
});
addFuncDef({
  name: 'sortByMinima',
  category: 'Sorting'
});
addFuncDef({
  name: 'sortByTotal',
  category: 'Sorting'
});
addFuncDef({
  name: 'aliasByMetric',
  category: 'Alias'
});
addFuncDef({
  name: 'randomWalk',
  fake: true,
  category: 'Special',
  params: [{
    name: 'name',
    type: 'string'
  }],
  defaultParams: ['randomWalk']
});
addFuncDef({
  name: 'countSeries',
  category: 'Combine'
});
addFuncDef({
  name: 'constantLine',
  category: 'Special',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'cactiStyle',
  category: 'Special'
});
addFuncDef({
  name: 'keepLastValue',
  category: 'Transform',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [100]
});
addFuncDef({
  name: 'changed',
  category: 'Special',
  params: [],
  defaultParams: []
});
addFuncDef({
  name: 'scale',
  category: 'Transform',
  params: [{
    name: 'factor',
    type: 'int'
  }],
  defaultParams: [1]
});
addFuncDef({
  name: 'offset',
  category: 'Transform',
  params: [{
    name: 'amount',
    type: 'int'
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'transformNull',
  category: 'Transform',
  params: [{
    name: 'amount',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'integral',
  category: 'Transform'
});
addFuncDef({
  name: 'derivative',
  category: 'Transform'
});
addFuncDef({
  name: 'nonNegativeDerivative',
  category: 'Transform',
  params: [{
    name: 'max value or 0',
    type: 'int',
    optional: true
  }],
  defaultParams: ['']
});
addFuncDef({
  name: 'timeShift',
  category: 'Transform',
  params: [{
    name: 'amount',
    type: 'select',
    options: ['1h', '6h', '12h', '1d', '2d', '7d', '14d', '30d']
  }],
  defaultParams: ['1d']
});
addFuncDef({
  name: 'timeStack',
  category: 'Transform',
  params: [{
    name: 'timeShiftUnit',
    type: 'select',
    options: ['1h', '6h', '12h', '1d', '2d', '7d', '14d', '30d']
  }, {
    name: 'timeShiftStart',
    type: 'int'
  }, {
    name: 'timeShiftEnd',
    type: 'int'
  }],
  defaultParams: ['1d', 0, 7]
});
addFuncDef({
  name: 'summarize',
  category: 'Transform',
  params: [{
    name: 'interval',
    type: 'string'
  }, {
    name: 'func',
    type: 'select',
    options: ['sum', 'avg', 'min', 'max', 'last']
  }, {
    name: 'alignToFrom',
    type: 'boolean',
    optional: true,
    options: ['false', 'true']
  }],
  defaultParams: ['1h', 'sum', 'false']
});
addFuncDef({
  name: 'smartSummarize',
  category: 'Transform',
  params: [{
    name: 'interval',
    type: 'string'
  }, {
    name: 'func',
    type: 'select',
    options: ['sum', 'avg', 'min', 'max', 'last']
  }],
  defaultParams: ['1h', 'sum']
});
addFuncDef({
  name: 'absolute',
  category: 'Transform'
});
addFuncDef({
  name: 'hitcount',
  category: 'Transform',
  params: [{
    name: 'interval',
    type: 'string'
  }],
  defaultParams: ['10s']
});
addFuncDef({
  name: 'log',
  category: 'Transform',
  params: [{
    name: 'base',
    type: 'int'
  }],
  defaultParams: ['10']
});
addFuncDef({
  name: 'averageAbove',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'averageBelow',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'currentAbove',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'currentBelow',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'maximumAbove',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'maximumBelow',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'minimumAbove',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'minimumBelow',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'limit',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'mostDeviant',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'exclude',
  category: 'Filter Series',
  params: [{
    name: 'exclude',
    type: 'string'
  }],
  defaultParams: ['exclude']
});
addFuncDef({
  name: 'highestCurrent',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'highestMax',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'lowestCurrent',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'movingAverage',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'movingMedian',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: ['5']
});
addFuncDef({
  name: 'stdev',
  category: 'Calculate',
  params: [{
    name: 'n',
    type: 'int'
  }, {
    name: 'tolerance',
    type: 'int'
  }],
  defaultParams: [5, 0.1]
});
addFuncDef({
  name: 'highestAverage',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'lowestAverage',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeAbovePercentile',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeAboveValue',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeBelowPercentile',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeBelowValue',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'useSeriesAbove',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }, {
    name: 'search',
    type: 'string'
  }, {
    name: 'replace',
    type: 'string'
  }],
  defaultParams: [0, 'search', 'replace']
}); ////////////////////
// Graphite 1.0.x //
////////////////////

addFuncDef({
  name: 'aggregateLine',
  category: 'Calculate',
  params: [{
    name: 'func',
    type: 'select',
    options: ['sum', 'avg', 'min', 'max', 'last']
  }],
  defaultParams: ['avg'],
  version: '1.0'
});
addFuncDef({
  name: 'averageOutsidePercentile',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [95],
  version: '1.0'
});
addFuncDef({
  name: 'delay',
  category: 'Transform',
  params: [{
    name: 'steps',
    type: 'int'
  }],
  defaultParams: [1],
  version: '1.0'
});
addFuncDef({
  name: 'exponentialMovingAverage',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'fallbackSeries',
  category: 'Special',
  params: [{
    name: 'fallback',
    type: 'string'
  }],
  defaultParams: ['constantLine(0)'],
  version: '1.0'
});
addFuncDef({
  name: 'grep',
  category: 'Filter Series',
  params: [{
    name: 'grep',
    type: 'string'
  }],
  defaultParams: ['grep'],
  version: '1.0'
});
addFuncDef({
  name: 'groupByNodes',
  category: 'Combine',
  params: [{
    name: 'function',
    type: 'string',
    options: ['sum', 'avg', 'maxSeries']
  }, {
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    multiple: true
  }],
  defaultParams: ['sum', 3],
  version: '1.0'
});
addFuncDef({
  name: 'integralByInterval',
  category: 'Transform',
  params: [{
    name: 'intervalUnit',
    type: 'select',
    options: ['1h', '6h', '12h', '1d', '2d', '7d', '14d', '30d']
  }],
  defaultParams: ['1d'],
  version: '1.0'
});
addFuncDef({
  name: 'interpolate',
  category: 'Transform',
  params: [{
    name: 'limit',
    type: 'int',
    optional: true
  }],
  defaultParams: [],
  version: '1.0'
});
addFuncDef({
  name: 'invert',
  category: 'Transform',
  version: '1.0'
});
addFuncDef({
  name: 'isNonNull',
  category: 'Combine',
  version: '1.0'
});
addFuncDef({
  name: 'linearRegression',
  category: 'Calculate',
  params: [{
    name: 'startSourceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d'],
    optional: true
  }, {
    name: 'endSourceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d'],
    optional: true
  }],
  defaultParams: [],
  version: '1.0'
});
addFuncDef({
  name: 'mapSeries',
  shortName: 'map',
  params: [{
    name: 'node',
    type: 'int'
  }],
  defaultParams: [3],
  category: 'Combine',
  version: '1.0'
});
addFuncDef({
  name: 'movingMin',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'movingMax',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'movingSum',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'multiplySeriesWithWildcards',
  category: 'Combine',
  params: [{
    name: 'position',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    multiple: true
  }],
  defaultParams: [2],
  version: '1.0'
});
addFuncDef({
  name: 'offsetToZero',
  category: 'Transform',
  version: '1.0'
});
addFuncDef({
  name: 'pow',
  category: 'Transform',
  params: [{
    name: 'factor',
    type: 'int'
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'powSeries',
  category: 'Transform',
  params: optionalSeriesRefArgs,
  defaultParams: [''],
  version: '1.0'
});
addFuncDef({
  name: 'reduceSeries',
  shortName: 'reduce',
  params: [{
    name: 'function',
    type: 'string',
    options: ['asPercent', 'diffSeries', 'divideSeries']
  }, {
    name: 'reduceNode',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  }, {
    name: 'reduceMatchers',
    type: 'string',
    multiple: true
  }],
  defaultParams: ['asPercent', 2, 'used_bytes'],
  category: 'Combine',
  version: '1.0'
});
addFuncDef({
  name: 'removeBetweenPercentile',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [95],
  version: '1.0'
});
addFuncDef({
  name: 'removeEmptySeries',
  category: 'Filter Series',
  version: '1.0'
});
addFuncDef({
  name: 'squareRoot',
  category: 'Transform',
  version: '1.0'
});
addFuncDef({
  name: 'timeSlice',
  category: 'Transform',
  params: [{
    name: 'startSliceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d']
  }, {
    name: 'endSliceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d'],
    optional: true
  }],
  defaultParams: ['-1h'],
  version: '1.0'
});
addFuncDef({
  name: 'weightedAverage',
  category: 'Combine',
  params: [{
    name: 'other',
    type: 'value_or_series',
    optional: true
  }, {
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }],
  defaultParams: ['#A', 4],
  version: '1.0'
});
addFuncDef({
  name: 'seriesByTag',
  category: 'Special',
  params: [{
    name: 'tagExpression',
    type: 'string',
    multiple: true
  }],
  version: '1.1'
});
addFuncDef({
  name: 'groupByTags',
  category: 'Combine',
  params: [{
    name: 'function',
    type: 'string',
    options: ['sum', 'avg', 'maxSeries']
  }, {
    name: 'tag',
    type: 'string',
    multiple: true
  }],
  defaultParams: ['sum', 'tag'],
  version: '1.1'
});
addFuncDef({
  name: 'aliasByTags',
  category: 'Alias',
  params: [{
    name: 'tag',
    type: 'string',
    multiple: true
  }],
  defaultParams: ['tag'],
  version: '1.1'
});

function isVersionRelatedFunction(obj, graphiteVersion) {
  return !obj.version || (0,app_core_utils_version__WEBPACK_IMPORTED_MODULE_1__.isVersionGtOrEq)(graphiteVersion, obj.version);
}

class FuncInstance {
  /**
   * Hidden functions are not displayed in UI but available in text editor
   * This is used for seriesByTagUsed function which when used switches
   * the editor to tag-only mode. Defined tags are provided to seriesByTagUsed
   * as parameters.
   */
  constructor(funcDef, options) {
    _defineProperty(this, "def", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "text", void 0);

    _defineProperty(this, "hidden", void 0);

    this.def = funcDef;
    this.params = [];

    if (options && options.withDefaultParams && funcDef.defaultParams) {
      this.params = funcDef.defaultParams.slice(0);
    }

    this.updateText();
  }

  render(metricExp, replaceVariables) {
    const str = this.def.name + '(';
    const parameters = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.params, (value, index) => {
      let paramType;

      if (index < this.def.params.length) {
        paramType = this.def.params[index].type;
      } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), 'multiple')) {
        paramType = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), 'type');
      } // param types that should never be quoted


      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(['value_or_series', 'boolean', 'int', 'float', 'node', 'int_or_infinity'], paramType)) {
        return value;
      }

      const valueInterpolated = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(value) ? replaceVariables(value) : value; // param types that might be quoted
      // To quote variables correctly we need to interpolate it to check if it contains a numeric or string value

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(['int_or_interval', 'node_or_tag'], paramType) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isFinite)(+valueInterpolated)) {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(value);
      }

      return "'" + value + "'";
    }); // don't send any blank parameters to graphite

    while (parameters[parameters.length - 1] === '') {
      parameters.pop();
    }

    if (metricExp) {
      parameters.unshift(metricExp);
    }

    return str + parameters.join(', ') + ')';
  }

  _hasMultipleParamsInString(strValue, index) {
    if (strValue.indexOf(',') === -1) {
      return false;
    }

    if (this.def.params[index + 1] && this.def.params[index + 1].optional) {
      return true;
    }

    if (index + 1 >= this.def.params.length && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(this.def.params), 'multiple')) {
      return true;
    }

    return false;
  }

  updateParam(strValue, index) {
    // handle optional parameters
    // if string contains ',' and next param is optional, split and update both
    if (this._hasMultipleParamsInString(strValue, index)) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(strValue.split(','), (partVal, idx) => {
        this.updateParam(partVal.trim(), index + idx);
      });
      return;
    }

    if (strValue === '' && (index >= this.def.params.length || this.def.params[index].optional)) {
      this.params.splice(index, 1);
    } else {
      this.params[index] = strValue;
    }

    this.updateText();
  }

  updateText() {
    if (this.params.length === 0) {
      this.text = this.def.name + '()';
      return;
    }

    let text = this.def.name + '(';
    text += this.params.join(', ');
    text += ')';
    this.text = text;
  }

}

function createFuncInstance(funcDef, options, idx) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(funcDef)) {
    funcDef = getFuncDef(funcDef, idx);
  }

  return new FuncInstance(funcDef, options);
}

function getFuncDef(name, idx) {
  if (!(idx || index)[name]) {
    return {
      name: name,
      params: [{
        name: '',
        type: '',
        multiple: true
      }],
      defaultParams: [''],
      unknown: true
    };
  }

  return (idx || index)[name];
}

function getFuncDefs(graphiteVersion, idx) {
  const funcs = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(idx || index, funcDef => {
    if (isVersionRelatedFunction(funcDef, graphiteVersion)) {
      funcs[funcDef.name] = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.assign)({}, funcDef, {
        params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(funcDef.params, param => {
          return isVersionRelatedFunction(param, graphiteVersion);
        })
      });
    }
  });
  return funcs;
} // parse response from graphite /functions endpoint into internal format


function parseFuncDefs(rawDefs) {
  const funcDefs = {};
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(rawDefs || {}, (funcDef, funcName) => {
    // skip graphite graph functions
    if (funcDef.group === 'Graph') {
      return;
    }

    let description = funcDef.description;

    if (description) {
      // tidy up some pydoc syntax that rst2html can't handle
      description = description.replace(/:py:func:`(.+)( <[^>]*>)?`/g, '``$1``').replace(/.. seealso:: /g, 'See also: ').replace(/.. code-block *:: *none/g, '.. code-block::');
    }

    const func = {
      name: funcDef.name,
      description,
      category: funcDef.group,
      params: [],
      defaultParams: [],
      fake: false
    }; // get rid of the first "seriesList" param

    if (/^seriesLists?$/.test((0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(funcDef, 'params[0].type', ''))) {
      // handle functions that accept multiple seriesLists
      // we leave the param in place but mark it optional, so users can add more series if they wish
      if (funcDef.params[0].multiple) {
        funcDef.params[0].required = false; // otherwise chop off the first param, it'll be handled separately
      } else {
        funcDef.params.shift();
      } // tag function as fake

    } else {
      func.fake = true;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.forEach)(funcDef.params, rawParam => {
      const param = {
        name: rawParam.name,
        type: 'string',
        optional: !rawParam.required,
        multiple: !!rawParam.multiple,
        options: undefined
      };

      if (rawParam.default !== undefined) {
        if (rawParam.default === Infinity) {
          func.defaultParams.push('inf');
        } else {
          func.defaultParams.push((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(rawParam.default));
        }
      } else if (rawParam.suggestions) {
        func.defaultParams.push((0,lodash__WEBPACK_IMPORTED_MODULE_0__.toString)(rawParam.suggestions[0]));
      } else {
        func.defaultParams.push('');
      }

      if (rawParam.type === 'boolean') {
        param.type = 'boolean';
        param.options = ['true', 'false'];
      } else if (rawParam.type === 'integer') {
        param.type = 'int';
      } else if (rawParam.type === 'float') {
        param.type = 'float';
      } else if (rawParam.type === 'node') {
        param.type = 'node';
        param.options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      } else if (rawParam.type === 'nodeOrTag') {
        param.type = 'node_or_tag';
        param.options = ['name', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      } else if (rawParam.type === 'intOrInterval') {
        param.type = 'int_or_interval';
      } else if (rawParam.type === 'seriesList') {
        param.type = 'value_or_series';
      } else if (rawParam.type === 'intOrInf') {
        param.type = 'int_or_infinity';
      }

      if (rawParam.options) {
        param.options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(rawParam.options, lodash__WEBPACK_IMPORTED_MODULE_0__.toString);
      } else if (rawParam.suggestions) {
        param.options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(rawParam.suggestions, lodash__WEBPACK_IMPORTED_MODULE_0__.toString);
      }

      func.params.push(param);
    });
    funcDefs[funcName] = func;
  });
  return funcDefs;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createFuncInstance: createFuncInstance,
  getFuncDef: getFuncDef,
  getFuncDefs: getFuncDefs,
  parseFuncDefs: parseFuncDefs
});

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/graphite_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphiteQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_arrayMove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/arrayMove.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class GraphiteQuery {
  /** @ngInject */
  constructor(datasource, target, templateSrv, scopedVars) {
    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "functions", []);

    _defineProperty(this, "segments", []);

    _defineProperty(this, "tags", []);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "seriesByTagUsed", false);

    _defineProperty(this, "checkOtherSegmentsIndex", 0);

    _defineProperty(this, "removeTagValue", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "scopedVars", void 0);

    this.datasource = datasource;
    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    this.parseTarget();
    this.removeTagValue = '-- remove tag --';
  }

  parseTarget() {
    this.functions = [];
    this.segments = [];
    this.tags = [];
    this.seriesByTagUsed = false;
    this.error = null;

    if (this.target.textEditor) {
      return;
    }

    const parser = new _parser__WEBPACK_IMPORTED_MODULE_2__.Parser(this.target.target);
    const astNode = parser.getAst();

    if (astNode === null) {
      this.checkOtherSegmentsIndex = 0;
      return;
    }

    if (astNode.type === 'error') {
      this.error = astNode.message + ' at position: ' + astNode.pos;
      this.target.textEditor = true;
      return;
    }

    try {
      this.parseTargetRecursive(astNode, null);
    } catch (err) {
      if (err instanceof Error) {
        console.error('error parsing target:', err.message);
        this.error = err.message;
      }

      this.target.textEditor = true;
    }

    this.checkOtherSegmentsIndex = this.segments.length - 1;
  }

  getSegmentPathUpTo(index) {
    const arr = this.segments.slice(0, index);
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(arr, (result, segment) => {
      return result ? result + '.' + segment.value : segment.value;
    }, '');
  }

  parseTargetRecursive(astNode, func) {
    if (astNode === null) {
      return null;
    }

    switch (astNode.type) {
      case 'function':
        const innerFunc = this.datasource.createFuncInstance(astNode.name, {
          withDefaultParams: false
        });
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(astNode.params, param => {
          this.parseTargetRecursive(param, innerFunc);
        });
        innerFunc.updateText();
        this.functions.push(innerFunc); // extract tags from seriesByTag function and hide function

        if (innerFunc.def.name === 'seriesByTag' && !this.seriesByTagUsed) {
          this.seriesByTagUsed = true;
          innerFunc.hidden = true;
          this.tags = this.splitSeriesByTagParams(innerFunc);
        }

        break;

      case 'series-ref':
        if (this.segments.length > 0 || this.getSeriesByTagFuncIndex() >= 0) {
          this.addFunctionParameter(func, astNode.value);
        } else {
          this.segments.push(astNode);
        }

        break;

      case 'bool':
      case 'string':
      case 'number':
        this.addFunctionParameter(func, astNode.value);
        break;

      case 'metric':
        if (this.segments.length || this.tags.length) {
          this.addFunctionParameter(func, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.join)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(astNode.segments, 'value'), '.'));
        } else {
          this.segments = astNode.segments;
        }

        break;
    }
  }

  updateSegmentValue(segment, index) {
    this.segments[index].value = segment.value;
  }

  addSelectMetricSegment() {
    this.segments.push({
      value: 'select metric'
    });
  }

  addFunction(newFunc) {
    this.functions.push(newFunc);
  }

  addFunctionParameter(func, value) {
    if (func.params.length >= func.def.params.length && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(func.def.params), 'multiple', false)) {
      throw {
        message: 'too many parameters for function ' + func.def.name
      };
    }

    func.params.push(value);
  }

  removeFunction(func) {
    this.functions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.functions, func);
  }

  moveFunction(func, offset) {
    const index = this.functions.indexOf(func);
    (0,app_core_utils_arrayMove__WEBPACK_IMPORTED_MODULE_1__.arrayMove)(this.functions, index, index + offset);
  }

  updateModelTarget(targets) {
    const wrapFunction = (target, func) => {
      return func.render(target, value => {
        return this.templateSrv.replace(value, this.scopedVars);
      });
    };

    if (!this.target.textEditor) {
      const metricPath = this.getSegmentPathUpTo(this.segments.length).replace(/\.?select metric$/, '');
      this.target.target = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(this.functions, wrapFunction, metricPath);
    }

    this.updateRenderedTarget(this.target, targets); // loop through other queries and update targetFull as needed

    for (const target of targets || []) {
      if (target.refId !== this.target.refId) {
        this.updateRenderedTarget(target, targets);
      }
    } // clean-up added param


    this.functions.forEach(func => func.added = false);
  }

  updateRenderedTarget(target, targets) {
    // render nested query
    const targetsByRefId = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.keyBy)(targets, 'refId'); // no references to self

    delete targetsByRefId[target.refId];
    const nestedSeriesRefRegex = /\#([A-Z])/g;
    let targetWithNestedQueries = target.target; // Use ref count to track circular references

    function countTargetRefs(targetsByRefId, refId) {
      let refCount = 0;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(targetsByRefId, (t, id) => {
        if (id !== refId) {
          const match = nestedSeriesRefRegex.exec(t.target);
          const count = match && match.length ? match.length - 1 : 0;
          refCount += count;
        }
      });
      targetsByRefId[refId].refCount = refCount;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(targetsByRefId, (t, id) => {
      countTargetRefs(targetsByRefId, id);
    }); // Keep interpolating until there are no query references
    // The reason for the loop is that the referenced query might contain another reference to another query

    while (targetWithNestedQueries.match(nestedSeriesRefRegex)) {
      const updated = targetWithNestedQueries.replace(nestedSeriesRefRegex, (match, g1) => {
        const t = targetsByRefId[g1];

        if (!t) {
          return match;
        } // no circular references


        if (t.refCount === 0) {
          delete targetsByRefId[g1];
        }

        t.refCount--;
        return t.target;
      });

      if (updated === targetWithNestedQueries) {
        break;
      }

      targetWithNestedQueries = updated;
    }

    delete target.targetFull;

    if (target.target !== targetWithNestedQueries) {
      target.targetFull = targetWithNestedQueries;
    }
  }

  splitSeriesByTagParams(func) {
    const tagPattern = /([^\!=~]+)(\!?=~?)(.*)/;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(func.params, param => {
      const matches = tagPattern.exec(param);

      if (matches) {
        const tag = matches.slice(1);

        if (tag.length === 3) {
          return {
            key: tag[0],
            operator: tag[1],
            value: tag[2]
          };
        }
      }

      return [];
    }));
  }

  getSeriesByTagFuncIndex() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(this.functions, func => func.def.name === 'seriesByTag');
  }

  getSeriesByTagFunc() {
    const seriesByTagFuncIndex = this.getSeriesByTagFuncIndex();

    if (seriesByTagFuncIndex >= 0) {
      return this.functions[seriesByTagFuncIndex];
    } else {
      return undefined;
    }
  }

  addTag(tag) {
    const newTagParam = renderTagString(tag);
    this.getSeriesByTagFunc().params.push(newTagParam);
    this.tags.push(tag);
  }

  removeTag(index) {
    this.getSeriesByTagFunc().params.splice(index, 1);
    this.tags.splice(index, 1);
  }

  updateTag(tag, tagIndex) {
    this.error = null;

    if (tag.key === this.removeTagValue) {
      this.removeTag(tagIndex);

      if (this.tags.length === 0) {
        this.removeFunction(this.getSeriesByTagFunc());
        this.checkOtherSegmentsIndex = 0;
        this.seriesByTagUsed = false;
      }

      return;
    }

    this.getSeriesByTagFunc().params[tagIndex] = renderTagString(tag);
    this.tags[tagIndex] = tag;
  }

  renderTagExpressions(excludeIndex = -1) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.compact)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.tags, (tagExpr, index) => {
      // Don't render tag that we want to lookup
      if (index !== excludeIndex) {
        return tagExpr.key + tagExpr.operator + tagExpr.value;
      } else {
        return undefined;
      }
    }));
  }

}
GraphiteQuery.$inject = ["datasource", "target", "templateSrv", "scopedVars"];

function renderTagString(tag) {
  return tag.key + tag.operator + tag.value;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/lexer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": () => (/* binding */ Lexer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // This is auto generated from the unicode tables.
// The tables are at:
// http://www.fileformat.info/info/unicode/category/Lu/list.htm
// http://www.fileformat.info/info/unicode/category/Ll/list.htm
// http://www.fileformat.info/info/unicode/category/Lt/list.htm
// http://www.fileformat.info/info/unicode/category/Lm/list.htm
// http://www.fileformat.info/info/unicode/category/Lo/list.htm
// http://www.fileformat.info/info/unicode/category/Nl/list.htm

const unicodeLetterTable = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774, 1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969, 1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088, 2088, 2112, 2136, 2308, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2417, 2423, 2425, 2431, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3133, 3160, 3161, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3261, 3261, 3294, 3294, 3296, 3297, 3313, 3314, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3424, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3805, 3840, 3840, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186, 4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293, 4304, 4346, 4348, 4348, 4352, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6000, 6016, 6067, 6103, 6103, 6108, 6108, 6176, 6263, 6272, 6312, 6314, 6314, 6320, 6389, 6400, 6428, 6480, 6509, 6512, 6516, 6528, 6571, 6593, 6599, 6656, 6678, 6688, 6740, 6823, 6823, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7104, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7401, 7404, 7406, 7409, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11520, 11557, 11568, 11621, 11631, 11631, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11823, 11823, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 13312, 19893, 19893, 19968, 19968, 40907, 40907, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42647, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42897, 42912, 42921, 43002, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43648, 43695, 43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739, 43741, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44002, 44032, 44032, 55203, 55203, 55216, 55238, 55243, 55291, 63744, 64045, 64048, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65536, 65547, 65549, 65574, 65576, 65594, 65596, 65597, 65599, 65613, 65616, 65629, 65664, 65786, 65856, 65908, 66176, 66204, 66208, 66256, 66304, 66334, 66352, 66378, 66432, 66461, 66464, 66499, 66504, 66511, 66513, 66517, 66560, 66717, 67584, 67589, 67592, 67592, 67594, 67637, 67639, 67640, 67644, 67644, 67647, 67669, 67840, 67861, 67872, 67897, 68096, 68096, 68112, 68115, 68117, 68119, 68121, 68147, 68192, 68220, 68352, 68405, 68416, 68437, 68448, 68466, 68608, 68680, 69635, 69687, 69763, 69807, 73728, 74606, 74752, 74850, 77824, 78894, 92160, 92728, 110592, 110593, 119808, 119892, 119894, 119964, 119966, 119967, 119970, 119970, 119973, 119974, 119977, 119980, 119982, 119993, 119995, 119995, 119997, 120003, 120005, 120069, 120071, 120074, 120077, 120084, 120086, 120092, 120094, 120121, 120123, 120126, 120128, 120132, 120134, 120134, 120138, 120144, 120146, 120485, 120488, 120512, 120514, 120538, 120540, 120570, 120572, 120596, 120598, 120628, 120630, 120654, 120656, 120686, 120688, 120712, 120714, 120744, 120746, 120770, 120772, 120779, 131072, 131072, 173782, 173782, 173824, 173824, 177972, 177972, 177984, 177984, 178205, 178205, 194560, 195101];
const identifierStartTable = [];

for (let i = 0; i < 128; i++) {
  identifierStartTable[i] = i >= 48 && i <= 57 || // 0-9
  i === 36 || // $
  i === 126 || // ~
  i === 124 || // |
  i >= 65 && i <= 90 || // A-Z
  i === 95 || // _
  i === 45 || // -
  i === 42 || // *
  i === 58 || // :
  i === 91 || // templateStart [
  i === 93 || // templateEnd ]
  i === 63 || // ?
  i === 37 || // %
  i === 35 || // #
  i === 61 || // =
  i >= 97 && i <= 122; // a-z
}

const identifierPartTable = identifierStartTable;
class Lexer {
  constructor(expression) {
    _defineProperty(this, "input", void 0);

    _defineProperty(this, "char", void 0);

    _defineProperty(this, "from", void 0);

    this.input = expression;
    this.char = 1;
    this.from = 1;
  }

  peek(i) {
    return this.input.charAt(i || 0);
  }

  skip(i) {
    i = i || 1;
    this.char += i;
    this.input = this.input.slice(i);
  }

  tokenize() {
    const list = [];
    let token = this.next();

    while (token) {
      list.push(token);
      token = this.next();
    }

    return list;
  }

  next() {
    this.from = this.char; // Move to the next non-space character.

    if (/\s/.test(this.peek())) {
      while (/\s/.test(this.peek())) {
        this.from += 1;
        this.skip();
      }

      if (this.peek() === '') {
        // EOL
        return null;
      }
    }

    let match = this.scanStringLiteral();

    if (match) {
      return match;
    }

    match = this.scanPunctuator() || this.scanNumericLiteral() || this.scanIdentifier() || this.scanTemplateSequence();

    if (match) {
      this.skip(match.value.length);
      return match;
    } // No token could be matched, give up.


    return null;
  }

  scanTemplateSequence() {
    if (this.peek() === '[' && this.peek(1) === '[') {
      return {
        type: 'templateStart',
        value: '[[',
        pos: this.char
      };
    }

    if (this.peek() === ']' && this.peek(1) === ']') {
      return {
        type: 'templateEnd',
        value: '[[',
        pos: this.char
      };
    }

    return null;
  }
  /*
   * Extract a JavaScript identifier out of the next sequence of
   * characters or return 'null' if its not possible. In addition,
   * to Identifier this method can also produce BooleanLiteral
   * (true/false) and NullLiteral (null).
   */


  scanIdentifier() {
    let id = '';
    let index = 0;
    let type, char; // Detects any character in the Unicode categories "Uppercase
    // letter (Lu)", "Lowercase letter (Ll)", "Titlecase letter
    // (Lt)", "Modifier letter (Lm)", "Other letter (Lo)", or
    // "Letter number (Nl)".
    //
    // Both approach and unicodeLetterTable were borrowed from
    // Google's Traceur.

    function isUnicodeLetter(code) {
      for (let i = 0; i < unicodeLetterTable.length;) {
        if (code < unicodeLetterTable[i++]) {
          return false;
        }

        if (code <= unicodeLetterTable[i++]) {
          return true;
        }
      }

      return false;
    }

    function isHexDigit(str) {
      return /^[0-9a-fA-F]$/.test(str);
    }

    const readUnicodeEscapeSequence = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function () {
      index += 1;

      if (this.peek(index) !== 'u') {
        return null;
      }

      const ch1 = this.peek(index + 1);
      const ch2 = this.peek(index + 2);
      const ch3 = this.peek(index + 3);
      const ch4 = this.peek(index + 4);
      let code;

      if (isHexDigit(ch1) && isHexDigit(ch2) && isHexDigit(ch3) && isHexDigit(ch4)) {
        code = parseInt(ch1 + ch2 + ch3 + ch4, 16);

        if (isUnicodeLetter(code)) {
          index += 5;
          return '\\u' + ch1 + ch2 + ch3 + ch4;
        }

        return null;
      }

      return null;
    }, this);
    const getIdentifierStart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function () {
      const chr = this.peek(index);
      const code = chr.charCodeAt(0);

      if (chr === '*') {
        index += 1;
        return chr;
      }

      if (code === 92) {
        return readUnicodeEscapeSequence();
      }

      if (code < 128) {
        if (identifierStartTable[code]) {
          index += 1;
          return chr;
        }

        return null;
      }

      if (isUnicodeLetter(code)) {
        index += 1;
        return chr;
      }

      return null;
    }, this);
    const getIdentifierPart = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.bind)(function () {
      const chr = this.peek(index);
      const code = chr.charCodeAt(0);

      if (code === 92) {
        return readUnicodeEscapeSequence();
      }

      if (code < 128) {
        if (identifierPartTable[code]) {
          index += 1;
          return chr;
        }

        return null;
      }

      if (isUnicodeLetter(code)) {
        index += 1;
        return chr;
      }

      return null;
    }, this);
    char = getIdentifierStart();

    if (char === null) {
      return null;
    }

    id = char;

    for (;;) {
      char = getIdentifierPart();

      if (char === null) {
        break;
      }

      id += char;
    }

    switch (id) {
      case 'true':
        {
          type = 'bool';
          break;
        }

      case 'false':
        {
          type = 'bool';
          break;
        }

      default:
        type = 'identifier';
    }

    return {
      type: type,
      value: id,
      pos: this.char
    };
  }
  /*
   * Extract a numeric literal out of the next sequence of
   * characters or return 'null' if its not possible. This method
   * supports all numeric literals described in section 7.8.3
   * of the EcmaScript 5 specification.
   *
   * This method's implementation was heavily influenced by the
   * scanNumericLiteral function in the Esprima parser's source code.
   */


  scanNumericLiteral() {
    let index = 0;
    let value = '';
    const length = this.input.length;
    let char = this.peek(index);
    let bad;

    function isDecimalDigit(str) {
      return /^[0-9]$/.test(str);
    }

    function isOctalDigit(str) {
      return /^[0-7]$/.test(str);
    }

    function isHexDigit(str) {
      return /^[0-9a-fA-F]$/.test(str);
    }

    function isIdentifierStart(ch) {
      return ch === '$' || ch === '_' || ch === '\\' || ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z';
    } // handle negative num literals


    if (char === '-') {
      value += char;
      index += 1;
      char = this.peek(index);
    } // Numbers must start either with a decimal digit or a point.


    if (char !== '.' && !isDecimalDigit(char)) {
      return null;
    }

    if (char !== '.') {
      value += this.peek(index);
      index += 1;
      char = this.peek(index);

      if (value === '0') {
        // Base-16 numbers.
        if (char === 'x' || char === 'X') {
          index += 1;
          value += char;

          while (index < length) {
            char = this.peek(index);

            if (!isHexDigit(char)) {
              break;
            }

            value += char;
            index += 1;
          }

          if (value.length <= 2) {
            // 0x
            return {
              type: 'number',
              value: value,
              isMalformed: true,
              pos: this.char
            };
          }

          if (index < length) {
            char = this.peek(index);

            if (isIdentifierStart(char)) {
              return null;
            }
          }

          return {
            type: 'number',
            value: value,
            base: 16,
            isMalformed: false,
            pos: this.char
          };
        } // Base-8 numbers.


        if (isOctalDigit(char)) {
          index += 1;
          value += char;
          bad = false;

          while (index < length) {
            char = this.peek(index); // Numbers like '019' (note the 9) are not valid octals
            // but we still parse them and mark as malformed.

            if (isDecimalDigit(char)) {
              bad = true;
            }

            if (!isOctalDigit(char)) {
              // if the char is a non punctuator then its not a valid number
              if (!this.isPunctuator(char)) {
                return null;
              }

              break;
            }

            value += char;
            index += 1;
          }

          if (index < length) {
            char = this.peek(index);

            if (isIdentifierStart(char)) {
              return null;
            }
          }

          return {
            type: 'number',
            value: value,
            base: 8,
            isMalformed: bad
          };
        } // Decimal numbers that start with '0' such as '09' are illegal
        // but we still parse them and return as malformed.


        if (isDecimalDigit(char)) {
          index += 1;
          value += char;
        }
      }

      while (index < length) {
        char = this.peek(index);

        if (!isDecimalDigit(char)) {
          break;
        }

        value += char;
        index += 1;
      }
    } // Decimal digits.


    if (char === '.') {
      value += char;
      index += 1;

      while (index < length) {
        char = this.peek(index);

        if (!isDecimalDigit(char)) {
          break;
        }

        value += char;
        index += 1;
      }
    } // Exponent part.


    if (char === 'e' || char === 'E') {
      value += char;
      index += 1;
      char = this.peek(index);

      if (char === '+' || char === '-') {
        value += this.peek(index);
        index += 1;
      }

      char = this.peek(index);

      if (isDecimalDigit(char)) {
        value += char;
        index += 1;

        while (index < length) {
          char = this.peek(index);

          if (!isDecimalDigit(char)) {
            break;
          }

          value += char;
          index += 1;
        }
      } else {
        return null;
      }
    }

    if (index < length) {
      char = this.peek(index);

      if (!this.isPunctuator(char)) {
        return null;
      }
    }

    return {
      type: 'number',
      value: value,
      base: 10,
      pos: this.char,
      isMalformed: !isFinite(+value)
    };
  }

  isPunctuator(ch1) {
    switch (ch1) {
      case '.':
      case '(':
      case ')':
      case ',':
      case '{':
      case '}':
        return true;
    }

    return false;
  }

  scanPunctuator() {
    const ch1 = this.peek();

    if (this.isPunctuator(ch1)) {
      return {
        type: ch1,
        value: ch1,
        pos: this.char
      };
    }

    return null;
  }
  /*
   * Extract a string out of the next sequence of characters and/or
   * lines or return 'null' if its not possible. Since strings can
   * span across multiple lines this method has to move the char
   * pointer.
   *
   * This method recognizes pseudo-multiline JavaScript strings:
   *
   *   var str = "hello\
   *   world";
   */


  scanStringLiteral() {
    const quote = this.peek(); // String must start with a quote.

    if (quote !== '"' && quote !== "'") {
      return null;
    }

    let value = '';
    this.skip();

    while (this.peek() !== quote) {
      if (this.peek() === '') {
        // End Of Line
        return {
          type: 'string',
          value: value,
          isUnclosed: true,
          quote: quote,
          pos: this.char
        };
      }

      const char = this.peek();
      const jump = 1; // A length of a jump, after we're done
      // parsing this character.

      value += char;
      this.skip(jump);
    }

    this.skip();
    return {
      type: 'string',
      value: value,
      isUnclosed: false,
      quote: quote,
      pos: this.char
    };
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/meta.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRollupNotice": () => (/* binding */ getRollupNotice),
/* harmony export */   "getRuntimeConsolidationNotice": () => (/* binding */ getRuntimeConsolidationNotice),
/* harmony export */   "parseSchemaRetentions": () => (/* binding */ parseSchemaRetentions)
/* harmony export */ });
// https://github.com/grafana/metrictank/blob/master/scripts/config/storage-schemas.conf#L15-L46
function toInteger(val) {
  if (val) {
    return parseInt(val, 10);
  }

  return undefined;
}

function toBooleanOrTimestamp(val) {
  if (val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    return parseInt(val, 10);
  }

  return undefined;
}

function getRollupNotice(metaList) {
  for (const meta of metaList) {
    const archiveIndex = meta['archive-read'];

    if (archiveIndex > 0) {
      var _meta$consolidatorNo;

      const schema = parseSchemaRetentions(meta['schema-retentions']);
      const intervalString = schema[archiveIndex].interval;
      const func = ((_meta$consolidatorNo = meta['consolidator-normfetch']) !== null && _meta$consolidatorNo !== void 0 ? _meta$consolidatorNo : '').replace('Consolidator', '');
      return {
        text: `Data is rolled up, aggregated over ${intervalString} using ${func} function`,
        severity: 'info',
        inspect: 'meta'
      };
    }
  }

  return null;
}
function getRuntimeConsolidationNotice(metaList) {
  for (const meta of metaList) {
    const runtimeNr = meta['aggnum-rc'];

    if (runtimeNr > 0) {
      var _meta$consolidatorRc;

      const func = ((_meta$consolidatorRc = meta['consolidator-rc']) !== null && _meta$consolidatorRc !== void 0 ? _meta$consolidatorRc : '').replace('Consolidator', '');
      return {
        text: `Data is runtime consolidated, ${runtimeNr} datapoints combined using ${func} function`,
        severity: 'info',
        inspect: 'meta'
      };
    }
  }

  return null;
}
function parseSchemaRetentions(spec) {
  if (!spec) {
    return [];
  }

  return spec.split(',').map(str => {
    const vals = str.split(':');
    return {
      interval: vals[0],
      retention: vals[1],
      chunkspan: vals[2],
      numchunks: toInteger(vals[3]),
      ready: toBooleanOrTimestamp(vals[4])
    };
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_GraphiteQueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/GraphiteQueryEditor.tsx");
/* harmony import */ var _components_MetricTankMetaInspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/MetricTankMetaInspector.tsx");
/* harmony import */ var _configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/configuration/ConfigEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/graphite/datasource.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AnnotationsQueryCtrl {}

_defineProperty(AnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_4__.GraphiteDatasource).setQueryEditor(_components_GraphiteQueryEditor__WEBPACK_IMPORTED_MODULE_1__.GraphiteQueryEditor).setConfigEditor(_configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setMetadataInspector(_components_MetricTankMetaInspector__WEBPACK_IMPORTED_MODULE_2__.MetricTankMetaInspector).setAnnotationQueryCtrl(AnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parser": () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/graphite/lexer.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/utils.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Parser {
  constructor(expression) {
    _defineProperty(this, "expression", void 0);

    _defineProperty(this, "lexer", void 0);

    _defineProperty(this, "tokens", void 0);

    _defineProperty(this, "index", void 0);

    this.expression = expression;
    this.lexer = new _lexer__WEBPACK_IMPORTED_MODULE_0__.Lexer(expression);
    this.tokens = this.lexer.tokenize();
    this.index = 0;
  }

  getAst() {
    return this.start();
  }

  start() {
    try {
      return this.functionCall() || this.metricExpression();
    } catch (e) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isGraphiteParserError)(e)) {
        return {
          type: 'error',
          message: e.message,
          pos: e.pos
        };
      }
    }
  }

  curlyBraceSegment() {
    if (this.match('identifier', '{') || this.match('{')) {
      let curlySegment = '';

      while (!this.match('') && !this.match('}')) {
        curlySegment += this.consumeToken().value;
      }

      if (!this.match('}')) {
        this.errorMark("Expected closing '}'");
      }

      curlySegment += this.consumeToken().value; // if curly segment is directly followed by identifier
      // include it in the segment

      if (this.match('identifier')) {
        curlySegment += this.consumeToken().value;
      }

      return {
        type: 'segment',
        value: curlySegment
      };
    } else {
      return null;
    }
  }

  metricSegment() {
    const curly = this.curlyBraceSegment();

    if (curly) {
      return curly;
    }

    if (this.match('identifier') || this.match('number')) {
      // hack to handle float numbers in metric segments
      const parts = this.consumeToken().value.split('.');

      if (parts.length === 2) {
        this.tokens.splice(this.index, 0, {
          type: '.'
        });
        this.tokens.splice(this.index + 1, 0, {
          type: 'number',
          value: parts[1]
        });
      }

      return {
        type: 'segment',
        value: parts[0]
      };
    }

    if (!this.match('templateStart')) {
      this.errorMark('Expected metric identifier');
    }

    this.consumeToken();

    if (!this.match('identifier')) {
      this.errorMark('Expected identifier after templateStart');
    }

    const node = {
      type: 'template',
      value: this.consumeToken().value
    };

    if (!this.match('templateEnd')) {
      this.errorMark('Expected templateEnd');
    }

    this.consumeToken();
    return node;
  }

  metricExpression() {
    if (!this.match('templateStart') && !this.match('identifier') && !this.match('number') && !this.match('{')) {
      return null;
    }

    const node = {
      type: 'metric',
      segments: []
    };
    node.segments.push(this.metricSegment());

    while (this.match('.')) {
      this.consumeToken();
      const segment = this.metricSegment();

      if (!segment) {
        this.errorMark('Expected metric identifier');
      }

      node.segments.push(segment);
    }

    return node;
  }

  functionCall() {
    if (!this.match('identifier', '(')) {
      return null;
    }

    const node = {
      type: 'function',
      name: this.consumeToken().value
    }; // consume left parenthesis

    this.consumeToken();
    node.params = this.functionParameters();

    if (!this.match(')')) {
      this.errorMark('Expected closing parenthesis');
    }

    this.consumeToken();
    return node;
  }

  boolExpression() {
    if (!this.match('bool')) {
      return null;
    }

    return {
      type: 'bool',
      value: this.consumeToken().value === 'true'
    };
  }

  functionParameters() {
    if (this.match(')') || this.match('')) {
      return [];
    }

    const param = this.functionCall() || this.numericLiteral() || this.seriesRefExpression() || this.boolExpression() || this.metricExpression() || this.stringLiteral();

    if (!this.match(',')) {
      return [param];
    }

    this.consumeToken();
    return [param].concat(this.functionParameters());
  }

  seriesRefExpression() {
    if (!this.match('identifier')) {
      return null;
    }

    const value = this.tokens[this.index].value;

    if (!value.match(/\#[A-Z]/)) {
      return null;
    }

    const token = this.consumeToken();
    return {
      type: 'series-ref',
      value: token.value
    };
  }

  numericLiteral() {
    if (!this.match('number')) {
      return null;
    }

    return {
      type: 'number',
      value: parseFloat(this.consumeToken().value)
    };
  }

  stringLiteral() {
    if (!this.match('string')) {
      return null;
    }

    const token = this.consumeToken();

    if (token.isUnclosed) {
      const error = {
        message: 'Unclosed string parameter',
        pos: token.pos
      };
      throw error;
    }

    return {
      type: 'string',
      value: token.value
    };
  }

  errorMark(text) {
    const currentToken = this.tokens[this.index];
    const type = currentToken ? currentToken.type : 'end of string';
    const error = {
      message: text + ' instead found ' + type,
      pos: currentToken ? currentToken.pos : this.lexer.char
    };
    throw error;
  } // returns token value and incre


  consumeToken() {
    this.index++;
    return this.tokens[this.index - 1];
  }

  matchToken(type, index) {
    const token = this.tokens[this.index + index];
    return token === undefined && type === '' || token && token.type === type;
  }

  match(token1, token2) {
    return this.matchToken(token1, 0) && (!token2 || this.matchToken(token2, 1));
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-6cd1e25811/0/cache/@reduxjs-toolkit-npm-1.8.1-cf386ae48d-be5cdea975.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


/**
 * List of possible actions changing the state of QueryEditor
 */
const init = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('init');
/**
 * Synchronise editor dependencies with internal state.
 */

const timeRangeChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('time-range-changed');
const queriesChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('queries-changed');
const queryChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('query-changed'); // Metrics & Tags

const segmentValueChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('segment-value-changed'); // Tags

const addNewTag = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('add-new-tag');
const tagChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('tag-changed');
const unpause = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('unpause'); // Functions

const addFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('add-function');
const removeFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('remove-function');
const moveFunction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('move-function');
const updateFunctionParam = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('change-function-param'); // Text editor

const updateQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('update-query');
const runQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('run-current-query');
const toggleEditorMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('toggle-editor');
const actions = {
  init,
  timeRangeChanged,
  queriesChanged,
  queryChanged,
  segmentValueChanged,
  tagChanged,
  addNewTag,
  unpause,
  addFunction,
  removeFunction,
  moveFunction,
  updateFunctionParam,
  updateQuery,
  runQuery,
  toggleEditorMode
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/context.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteQueryEditorContext": () => (/* binding */ GraphiteQueryEditorContext),
/* harmony export */   "useDispatch": () => (/* binding */ useDispatch),
/* harmony export */   "useGraphiteState": () => (/* binding */ useGraphiteState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/store.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const DispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const GraphiteStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useDispatch = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DispatchContext);
};
const useGraphiteState = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GraphiteStateContext);
};
const GraphiteQueryEditorContext = ({
  datasource,
  onRunQuery,
  onChange,
  query,
  queries,
  range,
  children
}) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [needsRefresh, setNeedsRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,_store__WEBPACK_IMPORTED_MODULE_3__.createStore)(state => {
      setState(state);
    });
  }, []); // synchronise changes provided in props with editor's state

  const previousRange = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(range);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((previousRange === null || previousRange === void 0 ? void 0 : previousRange.raw) !== (range === null || range === void 0 ? void 0 : range.raw)) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.timeRangeChanged(range));
    }
  }, [dispatch, range, previousRange]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (state) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queriesChanged(queries));
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, queries]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _state$target;

    if (state && ((_state$target = state.target) === null || _state$target === void 0 ? void 0 : _state$target.target) !== query.target) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queryChanged(query));
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (needsRefresh && state) {
      setNeedsRefresh(false);
      onChange(Object.assign({}, query, {
        target: state.target.target
      }));
      onRunQuery();
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [needsRefresh, onChange, onRunQuery, query]);

  if (!state) {
    dispatch(_actions__WEBPACK_IMPORTED_MODULE_2__.actions.init({
      target: query,
      datasource: datasource,
      range: range,
      templateSrv: (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)(),
      // list of queries is passed only when the editor is in Dashboards. This is to allow interpolation
      // of sub-queries which are stored in "targetFull" property used by alerting in the backend.
      queries: queries || [],
      refresh: () => {
        // do not run onChange/onRunQuery straight away to ensure the internal state gets updated first
        // to avoid race conditions (onChange could update props before the reducer action finishes)
        setNeedsRefresh(true);
      }
    }));
    return null;
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GraphiteStateContext.Provider, {
      value: state,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DispatchContext.Provider, {
        value: dispatch,
        children: children
      })
    });
  }
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRAPHITE_TAG_OPERATORS": () => (/* binding */ GRAPHITE_TAG_OPERATORS),
/* harmony export */   "TAG_PREFIX": () => (/* binding */ TAG_PREFIX),
/* harmony export */   "addSelectMetricSegment": () => (/* binding */ addSelectMetricSegment),
/* harmony export */   "addSeriesByTagFunc": () => (/* binding */ addSeriesByTagFunc),
/* harmony export */   "buildSegments": () => (/* binding */ buildSegments),
/* harmony export */   "checkOtherSegments": () => (/* binding */ checkOtherSegments),
/* harmony export */   "emptySegments": () => (/* binding */ emptySegments),
/* harmony export */   "handleMetricsAutoCompleteError": () => (/* binding */ handleMetricsAutoCompleteError),
/* harmony export */   "handleTagsAutoCompleteError": () => (/* binding */ handleTagsAutoCompleteError),
/* harmony export */   "handleTargetChanged": () => (/* binding */ handleTargetChanged),
/* harmony export */   "parseTarget": () => (/* binding */ parseTarget),
/* harmony export */   "pause": () => (/* binding */ pause),
/* harmony export */   "removeTagPrefix": () => (/* binding */ removeTagPrefix),
/* harmony export */   "smartlyHandleNewAliasByNode": () => (/* binding */ smartlyHandleNewAliasByNode),
/* harmony export */   "spliceSegments": () => (/* binding */ spliceSegments)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/store/store.ts");





/**
 * Helpers used by reducers and providers. They modify state object directly so should operate on a copy of the state.
 */
const GRAPHITE_TAG_OPERATORS = ['=', '!=', '=~', '!=~'];
/**
 * Tag names and metric names are displayed in a single dropdown. This prefix is used to
 * distinguish both in the UI.
 */

const TAG_PREFIX = 'tag: ';
/**
 * Create new AST based on new query.
 * Build segments from parsed metric name and functions.
 */

async function parseTarget(state) {
  state.queryModel.parseTarget();
  await buildSegments(state);
}
/**
 * Create segments out of the current metric path + add "select metrics" if it's possible to add more to the path
 */

async function buildSegments(state, modifyLastSegment = true) {
  // Start with a shallow copy from the model, then check if "select metric" segment should be added at the end
  state.segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(state.queryModel.segments);
  const checkOtherSegmentsIndex = state.queryModel.checkOtherSegmentsIndex || 0;
  await checkOtherSegments(state, checkOtherSegmentsIndex, modifyLastSegment);
}
/**
 * Add "select metric" segment at the end
 */

function addSelectMetricSegment(state) {
  state.queryModel.addSelectMetricSegment();
  state.segments.push({
    value: 'select metric',
    fake: true
  });
}
/**
 * Validates the state after adding or changing a segment:
 * - adds "select metric" only when more segments can be added to the metric name
 * - check if subsequent segments are still valid if in-between segment changes and
 *   removes invalid segments.
 */

async function checkOtherSegments(state, fromIndex, modifyLastSegment = true) {
  if (state.queryModel.segments.length === 1 && state.queryModel.segments[0].type === 'series-ref') {
    return;
  }

  if (fromIndex === 0) {
    addSelectMetricSegment(state);
    return;
  }

  const path = state.queryModel.getSegmentPathUpTo(fromIndex + 1);

  if (path === '') {
    return;
  }

  try {
    const segments = await state.datasource.metricFindQuery(path);

    if (segments.length === 0) {
      if (path !== '' && modifyLastSegment) {
        state.queryModel.segments = state.queryModel.segments.splice(0, fromIndex);
        state.segments = state.segments.splice(0, fromIndex);
        addSelectMetricSegment(state);
      }
    } else if (segments[0].expandable) {
      if (state.segments.length === fromIndex) {
        addSelectMetricSegment(state);
      } else {
        await checkOtherSegments(state, fromIndex + 1);
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      handleMetricsAutoCompleteError(state, err);
    }
  }
}
function spliceSegments(state, index) {
  state.segments = state.segments.splice(0, index);
  state.queryModel.segments = state.queryModel.segments.splice(0, index);
}
function emptySegments(state) {
  state.queryModel.segments = [];
  state.segments = [];
}
/**
 * When seriesByTag function is added the UI changes it's state and only tags can be added from now.
 */

async function addSeriesByTagFunc(state, tag) {
  const newFunc = state.datasource.createFuncInstance('seriesByTag', {
    withDefaultParams: false
  });
  const tagParam = `${tag}=`;
  newFunc.params = [tagParam];
  state.queryModel.addFunction(newFunc);
  newFunc.added = true;
  emptySegments(state);
  handleTargetChanged(state);
  await parseTarget(state);
}
function smartlyHandleNewAliasByNode(state, func) {
  if (func.def.name !== 'aliasByNode') {
    return;
  }

  for (let i = 0; i < state.segments.length; i++) {
    if (state.segments[i].value.indexOf('*') >= 0) {
      func.params[0] = i;
      func.added = false;
      handleTargetChanged(state);
      return;
    }
  }
}
/**
 * Pauses running the query to allow selecting tag value. This is to prevent getting errors if the query is run
 * for a tag with no selected value.
 */

function pause(state) {
  state.paused = true;
}
function removeTagPrefix(value) {
  return value.replace(TAG_PREFIX, '');
}
function handleTargetChanged(state) {
  if (state.queryModel.error) {
    return;
  }

  const oldTarget = state.queryModel.target.target; // Interpolate from other queries:
  // Because of mixed data sources the list may contain queries for non-Graphite data sources. To ensure a valid query
  // is used for interpolation we should check required properties are passed though in theory it allows to interpolate
  // with queries that contain "target" property as well.

  state.queryModel.updateModelTarget((state.queries || []).filter(query => 'target' in query && typeof query.target === 'string'));

  if (state.queryModel.target.target !== oldTarget && !state.paused) {
    state.refresh();
  }
}
/**
 * When metrics autocomplete fails - the error is shown, but only once per page view
 */

function handleMetricsAutoCompleteError(state, error) {
  if (!state.metricAutoCompleteErrorShown) {
    state.metricAutoCompleteErrorShown = true;
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_1__.createErrorNotification)(`Fetching metrics failed: ${error.message}.`)));
  }

  return state;
}
/**
 * When tags autocomplete fails - the error is shown, but only once per page view
 */

function handleTagsAutoCompleteError(state, error) {
  if (!state.tagsAutoCompleteErrorShown) {
    state.tagsAutoCompleteErrorShown = true;
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_1__.createErrorNotification)(`Fetching tags failed: ${error.message}.`)));
  }

  return state;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/providers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAltSegmentsSelectables": () => (/* binding */ getAltSegmentsSelectables),
/* harmony export */   "getTagOperatorsSelectables": () => (/* binding */ getTagOperatorsSelectables),
/* harmony export */   "getTagValuesSelectables": () => (/* binding */ getTagValuesSelectables),
/* harmony export */   "getTagsAsSegmentsSelectables": () => (/* binding */ getTagsAsSegmentsSelectables),
/* harmony export */   "getTagsSelectables": () => (/* binding */ getTagsSelectables)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/components/helpers.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/helpers.ts");




/**
 * All auto-complete lists are updated while typing. To avoid performance issues we do not render more
 * than MAX_SUGGESTIONS limits in a single dropdown.
 *
 * MAX_SUGGESTIONS is per metrics and tags separately. On the very first dropdown where metrics and tags are
 * combined together meaning it may end up with max of 2 * MAX_SUGGESTIONS items in total.
 */
const MAX_SUGGESTIONS = 5000;
/**
 * Providers are hooks for views to provide temporal data for autocomplete. They don't modify the state.
 */

/**
 * Return list of available options for a segment with given index
 *
 * It may be:
 * - mixed list of metrics and tags (only when nothing was selected)
 * - list of metric names (if a metric name was selected for this segment)
 */

async function getAltSegments(state, index, prefix) {
  let query = prefix.length > 0 ? '*' + prefix + '*' : '*';

  if (index > 0) {
    query = state.queryModel.getSegmentPathUpTo(index) + '.' + query;
  }

  const options = {
    range: state.range,
    requestId: 'get-alt-segments'
  };

  try {
    const segments = await state.datasource.metricFindQuery(query, options);
    const altSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(segments, segment => {
      return {
        value: segment.text,
        expandable: segment.expandable
      };
    });

    if (index > 0 && altSegments.length === 0) {
      return altSegments;
    } // add query references


    if (index === 0) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.queries, target => {
        if (target.refId === state.queryModel.target.refId) {
          return;
        }

        altSegments.unshift({
          type: 'series-ref',
          value: '#' + target.refId,
          expandable: false
        });
      });
    } // add template variables


    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.templateSrv.getVariables(), variable => {
      altSegments.unshift({
        type: 'template',
        value: '$' + variable.name,
        expandable: true
      });
    }); // add wildcard option and limit number of suggestions (API doesn't support limiting
    // hence we are doing it here)

    altSegments.unshift({
      value: '*',
      expandable: true
    });
    altSegments.splice(MAX_SUGGESTIONS);

    if (state.supportsTags && index === 0) {
      removeTaggedEntry(altSegments);
      return await addAltTagSegments(state, prefix, altSegments);
    } else {
      return altSegments;
    }
  } catch (err) {
    if (err instanceof Error) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleMetricsAutoCompleteError)(state, err);
    }
  }

  return [];
}
/**
 * Get the list of segments with tags and metrics. Suggestions are reduced in getAltSegments and addAltTagSegments so in case
 * we hit MAX_SUGGESTIONS limit there are always some tags and metrics shown.
 */


async function getAltSegmentsSelectables(state, index, prefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapSegmentsToSelectables)(await getAltSegments(state, index, prefix));
}
function getTagOperatorsSelectables() {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapStringsToSelectables)(_helpers__WEBPACK_IMPORTED_MODULE_2__.GRAPHITE_TAG_OPERATORS);
}
/**
 * Returns tags as dropdown options
 */

async function getTags(state, index, tagPrefix) {
  try {
    const tagExpressions = state.queryModel.renderTagExpressions(index);
    const values = await state.datasource.getTagsAutoComplete(tagExpressions, tagPrefix, {
      range: state.range,
      limit: MAX_SUGGESTIONS
    });
    const altTags = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, 'text');
    altTags.splice(0, 0, state.removeTagValue);
    return altTags;
  } catch (err) {
    if (err instanceof Error) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTagsAutoCompleteError)(state, err);
    }
  }

  return [];
}

async function getTagsSelectables(state, index, tagPrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapStringsToSelectables)(await getTags(state, index, tagPrefix));
}
/**
 * List of tags when a tag is added. getTags is used for editing.
 * When adding - segment is used. When editing - dropdown is used.
 */

async function getTagsAsSegments(state, tagPrefix) {
  let tagsAsSegments;

  try {
    const tagExpressions = state.queryModel.renderTagExpressions();
    const values = await state.datasource.getTagsAutoComplete(tagExpressions, tagPrefix, {
      range: state.range,
      limit: MAX_SUGGESTIONS
    });
    tagsAsSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, val => {
      return {
        value: val.text,
        type: 'tag',
        expandable: false
      };
    });
  } catch (err) {
    tagsAsSegments = [];

    if (err instanceof Error) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.handleTagsAutoCompleteError)(state, err);
    }
  }

  return tagsAsSegments;
}
/**
 * Get list of tags, used when adding additional tags (first tag is selected from a joined list of metrics and tags)
 */


async function getTagsAsSegmentsSelectables(state, tagPrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapSegmentsToSelectables)(await getTagsAsSegments(state, tagPrefix));
}

async function getTagValues(state, tag, index, valuePrefix) {
  const tagExpressions = state.queryModel.renderTagExpressions(index);
  const tagKey = tag.key;
  const values = await state.datasource.getTagValuesAutoComplete(tagExpressions, tagKey, valuePrefix, {
    limit: MAX_SUGGESTIONS
  });
  const altValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(values, 'text'); // Add template variables as additional values

  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.eachRight)(state.templateSrv.getVariables(), variable => {
    altValues.push('${' + variable.name + ':regex}');
  });
  return altValues;
}

async function getTagValuesSelectables(state, tag, index, valuePrefix) {
  return (0,_components_helpers__WEBPACK_IMPORTED_MODULE_1__.mapStringsToSelectables)(await getTagValues(state, tag, index, valuePrefix));
}
/**
 * Add segments with tags prefixed with "tag: " to include them in the same list as metrics
 */

async function addAltTagSegments(state, prefix, altSegments) {
  let tagSegments = await getTagsAsSegments(state, prefix);
  tagSegments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(tagSegments, segment => {
    segment.value = _helpers__WEBPACK_IMPORTED_MODULE_2__.TAG_PREFIX + segment.value;
    return segment;
  });
  return altSegments.concat(...tagSegments);
}

function removeTaggedEntry(altSegments) {
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(altSegments, s => s.value === '_tagged');
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/state/store.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _graphite_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/graphite/graphite_query.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/actions.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/graphite/state/helpers.ts");





const reducer = async (action, state) => {
  state = Object.assign({}, state);

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.init.match(action)) {
    const deps = action.payload;
    deps.target.target = deps.target.target || '';
    await deps.datasource.waitForFuncDefsLoaded();
    state = Object.assign({}, state, deps, {
      queryModel: new _graphite_query__WEBPACK_IMPORTED_MODULE_1__["default"](deps.datasource, deps.target, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)()),
      supportsTags: deps.datasource.supportsTags,
      paused: false,
      removeTagValue: '-- remove tag --',
      funcDefs: deps.datasource.funcDefs,
      queries: deps.queries
    });
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.buildSegments)(state, false);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.timeRangeChanged.match(action)) {
    state.range = action.payload;
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queriesChanged.match(action)) {
    state.queries = action.payload;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.queryChanged.match(action)) {
    state.target.target = action.payload.target || '';
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseTarget)(state);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.segmentValueChanged.match(action)) {
    const {
      segment: segmentOrString,
      index: segmentIndex
    } = action.payload;
    let segment; // is segment was changed to a string - create a new segment

    if (typeof segmentOrString === 'string') {
      segment = {
        value: segmentOrString,
        expandable: true,
        fake: false
      };
    } else {
      segment = segmentOrString;
    }

    state.error = null;
    state.segments[segmentIndex] = segment;
    state.queryModel.updateSegmentValue(segment, segmentIndex);

    if (state.queryModel.functions.length > 0 && state.queryModel.functions[0].def.fake) {
      state.queryModel.functions = [];
    }

    if (segment.type === 'tag') {
      const tag = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.removeTagPrefix)(segment.value);
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.pause)(state);
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.addSeriesByTagFunc)(state, tag);
      return state;
    } // if newly selected segment can be expanded -> check if the path is correct


    if (segment.expandable) {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.checkOtherSegments)(state, segmentIndex + 1);
    } else {
      // if not expandable -> remove all other segments
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.spliceSegments)(state, segmentIndex + 1);
    }

    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.tagChanged.match(action)) {
    const {
      tag,
      index: tagIndex
    } = action.payload;
    state.queryModel.updateTag(tag, tagIndex);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);

    if (state.queryModel.tags.length === 0) {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.checkOtherSegments)(state, 0);
      state.paused = false;
    }
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.addNewTag.match(action)) {
    const segment = action.payload.segment;
    const newTagKey = segment.value;
    const newTag = {
      key: newTagKey,
      operator: '=',
      value: ''
    };
    state.queryModel.addTag(newTag);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.unpause.match(action)) {
    state.paused = false;
    state.refresh();
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.addFunction.match(action)) {
    const newFunc = state.datasource.createFuncInstance(action.payload.name, {
      withDefaultParams: true
    });
    newFunc.added = true;
    state.queryModel.addFunction(newFunc);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.smartlyHandleNewAliasByNode)(state, newFunc);

    if (state.segments.length === 1 && state.segments[0].fake) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.emptySegments)(state);
    }

    if (!newFunc.params.length && newFunc.added) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
    }

    if (newFunc.def.name === 'seriesByTag') {
      await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseTarget)(state);
    }
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.removeFunction.match(action)) {
    state.queryModel.removeFunction(action.payload.func);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.moveFunction.match(action)) {
    const {
      func,
      offset
    } = action.payload;
    state.queryModel.moveFunction(func, offset);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.updateFunctionParam.match(action)) {
    const {
      func,
      index,
      value
    } = action.payload;
    func.updateParam(value, index);
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.updateQuery.match(action)) {
    state.target.target = action.payload.query;
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.handleTargetChanged)(state);
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.runQuery.match(action)) {
    state.refresh();
  }

  if (_actions__WEBPACK_IMPORTED_MODULE_2__.actions.toggleEditorMode.match(action)) {
    state.target.textEditor = !state.target.textEditor;
    await (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.parseTarget)(state);
  }

  return Object.assign({}, state);
};

const createStore = onChange => {
  let state = {};

  const dispatch = async action => {
    state = await reducer(action, state);
    onChange(state);
  };

  return dispatch;
};

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphiteType": () => (/* binding */ GraphiteType)
/* harmony export */ });
let GraphiteType;

(function (GraphiteType) {
  GraphiteType["Default"] = "default";
  GraphiteType["Metrictank"] = "metrictank";
})(GraphiteType || (GraphiteType = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isGraphiteParserError": () => (/* binding */ isGraphiteParserError),
/* harmony export */   "reduceError": () => (/* binding */ reduceError)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Graphite-web before v1.6 returns HTTP 500 with full stack traces in an HTML page
 * when a query fails. It results in massive error alerts with HTML tags in the UI.
 * This function removes all HTML tags and keeps only the last line from the stack
 * trace which should be the most meaningful.
 */
function reduceError(error) {
  var _error$data, _error$data$message;

  if (error && error.status === 500 && (_error$data = error.data) !== null && _error$data !== void 0 && (_error$data$message = _error$data.message) !== null && _error$data$message !== void 0 && _error$data$message.startsWith('<body')) {
    // Remove all HTML tags and take the last line from the stack trace
    const newMessage = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(error.data.message.replace(/(<([^>]+)>)/gi, '').trim().split(/\n/)).replace(/u?&#[^;]+;/g, '');
    error.data.message = `Graphite encountered an unexpected error while handling your request. ${newMessage}`;
  }

  return error;
}
function isGraphiteParserError(e) {
  return typeof e === 'object' && e !== null && 'message' in e && 'pos' in e;
}

/***/ }),

/***/ "./public/app/plugins/datasource/graphite/versions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_GRAPHITE_VERSION": () => (/* binding */ DEFAULT_GRAPHITE_VERSION),
/* harmony export */   "GRAPHITE_VERSIONS": () => (/* binding */ GRAPHITE_VERSIONS)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const GRAPHITE_VERSIONS = ['0.9', '1.0', '1.1'];
const DEFAULT_GRAPHITE_VERSION = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(GRAPHITE_VERSIONS);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtJQU1BaEUsS0FBSyxDQUFDd0YsSUFBTixDQUFXc0ssT0FBWCxHQUFzQix5RUFBd0VxWCxVQUFXLEVBQXpHO0VBQ0Q7O0VBQ0QsT0FBT25uQixLQUFQO0FBQ0Q7QUFFTSxTQUFTMmhCLHFCQUFULENBQStCdE4sQ0FBL0IsRUFBcUU7RUFDMUUsT0FBTyxPQUFPQSxDQUFQLEtBQWEsUUFBYixJQUF5QkEsQ0FBQyxLQUFLLElBQS9CLElBQXVDLGFBQWFBLENBQXBELElBQXlELFNBQVNBLENBQXpFO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDMUJEO0FBRU8sTUFBTTVKLGlCQUFpQixHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLENBQTFCO0FBRUEsTUFBTUQsd0JBQXdCLEdBQUdnTyw0Q0FBSSxDQUFDL04saUJBQUQsQ0FBckM7Ozs7Ozs7Ozs7OztBQ0ptQztBQUMzQjtBQUNmLGNBQWMsNkNBQU07QUFDcEIsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL3V0aWxzL3ZlcnNpb24udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvQWRkR3JhcGhpdGVGdW5jdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvRnVuY3Rpb25FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0Z1bmN0aW9uRWRpdG9yQ29udHJvbHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0Z1bmN0aW9uUGFyYW1FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0Z1bmN0aW9uc1NlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0dyYXBoaXRlRnVuY3Rpb25FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0dyYXBoaXRlUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL0dyYXBoaXRlVGV4dEVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvTWV0cmljU2VnbWVudC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbXBvbmVudHMvTWV0cmljVGFua01ldGFJbnNwZWN0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL01ldHJpY3NTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9QbGF5QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9TZXJpZXNTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9UYWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb21wb25lbnRzL1RhZ3NTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29tcG9uZW50cy9oZWxwZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb25maWd1cmF0aW9uL0NvbmZpZ0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2NvbmZpZ3VyYXRpb24vTWFwcGluZ3NDb25maWd1cmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvY29uZmlndXJhdGlvbi9NYXBwaW5nc0hlbHAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9jb25maWd1cmF0aW9uL3BhcnNlTG9raUxhYmVsTWFwcGluZ3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL2dmdW5jLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9ncmFwaGl0ZV9xdWVyeS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvbGV4ZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL21ldGEudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvcGFyc2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9zdGF0ZS9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvc3RhdGUvaGVscGVycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvc3RhdGUvcHJvdmlkZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9zdGF0ZS9zdG9yZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhcGhpdGUvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYXBoaXRlL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS92ZXJzaW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtY2VhOGU4MjZkYy8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuNC4wLTBlZjQ1MjE1NDQtMDg4OWRhOTE5Yi56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlUHJldmlvdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB2ZXJzaW9uUGF0dGVybiA9IC9eKFxcZCspKD86XFwuKFxcZCspKT8oPzpcXC4oXFxkKykpPyg/Oi0oWzAtOUEtWmEtelxcLl0rKSk/LztcblxuZXhwb3J0IGNsYXNzIFNlbVZlcnNpb24ge1xuICBtYWpvcjogbnVtYmVyO1xuICBtaW5vcjogbnVtYmVyO1xuICBwYXRjaDogbnVtYmVyO1xuICBtZXRhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodmVyc2lvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5tYWpvciA9IDA7XG4gICAgdGhpcy5taW5vciA9IDA7XG4gICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgdGhpcy5tZXRhID0gJyc7XG4gICAgY29uc3QgbWF0Y2ggPSB2ZXJzaW9uUGF0dGVybi5leGVjKHZlcnNpb24pO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdGhpcy5tYWpvciA9IE51bWJlcihtYXRjaFsxXSk7XG4gICAgICB0aGlzLm1pbm9yID0gTnVtYmVyKG1hdGNoWzJdIHx8IDApO1xuICAgICAgdGhpcy5wYXRjaCA9IE51bWJlcihtYXRjaFszXSB8fCAwKTtcbiAgICAgIHRoaXMubWV0YSA9IG1hdGNoWzRdO1xuICAgIH1cbiAgfVxuXG4gIGlzR3RPckVxKHZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbXBhcmVkID0gbmV3IFNlbVZlcnNpb24odmVyc2lvbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tcGFyYWJsZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRoaXMuY29tcGFyYWJsZVtpXSA+IGNvbXBhcmVkLmNvbXBhcmFibGVbaV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb21wYXJhYmxlW2ldIDwgY29tcGFyZWQuY29tcGFyYWJsZVtpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodGhpcy5tYWpvcik7XG4gIH1cblxuICBnZXQgY29tcGFyYWJsZSgpIHtcbiAgICByZXR1cm4gW3RoaXMubWFqb3IsIHRoaXMubWlub3IsIHRoaXMucGF0Y2hdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZlcnNpb25HdE9yRXEoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgYVNlbXZlciA9IG5ldyBTZW1WZXJzaW9uKGEpO1xuICByZXR1cm4gYVNlbXZlci5pc0d0T3JFcShiKTtcbn1cbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBTZWdtZW50LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBGdW5jRGVmcyB9IGZyb20gJy4uL2dmdW5jJztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vc3RhdGUvY29udGV4dCc7XG5cbmltcG9ydCB7IG1hcEZ1bmNEZWZzVG9TZWxlY3RhYmxlcyB9IGZyb20gJy4vaGVscGVycyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZ1bmNEZWZzOiBGdW5jRGVmcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGRHcmFwaGl0ZUZ1bmN0aW9uKHsgZnVuY0RlZnMgfTogUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gbWFwRnVuY0RlZnNUb1NlbGVjdGFibGVzKGZ1bmNEZWZzKSwgW2Z1bmNEZWZzXSk7XG5cbiAgLy8gTm90ZTogYWN0aW9ucy5hZGRGdW5jdGlvbiB3aWxsIGFkZCBhIGNvbXBvbmVudCB0aGF0IHdpbGwgaGF2ZSBhIGRyb3Bkb3duIG9yIGlucHV0IGluIGF1dG8tZm9jdXNcbiAgLy8gKHRoZSBmaXJzdCBwYXJhbSBvZiB0aGUgZnVuY3Rpb24pLiBUaGlzIGF1dG8tZm9jdXMgd2lsbCBjYXVzZSBvbkJsdXIoKSBvbiBBZGRHcmFwaGl0ZUZ1bmN0aW9uJ3NcbiAgLy8gU2VnbWVudCBjb21wb25lbnQgYW5kIHRyaWdnZXIgb25DaGFuZ2Ugb25jZSBhZ2Fpbi4gKHdoeT8gd2UgY2FsbCBvbkNoYW5nZSBpZiB0aGUgdXNlciBkaXNtaXNzZWRcbiAgLy8gdGhlIGRyb3Bkb3duLCBzZWU6IFNlZ21lbnRTZWxlY3Qub25DbG9zZU1lbnUgZm9yIG1vcmUgZGV0YWlscykuIFRvIGF2b2lkIGl0IHdlIG5lZWQgdG8gd2FpdCBmb3JcbiAgLy8gdGhlIFNlZ21lbnQgdG8gZGlzYXBwZWFyIGZpcnN0IChoZW5jZSB1c2VFZmZlY3QpIGFuZCB0aGVuIGRpc3BhdGNoIHRoZSBhY3Rpb24gdGhhdCB3aWxsIGFkZCBuZXdcbiAgLy8gY29tcG9uZW50cy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWU/LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuYWRkRnVuY3Rpb24oeyBuYW1lOiB2YWx1ZS52YWx1ZSB9KSk7XG4gICAgICBzZXRWYWx1ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwgW3ZhbHVlLCBkaXNwYXRjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlZ21lbnRcbiAgICAgIENvbXBvbmVudD17PEJ1dHRvbiBpY29uPVwicGx1c1wiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2N4KHN0eWxlcy5idXR0b24pfSBhcmlhLWxhYmVsPVwiQWRkIG5ldyBmdW5jdGlvblwiIC8+fVxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgIGlucHV0TWluV2lkdGg9ezE1MH1cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBidXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgVG9vbHRpcCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi4vZ2Z1bmMnO1xuXG5pbXBvcnQgeyBGdW5jdGlvbkVkaXRvckNvbnRyb2xzLCBGdW5jdGlvbkVkaXRvckNvbnRyb2xzUHJvcHMgfSBmcm9tICcuL0Z1bmN0aW9uRWRpdG9yQ29udHJvbHMnO1xuXG5pbnRlcmZhY2UgRnVuY3Rpb25FZGl0b3JQcm9wcyBleHRlbmRzIEZ1bmN0aW9uRWRpdG9yQ29udHJvbHNQcm9wcyB7XG4gIGZ1bmM6IEZ1bmNJbnN0YW5jZTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWNvbjogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgYCxcbiAgICBsYWJlbDogY3NzKHtcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZSwgLy8gdG8gbWF0Y2ggLmdmLWZvcm0tbGFiZWxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgfSksXG4gIH07XG59O1xuXG5jb25zdCBGdW5jdGlvbkVkaXRvcjogUmVhY3QuRkM8RnVuY3Rpb25FZGl0b3JQcm9wcz4gPSAoeyBvbk1vdmVMZWZ0LCBvbk1vdmVSaWdodCwgZnVuYywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICh7IHVwZGF0ZVBvcHBlclBvc2l0aW9uIH06IGFueSkgPT4gKFxuICAgIDxGdW5jdGlvbkVkaXRvckNvbnRyb2xzXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBmdW5jPXtmdW5jfVxuICAgICAgb25Nb3ZlTGVmdD17KCkgPT4ge1xuICAgICAgICBvbk1vdmVMZWZ0KGZ1bmMpO1xuICAgICAgICB1cGRhdGVQb3BwZXJQb3NpdGlvbigpO1xuICAgICAgfX1cbiAgICAgIG9uTW92ZVJpZ2h0PXsoKSA9PiB7XG4gICAgICAgIG9uTW92ZVJpZ2h0KGZ1bmMpO1xuICAgICAgICB1cGRhdGVQb3BwZXJQb3NpdGlvbigpO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtmdW5jLmRlZi51bmtub3duICYmIChcbiAgICAgICAgPFRvb2x0aXAgY29udGVudD17PFRvb2x0aXBDb250ZW50IC8+fSBwbGFjZW1lbnQ9XCJib3R0b21cIiBpbnRlcmFjdGl2ZT5cbiAgICAgICAgICA8SWNvbiBkYXRhLXRlc3RpZD1cIndhcm5pbmctaWNvblwiIG5hbWU9XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIHNpemU9XCJ4c1wiIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICl9XG4gICAgICA8VG9vbHRpcCBjb250ZW50PXtyZW5kZXJDb250ZW50fSBwbGFjZW1lbnQ9XCJ0b3BcIiBpbnRlcmFjdGl2ZT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PntmdW5jLmRlZi5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFRvb2x0aXBDb250ZW50ID0gUmVhY3QubWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4+XG4gICAgICBUaGlzIGZ1bmN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuIENoZWNrIHlvdXIgZnVuY3Rpb24gZm9yIHR5cG9zIGFuZHsnICd9XG4gICAgICA8YVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dyYXBoaXRlLnJlYWR0aGVkb2NzLmlvL2VuL2xhdGVzdC9mdW5jdGlvbnMuaHRtbFwiXG4gICAgICA+XG4gICAgICAgIHJlYWQgdGhlIGRvY3NcbiAgICAgIDwvYT57JyAnfVxuICAgICAgdG8gc2VlIHdoZXRoZXIgeW91IG5lZWQgdG8gdXBncmFkZSB5b3VyIGRhdGEgc291cmNl4oCZcyB2ZXJzaW9uIHRvIG1ha2UgdGhpcyBmdW5jdGlvbiBhdmFpbGFibGUuXG4gICAgPC9zcGFuPlxuICApO1xufSk7XG5Ub29sdGlwQ29udGVudC5kaXNwbGF5TmFtZSA9ICdGdW5jdGlvbkVkaXRvclRvb2x0aXBDb250ZW50JztcblxuZXhwb3J0IHsgRnVuY3Rpb25FZGl0b3IgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSWNvbiwgVG9vbHRpcCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi4vZ2Z1bmMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0aW9uRWRpdG9yQ29udHJvbHNQcm9wcyB7XG4gIG9uTW92ZUxlZnQ6IChmdW5jOiBGdW5jSW5zdGFuY2UpID0+IHZvaWQ7XG4gIG9uTW92ZVJpZ2h0OiAoZnVuYzogRnVuY0luc3RhbmNlKSA9PiB2b2lkO1xuICBvblJlbW92ZTogKGZ1bmM6IEZ1bmNJbnN0YW5jZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgRnVuY3Rpb25EZXNjcmlwdGlvbiA9IFJlYWN0LmxhenkoYXN5bmMgKCkgPT4ge1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHsgZGVmYXVsdDogcnN0Mmh0bWwgfSA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInJzdDJodG1sXCIgKi8gJ3JzdDJodG1sJyk7XG4gIHJldHVybiB7XG4gICAgZGVmYXVsdChwcm9wczogeyBkZXNjcmlwdGlvbj86IHN0cmluZyB9KSB7XG4gICAgICByZXR1cm4gPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJzdDJodG1sKHByb3BzLmRlc2NyaXB0aW9uID8/ICcnKSB9fSAvPjtcbiAgICB9LFxuICB9O1xufSk7XG5cbmNvbnN0IEZ1bmN0aW9uSGVscEJ1dHRvbiA9IChwcm9wczogeyBkZXNjcmlwdGlvbj86IHN0cmluZzsgbmFtZTogc3RyaW5nIH0pID0+IHtcbiAgaWYgKHByb3BzLmRlc2NyaXB0aW9uKSB7XG4gICAgbGV0IHRvb2x0aXAgPSAoXG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxzcGFuPkxvYWRpbmcgZGVzY3JpcHRpb24uLi48L3NwYW4+fT5cbiAgICAgICAgPEZ1bmN0aW9uRGVzY3JpcHRpb24gZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCBjb250ZW50PXt0b29sdGlwfSBwbGFjZW1lbnQ9eydib3R0b20tZW5kJ30+XG4gICAgICAgIDxJY29uIGNsYXNzTmFtZT17cHJvcHMuZGVzY3JpcHRpb24gPyB1bmRlZmluZWQgOiAncG9pbnRlcid9IG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIiAvPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxJY29uXG4gICAgICBjbGFzc05hbWU9XCJwb2ludGVyXCJcbiAgICAgIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICB3aW5kb3cub3BlbihcbiAgICAgICAgICAnaHR0cDovL2dyYXBoaXRlLnJlYWR0aGVkb2NzLm9yZy9lbi9sYXRlc3QvZnVuY3Rpb25zLmh0bWwjZ3JhcGhpdGUucmVuZGVyLmZ1bmN0aW9ucy4nICsgcHJvcHMubmFtZSxcbiAgICAgICAgICAnX2JsYW5rJ1xuICAgICAgICApO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZ1bmN0aW9uRWRpdG9yQ29udHJvbHMgPSAoXG4gIHByb3BzOiBGdW5jdGlvbkVkaXRvckNvbnRyb2xzUHJvcHMgJiB7XG4gICAgZnVuYzogRnVuY0luc3RhbmNlO1xuICB9XG4pID0+IHtcbiAgY29uc3QgeyBmdW5jLCBvbk1vdmVMZWZ0LCBvbk1vdmVSaWdodCwgb25SZW1vdmUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgd2lkdGg6ICc2MHB4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEljb24gbmFtZT1cImFycm93LWxlZnRcIiBvbkNsaWNrPXsoKSA9PiBvbk1vdmVMZWZ0KGZ1bmMpfSAvPlxuICAgICAgPEZ1bmN0aW9uSGVscEJ1dHRvbiBuYW1lPXtmdW5jLmRlZi5uYW1lfSBkZXNjcmlwdGlvbj17ZnVuYy5kZWYuZGVzY3JpcHRpb259IC8+XG4gICAgICA8SWNvbiBuYW1lPVwidGltZXNcIiBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZShmdW5jKX0gLz5cbiAgICAgIDxJY29uIG5hbWU9XCJhcnJvdy1yaWdodFwiIG9uQ2xpY2s9eygpID0+IG9uTW92ZVJpZ2h0KGZ1bmMpfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlZ21lbnQsIFNlZ21lbnRJbnB1dCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IHR5cGUgRWRpdGFibGVQYXJhbSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBvcHRpb25hbDogYm9vbGVhbjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG4gIG9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pjtcbn07XG5cbnR5cGUgRmllbGRFZGl0b3JQcm9wcyA9IHtcbiAgZWRpdGFibGVQYXJhbTogRWRpdGFibGVQYXJhbTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkV4cGFuZGVkQ2hhbmdlOiAoZXhwYW5kZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGF1dG9mb2N1czogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogUmVuZGVyIGEgZnVuY3Rpb24gcGFyYW1ldGVyIHdpdGggYSBzZWdtZW50IGRyb3Bkb3duIGZvciBtdWx0aXBsZSBvcHRpb25zIG9yIHNpbXBsZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEZ1bmN0aW9uUGFyYW1FZGl0b3IoeyBlZGl0YWJsZVBhcmFtLCBvbkNoYW5nZSwgb25FeHBhbmRlZENoYW5nZSwgYXV0b2ZvY3VzIH06IEZpZWxkRWRpdG9yUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmIChlZGl0YWJsZVBhcmFtLm9wdGlvbnM/Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlZ21lbnRcbiAgICAgICAgYXV0b2ZvY3VzPXthdXRvZm9jdXN9XG4gICAgICAgIHZhbHVlPXtlZGl0YWJsZVBhcmFtLnZhbHVlfVxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPXtlZGl0YWJsZVBhcmFtLm5hbWV9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlZ21lbnR9XG4gICAgICAgIG9wdGlvbnM9e2VkaXRhYmxlUGFyYW0ub3B0aW9uc31cbiAgICAgICAgcGxhY2Vob2xkZXI9eycgKycgKyBlZGl0YWJsZVBhcmFtLm5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS52YWx1ZSB8fCAnJyk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRXhwYW5kZWRDaGFuZ2U9e29uRXhwYW5kZWRDaGFuZ2V9XG4gICAgICAgIGlucHV0TWluV2lkdGg9ezE1MH1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgYWxsb3dFbXB0eVZhbHVlPXt0cnVlfVxuICAgICAgPjwvU2VnbWVudD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VnbWVudElucHV0XG4gICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgdmFsdWU9e2VkaXRhYmxlUGFyYW0udmFsdWUgfHwgJyd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXsnICsnICsgZWRpdGFibGVQYXJhbS5uYW1lfVxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPXtlZGl0YWJsZVBhcmFtLm5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25FeHBhbmRlZENoYW5nZT17b25FeHBhbmRlZENoYW5nZX1cbiAgICAgICAgLy8gaW5wdXQgc3R5bGVcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMjVweCcsIHBhZGRpbmdUb3A6ICcycHgnLCBtYXJnaW5Ub3A6ICcycHgnLCBwYWRkaW5nTGVmdDogJzRweCcsIG1pbldpZHRoOiAnMTAwcHgnIH19XG4gICAgICA+PC9TZWdtZW50SW5wdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHNlZ21lbnQ6IGNzcyh7XG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gIH0pLFxuICBpbnB1dDogY3NzYFxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGlucHV0IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9LFxuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWdtZW50U2VjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRnVuY0RlZnMsIEZ1bmNJbnN0YW5jZSB9IGZyb20gJy4uL2dmdW5jJztcblxuaW1wb3J0IHsgQWRkR3JhcGhpdGVGdW5jdGlvbiB9IGZyb20gJy4vQWRkR3JhcGhpdGVGdW5jdGlvbic7XG5pbXBvcnQgeyBHcmFwaGl0ZUZ1bmN0aW9uRWRpdG9yIH0gZnJvbSAnLi9HcmFwaGl0ZUZ1bmN0aW9uRWRpdG9yJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZnVuY3Rpb25zOiBGdW5jSW5zdGFuY2VbXTtcbiAgZnVuY0RlZnM6IEZ1bmNEZWZzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEZ1bmN0aW9uc1NlY3Rpb24oeyBmdW5jdGlvbnMgPSBbXSwgZnVuY0RlZnMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2VnbWVudFNlY3Rpb24gbGFiZWw9XCJGdW5jdGlvbnNcIiBmaWxsPXt0cnVlfT5cbiAgICAgIHtmdW5jdGlvbnMubWFwKChmdW5jOiBGdW5jSW5zdGFuY2UsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuICFmdW5jLmhpZGRlbiAmJiA8R3JhcGhpdGVGdW5jdGlvbkVkaXRvciBrZXk9e2luZGV4fSBmdW5jPXtmdW5jfSAvPjtcbiAgICAgIH0pfVxuICAgICAgPEFkZEdyYXBoaXRlRnVuY3Rpb24gZnVuY0RlZnM9e2Z1bmNEZWZzfSAvPlxuICAgIDwvU2VnbWVudFNlY3Rpb24+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBJbmxpbmVMYWJlbCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi4vZ2Z1bmMnO1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi9zdGF0ZS9jb250ZXh0JztcblxuaW1wb3J0IHsgRnVuY3Rpb25FZGl0b3IgfSBmcm9tICcuL0Z1bmN0aW9uRWRpdG9yJztcbmltcG9ydCB7IEVkaXRhYmxlUGFyYW0sIEZ1bmN0aW9uUGFyYW1FZGl0b3IgfSBmcm9tICcuL0Z1bmN0aW9uUGFyYW1FZGl0b3InO1xuaW1wb3J0IHsgbWFwRnVuY0luc3RhbmNlVG9QYXJhbXMgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBGdW5jdGlvbkVkaXRvclByb3BzID0ge1xuICBmdW5jOiBGdW5jSW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIEFsbG93cyBlZGl0aW5nIGZ1bmN0aW9uIHBhcmFtcyBhbmQgcmVtb3ZpbmcvbW92aW5nIGEgZnVuY3Rpb24gKG5vdGU6IGVkaXRpbmcgZnVuY3Rpb24gbmFtZSBpcyBub3Qgc3VwcG9ydGVkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gR3JhcGhpdGVGdW5jdGlvbkVkaXRvcih7IGZ1bmMgfTogRnVuY3Rpb25FZGl0b3JQcm9wcykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICAvLyBrZWVwIHRyYWNrIG9mIG1vdXNlIG92ZXIgYW5kIGlzRXhwYW5kZWQgc3RhdGUgdG8gZGlzcGxheSBidXR0b25zIGZvciBhZGRpbmcgb3B0aW9uYWwvbXVsdGlwbGUgcGFyYW1zXG4gIC8vIG9ubHkgd2hlbiB0aGUgdXNlciBtb3VzZSBvdmVyIG92ZXIgdGhlIGZ1bmN0aW9uIGVkaXRvciBPUiBhbnkgcGFyYW0gZWRpdG9yIGlzIGV4cGFuZGVkLlxuICBjb25zdCBbbW91c2VPdmVyLCBzZXRJc01vdXNlT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IHBhcmFtcyA9IG1hcEZ1bmNJbnN0YW5jZVRvUGFyYW1zKGZ1bmMpO1xuICBwYXJhbXMgPSBwYXJhbXMuZmlsdGVyKChwOiBFZGl0YWJsZVBhcmFtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgLy8gZnVuYy5hZGRlZCBpcyBzZXQgZm9yIG5ld2x5IGFkZGVkIGZ1bmN0aW9ucyAtIHNlZSBhdXRvZm9jdXMgYmVsb3dcbiAgICByZXR1cm4gKGluZGV4IDwgZnVuYy5kZWYucGFyYW1zLmxlbmd0aCAmJiAhcC5vcHRpb25hbCkgfHwgZnVuYy5hZGRlZCB8fCBwLnZhbHVlIHx8IGV4cGFuZGVkIHx8IG1vdXNlT3ZlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250YWluZXIsIHsgW3N0eWxlcy5lcnJvcl06IGZ1bmMuZGVmLnVua25vd24gfSl9XG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SXNNb3VzZU92ZXIodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzTW91c2VPdmVyKGZhbHNlKX1cbiAgICA+XG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIHNwYWNpbmc9XCJub25lXCI+XG4gICAgICAgIDxGdW5jdGlvbkVkaXRvclxuICAgICAgICAgIGZ1bmM9e2Z1bmN9XG4gICAgICAgICAgb25Nb3ZlTGVmdD17KCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5tb3ZlRnVuY3Rpb24oeyBmdW5jLCBvZmZzZXQ6IC0xIH0pKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW92ZVJpZ2h0PXsoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLm1vdmVGdW5jdGlvbih7IGZ1bmMsIG9mZnNldDogMSB9KSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5yZW1vdmVGdW5jdGlvbih7IGZ1bmMgfSkpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxJbmxpbmVMYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+KDwvSW5saW5lTGFiZWw+XG4gICAgICAgIHtwYXJhbXMubWFwKChlZGl0YWJsZVBhcmFtOiBFZGl0YWJsZVBhcmFtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPEZ1bmN0aW9uUGFyYW1FZGl0b3JcbiAgICAgICAgICAgICAgICBhdXRvZm9jdXM9e2luZGV4ID09PSAwICYmIGZ1bmMuYWRkZWR9XG4gICAgICAgICAgICAgICAgZWRpdGFibGVQYXJhbT17ZWRpdGFibGVQYXJhbX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09ICcnIHx8IGVkaXRhYmxlUGFyYW0ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy51cGRhdGVGdW5jdGlvblBhcmFtKHsgZnVuYywgaW5kZXgsIHZhbHVlIH0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgc2V0SXNNb3VzZU92ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZT17c2V0SXNFeHBhbmRlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2luZGV4ICE9PSBwYXJhbXMubGVuZ3RoIC0gMSA/ICcsJyA6ICcnfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPElubGluZUxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT4pPC9JbmxpbmVMYWJlbD5cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgcGFkZGluZzogYDAgJHt0aGVtZS5zcGFjaW5nKDEpfWAsXG4gICAgaGVpZ2h0OiBgJHt0aGVtZS52MS5zcGFjaW5nLmZvcm1JbnB1dEhlaWdodH1weGAsXG4gIH0pLFxuICBlcnJvcjogY3NzYFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmVycm9yLm1haW59O1xuICBgLFxuICBsYWJlbDogY3NzKHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgfSksXG4gIGJ1dHRvbjogY3NzKHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yQ29udGV4dCwgR3JhcGhpdGVRdWVyeUVkaXRvclByb3BzLCB1c2VEaXNwYXRjaCwgdXNlR3JhcGhpdGVTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL2NvbnRleHQnO1xuXG5pbXBvcnQgeyBGdW5jdGlvbnNTZWN0aW9uIH0gZnJvbSAnLi9GdW5jdGlvbnNTZWN0aW9uJztcbmltcG9ydCB7IEdyYXBoaXRlVGV4dEVkaXRvciB9IGZyb20gJy4vR3JhcGhpdGVUZXh0RWRpdG9yJztcbmltcG9ydCB7IFNlcmllc1NlY3Rpb24gfSBmcm9tICcuL1Nlcmllc1NlY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gR3JhcGhpdGVRdWVyeUVkaXRvcih7XG4gIGRhdGFzb3VyY2UsXG4gIG9uUnVuUXVlcnksXG4gIG9uQ2hhbmdlLFxuICBxdWVyeSxcbiAgcmFuZ2UsXG4gIHF1ZXJpZXMsXG59OiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JhcGhpdGVRdWVyeUVkaXRvckNvbnRleHRcbiAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgcXVlcmllcz17cXVlcmllc31cbiAgICAgIHJhbmdlPXtyYW5nZX1cbiAgICA+XG4gICAgICA8R3JhcGhpdGVRdWVyeUVkaXRvckNvbnRlbnQgLz5cbiAgICA8L0dyYXBoaXRlUXVlcnlFZGl0b3JDb250ZXh0PlxuICApO1xufVxuXG5mdW5jdGlvbiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yQ29udGVudCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzdGF0ZSA9IHVzZUdyYXBoaXRlU3RhdGUoKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aXN1YWxFZGl0b3J9PlxuICAgICAgICB7c3RhdGUudGFyZ2V0Py50ZXh0RWRpdG9yICYmIDxHcmFwaGl0ZVRleHRFZGl0b3IgcmF3UXVlcnk9e3N0YXRlLnRhcmdldC50YXJnZXR9IC8+fVxuICAgICAgICB7IXN0YXRlLnRhcmdldD8udGV4dEVkaXRvciAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZXJpZXNTZWN0aW9uIHN0YXRlPXtzdGF0ZX0gLz5cbiAgICAgICAgICAgIDxGdW5jdGlvbnNTZWN0aW9uIGZ1bmN0aW9ucz17c3RhdGUucXVlcnlNb2RlbD8uZnVuY3Rpb25zfSBmdW5jRGVmcz17c3RhdGUuZnVuY0RlZnMhfSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZUJ1dHRvbn1cbiAgICAgICAgaWNvbj1cInBlblwiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIGVkaXRvciBtb2RlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMudG9nZ2xlRWRpdG9yTW9kZSgpKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBgLFxuICAgIHZpc3VhbEVkaXRvcjogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgIGAsXG4gICAgdG9nZ2xlQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFF1ZXJ5RmllbGQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vc3RhdGUvY29udGV4dCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJhd1F1ZXJ5OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gR3JhcGhpdGVUZXh0RWRpdG9yKHsgcmF3UXVlcnkgfTogUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHVwZGF0ZVF1ZXJ5ID0gdXNlQ2FsbGJhY2soXG4gICAgKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMudXBkYXRlUXVlcnkoeyBxdWVyeSB9KSk7XG4gICAgfSxcbiAgICBbZGlzcGF0Y2hdXG4gICk7XG5cbiAgY29uc3QgcnVuUXVlcnkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWN0aW9ucy5ydW5RdWVyeSgpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlGaWVsZFxuICAgICAgcXVlcnk9e3Jhd1F1ZXJ5fVxuICAgICAgb25DaGFuZ2U9e3VwZGF0ZVF1ZXJ5fVxuICAgICAgb25CbHVyPXtydW5RdWVyeX1cbiAgICAgIG9uUnVuUXVlcnk9e3J1blF1ZXJ5fVxuICAgICAgcGxhY2Vob2xkZXI9eydFbnRlciBhIEdyYXBoaXRlIHF1ZXJ5IChydW4gd2l0aCBTaGlmdCtFbnRlciknfVxuICAgICAgcG9ydGFsT3JpZ2luPVwiZ3JhcGhpdGVcIlxuICAgIC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VnbWVudEFzeW5jIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJy4uL3N0YXRlL2NvbnRleHQnO1xuaW1wb3J0IHsgZ2V0QWx0U2VnbWVudHNTZWxlY3RhYmxlcyB9IGZyb20gJy4uL3N0YXRlL3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZSc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNlZ21lbnQ6IEdyYXBoaXRlU2VnbWVudDtcbiAgbWV0cmljSW5kZXg6IG51bWJlcjtcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZTtcbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNpbmdsZSBtZXRyaWMgbm9kZSBpbiB0aGUgbWV0cmljIHBhdGggYXQgdGhlIGdpdmVuIGluZGV4LiBBbGxvd3MgdG8gY2hhbmdlIHRoZSBtZXRyaWMgbmFtZSB0byBvbmUgb2YgdGhlXG4gKiBwcm92aWRlZCBvcHRpb25zIG9yIGEgY3VzdG9tIHZhbHVlLlxuICpcbiAqIE9wdGlvbnMgZm9yIHRhZyBuYW1lcyBhbmQgbWV0cmljIG5hbWVzIGFyZSByZWxvYWRlZCB3aGlsZSB1c2VyIGlzIHR5cGluZyB3aXRoIGJhY2tlbmQgdGFraW5nIGNhcmUgb2YgYXV0by1jb21wbGV0ZVxuICogKGF1dG8tY29tcGxldGUgY2Fubm90IGJlIGltcGxlbWVudGVkIGluIGZyb250LWVuZCBiZWNhdXNlIGJhY2tlbmQgcmV0dXJucyBvbmx5IGxpbWl0ZWQgbnVtYmVyIG9mIGVudHJpZXMpXG4gKlxuICogZ2V0QWx0U2VnbWVudHNTZWxlY3RhYmxlcygpIGFsc28gcmV0dXJucyBsaXN0IG9mIHRhZ3MgZm9yIHNlZ21lbnQgd2l0aCBpbmRleD0wLiBPbmNlIGEgdGFnIGlzIHNlbGVjdGVkIHRoZSBlZGl0b3JcbiAqIGVudGVycyB0YWctYWRkaW5nIG1vZGUgKHNlZSBTZXJpZXNTZWN0aW9uIGFuZCBHcmFwaGl0ZVF1ZXJ5TW9kZWwuc2VyaWVzQnlUYWdVc2VkKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1ldHJpY1NlZ21lbnQoeyBtZXRyaWNJbmRleCwgc2VnbWVudCwgc3RhdGUgfTogUHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBsb2FkT3B0aW9ucyA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0QWx0U2VnbWVudHNTZWxlY3RhYmxlcyhzdGF0ZSwgbWV0cmljSW5kZXgsIHZhbHVlIHx8ICcnKTtcbiAgICB9LFxuICAgIFtzdGF0ZSwgbWV0cmljSW5kZXhdXG4gICk7XG4gIGNvbnN0IGRlYm91bmNlZExvYWRPcHRpb25zID0gdXNlTWVtbygoKSA9PiBkZWJvdW5jZShsb2FkT3B0aW9ucywgMjAwLCB7IGxlYWRpbmc6IHRydWUgfSksIFtsb2FkT3B0aW9uc10pO1xuXG4gIGNvbnN0IG9uU2VnbWVudENoYW5nZWQgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VsZWN0YWJsZVZhbHVlOiBTZWxlY3RhYmxlVmFsdWU8R3JhcGhpdGVTZWdtZW50IHwgc3RyaW5nPikgPT4ge1xuICAgICAgLy8gc2VsZWN0YWJsZVZhbHVlLnZhbHVlIGlzIGFsd2F5cyBkZWZpbmVkIGJlY2F1c2UgZW1wdHlWYWx1ZXMgYXJlIG5vdCBhbGxvd2VkIGluIFNlZ21lbnRBc3luYyBieSBkZWZhdWx0XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnNlZ21lbnRWYWx1ZUNoYW5nZWQoeyBzZWdtZW50OiBzZWxlY3RhYmxlVmFsdWUudmFsdWUhLCBpbmRleDogbWV0cmljSW5kZXggfSkpO1xuICAgIH0sXG4gICAgW2Rpc3BhdGNoLCBtZXRyaWNJbmRleF1cbiAgKTtcblxuICAvLyBzZWdtZW50VmFsdWVDaGFuZ2VkIGFjdGlvbiB3aWxsIGRlc3Ryb3kgU2VnbWVudEFzeW5jIGltbWVkaWF0ZWx5IGlmIGEgdGFnIGlzIHNlbGVjdGVkLiBUbyBnaXZlIHRpbWVcbiAgLy8gZm9yIHRoZSBjbGVhbiB1cCB0aGUgYWN0aW9uIGlzIGRlYm91bmNlZC5cbiAgY29uc3Qgb25TZWdtZW50Q2hhbmdlZERlYm91bmNlZCA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2Uob25TZWdtZW50Q2hhbmdlZCwgMTAwKSwgW29uU2VnbWVudENoYW5nZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWdtZW50QXN5bmM8R3JhcGhpdGVTZWdtZW50IHwgc3RyaW5nPlxuICAgICAgdmFsdWU9e3NlZ21lbnQudmFsdWV9XG4gICAgICBpbnB1dE1pbldpZHRoPXsxNTB9XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZExvYWRPcHRpb25zfVxuICAgICAgcmVsb2FkT3B0aW9uc09uQ2hhbmdlPXt0cnVlfVxuICAgICAgb25DaGFuZ2U9e29uU2VnbWVudENoYW5nZWREZWJvdW5jZWR9XG4gICAgLz5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1ldGFkYXRhSW5zcGVjdG9yUHJvcHMsIHJhbmdlVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc3R5bGVzRmFjdG9yeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5cbmltcG9ydCB7IEdyYXBoaXRlRGF0YXNvdXJjZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgcGFyc2VTY2hlbWFSZXRlbnRpb25zLCBnZXRSb2xsdXBOb3RpY2UsIGdldFJ1bnRpbWVDb25zb2xpZGF0aW9uTm90aWNlIH0gZnJvbSAnLi4vbWV0YSc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZU9wdGlvbnMsIE1ldHJpY1RhbmtTZXJpZXNNZXRhIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE1ldGFkYXRhSW5zcGVjdG9yUHJvcHM8R3JhcGhpdGVEYXRhc291cmNlLCBHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZU9wdGlvbnM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE1ldHJpY1RhbmtNZXRhSW5zcGVjdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgcmVuZGVyTWV0YShtZXRhOiBNZXRyaWNUYW5rU2VyaWVzTWV0YSwga2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoKTtcbiAgICBjb25zdCBidWNrZXRzID0gcGFyc2VTY2hlbWFSZXRlbnRpb25zKG1ldGFbJ3NjaGVtYS1yZXRlbnRpb25zJ10pO1xuICAgIGNvbnN0IHJvbGx1cE5vdGljZSA9IGdldFJvbGx1cE5vdGljZShbbWV0YV0pO1xuICAgIGNvbnN0IHJ1bnRpbWVOb3RpY2UgPSBnZXRSdW50aW1lQ29uc29saWRhdGlvbk5vdGljZShbbWV0YV0pO1xuICAgIGNvbnN0IG5vcm1GdW5jID0gKG1ldGFbJ2NvbnNvbGlkYXRvci1ub3JtZmV0Y2gnXSA/PyAnJykucmVwbGFjZSgnQ29uc29saWRhdG9yJywgJycpO1xuXG4gICAgY29uc3QgdG90YWxTZWNvbmRzID0gYnVja2V0cy5yZWR1Y2UoXG4gICAgICAoYWNjLCBidWNrZXQpID0+IGFjYyArIChidWNrZXQucmV0ZW50aW9uID8gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKGJ1Y2tldC5yZXRlbnRpb24pIDogMCksXG4gICAgICAwXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1ldGFJdGVtfSBrZXk9e2tleX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWV0YUl0ZW1IZWFkZXJ9PlxuICAgICAgICAgIFNjaGVtYToge21ldGFbJ3NjaGVtYS1uYW1lJ119XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBtdXRlZFwiPlNlcmllcyBjb3VudDoge21ldGEuY291bnR9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1ldGFJdGVtQm9keX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGVwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcEhlYWRpbmd9PlN0ZXAgMTogRmV0Y2g8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcERlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgRmlyc3QgZGF0YSBpcyBmZXRjaGVkLCBlaXRoZXIgZnJvbSByYXcgZGF0YSBhcmNoaXZlIG9yIGEgcm9sbHVwIGFyY2hpdmVcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7cm9sbHVwTm90aWNlICYmIDxwPntyb2xsdXBOb3RpY2UudGV4dH08L3A+fVxuICAgICAgICAgICAgeyFyb2xsdXBOb3RpY2UgJiYgPHA+Tm8gcm9sbHVwIGFyY2hpdmUgd2FzIHVzZWQ8L3A+fVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7YnVja2V0cy5tYXAoKGJ1Y2tldCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBidWNrZXRMZW5ndGggPSBidWNrZXQucmV0ZW50aW9uID8gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKGJ1Y2tldC5yZXRlbnRpb24pIDogMDtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGhQZXJjZW50ID0gKGJ1Y2tldExlbmd0aCAvIHRvdGFsU2Vjb25kcykgKiAxMDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpbmRleCA9PT0gbWV0YVsnYXJjaGl2ZS1yZWFkJ107XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2J1Y2tldC5yZXRlbnRpb259IGNsYXNzTmFtZT17c3R5bGVzLmJ1Y2tldH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVja2V0SW50ZXJ2YWx9PntidWNrZXQuaW50ZXJ2YWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5idWNrZXRSZXRlbnRpb24sIHsgW3N0eWxlcy5idWNrZXRSZXRlbnRpb25BY3RpdmVdOiBpc0FjdGl2ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4R3JvdzogbGVuZ3RoUGVyY2VudCB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhHcm93OiAxMDAgLSBsZW5ndGhQZXJjZW50IH19PntidWNrZXQucmV0ZW50aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0ZXBIZWFkaW5nfT5TdGVwIDI6IE5vcm1hbGl6YXRpb248L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcERlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgTm9ybWFsaXphdGlvbiBoYXBwZW5zIHdoZW4gc2VyaWVzIHdpdGggZGlmZmVyZW50IGludGVydmFscyBiZXR3ZWVuIHBvaW50cyBhcmUgY29tYmluZWQuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge21ldGFbJ2FnZ251bS1ub3JtJ10gPiAxICYmIDxwPk5vcm1hbGl6YXRpb24gZGlkIG9jY3VyIHVzaW5nIHtub3JtRnVuY308L3A+fVxuICAgICAgICAgICAge21ldGFbJ2FnZ251bS1ub3JtJ10gPT09IDEgJiYgPHA+Tm8gbm9ybWFsaXphdGlvbiB3YXMgbmVlZGVkPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RlcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0ZXBIZWFkaW5nfT5TdGVwIDM6IFJ1bnRpbWUgY29uc29saWRhdGlvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGVwRGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICBJZiB0aGVyZSBhcmUgdG9vIG1hbnkgZGF0YSBwb2ludHMgYXQgdGhpcyBwb2ludCBNZXRyaWN0YW5rIHdpbGwgY29uc29saWRhdGUgdGhlbSBkb3duIHRvIGJlbG93IG1heCBkYXRhXG4gICAgICAgICAgICAgIHBvaW50cyAoc2V0IGluIHF1ZXJpZXMgdGFiKS5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7cnVudGltZU5vdGljZSAmJiA8cD57cnVudGltZU5vdGljZS50ZXh0fTwvcD59XG4gICAgICAgICAgICB7IXJ1bnRpbWVOb3RpY2UgJiYgPHA+Tm8gcnVudGltZSBjb25zb2xpZGF0aW9uPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIGF3YXkgdG8gZGVkdXBlIHRoZW1cbiAgICBjb25zdCBzZXJpZXNNZXRhczogUmVjb3JkPHN0cmluZywgTWV0cmljVGFua1Nlcmllc01ldGE+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHNlcmllcyBvZiBkYXRhKSB7XG4gICAgICBpZiAoc2VyaWVzLm1ldGEgJiYgc2VyaWVzLm1ldGEuY3VzdG9tKSB7XG4gICAgICAgIGZvciAoY29uc3QgbWV0YUl0ZW0gb2Ygc2VyaWVzLm1ldGEuY3VzdG9tLnNlcmllc01ldGFMaXN0IGFzIE1ldHJpY1RhbmtTZXJpZXNNZXRhW10pIHtcbiAgICAgICAgICAvLyBrZXkgaXMgdG8gZGVkdXBlIGFzIG1hbnkgc2VyaWVzIHdpbGwgaGF2ZSBpZGVudGl0aWNhbCBtZXRhXG4gICAgICAgICAgY29uc3Qga2V5ID0gYCR7SlNPTi5zdHJpbmdpZnkobWV0YUl0ZW0pfWA7XG5cbiAgICAgICAgICBpZiAoc2VyaWVzTWV0YXNba2V5XSkge1xuICAgICAgICAgICAgc2VyaWVzTWV0YXNba2V5XS5jb3VudCArPSBtZXRhSXRlbS5jb3VudDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VyaWVzTWV0YXNba2V5XSA9IG1ldGFJdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhzZXJpZXNNZXRhcykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gPGRpdj5ObyByZXNwb25zZSBtZXRhIGRhdGE8L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5NZXRyaWN0YW5rIExpbmVhZ2U8L2gyPlxuICAgICAgICB7T2JqZWN0LmtleXMoc2VyaWVzTWV0YXMpLm1hcCgoa2V5KSA9PiB0aGlzLnJlbmRlck1ldGEoc2VyaWVzTWV0YXNba2V5XSwga2V5KSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKCkgPT4ge1xuICBjb25zdCB7IHRoZW1lIH0gPSBjb25maWc7XG4gIGNvbnN0IGJvcmRlckNvbG9yID0gdGhlbWUuaXNEYXJrID8gdGhlbWUucGFsZXR0ZS5ncmF5MjUgOiB0aGVtZS5wYWxldHRlLmdyYXk4NTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IHRoZW1lLmlzRGFyayA/IHRoZW1lLnBhbGV0dGUuZGFyazEgOiB0aGVtZS5wYWxldHRlLndoaXRlO1xuICBjb25zdCBoZWFkZXJCZyA9IHRoZW1lLmlzRGFyayA/IHRoZW1lLnBhbGV0dGUuZ3JheTE1IDogdGhlbWUucGFsZXR0ZS5ncmF5ODU7XG5cbiAgcmV0dXJuIHtcbiAgICBtZXRhSXRlbTogY3NzYFxuICAgICAgYmFja2dyb3VuZDogJHtiYWNrZ3JvdW5kfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIG1ldGFJdGVtSGVhZGVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiAke2hlYWRlckJnfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZy54c30gJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUubWR9O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBgLFxuICAgIG1ldGFJdGVtQm9keTogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIHN0ZXBIZWFkaW5nOiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLm1kfTtcbiAgICBgLFxuICAgIHN0ZXBEZXNjcmlwdGlvbjogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFdlYWt9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIHN0ZXA6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5sZ307XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgYCxcbiAgICBidWNrZXQ6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXIucmFkaXVzLm1kfTtcbiAgICBgLFxuICAgIGJ1Y2tldEludGVydmFsOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICBgLFxuICAgIGJ1Y2tldFJldGVudGlvbjogY3NzYFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICR7dGhlbWUucGFsZXR0ZS5ibHVlODV9LCAke3RoZW1lLnBhbGV0dGUuYmx1ZTk1fSk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHt0aGVtZS5wYWxldHRlLndoaXRlfTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyLnJhZGl1cy5tZH07XG4gICAgYCxcbiAgICBidWNrZXRSZXRlbnRpb25BY3RpdmU6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAke3RoZW1lLnBhbGV0dGUuZ3JlZW5CYXNlfSwgJHt0aGVtZS5wYWxldHRlLmdyZWVuU2hhZGV9KTtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZSc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IE1ldHJpY1NlZ21lbnQgfSBmcm9tICcuL01ldHJpY1NlZ21lbnQnO1xuXG50eXBlIFByb3BzID0ge1xuICBzZWdtZW50czogR3JhcGhpdGVTZWdtZW50W107XG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gTWV0cmljc1NlY3Rpb24oeyBzZWdtZW50cyA9IFtdLCBzdGF0ZSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2VnbWVudHMubWFwKChzZWdtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPE1ldHJpY1NlZ21lbnQgc2VnbWVudD17c2VnbWVudH0gbWV0cmljSW5kZXg9e2luZGV4fSBrZXk9e2luZGV4fSBzdGF0ZT17c3RhdGV9IC8+O1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi9zdGF0ZS9jb250ZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlCdXR0b24oKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaChhY3Rpb25zLnVucGF1c2UoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICByZXR1cm4gPEJ1dHRvbiBpY29uPVwicGxheVwiIG9uQ2xpY2s9e29uQ2xpY2t9IHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgYXJpYS1sYWJlbD1cIlVucGF1c2UgcXVlcnlcIiAvPjtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlZ21lbnRTZWN0aW9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZSc7XG5cbmltcG9ydCB7IE1ldHJpY3NTZWN0aW9uIH0gZnJvbSAnLi9NZXRyaWNzU2VjdGlvbic7XG5pbXBvcnQgeyBUYWdzU2VjdGlvbiB9IGZyb20gJy4vVGFnc1NlY3Rpb24nO1xuXG50eXBlIFByb3BzID0ge1xuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlcmllc1NlY3Rpb24oeyBzdGF0ZSB9OiBQcm9wcykge1xuICBjb25zdCBzZWN0aW9uQ29udGVudCA9IHN0YXRlLnF1ZXJ5TW9kZWw/LnNlcmllc0J5VGFnVXNlZCA/IChcbiAgICA8VGFnc1NlY3Rpb24gdGFncz17c3RhdGUucXVlcnlNb2RlbD8udGFnc30gc3RhdGU9e3N0YXRlfSAvPlxuICApIDogKFxuICAgIDxNZXRyaWNzU2VjdGlvbiBzZWdtZW50cz17c3RhdGUuc2VnbWVudHN9IHN0YXRlPXtzdGF0ZX0gLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWdtZW50U2VjdGlvbiBsYWJlbD1cIlNlcmllc1wiIGZpbGw9e3RydWV9PlxuICAgICAge3NlY3Rpb25Db250ZW50fVxuICAgIDwvU2VnbWVudFNlY3Rpb24+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlZ21lbnQsIFNlZ21lbnRBc3luYyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICcuLi9zdGF0ZS9jb250ZXh0JztcbmltcG9ydCB7IGdldFRhZ09wZXJhdG9yc1NlbGVjdGFibGVzLCBnZXRUYWdzU2VsZWN0YWJsZXMsIGdldFRhZ1ZhbHVlc1NlbGVjdGFibGVzIH0gZnJvbSAnLi4vc3RhdGUvcHJvdmlkZXJzJztcbmltcG9ydCB7IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL3N0b3JlJztcbmltcG9ydCB7IEdyYXBoaXRlVGFnLCBHcmFwaGl0ZVRhZ09wZXJhdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICB0YWc6IEdyYXBoaXRlVGFnO1xuICB0YWdJbmRleDogbnVtYmVyO1xuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlO1xufTtcblxuLyoqXG4gKiBFZGl0b3IgZm9yIGEgdGFnIGF0IGdpdmVuIGluZGV4LiBBbGxvd3MgY2hhbmdpbmcgdGhlIG5hbWUgb2YgdGhlIHRhZywgb3BlcmF0b3Igb3IgdmFsdWUuIFRhZyBuYW1lcyBhcmUgcHJvdmlkZWQgd2l0aFxuICogZ2V0VGFnc1NlbGVjdGFibGVzIGFuZCBjb250YWluIG9ubHkgdmFsaWQgdGFncyAoaXQgbWF5IGRlcGVuZCBvbiBjdXJyZW50bHkgdXNlZCB0YWdzKS4gVGhlIGRyb3Bkb3duIGZvciB0YWcgbmFtZXMgaXNcbiAqIGFsc28gdXNlZCBmb3IgcmVtb3ZpbmcgdGFnICh3aXRoIGEgc3BlY2lhbCBcIi0tcmVtb3ZlIHRhZy0tXCIgb3B0aW9uIHByb3ZpZGVkIGJ5IGdldFRhZ3NTZWxlY3RhYmxlcykuXG4gKlxuICogT3B0aW9ucyBmb3IgdGFnIG5hbWVzIGFuZCB2YWx1ZXMgYXJlIHJlbG9hZGVkIHdoaWxlIHVzZXIgaXMgdHlwaW5nIHdpdGggYmFja2VuZCB0YWtpbmcgY2FyZSBvZiBhdXRvLWNvbXBsZXRlXG4gKiAoYXV0by1jb21wbGV0ZSBjYW5ub3QgYmUgaW1wbGVtZW50ZWQgaW4gZnJvbnQtZW5kIGJlY2F1c2UgYmFja2VuZCByZXR1cm5zIG9ubHkgbGltaXRlZCBudW1iZXIgb2YgZW50cmllcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFRhZ0VkaXRvcih7IHRhZywgdGFnSW5kZXgsIHN0YXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZ2V0VGFnc09wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5wdXRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0VGFnc1NlbGVjdGFibGVzKHN0YXRlLCB0YWdJbmRleCwgaW5wdXRWYWx1ZSB8fCAnJyk7XG4gICAgfSxcbiAgICBbc3RhdGUsIHRhZ0luZGV4XVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRHZXRUYWdzT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2UoZ2V0VGFnc09wdGlvbnMsIDIwMCwgeyBsZWFkaW5nOiB0cnVlIH0pLCBbZ2V0VGFnc09wdGlvbnNdKTtcblxuICBjb25zdCBnZXRUYWdWYWx1ZU9wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5wdXRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgICByZXR1cm4gZ2V0VGFnVmFsdWVzU2VsZWN0YWJsZXMoc3RhdGUsIHRhZywgdGFnSW5kZXgsIGlucHV0VmFsdWUgfHwgJycpO1xuICAgIH0sXG4gICAgW3N0YXRlLCB0YWdJbmRleCwgdGFnXVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRHZXRUYWdWYWx1ZU9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IGRlYm91bmNlKGdldFRhZ1ZhbHVlT3B0aW9ucywgMjAwLCB7IGxlYWRpbmc6IHRydWUgfSksXG4gICAgW2dldFRhZ1ZhbHVlT3B0aW9uc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VnbWVudEFzeW5jXG4gICAgICAgIGlucHV0TWluV2lkdGg9ezE1MH1cbiAgICAgICAgdmFsdWU9e3RhZy5rZXl9XG4gICAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRHZXRUYWdzT3B0aW9uc31cbiAgICAgICAgcmVsb2FkT3B0aW9uc09uQ2hhbmdlPXt0cnVlfVxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgICBhY3Rpb25zLnRhZ0NoYW5nZWQoe1xuICAgICAgICAgICAgICB0YWc6IHsgLi4udGFnLCBrZXk6IHZhbHVlLnZhbHVlISB9LFxuICAgICAgICAgICAgICBpbmRleDogdGFnSW5kZXgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAvPlxuICAgICAgPFNlZ21lbnQ8R3JhcGhpdGVUYWdPcGVyYXRvcj5cbiAgICAgICAgaW5wdXRNaW5XaWR0aD17NTB9XG4gICAgICAgIHZhbHVlPXt0YWcub3BlcmF0b3J9XG4gICAgICAgIG9wdGlvbnM9e2dldFRhZ09wZXJhdG9yc1NlbGVjdGFibGVzKCl9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIGFjdGlvbnMudGFnQ2hhbmdlZCh7XG4gICAgICAgICAgICAgIHRhZzogeyAuLi50YWcsIG9wZXJhdG9yOiB2YWx1ZS52YWx1ZSEgfSxcbiAgICAgICAgICAgICAgaW5kZXg6IHRhZ0luZGV4LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxTZWdtZW50QXN5bmNcbiAgICAgICAgaW5wdXRNaW5XaWR0aD17MTUwfVxuICAgICAgICB2YWx1ZT17dGFnLnZhbHVlfVxuICAgICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkR2V0VGFnVmFsdWVPcHRpb25zfVxuICAgICAgICByZWxvYWRPcHRpb25zT25DaGFuZ2U9e3RydWV9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIGFjdGlvbnMudGFnQ2hhbmdlZCh7XG4gICAgICAgICAgICAgIHRhZzogeyAuLi50YWcsIHZhbHVlOiB2YWx1ZS52YWx1ZSEgfSxcbiAgICAgICAgICAgICAgaW5kZXg6IHRhZ0luZGV4LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgU2VnbWVudEFzeW5jLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZVRhZyB9IGZyb20gJy4uL2dyYXBoaXRlX3F1ZXJ5JztcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAnLi4vc3RhdGUvY29udGV4dCc7XG5pbXBvcnQgeyBnZXRUYWdzQXNTZWdtZW50c1NlbGVjdGFibGVzIH0gZnJvbSAnLi4vc3RhdGUvcHJvdmlkZXJzJztcbmltcG9ydCB7IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL3N0b3JlJztcbmltcG9ydCB7IEdyYXBoaXRlU2VnbWVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgUGxheUJ1dHRvbiB9IGZyb20gJy4vUGxheUJ1dHRvbic7XG5pbXBvcnQgeyBUYWdFZGl0b3IgfSBmcm9tICcuL1RhZ0VkaXRvcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRhZ3M6IEdyYXBoaXRlVGFnW107XG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYWxsIHRhZ3MgYW5kIGEgYnV0dG9uIGFsbG93aW5nIHRvIGFkZCBtb3JlIHRhZ3MuXG4gKlxuICogT3B0aW9ucyBmb3IgdGFnIG5hbWVzIGFyZSByZWxvYWRlZCB3aGlsZSB1c2VyIGlzIHR5cGluZyB3aXRoIGJhY2tlbmQgdGFraW5nIGNhcmUgb2YgYXV0by1jb21wbGV0ZVxuICogKGF1dG8tY29tcGxldGUgY2Fubm90IGJlIGltcGxlbWVudGVkIGluIGZyb250LWVuZCBiZWNhdXNlIGJhY2tlbmQgcmV0dXJucyBvbmx5IGxpbWl0ZWQgbnVtYmVyIG9mIGVudHJpZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUYWdzU2VjdGlvbih7IHRhZ3MsIHN0YXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIC8vIE9wdGlvbnMgYXJlIHJlbG9hZGVkIHdoaWxlIHVzZXIgaXMgdHlwaW5nIHdpdGggYmFja2VuZCB0YWtpbmcgY2FyZSBvZiBhdXRvLWNvbXBsZXRlIChhdXRvLWNvbXBsZXRlIGNhbm5vdCBiZVxuICAvLyBpbXBsZW1lbnRlZCBpbiBmcm9udC1lbmQgYmVjYXVzZSBiYWNrZW5kIHJldHVybnMgb25seSBsaW1pdGVkIG51bWJlciBvZiBlbnRyaWVzKVxuICBjb25zdCBnZXRUYWdzQXNTZWdtZW50c09wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5wdXRWYWx1ZT86IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGdldFRhZ3NBc1NlZ21lbnRzU2VsZWN0YWJsZXMoc3RhdGUsIGlucHV0VmFsdWUgfHwgJycpO1xuICAgIH0sXG4gICAgW3N0YXRlXVxuICApO1xuICBjb25zdCBkZWJvdW5jZWRHZXRUYWdzQXNTZWdtZW50cyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gZGVib3VuY2UoZ2V0VGFnc0FzU2VnbWVudHNPcHRpb25zLCAyMDAsIHsgbGVhZGluZzogdHJ1ZSB9KSxcbiAgICBbZ2V0VGFnc0FzU2VnbWVudHNPcHRpb25zXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt0YWdzLm1hcCgodGFnLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPFRhZ0VkaXRvciBrZXk9e2luZGV4fSB0YWdJbmRleD17aW5kZXh9IHRhZz17dGFnfSBzdGF0ZT17c3RhdGV9IC8+O1xuICAgICAgfSl9XG4gICAgICB7dGFncy5sZW5ndGggJiYgKFxuICAgICAgICA8U2VnbWVudEFzeW5jPEdyYXBoaXRlU2VnbWVudD5cbiAgICAgICAgICBpbnB1dE1pbldpZHRoPXsxNTB9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5hZGROZXdUYWcoeyBzZWdtZW50OiB2YWx1ZS52YWx1ZSEgfSkpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZEdldFRhZ3NBc1NlZ21lbnRzfVxuICAgICAgICAgIHJlbG9hZE9wdGlvbnNPbkNoYW5nZT17dHJ1ZX1cbiAgICAgICAgICBDb21wb25lbnQ9ezxCdXR0b24gaWNvbj1cInBsdXNcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBhcmlhLWxhYmVsPVwiQWRkIG5ldyB0YWdcIiAvPn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7c3RhdGUucGF1c2VkICYmIDxQbGF5QnV0dG9uIC8+fVxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBidXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JFYWNoLCBzb3J0QnkgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgRnVuY0RlZnMsIEZ1bmNJbnN0YW5jZSwgUGFyYW1EZWYgfSBmcm9tICcuLi9nZnVuYyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IEVkaXRhYmxlUGFyYW0gfSBmcm9tICcuL0Z1bmN0aW9uUGFyYW1FZGl0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFwU3RyaW5nc1RvU2VsZWN0YWJsZXM8VCBleHRlbmRzIHN0cmluZz4odmFsdWVzOiBUW10pOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8VD4+IHtcbiAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiAoe1xuICAgIHZhbHVlLFxuICAgIGxhYmVsOiB2YWx1ZSxcbiAgfSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwU2VnbWVudHNUb1NlbGVjdGFibGVzKHNlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXSk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxHcmFwaGl0ZVNlZ21lbnQ+PiB7XG4gIHJldHVybiBzZWdtZW50cy5tYXAoKHNlZ21lbnQpID0+ICh7XG4gICAgbGFiZWw6IHNlZ21lbnQudmFsdWUsXG4gICAgdmFsdWU6IHNlZ21lbnQsXG4gIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEZ1bmNEZWZzVG9TZWxlY3RhYmxlcyhmdW5jRGVmczogRnVuY0RlZnMpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBhbnkgPSB7fTtcblxuICBmb3JFYWNoKGZ1bmNEZWZzLCAoZnVuY0RlZikgPT4ge1xuICAgIGlmICghZnVuY0RlZi5jYXRlZ29yeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWNhdGVnb3JpZXNbZnVuY0RlZi5jYXRlZ29yeV0pIHtcbiAgICAgIGNhdGVnb3JpZXNbZnVuY0RlZi5jYXRlZ29yeV0gPSB7IGxhYmVsOiBmdW5jRGVmLmNhdGVnb3J5LCB2YWx1ZTogZnVuY0RlZi5jYXRlZ29yeSwgb3B0aW9uczogW10gfTtcbiAgICB9XG4gICAgY2F0ZWdvcmllc1tmdW5jRGVmLmNhdGVnb3J5XS5vcHRpb25zLnB1c2goe1xuICAgICAgbGFiZWw6IGZ1bmNEZWYubmFtZSxcbiAgICAgIHZhbHVlOiBmdW5jRGVmLm5hbWUsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzb3J0QnkoY2F0ZWdvcmllcywgJ2xhYmVsJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRhYmxlUGFyYW0ocGFyYW1EZWY6IFBhcmFtRGVmLCBhZGRpdGlvbmFsOiBib29sZWFuLCB2YWx1ZT86IHN0cmluZyB8IG51bWJlcik6IEVkaXRhYmxlUGFyYW0ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHBhcmFtRGVmLm5hbWUsXG4gICAgdmFsdWU6IHZhbHVlPy50b1N0cmluZygpIHx8ICcnLFxuICAgIG9wdGlvbmFsOiAhIXBhcmFtRGVmLm9wdGlvbmFsIHx8IGFkZGl0aW9uYWwsIC8vIG9ubHkgZmlyc3QgcGFyYW0gaXMgcmVxdWlyZWQgd2hlbiBtdWx0aXBsZSBhcmUgYWxsb3dlZFxuICAgIG11bHRpcGxlOiAhIXBhcmFtRGVmLm11bHRpcGxlLFxuICAgIG9wdGlvbnM6XG4gICAgICBwYXJhbURlZi5vcHRpb25zPy5tYXAoKG9wdGlvbjogc3RyaW5nIHwgbnVtYmVyKSA9PiAoe1xuICAgICAgICB2YWx1ZTogb3B0aW9uLnRvU3RyaW5nKCksXG4gICAgICAgIGxhYmVsOiBvcHRpb24udG9TdHJpbmcoKSxcbiAgICAgIH0pKSA/PyBbXSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBsaXN0IG9mIHBhcmFtcyB0aGF0IGNhbiBiZSBlZGl0ZWQgaW4gdGhlIGZ1bmN0aW9uIGVkaXRvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcEZ1bmNJbnN0YW5jZVRvUGFyYW1zKGZ1bmM6IEZ1bmNJbnN0YW5jZSk6IEVkaXRhYmxlUGFyYW1bXSB7XG4gIC8vIGxpc3Qgb2YgcmVxdWlyZWQgcGFyYW1ldGVycyAoZnJvbSBmdW5jLmRlZilcbiAgY29uc3QgcGFyYW1zOiBFZGl0YWJsZVBhcmFtW10gPSBmdW5jLmRlZi5wYXJhbXMubWFwKChwYXJhbURlZjogUGFyYW1EZWYsIGluZGV4OiBudW1iZXIpID0+XG4gICAgY3JlYXRlRWRpdGFibGVQYXJhbShwYXJhbURlZiwgZmFsc2UsIGZ1bmMucGFyYW1zW2luZGV4XSlcbiAgKTtcblxuICAvLyBsaXN0IG9mIGFkZGl0aW9uYWwgKG11bHRpcGxlIG9yIG9wdGlvbmFsKSBwYXJhbXMgZW50ZXJlZCBieSB0aGUgdXNlclxuICB3aGlsZSAocGFyYW1zLmxlbmd0aCA8IGZ1bmMucGFyYW1zLmxlbmd0aCkge1xuICAgIGNvbnN0IHBhcmFtRGVmID0gZnVuYy5kZWYucGFyYW1zW2Z1bmMuZGVmLnBhcmFtcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCB2YWx1ZSA9IGZ1bmMucGFyYW1zW3BhcmFtcy5sZW5ndGhdO1xuICAgIHBhcmFtcy5wdXNoKGNyZWF0ZUVkaXRhYmxlUGFyYW0ocGFyYW1EZWYsIHRydWUsIHZhbHVlKSk7XG4gIH1cblxuICAvLyBleHRyYSBcImZha2VcIiBwYXJhbSB0byBhbGxvdyBhZGRpbmcgbW9yZSBtdWx0aXBsZSB2YWx1ZXMgYXQgdGhlIGVuZFxuICBpZiAocGFyYW1zLmxlbmd0aCAmJiBwYXJhbXNbcGFyYW1zLmxlbmd0aCAtIDFdLnZhbHVlICYmIHBhcmFtc1twYXJhbXMubGVuZ3RoIC0gMV0/Lm11bHRpcGxlKSB7XG4gICAgY29uc3QgcGFyYW1EZWYgPSBmdW5jLmRlZi5wYXJhbXNbZnVuYy5kZWYucGFyYW1zLmxlbmd0aCAtIDFdO1xuICAgIHBhcmFtcy5wdXNoKGNyZWF0ZUVkaXRhYmxlUGFyYW0ocGFyYW1EZWYsIHRydWUsICcnKSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbixcbiAgb25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb25TZWxlY3QsXG4gIG9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uQ2hlY2tlZCxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgRGF0YVNvdXJjZUh0dHBTZXR0aW5ncywgSW5saW5lRm9ybUxhYmVsLCBMZWdhY3lGb3JtcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5cbmltcG9ydCB7IEdyYXBoaXRlT3B0aW9ucywgR3JhcGhpdGVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgREVGQVVMVF9HUkFQSElURV9WRVJTSU9OLCBHUkFQSElURV9WRVJTSU9OUyB9IGZyb20gJy4uL3ZlcnNpb25zJztcblxuaW1wb3J0IHsgTWFwcGluZ3NDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9NYXBwaW5nc0NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgZnJvbVN0cmluZywgdG9TdHJpbmcgfSBmcm9tICcuL3BhcnNlTG9raUxhYmVsTWFwcGluZ3MnO1xuXG5jb25zdCB7IFNlbGVjdCwgU3dpdGNoIH0gPSBMZWdhY3lGb3JtcztcbmV4cG9ydCBjb25zdCBTSE9XX01BUFBJTkdTX0hFTFBfS0VZID0gJ2dyYWZhbmEuZGF0YXNvdXJjZXMuZ3JhcGhpdGUuY29uZmlnLnNob3dNYXBwaW5nc0hlbHAnO1xuXG5jb25zdCBncmFwaGl0ZVZlcnNpb25zID0gR1JBUEhJVEVfVkVSU0lPTlMubWFwKCh2ZXJzaW9uKSA9PiAoeyBsYWJlbDogYCR7dmVyc2lvbn0ueGAsIHZhbHVlOiB2ZXJzaW9uIH0pKTtcblxuY29uc3QgZ3JhcGhpdGVUeXBlcyA9IE9iamVjdC5lbnRyaWVzKEdyYXBoaXRlVHlwZSkubWFwKChbbGFiZWwsIHZhbHVlXSkgPT4gKHtcbiAgbGFiZWwsXG4gIHZhbHVlLFxufSkpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8R3JhcGhpdGVPcHRpb25zPjtcblxudHlwZSBTdGF0ZSA9IHtcbiAgc2hvd01hcHBpbmdzSGVscDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dNYXBwaW5nc0hlbHA6IHN0b3JlLmdldE9iamVjdChTSE9XX01BUFBJTkdTX0hFTFBfS0VZLCB0cnVlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyVHlwZUhlbHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxwPlxuICAgICAgICBUaGVyZSBhcmUgZGlmZmVyZW50IHR5cGVzIG9mIEdyYXBoaXRlIGNvbXBhdGlibGUgYmFja2VuZHMuIEhlcmUgeW91IGNhbiBzcGVjaWZ5IHRoZSB0eXBlIHlvdSBhcmUgdXNpbmcuIElmIHlvdVxuICAgICAgICBhcmUgdXNpbmd7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvbWV0cmljdGFua1wiIGNsYXNzTmFtZT1cInBvaW50ZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgTWV0cmljdGFua1xuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgdGhlbiBzZWxlY3QgdGhhdCBoZXJlLiBUaGlzIHdpbGwgZW5hYmxlIE1ldHJpY3Rhbmsgc3BlY2lmaWMgZmVhdHVyZXMgbGlrZSBxdWVyeSBwcm9jZXNzaW5nIG1ldGEgZGF0YS4gTWV0cmljdGFua1xuICAgICAgICBpcyBhIG11bHRpLXRlbmFudCB0aW1lc2VyaWVzIGVuZ2luZSBmb3IgR3JhcGhpdGUgYW5kIGZyaWVuZHMuXG4gICAgICA8L3A+XG4gICAgKTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ2dyYXBoaXRlVmVyc2lvbicsIHRoaXMuY3VycmVudEdyYXBoaXRlVmVyc2lvbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjdXJyZW50VmVyc2lvbiA9IGdyYXBoaXRlVmVyc2lvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS52YWx1ZSA9PT0gdGhpcy5jdXJyZW50R3JhcGhpdGVWZXJzaW9uKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7b3B0aW9ucy5hY2Nlc3MgPT09ICdkaXJlY3QnICYmIChcbiAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJEZXByZWNhdGlvbiBOb3RpY2VcIiBzZXZlcml0eT1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgIFRoaXMgZGF0YSBzb3VyY2UgdXNlcyBicm93c2VyIGFjY2VzcyBtb2RlLiBUaGlzIG1vZGUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuIFBsZWFzZVxuICAgICAgICAgICAgdXNlIHNlcnZlciBhY2Nlc3MgbW9kZSBpbnN0ZWFkLlxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICl9XG4gICAgICAgIDxEYXRhU291cmNlSHR0cFNldHRpbmdzXG4gICAgICAgICAgZGVmYXVsdFVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiXG4gICAgICAgICAgZGF0YVNvdXJjZUNvbmZpZz17b3B0aW9uc31cbiAgICAgICAgICBvbkNoYW5nZT17b25PcHRpb25zQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+R3JhcGhpdGUgZGV0YWlsczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIHRvb2x0aXA9XCJUaGlzIG9wdGlvbiBjb250cm9scyB3aGF0IGZ1bmN0aW9ucyBhcmUgYXZhaWxhYmxlIGluIHRoZSBHcmFwaGl0ZSBxdWVyeSBlZGl0b3IuXCI+XG4gICAgICAgICAgICAgICAgVmVyc2lvblxuICAgICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHcmFwaGl0ZSB2ZXJzaW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudFZlcnNpb259XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Z3JhcGhpdGVWZXJzaW9uc31cbiAgICAgICAgICAgICAgICB3aWR0aD17OH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb25TZWxlY3QodGhpcy5wcm9wcywgJ2dyYXBoaXRlVmVyc2lvbicpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgdG9vbHRpcD17dGhpcy5yZW5kZXJUeXBlSGVscH0+VHlwZTwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyYXBoaXRlIGJhY2tlbmQgdHlwZVwiXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Z3JhcGhpdGVUeXBlc31cbiAgICAgICAgICAgICAgICB2YWx1ZT17Z3JhcGhpdGVUeXBlcy5maW5kKCh0eXBlKSA9PiB0eXBlLnZhbHVlID09PSBvcHRpb25zLmpzb25EYXRhLmdyYXBoaXRlVHlwZSl9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezh9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0KHRoaXMucHJvcHMsICdncmFwaGl0ZVR5cGUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtvcHRpb25zLmpzb25EYXRhLmdyYXBoaXRlVHlwZSA9PT0gR3JhcGhpdGVUeXBlLk1ldHJpY3RhbmsgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlJvbGx1cCBpbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgICAgbGFiZWxDbGFzcz17J3dpZHRoLTEwJ31cbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJTaG93cyB1cCBhcyBhbiBpbmZvIGljb24gaW4gcGFuZWwgaGVhZGVycyB3aGVuIGRhdGEgaXMgYWdncmVnYXRlZFwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXshIW9wdGlvbnMuanNvbkRhdGEucm9sbHVwSW5kaWNhdG9yRW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvbkNoZWNrZWQodGhpcy5wcm9wcywgJ3JvbGx1cEluZGljYXRvckVuYWJsZWQnKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWFwcGluZ3NDb25maWd1cmF0aW9uXG4gICAgICAgICAgbWFwcGluZ3M9eyhvcHRpb25zLmpzb25EYXRhLmltcG9ydENvbmZpZ3VyYXRpb24/Lmxva2k/Lm1hcHBpbmdzIHx8IFtdKS5tYXAodG9TdHJpbmcpfVxuICAgICAgICAgIHNob3dIZWxwPXt0aGlzLnN0YXRlLnNob3dNYXBwaW5nc0hlbHB9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01hcHBpbmdzSGVscDogZmFsc2UgfSk7XG4gICAgICAgICAgICBzdG9yZS5zZXRPYmplY3QoU0hPV19NQVBQSU5HU19IRUxQX0tFWSwgZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25SZXN0b3JlSGVscD17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNYXBwaW5nc0hlbHA6IHRydWUgfSk7XG4gICAgICAgICAgICBzdG9yZS5zZXRPYmplY3QoU0hPV19NQVBQSU5HU19IRUxQX0tFWSwgdHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17KG1hcHBpbmdzKSA9PiB7XG4gICAgICAgICAgICBvbk9wdGlvbnNDaGFuZ2Uoe1xuICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICBqc29uRGF0YToge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEsXG4gICAgICAgICAgICAgICAgaW1wb3J0Q29uZmlndXJhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS5pbXBvcnRDb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgbG9raToge1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nczogbWFwcGluZ3MubWFwKGZyb21TdHJpbmcpLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBjdXJyZW50R3JhcGhpdGVWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnMuanNvbkRhdGEuZ3JhcGhpdGVWZXJzaW9uIHx8IERFRkFVTFRfR1JBUEhJVEVfVkVSU0lPTjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgTWFwcGluZ3NIZWxwIGZyb20gJy4vTWFwcGluZ3NIZWxwJztcblxudHlwZSBQcm9wcyA9IHtcbiAgbWFwcGluZ3M6IHN0cmluZ1tdO1xuICBvbkNoYW5nZTogKG1hcHBpbmdzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xuICBvblJlc3RvcmVIZWxwOiAoKSA9PiB2b2lkO1xuICBzaG93SGVscDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBNYXBwaW5nc0NvbmZpZ3VyYXRpb24gPSAocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbbWFwcGluZ3MsIHNldE1hcHBpbmdzXSA9IHVzZVN0YXRlKHByb3BzLm1hcHBpbmdzIHx8IFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+TGFiZWwgbWFwcGluZ3M8L2gzPlxuICAgICAgeyFwcm9wcy5zaG93SGVscCAmJiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIDxCdXR0b24gZmlsbD1cInRleHRcIiBvbkNsaWNrPXtwcm9wcy5vblJlc3RvcmVIZWxwfT5cbiAgICAgICAgICAgIExlYXJuIGhvdyBsYWJlbCBtYXBwaW5ncyB3b3JrXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgICB7cHJvcHMuc2hvd0hlbHAgJiYgPE1hcHBpbmdzSGVscCBvbkRpc21pc3M9e3Byb3BzLm9uRGlzbWlzc30gLz59XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICB7bWFwcGluZ3MubWFwKChtYXBwaW5nLCBpKSA9PiAoXG4gICAgICAgICAgPElubGluZUZpZWxkUm93IGtleT17aX0+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9e2BNYXBwaW5nICgke2kgKyAxfSlgfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoY2hhbmdlRXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgbmV3TWFwcGluZ3MgPSBtYXBwaW5ncy5jb25jYXQoKTtcbiAgICAgICAgICAgICAgICAgIG5ld01hcHBpbmdzW2ldID0gY2hhbmdlRXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgc2V0TWFwcGluZ3MobmV3TWFwcGluZ3MpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShtYXBwaW5ncyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gdGVzdC5tZXRyaWMuKGxhYmVsTmFtZSkuKlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e21hcHBpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZSBoZWFkZXJcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KF8pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3TWFwcGluZ3MgPSBtYXBwaW5ncy5jb25jYXQoKTtcbiAgICAgICAgICAgICAgICBuZXdNYXBwaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgc2V0TWFwcGluZ3MobmV3TWFwcGluZ3MpO1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG5ld01hcHBpbmdzKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInRyYXNoLWFsdFwiIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICApKX1cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRNYXBwaW5ncyhbLi4ubWFwcGluZ3MsICcnXSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCBsYWJlbCBtYXBwaW5nXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcHBpbmdzSGVscChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0IHNldmVyaXR5PVwiaW5mb1wiIHRpdGxlPVwiSG93IHRvIG1hcCBHcmFwaGl0ZSBtZXRyaWNzIHRvIGxhYmVscz9cIiBvblJlbW92ZT17cHJvcHMub25EaXNtaXNzfT5cbiAgICAgIDxwPk1hcHBpbmdzIGFyZSBjdXJyZW50bHkgc3VwcG9ydGVkIG9ubHkgYmV0d2VlbiBHcmFwaGl0ZSBhbmQgTG9raSBxdWVyaWVzLjwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXaGVuIHlvdSBzd2l0Y2ggeW91ciBkYXRhIHNvdXJjZSBmcm9tIEdyYXBoaXRlIHRvIExva2ksIHlvdXIgcXVlcmllcyBhcmUgbWFwcGVkIGFjY29yZGluZyB0byB0aGUgbWFwcGluZ3NcbiAgICAgICAgZGVmaW5lZCBpbiB0aGUgZXhhbXBsZSBiZWxvdy4gVG8gZGVmaW5lIGEgbWFwcGluZywgd3JpdGUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgbWV0cmljIGFuZCByZXBsYWNlIG5vZGVzIHlvdSB3YW50XG4gICAgICAgIHRvIG1hcCB0byBsYWJlbCB3aXRoIHRoZSBsYWJlbCBuYW1lIGluIHBhcmVudGhlc2VzLiBUaGUgdmFsdWUgb2YgdGhlIGxhYmVsIGlzIGV4dHJhY3RlZCBmcm9tIHlvdXIgR3JhcGhpdGUgcXVlcnlcbiAgICAgICAgd2hlbiB5b3Ugc3dpdGNoIGRhdGEgc291cmNlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBBbGwgdGFncyBhcmUgYXV0b21hdGljYWxseSBtYXBwZWQgdG8gbGFiZWxzIHJlZ2FyZGxlc3Mgb2YgdGhlIG1hcHBpbmcgY29uZmlndXJhdGlvbi4gR3JhcGhpdGUgbWF0Y2hpbmcgcGF0dGVybnNcbiAgICAgICAgKHVzaW5nICYjMTIzOyYjMTI1OykgYXJlIGNvbnZlcnRlZCB0byBMb2tpJmFwb3M7cyByZWd1bGFyIGV4cHJlc3Npb25zIG1hdGNoaW5nIHBhdHRlcm5zLiBXaGVuIHlvdSB1c2UgZnVuY3Rpb25zXG4gICAgICAgIGluIHlvdXIgcXVlcmllcywgdGhlIG1ldHJpY3MsIGFuZCB0YWdzIGFyZSBleHRyYWN0ZWQgdG8gbWF0Y2ggdGhlbSB3aXRoIGRlZmluZWQgbWFwcGluZ3MuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgRXhhbXBsZTogZm9yIGEgbWFwcGluZyA9IDxjb2RlPnNlcnZlcnMuKGNsdXN0ZXIpLihzZXJ2ZXIpLio8L2NvZGU+OlxuICAgICAgPC9wPlxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkdyYXBoaXRlIHF1ZXJ5PC90aD5cbiAgICAgICAgICAgIDx0aD5NYXBwZWQgdG8gTG9raSBxdWVyeTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgICAgYWxpYXMoc2VydmVycy48dT53ZXN0PC91Pi48dT4wMDE8L3U+LmNwdSwxLDIpXG4gICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICAgICYjMTIzO2NsdXN0ZXI9JnF1b3Q7PHU+d2VzdDwvdT4mcXVvdDssIHNlcnZlcj0mcXVvdDs8dT4wMDE8L3U+JnF1b3Q7JiMxMjU7XG4gICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICAgIGFsaWFzKHNlcnZlcnMuKi48dT4mIzEyMzswMDEsMDAyJiMxMjU7PC91Pi4qLDEsMilcbiAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgICAgJiMxMjM7c2VydmVyPX4mcXVvdDs8dT4oMDAxfDAwMik8L3U+JnF1b3Q7JiMxMjU7XG4gICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPmludGVycG9sYXRlKHNlcmllc0J5VGFnKCZhcG9zO2Zvbz1iYXImYXBvczssICZhcG9zO3NlcnZlcj0wMDImYXBvczspLCBpbmYpKTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxjb2RlPiYjMTIzO2Zvbz0mcXVvdDtiYXImcXVvdDssIHNlcnZlcj0mcXVvdDswMDImcXVvdDsmIzEyNTs8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvQWxlcnQ+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBHcmFwaGl0ZUxva2lNYXBwaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc2ltcGxlIHN0cmluZyB1c2VkIGluIExva2lMb2dzTWFwcGluZ3MgY29tcG9uZW50IChlLmcuIFwic2VydmVycy4obmFtZSkuKlwiKVxuICogdG8gZGF0YSBtb2RlbCBzYXZlZCBpbiBkYXRhIHNvdXJjZSBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVN0cmluZyh0ZXh0OiBzdHJpbmcpOiBHcmFwaGl0ZUxva2lNYXBwaW5nIHtcbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVyczogdGV4dC5zcGxpdCgnLicpLm1hcCgobWV0cmljTm9kZSkgPT4ge1xuICAgICAgaWYgKG1ldHJpY05vZGUuc3RhcnRzV2l0aCgnKCcpICYmIG1ldHJpY05vZGUuZW5kc1dpdGgoJyknKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiAnKicsXG4gICAgICAgICAgbGFiZWxOYW1lOiBtZXRyaWNOb2RlLnNsaWNlKDEsIC0xKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBtZXRyaWNOb2RlIH07XG4gICAgICB9XG4gICAgfSksXG4gIH07XG59XG5cbi8qKlxuICogQ292ZXJ0cyBjb25maWd1cmF0aW9uIHN0b3JlZCBpbiBkYXRhIHNvdXJjZSBjb25maWd1cmF0aW9uIGludG8gYSBzdHJpbmcgZGlzcGxheWVkIGluIExva2lMb2dzTWFwcGluZ3MgY29tcG9uZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcobWFwcGluZzogR3JhcGhpdGVMb2tpTWFwcGluZyk6IHN0cmluZyB7XG4gIHJldHVybiBtYXBwaW5nLm1hdGNoZXJzXG4gICAgLm1hcCgobWF0Y2hlcikgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoZXIubGFiZWxOYW1lID8gYCgke21hdGNoZXIubGFiZWxOYW1lfSlgIDogYCR7bWF0Y2hlci52YWx1ZX1gO1xuICAgIH0pXG4gICAgLmpvaW4oJy4nKTtcbn1cbiIsImltcG9ydCB7IGVhY2gsIGluZGV4T2YsIGlzQXJyYXksIGlzU3RyaW5nLCBtYXAgYXMgX21hcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tLCBPYnNlcnZhYmxlLCBvZiwgT3BlcmF0b3JGdW5jdGlvbiwgcGlwZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYXRhRnJhbWUsXG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlQXBpLFxuICBEYXRhU291cmNlV2l0aFF1ZXJ5RXhwb3J0U3VwcG9ydCxcbiAgZGF0ZU1hdGgsXG4gIEFic3RyYWN0UXVlcnksXG4gIEFic3RyYWN0TGFiZWxPcGVyYXRvcixcbiAgQWJzdHJhY3RMYWJlbE1hdGNoZXIsXG4gIE1ldHJpY0ZpbmRWYWx1ZSxcbiAgUXVlcnlSZXN1bHRNZXRhU3RhdCxcbiAgU2NvcGVkVmFycyxcbiAgVGltZVJhbmdlLFxuICB0b0RhdGFGcmFtZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBpc1ZlcnNpb25HdE9yRXEsIFNlbVZlcnNpb24gfSBmcm9tICdhcHAvY29yZS91dGlscy92ZXJzaW9uJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG5pbXBvcnQgeyBnZXRSb2xsdXBOb3RpY2UsIGdldFJ1bnRpbWVDb25zb2xpZGF0aW9uTm90aWNlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFwaGl0ZS9tZXRhJztcblxuaW1wb3J0IHsgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvdmFyaWFibGVzL3V0aWxzJztcblxuaW1wb3J0IGdmdW5jLCB7IEZ1bmNEZWZzLCBGdW5jSW5zdGFuY2UgfSBmcm9tICcuL2dmdW5jJztcbmltcG9ydCBHcmFwaGl0ZVF1ZXJ5TW9kZWwgZnJvbSAnLi9ncmFwaGl0ZV9xdWVyeSc7XG4vLyBUeXBlc1xuaW1wb3J0IHtcbiAgR3JhcGhpdGVMb2tpTWFwcGluZyxcbiAgR3JhcGhpdGVNZXRyaWNMb2tpTWF0Y2hlcixcbiAgR3JhcGhpdGVPcHRpb25zLFxuICBHcmFwaGl0ZVF1ZXJ5LFxuICBHcmFwaGl0ZVF1ZXJ5SW1wb3J0Q29uZmlndXJhdGlvbixcbiAgR3JhcGhpdGVUeXBlLFxuICBNZXRyaWNUYW5rUmVxdWVzdE1ldGEsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgcmVkdWNlRXJyb3IgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IERFRkFVTFRfR1JBUEhJVEVfVkVSU0lPTiB9IGZyb20gJy4vdmVyc2lvbnMnO1xuXG5jb25zdCBHUkFQSElURV9UQUdfQ09NUEFSQVRPUlMgPSB7XG4gICc9JzogQWJzdHJhY3RMYWJlbE9wZXJhdG9yLkVxdWFsLFxuICAnIT0nOiBBYnN0cmFjdExhYmVsT3BlcmF0b3IuTm90RXF1YWwsXG4gICc9fic6IEFic3RyYWN0TGFiZWxPcGVyYXRvci5FcXVhbFJlZ0V4LFxuICAnIT1+JzogQWJzdHJhY3RMYWJlbE9wZXJhdG9yLk5vdEVxdWFsUmVnRXgsXG59O1xuXG4vKipcbiAqIENvbnZlcnRzIEdyYXBoaXRlIGdsb2ItbGlrZSBwYXR0ZXJuIHRvIGEgcmVndWxhciBleHByZXNzaW9uXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRHbG9iVG9SZWdFeCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAodGV4dC5pbmNsdWRlcygnKicpIHx8IHRleHQuaW5jbHVkZXMoJ3snKSkge1xuICAgIHJldHVybiAnXicgKyB0ZXh0LnJlcGxhY2UoL1xcKi9nLCAnLionKS5yZXBsYWNlKC9cXHsvZywgJygnKS5yZXBsYWNlKC99L2csICcpJykucmVwbGFjZSgvLC9nLCAnfCcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHcmFwaGl0ZURhdGFzb3VyY2VcbiAgZXh0ZW5kcyBEYXRhU291cmNlQXBpPEdyYXBoaXRlUXVlcnksIEdyYXBoaXRlT3B0aW9ucywgR3JhcGhpdGVRdWVyeUltcG9ydENvbmZpZ3VyYXRpb24+XG4gIGltcGxlbWVudHMgRGF0YVNvdXJjZVdpdGhRdWVyeUV4cG9ydFN1cHBvcnQ8R3JhcGhpdGVRdWVyeT5cbntcbiAgYmFzaWNBdXRoOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGdyYXBoaXRlVmVyc2lvbjogYW55O1xuICBzdXBwb3J0c1RhZ3M6IGJvb2xlYW47XG4gIGlzTWV0cmljVGFuazogYm9vbGVhbjtcbiAgcm9sbHVwSW5kaWNhdG9yRW5hYmxlZDogYm9vbGVhbjtcbiAgY2FjaGVUaW1lb3V0OiBhbnk7XG4gIHdpdGhDcmVkZW50aWFsczogYm9vbGVhbjtcbiAgZnVuY0RlZnM6IEZ1bmNEZWZzIHwgbnVsbCA9IG51bGw7XG4gIGZ1bmNEZWZzUHJvbWlzZTogUHJvbWlzZTxhbnk+IHwgbnVsbCA9IG51bGw7XG4gIF9zZXJpZXNSZWZMZXR0ZXJzOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWV0cmljTWFwcGluZ3M6IEdyYXBoaXRlTG9raU1hcHBpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihpbnN0YW5jZVNldHRpbmdzOiBhbnksIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKSkge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMuYmFzaWNBdXRoID0gaW5zdGFuY2VTZXR0aW5ncy5iYXNpY0F1dGg7XG4gICAgdGhpcy51cmwgPSBpbnN0YW5jZVNldHRpbmdzLnVybDtcbiAgICB0aGlzLm5hbWUgPSBpbnN0YW5jZVNldHRpbmdzLm5hbWU7XG4gICAgLy8gZ3JhcGhpdGVWZXJzaW9uIGlzIHNldCB3aGVuIGEgZGF0YXNvdXJjZSBpcyBjcmVhdGVkIGJ1dCBpdCBoYWRuJ3QgYmVlbiBzZXQgaW4gdGhlIHBhc3Qgc28gd2UncmVcbiAgICAvLyBzdGlsbCBmYWxsaW5nIGJhY2sgdG8gdGhlIGRlZmF1bHQgYmVoYXZpb3IgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKHNlZSBhbHNvICMxNzQyOSlcbiAgICB0aGlzLmdyYXBoaXRlVmVyc2lvbiA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuZ3JhcGhpdGVWZXJzaW9uIHx8IERFRkFVTFRfR1JBUEhJVEVfVkVSU0lPTjtcbiAgICB0aGlzLm1ldHJpY01hcHBpbmdzID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5pbXBvcnRDb25maWd1cmF0aW9uPy5sb2tpPy5tYXBwaW5ncyB8fCBbXTtcbiAgICB0aGlzLmlzTWV0cmljVGFuayA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuZ3JhcGhpdGVUeXBlID09PSBHcmFwaGl0ZVR5cGUuTWV0cmljdGFuaztcbiAgICB0aGlzLnN1cHBvcnRzVGFncyA9IHN1cHBvcnRzVGFncyh0aGlzLmdyYXBoaXRlVmVyc2lvbik7XG4gICAgdGhpcy5jYWNoZVRpbWVvdXQgPSBpbnN0YW5jZVNldHRpbmdzLmNhY2hlVGltZW91dDtcbiAgICB0aGlzLnJvbGx1cEluZGljYXRvckVuYWJsZWQgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLnJvbGx1cEluZGljYXRvckVuYWJsZWQ7XG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBpbnN0YW5jZVNldHRpbmdzLndpdGhDcmVkZW50aWFscztcbiAgICB0aGlzLmZ1bmNEZWZzID0gbnVsbDtcbiAgICB0aGlzLmZ1bmNEZWZzUHJvbWlzZSA9IG51bGw7XG4gICAgdGhpcy5fc2VyaWVzUmVmTGV0dGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gIH1cblxuICBnZXRRdWVyeU9wdGlvbnNJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXhEYXRhUG9pbnRzOiB0cnVlLFxuICAgICAgY2FjaGVUaW1lb3V0OiB0cnVlLFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdIZWxwJyxcbiAgICAgICAgICB1cmw6ICdodHRwOi8vZG9jcy5ncmFmYW5hLm9yZy9mZWF0dXJlcy9kYXRhc291cmNlcy9ncmFwaGl0ZS8jdXNpbmctZ3JhcGhpdGUtaW4tZ3JhZmFuYScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBnZXRJbXBvcnRRdWVyeUNvbmZpZ3VyYXRpb24oKTogR3JhcGhpdGVRdWVyeUltcG9ydENvbmZpZ3VyYXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBsb2tpOiB7XG4gICAgICAgIG1hcHBpbmdzOiB0aGlzLm1ldHJpY01hcHBpbmdzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZXhwb3J0VG9BYnN0cmFjdFF1ZXJpZXMocXVlcmllczogR3JhcGhpdGVRdWVyeVtdKTogUHJvbWlzZTxBYnN0cmFjdFF1ZXJ5W10+IHtcbiAgICByZXR1cm4gcXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB0aGlzLmV4cG9ydFRvQWJzdHJhY3RRdWVyeShxdWVyeSkpO1xuICB9XG5cbiAgZXhwb3J0VG9BYnN0cmFjdFF1ZXJ5KHF1ZXJ5OiBHcmFwaGl0ZVF1ZXJ5KTogQWJzdHJhY3RRdWVyeSB7XG4gICAgY29uc3QgZ3JhcGhpdGVRdWVyeTogR3JhcGhpdGVRdWVyeU1vZGVsID0gbmV3IEdyYXBoaXRlUXVlcnlNb2RlbChcbiAgICAgIHRoaXMsXG4gICAgICB7XG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICB0YXJnZXQ6IHF1ZXJ5LnRhcmdldCB8fCAnJyxcbiAgICAgICAgdGV4dEVkaXRvcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZ2V0VGVtcGxhdGVTcnYoKVxuICAgICk7XG4gICAgZ3JhcGhpdGVRdWVyeS5wYXJzZVRhcmdldCgpO1xuXG4gICAgbGV0IGxhYmVsczogQWJzdHJhY3RMYWJlbE1hdGNoZXJbXSA9IFtdO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0SW1wb3J0UXVlcnlDb25maWd1cmF0aW9uKCkubG9raTtcblxuICAgIGlmIChncmFwaGl0ZVF1ZXJ5LnNlcmllc0J5VGFnVXNlZCkge1xuICAgICAgZ3JhcGhpdGVRdWVyeS50YWdzLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICBsYWJlbHMucHVzaCh7XG4gICAgICAgICAgbmFtZTogdGFnLmtleSxcbiAgICAgICAgICBvcGVyYXRvcjogR1JBUEhJVEVfVEFHX0NPTVBBUkFUT1JTW3RhZy5vcGVyYXRvcl0sXG4gICAgICAgICAgdmFsdWU6IHRhZy52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZXMgPSBncmFwaGl0ZVF1ZXJ5LnNlZ21lbnRzLm1hcCgoc2VnbWVudCkgPT4gc2VnbWVudC52YWx1ZSk7XG4gICAgICBsZXQgbWFwcGluZ3MgPSBjb25maWcubWFwcGluZ3MuZmlsdGVyKChtYXBwaW5nKSA9PiBtYXBwaW5nLm1hdGNoZXJzLmxlbmd0aCA8PSB0YXJnZXROb2Rlcy5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBtYXBwaW5nIG9mIG1hcHBpbmdzKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXJzID0gbWFwcGluZy5tYXRjaGVycy5jb25jYXQoKTtcblxuICAgICAgICBtYXRjaGVycy5ldmVyeSgobWF0Y2hlcjogR3JhcGhpdGVNZXRyaWNMb2tpTWF0Y2hlciwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChtYXRjaGVyLmxhYmVsTmFtZSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gKHRhcmdldE5vZGVzW2luZGV4XSBhcyBzdHJpbmcpITtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnKicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9IGNvbnZlcnRHbG9iVG9SZWdFeCh2YWx1ZSk7XG4gICAgICAgICAgICBsYWJlbHMucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IG1hdGNoZXIubGFiZWxOYW1lLFxuICAgICAgICAgICAgICBvcGVyYXRvcjogY29udmVydGVkICE9PSB2YWx1ZSA/IEFic3RyYWN0TGFiZWxPcGVyYXRvci5FcXVhbFJlZ0V4IDogQWJzdHJhY3RMYWJlbE9wZXJhdG9yLkVxdWFsLFxuICAgICAgICAgICAgICB2YWx1ZTogY29udmVydGVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRhcmdldE5vZGVzW2luZGV4XSA9PT0gbWF0Y2hlci52YWx1ZSB8fCBtYXRjaGVyLnZhbHVlID09PSAnKic7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWZJZDogcXVlcnkucmVmSWQsXG4gICAgICBsYWJlbE1hdGNoZXJzOiBsYWJlbHMsXG4gICAgfTtcbiAgfVxuXG4gIHF1ZXJ5KG9wdGlvbnM6IERhdGFRdWVyeVJlcXVlc3Q8R3JhcGhpdGVRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZ3JhcGhPcHRpb25zID0ge1xuICAgICAgZnJvbTogdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UucmF3LmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKSxcbiAgICAgIHVudGlsOiB0aGlzLnRyYW5zbGF0ZVRpbWUob3B0aW9ucy5yYW5nZS5yYXcudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpLFxuICAgICAgdGFyZ2V0czogb3B0aW9ucy50YXJnZXRzLFxuICAgICAgZm9ybWF0OiAob3B0aW9ucyBhcyBhbnkpLmZvcm1hdCxcbiAgICAgIGNhY2hlVGltZW91dDogb3B0aW9ucy5jYWNoZVRpbWVvdXQgfHwgdGhpcy5jYWNoZVRpbWVvdXQsXG4gICAgICBtYXhEYXRhUG9pbnRzOiBvcHRpb25zLm1heERhdGFQb2ludHMsXG4gICAgfTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuYnVpbGRHcmFwaGl0ZVBhcmFtcyhncmFwaE9wdGlvbnMsIG9wdGlvbnMuc2NvcGVkVmFycyk7XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTWV0cmljVGFuaykge1xuICAgICAgcGFyYW1zLnB1c2goJ21ldGE9dHJ1ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJy9yZW5kZXInLFxuICAgICAgZGF0YTogcGFyYW1zLmpvaW4oJyYnKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5hZGRUcmFjaW5nSGVhZGVycyhodHRwT3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy5wYW5lbElkKSB7XG4gICAgICBodHRwT3B0aW9ucy5yZXF1ZXN0SWQgPSB0aGlzLm5hbWUgKyAnLnBhbmVsSWQuJyArIG9wdGlvbnMucGFuZWxJZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShtYXAodGhpcy5jb252ZXJ0UmVzcG9uc2VUb0RhdGFGcmFtZXMpKTtcbiAgfVxuXG4gIGFkZFRyYWNpbmdIZWFkZXJzKGh0dHBPcHRpb25zOiB7IGhlYWRlcnM6IGFueSB9LCBvcHRpb25zOiB7IGRhc2hib2FyZElkPzogbnVtYmVyOyBwYW5lbElkPzogbnVtYmVyIH0pIHtcbiAgICBjb25zdCBwcm94eU1vZGUgPSAhdGhpcy51cmwubWF0Y2goL15odHRwLyk7XG4gICAgaWYgKHByb3h5TW9kZSkge1xuICAgICAgaWYgKG9wdGlvbnMuZGFzaGJvYXJkSWQpIHtcbiAgICAgICAgaHR0cE9wdGlvbnMuaGVhZGVyc1snWC1EYXNoYm9hcmQtSWQnXSA9IG9wdGlvbnMuZGFzaGJvYXJkSWQ7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5wYW5lbElkKSB7XG4gICAgICAgIGh0dHBPcHRpb25zLmhlYWRlcnNbJ1gtUGFuZWwtSWQnXSA9IG9wdGlvbnMucGFuZWxJZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb252ZXJ0UmVzcG9uc2VUb0RhdGFGcmFtZXMgPSAocmVzdWx0OiBhbnkpOiBEYXRhUXVlcnlSZXNwb25zZSA9PiB7XG4gICAgY29uc3QgZGF0YTogRGF0YUZyYW1lW10gPSBbXTtcbiAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRhdGEpIHtcbiAgICAgIHJldHVybiB7IGRhdGEgfTtcbiAgICB9XG5cbiAgICAvLyBTZXJpZXMgYXJlIGVpdGhlciBhdCB0aGUgcm9vdCBvciB1bmRlciBhIG5vZGUgY2FsbGVkICdzZXJpZXMnXG4gICAgY29uc3Qgc2VyaWVzID0gcmVzdWx0LmRhdGEuc2VyaWVzIHx8IHJlc3VsdC5kYXRhO1xuXG4gICAgaWYgKCFpc0FycmF5KHNlcmllcykpIHtcbiAgICAgIHRocm93IHsgbWVzc2FnZTogJ01pc3Npbmcgc2VyaWVzIGluIHJlc3VsdCcsIGRhdGE6IHJlc3VsdCB9O1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzID0gc2VyaWVzW2ldO1xuXG4gICAgICAvLyBEaXNhYmxlcyBHcmFmYW5hIG93biBzZXJpZXMgbmFtaW5nXG4gICAgICBzLnRpdGxlID0gcy50YXJnZXQ7XG5cbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcy5kYXRhcG9pbnRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIHMuZGF0YXBvaW50c1t5XVsxXSAqPSAxMDAwO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmcmFtZSA9IHRvRGF0YUZyYW1lKHMpO1xuXG4gICAgICAvLyBNZXRyaWN0YW5rIG1ldGFkYXRhXG4gICAgICBpZiAocy5tZXRhKSB7XG4gICAgICAgIGZyYW1lLm1ldGEgPSB7XG4gICAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgICByZXF1ZXN0TWV0YUxpc3Q6IHJlc3VsdC5kYXRhLm1ldGEsIC8vIGluZm8gZm9yIHRoZSB3aG9sZSByZXF1ZXN0XG4gICAgICAgICAgICBzZXJpZXNNZXRhTGlzdDogcy5tZXRhLCAvLyBBcnJheSBvZiBtZXRhZGF0YVxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMucm9sbHVwSW5kaWNhdG9yRW5hYmxlZCkge1xuICAgICAgICAgIGNvbnN0IHJvbGx1cE5vdGljZSA9IGdldFJvbGx1cE5vdGljZShzLm1ldGEpO1xuICAgICAgICAgIGNvbnN0IHJ1bnRpbWVOb3RpY2UgPSBnZXRSdW50aW1lQ29uc29saWRhdGlvbk5vdGljZShzLm1ldGEpO1xuXG4gICAgICAgICAgaWYgKHJvbGx1cE5vdGljZSkge1xuICAgICAgICAgICAgZnJhbWUubWV0YS5ub3RpY2VzID0gW3JvbGx1cE5vdGljZV07XG4gICAgICAgICAgfSBlbHNlIGlmIChydW50aW1lTm90aWNlKSB7XG4gICAgICAgICAgICBmcmFtZS5tZXRhLm5vdGljZXMgPSBbcnVudGltZU5vdGljZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSBhZGQgdGhlIHJlcXVlc3Qgc3RhdHMgdG8gdGhlIGZpcnN0IGZyYW1lXG4gICAgICAgIGlmIChpID09PSAwICYmIHJlc3VsdC5kYXRhLm1ldGEuc3RhdHMpIHtcbiAgICAgICAgICBmcmFtZS5tZXRhLnN0YXRzID0gdGhpcy5nZXRSZXF1ZXN0U3RhdHMocmVzdWx0LmRhdGEubWV0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGF0YS5wdXNoKGZyYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkYXRhIH07XG4gIH07XG5cbiAgZ2V0UmVxdWVzdFN0YXRzKG1ldGE6IE1ldHJpY1RhbmtSZXF1ZXN0TWV0YSk6IFF1ZXJ5UmVzdWx0TWV0YVN0YXRbXSB7XG4gICAgY29uc3Qgc3RhdHM6IFF1ZXJ5UmVzdWx0TWV0YVN0YXRbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gbWV0YS5zdGF0cykge1xuICAgICAgbGV0IHVuaXQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKGtleS5lbmRzV2l0aCgnLm1zJykpIHtcbiAgICAgICAgdW5pdCA9ICdtcyc7XG4gICAgICB9XG5cbiAgICAgIHN0YXRzLnB1c2goeyBkaXNwbGF5TmFtZToga2V5LCB2YWx1ZTogbWV0YS5zdGF0c1trZXldLCB1bml0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0cztcbiAgfVxuXG4gIHBhcnNlVGFncyh0YWdTdHJpbmc6IHN0cmluZykge1xuICAgIGxldCB0YWdzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRhZ3MgPSB0YWdTdHJpbmcuc3BsaXQoJywnKTtcbiAgICBpZiAodGFncy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRhZ3MgPSB0YWdTdHJpbmcuc3BsaXQoJyAnKTtcbiAgICAgIGlmICh0YWdzWzBdID09PSAnJykge1xuICAgICAgICB0YWdzID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YWdzO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMocXVlcmllczogR3JhcGhpdGVRdWVyeVtdLCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogR3JhcGhpdGVRdWVyeVtdIHtcbiAgICBsZXQgZXhwYW5kZWRRdWVyaWVzID0gcXVlcmllcztcbiAgICBpZiAocXVlcmllcyAmJiBxdWVyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXMubWFwKChxdWVyeSkgPT4ge1xuICAgICAgICBjb25zdCBleHBhbmRlZFF1ZXJ5ID0ge1xuICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkudGFyZ2V0ID8/ICcnLCBzY29wZWRWYXJzKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkUXVlcnk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGFuZGVkUXVlcmllcztcbiAgfVxuXG4gIGFubm90YXRpb25RdWVyeShvcHRpb25zOiBhbnkpIHtcbiAgICAvLyBHcmFwaGl0ZSBtZXRyaWMgYXMgYW5ub3RhdGlvblxuICAgIGlmIChvcHRpb25zLmFubm90YXRpb24udGFyZ2V0KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucy5hbm5vdGF0aW9uLnRhcmdldCwge30sICdnbG9iJyk7XG4gICAgICBjb25zdCBncmFwaGl0ZVF1ZXJ5ID0ge1xuICAgICAgICByYW5nZTogb3B0aW9ucy5yYW5nZSxcbiAgICAgICAgdGFyZ2V0czogW3sgdGFyZ2V0OiB0YXJnZXQgfV0sXG4gICAgICAgIGZvcm1hdDogJ2pzb24nLFxuICAgICAgICBtYXhEYXRhUG9pbnRzOiAxMDAsXG4gICAgICB9IGFzIHVua25vd24gYXMgRGF0YVF1ZXJ5UmVxdWVzdDxHcmFwaGl0ZVF1ZXJ5PjtcblxuICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMucXVlcnkoZ3JhcGhpdGVRdWVyeSkucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcmVzdWx0LmRhdGFbaV07XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0YXJnZXQubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gdGFyZ2V0LmZpZWxkc1swXS52YWx1ZXMuZ2V0KHkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LmZpZWxkc1sxXS52YWx1ZXMuZ2V0KHkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIGFubm90YXRpb246IG9wdGlvbnMuYW5ub3RhdGlvbixcbiAgICAgICAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogdGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gR3JhcGhpdGUgZXZlbnQgYXMgYW5ub3RhdGlvblxuICAgICAgY29uc3QgdGFncyA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLmFubm90YXRpb24udGFncyk7XG4gICAgICByZXR1cm4gdGhpcy5ldmVudHMoeyByYW5nZTogb3B0aW9ucy5yYW5nZSwgdGFnczogdGFncyB9KS50aGVuKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgICBpZiAoIWlzQXJyYXkocmVzdWx0cy5kYXRhKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFVuYWJsZSB0byBnZXQgYW5ub3RhdGlvbnMgZnJvbSAke3Jlc3VsdHMudXJsfS5gKTtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBlID0gcmVzdWx0cy5kYXRhW2ldO1xuXG4gICAgICAgICAgbGV0IHRhZ3MgPSBlLnRhZ3M7XG4gICAgICAgICAgaWYgKGlzU3RyaW5nKGUudGFncykpIHtcbiAgICAgICAgICAgIHRhZ3MgPSB0aGlzLnBhcnNlVGFncyhlLnRhZ3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICBhbm5vdGF0aW9uOiBvcHRpb25zLmFubm90YXRpb24sXG4gICAgICAgICAgICB0aW1lOiBlLndoZW4gKiAxMDAwLFxuICAgICAgICAgICAgdGl0bGU6IGUud2hhdCxcbiAgICAgICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgICAgICB0ZXh0OiBlLmRhdGEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyhvcHRpb25zOiB7IHJhbmdlOiBUaW1lUmFuZ2U7IHRhZ3M6IGFueTsgdGltZXpvbmU/OiBhbnkgfSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdGFncyA9ICcnO1xuICAgICAgaWYgKG9wdGlvbnMudGFncykge1xuICAgICAgICB0YWdzID0gJyZ0YWdzPScgKyBvcHRpb25zLnRhZ3M7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy5kb0dyYXBoaXRlUmVxdWVzdCh7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAnL2V2ZW50cy9nZXRfZGF0YT9mcm9tPScgK1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UucmF3LmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKSArXG4gICAgICAgICAgICAnJnVudGlsPScgK1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UucmF3LnRvLCB0cnVlLCBvcHRpb25zLnRpbWV6b25lKSArXG4gICAgICAgICAgICB0YWdzLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHRhcmdldENvbnRhaW5zVGVtcGxhdGUodGFyZ2V0OiBHcmFwaGl0ZVF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYuY29udGFpbnNUZW1wbGF0ZSh0YXJnZXQudGFyZ2V0ID8/ICcnKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZVRpbWUoZGF0ZTogYW55LCByb3VuZFVwOiBhbnksIHRpbWV6b25lOiBhbnkpIHtcbiAgICBpZiAoaXNTdHJpbmcoZGF0ZSkpIHtcbiAgICAgIGlmIChkYXRlID09PSAnbm93Jykge1xuICAgICAgICByZXR1cm4gJ25vdyc7XG4gICAgICB9IGVsc2UgaWYgKGRhdGUuaW5kZXhPZignbm93LScpID49IDAgJiYgZGF0ZS5pbmRleE9mKCcvJykgPT09IC0xKSB7XG4gICAgICAgIGRhdGUgPSBkYXRlLnN1YnN0cmluZygzKTtcbiAgICAgICAgZGF0ZSA9IGRhdGUucmVwbGFjZSgnbScsICdtaW4nKTtcbiAgICAgICAgZGF0ZSA9IGRhdGUucmVwbGFjZSgnTScsICdtb24nKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICB9XG4gICAgICBkYXRlID0gZGF0ZU1hdGgucGFyc2UoZGF0ZSwgcm91bmRVcCwgdGltZXpvbmUpO1xuICAgIH1cblxuICAgIC8vIGdyYXBoaXRlJyBzIGZyb20gZmlsdGVyIGlzIGV4Y2x1c2l2ZVxuICAgIC8vIGhlcmUgd2Ugc3RlcCBiYWNrIG9uZSBtaW51dGUgaW4gb3JkZXJcbiAgICAvLyB0byBndWFyYW50ZWUgdGhhdCB3ZSBnZXQgYWxsIHRoZSBkYXRhIHRoYXRcbiAgICAvLyBleGlzdHMgZm9yIHRoZSBzcGVjaWZpZWQgcmFuZ2VcbiAgICBpZiAocm91bmRVcCkge1xuICAgICAgaWYgKGRhdGUuZ2V0KCdzJykpIHtcbiAgICAgICAgZGF0ZS5hZGQoMSwgJ3MnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJvdW5kVXAgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoZGF0ZS5nZXQoJ3MnKSkge1xuICAgICAgICBkYXRlLnN1YnRyYWN0KDEsICdzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGUudW5peCgpO1xuICB9XG5cbiAgbWV0cmljRmluZFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIG9wdGlvbmFsT3B0aW9ucz86IGFueSk6IFByb21pc2U8TWV0cmljRmluZFZhbHVlW10+IHtcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSBvcHRpb25hbE9wdGlvbnMgfHwge307XG5cbiAgICAvLyBGaXJzdCBhdHRlbXB0IHRvIGNoZWNrIGZvciB0YWctcmVsYXRlZCBmdW5jdGlvbnMgKHVzaW5nIGVtcHR5IHdpbGRjYXJkIGZvciBpbnRlcnBvbGF0aW9uKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRRdWVyeSA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgIHF1ZXJ5LFxuICAgICAgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyKHsgcXVlcnksIHdpbGRjYXJkQ2hhcjogJycsIG9wdGlvbnM6IG9wdGlvbmFsT3B0aW9ucyB9KVxuICAgICk7XG5cbiAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciB0YWdfdmFsdWVzKDx0YWc+Wyw8ZXhwcmVzc2lvbj5dKiksIHRoaXMgaXMgdXNlZCBmb3IgdGVtcGxhdGUgdmFyaWFibGVzXG4gICAgbGV0IGFsbFBhcmFtcyA9IGludGVycG9sYXRlZFF1ZXJ5Lm1hdGNoKC9edGFnX3ZhbHVlc1xcKCguKilcXCkkLyk7XG4gICAgbGV0IGV4cHJlc3Npb25zID0gYWxsUGFyYW1zID8gYWxsUGFyYW1zWzFdLnNwbGl0KCcsJykuZmlsdGVyKChwKSA9PiAhIXApIDogdW5kZWZpbmVkO1xuICAgIGlmIChleHByZXNzaW9ucykge1xuICAgICAgb3B0aW9ucy5saW1pdCA9IDEwMDAwO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFnVmFsdWVzQXV0b0NvbXBsZXRlKGV4cHJlc3Npb25zLnNsaWNlKDEpLCBleHByZXNzaW9uc1swXSwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciB0YWdzKDxleHByZXNzaW9uPlssPGV4cHJlc3Npb24+XSopLCB0aGlzIGlzIHVzZWQgZm9yIHRlbXBsYXRlIHZhcmlhYmxlc1xuICAgIGFsbFBhcmFtcyA9IGludGVycG9sYXRlZFF1ZXJ5Lm1hdGNoKC9edGFnc1xcKCguKilcXCkkLyk7XG4gICAgZXhwcmVzc2lvbnMgPSBhbGxQYXJhbXMgPyBhbGxQYXJhbXNbMV0uc3BsaXQoJywnKS5maWx0ZXIoKHApID0+ICEhcCkgOiB1bmRlZmluZWQ7XG4gICAgaWYgKGV4cHJlc3Npb25zKSB7XG4gICAgICBvcHRpb25zLmxpbWl0ID0gMTAwMDA7XG4gICAgICByZXR1cm4gdGhpcy5nZXRUYWdzQXV0b0NvbXBsZXRlKGV4cHJlc3Npb25zLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIElmIG5vIHRhZy1yZWxhdGVkIHF1ZXJ5IHdhcyBmb3VuZCwgcGVyZm9ybSBtZXRyaWMtYmFzZWQgc2VhcmNoICh1c2luZyAqIGFzIHRoZSB3aWxkY2FyZCBmb3IgaW50ZXJwb2xhdGlvbilcbiAgICBsZXQgdXNlRXhwYW5kID0gcXVlcnkubWF0Y2goL15leHBhbmRcXCgoLiopXFwpJC8pO1xuICAgIHF1ZXJ5ID0gdXNlRXhwYW5kID8gdXNlRXhwYW5kWzFdIDogcXVlcnk7XG5cbiAgICBpbnRlcnBvbGF0ZWRRdWVyeSA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgIHF1ZXJ5LFxuICAgICAgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyKHsgcXVlcnksIHdpbGRjYXJkQ2hhcjogJyonLCBvcHRpb25zOiBvcHRpb25hbE9wdGlvbnMgfSlcbiAgICApO1xuXG4gICAgbGV0IHJhbmdlO1xuICAgIGlmIChvcHRpb25zLnJhbmdlKSB7XG4gICAgICByYW5nZSA9IHtcbiAgICAgICAgZnJvbTogdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UuZnJvbSwgZmFsc2UsIG9wdGlvbnMudGltZXpvbmUpLFxuICAgICAgICB1bnRpbDogdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodXNlRXhwYW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TWV0cmljRXhwYW5kKGludGVycG9sYXRlZFF1ZXJ5LCBvcHRpb25zLnJlcXVlc3RJZCwgcmFuZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TWV0cmljRmluZChpbnRlcnBvbGF0ZWRRdWVyeSwgb3B0aW9ucy5yZXF1ZXN0SWQsIHJhbmdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGZvciBtZXRyaWNzIG1hdGNoaW5nIGdpdmluZyBwYXR0ZXJuIHVzaW5nIC9tZXRyaWNzL2ZpbmQgZW5kcG9pbnQuIEl0IHdpbGxcbiAgICogcmV0dXJuIGFsbCBwb3NzaWJsZSB2YWx1ZXMgYXQgdGhlIGxhc3QgbGV2ZWwgb2YgdGhlIHF1ZXJ5LCBmb3IgZXhhbXBsZTpcbiAgICpcbiAgICogbWV0cmljczogcHJvZC5zZXJ2ZXJzLjAwMS5jcHUsIHByb2Quc2VydmVycy4wMDIuY3B1XG4gICAqIHF1ZXJ5OiAqLnNlcnZlcnMuKlxuICAgKiByZXN1bHQ6IDAwMSwgMDAyXG4gICAqXG4gICAqIEZvciBtb3JlIGNvbXBsZXggc2VhcmNoZXMgdXNlIHJlcXVlc3RNZXRyaWNFeHBhbmRcbiAgICovXG4gIHByaXZhdGUgcmVxdWVzdE1ldHJpY0ZpbmQoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgICByYW5nZT86IHsgZnJvbTogYW55OyB1bnRpbDogYW55IH1cbiAgKTogUHJvbWlzZTxNZXRyaWNGaW5kVmFsdWVbXT4ge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zOiBhbnkgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogJy9tZXRyaWNzL2ZpbmQnLFxuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIGRhdGE6IGBxdWVyeT0ke3F1ZXJ5fWAsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgICAvLyBmb3IgY2FuY2VsbGF0aW9uc1xuICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXG4gICAgfTtcblxuICAgIGlmIChyYW5nZSkge1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLmZyb20gPSByYW5nZS5mcm9tO1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLnVudGlsID0gcmFuZ2UudW50aWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLmRvR3JhcGhpdGVSZXF1ZXN0KGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBfbWFwKHJlc3VsdHMuZGF0YSwgKG1ldHJpYykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdGV4dDogbWV0cmljLnRleHQsXG4gICAgICAgICAgICAgIGV4cGFuZGFibGU6IG1ldHJpYy5leHBhbmRhYmxlID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgbWV0cmljcyBtYXRjaGluZyBnaXZpbmcgcGF0dGVybiB1c2luZyAvbWV0cmljcy9leHBhbmQgZW5kcG9pbnQuXG4gICAqIFRoZSByZXN1bHQgd2lsbCBjb250YWluIGFsbCBtZXRyaWNzICh3aXRoIGZ1bGwgbmFtZSkgbWF0Y2hpbmcgcHJvdmlkZWQgcXVlcnkuXG4gICAqIEl0J3MgYSBtb3JlIGZsZXhpYmxlIHZlcnNpb24gb2YgL21ldHJpY3MvZmluZCBlbmRwb2ludCAoQHNlZSByZXF1ZXN0TWV0cmljRmluZClcbiAgICovXG4gIHByaXZhdGUgcmVxdWVzdE1ldHJpY0V4cGFuZChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHJlcXVlc3RJZDogc3RyaW5nLFxuICAgIHJhbmdlPzogeyBmcm9tOiBhbnk7IHVudGlsOiBhbnkgfVxuICApOiBQcm9taXNlPE1ldHJpY0ZpbmRWYWx1ZVtdPiB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvbWV0cmljcy9leHBhbmQnLFxuICAgICAgcGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIH0sXG4gICAgICAvLyBmb3IgY2FuY2VsbGF0aW9uc1xuICAgICAgcmVxdWVzdElkLFxuICAgIH07XG5cbiAgICBpZiAocmFuZ2UpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy5mcm9tID0gcmFuZ2UuZnJvbTtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy51bnRpbCA9IHJhbmdlLnVudGlsO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gX21hcChyZXN1bHRzLmRhdGEucmVzdWx0cywgKG1ldHJpYykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdGV4dDogbWV0cmljLFxuICAgICAgICAgICAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFRhZ3Mob3B0aW9uYWxPcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBvcHRpb25zID0gb3B0aW9uYWxPcHRpb25zIHx8IHt9O1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvdGFncycsXG4gICAgICAvLyBmb3IgY2FuY2VsbGF0aW9uc1xuICAgICAgcmVxdWVzdElkOiBvcHRpb25zLnJlcXVlc3RJZCxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMucmFuZ2UpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy5mcm9tID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UuZnJvbSwgZmFsc2UsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLnVudGlsID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gX21hcChyZXN1bHRzLmRhdGEsICh0YWcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRleHQ6IHRhZy50YWcsXG4gICAgICAgICAgICAgIGlkOiB0YWcuaWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRUYWdWYWx1ZXMob3B0aW9uczogYW55ID0ge30pIHtcbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy90YWdzLycgKyB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucy5rZXkpLFxuICAgICAgLy8gZm9yIGNhbmNlbGxhdGlvbnNcbiAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5yZXF1ZXN0SWQsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLnJhbmdlKSB7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMuZnJvbSA9IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKTtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy51bnRpbCA9IHRoaXMudHJhbnNsYXRlVGltZShvcHRpb25zLnJhbmdlLnRvLCB0cnVlLCBvcHRpb25zLnRpbWV6b25lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIHRoaXMuZG9HcmFwaGl0ZVJlcXVlc3QoaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMuZGF0YSAmJiByZXN1bHRzLmRhdGEudmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gX21hcChyZXN1bHRzLmRhdGEudmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBpZDogdmFsdWUuaWQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0VGFnc0F1dG9Db21wbGV0ZShleHByZXNzaW9uczogYW55W10sIHRhZ1ByZWZpeDogYW55LCBvcHRpb25hbE9wdGlvbnM/OiBhbnkpIHtcbiAgICBjb25zdCBvcHRpb25zID0gb3B0aW9uYWxPcHRpb25zIHx8IHt9O1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IGFueSA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvdGFncy9hdXRvQ29tcGxldGUvdGFncycsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgZXhwcjogX21hcChleHByZXNzaW9ucywgKGV4cHJlc3Npb24pID0+IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSgoZXhwcmVzc2lvbiB8fCAnJykudHJpbSgpKSksXG4gICAgICB9LFxuICAgICAgLy8gZm9yIGNhbmNlbGxhdGlvbnNcbiAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5yZXF1ZXN0SWQsXG4gICAgfTtcblxuICAgIGlmICh0YWdQcmVmaXgpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy50YWdQcmVmaXggPSB0YWdQcmVmaXg7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmxpbWl0KSB7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMubGltaXQgPSBvcHRpb25zLmxpbWl0O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yYW5nZSkge1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLmZyb20gPSB0aGlzLnRyYW5zbGF0ZVRpbWUob3B0aW9ucy5yYW5nZS5mcm9tLCBmYWxzZSwgb3B0aW9ucy50aW1lem9uZSk7XG4gICAgICBodHRwT3B0aW9ucy5wYXJhbXMudW50aWwgPSB0aGlzLnRyYW5zbGF0ZVRpbWUob3B0aW9ucy5yYW5nZS50bywgdHJ1ZSwgb3B0aW9ucy50aW1lem9uZSk7XG4gICAgfVxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuZG9HcmFwaGl0ZVJlcXVlc3QoaHR0cE9wdGlvbnMpLnBpcGUobWFwVG9UYWdzKCkpKTtcbiAgfVxuXG4gIGdldFRhZ1ZhbHVlc0F1dG9Db21wbGV0ZShleHByZXNzaW9uczogYW55W10sIHRhZzogYW55LCB2YWx1ZVByZWZpeDogYW55LCBvcHRpb25hbE9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBvcHRpb25hbE9wdGlvbnMgfHwge307XG5cbiAgICBjb25zdCBodHRwT3B0aW9uczogYW55ID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy90YWdzL2F1dG9Db21wbGV0ZS92YWx1ZXMnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGV4cHI6IF9tYXAoZXhwcmVzc2lvbnMsIChleHByZXNzaW9uKSA9PiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoKGV4cHJlc3Npb24gfHwgJycpLnRyaW0oKSkpLFxuICAgICAgICB0YWc6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSgodGFnIHx8ICcnKS50cmltKCkpLFxuICAgICAgfSxcbiAgICAgIC8vIGZvciBjYW5jZWxsYXRpb25zXG4gICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMucmVxdWVzdElkLFxuICAgIH07XG5cbiAgICBpZiAodmFsdWVQcmVmaXgpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy52YWx1ZVByZWZpeCA9IHZhbHVlUHJlZml4O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5saW1pdCkge1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLmxpbWl0ID0gb3B0aW9ucy5saW1pdDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucmFuZ2UpIHtcbiAgICAgIGh0dHBPcHRpb25zLnBhcmFtcy5mcm9tID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UuZnJvbSwgZmFsc2UsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgICAgaHR0cE9wdGlvbnMucGFyYW1zLnVudGlsID0gdGhpcy50cmFuc2xhdGVUaW1lKG9wdGlvbnMucmFuZ2UudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgIH1cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLmRvR3JhcGhpdGVSZXF1ZXN0KGh0dHBPcHRpb25zKS5waXBlKG1hcFRvVGFncygpKSk7XG4gIH1cblxuICBnZXRWZXJzaW9uKG9wdGlvbmFsT3B0aW9uczogYW55KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG9wdGlvbmFsT3B0aW9ucyB8fCB7fTtcblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy92ZXJzaW9uJyxcbiAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5yZXF1ZXN0SWQsXG4gICAgfTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy5kb0dyYXBoaXRlUmVxdWVzdChodHRwT3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBzZW12ZXIgPSBuZXcgU2VtVmVyc2lvbihyZXN1bHRzLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbXZlci5pc1ZhbGlkKCkgPyByZXN1bHRzLmRhdGEgOiAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKCcnKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlRnVuY0luc3RhbmNlKGZ1bmNEZWY6IGFueSwgb3B0aW9ucz86IGFueSk6IEZ1bmNJbnN0YW5jZSB7XG4gICAgcmV0dXJuIGdmdW5jLmNyZWF0ZUZ1bmNJbnN0YW5jZShmdW5jRGVmLCBvcHRpb25zLCB0aGlzLmZ1bmNEZWZzKTtcbiAgfVxuXG4gIGdldEZ1bmNEZWYobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGdmdW5jLmdldEZ1bmNEZWYobmFtZSwgdGhpcy5mdW5jRGVmcyk7XG4gIH1cblxuICB3YWl0Rm9yRnVuY0RlZnNMb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RnVuY0RlZnMoKTtcbiAgfVxuXG4gIGdldEZ1bmNEZWZzKCkge1xuICAgIGlmICh0aGlzLmZ1bmNEZWZzUHJvbWlzZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlZnNQcm9taXNlO1xuICAgIH1cblxuICAgIGlmICghc3VwcG9ydHNGdW5jdGlvbkluZGV4KHRoaXMuZ3JhcGhpdGVWZXJzaW9uKSkge1xuICAgICAgdGhpcy5mdW5jRGVmcyA9IGdmdW5jLmdldEZ1bmNEZWZzKHRoaXMuZ3JhcGhpdGVWZXJzaW9uKTtcbiAgICAgIHRoaXMuZnVuY0RlZnNQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZnVuY0RlZnMpO1xuICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlZnNQcm9taXNlO1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9mdW5jdGlvbnMnLFxuICAgICAgLy8gYWRkIHJlc3BvbnNlVHlwZSBiZWNhdXNlIGlmIHRoaXMgaXMgbm90IGRlZmluZWQsXG4gICAgICAvLyBiYWNrZW5kX3NydiBkZWZhdWx0cyB0byBqc29uXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLmRvR3JhcGhpdGVSZXF1ZXN0KGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICAgIC8vIEZpeCBmb3IgYSBHcmFwaGl0ZSBidWc6IGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFwaGl0ZS1wcm9qZWN0L2dyYXBoaXRlLXdlYi9pc3N1ZXMvMjYwOVxuICAgICAgICAgIC8vIFRoZXJlIGlzIGEgZml4IGZvciBpdCBodHRwczovL2dpdGh1Yi5jb20vZ3JhcGhpdGUtcHJvamVjdC9ncmFwaGl0ZS13ZWIvcHVsbC8yNjEyIGJ1dFxuICAgICAgICAgIC8vIGl0IHdhcyBtZXJnZWQgdG8gbWFzdGVyIGluIEp1bHkgMjAyMCBidXQgaXQgaGFzIG5ldmVyIGJlZW4gcmVsZWFzZWQgKHRoZSBsYXN0IEdyYXBoaXRlXG4gICAgICAgICAgLy8gcmVsZWFzZSB3YXMgMS4xLjcgLSBNYXJjaCAyMDIwKS4gVGhlIGJ1ZyB3YXMgaW50cm9kdWNlZCBpbiBHcmFwaGl0ZSAxLjEuNywgaW4gdmVyc2lvbnNcbiAgICAgICAgICAvLyAxLjEuMCAtIDEuMS42IC9mdW5jdGlvbnMgZW5kcG9pbnQgcmV0dXJucyBhIHZhbGlkIEpTT05cbiAgICAgICAgICBjb25zdCBmaXhlZERhdGEgPSBKU09OLnBhcnNlKHJlc3VsdHMuZGF0YS5yZXBsYWNlKC9cImRlZmF1bHRcIjogP0luZmluaXR5L2csICdcImRlZmF1bHRcIjogMWU5OTk5JykpO1xuICAgICAgICAgIHRoaXMuZnVuY0RlZnMgPSBnZnVuYy5wYXJzZUZ1bmNEZWZzKGZpeGVkRGF0YSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY0RlZnM7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmV0Y2hpbmcgZ3JhcGhpdGUgZnVuY3Rpb25zIGVycm9yJywgZXJyb3IpO1xuICAgICAgICAgIHRoaXMuZnVuY0RlZnMgPSBnZnVuYy5nZXRGdW5jRGVmcyh0aGlzLmdyYXBoaXRlVmVyc2lvbik7XG4gICAgICAgICAgcmV0dXJuIG9mKHRoaXMuZnVuY0RlZnMpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICB0ZXN0RGF0YXNvdXJjZSgpIHtcbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIHBhbmVsSWQ6IDMsXG4gICAgICByYW5nZVJhdzogeyBmcm9tOiAnbm93LTFoJywgdG86ICdub3cnIH0sXG4gICAgICByYW5nZToge1xuICAgICAgICByYXc6IHsgZnJvbTogJ25vdy0xaCcsIHRvOiAnbm93JyB9LFxuICAgICAgfSxcbiAgICAgIHRhcmdldHM6IFt7IHRhcmdldDogJ2NvbnN0YW50TGluZSgxMDApJyB9XSxcbiAgICAgIG1heERhdGFQb2ludHM6IDMwMCxcbiAgICB9IGFzIHVua25vd24gYXMgRGF0YVF1ZXJ5UmVxdWVzdDxHcmFwaGl0ZVF1ZXJ5PjtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMucXVlcnkocXVlcnkpKS50aGVuKCgpID0+ICh7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgaXMgd29ya2luZycgfSkpO1xuICB9XG5cbiAgZG9HcmFwaGl0ZVJlcXVlc3Qob3B0aW9uczoge1xuICAgIG1ldGhvZD86IHN0cmluZztcbiAgICB1cmw6IGFueTtcbiAgICByZXF1ZXN0SWQ/OiBhbnk7XG4gICAgd2l0aENyZWRlbnRpYWxzPzogYW55O1xuICAgIGhlYWRlcnM/OiBhbnk7XG4gICAgaW5zcGVjdD86IGFueTtcbiAgfSkge1xuICAgIGlmICh0aGlzLmJhc2ljQXV0aCB8fCB0aGlzLndpdGhDcmVkZW50aWFscykge1xuICAgICAgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5iYXNpY0F1dGgpIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIG9wdGlvbnMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5iYXNpY0F1dGg7XG4gICAgfVxuXG4gICAgb3B0aW9ucy51cmwgPSB0aGlzLnVybCArIG9wdGlvbnMudXJsO1xuICAgIG9wdGlvbnMuaW5zcGVjdCA9IHsgdHlwZTogJ2dyYXBoaXRlJyB9O1xuXG4gICAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmZldGNoKG9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZWR1Y2VFcnJvcihlcnIpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBidWlsZEdyYXBoaXRlUGFyYW1zKG9wdGlvbnM6IGFueSwgc2NvcGVkVmFycz86IFNjb3BlZFZhcnMpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZ3JhcGhpdGVPcHRpb25zID0gWydmcm9tJywgJ3VudGlsJywgJ3Jhd0RhdGEnLCAnZm9ybWF0JywgJ21heERhdGFQb2ludHMnLCAnY2FjaGVUaW1lb3V0J107XG4gICAgY29uc3QgY2xlYW5PcHRpb25zID0gW10sXG4gICAgICB0YXJnZXRzOiBhbnkgPSB7fTtcbiAgICBsZXQgdGFyZ2V0LCB0YXJnZXRWYWx1ZSwgaTtcbiAgICBjb25zdCByZWdleCA9IC9cXCMoW0EtWl0pL2c7XG4gICAgY29uc3QgaW50ZXJ2YWxGb3JtYXRGaXhSZWdleCA9IC8nKFxcZCspbScvZ2k7XG4gICAgbGV0IGhhc1RhcmdldHMgPSBmYWxzZTtcblxuICAgIG9wdGlvbnNbJ2Zvcm1hdCddID0gJ2pzb24nO1xuXG4gICAgZnVuY3Rpb24gZml4SW50ZXJ2YWxGb3JtYXQobWF0Y2g6IGFueSkge1xuICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UoJ20nLCAnbWluJykucmVwbGFjZSgnTScsICdtb24nKTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy50YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXQgPSBvcHRpb25zLnRhcmdldHNbaV07XG4gICAgICBpZiAoIXRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGFyZ2V0LnJlZklkKSB7XG4gICAgICAgIHRhcmdldC5yZWZJZCA9IHRoaXMuX3Nlcmllc1JlZkxldHRlcnNbaV07XG4gICAgICB9XG5cbiAgICAgIHRhcmdldFZhbHVlID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHRhcmdldC50YXJnZXQsIHNjb3BlZFZhcnMpO1xuICAgICAgdGFyZ2V0VmFsdWUgPSB0YXJnZXRWYWx1ZS5yZXBsYWNlKGludGVydmFsRm9ybWF0Rml4UmVnZXgsIGZpeEludGVydmFsRm9ybWF0KTtcbiAgICAgIHRhcmdldHNbdGFyZ2V0LnJlZklkXSA9IHRhcmdldFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5lc3RlZFNlcmllc1JlZ2V4UmVwbGFjZXIobWF0Y2g6IGFueSwgZzE6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgcmV0dXJuIHRhcmdldHNbZzFdIHx8IG1hdGNoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLnRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0c1tpXTtcbiAgICAgIGlmICghdGFyZ2V0LnRhcmdldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0VmFsdWUgPSB0YXJnZXRzW3RhcmdldC5yZWZJZF07XG4gICAgICB0YXJnZXRWYWx1ZSA9IHRhcmdldFZhbHVlLnJlcGxhY2UocmVnZXgsIG5lc3RlZFNlcmllc1JlZ2V4UmVwbGFjZXIpO1xuICAgICAgdGFyZ2V0c1t0YXJnZXQucmVmSWRdID0gdGFyZ2V0VmFsdWU7XG5cbiAgICAgIGlmICghdGFyZ2V0LmhpZGUpIHtcbiAgICAgICAgaGFzVGFyZ2V0cyA9IHRydWU7XG4gICAgICAgIGNsZWFuT3B0aW9ucy5wdXNoKCd0YXJnZXQ9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0YXJnZXRWYWx1ZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVhY2gob3B0aW9ucywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGlmIChpbmRleE9mKGdyYXBoaXRlT3B0aW9ucywga2V5KSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNsZWFuT3B0aW9ucy5wdXNoKGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFoYXNUYXJnZXRzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsZWFuT3B0aW9ucztcbiAgfVxufVxuXG5mdW5jdGlvbiBzdXBwb3J0c1RhZ3ModmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1ZlcnNpb25HdE9yRXEodmVyc2lvbiwgJzEuMScpO1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0Z1bmN0aW9uSW5kZXgodmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1ZlcnNpb25HdE9yRXEodmVyc2lvbiwgJzEuMScpO1xufVxuXG5mdW5jdGlvbiBtYXBUb1RhZ3MoKTogT3BlcmF0b3JGdW5jdGlvbjxhbnksIEFycmF5PHsgdGV4dDogc3RyaW5nIH0+PiB7XG4gIHJldHVybiBwaXBlKFxuICAgIG1hcCgocmVzdWx0czogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0cy5kYXRhKSB7XG4gICAgICAgIHJldHVybiBfbWFwKHJlc3VsdHMuZGF0YSwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgdGV4dDogdmFsdWUgfTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn1cbiIsImltcG9ydCB7IGFzc2lnbiwgZWFjaCwgZmlsdGVyLCBmb3JFYWNoLCBnZXQsIGluY2x1ZGVzLCBpc1N0cmluZywgbGFzdCwgbWFwLCB0b1N0cmluZywgaXNGaW5pdGUgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBJbnRlcnBvbGF0ZUZ1bmN0aW9uIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBpc1ZlcnNpb25HdE9yRXEgfSBmcm9tICdhcHAvY29yZS91dGlscy92ZXJzaW9uJztcblxuZXhwb3J0IHR5cGUgUGFyYW1EZWYgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBvcHRpb25zPzogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICBvcHRpb25hbD86IGJvb2xlYW47XG4gIHZlcnNpb24/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmNEZWYge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhcmFtczogUGFyYW1EZWZbXTtcbiAgZGVmYXVsdFBhcmFtczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIHNob3J0TmFtZT86IGFueTtcbiAgZmFrZT86IGJvb2xlYW47XG4gIHZlcnNpb24/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZnVuY3Rpb24gd2FzIG5vdCBmb3VuZCBvbiB0aGUgbGlzdCBvZiBhdmFpbGFibGUgZnVuY3Rpb24gZGVzY3JpcHRpb25zLlxuICAgKi9cbiAgdW5rbm93bj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIEZ1bmNEZWZzID0ge1xuICBbZnVuY3Rpb25OYW1lIGluIHN0cmluZ106IEZ1bmNEZWY7XG59O1xuXG5jb25zdCBpbmRleDogRnVuY0RlZnMgPSB7fTtcblxuZnVuY3Rpb24gYWRkRnVuY0RlZihmdW5jRGVmOiBQYXJ0aWFsPEZ1bmNEZWY+ICYgeyBuYW1lOiBzdHJpbmc7IGNhdGVnb3J5OiBzdHJpbmcgfSkge1xuICBmdW5jRGVmLnBhcmFtcyA9IGZ1bmNEZWYucGFyYW1zIHx8IFtdO1xuICBmdW5jRGVmLmRlZmF1bHRQYXJhbXMgPSBmdW5jRGVmLmRlZmF1bHRQYXJhbXMgfHwgW107XG5cbiAgaW5kZXhbZnVuY0RlZi5uYW1lXSA9IGZ1bmNEZWYgYXMgRnVuY0RlZjtcbiAgaWYgKGZ1bmNEZWYuc2hvcnROYW1lKSB7XG4gICAgaW5kZXhbZnVuY0RlZi5zaG9ydE5hbWVdID0gZnVuY0RlZiBhcyBGdW5jRGVmO1xuICB9XG59XG5cbmNvbnN0IG9wdGlvbmFsU2VyaWVzUmVmQXJncyA9IFt7IG5hbWU6ICdvdGhlcicsIHR5cGU6ICd2YWx1ZV9vcl9zZXJpZXMnLCBvcHRpb25hbDogdHJ1ZSwgbXVsdGlwbGU6IHRydWUgfV07XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc2NhbGVUb1NlY29uZHMnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ3NlY29uZHMnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzFdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncGVyU2Vjb25kJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdtYXggdmFsdWUnLCB0eXBlOiAnaW50Jywgb3B0aW9uYWw6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaG9sdFdpbnRlcnNGb3JlY2FzdCcsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2hvbHRXaW50ZXJzQ29uZmlkZW5jZUJhbmRzJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdkZWx0YScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbM10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdob2x0V2ludGVyc0FiZXJyYXRpb24nLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2RlbHRhJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ25QZXJjZW50aWxlJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdOdGggcGVyY2VudGlsZScsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbOTVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZGlmZlNlcmllcycsXG4gIHBhcmFtczogb3B0aW9uYWxTZXJpZXNSZWZBcmdzLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJ10sXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzdGRkZXZTZXJpZXMnLFxuICBwYXJhbXM6IG9wdGlvbmFsU2VyaWVzUmVmQXJncyxcbiAgZGVmYXVsdFBhcmFtczogWycnXSxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2RpdmlkZVNlcmllcycsXG4gIHBhcmFtczogb3B0aW9uYWxTZXJpZXNSZWZBcmdzLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJ10sXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtdWx0aXBseVNlcmllcycsXG4gIHBhcmFtczogb3B0aW9uYWxTZXJpZXNSZWZBcmdzLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJ10sXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhc1BlcmNlbnQnLFxuICBwYXJhbXM6IG9wdGlvbmFsU2VyaWVzUmVmQXJncyxcbiAgZGVmYXVsdFBhcmFtczogWycjQSddLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZ3JvdXAnLFxuICBwYXJhbXM6IG9wdGlvbmFsU2VyaWVzUmVmQXJncyxcbiAgZGVmYXVsdFBhcmFtczogWycjQScsICcjQiddLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc3VtU2VyaWVzJyxcbiAgc2hvcnROYW1lOiAnc3VtJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBvcHRpb25hbFNlcmllc1JlZkFyZ3MsXG4gIGRlZmF1bHRQYXJhbXM6IFsnJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhdmVyYWdlU2VyaWVzJyxcbiAgc2hvcnROYW1lOiAnYXZnJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBvcHRpb25hbFNlcmllc1JlZkFyZ3MsXG4gIGRlZmF1bHRQYXJhbXM6IFsnJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyYW5nZU9mU2VyaWVzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3BlcmNlbnRpbGVPZlNlcmllcycsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHsgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9LFxuICAgIHsgbmFtZTogJ2ludGVycG9sYXRlJywgdHlwZTogJ2Jvb2xlYW4nLCBvcHRpb25zOiBbJ3RydWUnLCAnZmFsc2UnXSB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbOTUsICdmYWxzZSddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc3VtU2VyaWVzV2l0aFdpbGRjYXJkcycsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW3sgbmFtZTogJ25vZGUnLCB0eXBlOiAnaW50JywgbXVsdGlwbGU6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21heFNlcmllcycsXG4gIHNob3J0TmFtZTogJ21heCcsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtaW5TZXJpZXMnLFxuICBzaG9ydE5hbWU6ICdtaW4nLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYXZlcmFnZVNlcmllc1dpdGhXaWxkY2FyZHMnLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdub2RlJywgdHlwZTogJ2ludCcsIG11bHRpcGxlOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbM10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhbGlhcycsXG4gIGNhdGVnb3J5OiAnQWxpYXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdhbGlhcycsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2FsaWFzJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhbGlhc1N1YicsXG4gIGNhdGVnb3J5OiAnQWxpYXMnLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdzZWFyY2gnLCB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHsgbmFtZTogJ3JlcGxhY2UnLCB0eXBlOiAnc3RyaW5nJyB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJycsICdcXFxcMSddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnY29uc29saWRhdGVCeScsXG4gIGNhdGVnb3J5OiAnU3BlY2lhbCcsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdmdW5jdGlvbicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnc3VtJywgJ2F2ZXJhZ2UnLCAnbWluJywgJ21heCddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnbWF4J10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdjdW11bGF0aXZlJyxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdncm91cEJ5Tm9kZScsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdub2RlJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ3N1bScsICdhdmcnLCAnbWF4U2VyaWVzJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzMsICdzdW0nXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2FsaWFzQnlOb2RlJyxcbiAgY2F0ZWdvcnk6ICdBbGlhcycsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdub2RlJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl0sXG4gICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbM10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzdWJzdHInLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnc3RhcnQnLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICBvcHRpb25zOiBbLTYsIC01LCAtNCwgLTMsIC0yLCAtMSwgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDEyXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdzdG9wJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWy02LCAtNSwgLTQsIC0zLCAtMiwgLTEsIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl0sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzAsIDBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc29ydEJ5TmFtZScsXG4gIGNhdGVnb3J5OiAnU29ydGluZycsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICduYXR1cmFsJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIG9wdGlvbnM6IFsndHJ1ZScsICdmYWxzZSddLFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydmYWxzZSddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc29ydEJ5TWF4aW1hJyxcbiAgY2F0ZWdvcnk6ICdTb3J0aW5nJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3NvcnRCeU1pbmltYScsXG4gIGNhdGVnb3J5OiAnU29ydGluZycsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzb3J0QnlUb3RhbCcsXG4gIGNhdGVnb3J5OiAnU29ydGluZycsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhbGlhc0J5TWV0cmljJyxcbiAgY2F0ZWdvcnk6ICdBbGlhcycsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyYW5kb21XYWxrJyxcbiAgZmFrZTogdHJ1ZSxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbmFtZScsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3JhbmRvbVdhbGsnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2NvdW50U2VyaWVzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2NvbnN0YW50TGluZScsXG4gIGNhdGVnb3J5OiAnU3BlY2lhbCcsXG4gIHBhcmFtczogW3sgbmFtZTogJ3ZhbHVlJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdjYWN0aVN0eWxlJyxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2tlZXBMYXN0VmFsdWUnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzEwMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdjaGFuZ2VkJyxcbiAgY2F0ZWdvcnk6ICdTcGVjaWFsJyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzY2FsZScsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnZmFjdG9yJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnYW1vdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICd0cmFuc2Zvcm1OdWxsJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdhbW91bnQnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaW50ZWdyYWwnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdkZXJpdmF0aXZlJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbm9uTmVnYXRpdmVEZXJpdmF0aXZlJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdtYXggdmFsdWUgb3IgMCcsIHR5cGU6ICdpbnQnLCBvcHRpb25hbDogdHJ1ZSB9XSxcbiAgZGVmYXVsdFBhcmFtczogWycnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3RpbWVTaGlmdCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Ftb3VudCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnMWgnLCAnNmgnLCAnMTJoJywgJzFkJywgJzJkJywgJzdkJywgJzE0ZCcsICczMGQnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzFkJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICd0aW1lU3RhY2snLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd0aW1lU2hpZnRVbml0JyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWycxaCcsICc2aCcsICcxMmgnLCAnMWQnLCAnMmQnLCAnN2QnLCAnMTRkJywgJzMwZCddLFxuICAgIH0sXG4gICAgeyBuYW1lOiAndGltZVNoaWZ0U3RhcnQnLCB0eXBlOiAnaW50JyB9LFxuICAgIHsgbmFtZTogJ3RpbWVTaGlmdEVuZCcsIHR5cGU6ICdpbnQnIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnMWQnLCAwLCA3XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3N1bW1hcml6ZScsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAnaW50ZXJ2YWwnLCB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdmdW5jJyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWydzdW0nLCAnYXZnJywgJ21pbicsICdtYXgnLCAnbGFzdCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2FsaWduVG9Gcm9tJyxcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgICAgb3B0aW9uczogWydmYWxzZScsICd0cnVlJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWycxaCcsICdzdW0nLCAnZmFsc2UnXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3NtYXJ0U3VtbWFyaXplJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdpbnRlcnZhbCcsIHR5cGU6ICdzdHJpbmcnIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmMnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJ3N1bScsICdhdmcnLCAnbWluJywgJ21heCcsICdsYXN0J10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWycxaCcsICdzdW0nXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2Fic29sdXRlJyxcbiAgY2F0ZWdvcnk6ICdUcmFuc2Zvcm0nLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaGl0Y291bnQnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2ludGVydmFsJywgdHlwZTogJ3N0cmluZycgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnMTBzJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdsb2cnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2Jhc2UnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWycxMCddLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYXZlcmFnZUFib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMjVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYXZlcmFnZUJlbG93JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMjVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnY3VycmVudEFib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMjVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnY3VycmVudEJlbG93JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMjVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWF4aW11bUFib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWF4aW11bUJlbG93JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWluaW11bUFib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbWluaW11bUJlbG93JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbGltaXQnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21vc3REZXZpYW50JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMTBdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZXhjbHVkZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2V4Y2x1ZGUnLCB0eXBlOiAnc3RyaW5nJyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWydleGNsdWRlJ10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdoaWdoZXN0Q3VycmVudCcsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2NvdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2hpZ2hlc3RNYXgnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdjb3VudCcsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdsb3dlc3RDdXJyZW50JyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnY291bnQnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbW92aW5nQXZlcmFnZScsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3dpbmRvd1NpemUnLFxuICAgICAgdHlwZTogJ2ludF9vcl9pbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzUnLCAnNycsICcxMCcsICc1bWluJywgJzEwbWluJywgJzMwbWluJywgJzFob3VyJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzEwXSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21vdmluZ01lZGlhbicsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3dpbmRvd1NpemUnLFxuICAgICAgdHlwZTogJ2ludF9vcl9pbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzUnLCAnNycsICcxMCcsICc1bWluJywgJzEwbWluJywgJzMwbWluJywgJzFob3VyJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWyc1J10sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdzdGRldicsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH0sXG4gICAgeyBuYW1lOiAndG9sZXJhbmNlJywgdHlwZTogJ2ludCcgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzUsIDAuMV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdoaWdoZXN0QXZlcmFnZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ2NvdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2xvd2VzdEF2ZXJhZ2UnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdjb3VudCcsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVBYm92ZVBlcmNlbnRpbGUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBEYXRhJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbNV0sXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVBYm92ZVZhbHVlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgRGF0YScsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncmVtb3ZlQmVsb3dQZXJjZW50aWxlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgRGF0YScsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzVdLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncmVtb3ZlQmVsb3dWYWx1ZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIERhdGEnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs1XSxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3VzZVNlcmllc0Fib3ZlJyxcbiAgY2F0ZWdvcnk6ICdGaWx0ZXIgU2VyaWVzJyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAndmFsdWUnLCB0eXBlOiAnaW50JyB9LFxuICAgIHsgbmFtZTogJ3NlYXJjaCcsIHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgeyBuYW1lOiAncmVwbGFjZScsIHR5cGU6ICdzdHJpbmcnIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFswLCAnc2VhcmNoJywgJ3JlcGxhY2UnXSxcbn0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gR3JhcGhpdGUgMS4wLnggLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnYWdncmVnYXRlTGluZScsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmMnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJ3N1bScsICdhdmcnLCAnbWluJywgJ21heCcsICdsYXN0J10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydhdmcnXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdhdmVyYWdlT3V0c2lkZVBlcmNlbnRpbGUnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFs5NV0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZGVsYXknLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ3N0ZXBzJywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdleHBvbmVudGlhbE1vdmluZ0F2ZXJhZ2UnLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd3aW5kb3dTaXplJyxcbiAgICAgIHR5cGU6ICdpbnRfb3JfaW50ZXJ2YWwnLFxuICAgICAgb3B0aW9uczogWyc1JywgJzcnLCAnMTAnLCAnNW1pbicsICcxMG1pbicsICczMG1pbicsICcxaG91ciddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnZmFsbGJhY2tTZXJpZXMnLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdmYWxsYmFjaycsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2NvbnN0YW50TGluZSgwKSddLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2dyZXAnLFxuICBjYXRlZ29yeTogJ0ZpbHRlciBTZXJpZXMnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdncmVwJywgdHlwZTogJ3N0cmluZycgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnZ3JlcCddLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2dyb3VwQnlOb2RlcycsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdmdW5jdGlvbicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnc3VtJywgJ2F2ZycsICdtYXhTZXJpZXMnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdub2RlJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMl0sXG4gICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3N1bScsIDNdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2ludGVncmFsQnlJbnRlcnZhbCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2ludGVydmFsVW5pdCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnMWgnLCAnNmgnLCAnMTJoJywgJzFkJywgJzJkJywgJzdkJywgJzE0ZCcsICczMGQnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzFkJ10sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaW50ZXJwb2xhdGUnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2xpbWl0JywgdHlwZTogJ2ludCcsIG9wdGlvbmFsOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdpbnZlcnQnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnaXNOb25OdWxsJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdsaW5lYXJSZWdyZXNzaW9uJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnc3RhcnRTb3VyY2VBdCcsXG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIG9wdGlvbnM6IFsnLTFoJywgJy02aCcsICctMTJoJywgJy0xZCcsICctMmQnLCAnLTdkJywgJy0xNGQnLCAnLTMwZCddLFxuICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZW5kU291cmNlQXQnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJy0xaCcsICctNmgnLCAnLTEyaCcsICctMWQnLCAnLTJkJywgJy03ZCcsICctMTRkJywgJy0zMGQnXSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21hcFNlcmllcycsXG4gIHNob3J0TmFtZTogJ21hcCcsXG4gIHBhcmFtczogW3sgbmFtZTogJ25vZGUnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzNdLFxuICBjYXRlZ29yeTogJ0NvbWJpbmUnLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ21vdmluZ01pbicsXG4gIGNhdGVnb3J5OiAnQ2FsY3VsYXRlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3dpbmRvd1NpemUnLFxuICAgICAgdHlwZTogJ2ludF9vcl9pbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzUnLCAnNycsICcxMCcsICc1bWluJywgJzEwbWluJywgJzMwbWluJywgJzFob3VyJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzEwXSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdtb3ZpbmdNYXgnLFxuICBjYXRlZ29yeTogJ0NhbGN1bGF0ZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd3aW5kb3dTaXplJyxcbiAgICAgIHR5cGU6ICdpbnRfb3JfaW50ZXJ2YWwnLFxuICAgICAgb3B0aW9uczogWyc1JywgJzcnLCAnMTAnLCAnNW1pbicsICcxMG1pbicsICczMG1pbicsICcxaG91ciddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnbW92aW5nU3VtJyxcbiAgY2F0ZWdvcnk6ICdDYWxjdWxhdGUnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnd2luZG93U2l6ZScsXG4gICAgICB0eXBlOiAnaW50X29yX2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnNScsICc3JywgJzEwJywgJzVtaW4nLCAnMTBtaW4nLCAnMzBtaW4nLCAnMWhvdXInXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbMTBdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ211bHRpcGx5U2VyaWVzV2l0aFdpbGRjYXJkcycsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdwb3NpdGlvbicsXG4gICAgICB0eXBlOiAnaW50JyxcbiAgICAgIG9wdGlvbnM6IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTJdLFxuICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWzJdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ29mZnNldFRvWmVybycsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdwb3cnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW3sgbmFtZTogJ2ZhY3RvcicsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMTBdLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3Bvd1NlcmllcycsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgcGFyYW1zOiBvcHRpb25hbFNlcmllc1JlZkFyZ3MsXG4gIGRlZmF1bHRQYXJhbXM6IFsnJ10sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAncmVkdWNlU2VyaWVzJyxcbiAgc2hvcnROYW1lOiAncmVkdWNlJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydhc1BlcmNlbnQnLCAnZGlmZlNlcmllcycsICdkaXZpZGVTZXJpZXMnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdyZWR1Y2VOb2RlJyxcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgb3B0aW9uczogWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzXSxcbiAgICB9LFxuICAgIHsgbmFtZTogJ3JlZHVjZU1hdGNoZXJzJywgdHlwZTogJ3N0cmluZycsIG11bHRpcGxlOiB0cnVlIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnYXNQZXJjZW50JywgMiwgJ3VzZWRfYnl0ZXMnXSxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVCZXR3ZWVuUGVyY2VudGlsZScsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ24nLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzk1XSxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICdyZW1vdmVFbXB0eVNlcmllcycsXG4gIGNhdGVnb3J5OiAnRmlsdGVyIFNlcmllcycsXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc3F1YXJlUm9vdCcsXG4gIGNhdGVnb3J5OiAnVHJhbnNmb3JtJyxcbiAgdmVyc2lvbjogJzEuMCcsXG59KTtcblxuYWRkRnVuY0RlZih7XG4gIG5hbWU6ICd0aW1lU2xpY2UnLFxuICBjYXRlZ29yeTogJ1RyYW5zZm9ybScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdzdGFydFNsaWNlQXQnLFxuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbJy0xaCcsICctNmgnLCAnLTEyaCcsICctMWQnLCAnLTJkJywgJy03ZCcsICctMTRkJywgJy0zMGQnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdlbmRTbGljZUF0JyxcbiAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWyctMWgnLCAnLTZoJywgJy0xMmgnLCAnLTFkJywgJy0yZCcsICctN2QnLCAnLTE0ZCcsICctMzBkJ10sXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJy0xaCddLFxuICB2ZXJzaW9uOiAnMS4wJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ3dlaWdodGVkQXZlcmFnZScsXG4gIGNhdGVnb3J5OiAnQ29tYmluZScsXG4gIHBhcmFtczogW1xuICAgIHsgbmFtZTogJ290aGVyJywgdHlwZTogJ3ZhbHVlX29yX3NlcmllcycsIG9wdGlvbmFsOiB0cnVlIH0sXG4gICAge1xuICAgICAgbmFtZTogJ25vZGUnLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICBvcHRpb25zOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDEyXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJyNBJywgNF0sXG4gIHZlcnNpb246ICcxLjAnLFxufSk7XG5cbmFkZEZ1bmNEZWYoe1xuICBuYW1lOiAnc2VyaWVzQnlUYWcnLFxuICBjYXRlZ29yeTogJ1NwZWNpYWwnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICd0YWdFeHByZXNzaW9uJywgdHlwZTogJ3N0cmluZycsIG11bHRpcGxlOiB0cnVlIH1dLFxuICB2ZXJzaW9uOiAnMS4xJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2dyb3VwQnlUYWdzJyxcbiAgY2F0ZWdvcnk6ICdDb21iaW5lJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydzdW0nLCAnYXZnJywgJ21heFNlcmllcyddLFxuICAgIH0sXG4gICAgeyBuYW1lOiAndGFnJywgdHlwZTogJ3N0cmluZycsIG11bHRpcGxlOiB0cnVlIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnc3VtJywgJ3RhZyddLFxuICB2ZXJzaW9uOiAnMS4xJyxcbn0pO1xuXG5hZGRGdW5jRGVmKHtcbiAgbmFtZTogJ2FsaWFzQnlUYWdzJyxcbiAgY2F0ZWdvcnk6ICdBbGlhcycsXG4gIHBhcmFtczogW3sgbmFtZTogJ3RhZycsIHR5cGU6ICdzdHJpbmcnLCBtdWx0aXBsZTogdHJ1ZSB9XSxcbiAgZGVmYXVsdFBhcmFtczogWyd0YWcnXSxcbiAgdmVyc2lvbjogJzEuMScsXG59KTtcblxuZnVuY3Rpb24gaXNWZXJzaW9uUmVsYXRlZEZ1bmN0aW9uKG9iajogeyB2ZXJzaW9uPzogc3RyaW5nIH0sIGdyYXBoaXRlVmVyc2lvbjogc3RyaW5nKSB7XG4gIHJldHVybiAhb2JqLnZlcnNpb24gfHwgaXNWZXJzaW9uR3RPckVxKGdyYXBoaXRlVmVyc2lvbiwgb2JqLnZlcnNpb24pO1xufVxuXG5leHBvcnQgY2xhc3MgRnVuY0luc3RhbmNlIHtcbiAgZGVmOiBGdW5jRGVmO1xuICBwYXJhbXM6IEFycmF5PHN0cmluZyB8IG51bWJlcj47XG4gIHRleHQ6IGFueTtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhpcyBmdW5jdGlvbiB3YXMganVzdCBhZGRlZCBhbmQgbm90IGVkaXRlZCB5ZXQuIEl0J3MgdXNlZCB0byBmb2N1cyBvbiBmaXJzdFxuICAgKiBmdW5jdGlvbiBwYXJhbSB0byBlZGl0IGl0IHN0cmFpZ2h0IGF3YXkgYWZ0ZXIgYWRkaW5nIGEgZnVuY3Rpb24uXG4gICAqL1xuICBkZWNsYXJlIGFkZGVkOiBib29sZWFuO1xuICAvKipcbiAgICogSGlkZGVuIGZ1bmN0aW9ucyBhcmUgbm90IGRpc3BsYXllZCBpbiBVSSBidXQgYXZhaWxhYmxlIGluIHRleHQgZWRpdG9yXG4gICAqIFRoaXMgaXMgdXNlZCBmb3Igc2VyaWVzQnlUYWdVc2VkIGZ1bmN0aW9uIHdoaWNoIHdoZW4gdXNlZCBzd2l0Y2hlc1xuICAgKiB0aGUgZWRpdG9yIHRvIHRhZy1vbmx5IG1vZGUuIERlZmluZWQgdGFncyBhcmUgcHJvdmlkZWQgdG8gc2VyaWVzQnlUYWdVc2VkXG4gICAqIGFzIHBhcmFtZXRlcnMuXG4gICAqL1xuICBoaWRkZW4/OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGZ1bmNEZWY6IEZ1bmNEZWYsIG9wdGlvbnM/OiB7IHdpdGhEZWZhdWx0UGFyYW1zOiBhbnkgfSkge1xuICAgIHRoaXMuZGVmID0gZnVuY0RlZjtcbiAgICB0aGlzLnBhcmFtcyA9IFtdO1xuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy53aXRoRGVmYXVsdFBhcmFtcyAmJiBmdW5jRGVmLmRlZmF1bHRQYXJhbXMpIHtcbiAgICAgIHRoaXMucGFyYW1zID0gZnVuY0RlZi5kZWZhdWx0UGFyYW1zLnNsaWNlKDApO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICB9XG5cbiAgcmVuZGVyKG1ldHJpY0V4cDogc3RyaW5nLCByZXBsYWNlVmFyaWFibGVzOiBJbnRlcnBvbGF0ZUZ1bmN0aW9uKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdHIgPSB0aGlzLmRlZi5uYW1lICsgJygnO1xuXG4gICAgY29uc3QgcGFyYW1ldGVycyA9IG1hcCh0aGlzLnBhcmFtcywgKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHBhcmFtVHlwZTtcblxuICAgICAgaWYgKGluZGV4IDwgdGhpcy5kZWYucGFyYW1zLmxlbmd0aCkge1xuICAgICAgICBwYXJhbVR5cGUgPSB0aGlzLmRlZi5wYXJhbXNbaW5kZXhdLnR5cGU7XG4gICAgICB9IGVsc2UgaWYgKGdldChsYXN0KHRoaXMuZGVmLnBhcmFtcyksICdtdWx0aXBsZScpKSB7XG4gICAgICAgIHBhcmFtVHlwZSA9IGdldChsYXN0KHRoaXMuZGVmLnBhcmFtcyksICd0eXBlJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHBhcmFtIHR5cGVzIHRoYXQgc2hvdWxkIG5ldmVyIGJlIHF1b3RlZFxuICAgICAgaWYgKGluY2x1ZGVzKFsndmFsdWVfb3Jfc2VyaWVzJywgJ2Jvb2xlYW4nLCAnaW50JywgJ2Zsb2F0JywgJ25vZGUnLCAnaW50X29yX2luZmluaXR5J10sIHBhcmFtVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZUludGVycG9sYXRlZCA9IGlzU3RyaW5nKHZhbHVlKSA/IHJlcGxhY2VWYXJpYWJsZXModmFsdWUpIDogdmFsdWU7XG5cbiAgICAgIC8vIHBhcmFtIHR5cGVzIHRoYXQgbWlnaHQgYmUgcXVvdGVkXG4gICAgICAvLyBUbyBxdW90ZSB2YXJpYWJsZXMgY29ycmVjdGx5IHdlIG5lZWQgdG8gaW50ZXJwb2xhdGUgaXQgdG8gY2hlY2sgaWYgaXQgY29udGFpbnMgYSBudW1lcmljIG9yIHN0cmluZyB2YWx1ZVxuICAgICAgaWYgKGluY2x1ZGVzKFsnaW50X29yX2ludGVydmFsJywgJ25vZGVfb3JfdGFnJ10sIHBhcmFtVHlwZSkgJiYgaXNGaW5pdGUoK3ZhbHVlSW50ZXJwb2xhdGVkKSkge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCInXCIgKyB2YWx1ZSArIFwiJ1wiO1xuICAgIH0pO1xuXG4gICAgLy8gZG9uJ3Qgc2VuZCBhbnkgYmxhbmsgcGFyYW1ldGVycyB0byBncmFwaGl0ZVxuICAgIHdoaWxlIChwYXJhbWV0ZXJzW3BhcmFtZXRlcnMubGVuZ3RoIC0gMV0gPT09ICcnKSB7XG4gICAgICBwYXJhbWV0ZXJzLnBvcCgpO1xuICAgIH1cblxuICAgIGlmIChtZXRyaWNFeHApIHtcbiAgICAgIHBhcmFtZXRlcnMudW5zaGlmdChtZXRyaWNFeHApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIgKyBwYXJhbWV0ZXJzLmpvaW4oJywgJykgKyAnKSc7XG4gIH1cblxuICBfaGFzTXVsdGlwbGVQYXJhbXNJblN0cmluZyhzdHJWYWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHN0clZhbHVlLmluZGV4T2YoJywnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZWYucGFyYW1zW2luZGV4ICsgMV0gJiYgdGhpcy5kZWYucGFyYW1zW2luZGV4ICsgMV0ub3B0aW9uYWwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbmRleCArIDEgPj0gdGhpcy5kZWYucGFyYW1zLmxlbmd0aCAmJiBnZXQobGFzdCh0aGlzLmRlZi5wYXJhbXMpLCAnbXVsdGlwbGUnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlUGFyYW0oc3RyVmFsdWU6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIC8vIGhhbmRsZSBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgLy8gaWYgc3RyaW5nIGNvbnRhaW5zICcsJyBhbmQgbmV4dCBwYXJhbSBpcyBvcHRpb25hbCwgc3BsaXQgYW5kIHVwZGF0ZSBib3RoXG4gICAgaWYgKHRoaXMuX2hhc011bHRpcGxlUGFyYW1zSW5TdHJpbmcoc3RyVmFsdWUsIGluZGV4KSkge1xuICAgICAgZWFjaChzdHJWYWx1ZS5zcGxpdCgnLCcpLCAocGFydFZhbCwgaWR4KSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFyYW0ocGFydFZhbC50cmltKCksIGluZGV4ICsgaWR4KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdHJWYWx1ZSA9PT0gJycgJiYgKGluZGV4ID49IHRoaXMuZGVmLnBhcmFtcy5sZW5ndGggfHwgdGhpcy5kZWYucGFyYW1zW2luZGV4XS5vcHRpb25hbCkpIHtcbiAgICAgIHRoaXMucGFyYW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFyYW1zW2luZGV4XSA9IHN0clZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICB9XG5cbiAgdXBkYXRlVGV4dCgpIHtcbiAgICBpZiAodGhpcy5wYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnRleHQgPSB0aGlzLmRlZi5uYW1lICsgJygpJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGV4dCA9IHRoaXMuZGVmLm5hbWUgKyAnKCc7XG4gICAgdGV4dCArPSB0aGlzLnBhcmFtcy5qb2luKCcsICcpO1xuICAgIHRleHQgKz0gJyknO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVuY0luc3RhbmNlKGZ1bmNEZWY6IGFueSwgb3B0aW9ucz86IHsgd2l0aERlZmF1bHRQYXJhbXM6IGFueSB9LCBpZHg/OiBhbnkpOiBGdW5jSW5zdGFuY2Uge1xuICBpZiAoaXNTdHJpbmcoZnVuY0RlZikpIHtcbiAgICBmdW5jRGVmID0gZ2V0RnVuY0RlZihmdW5jRGVmLCBpZHgpO1xuICB9XG4gIHJldHVybiBuZXcgRnVuY0luc3RhbmNlKGZ1bmNEZWYsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBnZXRGdW5jRGVmKG5hbWU6IHN0cmluZywgaWR4PzogYW55KTogRnVuY0RlZiB7XG4gIGlmICghKGlkeCB8fCBpbmRleClbbmFtZV0pIHtcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBwYXJhbXM6IFt7IG5hbWU6ICcnLCB0eXBlOiAnJywgbXVsdGlwbGU6IHRydWUgfV0sIGRlZmF1bHRQYXJhbXM6IFsnJ10sIHVua25vd246IHRydWUgfTtcbiAgfVxuICByZXR1cm4gKGlkeCB8fCBpbmRleClbbmFtZV07XG59XG5cbmZ1bmN0aW9uIGdldEZ1bmNEZWZzKGdyYXBoaXRlVmVyc2lvbjogc3RyaW5nLCBpZHg/OiBhbnkpOiBGdW5jRGVmcyB7XG4gIGNvbnN0IGZ1bmNzOiBGdW5jRGVmcyA9IHt9O1xuICBmb3JFYWNoKGlkeCB8fCBpbmRleCwgKGZ1bmNEZWY6IEZ1bmNEZWYpID0+IHtcbiAgICBpZiAoaXNWZXJzaW9uUmVsYXRlZEZ1bmN0aW9uKGZ1bmNEZWYsIGdyYXBoaXRlVmVyc2lvbikpIHtcbiAgICAgIGZ1bmNzW2Z1bmNEZWYubmFtZV0gPSBhc3NpZ24oe30sIGZ1bmNEZWYsIHtcbiAgICAgICAgcGFyYW1zOiBmaWx0ZXIoZnVuY0RlZi5wYXJhbXMsIChwYXJhbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBpc1ZlcnNpb25SZWxhdGVkRnVuY3Rpb24ocGFyYW0sIGdyYXBoaXRlVmVyc2lvbik7XG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZ1bmNzO1xufVxuXG4vLyBwYXJzZSByZXNwb25zZSBmcm9tIGdyYXBoaXRlIC9mdW5jdGlvbnMgZW5kcG9pbnQgaW50byBpbnRlcm5hbCBmb3JtYXRcbmZ1bmN0aW9uIHBhcnNlRnVuY0RlZnMocmF3RGVmczogYW55KTogRnVuY0RlZnMge1xuICBjb25zdCBmdW5jRGVmczogRnVuY0RlZnMgPSB7fTtcblxuICBmb3JFYWNoKHJhd0RlZnMgfHwge30sIChmdW5jRGVmLCBmdW5jTmFtZSkgPT4ge1xuICAgIC8vIHNraXAgZ3JhcGhpdGUgZ3JhcGggZnVuY3Rpb25zXG4gICAgaWYgKGZ1bmNEZWYuZ3JvdXAgPT09ICdHcmFwaCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBmdW5jRGVmLmRlc2NyaXB0aW9uO1xuICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgLy8gdGlkeSB1cCBzb21lIHB5ZG9jIHN5bnRheCB0aGF0IHJzdDJodG1sIGNhbid0IGhhbmRsZVxuICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICAucmVwbGFjZSgvOnB5OmZ1bmM6YCguKykoIDxbXj5dKj4pP2AvZywgJ2BgJDFgYCcpXG4gICAgICAgIC5yZXBsYWNlKC8uLiBzZWVhbHNvOjogL2csICdTZWUgYWxzbzogJylcbiAgICAgICAgLnJlcGxhY2UoLy4uIGNvZGUtYmxvY2sgKjo6ICpub25lL2csICcuLiBjb2RlLWJsb2NrOjonKTtcbiAgICB9XG5cbiAgICBjb25zdCBmdW5jOiBGdW5jRGVmID0ge1xuICAgICAgbmFtZTogZnVuY0RlZi5uYW1lLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjYXRlZ29yeTogZnVuY0RlZi5ncm91cCxcbiAgICAgIHBhcmFtczogW10sXG4gICAgICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgICAgIGZha2U6IGZhbHNlLFxuICAgIH07XG5cbiAgICAvLyBnZXQgcmlkIG9mIHRoZSBmaXJzdCBcInNlcmllc0xpc3RcIiBwYXJhbVxuICAgIGlmICgvXnNlcmllc0xpc3RzPyQvLnRlc3QoZ2V0KGZ1bmNEZWYsICdwYXJhbXNbMF0udHlwZScsICcnKSkpIHtcbiAgICAgIC8vIGhhbmRsZSBmdW5jdGlvbnMgdGhhdCBhY2NlcHQgbXVsdGlwbGUgc2VyaWVzTGlzdHNcbiAgICAgIC8vIHdlIGxlYXZlIHRoZSBwYXJhbSBpbiBwbGFjZSBidXQgbWFyayBpdCBvcHRpb25hbCwgc28gdXNlcnMgY2FuIGFkZCBtb3JlIHNlcmllcyBpZiB0aGV5IHdpc2hcbiAgICAgIGlmIChmdW5jRGVmLnBhcmFtc1swXS5tdWx0aXBsZSkge1xuICAgICAgICBmdW5jRGVmLnBhcmFtc1swXS5yZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAvLyBvdGhlcndpc2UgY2hvcCBvZmYgdGhlIGZpcnN0IHBhcmFtLCBpdCdsbCBiZSBoYW5kbGVkIHNlcGFyYXRlbHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmNEZWYucGFyYW1zLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgICAvLyB0YWcgZnVuY3Rpb24gYXMgZmFrZVxuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jLmZha2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGZvckVhY2goZnVuY0RlZi5wYXJhbXMsIChyYXdQYXJhbSkgPT4ge1xuICAgICAgY29uc3QgcGFyYW06IGFueSA9IHtcbiAgICAgICAgbmFtZTogcmF3UGFyYW0ubmFtZSxcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIG9wdGlvbmFsOiAhcmF3UGFyYW0ucmVxdWlyZWQsXG4gICAgICAgIG11bHRpcGxlOiAhIXJhd1BhcmFtLm11bHRpcGxlLFxuICAgICAgICBvcHRpb25zOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICBpZiAocmF3UGFyYW0uZGVmYXVsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChyYXdQYXJhbS5kZWZhdWx0ID09PSBJbmZpbml0eSkge1xuICAgICAgICAgIGZ1bmMuZGVmYXVsdFBhcmFtcy5wdXNoKCdpbmYnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmdW5jLmRlZmF1bHRQYXJhbXMucHVzaCh0b1N0cmluZyhyYXdQYXJhbS5kZWZhdWx0KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0uc3VnZ2VzdGlvbnMpIHtcbiAgICAgICAgZnVuYy5kZWZhdWx0UGFyYW1zLnB1c2godG9TdHJpbmcocmF3UGFyYW0uc3VnZ2VzdGlvbnNbMF0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmMuZGVmYXVsdFBhcmFtcy5wdXNoKCcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICBwYXJhbS50eXBlID0gJ2Jvb2xlYW4nO1xuICAgICAgICBwYXJhbS5vcHRpb25zID0gWyd0cnVlJywgJ2ZhbHNlJ107XG4gICAgICB9IGVsc2UgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdpbnRlZ2VyJykge1xuICAgICAgICBwYXJhbS50eXBlID0gJ2ludCc7XG4gICAgICB9IGVsc2UgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdmbG9hdCcpIHtcbiAgICAgICAgcGFyYW0udHlwZSA9ICdmbG9hdCc7XG4gICAgICB9IGVsc2UgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdub2RlJykge1xuICAgICAgICBwYXJhbS50eXBlID0gJ25vZGUnO1xuICAgICAgICBwYXJhbS5vcHRpb25zID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJywgJzExJywgJzEyJ107XG4gICAgICB9IGVsc2UgaWYgKHJhd1BhcmFtLnR5cGUgPT09ICdub2RlT3JUYWcnKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAnbm9kZV9vcl90YWcnO1xuICAgICAgICBwYXJhbS5vcHRpb25zID0gWyduYW1lJywgJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXTtcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ2ludE9ySW50ZXJ2YWwnKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAnaW50X29yX2ludGVydmFsJztcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ3Nlcmllc0xpc3QnKSB7XG4gICAgICAgIHBhcmFtLnR5cGUgPSAndmFsdWVfb3Jfc2VyaWVzJztcbiAgICAgIH0gZWxzZSBpZiAocmF3UGFyYW0udHlwZSA9PT0gJ2ludE9ySW5mJykge1xuICAgICAgICBwYXJhbS50eXBlID0gJ2ludF9vcl9pbmZpbml0eSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyYXdQYXJhbS5vcHRpb25zKSB7XG4gICAgICAgIHBhcmFtLm9wdGlvbnMgPSBtYXAocmF3UGFyYW0ub3B0aW9ucywgdG9TdHJpbmcpO1xuICAgICAgfSBlbHNlIGlmIChyYXdQYXJhbS5zdWdnZXN0aW9ucykge1xuICAgICAgICBwYXJhbS5vcHRpb25zID0gbWFwKHJhd1BhcmFtLnN1Z2dlc3Rpb25zLCB0b1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmMucGFyYW1zLnB1c2gocGFyYW0pO1xuICAgIH0pO1xuXG4gICAgZnVuY0RlZnNbZnVuY05hbWVdID0gZnVuYztcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmNEZWZzO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZUZ1bmNJbnN0YW5jZTogY3JlYXRlRnVuY0luc3RhbmNlLFxuICBnZXRGdW5jRGVmOiBnZXRGdW5jRGVmLFxuICBnZXRGdW5jRGVmczogZ2V0RnVuY0RlZnMsXG4gIHBhcnNlRnVuY0RlZnM6IHBhcnNlRnVuY0RlZnMsXG59O1xuIiwiaW1wb3J0IHsgY29tcGFjdCwgZWFjaCwgZmluZEluZGV4LCBmbGF0dGVuLCBnZXQsIGpvaW4sIGtleUJ5LCBsYXN0LCBtYXAsIHJlZHVjZSwgd2l0aG91dCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNjb3BlZFZhcnMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBhcnJheU1vdmUgfSBmcm9tICdhcHAvY29yZS91dGlscy9hcnJheU1vdmUnO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZURhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgRnVuY0luc3RhbmNlIH0gZnJvbSAnLi9nZnVuYyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5pbXBvcnQgeyBHcmFwaGl0ZVNlZ21lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVUYWdPcGVyYXRvciA9ICc9JyB8ICc9ficgfCAnIT0nIHwgJyE9fic7XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlVGFnID0ge1xuICBrZXk6IHN0cmluZztcbiAgb3BlcmF0b3I6IEdyYXBoaXRlVGFnT3BlcmF0b3I7XG4gIHZhbHVlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBHcmFwaGl0ZVRhcmdldCA9IHtcbiAgcmVmSWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgdGFyZ2V0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb250YWlucyBmdWxsIHF1ZXJ5IGFmdGVyIGludGVycG9sYXRpbmcgc3ViLXF1ZXJpZXMgKGUuZy4gXCJmdW5jdGlvbigjQSlcIiByZWZlcmVuY2luZyBxdWVyeSB3aXRoIHJlZklkPUEpXG4gICAqL1xuICB0YXJnZXRGdWxsOiBzdHJpbmc7XG4gIHRleHRFZGl0b3I6IGJvb2xlYW47XG4gIHBhdXNlZDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaXRlUXVlcnkge1xuICBkYXRhc291cmNlOiBHcmFwaGl0ZURhdGFzb3VyY2U7XG4gIHRhcmdldDogR3JhcGhpdGVUYXJnZXQ7XG4gIGZ1bmN0aW9uczogRnVuY0luc3RhbmNlW10gPSBbXTtcbiAgc2VnbWVudHM6IEdyYXBoaXRlU2VnbWVudFtdID0gW107XG4gIHRhZ3M6IEdyYXBoaXRlVGFnW10gPSBbXTtcbiAgZXJyb3I6IGFueTtcbiAgc2VyaWVzQnlUYWdVc2VkID0gZmFsc2U7XG4gIGNoZWNrT3RoZXJTZWdtZW50c0luZGV4ID0gMDtcbiAgcmVtb3ZlVGFnVmFsdWU6IHN0cmluZztcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgc2NvcGVkVmFyczogYW55O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoZGF0YXNvdXJjZTogYW55LCB0YXJnZXQ6IGFueSwgdGVtcGxhdGVTcnY/OiBUZW1wbGF0ZVNydiwgc2NvcGVkVmFycz86IFNjb3BlZFZhcnMpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMudGVtcGxhdGVTcnYgPSB0ZW1wbGF0ZVNydjtcbiAgICB0aGlzLnNjb3BlZFZhcnMgPSBzY29wZWRWYXJzO1xuICAgIHRoaXMucGFyc2VUYXJnZXQoKTtcblxuICAgIHRoaXMucmVtb3ZlVGFnVmFsdWUgPSAnLS0gcmVtb3ZlIHRhZyAtLSc7XG4gIH1cblxuICBwYXJzZVRhcmdldCgpIHtcbiAgICB0aGlzLmZ1bmN0aW9ucyA9IFtdO1xuICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLnNlcmllc0J5VGFnVXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMudGFyZ2V0LnRleHRFZGl0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKHRoaXMudGFyZ2V0LnRhcmdldCk7XG4gICAgY29uc3QgYXN0Tm9kZSA9IHBhcnNlci5nZXRBc3QoKTtcbiAgICBpZiAoYXN0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jaGVja090aGVyU2VnbWVudHNJbmRleCA9IDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGFzdE5vZGUudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgdGhpcy5lcnJvciA9IGFzdE5vZGUubWVzc2FnZSArICcgYXQgcG9zaXRpb246ICcgKyBhc3ROb2RlLnBvcztcbiAgICAgIHRoaXMudGFyZ2V0LnRleHRFZGl0b3IgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnBhcnNlVGFyZ2V0UmVjdXJzaXZlKGFzdE5vZGUsIG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIHBhcnNpbmcgdGFyZ2V0OicsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlO1xuICAgICAgfVxuICAgICAgdGhpcy50YXJnZXQudGV4dEVkaXRvciA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja090aGVyU2VnbWVudHNJbmRleCA9IHRoaXMuc2VnbWVudHMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIGdldFNlZ21lbnRQYXRoVXBUbyhpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5zZWdtZW50cy5zbGljZSgwLCBpbmRleCk7XG5cbiAgICByZXR1cm4gcmVkdWNlKFxuICAgICAgYXJyLFxuICAgICAgKHJlc3VsdCwgc2VnbWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0ICsgJy4nICsgc2VnbWVudC52YWx1ZSA6IHNlZ21lbnQudmFsdWU7XG4gICAgICB9LFxuICAgICAgJydcbiAgICApO1xuICB9XG5cbiAgcGFyc2VUYXJnZXRSZWN1cnNpdmUoYXN0Tm9kZTogYW55LCBmdW5jOiBhbnkpOiBhbnkge1xuICAgIGlmIChhc3ROb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFzdE5vZGUudHlwZSkge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICBjb25zdCBpbm5lckZ1bmMgPSB0aGlzLmRhdGFzb3VyY2UuY3JlYXRlRnVuY0luc3RhbmNlKGFzdE5vZGUubmFtZSwge1xuICAgICAgICAgIHdpdGhEZWZhdWx0UGFyYW1zOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2goYXN0Tm9kZS5wYXJhbXMsIChwYXJhbSkgPT4ge1xuICAgICAgICAgIHRoaXMucGFyc2VUYXJnZXRSZWN1cnNpdmUocGFyYW0sIGlubmVyRnVuYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlubmVyRnVuYy51cGRhdGVUZXh0KCk7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25zLnB1c2goaW5uZXJGdW5jKTtcblxuICAgICAgICAvLyBleHRyYWN0IHRhZ3MgZnJvbSBzZXJpZXNCeVRhZyBmdW5jdGlvbiBhbmQgaGlkZSBmdW5jdGlvblxuICAgICAgICBpZiAoaW5uZXJGdW5jLmRlZi5uYW1lID09PSAnc2VyaWVzQnlUYWcnICYmICF0aGlzLnNlcmllc0J5VGFnVXNlZCkge1xuICAgICAgICAgIHRoaXMuc2VyaWVzQnlUYWdVc2VkID0gdHJ1ZTtcbiAgICAgICAgICBpbm5lckZ1bmMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRhZ3MgPSB0aGlzLnNwbGl0U2VyaWVzQnlUYWdQYXJhbXMoaW5uZXJGdW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VyaWVzLXJlZic6XG4gICAgICAgIGlmICh0aGlzLnNlZ21lbnRzLmxlbmd0aCA+IDAgfHwgdGhpcy5nZXRTZXJpZXNCeVRhZ0Z1bmNJbmRleCgpID49IDApIHtcbiAgICAgICAgICB0aGlzLmFkZEZ1bmN0aW9uUGFyYW1ldGVyKGZ1bmMsIGFzdE5vZGUudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChhc3ROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHRoaXMuYWRkRnVuY3Rpb25QYXJhbWV0ZXIoZnVuYywgYXN0Tm9kZS52YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWV0cmljJzpcbiAgICAgICAgaWYgKHRoaXMuc2VnbWVudHMubGVuZ3RoIHx8IHRoaXMudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmFkZEZ1bmN0aW9uUGFyYW1ldGVyKGZ1bmMsIGpvaW4obWFwKGFzdE5vZGUuc2VnbWVudHMsICd2YWx1ZScpLCAnLicpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlZ21lbnRzID0gYXN0Tm9kZS5zZWdtZW50cztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTZWdtZW50VmFsdWUoc2VnbWVudDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWdtZW50c1tpbmRleF0udmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuICB9XG5cbiAgYWRkU2VsZWN0TWV0cmljU2VnbWVudCgpIHtcbiAgICB0aGlzLnNlZ21lbnRzLnB1c2goeyB2YWx1ZTogJ3NlbGVjdCBtZXRyaWMnIH0pO1xuICB9XG5cbiAgYWRkRnVuY3Rpb24obmV3RnVuYzogYW55KSB7XG4gICAgdGhpcy5mdW5jdGlvbnMucHVzaChuZXdGdW5jKTtcbiAgfVxuXG4gIGFkZEZ1bmN0aW9uUGFyYW1ldGVyKGZ1bmM6IGFueSwgdmFsdWU6IHN0cmluZykge1xuICAgIGlmIChmdW5jLnBhcmFtcy5sZW5ndGggPj0gZnVuYy5kZWYucGFyYW1zLmxlbmd0aCAmJiAhZ2V0KGxhc3QoZnVuYy5kZWYucGFyYW1zKSwgJ211bHRpcGxlJywgZmFsc2UpKSB7XG4gICAgICB0aHJvdyB7IG1lc3NhZ2U6ICd0b28gbWFueSBwYXJhbWV0ZXJzIGZvciBmdW5jdGlvbiAnICsgZnVuYy5kZWYubmFtZSB9O1xuICAgIH1cbiAgICBmdW5jLnBhcmFtcy5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUZ1bmN0aW9uKGZ1bmM6IGFueSkge1xuICAgIHRoaXMuZnVuY3Rpb25zID0gd2l0aG91dCh0aGlzLmZ1bmN0aW9ucywgZnVuYyk7XG4gIH1cblxuICBtb3ZlRnVuY3Rpb24oZnVuYzogYW55LCBvZmZzZXQ6IG51bWJlcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jdGlvbnMuaW5kZXhPZihmdW5jKTtcbiAgICBhcnJheU1vdmUodGhpcy5mdW5jdGlvbnMsIGluZGV4LCBpbmRleCArIG9mZnNldCk7XG4gIH1cblxuICB1cGRhdGVNb2RlbFRhcmdldCh0YXJnZXRzOiBhbnkpIHtcbiAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSAodGFyZ2V0OiBzdHJpbmcsIGZ1bmM6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIGZ1bmMucmVuZGVyKHRhcmdldCwgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSh2YWx1ZSwgdGhpcy5zY29wZWRWYXJzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0LnRleHRFZGl0b3IpIHtcbiAgICAgIGNvbnN0IG1ldHJpY1BhdGggPSB0aGlzLmdldFNlZ21lbnRQYXRoVXBUbyh0aGlzLnNlZ21lbnRzLmxlbmd0aCkucmVwbGFjZSgvXFwuP3NlbGVjdCBtZXRyaWMkLywgJycpO1xuICAgICAgdGhpcy50YXJnZXQudGFyZ2V0ID0gcmVkdWNlKHRoaXMuZnVuY3Rpb25zLCB3cmFwRnVuY3Rpb24sIG1ldHJpY1BhdGgpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUmVuZGVyZWRUYXJnZXQodGhpcy50YXJnZXQsIHRhcmdldHMpO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIG90aGVyIHF1ZXJpZXMgYW5kIHVwZGF0ZSB0YXJnZXRGdWxsIGFzIG5lZWRlZFxuICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMgfHwgW10pIHtcbiAgICAgIGlmICh0YXJnZXQucmVmSWQgIT09IHRoaXMudGFyZ2V0LnJlZklkKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyZWRUYXJnZXQodGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjbGVhbi11cCBhZGRlZCBwYXJhbVxuICAgIHRoaXMuZnVuY3Rpb25zLmZvckVhY2goKGZ1bmMpID0+IChmdW5jLmFkZGVkID0gZmFsc2UpKTtcbiAgfVxuXG4gIHVwZGF0ZVJlbmRlcmVkVGFyZ2V0KHRhcmdldDogeyByZWZJZDogc3RyaW5nIHwgbnVtYmVyOyB0YXJnZXQ6IGFueTsgdGFyZ2V0RnVsbDogYW55IH0sIHRhcmdldHM6IGFueSkge1xuICAgIC8vIHJlbmRlciBuZXN0ZWQgcXVlcnlcbiAgICBjb25zdCB0YXJnZXRzQnlSZWZJZCA9IGtleUJ5KHRhcmdldHMsICdyZWZJZCcpO1xuXG4gICAgLy8gbm8gcmVmZXJlbmNlcyB0byBzZWxmXG4gICAgZGVsZXRlIHRhcmdldHNCeVJlZklkW3RhcmdldC5yZWZJZF07XG5cbiAgICBjb25zdCBuZXN0ZWRTZXJpZXNSZWZSZWdleCA9IC9cXCMoW0EtWl0pL2c7XG4gICAgbGV0IHRhcmdldFdpdGhOZXN0ZWRRdWVyaWVzID0gdGFyZ2V0LnRhcmdldDtcblxuICAgIC8vIFVzZSByZWYgY291bnQgdG8gdHJhY2sgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgIGZ1bmN0aW9uIGNvdW50VGFyZ2V0UmVmcyh0YXJnZXRzQnlSZWZJZDogYW55LCByZWZJZDogc3RyaW5nKSB7XG4gICAgICBsZXQgcmVmQ291bnQgPSAwO1xuICAgICAgZWFjaCh0YXJnZXRzQnlSZWZJZCwgKHQsIGlkKSA9PiB7XG4gICAgICAgIGlmIChpZCAhPT0gcmVmSWQpIHtcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IG5lc3RlZFNlcmllc1JlZlJlZ2V4LmV4ZWModC50YXJnZXQpO1xuICAgICAgICAgIGNvbnN0IGNvdW50ID0gbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID8gbWF0Y2gubGVuZ3RoIC0gMSA6IDA7XG4gICAgICAgICAgcmVmQ291bnQgKz0gY291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0c0J5UmVmSWRbcmVmSWRdLnJlZkNvdW50ID0gcmVmQ291bnQ7XG4gICAgfVxuICAgIGVhY2godGFyZ2V0c0J5UmVmSWQsICh0LCBpZCkgPT4ge1xuICAgICAgY291bnRUYXJnZXRSZWZzKHRhcmdldHNCeVJlZklkLCBpZCk7XG4gICAgfSk7XG5cbiAgICAvLyBLZWVwIGludGVycG9sYXRpbmcgdW50aWwgdGhlcmUgYXJlIG5vIHF1ZXJ5IHJlZmVyZW5jZXNcbiAgICAvLyBUaGUgcmVhc29uIGZvciB0aGUgbG9vcCBpcyB0aGF0IHRoZSByZWZlcmVuY2VkIHF1ZXJ5IG1pZ2h0IGNvbnRhaW4gYW5vdGhlciByZWZlcmVuY2UgdG8gYW5vdGhlciBxdWVyeVxuICAgIHdoaWxlICh0YXJnZXRXaXRoTmVzdGVkUXVlcmllcy5tYXRjaChuZXN0ZWRTZXJpZXNSZWZSZWdleCkpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSB0YXJnZXRXaXRoTmVzdGVkUXVlcmllcy5yZXBsYWNlKG5lc3RlZFNlcmllc1JlZlJlZ2V4LCAobWF0Y2g6IHN0cmluZywgZzE6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB0ID0gdGFyZ2V0c0J5UmVmSWRbZzFdO1xuICAgICAgICBpZiAoIXQpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyBjaXJjdWxhciByZWZlcmVuY2VzXG4gICAgICAgIGlmICh0LnJlZkNvdW50ID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldHNCeVJlZklkW2cxXTtcbiAgICAgICAgfVxuICAgICAgICB0LnJlZkNvdW50LS07XG5cbiAgICAgICAgcmV0dXJuIHQudGFyZ2V0O1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh1cGRhdGVkID09PSB0YXJnZXRXaXRoTmVzdGVkUXVlcmllcykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXMgPSB1cGRhdGVkO1xuICAgIH1cblxuICAgIGRlbGV0ZSB0YXJnZXQudGFyZ2V0RnVsbDtcbiAgICBpZiAodGFyZ2V0LnRhcmdldCAhPT0gdGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXMpIHtcbiAgICAgIHRhcmdldC50YXJnZXRGdWxsID0gdGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXM7XG4gICAgfVxuICB9XG5cbiAgc3BsaXRTZXJpZXNCeVRhZ1BhcmFtcyhmdW5jOiB7IHBhcmFtczogYW55IH0pIHtcbiAgICBjb25zdCB0YWdQYXR0ZXJuID0gLyhbXlxcIT1+XSspKFxcIT89fj8pKC4qKS87XG4gICAgcmV0dXJuIGZsYXR0ZW4oXG4gICAgICBtYXAoZnVuYy5wYXJhbXMsIChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0YWdQYXR0ZXJuLmV4ZWMocGFyYW0pO1xuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IHRhZyA9IG1hdGNoZXMuc2xpY2UoMSk7XG4gICAgICAgICAgaWYgKHRhZy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtleTogdGFnWzBdLFxuICAgICAgICAgICAgICBvcGVyYXRvcjogdGFnWzFdIGFzIEdyYXBoaXRlVGFnT3BlcmF0b3IsXG4gICAgICAgICAgICAgIHZhbHVlOiB0YWdbMl0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRTZXJpZXNCeVRhZ0Z1bmNJbmRleCgpIHtcbiAgICByZXR1cm4gZmluZEluZGV4KHRoaXMuZnVuY3Rpb25zLCAoZnVuYykgPT4gZnVuYy5kZWYubmFtZSA9PT0gJ3Nlcmllc0J5VGFnJyk7XG4gIH1cblxuICBnZXRTZXJpZXNCeVRhZ0Z1bmMoKSB7XG4gICAgY29uc3Qgc2VyaWVzQnlUYWdGdW5jSW5kZXggPSB0aGlzLmdldFNlcmllc0J5VGFnRnVuY0luZGV4KCk7XG4gICAgaWYgKHNlcmllc0J5VGFnRnVuY0luZGV4ID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uc1tzZXJpZXNCeVRhZ0Z1bmNJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgYWRkVGFnKHRhZzogeyBrZXk6IGFueTsgb3BlcmF0b3I6IEdyYXBoaXRlVGFnT3BlcmF0b3I7IHZhbHVlOiBzdHJpbmcgfSkge1xuICAgIGNvbnN0IG5ld1RhZ1BhcmFtID0gcmVuZGVyVGFnU3RyaW5nKHRhZyk7XG4gICAgdGhpcy5nZXRTZXJpZXNCeVRhZ0Z1bmMoKSEucGFyYW1zLnB1c2gobmV3VGFnUGFyYW0pO1xuICAgIHRoaXMudGFncy5wdXNoKHRhZyk7XG4gIH1cblxuICByZW1vdmVUYWcoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZ2V0U2VyaWVzQnlUYWdGdW5jKCkhLnBhcmFtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudGFncy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgdXBkYXRlVGFnKHRhZzogeyBrZXk6IHN0cmluZzsgb3BlcmF0b3I6IEdyYXBoaXRlVGFnT3BlcmF0b3I7IHZhbHVlOiBzdHJpbmcgfSwgdGFnSW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuXG4gICAgaWYgKHRhZy5rZXkgPT09IHRoaXMucmVtb3ZlVGFnVmFsdWUpIHtcbiAgICAgIHRoaXMucmVtb3ZlVGFnKHRhZ0luZGV4KTtcbiAgICAgIGlmICh0aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRnVuY3Rpb24odGhpcy5nZXRTZXJpZXNCeVRhZ0Z1bmMoKSk7XG4gICAgICAgIHRoaXMuY2hlY2tPdGhlclNlZ21lbnRzSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnNlcmllc0J5VGFnVXNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0U2VyaWVzQnlUYWdGdW5jKCkhLnBhcmFtc1t0YWdJbmRleF0gPSByZW5kZXJUYWdTdHJpbmcodGFnKTtcbiAgICB0aGlzLnRhZ3NbdGFnSW5kZXhdID0gdGFnO1xuICB9XG5cbiAgcmVuZGVyVGFnRXhwcmVzc2lvbnMoZXhjbHVkZUluZGV4ID0gLTEpIHtcbiAgICByZXR1cm4gY29tcGFjdChcbiAgICAgIG1hcCh0aGlzLnRhZ3MsICh0YWdFeHByLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBEb24ndCByZW5kZXIgdGFnIHRoYXQgd2Ugd2FudCB0byBsb29rdXBcbiAgICAgICAgaWYgKGluZGV4ICE9PSBleGNsdWRlSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gdGFnRXhwci5rZXkgKyB0YWdFeHByLm9wZXJhdG9yICsgdGFnRXhwci52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFnU3RyaW5nKHRhZzogeyBrZXk6IGFueTsgb3BlcmF0b3I/OiBhbnk7IHZhbHVlPzogYW55IH0pIHtcbiAgcmV0dXJuIHRhZy5rZXkgKyB0YWcub3BlcmF0b3IgKyB0YWcudmFsdWU7XG59XG4iLCJpbXBvcnQgeyBiaW5kIH0gZnJvbSAnbG9kYXNoJztcblxuLy8gVGhpcyBpcyBhdXRvIGdlbmVyYXRlZCBmcm9tIHRoZSB1bmljb2RlIHRhYmxlcy5cbi8vIFRoZSB0YWJsZXMgYXJlIGF0OlxuLy8gaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L0x1L2xpc3QuaHRtXG4vLyBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvTGwvbGlzdC5odG1cbi8vIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9MdC9saXN0Lmh0bVxuLy8gaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L0xtL2xpc3QuaHRtXG4vLyBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvTG8vbGlzdC5odG1cbi8vIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9ObC9saXN0Lmh0bVxuXG5jb25zdCB1bmljb2RlTGV0dGVyVGFibGUgPSBbXG4gIDE3MCwgMTcwLCAxODEsIDE4MSwgMTg2LCAxODYsIDE5MiwgMjE0LCAyMTYsIDI0NiwgMjQ4LCA3MDUsIDcxMCwgNzIxLCA3MzYsIDc0MCwgNzQ4LCA3NDgsIDc1MCwgNzUwLCA4ODAsIDg4NCwgODg2LFxuICA4ODcsIDg5MCwgODkzLCA5MDIsIDkwMiwgOTA0LCA5MDYsIDkwOCwgOTA4LCA5MTAsIDkyOSwgOTMxLCAxMDEzLCAxMDE1LCAxMTUzLCAxMTYyLCAxMzE5LCAxMzI5LCAxMzY2LCAxMzY5LCAxMzY5LFxuICAxMzc3LCAxNDE1LCAxNDg4LCAxNTE0LCAxNTIwLCAxNTIyLCAxNTY4LCAxNjEwLCAxNjQ2LCAxNjQ3LCAxNjQ5LCAxNzQ3LCAxNzQ5LCAxNzQ5LCAxNzY1LCAxNzY2LCAxNzc0LCAxNzc1LCAxNzg2LFxuICAxNzg4LCAxNzkxLCAxNzkxLCAxODA4LCAxODA4LCAxODEwLCAxODM5LCAxODY5LCAxOTU3LCAxOTY5LCAxOTY5LCAxOTk0LCAyMDI2LCAyMDM2LCAyMDM3LCAyMDQyLCAyMDQyLCAyMDQ4LCAyMDY5LFxuICAyMDc0LCAyMDc0LCAyMDg0LCAyMDg0LCAyMDg4LCAyMDg4LCAyMTEyLCAyMTM2LCAyMzA4LCAyMzYxLCAyMzY1LCAyMzY1LCAyMzg0LCAyMzg0LCAyMzkyLCAyNDAxLCAyNDE3LCAyNDIzLCAyNDI1LFxuICAyNDMxLCAyNDM3LCAyNDQ0LCAyNDQ3LCAyNDQ4LCAyNDUxLCAyNDcyLCAyNDc0LCAyNDgwLCAyNDgyLCAyNDgyLCAyNDg2LCAyNDg5LCAyNDkzLCAyNDkzLCAyNTEwLCAyNTEwLCAyNTI0LCAyNTI1LFxuICAyNTI3LCAyNTI5LCAyNTQ0LCAyNTQ1LCAyNTY1LCAyNTcwLCAyNTc1LCAyNTc2LCAyNTc5LCAyNjAwLCAyNjAyLCAyNjA4LCAyNjEwLCAyNjExLCAyNjEzLCAyNjE0LCAyNjE2LCAyNjE3LCAyNjQ5LFxuICAyNjUyLCAyNjU0LCAyNjU0LCAyNjc0LCAyNjc2LCAyNjkzLCAyNzAxLCAyNzAzLCAyNzA1LCAyNzA3LCAyNzI4LCAyNzMwLCAyNzM2LCAyNzM4LCAyNzM5LCAyNzQxLCAyNzQ1LCAyNzQ5LCAyNzQ5LFxuICAyNzY4LCAyNzY4LCAyNzg0LCAyNzg1LCAyODIxLCAyODI4LCAyODMxLCAyODMyLCAyODM1LCAyODU2LCAyODU4LCAyODY0LCAyODY2LCAyODY3LCAyODY5LCAyODczLCAyODc3LCAyODc3LCAyOTA4LFxuICAyOTA5LCAyOTExLCAyOTEzLCAyOTI5LCAyOTI5LCAyOTQ3LCAyOTQ3LCAyOTQ5LCAyOTU0LCAyOTU4LCAyOTYwLCAyOTYyLCAyOTY1LCAyOTY5LCAyOTcwLCAyOTcyLCAyOTcyLCAyOTc0LCAyOTc1LFxuICAyOTc5LCAyOTgwLCAyOTg0LCAyOTg2LCAyOTkwLCAzMDAxLCAzMDI0LCAzMDI0LCAzMDc3LCAzMDg0LCAzMDg2LCAzMDg4LCAzMDkwLCAzMTEyLCAzMTE0LCAzMTIzLCAzMTI1LCAzMTI5LCAzMTMzLFxuICAzMTMzLCAzMTYwLCAzMTYxLCAzMTY4LCAzMTY5LCAzMjA1LCAzMjEyLCAzMjE0LCAzMjE2LCAzMjE4LCAzMjQwLCAzMjQyLCAzMjUxLCAzMjUzLCAzMjU3LCAzMjYxLCAzMjYxLCAzMjk0LCAzMjk0LFxuICAzMjk2LCAzMjk3LCAzMzEzLCAzMzE0LCAzMzMzLCAzMzQwLCAzMzQyLCAzMzQ0LCAzMzQ2LCAzMzg2LCAzMzg5LCAzMzg5LCAzNDA2LCAzNDA2LCAzNDI0LCAzNDI1LCAzNDUwLCAzNDU1LCAzNDYxLFxuICAzNDc4LCAzNDgyLCAzNTA1LCAzNTA3LCAzNTE1LCAzNTE3LCAzNTE3LCAzNTIwLCAzNTI2LCAzNTg1LCAzNjMyLCAzNjM0LCAzNjM1LCAzNjQ4LCAzNjU0LCAzNzEzLCAzNzE0LCAzNzE2LCAzNzE2LFxuICAzNzE5LCAzNzIwLCAzNzIyLCAzNzIyLCAzNzI1LCAzNzI1LCAzNzMyLCAzNzM1LCAzNzM3LCAzNzQzLCAzNzQ1LCAzNzQ3LCAzNzQ5LCAzNzQ5LCAzNzUxLCAzNzUxLCAzNzU0LCAzNzU1LCAzNzU3LFxuICAzNzYwLCAzNzYyLCAzNzYzLCAzNzczLCAzNzczLCAzNzc2LCAzNzgwLCAzNzgyLCAzNzgyLCAzODA0LCAzODA1LCAzODQwLCAzODQwLCAzOTA0LCAzOTExLCAzOTEzLCAzOTQ4LCAzOTc2LCAzOTgwLFxuICA0MDk2LCA0MTM4LCA0MTU5LCA0MTU5LCA0MTc2LCA0MTgxLCA0MTg2LCA0MTg5LCA0MTkzLCA0MTkzLCA0MTk3LCA0MTk4LCA0MjA2LCA0MjA4LCA0MjEzLCA0MjI1LCA0MjM4LCA0MjM4LCA0MjU2LFxuICA0MjkzLCA0MzA0LCA0MzQ2LCA0MzQ4LCA0MzQ4LCA0MzUyLCA0NjgwLCA0NjgyLCA0Njg1LCA0Njg4LCA0Njk0LCA0Njk2LCA0Njk2LCA0Njk4LCA0NzAxLCA0NzA0LCA0NzQ0LCA0NzQ2LCA0NzQ5LFxuICA0NzUyLCA0Nzg0LCA0Nzg2LCA0Nzg5LCA0NzkyLCA0Nzk4LCA0ODAwLCA0ODAwLCA0ODAyLCA0ODA1LCA0ODA4LCA0ODIyLCA0ODI0LCA0ODgwLCA0ODgyLCA0ODg1LCA0ODg4LCA0OTU0LCA0OTkyLFxuICA1MDA3LCA1MDI0LCA1MTA4LCA1MTIxLCA1NzQwLCA1NzQzLCA1NzU5LCA1NzYxLCA1Nzg2LCA1NzkyLCA1ODY2LCA1ODcwLCA1ODcyLCA1ODg4LCA1OTAwLCA1OTAyLCA1OTA1LCA1OTIwLCA1OTM3LFxuICA1OTUyLCA1OTY5LCA1OTg0LCA1OTk2LCA1OTk4LCA2MDAwLCA2MDE2LCA2MDY3LCA2MTAzLCA2MTAzLCA2MTA4LCA2MTA4LCA2MTc2LCA2MjYzLCA2MjcyLCA2MzEyLCA2MzE0LCA2MzE0LCA2MzIwLFxuICA2Mzg5LCA2NDAwLCA2NDI4LCA2NDgwLCA2NTA5LCA2NTEyLCA2NTE2LCA2NTI4LCA2NTcxLCA2NTkzLCA2NTk5LCA2NjU2LCA2Njc4LCA2Njg4LCA2NzQwLCA2ODIzLCA2ODIzLCA2OTE3LCA2OTYzLFxuICA2OTgxLCA2OTg3LCA3MDQzLCA3MDcyLCA3MDg2LCA3MDg3LCA3MTA0LCA3MTQxLCA3MTY4LCA3MjAzLCA3MjQ1LCA3MjQ3LCA3MjU4LCA3MjkzLCA3NDAxLCA3NDA0LCA3NDA2LCA3NDA5LCA3NDI0LFxuICA3NjE1LCA3NjgwLCA3OTU3LCA3OTYwLCA3OTY1LCA3OTY4LCA4MDA1LCA4MDA4LCA4MDEzLCA4MDE2LCA4MDIzLCA4MDI1LCA4MDI1LCA4MDI3LCA4MDI3LCA4MDI5LCA4MDI5LCA4MDMxLCA4MDYxLFxuICA4MDY0LCA4MTE2LCA4MTE4LCA4MTI0LCA4MTI2LCA4MTI2LCA4MTMwLCA4MTMyLCA4MTM0LCA4MTQwLCA4MTQ0LCA4MTQ3LCA4MTUwLCA4MTU1LCA4MTYwLCA4MTcyLCA4MTc4LCA4MTgwLCA4MTgyLFxuICA4MTg4LCA4MzA1LCA4MzA1LCA4MzE5LCA4MzE5LCA4MzM2LCA4MzQ4LCA4NDUwLCA4NDUwLCA4NDU1LCA4NDU1LCA4NDU4LCA4NDY3LCA4NDY5LCA4NDY5LCA4NDczLCA4NDc3LCA4NDg0LCA4NDg0LFxuICA4NDg2LCA4NDg2LCA4NDg4LCA4NDg4LCA4NDkwLCA4NDkzLCA4NDk1LCA4NTA1LCA4NTA4LCA4NTExLCA4NTE3LCA4NTIxLCA4NTI2LCA4NTI2LCA4NTQ0LCA4NTg0LCAxMTI2NCwgMTEzMTAsIDExMzEyLFxuICAxMTM1OCwgMTEzNjAsIDExNDkyLCAxMTQ5OSwgMTE1MDIsIDExNTIwLCAxMTU1NywgMTE1NjgsIDExNjIxLCAxMTYzMSwgMTE2MzEsIDExNjQ4LCAxMTY3MCwgMTE2ODAsIDExNjg2LCAxMTY4OCwgMTE2OTQsXG4gIDExNjk2LCAxMTcwMiwgMTE3MDQsIDExNzEwLCAxMTcxMiwgMTE3MTgsIDExNzIwLCAxMTcyNiwgMTE3MjgsIDExNzM0LCAxMTczNiwgMTE3NDIsIDExODIzLCAxMTgyMywgMTIyOTMsIDEyMjk1LCAxMjMyMSxcbiAgMTIzMjksIDEyMzM3LCAxMjM0MSwgMTIzNDQsIDEyMzQ4LCAxMjM1MywgMTI0MzgsIDEyNDQ1LCAxMjQ0NywgMTI0NDksIDEyNTM4LCAxMjU0MCwgMTI1NDMsIDEyNTQ5LCAxMjU4OSwgMTI1OTMsIDEyNjg2LFxuICAxMjcwNCwgMTI3MzAsIDEyNzg0LCAxMjc5OSwgMTMzMTIsIDEzMzEyLCAxOTg5MywgMTk4OTMsIDE5OTY4LCAxOTk2OCwgNDA5MDcsIDQwOTA3LCA0MDk2MCwgNDIxMjQsIDQyMTkyLCA0MjIzNywgNDIyNDAsXG4gIDQyNTA4LCA0MjUxMiwgNDI1MjcsIDQyNTM4LCA0MjUzOSwgNDI1NjAsIDQyNjA2LCA0MjYyMywgNDI2NDcsIDQyNjU2LCA0MjczNSwgNDI3NzUsIDQyNzgzLCA0Mjc4NiwgNDI4ODgsIDQyODkxLCA0Mjg5NCxcbiAgNDI4OTYsIDQyODk3LCA0MjkxMiwgNDI5MjEsIDQzMDAyLCA0MzAwOSwgNDMwMTEsIDQzMDEzLCA0MzAxNSwgNDMwMTgsIDQzMDIwLCA0MzA0MiwgNDMwNzIsIDQzMTIzLCA0MzEzOCwgNDMxODcsIDQzMjUwLFxuICA0MzI1NSwgNDMyNTksIDQzMjU5LCA0MzI3NCwgNDMzMDEsIDQzMzEyLCA0MzMzNCwgNDMzNjAsIDQzMzg4LCA0MzM5NiwgNDM0NDIsIDQzNDcxLCA0MzQ3MSwgNDM1MjAsIDQzNTYwLCA0MzU4NCwgNDM1ODYsXG4gIDQzNTg4LCA0MzU5NSwgNDM2MTYsIDQzNjM4LCA0MzY0MiwgNDM2NDIsIDQzNjQ4LCA0MzY5NSwgNDM2OTcsIDQzNjk3LCA0MzcwMSwgNDM3MDIsIDQzNzA1LCA0MzcwOSwgNDM3MTIsIDQzNzEyLCA0MzcxNCxcbiAgNDM3MTQsIDQzNzM5LCA0Mzc0MSwgNDM3NzcsIDQzNzgyLCA0Mzc4NSwgNDM3OTAsIDQzNzkzLCA0Mzc5OCwgNDM4MDgsIDQzODE0LCA0MzgxNiwgNDM4MjIsIDQzOTY4LCA0NDAwMiwgNDQwMzIsIDQ0MDMyLFxuICA1NTIwMywgNTUyMDMsIDU1MjE2LCA1NTIzOCwgNTUyNDMsIDU1MjkxLCA2Mzc0NCwgNjQwNDUsIDY0MDQ4LCA2NDEwOSwgNjQxMTIsIDY0MjE3LCA2NDI1NiwgNjQyNjIsIDY0Mjc1LCA2NDI3OSwgNjQyODUsXG4gIDY0Mjg1LCA2NDI4NywgNjQyOTYsIDY0Mjk4LCA2NDMxMCwgNjQzMTIsIDY0MzE2LCA2NDMxOCwgNjQzMTgsIDY0MzIwLCA2NDMyMSwgNjQzMjMsIDY0MzI0LCA2NDMyNiwgNjQ0MzMsIDY0NDY3LCA2NDgyOSxcbiAgNjQ4NDgsIDY0OTExLCA2NDkxNCwgNjQ5NjcsIDY1MDA4LCA2NTAxOSwgNjUxMzYsIDY1MTQwLCA2NTE0MiwgNjUyNzYsIDY1MzEzLCA2NTMzOCwgNjUzNDUsIDY1MzcwLCA2NTM4MiwgNjU0NzAsIDY1NDc0LFxuICA2NTQ3OSwgNjU0ODIsIDY1NDg3LCA2NTQ5MCwgNjU0OTUsIDY1NDk4LCA2NTUwMCwgNjU1MzYsIDY1NTQ3LCA2NTU0OSwgNjU1NzQsIDY1NTc2LCA2NTU5NCwgNjU1OTYsIDY1NTk3LCA2NTU5OSwgNjU2MTMsXG4gIDY1NjE2LCA2NTYyOSwgNjU2NjQsIDY1Nzg2LCA2NTg1NiwgNjU5MDgsIDY2MTc2LCA2NjIwNCwgNjYyMDgsIDY2MjU2LCA2NjMwNCwgNjYzMzQsIDY2MzUyLCA2NjM3OCwgNjY0MzIsIDY2NDYxLCA2NjQ2NCxcbiAgNjY0OTksIDY2NTA0LCA2NjUxMSwgNjY1MTMsIDY2NTE3LCA2NjU2MCwgNjY3MTcsIDY3NTg0LCA2NzU4OSwgNjc1OTIsIDY3NTkyLCA2NzU5NCwgNjc2MzcsIDY3NjM5LCA2NzY0MCwgNjc2NDQsIDY3NjQ0LFxuICA2NzY0NywgNjc2NjksIDY3ODQwLCA2Nzg2MSwgNjc4NzIsIDY3ODk3LCA2ODA5NiwgNjgwOTYsIDY4MTEyLCA2ODExNSwgNjgxMTcsIDY4MTE5LCA2ODEyMSwgNjgxNDcsIDY4MTkyLCA2ODIyMCwgNjgzNTIsXG4gIDY4NDA1LCA2ODQxNiwgNjg0MzcsIDY4NDQ4LCA2ODQ2NiwgNjg2MDgsIDY4NjgwLCA2OTYzNSwgNjk2ODcsIDY5NzYzLCA2OTgwNywgNzM3MjgsIDc0NjA2LCA3NDc1MiwgNzQ4NTAsIDc3ODI0LCA3ODg5NCxcbiAgOTIxNjAsIDkyNzI4LCAxMTA1OTIsIDExMDU5MywgMTE5ODA4LCAxMTk4OTIsIDExOTg5NCwgMTE5OTY0LCAxMTk5NjYsIDExOTk2NywgMTE5OTcwLCAxMTk5NzAsIDExOTk3MywgMTE5OTc0LCAxMTk5NzcsXG4gIDExOTk4MCwgMTE5OTgyLCAxMTk5OTMsIDExOTk5NSwgMTE5OTk1LCAxMTk5OTcsIDEyMDAwMywgMTIwMDA1LCAxMjAwNjksIDEyMDA3MSwgMTIwMDc0LCAxMjAwNzcsIDEyMDA4NCwgMTIwMDg2LFxuICAxMjAwOTIsIDEyMDA5NCwgMTIwMTIxLCAxMjAxMjMsIDEyMDEyNiwgMTIwMTI4LCAxMjAxMzIsIDEyMDEzNCwgMTIwMTM0LCAxMjAxMzgsIDEyMDE0NCwgMTIwMTQ2LCAxMjA0ODUsIDEyMDQ4OCxcbiAgMTIwNTEyLCAxMjA1MTQsIDEyMDUzOCwgMTIwNTQwLCAxMjA1NzAsIDEyMDU3MiwgMTIwNTk2LCAxMjA1OTgsIDEyMDYyOCwgMTIwNjMwLCAxMjA2NTQsIDEyMDY1NiwgMTIwNjg2LCAxMjA2ODgsXG4gIDEyMDcxMiwgMTIwNzE0LCAxMjA3NDQsIDEyMDc0NiwgMTIwNzcwLCAxMjA3NzIsIDEyMDc3OSwgMTMxMDcyLCAxMzEwNzIsIDE3Mzc4MiwgMTczNzgyLCAxNzM4MjQsIDE3MzgyNCwgMTc3OTcyLFxuICAxNzc5NzIsIDE3Nzk4NCwgMTc3OTg0LCAxNzgyMDUsIDE3ODIwNSwgMTk0NTYwLCAxOTUxMDEsXG5dO1xuXG5jb25zdCBpZGVudGlmaWVyU3RhcnRUYWJsZTogYW55W10gPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMjg7IGkrKykge1xuICBpZGVudGlmaWVyU3RhcnRUYWJsZVtpXSA9XG4gICAgKGkgPj0gNDggJiYgaSA8PSA1NykgfHwgLy8gMC05XG4gICAgaSA9PT0gMzYgfHwgLy8gJFxuICAgIGkgPT09IDEyNiB8fCAvLyB+XG4gICAgaSA9PT0gMTI0IHx8IC8vIHxcbiAgICAoaSA+PSA2NSAmJiBpIDw9IDkwKSB8fCAvLyBBLVpcbiAgICBpID09PSA5NSB8fCAvLyBfXG4gICAgaSA9PT0gNDUgfHwgLy8gLVxuICAgIGkgPT09IDQyIHx8IC8vICpcbiAgICBpID09PSA1OCB8fCAvLyA6XG4gICAgaSA9PT0gOTEgfHwgLy8gdGVtcGxhdGVTdGFydCBbXG4gICAgaSA9PT0gOTMgfHwgLy8gdGVtcGxhdGVFbmQgXVxuICAgIGkgPT09IDYzIHx8IC8vID9cbiAgICBpID09PSAzNyB8fCAvLyAlXG4gICAgaSA9PT0gMzUgfHwgLy8gI1xuICAgIGkgPT09IDYxIHx8IC8vID1cbiAgICAoaSA+PSA5NyAmJiBpIDw9IDEyMik7IC8vIGEtelxufVxuXG5jb25zdCBpZGVudGlmaWVyUGFydFRhYmxlID0gaWRlbnRpZmllclN0YXJ0VGFibGU7XG5cbmV4cG9ydCBjbGFzcyBMZXhlciB7XG4gIGlucHV0OiBhbnk7XG4gIGNoYXI6IG51bWJlcjtcbiAgZnJvbTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGV4cHJlc3Npb246IGFueSkge1xuICAgIHRoaXMuaW5wdXQgPSBleHByZXNzaW9uO1xuICAgIHRoaXMuY2hhciA9IDE7XG4gICAgdGhpcy5mcm9tID0gMTtcbiAgfVxuXG4gIHBlZWsoaT86IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmlucHV0LmNoYXJBdChpIHx8IDApO1xuICB9XG5cbiAgc2tpcChpPzogbnVtYmVyKSB7XG4gICAgaSA9IGkgfHwgMTtcbiAgICB0aGlzLmNoYXIgKz0gaTtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5pbnB1dC5zbGljZShpKTtcbiAgfVxuXG4gIHRva2VuaXplKCkge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLm5leHQoKTtcbiAgICB3aGlsZSAodG9rZW4pIHtcbiAgICAgIGxpc3QucHVzaCh0b2tlbik7XG4gICAgICB0b2tlbiA9IHRoaXMubmV4dCgpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5mcm9tID0gdGhpcy5jaGFyO1xuXG4gICAgLy8gTW92ZSB0byB0aGUgbmV4dCBub24tc3BhY2UgY2hhcmFjdGVyLlxuICAgIGlmICgvXFxzLy50ZXN0KHRoaXMucGVlaygpKSkge1xuICAgICAgd2hpbGUgKC9cXHMvLnRlc3QodGhpcy5wZWVrKCkpKSB7XG4gICAgICAgIHRoaXMuZnJvbSArPSAxO1xuICAgICAgICB0aGlzLnNraXAoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucGVlaygpID09PSAnJykge1xuICAgICAgICAvLyBFT0xcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG1hdGNoID0gdGhpcy5zY2FuU3RyaW5nTGl0ZXJhbCgpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cblxuICAgIG1hdGNoID0gdGhpcy5zY2FuUHVuY3R1YXRvcigpIHx8IHRoaXMuc2Nhbk51bWVyaWNMaXRlcmFsKCkgfHwgdGhpcy5zY2FuSWRlbnRpZmllcigpIHx8IHRoaXMuc2NhblRlbXBsYXRlU2VxdWVuY2UoKTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgdGhpcy5za2lwKG1hdGNoLnZhbHVlLmxlbmd0aCk7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfVxuXG4gICAgLy8gTm8gdG9rZW4gY291bGQgYmUgbWF0Y2hlZCwgZ2l2ZSB1cC5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNjYW5UZW1wbGF0ZVNlcXVlbmNlKCkge1xuICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJ1snICYmIHRoaXMucGVlaygxKSA9PT0gJ1snKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAndGVtcGxhdGVTdGFydCcsXG4gICAgICAgIHZhbHVlOiAnW1snLFxuICAgICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGVlaygpID09PSAnXScgJiYgdGhpcy5wZWVrKDEpID09PSAnXScpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICd0ZW1wbGF0ZUVuZCcsXG4gICAgICAgIHZhbHVlOiAnW1snLFxuICAgICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0IGEgSmF2YVNjcmlwdCBpZGVudGlmaWVyIG91dCBvZiB0aGUgbmV4dCBzZXF1ZW5jZSBvZlxuICAgKiBjaGFyYWN0ZXJzIG9yIHJldHVybiAnbnVsbCcgaWYgaXRzIG5vdCBwb3NzaWJsZS4gSW4gYWRkaXRpb24sXG4gICAqIHRvIElkZW50aWZpZXIgdGhpcyBtZXRob2QgY2FuIGFsc28gcHJvZHVjZSBCb29sZWFuTGl0ZXJhbFxuICAgKiAodHJ1ZS9mYWxzZSkgYW5kIE51bGxMaXRlcmFsIChudWxsKS5cbiAgICovXG4gIHNjYW5JZGVudGlmaWVyKCkge1xuICAgIGxldCBpZCA9ICcnO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHR5cGUsIGNoYXI7XG5cbiAgICAvLyBEZXRlY3RzIGFueSBjaGFyYWN0ZXIgaW4gdGhlIFVuaWNvZGUgY2F0ZWdvcmllcyBcIlVwcGVyY2FzZVxuICAgIC8vIGxldHRlciAoTHUpXCIsIFwiTG93ZXJjYXNlIGxldHRlciAoTGwpXCIsIFwiVGl0bGVjYXNlIGxldHRlclxuICAgIC8vIChMdClcIiwgXCJNb2RpZmllciBsZXR0ZXIgKExtKVwiLCBcIk90aGVyIGxldHRlciAoTG8pXCIsIG9yXG4gICAgLy8gXCJMZXR0ZXIgbnVtYmVyIChObClcIi5cbiAgICAvL1xuICAgIC8vIEJvdGggYXBwcm9hY2ggYW5kIHVuaWNvZGVMZXR0ZXJUYWJsZSB3ZXJlIGJvcnJvd2VkIGZyb21cbiAgICAvLyBHb29nbGUncyBUcmFjZXVyLlxuXG4gICAgZnVuY3Rpb24gaXNVbmljb2RlTGV0dGVyKGNvZGU6IG51bWJlcikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bmljb2RlTGV0dGVyVGFibGUubGVuZ3RoOyApIHtcbiAgICAgICAgaWYgKGNvZGUgPCB1bmljb2RlTGV0dGVyVGFibGVbaSsrXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlIDw9IHVuaWNvZGVMZXR0ZXJUYWJsZVtpKytdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSGV4RGlnaXQoc3RyOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiAvXlswLTlhLWZBLUZdJC8udGVzdChzdHIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRVbmljb2RlRXNjYXBlU2VxdWVuY2UgPSBiaW5kKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcbiAgICAgIGluZGV4ICs9IDE7XG5cbiAgICAgIGlmICh0aGlzLnBlZWsoaW5kZXgpICE9PSAndScpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoMSA9IHRoaXMucGVlayhpbmRleCArIDEpO1xuICAgICAgY29uc3QgY2gyID0gdGhpcy5wZWVrKGluZGV4ICsgMik7XG4gICAgICBjb25zdCBjaDMgPSB0aGlzLnBlZWsoaW5kZXggKyAzKTtcbiAgICAgIGNvbnN0IGNoNCA9IHRoaXMucGVlayhpbmRleCArIDQpO1xuICAgICAgbGV0IGNvZGU7XG5cbiAgICAgIGlmIChpc0hleERpZ2l0KGNoMSkgJiYgaXNIZXhEaWdpdChjaDIpICYmIGlzSGV4RGlnaXQoY2gzKSAmJiBpc0hleERpZ2l0KGNoNCkpIHtcbiAgICAgICAgY29kZSA9IHBhcnNlSW50KGNoMSArIGNoMiArIGNoMyArIGNoNCwgMTYpO1xuXG4gICAgICAgIGlmIChpc1VuaWNvZGVMZXR0ZXIoY29kZSkpIHtcbiAgICAgICAgICBpbmRleCArPSA1O1xuICAgICAgICAgIHJldHVybiAnXFxcXHUnICsgY2gxICsgY2gyICsgY2gzICsgY2g0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgY29uc3QgZ2V0SWRlbnRpZmllclN0YXJ0ID0gYmluZChmdW5jdGlvbiAodGhpczogYW55KSB7XG4gICAgICBjb25zdCBjaHIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgY29uc3QgY29kZSA9IGNoci5jaGFyQ29kZUF0KDApO1xuXG4gICAgICBpZiAoY2hyID09PSAnKicpIHtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvZGUgPT09IDkyKSB7XG4gICAgICAgIHJldHVybiByZWFkVW5pY29kZUVzY2FwZVNlcXVlbmNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2RlIDwgMTI4KSB7XG4gICAgICAgIGlmIChpZGVudGlmaWVyU3RhcnRUYWJsZVtjb2RlXSkge1xuICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNVbmljb2RlTGV0dGVyKGNvZGUpKSB7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHJldHVybiBjaHI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgY29uc3QgZ2V0SWRlbnRpZmllclBhcnQgPSBiaW5kKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcbiAgICAgIGNvbnN0IGNociA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICBjb25zdCBjb2RlID0gY2hyLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgIGlmIChjb2RlID09PSA5Mikge1xuICAgICAgICByZXR1cm4gcmVhZFVuaWNvZGVFc2NhcGVTZXF1ZW5jZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgICBpZiAoaWRlbnRpZmllclBhcnRUYWJsZVtjb2RlXSkge1xuICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgcmV0dXJuIGNocjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNVbmljb2RlTGV0dGVyKGNvZGUpKSB7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHJldHVybiBjaHI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgY2hhciA9IGdldElkZW50aWZpZXJTdGFydCgpO1xuICAgIGlmIChjaGFyID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZCA9IGNoYXI7XG4gICAgZm9yICg7Oykge1xuICAgICAgY2hhciA9IGdldElkZW50aWZpZXJQYXJ0KCk7XG5cbiAgICAgIGlmIChjaGFyID09PSBudWxsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZCArPSBjaGFyO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgJ3RydWUnOiB7XG4gICAgICAgIHR5cGUgPSAnYm9vbCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZmFsc2UnOiB7XG4gICAgICAgIHR5cGUgPSAnYm9vbCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdHlwZSA9ICdpZGVudGlmaWVyJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgIH07XG4gIH1cblxuICAvKlxuICAgKiBFeHRyYWN0IGEgbnVtZXJpYyBsaXRlcmFsIG91dCBvZiB0aGUgbmV4dCBzZXF1ZW5jZSBvZlxuICAgKiBjaGFyYWN0ZXJzIG9yIHJldHVybiAnbnVsbCcgaWYgaXRzIG5vdCBwb3NzaWJsZS4gVGhpcyBtZXRob2RcbiAgICogc3VwcG9ydHMgYWxsIG51bWVyaWMgbGl0ZXJhbHMgZGVzY3JpYmVkIGluIHNlY3Rpb24gNy44LjNcbiAgICogb2YgdGhlIEVjbWFTY3JpcHQgNSBzcGVjaWZpY2F0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCdzIGltcGxlbWVudGF0aW9uIHdhcyBoZWF2aWx5IGluZmx1ZW5jZWQgYnkgdGhlXG4gICAqIHNjYW5OdW1lcmljTGl0ZXJhbCBmdW5jdGlvbiBpbiB0aGUgRXNwcmltYSBwYXJzZXIncyBzb3VyY2UgY29kZS5cbiAgICovXG4gIHNjYW5OdW1lcmljTGl0ZXJhbCgpOiBhbnkge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5pbnB1dC5sZW5ndGg7XG4gICAgbGV0IGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgIGxldCBiYWQ7XG5cbiAgICBmdW5jdGlvbiBpc0RlY2ltYWxEaWdpdChzdHI6IHN0cmluZykge1xuICAgICAgcmV0dXJuIC9eWzAtOV0kLy50ZXN0KHN0cik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPY3RhbERpZ2l0KHN0cjogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gL15bMC03XSQvLnRlc3Qoc3RyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0hleERpZ2l0KHN0cjogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gL15bMC05YS1mQS1GXSQvLnRlc3Qoc3RyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjaDogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gY2ggPT09ICckJyB8fCBjaCA9PT0gJ18nIHx8IGNoID09PSAnXFxcXCcgfHwgKGNoID49ICdhJyAmJiBjaCA8PSAneicpIHx8IChjaCA+PSAnQScgJiYgY2ggPD0gJ1onKTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgbmVnYXRpdmUgbnVtIGxpdGVyYWxzXG4gICAgaWYgKGNoYXIgPT09ICctJykge1xuICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICB9XG5cbiAgICAvLyBOdW1iZXJzIG11c3Qgc3RhcnQgZWl0aGVyIHdpdGggYSBkZWNpbWFsIGRpZ2l0IG9yIGEgcG9pbnQuXG4gICAgaWYgKGNoYXIgIT09ICcuJyAmJiAhaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjaGFyICE9PSAnLicpIHtcbiAgICAgIHZhbHVlICs9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICBpbmRleCArPSAxO1xuICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gJzAnKSB7XG4gICAgICAgIC8vIEJhc2UtMTYgbnVtYmVycy5cbiAgICAgICAgaWYgKGNoYXIgPT09ICd4JyB8fCBjaGFyID09PSAnWCcpIHtcbiAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIHZhbHVlICs9IGNoYXI7XG5cbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKCFpc0hleERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAvLyAweFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgaXNNYWxmb3JtZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGlzSWRlbnRpZmllclN0YXJ0KGNoYXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGJhc2U6IDE2LFxuICAgICAgICAgICAgaXNNYWxmb3JtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcG9zOiB0aGlzLmNoYXIsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhc2UtOCBudW1iZXJzLlxuICAgICAgICBpZiAoaXNPY3RhbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgICAgIGJhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcblxuICAgICAgICAgICAgLy8gTnVtYmVycyBsaWtlICcwMTknIChub3RlIHRoZSA5KSBhcmUgbm90IHZhbGlkIG9jdGFsc1xuICAgICAgICAgICAgLy8gYnV0IHdlIHN0aWxsIHBhcnNlIHRoZW0gYW5kIG1hcmsgYXMgbWFsZm9ybWVkLlxuXG4gICAgICAgICAgICBpZiAoaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgICAgICAgICAgYmFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNPY3RhbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGFyIGlzIGEgbm9uIHB1bmN0dWF0b3IgdGhlbiBpdHMgbm90IGEgdmFsaWQgbnVtYmVyXG4gICAgICAgICAgICAgIGlmICghdGhpcy5pc1B1bmN0dWF0b3IoY2hhcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICAgICAgICBpZiAoaXNJZGVudGlmaWVyU3RhcnQoY2hhcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgYmFzZTogOCxcbiAgICAgICAgICAgIGlzTWFsZm9ybWVkOiBiYWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlY2ltYWwgbnVtYmVycyB0aGF0IHN0YXJ0IHdpdGggJzAnIHN1Y2ggYXMgJzA5JyBhcmUgaWxsZWdhbFxuICAgICAgICAvLyBidXQgd2Ugc3RpbGwgcGFyc2UgdGhlbSBhbmQgcmV0dXJuIGFzIG1hbGZvcm1lZC5cblxuICAgICAgICBpZiAoaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgICBpZiAoIWlzRGVjaW1hbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWNpbWFsIGRpZ2l0cy5cblxuICAgIGlmIChjaGFyID09PSAnLicpIHtcbiAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICBpbmRleCArPSAxO1xuXG4gICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICAgIGlmICghaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSArPSBjaGFyO1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9uZW50IHBhcnQuXG5cbiAgICBpZiAoY2hhciA9PT0gJ2UnIHx8IGNoYXIgPT09ICdFJykge1xuICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcblxuICAgICAgaWYgKGNoYXIgPT09ICcrJyB8fCBjaGFyID09PSAnLScpIHtcbiAgICAgICAgdmFsdWUgKz0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgIH1cblxuICAgICAgY2hhciA9IHRoaXMucGVlayhpbmRleCk7XG4gICAgICBpZiAoaXNEZWNpbWFsRGlnaXQoY2hhcikpIHtcbiAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgaW5kZXggKz0gMTtcblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyID0gdGhpcy5wZWVrKGluZGV4KTtcbiAgICAgICAgICBpZiAoIWlzRGVjaW1hbERpZ2l0KGNoYXIpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgKz0gY2hhcjtcbiAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXIgPSB0aGlzLnBlZWsoaW5kZXgpO1xuICAgICAgaWYgKCF0aGlzLmlzUHVuY3R1YXRvcihjaGFyKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBiYXNlOiAxMCxcbiAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgICAgaXNNYWxmb3JtZWQ6ICFpc0Zpbml0ZSgrdmFsdWUpLFxuICAgIH07XG4gIH1cblxuICBpc1B1bmN0dWF0b3IoY2gxOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGNoMSkge1xuICAgICAgY2FzZSAnLic6XG4gICAgICBjYXNlICcoJzpcbiAgICAgIGNhc2UgJyknOlxuICAgICAgY2FzZSAnLCc6XG4gICAgICBjYXNlICd7JzpcbiAgICAgIGNhc2UgJ30nOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzY2FuUHVuY3R1YXRvcigpIHtcbiAgICBjb25zdCBjaDEgPSB0aGlzLnBlZWsoKTtcblxuICAgIGlmICh0aGlzLmlzUHVuY3R1YXRvcihjaDEpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBjaDEsXG4gICAgICAgIHZhbHVlOiBjaDEsXG4gICAgICAgIHBvczogdGhpcy5jaGFyLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qXG4gICAqIEV4dHJhY3QgYSBzdHJpbmcgb3V0IG9mIHRoZSBuZXh0IHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYW5kL29yXG4gICAqIGxpbmVzIG9yIHJldHVybiAnbnVsbCcgaWYgaXRzIG5vdCBwb3NzaWJsZS4gU2luY2Ugc3RyaW5ncyBjYW5cbiAgICogc3BhbiBhY3Jvc3MgbXVsdGlwbGUgbGluZXMgdGhpcyBtZXRob2QgaGFzIHRvIG1vdmUgdGhlIGNoYXJcbiAgICogcG9pbnRlci5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgcmVjb2duaXplcyBwc2V1ZG8tbXVsdGlsaW5lIEphdmFTY3JpcHQgc3RyaW5nczpcbiAgICpcbiAgICogICB2YXIgc3RyID0gXCJoZWxsb1xcXG4gICAqICAgd29ybGRcIjtcbiAgICovXG4gIHNjYW5TdHJpbmdMaXRlcmFsKCkge1xuICAgIGNvbnN0IHF1b3RlID0gdGhpcy5wZWVrKCk7XG5cbiAgICAvLyBTdHJpbmcgbXVzdCBzdGFydCB3aXRoIGEgcXVvdGUuXG4gICAgaWYgKHF1b3RlICE9PSAnXCInICYmIHF1b3RlICE9PSBcIidcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlID0gJyc7XG5cbiAgICB0aGlzLnNraXAoKTtcblxuICAgIHdoaWxlICh0aGlzLnBlZWsoKSAhPT0gcXVvdGUpIHtcbiAgICAgIGlmICh0aGlzLnBlZWsoKSA9PT0gJycpIHtcbiAgICAgICAgLy8gRW5kIE9mIExpbmVcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgaXNVbmNsb3NlZDogdHJ1ZSxcbiAgICAgICAgICBxdW90ZTogcXVvdGUsXG4gICAgICAgICAgcG9zOiB0aGlzLmNoYXIsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLnBlZWsoKTtcbiAgICAgIGNvbnN0IGp1bXAgPSAxOyAvLyBBIGxlbmd0aCBvZiBhIGp1bXAsIGFmdGVyIHdlJ3JlIGRvbmVcbiAgICAgIC8vIHBhcnNpbmcgdGhpcyBjaGFyYWN0ZXIuXG5cbiAgICAgIHZhbHVlICs9IGNoYXI7XG4gICAgICB0aGlzLnNraXAoanVtcCk7XG4gICAgfVxuXG4gICAgdGhpcy5za2lwKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgaXNVbmNsb3NlZDogZmFsc2UsXG4gICAgICBxdW90ZTogcXVvdGUsXG4gICAgICBwb3M6IHRoaXMuY2hhcixcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBRdWVyeVJlc3VsdE1ldGFOb3RpY2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgTWV0cmljVGFua1Nlcmllc01ldGEgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvbWV0cmljdGFuay9ibG9iL21hc3Rlci9zY3JpcHRzL2NvbmZpZy9zdG9yYWdlLXNjaGVtYXMuY29uZiNMMTUtTDQ2XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmV0ZW50aW9uSW5mbyB7XG4gIGludGVydmFsOiBzdHJpbmc7XG4gIHJldGVudGlvbj86IHN0cmluZztcbiAgY2h1bmtzcGFuPzogc3RyaW5nO1xuICBudW1jaHVua3M/OiBudW1iZXI7XG4gIHJlYWR5PzogYm9vbGVhbiB8IG51bWJlcjsgLy8gd2hldGhlciwgb3IgYXMgb2Ygd2hhdCBkYXRhIHRpbWVzdGFtcCwgdGhlIGFyY2hpdmUgaXMgcmVhZHkgZm9yIHF1ZXJ5aW5nLlxufVxuXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsPzogc3RyaW5nKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDEwKTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB0b0Jvb2xlYW5PclRpbWVzdGFtcCh2YWw/OiBzdHJpbmcpOiBudW1iZXIgfCBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHZhbCkge1xuICAgIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMTApO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb2xsdXBOb3RpY2UobWV0YUxpc3Q6IE1ldHJpY1RhbmtTZXJpZXNNZXRhW10pOiBRdWVyeVJlc3VsdE1ldGFOb3RpY2UgfCBudWxsIHtcbiAgZm9yIChjb25zdCBtZXRhIG9mIG1ldGFMaXN0KSB7XG4gICAgY29uc3QgYXJjaGl2ZUluZGV4ID0gbWV0YVsnYXJjaGl2ZS1yZWFkJ107XG5cbiAgICBpZiAoYXJjaGl2ZUluZGV4ID4gMCkge1xuICAgICAgY29uc3Qgc2NoZW1hID0gcGFyc2VTY2hlbWFSZXRlbnRpb25zKG1ldGFbJ3NjaGVtYS1yZXRlbnRpb25zJ10pO1xuICAgICAgY29uc3QgaW50ZXJ2YWxTdHJpbmcgPSBzY2hlbWFbYXJjaGl2ZUluZGV4XS5pbnRlcnZhbDtcbiAgICAgIGNvbnN0IGZ1bmMgPSAobWV0YVsnY29uc29saWRhdG9yLW5vcm1mZXRjaCddID8/ICcnKS5yZXBsYWNlKCdDb25zb2xpZGF0b3InLCAnJyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IGBEYXRhIGlzIHJvbGxlZCB1cCwgYWdncmVnYXRlZCBvdmVyICR7aW50ZXJ2YWxTdHJpbmd9IHVzaW5nICR7ZnVuY30gZnVuY3Rpb25gLFxuICAgICAgICBzZXZlcml0eTogJ2luZm8nLFxuICAgICAgICBpbnNwZWN0OiAnbWV0YScsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UnVudGltZUNvbnNvbGlkYXRpb25Ob3RpY2UobWV0YUxpc3Q6IE1ldHJpY1RhbmtTZXJpZXNNZXRhW10pOiBRdWVyeVJlc3VsdE1ldGFOb3RpY2UgfCBudWxsIHtcbiAgZm9yIChjb25zdCBtZXRhIG9mIG1ldGFMaXN0KSB7XG4gICAgY29uc3QgcnVudGltZU5yID0gbWV0YVsnYWdnbnVtLXJjJ107XG5cbiAgICBpZiAocnVudGltZU5yID4gMCkge1xuICAgICAgY29uc3QgZnVuYyA9IChtZXRhWydjb25zb2xpZGF0b3ItcmMnXSA/PyAnJykucmVwbGFjZSgnQ29uc29saWRhdG9yJywgJycpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0OiBgRGF0YSBpcyBydW50aW1lIGNvbnNvbGlkYXRlZCwgJHtydW50aW1lTnJ9IGRhdGFwb2ludHMgY29tYmluZWQgdXNpbmcgJHtmdW5jfSBmdW5jdGlvbmAsXG4gICAgICAgIHNldmVyaXR5OiAnaW5mbycsXG4gICAgICAgIGluc3BlY3Q6ICdtZXRhJyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNjaGVtYVJldGVudGlvbnMoc3BlYzogc3RyaW5nKTogUmV0ZW50aW9uSW5mb1tdIHtcbiAgaWYgKCFzcGVjKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBzcGVjLnNwbGl0KCcsJykubWFwKChzdHIpID0+IHtcbiAgICBjb25zdCB2YWxzID0gc3RyLnNwbGl0KCc6Jyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludGVydmFsOiB2YWxzWzBdLFxuICAgICAgcmV0ZW50aW9uOiB2YWxzWzFdLFxuICAgICAgY2h1bmtzcGFuOiB2YWxzWzJdLFxuICAgICAgbnVtY2h1bmtzOiB0b0ludGVnZXIodmFsc1szXSksXG4gICAgICByZWFkeTogdG9Cb29sZWFuT3JUaW1lc3RhbXAodmFsc1s0XSksXG4gICAgfTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEdyYXBoaXRlUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvR3JhcGhpdGVRdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBNZXRyaWNUYW5rTWV0YUluc3BlY3RvciB9IGZyb20gJy4vY29tcG9uZW50cy9NZXRyaWNUYW5rTWV0YUluc3BlY3Rvcic7XG5pbXBvcnQgeyBDb25maWdFZGl0b3IgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24vQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IEdyYXBoaXRlRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmNsYXNzIEFubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcbn1cblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luKEdyYXBoaXRlRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5RWRpdG9yKEdyYXBoaXRlUXVlcnlFZGl0b3IpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKVxuICAuc2V0TWV0YWRhdGFJbnNwZWN0b3IoTWV0cmljVGFua01ldGFJbnNwZWN0b3IpXG4gIC5zZXRBbm5vdGF0aW9uUXVlcnlDdHJsKEFubm90YXRpb25zUXVlcnlDdHJsKTtcbiIsImltcG9ydCB7IExleGVyIH0gZnJvbSAnLi9sZXhlcic7XG5pbXBvcnQgeyBHcmFwaGl0ZVBhcnNlckVycm9yIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBpc0dyYXBoaXRlUGFyc2VyRXJyb3IgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XG4gIGV4cHJlc3Npb246IGFueTtcbiAgbGV4ZXI6IExleGVyO1xuICB0b2tlbnM6IGFueTtcbiAgaW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBhbnkpIHtcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIHRoaXMubGV4ZXIgPSBuZXcgTGV4ZXIoZXhwcmVzc2lvbik7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLnRva2VuaXplKCk7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBnZXRBc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGwoKSB8fCB0aGlzLm1ldHJpY0V4cHJlc3Npb24oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoaXNHcmFwaGl0ZVBhcnNlckVycm9yKGUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICAgICAgcG9zOiBlLnBvcyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjdXJseUJyYWNlU2VnbWVudCgpIHtcbiAgICBpZiAodGhpcy5tYXRjaCgnaWRlbnRpZmllcicsICd7JykgfHwgdGhpcy5tYXRjaCgneycpKSB7XG4gICAgICBsZXQgY3VybHlTZWdtZW50ID0gJyc7XG5cbiAgICAgIHdoaWxlICghdGhpcy5tYXRjaCgnJykgJiYgIXRoaXMubWF0Y2goJ30nKSkge1xuICAgICAgICBjdXJseVNlZ21lbnQgKz0gdGhpcy5jb25zdW1lVG9rZW4oKS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm1hdGNoKCd9JykpIHtcbiAgICAgICAgdGhpcy5lcnJvck1hcmsoXCJFeHBlY3RlZCBjbG9zaW5nICd9J1wiKTtcbiAgICAgIH1cblxuICAgICAgY3VybHlTZWdtZW50ICs9IHRoaXMuY29uc3VtZVRva2VuKCkudmFsdWU7XG5cbiAgICAgIC8vIGlmIGN1cmx5IHNlZ21lbnQgaXMgZGlyZWN0bHkgZm9sbG93ZWQgYnkgaWRlbnRpZmllclxuICAgICAgLy8gaW5jbHVkZSBpdCBpbiB0aGUgc2VnbWVudFxuICAgICAgaWYgKHRoaXMubWF0Y2goJ2lkZW50aWZpZXInKSkge1xuICAgICAgICBjdXJseVNlZ21lbnQgKz0gdGhpcy5jb25zdW1lVG9rZW4oKS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NlZ21lbnQnLFxuICAgICAgICB2YWx1ZTogY3VybHlTZWdtZW50LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbWV0cmljU2VnbWVudCgpIHtcbiAgICBjb25zdCBjdXJseSA9IHRoaXMuY3VybHlCcmFjZVNlZ21lbnQoKTtcbiAgICBpZiAoY3VybHkpIHtcbiAgICAgIHJldHVybiBjdXJseTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXRjaCgnaWRlbnRpZmllcicpIHx8IHRoaXMubWF0Y2goJ251bWJlcicpKSB7XG4gICAgICAvLyBoYWNrIHRvIGhhbmRsZSBmbG9hdCBudW1iZXJzIGluIG1ldHJpYyBzZWdtZW50c1xuICAgICAgY29uc3QgcGFydHMgPSB0aGlzLmNvbnN1bWVUb2tlbigpLnZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICBpZiAocGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNwbGljZSh0aGlzLmluZGV4LCAwLCB7IHR5cGU6ICcuJyB9KTtcbiAgICAgICAgdGhpcy50b2tlbnMuc3BsaWNlKHRoaXMuaW5kZXggKyAxLCAwLCB7XG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgdmFsdWU6IHBhcnRzWzFdLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NlZ21lbnQnLFxuICAgICAgICB2YWx1ZTogcGFydHNbMF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5tYXRjaCgndGVtcGxhdGVTdGFydCcpKSB7XG4gICAgICB0aGlzLmVycm9yTWFyaygnRXhwZWN0ZWQgbWV0cmljIGlkZW50aWZpZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVUb2tlbigpO1xuXG4gICAgaWYgKCF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJykpIHtcbiAgICAgIHRoaXMuZXJyb3JNYXJrKCdFeHBlY3RlZCBpZGVudGlmaWVyIGFmdGVyIHRlbXBsYXRlU3RhcnQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0ge1xuICAgICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICAgIHZhbHVlOiB0aGlzLmNvbnN1bWVUb2tlbigpLnZhbHVlLFxuICAgIH07XG5cbiAgICBpZiAoIXRoaXMubWF0Y2goJ3RlbXBsYXRlRW5kJykpIHtcbiAgICAgIHRoaXMuZXJyb3JNYXJrKCdFeHBlY3RlZCB0ZW1wbGF0ZUVuZCcpO1xuICAgIH1cblxuICAgIHRoaXMuY29uc3VtZVRva2VuKCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBtZXRyaWNFeHByZXNzaW9uKCkge1xuICAgIGlmICghdGhpcy5tYXRjaCgndGVtcGxhdGVTdGFydCcpICYmICF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJykgJiYgIXRoaXMubWF0Y2goJ251bWJlcicpICYmICF0aGlzLm1hdGNoKCd7JykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGU6IGFueSA9IHtcbiAgICAgIHR5cGU6ICdtZXRyaWMnLFxuICAgICAgc2VnbWVudHM6IFtdLFxuICAgIH07XG5cbiAgICBub2RlLnNlZ21lbnRzLnB1c2godGhpcy5tZXRyaWNTZWdtZW50KCkpO1xuXG4gICAgd2hpbGUgKHRoaXMubWF0Y2goJy4nKSkge1xuICAgICAgdGhpcy5jb25zdW1lVG9rZW4oKTtcblxuICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMubWV0cmljU2VnbWVudCgpO1xuICAgICAgaWYgKCFzZWdtZW50KSB7XG4gICAgICAgIHRoaXMuZXJyb3JNYXJrKCdFeHBlY3RlZCBtZXRyaWMgaWRlbnRpZmllcicpO1xuICAgICAgfVxuXG4gICAgICBub2RlLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBmdW5jdGlvbkNhbGwoKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJywgJygnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZTogYW55ID0ge1xuICAgICAgdHlwZTogJ2Z1bmN0aW9uJyxcbiAgICAgIG5hbWU6IHRoaXMuY29uc3VtZVRva2VuKCkudmFsdWUsXG4gICAgfTtcblxuICAgIC8vIGNvbnN1bWUgbGVmdCBwYXJlbnRoZXNpc1xuICAgIHRoaXMuY29uc3VtZVRva2VuKCk7XG5cbiAgICBub2RlLnBhcmFtcyA9IHRoaXMuZnVuY3Rpb25QYXJhbWV0ZXJzKCk7XG5cbiAgICBpZiAoIXRoaXMubWF0Y2goJyknKSkge1xuICAgICAgdGhpcy5lcnJvck1hcmsoJ0V4cGVjdGVkIGNsb3NpbmcgcGFyZW50aGVzaXMnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVUb2tlbigpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBib29sRXhwcmVzc2lvbigpIHtcbiAgICBpZiAoIXRoaXMubWF0Y2goJ2Jvb2wnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdib29sJyxcbiAgICAgIHZhbHVlOiB0aGlzLmNvbnN1bWVUb2tlbigpLnZhbHVlID09PSAndHJ1ZScsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uUGFyYW1ldGVycygpOiBhbnkge1xuICAgIGlmICh0aGlzLm1hdGNoKCcpJykgfHwgdGhpcy5tYXRjaCgnJykpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbSA9XG4gICAgICB0aGlzLmZ1bmN0aW9uQ2FsbCgpIHx8XG4gICAgICB0aGlzLm51bWVyaWNMaXRlcmFsKCkgfHxcbiAgICAgIHRoaXMuc2VyaWVzUmVmRXhwcmVzc2lvbigpIHx8XG4gICAgICB0aGlzLmJvb2xFeHByZXNzaW9uKCkgfHxcbiAgICAgIHRoaXMubWV0cmljRXhwcmVzc2lvbigpIHx8XG4gICAgICB0aGlzLnN0cmluZ0xpdGVyYWwoKTtcblxuICAgIGlmICghdGhpcy5tYXRjaCgnLCcpKSB7XG4gICAgICByZXR1cm4gW3BhcmFtXTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnN1bWVUb2tlbigpO1xuICAgIHJldHVybiBbcGFyYW1dLmNvbmNhdCh0aGlzLmZ1bmN0aW9uUGFyYW1ldGVycygpKTtcbiAgfVxuXG4gIHNlcmllc1JlZkV4cHJlc3Npb24oKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdpZGVudGlmaWVyJykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleF0udmFsdWU7XG4gICAgaWYgKCF2YWx1ZS5tYXRjaCgvXFwjW0EtWl0vKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWVUb2tlbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzZXJpZXMtcmVmJyxcbiAgICAgIHZhbHVlOiB0b2tlbi52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgbnVtZXJpY0xpdGVyYWwoKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdudW1iZXInKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQodGhpcy5jb25zdW1lVG9rZW4oKS52YWx1ZSksXG4gICAgfTtcbiAgfVxuXG4gIHN0cmluZ0xpdGVyYWwoKSB7XG4gICAgaWYgKCF0aGlzLm1hdGNoKCdzdHJpbmcnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmNvbnN1bWVUb2tlbigpO1xuICAgIGlmICh0b2tlbi5pc1VuY2xvc2VkKSB7XG4gICAgICBjb25zdCBlcnJvcjogR3JhcGhpdGVQYXJzZXJFcnJvciA9IHtcbiAgICAgICAgbWVzc2FnZTogJ1VuY2xvc2VkIHN0cmluZyBwYXJhbWV0ZXInLFxuICAgICAgICBwb3M6IHRva2VuLnBvcyxcbiAgICAgIH07XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICB2YWx1ZTogdG9rZW4udmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIGVycm9yTWFyayh0ZXh0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjdXJyZW50VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICBjb25zdCB0eXBlID0gY3VycmVudFRva2VuID8gY3VycmVudFRva2VuLnR5cGUgOiAnZW5kIG9mIHN0cmluZyc7XG4gICAgY29uc3QgZXJyb3I6IEdyYXBoaXRlUGFyc2VyRXJyb3IgPSB7XG4gICAgICBtZXNzYWdlOiB0ZXh0ICsgJyBpbnN0ZWFkIGZvdW5kICcgKyB0eXBlLFxuICAgICAgcG9zOiBjdXJyZW50VG9rZW4gPyBjdXJyZW50VG9rZW4ucG9zIDogdGhpcy5sZXhlci5jaGFyLFxuICAgIH07XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICAvLyByZXR1cm5zIHRva2VuIHZhbHVlIGFuZCBpbmNyZVxuICBjb25zdW1lVG9rZW4oKSB7XG4gICAgdGhpcy5pbmRleCsrO1xuICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4IC0gMV07XG4gIH1cblxuICBtYXRjaFRva2VuKHR5cGU6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCArIGluZGV4XTtcbiAgICByZXR1cm4gKHRva2VuID09PSB1bmRlZmluZWQgJiYgdHlwZSA9PT0gJycpIHx8ICh0b2tlbiAmJiB0b2tlbi50eXBlID09PSB0eXBlKTtcbiAgfVxuXG4gIG1hdGNoKHRva2VuMTogYW55LCB0b2tlbjI/OiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaFRva2VuKHRva2VuMSwgMCkgJiYgKCF0b2tlbjIgfHwgdGhpcy5tYXRjaFRva2VuKHRva2VuMiwgMSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHsgVGltZVJhbmdlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEZ1bmNJbnN0YW5jZSB9IGZyb20gJy4uL2dmdW5jJztcbmltcG9ydCB7IEdyYXBoaXRlUXVlcnksIEdyYXBoaXRlUXVlcnlFZGl0b3JEZXBlbmRlbmNpZXMsIEdyYXBoaXRlU2VnbWVudCwgR3JhcGhpdGVUYWcgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogTGlzdCBvZiBwb3NzaWJsZSBhY3Rpb25zIGNoYW5naW5nIHRoZSBzdGF0ZSBvZiBRdWVyeUVkaXRvclxuICovXG5cbmNvbnN0IGluaXQgPSBjcmVhdGVBY3Rpb248R3JhcGhpdGVRdWVyeUVkaXRvckRlcGVuZGVuY2llcz4oJ2luaXQnKTtcblxuLyoqXG4gKiBTeW5jaHJvbmlzZSBlZGl0b3IgZGVwZW5kZW5jaWVzIHdpdGggaW50ZXJuYWwgc3RhdGUuXG4gKi9cbmNvbnN0IHRpbWVSYW5nZUNoYW5nZWQgPSBjcmVhdGVBY3Rpb248VGltZVJhbmdlIHwgdW5kZWZpbmVkPigndGltZS1yYW5nZS1jaGFuZ2VkJyk7XG5jb25zdCBxdWVyaWVzQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxHcmFwaGl0ZVF1ZXJ5W10gfCB1bmRlZmluZWQ+KCdxdWVyaWVzLWNoYW5nZWQnKTtcbmNvbnN0IHF1ZXJ5Q2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxHcmFwaGl0ZVF1ZXJ5PigncXVlcnktY2hhbmdlZCcpO1xuXG4vLyBNZXRyaWNzICYgVGFnc1xuY29uc3Qgc2VnbWVudFZhbHVlQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjx7IHNlZ21lbnQ6IEdyYXBoaXRlU2VnbWVudCB8IHN0cmluZzsgaW5kZXg6IG51bWJlciB9Pignc2VnbWVudC12YWx1ZS1jaGFuZ2VkJyk7XG5cbi8vIFRhZ3NcbmNvbnN0IGFkZE5ld1RhZyA9IGNyZWF0ZUFjdGlvbjx7IHNlZ21lbnQ6IEdyYXBoaXRlU2VnbWVudCB9PignYWRkLW5ldy10YWcnKTtcbmNvbnN0IHRhZ0NoYW5nZWQgPSBjcmVhdGVBY3Rpb248eyB0YWc6IEdyYXBoaXRlVGFnOyBpbmRleDogbnVtYmVyIH0+KCd0YWctY2hhbmdlZCcpO1xuY29uc3QgdW5wYXVzZSA9IGNyZWF0ZUFjdGlvbigndW5wYXVzZScpO1xuXG4vLyBGdW5jdGlvbnNcbmNvbnN0IGFkZEZ1bmN0aW9uID0gY3JlYXRlQWN0aW9uPHsgbmFtZTogc3RyaW5nIH0+KCdhZGQtZnVuY3Rpb24nKTtcbmNvbnN0IHJlbW92ZUZ1bmN0aW9uID0gY3JlYXRlQWN0aW9uPHsgZnVuYzogRnVuY0luc3RhbmNlIH0+KCdyZW1vdmUtZnVuY3Rpb24nKTtcbmNvbnN0IG1vdmVGdW5jdGlvbiA9IGNyZWF0ZUFjdGlvbjx7IGZ1bmM6IEZ1bmNJbnN0YW5jZTsgb2Zmc2V0OiBudW1iZXIgfT4oJ21vdmUtZnVuY3Rpb24nKTtcbmNvbnN0IHVwZGF0ZUZ1bmN0aW9uUGFyYW0gPSBjcmVhdGVBY3Rpb248eyBmdW5jOiBGdW5jSW5zdGFuY2U7IGluZGV4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfT4oJ2NoYW5nZS1mdW5jdGlvbi1wYXJhbScpO1xuXG4vLyBUZXh0IGVkaXRvclxuY29uc3QgdXBkYXRlUXVlcnkgPSBjcmVhdGVBY3Rpb248eyBxdWVyeTogc3RyaW5nIH0+KCd1cGRhdGUtcXVlcnknKTtcbmNvbnN0IHJ1blF1ZXJ5ID0gY3JlYXRlQWN0aW9uKCdydW4tY3VycmVudC1xdWVyeScpO1xuY29uc3QgdG9nZ2xlRWRpdG9yTW9kZSA9IGNyZWF0ZUFjdGlvbigndG9nZ2xlLWVkaXRvcicpO1xuXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcbiAgaW5pdCxcbiAgdGltZVJhbmdlQ2hhbmdlZCxcbiAgcXVlcmllc0NoYW5nZWQsXG4gIHF1ZXJ5Q2hhbmdlZCxcbiAgc2VnbWVudFZhbHVlQ2hhbmdlZCxcbiAgdGFnQ2hhbmdlZCxcbiAgYWRkTmV3VGFnLFxuICB1bnBhdXNlLFxuICBhZGRGdW5jdGlvbixcbiAgcmVtb3ZlRnVuY3Rpb24sXG4gIG1vdmVGdW5jdGlvbixcbiAgdXBkYXRlRnVuY3Rpb25QYXJhbSxcbiAgdXBkYXRlUXVlcnksXG4gIHJ1blF1ZXJ5LFxuICB0b2dnbGVFZGl0b3JNb2RlLFxufTtcbiIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIERpc3BhdGNoLCBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvdGVtcGxhdGluZy90ZW1wbGF0ZV9zcnYnO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZURhdGFzb3VyY2UgfSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IEdyYXBoaXRlT3B0aW9ucywgR3JhcGhpdGVRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlIH0gZnJvbSAnLi9zdG9yZSc7XG5cbmNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RGlzcGF0Y2g8QW55QWN0aW9uPj4oe30gYXMgRGlzcGF0Y2g8QW55QWN0aW9uPik7XG5jb25zdCBHcmFwaGl0ZVN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8R3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlPih7fSBhcyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUpO1xuXG5leHBvcnQgY29uc3QgdXNlRGlzcGF0Y2ggPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR3JhcGhpdGVTdGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoR3JhcGhpdGVTdGF0ZUNvbnRleHQpO1xufTtcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVRdWVyeUVkaXRvclByb3BzID0gUXVlcnlFZGl0b3JQcm9wczxHcmFwaGl0ZURhdGFzb3VyY2UsIEdyYXBoaXRlUXVlcnksIEdyYXBoaXRlT3B0aW9ucz47XG5cbmV4cG9ydCBjb25zdCBHcmFwaGl0ZVF1ZXJ5RWRpdG9yQ29udGV4dCA9ICh7XG4gIGRhdGFzb3VyY2UsXG4gIG9uUnVuUXVlcnksXG4gIG9uQ2hhbmdlLFxuICBxdWVyeSxcbiAgcXVlcmllcyxcbiAgcmFuZ2UsXG4gIGNoaWxkcmVuLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48R3JhcGhpdGVRdWVyeUVkaXRvclByb3BzPikgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZT4oKTtcbiAgY29uc3QgW25lZWRzUmVmcmVzaCwgc2V0TmVlZHNSZWZyZXNoXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVTdG9yZSgoc3RhdGUpID0+IHtcbiAgICAgIHNldFN0YXRlKHN0YXRlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIHN5bmNocm9uaXNlIGNoYW5nZXMgcHJvdmlkZWQgaW4gcHJvcHMgd2l0aCBlZGl0b3IncyBzdGF0ZVxuICBjb25zdCBwcmV2aW91c1JhbmdlID0gdXNlUHJldmlvdXMocmFuZ2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcmV2aW91c1JhbmdlPy5yYXcgIT09IHJhbmdlPy5yYXcpIHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMudGltZVJhbmdlQ2hhbmdlZChyYW5nZSkpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCByYW5nZSwgcHJldmlvdXNSYW5nZV0pO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5xdWVyaWVzQ2hhbmdlZChxdWVyaWVzKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBhZGRpbmcgc3RhdGUgdG8gZGVwZW5kZW5jaWVzIGNhdXNlcyBpbmZpbml0ZSBsb29wc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbZGlzcGF0Y2gsIHF1ZXJpZXNdXG4gICk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50YXJnZXQ/LnRhcmdldCAhPT0gcXVlcnkudGFyZ2V0KSB7XG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbnMucXVlcnlDaGFuZ2VkKHF1ZXJ5KSk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBhZGRpbmcgc3RhdGUgdG8gZGVwZW5kZW5jaWVzIGNhdXNlcyBpbmZpbml0ZSBsb29wc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbZGlzcGF0Y2gsIHF1ZXJ5XVxuICApO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAobmVlZHNSZWZyZXNoICYmIHN0YXRlKSB7XG4gICAgICAgIHNldE5lZWRzUmVmcmVzaChmYWxzZSk7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHRhcmdldDogc3RhdGUudGFyZ2V0LnRhcmdldCB9KTtcbiAgICAgICAgb25SdW5RdWVyeSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gYWRkaW5nIHN0YXRlIHRvIGRlcGVuZGVuY2llcyBjYXVzZXMgaW5maW5pdGUgbG9vcHNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW25lZWRzUmVmcmVzaCwgb25DaGFuZ2UsIG9uUnVuUXVlcnksIHF1ZXJ5XVxuICApO1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGFjdGlvbnMuaW5pdCh7XG4gICAgICAgIHRhcmdldDogcXVlcnksXG4gICAgICAgIGRhdGFzb3VyY2U6IGRhdGFzb3VyY2UsXG4gICAgICAgIHJhbmdlOiByYW5nZSxcbiAgICAgICAgdGVtcGxhdGVTcnY6IGdldFRlbXBsYXRlU3J2KCksXG4gICAgICAgIC8vIGxpc3Qgb2YgcXVlcmllcyBpcyBwYXNzZWQgb25seSB3aGVuIHRoZSBlZGl0b3IgaXMgaW4gRGFzaGJvYXJkcy4gVGhpcyBpcyB0byBhbGxvdyBpbnRlcnBvbGF0aW9uXG4gICAgICAgIC8vIG9mIHN1Yi1xdWVyaWVzIHdoaWNoIGFyZSBzdG9yZWQgaW4gXCJ0YXJnZXRGdWxsXCIgcHJvcGVydHkgdXNlZCBieSBhbGVydGluZyBpbiB0aGUgYmFja2VuZC5cbiAgICAgICAgcXVlcmllczogcXVlcmllcyB8fCBbXSxcbiAgICAgICAgcmVmcmVzaDogKCkgPT4ge1xuICAgICAgICAgIC8vIGRvIG5vdCBydW4gb25DaGFuZ2Uvb25SdW5RdWVyeSBzdHJhaWdodCBhd2F5IHRvIGVuc3VyZSB0aGUgaW50ZXJuYWwgc3RhdGUgZ2V0cyB1cGRhdGVkIGZpcnN0XG4gICAgICAgICAgLy8gdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIChvbkNoYW5nZSBjb3VsZCB1cGRhdGUgcHJvcHMgYmVmb3JlIHRoZSByZWR1Y2VyIGFjdGlvbiBmaW5pc2hlcylcbiAgICAgICAgICBzZXROZWVkc1JlZnJlc2godHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHcmFwaGl0ZVN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+e2NoaWxkcmVufTwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9HcmFwaGl0ZVN0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgY2xvbmUgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9yZWR1Y2Vycy9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyBGdW5jSW5zdGFuY2UgfSBmcm9tICcuLi9nZnVuYyc7XG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5LCBHcmFwaGl0ZVRhZ09wZXJhdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUgfSBmcm9tICcuL3N0b3JlJztcblxuLyoqXG4gKiBIZWxwZXJzIHVzZWQgYnkgcmVkdWNlcnMgYW5kIHByb3ZpZGVycy4gVGhleSBtb2RpZnkgc3RhdGUgb2JqZWN0IGRpcmVjdGx5IHNvIHNob3VsZCBvcGVyYXRlIG9uIGEgY29weSBvZiB0aGUgc3RhdGUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IEdSQVBISVRFX1RBR19PUEVSQVRPUlM6IEdyYXBoaXRlVGFnT3BlcmF0b3JbXSA9IFsnPScsICchPScsICc9ficsICchPX4nXTtcblxuLyoqXG4gKiBUYWcgbmFtZXMgYW5kIG1ldHJpYyBuYW1lcyBhcmUgZGlzcGxheWVkIGluIGEgc2luZ2xlIGRyb3Bkb3duLiBUaGlzIHByZWZpeCBpcyB1c2VkIHRvXG4gKiBkaXN0aW5ndWlzaCBib3RoIGluIHRoZSBVSS5cbiAqL1xuZXhwb3J0IGNvbnN0IFRBR19QUkVGSVggPSAndGFnOiAnO1xuXG4vKipcbiAqIENyZWF0ZSBuZXcgQVNUIGJhc2VkIG9uIG5ldyBxdWVyeS5cbiAqIEJ1aWxkIHNlZ21lbnRzIGZyb20gcGFyc2VkIG1ldHJpYyBuYW1lIGFuZCBmdW5jdGlvbnMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZVRhcmdldChzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlKTogUHJvbWlzZTx2b2lkPiB7XG4gIHN0YXRlLnF1ZXJ5TW9kZWwucGFyc2VUYXJnZXQoKTtcbiAgYXdhaXQgYnVpbGRTZWdtZW50cyhzdGF0ZSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIHNlZ21lbnRzIG91dCBvZiB0aGUgY3VycmVudCBtZXRyaWMgcGF0aCArIGFkZCBcInNlbGVjdCBtZXRyaWNzXCIgaWYgaXQncyBwb3NzaWJsZSB0byBhZGQgbW9yZSB0byB0aGUgcGF0aFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnVpbGRTZWdtZW50cyhzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLCBtb2RpZnlMYXN0U2VnbWVudCA9IHRydWUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gU3RhcnQgd2l0aCBhIHNoYWxsb3cgY29weSBmcm9tIHRoZSBtb2RlbCwgdGhlbiBjaGVjayBpZiBcInNlbGVjdCBtZXRyaWNcIiBzZWdtZW50IHNob3VsZCBiZSBhZGRlZCBhdCB0aGUgZW5kXG4gIHN0YXRlLnNlZ21lbnRzID0gY2xvbmUoc3RhdGUucXVlcnlNb2RlbC5zZWdtZW50cyk7XG5cbiAgY29uc3QgY2hlY2tPdGhlclNlZ21lbnRzSW5kZXggPSBzdGF0ZS5xdWVyeU1vZGVsLmNoZWNrT3RoZXJTZWdtZW50c0luZGV4IHx8IDA7XG5cbiAgYXdhaXQgY2hlY2tPdGhlclNlZ21lbnRzKHN0YXRlLCBjaGVja090aGVyU2VnbWVudHNJbmRleCwgbW9kaWZ5TGFzdFNlZ21lbnQpO1xufVxuXG4vKipcbiAqIEFkZCBcInNlbGVjdCBtZXRyaWNcIiBzZWdtZW50IGF0IHRoZSBlbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFNlbGVjdE1ldHJpY1NlZ21lbnQoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSk6IHZvaWQge1xuICBzdGF0ZS5xdWVyeU1vZGVsLmFkZFNlbGVjdE1ldHJpY1NlZ21lbnQoKTtcbiAgc3RhdGUuc2VnbWVudHMucHVzaCh7IHZhbHVlOiAnc2VsZWN0IG1ldHJpYycsIGZha2U6IHRydWUgfSk7XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHRoZSBzdGF0ZSBhZnRlciBhZGRpbmcgb3IgY2hhbmdpbmcgYSBzZWdtZW50OlxuICogLSBhZGRzIFwic2VsZWN0IG1ldHJpY1wiIG9ubHkgd2hlbiBtb3JlIHNlZ21lbnRzIGNhbiBiZSBhZGRlZCB0byB0aGUgbWV0cmljIG5hbWVcbiAqIC0gY2hlY2sgaWYgc3Vic2VxdWVudCBzZWdtZW50cyBhcmUgc3RpbGwgdmFsaWQgaWYgaW4tYmV0d2VlbiBzZWdtZW50IGNoYW5nZXMgYW5kXG4gKiAgIHJlbW92ZXMgaW52YWxpZCBzZWdtZW50cy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrT3RoZXJTZWdtZW50cyhcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSxcbiAgZnJvbUluZGV4OiBudW1iZXIsXG4gIG1vZGlmeUxhc3RTZWdtZW50ID0gdHJ1ZVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChzdGF0ZS5xdWVyeU1vZGVsLnNlZ21lbnRzLmxlbmd0aCA9PT0gMSAmJiBzdGF0ZS5xdWVyeU1vZGVsLnNlZ21lbnRzWzBdLnR5cGUgPT09ICdzZXJpZXMtcmVmJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChmcm9tSW5kZXggPT09IDApIHtcbiAgICBhZGRTZWxlY3RNZXRyaWNTZWdtZW50KHN0YXRlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwYXRoID0gc3RhdGUucXVlcnlNb2RlbC5nZXRTZWdtZW50UGF0aFVwVG8oZnJvbUluZGV4ICsgMSk7XG4gIGlmIChwYXRoID09PSAnJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBhd2FpdCBzdGF0ZS5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeShwYXRoKTtcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAocGF0aCAhPT0gJycgJiYgbW9kaWZ5TGFzdFNlZ21lbnQpIHtcbiAgICAgICAgc3RhdGUucXVlcnlNb2RlbC5zZWdtZW50cyA9IHN0YXRlLnF1ZXJ5TW9kZWwuc2VnbWVudHMuc3BsaWNlKDAsIGZyb21JbmRleCk7XG4gICAgICAgIHN0YXRlLnNlZ21lbnRzID0gc3RhdGUuc2VnbWVudHMuc3BsaWNlKDAsIGZyb21JbmRleCk7XG4gICAgICAgIGFkZFNlbGVjdE1ldHJpY1NlZ21lbnQoc3RhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VnbWVudHNbMF0uZXhwYW5kYWJsZSkge1xuICAgICAgaWYgKHN0YXRlLnNlZ21lbnRzLmxlbmd0aCA9PT0gZnJvbUluZGV4KSB7XG4gICAgICAgIGFkZFNlbGVjdE1ldHJpY1NlZ21lbnQoc3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgY2hlY2tPdGhlclNlZ21lbnRzKHN0YXRlLCBmcm9tSW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgaGFuZGxlTWV0cmljc0F1dG9Db21wbGV0ZUVycm9yKHN0YXRlLCBlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlU2VnbWVudHMoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICBzdGF0ZS5zZWdtZW50cyA9IHN0YXRlLnNlZ21lbnRzLnNwbGljZSgwLCBpbmRleCk7XG4gIHN0YXRlLnF1ZXJ5TW9kZWwuc2VnbWVudHMgPSBzdGF0ZS5xdWVyeU1vZGVsLnNlZ21lbnRzLnNwbGljZSgwLCBpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eVNlZ21lbnRzKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUpOiB2b2lkIHtcbiAgc3RhdGUucXVlcnlNb2RlbC5zZWdtZW50cyA9IFtdO1xuICBzdGF0ZS5zZWdtZW50cyA9IFtdO1xufVxuXG4vKipcbiAqIFdoZW4gc2VyaWVzQnlUYWcgZnVuY3Rpb24gaXMgYWRkZWQgdGhlIFVJIGNoYW5nZXMgaXQncyBzdGF0ZSBhbmQgb25seSB0YWdzIGNhbiBiZSBhZGRlZCBmcm9tIG5vdy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFNlcmllc0J5VGFnRnVuYyhzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLCB0YWc6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBuZXdGdW5jID0gc3RhdGUuZGF0YXNvdXJjZS5jcmVhdGVGdW5jSW5zdGFuY2UoJ3Nlcmllc0J5VGFnJywge1xuICAgIHdpdGhEZWZhdWx0UGFyYW1zOiBmYWxzZSxcbiAgfSk7XG4gIGNvbnN0IHRhZ1BhcmFtID0gYCR7dGFnfT1gO1xuICBuZXdGdW5jLnBhcmFtcyA9IFt0YWdQYXJhbV07XG4gIHN0YXRlLnF1ZXJ5TW9kZWwuYWRkRnVuY3Rpb24obmV3RnVuYyk7XG4gIG5ld0Z1bmMuYWRkZWQgPSB0cnVlO1xuXG4gIGVtcHR5U2VnbWVudHMoc3RhdGUpO1xuICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgYXdhaXQgcGFyc2VUYXJnZXQoc3RhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc21hcnRseUhhbmRsZU5ld0FsaWFzQnlOb2RlKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsIGZ1bmM6IEZ1bmNJbnN0YW5jZSk6IHZvaWQge1xuICBpZiAoZnVuYy5kZWYubmFtZSAhPT0gJ2FsaWFzQnlOb2RlJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RhdGUuc2VnbWVudHNbaV0udmFsdWUuaW5kZXhPZignKicpID49IDApIHtcbiAgICAgIGZ1bmMucGFyYW1zWzBdID0gaTtcbiAgICAgIGZ1bmMuYWRkZWQgPSBmYWxzZTtcbiAgICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFBhdXNlcyBydW5uaW5nIHRoZSBxdWVyeSB0byBhbGxvdyBzZWxlY3RpbmcgdGFnIHZhbHVlLiBUaGlzIGlzIHRvIHByZXZlbnQgZ2V0dGluZyBlcnJvcnMgaWYgdGhlIHF1ZXJ5IGlzIHJ1blxuICogZm9yIGEgdGFnIHdpdGggbm8gc2VsZWN0ZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXVzZShzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlKTogdm9pZCB7XG4gIHN0YXRlLnBhdXNlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYWdQcmVmaXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKFRBR19QUkVGSVgsICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSk6IHZvaWQge1xuICBpZiAoc3RhdGUucXVlcnlNb2RlbC5lcnJvcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG9sZFRhcmdldCA9IHN0YXRlLnF1ZXJ5TW9kZWwudGFyZ2V0LnRhcmdldDtcbiAgLy8gSW50ZXJwb2xhdGUgZnJvbSBvdGhlciBxdWVyaWVzOlxuICAvLyBCZWNhdXNlIG9mIG1peGVkIGRhdGEgc291cmNlcyB0aGUgbGlzdCBtYXkgY29udGFpbiBxdWVyaWVzIGZvciBub24tR3JhcGhpdGUgZGF0YSBzb3VyY2VzLiBUbyBlbnN1cmUgYSB2YWxpZCBxdWVyeVxuICAvLyBpcyB1c2VkIGZvciBpbnRlcnBvbGF0aW9uIHdlIHNob3VsZCBjaGVjayByZXF1aXJlZCBwcm9wZXJ0aWVzIGFyZSBwYXNzZWQgdGhvdWdoIGluIHRoZW9yeSBpdCBhbGxvd3MgdG8gaW50ZXJwb2xhdGVcbiAgLy8gd2l0aCBxdWVyaWVzIHRoYXQgY29udGFpbiBcInRhcmdldFwiIHByb3BlcnR5IGFzIHdlbGwuXG4gIHN0YXRlLnF1ZXJ5TW9kZWwudXBkYXRlTW9kZWxUYXJnZXQoXG4gICAgKHN0YXRlLnF1ZXJpZXMgfHwgW10pLmZpbHRlcigocXVlcnkpID0+ICd0YXJnZXQnIGluIHF1ZXJ5ICYmIHR5cGVvZiAocXVlcnkgYXMgR3JhcGhpdGVRdWVyeSkudGFyZ2V0ID09PSAnc3RyaW5nJylcbiAgKTtcblxuICBpZiAoc3RhdGUucXVlcnlNb2RlbC50YXJnZXQudGFyZ2V0ICE9PSBvbGRUYXJnZXQgJiYgIXN0YXRlLnBhdXNlZCkge1xuICAgIHN0YXRlLnJlZnJlc2goKTtcbiAgfVxufVxuXG4vKipcbiAqIFdoZW4gbWV0cmljcyBhdXRvY29tcGxldGUgZmFpbHMgLSB0aGUgZXJyb3IgaXMgc2hvd24sIGJ1dCBvbmx5IG9uY2UgcGVyIHBhZ2Ugdmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTWV0cmljc0F1dG9Db21wbGV0ZUVycm9yKFxuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLFxuICBlcnJvcjogRXJyb3Jcbik6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSB7XG4gIGlmICghc3RhdGUubWV0cmljQXV0b0NvbXBsZXRlRXJyb3JTaG93bikge1xuICAgIHN0YXRlLm1ldHJpY0F1dG9Db21wbGV0ZUVycm9yU2hvd24gPSB0cnVlO1xuICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihgRmV0Y2hpbmcgbWV0cmljcyBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX0uYCkpKTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogV2hlbiB0YWdzIGF1dG9jb21wbGV0ZSBmYWlscyAtIHRoZSBlcnJvciBpcyBzaG93biwgYnV0IG9ubHkgb25jZSBwZXIgcGFnZSB2aWV3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUYWdzQXV0b0NvbXBsZXRlRXJyb3Ioc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSwgZXJyb3I6IEVycm9yKTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlIHtcbiAgaWYgKCFzdGF0ZS50YWdzQXV0b0NvbXBsZXRlRXJyb3JTaG93bikge1xuICAgIHN0YXRlLnRhZ3NBdXRvQ29tcGxldGVFcnJvclNob3duID0gdHJ1ZTtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oYEZldGNoaW5nIHRhZ3MgZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9LmApKSk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHsgZWFjaFJpZ2h0LCBtYXAsIHJlbW92ZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBtYXBTZWdtZW50c1RvU2VsZWN0YWJsZXMsIG1hcFN0cmluZ3NUb1NlbGVjdGFibGVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWxwZXJzJztcbmltcG9ydCB7IEdyYXBoaXRlU2VnbWVudCwgR3JhcGhpdGVUYWcsIEdyYXBoaXRlVGFnT3BlcmF0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7XG4gIFRBR19QUkVGSVgsXG4gIEdSQVBISVRFX1RBR19PUEVSQVRPUlMsXG4gIGhhbmRsZU1ldHJpY3NBdXRvQ29tcGxldGVFcnJvcixcbiAgaGFuZGxlVGFnc0F1dG9Db21wbGV0ZUVycm9yLFxufSBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlIH0gZnJvbSAnLi9zdG9yZSc7XG5cbi8qKlxuICogQWxsIGF1dG8tY29tcGxldGUgbGlzdHMgYXJlIHVwZGF0ZWQgd2hpbGUgdHlwaW5nLiBUbyBhdm9pZCBwZXJmb3JtYW5jZSBpc3N1ZXMgd2UgZG8gbm90IHJlbmRlciBtb3JlXG4gKiB0aGFuIE1BWF9TVUdHRVNUSU9OUyBsaW1pdHMgaW4gYSBzaW5nbGUgZHJvcGRvd24uXG4gKlxuICogTUFYX1NVR0dFU1RJT05TIGlzIHBlciBtZXRyaWNzIGFuZCB0YWdzIHNlcGFyYXRlbHkuIE9uIHRoZSB2ZXJ5IGZpcnN0IGRyb3Bkb3duIHdoZXJlIG1ldHJpY3MgYW5kIHRhZ3MgYXJlXG4gKiBjb21iaW5lZCB0b2dldGhlciBtZWFuaW5nIGl0IG1heSBlbmQgdXAgd2l0aCBtYXggb2YgMiAqIE1BWF9TVUdHRVNUSU9OUyBpdGVtcyBpbiB0b3RhbC5cbiAqL1xuY29uc3QgTUFYX1NVR0dFU1RJT05TID0gNTAwMDtcblxuLyoqXG4gKiBQcm92aWRlcnMgYXJlIGhvb2tzIGZvciB2aWV3cyB0byBwcm92aWRlIHRlbXBvcmFsIGRhdGEgZm9yIGF1dG9jb21wbGV0ZS4gVGhleSBkb24ndCBtb2RpZnkgdGhlIHN0YXRlLlxuICovXG5cbi8qKlxuICogUmV0dXJuIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbnMgZm9yIGEgc2VnbWVudCB3aXRoIGdpdmVuIGluZGV4XG4gKlxuICogSXQgbWF5IGJlOlxuICogLSBtaXhlZCBsaXN0IG9mIG1ldHJpY3MgYW5kIHRhZ3MgKG9ubHkgd2hlbiBub3RoaW5nIHdhcyBzZWxlY3RlZClcbiAqIC0gbGlzdCBvZiBtZXRyaWMgbmFtZXMgKGlmIGEgbWV0cmljIG5hbWUgd2FzIHNlbGVjdGVkIGZvciB0aGlzIHNlZ21lbnQpXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEFsdFNlZ21lbnRzKFxuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLFxuICBpbmRleDogbnVtYmVyLFxuICBwcmVmaXg6IHN0cmluZ1xuKTogUHJvbWlzZTxHcmFwaGl0ZVNlZ21lbnRbXT4ge1xuICBsZXQgcXVlcnkgPSBwcmVmaXgubGVuZ3RoID4gMCA/ICcqJyArIHByZWZpeCArICcqJyA6ICcqJztcbiAgaWYgKGluZGV4ID4gMCkge1xuICAgIHF1ZXJ5ID0gc3RhdGUucXVlcnlNb2RlbC5nZXRTZWdtZW50UGF0aFVwVG8oaW5kZXgpICsgJy4nICsgcXVlcnk7XG4gIH1cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICByYW5nZTogc3RhdGUucmFuZ2UsXG4gICAgcmVxdWVzdElkOiAnZ2V0LWFsdC1zZWdtZW50cycsXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzZWdtZW50cyA9IGF3YWl0IHN0YXRlLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHF1ZXJ5LCBvcHRpb25zKTtcbiAgICBjb25zdCBhbHRTZWdtZW50czogR3JhcGhpdGVTZWdtZW50W10gPSBtYXAoc2VnbWVudHMsIChzZWdtZW50KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogc2VnbWVudC50ZXh0LFxuICAgICAgICBleHBhbmRhYmxlOiBzZWdtZW50LmV4cGFuZGFibGUsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKGluZGV4ID4gMCAmJiBhbHRTZWdtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBhbHRTZWdtZW50cztcbiAgICB9XG5cbiAgICAvLyBhZGQgcXVlcnkgcmVmZXJlbmNlc1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgZWFjaFJpZ2h0KHN0YXRlLnF1ZXJpZXMsICh0YXJnZXQpID0+IHtcbiAgICAgICAgaWYgKHRhcmdldC5yZWZJZCA9PT0gc3RhdGUucXVlcnlNb2RlbC50YXJnZXQucmVmSWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhbHRTZWdtZW50cy51bnNoaWZ0KHtcbiAgICAgICAgICB0eXBlOiAnc2VyaWVzLXJlZicsXG4gICAgICAgICAgdmFsdWU6ICcjJyArIHRhcmdldC5yZWZJZCxcbiAgICAgICAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBhZGQgdGVtcGxhdGUgdmFyaWFibGVzXG4gICAgZWFjaFJpZ2h0KHN0YXRlLnRlbXBsYXRlU3J2LmdldFZhcmlhYmxlcygpLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGFsdFNlZ21lbnRzLnVuc2hpZnQoe1xuICAgICAgICB0eXBlOiAndGVtcGxhdGUnLFxuICAgICAgICB2YWx1ZTogJyQnICsgdmFyaWFibGUubmFtZSxcbiAgICAgICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkIHdpbGRjYXJkIG9wdGlvbiBhbmQgbGltaXQgbnVtYmVyIG9mIHN1Z2dlc3Rpb25zIChBUEkgZG9lc24ndCBzdXBwb3J0IGxpbWl0aW5nXG4gICAgLy8gaGVuY2Ugd2UgYXJlIGRvaW5nIGl0IGhlcmUpXG4gICAgYWx0U2VnbWVudHMudW5zaGlmdCh7IHZhbHVlOiAnKicsIGV4cGFuZGFibGU6IHRydWUgfSk7XG4gICAgYWx0U2VnbWVudHMuc3BsaWNlKE1BWF9TVUdHRVNUSU9OUyk7XG5cbiAgICBpZiAoc3RhdGUuc3VwcG9ydHNUYWdzICYmIGluZGV4ID09PSAwKSB7XG4gICAgICByZW1vdmVUYWdnZWRFbnRyeShhbHRTZWdtZW50cyk7XG4gICAgICByZXR1cm4gYXdhaXQgYWRkQWx0VGFnU2VnbWVudHMoc3RhdGUsIHByZWZpeCwgYWx0U2VnbWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYWx0U2VnbWVudHM7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGhhbmRsZU1ldHJpY3NBdXRvQ29tcGxldGVFcnJvcihzdGF0ZSwgZXJyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogR2V0IHRoZSBsaXN0IG9mIHNlZ21lbnRzIHdpdGggdGFncyBhbmQgbWV0cmljcy4gU3VnZ2VzdGlvbnMgYXJlIHJlZHVjZWQgaW4gZ2V0QWx0U2VnbWVudHMgYW5kIGFkZEFsdFRhZ1NlZ21lbnRzIHNvIGluIGNhc2VcbiAqIHdlIGhpdCBNQVhfU1VHR0VTVElPTlMgbGltaXQgdGhlcmUgYXJlIGFsd2F5cyBzb21lIHRhZ3MgYW5kIG1ldHJpY3Mgc2hvd24uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbHRTZWdtZW50c1NlbGVjdGFibGVzKFxuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLFxuICBpbmRleDogbnVtYmVyLFxuICBwcmVmaXg6IHN0cmluZ1xuKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8R3JhcGhpdGVTZWdtZW50Pj4+IHtcbiAgcmV0dXJuIG1hcFNlZ21lbnRzVG9TZWxlY3RhYmxlcyhhd2FpdCBnZXRBbHRTZWdtZW50cyhzdGF0ZSwgaW5kZXgsIHByZWZpeCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnT3BlcmF0b3JzU2VsZWN0YWJsZXMoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPEdyYXBoaXRlVGFnT3BlcmF0b3I+PiB7XG4gIHJldHVybiBtYXBTdHJpbmdzVG9TZWxlY3RhYmxlcyhHUkFQSElURV9UQUdfT1BFUkFUT1JTKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRhZ3MgYXMgZHJvcGRvd24gb3B0aW9uc1xuICovXG5hc3luYyBmdW5jdGlvbiBnZXRUYWdzKHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsIGluZGV4OiBudW1iZXIsIHRhZ1ByZWZpeDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRhZ0V4cHJlc3Npb25zID0gc3RhdGUucXVlcnlNb2RlbC5yZW5kZXJUYWdFeHByZXNzaW9ucyhpbmRleCk7XG4gICAgY29uc3QgdmFsdWVzID0gYXdhaXQgc3RhdGUuZGF0YXNvdXJjZS5nZXRUYWdzQXV0b0NvbXBsZXRlKHRhZ0V4cHJlc3Npb25zLCB0YWdQcmVmaXgsIHtcbiAgICAgIHJhbmdlOiBzdGF0ZS5yYW5nZSxcbiAgICAgIGxpbWl0OiBNQVhfU1VHR0VTVElPTlMsXG4gICAgfSk7XG5cbiAgICBjb25zdCBhbHRUYWdzID0gbWFwKHZhbHVlcywgJ3RleHQnKTtcbiAgICBhbHRUYWdzLnNwbGljZSgwLCAwLCBzdGF0ZS5yZW1vdmVUYWdWYWx1ZSk7XG4gICAgcmV0dXJuIGFsdFRhZ3M7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgaGFuZGxlVGFnc0F1dG9Db21wbGV0ZUVycm9yKHN0YXRlLCBlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRhZ3NTZWxlY3RhYmxlcyhcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSxcbiAgaW5kZXg6IG51bWJlcixcbiAgdGFnUHJlZml4OiBzdHJpbmdcbik6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PiB7XG4gIHJldHVybiBtYXBTdHJpbmdzVG9TZWxlY3RhYmxlcyhhd2FpdCBnZXRUYWdzKHN0YXRlLCBpbmRleCwgdGFnUHJlZml4KSk7XG59XG5cbi8qKlxuICogTGlzdCBvZiB0YWdzIHdoZW4gYSB0YWcgaXMgYWRkZWQuIGdldFRhZ3MgaXMgdXNlZCBmb3IgZWRpdGluZy5cbiAqIFdoZW4gYWRkaW5nIC0gc2VnbWVudCBpcyB1c2VkLiBXaGVuIGVkaXRpbmcgLSBkcm9wZG93biBpcyB1c2VkLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRUYWdzQXNTZWdtZW50cyhzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLCB0YWdQcmVmaXg6IHN0cmluZyk6IFByb21pc2U8R3JhcGhpdGVTZWdtZW50W10+IHtcbiAgbGV0IHRhZ3NBc1NlZ21lbnRzOiBHcmFwaGl0ZVNlZ21lbnRbXTtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWdFeHByZXNzaW9ucyA9IHN0YXRlLnF1ZXJ5TW9kZWwucmVuZGVyVGFnRXhwcmVzc2lvbnMoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBzdGF0ZS5kYXRhc291cmNlLmdldFRhZ3NBdXRvQ29tcGxldGUodGFnRXhwcmVzc2lvbnMsIHRhZ1ByZWZpeCwge1xuICAgICAgcmFuZ2U6IHN0YXRlLnJhbmdlLFxuICAgICAgbGltaXQ6IE1BWF9TVUdHRVNUSU9OUyxcbiAgICB9KTtcbiAgICB0YWdzQXNTZWdtZW50cyA9IG1hcCh2YWx1ZXMsICh2YWwpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWwudGV4dCxcbiAgICAgICAgdHlwZTogJ3RhZycsXG4gICAgICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGFnc0FzU2VnbWVudHMgPSBbXTtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGhhbmRsZVRhZ3NBdXRvQ29tcGxldGVFcnJvcihzdGF0ZSwgZXJyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFnc0FzU2VnbWVudHM7XG59XG5cbi8qKlxuICogR2V0IGxpc3Qgb2YgdGFncywgdXNlZCB3aGVuIGFkZGluZyBhZGRpdGlvbmFsIHRhZ3MgKGZpcnN0IHRhZyBpcyBzZWxlY3RlZCBmcm9tIGEgam9pbmVkIGxpc3Qgb2YgbWV0cmljcyBhbmQgdGFncylcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRhZ3NBc1NlZ21lbnRzU2VsZWN0YWJsZXMoXG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsXG4gIHRhZ1ByZWZpeDogc3RyaW5nXG4pOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxHcmFwaGl0ZVNlZ21lbnQ+Pj4ge1xuICByZXR1cm4gbWFwU2VnbWVudHNUb1NlbGVjdGFibGVzKGF3YWl0IGdldFRhZ3NBc1NlZ21lbnRzKHN0YXRlLCB0YWdQcmVmaXgpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VGFnVmFsdWVzKFxuICBzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlLFxuICB0YWc6IEdyYXBoaXRlVGFnLFxuICBpbmRleDogbnVtYmVyLFxuICB2YWx1ZVByZWZpeDogc3RyaW5nXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHRhZ0V4cHJlc3Npb25zID0gc3RhdGUucXVlcnlNb2RlbC5yZW5kZXJUYWdFeHByZXNzaW9ucyhpbmRleCk7XG4gIGNvbnN0IHRhZ0tleSA9IHRhZy5rZXk7XG4gIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHN0YXRlLmRhdGFzb3VyY2UuZ2V0VGFnVmFsdWVzQXV0b0NvbXBsZXRlKHRhZ0V4cHJlc3Npb25zLCB0YWdLZXksIHZhbHVlUHJlZml4LCB7XG4gICAgbGltaXQ6IE1BWF9TVUdHRVNUSU9OUyxcbiAgfSk7XG4gIGNvbnN0IGFsdFZhbHVlcyA9IG1hcCh2YWx1ZXMsICd0ZXh0Jyk7XG4gIC8vIEFkZCB0ZW1wbGF0ZSB2YXJpYWJsZXMgYXMgYWRkaXRpb25hbCB2YWx1ZXNcbiAgZWFjaFJpZ2h0KHN0YXRlLnRlbXBsYXRlU3J2LmdldFZhcmlhYmxlcygpLCAodmFyaWFibGUpID0+IHtcbiAgICBhbHRWYWx1ZXMucHVzaCgnJHsnICsgdmFyaWFibGUubmFtZSArICc6cmVnZXh9Jyk7XG4gIH0pO1xuXG4gIHJldHVybiBhbHRWYWx1ZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdWYWx1ZXNTZWxlY3RhYmxlcyhcbiAgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSxcbiAgdGFnOiBHcmFwaGl0ZVRhZyxcbiAgaW5kZXg6IG51bWJlcixcbiAgdmFsdWVQcmVmaXg6IHN0cmluZ1xuKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+IHtcbiAgcmV0dXJuIG1hcFN0cmluZ3NUb1NlbGVjdGFibGVzKGF3YWl0IGdldFRhZ1ZhbHVlcyhzdGF0ZSwgdGFnLCBpbmRleCwgdmFsdWVQcmVmaXgpKTtcbn1cblxuLyoqXG4gKiBBZGQgc2VnbWVudHMgd2l0aCB0YWdzIHByZWZpeGVkIHdpdGggXCJ0YWc6IFwiIHRvIGluY2x1ZGUgdGhlbSBpbiB0aGUgc2FtZSBsaXN0IGFzIG1ldHJpY3NcbiAqL1xuYXN5bmMgZnVuY3Rpb24gYWRkQWx0VGFnU2VnbWVudHMoXG4gIHN0YXRlOiBHcmFwaGl0ZVF1ZXJ5RWRpdG9yU3RhdGUsXG4gIHByZWZpeDogc3RyaW5nLFxuICBhbHRTZWdtZW50czogR3JhcGhpdGVTZWdtZW50W11cbik6IFByb21pc2U8R3JhcGhpdGVTZWdtZW50W10+IHtcbiAgbGV0IHRhZ1NlZ21lbnRzID0gYXdhaXQgZ2V0VGFnc0FzU2VnbWVudHMoc3RhdGUsIHByZWZpeCk7XG5cbiAgdGFnU2VnbWVudHMgPSBtYXAodGFnU2VnbWVudHMsIChzZWdtZW50KSA9PiB7XG4gICAgc2VnbWVudC52YWx1ZSA9IFRBR19QUkVGSVggKyBzZWdtZW50LnZhbHVlO1xuICAgIHJldHVybiBzZWdtZW50O1xuICB9KTtcblxuICByZXR1cm4gYWx0U2VnbWVudHMuY29uY2F0KC4uLnRhZ1NlZ21lbnRzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFnZ2VkRW50cnkoYWx0U2VnbWVudHM6IEdyYXBoaXRlU2VnbWVudFtdKSB7XG4gIHJlbW92ZShhbHRTZWdtZW50cywgKHMpID0+IHMudmFsdWUgPT09ICdfdGFnZ2VkJyk7XG59XG4iLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IEFjdGlvbiwgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IERhdGFRdWVyeSwgVGltZVJhbmdlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNydiB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcbmltcG9ydCB7IEdyYXBoaXRlRGF0YXNvdXJjZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgRnVuY0RlZnMgfSBmcm9tICcuLi9nZnVuYyc7XG5pbXBvcnQgR3JhcGhpdGVRdWVyeSwgeyBHcmFwaGl0ZVRhcmdldCB9IGZyb20gJy4uL2dyYXBoaXRlX3F1ZXJ5JztcbmltcG9ydCB7IEdyYXBoaXRlU2VnbWVudCwgR3JhcGhpdGVUYWdPcGVyYXRvciB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge1xuICBhZGRTZXJpZXNCeVRhZ0Z1bmMsXG4gIGJ1aWxkU2VnbWVudHMsXG4gIGNoZWNrT3RoZXJTZWdtZW50cyxcbiAgZW1wdHlTZWdtZW50cyxcbiAgaGFuZGxlVGFyZ2V0Q2hhbmdlZCxcbiAgcGFyc2VUYXJnZXQsXG4gIHBhdXNlLFxuICByZW1vdmVUYWdQcmVmaXgsXG4gIHNtYXJ0bHlIYW5kbGVOZXdBbGlhc0J5Tm9kZSxcbiAgc3BsaWNlU2VnbWVudHMsXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSA9IHtcbiAgLy8gZXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG4gIGRhdGFzb3VyY2U6IEdyYXBoaXRlRGF0YXNvdXJjZTtcbiAgdGFyZ2V0OiBHcmFwaGl0ZVRhcmdldDtcbiAgcmVmcmVzaDogKCkgPT4gdm9pZDtcbiAgcXVlcmllcz86IERhdGFRdWVyeVtdO1xuICB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnY7XG4gIHJhbmdlPzogVGltZVJhbmdlO1xuXG4gIC8vIGludGVybmFsXG4gIHN1cHBvcnRzVGFnczogYm9vbGVhbjtcbiAgcGF1c2VkOiBib29sZWFuO1xuICByZW1vdmVUYWdWYWx1ZTogc3RyaW5nO1xuICBmdW5jRGVmczogRnVuY0RlZnMgfCBudWxsO1xuICBzZWdtZW50czogR3JhcGhpdGVTZWdtZW50W107XG4gIHF1ZXJ5TW9kZWw6IEdyYXBoaXRlUXVlcnk7XG4gIGVycm9yOiBFcnJvciB8IG51bGw7XG4gIHRhZ3NBdXRvQ29tcGxldGVFcnJvclNob3duOiBib29sZWFuO1xuICBtZXRyaWNBdXRvQ29tcGxldGVFcnJvclNob3duOiBib29sZWFuO1xufTtcblxuY29uc3QgcmVkdWNlciA9IGFzeW5jIChhY3Rpb246IEFjdGlvbiwgc3RhdGU6IEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZSk6IFByb21pc2U8R3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlPiA9PiB7XG4gIHN0YXRlID0geyAuLi5zdGF0ZSB9O1xuXG4gIGlmIChhY3Rpb25zLmluaXQubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IGRlcHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBkZXBzLnRhcmdldC50YXJnZXQgPSBkZXBzLnRhcmdldC50YXJnZXQgfHwgJyc7XG5cbiAgICBhd2FpdCBkZXBzLmRhdGFzb3VyY2Uud2FpdEZvckZ1bmNEZWZzTG9hZGVkKCk7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgLi4uZGVwcyxcbiAgICAgIHF1ZXJ5TW9kZWw6IG5ldyBHcmFwaGl0ZVF1ZXJ5KGRlcHMuZGF0YXNvdXJjZSwgZGVwcy50YXJnZXQsIGdldFRlbXBsYXRlU3J2KCkpLFxuICAgICAgc3VwcG9ydHNUYWdzOiBkZXBzLmRhdGFzb3VyY2Uuc3VwcG9ydHNUYWdzLFxuICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgIHJlbW92ZVRhZ1ZhbHVlOiAnLS0gcmVtb3ZlIHRhZyAtLScsXG4gICAgICBmdW5jRGVmczogZGVwcy5kYXRhc291cmNlLmZ1bmNEZWZzLFxuICAgICAgcXVlcmllczogZGVwcy5xdWVyaWVzLFxuICAgIH07XG5cbiAgICBhd2FpdCBidWlsZFNlZ21lbnRzKHN0YXRlLCBmYWxzZSk7XG4gIH1cbiAgaWYgKGFjdGlvbnMudGltZVJhbmdlQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgc3RhdGUucmFuZ2UgPSBhY3Rpb24ucGF5bG9hZDtcbiAgfVxuICBpZiAoYWN0aW9ucy5xdWVyaWVzQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgc3RhdGUucXVlcmllcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICB9XG4gIGlmIChhY3Rpb25zLnF1ZXJ5Q2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgc3RhdGUudGFyZ2V0LnRhcmdldCA9IGFjdGlvbi5wYXlsb2FkLnRhcmdldCB8fCAnJztcbiAgICBhd2FpdCBwYXJzZVRhcmdldChzdGF0ZSk7XG4gICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gIH1cbiAgaWYgKGFjdGlvbnMuc2VnbWVudFZhbHVlQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgeyBzZWdtZW50OiBzZWdtZW50T3JTdHJpbmcsIGluZGV4OiBzZWdtZW50SW5kZXggfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgbGV0IHNlZ21lbnQ7XG4gICAgLy8gaXMgc2VnbWVudCB3YXMgY2hhbmdlZCB0byBhIHN0cmluZyAtIGNyZWF0ZSBhIG5ldyBzZWdtZW50XG4gICAgaWYgKHR5cGVvZiBzZWdtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWdtZW50ID0ge1xuICAgICAgICB2YWx1ZTogc2VnbWVudE9yU3RyaW5nLFxuICAgICAgICBleHBhbmRhYmxlOiB0cnVlLFxuICAgICAgICBmYWtlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlZ21lbnQgPSBzZWdtZW50T3JTdHJpbmcgYXMgR3JhcGhpdGVTZWdtZW50O1xuICAgIH1cblxuICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICBzdGF0ZS5zZWdtZW50c1tzZWdtZW50SW5kZXhdID0gc2VnbWVudDtcbiAgICBzdGF0ZS5xdWVyeU1vZGVsLnVwZGF0ZVNlZ21lbnRWYWx1ZShzZWdtZW50LCBzZWdtZW50SW5kZXgpO1xuXG4gICAgaWYgKHN0YXRlLnF1ZXJ5TW9kZWwuZnVuY3Rpb25zLmxlbmd0aCA+IDAgJiYgc3RhdGUucXVlcnlNb2RlbC5mdW5jdGlvbnNbMF0uZGVmLmZha2UpIHtcbiAgICAgIHN0YXRlLnF1ZXJ5TW9kZWwuZnVuY3Rpb25zID0gW107XG4gICAgfVxuXG4gICAgaWYgKHNlZ21lbnQudHlwZSA9PT0gJ3RhZycpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlbW92ZVRhZ1ByZWZpeChzZWdtZW50LnZhbHVlKTtcbiAgICAgIHBhdXNlKHN0YXRlKTtcbiAgICAgIGF3YWl0IGFkZFNlcmllc0J5VGFnRnVuYyhzdGF0ZSwgdGFnKTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICAvLyBpZiBuZXdseSBzZWxlY3RlZCBzZWdtZW50IGNhbiBiZSBleHBhbmRlZCAtPiBjaGVjayBpZiB0aGUgcGF0aCBpcyBjb3JyZWN0XG4gICAgaWYgKHNlZ21lbnQuZXhwYW5kYWJsZSkge1xuICAgICAgYXdhaXQgY2hlY2tPdGhlclNlZ21lbnRzKHN0YXRlLCBzZWdtZW50SW5kZXggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgbm90IGV4cGFuZGFibGUgLT4gcmVtb3ZlIGFsbCBvdGhlciBzZWdtZW50c1xuICAgICAgc3BsaWNlU2VnbWVudHMoc3RhdGUsIHNlZ21lbnRJbmRleCArIDEpO1xuICAgIH1cblxuICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICB9XG4gIGlmIChhY3Rpb25zLnRhZ0NoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IHsgdGFnLCBpbmRleDogdGFnSW5kZXggfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIHN0YXRlLnF1ZXJ5TW9kZWwudXBkYXRlVGFnKHRhZywgdGFnSW5kZXgpO1xuICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICAgIGlmIChzdGF0ZS5xdWVyeU1vZGVsLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBhd2FpdCBjaGVja090aGVyU2VnbWVudHMoc3RhdGUsIDApO1xuICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChhY3Rpb25zLmFkZE5ld1RhZy5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3Qgc2VnbWVudCA9IGFjdGlvbi5wYXlsb2FkLnNlZ21lbnQ7XG4gICAgY29uc3QgbmV3VGFnS2V5ID0gc2VnbWVudC52YWx1ZTtcbiAgICBjb25zdCBuZXdUYWcgPSB7IGtleTogbmV3VGFnS2V5LCBvcGVyYXRvcjogJz0nIGFzIEdyYXBoaXRlVGFnT3BlcmF0b3IsIHZhbHVlOiAnJyB9O1xuICAgIHN0YXRlLnF1ZXJ5TW9kZWwuYWRkVGFnKG5ld1RhZyk7XG4gICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gIH1cbiAgaWYgKGFjdGlvbnMudW5wYXVzZS5tYXRjaChhY3Rpb24pKSB7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgc3RhdGUucmVmcmVzaCgpO1xuICB9XG4gIGlmIChhY3Rpb25zLmFkZEZ1bmN0aW9uLm1hdGNoKGFjdGlvbikpIHtcbiAgICBjb25zdCBuZXdGdW5jID0gc3RhdGUuZGF0YXNvdXJjZS5jcmVhdGVGdW5jSW5zdGFuY2UoYWN0aW9uLnBheWxvYWQubmFtZSwge1xuICAgICAgd2l0aERlZmF1bHRQYXJhbXM6IHRydWUsXG4gICAgfSk7XG4gICAgbmV3RnVuYy5hZGRlZCA9IHRydWU7XG4gICAgc3RhdGUucXVlcnlNb2RlbC5hZGRGdW5jdGlvbihuZXdGdW5jKTtcbiAgICBzbWFydGx5SGFuZGxlTmV3QWxpYXNCeU5vZGUoc3RhdGUsIG5ld0Z1bmMpO1xuXG4gICAgaWYgKHN0YXRlLnNlZ21lbnRzLmxlbmd0aCA9PT0gMSAmJiBzdGF0ZS5zZWdtZW50c1swXS5mYWtlKSB7XG4gICAgICBlbXB0eVNlZ21lbnRzKHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoIW5ld0Z1bmMucGFyYW1zLmxlbmd0aCAmJiBuZXdGdW5jLmFkZGVkKSB7XG4gICAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAobmV3RnVuYy5kZWYubmFtZSA9PT0gJ3Nlcmllc0J5VGFnJykge1xuICAgICAgYXdhaXQgcGFyc2VUYXJnZXQoc3RhdGUpO1xuICAgIH1cbiAgfVxuICBpZiAoYWN0aW9ucy5yZW1vdmVGdW5jdGlvbi5tYXRjaChhY3Rpb24pKSB7XG4gICAgc3RhdGUucXVlcnlNb2RlbC5yZW1vdmVGdW5jdGlvbihhY3Rpb24ucGF5bG9hZC5mdW5jKTtcbiAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgfVxuICBpZiAoYWN0aW9ucy5tb3ZlRnVuY3Rpb24ubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IHsgZnVuYywgb2Zmc2V0IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBzdGF0ZS5xdWVyeU1vZGVsLm1vdmVGdW5jdGlvbihmdW5jLCBvZmZzZXQpO1xuICAgIGhhbmRsZVRhcmdldENoYW5nZWQoc3RhdGUpO1xuICB9XG4gIGlmIChhY3Rpb25zLnVwZGF0ZUZ1bmN0aW9uUGFyYW0ubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IHsgZnVuYywgaW5kZXgsIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBmdW5jLnVwZGF0ZVBhcmFtKHZhbHVlLCBpbmRleCk7XG4gICAgaGFuZGxlVGFyZ2V0Q2hhbmdlZChzdGF0ZSk7XG4gIH1cbiAgaWYgKGFjdGlvbnMudXBkYXRlUXVlcnkubWF0Y2goYWN0aW9uKSkge1xuICAgIHN0YXRlLnRhcmdldC50YXJnZXQgPSBhY3Rpb24ucGF5bG9hZC5xdWVyeTtcbiAgICBoYW5kbGVUYXJnZXRDaGFuZ2VkKHN0YXRlKTtcbiAgfVxuICBpZiAoYWN0aW9ucy5ydW5RdWVyeS5tYXRjaChhY3Rpb24pKSB7XG4gICAgc3RhdGUucmVmcmVzaCgpO1xuICB9XG4gIGlmIChhY3Rpb25zLnRvZ2dsZUVkaXRvck1vZGUubWF0Y2goYWN0aW9uKSkge1xuICAgIHN0YXRlLnRhcmdldC50ZXh0RWRpdG9yID0gIXN0YXRlLnRhcmdldC50ZXh0RWRpdG9yO1xuICAgIGF3YWl0IHBhcnNlVGFyZ2V0KHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiB7IC4uLnN0YXRlIH07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAob25DaGFuZ2U6IChzdGF0ZTogR3JhcGhpdGVRdWVyeUVkaXRvclN0YXRlKSA9PiB2b2lkKTogRGlzcGF0Y2g8QW55QWN0aW9uPiA9PiB7XG4gIGxldCBzdGF0ZSA9IHt9IGFzIEdyYXBoaXRlUXVlcnlFZGl0b3JTdGF0ZTtcblxuICBjb25zdCBkaXNwYXRjaCA9IGFzeW5jIChhY3Rpb246IEFueUFjdGlvbikgPT4ge1xuICAgIHN0YXRlID0gYXdhaXQgcmVkdWNlcihhY3Rpb24sIHN0YXRlKTtcbiAgICBvbkNoYW5nZShzdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGRpc3BhdGNoIGFzIERpc3BhdGNoPEFueUFjdGlvbj47XG59O1xuIiwiaW1wb3J0IHsgRGF0YVF1ZXJ5LCBEYXRhU291cmNlSnNvbkRhdGEsIFRpbWVSYW5nZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVNydiB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcblxuaW1wb3J0IHsgR3JhcGhpdGVEYXRhc291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBHcmFwaGl0ZVF1ZXJ5IGV4dGVuZHMgRGF0YVF1ZXJ5IHtcbiAgdGFyZ2V0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYXBoaXRlT3B0aW9ucyBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIGdyYXBoaXRlVmVyc2lvbjogc3RyaW5nO1xuICBncmFwaGl0ZVR5cGU6IEdyYXBoaXRlVHlwZTtcbiAgcm9sbHVwSW5kaWNhdG9yRW5hYmxlZD86IGJvb2xlYW47XG4gIGltcG9ydENvbmZpZ3VyYXRpb246IEdyYXBoaXRlUXVlcnlJbXBvcnRDb25maWd1cmF0aW9uO1xufVxuXG5leHBvcnQgZW51bSBHcmFwaGl0ZVR5cGUge1xuICBEZWZhdWx0ID0gJ2RlZmF1bHQnLFxuICBNZXRyaWN0YW5rID0gJ21ldHJpY3RhbmsnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldHJpY1RhbmtSZXF1ZXN0TWV0YSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRyaWNUYW5rU2VyaWVzTWV0YSB7XG4gICdzY2hlbWEtbmFtZSc6IHN0cmluZztcbiAgJ3NjaGVtYS1yZXRlbnRpb25zJzogc3RyaW5nOyAvL1wiMXM6MzVkOjIwbWluOjU6MTU0MjI3NDA4NSwxbWluOjM4ZDoyaDoxOnRydWUsMTBtaW46MTIwZDo2aDoxOnRydWUsMmg6Mnk6Nmg6MlwiLFxuICAnYXJjaGl2ZS1yZWFkJzogbnVtYmVyO1xuICAnYXJjaGl2ZS1pbnRlcnZhbCc6IG51bWJlcjtcbiAgJ2FnZ251bS1ub3JtJzogbnVtYmVyO1xuICAnY29uc29saWRhdG9yLW5vcm1mZXRjaCc6IHN0cmluZzsgLy9cIk1heGltdW1Db25zb2xpZGF0b3JcIixcbiAgJ2FnZ251bS1yYyc6IG51bWJlcjtcbiAgJ2NvbnNvbGlkYXRvci1yYyc6IHN0cmluZzsgLy9cIk1heGltdW1Db25zb2xpZGF0b3JcIixcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRyaWNUYW5rTWV0YSB7XG4gIHJlcXVlc3Q6IE1ldHJpY1RhbmtSZXF1ZXN0TWV0YTtcbiAgaW5mbzogTWV0cmljVGFua1Nlcmllc01ldGFbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmFwaGl0ZVBhcnNlckVycm9yIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBwb3M6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVRdWVyeUltcG9ydENvbmZpZ3VyYXRpb24gPSB7XG4gIGxva2k6IEdyYXBoaXRlVG9Mb2tpUXVlcnlJbXBvcnRDb25maWd1cmF0aW9uO1xufTtcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVUb0xva2lRdWVyeUltcG9ydENvbmZpZ3VyYXRpb24gPSB7XG4gIG1hcHBpbmdzOiBHcmFwaGl0ZUxva2lNYXBwaW5nW107XG59O1xuXG5leHBvcnQgdHlwZSBHcmFwaGl0ZUxva2lNYXBwaW5nID0ge1xuICBtYXRjaGVyczogR3JhcGhpdGVNZXRyaWNMb2tpTWF0Y2hlcltdO1xufTtcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVNZXRyaWNMb2tpTWF0Y2hlciA9IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWxOYW1lPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVTZWdtZW50ID0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICB0eXBlPzogJ3RhZycgfCAnbWV0cmljJyB8ICdzZXJpZXMtcmVmJyB8ICd0ZW1wbGF0ZSc7XG4gIGV4cGFuZGFibGU/OiBib29sZWFuO1xuICBmYWtlPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIEdyYXBoaXRlVGFnT3BlcmF0b3IgPSAnPScgfCAnIT0nIHwgJz1+JyB8ICchPX4nO1xuXG5leHBvcnQgdHlwZSBHcmFwaGl0ZVRhZyA9IHtcbiAga2V5OiBzdHJpbmc7XG4gIG9wZXJhdG9yOiBHcmFwaGl0ZVRhZ09wZXJhdG9yO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgR3JhcGhpdGVRdWVyeUVkaXRvckRlcGVuZGVuY2llcyA9IHtcbiAgdGFyZ2V0OiBhbnk7XG4gIGRhdGFzb3VyY2U6IEdyYXBoaXRlRGF0YXNvdXJjZTtcbiAgcmFuZ2U/OiBUaW1lUmFuZ2U7XG4gIHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydjtcbiAgcXVlcmllczogRGF0YVF1ZXJ5W107XG4gIC8vIHNjaGVkdWxlIG9uQ2hhbmdlL29uUnVuUXVlcnkgYWZ0ZXIgdGhlIHJlZHVjZXIgYWN0aW9ucyBmaW5pc2hlc1xuICByZWZyZXNoOiAoKSA9PiB2b2lkO1xufTtcbiIsImltcG9ydCB7IGxhc3QgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBHcmFwaGl0ZVBhcnNlckVycm9yIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogR3JhcGhpdGUtd2ViIGJlZm9yZSB2MS42IHJldHVybnMgSFRUUCA1MDAgd2l0aCBmdWxsIHN0YWNrIHRyYWNlcyBpbiBhbiBIVE1MIHBhZ2VcbiAqIHdoZW4gYSBxdWVyeSBmYWlscy4gSXQgcmVzdWx0cyBpbiBtYXNzaXZlIGVycm9yIGFsZXJ0cyB3aXRoIEhUTUwgdGFncyBpbiB0aGUgVUkuXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYWxsIEhUTUwgdGFncyBhbmQga2VlcHMgb25seSB0aGUgbGFzdCBsaW5lIGZyb20gdGhlIHN0YWNrXG4gKiB0cmFjZSB3aGljaCBzaG91bGQgYmUgdGhlIG1vc3QgbWVhbmluZ2Z1bC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUVycm9yKGVycm9yOiBhbnkpOiBhbnkge1xuICBpZiAoZXJyb3IgJiYgZXJyb3Iuc3RhdHVzID09PSA1MDAgJiYgZXJyb3IuZGF0YT8ubWVzc2FnZT8uc3RhcnRzV2l0aCgnPGJvZHknKSkge1xuICAgIC8vIFJlbW92ZSBhbGwgSFRNTCB0YWdzIGFuZCB0YWtlIHRoZSBsYXN0IGxpbmUgZnJvbSB0aGUgc3RhY2sgdHJhY2VcbiAgICBjb25zdCBuZXdNZXNzYWdlID0gbGFzdDxzdHJpbmc+KFxuICAgICAgZXJyb3IuZGF0YS5tZXNzYWdlXG4gICAgICAgIC5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KC9cXG4vKVxuICAgICkhLnJlcGxhY2UoL3U/JiNbXjtdKzsvZywgJycpO1xuICAgIGVycm9yLmRhdGEubWVzc2FnZSA9IGBHcmFwaGl0ZSBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGVycm9yIHdoaWxlIGhhbmRsaW5nIHlvdXIgcmVxdWVzdC4gJHtuZXdNZXNzYWdlfWA7XG4gIH1cbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNHcmFwaGl0ZVBhcnNlckVycm9yKGU6IHVua25vd24pOiBlIGlzIEdyYXBoaXRlUGFyc2VyRXJyb3Ige1xuICByZXR1cm4gdHlwZW9mIGUgPT09ICdvYmplY3QnICYmIGUgIT09IG51bGwgJiYgJ21lc3NhZ2UnIGluIGUgJiYgJ3BvcycgaW4gZTtcbn1cbiIsImltcG9ydCB7IGxhc3QgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgR1JBUEhJVEVfVkVSU0lPTlMgPSBbJzAuOScsICcxLjAnLCAnMS4xJ107XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0dSQVBISVRFX1ZFUlNJT04gPSBsYXN0KEdSQVBISVRFX1ZFUlNJT05TKSE7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHN0YXRlKSB7XG4gICAgdmFyIHJlZiA9IHVzZVJlZigpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gc3RhdGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuIl0sIm5hbWVzIjpbImlzTnVtYmVyIiwidmVyc2lvblBhdHRlcm4iLCJTZW1WZXJzaW9uIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwibWFqb3IiLCJtaW5vciIsInBhdGNoIiwibWV0YSIsIm1hdGNoIiwiZXhlYyIsIk51bWJlciIsImlzR3RPckVxIiwiY29tcGFyZWQiLCJpIiwiY29tcGFyYWJsZSIsImxlbmd0aCIsImlzVmFsaWQiLCJpc1ZlcnNpb25HdE9yRXEiLCJhIiwiYiIsImFTZW12ZXIiLCJjc3MiLCJjeCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQnV0dG9uIiwiU2VnbWVudCIsInVzZVN0eWxlczIiLCJhY3Rpb25zIiwidXNlRGlzcGF0Y2giLCJtYXBGdW5jRGVmc1RvU2VsZWN0YWJsZXMiLCJBZGRHcmFwaGl0ZUZ1bmN0aW9uIiwiZnVuY0RlZnMiLCJkaXNwYXRjaCIsInZhbHVlIiwic2V0VmFsdWUiLCJ1bmRlZmluZWQiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJvcHRpb25zIiwiYWRkRnVuY3Rpb24iLCJuYW1lIiwiYnV0dG9uIiwidGhlbWUiLCJzcGFjaW5nIiwiSWNvbiIsIlRvb2x0aXAiLCJGdW5jdGlvbkVkaXRvckNvbnRyb2xzIiwiaWNvbiIsImxhYmVsIiwiZm9udFdlaWdodCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFNpemUiLCJib2R5U21hbGwiLCJjdXJzb3IiLCJkaXNwbGF5IiwiRnVuY3Rpb25FZGl0b3IiLCJvbk1vdmVMZWZ0Iiwib25Nb3ZlUmlnaHQiLCJmdW5jIiwicHJvcHMiLCJyZW5kZXJDb250ZW50IiwidXBkYXRlUG9wcGVyUG9zaXRpb24iLCJkZWYiLCJ1bmtub3duIiwiVG9vbHRpcENvbnRlbnQiLCJtZW1vIiwiZGlzcGxheU5hbWUiLCJTdXNwZW5zZSIsIkZ1bmN0aW9uRGVzY3JpcHRpb24iLCJsYXp5IiwiZGVmYXVsdCIsInJzdDJodG1sIiwiX19odG1sIiwiZGVzY3JpcHRpb24iLCJGdW5jdGlvbkhlbHBCdXR0b24iLCJ0b29sdGlwIiwid2luZG93Iiwib3BlbiIsIm9uUmVtb3ZlIiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsIlNlZ21lbnRJbnB1dCIsIkZ1bmN0aW9uUGFyYW1FZGl0b3IiLCJlZGl0YWJsZVBhcmFtIiwib25DaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwiYXV0b2ZvY3VzIiwic2VnbWVudCIsImlucHV0IiwidG9TdHJpbmciLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwibWFyZ2luVG9wIiwicGFkZGluZ0xlZnQiLCJtaW5XaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJTZWdtZW50U2VjdGlvbiIsIkdyYXBoaXRlRnVuY3Rpb25FZGl0b3IiLCJGdW5jdGlvbnNTZWN0aW9uIiwiZnVuY3Rpb25zIiwibWFwIiwiaW5kZXgiLCJoaWRkZW4iLCJIb3Jpem9udGFsR3JvdXAiLCJJbmxpbmVMYWJlbCIsIm1hcEZ1bmNJbnN0YW5jZVRvUGFyYW1zIiwibW91c2VPdmVyIiwic2V0SXNNb3VzZU92ZXIiLCJleHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJwYXJhbXMiLCJmaWx0ZXIiLCJwIiwib3B0aW9uYWwiLCJhZGRlZCIsImNvbnRhaW5lciIsImVycm9yIiwibW92ZUZ1bmN0aW9uIiwib2Zmc2V0IiwicmVtb3ZlRnVuY3Rpb24iLCJ1cGRhdGVGdW5jdGlvblBhcmFtIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsInNlY29uZGFyeSIsImJvcmRlclJhZGl1cyIsInNoYXBlIiwibWFyZ2luUmlnaHQiLCJ2MSIsImZvcm1JbnB1dEhlaWdodCIsIm1haW4iLCJHcmFwaGl0ZVF1ZXJ5RWRpdG9yQ29udGV4dCIsInVzZUdyYXBoaXRlU3RhdGUiLCJHcmFwaGl0ZVRleHRFZGl0b3IiLCJTZXJpZXNTZWN0aW9uIiwiR3JhcGhpdGVRdWVyeUVkaXRvciIsImRhdGFzb3VyY2UiLCJvblJ1blF1ZXJ5IiwicXVlcnkiLCJyYW5nZSIsInF1ZXJpZXMiLCJHcmFwaGl0ZVF1ZXJ5RWRpdG9yQ29udGVudCIsInN0YXRlIiwidmlzdWFsRWRpdG9yIiwidGFyZ2V0IiwidGV4dEVkaXRvciIsInF1ZXJ5TW9kZWwiLCJ0b2dnbGVCdXR0b24iLCJ0b2dnbGVFZGl0b3JNb2RlIiwidXNlQ2FsbGJhY2siLCJRdWVyeUZpZWxkIiwicmF3UXVlcnkiLCJ1cGRhdGVRdWVyeSIsInJ1blF1ZXJ5IiwiZGVib3VuY2UiLCJTZWdtZW50QXN5bmMiLCJnZXRBbHRTZWdtZW50c1NlbGVjdGFibGVzIiwiTWV0cmljU2VnbWVudCIsIm1ldHJpY0luZGV4IiwibG9hZE9wdGlvbnMiLCJkZWJvdW5jZWRMb2FkT3B0aW9ucyIsImxlYWRpbmciLCJvblNlZ21lbnRDaGFuZ2VkIiwic2VsZWN0YWJsZVZhbHVlIiwic2VnbWVudFZhbHVlQ2hhbmdlZCIsIm9uU2VnbWVudENoYW5nZWREZWJvdW5jZWQiLCJQdXJlQ29tcG9uZW50IiwicmFuZ2VVdGlsIiwic3R5bGVzRmFjdG9yeSIsImNvbmZpZyIsInBhcnNlU2NoZW1hUmV0ZW50aW9ucyIsImdldFJvbGx1cE5vdGljZSIsImdldFJ1bnRpbWVDb25zb2xpZGF0aW9uTm90aWNlIiwiTWV0cmljVGFua01ldGFJbnNwZWN0b3IiLCJyZW5kZXJNZXRhIiwia2V5IiwiYnVja2V0cyIsInJvbGx1cE5vdGljZSIsInJ1bnRpbWVOb3RpY2UiLCJub3JtRnVuYyIsInJlcGxhY2UiLCJ0b3RhbFNlY29uZHMiLCJyZWR1Y2UiLCJhY2MiLCJidWNrZXQiLCJyZXRlbnRpb24iLCJpbnRlcnZhbFRvU2Vjb25kcyIsIm1ldGFJdGVtIiwibWV0YUl0ZW1IZWFkZXIiLCJjb3VudCIsIm1ldGFJdGVtQm9keSIsInN0ZXAiLCJzdGVwSGVhZGluZyIsInN0ZXBEZXNjcmlwdGlvbiIsInRleHQiLCJidWNrZXRMZW5ndGgiLCJsZW5ndGhQZXJjZW50IiwiaXNBY3RpdmUiLCJidWNrZXRJbnRlcnZhbCIsImludGVydmFsIiwiYnVja2V0UmV0ZW50aW9uIiwiYnVja2V0UmV0ZW50aW9uQWN0aXZlIiwiZmxleEdyb3ciLCJyZW5kZXIiLCJkYXRhIiwic2VyaWVzTWV0YXMiLCJzZXJpZXMiLCJjdXN0b20iLCJzZXJpZXNNZXRhTGlzdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJPYmplY3QiLCJrZXlzIiwiYm9yZGVyQ29sb3IiLCJpc0RhcmsiLCJwYWxldHRlIiwiZ3JheTI1IiwiZ3JheTg1IiwiZGFyazEiLCJ3aGl0ZSIsImhlYWRlckJnIiwiZ3JheTE1IiwibWQiLCJ4cyIsInNpemUiLCJzbSIsInRleHRXZWFrIiwibGciLCJib3JkZXIiLCJyYWRpdXMiLCJibHVlODUiLCJibHVlOTUiLCJncmVlbkJhc2UiLCJncmVlblNoYWRlIiwiTWV0cmljc1NlY3Rpb24iLCJzZWdtZW50cyIsIlBsYXlCdXR0b24iLCJvbkNsaWNrIiwidW5wYXVzZSIsIlRhZ3NTZWN0aW9uIiwic2VjdGlvbkNvbnRlbnQiLCJzZXJpZXNCeVRhZ1VzZWQiLCJ0YWdzIiwiZ2V0VGFnT3BlcmF0b3JzU2VsZWN0YWJsZXMiLCJnZXRUYWdzU2VsZWN0YWJsZXMiLCJnZXRUYWdWYWx1ZXNTZWxlY3RhYmxlcyIsIlRhZ0VkaXRvciIsInRhZyIsInRhZ0luZGV4IiwiZ2V0VGFnc09wdGlvbnMiLCJpbnB1dFZhbHVlIiwiZGVib3VuY2VkR2V0VGFnc09wdGlvbnMiLCJnZXRUYWdWYWx1ZU9wdGlvbnMiLCJkZWJvdW5jZWRHZXRUYWdWYWx1ZU9wdGlvbnMiLCJ0YWdDaGFuZ2VkIiwib3BlcmF0b3IiLCJnZXRUYWdzQXNTZWdtZW50c1NlbGVjdGFibGVzIiwiZ2V0VGFnc0FzU2VnbWVudHNPcHRpb25zIiwiZGVib3VuY2VkR2V0VGFnc0FzU2VnbWVudHMiLCJhZGROZXdUYWciLCJwYXVzZWQiLCJmb3JFYWNoIiwic29ydEJ5IiwibWFwU3RyaW5nc1RvU2VsZWN0YWJsZXMiLCJ2YWx1ZXMiLCJtYXBTZWdtZW50c1RvU2VsZWN0YWJsZXMiLCJjYXRlZ29yaWVzIiwiZnVuY0RlZiIsImNhdGVnb3J5IiwicHVzaCIsImNyZWF0ZUVkaXRhYmxlUGFyYW0iLCJwYXJhbURlZiIsImFkZGl0aW9uYWwiLCJtdWx0aXBsZSIsIm9wdGlvbiIsInVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbiIsIm9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0Iiwib25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb25DaGVja2VkIiwiQWxlcnQiLCJEYXRhU291cmNlSHR0cFNldHRpbmdzIiwiSW5saW5lRm9ybUxhYmVsIiwiTGVnYWN5Rm9ybXMiLCJzdG9yZSIsIkdyYXBoaXRlVHlwZSIsIkRFRkFVTFRfR1JBUEhJVEVfVkVSU0lPTiIsIkdSQVBISVRFX1ZFUlNJT05TIiwiTWFwcGluZ3NDb25maWd1cmF0aW9uIiwiZnJvbVN0cmluZyIsIlNlbGVjdCIsIlN3aXRjaCIsIlNIT1dfTUFQUElOR1NfSEVMUF9LRVkiLCJncmFwaGl0ZVZlcnNpb25zIiwiZ3JhcGhpdGVUeXBlcyIsImVudHJpZXMiLCJDb25maWdFZGl0b3IiLCJzaG93TWFwcGluZ3NIZWxwIiwiZ2V0T2JqZWN0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjdXJyZW50R3JhcGhpdGVWZXJzaW9uIiwib25PcHRpb25zQ2hhbmdlIiwiY3VycmVudFZlcnNpb24iLCJmaW5kIiwiaXRlbSIsImFjY2VzcyIsInJlbmRlclR5cGVIZWxwIiwidHlwZSIsImpzb25EYXRhIiwiZ3JhcGhpdGVUeXBlIiwiTWV0cmljdGFuayIsInJvbGx1cEluZGljYXRvckVuYWJsZWQiLCJpbXBvcnRDb25maWd1cmF0aW9uIiwibG9raSIsIm1hcHBpbmdzIiwic2V0U3RhdGUiLCJzZXRPYmplY3QiLCJncmFwaGl0ZVZlcnNpb24iLCJJbmxpbmVGaWVsZCIsIklubGluZUZpZWxkUm93IiwiSW5wdXQiLCJNYXBwaW5nc0hlbHAiLCJzZXRNYXBwaW5ncyIsInNob3dIZWxwIiwib25SZXN0b3JlSGVscCIsIm9uRGlzbWlzcyIsIm1hcHBpbmciLCJjaGFuZ2VFdmVudCIsIm5ld01hcHBpbmdzIiwiY29uY2F0IiwiXyIsInNwbGljZSIsIm1hdGNoZXJzIiwic3BsaXQiLCJtZXRyaWNOb2RlIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwibGFiZWxOYW1lIiwic2xpY2UiLCJtYXRjaGVyIiwiam9pbiIsImVhY2giLCJpbmRleE9mIiwiaXNBcnJheSIsImlzU3RyaW5nIiwiX21hcCIsImxhc3RWYWx1ZUZyb20iLCJvZiIsInBpcGUiLCJ0aHJvd0Vycm9yIiwiY2F0Y2hFcnJvciIsIkRhdGFTb3VyY2VBcGkiLCJkYXRlTWF0aCIsIkFic3RyYWN0TGFiZWxPcGVyYXRvciIsInRvRGF0YUZyYW1lIiwiZ2V0QmFja2VuZFNydiIsImdldFRlbXBsYXRlU3J2IiwiZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIiwiZ2Z1bmMiLCJHcmFwaGl0ZVF1ZXJ5TW9kZWwiLCJyZWR1Y2VFcnJvciIsIkdSQVBISVRFX1RBR19DT01QQVJBVE9SUyIsIkVxdWFsIiwiTm90RXF1YWwiLCJFcXVhbFJlZ0V4IiwiTm90RXF1YWxSZWdFeCIsImNvbnZlcnRHbG9iVG9SZWdFeCIsImluY2x1ZGVzIiwiR3JhcGhpdGVEYXRhc291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInRlbXBsYXRlU3J2IiwicmVzdWx0IiwibWVzc2FnZSIsInMiLCJ0aXRsZSIsInkiLCJkYXRhcG9pbnRzIiwiZnJhbWUiLCJyZXF1ZXN0TWV0YUxpc3QiLCJub3RpY2VzIiwic3RhdHMiLCJnZXRSZXF1ZXN0U3RhdHMiLCJiYXNpY0F1dGgiLCJ1cmwiLCJtZXRyaWNNYXBwaW5ncyIsImlzTWV0cmljVGFuayIsInN1cHBvcnRzVGFncyIsImNhY2hlVGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImZ1bmNEZWZzUHJvbWlzZSIsIl9zZXJpZXNSZWZMZXR0ZXJzIiwiZ2V0UXVlcnlPcHRpb25zSW5mbyIsIm1heERhdGFQb2ludHMiLCJsaW5rcyIsImdldEltcG9ydFF1ZXJ5Q29uZmlndXJhdGlvbiIsImV4cG9ydFRvQWJzdHJhY3RRdWVyaWVzIiwiZXhwb3J0VG9BYnN0cmFjdFF1ZXJ5IiwiZ3JhcGhpdGVRdWVyeSIsInBhcnNlVGFyZ2V0IiwibGFiZWxzIiwidGFyZ2V0Tm9kZXMiLCJldmVyeSIsImNvbnZlcnRlZCIsInJlZklkIiwibGFiZWxNYXRjaGVycyIsImdyYXBoT3B0aW9ucyIsImZyb20iLCJ0cmFuc2xhdGVUaW1lIiwicmF3IiwidGltZXpvbmUiLCJ1bnRpbCIsInRvIiwidGFyZ2V0cyIsImZvcm1hdCIsImJ1aWxkR3JhcGhpdGVQYXJhbXMiLCJzY29wZWRWYXJzIiwiaHR0cE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWRkVHJhY2luZ0hlYWRlcnMiLCJwYW5lbElkIiwicmVxdWVzdElkIiwiZG9HcmFwaGl0ZVJlcXVlc3QiLCJjb252ZXJ0UmVzcG9uc2VUb0RhdGFGcmFtZXMiLCJwcm94eU1vZGUiLCJkYXNoYm9hcmRJZCIsInVuaXQiLCJwYXJzZVRhZ3MiLCJ0YWdTdHJpbmciLCJpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyIsImV4cGFuZGVkUXVlcmllcyIsImV4cGFuZGVkUXVlcnkiLCJnZXRSZWYiLCJhbm5vdGF0aW9uUXVlcnkiLCJhbm5vdGF0aW9uIiwibGlzdCIsInRpbWUiLCJmaWVsZHMiLCJnZXQiLCJldmVudHMiLCJ0aGVuIiwicmVzdWx0cyIsImNvbnNvbGUiLCJlIiwid2hlbiIsIndoYXQiLCJlcnIiLCJQcm9taXNlIiwicmVqZWN0IiwidGFyZ2V0Q29udGFpbnNUZW1wbGF0ZSIsImNvbnRhaW5zVGVtcGxhdGUiLCJkYXRlIiwicm91bmRVcCIsInN1YnN0cmluZyIsInBhcnNlIiwiYWRkIiwic3VidHJhY3QiLCJ1bml4IiwibWV0cmljRmluZFF1ZXJ5Iiwib3B0aW9uYWxPcHRpb25zIiwiaW50ZXJwb2xhdGVkUXVlcnkiLCJ3aWxkY2FyZENoYXIiLCJhbGxQYXJhbXMiLCJleHByZXNzaW9ucyIsImxpbWl0IiwiZ2V0VGFnVmFsdWVzQXV0b0NvbXBsZXRlIiwiZ2V0VGFnc0F1dG9Db21wbGV0ZSIsInVzZUV4cGFuZCIsInJlcXVlc3RNZXRyaWNFeHBhbmQiLCJyZXF1ZXN0TWV0cmljRmluZCIsIm1ldHJpYyIsImV4cGFuZGFibGUiLCJnZXRUYWdzIiwiaWQiLCJnZXRUYWdWYWx1ZXMiLCJ0YWdQcmVmaXgiLCJleHByIiwiZXhwcmVzc2lvbiIsInRyaW0iLCJtYXBUb1RhZ3MiLCJ2YWx1ZVByZWZpeCIsImdldFZlcnNpb24iLCJzZW12ZXIiLCJjcmVhdGVGdW5jSW5zdGFuY2UiLCJnZXRGdW5jRGVmIiwid2FpdEZvckZ1bmNEZWZzTG9hZGVkIiwiZ2V0RnVuY0RlZnMiLCJzdXBwb3J0c0Z1bmN0aW9uSW5kZXgiLCJyZXNvbHZlIiwicmVzcG9uc2VUeXBlIiwiZml4ZWREYXRhIiwicGFyc2VGdW5jRGVmcyIsInRlc3REYXRhc291cmNlIiwicmFuZ2VSYXciLCJzdGF0dXMiLCJBdXRob3JpemF0aW9uIiwiaW5zcGVjdCIsImZldGNoIiwiZ3JhcGhpdGVPcHRpb25zIiwiY2xlYW5PcHRpb25zIiwidGFyZ2V0VmFsdWUiLCJyZWdleCIsImludGVydmFsRm9ybWF0Rml4UmVnZXgiLCJoYXNUYXJnZXRzIiwiZml4SW50ZXJ2YWxGb3JtYXQiLCJuZXN0ZWRTZXJpZXNSZWdleFJlcGxhY2VyIiwiZzEiLCJoaWRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYXNzaWduIiwibGFzdCIsImlzRmluaXRlIiwiYWRkRnVuY0RlZiIsImRlZmF1bHRQYXJhbXMiLCJzaG9ydE5hbWUiLCJvcHRpb25hbFNlcmllc1JlZkFyZ3MiLCJmYWtlIiwiaXNWZXJzaW9uUmVsYXRlZEZ1bmN0aW9uIiwib2JqIiwiRnVuY0luc3RhbmNlIiwid2l0aERlZmF1bHRQYXJhbXMiLCJ1cGRhdGVUZXh0IiwibWV0cmljRXhwIiwicmVwbGFjZVZhcmlhYmxlcyIsInN0ciIsInBhcmFtZXRlcnMiLCJwYXJhbVR5cGUiLCJ2YWx1ZUludGVycG9sYXRlZCIsInBvcCIsInVuc2hpZnQiLCJfaGFzTXVsdGlwbGVQYXJhbXNJblN0cmluZyIsInN0clZhbHVlIiwidXBkYXRlUGFyYW0iLCJwYXJ0VmFsIiwiaWR4IiwiZnVuY3MiLCJwYXJhbSIsInJhd0RlZnMiLCJmdW5jTmFtZSIsImdyb3VwIiwidGVzdCIsInJlcXVpcmVkIiwic2hpZnQiLCJyYXdQYXJhbSIsIkluZmluaXR5Iiwic3VnZ2VzdGlvbnMiLCJjb21wYWN0IiwiZmluZEluZGV4IiwiZmxhdHRlbiIsImtleUJ5Iiwid2l0aG91dCIsImFycmF5TW92ZSIsIlBhcnNlciIsIkdyYXBoaXRlUXVlcnkiLCJyZW1vdmVUYWdWYWx1ZSIsInBhcnNlciIsImFzdE5vZGUiLCJnZXRBc3QiLCJjaGVja090aGVyU2VnbWVudHNJbmRleCIsInBvcyIsInBhcnNlVGFyZ2V0UmVjdXJzaXZlIiwiRXJyb3IiLCJnZXRTZWdtZW50UGF0aFVwVG8iLCJhcnIiLCJpbm5lckZ1bmMiLCJzcGxpdFNlcmllc0J5VGFnUGFyYW1zIiwiZ2V0U2VyaWVzQnlUYWdGdW5jSW5kZXgiLCJhZGRGdW5jdGlvblBhcmFtZXRlciIsInVwZGF0ZVNlZ21lbnRWYWx1ZSIsImFkZFNlbGVjdE1ldHJpY1NlZ21lbnQiLCJuZXdGdW5jIiwidXBkYXRlTW9kZWxUYXJnZXQiLCJ3cmFwRnVuY3Rpb24iLCJtZXRyaWNQYXRoIiwidXBkYXRlUmVuZGVyZWRUYXJnZXQiLCJ0YXJnZXRzQnlSZWZJZCIsIm5lc3RlZFNlcmllc1JlZlJlZ2V4IiwidGFyZ2V0V2l0aE5lc3RlZFF1ZXJpZXMiLCJjb3VudFRhcmdldFJlZnMiLCJyZWZDb3VudCIsInQiLCJ1cGRhdGVkIiwidGFyZ2V0RnVsbCIsInRhZ1BhdHRlcm4iLCJtYXRjaGVzIiwiZ2V0U2VyaWVzQnlUYWdGdW5jIiwic2VyaWVzQnlUYWdGdW5jSW5kZXgiLCJhZGRUYWciLCJuZXdUYWdQYXJhbSIsInJlbmRlclRhZ1N0cmluZyIsInJlbW92ZVRhZyIsInVwZGF0ZVRhZyIsInJlbmRlclRhZ0V4cHJlc3Npb25zIiwiZXhjbHVkZUluZGV4IiwidGFnRXhwciIsImJpbmQiLCJ1bmljb2RlTGV0dGVyVGFibGUiLCJpZGVudGlmaWVyU3RhcnRUYWJsZSIsImlkZW50aWZpZXJQYXJ0VGFibGUiLCJMZXhlciIsImNoYXIiLCJwZWVrIiwiY2hhckF0Iiwic2tpcCIsInRva2VuaXplIiwidG9rZW4iLCJuZXh0Iiwic2NhblN0cmluZ0xpdGVyYWwiLCJzY2FuUHVuY3R1YXRvciIsInNjYW5OdW1lcmljTGl0ZXJhbCIsInNjYW5JZGVudGlmaWVyIiwic2NhblRlbXBsYXRlU2VxdWVuY2UiLCJpc1VuaWNvZGVMZXR0ZXIiLCJjb2RlIiwiaXNIZXhEaWdpdCIsInJlYWRVbmljb2RlRXNjYXBlU2VxdWVuY2UiLCJjaDEiLCJjaDIiLCJjaDMiLCJjaDQiLCJwYXJzZUludCIsImdldElkZW50aWZpZXJTdGFydCIsImNociIsImNoYXJDb2RlQXQiLCJnZXRJZGVudGlmaWVyUGFydCIsImJhZCIsImlzRGVjaW1hbERpZ2l0IiwiaXNPY3RhbERpZ2l0IiwiaXNJZGVudGlmaWVyU3RhcnQiLCJjaCIsImlzTWFsZm9ybWVkIiwiYmFzZSIsImlzUHVuY3R1YXRvciIsInF1b3RlIiwiaXNVbmNsb3NlZCIsImp1bXAiLCJ0b0ludGVnZXIiLCJ2YWwiLCJ0b0Jvb2xlYW5PclRpbWVzdGFtcCIsIm1ldGFMaXN0IiwiYXJjaGl2ZUluZGV4Iiwic2NoZW1hIiwiaW50ZXJ2YWxTdHJpbmciLCJzZXZlcml0eSIsInJ1bnRpbWVOciIsInNwZWMiLCJ2YWxzIiwiY2h1bmtzcGFuIiwibnVtY2h1bmtzIiwicmVhZHkiLCJEYXRhU291cmNlUGx1Z2luIiwiQW5ub3RhdGlvbnNRdWVyeUN0cmwiLCJwbHVnaW4iLCJzZXRRdWVyeUVkaXRvciIsInNldENvbmZpZ0VkaXRvciIsInNldE1ldGFkYXRhSW5zcGVjdG9yIiwic2V0QW5ub3RhdGlvblF1ZXJ5Q3RybCIsImlzR3JhcGhpdGVQYXJzZXJFcnJvciIsImxleGVyIiwidG9rZW5zIiwic3RhcnQiLCJmdW5jdGlvbkNhbGwiLCJtZXRyaWNFeHByZXNzaW9uIiwiY3VybHlCcmFjZVNlZ21lbnQiLCJjdXJseVNlZ21lbnQiLCJjb25zdW1lVG9rZW4iLCJlcnJvck1hcmsiLCJtZXRyaWNTZWdtZW50IiwiY3VybHkiLCJwYXJ0cyIsIm5vZGUiLCJmdW5jdGlvblBhcmFtZXRlcnMiLCJib29sRXhwcmVzc2lvbiIsIm51bWVyaWNMaXRlcmFsIiwic2VyaWVzUmVmRXhwcmVzc2lvbiIsInN0cmluZ0xpdGVyYWwiLCJwYXJzZUZsb2F0IiwiY3VycmVudFRva2VuIiwibWF0Y2hUb2tlbiIsInRva2VuMSIsInRva2VuMiIsImNyZWF0ZUFjdGlvbiIsImluaXQiLCJ0aW1lUmFuZ2VDaGFuZ2VkIiwicXVlcmllc0NoYW5nZWQiLCJxdWVyeUNoYW5nZWQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVByZXZpb3VzIiwiY3JlYXRlU3RvcmUiLCJEaXNwYXRjaENvbnRleHQiLCJHcmFwaGl0ZVN0YXRlQ29udGV4dCIsImNoaWxkcmVuIiwibmVlZHNSZWZyZXNoIiwic2V0TmVlZHNSZWZyZXNoIiwicHJldmlvdXNSYW5nZSIsInJlZnJlc2giLCJjbG9uZSIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwibm90aWZ5QXBwIiwiR1JBUEhJVEVfVEFHX09QRVJBVE9SUyIsIlRBR19QUkVGSVgiLCJidWlsZFNlZ21lbnRzIiwibW9kaWZ5TGFzdFNlZ21lbnQiLCJjaGVja090aGVyU2VnbWVudHMiLCJmcm9tSW5kZXgiLCJwYXRoIiwiaGFuZGxlTWV0cmljc0F1dG9Db21wbGV0ZUVycm9yIiwic3BsaWNlU2VnbWVudHMiLCJlbXB0eVNlZ21lbnRzIiwiYWRkU2VyaWVzQnlUYWdGdW5jIiwidGFnUGFyYW0iLCJoYW5kbGVUYXJnZXRDaGFuZ2VkIiwic21hcnRseUhhbmRsZU5ld0FsaWFzQnlOb2RlIiwicGF1c2UiLCJyZW1vdmVUYWdQcmVmaXgiLCJvbGRUYXJnZXQiLCJtZXRyaWNBdXRvQ29tcGxldGVFcnJvclNob3duIiwiaGFuZGxlVGFnc0F1dG9Db21wbGV0ZUVycm9yIiwidGFnc0F1dG9Db21wbGV0ZUVycm9yU2hvd24iLCJlYWNoUmlnaHQiLCJyZW1vdmUiLCJNQVhfU1VHR0VTVElPTlMiLCJnZXRBbHRTZWdtZW50cyIsInByZWZpeCIsImFsdFNlZ21lbnRzIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGUiLCJyZW1vdmVUYWdnZWRFbnRyeSIsImFkZEFsdFRhZ1NlZ21lbnRzIiwidGFnRXhwcmVzc2lvbnMiLCJhbHRUYWdzIiwiZ2V0VGFnc0FzU2VnbWVudHMiLCJ0YWdzQXNTZWdtZW50cyIsInRhZ0tleSIsImFsdFZhbHVlcyIsInRhZ1NlZ21lbnRzIiwicmVkdWNlciIsImFjdGlvbiIsImRlcHMiLCJwYXlsb2FkIiwic2VnbWVudE9yU3RyaW5nIiwic2VnbWVudEluZGV4IiwibmV3VGFnS2V5IiwibmV3VGFnIiwibmV3TWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=