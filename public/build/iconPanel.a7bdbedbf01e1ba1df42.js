"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["iconPanel"],{

/***/ "./public/app/features/canvas/element.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/app/features/canvas/elements/button.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonItem": () => (/* binding */ buttonItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dimensions/editors/TextDimensionEditor.tsx");
/* harmony import */ var app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/APIEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






class ButtonDisplay extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      data
    } = this.props;

    const onClick = () => {
      if (data !== null && data !== void 0 && data.api) {
        (0,app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_3__.callApi)(data.api);
      }
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      type: "submit",
      onClick: onClick,
      children: data === null || data === void 0 ? void 0 : data.text
    });
  }

}

const buttonItem = {
  id: 'button',
  name: 'Button',
  description: 'Button',
  display: ButtonDisplay,
  defaultSize: {
    width: 200,
    height: 50
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    var _cfg$api;

    const data = {
      text: cfg !== null && cfg !== void 0 && cfg.text ? ctx.getText(cfg.text).value() : '',
      api: (_cfg$api = cfg === null || cfg === void 0 ? void 0 : cfg.api) !== null && _cfg$api !== void 0 ? _cfg$api : undefined
    };
    return data;
  },
  // Heatmap overlay options
  registerOptionsUI: builder => {
    const category = ['Button'];
    builder.addCustomEditor({
      category,
      id: 'textSelector',
      path: 'config.text',
      name: 'Text',
      editor: app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_2__.TextDimensionEditor
    }).addCustomEditor({
      category,
      id: 'apiSelector',
      path: 'config.api',
      name: 'API',
      editor: app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_3__.APIEditor
    });
  }
};

/***/ }),

/***/ "./public/app/features/canvas/elements/droneFront.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "droneFrontItem": () => (/* binding */ droneFrontItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _g, _g2, _g3, _g4;








const DroneFrontDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const droneFrontTransformStyle = `rotate(${data !== null && data !== void 0 && data.rollAngle ? data.rollAngle : 0}deg)`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    className: styles.droneFront,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1300 290",
    style: {
      transform: droneFrontTransformStyle
    },
    children: [_g || (_g = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "arms",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "100",
        y2: "150"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "100",
        y2: "150"
      })]
    })), _g2 || (_g2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "body",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "none",
        d: " M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
        cx: "650",
        cy: "160",
        r: "40",
        fill: "none"
      })]
    })), _g3 || (_g3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "motors",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "
      })]
    })), _g4 || (_g4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "propellers",
      fill: "black",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 1000 60 L 1030 60 L 1030 20 Q 1041 30 1060 30 Q 1079 30 1300 10 L 1030 10 Q 1030 0 1020 0 C 1016 0 1014 0 1010 0 Q 1000 0 1000 10 L 730 10 Q 950 30 970 30 Q 990 30 1000 20 L 1000 60 Z "
      })]
    }))]
  });
};

const droneFrontItem = {
  id: 'droneFront',
  name: 'Drone Front',
  description: 'Drone front',
  display: DroneFrontDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    const data = {
      rollAngle: cfg !== null && cfg !== void 0 && cfg.rollAngle ? ctx.getScalar(cfg.rollAngle).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Drone Front'];
    builder.addCustomEditor({
      category,
      id: 'rollAngle',
      path: 'config.rollAngle',
      name: 'Roll Angle',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  droneFront: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    transition: transform 0.4s;
  `
});

/***/ }),

/***/ "./public/app/features/canvas/elements/droneSide.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "droneSideItem": () => (/* binding */ droneSideItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _g, _g2, _g3, _g4;








const DroneSideDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const droneSidePitchTransformStyle = `rotate(${data !== null && data !== void 0 && data.pitchAngle ? data.pitchAngle : 0}deg)`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    className: styles.droneSide,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 1300 290",
    style: {
      transform: droneSidePitchTransformStyle
    },
    children: [_g || (_g = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "arms",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "100",
        y2: "150"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "510",
        x2: "320",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "190",
        y2: "210"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
        x1: "790",
        x2: "980",
        y1: "100",
        y2: "150"
      })]
    })), _g2 || (_g2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("g", {
      className: "body",
      stroke: "black",
      strokeWidth: "28px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "none",
        d: " M 510 130 C 510 124 510 110 510 100 C 510 90 530 71 540 70 C 640 61 670 60 760 70 C 770 71 790 90 790 100 Q 790 120 790 130 L 790 130 Q 790 177 790 196 C 790 207 770 225 760 226 C 670 236 640 236 540 226 C 530 226 510 206 510 196 Q 510 177 510 130 Q 510 133 510 130 Z "
      })
    })), _g3 || (_g3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "motors",
      stroke: "black",
      strokeWidth: "28px",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 320 60 L 250 60 L 250 230 L 260 290 L 310 290 L 320 230 L 320 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "motor",
        fill: "none",
        d: " M 1050 60 L 980 60 L 980 230 L 990 290 L 1040 290 L 1050 230 L 1050 60 Z "
      })]
    })), _g4 || (_g4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "propellers",
      fill: "black",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 270 60 L 300 60 L 300 20 Q 311 30 330 30 Q 349 30 570 10 L 300 10 Q 300 0 290 0 C 286 0 284 0 280 0 Q 270 0 270 10 L 0 10 Q 220 30 240 30 Q 260 30 270 20 L 270 60 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: "prop",
        d: " M 1000 60 L 1030 60 L 1030 20 Q 1041 30 1060 30 Q 1079 30 1300 10 L 1030 10 Q 1030 0 1020 0 C 1016 0 1014 0 1010 0 Q 1000 0 1000 10 L 730 10 Q 950 30 970 30 Q 990 30 1000 20 L 1000 60 Z "
      })]
    }))]
  });
};

const droneSideItem = {
  id: 'droneSide',
  name: 'Drone Side',
  description: 'Drone Side',
  display: DroneSideDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    const data = {
      pitchAngle: cfg !== null && cfg !== void 0 && cfg.pitchAngle ? ctx.getScalar(cfg.pitchAngle).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Drone Side'];
    builder.addCustomEditor({
      category,
      id: 'pitchAngle',
      path: 'config.pitchAngle',
      name: 'Pitch Angle',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  droneSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    transition: transform 0.4s;
  `
});

/***/ }),

/***/ "./public/app/features/canvas/elements/droneTop.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "droneTopItem": () => (/* binding */ droneTopItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _path, _path2;








const DroneTopDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const fRightRotorAnimation = `spin ${data !== null && data !== void 0 && data.fRightRotorRPM ? 60 / Math.abs(data.fRightRotorRPM) : 0}s linear infinite`;
  const fLeftRotorAnimation = `spin ${data !== null && data !== void 0 && data.fLeftRotorRPM ? 60 / Math.abs(data.fLeftRotorRPM) : 0}s linear infinite`;
  const bRightRotorAnimation = `spin ${data !== null && data !== void 0 && data.bRightRotorRPM ? 60 / Math.abs(data.bRightRotorRPM) : 0}s linear infinite`;
  const bLeftRotorAnimation = `spin ${data !== null && data !== void 0 && data.bLeftRotorRPM ? 60 / Math.abs(data.bLeftRotorRPM) : 0}s linear infinite`;
  const droneTopTransformStyle = `rotate(${data !== null && data !== void 0 && data.yawAngle ? data.yawAngle : 0}deg)`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "-43 -43 640 640",
    xmlSpace: "preserve",
    style: {
      transform: droneTopTransformStyle
    },
    children: [_path || (_path = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      fillRule: "evenodd",
      d: " M 137.95 127.967 C 137.14 127.157 136.189 126.58 135.178 126.218 C 138.173 121.545 139.967 116.036 140.125 110.123 L 217.64 151.862 C 214.049 157.411 211.8 163.922 211.386 170.95 L 209.694 199.712 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 L 137.95 127.967 Z  M 134.268 426.981 C 130.211 421.314 124.328 417.045 117.482 415.041 L 201.999 330.523 L 201.385 340.955 C 200.67 353.107 202.829 364.914 207.563 375.673 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 L 134.268 426.981 Z  M 324.765 373.673 L 228.527 373.673 Q 215.374 358.611 216.361 341.835 L 226.361 171.832 C 226.825 163.94 231.012 157.096 237.146 152.957 L 316.146 152.957 C 322.28 157.096 326.466 163.94 326.931 171.832 L 336.931 341.835 Q 337.918 358.611 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 L 324.765 373.673 Z  M 435.81 415.041 C 428.964 417.045 423.081 421.314 419.024 426.981 L 345.727 375.673 C 350.461 364.914 352.62 353.107 351.905 340.955 L 351.291 330.523 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 L 435.81 415.041 Z  M 343.596 199.713 L 341.904 170.951 C 341.49 163.923 339.242 157.411 335.651 151.863 L 413.167 110.124 C 413.325 116.037 415.119 121.546 418.114 126.219 C 417.103 126.581 416.152 127.158 415.342 127.968 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 L 343.596 199.713 Z  M 444.646 92.771 C 453.744 92.771 461.146 100.172 461.146 109.271 C 461.146 118.369 453.744 125.771 444.646 125.771 C 435.548 125.771 428.146 118.369 428.146 109.271 C 428.146 100.172 435.548 92.771 444.646 92.771 L 444.646 92.771 L 444.646 92.771 L 444.646 92.771 Z  M 108.647 92.771 C 117.745 92.771 125.147 100.172 125.147 109.271 C 125.147 118.369 117.745 125.771 108.647 125.771 C 99.549 125.771 92.147 118.369 92.147 109.271 C 92.147 100.172 99.549 92.771 108.647 92.771 L 108.647 92.771 L 108.647 92.771 Z  M 108.647 461.771 C 99.549 461.771 92.147 454.369 92.147 445.271 C 92.147 436.172 99.549 428.771 108.647 428.771 C 117.745 428.771 125.147 436.172 125.147 445.271 C 125.147 454.369 117.745 461.771 108.647 461.771 L 108.647 461.771 Z  M 92.322 136.202 C 97.086 139.1 102.675 140.771 108.647 140.771 C 114.883 140.771 120.697 138.941 125.594 135.802 C 125.956 136.813 126.534 137.764 127.343 138.573 L 207.342 218.573 C 207.711 218.942 208.109 219.264 208.528 219.54 L 203.212 309.908 C 201.794 310.182 200.44 310.869 199.342 311.967 L 95.343 415.967 C 94.954 416.356 94.62 416.779 94.335 417.224 C 93.651 417.575 92.976 417.942 92.322 418.34 Q 84.615 424.182 81.716 428.946 C 78.817 433.71 77.147 439.299 77.147 445.271 C 77.147 462.64 91.278 476.771 108.647 476.771 C 114.619 476.771 120.208 475.1 124.972 472.202 C 129.736 469.304 132.678 466.36 135.577 461.596 C 138.476 456.832 140.147 451.243 140.147 445.271 C 140.147 443.943 140.055 442.637 139.895 441.352 L 214.997 388.78 C 217.05 391.677 336.242 391.678 338.295 388.78 L 413.398 441.352 C 413.238 442.637 413.146 443.943 413.146 445.271 C 413.146 451.243 414.817 456.832 417.715 461.596 C 420.613 466.36 423.557 469.304 428.321 472.202 C 433.085 475.1 438.674 476.771 444.646 476.771 C 462.015 476.771 476.146 462.64 476.146 445.271 C 476.146 439.299 474.475 433.71 471.577 428.946 C 468.679 424.182 459.642 417.575 458.958 417.224 C 458.672 416.779 458.339 416.356 457.95 415.967 L 353.95 311.967 C 352.852 310.869 351.498 310.182 350.08 309.908 L 344.764 219.54 C 345.183 219.264 345.581 218.942 345.95 218.573 L 425.95 138.573 C 426.76 137.763 427.337 136.812 427.699 135.802 C 432.596 138.941 438.409 140.771 444.646 140.771 C 450.618 140.771 456.207 139.1 460.971 136.202 C 465.735 133.304 468.679 130.36 471.577 125.596 C 474.475 120.832 476.146 115.243 476.146 109.271 C 476.146 91.903 462.015 77.772 444.646 77.772 C 438.674 77.772 433.085 79.442 428.321 82.34 L 416.215 91.446 L 324.765 140.688 C 318.402 136.324 310.718 133.771 302.473 133.771 L 250.819 133.771 C 242.574 133.771 234.89 136.324 228.527 140.688 L 137.078 91.446 L 124.972 82.34 C 120.208 79.442 114.619 77.772 108.647 77.772 C 91.278 77.772 77.147 91.903 77.147 109.271 C 77.147 115.243 78.818 120.832 81.716 125.595 C 84.614 130.358 87.558 133.304 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 L 92.322 136.202 Z  M 444.646 461.771 C 435.548 461.771 428.146 454.369 428.146 445.271 C 428.146 436.172 435.548 428.771 444.646 428.771 C 453.744 428.771 461.146 436.172 461.146 445.271 C 461.146 454.369 453.744 461.771 444.646 461.771 Z "
    })), _path2 || (_path2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      fillRule: "evenodd",
      d: " M 259.458 334.235 L 259.458 337.211 L 254.514 337.211 L 254.514 350.795 L 250.842 350.795 L 250.842 337.211 L 245.898 337.211 L 245.898 334.235 L 259.458 334.235 Z  M 266.226 347.939 L 272.586 347.939 L 272.754 350.627 L 272.754 350.627 Q 270.498 350.867 265.074 350.867 L 265.074 350.867 L 265.074 350.867 Q 263.418 350.867 262.434 349.967 L 262.434 349.967 L 262.434 349.967 Q 261.45 349.067 261.426 347.531 L 261.426 347.531 L 261.426 337.499 L 261.426 337.499 Q 261.45 335.963 262.434 335.063 L 262.434 335.063 L 262.434 335.063 Q 263.418 334.163 265.074 334.163 L 265.074 334.163 L 265.074 334.163 Q 270.498 334.163 272.754 334.403 L 272.754 334.403 L 272.586 337.115 L 266.226 337.115 L 266.226 337.115 Q 265.626 337.115 265.362 337.403 L 265.362 337.403 L 265.362 337.403 Q 265.098 337.691 265.098 338.339 L 265.098 338.339 L 265.098 340.859 L 271.698 340.859 L 271.698 343.499 L 265.098 343.499 L 265.098 346.691 L 265.098 346.691 Q 265.098 347.363 265.362 347.651 L 265.362 347.651 L 265.362 347.651 Q 265.626 347.939 266.226 347.939 L 266.226 347.939 Z  M 275.202 333.995 L 278.73 333.995 L 278.73 346.931 L 278.73 346.931 Q 278.73 348.131 280.074 348.131 L 280.074 348.131 L 281.034 348.131 L 281.442 350.603 L 281.442 350.603 Q 280.53 351.083 278.61 351.083 L 278.61 351.083 L 278.61 351.083 Q 277.026 351.083 276.114 350.231 L 276.114 350.231 L 276.114 350.231 Q 275.202 349.379 275.202 347.819 L 275.202 347.819 L 275.202 333.995 Z  M 283.05 333.995 L 286.578 333.995 L 286.578 346.931 L 286.578 346.931 Q 286.578 348.131 287.922 348.131 L 287.922 348.131 L 288.882 348.131 L 289.29 350.603 L 289.29 350.603 Q 288.378 351.083 286.458 351.083 L 286.458 351.083 L 286.458 351.083 Q 284.874 351.083 283.962 350.231 L 283.962 350.231 L 283.962 350.231 Q 283.05 349.379 283.05 347.819 L 283.05 347.819 L 283.05 333.995 Z  M 292.086 335.759 L 292.086 335.759 L 292.086 335.759 Q 293.634 333.923 297.618 333.923 L 297.618 333.923 L 297.618 333.923 Q 301.602 333.923 303.162 335.759 L 303.162 335.759 L 303.162 335.759 Q 304.722 337.595 304.722 342.515 L 304.722 342.515 L 304.722 342.515 Q 304.722 347.435 303.162 349.271 L 303.162 349.271 L 303.162 349.271 Q 301.602 351.107 297.618 351.107 L 297.618 351.107 L 297.618 351.107 Q 293.634 351.107 292.086 349.271 L 292.086 349.271 L 292.086 349.271 Q 290.538 347.435 290.538 342.515 L 290.538 342.515 L 290.538 342.515 Q 290.538 337.595 292.086 335.759 Z  M 300.174 338.051 L 300.174 338.051 L 300.174 338.051 Q 299.49 336.875 297.618 336.875 L 297.618 336.875 L 297.618 336.875 Q 295.746 336.875 295.062 338.051 L 295.062 338.051 L 295.062 338.051 Q 294.378 339.227 294.378 342.515 L 294.378 342.515 L 294.378 342.515 Q 294.378 345.803 295.062 346.979 L 295.062 346.979 L 295.062 346.979 Q 295.746 348.155 297.618 348.155 L 297.618 348.155 L 297.618 348.155 Q 299.49 348.155 300.174 346.979 L 300.174 346.979 L 300.174 346.979 Q 300.858 345.803 300.858 342.515 L 300.858 342.515 L 300.858 342.515 Q 300.858 339.227 300.174 338.051 Z "
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      className: "propeller-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCW}`,
        style: {
          animation: bRightRotorAnimation
        },
        d: " M 461.563 418.77 L 463.992 416.34 Q 465.495 407.116 466.461 400.395 C 467.426 393.675 469.363 388.087 474.731 383.284 Q 533.862 341.514 538.196 338.859 C 542.529 336.203 548.345 334.299 551.492 338.29 C 554.639 342.282 553.481 346.02 549.419 350.082 L 471.147 428.354 L 461.563 418.77 Z  M 427.729 471.772 L 425.299 474.202 Q 423.797 483.426 422.831 490.146 C 421.866 496.867 419.929 502.454 414.561 507.257 Q 355.43 549.028 351.096 551.683 C 346.763 554.338 340.947 556.243 337.8 552.251 C 334.653 548.26 335.811 544.522 339.873 540.46 L 418.145 462.187 L 427.729 471.772 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCCW}`,
        style: {
          animation: fRightRotorAnimation
        },
        d: " M 461.563 135.773 L 463.992 138.203 Q 465.495 147.426 466.461 154.147 C 467.426 160.868 469.363 166.455 474.731 171.258 Q 533.862 213.028 538.196 215.684 C 542.529 218.339 548.345 220.244 551.492 216.252 C 554.639 212.26 553.481 208.523 549.419 204.46 L 471.147 126.188 L 461.563 135.773 Z  M 427.729 82.77 L 425.299 80.34 Q 423.797 71.117 422.831 64.396 C 421.866 57.675 419.929 52.088 414.561 47.285 Q 355.43 5.515 351.096 2.859 C 346.763 0.204 340.947 -1.701 337.8 2.291 C 334.653 6.282 335.811 10.02 339.873 14.082 L 418.145 92.355 L 427.729 82.77 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCCW}`,
        style: {
          animation: bLeftRotorAnimation
        },
        d: " M 125.563 471.772 L 127.993 474.202 Q 129.496 483.426 130.461 490.146 C 131.427 496.867 133.363 502.454 138.731 507.257 Q 197.863 549.028 202.196 551.683 C 206.53 554.338 212.345 556.243 215.492 552.251 C 218.639 548.26 217.482 544.522 213.419 540.46 L 135.148 462.187 L 125.563 471.772 Z  M 91.73 418.77 L 89.3 416.34 Q 87.797 407.116 86.832 400.395 C 85.866 393.675 83.93 388.087 78.562 383.284 Q 19.431 341.514 15.097 338.859 C 10.763 336.203 4.948 334.299 1.801 338.29 C -1.346 342.282 -0.189 346.02 3.874 350.082 L 82.146 428.354 L 91.73 418.77 Z "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        className: `${styles.propeller} ${styles.propellerCW}`,
        style: {
          animation: fLeftRotorAnimation
        },
        d: " M 125.563 82.77 L 127.993 80.34 Q 129.496 71.117 130.461 64.396 C 131.427 57.675 133.363 52.088 138.731 47.285 Q 197.863 5.515 202.196 2.859 C 206.53 0.204 212.345 -1.701 215.492 2.291 C 218.639 6.282 217.482 10.02 213.419 14.083 L 135.147 92.355 L 125.563 82.77 Z  M 91.73 135.773 L 89.3 138.203 Q 87.797 147.426 86.832 154.147 C 85.866 160.868 83.93 166.455 78.562 171.258 Q 19.431 213.028 15.097 215.684 C 10.763 218.339 4.948 220.243 1.801 216.252 C -1.346 212.26 -0.189 208.523 3.874 204.46 L 82.146 126.188 L 91.73 135.773 Z "
      })]
    })]
  });
};

const droneTopItem = {
  id: 'droneTop',
  name: 'Drone Top',
  description: 'Drone top',
  display: DroneTopDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    const data = {
      bRightRotorRPM: cfg !== null && cfg !== void 0 && cfg.bRightRotorRPM ? ctx.getScalar(cfg.bRightRotorRPM).value() : 0,
      bLeftRotorRPM: cfg !== null && cfg !== void 0 && cfg.bLeftRotorRPM ? ctx.getScalar(cfg.bLeftRotorRPM).value() : 0,
      fRightRotorRPM: cfg !== null && cfg !== void 0 && cfg.fRightRotorRPM ? ctx.getScalar(cfg.fRightRotorRPM).value() : 0,
      fLeftRotorRPM: cfg !== null && cfg !== void 0 && cfg.fLeftRotorRPM ? ctx.getScalar(cfg.fLeftRotorRPM).value() : 0,
      yawAngle: cfg !== null && cfg !== void 0 && cfg.yawAngle ? ctx.getScalar(cfg.yawAngle).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Drone Top'];
    builder.addCustomEditor({
      category,
      id: 'yawAngle',
      path: 'config.yawAngle',
      name: 'Yaw Angle',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'fRightRotorRPM',
      path: 'config.fRightRotorRPM',
      name: 'Front Right Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'fLeftRotorRPM',
      path: 'config.fLeftRotorRPM',
      name: 'Front Left Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'bRightRotorRPM',
      path: 'config.bRightRotorRPM',
      name: 'Back Right Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    }).addCustomEditor({
      category,
      id: 'bLeftRotorRPM',
      path: 'config.bLeftRotorRPM',
      name: 'Back Left Rotor RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  propeller: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    transform-origin: 50% 50%;
    transform-box: fill-box;
    display: block;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,
  propellerCW: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    animation-direction: normal;
  `,
  propellerCCW: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    animation-direction: reverse;
  `
});

/***/ }),

