"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_admin_UpgradePage_tsx"],{

/***/ "./public/app/features/admin/CrawlerStartButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrawlerStartButton": () => (/* binding */ CrawlerStartButton)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const CrawlerStartButton = () => {
  var _JSON$stringify;

  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)());
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    mode: 'thumbs',
    theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.theme2.isLight ? 'light' : 'dark'
  });

  const onDismiss = () => setOpen(false);

  const doStart = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/admin/crawler/start', body).then(v => {
      console.log('GOT', v);
      onDismiss();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      title: 'Start crawler',
      isOpen: open,
      onDismiss: onDismiss,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.wrap,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditor, {
          height: 200,
          value: (_JSON$stringify = JSON.stringify(body, null, 2)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '',
          showLineNumbers: false,
          readOnly: false,
          language: "json",
          showMiniMap: false,
          onBlur: text => {
            setBody(JSON.parse(text)); // force JSON?
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          type: "submit",
          onClick: doStart,
          children: "Start"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setOpen(true),
      variant: "primary",
      children: "Start"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 2px solid #111;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/CrawlerStatus.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrawlerStatus": () => (/* binding */ CrawlerStatus)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/CrawlerStartButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _CrawlerStartButton, _CrawlerStartButton2;









const CrawlerStatus = () => {
  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)());
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const subscription = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getGrafanaLiveSrv)().getStream({
      scope: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LiveChannelScope.Grafana,
      namespace: 'broadcast',
      path: 'crawler'
    }).subscribe({
      next: evt => {
        if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isLiveChannelMessageEvent)(evt)) {
          setStatus(evt.message);
        } else if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isLiveChannelStatusEvent)(evt)) {
          setStatus(evt.message);
        }
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!status) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.wrap,
      children: ["No status (never run)", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), _CrawlerStartButton || (_CrawlerStartButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__.CrawlerStartButton, {}))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
      children: JSON.stringify(status, null, 2)
    }), status.state !== 'running' && (_CrawlerStartButton2 || (_CrawlerStartButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CrawlerStartButton__WEBPACK_IMPORTED_MODULE_5__.CrawlerStartButton, {}))), status.state !== 'stopped' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      onClick: () => {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/admin/crawler/stop');
      },
      children: "Stop"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 4px solid red;
    `,
    running: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 4px solid green;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/ExportStartButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportStartButton": () => (/* binding */ ExportStartButton)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const ExportStartButton = () => {
  var _JSON$stringify;

  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)());
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    format: 'git',
    git: {}
  });

  const onDismiss = () => setOpen(false);

  const doStart = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/admin/export', body).then(v => {
      console.log('GOT', v);
      onDismiss();
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      title: 'Export grafana instance',
      isOpen: open,
      onDismiss: onDismiss,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.wrap,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditor, {
          height: 200,
          value: (_JSON$stringify = JSON.stringify(body, null, 2)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '',
          showLineNumbers: false,
          readOnly: false,
          language: "json",
          showMiniMap: false,
          onBlur: text => {
            setBody(JSON.parse(text)); // force JSON?
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: doStart,
          children: "Start"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setOpen(true),
      variant: "primary",
      children: "Export"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 2px solid #111;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/ExportStatus.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportStatus": () => (/* binding */ ExportStatus)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _ExportStartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/ExportStartButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _ExportStartButton, _ExportStartButton2;









const ExportStatus = () => {
  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)());
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const subscription = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getGrafanaLiveSrv)().getStream({
      scope: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LiveChannelScope.Grafana,
      namespace: 'broadcast',
      path: 'export'
    }).subscribe({
      next: evt => {
        if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isLiveChannelMessageEvent)(evt)) {
          setStatus(evt.message);
        } else if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isLiveChannelStatusEvent)(evt)) {
          setStatus(evt.message);
        }
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!status) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.wrap,
      children: _ExportStartButton || (_ExportStartButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ExportStartButton__WEBPACK_IMPORTED_MODULE_5__.ExportStartButton, {}))
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
      children: JSON.stringify(status, null, 2)
    }), Boolean(!status.running) && (_ExportStartButton2 || (_ExportStartButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ExportStartButton__WEBPACK_IMPORTED_MODULE_5__.ExportStartButton, {}))), Boolean(status.running) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      onClick: () => {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/admin/export/stop');
      },
      children: "Stop"
    })]
  });
};

const getStyles = theme => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 4px solid red;
    `,
    running: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 4px solid green;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/LicenseChrome.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "LicenseChrome": () => (/* binding */ LicenseChrome)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const title = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(theme => {
  const backgroundUrl = theme.isDark ? 'public/img/licensing/header_dark.svg' : 'public/img/licensing/header_light.svg';
  const footerBg = theme.isDark ? theme.palette.dark9 : theme.palette.gray6;
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: 36px 79px;
      background: ${theme.colors.panelBg};
    `,
    footer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-align: center;
      padding: 16px;
      background: ${footerBg};
    `,
    header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${backgroundUrl}') right;
    `
  };
});
function LicenseChrome({
  header,
  editionNotice,
  subheader,
  children
}) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const styles = getStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        style: title,
        children: header
      }), subheader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        children: subheader
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Circle, {
        size: "128px",
        style: {
          boxShadow: '0px 0px 24px rgba(24, 58, 110, 0.45)',
          background: '#0A1C36',
          position: 'absolute',
          top: '19px',
          left: '71%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: "public/img/grafana_icon.svg",
          alt: "Grafana",
          width: "80px",
          style: {
            position: 'absolute',
            left: '23px',
            top: '20px'
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.container,
      children: children
    }), editionNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.footer,
      children: editionNotice
    })]
  });
}
const Circle = ({
  size,
  style,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    style: Object.assign({
      width: size,
      height: size,
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderRadius: '50%'
    }, style),
    children: children
  });
};

/***/ }),

/***/ "./public/app/features/admin/ServerStats.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStats": () => (/* binding */ ServerStats)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
/* harmony import */ var _CrawlerStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/admin/CrawlerStatus.tsx");
/* harmony import */ var _ExportStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/admin/ExportStatus.tsx");
/* harmony import */ var _state_apis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/admin/state/apis.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Loader, _LinkButton, _LinkButton2, _LinkButton3, _LinkButton4, _CrawlerStatus, _ExportStatus;














const ServerStats = () => {
  const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const hasAccessToDataSources = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.DataSourcesRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin);
  const hasAccessToAdminUsers = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.UsersRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionServerStatsRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin)) {
      setIsLoading(true);
      (0,_state_apis__WEBPACK_IMPORTED_MODULE_9__.getServerStats)().then(stats => {
        setStats(stats);
        setIsLoading(false);
      });
    }
  }, []);

  if (!_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionServerStatsRead, _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.isGrafanaAdmin)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
      className: styles.title,
      children: "Instance statistics"
    }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: styles.loader,
      children: _Loader || (_Loader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_6__.Loader, {
        text: 'Loading instance stats...'
      }))
    }) : stats ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(StatCard, {
        content: [{
          name: 'Dashboards (starred)',
          value: `${stats.dashboards} (${stats.stars})`
        }, {
          name: 'Tags',
          value: stats.tags
        }, {
          name: 'Playlists',
          value: stats.playlists
        }, {
          name: 'Snapshots',
          value: stats.snapshots
        }],
        footer: _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          href: '/dashboards',
          variant: 'secondary',
          children: "Manage dashboards"
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.doubleRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(StatCard, {
          content: [{
            name: 'Data sources',
            value: stats.datasources
          }],
          footer: hasAccessToDataSources && (_LinkButton2 || (_LinkButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            href: '/datasources',
            variant: 'secondary',
            children: "Manage data sources"
          })))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(StatCard, {
          content: [{
            name: 'Alerts',
            value: stats.alerts
          }],
          footer: _LinkButton3 || (_LinkButton3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            href: '/alerting/list',
            variant: 'secondary',
            children: "Alerts"
          }))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(StatCard, {
        content: [{
          name: 'Organisations',
          value: stats.orgs
        }, {
          name: 'Users total',
          value: stats.users
        }, {
          name: 'Active users in last 30 days',
          value: stats.activeUsers
        }, {
          name: 'Active sessions',
          value: stats.activeSessions
        }],
        footer: hasAccessToAdminUsers && (_LinkButton4 || (_LinkButton4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          href: '/admin/users',
          variant: 'secondary',
          children: "Manage users"
        })))
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
      className: styles.notFound,
      children: "No stats found."
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.dashboardPreviews && _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.dashboardPreviewsAdmin && (_CrawlerStatus || (_CrawlerStatus = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_CrawlerStatus__WEBPACK_IMPORTED_MODULE_7__.CrawlerStatus, {}))), _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles["export"] && (_ExportStatus || (_ExportStatus = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ExportStatus__WEBPACK_IMPORTED_MODULE_8__.ExportStatus, {})))]
  });
};

const getStyles = theme => {
  return {
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(4)};
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${theme.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,
    doubleRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${theme.spacing(2)};
      }
    `,
    loader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 290px;
    `,
    notFound: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `
  };
};

