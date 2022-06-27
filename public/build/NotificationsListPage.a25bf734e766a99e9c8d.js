"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NotificationsListPage"],{

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

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavModel": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/alerting/NotificationsListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _strong, _Button, _EmptyListCTA;














const NotificationsListPage = () => {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_6__.useNavModel)('channels');
  const [notifications, setNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const getNotifications = async () => {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/alert-notifications`);
  };

  const [state, fetchNotifications] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(getNotifications);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchNotifications().then(res => {
      setNotifications(res);
    });
  }, [fetchNotifications]);

  const deleteNotification = id => {
    app_core_core__WEBPACK_IMPORTED_MODULE_5__.appEvents.publish(new _types_events__WEBPACK_IMPORTED_MODULE_7__.ShowConfirmModalEvent({
      title: 'Delete',
      text: 'Do you want to delete this notification channel?',
      text2: `Deleting this notification channel will not delete from alerts any references to it`,
      icon: 'trash-alt',
      confirmText: 'Delete',
      yesText: 'Delete',
      onConfirm: async () => {
        deleteNotificationConfirmed(id);
      }
    }));
  };

  const deleteNotificationConfirmed = async id => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`/api/alert-notifications/${id}`);
    const notifications = await fetchNotifications();
    setNotifications(notifications);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [state.error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        children: state.error
      }), !!notifications.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "page-action-bar__spacer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
            icon: "channel-add",
            href: "alerting/notification/new",
            children: "New channel"
          })]
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
          className: "filter-table filter-table--hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                style: {
                  minWidth: '200px'
                },
                children: _strong || (_strong = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
                  children: "Name"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                style: {
                  minWidth: '100px'
                },
                children: "Type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
            children: notifications.map(notification => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                className: "link-td",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                  href: `alerting/notification/${notification.id}/edit`,
                  children: notification.name
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                className: "link-td",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                  href: `alerting/notification/${notification.id}/edit`,
                  children: notification.type
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                className: "text-right",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
                  justify: "flex-end",
                  children: [notification.isDefault && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    disabled: true,
                    variant: "secondary",
                    size: "sm",
                    children: "default"
                  }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "destructive",
                    icon: "times",
                    size: "sm",
                    onClick: () => {
                      deleteNotification(notification.id);
                    }
                  })]
                })
              })]
            }, notification.id))
          })]
        })]
      }), !(notifications.length || state.loading) && (_EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "There are no notification channels defined yet",
        buttonIcon: "channel-add",
        buttonLink: "alerting/notification/new",
        buttonTitle: "Add channel",
        proTip: "You can include images in your alert notifications.",
        proTipLink: "http://docs.grafana.org/alerting/notifications/",
        proTipLinkTitle: "Learn more",
        proTipTarget: "_blank"
      })))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationsListPage);

/***/ }),

/***/ "./public/app/features/alerting/unified/Receivers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
/* harmony import */ var _components_receivers_EditReceiverView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/EditReceiverView.tsx");
/* harmony import */ var _components_receivers_EditTemplateView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/EditTemplateView.tsx");
/* harmony import */ var _components_receivers_GlobalConfigForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/GlobalConfigForm.tsx");
/* harmony import */ var _components_receivers_NewReceiverView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/NewReceiverView.tsx");
/* harmony import */ var _components_receivers_NewTemplateView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/NewTemplateView.tsx");
/* harmony import */ var _components_receivers_ReceiversAndTemplatesView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversAndTemplatesView.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Redirect, _LoadingPlaceholder;























const Receivers = () => {
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_13__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_12__.useAlertManagerSourceName)(alertManagers);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation)();
  const isRoot = location.pathname.endsWith('/alerting/notifications');
  const configRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const {
    result: config,
    loading,
    error
  } = alertManagerSourceName && configRequests[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_17__.initialAsyncRequestState;
  const receiverTypes = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__.useUnifiedAlertingSelector)(state => state.grafanaNotifiers);
  const shouldLoadConfig = isRoot || !config;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (alertManagerSourceName && shouldLoadConfig) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_15__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch, shouldLoadConfig]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_16__.GRAFANA_RULES_SOURCE_NAME && !(receiverTypes.result || receiverTypes.loading || receiverTypes.error)) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_15__.fetchGrafanaNotifiersAction)());
    }
  }, [alertManagerSourceName, dispatch, receiverTypes]);
  const disableAmSelect = !isRoot;

  if (!alertManagerSourceName) {
    return isRoot ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__.AlertingPageWrapper, {
      pageId: "receivers",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_5__.NoAlertManagerWarning, {
        availableAlertManagers: alertManagers
      })
    }) : _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Redirect, {
      to: "/alerting/notifications"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__.AlertingPageWrapper, {
    pageId: "receivers",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__.AlertManagerPicker, {
      current: alertManagerSourceName,
      disabled: disableAmSelect,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager config",
      children: error.message || 'Unknown error.'
    }), loading && !config && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
      text: "loading configuration..."
    }))), config && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_ReceiversAndTemplatesView__WEBPACK_IMPORTED_MODULE_11__.ReceiversAndTemplatesView, {
          config: config,
          alertManagerName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/templates/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_NewTemplateView__WEBPACK_IMPORTED_MODULE_10__.NewTemplateView, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/templates/:name/edit",
        children: ({
          match
        }) => (match === null || match === void 0 ? void 0 : match.params.name) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_EditTemplateView__WEBPACK_IMPORTED_MODULE_7__.EditTemplateView, {
          alertManagerSourceName: alertManagerSourceName,
          config: config,
          templateName: decodeURIComponent(match === null || match === void 0 ? void 0 : match.params.name)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/receivers/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_NewReceiverView__WEBPACK_IMPORTED_MODULE_9__.NewReceiverView, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/receivers/:name/edit",
        children: ({
          match
        }) => (match === null || match === void 0 ? void 0 : match.params.name) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_EditReceiverView__WEBPACK_IMPORTED_MODULE_6__.EditReceiverView, {
          alertManagerSourceName: alertManagerSourceName,
          config: config,
          receiverName: decodeURIComponent(match === null || match === void 0 ? void 0 : match.params.name)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/global-config",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_GlobalConfigForm__WEBPACK_IMPORTED_MODULE_8__.GlobalConfigForm, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(Receivers, {
  style: 'page'
}));

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

/***/ "./public/app/features/alerting/unified/components/receivers/EditReceiverView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditReceiverView": () => (/* binding */ EditReceiverView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx");
/* harmony import */ var _form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;







const EditReceiverView = ({
  config,
  receiverName,
  alertManagerSourceName
}) => {
  var _config$alertmanager_;

  const receiver = (_config$alertmanager_ = config.alertmanager_config.receivers) === null || _config$alertmanager_ === void 0 ? void 0 : _config$alertmanager_.find(({
    name
  }) => name === receiverName);

  if (!receiver) {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "error",
      title: "Receiver not found",
      children: "Sorry, this receiver does not seem to exist."
    }));
  }

  if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_4__.GrafanaReceiverForm, {
      config: config,
      alertManagerSourceName: alertManagerSourceName,
      existing: receiver
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_3__.CloudReceiverForm, {
      config: config,
      alertManagerSourceName: alertManagerSourceName,
      existing: receiver
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/EditTemplateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTemplateView": () => (/* binding */ EditTemplateView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _TemplateForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InfoBox;





const EditTemplateView = ({
  config,
  templateName,
  alertManagerSourceName
}) => {
  var _config$template_file, _config$template_file2;

  const template = (_config$template_file = config.template_files) === null || _config$template_file === void 0 ? void 0 : _config$template_file[templateName];
  const provenance = (_config$template_file2 = config.template_file_provenances) === null || _config$template_file2 === void 0 ? void 0 : _config$template_file2[templateName];

  if (!template) {
    return _InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InfoBox, {
      severity: "error",
      title: "Template not found",
      children: "Sorry, this template does not seem to exit."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TemplateForm__WEBPACK_IMPORTED_MODULE_2__.TemplateForm, {
    alertManagerSourceName: alertManagerSourceName,
    config: config,
    existing: {
      name: templateName,
      content: template
    },
    provenance: provenance
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/GlobalConfigForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalConfigForm": () => (/* binding */ GlobalConfigForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_receiver_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/receiver-form.ts");
/* harmony import */ var _form_fields_OptionField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button, _Button2;

















const defaultValues = {
  smtp_require_tls: true
};
const GlobalConfigForm = ({
  config,
  alertManagerSourceName
}) => {
  var _config$alertmanager_;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading,
    error
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.saveAMConfig);
  const readOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_9__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    // making a copy here beacuse react-hook-form will mutate these, and break if the object is frozen. for real.
    defaultValues: JSON.parse(JSON.stringify(Object.assign({}, defaultValues, (_config$alertmanager_ = config.alertmanager_config.global) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : {})))
  });
  const {
    handleSubmit,
    formState: {
      errors
    }
  } = formAPI;

  const onSubmitCallback = values => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.updateAlertManagerConfigAction)({
      newConfig: Object.assign({}, config, {
        alertmanager_config: Object.assign({}, config.alertmanager_config, {
          global: (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_11__.omitEmptyValues)(values)
        })
      }),
      oldConfig: config,
      alertManagerSourceName,
      successMessage: 'Global config updated.',
      redirectPath: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('/alerting/notifications', alertManagerSourceName)
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formAPI, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmitCallback),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h4", {
        className: styles.heading,
        children: "Global config"
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
        severity: "error",
        title: "Error saving receiver",
        children: error.message || String(error)
      }), _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_8__.globalConfigOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_form_fields_OptionField__WEBPACK_IMPORTED_MODULE_12__.OptionField, {
        readOnly: readOnly,
        defaultValue: defaultValues[option.propertyName],
        option: option,
        error: errors[option.propertyName],
        pathPrefix: ''
      }, option.propertyName)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
            children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
              disabled: true,
              icon: "fa fa-spinner",
              variant: "primary",
              children: "Saving..."
            }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
              type: "submit",
              children: "Save global config"
            })))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
            disabled: loading,
            fill: "outline",
            variant: "secondary",
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('alerting/notifications', alertManagerSourceName),
            children: "Cancel"
          })]
        })
      })]
    })
  }));
};

const getStyles = theme => ({
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(4, 0)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/NewReceiverView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewReceiverView": () => (/* binding */ NewReceiverView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx");
/* harmony import */ var _form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const NewReceiverView = ({
  alertManagerSourceName,
  config
}) => {
  if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_1__.GRAFANA_RULES_SOURCE_NAME) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_3__.GrafanaReceiverForm, {
      alertManagerSourceName: alertManagerSourceName,
      config: config
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_2__.CloudReceiverForm, {
      alertManagerSourceName: alertManagerSourceName,
      config: config
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/NewTemplateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTemplateView": () => (/* binding */ NewTemplateView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _TemplateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const NewTemplateView = ({
  config,
  alertManagerSourceName
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TemplateForm__WEBPACK_IMPORTED_MODULE_1__.TemplateForm, {
    config: config,
    alertManagerSourceName: alertManagerSourceName
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/ReceiversAndTemplatesView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiversAndTemplatesView": () => (/* binding */ ReceiversAndTemplatesView)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _ReceiversTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversTable.tsx");
/* harmony import */ var _TemplatesTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;













const ReceiversAndTemplatesView = ({
  config,
  alertManagerName
}) => {
  const isCloud = alertManagerName !== _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.isVanillaPrometheusAlertManagerDataSource)(alertManagerName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [!isVanillaAM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TemplatesTable__WEBPACK_IMPORTED_MODULE_8__.TemplatesTable, {
      config: config,
      alertManagerName: alertManagerName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ReceiversTable__WEBPACK_IMPORTED_MODULE_7__.ReceiversTable, {
      config: config,
      alertManagerName: alertManagerName
    }), isCloud && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_6__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.AlertingNotificationsExternalWrite],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        className: styles.section,
        severity: "info",
        title: "Global config for contact points",
        children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          children: "For each external Alertmanager you can define global settings, like server addresses, usernames and password, for all the supported contact points."
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.makeAMLink)('alerting/notifications/global-config', alertManagerName),
          variant: "secondary",
          children: isVanillaAM ? 'View global config' : 'Edit global config'
        })]
      })
    })]
  });
};

const getStyles = theme => ({
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(4)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiversSection": () => (/* binding */ ReceiversSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/0/cache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const ReceiversSection = ({
  className,
  title,
  description,
  addButtonLabel,
  addButtonTo,
  children,
  showButton = true
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.heading, className),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: styles.description,
          children: description
        })]
      }), showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: addButtonTo,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "button",
          icon: "plus",
          children: addButtonLabel
        })
      })]
    }), children]
  });
};

const getStyles = theme => ({
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/ReceiversTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiversTable": () => (/* binding */ ReceiversTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_receivers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/receivers.ts");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _ReceiversSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _col, _col2, _col3, _th, _th2, _th3, _td, _ProvisioningBadge, _p;





















const ReceiversTable = ({
  config,
  alertManagerName
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_8__.getAlertTableStyles);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_11__.isVanillaPrometheusAlertManagerDataSource)(alertManagerName);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_9__.getNotificationsPermissions)(alertManagerName);
  const grafanaNotifiers = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.grafanaNotifiers); // receiver name slated for deletion. If this is set, a confirmation modal is shown. If user approves, this receiver is deleted

  const [receiverToDelete, setReceiverToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [showCannotDeleteReceiverModal, setShowCannotDeleteReceiverModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onClickDeleteReceiver = receiverName => {
    if ((0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_10__.isReceiverUsed)(receiverName, config)) {
      setShowCannotDeleteReceiverModal(true);
    } else {
      setReceiverToDelete(receiverName);
    }
  };

  const deleteReceiver = () => {
    if (receiverToDelete) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.deleteReceiverAction)(receiverToDelete, alertManagerName));
    }

    setReceiverToDelete(undefined);
  };

  const rows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(receiver => {
      var _grafanaNotifiers$res, _receiver$grafana_man;

      return {
        name: receiver.name,
        types: Object.entries((0,_utils_receivers__WEBPACK_IMPORTED_MODULE_13__.extractNotifierTypeCounts)(receiver, (_grafanaNotifiers$res = grafanaNotifiers.result) !== null && _grafanaNotifiers$res !== void 0 ? _grafanaNotifiers$res : [])).map(([type, count]) => {
          if (count > 1) {
            return `${type} (${count})`;
          }

          return type;
        }),
        provisioned: (_receiver$grafana_man = receiver.grafana_managed_receiver_configs) === null || _receiver$grafana_man === void 0 ? void 0 : _receiver$grafana_man.some(receiver => receiver.provenance)
      };
    })) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, grafanaNotifiers.result]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ReceiversSection__WEBPACK_IMPORTED_MODULE_16__.ReceiversSection, {
    className: styles.section,
    title: "Contact points",
    description: "Define where the notifications will be sent to, for example email or Slack.",
    showButton: !isVanillaAM && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(permissions.create),
    addButtonLabel: "New contact point",
    addButtonTo: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)('/alerting/notifications/receivers/new', alertManagerName),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("table", {
      className: tableStyles.table,
      "data-testid": "receivers-table",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("colgroup", {
        children: [_col || (_col = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("col", {})), _col2 || (_col2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("col", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
          actions: [permissions.update, permissions.delete],
          children: _col3 || (_col3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("col", {}))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("th", {
            children: "Contact point name"
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("th", {
            children: "Type"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
            actions: [permissions.update, permissions.delete],
            children: _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("th", {
              children: "Actions"
            }))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("tbody", {
        children: [!rows.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("tr", {
          className: tableStyles.evenRow,
          children: _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("td", {
            colSpan: 3,
            children: "No receivers defined."
          }))
        }), rows.map((receiver, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("tr", {
          className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("td", {
            children: [receiver.name, " ", receiver.provisioned && (_ProvisioningBadge || (_ProvisioningBadge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_14__.ProvisioningBadge, {})))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("td", {
            children: receiver.types.join(', ')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
            actions: [permissions.update, permissions.delete],
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("td", {
              className: tableStyles.actionsCell,
              children: [!isVanillaAM && !receiver.provisioned && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
                  actions: [permissions.update],
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
                    "aria-label": "Edit",
                    "data-testid": "edit",
                    to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)(`/alerting/notifications/receivers/${encodeURIComponent(receiver.name)}/edit`, alertManagerName),
                    tooltip: "Edit contact point",
                    icon: "pen"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
                  actions: [permissions.delete],
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
                    onClick: () => onClickDeleteReceiver(receiver.name),
                    tooltip: "Delete contact point",
                    icon: "trash-alt"
                  })
                })]
              }), (isVanillaAM || receiver.provisioned) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
                actions: [permissions.update],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
                  "data-testid": "view",
                  to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)(`/alerting/notifications/receivers/${encodeURIComponent(receiver.name)}/edit`, alertManagerName),
                  tooltip: "View contact point",
                  icon: "file-alt"
                })
              })]
            })
          })]
        }, receiver.name))]
      })]
    }), !!showCannotDeleteReceiverModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      isOpen: true,
      title: "Cannot delete contact point",
      onDismiss: () => setShowCannotDeleteReceiverModal(false),
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
        children: "Contact point cannot be deleted because it is used in more policies. Please update or delete these policies first."
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          onClick: () => setShowCannotDeleteReceiverModal(false),
          fill: "outline",
          children: "Close"
        })
      })]
    }), !!receiverToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, {
      isOpen: true,
      title: "Delete contact point",
      body: `Are you sure you want to delete contact point "${receiverToDelete}"?`,
      confirmText: "Yes, delete",
      onConfirm: deleteReceiver,
      onDismiss: () => setReceiverToDelete(undefined)
    })]
  });
};

const getStyles = theme => ({
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(4)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateForm": () => (/* binding */ TemplateForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/templates.ts");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button, _Button2;















const defaults = Object.freeze({
  name: '',
  content: ''
});
const TemplateForm = ({
  existing,
  alertManagerSourceName,
  config,
  provenance
}) => {
  var _data, _errors$name, _errors$name2, _errors$content, _errors$content2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading,
    error
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.saveAMConfig);

  const submit = values => {
    var _config$alertmanager_;

    // wrap content in "define" if it's not already wrapped, in case user did not do it/
    // it's not obvious that this is needed for template to work
    const content = (0,_utils_templates__WEBPACK_IMPORTED_MODULE_9__.ensureDefine)(values.name, values.content); // add new template to template map

    const template_files = Object.assign({}, config.template_files, {
      [values.name]: content
    }); // delete existing one (if name changed, otherwise it was overwritten in previous step)

    if (existing && existing.name !== values.name) {
      delete template_files[existing.name];
    } // make sure name for the template is configured on the alertmanager config object


    const templates = [...((_config$alertmanager_ = config.alertmanager_config.templates) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : []).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name)), values.name];
    const newConfig = {
      template_files,
      alertmanager_config: Object.assign({}, config.alertmanager_config, {
        templates
      })
    };
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.updateAlertManagerConfigAction)({
      alertManagerSourceName,
      newConfig,
      oldConfig: config,
      successMessage: 'Template saved.',
      redirectPath: '/alerting/notifications'
    }));
  };

  const {
    handleSubmit,
    register,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onSubmit',
    defaultValues: existing !== null && existing !== void 0 ? existing : defaults
  });

  const validateNameIsUnique = name => {
    return !config.template_files[name] || (existing === null || existing === void 0 ? void 0 : existing.name) === name ? true : 'Another template with this name already exists.';
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
    onSubmit: handleSubmit(submit),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h4", {
      children: existing ? 'Edit message template' : 'Create message template'
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      severity: "error",
      title: "Error saving template",
      children: error.message || (error === null || error === void 0 ? void 0 : (_data = error.data) === null || _data === void 0 ? void 0 : _data.message) || String(error)
    }), provenance && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_10__.ProvisioningAlert, {
      resource: _Provisioning__WEBPACK_IMPORTED_MODULE_10__.ProvisionedResource.Template
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FieldSet, {
      disabled: Boolean(provenance),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: "Template name",
        error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
        invalid: !!((_errors$name2 = errors.name) !== null && _errors$name2 !== void 0 && _errors$name2.message),
        required: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register('name', {
          required: {
            value: true,
            message: 'Required.'
          },
          validate: {
            nameIsUnique: validateNameIsUnique
          }
        }), {
          placeholder: "Give your template a name",
          width: 42,
          autoFocus: true
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        description: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
          children: ["You can use the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
            href: "https://pkg.go.dev/text/template?utm_source=godoc",
            target: "__blank",
            rel: "noreferrer",
            className: styles.externalLink,
            children: "Go templating language"
          }), ".", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
            href: "https://prometheus.io/blog/2016/03/03/custom-alertmanager-templates/",
            target: "__blank",
            rel: "noreferrer",
            className: styles.externalLink,
            children: "More info about alertmanager templates"
          })]
        }),
        label: "Content",
        error: errors === null || errors === void 0 ? void 0 : (_errors$content = errors.content) === null || _errors$content === void 0 ? void 0 : _errors$content.message,
        invalid: !!((_errors$content2 = errors.content) !== null && _errors$content2 !== void 0 && _errors$content2.message),
        required: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextArea, Object.assign({}, register('content', {
          required: {
            value: true,
            message: 'Required.'
          }
        }), {
          className: styles.textarea,
          placeholder: "Message",
          rows: 12
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.buttons,
        children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          disabled: true,
          icon: "fa fa-spinner",
          variant: "primary",
          children: "Saving..."
        }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          type: "submit",
          variant: "primary",
          children: "Save template"
        }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
          disabled: loading,
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)('alerting/notifications', alertManagerSourceName),
          variant: "secondary",
          type: "button",
          fill: "outline",
          children: "Cancel"
        })]
      })]
    })]
  });
};

const getStyles = theme => ({
  externalLink: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    text-decoration: underline;
  `,
  buttons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  textarea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 758px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesTable": () => (/* binding */ TemplatesTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _ReceiversSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _col, _col2, _th, _th2, _th3, _td, _ProvisioningBadge, _td2;

















const TemplatesTable = ({
  config,
  alertManagerName
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [expandedTemplates, setExpandedTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_6__.getAlertTableStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_7__.getNotificationsPermissions)(alertManagerName);
  const templateRows = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const templates = Object.entries(config.template_files);
    return templates.map(([name, template]) => {
      var _config$template_file;

      return {
        name,
        template,
        provenance: ((_config$template_file = config.template_file_provenances) !== null && _config$template_file !== void 0 ? _config$template_file : {})[name]
      };
    });
  }, [config]);
  const [templateToDelete, setTemplateToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const deleteTemplate = () => {
    if (templateToDelete) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__.deleteTemplateAction)(templateToDelete, alertManagerName));
    }

    setTemplateToDelete(undefined);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ReceiversSection__WEBPACK_IMPORTED_MODULE_13__.ReceiversSection, {
    title: "Message templates",
    description: "Templates construct the messages that get sent to the contact points.",
    addButtonLabel: "New template",
    addButtonTo: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)('/alerting/notifications/templates/new', alertManagerName),
    showButton: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(permissions.create),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("table", {
      className: tableStyles.table,
      "data-testid": "templates-table",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("colgroup", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("col", {
          className: tableStyles.colExpand
        }), _col || (_col = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("col", {})), _col2 || (_col2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("col", {}))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
            children: "Template"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
            actions: [permissions.update, permissions.delete],
            children: _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
              children: "Actions"
            }))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tbody", {
        children: [!templateRows.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("tr", {
          className: tableStyles.evenRow,
          children: _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
            colSpan: 3,
            children: "No templates defined."
          }))
        }), templateRows.map(({
          name,
          template,
          provenance
        }, idx) => {
          const isExpanded = !!expandedTemplates[name];
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
              className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_9__.CollapseToggle, {
                  isCollapsed: !expandedTemplates[name],
                  onToggle: () => setExpandedTemplates(Object.assign({}, expandedTemplates, {
                    [name]: !isExpanded
                  }))
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("td", {
                children: [name, " ", provenance && (_ProvisioningBadge || (_ProvisioningBadge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_11__.ProvisioningBadge, {})))]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("td", {
                className: tableStyles.actionsCell,
                children: [provenance && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_12__.ActionIcon, {
                  to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)(`/alerting/notifications/templates/${encodeURIComponent(name)}/edit`, alertManagerName),
                  tooltip: "view template",
                  icon: "file-alt"
                }), !provenance && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
                  actions: [permissions.update, permissions.delete],
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
                    actions: [permissions.update],
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_12__.ActionIcon, {
                      to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)(`/alerting/notifications/templates/${encodeURIComponent(name)}/edit`, alertManagerName),
                      tooltip: "edit template",
                      icon: "pen"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
                    actions: [permissions.delete],
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_12__.ActionIcon, {
                      onClick: () => setTemplateToDelete(name),
                      tooltip: "delete template",
                      icon: "trash-alt"
                    })
                  })]
                })]
              })]
            }, name), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
              className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
              children: [_td2 || (_td2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
                colSpan: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_10__.DetailsField, {
                  label: "Description",
                  horizontal: true,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("pre", {
                    children: template
                  })
                })
              })]
            })]
          }, name);
        })]
      })]
    }), !!templateToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
      isOpen: true,
      title: "Delete template",
      body: `Are you sure you want to delete template "${templateToDelete}"?`,
      confirmText: "Yes, delete",
      onConfirm: deleteTemplate,
      onDismiss: () => setTemplateToDelete(undefined)
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/ChannelOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelOptions": () => (/* binding */ ChannelOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _fields_OptionField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function ChannelOptions({
  defaultValues,
  selectedChannelOptions,
  onResetSecureField,
  secureFields,
  errors,
  pathPrefix = '',
  readOnly = false
}) {
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const currentFormValues = watch(); // react hook form types ARE LYING!

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: selectedChannelOptions.map((option, index) => {
      var _ref, _defaultValues$settin;

      const key = `${option.label}-${index}`; // Some options can be dependent on other options, this determines what is selected in the dependency options
      // I think this needs more thought.

      const selectedOptionValue = currentFormValues[`${pathPrefix}settings.${option.showWhen.field}`];

      if (option.showWhen.field && selectedOptionValue !== option.showWhen.is) {
        return null;
      }

      if (secureFields && secureFields[option.propertyName]) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: option.label,
          description: option.description || undefined,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
            readOnly: true,
            value: "Configured",
            suffix: readOnly ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: () => onResetSecureField(option.propertyName),
              fill: "text",
              type: "button",
              size: "sm",
              children: "Clear"
            })
          })
        }, key);
      }

      const error = (_ref = option.secure ? errors === null || errors === void 0 ? void 0 : errors.secureSettings : errors === null || errors === void 0 ? void 0 : errors.settings) === null || _ref === void 0 ? void 0 : _ref[option.propertyName];
      const defaultValue = defaultValues === null || defaultValues === void 0 ? void 0 : (_defaultValues$settin = defaultValues.settings) === null || _defaultValues$settin === void 0 ? void 0 : _defaultValues$settin[option.propertyName];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fields_OptionField__WEBPACK_IMPORTED_MODULE_3__.OptionField, {
        defaultValue: defaultValue,
        readOnly: readOnly,
        error: error,
        pathPrefix: pathPrefix,
        pathSuffix: option.secure ? 'secureSettings.' : 'settings.',
        option: option
      }, key);
    })
  });
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/ChannelSubForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelSubForm": () => (/* binding */ ChannelSubForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _ChannelOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ChannelOptions.tsx");
/* harmony import */ var _CollapsibleSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref", "onChange"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function ChannelSubForm({
  defaultValues,
  pathPrefix,
  onDuplicate,
  onDelete,
  onTest,
  notifiers,
  errors,
  secureFields,
  commonSettingsComponent: CommonSettingsComponent,
  readOnly = false
}) {
  var _watch;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  const name = fieldName => `${pathPrefix}${fieldName}`;

  const {
    control,
    watch,
    register,
    trigger,
    formState,
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const selectedType = (_watch = watch(name('type'))) !== null && _watch !== void 0 ? _watch : defaultValues.type; // nope, setting "default" does not work at all.

  const {
    loading: testingReceiver
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.testReceivers);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    register(`${pathPrefix}.__id`);
    /* Need to manually register secureFields or else they'll
     be lost when testing a contact point */

    register(`${pathPrefix}.secureFields`);
  }, [register, pathPrefix]);
  const [_secureFields, setSecureFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(secureFields !== null && secureFields !== void 0 ? secureFields : {});

  const onResetSecureField = key => {
    if (_secureFields[key]) {
      const updatedSecureFields = Object.assign({}, secureFields);
      delete updatedSecureFields[key];
      setSecureFields(updatedSecureFields);
      setValue(`${pathPrefix}.secureFields`, updatedSecureFields);
    }
  };

  const typeOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => notifiers.map(({
    name,
    type
  }) => ({
    label: name,
    value: type
  })).sort((a, b) => a.label.localeCompare(b.label)), [notifiers]);

  const handleTest = async () => {
    await trigger();
    const isValid = Object.keys(formState.errors).length === 0;

    if (isValid && onTest) {
      onTest();
    }
  };

  const notifier = notifiers.find(({
    type
  }) => type === selectedType); // if there are mandatory options defined, optional options will be hidden by a collapse
  // if there aren't mandatory options, all options will be shown without collapse

  const mandatoryOptions = notifier === null || notifier === void 0 ? void 0 : notifier.options.filter(o => o.required);
  const optionalOptions = notifier === null || notifier === void 0 ? void 0 : notifier.options.filter(o => !o.required);
  const contactPointTypeInputId = `contact-point-type-${pathPrefix}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": "item-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.topRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "Contact point type",
          htmlFor: contactPointTypeInputId,
          "data-testid": `${pathPrefix}type`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
            name: name('type'),
            defaultValue: defaultValues.type,
            render: _ref => {
              let {
                field: {
                  onChange
                }
              } = _ref,
                  field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, Object.assign({
                disabled: readOnly,
                inputId: contactPointTypeInputId
              }, field, {
                width: 37,
                options: typeOptions,
                onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
              }));
            },
            control: control,
            rules: {
              required: true
            }
          })
        })
      }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.buttons,
        children: [onTest && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          disabled: testingReceiver,
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => handleTest(),
          icon: testingReceiver ? 'fa fa-spinner' : 'message',
          children: "Test"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => onDuplicate(),
          icon: "copy",
          children: "Duplicate"
        }), onDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          "data-testid": `${pathPrefix}delete-button`,
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => onDelete(),
          icon: "trash-alt",
          children: "Delete"
        })]
      })]
    }), notifier && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.innerContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChannelOptions__WEBPACK_IMPORTED_MODULE_5__.ChannelOptions, {
        defaultValues: defaultValues,
        selectedChannelOptions: mandatoryOptions !== null && mandatoryOptions !== void 0 && mandatoryOptions.length ? mandatoryOptions : optionalOptions,
        secureFields: _secureFields,
        errors: errors,
        onResetSecureField: onResetSecureField,
        pathPrefix: pathPrefix,
        readOnly: readOnly
      }), !!(mandatoryOptions !== null && mandatoryOptions !== void 0 && mandatoryOptions.length && optionalOptions !== null && optionalOptions !== void 0 && optionalOptions.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_CollapsibleSection__WEBPACK_IMPORTED_MODULE_6__.CollapsibleSection, {
        label: `Optional ${notifier.name} settings`,
        children: [notifier.info !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
          title: "",
          severity: "info",
          children: notifier.info
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChannelOptions__WEBPACK_IMPORTED_MODULE_5__.ChannelOptions, {
          defaultValues: defaultValues,
          selectedChannelOptions: optionalOptions,
          secureFields: _secureFields,
          onResetSecureField: onResetSecureField,
          errors: errors,
          pathPrefix: pathPrefix,
          readOnly: readOnly
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CollapsibleSection__WEBPACK_IMPORTED_MODULE_6__.CollapsibleSection, {
        label: "Notification settings",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(CommonSettingsComponent, {
          pathPrefix: pathPrefix,
          readOnly: readOnly
        })
      })]
    })]
  });
}

const getStyles = theme => ({
  buttons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  innerContent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 536px;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(2, 0)};
    padding: ${theme.spacing(1)};
    border: solid 1px ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
    max-width: ${theme.breakpoints.values.xl}${theme.breakpoints.unit};
  `,
  topRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  channelSettingsHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/CloudCommonChannelSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudCommonChannelSettings": () => (/* binding */ CloudCommonChannelSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const CloudCommonChannelSettings = ({
  pathPrefix,
  className,
  readOnly = false
}) => {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      disabled: readOnly,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, Object.assign({}, register(`${pathPrefix}sendResolved`), {
        label: "Send resolved",
        disabled: readOnly,
        description: "Whether or not to notify about resolved alerts."
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudReceiverForm": () => (/* binding */ CloudReceiverForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/receiver-form.ts");
/* harmony import */ var _CloudCommonChannelSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CloudCommonChannelSettings.tsx");
/* harmony import */ var _ReceiverForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;













const defaultChannelValues = Object.freeze({
  __id: '',
  sendResolved: true,
  secureSettings: {},
  settings: {},
  secureFields: {},
  type: 'email'
});
const CloudReceiverForm = ({
  existing,
  alertManagerSourceName,
  config
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName); // transform receiver DTO to form values

  const [existingValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!existing) {
      return [undefined, {}];
    }

    return (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.cloudReceiverToFormValues)(existing, _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__.cloudNotifierTypes);
  }, [existing]);

  const onSubmit = values => {
    const newReceiver = (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.formValuesToCloudReceiver)(values, defaultChannelValues);
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_3__.updateAlertManagerConfigAction)({
      newConfig: (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.updateConfigWithReceiver)(config, newReceiver, existing === null || existing === void 0 ? void 0 : existing.name),
      oldConfig: config,
      alertManagerSourceName,
      successMessage: existing ? 'Contact point updated.' : 'Contact point created.',
      redirectPath: '/alerting/notifications'
    }));
  };

  const takenReceiverNames = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(({
      name
    }) => name).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name))) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, existing]);
  const readOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [!isVanillaAM && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      title: "Info",
      severity: "info",
      children: "Note that empty string values will be replaced with global defaults where appropriate."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ReceiverForm__WEBPACK_IMPORTED_MODULE_8__.ReceiverForm, {
      readOnly: readOnly,
      config: config,
      onSubmit: onSubmit,
      initialValues: existingValue,
      notifiers: _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__.cloudNotifierTypes,
      alertManagerSourceName: alertManagerSourceName,
      defaultItem: defaultChannelValues,
      takenReceiverNames: takenReceiverNames,
      commonSettingsComponent: _CloudCommonChannelSettings__WEBPACK_IMPORTED_MODULE_7__.CloudCommonChannelSettings
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapsibleSection": () => (/* binding */ CollapsibleSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const CollapsibleSection = ({
  label,
  description,
  children,
  className,
  size = 'xl'
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.wrapper, className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.heading,
      onClick: toggleCollapse,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_3__.CollapseToggle, {
        className: styles.caret,
        size: size,
        onToggle: toggleCollapse,
        isCollapsed: isCollapsed
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
        children: label
      })]
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: styles.description,
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: isCollapsed ? styles.hidden : undefined,
      children: children
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
    padding-bottom: ${theme.spacing(1)};
  `,
  caret: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: -${theme.spacing(0.5)}; // make it align with fields despite icon size
  `,
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    cursor: pointer;
    h6 {
      display: inline-block;
    }
  `,
  hidden: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: none;
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.fontWeightRegular};
    margin: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/GrafanaCommonChannelSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaCommonChannelSettings": () => (/* binding */ GrafanaCommonChannelSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const GrafanaCommonChannelSettings = ({
  pathPrefix,
  className,
  readOnly = false
}) => {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, Object.assign({}, register(`${pathPrefix}disableResolveMessage`), {
        label: "Disable resolved message",
        description: "Disable the resolve message [OK] that is sent when alerting state returns to false",
        disabled: readOnly
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaReceiverForm": () => (/* binding */ GrafanaReceiverForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/receiver-form.ts");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _GrafanaCommonChannelSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GrafanaCommonChannelSettings.tsx");
/* harmony import */ var _ReceiverForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx");
/* harmony import */ var _TestContactPointModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/TestContactPointModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder;















const defaultChannelValues = Object.freeze({
  __id: '',
  secureSettings: {},
  settings: {},
  secureFields: {},
  disableResolveMessage: false,
  type: 'email'
});
const GrafanaReceiverForm = ({
  existing,
  alertManagerSourceName,
  config
}) => {
  var _existing$grafana_man;

  const grafanaNotifiers = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.grafanaNotifiers);
  const [testChannelValues, setTestChannelValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(grafanaNotifiers.result || grafanaNotifiers.loading)) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.fetchGrafanaNotifiersAction)());
    }
  }, [grafanaNotifiers, dispatch]); // transform receiver DTO to form values

  const [existingValue, id2original] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!existing || !grafanaNotifiers.result) {
      return [undefined, {}];
    }

    return (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.grafanaReceiverToFormValues)(existing, grafanaNotifiers.result);
  }, [existing, grafanaNotifiers.result]);

  const onSubmit = values => {
    const newReceiver = (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.formValuesToGrafanaReceiver)(values, id2original, defaultChannelValues);
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.updateAlertManagerConfigAction)({
      newConfig: (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.updateConfigWithReceiver)(config, newReceiver, existing === null || existing === void 0 ? void 0 : existing.name),
      oldConfig: config,
      alertManagerSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME,
      successMessage: existing ? 'Contact point updated.' : 'Contact point created',
      redirectPath: '/alerting/notifications'
    }));
  };

  const onTestChannel = values => {
    setTestChannelValues(values);
  };

  const testNotification = alert => {
    if (testChannelValues) {
      const existing = id2original[testChannelValues.__id];
      const chan = (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.formChannelValuesToGrafanaChannelConfig)(testChannelValues, defaultChannelValues, 'test', existing);
      const payload = {
        alertManagerSourceName,
        receivers: [{
          name: 'test',
          grafana_managed_receiver_configs: [chan]
        }],
        alert
      };
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.testReceiversAction)(payload));
    }
  };

  const takenReceiverNames = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(({
      name
    }) => name).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name))) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, existing]); // if any receivers in the contact point have a "provenance", the entire contact point should be readOnly

  const hasProvisionedItems = existing ? ((_existing$grafana_man = existing.grafana_managed_receiver_configs) !== null && _existing$grafana_man !== void 0 ? _existing$grafana_man : []).some(item => Boolean(item.provenance)) : false;
  const readOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName) || hasProvisionedItems;

  if (grafanaNotifiers.result) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [hasProvisionedItems && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_7__.ProvisioningAlert, {
        resource: _Provisioning__WEBPACK_IMPORTED_MODULE_7__.ProvisionedResource.ContactPoint
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ReceiverForm__WEBPACK_IMPORTED_MODULE_9__.ReceiverForm, {
        readOnly: readOnly,
        config: config,
        onSubmit: onSubmit,
        initialValues: existingValue,
        onTestChannel: onTestChannel,
        notifiers: grafanaNotifiers.result,
        alertManagerSourceName: alertManagerSourceName,
        defaultItem: defaultChannelValues,
        takenReceiverNames: takenReceiverNames,
        commonSettingsComponent: _GrafanaCommonChannelSettings__WEBPACK_IMPORTED_MODULE_8__.GrafanaCommonChannelSettings
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_TestContactPointModal__WEBPACK_IMPORTED_MODULE_10__.TestContactPointModal, {
        onDismiss: () => setTestChannelValues(undefined),
        isOpen: !!testChannelValues,
        onTest: alert => testNotification(alert)
      })]
    });
  } else {
    return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
      text: "Loading notifiers..."
    }));
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiverForm": () => (/* binding */ ReceiverForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _ChannelSubForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ChannelSubForm.tsx");
/* harmony import */ var _fields_DeletedSubform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/DeletedSubform.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Button, _Button2;















function ReceiverForm({
  config,
  initialValues,
  defaultItem,
  notifiers,
  alertManagerSourceName,
  onSubmit,
  onTestChannel,
  takenReceiverNames,
  commonSettingsComponent,
  readOnly
}) {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const defaultValues = initialValues || {
    name: '',
    items: [Object.assign({}, defaultItem, {
      __id: String(Math.random())
    })]
  };
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    // making a copy here beacuse react-hook-form will mutate these, and break if the object is frozen. for real.
    defaultValues: JSON.parse(JSON.stringify(defaultValues))
  });
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.saveAMConfig);
  const {
    handleSubmit,
    register,
    formState: {
      errors
    },
    getValues
  } = formAPI;
  const {
    fields,
    append,
    remove
  } = (0,_hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_6__.useControlledFieldArray)({
    name: 'items',
    formAPI,
    softDelete: true
  });
  const validateNameIsAvailable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(name => takenReceiverNames.map(name => name.trim().toLowerCase()).includes(name.trim().toLowerCase()) ? 'Another receiver with this name already exists.' : true, [takenReceiverNames]);

  const submitCallback = values => {
    onSubmit(Object.assign({}, values, {
      items: values.items.filter(item => !item.__deleted)
    }));
  };

  const onInvalid = () => {
    notifyApp.error('There are errors in the form. Please correct them and try again!');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formAPI, {
    children: [!config.alertmanager_config.route && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      severity: "warning",
      title: "Attention",
      children: "Because there is no default policy configured yet, this contact point will automatically be set as default."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
      onSubmit: handleSubmit(submitCallback, onInvalid),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h4", {
        className: styles.heading,
        children: readOnly ? 'Contact point' : initialValues ? 'Update contact point' : 'Create contact point'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
        label: "Name",
        invalid: !!errors.name,
        error: errors.name && errors.name.message,
        required: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
          readOnly: readOnly,
          id: "name"
        }, register('name', {
          required: 'Name is required',
          validate: {
            nameIsAvailable: validateNameIsAvailable
          }
        }), {
          width: 39,
          placeholder: "Name"
        }))
      }), fields.map((field, index) => {
        var _errors$items;

        const pathPrefix = `items.${index}.`;

        if (field.__deleted) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fields_DeletedSubform__WEBPACK_IMPORTED_MODULE_10__.DeletedSubForm, {
            pathPrefix: pathPrefix
          }, field.__id);
        }

        const initialItem = initialValues === null || initialValues === void 0 ? void 0 : initialValues.items.find(({
          __id
        }) => __id === field.__id);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ChannelSubForm__WEBPACK_IMPORTED_MODULE_9__.ChannelSubForm, {
          defaultValues: field,
          onDuplicate: () => {
            const currentValues = getValues().items[index];
            append(Object.assign({}, currentValues, {
              __id: String(Math.random())
            }));
          },
          onTest: onTestChannel ? () => {
            const currentValues = getValues().items[index];
            onTestChannel(currentValues);
          } : undefined,
          onDelete: () => remove(index),
          pathPrefix: pathPrefix,
          notifiers: notifiers,
          secureFields: initialItem === null || initialItem === void 0 ? void 0 : initialItem.secureFields,
          errors: errors === null || errors === void 0 ? void 0 : (_errors$items = errors.items) === null || _errors$items === void 0 ? void 0 : _errors$items[index],
          commonSettingsComponent: commonSettingsComponent,
          readOnly: readOnly
        }, field.__id);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          type: "button",
          icon: "plus",
          variant: "secondary",
          onClick: () => append(Object.assign({}, defaultItem, {
            __id: String(Math.random())
          })),
          children: "New contact point type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: styles.buttons,
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              disabled: true,
              icon: "fa fa-spinner",
              variant: "primary",
              children: "Saving..."
            }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              children: "Save contact point"
            })))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            disabled: loading,
            fill: "outline",
            variant: "secondary",
            "data-testid": "cancel-button",
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)('alerting/notifications', alertManagerSourceName),
            children: "Cancel"
          })]
        })]
      })]
    })]
  }));
}

const getStyles = theme => ({
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(4, 0)};
  `,
  buttons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(4)};

    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/TestContactPointModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestContactPointModal": () => (/* binding */ TestContactPointModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rule_editor_AnnotationsField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx");
/* harmony import */ var _rule_editor_LabelsField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _strong, _AnnotationsField, _LabelsField, _Modal$ButtonRow;










var NotificationType;

(function (NotificationType) {
  NotificationType["predefined"] = "Predefined";
  NotificationType["custom"] = "Custom";
})(NotificationType || (NotificationType = {}));

const notificationOptions = Object.values(NotificationType).map(value => ({
  label: value,
  value: value
}));
const defaultValues = {
  annotations: [{
    key: '',
    value: ''
  }],
  labels: [{
    key: '',
    value: ''
  }]
};
const TestContactPointModal = ({
  isOpen,
  onDismiss,
  onTest
}) => {
  const [notificationType, setNotificationType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(NotificationType.predefined);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues,
    mode: 'onBlur'
  });

  const onSubmit = data => {
    if (notificationType === NotificationType.custom) {
      const alert = {
        annotations: data.annotations.filter(({
          key,
          value
        }) => !!key && !!value).reduce((acc, {
          key,
          value
        }) => {
          return Object.assign({}, acc, {
            [key]: value
          });
        }, {}),
        labels: data.labels.filter(({
          key,
          value
        }) => !!key && !!value).reduce((acc, {
          key,
          value
        }) => {
          return Object.assign({}, acc, {
            [key]: value
          });
        }, {})
      };
      onTest(alert);
    } else {
      onTest();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    onDismiss: onDismiss,
    isOpen: isOpen,
    title: 'Test contact point',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.section,
      children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
        children: "Notification message"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
        options: notificationOptions,
        value: notificationType,
        onChange: value => setNotificationType(value)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formMethods, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
        onSubmit: formMethods.handleSubmit(onSubmit),
        children: [notificationType === NotificationType.predefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.section,
          children: ["You will send a test notification that uses a predefined alert. If you have defined a custom template or message, for better results switch to ", _strong || (_strong = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
            children: "custom"
          })), " notification message, from above."]
        }), notificationType === NotificationType.custom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.section,
            children: "You will send a test notification that uses the annotations defined below. This is a good option if you use custom templates and messages."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.section,
            children: _AnnotationsField || (_AnnotationsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_rule_editor_AnnotationsField__WEBPACK_IMPORTED_MODULE_4__["default"], {}))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.section,
            children: _LabelsField || (_LabelsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_rule_editor_LabelsField__WEBPACK_IMPORTED_MODULE_5__["default"], {}))
          })]
        }), _Modal$ButtonRow || (_Modal$ButtonRow = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "submit",
            children: "Send test notification"
          })
        }))]
      })
    }))]
  });
};

const getStyles = theme => ({
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: ${theme.spacing(1)};
  `,
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/DeletedSubform.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedSubForm": () => (/* binding */ DeletedSubForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




// we can't drop the deleted item from list entirely because
// there will be a rece condition with register/unregister calls in react-hook-form
// and fields will become randomly erroneously unregistered
function DeletedSubForm({
  pathPrefix
}) {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)(); // required to be registered or react-hook-form will randomly drop the values when it feels like it

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    register(`${pathPrefix}.__id`);
    register(`${pathPrefix}.__deleted`);
  }, [register, pathPrefix]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {});
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/KeyValueMapInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueMapInput": () => (/* binding */ KeyValueMapInput)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3;







const KeyValueMapInput = ({
  value,
  onChange,
  readOnly = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [pairs, setPairs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(recordToPairs(value));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setPairs(recordToPairs(value)), [value]);

  const emitChange = pairs => {
    onChange(pairsToRecord(pairs));
  };

  const deleteItem = index => {
    const newPairs = pairs.slice();
    const removed = newPairs.splice(index, 1)[0];
    setPairs(newPairs);

    if (removed[0]) {
      emitChange(newPairs);
    }
  };

  const updatePair = (values, index) => {
    const old = pairs[index];
    const newPairs = pairs.map((pair, i) => i === index ? values : pair);
    setPairs(newPairs);

    if (values[0] || old[0]) {
      emitChange(newPairs);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [!!pairs.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
      className: styles.table,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            children: "Name"
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            children: "Value"
          })), !readOnly && (_th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {})))]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
        children: pairs.map(([key, value], index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              readOnly: readOnly,
              value: key,
              onChange: e => updatePair([e.currentTarget.value, value], index)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              readOnly: readOnly,
              value: value,
              onChange: e => updatePair([key, e.currentTarget.value], index)
            })
          }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
              icon: "trash-alt",
              tooltip: "delete",
              onClick: () => deleteItem(index)
            })
          })]
        }, index))
      })]
    }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: styles.addButton,
      type: "button",
      variant: "secondary",
      icon: "plus",
      size: "sm",
      onClick: () => setPairs([...pairs, ['', '']]),
      children: "Add"
    })]
  });
};

const getStyles = theme => ({
  addButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `,
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    tbody td {
      padding: 0 ${theme.spacing(1)} ${theme.spacing(1)} 0;
    }
  `
});

const pairsToRecord = pairs => {
  const record = {};

  for (const [key, value] of pairs) {
    if (key) {
      record[key] = value;
    }
  }

  return record;
};

const recordToPairs = obj => Object.entries(obj !== null && obj !== void 0 ? obj : {});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionField": () => (/* binding */ OptionField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _KeyValueMapInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/KeyValueMapInput.tsx");
/* harmony import */ var _StringArrayInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/StringArrayInput.tsx");
/* harmony import */ var _SubformArrayField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/SubformArrayField.tsx");
/* harmony import */ var _SubformField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/SubformField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const OptionField = ({
  option,
  invalid,
  pathPrefix,
  pathSuffix = '',
  error,
  defaultValue,
  readOnly = false
}) => {
  const optionPath = `${pathPrefix}${pathSuffix}`;

  if (option.element === 'subform') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SubformField__WEBPACK_IMPORTED_MODULE_8__.SubformField, {
      readOnly: readOnly,
      defaultValue: defaultValue,
      option: option,
      errors: error,
      pathPrefix: optionPath
    });
  }

  if (option.element === 'subform_array') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SubformArrayField__WEBPACK_IMPORTED_MODULE_7__.SubformArrayField, {
      readOnly: readOnly,
      defaultValues: defaultValue,
      option: option,
      pathPrefix: optionPath,
      errors: error
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
    label: option.element !== 'checkbox' ? option.label : undefined,
    description: option.description || undefined,
    invalid: !!error,
    error: error === null || error === void 0 ? void 0 : error.message,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(OptionInput, {
      id: `${optionPath}${option.propertyName}`,
      defaultValue: defaultValue,
      option: option,
      invalid: invalid,
      pathPrefix: optionPath,
      readOnly: readOnly,
      pathIndex: pathPrefix
    })
  });
};

const OptionInput = ({
  option,
  invalid,
  id,
  pathPrefix = '',
  pathIndex = '',
  readOnly = false
}) => {
  const {
    control,
    register,
    unregister,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const name = `${pathPrefix}${option.propertyName}`; // workaround for https://github.com/react-hook-form/react-hook-form/issues/4993#issuecomment-829012506

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => () => {
    unregister(name, {
      keepValue: false
    });
  }, [unregister, name]);

  switch (option.element) {
    case 'checkbox':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Checkbox, Object.assign({
        id: id,
        readOnly: readOnly,
        disabled: readOnly,
        className: styles.checkbox
      }, register(name), {
        label: option.label,
        description: option.description
      }));

    case 'input':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
        id: id,
        readOnly: readOnly || determineReadOnly(option, getValues, pathIndex),
        invalid: invalid,
        type: option.inputType
      }, register(name, {
        required: determineRequired(option, getValues, pathIndex),
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      }), {
        placeholder: option.placeholder
      }));

    case 'select':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: _ref => {
          var _option$selectOptions;

          let {
            field: {
              onChange
            }
          } = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, Object.assign({
            disabled: readOnly
          }, field, {
            options: (_option$selectOptions = option.selectOptions) !== null && _option$selectOptions !== void 0 ? _option$selectOptions : undefined,
            invalid: invalid,
            onChange: value => onChange(value.value)
          }));
        },
        control: control,
        name: name
      });

    case 'textarea':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextArea, Object.assign({
        id: id,
        readOnly: readOnly,
        invalid: invalid
      }, register(name, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      })));

    case 'string_array':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: ({
          field: {
            value,
            onChange
          }
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StringArrayInput__WEBPACK_IMPORTED_MODULE_6__.StringArrayInput, {
          readOnly: readOnly,
          value: value,
          onChange: onChange
        }),
        control: control,
        name: name
      });

    case 'key_value_map':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: ({
          field: {
            value,
            onChange
          }
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_KeyValueMapInput__WEBPACK_IMPORTED_MODULE_5__.KeyValueMapInput, {
          readOnly: readOnly,
          value: value,
          onChange: onChange
        }),
        control: control,
        name: name
      });

    default:
      console.error('Element not supported', option.element);
      return null;
  }
};

const styles = {
  checkbox: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    height: auto; // native checkbox has fixed height which does not take into account description
  `
};

const validateOption = (value, validationRule) => {
  return RegExp(validationRule).test(value) ? true : 'Invalid format';
};

const determineRequired = (option, getValues, pathIndex) => {
  if (!option.dependsOn) {
    return option.required ? 'Required' : false;
  }

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(getValues(`${pathIndex}secureFields`))) {
    const dependentOn = getValues(`${pathIndex}secureSettings.${option.dependsOn}`);
    return !Boolean(dependentOn) && option.required ? 'Required' : false;
  } else {
    const dependentOn = getValues(`${pathIndex}secureFields.${option.dependsOn}`);
    return !dependentOn && option.required ? 'Required' : false;
  }
};

const determineReadOnly = (option, getValues, pathIndex) => {
  if (!option.dependsOn) {
    return false;
  }

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(getValues(`${pathIndex}secureFields`))) {
    return getValues(`${pathIndex}secureSettings.${option.dependsOn}`);
  } else {
    return getValues(`${pathIndex}secureFields.${option.dependsOn}`);
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/StringArrayInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringArrayInput": () => (/* binding */ StringArrayInput)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const StringArrayInput = ({
  value,
  onChange,
  readOnly = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  const deleteItem = index => {
    if (!value) {
      return;
    }

    const newValue = value.slice();
    newValue.splice(index, 1);
    onChange(newValue);
  };

  const updateValue = (itemValue, index) => {
    if (!value) {
      return;
    }

    onChange(value.map((v, i) => i === index ? itemValue : v));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [!!(value !== null && value !== void 0 && value.length) && value.map((v, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
        readOnly: readOnly,
        value: v,
        onChange: e => updateValue(e.currentTarget.value, index)
      }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
        className: styles.deleteIcon,
        icon: "trash-alt",
        tooltip: "delete",
        onClick: () => deleteItem(index)
      })]
    }, index)), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: styles.addButton,
      type: "button",
      variant: "secondary",
      icon: "plus",
      size: "sm",
      onClick: () => onChange([...(value !== null && value !== void 0 ? value : []), '']),
      children: "Add"
    })]
  });
};

const getStyles = theme => ({
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacing(1)};
    align-items: center;
  `,
  deleteIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
  `,
  addButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/SubformArrayField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubformArrayField": () => (/* binding */ SubformArrayField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_alerting_unified_hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _CollapsibleSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx");
/* harmony import */ var _OptionField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const SubformArrayField = ({
  option,
  pathPrefix,
  errors,
  defaultValues,
  readOnly = false
}) => {
  var _ref;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_7__.getReceiverFormFieldStyles);
  const path = `${pathPrefix}${option.propertyName}`;
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const {
    fields,
    append,
    remove
  } = (0,app_features_alerting_unified_hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_3__.useControlledFieldArray)({
    name: path,
    formAPI,
    defaults: defaultValues
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_CollapsibleSection__WEBPACK_IMPORTED_MODULE_5__.CollapsibleSection, {
      className: styles.collapsibleSection,
      label: `${option.label} (${fields.length})`,
      description: option.description,
      children: [((_ref = fields !== null && fields !== void 0 ? fields : defaultValues) !== null && _ref !== void 0 ? _ref : []).map((field, itemIndex) => {
        var _option$subformOption;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: styles.wrapper,
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_4__.ActionIcon, {
            "data-testid": `${path}.${itemIndex}.delete-button`,
            icon: "trash-alt",
            tooltip: "delete",
            onClick: () => remove(itemIndex),
            className: styles.deleteIcon
          }), (_option$subformOption = option.subformOptions) === null || _option$subformOption === void 0 ? void 0 : _option$subformOption.map(option => {
            var _errors$itemIndex;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_OptionField__WEBPACK_IMPORTED_MODULE_6__.OptionField, {
              readOnly: readOnly,
              defaultValue: field === null || field === void 0 ? void 0 : field[option.propertyName],
              option: option,
              pathPrefix: `${path}.${itemIndex}.`,
              error: errors === null || errors === void 0 ? void 0 : (_errors$itemIndex = errors[itemIndex]) === null || _errors$itemIndex === void 0 ? void 0 : _errors$itemIndex[option.propertyName]
            }, option.propertyName);
          })]
        }, itemIndex);
      }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        "data-testid": `${path}.add-button`,
        className: styles.addButton,
        type: "button",
        variant: "secondary",
        icon: "plus",
        size: "sm",
        onClick: () => append({
          __id: String(Math.random())
        }),
        children: "Add"
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/SubformField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubformField": () => (/* binding */ SubformField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _OptionField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const SubformField = ({
  option,
  pathPrefix,
  errors,
  defaultValue,
  readOnly = false
}) => {
  var _option$subformOption;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_5__.getReceiverFormFieldStyles);
  const name = `${pathPrefix}${option.propertyName}`;
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();

  const _watchValue = watch(name);

  const value = _watchValue === undefined ? defaultValue : _watchValue;
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": `${name}.container`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h6", {
      children: option.label
    }), option.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: styles.description,
      children: option.description
    }), show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
        "data-testid": `${name}.delete-button`,
        icon: "trash-alt",
        tooltip: "delete",
        onClick: () => setShow(false),
        className: styles.deleteIcon
      }), ((_option$subformOption = option.subformOptions) !== null && _option$subformOption !== void 0 ? _option$subformOption : []).map(subOption => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_OptionField__WEBPACK_IMPORTED_MODULE_4__.OptionField, {
          readOnly: readOnly,
          defaultValue: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue[subOption.propertyName],
          option: subOption,
          pathPrefix: `${name}.`,
          error: errors === null || errors === void 0 ? void 0 : errors[subOption.propertyName]
        }, subOption.propertyName);
      })]
    }), !show && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: styles.addButton,
      type: "button",
      variant: "secondary",
      icon: "plus",
      size: "sm",
      onClick: () => setShow(true),
      "data-testid": `${name}.add-button`,
      children: "Add"
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReceiverFormFieldStyles": () => (/* binding */ getReceiverFormFieldStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getReceiverFormFieldStyles = theme => ({
  collapsibleSection: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: 0;
    padding: 0;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(2, 0)};
    padding: ${theme.spacing(1)};
    border: solid 1px ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
    position: relative;
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.fontWeightRegular};
    margin: 0;
  `,
  deleteIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: absolute;
    right: ${theme.spacing(1)};
    top: ${theme.spacing(1)};
  `,
  addButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationKeyInput": () => (/* binding */ AnnotationKeyInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _SelectWIthAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value", "existingKeys", "aria-label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const AnnotationKeyInput = _ref => {
  let {
    value,
    existingKeys,
    'aria-label': ariaLabel
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const annotationOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Annotation).filter(key => !existingKeys.includes(key)) // remove keys already taken in other annotations
  .map(key => ({
    value: key,
    label: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.annotationLabels[key]
  })), [existingKeys]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_2__.SelectWithAdd, Object.assign({
    "aria-label": ariaLabel,
    value: value,
    options: annotationOptions,
    custom: !!value && !Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Annotation).includes(value)
  }, rest));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

var _Label;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const AnnotationsField = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    control,
    register,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const annotations = watch('annotations');
  const existingKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => annotations.filter((_, idx) => idx !== index).map(({
    key
  }) => key), [annotations]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: "Summary and annotations"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
      name: 'annotations',
      control: control,
      children: ({
        fields,
        append,
        remove
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: styles.flexColumn,
          children: [fields.map((field, index) => {
            var _annotations$index, _annotations$index$ke, _errors$annotations, _errors$annotations$i, _errors$annotations$i2, _errors$annotations2, _errors$annotations2$, _errors$annotations2$2, _annotations$index2, _errors$annotations3, _errors$annotations3$, _errors$annotations3$2, _errors$annotations4, _errors$annotations4$, _errors$annotations4$2;

            const isUrl = (_annotations$index = annotations[index]) === null || _annotations$index === void 0 ? void 0 : (_annotations$index$ke = _annotations$index.key) === null || _annotations$index$ke === void 0 ? void 0 : _annotations$index$ke.toLocaleLowerCase().endsWith('url');
            const ValueInputComponent = isUrl ? _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input : _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextArea;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: styles.flexRow,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                className: styles.field,
                invalid: !!((_errors$annotations = errors.annotations) !== null && _errors$annotations !== void 0 && (_errors$annotations$i = _errors$annotations[index]) !== null && _errors$annotations$i !== void 0 && (_errors$annotations$i2 = _errors$annotations$i.key) !== null && _errors$annotations$i2 !== void 0 && _errors$annotations$i2.message),
                error: (_errors$annotations2 = errors.annotations) === null || _errors$annotations2 === void 0 ? void 0 : (_errors$annotations2$ = _errors$annotations2[index]) === null || _errors$annotations2$ === void 0 ? void 0 : (_errors$annotations2$2 = _errors$annotations2$.key) === null || _errors$annotations2$2 === void 0 ? void 0 : _errors$annotations2$2.message,
                "data-testid": `annotation-key-${index}`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
                  name: `annotations[${index}].key`,
                  render: _ref => {
                    let {} = _ref,
                        field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__.AnnotationKeyInput, Object.assign({}, field, {
                      "aria-label": `Annotation detail ${index + 1}`,
                      existingKeys: existingKeys(index),
                      width: 18
                    }));
                  },
                  control: control,
                  rules: {
                    required: {
                      value: !!((_annotations$index2 = annotations[index]) !== null && _annotations$index2 !== void 0 && _annotations$index2.value),
                      message: 'Required.'
                    }
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRowItemMargin, styles.field),
                invalid: !!((_errors$annotations3 = errors.annotations) !== null && _errors$annotations3 !== void 0 && (_errors$annotations3$ = _errors$annotations3[index]) !== null && _errors$annotations3$ !== void 0 && (_errors$annotations3$2 = _errors$annotations3$.value) !== null && _errors$annotations3$2 !== void 0 && _errors$annotations3$2.message),
                error: (_errors$annotations4 = errors.annotations) === null || _errors$annotations4 === void 0 ? void 0 : (_errors$annotations4$ = _errors$annotations4[index]) === null || _errors$annotations4$ === void 0 ? void 0 : (_errors$annotations4$2 = _errors$annotations4$.value) === null || _errors$annotations4$2 === void 0 ? void 0 : _errors$annotations4$2.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ValueInputComponent, Object.assign({
                  "data-testid": `annotation-value-${index}`,
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.annotationValueInput, {
                    [styles.textarea]: !isUrl
                  })
                }, register(`annotations[${index}].value`), {
                  placeholder: isUrl ? 'https://' : `Text`,
                  defaultValue: field.value
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "button",
                className: styles.flexRowItemMargin,
                "aria-label": "delete annotation",
                icon: "trash-alt",
                variant: "secondary",
                onClick: () => remove(index)
              })]
            }, field.id);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: styles.addAnnotationsButton,
            icon: "plus-circle",
            type: "button",
            variant: "secondary",
            onClick: () => {
              append({
                key: '',
                value: ''
              });
            },
            children: "Add info"
          })]
        });
      }
    })]
  });
};

const getStyles = theme => ({
  annotationValueInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 426px;
  `,
  textarea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    height: 76px;
  `,
  addAnnotationsButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex-grow: 0;
    align-self: flex-start;
    margin-left: 148px;
  `,
  flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
  `,
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing.xs};
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  flexRowItemMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing.xs};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _InlineLabel;









const LabelsField = ({
  className
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const labels = watch('labels');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.wrapper),
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: "Custom Labels"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
      control: control,
      name: "labels",
      children: ({
        fields,
        append,
        remove
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.flexRow,
            children: [_InlineLabel || (_InlineLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
              width: 18,
              children: "Labels"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: styles.flexColumn,
              children: [fields.map((field, index) => {
                var _errors$labels, _errors$labels$index, _errors$labels$index$, _errors$labels2, _errors$labels2$index, _errors$labels2$index2, _labels$index, _errors$labels3, _errors$labels3$index, _errors$labels3$index2, _errors$labels4, _errors$labels4$index, _errors$labels4$index2, _labels$index2;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.centerAlignRow),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels = errors.labels) !== null && _errors$labels !== void 0 && (_errors$labels$index = _errors$labels[index]) !== null && _errors$labels$index !== void 0 && (_errors$labels$index$ = _errors$labels$index.key) !== null && _errors$labels$index$ !== void 0 && _errors$labels$index$.message),
                      error: (_errors$labels2 = errors.labels) === null || _errors$labels2 === void 0 ? void 0 : (_errors$labels2$index = _errors$labels2[index]) === null || _errors$labels2$index === void 0 ? void 0 : (_errors$labels2$index2 = _errors$labels2$index.key) === null || _errors$labels2$index2 === void 0 ? void 0 : _errors$labels2$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`labels[${index}].key`, {
                        required: {
                          value: !!((_labels$index = labels[index]) !== null && _labels$index !== void 0 && _labels$index.value),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "key",
                        "data-testid": `label-key-${index}`,
                        defaultValue: field.key
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
                      className: styles.equalSign,
                      children: "="
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels3 = errors.labels) !== null && _errors$labels3 !== void 0 && (_errors$labels3$index = _errors$labels3[index]) !== null && _errors$labels3$index !== void 0 && (_errors$labels3$index2 = _errors$labels3$index.value) !== null && _errors$labels3$index2 !== void 0 && _errors$labels3$index2.message),
                      error: (_errors$labels4 = errors.labels) === null || _errors$labels4 === void 0 ? void 0 : (_errors$labels4$index = _errors$labels4[index]) === null || _errors$labels4$index === void 0 ? void 0 : (_errors$labels4$index2 = _errors$labels4$index.value) === null || _errors$labels4$index2 === void 0 ? void 0 : _errors$labels4$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`labels[${index}].value`, {
                        required: {
                          value: !!((_labels$index2 = labels[index]) !== null && _labels$index2 !== void 0 && _labels$index2.key),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "value",
                        "data-testid": `label-value-${index}`,
                        defaultValue: field.value
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                      className: styles.deleteLabelButton,
                      "aria-label": "delete label",
                      icon: "trash-alt",
                      variant: "secondary",
                      onClick: () => {
                        remove(index);
                      }
                    })]
                  })
                }, field.id);
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                className: styles.addLabelButton,
                icon: "plus-circle",
                type: "button",
                variant: "secondary",
                onClick: () => {
                  append({});
                },
                children: "Add label"
              })]
            })]
          })
        });
      }
    })]
  });
};

const getStyles = theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.xl};
    `,
    flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      & + button {
        margin-left: ${theme.spacing.xs};
      }
    `,
    deleteLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing.xs};
      align-self: flex-start;
    `,
    addLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 0;
      align-self: flex-start;
    `,
    centerAlignRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-items: baseline;
    `,
    equalSign: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: flex-start;
      width: 28px;
      justify-content: center;
      margin-left: ${theme.spacing.xs};
    `,
    labelInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 175px;
      margin-bottom: ${theme.spacing.sm};
      & + & {
        margin-left: ${theme.spacing.sm};
      }
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectWithAdd": () => (/* binding */ SelectWithAdd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const SelectWithAdd = ({
  value,
  onChange,
  options,
  className,
  placeholder,
  width,
  custom,
  onCustomChange,
  disabled = false,
  addLabel = '+ Add new',
  'aria-label': ariaLabel
}) => {
  const [isCustom, setIsCustom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(custom);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (custom) {
      setIsCustom(custom);
    }
  }, [custom]);

  const _options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...options, {
    value: '__add__',
    label: addLabel
  }], [options, addLabel]);

  if (isCustom) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
      "aria-label": ariaLabel,
      width: width,
      autoFocus: !custom,
      value: value || '',
      placeholder: placeholder,
      className: className,
      disabled: disabled,
      onChange: e => onChange(e.target.value)
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      "aria-label": ariaLabel,
      width: width,
      options: _options,
      value: value,
      className: className,
      placeholder: placeholder,
      disabled: disabled,
      onChange: val => {
        const value = val === null || val === void 0 ? void 0 : val.value;

        if (value === '__add__') {
          setIsCustom(true);

          if (onCustomChange) {
            onCustomChange(true);
          }

          onChange('');
        } else {
          onChange(value);
        }
      }
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionIcon": () => (/* binding */ ActionIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["tooltip", "icon", "to", "target", "onClick", "className", "tooltipPlacement"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ActionIcon = _ref => {
  let {
    tooltip,
    icon,
    to,
    target,
    onClick,
    className,
    tooltipPlacement = 'top'
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const ariaLabel = typeof tooltip === 'string' ? tooltip : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: tooltip,
    placement: tooltipPlacement,
    children: to ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({
      variant: "secondary",
      fill: "text",
      icon: icon,
      href: to,
      size: "sm",
      target: target
    }, rest, {
      "aria-label": ariaLabel
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({
      className: className,
      variant: "secondary",
      fill: "text",
      size: "sm",
      icon: icon,
      type: "button",
      onClick: onClick
    }, rest, {
      "aria-label": ariaLabel
    }))
  });
};

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

/***/ "./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useControlledFieldArray": () => (/* binding */ useControlledFieldArray)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


const EMPTY_ARRAY = [];
/*
 * react-hook-form's own useFieldArray is uncontrolled and super buggy.
 * this is a simple controlled version. It's dead simple and more robust at the cost of re-rendering the form
 * on every change to the sub forms in the array.
 * Warning: you'll have to take care of your own unique identiifer to use as `key` for the ReactNode array.
 * Using index will cause problems.
 */

function useControlledFieldArray(options) {
  var _ref, _watch;

  const {
    name,
    formAPI,
    defaults,
    softDelete
  } = options;
  const {
    watch,
    getValues,
    reset,
    setValue
  } = formAPI;
  const fields = (_ref = (_watch = watch(name)) !== null && _watch !== void 0 ? _watch : defaults) !== null && _ref !== void 0 ? _ref : EMPTY_ARRAY;
  const update = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(updateFn => {
    const values = JSON.parse(JSON.stringify(getValues()));
    const newItems = updateFn(fields !== null && fields !== void 0 ? fields : []);
    reset((0,lodash__WEBPACK_IMPORTED_MODULE_0__.set)(values, name, newItems));
  }, [getValues, name, reset, fields]);
  return {
    fields,
    append: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(values => update(fields => [...fields, values]), [update]),
    remove: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => {
      if (softDelete) {
        setValue(`${name}.${index}.__deleted`, true);
      } else {
        update(items => {
          const newItems = items.slice();
          newItems.splice(index, 1);
          return newItems;
        });
      }
    }, [update, name, setValue, softDelete])
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/styles/table.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlertTableStyles": () => (/* binding */ getAlertTableStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getAlertTableStyles = theme => ({
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    border-radius: ${theme.shape.borderRadius()};
    border: solid 1px ${theme.colors.border.weak};
    background-color: ${theme.colors.background.secondary};

    th {
      padding: ${theme.spacing(1)};
    }

    td {
      padding: 0 ${theme.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,
  evenRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.primary};
  `,
  colExpand: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 36px;
  `,
  actionsCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${theme.spacing(0.5)};
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloudNotifierTypes": () => (/* binding */ cloudNotifierTypes),
/* harmony export */   "globalConfigOptions": () => (/* binding */ globalConfigOptions)
/* harmony export */ });
function option(propertyName, label, description, rest = {}) {
  return Object.assign({
    propertyName,
    label,
    description,
    element: 'input',
    inputType: '',
    required: false,
    secure: false,
    placeholder: '',
    validationRule: '',
    showWhen: {
      field: '',
      is: ''
    },
    dependsOn: ''
  }, rest);
}

const basicAuthOption = option('basic_auth', 'Basic auth', 'Sets the `Authorization` header with the configured username and password. Password and password_file are mutually exclusive.', {
  element: 'subform',
  subformOptions: [option('username', 'Username', ''), option('password', 'Password', ''), option('password_file', 'Password file', '')]
});
const tlsConfigOption = option('tls_config', 'TLS config', 'Configures the TLS settings.', {
  element: 'subform',
  subformOptions: [option('ca_file', 'CA file', 'CA certificate to validate the server certificate with.'), option('cert_file', 'Cert file', 'Certificate for client cert authentication to the server.'), option('key_file', 'Key file', 'Key file for client cert authentication to the server.'), option('server_name', 'Server name', 'ServerName extension to indicate the name of the server.'), option('insecure_skip_verify', 'Skip verify', 'Disable validation of the server certificate.', {
    element: 'checkbox'
  })]
});
const httpConfigOption = option('http_config', 'HTTP Config', 'Note that `basic_auth`, `bearer_token` and `bearer_token_file` options are mutually exclusive.', {
  element: 'subform',
  subformOptions: [option('bearer_token', 'Bearer token', 'Sets the `Authorization` header with the configured bearer token.'), option('bearer_token_file', 'Bearer token file', 'Sets the `Authorization` header with the bearer token read from the configured file.'), option('proxy_url', 'Proxy URL', 'Optional proxy URL.'), basicAuthOption, tlsConfigOption]
});
const cloudNotifierTypes = [{
  name: 'Email',
  description: 'Send notification over SMTP',
  type: 'email',
  info: '',
  heading: 'Email settings',
  options: [option('to', 'To', 'The email address to send notifications to.', {
    required: true
  }), option('from', 'From', 'The sender address.'), option('smarthost', 'SMTP host', 'The SMTP host through which emails are sent.'), option('hello', 'Hello', 'The hostname to identify to the SMTP server.'), option('auth_username', 'Username', 'SMTP authentication information'), option('auth_password', 'Password', 'SMTP authentication information'), option('auth_secret', 'Secret', 'SMTP authentication information'), option('auth_identity', 'Identity', 'SMTP authentication information'), option('require_tls', 'Require TLS', 'The SMTP TLS requirement', {
    element: 'checkbox'
  }), option('html', 'Email HTML body', 'The HTML body of the email notification.', {
    placeholder: '{{ template "email.default.html" . }}',
    element: 'textarea'
  }), option('text', 'Email text body', 'The text body of the email notification.', {
    element: 'textarea'
  }), option('headers', 'Headers', 'Further headers email header key/value pairs. Overrides any headers previously set by the notification implementation.', {
    element: 'key_value_map'
  }), tlsConfigOption]
}, {
  name: 'PagerDuty',
  description: 'Send notifications to PagerDuty',
  type: 'pagerduty',
  info: '',
  heading: 'PagerDuty settings',
  options: [option('routing_key', 'Routing key', 'The PagerDuty integration key (when using PagerDuty integration type `Events API v2`)'), option('service_key', 'Service key', 'The PagerDuty integration key (when using PagerDuty integration type `Prometheus`).'), option('url', 'URL', 'The URL to send API requests to'), option('client', 'Client', 'The client identification of the Alertmanager.', {
    placeholder: '{{ template "pagerduty.default.client" . }}'
  }), option('client_url', 'Client URL', 'A backlink to the sender of the notification.', {
    placeholder: '{{ template "pagerduty.default.clientURL" . }}'
  }), option('description', 'Description', 'A description of the incident.', {
    placeholder: '{{ template "pagerduty.default.description" .}}'
  }), option('severity', 'Severity', 'Severity of the incident.', {
    placeholder: 'error'
  }), option('details', 'Details', 'A set of arbitrary key/value pairs that provide further detail about the incident.', {
    element: 'key_value_map'
  }), option('images', 'Images', 'Images to attach to the incident.', {
    element: 'subform_array',
    subformOptions: [option('href', 'URL', '', {
      required: true
    }), option('source', 'Source', '', {
      required: true
    }), option('alt', 'Alt', '', {
      required: true
    })]
  }), option('links', 'Links', 'Links to attach to the incident.', {
    element: 'subform_array',
    subformOptions: [option('href', 'URL', '', {
      required: true
    }), option('text', 'Text', '', {
      required: true
    })]
  }), httpConfigOption]
}, {
  name: 'Pushover',
  description: 'Send notifications to Pushover',
  type: 'pushover',
  info: '',
  heading: 'Pushover settings',
  options: [option('user_key', 'User key', 'The recipient user’s user key.', {
    required: true
  }), option('token', 'Token', 'Your registered application’s API token, see https://pushover.net/app', {
    required: true
  }), option('title', 'Title', 'Notification title.', {
    placeholder: '{{ template "pushover.default.title" . }}'
  }), option('message', 'Message', 'Notification message.', {
    placeholder: '{{ template "pushover.default.message" . }}'
  }), option('url', 'URL', 'A supplementary URL shown alongside the message.', {
    placeholder: '{{ template "pushover.default.url" . }}'
  }), option('priority', 'Priority', 'Priority, see https://pushover.net/api#priority', {
    placeholder: '{{ if eq .Status "firing" }}2{{ else }}0{{ end }}'
  }), option('retry', 'Retry', 'How often the Pushover servers will send the same notification to the user. Must be at least 30 seconds.', {
    placeholder: '1m'
  }), option('expire', 'Expire', 'How long your notification will continue to be retried for, unless the user acknowledges the notification.', {
    placeholder: '1h'
  }), httpConfigOption]
}, {
  name: 'Slack',
  description: 'Send notifications to Slack',
  type: 'slack',
  info: '',
  heading: 'Slack settings',
  options: [option('api_url', 'Webhook URL', 'The Slack webhook URL.'), option('channel', 'Channel', 'The #channel or @user to send notifications to.', {
    required: true
  }), option('icon_emoji', 'Emoji icon', ''), option('icon_url', 'Icon URL', ''), option('link_names', 'Names link', '', {
    element: 'checkbox'
  }), option('username', 'Username', '', {
    placeholder: '{{ template "slack.default.username" . }}'
  }), option('callback_id', 'Callback ID', '', {
    placeholder: '{{ template "slack.default.callbackid" . }}'
  }), option('color', 'Color', '', {
    placeholder: '{{ if eq .Status "firing" }}danger{{ else }}good{{ end }}'
  }), option('fallback', 'Fallback', '', {
    placeholder: '{{ template "slack.default.fallback" . }}'
  }), option('footer', 'Footer', '', {
    placeholder: '{{ template "slack.default.footer" . }}'
  }), option('mrkdwn_in', 'Mrkdwn fields', 'An array of field names that should be formatted by mrkdwn syntax.', {
    element: 'string_array'
  }), option('pretext', 'Pre-text', '', {
    placeholder: '{{ template "slack.default.pretext" . }}'
  }), option('short_fields', 'Short fields', '', {
    element: 'checkbox'
  }), option('text', 'Message body', '', {
    element: 'textarea',
    placeholder: '{{ template "slack.default.text" . }}'
  }), option('title', 'Title', '', {
    placeholder: '{{ template "slack.default.title" . }}'
  }), option('title_link', 'Title link', '', {
    placeholder: '{{ template "slack.default.titlelink" . }}'
  }), option('image_url', 'Image URL', ''), option('thumb_url', 'Thumbnail URL', ''), option('actions', 'Actions', '', {
    element: 'subform_array',
    subformOptions: [option('text', 'Text', '', {
      required: true
    }), option('type', 'Type', '', {
      required: true
    }), option('url', 'URL', 'Either url or name and value are mandatory.'), option('name', 'Name', ''), option('value', 'Value', ''), option('confirm', 'Confirm', '', {
      element: 'subform',
      subformOptions: [option('text', 'Text', '', {
        required: true
      }), option('dismiss_text', 'Dismiss text', ''), option('ok_text', 'OK text', ''), option('title', 'Title', '')]
    }), option('style', 'Style', '')]
  }), option('fields', 'Fields', '', {
    element: 'subform_array',
    subformOptions: [option('title', 'Title', '', {
      required: true
    }), option('value', 'Value', '', {
      required: true
    }), option('short', 'Short', '', {
      element: 'checkbox'
    })]
  }), httpConfigOption]
}, {
  name: 'OpsGenie',
  description: 'Send notifications to OpsGenie',
  type: 'opsgenie',
  info: '',
  heading: 'OpsGenie settings',
  options: [option('api_key', 'API key', 'The API key to use when talking to the OpsGenie API.'), option('api_url', 'API URL', 'The host to send OpsGenie API requests to.'), option('message', 'Message', 'Alert text limited to 130 characters.'), option('description', 'Description', 'A description of the incident.', {
    placeholder: '{{ template "opsgenie.default.description" . }}'
  }), option('source', 'Source', 'A backlink to the sender of the notification.', {
    placeholder: '{{ template "opsgenie.default.source" . }}'
  }), option('details', 'Details', 'A set of arbitrary key/value pairs that provide further detail about the incident.', {
    element: 'key_value_map'
  }), option('tags', 'Tags', 'Comma separated list of tags attached to the notifications.'), option('note', 'Note', 'Additional alert note.'), option('priority', 'Priority', 'Priority level of alert. Possible values are P1, P2, P3, P4, and P5.'), option('responders', 'Responders', 'List of responders responsible for notifications.', {
    element: 'subform_array',
    subformOptions: [option('type', 'Type', '"team", "user", "escalation" or schedule".', {
      required: true
    }), option('id', 'ID', 'Exactly one of these fields should be defined.'), option('name', 'Name', 'Exactly one of these fields should be defined.'), option('username', 'Username', 'Exactly one of these fields should be defined.')]
  }), httpConfigOption]
}, {
  name: 'VictorOps',
  description: 'Send notifications to VictorOps',
  type: 'victorops',
  info: '',
  heading: 'VictorOps settings',
  options: [option('api_key', 'API key', 'The API key to use when talking to the VictorOps API.'), option('api_url', 'API URL', 'The VictorOps API URL.'), option('routing_key', 'Routing key', 'A key used to map the alert to a team.', {
    required: true
  }), option('message_type', 'Message type', 'Describes the behavior of the alert (CRITICAL, WARNING, INFO).'), option('entity_display_name', 'Entity display name', 'Contains summary of the alerted problem.', {
    placeholder: '{{ template "victorops.default.entity_display_name" . }}'
  }), option('state_message', 'State message', 'Contains long explanation of the alerted problem.', {
    placeholder: '{{ template "victorops.default.state_message" . }}'
  }), option('monitoring_tool', 'Monitoring tool', 'The monitoring tool the state message is from.', {
    placeholder: '{{ template "victorops.default.monitoring_tool" . }}'
  }), httpConfigOption]
}, {
  name: 'Webhook',
  description: 'Send notifications to a webhook',
  type: 'webhook',
  info: '',
  heading: 'Webhook settings',
  options: [option('url', 'URL', 'The endpoint to send HTTP POST requests to.', {
    required: true
  }), option('max_alerts', 'Max alerts', 'The maximum number of alerts to include in a single webhook message. Alerts above this threshold are truncated. When leaving this at its default value of 0, all alerts are included.', {
    placeholder: '0',
    validationRule: '(^\\d+$|^$)'
  }), httpConfigOption]
}];
const globalConfigOptions = [// email
option('smtp_from', 'SMTP from', 'The default SMTP From header field.'), option('smtp_smarthost', 'SMTP smarthost', 'The default SMTP smarthost used for sending emails, including port number. Port number usually is 25, or 587 for SMTP over TLS (sometimes referred to as STARTTLS). Example: smtp.example.org:587'), option('smtp_hello', 'SMTP hello', 'The default hostname to identify to the SMTP server.', {
  placeholder: 'localhost'
}), option('smtp_auth_username', 'SMTP auth username', "SMTP Auth using CRAM-MD5, LOGIN and PLAIN. If empty, Alertmanager doesn't authenticate to the SMTP server."), option('smtp_auth_password', 'SMTP auth password', 'SMTP Auth using LOGIN and PLAIN.'), option('smtp_auth_identity', 'SMTP auth identity', 'SMTP Auth using PLAIN.'), option('smtp_auth_secret', 'SMTP auth secret', 'SMTP Auth using CRAM-MD5.'), option('smtp_require_tls', 'SMTP require TLS', 'The default SMTP TLS requirement. Note that Go does not support unencrypted connections to remote SMTP endpoints.', {
  element: 'checkbox'
}), // slack
option('slack_api_url', 'Slack API URL', ''), option('victorops_api_key', 'VictorOps API key', ''), option('victorops_api_url', 'VictorOps API URL', '', {
  placeholder: 'https://alert.victorops.com/integrations/generic/20131114/alert/'
}), option('pagerduty_url', 'PagerDuty URL', 'https://events.pagerduty.com/v2/enqueue'), option('opsgenie_api_key', 'OpsGenie API key', ''), option('opsgenie_api_url', 'OpsGenie API URL', '', {
  placeholder: 'https://api.opsgenie.com/'
}), option('wechat_api_url', 'WeChat API URL', '', {
  placeholder: 'https://qyapi.weixin.qq.com/cgi-bin/'
}), option('wechat_api_secret', 'WeChat API secret', ''), option('wechat_api_corp_id', 'WeChat API corp id', ''), httpConfigOption, option('resolve_timeout', 'Resolve timeout', 'ResolveTimeout is the default value used by alertmanager if the alert does not include EndsAt, after this time passes it can declare the alert as resolved if it has not been updated. This has no impact on alerts from Prometheus, as they always include EndsAt.', {
  placeholder: '5m'
})];

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/receiver-form.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloudReceiverToFormValues": () => (/* binding */ cloudReceiverToFormValues),
/* harmony export */   "formChannelValuesToGrafanaChannelConfig": () => (/* binding */ formChannelValuesToGrafanaChannelConfig),
/* harmony export */   "formValuesToCloudReceiver": () => (/* binding */ formValuesToCloudReceiver),
/* harmony export */   "formValuesToGrafanaReceiver": () => (/* binding */ formValuesToGrafanaReceiver),
/* harmony export */   "grafanaReceiverToFormValues": () => (/* binding */ grafanaReceiverToFormValues),
/* harmony export */   "omitEmptyValues": () => (/* binding */ omitEmptyValues),
/* harmony export */   "updateConfigWithReceiver": () => (/* binding */ updateConfigWithReceiver)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function grafanaReceiverToFormValues(receiver, notifiers) {
  var _receiver$grafana_man, _receiver$grafana_man2;

  const channelMap = {}; // giving each form receiver item a unique id so we can use it to map back to "original" items
  // as well as to use as `key` prop.
  // @TODO use uid once backend is fixed to provide it. then we can get rid of the GrafanaChannelMap

  let idCounter = 1;
  const values = {
    name: receiver.name,
    items: (_receiver$grafana_man = (_receiver$grafana_man2 = receiver.grafana_managed_receiver_configs) === null || _receiver$grafana_man2 === void 0 ? void 0 : _receiver$grafana_man2.map(channel => {
      const id = String(idCounter++);
      channelMap[id] = channel;
      const notifier = notifiers.find(({
        type
      }) => type === channel.type);
      return grafanaChannelConfigToFormChannelValues(id, channel, notifier);
    })) !== null && _receiver$grafana_man !== void 0 ? _receiver$grafana_man : []
  };
  return [values, channelMap];
}
function cloudReceiverToFormValues(receiver, notifiers) {
  const channelMap = {}; // giving each form receiver item a unique id so we can use it to map back to "original" items

  let idCounter = 1;
  const items = Object.entries(receiver) // filter out only config items that are relevant to cloud
  .filter(([type]) => type.endsWith('_configs') && type !== 'grafana_managed_receiver_configs') // map property names to cloud notifier types by removing the `_config` suffix
  .map(([type, configs]) => [type.replace('_configs', ''), configs]) // convert channel configs to form values
  .map(([type, configs]) => configs.map(config => {
    const id = String(idCounter++);
    channelMap[id] = {
      type,
      config
    };
    const notifier = notifiers.find(notifier => notifier.type === type);

    if (!notifier) {
      throw new Error(`unknown cloud notifier: ${type}`);
    }

    return cloudChannelConfigToFormChannelValues(id, type, config);
  })).flat();
  const values = {
    name: receiver.name,
    items
  };
  return [values, channelMap];
}
function formValuesToGrafanaReceiver(values, channelMap, defaultChannelValues) {
  var _values$items;

  return {
    name: values.name,
    grafana_managed_receiver_configs: ((_values$items = values.items) !== null && _values$items !== void 0 ? _values$items : []).map(channelValues => {
      const existing = channelMap[channelValues.__id];
      return formChannelValuesToGrafanaChannelConfig(channelValues, defaultChannelValues, values.name, existing);
    })
  };
}
function formValuesToCloudReceiver(values, defaults) {
  const recv = {
    name: values.name
  };
  values.items.forEach(({
    __id,
    type,
    settings,
    sendResolved
  }) => {
    const channel = omitEmptyValues(Object.assign({}, settings, {
      send_resolved: sendResolved !== null && sendResolved !== void 0 ? sendResolved : defaults.sendResolved
    }));
    const configsKey = `${type}_configs`;

    if (!recv[configsKey]) {
      recv[configsKey] = [channel];
    } else {
      recv[configsKey].push(channel);
    }
  });
  return recv;
} // will add new receiver, or replace exisitng one

function updateConfigWithReceiver(config, receiver, replaceReceiverName) {
  var _config$alertmanager_;

  const oldReceivers = (_config$alertmanager_ = config.alertmanager_config.receivers) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : []; // sanity check that name is not duplicated

  if (receiver.name !== replaceReceiverName && !!oldReceivers.find(({
    name
  }) => name === receiver.name)) {
    throw new Error(`Duplicate receiver name ${receiver.name}`);
  } // sanity check that existing receiver exists


  if (replaceReceiverName && !oldReceivers.find(({
    name
  }) => name === replaceReceiverName)) {
    throw new Error(`Expected receiver ${replaceReceiverName} to exist, but did not find it in the config`);
  }

  const updated = Object.assign({}, config, {
    alertmanager_config: Object.assign({}, config.alertmanager_config, {
      receivers: replaceReceiverName ? oldReceivers.map(existingReceiver => existingReceiver.name === replaceReceiverName ? receiver : existingReceiver) : [...oldReceivers, receiver]
    })
  }); // if receiver was renamed, rename it in routes as well

  if (updated.alertmanager_config.route && replaceReceiverName && receiver.name !== replaceReceiverName) {
    updated.alertmanager_config.route = renameReceiverInRoute(updated.alertmanager_config.route, replaceReceiverName, receiver.name);
  }

  return updated;
}

function renameReceiverInRoute(route, oldName, newName) {
  const updated = Object.assign({}, route);

  if (updated.receiver === oldName) {
    updated.receiver = newName;
  }

  if (updated.routes) {
    updated.routes = updated.routes.map(route => renameReceiverInRoute(route, oldName, newName));
  }

  return updated;
}

function cloudChannelConfigToFormChannelValues(id, type, channel) {
  return {
    __id: id,
    type,
    settings: Object.assign({}, channel),
    secureFields: {},
    secureSettings: {},
    sendResolved: channel.send_resolved
  };
}

function grafanaChannelConfigToFormChannelValues(id, channel, notifier) {
  const values = {
    __id: id,
    type: channel.type,
    provenance: channel.provenance,
    secureSettings: {},
    settings: Object.assign({}, channel.settings),
    secureFields: Object.assign({}, channel.secureFields),
    disableResolveMessage: channel.disableResolveMessage
  }; // work around https://github.com/grafana/alerting-squad/issues/100

  notifier === null || notifier === void 0 ? void 0 : notifier.options.forEach(option => {
    if (option.secure && values.settings[option.propertyName]) {
      delete values.settings[option.propertyName];
      values.secureFields[option.propertyName] = true;
    }
  });
  return values;
}

function formChannelValuesToGrafanaChannelConfig(values, defaults, name, existing) {
  var _existing$settings, _values$settings, _values$secureSetting, _ref, _values$disableResolv;

  const channel = {
    settings: omitEmptyValues(Object.assign({}, existing && existing.type === values.type ? (_existing$settings = existing.settings) !== null && _existing$settings !== void 0 ? _existing$settings : {} : {}, (_values$settings = values.settings) !== null && _values$settings !== void 0 ? _values$settings : {})),
    secureSettings: (_values$secureSetting = values.secureSettings) !== null && _values$secureSetting !== void 0 ? _values$secureSetting : {},
    type: values.type,
    name,
    disableResolveMessage: (_ref = (_values$disableResolv = values.disableResolveMessage) !== null && _values$disableResolv !== void 0 ? _values$disableResolv : existing === null || existing === void 0 ? void 0 : existing.disableResolveMessage) !== null && _ref !== void 0 ? _ref : defaults.disableResolveMessage
  };

  if (existing) {
    channel.uid = existing.uid;
  }

  return channel;
} // will remove properties that have empty ('', null, undefined) object properties.
// traverses nested objects and arrays as well. in place, mutates the object.
// this is needed because form will submit empty string for not filled in fields,
// but for cloud alertmanager receiver config to use global default value the property must be omitted entirely
// this isn't a perfect solution though. No way for user to intentionally provide an empty string. Will need rethinking later

function omitEmptyValues(obj) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj)) {
    obj.forEach(omitEmptyValues);
  } else if (typeof obj === 'object' && obj !== null) {
    Object.entries(obj).forEach(([key, value]) => {
      if (value === '' || value === null || value === undefined) {
        delete obj[key];
      } else {
        omitEmptyValues(value);
      }
    });
  }

  return obj;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/receivers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractNotifierTypeCounts": () => (/* binding */ extractNotifierTypeCounts)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_plugins_datasource_alertmanager_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/consts.ts");


// name : count
function extractNotifierTypeCounts(receiver, grafanaNotifiers) {
  if (receiver['grafana_managed_receiver_configs']) {
    var _receiver$grafana_man;

    return getGrafanaNotifierTypeCounts((_receiver$grafana_man = receiver.grafana_managed_receiver_configs) !== null && _receiver$grafana_man !== void 0 ? _receiver$grafana_man : [], grafanaNotifiers);
  }

  return getCortexAlertManagerNotifierTypeCounts(receiver);
}

function getCortexAlertManagerNotifierTypeCounts(receiver) {
  return Object.entries(receiver).filter(([key]) => key !== 'grafana_managed_receiver_configs' && key.endsWith('_configs')) // filter out only properties that are alertmanager notifier
  .filter(([_, value]) => Array.isArray(value) && !!value.length) // check that there are actually notifiers of this type configured
  .reduce((acc, [key, value]) => {
    var _receiverTypeNames$ty, _acc$name;

    const type = key.replace('_configs', ''); // remove the `_config` part from the key, making it intto a notifier name

    const name = (_receiverTypeNames$ty = app_plugins_datasource_alertmanager_consts__WEBPACK_IMPORTED_MODULE_1__.receiverTypeNames[type]) !== null && _receiverTypeNames$ty !== void 0 ? _receiverTypeNames$ty : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type);
    return Object.assign({}, acc, {
      [name]: ((_acc$name = acc[name]) !== null && _acc$name !== void 0 ? _acc$name : 0) + (Array.isArray(value) ? value.length : 1)
    });
  }, {});
}

function getGrafanaNotifierTypeCounts(configs, grafanaNotifiers) {
  return configs.map(recv => recv.type) // extract types from config
  .map(type => {
    var _grafanaNotifiers$fin, _grafanaNotifiers$fin2;

    return (_grafanaNotifiers$fin = (_grafanaNotifiers$fin2 = grafanaNotifiers.find(r => r.type === type)) === null || _grafanaNotifiers$fin2 === void 0 ? void 0 : _grafanaNotifiers$fin2.name) !== null && _grafanaNotifiers$fin !== void 0 ? _grafanaNotifiers$fin : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type);
  }) // get readable name from notifier cofnig, or if not available, just capitalize
  .reduce((acc, type) => {
    var _acc$type;

    return Object.assign({}, acc, {
      [type]: ((_acc$type = acc[type]) !== null && _acc$type !== void 0 ? _acc$type : 0) + 1
    });
  }, {});
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/templates.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ensureDefine": () => (/* binding */ ensureDefine)
/* harmony export */ });
function ensureDefine(templateName, templateContent) {
  // notification template content must be wrapped in {{ define "name" }} tag,
  // but this is not obvious because user also has to provide name separately in the form.
  // so if user does not manually add {{ define }} tag, we do it automatically
  let content = templateContent.trim();

  if (!content.match(/\{\{\s*define/)) {
    const indentedContent = content.split('\n').map(line => '  ' + line).join('\n');
    content = `{{ define "${templateName}" }}\n${indentedContent}\n{{ end }}`;
  }

  return content;
}

/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/consts.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiverTypeNames": () => (/* binding */ receiverTypeNames)
/* harmony export */ });
const receiverTypeNames = {
  pagerduty: 'PagerDuty',
  pushover: 'Pushover',
  slack: 'Slack',
  opsgenie: 'OpsGenie',
  webhook: 'Webhook',
  victorops: 'VictorOps',
  wechat: 'WeChat'
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uc0xpc3RQYWdlLmEyNWJmNzM0ZTc2NmE5OWU5YzhkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFTyxTQUFTSSxVQUFULENBQXVCQyxhQUF2QixFQUF3RDtFQUM3RCxNQUFNQyxRQUFRLEdBQUdKLHdEQUFXLEVBQTVCLENBRDZELENBRTdEOztFQUNBLE1BQU1LLFdBQVcsR0FBR04sNkNBQU0sQ0FBQ0ksYUFBRCxDQUExQjtFQUNBRSxXQUFXLENBQUNDLE9BQVosR0FBc0JILGFBQXRCO0VBQ0FMLGdEQUFTLENBQUMsTUFBTTtJQUNkLE9BQU8sTUFBTTtNQUNYTSxRQUFRLENBQUNILCtEQUFhLENBQUM7UUFBRUUsYUFBYSxFQUFFRSxXQUFXLENBQUNDO01BQTdCLENBQUQsQ0FBZCxDQUFSO0lBQ0QsQ0FGRDtFQUdELENBSlEsRUFJTixDQUFDRixRQUFELENBSk0sQ0FBVDtBQUtEOzs7Ozs7Ozs7Ozs7O0FDZkQ7QUFLQTtBQUVPLE1BQU1LLFdBQVcsR0FBSUMsRUFBRCxJQUEwQjtFQUNuRCxNQUFNQyxRQUFRLEdBQUdKLHdEQUFXLENBQUVLLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ0QsUUFBOUIsQ0FBNUI7RUFDQSxPQUFPSCxnRUFBVyxDQUFDRyxRQUFELEVBQVdELEVBQVgsQ0FBbEI7QUFDRCxDQUhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7QUFFQSxNQUFNYyxxQkFBeUIsR0FBRyxNQUFNO0VBQ3RDLE1BQU1DLFFBQVEsR0FBR2hCLHVFQUFXLENBQUMsVUFBRCxDQUE1QjtFQUVBLE1BQU0sQ0FBQ2lCLGFBQUQsRUFBZ0JDLGdCQUFoQixJQUFvQ2IsK0NBQVEsQ0FBc0IsRUFBdEIsQ0FBbEQ7O0VBRUEsTUFBTWMsZ0JBQWdCLEdBQUcsWUFBWTtJQUNuQyxPQUFPLE1BQU1aLCtEQUFhLEdBQUdhLEdBQWhCLENBQXFCLDBC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QjtFQUFBLENBSkcsRUFRSCxFQVJHLENBQVA7QUFVRDs7Ozs7Ozs7Ozs7QUM3Q00sU0FBUytLLFlBQVQsQ0FBc0JuRyxZQUF0QixFQUE0Q21iLGVBQTVDLEVBQTZFO0VBQ2xGO0VBQ0E7RUFDQTtFQUNBLElBQUk5YSxPQUFPLEdBQUc4YSxlQUFlLENBQUNyTCxJQUFoQixFQUFkOztFQUNBLElBQUksQ0FBQ3pQLE9BQU8sQ0FBQ3RDLEtBQVIsQ0FBYyxlQUFkLENBQUwsRUFBcUM7SUFDbkMsTUFBTXFkLGVBQWUsR0FBRy9hLE9BQU8sQ0FDNUJnYixLQURxQixDQUNmLElBRGUsRUFFckJwZ0IsR0FGcUIsQ0FFaEJxZ0IsSUFBRCxJQUFVLE9BQU9BLElBRkEsRUFHckIxVixJQUhxQixDQUdoQixJQUhnQixDQUF4QjtJQUlBdkYsT0FBTyxHQUFJLGNBQWFMLFlBQWEsU0FBUW9iLGVBQWdCLGFBQTdEO0VBQ0Q7O0VBQ0QsT0FBTy9hLE9BQVA7QUFDRDs7Ozs7Ozs7Ozs7QUNiTSxNQUFNeWEsaUJBQXlDLEdBQUc7RUFDdkRTLFNBQVMsRUFBRSxXQUQ0QztFQUV2REMsUUFBUSxFQUFFLFVBRjZDO0VBR3ZEQyxLQUFLLEVBQUUsT0FIZ0Q7RUFJdkRDLFFBQVEsRUFBRSxVQUo2QztFQUt2REMsT0FBTyxFQUFFLFNBTDhDO0VBTXZEQyxTQUFTLEVBQUUsV0FONEM7RUFPdkRDLE1BQU0sRUFBRTtBQVArQyxDQUFsRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2hvb2tzL3VzZU5hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL05vdGlmaWNhdGlvbnNMaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9SZWNlaXZlcnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9BbGVydGluZ1BhZ2VXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQXV0aG9yaXplLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvTm9BbGVydE1hbmFnZXJXYXJuaW5nLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvUHJvdmlzaW9uaW5nLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL0VkaXRSZWNlaXZlclZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvRWRpdFRlbXBsYXRlVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9HbG9iYWxDb25maWdGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL05ld1JlY2VpdmVyVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9OZXdUZW1wbGF0ZVZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9SZWNlaXZlcnNTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL1JlY2VpdmVyc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL1RlbXBsYXRlRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9UZW1wbGF0ZXNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL0NoYW5uZWxPcHRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vQ2hhbm5lbFN1YkZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9DbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL0Nsb3VkUmVjZWl2ZXJGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vQ29sbGFwc2libGVTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vR3JhZmFuYUNvbW1vbkNoYW5uZWxTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL0dyYWZhbmFSZWNlaXZlckZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9SZWNlaXZlckZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9UZXN0Q29udGFjdFBvaW50TW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9maWVsZHMvRGVsZXRlZFN1YmZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9maWVsZHMvS2V5VmFsdWVNYXBJbnB1dC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL2ZpZWxkcy9PcHRpb25GaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL2ZpZWxkcy9TdHJpbmdBcnJheUlucHV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vZmllbGRzL1N1YmZvcm1BcnJheUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vZmllbGRzL1N1YmZvcm1GaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL2ZpZWxkcy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0Fubm90YXRpb25LZXlJbnB1dC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0Fubm90YXRpb25zRmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9MYWJlbHNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL1NlbGVjdFdJdGhBZGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9BY3Rpb25JY29uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29udHJvbGxlZEZpZWxkQXJyYXkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9zdHlsZXMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9jbG91ZC1hbGVydG1hbmFnZXItbm90aWZpZXItdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9yZWNlaXZlci1mb3JtLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvcmVjZWl2ZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvdGVtcGxhdGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvY29uc3RzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGNsZWFuVXBBY3Rpb24sIFN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi9hY3Rpb25zL2NsZWFuVXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xlYW51cDxUPihzdGF0ZVNlbGVjdG9yOiBTdGF0ZVNlbGVjdG9yPFQ+KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgLy9iaXQgb2YgYSBoYWNrIHRvIHVuYnVyZGVuIHVzZXIgZnJvbSBoYXZpbmcgdG8gd3JhcCBzdGF0ZVNlbGNldG9yIGluIGEgdXNlQ2FsbGJhY2suIE90aGVyd2lzZSBjbGVhbnVwIHdvdWxkIGhhcHBlbiBvbiBldmVyeSByZW5kZXJcbiAgY29uc3Qgc2VsZWN0b3JSZWYgPSB1c2VSZWYoc3RhdGVTZWxlY3Rvcik7XG4gIHNlbGVjdG9yUmVmLmN1cnJlbnQgPSBzdGF0ZVNlbGVjdG9yO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChjbGVhblVwQWN0aW9uKHsgc3RhdGVTZWxlY3Rvcjogc2VsZWN0b3JSZWYuY3VycmVudCB9KSk7XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG59XG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuXG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5cbmV4cG9ydCBjb25zdCB1c2VOYXZNb2RlbCA9IChpZDogc3RyaW5nKTogTmF2TW9kZWwgPT4ge1xuICBjb25zdCBuYXZJbmRleCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpO1xuICByZXR1cm4gZ2V0TmF2TW9kZWwobmF2SW5kZXgsIGlkKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBc3luY0ZuIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBCdXR0b24sIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBhcHBFdmVudHMgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IHVzZU5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwnO1xuaW1wb3J0IHsgQWxlcnROb3RpZmljYXRpb24gfSBmcm9tICdhcHAvdHlwZXMvYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBTaG93Q29uZmlybU1vZGFsRXZlbnQgfSBmcm9tICcuLi8uLi90eXBlcy9ldmVudHMnO1xuXG5jb25zdCBOb3RpZmljYXRpb25zTGlzdFBhZ2U6IEZDID0gKCkgPT4ge1xuICBjb25zdCBuYXZNb2RlbCA9IHVzZU5hdk1vZGVsKCdjaGFubmVscycpO1xuXG4gIGNvbnN0IFtub3RpZmljYXRpb25zLCBzZXROb3RpZmljYXRpb25zXSA9IHVzZVN0YXRlPEFsZXJ0Tm90aWZpY2F0aW9uW10+KFtdKTtcblxuICBjb25zdCBnZXROb3RpZmljYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnNgKTtcbiAgfTtcblxuICBjb25zdCBbc3RhdGUsIGZldGNoTm90aWZpY2F0aW9uc10gPSB1c2VBc3luY0ZuKGdldE5vdGlmaWNhdGlvbnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoTm90aWZpY2F0aW9ucygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0Tm90aWZpY2F0aW9ucyhyZXMpO1xuICAgIH0pO1xuICB9LCBbZmV0Y2hOb3RpZmljYXRpb25zXSk7XG5cbiAgY29uc3QgZGVsZXRlTm90aWZpY2F0aW9uID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBhcHBFdmVudHMucHVibGlzaChcbiAgICAgIG5ldyBTaG93Q29uZmlybU1vZGFsRXZlbnQoe1xuICAgICAgICB0aXRsZTogJ0RlbGV0ZScsXG4gICAgICAgIHRleHQ6ICdEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBub3RpZmljYXRpb24gY2hhbm5lbD8nLFxuICAgICAgICB0ZXh0MjogYERlbGV0aW5nIHRoaXMgbm90aWZpY2F0aW9uIGNoYW5uZWwgd2lsbCBub3QgZGVsZXRlIGZyb20gYWxlcnRzIGFueSByZWZlcmVuY2VzIHRvIGl0YCxcbiAgICAgICAgaWNvbjogJ3RyYXNoLWFsdCcsXG4gICAgICAgIGNvbmZpcm1UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgeWVzVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgIG9uQ29uZmlybTogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGRlbGV0ZU5vdGlmaWNhdGlvbkNvbmZpcm1lZChpZCk7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTm90aWZpY2F0aW9uQ29uZmlybWVkID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtpZH1gKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25zID0gYXdhaXQgZmV0Y2hOb3RpZmljYXRpb25zKCk7XG4gICAgc2V0Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAge3N0YXRlLmVycm9yICYmIDxwPntzdGF0ZS5lcnJvcn08L3A+fVxuICAgICAgICB7ISFub3RpZmljYXRpb25zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyX19zcGFjZXJcIiAvPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBpY29uPVwiY2hhbm5lbC1hZGRcIiBocmVmPVwiYWxlcnRpbmcvbm90aWZpY2F0aW9uL25ld1wiPlxuICAgICAgICAgICAgICAgIE5ldyBjaGFubmVsXG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmaWx0ZXItdGFibGUtLWhvdmVyXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgbWluV2lkdGg6ICcyMDBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBtaW5XaWR0aDogJzEwMHB4JyB9fT5UeXBlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzElJyB9fT48L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17bm90aWZpY2F0aW9uLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgYWxlcnRpbmcvbm90aWZpY2F0aW9uLyR7bm90aWZpY2F0aW9uLmlkfS9lZGl0YH0+e25vdGlmaWNhdGlvbi5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgYWxlcnRpbmcvbm90aWZpY2F0aW9uLyR7bm90aWZpY2F0aW9uLmlkfS9lZGl0YH0+e25vdGlmaWNhdGlvbi50eXBlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi5pc0RlZmF1bHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshKG5vdGlmaWNhdGlvbnMubGVuZ3RoIHx8IHN0YXRlLmxvYWRpbmcpICYmIChcbiAgICAgICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgICAgICB0aXRsZT1cIlRoZXJlIGFyZSBubyBub3RpZmljYXRpb24gY2hhbm5lbHMgZGVmaW5lZCB5ZXRcIlxuICAgICAgICAgICAgYnV0dG9uSWNvbj1cImNoYW5uZWwtYWRkXCJcbiAgICAgICAgICAgIGJ1dHRvbkxpbms9XCJhbGVydGluZy9ub3RpZmljYXRpb24vbmV3XCJcbiAgICAgICAgICAgIGJ1dHRvblRpdGxlPVwiQWRkIGNoYW5uZWxcIlxuICAgICAgICAgICAgcHJvVGlwPVwiWW91IGNhbiBpbmNsdWRlIGltYWdlcyBpbiB5b3VyIGFsZXJ0IG5vdGlmaWNhdGlvbnMuXCJcbiAgICAgICAgICAgIHByb1RpcExpbms9XCJodHRwOi8vZG9jcy5ncmFmYW5hLm9yZy9hbGVydGluZy9ub3RpZmljYXRpb25zL1wiXG4gICAgICAgICAgICBwcm9UaXBMaW5rVGl0bGU9XCJMZWFybiBtb3JlXCJcbiAgICAgICAgICAgIHByb1RpcFRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zTGlzdFBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlLCBSb3V0ZUNoaWxkcmVuUHJvcHMsIFN3aXRjaCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgQWxlcnQsIExvYWRpbmdQbGFjZWhvbGRlciwgd2l0aEVycm9yQm91bmRhcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydE1hbmFnZXJQaWNrZXInO1xuaW1wb3J0IHsgQWxlcnRpbmdQYWdlV3JhcHBlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydGluZ1BhZ2VXcmFwcGVyJztcbmltcG9ydCB7IE5vQWxlcnRNYW5hZ2VyV2FybmluZyB9IGZyb20gJy4vY29tcG9uZW50cy9Ob0FsZXJ0TWFuYWdlcldhcm5pbmcnO1xuaW1wb3J0IHsgRWRpdFJlY2VpdmVyVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9yZWNlaXZlcnMvRWRpdFJlY2VpdmVyVmlldyc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY2VpdmVycy9FZGl0VGVtcGxhdGVWaWV3JztcbmltcG9ydCB7IEdsb2JhbENvbmZpZ0Zvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVjZWl2ZXJzL0dsb2JhbENvbmZpZ0Zvcm0nO1xuaW1wb3J0IHsgTmV3UmVjZWl2ZXJWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY2VpdmVycy9OZXdSZWNlaXZlclZpZXcnO1xuaW1wb3J0IHsgTmV3VGVtcGxhdGVWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY2VpdmVycy9OZXdUZW1wbGF0ZVZpZXcnO1xuaW1wb3J0IHsgUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9yZWNlaXZlcnMvUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldyc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24gfSBmcm9tICcuL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uLCBmZXRjaEdyYWZhbmFOb3RpZmllcnNBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuL3V0aWxzL3JlZHV4JztcblxuY29uc3QgUmVjZWl2ZXJzOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgYWxlcnRNYW5hZ2VycyA9IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24oJ25vdGlmaWNhdGlvbicpO1xuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKGFsZXJ0TWFuYWdlcnMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBpc1Jvb3QgPSBsb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aCgnL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMnKTtcblxuICBjb25zdCBjb25maWdSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1Db25maWdzKTtcblxuICBjb25zdCB7XG4gICAgcmVzdWx0OiBjb25maWcsXG4gICAgbG9hZGluZyxcbiAgICBlcnJvcixcbiAgfSA9IChhbGVydE1hbmFnZXJTb3VyY2VOYW1lICYmIGNvbmZpZ1JlcXVlc3RzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gIGNvbnN0IHJlY2VpdmVyVHlwZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdyYWZhbmFOb3RpZmllcnMpO1xuXG4gIGNvbnN0IHNob3VsZExvYWRDb25maWcgPSBpc1Jvb3QgfHwgIWNvbmZpZztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lICYmIHNob3VsZExvYWRDb25maWcpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpKTtcbiAgICB9XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBkaXNwYXRjaCwgc2hvdWxkTG9hZENvbmZpZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSAmJlxuICAgICAgIShyZWNlaXZlclR5cGVzLnJlc3VsdCB8fCByZWNlaXZlclR5cGVzLmxvYWRpbmcgfHwgcmVjZWl2ZXJUeXBlcy5lcnJvcilcbiAgICApIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoR3JhZmFuYU5vdGlmaWVyc0FjdGlvbigpKTtcbiAgICB9XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBkaXNwYXRjaCwgcmVjZWl2ZXJUeXBlc10pO1xuXG4gIGNvbnN0IGRpc2FibGVBbVNlbGVjdCA9ICFpc1Jvb3Q7XG5cbiAgaWYgKCFhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSB7XG4gICAgcmV0dXJuIGlzUm9vdCA/IChcbiAgICAgIDxBbGVydGluZ1BhZ2VXcmFwcGVyIHBhZ2VJZD1cInJlY2VpdmVyc1wiPlxuICAgICAgICA8Tm9BbGVydE1hbmFnZXJXYXJuaW5nIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM9e2FsZXJ0TWFuYWdlcnN9IC8+XG4gICAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICAgKSA6IChcbiAgICAgIDxSZWRpcmVjdCB0bz1cIi9hbGVydGluZy9ub3RpZmljYXRpb25zXCIgLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnRpbmdQYWdlV3JhcHBlciBwYWdlSWQ9XCJyZWNlaXZlcnNcIj5cbiAgICAgIDxBbGVydE1hbmFnZXJQaWNrZXJcbiAgICAgICAgY3VycmVudD17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVBbVNlbGVjdH1cbiAgICAgICAgb25DaGFuZ2U9e3NldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgIGRhdGFTb3VyY2VzPXthbGVydE1hbmFnZXJzfVxuICAgICAgLz5cbiAgICAgIHtlcnJvciAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBsb2FkaW5nIEFsZXJ0bWFuYWdlciBjb25maWdcIj5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvci4nfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIHtsb2FkaW5nICYmICFjb25maWcgJiYgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwibG9hZGluZyBjb25maWd1cmF0aW9uLi4uXCIgLz59XG4gICAgICB7Y29uZmlnICYmICFlcnJvciAmJiAoXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0PXt0cnVlfSBwYXRoPVwiL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIDxSZWNlaXZlcnNBbmRUZW1wbGF0ZXNWaWV3IGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0PXt0cnVlfSBwYXRoPVwiL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvdGVtcGxhdGVzL25ld1wiPlxuICAgICAgICAgICAgPE5ld1RlbXBsYXRlVmlldyBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdD17dHJ1ZX0gcGF0aD1cIi9hbGVydGluZy9ub3RpZmljYXRpb25zL3RlbXBsYXRlcy86bmFtZS9lZGl0XCI+XG4gICAgICAgICAgICB7KHsgbWF0Y2ggfTogUm91dGVDaGlsZHJlblByb3BzPHsgbmFtZTogc3RyaW5nIH0+KSA9PlxuICAgICAgICAgICAgICBtYXRjaD8ucGFyYW1zLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgIDxFZGl0VGVtcGxhdGVWaWV3XG4gICAgICAgICAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWU9e2RlY29kZVVSSUNvbXBvbmVudChtYXRjaD8ucGFyYW1zLm5hbWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdD17dHJ1ZX0gcGF0aD1cIi9hbGVydGluZy9ub3RpZmljYXRpb25zL3JlY2VpdmVycy9uZXdcIj5cbiAgICAgICAgICAgIDxOZXdSZWNlaXZlclZpZXcgY29uZmlnPXtjb25maWd9IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgZXhhY3Q9e3RydWV9IHBhdGg9XCIvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy9yZWNlaXZlcnMvOm5hbWUvZWRpdFwiPlxuICAgICAgICAgICAgeyh7IG1hdGNoIH06IFJvdXRlQ2hpbGRyZW5Qcm9wczx7IG5hbWU6IHN0cmluZyB9PikgPT5cbiAgICAgICAgICAgICAgbWF0Y2g/LnBhcmFtcy5uYW1lICYmIChcbiAgICAgICAgICAgICAgICA8RWRpdFJlY2VpdmVyVmlld1xuICAgICAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgICAgICAgICAgICAgcmVjZWl2ZXJOYW1lPXtkZWNvZGVVUklDb21wb25lbnQobWF0Y2g/LnBhcmFtcy5uYW1lKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgZXhhY3Q9e3RydWV9IHBhdGg9XCIvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy9nbG9iYWwtY29uZmlnXCI+XG4gICAgICAgICAgICA8R2xvYmFsQ29uZmlnRm9ybSBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICl9XG4gICAgPC9BbGVydGluZ1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVycm9yQm91bmRhcnkoUmVjZWl2ZXJzLCB7IHN0eWxlOiAncGFnZScgfSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VJZDogc3RyaW5nO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRpbmdQYWdlV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VJZCwgaXNMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChcbiAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KSxcbiAgICBwYWdlSWRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+e2NoaWxkcmVufTwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFjdGlvbnM6IEFjY2Vzc0NvbnRyb2xBY3Rpb25bXTtcbiAgZmFsbGJhY2s/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvcml6ZTogRkM8UHJvcHM+ID0gKHsgYWN0aW9ucywgY2hpbGRyZW4sIGZhbGxiYWNrID0gdHJ1ZSB9KSA9PiB7XG4gIGlmIChhY3Rpb25zLnNvbWUoKGFjdGlvbikgPT4gY29udGV4dFNydi5oYXNBY2Nlc3MoYWN0aW9uLCBmYWxsYmFjaykpKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vQWxlcnRNYW5hZ2VyUGlja2VyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdO1xufVxuXG5jb25zdCBOb0FsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIk5vIEFsZXJ0bWFuYWdlciBmb3VuZFwiIHNldmVyaXR5PVwid2FybmluZ1wiPlxuICAgIFdlIGNvdWxkIG5vdCBmaW5kIGFueSBleHRlcm5hbCBBbGVydG1hbmFnZXJzIGFuZCB5b3UgbWF5IG5vdCBoYXZlIGFjY2VzcyB0byB0aGUgYnVpbHQtaW4gR3JhZmFuYSBBbGVydG1hbmFnZXIuXG4gIDwvQWxlcnQ+XG4pO1xuXG5jb25zdCBPdGhlckFsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIlNlbGVjdGVkIEFsZXJ0bWFuYWdlciBub3QgZm91bmQuIFNlbGVjdCBhIGRpZmZlcmVudCBBbGVydG1hbmFnZXIuXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgU2VsZWN0ZWQgQWxlcnRtYW5hZ2VyIG5vIGxvbmdlciBleGlzdHMgb3IgeW91IG1heSBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBpdC5cbiAgPC9BbGVydD5cbik7XG5cbmV4cG9ydCBjb25zdCBOb0FsZXJ0TWFuYWdlcldhcm5pbmcgPSAoeyBhdmFpbGFibGVBbGVydE1hbmFnZXJzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtfLCBzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG4gIGNvbnN0IGhhc090aGVyQU1zID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtoYXNPdGhlckFNcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyIG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBkYXRhU291cmNlcz17YXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc30gLz5cbiAgICAgICAgICA8T3RoZXJBbGVydE1hbmFnZXJzQXZhaWxhYmxlIC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE5vQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydCwgQmFkZ2UgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBlbnVtIFByb3Zpc2lvbmVkUmVzb3VyY2Uge1xuICBDb250YWN0UG9pbnQgPSAnY29udGFjdCBwb2ludCcsXG4gIFRlbXBsYXRlID0gJ3RlbXBsYXRlJyxcbiAgTXV0ZVRpbWluZyA9ICdtdXRlIHRpbWluZycsXG4gIEFsZXJ0UnVsZSA9ICdhbGVydCBydWxlJyxcbiAgUm9vdE5vdGlmaWNhdGlvblBvbGljeSA9ICdyb290IG5vdGlmaWNhdGlvbiBwb2xpY3knLFxufVxuXG5pbnRlcmZhY2UgUHJvdmlzaW9uaW5nQWxlcnRQcm9wcyB7XG4gIHJlc291cmNlOiBQcm92aXNpb25lZFJlc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgUHJvdmlzaW9uaW5nQWxlcnQgPSAoeyByZXNvdXJjZSB9OiBQcm92aXNpb25pbmdBbGVydFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0IHRpdGxlPXtgVGhpcyAke3Jlc291cmNlfSBjYW5ub3QgYmUgZWRpdGVkIHRocm91Z2ggdGhlIFVJYH0gc2V2ZXJpdHk9XCJpbmZvXCI+XG4gICAgICBUaGlzIHtyZXNvdXJjZX0gaGFzIGJlZW4gcHJvdmlzaW9uZWQsIHRoYXQgbWVhbnMgaXQgd2FzIGNyZWF0ZWQgYnkgY29uZmlnLiBQbGVhc2UgY29udGFjdCB5b3VyIHNlcnZlciBhZG1pbiB0b1xuICAgICAgdXBkYXRlIHRoaXMge3Jlc291cmNlfS5cbiAgICA8L0FsZXJ0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFByb3Zpc2lvbmluZ0JhZGdlID0gKCkgPT4ge1xuICByZXR1cm4gPEJhZGdlIHRleHQ9eydQcm92aXNpb25lZCd9IGNvbG9yPXsncHVycGxlJ30gLz47XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5pbXBvcnQgeyBDbG91ZFJlY2VpdmVyRm9ybSB9IGZyb20gJy4vZm9ybS9DbG91ZFJlY2VpdmVyRm9ybSc7XG5pbXBvcnQgeyBHcmFmYW5hUmVjZWl2ZXJGb3JtIH0gZnJvbSAnLi9mb3JtL0dyYWZhbmFSZWNlaXZlckZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICByZWNlaXZlck5hbWU6IHN0cmluZztcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEVkaXRSZWNlaXZlclZpZXc6IEZDPFByb3BzPiA9ICh7IGNvbmZpZywgcmVjZWl2ZXJOYW1lLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0pID0+IHtcbiAgY29uc3QgcmVjZWl2ZXIgPSBjb25maWcuYWxlcnRtYW5hZ2VyX2NvbmZpZy5yZWNlaXZlcnM/LmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSByZWNlaXZlck5hbWUpO1xuICBpZiAoIXJlY2VpdmVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJSZWNlaXZlciBub3QgZm91bmRcIj5cbiAgICAgICAgU29ycnksIHRoaXMgcmVjZWl2ZXIgZG9lcyBub3Qgc2VlbSB0byBleGlzdC5cbiAgICAgIDwvQWxlcnQ+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lID09PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSB7XG4gICAgcmV0dXJuIDxHcmFmYW5hUmVjZWl2ZXJGb3JtIGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBleGlzdGluZz17cmVjZWl2ZXJ9IC8+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8Q2xvdWRSZWNlaXZlckZvcm0gY29uZmlnPXtjb25maWd9IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IGV4aXN0aW5nPXtyZWNlaXZlcn0gLz47XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEluZm9Cb3ggfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IFRlbXBsYXRlRm9ybSB9IGZyb20gJy4vVGVtcGxhdGVGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGVtcGxhdGVOYW1lOiBzdHJpbmc7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBFZGl0VGVtcGxhdGVWaWV3OiBGQzxQcm9wcz4gPSAoeyBjb25maWcsIHRlbXBsYXRlTmFtZSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlX2ZpbGVzPy5bdGVtcGxhdGVOYW1lXTtcbiAgY29uc3QgcHJvdmVuYW5jZSA9IGNvbmZpZy50ZW1wbGF0ZV9maWxlX3Byb3ZlbmFuY2VzPy5bdGVtcGxhdGVOYW1lXTtcblxuICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbmZvQm94IHNldmVyaXR5PVwiZXJyb3JcIiB0aXRsZT1cIlRlbXBsYXRlIG5vdCBmb3VuZFwiPlxuICAgICAgICBTb3JyeSwgdGhpcyB0ZW1wbGF0ZSBkb2VzIG5vdCBzZWVtIHRvIGV4aXQuXG4gICAgICA8L0luZm9Cb3g+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxUZW1wbGF0ZUZvcm1cbiAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgIGV4aXN0aW5nPXt7IG5hbWU6IHRlbXBsYXRlTmFtZSwgY29udGVudDogdGVtcGxhdGUgfX1cbiAgICAgIHByb3ZlbmFuY2U9e3Byb3ZlbmFuY2V9XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybSwgRm9ybVByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VDbGVhbnVwIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cCc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnbG9iYWxDb25maWdPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xvdWQtYWxlcnRtYW5hZ2VyLW5vdGlmaWVyLXR5cGVzJztcbmltcG9ydCB7IGlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBvbWl0RW1wdHlWYWx1ZXMgfSBmcm9tICcuLi8uLi91dGlscy9yZWNlaXZlci1mb3JtJztcblxuaW1wb3J0IHsgT3B0aW9uRmllbGQgfSBmcm9tICcuL2Zvcm0vZmllbGRzL09wdGlvbkZpZWxkJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxudHlwZSBGb3JtVmFsdWVzID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZXM6IEZvcm1WYWx1ZXMgPSB7XG4gIHNtdHBfcmVxdWlyZV90bHM6IHRydWUsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgR2xvYmFsQ29uZmlnRm9ybTogRkM8UHJvcHM+ID0gKHsgY29uZmlnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICB1c2VDbGVhbnVwKChzdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLnNhdmVBTUNvbmZpZyk7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IgfSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2F2ZUFNQ29uZmlnKTtcbiAgY29uc3QgcmVhZE9ubHkgPSBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGZvcm1BUEkgPSB1c2VGb3JtPEZvcm1WYWx1ZXM+KHtcbiAgICAvLyBtYWtpbmcgYSBjb3B5IGhlcmUgYmVhY3VzZSByZWFjdC1ob29rLWZvcm0gd2lsbCBtdXRhdGUgdGhlc2UsIGFuZCBicmVhayBpZiB0aGUgb2JqZWN0IGlzIGZyb3plbi4gZm9yIHJlYWwuXG4gICAgZGVmYXVsdFZhbHVlczogSlNPTi5wYXJzZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAgICAgLi4uKGNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLmdsb2JhbCA/PyB7fSksXG4gICAgICB9KVxuICAgICksXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gZm9ybUFQSTtcblxuICBjb25zdCBvblN1Ym1pdENhbGxiYWNrID0gKHZhbHVlczogRm9ybVZhbHVlcykgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uKHtcbiAgICAgICAgbmV3Q29uZmlnOiB7XG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIGFsZXJ0bWFuYWdlcl9jb25maWc6IHtcbiAgICAgICAgICAgIC4uLmNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLFxuICAgICAgICAgICAgZ2xvYmFsOiBvbWl0RW1wdHlWYWx1ZXModmFsdWVzKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvbGRDb25maWc6IGNvbmZpZyxcbiAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U6ICdHbG9iYWwgY29uZmlnIHVwZGF0ZWQuJyxcbiAgICAgICAgcmVkaXJlY3RQYXRoOiBtYWtlQU1MaW5rKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucycsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Qcm92aWRlciB7Li4uZm9ybUFQSX0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0Q2FsbGJhY2spfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9Pkdsb2JhbCBjb25maWc8L2g0PlxuICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBzYXZpbmcgcmVjZWl2ZXJcIj5cbiAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlIHx8IFN0cmluZyhlcnJvcil9XG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgKX1cbiAgICAgICAge2dsb2JhbENvbmZpZ09wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICA8T3B0aW9uRmllbGRcbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlc1tvcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgIGtleT17b3B0aW9uLnByb3BlcnR5TmFtZX1cbiAgICAgICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yc1tvcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgIHBhdGhQcmVmaXg9eycnfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXt0cnVlfSBpY29uPVwiZmEgZmEtc3Bpbm5lclwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFNhdmluZy4uLlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7IWxvYWRpbmcgJiYgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBnbG9iYWwgY29uZmlnPC9CdXR0b24+fVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgZmlsbD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgaHJlZj17bWFrZUFNTGluaygnYWxlcnRpbmcvbm90aWZpY2F0aW9ucycsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Gb3JtUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGhlYWRpbmc6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0LCAwKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IENsb3VkUmVjZWl2ZXJGb3JtIH0gZnJvbSAnLi9mb3JtL0Nsb3VkUmVjZWl2ZXJGb3JtJztcbmltcG9ydCB7IEdyYWZhbmFSZWNlaXZlckZvcm0gfSBmcm9tICcuL2Zvcm0vR3JhZmFuYVJlY2VpdmVyRm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOZXdSZWNlaXZlclZpZXc6IEZDPFByb3BzPiA9ICh7IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGNvbmZpZyB9KSA9PiB7XG4gIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lID09PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSB7XG4gICAgcmV0dXJuIDxHcmFmYW5hUmVjZWl2ZXJGb3JtIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IGNvbmZpZz17Y29uZmlnfSAvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPENsb3VkUmVjZWl2ZXJGb3JtIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IGNvbmZpZz17Y29uZmlnfSAvPjtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZUZvcm0gfSBmcm9tICcuL1RlbXBsYXRlRm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOZXdUZW1wbGF0ZVZpZXc6IEZDPFByb3BzPiA9ICh7IGNvbmZpZywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIHJldHVybiA8VGVtcGxhdGVGb3JtIGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSAvPjtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FLCBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vQXV0aG9yaXplJztcblxuaW1wb3J0IHsgUmVjZWl2ZXJzVGFibGUgfSBmcm9tICcuL1JlY2VpdmVyc1RhYmxlJztcbmltcG9ydCB7IFRlbXBsYXRlc1RhYmxlIH0gZnJvbSAnLi9UZW1wbGF0ZXNUYWJsZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBSZWNlaXZlcnNBbmRUZW1wbGF0ZXNWaWV3OiBGQzxQcm9wcz4gPSAoeyBjb25maWcsIGFsZXJ0TWFuYWdlck5hbWUgfSkgPT4ge1xuICBjb25zdCBpc0Nsb3VkID0gYWxlcnRNYW5hZ2VyTmFtZSAhPT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBpc1ZhbmlsbGFBTSA9IGlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlKGFsZXJ0TWFuYWdlck5hbWUpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWlzVmFuaWxsYUFNICYmIDxUZW1wbGF0ZXNUYWJsZSBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyTmFtZT17YWxlcnRNYW5hZ2VyTmFtZX0gLz59XG4gICAgICA8UmVjZWl2ZXJzVGFibGUgY29uZmlnPXtjb25maWd9IGFsZXJ0TWFuYWdlck5hbWU9e2FsZXJ0TWFuYWdlck5hbWV9IC8+XG4gICAgICB7aXNDbG91ZCAmJiAoXG4gICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W0FjY2Vzc0NvbnRyb2xBY3Rpb24uQWxlcnRpbmdOb3RpZmljYXRpb25zRXh0ZXJuYWxXcml0ZV19PlxuICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufSBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIkdsb2JhbCBjb25maWcgZm9yIGNvbnRhY3QgcG9pbnRzXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRm9yIGVhY2ggZXh0ZXJuYWwgQWxlcnRtYW5hZ2VyIHlvdSBjYW4gZGVmaW5lIGdsb2JhbCBzZXR0aW5ncywgbGlrZSBzZXJ2ZXIgYWRkcmVzc2VzLCB1c2VybmFtZXMgYW5kXG4gICAgICAgICAgICAgIHBhc3N3b3JkLCBmb3IgYWxsIHRoZSBzdXBwb3J0ZWQgY29udGFjdCBwb2ludHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXttYWtlQU1MaW5rKCdhbGVydGluZy9ub3RpZmljYXRpb25zL2dsb2JhbC1jb25maWcnLCBhbGVydE1hbmFnZXJOYW1lKX0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICB7aXNWYW5pbGxhQU0gPyAnVmlldyBnbG9iYWwgY29uZmlnJyA6ICdFZGl0IGdsb2JhbCBjb25maWcnfVxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgc2VjdGlvbjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFkZEJ1dHRvbkxhYmVsOiBzdHJpbmc7XG4gIGFkZEJ1dHRvblRvOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc2hvd0J1dHRvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSZWNlaXZlcnNTZWN0aW9uOiBGQzxQcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYWRkQnV0dG9uTGFiZWwsXG4gIGFkZEJ1dHRvblRvLFxuICBjaGlsZHJlbixcbiAgc2hvd0J1dHRvbiA9IHRydWUsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5oZWFkaW5nLCBjbGFzc05hbWUpfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd0J1dHRvbiAmJiAoXG4gICAgICAgICAgPExpbmsgdG89e2FkZEJ1dHRvblRvfT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGljb249XCJwbHVzXCI+XG4gICAgICAgICAgICAgIHthZGRCdXR0b25MYWJlbH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBoZWFkaW5nOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGAsXG4gIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb25maXJtTW9kYWwsIE1vZGFsLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BdXRob3JpemUnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBkZWxldGVSZWNlaXZlckFjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxlcnRUYWJsZVN0eWxlcyB9IGZyb20gJy4uLy4uL3N0eWxlcy90YWJsZSc7XG5pbXBvcnQgeyBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5pbXBvcnQgeyBpc1JlY2VpdmVyVXNlZCB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgZXh0cmFjdE5vdGlmaWVyVHlwZUNvdW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL3JlY2VpdmVycyc7XG5pbXBvcnQgeyBQcm92aXNpb25pbmdCYWRnZSB9IGZyb20gJy4uL1Byb3Zpc2lvbmluZyc7XG5pbXBvcnQgeyBBY3Rpb25JY29uIH0gZnJvbSAnLi4vcnVsZXMvQWN0aW9uSWNvbic7XG5cbmltcG9ydCB7IFJlY2VpdmVyc1NlY3Rpb24gfSBmcm9tICcuL1JlY2VpdmVyc1NlY3Rpb24nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb25maWc6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZztcbiAgYWxlcnRNYW5hZ2VyTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUmVjZWl2ZXJzVGFibGU6IEZDPFByb3BzPiA9ICh7IGNvbmZpZywgYWxlcnRNYW5hZ2VyTmFtZSB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdGFibGVTdHlsZXMgPSB1c2VTdHlsZXMyKGdldEFsZXJ0VGFibGVTdHlsZXMpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGlzVmFuaWxsYUFNID0gaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UoYWxlcnRNYW5hZ2VyTmFtZSk7XG4gIGNvbnN0IHBlcm1pc3Npb25zID0gZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zKGFsZXJ0TWFuYWdlck5hbWUpO1xuICBjb25zdCBncmFmYW5hTm90aWZpZXJzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ncmFmYW5hTm90aWZpZXJzKTtcblxuICAvLyByZWNlaXZlciBuYW1lIHNsYXRlZCBmb3IgZGVsZXRpb24uIElmIHRoaXMgaXMgc2V0LCBhIGNvbmZpcm1hdGlvbiBtb2RhbCBpcyBzaG93bi4gSWYgdXNlciBhcHByb3ZlcywgdGhpcyByZWNlaXZlciBpcyBkZWxldGVkXG4gIGNvbnN0IFtyZWNlaXZlclRvRGVsZXRlLCBzZXRSZWNlaXZlclRvRGVsZXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3Nob3dDYW5ub3REZWxldGVSZWNlaXZlck1vZGFsLCBzZXRTaG93Q2Fubm90RGVsZXRlUmVjZWl2ZXJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25DbGlja0RlbGV0ZVJlY2VpdmVyID0gKHJlY2VpdmVyTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKGlzUmVjZWl2ZXJVc2VkKHJlY2VpdmVyTmFtZSwgY29uZmlnKSkge1xuICAgICAgc2V0U2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWwodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFJlY2VpdmVyVG9EZWxldGUocmVjZWl2ZXJOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUmVjZWl2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHJlY2VpdmVyVG9EZWxldGUpIHtcbiAgICAgIGRpc3BhdGNoKGRlbGV0ZVJlY2VpdmVyQWN0aW9uKHJlY2VpdmVyVG9EZWxldGUsIGFsZXJ0TWFuYWdlck5hbWUpKTtcbiAgICB9XG4gICAgc2V0UmVjZWl2ZXJUb0RlbGV0ZSh1bmRlZmluZWQpO1xuICB9O1xuXG4gIGNvbnN0IHJvd3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBjb25maWcuYWxlcnRtYW5hZ2VyX2NvbmZpZy5yZWNlaXZlcnM/Lm1hcCgocmVjZWl2ZXIpID0+ICh7XG4gICAgICAgIG5hbWU6IHJlY2VpdmVyLm5hbWUsXG4gICAgICAgIHR5cGVzOiBPYmplY3QuZW50cmllcyhleHRyYWN0Tm90aWZpZXJUeXBlQ291bnRzKHJlY2VpdmVyLCBncmFmYW5hTm90aWZpZXJzLnJlc3VsdCA/PyBbXSkpLm1hcChcbiAgICAgICAgICAoW3R5cGUsIGNvdW50XSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICAgICAgICByZXR1cm4gYCR7dHlwZX0gKCR7Y291bnR9KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIHByb3Zpc2lvbmVkOiByZWNlaXZlci5ncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncz8uc29tZSgocmVjZWl2ZXIpID0+IHJlY2VpdmVyLnByb3ZlbmFuY2UpLFxuICAgICAgfSkpID8/IFtdLFxuICAgIFtjb25maWcsIGdyYWZhbmFOb3RpZmllcnMucmVzdWx0XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlY2VpdmVyc1NlY3Rpb25cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259XG4gICAgICB0aXRsZT1cIkNvbnRhY3QgcG9pbnRzXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiRGVmaW5lIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIHdpbGwgYmUgc2VudCB0bywgZm9yIGV4YW1wbGUgZW1haWwgb3IgU2xhY2suXCJcbiAgICAgIHNob3dCdXR0b249eyFpc1ZhbmlsbGFBTSAmJiBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMuY3JlYXRlKX1cbiAgICAgIGFkZEJ1dHRvbkxhYmVsPVwiTmV3IGNvbnRhY3QgcG9pbnRcIlxuICAgICAgYWRkQnV0dG9uVG89e21ha2VBTUxpbmsoJy9hbGVydGluZy9ub3RpZmljYXRpb25zL3JlY2VpdmVycy9uZXcnLCBhbGVydE1hbmFnZXJOYW1lKX1cbiAgICA+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZVN0eWxlcy50YWJsZX0gZGF0YS10ZXN0aWQ9XCJyZWNlaXZlcnMtdGFibGVcIj5cbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIDxjb2wgLz5cbiAgICAgICAgICA8Y29sIC8+XG4gICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMudXBkYXRlLCBwZXJtaXNzaW9ucy5kZWxldGVdfT5cbiAgICAgICAgICAgIDxjb2wgLz5cbiAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Db250YWN0IHBvaW50IG5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMudXBkYXRlLCBwZXJtaXNzaW9ucy5kZWxldGVdfT5cbiAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHshcm93cy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17dGFibGVTdHlsZXMuZXZlblJvd30+XG4gICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5ObyByZWNlaXZlcnMgZGVmaW5lZC48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtyb3dzLm1hcCgocmVjZWl2ZXIsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17cmVjZWl2ZXIubmFtZX0gY2xhc3NOYW1lPXtpZHggJSAyID09PSAwID8gdGFibGVTdHlsZXMuZXZlblJvdyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7cmVjZWl2ZXIubmFtZX0ge3JlY2VpdmVyLnByb3Zpc2lvbmVkICYmIDxQcm92aXNpb25pbmdCYWRnZSAvPn1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntyZWNlaXZlci50eXBlcy5qb2luKCcsICcpfTwvdGQ+XG4gICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZSwgcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17dGFibGVTdHlsZXMuYWN0aW9uc0NlbGx9PlxuICAgICAgICAgICAgICAgICAgeyFpc1ZhbmlsbGFBTSAmJiAhcmVjZWl2ZXIucHJvdmlzaW9uZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZV19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17bWFrZUFNTGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvcmVjZWl2ZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlY2VpdmVyLm5hbWUpfS9lZGl0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydE1hbmFnZXJOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJFZGl0IGNvbnRhY3QgcG9pbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrRGVsZXRlUmVjZWl2ZXIocmVjZWl2ZXIubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJEZWxldGUgY29udGFjdCBwb2ludFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgeyhpc1ZhbmlsbGFBTSB8fCByZWNlaXZlci5wcm92aXNpb25lZCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy51cGRhdGVdfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJ2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXttYWtlQU1MaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvcmVjZWl2ZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJlY2VpdmVyLm5hbWUpfS9lZGl0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJWaWV3IGNvbnRhY3QgcG9pbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImZpbGUtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIHshIXNob3dDYW5ub3REZWxldGVSZWNlaXZlck1vZGFsICYmIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgIHRpdGxlPVwiQ2Fubm90IGRlbGV0ZSBjb250YWN0IHBvaW50XCJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dDYW5ub3REZWxldGVSZWNlaXZlck1vZGFsKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQ29udGFjdCBwb2ludCBjYW5ub3QgYmUgZGVsZXRlZCBiZWNhdXNlIGl0IGlzIHVzZWQgaW4gbW9yZSBwb2xpY2llcy4gUGxlYXNlIHVwZGF0ZSBvciBkZWxldGUgdGhlc2UgcG9saWNpZXNcbiAgICAgICAgICAgIGZpcnN0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWwoZmFsc2UpfSBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICApfVxuICAgICAgeyEhcmVjZWl2ZXJUb0RlbGV0ZSAmJiAoXG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgdGl0bGU9XCJEZWxldGUgY29udGFjdCBwb2ludFwiXG4gICAgICAgICAgYm9keT17YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgY29udGFjdCBwb2ludCBcIiR7cmVjZWl2ZXJUb0RlbGV0ZX1cIj9gfVxuICAgICAgICAgIGNvbmZpcm1UZXh0PVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlUmVjZWl2ZXJ9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRSZWNlaXZlclRvRGVsZXRlKHVuZGVmaW5lZCl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUmVjZWl2ZXJzU2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgc2VjdGlvbjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBWYWxpZGF0ZSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgRmllbGQsIEZpZWxkU2V0LCBJbnB1dCwgTGlua0J1dHRvbiwgVGV4dEFyZWEsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VDbGVhbnVwIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cCc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBlbnN1cmVEZWZpbmUgfSBmcm9tICcuLi8uLi91dGlscy90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgUHJvdmlzaW9uZWRSZXNvdXJjZSwgUHJvdmlzaW9uaW5nQWxlcnQgfSBmcm9tICcuLi9Qcm92aXNpb25pbmcnO1xuXG5pbnRlcmZhY2UgVmFsdWVzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmNvbnN0IGRlZmF1bHRzOiBWYWx1ZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgbmFtZTogJycsXG4gIGNvbnRlbnQ6ICcnLFxufSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGV4aXN0aW5nPzogVmFsdWVzO1xuICBjb25maWc6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZztcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xuICBwcm92ZW5hbmNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVGVtcGxhdGVGb3JtOiBGQzxQcm9wcz4gPSAoeyBleGlzdGluZywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgY29uZmlnLCBwcm92ZW5hbmNlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5zYXZlQU1Db25maWcpO1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IgfSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2F2ZUFNQ29uZmlnKTtcblxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzOiBWYWx1ZXMpID0+IHtcbiAgICAvLyB3cmFwIGNvbnRlbnQgaW4gXCJkZWZpbmVcIiBpZiBpdCdzIG5vdCBhbHJlYWR5IHdyYXBwZWQsIGluIGNhc2UgdXNlciBkaWQgbm90IGRvIGl0L1xuICAgIC8vIGl0J3Mgbm90IG9idmlvdXMgdGhhdCB0aGlzIGlzIG5lZWRlZCBmb3IgdGVtcGxhdGUgdG8gd29ya1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbnN1cmVEZWZpbmUodmFsdWVzLm5hbWUsIHZhbHVlcy5jb250ZW50KTtcblxuICAgIC8vIGFkZCBuZXcgdGVtcGxhdGUgdG8gdGVtcGxhdGUgbWFwXG4gICAgY29uc3QgdGVtcGxhdGVfZmlsZXMgPSB7XG4gICAgICAuLi5jb25maWcudGVtcGxhdGVfZmlsZXMsXG4gICAgICBbdmFsdWVzLm5hbWVdOiBjb250ZW50LFxuICAgIH07XG5cbiAgICAvLyBkZWxldGUgZXhpc3Rpbmcgb25lIChpZiBuYW1lIGNoYW5nZWQsIG90aGVyd2lzZSBpdCB3YXMgb3ZlcndyaXR0ZW4gaW4gcHJldmlvdXMgc3RlcClcbiAgICBpZiAoZXhpc3RpbmcgJiYgZXhpc3RpbmcubmFtZSAhPT0gdmFsdWVzLm5hbWUpIHtcbiAgICAgIGRlbGV0ZSB0ZW1wbGF0ZV9maWxlc1tleGlzdGluZy5uYW1lXTtcbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgbmFtZSBmb3IgdGhlIHRlbXBsYXRlIGlzIGNvbmZpZ3VyZWQgb24gdGhlIGFsZXJ0bWFuYWdlciBjb25maWcgb2JqZWN0XG4gICAgY29uc3QgdGVtcGxhdGVzID0gW1xuICAgICAgLi4uKGNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLnRlbXBsYXRlcyA/PyBbXSkuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSBleGlzdGluZz8ubmFtZSksXG4gICAgICB2YWx1ZXMubmFtZSxcbiAgICBdO1xuXG4gICAgY29uc3QgbmV3Q29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgPSB7XG4gICAgICB0ZW1wbGF0ZV9maWxlcyxcbiAgICAgIGFsZXJ0bWFuYWdlcl9jb25maWc6IHtcbiAgICAgICAgLi4uY29uZmlnLmFsZXJ0bWFuYWdlcl9jb25maWcsXG4gICAgICAgIHRlbXBsYXRlcyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBkaXNwYXRjaChcbiAgICAgIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbih7XG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG4gICAgICAgIG5ld0NvbmZpZyxcbiAgICAgICAgb2xkQ29uZmlnOiBjb25maWcsXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiAnVGVtcGxhdGUgc2F2ZWQuJyxcbiAgICAgICAgcmVkaXJlY3RQYXRoOiAnL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMnLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHtcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVnaXN0ZXIsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybTxWYWx1ZXM+KHtcbiAgICBtb2RlOiAnb25TdWJtaXQnLFxuICAgIGRlZmF1bHRWYWx1ZXM6IGV4aXN0aW5nID8/IGRlZmF1bHRzLFxuICB9KTtcblxuICBjb25zdCB2YWxpZGF0ZU5hbWVJc1VuaXF1ZTogVmFsaWRhdGU8c3RyaW5nPiA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gIWNvbmZpZy50ZW1wbGF0ZV9maWxlc1tuYW1lXSB8fCBleGlzdGluZz8ubmFtZSA9PT0gbmFtZVxuICAgICAgPyB0cnVlXG4gICAgICA6ICdBbm90aGVyIHRlbXBsYXRlIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzLic7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxuICAgICAgPGg0PntleGlzdGluZyA/ICdFZGl0IG1lc3NhZ2UgdGVtcGxhdGUnIDogJ0NyZWF0ZSBtZXNzYWdlIHRlbXBsYXRlJ308L2g0PlxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIiB0aXRsZT1cIkVycm9yIHNhdmluZyB0ZW1wbGF0ZVwiPlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlIHx8IChlcnJvciBhcyBhbnkpPy5kYXRhPy5tZXNzYWdlIHx8IFN0cmluZyhlcnJvcil9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge3Byb3ZlbmFuY2UgJiYgPFByb3Zpc2lvbmluZ0FsZXJ0IHJlc291cmNlPXtQcm92aXNpb25lZFJlc291cmNlLlRlbXBsYXRlfSAvPn1cbiAgICAgIDxGaWVsZFNldCBkaXNhYmxlZD17Qm9vbGVhbihwcm92ZW5hbmNlKX0+XG4gICAgICAgIDxGaWVsZCBsYWJlbD1cIlRlbXBsYXRlIG5hbWVcIiBlcnJvcj17ZXJyb3JzPy5uYW1lPy5tZXNzYWdlfSBpbnZhbGlkPXshIWVycm9ycy5uYW1lPy5tZXNzYWdlfSByZXF1aXJlZD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0sXG4gICAgICAgICAgICAgIHZhbGlkYXRlOiB7IG5hbWVJc1VuaXF1ZTogdmFsaWRhdGVOYW1lSXNVbmlxdWUgfSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJHaXZlIHlvdXIgdGVtcGxhdGUgYSBuYW1lXCJcbiAgICAgICAgICAgIHdpZHRoPXs0Mn1cbiAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBZb3UgY2FuIHVzZSB0aGV7JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3BrZy5nby5kZXYvdGV4dC90ZW1wbGF0ZT91dG1fc291cmNlPWdvZG9jXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5leHRlcm5hbExpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHbyB0ZW1wbGF0aW5nIGxhbmd1YWdlXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgLnsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcHJvbWV0aGV1cy5pby9ibG9nLzIwMTYvMDMvMDMvY3VzdG9tLWFsZXJ0bWFuYWdlci10ZW1wbGF0ZXMvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5leHRlcm5hbExpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNb3JlIGluZm8gYWJvdXQgYWxlcnRtYW5hZ2VyIHRlbXBsYXRlc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgICAgbGFiZWw9XCJDb250ZW50XCJcbiAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5jb250ZW50Py5tZXNzYWdlfVxuICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmNvbnRlbnQ/Lm1lc3NhZ2V9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdjb250ZW50JywgeyByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSB9KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHRhcmVhfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgIHJvd3M9ezEyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0gaWNvbj1cImZhIGZhLXNwaW5uZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICBTYXZpbmcuLi5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFsb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgIFNhdmUgdGVtcGxhdGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgaHJlZj17bWFrZUFNTGluaygnYWxlcnRpbmcvbm90aWZpY2F0aW9ucycsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpfVxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GaWVsZFNldD5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGV4dGVybmFsTGluazogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGAsXG4gIGJ1dHRvbnM6IGNzc2BcbiAgICAmID4gKiArICoge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuICBgLFxuICB0ZXh0YXJlYTogY3NzYFxuICAgIG1heC13aWR0aDogNzU4cHg7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgRnJhZ21lbnQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IENvbmZpcm1Nb2RhbCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXV0aG9yaXplJztcbmltcG9ydCB7IGRlbGV0ZVRlbXBsYXRlQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRBbGVydFRhYmxlU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RhYmxlJztcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcbmltcG9ydCB7IG1ha2VBTUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IENvbGxhcHNlVG9nZ2xlIH0gZnJvbSAnLi4vQ29sbGFwc2VUb2dnbGUnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vRGV0YWlsc0ZpZWxkJztcbmltcG9ydCB7IFByb3Zpc2lvbmluZ0JhZGdlIH0gZnJvbSAnLi4vUHJvdmlzaW9uaW5nJztcbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuLi9ydWxlcy9BY3Rpb25JY29uJztcblxuaW1wb3J0IHsgUmVjZWl2ZXJzU2VjdGlvbiB9IGZyb20gJy4vUmVjZWl2ZXJzU2VjdGlvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBUZW1wbGF0ZXNUYWJsZTogRkM8UHJvcHM+ID0gKHsgY29uZmlnLCBhbGVydE1hbmFnZXJOYW1lIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbZXhwYW5kZWRUZW1wbGF0ZXMsIHNldEV4cGFuZGVkVGVtcGxhdGVzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+Pih7fSk7XG4gIGNvbnN0IHRhYmxlU3R5bGVzID0gdXNlU3R5bGVzMihnZXRBbGVydFRhYmxlU3R5bGVzKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMoYWxlcnRNYW5hZ2VyTmFtZSk7XG5cbiAgY29uc3QgdGVtcGxhdGVSb3dzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gT2JqZWN0LmVudHJpZXMoY29uZmlnLnRlbXBsYXRlX2ZpbGVzKTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZXMubWFwKChbbmFtZSwgdGVtcGxhdGVdKSA9PiAoe1xuICAgICAgbmFtZSxcbiAgICAgIHRlbXBsYXRlLFxuICAgICAgcHJvdmVuYW5jZTogKGNvbmZpZy50ZW1wbGF0ZV9maWxlX3Byb3ZlbmFuY2VzID8/IHt9KVtuYW1lXSxcbiAgICB9KSk7XG4gIH0sIFtjb25maWddKTtcbiAgY29uc3QgW3RlbXBsYXRlVG9EZWxldGUsIHNldFRlbXBsYXRlVG9EZWxldGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIGNvbnN0IGRlbGV0ZVRlbXBsYXRlID0gKCkgPT4ge1xuICAgIGlmICh0ZW1wbGF0ZVRvRGVsZXRlKSB7XG4gICAgICBkaXNwYXRjaChkZWxldGVUZW1wbGF0ZUFjdGlvbih0ZW1wbGF0ZVRvRGVsZXRlLCBhbGVydE1hbmFnZXJOYW1lKSk7XG4gICAgfVxuICAgIHNldFRlbXBsYXRlVG9EZWxldGUodW5kZWZpbmVkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWNlaXZlcnNTZWN0aW9uXG4gICAgICB0aXRsZT1cIk1lc3NhZ2UgdGVtcGxhdGVzXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiVGVtcGxhdGVzIGNvbnN0cnVjdCB0aGUgbWVzc2FnZXMgdGhhdCBnZXQgc2VudCB0byB0aGUgY29udGFjdCBwb2ludHMuXCJcbiAgICAgIGFkZEJ1dHRvbkxhYmVsPVwiTmV3IHRlbXBsYXRlXCJcbiAgICAgIGFkZEJ1dHRvblRvPXttYWtlQU1MaW5rKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy90ZW1wbGF0ZXMvbmV3JywgYWxlcnRNYW5hZ2VyTmFtZSl9XG4gICAgICBzaG93QnV0dG9uPXtjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMuY3JlYXRlKX1cbiAgICA+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZVN0eWxlcy50YWJsZX0gZGF0YS10ZXN0aWQ9XCJ0ZW1wbGF0ZXMtdGFibGVcIj5cbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIDxjb2wgY2xhc3NOYW1lPXt0YWJsZVN0eWxlcy5jb2xFeHBhbmR9IC8+XG4gICAgICAgICAgPGNvbCAvPlxuICAgICAgICAgIDxjb2wgLz5cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPHRoPlRlbXBsYXRlPC90aD5cbiAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZSwgcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7IXRlbXBsYXRlUm93cy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17dGFibGVTdHlsZXMuZXZlblJvd30+XG4gICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5ObyB0ZW1wbGF0ZXMgZGVmaW5lZC48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0ZW1wbGF0ZVJvd3MubWFwKCh7IG5hbWUsIHRlbXBsYXRlLCBwcm92ZW5hbmNlIH0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNFeHBhbmRlZCA9ICEhZXhwYW5kZWRUZW1wbGF0ZXNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICA8dHIga2V5PXtuYW1lfSBjbGFzc05hbWU9e2lkeCAlIDIgPT09IDAgPyB0YWJsZVN0eWxlcy5ldmVuUm93IDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQ9eyFleHBhbmRlZFRlbXBsYXRlc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17KCkgPT4gc2V0RXhwYW5kZWRUZW1wbGF0ZXMoeyAuLi5leHBhbmRlZFRlbXBsYXRlcywgW25hbWVdOiAhaXNFeHBhbmRlZCB9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfSB7cHJvdmVuYW5jZSAmJiA8UHJvdmlzaW9uaW5nQmFkZ2UgLz59XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17dGFibGVTdHlsZXMuYWN0aW9uc0NlbGx9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvdmVuYW5jZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXttYWtlQU1MaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvdGVtcGxhdGVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfS9lZGl0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJ2aWV3IHRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJmaWxlLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgeyFwcm92ZW5hbmNlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy51cGRhdGUsIHBlcm1pc3Npb25zLmRlbGV0ZV19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMudXBkYXRlXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e21ha2VBTUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvdGVtcGxhdGVzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfS9lZGl0YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0TWFuYWdlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJlZGl0IHRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGVtcGxhdGVUb0RlbGV0ZShuYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiZGVsZXRlIHRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHtpc0V4cGFuZGVkICYmIChcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e2lkeCAlIDIgPT09IDAgPyB0YWJsZVN0eWxlcy5ldmVuUm93IDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiRGVzY3JpcHRpb25cIiBob3Jpem9udGFsPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+e3RlbXBsYXRlfTwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRGV0YWlsc0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICAgIHshIXRlbXBsYXRlVG9EZWxldGUgJiYgKFxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHRlbXBsYXRlXCJcbiAgICAgICAgICBib2R5PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0ZW1wbGF0ZSBcIiR7dGVtcGxhdGVUb0RlbGV0ZX1cIj9gfVxuICAgICAgICAgIGNvbmZpcm1UZXh0PVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlVGVtcGxhdGV9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRUZW1wbGF0ZVRvRGVsZXRlKHVuZGVmaW5lZCl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUmVjZWl2ZXJzU2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIEZpZWxkRXJyb3IsIEZpZWxkRXJyb3JzLCBEZWVwTWFwIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgQ2hhbm5lbFZhbHVlcywgUmVjZWl2ZXJGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5cbmltcG9ydCB7IE9wdGlvbkZpZWxkIH0gZnJvbSAnLi9maWVsZHMvT3B0aW9uRmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzPFIgZXh0ZW5kcyBDaGFubmVsVmFsdWVzPiB7XG4gIGRlZmF1bHRWYWx1ZXM6IFI7XG4gIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM6IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25bXTtcbiAgc2VjdXJlRmllbGRzOiBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzO1xuXG4gIG9uUmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xuICBlcnJvcnM/OiBGaWVsZEVycm9yczxSPjtcbiAgcGF0aFByZWZpeD86IHN0cmluZztcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbE9wdGlvbnM8UiBleHRlbmRzIENoYW5uZWxWYWx1ZXM+KHtcbiAgZGVmYXVsdFZhbHVlcyxcbiAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucyxcbiAgb25SZXNldFNlY3VyZUZpZWxkLFxuICBzZWN1cmVGaWVsZHMsXG4gIGVycm9ycyxcbiAgcGF0aFByZWZpeCA9ICcnLFxuICByZWFkT25seSA9IGZhbHNlLFxufTogUHJvcHM8Uj4pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgd2F0Y2ggfSA9IHVzZUZvcm1Db250ZXh0PFJlY2VpdmVyRm9ybVZhbHVlczxSPj4oKTtcbiAgY29uc3QgY3VycmVudEZvcm1WYWx1ZXMgPSB3YXRjaCgpIGFzIFJlY29yZDxzdHJpbmcsIGFueT47IC8vIHJlYWN0IGhvb2sgZm9ybSB0eXBlcyBBUkUgTFlJTkchXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzZWxlY3RlZENoYW5uZWxPcHRpb25zLm1hcCgob3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke29wdGlvbi5sYWJlbH0tJHtpbmRleH1gO1xuICAgICAgICAvLyBTb21lIG9wdGlvbnMgY2FuIGJlIGRlcGVuZGVudCBvbiBvdGhlciBvcHRpb25zLCB0aGlzIGRldGVybWluZXMgd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgZGVwZW5kZW5jeSBvcHRpb25zXG4gICAgICAgIC8vIEkgdGhpbmsgdGhpcyBuZWVkcyBtb3JlIHRob3VnaHQuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBjdXJyZW50Rm9ybVZhbHVlc1tgJHtwYXRoUHJlZml4fXNldHRpbmdzLiR7b3B0aW9uLnNob3dXaGVuLmZpZWxkfWBdO1xuXG4gICAgICAgIGlmIChvcHRpb24uc2hvd1doZW4uZmllbGQgJiYgc2VsZWN0ZWRPcHRpb25WYWx1ZSAhPT0gb3B0aW9uLnNob3dXaGVuLmlzKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlRmllbGRzICYmIHNlY3VyZUZpZWxkc1tvcHRpb24ucHJvcGVydHlOYW1lXSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGQga2V5PXtrZXl9IGxhYmVsPXtvcHRpb24ubGFiZWx9IGRlc2NyaXB0aW9uPXtvcHRpb24uZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJDb25maWd1cmVkXCJcbiAgICAgICAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgICAgICAgcmVhZE9ubHkgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzZXRTZWN1cmVGaWVsZChvcHRpb24ucHJvcGVydHlOYW1lKX0gZmlsbD1cInRleHRcIiB0eXBlPVwiYnV0dG9uXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXJyb3I6IEZpZWxkRXJyb3IgfCBEZWVwTWFwPGFueSwgRmllbGRFcnJvcj4gfCB1bmRlZmluZWQgPSAoXG4gICAgICAgICAgKG9wdGlvbi5zZWN1cmUgPyBlcnJvcnM/LnNlY3VyZVNldHRpbmdzIDogZXJyb3JzPy5zZXR0aW5ncykgYXMgRGVlcE1hcDxhbnksIEZpZWxkRXJyb3I+IHwgdW5kZWZpbmVkXG4gICAgICAgICk/LltvcHRpb24ucHJvcGVydHlOYW1lXTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWVzPy5zZXR0aW5ncz8uW29wdGlvbi5wcm9wZXJ0eU5hbWVdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE9wdGlvbkZpZWxkXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgcGF0aFByZWZpeD17cGF0aFByZWZpeH1cbiAgICAgICAgICAgIHBhdGhTdWZmaXg9e29wdGlvbi5zZWN1cmUgPyAnc2VjdXJlU2V0dGluZ3MuJyA6ICdzZXR0aW5ncy4nfVxuICAgICAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIEZpZWxkRXJyb3JzIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBGaWVsZCwgSW5wdXRDb250cm9sLCBTZWxlY3QsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmllckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgQ2hhbm5lbFZhbHVlcywgQ29tbW9uU2V0dGluZ3NDb21wb25lbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5cbmltcG9ydCB7IENoYW5uZWxPcHRpb25zIH0gZnJvbSAnLi9DaGFubmVsT3B0aW9ucyc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZVNlY3Rpb24gfSBmcm9tICcuL0NvbGxhcHNpYmxlU2VjdGlvbic7XG5cbmludGVyZmFjZSBQcm9wczxSPiB7XG4gIGRlZmF1bHRWYWx1ZXM6IFI7XG4gIHBhdGhQcmVmaXg6IHN0cmluZztcbiAgbm90aWZpZXJzOiBOb3RpZmllckRUT1tdO1xuICBvbkR1cGxpY2F0ZTogKCkgPT4gdm9pZDtcbiAgb25UZXN0PzogKCkgPT4gdm9pZDtcbiAgY29tbW9uU2V0dGluZ3NDb21wb25lbnQ6IENvbW1vblNldHRpbmdzQ29tcG9uZW50VHlwZTtcblxuICBzZWN1cmVGaWVsZHM/OiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPjtcbiAgZXJyb3JzPzogRmllbGRFcnJvcnM8Uj47XG4gIG9uRGVsZXRlPzogKCkgPT4gdm9pZDtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbFN1YkZvcm08UiBleHRlbmRzIENoYW5uZWxWYWx1ZXM+KHtcbiAgZGVmYXVsdFZhbHVlcyxcbiAgcGF0aFByZWZpeCxcbiAgb25EdXBsaWNhdGUsXG4gIG9uRGVsZXRlLFxuICBvblRlc3QsXG4gIG5vdGlmaWVycyxcbiAgZXJyb3JzLFxuICBzZWN1cmVGaWVsZHMsXG4gIGNvbW1vblNldHRpbmdzQ29tcG9uZW50OiBDb21tb25TZXR0aW5nc0NvbXBvbmVudCxcbiAgcmVhZE9ubHkgPSBmYWxzZSxcbn06IFByb3BzPFI+KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IG5hbWUgPSAoZmllbGROYW1lOiBzdHJpbmcpID0+IGAke3BhdGhQcmVmaXh9JHtmaWVsZE5hbWV9YDtcbiAgY29uc3QgeyBjb250cm9sLCB3YXRjaCwgcmVnaXN0ZXIsIHRyaWdnZXIsIGZvcm1TdGF0ZSwgc2V0VmFsdWUgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IHNlbGVjdGVkVHlwZSA9IHdhdGNoKG5hbWUoJ3R5cGUnKSkgPz8gZGVmYXVsdFZhbHVlcy50eXBlOyAvLyBub3BlLCBzZXR0aW5nIFwiZGVmYXVsdFwiIGRvZXMgbm90IHdvcmsgYXQgYWxsLlxuICBjb25zdCB7IGxvYWRpbmc6IHRlc3RpbmdSZWNlaXZlciB9ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50ZXN0UmVjZWl2ZXJzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZ2lzdGVyKGAke3BhdGhQcmVmaXh9Ll9faWRgKTtcbiAgICAvKiBOZWVkIHRvIG1hbnVhbGx5IHJlZ2lzdGVyIHNlY3VyZUZpZWxkcyBvciBlbHNlIHRoZXknbGxcbiAgICAgYmUgbG9zdCB3aGVuIHRlc3RpbmcgYSBjb250YWN0IHBvaW50ICovXG4gICAgcmVnaXN0ZXIoYCR7cGF0aFByZWZpeH0uc2VjdXJlRmllbGRzYCk7XG4gIH0sIFtyZWdpc3RlciwgcGF0aFByZWZpeF0pO1xuXG4gIGNvbnN0IFtfc2VjdXJlRmllbGRzLCBzZXRTZWN1cmVGaWVsZHNdID0gdXNlU3RhdGUoc2VjdXJlRmllbGRzID8/IHt9KTtcblxuICBjb25zdCBvblJlc2V0U2VjdXJlRmllbGQgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoX3NlY3VyZUZpZWxkc1trZXldKSB7XG4gICAgICBjb25zdCB1cGRhdGVkU2VjdXJlRmllbGRzID0geyAuLi5zZWN1cmVGaWVsZHMgfTtcbiAgICAgIGRlbGV0ZSB1cGRhdGVkU2VjdXJlRmllbGRzW2tleV07XG4gICAgICBzZXRTZWN1cmVGaWVsZHModXBkYXRlZFNlY3VyZUZpZWxkcyk7XG4gICAgICBzZXRWYWx1ZShgJHtwYXRoUHJlZml4fS5zZWN1cmVGaWVsZHNgLCB1cGRhdGVkU2VjdXJlRmllbGRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHlwZU9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpOiBTZWxlY3RhYmxlVmFsdWVbXSA9PlxuICAgICAgbm90aWZpZXJzXG4gICAgICAgIC5tYXAoKHsgbmFtZSwgdHlwZSB9KSA9PiAoe1xuICAgICAgICAgIGxhYmVsOiBuYW1lLFxuICAgICAgICAgIHZhbHVlOiB0eXBlLFxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubGFiZWwubG9jYWxlQ29tcGFyZShiLmxhYmVsKSksXG4gICAgW25vdGlmaWVyc11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVUZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRyaWdnZXIoKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gT2JqZWN0LmtleXMoZm9ybVN0YXRlLmVycm9ycykubGVuZ3RoID09PSAwO1xuXG4gICAgaWYgKGlzVmFsaWQgJiYgb25UZXN0KSB7XG4gICAgICBvblRlc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgbm90aWZpZXIgPSBub3RpZmllcnMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IHNlbGVjdGVkVHlwZSk7XG4gIC8vIGlmIHRoZXJlIGFyZSBtYW5kYXRvcnkgb3B0aW9ucyBkZWZpbmVkLCBvcHRpb25hbCBvcHRpb25zIHdpbGwgYmUgaGlkZGVuIGJ5IGEgY29sbGFwc2VcbiAgLy8gaWYgdGhlcmUgYXJlbid0IG1hbmRhdG9yeSBvcHRpb25zLCBhbGwgb3B0aW9ucyB3aWxsIGJlIHNob3duIHdpdGhvdXQgY29sbGFwc2VcbiAgY29uc3QgbWFuZGF0b3J5T3B0aW9ucyA9IG5vdGlmaWVyPy5vcHRpb25zLmZpbHRlcigobykgPT4gby5yZXF1aXJlZCk7XG4gIGNvbnN0IG9wdGlvbmFsT3B0aW9ucyA9IG5vdGlmaWVyPy5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpO1xuXG4gIGNvbnN0IGNvbnRhY3RQb2ludFR5cGVJbnB1dElkID0gYGNvbnRhY3QtcG9pbnQtdHlwZS0ke3BhdGhQcmVmaXh9YDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IGRhdGEtdGVzdGlkPVwiaXRlbS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wUm93fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJDb250YWN0IHBvaW50IHR5cGVcIiBodG1sRm9yPXtjb250YWN0UG9pbnRUeXBlSW5wdXRJZH0gZGF0YS10ZXN0aWQ9e2Ake3BhdGhQcmVmaXh9dHlwZWB9PlxuICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICBuYW1lPXtuYW1lKCd0eXBlJyl9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlcy50eXBlfVxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgb25DaGFuZ2UsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9e2NvbnRhY3RQb2ludFR5cGVJbnB1dElkfVxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezM3fVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dHlwZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZT8udmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAge29uVGVzdCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGVzdGluZ1JlY2VpdmVyfVxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGVzdCgpfVxuICAgICAgICAgICAgICAgIGljb249e3Rlc3RpbmdSZWNlaXZlciA/ICdmYSBmYS1zcGlubmVyJyA6ICdtZXNzYWdlJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRlc3RcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwieHNcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG9uRHVwbGljYXRlKCl9IGljb249XCJjb3B5XCI+XG4gICAgICAgICAgICAgIER1cGxpY2F0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Ake3BhdGhQcmVmaXh9ZGVsZXRlLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZSgpfVxuICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge25vdGlmaWVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckNvbnRlbnR9PlxuICAgICAgICAgIDxDaGFubmVsT3B0aW9uczxSPlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlcz17ZGVmYXVsdFZhbHVlc31cbiAgICAgICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e21hbmRhdG9yeU9wdGlvbnM/Lmxlbmd0aCA/IG1hbmRhdG9yeU9wdGlvbnMhIDogb3B0aW9uYWxPcHRpb25zIX1cbiAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17X3NlY3VyZUZpZWxkc31cbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgb25SZXNldFNlY3VyZUZpZWxkPXtvblJlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICBwYXRoUHJlZml4PXtwYXRoUHJlZml4fVxuICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyEhKG1hbmRhdG9yeU9wdGlvbnM/Lmxlbmd0aCAmJiBvcHRpb25hbE9wdGlvbnM/Lmxlbmd0aCkgJiYgKFxuICAgICAgICAgICAgPENvbGxhcHNpYmxlU2VjdGlvbiBsYWJlbD17YE9wdGlvbmFsICR7bm90aWZpZXIubmFtZX0gc2V0dGluZ3NgfT5cbiAgICAgICAgICAgICAge25vdGlmaWVyLmluZm8gIT09ICcnICYmIChcbiAgICAgICAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJcIiBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgIHtub3RpZmllci5pbmZvfVxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDaGFubmVsT3B0aW9uczxSPlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucz17b3B0aW9uYWxPcHRpb25zIX1cbiAgICAgICAgICAgICAgICBzZWN1cmVGaWVsZHM9e19zZWN1cmVGaWVsZHN9XG4gICAgICAgICAgICAgICAgb25SZXNldFNlY3VyZUZpZWxkPXtvblJlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgcGF0aFByZWZpeD17cGF0aFByZWZpeH1cbiAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbGxhcHNpYmxlU2VjdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb2xsYXBzaWJsZVNlY3Rpb24gbGFiZWw9XCJOb3RpZmljYXRpb24gc2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxDb21tb25TZXR0aW5nc0NvbXBvbmVudCBwYXRoUHJlZml4PXtwYXRoUHJlZml4fSByZWFkT25seT17cmVhZE9ubHl9IC8+XG4gICAgICAgICAgPC9Db2xsYXBzaWJsZVNlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBidXR0b25zOiBjc3NgXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbiAgaW5uZXJDb250ZW50OiBjc3NgXG4gICAgbWF4LXdpZHRoOiA1MzZweDtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDIsIDApfTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDEpfTtcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhsfSR7dGhlbWUuYnJlYWtwb2ludHMudW5pdH07XG4gIGAsXG4gIHRvcFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGAsXG4gIGNoYW5uZWxTZXR0aW5nc0hlYWRlcjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgQ2hlY2tib3gsIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDb21tb25TZXR0aW5nc0NvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5cbmV4cG9ydCBjb25zdCBDbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5nczogRkM8Q29tbW9uU2V0dGluZ3NDb21wb25lbnRQcm9wcz4gPSAoe1xuICBwYXRoUHJlZml4LFxuICBjbGFzc05hbWUsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8RmllbGQgZGlzYWJsZWQ9e3JlYWRPbmx5fT5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKGAke3BhdGhQcmVmaXh9c2VuZFJlc29sdmVkYCl9XG4gICAgICAgICAgbGFiZWw9XCJTZW5kIHJlc29sdmVkXCJcbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgZGVzY3JpcHRpb249XCJXaGV0aGVyIG9yIG5vdCB0byBub3RpZnkgYWJvdXQgcmVzb2x2ZWQgYWxlcnRzLlwiXG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZywgUmVjZWl2ZXIgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ2xvdWRDaGFubmVsVmFsdWVzLCBSZWNlaXZlckZvcm1WYWx1ZXMsIENsb3VkQ2hhbm5lbE1hcCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3JlY2VpdmVyLWZvcm0nO1xuaW1wb3J0IHsgY2xvdWROb3RpZmllclR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2xvdWQtYWxlcnRtYW5hZ2VyLW5vdGlmaWVyLXR5cGVzJztcbmltcG9ydCB7IGlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQge1xuICBjbG91ZFJlY2VpdmVyVG9Gb3JtVmFsdWVzLFxuICBmb3JtVmFsdWVzVG9DbG91ZFJlY2VpdmVyLFxuICB1cGRhdGVDb25maWdXaXRoUmVjZWl2ZXIsXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlY2VpdmVyLWZvcm0nO1xuXG5pbXBvcnQgeyBDbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5ncyB9IGZyb20gJy4vQ2xvdWRDb21tb25DaGFubmVsU2V0dGluZ3MnO1xuaW1wb3J0IHsgUmVjZWl2ZXJGb3JtIH0gZnJvbSAnLi9SZWNlaXZlckZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBleGlzdGluZz86IFJlY2VpdmVyO1xufVxuXG5jb25zdCBkZWZhdWx0Q2hhbm5lbFZhbHVlczogQ2xvdWRDaGFubmVsVmFsdWVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIF9faWQ6ICcnLFxuICBzZW5kUmVzb2x2ZWQ6IHRydWUsXG4gIHNlY3VyZVNldHRpbmdzOiB7fSxcbiAgc2V0dGluZ3M6IHt9LFxuICBzZWN1cmVGaWVsZHM6IHt9LFxuICB0eXBlOiAnZW1haWwnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDbG91ZFJlY2VpdmVyRm9ybTogRkM8UHJvcHM+ID0gKHsgZXhpc3RpbmcsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNWYW5pbGxhQU0gPSBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICAvLyB0cmFuc2Zvcm0gcmVjZWl2ZXIgRFRPIHRvIGZvcm0gdmFsdWVzXG4gIGNvbnN0IFtleGlzdGluZ1ZhbHVlXSA9IHVzZU1lbW8oKCk6IFtSZWNlaXZlckZvcm1WYWx1ZXM8Q2xvdWRDaGFubmVsVmFsdWVzPiB8IHVuZGVmaW5lZCwgQ2xvdWRDaGFubmVsTWFwXSA9PiB7XG4gICAgaWYgKCFleGlzdGluZykge1xuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHt9XTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb3VkUmVjZWl2ZXJUb0Zvcm1WYWx1ZXMoZXhpc3RpbmcsIGNsb3VkTm90aWZpZXJUeXBlcyk7XG4gIH0sIFtleGlzdGluZ10pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPENsb3VkQ2hhbm5lbFZhbHVlcz4pID0+IHtcbiAgICBjb25zdCBuZXdSZWNlaXZlciA9IGZvcm1WYWx1ZXNUb0Nsb3VkUmVjZWl2ZXIodmFsdWVzLCBkZWZhdWx0Q2hhbm5lbFZhbHVlcyk7XG4gICAgZGlzcGF0Y2goXG4gICAgICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oe1xuICAgICAgICBuZXdDb25maWc6IHVwZGF0ZUNvbmZpZ1dpdGhSZWNlaXZlcihjb25maWcsIG5ld1JlY2VpdmVyLCBleGlzdGluZz8ubmFtZSksXG4gICAgICAgIG9sZENvbmZpZzogY29uZmlnLFxuICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICAgICAgICBzdWNjZXNzTWVzc2FnZTogZXhpc3RpbmcgPyAnQ29udGFjdCBwb2ludCB1cGRhdGVkLicgOiAnQ29udGFjdCBwb2ludCBjcmVhdGVkLicsXG4gICAgICAgIHJlZGlyZWN0UGF0aDogJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB0YWtlblJlY2VpdmVyTmFtZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IGNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLnJlY2VpdmVycz8ubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSkuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSBleGlzdGluZz8ubmFtZSkgPz8gW10sXG4gICAgW2NvbmZpZywgZXhpc3RpbmddXG4gICk7XG5cbiAgY29uc3QgcmVhZE9ubHkgPSBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWlzVmFuaWxsYUFNICYmIChcbiAgICAgICAgPEFsZXJ0IHRpdGxlPVwiSW5mb1wiIHNldmVyaXR5PVwiaW5mb1wiPlxuICAgICAgICAgIE5vdGUgdGhhdCBlbXB0eSBzdHJpbmcgdmFsdWVzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBnbG9iYWwgZGVmYXVsdHMgd2hlcmUgYXBwcm9wcmlhdGUuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAgPFJlY2VpdmVyRm9ybTxDbG91ZENoYW5uZWxWYWx1ZXM+XG4gICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17ZXhpc3RpbmdWYWx1ZX1cbiAgICAgICAgbm90aWZpZXJzPXtjbG91ZE5vdGlmaWVyVHlwZXN9XG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgIGRlZmF1bHRJdGVtPXtkZWZhdWx0Q2hhbm5lbFZhbHVlc31cbiAgICAgICAgdGFrZW5SZWNlaXZlck5hbWVzPXt0YWtlblJlY2VpdmVyTmFtZXN9XG4gICAgICAgIGNvbW1vblNldHRpbmdzQ29tcG9uZW50PXtDbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5nc31cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uU2l6ZSwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGUgfSBmcm9tICcuLi8uLi9Db2xsYXBzZVRvZ2dsZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHNpemU/OiBJY29uU2l6ZTtcbn1cblxuZXhwb3J0IGNvbnN0IENvbGxhcHNpYmxlU2VjdGlvbjogRkM8UHJvcHM+ID0gKHsgbGFiZWwsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzaXplID0gJ3hsJyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW2lzQ29sbGFwc2VkLCBzZXRJc0NvbGxhcHNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCB0b2dnbGVDb2xsYXBzZSA9ICgpID0+IHNldElzQ29sbGFwc2VkKCFpc0NvbGxhcHNlZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLndyYXBwZXIsIGNsYXNzTmFtZSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfSBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZX0+XG4gICAgICAgIDxDb2xsYXBzZVRvZ2dsZSBjbGFzc05hbWU9e3N0eWxlcy5jYXJldH0gc2l6ZT17c2l6ZX0gb25Ub2dnbGU9e3RvZ2dsZUNvbGxhcHNlfSBpc0NvbGxhcHNlZD17aXNDb2xsYXBzZWR9IC8+XG4gICAgICAgIDxoNj57bGFiZWx9PC9oNj5cbiAgICAgIDwvZGl2PlxuICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc0NvbGxhcHNlZCA/IHN0eWxlcy5oaWRkZW4gOiB1bmRlZmluZWR9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIGNhcmV0OiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6IC0ke3RoZW1lLnNwYWNpbmcoMC41KX07IC8vIG1ha2UgaXQgYWxpZ24gd2l0aCBmaWVsZHMgZGVzcGl0ZSBpY29uIHNpemVcbiAgYCxcbiAgaGVhZGluZzogY3NzYFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoNiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICBgLFxuICBoaWRkZW46IGNzc2BcbiAgICBkaXNwbGF5OiBub25lO1xuICBgLFxuICBkZXNjcmlwdGlvbjogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcn07XG4gICAgbWFyZ2luOiAwO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IENoZWNrYm94LCBGaWVsZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQ29tbW9uU2V0dGluZ3NDb21wb25lbnRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3JlY2VpdmVyLWZvcm0nO1xuXG5leHBvcnQgY29uc3QgR3JhZmFuYUNvbW1vbkNoYW5uZWxTZXR0aW5nczogRkM8Q29tbW9uU2V0dGluZ3NDb21wb25lbnRQcm9wcz4gPSAoe1xuICBwYXRoUHJlZml4LFxuICBjbGFzc05hbWUsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHtwYXRoUHJlZml4fWRpc2FibGVSZXNvbHZlTWVzc2FnZWApfVxuICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZSByZXNvbHZlZCBtZXNzYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpc2FibGUgdGhlIHJlc29sdmUgbWVzc2FnZSBbT0tdIHRoYXQgaXMgc2VudCB3aGVuIGFsZXJ0aW5nIHN0YXRlIHJldHVybnMgdG8gZmFsc2VcIlxuICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IExvYWRpbmdQbGFjZWhvbGRlciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7XG4gIEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyxcbiAgR3JhZmFuYU1hbmFnZWRSZWNlaXZlckNvbmZpZyxcbiAgUmVjZWl2ZXIsXG4gIFRlc3RSZWNlaXZlcnNBbGVydCxcbn0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7XG4gIGZldGNoR3JhZmFuYU5vdGlmaWVyc0FjdGlvbixcbiAgdGVzdFJlY2VpdmVyc0FjdGlvbixcbiAgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEdyYWZhbmFDaGFubmVsVmFsdWVzLCBSZWNlaXZlckZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9yZWNlaXZlci1mb3JtJztcbmltcG9ydCB7IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsIGlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQge1xuICBmb3JtQ2hhbm5lbFZhbHVlc1RvR3JhZmFuYUNoYW5uZWxDb25maWcsXG4gIGZvcm1WYWx1ZXNUb0dyYWZhbmFSZWNlaXZlcixcbiAgZ3JhZmFuYVJlY2VpdmVyVG9Gb3JtVmFsdWVzLFxuICB1cGRhdGVDb25maWdXaXRoUmVjZWl2ZXIsXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlY2VpdmVyLWZvcm0nO1xuaW1wb3J0IHsgUHJvdmlzaW9uZWRSZXNvdXJjZSwgUHJvdmlzaW9uaW5nQWxlcnQgfSBmcm9tICcuLi8uLi9Qcm92aXNpb25pbmcnO1xuXG5pbXBvcnQgeyBHcmFmYW5hQ29tbW9uQ2hhbm5lbFNldHRpbmdzIH0gZnJvbSAnLi9HcmFmYW5hQ29tbW9uQ2hhbm5lbFNldHRpbmdzJztcbmltcG9ydCB7IFJlY2VpdmVyRm9ybSB9IGZyb20gJy4vUmVjZWl2ZXJGb3JtJztcbmltcG9ydCB7IFRlc3RDb250YWN0UG9pbnRNb2RhbCB9IGZyb20gJy4vVGVzdENvbnRhY3RQb2ludE1vZGFsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xuICBjb25maWc6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZztcbiAgZXhpc3Rpbmc/OiBSZWNlaXZlcjtcbn1cblxuY29uc3QgZGVmYXVsdENoYW5uZWxWYWx1ZXM6IEdyYWZhbmFDaGFubmVsVmFsdWVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIF9faWQ6ICcnLFxuICBzZWN1cmVTZXR0aW5nczoge30sXG4gIHNldHRpbmdzOiB7fSxcbiAgc2VjdXJlRmllbGRzOiB7fSxcbiAgZGlzYWJsZVJlc29sdmVNZXNzYWdlOiBmYWxzZSxcbiAgdHlwZTogJ2VtYWlsJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR3JhZmFuYVJlY2VpdmVyRm9ybTogRkM8UHJvcHM+ID0gKHsgZXhpc3RpbmcsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IGdyYWZhbmFOb3RpZmllcnMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdyYWZhbmFOb3RpZmllcnMpO1xuICBjb25zdCBbdGVzdENoYW5uZWxWYWx1ZXMsIHNldFRlc3RDaGFubmVsVmFsdWVzXSA9IHVzZVN0YXRlPEdyYWZhbmFDaGFubmVsVmFsdWVzPigpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghKGdyYWZhbmFOb3RpZmllcnMucmVzdWx0IHx8IGdyYWZhbmFOb3RpZmllcnMubG9hZGluZykpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoR3JhZmFuYU5vdGlmaWVyc0FjdGlvbigpKTtcbiAgICB9XG4gIH0sIFtncmFmYW5hTm90aWZpZXJzLCBkaXNwYXRjaF0pO1xuXG4gIC8vIHRyYW5zZm9ybSByZWNlaXZlciBEVE8gdG8gZm9ybSB2YWx1ZXNcbiAgY29uc3QgW2V4aXN0aW5nVmFsdWUsIGlkMm9yaWdpbmFsXSA9IHVzZU1lbW8oKCk6IFtcbiAgICBSZWNlaXZlckZvcm1WYWx1ZXM8R3JhZmFuYUNoYW5uZWxWYWx1ZXM+IHwgdW5kZWZpbmVkLFxuICAgIFJlY29yZDxzdHJpbmcsIEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWc+XG4gIF0gPT4ge1xuICAgIGlmICghZXhpc3RpbmcgfHwgIWdyYWZhbmFOb3RpZmllcnMucmVzdWx0KSB7XG4gICAgICByZXR1cm4gW3VuZGVmaW5lZCwge31dO1xuICAgIH1cbiAgICByZXR1cm4gZ3JhZmFuYVJlY2VpdmVyVG9Gb3JtVmFsdWVzKGV4aXN0aW5nLCBncmFmYW5hTm90aWZpZXJzLnJlc3VsdCEpO1xuICB9LCBbZXhpc3RpbmcsIGdyYWZhbmFOb3RpZmllcnMucmVzdWx0XSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzOiBSZWNlaXZlckZvcm1WYWx1ZXM8R3JhZmFuYUNoYW5uZWxWYWx1ZXM+KSA9PiB7XG4gICAgY29uc3QgbmV3UmVjZWl2ZXIgPSBmb3JtVmFsdWVzVG9HcmFmYW5hUmVjZWl2ZXIodmFsdWVzLCBpZDJvcmlnaW5hbCwgZGVmYXVsdENoYW5uZWxWYWx1ZXMpO1xuICAgIGRpc3BhdGNoKFxuICAgICAgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uKHtcbiAgICAgICAgbmV3Q29uZmlnOiB1cGRhdGVDb25maWdXaXRoUmVjZWl2ZXIoY29uZmlnLCBuZXdSZWNlaXZlciwgZXhpc3Rpbmc/Lm5hbWUpLFxuICAgICAgICBvbGRDb25maWc6IGNvbmZpZyxcbiAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSxcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U6IGV4aXN0aW5nID8gJ0NvbnRhY3QgcG9pbnQgdXBkYXRlZC4nIDogJ0NvbnRhY3QgcG9pbnQgY3JlYXRlZCcsXG4gICAgICAgIHJlZGlyZWN0UGF0aDogJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBvblRlc3RDaGFubmVsID0gKHZhbHVlczogR3JhZmFuYUNoYW5uZWxWYWx1ZXMpID0+IHtcbiAgICBzZXRUZXN0Q2hhbm5lbFZhbHVlcyh2YWx1ZXMpO1xuICB9O1xuXG4gIGNvbnN0IHRlc3ROb3RpZmljYXRpb24gPSAoYWxlcnQ/OiBUZXN0UmVjZWl2ZXJzQWxlcnQpID0+IHtcbiAgICBpZiAodGVzdENoYW5uZWxWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nOiBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnIHwgdW5kZWZpbmVkID0gaWQyb3JpZ2luYWxbdGVzdENoYW5uZWxWYWx1ZXMuX19pZF07XG4gICAgICBjb25zdCBjaGFuID0gZm9ybUNoYW5uZWxWYWx1ZXNUb0dyYWZhbmFDaGFubmVsQ29uZmlnKHRlc3RDaGFubmVsVmFsdWVzLCBkZWZhdWx0Q2hhbm5lbFZhbHVlcywgJ3Rlc3QnLCBleGlzdGluZyk7XG5cbiAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG4gICAgICAgIHJlY2VpdmVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICd0ZXN0JyxcbiAgICAgICAgICAgIGdyYWZhbmFfbWFuYWdlZF9yZWNlaXZlcl9jb25maWdzOiBbY2hhbl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgYWxlcnQsXG4gICAgICB9O1xuXG4gICAgICBkaXNwYXRjaCh0ZXN0UmVjZWl2ZXJzQWN0aW9uKHBheWxvYWQpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdGFrZW5SZWNlaXZlck5hbWVzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBjb25maWcuYWxlcnRtYW5hZ2VyX2NvbmZpZy5yZWNlaXZlcnM/Lm1hcCgoeyBuYW1lIH0pID0+IG5hbWUpLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gZXhpc3Rpbmc/Lm5hbWUpID8/IFtdLFxuICAgIFtjb25maWcsIGV4aXN0aW5nXVxuICApO1xuXG4gIC8vIGlmIGFueSByZWNlaXZlcnMgaW4gdGhlIGNvbnRhY3QgcG9pbnQgaGF2ZSBhIFwicHJvdmVuYW5jZVwiLCB0aGUgZW50aXJlIGNvbnRhY3QgcG9pbnQgc2hvdWxkIGJlIHJlYWRPbmx5XG4gIGNvbnN0IGhhc1Byb3Zpc2lvbmVkSXRlbXMgPSBleGlzdGluZ1xuICAgID8gKGV4aXN0aW5nLmdyYWZhbmFfbWFuYWdlZF9yZWNlaXZlcl9jb25maWdzID8/IFtdKS5zb21lKChpdGVtKSA9PiBCb29sZWFuKGl0ZW0ucHJvdmVuYW5jZSkpXG4gICAgOiBmYWxzZTtcblxuICBjb25zdCByZWFkT25seSA9IGlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpIHx8IGhhc1Byb3Zpc2lvbmVkSXRlbXM7XG5cbiAgaWYgKGdyYWZhbmFOb3RpZmllcnMucmVzdWx0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtoYXNQcm92aXNpb25lZEl0ZW1zICYmIDxQcm92aXNpb25pbmdBbGVydCByZXNvdXJjZT17UHJvdmlzaW9uZWRSZXNvdXJjZS5Db250YWN0UG9pbnR9IC8+fVxuXG4gICAgICAgIDxSZWNlaXZlckZvcm08R3JhZmFuYUNoYW5uZWxWYWx1ZXM+XG4gICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXtleGlzdGluZ1ZhbHVlfVxuICAgICAgICAgIG9uVGVzdENoYW5uZWw9e29uVGVzdENoYW5uZWx9XG4gICAgICAgICAgbm90aWZpZXJzPXtncmFmYW5hTm90aWZpZXJzLnJlc3VsdH1cbiAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgIGRlZmF1bHRJdGVtPXtkZWZhdWx0Q2hhbm5lbFZhbHVlc31cbiAgICAgICAgICB0YWtlblJlY2VpdmVyTmFtZXM9e3Rha2VuUmVjZWl2ZXJOYW1lc31cbiAgICAgICAgICBjb21tb25TZXR0aW5nc0NvbXBvbmVudD17R3JhZmFuYUNvbW1vbkNoYW5uZWxTZXR0aW5nc31cbiAgICAgICAgLz5cbiAgICAgICAgPFRlc3RDb250YWN0UG9pbnRNb2RhbFxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0VGVzdENoYW5uZWxWYWx1ZXModW5kZWZpbmVkKX1cbiAgICAgICAgICBpc09wZW49eyEhdGVzdENoYW5uZWxWYWx1ZXN9XG4gICAgICAgICAgb25UZXN0PXsoYWxlcnQpID0+IHRlc3ROb3RpZmljYXRpb24oYWxlcnQpfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBub3RpZmllcnMuLi5cIiAvPjtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBGb3JtUHJvdmlkZXIsIEZpZWxkRXJyb3JzLCBWYWxpZGF0ZSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIEZpZWxkLCBJbnB1dCwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZUFwcE5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IHVzZUNsZWFudXAgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VDbGVhbnVwJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IE5vdGlmaWVyRFRPIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgdXNlQ29udHJvbGxlZEZpZWxkQXJyYXkgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VDb250cm9sbGVkRmllbGRBcnJheSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IENoYW5uZWxWYWx1ZXMsIENvbW1vblNldHRpbmdzQ29tcG9uZW50VHlwZSwgUmVjZWl2ZXJGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWlzYyc7XG5cbmltcG9ydCB7IENoYW5uZWxTdWJGb3JtIH0gZnJvbSAnLi9DaGFubmVsU3ViRm9ybSc7XG5pbXBvcnQgeyBEZWxldGVkU3ViRm9ybSB9IGZyb20gJy4vZmllbGRzL0RlbGV0ZWRTdWJmb3JtJztcblxuaW50ZXJmYWNlIFByb3BzPFIgZXh0ZW5kcyBDaGFubmVsVmFsdWVzPiB7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBub3RpZmllcnM6IE5vdGlmaWVyRFRPW107XG4gIGRlZmF1bHRJdGVtOiBSO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG4gIG9uVGVzdENoYW5uZWw/OiAoY2hhbm5lbDogUikgPT4gdm9pZDtcbiAgb25TdWJtaXQ6ICh2YWx1ZXM6IFJlY2VpdmVyRm9ybVZhbHVlczxSPikgPT4gdm9pZDtcbiAgdGFrZW5SZWNlaXZlck5hbWVzOiBzdHJpbmdbXTsgLy8gd2lsbCB2YWxpZGF0ZSB0aGF0IHVzZXIgZW50ZXJlZCByZWNlaXZlciBuYW1lIGlzIG5vdCBvbmUgb2YgdGhlc2VcbiAgY29tbW9uU2V0dGluZ3NDb21wb25lbnQ6IENvbW1vblNldHRpbmdzQ29tcG9uZW50VHlwZTtcbiAgaW5pdGlhbFZhbHVlcz86IFJlY2VpdmVyRm9ybVZhbHVlczxSPjtcbiAgcmVhZE9ubHk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWNlaXZlckZvcm08UiBleHRlbmRzIENoYW5uZWxWYWx1ZXM+KHtcbiAgY29uZmlnLFxuICBpbml0aWFsVmFsdWVzLFxuICBkZWZhdWx0SXRlbSxcbiAgbm90aWZpZXJzLFxuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICBvblN1Ym1pdCxcbiAgb25UZXN0Q2hhbm5lbCxcbiAgdGFrZW5SZWNlaXZlck5hbWVzLFxuICBjb21tb25TZXR0aW5nc0NvbXBvbmVudCxcbiAgcmVhZE9ubHksXG59OiBQcm9wczxSPik6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBkZWZhdWx0VmFsdWVzID0gaW5pdGlhbFZhbHVlcyB8fCB7XG4gICAgbmFtZTogJycsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgLi4uZGVmYXVsdEl0ZW0sXG4gICAgICAgIF9faWQ6IFN0cmluZyhNYXRoLnJhbmRvbSgpKSxcbiAgICAgIH0gYXMgYW55LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgZm9ybUFQSSA9IHVzZUZvcm08UmVjZWl2ZXJGb3JtVmFsdWVzPFI+Pih7XG4gICAgLy8gbWFraW5nIGEgY29weSBoZXJlIGJlYWN1c2UgcmVhY3QtaG9vay1mb3JtIHdpbGwgbXV0YXRlIHRoZXNlLCBhbmQgYnJlYWsgaWYgdGhlIG9iamVjdCBpcyBmcm96ZW4uIGZvciByZWFsLlxuICAgIGRlZmF1bHRWYWx1ZXM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGVmYXVsdFZhbHVlcykpLFxuICB9KTtcblxuICB1c2VDbGVhbnVwKChzdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLnNhdmVBTUNvbmZpZyk7XG5cbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhdmVBTUNvbmZpZyk7XG5cbiAgY29uc3Qge1xuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZWdpc3RlcixcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgZ2V0VmFsdWVzLFxuICB9ID0gZm9ybUFQSTtcblxuICBjb25zdCB7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSA9IHVzZUNvbnRyb2xsZWRGaWVsZEFycmF5PFI+KHsgbmFtZTogJ2l0ZW1zJywgZm9ybUFQSSwgc29mdERlbGV0ZTogdHJ1ZSB9KTtcblxuICBjb25zdCB2YWxpZGF0ZU5hbWVJc0F2YWlsYWJsZTogVmFsaWRhdGU8c3RyaW5nPiA9IHVzZUNhbGxiYWNrKFxuICAgIChuYW1lOiBzdHJpbmcpID0+XG4gICAgICB0YWtlblJlY2VpdmVyTmFtZXMubWFwKChuYW1lKSA9PiBuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyhuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICA/ICdBbm90aGVyIHJlY2VpdmVyIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzLidcbiAgICAgICAgOiB0cnVlLFxuICAgIFt0YWtlblJlY2VpdmVyTmFtZXNdXG4gICk7XG5cbiAgY29uc3Qgc3VibWl0Q2FsbGJhY2sgPSAodmFsdWVzOiBSZWNlaXZlckZvcm1WYWx1ZXM8Uj4pID0+IHtcbiAgICBvblN1Ym1pdCh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBpdGVtczogdmFsdWVzLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uX19kZWxldGVkKSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkludmFsaWQgPSAoKSA9PiB7XG4gICAgbm90aWZ5QXBwLmVycm9yKCdUaGVyZSBhcmUgZXJyb3JzIGluIHRoZSBmb3JtLiBQbGVhc2UgY29ycmVjdCB0aGVtIGFuZCB0cnkgYWdhaW4hJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVByb3ZpZGVyIHsuLi5mb3JtQVBJfT5cbiAgICAgIHshY29uZmlnLmFsZXJ0bWFuYWdlcl9jb25maWcucm91dGUgJiYgKFxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJ3YXJuaW5nXCIgdGl0bGU9XCJBdHRlbnRpb25cIj5cbiAgICAgICAgICBCZWNhdXNlIHRoZXJlIGlzIG5vIGRlZmF1bHQgcG9saWN5IGNvbmZpZ3VyZWQgeWV0LCB0aGlzIGNvbnRhY3QgcG9pbnQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHNldCBhcyBkZWZhdWx0LlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0Q2FsbGJhY2ssIG9uSW52YWxpZCl9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgICAge3JlYWRPbmx5ID8gJ0NvbnRhY3QgcG9pbnQnIDogaW5pdGlhbFZhbHVlcyA/ICdVcGRhdGUgY29udGFjdCBwb2ludCcgOiAnQ3JlYXRlIGNvbnRhY3QgcG9pbnQnfVxuICAgICAgICA8L2g0PlxuICAgICAgICA8RmllbGQgbGFiZWw9XCJOYW1lXCIgaW52YWxpZD17ISFlcnJvcnMubmFtZX0gZXJyb3I9e2Vycm9ycy5uYW1lICYmIGVycm9ycy5uYW1lLm1lc3NhZ2V9IHJlcXVpcmVkPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdOYW1lIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgdmFsaWRhdGU6IHsgbmFtZUlzQXZhaWxhYmxlOiB2YWxpZGF0ZU5hbWVJc0F2YWlsYWJsZSB9LFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICB3aWR0aD17Mzl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmllbGQ+XG4gICAgICAgIHtmaWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXRoUHJlZml4ID0gYGl0ZW1zLiR7aW5kZXh9LmA7XG4gICAgICAgICAgaWYgKGZpZWxkLl9fZGVsZXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxEZWxldGVkU3ViRm9ybSBrZXk9e2ZpZWxkLl9faWR9IHBhdGhQcmVmaXg9e3BhdGhQcmVmaXh9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpbml0aWFsSXRlbSA9IGluaXRpYWxWYWx1ZXM/Lml0ZW1zLmZpbmQoKHsgX19pZCB9KSA9PiBfX2lkID09PSBmaWVsZC5fX2lkKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENoYW5uZWxTdWJGb3JtPFI+XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e2ZpZWxkfVxuICAgICAgICAgICAgICBrZXk9e2ZpZWxkLl9faWR9XG4gICAgICAgICAgICAgIG9uRHVwbGljYXRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlczogUiA9IGdldFZhbHVlcygpLml0ZW1zW2luZGV4XTtcbiAgICAgICAgICAgICAgICBhcHBlbmQoeyAuLi5jdXJyZW50VmFsdWVzLCBfX2lkOiBTdHJpbmcoTWF0aC5yYW5kb20oKSkgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uVGVzdD17XG4gICAgICAgICAgICAgICAgb25UZXN0Q2hhbm5lbFxuICAgICAgICAgICAgICAgICAgPyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlczogUiA9IGdldFZhbHVlcygpLml0ZW1zW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICBvblRlc3RDaGFubmVsKGN1cnJlbnRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiByZW1vdmUoaW5kZXgpfVxuICAgICAgICAgICAgICBwYXRoUHJlZml4PXtwYXRoUHJlZml4fVxuICAgICAgICAgICAgICBub3RpZmllcnM9e25vdGlmaWVyc31cbiAgICAgICAgICAgICAgc2VjdXJlRmllbGRzPXtpbml0aWFsSXRlbT8uc2VjdXJlRmllbGRzfVxuICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9ycz8uaXRlbXM/LltpbmRleF0gYXMgRmllbGRFcnJvcnM8Uj59XG4gICAgICAgICAgICAgIGNvbW1vblNldHRpbmdzQ29tcG9uZW50PXtjb21tb25TZXR0aW5nc0NvbXBvbmVudH1cbiAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgPD5cbiAgICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGVuZCh7IC4uLmRlZmF1bHRJdGVtLCBfX2lkOiBTdHJpbmcoTWF0aC5yYW5kb20oKSkgfSBhcyBSKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV3IGNvbnRhY3QgcG9pbnQgdHlwZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0gaWNvbj1cImZhIGZhLXNwaW5uZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBTYXZpbmcuLi5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgY29udGFjdCBwb2ludDwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiY2FuY2VsLWJ1dHRvblwiXG4gICAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoJ2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvRm9ybVByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGhlYWRpbmc6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0LCAwKX07XG4gIGAsXG4gIGJ1dHRvbnM6IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0sIEZvcm1Qcm92aWRlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIExhYmVsLCB1c2VTdHlsZXMyLCBSYWRpb0J1dHRvbkdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgVGVzdFJlY2VpdmVyc0FsZXJ0IH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbnMsIExhYmVscyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCBBbm5vdGF0aW9uc0ZpZWxkIGZyb20gJy4uLy4uL3J1bGUtZWRpdG9yL0Fubm90YXRpb25zRmllbGQnO1xuaW1wb3J0IExhYmVsc0ZpZWxkIGZyb20gJy4uLy4uL3J1bGUtZWRpdG9yL0xhYmVsc0ZpZWxkJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gIG9uVGVzdDogKGFsZXJ0PzogVGVzdFJlY2VpdmVyc0FsZXJ0KSA9PiB2b2lkO1xufVxuXG50eXBlIEFubm9GaWVsZCA9IHtcbiAga2V5OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgRm9ybUZpZWxkcyB7XG4gIGFubm90YXRpb25zOiBBbm5vRmllbGRbXTtcbiAgbGFiZWxzOiBBbm5vRmllbGRbXTtcbn1cblxuZW51bSBOb3RpZmljYXRpb25UeXBlIHtcbiAgcHJlZGVmaW5lZCA9ICdQcmVkZWZpbmVkJyxcbiAgY3VzdG9tID0gJ0N1c3RvbScsXG59XG5cbmNvbnN0IG5vdGlmaWNhdGlvbk9wdGlvbnMgPSBPYmplY3QudmFsdWVzKE5vdGlmaWNhdGlvblR5cGUpLm1hcCgodmFsdWUpID0+ICh7IGxhYmVsOiB2YWx1ZSwgdmFsdWU6IHZhbHVlIH0pKTtcblxuY29uc3QgZGVmYXVsdFZhbHVlczogRm9ybUZpZWxkcyA9IHtcbiAgYW5ub3RhdGlvbnM6IFt7IGtleTogJycsIHZhbHVlOiAnJyB9XSxcbiAgbGFiZWxzOiBbeyBrZXk6ICcnLCB2YWx1ZTogJycgfV0sXG59O1xuXG5leHBvcnQgY29uc3QgVGVzdENvbnRhY3RQb2ludE1vZGFsID0gKHsgaXNPcGVuLCBvbkRpc21pc3MsIG9uVGVzdCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbbm90aWZpY2F0aW9uVHlwZSwgc2V0Tm90aWZpY2F0aW9uVHlwZV0gPSB1c2VTdGF0ZTxOb3RpZmljYXRpb25UeXBlPihOb3RpZmljYXRpb25UeXBlLnByZWRlZmluZWQpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGZvcm1NZXRob2RzID0gdXNlRm9ybTxGb3JtRmllbGRzPih7IGRlZmF1bHRWYWx1ZXMsIG1vZGU6ICdvbkJsdXInIH0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IEZvcm1GaWVsZHMpID0+IHtcbiAgICBpZiAobm90aWZpY2F0aW9uVHlwZSA9PT0gTm90aWZpY2F0aW9uVHlwZS5jdXN0b20pIHtcbiAgICAgIGNvbnN0IGFsZXJ0ID0ge1xuICAgICAgICBhbm5vdGF0aW9uczogZGF0YS5hbm5vdGF0aW9uc1xuICAgICAgICAgIC5maWx0ZXIoKHsga2V5LCB2YWx1ZSB9KSA9PiAhIWtleSAmJiAhIXZhbHVlKVxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywgeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmFjYywgW2tleV06IHZhbHVlIH07XG4gICAgICAgICAgfSwge30gYXMgQW5ub3RhdGlvbnMpLFxuICAgICAgICBsYWJlbHM6IGRhdGEubGFiZWxzXG4gICAgICAgICAgLmZpbHRlcigoeyBrZXksIHZhbHVlIH0pID0+ICEha2V5ICYmICEhdmFsdWUpXG4gICAgICAgICAgLnJlZHVjZSgoYWNjLCB7IGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uYWNjLCBba2V5XTogdmFsdWUgfTtcbiAgICAgICAgICB9LCB7fSBhcyBMYWJlbHMpLFxuICAgICAgfTtcbiAgICAgIG9uVGVzdChhbGVydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uVGVzdCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCBvbkRpc21pc3M9e29uRGlzbWlzc30gaXNPcGVuPXtpc09wZW59IHRpdGxlPXsnVGVzdCBjb250YWN0IHBvaW50J30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICA8TGFiZWw+Tm90aWZpY2F0aW9uIG1lc3NhZ2U8L0xhYmVsPlxuICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgIG9wdGlvbnM9e25vdGlmaWNhdGlvbk9wdGlvbnN9XG4gICAgICAgICAgdmFsdWU9e25vdGlmaWNhdGlvblR5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Tm90aWZpY2F0aW9uVHlwZSh2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZvcm1Qcm92aWRlciB7Li4uZm9ybU1ldGhvZHN9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybU1ldGhvZHMuaGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAge25vdGlmaWNhdGlvblR5cGUgPT09IE5vdGlmaWNhdGlvblR5cGUucHJlZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxuICAgICAgICAgICAgICBZb3Ugd2lsbCBzZW5kIGEgdGVzdCBub3RpZmljYXRpb24gdGhhdCB1c2VzIGEgcHJlZGVmaW5lZCBhbGVydC4gSWYgeW91IGhhdmUgZGVmaW5lZCBhIGN1c3RvbSB0ZW1wbGF0ZSBvclxuICAgICAgICAgICAgICBtZXNzYWdlLCBmb3IgYmV0dGVyIHJlc3VsdHMgc3dpdGNoIHRvIDxzdHJvbmc+Y3VzdG9tPC9zdHJvbmc+IG5vdGlmaWNhdGlvbiBtZXNzYWdlLCBmcm9tIGFib3ZlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bm90aWZpY2F0aW9uVHlwZSA9PT0gTm90aWZpY2F0aW9uVHlwZS5jdXN0b20gJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICBZb3Ugd2lsbCBzZW5kIGEgdGVzdCBub3RpZmljYXRpb24gdGhhdCB1c2VzIHRoZSBhbm5vdGF0aW9ucyBkZWZpbmVkIGJlbG93LiBUaGlzIGlzIGEgZ29vZCBvcHRpb24gaWYgeW91XG4gICAgICAgICAgICAgICAgdXNlIGN1c3RvbSB0ZW1wbGF0ZXMgYW5kIG1lc3NhZ2VzLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8QW5ub3RhdGlvbnNGaWVsZCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8TGFiZWxzRmllbGQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgdGVzdCBub3RpZmljYXRpb248L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Gb3JtUHJvdmlkZXI+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICBzZWN0aW9uOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGF0aFByZWZpeDogc3RyaW5nO1xufVxuXG4vLyB3ZSBjYW4ndCBkcm9wIHRoZSBkZWxldGVkIGl0ZW0gZnJvbSBsaXN0IGVudGlyZWx5IGJlY2F1c2Vcbi8vIHRoZXJlIHdpbGwgYmUgYSByZWNlIGNvbmRpdGlvbiB3aXRoIHJlZ2lzdGVyL3VucmVnaXN0ZXIgY2FsbHMgaW4gcmVhY3QtaG9vay1mb3JtXG4vLyBhbmQgZmllbGRzIHdpbGwgYmVjb21lIHJhbmRvbWx5IGVycm9uZW91c2x5IHVucmVnaXN0ZXJlZFxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZWRTdWJGb3JtKHsgcGF0aFByZWZpeCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybUNvbnRleHQoKTtcblxuICAvLyByZXF1aXJlZCB0byBiZSByZWdpc3RlcmVkIG9yIHJlYWN0LWhvb2stZm9ybSB3aWxsIHJhbmRvbWx5IGRyb3AgdGhlIHZhbHVlcyB3aGVuIGl0IGZlZWxzIGxpa2UgaXRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWdpc3RlcihgJHtwYXRoUHJlZml4fS5fX2lkYCk7XG4gICAgcmVnaXN0ZXIoYCR7cGF0aFByZWZpeH0uX19kZWxldGVkYCk7XG4gIH0sIFtyZWdpc3RlciwgcGF0aFByZWZpeF0pO1xuXG4gIHJldHVybiA8PjwvPjtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuLi8uLi8uLi9ydWxlcy9BY3Rpb25JY29uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdmFsdWU/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIG9uQ2hhbmdlOiAodmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBLZXlWYWx1ZU1hcElucHV0OiBGQzxQcm9wcz4gPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIHJlYWRPbmx5ID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IFtwYWlycywgc2V0UGFpcnNdID0gdXNlU3RhdGUocmVjb3JkVG9QYWlycyh2YWx1ZSkpO1xuICB1c2VFZmZlY3QoKCkgPT4gc2V0UGFpcnMocmVjb3JkVG9QYWlycyh2YWx1ZSkpLCBbdmFsdWVdKTtcblxuICBjb25zdCBlbWl0Q2hhbmdlID0gKHBhaXJzOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPikgPT4ge1xuICAgIG9uQ2hhbmdlKHBhaXJzVG9SZWNvcmQocGFpcnMpKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuZXdQYWlycyA9IHBhaXJzLnNsaWNlKCk7XG4gICAgY29uc3QgcmVtb3ZlZCA9IG5ld1BhaXJzLnNwbGljZShpbmRleCwgMSlbMF07XG4gICAgc2V0UGFpcnMobmV3UGFpcnMpO1xuICAgIGlmIChyZW1vdmVkWzBdKSB7XG4gICAgICBlbWl0Q2hhbmdlKG5ld1BhaXJzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUGFpciA9ICh2YWx1ZXM6IFtzdHJpbmcsIHN0cmluZ10sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBvbGQgPSBwYWlyc1tpbmRleF07XG4gICAgY29uc3QgbmV3UGFpcnMgPSBwYWlycy5tYXAoKHBhaXIsIGkpID0+IChpID09PSBpbmRleCA/IHZhbHVlcyA6IHBhaXIpKTtcbiAgICBzZXRQYWlycyhuZXdQYWlycyk7XG4gICAgaWYgKHZhbHVlc1swXSB8fCBvbGRbMF0pIHtcbiAgICAgIGVtaXRDaGFuZ2UobmV3UGFpcnMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ISFwYWlycy5sZW5ndGggJiYgKFxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+VmFsdWU8L3RoPlxuICAgICAgICAgICAgICB7IXJlYWRPbmx5ICYmIDx0aD48L3RoPn1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cGFpcnMubWFwKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVBhaXIoW2UuY3VycmVudFRhcmdldC52YWx1ZSwgdmFsdWVdLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVBhaXIoW2tleSwgZS5jdXJyZW50VGFyZ2V0LnZhbHVlXSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbiBpY29uPVwidHJhc2gtYWx0XCIgdG9vbHRpcD1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oaW5kZXgpfSAvPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICl9XG4gICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWlycyhbLi4ucGFpcnMsIFsnJywgJyddXSl9XG4gICAgICAgID5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBhZGRCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICB0YWJsZTogY3NzYFxuICAgIHRib2R5IHRkIHtcbiAgICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5nKDEpfSAke3RoZW1lLnNwYWNpbmcoMSl9IDA7XG4gICAgfVxuICBgLFxufSk7XG5cbmNvbnN0IHBhaXJzVG9SZWNvcmQgPSAocGFpcnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+KTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9PiB7XG4gIGNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBwYWlycykge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJlY29yZFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZWNvcmQ7XG59O1xuXG5jb25zdCByZWNvcmRUb1BhaXJzID0gKG9iaj86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPiA9PiBPYmplY3QuZW50cmllcyhvYmogPz8ge30pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCwgRmllbGRFcnJvciwgRGVlcE1hcCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IENoZWNrYm94LCBGaWVsZCwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBLZXlWYWx1ZU1hcElucHV0IH0gZnJvbSAnLi9LZXlWYWx1ZU1hcElucHV0JztcbmltcG9ydCB7IFN0cmluZ0FycmF5SW5wdXQgfSBmcm9tICcuL1N0cmluZ0FycmF5SW5wdXQnO1xuaW1wb3J0IHsgU3ViZm9ybUFycmF5RmllbGQgfSBmcm9tICcuL1N1YmZvcm1BcnJheUZpZWxkJztcbmltcG9ydCB7IFN1YmZvcm1GaWVsZCB9IGZyb20gJy4vU3ViZm9ybUZpZWxkJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGVmYXVsdFZhbHVlOiBhbnk7XG4gIG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbjtcbiAgaW52YWxpZD86IGJvb2xlYW47XG4gIHBhdGhQcmVmaXg6IHN0cmluZztcbiAgcGF0aFN1ZmZpeD86IHN0cmluZztcbiAgZXJyb3I/OiBGaWVsZEVycm9yIHwgRGVlcE1hcDxhbnksIEZpZWxkRXJyb3I+O1xuICByZWFkT25seT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPcHRpb25GaWVsZDogRkM8UHJvcHM+ID0gKHtcbiAgb3B0aW9uLFxuICBpbnZhbGlkLFxuICBwYXRoUHJlZml4LFxuICBwYXRoU3VmZml4ID0gJycsXG4gIGVycm9yLFxuICBkZWZhdWx0VmFsdWUsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IG9wdGlvblBhdGggPSBgJHtwYXRoUHJlZml4fSR7cGF0aFN1ZmZpeH1gO1xuXG4gIGlmIChvcHRpb24uZWxlbWVudCA9PT0gJ3N1YmZvcm0nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdWJmb3JtRmllbGRcbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgIGVycm9ycz17ZXJyb3IgYXMgRGVlcE1hcDxhbnksIEZpZWxkRXJyb3I+IHwgdW5kZWZpbmVkfVxuICAgICAgICBwYXRoUHJlZml4PXtvcHRpb25QYXRofVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIGlmIChvcHRpb24uZWxlbWVudCA9PT0gJ3N1YmZvcm1fYXJyYXknKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdWJmb3JtQXJyYXlGaWVsZFxuICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgIGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgIHBhdGhQcmVmaXg9e29wdGlvblBhdGh9XG4gICAgICAgIGVycm9ycz17ZXJyb3IgYXMgQXJyYXk8RGVlcE1hcDxhbnksIEZpZWxkRXJyb3I+PiB8IHVuZGVmaW5lZH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGaWVsZFxuICAgICAgbGFiZWw9e29wdGlvbi5lbGVtZW50ICE9PSAnY2hlY2tib3gnID8gb3B0aW9uLmxhYmVsIDogdW5kZWZpbmVkfVxuICAgICAgZGVzY3JpcHRpb249e29wdGlvbi5kZXNjcmlwdGlvbiB8fCB1bmRlZmluZWR9XG4gICAgICBpbnZhbGlkPXshIWVycm9yfVxuICAgICAgZXJyb3I9e2Vycm9yPy5tZXNzYWdlfVxuICAgID5cbiAgICAgIDxPcHRpb25JbnB1dFxuICAgICAgICBpZD17YCR7b3B0aW9uUGF0aH0ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YH1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICBwYXRoUHJlZml4PXtvcHRpb25QYXRofVxuICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgIHBhdGhJbmRleD17cGF0aFByZWZpeH1cbiAgICAgIC8+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG5cbmNvbnN0IE9wdGlvbklucHV0OiBGQzxQcm9wcyAmIHsgaWQ6IHN0cmluZzsgcGF0aEluZGV4Pzogc3RyaW5nIH0+ID0gKHtcbiAgb3B0aW9uLFxuICBpbnZhbGlkLFxuICBpZCxcbiAgcGF0aFByZWZpeCA9ICcnLFxuICBwYXRoSW5kZXggPSAnJyxcbiAgcmVhZE9ubHkgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgeyBjb250cm9sLCByZWdpc3RlciwgdW5yZWdpc3RlciwgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xuICBjb25zdCBuYW1lID0gYCR7cGF0aFByZWZpeH0ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YDtcblxuICAvLyB3b3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtaG9vay1mb3JtL3JlYWN0LWhvb2stZm9ybS9pc3N1ZXMvNDk5MyNpc3N1ZWNvbW1lbnQtODI5MDEyNTA2XG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiAoKSA9PiB7XG4gICAgICB1bnJlZ2lzdGVyKG5hbWUsIHsga2VlcFZhbHVlOiBmYWxzZSB9KTtcbiAgICB9LFxuICAgIFt1bnJlZ2lzdGVyLCBuYW1lXVxuICApO1xuICBzd2l0Y2ggKG9wdGlvbi5lbGVtZW50KSB7XG4gICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKG5hbWUpfVxuICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgZGVzY3JpcHRpb249e29wdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgY2FzZSAnaW5wdXQnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seSB8fCBkZXRlcm1pbmVSZWFkT25seShvcHRpb24sIGdldFZhbHVlcywgcGF0aEluZGV4KX1cbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHR5cGU9e29wdGlvbi5pbnB1dFR5cGV9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKG5hbWUsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBkZXRlcm1pbmVSZXF1aXJlZChvcHRpb24sIGdldFZhbHVlcywgcGF0aEluZGV4KSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAodikgPT4gKG9wdGlvbi52YWxpZGF0aW9uUnVsZSAhPT0gJycgPyB2YWxpZGF0ZU9wdGlvbih2LCBvcHRpb24udmFsaWRhdGlvblJ1bGUpIDogdHJ1ZSksXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e29wdGlvbi5wbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb24uc2VsZWN0T3B0aW9ucyA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlLnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICApO1xuXG4gICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihuYW1lLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogb3B0aW9uLnJlcXVpcmVkID8gJ1JlcXVpcmVkJyA6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICh2KSA9PiAob3B0aW9uLnZhbGlkYXRpb25SdWxlICE9PSAnJyA/IHZhbGlkYXRlT3B0aW9uKHYsIG9wdGlvbi52YWxpZGF0aW9uUnVsZSkgOiB0cnVlKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgY2FzZSAnc3RyaW5nX2FycmF5JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHZhbHVlLCBvbkNoYW5nZSB9IH0pID0+IChcbiAgICAgICAgICAgIDxTdHJpbmdBcnJheUlucHV0IHJlYWRPbmx5PXtyZWFkT25seX0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGNhc2UgJ2tleV92YWx1ZV9tYXAnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgdmFsdWUsIG9uQ2hhbmdlIH0gfSkgPT4gKFxuICAgICAgICAgICAgPEtleVZhbHVlTWFwSW5wdXQgcmVhZE9ubHk9e3JlYWRPbmx5fSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcignRWxlbWVudCBub3Qgc3VwcG9ydGVkJywgb3B0aW9uLmVsZW1lbnQpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2hlY2tib3g6IGNzc2BcbiAgICBoZWlnaHQ6IGF1dG87IC8vIG5hdGl2ZSBjaGVja2JveCBoYXMgZml4ZWQgaGVpZ2h0IHdoaWNoIGRvZXMgbm90IHRha2UgaW50byBhY2NvdW50IGRlc2NyaXB0aW9uXG4gIGAsXG59O1xuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uUnVsZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBSZWdFeHAodmFsaWRhdGlvblJ1bGUpLnRlc3QodmFsdWUpID8gdHJ1ZSA6ICdJbnZhbGlkIGZvcm1hdCc7XG59O1xuXG5jb25zdCBkZXRlcm1pbmVSZXF1aXJlZCA9IChvcHRpb246IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24sIGdldFZhbHVlczogYW55LCBwYXRoSW5kZXg6IHN0cmluZykgPT4ge1xuICBpZiAoIW9wdGlvbi5kZXBlbmRzT24pIHtcbiAgICByZXR1cm4gb3B0aW9uLnJlcXVpcmVkID8gJ1JlcXVpcmVkJyA6IGZhbHNlO1xuICB9XG4gIGlmIChpc0VtcHR5KGdldFZhbHVlcyhgJHtwYXRoSW5kZXh9c2VjdXJlRmllbGRzYCkpKSB7XG4gICAgY29uc3QgZGVwZW5kZW50T24gPSBnZXRWYWx1ZXMoYCR7cGF0aEluZGV4fXNlY3VyZVNldHRpbmdzLiR7b3B0aW9uLmRlcGVuZHNPbn1gKTtcbiAgICByZXR1cm4gIUJvb2xlYW4oZGVwZW5kZW50T24pICYmIG9wdGlvbi5yZXF1aXJlZCA/ICdSZXF1aXJlZCcgOiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkZXBlbmRlbnRPbjogYm9vbGVhbiA9IGdldFZhbHVlcyhgJHtwYXRoSW5kZXh9c2VjdXJlRmllbGRzLiR7b3B0aW9uLmRlcGVuZHNPbn1gKTtcbiAgICByZXR1cm4gIWRlcGVuZGVudE9uICYmIG9wdGlvbi5yZXF1aXJlZCA/ICdSZXF1aXJlZCcgOiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgZGV0ZXJtaW5lUmVhZE9ubHkgPSAob3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBnZXRWYWx1ZXM6IGFueSwgcGF0aEluZGV4OiBzdHJpbmcpID0+IHtcbiAgaWYgKCFvcHRpb24uZGVwZW5kc09uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc0VtcHR5KGdldFZhbHVlcyhgJHtwYXRoSW5kZXh9c2VjdXJlRmllbGRzYCkpKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlcyhgJHtwYXRoSW5kZXh9c2VjdXJlU2V0dGluZ3MuJHtvcHRpb24uZGVwZW5kc09ufWApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRWYWx1ZXMoYCR7cGF0aEluZGV4fXNlY3VyZUZpZWxkcy4ke29wdGlvbi5kZXBlbmRzT259YCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBBY3Rpb25JY29uIH0gZnJvbSAnLi4vLi4vLi4vcnVsZXMvQWN0aW9uSWNvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlPzogc3RyaW5nW107XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTdHJpbmdBcnJheUlucHV0OiBGQzxQcm9wcz4gPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIHJlYWRPbmx5ID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlLnNsaWNlKCk7XG4gICAgbmV3VmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBvbkNoYW5nZShuZXdWYWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVmFsdWUgPSAoaXRlbVZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uQ2hhbmdlKHZhbHVlLm1hcCgodiwgaSkgPT4gKGkgPT09IGluZGV4ID8gaXRlbVZhbHVlIDogdikpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ISF2YWx1ZT8ubGVuZ3RoICYmXG4gICAgICAgIHZhbHVlLm1hcCgodiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICA8SW5wdXQgcmVhZE9ubHk9e3JlYWRPbmx5fSB2YWx1ZT17dn0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUsIGluZGV4KX0gLz5cbiAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUljb259XG4gICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgdG9vbHRpcD1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShpbmRleCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi4odmFsdWUgPz8gW10pLCAnJ10pfVxuICAgICAgICA+XG4gICAgICAgICAgQWRkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgcm93OiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYCxcbiAgZGVsZXRlSWNvbjogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICBhZGRCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZEVycm9yLCBEZWVwTWFwLCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZUNvbnRyb2xsZWRGaWVsZEFycmF5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29udHJvbGxlZEZpZWxkQXJyYXknO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuLi8uLi8uLi9ydWxlcy9BY3Rpb25JY29uJztcbmltcG9ydCB7IENvbGxhcHNpYmxlU2VjdGlvbiB9IGZyb20gJy4uL0NvbGxhcHNpYmxlU2VjdGlvbic7XG5cbmltcG9ydCB7IE9wdGlvbkZpZWxkIH0gZnJvbSAnLi9PcHRpb25GaWVsZCc7XG5pbXBvcnQgeyBnZXRSZWNlaXZlckZvcm1GaWVsZFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGVmYXVsdFZhbHVlcz86IGFueVtdO1xuICBvcHRpb246IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb247XG4gIHBhdGhQcmVmaXg6IHN0cmluZztcbiAgZXJyb3JzPzogQXJyYXk8RGVlcE1hcDxhbnksIEZpZWxkRXJyb3I+PjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU3ViZm9ybUFycmF5RmllbGQ6IEZDPFByb3BzPiA9ICh7IG9wdGlvbiwgcGF0aFByZWZpeCwgZXJyb3JzLCBkZWZhdWx0VmFsdWVzLCByZWFkT25seSA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRSZWNlaXZlckZvcm1GaWVsZFN0eWxlcyk7XG4gIGNvbnN0IHBhdGggPSBgJHtwYXRoUHJlZml4fSR7b3B0aW9uLnByb3BlcnR5TmFtZX1gO1xuICBjb25zdCBmb3JtQVBJID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VDb250cm9sbGVkRmllbGRBcnJheSh7IG5hbWU6IHBhdGgsIGZvcm1BUEksIGRlZmF1bHRzOiBkZWZhdWx0VmFsdWVzIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxDb2xsYXBzaWJsZVNlY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2libGVTZWN0aW9ufVxuICAgICAgICBsYWJlbD17YCR7b3B0aW9uLmxhYmVsfSAoJHtmaWVsZHMubGVuZ3RofSlgfVxuICAgICAgICBkZXNjcmlwdGlvbj17b3B0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgPlxuICAgICAgICB7KGZpZWxkcyA/PyBkZWZhdWx0VmFsdWVzID8/IFtdKS5tYXAoKGZpZWxkLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW1JbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YCR7cGF0aH0uJHtpdGVtSW5kZXh9LmRlbGV0ZS1idXR0b25gfVxuICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICB0b29sdGlwPVwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpdGVtSW5kZXgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlSWNvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7b3B0aW9uLnN1YmZvcm1PcHRpb25zPy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb25GaWVsZFxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZD8uW29wdGlvbi5wcm9wZXJ0eU5hbWVdfVxuICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24ucHJvcGVydHlOYW1lfVxuICAgICAgICAgICAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgICAgICAgICAgICBwYXRoUHJlZml4PXtgJHtwYXRofS4ke2l0ZW1JbmRleH0uYH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LltpdGVtSW5kZXhdPy5bb3B0aW9uLnByb3BlcnR5TmFtZV19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Ake3BhdGh9LmFkZC1idXR0b25gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBlbmQoeyBfX2lkOiBTdHJpbmcoTWF0aC5yYW5kb20oKSkgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L0NvbGxhcHNpYmxlU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGRFcnJvciwgRGVlcE1hcCwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgQWN0aW9uSWNvbiB9IGZyb20gJy4uLy4uLy4uL3J1bGVzL0FjdGlvbkljb24nO1xuXG5pbXBvcnQgeyBPcHRpb25GaWVsZCB9IGZyb20gJy4vT3B0aW9uRmllbGQnO1xuaW1wb3J0IHsgZ2V0UmVjZWl2ZXJGb3JtRmllbGRTdHlsZXMgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRlZmF1bHRWYWx1ZTogYW55O1xuICBvcHRpb246IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb247XG4gIHBhdGhQcmVmaXg6IHN0cmluZztcbiAgZXJyb3JzPzogRGVlcE1hcDxhbnksIEZpZWxkRXJyb3I+O1xuICByZWFkT25seT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBTdWJmb3JtRmllbGQ6IEZDPFByb3BzPiA9ICh7IG9wdGlvbiwgcGF0aFByZWZpeCwgZXJyb3JzLCBkZWZhdWx0VmFsdWUsIHJlYWRPbmx5ID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFJlY2VpdmVyRm9ybUZpZWxkU3R5bGVzKTtcbiAgY29uc3QgbmFtZSA9IGAke3BhdGhQcmVmaXh9JHtvcHRpb24ucHJvcGVydHlOYW1lfWA7XG4gIGNvbnN0IHsgd2F0Y2ggfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IF93YXRjaFZhbHVlID0gd2F0Y2gobmFtZSk7XG4gIGNvbnN0IHZhbHVlID0gX3dhdGNoVmFsdWUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IF93YXRjaFZhbHVlO1xuXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKCEhdmFsdWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSBkYXRhLXRlc3RpZD17YCR7bmFtZX0uY29udGFpbmVyYH0+XG4gICAgICA8aDY+e29wdGlvbi5sYWJlbH08L2g2PlxuICAgICAge29wdGlvbi5kZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e29wdGlvbi5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAge3Nob3cgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Ake25hbWV9LmRlbGV0ZS1idXR0b25gfVxuICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgdG9vbHRpcD1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3coZmFsc2UpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVJY29ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsob3B0aW9uLnN1YmZvcm1PcHRpb25zID8/IFtdKS5tYXAoKHN1Yk9wdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE9wdGlvbkZpZWxkXG4gICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlPy5bc3ViT3B0aW9uLnByb3BlcnR5TmFtZV19XG4gICAgICAgICAgICAgICAga2V5PXtzdWJPcHRpb24ucHJvcGVydHlOYW1lfVxuICAgICAgICAgICAgICAgIG9wdGlvbj17c3ViT3B0aW9ufVxuICAgICAgICAgICAgICAgIHBhdGhQcmVmaXg9e2Ake25hbWV9LmB9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8uW3N1Yk9wdGlvbi5wcm9wZXJ0eU5hbWVdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgeyFzaG93ICYmICFyZWFkT25seSAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyh0cnVlKX1cbiAgICAgICAgICBkYXRhLXRlc3RpZD17YCR7bmFtZX0uYWRkLWJ1dHRvbmB9XG4gICAgICAgID5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IGdldFJlY2VpdmVyRm9ybUZpZWxkU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb2xsYXBzaWJsZVNlY3Rpb246IGNzc2BcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDIsIDApfTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDEpfTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGAsXG4gIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyfTtcbiAgICBtYXJnaW46IDA7XG4gIGAsXG4gIGRlbGV0ZUljb246IGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgdG9wOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICBhZGRCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBhbm5vdGF0aW9uTGFiZWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgU2VsZWN0V2l0aEFkZCB9IGZyb20gJy4vU2VsZWN0V0l0aEFkZCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgZXhpc3RpbmdLZXlzOiBzdHJpbmdbXTtcblxuICB2YWx1ZT86IHN0cmluZztcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgJ2FyaWEtbGFiZWwnPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQW5ub3RhdGlvbktleUlucHV0OiBGQzxQcm9wcz4gPSAoeyB2YWx1ZSwgZXhpc3RpbmdLZXlzLCAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGFubm90YXRpb25PcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKTogU2VsZWN0YWJsZVZhbHVlW10gPT5cbiAgICAgIE9iamVjdC52YWx1ZXMoQW5ub3RhdGlvbilcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiAhZXhpc3RpbmdLZXlzLmluY2x1ZGVzKGtleSkpIC8vIHJlbW92ZSBrZXlzIGFscmVhZHkgdGFrZW4gaW4gb3RoZXIgYW5ub3RhdGlvbnNcbiAgICAgICAgLm1hcCgoa2V5KSA9PiAoeyB2YWx1ZToga2V5LCBsYWJlbDogYW5ub3RhdGlvbkxhYmVsc1trZXldIH0pKSxcbiAgICBbZXhpc3RpbmdLZXlzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFdpdGhBZGRcbiAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG9wdGlvbnM9e2Fubm90YXRpb25PcHRpb25zfVxuICAgICAgY3VzdG9tPXshIXZhbHVlICYmICEoT2JqZWN0LnZhbHVlcyhBbm5vdGF0aW9uKSBhcyBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRmllbGRBcnJheSwgSW5wdXQsIElucHV0Q29udHJvbCwgTGFiZWwsIFRleHRBcmVhLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuaW1wb3J0IHsgQW5ub3RhdGlvbktleUlucHV0IH0gZnJvbSAnLi9Bbm5vdGF0aW9uS2V5SW5wdXQnO1xuXG5jb25zdCBBbm5vdGF0aW9uc0ZpZWxkOiBGQyA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sLFxuICAgIHJlZ2lzdGVyLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IGFubm90YXRpb25zID0gd2F0Y2goJ2Fubm90YXRpb25zJykgYXMgUnVsZUZvcm1WYWx1ZXNbJ2Fubm90YXRpb25zJ107XG5cbiAgY29uc3QgZXhpc3RpbmdLZXlzID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpOiBzdHJpbmdbXSA9PiBhbm5vdGF0aW9ucy5maWx0ZXIoKF8sIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IGluZGV4KS5tYXAoKHsga2V5IH0pID0+IGtleSksXG4gICAgW2Fubm90YXRpb25zXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYWJlbD5TdW1tYXJ5IGFuZCBhbm5vdGF0aW9uczwvTGFiZWw+XG4gICAgICA8RmllbGRBcnJheSBuYW1lPXsnYW5ub3RhdGlvbnMnfSBjb250cm9sPXtjb250cm9sfT5cbiAgICAgICAgeyh7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x1bW59PlxuICAgICAgICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNVcmwgPSBhbm5vdGF0aW9uc1tpbmRleF0/LmtleT8udG9Mb2NhbGVMb3dlckNhc2UoKS5lbmRzV2l0aCgndXJsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgVmFsdWVJbnB1dENvbXBvbmVudCA9IGlzVXJsID8gSW5wdXQgOiBUZXh0QXJlYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpZWxkLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuYW5ub3RhdGlvbnM/LltpbmRleF0/LmtleT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy5rZXk/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Bhbm5vdGF0aW9uLWtleS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgYW5ub3RhdGlvbnNbJHtpbmRleH1dLmtleWB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBbm5vdGF0aW9uS2V5SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YEFubm90YXRpb24gZGV0YWlsICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdLZXlzPXtleGlzdGluZ0tleXMoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHsgdmFsdWU6ICEhYW5ub3RhdGlvbnNbaW5kZXhdPy52YWx1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3dJdGVtTWFyZ2luLCBzdHlsZXMuZmllbGQpfVxuICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxWYWx1ZUlucHV0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YGFubm90YXRpb24tdmFsdWUtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuYW5ub3RhdGlvblZhbHVlSW5wdXQsIHsgW3N0eWxlcy50ZXh0YXJlYV06ICFpc1VybCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgYW5ub3RhdGlvbnNbJHtpbmRleH1dLnZhbHVlYCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXNVcmwgPyAnaHR0cHM6Ly8nIDogYFRleHRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd0l0ZW1NYXJnaW59XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZSBhbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRBbm5vdGF0aW9uc0J1dHRvbn1cbiAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGFwcGVuZCh7IGtleTogJycsIHZhbHVlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkIGluZm9cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9GaWVsZEFycmF5PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGFubm90YXRpb25WYWx1ZUlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDQyNnB4O1xuICBgLFxuICB0ZXh0YXJlYTogY3NzYFxuICAgIGhlaWdodDogNzZweDtcbiAgYCxcbiAgYWRkQW5ub3RhdGlvbnNCdXR0b246IGNzc2BcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMTQ4cHg7XG4gIGAsXG4gIGZsZXhDb2x1bW46IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGAsXG4gIGZpZWxkOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgYCxcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGAsXG4gIGZsZXhSb3dJdGVtTWFyZ2luOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gIGAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGlvbnNGaWVsZDtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZpZWxkQXJyYXksIElucHV0LCBJbmxpbmVMYWJlbCwgTGFiZWwsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCBMYWJlbHNGaWVsZDogRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBjb250cm9sLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IGxhYmVscyA9IHdhdGNoKCdsYWJlbHMnKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCBzdHlsZXMud3JhcHBlcil9PlxuICAgICAgPExhYmVsPkN1c3RvbSBMYWJlbHM8L0xhYmVsPlxuICAgICAgPEZpZWxkQXJyYXkgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImxhYmVsc1wiPlxuICAgICAgICB7KHsgZmllbGRzLCBhcHBlbmQsIHJlbW92ZSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgICAgICAgPElubGluZUxhYmVsIHdpZHRoPXsxOH0+TGFiZWxzPC9JbmxpbmVMYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x1bW59PlxuICAgICAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmaWVsZC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3csIHN0eWxlcy5jZW50ZXJBbGlnblJvdyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmxhYmVscz8uW2luZGV4XT8ua2V5Py5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubGFiZWxzPy5baW5kZXhdPy5rZXk/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgbGFiZWxzWyR7aW5kZXh9XS5rZXlgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiAhIWxhYmVsc1tpbmRleF0/LnZhbHVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YGxhYmVsLWtleS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkLmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5saW5lTGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuZXF1YWxTaWdufT49PC9JbmxpbmVMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5sYWJlbHM/LltpbmRleF0/LnZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubGFiZWxzPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGBsYWJlbHNbJHtpbmRleH1dLnZhbHVlYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogISFsYWJlbHNbaW5kZXhdPy5rZXksIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2BsYWJlbC12YWx1ZS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVMYWJlbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlIGxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRMYWJlbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYXBwZW5kKHt9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkIGxhYmVsXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9GaWVsZEFycmF5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwcGVyOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcueGx9O1xuICAgIGAsXG4gICAgZmxleENvbHVtbjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYCxcbiAgICBmbGV4Um93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICAgJiArIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICAgICAgfVxuICAgIGAsXG4gICAgZGVsZXRlTGFiZWxCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBgLFxuICAgIGFkZExhYmVsQnV0dG9uOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGAsXG4gICAgY2VudGVyQWxpZ25Sb3c6IGNzc2BcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBgLFxuICAgIGVxdWFsU2lnbjogY3NzYFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICBgLFxuICAgIGxhYmVsSW5wdXQ6IGNzc2BcbiAgICAgIHdpZHRoOiAxNzVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgICAmICsgJiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgfVxuICAgIGAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbHNGaWVsZDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJbnB1dCwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgdmFsdWU/OiBzdHJpbmc7XG4gIGFkZExhYmVsPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBjdXN0b20/OiBib29sZWFuO1xuICBvbkN1c3RvbUNoYW5nZT86IChjdXN0b206IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICdhcmlhLWxhYmVsJz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdFdpdGhBZGQ6IEZDPFByb3BzPiA9ICh7XG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgb3B0aW9ucyxcbiAgY2xhc3NOYW1lLFxuICBwbGFjZWhvbGRlcixcbiAgd2lkdGgsXG4gIGN1c3RvbSxcbiAgb25DdXN0b21DaGFuZ2UsXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIGFkZExhYmVsID0gJysgQWRkIG5ldycsXG4gICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxufSkgPT4ge1xuICBjb25zdCBbaXNDdXN0b20sIHNldElzQ3VzdG9tXSA9IHVzZVN0YXRlKGN1c3RvbSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VzdG9tKSB7XG4gICAgICBzZXRJc0N1c3RvbShjdXN0b20pO1xuICAgIH1cbiAgfSwgW2N1c3RvbV0pO1xuXG4gIGNvbnN0IF9vcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0+IFsuLi5vcHRpb25zLCB7IHZhbHVlOiAnX19hZGRfXycsIGxhYmVsOiBhZGRMYWJlbCB9XSxcbiAgICBbb3B0aW9ucywgYWRkTGFiZWxdXG4gICk7XG5cbiAgaWYgKGlzQ3VzdG9tKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgYXV0b0ZvY3VzPXshY3VzdG9tfVxuICAgICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZSgoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpfVxuICAgICAgLz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBvcHRpb25zPXtfb3B0aW9uc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsOiBTZWxlY3RhYmxlVmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbD8udmFsdWU7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSAnX19hZGRfXycpIHtcbiAgICAgICAgICAgIHNldElzQ3VzdG9tKHRydWUpO1xuICAgICAgICAgICAgaWYgKG9uQ3VzdG9tQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIG9uQ3VzdG9tQ2hhbmdlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DaGFuZ2UoJycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJY29uTmFtZSwgVG9vbHRpcCwgTGlua0J1dHRvbiwgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUG9wb3ZlckNvbnRlbnQsIFRvb2x0aXBQbGFjZW1lbnQgfSBmcm9tICdAZ3JhZmFuYS91aS9zcmMvY29tcG9uZW50cy9Ub29sdGlwJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdG9vbHRpcDogUG9wb3ZlckNvbnRlbnQ7XG4gIGljb246IEljb25OYW1lO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHRvb2x0aXBQbGFjZW1lbnQ/OiBUb29sdGlwUGxhY2VtZW50O1xuICB0bz86IHN0cmluZztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgJ2RhdGEtdGVzdGlkJz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFjdGlvbkljb246IEZDPFByb3BzPiA9ICh7XG4gIHRvb2x0aXAsXG4gIGljb24sXG4gIHRvLFxuICB0YXJnZXQsXG4gIG9uQ2xpY2ssXG4gIGNsYXNzTmFtZSxcbiAgdG9vbHRpcFBsYWNlbWVudCA9ICd0b3AnLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IGFyaWFMYWJlbCA9IHR5cGVvZiB0b29sdGlwID09PSAnc3RyaW5nJyA/IHRvb2x0aXAgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcCBjb250ZW50PXt0b29sdGlwfSBwbGFjZW1lbnQ9e3Rvb2x0aXBQbGFjZW1lbnR9PlxuICAgICAge3RvID8gKFxuICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGhyZWY9e3RvfVxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgdGFyZ2V0PXt0YXJnZXR9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvVG9vbHRpcD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnYXBwL2NvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2UsIEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuLi91dGlscy9kYXRhc291cmNlJztcblxuZnVuY3Rpb24gdXNlSXNBbGVydE1hbmFnZXJBdmFpbGFibGUoYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdKSB7XG4gIHJldHVybiB1c2VDYWxsYmFjayhcbiAgICAoYWxlcnRNYW5hZ2VyTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMgPSBhdmFpbGFibGVBbGVydE1hbmFnZXJzLm1hcCgoYW0pID0+IGFtLm5hbWUpO1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnNOYW1lcy5pbmNsdWRlcyhhbGVydE1hbmFnZXJOYW1lKTtcbiAgICB9LFxuICAgIFthdmFpbGFibGVBbGVydE1hbmFnZXJzXVxuICApO1xufVxuXG4vKiBUaGlzIHdpbGwgcmV0dXJuIGFtIG5hbWUgZWl0aGVyIGZyb20gcXVlcnkgcGFyYW1zIG9yIGZyb20gbG9jYWwgc3RvcmFnZSBvciBhIGRlZmF1bHQgKGdyYWZhbmEpLlxuICogRHVlIHRvIFJCQUMgcGVybWlzc2lvbnMgR3JhZmFuYSBNYW5hZ2VkIEFsZXJ0IG1hbmFnZXIgb3IgZXh0ZXJuYWwgYWxlcnQgbWFuYWdlcnMgbWF5IG5vdCBiZSBhdmFpbGFibGVcbiAqIEluIHRoZSB3b3JzdCBjYXNlIG5laWh0ZXIgR01BIG5vciBleHRlcm5hbCBhbGVydCBtYW5hZ2VyIGlzIGF2YWlsYWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZShcbiAgYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdXG4pOiBbc3RyaW5nIHwgdW5kZWZpbmVkLCAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nKSA9PiB2b2lkXSB7XG4gIGNvbnN0IFtxdWVyeVBhcmFtcywgdXBkYXRlUXVlcnlQYXJhbXNdID0gdXNlUXVlcnlQYXJhbXMoKTtcbiAgY29uc3QgaXNBbGVydE1hbmFnZXJBdmFpbGFibGUgPSB1c2VJc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShhdmFpbGFibGVBbGVydE1hbmFnZXJzKTtcblxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIWlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lID09PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSB7XG4gICAgICAgIHN0b3JlLmRlbGV0ZShBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IG51bGwgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yZS5zZXQoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVksIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuICAgICAgICB1cGRhdGVRdWVyeVBhcmFtcyh7IFtBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldOiBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3VwZGF0ZVF1ZXJ5UGFyYW1zLCBpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZV1cbiAgKTtcblxuICBjb25zdCBxdWVyeVNvdXJjZSA9IHF1ZXJ5UGFyYW1zW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV07XG5cbiAgaWYgKHF1ZXJ5U291cmNlICYmIHR5cGVvZiBxdWVyeVNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaXNBbGVydE1hbmFnZXJBdmFpbGFibGUocXVlcnlTb3VyY2UpKSB7XG4gICAgICByZXR1cm4gW3F1ZXJ5U291cmNlLCB1cGRhdGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub24gZXhpc3RpbmcgYWxlcnRtYW5hZ2VyXG4gICAgICByZXR1cm4gW3VuZGVmaW5lZCwgdXBkYXRlXTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdG9yZVNvdXJjZSA9IHN0b3JlLmdldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gIGlmIChzdG9yZVNvdXJjZSAmJiB0eXBlb2Ygc3RvcmVTb3VyY2UgPT09ICdzdHJpbmcnICYmIGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKHN0b3JlU291cmNlKSkge1xuICAgIHVwZGF0ZShzdG9yZVNvdXJjZSk7XG4gICAgcmV0dXJuIFtzdG9yZVNvdXJjZSwgdXBkYXRlXTtcbiAgfVxuXG4gIGlmIChpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSkge1xuICAgIHJldHVybiBbR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSwgdXBkYXRlXTtcbiAgfVxuXG4gIHJldHVybiBbdW5kZWZpbmVkLCB1cGRhdGVdO1xufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXNCeVBlcm1pc3Npb24gfSBmcm9tICcuLi91dGlscy9kYXRhc291cmNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24oYWNjZXNzVHlwZTogJ2luc3RhbmNlJyB8ICdub3RpZmljYXRpb24nKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzQnlQZXJtaXNzaW9uKGFjY2Vzc1R5cGUpLCBbYWNjZXNzVHlwZV0pO1xufVxuIiwiaW1wb3J0IHsgc2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVXNlRm9ybVJldHVybiB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmludGVyZmFjZSBPcHRpb25zPFI+IHtcbiAgbmFtZTogc3RyaW5nO1xuICBmb3JtQVBJOiBVc2VGb3JtUmV0dXJuPGFueT47XG4gIGRlZmF1bHRzPzogUltdO1xuXG4gIC8vIGlmIHRydWUsIHNldHMgYF9fZGVsZXRlZDogdHJ1ZWAgYnV0IGRvZXMgbm90IHJlbW92ZSBpdGVtIGZyb20gdGhlIGFycmF5IGluIHZhbHVlc1xuICBzb2Z0RGVsZXRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgQ29udHJvbGxlZEZpZWxkPFI+ID0gUiAmIHtcbiAgX19kZWxldGVkPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IEVNUFRZX0FSUkFZID0gW10gYXMgY29uc3Q7XG5cbi8qXG4gKiByZWFjdC1ob29rLWZvcm0ncyBvd24gdXNlRmllbGRBcnJheSBpcyB1bmNvbnRyb2xsZWQgYW5kIHN1cGVyIGJ1Z2d5LlxuICogdGhpcyBpcyBhIHNpbXBsZSBjb250cm9sbGVkIHZlcnNpb24uIEl0J3MgZGVhZCBzaW1wbGUgYW5kIG1vcmUgcm9idXN0IGF0IHRoZSBjb3N0IG9mIHJlLXJlbmRlcmluZyB0aGUgZm9ybVxuICogb24gZXZlcnkgY2hhbmdlIHRvIHRoZSBzdWIgZm9ybXMgaW4gdGhlIGFycmF5LlxuICogV2FybmluZzogeW91J2xsIGhhdmUgdG8gdGFrZSBjYXJlIG9mIHlvdXIgb3duIHVuaXF1ZSBpZGVudGlpZmVyIHRvIHVzZSBhcyBga2V5YCBmb3IgdGhlIFJlYWN0Tm9kZSBhcnJheS5cbiAqIFVzaW5nIGluZGV4IHdpbGwgY2F1c2UgcHJvYmxlbXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250cm9sbGVkRmllbGRBcnJheTxSPihvcHRpb25zOiBPcHRpb25zPFI+KSB7XG4gIGNvbnN0IHsgbmFtZSwgZm9ybUFQSSwgZGVmYXVsdHMsIHNvZnREZWxldGUgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHsgd2F0Y2gsIGdldFZhbHVlcywgcmVzZXQsIHNldFZhbHVlIH0gPSBmb3JtQVBJO1xuXG4gIGNvbnN0IGZpZWxkczogQXJyYXk8Q29udHJvbGxlZEZpZWxkPFI+PiA9IHdhdGNoKG5hbWUpID8/IGRlZmF1bHRzID8/IEVNUFRZX0FSUkFZO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh1cGRhdGVGbjogKGZpZWxkczogUltdKSA9PiBSW10pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2V0VmFsdWVzKCkpKTtcbiAgICAgIGNvbnN0IG5ld0l0ZW1zID0gdXBkYXRlRm4oZmllbGRzID8/IFtdKTtcbiAgICAgIHJlc2V0KHNldCh2YWx1ZXMsIG5hbWUsIG5ld0l0ZW1zKSk7XG4gICAgfSxcbiAgICBbZ2V0VmFsdWVzLCBuYW1lLCByZXNldCwgZmllbGRzXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgZmllbGRzLFxuICAgIGFwcGVuZDogdXNlQ2FsbGJhY2soKHZhbHVlczogUikgPT4gdXBkYXRlKChmaWVsZHMpID0+IFsuLi5maWVsZHMsIHZhbHVlc10pLCBbdXBkYXRlXSksXG4gICAgcmVtb3ZlOiB1c2VDYWxsYmFjayhcbiAgICAgIChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChzb2Z0RGVsZXRlKSB7XG4gICAgICAgICAgc2V0VmFsdWUoYCR7bmFtZX0uJHtpbmRleH0uX19kZWxldGVkYCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlKChpdGVtcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBpdGVtcy5zbGljZSgpO1xuICAgICAgICAgICAgbmV3SXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdJdGVtcztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFt1cGRhdGUsIG5hbWUsIHNldFZhbHVlLCBzb2Z0RGVsZXRlXVxuICAgICksXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGVydFRhYmxlU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB0YWJsZTogY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICR7dGhlbWUuY29sb3JzLmJvcmRlci53ZWFrfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG5cbiAgICB0aCB7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG5cbiAgICB0ciB7XG4gICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgfVxuICBgLFxuICBldmVuUm93OiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5wcmltYXJ5fTtcbiAgYCxcbiAgY29sRXhwYW5kOiBjc3NgXG4gICAgd2lkdGg6IDM2cHg7XG4gIGAsXG4gIGFjdGlvbnNDZWxsOiBjc3NgXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IDElO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAmID4gKiArICoge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICB9XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24sIE5vdGlmaWVyRFRPIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZnVuY3Rpb24gb3B0aW9uKFxuICBwcm9wZXJ0eU5hbWU6IHN0cmluZyxcbiAgbGFiZWw6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgcmVzdDogUGFydGlhbDxOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uPiA9IHt9XG4pOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0eU5hbWUsXG4gICAgbGFiZWwsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZWxlbWVudDogJ2lucHV0JyxcbiAgICBpbnB1dFR5cGU6ICcnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBzZWN1cmU6IGZhbHNlLFxuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICB2YWxpZGF0aW9uUnVsZTogJycsXG4gICAgc2hvd1doZW46IHsgZmllbGQ6ICcnLCBpczogJycgfSxcbiAgICBkZXBlbmRzT246ICcnLFxuICAgIC4uLnJlc3QsXG4gIH07XG59XG5cbmNvbnN0IGJhc2ljQXV0aE9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiA9IG9wdGlvbihcbiAgJ2Jhc2ljX2F1dGgnLFxuICAnQmFzaWMgYXV0aCcsXG4gICdTZXRzIHRoZSBgQXV0aG9yaXphdGlvbmAgaGVhZGVyIHdpdGggdGhlIGNvbmZpZ3VyZWQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLiBQYXNzd29yZCBhbmQgcGFzc3dvcmRfZmlsZSBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLicsXG4gIHtcbiAgICBlbGVtZW50OiAnc3ViZm9ybScsXG4gICAgc3ViZm9ybU9wdGlvbnM6IFtcbiAgICAgIG9wdGlvbigndXNlcm5hbWUnLCAnVXNlcm5hbWUnLCAnJyksXG4gICAgICBvcHRpb24oJ3Bhc3N3b3JkJywgJ1Bhc3N3b3JkJywgJycpLFxuICAgICAgb3B0aW9uKCdwYXNzd29yZF9maWxlJywgJ1Bhc3N3b3JkIGZpbGUnLCAnJyksXG4gICAgXSxcbiAgfVxuKTtcblxuY29uc3QgdGxzQ29uZmlnT3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uID0gb3B0aW9uKCd0bHNfY29uZmlnJywgJ1RMUyBjb25maWcnLCAnQ29uZmlndXJlcyB0aGUgVExTIHNldHRpbmdzLicsIHtcbiAgZWxlbWVudDogJ3N1YmZvcm0nLFxuICBzdWJmb3JtT3B0aW9uczogW1xuICAgIG9wdGlvbignY2FfZmlsZScsICdDQSBmaWxlJywgJ0NBIGNlcnRpZmljYXRlIHRvIHZhbGlkYXRlIHRoZSBzZXJ2ZXIgY2VydGlmaWNhdGUgd2l0aC4nKSxcbiAgICBvcHRpb24oJ2NlcnRfZmlsZScsICdDZXJ0IGZpbGUnLCAnQ2VydGlmaWNhdGUgZm9yIGNsaWVudCBjZXJ0IGF1dGhlbnRpY2F0aW9uIHRvIHRoZSBzZXJ2ZXIuJyksXG4gICAgb3B0aW9uKCdrZXlfZmlsZScsICdLZXkgZmlsZScsICdLZXkgZmlsZSBmb3IgY2xpZW50IGNlcnQgYXV0aGVudGljYXRpb24gdG8gdGhlIHNlcnZlci4nKSxcbiAgICBvcHRpb24oJ3NlcnZlcl9uYW1lJywgJ1NlcnZlciBuYW1lJywgJ1NlcnZlck5hbWUgZXh0ZW5zaW9uIHRvIGluZGljYXRlIHRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIuJyksXG4gICAgb3B0aW9uKCdpbnNlY3VyZV9za2lwX3ZlcmlmeScsICdTa2lwIHZlcmlmeScsICdEaXNhYmxlIHZhbGlkYXRpb24gb2YgdGhlIHNlcnZlciBjZXJ0aWZpY2F0ZS4nLCB7XG4gICAgICBlbGVtZW50OiAnY2hlY2tib3gnLFxuICAgIH0pLFxuICBdLFxufSk7XG5cbmNvbnN0IGh0dHBDb25maWdPcHRpb246IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gPSBvcHRpb24oXG4gICdodHRwX2NvbmZpZycsXG4gICdIVFRQIENvbmZpZycsXG4gICdOb3RlIHRoYXQgYGJhc2ljX2F1dGhgLCBgYmVhcmVyX3Rva2VuYCBhbmQgYGJlYXJlcl90b2tlbl9maWxlYCBvcHRpb25zIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuJyxcbiAge1xuICAgIGVsZW1lbnQ6ICdzdWJmb3JtJyxcbiAgICBzdWJmb3JtT3B0aW9uczogW1xuICAgICAgb3B0aW9uKCdiZWFyZXJfdG9rZW4nLCAnQmVhcmVyIHRva2VuJywgJ1NldHMgdGhlIGBBdXRob3JpemF0aW9uYCBoZWFkZXIgd2l0aCB0aGUgY29uZmlndXJlZCBiZWFyZXIgdG9rZW4uJyksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdiZWFyZXJfdG9rZW5fZmlsZScsXG4gICAgICAgICdCZWFyZXIgdG9rZW4gZmlsZScsXG4gICAgICAgICdTZXRzIHRoZSBgQXV0aG9yaXphdGlvbmAgaGVhZGVyIHdpdGggdGhlIGJlYXJlciB0b2tlbiByZWFkIGZyb20gdGhlIGNvbmZpZ3VyZWQgZmlsZS4nXG4gICAgICApLFxuICAgICAgb3B0aW9uKCdwcm94eV91cmwnLCAnUHJveHkgVVJMJywgJ09wdGlvbmFsIHByb3h5IFVSTC4nKSxcbiAgICAgIGJhc2ljQXV0aE9wdGlvbixcbiAgICAgIHRsc0NvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgY2xvdWROb3RpZmllclR5cGVzOiBOb3RpZmllckRUT1tdID0gW1xuICB7XG4gICAgbmFtZTogJ0VtYWlsJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgbm90aWZpY2F0aW9uIG92ZXIgU01UUCcsXG4gICAgdHlwZTogJ2VtYWlsJyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnRW1haWwgc2V0dGluZ3MnLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIG9wdGlvbigndG8nLCAnVG8nLCAnVGhlIGVtYWlsIGFkZHJlc3MgdG8gc2VuZCBub3RpZmljYXRpb25zIHRvLicsIHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgICBvcHRpb24oJ2Zyb20nLCAnRnJvbScsICdUaGUgc2VuZGVyIGFkZHJlc3MuJyksXG4gICAgICBvcHRpb24oJ3NtYXJ0aG9zdCcsICdTTVRQIGhvc3QnLCAnVGhlIFNNVFAgaG9zdCB0aHJvdWdoIHdoaWNoIGVtYWlscyBhcmUgc2VudC4nKSxcbiAgICAgIG9wdGlvbignaGVsbG8nLCAnSGVsbG8nLCAnVGhlIGhvc3RuYW1lIHRvIGlkZW50aWZ5IHRvIHRoZSBTTVRQIHNlcnZlci4nKSxcbiAgICAgIG9wdGlvbignYXV0aF91c2VybmFtZScsICdVc2VybmFtZScsICdTTVRQIGF1dGhlbnRpY2F0aW9uIGluZm9ybWF0aW9uJyksXG4gICAgICBvcHRpb24oJ2F1dGhfcGFzc3dvcmQnLCAnUGFzc3dvcmQnLCAnU01UUCBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbicpLFxuICAgICAgb3B0aW9uKCdhdXRoX3NlY3JldCcsICdTZWNyZXQnLCAnU01UUCBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbicpLFxuICAgICAgb3B0aW9uKCdhdXRoX2lkZW50aXR5JywgJ0lkZW50aXR5JywgJ1NNVFAgYXV0aGVudGljYXRpb24gaW5mb3JtYXRpb24nKSxcbiAgICAgIG9wdGlvbigncmVxdWlyZV90bHMnLCAnUmVxdWlyZSBUTFMnLCAnVGhlIFNNVFAgVExTIHJlcXVpcmVtZW50JywgeyBlbGVtZW50OiAnY2hlY2tib3gnIH0pLFxuICAgICAgb3B0aW9uKCdodG1sJywgJ0VtYWlsIEhUTUwgYm9keScsICdUaGUgSFRNTCBib2R5IG9mIHRoZSBlbWFpbCBub3RpZmljYXRpb24uJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwiZW1haWwuZGVmYXVsdC5odG1sXCIgLiB9fScsXG4gICAgICAgIGVsZW1lbnQ6ICd0ZXh0YXJlYScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbigndGV4dCcsICdFbWFpbCB0ZXh0IGJvZHknLCAnVGhlIHRleHQgYm9keSBvZiB0aGUgZW1haWwgbm90aWZpY2F0aW9uLicsIHsgZWxlbWVudDogJ3RleHRhcmVhJyB9KSxcbiAgICAgIG9wdGlvbihcbiAgICAgICAgJ2hlYWRlcnMnLFxuICAgICAgICAnSGVhZGVycycsXG4gICAgICAgICdGdXJ0aGVyIGhlYWRlcnMgZW1haWwgaGVhZGVyIGtleS92YWx1ZSBwYWlycy4gT3ZlcnJpZGVzIGFueSBoZWFkZXJzIHByZXZpb3VzbHkgc2V0IGJ5IHRoZSBub3RpZmljYXRpb24gaW1wbGVtZW50YXRpb24uJyxcbiAgICAgICAgeyBlbGVtZW50OiAna2V5X3ZhbHVlX21hcCcgfVxuICAgICAgKSxcbiAgICAgIHRsc0NvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1BhZ2VyRHV0eScsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIG5vdGlmaWNhdGlvbnMgdG8gUGFnZXJEdXR5JyxcbiAgICB0eXBlOiAncGFnZXJkdXR5JyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnUGFnZXJEdXR5IHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oXG4gICAgICAgICdyb3V0aW5nX2tleScsXG4gICAgICAgICdSb3V0aW5nIGtleScsXG4gICAgICAgICdUaGUgUGFnZXJEdXR5IGludGVncmF0aW9uIGtleSAod2hlbiB1c2luZyBQYWdlckR1dHkgaW50ZWdyYXRpb24gdHlwZSBgRXZlbnRzIEFQSSB2MmApJ1xuICAgICAgKSxcbiAgICAgIG9wdGlvbihcbiAgICAgICAgJ3NlcnZpY2Vfa2V5JyxcbiAgICAgICAgJ1NlcnZpY2Uga2V5JyxcbiAgICAgICAgJ1RoZSBQYWdlckR1dHkgaW50ZWdyYXRpb24ga2V5ICh3aGVuIHVzaW5nIFBhZ2VyRHV0eSBpbnRlZ3JhdGlvbiB0eXBlIGBQcm9tZXRoZXVzYCkuJ1xuICAgICAgKSxcbiAgICAgIG9wdGlvbigndXJsJywgJ1VSTCcsICdUaGUgVVJMIHRvIHNlbmQgQVBJIHJlcXVlc3RzIHRvJyksXG4gICAgICBvcHRpb24oJ2NsaWVudCcsICdDbGllbnQnLCAnVGhlIGNsaWVudCBpZGVudGlmaWNhdGlvbiBvZiB0aGUgQWxlcnRtYW5hZ2VyLicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInBhZ2VyZHV0eS5kZWZhdWx0LmNsaWVudFwiIC4gfX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ2NsaWVudF91cmwnLCAnQ2xpZW50IFVSTCcsICdBIGJhY2tsaW5rIHRvIHRoZSBzZW5kZXIgb2YgdGhlIG5vdGlmaWNhdGlvbi4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJwYWdlcmR1dHkuZGVmYXVsdC5jbGllbnRVUkxcIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdkZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicsICdBIGRlc2NyaXB0aW9uIG9mIHRoZSBpbmNpZGVudC4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJwYWdlcmR1dHkuZGVmYXVsdC5kZXNjcmlwdGlvblwiIC59fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignc2V2ZXJpdHknLCAnU2V2ZXJpdHknLCAnU2V2ZXJpdHkgb2YgdGhlIGluY2lkZW50LicsIHsgcGxhY2Vob2xkZXI6ICdlcnJvcicgfSksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdkZXRhaWxzJyxcbiAgICAgICAgJ0RldGFpbHMnLFxuICAgICAgICAnQSBzZXQgb2YgYXJiaXRyYXJ5IGtleS92YWx1ZSBwYWlycyB0aGF0IHByb3ZpZGUgZnVydGhlciBkZXRhaWwgYWJvdXQgdGhlIGluY2lkZW50LicsXG4gICAgICAgIHtcbiAgICAgICAgICBlbGVtZW50OiAna2V5X3ZhbHVlX21hcCcsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBvcHRpb24oJ2ltYWdlcycsICdJbWFnZXMnLCAnSW1hZ2VzIHRvIGF0dGFjaCB0byB0aGUgaW5jaWRlbnQuJywge1xuICAgICAgICBlbGVtZW50OiAnc3ViZm9ybV9hcnJheScsXG4gICAgICAgIHN1YmZvcm1PcHRpb25zOiBbXG4gICAgICAgICAgb3B0aW9uKCdocmVmJywgJ1VSTCcsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbignc291cmNlJywgJ1NvdXJjZScsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbignYWx0JywgJ0FsdCcsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ2xpbmtzJywgJ0xpbmtzJywgJ0xpbmtzIHRvIGF0dGFjaCB0byB0aGUgaW5jaWRlbnQuJywge1xuICAgICAgICBlbGVtZW50OiAnc3ViZm9ybV9hcnJheScsXG4gICAgICAgIHN1YmZvcm1PcHRpb25zOiBbb3B0aW9uKCdocmVmJywgJ1VSTCcsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLCBvcHRpb24oJ3RleHQnLCAnVGV4dCcsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pXSxcbiAgICAgIH0pLFxuICAgICAgaHR0cENvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1B1c2hvdmVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgbm90aWZpY2F0aW9ucyB0byBQdXNob3ZlcicsXG4gICAgdHlwZTogJ3B1c2hvdmVyJyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnUHVzaG92ZXIgc2V0dGluZ3MnLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIG9wdGlvbigndXNlcl9rZXknLCAnVXNlciBrZXknLCAnVGhlIHJlY2lwaWVudCB1c2Vy4oCZcyB1c2VyIGtleS4nLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgb3B0aW9uKCd0b2tlbicsICdUb2tlbicsICdZb3VyIHJlZ2lzdGVyZWQgYXBwbGljYXRpb27igJlzIEFQSSB0b2tlbiwgc2VlIGh0dHBzOi8vcHVzaG92ZXIubmV0L2FwcCcsIHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbigndGl0bGUnLCAnVGl0bGUnLCAnTm90aWZpY2F0aW9uIHRpdGxlLicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInB1c2hvdmVyLmRlZmF1bHQudGl0bGVcIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdtZXNzYWdlJywgJ01lc3NhZ2UnLCAnTm90aWZpY2F0aW9uIG1lc3NhZ2UuJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwicHVzaG92ZXIuZGVmYXVsdC5tZXNzYWdlXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbigndXJsJywgJ1VSTCcsICdBIHN1cHBsZW1lbnRhcnkgVVJMIHNob3duIGFsb25nc2lkZSB0aGUgbWVzc2FnZS4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJwdXNob3Zlci5kZWZhdWx0LnVybFwiIC4gfX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3ByaW9yaXR5JywgJ1ByaW9yaXR5JywgJ1ByaW9yaXR5LCBzZWUgaHR0cHM6Ly9wdXNob3Zlci5uZXQvYXBpI3ByaW9yaXR5Jywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IGlmIGVxIC5TdGF0dXMgXCJmaXJpbmdcIiB9fTJ7eyBlbHNlIH19MHt7IGVuZCB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbihcbiAgICAgICAgJ3JldHJ5JyxcbiAgICAgICAgJ1JldHJ5JyxcbiAgICAgICAgJ0hvdyBvZnRlbiB0aGUgUHVzaG92ZXIgc2VydmVycyB3aWxsIHNlbmQgdGhlIHNhbWUgbm90aWZpY2F0aW9uIHRvIHRoZSB1c2VyLiBNdXN0IGJlIGF0IGxlYXN0IDMwIHNlY29uZHMuJyxcbiAgICAgICAge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMW0nLFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgb3B0aW9uKFxuICAgICAgICAnZXhwaXJlJyxcbiAgICAgICAgJ0V4cGlyZScsXG4gICAgICAgICdIb3cgbG9uZyB5b3VyIG5vdGlmaWNhdGlvbiB3aWxsIGNvbnRpbnVlIHRvIGJlIHJldHJpZWQgZm9yLCB1bmxlc3MgdGhlIHVzZXIgYWNrbm93bGVkZ2VzIHRoZSBub3RpZmljYXRpb24uJyxcbiAgICAgICAge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMWgnLFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaHR0cENvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NsYWNrJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgbm90aWZpY2F0aW9ucyB0byBTbGFjaycsXG4gICAgdHlwZTogJ3NsYWNrJyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnU2xhY2sgc2V0dGluZ3MnLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIG9wdGlvbignYXBpX3VybCcsICdXZWJob29rIFVSTCcsICdUaGUgU2xhY2sgd2ViaG9vayBVUkwuJyksXG4gICAgICBvcHRpb24oJ2NoYW5uZWwnLCAnQ2hhbm5lbCcsICdUaGUgI2NoYW5uZWwgb3IgQHVzZXIgdG8gc2VuZCBub3RpZmljYXRpb25zIHRvLicsIHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgICBvcHRpb24oJ2ljb25fZW1vamknLCAnRW1vamkgaWNvbicsICcnKSxcbiAgICAgIG9wdGlvbignaWNvbl91cmwnLCAnSWNvbiBVUkwnLCAnJyksXG4gICAgICBvcHRpb24oJ2xpbmtfbmFtZXMnLCAnTmFtZXMgbGluaycsICcnLCB7IGVsZW1lbnQ6ICdjaGVja2JveCcgfSksXG4gICAgICBvcHRpb24oJ3VzZXJuYW1lJywgJ1VzZXJuYW1lJywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQudXNlcm5hbWVcIiAuIH19JyB9KSxcbiAgICAgIG9wdGlvbignY2FsbGJhY2tfaWQnLCAnQ2FsbGJhY2sgSUQnLCAnJywgeyBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwic2xhY2suZGVmYXVsdC5jYWxsYmFja2lkXCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ2NvbG9yJywgJ0NvbG9yJywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyBpZiBlcSAuU3RhdHVzIFwiZmlyaW5nXCIgfX1kYW5nZXJ7eyBlbHNlIH19Z29vZHt7IGVuZCB9fScgfSksXG4gICAgICBvcHRpb24oJ2ZhbGxiYWNrJywgJ0ZhbGxiYWNrJywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQuZmFsbGJhY2tcIiAuIH19JyB9KSxcbiAgICAgIG9wdGlvbignZm9vdGVyJywgJ0Zvb3RlcicsICcnLCB7IHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJzbGFjay5kZWZhdWx0LmZvb3RlclwiIC4gfX0nIH0pLFxuICAgICAgb3B0aW9uKCdtcmtkd25faW4nLCAnTXJrZHduIGZpZWxkcycsICdBbiBhcnJheSBvZiBmaWVsZCBuYW1lcyB0aGF0IHNob3VsZCBiZSBmb3JtYXR0ZWQgYnkgbXJrZHduIHN5bnRheC4nLCB7XG4gICAgICAgIGVsZW1lbnQ6ICdzdHJpbmdfYXJyYXknLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3ByZXRleHQnLCAnUHJlLXRleHQnLCAnJywgeyBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwic2xhY2suZGVmYXVsdC5wcmV0ZXh0XCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ3Nob3J0X2ZpZWxkcycsICdTaG9ydCBmaWVsZHMnLCAnJywgeyBlbGVtZW50OiAnY2hlY2tib3gnIH0pLFxuICAgICAgb3B0aW9uKCd0ZXh0JywgJ01lc3NhZ2UgYm9keScsICcnLCB7IGVsZW1lbnQ6ICd0ZXh0YXJlYScsIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJzbGFjay5kZWZhdWx0LnRleHRcIiAuIH19JyB9KSxcbiAgICAgIG9wdGlvbigndGl0bGUnLCAnVGl0bGUnLCAnJywgeyBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwic2xhY2suZGVmYXVsdC50aXRsZVwiIC4gfX0nIH0pLFxuICAgICAgb3B0aW9uKCd0aXRsZV9saW5rJywgJ1RpdGxlIGxpbmsnLCAnJywgeyBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwic2xhY2suZGVmYXVsdC50aXRsZWxpbmtcIiAuIH19JyB9KSxcbiAgICAgIG9wdGlvbignaW1hZ2VfdXJsJywgJ0ltYWdlIFVSTCcsICcnKSxcbiAgICAgIG9wdGlvbigndGh1bWJfdXJsJywgJ1RodW1ibmFpbCBVUkwnLCAnJyksXG4gICAgICBvcHRpb24oJ2FjdGlvbnMnLCAnQWN0aW9ucycsICcnLCB7XG4gICAgICAgIGVsZW1lbnQ6ICdzdWJmb3JtX2FycmF5JyxcbiAgICAgICAgc3ViZm9ybU9wdGlvbnM6IFtcbiAgICAgICAgICBvcHRpb24oJ3RleHQnLCAnVGV4dCcsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbigndHlwZScsICdUeXBlJywgJycsIHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgICAgICAgb3B0aW9uKCd1cmwnLCAnVVJMJywgJ0VpdGhlciB1cmwgb3IgbmFtZSBhbmQgdmFsdWUgYXJlIG1hbmRhdG9yeS4nKSxcbiAgICAgICAgICBvcHRpb24oJ25hbWUnLCAnTmFtZScsICcnKSxcbiAgICAgICAgICBvcHRpb24oJ3ZhbHVlJywgJ1ZhbHVlJywgJycpLFxuICAgICAgICAgIG9wdGlvbignY29uZmlybScsICdDb25maXJtJywgJycsIHtcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdzdWJmb3JtJyxcbiAgICAgICAgICAgIHN1YmZvcm1PcHRpb25zOiBbXG4gICAgICAgICAgICAgIG9wdGlvbigndGV4dCcsICdUZXh0JywgJycsIHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgICAgICAgICAgIG9wdGlvbignZGlzbWlzc190ZXh0JywgJ0Rpc21pc3MgdGV4dCcsICcnKSxcbiAgICAgICAgICAgICAgb3B0aW9uKCdva190ZXh0JywgJ09LIHRleHQnLCAnJyksXG4gICAgICAgICAgICAgIG9wdGlvbigndGl0bGUnLCAnVGl0bGUnLCAnJyksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9wdGlvbignc3R5bGUnLCAnU3R5bGUnLCAnJyksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignZmllbGRzJywgJ0ZpZWxkcycsICcnLCB7XG4gICAgICAgIGVsZW1lbnQ6ICdzdWJmb3JtX2FycmF5JyxcbiAgICAgICAgc3ViZm9ybU9wdGlvbnM6IFtcbiAgICAgICAgICBvcHRpb24oJ3RpdGxlJywgJ1RpdGxlJywgJycsIHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgICAgICAgb3B0aW9uKCd2YWx1ZScsICdWYWx1ZScsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbignc2hvcnQnLCAnU2hvcnQnLCAnJywgeyBlbGVtZW50OiAnY2hlY2tib3gnIH0pLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICBodHRwQ29uZmlnT3B0aW9uLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT3BzR2VuaWUnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2VuZCBub3RpZmljYXRpb25zIHRvIE9wc0dlbmllJyxcbiAgICB0eXBlOiAnb3BzZ2VuaWUnLFxuICAgIGluZm86ICcnLFxuICAgIGhlYWRpbmc6ICdPcHNHZW5pZSBzZXR0aW5ncycsXG4gICAgb3B0aW9uczogW1xuICAgICAgb3B0aW9uKCdhcGlfa2V5JywgJ0FQSSBrZXknLCAnVGhlIEFQSSBrZXkgdG8gdXNlIHdoZW4gdGFsa2luZyB0byB0aGUgT3BzR2VuaWUgQVBJLicpLFxuICAgICAgb3B0aW9uKCdhcGlfdXJsJywgJ0FQSSBVUkwnLCAnVGhlIGhvc3QgdG8gc2VuZCBPcHNHZW5pZSBBUEkgcmVxdWVzdHMgdG8uJyksXG4gICAgICBvcHRpb24oJ21lc3NhZ2UnLCAnTWVzc2FnZScsICdBbGVydCB0ZXh0IGxpbWl0ZWQgdG8gMTMwIGNoYXJhY3RlcnMuJyksXG4gICAgICBvcHRpb24oJ2Rlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJywgJ0EgZGVzY3JpcHRpb24gb2YgdGhlIGluY2lkZW50LicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcIm9wc2dlbmllLmRlZmF1bHQuZGVzY3JpcHRpb25cIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdzb3VyY2UnLCAnU291cmNlJywgJ0EgYmFja2xpbmsgdG8gdGhlIHNlbmRlciBvZiB0aGUgbm90aWZpY2F0aW9uLicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcIm9wc2dlbmllLmRlZmF1bHQuc291cmNlXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbihcbiAgICAgICAgJ2RldGFpbHMnLFxuICAgICAgICAnRGV0YWlscycsXG4gICAgICAgICdBIHNldCBvZiBhcmJpdHJhcnkga2V5L3ZhbHVlIHBhaXJzIHRoYXQgcHJvdmlkZSBmdXJ0aGVyIGRldGFpbCBhYm91dCB0aGUgaW5jaWRlbnQuJyxcbiAgICAgICAge1xuICAgICAgICAgIGVsZW1lbnQ6ICdrZXlfdmFsdWVfbWFwJyxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIG9wdGlvbigndGFncycsICdUYWdzJywgJ0NvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRhZ3MgYXR0YWNoZWQgdG8gdGhlIG5vdGlmaWNhdGlvbnMuJyksXG4gICAgICBvcHRpb24oJ25vdGUnLCAnTm90ZScsICdBZGRpdGlvbmFsIGFsZXJ0IG5vdGUuJyksXG4gICAgICBvcHRpb24oJ3ByaW9yaXR5JywgJ1ByaW9yaXR5JywgJ1ByaW9yaXR5IGxldmVsIG9mIGFsZXJ0LiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFAxLCBQMiwgUDMsIFA0LCBhbmQgUDUuJyksXG4gICAgICBvcHRpb24oJ3Jlc3BvbmRlcnMnLCAnUmVzcG9uZGVycycsICdMaXN0IG9mIHJlc3BvbmRlcnMgcmVzcG9uc2libGUgZm9yIG5vdGlmaWNhdGlvbnMuJywge1xuICAgICAgICBlbGVtZW50OiAnc3ViZm9ybV9hcnJheScsXG4gICAgICAgIHN1YmZvcm1PcHRpb25zOiBbXG4gICAgICAgICAgb3B0aW9uKCd0eXBlJywgJ1R5cGUnLCAnXCJ0ZWFtXCIsIFwidXNlclwiLCBcImVzY2FsYXRpb25cIiBvciBzY2hlZHVsZVwiLicsIHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgICAgICAgb3B0aW9uKCdpZCcsICdJRCcsICdFeGFjdGx5IG9uZSBvZiB0aGVzZSBmaWVsZHMgc2hvdWxkIGJlIGRlZmluZWQuJyksXG4gICAgICAgICAgb3B0aW9uKCduYW1lJywgJ05hbWUnLCAnRXhhY3RseSBvbmUgb2YgdGhlc2UgZmllbGRzIHNob3VsZCBiZSBkZWZpbmVkLicpLFxuICAgICAgICAgIG9wdGlvbigndXNlcm5hbWUnLCAnVXNlcm5hbWUnLCAnRXhhY3RseSBvbmUgb2YgdGhlc2UgZmllbGRzIHNob3VsZCBiZSBkZWZpbmVkLicpLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICBodHRwQ29uZmlnT3B0aW9uLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVmljdG9yT3BzJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgbm90aWZpY2F0aW9ucyB0byBWaWN0b3JPcHMnLFxuICAgIHR5cGU6ICd2aWN0b3JvcHMnLFxuICAgIGluZm86ICcnLFxuICAgIGhlYWRpbmc6ICdWaWN0b3JPcHMgc2V0dGluZ3MnLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIG9wdGlvbignYXBpX2tleScsICdBUEkga2V5JywgJ1RoZSBBUEkga2V5IHRvIHVzZSB3aGVuIHRhbGtpbmcgdG8gdGhlIFZpY3Rvck9wcyBBUEkuJyksXG4gICAgICBvcHRpb24oJ2FwaV91cmwnLCAnQVBJIFVSTCcsICdUaGUgVmljdG9yT3BzIEFQSSBVUkwuJyksXG4gICAgICBvcHRpb24oJ3JvdXRpbmdfa2V5JywgJ1JvdXRpbmcga2V5JywgJ0Ega2V5IHVzZWQgdG8gbWFwIHRoZSBhbGVydCB0byBhIHRlYW0uJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgIG9wdGlvbignbWVzc2FnZV90eXBlJywgJ01lc3NhZ2UgdHlwZScsICdEZXNjcmliZXMgdGhlIGJlaGF2aW9yIG9mIHRoZSBhbGVydCAoQ1JJVElDQUwsIFdBUk5JTkcsIElORk8pLicpLFxuICAgICAgb3B0aW9uKCdlbnRpdHlfZGlzcGxheV9uYW1lJywgJ0VudGl0eSBkaXNwbGF5IG5hbWUnLCAnQ29udGFpbnMgc3VtbWFyeSBvZiB0aGUgYWxlcnRlZCBwcm9ibGVtLicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInZpY3Rvcm9wcy5kZWZhdWx0LmVudGl0eV9kaXNwbGF5X25hbWVcIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdzdGF0ZV9tZXNzYWdlJywgJ1N0YXRlIG1lc3NhZ2UnLCAnQ29udGFpbnMgbG9uZyBleHBsYW5hdGlvbiBvZiB0aGUgYWxlcnRlZCBwcm9ibGVtLicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInZpY3Rvcm9wcy5kZWZhdWx0LnN0YXRlX21lc3NhZ2VcIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdtb25pdG9yaW5nX3Rvb2wnLCAnTW9uaXRvcmluZyB0b29sJywgJ1RoZSBtb25pdG9yaW5nIHRvb2wgdGhlIHN0YXRlIG1lc3NhZ2UgaXMgZnJvbS4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJ2aWN0b3JvcHMuZGVmYXVsdC5tb25pdG9yaW5nX3Rvb2xcIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgaHR0cENvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1dlYmhvb2snLFxuICAgIGRlc2NyaXB0aW9uOiAnU2VuZCBub3RpZmljYXRpb25zIHRvIGEgd2ViaG9vaycsXG4gICAgdHlwZTogJ3dlYmhvb2snLFxuICAgIGluZm86ICcnLFxuICAgIGhlYWRpbmc6ICdXZWJob29rIHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ3VybCcsICdVUkwnLCAnVGhlIGVuZHBvaW50IHRvIHNlbmQgSFRUUCBQT1NUIHJlcXVlc3RzIHRvLicsIHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdtYXhfYWxlcnRzJyxcbiAgICAgICAgJ01heCBhbGVydHMnLFxuICAgICAgICAnVGhlIG1heGltdW0gbnVtYmVyIG9mIGFsZXJ0cyB0byBpbmNsdWRlIGluIGEgc2luZ2xlIHdlYmhvb2sgbWVzc2FnZS4gQWxlcnRzIGFib3ZlIHRoaXMgdGhyZXNob2xkIGFyZSB0cnVuY2F0ZWQuIFdoZW4gbGVhdmluZyB0aGlzIGF0IGl0cyBkZWZhdWx0IHZhbHVlIG9mIDAsIGFsbCBhbGVydHMgYXJlIGluY2x1ZGVkLicsXG4gICAgICAgIHsgcGxhY2Vob2xkZXI6ICcwJywgdmFsaWRhdGlvblJ1bGU6ICcoXlxcXFxkKyR8XiQpJyB9XG4gICAgICApLFxuICAgICAgaHR0cENvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGdsb2JhbENvbmZpZ09wdGlvbnM6IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25bXSA9IFtcbiAgLy8gZW1haWxcbiAgb3B0aW9uKCdzbXRwX2Zyb20nLCAnU01UUCBmcm9tJywgJ1RoZSBkZWZhdWx0IFNNVFAgRnJvbSBoZWFkZXIgZmllbGQuJyksXG4gIG9wdGlvbihcbiAgICAnc210cF9zbWFydGhvc3QnLFxuICAgICdTTVRQIHNtYXJ0aG9zdCcsXG4gICAgJ1RoZSBkZWZhdWx0IFNNVFAgc21hcnRob3N0IHVzZWQgZm9yIHNlbmRpbmcgZW1haWxzLCBpbmNsdWRpbmcgcG9ydCBudW1iZXIuIFBvcnQgbnVtYmVyIHVzdWFsbHkgaXMgMjUsIG9yIDU4NyBmb3IgU01UUCBvdmVyIFRMUyAoc29tZXRpbWVzIHJlZmVycmVkIHRvIGFzIFNUQVJUVExTKS4gRXhhbXBsZTogc210cC5leGFtcGxlLm9yZzo1ODcnXG4gICksXG4gIG9wdGlvbignc210cF9oZWxsbycsICdTTVRQIGhlbGxvJywgJ1RoZSBkZWZhdWx0IGhvc3RuYW1lIHRvIGlkZW50aWZ5IHRvIHRoZSBTTVRQIHNlcnZlci4nLCB7XG4gICAgcGxhY2Vob2xkZXI6ICdsb2NhbGhvc3QnLFxuICB9KSxcbiAgb3B0aW9uKFxuICAgICdzbXRwX2F1dGhfdXNlcm5hbWUnLFxuICAgICdTTVRQIGF1dGggdXNlcm5hbWUnLFxuICAgIFwiU01UUCBBdXRoIHVzaW5nIENSQU0tTUQ1LCBMT0dJTiBhbmQgUExBSU4uIElmIGVtcHR5LCBBbGVydG1hbmFnZXIgZG9lc24ndCBhdXRoZW50aWNhdGUgdG8gdGhlIFNNVFAgc2VydmVyLlwiXG4gICksXG4gIG9wdGlvbignc210cF9hdXRoX3Bhc3N3b3JkJywgJ1NNVFAgYXV0aCBwYXNzd29yZCcsICdTTVRQIEF1dGggdXNpbmcgTE9HSU4gYW5kIFBMQUlOLicpLFxuICBvcHRpb24oJ3NtdHBfYXV0aF9pZGVudGl0eScsICdTTVRQIGF1dGggaWRlbnRpdHknLCAnU01UUCBBdXRoIHVzaW5nIFBMQUlOLicpLFxuICBvcHRpb24oJ3NtdHBfYXV0aF9zZWNyZXQnLCAnU01UUCBhdXRoIHNlY3JldCcsICdTTVRQIEF1dGggdXNpbmcgQ1JBTS1NRDUuJyksXG4gIG9wdGlvbihcbiAgICAnc210cF9yZXF1aXJlX3RscycsXG4gICAgJ1NNVFAgcmVxdWlyZSBUTFMnLFxuICAgICdUaGUgZGVmYXVsdCBTTVRQIFRMUyByZXF1aXJlbWVudC4gTm90ZSB0aGF0IEdvIGRvZXMgbm90IHN1cHBvcnQgdW5lbmNyeXB0ZWQgY29ubmVjdGlvbnMgdG8gcmVtb3RlIFNNVFAgZW5kcG9pbnRzLicsXG4gICAge1xuICAgICAgZWxlbWVudDogJ2NoZWNrYm94JyxcbiAgICB9XG4gICksXG5cbiAgLy8gc2xhY2tcbiAgb3B0aW9uKCdzbGFja19hcGlfdXJsJywgJ1NsYWNrIEFQSSBVUkwnLCAnJyksXG4gIG9wdGlvbigndmljdG9yb3BzX2FwaV9rZXknLCAnVmljdG9yT3BzIEFQSSBrZXknLCAnJyksXG4gIG9wdGlvbigndmljdG9yb3BzX2FwaV91cmwnLCAnVmljdG9yT3BzIEFQSSBVUkwnLCAnJywge1xuICAgIHBsYWNlaG9sZGVyOiAnaHR0cHM6Ly9hbGVydC52aWN0b3JvcHMuY29tL2ludGVncmF0aW9ucy9nZW5lcmljLzIwMTMxMTE0L2FsZXJ0LycsXG4gIH0pLFxuICBvcHRpb24oJ3BhZ2VyZHV0eV91cmwnLCAnUGFnZXJEdXR5IFVSTCcsICdodHRwczovL2V2ZW50cy5wYWdlcmR1dHkuY29tL3YyL2VucXVldWUnKSxcbiAgb3B0aW9uKCdvcHNnZW5pZV9hcGlfa2V5JywgJ09wc0dlbmllIEFQSSBrZXknLCAnJyksXG4gIG9wdGlvbignb3BzZ2VuaWVfYXBpX3VybCcsICdPcHNHZW5pZSBBUEkgVVJMJywgJycsIHsgcGxhY2Vob2xkZXI6ICdodHRwczovL2FwaS5vcHNnZW5pZS5jb20vJyB9KSxcbiAgb3B0aW9uKCd3ZWNoYXRfYXBpX3VybCcsICdXZUNoYXQgQVBJIFVSTCcsICcnLCB7IHBsYWNlaG9sZGVyOiAnaHR0cHM6Ly9xeWFwaS53ZWl4aW4ucXEuY29tL2NnaS1iaW4vJyB9KSxcbiAgb3B0aW9uKCd3ZWNoYXRfYXBpX3NlY3JldCcsICdXZUNoYXQgQVBJIHNlY3JldCcsICcnKSxcbiAgb3B0aW9uKCd3ZWNoYXRfYXBpX2NvcnBfaWQnLCAnV2VDaGF0IEFQSSBjb3JwIGlkJywgJycpLFxuICBodHRwQ29uZmlnT3B0aW9uLFxuICBvcHRpb24oXG4gICAgJ3Jlc29sdmVfdGltZW91dCcsXG4gICAgJ1Jlc29sdmUgdGltZW91dCcsXG4gICAgJ1Jlc29sdmVUaW1lb3V0IGlzIHRoZSBkZWZhdWx0IHZhbHVlIHVzZWQgYnkgYWxlcnRtYW5hZ2VyIGlmIHRoZSBhbGVydCBkb2VzIG5vdCBpbmNsdWRlIEVuZHNBdCwgYWZ0ZXIgdGhpcyB0aW1lIHBhc3NlcyBpdCBjYW4gZGVjbGFyZSB0aGUgYWxlcnQgYXMgcmVzb2x2ZWQgaWYgaXQgaGFzIG5vdCBiZWVuIHVwZGF0ZWQuIFRoaXMgaGFzIG5vIGltcGFjdCBvbiBhbGVydHMgZnJvbSBQcm9tZXRoZXVzLCBhcyB0aGV5IGFsd2F5cyBpbmNsdWRlIEVuZHNBdC4nLFxuICAgIHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnNW0nLFxuICAgIH1cbiAgKSxcbl07XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcbiAgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnLFxuICBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnLFxuICBSZWNlaXZlcixcbiAgUm91dGUsXG59IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IENsb3VkTm90aWZpZXJUeXBlLCBOb3RpZmllckRUTywgTm90aWZpZXJUeXBlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHtcbiAgQ2xvdWRDaGFubmVsQ29uZmlnLFxuICBDbG91ZENoYW5uZWxNYXAsXG4gIENsb3VkQ2hhbm5lbFZhbHVlcyxcbiAgR3JhZmFuYUNoYW5uZWxNYXAsXG4gIEdyYWZhbmFDaGFubmVsVmFsdWVzLFxuICBSZWNlaXZlckZvcm1WYWx1ZXMsXG59IGZyb20gJy4uL3R5cGVzL3JlY2VpdmVyLWZvcm0nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZmFuYVJlY2VpdmVyVG9Gb3JtVmFsdWVzKFxuICByZWNlaXZlcjogUmVjZWl2ZXIsXG4gIG5vdGlmaWVyczogTm90aWZpZXJEVE9bXVxuKTogW1JlY2VpdmVyRm9ybVZhbHVlczxHcmFmYW5hQ2hhbm5lbFZhbHVlcz4sIEdyYWZhbmFDaGFubmVsTWFwXSB7XG4gIGNvbnN0IGNoYW5uZWxNYXA6IEdyYWZhbmFDaGFubmVsTWFwID0ge307XG4gIC8vIGdpdmluZyBlYWNoIGZvcm0gcmVjZWl2ZXIgaXRlbSBhIHVuaXF1ZSBpZCBzbyB3ZSBjYW4gdXNlIGl0IHRvIG1hcCBiYWNrIHRvIFwib3JpZ2luYWxcIiBpdGVtc1xuICAvLyBhcyB3ZWxsIGFzIHRvIHVzZSBhcyBga2V5YCBwcm9wLlxuICAvLyBAVE9ETyB1c2UgdWlkIG9uY2UgYmFja2VuZCBpcyBmaXhlZCB0byBwcm92aWRlIGl0LiB0aGVuIHdlIGNhbiBnZXQgcmlkIG9mIHRoZSBHcmFmYW5hQ2hhbm5lbE1hcFxuICBsZXQgaWRDb3VudGVyID0gMTtcbiAgY29uc3QgdmFsdWVzID0ge1xuICAgIG5hbWU6IHJlY2VpdmVyLm5hbWUsXG4gICAgaXRlbXM6XG4gICAgICByZWNlaXZlci5ncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncz8ubWFwKChjaGFubmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGlkQ291bnRlcisrKTtcbiAgICAgICAgY2hhbm5lbE1hcFtpZF0gPSBjaGFubmVsO1xuICAgICAgICBjb25zdCBub3RpZmllciA9IG5vdGlmaWVycy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gY2hhbm5lbC50eXBlKTtcbiAgICAgICAgcmV0dXJuIGdyYWZhbmFDaGFubmVsQ29uZmlnVG9Gb3JtQ2hhbm5lbFZhbHVlcyhpZCwgY2hhbm5lbCwgbm90aWZpZXIpO1xuICAgICAgfSkgPz8gW10sXG4gIH07XG4gIHJldHVybiBbdmFsdWVzLCBjaGFubmVsTWFwXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3VkUmVjZWl2ZXJUb0Zvcm1WYWx1ZXMoXG4gIHJlY2VpdmVyOiBSZWNlaXZlcixcbiAgbm90aWZpZXJzOiBOb3RpZmllckRUT1tdXG4pOiBbUmVjZWl2ZXJGb3JtVmFsdWVzPENsb3VkQ2hhbm5lbFZhbHVlcz4sIENsb3VkQ2hhbm5lbE1hcF0ge1xuICBjb25zdCBjaGFubmVsTWFwOiBDbG91ZENoYW5uZWxNYXAgPSB7fTtcbiAgLy8gZ2l2aW5nIGVhY2ggZm9ybSByZWNlaXZlciBpdGVtIGEgdW5pcXVlIGlkIHNvIHdlIGNhbiB1c2UgaXQgdG8gbWFwIGJhY2sgdG8gXCJvcmlnaW5hbFwiIGl0ZW1zXG4gIGxldCBpZENvdW50ZXIgPSAxO1xuICBjb25zdCBpdGVtczogQ2xvdWRDaGFubmVsVmFsdWVzW10gPSBPYmplY3QuZW50cmllcyhyZWNlaXZlcilcbiAgICAvLyBmaWx0ZXIgb3V0IG9ubHkgY29uZmlnIGl0ZW1zIHRoYXQgYXJlIHJlbGV2YW50IHRvIGNsb3VkXG4gICAgLmZpbHRlcigoW3R5cGVdKSA9PiB0eXBlLmVuZHNXaXRoKCdfY29uZmlncycpICYmIHR5cGUgIT09ICdncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncycpXG4gICAgLy8gbWFwIHByb3BlcnR5IG5hbWVzIHRvIGNsb3VkIG5vdGlmaWVyIHR5cGVzIGJ5IHJlbW92aW5nIHRoZSBgX2NvbmZpZ2Agc3VmZml4XG4gICAgLm1hcCgoW3R5cGUsIGNvbmZpZ3NdKTogW0Nsb3VkTm90aWZpZXJUeXBlLCBDbG91ZENoYW5uZWxDb25maWdbXV0gPT4gW1xuICAgICAgdHlwZS5yZXBsYWNlKCdfY29uZmlncycsICcnKSBhcyBDbG91ZE5vdGlmaWVyVHlwZSxcbiAgICAgIGNvbmZpZ3MgYXMgQ2xvdWRDaGFubmVsQ29uZmlnW10sXG4gICAgXSlcbiAgICAvLyBjb252ZXJ0IGNoYW5uZWwgY29uZmlncyB0byBmb3JtIHZhbHVlc1xuICAgIC5tYXAoKFt0eXBlLCBjb25maWdzXSkgPT5cbiAgICAgIGNvbmZpZ3MubWFwKChjb25maWcpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBTdHJpbmcoaWRDb3VudGVyKyspO1xuICAgICAgICBjaGFubmVsTWFwW2lkXSA9IHsgdHlwZSwgY29uZmlnIH07XG4gICAgICAgIGNvbnN0IG5vdGlmaWVyID0gbm90aWZpZXJzLmZpbmQoKG5vdGlmaWVyKSA9PiBub3RpZmllci50eXBlID09PSB0eXBlKTtcbiAgICAgICAgaWYgKCFub3RpZmllcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5rbm93biBjbG91ZCBub3RpZmllcjogJHt0eXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG91ZENoYW5uZWxDb25maWdUb0Zvcm1DaGFubmVsVmFsdWVzKGlkLCB0eXBlLCBjb25maWcpO1xuICAgICAgfSlcbiAgICApXG4gICAgLmZsYXQoKTtcbiAgY29uc3QgdmFsdWVzID0ge1xuICAgIG5hbWU6IHJlY2VpdmVyLm5hbWUsXG4gICAgaXRlbXMsXG4gIH07XG4gIHJldHVybiBbdmFsdWVzLCBjaGFubmVsTWFwXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1WYWx1ZXNUb0dyYWZhbmFSZWNlaXZlcihcbiAgdmFsdWVzOiBSZWNlaXZlckZvcm1WYWx1ZXM8R3JhZmFuYUNoYW5uZWxWYWx1ZXM+LFxuICBjaGFubmVsTWFwOiBHcmFmYW5hQ2hhbm5lbE1hcCxcbiAgZGVmYXVsdENoYW5uZWxWYWx1ZXM6IEdyYWZhbmFDaGFubmVsVmFsdWVzXG4pOiBSZWNlaXZlciB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gICAgZ3JhZmFuYV9tYW5hZ2VkX3JlY2VpdmVyX2NvbmZpZ3M6ICh2YWx1ZXMuaXRlbXMgPz8gW10pLm1hcCgoY2hhbm5lbFZhbHVlcykgPT4ge1xuICAgICAgY29uc3QgZXhpc3Rpbmc6IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcgfCB1bmRlZmluZWQgPSBjaGFubmVsTWFwW2NoYW5uZWxWYWx1ZXMuX19pZF07XG4gICAgICByZXR1cm4gZm9ybUNoYW5uZWxWYWx1ZXNUb0dyYWZhbmFDaGFubmVsQ29uZmlnKGNoYW5uZWxWYWx1ZXMsIGRlZmF1bHRDaGFubmVsVmFsdWVzLCB2YWx1ZXMubmFtZSwgZXhpc3RpbmcpO1xuICAgIH0pLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybVZhbHVlc1RvQ2xvdWRSZWNlaXZlcihcbiAgdmFsdWVzOiBSZWNlaXZlckZvcm1WYWx1ZXM8Q2xvdWRDaGFubmVsVmFsdWVzPixcbiAgZGVmYXVsdHM6IENsb3VkQ2hhbm5lbFZhbHVlc1xuKTogUmVjZWl2ZXIge1xuICBjb25zdCByZWN2OiBSZWNlaXZlciA9IHtcbiAgICBuYW1lOiB2YWx1ZXMubmFtZSxcbiAgfTtcbiAgdmFsdWVzLml0ZW1zLmZvckVhY2goKHsgX19pZCwgdHlwZSwgc2V0dGluZ3MsIHNlbmRSZXNvbHZlZCB9KSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbCA9IG9taXRFbXB0eVZhbHVlcyh7XG4gICAgICAuLi5zZXR0aW5ncyxcbiAgICAgIHNlbmRfcmVzb2x2ZWQ6IHNlbmRSZXNvbHZlZCA/PyBkZWZhdWx0cy5zZW5kUmVzb2x2ZWQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb25maWdzS2V5ID0gYCR7dHlwZX1fY29uZmlnc2A7XG4gICAgaWYgKCFyZWN2W2NvbmZpZ3NLZXldKSB7XG4gICAgICByZWN2W2NvbmZpZ3NLZXldID0gW2NoYW5uZWxdO1xuICAgIH0gZWxzZSB7XG4gICAgICAocmVjdltjb25maWdzS2V5XSBhcyB1bmtub3duW10pLnB1c2goY2hhbm5lbCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlY3Y7XG59XG5cbi8vIHdpbGwgYWRkIG5ldyByZWNlaXZlciwgb3IgcmVwbGFjZSBleGlzaXRuZyBvbmVcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb25maWdXaXRoUmVjZWl2ZXIoXG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnLFxuICByZWNlaXZlcjogUmVjZWl2ZXIsXG4gIHJlcGxhY2VSZWNlaXZlck5hbWU/OiBzdHJpbmdcbik6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB7XG4gIGNvbnN0IG9sZFJlY2VpdmVycyA9IGNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLnJlY2VpdmVycyA/PyBbXTtcblxuICAvLyBzYW5pdHkgY2hlY2sgdGhhdCBuYW1lIGlzIG5vdCBkdXBsaWNhdGVkXG4gIGlmIChyZWNlaXZlci5uYW1lICE9PSByZXBsYWNlUmVjZWl2ZXJOYW1lICYmICEhb2xkUmVjZWl2ZXJzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSByZWNlaXZlci5uYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRHVwbGljYXRlIHJlY2VpdmVyIG5hbWUgJHtyZWNlaXZlci5uYW1lfWApO1xuICB9XG5cbiAgLy8gc2FuaXR5IGNoZWNrIHRoYXQgZXhpc3RpbmcgcmVjZWl2ZXIgZXhpc3RzXG4gIGlmIChyZXBsYWNlUmVjZWl2ZXJOYW1lICYmICFvbGRSZWNlaXZlcnMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IHJlcGxhY2VSZWNlaXZlck5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCByZWNlaXZlciAke3JlcGxhY2VSZWNlaXZlck5hbWV9IHRvIGV4aXN0LCBidXQgZGlkIG5vdCBmaW5kIGl0IGluIHRoZSBjb25maWdgKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZWQ6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyA9IHtcbiAgICAuLi5jb25maWcsXG4gICAgYWxlcnRtYW5hZ2VyX2NvbmZpZzoge1xuICAgICAgLy8gQHRvZG8gcmVuYW1lIHJlY2VpdmVyIG9uIHJvdXRlcyBhcyBuZWNlc3NhcnlcbiAgICAgIC4uLmNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLFxuICAgICAgcmVjZWl2ZXJzOiByZXBsYWNlUmVjZWl2ZXJOYW1lXG4gICAgICAgID8gb2xkUmVjZWl2ZXJzLm1hcCgoZXhpc3RpbmdSZWNlaXZlcikgPT5cbiAgICAgICAgICAgIGV4aXN0aW5nUmVjZWl2ZXIubmFtZSA9PT0gcmVwbGFjZVJlY2VpdmVyTmFtZSA/IHJlY2VpdmVyIDogZXhpc3RpbmdSZWNlaXZlclxuICAgICAgICAgIClcbiAgICAgICAgOiBbLi4ub2xkUmVjZWl2ZXJzLCByZWNlaXZlcl0sXG4gICAgfSxcbiAgfTtcblxuICAvLyBpZiByZWNlaXZlciB3YXMgcmVuYW1lZCwgcmVuYW1lIGl0IGluIHJvdXRlcyBhcyB3ZWxsXG4gIGlmICh1cGRhdGVkLmFsZXJ0bWFuYWdlcl9jb25maWcucm91dGUgJiYgcmVwbGFjZVJlY2VpdmVyTmFtZSAmJiByZWNlaXZlci5uYW1lICE9PSByZXBsYWNlUmVjZWl2ZXJOYW1lKSB7XG4gICAgdXBkYXRlZC5hbGVydG1hbmFnZXJfY29uZmlnLnJvdXRlID0gcmVuYW1lUmVjZWl2ZXJJblJvdXRlKFxuICAgICAgdXBkYXRlZC5hbGVydG1hbmFnZXJfY29uZmlnLnJvdXRlLFxuICAgICAgcmVwbGFjZVJlY2VpdmVyTmFtZSxcbiAgICAgIHJlY2VpdmVyLm5hbWVcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbmFtZVJlY2VpdmVySW5Sb3V0ZShyb3V0ZTogUm91dGUsIG9sZE5hbWU6IHN0cmluZywgbmV3TmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IHVwZGF0ZWQ6IFJvdXRlID0ge1xuICAgIC4uLnJvdXRlLFxuICB9O1xuICBpZiAodXBkYXRlZC5yZWNlaXZlciA9PT0gb2xkTmFtZSkge1xuICAgIHVwZGF0ZWQucmVjZWl2ZXIgPSBuZXdOYW1lO1xuICB9XG4gIGlmICh1cGRhdGVkLnJvdXRlcykge1xuICAgIHVwZGF0ZWQucm91dGVzID0gdXBkYXRlZC5yb3V0ZXMubWFwKChyb3V0ZSkgPT4gcmVuYW1lUmVjZWl2ZXJJblJvdXRlKHJvdXRlLCBvbGROYW1lLCBuZXdOYW1lKSk7XG4gIH1cbiAgcmV0dXJuIHVwZGF0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNsb3VkQ2hhbm5lbENvbmZpZ1RvRm9ybUNoYW5uZWxWYWx1ZXMoXG4gIGlkOiBzdHJpbmcsXG4gIHR5cGU6IENsb3VkTm90aWZpZXJUeXBlLFxuICBjaGFubmVsOiBDbG91ZENoYW5uZWxDb25maWdcbik6IENsb3VkQ2hhbm5lbFZhbHVlcyB7XG4gIHJldHVybiB7XG4gICAgX19pZDogaWQsXG4gICAgdHlwZSxcbiAgICBzZXR0aW5nczoge1xuICAgICAgLi4uY2hhbm5lbCxcbiAgICB9LFxuICAgIHNlY3VyZUZpZWxkczoge30sXG4gICAgc2VjdXJlU2V0dGluZ3M6IHt9LFxuICAgIHNlbmRSZXNvbHZlZDogY2hhbm5lbC5zZW5kX3Jlc29sdmVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBncmFmYW5hQ2hhbm5lbENvbmZpZ1RvRm9ybUNoYW5uZWxWYWx1ZXMoXG4gIGlkOiBzdHJpbmcsXG4gIGNoYW5uZWw6IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcsXG4gIG5vdGlmaWVyPzogTm90aWZpZXJEVE9cbik6IEdyYWZhbmFDaGFubmVsVmFsdWVzIHtcbiAgY29uc3QgdmFsdWVzOiBHcmFmYW5hQ2hhbm5lbFZhbHVlcyA9IHtcbiAgICBfX2lkOiBpZCxcbiAgICB0eXBlOiBjaGFubmVsLnR5cGUgYXMgTm90aWZpZXJUeXBlLFxuICAgIHByb3ZlbmFuY2U6IGNoYW5uZWwucHJvdmVuYW5jZSxcbiAgICBzZWN1cmVTZXR0aW5nczoge30sXG4gICAgc2V0dGluZ3M6IHsgLi4uY2hhbm5lbC5zZXR0aW5ncyB9LFxuICAgIHNlY3VyZUZpZWxkczogeyAuLi5jaGFubmVsLnNlY3VyZUZpZWxkcyB9LFxuICAgIGRpc2FibGVSZXNvbHZlTWVzc2FnZTogY2hhbm5lbC5kaXNhYmxlUmVzb2x2ZU1lc3NhZ2UsXG4gIH07XG5cbiAgLy8gd29yayBhcm91bmQgaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvYWxlcnRpbmctc3F1YWQvaXNzdWVzLzEwMFxuICBub3RpZmllcj8ub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBpZiAob3B0aW9uLnNlY3VyZSAmJiB2YWx1ZXMuc2V0dGluZ3Nbb3B0aW9uLnByb3BlcnR5TmFtZV0pIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZXMuc2V0dGluZ3Nbb3B0aW9uLnByb3BlcnR5TmFtZV07XG4gICAgICB2YWx1ZXMuc2VjdXJlRmllbGRzW29wdGlvbi5wcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ2hhbm5lbFZhbHVlc1RvR3JhZmFuYUNoYW5uZWxDb25maWcoXG4gIHZhbHVlczogR3JhZmFuYUNoYW5uZWxWYWx1ZXMsXG4gIGRlZmF1bHRzOiBHcmFmYW5hQ2hhbm5lbFZhbHVlcyxcbiAgbmFtZTogc3RyaW5nLFxuICBleGlzdGluZz86IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWdcbik6IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcge1xuICBjb25zdCBjaGFubmVsOiBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnID0ge1xuICAgIHNldHRpbmdzOiBvbWl0RW1wdHlWYWx1ZXMoe1xuICAgICAgLi4uKGV4aXN0aW5nICYmIGV4aXN0aW5nLnR5cGUgPT09IHZhbHVlcy50eXBlID8gZXhpc3Rpbmcuc2V0dGluZ3MgPz8ge30gOiB7fSksXG4gICAgICAuLi4odmFsdWVzLnNldHRpbmdzID8/IHt9KSxcbiAgICB9KSxcbiAgICBzZWN1cmVTZXR0aW5nczogdmFsdWVzLnNlY3VyZVNldHRpbmdzID8/IHt9LFxuICAgIHR5cGU6IHZhbHVlcy50eXBlLFxuICAgIG5hbWUsXG4gICAgZGlzYWJsZVJlc29sdmVNZXNzYWdlOlxuICAgICAgdmFsdWVzLmRpc2FibGVSZXNvbHZlTWVzc2FnZSA/PyBleGlzdGluZz8uZGlzYWJsZVJlc29sdmVNZXNzYWdlID8/IGRlZmF1bHRzLmRpc2FibGVSZXNvbHZlTWVzc2FnZSxcbiAgfTtcbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgY2hhbm5lbC51aWQgPSBleGlzdGluZy51aWQ7XG4gIH1cbiAgcmV0dXJuIGNoYW5uZWw7XG59XG5cbi8vIHdpbGwgcmVtb3ZlIHByb3BlcnRpZXMgdGhhdCBoYXZlIGVtcHR5ICgnJywgbnVsbCwgdW5kZWZpbmVkKSBvYmplY3QgcHJvcGVydGllcy5cbi8vIHRyYXZlcnNlcyBuZXN0ZWQgb2JqZWN0cyBhbmQgYXJyYXlzIGFzIHdlbGwuIGluIHBsYWNlLCBtdXRhdGVzIHRoZSBvYmplY3QuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGZvcm0gd2lsbCBzdWJtaXQgZW1wdHkgc3RyaW5nIGZvciBub3QgZmlsbGVkIGluIGZpZWxkcyxcbi8vIGJ1dCBmb3IgY2xvdWQgYWxlcnRtYW5hZ2VyIHJlY2VpdmVyIGNvbmZpZyB0byB1c2UgZ2xvYmFsIGRlZmF1bHQgdmFsdWUgdGhlIHByb3BlcnR5IG11c3QgYmUgb21pdHRlZCBlbnRpcmVseVxuLy8gdGhpcyBpc24ndCBhIHBlcmZlY3Qgc29sdXRpb24gdGhvdWdoLiBObyB3YXkgZm9yIHVzZXIgdG8gaW50ZW50aW9uYWxseSBwcm92aWRlIGFuIGVtcHR5IHN0cmluZy4gV2lsbCBuZWVkIHJldGhpbmtpbmcgbGF0ZXJcbmV4cG9ydCBmdW5jdGlvbiBvbWl0RW1wdHlWYWx1ZXM8VD4ob2JqOiBUKTogVCB7XG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICBvYmouZm9yRWFjaChvbWl0RW1wdHlWYWx1ZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkge1xuICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIChvYmogYXMgYW55KVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb21pdEVtcHR5VmFsdWVzKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuIiwiaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHJlY2VpdmVyVHlwZU5hbWVzIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvY29uc3RzJztcbmltcG9ydCB7IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcsIFJlY2VpdmVyIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgTm90aWZpZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG4vLyBleHRyYWN0IG5vdGlmaWVyIHR5cGUgbmFtZSB0byBjb3VudCBtYXAsIGVnIHsgU2xhY2s6IDEsIEVtYWlsOiAyIH1cblxudHlwZSBOb3RpZmllclR5cGVDb3VudHMgPSBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+OyAvLyBuYW1lIDogY291bnRcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3ROb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXI6IFJlY2VpdmVyLCBncmFmYW5hTm90aWZpZXJzOiBOb3RpZmllckRUT1tdKTogTm90aWZpZXJUeXBlQ291bnRzIHtcbiAgaWYgKHJlY2VpdmVyWydncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncyddKSB7XG4gICAgcmV0dXJuIGdldEdyYWZhbmFOb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXIuZ3JhZmFuYV9tYW5hZ2VkX3JlY2VpdmVyX2NvbmZpZ3MgPz8gW10sIGdyYWZhbmFOb3RpZmllcnMpO1xuICB9XG4gIHJldHVybiBnZXRDb3J0ZXhBbGVydE1hbmFnZXJOb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRDb3J0ZXhBbGVydE1hbmFnZXJOb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXI6IFJlY2VpdmVyKTogTm90aWZpZXJUeXBlQ291bnRzIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHJlY2VpdmVyKVxuICAgIC5maWx0ZXIoKFtrZXldKSA9PiBrZXkgIT09ICdncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncycgJiYga2V5LmVuZHNXaXRoKCdfY29uZmlncycpKSAvLyBmaWx0ZXIgb3V0IG9ubHkgcHJvcGVydGllcyB0aGF0IGFyZSBhbGVydG1hbmFnZXIgbm90aWZpZXJcbiAgICAuZmlsdGVyKChbXywgdmFsdWVdKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhIXZhbHVlLmxlbmd0aCkgLy8gY2hlY2sgdGhhdCB0aGVyZSBhcmUgYWN0dWFsbHkgbm90aWZpZXJzIG9mIHRoaXMgdHlwZSBjb25maWd1cmVkXG4gICAgLnJlZHVjZTxOb3RpZmllclR5cGVDb3VudHM+KChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGtleS5yZXBsYWNlKCdfY29uZmlncycsICcnKTsgLy8gcmVtb3ZlIHRoZSBgX2NvbmZpZ2AgcGFydCBmcm9tIHRoZSBrZXksIG1ha2luZyBpdCBpbnR0byBhIG5vdGlmaWVyIG5hbWVcbiAgICAgIGNvbnN0IG5hbWUgPSByZWNlaXZlclR5cGVOYW1lc1t0eXBlXSA/PyBjYXBpdGFsaXplKHR5cGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBbbmFtZV06IChhY2NbbmFtZV0gPz8gMCkgKyAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5sZW5ndGggOiAxKSxcbiAgICAgIH07XG4gICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBnZXRHcmFmYW5hTm90aWZpZXJUeXBlQ291bnRzKFxuICBjb25maWdzOiBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnW10sXG4gIGdyYWZhbmFOb3RpZmllcnM6IE5vdGlmaWVyRFRPW11cbik6IE5vdGlmaWVyVHlwZUNvdW50cyB7XG4gIHJldHVybiBjb25maWdzXG4gICAgLm1hcCgocmVjdikgPT4gcmVjdi50eXBlKSAvLyBleHRyYWN0IHR5cGVzIGZyb20gY29uZmlnXG4gICAgLm1hcCgodHlwZSkgPT4gZ3JhZmFuYU5vdGlmaWVycy5maW5kKChyKSA9PiByLnR5cGUgPT09IHR5cGUpPy5uYW1lID8/IGNhcGl0YWxpemUodHlwZSkpIC8vIGdldCByZWFkYWJsZSBuYW1lIGZyb20gbm90aWZpZXIgY29mbmlnLCBvciBpZiBub3QgYXZhaWxhYmxlLCBqdXN0IGNhcGl0YWxpemVcbiAgICAucmVkdWNlPE5vdGlmaWVyVHlwZUNvdW50cz4oXG4gICAgICAoYWNjLCB0eXBlKSA9PiAoe1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFt0eXBlXTogKGFjY1t0eXBlXSA/PyAwKSArIDEsXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbnN1cmVEZWZpbmUodGVtcGxhdGVOYW1lOiBzdHJpbmcsIHRlbXBsYXRlQ29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gbm90aWZpY2F0aW9uIHRlbXBsYXRlIGNvbnRlbnQgbXVzdCBiZSB3cmFwcGVkIGluIHt7IGRlZmluZSBcIm5hbWVcIiB9fSB0YWcsXG4gIC8vIGJ1dCB0aGlzIGlzIG5vdCBvYnZpb3VzIGJlY2F1c2UgdXNlciBhbHNvIGhhcyB0byBwcm92aWRlIG5hbWUgc2VwYXJhdGVseSBpbiB0aGUgZm9ybS5cbiAgLy8gc28gaWYgdXNlciBkb2VzIG5vdCBtYW51YWxseSBhZGQge3sgZGVmaW5lIH19IHRhZywgd2UgZG8gaXQgYXV0b21hdGljYWxseVxuICBsZXQgY29udGVudCA9IHRlbXBsYXRlQ29udGVudC50cmltKCk7XG4gIGlmICghY29udGVudC5tYXRjaCgvXFx7XFx7XFxzKmRlZmluZS8pKSB7XG4gICAgY29uc3QgaW5kZW50ZWRDb250ZW50ID0gY29udGVudFxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLm1hcCgobGluZSkgPT4gJyAgJyArIGxpbmUpXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgY29udGVudCA9IGB7eyBkZWZpbmUgXCIke3RlbXBsYXRlTmFtZX1cIiB9fVxcbiR7aW5kZW50ZWRDb250ZW50fVxcbnt7IGVuZCB9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJleHBvcnQgY29uc3QgcmVjZWl2ZXJUeXBlTmFtZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHBhZ2VyZHV0eTogJ1BhZ2VyRHV0eScsXG4gIHB1c2hvdmVyOiAnUHVzaG92ZXInLFxuICBzbGFjazogJ1NsYWNrJyxcbiAgb3BzZ2VuaWU6ICdPcHNHZW5pZScsXG4gIHdlYmhvb2s6ICdXZWJob29rJyxcbiAgdmljdG9yb3BzOiAnVmljdG9yT3BzJyxcbiAgd2VjaGF0OiAnV2VDaGF0Jyxcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwidXNlQ2xlYW51cCIsInN0YXRlU2VsZWN0b3IiLCJkaXNwYXRjaCIsInNlbGVjdG9yUmVmIiwiY3VycmVudCIsInVzZVNlbGVjdG9yIiwiZ2V0TmF2TW9kZWwiLCJ1c2VOYXZNb2RlbCIsImlkIiwibmF2SW5kZXgiLCJzdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VBc3luY0ZuIiwiZ2V0QmFja2VuZFNydiIsIkhvcml6b250YWxHcm91cCIsIkJ1dHRvbiIsIkxpbmtCdXR0b24iLCJFbXB0eUxpc3RDVEEiLCJQYWdlIiwiYXBwRXZlbnRzIiwiU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IiwiTm90aWZpY2F0aW9uc0xpc3RQYWdlIiwibmF2TW9kZWwiLCJub3RpZmljYXRpb25zIiwic2V0Tm90aWZpY2F0aW9ucyIsImdldE5vdGlmaWNhdGlvbnMiLCJnZXQiLCJmZXRjaE5vdGlmaWNhdGlvbnMiLCJ0aGVuIiwicmVzIiwiZGVsZXRlTm90aWZpY2F0aW9uIiwicHVibGlzaCIsInRpdGxlIiwidGV4dCIsInRleHQyIiwiaWNvbiIsImNvbmZpcm1UZXh0IiwieWVzVGV4dCIsIm9uQ29uZmlybSIsImRlbGV0ZU5vdGlmaWNhdGlvbkNvbmZpcm1lZCIsImRlbGV0ZSIsImVycm9yIiwibGVuZ3RoIiwibWluV2lkdGgiLCJ3aWR0aCIsIm1hcCIsIm5vdGlmaWNhdGlvbiIsIm5hbWUiLCJ0eXBlIiwiaXNEZWZhdWx0IiwibG9hZGluZyIsIlJlZGlyZWN0IiwiUm91dGUiLCJTd2l0Y2giLCJ1c2VMb2NhdGlvbiIsIkFsZXJ0IiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwid2l0aEVycm9yQm91bmRhcnkiLCJBbGVydE1hbmFnZXJQaWNrZXIiLCJBbGVydGluZ1BhZ2VXcmFwcGVyIiwiTm9BbGVydE1hbmFnZXJXYXJuaW5nIiwiRWRpdFJlY2VpdmVyVmlldyIsIkVkaXRUZW1wbGF0ZVZpZXciLCJHbG9iYWxDb25maWdGb3JtIiwiTmV3UmVjZWl2ZXJWaWV3IiwiTmV3VGVtcGxhdGVWaWV3IiwiUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldyIsInVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJ1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsImZldGNoR3JhZmFuYU5vdGlmaWVyc0FjdGlvbiIsIkdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUiLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJSZWNlaXZlcnMiLCJhbGVydE1hbmFnZXJzIiwiYWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJsb2NhdGlvbiIsImlzUm9vdCIsInBhdGhuYW1lIiwiZW5kc1dpdGgiLCJjb25maWdSZXF1ZXN0cyIsImFtQ29uZmlncyIsInJlc3VsdCIsImNvbmZpZyIsInJlY2VpdmVyVHlwZXMiLCJncmFmYW5hTm90aWZpZXJzIiwic2hvdWxkTG9hZENvbmZpZyIsImRpc2FibGVBbVNlbGVjdCIsIm1lc3NhZ2UiLCJtYXRjaCIsInBhcmFtcyIsImRlY29kZVVSSUNvbXBvbmVudCIsInN0eWxlIiwiY2hpbGRyZW4iLCJwYWdlSWQiLCJpc0xvYWRpbmciLCJjb250ZXh0U3J2IiwiQXV0aG9yaXplIiwiYWN0aW9ucyIsImZhbGxiYWNrIiwic29tZSIsImFjdGlvbiIsImhhc0FjY2VzcyIsIk5vQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSIsIk90aGVyQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSIsImF2YWlsYWJsZUFsZXJ0TWFuYWdlcnMiLCJfIiwiaGFzT3RoZXJBTXMiLCJCYWRnZSIsIlByb3Zpc2lvbmVkUmVzb3VyY2UiLCJQcm92aXNpb25pbmdBbGVydCIsInJlc291cmNlIiwiUHJvdmlzaW9uaW5nQmFkZ2UiLCJDbG91ZFJlY2VpdmVyRm9ybSIsIkdyYWZhbmFSZWNlaXZlckZvcm0iLCJyZWNlaXZlck5hbWUiLCJyZWNlaXZlciIsImFsZXJ0bWFuYWdlcl9jb25maWciLCJyZWNlaXZlcnMiLCJmaW5kIiwiSW5mb0JveCIsIlRlbXBsYXRlRm9ybSIsInRlbXBsYXRlTmFtZSIsInRlbXBsYXRlIiwidGVtcGxhdGVfZmlsZXMiLCJwcm92ZW5hbmNlIiwidGVtcGxhdGVfZmlsZV9wcm92ZW5hbmNlcyIsImNvbnRlbnQiLCJjc3MiLCJ1c2VGb3JtIiwiRm9ybVByb3ZpZGVyIiwidXNlU3R5bGVzMiIsInVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsImdsb2JhbENvbmZpZ09wdGlvbnMiLCJpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSIsIm1ha2VBTUxpbmsiLCJvbWl0RW1wdHlWYWx1ZXMiLCJPcHRpb25GaWVsZCIsImRlZmF1bHRWYWx1ZXMiLCJzbXRwX3JlcXVpcmVfdGxzIiwidW5pZmllZEFsZXJ0aW5nIiwic2F2ZUFNQ29uZmlnIiwicmVhZE9ubHkiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJmb3JtQVBJIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZ2xvYmFsIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwib25TdWJtaXRDYWxsYmFjayIsInZhbHVlcyIsIm5ld0NvbmZpZyIsIm9sZENvbmZpZyIsInN1Y2Nlc3NNZXNzYWdlIiwicmVkaXJlY3RQYXRoIiwiaGVhZGluZyIsIlN0cmluZyIsIm9wdGlvbiIsInByb3BlcnR5TmFtZSIsInRoZW1lIiwic3BhY2luZyIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJSZWNlaXZlcnNUYWJsZSIsIlRlbXBsYXRlc1RhYmxlIiwiYWxlcnRNYW5hZ2VyTmFtZSIsImlzQ2xvdWQiLCJpc1ZhbmlsbGFBTSIsIkFsZXJ0aW5nTm90aWZpY2F0aW9uc0V4dGVybmFsV3JpdGUiLCJzZWN0aW9uIiwiY3giLCJMaW5rIiwiUmVjZWl2ZXJzU2VjdGlvbiIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiYWRkQnV0dG9uTGFiZWwiLCJhZGRCdXR0b25UbyIsInNob3dCdXR0b24iLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJ1c2VNZW1vIiwiQ29uZmlybU1vZGFsIiwiTW9kYWwiLCJkZWxldGVSZWNlaXZlckFjdGlvbiIsImdldEFsZXJ0VGFibGVTdHlsZXMiLCJnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMiLCJpc1JlY2VpdmVyVXNlZCIsImV4dHJhY3ROb3RpZmllclR5cGVDb3VudHMiLCJBY3Rpb25JY29uIiwidGFibGVTdHlsZXMiLCJwZXJtaXNzaW9ucyIsInJlY2VpdmVyVG9EZWxldGUiLCJzZXRSZWNlaXZlclRvRGVsZXRlIiwic2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWwiLCJzZXRTaG93Q2Fubm90RGVsZXRlUmVjZWl2ZXJNb2RhbCIsIm9uQ2xpY2tEZWxldGVSZWNlaXZlciIsImRlbGV0ZVJlY2VpdmVyIiwidW5kZWZpbmVkIiwicm93cyIsInR5cGVzIiwiT2JqZWN0IiwiZW50cmllcyIsImNvdW50IiwicHJvdmlzaW9uZWQiLCJncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncyIsImhhc1Blcm1pc3Npb24iLCJjcmVhdGUiLCJ0YWJsZSIsInVwZGF0ZSIsImV2ZW5Sb3ciLCJpZHgiLCJqb2luIiwiYWN0aW9uc0NlbGwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJGaWVsZCIsIkZpZWxkU2V0IiwiSW5wdXQiLCJUZXh0QXJlYSIsImVuc3VyZURlZmluZSIsImRlZmF1bHRzIiwiZnJlZXplIiwiZXhpc3RpbmciLCJzdWJtaXQiLCJ0ZW1wbGF0ZXMiLCJmaWx0ZXIiLCJyZWdpc3RlciIsIm1vZGUiLCJ2YWxpZGF0ZU5hbWVJc1VuaXF1ZSIsImRhdGEiLCJUZW1wbGF0ZSIsIkJvb2xlYW4iLCJyZXF1aXJlZCIsInZhbHVlIiwidmFsaWRhdGUiLCJuYW1lSXNVbmlxdWUiLCJleHRlcm5hbExpbmsiLCJ0ZXh0YXJlYSIsImJ1dHRvbnMiLCJGcmFnbWVudCIsImRlbGV0ZVRlbXBsYXRlQWN0aW9uIiwiQ29sbGFwc2VUb2dnbGUiLCJEZXRhaWxzRmllbGQiLCJleHBhbmRlZFRlbXBsYXRlcyIsInNldEV4cGFuZGVkVGVtcGxhdGVzIiwidGVtcGxhdGVSb3dzIiwidGVtcGxhdGVUb0RlbGV0ZSIsInNldFRlbXBsYXRlVG9EZWxldGUiLCJkZWxldGVUZW1wbGF0ZSIsImNvbEV4cGFuZCIsImlzRXhwYW5kZWQiLCJ1c2VGb3JtQ29udGV4dCIsIkNoYW5uZWxPcHRpb25zIiwic2VsZWN0ZWRDaGFubmVsT3B0aW9ucyIsIm9uUmVzZXRTZWN1cmVGaWVsZCIsInNlY3VyZUZpZWxkcyIsInBhdGhQcmVmaXgiLCJ3YXRjaCIsImN1cnJlbnRGb3JtVmFsdWVzIiwiaW5kZXgiLCJrZXkiLCJsYWJlbCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJzaG93V2hlbiIsImZpZWxkIiwiaXMiLCJzZWN1cmUiLCJzZWN1cmVTZXR0aW5ncyIsInNldHRpbmdzIiwiZGVmYXVsdFZhbHVlIiwiSW5wdXRDb250cm9sIiwiU2VsZWN0IiwiQ29sbGFwc2libGVTZWN0aW9uIiwiQ2hhbm5lbFN1YkZvcm0iLCJvbkR1cGxpY2F0ZSIsIm9uRGVsZXRlIiwib25UZXN0Iiwibm90aWZpZXJzIiwiY29tbW9uU2V0dGluZ3NDb21wb25lbnQiLCJDb21tb25TZXR0aW5nc0NvbXBvbmVudCIsImZpZWxkTmFtZSIsImNvbnRyb2wiLCJ0cmlnZ2VyIiwic2V0VmFsdWUiLCJzZWxlY3RlZFR5cGUiLCJ0ZXN0aW5nUmVjZWl2ZXIiLCJ0ZXN0UmVjZWl2ZXJzIiwiX3NlY3VyZUZpZWxkcyIsInNldFNlY3VyZUZpZWxkcyIsInVwZGF0ZWRTZWN1cmVGaWVsZHMiLCJ0eXBlT3B0aW9ucyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJoYW5kbGVUZXN0IiwiaXNWYWxpZCIsImtleXMiLCJub3RpZmllciIsIm1hbmRhdG9yeU9wdGlvbnMiLCJvcHRpb25zIiwibyIsIm9wdGlvbmFsT3B0aW9ucyIsImNvbnRhY3RQb2ludFR5cGVJbnB1dElkIiwid3JhcHBlciIsInRvcFJvdyIsIm9uQ2hhbmdlIiwiaW5uZXJDb250ZW50IiwiaW5mbyIsImJvcmRlciIsIm1lZGl1bSIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiYnJlYWtwb2ludHMiLCJ4bCIsInVuaXQiLCJjaGFubmVsU2V0dGluZ3NIZWFkZXIiLCJDaGVja2JveCIsIkNsb3VkQ29tbW9uQ2hhbm5lbFNldHRpbmdzIiwiY2xvdWROb3RpZmllclR5cGVzIiwiY2xvdWRSZWNlaXZlclRvRm9ybVZhbHVlcyIsImZvcm1WYWx1ZXNUb0Nsb3VkUmVjZWl2ZXIiLCJ1cGRhdGVDb25maWdXaXRoUmVjZWl2ZXIiLCJSZWNlaXZlckZvcm0iLCJkZWZhdWx0Q2hhbm5lbFZhbHVlcyIsIl9faWQiLCJzZW5kUmVzb2x2ZWQiLCJleGlzdGluZ1ZhbHVlIiwib25TdWJtaXQiLCJuZXdSZWNlaXZlciIsInRha2VuUmVjZWl2ZXJOYW1lcyIsInNpemUiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwidG9nZ2xlQ29sbGFwc2UiLCJjYXJldCIsImhpZGRlbiIsInR5cG9ncmFwaHkiLCJzbSIsImZvbnRXZWlnaHRSZWd1bGFyIiwiR3JhZmFuYUNvbW1vbkNoYW5uZWxTZXR0aW5ncyIsInRlc3RSZWNlaXZlcnNBY3Rpb24iLCJmb3JtQ2hhbm5lbFZhbHVlc1RvR3JhZmFuYUNoYW5uZWxDb25maWciLCJmb3JtVmFsdWVzVG9HcmFmYW5hUmVjZWl2ZXIiLCJncmFmYW5hUmVjZWl2ZXJUb0Zvcm1WYWx1ZXMiLCJUZXN0Q29udGFjdFBvaW50TW9kYWwiLCJkaXNhYmxlUmVzb2x2ZU1lc3NhZ2UiLCJ0ZXN0Q2hhbm5lbFZhbHVlcyIsInNldFRlc3RDaGFubmVsVmFsdWVzIiwiaWQyb3JpZ2luYWwiLCJvblRlc3RDaGFubmVsIiwidGVzdE5vdGlmaWNhdGlvbiIsImFsZXJ0IiwiY2hhbiIsInBheWxvYWQiLCJoYXNQcm92aXNpb25lZEl0ZW1zIiwiaXRlbSIsIkNvbnRhY3RQb2ludCIsInVzZUNhbGxiYWNrIiwidXNlQXBwTm90aWZpY2F0aW9uIiwidXNlQ29udHJvbGxlZEZpZWxkQXJyYXkiLCJEZWxldGVkU3ViRm9ybSIsImluaXRpYWxWYWx1ZXMiLCJkZWZhdWx0SXRlbSIsIm5vdGlmeUFwcCIsIml0ZW1zIiwiTWF0aCIsInJhbmRvbSIsImdldFZhbHVlcyIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsInNvZnREZWxldGUiLCJ2YWxpZGF0ZU5hbWVJc0F2YWlsYWJsZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic3VibWl0Q2FsbGJhY2siLCJfX2RlbGV0ZWQiLCJvbkludmFsaWQiLCJyb3V0ZSIsIm5hbWVJc0F2YWlsYWJsZSIsImluaXRpYWxJdGVtIiwiY3VycmVudFZhbHVlcyIsIkxhYmVsIiwiUmFkaW9CdXR0b25Hcm91cCIsIkFubm90YXRpb25zRmllbGQiLCJMYWJlbHNGaWVsZCIsIk5vdGlmaWNhdGlvblR5cGUiLCJub3RpZmljYXRpb25PcHRpb25zIiwiYW5ub3RhdGlvbnMiLCJsYWJlbHMiLCJpc09wZW4iLCJvbkRpc21pc3MiLCJub3RpZmljYXRpb25UeXBlIiwic2V0Tm90aWZpY2F0aW9uVHlwZSIsInByZWRlZmluZWQiLCJmb3JtTWV0aG9kcyIsImN1c3RvbSIsInJlZHVjZSIsImFjYyIsImZsZXhSb3ciLCJLZXlWYWx1ZU1hcElucHV0IiwicGFpcnMiLCJzZXRQYWlycyIsInJlY29yZFRvUGFpcnMiLCJlbWl0Q2hhbmdlIiwicGFpcnNUb1JlY29yZCIsImRlbGV0ZUl0ZW0iLCJuZXdQYWlycyIsInNsaWNlIiwicmVtb3ZlZCIsInNwbGljZSIsInVwZGF0ZVBhaXIiLCJvbGQiLCJwYWlyIiwiaSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiYWRkQnV0dG9uIiwicmVjb3JkIiwib2JqIiwiaXNFbXB0eSIsIlN0cmluZ0FycmF5SW5wdXQiLCJTdWJmb3JtQXJyYXlGaWVsZCIsIlN1YmZvcm1GaWVsZCIsImludmFsaWQiLCJwYXRoU3VmZml4Iiwib3B0aW9uUGF0aCIsImVsZW1lbnQiLCJPcHRpb25JbnB1dCIsInBhdGhJbmRleCIsInVucmVnaXN0ZXIiLCJrZWVwVmFsdWUiLCJjaGVja2JveCIsImRldGVybWluZVJlYWRPbmx5IiwiaW5wdXRUeXBlIiwiZGV0ZXJtaW5lUmVxdWlyZWQiLCJ2IiwidmFsaWRhdGlvblJ1bGUiLCJ2YWxpZGF0ZU9wdGlvbiIsInBsYWNlaG9sZGVyIiwic2VsZWN0T3B0aW9ucyIsImNvbnNvbGUiLCJSZWdFeHAiLCJ0ZXN0IiwiZGVwZW5kc09uIiwiZGVwZW5kZW50T24iLCJuZXdWYWx1ZSIsInVwZGF0ZVZhbHVlIiwiaXRlbVZhbHVlIiwicm93IiwiZGVsZXRlSWNvbiIsImdldFJlY2VpdmVyRm9ybUZpZWxkU3R5bGVzIiwicGF0aCIsImNvbGxhcHNpYmxlU2VjdGlvbiIsIml0ZW1JbmRleCIsInN1YmZvcm1PcHRpb25zIiwiX3dhdGNoVmFsdWUiLCJzaG93Iiwic2V0U2hvdyIsInN1Yk9wdGlvbiIsIkFubm90YXRpb24iLCJhbm5vdGF0aW9uTGFiZWxzIiwiU2VsZWN0V2l0aEFkZCIsIkFubm90YXRpb25LZXlJbnB1dCIsImV4aXN0aW5nS2V5cyIsImFyaWFMYWJlbCIsInJlc3QiLCJhbm5vdGF0aW9uT3B0aW9ucyIsIkZpZWxkQXJyYXkiLCJ1c2VTdHlsZXMiLCJmbGV4Q29sdW1uIiwiaXNVcmwiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsIlZhbHVlSW5wdXRDb21wb25lbnQiLCJmbGV4Um93SXRlbU1hcmdpbiIsImFubm90YXRpb25WYWx1ZUlucHV0IiwiYWRkQW5ub3RhdGlvbnNCdXR0b24iLCJ4cyIsIklubGluZUxhYmVsIiwiY2VudGVyQWxpZ25Sb3ciLCJsYWJlbElucHV0IiwiZXF1YWxTaWduIiwiZGVsZXRlTGFiZWxCdXR0b24iLCJhZGRMYWJlbEJ1dHRvbiIsIm9uQ3VzdG9tQ2hhbmdlIiwiZGlzYWJsZWQiLCJhZGRMYWJlbCIsImlzQ3VzdG9tIiwic2V0SXNDdXN0b20iLCJfb3B0aW9ucyIsInRhcmdldCIsInZhbCIsIlRvb2x0aXAiLCJ0b29sdGlwIiwidG8iLCJvbkNsaWNrIiwidG9vbHRpcFBsYWNlbWVudCIsInVzZVF1ZXJ5UGFyYW1zIiwic3RvcmUiLCJBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSIsIkFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSIsInVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlIiwiYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc05hbWVzIiwiYW0iLCJxdWVyeVBhcmFtcyIsInVwZGF0ZVF1ZXJ5UGFyYW1zIiwiaXNBbGVydE1hbmFnZXJBdmFpbGFibGUiLCJzZXQiLCJxdWVyeVNvdXJjZSIsInN0b3JlU291cmNlIiwiZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXNCeVBlcm1pc3Npb24iLCJhY2Nlc3NUeXBlIiwiRU1QVFlfQVJSQVkiLCJyZXNldCIsInVwZGF0ZUZuIiwibmV3SXRlbXMiLCJ3ZWFrIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJiYXNpY0F1dGhPcHRpb24iLCJ0bHNDb25maWdPcHRpb24iLCJodHRwQ29uZmlnT3B0aW9uIiwiaXNBcnJheSIsImNoYW5uZWxNYXAiLCJpZENvdW50ZXIiLCJjaGFubmVsIiwiZ3JhZmFuYUNoYW5uZWxDb25maWdUb0Zvcm1DaGFubmVsVmFsdWVzIiwiY29uZmlncyIsInJlcGxhY2UiLCJFcnJvciIsImNsb3VkQ2hhbm5lbENvbmZpZ1RvRm9ybUNoYW5uZWxWYWx1ZXMiLCJmbGF0IiwiY2hhbm5lbFZhbHVlcyIsInJlY3YiLCJmb3JFYWNoIiwic2VuZF9yZXNvbHZlZCIsImNvbmZpZ3NLZXkiLCJwdXNoIiwicmVwbGFjZVJlY2VpdmVyTmFtZSIsIm9sZFJlY2VpdmVycyIsInVwZGF0ZWQiLCJleGlzdGluZ1JlY2VpdmVyIiwicmVuYW1lUmVjZWl2ZXJJblJvdXRlIiwib2xkTmFtZSIsIm5ld05hbWUiLCJyb3V0ZXMiLCJ1aWQiLCJjYXBpdGFsaXplIiwicmVjZWl2ZXJUeXBlTmFtZXMiLCJnZXRHcmFmYW5hTm90aWZpZXJUeXBlQ291bnRzIiwiZ2V0Q29ydGV4QWxlcnRNYW5hZ2VyTm90aWZpZXJUeXBlQ291bnRzIiwiQXJyYXkiLCJyIiwidGVtcGxhdGVDb250ZW50IiwiaW5kZW50ZWRDb250ZW50Iiwic3BsaXQiLCJsaW5lIiwicGFnZXJkdXR5IiwicHVzaG92ZXIiLCJzbGFjayIsIm9wc2dlbmllIiwid2ViaG9vayIsInZpY3Rvcm9wcyIsIndlY2hhdCJdLCJzb3VyY2VSb290IjoiIn0=