/***/ "./public/app/features/canvas/elements/icon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconDisplay": () => (/* binding */ IconDisplay),
/* harmony export */   "iconItem": () => (/* binding */ iconItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-inlinesvg-virtual-941c793559/0/cache/react-inlinesvg-npm-3.0.0-57872fc8cc-ceb34c4c54.zip/node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/APIEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








// When a stoke is defined, we want the path to be in page units
const svgStrokePathClass = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  path {
    vector-effect: non-scaling-stroke;
  }
`;
function IconDisplay(props) {
  const {
    data
  } = props;

  if (!(data !== null && data !== void 0 && data.path)) {
    return null;
  }

  const onClick = () => {
    if (data !== null && data !== void 0 && data.api) {
      (0,app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__.callApi)(data.api);
    }
  };

  const svgStyle = {
    fill: data === null || data === void 0 ? void 0 : data.fill,
    stroke: data === null || data === void 0 ? void 0 : data.strokeColor,
    strokeWidth: data === null || data === void 0 ? void 0 : data.stroke
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onClick,
    src: data.path,
    style: svgStyle,
    className: svgStyle.strokeWidth ? svgStrokePathClass : undefined
  });
}
const iconItem = {
  id: 'icon',
  name: 'Icon',
  description: 'SVG Icon display',
  display: IconDisplay,
  getNewOptions: options => Object.assign({
    placement: {
      width: 50,
      height: 50,
      top: 0,
      left: 0
    }
  }, options, {
    config: {
      path: {
        mode: app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__.ResourceDimensionMode.Fixed,
        fixed: 'img/icons/unicons/question-circle.svg'
      },
      fill: {
        fixed: '#FFF899'
      }
    }
  }),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    var _cfg$api, _cfg$stroke;

    let path = undefined;

    if (cfg.path) {
      path = ctx.getResource(cfg.path).value();
    }

    if (!path || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(path)) {
      path = (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_3__.getPublicOrAbsoluteUrl)('img/icons/unicons/question-circle.svg');
    }

    const data = {
      path,
      fill: cfg.fill ? ctx.getColor(cfg.fill).value() : '#CCC',
      api: (_cfg$api = cfg === null || cfg === void 0 ? void 0 : cfg.api) !== null && _cfg$api !== void 0 ? _cfg$api : undefined
    };

    if ((_cfg$stroke = cfg.stroke) !== null && _cfg$stroke !== void 0 && _cfg$stroke.width && cfg.stroke.color) {
      if (cfg.stroke.width > 0) {
        var _cfg$stroke2;

        data.stroke = (_cfg$stroke2 = cfg.stroke) === null || _cfg$stroke2 === void 0 ? void 0 : _cfg$stroke2.width;
        data.strokeColor = ctx.getColor(cfg.stroke.color).value();
      }
    }

    return data;
  },
  // Heatmap overlay options
  registerOptionsUI: builder => {
    const category = ['Icon'];
    builder.addCustomEditor({
      category,
      id: 'iconSelector',
      path: 'config.path',
      name: 'SVG Path',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__.ResourceDimensionEditor,
      settings: {
        resourceType: 'icon'
      }
    }).addCustomEditor({
      category,
      id: 'config.fill',
      path: 'config.fill',
      name: 'Fill color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__.ColorDimensionEditor,
      settings: {},
      defaultValue: {
        // Configured values
        fixed: 'grey'
      }
    }).addSliderInput({
      category,
      path: 'config.stroke.width',
      name: 'Stroke',
      defaultValue: 0,
      settings: {
        min: 0,
        max: 10
      }
    }).addCustomEditor({
      category,
      id: 'config.stroke.color',
      path: 'config.stroke.color',
      name: 'Stroke color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_4__.ColorDimensionEditor,
      settings: {},
      defaultValue: {
        // Configured values
        fixed: 'grey'
      },
      showIf: cfg => {
        var _cfg$config, _cfg$config$stroke;

        return Boolean(cfg === null || cfg === void 0 ? void 0 : (_cfg$config = cfg.config) === null || _cfg$config === void 0 ? void 0 : (_cfg$config$stroke = _cfg$config.stroke) === null || _cfg$config$stroke === void 0 ? void 0 : _cfg$config$stroke.width);
      }
    }).addCustomEditor({
      category,
      id: 'apiSelector',
      path: 'config.api',
      name: 'API',
      editor: app_plugins_panel_canvas_editor_APIEditor__WEBPACK_IMPORTED_MODULE_5__.APIEditor
    });
  }
};

/***/ }),

/***/ "./public/app/features/canvas/elements/notFound.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notFoundItem": () => (/* binding */ notFoundItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;





class NotFoundDisplay extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      config
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        children: "NOT FOUND:"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("pre", {
        children: JSON.stringify(config, null, 2)
      })]
    });
  }

}

const notFoundItem = {
  id: 'not-found',
  name: 'Not found',
  description: 'Display when element type is not found in the registry',
  display: NotFoundDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: () => ({
    config: {}
  })
};

/***/ }),

/***/ "./public/app/features/canvas/elements/textBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Align": () => (/* binding */ Align),
/* harmony export */   "VAlign": () => (/* binding */ VAlign),
/* harmony export */   "textBoxItem": () => (/* binding */ textBoxItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_dimensions_editors_ColorDimensionEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dimensions/editors/ColorDimensionEditor.tsx");
/* harmony import */ var app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dimensions/editors/TextDimensionEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







let Align;

(function (Align) {
  Align["Left"] = "left";
  Align["Center"] = "center";
  Align["Right"] = "right";
})(Align || (Align = {}));

let VAlign;

(function (VAlign) {
  VAlign["Top"] = "top";
  VAlign["Middle"] = "middle";
  VAlign["Bottom"] = "bottom";
})(VAlign || (VAlign = {}));

class TextBoxDisplay extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  render() {
    const {
      data
    } = this.props;
    const styles = getStyles(app_core_config__WEBPACK_IMPORTED_MODULE_3__.config.theme2, data);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: styles.span,
        children: data === null || data === void 0 ? void 0 : data.text
      })
    });
  }

}

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)((theme, data) => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: absolute;
    height: 100%;
    width: 100%;
    display: table;
  `,
  span: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: table-cell;
    vertical-align: ${data.valign};
    text-align: ${data.align};
    font-size: ${data === null || data === void 0 ? void 0 : data.size}px;
    color: ${data === null || data === void 0 ? void 0 : data.color};
  `
}));
const textBoxItem = {
  id: 'text-box',
  name: 'Text',
  description: 'Text box',
  display: TextBoxDisplay,
  defaultSize: {
    width: 240,
    height: 160
  },
  getNewOptions: options => Object.assign({
    background: {
      color: {
        fixed: 'grey'
      }
    }
  }, options, {
    config: {
      align: Align.Left,
      valign: VAlign.Middle
    }
  }),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    var _cfg$align, _cfg$valign;

    const data = {
      text: cfg.text ? ctx.getText(cfg.text).value() : '',
      align: (_cfg$align = cfg.align) !== null && _cfg$align !== void 0 ? _cfg$align : Align.Center,
      valign: (_cfg$valign = cfg.valign) !== null && _cfg$valign !== void 0 ? _cfg$valign : VAlign.Middle,
      size: cfg.size
    };

    if (cfg.color) {
      data.color = ctx.getColor(cfg.color).value();
    }

    return data;
  },
  // Heatmap overlay options
  registerOptionsUI: builder => {
    const category = ['Text box'];
    builder.addCustomEditor({
      category,
      id: 'textSelector',
      path: 'config.text',
      name: 'Text',
      editor: app_features_dimensions_editors_TextDimensionEditor__WEBPACK_IMPORTED_MODULE_5__.TextDimensionEditor
    }).addCustomEditor({
      category,
      id: 'config.color',
      path: 'config.color',
      name: 'Text color',
      editor: app_features_dimensions_editors_ColorDimensionEditor__WEBPACK_IMPORTED_MODULE_4__.ColorDimensionEditor,
      settings: {},
      defaultValue: {}
    }).addRadio({
      category,
      path: 'config.align',
      name: 'Align text',
      settings: {
        options: [{
          value: Align.Left,
          label: 'Left'
        }, {
          value: Align.Center,
          label: 'Center'
        }, {
          value: Align.Right,
          label: 'Right'
        }]
      },
      defaultValue: Align.Left
    }).addRadio({
      category,
      path: 'config.valign',
      name: 'Vertical align',
      settings: {
        options: [{
          value: VAlign.Top,
          label: 'Top'
        }, {
          value: VAlign.Middle,
          label: 'Middle'
        }, {
          value: VAlign.Bottom,
          label: 'Bottom'
        }]
      },
      defaultValue: VAlign.Middle
    }).addNumberInput({
      category,
      path: 'config.size',
      name: 'Text size',
      settings: {
        placeholder: 'Auto'
      }
    });
  }
};

/***/ }),

/***/ "./public/app/features/canvas/elements/windTurbine.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "windTurbineItem": () => (/* binding */ windTurbineItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _symbol, _g, _use, _use2, _use3;








const WindTurbineDisplay = props => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    data
  } = props;
  const windTurbineAnimation = `spin ${data !== null && data !== void 0 && data.rpm ? 60 / Math.abs(data.rpm) : 0}s linear infinite`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    viewBox: "0 0 189.326 283.989",
    preserveAspectRatio: "xMidYMid meet",
    children: [_symbol || (_symbol = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("symbol", {
      id: "blade",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "#e6e6e6",
        id: "blade-front",
        d: "M14.6491879,1.85011601 C14.2684455,-0.0535962877 10.7150812,-0.815081206 9.06473318,3.37308585 L0.434338747,70.7658933 L8.93805104,91.9607889 L15.4106729,90.437819 L17.5684455,78.3807425 L14.5218097,1.97679814 L14.6491879,1.85011601 Z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        fill: "#d0d6d7",
        id: "blade-side",
        d: "M11.0951276,0.581206497 C10.3336427,0.961948956 9.57215777,1.85011601 8.93735499,3.24640371 L0.306960557,70.6392111 L8.81067285,91.8341067 L3.35359629,70.0044084 L11.0951276,0.581206497 Z"
      })]
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      children: [_g || (_g = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
        id: "structure",
        transform: "translate(58.123, 82.664)",
        fillRule: "nonzero",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polygon", {
          id: "tower",
          fill: "#e6e6e6",
          points: "33.111,10.984 39.965,10.984 44.28,196.176 28.796,196.176"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          id: "yaw",
          fill: "rgba(0,0,0,0.25)",
          d: "M40.3454756,23.2948956 L40.7262181,34.8445476 C38.8225058,35.0986079 35.7765661,35.0986079 32.349884,34.337123 L32.7306265,23.2955916 L40.3454756,23.2955916 L40.3454756,23.2948956 Z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          id: "base",
          fill: "#d0d6d7",
          transform: "translate(0 42)",
          d: "M26.3846868,150.591647 L46.5640371,150.591647 C48.8484919,150.591647 50.7522042,152.49536 50.7522042,154.779814 L50.7522042,158.967981 L22.0691415,158.967981 L22.0691415,154.779814 C22.0691415,152.49536 23.9728538,150.591647 26.2573086,150.591647 L26.3846868,150.591647 Z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
          id: "nacelle",
          fill: "#e6e6e6",
          cx: "36.54",
          cy: "12",
          r: "11.93"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("circle", {
          id: "gearbox",
          fill: "none",
          stroke: "#d0d6d7",
          strokeWidth: "2.75",
          cx: "36.538",
          cy: "11.999",
          r: "5.8"
        })]
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
        className: styles.blade,
        style: {
          animation: windTurbineAnimation
        },
        children: [_use || (_use = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("use", {
          id: "blade1",
          href: "#blade",
          x: "83.24",
          y: "0"
        })), _use2 || (_use2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("use", {
          id: "blade2",
          href: "#blade",
          x: "83.24",
          y: "0",
          transform: "rotate(120 94.663 94.663)"
        })), _use3 || (_use3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("use", {
          id: "blade3",
          href: "#blade",
          x: "83.24",
          y: "0",
          transform: "rotate(-120 94.663 94.663)"
        }))]
      })]
    })]
  });
};

const windTurbineItem = {
  id: 'windTurbine',
  name: 'Wind Turbine',
  description: 'Spinny spinny',
  display: WindTurbineDisplay,
  defaultSize: {
    width: 100,
    height: 100
  },
  getNewOptions: options => Object.assign({}, options),
  // Called when data changes
  prepareData: (ctx, cfg) => {
    const data = {
      rpm: cfg !== null && cfg !== void 0 && cfg.rpm ? ctx.getScalar(cfg.rpm).value() : 0
    };
    return data;
  },
  registerOptionsUI: builder => {
    const category = ['Wind Turbine'];
    builder.addCustomEditor({
      category,
      id: 'rpm',
      path: 'config.rpm',
      name: 'RPM',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_3__.ScalarDimensionEditor
    });
  }
};

const getStyles = theme => ({
  blade: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    transform-origin: 94.663px 94.663px;
    transform: rotate(15deg);
  `
});

/***/ }),

/***/ "./public/app/features/canvas/frame.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/app/features/canvas/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundImageSize": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize),
/* harmony export */   "CanvasFrameOptions": () => (/* reexport safe */ _frame__WEBPACK_IMPORTED_MODULE_2__.CanvasFrameOptions),
/* harmony export */   "DEFAULT_CANVAS_ELEMENT_CONFIG": () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_CANVAS_ELEMENT_CONFIG),
/* harmony export */   "HorizontalConstraint": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.HorizontalConstraint),
/* harmony export */   "QuickPlacement": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.QuickPlacement),
/* harmony export */   "VerticalConstraint": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.VerticalConstraint),
/* harmony export */   "canvasElementRegistry": () => (/* reexport safe */ _registry__WEBPACK_IMPORTED_MODULE_3__.canvasElementRegistry)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/canvas/types.ts");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/element.ts");
/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/frame.ts");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/registry.ts");





/***/ }),

/***/ "./public/app/features/canvas/registry.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CANVAS_ELEMENT_CONFIG": () => (/* binding */ DEFAULT_CANVAS_ELEMENT_CONFIG),
/* harmony export */   "canvasElementRegistry": () => (/* binding */ canvasElementRegistry)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _elements_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/elements/button.tsx");
/* harmony import */ var _elements_droneFront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/droneFront.tsx");
/* harmony import */ var _elements_droneSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/elements/droneSide.tsx");
/* harmony import */ var _elements_droneTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/canvas/elements/droneTop.tsx");
/* harmony import */ var _elements_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
/* harmony import */ var _elements_textBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/canvas/elements/textBox.tsx");
/* harmony import */ var _elements_windTurbine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/canvas/elements/windTurbine.tsx");








const DEFAULT_CANVAS_ELEMENT_CONFIG = Object.assign({}, _elements_icon__WEBPACK_IMPORTED_MODULE_5__.iconItem.getNewOptions(), {
  type: _elements_icon__WEBPACK_IMPORTED_MODULE_5__.iconItem.id,
  name: `Element 1`
});
const canvasElementRegistry = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.Registry(() => [_elements_icon__WEBPACK_IMPORTED_MODULE_5__.iconItem, // default for now
_elements_textBox__WEBPACK_IMPORTED_MODULE_6__.textBoxItem, _elements_button__WEBPACK_IMPORTED_MODULE_1__.buttonItem, _elements_droneTop__WEBPACK_IMPORTED_MODULE_4__.droneTopItem, _elements_droneFront__WEBPACK_IMPORTED_MODULE_2__.droneFrontItem, _elements_droneSide__WEBPACK_IMPORTED_MODULE_3__.droneSideItem, _elements_windTurbine__WEBPACK_IMPORTED_MODULE_7__.windTurbineItem]);

/***/ }),

/***/ "./public/app/features/canvas/runtime/element.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementState": () => (/* binding */ ElementState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/index.ts");
/* harmony import */ var app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/notFound.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let counter = 0;
class ElementState {
  // UID necessary for moveable to work (for now)
  // Determine whether or not element is in motion or not (via moveable)
  // Temp stored constraint for visualization purposes (switch to top / left constraint to simplify some functionality)
  // Filled in by ref
  // Calculated
  // depends on the type
  constructor(item, options, parent) {
    var _options$constraint, _options$placement;

    _defineProperty(this, "UID", counter++);

    _defineProperty(this, "revId", 0);

    _defineProperty(this, "sizeStyle", {});

    _defineProperty(this, "dataStyle", {});

    _defineProperty(this, "isMoving", false);

    _defineProperty(this, "tempConstraint", void 0);

    _defineProperty(this, "div", void 0);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "initElement", target => {
      this.div = target;
      this.applyLayoutStylesToDiv();
    });

    _defineProperty(this, "applyDrag", event => {
      var _this$options$constra, _this$options$constra2;

      const hasHorizontalCenterConstraint = ((_this$options$constra = this.options.constraint) === null || _this$options$constra === void 0 ? void 0 : _this$options$constra.horizontal) === _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Center;
      const hasVerticalCenterConstraint = ((_this$options$constra2 = this.options.constraint) === null || _this$options$constra2 === void 0 ? void 0 : _this$options$constra2.vertical) === _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Center;

      if (hasHorizontalCenterConstraint || hasVerticalCenterConstraint) {
        var _this$getScene$select, _this$getScene, _this$getScene$select2;

        const numberOfTargets = (_this$getScene$select = (_this$getScene = this.getScene()) === null || _this$getScene === void 0 ? void 0 : (_this$getScene$select2 = _this$getScene.selecto) === null || _this$getScene$select2 === void 0 ? void 0 : _this$getScene$select2.getSelectedTargets().length) !== null && _this$getScene$select !== void 0 ? _this$getScene$select : 0;
        const isMultiSelection = numberOfTargets > 1;

        if (!isMultiSelection) {
          var _this$div, _elementContainer$hei;

          const elementContainer = (_this$div = this.div) === null || _this$div === void 0 ? void 0 : _this$div.getBoundingClientRect();
          const height = (_elementContainer$hei = elementContainer === null || elementContainer === void 0 ? void 0 : elementContainer.height) !== null && _elementContainer$hei !== void 0 ? _elementContainer$hei : 100;
          const yOffset = hasVerticalCenterConstraint ? height / 4 : 0;
          event.target.style.transform = `translate(${event.translate[0]}px, ${event.translate[1] - yOffset}px)`;
          return;
        }
      }

      event.target.style.transform = event.transform;
    });

    _defineProperty(this, "applyResize", event => {
      const placement = this.options.placement;
      const style = event.target.style;
      const deltaX = event.delta[0];
      const deltaY = event.delta[1];
      const dirLR = event.direction[0];
      const dirTB = event.direction[1];

      if (dirLR === 1) {
        placement.width = event.width;
        style.width = `${placement.width}px`;
      } else if (dirLR === -1) {
        placement.left -= deltaX;
        placement.width = event.width;
        style.left = `${placement.left}px`;
        style.width = `${placement.width}px`;
      }

      if (dirTB === -1) {
        placement.top -= deltaY;
        placement.height = event.height;
        style.top = `${placement.top}px`;
        style.height = `${placement.height}px`;
      } else if (dirTB === 1) {
        placement.height = event.height;
        style.height = `${placement.height}px`;
      }
    });

    this.item = item;
    this.options = options;
    this.parent = parent;
    const fallbackName = `Element ${Date.now()}`;

    if (!options) {
      this.options = {
        type: item.id,
        name: fallbackName
      };
    }

    options.constraint = (_options$constraint = options.constraint) !== null && _options$constraint !== void 0 ? _options$constraint : {
      vertical: _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Top,
      horizontal: _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Left
    };
    options.placement = (_options$placement = options.placement) !== null && _options$placement !== void 0 ? _options$placement : {
      width: 100,
      height: 100,
      top: 0,
      left: 0
    };
    const scene = this.getScene();

    if (!options.name) {
      const newName = scene === null || scene === void 0 ? void 0 : scene.getNextElementName();
      options.name = newName !== null && newName !== void 0 ? newName : fallbackName;
    }

    scene === null || scene === void 0 ? void 0 : scene.byName.set(options.name, this);
  }

  getScene() {
    let trav = this.parent;

    while (trav) {
      if (trav.isRoot()) {
        return trav.scene;
      }

      trav = trav.parent;
    }

    return undefined;
  }

  getName() {
    return this.options.name;
  }
  /** Use the configured options to update CSS style properties directly on the wrapper div **/


  applyLayoutStylesToDiv() {
    var _this$options$placeme, _placement$top, _placement$height, _placement$bottom, _placement$height2, _placement$top2, _placement$bottom2, _placement$top3, _placement$height3, _placement$top4, _placement$bottom3, _placement$left, _placement$width, _placement$right, _placement$width2, _placement$left2, _placement$right2, _placement$left3, _placement$width3, _placement$left4, _placement$right3;

    if (this.isRoot()) {
      // Root supersedes layout engine and is always 100% width + height of panel
      return;
    }

    const {
      constraint
    } = this.options;
    const {
      vertical,
      horizontal
    } = constraint !== null && constraint !== void 0 ? constraint : {};
    const placement = (_this$options$placeme = this.options.placement) !== null && _this$options$placeme !== void 0 ? _this$options$placeme : {};
    const style = {
      position: 'absolute',
      // Minimum element size is 10x10
      minWidth: '10px',
      minHeight: '10px'
    };
    const translate = ['0px', '0px'];

    switch (vertical) {
      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Top:
        placement.top = (_placement$top = placement.top) !== null && _placement$top !== void 0 ? _placement$top : 0;
        placement.height = (_placement$height = placement.height) !== null && _placement$height !== void 0 ? _placement$height : 100;
        style.top = `${placement.top}px`;
        style.height = `${placement.height}px`;
        delete placement.bottom;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Bottom:
        placement.bottom = (_placement$bottom = placement.bottom) !== null && _placement$bottom !== void 0 ? _placement$bottom : 0;
        placement.height = (_placement$height2 = placement.height) !== null && _placement$height2 !== void 0 ? _placement$height2 : 100;
        style.bottom = `${placement.bottom}px`;
        style.height = `${placement.height}px`;
        delete placement.top;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.TopBottom:
        placement.top = (_placement$top2 = placement.top) !== null && _placement$top2 !== void 0 ? _placement$top2 : 0;
        placement.bottom = (_placement$bottom2 = placement.bottom) !== null && _placement$bottom2 !== void 0 ? _placement$bottom2 : 0;
        style.top = `${placement.top}px`;
        style.bottom = `${placement.bottom}px`;
        delete placement.height;
        style.height = '';
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Center:
        placement.top = (_placement$top3 = placement.top) !== null && _placement$top3 !== void 0 ? _placement$top3 : 0;
        placement.height = (_placement$height3 = placement.height) !== null && _placement$height3 !== void 0 ? _placement$height3 : 100;
        translate[1] = '-50%';
        style.top = `calc(50% - ${placement.top}px)`;
        style.height = `${placement.height}px`;
        delete placement.bottom;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Scale:
        placement.top = (_placement$top4 = placement.top) !== null && _placement$top4 !== void 0 ? _placement$top4 : 0;
        placement.bottom = (_placement$bottom3 = placement.bottom) !== null && _placement$bottom3 !== void 0 ? _placement$bottom3 : 0;
        style.top = `${placement.top}%`;
        style.bottom = `${placement.bottom}%`;
        delete placement.height;
        style.height = '';
        break;
    }

    switch (horizontal) {
      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Left:
        placement.left = (_placement$left = placement.left) !== null && _placement$left !== void 0 ? _placement$left : 0;
        placement.width = (_placement$width = placement.width) !== null && _placement$width !== void 0 ? _placement$width : 100;
        style.left = `${placement.left}px`;
        style.width = `${placement.width}px`;
        delete placement.right;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Right:
        placement.right = (_placement$right = placement.right) !== null && _placement$right !== void 0 ? _placement$right : 0;
        placement.width = (_placement$width2 = placement.width) !== null && _placement$width2 !== void 0 ? _placement$width2 : 100;
        style.right = `${placement.right}px`;
        style.width = `${placement.width}px`;
        delete placement.left;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.LeftRight:
        placement.left = (_placement$left2 = placement.left) !== null && _placement$left2 !== void 0 ? _placement$left2 : 0;
        placement.right = (_placement$right2 = placement.right) !== null && _placement$right2 !== void 0 ? _placement$right2 : 0;
        style.left = `${placement.left}px`;
        style.right = `${placement.right}px`;
        delete placement.width;
        style.width = '';
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Center:
        placement.left = (_placement$left3 = placement.left) !== null && _placement$left3 !== void 0 ? _placement$left3 : 0;
        placement.width = (_placement$width3 = placement.width) !== null && _placement$width3 !== void 0 ? _placement$width3 : 100;
        translate[0] = '-50%';
        style.left = `calc(50% - ${placement.left}px)`;
        style.width = `${placement.width}px`;
        delete placement.right;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Scale:
        placement.left = (_placement$left4 = placement.left) !== null && _placement$left4 !== void 0 ? _placement$left4 : 0;
        placement.right = (_placement$right3 = placement.right) !== null && _placement$right3 !== void 0 ? _placement$right3 : 0;
        style.left = `${placement.left}%`;
        style.right = `${placement.right}%`;
        delete placement.width;
        style.width = '';
        break;
    }

    style.transform = `translate(${translate[0]}, ${translate[1]})`;
    this.options.placement = placement;
    this.sizeStyle = style;

    if (this.div) {
      for (const key in this.sizeStyle) {
        this.div.style[key] = this.sizeStyle[key];
      }

      for (const key in this.dataStyle) {
        this.div.style[key] = this.dataStyle[key];
      }
    }
  }

  setPlacementFromConstraint(elementContainer, parentContainer) {
    var _elementContainer$wid, _elementContainer, _elementContainer$hei2, _elementContainer2, _parentContainer$heig, _parentContainer, _parentContainer$heig2, _parentContainer2, _parentContainer$widt, _parentContainer3, _parentContainer$widt2, _parentContainer4;

    const {
      constraint
    } = this.options;
    const {
      vertical,
      horizontal
    } = constraint !== null && constraint !== void 0 ? constraint : {};

    if (!elementContainer) {
      elementContainer = this.div && this.div.getBoundingClientRect();
    }

    if (!parentContainer) {
      var _this$div$parentEleme;

      parentContainer = this.div && ((_this$div$parentEleme = this.div.parentElement) === null || _this$div$parentEleme === void 0 ? void 0 : _this$div$parentEleme.getBoundingClientRect());
    }

    const relativeTop = elementContainer && parentContainer ? Math.round(elementContainer.top - parentContainer.top) : 0;
    const relativeBottom = elementContainer && parentContainer ? Math.round(parentContainer.bottom - elementContainer.bottom) : 0;
    const relativeLeft = elementContainer && parentContainer ? Math.round(elementContainer.left - parentContainer.left) : 0;
    const relativeRight = elementContainer && parentContainer ? Math.round(parentContainer.right - elementContainer.right) : 0;
    const placement = {};
    const width = (_elementContainer$wid = (_elementContainer = elementContainer) === null || _elementContainer === void 0 ? void 0 : _elementContainer.width) !== null && _elementContainer$wid !== void 0 ? _elementContainer$wid : 100;
    const height = (_elementContainer$hei2 = (_elementContainer2 = elementContainer) === null || _elementContainer2 === void 0 ? void 0 : _elementContainer2.height) !== null && _elementContainer$hei2 !== void 0 ? _elementContainer$hei2 : 100;

    switch (vertical) {
      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Top:
        placement.top = relativeTop;
        placement.height = height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Bottom:
        placement.bottom = relativeBottom;
        placement.height = height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.TopBottom:
        placement.top = relativeTop;
        placement.bottom = relativeBottom;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Center:
        const elementCenter = elementContainer ? relativeTop + height / 2 : 0;
        const parentCenter = parentContainer ? parentContainer.height / 2 : 0;
        const distanceFromCenter = parentCenter - elementCenter;
        placement.top = distanceFromCenter;
        placement.height = height;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.VerticalConstraint.Scale:
        placement.top = relativeTop / ((_parentContainer$heig = (_parentContainer = parentContainer) === null || _parentContainer === void 0 ? void 0 : _parentContainer.height) !== null && _parentContainer$heig !== void 0 ? _parentContainer$heig : height) * 100;
        placement.bottom = relativeBottom / ((_parentContainer$heig2 = (_parentContainer2 = parentContainer) === null || _parentContainer2 === void 0 ? void 0 : _parentContainer2.height) !== null && _parentContainer$heig2 !== void 0 ? _parentContainer$heig2 : height) * 100;
        break;
    }

    switch (horizontal) {
      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Left:
        placement.left = relativeLeft;
        placement.width = width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Right:
        placement.right = relativeRight;
        placement.width = width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.LeftRight:
        placement.left = relativeLeft;
        placement.right = relativeRight;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Center:
        const elementCenter = elementContainer ? relativeLeft + width / 2 : 0;
        const parentCenter = parentContainer ? parentContainer.width / 2 : 0;
        const distanceFromCenter = parentCenter - elementCenter;
        placement.left = distanceFromCenter;
        placement.width = width;
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.HorizontalConstraint.Scale:
        placement.left = relativeLeft / ((_parentContainer$widt = (_parentContainer3 = parentContainer) === null || _parentContainer3 === void 0 ? void 0 : _parentContainer3.width) !== null && _parentContainer$widt !== void 0 ? _parentContainer$widt : width) * 100;
        placement.right = relativeRight / ((_parentContainer$widt2 = (_parentContainer4 = parentContainer) === null || _parentContainer4 === void 0 ? void 0 : _parentContainer4.width) !== null && _parentContainer$widt2 !== void 0 ? _parentContainer$widt2 : width) * 100;
        break;
    }

    this.options.placement = placement;
    this.applyLayoutStylesToDiv();
    this.revId++;
  }

  updateData(ctx) {
    var _background$size;

    if (this.item.prepareData) {
      this.data = this.item.prepareData(ctx, this.options.config);
      this.revId++; // rerender
    }

    const {
      background,
      border
    } = this.options;
    const css = {};

    if (background) {
      if (background.color) {
        const color = ctx.getColor(background.color);
        css.backgroundColor = color.value();
      }

      if (background.image) {
        const image = ctx.getResource(background.image);

        if (image) {
          const v = image.value();

          if (v) {
            css.backgroundImage = `url("${v}")`;

            switch ((_background$size = background.size) !== null && _background$size !== void 0 ? _background$size : app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Contain) {
              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Contain:
                css.backgroundSize = 'contain';
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Cover:
                css.backgroundSize = 'cover';
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Original:
                css.backgroundRepeat = 'no-repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Tile:
                css.backgroundRepeat = 'repeat';
                break;

              case app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.BackgroundImageSize.Fill:
                css.backgroundSize = '100% 100%';
                break;
            }
          }
        }
      }
    }

    if (border && border.color && border.width) {
      const color = ctx.getColor(border.color);
      css.borderWidth = border.width;
      css.borderStyle = 'solid';
      css.borderColor = color.value(); // Move the image to inside the border

      if (css.backgroundImage) {
        css.backgroundOrigin = 'padding-box';
      }
    }

    this.dataStyle = css;
    this.applyLayoutStylesToDiv();
  }

  isRoot() {
    return false;
  }
  /** Recursively visit all nodes */


  visit(visitor) {
    visitor(this);
  }

  onChange(options) {
    if (this.item.id !== options.type) {
      var _canvasElementRegistr;

      this.item = (_canvasElementRegistr = app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.canvasElementRegistry.getIfExists(options.type)) !== null && _canvasElementRegistr !== void 0 ? _canvasElementRegistr : app_features_canvas_elements_notFound__WEBPACK_IMPORTED_MODULE_2__.notFoundItem;
    } // rename handling


    const oldName = this.options.name;
    const newName = options.name;
    this.revId++;
    this.options = Object.assign({}, options);
    let trav = this.parent;

    while (trav) {
      if (trav.isRoot()) {
        trav.scene.save();
        break;
      }

      trav.revId++;
      trav = trav.parent;
    }

    const scene = this.getScene();

    if (oldName !== newName && scene) {
      scene.byName.delete(oldName);
      scene.byName.set(newName, this);
    }
  }

  getSaveModel() {
    return Object.assign({}, this.options);
  }

  render() {
    const {
      item
    } = this;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ref: this.initElement,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(item.display, {
        config: this.options.config,
        data: this.data
      }, `${this.UID}/${this.revId}`)
    }, this.UID);
  }

}

/***/ }),

/***/ "./public/app/features/canvas/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundImageSize": () => (/* binding */ BackgroundImageSize),
/* harmony export */   "HorizontalConstraint": () => (/* binding */ HorizontalConstraint),
/* harmony export */   "QuickPlacement": () => (/* binding */ QuickPlacement),
/* harmony export */   "VerticalConstraint": () => (/* binding */ VerticalConstraint)
/* harmony export */ });
let HorizontalConstraint;

(function (HorizontalConstraint) {
  HorizontalConstraint["Left"] = "left";
  HorizontalConstraint["Right"] = "right";
  HorizontalConstraint["LeftRight"] = "leftright";
  HorizontalConstraint["Center"] = "center";
  HorizontalConstraint["Scale"] = "scale";
})(HorizontalConstraint || (HorizontalConstraint = {}));

let VerticalConstraint;

(function (VerticalConstraint) {
  VerticalConstraint["Top"] = "top";
  VerticalConstraint["Bottom"] = "bottom";
  VerticalConstraint["TopBottom"] = "topbottom";
  VerticalConstraint["Center"] = "center";
  VerticalConstraint["Scale"] = "scale";
})(VerticalConstraint || (VerticalConstraint = {}));

let BackgroundImageSize;

