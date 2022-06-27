"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertAmRoutes"],{

/***/ "./public/app/core/hooks/useCleanup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCleanup": () => (/* binding */ useCleanup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");



function useCleanup(stateSelector) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); //bit of a hack to unburden user from having to wrap stateSelcetor in a useCallback. Otherwise cleanup would happen on every render

  const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateSelector);
  selectorRef.current = stateSelector;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__.cleanUpAction)({
        stateSelector: selectorRef.current
      }));
    };
  }, [dispatch]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/AmRoutes.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
/* harmony import */ var _components_Provisioning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _components_amroutes_AmRootRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRootRoute.tsx");
/* harmony import */ var _components_amroutes_AmSpecificRouting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmSpecificRouting.tsx");
/* harmony import */ var _components_amroutes_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder;
























const AmRoutes = () => {
  var _config$receivers;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const [isRootRouteEditMode, setIsRootRouteEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_13__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_12__.useAlertManagerSourceName)(alertManagers);
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const fetchConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_15__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchConfig();
  }, [fetchConfig]);
  const {
    result,
    loading: resultLoading,
    error: resultError
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_18__.initialAsyncRequestState;
  const config = result === null || result === void 0 ? void 0 : result.alertmanager_config;
  const [rootRoute, id2ExistingRoute] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_16__.amRouteToFormAmRoute)(config === null || config === void 0 ? void 0 : config.route), [config === null || config === void 0 ? void 0 : config.route]);
  const receivers = (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_16__.stringsToSelectableValues)(((_config$receivers = config === null || config === void 0 ? void 0 : config.receivers) !== null && _config$receivers !== void 0 ? _config$receivers : []).map(receiver => receiver.name));
  const isProvisioned = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _config$route;

    return Boolean(config === null || config === void 0 ? void 0 : (_config$route = config.route) === null || _config$route === void 0 ? void 0 : _config$route.provenance);
  }, [config === null || config === void 0 ? void 0 : config.route]);

  const enterRootRouteEditMode = () => {
    setIsRootRouteEditMode(true);
  };

  const exitRootRouteEditMode = () => {
    setIsRootRouteEditMode(false);
  };

  (0,_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);

  const handleSave = data => {
    if (!result) {
      return;
    }

    const newData = (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_16__.formAmRouteToAmRoute)(alertManagerSourceName, Object.assign({}, rootRoute, data), id2ExistingRoute);

    if (isRootRouteEditMode) {
      exitRootRouteEditMode();
    }

    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_15__.updateAlertManagerConfigAction)({
      newConfig: Object.assign({}, result, {
        alertmanager_config: Object.assign({}, result.alertmanager_config, {
          route: newData
        })
      }),
      oldConfig: result,
      alertManagerSourceName: alertManagerSourceName,
      successMessage: 'Saved',
      refetch: true
    }));
  };

  if (!alertManagerSourceName) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__.AlertingPageWrapper, {
      pageId: "am-routes",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_7__.NoAlertManagerWarning, {
        availableAlertManagers: alertManagers
      })
    });
  }

  const readOnly = alertManagerSourceName ? (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_17__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName) || isProvisioned : true;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__.AlertingPageWrapper, {
    pageId: "am-routes",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_5__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), resultError && !resultLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager config",
      children: resultError.message || 'Unknown error.'
    }), isProvisioned && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_Provisioning__WEBPACK_IMPORTED_MODULE_8__.ProvisioningAlert, {
      resource: _components_Provisioning__WEBPACK_IMPORTED_MODULE_8__.ProvisionedResource.RootNotificationPolicy
    }), resultLoading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
      text: "Loading Alertmanager config..."
    }))), result && !resultLoading && !resultError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_amroutes_AmRootRoute__WEBPACK_IMPORTED_MODULE_9__.AmRootRoute, {
        readOnly: readOnly,
        alertManagerSourceName: alertManagerSourceName,
        isEditMode: isRootRouteEditMode,
        onSave: handleSave,
        onEnterEditMode: enterRootRouteEditMode,
        onExitEditMode: exitRootRouteEditMode,
        receivers: receivers,
        routes: rootRoute
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_amroutes_AmSpecificRouting__WEBPACK_IMPORTED_MODULE_10__.AmSpecificRouting, {
        alertManagerSourceName: alertManagerSourceName,
        onChange: handleSave,
        readOnly: readOnly,
        onRootRouteEdit: enterRootRouteEditMode,
        receivers: receivers,
        routes: rootRoute
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_components_amroutes_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_11__.MuteTimingsTable, {
        alertManagerSourceName: alertManagerSourceName
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withErrorBoundary)(AmRoutes, {
  style: 'page'
}));

const getStyles = theme => ({
  break: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    height: 0;
    margin-bottom: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertingPageWrapper": () => (/* binding */ AlertingPageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = ({
  children,
  pageId,
  isLoading
}) => {
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex), pageId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Authorize.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authorize": () => (/* binding */ Authorize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Authorize = ({
  actions,
  children,
  fallback = true
}) => {
  if (actions.some(action => app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__.contextSrv.hasAccess(action, fallback))) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  } else {
    return null;
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/EmptyArea.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyArea": () => (/* binding */ EmptyArea)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const EmptyArea = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.container,
    children: children
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.bg2};
      color: ${theme.colors.textSemiWeak};
      padding: ${theme.spacing.xl};
      text-align: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyAreaWithCTA": () => (/* binding */ EmptyAreaWithCTA)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const EmptyAreaWithCTA = ({
  buttonIcon,
  buttonLabel,
  buttonSize = 'lg',
  buttonVariant = 'primary',
  onButtonClick,
  text,
  href,
  showButton = true
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  const commonProps = {
    className: styles.button,
    icon: buttonIcon,
    size: buttonSize,
    variant: buttonVariant
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_3__.EmptyArea, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: styles.text,
        children: text
      }), showButton && (href ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, Object.assign({
        href: href,
        type: "button"
      }, commonProps, {
        children: buttonLabel
      })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, Object.assign({
        onClick: onButtonClick,
        type: "button"
      }, commonProps, {
        children: buttonLabel
      })))]
    })
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.bg2};
      color: ${theme.colors.textSemiWeak};
      padding: ${theme.spacing.xl};
      text-align: center;
    `,
    text: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.md};
    `,
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing.md} 0 ${theme.spacing.sm};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAlertManagerWarning": () => (/* binding */ NoAlertManagerWarning)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Alert2, _OtherAlertManagersAv, _NoAlertManagersAvail;









const NoAlertManagersAvailable = () => _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "No Alertmanager found",
  severity: "warning",
  children: "We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."
}));

const OtherAlertManagersAvailable = () => _Alert2 || (_Alert2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "Selected Alertmanager not found. Select a different Alertmanager.",
  severity: "warning",
  children: "Selected Alertmanager no longer exists or you may not have permission to access it."
}));

const NoAlertManagerWarning = ({
  availableAlertManagers
}) => {
  const [_, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__.useAlertManagerSourceName)(availableAlertManagers);
  const hasOtherAMs = availableAlertManagers.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: hasOtherAMs ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__.AlertManagerPicker, {
        onChange: setAlertManagerSourceName,
        dataSources: availableAlertManagers
      }), _OtherAlertManagersAv || (_OtherAlertManagersAv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(OtherAlertManagersAvailable, {}))]
    }) : _NoAlertManagersAvail || (_NoAlertManagersAvail = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NoAlertManagersAvailable, {}))
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Provisioning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvisionedResource": () => (/* binding */ ProvisionedResource),
/* harmony export */   "ProvisioningAlert": () => (/* binding */ ProvisioningAlert),
/* harmony export */   "ProvisioningBadge": () => (/* binding */ ProvisioningBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge;





let ProvisionedResource;

(function (ProvisionedResource) {
  ProvisionedResource["ContactPoint"] = "contact point";
  ProvisionedResource["Template"] = "template";
  ProvisionedResource["MuteTiming"] = "mute timing";
  ProvisionedResource["AlertRule"] = "alert rule";
  ProvisionedResource["RootNotificationPolicy"] = "root notification policy";
})(ProvisionedResource || (ProvisionedResource = {}));

const ProvisioningAlert = ({
  resource
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
    title: `This ${resource} cannot be edited through the UI`,
    severity: "info",
    children: ["This ", resource, " has been provisioned, that means it was created by config. Please contact your server admin to update this ", resource, "."]
  });
};
const ProvisioningBadge = () => {
  return _Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
    text: 'Provisioned',
    color: 'purple'
  }));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatcherFilter": () => (/* binding */ MatcherFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span, _div;







const MatcherFilter = ({
  className,
  onFilterChange,
  defaultQueryString,
  queryString
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  const handleSearchChange = e => {
    const target = e.target;
    onFilterChange(target.value);
  };

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        gap: 0.5,
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: "Search by label"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          content: _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: ["Filter alerts using label querying, ex:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
              children: `{severity="critical", instance=~"cluster-us-.+"}`
            })]
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            className: styles.icon,
            name: "info-circle",
            size: "sm"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
      placeholder: "Search",
      defaultValue: defaultQueryString,
      value: queryString,
      onChange: handleSearchChange,
      "data-testid": "search-query-input",
      prefix: searchIcon,
      className: styles.inputWidth
    })]
  });
};

const getStyles = theme => ({
  icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(0.5)};
  `,
  inputWidth: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 340px;
    flex-grow: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRootRoute.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRootRoute": () => (/* binding */ AmRootRoute)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _AmRootRouteForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRootRouteForm.tsx");
/* harmony import */ var _AmRootRouteRead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRootRouteRead.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _i, _p;










const AmRootRoute = ({
  isEditMode,
  onSave,
  onEnterEditMode,
  onExitEditMode,
  receivers,
  routes,
  alertManagerSourceName,
  readOnly = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_4__.getNotificationsPermissions)(alertManagerSourceName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.container,
    "data-testid": "am-root-route-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.titleContainer,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h5", {
        className: styles.title,
        children: ["Root policy - ", _i || (_i = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
          children: "default for all alerts"
        }))]
      }), !isEditMode && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_3__.Authorize, {
        actions: [permissions.update],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          icon: "pen",
          onClick: onEnterEditMode,
          size: "sm",
          type: "button",
          variant: "secondary",
          children: "Edit"
        })
      })]
    }), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      children: "All alerts will go to the default contact point, unless you set additional matchers in the specific routing area."
    })), isEditMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AmRootRouteForm__WEBPACK_IMPORTED_MODULE_5__.AmRootRouteForm, {
      alertManagerSourceName: alertManagerSourceName,
      onCancel: onExitEditMode,
      onSave: onSave,
      receivers: receivers,
      routes: routes
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AmRootRouteRead__WEBPACK_IMPORTED_MODULE_6__.AmRootRouteRead, {
      routes: routes
    })]
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.background.secondary};
      color: ${theme.colors.text.secondary};
      padding: ${theme.spacing(2)};
    `,
    titleContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.primary};
      display: flex;
      flex-flow: row nowrap;
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 100%;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRootRouteForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRootRouteForm": () => (/* binding */ AmRootRouteForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _formStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/formStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _Button;

const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"],
      _excluded3 = ["onChange", "ref"],
      _excluded4 = ["onChange", "ref"],
      _excluded5 = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const AmRootRouteForm = ({
  alertManagerSourceName,
  onCancel,
  onSave,
  receivers,
  routes
}) => {
  var _Button2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_formStyles__WEBPACK_IMPORTED_MODULE_6__.getFormStyles);
  const [isTimingOptionsExpanded, setIsTimingOptionsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [groupByOptions, setGroupByOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.stringsToSelectableValues)(routes.groupBy));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
    defaultValues: Object.assign({}, routes, {
      overrideTimings: true,
      overrideGrouping: true
    }),
    onSubmit: onSave,
    children: ({
      control,
      errors,
      setValue
    }) => {
      var _errors$receiver, _errors$groupWaitValu, _errors$groupInterval, _errors$repeatInterva;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Default contact point",
          invalid: !!errors.receiver,
          error: (_errors$receiver = errors.receiver) === null || _errors$receiver === void 0 ? void 0 : _errors$receiver.message,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: styles.container,
              "data-testid": "am-receiver-select",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                render: _ref => {
                  let {
                    field: {
                      onChange
                    }
                  } = _ref,
                      field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                    "aria-label": "Default contact point"
                  }, field, {
                    className: styles.input,
                    onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                    options: receivers
                  }));
                },
                control: control,
                name: "receiver",
                rules: {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }
              }), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "or"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
                className: styles.linkText,
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.makeAMLink)('/alerting/notifications/receivers/new', alertManagerSourceName),
                children: "Create a contact point"
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Group by",
          description: "Group alerts when you receive a notification based on labels.",
          "data-testid": "am-group-select",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref2 => {
              let {
                field: {
                  onChange
                }
              } = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
                "aria-label": "Group by"
              }, field, {
                allowCustomValue: true,
                className: styles.input,
                onCreateOption: opt => {
                  setGroupByOptions(opts => [...opts, (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.stringToSelectableValue)(opt)]); // @ts-ignore-check: react-hook-form made me do this

                  setValue('groupBy', [...field.value, opt]);
                },
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapMultiSelectValueToStrings)(value)),
                options: groupByOptions
              }));
            },
            control: control,
            name: "groupBy"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
          collapsible: true,
          className: styles.collapse,
          isOpen: isTimingOptionsExpanded,
          label: "Timing options",
          onToggle: setIsTimingOptionsExpanded,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group wait",
            description: "The waiting time until the initial notification is sent for a new group created by an incoming alert. Default 30 seconds.",
            invalid: !!errors.groupWaitValue,
            error: (_errors$groupWaitValu = errors.groupWaitValue) === null || _errors$groupWaitValu === void 0 ? void 0 : _errors$groupWaitValu.message,
            "data-testid": "am-group-wait",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: styles.smallInput,
                    invalid: invalid,
                    placeholder: '30'
                  })),
                  control: control,
                  name: "groupWaitValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref3 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref3,
                        field = _objectWithoutPropertiesLoose(_ref3.field, _excluded3);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: styles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
                      "aria-label": "Group wait type"
                    }));
                  },
                  control: control,
                  name: "groupWaitValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group interval",
            description: "The waiting time to send a batch of new alerts for that group after the first notification was sent. Default 5 minutes.",
            invalid: !!errors.groupIntervalValue,
            error: (_errors$groupInterval = errors.groupIntervalValue) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            "data-testid": "am-group-interval",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: styles.smallInput,
                    invalid: invalid,
                    placeholder: '5'
                  })),
                  control: control,
                  name: "groupIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref4 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref4,
                        field = _objectWithoutPropertiesLoose(_ref4.field, _excluded4);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: styles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
                      "aria-label": "Group interval type"
                    }));
                  },
                  control: control,
                  name: "groupIntervalValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Repeat interval",
            description: "The waiting time to resend an alert after they have successfully been sent. Default 4 hours.",
            invalid: !!errors.repeatIntervalValue,
            error: (_errors$repeatInterva = errors.repeatIntervalValue) === null || _errors$repeatInterva === void 0 ? void 0 : _errors$repeatInterva.message,
            "data-testid": "am-repeat-interval",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: styles.smallInput,
                    invalid: invalid,
                    placeholder: "4"
                  })),
                  control: control,
                  name: "repeatIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref5 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref5,
                        field = _objectWithoutPropertiesLoose(_ref5.field, _excluded5);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: styles.input,
                      menuPlacement: "top",
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
                      "aria-label": "Repeat interval type"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValueType"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: styles.container,
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Save"
          })), _Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: onCancel,
            type: "reset",
            variant: "secondary",
            fill: "outline",
            children: "Cancel"
          }))]
        })]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRootRouteRead.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRootRouteRead": () => (/* binding */ AmRootRouteRead)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _gridStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/gridStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AmRootRouteRead = ({
  routes
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_gridStyles__WEBPACK_IMPORTED_MODULE_2__.getGridStyles);
  const receiver = routes.receiver || '-';
  const groupBy = routes.groupBy.join(', ') || '-';
  const groupWait = routes.groupWaitValue ? `${routes.groupWaitValue}${routes.groupWaitValueType}` : '-';
  const groupInterval = routes.groupIntervalValue ? `${routes.groupIntervalValue}${routes.groupIntervalValueType}` : '-';
  const repeatInterval = routes.repeatIntervalValue ? `${routes.repeatIntervalValue}${routes.repeatIntervalValueType}` : '-';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.titleCell,
      children: "Contact point"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-receiver",
      children: receiver
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.titleCell,
      children: "Group by"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-group-by",
      children: groupBy
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.titleCell,
      children: "Timings"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-timings",
      children: ["Group wait: ", groupWait, " | Group interval: ", groupInterval, " | Repeat interval: ", repeatInterval]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRoutesExpandedForm": () => (/* binding */ AmRoutesExpandedForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useMuteTimingOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useMuteTimingOptions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _formStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/formStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"],
      _excluded3 = ["onChange", "ref"],
      _excluded4 = ["onChange", "ref"],
      _excluded5 = ["onChange", "ref"],
      _excluded6 = ["onChange", "ref"],
      _excluded7 = ["onChange", "ref"];

var _div, _Button;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const AmRoutesExpandedForm = ({
  onCancel,
  onSave,
  receivers,
  routes
}) => {
  var _Button2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const formStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_formStyles__WEBPACK_IMPORTED_MODULE_7__.getFormStyles);
  const [groupByOptions, setGroupByOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.stringsToSelectableValues)(routes.groupBy));
  const muteTimingOptions = (0,_hooks_useMuteTimingOptions__WEBPACK_IMPORTED_MODULE_3__.useMuteTimingOptions)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
    defaultValues: routes,
    onSubmit: onSave,
    children: ({
      control,
      register,
      errors,
      setValue,
      watch
    }) => {
      var _errors$groupWaitValu, _errors$groupInterval, _errors$repeatInterva;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", Object.assign({
          type: "hidden"
        }, register('id'))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldArray, {
          name: "object_matchers",
          control: control,
          children: ({
            fields,
            append,
            remove
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
              justify: "flex-start",
              spacing: "md",
              children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                children: "Matching labels"
              })), fields.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                color: "orange",
                className: styles.noMatchersWarning,
                icon: "exclamation-triangle",
                text: "If no matchers are specified, this notification policy will handle all alert instances."
              }), fields.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: styles.matchersContainer,
                children: fields.map((field, index) => {
                  var _errors$object_matche, _errors$object_matche2, _errors$object_matche3, _errors$object_matche4, _errors$object_matche5, _errors$object_matche6, _errors$object_matche7, _errors$object_matche8, _errors$object_matche9, _errors$object_matche10;

                  const localPath = `object_matchers[${index}]`;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
                    align: "flex-start",
                    height: "auto",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      label: "Label",
                      invalid: !!((_errors$object_matche = errors.object_matchers) !== null && _errors$object_matche !== void 0 && (_errors$object_matche2 = _errors$object_matche[index]) !== null && _errors$object_matche2 !== void 0 && _errors$object_matche2.name),
                      error: (_errors$object_matche3 = errors.object_matchers) === null || _errors$object_matche3 === void 0 ? void 0 : (_errors$object_matche4 = _errors$object_matche3[index]) === null || _errors$object_matche4 === void 0 ? void 0 : (_errors$object_matche5 = _errors$object_matche4.name) === null || _errors$object_matche5 === void 0 ? void 0 : _errors$object_matche5.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register(`${localPath}.name`, {
                        required: 'Field is required'
                      }), {
                        defaultValue: field.name,
                        placeholder: "label"
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      label: 'Operator',
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                        render: _ref => {
                          let {
                            field: {
                              onChange
                            }
                          } = _ref,
                              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                            className: styles.matchersOperator,
                            onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value),
                            options: _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.matcherFieldOptions,
                            "aria-label": "Operator"
                          }));
                        },
                        defaultValue: field.operator,
                        control: control,
                        name: `${localPath}.operator`,
                        rules: {
                          required: {
                            value: true,
                            message: 'Required.'
                          }
                        }
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      label: "Value",
                      invalid: !!((_errors$object_matche6 = errors.object_matchers) !== null && _errors$object_matche6 !== void 0 && (_errors$object_matche7 = _errors$object_matche6[index]) !== null && _errors$object_matche7 !== void 0 && _errors$object_matche7.value),
                      error: (_errors$object_matche8 = errors.object_matchers) === null || _errors$object_matche8 === void 0 ? void 0 : (_errors$object_matche9 = _errors$object_matche8[index]) === null || _errors$object_matche9 === void 0 ? void 0 : (_errors$object_matche10 = _errors$object_matche9.value) === null || _errors$object_matche10 === void 0 ? void 0 : _errors$object_matche10.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register(`${localPath}.value`, {
                        required: 'Field is required'
                      }), {
                        defaultValue: field.value,
                        placeholder: "value"
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                      className: styles.removeButton,
                      tooltip: "Remove matcher",
                      name: 'trash-alt',
                      onClick: () => remove(index),
                      children: "Remove"
                    })]
                  }, field.id);
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                className: styles.addMatcherBtn,
                icon: "plus",
                onClick: () => append(_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.emptyArrayFieldMatcher),
                variant: "secondary",
                type: "button",
                children: "Add matcher"
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Contact point",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref2 => {
              let {
                field: {
                  onChange
                }
              } = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                "aria-label": "Contact point"
              }, field, {
                className: formStyles.input,
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapSelectValueToString)(value)),
                options: receivers
              }));
            },
            control: control,
            name: "receiver"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Continue matching subsequent sibling nodes",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, Object.assign({
            id: "continue-toggle"
          }, register('continue')))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Override grouping",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, Object.assign({
            id: "override-grouping-toggle"
          }, register('overrideGrouping')))
        }), watch().overrideGrouping && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Group by",
          description: "Group alerts when you receive a notification based on labels. If empty it will be inherited from the parent policy.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref3 => {
              let {
                field: {
                  onChange
                }
              } = _ref3,
                  field = _objectWithoutPropertiesLoose(_ref3.field, _excluded3);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
                "aria-label": "Group by"
              }, field, {
                allowCustomValue: true,
                className: formStyles.input,
                onCreateOption: opt => {
                  setGroupByOptions(opts => [...opts, (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.stringToSelectableValue)(opt)]); // @ts-ignore-check: react-hook-form made me do this

                  setValue('groupBy', [...field.value, opt]);
                },
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapMultiSelectValueToStrings)(value)),
                options: groupByOptions
              }));
            },
            control: control,
            name: "groupBy"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Override general timings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, Object.assign({
            id: "override-timings-toggle"
          }, register('overrideTimings')))
        }), watch().overrideTimings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group wait",
            description: "The waiting time until the initial notification is sent for a new group created by an incoming alert. If empty it will be inherited from the parent policy.",
            invalid: !!errors.groupWaitValue,
            error: (_errors$groupWaitValu = errors.groupWaitValue) === null || _errors$groupWaitValu === void 0 ? void 0 : _errors$groupWaitValu.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: formStyles.smallInput,
                    invalid: invalid,
                    "aria-label": "Group wait value"
                  })),
                  control: control,
                  name: "groupWaitValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref4 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref4,
                        field = _objectWithoutPropertiesLoose(_ref4.field, _excluded4);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: formStyles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_6__.timeOptions,
                      "aria-label": "Group wait type"
                    }));
                  },
                  control: control,
                  name: "groupWaitValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group interval",
            description: "The waiting time to send a batch of new alerts for that group after the first notification was sent. If empty it will be inherited from the parent policy.",
            invalid: !!errors.groupIntervalValue,
            error: (_errors$groupInterval = errors.groupIntervalValue) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: formStyles.smallInput,
                    invalid: invalid,
                    "aria-label": "Group interval value"
                  })),
                  control: control,
                  name: "groupIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref5 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref5,
                        field = _objectWithoutPropertiesLoose(_ref5.field, _excluded5);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: formStyles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_6__.timeOptions,
                      "aria-label": "Group interval type"
                    }));
                  },
                  control: control,
                  name: "groupIntervalValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Repeat interval",
            description: "The waiting time to resend an alert after they have successfully been sent.",
            invalid: !!errors.repeatIntervalValue,
            error: (_errors$repeatInterva = errors.repeatIntervalValue) === null || _errors$repeatInterva === void 0 ? void 0 : _errors$repeatInterva.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: formStyles.smallInput,
                    invalid: invalid,
                    "aria-label": "Repeat interval value"
                  })),
                  control: control,
                  name: "repeatIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref6 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref6,
                        field = _objectWithoutPropertiesLoose(_ref6.field, _excluded6);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: formStyles.input,
                      menuPlacement: "top",
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_6__.timeOptions,
                      "aria-label": "Repeat interval type"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValueType"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Mute timings",
          "data-testid": "am-mute-timing-select",
          description: "Add mute timing to policy",
          invalid: !!errors.muteTimeIntervals,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref7 => {
              let {
                field: {
                  onChange
                }
              } = _ref7,
                  field = _objectWithoutPropertiesLoose(_ref7.field, _excluded7);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
                "aria-label": "Mute timings"
              }, field, {
                className: formStyles.input,
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapMultiSelectValueToStrings)(value)),
                options: muteTimingOptions
              }));
            },
            control: control,
            name: "muteTimeIntervals"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: styles.buttonGroup,
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Save policy"
          })), _Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: onCancel,
            fill: "outline",
            type: "button",
            variant: "secondary",
            children: "Cancel"
          }))]
        })]
      });
    }
  });
};