const StatCard = ({
  content,
  footer
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getCardStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {
    className: styles.container,
    disableHover: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: styles.content,
        children: content.map(item => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: styles.row,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
              children: item.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
              children: item.value
            })]
          }, item.name);
        })
      }), footer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        children: footer
      })]
    })
  });
};

const getCardStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(2)};
    `,
    inner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1 0 auto;
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${theme.spacing(2)};
      align-items: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/admin/UpgradePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradeInfo": () => (/* binding */ UpgradeInfo),
/* harmony export */   "UpgradePage": () => (/* binding */ UpgradePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _LicenseChrome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/LicenseChrome.tsx");
/* harmony import */ var _ServerStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/admin/ServerStats.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _FeatureInfo, _ServiceInfo, _h, _CallToAction, _LinkButton, _h2, _List, _strong, _br, _GetEnterprise, _h3, _FeatureListing, _List2;












function UpgradePage({
  navModel
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ServerStats__WEBPACK_IMPORTED_MODULE_7__.ServerStats, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(UpgradeInfo, {
        editionNotice: "You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."
      })]
    }))
  });
}
const titleStyles = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
const UpgradeInfo = ({
  editionNotice
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
      className: styles.title,
      children: "Enterprise license"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_LicenseChrome__WEBPACK_IMPORTED_MODULE_6__.LicenseChrome, {
      header: "Grafana Enterprise",
      subheader: "Get your free trial",
      editionNotice: editionNotice,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: styles.column,
        children: [_FeatureInfo || (_FeatureInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FeatureInfo, {})), _ServiceInfo || (_ServiceInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ServiceInfo, {}))]
      })
    })]
  });
};

const getStyles = theme => {
  return {
    column: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(4)} 0;
    `
  };
};

const GetEnterprise = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    style: {
      marginTop: '40px',
      marginBottom: '30px'
    },
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
      style: titleStyles,
      children: "Get Grafana Enterprise"
    })), _CallToAction || (_CallToAction = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CallToAction, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      style: {
        paddingTop: '12px'
      },
      children: "You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends."
    })]
  });
};

const CallToAction = () => {
  return _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
    variant: "primary",
    size: "lg",
    href: "https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",
    children: "Contact us and get a free trial"
  }));
};

const ServiceInfo = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [_h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
      children: "At your service"
    })), _List || (_List = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
        title: "Enterprise Plugins",
        image: "public/img/licensing/plugin_enterprise.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
        title: "Critical SLA: 2 hours",
        image: "public/img/licensing/sla.svg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Item, {
        title: "Unlimited Expert Support",
        image: "public/img/licensing/customer_support.svg",
        children: ["24 x 7 x 365 support via", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
          nested: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
            title: "Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
            title: "Private Slack channel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
            title: "Phone"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
        title: "Hand-in-hand support",
        image: "public/img/licensing/handinhand_support.svg",
        children: "in the upgrade process"
      })]
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      style: {
        marginTop: '20px'
      },
      children: [_strong || (_strong = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
        children: "Also included:"
      })), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {})), "Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."]
    }), _GetEnterprise || (_GetEnterprise = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(GetEnterprise, {}))]
  });
};

const FeatureInfo = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    style: {
      paddingRight: '11px'
    },
    children: [_h3 || (_h3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
      children: "Enhanced functionality"
    })), _FeatureListing || (_FeatureListing = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(FeatureListing, {}))]
  });
};

const FeatureListing = () => {
  return _List2 || (_List2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Data source permissions"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Reporting"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "SAML authentication"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Enhanced LDAP integration"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Team Sync",
      children: "LDAP, GitHub OAuth, Auth Proxy, Okta"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "White labeling"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Auditing"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Settings updates at runtime"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Grafana usage insights",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
        nested: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Sort dashboards by popularity in search"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Find unused dashboards"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Dashboard usage stats drawer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Dashboard presence indicators"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
      title: "Enterprise plugins",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(List, {
        nested: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Oracle"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Splunk"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Service Now"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Dynatrace"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "New Relic"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "DataDog"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "AppDynamics"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "SAP HANA\xAE"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Gitlab"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Honeycomb"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Jira"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "MongoDB"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Salesforce"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Snowflake"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Item, {
          title: "Wavefront"
        })]
      })
    })]
  }));
};

const List = ({
  children,
  nested
}) => {
  const listStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${nested ? 0 : 8}px;
    }
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: listStyle,
    children: children
  });
};