(function (BackgroundImageSize) {
  BackgroundImageSize["Original"] = "original";
  BackgroundImageSize["Contain"] = "contain";
  BackgroundImageSize["Cover"] = "cover";
  BackgroundImageSize["Fill"] = "fill";
  BackgroundImageSize["Tile"] = "tile";
})(BackgroundImageSize || (BackgroundImageSize = {}));

let QuickPlacement;

(function (QuickPlacement) {
  QuickPlacement["Top"] = "top";
  QuickPlacement["Bottom"] = "bottom";
  QuickPlacement["Left"] = "left";
  QuickPlacement["Right"] = "right";
  QuickPlacement["HorizontalCenter"] = "hcenter";
  QuickPlacement["VerticalCenter"] = "vcenter";
})(QuickPlacement || (QuickPlacement = {}));

/***/ }),

/***/ "./public/app/plugins/panel/canvas/editor/APIEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIEditor": () => (/* binding */ APIEditor),
/* harmony export */   "callApi": () => (/* binding */ callApi)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_OptionsUI_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/OptionsUI/string.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br;










const dummyStringSettings = {
  settings: {}
};
const callApi = (api, isTest = false) => {
  if (api) {
    var _api$data;

    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch({
      url: api.endpoint,
      method: 'POST',
      data: (_api$data = api.data) !== null && _api$data !== void 0 ? _api$data : {}
    }).subscribe({
      error: error => {
        if (isTest) {
          app_core_core__WEBPACK_IMPORTED_MODULE_5__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertError, ['Error has occurred: ', JSON.stringify(error)]);
          console.error(error);
        }
      },
      complete: () => {
        if (isTest) {
          app_core_core__WEBPACK_IMPORTED_MODULE_5__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, ['Test successful']);
        }
      }
    });
  }
};
const APIEditor = props => {
  var _value$data, _value$data2;

  const {
    value,
    context,
    onChange
  } = props;
  const labelWidth = 9;
  const onEndpointChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(endpoint => {
    onChange(Object.assign({}, value, {
      endpoint
    }));
  }, [onChange, value]);
  const onDataChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {
    onChange(Object.assign({}, value, {
      data
    }));
  }, [onChange, value]);

  const renderJSON = data => {
    try {
      const json = JSON.parse(data);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.JSONFormatter, {
        json: json
      });
    } catch (error) {
      if (error instanceof Error) {
        return `Invalid JSON provided: ${error.message}`;
      } else {
        return 'Invalid JSON provided';
      }
    }
  };

  const renderTestAPIButton = api => {
    if (api && api.endpoint) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: () => callApi(api, true),
        title: 'Test API',
        children: "Test API"
      });
    }

    return;
  };

  return _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.disableSanitizeHtml ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: 'Endpoint',
        labelWidth: labelWidth,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_OptionsUI_string__WEBPACK_IMPORTED_MODULE_4__.StringValueEditor, {
          context: context,
          value: value === null || value === void 0 ? void 0 : value.endpoint,
          onChange: onEndpointChange,
          item: dummyStringSettings
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: 'Data',
        labelWidth: labelWidth,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_OptionsUI_string__WEBPACK_IMPORTED_MODULE_4__.StringValueEditor, {
          context: context,
          value: (_value$data = value === null || value === void 0 ? void 0 : value.data) !== null && _value$data !== void 0 ? _value$data : '{}',
          onChange: onDataChange,
          item: dummyStringSettings
        })
      })
    }), renderTestAPIButton(value), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), renderJSON((_value$data2 = value === null || value === void 0 ? void 0 : value.data) !== null && _value$data2 !== void 0 ? _value$data2 : '{}')]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: "Must enable disableSanitizeHtml feature flag to access"
  });
};

/***/ }),

/***/ "./public/app/plugins/panel/canvas/editor/options.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionBuilder": () => (/* binding */ optionBuilder)
/* harmony export */ });
/* harmony import */ var app_features_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/canvas/index.ts");
/* harmony import */ var app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dimensions/editors/index.ts");


const optionBuilder = {
  addBackground: (builder, context) => {
    const category = ['Background'];
    builder.addCustomEditor({
      category,
      id: 'background.color',
      path: 'background.color',
      name: 'Color',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ColorDimensionEditor,
      settings: {},
      defaultValue: {
        // Configured values
        fixed: ''
      }
    }).addCustomEditor({
      category,
      id: 'background.image',
      path: 'background.image',
      name: 'Image',
      editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ResourceDimensionEditor,
      settings: {
        resourceType: 'image'
      }
    }).addRadio({
      category,
      path: 'background.size',
      name: 'Image size',
      settings: {
        options: [{
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Original,
          label: 'Original'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Contain,
          label: 'Contain'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Cover,
          label: 'Cover'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Fill,
          label: 'Fill'
        }, {
          value: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Tile,
          label: 'Tile'
        }]
      },
      defaultValue: app_features_canvas__WEBPACK_IMPORTED_MODULE_0__.BackgroundImageSize.Cover
    });
  },
  addBorder: (builder, context) => {
    var _context$options, _context$options$bord;

    const category = ['Border'];
    builder.addSliderInput({
      category,
      path: 'border.width',
      name: 'Width',
      defaultValue: 2,
      settings: {
        min: 0,
        max: 20
      }
    });

    if ((_context$options = context.options) !== null && _context$options !== void 0 && (_context$options$bord = _context$options.border) !== null && _context$options$bord !== void 0 && _context$options$bord.width) {
      builder.addCustomEditor({
        category,
        id: 'border.color',
        path: 'border.color',
        name: 'Color',
        editor: app_features_dimensions_editors__WEBPACK_IMPORTED_MODULE_1__.ColorDimensionEditor,
        settings: {},
        defaultValue: {
          // Configured values
          fixed: ''
        }
      });
    }
  }
};

/***/ }),

/***/ "./public/app/plugins/panel/icon/IconPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconPanel": () => (/* binding */ IconPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_features_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/index.ts");
/* harmony import */ var app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
/* harmony import */ var app_features_canvas_runtime_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/canvas/runtime/element.tsx");
/* harmony import */ var app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dimensions/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class IconPanel extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "initElement", props => {
      this.element = new app_features_canvas_runtime_element__WEBPACK_IMPORTED_MODULE_3__.ElementState(app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_2__.iconItem, props.options.root);
      this.updateSize(props);
      this.element.updateData(this.dims);
      return this.element;
    });

    _defineProperty(this, "updateSize", props => {
      const {
        width,
        height
      } = props;
      this.element.options.constraint = {
        vertical: app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.VerticalConstraint.Top,
        horizontal: app_features_canvas__WEBPACK_IMPORTED_MODULE_1__.HorizontalConstraint.Left
      };
      this.element.options.placement = {
        left: 0,
        top: 0,
        width,
        height
      };
    });

    _defineProperty(this, "dims", {
      getColor: color => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getColorDimensionFromData)(this.props.data, color),
      getScale: scale => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getScaleDimensionFromData)(this.props.data, scale),
      getScalar: scalar => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getScalarDimensionFromData)(this.props.data, scalar),
      getText: text => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getTextDimensionFromData)(this.props.data, text),
      getResource: res => (0,app_features_dimensions__WEBPACK_IMPORTED_MODULE_4__.getResourceDimensionFromData)(this.props.data, res)
    });

    this.element = this.initElement(_props);
  }

  shouldComponentUpdate(nextProps) {
    var _this$props$options, _nextProps$options;

    const {
      width,
      height,
      data
    } = this.props;
    let changed = false;

    if (width !== nextProps.width || height !== nextProps.height) {
      this.updateSize(nextProps);
      changed = true;
    }

    if (data !== nextProps.data) {
      this.element.updateData(this.dims);
      changed = true;
    } // Reload the element when options change


    if (((_this$props$options = this.props.options) === null || _this$props$options === void 0 ? void 0 : _this$props$options.root) !== ((_nextProps$options = nextProps.options) === null || _nextProps$options === void 0 ? void 0 : _nextProps$options.root)) {
      this.initElement(nextProps);
      changed = true;
    }

    return changed;
  }

  render() {
    const {
      width,
      height
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      style: {
        width,
        height,
        overflow: 'hidden',
        position: 'relative'
      },
      children: this.element.render()
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/panel/icon/models.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultPanelOptions": () => (/* binding */ defaultPanelOptions)
/* harmony export */ });
/* harmony import */ var app_features_dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/dimensions/index.ts");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NOTE: This file will be auto generated from models.cue
// It is currenty hand written but will serve as the target for cuetsy
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const defaultPanelOptions = {
  root: {
    config: {
      path: {
        mode: app_features_dimensions__WEBPACK_IMPORTED_MODULE_0__.ResourceDimensionMode.Fixed,
        fixed: 'img/icons/unicons/analysis.svg'
      },
      fill: {
        fixed: 'green'
      }
    }
  }
};

/***/ }),

/***/ "./public/app/plugins/panel/icon/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/canvas/elements/icon.tsx");
/* harmony import */ var _canvas_editor_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/canvas/editor/options.ts");
/* harmony import */ var _IconPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/icon/IconPanel.tsx");
/* harmony import */ var _models_gen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/icon/models.gen.ts");