const getStyles = theme => {
  const commonSpacing = theme.spacing(3.5);
  return {
    addMatcherBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${commonSpacing};
    `,
    matchersContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.background.secondary};
      margin: ${theme.spacing(1, 0)};
      padding: ${theme.spacing(1, 4.6, 1, 1.5)};
      width: fit-content;
    `,
    matchersOperator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      min-width: 140px;
    `,
    nestedPolicies: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${commonSpacing};
    `,
    removeButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(1)};
      margin-top: ${theme.spacing(2.5)};
    `,
    buttonGroup: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(6)} 0 ${commonSpacing};

      & > * + * {
        margin-left: ${theme.spacing(1.5)};
      }
    `,
    noMatchersWarning: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(1)} ${theme.spacing(2)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedRead.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRoutesExpandedRead": () => (/* binding */ AmRoutesExpandedRead)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _AmRoutesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx");
/* harmony import */ var _MuteTimingsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx");
/* harmony import */ var _gridStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/gridStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;












const AmRoutesExpandedRead = ({
  onChange,
  receivers,
  routes,
  readOnly = false,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const gridStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_gridStyles__WEBPACK_IMPORTED_MODULE_8__.getGridStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_3__.getNotificationsPermissions)(alertManagerSourceName);
  const groupWait = routes.groupWaitValue ? `${routes.groupWaitValue}${routes.groupWaitValueType}` : '-';
  const groupInterval = routes.groupIntervalValue ? `${routes.groupIntervalValue}${routes.groupIntervalValueType}` : '-';
  const repeatInterval = routes.repeatIntervalValue ? `${routes.repeatIntervalValue}${routes.repeatIntervalValueType}` : '-';
  const [subroutes, setSubroutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(routes.routes);
  const [isAddMode, setIsAddMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: gridStyles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Group wait"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: groupWait
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Group interval"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: groupInterval
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Repeat interval"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: repeatInterval
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Nested policies"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: gridStyles.valueCell,
      children: [!!subroutes.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AmRoutesTable__WEBPACK_IMPORTED_MODULE_6__.AmRoutesTable, {
        isAddMode: isAddMode,
        onCancelAdd: () => {
          setIsAddMode(false);
          setSubroutes(subroutes => {
            const newSubroutes = [...subroutes];
            newSubroutes.pop();
            return newSubroutes;
          });
        },
        onChange: newRoutes => {
          onChange(Object.assign({}, routes, {
            routes: newRoutes
          }));

          if (isAddMode) {
            setIsAddMode(false);
          }
        },
        receivers: receivers,
        routes: subroutes,
        alertManagerSourceName: alertManagerSourceName
      }) : _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        children: "No nested policies configured."
      })), !isAddMode && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
        actions: [permissions.create],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: styles.addNestedRoutingBtn,
          icon: "plus",
          onClick: () => {
            setSubroutes(subroutes => [...subroutes, _utils_amroutes__WEBPACK_IMPORTED_MODULE_4__.emptyRoute]);
            setIsAddMode(true);
          },
          variant: "secondary",
          type: "button",
          children: "Add nested policy"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Mute timings"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_7__.MuteTimingsTable, {
        alertManagerSourceName: alertManagerSourceName,
        muteTimingNames: routes.muteTimeIntervals,
        hideActions: true
      })
    })]
  });
};

