"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServerStats"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BREgsRUFERixFQVdHeUIsTUFBTSxpQkFBSTtRQUFBLFVBQU1BO01BQU4sRUFYYjtJQUFBO0VBREYsRUFERjtBQWlCRCxDQW5CRDs7QUFxQkEsTUFBTUMsYUFBYSxHQUFJekYsS0FBRCxJQUEwQjtFQUM5QyxPQUFPO0lBQ0wwRixTQUFTLEVBQUUzRyw2Q0FBSTtBQUNuQixpQkFBaUJpQixLQUFLLENBQUNrRixPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNsQyxLQUhTO0lBSUxTLEtBQUssRUFBRTVHLDZDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FSUztJQVNMd0csT0FBTyxFQUFFeEcsNkNBQUk7QUFDakI7QUFDQSxLQVhTO0lBWUwrRSxHQUFHLEVBQUUvRSw2Q0FBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QmlCLEtBQUssQ0FBQ2tGLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3hDO0FBQ0E7RUFsQlMsQ0FBUDtBQW9CRCxDQXJCRDs7Ozs7Ozs7Ozs7O0FDM0tBO0FBc0JPLE1BQU1uQyxjQUFjLEdBQUcsWUFBd0M7RUFDcEUsT0FBTzdELCtEQUFhLEdBQ2pCNEcsR0FESSxDQUNBLGlCQURBLEVBRUpDLEtBRkksQ0FFR0MsR0FBRCxJQUFTO0lBQ2R4RixPQUFPLENBQUN5RixLQUFSLENBQWNELEdBQWQ7SUFDQSxPQUFPLElBQVA7RUFDRCxDQUxJLENBQVA7QUFNRCxDQVBNOzs7Ozs7Ozs7Ozs7OztBQ3RCUDtBQUVBOztBQU1PLE1BQU1sRCxNQUFNLEdBQUcsQ0FBQztFQUFFakMsSUFBSSxHQUFHO0FBQVQsQ0FBRCxLQUFvQztFQUN4RCxvQkFDRTtJQUFLLFNBQVMsRUFBQyxxQkFBZjtJQUFBLHVCQUNFLHVEQUFDLDJEQUFEO01BQW9CLElBQUksRUFBRUE7SUFBMUI7RUFERixFQURGO0FBS0QsQ0FOTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0NyYXdsZXJTdGFydEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vQ3Jhd2xlclN0YXR1cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vRXhwb3J0U3RhcnRCdXR0b24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0V4cG9ydFN0YXR1cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vU2VydmVyU3RhdHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL3N0YXRlL2FwaXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9Mb2FkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb2RlRWRpdG9yLCBNb2RhbCwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgY29uc3QgQ3Jhd2xlclN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModXNlVGhlbWUyKCkpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKHtcbiAgICBtb2RlOiAndGh1bWJzJyxcbiAgICB0aGVtZTogY29uZmlnLnRoZW1lMi5pc0xpZ2h0ID8gJ2xpZ2h0JyA6ICdkYXJrJyxcbiAgfSk7XG4gIGNvbnN0IG9uRGlzbWlzcyA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuICBjb25zdCBkb1N0YXJ0ID0gKCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoJy9hcGkvYWRtaW4vY3Jhd2xlci9zdGFydCcsIGJvZHkpXG4gICAgICAudGhlbigodikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR09UJywgdik7XG4gICAgICAgIG9uRGlzbWlzcygpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIHRpdGxlPXsnU3RhcnQgY3Jhd2xlcid9IGlzT3Blbj17b3Blbn0gb25EaXNtaXNzPXtvbkRpc21pc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICAgIDxDb2RlRWRpdG9yXG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKSA/PyAnJ31cbiAgICAgICAgICAgIHNob3dMaW5lTnVtYmVycz17ZmFsc2V9XG4gICAgICAgICAgICByZWFkT25seT17ZmFsc2V9XG4gICAgICAgICAgICBsYW5ndWFnZT1cImpzb25cIlxuICAgICAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICAgICAgb25CbHVyPXsodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHNldEJvZHkoSlNPTi5wYXJzZSh0ZXh0KSk7IC8vIGZvcmNlIEpTT04/XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2RvU3RhcnR9PlxuICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgICAgPC9Nb2RhbD5cblxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICBTdGFydFxuICAgICAgPC9CdXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBjc3NgXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBpc0xpdmVDaGFubmVsTWVzc2FnZUV2ZW50LCBpc0xpdmVDaGFubmVsU3RhdHVzRXZlbnQsIExpdmVDaGFubmVsU2NvcGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGdldEdyYWZhbmFMaXZlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQ3Jhd2xlclN0YXJ0QnV0dG9uIH0gZnJvbSAnLi9DcmF3bGVyU3RhcnRCdXR0b24nO1xuXG5pbnRlcmZhY2UgQ3Jhd2xlclN0YXR1c01lc3NhZ2Uge1xuICBzdGF0ZTogc3RyaW5nO1xuICBzdGFydGVkOiBzdHJpbmc7XG4gIGZpbmlzaGVkOiBzdHJpbmc7XG4gIGNvbXBsZXRlOiBudW1iZXI7XG4gIHF1ZXVlOiBudW1iZXI7XG4gIGxhc3Q6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IENyYXdsZXJTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZTIoKSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxDcmF3bGVyU3RhdHVzTWVzc2FnZT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGdldEdyYWZhbmFMaXZlU3J2KClcbiAgICAgIC5nZXRTdHJlYW08Q3Jhd2xlclN0YXR1c01lc3NhZ2U+KHtcbiAgICAgICAgc2NvcGU6IExpdmVDaGFubmVsU2NvcGUuR3JhZmFuYSxcbiAgICAgICAgbmFtZXNwYWNlOiAnYnJvYWRjYXN0JyxcbiAgICAgICAgcGF0aDogJ2NyYXdsZXInLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoZXZ0KSA9PiB7XG4gICAgICAgICAgaWYgKGlzTGl2ZUNoYW5uZWxNZXNzYWdlRXZlbnQoZXZ0KSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzKGV2dC5tZXNzYWdlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTGl2ZUNoYW5uZWxTdGF0dXNFdmVudChldnQpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZXZ0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgaWYgKCFzdGF0dXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgTm8gc3RhdHVzIChuZXZlciBydW4pXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8Q3Jhd2xlclN0YXJ0QnV0dG9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoc3RhdHVzLCBudWxsLCAyKX08L3ByZT5cbiAgICAgIHtzdGF0dXMuc3RhdGUgIT09ICdydW5uaW5nJyAmJiA8Q3Jhd2xlclN0YXJ0QnV0dG9uIC8+fVxuICAgICAge3N0YXR1cy5zdGF0ZSAhPT0gJ3N0b3BwZWQnICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FkbWluL2NyYXdsZXIvc3RvcCcpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTdG9wXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXA6IGNzc2BcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJlZDtcbiAgICBgLFxuICAgIHJ1bm5pbmc6IGNzc2BcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb2RlRWRpdG9yLCBNb2RhbCwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgY29uc3QgRXhwb3J0U3RhcnRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZTIoKSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoe1xuICAgIGZvcm1hdDogJ2dpdCcsXG4gICAgZ2l0OiB7fSxcbiAgfSk7XG4gIGNvbnN0IG9uRGlzbWlzcyA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuICBjb25zdCBkb1N0YXJ0ID0gKCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoJy9hcGkvYWRtaW4vZXhwb3J0JywgYm9keSlcbiAgICAgIC50aGVuKCh2KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHT1QnLCB2KTtcbiAgICAgICAgb25EaXNtaXNzKCk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kYWwgdGl0bGU9eydFeHBvcnQgZ3JhZmFuYSBpbnN0YW5jZSd9IGlzT3Blbj17b3Blbn0gb25EaXNtaXNzPXtvbkRpc21pc3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICAgIDxDb2RlRWRpdG9yXG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeShib2R5LCBudWxsLCAyKSA/PyAnJ31cbiAgICAgICAgICAgIHNob3dMaW5lTnVtYmVycz17ZmFsc2V9XG4gICAgICAgICAgICByZWFkT25seT17ZmFsc2V9XG4gICAgICAgICAgICBsYW5ndWFnZT1cImpzb25cIlxuICAgICAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICAgICAgb25CbHVyPXsodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHNldEJvZHkoSlNPTi5wYXJzZSh0ZXh0KSk7IC8vIGZvcmNlIEpTT04/XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZG9TdGFydH0+U3RhcnQ8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgICAgPC9Nb2RhbD5cblxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICBFeHBvcnRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcDogY3NzYFxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzExMTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudCwgaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50LCBMaXZlQ2hhbm5lbFNjb3BlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBnZXRHcmFmYW5hTGl2ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEV4cG9ydFN0YXJ0QnV0dG9uIH0gZnJvbSAnLi9FeHBvcnRTdGFydEJ1dHRvbic7XG5cbmludGVyZmFjZSBFeHBvcnRTdGF0dXNNZXNzYWdlIHtcbiAgcnVubmluZzogYm9vbGVhbjtcbiAgdGFyZ2V0OiBzdHJpbmc7XG4gIHN0YXJ0ZWQ6IG51bWJlcjtcbiAgZmluaXNoZWQ6IG51bWJlcjtcbiAgdXBkYXRlOiBudW1iZXI7XG4gIGNvdW50OiBudW1iZXI7XG4gIGN1cnJlbnQ6IG51bWJlcjtcbiAgbGFzdDogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEV4cG9ydFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lMigpKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPEV4cG9ydFN0YXR1c01lc3NhZ2U+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBnZXRHcmFmYW5hTGl2ZVNydigpXG4gICAgICAuZ2V0U3RyZWFtPEV4cG9ydFN0YXR1c01lc3NhZ2U+KHtcbiAgICAgICAgc2NvcGU6IExpdmVDaGFubmVsU2NvcGUuR3JhZmFuYSxcbiAgICAgICAgbmFtZXNwYWNlOiAnYnJvYWRjYXN0JyxcbiAgICAgICAgcGF0aDogJ2V4cG9ydCcsXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChldnQpID0+IHtcbiAgICAgICAgICBpZiAoaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudChldnQpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoZXZ0Lm1lc3NhZ2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNMaXZlQ2hhbm5lbFN0YXR1c0V2ZW50KGV2dCkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhldnQubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBpZiAoIXN0YXR1cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICA8RXhwb3J0U3RhcnRCdXR0b24gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShzdGF0dXMsIG51bGwsIDIpfTwvcHJlPlxuICAgICAge0Jvb2xlYW4oIXN0YXR1cy5ydW5uaW5nKSAmJiA8RXhwb3J0U3RhcnRCdXR0b24gLz59XG4gICAgICB7Qm9vbGVhbihzdGF0dXMucnVubmluZykgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvYWRtaW4vZXhwb3J0L3N0b3AnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU3RvcFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBjc3NgXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCByZWQ7XG4gICAgYCxcbiAgICBydW5uaW5nOiBjc3NgXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBDYXJkQ29udGFpbmVyLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9Mb2FkZXInO1xuXG5pbXBvcnQgeyBDcmF3bGVyU3RhdHVzIH0gZnJvbSAnLi9DcmF3bGVyU3RhdHVzJztcbmltcG9ydCB7IEV4cG9ydFN0YXR1cyB9IGZyb20gJy4vRXhwb3J0U3RhdHVzJztcbmltcG9ydCB7IGdldFNlcnZlclN0YXRzLCBTZXJ2ZXJTdGF0IH0gZnJvbSAnLi9zdGF0ZS9hcGlzJztcblxuZXhwb3J0IGNvbnN0IFNlcnZlclN0YXRzID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPFNlcnZlclN0YXQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGhhc0FjY2Vzc1RvRGF0YVNvdXJjZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbik7XG4gIGNvbnN0IGhhc0FjY2Vzc1RvQWRtaW5Vc2VycyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uVXNlcnNSZWFkLCBjb250ZXh0U3J2LmlzR3JhZmFuYUFkbWluKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblNlcnZlclN0YXRzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbikpIHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIGdldFNlcnZlclN0YXRzKCkudGhlbigoc3RhdHMpID0+IHtcbiAgICAgICAgc2V0U3RhdHMoc3RhdHMpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKCFjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblNlcnZlclN0YXRzUmVhZCwgY29udGV4dFNydi5pc0dyYWZhbmFBZG1pbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SW5zdGFuY2Ugc3RhdGlzdGljczwvaDI+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgICAgPExvYWRlciB0ZXh0PXsnTG9hZGluZyBpbnN0YW5jZSBzdGF0cy4uLid9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHN0YXRzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgPFN0YXRDYXJkXG4gICAgICAgICAgICBjb250ZW50PXtbXG4gICAgICAgICAgICAgIHsgbmFtZTogJ0Rhc2hib2FyZHMgKHN0YXJyZWQpJywgdmFsdWU6IGAke3N0YXRzLmRhc2hib2FyZHN9ICgke3N0YXRzLnN0YXJzfSlgIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1RhZ3MnLCB2YWx1ZTogc3RhdHMudGFncyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdQbGF5bGlzdHMnLCB2YWx1ZTogc3RhdHMucGxheWxpc3RzIH0sXG4gICAgICAgICAgICAgIHsgbmFtZTogJ1NuYXBzaG90cycsIHZhbHVlOiBzdGF0cy5zbmFwc2hvdHMgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXsnL2Rhc2hib2FyZHMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgTWFuYWdlIGRhc2hib2FyZHNcbiAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvdWJsZVJvd30+XG4gICAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgICAgY29udGVudD17W3sgbmFtZTogJ0RhdGEgc291cmNlcycsIHZhbHVlOiBzdGF0cy5kYXRhc291cmNlcyB9XX1cbiAgICAgICAgICAgICAgZm9vdGVyPXtcbiAgICAgICAgICAgICAgICBoYXNBY2Nlc3NUb0RhdGFTb3VyY2VzICYmIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvZGF0YXNvdXJjZXMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICAgIE1hbmFnZSBkYXRhIHNvdXJjZXNcbiAgICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3RhdENhcmRcbiAgICAgICAgICAgICAgY29udGVudD17W3sgbmFtZTogJ0FsZXJ0cycsIHZhbHVlOiBzdGF0cy5hbGVydHMgfV19XG4gICAgICAgICAgICAgIGZvb3Rlcj17XG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17Jy9hbGVydGluZy9saXN0J30gdmFyaWFudD17J3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICAgICAgQWxlcnRzXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTdGF0Q2FyZFxuICAgICAgICAgICAgY29udGVudD17W1xuICAgICAgICAgICAgICB7IG5hbWU6ICdPcmdhbmlzYXRpb25zJywgdmFsdWU6IHN0YXRzLm9yZ3MgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnVXNlcnMgdG90YWwnLCB2YWx1ZTogc3RhdHMudXNlcnMgfSxcbiAgICAgICAgICAgICAgeyBuYW1lOiAnQWN0aXZlIHVzZXJzIGluIGxhc3QgMzAgZGF5cycsIHZhbHVlOiBzdGF0cy5hY3RpdmVVc2VycyB9LFxuICAgICAgICAgICAgICB7IG5hbWU6ICdBY3RpdmUgc2Vzc2lvbnMnLCB2YWx1ZTogc3RhdHMuYWN0aXZlU2Vzc2lvbnMgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBmb290ZXI9e1xuICAgICAgICAgICAgICBoYXNBY2Nlc3NUb0FkbWluVXNlcnMgJiYgKFxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9eycvYWRtaW4vdXNlcnMnfSB2YXJpYW50PXsnc2Vjb25kYXJ5J30+XG4gICAgICAgICAgICAgICAgICBNYW5hZ2UgdXNlcnNcbiAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5ObyBzdGF0cyBmb3VuZC48L3A+XG4gICAgICApfVxuXG4gICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLmRhc2hib2FyZFByZXZpZXdzICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5kYXNoYm9hcmRQcmV2aWV3c0FkbWluICYmIDxDcmF3bGVyU3RhdHVzIC8+fVxuICAgICAge2NvbmZpZy5mZWF0dXJlVG9nZ2xlcy5leHBvcnQgJiYgPEV4cG9ydFN0YXR1cyAvPn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGAsXG4gICAgcm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICYgPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgfVxuXG4gICAgICAmID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDMzLjMlO1xuICAgICAgfVxuICAgIGAsXG4gICAgZG91YmxlUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIH1cbiAgICBgLFxuXG4gICAgbG9hZGVyOiBjc3NgXG4gICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGAsXG5cbiAgICBub3RGb3VuZDogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDYuZm9udFNpemV9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICBgLFxuICB9O1xufTtcblxudHlwZSBTdGF0Q2FyZFByb3BzID0ge1xuICBjb250ZW50OiBBcnJheTxSZWNvcmQ8c3RyaW5nLCBudW1iZXIgfCBzdHJpbmc+PjtcbiAgZm9vdGVyPzogSlNYLkVsZW1lbnQgfCBib29sZWFuO1xufTtcblxuY29uc3QgU3RhdENhcmQgPSAoeyBjb250ZW50LCBmb290ZXIgfTogU3RhdENhcmRQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldENhcmRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxDYXJkQ29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZGlzYWJsZUhvdmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAge2NvbnRlbnQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Zvb3RlciAmJiA8ZGl2Pntmb290ZXJ9PC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkQ29udGFpbmVyPlxuICApO1xufTtcblxuY29uc3QgZ2V0Q2FyZFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIGlubmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gICAgY29udGVudDogY3NzYFxuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlclN0YXQge1xuICBhY3RpdmVBZG1pbnM6IG51bWJlcjtcbiAgYWN0aXZlRWRpdG9yczogbnVtYmVyO1xuICBhY3RpdmVTZXNzaW9uczogbnVtYmVyO1xuICBhY3RpdmVVc2VyczogbnVtYmVyO1xuICBhY3RpdmVWaWV3ZXJzOiBudW1iZXI7XG4gIGFkbWluczogbnVtYmVyO1xuICBhbGVydHM6IG51bWJlcjtcbiAgZGFzaGJvYXJkczogbnVtYmVyO1xuICBkYXRhc291cmNlczogbnVtYmVyO1xuICBlZGl0b3JzOiBudW1iZXI7XG4gIG9yZ3M6IG51bWJlcjtcbiAgcGxheWxpc3RzOiBudW1iZXI7XG4gIHNuYXBzaG90czogbnVtYmVyO1xuICBzdGFyczogbnVtYmVyO1xuICB0YWdzOiBudW1iZXI7XG4gIHVzZXJzOiBudW1iZXI7XG4gIHZpZXdlcnM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclN0YXRzID0gYXN5bmMgKCk6IFByb21pc2U8U2VydmVyU3RhdCB8IG51bGw+ID0+IHtcbiAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKVxuICAgIC5nZXQoJ2FwaS9hZG1pbi9zdGF0cycpXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExvYWRpbmdQbGFjZWhvbGRlciB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAoeyB0ZXh0ID0gJ0xvYWRpbmcuLi4nIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxvYWRlci13cmFwcGVyXCI+XG4gICAgICA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9e3RleHR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRCYWNrZW5kU3J2IiwiY29uZmlnIiwiQnV0dG9uIiwiQ29kZUVkaXRvciIsIk1vZGFsIiwidXNlVGhlbWUyIiwiQ3Jhd2xlclN0YXJ0QnV0dG9uIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwib3BlbiIsInNldE9wZW4iLCJib2R5Iiwic2V0Qm9keSIsIm1vZGUiLCJ0aGVtZSIsInRoZW1lMiIsImlzTGlnaHQiLCJvbkRpc21pc3MiLCJkb1N0YXJ0IiwicG9zdCIsInRoZW4iLCJ2IiwiY29uc29sZSIsImxvZyIsIndyYXAiLCJKU09OIiwic3RyaW5naWZ5IiwidGV4dCIsInBhcnNlIiwidXNlRWZmZWN0IiwiaXNMaXZlQ2hhbm5lbE1lc3NhZ2VFdmVudCIsImlzTGl2ZUNoYW5uZWxTdGF0dXNFdmVudCIsIkxpdmVDaGFubmVsU2NvcGUiLCJnZXRHcmFmYW5hTGl2ZVNydiIsIkNyYXdsZXJTdGF0dXMiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJzdWJzY3JpcHRpb24iLCJnZXRTdHJlYW0iLCJzY29wZSIsIkdyYWZhbmEiLCJuYW1lc3BhY2UiLCJwYXRoIiwic3Vic2NyaWJlIiwibmV4dCIsImV2dCIsIm1lc3NhZ2UiLCJ1bnN1YnNjcmliZSIsInN0YXRlIiwicnVubmluZyIsIkV4cG9ydFN0YXJ0QnV0dG9uIiwiZm9ybWF0IiwiZ2l0IiwiRXhwb3J0U3RhdHVzIiwiQm9vbGVhbiIsIkNhcmRDb250YWluZXIiLCJMaW5rQnV0dG9uIiwidXNlU3R5bGVzMiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJjb250ZXh0U3J2IiwiTG9hZGVyIiwiZ2V0U2VydmVyU3RhdHMiLCJTZXJ2ZXJTdGF0cyIsInN0YXRzIiwic2V0U3RhdHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNBY2Nlc3NUb0RhdGFTb3VyY2VzIiwiaGFzQWNjZXNzIiwiRGF0YVNvdXJjZXNSZWFkIiwiaXNHcmFmYW5hQWRtaW4iLCJoYXNBY2Nlc3NUb0FkbWluVXNlcnMiLCJVc2Vyc1JlYWQiLCJBY3Rpb25TZXJ2ZXJTdGF0c1JlYWQiLCJ0aXRsZSIsImxvYWRlciIsInJvdyIsIm5hbWUiLCJ2YWx1ZSIsImRhc2hib2FyZHMiLCJzdGFycyIsInRhZ3MiLCJwbGF5bGlzdHMiLCJzbmFwc2hvdHMiLCJkb3VibGVSb3ciLCJkYXRhc291cmNlcyIsImFsZXJ0cyIsIm9yZ3MiLCJ1c2VycyIsImFjdGl2ZVVzZXJzIiwiYWN0aXZlU2Vzc2lvbnMiLCJub3RGb3VuZCIsImZlYXR1cmVUb2dnbGVzIiwiZGFzaGJvYXJkUHJldmlld3MiLCJkYXNoYm9hcmRQcmV2aWV3c0FkbWluIiwiZXhwb3J0Iiwic3BhY2luZyIsInR5cG9ncmFwaHkiLCJoNiIsImZvbnRTaXplIiwiU3RhdENhcmQiLCJjb250ZW50IiwiZm9vdGVyIiwiZ2V0Q2FyZFN0eWxlcyIsImNvbnRhaW5lciIsImlubmVyIiwibWFwIiwiaXRlbSIsImdldCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJMb2FkaW5nUGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9