const Item = ({
  children,
  title,
  image
}) => {
  const imageUrl = image ? image : 'public/img/licensing/checkmark.svg';
  const itemStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `;
  const titleStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-weight: 500;
    line-height: 1.7;
  `;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: itemStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: imageUrl,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: titleStyle,
        children: title
      }), children]
    })]
  });
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'upgrading')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(UpgradePage));

/***/ }),

/***/ "./public/app/features/admin/state/apis.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerStats": () => (/* binding */ getServerStats)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

const getServerStats = async () => {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('api/admin/stats').catch(err => {
    console.error(err);
    return null;
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Loader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const Loader = ({
  text = 'Loading...'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "page-loader-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
      text: text
    })
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19hZG1pbl9VcGdyYWRlUGFnZV90c3guNGNjYzQyZWZjZGI3NmNmOTE3YzkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFTyxNQUFNUyxrQkFBa0IsR0FBRyxNQUFNO0VBQUE7O0VBQ3RDLE1BQU1DLE1BQU0sR0FBR0MsU0FBUyxDQUFDSCxzREFBUyxFQUFWLENBQXhCO0VBQ0EsTUFBTSxDQUFDSSxJQUFELEVBQU9DLE9BQVAsSUFBa0JYLCtDQUFRLENBQUMsS0FBRCxDQUFoQztFQUNBLE1BQU0sQ0FBQ1ksSUFBRCxFQUFPQyxPQUFQLElBQWtCYiwrQ0FBUSxDQUFDO0lBQy9CYyxJQUFJLEVBQUUsUUFEeUI7SUFFL0JDLEtBQUssRUFBRWIsbUVBQUEsR0FBd0IsT0FBeEIsR0FBa0M7RUFGVixDQUFELENBQWhDOztFQUlBLE1BQU1nQixTQUFTLEdBQUcsTUFBTVAsT0FBTyxDQUFDLEtBQUQsQ0FBL0I7O0VBQ0EsTUFBTVEsT0FBTyxHQUFHLE1BQU07SUFDcEJsQiwrREFBYSxHQUNWbUIsSUFESCxDQUNRLDBCQURSLEVBQ29DUixJQURwQyxFQUVHUyxJQUZILENBRVNDLENBQUQsSUFBTztNQUNYQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixDQUFuQjtNQUNBSixTQUFTO0lBQ1YsQ0FMSDtFQU1ELENBUEQ7O0VBU0Esb0JBQ0U7SUFBQSx3QkFDRSx3REFBQyw4Q0FBRDtNQUFPLEtBQUssRUFBRSxlQUFkO01BQStCLE1BQU0sRUFBRVIsSUFBdkM7TUFBNkMsU0FBUyxFQUFFUSxTQUF4RDtNQUFBLHdCQUNFO1FBQUssU0FBUyxFQUFFVixNQUFNLENBQUNpQixJQUF2QjtRQUFBLHVCQUNFLHVEQUFDLG1EQUFEO1VBQ0UsTUFBTSxFQUFFLEdBRFY7VUFFRSxLQUFLLHFCQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEz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SUFBQSx3QkFDRTtNQUFLLEdBQUcsRUFBRUQsUUFBVjtNQUFvQixHQUFHLEVBQUM7SUFBeEIsRUFERixlQUVFO01BQUEsd0JBQ0U7UUFBSyxTQUFTLEVBQUVFLFVBQWhCO1FBQUEsVUFBNkJ6RztNQUE3QixFQURGLEVBRUdrQixRQUZIO0lBQUEsRUFGRjtFQUFBLEVBREY7QUFTRCxDQTFCRDs7QUE0QkEsTUFBTXdGLGVBQWUsR0FBSW5ILEtBQUQsS0FBd0I7RUFDOUM4RixRQUFRLEVBQUVGLHFFQUFXLENBQUM1RixLQUFLLENBQUNvSCxRQUFQLEVBQWlCLFdBQWpCO0FBRHlCLENBQXhCLENBQXhCOztBQUlBLGlFQUFlMUIsb0RBQU8sQ0FBQ3lCLGVBQUQsQ0FBUCxDQUF5QnRCLFdBQXpCLENBQWY7Ozs7Ozs7Ozs7OztBQzNPQTtBQXNCTyxNQUFNOUMsY0FBYyxHQUFHLFlBQXdDO0VBQ3BFLE9BQU8vRiwrREFBYSxHQUNqQnFLLEdBREksQ0FDQSxpQkFEQSxFQUVKQyxLQUZJLENBRUdDLEdBQUQsSUFBUztJQUNkakosT0FBTyxDQUFDa0osS0FBUixDQUFjRCxHQUFkO0lBQ0EsT0FBTyxJQUFQO0VBQ0QsQ0FMSSxDQUFQO0FBTUQsQ0FQTTs7Ozs7Ozs7Ozs7Ozs7QUN0QlA7QUFFQTs7QUFNTyxNQUFNekUsTUFBTSxHQUFHLENBQUM7RUFBRW5FLElBQUksR0FBRztBQUFULENBQUQsS0FBb0M7RUFDeEQsb0JBQ0U7SUFBSyxTQUFTLEVBQUMscUJBQWY7SUFBQSx1QkFDRSx1REFBQywyREFBRDtNQUFvQixJQUFJLEVBQUVBO0lBQTFCO0VBREYsRUFERjtBQUtELENBTk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9DcmF3bGVyU3RhcnRCdXR0b24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0NyYXdsZXJTdGF0dXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0V4cG9ydFN0YXJ0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9FeHBvcnRTdGF0dXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0xpY2Vuc2VDaHJvbWUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL1NlcnZlclN0YXRzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9VcGdyYWRlUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vc3RhdGUvYXBpcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0xvYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIENvZGVFZGl0b3IsIE1vZGFsLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBjb25zdCBDcmF3bGVyU3RhcnRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZTIoKSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoe1xuICAgIG1vZGU6ICd0aHVtYnMnLFxuICAgIHRoZW1lOiBjb25maWcudGhlbWUyLmlzTGlnaHQgPyAnbGlnaHQnIDogJ2RhcmsnLFxuICB9KTtcbiAgY29uc3Qgb25EaXNtaXNzID0gKCkgPT4gc2V0T3BlbihmYWxzZSk7XG4gIGNvbnN0IGRvU3RhcnQgPSAoKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAucG9zdCgnL2FwaS9hZG1pbi9jcmF3bGVyL3N0YXJ0JywgYm9keSlcbiAgICAgIC50aGVuKCh2KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHT1QnLCB2KTtcbiAgICAgICAgb25EaXNtaXNzKCk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kYWwgdGl0bGU9eydTdGFydCBjcmF3bGVyJ30gaXNPcGVuPXtvcGVufSBvbkRpc21pc3M9e29uRGlzbWlzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgdmFsdWU9e0pTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpID8/ICcnfVxuICAgICAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXtmYWxzZX1cbiAgICAgICAgICAgIHJlYWRPbmx5PXtmYWxzZX1cbiAgICAgICAgICAgIGxhbmd1YWdlPVwianNvblwiXG4gICAgICAgICAgICBzaG93TWluaU1hcD17ZmFsc2V9XG4gICAgICAgICAgICBvbkJsdXI9eyh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgc2V0Qm9keShKU09OLnBhcnNlKHRleHQpKTsgLy8gZm9yY2UgSlNPTj9cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17ZG9TdGFydH0+XG4gICAgICAgICAgICBTdGFydFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e29uRGlzbWlzc30+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICA8L01vZGFsPlxuXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9IHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgIFN0YXJ0XG4gICAgICA8L0J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXA6IGNzc2BcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMTE7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQsIGlzTGl2ZUNoYW5uZWxTdGF0dXNFdmVudCwgTGl2ZUNoYW5uZWxTY29wZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgZ2V0R3JhZmFuYUxpdmVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDcmF3bGVyU3RhcnRCdXR0b24gfSBmcm9tICcuL0NyYXdsZXJTdGFydEJ1dHRvbic7XG5cbmludGVyZmFjZSBDcmF3bGVyU3RhdHVzTWVzc2FnZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIHN0YXJ0ZWQ6IHN0cmluZztcbiAgZmluaXNoZWQ6IHN0cmluZztcbiAgY29tcGxldGU6IG51bWJlcjtcbiAgcXVldWU6IG51bWJlcjtcbiAgbGFzdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ3Jhd2xlclN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lMigpKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPENyYXdsZXJTdGF0dXNNZXNzYWdlPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gZ2V0R3JhZmFuYUxpdmVTcnYoKVxuICAgICAgLmdldFN0cmVhbTxDcmF3bGVyU3RhdHVzTWVzc2FnZT4oe1xuICAgICAgICBzY29wZTogTGl2ZUNoYW5uZWxTY29wZS5HcmFmYW5hLFxuICAgICAgICBuYW1lc3BhY2U6ICdicm9hZGNhc3QnLFxuICAgICAgICBwYXRoOiAnY3Jhd2xlcicsXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChldnQpID0+IHtcbiAgICAgICAgICBpZiAoaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudChldnQpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZXZ0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50KGV2dCkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhldnQubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBpZiAoIXN0YXR1cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICBObyBzdGF0dXMgKG5ldmVyIHJ1bilcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxDcmF3bGVyU3RhcnRCdXR0b24gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShzdGF0dXMsIG51bGwsIDIpfTwvcHJlPlxuICAgICAge3N0YXR1cy5zdGF0ZSAhPT0gJ3J1bm5pbmcnICYmIDxDcmF3bGVyU3RhcnRCdXR0b24gLz59XG4gICAgICB7c3RhdHVzLnN0YXRlICE9PSAnc3RvcHBlZCcgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvYWRtaW4vY3Jhd2xlci9zdG9wJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN0b3BcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xuICAgIGAsXG4gICAgcnVubmluZzogY3NzYFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIENvZGVFZGl0b3IsIE1vZGFsLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBjb25zdCBFeHBvcnRTdGFydEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lMigpKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSh7XG4gICAgZm9ybWF0OiAnZ2l0JyxcbiAgICBnaXQ6IHt9LFxuICB9KTtcbiAgY29uc3Qgb25EaXNtaXNzID0gKCkgPT4gc2V0T3BlbihmYWxzZSk7XG4gIGNvbnN0IGRvU3RhcnQgPSAoKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAucG9zdCgnL2FwaS9hZG1pbi9leHBvcnQnLCBib2R5KVxuICAgICAgLnRoZW4oKHYpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dPVCcsIHYpO1xuICAgICAgICBvbkRpc21pc3MoKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCB0aXRsZT17J0V4cG9ydCBncmFmYW5hIGluc3RhbmNlJ30gaXNPcGVuPXtvcGVufSBvbkRpc21pc3M9e29uRGlzbWlzc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgdmFsdWU9e0pTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpID8/ICcnfVxuICAgICAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXtmYWxzZX1cbiAgICAgICAgICAgIHJlYWRPbmx5PXtmYWxzZX1cbiAgICAgICAgICAgIGxhbmd1YWdlPVwianNvblwiXG4gICAgICAgICAgICBzaG93TWluaU1hcD17ZmFsc2V9XG4gICAgICAgICAgICBvbkJsdXI9eyh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgc2V0Qm9keShKU09OLnBhcnNlKHRleHQpKTsgLy8gZm9yY2UgSlNPTj9cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtkb1N0YXJ0fT5TdGFydDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e29uRGlzbWlzc30+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICA8L01vZGFsPlxuXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9IHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgIEV4cG9ydFxuICAgICAgPC9CdXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBjc3NgXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50LCBpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQsIExpdmVDaGFubmVsU2NvcGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGdldEdyYWZhbmFMaXZlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRXhwb3J0U3RhcnRCdXR0b24gfSBmcm9tICcuL0V4cG9ydFN0YXJ0QnV0dG9uJztcblxuaW50ZXJmYWNlIEV4cG9ydFN0YXR1c01lc3NhZ2Uge1xuICBydW5uaW5nOiBib29sZWFuO1xuICB0YXJnZXQ6IHN0cmluZztcbiAgc3RhcnRlZDogbnVtYmVyO1xuICBmaW5pc2hlZDogbnVtYmVyO1xuICB1cGRhdGU6IG51bWJlcjtcbiAgY291bnQ6IG51bWJlcjtcbiAgY3VycmVudDogbnVtYmVyO1xuICBsYXN0OiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRXhwb3J0U3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModXNlVGhlbWUyKCkpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8RXhwb3J0U3RhdHVzTWVzc2FnZT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGdldEdyYWZhbmFMaXZlU3J2KClcbiAgICAgIC5nZXRTdHJlYW08RXhwb3J0U3RhdHVzTWVzc2FnZT4oe1xuICAgICAgICBzY29wZTogTGl2ZUNoYW5uZWxTY29wZS5HcmFmYW5hLFxuICAgICAgICBuYW1lc3BhY2U6ICdicm9hZGNhc3QnLFxuICAgICAgICBwYXRoOiAnZXhwb3J0JyxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKGV2dCkgPT4ge1xuICAgICAgICAgIGlmIChpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50KGV2dCkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhldnQubWVzc2FnZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQoZXZ0KSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKGV2dC5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGlmICghc3RhdHVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgIDxFeHBvcnRTdGFydEJ1dHRvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHN0YXR1cywgbnVsbCwgMil9PC9wcmU+XG4gICAgICB7Qm9vbGVhbighc3RhdHVzLnJ1bm5pbmcpICYmIDxFeHBvcnRTdGFydEJ1dHRvbiAvPn1cbiAgICAgIHtCb29sZWFuKHN0YXR1cy5ydW5uaW5nKSAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9hZG1pbi9leHBvcnQvc3RvcCcpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTdG9wXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXA6IGNzc2BcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJlZDtcbiAgICBgLFxuICAgIHJ1bm5pbmc6IGNzc2BcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc3R5bGVzRmFjdG9yeSwgdXNlVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmNvbnN0IHRpdGxlID0geyBmb250V2VpZ2h0OiA1MDAsIGZvbnRTaXplOiAnMjZweCcsIGxpbmVIZWlnaHQ6ICcxMjMlJyB9O1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIGNvbnN0IGJhY2tncm91bmRVcmwgPSB0aGVtZS5pc0RhcmsgPyAncHVibGljL2ltZy9saWNlbnNpbmcvaGVhZGVyX2Rhcmsuc3ZnJyA6ICdwdWJsaWMvaW1nL2xpY2Vuc2luZy9oZWFkZXJfbGlnaHQuc3ZnJztcbiAgY29uc3QgZm9vdGVyQmcgPSB0aGVtZS5pc0RhcmsgPyB0aGVtZS5wYWxldHRlLmRhcms5IDogdGhlbWUucGFsZXR0ZS5ncmF5NjtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgcGFkZGluZzogMzZweCA3OXB4O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucGFuZWxCZ307XG4gICAgYCxcbiAgICBmb290ZXI6IGNzc2BcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke2Zvb3RlckJnfTtcbiAgICBgLFxuICAgIGhlYWRlcjogY3NzYFxuICAgICAgaGVpZ2h0OiAxMzdweDtcbiAgICAgIHBhZGRpbmc6IDQwcHggMCAwIDc5cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJyR7YmFja2dyb3VuZFVybH0nKSByaWdodDtcbiAgICBgLFxuICB9O1xufSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGhlYWRlcjogc3RyaW5nO1xuICBzdWJoZWFkZXI/OiBzdHJpbmc7XG4gIGVkaXRpb25Ob3RpY2U/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGljZW5zZUNocm9tZSh7IGhlYWRlciwgZWRpdGlvbk5vdGljZSwgc3ViaGVhZGVyLCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh0aGVtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8aDIgc3R5bGU9e3RpdGxlfT57aGVhZGVyfTwvaDI+XG4gICAgICAgIHtzdWJoZWFkZXIgJiYgPGgzPntzdWJoZWFkZXJ9PC9oMz59XG5cbiAgICAgICAgPENpcmNsZVxuICAgICAgICAgIHNpemU9XCIxMjhweFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggMjRweCByZ2JhKDI0LCA1OCwgMTEwLCAwLjQ1KScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBBMUMzNicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogJzE5cHgnLFxuICAgICAgICAgICAgbGVmdDogJzcxJScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cInB1YmxpYy9pbWcvZ3JhZmFuYV9pY29uLnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJHcmFmYW5hXCJcbiAgICAgICAgICAgIHdpZHRoPVwiODBweFwiXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzIzcHgnLCB0b3A6ICcyMHB4JyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2lyY2xlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT57Y2hpbGRyZW59PC9kaXY+XG5cbiAgICAgIHtlZGl0aW9uTm90aWNlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT57ZWRpdGlvbk5vdGljZX08L2Rpdj59XG4gICAgPC8+XG4gICk7XG59XG5cbmludGVyZmFjZSBDaXJjbGVQcm9wcyB7XG4gIHNpemU6IHN0cmluZztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgY29uc3QgQ2lyY2xlOiBSZWFjdC5GQzxDaXJjbGVQcm9wcz4gPSAoeyBzaXplLCBzdHlsZSwgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBDYXJkQ29udGFpbmVyLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9Mb2FkZXInO1xuXG5pbXBvcnQgeyBDcmF3bGVyU3RhdHVzIH0gZnJvbSAnLi9DcmF3bGVyU3RhdHVzJztcbmltcG9ydCB7IEV4cG9ydFN0YXR1cyB9IGZyb20gJy4vRXhwb3J0U3RhdHVzJztcbmltcG9ydCB7IGdldFNlcnZlclN0YXRzLCBTZXJ2ZXJTdGF0IH0gZnJvbSAnLi9zdGF0ZS9hcGlzJztcblxuZXhwb3J0IGNvbnN0IFNlcnZlclN0YXRzID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPFNlcnZlclN0YXQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGhhc0FjY2Vzc1RvRGF0YVNvdXJjZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbik7XG4gIGNvbnN0IGhhc0FjY2Vzc1RvQWRtaW5Vc2VycyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uVXNlcnNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblNlcnZlclN0YXRzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbikpIHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIGdldFNlcnZlclN0YXRzKCkudGhlbigoc3RhdHMpID0+IHtcbiAgICAgICAgc2V0U3RhdHMoc3RhdHMpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKCFjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblNlcnZlclN0YXRzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SW5zdGFuY2Ugc3RhdGlzdGljczwvaDI+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgICAgPExvYWRlciB0ZXh0PXsnTG9hZGluZyBpbnN0YW5jZSBzdGF0cy4uLid9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHN0YXRzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICBjb250ZW50PXtbXG4gICAgICAgICAgICAgIHsgbmFtZTogJ0Rhc2hib2FyZHMgKHN0YXJyZWQpJywgdmFsdWU6IGAke3N0YXRzLmRhc2hib2FyZHN9ICgke3N0YXRzLnN0YXJzfSlgIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1RhZ3MnLCB2YWx1ZTogc3RhdHMudGFncyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdQbGF5bGlzdHMnLCB2YWx1ZTogc3RhdHMucGxheWxpc3RzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1NuYXBzaG90cycsIHZhbHVlOiBzdGF0cy5zbmFwc2hvdHMgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2Rhc2hib2FyZHMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgTWFuYWdlIGRhc2hib2FyZHNcbiAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvdWJsZVJvd30+XG4gICAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgICAgY29udGVudD17W3sgbmFtZTogJ0RhdGEgc291cmNlcycsIHZhbHVlOiBzdGF0cy5kYXRhc291cmNlcyB9XX1cbiAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICBoYXNBY2Nlc3NUb0RhdGFTb3VyY2VzICYmIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvZGF0YXNvdXJjZXMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICAgIE1hbmFnZSBkYXRhIHNvdXJjZXNcbiAgICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgICAgY29udGVudD17W3sgbmFtZTogJ0FsZXJ0cycsIHZhbHVlOiBzdGF0cy5hbGVydHMgfV19XG4gICAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9hbGVydGluZy9saXN0J30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgICAgQWxlcnRzXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgY29udGVudD17W1xuICAgICAgICAgICAgICB7IG5hbWU6ICdPcmdhbmlzYXRpb25zJywgdmFsdWU6IHN0YXRzLm9yZ3MgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnVXNlcnMgdG90YWwnLCB2YWx1ZTogc3RhdHMudXNlcnMgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnQWN0aXZlIHVzZXJzIGluIGxhc3QgMzAgZGF5cycsIHZhbHVlOiBzdGF0cy5hY3RpdmVVc2VycyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdBY3RpdmUgc2Vzc2lvbnMnLCB2YWx1ZTogc3RhdHMuYWN0aXZlU2Vzc2lvbnMgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICBoYXNBY2Nlc3NUb0FkbWluVXNlcnMgJiYgKFxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvYWRtaW4vdXNlcnMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICBNYW5hZ2UgdXNlcnNcbiAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5ObyBzdGF0cyBmb3VuZC48L3A+XG4gICAgICApfVxuXG4gICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLmRhc2hib2FyZFByZXZpZXdzICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5kYXNoYm9hcmRQcmV2aWV3c0FkbWluICYmIDxDcmF3bGVyU3RhdHVzIC8+fVxuICAgICAge2NvbmZpZy5mZWF0dXJlVG9nZ2xlcy5leHBvcnQgJiYgPEV4cG9ydFN0YXR1cyAvPn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGAsXG4gICAgcm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICYgPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgfVxuXG4gICAgICAmID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xuICAgICAgfVxuICAgIGAsXG4gICAgZG91YmxlUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIH1cbiAgICBgLFxuXG4gICAgbG9hZGVyOiBjc3NgXG4gICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGAsXG5cbiAgICBub3RGb3VuZDogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDYuZm9udFNpemV9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICBgLFxuICB9O1xufTtcblxudHlwZSBTdGF0Q2FyZFByb3BzID0ge1xuICBjb250ZW50OiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBudW1iZXIgfCBzdHJpbmc+PjtcbiAgZm9vdGVyPzogSlNYLkVsZW1lbnQgfCBib29sZWFuO1xufTtcblxuY29uc3QgU3RhdENhcmQgPSAoeyBjb250ZW50LCBmb290ZXIgfTogU3RhdENhcmRQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldENhcmRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxDYXJkQ29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZGlzYWJsZUhvdmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAge2NvbnRlbnQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Zvb3RlciAmJiA8ZGl2Pntmb290ZXJ9PC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkQ29udGFpbmVyPlxuICApO1xufTtcblxuY29uc3QgZ2V0Q2FyZFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIGlubmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gICAgY29udGVudDogY3NzYFxuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IExpY2Vuc2VDaHJvbWUgfSBmcm9tICcuL0xpY2Vuc2VDaHJvbWUnO1xuaW1wb3J0IHsgU2VydmVyU3RhdHMgfSBmcm9tICcuL1NlcnZlclN0YXRzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXBncmFkZVBhZ2UoeyBuYXZNb2RlbCB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPFNlcnZlclN0YXRzIC8+XG4gICAgICAgIDxVcGdyYWRlSW5mb1xuICAgICAgICAgIGVkaXRpb25Ob3RpY2U9XCJZb3UgYXJlIHJ1bm5pbmcgdGhlIG9wZW4tc291cmNlIHZlcnNpb24gb2YgR3JhZmFuYS5cbiAgICAgICAgWW91IGhhdmUgdG8gaW5zdGFsbCB0aGUgRW50ZXJwcmlzZSBlZGl0aW9uIGluIG9yZGVyIGVuYWJsZSBFbnRlcnByaXNlIGZlYXR1cmVzLlwiXG4gICAgICAgIC8+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5jb25zdCB0aXRsZVN0eWxlcyA9IHsgZm9udFdlaWdodDogNTAwLCBmb250U2l6ZTogJzI2cHgnLCBsaW5lSGVpZ2h0OiAnMTIzJScgfTtcblxuaW50ZXJmYWNlIFVwZ3JhZGVJbmZvUHJvcHMge1xuICBlZGl0aW9uTm90aWNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVXBncmFkZUluZm86IFJlYWN0LkZDPFVwZ3JhZGVJbmZvUHJvcHM+ID0gKHsgZWRpdGlvbk5vdGljZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkVudGVycHJpc2UgbGljZW5zZTwvaDI+XG4gICAgICA8TGljZW5zZUNocm9tZSBoZWFkZXI9XCJHcmFmYW5hIEVudGVycHJpc2VcIiBzdWJoZWFkZXI9XCJHZXQgeW91ciBmcmVlIHRyaWFsXCIgZWRpdGlvbk5vdGljZT17ZWRpdGlvbk5vdGljZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufT5cbiAgICAgICAgICA8RmVhdHVyZUluZm8gLz5cbiAgICAgICAgICA8U2VydmljZUluZm8gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpY2Vuc2VDaHJvbWU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2x1bW46IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAgICAgcm93LWdhcDogNDBweDtcblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwNTBweCkge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICB9XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoNCl9IDA7XG4gICAgYCxcbiAgfTtcbn07XG5cbmNvbnN0IEdldEVudGVycHJpc2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNDBweCcsIG1hcmdpbkJvdHRvbTogJzMwcHgnIH19PlxuICAgICAgPGgyIHN0eWxlPXt0aXRsZVN0eWxlc30+R2V0IEdyYWZhbmEgRW50ZXJwcmlzZTwvaDI+XG4gICAgICA8Q2FsbFRvQWN0aW9uIC8+XG4gICAgICA8cCBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMTJweCcgfX0+XG4gICAgICAgIFlvdSBjYW4gdXNlIHRoZSB0cmlhbCB2ZXJzaW9uIGZvciBmcmVlIGZvciAzMCBkYXlzLiBXZSB3aWxsIHJlbWluZCB5b3UgYWJvdXQgaXQgZml2ZSBkYXlzIGJlZm9yZSB0aGUgdHJpYWxcbiAgICAgICAgcGVyaW9kIGVuZHMuXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBDYWxsVG9BY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rQnV0dG9uXG4gICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICBzaXplPVwibGdcIlxuICAgICAgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb20vY29udGFjdD9hYm91dD1ncmFmYW5hLWVudGVycHJpc2UmdXRtX3NvdXJjZT1ncmFmYW5hLXVwZ3JhZGUtcGFnZVwiXG4gICAgPlxuICAgICAgQ29udGFjdCB1cyBhbmQgZ2V0IGEgZnJlZSB0cmlhbFxuICAgIDwvTGlua0J1dHRvbj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlcnZpY2VJbmZvOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0PkF0IHlvdXIgc2VydmljZTwvaDQ+XG5cbiAgICAgIDxMaXN0PlxuICAgICAgICA8SXRlbSB0aXRsZT1cIkVudGVycHJpc2UgUGx1Z2luc1wiIGltYWdlPVwicHVibGljL2ltZy9saWNlbnNpbmcvcGx1Z2luX2VudGVycHJpc2Uuc3ZnXCIgLz5cbiAgICAgICAgPEl0ZW0gdGl0bGU9XCJDcml0aWNhbCBTTEE6IDIgaG91cnNcIiBpbWFnZT1cInB1YmxpYy9pbWcvbGljZW5zaW5nL3NsYS5zdmdcIiAvPlxuICAgICAgICA8SXRlbSB0aXRsZT1cIlVubGltaXRlZCBFeHBlcnQgU3VwcG9ydFwiIGltYWdlPVwicHVibGljL2ltZy9saWNlbnNpbmcvY3VzdG9tZXJfc3VwcG9ydC5zdmdcIj5cbiAgICAgICAgICAyNCB4IDcgeCAzNjUgc3VwcG9ydCB2aWFcbiAgICAgICAgICA8TGlzdCBuZXN0ZWQ9e3RydWV9PlxuICAgICAgICAgICAgPEl0ZW0gdGl0bGU9XCJFbWFpbFwiIC8+XG4gICAgICAgICAgICA8SXRlbSB0aXRsZT1cIlByaXZhdGUgU2xhY2sgY2hhbm5lbFwiIC8+XG4gICAgICAgICAgICA8SXRlbSB0aXRsZT1cIlBob25lXCIgLz5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0gdGl0bGU9XCJIYW5kLWluLWhhbmQgc3VwcG9ydFwiIGltYWdlPVwicHVibGljL2ltZy9saWNlbnNpbmcvaGFuZGluaGFuZF9zdXBwb3J0LnN2Z1wiPlxuICAgICAgICAgIGluIHRoZSB1cGdyYWRlIHByb2Nlc3NcbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnIH19PlxuICAgICAgICA8c3Ryb25nPkFsc28gaW5jbHVkZWQ6PC9zdHJvbmc+XG4gICAgICAgIDxiciAvPlxuICAgICAgICBJbmRlbW5pZmljYXRpb24sIHdvcmtpbmcgd2l0aCBHcmFmYW5hIExhYnMgb24gZnV0dXJlIHByaW9yaXRpemF0aW9uLCBhbmQgdHJhaW5pbmcgZnJvbSB0aGUgY29yZSBHcmFmYW5hIHRlYW0uXG4gICAgICA8L2Rpdj5cblxuICAgICAgPEdldEVudGVycHJpc2UgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEZlYXR1cmVJbmZvOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogJzExcHgnIH19PlxuICAgICAgPGg0PkVuaGFuY2VkIGZ1bmN0aW9uYWxpdHk8L2g0PlxuICAgICAgPEZlYXR1cmVMaXN0aW5nIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBGZWF0dXJlTGlzdGluZzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpc3Q+XG4gICAgICA8SXRlbSB0aXRsZT1cIkRhdGEgc291cmNlIHBlcm1pc3Npb25zXCIgLz5cbiAgICAgIDxJdGVtIHRpdGxlPVwiUmVwb3J0aW5nXCIgLz5cbiAgICAgIDxJdGVtIHRpdGxlPVwiU0FNTCBhdXRoZW50aWNhdGlvblwiIC8+XG4gICAgICA8SXRlbSB0aXRsZT1cIkVuaGFuY2VkIExEQVAgaW50ZWdyYXRpb25cIiAvPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJUZWFtIFN5bmNcIj5MREFQLCBHaXRIdWIgT0F1dGgsIEF1dGggUHJveHksIE9rdGE8L0l0ZW0+XG4gICAgICA8SXRlbSB0aXRsZT1cIldoaXRlIGxhYmVsaW5nXCIgLz5cbiAgICAgIDxJdGVtIHRpdGxlPVwiQXVkaXRpbmdcIiAvPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJTZXR0aW5ncyB1cGRhdGVzIGF0IHJ1bnRpbWVcIiAvPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJHcmFmYW5hIHVzYWdlIGluc2lnaHRzXCI+XG4gICAgICAgIDxMaXN0IG5lc3RlZD17dHJ1ZX0+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJTb3J0IGRhc2hib2FyZHMgYnkgcG9wdWxhcml0eSBpbiBzZWFyY2hcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiRmluZCB1bnVzZWQgZGFzaGJvYXJkc1wiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJEYXNoYm9hcmQgdXNhZ2Ugc3RhdHMgZHJhd2VyXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIkRhc2hib2FyZCBwcmVzZW5jZSBpbmRpY2F0b3JzXCIgLz5cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0gdGl0bGU9XCJFbnRlcnByaXNlIHBsdWdpbnNcIj5cbiAgICAgICAgPExpc3QgbmVzdGVkPXt0cnVlfT5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIk9yYWNsZVwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJTcGx1bmtcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiU2VydmljZSBOb3dcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiRHluYXRyYWNlXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIk5ldyBSZWxpY1wiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJEYXRhRG9nXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIkFwcER5bmFtaWNzXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIlNBUCBIQU5Bwq5cIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiR2l0bGFiXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIkhvbmV5Y29tYlwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJKaXJhXCIgLz5cbiAgICAgICAgICA8SXRlbSB0aXRsZT1cIk1vbmdvREJcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiU2FsZXNmb3JjZVwiIC8+XG4gICAgICAgICAgPEl0ZW0gdGl0bGU9XCJTbm93Zmxha2VcIiAvPlxuICAgICAgICAgIDxJdGVtIHRpdGxlPVwiV2F2ZWZyb250XCIgLz5cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9JdGVtPlxuICAgIDwvTGlzdD5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBMaXN0UHJvcHMge1xuICBuZXN0ZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBMaXN0OiBSZWFjdC5GQzxMaXN0UHJvcHM+ID0gKHsgY2hpbGRyZW4sIG5lc3RlZCB9KSA9PiB7XG4gIGNvbnN0IGxpc3RTdHlsZSA9IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDhweDtcblxuICAgID4gZGl2IHtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7bmVzdGVkID8gMCA6IDh9cHg7XG4gICAgfVxuICBgO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17bGlzdFN0eWxlfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xufVxuXG5jb25zdCBJdGVtOiBSZWFjdC5GQzxJdGVtUHJvcHM+ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBpbWFnZSB9KSA9PiB7XG4gIGNvbnN0IGltYWdlVXJsID0gaW1hZ2UgPyBpbWFnZSA6ICdwdWJsaWMvaW1nL2xpY2Vuc2luZy9jaGVja21hcmsuc3ZnJztcbiAgY29uc3QgaXRlbVN0eWxlID0gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICA+IGltZyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgfVxuICBgO1xuICBjb25zdCB0aXRsZVN0eWxlID0gY3NzYFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtpdGVtU3R5bGV9PlxuICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlU3R5bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3VwZ3JhZGluZycpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShVcGdyYWRlUGFnZSk7XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmVyU3RhdCB7XG4gIGFjdGl2ZUFkbWluczogbnVtYmVyO1xuICBhY3RpdmVFZGl0b3JzOiBudW1iZXI7XG4gIGFjdGl2ZVNlc3Npb25zOiBudW1iZXI7XG4gIGFjdGl2ZVVzZXJzOiBudW1iZXI7XG4gIGFjdGl2ZVZpZXdlcnM6IG51bWJlcjtcbiAgYWRtaW5zOiBudW1iZXI7XG4gIGFsZXJ0czogbnVtYmVyO1xuICBkYXNoYm9hcmRzOiBudW1iZXI7XG4gIGRhdGFzb3VyY2VzOiBudW1iZXI7XG4gIGVkaXRvcnM6IG51bWJlcjtcbiAgb3JnczogbnVtYmVyO1xuICBwbGF5bGlzdHM6IG51bWJlcjtcbiAgc25hcHNob3RzOiBudW1iZXI7XG4gIHN0YXJzOiBudW1iZXI7XG4gIHRhZ3M6IG51bWJlcjtcbiAgdXNlcnM6IG51bWJlcjtcbiAgdmlld2VyczogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU3RhdHMgPSBhc3luYyAoKTogUHJvbWlzZTxTZXJ2ZXJTdGF0IHwgbnVsbD4gPT4ge1xuICByZXR1cm4gZ2V0QmFja2VuZFNydigpXG4gICAgLmdldCgnYXBpL2FkbWluL3N0YXRzJylcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTG9hZGluZ1BsYWNlaG9sZGVyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgdGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IExvYWRlciA9ICh7IHRleHQgPSAnTG9hZGluZy4uLicgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbG9hZGVyLXdyYXBwZXJcIj5cbiAgICAgIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD17dGV4dH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImdldEJhY2tlbmRTcnYiLCJjb25maWciLCJCdXR0b24iLCJDb2RlRWRpdG9yIiwiTW9kYWwiLCJ1c2VUaGVtZTIiLCJDcmF3bGVyU3RhcnRCdXR0b24iLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJvcGVuIiwic2V0T3BlbiIsImJvZHkiLCJzZXRCb2R5IiwibW9kZSIsInRoZW1lIiwidGhlbWUyIiwiaXNMaWdodCIsIm9uRGlzbWlzcyIsImRvU3RhcnQiLCJwb3N0IiwidGhlbiIsInYiLCJjb25zb2xlIiwibG9nIiwid3JhcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0IiwicGFyc2UiLCJ1c2VFZmZlY3QiLCJpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50IiwiaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50IiwiTGl2ZUNoYW5uZWxTY29wZSIsImdldEdyYWZhbmFMaXZlU3J2IiwiQ3Jhd2xlclN0YXR1cyIsInN0YXR1cyIsInNldFN0YXR1cyIsInN1YnNjcmlwdGlvbiIsImdldFN0cmVhbSIsInNjb3BlIiwiR3JhZmFuYSIsIm5hbWVzcGFjZSIsInBhdGgiLCJzdWJzY3JpYmUiLCJuZXh0IiwiZXZ0IiwibWVzc2FnZSIsInVuc3Vic2NyaWJlIiwic3RhdGUiLCJydW5uaW5nIiwiRXhwb3J0U3RhcnRCdXR0b24iLCJmb3JtYXQiLCJnaXQiLCJFeHBvcnRTdGF0dXMiLCJCb29sZWFuIiwic3R5bGVzRmFjdG9yeSIsInVzZVRoZW1lIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYmFja2dyb3VuZFVybCIsImlzRGFyayIsImZvb3RlckJnIiwicGFsZXR0ZSIsImRhcms5IiwiZ3JheTYiLCJjb250YWluZXIiLCJjb2xvcnMiLCJwYW5lbEJnIiwiZm9vdGVyIiwiaGVhZGVyIiwiTGljZW5zZUNocm9tZSIsImVkaXRpb25Ob3RpY2UiLCJzdWJoZWFkZXIiLCJjaGlsZHJlbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJDaXJjbGUiLCJzaXplIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvdHRvbSIsInJpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiQ2FyZENvbnRhaW5lciIsIkxpbmtCdXR0b24iLCJ1c2VTdHlsZXMyIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImNvbnRleHRTcnYiLCJMb2FkZXIiLCJnZXRTZXJ2ZXJTdGF0cyIsIlNlcnZlclN0YXRzIiwic3RhdHMiLCJzZXRTdGF0cyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhc0FjY2Vzc1RvRGF0YVNvdXJjZXMiLCJoYXNBY2Nlc3MiLCJEYXRhU291cmNlc1JlYWQiLCJpc0dyYWZhbmFBZG1pbiIsImhhc0FjY2Vzc1RvQWRtaW5Vc2VycyIsIlVzZXJzUmVhZCIsIkFjdGlvblNlcnZlclN0YXRzUmVhZCIsImxvYWRlciIsInJvdyIsIm5hbWUiLCJ2YWx1ZSIsImRhc2hib2FyZHMiLCJzdGFycyIsInRhZ3MiLCJwbGF5bGlzdHMiLCJzbmFwc2hvdHMiLCJkb3VibGVSb3ciLCJkYXRhc291cmNlcyIsImFsZXJ0cyIsIm9yZ3MiLCJ1c2VycyIsImFjdGl2ZVVzZXJzIiwiYWN0aXZlU2Vzc2lvbnMiLCJub3RGb3VuZCIsImZlYXR1cmVUb2dnbGVzIiwiZGFzaGJvYXJkUHJldmlld3MiLCJkYXNoYm9hcmRQcmV2aWV3c0FkbWluIiwiZXhwb3J0Iiwic3BhY2luZyIsInR5cG9ncmFwaHkiLCJoNiIsIlN0YXRDYXJkIiwiY29udGVudCIsImdldENhcmRTdHlsZXMiLCJpbm5lciIsIm1hcCIsIml0ZW0iLCJjb25uZWN0IiwiUGFnZSIsImdldE5hdk1vZGVsIiwiVXBncmFkZVBhZ2UiLCJuYXZNb2RlbCIsInRpdGxlU3R5bGVzIiwiVXBncmFkZUluZm8iLCJjb2x1bW4iLCJHZXRFbnRlcnByaXNlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsIkNhbGxUb0FjdGlvbiIsIlNlcnZpY2VJbmZvIiwiRmVhdHVyZUluZm8iLCJwYWRkaW5nUmlnaHQiLCJGZWF0dXJlTGlzdGluZyIsIkxpc3QiLCJuZXN0ZWQiLCJsaXN0U3R5bGUiLCJJdGVtIiwiaW1hZ2UiLCJpbWFnZVVybCIsIml0ZW1TdHlsZSIsInRpdGxlU3R5bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZJbmRleCIsImdldCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJMb2FkaW5nUGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9