const getStyles = theme => {
  return {
    addNestedRoutingBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRoutesTable": () => (/* binding */ AmRoutesTable),
/* harmony export */   "deleteRoute": () => (/* binding */ deleteRoute),
/* harmony export */   "getFilteredRoutes": () => (/* binding */ getFilteredRoutes),
/* harmony export */   "updatedRoute": () => (/* binding */ updatedRoute)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_dynamicTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/dynamicTable.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");
/* harmony import */ var _silences_Matchers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/Matchers.tsx");
/* harmony import */ var _AmRoutesExpandedForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedForm.tsx");
/* harmony import */ var _AmRoutesExpandedRead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedRead.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _EmptyArea;
















const getFilteredRoutes = (routes, labelMatcherQuery, contactPointQuery) => {
  const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.parseMatchers)(labelMatcherQuery !== null && labelMatcherQuery !== void 0 ? labelMatcherQuery : '');
  let filteredRoutes = routes;

  if (matchers.length) {
    filteredRoutes = routes.filter(route => {
      const routeMatchers = route.object_matchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.matcherFieldToMatcher);
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.intersectionWith)(routeMatchers, matchers, lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual).length > 0;
    });
  }

  if (contactPointQuery && contactPointQuery.length > 0) {
    filteredRoutes = filteredRoutes.filter(route => route.receiver.toLowerCase().includes(contactPointQuery.toLowerCase()));
  }

  return filteredRoutes;
};
const updatedRoute = (routes, updatedRoute) => {
  const newRoutes = [...routes];
  const editIndex = newRoutes.findIndex(route => route.id === updatedRoute.id);

  if (editIndex >= 0) {
    newRoutes[editIndex] = Object.assign({}, newRoutes[editIndex], updatedRoute);
  }

  return newRoutes;
};
const deleteRoute = (routes, routeId) => {
  return routes.filter(route => route.id !== routeId);
};
const AmRoutesTable = ({
  isAddMode,
  onCancelAdd,
  onChange,
  receivers,
  routes,
  filters,
  readOnly = false,
  alertManagerSourceName
}) => {
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [deletingRouteId, setDeletingRouteId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const [expandedId, setExpandedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_4__.getNotificationsPermissions)(alertManagerSourceName);
  const canEditRoutes = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(permissions.update);
  const canDeleteRoutes = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(permissions.delete);
  const showActions = !readOnly && (canEditRoutes || canDeleteRoutes);
  const expandItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item => setExpandedId(item.id), []);
  const collapseItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setExpandedId(undefined), []);
  const cols = [{
    id: 'matchingCriteria',
    label: 'Matching labels',
    // eslint-disable-next-line react/display-name
    renderCell: item => {
      return item.data.object_matchers.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_silences_Matchers__WEBPACK_IMPORTED_MODULE_9__.Matchers, {
        matchers: item.data.object_matchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.matcherFieldToMatcher)
      }) : _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
        children: "Matches all alert instances"
      }));
    },
    size: 10
  }, {
    id: 'groupBy',
    label: 'Group by',
    renderCell: item => item.data.overrideGrouping && item.data.groupBy.join(', ') || '-',
    size: 5
  }, {
    id: 'receiverChannel',
    label: 'Contact point',
    renderCell: item => item.data.receiver || '-',
    size: 5
  }, {
    id: 'muteTimings',
    label: 'Mute timings',
    renderCell: item => item.data.muteTimeIntervals.join(', ') || '-',
    size: 5
  }, ...(!showActions ? [] : [{
    id: 'actions',
    label: 'Actions',
    // eslint-disable-next-line react/display-name
    renderCell: item => {
      if (item.renderExpandedContent) {
        return null;
      }

      const expandWithCustomContent = () => {
        expandItem(item);
        setEditMode(true);
      };

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            "aria-label": "Edit route",
            icon: "pen",
            onClick: expandWithCustomContent,
            size: "sm",
            type: "button",
            variant: "secondary",
            children: "Edit"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
            "aria-label": "Delete route",
            name: "trash-alt",
            onClick: () => {
              setDeletingRouteId(item.data.id);
            },
            type: "button"
          })]
        })
      });
    },
    size: '100px'
  }])];
  const filteredRoutes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => getFilteredRoutes(routes, filters === null || filters === void 0 ? void 0 : filters.queryString, filters === null || filters === void 0 ? void 0 : filters.contactPoint), [routes, filters]);
  const dynamicTableRoutes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils_dynamicTable__WEBPACK_IMPORTED_MODULE_6__.prepareItems)(isAddMode ? routes : filteredRoutes), [isAddMode, routes, filteredRoutes]); // expand the last item when adding or reset when the length changed

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isAddMode && dynamicTableRoutes.length) {
      setExpandedId(dynamicTableRoutes[dynamicTableRoutes.length - 1].id);
    }

    if (!isAddMode && dynamicTableRoutes.length) {
      setExpandedId(undefined);
    }
  }, [isAddMode, dynamicTableRoutes]);

  if (routes.length > 0 && filteredRoutes.length === 0) {
    return _EmptyArea || (_EmptyArea = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_8__.EmptyArea, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
        children: "No policies found"
      })
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_7__.DynamicTable, {
      cols: cols,
      isExpandable: true,
      items: dynamicTableRoutes,
      testIdGenerator: () => 'am-routes-row',
      onCollapse: collapseItem,
      onExpand: expandItem,
      isExpanded: item => expandedId === item.id,
      renderExpandedContent: item => isAddMode || editMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AmRoutesExpandedForm__WEBPACK_IMPORTED_MODULE_10__.AmRoutesExpandedForm, {
        onCancel: () => {
          if (isAddMode) {
            onCancelAdd();
          }

          setEditMode(false);
        },
        onSave: data => {
          const newRoutes = updatedRoute(routes, data);
          setEditMode(false);
          onChange(newRoutes);
        },
        receivers: receivers,
        routes: item.data
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AmRoutesExpandedRead__WEBPACK_IMPORTED_MODULE_11__.AmRoutesExpandedRead, {
        onChange: data => {
          const newRoutes = updatedRoute(routes, data);
          onChange(newRoutes);
        },
        receivers: receivers,
        routes: item.data,
        readOnly: readOnly,
        alertManagerSourceName: alertManagerSourceName
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
      isOpen: !!deletingRouteId,
      title: "Delete notification policy",
      body: "Deleting this notification policy will permanently remove it. Are you sure you want to delete this policy?",
      confirmText: "Yes, delete",
      icon: "exclamation-triangle",
      onConfirm: () => {
        if (deletingRouteId) {
          const newRoutes = deleteRoute(routes, deletingRouteId);
          onChange(newRoutes);
          setDeletingRouteId(undefined);
        }
      },
      onDismiss: () => setDeletingRouteId(undefined)
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmSpecificRouting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmSpecificRouting": () => (/* binding */ AmSpecificRouting)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");
/* harmony import */ var _EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx");
/* harmony import */ var _alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var _AmRoutesTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _EmptyArea, _Label, _Icon, _EmptyArea2;


















const AmSpecificRouting = ({
  alertManagerSourceName,
  onChange,
  onRootRouteEdit,
  receivers,
  routes,
  readOnly = false
}) => {
  var _filters$queryString, _filters$contactPoint;

  const [actualRoutes, setActualRoutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([...routes.routes]);
  const [isAddMode, setIsAddMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_6__.getNotificationsPermissions)(alertManagerSourceName);
  const canCreateNotifications = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(permissions.create);
  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_5__.useURLSearchParams)();
  const {
    queryString,
    contactPoint
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.getNotificationPoliciesFilters)(searchParams);
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    queryString,
    contactPoint
  });
  (0,react_use__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    setSearchParams({
      queryString: filters.queryString,
      contactPoint: filters.contactPoint
    });
  }, 400, [filters]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  const clearFilters = () => {
    setFilters({
      queryString: undefined,
      contactPoint: undefined
    });
    setSearchParams({
      queryString: undefined,
      contactPoint: undefined
    });
  };

  const addNewRoute = () => {
    clearFilters();
    setIsAddMode(true);
    setActualRoutes(() => [...routes.routes, Object.assign({}, _utils_amroutes__WEBPACK_IMPORTED_MODULE_7__.emptyRoute, {
      matchers: [_utils_amroutes__WEBPACK_IMPORTED_MODULE_7__.emptyArrayFieldMatcher]
    })]);
  };

  const onCancelAdd = () => {
    setIsAddMode(false);
    setActualRoutes([...routes.routes]);
  };

  const onTableRouteChange = newRoutes => {
    onChange(Object.assign({}, routes, {
      routes: newRoutes
    }));

    if (isAddMode) {
      setIsAddMode(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: styles.container,
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h5", {
      children: "Specific routing"
    })), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      children: "Send specific alerts to chosen contact points, based on matching criteria"
    })), !routes.receiver ? readOnly ? _EmptyArea || (_EmptyArea = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_9__.EmptyArea, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        children: "There is no default contact point configured for the root route."
      })
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_10__.EmptyAreaWithCTA, {
      buttonIcon: "rocket",
      buttonLabel: "Set a default contact point",
      onButtonClick: onRootRouteEdit,
      text: "You haven't set a default contact point for the root route yet.",
      showButton: canCreateNotifications
    }) : actualRoutes.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [!isAddMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: styles.searchContainer,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_11__.MatcherFilter, {
            onFilterChange: filter => setFilters(currentFilters => Object.assign({}, currentFilters, {
              queryString: filter
            })),
            queryString: (_filters$queryString = filters.queryString) !== null && _filters$queryString !== void 0 ? _filters$queryString : '',
            className: styles.filterInput
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: styles.filterInput,
            children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
              children: "Search by contact point"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              onChange: ({
                currentTarget
              }) => setFilters(currentFilters => Object.assign({}, currentFilters, {
                contactPoint: currentTarget.value
              })),
              value: (_filters$contactPoint = filters.contactPoint) !== null && _filters$contactPoint !== void 0 ? _filters$contactPoint : '',
              placeholder: "Search by contact point",
              "data-testid": "search-query-input",
              prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: 'search'
              }))
            })]
          }), (queryString || contactPoint) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            icon: "times",
            onClick: clearFilters,
            className: styles.clearFilterBtn,
            children: "Clear filters"
          })]
        }), !isAddMode && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
          actions: [permissions.create],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: styles.addMatcherBtnRow,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              className: styles.addMatcherBtn,
              icon: "plus",
              onClick: addNewRoute,
              type: "button",
              children: "New policy"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_AmRoutesTable__WEBPACK_IMPORTED_MODULE_12__.AmRoutesTable, {
        isAddMode: isAddMode,
        readOnly: readOnly,
        onCancelAdd: onCancelAdd,
        onChange: onTableRouteChange,
        receivers: receivers,
        routes: actualRoutes,
        filters: {
          queryString,
          contactPoint
        },
        alertManagerSourceName: alertManagerSourceName
      })]
    }) : readOnly ? _EmptyArea2 || (_EmptyArea2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_9__.EmptyArea, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        children: "There are no specific policies configured."
      })
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_10__.EmptyAreaWithCTA, {
      buttonIcon: "plus",
      buttonLabel: "New specific policy",
      onButtonClick: addNewRoute,
      text: "You haven't created any specific policies yet.",
      showButton: canCreateNotifications
    })]
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-flow: column wrap;
    `,
    searchContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-flow: row nowrap;
      padding-bottom: ${theme.spacing(2)};
      border-bottom: 1px solid ${theme.colors.border.strong};
    `,
    clearFilterBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: flex-end;
      margin-left: ${theme.spacing(1)};
    `,
    filterInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 340px;
      & + & {
        margin-left: ${theme.spacing(1)};
      }
    `,
    addMatcherBtnRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-flow: column nowrap;
      padding: ${theme.spacing(2)} 0;
    `,
    addMatcherBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: flex-end;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuteTimingsTable": () => (/* binding */ MuteTimingsTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _p2, _ProvisioningBadge, _IconButton, _IconButton2, _br, _br2;



















const MuteTimingsTable = ({
  alertManagerSourceName,
  muteTimingNames,
  hideActions
}) => {
  var _result$alertmanager_5, _result$alertmanager_6;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_8__.getNotificationsPermissions)(alertManagerSourceName);
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const [muteTimingName, setMuteTimingName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    result
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_11__.initialAsyncRequestState;
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _result$alertmanager_, _result$alertmanager_2, _result$alertmanager_3, _result$alertmanager_4;

    const muteTimings = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : (_result$alertmanager_2 = result.alertmanager_config) === null || _result$alertmanager_2 === void 0 ? void 0 : _result$alertmanager_2.mute_time_intervals) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : [];
    const muteTimingsProvenances = (_result$alertmanager_3 = result === null || result === void 0 ? void 0 : (_result$alertmanager_4 = result.alertmanager_config) === null || _result$alertmanager_4 === void 0 ? void 0 : _result$alertmanager_4.muteTimeProvenances) !== null && _result$alertmanager_3 !== void 0 ? _result$alertmanager_3 : {};
    return muteTimings.filter(({
      name
    }) => muteTimingNames ? muteTimingNames.includes(name) : true).map(mute => {
      return {
        id: mute.name,
        data: Object.assign({}, mute, {
          provenance: muteTimingsProvenances[mute.name]
        })
      };
    });
  }, [result === null || result === void 0 ? void 0 : (_result$alertmanager_5 = result.alertmanager_config) === null || _result$alertmanager_5 === void 0 ? void 0 : _result$alertmanager_5.mute_time_intervals, result === null || result === void 0 ? void 0 : (_result$alertmanager_6 = result.alertmanager_config) === null || _result$alertmanager_6 === void 0 ? void 0 : _result$alertmanager_6.muteTimeProvenances, muteTimingNames]);
  const columns = useColumns(alertManagerSourceName, hideActions, setMuteTimingName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    className: styles.container,
    children: [!hideActions && (_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("h5", {
      children: "Mute timings"
    }))), !hideActions && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
      children: "Mute timings are a named interval of time that may be referenced in the notification policy tree to mute particular notification policies for specific times of the day."
    }))), !hideActions && items.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
      actions: [permissions.create],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        className: styles.addMuteButton,
        icon: "plus",
        variant: "primary",
        href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('alerting/routes/mute-timing/new', alertManagerSourceName),
        children: "New mute timing"
      })
    }), items.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_12__.DynamicTable, {
      items: items,
      cols: columns
    }) : !hideActions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_13__.EmptyAreaWithCTA, {
      text: "You haven't created any mute timings yet",
      buttonLabel: "Add mute timing",
      buttonIcon: "plus",
      buttonSize: "lg",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('alerting/routes/mute-timing/new', alertManagerSourceName),
      showButton: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(permissions.create)
    }) : _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
      children: "No mute timings configured"
    })), !hideActions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, {
      isOpen: !!muteTimingName,
      title: "Delete mute timing",
      body: `Are you sure you would like to delete "${muteTimingName}"`,
      confirmText: "Delete",
      onConfirm: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.deleteMuteTimingAction)(alertManagerSourceName, muteTimingName)),
      onDismiss: () => setMuteTimingName('')
    })]
  });
};

function useColumns(alertManagerSourceName, hideActions = false, setMuteTimingName) {
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_8__.getNotificationsPermissions)(alertManagerSourceName);
  const userHasEditPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(permissions.update);
  const userHasDeletePermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(permissions.delete);
  const showActions = !hideActions && (userHasEditPermissions || userHasDeletePermissions);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const columns = [{
      id: 'name',
      label: 'Name',
      renderCell: function renderName({
        data
      }) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [data.name, " ", data.provenance && (_ProvisioningBadge || (_ProvisioningBadge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_14__.ProvisioningBadge, {})))]
        });
      },
      size: '250px'
    }, {
      id: 'timeRange',
      label: 'Time range',
      renderCell: ({
        data
      }) => renderTimeIntervals(data.time_intervals)
    }];

    if (showActions) {
      columns.push({
        id: 'actions',
        label: 'Actions',
        renderCell: function renderActions({
          data
        }) {
          if (data.provenance) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)(`/alerting/routes/mute-timing/edit`, alertManagerSourceName, {
                  muteName: data.name
                }),
                children: _IconButton || (_IconButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                  name: "file-alt",
                  title: "View mute timing"
                }))
              })
            });
          }

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
              actions: [permissions.update],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)(`/alerting/routes/mute-timing/edit`, alertManagerSourceName, {
                  muteName: data.name
                }),
                children: _IconButton2 || (_IconButton2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                  name: "edit",
                  title: "Edit mute timing"
                }))
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
              actions: [permissions.delete],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                name: 'trash-alt',
                title: "Delete mute timing",
                onClick: () => setMuteTimingName(data.name)
              })
            })]
          });
        },
        size: '100px'
      });
    }

    return columns;
  }, [alertManagerSourceName, setMuteTimingName, showActions, permissions]);
}

function renderTimeIntervals(timeIntervals) {
  return timeIntervals.map((interval, index) => {
    const {
      times,
      weekdays,
      days_of_month,
      months,
      years
    } = interval;
    const timeString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getTimeString)(times);
    const weekdayString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getWeekdayString)(weekdays);
    const daysString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getDaysOfMonthString)(days_of_month);
    const monthsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getMonthsString)(months);
    const yearsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getYearsString)(years);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [`${timeString} ${weekdayString}`, _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("br", {})), [daysString, monthsString, yearsString].join(' | '), _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("br", {}))]
    }, JSON.stringify(interval) + index);
  });
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-flow: column nowrap;
  `,
  addMuteButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
    align-self: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/formStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormStyles": () => (/* binding */ getFormStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getFormStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-items: center;
      display: flex;
      flex-flow: row nowrap;

      & > * + * {
        margin-left: ${theme.spacing(1)};
      }
    `,
    input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1;
    `,
    timingContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: ${theme.spacing(33)};
    `,
    smallInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: ${theme.spacing(6.5)};
    `,
    linkText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-decoration: underline;
    `,
    collapse: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: none;
      background: none;
      color: ${theme.colors.text.primary};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/gridStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGridStyles": () => (/* binding */ getGridStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getGridStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: grid;
      font-style: ${theme.typography.fontSize};
      grid-template-columns: ${theme.spacing(15.5)} auto;

      ${theme.breakpoints.down('md')} {
        grid-template-columns: 100%;
      }
    `,
    titleCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.primary};
    `,
    valueCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      margin-bottom: ${theme.spacing(1)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/Matchers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matchers": () => (/* binding */ Matchers)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Matchers = ({
  matchers
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TagList, {
      className: styles.tags,
      tags: matchers.map(matcher => `${matcher.name}${(0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_3__.matcherToOperator)(matcher)}${matcher.value}`)
    })
  });
};

const getStyles = () => ({
  tags: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    justify-content: flex-start;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertManagerSourceName": () => (/* binding */ useAlertManagerSourceName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");






function useIsAlertManagerAvailable(availableAlertManagers) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerName => {
    const availableAlertManagersNames = availableAlertManagers.map(am => am.name);
    return availableAlertManagersNames.includes(alertManagerName);
  }, [availableAlertManagers]);
}
/* This will return am name either from query params or from local storage or a default (grafana).
 * Due to RBAC permissions Grafana Managed Alert manager or external alert managers may not be available
 * In the worst case neihter GMA nor external alert manager is available
 */


function useAlertManagerSourceName(availableAlertManagers) {
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.useQueryParams)();
  const isAlertManagerAvailable = useIsAlertManagerAvailable(availableAlertManagers);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerAvailable(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME) {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: alertManagerSourceName
      });
    }
  }, [updateQueryParams, isAlertManagerAvailable]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerAvailable(querySource)) {
      return [querySource, update];
    } else {
      // non existing alertmanager
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerAvailable(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  if (isAlertManagerAvailable(_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME)) {
    return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME, update];
  }

  return [undefined, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertManagersByPermission": () => (/* binding */ useAlertManagersByPermission)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");


function useAlertManagersByPermission(accessType) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getAlertManagerDataSourcesByPermission)(accessType), [accessType]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useMuteTimingOptions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMuteTimingOptions": () => (/* binding */ useMuteTimingOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _useAlertManagerSources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");






function useMuteTimingOptions() {
  const alertManagers = (0,_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_4__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName] = (0,_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_3__.useAlertManagerSourceName)(alertManagers);
  const amConfigs = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__.useUnifiedAlertingSelector)(state => state.amConfigs);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _result$alertmanager_, _config$mute_time_int, _config$mute_time_int2;

    const {
      result
    } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_2__.initialAsyncRequestState;
    const config = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : result.alertmanager_config) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : {};
    const muteTimingsOptions = (_config$mute_time_int = config === null || config === void 0 ? void 0 : (_config$mute_time_int2 = config.mute_time_intervals) === null || _config$mute_time_int2 === void 0 ? void 0 : _config$mute_time_int2.map(value => ({
      value: value.name,
      label: value.name,
      description: value.time_intervals.map(interval => (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_1__.timeIntervalToString)(interval)).join(', AND ')
    }))) !== null && _config$mute_time_int !== void 0 ? _config$mute_time_int : [];
    return muteTimingsOptions;
  }, [alertManagerSourceName, amConfigs]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useURLSearchParams.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useURLSearchParams": () => (/* binding */ useURLSearchParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");



function useURLSearchParams() {
  const {
    search
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new URLSearchParams(search), [search]);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((searchValues, replace) => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial(searchValues, replace);
  }, []);
  return [queryParams, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/amroutes.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amRouteToFormAmRoute": () => (/* binding */ amRouteToFormAmRoute),
/* harmony export */   "emptyArrayFieldMatcher": () => (/* binding */ emptyArrayFieldMatcher),
/* harmony export */   "emptyRoute": () => (/* binding */ emptyRoute),
/* harmony export */   "formAmRouteToAmRoute": () => (/* binding */ formAmRouteToAmRoute),
/* harmony export */   "mapMultiSelectValueToStrings": () => (/* binding */ mapMultiSelectValueToStrings),
/* harmony export */   "mapSelectValueToString": () => (/* binding */ mapSelectValueToString),
/* harmony export */   "optionalPositiveInteger": () => (/* binding */ optionalPositiveInteger),
/* harmony export */   "stringToSelectableValue": () => (/* binding */ stringToSelectableValue),
/* harmony export */   "stringsToSelectableValues": () => (/* binding */ stringsToSelectableValues)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _alertmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");





const defaultValueAndType = ['', ''];

const matchersToArrayFieldMatchers = (matchers, isRegex) => Object.entries(matchers !== null && matchers !== void 0 ? matchers : {}).reduce((acc, [name, value]) => [...acc, {
  name,
  value,
  operator: isRegex ? app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.MatcherOperator.regex : app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.MatcherOperator.equal
}], []);

const intervalToValueAndType = (strValue, defaultValue) => {
  if (!strValue) {
    return defaultValue !== null && defaultValue !== void 0 ? defaultValue : defaultValueAndType;
  }

  const [value, valueType] = strValue ? (0,_time__WEBPACK_IMPORTED_MODULE_4__.parseInterval)(strValue) : [undefined, undefined];
  const timeOption = _time__WEBPACK_IMPORTED_MODULE_4__.timeOptions.find(opt => opt.value === valueType);

  if (!value || !timeOption) {
    return defaultValueAndType;
  }

  return [String(value), timeOption.value];
};

const selectableValueToString = selectableValue => selectableValue.value;

const selectableValuesToStrings = arr => (arr !== null && arr !== void 0 ? arr : []).map(selectableValueToString);

const emptyArrayFieldMatcher = {
  name: '',
  value: '',
  operator: app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.MatcherOperator.equal
};
const emptyRoute = {
  id: '',
  overrideGrouping: false,
  groupBy: [],
  object_matchers: [],
  routes: [],
  continue: false,
  receiver: '',
  overrideTimings: false,
  groupWaitValue: '',
  groupWaitValueType: _time__WEBPACK_IMPORTED_MODULE_4__.timeOptions[0].value,
  groupIntervalValue: '',
  groupIntervalValueType: _time__WEBPACK_IMPORTED_MODULE_4__.timeOptions[0].value,
  repeatIntervalValue: '',
  repeatIntervalValueType: _time__WEBPACK_IMPORTED_MODULE_4__.timeOptions[0].value,
  muteTimeIntervals: []
}; //returns route, and a record mapping id to existing route

const amRouteToFormAmRoute = route => {
  var _route$routes, _route$matchers$map, _route$matchers, _route$object_matcher, _route$object_matcher2, _route$continue, _route$receiver, _route$group_by, _route$mute_time_inte;

  if (!route) {
    return [emptyRoute, {}];
  }

  const id = String(Math.random());
  const id2route = {
    [id]: route
  };

  if (Object.keys(route).length === 0) {
    const formAmRoute = Object.assign({}, emptyRoute, {
      id
    });
    return [formAmRoute, id2route];
  }

  const formRoutes = [];
  (_route$routes = route.routes) === null || _route$routes === void 0 ? void 0 : _route$routes.forEach(subRoute => {
    const [subFormRoute, subId2Route] = amRouteToFormAmRoute(subRoute);
    formRoutes.push(subFormRoute);
    Object.assign(id2route, subId2Route);
  }); // Frontend migration to use object_matchers instead of matchers

  const matchers = route.matchers ? (_route$matchers$map = (_route$matchers = route.matchers) === null || _route$matchers === void 0 ? void 0 : _route$matchers.map(matcher => (0,_alertmanager__WEBPACK_IMPORTED_MODULE_2__.matcherToMatcherField)((0,_alertmanager__WEBPACK_IMPORTED_MODULE_2__.parseMatcher)(matcher)))) !== null && _route$matchers$map !== void 0 ? _route$matchers$map : [] : (_route$object_matcher = (_route$object_matcher2 = route.object_matchers) === null || _route$object_matcher2 === void 0 ? void 0 : _route$object_matcher2.map(matcher => ({
    name: matcher[0],
    operator: matcher[1],
    value: matcher[2]
  }))) !== null && _route$object_matcher !== void 0 ? _route$object_matcher : [];
  const [groupWaitValue, groupWaitValueType] = intervalToValueAndType(route.group_wait, ['', 's']);
  const [groupIntervalValue, groupIntervalValueType] = intervalToValueAndType(route.group_interval, ['', 'm']);
  const [repeatIntervalValue, repeatIntervalValueType] = intervalToValueAndType(route.repeat_interval, ['', 'h']);
  return [{
    id,
    object_matchers: [...matchers, ...matchersToArrayFieldMatchers(route.match, false), ...matchersToArrayFieldMatchers(route.match_re, true)],
    continue: (_route$continue = route.continue) !== null && _route$continue !== void 0 ? _route$continue : false,
    receiver: (_route$receiver = route.receiver) !== null && _route$receiver !== void 0 ? _route$receiver : '',
    overrideGrouping: Array.isArray(route.group_by) && route.group_by.length !== 0,
    groupBy: (_route$group_by = route.group_by) !== null && _route$group_by !== void 0 ? _route$group_by : [],
    overrideTimings: [groupWaitValue, groupIntervalValue, repeatIntervalValue].some(Boolean),
    groupWaitValue,
    groupWaitValueType,
    groupIntervalValue,
    groupIntervalValueType,
    repeatIntervalValue,
    repeatIntervalValueType,
    routes: formRoutes,
    muteTimeIntervals: (_route$mute_time_inte = route.mute_time_intervals) !== null && _route$mute_time_inte !== void 0 ? _route$mute_time_inte : []
  }, id2route];
};
const formAmRouteToAmRoute = (alertManagerSourceName, formAmRoute, id2ExistingRoute) => {
  const existing = id2ExistingRoute[formAmRoute.id];
  const {
    overrideGrouping,
    groupBy,
    overrideTimings,
    groupWaitValue,
    groupWaitValueType,
    groupIntervalValue,
    groupIntervalValueType,
    repeatIntervalValue,
    repeatIntervalValueType
  } = formAmRoute;
  const group_by = overrideGrouping && groupBy ? groupBy : [];
  const overrideGroupWait = overrideTimings && groupWaitValue;
  const group_wait = overrideGroupWait ? `${groupWaitValue}${groupWaitValueType}` : undefined;
  const overrideGroupInterval = overrideTimings && groupIntervalValue;
  const group_interval = overrideGroupInterval ? `${groupIntervalValue}${groupIntervalValueType}` : undefined;
  const overrideRepeatInterval = overrideTimings && repeatIntervalValue;
  const repeat_interval = overrideRepeatInterval ? `${repeatIntervalValue}${repeatIntervalValueType}` : undefined;
  const amRoute = Object.assign({}, existing !== null && existing !== void 0 ? existing : {}, {
    continue: formAmRoute.continue,
    group_by: group_by,
    object_matchers: formAmRoute.object_matchers.length ? formAmRoute.object_matchers.map(matcher => [matcher.name, matcher.operator, matcher.value]) : undefined,
    match: undefined,
    // DEPRECATED: Use matchers
    match_re: undefined,
    // DEPRECATED: Use matchers
    group_wait,
    group_interval,
    repeat_interval,
    routes: formAmRoute.routes.map(subRoute => formAmRouteToAmRoute(alertManagerSourceName, subRoute, id2ExistingRoute)),
    mute_time_intervals: formAmRoute.muteTimeIntervals
  });

  if (alertManagerSourceName !== _datasource__WEBPACK_IMPORTED_MODULE_3__.GRAFANA_RULES_SOURCE_NAME) {
    amRoute.matchers = formAmRoute.object_matchers.map(({
      name,
      operator,
      value
    }) => `${name}${operator}${value}`);
    amRoute.object_matchers = undefined;
  } else {
    amRoute.matchers = undefined;
  }

  if (formAmRoute.receiver) {
    amRoute.receiver = formAmRoute.receiver;
  }

  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(amRoute, lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined);
};
const stringToSelectableValue = str => ({
  label: str,
  value: str
});
const stringsToSelectableValues = arr => (arr !== null && arr !== void 0 ? arr : []).map(stringToSelectableValue);
const mapSelectValueToString = selectableValue => {
  var _selectableValueToStr;

  if (!selectableValue) {
    return '';
  }

  return (_selectableValueToStr = selectableValueToString(selectableValue)) !== null && _selectableValueToStr !== void 0 ? _selectableValueToStr : '';
};
const mapMultiSelectValueToStrings = selectableValues => {
  if (!selectableValues) {
    return [];
  }

  return selectableValuesToStrings(selectableValues);
};
const optionalPositiveInteger = value => {
  if (!value) {
    return undefined;
  }

  return !/^\d+$/.test(value) ? 'Must be a positive integer.' : undefined;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/dynamicTable.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareItems": () => (/* binding */ prepareItems)
/* harmony export */ });
const prepareItems = (items, idCreator) => items.map((item, index) => {
  var _idCreator;

  return {
    id: (_idCreator = idCreator === null || idCreator === void 0 ? void 0 : idCreator(item)) !== null && _idCreator !== void 0 ? _idCreator : index,
    data: item
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRBbVJvdXRlcy5mODllZDc4NTBjYzQwNGI5MDA2ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRU8sU0FBU0ksVUFBVCxDQUF1QkMsYUFBdkIsRUFBd0Q7RUFDN0QsTUFBTUMsUUFBUSxHQUFHSix3REFBVyxFQUE1QixDQUQ2RCxDQUU3RDs7RUFDQSxNQUFNSyxXQUFXLEdBQUdOLDZDQUFNLENBQUNJLGFBQUQsQ0FBMUI7RUFDQUUsV0FBVyxDQUFDQyxPQUFaLEdBQXNCSCxhQUF0QjtFQUNBTCxnREFBUyxDQUFDLE1BQU07SUFDZCxPQUFPLE1BQU07TUFDWE0sUUFBUSxDQUFDSCwrREFBYSxDQUFDO1FBQUVFLGFBQWEsRUFBRUUsV0FBVyxDQUFDQztNQUE3QixDQUFELENBQWQsQ0FBUjtJQUNELENBRkQ7RUFHRCxDQUpRLEVBSU4sQ0FBQ0YsUUFBRCxDQUpNLENBQVQ7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBRUEsTUFBTThCLFFBQVksR0FBRyxNQUFNO0VBQUE7O0VBQ3pCLE1BQU05QixRQUFRLEdBQUdKLHdEQUFXLEVBQTVCO0VBQ0EsTUFBTW1DLE1BQU0sR0FBR3JCLHVEQUFVLENBQUNzQixTQUFELENBQXpCO0VBQ0EsTUFBTSxDQUFDQyxtQkFBRCxFQUFzQkMsc0JBQXRCLElBQWdEM0IsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0VBQ0EsTUFBTTRCLGFBQWEsR0FBR2QsNEZBQTRCLENBQUMsY0FBRCxDQUFsRDtFQUNBLE1BQU0sQ0FBQ2Usc0JBQUQsRUFBeUJDLHlCQUF6QixJQUFzRGpCLDRGQUF5QixDQUFDZSxhQUFELENBQXJGO0VBRUEsTUFBTUcsU0FBUyxHQUFHaEIsOEZBQTBCLENBQUVpQixLQUFELElB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RCxHQUFRLEVBQVIsRUFBWWhYLEdBQVosQ0FBZ0JtSCx1QkFBaEIsQ0FESztBQUdBLE1BQU1GLHNCQUFzQixHQUFJNlAsZUFBRCxJQUFzRDtFQUFBOztFQUMxRixJQUFJLENBQUNBLGVBQUwsRUFBc0I7SUFDcEIsT0FBTyxFQUFQO0VBQ0Q7O0VBRUQsZ0NBQU9ELHVCQUF1QixDQUFDQyxlQUFELENBQTlCLHlFQUFtRCxFQUFuRDtBQUNELENBTk07QUFRQSxNQUFNOVAsNEJBQTRCLEdBQ3ZDMlIsZ0JBRDBDLElBRTdCO0VBQ2IsSUFBSSxDQUFDQSxnQkFBTCxFQUF1QjtJQUNyQixPQUFPLEVBQVA7RUFDRDs7RUFFRCxPQUFPNUIseUJBQXlCLENBQUM0QixnQkFBRCxDQUFoQztBQUNELENBUk07QUFVQSxNQUFNelIsdUJBQXlDLEdBQUk1QixLQUFELElBQVc7RUFDbEUsSUFBSSxDQUFDQSxLQUFMLEVBQVk7SUFDVixPQUFPNkksU0FBUDtFQUNEOztFQUVELE9BQU8sQ0FBQyxRQUFReUssSUFBUixDQUFhdFQsS0FBYixDQUFELEdBQXVCLDZCQUF2QixHQUF1RDZJLFNBQTlEO0FBQ0QsQ0FOTTs7Ozs7Ozs7Ozs7QUNqT0EsTUFBTXZCLFlBQVksR0FBRyxDQUMxQndFLEtBRDBCLEVBRTFCeUgsU0FGMEIsS0FJMUJ6SCxLQUFLLENBQUNwUixHQUFOLENBQVUsQ0FBQzRPLElBQUQsRUFBTzlELEtBQVA7RUFBQTs7RUFBQSxPQUFrQjtJQUMxQk0sRUFBRSxnQkFBRXlOLFNBQUYsYUFBRUEsU0FBRix1QkFBRUEsU0FBUyxDQUFHakssSUFBSCxDQUFYLG1EQUF1QjlELEtBREM7SUFFMUJuSyxJQUFJLEVBQUVpTztFQUZvQixDQUFsQjtBQUFBLENBQVYsQ0FKSyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL0FtUm91dGVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0F1dGhvcml6ZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0VtcHR5QXJlYS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0VtcHR5QXJlYVdpdGhDVEEudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9Ob0FsZXJ0TWFuYWdlcldhcm5pbmcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9Qcm92aXNpb25pbmcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL0FtUm9vdFJvdXRlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb290Um91dGVGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb290Um91dGVSZWFkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb3V0ZXNFeHBhbmRlZEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9BbVJvdXRlc0V4cGFuZGVkUmVhZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL0FtUm91dGVzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9BbVNwZWNpZmljUm91dGluZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9mb3JtU3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9ncmlkU3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9NYXRjaGVycy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZU11dGVUaW1pbmdPcHRpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlVVJMU2VhcmNoUGFyYW1zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvYW1yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9keW5hbWljVGFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiwgU3RhdGVTZWxlY3RvciB9IGZyb20gJy4uL2FjdGlvbnMvY2xlYW5VcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDbGVhbnVwPFQ+KHN0YXRlU2VsZWN0b3I6IFN0YXRlU2VsZWN0b3I8VD4pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAvL2JpdCBvZiBhIGhhY2sgdG8gdW5idXJkZW4gdXNlciBmcm9tIGhhdmluZyB0byB3cmFwIHN0YXRlU2VsY2V0b3IgaW4gYSB1c2VDYWxsYmFjay4gT3RoZXJ3aXNlIGNsZWFudXAgd291bGQgaGFwcGVuIG9uIGV2ZXJ5IHJlbmRlclxuICBjb25zdCBzZWxlY3RvclJlZiA9IHVzZVJlZihzdGF0ZVNlbGVjdG9yKTtcbiAgc2VsZWN0b3JSZWYuY3VycmVudCA9IHN0YXRlU2VsZWN0b3I7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yOiBzZWxlY3RvclJlZi5jdXJyZW50IH0pKTtcbiAgICB9O1xuICB9LCBbZGlzcGF0Y2hdKTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBMb2FkaW5nUGxhY2Vob2xkZXIsIHVzZVN0eWxlczIsIHdpdGhFcnJvckJvdW5kYXJ5IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUmVjZWl2ZXIgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHVzZUNsZWFudXAgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuXG5pbXBvcnQgeyBBbGVydE1hbmFnZXJQaWNrZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRNYW5hZ2VyUGlja2VyJztcbmltcG9ydCB7IEFsZXJ0aW5nUGFnZVdyYXBwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlcic7XG5pbXBvcnQgeyBOb0FsZXJ0TWFuYWdlcldhcm5pbmcgfSBmcm9tICcuL2NvbXBvbmVudHMvTm9BbGVydE1hbmFnZXJXYXJuaW5nJztcbmltcG9ydCB7IFByb3Zpc2lvbmVkUmVzb3VyY2UsIFByb3Zpc2lvbmluZ0FsZXJ0IH0gZnJvbSAnLi9jb21wb25lbnRzL1Byb3Zpc2lvbmluZyc7XG5pbXBvcnQgeyBBbVJvb3RSb3V0ZSB9IGZyb20gJy4vY29tcG9uZW50cy9hbXJvdXRlcy9BbVJvb3RSb3V0ZSc7XG5pbXBvcnQgeyBBbVNwZWNpZmljUm91dGluZyB9IGZyb20gJy4vY29tcG9uZW50cy9hbXJvdXRlcy9BbVNwZWNpZmljUm91dGluZyc7XG5pbXBvcnQgeyBNdXRlVGltaW5nc1RhYmxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdzVGFibGUnO1xuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9IGZyb20gJy4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uIH0gZnJvbSAnLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VzJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiwgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEFtUm91dGVSZWNlaXZlciwgRm9ybUFtUm91dGUgfSBmcm9tICcuL3R5cGVzL2Ftcm91dGVzJztcbmltcG9ydCB7IGFtUm91dGVUb0Zvcm1BbVJvdXRlLCBmb3JtQW1Sb3V0ZVRvQW1Sb3V0ZSwgc3RyaW5nc1RvU2VsZWN0YWJsZVZhbHVlcyB9IGZyb20gJy4vdXRpbHMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi91dGlscy9yZWR1eCc7XG5cbmNvbnN0IEFtUm91dGVzOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IFtpc1Jvb3RSb3V0ZUVkaXRNb2RlLCBzZXRJc1Jvb3RSb3V0ZUVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYWxlcnRNYW5hZ2VycyA9IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24oJ25vdGlmaWNhdGlvbicpO1xuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKGFsZXJ0TWFuYWdlcnMpO1xuXG4gIGNvbnN0IGFtQ29uZmlncyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1Db25maWdzKTtcblxuICBjb25zdCBmZXRjaENvbmZpZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpO1xuICAgIH1cbiAgfSwgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGRpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaENvbmZpZygpO1xuICB9LCBbZmV0Y2hDb25maWddKTtcblxuICBjb25zdCB7XG4gICAgcmVzdWx0LFxuICAgIGxvYWRpbmc6IHJlc3VsdExvYWRpbmcsXG4gICAgZXJyb3I6IHJlc3VsdEVycm9yLFxuICB9ID0gKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgYW1Db25maWdzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgY29uZmlnID0gcmVzdWx0Py5hbGVydG1hbmFnZXJfY29uZmlnO1xuICBjb25zdCBbcm9vdFJvdXRlLCBpZDJFeGlzdGluZ1JvdXRlXSA9IHVzZU1lbW8oKCkgPT4gYW1Sb3V0ZVRvRm9ybUFtUm91dGUoY29uZmlnPy5yb3V0ZSksIFtjb25maWc/LnJvdXRlXSk7XG5cbiAgY29uc3QgcmVjZWl2ZXJzID0gc3RyaW5nc1RvU2VsZWN0YWJsZVZhbHVlcyhcbiAgICAoY29uZmlnPy5yZWNlaXZlcnMgPz8gW10pLm1hcCgocmVjZWl2ZXI6IFJlY2VpdmVyKSA9PiByZWNlaXZlci5uYW1lKVxuICApIGFzIEFtUm91dGVSZWNlaXZlcltdO1xuXG4gIGNvbnN0IGlzUHJvdmlzaW9uZWQgPSB1c2VNZW1vKCgpID0+IEJvb2xlYW4oY29uZmlnPy5yb3V0ZT8ucHJvdmVuYW5jZSksIFtjb25maWc/LnJvdXRlXSk7XG5cbiAgY29uc3QgZW50ZXJSb290Um91dGVFZGl0TW9kZSA9ICgpID0+IHtcbiAgICBzZXRJc1Jvb3RSb3V0ZUVkaXRNb2RlKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGV4aXRSb290Um91dGVFZGl0TW9kZSA9ICgpID0+IHtcbiAgICBzZXRJc1Jvb3RSb3V0ZUVkaXRNb2RlKGZhbHNlKTtcbiAgfTtcblxuICB1c2VDbGVhbnVwKChzdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLnNhdmVBTUNvbmZpZyk7XG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoZGF0YTogUGFydGlhbDxGb3JtQW1Sb3V0ZT4pID0+IHtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBmb3JtQW1Sb3V0ZVRvQW1Sb3V0ZShcbiAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG4gICAgICB7XG4gICAgICAgIC4uLnJvb3RSb3V0ZSxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgIH0sXG4gICAgICBpZDJFeGlzdGluZ1JvdXRlXG4gICAgKTtcblxuICAgIGlmIChpc1Jvb3RSb3V0ZUVkaXRNb2RlKSB7XG4gICAgICBleGl0Um9vdFJvdXRlRWRpdE1vZGUoKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaChcbiAgICAgIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbih7XG4gICAgICAgIG5ld0NvbmZpZzoge1xuICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICBhbGVydG1hbmFnZXJfY29uZmlnOiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQuYWxlcnRtYW5hZ2VyX2NvbmZpZyxcbiAgICAgICAgICAgIHJvdXRlOiBuZXdEYXRhLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9sZENvbmZpZzogcmVzdWx0LFxuICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBhbGVydE1hbmFnZXJTb3VyY2VOYW1lISxcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U6ICdTYXZlZCcsXG4gICAgICAgIHJlZmV0Y2g6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgaWYgKCFhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydGluZ1BhZ2VXcmFwcGVyIHBhZ2VJZD1cImFtLXJvdXRlc1wiPlxuICAgICAgICA8Tm9BbGVydE1hbmFnZXJXYXJuaW5nIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM9e2FsZXJ0TWFuYWdlcnN9IC8+XG4gICAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHJlYWRPbmx5ID0gYWxlcnRNYW5hZ2VyU291cmNlTmFtZVxuICAgID8gaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkgfHwgaXNQcm92aXNpb25lZFxuICAgIDogdHJ1ZTtcblxuICByZXR1cm4gKFxuICAgIDxBbGVydGluZ1BhZ2VXcmFwcGVyIHBhZ2VJZD1cImFtLXJvdXRlc1wiPlxuICAgICAgPEFsZXJ0TWFuYWdlclBpY2tlclxuICAgICAgICBjdXJyZW50PXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICBvbkNoYW5nZT17c2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgZGF0YVNvdXJjZXM9e2FsZXJ0TWFuYWdlcnN9XG4gICAgICAvPlxuICAgICAge3Jlc3VsdEVycm9yICYmICFyZXN1bHRMb2FkaW5nICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIiB0aXRsZT1cIkVycm9yIGxvYWRpbmcgQWxlcnRtYW5hZ2VyIGNvbmZpZ1wiPlxuICAgICAgICAgIHtyZXN1bHRFcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge2lzUHJvdmlzaW9uZWQgJiYgPFByb3Zpc2lvbmluZ0FsZXJ0IHJlc291cmNlPXtQcm92aXNpb25lZFJlc291cmNlLlJvb3ROb3RpZmljYXRpb25Qb2xpY3l9IC8+fVxuICAgICAge3Jlc3VsdExvYWRpbmcgJiYgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBBbGVydG1hbmFnZXIgY29uZmlnLi4uXCIgLz59XG4gICAgICB7cmVzdWx0ICYmICFyZXN1bHRMb2FkaW5nICYmICFyZXN1bHRFcnJvciAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEFtUm9vdFJvdXRlXG4gICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgICAgaXNFZGl0TW9kZT17aXNSb290Um91dGVFZGl0TW9kZX1cbiAgICAgICAgICAgIG9uU2F2ZT17aGFuZGxlU2F2ZX1cbiAgICAgICAgICAgIG9uRW50ZXJFZGl0TW9kZT17ZW50ZXJSb290Um91dGVFZGl0TW9kZX1cbiAgICAgICAgICAgIG9uRXhpdEVkaXRNb2RlPXtleGl0Um9vdFJvdXRlRWRpdE1vZGV9XG4gICAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgIHJvdXRlcz17cm9vdFJvdXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5icmVha30gLz5cbiAgICAgICAgICA8QW1TcGVjaWZpY1JvdXRpbmdcbiAgICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2F2ZX1cbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIG9uUm9vdFJvdXRlRWRpdD17ZW50ZXJSb290Um91dGVFZGl0TW9kZX1cbiAgICAgICAgICAgIHJlY2VpdmVycz17cmVjZWl2ZXJzfVxuICAgICAgICAgICAgcm91dGVzPXtyb290Um91dGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyZWFrfSAvPlxuICAgICAgICAgIDxNdXRlVGltaW5nc1RhYmxlIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRXJyb3JCb3VuZGFyeShBbVJvdXRlcywgeyBzdHlsZTogJ3BhZ2UnIH0pO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGJyZWFrOiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZUlkOiBzdHJpbmc7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydGluZ1BhZ2VXcmFwcGVyOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgcGFnZUlkLCBpc0xvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKFxuICAgIHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpLFxuICAgIHBhZ2VJZFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT57Y2hpbGRyZW59PC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgYWN0aW9uczogQWNjZXNzQ29udHJvbEFjdGlvbltdO1xuICBmYWxsYmFjaz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgQXV0aG9yaXplOiBGQzxQcm9wcz4gPSAoeyBhY3Rpb25zLCBjaGlsZHJlbiwgZmFsbGJhY2sgPSB0cnVlIH0pID0+IHtcbiAgaWYgKGFjdGlvbnMuc29tZSgoYWN0aW9uKSA9PiBjb250ZXh0U3J2Lmhhc0FjY2VzcyhhY3Rpb24sIGZhbGxiYWNrKSkpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBjb25zdCBFbXB0eUFyZWE6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmcyfTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2VtaVdlYWt9O1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgQnV0dG9uSFRNTEF0dHJpYnV0ZXMsIEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uVmFyaWFudCwgSWNvbk5hbWUsIExpbmtCdXR0b24sIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRW1wdHlBcmVhIH0gZnJvbSAnLi9FbXB0eUFyZWEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtcHR5QXJlYVdpdGhDVEFQcm9wcyB7XG4gIGJ1dHRvbkxhYmVsOiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIG9uQnV0dG9uQ2xpY2s/OiBCdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD5bJ29uQ2xpY2snXTtcbiAgdGV4dDogc3RyaW5nO1xuXG4gIGJ1dHRvbkljb24/OiBJY29uTmFtZTtcbiAgYnV0dG9uU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZyc7XG4gIGJ1dHRvblZhcmlhbnQ/OiBCdXR0b25WYXJpYW50O1xuICBzaG93QnV0dG9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEVtcHR5QXJlYVdpdGhDVEE6IEZDPEVtcHR5QXJlYVdpdGhDVEFQcm9wcz4gPSAoe1xuICBidXR0b25JY29uLFxuICBidXR0b25MYWJlbCxcbiAgYnV0dG9uU2l6ZSA9ICdsZycsXG4gIGJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeScsXG4gIG9uQnV0dG9uQ2xpY2ssXG4gIHRleHQsXG4gIGhyZWYsXG4gIHNob3dCdXR0b24gPSB0cnVlLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBjb21tb25Qcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5idXR0b24sXG4gICAgaWNvbjogYnV0dG9uSWNvbixcbiAgICBzaXplOiBidXR0b25TaXplLFxuICAgIHZhcmlhbnQ6IGJ1dHRvblZhcmlhbnQsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlBcmVhPlxuICAgICAgPD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxuICAgICAgICB7c2hvd0J1dHRvbiAmJlxuICAgICAgICAgIChocmVmID8gKFxuICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17aHJlZn0gdHlwZT1cImJ1dHRvblwiIHsuLi5jb21tb25Qcm9wc30+XG4gICAgICAgICAgICAgIHtidXR0b25MYWJlbH1cbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfSB0eXBlPVwiYnV0dG9uXCIgey4uLmNvbW1vblByb3BzfT5cbiAgICAgICAgICAgICAge2J1dHRvbkxhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICA8L0VtcHR5QXJlYT5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iZzJ9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcueGx9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGAsXG4gICAgdGV4dDogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIGJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcubWR9IDAgJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vQWxlcnRNYW5hZ2VyUGlja2VyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdO1xufVxuXG5jb25zdCBOb0FsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIk5vIEFsZXJ0bWFuYWdlciBmb3VuZFwiIHNldmVyaXR5PVwid2FybmluZ1wiPlxuICAgIFdlIGNvdWxkIG5vdCBmaW5kIGFueSBleHRlcm5hbCBBbGVydG1hbmFnZXJzIGFuZCB5b3UgbWF5IG5vdCBoYXZlIGFjY2VzcyB0byB0aGUgYnVpbHQtaW4gR3JhZmFuYSBBbGVydG1hbmFnZXIuXG4gIDwvQWxlcnQ+XG4pO1xuXG5jb25zdCBPdGhlckFsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIlNlbGVjdGVkIEFsZXJ0bWFuYWdlciBub3QgZm91bmQuIFNlbGVjdCBhIGRpZmZlcmVudCBBbGVydG1hbmFnZXIuXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgU2VsZWN0ZWQgQWxlcnRtYW5hZ2VyIG5vIGxvbmdlciBleGlzdHMgb3IgeW91IG1heSBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBpdC5cbiAgPC9BbGVydD5cbik7XG5cbmV4cG9ydCBjb25zdCBOb0FsZXJ0TWFuYWdlcldhcm5pbmcgPSAoeyBhdmFpbGFibGVBbGVydE1hbmFnZXJzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtfLCBzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG4gIGNvbnN0IGhhc090aGVyQU1zID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtoYXNPdGhlckFNcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyIG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBkYXRhU291cmNlcz17YXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc30gLz5cbiAgICAgICAgICA8T3RoZXJBbGVydE1hbmFnZXJzQXZhaWxhYmxlIC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE5vQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydCwgQmFkZ2UgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBlbnVtIFByb3Zpc2lvbmVkUmVzb3VyY2Uge1xuICBDb250YWN0UG9pbnQgPSAnY29udGFjdCBwb2ludCcsXG4gIFRlbXBsYXRlID0gJ3RlbXBsYXRlJyxcbiAgTXV0ZVRpbWluZyA9ICdtdXRlIHRpbWluZycsXG4gIEFsZXJ0UnVsZSA9ICdhbGVydCBydWxlJyxcbiAgUm9vdE5vdGlmaWNhdGlvblBvbGljeSA9ICdyb290IG5vdGlmaWNhdGlvbiBwb2xpY3knLFxufVxuXG5pbnRlcmZhY2UgUHJvdmlzaW9uaW5nQWxlcnRQcm9wcyB7XG4gIHJlc291cmNlOiBQcm92aXNpb25lZFJlc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgUHJvdmlzaW9uaW5nQWxlcnQgPSAoeyByZXNvdXJjZSB9OiBQcm92aXNpb25pbmdBbGVydFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0IHRpdGxlPXtgVGhpcyAke3Jlc291cmNlfSBjYW5ub3QgYmUgZWRpdGVkIHRocm91Z2ggdGhlIFVJYH0gc2V2ZXJpdHk9XCJpbmZvXCI+XG4gICAgICBUaGlzIHtyZXNvdXJjZX0gaGFzIGJlZW4gcHJvdmlzaW9uZWQsIHRoYXQgbWVhbnMgaXQgd2FzIGNyZWF0ZWQgYnkgY29uZmlnLiBQbGVhc2UgY29udGFjdCB5b3VyIHNlcnZlciBhZG1pbiB0b1xuICAgICAgdXBkYXRlIHRoaXMge3Jlc291cmNlfS5cbiAgICA8L0FsZXJ0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFByb3Zpc2lvbmluZ0JhZGdlID0gKCkgPT4ge1xuICByZXR1cm4gPEJhZGdlIHRleHQ9eydQcm92aXNpb25lZCd9IGNvbG9yPXsncHVycGxlJ30gLz47XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcbmltcG9ydCB7IExhYmVsLCBUb29sdGlwLCBJbnB1dCwgSWNvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBxdWVyeVN0cmluZz86IHN0cmluZztcbiAgZGVmYXVsdFF1ZXJ5U3RyaW5nPzogc3RyaW5nO1xuICBvbkZpbHRlckNoYW5nZTogKGZpbHRlclN0cmluZzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgTWF0Y2hlckZpbHRlciA9ICh7IGNsYXNzTmFtZSwgb25GaWx0ZXJDaGFuZ2UsIGRlZmF1bHRRdWVyeVN0cmluZywgcXVlcnlTdHJpbmcgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBvbkZpbHRlckNoYW5nZSh0YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBzZWFyY2hJY29uID0gPEljb24gbmFtZT17J3NlYXJjaCd9IC8+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPExhYmVsPlxuICAgICAgICA8U3RhY2sgZ2FwPXswLjV9PlxuICAgICAgICAgIDxzcGFuPlNlYXJjaCBieSBsYWJlbDwvc3Bhbj5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgRmlsdGVyIGFsZXJ0cyB1c2luZyBsYWJlbCBxdWVyeWluZywgZXg6XG4gICAgICAgICAgICAgICAgPHByZT57YHtzZXZlcml0eT1cImNyaXRpY2FsXCIsIGluc3RhbmNlPX5cImNsdXN0ZXItdXMtLitcIn1gfTwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBuYW1lPVwiaW5mby1jaXJjbGVcIiBzaXplPVwic21cIiAvPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvTGFiZWw+XG4gICAgICA8SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRRdWVyeVN0cmluZ31cbiAgICAgICAgdmFsdWU9e3F1ZXJ5U3RyaW5nfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICBkYXRhLXRlc3RpZD1cInNlYXJjaC1xdWVyeS1pbnB1dFwiXG4gICAgICAgIHByZWZpeD17c2VhcmNoSWNvbn1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXaWR0aH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGljb246IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgYCxcbiAgaW5wdXRXaWR0aDogY3NzYFxuICAgIHdpZHRoOiAzNDBweDtcbiAgICBmbGV4LWdyb3c6IDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BdXRob3JpemUnO1xuaW1wb3J0IHsgQW1Sb3V0ZVJlY2VpdmVyLCBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2Ftcm91dGVzJztcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcblxuaW1wb3J0IHsgQW1Sb290Um91dGVGb3JtIH0gZnJvbSAnLi9BbVJvb3RSb3V0ZUZvcm0nO1xuaW1wb3J0IHsgQW1Sb290Um91dGVSZWFkIH0gZnJvbSAnLi9BbVJvb3RSb3V0ZVJlYWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtUm9vdFJvdXRlUHJvcHMge1xuICBpc0VkaXRNb2RlOiBib29sZWFuO1xuICBvbkVudGVyRWRpdE1vZGU6ICgpID0+IHZvaWQ7XG4gIG9uRXhpdEVkaXRNb2RlOiAoKSA9PiB2b2lkO1xuICBvblNhdmU6IChkYXRhOiBQYXJ0aWFsPEZvcm1BbVJvdXRlPikgPT4gdm9pZDtcbiAgcmVjZWl2ZXJzOiBBbVJvdXRlUmVjZWl2ZXJbXTtcbiAgcm91dGVzOiBGb3JtQW1Sb3V0ZTtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xuICByZWFkT25seT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBBbVJvb3RSb3V0ZTogRkM8QW1Sb290Um91dGVQcm9wcz4gPSAoe1xuICBpc0VkaXRNb2RlLFxuICBvblNhdmUsXG4gIG9uRW50ZXJFZGl0TW9kZSxcbiAgb25FeGl0RWRpdE1vZGUsXG4gIHJlY2VpdmVycyxcbiAgcm91dGVzLFxuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICByZWFkT25seSA9IGZhbHNlLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZGF0YS10ZXN0aWQ9XCJhbS1yb290LXJvdXRlLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUNvbnRhaW5lcn0+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgUm9vdCBwb2xpY3kgLSA8aT5kZWZhdWx0IGZvciBhbGwgYWxlcnRzPC9pPlxuICAgICAgICA8L2g1PlxuICAgICAgICB7IWlzRWRpdE1vZGUgJiYgIXJlYWRPbmx5ICYmIChcbiAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy51cGRhdGVdfT5cbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInBlblwiIG9uQ2xpY2s9e29uRW50ZXJFZGl0TW9kZX0gc2l6ZT1cInNtXCIgdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPlxuICAgICAgICBBbGwgYWxlcnRzIHdpbGwgZ28gdG8gdGhlIGRlZmF1bHQgY29udGFjdCBwb2ludCwgdW5sZXNzIHlvdSBzZXQgYWRkaXRpb25hbCBtYXRjaGVycyBpbiB0aGUgc3BlY2lmaWMgcm91dGluZ1xuICAgICAgICBhcmVhLlxuICAgICAgPC9wPlxuICAgICAge2lzRWRpdE1vZGUgPyAoXG4gICAgICAgIDxBbVJvb3RSb3V0ZUZvcm1cbiAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgIG9uQ2FuY2VsPXtvbkV4aXRFZGl0TW9kZX1cbiAgICAgICAgICBvblNhdmU9e29uU2F2ZX1cbiAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICByb3V0ZXM9e3JvdXRlc31cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBbVJvb3RSb3V0ZVJlYWQgcm91dGVzPXtyb3V0ZXN9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIHRpdGxlQ29udGFpbmVyOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5wcmltYXJ5fTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgZmxleDogMTAwJTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgQ29sbGFwc2UsIEZpZWxkLCBGb3JtLCBJbnB1dCwgSW5wdXRDb250cm9sLCBMaW5rLCBNdWx0aVNlbGVjdCwgU2VsZWN0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBBbVJvdXRlUmVjZWl2ZXIsIEZvcm1BbVJvdXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMvYW1yb3V0ZXMnO1xuaW1wb3J0IHtcbiAgbWFwTXVsdGlTZWxlY3RWYWx1ZVRvU3RyaW5ncyxcbiAgbWFwU2VsZWN0VmFsdWVUb1N0cmluZyxcbiAgb3B0aW9uYWxQb3NpdGl2ZUludGVnZXIsXG4gIHN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlLFxuICBzdHJpbmdzVG9TZWxlY3RhYmxlVmFsdWVzLFxufSBmcm9tICcuLi8uLi91dGlscy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyB0aW1lT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3RpbWUnO1xuXG5pbXBvcnQgeyBnZXRGb3JtU3R5bGVzIH0gZnJvbSAnLi9mb3JtU3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbVJvb3RSb3V0ZUZvcm1Qcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG4gIG9uU2F2ZTogKGRhdGE6IEZvcm1BbVJvdXRlKSA9PiB2b2lkO1xuICByZWNlaXZlcnM6IEFtUm91dGVSZWNlaXZlcltdO1xuICByb3V0ZXM6IEZvcm1BbVJvdXRlO1xufVxuXG5leHBvcnQgY29uc3QgQW1Sb290Um91dGVGb3JtOiBGQzxBbVJvb3RSb3V0ZUZvcm1Qcm9wcz4gPSAoe1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICBvbkNhbmNlbCxcbiAgb25TYXZlLFxuICByZWNlaXZlcnMsXG4gIHJvdXRlcyxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRGb3JtU3R5bGVzKTtcbiAgY29uc3QgW2lzVGltaW5nT3B0aW9uc0V4cGFuZGVkLCBzZXRJc1RpbWluZ09wdGlvbnNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtncm91cEJ5T3B0aW9ucywgc2V0R3JvdXBCeU9wdGlvbnNdID0gdXNlU3RhdGUoc3RyaW5nc1RvU2VsZWN0YWJsZVZhbHVlcyhyb3V0ZXMuZ3JvdXBCeSkpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17eyAuLi5yb3V0ZXMsIG92ZXJyaWRlVGltaW5nczogdHJ1ZSwgb3ZlcnJpZGVHcm91cGluZzogdHJ1ZSB9fSBvblN1Ym1pdD17b25TYXZlfT5cbiAgICAgIHsoeyBjb250cm9sLCBlcnJvcnMsIHNldFZhbHVlIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJEZWZhdWx0IGNvbnRhY3QgcG9pbnRcIiBpbnZhbGlkPXshIWVycm9ycy5yZWNlaXZlcn0gZXJyb3I9e2Vycm9ycy5yZWNlaXZlcj8ubWVzc2FnZX0+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZGF0YS10ZXN0aWQ9XCJhbS1yZWNlaXZlci1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlZmF1bHQgY29udGFjdCBwb2ludFwiXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtyZWNlaXZlcnN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWNlaXZlclwiXG4gICAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtUZXh0fVxuICAgICAgICAgICAgICAgICAgaHJlZj17bWFrZUFNTGluaygnL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvcmVjZWl2ZXJzL25ldycsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGNvbnRhY3QgcG9pbnRcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiR3JvdXAgYnlcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJHcm91cCBhbGVydHMgd2hlbiB5b3UgcmVjZWl2ZSBhIG5vdGlmaWNhdGlvbiBiYXNlZCBvbiBsYWJlbHMuXCJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYW0tZ3JvdXAtc2VsZWN0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogQHRzLWlnbm9yZS1jaGVjazogcmVhY3QtaG9vay1mb3JtIG1hZGUgbWUgZG8gdGhpcyAqL31cbiAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHcm91cCBieVwiXG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlT3B0aW9uPXsob3B0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0R3JvdXBCeU9wdGlvbnMoKG9wdHMpID0+IFsuLi5vcHRzLCBzdHJpbmdUb1NlbGVjdGFibGVWYWx1ZShvcHQpXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZS1jaGVjazogcmVhY3QtaG9vay1mb3JtIG1hZGUgbWUgZG8gdGhpc1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSgnZ3JvdXBCeScsIFsuLi5maWVsZC52YWx1ZSwgb3B0XSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UobWFwTXVsdGlTZWxlY3RWYWx1ZVRvU3RyaW5ncyh2YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Z3JvdXBCeU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgbmFtZT1cImdyb3VwQnlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxDb2xsYXBzZVxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxhcHNlfVxuICAgICAgICAgICAgaXNPcGVuPXtpc1RpbWluZ09wdGlvbnNFeHBhbmRlZH1cbiAgICAgICAgICAgIGxhYmVsPVwiVGltaW5nIG9wdGlvbnNcIlxuICAgICAgICAgICAgb25Ub2dnbGU9e3NldElzVGltaW5nT3B0aW9uc0V4cGFuZGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIkdyb3VwIHdhaXRcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSB3YWl0aW5nIHRpbWUgdW50aWwgdGhlIGluaXRpYWwgbm90aWZpY2F0aW9uIGlzIHNlbnQgZm9yIGEgbmV3IGdyb3VwIGNyZWF0ZWQgYnkgYW4gaW5jb21pbmcgYWxlcnQuIERlZmF1bHQgMzAgc2Vjb25kcy5cIlxuICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5ncm91cFdhaXRWYWx1ZX1cbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5ncm91cFdhaXRWYWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJhbS1ncm91cC13YWl0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRhaW5lciwgc3R5bGVzLnRpbWluZ0NvbnRhaW5lcil9PlxuICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlOiB7IGludmFsaWQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxJbnB1dH0gaW52YWxpZD17aW52YWxpZH0gcGxhY2Vob2xkZXI9eyczMCd9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cFdhaXRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IG9wdGlvbmFsUG9zaXRpdmVJbnRlZ2VyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIHdhaXQgdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwV2FpdFZhbHVlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJHcm91cCBpbnRlcnZhbFwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHdhaXRpbmcgdGltZSB0byBzZW5kIGEgYmF0Y2ggb2YgbmV3IGFsZXJ0cyBmb3IgdGhhdCBncm91cCBhZnRlciB0aGUgZmlyc3Qgbm90aWZpY2F0aW9uIHdhcyBzZW50LiBEZWZhdWx0IDUgbWludXRlcy5cIlxuICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5ncm91cEludGVydmFsVmFsdWV9XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ3JvdXBJbnRlcnZhbFZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImFtLWdyb3VwLWludGVydmFsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRhaW5lciwgc3R5bGVzLnRpbWluZ0NvbnRhaW5lcil9PlxuICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlOiB7IGludmFsaWQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxJbnB1dH0gaW52YWxpZD17aW52YWxpZH0gcGxhY2Vob2xkZXI9eyc1J30gLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwSW50ZXJ2YWxWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IG9wdGlvbmFsUG9zaXRpdmVJbnRlZ2VyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIGludGVydmFsIHR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cEludGVydmFsVmFsdWVUeXBlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBpbnRlcnZhbFwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHdhaXRpbmcgdGltZSB0byByZXNlbmQgYW4gYWxlcnQgYWZ0ZXIgdGhleSBoYXZlIHN1Y2Nlc3NmdWxseSBiZWVuIHNlbnQuIERlZmF1bHQgNCBob3Vycy5cIlxuICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5yZXBlYXRJbnRlcnZhbFZhbHVlfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnJlcGVhdEludGVydmFsVmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYW0tcmVwZWF0LWludGVydmFsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRhaW5lciwgc3R5bGVzLnRpbWluZ0NvbnRhaW5lcil9PlxuICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlOiB7IGludmFsaWQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxJbnB1dH0gaW52YWxpZD17aW52YWxpZH0gcGxhY2Vob2xkZXI9XCI0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlcGVhdEludGVydmFsVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBvcHRpb25hbFBvc2l0aXZlSW50ZWdlcixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51UGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlcGVhdCBpbnRlcnZhbCB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVwZWF0SW50ZXJ2YWxWYWx1ZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbH0gdHlwZT1cInJlc2V0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2Ftcm91dGVzJztcblxuaW1wb3J0IHsgZ2V0R3JpZFN0eWxlcyB9IGZyb20gJy4vZ3JpZFN0eWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1Sb290Um91dGVSZWFkUHJvcHMge1xuICByb3V0ZXM6IEZvcm1BbVJvdXRlO1xufVxuXG5leHBvcnQgY29uc3QgQW1Sb290Um91dGVSZWFkOiBGQzxBbVJvb3RSb3V0ZVJlYWRQcm9wcz4gPSAoeyByb3V0ZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldEdyaWRTdHlsZXMpO1xuXG4gIGNvbnN0IHJlY2VpdmVyID0gcm91dGVzLnJlY2VpdmVyIHx8ICctJztcbiAgY29uc3QgZ3JvdXBCeSA9IHJvdXRlcy5ncm91cEJ5LmpvaW4oJywgJykgfHwgJy0nO1xuICBjb25zdCBncm91cFdhaXQgPSByb3V0ZXMuZ3JvdXBXYWl0VmFsdWUgPyBgJHtyb3V0ZXMuZ3JvdXBXYWl0VmFsdWV9JHtyb3V0ZXMuZ3JvdXBXYWl0VmFsdWVUeXBlfWAgOiAnLSc7XG4gIGNvbnN0IGdyb3VwSW50ZXJ2YWwgPSByb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlXG4gICAgPyBgJHtyb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlfSR7cm91dGVzLmdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGV9YFxuICAgIDogJy0nO1xuICBjb25zdCByZXBlYXRJbnRlcnZhbCA9IHJvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlXG4gICAgPyBgJHtyb3V0ZXMucmVwZWF0SW50ZXJ2YWxWYWx1ZX0ke3JvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlVHlwZX1gXG4gICAgOiAnLSc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ2VsbH0+Q29udGFjdCBwb2ludDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUNlbGx9IGRhdGEtdGVzdGlkPVwiYW0tcm91dGVzLXJvb3QtcmVjZWl2ZXJcIj5cbiAgICAgICAge3JlY2VpdmVyfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ2VsbH0+R3JvdXAgYnk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVDZWxsfSBkYXRhLXRlc3RpZD1cImFtLXJvdXRlcy1yb290LWdyb3VwLWJ5XCI+XG4gICAgICAgIHtncm91cEJ5fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ2VsbH0+VGltaW5nczwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUNlbGx9IGRhdGEtdGVzdGlkPVwiYW0tcm91dGVzLXJvb3QtdGltaW5nc1wiPlxuICAgICAgICBHcm91cCB3YWl0OiB7Z3JvdXBXYWl0fSB8IEdyb3VwIGludGVydmFsOiB7Z3JvdXBJbnRlcnZhbH0gfCBSZXBlYXQgaW50ZXJ2YWw6IHtyZXBlYXRJbnRlcnZhbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGaWVsZCxcbiAgRmllbGRBcnJheSxcbiAgRm9ybSxcbiAgSG9yaXpvbnRhbEdyb3VwLFxuICBJY29uQnV0dG9uLFxuICBJbnB1dCxcbiAgSW5wdXRDb250cm9sLFxuICBNdWx0aVNlbGVjdCxcbiAgU2VsZWN0LFxuICBTd2l0Y2gsXG4gIHVzZVN0eWxlczIsXG4gIEJhZGdlLFxuICBWZXJ0aWNhbEdyb3VwLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IHVzZU11dGVUaW1pbmdPcHRpb25zIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTXV0ZVRpbWluZ09wdGlvbnMnO1xuaW1wb3J0IHsgQW1Sb3V0ZVJlY2VpdmVyLCBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2Ftcm91dGVzJztcbmltcG9ydCB7IG1hdGNoZXJGaWVsZE9wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHtcbiAgZW1wdHlBcnJheUZpZWxkTWF0Y2hlcixcbiAgbWFwTXVsdGlTZWxlY3RWYWx1ZVRvU3RyaW5ncyxcbiAgbWFwU2VsZWN0VmFsdWVUb1N0cmluZyxcbiAgb3B0aW9uYWxQb3NpdGl2ZUludGVnZXIsXG4gIHN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlLFxuICBzdHJpbmdzVG9TZWxlY3RhYmxlVmFsdWVzLFxufSBmcm9tICcuLi8uLi91dGlscy9hbXJvdXRlcyc7XG5pbXBvcnQgeyB0aW1lT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3RpbWUnO1xuXG5pbXBvcnQgeyBnZXRGb3JtU3R5bGVzIH0gZnJvbSAnLi9mb3JtU3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbVJvdXRlc0V4cGFuZGVkRm9ybVByb3BzIHtcbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG4gIG9uU2F2ZTogKGRhdGE6IEZvcm1BbVJvdXRlKSA9PiB2b2lkO1xuICByZWNlaXZlcnM6IEFtUm91dGVSZWNlaXZlcltdO1xuICByb3V0ZXM6IEZvcm1BbVJvdXRlO1xufVxuXG5leHBvcnQgY29uc3QgQW1Sb3V0ZXNFeHBhbmRlZEZvcm06IEZDPEFtUm91dGVzRXhwYW5kZWRGb3JtUHJvcHM+ID0gKHsgb25DYW5jZWwsIG9uU2F2ZSwgcmVjZWl2ZXJzLCByb3V0ZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGZvcm1TdHlsZXMgPSB1c2VTdHlsZXMyKGdldEZvcm1TdHlsZXMpO1xuICBjb25zdCBbZ3JvdXBCeU9wdGlvbnMsIHNldEdyb3VwQnlPcHRpb25zXSA9IHVzZVN0YXRlKHN0cmluZ3NUb1NlbGVjdGFibGVWYWx1ZXMocm91dGVzLmdyb3VwQnkpKTtcbiAgY29uc3QgbXV0ZVRpbWluZ09wdGlvbnMgPSB1c2VNdXRlVGltaW5nT3B0aW9ucygpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17cm91dGVzfSBvblN1Ym1pdD17b25TYXZlfT5cbiAgICAgIHsoeyBjb250cm9sLCByZWdpc3RlciwgZXJyb3JzLCBzZXRWYWx1ZSwgd2F0Y2ggfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiBAdHMtaWdub3JlLWNoZWNrOiByZWFjdC1ob29rLWZvcm0gbWFkZSBtZSBkbyB0aGlzICovfVxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgey4uLnJlZ2lzdGVyKCdpZCcpfSAvPlxuICAgICAgICAgIHsvKiBAdHMtaWdub3JlLWNoZWNrOiByZWFjdC1ob29rLWZvcm0gbWFkZSBtZSBkbyB0aGlzICovfVxuICAgICAgICAgIDxGaWVsZEFycmF5IG5hbWU9XCJvYmplY3RfbWF0Y2hlcnNcIiBjb250cm9sPXtjb250cm9sfT5cbiAgICAgICAgICAgIHsoeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0pID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8VmVydGljYWxHcm91cCBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIHNwYWNpbmc9XCJtZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5NYXRjaGluZyBsYWJlbHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtmaWVsZHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5vTWF0Y2hlcnNXYXJuaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIklmIG5vIG1hdGNoZXJzIGFyZSBzcGVjaWZpZWQsIHRoaXMgbm90aWZpY2F0aW9uIHBvbGljeSB3aWxsIGhhbmRsZSBhbGwgYWxlcnQgaW5zdGFuY2VzLlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge2ZpZWxkcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXRjaGVyc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxQYXRoID0gYG9iamVjdF9tYXRjaGVyc1ske2luZGV4fV1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cCBrZXk9e2ZpZWxkLmlkfSBhbGlnbj1cImZsZXgtc3RhcnRcIiBoZWlnaHQ9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm9iamVjdF9tYXRjaGVycz8uW2luZGV4XT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMub2JqZWN0X21hdGNoZXJzPy5baW5kZXhdPy5uYW1lPy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYCR7bG9jYWxQYXRofS5uYW1lYCwgeyByZXF1aXJlZDogJ0ZpZWxkIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9eydPcGVyYXRvcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hdGNoZXJzT3BlcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZT8udmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWF0Y2hlckZpZWxkT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC5vcGVyYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YCR7bG9jYWxQYXRofS5vcGVyYXRvcmAgYXMgY29uc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm9iamVjdF9tYXRjaGVycz8uW2luZGV4XT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm9iamVjdF9tYXRjaGVycz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHtsb2NhbFBhdGh9LnZhbHVlYCwgeyByZXF1aXJlZDogJ0ZpZWxkIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJSZW1vdmUgbWF0Y2hlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsndHJhc2gtYWx0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTWF0Y2hlckJ0bn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBlbmQoZW1wdHlBcnJheUZpZWxkTWF0Y2hlcil9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkIG1hdGNoZXJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmllbGRBcnJheT5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJDb250YWN0IHBvaW50XCI+XG4gICAgICAgICAgICB7LyogQHRzLWlnbm9yZS1jaGVjazogcmVhY3QtaG9vay1mb3JtIG1hZGUgbWUgZG8gdGhpcyAqL31cbiAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ29udGFjdCBwb2ludFwiXG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtyZWNlaXZlcnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgbmFtZT1cInJlY2VpdmVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJDb250aW51ZSBtYXRjaGluZyBzdWJzZXF1ZW50IHNpYmxpbmcgbm9kZXNcIj5cbiAgICAgICAgICAgIDxTd2l0Y2ggaWQ9XCJjb250aW51ZS10b2dnbGVcIiB7Li4ucmVnaXN0ZXIoJ2NvbnRpbnVlJyl9IC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJPdmVycmlkZSBncm91cGluZ1wiPlxuICAgICAgICAgICAgPFN3aXRjaCBpZD1cIm92ZXJyaWRlLWdyb3VwaW5nLXRvZ2dsZVwiIHsuLi5yZWdpc3Rlcignb3ZlcnJpZGVHcm91cGluZycpfSAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAge3dhdGNoKCkub3ZlcnJpZGVHcm91cGluZyAmJiAoXG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJHcm91cCBieVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR3JvdXAgYWxlcnRzIHdoZW4geW91IHJlY2VpdmUgYSBub3RpZmljYXRpb24gYmFzZWQgb24gbGFiZWxzLiBJZiBlbXB0eSBpdCB3aWxsIGJlIGluaGVyaXRlZCBmcm9tIHRoZSBwYXJlbnQgcG9saWN5LlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHcm91cCBieVwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlT3B0aW9uPXsob3B0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRHcm91cEJ5T3B0aW9ucygob3B0cykgPT4gWy4uLm9wdHMsIHN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlKG9wdCldKTtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUtY2hlY2s6IHJlYWN0LWhvb2stZm9ybSBtYWRlIG1lIGRvIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSgnZ3JvdXBCeScsIFsuLi5maWVsZC52YWx1ZSwgb3B0XSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcE11bHRpU2VsZWN0VmFsdWVUb1N0cmluZ3ModmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Z3JvdXBCeU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICBuYW1lPVwiZ3JvdXBCeVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEZpZWxkIGxhYmVsPVwiT3ZlcnJpZGUgZ2VuZXJhbCB0aW1pbmdzXCI+XG4gICAgICAgICAgICA8U3dpdGNoIGlkPVwib3ZlcnJpZGUtdGltaW5ncy10b2dnbGVcIiB7Li4ucmVnaXN0ZXIoJ292ZXJyaWRlVGltaW5ncycpfSAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAge3dhdGNoKCkub3ZlcnJpZGVUaW1pbmdzICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiR3JvdXAgd2FpdFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgd2FpdGluZyB0aW1lIHVudGlsIHRoZSBpbml0aWFsIG5vdGlmaWNhdGlvbiBpcyBzZW50IGZvciBhIG5ldyBncm91cCBjcmVhdGVkIGJ5IGFuIGluY29taW5nIGFsZXJ0LiBJZiBlbXB0eSBpdCB3aWxsIGJlIGluaGVyaXRlZCBmcm9tIHRoZSBwYXJlbnQgcG9saWN5LlwiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZ3JvdXBXYWl0VmFsdWV9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5ncm91cFdhaXRWYWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goZm9ybVN0eWxlcy5jb250YWluZXIsIGZvcm1TdHlsZXMudGltaW5nQ29udGFpbmVyKX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlOiB7IGludmFsaWQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuc21hbGxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIHdhaXQgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwV2FpdFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IG9wdGlvbmFsUG9zaXRpdmVJbnRlZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UobWFwU2VsZWN0VmFsdWVUb1N0cmluZyh2YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aW1lT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIHdhaXQgdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3JvdXBXYWl0VmFsdWVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkdyb3VwIGludGVydmFsXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSB3YWl0aW5nIHRpbWUgdG8gc2VuZCBhIGJhdGNoIG9mIG5ldyBhbGVydHMgZm9yIHRoYXQgZ3JvdXAgYWZ0ZXIgdGhlIGZpcnN0IG5vdGlmaWNhdGlvbiB3YXMgc2VudC4gSWYgZW1wdHkgaXQgd2lsbCBiZSBpbmhlcml0ZWQgZnJvbSB0aGUgcGFyZW50IHBvbGljeS5cIlxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmdyb3VwSW50ZXJ2YWxWYWx1ZX1cbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmdyb3VwSW50ZXJ2YWxWYWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goZm9ybVN0eWxlcy5jb250YWluZXIsIGZvcm1TdHlsZXMudGltaW5nQ29udGFpbmVyKX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlOiB7IGludmFsaWQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuc21hbGxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIGludGVydmFsIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cEludGVydmFsVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogb3B0aW9uYWxQb3NpdGl2ZUludGVnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmb3JtU3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR3JvdXAgaW50ZXJ2YWwgdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3JvdXBJbnRlcnZhbFZhbHVlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZXBlYXQgaW50ZXJ2YWxcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHdhaXRpbmcgdGltZSB0byByZXNlbmQgYW4gYWxlcnQgYWZ0ZXIgdGhleSBoYXZlIHN1Y2Nlc3NmdWxseSBiZWVuIHNlbnQuXCJcbiAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5yZXBlYXRJbnRlcnZhbFZhbHVlfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMucmVwZWF0SW50ZXJ2YWxWYWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goZm9ybVN0eWxlcy5jb250YWluZXIsIGZvcm1TdHlsZXMudGltaW5nQ29udGFpbmVyKX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlOiB7IGludmFsaWQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuc21hbGxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlcGVhdCBpbnRlcnZhbCB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVwZWF0SW50ZXJ2YWxWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBvcHRpb25hbFBvc2l0aXZlSW50ZWdlcixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVwZWF0IGludGVydmFsIHR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlcGVhdEludGVydmFsVmFsdWVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiTXV0ZSB0aW1pbmdzXCJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYW0tbXV0ZS10aW1pbmctc2VsZWN0XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWRkIG11dGUgdGltaW5nIHRvIHBvbGljeVwiXG4gICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5tdXRlVGltZUludGVydmFsc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTXV0ZSB0aW1pbmdzXCJcbiAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcE11bHRpU2VsZWN0VmFsdWVUb1N0cmluZ3ModmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e211dGVUaW1pbmdPcHRpb25zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIG5hbWU9XCJtdXRlVGltZUludGVydmFsc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIHBvbGljeTwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbH0gZmlsbD1cIm91dGxpbmVcIiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIGNvbnN0IGNvbW1vblNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nKDMuNSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRNYXRjaGVyQnRuOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke2NvbW1vblNwYWNpbmd9O1xuICAgIGAsXG4gICAgbWF0Y2hlcnNDb250YWluZXI6IGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDApfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxLCA0LjYsIDEsIDEuNSl9O1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGAsXG4gICAgbWF0Y2hlcnNPcGVyYXRvcjogY3NzYFxuICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICBgLFxuICAgIG5lc3RlZFBvbGljaWVzOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke2NvbW1vblNwYWNpbmd9O1xuICAgIGAsXG4gICAgcmVtb3ZlQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyLjUpfTtcbiAgICBgLFxuICAgIGJ1dHRvbkdyb3VwOiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg2KX0gMCAke2NvbW1vblNwYWNpbmd9O1xuXG4gICAgICAmID4gKiArICoge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEuNSl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgbm9NYXRjaGVyc1dhcm5pbmc6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxKX0gJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEFtUm91dGVSZWNlaXZlciwgRm9ybUFtUm91dGUgfSBmcm9tICcuLi8uLi90eXBlcy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5pbXBvcnQgeyBlbXB0eVJvdXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vQXV0aG9yaXplJztcblxuaW1wb3J0IHsgQW1Sb3V0ZXNUYWJsZSB9IGZyb20gJy4vQW1Sb3V0ZXNUYWJsZSc7XG5pbXBvcnQgeyBNdXRlVGltaW5nc1RhYmxlIH0gZnJvbSAnLi9NdXRlVGltaW5nc1RhYmxlJztcbmltcG9ydCB7IGdldEdyaWRTdHlsZXMgfSBmcm9tICcuL2dyaWRTdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtUm91dGVzRXhwYW5kZWRSZWFkUHJvcHMge1xuICBvbkNoYW5nZTogKHJvdXRlczogRm9ybUFtUm91dGUpID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGU7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQW1Sb3V0ZXNFeHBhbmRlZFJlYWQ6IEZDPEFtUm91dGVzRXhwYW5kZWRSZWFkUHJvcHM+ID0gKHtcbiAgb25DaGFuZ2UsXG4gIHJlY2VpdmVycyxcbiAgcm91dGVzLFxuICByZWFkT25seSA9IGZhbHNlLFxuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGdyaWRTdHlsZXMgPSB1c2VTdHlsZXMyKGdldEdyaWRTdHlsZXMpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICBjb25zdCBncm91cFdhaXQgPSByb3V0ZXMuZ3JvdXBXYWl0VmFsdWUgPyBgJHtyb3V0ZXMuZ3JvdXBXYWl0VmFsdWV9JHtyb3V0ZXMuZ3JvdXBXYWl0VmFsdWVUeXBlfWAgOiAnLSc7XG4gIGNvbnN0IGdyb3VwSW50ZXJ2YWwgPSByb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlXG4gICAgPyBgJHtyb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlfSR7cm91dGVzLmdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGV9YFxuICAgIDogJy0nO1xuICBjb25zdCByZXBlYXRJbnRlcnZhbCA9IHJvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlXG4gICAgPyBgJHtyb3V0ZXMucmVwZWF0SW50ZXJ2YWxWYWx1ZX0ke3JvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlVHlwZX1gXG4gICAgOiAnLSc7XG5cbiAgY29uc3QgW3N1YnJvdXRlcywgc2V0U3Vicm91dGVzXSA9IHVzZVN0YXRlKHJvdXRlcy5yb3V0ZXMpO1xuICBjb25zdCBbaXNBZGRNb2RlLCBzZXRJc0FkZE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkU3R5bGVzLnRpdGxlQ2VsbH0+R3JvdXAgd2FpdDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudmFsdWVDZWxsfT57Z3JvdXBXYWl0fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudGl0bGVDZWxsfT5Hcm91cCBpbnRlcnZhbDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudmFsdWVDZWxsfT57Z3JvdXBJbnRlcnZhbH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkU3R5bGVzLnRpdGxlQ2VsbH0+UmVwZWF0IGludGVydmFsPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy52YWx1ZUNlbGx9PntyZXBlYXRJbnRlcnZhbH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkU3R5bGVzLnRpdGxlQ2VsbH0+TmVzdGVkIHBvbGljaWVzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy52YWx1ZUNlbGx9PlxuICAgICAgICB7ISFzdWJyb3V0ZXMubGVuZ3RoID8gKFxuICAgICAgICAgIDxBbVJvdXRlc1RhYmxlXG4gICAgICAgICAgICBpc0FkZE1vZGU9e2lzQWRkTW9kZX1cbiAgICAgICAgICAgIG9uQ2FuY2VsQWRkPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzQWRkTW9kZShmYWxzZSk7XG4gICAgICAgICAgICAgIHNldFN1YnJvdXRlcygoc3Vicm91dGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3Vicm91dGVzID0gWy4uLnN1YnJvdXRlc107XG4gICAgICAgICAgICAgICAgbmV3U3Vicm91dGVzLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N1YnJvdXRlcztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdSb3V0ZXMpID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnJvdXRlcyxcbiAgICAgICAgICAgICAgICByb3V0ZXM6IG5ld1JvdXRlcyxcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKGlzQWRkTW9kZSkge1xuICAgICAgICAgICAgICAgIHNldElzQWRkTW9kZShmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgIHJvdXRlcz17c3Vicm91dGVzfVxuICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPk5vIG5lc3RlZCBwb2xpY2llcyBjb25maWd1cmVkLjwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpc0FkZE1vZGUgJiYgIXJlYWRPbmx5ICYmIChcbiAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy5jcmVhdGVdfT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTmVzdGVkUm91dGluZ0J0bn1cbiAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U3Vicm91dGVzKChzdWJyb3V0ZXMpID0+IFsuLi5zdWJyb3V0ZXMsIGVtcHR5Um91dGVdKTtcbiAgICAgICAgICAgICAgICBzZXRJc0FkZE1vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkIG5lc3RlZCBwb2xpY3lcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy50aXRsZUNlbGx9Pk11dGUgdGltaW5nczwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudmFsdWVDZWxsfT5cbiAgICAgICAgPE11dGVUaW1pbmdzVGFibGVcbiAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lIX1cbiAgICAgICAgICBtdXRlVGltaW5nTmFtZXM9e3JvdXRlcy5tdXRlVGltZUludGVydmFsc31cbiAgICAgICAgICBoaWRlQWN0aW9uc1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGROZXN0ZWRSb3V0aW5nQnRuOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgaW50ZXJzZWN0aW9uV2l0aCwgaXNFcXVhbCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24sIENvbmZpcm1Nb2RhbCwgSG9yaXpvbnRhbEdyb3VwLCBJY29uQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuaW1wb3J0IHsgQW1Sb3V0ZVJlY2VpdmVyLCBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2Ftcm91dGVzJztcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcbmltcG9ydCB7IG1hdGNoZXJGaWVsZFRvTWF0Y2hlciwgcGFyc2VNYXRjaGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBwcmVwYXJlSXRlbXMgfSBmcm9tICcuLi8uLi91dGlscy9keW5hbWljVGFibGUnO1xuaW1wb3J0IHsgRHluYW1pY1RhYmxlLCBEeW5hbWljVGFibGVDb2x1bW5Qcm9wcywgRHluYW1pY1RhYmxlSXRlbVByb3BzIH0gZnJvbSAnLi4vRHluYW1pY1RhYmxlJztcbmltcG9ydCB7IEVtcHR5QXJlYSB9IGZyb20gJy4uL0VtcHR5QXJlYSc7XG5pbXBvcnQgeyBNYXRjaGVycyB9IGZyb20gJy4uL3NpbGVuY2VzL01hdGNoZXJzJztcblxuaW1wb3J0IHsgQW1Sb3V0ZXNFeHBhbmRlZEZvcm0gfSBmcm9tICcuL0FtUm91dGVzRXhwYW5kZWRGb3JtJztcbmltcG9ydCB7IEFtUm91dGVzRXhwYW5kZWRSZWFkIH0gZnJvbSAnLi9BbVJvdXRlc0V4cGFuZGVkUmVhZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1Sb3V0ZXNUYWJsZVByb3BzIHtcbiAgaXNBZGRNb2RlOiBib29sZWFuO1xuICBvbkNoYW5nZTogKHJvdXRlczogRm9ybUFtUm91dGVbXSkgPT4gdm9pZDtcbiAgb25DYW5jZWxBZGQ6ICgpID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGVbXTtcbiAgZmlsdGVycz86IHsgcXVlcnlTdHJpbmc/OiBzdHJpbmc7IGNvbnRhY3RQb2ludD86IHN0cmluZyB9O1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxudHlwZSBSb3V0ZVRhYmxlQ29sdW1uUHJvcHMgPSBEeW5hbWljVGFibGVDb2x1bW5Qcm9wczxGb3JtQW1Sb3V0ZT47XG50eXBlIFJvdXRlVGFibGVJdGVtUHJvcHMgPSBEeW5hbWljVGFibGVJdGVtUHJvcHM8Rm9ybUFtUm91dGU+O1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyZWRSb3V0ZXMgPSAocm91dGVzOiBGb3JtQW1Sb3V0ZVtdLCBsYWJlbE1hdGNoZXJRdWVyeT86IHN0cmluZywgY29udGFjdFBvaW50UXVlcnk/OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hlcnMgPSBwYXJzZU1hdGNoZXJzKGxhYmVsTWF0Y2hlclF1ZXJ5ID8/ICcnKTtcblxuICBsZXQgZmlsdGVyZWRSb3V0ZXMgPSByb3V0ZXM7XG5cbiAgaWYgKG1hdGNoZXJzLmxlbmd0aCkge1xuICAgIGZpbHRlcmVkUm91dGVzID0gcm91dGVzLmZpbHRlcigocm91dGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2hlcnMgPSByb3V0ZS5vYmplY3RfbWF0Y2hlcnMubWFwKG1hdGNoZXJGaWVsZFRvTWF0Y2hlcik7XG4gICAgICByZXR1cm4gaW50ZXJzZWN0aW9uV2l0aChyb3V0ZU1hdGNoZXJzLCBtYXRjaGVycywgaXNFcXVhbCkubGVuZ3RoID4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjb250YWN0UG9pbnRRdWVyeSAmJiBjb250YWN0UG9pbnRRdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgZmlsdGVyZWRSb3V0ZXMgPSBmaWx0ZXJlZFJvdXRlcy5maWx0ZXIoKHJvdXRlKSA9PlxuICAgICAgcm91dGUucmVjZWl2ZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjb250YWN0UG9pbnRRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRSb3V0ZXM7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlZFJvdXRlID0gKHJvdXRlczogRm9ybUFtUm91dGVbXSwgdXBkYXRlZFJvdXRlOiBGb3JtQW1Sb3V0ZSk6IEZvcm1BbVJvdXRlW10gPT4ge1xuICBjb25zdCBuZXdSb3V0ZXMgPSBbLi4ucm91dGVzXTtcbiAgY29uc3QgZWRpdEluZGV4ID0gbmV3Um91dGVzLmZpbmRJbmRleCgocm91dGUpID0+IHJvdXRlLmlkID09PSB1cGRhdGVkUm91dGUuaWQpO1xuXG4gIGlmIChlZGl0SW5kZXggPj0gMCkge1xuICAgIG5ld1JvdXRlc1tlZGl0SW5kZXhdID0ge1xuICAgICAgLi4ubmV3Um91dGVzW2VkaXRJbmRleF0sXG4gICAgICAuLi51cGRhdGVkUm91dGUsXG4gICAgfTtcbiAgfVxuICByZXR1cm4gbmV3Um91dGVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJvdXRlID0gKHJvdXRlczogRm9ybUFtUm91dGVbXSwgcm91dGVJZDogc3RyaW5nKTogRm9ybUFtUm91dGVbXSA9PiB7XG4gIHJldHVybiByb3V0ZXMuZmlsdGVyKChyb3V0ZSkgPT4gcm91dGUuaWQgIT09IHJvdXRlSWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IEFtUm91dGVzVGFibGU6IEZDPEFtUm91dGVzVGFibGVQcm9wcz4gPSAoe1xuICBpc0FkZE1vZGUsXG4gIG9uQ2FuY2VsQWRkLFxuICBvbkNoYW5nZSxcbiAgcmVjZWl2ZXJzLFxuICByb3V0ZXMsXG4gIGZpbHRlcnMsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG59KSA9PiB7XG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGVsZXRpbmdSb3V0ZUlkLCBzZXREZWxldGluZ1JvdXRlSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbZXhwYW5kZWRJZCwgc2V0RXhwYW5kZWRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudW1iZXI+KCk7XG4gIGNvbnN0IHBlcm1pc3Npb25zID0gZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuICBjb25zdCBjYW5FZGl0Um91dGVzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zLnVwZGF0ZSk7XG4gIGNvbnN0IGNhbkRlbGV0ZVJvdXRlcyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihwZXJtaXNzaW9ucy5kZWxldGUpO1xuXG4gIGNvbnN0IHNob3dBY3Rpb25zID0gIXJlYWRPbmx5ICYmIChjYW5FZGl0Um91dGVzIHx8IGNhbkRlbGV0ZVJvdXRlcyk7XG5cbiAgY29uc3QgZXhwYW5kSXRlbSA9IHVzZUNhbGxiYWNrKChpdGVtOiBSb3V0ZVRhYmxlSXRlbVByb3BzKSA9PiBzZXRFeHBhbmRlZElkKGl0ZW0uaWQpLCBbXSk7XG4gIGNvbnN0IGNvbGxhcHNlSXRlbSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEV4cGFuZGVkSWQodW5kZWZpbmVkKSwgW10pO1xuXG4gIGNvbnN0IGNvbHM6IFJvdXRlVGFibGVDb2x1bW5Qcm9wc1tdID0gW1xuICAgIHtcbiAgICAgIGlkOiAnbWF0Y2hpbmdDcml0ZXJpYScsXG4gICAgICBsYWJlbDogJ01hdGNoaW5nIGxhYmVscycsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICByZW5kZXJDZWxsOiAoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5kYXRhLm9iamVjdF9tYXRjaGVycy5sZW5ndGggPyAoXG4gICAgICAgICAgPE1hdGNoZXJzIG1hdGNoZXJzPXtpdGVtLmRhdGEub2JqZWN0X21hdGNoZXJzLm1hcChtYXRjaGVyRmllbGRUb01hdGNoZXIpfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxzcGFuPk1hdGNoZXMgYWxsIGFsZXJ0IGluc3RhbmNlczwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBzaXplOiAxMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZ3JvdXBCeScsXG4gICAgICBsYWJlbDogJ0dyb3VwIGJ5JyxcbiAgICAgIHJlbmRlckNlbGw6IChpdGVtKSA9PiAoaXRlbS5kYXRhLm92ZXJyaWRlR3JvdXBpbmcgJiYgaXRlbS5kYXRhLmdyb3VwQnkuam9pbignLCAnKSkgfHwgJy0nLFxuICAgICAgc2l6ZTogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmVjZWl2ZXJDaGFubmVsJyxcbiAgICAgIGxhYmVsOiAnQ29udGFjdCBwb2ludCcsXG4gICAgICByZW5kZXJDZWxsOiAoaXRlbSkgPT4gaXRlbS5kYXRhLnJlY2VpdmVyIHx8ICctJyxcbiAgICAgIHNpemU6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ211dGVUaW1pbmdzJyxcbiAgICAgIGxhYmVsOiAnTXV0ZSB0aW1pbmdzJyxcbiAgICAgIHJlbmRlckNlbGw6IChpdGVtKSA9PiBpdGVtLmRhdGEubXV0ZVRpbWVJbnRlcnZhbHMuam9pbignLCAnKSB8fCAnLScsXG4gICAgICBzaXplOiA1LFxuICAgIH0sXG4gICAgLi4uKCFzaG93QWN0aW9uc1xuICAgICAgPyBbXVxuICAgICAgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdhY3Rpb25zJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQWN0aW9ucycsXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgICAgICByZW5kZXJDZWxsOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5yZW5kZXJFeHBhbmRlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGV4cGFuZFdpdGhDdXN0b21Db250ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGFuZEl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgc2V0RWRpdE1vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFZGl0IHJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtleHBhbmRXaXRoQ3VzdG9tQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIHJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGluZ1JvdXRlSWQoaXRlbS5kYXRhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2l6ZTogJzEwMHB4JyxcbiAgICAgICAgICB9IGFzIFJvdXRlVGFibGVDb2x1bW5Qcm9wcyxcbiAgICAgICAgXSksXG4gIF07XG5cbiAgY29uc3QgZmlsdGVyZWRSb3V0ZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IGdldEZpbHRlcmVkUm91dGVzKHJvdXRlcywgZmlsdGVycz8ucXVlcnlTdHJpbmcsIGZpbHRlcnM/LmNvbnRhY3RQb2ludCksXG4gICAgW3JvdXRlcywgZmlsdGVyc11cbiAgKTtcblxuICBjb25zdCBkeW5hbWljVGFibGVSb3V0ZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IHByZXBhcmVJdGVtcyhpc0FkZE1vZGUgPyByb3V0ZXMgOiBmaWx0ZXJlZFJvdXRlcyksXG4gICAgW2lzQWRkTW9kZSwgcm91dGVzLCBmaWx0ZXJlZFJvdXRlc11cbiAgKTtcblxuICAvLyBleHBhbmQgdGhlIGxhc3QgaXRlbSB3aGVuIGFkZGluZyBvciByZXNldCB3aGVuIHRoZSBsZW5ndGggY2hhbmdlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0FkZE1vZGUgJiYgZHluYW1pY1RhYmxlUm91dGVzLmxlbmd0aCkge1xuICAgICAgc2V0RXhwYW5kZWRJZChkeW5hbWljVGFibGVSb3V0ZXNbZHluYW1pY1RhYmxlUm91dGVzLmxlbmd0aCAtIDFdLmlkKTtcbiAgICB9XG4gICAgaWYgKCFpc0FkZE1vZGUgJiYgZHluYW1pY1RhYmxlUm91dGVzLmxlbmd0aCkge1xuICAgICAgc2V0RXhwYW5kZWRJZCh1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwgW2lzQWRkTW9kZSwgZHluYW1pY1RhYmxlUm91dGVzXSk7XG5cbiAgaWYgKHJvdXRlcy5sZW5ndGggPiAwICYmIGZpbHRlcmVkUm91dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RW1wdHlBcmVhPlxuICAgICAgICA8cD5ObyBwb2xpY2llcyBmb3VuZDwvcD5cbiAgICAgIDwvRW1wdHlBcmVhPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RHluYW1pY1RhYmxlXG4gICAgICAgIGNvbHM9e2NvbHN9XG4gICAgICAgIGlzRXhwYW5kYWJsZT17dHJ1ZX1cbiAgICAgICAgaXRlbXM9e2R5bmFtaWNUYWJsZVJvdXRlc31cbiAgICAgICAgdGVzdElkR2VuZXJhdG9yPXsoKSA9PiAnYW0tcm91dGVzLXJvdyd9XG4gICAgICAgIG9uQ29sbGFwc2U9e2NvbGxhcHNlSXRlbX1cbiAgICAgICAgb25FeHBhbmQ9e2V4cGFuZEl0ZW19XG4gICAgICAgIGlzRXhwYW5kZWQ9eyhpdGVtKSA9PiBleHBhbmRlZElkID09PSBpdGVtLmlkfVxuICAgICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnQ9eyhpdGVtOiBSb3V0ZVRhYmxlSXRlbVByb3BzKSA9PlxuICAgICAgICAgIGlzQWRkTW9kZSB8fCBlZGl0TW9kZSA/IChcbiAgICAgICAgICAgIDxBbVJvdXRlc0V4cGFuZGVkRm9ybVxuICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc0FkZE1vZGUpIHtcbiAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsQWRkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25TYXZlPXsoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JvdXRlcyA9IHVwZGF0ZWRSb3V0ZShyb3V0ZXMsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld1JvdXRlcyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHJlY2VpdmVycz17cmVjZWl2ZXJzfVxuICAgICAgICAgICAgICByb3V0ZXM9e2l0ZW0uZGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBbVJvdXRlc0V4cGFuZGVkUmVhZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3V0ZXMgPSB1cGRhdGVkUm91dGUocm91dGVzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShuZXdSb3V0ZXMpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgICAgcm91dGVzPXtpdGVtLmRhdGF9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICBpc09wZW49eyEhZGVsZXRpbmdSb3V0ZUlkfVxuICAgICAgICB0aXRsZT1cIkRlbGV0ZSBub3RpZmljYXRpb24gcG9saWN5XCJcbiAgICAgICAgYm9keT1cIkRlbGV0aW5nIHRoaXMgbm90aWZpY2F0aW9uIHBvbGljeSB3aWxsIHBlcm1hbmVudGx5IHJlbW92ZSBpdC4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHBvbGljeT9cIlxuICAgICAgICBjb25maXJtVGV4dD1cIlllcywgZGVsZXRlXCJcbiAgICAgICAgaWNvbj1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJcbiAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKGRlbGV0aW5nUm91dGVJZCkge1xuICAgICAgICAgICAgY29uc3QgbmV3Um91dGVzID0gZGVsZXRlUm91dGUocm91dGVzLCBkZWxldGluZ1JvdXRlSWQpO1xuICAgICAgICAgICAgb25DaGFuZ2UobmV3Um91dGVzKTtcbiAgICAgICAgICAgIHNldERlbGV0aW5nUm91dGVJZCh1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXREZWxldGluZ1JvdXRlSWQodW5kZWZpbmVkKX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgSW5wdXQsIExhYmVsLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BdXRob3JpemUnO1xuaW1wb3J0IHsgdXNlVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVVJMU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IEFtUm91dGVSZWNlaXZlciwgRm9ybUFtUm91dGUgfSBmcm9tICcuLi8uLi90eXBlcy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5pbXBvcnQgeyBlbXB0eUFycmF5RmllbGRNYXRjaGVyLCBlbXB0eVJvdXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgZ2V0Tm90aWZpY2F0aW9uUG9saWNpZXNGaWx0ZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBFbXB0eUFyZWEgfSBmcm9tICcuLi9FbXB0eUFyZWEnO1xuaW1wb3J0IHsgRW1wdHlBcmVhV2l0aENUQSB9IGZyb20gJy4uL0VtcHR5QXJlYVdpdGhDVEEnO1xuaW1wb3J0IHsgTWF0Y2hlckZpbHRlciB9IGZyb20gJy4uL2FsZXJ0LWdyb3Vwcy9NYXRjaGVyRmlsdGVyJztcblxuaW1wb3J0IHsgQW1Sb3V0ZXNUYWJsZSB9IGZyb20gJy4vQW1Sb3V0ZXNUYWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1TcGVjaWZpY1JvdXRpbmdQcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgb25DaGFuZ2U6IChyb3V0ZXM6IEZvcm1BbVJvdXRlKSA9PiB2b2lkO1xuICBvblJvb3RSb3V0ZUVkaXQ6ICgpID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGU7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEZpbHRlcnMge1xuICBxdWVyeVN0cmluZz86IHN0cmluZztcbiAgY29udGFjdFBvaW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQW1TcGVjaWZpY1JvdXRpbmc6IEZDPEFtU3BlY2lmaWNSb3V0aW5nUHJvcHM+ID0gKHtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbiAgb25DaGFuZ2UsXG4gIG9uUm9vdFJvdXRlRWRpdCxcbiAgcmVjZWl2ZXJzLFxuICByb3V0ZXMsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IFthY3R1YWxSb3V0ZXMsIHNldEFjdHVhbFJvdXRlc10gPSB1c2VTdGF0ZShbLi4ucm91dGVzLnJvdXRlc10pO1xuICBjb25zdCBbaXNBZGRNb2RlLCBzZXRJc0FkZE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3QgY2FuQ3JlYXRlTm90aWZpY2F0aW9ucyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihwZXJtaXNzaW9ucy5jcmVhdGUpO1xuXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VVUkxTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgeyBxdWVyeVN0cmluZywgY29udGFjdFBvaW50IH0gPSBnZXROb3RpZmljYXRpb25Qb2xpY2llc0ZpbHRlcnMoc2VhcmNoUGFyYW1zKTtcblxuICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZTxGaWx0ZXJzPih7IHF1ZXJ5U3RyaW5nLCBjb250YWN0UG9pbnQgfSk7XG5cbiAgdXNlRGVib3VuY2UoXG4gICAgKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUGFyYW1zKHsgcXVlcnlTdHJpbmc6IGZpbHRlcnMucXVlcnlTdHJpbmcsIGNvbnRhY3RQb2ludDogZmlsdGVycy5jb250YWN0UG9pbnQgfSk7XG4gICAgfSxcbiAgICA0MDAsXG4gICAgW2ZpbHRlcnNdXG4gICk7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGNsZWFyRmlsdGVycyA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJzKHsgcXVlcnlTdHJpbmc6IHVuZGVmaW5lZCwgY29udGFjdFBvaW50OiB1bmRlZmluZWQgfSk7XG4gICAgc2V0U2VhcmNoUGFyYW1zKHsgcXVlcnlTdHJpbmc6IHVuZGVmaW5lZCwgY29udGFjdFBvaW50OiB1bmRlZmluZWQgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTmV3Um91dGUgPSAoKSA9PiB7XG4gICAgY2xlYXJGaWx0ZXJzKCk7XG4gICAgc2V0SXNBZGRNb2RlKHRydWUpO1xuICAgIHNldEFjdHVhbFJvdXRlcygoKSA9PiBbXG4gICAgICAuLi5yb3V0ZXMucm91dGVzLFxuICAgICAge1xuICAgICAgICAuLi5lbXB0eVJvdXRlLFxuICAgICAgICBtYXRjaGVyczogW2VtcHR5QXJyYXlGaWVsZE1hdGNoZXJdLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBvbkNhbmNlbEFkZCA9ICgpID0+IHtcbiAgICBzZXRJc0FkZE1vZGUoZmFsc2UpO1xuICAgIHNldEFjdHVhbFJvdXRlcyhbLi4ucm91dGVzLnJvdXRlc10pO1xuICB9O1xuXG4gIGNvbnN0IG9uVGFibGVSb3V0ZUNoYW5nZSA9IChuZXdSb3V0ZXM6IEZvcm1BbVJvdXRlW10pOiB2b2lkID0+IHtcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5yb3V0ZXMsXG4gICAgICByb3V0ZXM6IG5ld1JvdXRlcyxcbiAgICB9KTtcblxuICAgIGlmIChpc0FkZE1vZGUpIHtcbiAgICAgIHNldElzQWRkTW9kZShmYWxzZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoNT5TcGVjaWZpYyByb3V0aW5nPC9oNT5cbiAgICAgIDxwPlNlbmQgc3BlY2lmaWMgYWxlcnRzIHRvIGNob3NlbiBjb250YWN0IHBvaW50cywgYmFzZWQgb24gbWF0Y2hpbmcgY3JpdGVyaWE8L3A+XG4gICAgICB7IXJvdXRlcy5yZWNlaXZlciA/IChcbiAgICAgICAgcmVhZE9ubHkgPyAoXG4gICAgICAgICAgPEVtcHR5QXJlYT5cbiAgICAgICAgICAgIDxwPlRoZXJlIGlzIG5vIGRlZmF1bHQgY29udGFjdCBwb2ludCBjb25maWd1cmVkIGZvciB0aGUgcm9vdCByb3V0ZS48L3A+XG4gICAgICAgICAgPC9FbXB0eUFyZWE+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEVtcHR5QXJlYVdpdGhDVEFcbiAgICAgICAgICAgIGJ1dHRvbkljb249XCJyb2NrZXRcIlxuICAgICAgICAgICAgYnV0dG9uTGFiZWw9XCJTZXQgYSBkZWZhdWx0IGNvbnRhY3QgcG9pbnRcIlxuICAgICAgICAgICAgb25CdXR0b25DbGljaz17b25Sb290Um91dGVFZGl0fVxuICAgICAgICAgICAgdGV4dD1cIllvdSBoYXZlbid0IHNldCBhIGRlZmF1bHQgY29udGFjdCBwb2ludCBmb3IgdGhlIHJvb3Qgcm91dGUgeWV0LlwiXG4gICAgICAgICAgICBzaG93QnV0dG9uPXtjYW5DcmVhdGVOb3RpZmljYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgICkgOiBhY3R1YWxSb3V0ZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyFpc0FkZE1vZGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPE1hdGNoZXJGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXsoZmlsdGVyKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXJzKChjdXJyZW50RmlsdGVycykgPT4gKHsgLi4uY3VycmVudEZpbHRlcnMsIHF1ZXJ5U3RyaW5nOiBmaWx0ZXIgfSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZz17ZmlsdGVycy5xdWVyeVN0cmluZyA/PyAnJ31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklucHV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJJbnB1dH0+XG4gICAgICAgICAgICAgICAgICA8TGFiZWw+U2VhcmNoIGJ5IGNvbnRhY3QgcG9pbnQ8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0IH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVycygoY3VycmVudEZpbHRlcnMpID0+ICh7IC4uLmN1cnJlbnRGaWx0ZXJzLCBjb250YWN0UG9pbnQ6IGN1cnJlbnRUYXJnZXQudmFsdWUgfSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlcnMuY29udGFjdFBvaW50ID8/ICcnfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBjb250YWN0IHBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzZWFyY2gtcXVlcnktaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg9ezxJY29uIG5hbWU9eydzZWFyY2gnfSAvPn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyhxdWVyeVN0cmluZyB8fCBjb250YWN0UG9pbnQpICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGljb249XCJ0aW1lc1wiIG9uQ2xpY2s9e2NsZWFyRmlsdGVyc30gY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJGaWx0ZXJCdG59PlxuICAgICAgICAgICAgICAgICAgICBDbGVhciBmaWx0ZXJzXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshaXNBZGRNb2RlICYmICFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLmNyZWF0ZV19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTWF0Y2hlckJ0blJvd30+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZE1hdGNoZXJCdG59IGljb249XCJwbHVzXCIgb25DbGljaz17YWRkTmV3Um91dGV9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgTmV3IHBvbGljeVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QW1Sb3V0ZXNUYWJsZVxuICAgICAgICAgICAgaXNBZGRNb2RlPXtpc0FkZE1vZGV9XG4gICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICBvbkNhbmNlbEFkZD17b25DYW5jZWxBZGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25UYWJsZVJvdXRlQ2hhbmdlfVxuICAgICAgICAgICAgcmVjZWl2ZXJzPXtyZWNlaXZlcnN9XG4gICAgICAgICAgICByb3V0ZXM9e2FjdHVhbFJvdXRlc31cbiAgICAgICAgICAgIGZpbHRlcnM9e3sgcXVlcnlTdHJpbmcsIGNvbnRhY3RQb2ludCB9fVxuICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiByZWFkT25seSA/IChcbiAgICAgICAgPEVtcHR5QXJlYT5cbiAgICAgICAgICA8cD5UaGVyZSBhcmUgbm8gc3BlY2lmaWMgcG9saWNpZXMgY29uZmlndXJlZC48L3A+XG4gICAgICAgIDwvRW1wdHlBcmVhPlxuICAgICAgKSA6IChcbiAgICAgICAgPEVtcHR5QXJlYVdpdGhDVEFcbiAgICAgICAgICBidXR0b25JY29uPVwicGx1c1wiXG4gICAgICAgICAgYnV0dG9uTGFiZWw9XCJOZXcgc3BlY2lmaWMgcG9saWN5XCJcbiAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXthZGROZXdSb3V0ZX1cbiAgICAgICAgICB0ZXh0PVwiWW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgc3BlY2lmaWMgcG9saWNpZXMgeWV0LlwiXG4gICAgICAgICAgc2hvd0J1dHRvbj17Y2FuQ3JlYXRlTm90aWZpY2F0aW9uc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIGAsXG4gICAgc2VhcmNoQ29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLnN0cm9uZ307XG4gICAgYCxcbiAgICBjbGVhckZpbHRlckJ0bjogY3NzYFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGZpbHRlcklucHV0OiBjc3NgXG4gICAgICB3aWR0aDogMzQwcHg7XG4gICAgICAmICsgJiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgYWRkTWF0Y2hlckJ0blJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX0gMDtcbiAgICBgLFxuICAgIGFkZE1hdGNoZXJCdG46IGNzc2BcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbiwgTGluaywgdXNlU3R5bGVzMiwgQ29uZmlybU1vZGFsIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZywgTXV0ZVRpbWVJbnRlcnZhbCwgVGltZUludGVydmFsIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBBdXRob3JpemUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0F1dGhvcml6ZSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGRlbGV0ZU11dGVUaW1pbmdBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcbmltcG9ydCB7XG4gIGdldFRpbWVTdHJpbmcsXG4gIGdldFdlZWtkYXlTdHJpbmcsXG4gIGdldERheXNPZk1vbnRoU3RyaW5nLFxuICBnZXRNb250aHNTdHJpbmcsXG4gIGdldFllYXJzU3RyaW5nLFxufSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgQXN5bmNSZXF1ZXN0U3RhdGUsIGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3JlZHV4JztcbmltcG9ydCB7IER5bmFtaWNUYWJsZSwgRHluYW1pY1RhYmxlSXRlbVByb3BzLCBEeW5hbWljVGFibGVDb2x1bW5Qcm9wcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZSc7XG5pbXBvcnQgeyBFbXB0eUFyZWFXaXRoQ1RBIH0gZnJvbSAnLi4vRW1wdHlBcmVhV2l0aENUQSc7XG5pbXBvcnQgeyBQcm92aXNpb25pbmdCYWRnZSB9IGZyb20gJy4uL1Byb3Zpc2lvbmluZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgbXV0ZVRpbWluZ05hbWVzPzogc3RyaW5nW107XG4gIGhpZGVBY3Rpb25zPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE11dGVUaW1pbmdzVGFibGU6IEZDPFByb3BzPiA9ICh7IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIG11dGVUaW1pbmdOYW1lcywgaGlkZUFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gIGNvbnN0IGFtQ29uZmlncyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1Db25maWdzKTtcbiAgY29uc3QgW211dGVUaW1pbmdOYW1lLCBzZXRNdXRlVGltaW5nTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgeyByZXN1bHQgfTogQXN5bmNSZXF1ZXN0U3RhdGU8QWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnPiA9XG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgYW1Db25maWdzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgaXRlbXMgPSB1c2VNZW1vKCgpOiBBcnJheTxEeW5hbWljVGFibGVJdGVtUHJvcHM8TXV0ZVRpbWVJbnRlcnZhbD4+ID0+IHtcbiAgICBjb25zdCBtdXRlVGltaW5ncyA9IHJlc3VsdD8uYWxlcnRtYW5hZ2VyX2NvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscyA/PyBbXTtcbiAgICBjb25zdCBtdXRlVGltaW5nc1Byb3ZlbmFuY2VzID0gcmVzdWx0Py5hbGVydG1hbmFnZXJfY29uZmlnPy5tdXRlVGltZVByb3ZlbmFuY2VzID8/IHt9O1xuXG4gICAgcmV0dXJuIG11dGVUaW1pbmdzXG4gICAgICAuZmlsdGVyKCh7IG5hbWUgfSkgPT4gKG11dGVUaW1pbmdOYW1lcyA/IG11dGVUaW1pbmdOYW1lcy5pbmNsdWRlcyhuYW1lKSA6IHRydWUpKVxuICAgICAgLm1hcCgobXV0ZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBtdXRlLm5hbWUsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgLi4ubXV0ZSxcbiAgICAgICAgICAgIHByb3ZlbmFuY2U6IG11dGVUaW1pbmdzUHJvdmVuYW5jZXNbbXV0ZS5uYW1lXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gIH0sIFtcbiAgICByZXN1bHQ/LmFsZXJ0bWFuYWdlcl9jb25maWc/Lm11dGVfdGltZV9pbnRlcnZhbHMsXG4gICAgcmVzdWx0Py5hbGVydG1hbmFnZXJfY29uZmlnPy5tdXRlVGltZVByb3ZlbmFuY2VzLFxuICAgIG11dGVUaW1pbmdOYW1lcyxcbiAgXSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IHVzZUNvbHVtbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgaGlkZUFjdGlvbnMsIHNldE11dGVUaW1pbmdOYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHshaGlkZUFjdGlvbnMgJiYgPGg1Pk11dGUgdGltaW5nczwvaDU+fVxuICAgICAgeyFoaWRlQWN0aW9ucyAmJiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIE11dGUgdGltaW5ncyBhcmUgYSBuYW1lZCBpbnRlcnZhbCBvZiB0aW1lIHRoYXQgbWF5IGJlIHJlZmVyZW5jZWQgaW4gdGhlIG5vdGlmaWNhdGlvbiBwb2xpY3kgdHJlZSB0byBtdXRlXG4gICAgICAgICAgcGFydGljdWxhciBub3RpZmljYXRpb24gcG9saWNpZXMgZm9yIHNwZWNpZmljIHRpbWVzIG9mIHRoZSBkYXkuXG4gICAgICAgIDwvcD5cbiAgICAgICl9XG4gICAgICB7IWhpZGVBY3Rpb25zICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy5jcmVhdGVdfT5cbiAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTXV0ZUJ1dHRvbn1cbiAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoJ2FsZXJ0aW5nL3JvdXRlcy9tdXRlLXRpbWluZy9uZXcnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXcgbXV0ZSB0aW1pbmdcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgKX1cbiAgICAgIHtpdGVtcy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8RHluYW1pY1RhYmxlIGl0ZW1zPXtpdGVtc30gY29scz17Y29sdW1uc30gLz5cbiAgICAgICkgOiAhaGlkZUFjdGlvbnMgPyAoXG4gICAgICAgIDxFbXB0eUFyZWFXaXRoQ1RBXG4gICAgICAgICAgdGV4dD1cIllvdSBoYXZlbid0IGNyZWF0ZWQgYW55IG11dGUgdGltaW5ncyB5ZXRcIlxuICAgICAgICAgIGJ1dHRvbkxhYmVsPVwiQWRkIG11dGUgdGltaW5nXCJcbiAgICAgICAgICBidXR0b25JY29uPVwicGx1c1wiXG4gICAgICAgICAgYnV0dG9uU2l6ZT1cImxnXCJcbiAgICAgICAgICBocmVmPXttYWtlQU1MaW5rKCdhbGVydGluZy9yb3V0ZXMvbXV0ZS10aW1pbmcvbmV3JywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgc2hvd0J1dHRvbj17Y29udGV4dFNydi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zLmNyZWF0ZSl9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8cD5ObyBtdXRlIHRpbWluZ3MgY29uZmlndXJlZDwvcD5cbiAgICAgICl9XG4gICAgICB7IWhpZGVBY3Rpb25zICYmIChcbiAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgIGlzT3Blbj17ISFtdXRlVGltaW5nTmFtZX1cbiAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBtdXRlIHRpbWluZ1wiXG4gICAgICAgICAgYm9keT17YEFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUgXCIke211dGVUaW1pbmdOYW1lfVwiYH1cbiAgICAgICAgICBjb25maXJtVGV4dD1cIkRlbGV0ZVwiXG4gICAgICAgICAgb25Db25maXJtPXsoKSA9PiBkaXNwYXRjaChkZWxldGVNdXRlVGltaW5nQWN0aW9uKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIG11dGVUaW1pbmdOYW1lKSl9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRNdXRlVGltaW5nTmFtZSgnJyl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gdXNlQ29sdW1ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcsIGhpZGVBY3Rpb25zID0gZmFsc2UsIHNldE11dGVUaW1pbmdOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkKSB7XG4gIGNvbnN0IHBlcm1pc3Npb25zID0gZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuXG4gIGNvbnN0IHVzZXJIYXNFZGl0UGVybWlzc2lvbnMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMudXBkYXRlKTtcbiAgY29uc3QgdXNlckhhc0RlbGV0ZVBlcm1pc3Npb25zID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zLmRlbGV0ZSk7XG4gIGNvbnN0IHNob3dBY3Rpb25zID0gIWhpZGVBY3Rpb25zICYmICh1c2VySGFzRWRpdFBlcm1pc3Npb25zIHx8IHVzZXJIYXNEZWxldGVQZXJtaXNzaW9ucyk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCk6IEFycmF5PER5bmFtaWNUYWJsZUNvbHVtblByb3BzPE11dGVUaW1lSW50ZXJ2YWw+PiA9PiB7XG4gICAgY29uc3QgY29sdW1uczogQXJyYXk8RHluYW1pY1RhYmxlQ29sdW1uUHJvcHM8TXV0ZVRpbWVJbnRlcnZhbD4+ID0gW1xuICAgICAge1xuICAgICAgICBpZDogJ25hbWUnLFxuICAgICAgICBsYWJlbDogJ05hbWUnLFxuICAgICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJOYW1lKHsgZGF0YSB9KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtkYXRhLm5hbWV9IHtkYXRhLnByb3ZlbmFuY2UgJiYgPFByb3Zpc2lvbmluZ0JhZGdlIC8+fVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogJzI1MHB4JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAndGltZVJhbmdlJyxcbiAgICAgICAgbGFiZWw6ICdUaW1lIHJhbmdlJyxcbiAgICAgICAgcmVuZGVyQ2VsbDogKHsgZGF0YSB9KSA9PiByZW5kZXJUaW1lSW50ZXJ2YWxzKGRhdGEudGltZV9pbnRlcnZhbHMpLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGlmIChzaG93QWN0aW9ucykge1xuICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgaWQ6ICdhY3Rpb25zJyxcbiAgICAgICAgbGFiZWw6ICdBY3Rpb25zJyxcbiAgICAgICAgcmVuZGVyQ2VsbDogZnVuY3Rpb24gcmVuZGVyQWN0aW9ucyh7IGRhdGEgfSkge1xuICAgICAgICAgIGlmIChkYXRhLnByb3ZlbmFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoYC9hbGVydGluZy9yb3V0ZXMvbXV0ZS10aW1pbmcvZWRpdGAsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0ZU5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG5hbWU9XCJmaWxlLWFsdFwiIHRpdGxlPVwiVmlldyBtdXRlIHRpbWluZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy51cGRhdGVdfT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17bWFrZUFNTGluayhgL2FsZXJ0aW5nL3JvdXRlcy9tdXRlLXRpbWluZy9lZGl0YCwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBtdXRlTmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gbmFtZT1cImVkaXRcIiB0aXRsZT1cIkVkaXQgbXV0ZSB0aW1pbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLmRlbGV0ZV19PlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBuYW1lPXsndHJhc2gtYWx0J31cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIG11dGUgdGltaW5nXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE11dGVUaW1pbmdOYW1lKGRhdGEubmFtZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiAnMTAwcHgnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9LCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc2V0TXV0ZVRpbWluZ05hbWUsIHNob3dBY3Rpb25zLCBwZXJtaXNzaW9uc10pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUaW1lSW50ZXJ2YWxzKHRpbWVJbnRlcnZhbHM6IFRpbWVJbnRlcnZhbFtdKSB7XG4gIHJldHVybiB0aW1lSW50ZXJ2YWxzLm1hcCgoaW50ZXJ2YWwsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyB0aW1lcywgd2Vla2RheXMsIGRheXNfb2ZfbW9udGgsIG1vbnRocywgeWVhcnMgfSA9IGludGVydmFsO1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBnZXRUaW1lU3RyaW5nKHRpbWVzKTtcbiAgICBjb25zdCB3ZWVrZGF5U3RyaW5nID0gZ2V0V2Vla2RheVN0cmluZyh3ZWVrZGF5cyk7XG4gICAgY29uc3QgZGF5c1N0cmluZyA9IGdldERheXNPZk1vbnRoU3RyaW5nKGRheXNfb2ZfbW9udGgpO1xuICAgIGNvbnN0IG1vbnRoc1N0cmluZyA9IGdldE1vbnRoc1N0cmluZyhtb250aHMpO1xuICAgIGNvbnN0IHllYXJzU3RyaW5nID0gZ2V0WWVhcnNTdHJpbmcoeWVhcnMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e0pTT04uc3RyaW5naWZ5KGludGVydmFsKSArIGluZGV4fT5cbiAgICAgICAge2Ake3RpbWVTdHJpbmd9ICR7d2Vla2RheVN0cmluZ31gfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAge1tkYXlzU3RyaW5nLCBtb250aHNTdHJpbmcsIHllYXJzU3RyaW5nXS5qb2luKCcgfCAnKX1cbiAgICAgICAgPGJyIC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH0pO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBgLFxuICBhZGRNdXRlQnV0dG9uOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgZ2V0Rm9ybVN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG5cbiAgICAgICYgPiAqICsgKiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgaW5wdXQ6IGNzc2BcbiAgICAgIGZsZXg6IDE7XG4gICAgYCxcbiAgICB0aW1pbmdDb250YWluZXI6IGNzc2BcbiAgICAgIG1heC13aWR0aDogJHt0aGVtZS5zcGFjaW5nKDMzKX07XG4gICAgYCxcbiAgICBzbWFsbElucHV0OiBjc3NgXG4gICAgICB3aWR0aDogJHt0aGVtZS5zcGFjaW5nKDYuNSl9O1xuICAgIGAsXG4gICAgbGlua1RleHQ6IGNzc2BcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGAsXG4gICAgY29sbGFwc2U6IGNzc2BcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5wcmltYXJ5fTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IGdldEdyaWRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBmb250LXN0eWxlOiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFNpemV9O1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAke3RoZW1lLnNwYWNpbmcoMTUuNSl9IGF1dG87XG5cbiAgICAgICR7dGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKX0ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICB9XG4gICAgYCxcbiAgICB0aXRsZUNlbGw6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgIGAsXG4gICAgdmFsdWVDZWxsOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFRhZ0xpc3QsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBNYXRjaGVyIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBtYXRjaGVyVG9PcGVyYXRvciB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5cbnR5cGUgTWF0Y2hlcnNQcm9wcyA9IHsgbWF0Y2hlcnM6IE1hdGNoZXJbXSB9O1xuXG5leHBvcnQgY29uc3QgTWF0Y2hlcnM6IEZDPE1hdGNoZXJzUHJvcHM+ID0gKHsgbWF0Y2hlcnMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUYWdMaXN0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9XG4gICAgICAgIHRhZ3M9e21hdGNoZXJzLm1hcCgobWF0Y2hlcikgPT4gYCR7bWF0Y2hlci5uYW1lfSR7bWF0Y2hlclRvT3BlcmF0b3IobWF0Y2hlcil9JHttYXRjaGVyLnZhbHVlfWApfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gIHRhZ3M6IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5cbmltcG9ydCB7IEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCBBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVkgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSwgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5mdW5jdGlvbiB1c2VJc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShhdmFpbGFibGVBbGVydE1hbmFnZXJzOiBBbGVydE1hbmFnZXJEYXRhU291cmNlW10pIHtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnNOYW1lcyA9IGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnMubWFwKChhbSkgPT4gYW0ubmFtZSk7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc05hbWVzLmluY2x1ZGVzKGFsZXJ0TWFuYWdlck5hbWUpO1xuICAgIH0sXG4gICAgW2F2YWlsYWJsZUFsZXJ0TWFuYWdlcnNdXG4gICk7XG59XG5cbi8qIFRoaXMgd2lsbCByZXR1cm4gYW0gbmFtZSBlaXRoZXIgZnJvbSBxdWVyeSBwYXJhbXMgb3IgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIGEgZGVmYXVsdCAoZ3JhZmFuYSkuXG4gKiBEdWUgdG8gUkJBQyBwZXJtaXNzaW9ucyBHcmFmYW5hIE1hbmFnZWQgQWxlcnQgbWFuYWdlciBvciBleHRlcm5hbCBhbGVydCBtYW5hZ2VycyBtYXkgbm90IGJlIGF2YWlsYWJsZVxuICogSW4gdGhlIHdvcnN0IGNhc2UgbmVpaHRlciBHTUEgbm9yIGV4dGVybmFsIGFsZXJ0IG1hbmFnZXIgaXMgYXZhaWxhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKFxuICBhdmFpbGFibGVBbGVydE1hbmFnZXJzOiBBbGVydE1hbmFnZXJEYXRhU291cmNlW11cbik6IFtzdHJpbmcgfCB1bmRlZmluZWQsIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHZvaWRdIHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zLCB1cGRhdGVRdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICBjb25zdCBpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZSA9IHVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnMpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpIHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogbnVsbCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLnNldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdXBkYXRlUXVlcnlQYXJhbXMsIGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlXVxuICApO1xuXG4gIGNvbnN0IHF1ZXJ5U291cmNlID0gcXVlcnlQYXJhbXNbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTtcblxuICBpZiAocXVlcnlTb3VyY2UgJiYgdHlwZW9mIHF1ZXJ5U291cmNlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShxdWVyeVNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBbcXVlcnlTb3VyY2UsIHVwZGF0ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vbiBleGlzdGluZyBhbGVydG1hbmFnZXJcbiAgICAgIHJldHVybiBbdW5kZWZpbmVkLCB1cGRhdGVdO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0b3JlU291cmNlID0gc3RvcmUuZ2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgaWYgKHN0b3JlU291cmNlICYmIHR5cGVvZiBzdG9yZVNvdXJjZSA9PT0gJ3N0cmluZycgJiYgaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoc3RvcmVTb3VyY2UpKSB7XG4gICAgdXBkYXRlKHN0b3JlU291cmNlKTtcbiAgICByZXR1cm4gW3N0b3JlU291cmNlLCB1cGRhdGVdO1xuICB9XG5cbiAgaWYgKGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpKSB7XG4gICAgcmV0dXJuIFtHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FLCB1cGRhdGVdO1xuICB9XG5cbiAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbiB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbihhY2Nlc3NUeXBlOiAnaW5zdGFuY2UnIHwgJ25vdGlmaWNhdGlvbicpIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXNCeVBlcm1pc3Npb24oYWNjZXNzVHlwZSksIFthY2Nlc3NUeXBlXSk7XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0bWFuYWdlckNvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgdGltZUludGVydmFsVG9TdHJpbmcgfSBmcm9tICcuLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24gfSBmcm9tICcuL3VzZUFsZXJ0TWFuYWdlclNvdXJjZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU11dGVUaW1pbmdPcHRpb25zKCk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiB7XG4gIGNvbnN0IGFsZXJ0TWFuYWdlcnMgPSB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uKCdub3RpZmljYXRpb24nKTtcbiAgY29uc3QgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdID0gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZShhbGVydE1hbmFnZXJzKTtcbiAgY29uc3QgYW1Db25maWdzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbUNvbmZpZ3MpO1xuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB7IHJlc3VsdCB9ID0gKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgYW1Db25maWdzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gICAgY29uc3QgY29uZmlnOiBBbGVydG1hbmFnZXJDb25maWcgPSByZXN1bHQ/LmFsZXJ0bWFuYWdlcl9jb25maWcgPz8ge307XG5cbiAgICBjb25zdCBtdXRlVGltaW5nc09wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9XG4gICAgICBjb25maWc/Lm11dGVfdGltZV9pbnRlcnZhbHM/Lm1hcCgodmFsdWUpID0+ICh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZS5uYW1lLFxuICAgICAgICBsYWJlbDogdmFsdWUubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHZhbHVlLnRpbWVfaW50ZXJ2YWxzLm1hcCgoaW50ZXJ2YWwpID0+IHRpbWVJbnRlcnZhbFRvU3RyaW5nKGludGVydmFsKSkuam9pbignLCBBTkQgJyksXG4gICAgICB9KSkgPz8gW107XG5cbiAgICByZXR1cm4gbXV0ZVRpbWluZ3NPcHRpb25zO1xuICB9LCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgYW1Db25maWdzXSk7XG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVVJMU2VhcmNoUGFyYW1zKCk6IFtcbiAgVVJMU2VhcmNoUGFyYW1zLFxuICAoc2VhcmNoVmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZD4sIHJlcGxhY2U/OiBib29sZWFuKSA9PiB2b2lkXG5dIHtcbiAgY29uc3QgeyBzZWFyY2ggfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdXNlTWVtbygoKSA9PiBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCksIFtzZWFyY2hdKTtcblxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjaygoc2VhcmNoVmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZD4sIHJlcGxhY2U/OiBib29sZWFuKSA9PiB7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoc2VhcmNoVmFsdWVzLCByZXBsYWNlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBbcXVlcnlQYXJhbXMsIHVwZGF0ZV07XG59XG4iLCJpbXBvcnQgeyBpc1VuZGVmaW5lZCwgb21pdEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFZhbGlkYXRlIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBNYXRjaGVyT3BlcmF0b3IsIFJvdXRlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uL3R5cGVzL2Ftcm91dGVzJztcbmltcG9ydCB7IE1hdGNoZXJGaWVsZFZhbHVlIH0gZnJvbSAnLi4vdHlwZXMvc2lsZW5jZS1mb3JtJztcblxuaW1wb3J0IHsgbWF0Y2hlclRvTWF0Y2hlckZpZWxkLCBwYXJzZU1hdGNoZXIgfSBmcm9tICcuL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IHBhcnNlSW50ZXJ2YWwsIHRpbWVPcHRpb25zIH0gZnJvbSAnLi90aW1lJztcblxuY29uc3QgZGVmYXVsdFZhbHVlQW5kVHlwZTogW3N0cmluZywgc3RyaW5nXSA9IFsnJywgJyddO1xuXG5jb25zdCBtYXRjaGVyc1RvQXJyYXlGaWVsZE1hdGNoZXJzID0gKFxuICBtYXRjaGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZCxcbiAgaXNSZWdleDogYm9vbGVhblxuKTogTWF0Y2hlckZpZWxkVmFsdWVbXSA9PlxuICBPYmplY3QuZW50cmllcyhtYXRjaGVycyA/PyB7fSkucmVkdWNlPE1hdGNoZXJGaWVsZFZhbHVlW10+KFxuICAgIChhY2MsIFtuYW1lLCB2YWx1ZV0pID0+IFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9wZXJhdG9yOiBpc1JlZ2V4ID8gTWF0Y2hlck9wZXJhdG9yLnJlZ2V4IDogTWF0Y2hlck9wZXJhdG9yLmVxdWFsLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtdIGFzIE1hdGNoZXJGaWVsZFZhbHVlW11cbiAgKTtcblxuY29uc3QgaW50ZXJ2YWxUb1ZhbHVlQW5kVHlwZSA9IChcbiAgc3RyVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlPzogdHlwZW9mIGRlZmF1bHRWYWx1ZUFuZFR5cGVcbik6IFtzdHJpbmcsIHN0cmluZ10gPT4ge1xuICBpZiAoIXN0clZhbHVlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSA/PyBkZWZhdWx0VmFsdWVBbmRUeXBlO1xuICB9XG5cbiAgY29uc3QgW3ZhbHVlLCB2YWx1ZVR5cGVdID0gc3RyVmFsdWUgPyBwYXJzZUludGVydmFsKHN0clZhbHVlKSA6IFt1bmRlZmluZWQsIHVuZGVmaW5lZF07XG5cbiAgY29uc3QgdGltZU9wdGlvbiA9IHRpbWVPcHRpb25zLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlID09PSB2YWx1ZVR5cGUpO1xuXG4gIGlmICghdmFsdWUgfHwgIXRpbWVPcHRpb24pIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlQW5kVHlwZTtcbiAgfVxuXG4gIHJldHVybiBbU3RyaW5nKHZhbHVlKSwgdGltZU9wdGlvbi52YWx1ZV07XG59O1xuXG5jb25zdCBzZWxlY3RhYmxlVmFsdWVUb1N0cmluZyA9IChzZWxlY3RhYmxlVmFsdWU6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KTogc3RyaW5nID0+IHNlbGVjdGFibGVWYWx1ZS52YWx1ZSE7XG5cbmNvbnN0IHNlbGVjdGFibGVWYWx1ZXNUb1N0cmluZ3MgPSAoYXJyOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gfCB1bmRlZmluZWQpOiBzdHJpbmdbXSA9PlxuICAoYXJyID8/IFtdKS5tYXAoc2VsZWN0YWJsZVZhbHVlVG9TdHJpbmcpO1xuXG5leHBvcnQgY29uc3QgZW1wdHlBcnJheUZpZWxkTWF0Y2hlcjogTWF0Y2hlckZpZWxkVmFsdWUgPSB7XG4gIG5hbWU6ICcnLFxuICB2YWx1ZTogJycsXG4gIG9wZXJhdG9yOiBNYXRjaGVyT3BlcmF0b3IuZXF1YWwsXG59O1xuXG5leHBvcnQgY29uc3QgZW1wdHlSb3V0ZTogRm9ybUFtUm91dGUgPSB7XG4gIGlkOiAnJyxcbiAgb3ZlcnJpZGVHcm91cGluZzogZmFsc2UsXG4gIGdyb3VwQnk6IFtdLFxuICBvYmplY3RfbWF0Y2hlcnM6IFtdLFxuICByb3V0ZXM6IFtdLFxuICBjb250aW51ZTogZmFsc2UsXG4gIHJlY2VpdmVyOiAnJyxcbiAgb3ZlcnJpZGVUaW1pbmdzOiBmYWxzZSxcbiAgZ3JvdXBXYWl0VmFsdWU6ICcnLFxuICBncm91cFdhaXRWYWx1ZVR5cGU6IHRpbWVPcHRpb25zWzBdLnZhbHVlLFxuICBncm91cEludGVydmFsVmFsdWU6ICcnLFxuICBncm91cEludGVydmFsVmFsdWVUeXBlOiB0aW1lT3B0aW9uc1swXS52YWx1ZSxcbiAgcmVwZWF0SW50ZXJ2YWxWYWx1ZTogJycsXG4gIHJlcGVhdEludGVydmFsVmFsdWVUeXBlOiB0aW1lT3B0aW9uc1swXS52YWx1ZSxcbiAgbXV0ZVRpbWVJbnRlcnZhbHM6IFtdLFxufTtcblxuLy9yZXR1cm5zIHJvdXRlLCBhbmQgYSByZWNvcmQgbWFwcGluZyBpZCB0byBleGlzdGluZyByb3V0ZVxuZXhwb3J0IGNvbnN0IGFtUm91dGVUb0Zvcm1BbVJvdXRlID0gKHJvdXRlOiBSb3V0ZSB8IHVuZGVmaW5lZCk6IFtGb3JtQW1Sb3V0ZSwgUmVjb3JkPHN0cmluZywgUm91dGU+XSA9PiB7XG4gIGlmICghcm91dGUpIHtcbiAgICByZXR1cm4gW2VtcHR5Um91dGUsIHt9XTtcbiAgfVxuXG4gIGNvbnN0IGlkID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBjb25zdCBpZDJyb3V0ZSA9IHtcbiAgICBbaWRdOiByb3V0ZSxcbiAgfTtcblxuICBpZiAoT2JqZWN0LmtleXMocm91dGUpLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGZvcm1BbVJvdXRlID0geyAuLi5lbXB0eVJvdXRlLCBpZCB9O1xuICAgIHJldHVybiBbZm9ybUFtUm91dGUsIGlkMnJvdXRlXTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1Sb3V0ZXM6IEZvcm1BbVJvdXRlW10gPSBbXTtcbiAgcm91dGUucm91dGVzPy5mb3JFYWNoKChzdWJSb3V0ZSkgPT4ge1xuICAgIGNvbnN0IFtzdWJGb3JtUm91dGUsIHN1YklkMlJvdXRlXSA9IGFtUm91dGVUb0Zvcm1BbVJvdXRlKHN1YlJvdXRlKTtcbiAgICBmb3JtUm91dGVzLnB1c2goc3ViRm9ybVJvdXRlKTtcbiAgICBPYmplY3QuYXNzaWduKGlkMnJvdXRlLCBzdWJJZDJSb3V0ZSk7XG4gIH0pO1xuXG4gIC8vIEZyb250ZW5kIG1pZ3JhdGlvbiB0byB1c2Ugb2JqZWN0X21hdGNoZXJzIGluc3RlYWQgb2YgbWF0Y2hlcnNcbiAgY29uc3QgbWF0Y2hlcnMgPSByb3V0ZS5tYXRjaGVyc1xuICAgID8gcm91dGUubWF0Y2hlcnM/Lm1hcCgobWF0Y2hlcikgPT4gbWF0Y2hlclRvTWF0Y2hlckZpZWxkKHBhcnNlTWF0Y2hlcihtYXRjaGVyKSkpID8/IFtdXG4gICAgOiByb3V0ZS5vYmplY3RfbWF0Y2hlcnM/Lm1hcChcbiAgICAgICAgKG1hdGNoZXIpID0+ICh7IG5hbWU6IG1hdGNoZXJbMF0sIG9wZXJhdG9yOiBtYXRjaGVyWzFdLCB2YWx1ZTogbWF0Y2hlclsyXSB9IGFzIE1hdGNoZXJGaWVsZFZhbHVlKVxuICAgICAgKSA/PyBbXTtcblxuICBjb25zdCBbZ3JvdXBXYWl0VmFsdWUsIGdyb3VwV2FpdFZhbHVlVHlwZV0gPSBpbnRlcnZhbFRvVmFsdWVBbmRUeXBlKHJvdXRlLmdyb3VwX3dhaXQsIFsnJywgJ3MnXSk7XG4gIGNvbnN0IFtncm91cEludGVydmFsVmFsdWUsIGdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGVdID0gaW50ZXJ2YWxUb1ZhbHVlQW5kVHlwZShyb3V0ZS5ncm91cF9pbnRlcnZhbCwgWycnLCAnbSddKTtcbiAgY29uc3QgW3JlcGVhdEludGVydmFsVmFsdWUsIHJlcGVhdEludGVydmFsVmFsdWVUeXBlXSA9IGludGVydmFsVG9WYWx1ZUFuZFR5cGUocm91dGUucmVwZWF0X2ludGVydmFsLCBbJycsICdoJ10pO1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQsXG4gICAgICBvYmplY3RfbWF0Y2hlcnM6IFtcbiAgICAgICAgLi4ubWF0Y2hlcnMsXG4gICAgICAgIC4uLm1hdGNoZXJzVG9BcnJheUZpZWxkTWF0Y2hlcnMocm91dGUubWF0Y2gsIGZhbHNlKSxcbiAgICAgICAgLi4ubWF0Y2hlcnNUb0FycmF5RmllbGRNYXRjaGVycyhyb3V0ZS5tYXRjaF9yZSwgdHJ1ZSksXG4gICAgICBdLFxuICAgICAgY29udGludWU6IHJvdXRlLmNvbnRpbnVlID8/IGZhbHNlLFxuICAgICAgcmVjZWl2ZXI6IHJvdXRlLnJlY2VpdmVyID8/ICcnLFxuICAgICAgb3ZlcnJpZGVHcm91cGluZzogQXJyYXkuaXNBcnJheShyb3V0ZS5ncm91cF9ieSkgJiYgcm91dGUuZ3JvdXBfYnkubGVuZ3RoICE9PSAwLFxuICAgICAgZ3JvdXBCeTogcm91dGUuZ3JvdXBfYnkgPz8gW10sXG4gICAgICBvdmVycmlkZVRpbWluZ3M6IFtncm91cFdhaXRWYWx1ZSwgZ3JvdXBJbnRlcnZhbFZhbHVlLCByZXBlYXRJbnRlcnZhbFZhbHVlXS5zb21lKEJvb2xlYW4pLFxuICAgICAgZ3JvdXBXYWl0VmFsdWUsXG4gICAgICBncm91cFdhaXRWYWx1ZVR5cGUsXG4gICAgICBncm91cEludGVydmFsVmFsdWUsXG4gICAgICBncm91cEludGVydmFsVmFsdWVUeXBlLFxuICAgICAgcmVwZWF0SW50ZXJ2YWxWYWx1ZSxcbiAgICAgIHJlcGVhdEludGVydmFsVmFsdWVUeXBlLFxuICAgICAgcm91dGVzOiBmb3JtUm91dGVzLFxuICAgICAgbXV0ZVRpbWVJbnRlcnZhbHM6IHJvdXRlLm11dGVfdGltZV9pbnRlcnZhbHMgPz8gW10sXG4gICAgfSxcbiAgICBpZDJyb3V0ZSxcbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtQW1Sb3V0ZVRvQW1Sb3V0ZSA9IChcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBmb3JtQW1Sb3V0ZTogRm9ybUFtUm91dGUsXG4gIGlkMkV4aXN0aW5nUm91dGU6IFJlY29yZDxzdHJpbmcsIFJvdXRlPlxuKTogUm91dGUgPT4ge1xuICBjb25zdCBleGlzdGluZzogUm91dGUgfCB1bmRlZmluZWQgPSBpZDJFeGlzdGluZ1JvdXRlW2Zvcm1BbVJvdXRlLmlkXTtcblxuICBjb25zdCB7XG4gICAgb3ZlcnJpZGVHcm91cGluZyxcbiAgICBncm91cEJ5LFxuICAgIG92ZXJyaWRlVGltaW5ncyxcbiAgICBncm91cFdhaXRWYWx1ZSxcbiAgICBncm91cFdhaXRWYWx1ZVR5cGUsXG4gICAgZ3JvdXBJbnRlcnZhbFZhbHVlLFxuICAgIGdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGUsXG4gICAgcmVwZWF0SW50ZXJ2YWxWYWx1ZSxcbiAgICByZXBlYXRJbnRlcnZhbFZhbHVlVHlwZSxcbiAgfSA9IGZvcm1BbVJvdXRlO1xuXG4gIGNvbnN0IGdyb3VwX2J5ID0gb3ZlcnJpZGVHcm91cGluZyAmJiBncm91cEJ5ID8gZ3JvdXBCeSA6IFtdO1xuXG4gIGNvbnN0IG92ZXJyaWRlR3JvdXBXYWl0ID0gb3ZlcnJpZGVUaW1pbmdzICYmIGdyb3VwV2FpdFZhbHVlO1xuICBjb25zdCBncm91cF93YWl0ID0gb3ZlcnJpZGVHcm91cFdhaXQgPyBgJHtncm91cFdhaXRWYWx1ZX0ke2dyb3VwV2FpdFZhbHVlVHlwZX1gIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IG92ZXJyaWRlR3JvdXBJbnRlcnZhbCA9IG92ZXJyaWRlVGltaW5ncyAmJiBncm91cEludGVydmFsVmFsdWU7XG4gIGNvbnN0IGdyb3VwX2ludGVydmFsID0gb3ZlcnJpZGVHcm91cEludGVydmFsID8gYCR7Z3JvdXBJbnRlcnZhbFZhbHVlfSR7Z3JvdXBJbnRlcnZhbFZhbHVlVHlwZX1gIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IG92ZXJyaWRlUmVwZWF0SW50ZXJ2YWwgPSBvdmVycmlkZVRpbWluZ3MgJiYgcmVwZWF0SW50ZXJ2YWxWYWx1ZTtcbiAgY29uc3QgcmVwZWF0X2ludGVydmFsID0gb3ZlcnJpZGVSZXBlYXRJbnRlcnZhbCA/IGAke3JlcGVhdEludGVydmFsVmFsdWV9JHtyZXBlYXRJbnRlcnZhbFZhbHVlVHlwZX1gIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGFtUm91dGU6IFJvdXRlID0ge1xuICAgIC4uLihleGlzdGluZyA/PyB7fSksXG4gICAgY29udGludWU6IGZvcm1BbVJvdXRlLmNvbnRpbnVlLFxuICAgIGdyb3VwX2J5OiBncm91cF9ieSxcbiAgICBvYmplY3RfbWF0Y2hlcnM6IGZvcm1BbVJvdXRlLm9iamVjdF9tYXRjaGVycy5sZW5ndGhcbiAgICAgID8gZm9ybUFtUm91dGUub2JqZWN0X21hdGNoZXJzLm1hcCgobWF0Y2hlcikgPT4gW21hdGNoZXIubmFtZSwgbWF0Y2hlci5vcGVyYXRvciwgbWF0Y2hlci52YWx1ZV0pXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICBtYXRjaDogdW5kZWZpbmVkLCAvLyBERVBSRUNBVEVEOiBVc2UgbWF0Y2hlcnNcbiAgICBtYXRjaF9yZTogdW5kZWZpbmVkLCAvLyBERVBSRUNBVEVEOiBVc2UgbWF0Y2hlcnNcbiAgICBncm91cF93YWl0LFxuICAgIGdyb3VwX2ludGVydmFsLFxuICAgIHJlcGVhdF9pbnRlcnZhbCxcbiAgICByb3V0ZXM6IGZvcm1BbVJvdXRlLnJvdXRlcy5tYXAoKHN1YlJvdXRlKSA9PlxuICAgICAgZm9ybUFtUm91dGVUb0FtUm91dGUoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc3ViUm91dGUsIGlkMkV4aXN0aW5nUm91dGUpXG4gICAgKSxcbiAgICBtdXRlX3RpbWVfaW50ZXJ2YWxzOiBmb3JtQW1Sb3V0ZS5tdXRlVGltZUludGVydmFscyxcbiAgfTtcblxuICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAhPT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgIGFtUm91dGUubWF0Y2hlcnMgPSBmb3JtQW1Sb3V0ZS5vYmplY3RfbWF0Y2hlcnMubWFwKCh7IG5hbWUsIG9wZXJhdG9yLCB2YWx1ZSB9KSA9PiBgJHtuYW1lfSR7b3BlcmF0b3J9JHt2YWx1ZX1gKTtcbiAgICBhbVJvdXRlLm9iamVjdF9tYXRjaGVycyA9IHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICBhbVJvdXRlLm1hdGNoZXJzID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGZvcm1BbVJvdXRlLnJlY2VpdmVyKSB7XG4gICAgYW1Sb3V0ZS5yZWNlaXZlciA9IGZvcm1BbVJvdXRlLnJlY2VpdmVyO1xuICB9XG5cbiAgcmV0dXJuIG9taXRCeShhbVJvdXRlLCBpc1VuZGVmaW5lZCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nVG9TZWxlY3RhYmxlVmFsdWUgPSAoc3RyOiBzdHJpbmcpOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPiA9PiAoe1xuICBsYWJlbDogc3RyLFxuICB2YWx1ZTogc3RyLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdzVG9TZWxlY3RhYmxlVmFsdWVzID0gKGFycjogc3RyaW5nW10gfCB1bmRlZmluZWQpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT5cbiAgKGFyciA/PyBbXSkubWFwKHN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlKTtcblxuZXhwb3J0IGNvbnN0IG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcgPSAoc2VsZWN0YWJsZVZhbHVlOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPik6IHN0cmluZyA9PiB7XG4gIGlmICghc2VsZWN0YWJsZVZhbHVlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGFibGVWYWx1ZVRvU3RyaW5nKHNlbGVjdGFibGVWYWx1ZSkgPz8gJyc7XG59O1xuXG5leHBvcnQgY29uc3QgbWFwTXVsdGlTZWxlY3RWYWx1ZVRvU3RyaW5ncyA9IChcbiAgc2VsZWN0YWJsZVZhbHVlczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+IHwgdW5kZWZpbmVkXG4pOiBzdHJpbmdbXSA9PiB7XG4gIGlmICghc2VsZWN0YWJsZVZhbHVlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RhYmxlVmFsdWVzVG9TdHJpbmdzKHNlbGVjdGFibGVWYWx1ZXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbmFsUG9zaXRpdmVJbnRlZ2VyOiBWYWxpZGF0ZTxzdHJpbmc+ID0gKHZhbHVlKSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuICEvXlxcZCskLy50ZXN0KHZhbHVlKSA/ICdNdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci4nIDogdW5kZWZpbmVkO1xufTtcbiIsImltcG9ydCB7IER5bmFtaWNUYWJsZUl0ZW1Qcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvRHluYW1pY1RhYmxlJztcblxuZXhwb3J0IGNvbnN0IHByZXBhcmVJdGVtcyA9IDxUID0gdW5rbm93bj4oXG4gIGl0ZW1zOiBUW10sXG4gIGlkQ3JlYXRvcj86IChpdGVtOiBUKSA9PiBudW1iZXIgfCBzdHJpbmdcbik6IEFycmF5PER5bmFtaWNUYWJsZUl0ZW1Qcm9wczxUPj4gPT5cbiAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcbiAgICBpZDogaWRDcmVhdG9yPy4oaXRlbSkgPz8gaW5kZXgsXG4gICAgZGF0YTogaXRlbSxcbiAgfSkpO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURpc3BhdGNoIiwiY2xlYW5VcEFjdGlvbiIsInVzZUNsZWFudXAiLCJzdGF0ZVNlbGVjdG9yIiwiZGlzcGF0Y2giLCJzZWxlY3RvclJlZiIsImN1cnJlbnQiLCJjc3MiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQWxlcnQiLCJMb2FkaW5nUGxhY2Vob2xkZXIiLCJ1c2VTdHlsZXMyIiwid2l0aEVycm9yQm91bmRhcnkiLCJBbGVydE1hbmFnZXJQaWNrZXIiLCJBbGVydGluZ1BhZ2VXcmFwcGVyIiwiTm9BbGVydE1hbmFnZXJXYXJuaW5nIiwiUHJvdmlzaW9uZWRSZXNvdXJjZSIsIlByb3Zpc2lvbmluZ0FsZXJ0IiwiQW1Sb290Um91dGUiLCJBbVNwZWNpZmljUm91dGluZyIsIk11dGVUaW1pbmdzVGFibGUiLCJ1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwidXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbiIsInVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIiwiZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24iLCJ1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24iLCJhbVJvdXRlVG9Gb3JtQW1Sb3V0ZSIsImZvcm1BbVJvdXRlVG9BbVJvdXRlIiwic3RyaW5nc1RvU2VsZWN0YWJsZVZhbHVlcyIsImlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlIiwiaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIiwiQW1Sb3V0ZXMiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJpc1Jvb3RSb3V0ZUVkaXRNb2RlIiwic2V0SXNSb290Um91dGVFZGl0TW9kZSIsImFsZXJ0TWFuYWdlcnMiLCJhbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwic2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsImFtQ29uZmlncyIsInN0YXRlIiwiZmV0Y2hDb25maWciLCJyZXN1bHQiLCJsb2FkaW5nIiwicmVzdWx0TG9hZGluZyIsImVycm9yIiwicmVzdWx0RXJyb3IiLCJjb25maWciLCJhbGVydG1hbmFnZXJfY29uZmlnIiwicm9vdFJvdXRlIiwiaWQyRXhpc3RpbmdSb3V0ZSIsInJvdXRlIiwicmVjZWl2ZXJzIiwibWFwIiwicmVjZWl2ZXIiLCJuYW1lIiwiaXNQcm92aXNpb25lZCIsIkJvb2xlYW4iLCJwcm92ZW5hbmNlIiwiZW50ZXJSb290Um91dGVFZGl0TW9kZSIsImV4aXRSb290Um91dGVFZGl0TW9kZSIsInVuaWZpZWRBbGVydGluZyIsInNhdmVBTUNvbmZpZyIsImhhbmRsZVNhdmUiLCJkYXRhIiwibmV3RGF0YSIsIm5ld0NvbmZpZyIsIm9sZENvbmZpZyIsInN1Y2Nlc3NNZXNzYWdlIiwicmVmZXRjaCIsInJlYWRPbmx5IiwibWVzc2FnZSIsIlJvb3ROb3RpZmljYXRpb25Qb2xpY3kiLCJicmVhayIsInN0eWxlIiwidGhlbWUiLCJzcGFjaW5nIiwidXNlU2VsZWN0b3IiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJjaGlsZHJlbiIsInBhZ2VJZCIsImlzTG9hZGluZyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJjb250ZXh0U3J2IiwiQXV0aG9yaXplIiwiYWN0aW9ucyIsImZhbGxiYWNrIiwic29tZSIsImFjdGlvbiIsImhhc0FjY2VzcyIsInVzZVN0eWxlcyIsIkVtcHR5QXJlYSIsImNvbnRhaW5lciIsImNvbG9ycyIsImJnMiIsInRleHRTZW1pV2VhayIsInhsIiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsIkVtcHR5QXJlYVdpdGhDVEEiLCJidXR0b25JY29uIiwiYnV0dG9uTGFiZWwiLCJidXR0b25TaXplIiwiYnV0dG9uVmFyaWFudCIsIm9uQnV0dG9uQ2xpY2siLCJ0ZXh0IiwiaHJlZiIsInNob3dCdXR0b24iLCJjb21tb25Qcm9wcyIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImljb24iLCJzaXplIiwidmFyaWFudCIsIm1kIiwic20iLCJOb0FsZXJ0TWFuYWdlcnNBdmFpbGFibGUiLCJPdGhlckFsZXJ0TWFuYWdlcnNBdmFpbGFibGUiLCJhdmFpbGFibGVBbGVydE1hbmFnZXJzIiwiXyIsImhhc090aGVyQU1zIiwibGVuZ3RoIiwiQmFkZ2UiLCJyZXNvdXJjZSIsIlByb3Zpc2lvbmluZ0JhZGdlIiwiU3RhY2siLCJMYWJlbCIsIlRvb2x0aXAiLCJJbnB1dCIsIkljb24iLCJNYXRjaGVyRmlsdGVyIiwib25GaWx0ZXJDaGFuZ2UiLCJkZWZhdWx0UXVlcnlTdHJpbmciLCJxdWVyeVN0cmluZyIsImhhbmRsZVNlYXJjaENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaEljb24iLCJpbnB1dFdpZHRoIiwiZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIiwiQW1Sb290Um91dGVGb3JtIiwiQW1Sb290Um91dGVSZWFkIiwiaXNFZGl0TW9kZSIsIm9uU2F2ZSIsIm9uRW50ZXJFZGl0TW9kZSIsIm9uRXhpdEVkaXRNb2RlIiwicm91dGVzIiwicGVybWlzc2lvbnMiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlIiwidXBkYXRlIiwiYmFja2dyb3VuZCIsInNlY29uZGFyeSIsInByaW1hcnkiLCJjeCIsIkNvbGxhcHNlIiwiRmllbGQiLCJGb3JtIiwiSW5wdXRDb250cm9sIiwiTGluayIsIk11bHRpU2VsZWN0IiwiU2VsZWN0IiwibWFwTXVsdGlTZWxlY3RWYWx1ZVRvU3RyaW5ncyIsIm1hcFNlbGVjdFZhbHVlVG9TdHJpbmciLCJvcHRpb25hbFBvc2l0aXZlSW50ZWdlciIsInN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlIiwibWFrZUFNTGluayIsInRpbWVPcHRpb25zIiwiZ2V0Rm9ybVN0eWxlcyIsIm9uQ2FuY2VsIiwiaXNUaW1pbmdPcHRpb25zRXhwYW5kZWQiLCJzZXRJc1RpbWluZ09wdGlvbnNFeHBhbmRlZCIsImdyb3VwQnlPcHRpb25zIiwic2V0R3JvdXBCeU9wdGlvbnMiLCJncm91cEJ5Iiwib3ZlcnJpZGVUaW1pbmdzIiwib3ZlcnJpZGVHcm91cGluZyIsImNvbnRyb2wiLCJlcnJvcnMiLCJzZXRWYWx1ZSIsImZpZWxkIiwib25DaGFuZ2UiLCJpbnB1dCIsInJlcXVpcmVkIiwibGlua1RleHQiLCJvcHQiLCJvcHRzIiwiY29sbGFwc2UiLCJncm91cFdhaXRWYWx1ZSIsInRpbWluZ0NvbnRhaW5lciIsImZpZWxkU3RhdGUiLCJpbnZhbGlkIiwic21hbGxJbnB1dCIsInZhbGlkYXRlIiwiZ3JvdXBJbnRlcnZhbFZhbHVlIiwicmVwZWF0SW50ZXJ2YWxWYWx1ZSIsImdldEdyaWRTdHlsZXMiLCJqb2luIiwiZ3JvdXBXYWl0IiwiZ3JvdXBXYWl0VmFsdWVUeXBlIiwiZ3JvdXBJbnRlcnZhbCIsImdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGUiLCJyZXBlYXRJbnRlcnZhbCIsInJlcGVhdEludGVydmFsVmFsdWVUeXBlIiwidGl0bGVDZWxsIiwidmFsdWVDZWxsIiwiRmllbGRBcnJheSIsIkhvcml6b250YWxHcm91cCIsIkljb25CdXR0b24iLCJTd2l0Y2giLCJWZXJ0aWNhbEdyb3VwIiwidXNlTXV0ZVRpbWluZ09wdGlvbnMiLCJtYXRjaGVyRmllbGRPcHRpb25zIiwiZW1wdHlBcnJheUZpZWxkTWF0Y2hlciIsIkFtUm91dGVzRXhwYW5kZWRGb3JtIiwiZm9ybVN0eWxlcyIsIm11dGVUaW1pbmdPcHRpb25zIiwicmVnaXN0ZXIiLCJ3YXRjaCIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsIm5vTWF0Y2hlcnNXYXJuaW5nIiwibWF0Y2hlcnNDb250YWluZXIiLCJpbmRleCIsImxvY2FsUGF0aCIsIm9iamVjdF9tYXRjaGVycyIsIm1hdGNoZXJzT3BlcmF0b3IiLCJvcGVyYXRvciIsInJlbW92ZUJ1dHRvbiIsImlkIiwiYWRkTWF0Y2hlckJ0biIsIm11dGVUaW1lSW50ZXJ2YWxzIiwiYnV0dG9uR3JvdXAiLCJjb21tb25TcGFjaW5nIiwibmVzdGVkUG9saWNpZXMiLCJlbXB0eVJvdXRlIiwiQW1Sb3V0ZXNUYWJsZSIsIkFtUm91dGVzRXhwYW5kZWRSZWFkIiwiZ3JpZFN0eWxlcyIsInN1YnJvdXRlcyIsInNldFN1YnJvdXRlcyIsImlzQWRkTW9kZSIsInNldElzQWRkTW9kZSIsIm5ld1N1YnJvdXRlcyIsInBvcCIsIm5ld1JvdXRlcyIsImNyZWF0ZSIsImFkZE5lc3RlZFJvdXRpbmdCdG4iLCJpbnRlcnNlY3Rpb25XaXRoIiwiaXNFcXVhbCIsIkNvbmZpcm1Nb2RhbCIsIm1hdGNoZXJGaWVsZFRvTWF0Y2hlciIsInBhcnNlTWF0Y2hlcnMiLCJwcmVwYXJlSXRlbXMiLCJEeW5hbWljVGFibGUiLCJNYXRjaGVycyIsImdldEZpbHRlcmVkUm91dGVzIiwibGFiZWxNYXRjaGVyUXVlcnkiLCJjb250YWN0UG9pbnRRdWVyeSIsIm1hdGNoZXJzIiwiZmlsdGVyZWRSb3V0ZXMiLCJmaWx0ZXIiLCJyb3V0ZU1hdGNoZXJzIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInVwZGF0ZWRSb3V0ZSIsImVkaXRJbmRleCIsImZpbmRJbmRleCIsImRlbGV0ZVJvdXRlIiwicm91dGVJZCIsIm9uQ2FuY2VsQWRkIiwiZmlsdGVycyIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJkZWxldGluZ1JvdXRlSWQiLCJzZXREZWxldGluZ1JvdXRlSWQiLCJ1bmRlZmluZWQiLCJleHBhbmRlZElkIiwic2V0RXhwYW5kZWRJZCIsImNhbkVkaXRSb3V0ZXMiLCJoYXNQZXJtaXNzaW9uIiwiY2FuRGVsZXRlUm91dGVzIiwiZGVsZXRlIiwic2hvd0FjdGlvbnMiLCJleHBhbmRJdGVtIiwiaXRlbSIsImNvbGxhcHNlSXRlbSIsImNvbHMiLCJsYWJlbCIsInJlbmRlckNlbGwiLCJyZW5kZXJFeHBhbmRlZENvbnRlbnQiLCJleHBhbmRXaXRoQ3VzdG9tQ29udGVudCIsImNvbnRhY3RQb2ludCIsImR5bmFtaWNUYWJsZVJvdXRlcyIsInVzZURlYm91bmNlIiwidXNlVVJMU2VhcmNoUGFyYW1zIiwiZ2V0Tm90aWZpY2F0aW9uUG9saWNpZXNGaWx0ZXJzIiwib25Sb290Um91dGVFZGl0IiwiYWN0dWFsUm91dGVzIiwic2V0QWN0dWFsUm91dGVzIiwiY2FuQ3JlYXRlTm90aWZpY2F0aW9ucyIsInNlYXJjaFBhcmFtcyIsInNldFNlYXJjaFBhcmFtcyIsInNldEZpbHRlcnMiLCJjbGVhckZpbHRlcnMiLCJhZGROZXdSb3V0ZSIsIm9uVGFibGVSb3V0ZUNoYW5nZSIsInNlYXJjaENvbnRhaW5lciIsImN1cnJlbnRGaWx0ZXJzIiwiZmlsdGVySW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwiY2xlYXJGaWx0ZXJCdG4iLCJhZGRNYXRjaGVyQnRuUm93IiwiYm9yZGVyIiwic3Ryb25nIiwiZGVsZXRlTXV0ZVRpbWluZ0FjdGlvbiIsImdldFRpbWVTdHJpbmciLCJnZXRXZWVrZGF5U3RyaW5nIiwiZ2V0RGF5c09mTW9udGhTdHJpbmciLCJnZXRNb250aHNTdHJpbmciLCJnZXRZZWFyc1N0cmluZyIsIm11dGVUaW1pbmdOYW1lcyIsImhpZGVBY3Rpb25zIiwibXV0ZVRpbWluZ05hbWUiLCJzZXRNdXRlVGltaW5nTmFtZSIsIml0ZW1zIiwibXV0ZVRpbWluZ3MiLCJtdXRlX3RpbWVfaW50ZXJ2YWxzIiwibXV0ZVRpbWluZ3NQcm92ZW5hbmNlcyIsIm11dGVUaW1lUHJvdmVuYW5jZXMiLCJtdXRlIiwiY29sdW1ucyIsInVzZUNvbHVtbnMiLCJhZGRNdXRlQnV0dG9uIiwidXNlckhhc0VkaXRQZXJtaXNzaW9ucyIsInVzZXJIYXNEZWxldGVQZXJtaXNzaW9ucyIsInJlbmRlck5hbWUiLCJyZW5kZXJUaW1lSW50ZXJ2YWxzIiwidGltZV9pbnRlcnZhbHMiLCJwdXNoIiwicmVuZGVyQWN0aW9ucyIsIm11dGVOYW1lIiwidGltZUludGVydmFscyIsImludGVydmFsIiwidGltZXMiLCJ3ZWVrZGF5cyIsImRheXNfb2ZfbW9udGgiLCJtb250aHMiLCJ5ZWFycyIsInRpbWVTdHJpbmciLCJ3ZWVrZGF5U3RyaW5nIiwiZGF5c1N0cmluZyIsIm1vbnRoc1N0cmluZyIsInllYXJzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cG9ncmFwaHkiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwiZG93biIsIlRhZ0xpc3QiLCJtYXRjaGVyVG9PcGVyYXRvciIsInRhZ3MiLCJtYXRjaGVyIiwidXNlUXVlcnlQYXJhbXMiLCJzdG9yZSIsIkFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZIiwiQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsInVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlIiwiYWxlcnRNYW5hZ2VyTmFtZSIsImF2YWlsYWJsZUFsZXJ0TWFuYWdlcnNOYW1lcyIsImFtIiwicXVlcnlQYXJhbXMiLCJ1cGRhdGVRdWVyeVBhcmFtcyIsImlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlIiwic2V0IiwicXVlcnlTb3VyY2UiLCJzdG9yZVNvdXJjZSIsImdldCIsImdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzQnlQZXJtaXNzaW9uIiwiYWNjZXNzVHlwZSIsInRpbWVJbnRlcnZhbFRvU3RyaW5nIiwibXV0ZVRpbWluZ3NPcHRpb25zIiwiZGVzY3JpcHRpb24iLCJ1c2VMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZSIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaFZhbHVlcyIsInJlcGxhY2UiLCJwYXJ0aWFsIiwiaXNVbmRlZmluZWQiLCJvbWl0QnkiLCJNYXRjaGVyT3BlcmF0b3IiLCJtYXRjaGVyVG9NYXRjaGVyRmllbGQiLCJwYXJzZU1hdGNoZXIiLCJwYXJzZUludGVydmFsIiwiZGVmYXVsdFZhbHVlQW5kVHlwZSIsIm1hdGNoZXJzVG9BcnJheUZpZWxkTWF0Y2hlcnMiLCJpc1JlZ2V4IiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsInJlZ2V4IiwiZXF1YWwiLCJpbnRlcnZhbFRvVmFsdWVBbmRUeXBlIiwic3RyVmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZVR5cGUiLCJ0aW1lT3B0aW9uIiwiZmluZCIsIlN0cmluZyIsInNlbGVjdGFibGVWYWx1ZVRvU3RyaW5nIiwic2VsZWN0YWJsZVZhbHVlIiwic2VsZWN0YWJsZVZhbHVlc1RvU3RyaW5ncyIsImFyciIsImNvbnRpbnVlIiwiTWF0aCIsInJhbmRvbSIsImlkMnJvdXRlIiwia2V5cyIsImZvcm1BbVJvdXRlIiwiZm9ybVJvdXRlcyIsImZvckVhY2giLCJzdWJSb3V0ZSIsInN1YkZvcm1Sb3V0ZSIsInN1YklkMlJvdXRlIiwiYXNzaWduIiwiZ3JvdXBfd2FpdCIsImdyb3VwX2ludGVydmFsIiwicmVwZWF0X2ludGVydmFsIiwibWF0Y2giLCJtYXRjaF9yZSIsIkFycmF5IiwiaXNBcnJheSIsImdyb3VwX2J5IiwiZXhpc3RpbmciLCJvdmVycmlkZUdyb3VwV2FpdCIsIm92ZXJyaWRlR3JvdXBJbnRlcnZhbCIsIm92ZXJyaWRlUmVwZWF0SW50ZXJ2YWwiLCJhbVJvdXRlIiwic3RyIiwic2VsZWN0YWJsZVZhbHVlcyIsInRlc3QiLCJpZENyZWF0b3IiXSwic291cmNlUm9vdCI6IiJ9