const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_IconPanel__WEBPACK_IMPORTED_MODULE_3__.IconPanel).setNoPadding() // extend to panel edges
.useFieldConfig({
  standardOptions: {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldConfigProperty.Mappings]: {
      settings: {
        icon: true
      }
    }
  }
}).setPanelOptions(builder => {
  builder.addNestedOptions({
    category: ['Icon'],
    path: 'root',
    // Dynamically fill the selected element
    build: (builder, ctx) => {
      app_features_canvas_elements_icon__WEBPACK_IMPORTED_MODULE_1__.iconItem.registerOptionsUI(builder, ctx);
      _canvas_editor_options__WEBPACK_IMPORTED_MODULE_2__.optionBuilder.addBackground(builder, ctx);
      _canvas_editor_options__WEBPACK_IMPORTED_MODULE_2__.optionBuilder.addBorder(builder, ctx);
    },
    defaultValue: _models_gen__WEBPACK_IMPORTED_MODULE_4__.defaultPanelOptions.root
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NlEsZ0JBQVIsQ0FBMkQ7SUFDekQ1USxRQUFRLEVBQUUsQ0FBQyxNQUFELENBRCtDO0lBRXpERSxJQUFJLEVBQUUsTUFGbUQ7SUFJekQ7SUFDQTJRLEtBQUssRUFBRSxDQUFDOVEsT0FBRCxFQUFVTixHQUFWLEtBQWtCO01BQ3ZCNEQseUZBQUEsQ0FBNEJ0RCxPQUE1QixFQUFxQ04sR0FBckM7TUFFQW1QLCtFQUFBLENBQTRCN08sT0FBNUIsRUFBcUNOLEdBQXJDO01BQ0FtUCwyRUFBQSxDQUF3QjdPLE9BQXhCLEVBQWlDTixHQUFqQztJQUNELENBVndEO0lBWXpEeUUsWUFBWSxFQUFFZ00saUVBQXdCWDtFQVptQixDQUEzRDtBQWNELENBMUJtQixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2Ryb25lRnJvbnQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2NhbnZhcy9lbGVtZW50cy9kcm9uZVNpZGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2NhbnZhcy9lbGVtZW50cy9kcm9uZVRvcC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2ljb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2NhbnZhcy9lbGVtZW50cy9ub3RGb3VuZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL3RleHRCb3gudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2NhbnZhcy9lbGVtZW50cy93aW5kVHVyYmluZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvY2FudmFzL2luZGV4LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2NhbnZhcy9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvcnVudGltZS9lbGVtZW50LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9jYW52YXMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9jYW52YXMvZWRpdG9yL0FQSUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9jYW52YXMvZWRpdG9yL29wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9pY29uL0ljb25QYW5lbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9pY29uL21vZGVscy5nZW4udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC9pY29uL21vZHVsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9jb250ZXh0JztcbmltcG9ydCB7IFRleHREaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzL1RleHREaW1lbnNpb25FZGl0b3InO1xuaW1wb3J0IHsgVGV4dERpbWVuc2lvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL3R5cGVzJztcbmltcG9ydCB7IEFQSUVkaXRvciwgQVBJRWRpdG9yQ29uZmlnLCBjYWxsQXBpIH0gZnJvbSAnYXBwL3BsdWdpbnMvcGFuZWwvY2FudmFzL2VkaXRvci9BUElFZGl0b3InO1xuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5cbmludGVyZmFjZSBCdXR0b25EYXRhIHtcbiAgdGV4dD86IHN0cmluZztcbiAgYXBpPzogQVBJRWRpdG9yQ29uZmlnO1xufVxuXG5pbnRlcmZhY2UgQnV0dG9uQ29uZmlnIHtcbiAgdGV4dD86IFRleHREaW1lbnNpb25Db25maWc7XG4gIGFwaT86IEFQSUVkaXRvckNvbmZpZztcbn1cblxuY2xhc3MgQnV0dG9uRGlzcGxheSBleHRlbmRzIFB1cmVDb21wb25lbnQ8Q2FudmFzRWxlbWVudFByb3BzPEJ1dHRvbkNvbmZpZywgQnV0dG9uRGF0YT4+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGRhdGE/LmFwaSkge1xuICAgICAgICBjYWxsQXBpKGRhdGEuYXBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICB7ZGF0YT8udGV4dH1cbiAgICAgIDwvQnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvbkl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPEJ1dHRvbkNvbmZpZywgQnV0dG9uRGF0YT4gPSB7XG4gIGlkOiAnYnV0dG9uJyxcbiAgbmFtZTogJ0J1dHRvbicsXG4gIGRlc2NyaXB0aW9uOiAnQnV0dG9uJyxcblxuICBkaXNwbGF5OiBCdXR0b25EaXNwbGF5LFxuXG4gIGRlZmF1bHRTaXplOiB7XG4gICAgd2lkdGg6IDIwMCxcbiAgICBoZWlnaHQ6IDUwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6IChvcHRpb25zKSA9PiAoe1xuICAgIC4uLm9wdGlvbnMsXG4gIH0pLFxuXG4gIC8vIENhbGxlZCB3aGVuIGRhdGEgY2hhbmdlc1xuICBwcmVwYXJlRGF0YTogKGN0eDogRGltZW5zaW9uQ29udGV4dCwgY2ZnOiBCdXR0b25Db25maWcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBCdXR0b25EYXRhID0ge1xuICAgICAgdGV4dDogY2ZnPy50ZXh0ID8gY3R4LmdldFRleHQoY2ZnLnRleHQpLnZhbHVlKCkgOiAnJyxcbiAgICAgIGFwaTogY2ZnPy5hcGkgPz8gdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcblxuICAvLyBIZWF0bWFwIG92ZXJsYXkgb3B0aW9uc1xuICByZWdpc3Rlck9wdGlvbnNVSTogKGJ1aWxkZXIpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IFsnQnV0dG9uJ107XG4gICAgYnVpbGRlclxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ3RleHRTZWxlY3RvcicsXG4gICAgICAgIHBhdGg6ICdjb25maWcudGV4dCcsXG4gICAgICAgIG5hbWU6ICdUZXh0JyxcbiAgICAgICAgZWRpdG9yOiBUZXh0RGltZW5zaW9uRWRpdG9yLFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdhcGlTZWxlY3RvcicsXG4gICAgICAgIHBhdGg6ICdjb25maWcuYXBpJyxcbiAgICAgICAgbmFtZTogJ0FQSScsXG4gICAgICAgIGVkaXRvcjogQVBJRWRpdG9yLFxuICAgICAgfSk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQsIFNjYWxhckRpbWVuc2lvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcbmltcG9ydCB7IFNjYWxhckRpbWVuc2lvbkVkaXRvciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2VkaXRvcnMnO1xuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5cbmludGVyZmFjZSBEcm9uZUZyb250RGF0YSB7XG4gIHJvbGxBbmdsZT86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIERyb25lRnJvbnRDb25maWcge1xuICByb2xsQW5nbGU/OiBTY2FsYXJEaW1lbnNpb25Db25maWc7XG59XG5cbmNvbnN0IERyb25lRnJvbnREaXNwbGF5OiBGQzxDYW52YXNFbGVtZW50UHJvcHM8RHJvbmVGcm9udENvbmZpZywgRHJvbmVGcm9udERhdGE+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcblxuICBjb25zdCBkcm9uZUZyb250VHJhbnNmb3JtU3R5bGUgPSBgcm90YXRlKCR7ZGF0YT8ucm9sbEFuZ2xlID8gZGF0YS5yb2xsQW5nbGUgOiAwfWRlZylgO1xuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvbmVGcm9udH1cbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgdmlld0JveD1cIjAgMCAxMzAwIDI5MFwiXG4gICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGRyb25lRnJvbnRUcmFuc2Zvcm1TdHlsZSB9fVxuICAgID5cbiAgICAgIDxnIGNsYXNzTmFtZT1cImFybXNcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiMjhweFwiPlxuICAgICAgICA8bGluZSB4MT1cIjUxMFwiIHgyPVwiMzIwXCIgeTE9XCIxMDBcIiB5Mj1cIjE1MFwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiNTEwXCIgeDI9XCIzMjBcIiB5MT1cIjE5MFwiIHkyPVwiMjEwXCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI3OTBcIiB4Mj1cIjk4MFwiIHkxPVwiMTkwXCIgeTI9XCIyMTBcIiAvPlxuICAgICAgICA8bGluZSB4MT1cIjc5MFwiIHgyPVwiOTgwXCIgeTE9XCIxMDBcIiB5Mj1cIjE1MFwiIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJib2R5XCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VXaWR0aD1cIjI4cHhcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgZD1cIiBNIDUxMCAxMzAgQyA1MTAgMTI0IDUxMCAxMTAgNTEwIDEwMCBDIDUxMCA5MCA1MzAgNzEgNTQwIDcwIEMgNjQwIDYxIDY3MCA2MCA3NjAgNzAgQyA3NzAgNzEgNzkwIDkwIDc5MCAxMDAgUSA3OTAgMTIwIDc5MCAxMzAgTCA3OTAgMTMwIFEgNzkwIDE3NyA3OTAgMTk2IEMgNzkwIDIwNyA3NzAgMjI1IDc2MCAyMjYgQyA2NzAgMjM2IDY0MCAyMzYgNTQwIDIyNiBDIDUzMCAyMjYgNTEwIDIwNiA1MTAgMTk2IFEgNTEwIDE3NyA1MTAgMTMwIFEgNTEwIDEzMyA1MTAgMTMwIFogXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjY1MFwiIGN5PVwiMTYwXCIgcj1cIjQwXCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgPC9nPlxuICAgICAgPGcgY2xhc3NOYW1lPVwibW90b3JzXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VXaWR0aD1cIjI4cHhcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvclwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIGQ9XCIgTSAzMjAgNjAgTCAyNTAgNjAgTCAyNTAgMjMwIEwgMjYwIDI5MCBMIDMxMCAyOTAgTCAzMjAgMjMwIEwgMzIwIDYwIFogXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvclwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIGQ9XCIgTSAxMDUwIDYwIEwgOTgwIDYwIEwgOTgwIDIzMCBMIDk5MCAyOTAgTCAxMDQwIDI5MCBMIDEwNTAgMjMwIEwgMTA1MCA2MCBaIFwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJwcm9wZWxsZXJzXCIgZmlsbD1cImJsYWNrXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvcFwiXG4gICAgICAgICAgZD1cIiBNIDI3MCA2MCBMIDMwMCA2MCBMIDMwMCAyMCBRIDMxMSAzMCAzMzAgMzAgUSAzNDkgMzAgNTcwIDEwIEwgMzAwIDEwIFEgMzAwIDAgMjkwIDAgQyAyODYgMCAyODQgMCAyODAgMCBRIDI3MCAwIDI3MCAxMCBMIDAgMTAgUSAyMjAgMzAgMjQwIDMwIFEgMjYwIDMwIDI3MCAyMCBMIDI3MCA2MCBaIFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvcFwiXG4gICAgICAgICAgZD1cIiBNIDEwMDAgNjAgTCAxMDMwIDYwIEwgMTAzMCAyMCBRIDEwNDEgMzAgMTA2MCAzMCBRIDEwNzkgMzAgMTMwMCAxMCBMIDEwMzAgMTAgUSAxMDMwIDAgMTAyMCAwIEMgMTAxNiAwIDEwMTQgMCAxMDEwIDAgUSAxMDAwIDAgMTAwMCAxMCBMIDczMCAxMCBRIDk1MCAzMCA5NzAgMzAgUSA5OTAgMzAgMTAwMCAyMCBMIDEwMDAgNjAgWiBcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyb25lRnJvbnRJdGVtOiBDYW52YXNFbGVtZW50SXRlbTxhbnksIGFueT4gPSB7XG4gIGlkOiAnZHJvbmVGcm9udCcsXG4gIG5hbWU6ICdEcm9uZSBGcm9udCcsXG4gIGRlc2NyaXB0aW9uOiAnRHJvbmUgZnJvbnQnLFxuXG4gIGRpc3BsYXk6IERyb25lRnJvbnREaXNwbGF5LFxuXG4gIGRlZmF1bHRTaXplOiB7XG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgfSxcblxuICBnZXROZXdPcHRpb25zOiAob3B0aW9ucykgPT4gKHtcbiAgICAuLi5vcHRpb25zLFxuICB9KSxcblxuICAvLyBDYWxsZWQgd2hlbiBkYXRhIGNoYW5nZXNcbiAgcHJlcGFyZURhdGE6IChjdHg6IERpbWVuc2lvbkNvbnRleHQsIGNmZzogRHJvbmVGcm9udENvbmZpZykgPT4ge1xuICAgIGNvbnN0IGRhdGE6IERyb25lRnJvbnREYXRhID0ge1xuICAgICAgcm9sbEFuZ2xlOiBjZmc/LnJvbGxBbmdsZSA/IGN0eC5nZXRTY2FsYXIoY2ZnLnJvbGxBbmdsZSkudmFsdWUoKSA6IDAsXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIHJlZ2lzdGVyT3B0aW9uc1VJOiAoYnVpbGRlcikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydEcm9uZSBGcm9udCddO1xuICAgIGJ1aWxkZXIuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgaWQ6ICdyb2xsQW5nbGUnLFxuICAgICAgcGF0aDogJ2NvbmZpZy5yb2xsQW5nbGUnLFxuICAgICAgbmFtZTogJ1JvbGwgQW5nbGUnLFxuICAgICAgZWRpdG9yOiBTY2FsYXJEaW1lbnNpb25FZGl0b3IsXG4gICAgfSk7XG4gIH0sXG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGRyb25lRnJvbnQ6IGNzc2BcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQsIFNjYWxhckRpbWVuc2lvbkNvbmZpZyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcbmltcG9ydCB7IFNjYWxhckRpbWVuc2lvbkVkaXRvciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2VkaXRvcnMnO1xuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5cbmludGVyZmFjZSBEcm9uZVNpZGVEYXRhIHtcbiAgcGl0Y2hBbmdsZT86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIERyb25lU2lkZUNvbmZpZyB7XG4gIHBpdGNoQW5nbGU/OiBTY2FsYXJEaW1lbnNpb25Db25maWc7XG59XG5cbmNvbnN0IERyb25lU2lkZURpc3BsYXk6IEZDPENhbnZhc0VsZW1lbnRQcm9wczxEcm9uZVNpZGVDb25maWcsIERyb25lU2lkZURhdGE+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcblxuICBjb25zdCBkcm9uZVNpZGVQaXRjaFRyYW5zZm9ybVN0eWxlID0gYHJvdGF0ZSgke2RhdGE/LnBpdGNoQW5nbGUgPyBkYXRhLnBpdGNoQW5nbGUgOiAwfWRlZylgO1xuXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvbmVTaWRlfVxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDEzMDAgMjkwXCJcbiAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogZHJvbmVTaWRlUGl0Y2hUcmFuc2Zvcm1TdHlsZSB9fVxuICAgID5cbiAgICAgIDxnIGNsYXNzTmFtZT1cImFybXNcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZVdpZHRoPVwiMjhweFwiPlxuICAgICAgICA8bGluZSB4MT1cIjUxMFwiIHgyPVwiMzIwXCIgeTE9XCIxMDBcIiB5Mj1cIjE1MFwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiNTEwXCIgeDI9XCIzMjBcIiB5MT1cIjE5MFwiIHkyPVwiMjEwXCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI3OTBcIiB4Mj1cIjk4MFwiIHkxPVwiMTkwXCIgeTI9XCIyMTBcIiAvPlxuICAgICAgICA8bGluZSB4MT1cIjc5MFwiIHgyPVwiOTgwXCIgeTE9XCIxMDBcIiB5Mj1cIjE1MFwiIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJib2R5XCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2VXaWR0aD1cIjI4cHhcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgZD1cIiBNIDUxMCAxMzAgQyA1MTAgMTI0IDUxMCAxMTAgNTEwIDEwMCBDIDUxMCA5MCA1MzAgNzEgNTQwIDcwIEMgNjQwIDYxIDY3MCA2MCA3NjAgNzAgQyA3NzAgNzEgNzkwIDkwIDc5MCAxMDAgUSA3OTAgMTIwIDc5MCAxMzAgTCA3OTAgMTMwIFEgNzkwIDE3NyA3OTAgMTk2IEMgNzkwIDIwNyA3NzAgMjI1IDc2MCAyMjYgQyA2NzAgMjM2IDY0MCAyMzYgNTQwIDIyNiBDIDUzMCAyMjYgNTEwIDIwNiA1MTAgMTk2IFEgNTEwIDE3NyA1MTAgMTMwIFEgNTEwIDEzMyA1MTAgMTMwIFogXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGNsYXNzTmFtZT1cIm1vdG9yc1wiIHN0cm9rZT1cImJsYWNrXCIgc3Ryb2tlV2lkdGg9XCIyOHB4XCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW90b3JcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBkPVwiIE0gMzIwIDYwIEwgMjUwIDYwIEwgMjUwIDIzMCBMIDI2MCAyOTAgTCAzMTAgMjkwIEwgMzIwIDIzMCBMIDMyMCA2MCBaIFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW90b3JcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBkPVwiIE0gMTA1MCA2MCBMIDk4MCA2MCBMIDk4MCAyMzAgTCA5OTAgMjkwIEwgMTA0MCAyOTAgTCAxMDUwIDIzMCBMIDEwNTAgNjAgWiBcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPGcgY2xhc3NOYW1lPVwicHJvcGVsbGVyc1wiIGZpbGw9XCJibGFja1wiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb3BcIlxuICAgICAgICAgIGQ9XCIgTSAyNzAgNjAgTCAzMDAgNjAgTCAzMDAgMjAgUSAzMTEgMzAgMzMwIDMwIFEgMzQ5IDMwIDU3MCAxMCBMIDMwMCAxMCBRIDMwMCAwIDI5MCAwIEMgMjg2IDAgMjg0IDAgMjgwIDAgUSAyNzAgMCAyNzAgMTAgTCAwIDEwIFEgMjIwIDMwIDI0MCAzMCBRIDI2MCAzMCAyNzAgMjAgTCAyNzAgNjAgWiBcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb3BcIlxuICAgICAgICAgIGQ9XCIgTSAxMDAwIDYwIEwgMTAzMCA2MCBMIDEwMzAgMjAgUSAxMDQxIDMwIDEwNjAgMzAgUSAxMDc5IDMwIDEzMDAgMTAgTCAxMDMwIDEwIFEgMTAzMCAwIDEwMjAgMCBDIDEwMTYgMCAxMDE0IDAgMTAxMCAwIFEgMTAwMCAwIDEwMDAgMTAgTCA3MzAgMTAgUSA5NTAgMzAgOTcwIDMwIFEgOTkwIDMwIDEwMDAgMjAgTCAxMDAwIDYwIFogXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcm9uZVNpZGVJdGVtOiBDYW52YXNFbGVtZW50SXRlbTxhbnksIGFueT4gPSB7XG4gIGlkOiAnZHJvbmVTaWRlJyxcbiAgbmFtZTogJ0Ryb25lIFNpZGUnLFxuICBkZXNjcmlwdGlvbjogJ0Ryb25lIFNpZGUnLFxuXG4gIGRpc3BsYXk6IERyb25lU2lkZURpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6IChvcHRpb25zKSA9PiAoe1xuICAgIC4uLm9wdGlvbnMsXG4gIH0pLFxuXG4gIC8vIENhbGxlZCB3aGVuIGRhdGEgY2hhbmdlc1xuICBwcmVwYXJlRGF0YTogKGN0eDogRGltZW5zaW9uQ29udGV4dCwgY2ZnOiBEcm9uZVNpZGVDb25maWcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBEcm9uZVNpZGVEYXRhID0ge1xuICAgICAgcGl0Y2hBbmdsZTogY2ZnPy5waXRjaEFuZ2xlID8gY3R4LmdldFNjYWxhcihjZmcucGl0Y2hBbmdsZSkudmFsdWUoKSA6IDAsXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuXG4gIHJlZ2lzdGVyT3B0aW9uc1VJOiAoYnVpbGRlcikgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydEcm9uZSBTaWRlJ107XG4gICAgYnVpbGRlci5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgY2F0ZWdvcnksXG4gICAgICBpZDogJ3BpdGNoQW5nbGUnLFxuICAgICAgcGF0aDogJ2NvbmZpZy5waXRjaEFuZ2xlJyxcbiAgICAgIG5hbWU6ICdQaXRjaCBBbmdsZScsXG4gICAgICBlZGl0b3I6IFNjYWxhckRpbWVuc2lvbkVkaXRvcixcbiAgICB9KTtcbiAgfSxcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZHJvbmVTaWRlOiBjc3NgXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBEaW1lbnNpb25Db250ZXh0LCBTY2FsYXJEaW1lbnNpb25Db25maWcgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucyc7XG5pbXBvcnQgeyBTY2FsYXJEaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzJztcblxuaW1wb3J0IHsgQ2FudmFzRWxlbWVudEl0ZW0sIENhbnZhc0VsZW1lbnRQcm9wcyB9IGZyb20gJy4uL2VsZW1lbnQnO1xuXG5pbnRlcmZhY2UgRHJvbmVUb3BEYXRhIHtcbiAgYlJpZ2h0Um90b3JSUE0/OiBudW1iZXI7XG4gIGJMZWZ0Um90b3JSUE0/OiBudW1iZXI7XG4gIGZSaWdodFJvdG9yUlBNPzogbnVtYmVyO1xuICBmTGVmdFJvdG9yUlBNPzogbnVtYmVyO1xuICB5YXdBbmdsZT86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIERyb25lVG9wQ29uZmlnIHtcbiAgYlJpZ2h0Um90b3JSUE0/OiBTY2FsYXJEaW1lbnNpb25Db25maWc7XG4gIGJMZWZ0Um90b3JSUE0/OiBTY2FsYXJEaW1lbnNpb25Db25maWc7XG4gIGZSaWdodFJvdG9yUlBNPzogU2NhbGFyRGltZW5zaW9uQ29uZmlnO1xuICBmTGVmdFJvdG9yUlBNPzogU2NhbGFyRGltZW5zaW9uQ29uZmlnO1xuICB5YXdBbmdsZT86IFNjYWxhckRpbWVuc2lvbkNvbmZpZztcbn1cblxuY29uc3QgRHJvbmVUb3BEaXNwbGF5OiBGQzxDYW52YXNFbGVtZW50UHJvcHM8RHJvbmVUb3BDb25maWcsIERyb25lVG9wRGF0YT4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGZSaWdodFJvdG9yQW5pbWF0aW9uID0gYHNwaW4gJHtkYXRhPy5mUmlnaHRSb3RvclJQTSA/IDYwIC8gTWF0aC5hYnMoZGF0YS5mUmlnaHRSb3RvclJQTSkgOiAwfXMgbGluZWFyIGluZmluaXRlYDtcblxuICBjb25zdCBmTGVmdFJvdG9yQW5pbWF0aW9uID0gYHNwaW4gJHtkYXRhPy5mTGVmdFJvdG9yUlBNID8gNjAgLyBNYXRoLmFicyhkYXRhLmZMZWZ0Um90b3JSUE0pIDogMH1zIGxpbmVhciBpbmZpbml0ZWA7XG5cbiAgY29uc3QgYlJpZ2h0Um90b3JBbmltYXRpb24gPSBgc3BpbiAke2RhdGE/LmJSaWdodFJvdG9yUlBNID8gNjAgLyBNYXRoLmFicyhkYXRhLmJSaWdodFJvdG9yUlBNKSA6IDB9cyBsaW5lYXIgaW5maW5pdGVgO1xuXG4gIGNvbnN0IGJMZWZ0Um90b3JBbmltYXRpb24gPSBgc3BpbiAke2RhdGE/LmJMZWZ0Um90b3JSUE0gPyA2MCAvIE1hdGguYWJzKGRhdGEuYkxlZnRSb3RvclJQTSkgOiAwfXMgbGluZWFyIGluZmluaXRlYDtcblxuICBjb25zdCBkcm9uZVRvcFRyYW5zZm9ybVN0eWxlID0gYHJvdGF0ZSgke2RhdGE/Lnlhd0FuZ2xlID8gZGF0YS55YXdBbmdsZSA6IDB9ZGVnKWA7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgIHZpZXdCb3g9XCItNDMgLTQzIDY0MCA2NDBcIlxuICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGRyb25lVG9wVHJhbnNmb3JtU3R5bGUgfX1cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiIE0gMTM3Ljk1IDEyNy45NjcgQyAxMzcuMTQgMTI3LjE1NyAxMzYuMTg5IDEyNi41OCAxMzUuMTc4IDEyNi4yMTggQyAxMzguMTczIDEyMS41NDUgMTM5Ljk2NyAxMTYuMDM2IDE0MC4xMjUgMTEwLjEyMyBMIDIxNy42NCAxNTEuODYyIEMgMjE0LjA0OSAxNTcuNDExIDIxMS44IDE2My45MjIgMjExLjM4NiAxNzAuOTUgTCAyMDkuNjk0IDE5OS43MTIgTCAxMzcuOTUgMTI3Ljk2NyBMIDEzNy45NSAxMjcuOTY3IEwgMTM3Ljk1IDEyNy45NjcgTCAxMzcuOTUgMTI3Ljk2NyBMIDEzNy45NSAxMjcuOTY3IEwgMTM3Ljk1IDEyNy45NjcgTCAxMzcuOTUgMTI3Ljk2NyBMIDEzNy45NSAxMjcuOTY3IEwgMTM3Ljk1IDEyNy45NjcgWiAgTSAxMzQuMjY4IDQyNi45ODEgQyAxMzAuMjExIDQyMS4zMTQgMTI0LjMyOCA0MTcuMDQ1IDExNy40ODIgNDE1LjA0MSBMIDIwMS45OTkgMzMwLjUyMyBMIDIwMS4zODUgMzQwLjk1NSBDIDIwMC42NyAzNTMuMTA3IDIwMi44MjkgMzY0LjkxNCAyMDcuNTYzIDM3NS42NzMgTCAxMzQuMjY4IDQyNi45ODEgTCAxMzQuMjY4IDQyNi45ODEgTCAxMzQuMjY4IDQyNi45ODEgTCAxMzQuMjY4IDQyNi45ODEgTCAxMzQuMjY4IDQyNi45ODEgTCAxMzQuMjY4IDQyNi45ODEgTCAxMzQuMjY4IDQyNi45ODEgTCAxMzQuMjY4IDQyNi45ODEgWiAgTSAzMjQuNzY1IDM3My42NzMgTCAyMjguNTI3IDM3My42NzMgUSAyMTUuMzc0IDM1OC42MTEgMjE2LjM2MSAzNDEuODM1IEwgMjI2LjM2MSAxNzEuODMyIEMgMjI2LjgyNSAxNjMuOTQgMjMxLjAxMiAxNTcuMDk2IDIzNy4xNDYgMTUyLjk1NyBMIDMxNi4xNDYgMTUyLjk1NyBDIDMyMi4yOCAxNTcuMDk2IDMyNi40NjYgMTYzLjk0IDMyNi45MzEgMTcxLjgzMiBMIDMzNi45MzEgMzQxLjgzNSBRIDMzNy45MTggMzU4LjYxMSAzMjQuNzY1IDM3My42NzMgTCAzMjQuNzY1IDM3My42NzMgTCAzMjQuNzY1IDM3My42NzMgTCAzMjQuNzY1IDM3My42NzMgTCAzMjQuNzY1IDM3My42NzMgTCAzMjQuNzY1IDM3My42NzMgTCAzMjQuNzY1IDM3My42NzMgWiAgTSA0MzUuODEgNDE1LjA0MSBDIDQyOC45NjQgNDE3LjA0NSA0MjMuMDgxIDQyMS4zMTQgNDE5LjAyNCA0MjYuOTgxIEwgMzQ1LjcyNyAzNzUuNjczIEMgMzUwLjQ2MSAzNjQuOTE0IDM1Mi42MiAzNTMuMTA3IDM1MS45MDUgMzQwLjk1NSBMIDM1MS4yOTEgMzMwLjUyMyBMIDQzNS44MSA0MTUuMDQxIEwgNDM1LjgxIDQxNS4wNDEgTCA0MzUuODEgNDE1LjA0MSBMIDQzNS44MSA0MTUuMDQxIEwgNDM1LjgxIDQxNS4wNDEgTCA0MzUuODEgNDE1LjA0MSBaICBNIDM0My41OTYgMTk5LjcxMyBMIDM0MS45MDQgMTcwLjk1MSBDIDM0MS40OSAxNjMuOTIzIDMzOS4yNDIgMTU3LjQxMSAzMzUuNjUxIDE1MS44NjMgTCA0MTMuMTY3IDExMC4xMjQgQyA0MTMuMzI1IDExNi4wMzcgNDE1LjExOSAxMjEuNTQ2IDQxOC4xMTQgMTI2LjIxOSBDIDQxNy4xMDMgMTI2LjU4MSA0MTYuMTUyIDEyNy4xNTggNDE1LjM0MiAxMjcuOTY4IEwgMzQzLjU5NiAxOTkuNzEzIEwgMzQzLjU5NiAxOTkuNzEzIEwgMzQzLjU5NiAxOTkuNzEzIEwgMzQzLjU5NiAxOTkuNzEzIEwgMzQzLjU5NiAxOTkuNzEzIFogIE0gNDQ0LjY0NiA5Mi43NzEgQyA0NTMuNzQ0IDkyLjc3MSA0NjEuMTQ2IDEwMC4xNzIgNDYxLjE0NiAxMDkuMjcxIEMgNDYxLjE0NiAxMTguMzY5IDQ1My43NDQgMTI1Ljc3MSA0NDQuNjQ2IDEyNS43NzEgQyA0MzUuNTQ4IDEyNS43NzEgNDI4LjE0NiAxMTguMzY5IDQyOC4xNDYgMTA5LjI3MSBDIDQyOC4xNDYgMTAwLjE3MiA0MzUuNTQ4IDkyLjc3MSA0NDQuNjQ2IDkyLjc3MSBMIDQ0NC42NDYgOTIuNzcxIEwgNDQ0LjY0NiA5Mi43NzEgTCA0NDQuNjQ2IDkyLjc3MSBaICBNIDEwOC42NDcgOTIuNzcxIEMgMTE3Ljc0NSA5Mi43NzEgMTI1LjE0NyAxMDAuMTcyIDEyNS4xNDcgMTA5LjI3MSBDIDEyNS4xNDcgMTE4LjM2OSAxMTcuNzQ1IDEyNS43NzEgMTA4LjY0NyAxMjUuNzcxIEMgOTkuNTQ5IDEyNS43NzEgOTIuMTQ3IDExOC4zNjkgOTIuMTQ3IDEwOS4yNzEgQyA5Mi4xNDcgMTAwLjE3MiA5OS41NDkgOTIuNzcxIDEwOC42NDcgOTIuNzcxIEwgMTA4LjY0NyA5Mi43NzEgTCAxMDguNjQ3IDkyLjc3MSBaICBNIDEwOC42NDcgNDYxLjc3MSBDIDk5LjU0OSA0NjEuNzcxIDkyLjE0NyA0NTQuMzY5IDkyLjE0NyA0NDUuMjcxIEMgOTIuMTQ3IDQzNi4xNzIgOTkuNTQ5IDQyOC43NzEgMTA4LjY0NyA0MjguNzcxIEMgMTE3Ljc0NSA0MjguNzcxIDEyNS4xNDcgNDM2LjE3MiAxMjUuMTQ3IDQ0NS4yNzEgQyAxMjUuMTQ3IDQ1NC4zNjkgMTE3Ljc0NSA0NjEuNzcxIDEwOC42NDcgNDYxLjc3MSBMIDEwOC42NDcgNDYxLjc3MSBaICBNIDkyLjMyMiAxMzYuMjAyIEMgOTcuMDg2IDEzOS4xIDEwMi42NzUgMTQwLjc3MSAxMDguNjQ3IDE0MC43NzEgQyAxMTQuODgzIDE0MC43NzEgMTIwLjY5NyAxMzguOTQxIDEyNS41OTQgMTM1LjgwMiBDIDEyNS45NTYgMTM2LjgxMyAxMjYuNTM0IDEzNy43NjQgMTI3LjM0MyAxMzguNTczIEwgMjA3LjM0MiAyMTguNTczIEMgMjA3LjcxMSAyMTguOTQyIDIwOC4xMDkgMjE5LjI2NCAyMDguNTI4IDIxOS41NCBMIDIwMy4yMTIgMzA5LjkwOCBDIDIwMS43OTQgMzEwLjE4MiAyMDAuNDQgMzEwLjg2OSAxOTkuMzQyIDMxMS45NjcgTCA5NS4zNDMgNDE1Ljk2NyBDIDk0Ljk1NCA0MTYuMzU2IDk0LjYyIDQxNi43NzkgOTQuMzM1IDQxNy4yMjQgQyA5My42NTEgNDE3LjU3NSA5Mi45NzYgNDE3Ljk0MiA5Mi4zMjIgNDE4LjM0IFEgODQuNjE1IDQyNC4xODIgODEuNzE2IDQyOC45NDYgQyA3OC44MTcgNDMzLjcxIDc3LjE0NyA0MzkuMjk5IDc3LjE0NyA0NDUuMjcxIEMgNzcuMTQ3IDQ2Mi42NCA5MS4yNzggNDc2Ljc3MSAxMDguNjQ3IDQ3Ni43NzEgQyAxMTQuNjE5IDQ3Ni43NzEgMTIwLjIwOCA0NzUuMSAxMjQuOTcyIDQ3Mi4yMDIgQyAxMjkuNzM2IDQ2OS4zMDQgMTMyLjY3OCA0NjYuMzYgMTM1LjU3NyA0NjEuNTk2IEMgMTM4LjQ3NiA0NTYuODMyIDE0MC4xNDcgNDUxLjI0MyAxNDAuMTQ3IDQ0NS4yNzEgQyAxNDAuMTQ3IDQ0My45NDMgMTQwLjA1NSA0NDIuNjM3IDEzOS44OTUgNDQxLjM1MiBMIDIxNC45OTcgMzg4Ljc4IEMgMjE3LjA1IDM5MS42NzcgMzM2LjI0MiAzOTEuNjc4IDMzOC4yOTUgMzg4Ljc4IEwgNDEzLjM5OCA0NDEuMzUyIEMgNDEzLjIzOCA0NDIuNjM3IDQxMy4xNDYgNDQzLjk0MyA0MTMuMTQ2IDQ0NS4yNzEgQyA0MTMuMTQ2IDQ1MS4yNDMgNDE0LjgxNyA0NTYuODMyIDQxNy43MTUgNDYxLjU5NiBDIDQyMC42MTMgNDY2LjM2IDQyMy41NTcgNDY5LjMwNCA0MjguMzIxIDQ3Mi4yMDIgQyA0MzMuMDg1IDQ3NS4xIDQzOC42NzQgNDc2Ljc3MSA0NDQuNjQ2IDQ3Ni43NzEgQyA0NjIuMDE1IDQ3Ni43NzEgNDc2LjE0NiA0NjIuNjQgNDc2LjE0NiA0NDUuMjcxIEMgNDc2LjE0NiA0MzkuMjk5IDQ3NC40NzUgNDMzLjcxIDQ3MS41NzcgNDI4Ljk0NiBDIDQ2OC42NzkgNDI0LjE4MiA0NTkuNjQyIDQxNy41NzUgNDU4Ljk1OCA0MTcuMjI0IEMgNDU4LjY3MiA0MTYuNzc5IDQ1OC4zMzkgNDE2LjM1NiA0NTcuOTUgNDE1Ljk2NyBMIDM1My45NSAzMTEuOTY3IEMgMzUyLjg1MiAzMTAuODY5IDM1MS40OTggMzEwLjE4MiAzNTAuMDggMzA5LjkwOCBMIDM0NC43NjQgMjE5LjU0IEMgMzQ1LjE4MyAyMTkuMjY0IDM0NS41ODEgMjE4Ljk0MiAzNDUuOTUgMjE4LjU3MyBMIDQyNS45NSAxMzguNTczIEMgNDI2Ljc2IDEzNy43NjMgNDI3LjMzNyAxMzYuODEyIDQyNy42OTkgMTM1LjgwMiBDIDQzMi41OTYgMTM4Ljk0MSA0MzguNDA5IDE0MC43NzEgNDQ0LjY0NiAxNDAuNzcxIEMgNDUwLjYxOCAxNDAuNzcxIDQ1Ni4yMDcgMTM5LjEgNDYwLjk3MSAxMzYuMjAyIEMgNDY1LjczNSAxMzMuMzA0IDQ2OC42NzkgMTMwLjM2IDQ3MS41NzcgMTI1LjU5NiBDIDQ3NC40NzUgMTIwLjgzMiA0NzYuMTQ2IDExNS4yNDMgNDc2LjE0NiAxMDkuMjcxIEMgNDc2LjE0NiA5MS45MDMgNDYyLjAxNSA3Ny43NzIgNDQ0LjY0NiA3Ny43NzIgQyA0MzguNjc0IDc3Ljc3MiA0MzMuMDg1IDc5LjQ0MiA0MjguMzIxIDgyLjM0IEwgNDE2LjIxNSA5MS40NDYgTCAzMjQuNzY1IDE0MC42ODggQyAzMTguNDAyIDEzNi4zMjQgMzEwLjcxOCAxMzMuNzcxIDMwMi40NzMgMTMzLjc3MSBMIDI1MC44MTkgMTMzLjc3MSBDIDI0Mi41NzQgMTMzLjc3MSAyMzQuODkgMTM2LjMyNCAyMjguNTI3IDE0MC42ODggTCAxMzcuMDc4IDkxLjQ0NiBMIDEyNC45NzIgODIuMzQgQyAxMjAuMjA4IDc5LjQ0MiAxMTQuNjE5IDc3Ljc3MiAxMDguNjQ3IDc3Ljc3MiBDIDkxLjI3OCA3Ny43NzIgNzcuMTQ3IDkxLjkwMyA3Ny4xNDcgMTA5LjI3MSBDIDc3LjE0NyAxMTUuMjQzIDc4LjgxOCAxMjAuODMyIDgxLjcxNiAxMjUuNTk1IEMgODQuNjE0IDEzMC4zNTggODcuNTU4IDEzMy4zMDQgOTIuMzIyIDEzNi4yMDIgTCA5Mi4zMjIgMTM2LjIwMiBMIDkyLjMyMiAxMzYuMjAyIEwgOTIuMzIyIDEzNi4yMDIgTCA5Mi4zMjIgMTM2LjIwMiBMIDkyLjMyMiAxMzYuMjAyIEwgOTIuMzIyIDEzNi4yMDIgTCA5Mi4zMjIgMTM2LjIwMiBMIDkyLjMyMiAxMzYuMjAyIFogIE0gNDQ0LjY0NiA0NjEuNzcxIEMgNDM1LjU0OCA0NjEuNzcxIDQyOC4xNDYgNDU0LjM2OSA0MjguMTQ2IDQ0NS4yNzEgQyA0MjguMTQ2IDQzNi4xNzIgNDM1LjU0OCA0MjguNzcxIDQ0NC42NDYgNDI4Ljc3MSBDIDQ1My43NDQgNDI4Ljc3MSA0NjEuMTQ2IDQzNi4xNzIgNDYxLjE0NiA0NDUuMjcxIEMgNDYxLjE0NiA0NTQuMzY5IDQ1My43NDQgNDYxLjc3MSA0NDQuNjQ2IDQ2MS43NzEgWiBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCIgTSAyNTkuNDU4IDMzNC4yMzUgTCAyNTkuNDU4IDMzNy4yMTEgTCAyNTQuNTE0IDMzNy4yMTEgTCAyNTQuNTE0IDM1MC43OTUgTCAyNTAuODQyIDM1MC43OTUgTCAyNTAuODQyIDMzNy4yMTEgTCAyNDUuODk4IDMzNy4yMTEgTCAyNDUuODk4IDMzNC4yMzUgTCAyNTkuNDU4IDMzNC4yMzUgWiAgTSAyNjYuMjI2IDM0Ny45MzkgTCAyNzIuNTg2IDM0Ny45MzkgTCAyNzIuNzU0IDM1MC42MjcgTCAyNzIuNzU0IDM1MC42MjcgUSAyNzAuNDk4IDM1MC44NjcgMjY1LjA3NCAzNTAuODY3IEwgMjY1LjA3NCAzNTAuODY3IEwgMjY1LjA3NCAzNTAuODY3IFEgMjYzLjQxOCAzNTAuODY3IDI2Mi40MzQgMzQ5Ljk2NyBMIDI2Mi40MzQgMzQ5Ljk2NyBMIDI2Mi40MzQgMzQ5Ljk2NyBRIDI2MS40NSAzNDkuMDY3IDI2MS40MjYgMzQ3LjUzMSBMIDI2MS40MjYgMzQ3LjUzMSBMIDI2MS40MjYgMzM3LjQ5OSBMIDI2MS40MjYgMzM3LjQ5OSBRIDI2MS40NSAzMzUuOTYzIDI2Mi40MzQgMzM1LjA2MyBMIDI2Mi40MzQgMzM1LjA2MyBMIDI2Mi40MzQgMzM1LjA2MyBRIDI2My40MTggMzM0LjE2MyAyNjUuMDc0IDMzNC4xNjMgTCAyNjUuMDc0IDMzNC4xNjMgTCAyNjUuMDc0IDMzNC4xNjMgUSAyNzAuNDk4IDMzNC4xNjMgMjcyLjc1NCAzMzQuNDAzIEwgMjcyLjc1NCAzMzQuNDAzIEwgMjcyLjU4NiAzMzcuMTE1IEwgMjY2LjIyNiAzMzcuMTE1IEwgMjY2LjIyNiAzMzcuMTE1IFEgMjY1LjYyNiAzMzcuMTE1IDI2NS4zNjIgMzM3LjQwMyBMIDI2NS4zNjIgMzM3LjQwMyBMIDI2NS4zNjIgMzM3LjQwMyBRIDI2NS4wOTggMzM3LjY5MSAyNjUuMDk4IDMzOC4zMzkgTCAyNjUuMDk4IDMzOC4zMzkgTCAyNjUuMDk4IDM0MC44NTkgTCAyNzEuNjk4IDM0MC44NTkgTCAyNzEuNjk4IDM0My40OTkgTCAyNjUuMDk4IDM0My40OTkgTCAyNjUuMDk4IDM0Ni42OTEgTCAyNjUuMDk4IDM0Ni42OTEgUSAyNjUuMDk4IDM0Ny4zNjMgMjY1LjM2MiAzNDcuNjUxIEwgMjY1LjM2MiAzNDcuNjUxIEwgMjY1LjM2MiAzNDcuNjUxIFEgMjY1LjYyNiAzNDcuOTM5IDI2Ni4yMjYgMzQ3LjkzOSBMIDI2Ni4yMjYgMzQ3LjkzOSBaICBNIDI3NS4yMDIgMzMzLjk5NSBMIDI3OC43MyAzMzMuOTk1IEwgMjc4LjczIDM0Ni45MzEgTCAyNzguNzMgMzQ2LjkzMSBRIDI3OC43MyAzNDguMTMxIDI4MC4wNzQgMzQ4LjEzMSBMIDI4MC4wNzQgMzQ4LjEzMSBMIDI4MS4wMzQgMzQ4LjEzMSBMIDI4MS40NDIgMzUwLjYwMyBMIDI4MS40NDIgMzUwLjYwMyBRIDI4MC41MyAzNTEuMDgzIDI3OC42MSAzNTEuMDgzIEwgMjc4LjYxIDM1MS4wODMgTCAyNzguNjEgMzUxLjA4MyBRIDI3Ny4wMjYgMzUxLjA4MyAyNzYuMTE0IDM1MC4yMzEgTCAyNzYuMTE0IDM1MC4yMzEgTCAyNzYuMTE0IDM1MC4yMzEgUSAyNzUuMjAyIDM0OS4zNzkgMjc1LjIwMiAzNDcuODE5IEwgMjc1LjIwMiAzNDcuODE5IEwgMjc1LjIwMiAzMzMuOTk1IFogIE0gMjgzLjA1IDMzMy45OTUgTCAyODYuNTc4IDMzMy45OTUgTCAyODYuNTc4IDM0Ni45MzEgTCAyODYuNTc4IDM0Ni45MzEgUSAyODYuNTc4IDM0OC4xMzEgMjg3LjkyMiAzNDguMTMxIEwgMjg3LjkyMiAzNDguMTMxIEwgMjg4Ljg4MiAzNDguMTMxIEwgMjg5LjI5IDM1MC42MDMgTCAyODkuMjkgMzUwLjYwMyBRIDI4OC4zNzggMzUxLjA4MyAyODYuNDU4IDM1MS4wODMgTCAyODYuNDU4IDM1MS4wODMgTCAyODYuNDU4IDM1MS4wODMgUSAyODQuODc0IDM1MS4wODMgMjgzLjk2MiAzNTAuMjMxIEwgMjgzLjk2MiAzNTAuMjMxIEwgMjgzLjk2MiAzNTAuMjMxIFEgMjgzLjA1IDM0OS4zNzkgMjgzLjA1IDM0Ny44MTkgTCAyODMuMDUgMzQ3LjgxOSBMIDI4My4wNSAzMzMuOTk1IFogIE0gMjkyLjA4NiAzMzUuNzU5IEwgMjkyLjA4NiAzMzUuNzU5IEwgMjkyLjA4NiAzMzUuNzU5IFEgMjkzLjYzNCAzMzMuOTIzIDI5Ny42MTggMzMzLjkyMyBMIDI5Ny42MTggMzMzLjkyMyBMIDI5Ny42MTggMzMzLjkyMyBRIDMwMS42MDIgMzMzLjkyMyAzMDMuMTYyIDMzNS43NTkgTCAzMDMuMTYyIDMzNS43NTkgTCAzMDMuMTYyIDMzNS43NTkgUSAzMDQuNzIyIDMzNy41OTUgMzA0LjcyMiAzNDIuNTE1IEwgMzA0LjcyMiAzNDIuNTE1IEwgMzA0LjcyMiAzNDIuNTE1IFEgMzA0LjcyMiAzNDcuNDM1IDMwMy4xNjIgMzQ5LjI3MSBMIDMwMy4xNjIgMzQ5LjI3MSBMIDMwMy4xNjIgMzQ5LjI3MSBRIDMwMS42MDIgMzUxLjEwNyAyOTcuNjE4IDM1MS4xMDcgTCAyOTcuNjE4IDM1MS4xMDcgTCAyOTcuNjE4IDM1MS4xMDcgUSAyOTMuNjM0IDM1MS4xMDcgMjkyLjA4NiAzNDkuMjcxIEwgMjkyLjA4NiAzNDkuMjcxIEwgMjkyLjA4NiAzNDkuMjcxIFEgMjkwLjUzOCAzNDcuNDM1IDI5MC41MzggMzQyLjUxNSBMIDI5MC41MzggMzQyLjUxNSBMIDI5MC41MzggMzQyLjUxNSBRIDI5MC41MzggMzM3LjU5NSAyOTIuMDg2IDMzNS43NTkgWiAgTSAzMDAuMTc0IDMzOC4wNTEgTCAzMDAuMTc0IDMzOC4wNTEgTCAzMDAuMTc0IDMzOC4wNTEgUSAyOTkuNDkgMzM2Ljg3NSAyOTcuNjE4IDMzNi44NzUgTCAyOTcuNjE4IDMzNi44NzUgTCAyOTcuNjE4IDMzNi44NzUgUSAyOTUuNzQ2IDMzNi44NzUgMjk1LjA2MiAzMzguMDUxIEwgMjk1LjA2MiAzMzguMDUxIEwgMjk1LjA2MiAzMzguMDUxIFEgMjk0LjM3OCAzMzkuMjI3IDI5NC4zNzggMzQyLjUxNSBMIDI5NC4zNzggMzQyLjUxNSBMIDI5NC4zNzggMzQyLjUxNSBRIDI5NC4zNzggMzQ1LjgwMyAyOTUuMDYyIDM0Ni45NzkgTCAyOTUuMDYyIDM0Ni45NzkgTCAyOTUuMDYyIDM0Ni45NzkgUSAyOTUuNzQ2IDM0OC4xNTUgMjk3LjYxOCAzNDguMTU1IEwgMjk3LjYxOCAzNDguMTU1IEwgMjk3LjYxOCAzNDguMTU1IFEgMjk5LjQ5IDM0OC4xNTUgMzAwLjE3NCAzNDYuOTc5IEwgMzAwLjE3NCAzNDYuOTc5IEwgMzAwLjE3NCAzNDYuOTc5IFEgMzAwLjg1OCAzNDUuODAzIDMwMC44NTggMzQyLjUxNSBMIDMwMC44NTggMzQyLjUxNSBMIDMwMC44NTggMzQyLjUxNSBRIDMwMC44NTggMzM5LjIyNyAzMDAuMTc0IDMzOC4wNTEgWiBcIlxuICAgICAgLz5cbiAgICAgIDxnIGNsYXNzTmFtZT1cInByb3BlbGxlci1ncm91cFwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnByb3BlbGxlcn0gJHtzdHlsZXMucHJvcGVsbGVyQ1d9YH1cbiAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb246IGJSaWdodFJvdG9yQW5pbWF0aW9uIH19XG4gICAgICAgICAgZD1cIiBNIDQ2MS41NjMgNDE4Ljc3IEwgNDYzLjk5MiA0MTYuMzQgUSA0NjUuNDk1IDQwNy4xMTYgNDY2LjQ2MSA0MDAuMzk1IEMgNDY3LjQyNiAzOTMuNjc1IDQ2OS4zNjMgMzg4LjA4NyA0NzQuNzMxIDM4My4yODQgUSA1MzMuODYyIDM0MS41MTQgNTM4LjE5NiAzMzguODU5IEMgNTQyLjUyOSAzMzYuMjAzIDU0OC4zNDUgMzM0LjI5OSA1NTEuNDkyIDMzOC4yOSBDIDU1NC42MzkgMzQyLjI4MiA1NTMuNDgxIDM0Ni4wMiA1NDkuNDE5IDM1MC4wODIgTCA0NzEuMTQ3IDQyOC4zNTQgTCA0NjEuNTYzIDQxOC43NyBaICBNIDQyNy43MjkgNDcxLjc3MiBMIDQyNS4yOTkgNDc0LjIwMiBRIDQyMy43OTcgNDgzLjQyNiA0MjIuODMxIDQ5MC4xNDYgQyA0MjEuODY2IDQ5Ni44NjcgNDE5LjkyOSA1MDIuNDU0IDQxNC41NjEgNTA3LjI1NyBRIDM1NS40MyA1NDkuMDI4IDM1MS4wOTYgNTUxLjY4MyBDIDM0Ni43NjMgNTU0LjMzOCAzNDAuOTQ3IDU1Ni4yNDMgMzM3LjggNTUyLjI1MSBDIDMzNC42NTMgNTQ4LjI2IDMzNS44MTEgNTQ0LjUyMiAzMzkuODczIDU0MC40NiBMIDQxOC4xNDUgNDYyLjE4NyBMIDQyNy43MjkgNDcxLjc3MiBaIFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJvcGVsbGVyfSAke3N0eWxlcy5wcm9wZWxsZXJDQ1d9YH1cbiAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb246IGZSaWdodFJvdG9yQW5pbWF0aW9uIH19XG4gICAgICAgICAgZD1cIiBNIDQ2MS41NjMgMTM1Ljc3MyBMIDQ2My45OTIgMTM4LjIwMyBRIDQ2NS40OTUgMTQ3LjQyNiA0NjYuNDYxIDE1NC4xNDcgQyA0NjcuNDI2IDE2MC44NjggNDY5LjM2MyAxNjYuNDU1IDQ3NC43MzEgMTcxLjI1OCBRIDUzMy44NjIgMjEzLjAyOCA1MzguMTk2IDIxNS42ODQgQyA1NDIuNTI5IDIxOC4zMzkgNTQ4LjM0NSAyMjAuMjQ0IDU1MS40OTIgMjE2LjI1MiBDIDU1NC42MzkgMjEyLjI2IDU1My40ODEgMjA4LjUyMyA1NDkuNDE5IDIwNC40NiBMIDQ3MS4xNDcgMTI2LjE4OCBMIDQ2MS41NjMgMTM1Ljc3MyBaICBNIDQyNy43MjkgODIuNzcgTCA0MjUuMjk5IDgwLjM0IFEgNDIzLjc5NyA3MS4xMTcgNDIyLjgzMSA2NC4zOTYgQyA0MjEuODY2IDU3LjY3NSA0MTkuOTI5IDUyLjA4OCA0MTQuNTYxIDQ3LjI4NSBRIDM1NS40MyA1LjUxNSAzNTEuMDk2IDIuODU5IEMgMzQ2Ljc2MyAwLjIwNCAzNDAuOTQ3IC0xLjcwMSAzMzcuOCAyLjI5MSBDIDMzNC42NTMgNi4yODIgMzM1LjgxMSAxMC4wMiAzMzkuODczIDE0LjA4MiBMIDQxOC4xNDUgOTIuMzU1IEwgNDI3LjcyOSA4Mi43NyBaIFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJvcGVsbGVyfSAke3N0eWxlcy5wcm9wZWxsZXJDQ1d9YH1cbiAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb246IGJMZWZ0Um90b3JBbmltYXRpb24gfX1cbiAgICAgICAgICBkPVwiIE0gMTI1LjU2MyA0NzEuNzcyIEwgMTI3Ljk5MyA0NzQuMjAyIFEgMTI5LjQ5NiA0ODMuNDI2IDEzMC40NjEgNDkwLjE0NiBDIDEzMS40MjcgNDk2Ljg2NyAxMzMuMzYzIDUwMi40NTQgMTM4LjczMSA1MDcuMjU3IFEgMTk3Ljg2MyA1NDkuMDI4IDIwMi4xOTYgNTUxLjY4MyBDIDIwNi41MyA1NTQuMzM4IDIxMi4zNDUgNTU2LjI0MyAyMTUuNDkyIDU1Mi4yNTEgQyAyMTguNjM5IDU0OC4yNiAyMTcuNDgyIDU0NC41MjIgMjEzLjQxOSA1NDAuNDYgTCAxMzUuMTQ4IDQ2Mi4xODcgTCAxMjUuNTYzIDQ3MS43NzIgWiAgTSA5MS43MyA0MTguNzcgTCA4OS4zIDQxNi4zNCBRIDg3Ljc5NyA0MDcuMTE2IDg2LjgzMiA0MDAuMzk1IEMgODUuODY2IDM5My42NzUgODMuOTMgMzg4LjA4NyA3OC41NjIgMzgzLjI4NCBRIDE5LjQzMSAzNDEuNTE0IDE1LjA5NyAzMzguODU5IEMgMTAuNzYzIDMzNi4yMDMgNC45NDggMzM0LjI5OSAxLjgwMSAzMzguMjkgQyAtMS4zNDYgMzQyLjI4MiAtMC4xODkgMzQ2LjAyIDMuODc0IDM1MC4wODIgTCA4Mi4xNDYgNDI4LjM1NCBMIDkxLjczIDQxOC43NyBaIFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJvcGVsbGVyfSAke3N0eWxlcy5wcm9wZWxsZXJDV31gfVxuICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbjogZkxlZnRSb3RvckFuaW1hdGlvbiB9fVxuICAgICAgICAgIGQ9XCIgTSAxMjUuNTYzIDgyLjc3IEwgMTI3Ljk5MyA4MC4zNCBRIDEyOS40OTYgNzEuMTE3IDEzMC40NjEgNjQuMzk2IEMgMTMxLjQyNyA1Ny42NzUgMTMzLjM2MyA1Mi4wODggMTM4LjczMSA0Ny4yODUgUSAxOTcuODYzIDUuNTE1IDIwMi4xOTYgMi44NTkgQyAyMDYuNTMgMC4yMDQgMjEyLjM0NSAtMS43MDEgMjE1LjQ5MiAyLjI5MSBDIDIxOC42MzkgNi4yODIgMjE3LjQ4MiAxMC4wMiAyMTMuNDE5IDE0LjA4MyBMIDEzNS4xNDcgOTIuMzU1IEwgMTI1LjU2MyA4Mi43NyBaICBNIDkxLjczIDEzNS43NzMgTCA4OS4zIDEzOC4yMDMgUSA4Ny43OTcgMTQ3LjQyNiA4Ni44MzIgMTU0LjE0NyBDIDg1Ljg2NiAxNjAuODY4IDgzLjkzIDE2Ni40NTUgNzguNTYyIDE3MS4yNTggUSAxOS40MzEgMjEzLjAyOCAxNS4wOTcgMjE1LjY4NCBDIDEwLjc2MyAyMTguMzM5IDQuOTQ4IDIyMC4yNDMgMS44MDEgMjE2LjI1MiBDIC0xLjM0NiAyMTIuMjYgLTAuMTg5IDIwOC41MjMgMy44NzQgMjA0LjQ2IEwgODIuMTQ2IDEyNi4xODggTCA5MS43MyAxMzUuNzczIFogXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcm9uZVRvcEl0ZW06IENhbnZhc0VsZW1lbnRJdGVtPGFueSwgYW55PiA9IHtcbiAgaWQ6ICdkcm9uZVRvcCcsXG4gIG5hbWU6ICdEcm9uZSBUb3AnLFxuICBkZXNjcmlwdGlvbjogJ0Ryb25lIHRvcCcsXG5cbiAgZGlzcGxheTogRHJvbmVUb3BEaXNwbGF5LFxuXG4gIGRlZmF1bHRTaXplOiB7XG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgfSxcblxuICBnZXROZXdPcHRpb25zOiAob3B0aW9ucykgPT4gKHtcbiAgICAuLi5vcHRpb25zLFxuICB9KSxcblxuICAvLyBDYWxsZWQgd2hlbiBkYXRhIGNoYW5nZXNcbiAgcHJlcGFyZURhdGE6IChjdHg6IERpbWVuc2lvbkNvbnRleHQsIGNmZzogRHJvbmVUb3BDb25maWcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBEcm9uZVRvcERhdGEgPSB7XG4gICAgICBiUmlnaHRSb3RvclJQTTogY2ZnPy5iUmlnaHRSb3RvclJQTSA/IGN0eC5nZXRTY2FsYXIoY2ZnLmJSaWdodFJvdG9yUlBNKS52YWx1ZSgpIDogMCxcbiAgICAgIGJMZWZ0Um90b3JSUE06IGNmZz8uYkxlZnRSb3RvclJQTSA/IGN0eC5nZXRTY2FsYXIoY2ZnLmJMZWZ0Um90b3JSUE0pLnZhbHVlKCkgOiAwLFxuICAgICAgZlJpZ2h0Um90b3JSUE06IGNmZz8uZlJpZ2h0Um90b3JSUE0gPyBjdHguZ2V0U2NhbGFyKGNmZy5mUmlnaHRSb3RvclJQTSkudmFsdWUoKSA6IDAsXG4gICAgICBmTGVmdFJvdG9yUlBNOiBjZmc/LmZMZWZ0Um90b3JSUE0gPyBjdHguZ2V0U2NhbGFyKGNmZy5mTGVmdFJvdG9yUlBNKS52YWx1ZSgpIDogMCxcbiAgICAgIHlhd0FuZ2xlOiBjZmc/Lnlhd0FuZ2xlID8gY3R4LmdldFNjYWxhcihjZmcueWF3QW5nbGUpLnZhbHVlKCkgOiAwLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcblxuICByZWdpc3Rlck9wdGlvbnNVSTogKGJ1aWxkZXIpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IFsnRHJvbmUgVG9wJ107XG4gICAgYnVpbGRlclxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ3lhd0FuZ2xlJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy55YXdBbmdsZScsXG4gICAgICAgIG5hbWU6ICdZYXcgQW5nbGUnLFxuICAgICAgICBlZGl0b3I6IFNjYWxhckRpbWVuc2lvbkVkaXRvcixcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnZlJpZ2h0Um90b3JSUE0nLFxuICAgICAgICBwYXRoOiAnY29uZmlnLmZSaWdodFJvdG9yUlBNJyxcbiAgICAgICAgbmFtZTogJ0Zyb250IFJpZ2h0IFJvdG9yIFJQTScsXG4gICAgICAgIGVkaXRvcjogU2NhbGFyRGltZW5zaW9uRWRpdG9yLFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdmTGVmdFJvdG9yUlBNJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5mTGVmdFJvdG9yUlBNJyxcbiAgICAgICAgbmFtZTogJ0Zyb250IExlZnQgUm90b3IgUlBNJyxcbiAgICAgICAgZWRpdG9yOiBTY2FsYXJEaW1lbnNpb25FZGl0b3IsXG4gICAgICB9KVxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2JSaWdodFJvdG9yUlBNJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5iUmlnaHRSb3RvclJQTScsXG4gICAgICAgIG5hbWU6ICdCYWNrIFJpZ2h0IFJvdG9yIFJQTScsXG4gICAgICAgIGVkaXRvcjogU2NhbGFyRGltZW5zaW9uRWRpdG9yLFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdiTGVmdFJvdG9yUlBNJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5iTGVmdFJvdG9yUlBNJyxcbiAgICAgICAgbmFtZTogJ0JhY2sgTGVmdCBSb3RvciBSUE0nLFxuICAgICAgICBlZGl0b3I6IFNjYWxhckRpbWVuc2lvbkVkaXRvcixcbiAgICAgIH0pO1xuICB9LFxufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBwcm9wZWxsZXI6IGNzc2BcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICBgLFxuICBwcm9wZWxsZXJDVzogY3NzYFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgYCxcbiAgcHJvcGVsbGVyQ0NXOiBjc3NgXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNWRyBmcm9tICdyZWFjdC1pbmxpbmVzdmcnO1xuXG5pbXBvcnQge1xuICBDb2xvckRpbWVuc2lvbkNvbmZpZyxcbiAgUmVzb3VyY2VEaW1lbnNpb25Db25maWcsXG4gIFJlc291cmNlRGltZW5zaW9uTW9kZSxcbiAgZ2V0UHVibGljT3JBYnNvbHV0ZVVybCxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgRGltZW5zaW9uQ29udGV4dCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zL2NvbnRleHQnO1xuaW1wb3J0IHsgQ29sb3JEaW1lbnNpb25FZGl0b3IsIFJlc291cmNlRGltZW5zaW9uRWRpdG9yIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvZWRpdG9ycyc7XG5pbXBvcnQgeyBBUElFZGl0b3IsIEFQSUVkaXRvckNvbmZpZywgY2FsbEFwaSB9IGZyb20gJ2FwcC9wbHVnaW5zL3BhbmVsL2NhbnZhcy9lZGl0b3IvQVBJRWRpdG9yJztcblxuaW1wb3J0IHsgQ2FudmFzRWxlbWVudEl0ZW0sIENhbnZhc0VsZW1lbnRQcm9wcyB9IGZyb20gJy4uL2VsZW1lbnQnO1xuaW1wb3J0IHsgTGluZUNvbmZpZyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJY29uQ29uZmlnIHtcbiAgcGF0aD86IFJlc291cmNlRGltZW5zaW9uQ29uZmlnO1xuICBmaWxsPzogQ29sb3JEaW1lbnNpb25Db25maWc7XG4gIHN0cm9rZT86IExpbmVDb25maWc7XG4gIGFwaT86IEFQSUVkaXRvckNvbmZpZztcbn1cblxuaW50ZXJmYWNlIEljb25EYXRhIHtcbiAgcGF0aDogc3RyaW5nO1xuICBmaWxsOiBzdHJpbmc7XG4gIHN0cm9rZUNvbG9yPzogc3RyaW5nO1xuICBzdHJva2U/OiBudW1iZXI7XG4gIGFwaT86IEFQSUVkaXRvckNvbmZpZztcbn1cblxuLy8gV2hlbiBhIHN0b2tlIGlzIGRlZmluZWQsIHdlIHdhbnQgdGhlIHBhdGggdG8gYmUgaW4gcGFnZSB1bml0c1xuY29uc3Qgc3ZnU3Ryb2tlUGF0aENsYXNzID0gY3NzYFxuICBwYXRoIHtcbiAgICB2ZWN0b3ItZWZmZWN0OiBub24tc2NhbGluZy1zdHJva2U7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBJY29uRGlzcGxheShwcm9wczogQ2FudmFzRWxlbWVudFByb3BzKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHM7XG4gIGlmICghZGF0YT8ucGF0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBpZiAoZGF0YT8uYXBpKSB7XG4gICAgICBjYWxsQXBpKGRhdGEuYXBpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3ZnU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7XG4gICAgZmlsbDogZGF0YT8uZmlsbCxcbiAgICBzdHJva2U6IGRhdGE/LnN0cm9rZUNvbG9yLFxuICAgIHN0cm9rZVdpZHRoOiBkYXRhPy5zdHJva2UsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U1ZHXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3JjPXtkYXRhLnBhdGh9XG4gICAgICBzdHlsZT17c3ZnU3R5bGV9XG4gICAgICBjbGFzc05hbWU9e3N2Z1N0eWxlLnN0cm9rZVdpZHRoID8gc3ZnU3Ryb2tlUGF0aENsYXNzIDogdW5kZWZpbmVkfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBpY29uSXRlbTogQ2FudmFzRWxlbWVudEl0ZW08SWNvbkNvbmZpZywgSWNvbkRhdGE+ID0ge1xuICBpZDogJ2ljb24nLFxuICBuYW1lOiAnSWNvbicsXG4gIGRlc2NyaXB0aW9uOiAnU1ZHIEljb24gZGlzcGxheScsXG5cbiAgZGlzcGxheTogSWNvbkRpc3BsYXksXG5cbiAgZ2V0TmV3T3B0aW9uczogKG9wdGlvbnMpID0+ICh7XG4gICAgcGxhY2VtZW50OiB7XG4gICAgICB3aWR0aDogNTAsXG4gICAgICBoZWlnaHQ6IDUwLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gICAgY29uZmlnOiB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIG1vZGU6IFJlc291cmNlRGltZW5zaW9uTW9kZS5GaXhlZCxcbiAgICAgICAgZml4ZWQ6ICdpbWcvaWNvbnMvdW5pY29ucy9xdWVzdGlvbi1jaXJjbGUuc3ZnJyxcbiAgICAgIH0sXG4gICAgICBmaWxsOiB7IGZpeGVkOiAnI0ZGRjg5OScgfSxcbiAgICB9LFxuICB9KSxcblxuICAvLyBDYWxsZWQgd2hlbiBkYXRhIGNoYW5nZXNcbiAgcHJlcGFyZURhdGE6IChjdHg6IERpbWVuc2lvbkNvbnRleHQsIGNmZzogSWNvbkNvbmZpZykgPT4ge1xuICAgIGxldCBwYXRoOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGNmZy5wYXRoKSB7XG4gICAgICBwYXRoID0gY3R4LmdldFJlc291cmNlKGNmZy5wYXRoKS52YWx1ZSgpO1xuICAgIH1cbiAgICBpZiAoIXBhdGggfHwgIWlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICBwYXRoID0gZ2V0UHVibGljT3JBYnNvbHV0ZVVybCgnaW1nL2ljb25zL3VuaWNvbnMvcXVlc3Rpb24tY2lyY2xlLnN2ZycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGE6IEljb25EYXRhID0ge1xuICAgICAgcGF0aCxcbiAgICAgIGZpbGw6IGNmZy5maWxsID8gY3R4LmdldENvbG9yKGNmZy5maWxsKS52YWx1ZSgpIDogJyNDQ0MnLFxuICAgICAgYXBpOiBjZmc/LmFwaSA/PyB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIGlmIChjZmcuc3Ryb2tlPy53aWR0aCAmJiBjZmcuc3Ryb2tlLmNvbG9yKSB7XG4gICAgICBpZiAoY2ZnLnN0cm9rZS53aWR0aCA+IDApIHtcbiAgICAgICAgZGF0YS5zdHJva2UgPSBjZmcuc3Ryb2tlPy53aWR0aDtcbiAgICAgICAgZGF0YS5zdHJva2VDb2xvciA9IGN0eC5nZXRDb2xvcihjZmcuc3Ryb2tlLmNvbG9yKS52YWx1ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcblxuICAvLyBIZWF0bWFwIG92ZXJsYXkgb3B0aW9uc1xuICByZWdpc3Rlck9wdGlvbnNVSTogKGJ1aWxkZXIpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IFsnSWNvbiddO1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdpY29uU2VsZWN0b3InLFxuICAgICAgICBwYXRoOiAnY29uZmlnLnBhdGgnLFxuICAgICAgICBuYW1lOiAnU1ZHIFBhdGgnLFxuICAgICAgICBlZGl0b3I6IFJlc291cmNlRGltZW5zaW9uRWRpdG9yLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHJlc291cmNlVHlwZTogJ2ljb24nLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdjb25maWcuZmlsbCcsXG4gICAgICAgIHBhdGg6ICdjb25maWcuZmlsbCcsXG4gICAgICAgIG5hbWU6ICdGaWxsIGNvbG9yJyxcbiAgICAgICAgZWRpdG9yOiBDb2xvckRpbWVuc2lvbkVkaXRvcixcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgICAgICAvLyBDb25maWd1cmVkIHZhbHVlc1xuICAgICAgICAgIGZpeGVkOiAnZ3JleScsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLmFkZFNsaWRlcklucHV0KHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHBhdGg6ICdjb25maWcuc3Ryb2tlLndpZHRoJyxcbiAgICAgICAgbmFtZTogJ1N0cm9rZScsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnY29uZmlnLnN0cm9rZS5jb2xvcicsXG4gICAgICAgIHBhdGg6ICdjb25maWcuc3Ryb2tlLmNvbG9yJyxcbiAgICAgICAgbmFtZTogJ1N0cm9rZSBjb2xvcicsXG4gICAgICAgIGVkaXRvcjogQ29sb3JEaW1lbnNpb25FZGl0b3IsXG4gICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICAgICAgLy8gQ29uZmlndXJlZCB2YWx1ZXNcbiAgICAgICAgICBmaXhlZDogJ2dyZXknLFxuICAgICAgICB9LFxuICAgICAgICBzaG93SWY6IChjZmcpID0+IEJvb2xlYW4oY2ZnPy5jb25maWc/LnN0cm9rZT8ud2lkdGgpLFxuICAgICAgfSlcbiAgICAgIC5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgaWQ6ICdhcGlTZWxlY3RvcicsXG4gICAgICAgIHBhdGg6ICdjb25maWcuYXBpJyxcbiAgICAgICAgbmFtZTogJ0FQSScsXG4gICAgICAgIGVkaXRvcjogQVBJRWRpdG9yLFxuICAgICAgfSk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhbnZhc0VsZW1lbnRJdGVtLCBDYW52YXNFbGVtZW50UHJvcHMgfSBmcm9tICcuLi9lbGVtZW50JztcblxuaW50ZXJmYWNlIE5vdEZvdW5kQ29uZmlnIHtcbiAgb3JpZz86IGFueTtcbn1cblxuY2xhc3MgTm90Rm91bmREaXNwbGF5IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxDYW52YXNFbGVtZW50UHJvcHM8Tm90Rm91bmRDb25maWc+PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPk5PVCBGT1VORDo8L2gzPlxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90Rm91bmRJdGVtOiBDYW52YXNFbGVtZW50SXRlbTxOb3RGb3VuZENvbmZpZz4gPSB7XG4gIGlkOiAnbm90LWZvdW5kJyxcbiAgbmFtZTogJ05vdCBmb3VuZCcsXG4gIGRlc2NyaXB0aW9uOiAnRGlzcGxheSB3aGVuIGVsZW1lbnQgdHlwZSBpcyBub3QgZm91bmQgaW4gdGhlIHJlZ2lzdHJ5JyxcblxuICBkaXNwbGF5OiBOb3RGb3VuZERpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6ICgpID0+ICh7XG4gICAgY29uZmlnOiB7fSxcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzdHlsZXNGYWN0b3J5IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9jb250ZXh0JztcbmltcG9ydCB7IENvbG9yRGltZW5zaW9uRWRpdG9yIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvZWRpdG9ycy9Db2xvckRpbWVuc2lvbkVkaXRvcic7XG5pbXBvcnQgeyBUZXh0RGltZW5zaW9uRWRpdG9yIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvZWRpdG9ycy9UZXh0RGltZW5zaW9uRWRpdG9yJztcbmltcG9ydCB7IENvbG9yRGltZW5zaW9uQ29uZmlnLCBUZXh0RGltZW5zaW9uQ29uZmlnIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2RpbWVuc2lvbnMvdHlwZXMnO1xuXG5pbXBvcnQgeyBDYW52YXNFbGVtZW50SXRlbSwgQ2FudmFzRWxlbWVudFByb3BzIH0gZnJvbSAnLi4vZWxlbWVudCc7XG5cbmV4cG9ydCBlbnVtIEFsaWduIHtcbiAgTGVmdCA9ICdsZWZ0JyxcbiAgQ2VudGVyID0gJ2NlbnRlcicsXG4gIFJpZ2h0ID0gJ3JpZ2h0Jyxcbn1cblxuZXhwb3J0IGVudW0gVkFsaWduIHtcbiAgVG9wID0gJ3RvcCcsXG4gIE1pZGRsZSA9ICdtaWRkbGUnLFxuICBCb3R0b20gPSAnYm90dG9tJyxcbn1cblxuaW50ZXJmYWNlIFRleHRCb3hEYXRhIHtcbiAgdGV4dD86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHNpemU/OiBudW1iZXI7IC8vIDAgb3IgbWlzc2luZyB3aWxsIFwiYXV0byBzaXplXCJcbiAgYWxpZ246IEFsaWduO1xuICB2YWxpZ246IFZBbGlnbjtcbn1cblxuaW50ZXJmYWNlIFRleHRCb3hDb25maWcge1xuICB0ZXh0PzogVGV4dERpbWVuc2lvbkNvbmZpZztcbiAgY29sb3I/OiBDb2xvckRpbWVuc2lvbkNvbmZpZztcbiAgc2l6ZT86IG51bWJlcjsgLy8gMCBvciBtaXNzaW5nIHdpbGwgXCJhdXRvIHNpemVcIlxuICBhbGlnbjogQWxpZ247XG4gIHZhbGlnbjogVkFsaWduO1xufVxuXG5jbGFzcyBUZXh0Qm94RGlzcGxheSBleHRlbmRzIFB1cmVDb21wb25lbnQ8Q2FudmFzRWxlbWVudFByb3BzPFRleHRCb3hDb25maWcsIFRleHRCb3hEYXRhPj4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyhjb25maWcudGhlbWUyLCBkYXRhKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFufT57ZGF0YT8udGV4dH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCh0aGVtZTogR3JhZmFuYVRoZW1lMiwgZGF0YSkgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgYCxcbiAgc3BhbjogY3NzYFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246ICR7ZGF0YS52YWxpZ259O1xuICAgIHRleHQtYWxpZ246ICR7ZGF0YS5hbGlnbn07XG4gICAgZm9udC1zaXplOiAke2RhdGE/LnNpemV9cHg7XG4gICAgY29sb3I6ICR7ZGF0YT8uY29sb3J9O1xuICBgLFxufSkpO1xuZXhwb3J0IGNvbnN0IHRleHRCb3hJdGVtOiBDYW52YXNFbGVtZW50SXRlbTxUZXh0Qm94Q29uZmlnLCBUZXh0Qm94RGF0YT4gPSB7XG4gIGlkOiAndGV4dC1ib3gnLFxuICBuYW1lOiAnVGV4dCcsXG4gIGRlc2NyaXB0aW9uOiAnVGV4dCBib3gnLFxuXG4gIGRpc3BsYXk6IFRleHRCb3hEaXNwbGF5LFxuXG4gIGRlZmF1bHRTaXplOiB7XG4gICAgd2lkdGg6IDI0MCxcbiAgICBoZWlnaHQ6IDE2MCxcbiAgfSxcblxuICBnZXROZXdPcHRpb25zOiAob3B0aW9ucykgPT4gKHtcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICBmaXhlZDogJ2dyZXknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gICAgY29uZmlnOiB7XG4gICAgICBhbGlnbjogQWxpZ24uTGVmdCxcbiAgICAgIHZhbGlnbjogVkFsaWduLk1pZGRsZSxcbiAgICB9LFxuICB9KSxcblxuICAvLyBDYWxsZWQgd2hlbiBkYXRhIGNoYW5nZXNcbiAgcHJlcGFyZURhdGE6IChjdHg6IERpbWVuc2lvbkNvbnRleHQsIGNmZzogVGV4dEJveENvbmZpZykgPT4ge1xuICAgIGNvbnN0IGRhdGE6IFRleHRCb3hEYXRhID0ge1xuICAgICAgdGV4dDogY2ZnLnRleHQgPyBjdHguZ2V0VGV4dChjZmcudGV4dCkudmFsdWUoKSA6ICcnLFxuICAgICAgYWxpZ246IGNmZy5hbGlnbiA/PyBBbGlnbi5DZW50ZXIsXG4gICAgICB2YWxpZ246IGNmZy52YWxpZ24gPz8gVkFsaWduLk1pZGRsZSxcbiAgICAgIHNpemU6IGNmZy5zaXplLFxuICAgIH07XG5cbiAgICBpZiAoY2ZnLmNvbG9yKSB7XG4gICAgICBkYXRhLmNvbG9yID0gY3R4LmdldENvbG9yKGNmZy5jb2xvcikudmFsdWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcblxuICAvLyBIZWF0bWFwIG92ZXJsYXkgb3B0aW9uc1xuICByZWdpc3Rlck9wdGlvbnNVSTogKGJ1aWxkZXIpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IFsnVGV4dCBib3gnXTtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAndGV4dFNlbGVjdG9yJyxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy50ZXh0JyxcbiAgICAgICAgbmFtZTogJ1RleHQnLFxuICAgICAgICBlZGl0b3I6IFRleHREaW1lbnNpb25FZGl0b3IsXG4gICAgICB9KVxuICAgICAgLmFkZEN1c3RvbUVkaXRvcih7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBpZDogJ2NvbmZpZy5jb2xvcicsXG4gICAgICAgIHBhdGg6ICdjb25maWcuY29sb3InLFxuICAgICAgICBuYW1lOiAnVGV4dCBjb2xvcicsXG4gICAgICAgIGVkaXRvcjogQ29sb3JEaW1lbnNpb25FZGl0b3IsXG4gICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB7fSxcbiAgICAgIH0pXG4gICAgICAuYWRkUmFkaW8oe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5hbGlnbicsXG4gICAgICAgIG5hbWU6ICdBbGlnbiB0ZXh0JyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IHZhbHVlOiBBbGlnbi5MZWZ0LCBsYWJlbDogJ0xlZnQnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBBbGlnbi5DZW50ZXIsIGxhYmVsOiAnQ2VudGVyJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogQWxpZ24uUmlnaHQsIGxhYmVsOiAnUmlnaHQnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBBbGlnbi5MZWZ0LFxuICAgICAgfSlcbiAgICAgIC5hZGRSYWRpbyh7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBwYXRoOiAnY29uZmlnLnZhbGlnbicsXG4gICAgICAgIG5hbWU6ICdWZXJ0aWNhbCBhbGlnbicsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogVkFsaWduLlRvcCwgbGFiZWw6ICdUb3AnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBWQWxpZ24uTWlkZGxlLCBsYWJlbDogJ01pZGRsZScgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFZBbGlnbi5Cb3R0b20sIGxhYmVsOiAnQm90dG9tJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogVkFsaWduLk1pZGRsZSxcbiAgICAgIH0pXG4gICAgICAuYWRkTnVtYmVySW5wdXQoe1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgcGF0aDogJ2NvbmZpZy5zaXplJyxcbiAgICAgICAgbmFtZTogJ1RleHQgc2l6ZScsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdBdXRvJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9LFxufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBEaW1lbnNpb25Db250ZXh0LCBTY2FsYXJEaW1lbnNpb25Db25maWcgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucyc7XG5pbXBvcnQgeyBTY2FsYXJEaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzJztcblxuaW1wb3J0IHsgQ2FudmFzRWxlbWVudEl0ZW0sIENhbnZhc0VsZW1lbnRQcm9wcyB9IGZyb20gJy4uL2VsZW1lbnQnO1xuXG5pbnRlcmZhY2UgV2luZFR1cmJpbmVEYXRhIHtcbiAgcnBtPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgV2luZFR1cmJpbmVDb25maWcge1xuICBycG0/OiBTY2FsYXJEaW1lbnNpb25Db25maWc7XG59XG5cbmNvbnN0IFdpbmRUdXJiaW5lRGlzcGxheTogRkM8Q2FudmFzRWxlbWVudFByb3BzPFdpbmRUdXJiaW5lQ29uZmlnLCBXaW5kVHVyYmluZURhdGE+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcblxuICBjb25zdCB3aW5kVHVyYmluZUFuaW1hdGlvbiA9IGBzcGluICR7ZGF0YT8ucnBtID8gNjAgLyBNYXRoLmFicyhkYXRhLnJwbSkgOiAwfXMgbGluZWFyIGluZmluaXRlYDtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxODkuMzI2IDI4My45ODlcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgPHN5bWJvbCBpZD1cImJsYWRlXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cIiNlNmU2ZTZcIlxuICAgICAgICAgIGlkPVwiYmxhZGUtZnJvbnRcIlxuICAgICAgICAgIGQ9XCJNMTQuNjQ5MTg3OSwxLjg1MDExNjAxIEMxNC4yNjg0NDU1LC0wLjA1MzU5NjI4NzcgMTAuNzE1MDgxMiwtMC44MTUwODEyMDYgOS4wNjQ3MzMxOCwzLjM3MzA4NTg1IEwwLjQzNDMzODc0Nyw3MC43NjU4OTMzIEw4LjkzODA1MTA0LDkxLjk2MDc4ODkgTDE1LjQxMDY3MjksOTAuNDM3ODE5IEwxNy41Njg0NDU1LDc4LjM4MDc0MjUgTDE0LjUyMTgwOTcsMS45NzY3OTgxNCBMMTQuNjQ5MTg3OSwxLjg1MDExNjAxIFpcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGw9XCIjZDBkNmQ3XCJcbiAgICAgICAgICBpZD1cImJsYWRlLXNpZGVcIlxuICAgICAgICAgIGQ9XCJNMTEuMDk1MTI3NiwwLjU4MTIwNjQ5NyBDMTAuMzMzNjQyNywwLjk2MTk0ODk1NiA5LjU3MjE1Nzc3LDEuODUwMTE2MDEgOC45MzczNTQ5OSwzLjI0NjQwMzcxIEwwLjMwNjk2MDU1Nyw3MC42MzkyMTExIEw4LjgxMDY3Mjg1LDkxLjgzNDEwNjcgTDMuMzUzNTk2MjksNzAuMDA0NDA4NCBMMTEuMDk1MTI3NiwwLjU4MTIwNjQ5NyBaXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ltYm9sPlxuXG4gICAgICA8Zz5cbiAgICAgICAgPGcgaWQ9XCJzdHJ1Y3R1cmVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTguMTIzLCA4Mi42NjQpXCIgZmlsbFJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJ0b3dlclwiIGZpbGw9XCIjZTZlNmU2XCIgcG9pbnRzPVwiMzMuMTExLDEwLjk4NCAzOS45NjUsMTAuOTg0IDQ0LjI4LDE5Ni4xNzYgMjguNzk2LDE5Ni4xNzZcIiAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cInlhd1wiXG4gICAgICAgICAgICBmaWxsPVwicmdiYSgwLDAsMCwwLjI1KVwiXG4gICAgICAgICAgICBkPVwiTTQwLjM0NTQ3NTYsMjMuMjk0ODk1NiBMNDAuNzI2MjE4MSwzNC44NDQ1NDc2IEMzOC44MjI1MDU4LDM1LjA5ODYwNzkgMzUuNzc2NTY2MSwzNS4wOTg2MDc5IDMyLjM0OTg4NCwzNC4zMzcxMjMgTDMyLjczMDYyNjUsMjMuMjk1NTkxNiBMNDAuMzQ1NDc1NiwyMy4yOTU1OTE2IEw0MC4zNDU0NzU2LDIzLjI5NDg5NTYgWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgaWQ9XCJiYXNlXCJcbiAgICAgICAgICAgIGZpbGw9XCIjZDBkNmQ3XCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDQyKVwiXG4gICAgICAgICAgICBkPVwiTTI2LjM4NDY4NjgsMTUwLjU5MTY0NyBMNDYuNTY0MDM3MSwxNTAuNTkxNjQ3IEM0OC44NDg0OTE5LDE1MC41OTE2NDcgNTAuNzUyMjA0MiwxNTIuNDk1MzYgNTAuNzUyMjA0MiwxNTQuNzc5ODE0IEw1MC43NTIyMDQyLDE1OC45Njc5ODEgTDIyLjA2OTE0MTUsMTU4Ljk2Nzk4MSBMMjIuMDY5MTQxNSwxNTQuNzc5ODE0IEMyMi4wNjkxNDE1LDE1Mi40OTUzNiAyMy45NzI4NTM4LDE1MC41OTE2NDcgMjYuMjU3MzA4NiwxNTAuNTkxNjQ3IEwyNi4zODQ2ODY4LDE1MC41OTE2NDcgWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Y2lyY2xlIGlkPVwibmFjZWxsZVwiIGZpbGw9XCIjZTZlNmU2XCIgY3g9XCIzNi41NFwiIGN5PVwiMTJcIiByPVwiMTEuOTNcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgaWQ9XCJnZWFyYm94XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZDBkNmQ3XCIgc3Ryb2tlV2lkdGg9XCIyLjc1XCIgY3g9XCIzNi41MzhcIiBjeT1cIjExLjk5OVwiIHI9XCI1LjhcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGNsYXNzTmFtZT17c3R5bGVzLmJsYWRlfSBzdHlsZT17eyBhbmltYXRpb246IHdpbmRUdXJiaW5lQW5pbWF0aW9uIH19PlxuICAgICAgICAgIDx1c2UgaWQ9XCJibGFkZTFcIiBocmVmPVwiI2JsYWRlXCIgeD1cIjgzLjI0XCIgeT1cIjBcIiAvPlxuICAgICAgICAgIDx1c2UgaWQ9XCJibGFkZTJcIiBocmVmPVwiI2JsYWRlXCIgeD1cIjgzLjI0XCIgeT1cIjBcIiB0cmFuc2Zvcm09XCJyb3RhdGUoMTIwIDk0LjY2MyA5NC42NjMpXCIgLz5cbiAgICAgICAgICA8dXNlIGlkPVwiYmxhZGUzXCIgaHJlZj1cIiNibGFkZVwiIHg9XCI4My4yNFwiIHk9XCIwXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xMjAgOTQuNjYzIDk0LjY2MylcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3Qgd2luZFR1cmJpbmVJdGVtOiBDYW52YXNFbGVtZW50SXRlbTxhbnksIGFueT4gPSB7XG4gIGlkOiAnd2luZFR1cmJpbmUnLFxuICBuYW1lOiAnV2luZCBUdXJiaW5lJyxcbiAgZGVzY3JpcHRpb246ICdTcGlubnkgc3Bpbm55JyxcblxuICBkaXNwbGF5OiBXaW5kVHVyYmluZURpc3BsYXksXG5cbiAgZGVmYXVsdFNpemU6IHtcbiAgICB3aWR0aDogMTAwLFxuICAgIGhlaWdodDogMTAwLFxuICB9LFxuXG4gIGdldE5ld09wdGlvbnM6IChvcHRpb25zKSA9PiAoe1xuICAgIC4uLm9wdGlvbnMsXG4gIH0pLFxuXG4gIC8vIENhbGxlZCB3aGVuIGRhdGEgY2hhbmdlc1xuICBwcmVwYXJlRGF0YTogKGN0eDogRGltZW5zaW9uQ29udGV4dCwgY2ZnOiBXaW5kVHVyYmluZUNvbmZpZykgPT4ge1xuICAgIGNvbnN0IGRhdGE6IFdpbmRUdXJiaW5lRGF0YSA9IHtcbiAgICAgIHJwbTogY2ZnPy5ycG0gPyBjdHguZ2V0U2NhbGFyKGNmZy5ycG0pLnZhbHVlKCkgOiAwLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcblxuICByZWdpc3Rlck9wdGlvbnNVSTogKGJ1aWxkZXIpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IFsnV2luZCBUdXJiaW5lJ107XG4gICAgYnVpbGRlci5hZGRDdXN0b21FZGl0b3Ioe1xuICAgICAgY2F0ZWdvcnksXG4gICAgICBpZDogJ3JwbScsXG4gICAgICBwYXRoOiAnY29uZmlnLnJwbScsXG4gICAgICBuYW1lOiAnUlBNJyxcbiAgICAgIGVkaXRvcjogU2NhbGFyRGltZW5zaW9uRWRpdG9yLFxuICAgIH0pO1xuICB9LFxufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBibGFkZTogY3NzYFxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogOTQuNjYzcHggOTQuNjYzcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICBgLFxufSk7XG4iLCJleHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudCc7XG5leHBvcnQgeyBDYW52YXNGcmFtZU9wdGlvbnMgfSBmcm9tICcuL2ZyYW1lJztcbmV4cG9ydCAqIGZyb20gJy4vcmVnaXN0cnknO1xuIiwiaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgQ2FudmFzRWxlbWVudEl0ZW0sIENhbnZhc0VsZW1lbnRPcHRpb25zIH0gZnJvbSAnLi9lbGVtZW50JztcbmltcG9ydCB7IGJ1dHRvbkl0ZW0gfSBmcm9tICcuL2VsZW1lbnRzL2J1dHRvbic7XG5pbXBvcnQgeyBkcm9uZUZyb250SXRlbSB9IGZyb20gJy4vZWxlbWVudHMvZHJvbmVGcm9udCc7XG5pbXBvcnQgeyBkcm9uZVNpZGVJdGVtIH0gZnJvbSAnLi9lbGVtZW50cy9kcm9uZVNpZGUnO1xuaW1wb3J0IHsgZHJvbmVUb3BJdGVtIH0gZnJvbSAnLi9lbGVtZW50cy9kcm9uZVRvcCc7XG5pbXBvcnQgeyBpY29uSXRlbSB9IGZyb20gJy4vZWxlbWVudHMvaWNvbic7XG5pbXBvcnQgeyB0ZXh0Qm94SXRlbSB9IGZyb20gJy4vZWxlbWVudHMvdGV4dEJveCc7XG5pbXBvcnQgeyB3aW5kVHVyYmluZUl0ZW0gfSBmcm9tICcuL2VsZW1lbnRzL3dpbmRUdXJiaW5lJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FOVkFTX0VMRU1FTlRfQ09ORklHOiBDYW52YXNFbGVtZW50T3B0aW9ucyA9IHtcbiAgLi4uaWNvbkl0ZW0uZ2V0TmV3T3B0aW9ucygpLFxuICB0eXBlOiBpY29uSXRlbS5pZCxcbiAgbmFtZTogYEVsZW1lbnQgMWAsXG59O1xuXG5leHBvcnQgY29uc3QgY2FudmFzRWxlbWVudFJlZ2lzdHJ5ID0gbmV3IFJlZ2lzdHJ5PENhbnZhc0VsZW1lbnRJdGVtPigoKSA9PiBbXG4gIGljb25JdGVtLCAvLyBkZWZhdWx0IGZvciBub3dcbiAgdGV4dEJveEl0ZW0sXG4gIGJ1dHRvbkl0ZW0sXG4gIGRyb25lVG9wSXRlbSxcbiAgZHJvbmVGcm9udEl0ZW0sXG4gIGRyb25lU2lkZUl0ZW0sXG4gIHdpbmRUdXJiaW5lSXRlbSxcbl0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPbkRyYWcsIE9uUmVzaXplIH0gZnJvbSAncmVhY3QtbW92ZWFibGUvZGVjbGFyYXRpb24vdHlwZXMnO1xuXG5pbXBvcnQgeyBMYXllckVsZW1lbnQgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0xheWVycy90eXBlcyc7XG5pbXBvcnQge1xuICBCYWNrZ3JvdW5kSW1hZ2VTaXplLFxuICBDYW52YXNFbGVtZW50SXRlbSxcbiAgQ2FudmFzRWxlbWVudE9wdGlvbnMsXG4gIGNhbnZhc0VsZW1lbnRSZWdpc3RyeSxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2NhbnZhcyc7XG5pbXBvcnQgeyBub3RGb3VuZEl0ZW0gfSBmcm9tICdhcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL25vdEZvdW5kJztcbmltcG9ydCB7IERpbWVuc2lvbkNvbnRleHQgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucyc7XG5cbmltcG9ydCB7IENvbnN0cmFpbnQsIEhvcml6b250YWxDb25zdHJhaW50LCBQbGFjZW1lbnQsIFZlcnRpY2FsQ29uc3RyYWludCB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgRnJhbWVTdGF0ZSB9IGZyb20gJy4vZnJhbWUnO1xuaW1wb3J0IHsgUm9vdEVsZW1lbnQgfSBmcm9tICcuL3Jvb3QnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcblxubGV0IGNvdW50ZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgRWxlbWVudFN0YXRlIGltcGxlbWVudHMgTGF5ZXJFbGVtZW50IHtcbiAgLy8gVUlEIG5lY2Vzc2FyeSBmb3IgbW92ZWFibGUgdG8gd29yayAoZm9yIG5vdylcbiAgcmVhZG9ubHkgVUlEID0gY291bnRlcisrO1xuICByZXZJZCA9IDA7XG4gIHNpemVTdHlsZTogQ1NTUHJvcGVydGllcyA9IHt9O1xuICBkYXRhU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7fTtcblxuICAvLyBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgZWxlbWVudCBpcyBpbiBtb3Rpb24gb3Igbm90ICh2aWEgbW92ZWFibGUpXG4gIGlzTW92aW5nID0gZmFsc2U7XG5cbiAgLy8gVGVtcCBzdG9yZWQgY29uc3RyYWludCBmb3IgdmlzdWFsaXphdGlvbiBwdXJwb3NlcyAoc3dpdGNoIHRvIHRvcCAvIGxlZnQgY29uc3RyYWludCB0byBzaW1wbGlmeSBzb21lIGZ1bmN0aW9uYWxpdHkpXG4gIHRlbXBDb25zdHJhaW50OiBDb25zdHJhaW50IHwgdW5kZWZpbmVkO1xuXG4gIC8vIEZpbGxlZCBpbiBieSByZWZcbiAgZGl2PzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgLy8gQ2FsY3VsYXRlZFxuICBkYXRhPzogYW55OyAvLyBkZXBlbmRzIG9uIHRoZSB0eXBlXG5cbiAgY29uc3RydWN0b3IocHVibGljIGl0ZW06IENhbnZhc0VsZW1lbnRJdGVtLCBwdWJsaWMgb3B0aW9uczogQ2FudmFzRWxlbWVudE9wdGlvbnMsIHB1YmxpYyBwYXJlbnQ/OiBGcmFtZVN0YXRlKSB7XG4gICAgY29uc3QgZmFsbGJhY2tOYW1lID0gYEVsZW1lbnQgJHtEYXRlLm5vdygpfWA7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7IHR5cGU6IGl0ZW0uaWQsIG5hbWU6IGZhbGxiYWNrTmFtZSB9O1xuICAgIH1cblxuICAgIG9wdGlvbnMuY29uc3RyYWludCA9IG9wdGlvbnMuY29uc3RyYWludCA/PyB7XG4gICAgICB2ZXJ0aWNhbDogVmVydGljYWxDb25zdHJhaW50LlRvcCxcbiAgICAgIGhvcml6b250YWw6IEhvcml6b250YWxDb25zdHJhaW50LkxlZnQsXG4gICAgfTtcbiAgICBvcHRpb25zLnBsYWNlbWVudCA9IG9wdGlvbnMucGxhY2VtZW50ID8/IHsgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIHRvcDogMCwgbGVmdDogMCB9O1xuICAgIGNvbnN0IHNjZW5lID0gdGhpcy5nZXRTY2VuZSgpO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICBjb25zdCBuZXdOYW1lID0gc2NlbmU/LmdldE5leHRFbGVtZW50TmFtZSgpO1xuICAgICAgb3B0aW9ucy5uYW1lID0gbmV3TmFtZSA/PyBmYWxsYmFja05hbWU7XG4gICAgfVxuICAgIHNjZW5lPy5ieU5hbWUuc2V0KG9wdGlvbnMubmFtZSwgdGhpcyk7XG4gIH1cblxuICBwcml2YXRlIGdldFNjZW5lKCk6IFNjZW5lIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgdHJhdiA9IHRoaXMucGFyZW50O1xuICAgIHdoaWxlICh0cmF2KSB7XG4gICAgICBpZiAodHJhdi5pc1Jvb3QoKSkge1xuICAgICAgICByZXR1cm4gdHJhdi5zY2VuZTtcbiAgICAgIH1cbiAgICAgIHRyYXYgPSB0cmF2LnBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hbWU7XG4gIH1cblxuICAvKiogVXNlIHRoZSBjb25maWd1cmVkIG9wdGlvbnMgdG8gdXBkYXRlIENTUyBzdHlsZSBwcm9wZXJ0aWVzIGRpcmVjdGx5IG9uIHRoZSB3cmFwcGVyIGRpdiAqKi9cbiAgYXBwbHlMYXlvdXRTdHlsZXNUb0RpdigpIHtcbiAgICBpZiAodGhpcy5pc1Jvb3QoKSkge1xuICAgICAgLy8gUm9vdCBzdXBlcnNlZGVzIGxheW91dCBlbmdpbmUgYW5kIGlzIGFsd2F5cyAxMDAlIHdpZHRoICsgaGVpZ2h0IG9mIHBhbmVsXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb25zdHJhaW50IH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyB2ZXJ0aWNhbCwgaG9yaXpvbnRhbCB9ID0gY29uc3RyYWludCA/PyB7fTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLm9wdGlvbnMucGxhY2VtZW50ID8/ICh7fSBhcyBQbGFjZW1lbnQpO1xuXG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIC8vIE1pbmltdW0gZWxlbWVudCBzaXplIGlzIDEweDEwXG4gICAgICBtaW5XaWR0aDogJzEwcHgnLFxuICAgICAgbWluSGVpZ2h0OiAnMTBweCcsXG4gICAgfTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IFsnMHB4JywgJzBweCddO1xuXG4gICAgc3dpdGNoICh2ZXJ0aWNhbCkge1xuICAgICAgY2FzZSBWZXJ0aWNhbENvbnN0cmFpbnQuVG9wOlxuICAgICAgICBwbGFjZW1lbnQudG9wID0gcGxhY2VtZW50LnRvcCA/PyAwO1xuICAgICAgICBwbGFjZW1lbnQuaGVpZ2h0ID0gcGxhY2VtZW50LmhlaWdodCA/PyAxMDA7XG4gICAgICAgIHN0eWxlLnRvcCA9IGAke3BsYWNlbWVudC50b3B9cHhgO1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHtwbGFjZW1lbnQuaGVpZ2h0fXB4YDtcbiAgICAgICAgZGVsZXRlIHBsYWNlbWVudC5ib3R0b207XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWZXJ0aWNhbENvbnN0cmFpbnQuQm90dG9tOlxuICAgICAgICBwbGFjZW1lbnQuYm90dG9tID0gcGxhY2VtZW50LmJvdHRvbSA/PyAwO1xuICAgICAgICBwbGFjZW1lbnQuaGVpZ2h0ID0gcGxhY2VtZW50LmhlaWdodCA/PyAxMDA7XG4gICAgICAgIHN0eWxlLmJvdHRvbSA9IGAke3BsYWNlbWVudC5ib3R0b219cHhgO1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHtwbGFjZW1lbnQuaGVpZ2h0fXB4YDtcbiAgICAgICAgZGVsZXRlIHBsYWNlbWVudC50b3A7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWZXJ0aWNhbENvbnN0cmFpbnQuVG9wQm90dG9tOlxuICAgICAgICBwbGFjZW1lbnQudG9wID0gcGxhY2VtZW50LnRvcCA/PyAwO1xuICAgICAgICBwbGFjZW1lbnQuYm90dG9tID0gcGxhY2VtZW50LmJvdHRvbSA/PyAwO1xuICAgICAgICBzdHlsZS50b3AgPSBgJHtwbGFjZW1lbnQudG9wfXB4YDtcbiAgICAgICAgc3R5bGUuYm90dG9tID0gYCR7cGxhY2VtZW50LmJvdHRvbX1weGA7XG4gICAgICAgIGRlbGV0ZSBwbGFjZW1lbnQuaGVpZ2h0O1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZlcnRpY2FsQ29uc3RyYWludC5DZW50ZXI6XG4gICAgICAgIHBsYWNlbWVudC50b3AgPSBwbGFjZW1lbnQudG9wID8/IDA7XG4gICAgICAgIHBsYWNlbWVudC5oZWlnaHQgPSBwbGFjZW1lbnQuaGVpZ2h0ID8/IDEwMDtcbiAgICAgICAgdHJhbnNsYXRlWzFdID0gJy01MCUnO1xuICAgICAgICBzdHlsZS50b3AgPSBgY2FsYyg1MCUgLSAke3BsYWNlbWVudC50b3B9cHgpYDtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7cGxhY2VtZW50LmhlaWdodH1weGA7XG4gICAgICAgIGRlbGV0ZSBwbGFjZW1lbnQuYm90dG9tO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVmVydGljYWxDb25zdHJhaW50LlNjYWxlOlxuICAgICAgICBwbGFjZW1lbnQudG9wID0gcGxhY2VtZW50LnRvcCA/PyAwO1xuICAgICAgICBwbGFjZW1lbnQuYm90dG9tID0gcGxhY2VtZW50LmJvdHRvbSA/PyAwO1xuICAgICAgICBzdHlsZS50b3AgPSBgJHtwbGFjZW1lbnQudG9wfSVgO1xuICAgICAgICBzdHlsZS5ib3R0b20gPSBgJHtwbGFjZW1lbnQuYm90dG9tfSVgO1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LmhlaWdodDtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaG9yaXpvbnRhbCkge1xuICAgICAgY2FzZSBIb3Jpem9udGFsQ29uc3RyYWludC5MZWZ0OlxuICAgICAgICBwbGFjZW1lbnQubGVmdCA9IHBsYWNlbWVudC5sZWZ0ID8/IDA7XG4gICAgICAgIHBsYWNlbWVudC53aWR0aCA9IHBsYWNlbWVudC53aWR0aCA/PyAxMDA7XG4gICAgICAgIHN0eWxlLmxlZnQgPSBgJHtwbGFjZW1lbnQubGVmdH1weGA7XG4gICAgICAgIHN0eWxlLndpZHRoID0gYCR7cGxhY2VtZW50LndpZHRofXB4YDtcbiAgICAgICAgZGVsZXRlIHBsYWNlbWVudC5yaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEhvcml6b250YWxDb25zdHJhaW50LlJpZ2h0OlxuICAgICAgICBwbGFjZW1lbnQucmlnaHQgPSBwbGFjZW1lbnQucmlnaHQgPz8gMDtcbiAgICAgICAgcGxhY2VtZW50LndpZHRoID0gcGxhY2VtZW50LndpZHRoID8/IDEwMDtcbiAgICAgICAgc3R5bGUucmlnaHQgPSBgJHtwbGFjZW1lbnQucmlnaHR9cHhgO1xuICAgICAgICBzdHlsZS53aWR0aCA9IGAke3BsYWNlbWVudC53aWR0aH1weGA7XG4gICAgICAgIGRlbGV0ZSBwbGFjZW1lbnQubGVmdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEhvcml6b250YWxDb25zdHJhaW50LkxlZnRSaWdodDpcbiAgICAgICAgcGxhY2VtZW50LmxlZnQgPSBwbGFjZW1lbnQubGVmdCA/PyAwO1xuICAgICAgICBwbGFjZW1lbnQucmlnaHQgPSBwbGFjZW1lbnQucmlnaHQgPz8gMDtcbiAgICAgICAgc3R5bGUubGVmdCA9IGAke3BsYWNlbWVudC5sZWZ0fXB4YDtcbiAgICAgICAgc3R5bGUucmlnaHQgPSBgJHtwbGFjZW1lbnQucmlnaHR9cHhgO1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LndpZHRoO1xuICAgICAgICBzdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbENvbnN0cmFpbnQuQ2VudGVyOlxuICAgICAgICBwbGFjZW1lbnQubGVmdCA9IHBsYWNlbWVudC5sZWZ0ID8/IDA7XG4gICAgICAgIHBsYWNlbWVudC53aWR0aCA9IHBsYWNlbWVudC53aWR0aCA/PyAxMDA7XG4gICAgICAgIHRyYW5zbGF0ZVswXSA9ICctNTAlJztcbiAgICAgICAgc3R5bGUubGVmdCA9IGBjYWxjKDUwJSAtICR7cGxhY2VtZW50LmxlZnR9cHgpYDtcbiAgICAgICAgc3R5bGUud2lkdGggPSBgJHtwbGFjZW1lbnQud2lkdGh9cHhgO1xuICAgICAgICBkZWxldGUgcGxhY2VtZW50LnJpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbENvbnN0cmFpbnQuU2NhbGU6XG4gICAgICAgIHBsYWNlbWVudC5sZWZ0ID0gcGxhY2VtZW50LmxlZnQgPz8gMDtcbiAgICAgICAgcGxhY2VtZW50LnJpZ2h0ID0gcGxhY2VtZW50LnJpZ2h0ID8/IDA7XG4gICAgICAgIHN0eWxlLmxlZnQgPSBgJHtwbGFjZW1lbnQubGVmdH0lYDtcbiAgICAgICAgc3R5bGUucmlnaHQgPSBgJHtwbGFjZW1lbnQucmlnaHR9JWA7XG4gICAgICAgIGRlbGV0ZSBwbGFjZW1lbnQud2lkdGg7XG4gICAgICAgIHN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVbMF19LCAke3RyYW5zbGF0ZVsxXX0pYDtcbiAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIHRoaXMuc2l6ZVN0eWxlID0gc3R5bGU7XG4gICAgaWYgKHRoaXMuZGl2KSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnNpemVTdHlsZSkge1xuICAgICAgICB0aGlzLmRpdi5zdHlsZVtrZXkgYXMgYW55XSA9ICh0aGlzLnNpemVTdHlsZSBhcyBhbnkpW2tleV07XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YVN0eWxlKSB7XG4gICAgICAgIHRoaXMuZGl2LnN0eWxlW2tleSBhcyBhbnldID0gKHRoaXMuZGF0YVN0eWxlIGFzIGFueSlba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRQbGFjZW1lbnRGcm9tQ29uc3RyYWludChlbGVtZW50Q29udGFpbmVyPzogRE9NUmVjdCwgcGFyZW50Q29udGFpbmVyPzogRE9NUmVjdCkge1xuICAgIGNvbnN0IHsgY29uc3RyYWludCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHsgdmVydGljYWwsIGhvcml6b250YWwgfSA9IGNvbnN0cmFpbnQgPz8ge307XG5cbiAgICBpZiAoIWVsZW1lbnRDb250YWluZXIpIHtcbiAgICAgIGVsZW1lbnRDb250YWluZXIgPSB0aGlzLmRpdiAmJiB0aGlzLmRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRDb250YWluZXIpIHtcbiAgICAgIHBhcmVudENvbnRhaW5lciA9IHRoaXMuZGl2ICYmIHRoaXMuZGl2LnBhcmVudEVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0aXZlVG9wID1cbiAgICAgIGVsZW1lbnRDb250YWluZXIgJiYgcGFyZW50Q29udGFpbmVyID8gTWF0aC5yb3VuZChlbGVtZW50Q29udGFpbmVyLnRvcCAtIHBhcmVudENvbnRhaW5lci50b3ApIDogMDtcbiAgICBjb25zdCByZWxhdGl2ZUJvdHRvbSA9XG4gICAgICBlbGVtZW50Q29udGFpbmVyICYmIHBhcmVudENvbnRhaW5lciA/IE1hdGgucm91bmQocGFyZW50Q29udGFpbmVyLmJvdHRvbSAtIGVsZW1lbnRDb250YWluZXIuYm90dG9tKSA6IDA7XG4gICAgY29uc3QgcmVsYXRpdmVMZWZ0ID1cbiAgICAgIGVsZW1lbnRDb250YWluZXIgJiYgcGFyZW50Q29udGFpbmVyID8gTWF0aC5yb3VuZChlbGVtZW50Q29udGFpbmVyLmxlZnQgLSBwYXJlbnRDb250YWluZXIubGVmdCkgOiAwO1xuICAgIGNvbnN0IHJlbGF0aXZlUmlnaHQgPVxuICAgICAgZWxlbWVudENvbnRhaW5lciAmJiBwYXJlbnRDb250YWluZXIgPyBNYXRoLnJvdW5kKHBhcmVudENvbnRhaW5lci5yaWdodCAtIGVsZW1lbnRDb250YWluZXIucmlnaHQpIDogMDtcblxuICAgIGNvbnN0IHBsYWNlbWVudCA9IHt9IGFzIFBsYWNlbWVudDtcblxuICAgIGNvbnN0IHdpZHRoID0gZWxlbWVudENvbnRhaW5lcj8ud2lkdGggPz8gMTAwO1xuICAgIGNvbnN0IGhlaWdodCA9IGVsZW1lbnRDb250YWluZXI/LmhlaWdodCA/PyAxMDA7XG5cbiAgICBzd2l0Y2ggKHZlcnRpY2FsKSB7XG4gICAgICBjYXNlIFZlcnRpY2FsQ29uc3RyYWludC5Ub3A6XG4gICAgICAgIHBsYWNlbWVudC50b3AgPSByZWxhdGl2ZVRvcDtcbiAgICAgICAgcGxhY2VtZW50LmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZlcnRpY2FsQ29uc3RyYWludC5Cb3R0b206XG4gICAgICAgIHBsYWNlbWVudC5ib3R0b20gPSByZWxhdGl2ZUJvdHRvbTtcbiAgICAgICAgcGxhY2VtZW50LmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZlcnRpY2FsQ29uc3RyYWludC5Ub3BCb3R0b206XG4gICAgICAgIHBsYWNlbWVudC50b3AgPSByZWxhdGl2ZVRvcDtcbiAgICAgICAgcGxhY2VtZW50LmJvdHRvbSA9IHJlbGF0aXZlQm90dG9tO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVmVydGljYWxDb25zdHJhaW50LkNlbnRlcjpcbiAgICAgICAgY29uc3QgZWxlbWVudENlbnRlciA9IGVsZW1lbnRDb250YWluZXIgPyByZWxhdGl2ZVRvcCArIGhlaWdodCAvIDIgOiAwO1xuICAgICAgICBjb25zdCBwYXJlbnRDZW50ZXIgPSBwYXJlbnRDb250YWluZXIgPyBwYXJlbnRDb250YWluZXIuaGVpZ2h0IC8gMiA6IDA7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlRnJvbUNlbnRlciA9IHBhcmVudENlbnRlciAtIGVsZW1lbnRDZW50ZXI7XG4gICAgICAgIHBsYWNlbWVudC50b3AgPSBkaXN0YW5jZUZyb21DZW50ZXI7XG4gICAgICAgIHBsYWNlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWZXJ0aWNhbENvbnN0cmFpbnQuU2NhbGU6XG4gICAgICAgIHBsYWNlbWVudC50b3AgPSAocmVsYXRpdmVUb3AgLyAocGFyZW50Q29udGFpbmVyPy5oZWlnaHQgPz8gaGVpZ2h0KSkgKiAxMDA7XG4gICAgICAgIHBsYWNlbWVudC5ib3R0b20gPSAocmVsYXRpdmVCb3R0b20gLyAocGFyZW50Q29udGFpbmVyPy5oZWlnaHQgPz8gaGVpZ2h0KSkgKiAxMDA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaG9yaXpvbnRhbCkge1xuICAgICAgY2FzZSBIb3Jpem9udGFsQ29uc3RyYWludC5MZWZ0OlxuICAgICAgICBwbGFjZW1lbnQubGVmdCA9IHJlbGF0aXZlTGVmdDtcbiAgICAgICAgcGxhY2VtZW50LndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIb3Jpem9udGFsQ29uc3RyYWludC5SaWdodDpcbiAgICAgICAgcGxhY2VtZW50LnJpZ2h0ID0gcmVsYXRpdmVSaWdodDtcbiAgICAgICAgcGxhY2VtZW50LndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIb3Jpem9udGFsQ29uc3RyYWludC5MZWZ0UmlnaHQ6XG4gICAgICAgIHBsYWNlbWVudC5sZWZ0ID0gcmVsYXRpdmVMZWZ0O1xuICAgICAgICBwbGFjZW1lbnQucmlnaHQgPSByZWxhdGl2ZVJpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSG9yaXpvbnRhbENvbnN0cmFpbnQuQ2VudGVyOlxuICAgICAgICBjb25zdCBlbGVtZW50Q2VudGVyID0gZWxlbWVudENvbnRhaW5lciA/IHJlbGF0aXZlTGVmdCArIHdpZHRoIC8gMiA6IDA7XG4gICAgICAgIGNvbnN0IHBhcmVudENlbnRlciA9IHBhcmVudENvbnRhaW5lciA/IHBhcmVudENvbnRhaW5lci53aWR0aCAvIDIgOiAwO1xuICAgICAgICBjb25zdCBkaXN0YW5jZUZyb21DZW50ZXIgPSBwYXJlbnRDZW50ZXIgLSBlbGVtZW50Q2VudGVyO1xuICAgICAgICBwbGFjZW1lbnQubGVmdCA9IGRpc3RhbmNlRnJvbUNlbnRlcjtcbiAgICAgICAgcGxhY2VtZW50LndpZHRoID0gd2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIb3Jpem9udGFsQ29uc3RyYWludC5TY2FsZTpcbiAgICAgICAgcGxhY2VtZW50LmxlZnQgPSAocmVsYXRpdmVMZWZ0IC8gKHBhcmVudENvbnRhaW5lcj8ud2lkdGggPz8gd2lkdGgpKSAqIDEwMDtcbiAgICAgICAgcGxhY2VtZW50LnJpZ2h0ID0gKHJlbGF0aXZlUmlnaHQgLyAocGFyZW50Q29udGFpbmVyPy53aWR0aCA/PyB3aWR0aCkpICogMTAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuXG4gICAgdGhpcy5hcHBseUxheW91dFN0eWxlc1RvRGl2KCk7XG4gICAgdGhpcy5yZXZJZCsrO1xuICB9XG5cbiAgdXBkYXRlRGF0YShjdHg6IERpbWVuc2lvbkNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5pdGVtLnByZXBhcmVEYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLml0ZW0ucHJlcGFyZURhdGEoY3R4LCB0aGlzLm9wdGlvbnMuY29uZmlnKTtcbiAgICAgIHRoaXMucmV2SWQrKzsgLy8gcmVyZW5kZXJcbiAgICB9XG5cbiAgICBjb25zdCB7IGJhY2tncm91bmQsIGJvcmRlciB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGNzczogQ1NTUHJvcGVydGllcyA9IHt9O1xuICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICBpZiAoYmFja2dyb3VuZC5jb2xvcikge1xuICAgICAgICBjb25zdCBjb2xvciA9IGN0eC5nZXRDb2xvcihiYWNrZ3JvdW5kLmNvbG9yKTtcbiAgICAgICAgY3NzLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLnZhbHVlKCk7XG4gICAgICB9XG4gICAgICBpZiAoYmFja2dyb3VuZC5pbWFnZSkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGN0eC5nZXRSZXNvdXJjZShiYWNrZ3JvdW5kLmltYWdlKTtcbiAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgY29uc3QgdiA9IGltYWdlLnZhbHVlKCk7XG4gICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgIGNzcy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt2fVwiKWA7XG4gICAgICAgICAgICBzd2l0Y2ggKGJhY2tncm91bmQuc2l6ZSA/PyBCYWNrZ3JvdW5kSW1hZ2VTaXplLkNvbnRhaW4pIHtcbiAgICAgICAgICAgICAgY2FzZSBCYWNrZ3JvdW5kSW1hZ2VTaXplLkNvbnRhaW46XG4gICAgICAgICAgICAgICAgY3NzLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICAgICAgICAgICAgICAgIGNzcy5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgQmFja2dyb3VuZEltYWdlU2l6ZS5Db3ZlcjpcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgICAgICAgICAgIGNzcy5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgQmFja2dyb3VuZEltYWdlU2l6ZS5PcmlnaW5hbDpcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEJhY2tncm91bmRJbWFnZVNpemUuVGlsZTpcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFJlcGVhdCA9ICdyZXBlYXQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIEJhY2tncm91bmRJbWFnZVNpemUuRmlsbDpcbiAgICAgICAgICAgICAgICBjc3MuYmFja2dyb3VuZFNpemUgPSAnMTAwJSAxMDAlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYm9yZGVyICYmIGJvcmRlci5jb2xvciAmJiBib3JkZXIud2lkdGgpIHtcbiAgICAgIGNvbnN0IGNvbG9yID0gY3R4LmdldENvbG9yKGJvcmRlci5jb2xvcik7XG4gICAgICBjc3MuYm9yZGVyV2lkdGggPSBib3JkZXIud2lkdGg7XG4gICAgICBjc3MuYm9yZGVyU3R5bGUgPSAnc29saWQnO1xuICAgICAgY3NzLmJvcmRlckNvbG9yID0gY29sb3IudmFsdWUoKTtcblxuICAgICAgLy8gTW92ZSB0aGUgaW1hZ2UgdG8gaW5zaWRlIHRoZSBib3JkZXJcbiAgICAgIGlmIChjc3MuYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgIGNzcy5iYWNrZ3JvdW5kT3JpZ2luID0gJ3BhZGRpbmctYm94JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRhdGFTdHlsZSA9IGNzcztcbiAgICB0aGlzLmFwcGx5TGF5b3V0U3R5bGVzVG9EaXYoKTtcbiAgfVxuXG4gIGlzUm9vdCgpOiB0aGlzIGlzIFJvb3RFbGVtZW50IHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogUmVjdXJzaXZlbHkgdmlzaXQgYWxsIG5vZGVzICovXG4gIHZpc2l0KHZpc2l0b3I6ICh2OiBFbGVtZW50U3RhdGUpID0+IHZvaWQpIHtcbiAgICB2aXNpdG9yKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2Uob3B0aW9uczogQ2FudmFzRWxlbWVudE9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5pdGVtLmlkICE9PSBvcHRpb25zLnR5cGUpIHtcbiAgICAgIHRoaXMuaXRlbSA9IGNhbnZhc0VsZW1lbnRSZWdpc3RyeS5nZXRJZkV4aXN0cyhvcHRpb25zLnR5cGUpID8/IG5vdEZvdW5kSXRlbTtcbiAgICB9XG5cbiAgICAvLyByZW5hbWUgaGFuZGxpbmdcbiAgICBjb25zdCBvbGROYW1lID0gdGhpcy5vcHRpb25zLm5hbWU7XG4gICAgY29uc3QgbmV3TmFtZSA9IG9wdGlvbnMubmFtZTtcblxuICAgIHRoaXMucmV2SWQrKztcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgICBsZXQgdHJhdiA9IHRoaXMucGFyZW50O1xuICAgIHdoaWxlICh0cmF2KSB7XG4gICAgICBpZiAodHJhdi5pc1Jvb3QoKSkge1xuICAgICAgICB0cmF2LnNjZW5lLnNhdmUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0cmF2LnJldklkKys7XG4gICAgICB0cmF2ID0gdHJhdi5wYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLmdldFNjZW5lKCk7XG4gICAgaWYgKG9sZE5hbWUgIT09IG5ld05hbWUgJiYgc2NlbmUpIHtcbiAgICAgIHNjZW5lLmJ5TmFtZS5kZWxldGUob2xkTmFtZSk7XG4gICAgICBzY2VuZS5ieU5hbWUuc2V0KG5ld05hbWUsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNhdmVNb2RlbCgpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLm9wdGlvbnMgfTtcbiAgfVxuXG4gIGluaXRFbGVtZW50ID0gKHRhcmdldDogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmRpdiA9IHRhcmdldDtcbiAgICB0aGlzLmFwcGx5TGF5b3V0U3R5bGVzVG9EaXYoKTtcbiAgfTtcblxuICBhcHBseURyYWcgPSAoZXZlbnQ6IE9uRHJhZykgPT4ge1xuICAgIGNvbnN0IGhhc0hvcml6b250YWxDZW50ZXJDb25zdHJhaW50ID0gdGhpcy5vcHRpb25zLmNvbnN0cmFpbnQ/Lmhvcml6b250YWwgPT09IEhvcml6b250YWxDb25zdHJhaW50LkNlbnRlcjtcbiAgICBjb25zdCBoYXNWZXJ0aWNhbENlbnRlckNvbnN0cmFpbnQgPSB0aGlzLm9wdGlvbnMuY29uc3RyYWludD8udmVydGljYWwgPT09IFZlcnRpY2FsQ29uc3RyYWludC5DZW50ZXI7XG4gICAgaWYgKGhhc0hvcml6b250YWxDZW50ZXJDb25zdHJhaW50IHx8IGhhc1ZlcnRpY2FsQ2VudGVyQ29uc3RyYWludCkge1xuICAgICAgY29uc3QgbnVtYmVyT2ZUYXJnZXRzID0gdGhpcy5nZXRTY2VuZSgpPy5zZWxlY3RvPy5nZXRTZWxlY3RlZFRhcmdldHMoKS5sZW5ndGggPz8gMDtcbiAgICAgIGNvbnN0IGlzTXVsdGlTZWxlY3Rpb24gPSBudW1iZXJPZlRhcmdldHMgPiAxO1xuICAgICAgaWYgKCFpc011bHRpU2VsZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSB0aGlzLmRpdj8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGVsZW1lbnRDb250YWluZXI/LmhlaWdodCA/PyAxMDA7XG4gICAgICAgIGNvbnN0IHlPZmZzZXQgPSBoYXNWZXJ0aWNhbENlbnRlckNvbnN0cmFpbnQgPyBoZWlnaHQgLyA0IDogMDtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtldmVudC50cmFuc2xhdGVbMF19cHgsICR7ZXZlbnQudHJhbnNsYXRlWzFdIC0geU9mZnNldH1weClgO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGV2ZW50LnRyYW5zZm9ybTtcbiAgfTtcblxuICAvLyBraW5kYSBsaWtlOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9ncmFmYW5hLWVkZ2UtYXBwL2Jsb2IvbWFpbi9zcmMvcGFuZWxzL2RyYXcvV3JhcEl0ZW0udHN4I0w0NFxuICBhcHBseVJlc2l6ZSA9IChldmVudDogT25SZXNpemUpID0+IHtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLm9wdGlvbnMucGxhY2VtZW50ITtcblxuICAgIGNvbnN0IHN0eWxlID0gZXZlbnQudGFyZ2V0LnN0eWxlO1xuICAgIGNvbnN0IGRlbHRhWCA9IGV2ZW50LmRlbHRhWzBdO1xuICAgIGNvbnN0IGRlbHRhWSA9IGV2ZW50LmRlbHRhWzFdO1xuICAgIGNvbnN0IGRpckxSID0gZXZlbnQuZGlyZWN0aW9uWzBdO1xuICAgIGNvbnN0IGRpclRCID0gZXZlbnQuZGlyZWN0aW9uWzFdO1xuXG4gICAgaWYgKGRpckxSID09PSAxKSB7XG4gICAgICBwbGFjZW1lbnQud2lkdGggPSBldmVudC53aWR0aDtcbiAgICAgIHN0eWxlLndpZHRoID0gYCR7cGxhY2VtZW50LndpZHRofXB4YDtcbiAgICB9IGVsc2UgaWYgKGRpckxSID09PSAtMSkge1xuICAgICAgcGxhY2VtZW50LmxlZnQhIC09IGRlbHRhWDtcbiAgICAgIHBsYWNlbWVudC53aWR0aCA9IGV2ZW50LndpZHRoO1xuICAgICAgc3R5bGUubGVmdCA9IGAke3BsYWNlbWVudC5sZWZ0fXB4YDtcbiAgICAgIHN0eWxlLndpZHRoID0gYCR7cGxhY2VtZW50LndpZHRofXB4YDtcbiAgICB9XG5cbiAgICBpZiAoZGlyVEIgPT09IC0xKSB7XG4gICAgICBwbGFjZW1lbnQudG9wISAtPSBkZWx0YVk7XG4gICAgICBwbGFjZW1lbnQuaGVpZ2h0ID0gZXZlbnQuaGVpZ2h0O1xuICAgICAgc3R5bGUudG9wID0gYCR7cGxhY2VtZW50LnRvcH1weGA7XG4gICAgICBzdHlsZS5oZWlnaHQgPSBgJHtwbGFjZW1lbnQuaGVpZ2h0fXB4YDtcbiAgICB9IGVsc2UgaWYgKGRpclRCID09PSAxKSB7XG4gICAgICBwbGFjZW1lbnQuaGVpZ2h0ID0gZXZlbnQuaGVpZ2h0O1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7cGxhY2VtZW50LmhlaWdodH1weGA7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW0gfSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXt0aGlzLlVJRH0gcmVmPXt0aGlzLmluaXRFbGVtZW50fT5cbiAgICAgICAgPGl0ZW0uZGlzcGxheSBrZXk9e2Ake3RoaXMuVUlEfS8ke3RoaXMucmV2SWR9YH0gY29uZmlnPXt0aGlzLm9wdGlvbnMuY29uZmlnfSBkYXRhPXt0aGlzLmRhdGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb2xvckRpbWVuc2lvbkNvbmZpZywgUmVzb3VyY2VEaW1lbnNpb25Db25maWcgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxhY2VtZW50IHtcbiAgdG9wPzogbnVtYmVyO1xuICBsZWZ0PzogbnVtYmVyO1xuICByaWdodD86IG51bWJlcjtcbiAgYm90dG9tPzogbnVtYmVyO1xuXG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3RyYWludCB7XG4gIGhvcml6b250YWw/OiBIb3Jpem9udGFsQ29uc3RyYWludDtcbiAgdmVydGljYWw/OiBWZXJ0aWNhbENvbnN0cmFpbnQ7XG59XG5cbmV4cG9ydCBlbnVtIEhvcml6b250YWxDb25zdHJhaW50IHtcbiAgTGVmdCA9ICdsZWZ0JyxcbiAgUmlnaHQgPSAncmlnaHQnLFxuICBMZWZ0UmlnaHQgPSAnbGVmdHJpZ2h0JyxcbiAgQ2VudGVyID0gJ2NlbnRlcicsXG4gIFNjYWxlID0gJ3NjYWxlJyxcbn1cblxuZXhwb3J0IGVudW0gVmVydGljYWxDb25zdHJhaW50IHtcbiAgVG9wID0gJ3RvcCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBUb3BCb3R0b20gPSAndG9wYm90dG9tJyxcbiAgQ2VudGVyID0gJ2NlbnRlcicsXG4gIFNjYWxlID0gJ3NjYWxlJyxcbn1cblxuZXhwb3J0IGVudW0gQmFja2dyb3VuZEltYWdlU2l6ZSB7XG4gIE9yaWdpbmFsID0gJ29yaWdpbmFsJyxcbiAgQ29udGFpbiA9ICdjb250YWluJyxcbiAgQ292ZXIgPSAnY292ZXInLFxuICBGaWxsID0gJ2ZpbGwnLFxuICBUaWxlID0gJ3RpbGUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRDb25maWcge1xuICBjb2xvcj86IENvbG9yRGltZW5zaW9uQ29uZmlnO1xuICBpbWFnZT86IFJlc291cmNlRGltZW5zaW9uQ29uZmlnO1xuICBzaXplPzogQmFja2dyb3VuZEltYWdlU2l6ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lQ29uZmlnIHtcbiAgY29sb3I/OiBDb2xvckRpbWVuc2lvbkNvbmZpZztcbiAgd2lkdGg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIFF1aWNrUGxhY2VtZW50IHtcbiAgVG9wID0gJ3RvcCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBMZWZ0ID0gJ2xlZnQnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEhvcml6b250YWxDZW50ZXIgPSAnaGNlbnRlcicsXG4gIFZlcnRpY2FsQ2VudGVyID0gJ3ZjZW50ZXInLFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXBwRXZlbnRzLCBTdGFuZGFyZEVkaXRvclByb3BzLCBTdGFuZGFyZEVkaXRvcnNSZWdpc3RyeUl0ZW0sIFN0cmluZ0ZpZWxkQ29uZmlnU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIEpTT05Gb3JtYXR0ZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTdHJpbmdWYWx1ZUVkaXRvciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvT3B0aW9uc1VJL3N0cmluZyc7XG5pbXBvcnQgeyBhcHBFdmVudHMgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBUElFZGl0b3JDb25maWcge1xuICBlbmRwb2ludDogc3RyaW5nO1xuICBkYXRhPzogc3RyaW5nO1xufVxuXG5jb25zdCBkdW1teVN0cmluZ1NldHRpbmdzOiBTdGFuZGFyZEVkaXRvcnNSZWdpc3RyeUl0ZW08c3RyaW5nLCBTdHJpbmdGaWVsZENvbmZpZ1NldHRpbmdzPiA9IHtcbiAgc2V0dGluZ3M6IHt9LFxufSBhcyBhbnk7XG5cbmV4cG9ydCBjb25zdCBjYWxsQXBpID0gKGFwaTogQVBJRWRpdG9yQ29uZmlnLCBpc1Rlc3QgPSBmYWxzZSkgPT4ge1xuICBpZiAoYXBpKSB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZmV0Y2goe1xuICAgICAgICB1cmw6IGFwaS5lbmRwb2ludCEsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiBhcGkuZGF0YSA/PyB7fSxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgZXJyb3I6IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGlzVGVzdCkge1xuICAgICAgICAgICAgYXBwRXZlbnRzLmVtaXQoQXBwRXZlbnRzLmFsZXJ0RXJyb3IsIFsnRXJyb3IgaGFzIG9jY3VycmVkOiAnLCBKU09OLnN0cmluZ2lmeShlcnJvcildKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICBpZiAoaXNUZXN0KSB7XG4gICAgICAgICAgICBhcHBFdmVudHMuZW1pdChBcHBFdmVudHMuYWxlcnRTdWNjZXNzLCBbJ1Rlc3Qgc3VjY2Vzc2Z1bCddKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEFQSUVkaXRvcjogRkM8U3RhbmRhcmRFZGl0b3JQcm9wczxBUElFZGl0b3JDb25maWcsIGFueSwgYW55Pj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB2YWx1ZSwgY29udGV4dCwgb25DaGFuZ2UgfSA9IHByb3BzO1xuICBjb25zdCBsYWJlbFdpZHRoID0gOTtcblxuICBjb25zdCBvbkVuZHBvaW50Q2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGVuZHBvaW50KSA9PiB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLnZhbHVlLFxuICAgICAgICBlbmRwb2ludCxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW29uQ2hhbmdlLCB2YWx1ZV1cbiAgKTtcblxuICBjb25zdCBvbkRhdGFDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZGF0YSkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgZGF0YSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW29uQ2hhbmdlLCB2YWx1ZV1cbiAgKTtcblxuICBjb25zdCByZW5kZXJKU09OID0gKGRhdGE6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIHJldHVybiA8SlNPTkZvcm1hdHRlciBqc29uPXtqc29ufSAvPjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGBJbnZhbGlkIEpTT04gcHJvdmlkZWQ6ICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdJbnZhbGlkIEpTT04gcHJvdmlkZWQnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJUZXN0QVBJQnV0dG9uID0gKGFwaTogQVBJRWRpdG9yQ29uZmlnKSA9PiB7XG4gICAgaWYgKGFwaSAmJiBhcGkuZW5kcG9pbnQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2FsbEFwaShhcGksIHRydWUpfSB0aXRsZT17J1Rlc3QgQVBJJ30+XG4gICAgICAgICAgVGVzdCBBUElcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfTtcblxuICByZXR1cm4gY29uZmlnLmRpc2FibGVTYW5pdGl6ZUh0bWwgPyAoXG4gICAgPD5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXsnRW5kcG9pbnQnfSBsYWJlbFdpZHRoPXtsYWJlbFdpZHRofSBncm93PXt0cnVlfT5cbiAgICAgICAgICA8U3RyaW5nVmFsdWVFZGl0b3JcbiAgICAgICAgICAgIGNvbnRleHQ9e2NvbnRleHR9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWU/LmVuZHBvaW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uRW5kcG9pbnRDaGFuZ2V9XG4gICAgICAgICAgICBpdGVtPXtkdW1teVN0cmluZ1NldHRpbmdzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9eydEYXRhJ30gbGFiZWxXaWR0aD17bGFiZWxXaWR0aH0gZ3Jvdz17dHJ1ZX0+XG4gICAgICAgICAgPFN0cmluZ1ZhbHVlRWRpdG9yXG4gICAgICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPy5kYXRhID8/ICd7fSd9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25EYXRhQ2hhbmdlfVxuICAgICAgICAgICAgaXRlbT17ZHVtbXlTdHJpbmdTZXR0aW5nc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgIHtyZW5kZXJUZXN0QVBJQnV0dG9uKHZhbHVlKX1cbiAgICAgIDxiciAvPlxuICAgICAge3JlbmRlckpTT04odmFsdWU/LmRhdGEgPz8gJ3t9Jyl9XG4gICAgPC8+XG4gICkgOiAoXG4gICAgPD5NdXN0IGVuYWJsZSBkaXNhYmxlU2FuaXRpemVIdG1sIGZlYXR1cmUgZmxhZyB0byBhY2Nlc3M8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBQYW5lbE9wdGlvbnNTdXBwbGllciB9IGZyb20gJ0BncmFmYW5hL2RhdGEvc3JjL3BhbmVsL1BhbmVsUGx1Z2luJztcbmltcG9ydCB7IEJhY2tncm91bmRJbWFnZVNpemUsIENhbnZhc0VsZW1lbnRPcHRpb25zIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2NhbnZhcyc7XG5pbXBvcnQgeyBDb2xvckRpbWVuc2lvbkVkaXRvciwgUmVzb3VyY2VEaW1lbnNpb25FZGl0b3IgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucy9lZGl0b3JzJztcblxuaW50ZXJmYWNlIE9wdGlvblN1cHBsaWVycyB7XG4gIGFkZEJhY2tncm91bmQ6IFBhbmVsT3B0aW9uc1N1cHBsaWVyPENhbnZhc0VsZW1lbnRPcHRpb25zPjtcbiAgYWRkQm9yZGVyOiBQYW5lbE9wdGlvbnNTdXBwbGllcjxDYW52YXNFbGVtZW50T3B0aW9ucz47XG59XG5cbmV4cG9ydCBjb25zdCBvcHRpb25CdWlsZGVyOiBPcHRpb25TdXBwbGllcnMgPSB7XG4gIGFkZEJhY2tncm91bmQ6IChidWlsZGVyLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBbJ0JhY2tncm91bmQnXTtcbiAgICBidWlsZGVyXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnYmFja2dyb3VuZC5jb2xvcicsXG4gICAgICAgIHBhdGg6ICdiYWNrZ3JvdW5kLmNvbG9yJyxcbiAgICAgICAgbmFtZTogJ0NvbG9yJyxcbiAgICAgICAgZWRpdG9yOiBDb2xvckRpbWVuc2lvbkVkaXRvcixcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgICAgICAvLyBDb25maWd1cmVkIHZhbHVlc1xuICAgICAgICAgIGZpeGVkOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnYmFja2dyb3VuZC5pbWFnZScsXG4gICAgICAgIHBhdGg6ICdiYWNrZ3JvdW5kLmltYWdlJyxcbiAgICAgICAgbmFtZTogJ0ltYWdlJyxcbiAgICAgICAgZWRpdG9yOiBSZXNvdXJjZURpbWVuc2lvbkVkaXRvcixcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICByZXNvdXJjZVR5cGU6ICdpbWFnZScsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLmFkZFJhZGlvKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIHBhdGg6ICdiYWNrZ3JvdW5kLnNpemUnLFxuICAgICAgICBuYW1lOiAnSW1hZ2Ugc2l6ZScsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogQmFja2dyb3VuZEltYWdlU2l6ZS5PcmlnaW5hbCwgbGFiZWw6ICdPcmlnaW5hbCcgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IEJhY2tncm91bmRJbWFnZVNpemUuQ29udGFpbiwgbGFiZWw6ICdDb250YWluJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogQmFja2dyb3VuZEltYWdlU2l6ZS5Db3ZlciwgbGFiZWw6ICdDb3ZlcicgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IEJhY2tncm91bmRJbWFnZVNpemUuRmlsbCwgbGFiZWw6ICdGaWxsJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogQmFja2dyb3VuZEltYWdlU2l6ZS5UaWxlLCBsYWJlbDogJ1RpbGUnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBCYWNrZ3JvdW5kSW1hZ2VTaXplLkNvdmVyLFxuICAgICAgfSk7XG4gIH0sXG5cbiAgYWRkQm9yZGVyOiAoYnVpbGRlciwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gWydCb3JkZXInXTtcbiAgICBidWlsZGVyLmFkZFNsaWRlcklucHV0KHtcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgcGF0aDogJ2JvcmRlci53aWR0aCcsXG4gICAgICBuYW1lOiAnV2lkdGgnLFxuICAgICAgZGVmYXVsdFZhbHVlOiAyLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDIwLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChjb250ZXh0Lm9wdGlvbnM/LmJvcmRlcj8ud2lkdGgpIHtcbiAgICAgIGJ1aWxkZXIuYWRkQ3VzdG9tRWRpdG9yKHtcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIGlkOiAnYm9yZGVyLmNvbG9yJyxcbiAgICAgICAgcGF0aDogJ2JvcmRlci5jb2xvcicsXG4gICAgICAgIG5hbWU6ICdDb2xvcicsXG4gICAgICAgIGVkaXRvcjogQ29sb3JEaW1lbnNpb25FZGl0b3IsXG4gICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICAgICAgLy8gQ29uZmlndXJlZCB2YWx1ZXNcbiAgICAgICAgICBmaXhlZDogJycsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGFuZWxQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbENvbnN0cmFpbnQsIFZlcnRpY2FsQ29uc3RyYWludCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMnO1xuaW1wb3J0IHsgaWNvbkl0ZW0gfSBmcm9tICdhcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2ljb24nO1xuaW1wb3J0IHsgRWxlbWVudFN0YXRlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2NhbnZhcy9ydW50aW1lL2VsZW1lbnQnO1xuaW1wb3J0IHtcbiAgQ29sb3JEaW1lbnNpb25Db25maWcsXG4gIERpbWVuc2lvbkNvbnRleHQsXG4gIGdldENvbG9yRGltZW5zaW9uRnJvbURhdGEsXG4gIGdldFJlc291cmNlRGltZW5zaW9uRnJvbURhdGEsXG4gIGdldFNjYWxhckRpbWVuc2lvbkZyb21EYXRhLFxuICBnZXRTY2FsZURpbWVuc2lvbkZyb21EYXRhLFxuICBnZXRUZXh0RGltZW5zaW9uRnJvbURhdGEsXG4gIFJlc291cmNlRGltZW5zaW9uQ29uZmlnLFxuICBTY2FsYXJEaW1lbnNpb25Db25maWcsXG4gIFNjYWxlRGltZW5zaW9uQ29uZmlnLFxuICBUZXh0RGltZW5zaW9uQ29uZmlnLFxufSBmcm9tICdhcHAvZmVhdHVyZXMvZGltZW5zaW9ucyc7XG5cbmltcG9ydCB7IFBhbmVsT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzLmdlbic7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBhbmVsUHJvcHM8UGFuZWxPcHRpb25zPiB7fVxuXG5leHBvcnQgY2xhc3MgSWNvblBhbmVsIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFN0YXRlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmluaXRFbGVtZW50KHByb3BzKTtcbiAgfVxuXG4gIGluaXRFbGVtZW50ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBFbGVtZW50U3RhdGUoaWNvbkl0ZW0sIHByb3BzLm9wdGlvbnMucm9vdCBhcyBhbnkpO1xuICAgIHRoaXMudXBkYXRlU2l6ZShwcm9wcyk7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZURhdGEodGhpcy5kaW1zKTtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9O1xuXG4gIHVwZGF0ZVNpemUgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBwcm9wcztcbiAgICB0aGlzLmVsZW1lbnQub3B0aW9ucy5jb25zdHJhaW50ID0ge1xuICAgICAgdmVydGljYWw6IFZlcnRpY2FsQ29uc3RyYWludC5Ub3AsXG4gICAgICBob3Jpem9udGFsOiBIb3Jpem9udGFsQ29uc3RyYWludC5MZWZ0LFxuICAgIH07XG4gICAgdGhpcy5lbGVtZW50Lm9wdGlvbnMucGxhY2VtZW50ID0ge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgIH07XG4gIH07XG5cbiAgZGltczogRGltZW5zaW9uQ29udGV4dCA9IHtcbiAgICBnZXRDb2xvcjogKGNvbG9yOiBDb2xvckRpbWVuc2lvbkNvbmZpZykgPT4gZ2V0Q29sb3JEaW1lbnNpb25Gcm9tRGF0YSh0aGlzLnByb3BzLmRhdGEsIGNvbG9yKSxcbiAgICBnZXRTY2FsZTogKHNjYWxlOiBTY2FsZURpbWVuc2lvbkNvbmZpZykgPT4gZ2V0U2NhbGVEaW1lbnNpb25Gcm9tRGF0YSh0aGlzLnByb3BzLmRhdGEsIHNjYWxlKSxcbiAgICBnZXRTY2FsYXI6IChzY2FsYXI6IFNjYWxhckRpbWVuc2lvbkNvbmZpZykgPT4gZ2V0U2NhbGFyRGltZW5zaW9uRnJvbURhdGEodGhpcy5wcm9wcy5kYXRhLCBzY2FsYXIpLFxuICAgIGdldFRleHQ6ICh0ZXh0OiBUZXh0RGltZW5zaW9uQ29uZmlnKSA9PiBnZXRUZXh0RGltZW5zaW9uRnJvbURhdGEodGhpcy5wcm9wcy5kYXRhLCB0ZXh0KSxcbiAgICBnZXRSZXNvdXJjZTogKHJlczogUmVzb3VyY2VEaW1lbnNpb25Db25maWcpID0+IGdldFJlc291cmNlRGltZW5zaW9uRnJvbURhdGEodGhpcy5wcm9wcy5kYXRhLCByZXMpLFxuICB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IFByb3BzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBpZiAod2lkdGggIT09IG5leHRQcm9wcy53aWR0aCB8fCBoZWlnaHQgIT09IG5leHRQcm9wcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZShuZXh0UHJvcHMpO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChkYXRhICE9PSBuZXh0UHJvcHMuZGF0YSkge1xuICAgICAgdGhpcy5lbGVtZW50LnVwZGF0ZURhdGEodGhpcy5kaW1zKTtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFJlbG9hZCB0aGUgZWxlbWVudCB3aGVuIG9wdGlvbnMgY2hhbmdlXG4gICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucz8ucm9vdCAhPT0gbmV4dFByb3BzLm9wdGlvbnM/LnJvb3QpIHtcbiAgICAgIHRoaXMuaW5pdEVsZW1lbnQobmV4dFByb3BzKTtcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT57dGhpcy5lbGVtZW50LnJlbmRlcigpfTwvZGl2PjtcbiAgfVxufVxuIiwiLy9+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuLy8gTk9URTogVGhpcyBmaWxlIHdpbGwgYmUgYXV0byBnZW5lcmF0ZWQgZnJvbSBtb2RlbHMuY3VlXG4vLyBJdCBpcyBjdXJyZW50eSBoYW5kIHdyaXR0ZW4gYnV0IHdpbGwgc2VydmUgYXMgdGhlIHRhcmdldCBmb3IgY3VldHN5XG4vL35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbmltcG9ydCB7IENhbnZhc0VsZW1lbnRPcHRpb25zIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2NhbnZhcyc7XG5pbXBvcnQgeyBJY29uQ29uZmlnIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2NhbnZhcy9lbGVtZW50cy9pY29uJztcbmltcG9ydCB7IFJlc291cmNlRGltZW5zaW9uTW9kZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kaW1lbnNpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBQYW5lbE9wdGlvbnMge1xuICByb290OiBPbWl0PENhbnZhc0VsZW1lbnRPcHRpb25zPEljb25Db25maWc+LCAndHlwZScgfCAnbmFtZSc+OyAvLyB0eXBlIGlzIGZvcmNlZFxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhbmVsT3B0aW9uczogUGFuZWxPcHRpb25zID0ge1xuICByb290OiB7XG4gICAgY29uZmlnOiB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIG1vZGU6IFJlc291cmNlRGltZW5zaW9uTW9kZS5GaXhlZCxcbiAgICAgICAgZml4ZWQ6ICdpbWcvaWNvbnMvdW5pY29ucy9hbmFseXNpcy5zdmcnLFxuICAgICAgfSxcbiAgICAgIGZpbGw6IHtcbiAgICAgICAgZml4ZWQ6ICdncmVlbidcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcbiIsImltcG9ydCB7IEZpZWxkQ29uZmlnUHJvcGVydHksIFBhbmVsUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBDYW52YXNFbGVtZW50T3B0aW9ucyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9jYW52YXMnO1xuaW1wb3J0IHsgSWNvbkNvbmZpZywgaWNvbkl0ZW0gfSBmcm9tICdhcHAvZmVhdHVyZXMvY2FudmFzL2VsZW1lbnRzL2ljb24nO1xuXG5pbXBvcnQgeyBvcHRpb25CdWlsZGVyIH0gZnJvbSAnLi4vY2FudmFzL2VkaXRvci9vcHRpb25zJztcblxuaW1wb3J0IHsgSWNvblBhbmVsIH0gZnJvbSAnLi9JY29uUGFuZWwnO1xuaW1wb3J0IHsgZGVmYXVsdFBhbmVsT3B0aW9ucywgUGFuZWxPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMuZ2VuJztcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBQYW5lbFBsdWdpbjxQYW5lbE9wdGlvbnM+KEljb25QYW5lbClcbiAgLnNldE5vUGFkZGluZygpIC8vIGV4dGVuZCB0byBwYW5lbCBlZGdlc1xuICAudXNlRmllbGRDb25maWcoe1xuICAgIHN0YW5kYXJkT3B0aW9uczoge1xuICAgICAgW0ZpZWxkQ29uZmlnUHJvcGVydHkuTWFwcGluZ3NdOiB7XG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgaWNvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgLnNldFBhbmVsT3B0aW9ucygoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkTmVzdGVkT3B0aW9uczxDYW52YXNFbGVtZW50T3B0aW9uczxJY29uQ29uZmlnPj4oe1xuICAgICAgY2F0ZWdvcnk6IFsnSWNvbiddLFxuICAgICAgcGF0aDogJ3Jvb3QnLFxuXG4gICAgICAvLyBEeW5hbWljYWxseSBmaWxsIHRoZSBzZWxlY3RlZCBlbGVtZW50XG4gICAgICBidWlsZDogKGJ1aWxkZXIsIGN0eCkgPT4ge1xuICAgICAgICBpY29uSXRlbS5yZWdpc3Rlck9wdGlvbnNVSSEoYnVpbGRlciwgY3R4KTtcblxuICAgICAgICBvcHRpb25CdWlsZGVyLmFkZEJhY2tncm91bmQoYnVpbGRlciwgY3R4KTtcbiAgICAgICAgb3B0aW9uQnVpbGRlci5hZGRCb3JkZXIoYnVpbGRlciwgY3R4KTtcbiAgICAgIH0sXG5cbiAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFBhbmVsT3B0aW9ucy5yb290IGFzIGFueSxcbiAgICB9KTtcbiAgfSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiQnV0dG9uIiwiVGV4dERpbWVuc2lvbkVkaXRvciIsIkFQSUVkaXRvciIsImNhbGxBcGkiLCJCdXR0b25EaXNwbGF5IiwicmVuZGVyIiwiZGF0YSIsInByb3BzIiwib25DbGljayIsImFwaSIsInRleHQiLCJidXR0b25JdGVtIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJkaXNwbGF5IiwiZGVmYXVsdFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImdldE5ld09wdGlvbnMiLCJvcHRpb25zIiwicHJlcGFyZURhdGEiLCJjdHgiLCJjZmciLCJnZXRUZXh0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJyZWdpc3Rlck9wdGlvbnNVSSIsImJ1aWxkZXIiLCJjYXRlZ29yeSIsImFkZEN1c3RvbUVkaXRvciIsInBhdGgiLCJlZGl0b3IiLCJjc3MiLCJ1c2VTdHlsZXMyIiwiU2NhbGFyRGltZW5zaW9uRWRpdG9yIiwiRHJvbmVGcm9udERpc3BsYXkiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJkcm9uZUZyb250VHJhbnNmb3JtU3R5bGUiLCJyb2xsQW5nbGUiLCJkcm9uZUZyb250IiwidHJhbnNmb3JtIiwiZHJvbmVGcm9udEl0ZW0iLCJnZXRTY2FsYXIiLCJ0aGVtZSIsIkRyb25lU2lkZURpc3BsYXkiLCJkcm9uZVNpZGVQaXRjaFRyYW5zZm9ybVN0eWxlIiwicGl0Y2hBbmdsZSIsImRyb25lU2lkZSIsImRyb25lU2lkZUl0ZW0iLCJEcm9uZVRvcERpc3BsYXkiLCJmUmlnaHRSb3RvckFuaW1hdGlvbiIsImZSaWdodFJvdG9yUlBNIiwiTWF0aCIsImFicyIsImZMZWZ0Um90b3JBbmltYXRpb24iLCJmTGVmdFJvdG9yUlBNIiwiYlJpZ2h0Um90b3JBbmltYXRpb24iLCJiUmlnaHRSb3RvclJQTSIsImJMZWZ0Um90b3JBbmltYXRpb24iLCJiTGVmdFJvdG9yUlBNIiwiZHJvbmVUb3BUcmFuc2Zvcm1TdHlsZSIsInlhd0FuZ2xlIiwicHJvcGVsbGVyIiwicHJvcGVsbGVyQ1ciLCJhbmltYXRpb24iLCJwcm9wZWxsZXJDQ1ciLCJkcm9uZVRvcEl0ZW0iLCJpc1N0cmluZyIsIlNWRyIsIlJlc291cmNlRGltZW5zaW9uTW9kZSIsImdldFB1YmxpY09yQWJzb2x1dGVVcmwiLCJDb2xvckRpbWVuc2lvbkVkaXRvciIsIlJlc291cmNlRGltZW5zaW9uRWRpdG9yIiwic3ZnU3Ryb2tlUGF0aENsYXNzIiwiSWNvbkRpc3BsYXkiLCJzdmdTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VDb2xvciIsInN0cm9rZVdpZHRoIiwiaWNvbkl0ZW0iLCJwbGFjZW1lbnQiLCJ0b3AiLCJsZWZ0IiwiY29uZmlnIiwibW9kZSIsIkZpeGVkIiwiZml4ZWQiLCJnZXRSZXNvdXJjZSIsImdldENvbG9yIiwiY29sb3IiLCJzZXR0aW5ncyIsInJlc291cmNlVHlwZSIsImRlZmF1bHRWYWx1ZSIsImFkZFNsaWRlcklucHV0IiwibWluIiwibWF4Iiwic2hvd0lmIiwiQm9vbGVhbiIsIk5vdEZvdW5kRGlzcGxheSIsIkpTT04iLCJzdHJpbmdpZnkiLCJub3RGb3VuZEl0ZW0iLCJzdHlsZXNGYWN0b3J5IiwiQWxpZ24iLCJWQWxpZ24iLCJUZXh0Qm94RGlzcGxheSIsInRoZW1lMiIsImNvbnRhaW5lciIsInNwYW4iLCJ2YWxpZ24iLCJhbGlnbiIsInNpemUiLCJ0ZXh0Qm94SXRlbSIsImJhY2tncm91bmQiLCJMZWZ0IiwiTWlkZGxlIiwiQ2VudGVyIiwiYWRkUmFkaW8iLCJsYWJlbCIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiYWRkTnVtYmVySW5wdXQiLCJwbGFjZWhvbGRlciIsIldpbmRUdXJiaW5lRGlzcGxheSIsIndpbmRUdXJiaW5lQW5pbWF0aW9uIiwicnBtIiwiYmxhZGUiLCJ3aW5kVHVyYmluZUl0ZW0iLCJDYW52YXNGcmFtZU9wdGlvbnMiLCJSZWdpc3RyeSIsIkRFRkFVTFRfQ0FOVkFTX0VMRU1FTlRfQ09ORklHIiwidHlwZSIsImNhbnZhc0VsZW1lbnRSZWdpc3RyeSIsIkJhY2tncm91bmRJbWFnZVNpemUiLCJIb3Jpem9udGFsQ29uc3RyYWludCIsIlZlcnRpY2FsQ29uc3RyYWludCIsImNvdW50ZXIiLCJFbGVtZW50U3RhdGUiLCJjb25zdHJ1Y3RvciIsIml0ZW0iLCJwYXJlbnQiLCJ0YXJnZXQiLCJkaXYiLCJhcHBseUxheW91dFN0eWxlc1RvRGl2IiwiZXZlbnQiLCJoYXNIb3Jpem9udGFsQ2VudGVyQ29uc3RyYWludCIsImNvbnN0cmFpbnQiLCJob3Jpem9udGFsIiwiaGFzVmVydGljYWxDZW50ZXJDb25zdHJhaW50IiwidmVydGljYWwiLCJudW1iZXJPZlRhcmdldHMiLCJnZXRTY2VuZSIsInNlbGVjdG8iLCJnZXRTZWxlY3RlZFRhcmdldHMiLCJsZW5ndGgiLCJpc011bHRpU2VsZWN0aW9uIiwiZWxlbWVudENvbnRhaW5lciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInlPZmZzZXQiLCJzdHlsZSIsInRyYW5zbGF0ZSIsImRlbHRhWCIsImRlbHRhIiwiZGVsdGFZIiwiZGlyTFIiLCJkaXJlY3Rpb24iLCJkaXJUQiIsImZhbGxiYWNrTmFtZSIsIkRhdGUiLCJub3ciLCJzY2VuZSIsIm5ld05hbWUiLCJnZXROZXh0RWxlbWVudE5hbWUiLCJieU5hbWUiLCJzZXQiLCJ0cmF2IiwiaXNSb290IiwiZ2V0TmFtZSIsInBvc2l0aW9uIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJib3R0b20iLCJUb3BCb3R0b20iLCJTY2FsZSIsInJpZ2h0IiwiTGVmdFJpZ2h0Iiwic2l6ZVN0eWxlIiwia2V5IiwiZGF0YVN0eWxlIiwic2V0UGxhY2VtZW50RnJvbUNvbnN0cmFpbnQiLCJwYXJlbnRDb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwicmVsYXRpdmVUb3AiLCJyb3VuZCIsInJlbGF0aXZlQm90dG9tIiwicmVsYXRpdmVMZWZ0IiwicmVsYXRpdmVSaWdodCIsImVsZW1lbnRDZW50ZXIiLCJwYXJlbnRDZW50ZXIiLCJkaXN0YW5jZUZyb21DZW50ZXIiLCJyZXZJZCIsInVwZGF0ZURhdGEiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWFnZSIsInYiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJDb250YWluIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiQ292ZXIiLCJPcmlnaW5hbCIsIlRpbGUiLCJGaWxsIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYmFja2dyb3VuZE9yaWdpbiIsInZpc2l0IiwidmlzaXRvciIsIm9uQ2hhbmdlIiwiZ2V0SWZFeGlzdHMiLCJvbGROYW1lIiwic2F2ZSIsImRlbGV0ZSIsImdldFNhdmVNb2RlbCIsImluaXRFbGVtZW50IiwiVUlEIiwiUXVpY2tQbGFjZW1lbnQiLCJ1c2VDYWxsYmFjayIsIkFwcEV2ZW50cyIsImdldEJhY2tlbmRTcnYiLCJJbmxpbmVGaWVsZCIsIklubGluZUZpZWxkUm93IiwiSlNPTkZvcm1hdHRlciIsIlN0cmluZ1ZhbHVlRWRpdG9yIiwiYXBwRXZlbnRzIiwiZHVtbXlTdHJpbmdTZXR0aW5ncyIsImlzVGVzdCIsImZldGNoIiwidXJsIiwiZW5kcG9pbnQiLCJtZXRob2QiLCJzdWJzY3JpYmUiLCJlcnJvciIsImVtaXQiLCJhbGVydEVycm9yIiwiY29uc29sZSIsImNvbXBsZXRlIiwiYWxlcnRTdWNjZXNzIiwiY29udGV4dCIsImxhYmVsV2lkdGgiLCJvbkVuZHBvaW50Q2hhbmdlIiwib25EYXRhQ2hhbmdlIiwicmVuZGVySlNPTiIsImpzb24iLCJwYXJzZSIsIkVycm9yIiwibWVzc2FnZSIsInJlbmRlclRlc3RBUElCdXR0b24iLCJkaXNhYmxlU2FuaXRpemVIdG1sIiwib3B0aW9uQnVpbGRlciIsImFkZEJhY2tncm91bmQiLCJhZGRCb3JkZXIiLCJDb21wb25lbnQiLCJnZXRDb2xvckRpbWVuc2lvbkZyb21EYXRhIiwiZ2V0UmVzb3VyY2VEaW1lbnNpb25Gcm9tRGF0YSIsImdldFNjYWxhckRpbWVuc2lvbkZyb21EYXRhIiwiZ2V0U2NhbGVEaW1lbnNpb25Gcm9tRGF0YSIsImdldFRleHREaW1lbnNpb25Gcm9tRGF0YSIsIkljb25QYW5lbCIsImVsZW1lbnQiLCJyb290IiwidXBkYXRlU2l6ZSIsImRpbXMiLCJnZXRTY2FsZSIsInNjYWxlIiwic2NhbGFyIiwicmVzIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwiY2hhbmdlZCIsIm92ZXJmbG93IiwiZGVmYXVsdFBhbmVsT3B0aW9ucyIsIkZpZWxkQ29uZmlnUHJvcGVydHkiLCJQYW5lbFBsdWdpbiIsInBsdWdpbiIsInNldE5vUGFkZGluZyIsInVzZUZpZWxkQ29uZmlnIiwic3RhbmRhcmRPcHRpb25zIiwiTWFwcGluZ3MiLCJpY29uIiwic2V0UGFuZWxPcHRpb25zIiwiYWRkTmVzdGVkT3B0aW9ucyIsImJ1aWxkIl0sInNvdXJjZVJvb3QiOiIifQ==