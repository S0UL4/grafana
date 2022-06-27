"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertRuleListIndex"],{

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

/***/ "./public/app/features/alerting/AlertHowToModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertHowToModal": () => (/* binding */ AlertHowToModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _VerticalGroup;





function AlertHowToModal({
  onDismiss
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: "Adding an Alert",
    isOpen: true,
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    children: _VerticalGroup || (_VerticalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.VerticalGroup, {
      spacing: "sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "public/img/alert_howto_new.png",
        alt: "link to how to alert image"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: "Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: "Remember to save the dashboard to persist your alert rule changes."
      })]
    }))
  });
}

/***/ }),

/***/ "./public/app/features/alerting/AlertRuleItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-highlight-words-virtual-cb0ac01bed/0/cache/react-highlight-words-npm-0.18.0-101bfefffe-ff9759e7eb.zip/node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
 // @ts-ignore






const AlertRuleItem = ({
  rule,
  search,
  onTogglePause
}) => {
  const ruleUrl = `${rule.url}?editPanel=${rule.panelId}&tab=alert`;
  const renderText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(text => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((react_highlight_words__WEBPACK_IMPORTED_MODULE_1___default()), {
    highlightClassName: "highlight-search-match",
    textToHighlight: text,
    searchWords: [search]
  }, text), [search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
      children: renderText(rule.name)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Figure, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        size: "xl",
        name: rule.stateIcon,
        className: `alert-rule-item__icon ${rule.stateClass}`
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
          className: `${rule.stateClass}`,
          children: [renderText(rule.stateText), ' ']
        }, "text"), "for ", rule.stateAge]
      }, "state"), rule.info ? renderText(rule.info) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Actions, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        icon: rule.state === 'paused' ? 'play' : 'pause',
        onClick: onTogglePause,
        children: rule.state === 'paused' ? 'Resume' : 'Pause'
      }, "play"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        variant: "secondary",
        href: ruleUrl,
        icon: "cog",
        children: "Edit alert"
      }, "edit")]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertRuleItem);

/***/ }),

/***/ "./public/app/features/alerting/AlertRuleList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertRuleListUnconnected": () => (/* binding */ AlertRuleListUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _AlertHowToModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/AlertHowToModal.tsx");
/* harmony import */ var _AlertRuleItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/AlertRuleItem.tsx");
/* harmony import */ var _components_DeprecationNotice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/components/DeprecationNotice.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _label, _div, _LinkButton, _DeprecationNotice;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'alert-list'),
    alertRules: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getAlertRuleItems)(state),
    search: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getSearchQuery)(state.alertRules),
    isLoading: state.alertRules.isLoading
  };
}

const mapDispatchToProps = {
  getAlertRulesAsync: _state_actions__WEBPACK_IMPORTED_MODULE_11__.getAlertRulesAsync,
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setSearchQuery,
  togglePauseAlertRule: _state_actions__WEBPACK_IMPORTED_MODULE_11__.togglePauseAlertRule
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class AlertRuleListUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "stateFilters", [{
      label: 'All',
      value: 'all'
    }, {
      label: 'OK',
      value: 'ok'
    }, {
      label: 'Not OK',
      value: 'not_ok'
    }, {
      label: 'Alerting',
      value: 'alerting'
    }, {
      label: 'No data',
      value: 'no_data'
    }, {
      label: 'Paused',
      value: 'paused'
    }, {
      label: 'Pending',
      value: 'pending'
    }]);

    _defineProperty(this, "onStateFilterChanged", option => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
        state: option.value
      });
    });

    _defineProperty(this, "onOpenHowTo", () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_4__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_7__.ShowModalReactEvent({
        component: _AlertHowToModal__WEBPACK_IMPORTED_MODULE_8__.AlertHowToModal
      }));
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchQuery(value);
    });

    _defineProperty(this, "onTogglePause", rule => {
      this.props.togglePauseAlertRule(rule.id, {
        paused: rule.state !== 'paused'
      });
    });

    _defineProperty(this, "alertStateFilterOption", ({
      text,
      value
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("option", {
        value: value,
        children: text
      }, value);
    });
  }

  componentDidMount() {
    this.fetchRules();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.queryParams.state !== this.props.queryParams.state) {
      this.fetchRules();
    }
  }

  async fetchRules() {
    await this.props.getAlertRulesAsync({
      state: this.getStateFilter()
    });
  }

  getStateFilter() {
    var _this$props$queryPara;

    return (_this$props$queryPara = this.props.queryParams.state) !== null && _this$props$queryPara !== void 0 ? _this$props$queryPara : 'all';
  }

  render() {
    const {
      navModel,
      alertRules,
      search,
      isLoading
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
        isLoading: isLoading,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "gf-form gf-form--grow",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FilterInput, {
              placeholder: "Search alerts",
              value: search,
              onChange: this.onSearchQueryChange
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "gf-form",
            children: [_label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("label", {
              className: "gf-form-label",
              htmlFor: "alert-state-filter",
              children: "States"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "width-13",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
                inputId: 'alert-state-filter',
                options: this.stateFilters,
                onChange: this.onStateFilterChanged,
                value: this.getStateFilter()
              })
            })]
          }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.unifiedAlertingEnabled && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            variant: "primary",
            href: "alerting/ng/new",
            children: "Add NG Alert"
          }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            onClick: this.onOpenHowTo,
            children: "How to add an alert"
          })]
        }), _DeprecationNotice || (_DeprecationNotice = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_DeprecationNotice__WEBPACK_IMPORTED_MODULE_10__.DeprecationNotice, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
          spacing: "none",
          children: alertRules.map(rule => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_AlertRuleItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              rule: rule,
              search: search,
              onTogglePause: () => this.onTogglePause(rule)
            }, rule.id);
          })
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(AlertRuleListUnconnected));

/***/ }),

/***/ "./public/app/features/alerting/components/DeprecationNotice.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeprecationNotice": () => (/* binding */ DeprecationNotice),
/* harmony export */   "LOCAL_STORAGE_KEY": () => (/* binding */ LOCAL_STORAGE_KEY)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;





const LOCAL_STORAGE_KEY = 'grafana.legacyalerting.unifiedalertingpromo';

const DeprecationNotice = () => _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  severity: "warning",
  title: "Grafana legacy alerting is going away soon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
    children: ["You are using Grafana legacy alerting, it has been deprecated and will be removed in the next major version of Grafana.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "We encourage you to upgrade to the new Grafana Alerting experience."]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
    children: ["See", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",
      children: "What\u2019s New with Grafana Alerting"
    }), ' ', "to learn more about what\u2018s new or learn", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",
      children: "how to enable the new Grafana Alerting feature"
    }), "."]
  })]
}));



/***/ }),

/***/ "./public/app/features/alerting/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotificationChannel": () => (/* binding */ createNotificationChannel),
/* harmony export */   "getAlertRulesAsync": () => (/* binding */ getAlertRulesAsync),
/* harmony export */   "loadNotificationChannel": () => (/* binding */ loadNotificationChannel),
/* harmony export */   "loadNotificationTypes": () => (/* binding */ loadNotificationTypes),
/* harmony export */   "testNotificationChannel": () => (/* binding */ testNotificationChannel),
/* harmony export */   "togglePauseAlertRule": () => (/* binding */ togglePauseAlertRule),
/* harmony export */   "updateNotificationChannel": () => (/* binding */ updateNotificationChannel)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");




function getAlertRulesAsync(options) {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.loadAlertRules)());
    const rules = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/alerts', options);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.loadedAlertRules)(rules));
  };
}
function togglePauseAlertRule(id, options) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alerts/${id}/pause`, options);
    const stateFilter = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getSearchObject().state || 'all';
    dispatch(getAlertRulesAsync({
      state: stateFilter.toString()
    }));
  };
}
function createNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alert-notifications`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification created')));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push('/alerting/notifications');
    } catch (error) {
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isFetchError)(error)) {
        dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
      }
    }
  };
}
function updateNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/alert-notifications/${data.id}`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification updated')));
    } catch (error) {
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isFetchError)(error)) {
        dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
      }
    }
  };
}
function testNotificationChannel(data) {
  return async (dispatch, getState) => {
    const channel = getState().notificationChannel.notificationChannel;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/alert-notifications/test', Object.assign({
      id: channel.id
    }, data));
  };
}
function loadNotificationTypes() {
  return async dispatch => {
    const alertNotifiers = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifiers`);
    const notificationTypes = alertNotifiers.sort((o1, o2) => {
      if (o1.name > o2.name) {
        return 1;
      }

      return -1;
    });
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.setNotificationChannels)(notificationTypes));
  };
}
function loadNotificationChannel(id) {
  return async dispatch => {
    await dispatch(loadNotificationTypes());
    const notificationChannel = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifications/${id}`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.notificationChannelLoaded)(notificationChannel));
  };
}

/***/ }),

/***/ "./public/app/features/alerting/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlertRuleItems": () => (/* binding */ getAlertRuleItems),
/* harmony export */   "getNotificationChannel": () => (/* binding */ getNotificationChannel),
/* harmony export */   "getSearchQuery": () => (/* binding */ getSearchQuery)
/* harmony export */ });
const getSearchQuery = state => state.searchQuery;
const getAlertRuleItems = state => {
  const regex = new RegExp(state.alertRules.searchQuery, 'i');
  return state.alertRules.items.filter(item => {
    return regex.test(item.name) || regex.test(item.stateText) || regex.test(item.info);
  });
};
const getNotificationChannel = (state, channelId) => {
  if (state.notificationChannel.id === channelId) {
    return state.notificationChannel;
  }

  return null;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/RuleList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx");
/* harmony import */ var _components_rules_RuleListErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListErrors.tsx");
/* harmony import */ var _components_rules_RuleListGroupView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListGroupView.tsx");
/* harmony import */ var _components_rules_RuleListStateView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListStateView.tsx");
/* harmony import */ var _components_rules_RuleStats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleStats.tsx");
/* harmony import */ var _components_rules_RulesFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesFilter.tsx");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredRules.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _RuleListErrors, _RulesFilter, _NoRulesSplash;


























const VIEWS = {
  groups: _components_rules_RuleListGroupView__WEBPACK_IMPORTED_MODULE_9__.RuleListGroupView,
  state: _components_rules_RuleListStateView__WEBPACK_IMPORTED_MODULE_10__.RuleListStateView
};
const RuleList = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.withErrorBoundary)(() => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const rulesDataSourceNames = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(_utils_datasource__WEBPACK_IMPORTED_MODULE_19__.getAllRulesSourceNames, []);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useLocation)();
  const [expandAll, setExpandAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_5__.useQueryParams)();
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_20__.getFiltersFromUrlParams)(queryParams);
  const filtersActive = Object.values(filters).some(filter => filter !== undefined);
  const {
    canCreateGrafanaRules,
    canCreateCloudRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_17__.useRulesAccess)();
  const view = VIEWS[queryParams['view']] ? queryParams['view'] : 'groups';
  const ViewComponent = VIEWS[view]; // fetch rules, then poll every RULE_LIST_POLL_INTERVAL_MS

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_16__.fetchAllPromAndRulerRulesAction)());
    const interval = setInterval(() => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_16__.fetchAllPromAndRulerRulesAction)()), _utils_constants__WEBPACK_IMPORTED_MODULE_18__.RULE_LIST_POLL_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  const promRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_15__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_15__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const dispatched = rulesDataSourceNames.some(name => {
    var _promRuleRequests$nam, _rulerRuleRequests$na;

    return ((_promRuleRequests$nam = promRuleRequests[name]) === null || _promRuleRequests$nam === void 0 ? void 0 : _promRuleRequests$nam.dispatched) || ((_rulerRuleRequests$na = rulerRuleRequests[name]) === null || _rulerRuleRequests$na === void 0 ? void 0 : _rulerRuleRequests$na.dispatched);
  });
  const loading = rulesDataSourceNames.some(name => {
    var _promRuleRequests$nam2, _rulerRuleRequests$na2;

    return ((_promRuleRequests$nam2 = promRuleRequests[name]) === null || _promRuleRequests$nam2 === void 0 ? void 0 : _promRuleRequests$nam2.loading) || ((_rulerRuleRequests$na2 = rulerRuleRequests[name]) === null || _rulerRuleRequests$na2 === void 0 ? void 0 : _rulerRuleRequests$na2.loading);
  });
  const haveResults = rulesDataSourceNames.some(name => {
    var _promRuleRequests$nam3, _promRuleRequests$nam4, _promRuleRequests$nam5, _rulerRuleRequests$na3, _rulerRuleRequests$na4;

    return ((_promRuleRequests$nam3 = promRuleRequests[name]) === null || _promRuleRequests$nam3 === void 0 ? void 0 : (_promRuleRequests$nam4 = _promRuleRequests$nam3.result) === null || _promRuleRequests$nam4 === void 0 ? void 0 : _promRuleRequests$nam4.length) && !((_promRuleRequests$nam5 = promRuleRequests[name]) !== null && _promRuleRequests$nam5 !== void 0 && _promRuleRequests$nam5.error) || Object.keys(((_rulerRuleRequests$na3 = rulerRuleRequests[name]) === null || _rulerRuleRequests$na3 === void 0 ? void 0 : _rulerRuleRequests$na3.result) || {}).length && !((_rulerRuleRequests$na4 = rulerRuleRequests[name]) !== null && _rulerRuleRequests$na4 !== void 0 && _rulerRuleRequests$na4.error);
  });
  const showNewAlertSplash = dispatched && !loading && !haveResults;
  const combinedNamespaces = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_13__.useCombinedRuleNamespaces)();
  const filteredNamespaces = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_14__.useFilteredRules)(combinedNamespaces);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__.AlertingPageWrapper, {
    pageId: "alert-list",
    isLoading: loading && !haveResults,
    children: [_RuleListErrors || (_RuleListErrors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_RuleListErrors__WEBPACK_IMPORTED_MODULE_8__.RuleListErrors, {})), !showNewAlertSplash && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: [_RulesFilter || (_RulesFilter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_RulesFilter__WEBPACK_IMPORTED_MODULE_12__["default"], {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: styles.buttonsContainer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: styles.statsContainer,
          children: [view === 'groups' && filtersActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: styles.expandAllButton,
            icon: expandAll ? 'angle-double-up' : 'angle-double-down',
            variant: "secondary",
            onClick: () => setExpandAll(!expandAll),
            children: expandAll ? 'Collapse all' : 'Expand all'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_RuleStats__WEBPACK_IMPORTED_MODULE_11__.RuleStats, {
            showInactive: true,
            showRecording: true,
            namespaces: filteredNamespaces
          })]
        }), (canCreateGrafanaRules || canCreateCloudRules) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
          href: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl('alerting/new', {
            returnTo: location.pathname + location.search
          }),
          icon: "plus",
          children: "New alert rule"
        })]
      })]
    }), showNewAlertSplash && (_NoRulesSplash || (_NoRulesSplash = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_7__.NoRulesSplash, {}))), haveResults && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(ViewComponent, {
      expandAll: expandAll,
      namespaces: filteredNamespaces
    })]
  });
}, {
  style: 'page'
});

const getStyles = theme => ({
  break: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    height: 0;
    margin-bottom: ${theme.spacing(2)};
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  buttonsContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
    display: flex;
    justify-content: space-between;
  `,
  statsContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  expandAllButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(1)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RuleList);

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

/***/ "./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTableWithGuidelines": () => (/* binding */ DynamicTableWithGuidelines),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["renderExpandedContent"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// DynamicTable, but renders visual guidelines on the left, for larger screen widths
const DynamicTableWithGuidelines = _ref => {
  let {
    renderExpandedContent
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_3__.DynamicTable, Object.assign({
    renderExpandedContent: renderExpandedContent ? (item, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [!(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.contentGuideline, styles.guideline)
      }), renderExpandedContent(item, index, items)]
    }) : undefined,
    renderPrefixHeader: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.relative,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.headerGuideline, styles.guideline)
      })
    }),
    renderPrefixCell: (_, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.relative,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.topGuideline, styles.guideline)
      }), !(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bottomGuideline, styles.guideline)
      })]
    })
  }, props));
};
const getStyles = theme => ({
  relative: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: relative;
    height: 100%;
  `,
  guideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    left: -19px;
    border-left: 1px solid ${theme.colors.border.medium};
    position: absolute;

    ${theme.breakpoints.down('md')} {
      display: none;
    }
  `,
  topGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 18px;
    border-bottom: 1px solid ${theme.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,
  bottomGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 50%;
    bottom: 0;
  `,
  contentGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,
  headerGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: -25px;
    bottom: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Expression.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Expression": () => (/* binding */ Expression),
/* harmony export */   "HighlightedQuery": () => (/* binding */ HighlightedQuery),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.28.0-28f20a79ff-bde93fb2be.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_slate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-slate-react-virtual-047372596b/0/cache/@grafana-slate-react-npm-0.22.10-grafana-510bc0576d-3417c53d9d.zip/node_modules/@grafana/slate-react/lib/slate-react.es.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
/* harmony import */ var app_plugins_datasource_prometheus_promql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _Well__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/Well.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const HighlightedQuery = ({
  language,
  expr
}) => {
  const plugins = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SlatePrism)({
    onlyIn: node => node.type === 'code_block',
    getSyntax: () => language
  }, Object.assign({}, prismjs__WEBPACK_IMPORTED_MODULE_1__.languages, {
    [language]: language === 'logql' ? app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_5__["default"] : app_plugins_datasource_prometheus_promql__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))], [language]);
  const slateValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.makeValue)(expr), [expr]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_slate_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {
    plugins: plugins,
    value: slateValue,
    readOnly: true
  });
};
const Expression = ({
  expression: query,
  rulesSource
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Well__WEBPACK_IMPORTED_MODULE_8__.Well, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.well, 'slate-query-field'),
    children: (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.isCloudRulesSource)(rulesSource) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HighlightedQuery, {
      expr: query,
      language: rulesSource.type === _utils_datasource__WEBPACK_IMPORTED_MODULE_7__.DataSourceType.Loki ? 'logql' : 'promql'
    }) : query
  });
};
const getStyles = theme => ({
  well: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.typography.fontFamily.monospace};
  `
});

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

/***/ "./public/app/features/alerting/unified/components/RuleLocation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleLocation": () => (/* binding */ RuleLocation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;







const RuleLocation = ({
  namespace,
  group
}) => {
  if (!group) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: namespace
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [namespace, " ", _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "angle-right"
    })), " ", group]
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/StateColoredText.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateColoredText": () => (/* binding */ StateColoredText)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const StateColoredText = ({
  children,
  status
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
    className: styles[status],
    children: children || status
  });
};

const getStyles = theme => ({
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.PromAlertingRuleState.Inactive]: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.success.text};
  `,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.PromAlertingRuleState.Pending]: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.warning.text};
  `,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.PromAlertingRuleState.Firing]: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.error.text};
  `,
  neutral: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
  `
});

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

/***/ "./public/app/features/alerting/unified/components/rules/AlertInstanceStateFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertInstanceStateFilter": () => (/* binding */ AlertInstanceStateFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label;








const AlertInstanceStateFilter = ({
  className,
  onStateFilterChange,
  stateFilter,
  filterType,
  itemPerStateStats
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  const getOptionComponent = state => {
    return function InstanceStateCounter() {
      return itemPerStateStats && itemPerStateStats[state] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tag, {
        name: itemPerStateStats[state].toFixed(0),
        colorIndex: 9,
        className: styles.tag
      }) : null;
    };
  };

  const grafanaOptions = Object.values(app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.GrafanaAlertState).map(state => ({
    label: state,
    value: state,
    component: getOptionComponent(state)
  }));
  const promOptionValues = [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState.Firing, app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState.Pending];
  const promOptions = promOptionValues.map(state => ({
    label: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(state),
    value: state,
    component: getOptionComponent(state)
  }));
  const stateOptions = filterType === 'grafana' ? grafanaOptions : promOptions;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: className,
    "data-testid": "alert-instance-state-filter",
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: "State"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
      options: stateOptions,
      value: stateFilter,
      onChange: onStateFilterChange,
      onClick: v => {
        if (v === stateFilter) {
          onStateFilterChange(undefined);
        }
      }
    })]
  });
};

function getStyles(theme) {
  return {
    tag: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: 11px;
      font-weight: normal;
      padding: ${theme.spacing(0.25, 0.5)};
      vertical-align: middle;
      margin-left: ${theme.spacing(0.5)};
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/CloudRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudRules": () => (/* binding */ CloudRules)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _styles_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/styles/pagination.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _RulesGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesGroup.tsx");
/* harmony import */ var _useCombinedGroupNamespace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/useCombinedGroupNamespace.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _div, _p, _p2;














const CloudRules = ({
  namespaces,
  expandAll
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const rules = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulesDataSources = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(_utils_datasource__WEBPACK_IMPORTED_MODULE_8__.getRulesDataSources, []);
  const groupsWithNamespaces = (0,_useCombinedGroupNamespace__WEBPACK_IMPORTED_MODULE_10__.useCombinedGroupNamespace)(namespaces);
  const dataSourcesLoading = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => rulesDataSources.filter(ds => {
    var _rules$ds$name;

    return (_rules$ds$name = rules[ds.name]) === null || _rules$ds$name === void 0 ? void 0 : _rules$ds$name.loading;
  }), [rules, rulesDataSources]);
  const {
    numberOfPages,
    onPageChange,
    page,
    pageItems
  } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_5__.usePagination)(groupsWithNamespaces, 1, _core_constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_PER_PAGE_PAGINATION);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("section", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.sectionHeader,
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h5", {
        children: "Mimir / Cortex / Loki"
      })), dataSourcesLoading.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
        className: styles.loader,
        text: `Loading rules from ${dataSourcesLoading.length} ${pluralize__WEBPACK_IMPORTED_MODULE_1___default()('source', dataSourcesLoading.length)}`
      }) : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {}))]
    }), pageItems.map(({
      group,
      namespace
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RulesGroup__WEBPACK_IMPORTED_MODULE_9__.RulesGroup, {
        group: group,
        namespace: namespace,
        expandAll: expandAll
      }, `${(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_8__.getRulesSourceUid)(namespace.rulesSource)}-${namespace.name}-${group.name}`);
    }), (namespaces === null || namespaces === void 0 ? void 0 : namespaces.length) === 0 && !!rulesDataSources.length && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
      children: "No rules found."
    }))), !rulesDataSources.length && (_p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
      children: "There are no Prometheus or Loki data sources configured."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
      className: styles.pagination,
      currentPage: page,
      numberOfPages: numberOfPages,
      onNavigate: onPageChange,
      hideWhenSinglePage: true
    })]
  });
};

const getStyles = theme => ({
  loader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  sectionHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(4)};
  `,
  pagination: (0,_styles_pagination__WEBPACK_IMPORTED_MODULE_7__.getPaginationStyles)(theme)
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/EditCloudGroupModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCloudGroupModal": () => (/* binding */ EditCloudGroupModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













function EditCloudGroupModal(props) {
  var _useUnifiedAlertingSe, _Button;

  const {
    namespace,
    group,
    onClose
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    loading,
    error,
    dispatched
  } = (_useUnifiedAlertingSe = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__.useUnifiedAlertingSelector)(state => state.updateLotexNamespaceAndGroup)) !== null && _useUnifiedAlertingSe !== void 0 ? _useUnifiedAlertingSe : _utils_redux__WEBPACK_IMPORTED_MODULE_8__.initialAsyncRequestState;
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _group$interval;

    return {
      namespaceName: namespace.name,
      groupName: group.name,
      groupInterval: (_group$interval = group.interval) !== null && _group$interval !== void 0 ? _group$interval : ''
    };
  }, [namespace, group]); // close modal if successfully saved

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (dispatched && !loading && !error) {
      onClose();
    }
  }, [dispatched, loading, onClose, error]);
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__.useCleanup)(state => state.unifiedAlerting.updateLotexNamespaceAndGroup);

  const onSubmit = values => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.updateLotexNamespaceAndGroupAction)({
      rulesSourceName: (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.getRulesSourceName)(namespace.rulesSource),
      groupName: group.name,
      newGroupName: values.groupName,
      namespaceName: namespace.name,
      newNamespaceName: values.namespaceName,
      groupInterval: values.groupInterval || undefined
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    className: styles.modal,
    isOpen: true,
    title: "Edit namespace or rule group",
    onDismiss: onClose,
    onClickBackdrop: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
      defaultValues: defaultValues,
      onSubmit: onSubmit,
      children: ({
        register,
        errors,
        formState: {
          isDirty
        }
      }) => {
        var _errors$namespaceName, _errors$groupName, _errors$groupInterval;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Namespace",
            invalid: !!errors.namespaceName,
            error: (_errors$namespaceName = errors.namespaceName) === null || _errors$namespaceName === void 0 ? void 0 : _errors$namespaceName.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              id: "namespaceName"
            }, register('namespaceName', {
              required: 'Namespace name is required.'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Rule group",
            invalid: !!errors.groupName,
            error: (_errors$groupName = errors.groupName) === null || _errors$groupName === void 0 ? void 0 : _errors$groupName.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              id: "groupName"
            }, register('groupName', {
              required: 'Rule group name is required.'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Rule group evaluation interval",
            invalid: !!errors.groupInterval,
            error: (_errors$groupInterval = errors.groupInterval) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              id: "groupInterval",
              placeholder: "1m"
            }, register('groupInterval', {
              pattern: _utils_time__WEBPACK_IMPORTED_MODULE_9__.durationValidationPattern
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
            children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              variant: "secondary",
              type: "button",
              disabled: loading,
              onClick: onClose,
              fill: "outline",
              children: "Close"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              disabled: !isDirty || loading,
              children: loading ? 'Saving...' : 'Save changes'
            })]
          })]
        });
      }
    }, JSON.stringify(defaultValues))
  });
}

const getStyles = () => ({
  modal: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 560px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/GrafanaRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaRules": () => (/* binding */ GrafanaRules)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _styles_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/styles/pagination.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _RulesGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesGroup.tsx");
/* harmony import */ var _useCombinedGroupNamespace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/useCombinedGroupNamespace.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _div, _p;
















const GrafanaRules = ({
  namespaces,
  expandAll
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__.useQueryParams)();
  const {
    loading
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.promRules[_utils_datasource__WEBPACK_IMPORTED_MODULE_9__.GRAFANA_RULES_SOURCE_NAME] || _utils_redux__WEBPACK_IMPORTED_MODULE_10__.initialAsyncRequestState);
  const wantsGroupedView = queryParams['view'] === 'grouped';
  const namespacesFormat = wantsGroupedView ? namespaces : (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_5__.flattenGrafanaManagedRules)(namespaces);
  const groupsWithNamespaces = (0,_useCombinedGroupNamespace__WEBPACK_IMPORTED_MODULE_12__.useCombinedGroupNamespace)(namespacesFormat);
  const {
    numberOfPages,
    onPageChange,
    page,
    pageItems
  } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_6__.usePagination)(groupsWithNamespaces, 1, _core_constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_PER_PAGE_PAGINATION);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("section", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: styles.sectionHeader,
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h5", {
        children: "Grafana"
      })), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        className: styles.loader,
        text: "Loading..."
      }) : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {}))]
    }), pageItems.map(({
      group,
      namespace
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_RulesGroup__WEBPACK_IMPORTED_MODULE_11__.RulesGroup, {
      group: group,
      namespace: namespace,
      expandAll: expandAll
    }, `${namespace.name}-${group.name}`)), (namespacesFormat === null || namespacesFormat === void 0 ? void 0 : namespacesFormat.length) === 0 && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      children: "No rules found."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
      className: styles.pagination,
      currentPage: page,
      numberOfPages: numberOfPages,
      onNavigate: onPageChange,
      hideWhenSinglePage: true
    })]
  });
};

const getStyles = theme => ({
  loader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  sectionHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(4)};
  `,
  pagination: (0,_styles_pagination__WEBPACK_IMPORTED_MODULE_8__.getPaginationStyles)(theme)
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoRulesSplash": () => (/* binding */ NoRulesSplash)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _EmptyListCTA, _CallToActionCard;






const NoRulesSplash = () => {
  const {
    canCreateGrafanaRules,
    canCreateCloudRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_3__.useRulesAccess)();

  if (canCreateGrafanaRules || canCreateCloudRules) {
    return _EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "You haven`t created any alert rules yet",
      buttonIcon: "bell",
      buttonLink: 'alerting/new',
      buttonTitle: "New alert rule",
      proTip: "you can also create alert rules from existing panels and queries.",
      proTipLink: "https://grafana.com/docs/",
      proTipLinkTitle: "Learn more",
      proTipTarget: "_blank"
    }));
  }

  return _CallToActionCard || (_CallToActionCard = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CallToActionCard, {
    message: "No rules exist yet.",
    callToActionElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {})
  }));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetails": () => (/* binding */ RuleDetails),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
/* harmony import */ var _RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
/* harmony import */ var _RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
/* harmony import */ var _RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
/* harmony import */ var _RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












// The limit is set to 15 in order to upkeep the good performance
// and to encourage users to go to the rule details page to see the rest of the instances
// We don't want to paginate the instances list on the alert list page
const INSTANCES_DISPLAY_LIMIT = 15;
const RuleDetails = ({
  rule
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    namespace: {
      rulesSource
    }
  } = rule;
  const annotations = Object.entries(rule.annotations).filter(([_, value]) => !!value.trim());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_5__.RuleDetailsActionButtons, {
      rule: rule,
      rulesSource: rulesSource
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.leftSide,
        children: [!!rule.labels && !!Object.keys(rule.labels).length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_4__.DetailsField, {
          label: "Labels",
          horizontal: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, {
            labels: rule.labels
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_8__.RuleDetailsExpression, {
          rulesSource: rulesSource,
          rule: rule,
          annotations: annotations
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_6__.RuleDetailsAnnotations, {
          annotations: annotations
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: styles.rightSide,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_7__.RuleDetailsDataSources, {
          rulesSource: rulesSource,
          rule: rule
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_9__.RuleDetailsMatchingInstances, {
      rule: rule,
      itemsDisplayLimit: INSTANCES_DISPLAY_LIMIT
    })]
  });
};
const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;

    ${theme.breakpoints.down('md')} {
      flex-direction: column;
    }
  `,
  leftSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
  `,
  rightSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.breakpoints.up('md')} {
      padding-left: 90px;
      width: 300px;
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsActionButtons": () => (/* binding */ RuleDetailsActionButtons),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
/* harmony import */ var _hooks_useStateHistoryModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useStateHistoryModal.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2;























const RuleDetailsActionButtons = ({
  rule,
  rulesSource
}) => {
  var _rule$rulerRule$grafa, _getAlertmanagerByUid;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation)();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__.useAppNotification)();
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const {
    namespace,
    group,
    rulerRule
  } = rule;
  const [ruleToDelete, setRuleToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const alertId = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isGrafanaRulerRule)(rule.rulerRule) ? (_rule$rulerRule$grafa = rule.rulerRule.grafana_alert.id) !== null && _rule$rulerRule$grafa !== void 0 ? _rule$rulerRule$grafa : '' : '';
  const {
    StateHistoryModal,
    showStateHistoryModal
  } = (0,_hooks_useStateHistoryModal__WEBPACK_IMPORTED_MODULE_10__.useStateHistoryModal)(alertId);
  const alertmanagerSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isGrafanaRulesSource)(rulesSource) ? rulesSource : (_getAlertmanagerByUid = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.getAlertmanagerByUid)(rulesSource.jsonData.alertmanagerUid)) === null || _getAlertmanagerByUid === void 0 ? void 0 : _getAlertmanagerByUid.name;
  const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(rulesSource);
  const hasExplorePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.DataSourcesExplore);
  const isProvisioned = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isGrafanaRulerRule)(rule.rulerRule) && Boolean(rule.rulerRule.grafana_alert.provenance);
  const leftButtons = [];
  const rightButtons = [];
  const isFederated = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isFederatedRuleGroup)(group);
  const {
    isEditable,
    isRemovable
  } = (0,_hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__.useIsRuleEditable)(rulesSourceName, rulerRule);
  const returnTo = location.pathname + location.search;
  const isViewMode = inViewMode(location.pathname);

  const deleteRule = () => {
    if (ruleToDelete && ruleToDelete.rulerRule) {
      const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.fromRulerRule((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(ruleToDelete.namespace.rulesSource), ruleToDelete.namespace.name, ruleToDelete.group.name, ruleToDelete.rulerRule);
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.deleteRuleAction)(identifier, {
        navigateTo: isViewMode ? '/alerting/list' : undefined
      }));
      setRuleToDelete(undefined);
    }
  };

  const buildShareUrl = () => {
    if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isCloudRulesSource)(rulesSource)) {
      const {
        appUrl,
        appSubUrl
      } = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config;
      const baseUrl = appSubUrl !== '' ? `${appUrl}${appSubUrl}/` : _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appUrl;
      const ruleUrl = `${encodeURIComponent(rulesSource.name)}/${encodeURIComponent(rule.name)}`;
      return `${baseUrl}alerting/${ruleUrl}/find`;
    }

    return window.location.href.split('?')[0];
  }; // explore does not support grafana rule queries atm
  // neither do "federated rules"


  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isCloudRulesSource)(rulesSource) && hasExplorePermission && !isFederated) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "chart-line",
      target: "__blank",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.createExploreLink)(rulesSource.name, rule.query),
      children: "See graph"
    }, "explore"));
  }

  if (rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.runbookURL]) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "book",
      target: "__blank",
      href: rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.runbookURL],
      children: "View runbook"
    }, "runbook"));
  }

  if (rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.dashboardUID]) {
    const dashboardUID = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.dashboardUID];

    if (dashboardUID) {
      leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
        className: style.button,
        size: "xs",
        variant: "primary",
        icon: "apps",
        target: "__blank",
        href: `d/${encodeURIComponent(dashboardUID)}`,
        children: "Go to dashboard"
      }, "dashboard"));
      const panelId = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.panelID];

      if (panelId) {
        leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
          className: style.button,
          size: "xs",
          variant: "primary",
          icon: "apps",
          target: "__blank",
          href: `d/${encodeURIComponent(dashboardUID)}?viewPanel=${encodeURIComponent(panelId)}`,
          children: "Go to panel"
        }, "panel"));
      }
    }
  }

  if (alertmanagerSourceName && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.AlertingInstanceCreate, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.isEditor)) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      icon: "bell-slash",
      target: "__blank",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeRuleBasedSilenceLink)(alertmanagerSourceName, rule),
      children: "Silence"
    }, "silence"));
  }

  if (alertId) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: style.button,
        size: "xs",
        icon: "history",
        onClick: () => showStateHistoryModal(),
        children: "Show state history"
      }), StateHistoryModal]
    }, "history"));
  }

  if (!isViewMode) {
    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "eye",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.createViewLink)(rulesSource, rule, returnTo),
      children: "View"
    }, "view"));
  }

  if (isEditable && rulerRule && !isFederated && !isProvisioned) {
    const sourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(rulesSource);
    const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.fromRulerRule(sourceName, namespace.name, group.name, rulerRule);
    const editURL = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl(`${_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl}/alerting/${encodeURIComponent(_utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.stringifyIdentifier(identifier))}/edit`, {
      returnTo
    });

    if (isViewMode) {
      rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ClipboardButton, {
        onClipboardCopy: () => {
          notifyApp.success('URL copied!');
        },
        onClipboardError: copiedText => {
          notifyApp.error('Error while copying URL', copiedText);
        },
        className: style.button,
        size: "sm",
        getText: buildShareUrl,
        children: "Copy link to rule"
      }, "copy"));
    }

    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "pen",
      href: editURL,
      children: "Edit"
    }, "edit"));
  }

  if (isRemovable && rulerRule && !isFederated && !isProvisioned) {
    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
      className: style.button,
      size: "xs",
      type: "button",
      variant: "secondary",
      icon: "trash-alt",
      onClick: () => setRuleToDelete(rule),
      children: "Delete"
    }, "delete"));
  }

  if (leftButtons.length || rightButtons.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: style.wrapper,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
          width: "auto",
          children: leftButtons.length ? leftButtons : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {}))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
          width: "auto",
          children: rightButtons.length ? rightButtons : _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {}))
        })]
      }), !!ruleToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal, {
        isOpen: true,
        title: "Delete rule",
        body: "Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",
        confirmText: "Yes, delete",
        icon: "exclamation-triangle",
        onConfirm: deleteRule,
        onDismiss: () => setRuleToDelete(undefined)
      })]
    });
  }

  return null;
};

function inViewMode(pathname) {
  return pathname.endsWith('/view');
}

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    height: 24px;
    margin-top: ${theme.spacing(1)};
    font-size: ${theme.typography.size.sm};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsAnnotations": () => (/* binding */ RuleDetailsAnnotations)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function RuleDetailsAnnotations(props) {
  const {
    annotations
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (annotations.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: styles.annotations,
    children: annotations.map(([key, value]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__.AnnotationDetailsField, {
      annotationKey: key,
      value: value
    }, key))
  });
}

const getStyles = () => ({
  annotations: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: 46px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsDataSources": () => (/* binding */ RuleDetailsDataSources)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function RuleDetailsDataSources(props) {
  const {
    rulesSource,
    rule
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dataSources = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isCloudRulesSource)(rulesSource)) {
      return [{
        name: rulesSource.name,
        icon: rulesSource.meta.info.logos.small
      }];
    }

    if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.isGrafanaRulerRule)(rule.rulerRule)) {
      const {
        data
      } = rule.rulerRule.grafana_alert;
      const unique = data.reduce((dataSources, query) => {
        const ds = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);

        if (!ds || ds.uid === app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__.ExpressionDatasourceUID) {
          return dataSources;
        }

        dataSources[ds.name] = {
          name: ds.name,
          icon: ds.meta.info.logos.small
        };
        return dataSources;
      }, {});
      return Object.values(unique);
    }

    return [];
  }, [rule, rulesSource]);

  if (dataSources.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_7__.DetailsField, {
    label: "Data source",
    children: dataSources.map(({
      name,
      icon
    }, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          alt: `${name} datasource logo`,
          className: styles.dataSourceIcon,
          src: icon
        }), ' ']
      }), name]
    }, name))
  });
}

function getStyles(theme) {
  const size = theme.spacing(2);
  return {
    dataSourceIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: ${size};
      height: ${size};
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsExpression": () => (/* binding */ RuleDetailsExpression)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/Expression.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function RuleDetailsExpression(props) {
  const {
    annotations,
    rulesSource,
    rule
  } = props;
  const styles = getStyles();

  if (!(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isCloudRulesSource)(rulesSource)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_3__.DetailsField, {
    label: "Expression",
    horizontal: true,
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
      [styles.exprRow]: !!annotations.length
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Expression__WEBPACK_IMPORTED_MODULE_4__.Expression, {
      expression: rule.query,
      rulesSource: rulesSource
    })
  });
}

const getStyles = () => ({
  exprRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 46px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsMatchingInstances": () => (/* binding */ RuleDetailsMatchingInstances)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_alerting_unified_components_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var app_features_alerting_unified_components_rules_AlertInstanceStateFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstanceStateFilter.tsx");
/* harmony import */ var app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_plugins_panel_alertlist_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/alertlist/types.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _AlertInstancesTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstancesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");

















function ShowMoreInstances(props) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    ruleViewPageLink,
    stats
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: styles.footerRow,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      children: ["Showing ", stats.visibleItemsCount, " out of ", stats.totalItemsCount, " instances"]
    }), ruleViewPageLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
      href: ruleViewPageLink,
      size: "sm",
      variant: "secondary",
      children: ["Show all ", stats.totalItemsCount, " alert instances"]
    })]
  });
}

function RuleDetailsMatchingInstances(props) {
  const {
    rule: {
      promRule,
      namespace
    },
    itemsDisplayLimit = Number.POSITIVE_INFINITY,
    pagination
  } = props;
  const [queryString, setQueryString] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [alertState, setAlertState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(); // This key is used to force a rerender on the inputs when the filters are cleared

  const [filterKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * 100));
  const queryStringKey = `queryString-${filterKey}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const stateFilterType = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_10__.isGrafanaRulesSource)(namespace.rulesSource) ? _utils_datasource__WEBPACK_IMPORTED_MODULE_10__.GRAFANA_RULES_SOURCE_NAME : 'prometheus';
  const alerts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var _promRule$alerts;

    return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_11__.isAlertingRule)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length ? filterAlerts(queryString, alertState, (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_7__.sortAlerts)(app_plugins_panel_alertlist_types__WEBPACK_IMPORTED_MODULE_8__.SortOrder.Importance, promRule.alerts)) : [];
  }, [promRule, alertState, queryString]);

  if (!(0,_utils_rules__WEBPACK_IMPORTED_MODULE_11__.isAlertingRule)(promRule)) {
    return null;
  }

  const visibleInstances = alerts.slice(0, itemsDisplayLimit);
  const countAllByState = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.countBy)(promRule.alerts, alert => (0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_9__.mapStateWithReasonToBaseState)(alert.state));
  const hiddenItemsCount = alerts.length - visibleInstances.length;
  const stats = {
    totalItemsCount: alerts.length,
    visibleItemsCount: visibleInstances.length
  };
  const ruleViewPageLink = (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_7__.createViewLink)(namespace.rulesSource, props.rule, location.pathname + location.search);
  const footerRow = hiddenItemsCount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(ShowMoreInstances, {
    stats: stats,
    ruleViewPageLink: ruleViewPageLink
  }) : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_DetailsField__WEBPACK_IMPORTED_MODULE_12__.DetailsField, {
    label: "Matching instances",
    horizontal: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.spaceBetween),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_features_alerting_unified_components_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_4__.MatcherFilter, {
          className: styles.rowChild,
          defaultQueryString: queryString,
          onFilterChange: value => setQueryString(value)
        }, queryStringKey), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_features_alerting_unified_components_rules_AlertInstanceStateFilter__WEBPACK_IMPORTED_MODULE_5__.AlertInstanceStateFilter, {
          className: styles.rowChild,
          filterType: stateFilterType,
          stateFilter: alertState,
          onStateFilterChange: setAlertState,
          itemPerStateStats: countAllByState
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_AlertInstancesTable__WEBPACK_IMPORTED_MODULE_13__.AlertInstancesTable, {
      instances: visibleInstances,
      pagination: pagination,
      footerRow: footerRow
    })]
  });
}

function filterAlerts(alertInstanceLabel, alertInstanceState, alerts) {
  let filteredAlerts = [...alerts];

  if (alertInstanceLabel) {
    const matchers = (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_6__.parseMatchers)(alertInstanceLabel || '');
    filteredAlerts = filteredAlerts.filter(({
      labels
    }) => (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_6__.labelsMatchMatchers)(labels, matchers));
  }

  if (alertInstanceState) {
    filteredAlerts = filteredAlerts.filter(alert => {
      return (0,app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_9__.mapStateWithReasonToBaseState)(alert.state) === alertInstanceState;
    });
  }

  return filteredAlerts;
}

const getStyles = theme => {
  return {
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: ${theme.spacing.sm};
    `,
    spaceBetween: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      justify-content: space-between;
    `,
    rowChild: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing.sm};
    `,
    footerRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.sm};
      justify-content: space-between;
      align-items: center;
      width: 100%;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleHealth.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleHealth": () => (/* binding */ RuleHealth)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span;







const RuleHealth = ({
  rule
}) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyle);

  if (rule.health === 'err' || rule.health === 'error') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      theme: "error",
      content: rule.lastError || 'No error message provided.',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: style.warn,
        children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "exclamation-triangle"
        })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: "error"
        }))]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: rule.health
  });
};

const getStyle = theme => ({
  warn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: inline-flex;
    flex-direction: row;
    color: ${theme.colors.warning.text};
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListErrors.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListErrors": () => (/* binding */ RuleListErrors)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useLocalStorage.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function RuleListErrors() {
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [closed, setClosed] = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])('grafana.unifiedalerting.hideErrors', false);
  const dataSourceConfigRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.dataSources);
  const promRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const errors = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var _promRuleRequests$GRA, _rulerRuleRequests$GR;

    const [dataSourceConfigErrors, promRequestErrors, rulerRequestErrors] = [dataSourceConfigRequests, promRuleRequests, rulerRuleRequests].map(requests => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.getRulesDataSources)().reduce((result, dataSource) => {
      var _requests$dataSource$;

      const error = (_requests$dataSource$ = requests[dataSource.name]) === null || _requests$dataSource$ === void 0 ? void 0 : _requests$dataSource$.error;

      if (requests[dataSource.name] && error && !(0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.isRulerNotSupportedResponse)(requests[dataSource.name])) {
        return [...result, {
          dataSource,
          error
        }];
      }

      return result;
    }, []));
    const grafanaPromError = (_promRuleRequests$GRA = promRuleRequests[_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME]) === null || _promRuleRequests$GRA === void 0 ? void 0 : _promRuleRequests$GRA.error;
    const grafanaRulerError = (_rulerRuleRequests$GR = rulerRuleRequests[_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME]) === null || _rulerRuleRequests$GR === void 0 ? void 0 : _rulerRuleRequests$GR.error;
    const result = [];

    if (grafanaPromError) {
      result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Failed to load Grafana rules state: ", grafanaPromError.message || 'Unknown error.']
      }));
    }

    if (grafanaRulerError) {
      result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Failed to load Grafana rules config: ", grafanaRulerError.message || 'Unknown error.']
      }));
    }

    dataSourceConfigErrors.forEach(({
      dataSource,
      error
    }) => {
      result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Failed to load the data source configuration for", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
          href: `datasources/edit/${dataSource.uid}`,
          children: dataSource.name
        }), ": ", error.message || 'Unknown error.']
      }));
    });
    promRequestErrors.forEach(({
      dataSource,
      error
    }) => result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: ["Failed to load rules state from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        href: `datasources/edit/${dataSource.uid}`,
        children: dataSource.name
      }), ":", ' ', error.message || 'Unknown error.']
    })));
    rulerRequestErrors.forEach(({
      dataSource,
      error
    }) => result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: ["Failed to load rules config from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        href: `datasources/edit/${dataSource.uid}`,
        children: dataSource.name
      }), ":", ' ', error.message || 'Unknown error.']
    })));
    return result;
  }, [dataSourceConfigRequests, promRuleRequests, rulerRuleRequests]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [!!errors.length && closed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ErrorSummaryButton, {
      count: errors.length,
      onClick: () => setClosed(closed => !closed)
    }), !!errors.length && !closed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      "data-testid": "cloud-rulessource-errors",
      title: "Errors loading rules",
      severity: "error",
      onRemove: () => setClosed(true),
      children: [expanded && errors.map((item, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: item
      }, idx)), !expanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: errors[0]
        }), errors.length >= 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: styles.moreButton,
          fill: "text",
          icon: "angle-right",
          size: "sm",
          onClick: () => setExpanded(true),
          children: [errors.length - 1, " more ", pluralize__WEBPACK_IMPORTED_MODULE_1___default()('error', errors.length - 1)]
        })]
      })]
    })]
  });
}

const ErrorSummaryButton = ({
  count,
  onClick
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: styles.floatRight,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      content: "Show all errors",
      placement: "bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        fill: "text",
        variant: "destructive",
        icon: "exclamation-triangle",
        onClick: onClick,
        children: count > 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [count, " errors"]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: "1 error"
        })
      })
    })
  });
};

const getStyles = theme => ({
  moreButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: 0;
  `,
  floatRight: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListGroupView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListGroupView": () => (/* binding */ RuleListGroupView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _CloudRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/CloudRules.tsx");
/* harmony import */ var _GrafanaRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/GrafanaRules.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const RuleListGroupView = ({
  namespaces,
  expandAll
}) => {
  const [grafanaNamespaces, cloudNamespaces] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const sorted = namespaces.map(namespace => Object.assign({}, namespace, {
      groups: namespace.groups.sort((a, b) => a.name.localeCompare(b.name))
    })).sort((a, b) => a.name.localeCompare(b.name));
    return [sorted.filter(ns => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulesSource)(ns.rulesSource)), sorted.filter(ns => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isCloudRulesSource)(ns.rulesSource))];
  }, [namespaces]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_3__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.AlertingRuleRead],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GrafanaRules__WEBPACK_IMPORTED_MODULE_5__.GrafanaRules, {
        namespaces: grafanaNamespaces,
        expandAll: expandAll
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_3__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.AlertingRuleExternalRead],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CloudRules__WEBPACK_IMPORTED_MODULE_4__.CloudRules, {
        namespaces: cloudNamespaces,
        expandAll: expandAll
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListStateSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListStateSection": () => (/* binding */ RuleListStateSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _RulesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const RuleListStateSection = ({
  rules,
  state,
  defaultCollapsed = false
}) => {
  const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultCollapsed);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_4__.CollapseToggle, {
        className: styles.collapseToggle,
        size: "xxl",
        isCollapsed: collapsed,
        onToggle: () => setCollapsed(!collapsed)
      }), (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.alertStateToReadable)(state), " (", rules.length, ")"]
    }), !collapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RulesTable__WEBPACK_IMPORTED_MODULE_5__.RulesTable, {
      className: styles.rulesTable,
      rules: rules,
      showGroupColumn: true
    })]
  });
};

const getStyles = theme => ({
  collapseToggle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    vertical-align: middle;
  `,
  header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(2)};
  `,
  rulesTable: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(3)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListStateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListStateView": () => (/* binding */ RuleListStateView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListStateSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const RuleListStateView = ({
  namespaces
}) => {
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.getFiltersFromUrlParams)((0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.useQueryParams)()[0]);
  const groupedRules = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const result = {
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing]: [],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive]: [],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending]: []
    };
    namespaces.forEach(namespace => namespace.groups.forEach(group => group.rules.forEach(rule => {
      if (rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_4__.isAlertingRule)(rule.promRule)) {
        result[rule.promRule.state].push(rule);
      }
    })));
    Object.values(result).forEach(rules => rules.sort((a, b) => a.name.localeCompare(b.name)));
    return result;
  }, [namespaces]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [(!filters.alertState || filters.alertState === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__.RuleListStateSection, {
      state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing,
      rules: groupedRules[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing]
    }), (!filters.alertState || filters.alertState === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__.RuleListStateSection, {
      state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending,
      rules: groupedRules[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending]
    }), (!filters.alertState || filters.alertState === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__.RuleListStateSection, {
      defaultCollapsed: filters.alertState !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive,
      state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive,
      rules: groupedRules[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleState": () => (/* binding */ RuleState)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _HorizontalGroup, _HorizontalGroup2;











const RuleState = ({
  rule,
  isDeleting,
  isCreating
}) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyle);
  const {
    promRule
  } = rule; // return how long the rule has been in it's firing state, if any

  const forTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _promRule$alerts;

    if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isAlertingRule)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length && promRule.state !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState.Inactive) {
      // find earliest alert
      const firstActiveAt = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.getFirstActiveAt)(promRule); // calculate time elapsed from earliest alert

      if (firstActiveAt) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          title: String(firstActiveAt),
          className: style.for,
          children: ["for", ' ', (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.intervalToAbbreviatedDurationString)({
            start: firstActiveAt,
            end: new Date()
          }, false)]
        });
      }
    }

    return null;
  }, [promRule, style]);

  if (isDeleting) {
    return _HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}), "deleting"]
    }));
  } else if (isCreating) {
    return _HorizontalGroup2 || (_HorizontalGroup2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}), "creating"]
    }));
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isAlertingRule)(promRule)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_6__.AlertStateTag, {
        state: promRule.state
      }), forTime]
    });
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isRecordingRule)(promRule)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: "Recording rule"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: "n/a"
  });
};

const getStyle = theme => ({
  for: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.typography.bodySmall.fontSize};
    color: ${theme.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleStats.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleStats": () => (/* binding */ RuleStats)
/* harmony export */ });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _StateColoredText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/StateColoredText.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _span2;









const emptyStats = {
  total: 0,
  recording: 0,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing]: 0,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending]: 0,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive]: 0,
  error: 0
};
const RuleStats = ({
  showInactive,
  showRecording,
  group,
  namespaces
}) => {
  const calculated = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const stats = Object.assign({}, emptyStats);

    const calcRule = rule => {
      var _rule$promRule, _rule$promRule2;

      if (rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isAlertingRule)(rule.promRule)) {
        stats[rule.promRule.state] += 1;
      }

      if (((_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.health) === 'err' || ((_rule$promRule2 = rule.promRule) === null || _rule$promRule2 === void 0 ? void 0 : _rule$promRule2.health) === 'error') {
        stats.error += 1;
      }

      if (rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isRecordingRule)(rule.promRule) || rule.rulerRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isRecordingRulerRule)(rule.rulerRule)) {
        stats.recording += 1;
      }

      stats.total += 1;
    };

    if (group) {
      group.rules.forEach(calcRule);
    }

    if (namespaces) {
      namespaces.forEach(namespace => namespace.groups.forEach(group => group.rules.forEach(calcRule)));
    }

    return stats;
  }, [group, namespaces]);
  const statsComponents = [];

  if (calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing]) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing,
      children: [calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing], " firing"]
    }, "firing"));
  }

  if (calculated.error) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing,
      children: [calculated.error, " errors"]
    }, "errors"));
  }

  if (calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending]) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending,
      children: [calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending], " pending"]
    }, "pending"));
  }

  if (showInactive && calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive]) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: "neutral",
      children: [calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive], " normal"]
    }, "inactive"));
  }

  if (showRecording && calculated.recording) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: "neutral",
      children: [calculated.recording, " recording"]
    }, "recording"));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
      children: [calculated.total, " ", pluralize__WEBPACK_IMPORTED_MODULE_0___default()('rule', calculated.total)]
    }), !!statsComponents.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: ": "
      })), statsComponents.reduce((prev, curr, idx) => prev.length ? [prev, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: _span2 || (_span2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: ", "
        }))
      }, idx), curr] : [curr], [])]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Label, _Label2, _Label3, _Label4;













const ViewOptions = [{
  icon: 'list-ul',
  label: 'List',
  value: 'list'
}, {
  icon: 'folder',
  label: 'Grouped',
  value: 'grouped'
}, {
  icon: 'heart-rate',
  label: 'State',
  value: 'state'
}];
const RuleTypeOptions = [{
  label: 'Alert ',
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_7__.PromRuleType.Alerting
}, {
  label: 'Recording ',
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_7__.PromRuleType.Recording
}];

const RulesFilter = () => {
  var _queryParams$view;

  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__.useQueryParams)(); // This key is used to force a rerender on the inputs when the filters are cleared

  const [filterKey, setFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * 100));
  const dataSourceKey = `dataSource-${filterKey}`;
  const queryStringKey = `queryString-${filterKey}`;
  const {
    dataSource,
    alertState,
    queryString,
    ruleType
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.getFiltersFromUrlParams)(queryParams);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles)(getStyles);
  const stateOptions = Object.entries(app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_7__.PromAlertingRuleState).map(([key, value]) => ({
    label: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_9__.alertStateToReadable)(value),
    value
  }));

  const handleDataSourceChange = dataSourceValue => {
    setQueryParams({
      dataSource: dataSourceValue.name
    });
  };

  const clearDataSource = () => {
    setQueryParams({
      dataSource: null
    });
  };

  const handleQueryStringChange = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(e => {
    const target = e.target;
    setQueryParams({
      queryString: target.value || null
    });
  }, 600);

  const handleAlertStateChange = value => {
    setQueryParams({
      alertState: value
    });
  };

  const handleViewChange = view => {
    setQueryParams({
      view
    });
  };

  const handleRuleTypeChange = ruleType => {
    setQueryParams({
      ruleType
    });
  };

  const handleClearFiltersClick = () => {
    setQueryParams({
      alertState: null,
      queryString: null,
      dataSource: null,
      ruleType: null
    });
    setTimeout(() => setFilterKey(filterKey + 1), 100);
  };

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
      className: styles.inputWidth,
      label: "Search by data source",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker, {
        alerting: true,
        noDefault: true,
        placeholder: "All data sources",
        current: dataSource,
        onChange: handleDataSourceChange,
        onClear: clearDataSource
      }, dataSourceKey)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.spaceBetween),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
          className: styles.rowChild,
          label: _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.Stack, {
              gap: 0.5,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                children: "Search by label"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  children: ["Filter rules and alerts using label querying, ex:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("code", {
                    children: `{severity="critical", instance=~"cluster-us-.+"}`
                  })]
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                  name: "info-circle",
                  size: "sm"
                })
              })]
            })
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input, {
            className: styles.inputWidth,
            prefix: searchIcon,
            onChange: handleQueryStringChange,
            defaultValue: queryString,
            placeholder: "Search",
            "data-testid": "search-query-input"
          }, queryStringKey)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label2 || (_Label2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
            children: "State"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
            options: stateOptions,
            value: alertState,
            onChange: handleAlertStateChange
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label3 || (_Label3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
            children: "Rule type"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
            options: RuleTypeOptions,
            value: ruleType,
            onChange: handleRuleTypeChange
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label4 || (_Label4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
            children: "View as"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
            options: ViewOptions,
            value: String((_queryParams$view = queryParams['view']) !== null && _queryParams$view !== void 0 ? _queryParams$view : ViewOptions[0].value),
            onChange: handleViewChange
          })]
        })]
      }), (dataSource || alertState || queryString || ruleType) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: styles.flexRow,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          className: styles.clearButton,
          fullWidth: false,
          icon: "times",
          variant: "secondary",
          onClick: handleClearFiltersClick,
          children: "Clear filters"
        })
      })]
    })]
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      padding-bottom: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.sm};
    `,
    inputWidth: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 340px;
      flex-grow: 0;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,
    spaceBetween: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      justify-content: space-between;
    `,
    rowChild: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0 ${theme.spacing.sm} 0 0;
    `,
    clearButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing.sm};
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RulesFilter);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesGroup": () => (/* binding */ RulesGroup),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/utils/kbn.ts");
/* harmony import */ var _hooks_useFolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _RuleLocation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
/* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _EditCloudGroupModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/EditCloudGroupModal.tsx");
/* harmony import */ var _RuleStats__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleStats.tsx");
/* harmony import */ var _RulesTable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _HorizontalGroup, _Badge, _br, _br2;






















const RulesGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(({
  group,
  namespace,
  expandAll
}) => {
  var _group$rules$;

  const {
    rulesSource
  } = namespace;
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const [isEditingGroup, setIsEditingGroup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isDeletingGroup, setIsDeletingGroup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!expandAll);
  const {
    canEditRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_9__.useRulesAccess)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setIsCollapsed(!expandAll);
  }, [expandAll]);
  const hasRuler = (0,_hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_7__.useHasRuler)();
  const rulerRule = (_group$rules$ = group.rules[0]) === null || _group$rules$ === void 0 ? void 0 : _group$rules$.rulerRule;
  const folderUID = rulerRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_11__.isGrafanaRulerRule)(rulerRule) && rulerRule.grafana_alert.namespace_uid || undefined;
  const {
    folder
  } = (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_6__.useFolder)(folderUID); // group "is deleting" if rules source has ruler, but this group has no rules that are in ruler

  const isDeleting = hasRuler(rulesSource) && !group.rules.find(rule => !!rule.rulerRule);
  const isFederated = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_11__.isFederatedRuleGroup)(group);

  const deleteGroup = () => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.deleteRulesGroupAction)(namespace, group));
    setIsDeletingGroup(false);
  };

  const actionIcons = []; // for grafana, link to folder views

  if (isDeleting) {
    actionIcons.push(_HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}), "deleting"]
    }, "is-deleting")));
  } else if (rulesSource === _utils_datasource__WEBPACK_IMPORTED_MODULE_10__.GRAFANA_RULES_SOURCE_NAME) {
    if (folderUID) {
      const baseUrl = `/dashboards/f/${folderUID}/${app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_5__["default"].slugifyForUrl(namespace.name)}`;

      if (folder !== null && folder !== void 0 && folder.canSave) {
        actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_14__.ActionIcon, {
          "aria-label": "edit folder",
          icon: "pen",
          tooltip: "edit folder",
          to: baseUrl + '/settings',
          target: "__blank"
        }, "edit"));
      }

      if (folder !== null && folder !== void 0 && folder.canAdmin) {
        actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_14__.ActionIcon, {
          "aria-label": "manage permissions",
          icon: "lock",
          tooltip: "manage permissions",
          to: baseUrl + '/permissions',
          target: "__blank"
        }, "manage-perms"));
      }
    }
  } else if (canEditRules(rulesSource.name) && hasRuler(rulesSource)) {
    if (!isFederated) {
      actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_14__.ActionIcon, {
        "aria-label": "edit rule group",
        "data-testid": "edit-group",
        icon: "pen",
        tooltip: "edit rule group",
        onClick: () => setIsEditingGroup(true)
      }, "edit"));
    }

    actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_14__.ActionIcon, {
      "aria-label": "delete rule group",
      "data-testid": "delete-group",
      icon: "trash-alt",
      tooltip: "delete rule group",
      onClick: () => setIsDeletingGroup(true)
    }, "delete-group"));
  } // ungrouped rules are rules that are in the "default" group name


  const isUngrouped = group.name === 'default';
  const groupName = isUngrouped ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_13__.RuleLocation, {
    namespace: namespace.name
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_13__.RuleLocation, {
    namespace: namespace.name,
    group: group.name
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": "rule-group",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
      className: styles.header,
      "data-testid": "rule-group-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_12__.CollapseToggle, {
        className: styles.collapseToggle,
        isCollapsed: isCollapsed,
        onToggle: setIsCollapsed,
        "data-testid": "group-collapse-toggle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        name: isCollapsed ? 'folder' : 'folder-open'
      }), (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_10__.isCloudRulesSource)(rulesSource) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
        content: rulesSource.name,
        placement: "top",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("img", {
          alt: rulesSource.meta.name,
          className: styles.dataSourceIcon,
          src: rulesSource.meta.info.logos.small
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("h6", {
        className: styles.heading,
        children: [isFederated && (_Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge, {
          color: "purple",
          text: "Federated"
        }))), " ", groupName]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: styles.spacer
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: styles.headerStats,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_RuleStats__WEBPACK_IMPORTED_MODULE_16__.RuleStats, {
          showInactive: false,
          group: group
        })
      }), !!actionIcons.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
          className: styles.actionsSeparator,
          children: "|"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
          className: styles.actionIcons,
          children: actionIcons
        })]
      })]
    }), !isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_RulesTable__WEBPACK_IMPORTED_MODULE_17__.RulesTable, {
      showSummaryColumn: true,
      className: styles.rulesTable,
      showGuidelines: true,
      rules: group.rules
    }), isEditingGroup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_EditCloudGroupModal__WEBPACK_IMPORTED_MODULE_15__.EditCloudGroupModal, {
      group: group,
      namespace: namespace,
      onClose: () => setIsEditingGroup(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, {
      isOpen: isDeletingGroup,
      title: "Delete group",
      body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        children: ["Deleting this group will permanently remove the group", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br", {})), "and ", group.rules.length, " alert ", pluralize__WEBPACK_IMPORTED_MODULE_1___default()('rule', group.rules.length), " belonging to it.", _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br", {})), "Are you sure you want to delete this group?"]
      }),
      onConfirm: deleteGroup,
      onDismiss: () => setIsDeletingGroup(false),
      confirmText: "Delete"
    })]
  });
});
RulesGroup.displayName = 'RulesGroup';
const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & + & {
      margin-top: ${theme.spacing(2)};
    }
  `,
  header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} 0;
    background-color: ${theme.colors.background.secondary};
    flex-wrap: wrap;
  `,
  headerStats: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    span {
      vertical-align: middle;
    }

    ${theme.breakpoints.down('sm')} {
      order: 2;
      width: 100%;
      padding-left: ${theme.spacing(1)};
    }
  `,
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
    margin-bottom: 0;
  `,
  spacer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
  `,
  collapseToggle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background: none;
    border: none;
    margin-top: -${theme.spacing(1)};
    margin-bottom: -${theme.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,
  dataSourceIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: ${theme.spacing(2)};
    height: ${theme.spacing(2)};
    margin-left: ${theme.spacing(2)};
  `,
  dataSourceOrigin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: 1em;
    color: ${theme.colors.text.disabled};
  `,
  actionsSeparator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: 0 ${theme.spacing(2)};
  `,
  actionIcons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * + * {
      margin-left: ${theme.spacing(0.5)};
    }
  `,
  rulesTable: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(3)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesTable": () => (/* binding */ RulesTable),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _RuleLocation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
/* harmony import */ var _RuleDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetails.tsx");
/* harmony import */ var _RuleHealth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
/* harmony import */ var _RuleState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _ProvisioningBadge;
















const RulesTable = ({
  rules,
  className,
  showGuidelines = false,
  emptyMessage = 'No rules found.',
  showGroupColumn = false,
  showSummaryColumn = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const wrapperClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.wrapper, className, {
    [styles.wrapperMargin]: showGuidelines
  });
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const seenKeys = [];
    return rules.map((rule, ruleIdx) => {
      var _rule$promRule;

      let key = JSON.stringify([(_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.type, rule.labels, rule.query, rule.name, rule.annotations]);

      if (seenKeys.includes(key)) {
        key += `-${ruleIdx}`;
      }

      seenKeys.push(key);
      return {
        id: key,
        data: rule
      };
    });
  }, [rules]);
  const columns = useColumns(showSummaryColumn, showGroupColumn);

  if (!rules.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(wrapperClass, styles.emptyMessage),
      children: emptyMessage
    });
  }

  const TableComponent = showGuidelines ? _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_8__.DynamicTableWithGuidelines : _DynamicTable__WEBPACK_IMPORTED_MODULE_7__.DynamicTable;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
    className: wrapperClass,
    "data-testid": "rules-table",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(TableComponent, {
      cols: columns,
      isExpandable: true,
      items: items,
      renderExpandedContent: ({
        data: rule
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_RuleDetails__WEBPACK_IMPORTED_MODULE_11__.RuleDetails, {
        rule: rule
      }),
      pagination: {
        itemsPerPage: _core_constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PER_PAGE_PAGINATION
      },
      paginationStyles: styles.pagination
    })
  });
};
const getStyles = theme => ({
  wrapperMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.breakpoints.up('md')} {
      margin-left: 36px;
    }
  `,
  emptyMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(1)};
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: auto;
    border-radius: ${theme.shape.borderRadius()};
  `,
  pagination: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    margin: 0;
    padding-top: ${theme.spacing(1)};
    padding-bottom: ${theme.spacing(0.25)};
    justify-content: center;
    border-left: 1px solid ${theme.colors.border.strong};
    border-right: 1px solid ${theme.colors.border.strong};
    border-bottom: 1px solid ${theme.colors.border.strong};
  `
});

function useColumns(showSummaryColumn, showGroupColumn) {
  const hasRuler = (0,_hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_4__.useHasRuler)();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const columns = [{
      id: 'state',
      label: 'State',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: rule
      }) => {
        const {
          namespace
        } = rule;
        const {
          rulesSource
        } = namespace;
        const {
          promRule,
          rulerRule
        } = rule;
        const isDeleting = !!(hasRuler(rulesSource) && promRule && !rulerRule);
        const isCreating = !!(hasRuler(rulesSource) && rulerRule && !promRule);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_RuleState__WEBPACK_IMPORTED_MODULE_13__.RuleState, {
          rule: rule,
          isDeleting: isDeleting,
          isCreating: isCreating
        });
      },
      size: '165px'
    }, {
      id: 'name',
      label: 'Name',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: rule
      }) => rule.name,
      size: 5
    }, {
      id: 'provisioned',
      label: '',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: rule
      }) => {
        const rulerRule = rule.rulerRule;
        const isGrafanaManagedRule = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.isGrafanaRulerRule)(rulerRule);

        if (!isGrafanaManagedRule) {
          return null;
        }

        const provenance = rulerRule.grafana_alert.provenance;
        return provenance ? _ProvisioningBadge || (_ProvisioningBadge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_9__.ProvisioningBadge, {})) : null;
      },
      size: '100px'
    }, {
      id: 'health',
      label: 'Health',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: {
          promRule
        }
      }) => promRule ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_RuleHealth__WEBPACK_IMPORTED_MODULE_12__.RuleHealth, {
        rule: promRule
      }) : null,
      size: '75px'
    }];

    if (showSummaryColumn) {
      columns.push({
        id: 'summary',
        label: 'Summary',
        // eslint-disable-next-line react/display-name
        renderCell: ({
          data: rule
        }) => {
          var _rule$annotations$Ann;

          return (_rule$annotations$Ann = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_5__.Annotation.summary]) !== null && _rule$annotations$Ann !== void 0 ? _rule$annotations$Ann : '';
        },
        size: 5
      });
    }

    if (showGroupColumn) {
      columns.push({
        id: 'group',
        label: 'Group',
        // eslint-disable-next-line react/display-name
        renderCell: ({
          data: rule
        }) => {
          const {
            namespace,
            group
          } = rule; // ungrouped rules are rules that are in the "default" group name

          const isUngrouped = group.name === 'default';
          const groupName = isUngrouped ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_10__.RuleLocation, {
            namespace: namespace.name
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_10__.RuleLocation, {
            namespace: namespace.name,
            group: group.name
          });
          return groupName;
        },
        size: 5
      });
    }

    return columns;
  }, [hasRuler, showSummaryColumn, showGroupColumn]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/StateHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateHistory": () => (/* binding */ StateHistory)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts");
/* harmony import */ var _AlertLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabel.tsx");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder;














const StateHistory = ({
  alertId
}) => {
  const {
    loading,
    error,
    result = []
  } = (0,_hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_5__.useManagedAlertStateHistory)(alertId);

  if (loading && !error) {
    return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LoadingPlaceholder, {
      text: 'Loading history...'
    }));
  }

  if (error && !loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      title: 'Failed to fetch alert state history',
      children: error.message
    });
  }

  const columns = [{
    id: 'state',
    label: 'State',
    size: 'max-content',
    renderCell: renderStateCell
  }, {
    id: 'value',
    label: '',
    size: 'auto',
    renderCell: renderValueCell
  }, {
    id: 'timestamp',
    label: 'Time',
    size: 'max-content',
    renderCell: renderTimestampCell
  }];
  const items = result.reduce((acc, item, index) => {
    acc.push({
      id: String(item.id),
      state: item.newState,
      text: item.text,
      data: item.data,
      timestamp: item.updated
    }); // if the preceding state is not the same, create a separate state entry – this likely means the state was reset

    if (!hasMatchingPrecedingState(index, result)) {
      acc.push({
        id: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)(),
        state: item.prevState
      });
    }

    return acc;
  }, []).map(historyItem => ({
    id: historyItem.id,
    data: historyItem
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_7__.DynamicTable, {
    cols: columns,
    items: items
  });
};

function renderValueCell(item) {
  var _item$data$data$evalM, _item$data$data;

  const matches = (_item$data$data$evalM = (_item$data$data = item.data.data) === null || _item$data$data === void 0 ? void 0 : _item$data$data.evalMatches) !== null && _item$data$data$evalM !== void 0 ? _item$data$data$evalM : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [item.data.text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(LabelsWrapper, {
      children: matches.map(match => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AlertLabel__WEBPACK_IMPORTED_MODULE_6__.AlertLabel, {
        labelKey: match.metric,
        value: String(match.value)
      }, match.metric))
    })]
  });
}

function renderStateCell(item) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_8__.AlertStateTag, {
    state: item.data.state
  });
}

function renderTimestampCell(item) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: TimestampStyle,
    children: item.data.timestamp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
      children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormat)(item.data.timestamp)
    })
  });
}

const LabelsWrapper = ({
  children
}) => {
  const {
    wrapper
  } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: wrapper,
    children: children
  });
};

const TimestampStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * {
      margin-right: ${theme.spacing.xs};
    }
  `
}); // this function will figure out if a given historyItem has a preceding historyItem where the states match - in other words
// the newState of the previous historyItem is the same as the prevState of the current historyItem


function hasMatchingPrecedingState(index, items) {
  const currentHistoryItem = items[index];
  const previousHistoryItem = items[index + 1];

  if (!previousHistoryItem) {
    return false;
  }

  return previousHistoryItem.newState === currentHistoryItem.prevState;
}



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/useCombinedGroupNamespace.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCombinedGroupNamespace": () => (/* binding */ useCombinedGroupNamespace)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function useCombinedGroupNamespace(namespaces) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => namespaces.flatMap(ns => ns.groups.map(g => ({
    namespace: ns,
    group: g
  }))), [namespaces]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flattenGrafanaManagedRules": () => (/* binding */ flattenGrafanaManagedRules),
/* harmony export */   "sortRulesByName": () => (/* binding */ sortRulesByName),
/* harmony export */   "useCombinedRuleNamespaces": () => (/* binding */ useCombinedRuleNamespaces)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




// this little monster combines prometheus rules and ruler rules to produce a unified data structure
// can limit to a single rules source
function useCombinedRuleNamespaces(rulesSourceName) {
  const promRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.rulerRules); // cache results per rules source, so we only recalculate those for which results have actually changed

  const cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const rulesSources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (rulesSourceName) {
      const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getRulesSourceByName)(rulesSourceName);

      if (!rulesSource) {
        throw new Error(`Unknown rules source: ${rulesSourceName}`);
      }

      return [rulesSource];
    }

    return (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getAllRulesSources)();
  }, [rulesSourceName]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => rulesSources.map(rulesSource => {
    var _promRulesResponses$r, _rulerRulesResponses$;

    const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isCloudRulesSource)(rulesSource) ? rulesSource.name : rulesSource;
    const promRules = (_promRulesResponses$r = promRulesResponses[rulesSourceName]) === null || _promRulesResponses$r === void 0 ? void 0 : _promRulesResponses$r.result;
    const rulerRules = (_rulerRulesResponses$ = rulerRulesResponses[rulesSourceName]) === null || _rulerRulesResponses$ === void 0 ? void 0 : _rulerRulesResponses$.result;
    const cached = cache.current[rulesSourceName];

    if (cached && cached.promRules === promRules && cached.rulerRules === rulerRules) {
      return cached.result;
    }

    const namespaces = {}; // first get all the ruler rules in

    Object.entries(rulerRules || {}).forEach(([namespaceName, groups]) => {
      const namespace = {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      namespaces[namespaceName] = namespace;
      addRulerGroupsToCombinedNamespace(namespace, groups);
    }); // then correlate with prometheus rules

    promRules === null || promRules === void 0 ? void 0 : promRules.forEach(({
      name: namespaceName,
      groups
    }) => {
      const ns = namespaces[namespaceName] = namespaces[namespaceName] || {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      addPromGroupsToCombinedNamespace(ns, groups);
    });
    const result = Object.values(namespaces);
    cache.current[rulesSourceName] = {
      promRules,
      rulerRules,
      result
    };
    return result;
  }).flat(), [promRulesResponses, rulerRulesResponses, rulesSources]);
} // merge all groups in case of grafana managed, essentially treating namespaces (folders) as groups

function flattenGrafanaManagedRules(namespaces) {
  return namespaces.map(namespace => {
    const newNamespace = Object.assign({}, namespace, {
      groups: []
    }); // add default group with ungrouped rules

    newNamespace.groups.push({
      name: 'default',
      rules: sortRulesByName(namespace.groups.flatMap(group => group.rules))
    });
    return newNamespace;
  });
}
function sortRulesByName(rules) {
  return rules.sort((a, b) => a.name.localeCompare(b.name));
}

function addRulerGroupsToCombinedNamespace(namespace, groups) {
  namespace.groups = groups.map(group => {
    const combinedGroup = {
      name: group.name,
      interval: group.interval,
      source_tenants: group.source_tenants,
      rules: []
    };
    combinedGroup.rules = group.rules.map(rule => rulerRuleToCombinedRule(rule, namespace, combinedGroup));
    return combinedGroup;
  });
}

function addPromGroupsToCombinedNamespace(namespace, groups) {
  groups.forEach(group => {
    var _group$rules;

    let combinedGroup = namespace.groups.find(g => g.name === group.name);

    if (!combinedGroup) {
      combinedGroup = {
        name: group.name,
        rules: []
      };
      namespace.groups.push(combinedGroup);
    }

    ((_group$rules = group.rules) !== null && _group$rules !== void 0 ? _group$rules : []).forEach(rule => {
      const existingRule = getExistingRuleInGroup(rule, combinedGroup, namespace.rulesSource);

      if (existingRule) {
        existingRule.promRule = rule;
      } else {
        combinedGroup.rules.push(promRuleToCombinedRule(rule, namespace, combinedGroup));
      }
    });
  });
}

function promRuleToCombinedRule(rule, namespace, group) {
  return {
    name: rule.name,
    query: rule.query,
    labels: rule.labels || {},
    annotations: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {},
    promRule: rule,
    namespace: namespace,
    group
  };
}

function rulerRuleToCombinedRule(rule, namespace, group) {
  return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRulerRule)(rule) ? {
    name: rule.alert,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  } : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isRecordingRulerRule)(rule) ? {
    name: rule.record,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: {},
    rulerRule: rule,
    namespace,
    group
  } : {
    name: rule.grafana_alert.title,
    query: '',
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  };
} // find existing rule in group that matches the given prom rule


function getExistingRuleInGroup(rule, group, rulesSource) {
  var _rules$find;

  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isGrafanaRulesSource)(rulesSource)) {
    // assume grafana groups have only the one rule. check name anyway because paranoid
    return group.rules.find(existingRule => existingRule.name === rule.name);
  }

  return (// try finding a rule that matches name, labels, annotations and query
    (_rules$find = group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, true))) !== null && _rules$find !== void 0 ? _rules$find : // if that fails, try finding a rule that only matches name, labels and annotations.
    // loki & prom can sometimes modify the query so it doesnt match, eg `2 > 1` becomes `1`
    group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, false))
  );
}

function isCombinedRuleEqualToPromRule(combinedRule, rule, checkQuery = true) {
  if (combinedRule.name === rule.name) {
    return JSON.stringify([checkQuery ? hashQuery(combinedRule.query) : '', combinedRule.labels, combinedRule.annotations]) === JSON.stringify([checkQuery ? hashQuery(rule.query) : '', rule.labels || {}, (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {}]);
  }

  return false;
} // there can be slight differences in how prom & ruler render a query, this will hash them accounting for the differences


function hashQuery(query) {
  // one of them might be wrapped in parens
  if (query.length > 1 && query[0] === '(' && query[query.length - 1] === ')') {
    query = query.slice(1, -1);
  } // whitespace could be added or removed


  query = query.replace(/\s|\n/g, ''); // labels matchers can be reordered, so sort the enitre string, esentially comparing just the character counts

  return query.split('').sort().join('');
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useFilteredRules.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFilteredRules": () => (/* binding */ useFilteredRules)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");








const useFilteredRules = namespaces => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_2__.useQueryParams)();
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.getFiltersFromUrlParams)(queryParams);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const filteredNamespaces = namespaces // Filter by data source
    // TODO: filter by multiple data sources for grafana-managed alerts
    .filter(({
      rulesSource
    }) => filters.dataSource && (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isCloudRulesSource)(rulesSource) ? rulesSource.name === filters.dataSource : true) // If a namespace and group have rules that match the rules filters then keep them.
    .reduce(reduceNamespaces(filters), []);
    return filteredNamespaces;
  }, [namespaces, filters]);
};

const reduceNamespaces = filters => {
  return (namespaceAcc, namespace) => {
    const groups = namespace.groups.reduce(reduceGroups(filters), []);

    if (groups.length) {
      namespaceAcc.push(Object.assign({}, namespace, {
        groups
      }));
    }

    return namespaceAcc;
  };
}; // Reduces groups to only groups that have rules matching the filters


const reduceGroups = filters => {
  return (groupAcc, group) => {
    const rules = group.rules.filter(rule => {
      var _rule$promRule;

      if (filters.ruleType && filters.ruleType !== ((_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.type)) {
        return false;
      }

      if (filters.dataSource && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_7__.isGrafanaRulerRule)(rule.rulerRule) && !isQueryingDataSource(rule.rulerRule, filters)) {
        return false;
      } // Query strings can match alert name, label keys, and label values


      if (filters.queryString) {
        var _rule$name;

        const normalizedQueryString = filters.queryString.toLocaleLowerCase();
        const doesNameContainsQueryString = (_rule$name = rule.name) === null || _rule$name === void 0 ? void 0 : _rule$name.toLocaleLowerCase().includes(normalizedQueryString);
        const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.parseMatchers)(filters.queryString);
        const doRuleLabelsMatchQuery = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.labelsMatchMatchers)(rule.labels, matchers);
        const doAlertsContainMatchingLabels = rule.promRule && rule.promRule.type === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.PromRuleType.Alerting && rule.promRule.alerts && rule.promRule.alerts.some(alert => (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.labelsMatchMatchers)(alert.labels, matchers));

        if (!(doesNameContainsQueryString || doRuleLabelsMatchQuery || doAlertsContainMatchingLabels)) {
          return false;
        }
      }

      if (filters.alertState && !(rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_7__.isAlertingRule)(rule.promRule) && rule.promRule.state === filters.alertState)) {
        return false;
      }

      return true;
    }); // Add rules to the group that match the rule list filters

    if (rules.length) {
      groupAcc.push(Object.assign({}, group, {
        rules
      }));
    }

    return groupAcc;
  };
};

const isQueryingDataSource = (rulerRule, filter) => {
  if (!filter.dataSource) {
    return true;
  }

  return !!rulerRule.grafana_alert.data.find(query => {
    if (!query.datasourceUid) {
      return false;
    }

    const ds = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    return (ds === null || ds === void 0 ? void 0 : ds.name) === filter.dataSource;
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useFolder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFolder": () => (/* binding */ useFolder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useFolder(uid) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const folderRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.folders);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uid) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchFolderIfNotFetchedAction)(uid));
    }
  }, [dispatch, uid]);

  if (uid) {
    const request = folderRequests[uid] || _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
    return {
      folder: request.result,
      loading: request.loading
    };
  }

  return {
    loading: false
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useHasRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHasRuler": () => (/* binding */ useHasRuler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");


 // datasource has ruler if it's grafana managed or if we're able to load rules from it

function useHasRuler() {
  const rulerRules = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__.useUnifiedAlertingSelector)(state => state.rulerRules);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(rulesSource => {
    var _rulerRules$rulesSour;

    const rulesSourceName = typeof rulesSource === 'string' ? rulesSource : rulesSource.name;
    return rulesSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_1__.GRAFANA_RULES_SOURCE_NAME || !!((_rulerRules$rulesSour = rulerRules[rulesSourceName]) !== null && _rulerRules$rulesSour !== void 0 && _rulerRules$rulesSour.result);
  }, [rulerRules]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsRuleEditable": () => (/* binding */ useIsRuleEditable)
/* harmony export */ });
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useFolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useIsRuleEditable(rulesSourceName, rule) {
  var _dataSources$rulesSou, _dataSources$rulesSou2, _dataSources$rulesSou3;

  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.dataSources);
  const folderUID = rule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule) ? rule.grafana_alert.namespace_uid : undefined;
  const rulePermission = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesPermissions)(rulesSourceName);
  const {
    folder,
    loading
  } = (0,_useFolder__WEBPACK_IMPORTED_MODULE_3__.useFolder)(folderUID);

  if (!rule) {
    return {
      isEditable: false,
      isRemovable: false,
      loading: false
    };
  } // Grafana rules can be edited if user can edit the folder they're in
  // When RBAC is disabled access to a folder is the only requirement for managing rules
  // When RBAC is enabled the appropriate alerting permissions need to be met


  if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule)) {
    var _folder$canSave, _folder$canSave2;

    if (!folderUID) {
      throw new Error(`Rule ${rule.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);
    }

    const canEditGrafanaRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.update, (_folder$canSave = folder === null || folder === void 0 ? void 0 : folder.canSave) !== null && _folder$canSave !== void 0 ? _folder$canSave : false);
    const canRemoveGrafanaRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.delete, (_folder$canSave2 = folder === null || folder === void 0 ? void 0 : folder.canSave) !== null && _folder$canSave2 !== void 0 ? _folder$canSave2 : false);
    return {
      isEditable: canEditGrafanaRules,
      isRemovable: canRemoveGrafanaRules,
      loading
    };
  } // prom rules are only editable by users with Editor role and only if rules source supports editing


  const isRulerAvailable = Boolean((_dataSources$rulesSou = dataSources[rulesSourceName]) === null || _dataSources$rulesSou === void 0 ? void 0 : (_dataSources$rulesSou2 = _dataSources$rulesSou.result) === null || _dataSources$rulesSou2 === void 0 ? void 0 : _dataSources$rulesSou2.rulerConfig);
  const canEditCloudRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.update, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  const canRemoveCloudRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.delete, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  return {
    isEditable: canEditCloudRules && isRulerAvailable,
    isRemovable: canRemoveCloudRules && isRulerAvailable,
    loading: (_dataSources$rulesSou3 = dataSources[rulesSourceName]) === null || _dataSources$rulesSou3 === void 0 ? void 0 : _dataSources$rulesSou3.loading
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useManagedAlertStateHistory": () => (/* binding */ useManagedAlertStateHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




function useManagedAlertStateHistory(alertId) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const history = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.managedAlertStateHistory);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchGrafanaAnnotationsAction)(alertId));
  }, [dispatch, alertId]);
  return history;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useStateHistoryModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStateHistoryModal": () => (/* binding */ useStateHistoryModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_rules_StateHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/StateHistory.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function useStateHistoryModal(alertId) {
  var _StateHistory;

  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const StateHistoryModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isOpen: showModal,
    onDismiss: () => setShowModal(false),
    closeOnBackdropClick: true,
    closeOnEscape: true,
    title: "State history",
    children: _StateHistory || (_StateHistory = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_rules_StateHistory__WEBPACK_IMPORTED_MODULE_2__.StateHistory, {
      alertId: alertId
    }))
  }), [alertId, showModal]);
  return {
    StateHistoryModal,
    showStateHistoryModal: () => setShowModal(true),
    hideStateHistoryModal: () => setShowModal(false)
  };
}



/***/ }),

/***/ "./public/app/features/alerting/unified/utils/accessControlHooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRulesAccess": () => (/* binding */ useRulesAccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");


function useRulesAccess() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesAccess)(), []);
}

/***/ }),

/***/ "./public/app/plugins/datasource/loki/syntax.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FUNCTIONS": () => (/* binding */ FUNCTIONS),
/* harmony export */   "LOKI_KEYWORDS": () => (/* binding */ LOKI_KEYWORDS),
/* harmony export */   "PIPE_OPERATORS": () => (/* binding */ PIPE_OPERATORS),
/* harmony export */   "PIPE_PARSERS": () => (/* binding */ PIPE_PARSERS),
/* harmony export */   "RANGE_VEC_FUNCTIONS": () => (/* binding */ RANGE_VEC_FUNCTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lokiGrammar": () => (/* binding */ lokiGrammar)
/* harmony export */ });
const AGGREGATION_OPERATORS = [{
  label: 'sum',
  insertText: 'sum',
  documentation: 'Calculate sum over dimensions'
}, {
  label: 'min',
  insertText: 'min',
  documentation: 'Select minimum over dimensions'
}, {
  label: 'max',
  insertText: 'max',
  documentation: 'Select maximum over dimensions'
}, {
  label: 'avg',
  insertText: 'avg',
  documentation: 'Calculate the average over dimensions'
}, {
  label: 'stddev',
  insertText: 'stddev',
  documentation: 'Calculate population standard deviation over dimensions'
}, {
  label: 'stdvar',
  insertText: 'stdvar',
  documentation: 'Calculate population standard variance over dimensions'
}, {
  label: 'count',
  insertText: 'count',
  documentation: 'Count number of elements in the vector'
}, {
  label: 'bottomk',
  insertText: 'bottomk',
  documentation: 'Smallest k elements by sample value'
}, {
  label: 'topk',
  insertText: 'topk',
  documentation: 'Largest k elements by sample value'
}];
const PIPE_PARSERS = [{
  label: 'json',
  insertText: 'json',
  documentation: 'Extracting labels from the log line using json parser. Only available in Loki 2.0+.'
}, {
  label: 'regexp',
  insertText: 'regexp ""',
  documentation: 'Extracting labels from the log line using regexp parser. Only available in Loki 2.0+.',
  move: -1
}, {
  label: 'logfmt',
  insertText: 'logfmt',
  documentation: 'Extracting labels from the log line using logfmt parser. Only available in Loki 2.0+.'
}, {
  label: 'pattern',
  insertText: 'pattern',
  documentation: 'Extracting labels from the log line using pattern parser. Only available in Loki 2.3+.'
}, {
  label: 'unpack',
  insertText: 'unpack',
  detail: 'unpack identifier',
  documentation: 'Parses a JSON log line, unpacking all embedded labels in the pack stage. A special property "_entry" will also be used to replace the original log line. Only available in Loki 2.2+.'
}];
const PIPE_OPERATORS = [{
  label: 'unwrap',
  insertText: 'unwrap',
  detail: 'unwrap identifier',
  documentation: 'Take labels and use the values as sample data for metric aggregations. Only available in Loki 2.0+.'
}, {
  label: 'label_format',
  insertText: 'label_format',
  documentation: 'Use to rename, modify or add labels. For example, | label_format foo=bar . Only available in Loki 2.0+.'
}, {
  label: 'line_format',
  insertText: 'line_format',
  documentation: 'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" . Only available in Loki 2.0+.'
}];
const RANGE_VEC_FUNCTIONS = [{
  insertText: 'avg_over_time',
  label: 'avg_over_time',
  detail: 'avg_over_time(range-vector)',
  documentation: 'The average of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'min_over_time',
  label: 'min_over_time',
  detail: 'min_over_time(range-vector)',
  documentation: 'The minimum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'max_over_time',
  label: 'max_over_time',
  detail: 'max_over_time(range-vector)',
  documentation: 'The maximum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'first_over_time',
  label: 'first_over_time',
  detail: 'first_over_time(range-vector)',
  documentation: 'The first of all values in the specified interval. Only available in Loki 2.3+.'
}, {
  insertText: 'last_over_time',
  label: 'last_over_time',
  detail: 'last_over_time(range-vector)',
  documentation: 'The last of all values in the specified interval. Only available in Loki 2.3+.'
}, {
  insertText: 'sum_over_time',
  label: 'sum_over_time',
  detail: 'sum_over_time(range-vector)',
  documentation: 'The sum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'count_over_time',
  label: 'count_over_time',
  detail: 'count_over_time(range-vector)',
  documentation: 'The count of all values in the specified interval.'
}, {
  insertText: 'stdvar_over_time',
  label: 'stdvar_over_time',
  detail: 'stdvar_over_time(range-vector)',
  documentation: 'The population standard variance of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'stddev_over_time',
  label: 'stddev_over_time',
  detail: 'stddev_over_time(range-vector)',
  documentation: 'The population standard deviation of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'quantile_over_time',
  label: 'quantile_over_time',
  detail: 'quantile_over_time(scalar, range-vector)',
  documentation: 'The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'bytes_over_time',
  label: 'bytes_over_time',
  detail: 'bytes_over_time(range-vector)',
  documentation: 'Counts the amount of bytes used by each log stream for a given range'
}, {
  insertText: 'bytes_rate',
  label: 'bytes_rate',
  detail: 'bytes_rate(range-vector)',
  documentation: 'Calculates the number of bytes per second for each stream.'
}, {
  insertText: 'rate',
  label: 'rate',
  detail: 'rate(v range-vector)',
  documentation: 'Calculates the number of entries per second.'
}];
const FUNCTIONS = [...AGGREGATION_OPERATORS, ...RANGE_VEC_FUNCTIONS];
const LOKI_KEYWORDS = [...FUNCTIONS, ...PIPE_OPERATORS, ...PIPE_PARSERS].map(keyword => keyword.label);
const lokiGrammar = {
  comment: {
    pattern: /#.*/
  },
  'context-aggregation': {
    pattern: /((without|by)\s*)\([^)]*\)/,
    // by ()
    lookbehind: true,
    inside: {
      'label-key': {
        pattern: /[^(),\s][^,)]*[^),\s]*/,
        alias: 'attr-name'
      },
      punctuation: /[()]/
    }
  },
  'context-labels': {
    pattern: /\{[^}]*(?=}?)/,
    greedy: true,
    inside: {
      comment: {
        pattern: /#.*/
      },
      'label-key': {
        pattern: /[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,
        alias: 'attr-name',
        greedy: true
      },
      'label-value': {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true,
        alias: 'attr-value'
      },
      punctuation: /[{]/
    }
  },
  'context-pipe': {
    pattern: /\s\|[^=~]\s?\w*/i,
    inside: {
      'pipe-operator': {
        pattern: /\|/i,
        alias: 'operator'
      },
      'pipe-operations': {
        pattern: new RegExp(`${[...PIPE_PARSERS, ...PIPE_OPERATORS].map(f => f.label).join('|')}`, 'i'),
        alias: 'keyword'
      }
    }
  },
  function: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})(?=\\s*\\()`, 'i'),
  'context-range': [{
    pattern: /\[[^\]]*(?=\])/,
    // [1m]
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    // offset 1m
    lookbehind: true,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }],
  quote: {
    pattern: /"(?:\\.|[^\\"])*"/,
    alias: 'string',
    greedy: true
  },
  backticks: {
    pattern: /`(?:\\.|[^\\`])*`/,
    alias: 'string',
    greedy: true
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  operator: /\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,
  punctuation: /[{}(),.]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lokiGrammar);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/promql.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FUNCTIONS": () => (/* binding */ FUNCTIONS),
/* harmony export */   "LOGICAL_OPERATORS": () => (/* binding */ LOGICAL_OPERATORS),
/* harmony export */   "OPERATORS": () => (/* binding */ OPERATORS),
/* harmony export */   "PROM_KEYWORDS": () => (/* binding */ PROM_KEYWORDS),
/* harmony export */   "RATE_RANGES": () => (/* binding */ RATE_RANGES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "promqlGrammar": () => (/* binding */ promqlGrammar)
/* harmony export */ });
// When changing RATE_RANGES, check if Loki/LogQL ranges should be changed too
// @see public/app/plugins/datasource/loki/language_provider.ts
const RATE_RANGES = [{
  label: '$__interval',
  sortValue: '$__interval'
}, {
  label: '$__rate_interval',
  sortValue: '$__rate_interval'
}, {
  label: '$__range',
  sortValue: '$__range'
}, {
  label: '1m',
  sortValue: '00:01:00'
}, {
  label: '5m',
  sortValue: '00:05:00'
}, {
  label: '10m',
  sortValue: '00:10:00'
}, {
  label: '30m',
  sortValue: '00:30:00'
}, {
  label: '1h',
  sortValue: '01:00:00'
}, {
  label: '1d',
  sortValue: '24:00:00'
}];
const OPERATORS = ['by', 'group_left', 'group_right', 'ignoring', 'on', 'offset', 'without'];
const LOGICAL_OPERATORS = ['or', 'and', 'unless'];
const TRIGONOMETRIC_FUNCTIONS = [{
  label: 'acos',
  insertText: 'acos',
  detail: 'acos(v instant-vector)',
  documentation: 'calculates the arccosine of all elements in v'
}, {
  label: 'acosh',
  insertText: 'acosh',
  detail: 'acosh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic cosine of all elements in v'
}, {
  label: 'asin',
  insertText: 'asin',
  detail: 'asin(v instant-vector)',
  documentation: 'calculates the arcsine of all elements in v'
}, {
  label: 'asinh',
  insertText: 'asinh',
  detail: 'asinh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic sine of all elements in v'
}, {
  label: 'atan',
  insertText: 'atan',
  detail: 'atan(v instant-vector)',
  documentation: 'calculates the arctangent of all elements in v'
}, {
  label: 'atanh',
  insertText: 'atanh',
  detail: 'atanh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic tangent of all elements in v'
}, {
  label: 'cos',
  insertText: 'cos',
  detail: 'cos(v instant-vector)',
  documentation: 'calculates the cosine of all elements in v'
}, {
  label: 'cosh',
  insertText: 'cosh',
  detail: 'cosh(v instant-vector)',
  documentation: 'calculates the hyperbolic cosine of all elements in v'
}, {
  label: 'sin',
  insertText: 'sin',
  detail: 'sin(v instant-vector)',
  documentation: 'calculates the sine of all elements in v'
}, {
  label: 'sinh',
  insertText: 'sinh',
  detail: 'sinh(v instant-vector)',
  documentation: 'calculates the hyperbolic sine of all elements in v'
}, {
  label: 'tan',
  insertText: 'tan',
  detail: 'tan(v instant-vector)',
  documentation: 'calculates the tangent of all elements in v'
}, {
  label: 'tanh',
  insertText: 'tanh',
  detail: 'tanh(v instant-vector)',
  documentation: 'calculates the hyperbolic tangent of all elements in v'
}];
const AGGREGATION_OPERATORS = [{
  label: 'sum',
  insertText: 'sum',
  documentation: 'Calculate sum over dimensions'
}, {
  label: 'min',
  insertText: 'min',
  documentation: 'Select minimum over dimensions'
}, {
  label: 'max',
  insertText: 'max',
  documentation: 'Select maximum over dimensions'
}, {
  label: 'avg',
  insertText: 'avg',
  documentation: 'Calculate the average over dimensions'
}, {
  label: 'group',
  insertText: 'group',
  documentation: 'All values in the resulting vector are 1'
}, {
  label: 'stddev',
  insertText: 'stddev',
  documentation: 'Calculate population standard deviation over dimensions'
}, {
  label: 'stdvar',
  insertText: 'stdvar',
  documentation: 'Calculate population standard variance over dimensions'
}, {
  label: 'count',
  insertText: 'count',
  documentation: 'Count number of elements in the vector'
}, {
  label: 'count_values',
  insertText: 'count_values',
  documentation: 'Count number of elements with the same value'
}, {
  label: 'bottomk',
  insertText: 'bottomk',
  documentation: 'Smallest k elements by sample value'
}, {
  label: 'topk',
  insertText: 'topk',
  documentation: 'Largest k elements by sample value'
}, {
  label: 'quantile',
  insertText: 'quantile',
  documentation: 'Calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions'
}];
const FUNCTIONS = [...AGGREGATION_OPERATORS, ...TRIGONOMETRIC_FUNCTIONS, {
  insertText: 'abs',
  label: 'abs',
  detail: 'abs(v instant-vector)',
  documentation: 'Returns the input vector with all sample values converted to their absolute value.'
}, {
  insertText: 'absent',
  label: 'absent',
  detail: 'absent(v instant-vector)',
  documentation: 'Returns an empty vector if the vector passed to it has any elements and a 1-element vector with the value 1 if the vector passed to it has no elements. This is useful for alerting on when no time series exist for a given metric name and label combination.'
}, {
  insertText: 'absent_over_time',
  label: 'absent_over_time',
  detail: 'absent(v range-vector)',
  documentation: 'Returns an empty vector if the range vector passed to it has any elements and a 1-element vector with the value 1 if the range vector passed to it has no elements.'
}, {
  insertText: 'ceil',
  label: 'ceil',
  detail: 'ceil(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` up to the nearest integer.'
}, {
  insertText: 'changes',
  label: 'changes',
  detail: 'changes(v range-vector)',
  documentation: 'For each input time series, `changes(v range-vector)` returns the number of times its value has changed within the provided time range as an instant vector.'
}, {
  insertText: 'clamp',
  label: 'clamp',
  detail: 'clamp(v instant-vector, min scalar, max scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have a lower limit of `min` and an upper limit of `max`.'
}, {
  insertText: 'clamp_max',
  label: 'clamp_max',
  detail: 'clamp_max(v instant-vector, max scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have an upper limit of `max`.'
}, {
  insertText: 'clamp_min',
  label: 'clamp_min',
  detail: 'clamp_min(v instant-vector, min scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have a lower limit of `min`.'
}, {
  insertText: 'count_scalar',
  label: 'count_scalar',
  detail: 'count_scalar(v instant-vector)',
  documentation: 'Returns the number of elements in a time series vector as a scalar. This is in contrast to the `count()` aggregation operator, which always returns a vector (an empty one if the input vector is empty) and allows grouping by labels via a `by` clause.'
}, {
  insertText: 'deg',
  label: 'deg',
  detail: 'deg(v instant-vector)',
  documentation: 'Converts radians to degrees for all elements in v'
}, {
  insertText: 'day_of_month',
  label: 'day_of_month',
  detail: 'day_of_month(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the month for each of the given times in UTC. Returned values are from 1 to 31.'
}, {
  insertText: 'day_of_week',
  label: 'day_of_week',
  detail: 'day_of_week(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the week for each of the given times in UTC. Returned values are from 0 to 6, where 0 means Sunday etc.'
}, {
  insertText: 'days_in_month',
  label: 'days_in_month',
  detail: 'days_in_month(v=vector(time()) instant-vector)',
  documentation: 'Returns number of days in the month for each of the given times in UTC. Returned values are from 28 to 31.'
}, {
  insertText: 'delta',
  label: 'delta',
  detail: 'delta(v range-vector)',
  documentation: 'Calculates the difference between the first and last value of each time series element in a range vector `v`, returning an instant vector with the given deltas and equivalent labels. The delta is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if the sample values are all integers.'
}, {
  insertText: 'deriv',
  label: 'deriv',
  detail: 'deriv(v range-vector)',
  documentation: 'Calculates the per-second derivative of the time series in a range vector `v`, using simple linear regression.'
}, {
  insertText: 'drop_common_labels',
  label: 'drop_common_labels',
  detail: 'drop_common_labels(instant-vector)',
  documentation: 'Drops all labels that have the same name and value across all series in the input vector.'
}, {
  insertText: 'exp',
  label: 'exp',
  detail: 'exp(v instant-vector)',
  documentation: 'Calculates the exponential function for all elements in `v`.\nSpecial cases are:\n* `Exp(+Inf) = +Inf` \n* `Exp(NaN) = NaN`'
}, {
  insertText: 'floor',
  label: 'floor',
  detail: 'floor(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` down to the nearest integer.'
}, {
  insertText: 'histogram_quantile',
  label: 'histogram_quantile',
  detail: 'histogram_quantile(φ float, b instant-vector)',
  documentation: 'Calculates the φ-quantile (0 ≤ φ ≤ 1) from the buckets `b` of a histogram. The samples in `b` are the counts of observations in each bucket. Each sample must have a label `le` where the label value denotes the inclusive upper bound of the bucket. (Samples without such a label are silently ignored.) The histogram metric type automatically provides time series with the `_bucket` suffix and the appropriate labels.'
}, {
  insertText: 'holt_winters',
  label: 'holt_winters',
  detail: 'holt_winters(v range-vector, sf scalar, tf scalar)',
  documentation: 'Produces a smoothed value for time series based on the range in `v`. The lower the smoothing factor `sf`, the more importance is given to old data. The higher the trend factor `tf`, the more trends in the data is considered. Both `sf` and `tf` must be between 0 and 1.'
}, {
  insertText: 'hour',
  label: 'hour',
  detail: 'hour(v=vector(time()) instant-vector)',
  documentation: 'Returns the hour of the day for each of the given times in UTC. Returned values are from 0 to 23.'
}, {
  insertText: 'idelta',
  label: 'idelta',
  detail: 'idelta(v range-vector)',
  documentation: 'Calculates the difference between the last two samples in the range vector `v`, returning an instant vector with the given deltas and equivalent labels.'
}, {
  insertText: 'increase',
  label: 'increase',
  detail: 'increase(v range-vector)',
  documentation: 'Calculates the increase in the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. The increase is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if a counter increases only by integer increments.'
}, {
  insertText: 'irate',
  label: 'irate',
  detail: 'irate(v range-vector)',
  documentation: 'Calculates the per-second instant rate of increase of the time series in the range vector. This is based on the last two data points. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for.'
}, {
  insertText: 'label_join',
  label: 'label_join',
  detail: 'label_join(v instant-vector, dst_label string, separator string, src_label_1 string, src_label_2 string, ...)',
  documentation: 'For each timeseries in `v`, joins all the values of all the `src_labels` using `separator` and returns the timeseries with the label `dst_label` containing the joined value. There can be any number of `src_labels` in this function.'
}, {
  insertText: 'label_replace',
  label: 'label_replace',
  detail: 'label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)',
  documentation: "For each timeseries in `v`, `label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)`  matches the regular expression `regex` against the label `src_label`.  If it matches, then the timeseries is returned with the label `dst_label` replaced by the expansion of `replacement`. `$1` is replaced with the first matching subgroup, `$2` with the second etc. If the regular expression doesn't match then the timeseries is returned unchanged."
}, {
  insertText: 'ln',
  label: 'ln',
  detail: 'ln(v instant-vector)',
  documentation: 'Calculates the natural logarithm for all elements in `v`.\nSpecial cases are:\n * `ln(+Inf) = +Inf`\n * `ln(0) = -Inf`\n * `ln(x < 0) = NaN`\n * `ln(NaN) = NaN`'
}, {
  insertText: 'log2',
  label: 'log2',
  detail: 'log2(v instant-vector)',
  documentation: 'Calculates the binary logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'log10',
  label: 'log10',
  detail: 'log10(v instant-vector)',
  documentation: 'Calculates the decimal logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'minute',
  label: 'minute',
  detail: 'minute(v=vector(time()) instant-vector)',
  documentation: 'Returns the minute of the hour for each of the given times in UTC. Returned values are from 0 to 59.'
}, {
  insertText: 'month',
  label: 'month',
  detail: 'month(v=vector(time()) instant-vector)',
  documentation: 'Returns the month of the year for each of the given times in UTC. Returned values are from 1 to 12, where 1 means January etc.'
}, {
  insertText: 'pi',
  label: 'pi',
  detail: 'pi()',
  documentation: 'Returns pi'
}, {
  insertText: 'predict_linear',
  label: 'predict_linear',
  detail: 'predict_linear(v range-vector, t scalar)',
  documentation: 'Predicts the value of time series `t` seconds from now, based on the range vector `v`, using simple linear regression.'
}, {
  insertText: 'rad',
  label: 'rad',
  detail: 'rad(v instant-vector)',
  documentation: 'Converts degrees to radians for all elements in v'
}, {
  insertText: 'rate',
  label: 'rate',
  detail: 'rate(v range-vector)',
  documentation: "Calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. Also, the calculation extrapolates to the ends of the time range, allowing for missed scrapes or imperfect alignment of scrape cycles with the range's time period."
}, {
  insertText: 'resets',
  label: 'resets',
  detail: 'resets(v range-vector)',
  documentation: 'For each input time series, `resets(v range-vector)` returns the number of counter resets within the provided time range as an instant vector. Any decrease in the value between two consecutive samples is interpreted as a counter reset.'
}, {
  insertText: 'round',
  label: 'round',
  detail: 'round(v instant-vector, to_nearest=1 scalar)',
  documentation: 'Rounds the sample values of all elements in `v` to the nearest integer. Ties are resolved by rounding up. The optional `to_nearest` argument allows specifying the nearest multiple to which the sample values should be rounded. This multiple may also be a fraction.'
}, {
  insertText: 'scalar',
  label: 'scalar',
  detail: 'scalar(v instant-vector)',
  documentation: 'Given a single-element input vector, `scalar(v instant-vector)` returns the sample value of that single element as a scalar. If the input vector does not have exactly one element, `scalar` will return `NaN`.'
}, {
  insertText: 'sgn',
  label: 'sgn',
  detail: 'sgn(v instant-vector)',
  documentation: 'Returns a vector with all sample values converted to their sign, defined as this: 1 if v is positive, -1 if v is negative and 0 if v is equal to zero.'
}, {
  insertText: 'sort',
  label: 'sort',
  detail: 'sort(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in ascending order.'
}, {
  insertText: 'sort_desc',
  label: 'sort_desc',
  detail: 'sort_desc(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in descending order.'
}, {
  insertText: 'sqrt',
  label: 'sqrt',
  detail: 'sqrt(v instant-vector)',
  documentation: 'Calculates the square root of all elements in `v`.'
}, {
  insertText: 'time',
  label: 'time',
  detail: 'time()',
  documentation: 'Returns the number of seconds since January 1, 1970 UTC. Note that this does not actually return the current time, but the time at which the expression is to be evaluated.'
}, {
  insertText: 'timestamp',
  label: 'timestamp',
  detail: 'timestamp(v instant-vector)',
  documentation: 'Returns the timestamp of each of the samples of the given vector as the number of seconds since January 1, 1970 UTC.'
}, {
  insertText: 'vector',
  label: 'vector',
  detail: 'vector(s scalar)',
  documentation: 'Returns the scalar `s` as a vector with no labels.'
}, {
  insertText: 'year',
  label: 'year',
  detail: 'year(v=vector(time()) instant-vector)',
  documentation: 'Returns the year for each of the given times in UTC.'
}, {
  insertText: 'avg_over_time',
  label: 'avg_over_time',
  detail: 'avg_over_time(range-vector)',
  documentation: 'The average value of all points in the specified interval.'
}, {
  insertText: 'min_over_time',
  label: 'min_over_time',
  detail: 'min_over_time(range-vector)',
  documentation: 'The minimum value of all points in the specified interval.'
}, {
  insertText: 'max_over_time',
  label: 'max_over_time',
  detail: 'max_over_time(range-vector)',
  documentation: 'The maximum value of all points in the specified interval.'
}, {
  insertText: 'sum_over_time',
  label: 'sum_over_time',
  detail: 'sum_over_time(range-vector)',
  documentation: 'The sum of all values in the specified interval.'
}, {
  insertText: 'count_over_time',
  label: 'count_over_time',
  detail: 'count_over_time(range-vector)',
  documentation: 'The count of all values in the specified interval.'
}, {
  insertText: 'quantile_over_time',
  label: 'quantile_over_time',
  detail: 'quantile_over_time(scalar, range-vector)',
  documentation: 'The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval.'
}, {
  insertText: 'stddev_over_time',
  label: 'stddev_over_time',
  detail: 'stddev_over_time(range-vector)',
  documentation: 'The population standard deviation of the values in the specified interval.'
}, {
  insertText: 'stdvar_over_time',
  label: 'stdvar_over_time',
  detail: 'stdvar_over_time(range-vector)',
  documentation: 'The population standard variance of the values in the specified interval.'
}, {
  insertText: 'last_over_time',
  label: 'last_over_time',
  detail: 'last_over_time(range-vector)',
  documentation: 'The most recent point value in specified interval.'
}];
const PROM_KEYWORDS = FUNCTIONS.map(keyword => keyword.label);
const promqlGrammar = {
  comment: {
    pattern: /#.*/
  },
  'context-aggregation': {
    pattern: /((by|without)\s*)\([^)]*\)/,
    // by ()
    lookbehind: true,
    inside: {
      'label-key': {
        pattern: /[^(),\s][^,)]*[^),\s]*/,
        alias: 'attr-name'
      },
      punctuation: /[()]/
    }
  },
  'context-labels': {
    pattern: /\{[^}]*(?=}?)/,
    greedy: true,
    inside: {
      comment: {
        pattern: /#.*/
      },
      'label-key': {
        pattern: /[a-z_]\w*(?=\s*(=|!=|=~|!~))/,
        alias: 'attr-name',
        greedy: true
      },
      'label-value': {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true,
        alias: 'attr-value'
      },
      punctuation: /[{]/
    }
  },
  function: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})(?=\\s*\\()`, 'i'),
  'context-range': [{
    pattern: /\[[^\]]*(?=])/,
    // [1m]
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    // offset 1m
    lookbehind: true,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }],
  idList: {
    pattern: /\d+(\|\d+)+/,
    alias: 'number'
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  operator: new RegExp(`/[-+*/=%^~]|&&?|\\|?\\||!=?|<(?:=>?|<|>)?|>[>=]?|\\b(?:${OPERATORS.join('|')})\\b`, 'i'),
  punctuation: /[{};()`,.]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promqlGrammar);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRSdWxlTGlzdEluZGV4LjNjODI3ZDk4NWY5NTUzOTM4OGY1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFTyxTQUFTSSxVQUFULENBQXVCQyxhQUF2QixFQUF3RDtFQUM3RCxNQUFNQyxRQUFRLEdBQUdKLHdEQUFXLEVBQTVCLENBRDZELENBRTdEOztFQUNBLE1BQU1LLFdBQVcsR0FBR04sNkNBQU0sQ0FBQ0ksYUFBRCxDQUExQjtFQUNBRSxXQUFXLENBQUNDLE9BQVosR0FBc0JILGFBQXRCO0VBQ0FMLGdEQUFTLENBQUMsTUFBTTtJQUNkLE9BQU8sTUFBTTtNQUNYTSxRQUFRLENBQUNILCtEQUFhLENBQUM7UUFBRUUsYUFBYSxFQUFFRSxXQUFXLENBQUNDO01BQTdCLENBQUQsQ0FBZCxDQUFSO0lBQ0QsQ0FGRDtFQUdELENBSlEsRUFJTixDQUFDRixRQUFELENBSk0sQ0FBVDtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkQ7QUFFQTs7O0FBTU8sU0FBU00sZUFBVCxDQUF5QjtFQUFFQztBQUFGLENBQXpCLEVBQTJFO0VBQ2hGLG9CQUNFLHVEQUFDLDhDQUFEO0lBQU8sS0FBSyxFQUFDLGlCQUFiO0lBQStCLE1BQU0sTUFBckM7SUFBc0MsU0FBUyxFQUFFQSxTQUFqRDtJQUE0RCxlQUFlLEVBQUVBLFNBQTdFO0lBQUEsMkRBQ0Usd0RBQUMsc0RBQUQ7TUFBZSxPQUFPLEVBQUMsSUFBdkI7TUFBQSx3QkFDRTtRQUFLLEdBQUcsRUFBQyxnQ0FBVDtRQUEwQyxHQUFHLEVBQUM7TUFBOUMsRUFERixlQUVFO1FBQUE7TUFBQSxFQUZGLGVBTUU7UUFBQTtNQUFBLEVBTkY7SUFBQSxFQURGO0VBQUEsRUFERjtBQVlEOzs7Ozs7Ozs7Ozs7Ozs7O0NDcEJEOztBQUNBO0FBRUE7Ozs7QUFVQSxNQUFNTyxhQUFhLEdBQUcsQ0FBQztFQUFFQyxJQUFGO0VBQVFDLE1BQVI7RUFBZ0JDO0FBQWhCLENBQUQsS0FBNEM7RUFDaEUsTUFBTUMsT0FBTyxHQUFJLEdBQUVILElBQUksQ0FBQ0ksR0FBSSxjQUFhSixJQUFJLENBQUNLLE9BQVEsWUFBdEQ7RUFDQSxNQUFNQyxVQUFVLEdBQUdiLGtEQUFXLENBQzNCYyxJQUFELGlCQUNFLHVEQUFDLDhEQUFEO0lBRUUsa0JBQWtCLEVBQUMsd0JBRnJCO0lBR0UsZUFBZSxFQUFFQSxJQUhuQjtJQUlFLFdBQVcsRUFBRSxDQUFDTixNQUFEO0VBSmYsR0FDT00sSUFEUCxDQUYwQixFQVM1QixDQUFDTixNQUFELENBVDRCLENBQTlCO0VBWUEsb0JBQ0Usd0RBQUMsNkNBQUQ7SUFBQSx3QkFDRSx1REFBQyxxREFBRDtNQUFBLFVBQWVLLFVBQVUsQ0FBQ04sSUFBSSxDQUFDUSxJQUFOO0lBQXpCLEVBREYsZUFFRSx1REFBQyxvREFBRDtNQUFBLHVCQUNFLHVEQUFDLDZDQUFEO1FBQU0sSUFBSSxFQUFDLElBQVg7UUFBZ0IsSUFBSSxFQUFFUixJQUFJLENBQUNTLFNBQTNCO1FBQWtELFNBQVMsRUFBRyx5QkFBd0JULElBQUksQ0FBQ1UsVUFBVztNQUF0RztJQURGLEVBRkYsZUFLRSx3REFBQyxrREFBRDtNQUFBLHdCQUNFO1FBQUEsd0JBQ0U7VUFBaUIsU0FBUyxFQUFHLEdBQUVWLElBQUksQ0FBQ1UsVUFBVyxFQUEvQztVQUFBLFdBQ0dKLFVBQVUsQ0FBQ04sSUFBSSxDQUFDVyxTQUFOLENBRGIsRUFDK0IsR0FEL0I7UUFBQSxHQUFVLE1BQVYsQ0FERixVQUlPWCxJQUFJLENBQUNZLFFBSlo7TUFBQSxHQUFVLE9BQVYsQ0FERixFQU9HWixJQUFJLENBQUNhLElBQUwsR0FBWVAsVUFBVSxDQUFDTixJQUFJLENBQUNhLElBQU4sQ0FBdEIsR0FBb0MsSUFQdkM7SUFBQSxFQUxGLGVBY0Usd0RBQUMscURBQUQ7TUFBQSx3QkFDRSx1REFBQywrQ0FBRDtRQUVFLE9BQU8sRUFBQyxXQUZWO1FBR0UsSUFBSSxFQUFFYixJQUFJLENBQUNjLEtBQUwsS0FBZSxRQUFmLEdBQTBCLE1BQTFCLEdBQW1DLE9BSDNDO1FBSUUsT0FBTyxFQUFFWixhQUpYO1FBQUEsVUFNR0YsSUFBSSxDQUFDYyxLQUFMLEtBQWUsUUFBZixHQUEwQixRQUExQixHQUFxQztNQU54QyxHQUNNLE1BRE4sQ0FERixlQVNFLHVEQUFDLG1EQUFEO1FBQXVCLE9BQU8sRUFBQyxXQUEvQjtRQUEyQyxJQUFJLEVBQUVYLE9BQWpEO1FBQTBELElBQUksRUFBQyxLQUEvRDtRQUFBO01BQUEsR0FBZ0IsTUFBaEIsQ0FURjtJQUFBLEVBZEY7RUFBQSxFQURGO0FBOEJELENBNUNEOztBQThDQSxpRUFBZUosYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU2dDLGVBQVQsQ0FBeUJqQixLQUF6QixFQUE0QztFQUMxQyxPQUFPO0lBQ0xrQixRQUFRLEVBQUVULHdFQUFXLENBQUNULEtBQUssQ0FBQ21CLFFBQVAsRUFBaUIsWUFBakIsQ0FEaEI7SUFFTEMsVUFBVSxFQUFFTCxvRUFBaUIsQ0FBQ2YsS0FBRCxDQUZ4QjtJQUdMYixNQUFNLEVBQUU2QixpRUFBYyxDQUFDaEIsS0FBSyxDQUFDb0IsVUFBUCxDQUhqQjtJQUlMQyxTQUFTLEVBQUVyQixLQUFLLENBQUNvQixVQUFOLENBQWlCQztFQUp2QixDQUFQO0FBTUQ7O0FBRUQsTUFBTUMsa0JBQWtCLEdBQUc7RUFDekJWLGtCQUR5QjtFQUV6QkUsY0FGeUI7RUFHekJELG9CQUFvQkEsbUVBQUFBO0FBSEssQ0FBM0I7QUFNQSxNQUFNVSxTQUFTLEdBQUdyQixvREFBTyxDQUFDZSxlQUFELEVBQWtCSyxrQkFBbEIsQ0FBekI7QUFNTyxNQUFNRSx3QkFBTixTQUF1Q3ZCLGdEQUF2QyxDQUE0RDtFQUFBO0lBQUE7O0lBQUEsc0NBQ2xELENBQ2I7TUFBRXdCLEtBQUssRUFBRSxLQUFUO01BQWdCQyxLQUFLLEVBQUU7SUFBdkIsQ0FEYSxFQUViO01BQUVELEtBQUssRUFBRSxJQUFUO01BQWVDLEtBQUssRUFBRTtJQUF0QixDQUZhLEVBR2I7TUFBRUQsS0FBSyxFQUFFLFFBQVQ7TUFBbUJDLEtBQUssRUFBRTtJQUExQixDQUhhLEVBSWI7TUFBRUQsS0FBSyxFQUFFLFVBQVQ7TUFBcUJDLEtBQUssRUFBRTtJQUE1QixDQUphLEVBS2I7TUFBRUQsS0FBSyxFQUFFLFNBQVQ7TUFBb0JDLEtBQUssRUFBRTtJQUEzQixDQUxhLEVBTWI7TUFBRUQsS0FBSyxFQUFFLFFBQVQ7TUFBbUJDLEtBQUssRUFBRTtJQUExQixDQU5hLEVBT2I7TUFBRUQsS0FBSyxFQUFFLFNBQVQ7TUFBb0JDLEtBQUssRUFBRTtJQUEzQixDQVBhLENBRGtEOztJQUFBLDhDQTZCekNDLE1BQUQsSUFBNkI7TUFDbER2QixxRUFBQSxDQUF3QjtRQUFFSixLQUFLLEVBQUUyQixNQUFNLENBQUNEO01BQWhCLENBQXhCO0lBQ0QsQ0EvQmdFOztJQUFBLHFDQWlDbkQsTUFBTTtNQUNsQm5CLG1FQUFBLENBQWtCLElBQUlHLDhEQUFKLENBQXdCO1FBQUVvQixTQUFTLEVBQUVyRCw2REFBZUE7TUFBNUIsQ0FBeEIsQ0FBbEI7SUFDRCxDQW5DZ0U7O0lBQUEsNkNBcUMxQ2lELEtBQUQsSUFBbUI7TUFDdkMsS0FBS0ssS0FBTCxDQUFXakIsY0FBWCxDQUEwQlksS0FBMUI7SUFDRCxDQXZDZ0U7O0lBQUEsdUNBeUNoRHhDLElBQUQsSUFBcUI7TUFDbkMsS0FBSzZDLEtBQUwsQ0FBV2xCLG9CQUFYLENBQWdDM0IsSUFBSSxDQUFDOEMsRUFBckMsRUFBeUM7UUFBRUMsTUFBTSxFQUFFL0MsSUFBSSxDQUFDYyxLQUFMLEtBQWU7TUFBekIsQ0FBekM7SUFDRCxDQTNDZ0U7O0lBQUEsZ0RBNkN4QyxDQUFDO01BQUVQLElBQUY7TUFBUWlDO0lBQVIsQ0FBRCxLQUFzRDtNQUM3RSxvQkFDRTtRQUFvQixLQUFLLEVBQUVBLEtBQTNCO1FBQUEsVUFDR2pDO01BREgsR0FBYWlDLEtBQWIsQ0FERjtJQUtELENBbkRnRTtFQUFBOztFQVdqRVEsaUJBQWlCLEdBQUc7SUFDbEIsS0FBS0MsVUFBTDtFQUNEOztFQUVEQyxrQkFBa0IsQ0FBQ0MsU0FBRCxFQUFtQjtJQUNuQyxJQUFJQSxTQUFTLENBQUNDLFdBQVYsQ0FBc0J0QyxLQUF0QixLQUFnQyxLQUFLK0IsS0FBTCxDQUFXTyxXQUFYLENBQXVCdEMsS0FBM0QsRUFBa0U7TUFDaEUsS0FBS21DLFVBQUw7SUFDRDtFQUNGOztFQUVlLE1BQVZBLFVBQVUsR0FBRztJQUNqQixNQUFNLEtBQUtKLEtBQUwsQ0FBV25CLGtCQUFYLENBQThCO01BQUVaLEtBQUssRUFBRSxLQUFLdUMsY0FBTDtJQUFULENBQTlCLENBQU47RUFDRDs7RUFFREEsY0FBYyxHQUFXO0lBQUE7O0lBQ3ZCLGdDQUFPLEtBQUtSLEtBQUwsQ0FBV08sV0FBWCxDQUF1QnRDLEtBQTlCLHlFQUF1QyxLQUF2QztFQUNEOztFQTBCRHdDLE1BQU0sR0FBRztJQUNQLE1BQU07TUFBRXRCLFFBQUY7TUFBWUUsVUFBWjtNQUF3QmpDLE1BQXhCO01BQWdDa0M7SUFBaEMsSUFBOEMsS0FBS1UsS0FBekQ7SUFFQSxvQkFDRSx3REFBQyxxRUFBRDtNQUFNLFFBQVEsRUFBRWIsUUFBaEI7TUFBQSx1QkFDRSx5REFBQyw4RUFBRDtRQUFlLFNBQVMsRUFBRUcsU0FBMUI7UUFBQSx3QkFDRTtVQUFLLFNBQVMsRUFBQyxpQkFBZjtVQUFBLHdCQUNFO1lBQUssU0FBUyxFQUFDLHVCQUFmO1lBQUEsdUJBQ0Usd0RBQUMsb0RBQUQ7Y0FBYSxXQUFXLEVBQUMsZUFBekI7Y0FBeUMsS0FBSyxFQUFFbEMsTUFBaEQ7Y0FBd0QsUUFBUSxFQUFFLEtBQUtzRDtZQUF2RTtVQURGLEVBREYsZUFJRTtZQUFLLFNBQVMsRUFBQyxTQUFmO1lBQUEsNENBQ0U7Y0FBTyxTQUFTLEVBQUMsZUFBakI7Y0FBaUMsT0FBTyxFQUFDLG9CQUF6QztjQUFBO1lBQUEsRUFERixnQkFLRTtjQUFLLFNBQVMsRUFBQyxVQUFmO2NBQUEsdUJBQ0Usd0RBQUMsK0NBQUQ7Z0JBQ0UsT0FBTyxFQUFFLG9CQURYO2dCQUVFLE9BQU8sRUFBRSxLQUFLQyxZQUZoQjtnQkFHRSxRQUFRLEVBQUUsS0FBS0Msb0JBSGpCO2dCQUlFLEtBQUssRUFBRSxLQUFLSixjQUFMO2NBSlQ7WUFERixFQUxGO1VBQUEsRUFKRiwrQkFrQkU7WUFBSyxTQUFTLEVBQUM7VUFBZixFQWxCRixHQW1CR3BDLDJFQUFBLGdEQUNDLHdEQUFDLG1EQUFEO1lBQVksT0FBTyxFQUFDLFNBQXBCO1lBQThCLElBQUksRUFBQyxpQkFBbkM7WUFBQTtVQUFBLEVBREQsRUFuQkgsZUF3QkUsd0RBQUMsK0NBQUQ7WUFBUSxPQUFPLEVBQUMsV0FBaEI7WUFBNEIsT0FBTyxFQUFFLEtBQUswQyxXQUExQztZQUFBO1VBQUEsRUF4QkY7UUFBQSxFQURGLDJEQTZCRSx3REFBQyw2RUFBRCxLQTdCRixnQkE4QkUsd0RBQUMsc0RBQUQ7VUFBZSxPQUFPLEVBQUMsTUFBdkI7VUFBQSxVQUNHekIsVUFBVSxDQUFDMEIsR0FBWCxDQUFnQjVELElBQUQsSUFBVTtZQUN4QixvQkFDRSx3REFBQyxzREFBRDtjQUNFLElBQUksRUFBRUEsSUFEUjtjQUdFLE1BQU0sRUFBRUMsTUFIVjtjQUlFLGFBQWEsRUFBRSxNQUFNLEtBQUtDLGFBQUwsQ0FBbUJGLElBQW5CO1lBSnZCLEdBRU9BLElBQUksQ0FBQzhDLEVBRlosQ0FERjtVQVFELENBVEE7UUFESCxFQTlCRjtNQUFBO0lBREYsRUFERjtFQStDRDs7QUF2R2dFO0FBMEduRSxpRUFBZVQsU0FBUyxDQUFDQyx3QkFBRCxDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkE7QUFFQTs7O0FBRU8sTUFBTXdCLGlCQUFpQixHQUFHLDZDQUExQjs7QUFFUCxNQUFNckMsaUJBQXlCLEdBQUcsdUNBQ2hDLHdEQUFDLDhDQUFEO0VBQU8sUUFBUSxFQUFDLFNBQWhCO0VBQTBCLEtBQUssRUFBQyw0Q0FBaEM7RUFBQSx3QkFDRTtJQUFBLG1KQUdFLGdFQUhGO0VBQUEsRUFERixlQU9FO0lBQUEsa0JBQ00sR0FETixlQUVFO01BQUcsSUFBSSxFQUFDLHVGQUFSO01BQUE7SUFBQSxFQUZGLEVBSU8sR0FKUCxrREFLZ0QsR0FMaEQsZUFNRTtNQUFHLElBQUksRUFBQywyRUFBUjtNQUFBO0lBQUEsRUFORjtFQUFBLEVBUEY7QUFBQSxFQURnQyxDQUFsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFHQTtBQUVPLFNBQVNDLGtCQUFULENBQTRCOEMsT0FBNUIsRUFBMkU7RUFDaEYsT0FBTyxNQUFPdkYsUUFBUCxJQUFvQjtJQUN6QkEsUUFBUSxDQUFDbUYseURBQWMsRUFBZixDQUFSO0lBQ0EsTUFBTUssS0FBcUIsR0FBRyxNQUFNViwrREFBYSxHQUFHVyxHQUFoQixDQUFvQixhQUFwQixFQUFtQ0YsT0FBbkMsQ0FBcEM7SUFDQXZGLFFBQVEsQ0FBQ29GLDJEQUFnQixDQUFDSSxLQUFELENBQWpCLENBQVI7RUFDRCxDQUpEO0FBS0Q7QUFFTSxTQUFTOUMsb0JBQVQsQ0FBOEJtQixFQUE5QixFQUEwQzBCLE9BQTFDLEVBQTJGO0VBQ2hHLE9BQU8sTUFBT3ZGLFFBQVAsSUFBb0I7SUFDekIsTUFBTThFLCtEQUFhLEdBQUdZLElBQWhCLENBQXNCLGVBQWM3QixFQUFHLFFBQXZDLEVBQWdEMEIsT0FBaEQsQ0FBTjtJQUNBLE1BQU1JLFdBQVcsR0FBRzFELDZFQUFBLEdBQWtDSixLQUFsQyxJQUEyQyxLQUEvRDtJQUNBN0IsUUFBUSxDQUFDeUMsa0JBQWtCLENBQUM7TUFBRVosS0FBSyxFQUFFOEQsV0FBVyxDQUFDRSxRQUFaO0lBQVQsQ0FBRCxDQUFuQixDQUFSO0VBQ0QsQ0FKRDtBQUtEO0FBRU0sU0FBU0MseUJBQVQsQ0FBbUNDLElBQW5DLEVBQTBFO0VBQy9FLE9BQU8sTUFBTy9GLFFBQVAsSUFBb0I7SUFDekIsSUFBSTtNQUNGLE1BQU04RSwrREFBYSxHQUFHWSxJQUFoQixDQUFzQiwwQkFBdEIsRUFBaURLLElBQWpELENBQU47TUFDQS9GLFFBQVEsQ0FBQ2dGLDJEQUFTLENBQUNFLHdGQUF5QixDQUFDLHNCQUFELENBQTFCLENBQVYsQ0FBUjtNQUNBakQsa0VBQUEsQ0FBcUIseUJBQXJCO0lBQ0QsQ0FKRCxDQUlFLE9BQU9nRSxLQUFQLEVBQWM7TUFDZCxJQUFJbEIsOERBQVksQ0FBQ2tCLEtBQUQsQ0FBaEIsRUFBeUI7UUFDdkJqRyxRQUFRLENBQUNnRiwyREFBUyxDQUFDQyxzRkFBdUIsQ0FBQ2dCLEtBQUssQ0FBQ0YsSUFBTixDQUFXRSxLQUFaLENBQXhCLENBQVYsQ0FBUjtNQUNEO0lBQ0Y7RUFDRixDQVZEO0FBV0Q7QUFFTSxTQUFTQyx5QkFBVCxDQUFtQ0gsSUFBbkMsRUFBaUU7RUFDdEUsT0FBTyxNQUFPL0YsUUFBUCxJQUFvQjtJQUN6QixJQUFJO01BQ0YsTUFBTThFLCtEQUFhLEdBQUdxQixHQUFoQixDQUFxQiw0QkFBMkJKLElBQUksQ0FBQ2xDLEVBQUcsRUFBeEQsRUFBMkRrQyxJQUEzRCxDQUFOO01BQ0EvRixRQUFRLENBQUNnRiwyREFBUyxDQUFDRSx3RkFBeUIsQ0FBQyxzQkFBRCxDQUExQixDQUFWLENBQVI7SUFDRCxDQUhELENBR0UsT0FBT2UsS0FBUCxFQUFjO01BQ2QsSUFBSWxCLDhEQUFZLENBQUNrQixLQUFELENBQWhCLEVBQXlCO1FBQ3ZCakcsUUFBUSxDQUFDZ0YsMkRBQVMsQ0FBQ0Msc0ZBQXVCLENBQUNnQixLQUFLLENBQUNGLElBQU4sQ0FBV0UsS0FBWixDQUF4QixDQUFWLENBQVI7TUFDRDtJQUNGO0VBQ0YsQ0FURDtBQVVEO0FBRU0sU0FBU0csdUJBQVQsQ0FBaUNMLElBQWpDLEVBQStEO0VBQ3BFLE9BQU8sT0FBTy9GLFFBQVAsRUFBaUJxRyxRQUFqQixLQUE4QjtJQUNuQyxNQUFNQyxPQUFPLEdBQUdELFFBQVEsR0FBR0UsbUJBQVgsQ0FBK0JBLG1CQUEvQztJQUNBLE1BQU16QiwrREFBYSxHQUFHWSxJQUFoQixDQUFxQiwrQkFBckI7TUFBd0Q3QixFQUFFLEVBQUV5QyxPQUFPLENBQUN6QztJQUFwRSxHQUEyRWtDLElBQTNFLEVBQU47RUFDRCxDQUhEO0FBSUQ7QUFFTSxTQUFTUyxxQkFBVCxHQUFvRDtFQUN6RCxPQUFPLE1BQU94RyxRQUFQLElBQW9CO0lBQ3pCLE1BQU15RyxjQUE2QixHQUFHLE1BQU0zQiwrREFBYSxHQUFHVyxHQUFoQixDQUFxQixzQkFBckIsQ0FBNUM7SUFFQSxNQUFNaUIsaUJBQWlCLEdBQUdELGNBQWMsQ0FBQ0UsSUFBZixDQUFvQixDQUFDQyxFQUFELEVBQUtDLEVBQUwsS0FBWTtNQUN4RCxJQUFJRCxFQUFFLENBQUNyRixJQUFILEdBQVVzRixFQUFFLENBQUN0RixJQUFqQixFQUF1QjtRQUNyQixPQUFPLENBQVA7TUFDRDs7TUFDRCxPQUFPLENBQUMsQ0FBUjtJQUNELENBTHlCLENBQTFCO0lBT0F2QixRQUFRLENBQUNzRixrRUFBdUIsQ0FBQ29CLGlCQUFELENBQXhCLENBQVI7RUFDRCxDQVhEO0FBWUQ7QUFFTSxTQUFTSSx1QkFBVCxDQUFpQ2pELEVBQWpDLEVBQWdFO0VBQ3JFLE9BQU8sTUFBTzdELFFBQVAsSUFBb0I7SUFDekIsTUFBTUEsUUFBUSxDQUFDd0cscUJBQXFCLEVBQXRCLENBQWQ7SUFDQSxNQUFNRCxtQkFBbUIsR0FBRyxNQUFNekIsK0RBQWEsR0FBR1csR0FBaEIsQ0FBcUIsNEJBQTJCNUIsRUFBRyxFQUFuRCxDQUFsQztJQUNBN0QsUUFBUSxDQUFDcUYsb0VBQXlCLENBQUNrQixtQkFBRCxDQUExQixDQUFSO0VBQ0QsQ0FKRDtBQUtEOzs7Ozs7Ozs7Ozs7O0FDNUVNLE1BQU0xRCxjQUFjLEdBQUloQixLQUFELElBQTRCQSxLQUFLLENBQUNrRixXQUF6RDtBQUVBLE1BQU1uRSxpQkFBaUIsR0FBSWYsS0FBRCxJQUFvQztFQUNuRSxNQUFNbUYsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBV3BGLEtBQUssQ0FBQ29CLFVBQU4sQ0FBaUI4RCxXQUE1QixFQUF5QyxHQUF6QyxDQUFkO0VBRUEsT0FBT2xGLEtBQUssQ0FBQ29CLFVBQU4sQ0FBaUJpRSxLQUFqQixDQUF1QkMsTUFBdkIsQ0FBK0JDLElBQUQsSUFBVTtJQUM3QyxPQUFPSixLQUFLLENBQUNLLElBQU4sQ0FBV0QsSUFBSSxDQUFDN0YsSUFBaEIsS0FBeUJ5RixLQUFLLENBQUNLLElBQU4sQ0FBV0QsSUFBSSxDQUFDMUYsU0FBaEIsQ0FBekIsSUFBdURzRixLQUFLLENBQUNLLElBQU4sQ0FBV0QsSUFBSSxDQUFDeEYsSUFBaEIsQ0FBOUQ7RUFDRCxDQUZNLENBQVA7QUFHRCxDQU5NO0FBUUEsTUFBTTBGLHNCQUFzQixHQUFHLENBQUN6RixLQUFELEVBQWtDMEYsU0FBbEMsS0FBd0Q7RUFDNUYsSUFBSTFGLEtBQUssQ0FBQzBFLG1CQUFOLENBQTBCMUMsRUFBMUIsS0FBaUMwRCxTQUFyQyxFQUFnRDtJQUM5QyxPQUFPMUYsS0FBSyxDQUFDMEUsbUJBQWI7RUFDRDs7RUFFRCxPQUFPLElBQVA7QUFDRCxDQU5NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU13QyxLQUFLLEdBQUc7RUFDWkMsTUFBTSxFQUFFYixrRkFESTtFQUVadEcsS0FBSyxFQUFFdUcsbUZBQWlCQTtBQUZaLENBQWQ7QUFLQSxNQUFNYSxRQUFRLEdBQUduQiw4REFBaUIsQ0FDaEMsTUFBTTtFQUNKLE1BQU05SCxRQUFRLEdBQUdKLHdEQUFXLEVBQTVCO0VBQ0EsTUFBTXNKLE1BQU0sR0FBR3JCLHVEQUFVLENBQUNzQixTQUFELENBQXpCO0VBQ0EsTUFBTUMsb0JBQW9CLEdBQUczQiw4Q0FBTyxDQUFDb0Isc0VBQUQsRUFBeUIsRUFBekIsQ0FBcEM7RUFDQSxNQUFNUSxRQUFRLEdBQUcxQiw4REFBVyxFQUE1QjtFQUNBLE1BQU0sQ0FBQzJCLFNBQUQsRUFBWUMsWUFBWixJQUE0QjdCLCtDQUFRLENBQUMsS0FBRCxDQUExQztFQUVBLE1BQU0sQ0FBQ3ZELFdBQUQsSUFBZ0I0RCw2RUFBYyxFQUFwQztFQUNBLE1BQU15QixPQUFPLEdBQUdWLHFFQUF1QixDQUFDM0UsV0FBRCxDQUF2QztFQUNBLE1BQU1zRixhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxPQUFkLEVBQXVCSSxJQUF2QixDQUE2QnpDLE1BQUQsSUFBWUEsTUFBTSxLQUFLMEMsU0FBbkQsQ0FBdEI7RUFFQSxNQUFNO0lBQUVDLHFCQUFGO0lBQXlCQztFQUF6QixJQUFpRHBCLDBFQUFjLEVBQXJFO0VBRUEsTUFBTXFCLElBQUksR0FBR2pCLEtBQUssQ0FBQzVFLFdBQVcsQ0FBQyxNQUFELENBQVosQ0FBTCxHQUNSQSxXQUFXLENBQUMsTUFBRCxDQURILEdBRVQsUUFGSjtFQUlBLE1BQU04RixhQUFhLEdBQUdsQixLQUFLLENBQUNpQixJQUFELENBQTNCLENBakJJLENBbUJKOztFQUNBdEssZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RNLFFBQVEsQ0FBQzBJLGdGQUErQixFQUFoQyxDQUFSO0lBQ0EsTUFBTXdCLFFBQVEsR0FBR0MsV0FBVyxDQUFDLE1BQU1uSyxRQUFRLENBQUMwSSxnRkFBK0IsRUFBaEMsQ0FBZixFQUFvREUseUVBQXBELENBQTVCO0lBQ0EsT0FBTyxNQUFNO01BQ1h3QixhQUFhLENBQUNGLFFBQUQsQ0FBYjtJQUNELENBRkQ7RUFHRCxDQU5RLEVBTU4sQ0FBQ2xLLFFBQUQsQ0FOTSxDQUFUO0VBUUEsTUFBTXFLLGdCQUFnQixHQUFHNUIsOEZBQTBCLENBQUU1RyxLQUFELElBQVdBLEtBQUssQ0FBQ3lJLFNBQWxCLENBQW5EO0VBQ0EsTUFBTUMsaUJBQWlCLEdBQUc5Qiw4RkFBMEIsQ0FBRTVHLEtBQUQsSUFBV0EsS0FBSyxDQUFDMkksVUFBbEIsQ0FBcEQ7RUFFQSxNQUFNQyxVQUFVLEdBQUdyQixvQkFBb0IsQ0FBQ1EsSUFBckIsQ0FDaEJySSxJQUFEO0lBQUE7O0lBQUEsT0FBVSwwQkFBQThJLGdCQUFnQixDQUFDOUksSUFBRCxDQUFoQixnRkFBd0JrSixVQUF4QiwrQkFBc0NGLGlCQUFpQixDQUFDaEosSUFBRCxDQUF2RCwwREFBc0Msc0JBQXlCa0osVUFBL0QsQ0FBVjtFQUFBLENBRGlCLENBQW5CO0VBR0EsTUFBTUMsT0FBTyxHQUFHdEIsb0JBQW9CLENBQUNRLElBQXJCLENBQ2JySSxJQUFEO0lBQUE7O0lBQUEsT0FBVSwyQkFBQThJLGdCQUFnQixDQUFDOUksSUFBRCxDQUFoQixrRkFBd0JtSixPQUF4QixnQ0FBbUNILGlCQUFpQixDQUFDaEosSUFBRCxDQUFwRCwyREFBbUMsdUJBQXlCbUosT0FBNUQsQ0FBVjtFQUFBLENBRGMsQ0FBaEI7RUFHQSxNQUFNQyxXQUFXLEdBQUd2QixvQkFBb0IsQ0FBQ1EsSUFBckIsQ0FDakJySSxJQUFEO0lBQUE7O0lBQUEsT0FDRywyQkFBQThJLGdCQUFnQixDQUFDOUksSUFBRCxDQUFoQiw0R0FBd0JxSixNQUF4QixrRkFBZ0NDLE1BQWhDLEtBQTBDLDRCQUFDUixnQkFBZ0IsQ0FBQzlJLElBQUQsQ0FBakIsbURBQUMsdUJBQXdCMEUsS0FBekIsQ0FBM0MsSUFDQ3lELE1BQU0sQ0FBQ29CLElBQVAsQ0FBWSwyQkFBQVAsaUJBQWlCLENBQUNoSixJQUFELENBQWpCLGtGQUF5QnFKLE1BQXpCLEtBQW1DLEVBQS9DLEVBQW1EQyxNQUFuRCxJQUE2RCw0QkFBQ04saUJBQWlCLENBQUNoSixJQUFELENBQWxCLG1EQUFDLHVCQUF5QjBFLEtBQTFCLENBRmhFO0VBQUEsQ0FEa0IsQ0FBcEI7RUFNQSxNQUFNOEUsa0JBQWtCLEdBQUdOLFVBQVUsSUFBSSxDQUFDQyxPQUFmLElBQTBCLENBQUNDLFdBQXREO0VBRUEsTUFBTUssa0JBQWtCLEdBQUd6Qyw0RkFBeUIsRUFBcEQ7RUFDQSxNQUFNMEMsa0JBQWtCLEdBQUd6QywwRUFBZ0IsQ0FBQ3dDLGtCQUFELENBQTNDO0VBQ0Esb0JBQ0UseURBQUMsZ0ZBQUQ7SUFBcUIsTUFBTSxFQUFDLFlBQTVCO0lBQXlDLFNBQVMsRUFBRU4sT0FBTyxJQUFJLENBQUNDLFdBQWhFO0lBQUEsOERBQ0Usd0RBQUMsNEVBQUQsS0FERixHQUVHLENBQUNJLGtCQUFELGlCQUNDO01BQUEsd0RBQ0Usd0RBQUMsc0VBQUQsS0FERixnQkFFRTtRQUFLLFNBQVMsRUFBRTdCLE1BQU0sQ0FBQ2dDO01BQXZCLEVBRkYsZUFHRTtRQUFLLFNBQVMsRUFBRWhDLE1BQU0sQ0FBQ2lDLGdCQUF2QjtRQUFBLHdCQUNFO1VBQUssU0FBUyxFQUFFakMsTUFBTSxDQUFDa0MsY0FBdkI7VUFBQSxXQUNHcEIsSUFBSSxLQUFLLFFBQVQsSUFBcUJQLGFBQXJCLGlCQUNDLHdEQUFDLCtDQUFEO1lBQ0UsU0FBUyxFQUFFUCxNQUFNLENBQUNtQyxlQURwQjtZQUVFLElBQUksRUFBRS9CLFNBQVMsR0FBRyxpQkFBSCxHQUF1QixtQkFGeEM7WUFHRSxPQUFPLEVBQUMsV0FIVjtZQUlFLE9BQU8sRUFBRSxNQUFNQyxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUo3QjtZQUFBLFVBTUdBLFNBQVMsR0FBRyxjQUFILEdBQW9CO1VBTmhDLEVBRkosZUFXRSx3REFBQyxtRUFBRDtZQUFXLFlBQVksRUFBRSxJQUF6QjtZQUErQixhQUFhLEVBQUUsSUFBOUM7WUFBb0QsVUFBVSxFQUFFMkI7VUFBaEUsRUFYRjtRQUFBLEVBREYsRUFjRyxDQUFDbkIscUJBQXFCLElBQUlDLG1CQUExQixrQkFDQyx3REFBQyxtREFBRDtVQUNFLElBQUksRUFBRW5DLDREQUFBLENBQWtCLGNBQWxCLEVBQWtDO1lBQUUyRCxRQUFRLEVBQUVsQyxRQUFRLENBQUNtQyxRQUFULEdBQW9CbkMsUUFBUSxDQUFDckk7VUFBekMsQ0FBbEMsQ0FEUjtVQUVFLElBQUksRUFBQyxNQUZQO1VBQUE7UUFBQSxFQWZKO01BQUEsRUFIRjtJQUFBLEVBSEosRUErQkcrSixrQkFBa0Isc0RBQUksd0RBQUMsdUVBQUQsS0FBSixFQS9CckIsRUFnQ0dKLFdBQVcsaUJBQUksd0RBQUMsYUFBRDtNQUFlLFNBQVMsRUFBRXJCLFNBQTFCO01BQXFDLFVBQVUsRUFBRTJCO0lBQWpELEVBaENsQjtFQUFBLEVBREY7QUFvQ0QsQ0FwRitCLEVBcUZoQztFQUFFUSxLQUFLLEVBQUU7QUFBVCxDQXJGZ0MsQ0FBbEM7O0FBd0ZBLE1BQU10QyxTQUFTLEdBQUl1QyxLQUFELEtBQTJCO0VBQzNDUixLQUFLLEVBQUUxRCw2Q0FBSTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUJrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3RDLCtCQUErQkQsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BQU87QUFDMUQsR0FONkM7RUFPM0NYLGdCQUFnQixFQUFFM0QsNkNBQUk7QUFDeEIscUJBQXFCa0UsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN0QztBQUNBO0FBQ0EsR0FYNkM7RUFZM0NQLGNBQWMsRUFBRTVELDZDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEdBaEI2QztFQWlCM0M2RCxlQUFlLEVBQUU3RCw2Q0FBSTtBQUN2QixvQkFBb0JrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3JDO0FBbkI2QyxDQUEzQixDQUFsQjs7QUFzQkEsaUVBQWUxQyxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQ0E7QUFFQTtBQUNBOztBQVFPLE1BQU1qQixtQkFBOEIsR0FBRyxDQUFDO0VBQUVnRSxRQUFGO0VBQVlDLE1BQVo7RUFBb0IvSTtBQUFwQixDQUFELEtBQXFDO0VBQ2pGLE1BQU1ILFFBQVEsR0FBR1Qsd0VBQVcsQ0FDMUJ5Six3REFBVyxDQUFFbEssS0FBRCxJQUF1QkEsS0FBSyxDQUFDbUIsUUFBOUIsQ0FEZSxFQUUxQmlKLE1BRjBCLENBQTVCO0VBS0Esb0JBQ0UsdURBQUMscUVBQUQ7SUFBTSxRQUFRLEVBQUVsSixRQUFoQjtJQUFBLHVCQUNFLHVEQUFDLDhFQUFEO01BQWUsU0FBUyxFQUFFRyxTQUExQjtNQUFBLFVBQXNDOEk7SUFBdEM7RUFERixFQURGO0FBS0QsQ0FYTTs7Ozs7Ozs7Ozs7Ozs7QUNaUDtBQUVBOzs7QUFRTyxNQUFNRyxTQUFvQixHQUFHLENBQUM7RUFBRUMsT0FBRjtFQUFXSixRQUFYO0VBQXFCSyxRQUFRLEdBQUc7QUFBaEMsQ0FBRCxLQUE0QztFQUM5RSxJQUFJRCxPQUFPLENBQUN4QyxJQUFSLENBQWMwQyxNQUFELElBQVlKLCtFQUFBLENBQXFCSSxNQUFyQixFQUE2QkQsUUFBN0IsQ0FBekIsQ0FBSixFQUFzRTtJQUNwRSxvQkFBTztNQUFBLFVBQUdMO0lBQUgsRUFBUDtFQUNELENBRkQsTUFFTztJQUNMLE9BQU8sSUFBUDtFQUNEO0FBQ0YsQ0FOTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7QUFDQTtBQUdBO0FBRUE7Ozs7QUFJQTtBQUNPLE1BQU1VLDBCQUEwQixHQUFHLFFBR0E7RUFBQSxJQUhtQjtJQUMzREM7RUFEMkQsQ0FHbkI7RUFBQSxJQURyQy9JLEtBQ3FDOztFQUN4QyxNQUFNc0YsTUFBTSxHQUFHckIsdURBQVUsQ0FBQ3NCLFNBQUQsQ0FBekI7RUFDQSxvQkFDRSx1REFBQyx1REFBRDtJQUNFLHFCQUFxQixFQUNuQndELHFCQUFxQixHQUNqQixDQUFDdkYsSUFBRCxFQUFPd0YsS0FBUCxFQUFjMUYsS0FBZCxrQkFDRTtNQUFBLFdBQ0csRUFBRTBGLEtBQUssS0FBSzFGLEtBQUssQ0FBQzJELE1BQU4sR0FBZSxDQUEzQixrQkFBaUM7UUFBSyxTQUFTLEVBQUUyQixnREFBRSxDQUFDdEQsTUFBTSxDQUFDMkQsZ0JBQVIsRUFBMEIzRCxNQUFNLENBQUM0RCxTQUFqQztNQUFsQixFQURwQyxFQUVHSCxxQkFBcUIsQ0FBQ3ZGLElBQUQsRUFBT3dGLEtBQVAsRUFBYzFGLEtBQWQsQ0FGeEI7SUFBQSxFQUZlLEdBT2pCMkMsU0FUUjtJQVdFLGtCQUFrQixFQUFFLG1CQUNsQjtNQUFLLFNBQVMsRUFBRVgsTUFBTSxDQUFDNkQsUUFBdkI7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBRVAsZ0RBQUUsQ0FBQ3RELE1BQU0sQ0FBQzhELGVBQVIsRUFBeUI5RCxNQUFNLENBQUM0RCxTQUFoQztNQUFsQjtJQURGLEVBWko7SUFnQkUsZ0JBQWdCLEVBQUUsQ0FBQ0csQ0FBRCxFQUFJTCxLQUFKLEVBQVcxRixLQUFYLGtCQUNoQjtNQUFLLFNBQVMsRUFBRWdDLE1BQU0sQ0FBQzZELFFBQXZCO01BQUEsd0JBQ0U7UUFBSyxTQUFTLEVBQUVQLGdEQUFFLENBQUN0RCxNQUFNLENBQUNnRSxZQUFSLEVBQXNCaEUsTUFBTSxDQUFDNEQsU0FBN0I7TUFBbEIsRUFERixFQUVHLEVBQUVGLEtBQUssS0FBSzFGLEtBQUssQ0FBQzJELE1BQU4sR0FBZSxDQUEzQixrQkFBaUM7UUFBSyxTQUFTLEVBQUUyQixnREFBRSxDQUFDdEQsTUFBTSxDQUFDaUUsZUFBUixFQUF5QmpFLE1BQU0sQ0FBQzRELFNBQWhDO01BQWxCLEVBRnBDO0lBQUE7RUFqQkosR0FzQk1sSixLQXRCTixFQURGO0FBMEJELENBL0JNO0FBaUNBLE1BQU11RixTQUFTLEdBQUl1QyxLQUFELEtBQTJCO0VBQ2xEcUIsUUFBUSxFQUFFdkYsNkNBQUk7QUFDaEI7QUFDQTtBQUNBLEdBSm9EO0VBS2xEc0YsU0FBUyxFQUFFdEYsNkNBQUk7QUFDakI7QUFDQSw2QkFBNkJrRSxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFBTztBQUN4RDtBQUNBO0FBQ0EsTUFBTUosS0FBSyxDQUFDMEIsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBNkI7QUFDbkM7QUFDQTtBQUNBLEdBYm9EO0VBY2xESCxZQUFZLEVBQUUxRiw2Q0FBSTtBQUNwQjtBQUNBLCtCQUErQmtFLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxNQUFiLENBQW9CQyxNQUFPO0FBQzFEO0FBQ0E7QUFDQSxHQW5Cb0Q7RUFvQmxEcUIsZUFBZSxFQUFFM0YsNkNBQUk7QUFDdkI7QUFDQTtBQUNBLEdBdkJvRDtFQXdCbERxRixnQkFBZ0IsRUFBRXJGLDZDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEdBNUJvRDtFQTZCbER3RixlQUFlLEVBQUV4Riw2Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFoQ29ELENBQTNCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q1A7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBOztBQU9PLE1BQU15RyxnQkFBb0UsR0FBRyxDQUFDO0VBQUVDLFFBQUY7RUFBWUM7QUFBWixDQUFELEtBQXdCO0VBQzFHLE1BQU1DLE9BQU8sR0FBRzNHLDhDQUFPLENBQ3JCLE1BQU0sQ0FDSmlHLHVEQUFVLENBQ1I7SUFDRVcsTUFBTSxFQUFHQyxJQUFELElBQWVBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLFlBRHZDO0lBRUVDLFNBQVMsRUFBRSxNQUFNTjtFQUZuQixDQURRLG9CQUtGWCw4Q0FMRTtJQUs4QixDQUFDVyxRQUFELEdBQVlBLFFBQVEsS0FBSyxPQUFiLEdBQXVCTiwwRUFBdkIsR0FBcUNDLGdGQUFZQTtFQUwzRixHQUROLENBRGUsRUFVckIsQ0FBQ0ssUUFBRCxDQVZxQixDQUF2QjtFQWFBLE1BQU1PLFVBQVUsR0FBR2hILDhDQUFPLENBQUMsTUFBTWdHLHNEQUFTLENBQUNVLElBQUQsQ0FBaEIsRUFBd0IsQ0FBQ0EsSUFBRCxDQUF4QixDQUExQjtFQUVBLG9CQUFPLHVEQUFDLHdEQUFEO0lBQVEsT0FBTyxFQUFFQyxPQUFqQjtJQUEwQixLQUFLLEVBQUVLLFVBQWpDO0lBQTZDLFFBQVEsRUFBRTtFQUF2RCxFQUFQO0FBQ0QsQ0FqQk07QUFtQkEsTUFBTUMsVUFBcUIsR0FBRyxDQUFDO0VBQUVDLFVBQVUsRUFBRUMsS0FBZDtFQUFxQkM7QUFBckIsQ0FBRCxLQUF3QztFQUMzRSxNQUFNM0YsTUFBTSxHQUFHeUUsc0RBQVMsQ0FBQ3hFLFNBQUQsQ0FBeEI7RUFFQSxvQkFDRSx1REFBQyx1Q0FBRDtJQUFNLFNBQVMsRUFBRXFELGdEQUFFLENBQUN0RCxNQUFNLENBQUM0RixJQUFSLEVBQWMsbUJBQWQsQ0FBbkI7SUFBQSxVQUNHZixxRUFBa0IsQ0FBQ2MsV0FBRCxDQUFsQixnQkFDQyx1REFBQyxnQkFBRDtNQUFrQixJQUFJLEVBQUVELEtBQXhCO01BQStCLFFBQVEsRUFBRUMsV0FBVyxDQUFDTixJQUFaLEtBQXFCVCxrRUFBckIsR0FBMkMsT0FBM0MsR0FBcUQ7SUFBOUYsRUFERCxHQUdDYztFQUpKLEVBREY7QUFTRCxDQVpNO0FBY0EsTUFBTXpGLFNBQVMsR0FBSXVDLEtBQUQsS0FBMEI7RUFDakRvRCxJQUFJLEVBQUV0SCw2Q0FBSTtBQUNaLG1CQUFtQmtFLEtBQUssQ0FBQ3NELFVBQU4sQ0FBaUJDLFVBQWpCLENBQTRCQyxTQUFVO0FBQ3pEO0FBSG1ELENBQTFCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRFA7QUFFQTs7O0FBRU8sSUFBS0UsbUJBQVo7O1dBQVlBO0VBQUFBO0VBQUFBO0VBQUFBO0VBQUFBO0VBQUFBO0dBQUFBLHdCQUFBQTs7QUFZTCxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUEwQztFQUN6RSxvQkFDRSx3REFBQyw4Q0FBRDtJQUFPLEtBQUssRUFBRyxRQUFPQSxRQUFTLGtDQUEvQjtJQUFrRSxRQUFRLEVBQUMsTUFBM0U7SUFBQSxvQkFDUUEsUUFEUixrSEFFZUEsUUFGZjtFQUFBLEVBREY7QUFNRCxDQVBNO0FBU0EsTUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtFQUNyQyx3Q0FBTyx1REFBQyw4Q0FBRDtJQUFPLElBQUksRUFBRSxhQUFiO0lBQTRCLEtBQUssRUFBRTtFQUFuQyxFQUFQO0FBQ0QsQ0FGTTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCUDtBQUVBOzs7OztBQU9BLE1BQU1DLFlBQW1DLEdBQUcsQ0FBQztFQUFFQyxTQUFGO0VBQWFDO0FBQWIsQ0FBRCxLQUEwQjtFQUNwRSxJQUFJLENBQUNBLEtBQUwsRUFBWTtJQUNWLG9CQUFPO01BQUEsVUFBR0Q7SUFBSCxFQUFQO0VBQ0Q7O0VBRUQsb0JBQ0U7SUFBQSxXQUNHQSxTQURILHNDQUNjLHVEQUFDLDZDQUFEO01BQU0sSUFBSSxFQUFDO0lBQVgsRUFEZCxRQUMyQ0MsS0FEM0M7RUFBQSxFQURGO0FBS0QsQ0FWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUdBO0FBQ0E7O0FBTU8sTUFBTUUsZ0JBQTJCLEdBQUcsQ0FBQztFQUFFNUQsUUFBRjtFQUFZNkQ7QUFBWixDQUFELEtBQTBCO0VBQ25FLE1BQU0zRyxNQUFNLEdBQUdyQix1REFBVSxDQUFDc0IsU0FBRCxDQUF6QjtFQUVBLG9CQUFPO0lBQU0sU0FBUyxFQUFFRCxNQUFNLENBQUMyRyxNQUFELENBQXZCO0lBQUEsVUFBa0M3RCxRQUFRLElBQUk2RDtFQUE5QyxFQUFQO0FBQ0QsQ0FKTTs7QUFNUCxNQUFNMUcsU0FBUyxHQUFJdUMsS0FBRCxLQUEyQjtFQUMzQyxDQUFDaUUsMEZBQUQsR0FBa0NuSSw2Q0FBSTtBQUN4QyxhQUFha0UsS0FBSyxDQUFDRSxNQUFOLENBQWFtRSxPQUFiLENBQXFCek8sSUFBSztBQUN2QyxHQUg2QztFQUkzQyxDQUFDcU8seUZBQUQsR0FBaUNuSSw2Q0FBSTtBQUN2QyxhQUFha0UsS0FBSyxDQUFDRSxNQUFOLENBQWFxRSxPQUFiLENBQXFCM08sSUFBSztBQUN2QyxHQU42QztFQU8zQyxDQUFDcU8sd0ZBQUQsR0FBZ0NuSSw2Q0FBSTtBQUN0QyxhQUFha0UsS0FBSyxDQUFDRSxNQUFOLENBQWEzRixLQUFiLENBQW1CM0UsSUFBSztBQUNyQyxHQVQ2QztFQVUzQzZPLE9BQU8sRUFBRTNJLDZDQUFJO0FBQ2YsYUFBYWtFLEtBQUssQ0FBQ0UsTUFBTixDQUFhdEssSUFBYixDQUFrQjhPLFNBQVU7QUFDekM7QUFaNkMsQ0FBM0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBR0E7QUFDQTs7O0FBU08sTUFBTUssYUFBYSxHQUFHLENBQUM7RUFBRUMsU0FBRjtFQUFhQyxjQUFiO0VBQTZCQyxrQkFBN0I7RUFBaURDO0FBQWpELENBQUQsS0FBMkU7RUFDdEcsTUFBTTNILE1BQU0sR0FBR3JCLHVEQUFVLENBQUNzQixTQUFELENBQXpCOztFQUNBLE1BQU0ySCxrQkFBa0IsR0FBSUMsQ0FBRCxJQUFvQztJQUM3RCxNQUFNQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBakI7SUFDQUwsY0FBYyxDQUFDSyxNQUFNLENBQUN6TixLQUFSLENBQWQ7RUFDRCxDQUhEOztFQUlBLE1BQU0wTixVQUFVLGtDQUFHLHVEQUFDLDZDQUFEO0lBQU0sSUFBSSxFQUFFO0VBQVosRUFBSCxDQUFoQjs7RUFDQSxvQkFDRTtJQUFLLFNBQVMsRUFBRVAsU0FBaEI7SUFBQSx3QkFDRSx1REFBQyw4Q0FBRDtNQUFBLHVCQUNFLHdEQUFDLHdEQUFEO1FBQU8sR0FBRyxFQUFFLEdBQVo7UUFBQSwwQ0FDRTtVQUFBO1FBQUEsRUFERixnQkFFRSx1REFBQyxnREFBRDtVQUNFLE9BQU8sK0JBQ0w7WUFBQSxtRUFFRTtjQUFBLFVBQU87WUFBUCxFQUZGO1VBQUEsRUFESyxDQURUO1VBQUEsdUJBUUUsdURBQUMsNkNBQUQ7WUFBTSxTQUFTLEVBQUV4SCxNQUFNLENBQUNnSSxJQUF4QjtZQUE4QixJQUFJLEVBQUMsYUFBbkM7WUFBaUQsSUFBSSxFQUFDO1VBQXREO1FBUkYsRUFGRjtNQUFBO0lBREYsRUFERixlQWdCRSx1REFBQyw4Q0FBRDtNQUNFLFdBQVcsRUFBQyxRQURkO01BRUUsWUFBWSxFQUFFTixrQkFGaEI7TUFHRSxLQUFLLEVBQUVDLFdBSFQ7TUFJRSxRQUFRLEVBQUVDLGtCQUpaO01BS0UsZUFBWSxvQkFMZDtNQU1FLE1BQU0sRUFBRUcsVUFOVjtNQU9FLFNBQVMsRUFBRS9ILE1BQU0sQ0FBQ2lJO0lBUHBCLEVBaEJGO0VBQUEsRUFERjtBQTRCRCxDQW5DTTs7QUFxQ1AsTUFBTWhJLFNBQVMsR0FBSXVDLEtBQUQsS0FBMkI7RUFDM0N3RixJQUFJLEVBQUUxSiw2Q0FBSTtBQUNaLG9CQUFvQmtFLEtBQUssQ0FBQ0MsT0FBTixDQUFjLEdBQWQsQ0FBbUI7QUFDdkMsR0FINkM7RUFJM0N3RixVQUFVLEVBQUUzSiw2Q0FBSTtBQUNsQjtBQUNBO0FBQ0E7QUFQNkMsQ0FBM0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUVBOztBQWNPLE1BQU00SixVQUFxQixHQUFHLFFBUy9CO0VBQUEsSUFUZ0M7SUFDcENDLE9BRG9DO0lBRXBDSCxJQUZvQztJQUdwQ0ksRUFIb0M7SUFJcENOLE1BSm9DO0lBS3BDTyxPQUxvQztJQU1wQ2IsU0FOb0M7SUFPcENjLGdCQUFnQixHQUFHO0VBUGlCLENBU2hDO0VBQUEsSUFEREMsSUFDQzs7RUFDSixNQUFNQyxTQUFTLEdBQUcsT0FBT0wsT0FBUCxLQUFtQixRQUFuQixHQUE4QkEsT0FBOUIsR0FBd0N4SCxTQUExRDtFQUVBLG9CQUNFLHVEQUFDLGdEQUFEO0lBQVMsT0FBTyxFQUFFd0gsT0FBbEI7SUFBMkIsU0FBUyxFQUFFRyxnQkFBdEM7SUFBQSxVQUNHRixFQUFFLGdCQUNELHVEQUFDLG1EQUFEO01BQ0UsT0FBTyxFQUFDLFdBRFY7TUFFRSxJQUFJLEVBQUMsTUFGUDtNQUdFLElBQUksRUFBRUosSUFIUjtNQUlFLElBQUksRUFBRUksRUFKUjtNQUtFLElBQUksRUFBQyxJQUxQO01BTUUsTUFBTSxFQUFFTjtJQU5WLEdBT01TLElBUE47TUFRRSxjQUFZQztJQVJkLEdBREMsZ0JBWUQsdURBQUMsK0NBQUQ7TUFDRSxTQUFTLEVBQUVoQixTQURiO01BRUUsT0FBTyxFQUFDLFdBRlY7TUFHRSxJQUFJLEVBQUMsTUFIUDtNQUlFLElBQUksRUFBQyxJQUpQO01BS0UsSUFBSSxFQUFFUSxJQUxSO01BTUUsSUFBSSxFQUFDLFFBTlA7TUFPRSxPQUFPLEVBQUVLO0lBUFgsR0FRTUUsSUFSTjtNQVNFLGNBQVlDO0lBVGQ7RUFiSixFQURGO0FBNEJELENBeENNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7QUFZTyxNQUFNSyx3QkFBd0IsR0FBRyxDQUFDO0VBQ3ZDckIsU0FEdUM7RUFFdkNzQixtQkFGdUM7RUFHdkNyTSxXQUh1QztFQUl2Q3NNLFVBSnVDO0VBS3ZDQztBQUx1QyxDQUFELEtBTTNCO0VBQ1gsTUFBTWhKLE1BQU0sR0FBR3JCLHVEQUFVLENBQUNzQixTQUFELENBQXpCOztFQUVBLE1BQU1nSixrQkFBa0IsR0FBSXRRLEtBQUQsSUFBZ0M7SUFDekQsT0FBTyxTQUFTdVEsb0JBQVQsR0FBZ0M7TUFDckMsT0FBT0YsaUJBQWlCLElBQUlBLGlCQUFpQixDQUFDclEsS0FBRCxDQUF0QyxnQkFDTCx1REFBQyw0Q0FBRDtRQUFLLElBQUksRUFBRXFRLGlCQUFpQixDQUFDclEsS0FBRCxDQUFqQixDQUF5QndRLE9BQXpCLENBQWlDLENBQWpDLENBQVg7UUFBZ0QsVUFBVSxFQUFFLENBQTVEO1FBQStELFNBQVMsRUFBRW5KLE1BQU0sQ0FBQ29KO01BQWpGLEVBREssR0FFSCxJQUZKO0lBR0QsQ0FKRDtFQUtELENBTkQ7O0VBUUEsTUFBTUMsY0FBYyxHQUFHN0ksTUFBTSxDQUFDQyxNQUFQLENBQWNtSSw2RUFBZCxFQUFpQ25OLEdBQWpDLENBQXNDOUMsS0FBRCxLQUFZO0lBQ3RFeUIsS0FBSyxFQUFFekIsS0FEK0Q7SUFFdEUwQixLQUFLLEVBQUUxQixLQUYrRDtJQUd0RThCLFNBQVMsRUFBRXdPLGtCQUFrQixDQUFDdFEsS0FBRDtFQUh5QyxDQUFaLENBQXJDLENBQXZCO0VBTUEsTUFBTTJRLGdCQUFnQixHQUFHLENBQUM3Qyx3RkFBRCxFQUErQkEseUZBQS9CLENBQXpCO0VBQ0EsTUFBTThDLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUM3TixHQUFqQixDQUFzQjlDLEtBQUQsS0FBWTtJQUNuRHlCLEtBQUssRUFBRXFPLGtEQUFVLENBQUM5UCxLQUFELENBRGtDO0lBRW5EMEIsS0FBSyxFQUFFMUIsS0FGNEM7SUFHbkQ4QixTQUFTLEVBQUV3TyxrQkFBa0IsQ0FBQ3RRLEtBQUQ7RUFIc0IsQ0FBWixDQUFyQixDQUFwQjtFQU1BLE1BQU02USxZQUFZLEdBQUdULFVBQVUsS0FBSyxTQUFmLEdBQTJCTSxjQUEzQixHQUE0Q0UsV0FBakU7RUFFQSxvQkFDRTtJQUFLLFNBQVMsRUFBRS9CLFNBQWhCO0lBQTJCLGVBQVksNkJBQXZDO0lBQUEsNENBQ0UsdURBQUMsOENBQUQ7TUFBQTtJQUFBLEVBREYsZ0JBRUUsdURBQUMseURBQUQ7TUFDRSxPQUFPLEVBQUVnQyxZQURYO01BRUUsS0FBSyxFQUFFL00sV0FGVDtNQUdFLFFBQVEsRUFBRXFNLG1CQUhaO01BSUUsT0FBTyxFQUFHVyxDQUFELElBQU87UUFDZCxJQUFJQSxDQUFDLEtBQUtoTixXQUFWLEVBQXVCO1VBQ3JCcU0sbUJBQW1CLENBQUNuSSxTQUFELENBQW5CO1FBQ0Q7TUFDRjtJQVJILEVBRkY7RUFBQSxFQURGO0FBZUQsQ0EvQ007O0FBaURQLFNBQVNWLFNBQVQsQ0FBbUJ1QyxLQUFuQixFQUF5QztFQUN2QyxPQUFPO0lBQ0w0RyxHQUFHLEVBQUU5Syw2Q0FBSTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUJrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxJQUFkLEVBQW9CLEdBQXBCLENBQXlCO0FBQzFDO0FBQ0EscUJBQXFCRCxLQUFLLENBQUNDLE9BQU4sQ0FBYyxHQUFkLENBQW1CO0FBQ3hDO0VBUFMsQ0FBUDtBQVNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFRDtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFPTyxNQUFNMkgsVUFBcUIsR0FBRyxDQUFDO0VBQUVDLFVBQUY7RUFBY2pLO0FBQWQsQ0FBRCxLQUErQjtFQUNsRSxNQUFNSixNQUFNLEdBQUdyQix1REFBVSxDQUFDc0IsU0FBRCxDQUF6QjtFQUVBLE1BQU0zRCxLQUFLLEdBQUdpRCw2RkFBMEIsQ0FBRTVHLEtBQUQsSUFBV0EsS0FBSyxDQUFDeUksU0FBbEIsQ0FBeEM7RUFDQSxNQUFNa0osZ0JBQWdCLEdBQUcvTCw4Q0FBTyxDQUFDeUwsa0VBQUQsRUFBc0IsRUFBdEIsQ0FBaEM7RUFDQSxNQUFNTyxvQkFBb0IsR0FBR0osc0ZBQXlCLENBQUNFLFVBQUQsQ0FBdEQ7RUFFQSxNQUFNRyxrQkFBa0IsR0FBR2pNLDhDQUFPLENBQ2hDLE1BQU0rTCxnQkFBZ0IsQ0FBQ3JNLE1BQWpCLENBQXlCd00sRUFBRDtJQUFBOztJQUFBLHlCQUFRbk8sS0FBSyxDQUFDbU8sRUFBRSxDQUFDcFMsSUFBSixDQUFiLG1EQUFRLGVBQWdCbUosT0FBeEI7RUFBQSxDQUF4QixDQUQwQixFQUVoQyxDQUFDbEYsS0FBRCxFQUFRZ08sZ0JBQVIsQ0FGZ0MsQ0FBbEM7RUFLQSxNQUFNO0lBQUVJLGFBQUY7SUFBaUJDLFlBQWpCO0lBQStCQyxJQUEvQjtJQUFxQ0M7RUFBckMsSUFBbURmLG1FQUFhLENBQ3BFUyxvQkFEb0UsRUFFcEUsQ0FGb0UsRUFHcEVWLHdFQUhvRSxDQUF0RTtFQU1BLG9CQUNFO0lBQVMsU0FBUyxFQUFFN0osTUFBTSxDQUFDOEssT0FBM0I7SUFBQSx3QkFDRTtNQUFLLFNBQVMsRUFBRTlLLE1BQU0sQ0FBQytLLGFBQXZCO01BQUEsb0NBQ0U7UUFBQTtNQUFBLEVBREYsR0FFR1Asa0JBQWtCLENBQUM3SSxNQUFuQixnQkFDQyx3REFBQywyREFBRDtRQUNFLFNBQVMsRUFBRTNCLE1BQU0sQ0FBQ2dMLE1BRHBCO1FBRUUsSUFBSSxFQUFHLHNCQUFxQlIsa0JBQWtCLENBQUM3SSxNQUFPLElBQUcrSCxnREFBUyxDQUFDLFFBQUQsRUFBV2Msa0JBQWtCLENBQUM3SSxNQUE5QixDQUFzQztNQUYxRyxFQURELGdDQU1DLGtFQU5ELENBRkg7SUFBQSxFQURGLEVBYUdrSixTQUFTLENBQUNwUCxHQUFWLENBQWMsQ0FBQztNQUFFK0ssS0FBRjtNQUFTRDtJQUFULENBQUQsS0FBMEI7TUFDdkMsb0JBQ0Usd0RBQUMsbURBQUQ7UUFDRSxLQUFLLEVBQUVDLEtBRFQ7UUFHRSxTQUFTLEVBQUVELFNBSGI7UUFJRSxTQUFTLEVBQUVuRztNQUpiLEdBRVEsR0FBRTZKLG9FQUFpQixDQUFDMUQsU0FBUyxDQUFDWixXQUFYLENBQXdCLElBQUdZLFNBQVMsQ0FBQ2xPLElBQUssSUFBR21PLEtBQUssQ0FBQ25PLElBQUssRUFGbkYsQ0FERjtJQVFELENBVEEsQ0FiSCxFQXVCRyxDQUFBZ1MsVUFBVSxTQUFWLElBQUFBLFVBQVUsV0FBVixZQUFBQSxVQUFVLENBQUUxSSxNQUFaLE1BQXVCLENBQXZCLElBQTRCLENBQUMsQ0FBQzJJLGdCQUFnQixDQUFDM0ksTUFBL0MsOEJBQXlEO01BQUE7SUFBQSxFQUF6RCxFQXZCSCxFQXdCRyxDQUFDMkksZ0JBQWdCLENBQUMzSSxNQUFsQixnQ0FBNEI7TUFBQTtJQUFBLEVBQTVCLEVBeEJILGVBeUJFLHdEQUFDLG1EQUFEO01BQ0UsU0FBUyxFQUFFM0IsTUFBTSxDQUFDaUwsVUFEcEI7TUFFRSxXQUFXLEVBQUVMLElBRmY7TUFHRSxhQUFhLEVBQUVGLGFBSGpCO01BSUUsVUFBVSxFQUFFQyxZQUpkO01BS0Usa0JBQWtCO0lBTHBCLEVBekJGO0VBQUEsRUFERjtBQW1DRCxDQXJETTs7QUF1RFAsTUFBTTFLLFNBQVMsR0FBSXVDLEtBQUQsS0FBMkI7RUFDM0N3SSxNQUFNLEVBQUUxTSw2Q0FBSTtBQUNkO0FBQ0EsR0FINkM7RUFJM0N5TSxhQUFhLEVBQUV6TSw2Q0FBSTtBQUNyQjtBQUNBO0FBQ0EsR0FQNkM7RUFRM0N3TSxPQUFPLEVBQUV4TSw2Q0FBSTtBQUNmLHFCQUFxQmtFLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdEMsR0FWNkM7RUFXM0N3SSxVQUFVLEVBQUVsQix1RUFBbUIsQ0FBQ3ZILEtBQUQ7QUFYWSxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWNPLFNBQVNnSixtQkFBVCxDQUE2QjlRLEtBQTdCLEVBQStEO0VBQUE7O0VBQ3BFLE1BQU07SUFBRTZMLFNBQUY7SUFBYUMsS0FBYjtJQUFvQmlGO0VBQXBCLElBQWdDL1EsS0FBdEM7RUFDQSxNQUFNc0YsTUFBTSxHQUFHckIsdURBQVUsQ0FBQ3NCLFNBQUQsQ0FBekI7RUFDQSxNQUFNbkosUUFBUSxHQUFHSix3REFBVyxFQUE1QjtFQUNBLE1BQU07SUFBRThLLE9BQUY7SUFBV3pFLEtBQVg7SUFBa0J3RTtFQUFsQiw2QkFDSmhDLDZGQUEwQixDQUFFNUcsS0FBRCxJQUFXQSxLQUFLLENBQUMrUyw0QkFBbEIsQ0FEdEIseUVBQ3lFSixrRUFEL0U7RUFHQSxNQUFNSyxhQUFhLEdBQUdwTiw4Q0FBTyxDQUMzQjtJQUFBOztJQUFBLE9BQW1CO01BQ2pCcU4sYUFBYSxFQUFFckYsU0FBUyxDQUFDbE8sSUFEUjtNQUVqQndULFNBQVMsRUFBRXJGLEtBQUssQ0FBQ25PLElBRkE7TUFHakJ5VCxhQUFhLHFCQUFFdEYsS0FBSyxDQUFDeEYsUUFBUiw2REFBb0I7SUFIaEIsQ0FBbkI7RUFBQSxDQUQyQixFQU0zQixDQUFDdUYsU0FBRCxFQUFZQyxLQUFaLENBTjJCLENBQTdCLENBUG9FLENBZ0JwRTs7RUFDQWhRLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUkrSyxVQUFVLElBQUksQ0FBQ0MsT0FBZixJQUEwQixDQUFDekUsS0FBL0IsRUFBc0M7TUFDcEMwTyxPQUFPO0lBQ1I7RUFDRixDQUpRLEVBSU4sQ0FBQ2xLLFVBQUQsRUFBYUMsT0FBYixFQUFzQmlLLE9BQXRCLEVBQStCMU8sS0FBL0IsQ0FKTSxDQUFUO0VBTUFuRyxxRUFBVSxDQUFFK0IsS0FBRCxJQUFXQSxLQUFLLENBQUNvVCxlQUFOLENBQXNCTCw0QkFBbEMsQ0FBVjs7RUFFQSxNQUFNTSxRQUFRLEdBQUl2TCxNQUFELElBQXdCO0lBQ3ZDM0osUUFBUSxDQUNOc1Usa0ZBQWtDLENBQUM7TUFDakNhLGVBQWUsRUFBRVoscUVBQWtCLENBQUM5RSxTQUFTLENBQUNaLFdBQVgsQ0FERjtNQUVqQ2tHLFNBQVMsRUFBRXJGLEtBQUssQ0FBQ25PLElBRmdCO01BR2pDNlQsWUFBWSxFQUFFekwsTUFBTSxDQUFDb0wsU0FIWTtNQUlqQ0QsYUFBYSxFQUFFckYsU0FBUyxDQUFDbE8sSUFKUTtNQUtqQzhULGdCQUFnQixFQUFFMUwsTUFBTSxDQUFDbUwsYUFMUTtNQU1qQ0UsYUFBYSxFQUFFckwsTUFBTSxDQUFDcUwsYUFBUCxJQUF3Qm5MO0lBTk4sQ0FBRCxDQUQ1QixDQUFSO0VBVUQsQ0FYRDs7RUFhQSxvQkFDRSx3REFBQyw4Q0FBRDtJQUNFLFNBQVMsRUFBRVgsTUFBTSxDQUFDb00sS0FEcEI7SUFFRSxNQUFNLEVBQUUsSUFGVjtJQUdFLEtBQUssRUFBQyw4QkFIUjtJQUlFLFNBQVMsRUFBRVgsT0FKYjtJQUtFLGVBQWUsRUFBRUEsT0FMbkI7SUFBQSx1QkFPRSx3REFBQyw2Q0FBRDtNQUFNLGFBQWEsRUFBRUUsYUFBckI7TUFBb0MsUUFBUSxFQUFFSyxRQUE5QztNQUFBLFVBQ0csQ0FBQztRQUFFSyxRQUFGO1FBQVlDLE1BQVo7UUFBb0JDLFNBQVMsRUFBRTtVQUFFQztRQUFGO01BQS9CLENBQUQ7UUFBQTs7UUFBQSxvQkFDQztVQUFBLHdCQUNFLHdEQUFDLDhDQUFEO1lBQU8sS0FBSyxFQUFDLFdBQWI7WUFBeUIsT0FBTyxFQUFFLENBQUMsQ0FBQ0YsTUFBTSxDQUFDVixhQUEzQztZQUEwRCxLQUFLLDJCQUFFVSxNQUFNLENBQUNWLGFBQVQsMERBQUUsc0JBQXNCYSxPQUF2RjtZQUFBLHVCQUNFLHdEQUFDLDhDQUFEO2NBQ0UsRUFBRSxFQUFDO1lBREwsR0FFTUosUUFBUSxDQUFDLGVBQUQsRUFBa0I7Y0FDNUJLLFFBQVEsRUFBRTtZQURrQixDQUFsQixDQUZkO1VBREYsRUFERixlQVNFLHdEQUFDLDhDQUFEO1lBQU8sS0FBSyxFQUFDLFlBQWI7WUFBMEIsT0FBTyxFQUFFLENBQUMsQ0FBQ0osTUFBTSxDQUFDVCxTQUE1QztZQUF1RCxLQUFLLHVCQUFFUyxNQUFNLENBQUNULFNBQVQsc0RBQUUsa0JBQWtCWSxPQUFoRjtZQUFBLHVCQUNFLHdEQUFDLDhDQUFEO2NBQ0UsRUFBRSxFQUFDO1lBREwsR0FFTUosUUFBUSxDQUFDLFdBQUQsRUFBYztjQUN4QkssUUFBUSxFQUFFO1lBRGMsQ0FBZCxDQUZkO1VBREYsRUFURixlQWlCRSx3REFBQyw4Q0FBRDtZQUNFLEtBQUssRUFBQyxnQ0FEUjtZQUVFLE9BQU8sRUFBRSxDQUFDLENBQUNKLE1BQU0sQ0FBQ1IsYUFGcEI7WUFHRSxLQUFLLDJCQUFFUSxNQUFNLENBQUNSLGFBQVQsMERBQUUsc0JBQXNCVyxPQUgvQjtZQUFBLHVCQUtFLHdEQUFDLDhDQUFEO2NBQ0UsRUFBRSxFQUFDLGVBREw7Y0FFRSxXQUFXLEVBQUM7WUFGZCxHQUdNSixRQUFRLENBQUMsZUFBRCxFQUFrQjtjQUM1Qk0sT0FBTyxFQUFFcEIsa0VBQXlCQTtZQUROLENBQWxCLENBSGQ7VUFMRixFQWpCRixlQStCRSx5REFBQyx3REFBRDtZQUFBLDhDQUNFLHdEQUFDLCtDQUFEO2NBQVEsT0FBTyxFQUFDLFdBQWhCO2NBQTRCLElBQUksRUFBQyxRQUFqQztjQUEwQyxRQUFRLEVBQUUvSixPQUFwRDtjQUE2RCxPQUFPLEVBQUVpSyxPQUF0RTtjQUErRSxJQUFJLEVBQUMsU0FBcEY7Y0FBQTtZQUFBLEVBREYsZ0JBSUUsd0RBQUMsK0NBQUQ7Y0FBUSxJQUFJLEVBQUMsUUFBYjtjQUFzQixRQUFRLEVBQUUsQ0FBQ2UsT0FBRCxJQUFZaEwsT0FBNUM7Y0FBQSxVQUNHQSxPQUFPLEdBQUcsV0FBSCxHQUFpQjtZQUQzQixFQUpGO1VBQUEsRUEvQkY7UUFBQSxFQUREO01BQUE7SUFESCxHQUE2RG9MLElBQUksQ0FBQ0MsU0FBTCxDQUFlbEIsYUFBZixDQUE3RDtFQVBGLEVBREY7QUFzREQ7O0FBRUQsTUFBTTFMLFNBQVMsR0FBRyxPQUFPO0VBQ3ZCbU0sS0FBSyxFQUFFOU4sNkNBQUk7QUFDYjtBQUNBO0FBSHlCLENBQVAsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBT08sTUFBTTBPLFlBQXVCLEdBQUcsQ0FBQztFQUFFM0MsVUFBRjtFQUFjaks7QUFBZCxDQUFELEtBQStCO0VBQ3BFLE1BQU1KLE1BQU0sR0FBR3JCLHVEQUFVLENBQUNzQixTQUFELENBQXpCO0VBQ0EsTUFBTSxDQUFDaEYsV0FBRCxJQUFnQjRELDZFQUFjLEVBQXBDO0VBRUEsTUFBTTtJQUFFMkM7RUFBRixJQUFjakMsNkZBQTBCLENBQzNDNUcsS0FBRCxJQUFXQSxLQUFLLENBQUN5SSxTQUFOLENBQWdCMkwsd0VBQWhCLEtBQThDekIsbUVBRGIsQ0FBOUM7RUFJQSxNQUFNMkIsZ0JBQWdCLEdBQUdoUyxXQUFXLENBQUMsTUFBRCxDQUFYLEtBQXdCLFNBQWpEO0VBQ0EsTUFBTWlTLGdCQUFnQixHQUFHRCxnQkFBZ0IsR0FBRzVDLFVBQUgsR0FBZ0J5Qyw0RkFBMEIsQ0FBQ3pDLFVBQUQsQ0FBbkY7RUFFQSxNQUFNRSxvQkFBb0IsR0FBR0osc0ZBQXlCLENBQUMrQyxnQkFBRCxDQUF0RDtFQUVBLE1BQU07SUFBRXhDLGFBQUY7SUFBaUJDLFlBQWpCO0lBQStCQyxJQUEvQjtJQUFxQ0M7RUFBckMsSUFBbURmLG1FQUFhLENBQ3BFUyxvQkFEb0UsRUFFcEUsQ0FGb0UsRUFHcEVWLHdFQUhvRSxDQUF0RTtFQU1BLG9CQUNFO0lBQVMsU0FBUyxFQUFFN0osTUFBTSxDQUFDOEssT0FBM0I7SUFBQSx3QkFDRTtNQUFLLFNBQVMsRUFBRTlLLE1BQU0sQ0FBQytLLGFBQXZCO01BQUEsb0NBQ0U7UUFBQTtNQUFBLEVBREYsR0FFR3ZKLE9BQU8sZ0JBQUcsd0RBQUMsMkRBQUQ7UUFBb0IsU0FBUyxFQUFFeEIsTUFBTSxDQUFDZ0wsTUFBdEM7UUFBOEMsSUFBSSxFQUFDO01BQW5ELEVBQUgsZ0NBQXdFLGtFQUF4RSxDQUZWO0lBQUEsRUFERixFQU1HSCxTQUFTLENBQUNwUCxHQUFWLENBQWMsQ0FBQztNQUFFK0ssS0FBRjtNQUFTRDtJQUFULENBQUQsa0JBQ2Isd0RBQUMsb0RBQUQ7TUFBWSxLQUFLLEVBQUVDLEtBQW5CO01BQWtFLFNBQVMsRUFBRUQsU0FBN0U7TUFBd0YsU0FBUyxFQUFFbkc7SUFBbkcsR0FBZ0MsR0FBRW1HLFNBQVMsQ0FBQ2xPLElBQUssSUFBR21PLEtBQUssQ0FBQ25PLElBQUssRUFBL0QsQ0FERCxDQU5ILEVBU0csQ0FBQTZVLGdCQUFnQixTQUFoQixJQUFBQSxnQkFBZ0IsV0FBaEIsWUFBQUEsZ0JBQWdCLENBQUV2TCxNQUFsQixNQUE2QixDQUE3Qiw4QkFBa0M7TUFBQTtJQUFBLEVBQWxDLEVBVEgsZUFVRSx3REFBQyxtREFBRDtNQUNFLFNBQVMsRUFBRTNCLE1BQU0sQ0FBQ2lMLFVBRHBCO01BRUUsV0FBVyxFQUFFTCxJQUZmO01BR0UsYUFBYSxFQUFFRixhQUhqQjtNQUlFLFVBQVUsRUFBRUMsWUFKZDtNQUtFLGtCQUFrQjtJQUxwQixFQVZGO0VBQUEsRUFERjtBQW9CRCxDQXZDTTs7QUF5Q1AsTUFBTTFLLFNBQVMsR0FBSXVDLEtBQUQsS0FBMkI7RUFDM0N3SSxNQUFNLEVBQUUxTSw2Q0FBSTtBQUNkO0FBQ0EsR0FINkM7RUFJM0N5TSxhQUFhLEVBQUV6TSw2Q0FBSTtBQUNyQjtBQUNBO0FBQ0EsR0FQNkM7RUFRM0N3TSxPQUFPLEVBQUV4TSw2Q0FBSTtBQUNmLHFCQUFxQmtFLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdEMsR0FWNkM7RUFXM0N3SSxVQUFVLEVBQUVsQix1RUFBbUIsQ0FBQ3ZILEtBQUQ7QUFYWSxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBRUE7QUFDQTtBQUVBOztBQUVPLE1BQU16RCxhQUFpQixHQUFHLE1BQU07RUFDckMsTUFBTTtJQUFFNkIscUJBQUY7SUFBeUJDO0VBQXpCLElBQWlEcEIseUVBQWMsRUFBckU7O0VBRUEsSUFBSW1CLHFCQUFxQixJQUFJQyxtQkFBN0IsRUFBa0Q7SUFDaEQsc0RBQ0UsdURBQUMscUZBQUQ7TUFDRSxLQUFLLEVBQUMseUNBRFI7TUFFRSxVQUFVLEVBQUMsTUFGYjtNQUdFLFVBQVUsRUFBRSxjQUhkO01BSUUsV0FBVyxFQUFDLGdCQUpkO01BS0UsTUFBTSxFQUFDLG1FQUxUO01BTUUsVUFBVSxFQUFDLDJCQU5iO01BT0UsZUFBZSxFQUFDLFlBUGxCO01BUUUsWUFBWSxFQUFDO0lBUmYsRUFERjtFQVlEOztFQUNELDhEQUFPLHVEQUFDLHlEQUFEO0lBQWtCLE9BQU8sRUFBQyxxQkFBMUI7SUFBZ0QsbUJBQW1CLGVBQUU7RUFBckUsRUFBUDtBQUNELENBbEJNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BQO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxNQUFNK00sdUJBQXVCLEdBQUcsRUFBaEM7QUFFTyxNQUFNQyxXQUFzQixHQUFHLENBQUM7RUFBRWhXO0FBQUYsQ0FBRCxLQUFjO0VBQ2xELE1BQU1tSSxNQUFNLEdBQUdyQix1REFBVSxDQUFDc0IsU0FBRCxDQUF6QjtFQUNBLE1BQU07SUFDSnNHLFNBQVMsRUFBRTtNQUFFWjtJQUFGO0VBRFAsSUFFRjlOLElBRko7RUFJQSxNQUFNaVcsV0FBVyxHQUFHdE4sTUFBTSxDQUFDdU4sT0FBUCxDQUFlbFcsSUFBSSxDQUFDaVcsV0FBcEIsRUFBaUM3UCxNQUFqQyxDQUF3QyxDQUFDLENBQUM4RixDQUFELEVBQUkxSixLQUFKLENBQUQsS0FBZ0IsQ0FBQyxDQUFDQSxLQUFLLENBQUMyVCxJQUFOLEVBQTFELENBQXBCO0VBRUEsb0JBQ0U7SUFBQSx3QkFDRSx3REFBQywrRUFBRDtNQUEwQixJQUFJLEVBQUVuVyxJQUFoQztNQUFzQyxXQUFXLEVBQUU4TjtJQUFuRCxFQURGLGVBRUU7TUFBSyxTQUFTLEVBQUUzRixNQUFNLENBQUM4SyxPQUF2QjtNQUFBLHdCQUNFO1FBQUssU0FBUyxFQUFFOUssTUFBTSxDQUFDaU8sUUFBdkI7UUFBQSxXQUNHLENBQUMsQ0FBQ3BXLElBQUksQ0FBQ3FXLE1BQVAsSUFBaUIsQ0FBQyxDQUFDMU4sTUFBTSxDQUFDb0IsSUFBUCxDQUFZL0osSUFBSSxDQUFDcVcsTUFBakIsRUFBeUJ2TSxNQUE1QyxpQkFDQyx3REFBQyx1REFBRDtVQUFjLEtBQUssRUFBQyxRQUFwQjtVQUE2QixVQUFVLEVBQUUsSUFBekM7VUFBQSx1QkFDRSx3REFBQyxxREFBRDtZQUFhLE1BQU0sRUFBRTlKLElBQUksQ0FBQ3FXO1VBQTFCO1FBREYsRUFGSixlQU1FLHdEQUFDLHlFQUFEO1VBQXVCLFdBQVcsRUFBRXZJLFdBQXBDO1VBQWlELElBQUksRUFBRTlOLElBQXZEO1VBQTZELFdBQVcsRUFBRWlXO1FBQTFFLEVBTkYsZUFPRSx3REFBQywyRUFBRDtVQUF3QixXQUFXLEVBQUVBO1FBQXJDLEVBUEY7TUFBQSxFQURGLGVBVUU7UUFBSyxTQUFTLEVBQUU5TixNQUFNLENBQUNtTyxTQUF2QjtRQUFBLHVCQUNFLHdEQUFDLDJFQUFEO1VBQXdCLFdBQVcsRUFBRXhJLFdBQXJDO1VBQWtELElBQUksRUFBRTlOO1FBQXhEO01BREYsRUFWRjtJQUFBLEVBRkYsZUFnQkUsd0RBQUMsdUZBQUQ7TUFBOEIsSUFBSSxFQUFFQSxJQUFwQztNQUEwQyxpQkFBaUIsRUFBRStWO0lBQTdELEVBaEJGO0VBQUEsRUFERjtBQW9CRCxDQTVCTTtBQThCQSxNQUFNM04sU0FBUyxHQUFJdUMsS0FBRCxLQUEyQjtFQUNsRHNJLE9BQU8sRUFBRXhNLDZDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsTUFBTWtFLEtBQUssQ0FBQzBCLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQTZCO0FBQ25DO0FBQ0E7QUFDQSxHQVJvRDtFQVNsRDhKLFFBQVEsRUFBRTNQLDZDQUFJO0FBQ2hCO0FBQ0EsR0FYb0Q7RUFZbEQ2UCxTQUFTLEVBQUU3UCw2Q0FBSTtBQUNqQixNQUFNa0UsS0FBSyxDQUFDMEIsV0FBTixDQUFrQmtLLEVBQWxCLENBQXFCLElBQXJCLENBQTJCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBakJvRCxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQU9PLE1BQU1iLHdCQUFtQyxHQUFHLENBQUM7RUFBRTFWLElBQUY7RUFBUThOO0FBQVIsQ0FBRCxLQUEyQjtFQUFBOztFQUM1RSxNQUFNN08sUUFBUSxHQUFHSix3REFBVyxFQUE1QjtFQUNBLE1BQU15SixRQUFRLEdBQUcxQiw4REFBVyxFQUE1QjtFQUNBLE1BQU0zQyxTQUFTLEdBQUcyUyxpRkFBa0IsRUFBcEM7RUFDQSxNQUFNbE0sS0FBSyxHQUFHNUQsdURBQVUsQ0FBQ3NCLFNBQUQsQ0FBeEI7RUFDQSxNQUFNO0lBQUVzRyxTQUFGO0lBQWFDLEtBQWI7SUFBb0IrSTtFQUFwQixJQUFrQzFYLElBQXhDO0VBQ0EsTUFBTSxDQUFDMlgsWUFBRCxFQUFlQyxlQUFmLElBQWtDalIsK0NBQVEsRUFBaEQ7RUFDQSxNQUFNa1IsT0FBTyxHQUFHSixpRUFBa0IsQ0FBQ3pYLElBQUksQ0FBQzBYLFNBQU4sQ0FBbEIsNEJBQXFDMVgsSUFBSSxDQUFDMFgsU0FBTCxDQUFlSSxhQUFmLENBQTZCaFYsRUFBbEUseUVBQXdFLEVBQXhFLEdBQTZFLEVBQTdGO0VBQ0EsTUFBTTtJQUFFaVYsaUJBQUY7SUFBcUJDO0VBQXJCLElBQStDakIsa0ZBQW9CLENBQUNjLE9BQUQsQ0FBekU7RUFFQSxNQUFNSSxzQkFBc0IsR0FBR2Qsd0VBQW9CLENBQUNySixXQUFELENBQXBCLEdBQzNCQSxXQUQyQiw0QkFFM0JtSiwwRUFBb0IsQ0FBQ25KLFdBQVcsQ0FBQ29LLFFBQVosQ0FBcUJDLGVBQXRCLENBRk8sMERBRTNCLHNCQUE0RDNYLElBRmhFO0VBR0EsTUFBTTRULGVBQWUsR0FBR1osc0VBQWtCLENBQUMxRixXQUFELENBQTFDO0VBRUEsTUFBTXNLLG9CQUFvQixHQUFHak4sbUZBQUEsQ0FBeUIwTCw2RUFBekIsQ0FBN0I7RUFDQSxNQUFNMEIsYUFBYSxHQUFHZCxpRUFBa0IsQ0FBQ3pYLElBQUksQ0FBQzBYLFNBQU4sQ0FBbEIsSUFBc0NjLE9BQU8sQ0FBQ3hZLElBQUksQ0FBQzBYLFNBQUwsQ0FBZUksYUFBZixDQUE2QlcsVUFBOUIsQ0FBbkU7RUFFQSxNQUFNQyxXQUEwQixHQUFHLEVBQW5DO0VBQ0EsTUFBTUMsWUFBMkIsR0FBRyxFQUFwQztFQUVBLE1BQU1DLFdBQVcsR0FBR3BCLG1FQUFvQixDQUFDN0ksS0FBRCxDQUF4QztFQUNBLE1BQU07SUFBRWtLLFVBQUY7SUFBY0M7RUFBZCxJQUE4QmhDLDJFQUFpQixDQUFDMUMsZUFBRCxFQUFrQnNELFNBQWxCLENBQXJEO0VBQ0EsTUFBTWxOLFFBQVEsR0FBR2xDLFFBQVEsQ0FBQ21DLFFBQVQsR0FBb0JuQyxRQUFRLENBQUNySSxNQUE5QztFQUNBLE1BQU04WSxVQUFVLEdBQUdDLFVBQVUsQ0FBQzFRLFFBQVEsQ0FBQ21DLFFBQVYsQ0FBN0I7O0VBRUEsTUFBTXdPLFVBQVUsR0FBRyxNQUFNO0lBQ3ZCLElBQUl0QixZQUFZLElBQUlBLFlBQVksQ0FBQ0QsU0FBakMsRUFBNEM7TUFDMUMsTUFBTXdCLFVBQVUsR0FBRzNCLDBEQUFBLENBQ2pCL0Qsc0VBQWtCLENBQUNtRSxZQUFZLENBQUNqSixTQUFiLENBQXVCWixXQUF4QixDQURELEVBRWpCNkosWUFBWSxDQUFDakosU0FBYixDQUF1QmxPLElBRk4sRUFHakJtWCxZQUFZLENBQUNoSixLQUFiLENBQW1Cbk8sSUFIRixFQUlqQm1YLFlBQVksQ0FBQ0QsU0FKSSxDQUFuQjtNQU9BelksUUFBUSxDQUFDK1gsaUVBQWdCLENBQUNrQyxVQUFELEVBQWE7UUFBRUUsVUFBVSxFQUFFTCxVQUFVLEdBQUcsZ0JBQUgsR0FBc0JqUTtNQUE5QyxDQUFiLENBQWpCLENBQVI7TUFDQThPLGVBQWUsQ0FBQzlPLFNBQUQsQ0FBZjtJQUNEO0VBQ0YsQ0FaRDs7RUFjQSxNQUFNdVEsYUFBYSxHQUFHLE1BQU07SUFDMUIsSUFBSXJNLHNFQUFrQixDQUFDYyxXQUFELENBQXRCLEVBQXFDO01BQ25DLE1BQU07UUFBRXdMLE1BQUY7UUFBVUM7TUFBVixJQUF3QnRZLG9EQUE5QjtNQUNBLE1BQU11WSxPQUFPLEdBQUdELFNBQVMsS0FBSyxFQUFkLEdBQW9CLEdBQUVELE1BQU8sR0FBRUMsU0FBVSxHQUF6QyxHQUE4Q3RZLDJEQUE5RDtNQUNBLE1BQU1kLE9BQU8sR0FBSSxHQUFFc1osa0JBQWtCLENBQUMzTCxXQUFXLENBQUN0TixJQUFiLENBQW1CLElBQUdpWixrQkFBa0IsQ0FBQ3paLElBQUksQ0FBQ1EsSUFBTixDQUFZLEVBQXpGO01BQ0EsT0FBUSxHQUFFZ1osT0FBUSxZQUFXclosT0FBUSxPQUFyQztJQUNEOztJQUVELE9BQU91WixNQUFNLENBQUNwUixRQUFQLENBQWdCcVIsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQVA7RUFDRCxDQVRELENBeEM0RSxDQW1ENUU7RUFDQTs7O0VBQ0EsSUFBSTVNLHNFQUFrQixDQUFDYyxXQUFELENBQWxCLElBQW1Dc0ssb0JBQW5DLElBQTJELENBQUNRLFdBQWhFLEVBQTZFO0lBQzNFRixXQUFXLENBQUN6VCxJQUFaLGVBQ0Usd0RBQUMsbURBQUQ7TUFDRSxTQUFTLEVBQUV5RixLQUFLLENBQUNtUCxNQURuQjtNQUVFLElBQUksRUFBQyxJQUZQO01BSUUsT0FBTyxFQUFDLFNBSlY7TUFLRSxJQUFJLEVBQUMsWUFMUDtNQU1FLE1BQU0sRUFBQyxTQU5UO01BT0UsSUFBSSxFQUFFekMsK0RBQWlCLENBQUN0SixXQUFXLENBQUN0TixJQUFiLEVBQW1CUixJQUFJLENBQUM2TixLQUF4QixDQVB6QjtNQUFBO0lBQUEsR0FHTSxTQUhOLENBREY7RUFhRDs7RUFDRCxJQUFJN04sSUFBSSxDQUFDaVcsV0FBTCxDQUFpQmlCLG9FQUFqQixDQUFKLEVBQTZDO0lBQzNDd0IsV0FBVyxDQUFDelQsSUFBWixlQUNFLHdEQUFDLG1EQUFEO01BQ0UsU0FBUyxFQUFFeUYsS0FBSyxDQUFDbVAsTUFEbkI7TUFFRSxJQUFJLEVBQUMsSUFGUDtNQUlFLE9BQU8sRUFBQyxTQUpWO01BS0UsSUFBSSxFQUFDLE1BTFA7TUFNRSxNQUFNLEVBQUMsU0FOVDtNQU9FLElBQUksRUFBRTdaLElBQUksQ0FBQ2lXLFdBQUwsQ0FBaUJpQixvRUFBakIsQ0FQUjtNQUFBO0lBQUEsR0FHTSxTQUhOLENBREY7RUFhRDs7RUFDRCxJQUFJbFgsSUFBSSxDQUFDaVcsV0FBTCxDQUFpQmlCLHNFQUFqQixDQUFKLEVBQStDO0lBQzdDLE1BQU02QyxZQUFZLEdBQUcvWixJQUFJLENBQUNpVyxXQUFMLENBQWlCaUIsc0VBQWpCLENBQXJCOztJQUNBLElBQUk2QyxZQUFKLEVBQWtCO01BQ2hCckIsV0FBVyxDQUFDelQsSUFBWixlQUNFLHdEQUFDLG1EQUFEO1FBQ0UsU0FBUyxFQUFFeUYsS0FBSyxDQUFDbVAsTUFEbkI7UUFFRSxJQUFJLEVBQUMsSUFGUDtRQUlFLE9BQU8sRUFBQyxTQUpWO1FBS0UsSUFBSSxFQUFDLE1BTFA7UUFNRSxNQUFNLEVBQUMsU0FOVDtRQU9FLElBQUksRUFBRyxLQUFJSixrQkFBa0IsQ0FBQ00sWUFBRCxDQUFlLEVBUDlDO1FBQUE7TUFBQSxHQUdNLFdBSE4sQ0FERjtNQWFBLE1BQU0xWixPQUFPLEdBQUdMLElBQUksQ0FBQ2lXLFdBQUwsQ0FBaUJpQixpRUFBakIsQ0FBaEI7O01BQ0EsSUFBSTdXLE9BQUosRUFBYTtRQUNYcVksV0FBVyxDQUFDelQsSUFBWixlQUNFLHdEQUFDLG1EQUFEO1VBQ0UsU0FBUyxFQUFFeUYsS0FBSyxDQUFDbVAsTUFEbkI7VUFFRSxJQUFJLEVBQUMsSUFGUDtVQUlFLE9BQU8sRUFBQyxTQUpWO1VBS0UsSUFBSSxFQUFDLE1BTFA7VUFNRSxNQUFNLEVBQUMsU0FOVDtVQU9FLElBQUksRUFBRyxLQUFJSixrQkFBa0IsQ0FBQ00sWUFBRCxDQUFlLGNBQWFOLGtCQUFrQixDQUFDcFosT0FBRCxDQUFVLEVBUHZGO1VBQUE7UUFBQSxHQUdNLE9BSE4sQ0FERjtNQWFEO0lBQ0Y7RUFDRjs7RUFFRCxJQUFJNFgsc0JBQXNCLElBQUk5TSwrRUFBQSxDQUFxQjBMLGlGQUFyQixFQUFpRTFMLDhFQUFqRSxDQUE5QixFQUFxSDtJQUNuSHVOLFdBQVcsQ0FBQ3pULElBQVosZUFDRSx3REFBQyxtREFBRDtNQUNFLFNBQVMsRUFBRXlGLEtBQUssQ0FBQ21QLE1BRG5CO01BRUUsSUFBSSxFQUFDLElBRlA7TUFJRSxJQUFJLEVBQUMsWUFKUDtNQUtFLE1BQU0sRUFBQyxTQUxUO01BTUUsSUFBSSxFQUFFdkMsc0VBQXdCLENBQUNXLHNCQUFELEVBQXlCalksSUFBekIsQ0FOaEM7TUFBQTtJQUFBLEdBR00sU0FITixDQURGO0VBWUQ7O0VBRUQsSUFBSTZYLE9BQUosRUFBYTtJQUNYYSxXQUFXLENBQUN6VCxJQUFaLGVBQ0UseURBQUMsMkNBQUQ7TUFBQSx3QkFDRSx3REFBQywrQ0FBRDtRQUFRLFNBQVMsRUFBRXlGLEtBQUssQ0FBQ21QLE1BQXpCO1FBQWlDLElBQUksRUFBQyxJQUF0QztRQUEyQyxJQUFJLEVBQUMsU0FBaEQ7UUFBMEQsT0FBTyxFQUFFLE1BQU03QixxQkFBcUIsRUFBOUY7UUFBQTtNQUFBLEVBREYsRUFJR0QsaUJBSkg7SUFBQSxHQUFjLFNBQWQsQ0FERjtFQVFEOztFQUVELElBQUksQ0FBQ2dCLFVBQUwsRUFBaUI7SUFDZkosWUFBWSxDQUFDMVQsSUFBYixlQUNFLHdEQUFDLG1EQUFEO01BQ0UsU0FBUyxFQUFFeUYsS0FBSyxDQUFDbVAsTUFEbkI7TUFFRSxJQUFJLEVBQUMsSUFGUDtNQUlFLE9BQU8sRUFBQyxXQUpWO01BS0UsSUFBSSxFQUFDLEtBTFA7TUFNRSxJQUFJLEVBQUV4Qyw0REFBYyxDQUFDdkosV0FBRCxFQUFjOU4sSUFBZCxFQUFvQndLLFFBQXBCLENBTnRCO01BQUE7SUFBQSxHQUdNLE1BSE4sQ0FERjtFQVlEOztFQUVELElBQUlxTyxVQUFVLElBQUluQixTQUFkLElBQTJCLENBQUNrQixXQUE1QixJQUEyQyxDQUFDTCxhQUFoRCxFQUErRDtJQUM3RCxNQUFNNEIsVUFBVSxHQUFHM0csc0VBQWtCLENBQUMxRixXQUFELENBQXJDO0lBQ0EsTUFBTW9MLFVBQVUsR0FBRzNCLDBEQUFBLENBQXFCNEMsVUFBckIsRUFBaUN6TCxTQUFTLENBQUNsTyxJQUEzQyxFQUFpRG1PLEtBQUssQ0FBQ25PLElBQXZELEVBQTZEa1gsU0FBN0QsQ0FBbkI7SUFFQSxNQUFNMEMsT0FBTyxHQUFHdlQsNERBQUEsQ0FDYixHQUFFNUYsOERBQWlCLGFBQVl3WSxrQkFBa0IsQ0FBQ2xDLGdFQUFBLENBQTJCMkIsVUFBM0IsQ0FBRCxDQUF5QyxPQUQ3RSxFQUVkO01BQ0UxTztJQURGLENBRmMsQ0FBaEI7O0lBT0EsSUFBSXVPLFVBQUosRUFBZ0I7TUFDZEosWUFBWSxDQUFDMVQsSUFBYixlQUNFLHdEQUFDLHdEQUFEO1FBRUUsZUFBZSxFQUFFLE1BQU07VUFDckJoQixTQUFTLENBQUMrSyxPQUFWLENBQWtCLGFBQWxCO1FBQ0QsQ0FKSDtRQUtFLGdCQUFnQixFQUFHc0wsVUFBRCxJQUFnQjtVQUNoQ3JXLFNBQVMsQ0FBQ2lCLEtBQVYsQ0FBZ0IseUJBQWhCLEVBQTJDb1YsVUFBM0M7UUFDRCxDQVBIO1FBUUUsU0FBUyxFQUFFNVAsS0FBSyxDQUFDbVAsTUFSbkI7UUFTRSxJQUFJLEVBQUMsSUFUUDtRQVVFLE9BQU8sRUFBRVIsYUFWWDtRQUFBO01BQUEsR0FDTSxNQUROLENBREY7SUFnQkQ7O0lBRURWLFlBQVksQ0FBQzFULElBQWIsZUFDRSx3REFBQyxtREFBRDtNQUFZLFNBQVMsRUFBRXlGLEtBQUssQ0FBQ21QLE1BQTdCO01BQXFDLElBQUksRUFBQyxJQUExQztNQUEwRCxPQUFPLEVBQUMsV0FBbEU7TUFBOEUsSUFBSSxFQUFDLEtBQW5GO01BQXlGLElBQUksRUFBRU8sT0FBL0Y7TUFBQTtJQUFBLEdBQW1ELE1BQW5ELENBREY7RUFLRDs7RUFFRCxJQUFJdEIsV0FBVyxJQUFJcEIsU0FBZixJQUE0QixDQUFDa0IsV0FBN0IsSUFBNEMsQ0FBQ0wsYUFBakQsRUFBZ0U7SUFDOURJLFlBQVksQ0FBQzFULElBQWIsZUFDRSx3REFBQywrQ0FBRDtNQUNFLFNBQVMsRUFBRXlGLEtBQUssQ0FBQ21QLE1BRG5CO01BRUUsSUFBSSxFQUFDLElBRlA7TUFHRSxJQUFJLEVBQUMsUUFIUDtNQUtFLE9BQU8sRUFBQyxXQUxWO01BTUUsSUFBSSxFQUFDLFdBTlA7TUFPRSxPQUFPLEVBQUUsTUFBTWpDLGVBQWUsQ0FBQzVYLElBQUQsQ0FQaEM7TUFBQTtJQUFBLEdBSU0sUUFKTixDQURGO0VBYUQ7O0VBRUQsSUFBSTBZLFdBQVcsQ0FBQzVPLE1BQVosSUFBc0I2TyxZQUFZLENBQUM3TyxNQUF2QyxFQUErQztJQUM3QyxvQkFDRTtNQUFBLHdCQUNFO1FBQUssU0FBUyxFQUFFWSxLQUFLLENBQUN1SSxPQUF0QjtRQUFBLHdCQUNFLHdEQUFDLHdEQUFEO1VBQWlCLEtBQUssRUFBQyxNQUF2QjtVQUFBLFVBQStCeUYsV0FBVyxDQUFDNU8sTUFBWixHQUFxQjRPLFdBQXJCLGdDQUFtQyxrRUFBbkM7UUFBL0IsRUFERixlQUVFLHdEQUFDLHdEQUFEO1VBQWlCLEtBQUssRUFBQyxNQUF2QjtVQUFBLFVBQStCQyxZQUFZLENBQUM3TyxNQUFiLEdBQXNCNk8sWUFBdEIsa0NBQXFDLGtFQUFyQztRQUEvQixFQUZGO01BQUEsRUFERixFQUtHLENBQUMsQ0FBQ2hCLFlBQUYsaUJBQ0Msd0RBQUMscURBQUQ7UUFDRSxNQUFNLEVBQUUsSUFEVjtRQUVFLEtBQUssRUFBQyxhQUZSO1FBR0UsSUFBSSxFQUFDLHFIQUhQO1FBSUUsV0FBVyxFQUFDLGFBSmQ7UUFLRSxJQUFJLEVBQUMsc0JBTFA7UUFNRSxTQUFTLEVBQUVzQixVQU5iO1FBT0UsU0FBUyxFQUFFLE1BQU1yQixlQUFlLENBQUM5TyxTQUFEO01BUGxDLEVBTko7SUFBQSxFQURGO0VBbUJEOztFQUVELE9BQU8sSUFBUDtBQUNELENBM09NOztBQTZPUCxTQUFTa1EsVUFBVCxDQUFvQnZPLFFBQXBCLEVBQStDO0VBQzdDLE9BQU9BLFFBQVEsQ0FBQzhQLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBUDtBQUNEOztBQUVNLE1BQU1uUyxTQUFTLEdBQUl1QyxLQUFELEtBQTJCO0VBQ2xEc0ksT0FBTyxFQUFFeE0sNkNBQUk7QUFDZixlQUFla0UsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQkQsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BQU87QUFDMUQsR0FSb0Q7RUFTbEQ4TyxNQUFNLEVBQUVwVCw2Q0FBSTtBQUNkO0FBQ0Esa0JBQWtCa0UsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNuQyxpQkFBaUJELEtBQUssQ0FBQ3NELFVBQU4sQ0FBaUJ1TSxJQUFqQixDQUFzQkMsRUFBRztBQUMxQztBQWJvRCxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7OztBQzdRUDtBQUNBO0FBRUE7QUFFQTs7QUFNTyxTQUFTOUUsc0JBQVQsQ0FBZ0M5UyxLQUFoQyxFQUFrRTtFQUN2RSxNQUFNO0lBQUVvVDtFQUFGLElBQWtCcFQsS0FBeEI7RUFDQSxNQUFNc0YsTUFBTSxHQUFHckIsdURBQVUsQ0FBQ3NCLFNBQUQsQ0FBekI7O0VBRUEsSUFBSTZOLFdBQVcsQ0FBQ25NLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7SUFDNUIsT0FBTyxJQUFQO0VBQ0Q7O0VBRUQsb0JBQ0U7SUFBSyxTQUFTLEVBQUUzQixNQUFNLENBQUM4TixXQUF2QjtJQUFBLFVBQ0dBLFdBQVcsQ0FBQ3JTLEdBQVosQ0FBZ0IsQ0FBQyxDQUFDK1csR0FBRCxFQUFNblksS0FBTixDQUFELGtCQUNmLHVEQUFDLDJFQUFEO01BQWtDLGFBQWEsRUFBRW1ZLEdBQWpEO01BQXNELEtBQUssRUFBRW5ZO0lBQTdELEdBQTZCbVksR0FBN0IsQ0FERDtFQURILEVBREY7QUFPRDs7QUFFRCxNQUFNdlMsU0FBUyxHQUFHLE9BQU87RUFDdkI2TixXQUFXLEVBQUV4UCw2Q0FBSTtBQUNuQjtBQUNBO0FBSHlCLENBQVAsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFPTyxTQUFTbVAsc0JBQVQsQ0FBZ0MvUyxLQUFoQyxFQUFrRTtFQUN2RSxNQUFNO0lBQUVpTCxXQUFGO0lBQWU5TjtFQUFmLElBQXdCNkMsS0FBOUI7RUFDQSxNQUFNc0YsTUFBTSxHQUFHckIsdURBQVUsQ0FBQ3NCLFNBQUQsQ0FBekI7RUFFQSxNQUFNMFMsV0FBbUQsR0FBR3BVLDhDQUFPLENBQUMsTUFBTTtJQUN4RSxJQUFJc0cscUVBQWtCLENBQUNjLFdBQUQsQ0FBdEIsRUFBcUM7TUFDbkMsT0FBTyxDQUFDO1FBQUV0TixJQUFJLEVBQUVzTixXQUFXLENBQUN0TixJQUFwQjtRQUEwQjJQLElBQUksRUFBRXJDLFdBQVcsQ0FBQ2lOLElBQVosQ0FBaUJsYSxJQUFqQixDQUFzQm1hLEtBQXRCLENBQTRCQztNQUE1RCxDQUFELENBQVA7SUFDRDs7SUFFRCxJQUFJeEQsZ0VBQWtCLENBQUN6WCxJQUFJLENBQUMwWCxTQUFOLENBQXRCLEVBQXdDO01BQ3RDLE1BQU07UUFBRTFTO01BQUYsSUFBV2hGLElBQUksQ0FBQzBYLFNBQUwsQ0FBZUksYUFBaEM7TUFDQSxNQUFNb0QsTUFBTSxHQUFHbFcsSUFBSSxDQUFDbVcsTUFBTCxDQUFZLENBQUNMLFdBQUQsRUFBY2pOLEtBQWQsS0FBd0I7UUFDakQsTUFBTStFLEVBQUUsR0FBR2dJLGtFQUFnQixHQUFHUSxtQkFBbkIsQ0FBdUN2TixLQUFLLENBQUN3TixhQUE3QyxDQUFYOztRQUVBLElBQUksQ0FBQ3pJLEVBQUQsSUFBT0EsRUFBRSxDQUFDMEksR0FBSCxLQUFXVCxrR0FBdEIsRUFBK0M7VUFDN0MsT0FBT0MsV0FBUDtRQUNEOztRQUVEQSxXQUFXLENBQUNsSSxFQUFFLENBQUNwUyxJQUFKLENBQVgsR0FBdUI7VUFBRUEsSUFBSSxFQUFFb1MsRUFBRSxDQUFDcFMsSUFBWDtVQUFpQjJQLElBQUksRUFBRXlDLEVBQUUsQ0FBQ21JLElBQUgsQ0FBUWxhLElBQVIsQ0FBYW1hLEtBQWIsQ0FBbUJDO1FBQTFDLENBQXZCO1FBQ0EsT0FBT0gsV0FBUDtNQUNELENBVGMsRUFTWixFQVRZLENBQWY7TUFXQSxPQUFPblMsTUFBTSxDQUFDQyxNQUFQLENBQWNzUyxNQUFkLENBQVA7SUFDRDs7SUFFRCxPQUFPLEVBQVA7RUFDRCxDQXRCa0UsRUFzQmhFLENBQUNsYixJQUFELEVBQU84TixXQUFQLENBdEJnRSxDQUFuRTs7RUF3QkEsSUFBSWdOLFdBQVcsQ0FBQ2hSLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7SUFDNUIsT0FBTyxJQUFQO0VBQ0Q7O0VBRUQsb0JBQ0UsdURBQUMsdURBQUQ7SUFBYyxLQUFLLEVBQUMsYUFBcEI7SUFBQSxVQUNHZ1IsV0FBVyxDQUFDbFgsR0FBWixDQUFnQixDQUFDO01BQUVwRCxJQUFGO01BQVEyUDtJQUFSLENBQUQsRUFBaUJ0RSxLQUFqQixrQkFDZjtNQUFBLFdBQ0dzRSxJQUFJLGlCQUNIO1FBQUEsd0JBQ0U7VUFBSyxHQUFHLEVBQUcsR0FBRTNQLElBQUssa0JBQWxCO1VBQXFDLFNBQVMsRUFBRTJILE1BQU0sQ0FBQ29ULGNBQXZEO1VBQXVFLEdBQUcsRUFBRXBMO1FBQTVFLEVBREYsRUFDdUYsR0FEdkY7TUFBQSxFQUZKLEVBTUczUCxJQU5IO0lBQUEsR0FBVUEsSUFBVixDQUREO0VBREgsRUFERjtBQWNEOztBQUVELFNBQVM0SCxTQUFULENBQW1CdUMsS0FBbkIsRUFBeUM7RUFDdkMsTUFBTTZQLElBQUksR0FBRzdQLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBYjtFQUVBLE9BQU87SUFDTDJRLGNBQWMsRUFBRTlVLDZDQUFJO0FBQ3hCLGVBQWUrVCxJQUFLO0FBQ3BCLGdCQUFnQkEsSUFBSztBQUNyQjtFQUpTLENBQVA7QUFNRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUQ7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFRTyxTQUFTM0UscUJBQVQsQ0FBK0JoVCxLQUEvQixFQUFpRTtFQUN0RSxNQUFNO0lBQUVvVCxXQUFGO0lBQWVuSSxXQUFmO0lBQTRCOU47RUFBNUIsSUFBcUM2QyxLQUEzQztFQUNBLE1BQU1zRixNQUFNLEdBQUdDLFNBQVMsRUFBeEI7O0VBRUEsSUFBSSxDQUFDNEUscUVBQWtCLENBQUNjLFdBQUQsQ0FBdkIsRUFBc0M7SUFDcEMsT0FBTyxJQUFQO0VBQ0Q7O0VBRUQsb0JBQ0UsdURBQUMsdURBQUQ7SUFBYyxLQUFLLEVBQUMsWUFBcEI7SUFBaUMsVUFBVSxFQUFFLElBQTdDO0lBQW1ELFNBQVMsRUFBRXJDLGdEQUFFLENBQUM7TUFBRSxDQUFDdEQsTUFBTSxDQUFDcVQsT0FBUixHQUFrQixDQUFDLENBQUN2RixXQUFXLENBQUNuTTtJQUFsQyxDQUFELENBQWhFO0lBQUEsdUJBQ0UsdURBQUMsbURBQUQ7TUFBWSxVQUFVLEVBQUU5SixJQUFJLENBQUM2TixLQUE3QjtNQUFvQyxXQUFXLEVBQUVDO0lBQWpEO0VBREYsRUFERjtBQUtEOztBQUVELE1BQU0xRixTQUFTLEdBQUcsT0FBTztFQUN2Qm9ULE9BQU8sRUFBRS9VLDZDQUFJO0FBQ2Y7QUFDQTtBQUh5QixDQUFQLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQWFBLFNBQVN3VixpQkFBVCxDQUEyQnBaLEtBQTNCLEVBQXNGO0VBQ3BGLE1BQU1zRixNQUFNLEdBQUd5RSxzREFBUyxDQUFDeEUsU0FBRCxDQUF4QjtFQUNBLE1BQU07SUFBRThULGdCQUFGO0lBQW9CQztFQUFwQixJQUE4QnRaLEtBQXBDO0VBRUEsb0JBQ0U7SUFBSyxTQUFTLEVBQUVzRixNQUFNLENBQUNpVSxTQUF2QjtJQUFBLHdCQUNFO01BQUEsdUJBQ1dELEtBQUssQ0FBQ0UsaUJBRGpCLGNBQzRDRixLQUFLLENBQUNHLGVBRGxEO0lBQUEsRUFERixFQUlHSixnQkFBZ0IsaUJBQ2YseURBQUMsbURBQUQ7TUFBWSxJQUFJLEVBQUVBLGdCQUFsQjtNQUFvQyxJQUFJLEVBQUMsSUFBekM7TUFBOEMsT0FBTyxFQUFDLFdBQXREO01BQUEsd0JBQ1lDLEtBQUssQ0FBQ0csZUFEbEI7SUFBQSxFQUxKO0VBQUEsRUFERjtBQVlEOztBQUVNLFNBQVN4Ryw0QkFBVCxDQUFzQ2pULEtBQXRDLEVBQXdFO0VBQzdFLE1BQU07SUFDSjdDLElBQUksRUFBRTtNQUFFdWMsUUFBRjtNQUFZN047SUFBWixDQURGO0lBRUo4TixpQkFBaUIsR0FBR0MsTUFBTSxDQUFDQyxpQkFGdkI7SUFHSnRKO0VBSEksSUFJRnZRLEtBSko7RUFNQSxNQUFNLENBQUNpTixXQUFELEVBQWM2TSxjQUFkLElBQWdDaFcsK0NBQVEsRUFBOUM7RUFDQSxNQUFNLENBQUNpVyxVQUFELEVBQWFDLGFBQWIsSUFBOEJsVywrQ0FBUSxFQUE1QyxDQVI2RSxDQVU3RTs7RUFDQSxNQUFNLENBQUNtVyxTQUFELElBQWNuVywrQ0FBUSxDQUFTb1csSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixDQUFULENBQTVCO0VBQ0EsTUFBTUMsY0FBYyxHQUFJLGVBQWNKLFNBQVUsRUFBaEQ7RUFFQSxNQUFNM1UsTUFBTSxHQUFHeUUsc0RBQVMsQ0FBQ3hFLFNBQUQsQ0FBeEI7RUFFQSxNQUFNK1UsZUFBZSxHQUFHaEcsd0VBQW9CLENBQUN6SSxTQUFTLENBQUNaLFdBQVgsQ0FBcEIsR0FBOENvSCx5RUFBOUMsR0FBMEUsWUFBbEc7RUFFQSxNQUFNa0ksTUFBTSxHQUFHMVcsOENBQU8sQ0FDcEI7SUFBQTs7SUFBQSxPQUNFcVYsNkRBQWMsQ0FBQ1EsUUFBRCxDQUFkLHdCQUE0QkEsUUFBUSxDQUFDYSxNQUFyQyw2Q0FBNEIsaUJBQWlCdFQsTUFBN0MsR0FDSXVULFlBQVksQ0FBQ3ZOLFdBQUQsRUFBYzhNLFVBQWQsRUFBMEJoQixvRkFBVSxDQUFDQyxtRkFBRCxFQUF1QlUsUUFBUSxDQUFDYSxNQUFoQyxDQUFwQyxDQURoQixHQUVJLEVBSE47RUFBQSxDQURvQixFQUtwQixDQUFDYixRQUFELEVBQVdLLFVBQVgsRUFBdUI5TSxXQUF2QixDQUxvQixDQUF0Qjs7RUFRQSxJQUFJLENBQUNpTSw2REFBYyxDQUFDUSxRQUFELENBQW5CLEVBQStCO0lBQzdCLE9BQU8sSUFBUDtFQUNEOztFQUVELE1BQU1nQixnQkFBZ0IsR0FBR0gsTUFBTSxDQUFDSSxLQUFQLENBQWEsQ0FBYixFQUFnQmhCLGlCQUFoQixDQUF6QjtFQUVBLE1BQU1pQixlQUFlLEdBQUdoQywrQ0FBTyxDQUFDYyxRQUFRLENBQUNhLE1BQVYsRUFBbUJNLEtBQUQsSUFBVzVCLDZGQUE2QixDQUFDNEIsS0FBSyxDQUFDNWMsS0FBUCxDQUExRCxDQUEvQjtFQUNBLE1BQU02YyxnQkFBZ0IsR0FBR1AsTUFBTSxDQUFDdFQsTUFBUCxHQUFnQnlULGdCQUFnQixDQUFDelQsTUFBMUQ7RUFFQSxNQUFNcVMsS0FBb0IsR0FBRztJQUMzQkcsZUFBZSxFQUFFYyxNQUFNLENBQUN0VCxNQURHO0lBRTNCdVMsaUJBQWlCLEVBQUVrQixnQkFBZ0IsQ0FBQ3pUO0VBRlQsQ0FBN0I7RUFLQSxNQUFNb1MsZ0JBQWdCLEdBQUc3RSx3RkFBYyxDQUFDM0ksU0FBUyxDQUFDWixXQUFYLEVBQXdCakwsS0FBSyxDQUFDN0MsSUFBOUIsRUFBb0NzSSxRQUFRLENBQUNtQyxRQUFULEdBQW9CbkMsUUFBUSxDQUFDckksTUFBakUsQ0FBdkM7RUFFQSxNQUFNbWMsU0FBUyxHQUFHdUIsZ0JBQWdCLGdCQUNoQyx3REFBQyxpQkFBRDtJQUFtQixLQUFLLEVBQUV4QixLQUExQjtJQUFpQyxnQkFBZ0IsRUFBRUQ7RUFBbkQsRUFEZ0MsR0FFOUJwVCxTQUZKO0VBSUEsb0JBQ0UseURBQUMsd0RBQUQ7SUFBYyxLQUFLLEVBQUMsb0JBQXBCO0lBQXlDLFVBQVUsRUFBRSxJQUFyRDtJQUFBLHdCQUNFO01BQUssU0FBUyxFQUFFMkMsZ0RBQUUsQ0FBQ3RELE1BQU0sQ0FBQ3lWLE9BQVIsRUFBaUJ6VixNQUFNLENBQUMwVixZQUF4QixDQUFsQjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFFMVYsTUFBTSxDQUFDeVYsT0FBdkI7UUFBQSx3QkFDRSx3REFBQyw4R0FBRDtVQUNFLFNBQVMsRUFBRXpWLE1BQU0sQ0FBQzJWLFFBRHBCO1VBR0Usa0JBQWtCLEVBQUVoTyxXQUh0QjtVQUlFLGNBQWMsRUFBR3ROLEtBQUQsSUFBV21hLGNBQWMsQ0FBQ25hLEtBQUQ7UUFKM0MsR0FFTzBhLGNBRlAsQ0FERixlQU9FLHdEQUFDLDZIQUFEO1VBQ0UsU0FBUyxFQUFFL1UsTUFBTSxDQUFDMlYsUUFEcEI7VUFFRSxVQUFVLEVBQUVYLGVBRmQ7VUFHRSxXQUFXLEVBQUVQLFVBSGY7VUFJRSxtQkFBbUIsRUFBRUMsYUFKdkI7VUFLRSxpQkFBaUIsRUFBRVk7UUFMckIsRUFQRjtNQUFBO0lBREYsRUFERixlQW1CRSx3REFBQyxzRUFBRDtNQUFxQixTQUFTLEVBQUVGLGdCQUFoQztNQUFrRCxVQUFVLEVBQUVuSyxVQUE5RDtNQUEwRSxTQUFTLEVBQUVnSjtJQUFyRixFQW5CRjtFQUFBLEVBREY7QUF1QkQ7O0FBRUQsU0FBU2lCLFlBQVQsQ0FDRVUsa0JBREYsRUFFRUMsa0JBRkYsRUFHRVosTUFIRixFQUlXO0VBQ1QsSUFBSWEsY0FBYyxHQUFHLENBQUMsR0FBR2IsTUFBSixDQUFyQjs7RUFDQSxJQUFJVyxrQkFBSixFQUF3QjtJQUN0QixNQUFNRyxRQUFRLEdBQUd2QywrRkFBYSxDQUFDb0Msa0JBQWtCLElBQUksRUFBdkIsQ0FBOUI7SUFDQUUsY0FBYyxHQUFHQSxjQUFjLENBQUM3WCxNQUFmLENBQXNCLENBQUM7TUFBRWlRO0lBQUYsQ0FBRCxLQUFnQnFGLHFHQUFtQixDQUFDckYsTUFBRCxFQUFTNkgsUUFBVCxDQUF6RCxDQUFqQjtFQUNEOztFQUNELElBQUlGLGtCQUFKLEVBQXdCO0lBQ3RCQyxjQUFjLEdBQUdBLGNBQWMsQ0FBQzdYLE1BQWYsQ0FBdUJzWCxLQUFELElBQVc7TUFDaEQsT0FBTzVCLDZGQUE2QixDQUFDNEIsS0FBSyxDQUFDNWMsS0FBUCxDQUE3QixLQUErQ2tkLGtCQUF0RDtJQUNELENBRmdCLENBQWpCO0VBR0Q7O0VBRUQsT0FBT0MsY0FBUDtBQUNEOztBQUVELE1BQU03VixTQUFTLEdBQUl1QyxLQUFELElBQXlCO0VBQ3pDLE9BQU87SUFDTGlULE9BQU8sRUFBRW5YLDZDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUJrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYzZQLEVBQUc7QUFDeEMsS0FSUztJQVNMb0QsWUFBWSxFQUFFcFgsNkNBQUk7QUFDdEI7QUFDQSxLQVhTO0lBWUxxWCxRQUFRLEVBQUVyWCw2Q0FBSTtBQUNsQixzQkFBc0JrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYzZQLEVBQUc7QUFDdkMsS0FkUztJQWVMMkIsU0FBUyxFQUFFM1YsNkNBQUk7QUFDbkI7QUFDQTtBQUNBLGFBQWFrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYzZQLEVBQUc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7RUF0QlMsQ0FBUDtBQXdCRCxDQXpCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUdBOzs7O0FBT08sTUFBTTBELFVBQW9CLEdBQUcsQ0FBQztFQUFFbmU7QUFBRixDQUFELEtBQWM7RUFDaEQsTUFBTTBLLEtBQUssR0FBRzVELHVEQUFVLENBQUNzWCxRQUFELENBQXhCOztFQUNBLElBQUlwZSxJQUFJLENBQUNxZSxNQUFMLEtBQWdCLEtBQWhCLElBQXlCcmUsSUFBSSxDQUFDcWUsTUFBTCxLQUFnQixPQUE3QyxFQUFzRDtJQUNwRCxvQkFDRSx1REFBQyxnREFBRDtNQUFTLEtBQUssRUFBQyxPQUFmO01BQXVCLE9BQU8sRUFBRXJlLElBQUksQ0FBQ3NlLFNBQUwsSUFBa0IsNEJBQWxEO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUU1VCxLQUFLLENBQUM2VCxJQUF0QjtRQUFBLDBDQUNFLHVEQUFDLDZDQUFEO1VBQU0sSUFBSSxFQUFDO1FBQVgsRUFERixrQ0FFRTtVQUFBO1FBQUEsRUFGRjtNQUFBO0lBREYsRUFERjtFQVFEOztFQUNELG9CQUFPO0lBQUEsVUFBR3ZlLElBQUksQ0FBQ3FlO0VBQVIsRUFBUDtBQUNELENBYk07O0FBZVAsTUFBTUQsUUFBUSxHQUFJelQsS0FBRCxLQUEyQjtFQUMxQzRULElBQUksRUFBRTlYLDZDQUFJO0FBQ1o7QUFDQTtBQUNBLGFBQWFrRSxLQUFLLENBQUNFLE1BQU4sQ0FBYXFFLE9BQWIsQ0FBcUIzTyxJQUFLO0FBQ3ZDO0FBQ0EscUJBQXFCb0ssS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN0QztBQUNBO0FBUjRDLENBQTNCLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUVPLFNBQVN6RCxjQUFULEdBQXdDO0VBQzdDLE1BQU0sQ0FBQ3VYLFFBQUQsRUFBV0MsV0FBWCxJQUEwQmhZLCtDQUFRLENBQUMsS0FBRCxDQUF4QztFQUNBLE1BQU0sQ0FBQ2lZLE1BQUQsRUFBU0MsU0FBVCxJQUFzQkwscURBQWUsQ0FBQyxvQ0FBRCxFQUF1QyxLQUF2QyxDQUEzQztFQUNBLE1BQU1NLHdCQUF3QixHQUFHcFgsNkZBQTBCLENBQUU1RyxLQUFELElBQVdBLEtBQUssQ0FBQ2dhLFdBQWxCLENBQTNEO0VBQ0EsTUFBTXhSLGdCQUFnQixHQUFHNUIsNkZBQTBCLENBQUU1RyxLQUFELElBQVdBLEtBQUssQ0FBQ3lJLFNBQWxCLENBQW5EO0VBQ0EsTUFBTUMsaUJBQWlCLEdBQUc5Qiw2RkFBMEIsQ0FBRTVHLEtBQUQsSUFBV0EsS0FBSyxDQUFDMkksVUFBbEIsQ0FBcEQ7RUFDQSxNQUFNdEIsTUFBTSxHQUFHckIsdURBQVUsQ0FBQ3NCLFNBQUQsQ0FBekI7RUFFQSxNQUFNcU0sTUFBTSxHQUFHL04sOENBQU8sQ0FBQyxNQUFxQjtJQUFBOztJQUMxQyxNQUFNLENBQUNxWSxzQkFBRCxFQUF5QkMsaUJBQXpCLEVBQTRDQyxrQkFBNUMsSUFBa0UsQ0FDdEVILHdCQURzRSxFQUV0RXhWLGdCQUZzRSxFQUd0RUUsaUJBSHNFLEVBSXRFNUYsR0FKc0UsQ0FJakVzYixRQUFELElBQ0ovTSxzRUFBbUIsR0FBR2dKLE1BQXRCLENBQ0UsQ0FBQ3RSLE1BQUQsRUFBU3NWLFVBQVQsS0FBd0I7TUFBQTs7TUFDdEIsTUFBTWphLEtBQUssNEJBQUdnYSxRQUFRLENBQUNDLFVBQVUsQ0FBQzNlLElBQVosQ0FBWCwwREFBRyxzQkFBMkIwRSxLQUF6Qzs7TUFDQSxJQUFJZ2EsUUFBUSxDQUFDQyxVQUFVLENBQUMzZSxJQUFaLENBQVIsSUFBNkIwRSxLQUE3QixJQUFzQyxDQUFDdVoseUVBQTJCLENBQUNTLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDM2UsSUFBWixDQUFULENBQXRFLEVBQW1HO1FBQ2pHLE9BQU8sQ0FBQyxHQUFHcUosTUFBSixFQUFZO1VBQUVzVixVQUFGO1VBQWNqYTtRQUFkLENBQVosQ0FBUDtNQUNEOztNQUNELE9BQU8yRSxNQUFQO0lBQ0QsQ0FQSCxFQVFFLEVBUkYsQ0FMc0UsQ0FBeEU7SUFnQkEsTUFBTXVWLGdCQUFnQiw0QkFBRzlWLGdCQUFnQixDQUFDNEwsd0VBQUQsQ0FBbkIsMERBQUcsc0JBQTZDaFEsS0FBdEU7SUFDQSxNQUFNbWEsaUJBQWlCLDRCQUFHN1YsaUJBQWlCLENBQUMwTCx3RUFBRCxDQUFwQiwwREFBRyxzQkFBOENoUSxLQUF4RTtJQUVBLE1BQU0yRSxNQUFxQixHQUFHLEVBQTlCOztJQUVBLElBQUl1VixnQkFBSixFQUFzQjtNQUNwQnZWLE1BQU0sQ0FBQzVFLElBQVAsZUFBWTtRQUFBLG1EQUF1Q21hLGdCQUFnQixDQUFDeEssT0FBakIsSUFBNEIsZ0JBQW5FO01BQUEsRUFBWjtJQUNEOztJQUNELElBQUl5SyxpQkFBSixFQUF1QjtNQUNyQnhWLE1BQU0sQ0FBQzVFLElBQVAsZUFBWTtRQUFBLG9EQUF3Q29hLGlCQUFpQixDQUFDekssT0FBbEIsSUFBNkIsZ0JBQXJFO01BQUEsRUFBWjtJQUNEOztJQUVEbUssc0JBQXNCLENBQUNPLE9BQXZCLENBQStCLENBQUM7TUFBRUgsVUFBRjtNQUFjamE7SUFBZCxDQUFELEtBQTJCO01BQ3hEMkUsTUFBTSxDQUFDNUUsSUFBUCxlQUNFO1FBQUEsK0RBQ21ELEdBRG5ELGVBRUU7VUFBRyxJQUFJLEVBQUcsb0JBQW1Ca2EsVUFBVSxDQUFDN0QsR0FBSSxFQUE1QztVQUFBLFVBQWdENkQsVUFBVSxDQUFDM2U7UUFBM0QsRUFGRixRQUV5RTBFLEtBQUssQ0FBQzBQLE9BQU4sSUFBaUIsZ0JBRjFGO01BQUEsRUFERjtJQU1ELENBUEQ7SUFTQW9LLGlCQUFpQixDQUFDTSxPQUFsQixDQUEwQixDQUFDO01BQUVILFVBQUY7TUFBY2phO0lBQWQsQ0FBRCxLQUN4QjJFLE1BQU0sQ0FBQzVFLElBQVAsZUFDRTtNQUFBLDREQUNrQztRQUFHLElBQUksRUFBRyxvQkFBbUJrYSxVQUFVLENBQUM3RCxHQUFJLEVBQTVDO1FBQUEsVUFBZ0Q2RCxVQUFVLENBQUMzZTtNQUEzRCxFQURsQyxPQUN3RyxHQUR4RyxFQUVHMEUsS0FBSyxDQUFDMFAsT0FBTixJQUFpQixnQkFGcEI7SUFBQSxFQURGLENBREY7SUFTQXFLLGtCQUFrQixDQUFDSyxPQUFuQixDQUEyQixDQUFDO01BQUVILFVBQUY7TUFBY2phO0lBQWQsQ0FBRCxLQUN6QjJFLE1BQU0sQ0FBQzVFLElBQVAsZUFDRTtNQUFBLDZEQUNtQztRQUFHLElBQUksRUFBRyxvQkFBbUJrYSxVQUFVLENBQUM3RCxHQUFJLEVBQTVDO1FBQUEsVUFBZ0Q2RCxVQUFVLENBQUMzZTtNQUEzRCxFQURuQyxPQUN5RyxHQUR6RyxFQUVHMEUsS0FBSyxDQUFDMFAsT0FBTixJQUFpQixnQkFGcEI7SUFBQSxFQURGLENBREY7SUFTQSxPQUFPL0ssTUFBUDtFQUNELENBekRxQixFQXlEbkIsQ0FBQ2lWLHdCQUFELEVBQTJCeFYsZ0JBQTNCLEVBQTZDRSxpQkFBN0MsQ0F6RG1CLENBQXRCO0VBMkRBLG9CQUNFO0lBQUEsV0FDRyxDQUFDLENBQUNpTCxNQUFNLENBQUMzSyxNQUFULElBQW1COFUsTUFBbkIsaUJBQ0MsdURBQUMsa0JBQUQ7TUFBb0IsS0FBSyxFQUFFbkssTUFBTSxDQUFDM0ssTUFBbEM7TUFBMEMsT0FBTyxFQUFFLE1BQU0rVSxTQUFTLENBQUVELE1BQUQsSUFBWSxDQUFDQSxNQUFkO0lBQWxFLEVBRkosRUFJRyxDQUFDLENBQUNuSyxNQUFNLENBQUMzSyxNQUFULElBQW1CLENBQUM4VSxNQUFwQixpQkFDQyx3REFBQyw4Q0FBRDtNQUNFLGVBQVksMEJBRGQ7TUFFRSxLQUFLLEVBQUMsc0JBRlI7TUFHRSxRQUFRLEVBQUMsT0FIWDtNQUlFLFFBQVEsRUFBRSxNQUFNQyxTQUFTLENBQUMsSUFBRCxDQUozQjtNQUFBLFdBTUdILFFBQVEsSUFBSWpLLE1BQU0sQ0FBQzdRLEdBQVAsQ0FBVyxDQUFDeUMsSUFBRCxFQUFPa1osR0FBUCxrQkFBZTtRQUFBLFVBQWdCbFo7TUFBaEIsR0FBVWtaLEdBQVYsQ0FBMUIsQ0FOZixFQU9HLENBQUNiLFFBQUQsaUJBQ0M7UUFBQSx3QkFDRTtVQUFBLFVBQU1qSyxNQUFNLENBQUMsQ0FBRDtRQUFaLEVBREYsRUFFR0EsTUFBTSxDQUFDM0ssTUFBUCxJQUFpQixDQUFqQixpQkFDQyx3REFBQywrQ0FBRDtVQUNFLFNBQVMsRUFBRTNCLE1BQU0sQ0FBQ3FYLFVBRHBCO1VBRUUsSUFBSSxFQUFDLE1BRlA7VUFHRSxJQUFJLEVBQUMsYUFIUDtVQUlFLElBQUksRUFBQyxJQUpQO1VBS0UsT0FBTyxFQUFFLE1BQU1iLFdBQVcsQ0FBQyxJQUFELENBTDVCO1VBQUEsV0FPR2xLLE1BQU0sQ0FBQzNLLE1BQVAsR0FBZ0IsQ0FQbkIsWUFPNEIrSCxnREFBUyxDQUFDLE9BQUQsRUFBVTRDLE1BQU0sQ0FBQzNLLE1BQVAsR0FBZ0IsQ0FBMUIsQ0FQckM7UUFBQSxFQUhKO01BQUEsRUFSSjtJQUFBLEVBTEo7RUFBQSxFQURGO0FBaUNEOztBQU9ELE1BQU0yVixrQkFBeUMsR0FBRyxDQUFDO0VBQUVDLEtBQUY7RUFBU2xQO0FBQVQsQ0FBRCxLQUF3QjtFQUN4RSxNQUFNckksTUFBTSxHQUFHckIsdURBQVUsQ0FBQ3NCLFNBQUQsQ0FBekI7RUFFQSxvQkFDRTtJQUFLLFNBQVMsRUFBRUQsTUFBTSxDQUFDd1gsVUFBdkI7SUFBQSx1QkFDRSx1REFBQyxnREFBRDtNQUFTLE9BQU8sRUFBQyxpQkFBakI7TUFBbUMsU0FBUyxFQUFDLFFBQTdDO01BQUEsdUJBQ0UsdURBQUMsK0NBQUQ7UUFBUSxJQUFJLEVBQUMsTUFBYjtRQUFvQixPQUFPLEVBQUMsYUFBNUI7UUFBMEMsSUFBSSxFQUFDLHNCQUEvQztRQUFzRSxPQUFPLEVBQUVuUCxPQUEvRTtRQUFBLFVBQ0drUCxLQUFLLEdBQUcsQ0FBUixnQkFBWTtVQUFBLFdBQUdBLEtBQUg7UUFBQSxFQUFaLGdCQUFrQztVQUFBO1FBQUE7TUFEckM7SUFERjtFQURGLEVBREY7QUFTRCxDQVpEOztBQWNBLE1BQU10WCxTQUFTLEdBQUl1QyxLQUFELEtBQTJCO0VBQzNDNlUsVUFBVSxFQUFFL1ksNkNBQUk7QUFDbEI7QUFDQSxHQUg2QztFQUkzQ2taLFVBQVUsRUFBRWxaLDZDQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQVA2QyxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdElBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTs7OztBQU9PLE1BQU1XLGlCQUE0QixHQUFHLENBQUM7RUFBRW9MLFVBQUY7RUFBY2pLO0FBQWQsQ0FBRCxLQUErQjtFQUN6RSxNQUFNLENBQUNxWCxpQkFBRCxFQUFvQkMsZUFBcEIsSUFBdUNuWiw4Q0FBTyxDQUFDLE1BQU07SUFDekQsTUFBTW9aLE1BQU0sR0FBR3ROLFVBQVUsQ0FDdEI1TyxHQURZLENBQ1A4SyxTQUFELHNCQUNBQSxTQURBO01BRUh6RyxNQUFNLEVBQUV5RyxTQUFTLENBQUN6RyxNQUFWLENBQWlCckMsSUFBakIsQ0FBc0IsQ0FBQ21hLENBQUQsRUFBSUMsQ0FBSixLQUFVRCxDQUFDLENBQUN2ZixJQUFGLENBQU95ZixhQUFQLENBQXFCRCxDQUFDLENBQUN4ZixJQUF2QixDQUFoQztJQUZMLEVBRFEsRUFLWm9GLElBTFksQ0FLUCxDQUFDbWEsQ0FBRCxFQUFJQyxDQUFKLEtBQVVELENBQUMsQ0FBQ3ZmLElBQUYsQ0FBT3lmLGFBQVAsQ0FBcUJELENBQUMsQ0FBQ3hmLElBQXZCLENBTEgsQ0FBZjtJQU1BLE9BQU8sQ0FDTHNmLE1BQU0sQ0FBQzFaLE1BQVAsQ0FBZThaLEVBQUQsSUFBUS9JLHVFQUFvQixDQUFDK0ksRUFBRSxDQUFDcFMsV0FBSixDQUExQyxDQURLLEVBRUxnUyxNQUFNLENBQUMxWixNQUFQLENBQWU4WixFQUFELElBQVFsVCxxRUFBa0IsQ0FBQ2tULEVBQUUsQ0FBQ3BTLFdBQUosQ0FBeEMsQ0FGSyxDQUFQO0VBSUQsQ0FYbUQsRUFXakQsQ0FBQzBFLFVBQUQsQ0FYaUQsQ0FBcEQ7RUFhQSxvQkFDRTtJQUFBLHdCQUNFLHVEQUFDLGlEQUFEO01BQVcsT0FBTyxFQUFFLENBQUNxRSwyRUFBRCxDQUFwQjtNQUFBLHVCQUNFLHVEQUFDLHVEQUFEO1FBQWMsVUFBVSxFQUFFK0ksaUJBQTFCO1FBQTZDLFNBQVMsRUFBRXJYO01BQXhEO0lBREYsRUFERixlQUlFLHVEQUFDLGlEQUFEO01BQVcsT0FBTyxFQUFFLENBQUNzTyxtRkFBRCxDQUFwQjtNQUFBLHVCQUNFLHVEQUFDLG1EQUFEO1FBQVksVUFBVSxFQUFFZ0osZUFBeEI7UUFBeUMsU0FBUyxFQUFFdFg7TUFBcEQ7SUFERixFQUpGO0VBQUEsRUFERjtBQVVELENBeEJNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQlA7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUVBOzs7O0FBUU8sTUFBTWlZLG9CQUErQixHQUFHLENBQUM7RUFBRS9iLEtBQUY7RUFBUzNELEtBQVQ7RUFBZ0IyZixnQkFBZ0IsR0FBRztBQUFuQyxDQUFELEtBQWdEO0VBQzdGLE1BQU0sQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLElBQTRCaGEsK0NBQVEsQ0FBQzhaLGdCQUFELENBQTFDO0VBQ0EsTUFBTXRZLE1BQU0sR0FBR3JCLHVEQUFVLENBQUNzQixTQUFELENBQXpCO0VBQ0Esb0JBQ0U7SUFBQSx3QkFDRTtNQUFJLFNBQVMsRUFBRUQsTUFBTSxDQUFDeVksTUFBdEI7TUFBQSx3QkFDRSx1REFBQywyREFBRDtRQUNFLFNBQVMsRUFBRXpZLE1BQU0sQ0FBQzBZLGNBRHBCO1FBRUUsSUFBSSxFQUFDLEtBRlA7UUFHRSxXQUFXLEVBQUVILFNBSGY7UUFJRSxRQUFRLEVBQUUsTUFBTUMsWUFBWSxDQUFDLENBQUNELFNBQUY7TUFKOUIsRUFERixFQU9HTCxrRUFBb0IsQ0FBQ3ZmLEtBQUQsQ0FQdkIsUUFPa0MyRCxLQUFLLENBQUNxRixNQVB4QztJQUFBLEVBREYsRUFVRyxDQUFDNFcsU0FBRCxpQkFBYyx1REFBQyxtREFBRDtNQUFZLFNBQVMsRUFBRXZZLE1BQU0sQ0FBQzJZLFVBQTlCO01BQTBDLEtBQUssRUFBRXJjLEtBQWpEO01BQXdELGVBQWUsRUFBRTtJQUF6RSxFQVZqQjtFQUFBLEVBREY7QUFjRCxDQWpCTTs7QUFtQlAsTUFBTTJELFNBQVMsR0FBSXVDLEtBQUQsS0FBMkI7RUFDM0NrVyxjQUFjLEVBQUVwYSw2Q0FBSTtBQUN0QjtBQUNBLEdBSDZDO0VBSTNDbWEsTUFBTSxFQUFFbmEsNkNBQUk7QUFDZCxrQkFBa0JrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ25DLEdBTjZDO0VBTzNDa1csVUFBVSxFQUFFcmEsNkNBQUk7QUFDbEIsa0JBQWtCa0UsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNuQztBQVQ2QyxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7OztBQVNPLE1BQU12RCxpQkFBNEIsR0FBRyxDQUFDO0VBQUVtTDtBQUFGLENBQUQsS0FBb0I7RUFDOUQsTUFBTS9KLE9BQU8sR0FBR1Ysb0VBQXVCLENBQUNmLDZFQUFjLEdBQUcsQ0FBSCxDQUFmLENBQXZDO0VBRUEsTUFBTStaLFlBQVksR0FBR3JhLDhDQUFPLENBQUMsTUFBTTtJQUNqQyxNQUFNbUQsTUFBb0IsR0FBRztNQUMzQixDQUFDK0Usd0ZBQUQsR0FBZ0MsRUFETDtNQUUzQixDQUFDQSwwRkFBRCxHQUFrQyxFQUZQO01BRzNCLENBQUNBLHlGQUFELEdBQWlDO0lBSE4sQ0FBN0I7SUFNQTRELFVBQVUsQ0FBQzhNLE9BQVgsQ0FBb0I1USxTQUFELElBQ2pCQSxTQUFTLENBQUN6RyxNQUFWLENBQWlCcVgsT0FBakIsQ0FBMEIzUSxLQUFELElBQ3ZCQSxLQUFLLENBQUNsSyxLQUFOLENBQVk2YSxPQUFaLENBQXFCdGYsSUFBRCxJQUFVO01BQzVCLElBQUlBLElBQUksQ0FBQ3VjLFFBQUwsSUFBaUJSLDREQUFjLENBQUMvYixJQUFJLENBQUN1YyxRQUFOLENBQW5DLEVBQW9EO1FBQ2xEMVMsTUFBTSxDQUFDN0osSUFBSSxDQUFDdWMsUUFBTCxDQUFjemIsS0FBZixDQUFOLENBQTRCbUUsSUFBNUIsQ0FBaUNqRixJQUFqQztNQUNEO0lBQ0YsQ0FKRCxDQURGLENBREY7SUFVQTJJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaUIsTUFBZCxFQUFzQnlWLE9BQXRCLENBQStCN2EsS0FBRCxJQUFXQSxLQUFLLENBQUNtQixJQUFOLENBQVcsQ0FBQ21hLENBQUQsRUFBSUMsQ0FBSixLQUFVRCxDQUFDLENBQUN2ZixJQUFGLENBQU95ZixhQUFQLENBQXFCRCxDQUFDLENBQUN4ZixJQUF2QixDQUFyQixDQUF6QztJQUVBLE9BQU9xSixNQUFQO0VBQ0QsQ0FwQjJCLEVBb0J6QixDQUFDMkksVUFBRCxDQXBCeUIsQ0FBNUI7RUFxQkEsb0JBQ0U7SUFBQSxXQUNHLENBQUMsQ0FBQy9KLE9BQU8sQ0FBQ21VLFVBQVQsSUFBdUJuVSxPQUFPLENBQUNtVSxVQUFSLEtBQXVCaE8sd0ZBQS9DLGtCQUNDLHVEQUFDLHVFQUFEO01BQXNCLEtBQUssRUFBRUEsd0ZBQTdCO01BQTJELEtBQUssRUFBRW1TLFlBQVksQ0FBQ25TLHdGQUFEO0lBQTlFLEVBRkosRUFJRyxDQUFDLENBQUNuRyxPQUFPLENBQUNtVSxVQUFULElBQXVCblUsT0FBTyxDQUFDbVUsVUFBUixLQUF1QmhPLHlGQUEvQyxrQkFDQyx1REFBQyx1RUFBRDtNQUNFLEtBQUssRUFBRUEseUZBRFQ7TUFFRSxLQUFLLEVBQUVtUyxZQUFZLENBQUNuUyx5RkFBRDtJQUZyQixFQUxKLEVBVUcsQ0FBQyxDQUFDbkcsT0FBTyxDQUFDbVUsVUFBVCxJQUF1Qm5VLE9BQU8sQ0FBQ21VLFVBQVIsS0FBdUJoTywwRkFBL0Msa0JBQ0MsdURBQUMsdUVBQUQ7TUFDRSxnQkFBZ0IsRUFBRW5HLE9BQU8sQ0FBQ21VLFVBQVIsS0FBdUJoTywwRkFEM0M7TUFFRSxLQUFLLEVBQUVBLDBGQUZUO01BR0UsS0FBSyxFQUFFbVMsWUFBWSxDQUFDblMsMEZBQUQ7SUFIckIsRUFYSjtFQUFBLEVBREY7QUFvQkQsQ0E1Q007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCUDtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQVFPLE1BQU15UyxTQUFvQixHQUFHLENBQUM7RUFBRXJoQixJQUFGO0VBQVFzaEIsVUFBUjtFQUFvQkM7QUFBcEIsQ0FBRCxLQUFzQztFQUN4RSxNQUFNN1csS0FBSyxHQUFHNUQsdURBQVUsQ0FBQ3NYLFFBQUQsQ0FBeEI7RUFDQSxNQUFNO0lBQUU3QjtFQUFGLElBQWV2YyxJQUFyQixDQUZ3RSxDQUl4RTs7RUFDQSxNQUFNd2hCLE9BQU8sR0FBRzlhLDhDQUFPLENBQUMsTUFBTTtJQUFBOztJQUM1QixJQUNFNlYsUUFBUSxJQUNSUiw0REFBYyxDQUFDUSxRQUFELENBRGQsd0JBRUFBLFFBQVEsQ0FBQ2EsTUFGVCw2Q0FFQSxpQkFBaUJ0VCxNQUZqQixJQUdBeVMsUUFBUSxDQUFDemIsS0FBVCxLQUFtQjhOLDBGQUpyQixFQUtFO01BQ0E7TUFDQSxNQUFNNlMsYUFBYSxHQUFHTiw4REFBZ0IsQ0FBQzVFLFFBQUQsQ0FBdEMsQ0FGQSxDQUlBOztNQUNBLElBQUlrRixhQUFKLEVBQW1CO1FBQ2pCLG9CQUNFO1VBQU0sS0FBSyxFQUFFQyxNQUFNLENBQUNELGFBQUQsQ0FBbkI7VUFBb0MsU0FBUyxFQUFFL1csS0FBSyxDQUFDaVgsR0FBckQ7VUFBQSxrQkFDTSxHQUROLEVBRUdYLGtGQUFtQyxDQUNsQztZQUNFWSxLQUFLLEVBQUVILGFBRFQ7WUFFRUksR0FBRyxFQUFFLElBQUlDLElBQUo7VUFGUCxDQURrQyxFQUtsQyxLQUxrQyxDQUZ0QztRQUFBLEVBREY7TUFZRDtJQUNGOztJQUNELE9BQU8sSUFBUDtFQUNELENBM0JzQixFQTJCcEIsQ0FBQ3ZGLFFBQUQsRUFBVzdSLEtBQVgsQ0EzQm9CLENBQXZCOztFQTZCQSxJQUFJNFcsVUFBSixFQUFnQjtJQUNkLDREQUNFLHdEQUFDLHdEQUFEO01BQWlCLEtBQUssRUFBQyxZQUF2QjtNQUFBLHdCQUNFLHVEQUFDLGdEQUFELEtBREY7SUFBQSxFQURGO0VBTUQsQ0FQRCxNQU9PLElBQUlDLFVBQUosRUFBZ0I7SUFDckIsOERBQ0Usd0RBQUMsd0RBQUQ7TUFBaUIsS0FBSyxFQUFDLFlBQXZCO01BQUEsV0FDRyxHQURILGVBRUUsdURBQUMsZ0RBQUQsS0FGRjtJQUFBLEVBREY7RUFPRCxDQVJNLE1BUUEsSUFBSWhGLFFBQVEsSUFBSVIsNERBQWMsQ0FBQ1EsUUFBRCxDQUE5QixFQUEwQztJQUMvQyxvQkFDRSx3REFBQyx3REFBRDtNQUFpQixLQUFLLEVBQUMsWUFBdkI7TUFBQSx3QkFDRSx1REFBQyx5REFBRDtRQUFlLEtBQUssRUFBRUEsUUFBUSxDQUFDemI7TUFBL0IsRUFERixFQUVHMGdCLE9BRkg7SUFBQSxFQURGO0VBTUQsQ0FQTSxNQU9BLElBQUlqRixRQUFRLElBQUkyRSw2REFBZSxDQUFDM0UsUUFBRCxDQUEvQixFQUEyQztJQUNoRCxvQkFBTztNQUFBO0lBQUEsRUFBUDtFQUNEOztFQUNELG9CQUFPO0lBQUE7RUFBQSxFQUFQO0FBQ0QsQ0E1RE07O0FBOERQLE1BQU02QixRQUFRLEdBQUl6VCxLQUFELEtBQTJCO0VBQzFDZ1gsR0FBRyxFQUFFbGIsNkNBQUk7QUFDWCxpQkFBaUJrRSxLQUFLLENBQUNzRCxVQUFOLENBQWlCOFQsU0FBakIsQ0FBMkJDLFFBQVM7QUFDckQsYUFBYXJYLEtBQUssQ0FBQ0UsTUFBTixDQUFhdEssSUFBYixDQUFrQjhPLFNBQVU7QUFDekM7QUFDQTtBQUNBO0FBTjRDLENBQTNCLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBR0E7QUFFQTtBQUNBOzs7O0FBU0EsTUFBTTZTLFVBQVUsR0FBRztFQUNqQkMsS0FBSyxFQUFFLENBRFU7RUFFakJDLFNBQVMsRUFBRSxDQUZNO0VBR2pCLENBQUN4VCx3RkFBRCxHQUFnQyxDQUhmO0VBSWpCLENBQUNBLHlGQUFELEdBQWlDLENBSmhCO0VBS2pCLENBQUNBLDBGQUFELEdBQWtDLENBTGpCO0VBTWpCMUosS0FBSyxFQUFFO0FBTlUsQ0FBbkI7QUFTTyxNQUFNb0MsU0FBb0IsR0FBRyxDQUFDO0VBQUUrYSxZQUFGO0VBQWdCQyxhQUFoQjtFQUErQjNULEtBQS9CO0VBQXNDNkQ7QUFBdEMsQ0FBRCxLQUF3RDtFQUMxRixNQUFNK1AsVUFBVSxHQUFHN2IsOENBQU8sQ0FBQyxNQUFNO0lBQy9CLE1BQU15VixLQUFLLHFCQUFRK0YsVUFBUixDQUFYOztJQUNBLE1BQU1NLFFBQVEsR0FBSXhpQixJQUFELElBQXdCO01BQUE7O01BQ3ZDLElBQUlBLElBQUksQ0FBQ3VjLFFBQUwsSUFBaUJSLDREQUFjLENBQUMvYixJQUFJLENBQUN1YyxRQUFOLENBQW5DLEVBQW9EO1FBQ2xESixLQUFLLENBQUNuYyxJQUFJLENBQUN1YyxRQUFMLENBQWN6YixLQUFmLENBQUwsSUFBOEIsQ0FBOUI7TUFDRDs7TUFDRCxJQUFJLG1CQUFBZCxJQUFJLENBQUN1YyxRQUFMLGtFQUFlOEIsTUFBZixNQUEwQixLQUExQixJQUFtQyxvQkFBQXJlLElBQUksQ0FBQ3VjLFFBQUwsb0VBQWU4QixNQUFmLE1BQTBCLE9BQWpFLEVBQTBFO1FBQ3hFbEMsS0FBSyxDQUFDalgsS0FBTixJQUFlLENBQWY7TUFDRDs7TUFDRCxJQUNHbEYsSUFBSSxDQUFDdWMsUUFBTCxJQUFpQjJFLDZEQUFlLENBQUNsaEIsSUFBSSxDQUFDdWMsUUFBTixDQUFqQyxJQUNDdmMsSUFBSSxDQUFDMFgsU0FBTCxJQUFrQnVLLGtFQUFvQixDQUFDamlCLElBQUksQ0FBQzBYLFNBQU4sQ0FGekMsRUFHRTtRQUNBeUUsS0FBSyxDQUFDaUcsU0FBTixJQUFtQixDQUFuQjtNQUNEOztNQUNEakcsS0FBSyxDQUFDZ0csS0FBTixJQUFlLENBQWY7SUFDRCxDQWREOztJQWVBLElBQUl4VCxLQUFKLEVBQVc7TUFDVEEsS0FBSyxDQUFDbEssS0FBTixDQUFZNmEsT0FBWixDQUFvQmtELFFBQXBCO0lBQ0Q7O0lBQ0QsSUFBSWhRLFVBQUosRUFBZ0I7TUFDZEEsVUFBVSxDQUFDOE0sT0FBWCxDQUFvQjVRLFNBQUQsSUFBZUEsU0FBUyxDQUFDekcsTUFBVixDQUFpQnFYLE9BQWpCLENBQTBCM1EsS0FBRCxJQUFXQSxLQUFLLENBQUNsSyxLQUFOLENBQVk2YSxPQUFaLENBQW9Ca0QsUUFBcEIsQ0FBcEMsQ0FBbEM7SUFDRDs7SUFDRCxPQUFPckcsS0FBUDtFQUNELENBeEJ5QixFQXdCdkIsQ0FBQ3hOLEtBQUQsRUFBUTZELFVBQVIsQ0F4QnVCLENBQTFCO0VBMEJBLE1BQU1pUSxlQUFrQyxHQUFHLEVBQTNDOztFQUNBLElBQUlGLFVBQVUsQ0FBQzNULHdGQUFELENBQWQsRUFBOEM7SUFDNUM2VCxlQUFlLENBQUN4ZCxJQUFoQixlQUNFLHdEQUFDLCtEQUFEO01BQStCLE1BQU0sRUFBRTJKLHdGQUF2QztNQUFBLFdBQ0cyVCxVQUFVLENBQUMzVCx3RkFBRCxDQURiO0lBQUEsR0FBc0IsUUFBdEIsQ0FERjtFQUtEOztFQUNELElBQUkyVCxVQUFVLENBQUNyZCxLQUFmLEVBQXNCO0lBQ3BCdWQsZUFBZSxDQUFDeGQsSUFBaEIsZUFDRSx3REFBQywrREFBRDtNQUErQixNQUFNLEVBQUUySix3RkFBdkM7TUFBQSxXQUNHMlQsVUFBVSxDQUFDcmQsS0FEZDtJQUFBLEdBQXNCLFFBQXRCLENBREY7RUFLRDs7RUFDRCxJQUFJcWQsVUFBVSxDQUFDM1QseUZBQUQsQ0FBZCxFQUErQztJQUM3QzZULGVBQWUsQ0FBQ3hkLElBQWhCLGVBQ0Usd0RBQUMsK0RBQUQ7TUFBZ0MsTUFBTSxFQUFFMkoseUZBQXhDO01BQUEsV0FDRzJULFVBQVUsQ0FBQzNULHlGQUFELENBRGI7SUFBQSxHQUFzQixTQUF0QixDQURGO0VBS0Q7O0VBQ0QsSUFBSXlULFlBQVksSUFBSUUsVUFBVSxDQUFDM1QsMEZBQUQsQ0FBOUIsRUFBZ0U7SUFDOUQ2VCxlQUFlLENBQUN4ZCxJQUFoQixlQUNFLHdEQUFDLCtEQUFEO01BQWlDLE1BQU0sRUFBQyxTQUF4QztNQUFBLFdBQ0dzZCxVQUFVLENBQUMzVCwwRkFBRCxDQURiO0lBQUEsR0FBc0IsVUFBdEIsQ0FERjtFQUtEOztFQUNELElBQUkwVCxhQUFhLElBQUlDLFVBQVUsQ0FBQ0gsU0FBaEMsRUFBMkM7SUFDekNLLGVBQWUsQ0FBQ3hkLElBQWhCLGVBQ0Usd0RBQUMsK0RBQUQ7TUFBa0MsTUFBTSxFQUFDLFNBQXpDO01BQUEsV0FDR3NkLFVBQVUsQ0FBQ0gsU0FEZDtJQUFBLEdBQXNCLFdBQXRCLENBREY7RUFLRDs7RUFFRCxvQkFDRTtJQUFBLHdCQUNFO01BQUEsV0FDR0csVUFBVSxDQUFDSixLQURkLE9BQ3NCdFEsZ0RBQVMsQ0FBQyxNQUFELEVBQVMwUSxVQUFVLENBQUNKLEtBQXBCLENBRC9CO0lBQUEsRUFERixFQUlHLENBQUMsQ0FBQ00sZUFBZSxDQUFDM1ksTUFBbEIsaUJBQ0M7TUFBQSwwQ0FDRTtRQUFBO01BQUEsRUFERixHQUVHMlksZUFBZSxDQUFDdEgsTUFBaEIsQ0FDQyxDQUFDdUgsSUFBRCxFQUFPQyxJQUFQLEVBQWFwRCxHQUFiLEtBQ0VtRCxJQUFJLENBQUM1WSxNQUFMLEdBQ0ksQ0FDRTRZLElBREYsZUFFRSx1REFBQywyQ0FBRDtRQUFBLDJDQUNFO1VBQUE7UUFBQSxFQURGO01BQUEsR0FBZW5ELEdBQWYsQ0FGRixFQUtFb0QsSUFMRixDQURKLEdBUUksQ0FBQ0EsSUFBRCxDQVZQLEVBV0MsRUFYRCxDQUZIO0lBQUEsRUFMSjtFQUFBLEVBREY7QUF5QkQsQ0F6Rk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlA7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLE1BQU1JLFdBQThCLEdBQUcsQ0FDckM7RUFDRTVTLElBQUksRUFBRSxTQURSO0VBRUU1TixLQUFLLEVBQUUsTUFGVDtFQUdFQyxLQUFLLEVBQUU7QUFIVCxDQURxQyxFQU1yQztFQUNFMk4sSUFBSSxFQUFFLFFBRFI7RUFFRTVOLEtBQUssRUFBRSxTQUZUO0VBR0VDLEtBQUssRUFBRTtBQUhULENBTnFDLEVBV3JDO0VBQ0UyTixJQUFJLEVBQUUsWUFEUjtFQUVFNU4sS0FBSyxFQUFFLE9BRlQ7RUFHRUMsS0FBSyxFQUFFO0FBSFQsQ0FYcUMsQ0FBdkM7QUFrQkEsTUFBTXdnQixlQUFrQyxHQUFHLENBQ3pDO0VBQ0V6Z0IsS0FBSyxFQUFFLFFBRFQ7RUFFRUMsS0FBSyxFQUFFc2dCLGlGQUFxQkc7QUFGOUIsQ0FEeUMsRUFLekM7RUFDRTFnQixLQUFLLEVBQUUsWUFEVDtFQUVFQyxLQUFLLEVBQUVzZ0Isa0ZBQXNCSTtBQUYvQixDQUx5QyxDQUEzQzs7QUFXQSxNQUFNM2IsV0FBVyxHQUFHLE1BQU07RUFBQTs7RUFDeEIsTUFBTSxDQUFDbkUsV0FBRCxFQUFjK2YsY0FBZCxJQUFnQ25jLDZFQUFjLEVBQXBELENBRHdCLENBRXhCOztFQUNBLE1BQU0sQ0FBQzhWLFNBQUQsRUFBWXNHLFlBQVosSUFBNEJ6YywrQ0FBUSxDQUFTb1csSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixDQUFULENBQTFDO0VBQ0EsTUFBTW9HLGFBQWEsR0FBSSxjQUFhdkcsU0FBVSxFQUE5QztFQUNBLE1BQU1JLGNBQWMsR0FBSSxlQUFjSixTQUFVLEVBQWhEO0VBRUEsTUFBTTtJQUFFcUMsVUFBRjtJQUFjdkMsVUFBZDtJQUEwQjlNLFdBQTFCO0lBQXVDd1Q7RUFBdkMsSUFBb0R2YixvRUFBdUIsQ0FBQzNFLFdBQUQsQ0FBakY7RUFFQSxNQUFNK0UsTUFBTSxHQUFHeUUsc0RBQVMsQ0FBQ3hFLFNBQUQsQ0FBeEI7RUFDQSxNQUFNdUosWUFBWSxHQUFHaEosTUFBTSxDQUFDdU4sT0FBUCxDQUFldEgsaUZBQWYsRUFBc0NoTCxHQUF0QyxDQUEwQyxDQUFDLENBQUMrVyxHQUFELEVBQU1uWSxLQUFOLENBQUQsTUFBbUI7SUFDaEZELEtBQUssRUFBRThkLGtFQUFvQixDQUFDN2QsS0FBRCxDQURxRDtJQUVoRkE7RUFGZ0YsQ0FBbkIsQ0FBMUMsQ0FBckI7O0VBS0EsTUFBTStnQixzQkFBc0IsR0FBSUMsZUFBRCxJQUFpRDtJQUM5RUwsY0FBYyxDQUFDO01BQUVoRSxVQUFVLEVBQUVxRSxlQUFlLENBQUNoakI7SUFBOUIsQ0FBRCxDQUFkO0VBQ0QsQ0FGRDs7RUFJQSxNQUFNaWpCLGVBQWUsR0FBRyxNQUFNO0lBQzVCTixjQUFjLENBQUM7TUFBRWhFLFVBQVUsRUFBRTtJQUFkLENBQUQsQ0FBZDtFQUNELENBRkQ7O0VBSUEsTUFBTXVFLHVCQUF1QixHQUFHZCxnREFBUSxDQUFFNVMsQ0FBRCxJQUFvQztJQUMzRSxNQUFNQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBakI7SUFDQWtULGNBQWMsQ0FBQztNQUFFclQsV0FBVyxFQUFFRyxNQUFNLENBQUN6TixLQUFQLElBQWdCO0lBQS9CLENBQUQsQ0FBZDtFQUNELENBSHVDLEVBR3JDLEdBSHFDLENBQXhDOztFQUtBLE1BQU1taEIsc0JBQXNCLEdBQUluaEIsS0FBRCxJQUFtQjtJQUNoRDJnQixjQUFjLENBQUM7TUFBRXZHLFVBQVUsRUFBRXBhO0lBQWQsQ0FBRCxDQUFkO0VBQ0QsQ0FGRDs7RUFJQSxNQUFNb2hCLGdCQUFnQixHQUFJM2EsSUFBRCxJQUFrQjtJQUN6Q2thLGNBQWMsQ0FBQztNQUFFbGE7SUFBRixDQUFELENBQWQ7RUFDRCxDQUZEOztFQUlBLE1BQU00YSxvQkFBb0IsR0FBSVAsUUFBRCxJQUE0QjtJQUN2REgsY0FBYyxDQUFDO01BQUVHO0lBQUYsQ0FBRCxDQUFkO0VBQ0QsQ0FGRDs7RUFJQSxNQUFNUSx1QkFBdUIsR0FBRyxNQUFNO0lBQ3BDWCxjQUFjLENBQUM7TUFDYnZHLFVBQVUsRUFBRSxJQURDO01BRWI5TSxXQUFXLEVBQUUsSUFGQTtNQUdicVAsVUFBVSxFQUFFLElBSEM7TUFJYm1FLFFBQVEsRUFBRTtJQUpHLENBQUQsQ0FBZDtJQU1BUyxVQUFVLENBQUMsTUFBTVgsWUFBWSxDQUFDdEcsU0FBUyxHQUFHLENBQWIsQ0FBbkIsRUFBb0MsR0FBcEMsQ0FBVjtFQUNELENBUkQ7O0VBVUEsTUFBTTVNLFVBQVUsa0NBQUcsd0RBQUMsNkNBQUQ7SUFBTSxJQUFJLEVBQUU7RUFBWixFQUFILENBQWhCOztFQUNBLG9CQUNFO0lBQUssU0FBUyxFQUFFL0gsTUFBTSxDQUFDNmIsU0FBdkI7SUFBQSx3QkFDRSx3REFBQyw4Q0FBRDtNQUFPLFNBQVMsRUFBRTdiLE1BQU0sQ0FBQ2lJLFVBQXpCO01BQXFDLEtBQUssRUFBQyx1QkFBM0M7TUFBQSx1QkFDRSx3REFBQyw4REFBRDtRQUVFLFFBQVEsTUFGVjtRQUdFLFNBQVMsTUFIWDtRQUlFLFdBQVcsRUFBQyxrQkFKZDtRQUtFLE9BQU8sRUFBRStPLFVBTFg7UUFNRSxRQUFRLEVBQUVvRSxzQkFOWjtRQU9FLE9BQU8sRUFBRUU7TUFQWCxHQUNPSixhQURQO0lBREYsRUFERixlQVlFO01BQUssU0FBUyxFQUFFNVgsZ0RBQUUsQ0FBQ3RELE1BQU0sQ0FBQ3lWLE9BQVIsRUFBaUJ6VixNQUFNLENBQUMwVixZQUF4QixDQUFsQjtNQUFBLHdCQUNFO1FBQUssU0FBUyxFQUFFMVYsTUFBTSxDQUFDeVYsT0FBdkI7UUFBQSx3QkFDRSx3REFBQyw4Q0FBRDtVQUNFLFNBQVMsRUFBRXpWLE1BQU0sQ0FBQzJWLFFBRHBCO1VBRUUsS0FBSyxtQ0FDSCx3REFBQyw4Q0FBRDtZQUFBLHVCQUNFLHlEQUFDLHdEQUFEO2NBQU8sR0FBRyxFQUFFLEdBQVo7Y0FBQSx3QkFDRTtnQkFBQTtjQUFBLEVBREYsZUFFRSx3REFBQyxnREFBRDtnQkFDRSxPQUFPLGVBQ0w7a0JBQUEsNkVBRUU7b0JBQUEsVUFBUTtrQkFBUixFQUZGO2dCQUFBLEVBRko7Z0JBQUEsdUJBUUUsd0RBQUMsNkNBQUQ7a0JBQU0sSUFBSSxFQUFDLGFBQVg7a0JBQXlCLElBQUksRUFBQztnQkFBOUI7Y0FSRixFQUZGO1lBQUE7VUFERixFQURHLENBRlA7VUFBQSx1QkFvQkUsd0RBQUMsOENBQUQ7WUFFRSxTQUFTLEVBQUUzVixNQUFNLENBQUNpSSxVQUZwQjtZQUdFLE1BQU0sRUFBRUYsVUFIVjtZQUlFLFFBQVEsRUFBRXdULHVCQUpaO1lBS0UsWUFBWSxFQUFFNVQsV0FMaEI7WUFNRSxXQUFXLEVBQUMsUUFOZDtZQU9FLGVBQVk7VUFQZCxHQUNPb04sY0FEUDtRQXBCRixFQURGLGVBK0JFO1VBQUssU0FBUyxFQUFFL1UsTUFBTSxDQUFDMlYsUUFBdkI7VUFBQSw4Q0FDRSx3REFBQyw4Q0FBRDtZQUFBO1VBQUEsRUFERixnQkFFRSx3REFBQyx5REFBRDtZQUFrQixPQUFPLEVBQUVuTSxZQUEzQjtZQUF5QyxLQUFLLEVBQUVpTCxVQUFoRDtZQUE0RCxRQUFRLEVBQUUrRztVQUF0RSxFQUZGO1FBQUEsRUEvQkYsZUFtQ0U7VUFBSyxTQUFTLEVBQUV4YixNQUFNLENBQUMyVixRQUF2QjtVQUFBLDhDQUNFLHdEQUFDLDhDQUFEO1lBQUE7VUFBQSxFQURGLGdCQUVFLHdEQUFDLHlEQUFEO1lBQ0UsT0FBTyxFQUFFa0YsZUFEWDtZQUVFLEtBQUssRUFBRU0sUUFGVDtZQUdFLFFBQVEsRUFBRU87VUFIWixFQUZGO1FBQUEsRUFuQ0YsZUEyQ0U7VUFBSyxTQUFTLEVBQUUxYixNQUFNLENBQUMyVixRQUF2QjtVQUFBLDhDQUNFLHdEQUFDLDhDQUFEO1lBQUE7VUFBQSxFQURGLGdCQUVFLHdEQUFDLHlEQUFEO1lBQ0UsT0FBTyxFQUFFaUYsV0FEWDtZQUVFLEtBQUssRUFBRXJCLE1BQU0sc0JBQUN0ZSxXQUFXLENBQUMsTUFBRCxDQUFaLGlFQUF3QjJmLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZXZnQixLQUF2QyxDQUZmO1lBR0UsUUFBUSxFQUFFb2hCO1VBSFosRUFGRjtRQUFBLEVBM0NGO01BQUEsRUFERixFQXFERyxDQUFDekUsVUFBVSxJQUFJdkMsVUFBZCxJQUE0QjlNLFdBQTVCLElBQTJDd1QsUUFBNUMsa0JBQ0M7UUFBSyxTQUFTLEVBQUVuYixNQUFNLENBQUN5VixPQUF2QjtRQUFBLHVCQUNFLHdEQUFDLCtDQUFEO1VBQ0UsU0FBUyxFQUFFelYsTUFBTSxDQUFDOGIsV0FEcEI7VUFFRSxTQUFTLEVBQUUsS0FGYjtVQUdFLElBQUksRUFBQyxPQUhQO1VBSUUsT0FBTyxFQUFDLFdBSlY7VUFLRSxPQUFPLEVBQUVILHVCQUxYO1VBQUE7UUFBQTtNQURGLEVBdERKO0lBQUEsRUFaRjtFQUFBLEVBREY7QUFrRkQsQ0FySUQ7O0FBdUlBLE1BQU0xYixTQUFTLEdBQUl1QyxLQUFELElBQXlCO0VBQ3pDLE9BQU87SUFDTHFaLFNBQVMsRUFBRXZkLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQSx3QkFBd0JrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYzZQLEVBQUc7QUFDekMsdUJBQXVCOVAsS0FBSyxDQUFDQyxPQUFOLENBQWM2UCxFQUFHO0FBQ3hDLEtBTlM7SUFPTHJLLFVBQVUsRUFBRTNKLDZDQUFJO0FBQ3BCO0FBQ0E7QUFDQSxLQVZTO0lBV0xtWCxPQUFPLEVBQUVuWCw2Q0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqQlM7SUFrQkxvWCxZQUFZLEVBQUVwWCw2Q0FBSTtBQUN0QjtBQUNBLEtBcEJTO0lBcUJMcVgsUUFBUSxFQUFFclgsNkNBQUk7QUFDbEIsa0JBQWtCa0UsS0FBSyxDQUFDQyxPQUFOLENBQWM2UCxFQUFHO0FBQ25DLEtBdkJTO0lBd0JMd0osV0FBVyxFQUFFeGQsNkNBQUk7QUFDckIsb0JBQW9Ca0UsS0FBSyxDQUFDQyxPQUFOLENBQWM2UCxFQUFHO0FBQ3JDO0VBMUJTLENBQVA7QUE0QkQsQ0E3QkQ7O0FBK0JBLGlFQUFlbFQsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pOQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFRTyxNQUFNOEssVUFBcUIsZ0JBQUdqVCx1Q0FBQSxDQUFXLENBQUM7RUFBRXVQLEtBQUY7RUFBU0QsU0FBVDtFQUFvQm5HO0FBQXBCLENBQUQsS0FBcUM7RUFBQTs7RUFDbkYsTUFBTTtJQUFFdUY7RUFBRixJQUFrQlksU0FBeEI7RUFDQSxNQUFNelAsUUFBUSxHQUFHSix3REFBVyxFQUE1QjtFQUNBLE1BQU1zSixNQUFNLEdBQUdyQix1REFBVSxDQUFDc0IsU0FBRCxDQUF6QjtFQUVBLE1BQU0sQ0FBQ21jLGNBQUQsRUFBaUJDLGlCQUFqQixJQUFzQzdkLCtDQUFRLENBQUMsS0FBRCxDQUFwRDtFQUNBLE1BQU0sQ0FBQzhkLGVBQUQsRUFBa0JDLGtCQUFsQixJQUF3Qy9kLCtDQUFRLENBQUMsS0FBRCxDQUF0RDtFQUNBLE1BQU0sQ0FBQ2dlLFdBQUQsRUFBY0MsY0FBZCxJQUFnQ2plLCtDQUFRLENBQUMsQ0FBQzRCLFNBQUYsQ0FBOUM7RUFFQSxNQUFNO0lBQUVzYztFQUFGLElBQW1CamQseUVBQWMsRUFBdkM7RUFFQWpKLGdEQUFTLENBQUMsTUFBTTtJQUNkaW1CLGNBQWMsQ0FBQyxDQUFDcmMsU0FBRixDQUFkO0VBQ0QsQ0FGUSxFQUVOLENBQUNBLFNBQUQsQ0FGTSxDQUFUO0VBSUEsTUFBTXVjLFFBQVEsR0FBR1YsK0RBQVcsRUFBNUI7RUFDQSxNQUFNMU0sU0FBUyxvQkFBRy9JLEtBQUssQ0FBQ2xLLEtBQU4sQ0FBWSxDQUFaLENBQUgsa0RBQUcsY0FBZ0JpVCxTQUFsQztFQUNBLE1BQU1xTixTQUFTLEdBQUlyTixTQUFTLElBQUlELGlFQUFrQixDQUFDQyxTQUFELENBQS9CLElBQThDQSxTQUFTLENBQUNJLGFBQVYsQ0FBd0JrTixhQUF2RSxJQUF5RmxjLFNBQTNHO0VBQ0EsTUFBTTtJQUFFbWM7RUFBRixJQUFhZCwyREFBUyxDQUFDWSxTQUFELENBQTVCLENBbEJtRixDQW9CbkY7O0VBQ0EsTUFBTXpELFVBQVUsR0FBR3dELFFBQVEsQ0FBQ2hYLFdBQUQsQ0FBUixJQUF5QixDQUFDYSxLQUFLLENBQUNsSyxLQUFOLENBQVl5Z0IsSUFBWixDQUFrQmxsQixJQUFELElBQVUsQ0FBQyxDQUFDQSxJQUFJLENBQUMwWCxTQUFsQyxDQUE3QztFQUNBLE1BQU1rQixXQUFXLEdBQUdwQixtRUFBb0IsQ0FBQzdJLEtBQUQsQ0FBeEM7O0VBRUEsTUFBTXdXLFdBQVcsR0FBRyxNQUFNO0lBQ3hCbG1CLFFBQVEsQ0FBQ29sQixzRUFBc0IsQ0FBQzNWLFNBQUQsRUFBWUMsS0FBWixDQUF2QixDQUFSO0lBQ0ErVixrQkFBa0IsQ0FBQyxLQUFELENBQWxCO0VBQ0QsQ0FIRDs7RUFLQSxNQUFNVSxXQUE4QixHQUFHLEVBQXZDLENBN0JtRixDQStCbkY7O0VBQ0EsSUFBSTlELFVBQUosRUFBZ0I7SUFDZDhELFdBQVcsQ0FBQ25nQixJQUFaLHNEQUNFLHlEQUFDLHdEQUFEO01BQUEsd0JBQ0Usd0RBQUMsZ0RBQUQsS0FERjtJQUFBLEdBQXFCLGFBQXJCLENBREY7RUFNRCxDQVBELE1BT08sSUFBSTZJLFdBQVcsS0FBS29ILHlFQUFwQixFQUErQztJQUNwRCxJQUFJNlAsU0FBSixFQUFlO01BQ2IsTUFBTXZMLE9BQU8sR0FBSSxpQkFBZ0J1TCxTQUFVLElBQUdiLHdFQUFBLENBQWtCeFYsU0FBUyxDQUFDbE8sSUFBNUIsQ0FBa0MsRUFBaEY7O01BQ0EsSUFBSXlrQixNQUFKLGFBQUlBLE1BQUosZUFBSUEsTUFBTSxDQUFFSyxPQUFaLEVBQXFCO1FBQ25CRixXQUFXLENBQUNuZ0IsSUFBWixlQUNFLHdEQUFDLG9EQUFEO1VBQ0UsY0FBVyxhQURiO1VBR0UsSUFBSSxFQUFDLEtBSFA7VUFJRSxPQUFPLEVBQUMsYUFKVjtVQUtFLEVBQUUsRUFBRXVVLE9BQU8sR0FBRyxXQUxoQjtVQU1FLE1BQU0sRUFBQztRQU5ULEdBRU0sTUFGTixDQURGO01BVUQ7O01BQ0QsSUFBSXlMLE1BQUosYUFBSUEsTUFBSixlQUFJQSxNQUFNLENBQUVNLFFBQVosRUFBc0I7UUFDcEJILFdBQVcsQ0FBQ25nQixJQUFaLGVBQ0Usd0RBQUMsb0RBQUQ7VUFDRSxjQUFXLG9CQURiO1VBR0UsSUFBSSxFQUFDLE1BSFA7VUFJRSxPQUFPLEVBQUMsb0JBSlY7VUFLRSxFQUFFLEVBQUV1VSxPQUFPLEdBQUcsY0FMaEI7VUFNRSxNQUFNLEVBQUM7UUFOVCxHQUVNLGNBRk4sQ0FERjtNQVVEO0lBQ0Y7RUFDRixDQTVCTSxNQTRCQSxJQUFJcUwsWUFBWSxDQUFDL1csV0FBVyxDQUFDdE4sSUFBYixDQUFaLElBQWtDc2tCLFFBQVEsQ0FBQ2hYLFdBQUQsQ0FBOUMsRUFBNkQ7SUFDbEUsSUFBSSxDQUFDOEssV0FBTCxFQUFrQjtNQUNoQndNLFdBQVcsQ0FBQ25nQixJQUFaLGVBQ0Usd0RBQUMsb0RBQUQ7UUFDRSxjQUFXLGlCQURiO1FBRUUsZUFBWSxZQUZkO1FBSUUsSUFBSSxFQUFDLEtBSlA7UUFLRSxPQUFPLEVBQUMsaUJBTFY7UUFNRSxPQUFPLEVBQUUsTUFBTXVmLGlCQUFpQixDQUFDLElBQUQ7TUFObEMsR0FHTSxNQUhOLENBREY7SUFVRDs7SUFFRFksV0FBVyxDQUFDbmdCLElBQVosZUFDRSx3REFBQyxvREFBRDtNQUNFLGNBQVcsbUJBRGI7TUFFRSxlQUFZLGNBRmQ7TUFJRSxJQUFJLEVBQUMsV0FKUDtNQUtFLE9BQU8sRUFBQyxtQkFMVjtNQU1FLE9BQU8sRUFBRSxNQUFNeWYsa0JBQWtCLENBQUMsSUFBRDtJQU5uQyxHQUdNLGNBSE4sQ0FERjtFQVVELENBM0ZrRixDQTZGbkY7OztFQUNBLE1BQU1jLFdBQVcsR0FBRzdXLEtBQUssQ0FBQ25PLElBQU4sS0FBZSxTQUFuQztFQUNBLE1BQU13VCxTQUFTLEdBQUd3UixXQUFXLGdCQUMzQix3REFBQyx3REFBRDtJQUFjLFNBQVMsRUFBRTlXLFNBQVMsQ0FBQ2xPO0VBQW5DLEVBRDJCLGdCQUczQix3REFBQyx3REFBRDtJQUFjLFNBQVMsRUFBRWtPLFNBQVMsQ0FBQ2xPLElBQW5DO0lBQXlDLEtBQUssRUFBRW1PLEtBQUssQ0FBQ25PO0VBQXRELEVBSEY7RUFNQSxvQkFDRTtJQUFLLFNBQVMsRUFBRTJILE1BQU0sQ0FBQzhLLE9BQXZCO0lBQWdDLGVBQVksWUFBNUM7SUFBQSx3QkFDRTtNQUFLLFNBQVMsRUFBRTlLLE1BQU0sQ0FBQ3lZLE1BQXZCO01BQStCLGVBQVksbUJBQTNDO01BQUEsd0JBQ0Usd0RBQUMsNERBQUQ7UUFDRSxTQUFTLEVBQUV6WSxNQUFNLENBQUMwWSxjQURwQjtRQUVFLFdBQVcsRUFBRThELFdBRmY7UUFHRSxRQUFRLEVBQUVDLGNBSFo7UUFJRSxlQUFZO01BSmQsRUFERixlQU9FLHdEQUFDLDZDQUFEO1FBQU0sSUFBSSxFQUFFRCxXQUFXLEdBQUcsUUFBSCxHQUFjO01BQXJDLEVBUEYsRUFRRzNYLHNFQUFrQixDQUFDYyxXQUFELENBQWxCLGlCQUNDLHdEQUFDLGdEQUFEO1FBQVMsT0FBTyxFQUFFQSxXQUFXLENBQUN0TixJQUE5QjtRQUFvQyxTQUFTLEVBQUMsS0FBOUM7UUFBQSx1QkFDRTtVQUNFLEdBQUcsRUFBRXNOLFdBQVcsQ0FBQ2lOLElBQVosQ0FBaUJ2YSxJQUR4QjtVQUVFLFNBQVMsRUFBRTJILE1BQU0sQ0FBQ29ULGNBRnBCO1VBR0UsR0FBRyxFQUFFek4sV0FBVyxDQUFDaU4sSUFBWixDQUFpQmxhLElBQWpCLENBQXNCbWEsS0FBdEIsQ0FBNEJDO1FBSG5DO01BREYsRUFUSixlQWlCRTtRQUFJLFNBQVMsRUFBRTlTLE1BQU0sQ0FBQ3NkLE9BQXRCO1FBQUEsV0FDRzdNLFdBQVcsc0NBQUksd0RBQUMsOENBQUQ7VUFBTyxLQUFLLEVBQUMsUUFBYjtVQUFzQixJQUFJLEVBQUM7UUFBM0IsRUFBSixFQURkLE9BQzhENUUsU0FEOUQ7TUFBQSxFQWpCRixlQW9CRTtRQUFLLFNBQVMsRUFBRTdMLE1BQU0sQ0FBQ3VkO01BQXZCLEVBcEJGLGVBcUJFO1FBQUssU0FBUyxFQUFFdmQsTUFBTSxDQUFDd2QsV0FBdkI7UUFBQSx1QkFDRSx3REFBQyxrREFBRDtVQUFXLFlBQVksRUFBRSxLQUF6QjtVQUFnQyxLQUFLLEVBQUVoWDtRQUF2QztNQURGLEVBckJGLEVBd0JHLENBQUMsQ0FBQ3lXLFdBQVcsQ0FBQ3RiLE1BQWQsaUJBQ0M7UUFBQSx3QkFDRTtVQUFLLFNBQVMsRUFBRTNCLE1BQU0sQ0FBQ3lkLGdCQUF2QjtVQUFBO1FBQUEsRUFERixlQUVFO1VBQUssU0FBUyxFQUFFemQsTUFBTSxDQUFDaWQsV0FBdkI7VUFBQSxVQUFxQ0E7UUFBckMsRUFGRjtNQUFBLEVBekJKO0lBQUEsRUFERixFQWdDRyxDQUFDVCxXQUFELGlCQUNDLHdEQUFDLG9EQUFEO01BQVksaUJBQWlCLEVBQUUsSUFBL0I7TUFBcUMsU0FBUyxFQUFFeGMsTUFBTSxDQUFDMlksVUFBdkQ7TUFBbUUsY0FBYyxFQUFFLElBQW5GO01BQXlGLEtBQUssRUFBRW5TLEtBQUssQ0FBQ2xLO0lBQXRHLEVBakNKLEVBbUNHOGYsY0FBYyxpQkFDYix3REFBQyxzRUFBRDtNQUFxQixLQUFLLEVBQUU1VixLQUE1QjtNQUFtQyxTQUFTLEVBQUVELFNBQTlDO01BQXlELE9BQU8sRUFBRSxNQUFNOFYsaUJBQWlCLENBQUMsS0FBRDtJQUF6RixFQXBDSixlQXNDRSx3REFBQyxxREFBRDtNQUNFLE1BQU0sRUFBRUMsZUFEVjtNQUVFLEtBQUssRUFBQyxjQUZSO01BR0UsSUFBSSxlQUNGO1FBQUEsK0ZBRUUsaUVBRkYsV0FHTzlWLEtBQUssQ0FBQ2xLLEtBQU4sQ0FBWXFGLE1BSG5CLGFBR2tDK0gsZ0RBQVMsQ0FBQyxNQUFELEVBQVNsRCxLQUFLLENBQUNsSyxLQUFOLENBQVlxRixNQUFyQixDQUgzQyxvREFJRSxpRUFKRjtNQUFBLEVBSko7TUFZRSxTQUFTLEVBQUVxYixXQVpiO01BYUUsU0FBUyxFQUFFLE1BQU1ULGtCQUFrQixDQUFDLEtBQUQsQ0FickM7TUFjRSxXQUFXLEVBQUM7SUFkZCxFQXRDRjtFQUFBLEVBREY7QUF5REQsQ0E5Sm9DLENBQTlCO0FBZ0tQclMsVUFBVSxDQUFDd1QsV0FBWCxHQUF5QixZQUF6QjtBQUVPLE1BQU16ZCxTQUFTLEdBQUl1QyxLQUFELEtBQTJCO0VBQ2xEc0ksT0FBTyxFQUFFeE0sNkNBQUk7QUFDZjtBQUNBLG9CQUFvQmtFLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDckM7QUFDQSxHQUxvRDtFQU1sRGdXLE1BQU0sRUFBRW5hLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsZUFBZWtFLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUIsSUFBR0QsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQixJQUFHRCxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3hFLHdCQUF3QkQsS0FBSyxDQUFDRSxNQUFOLENBQWFpYixVQUFiLENBQXdCelcsU0FBVTtBQUMxRDtBQUNBLEdBYm9EO0VBY2xEc1csV0FBVyxFQUFFbGYsNkNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNa0UsS0FBSyxDQUFDMEIsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBNkI7QUFDbkM7QUFDQTtBQUNBLHNCQUFzQjNCLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdkM7QUFDQSxHQXhCb0Q7RUF5QmxENmEsT0FBTyxFQUFFaGYsNkNBQUk7QUFDZixtQkFBbUJrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3BDO0FBQ0EsR0E1Qm9EO0VBNkJsRDhhLE1BQU0sRUFBRWpmLDZDQUFJO0FBQ2Q7QUFDQSxHQS9Cb0Q7RUFnQ2xEb2EsY0FBYyxFQUFFcGEsNkNBQUk7QUFDdEI7QUFDQTtBQUNBLG1CQUFtQmtFLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDcEMsc0JBQXNCRCxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F6Q29EO0VBMENsRDJRLGNBQWMsRUFBRTlVLDZDQUFJO0FBQ3RCLGFBQWFrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQzlCLGNBQWNELEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDL0IsbUJBQW1CRCxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3BDLEdBOUNvRDtFQStDbERtYixnQkFBZ0IsRUFBRXRmLDZDQUFJO0FBQ3hCO0FBQ0EsYUFBYWtFLEtBQUssQ0FBQ0UsTUFBTixDQUFhdEssSUFBYixDQUFrQnlsQixRQUFTO0FBQ3hDLEdBbERvRDtFQW1EbERKLGdCQUFnQixFQUFFbmYsNkNBQUk7QUFDeEIsZ0JBQWdCa0UsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNqQyxHQXJEb0Q7RUFzRGxEd2EsV0FBVyxFQUFFM2UsNkNBQUk7QUFDbkI7QUFDQSxxQkFBcUJrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxHQUFkLENBQW1CO0FBQ3hDO0FBQ0EsR0ExRG9EO0VBMkRsRGtXLFVBQVUsRUFBRXJhLDZDQUFJO0FBQ2xCLGtCQUFrQmtFLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDbkM7QUE3RG9ELENBQTNCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNUDtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQWNPLE1BQU0yVixVQUFxQixHQUFHLENBQUM7RUFDcEM5YixLQURvQztFQUVwQ2tMLFNBRm9DO0VBR3BDc1csY0FBYyxHQUFHLEtBSG1CO0VBSXBDQyxZQUFZLEdBQUcsaUJBSnFCO0VBS3BDQyxlQUFlLEdBQUcsS0FMa0I7RUFNcENDLGlCQUFpQixHQUFHO0FBTmdCLENBQUQsS0FPL0I7RUFDSixNQUFNamUsTUFBTSxHQUFHckIsdURBQVUsQ0FBQ3NCLFNBQUQsQ0FBekI7RUFFQSxNQUFNaWUsWUFBWSxHQUFHNWEsZ0RBQUUsQ0FBQ3RELE1BQU0sQ0FBQzhLLE9BQVIsRUFBaUJ0RCxTQUFqQixFQUE0QjtJQUFFLENBQUN4SCxNQUFNLENBQUNtZSxhQUFSLEdBQXdCTDtFQUExQixDQUE1QixDQUF2QjtFQUVBLE1BQU05ZixLQUFLLEdBQUdPLDhDQUFPLENBQUMsTUFBNEI7SUFDaEQsTUFBTTZmLFFBQWtCLEdBQUcsRUFBM0I7SUFDQSxPQUFPOWhCLEtBQUssQ0FBQ2IsR0FBTixDQUFVLENBQUM1RCxJQUFELEVBQU93bUIsT0FBUCxLQUFtQjtNQUFBOztNQUNsQyxJQUFJN0wsR0FBRyxHQUFHNUYsSUFBSSxDQUFDQyxTQUFMLENBQWUsbUJBQUNoVixJQUFJLENBQUN1YyxRQUFOLG1EQUFDLGVBQWUvTyxJQUFoQixFQUFzQnhOLElBQUksQ0FBQ3FXLE1BQTNCLEVBQW1DclcsSUFBSSxDQUFDNk4sS0FBeEMsRUFBK0M3TixJQUFJLENBQUNRLElBQXBELEVBQTBEUixJQUFJLENBQUNpVyxXQUEvRCxDQUFmLENBQVY7O01BQ0EsSUFBSXNRLFFBQVEsQ0FBQ0UsUUFBVCxDQUFrQjlMLEdBQWxCLENBQUosRUFBNEI7UUFDMUJBLEdBQUcsSUFBSyxJQUFHNkwsT0FBUSxFQUFuQjtNQUNEOztNQUNERCxRQUFRLENBQUN0aEIsSUFBVCxDQUFjMFYsR0FBZDtNQUNBLE9BQU87UUFDTDdYLEVBQUUsRUFBRTZYLEdBREM7UUFFTDNWLElBQUksRUFBRWhGO01BRkQsQ0FBUDtJQUlELENBVk0sQ0FBUDtFQVdELENBYm9CLEVBYWxCLENBQUN5RSxLQUFELENBYmtCLENBQXJCO0VBZUEsTUFBTWlpQixPQUFPLEdBQUdDLFVBQVUsQ0FBQ1AsaUJBQUQsRUFBb0JELGVBQXBCLENBQTFCOztFQUVBLElBQUksQ0FBQzFoQixLQUFLLENBQUNxRixNQUFYLEVBQW1CO0lBQ2pCLG9CQUFPO01BQUssU0FBUyxFQUFFMkIsZ0RBQUUsQ0FBQzRhLFlBQUQsRUFBZWxlLE1BQU0sQ0FBQytkLFlBQXRCLENBQWxCO01BQUEsVUFBd0RBO0lBQXhELEVBQVA7RUFDRDs7RUFFRCxNQUFNVSxjQUFjLEdBQUdYLGNBQWMsR0FBR3RhLG1GQUFILEdBQWdDRCx1REFBckU7RUFFQSxvQkFDRTtJQUFLLFNBQVMsRUFBRTJhLFlBQWhCO0lBQThCLGVBQVksYUFBMUM7SUFBQSx1QkFDRSx3REFBQyxjQUFEO01BQ0UsSUFBSSxFQUFFSyxPQURSO01BRUUsWUFBWSxFQUFFLElBRmhCO01BR0UsS0FBSyxFQUFFdmdCLEtBSFQ7TUFJRSxxQkFBcUIsRUFBRSxDQUFDO1FBQUVuQixJQUFJLEVBQUVoRjtNQUFSLENBQUQsa0JBQW9CLHdEQUFDLHNEQUFEO1FBQWEsSUFBSSxFQUFFQTtNQUFuQixFQUo3QztNQUtFLFVBQVUsRUFBRTtRQUFFNm1CLFlBQVksRUFBRTdVLHdFQUEyQkE7TUFBM0MsQ0FMZDtNQU1FLGdCQUFnQixFQUFFN0osTUFBTSxDQUFDaUw7SUFOM0I7RUFERixFQURGO0FBWUQsQ0EvQ007QUFpREEsTUFBTWhMLFNBQVMsR0FBSXVDLEtBQUQsS0FBMkI7RUFDbEQyYixhQUFhLEVBQUU3Ziw2Q0FBSTtBQUNyQixNQUFNa0UsS0FBSyxDQUFDMEIsV0FBTixDQUFrQmtLLEVBQWxCLENBQXFCLElBQXJCLENBQTJCO0FBQ2pDO0FBQ0E7QUFDQSxHQUxvRDtFQU1sRDJQLFlBQVksRUFBRXpmLDZDQUFJO0FBQ3BCLGVBQWVrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ2hDLEdBUm9EO0VBU2xEcUksT0FBTyxFQUFFeE0sNkNBQUk7QUFDZjtBQUNBLHFCQUFxQmtFLEtBQUssQ0FBQ21jLEtBQU4sQ0FBWUMsWUFBWixFQUEyQjtBQUNoRCxHQVpvRDtFQWFsRDNULFVBQVUsRUFBRTNNLDZDQUFJO0FBQ2xCO0FBQ0E7QUFDQSxtQkFBbUJrRSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3BDLHNCQUFzQkQsS0FBSyxDQUFDQyxPQUFOLENBQWMsSUFBZCxDQUFvQjtBQUMxQztBQUNBLDZCQUE2QkQsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JrYyxNQUFPO0FBQ3hELDhCQUE4QnJjLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxNQUFiLENBQW9Ca2MsTUFBTztBQUN6RCwrQkFBK0JyYyxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFBYixDQUFvQmtjLE1BQU87QUFDMUQ7QUF0Qm9ELENBQTNCLENBQWxCOztBQXlCUCxTQUFTTCxVQUFULENBQW9CUCxpQkFBcEIsRUFBZ0RELGVBQWhELEVBQTBFO0VBQ3hFLE1BQU1yQixRQUFRLEdBQUdWLCtEQUFXLEVBQTVCO0VBRUEsT0FBTzFkLDhDQUFPLENBQUMsTUFBOEI7SUFDM0MsTUFBTWdnQixPQUErQixHQUFHLENBQ3RDO01BQ0U1akIsRUFBRSxFQUFFLE9BRE47TUFFRVAsS0FBSyxFQUFFLE9BRlQ7TUFHRTtNQUNBMGtCLFVBQVUsRUFBRSxDQUFDO1FBQUVqaUIsSUFBSSxFQUFFaEY7TUFBUixDQUFELEtBQW9CO1FBQzlCLE1BQU07VUFBRTBPO1FBQUYsSUFBZ0IxTyxJQUF0QjtRQUNBLE1BQU07VUFBRThOO1FBQUYsSUFBa0JZLFNBQXhCO1FBQ0EsTUFBTTtVQUFFNk4sUUFBRjtVQUFZN0U7UUFBWixJQUEwQjFYLElBQWhDO1FBQ0EsTUFBTXNoQixVQUFVLEdBQUcsQ0FBQyxFQUFFd0QsUUFBUSxDQUFDaFgsV0FBRCxDQUFSLElBQXlCeU8sUUFBekIsSUFBcUMsQ0FBQzdFLFNBQXhDLENBQXBCO1FBQ0EsTUFBTTZKLFVBQVUsR0FBRyxDQUFDLEVBQUV1RCxRQUFRLENBQUNoWCxXQUFELENBQVIsSUFBeUI0SixTQUF6QixJQUFzQyxDQUFDNkUsUUFBekMsQ0FBcEI7UUFDQSxvQkFBTyx3REFBQyxrREFBRDtVQUFXLElBQUksRUFBRXZjLElBQWpCO1VBQXVCLFVBQVUsRUFBRXNoQixVQUFuQztVQUErQyxVQUFVLEVBQUVDO1FBQTNELEVBQVA7TUFDRCxDQVhIO01BWUUvRyxJQUFJLEVBQUU7SUFaUixDQURzQyxFQWV0QztNQUNFMVgsRUFBRSxFQUFFLE1BRE47TUFFRVAsS0FBSyxFQUFFLE1BRlQ7TUFHRTtNQUNBMGtCLFVBQVUsRUFBRSxDQUFDO1FBQUVqaUIsSUFBSSxFQUFFaEY7TUFBUixDQUFELEtBQW9CQSxJQUFJLENBQUNRLElBSnZDO01BS0VnYSxJQUFJLEVBQUU7SUFMUixDQWZzQyxFQXNCdEM7TUFDRTFYLEVBQUUsRUFBRSxhQUROO01BRUVQLEtBQUssRUFBRSxFQUZUO01BR0U7TUFDQTBrQixVQUFVLEVBQUUsQ0FBQztRQUFFamlCLElBQUksRUFBRWhGO01BQVIsQ0FBRCxLQUFvQjtRQUM5QixNQUFNMFgsU0FBUyxHQUFHMVgsSUFBSSxDQUFDMFgsU0FBdkI7UUFDQSxNQUFNd1Asb0JBQW9CLEdBQUd6UCxnRUFBa0IsQ0FBQ0MsU0FBRCxDQUEvQzs7UUFFQSxJQUFJLENBQUN3UCxvQkFBTCxFQUEyQjtVQUN6QixPQUFPLElBQVA7UUFDRDs7UUFFRCxNQUFNek8sVUFBVSxHQUFHZixTQUFTLENBQUNJLGFBQVYsQ0FBd0JXLFVBQTNDO1FBQ0EsT0FBT0EsVUFBVSw0REFBRyx3REFBQyw0REFBRCxLQUFILElBQTJCLElBQTVDO01BQ0QsQ0FkSDtNQWVFK0IsSUFBSSxFQUFFO0lBZlIsQ0F0QnNDLEVBdUN0QztNQUNFMVgsRUFBRSxFQUFFLFFBRE47TUFFRVAsS0FBSyxFQUFFLFFBRlQ7TUFHRTtNQUNBMGtCLFVBQVUsRUFBRSxDQUFDO1FBQUVqaUIsSUFBSSxFQUFFO1VBQUV1WDtRQUFGO01BQVIsQ0FBRCxLQUE2QkEsUUFBUSxnQkFBRyx3REFBQyxvREFBRDtRQUFZLElBQUksRUFBRUE7TUFBbEIsRUFBSCxHQUFvQyxJQUp2RjtNQUtFL0IsSUFBSSxFQUFFO0lBTFIsQ0F2Q3NDLENBQXhDOztJQStDQSxJQUFJNEwsaUJBQUosRUFBdUI7TUFDckJNLE9BQU8sQ0FBQ3poQixJQUFSLENBQWE7UUFDWG5DLEVBQUUsRUFBRSxTQURPO1FBRVhQLEtBQUssRUFBRSxTQUZJO1FBR1g7UUFDQTBrQixVQUFVLEVBQUUsQ0FBQztVQUFFamlCLElBQUksRUFBRWhGO1FBQVIsQ0FBRDtVQUFBOztVQUFBLGdDQUFvQkEsSUFBSSxDQUFDaVcsV0FBTCxDQUFpQmlCLGdFQUFqQixDQUFwQix5RUFBNEQsRUFBNUQ7UUFBQSxDQUpEO1FBS1hzRCxJQUFJLEVBQUU7TUFMSyxDQUFiO0lBT0Q7O0lBQ0QsSUFBSTJMLGVBQUosRUFBcUI7TUFDbkJPLE9BQU8sQ0FBQ3poQixJQUFSLENBQWE7UUFDWG5DLEVBQUUsRUFBRSxPQURPO1FBRVhQLEtBQUssRUFBRSxPQUZJO1FBR1g7UUFDQTBrQixVQUFVLEVBQUUsQ0FBQztVQUFFamlCLElBQUksRUFBRWhGO1FBQVIsQ0FBRCxLQUFvQjtVQUM5QixNQUFNO1lBQUUwTyxTQUFGO1lBQWFDO1VBQWIsSUFBdUIzTyxJQUE3QixDQUQ4QixDQUU5Qjs7VUFDQSxNQUFNd2xCLFdBQVcsR0FBRzdXLEtBQUssQ0FBQ25PLElBQU4sS0FBZSxTQUFuQztVQUNBLE1BQU13VCxTQUFTLEdBQUd3UixXQUFXLGdCQUMzQix3REFBQyx3REFBRDtZQUFjLFNBQVMsRUFBRTlXLFNBQVMsQ0FBQ2xPO1VBQW5DLEVBRDJCLGdCQUczQix3REFBQyx3REFBRDtZQUFjLFNBQVMsRUFBRWtPLFNBQVMsQ0FBQ2xPLElBQW5DO1lBQXlDLEtBQUssRUFBRW1PLEtBQUssQ0FBQ25PO1VBQXRELEVBSEY7VUFNQSxPQUFPd1QsU0FBUDtRQUNELENBZlU7UUFnQlh3RyxJQUFJLEVBQUU7TUFoQkssQ0FBYjtJQWtCRDs7SUFDRCxPQUFPa00sT0FBUDtFQUNELENBOUVhLEVBOEVYLENBQUM1QixRQUFELEVBQVdzQixpQkFBWCxFQUE4QkQsZUFBOUIsQ0E5RVcsQ0FBZDtBQStFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFnQkEsTUFBTXFCLFlBQXVDLEdBQUcsQ0FBQztFQUFFM1A7QUFBRixDQUFELEtBQWlCO0VBQy9ELE1BQU07SUFBRWxPLE9BQUY7SUFBV3pFLEtBQVg7SUFBa0IyRSxNQUFNLEdBQUc7RUFBM0IsSUFBa0N5ZCwrRkFBMkIsQ0FBQ3pQLE9BQUQsQ0FBbkU7O0VBRUEsSUFBSWxPLE9BQU8sSUFBSSxDQUFDekUsS0FBaEIsRUFBdUI7SUFDckIsa0VBQU8sdURBQUMsMkRBQUQ7TUFBb0IsSUFBSSxFQUFFO0lBQTFCLEVBQVA7RUFDRDs7RUFFRCxJQUFJQSxLQUFLLElBQUksQ0FBQ3lFLE9BQWQsRUFBdUI7SUFDckIsb0JBQU8sdURBQUMsOENBQUQ7TUFBTyxLQUFLLEVBQUUscUNBQWQ7TUFBQSxVQUFzRHpFLEtBQUssQ0FBQzBQO0lBQTVELEVBQVA7RUFDRDs7RUFFRCxNQUFNOFIsT0FBNEQsR0FBRyxDQUNuRTtJQUFFNWpCLEVBQUUsRUFBRSxPQUFOO0lBQWVQLEtBQUssRUFBRSxPQUF0QjtJQUErQmlZLElBQUksRUFBRSxhQUFyQztJQUFvRHlNLFVBQVUsRUFBRVE7RUFBaEUsQ0FEbUUsRUFFbkU7SUFBRTNrQixFQUFFLEVBQUUsT0FBTjtJQUFlUCxLQUFLLEVBQUUsRUFBdEI7SUFBMEJpWSxJQUFJLEVBQUUsTUFBaEM7SUFBd0N5TSxVQUFVLEVBQUVTO0VBQXBELENBRm1FLEVBR25FO0lBQUU1a0IsRUFBRSxFQUFFLFdBQU47SUFBbUJQLEtBQUssRUFBRSxNQUExQjtJQUFrQ2lZLElBQUksRUFBRSxhQUF4QztJQUF1RHlNLFVBQVUsRUFBRVU7RUFBbkUsQ0FIbUUsQ0FBckU7RUFNQSxNQUFNeGhCLEtBQXdCLEdBQUcwRCxNQUFNLENBQ3BDc1IsTUFEOEIsQ0FDdkIsQ0FBQ3lNLEdBQUQsRUFBNkJ2aEIsSUFBN0IsRUFBbUN3RixLQUFuQyxLQUE2QztJQUNuRCtiLEdBQUcsQ0FBQzNpQixJQUFKLENBQVM7TUFDUG5DLEVBQUUsRUFBRTRlLE1BQU0sQ0FBQ3JiLElBQUksQ0FBQ3ZELEVBQU4sQ0FESDtNQUVQaEMsS0FBSyxFQUFFdUYsSUFBSSxDQUFDd2hCLFFBRkw7TUFHUHRuQixJQUFJLEVBQUU4RixJQUFJLENBQUM5RixJQUhKO01BSVB5RSxJQUFJLEVBQUVxQixJQUFJLENBQUNyQixJQUpKO01BS1A4aUIsU0FBUyxFQUFFemhCLElBQUksQ0FBQzBoQjtJQUxULENBQVQsRUFEbUQsQ0FTbkQ7O0lBQ0EsSUFBSSxDQUFDQyx5QkFBeUIsQ0FBQ25jLEtBQUQsRUFBUWhDLE1BQVIsQ0FBOUIsRUFBK0M7TUFDN0MrZCxHQUFHLENBQUMzaUIsSUFBSixDQUFTO1FBQUVuQyxFQUFFLEVBQUVza0IsZ0RBQVEsRUFBZDtRQUFrQnRtQixLQUFLLEVBQUV1RixJQUFJLENBQUM0aEI7TUFBOUIsQ0FBVDtJQUNEOztJQUVELE9BQU9MLEdBQVA7RUFDRCxDQWhCOEIsRUFnQjVCLEVBaEI0QixFQWlCOUJoa0IsR0FqQjhCLENBaUJ6QnNrQixXQUFELEtBQWtCO0lBQ3JCcGxCLEVBQUUsRUFBRW9sQixXQUFXLENBQUNwbEIsRUFESztJQUVyQmtDLElBQUksRUFBRWtqQjtFQUZlLENBQWxCLENBakIwQixDQUFqQztFQXNCQSxvQkFBTyx1REFBQyx1REFBRDtJQUFjLElBQUksRUFBRXhCLE9BQXBCO0lBQTZCLEtBQUssRUFBRXZnQjtFQUFwQyxFQUFQO0FBQ0QsQ0F4Q0Q7O0FBMENBLFNBQVN1aEIsZUFBVCxDQUF5QnJoQixJQUF6QixFQUFnRDtFQUFBOztFQUM5QyxNQUFNOGhCLE9BQU8sK0NBQUc5aEIsSUFBSSxDQUFDckIsSUFBTCxDQUFVQSxJQUFiLG9EQUFHLGdCQUFnQm9qQixXQUFuQix5RUFBa0MsRUFBL0M7RUFFQSxvQkFDRTtJQUFBLFdBQ0cvaEIsSUFBSSxDQUFDckIsSUFBTCxDQUFVekUsSUFEYixlQUVFLHVEQUFDLGFBQUQ7TUFBQSxVQUNHNG5CLE9BQU8sQ0FBQ3ZrQixHQUFSLENBQWF5a0IsS0FBRCxpQkFDWCx1REFBQyxtREFBRDtRQUErQixRQUFRLEVBQUVBLEtBQUssQ0FBQ0MsTUFBL0M7UUFBdUQsS0FBSyxFQUFFNUcsTUFBTSxDQUFDMkcsS0FBSyxDQUFDN2xCLEtBQVA7TUFBcEUsR0FBaUI2bEIsS0FBSyxDQUFDQyxNQUF2QixDQUREO0lBREgsRUFGRjtFQUFBLEVBREY7QUFVRDs7QUFFRCxTQUFTYixlQUFULENBQXlCcGhCLElBQXpCLEVBQWdEO0VBQzlDLG9CQUFPLHVEQUFDLHlEQUFEO0lBQWUsS0FBSyxFQUFFQSxJQUFJLENBQUNyQixJQUFMLENBQVVsRTtFQUFoQyxFQUFQO0FBQ0Q7O0FBRUQsU0FBUzZtQixtQkFBVCxDQUE2QnRoQixJQUE3QixFQUFvRDtFQUNsRCxvQkFDRTtJQUFLLFNBQVMsRUFBRWtpQixjQUFoQjtJQUFBLFVBQWlDbGlCLElBQUksQ0FBQ3JCLElBQUwsQ0FBVThpQixTQUFWLGlCQUF1QjtNQUFBLFVBQU9ULDZEQUFjLENBQUNoaEIsSUFBSSxDQUFDckIsSUFBTCxDQUFVOGlCLFNBQVg7SUFBckI7RUFBeEQsRUFERjtBQUdEOztBQUVELE1BQU1VLGFBQXFCLEdBQUcsQ0FBQztFQUFFdmQ7QUFBRixDQUFELEtBQWtCO0VBQzlDLE1BQU07SUFBRWdJO0VBQUYsSUFBY3JHLHNEQUFTLENBQUN4RSxTQUFELENBQTdCO0VBQ0Esb0JBQU87SUFBSyxTQUFTLEVBQUU2SyxPQUFoQjtJQUFBLFVBQTBCaEk7RUFBMUIsRUFBUDtBQUNELENBSEQ7O0FBS0EsTUFBTXNkLGNBQWMsR0FBRzloQiw2Q0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxDQUpBOztBQU1BLE1BQU0yQixTQUFTLEdBQUl1QyxLQUFELEtBQTBCO0VBQzFDc0ksT0FBTyxFQUFFeE0sNkNBQUk7QUFDZjtBQUNBLHNCQUFzQmtFLEtBQUssQ0FBQ0MsT0FBTixDQUFjNmQsRUFBRztBQUN2QztBQUNBO0FBTDRDLENBQTFCLENBQWxCLEVBUUE7QUFDQTs7O0FBQ0EsU0FBU1QseUJBQVQsQ0FBbUNuYyxLQUFuQyxFQUFrRDFGLEtBQWxELEVBQXNGO0VBQ3BGLE1BQU11aUIsa0JBQWtCLEdBQUd2aUIsS0FBSyxDQUFDMEYsS0FBRCxDQUFoQztFQUNBLE1BQU04YyxtQkFBbUIsR0FBR3hpQixLQUFLLENBQUMwRixLQUFLLEdBQUcsQ0FBVCxDQUFqQzs7RUFFQSxJQUFJLENBQUM4YyxtQkFBTCxFQUEwQjtJQUN4QixPQUFPLEtBQVA7RUFDRDs7RUFFRCxPQUFPQSxtQkFBbUIsQ0FBQ2QsUUFBcEIsS0FBaUNhLGtCQUFrQixDQUFDVCxTQUEzRDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQzlIRDtBQUlPLFNBQVMzVix5QkFBVCxDQUFtQ0UsVUFBbkMsRUFBd0U7RUFDN0UsT0FBTzlMLDhDQUFPLENBQ1osTUFDRThMLFVBQVUsQ0FBQ29XLE9BQVgsQ0FBb0IxSSxFQUFELElBQ2pCQSxFQUFFLENBQUNqWSxNQUFILENBQVVyRSxHQUFWLENBQWVpbEIsQ0FBRCxLQUFRO0lBQ3BCbmEsU0FBUyxFQUFFd1IsRUFEUztJQUVwQnZSLEtBQUssRUFBRWthO0VBRmEsQ0FBUixDQUFkLENBREYsQ0FGVSxFQVFaLENBQUNyVyxVQUFELENBUlksQ0FBZDtBQVVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZEO0FBYUE7QUFNQTtBQUVBO0FBUUE7QUFDQTtBQUNPLFNBQVNoTCx5QkFBVCxDQUFtQzRNLGVBQW5DLEVBQXNGO0VBQzNGLE1BQU02VSxrQkFBa0IsR0FBR3ZoQix1RkFBMEIsQ0FBRTVHLEtBQUQsSUFBV0EsS0FBSyxDQUFDeUksU0FBbEIsQ0FBckQ7RUFDQSxNQUFNMmYsbUJBQW1CLEdBQUd4aEIsdUZBQTBCLENBQUU1RyxLQUFELElBQVdBLEtBQUssQ0FBQzJJLFVBQWxCLENBQXRELENBRjJGLENBSTNGOztFQUNBLE1BQU0wZixLQUFLLEdBQUd2cUIsNkNBQU0sQ0FBNkIsRUFBN0IsQ0FBcEI7RUFFQSxNQUFNd3FCLFlBQVksR0FBRzFpQiw4Q0FBTyxDQUFDLE1BQXFCO0lBQ2hELElBQUkwTixlQUFKLEVBQXFCO01BQ25CLE1BQU10RyxXQUFXLEdBQUdpYix1RUFBb0IsQ0FBQzNVLGVBQUQsQ0FBeEM7O01BQ0EsSUFBSSxDQUFDdEcsV0FBTCxFQUFrQjtRQUNoQixNQUFNLElBQUl1YixLQUFKLENBQVcseUJBQXdCalYsZUFBZ0IsRUFBbkQsQ0FBTjtNQUNEOztNQUNELE9BQU8sQ0FBQ3RHLFdBQUQsQ0FBUDtJQUNEOztJQUNELE9BQU9nYixxRUFBa0IsRUFBekI7RUFDRCxDQVQyQixFQVN6QixDQUFDMVUsZUFBRCxDQVR5QixDQUE1QjtFQVdBLE9BQU8xTiw4Q0FBTyxDQUNaLE1BQ0UwaUIsWUFBWSxDQUNUeGxCLEdBREgsQ0FDUWtLLFdBQUQsSUFBMEM7SUFBQTs7SUFDN0MsTUFBTXNHLGVBQWUsR0FBR3BILHFFQUFrQixDQUFDYyxXQUFELENBQWxCLEdBQWtDQSxXQUFXLENBQUN0TixJQUE5QyxHQUFxRHNOLFdBQTdFO0lBQ0EsTUFBTXZFLFNBQVMsNEJBQUcwZixrQkFBa0IsQ0FBQzdVLGVBQUQsQ0FBckIsMERBQUcsc0JBQXFDdkssTUFBdkQ7SUFDQSxNQUFNSixVQUFVLDRCQUFHeWYsbUJBQW1CLENBQUM5VSxlQUFELENBQXRCLDBEQUFHLHNCQUFzQ3ZLLE1BQXpEO0lBRUEsTUFBTXlmLE1BQU0sR0FBR0gsS0FBSyxDQUFDaHFCLE9BQU4sQ0FBY2lWLGVBQWQsQ0FBZjs7SUFDQSxJQUFJa1YsTUFBTSxJQUFJQSxNQUFNLENBQUMvZixTQUFQLEtBQXFCQSxTQUEvQixJQUE0QytmLE1BQU0sQ0FBQzdmLFVBQVAsS0FBc0JBLFVBQXRFLEVBQWtGO01BQ2hGLE9BQU82ZixNQUFNLENBQUN6ZixNQUFkO0lBQ0Q7O0lBQ0QsTUFBTTJJLFVBQWlELEdBQUcsRUFBMUQsQ0FUNkMsQ0FXN0M7O0lBQ0E3SixNQUFNLENBQUN1TixPQUFQLENBQWV6TSxVQUFVLElBQUksRUFBN0IsRUFBaUM2VixPQUFqQyxDQUF5QyxDQUFDLENBQUN2TCxhQUFELEVBQWdCOUwsTUFBaEIsQ0FBRCxLQUE2QjtNQUNwRSxNQUFNeUcsU0FBZ0MsR0FBRztRQUN2Q1osV0FEdUM7UUFFdkN0TixJQUFJLEVBQUV1VCxhQUZpQztRQUd2QzlMLE1BQU0sRUFBRTtNQUgrQixDQUF6QztNQUtBdUssVUFBVSxDQUFDdUIsYUFBRCxDQUFWLEdBQTRCckYsU0FBNUI7TUFDQTZhLGlDQUFpQyxDQUFDN2EsU0FBRCxFQUFZekcsTUFBWixDQUFqQztJQUNELENBUkQsRUFaNkMsQ0FzQjdDOztJQUNBc0IsU0FBUyxTQUFULElBQUFBLFNBQVMsV0FBVCxZQUFBQSxTQUFTLENBQUUrVixPQUFYLENBQW1CLENBQUM7TUFBRTllLElBQUksRUFBRXVULGFBQVI7TUFBdUI5TDtJQUF2QixDQUFELEtBQXFDO01BQ3RELE1BQU1pWSxFQUFFLEdBQUkxTixVQUFVLENBQUN1QixhQUFELENBQVYsR0FBNEJ2QixVQUFVLENBQUN1QixhQUFELENBQVYsSUFBNkI7UUFDbkVqRyxXQURtRTtRQUVuRXROLElBQUksRUFBRXVULGFBRjZEO1FBR25FOUwsTUFBTSxFQUFFO01BSDJELENBQXJFO01BTUF1aEIsZ0NBQWdDLENBQUN0SixFQUFELEVBQUtqWSxNQUFMLENBQWhDO0lBQ0QsQ0FSRDtJQVVBLE1BQU00QixNQUFNLEdBQUdsQixNQUFNLENBQUNDLE1BQVAsQ0FBYzRKLFVBQWQsQ0FBZjtJQUVBMlcsS0FBSyxDQUFDaHFCLE9BQU4sQ0FBY2lWLGVBQWQsSUFBaUM7TUFBRTdLLFNBQUY7TUFBYUUsVUFBYjtNQUF5Qkk7SUFBekIsQ0FBakM7SUFDQSxPQUFPQSxNQUFQO0VBQ0QsQ0F0Q0gsRUF1Q0c0ZixJQXZDSCxFQUZVLEVBMENaLENBQUNSLGtCQUFELEVBQXFCQyxtQkFBckIsRUFBMENFLFlBQTFDLENBMUNZLENBQWQ7QUE0Q0QsRUFFRDs7QUFDTyxTQUFTblUsMEJBQVQsQ0FBb0N6QyxVQUFwQyxFQUF5RTtFQUM5RSxPQUFPQSxVQUFVLENBQUM1TyxHQUFYLENBQWdCOEssU0FBRCxJQUFlO0lBQ25DLE1BQU1nYixZQUFtQyxxQkFDcENoYixTQURvQztNQUV2Q3pHLE1BQU0sRUFBRTtJQUYrQixFQUF6QyxDQURtQyxDQU1uQzs7SUFDQXloQixZQUFZLENBQUN6aEIsTUFBYixDQUFvQmhELElBQXBCLENBQXlCO01BQ3ZCekUsSUFBSSxFQUFFLFNBRGlCO01BRXZCaUUsS0FBSyxFQUFFa2xCLGVBQWUsQ0FBQ2piLFNBQVMsQ0FBQ3pHLE1BQVYsQ0FBaUIyZ0IsT0FBakIsQ0FBMEJqYSxLQUFELElBQVdBLEtBQUssQ0FBQ2xLLEtBQTFDLENBQUQ7SUFGQyxDQUF6QjtJQUtBLE9BQU9pbEIsWUFBUDtFQUNELENBYk0sQ0FBUDtBQWNEO0FBRU0sU0FBU0MsZUFBVCxDQUF5QmxsQixLQUF6QixFQUFnRDtFQUNyRCxPQUFPQSxLQUFLLENBQUNtQixJQUFOLENBQVcsQ0FBQ21hLENBQUQsRUFBSUMsQ0FBSixLQUFVRCxDQUFDLENBQUN2ZixJQUFGLENBQU95ZixhQUFQLENBQXFCRCxDQUFDLENBQUN4ZixJQUF2QixDQUFyQixDQUFQO0FBQ0Q7O0FBRUQsU0FBUytvQixpQ0FBVCxDQUEyQzdhLFNBQTNDLEVBQTZFekcsTUFBN0UsRUFBZ0g7RUFDOUd5RyxTQUFTLENBQUN6RyxNQUFWLEdBQW1CQSxNQUFNLENBQUNyRSxHQUFQLENBQVkrSyxLQUFELElBQVc7SUFDdkMsTUFBTWliLGFBQWdDLEdBQUc7TUFDdkNwcEIsSUFBSSxFQUFFbU8sS0FBSyxDQUFDbk8sSUFEMkI7TUFFdkMySSxRQUFRLEVBQUV3RixLQUFLLENBQUN4RixRQUZ1QjtNQUd2QzBnQixjQUFjLEVBQUVsYixLQUFLLENBQUNrYixjQUhpQjtNQUl2Q3BsQixLQUFLLEVBQUU7SUFKZ0MsQ0FBekM7SUFNQW1sQixhQUFhLENBQUNubEIsS0FBZCxHQUFzQmtLLEtBQUssQ0FBQ2xLLEtBQU4sQ0FBWWIsR0FBWixDQUFpQjVELElBQUQsSUFBVThwQix1QkFBdUIsQ0FBQzlwQixJQUFELEVBQU8wTyxTQUFQLEVBQWtCa2IsYUFBbEIsQ0FBakQsQ0FBdEI7SUFDQSxPQUFPQSxhQUFQO0VBQ0QsQ0FUa0IsQ0FBbkI7QUFVRDs7QUFFRCxTQUFTSixnQ0FBVCxDQUEwQzlhLFNBQTFDLEVBQTRFekcsTUFBNUUsRUFBdUc7RUFDckdBLE1BQU0sQ0FBQ3FYLE9BQVAsQ0FBZ0IzUSxLQUFELElBQVc7SUFBQTs7SUFDeEIsSUFBSWliLGFBQWEsR0FBR2xiLFNBQVMsQ0FBQ3pHLE1BQVYsQ0FBaUJpZCxJQUFqQixDQUF1QjJELENBQUQsSUFBT0EsQ0FBQyxDQUFDcm9CLElBQUYsS0FBV21PLEtBQUssQ0FBQ25PLElBQTlDLENBQXBCOztJQUNBLElBQUksQ0FBQ29wQixhQUFMLEVBQW9CO01BQ2xCQSxhQUFhLEdBQUc7UUFDZHBwQixJQUFJLEVBQUVtTyxLQUFLLENBQUNuTyxJQURFO1FBRWRpRSxLQUFLLEVBQUU7TUFGTyxDQUFoQjtNQUlBaUssU0FBUyxDQUFDekcsTUFBVixDQUFpQmhELElBQWpCLENBQXNCMmtCLGFBQXRCO0lBQ0Q7O0lBRUQsaUJBQUNqYixLQUFLLENBQUNsSyxLQUFQLHVEQUFnQixFQUFoQixFQUFvQjZhLE9BQXBCLENBQTZCdGYsSUFBRCxJQUFVO01BQ3BDLE1BQU0rcEIsWUFBWSxHQUFHQyxzQkFBc0IsQ0FBQ2hxQixJQUFELEVBQU80cEIsYUFBUCxFQUF1QmxiLFNBQVMsQ0FBQ1osV0FBakMsQ0FBM0M7O01BQ0EsSUFBSWljLFlBQUosRUFBa0I7UUFDaEJBLFlBQVksQ0FBQ3hOLFFBQWIsR0FBd0J2YyxJQUF4QjtNQUNELENBRkQsTUFFTztRQUNMNHBCLGFBQWEsQ0FBRW5sQixLQUFmLENBQXFCUSxJQUFyQixDQUEwQmdsQixzQkFBc0IsQ0FBQ2pxQixJQUFELEVBQU8wTyxTQUFQLEVBQWtCa2IsYUFBbEIsQ0FBaEQ7TUFDRDtJQUNGLENBUEQ7RUFRRCxDQWxCRDtBQW1CRDs7QUFFRCxTQUFTSyxzQkFBVCxDQUFnQ2pxQixJQUFoQyxFQUE0QzBPLFNBQTVDLEVBQThFQyxLQUE5RSxFQUFzSDtFQUNwSCxPQUFPO0lBQ0xuTyxJQUFJLEVBQUVSLElBQUksQ0FBQ1EsSUFETjtJQUVMcU4sS0FBSyxFQUFFN04sSUFBSSxDQUFDNk4sS0FGUDtJQUdMd0ksTUFBTSxFQUFFclcsSUFBSSxDQUFDcVcsTUFBTCxJQUFlLEVBSGxCO0lBSUxKLFdBQVcsRUFBRThGLDREQUFjLENBQUMvYixJQUFELENBQWQsR0FBdUJBLElBQUksQ0FBQ2lXLFdBQUwsSUFBb0IsRUFBM0MsR0FBZ0QsRUFKeEQ7SUFLTHNHLFFBQVEsRUFBRXZjLElBTEw7SUFNTDBPLFNBQVMsRUFBRUEsU0FOTjtJQU9MQztFQVBLLENBQVA7QUFTRDs7QUFFRCxTQUFTbWIsdUJBQVQsQ0FDRTlwQixJQURGLEVBRUUwTyxTQUZGLEVBR0VDLEtBSEYsRUFJZ0I7RUFDZCxPQUFPcWEsaUVBQW1CLENBQUNocEIsSUFBRCxDQUFuQixHQUNIO0lBQ0VRLElBQUksRUFBRVIsSUFBSSxDQUFDMGQsS0FEYjtJQUVFN1AsS0FBSyxFQUFFN04sSUFBSSxDQUFDb04sSUFGZDtJQUdFaUosTUFBTSxFQUFFclcsSUFBSSxDQUFDcVcsTUFBTCxJQUFlLEVBSHpCO0lBSUVKLFdBQVcsRUFBRWpXLElBQUksQ0FBQ2lXLFdBQUwsSUFBb0IsRUFKbkM7SUFLRXlCLFNBQVMsRUFBRTFYLElBTGI7SUFNRTBPLFNBTkY7SUFPRUM7RUFQRixDQURHLEdBVUhzVCxrRUFBb0IsQ0FBQ2ppQixJQUFELENBQXBCLEdBQ0E7SUFDRVEsSUFBSSxFQUFFUixJQUFJLENBQUNrcUIsTUFEYjtJQUVFcmMsS0FBSyxFQUFFN04sSUFBSSxDQUFDb04sSUFGZDtJQUdFaUosTUFBTSxFQUFFclcsSUFBSSxDQUFDcVcsTUFBTCxJQUFlLEVBSHpCO0lBSUVKLFdBQVcsRUFBRSxFQUpmO0lBS0V5QixTQUFTLEVBQUUxWCxJQUxiO0lBTUUwTyxTQU5GO0lBT0VDO0VBUEYsQ0FEQSxHQVVBO0lBQ0VuTyxJQUFJLEVBQUVSLElBQUksQ0FBQzhYLGFBQUwsQ0FBbUJxUyxLQUQzQjtJQUVFdGMsS0FBSyxFQUFFLEVBRlQ7SUFHRXdJLE1BQU0sRUFBRXJXLElBQUksQ0FBQ3FXLE1BQUwsSUFBZSxFQUh6QjtJQUlFSixXQUFXLEVBQUVqVyxJQUFJLENBQUNpVyxXQUFMLElBQW9CLEVBSm5DO0lBS0V5QixTQUFTLEVBQUUxWCxJQUxiO0lBTUUwTyxTQU5GO0lBT0VDO0VBUEYsQ0FwQko7QUE2QkQsRUFFRDs7O0FBQ0EsU0FBU3FiLHNCQUFULENBQ0VocUIsSUFERixFQUVFMk8sS0FGRixFQUdFYixXQUhGLEVBSTRCO0VBQUE7O0VBQzFCLElBQUlxSix1RUFBb0IsQ0FBQ3JKLFdBQUQsQ0FBeEIsRUFBdUM7SUFDckM7SUFDQSxPQUFPYSxLQUFLLENBQUVsSyxLQUFQLENBQWF5Z0IsSUFBYixDQUFtQjZFLFlBQUQsSUFBa0JBLFlBQVksQ0FBQ3ZwQixJQUFiLEtBQXNCUixJQUFJLENBQUNRLElBQS9ELENBQVA7RUFDRDs7RUFDRCxPQUNFO0lBREYsZUFFRW1PLEtBQUssQ0FBRWxLLEtBQVAsQ0FBYXlnQixJQUFiLENBQ0c2RSxZQUFELElBQWtCLENBQUNBLFlBQVksQ0FBQ3hOLFFBQWQsSUFBMEI2Tiw2QkFBNkIsQ0FBQ0wsWUFBRCxFQUFlL3BCLElBQWYsRUFBcUIsSUFBckIsQ0FEM0UsQ0FGRixxREFLRTtJQUNBO0lBQ0EyTyxLQUFLLENBQUVsSyxLQUFQLENBQWF5Z0IsSUFBYixDQUNHNkUsWUFBRCxJQUFrQixDQUFDQSxZQUFZLENBQUN4TixRQUFkLElBQTBCNk4sNkJBQTZCLENBQUNMLFlBQUQsRUFBZS9wQixJQUFmLEVBQXFCLEtBQXJCLENBRDNFO0VBUEY7QUFXRDs7QUFFRCxTQUFTb3FCLDZCQUFULENBQXVDQyxZQUF2QyxFQUFtRXJxQixJQUFuRSxFQUErRXNxQixVQUFVLEdBQUcsSUFBNUYsRUFBMkc7RUFDekcsSUFBSUQsWUFBWSxDQUFDN3BCLElBQWIsS0FBc0JSLElBQUksQ0FBQ1EsSUFBL0IsRUFBcUM7SUFDbkMsT0FDRXVVLElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQ2JzVixVQUFVLEdBQUdDLFNBQVMsQ0FBQ0YsWUFBWSxDQUFDeGMsS0FBZCxDQUFaLEdBQW1DLEVBRGhDLEVBRWJ3YyxZQUFZLENBQUNoVSxNQUZBLEVBR2JnVSxZQUFZLENBQUNwVSxXQUhBLENBQWYsTUFLQWxCLElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQ2JzVixVQUFVLEdBQUdDLFNBQVMsQ0FBQ3ZxQixJQUFJLENBQUM2TixLQUFOLENBQVosR0FBMkIsRUFEeEIsRUFFYjdOLElBQUksQ0FBQ3FXLE1BQUwsSUFBZSxFQUZGLEVBR2IwRiw0REFBYyxDQUFDL2IsSUFBRCxDQUFkLEdBQXVCQSxJQUFJLENBQUNpVyxXQUFMLElBQW9CLEVBQTNDLEdBQWdELEVBSG5DLENBQWYsQ0FORjtFQVlEOztFQUNELE9BQU8sS0FBUDtBQUNELEVBRUQ7OztBQUNBLFNBQVNzVSxTQUFULENBQW1CMWMsS0FBbkIsRUFBa0M7RUFDaEM7RUFDQSxJQUFJQSxLQUFLLENBQUMvRCxNQUFOLEdBQWUsQ0FBZixJQUFvQitELEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYSxHQUFqQyxJQUF3Q0EsS0FBSyxDQUFDQSxLQUFLLENBQUMvRCxNQUFOLEdBQWUsQ0FBaEIsQ0FBTCxLQUE0QixHQUF4RSxFQUE2RTtJQUMzRStELEtBQUssR0FBR0EsS0FBSyxDQUFDMlAsS0FBTixDQUFZLENBQVosRUFBZSxDQUFDLENBQWhCLENBQVI7RUFDRCxDQUorQixDQUtoQzs7O0VBQ0EzUCxLQUFLLEdBQUdBLEtBQUssQ0FBQzJjLE9BQU4sQ0FBYyxRQUFkLEVBQXdCLEVBQXhCLENBQVIsQ0FOZ0MsQ0FPaEM7O0VBQ0EsT0FBTzNjLEtBQUssQ0FBQytMLEtBQU4sQ0FBWSxFQUFaLEVBQWdCaFUsSUFBaEIsR0FBdUI2a0IsSUFBdkIsQ0FBNEIsRUFBNUIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1BEO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNaGpCLGdCQUFnQixHQUFJK0ssVUFBRCxJQUF5QztFQUN2RSxNQUFNLENBQUNwUCxXQUFELElBQWdCNEQsNkVBQWMsRUFBcEM7RUFDQSxNQUFNeUIsT0FBTyxHQUFHVixvRUFBdUIsQ0FBQzNFLFdBQUQsQ0FBdkM7RUFFQSxPQUFPc0QsOENBQU8sQ0FBQyxNQUFNO0lBQ25CLE1BQU13RCxrQkFBa0IsR0FBR3NJLFVBQVUsQ0FDbkM7SUFDQTtJQUZtQyxDQUdsQ3BNLE1BSHdCLENBR2pCLENBQUM7TUFBRTBIO0lBQUYsQ0FBRCxLQUNOckYsT0FBTyxDQUFDMFcsVUFBUixJQUFzQm5TLHFFQUFrQixDQUFDYyxXQUFELENBQXhDLEdBQXdEQSxXQUFXLENBQUN0TixJQUFaLEtBQXFCaUksT0FBTyxDQUFDMFcsVUFBckYsR0FBa0csSUFKM0UsRUFNekI7SUFOeUIsQ0FPeEJoRSxNQVB3QixDQU9qQnVQLGdCQUFnQixDQUFDamlCLE9BQUQsQ0FQQyxFQU9VLEVBUFYsQ0FBM0I7SUFRQSxPQUFPeUIsa0JBQVA7RUFDRCxDQVZhLEVBVVgsQ0FBQ3NJLFVBQUQsRUFBYS9KLE9BQWIsQ0FWVyxDQUFkO0FBV0QsQ0FmTTs7QUFpQlAsTUFBTWlpQixnQkFBZ0IsR0FBSWppQixPQUFELElBQTBCO0VBQ2pELE9BQU8sQ0FBQ2tpQixZQUFELEVBQXdDamMsU0FBeEMsS0FBNkU7SUFDbEYsTUFBTXpHLE1BQU0sR0FBR3lHLFNBQVMsQ0FBQ3pHLE1BQVYsQ0FBaUJrVCxNQUFqQixDQUF3QnlQLFlBQVksQ0FBQ25pQixPQUFELENBQXBDLEVBQStDLEVBQS9DLENBQWY7O0lBRUEsSUFBSVIsTUFBTSxDQUFDNkIsTUFBWCxFQUFtQjtNQUNqQjZnQixZQUFZLENBQUMxbEIsSUFBYixtQkFDS3lKLFNBREw7UUFFRXpHO01BRkY7SUFJRDs7SUFFRCxPQUFPMGlCLFlBQVA7RUFDRCxDQVhEO0FBWUQsQ0FiRCxFQWVBOzs7QUFDQSxNQUFNQyxZQUFZLEdBQUluaUIsT0FBRCxJQUEwQjtFQUM3QyxPQUFPLENBQUNvaUIsUUFBRCxFQUFnQ2xjLEtBQWhDLEtBQTZEO0lBQ2xFLE1BQU1sSyxLQUFLLEdBQUdrSyxLQUFLLENBQUNsSyxLQUFOLENBQVkyQixNQUFaLENBQW9CcEcsSUFBRCxJQUFVO01BQUE7O01BQ3pDLElBQUl5SSxPQUFPLENBQUM2YSxRQUFSLElBQW9CN2EsT0FBTyxDQUFDNmEsUUFBUix3QkFBcUJ0akIsSUFBSSxDQUFDdWMsUUFBMUIsbURBQXFCLGVBQWUvTyxJQUFwQyxDQUF4QixFQUFrRTtRQUNoRSxPQUFPLEtBQVA7TUFDRDs7TUFDRCxJQUFJL0UsT0FBTyxDQUFDMFcsVUFBUixJQUFzQjFILGdFQUFrQixDQUFDelgsSUFBSSxDQUFDMFgsU0FBTixDQUF4QyxJQUE0RCxDQUFDb1Qsb0JBQW9CLENBQUM5cUIsSUFBSSxDQUFDMFgsU0FBTixFQUFpQmpQLE9BQWpCLENBQXJGLEVBQWdIO1FBQzlHLE9BQU8sS0FBUDtNQUNELENBTndDLENBT3pDOzs7TUFDQSxJQUFJQSxPQUFPLENBQUNxSCxXQUFaLEVBQXlCO1FBQUE7O1FBQ3ZCLE1BQU1pYixxQkFBcUIsR0FBR3RpQixPQUFPLENBQUNxSCxXQUFSLENBQW9Ca2IsaUJBQXBCLEVBQTlCO1FBQ0EsTUFBTUMsMkJBQTJCLGlCQUFHanJCLElBQUksQ0FBQ1EsSUFBUiwrQ0FBRyxXQUFXd3FCLGlCQUFYLEdBQStCdkUsUUFBL0IsQ0FBd0NzRSxxQkFBeEMsQ0FBcEM7UUFDQSxNQUFNN00sUUFBUSxHQUFHdkMsa0VBQWEsQ0FBQ2xULE9BQU8sQ0FBQ3FILFdBQVQsQ0FBOUI7UUFFQSxNQUFNb2Isc0JBQXNCLEdBQUd4UCx3RUFBbUIsQ0FBQzFiLElBQUksQ0FBQ3FXLE1BQU4sRUFBYzZILFFBQWQsQ0FBbEQ7UUFDQSxNQUFNaU4sNkJBQTZCLEdBQ2pDbnJCLElBQUksQ0FBQ3VjLFFBQUwsSUFDQXZjLElBQUksQ0FBQ3VjLFFBQUwsQ0FBYy9PLElBQWQsS0FBdUJzVixpRkFEdkIsSUFFQTlpQixJQUFJLENBQUN1YyxRQUFMLENBQWNhLE1BRmQsSUFHQXBkLElBQUksQ0FBQ3VjLFFBQUwsQ0FBY2EsTUFBZCxDQUFxQnZVLElBQXJCLENBQTJCNlUsS0FBRCxJQUFXaEMsd0VBQW1CLENBQUNnQyxLQUFLLENBQUNySCxNQUFQLEVBQWU2SCxRQUFmLENBQXhELENBSkY7O1FBTUEsSUFBSSxFQUFFK00sMkJBQTJCLElBQUlDLHNCQUEvQixJQUF5REMsNkJBQTNELENBQUosRUFBK0Y7VUFDN0YsT0FBTyxLQUFQO1FBQ0Q7TUFDRjs7TUFDRCxJQUNFMWlCLE9BQU8sQ0FBQ21VLFVBQVIsSUFDQSxFQUFFNWMsSUFBSSxDQUFDdWMsUUFBTCxJQUFpQlIsNERBQWMsQ0FBQy9iLElBQUksQ0FBQ3VjLFFBQU4sQ0FBL0IsSUFBa0R2YyxJQUFJLENBQUN1YyxRQUFMLENBQWN6YixLQUFkLEtBQXdCMkgsT0FBTyxDQUFDbVUsVUFBcEYsQ0FGRixFQUdFO1FBQ0EsT0FBTyxLQUFQO01BQ0Q7O01BQ0QsT0FBTyxJQUFQO0lBQ0QsQ0EvQmEsQ0FBZCxDQURrRSxDQWlDbEU7O0lBQ0EsSUFBSW5ZLEtBQUssQ0FBQ3FGLE1BQVYsRUFBa0I7TUFDaEIrZ0IsUUFBUSxDQUFDNWxCLElBQVQsbUJBQ0swSixLQURMO1FBRUVsSztNQUZGO0lBSUQ7O0lBQ0QsT0FBT29tQixRQUFQO0VBQ0QsQ0F6Q0Q7QUEwQ0QsQ0EzQ0Q7O0FBNkNBLE1BQU1DLG9CQUFvQixHQUFHLENBQUNwVCxTQUFELEVBQWlDdFIsTUFBakMsS0FBa0U7RUFDN0YsSUFBSSxDQUFDQSxNQUFNLENBQUMrWSxVQUFaLEVBQXdCO0lBQ3RCLE9BQU8sSUFBUDtFQUNEOztFQUVELE9BQU8sQ0FBQyxDQUFDekgsU0FBUyxDQUFDSSxhQUFWLENBQXdCOVMsSUFBeEIsQ0FBNkJrZ0IsSUFBN0IsQ0FBbUNyWCxLQUFELElBQVc7SUFDcEQsSUFBSSxDQUFDQSxLQUFLLENBQUN3TixhQUFYLEVBQTBCO01BQ3hCLE9BQU8sS0FBUDtJQUNEOztJQUNELE1BQU16SSxFQUFFLEdBQUdnSSxrRUFBZ0IsR0FBR1EsbUJBQW5CLENBQXVDdk4sS0FBSyxDQUFDd04sYUFBN0MsQ0FBWDtJQUNBLE9BQU8sQ0FBQXpJLEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsWUFBQUEsRUFBRSxDQUFFcFMsSUFBSixNQUFhNEYsTUFBTSxDQUFDK1ksVUFBM0I7RUFDRCxDQU5RLENBQVQ7QUFPRCxDQVpEOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFPTyxTQUFTZ0YsU0FBVCxDQUFtQjdJLEdBQW5CLEVBQTRDO0VBQ2pELE1BQU1yYyxRQUFRLEdBQUdKLHdEQUFXLEVBQTVCO0VBQ0EsTUFBTXdzQixjQUFjLEdBQUczakIsdUZBQTBCLENBQUU1RyxLQUFELElBQVdBLEtBQUssQ0FBQ3dxQixPQUFsQixDQUFqRDtFQUNBM3NCLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQUkyYyxHQUFKLEVBQVM7TUFDUHJjLFFBQVEsQ0FBQ21zQiw2RUFBNkIsQ0FBQzlQLEdBQUQsQ0FBOUIsQ0FBUjtJQUNEO0VBQ0YsQ0FKUSxFQUlOLENBQUNyYyxRQUFELEVBQVdxYyxHQUFYLENBSk0sQ0FBVDs7RUFNQSxJQUFJQSxHQUFKLEVBQVM7SUFDUCxNQUFNaVEsT0FBTyxHQUFHRixjQUFjLENBQUMvUCxHQUFELENBQWQsSUFBdUI3SCxrRUFBdkM7SUFDQSxPQUFPO01BQ0x3UixNQUFNLEVBQUVzRyxPQUFPLENBQUMxaEIsTUFEWDtNQUVMRixPQUFPLEVBQUU0aEIsT0FBTyxDQUFDNWhCO0lBRlosQ0FBUDtFQUlEOztFQUNELE9BQU87SUFDTEEsT0FBTyxFQUFFO0VBREosQ0FBUDtBQUdEOzs7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUlBO0NBSUE7O0FBQ08sU0FBU3lhLFdBQVQsR0FBdUU7RUFDNUUsTUFBTTNhLFVBQVUsR0FBRy9CLHVGQUEwQixDQUFFNUcsS0FBRCxJQUFXQSxLQUFLLENBQUMySSxVQUFsQixDQUE3QztFQUNBLE9BQU9oSyxrREFBVyxDQUNmcU8sV0FBRCxJQUF1QztJQUFBOztJQUNyQyxNQUFNc0csZUFBZSxHQUFHLE9BQU90RyxXQUFQLEtBQXVCLFFBQXZCLEdBQWtDQSxXQUFsQyxHQUFnREEsV0FBVyxDQUFDdE4sSUFBcEY7SUFDQSxPQUFPNFQsZUFBZSxLQUFLYyx3RUFBcEIsSUFBaUQsQ0FBQywyQkFBQ3pMLFVBQVUsQ0FBQzJLLGVBQUQsQ0FBWCxrREFBQyxzQkFBNkJ2SyxNQUE5QixDQUF6RDtFQUNELENBSmUsRUFLaEIsQ0FBQ0osVUFBRCxDQUxnQixDQUFsQjtBQU9EOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFRTyxTQUFTcU4saUJBQVQsQ0FBMkIxQyxlQUEzQixFQUFvRHBVLElBQXBELEVBQW9GO0VBQUE7O0VBQ3pGLE1BQU04YSxXQUFXLEdBQUdwVCx1RkFBMEIsQ0FBRTVHLEtBQUQsSUFBV0EsS0FBSyxDQUFDZ2EsV0FBbEIsQ0FBOUM7RUFDQSxNQUFNaUssU0FBUyxHQUFHL2tCLElBQUksSUFBSXlYLGdFQUFrQixDQUFDelgsSUFBRCxDQUExQixHQUFtQ0EsSUFBSSxDQUFDOFgsYUFBTCxDQUFtQmtOLGFBQXRELEdBQXNFbGMsU0FBeEY7RUFFQSxNQUFNMmlCLGNBQWMsR0FBR0QsMEVBQW1CLENBQUNwWCxlQUFELENBQTFDO0VBRUEsTUFBTTtJQUFFNlEsTUFBRjtJQUFVdGI7RUFBVixJQUFzQndhLHFEQUFTLENBQUNZLFNBQUQsQ0FBckM7O0VBRUEsSUFBSSxDQUFDL2tCLElBQUwsRUFBVztJQUNULE9BQU87TUFBRTZZLFVBQVUsRUFBRSxLQUFkO01BQXFCQyxXQUFXLEVBQUUsS0FBbEM7TUFBeUNuUCxPQUFPLEVBQUU7SUFBbEQsQ0FBUDtFQUNELENBVndGLENBWXpGO0VBQ0E7RUFDQTs7O0VBQ0EsSUFBSThOLGdFQUFrQixDQUFDelgsSUFBRCxDQUF0QixFQUE4QjtJQUFBOztJQUM1QixJQUFJLENBQUMra0IsU0FBTCxFQUFnQjtNQUNkLE1BQU0sSUFBSXNFLEtBQUosQ0FDSCxRQUFPcnBCLElBQUksQ0FBQzhYLGFBQUwsQ0FBbUJxUyxLQUFNLGtFQUQ3QixDQUFOO0lBR0Q7O0lBRUQsTUFBTXVCLG1CQUFtQixHQUFHdmdCLCtFQUFBLENBQXFCc2dCLGNBQWMsQ0FBQ0UsTUFBcEMscUJBQTRDMUcsTUFBNUMsYUFBNENBLE1BQTVDLHVCQUE0Q0EsTUFBTSxDQUFFSyxPQUFwRCw2REFBK0QsS0FBL0QsQ0FBNUI7SUFDQSxNQUFNc0cscUJBQXFCLEdBQUd6Z0IsK0VBQUEsQ0FBcUJzZ0IsY0FBYyxDQUFDSSxNQUFwQyxzQkFBNEM1RyxNQUE1QyxhQUE0Q0EsTUFBNUMsdUJBQTRDQSxNQUFNLENBQUVLLE9BQXBELCtEQUErRCxLQUEvRCxDQUE5QjtJQUVBLE9BQU87TUFDTHpNLFVBQVUsRUFBRTZTLG1CQURQO01BRUw1UyxXQUFXLEVBQUU4UyxxQkFGUjtNQUdMamlCO0lBSEssQ0FBUDtFQUtELENBOUJ3RixDQWdDekY7OztFQUNBLE1BQU1taUIsZ0JBQWdCLEdBQUd0VCxPQUFPLDBCQUFDc0MsV0FBVyxDQUFDMUcsZUFBRCxDQUFaLG9GQUFDLHNCQUE4QnZLLE1BQS9CLDJEQUFDLHVCQUFzQ2tpQixXQUF2QyxDQUFoQztFQUNBLE1BQU1DLGlCQUFpQixHQUFHN2dCLCtFQUFBLENBQXFCc2dCLGNBQWMsQ0FBQ0UsTUFBcEMsRUFBNEN4Z0IsOEVBQTVDLENBQTFCO0VBQ0EsTUFBTThnQixtQkFBbUIsR0FBRzlnQiwrRUFBQSxDQUFxQnNnQixjQUFjLENBQUNJLE1BQXBDLEVBQTRDMWdCLDhFQUE1QyxDQUE1QjtFQUVBLE9BQU87SUFDTDBOLFVBQVUsRUFBRW1ULGlCQUFpQixJQUFJRixnQkFENUI7SUFFTGhULFdBQVcsRUFBRW1ULG1CQUFtQixJQUFJSCxnQkFGL0I7SUFHTG5pQixPQUFPLDRCQUFFbVIsV0FBVyxDQUFDMUcsZUFBRCxDQUFiLDJEQUFFLHVCQUE4QnpLO0VBSGxDLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7Ozs7O0FDekREO0FBQ0E7QUFJQTtBQUdBO0FBRU8sU0FBUzJkLDJCQUFULENBQXFDelAsT0FBckMsRUFBc0Q7RUFDM0QsTUFBTTVZLFFBQVEsR0FBR0osd0RBQVcsRUFBNUI7RUFDQSxNQUFNc3RCLE9BQU8sR0FBR3prQix1RkFBMEIsQ0FDdkM1RyxLQUFELElBQVdBLEtBQUssQ0FBQ3NyQix3QkFEdUIsQ0FBMUM7RUFJQXp0QixnREFBUyxDQUFDLE1BQU07SUFDZE0sUUFBUSxDQUFDaXRCLDZFQUE2QixDQUFDclUsT0FBRCxDQUE5QixDQUFSO0VBQ0QsQ0FGUSxFQUVOLENBQUM1WSxRQUFELEVBQVc0WSxPQUFYLENBRk0sQ0FBVDtFQUlBLE9BQU9zVSxPQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUVBO0FBRUE7OztBQUVBLFNBQVNwVixvQkFBVCxDQUE4QmMsT0FBOUIsRUFBK0M7RUFBQTs7RUFDN0MsTUFBTSxDQUFDd1UsU0FBRCxFQUFZQyxZQUFaLElBQTRCM2xCLCtDQUFRLENBQVUsS0FBVixDQUExQztFQUVBLE1BQU1vUixpQkFBaUIsR0FBR3JSLDhDQUFPLENBQy9CLG1CQUNFLHVEQUFDLDhDQUFEO0lBQ0UsTUFBTSxFQUFFMmxCLFNBRFY7SUFFRSxTQUFTLEVBQUUsTUFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FGL0I7SUFHRSxvQkFBb0IsRUFBRSxJQUh4QjtJQUlFLGFBQWEsRUFBRSxJQUpqQjtJQUtFLEtBQUssRUFBQyxlQUxSO0lBQUEseURBT0UsdURBQUMsd0VBQUQ7TUFBYyxPQUFPLEVBQUV6VTtJQUF2QixFQVBGO0VBQUEsRUFGNkIsRUFZL0IsQ0FBQ0EsT0FBRCxFQUFVd1UsU0FBVixDQVorQixDQUFqQztFQWVBLE9BQU87SUFDTHRVLGlCQURLO0lBRUxDLHFCQUFxQixFQUFFLE1BQU1zVSxZQUFZLENBQUMsSUFBRCxDQUZwQztJQUdMQyxxQkFBcUIsRUFBRSxNQUFNRCxZQUFZLENBQUMsS0FBRDtFQUhwQyxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7Ozs7OztBQzdCRDtBQUVBO0FBRU8sU0FBUzFrQixjQUFULEdBQTBCO0VBQy9CLE9BQU9sQiw4Q0FBTyxDQUFDLE1BQU04bEIsK0RBQWMsRUFBckIsRUFBeUIsRUFBekIsQ0FBZDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZELE1BQU1DLHFCQUF1QyxHQUFHLENBQzlDO0VBQ0VscUIsS0FBSyxFQUFFLEtBRFQ7RUFFRW1xQixVQUFVLEVBQUUsS0FGZDtFQUdFQyxhQUFhLEVBQUU7QUFIakIsQ0FEOEMsRUFNOUM7RUFDRXBxQixLQUFLLEVBQUUsS0FEVDtFQUVFbXFCLFVBQVUsRUFBRSxLQUZkO0VBR0VDLGFBQWEsRUFBRTtBQUhqQixDQU44QyxFQVc5QztFQUNFcHFCLEtBQUssRUFBRSxLQURUO0VBRUVtcUIsVUFBVSxFQUFFLEtBRmQ7RUFHRUMsYUFBYSxFQUFFO0FBSGpCLENBWDhDLEVBZ0I5QztFQUNFcHFCLEtBQUssRUFBRSxLQURUO0VBRUVtcUIsVUFBVSxFQUFFLEtBRmQ7RUFHRUMsYUFBYSxFQUFFO0FBSGpCLENBaEI4QyxFQXFCOUM7RUFDRXBxQixLQUFLLEVBQUUsUUFEVDtFQUVFbXFCLFVBQVUsRUFBRSxRQUZkO0VBR0VDLGFBQWEsRUFBRTtBQUhqQixDQXJCOEMsRUEwQjlDO0VBQ0VwcUIsS0FBSyxFQUFFLFFBRFQ7RUFFRW1xQixVQUFVLEVBQUUsUUFGZDtFQUdFQyxhQUFhLEVBQUU7QUFIakIsQ0ExQjhDLEVBK0I5QztFQUNFcHFCLEtBQUssRUFBRSxPQURUO0VBRUVtcUIsVUFBVSxFQUFFLE9BRmQ7RUFHRUMsYUFBYSxFQUFFO0FBSGpCLENBL0I4QyxFQW9DOUM7RUFDRXBxQixLQUFLLEVBQUUsU0FEVDtFQUVFbXFCLFVBQVUsRUFBRSxTQUZkO0VBR0VDLGFBQWEsRUFBRTtBQUhqQixDQXBDOEMsRUF5QzlDO0VBQ0VwcUIsS0FBSyxFQUFFLE1BRFQ7RUFFRW1xQixVQUFVLEVBQUUsTUFGZDtFQUdFQyxhQUFhLEVBQUU7QUFIakIsQ0F6QzhDLENBQWhEO0FBZ0RPLE1BQU1DLFlBQThCLEdBQUcsQ0FDNUM7RUFDRXJxQixLQUFLLEVBQUUsTUFEVDtFQUVFbXFCLFVBQVUsRUFBRSxNQUZkO0VBR0VDLGFBQWEsRUFBRTtBQUhqQixDQUQ0QyxFQU01QztFQUNFcHFCLEtBQUssRUFBRSxRQURUO0VBRUVtcUIsVUFBVSxFQUFFLFdBRmQ7RUFHRUMsYUFBYSxFQUFFLHVGQUhqQjtFQUlFRSxJQUFJLEVBQUUsQ0FBQztBQUpULENBTjRDLEVBWTVDO0VBQ0V0cUIsS0FBSyxFQUFFLFFBRFQ7RUFFRW1xQixVQUFVLEVBQUUsUUFGZDtFQUdFQyxhQUFhLEVBQUU7QUFIakIsQ0FaNEMsRUFpQjVDO0VBQ0VwcUIsS0FBSyxFQUFFLFNBRFQ7RUFFRW1xQixVQUFVLEVBQUUsU0FGZDtFQUdFQyxhQUFhLEVBQUU7QUFIakIsQ0FqQjRDLEVBc0I1QztFQUNFcHFCLEtBQUssRUFBRSxRQURUO0VBRUVtcUIsVUFBVSxFQUFFLFFBRmQ7RUFHRUksTUFBTSxFQUFFLG1CQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBdEI0QyxDQUF2QztBQStCQSxNQUFNSSxjQUFnQyxHQUFHLENBQzlDO0VBQ0V4cUIsS0FBSyxFQUFFLFFBRFQ7RUFFRW1xQixVQUFVLEVBQUUsUUFGZDtFQUdFSSxNQUFNLEVBQUUsbUJBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0FEOEMsRUFROUM7RUFDRXBxQixLQUFLLEVBQUUsY0FEVDtFQUVFbXFCLFVBQVUsRUFBRSxjQUZkO0VBR0VDLGFBQWEsRUFDWDtBQUpKLENBUjhDLEVBYzlDO0VBQ0VwcUIsS0FBSyxFQUFFLGFBRFQ7RUFFRW1xQixVQUFVLEVBQUUsYUFGZDtFQUdFQyxhQUFhLEVBQ1g7QUFKSixDQWQ4QyxDQUF6QztBQXNCQSxNQUFNSyxtQkFBbUIsR0FBRyxDQUNqQztFQUNFTixVQUFVLEVBQUUsZUFEZDtFQUVFbnFCLEtBQUssRUFBRSxlQUZUO0VBR0V1cUIsTUFBTSxFQUFFLDZCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQURpQyxFQU9qQztFQUNFRCxVQUFVLEVBQUUsZUFEZDtFQUVFbnFCLEtBQUssRUFBRSxlQUZUO0VBR0V1cUIsTUFBTSxFQUFFLDZCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQVBpQyxFQWFqQztFQUNFRCxVQUFVLEVBQUUsZUFEZDtFQUVFbnFCLEtBQUssRUFBRSxlQUZUO0VBR0V1cUIsTUFBTSxFQUFFLDZCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQWJpQyxFQW1CakM7RUFDRUQsVUFBVSxFQUFFLGlCQURkO0VBRUVucUIsS0FBSyxFQUFFLGlCQUZUO0VBR0V1cUIsTUFBTSxFQUFFLCtCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQW5CaUMsRUF5QmpDO0VBQ0VELFVBQVUsRUFBRSxnQkFEZDtFQUVFbnFCLEtBQUssRUFBRSxnQkFGVDtFQUdFdXFCLE1BQU0sRUFBRSw4QkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0F6QmlDLEVBK0JqQztFQUNFRCxVQUFVLEVBQUUsZUFEZDtFQUVFbnFCLEtBQUssRUFBRSxlQUZUO0VBR0V1cUIsTUFBTSxFQUFFLDZCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQS9CaUMsRUFxQ2pDO0VBQ0VELFVBQVUsRUFBRSxpQkFEZDtFQUVFbnFCLEtBQUssRUFBRSxpQkFGVDtFQUdFdXFCLE1BQU0sRUFBRSwrQkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0FyQ2lDLEVBMkNqQztFQUNFRCxVQUFVLEVBQUUsa0JBRGQ7RUFFRW5xQixLQUFLLEVBQUUsa0JBRlQ7RUFHRXVxQixNQUFNLEVBQUUsZ0NBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0EzQ2lDLEVBa0RqQztFQUNFRCxVQUFVLEVBQUUsa0JBRGQ7RUFFRW5xQixLQUFLLEVBQUUsa0JBRlQ7RUFHRXVxQixNQUFNLEVBQUUsZ0NBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0FsRGlDLEVBeURqQztFQUNFRCxVQUFVLEVBQUUsb0JBRGQ7RUFFRW5xQixLQUFLLEVBQUUsb0JBRlQ7RUFHRXVxQixNQUFNLEVBQUUsMENBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBekRpQyxFQStEakM7RUFDRUQsVUFBVSxFQUFFLGlCQURkO0VBRUVucUIsS0FBSyxFQUFFLGlCQUZUO0VBR0V1cUIsTUFBTSxFQUFFLCtCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQS9EaUMsRUFxRWpDO0VBQ0VELFVBQVUsRUFBRSxZQURkO0VBRUVucUIsS0FBSyxFQUFFLFlBRlQ7RUFHRXVxQixNQUFNLEVBQUUsMEJBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBckVpQyxFQTJFakM7RUFDRUQsVUFBVSxFQUFFLE1BRGQ7RUFFRW5xQixLQUFLLEVBQUUsTUFGVDtFQUdFdXFCLE1BQU0sRUFBRSxzQkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0EzRWlDLENBQTVCO0FBbUZBLE1BQU1NLFNBQVMsR0FBRyxDQUFDLEdBQUdSLHFCQUFKLEVBQTJCLEdBQUdPLG1CQUE5QixDQUFsQjtBQUNBLE1BQU1FLGFBQWEsR0FBRyxDQUFDLEdBQUdELFNBQUosRUFBZSxHQUFHRixjQUFsQixFQUFrQyxHQUFHSCxZQUFyQyxFQUFtRGhwQixHQUFuRCxDQUF3RHVwQixPQUFELElBQWFBLE9BQU8sQ0FBQzVxQixLQUE1RSxDQUF0QjtBQUVBLE1BQU02cUIsV0FBb0IsR0FBRztFQUNsQ0MsT0FBTyxFQUFFO0lBQ1B2WSxPQUFPLEVBQUU7RUFERixDQUR5QjtFQUlsQyx1QkFBdUI7SUFDckJBLE9BQU8sRUFBRSw0QkFEWTtJQUNrQjtJQUN2Q3dZLFVBQVUsRUFBRSxJQUZTO0lBR3JCQyxNQUFNLEVBQUU7TUFDTixhQUFhO1FBQ1h6WSxPQUFPLEVBQUUsd0JBREU7UUFFWDBZLEtBQUssRUFBRTtNQUZJLENBRFA7TUFLTkMsV0FBVyxFQUFFO0lBTFA7RUFIYSxDQUpXO0VBZWxDLGtCQUFrQjtJQUNoQjNZLE9BQU8sRUFBRSxlQURPO0lBRWhCNFksTUFBTSxFQUFFLElBRlE7SUFHaEJILE1BQU0sRUFBRTtNQUNORixPQUFPLEVBQUU7UUFDUHZZLE9BQU8sRUFBRTtNQURGLENBREg7TUFJTixhQUFhO1FBQ1hBLE9BQU8sRUFBRSxpQ0FERTtRQUVYMFksS0FBSyxFQUFFLFdBRkk7UUFHWEUsTUFBTSxFQUFFO01BSEcsQ0FKUDtNQVNOLGVBQWU7UUFDYjVZLE9BQU8sRUFBRSxtQkFESTtRQUViNFksTUFBTSxFQUFFLElBRks7UUFHYkYsS0FBSyxFQUFFO01BSE0sQ0FUVDtNQWNOQyxXQUFXLEVBQUU7SUFkUDtFQUhRLENBZmdCO0VBbUNsQyxnQkFBZ0I7SUFDZDNZLE9BQU8sRUFBRSxrQkFESztJQUVkeVksTUFBTSxFQUFFO01BQ04saUJBQWlCO1FBQ2Z6WSxPQUFPLEVBQUUsS0FETTtRQUVmMFksS0FBSyxFQUFFO01BRlEsQ0FEWDtNQUtOLG1CQUFtQjtRQUNqQjFZLE9BQU8sRUFBRSxJQUFJNU8sTUFBSixDQUFZLEdBQUUsQ0FBQyxHQUFHMG1CLFlBQUosRUFBa0IsR0FBR0csY0FBckIsRUFBcUNucEIsR0FBckMsQ0FBMEMrcEIsQ0FBRCxJQUFPQSxDQUFDLENBQUNwckIsS0FBbEQsRUFBeURrb0IsSUFBekQsQ0FBOEQsR0FBOUQsQ0FBbUUsRUFBakYsRUFBb0YsR0FBcEYsQ0FEUTtRQUVqQitDLEtBQUssRUFBRTtNQUZVO0lBTGI7RUFGTSxDQW5Da0I7RUFnRGxDSSxRQUFRLEVBQUUsSUFBSTFuQixNQUFKLENBQVksU0FBUSttQixTQUFTLENBQUNycEIsR0FBVixDQUFlK3BCLENBQUQsSUFBT0EsQ0FBQyxDQUFDcHJCLEtBQXZCLEVBQThCa29CLElBQTlCLENBQW1DLEdBQW5DLENBQXdDLGNBQTVELEVBQTJFLEdBQTNFLENBaER3QjtFQWlEbEMsaUJBQWlCLENBQ2Y7SUFDRTNWLE9BQU8sRUFBRSxnQkFEWDtJQUM2QjtJQUMzQnlZLE1BQU0sRUFBRTtNQUNOLGtCQUFrQjtRQUNoQnpZLE9BQU8sRUFBRSxrQkFETztRQUVoQjBZLEtBQUssRUFBRTtNQUZTO0lBRFo7RUFGVixDQURlLEVBVWY7SUFDRTFZLE9BQU8sRUFBRSxnQkFEWDtJQUM2QjtJQUMzQndZLFVBQVUsRUFBRSxJQUZkO0lBR0VDLE1BQU0sRUFBRTtNQUNOLGtCQUFrQjtRQUNoQnpZLE9BQU8sRUFBRSxrQkFETztRQUVoQjBZLEtBQUssRUFBRTtNQUZTO0lBRFo7RUFIVixDQVZlLENBakRpQjtFQXNFbENLLEtBQUssRUFBRTtJQUNML1ksT0FBTyxFQUFFLG1CQURKO0lBRUwwWSxLQUFLLEVBQUUsUUFGRjtJQUdMRSxNQUFNLEVBQUU7RUFISCxDQXRFMkI7RUEyRWxDSSxTQUFTLEVBQUU7SUFDVGhaLE9BQU8sRUFBRSxtQkFEQTtJQUVUMFksS0FBSyxFQUFFLFFBRkU7SUFHVEUsTUFBTSxFQUFFO0VBSEMsQ0EzRXVCO0VBZ0ZsQ0ssTUFBTSxFQUFFLHFDQWhGMEI7RUFpRmxDQyxRQUFRLEVBQUUsMkNBakZ3QjtFQWtGbENQLFdBQVcsRUFBRTtBQWxGcUIsQ0FBN0I7QUFxRlAsaUVBQWVMLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFJBO0FBQ0E7QUFDTyxNQUFNYSxXQUE2QixHQUFHLENBQzNDO0VBQUUxckIsS0FBSyxFQUFFLGFBQVQ7RUFBd0IyckIsU0FBUyxFQUFFO0FBQW5DLENBRDJDLEVBRTNDO0VBQUUzckIsS0FBSyxFQUFFLGtCQUFUO0VBQTZCMnJCLFNBQVMsRUFBRTtBQUF4QyxDQUYyQyxFQUczQztFQUFFM3JCLEtBQUssRUFBRSxVQUFUO0VBQXFCMnJCLFNBQVMsRUFBRTtBQUFoQyxDQUgyQyxFQUkzQztFQUFFM3JCLEtBQUssRUFBRSxJQUFUO0VBQWUyckIsU0FBUyxFQUFFO0FBQTFCLENBSjJDLEVBSzNDO0VBQUUzckIsS0FBSyxFQUFFLElBQVQ7RUFBZTJyQixTQUFTLEVBQUU7QUFBMUIsQ0FMMkMsRUFNM0M7RUFBRTNyQixLQUFLLEVBQUUsS0FBVDtFQUFnQjJyQixTQUFTLEVBQUU7QUFBM0IsQ0FOMkMsRUFPM0M7RUFBRTNyQixLQUFLLEVBQUUsS0FBVDtFQUFnQjJyQixTQUFTLEVBQUU7QUFBM0IsQ0FQMkMsRUFRM0M7RUFBRTNyQixLQUFLLEVBQUUsSUFBVDtFQUFlMnJCLFNBQVMsRUFBRTtBQUExQixDQVIyQyxFQVMzQztFQUFFM3JCLEtBQUssRUFBRSxJQUFUO0VBQWUyckIsU0FBUyxFQUFFO0FBQTFCLENBVDJDLENBQXRDO0FBWUEsTUFBTUMsU0FBUyxHQUFHLENBQUMsSUFBRCxFQUFPLFlBQVAsRUFBcUIsYUFBckIsRUFBb0MsVUFBcEMsRUFBZ0QsSUFBaEQsRUFBc0QsUUFBdEQsRUFBZ0UsU0FBaEUsQ0FBbEI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsUUFBZCxDQUExQjtBQUVQLE1BQU1DLHVCQUF5QyxHQUFHLENBQ2hEO0VBQ0U5ckIsS0FBSyxFQUFFLE1BRFQ7RUFFRW1xQixVQUFVLEVBQUUsTUFGZDtFQUdFSSxNQUFNLEVBQUUsd0JBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBRGdELEVBT2hEO0VBQ0VwcUIsS0FBSyxFQUFFLE9BRFQ7RUFFRW1xQixVQUFVLEVBQUUsT0FGZDtFQUdFSSxNQUFNLEVBQUUseUJBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBUGdELEVBYWhEO0VBQ0VwcUIsS0FBSyxFQUFFLE1BRFQ7RUFFRW1xQixVQUFVLEVBQUUsTUFGZDtFQUdFSSxNQUFNLEVBQUUsd0JBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBYmdELEVBbUJoRDtFQUNFcHFCLEtBQUssRUFBRSxPQURUO0VBRUVtcUIsVUFBVSxFQUFFLE9BRmQ7RUFHRUksTUFBTSxFQUFFLHlCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQW5CZ0QsRUF5QmhEO0VBQ0VwcUIsS0FBSyxFQUFFLE1BRFQ7RUFFRW1xQixVQUFVLEVBQUUsTUFGZDtFQUdFSSxNQUFNLEVBQUUsd0JBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBekJnRCxFQStCaEQ7RUFDRXBxQixLQUFLLEVBQUUsT0FEVDtFQUVFbXFCLFVBQVUsRUFBRSxPQUZkO0VBR0VJLE1BQU0sRUFBRSx5QkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0EvQmdELEVBcUNoRDtFQUNFcHFCLEtBQUssRUFBRSxLQURUO0VBRUVtcUIsVUFBVSxFQUFFLEtBRmQ7RUFHRUksTUFBTSxFQUFFLHVCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQXJDZ0QsRUEyQ2hEO0VBQ0VwcUIsS0FBSyxFQUFFLE1BRFQ7RUFFRW1xQixVQUFVLEVBQUUsTUFGZDtFQUdFSSxNQUFNLEVBQUUsd0JBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBM0NnRCxFQWlEaEQ7RUFDRXBxQixLQUFLLEVBQUUsS0FEVDtFQUVFbXFCLFVBQVUsRUFBRSxLQUZkO0VBR0VJLE1BQU0sRUFBRSx1QkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0FqRGdELEVBdURoRDtFQUNFcHFCLEtBQUssRUFBRSxNQURUO0VBRUVtcUIsVUFBVSxFQUFFLE1BRmQ7RUFHRUksTUFBTSxFQUFFLHdCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQXZEZ0QsRUE2RGhEO0VBQ0VwcUIsS0FBSyxFQUFFLEtBRFQ7RUFFRW1xQixVQUFVLEVBQUUsS0FGZDtFQUdFSSxNQUFNLEVBQUUsdUJBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBN0RnRCxFQW1FaEQ7RUFDRXBxQixLQUFLLEVBQUUsTUFEVDtFQUVFbXFCLFVBQVUsRUFBRSxNQUZkO0VBR0VJLE1BQU0sRUFBRSx3QkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0FuRWdELENBQWxEO0FBMkVBLE1BQU1GLHFCQUF1QyxHQUFHLENBQzlDO0VBQ0VscUIsS0FBSyxFQUFFLEtBRFQ7RUFFRW1xQixVQUFVLEVBQUUsS0FGZDtFQUdFQyxhQUFhLEVBQUU7QUFIakIsQ0FEOEMsRUFNOUM7RUFDRXBxQixLQUFLLEVBQUUsS0FEVDtFQUVFbXFCLFVBQVUsRUFBRSxLQUZkO0VBR0VDLGFBQWEsRUFBRTtBQUhqQixDQU44QyxFQVc5QztFQUNFcHFCLEtBQUssRUFBRSxLQURUO0VBRUVtcUIsVUFBVSxFQUFFLEtBRmQ7RUFHRUMsYUFBYSxFQUFFO0FBSGpCLENBWDhDLEVBZ0I5QztFQUNFcHFCLEtBQUssRUFBRSxLQURUO0VBRUVtcUIsVUFBVSxFQUFFLEtBRmQ7RUFHRUMsYUFBYSxFQUFFO0FBSGpCLENBaEI4QyxFQXFCOUM7RUFDRXBxQixLQUFLLEVBQUUsT0FEVDtFQUVFbXFCLFVBQVUsRUFBRSxPQUZkO0VBR0VDLGFBQWEsRUFBRTtBQUhqQixDQXJCOEMsRUEwQjlDO0VBQ0VwcUIsS0FBSyxFQUFFLFFBRFQ7RUFFRW1xQixVQUFVLEVBQUUsUUFGZDtFQUdFQyxhQUFhLEVBQUU7QUFIakIsQ0ExQjhDLEVBK0I5QztFQUNFcHFCLEtBQUssRUFBRSxRQURUO0VBRUVtcUIsVUFBVSxFQUFFLFFBRmQ7RUFHRUMsYUFBYSxFQUFFO0FBSGpCLENBL0I4QyxFQW9DOUM7RUFDRXBxQixLQUFLLEVBQUUsT0FEVDtFQUVFbXFCLFVBQVUsRUFBRSxPQUZkO0VBR0VDLGFBQWEsRUFBRTtBQUhqQixDQXBDOEMsRUF5QzlDO0VBQ0VwcUIsS0FBSyxFQUFFLGNBRFQ7RUFFRW1xQixVQUFVLEVBQUUsY0FGZDtFQUdFQyxhQUFhLEVBQUU7QUFIakIsQ0F6QzhDLEVBOEM5QztFQUNFcHFCLEtBQUssRUFBRSxTQURUO0VBRUVtcUIsVUFBVSxFQUFFLFNBRmQ7RUFHRUMsYUFBYSxFQUFFO0FBSGpCLENBOUM4QyxFQW1EOUM7RUFDRXBxQixLQUFLLEVBQUUsTUFEVDtFQUVFbXFCLFVBQVUsRUFBRSxNQUZkO0VBR0VDLGFBQWEsRUFBRTtBQUhqQixDQW5EOEMsRUF3RDlDO0VBQ0VwcUIsS0FBSyxFQUFFLFVBRFQ7RUFFRW1xQixVQUFVLEVBQUUsVUFGZDtFQUdFQyxhQUFhLEVBQUU7QUFIakIsQ0F4RDhDLENBQWhEO0FBK0RPLE1BQU1NLFNBQVMsR0FBRyxDQUN2QixHQUFHUixxQkFEb0IsRUFFdkIsR0FBRzRCLHVCQUZvQixFQUd2QjtFQUNFM0IsVUFBVSxFQUFFLEtBRGQ7RUFFRW5xQixLQUFLLEVBQUUsS0FGVDtFQUdFdXFCLE1BQU0sRUFBRSx1QkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0FIdUIsRUFTdkI7RUFDRUQsVUFBVSxFQUFFLFFBRGQ7RUFFRW5xQixLQUFLLEVBQUUsUUFGVDtFQUdFdXFCLE1BQU0sRUFBRSwwQkFIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQVR1QixFQWdCdkI7RUFDRUQsVUFBVSxFQUFFLGtCQURkO0VBRUVucUIsS0FBSyxFQUFFLGtCQUZUO0VBR0V1cUIsTUFBTSxFQUFFLHdCQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBaEJ1QixFQXVCdkI7RUFDRUQsVUFBVSxFQUFFLE1BRGQ7RUFFRW5xQixLQUFLLEVBQUUsTUFGVDtFQUdFdXFCLE1BQU0sRUFBRSx3QkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0F2QnVCLEVBNkJ2QjtFQUNFRCxVQUFVLEVBQUUsU0FEZDtFQUVFbnFCLEtBQUssRUFBRSxTQUZUO0VBR0V1cUIsTUFBTSxFQUFFLHlCQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBN0J1QixFQW9DdkI7RUFDRUQsVUFBVSxFQUFFLE9BRGQ7RUFFRW5xQixLQUFLLEVBQUUsT0FGVDtFQUdFdXFCLE1BQU0sRUFBRSxpREFIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQXBDdUIsRUEyQ3ZCO0VBQ0VELFVBQVUsRUFBRSxXQURkO0VBRUVucUIsS0FBSyxFQUFFLFdBRlQ7RUFHRXVxQixNQUFNLEVBQUUseUNBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBM0N1QixFQWlEdkI7RUFDRUQsVUFBVSxFQUFFLFdBRGQ7RUFFRW5xQixLQUFLLEVBQUUsV0FGVDtFQUdFdXFCLE1BQU0sRUFBRSx5Q0FIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0FqRHVCLEVBdUR2QjtFQUNFRCxVQUFVLEVBQUUsY0FEZDtFQUVFbnFCLEtBQUssRUFBRSxjQUZUO0VBR0V1cUIsTUFBTSxFQUFFLGdDQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBdkR1QixFQThEdkI7RUFDRUQsVUFBVSxFQUFFLEtBRGQ7RUFFRW5xQixLQUFLLEVBQUUsS0FGVDtFQUdFdXFCLE1BQU0sRUFBRSx1QkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0E5RHVCLEVBb0V2QjtFQUNFRCxVQUFVLEVBQUUsY0FEZDtFQUVFbnFCLEtBQUssRUFBRSxjQUZUO0VBR0V1cUIsTUFBTSxFQUFFLCtDQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQXBFdUIsRUEwRXZCO0VBQ0VELFVBQVUsRUFBRSxhQURkO0VBRUVucUIsS0FBSyxFQUFFLGFBRlQ7RUFHRXVxQixNQUFNLEVBQUUsOENBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0ExRXVCLEVBaUZ2QjtFQUNFRCxVQUFVLEVBQUUsZUFEZDtFQUVFbnFCLEtBQUssRUFBRSxlQUZUO0VBR0V1cUIsTUFBTSxFQUFFLGdEQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBakZ1QixFQXdGdkI7RUFDRUQsVUFBVSxFQUFFLE9BRGQ7RUFFRW5xQixLQUFLLEVBQUUsT0FGVDtFQUdFdXFCLE1BQU0sRUFBRSx1QkFIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQXhGdUIsRUErRnZCO0VBQ0VELFVBQVUsRUFBRSxPQURkO0VBRUVucUIsS0FBSyxFQUFFLE9BRlQ7RUFHRXVxQixNQUFNLEVBQUUsdUJBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0EvRnVCLEVBc0d2QjtFQUNFRCxVQUFVLEVBQUUsb0JBRGQ7RUFFRW5xQixLQUFLLEVBQUUsb0JBRlQ7RUFHRXVxQixNQUFNLEVBQUUsb0NBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBdEd1QixFQTRHdkI7RUFDRUQsVUFBVSxFQUFFLEtBRGQ7RUFFRW5xQixLQUFLLEVBQUUsS0FGVDtFQUdFdXFCLE1BQU0sRUFBRSx1QkFIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQTVHdUIsRUFtSHZCO0VBQ0VELFVBQVUsRUFBRSxPQURkO0VBRUVucUIsS0FBSyxFQUFFLE9BRlQ7RUFHRXVxQixNQUFNLEVBQUUseUJBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBbkh1QixFQXlIdkI7RUFDRUQsVUFBVSxFQUFFLG9CQURkO0VBRUVucUIsS0FBSyxFQUFFLG9CQUZUO0VBR0V1cUIsTUFBTSxFQUFFLCtDQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBekh1QixFQWdJdkI7RUFDRUQsVUFBVSxFQUFFLGNBRGQ7RUFFRW5xQixLQUFLLEVBQUUsY0FGVDtFQUdFdXFCLE1BQU0sRUFBRSxvREFIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQWhJdUIsRUF1SXZCO0VBQ0VELFVBQVUsRUFBRSxNQURkO0VBRUVucUIsS0FBSyxFQUFFLE1BRlQ7RUFHRXVxQixNQUFNLEVBQUUsdUNBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBdkl1QixFQTZJdkI7RUFDRUQsVUFBVSxFQUFFLFFBRGQ7RUFFRW5xQixLQUFLLEVBQUUsUUFGVDtFQUdFdXFCLE1BQU0sRUFBRSx3QkFIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQTdJdUIsRUFvSnZCO0VBQ0VELFVBQVUsRUFBRSxVQURkO0VBRUVucUIsS0FBSyxFQUFFLFVBRlQ7RUFHRXVxQixNQUFNLEVBQUUsMEJBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0FwSnVCLEVBMkp2QjtFQUNFRCxVQUFVLEVBQUUsT0FEZDtFQUVFbnFCLEtBQUssRUFBRSxPQUZUO0VBR0V1cUIsTUFBTSxFQUFFLHVCQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBM0p1QixFQWtLdkI7RUFDRUQsVUFBVSxFQUFFLFlBRGQ7RUFFRW5xQixLQUFLLEVBQUUsWUFGVDtFQUdFdXFCLE1BQU0sRUFDSiwrR0FKSjtFQUtFSCxhQUFhLEVBQ1g7QUFOSixDQWxLdUIsRUEwS3ZCO0VBQ0VELFVBQVUsRUFBRSxlQURkO0VBRUVucUIsS0FBSyxFQUFFLGVBRlQ7RUFHRXVxQixNQUFNLEVBQUUsdUdBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0ExS3VCLEVBaUx2QjtFQUNFRCxVQUFVLEVBQUUsSUFEZDtFQUVFbnFCLEtBQUssRUFBRSxJQUZUO0VBR0V1cUIsTUFBTSxFQUFFLHNCQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBakx1QixFQXdMdkI7RUFDRUQsVUFBVSxFQUFFLE1BRGQ7RUFFRW5xQixLQUFLLEVBQUUsTUFGVDtFQUdFdXFCLE1BQU0sRUFBRSx3QkFIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQXhMdUIsRUErTHZCO0VBQ0VELFVBQVUsRUFBRSxPQURkO0VBRUVucUIsS0FBSyxFQUFFLE9BRlQ7RUFHRXVxQixNQUFNLEVBQUUseUJBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0EvTHVCLEVBc012QjtFQUNFRCxVQUFVLEVBQUUsUUFEZDtFQUVFbnFCLEtBQUssRUFBRSxRQUZUO0VBR0V1cUIsTUFBTSxFQUFFLHlDQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBdE11QixFQTZNdkI7RUFDRUQsVUFBVSxFQUFFLE9BRGQ7RUFFRW5xQixLQUFLLEVBQUUsT0FGVDtFQUdFdXFCLE1BQU0sRUFBRSx3Q0FIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQTdNdUIsRUFvTnZCO0VBQ0VELFVBQVUsRUFBRSxJQURkO0VBRUVucUIsS0FBSyxFQUFFLElBRlQ7RUFHRXVxQixNQUFNLEVBQUUsTUFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0FwTnVCLEVBME52QjtFQUNFRCxVQUFVLEVBQUUsZ0JBRGQ7RUFFRW5xQixLQUFLLEVBQUUsZ0JBRlQ7RUFHRXVxQixNQUFNLEVBQUUsMENBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0ExTnVCLEVBaU92QjtFQUNFRCxVQUFVLEVBQUUsS0FEZDtFQUVFbnFCLEtBQUssRUFBRSxLQUZUO0VBR0V1cUIsTUFBTSxFQUFFLHVCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQWpPdUIsRUF1T3ZCO0VBQ0VELFVBQVUsRUFBRSxNQURkO0VBRUVucUIsS0FBSyxFQUFFLE1BRlQ7RUFHRXVxQixNQUFNLEVBQUUsc0JBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0F2T3VCLEVBOE92QjtFQUNFRCxVQUFVLEVBQUUsUUFEZDtFQUVFbnFCLEtBQUssRUFBRSxRQUZUO0VBR0V1cUIsTUFBTSxFQUFFLHdCQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBOU91QixFQXFQdkI7RUFDRUQsVUFBVSxFQUFFLE9BRGQ7RUFFRW5xQixLQUFLLEVBQUUsT0FGVDtFQUdFdXFCLE1BQU0sRUFBRSw4Q0FIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQXJQdUIsRUE0UHZCO0VBQ0VELFVBQVUsRUFBRSxRQURkO0VBRUVucUIsS0FBSyxFQUFFLFFBRlQ7RUFHRXVxQixNQUFNLEVBQUUsMEJBSFY7RUFJRUgsYUFBYSxFQUNYO0FBTEosQ0E1UHVCLEVBbVF2QjtFQUNFRCxVQUFVLEVBQUUsS0FEZDtFQUVFbnFCLEtBQUssRUFBRSxLQUZUO0VBR0V1cUIsTUFBTSxFQUFFLHVCQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBblF1QixFQTBRdkI7RUFDRUQsVUFBVSxFQUFFLE1BRGQ7RUFFRW5xQixLQUFLLEVBQUUsTUFGVDtFQUdFdXFCLE1BQU0sRUFBRSx3QkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0ExUXVCLEVBZ1J2QjtFQUNFRCxVQUFVLEVBQUUsV0FEZDtFQUVFbnFCLEtBQUssRUFBRSxXQUZUO0VBR0V1cUIsTUFBTSxFQUFFLDZCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQWhSdUIsRUFzUnZCO0VBQ0VELFVBQVUsRUFBRSxNQURkO0VBRUVucUIsS0FBSyxFQUFFLE1BRlQ7RUFHRXVxQixNQUFNLEVBQUUsd0JBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBdFJ1QixFQTRSdkI7RUFDRUQsVUFBVSxFQUFFLE1BRGQ7RUFFRW5xQixLQUFLLEVBQUUsTUFGVDtFQUdFdXFCLE1BQU0sRUFBRSxRQUhWO0VBSUVILGFBQWEsRUFDWDtBQUxKLENBNVJ1QixFQW1TdkI7RUFDRUQsVUFBVSxFQUFFLFdBRGQ7RUFFRW5xQixLQUFLLEVBQUUsV0FGVDtFQUdFdXFCLE1BQU0sRUFBRSw2QkFIVjtFQUlFSCxhQUFhLEVBQ1g7QUFMSixDQW5TdUIsRUEwU3ZCO0VBQ0VELFVBQVUsRUFBRSxRQURkO0VBRUVucUIsS0FBSyxFQUFFLFFBRlQ7RUFHRXVxQixNQUFNLEVBQUUsa0JBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBMVN1QixFQWdUdkI7RUFDRUQsVUFBVSxFQUFFLE1BRGQ7RUFFRW5xQixLQUFLLEVBQUUsTUFGVDtFQUdFdXFCLE1BQU0sRUFBRSx1Q0FIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0FoVHVCLEVBc1R2QjtFQUNFRCxVQUFVLEVBQUUsZUFEZDtFQUVFbnFCLEtBQUssRUFBRSxlQUZUO0VBR0V1cUIsTUFBTSxFQUFFLDZCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQXRUdUIsRUE0VHZCO0VBQ0VELFVBQVUsRUFBRSxlQURkO0VBRUVucUIsS0FBSyxFQUFFLGVBRlQ7RUFHRXVxQixNQUFNLEVBQUUsNkJBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBNVR1QixFQWtVdkI7RUFDRUQsVUFBVSxFQUFFLGVBRGQ7RUFFRW5xQixLQUFLLEVBQUUsZUFGVDtFQUdFdXFCLE1BQU0sRUFBRSw2QkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0FsVXVCLEVBd1V2QjtFQUNFRCxVQUFVLEVBQUUsZUFEZDtFQUVFbnFCLEtBQUssRUFBRSxlQUZUO0VBR0V1cUIsTUFBTSxFQUFFLDZCQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQXhVdUIsRUE4VXZCO0VBQ0VELFVBQVUsRUFBRSxpQkFEZDtFQUVFbnFCLEtBQUssRUFBRSxpQkFGVDtFQUdFdXFCLE1BQU0sRUFBRSwrQkFIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0E5VXVCLEVBb1Z2QjtFQUNFRCxVQUFVLEVBQUUsb0JBRGQ7RUFFRW5xQixLQUFLLEVBQUUsb0JBRlQ7RUFHRXVxQixNQUFNLEVBQUUsMENBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBcFZ1QixFQTBWdkI7RUFDRUQsVUFBVSxFQUFFLGtCQURkO0VBRUVucUIsS0FBSyxFQUFFLGtCQUZUO0VBR0V1cUIsTUFBTSxFQUFFLGdDQUhWO0VBSUVILGFBQWEsRUFBRTtBQUpqQixDQTFWdUIsRUFnV3ZCO0VBQ0VELFVBQVUsRUFBRSxrQkFEZDtFQUVFbnFCLEtBQUssRUFBRSxrQkFGVDtFQUdFdXFCLE1BQU0sRUFBRSxnQ0FIVjtFQUlFSCxhQUFhLEVBQUU7QUFKakIsQ0FoV3VCLEVBc1d2QjtFQUNFRCxVQUFVLEVBQUUsZ0JBRGQ7RUFFRW5xQixLQUFLLEVBQUUsZ0JBRlQ7RUFHRXVxQixNQUFNLEVBQUUsOEJBSFY7RUFJRUgsYUFBYSxFQUFFO0FBSmpCLENBdFd1QixDQUFsQjtBQThXQSxNQUFNMkIsYUFBYSxHQUFHckIsU0FBUyxDQUFDcnBCLEdBQVYsQ0FBZXVwQixPQUFELElBQWFBLE9BQU8sQ0FBQzVxQixLQUFuQyxDQUF0QjtBQUVBLE1BQU1nc0IsYUFBc0IsR0FBRztFQUNwQ2xCLE9BQU8sRUFBRTtJQUNQdlksT0FBTyxFQUFFO0VBREYsQ0FEMkI7RUFJcEMsdUJBQXVCO0lBQ3JCQSxPQUFPLEVBQUUsNEJBRFk7SUFDa0I7SUFDdkN3WSxVQUFVLEVBQUUsSUFGUztJQUdyQkMsTUFBTSxFQUFFO01BQ04sYUFBYTtRQUNYelksT0FBTyxFQUFFLHdCQURFO1FBRVgwWSxLQUFLLEVBQUU7TUFGSSxDQURQO01BS05DLFdBQVcsRUFBRTtJQUxQO0VBSGEsQ0FKYTtFQWVwQyxrQkFBa0I7SUFDaEIzWSxPQUFPLEVBQUUsZUFETztJQUVoQjRZLE1BQU0sRUFBRSxJQUZRO0lBR2hCSCxNQUFNLEVBQUU7TUFDTkYsT0FBTyxFQUFFO1FBQ1B2WSxPQUFPLEVBQUU7TUFERixDQURIO01BSU4sYUFBYTtRQUNYQSxPQUFPLEVBQUUsOEJBREU7UUFFWDBZLEtBQUssRUFBRSxXQUZJO1FBR1hFLE1BQU0sRUFBRTtNQUhHLENBSlA7TUFTTixlQUFlO1FBQ2I1WSxPQUFPLEVBQUUsbUJBREk7UUFFYjRZLE1BQU0sRUFBRSxJQUZLO1FBR2JGLEtBQUssRUFBRTtNQUhNLENBVFQ7TUFjTkMsV0FBVyxFQUFFO0lBZFA7RUFIUSxDQWZrQjtFQW1DcENHLFFBQVEsRUFBRSxJQUFJMW5CLE1BQUosQ0FBWSxTQUFRK21CLFNBQVMsQ0FBQ3JwQixHQUFWLENBQWUrcEIsQ0FBRCxJQUFPQSxDQUFDLENBQUNwckIsS0FBdkIsRUFBOEJrb0IsSUFBOUIsQ0FBbUMsR0FBbkMsQ0FBd0MsY0FBNUQsRUFBMkUsR0FBM0UsQ0FuQzBCO0VBb0NwQyxpQkFBaUIsQ0FDZjtJQUNFM1YsT0FBTyxFQUFFLGVBRFg7SUFDNEI7SUFDMUJ5WSxNQUFNLEVBQUU7TUFDTixrQkFBa0I7UUFDaEJ6WSxPQUFPLEVBQUUsa0JBRE87UUFFaEIwWSxLQUFLLEVBQUU7TUFGUztJQURaO0VBRlYsQ0FEZSxFQVVmO0lBQ0UxWSxPQUFPLEVBQUUsZ0JBRFg7SUFDNkI7SUFDM0J3WSxVQUFVLEVBQUUsSUFGZDtJQUdFQyxNQUFNLEVBQUU7TUFDTixrQkFBa0I7UUFDaEJ6WSxPQUFPLEVBQUUsa0JBRE87UUFFaEIwWSxLQUFLLEVBQUU7TUFGUztJQURaO0VBSFYsQ0FWZSxDQXBDbUI7RUF5RHBDZ0IsTUFBTSxFQUFFO0lBQ04xWixPQUFPLEVBQUUsYUFESDtJQUVOMFksS0FBSyxFQUFFO0VBRkQsQ0F6RDRCO0VBNkRwQ08sTUFBTSxFQUFFLHFDQTdENEI7RUE4RHBDQyxRQUFRLEVBQUUsSUFBSTluQixNQUFKLENBQVksMERBQXlEaW9CLFNBQVMsQ0FBQzFELElBQVYsQ0FBZSxHQUFmLENBQW9CLE1BQXpGLEVBQWdHLEdBQWhHLENBOUQwQjtFQStEcENnRCxXQUFXLEVBQUU7QUEvRHVCLENBQS9CO0FBa0VQLGlFQUFlYyxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9ob29rcy91c2VDbGVhbnVwLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL0FsZXJ0SG93VG9Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvQWxlcnRSdWxlSXRlbS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvQWxlcnRSdWxlTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9EZXByZWNhdGlvbk5vdGljZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9zdGF0ZS9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9SdWxlTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0FsZXJ0aW5nUGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9BdXRob3JpemUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9EeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0V4cHJlc3Npb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9Qcm92aXNpb25pbmcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9SdWxlTG9jYXRpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9TdGF0ZUNvbG9yZWRUZXh0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYWxlcnQtZ3JvdXBzL01hdGNoZXJGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9BY3Rpb25JY29uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvQ2xvdWRSdWxlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0VkaXRDbG91ZEdyb3VwTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9HcmFmYW5hUnVsZXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9Ob1J1bGVzQ1RBLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0Fubm90YXRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNEYXRhU291cmNlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzRXhwcmVzc2lvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlSGVhbHRoLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RFcnJvcnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlTGlzdEdyb3VwVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVMaXN0U3RhdGVTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RTdGF0ZVZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlU3RhdGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlU3RhdHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlc0ZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVzR3JvdXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvU3RhdGVIaXN0b3J5LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvdXNlQ29tYmluZWRHcm91cE5hbWVzcGFjZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlRmlsdGVyZWRSdWxlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUZvbGRlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUhhc1J1bGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlSXNSdWxlRWRpdGFibGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VTdGF0ZUhpc3RvcnlNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9hY2Nlc3NDb250cm9sSG9va3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvc3ludGF4LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL3Byb21xbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBjbGVhblVwQWN0aW9uLCBTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vYWN0aW9ucy9jbGVhblVwJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNsZWFudXA8VD4oc3RhdGVTZWxlY3RvcjogU3RhdGVTZWxlY3RvcjxUPikge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIC8vYml0IG9mIGEgaGFjayB0byB1bmJ1cmRlbiB1c2VyIGZyb20gaGF2aW5nIHRvIHdyYXAgc3RhdGVTZWxjZXRvciBpbiBhIHVzZUNhbGxiYWNrLiBPdGhlcndpc2UgY2xlYW51cCB3b3VsZCBoYXBwZW4gb24gZXZlcnkgcmVuZGVyXG4gIGNvbnN0IHNlbGVjdG9yUmVmID0gdXNlUmVmKHN0YXRlU2VsZWN0b3IpO1xuICBzZWxlY3RvclJlZi5jdXJyZW50ID0gc3RhdGVTZWxlY3RvcjtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goY2xlYW5VcEFjdGlvbih7IHN0YXRlU2VsZWN0b3I6IHNlbGVjdG9yUmVmLmN1cnJlbnQgfSkpO1xuICAgIH07XG4gIH0sIFtkaXNwYXRjaF0pO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW9kYWwsIFZlcnRpY2FsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRIb3dUb01vZGFsUHJvcHMge1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBbGVydEhvd1RvTW9kYWwoeyBvbkRpc21pc3MgfTogQWxlcnRIb3dUb01vZGFsUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHRpdGxlPVwiQWRkaW5nIGFuIEFsZXJ0XCIgaXNPcGVuIG9uRGlzbWlzcz17b25EaXNtaXNzfSBvbkNsaWNrQmFja2Ryb3A9e29uRGlzbWlzc30+XG4gICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwic21cIj5cbiAgICAgICAgPGltZyBzcmM9XCJwdWJsaWMvaW1nL2FsZXJ0X2hvd3RvX25ldy5wbmdcIiBhbHQ9XCJsaW5rIHRvIGhvdyB0byBhbGVydCBpbWFnZVwiIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFsZXJ0cyBhcmUgYWRkZWQgYW5kIGNvbmZpZ3VyZWQgaW4gdGhlIEFsZXJ0IHRhYiBvZiBhbnkgZGFzaGJvYXJkIGdyYXBoIHBhbmVsLCBsZXR0aW5nIHlvdSBidWlsZCBhbmQgdmlzdWFsaXplXG4gICAgICAgICAgYW4gYWxlcnQgdXNpbmcgZXhpc3RpbmcgcXVlcmllcy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5SZW1lbWJlciB0byBzYXZlIHRoZSBkYXNoYm9hcmQgdG8gcGVyc2lzdCB5b3VyIGFsZXJ0IHJ1bGUgY2hhbmdlcy48L3A+XG4gICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0Jztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBIaWdobGlnaHRlciBmcm9tICdyZWFjdC1oaWdobGlnaHQtd29yZHMnO1xuXG5pbXBvcnQgeyBJY29uLCBJY29uTmFtZSwgQnV0dG9uLCBMaW5rQnV0dG9uLCBDYXJkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBBbGVydFJ1bGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBBbGVydFJ1bGU7XG4gIHNlYXJjaDogc3RyaW5nO1xuICBvblRvZ2dsZVBhdXNlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBBbGVydFJ1bGVJdGVtID0gKHsgcnVsZSwgc2VhcmNoLCBvblRvZ2dsZVBhdXNlIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJ1bGVVcmwgPSBgJHtydWxlLnVybH0/ZWRpdFBhbmVsPSR7cnVsZS5wYW5lbElkfSZ0YWI9YWxlcnRgO1xuICBjb25zdCByZW5kZXJUZXh0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHRleHQpID0+IChcbiAgICAgIDxIaWdobGlnaHRlclxuICAgICAgICBrZXk9e3RleHR9XG4gICAgICAgIGhpZ2hsaWdodENsYXNzTmFtZT1cImhpZ2hsaWdodC1zZWFyY2gtbWF0Y2hcIlxuICAgICAgICB0ZXh0VG9IaWdobGlnaHQ9e3RleHR9XG4gICAgICAgIHNlYXJjaFdvcmRzPXtbc2VhcmNoXX1cbiAgICAgIC8+XG4gICAgKSxcbiAgICBbc2VhcmNoXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZC5IZWFkaW5nPntyZW5kZXJUZXh0KHJ1bGUubmFtZSl9PC9DYXJkLkhlYWRpbmc+XG4gICAgICA8Q2FyZC5GaWd1cmU+XG4gICAgICAgIDxJY29uIHNpemU9XCJ4bFwiIG5hbWU9e3J1bGUuc3RhdGVJY29uIGFzIEljb25OYW1lfSBjbGFzc05hbWU9e2BhbGVydC1ydWxlLWl0ZW1fX2ljb24gJHtydWxlLnN0YXRlQ2xhc3N9YH0gLz5cbiAgICAgIDwvQ2FyZC5GaWd1cmU+XG4gICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICA8c3BhbiBrZXk9XCJzdGF0ZVwiPlxuICAgICAgICAgIDxzcGFuIGtleT1cInRleHRcIiBjbGFzc05hbWU9e2Ake3J1bGUuc3RhdGVDbGFzc31gfT5cbiAgICAgICAgICAgIHtyZW5kZXJUZXh0KHJ1bGUuc3RhdGVUZXh0KX17JyAnfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBmb3Ige3J1bGUuc3RhdGVBZ2V9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge3J1bGUuaW5mbyA/IHJlbmRlclRleHQocnVsZS5pbmZvKSA6IG51bGx9XG4gICAgICA8L0NhcmQuTWV0YT5cbiAgICAgIDxDYXJkLkFjdGlvbnM+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9XCJwbGF5XCJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBpY29uPXtydWxlLnN0YXRlID09PSAncGF1c2VkJyA/ICdwbGF5JyA6ICdwYXVzZSd9XG4gICAgICAgICAgb25DbGljaz17b25Ub2dnbGVQYXVzZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtydWxlLnN0YXRlID09PSAncGF1c2VkJyA/ICdSZXN1bWUnIDogJ1BhdXNlJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxMaW5rQnV0dG9uIGtleT1cImVkaXRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaHJlZj17cnVsZVVybH0gaWNvbj1cImNvZ1wiPlxuICAgICAgICAgIEVkaXQgYWxlcnRcbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgPC9DYXJkLkFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRSdWxlSXRlbTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRmlsdGVySW5wdXQsIExpbmtCdXR0b24sIFNlbGVjdCwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgQWxlcnRSdWxlLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgU2hvd01vZGFsUmVhY3RFdmVudCB9IGZyb20gJy4uLy4uL3R5cGVzL2V2ZW50cyc7XG5cbmltcG9ydCB7IEFsZXJ0SG93VG9Nb2RhbCB9IGZyb20gJy4vQWxlcnRIb3dUb01vZGFsJztcbmltcG9ydCBBbGVydFJ1bGVJdGVtIGZyb20gJy4vQWxlcnRSdWxlSXRlbSc7XG5pbXBvcnQgeyBEZXByZWNhdGlvbk5vdGljZSB9IGZyb20gJy4vY29tcG9uZW50cy9EZXByZWNhdGlvbk5vdGljZSc7XG5pbXBvcnQgeyBnZXRBbGVydFJ1bGVzQXN5bmMsIHRvZ2dsZVBhdXNlQWxlcnRSdWxlIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHNldFNlYXJjaFF1ZXJ5IH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXRBbGVydFJ1bGVJdGVtcywgZ2V0U2VhcmNoUXVlcnkgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ2FsZXJ0LWxpc3QnKSxcbiAgICBhbGVydFJ1bGVzOiBnZXRBbGVydFJ1bGVJdGVtcyhzdGF0ZSksXG4gICAgc2VhcmNoOiBnZXRTZWFyY2hRdWVyeShzdGF0ZS5hbGVydFJ1bGVzKSxcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmFsZXJ0UnVsZXMuaXNMb2FkaW5nLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldEFsZXJ0UnVsZXNBc3luYyxcbiAgc2V0U2VhcmNoUXVlcnksXG4gIHRvZ2dsZVBhdXNlQWxlcnRSdWxlLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHt9LCB7IHN0YXRlOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY2xhc3MgQWxlcnRSdWxlTGlzdFVuY29ubmVjdGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0ZUZpbHRlcnMgPSBbXG4gICAgeyBsYWJlbDogJ0FsbCcsIHZhbHVlOiAnYWxsJyB9LFxuICAgIHsgbGFiZWw6ICdPSycsIHZhbHVlOiAnb2snIH0sXG4gICAgeyBsYWJlbDogJ05vdCBPSycsIHZhbHVlOiAnbm90X29rJyB9LFxuICAgIHsgbGFiZWw6ICdBbGVydGluZycsIHZhbHVlOiAnYWxlcnRpbmcnIH0sXG4gICAgeyBsYWJlbDogJ05vIGRhdGEnLCB2YWx1ZTogJ25vX2RhdGEnIH0sXG4gICAgeyBsYWJlbDogJ1BhdXNlZCcsIHZhbHVlOiAncGF1c2VkJyB9LFxuICAgIHsgbGFiZWw6ICdQZW5kaW5nJywgdmFsdWU6ICdwZW5kaW5nJyB9LFxuICBdO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hSdWxlcygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnF1ZXJ5UGFyYW1zLnN0YXRlICE9PSB0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zLnN0YXRlKSB7XG4gICAgICB0aGlzLmZldGNoUnVsZXMoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmZXRjaFJ1bGVzKCkge1xuICAgIGF3YWl0IHRoaXMucHJvcHMuZ2V0QWxlcnRSdWxlc0FzeW5jKHsgc3RhdGU6IHRoaXMuZ2V0U3RhdGVGaWx0ZXIoKSB9KTtcbiAgfVxuXG4gIGdldFN0YXRlRmlsdGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucXVlcnlQYXJhbXMuc3RhdGUgPz8gJ2FsbCc7XG4gIH1cblxuICBvblN0YXRlRmlsdGVyQ2hhbmdlZCA9IChvcHRpb246IFNlbGVjdGFibGVWYWx1ZSkgPT4ge1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHsgc3RhdGU6IG9wdGlvbi52YWx1ZSB9KTtcbiAgfTtcblxuICBvbk9wZW5Ib3dUbyA9ICgpID0+IHtcbiAgICBhcHBFdmVudHMucHVibGlzaChuZXcgU2hvd01vZGFsUmVhY3RFdmVudCh7IGNvbXBvbmVudDogQWxlcnRIb3dUb01vZGFsIH0pKTtcbiAgfTtcblxuICBvblNlYXJjaFF1ZXJ5Q2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldFNlYXJjaFF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICBvblRvZ2dsZVBhdXNlID0gKHJ1bGU6IEFsZXJ0UnVsZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudG9nZ2xlUGF1c2VBbGVydFJ1bGUocnVsZS5pZCwgeyBwYXVzZWQ6IHJ1bGUuc3RhdGUgIT09ICdwYXVzZWQnIH0pO1xuICB9O1xuXG4gIGFsZXJ0U3RhdGVGaWx0ZXJPcHRpb24gPSAoeyB0ZXh0LCB2YWx1ZSB9OiB7IHRleHQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxvcHRpb24ga2V5PXt2YWx1ZX0gdmFsdWU9e3ZhbHVlfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBhbGVydFJ1bGVzLCBzZWFyY2gsIGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICAgIDxGaWx0ZXJJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhbGVydHNcIiB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17dGhpcy5vblNlYXJjaFF1ZXJ5Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWxcIiBodG1sRm9yPVwiYWxlcnQtc3RhdGUtZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgU3RhdGVzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aC0xM1wiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eydhbGVydC1zdGF0ZS1maWx0ZXInfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZUZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN0YXRlRmlsdGVyQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFN0YXRlRmlsdGVyKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyX19zcGFjZXJcIiAvPlxuICAgICAgICAgICAge2NvbmZpZy51bmlmaWVkQWxlcnRpbmdFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBocmVmPVwiYWxlcnRpbmcvbmcvbmV3XCI+XG4gICAgICAgICAgICAgICAgQWRkIE5HIEFsZXJ0XG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLm9uT3Blbkhvd1RvfT5cbiAgICAgICAgICAgICAgSG93IHRvIGFkZCBhbiBhbGVydFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERlcHJlY2F0aW9uTm90aWNlIC8+XG4gICAgICAgICAgPFZlcnRpY2FsR3JvdXAgc3BhY2luZz1cIm5vbmVcIj5cbiAgICAgICAgICAgIHthbGVydFJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxBbGVydFJ1bGVJdGVtXG4gICAgICAgICAgICAgICAgICBydWxlPXtydWxlIGFzIEFsZXJ0UnVsZX1cbiAgICAgICAgICAgICAgICAgIGtleT17cnVsZS5pZH1cbiAgICAgICAgICAgICAgICAgIHNlYXJjaD17c2VhcmNofVxuICAgICAgICAgICAgICAgICAgb25Ub2dnbGVQYXVzZT17KCkgPT4gdGhpcy5vblRvZ2dsZVBhdXNlKHJ1bGUgYXMgQWxlcnRSdWxlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoQWxlcnRSdWxlTGlzdFVuY29ubmVjdGVkKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX0tFWSA9ICdncmFmYW5hLmxlZ2FjeWFsZXJ0aW5nLnVuaWZpZWRhbGVydGluZ3Byb21vJztcblxuY29uc3QgRGVwcmVjYXRpb25Ob3RpY2U6IEZDPHt9PiA9ICgpID0+IChcbiAgPEFsZXJ0IHNldmVyaXR5PVwid2FybmluZ1wiIHRpdGxlPVwiR3JhZmFuYSBsZWdhY3kgYWxlcnRpbmcgaXMgZ29pbmcgYXdheSBzb29uXCI+XG4gICAgPHA+XG4gICAgICBZb3UgYXJlIHVzaW5nIEdyYWZhbmEgbGVnYWN5IGFsZXJ0aW5nLCBpdCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZlxuICAgICAgR3JhZmFuYS5cbiAgICAgIDxiciAvPlxuICAgICAgV2UgZW5jb3VyYWdlIHlvdSB0byB1cGdyYWRlIHRvIHRoZSBuZXcgR3JhZmFuYSBBbGVydGluZyBleHBlcmllbmNlLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFNlZXsnICd9XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbGF0ZXN0L2FsZXJ0aW5nL3VuaWZpZWQtYWxlcnRpbmcvZGlmZmVyZW5jZS1vbGQtbmV3L1wiPlxuICAgICAgICBXaGF04oCZcyBOZXcgd2l0aCBHcmFmYW5hIEFsZXJ0aW5nXG4gICAgICA8L2E+eycgJ31cbiAgICAgIHRvIGxlYXJuIG1vcmUgYWJvdXQgd2hhdCZsc3F1bztzIG5ldyBvciBsZWFybnsnICd9XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbGF0ZXN0L2FsZXJ0aW5nL3VuaWZpZWQtYWxlcnRpbmcvb3B0LWluL1wiPlxuICAgICAgICBob3cgdG8gZW5hYmxlIHRoZSBuZXcgR3JhZmFuYSBBbGVydGluZyBmZWF0dXJlXG4gICAgICA8L2E+XG4gICAgICAuXG4gICAgPC9wPlxuICA8L0FsZXJ0PlxuKTtcblxuZXhwb3J0IHsgRGVwcmVjYXRpb25Ob3RpY2UgfTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGlzRmV0Y2hFcnJvciwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uLCBjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgQWxlcnRSdWxlRFRPLCBOb3RpZmllckRUTywgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBsb2FkQWxlcnRSdWxlcywgbG9hZGVkQWxlcnRSdWxlcywgbm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCwgc2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMgfSBmcm9tICcuL3JlZHVjZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsZXJ0UnVsZXNBc3luYyhvcHRpb25zOiB7IHN0YXRlOiBzdHJpbmcgfSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvYWRBbGVydFJ1bGVzKCkpO1xuICAgIGNvbnN0IHJ1bGVzOiBBbGVydFJ1bGVEVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvYWxlcnRzJywgb3B0aW9ucyk7XG4gICAgZGlzcGF0Y2gobG9hZGVkQWxlcnRSdWxlcyhydWxlcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUGF1c2VBbGVydFJ1bGUoaWQ6IG51bWJlciwgb3B0aW9uczogeyBwYXVzZWQ6IGJvb2xlYW4gfSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL2FsZXJ0cy8ke2lkfS9wYXVzZWAsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0YXRlRmlsdGVyID0gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpLnN0YXRlIHx8ICdhbGwnO1xuICAgIGRpc3BhdGNoKGdldEFsZXJ0UnVsZXNBc3luYyh7IHN0YXRlOiBzdGF0ZUZpbHRlci50b1N0cmluZygpIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8UHJvbWlzZTx2b2lkPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnNgLCBkYXRhKTtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKCdOb3RpZmljYXRpb24gY3JlYXRlZCcpKSk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGlzRmV0Y2hFcnJvcihlcnJvcikpIHtcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKGVycm9yLmRhdGEuZXJyb3IpKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zLyR7ZGF0YS5pZH1gLCBkYXRhKTtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKCdOb3RpZmljYXRpb24gdXBkYXRlZCcpKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChpc0ZldGNoRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihlcnJvci5kYXRhLmVycm9yKSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3ROb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBjaGFubmVsID0gZ2V0U3RhdGUoKS5ub3RpZmljYXRpb25DaGFubmVsLm5vdGlmaWNhdGlvbkNoYW5uZWw7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy90ZXN0JywgeyBpZDogY2hhbm5lbC5pZCwgLi4uZGF0YSB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROb3RpZmljYXRpb25UeXBlcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBhbGVydE5vdGlmaWVyczogTm90aWZpZXJEVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvYWxlcnQtbm90aWZpZXJzYCk7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25UeXBlcyA9IGFsZXJ0Tm90aWZpZXJzLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgaWYgKG8xLm5hbWUgPiBvMi5uYW1lKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH0pO1xuXG4gICAgZGlzcGF0Y2goc2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMobm90aWZpY2F0aW9uVHlwZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROb3RpZmljYXRpb25DaGFubmVsKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkTm90aWZpY2F0aW9uVHlwZXMoKSk7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uQ2hhbm5lbCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy8ke2lkfWApO1xuICAgIGRpc3BhdGNoKG5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQobm90aWZpY2F0aW9uQ2hhbm5lbCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgQWxlcnRSdWxlLCBBbGVydFJ1bGVzU3RhdGUsIE5vdGlmaWNhdGlvbkNoYW5uZWxTdGF0ZSwgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hRdWVyeSA9IChzdGF0ZTogQWxlcnRSdWxlc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeTtcblxuZXhwb3J0IGNvbnN0IGdldEFsZXJ0UnVsZUl0ZW1zID0gKHN0YXRlOiBTdG9yZVN0YXRlKTogQWxlcnRSdWxlW10gPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuYWxlcnRSdWxlcy5zZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUuYWxlcnRSdWxlcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChpdGVtLm5hbWUpIHx8IHJlZ2V4LnRlc3QoaXRlbS5zdGF0ZVRleHQpIHx8IHJlZ2V4LnRlc3QoaXRlbS5pbmZvISk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5vdGlmaWNhdGlvbkNoYW5uZWwgPSAoc3RhdGU6IE5vdGlmaWNhdGlvbkNoYW5uZWxTdGF0ZSwgY2hhbm5lbElkOiBudW1iZXIpID0+IHtcbiAgaWYgKHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWwuaWQgPT09IGNoYW5uZWxJZCkge1xuICAgIHJldHVybiBzdGF0ZS5ub3RpZmljYXRpb25DaGFubmVsO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIExpbmtCdXR0b24sIHVzZVN0eWxlczIsIHdpdGhFcnJvckJvdW5kYXJ5IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5cbmltcG9ydCB7IEFsZXJ0aW5nUGFnZVdyYXBwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlcic7XG5pbXBvcnQgeyBOb1J1bGVzU3BsYXNoIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL05vUnVsZXNDVEEnO1xuaW1wb3J0IHsgUnVsZUxpc3RFcnJvcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RFcnJvcnMnO1xuaW1wb3J0IHsgUnVsZUxpc3RHcm91cFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RHcm91cFZpZXcnO1xuaW1wb3J0IHsgUnVsZUxpc3RTdGF0ZVZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RTdGF0ZVZpZXcnO1xuaW1wb3J0IHsgUnVsZVN0YXRzIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVTdGF0cyc7XG5pbXBvcnQgUnVsZXNGaWx0ZXIgZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVzRmlsdGVyJztcbmltcG9ydCB7IHVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMgfSBmcm9tICcuL2hvb2tzL3VzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMnO1xuaW1wb3J0IHsgdXNlRmlsdGVyZWRSdWxlcyB9IGZyb20gJy4vaG9va3MvdXNlRmlsdGVyZWRSdWxlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZmV0Y2hBbGxQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VSdWxlc0FjY2VzcyB9IGZyb20gJy4vdXRpbHMvYWNjZXNzQ29udHJvbEhvb2tzJztcbmltcG9ydCB7IFJVTEVfTElTVF9QT0xMX0lOVEVSVkFMX01TIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0QWxsUnVsZXNTb3VyY2VOYW1lcyB9IGZyb20gJy4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyB9IGZyb20gJy4vdXRpbHMvbWlzYyc7XG5cbmNvbnN0IFZJRVdTID0ge1xuICBncm91cHM6IFJ1bGVMaXN0R3JvdXBWaWV3LFxuICBzdGF0ZTogUnVsZUxpc3RTdGF0ZVZpZXcsXG59O1xuXG5jb25zdCBSdWxlTGlzdCA9IHdpdGhFcnJvckJvdW5kYXJ5KFxuICAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgICBjb25zdCBydWxlc0RhdGFTb3VyY2VOYW1lcyA9IHVzZU1lbW8oZ2V0QWxsUnVsZXNTb3VyY2VOYW1lcywgW10pO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgICBjb25zdCBbZXhwYW5kQWxsLCBzZXRFeHBhbmRBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gICAgY29uc3QgZmlsdGVycyA9IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zKHF1ZXJ5UGFyYW1zKTtcbiAgICBjb25zdCBmaWx0ZXJzQWN0aXZlID0gT2JqZWN0LnZhbHVlcyhmaWx0ZXJzKS5zb21lKChmaWx0ZXIpID0+IGZpbHRlciAhPT0gdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHsgY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzLCBjYW5DcmVhdGVDbG91ZFJ1bGVzIH0gPSB1c2VSdWxlc0FjY2VzcygpO1xuXG4gICAgY29uc3QgdmlldyA9IFZJRVdTW3F1ZXJ5UGFyYW1zWyd2aWV3J10gYXMga2V5b2YgdHlwZW9mIFZJRVdTXVxuICAgICAgPyAocXVlcnlQYXJhbXNbJ3ZpZXcnXSBhcyBrZXlvZiB0eXBlb2YgVklFV1MpXG4gICAgICA6ICdncm91cHMnO1xuXG4gICAgY29uc3QgVmlld0NvbXBvbmVudCA9IFZJRVdTW3ZpZXddO1xuXG4gICAgLy8gZmV0Y2ggcnVsZXMsIHRoZW4gcG9sbCBldmVyeSBSVUxFX0xJU1RfUE9MTF9JTlRFUlZBTF9NU1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaEFsbFByb21BbmRSdWxlclJ1bGVzQWN0aW9uKCkpO1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBkaXNwYXRjaChmZXRjaEFsbFByb21BbmRSdWxlclJ1bGVzQWN0aW9uKCkpLCBSVUxFX0xJU1RfUE9MTF9JTlRFUlZBTF9NUyk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH07XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgICBjb25zdCBwcm9tUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICAgIGNvbnN0IHJ1bGVyUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcblxuICAgIGNvbnN0IGRpc3BhdGNoZWQgPSBydWxlc0RhdGFTb3VyY2VOYW1lcy5zb21lKFxuICAgICAgKG5hbWUpID0+IHByb21SdWxlUmVxdWVzdHNbbmFtZV0/LmRpc3BhdGNoZWQgfHwgcnVsZXJSdWxlUmVxdWVzdHNbbmFtZV0/LmRpc3BhdGNoZWRcbiAgICApO1xuICAgIGNvbnN0IGxvYWRpbmcgPSBydWxlc0RhdGFTb3VyY2VOYW1lcy5zb21lKFxuICAgICAgKG5hbWUpID0+IHByb21SdWxlUmVxdWVzdHNbbmFtZV0/LmxvYWRpbmcgfHwgcnVsZXJSdWxlUmVxdWVzdHNbbmFtZV0/LmxvYWRpbmdcbiAgICApO1xuICAgIGNvbnN0IGhhdmVSZXN1bHRzID0gcnVsZXNEYXRhU291cmNlTmFtZXMuc29tZShcbiAgICAgIChuYW1lKSA9PlxuICAgICAgICAocHJvbVJ1bGVSZXF1ZXN0c1tuYW1lXT8ucmVzdWx0Py5sZW5ndGggJiYgIXByb21SdWxlUmVxdWVzdHNbbmFtZV0/LmVycm9yKSB8fFxuICAgICAgICAoT2JqZWN0LmtleXMocnVsZXJSdWxlUmVxdWVzdHNbbmFtZV0/LnJlc3VsdCB8fCB7fSkubGVuZ3RoICYmICFydWxlclJ1bGVSZXF1ZXN0c1tuYW1lXT8uZXJyb3IpXG4gICAgKTtcblxuICAgIGNvbnN0IHNob3dOZXdBbGVydFNwbGFzaCA9IGRpc3BhdGNoZWQgJiYgIWxvYWRpbmcgJiYgIWhhdmVSZXN1bHRzO1xuXG4gICAgY29uc3QgY29tYmluZWROYW1lc3BhY2VzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcygpO1xuICAgIGNvbnN0IGZpbHRlcmVkTmFtZXNwYWNlcyA9IHVzZUZpbHRlcmVkUnVsZXMoY29tYmluZWROYW1lc3BhY2VzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0aW5nUGFnZVdyYXBwZXIgcGFnZUlkPVwiYWxlcnQtbGlzdFwiIGlzTG9hZGluZz17bG9hZGluZyAmJiAhaGF2ZVJlc3VsdHN9PlxuICAgICAgICA8UnVsZUxpc3RFcnJvcnMgLz5cbiAgICAgICAgeyFzaG93TmV3QWxlcnRTcGxhc2ggJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UnVsZXNGaWx0ZXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJlYWt9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7dmlldyA9PT0gJ2dyb3VwcycgJiYgZmlsdGVyc0FjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmV4cGFuZEFsbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZXhwYW5kQWxsID8gJ2FuZ2xlLWRvdWJsZS11cCcgOiAnYW5nbGUtZG91YmxlLWRvd24nfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kQWxsKCFleHBhbmRBbGwpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZXhwYW5kQWxsID8gJ0NvbGxhcHNlIGFsbCcgOiAnRXhwYW5kIGFsbCd9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxSdWxlU3RhdHMgc2hvd0luYWN0aXZlPXt0cnVlfSBzaG93UmVjb3JkaW5nPXt0cnVlfSBuYW1lc3BhY2VzPXtmaWx0ZXJlZE5hbWVzcGFjZXN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7KGNhbkNyZWF0ZUdyYWZhbmFSdWxlcyB8fCBjYW5DcmVhdGVDbG91ZFJ1bGVzKSAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgIGhyZWY9e3VybFV0aWwucmVuZGVyVXJsKCdhbGVydGluZy9uZXcnLCB7IHJldHVyblRvOiBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCB9KX1cbiAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBOZXcgYWxlcnQgcnVsZVxuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvd05ld0FsZXJ0U3BsYXNoICYmIDxOb1J1bGVzU3BsYXNoIC8+fVxuICAgICAgICB7aGF2ZVJlc3VsdHMgJiYgPFZpZXdDb21wb25lbnQgZXhwYW5kQWxsPXtleHBhbmRBbGx9IG5hbWVzcGFjZXM9e2ZpbHRlcmVkTmFtZXNwYWNlc30gLz59XG4gICAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICAgKTtcbiAgfSxcbiAgeyBzdHlsZTogJ3BhZ2UnIH1cbik7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgYnJlYWs6IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gIGAsXG4gIGJ1dHRvbnNDb250YWluZXI6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBgLFxuICBzdGF0c0NvbnRhaW5lcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBgLFxuICBleHBhbmRBbGxCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VJZDogc3RyaW5nO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRpbmdQYWdlV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VJZCwgaXNMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChcbiAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KSxcbiAgICBwYWdlSWRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+e2NoaWxkcmVufTwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFjdGlvbnM6IEFjY2Vzc0NvbnRyb2xBY3Rpb25bXTtcbiAgZmFsbGJhY2s/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvcml6ZTogRkM8UHJvcHM+ID0gKHsgYWN0aW9ucywgY2hpbGRyZW4sIGZhbGxiYWNrID0gdHJ1ZSB9KSA9PiB7XG4gIGlmIChhY3Rpb25zLnNvbWUoKGFjdGlvbikgPT4gY29udGV4dFNydi5oYXNBY2Nlc3MoYWN0aW9uLCBmYWxsYmFjaykpKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRHluYW1pY1RhYmxlLCBEeW5hbWljVGFibGVQcm9wcyB9IGZyb20gJy4vRHluYW1pY1RhYmxlJztcblxuZXhwb3J0IHR5cGUgRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXNQcm9wczxUPiA9IE9taXQ8RHluYW1pY1RhYmxlUHJvcHM8VD4sICdyZW5kZXJQcmVmaXhIZWFkZXIsIHJlbmRlclByZWZpeENlbGwnPjtcblxuLy8gRHluYW1pY1RhYmxlLCBidXQgcmVuZGVycyB2aXN1YWwgZ3VpZGVsaW5lcyBvbiB0aGUgbGVmdCwgZm9yIGxhcmdlciBzY3JlZW4gd2lkdGhzXG5leHBvcnQgY29uc3QgRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXMgPSA8VCBleHRlbmRzIG9iamVjdD4oe1xuICByZW5kZXJFeHBhbmRlZENvbnRlbnQsXG4gIC4uLnByb3BzXG59OiBEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lc1Byb3BzPFQ+KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8RHluYW1pY1RhYmxlXG4gICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnQ9e1xuICAgICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnRcbiAgICAgICAgICA/IChpdGVtLCBpbmRleCwgaXRlbXMpID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7IShpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkgJiYgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250ZW50R3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz59XG4gICAgICAgICAgICAgICAge3JlbmRlckV4cGFuZGVkQ29udGVudChpdGVtLCBpbmRleCwgaXRlbXMpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAgcmVuZGVyUHJlZml4SGVhZGVyPXsoKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsYXRpdmV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuaGVhZGVyR3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgcmVuZGVyUHJlZml4Q2VsbD17KF8sIGluZGV4LCBpdGVtcykgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbGF0aXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnRvcEd1aWRlbGluZSwgc3R5bGVzLmd1aWRlbGluZSl9IC8+XG4gICAgICAgICAgeyEoaW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEpICYmIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYm90dG9tR3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgcmVsYXRpdmU6IGNzc2BcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICBgLFxuICBndWlkZWxpbmU6IGNzc2BcbiAgICBsZWZ0OiAtMTlweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICR7dGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKX0ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGAsXG4gIHRvcEd1aWRlbGluZTogY3NzYFxuICAgIHdpZHRoOiAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1MCU7XG4gIGAsXG4gIGJvdHRvbUd1aWRlbGluZTogY3NzYFxuICAgIHRvcDogNTAlO1xuICAgIGJvdHRvbTogMDtcbiAgYCxcbiAgY29udGVudEd1aWRlbGluZTogY3NzYFxuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTQ5cHggIWltcG9ydGFudDtcbiAgYCxcbiAgaGVhZGVyR3VpZGVsaW5lOiBjc3NgXG4gICAgdG9wOiAtMjVweDtcbiAgICBib3R0b206IDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VNYXAsIGxhbmd1YWdlcyBhcyBwcmlzbUxhbmd1YWdlcyB9IGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ0BncmFmYW5hL3NsYXRlLXJlYWN0JztcbmltcG9ydCB7IG1ha2VWYWx1ZSwgU2xhdGVQcmlzbSwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IExvZ3FsU3ludGF4IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS9zeW50YXgnO1xuaW1wb3J0IFByb21xbFN5bnRheCBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvcHJvbXFsJztcbmltcG9ydCB7IFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlVHlwZSwgaXNDbG91ZFJ1bGVzU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IFdlbGwgfSBmcm9tICcuL1dlbGwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBleHByZXNzaW9uOiBzdHJpbmc7XG4gIHJ1bGVzU291cmNlOiBSdWxlc1NvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodGVkUXVlcnk6IEZDPHsgbGFuZ3VhZ2U6ICdwcm9tcWwnIHwgJ2xvZ3FsJzsgZXhwcjogc3RyaW5nIH0+ID0gKHsgbGFuZ3VhZ2UsIGV4cHIgfSkgPT4ge1xuICBjb25zdCBwbHVnaW5zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICBTbGF0ZVByaXNtKFxuICAgICAgICB7XG4gICAgICAgICAgb25seUluOiAobm9kZTogYW55KSA9PiBub2RlLnR5cGUgPT09ICdjb2RlX2Jsb2NrJyxcbiAgICAgICAgICBnZXRTeW50YXg6ICgpID0+IGxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgICB7IC4uLihwcmlzbUxhbmd1YWdlcyBhcyBMYW5ndWFnZU1hcCksIFtsYW5ndWFnZV06IGxhbmd1YWdlID09PSAnbG9ncWwnID8gTG9ncWxTeW50YXggOiBQcm9tcWxTeW50YXggfVxuICAgICAgKSxcbiAgICBdLFxuICAgIFtsYW5ndWFnZV1cbiAgKTtcblxuICBjb25zdCBzbGF0ZVZhbHVlID0gdXNlTWVtbygoKSA9PiBtYWtlVmFsdWUoZXhwciksIFtleHByXSk7XG5cbiAgcmV0dXJuIDxFZGl0b3IgcGx1Z2lucz17cGx1Z2luc30gdmFsdWU9e3NsYXRlVmFsdWV9IHJlYWRPbmx5PXt0cnVlfSAvPjtcbn07XG5cbmV4cG9ydCBjb25zdCBFeHByZXNzaW9uOiBGQzxQcm9wcz4gPSAoeyBleHByZXNzaW9uOiBxdWVyeSwgcnVsZXNTb3VyY2UgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxXZWxsIGNsYXNzTmFtZT17Y3goc3R5bGVzLndlbGwsICdzbGF0ZS1xdWVyeS1maWVsZCcpfT5cbiAgICAgIHtpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gKFxuICAgICAgICA8SGlnaGxpZ2h0ZWRRdWVyeSBleHByPXtxdWVyeX0gbGFuZ3VhZ2U9e3J1bGVzU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlLkxva2kgPyAnbG9ncWwnIDogJ3Byb21xbCd9IC8+XG4gICAgICApIDogKFxuICAgICAgICBxdWVyeVxuICAgICAgKX1cbiAgICA8L1dlbGw+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIHdlbGw6IGNzc2BcbiAgICBmb250LWZhbWlseTogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkubW9ub3NwYWNlfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnQsIEJhZGdlIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgZW51bSBQcm92aXNpb25lZFJlc291cmNlIHtcbiAgQ29udGFjdFBvaW50ID0gJ2NvbnRhY3QgcG9pbnQnLFxuICBUZW1wbGF0ZSA9ICd0ZW1wbGF0ZScsXG4gIE11dGVUaW1pbmcgPSAnbXV0ZSB0aW1pbmcnLFxuICBBbGVydFJ1bGUgPSAnYWxlcnQgcnVsZScsXG4gIFJvb3ROb3RpZmljYXRpb25Qb2xpY3kgPSAncm9vdCBub3RpZmljYXRpb24gcG9saWN5Jyxcbn1cblxuaW50ZXJmYWNlIFByb3Zpc2lvbmluZ0FsZXJ0UHJvcHMge1xuICByZXNvdXJjZTogUHJvdmlzaW9uZWRSZXNvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IFByb3Zpc2lvbmluZ0FsZXJ0ID0gKHsgcmVzb3VyY2UgfTogUHJvdmlzaW9uaW5nQWxlcnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBbGVydCB0aXRsZT17YFRoaXMgJHtyZXNvdXJjZX0gY2Fubm90IGJlIGVkaXRlZCB0aHJvdWdoIHRoZSBVSWB9IHNldmVyaXR5PVwiaW5mb1wiPlxuICAgICAgVGhpcyB7cmVzb3VyY2V9IGhhcyBiZWVuIHByb3Zpc2lvbmVkLCB0aGF0IG1lYW5zIGl0IHdhcyBjcmVhdGVkIGJ5IGNvbmZpZy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzZXJ2ZXIgYWRtaW4gdG9cbiAgICAgIHVwZGF0ZSB0aGlzIHtyZXNvdXJjZX0uXG4gICAgPC9BbGVydD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm92aXNpb25pbmdCYWRnZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxCYWRnZSB0ZXh0PXsnUHJvdmlzaW9uZWQnfSBjb2xvcj17J3B1cnBsZSd9IC8+O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFJ1bGVMb2NhdGlvblByb3BzIHtcbiAgbmFtZXNwYWNlOiBzdHJpbmc7XG4gIGdyb3VwPzogc3RyaW5nO1xufVxuXG5jb25zdCBSdWxlTG9jYXRpb246IEZDPFJ1bGVMb2NhdGlvblByb3BzPiA9ICh7IG5hbWVzcGFjZSwgZ3JvdXAgfSkgPT4ge1xuICBpZiAoIWdyb3VwKSB7XG4gICAgcmV0dXJuIDw+e25hbWVzcGFjZX08Lz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bmFtZXNwYWNlfSA8SWNvbiBuYW1lPVwiYW5nbGUtcmlnaHRcIiAvPiB7Z3JvdXB9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgeyBSdWxlTG9jYXRpb24gfTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG50eXBlIFByb3BzID0ge1xuICBzdGF0dXM6IFByb21BbGVydGluZ1J1bGVTdGF0ZSB8ICduZXV0cmFsJztcbn07XG5cbmV4cG9ydCBjb25zdCBTdGF0ZUNvbG9yZWRUZXh0OiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgc3RhdHVzIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tzdGF0dXNdfT57Y2hpbGRyZW4gfHwgc3RhdHVzfTwvc3Bhbj47XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmVdOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnN1Y2Nlc3MudGV4dH07XG4gIGAsXG4gIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ106IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2FybmluZy50ZXh0fTtcbiAgYCxcbiAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmddOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmVycm9yLnRleHR9O1xuICBgLFxuICBuZXV0cmFsOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcbmltcG9ydCB7IExhYmVsLCBUb29sdGlwLCBJbnB1dCwgSWNvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBxdWVyeVN0cmluZz86IHN0cmluZztcbiAgZGVmYXVsdFF1ZXJ5U3RyaW5nPzogc3RyaW5nO1xuICBvbkZpbHRlckNoYW5nZTogKGZpbHRlclN0cmluZzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgTWF0Y2hlckZpbHRlciA9ICh7IGNsYXNzTmFtZSwgb25GaWx0ZXJDaGFuZ2UsIGRlZmF1bHRRdWVyeVN0cmluZywgcXVlcnlTdHJpbmcgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBvbkZpbHRlckNoYW5nZSh0YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBzZWFyY2hJY29uID0gPEljb24gbmFtZT17J3NlYXJjaCd9IC8+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPExhYmVsPlxuICAgICAgICA8U3RhY2sgZ2FwPXswLjV9PlxuICAgICAgICAgIDxzcGFuPlNlYXJjaCBieSBsYWJlbDwvc3Bhbj5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgRmlsdGVyIGFsZXJ0cyB1c2luZyBsYWJlbCBxdWVyeWluZywgZXg6XG4gICAgICAgICAgICAgICAgPHByZT57YHtzZXZlcml0eT1cImNyaXRpY2FsXCIsIGluc3RhbmNlPX5cImNsdXN0ZXItdXMtLitcIn1gfTwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBuYW1lPVwiaW5mby1jaXJjbGVcIiBzaXplPVwic21cIiAvPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvTGFiZWw+XG4gICAgICA8SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRRdWVyeVN0cmluZ31cbiAgICAgICAgdmFsdWU9e3F1ZXJ5U3RyaW5nfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICBkYXRhLXRlc3RpZD1cInNlYXJjaC1xdWVyeS1pbnB1dFwiXG4gICAgICAgIHByZWZpeD17c2VhcmNoSWNvbn1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXaWR0aH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGljb246IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgYCxcbiAgaW5wdXRXaWR0aDogY3NzYFxuICAgIHdpZHRoOiAzNDBweDtcbiAgICBmbGV4LWdyb3c6IDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSWNvbk5hbWUsIFRvb2x0aXAsIExpbmtCdXR0b24sIEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFBvcG92ZXJDb250ZW50LCBUb29sdGlwUGxhY2VtZW50IH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvVG9vbHRpcCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRvb2x0aXA6IFBvcG92ZXJDb250ZW50O1xuICBpY29uOiBJY29uTmFtZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB0b29sdGlwUGxhY2VtZW50PzogVG9vbHRpcFBsYWNlbWVudDtcbiAgdG8/OiBzdHJpbmc7XG4gIHRhcmdldD86IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gICdkYXRhLXRlc3RpZCc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25JY29uOiBGQzxQcm9wcz4gPSAoe1xuICB0b29sdGlwLFxuICBpY29uLFxuICB0byxcbiAgdGFyZ2V0LFxuICBvbkNsaWNrLFxuICBjbGFzc05hbWUsXG4gIHRvb2x0aXBQbGFjZW1lbnQgPSAndG9wJyxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICBjb25zdCBhcmlhTGFiZWwgPSB0eXBlb2YgdG9vbHRpcCA9PT0gJ3N0cmluZycgPyB0b29sdGlwIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXAgY29udGVudD17dG9vbHRpcH0gcGxhY2VtZW50PXt0b29sdGlwUGxhY2VtZW50fT5cbiAgICAgIHt0byA/IChcbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBocmVmPXt0b31cbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIHRhcmdldD17dGFyZ2V0fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEvc3JjJztcbmltcG9ydCB7IExhYmVsLCBSYWRpb0J1dHRvbkdyb3VwLCBUYWcsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZSwgUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuZXhwb3J0IHR5cGUgSW5zdGFuY2VTdGF0ZUZpbHRlciA9IEdyYWZhbmFBbGVydFN0YXRlIHwgUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLlBlbmRpbmcgfCBQcm9tQWxlcnRpbmdSdWxlU3RhdGUuRmlyaW5nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGZpbHRlclR5cGU6ICdncmFmYW5hJyB8ICdwcm9tZXRoZXVzJztcbiAgc3RhdGVGaWx0ZXI/OiBJbnN0YW5jZVN0YXRlRmlsdGVyO1xuICBvblN0YXRlRmlsdGVyQ2hhbmdlOiAodmFsdWU/OiBJbnN0YW5jZVN0YXRlRmlsdGVyKSA9PiB2b2lkO1xuICBpdGVtUGVyU3RhdGVTdGF0cz86IFJlY29yZDxzdHJpbmcsIG51bWJlcj47XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydEluc3RhbmNlU3RhdGVGaWx0ZXIgPSAoe1xuICBjbGFzc05hbWUsXG4gIG9uU3RhdGVGaWx0ZXJDaGFuZ2UsXG4gIHN0YXRlRmlsdGVyLFxuICBmaWx0ZXJUeXBlLFxuICBpdGVtUGVyU3RhdGVTdGF0cyxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBnZXRPcHRpb25Db21wb25lbnQgPSAoc3RhdGU6IEluc3RhbmNlU3RhdGVGaWx0ZXIpID0+IHtcbiAgICByZXR1cm4gZnVuY3Rpb24gSW5zdGFuY2VTdGF0ZUNvdW50ZXIoKSB7XG4gICAgICByZXR1cm4gaXRlbVBlclN0YXRlU3RhdHMgJiYgaXRlbVBlclN0YXRlU3RhdHNbc3RhdGVdID8gKFxuICAgICAgICA8VGFnIG5hbWU9e2l0ZW1QZXJTdGF0ZVN0YXRzW3N0YXRlXS50b0ZpeGVkKDApfSBjb2xvckluZGV4PXs5fSBjbGFzc05hbWU9e3N0eWxlcy50YWd9IC8+XG4gICAgICApIDogbnVsbDtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGdyYWZhbmFPcHRpb25zID0gT2JqZWN0LnZhbHVlcyhHcmFmYW5hQWxlcnRTdGF0ZSkubWFwKChzdGF0ZSkgPT4gKHtcbiAgICBsYWJlbDogc3RhdGUsXG4gICAgdmFsdWU6IHN0YXRlLFxuICAgIGNvbXBvbmVudDogZ2V0T3B0aW9uQ29tcG9uZW50KHN0YXRlKSxcbiAgfSkpO1xuXG4gIGNvbnN0IHByb21PcHRpb25WYWx1ZXMgPSBbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZywgUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLlBlbmRpbmddIGFzIGNvbnN0O1xuICBjb25zdCBwcm9tT3B0aW9ucyA9IHByb21PcHRpb25WYWx1ZXMubWFwKChzdGF0ZSkgPT4gKHtcbiAgICBsYWJlbDogY2FwaXRhbGl6ZShzdGF0ZSksXG4gICAgdmFsdWU6IHN0YXRlLFxuICAgIGNvbXBvbmVudDogZ2V0T3B0aW9uQ29tcG9uZW50KHN0YXRlKSxcbiAgfSkpO1xuXG4gIGNvbnN0IHN0YXRlT3B0aW9ucyA9IGZpbHRlclR5cGUgPT09ICdncmFmYW5hJyA/IGdyYWZhbmFPcHRpb25zIDogcHJvbU9wdGlvbnM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkYXRhLXRlc3RpZD1cImFsZXJ0LWluc3RhbmNlLXN0YXRlLWZpbHRlclwiPlxuICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgIG9wdGlvbnM9e3N0YXRlT3B0aW9uc31cbiAgICAgICAgdmFsdWU9e3N0YXRlRmlsdGVyfVxuICAgICAgICBvbkNoYW5nZT17b25TdGF0ZUZpbHRlckNoYW5nZX1cbiAgICAgICAgb25DbGljaz17KHYpID0+IHtcbiAgICAgICAgICBpZiAodiA9PT0gc3RhdGVGaWx0ZXIpIHtcbiAgICAgICAgICAgIG9uU3RhdGVGaWx0ZXJDaGFuZ2UodW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgdGFnOiBjc3NgXG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDAuMjUsIDAuNSl9O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZSc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IExvYWRpbmdQbGFjZWhvbGRlciwgUGFnaW5hdGlvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlUGFnaW5hdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVBhZ2luYXRpb24nO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBnZXRQYWdpbmF0aW9uU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgZ2V0UnVsZXNEYXRhU291cmNlcywgZ2V0UnVsZXNTb3VyY2VVaWQgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcblxuaW1wb3J0IHsgUnVsZXNHcm91cCB9IGZyb20gJy4vUnVsZXNHcm91cCc7XG5pbXBvcnQgeyB1c2VDb21iaW5lZEdyb3VwTmFtZXNwYWNlIH0gZnJvbSAnLi91c2VDb21iaW5lZEdyb3VwTmFtZXNwYWNlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG4gIGV4cGFuZEFsbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IENsb3VkUnVsZXM6IEZDPFByb3BzPiA9ICh7IG5hbWVzcGFjZXMsIGV4cGFuZEFsbCB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBydWxlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXNEYXRhU291cmNlcyA9IHVzZU1lbW8oZ2V0UnVsZXNEYXRhU291cmNlcywgW10pO1xuICBjb25zdCBncm91cHNXaXRoTmFtZXNwYWNlcyA9IHVzZUNvbWJpbmVkR3JvdXBOYW1lc3BhY2UobmFtZXNwYWNlcyk7XG5cbiAgY29uc3QgZGF0YVNvdXJjZXNMb2FkaW5nID0gdXNlTWVtbyhcbiAgICAoKSA9PiBydWxlc0RhdGFTb3VyY2VzLmZpbHRlcigoZHMpID0+IHJ1bGVzW2RzLm5hbWVdPy5sb2FkaW5nKSxcbiAgICBbcnVsZXMsIHJ1bGVzRGF0YVNvdXJjZXNdXG4gICk7XG5cbiAgY29uc3QgeyBudW1iZXJPZlBhZ2VzLCBvblBhZ2VDaGFuZ2UsIHBhZ2UsIHBhZ2VJdGVtcyB9ID0gdXNlUGFnaW5hdGlvbihcbiAgICBncm91cHNXaXRoTmFtZXNwYWNlcyxcbiAgICAxLFxuICAgIERFRkFVTFRfUEVSX1BBR0VfUEFHSU5BVElPTlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25IZWFkZXJ9PlxuICAgICAgICA8aDU+TWltaXIgLyBDb3J0ZXggLyBMb2tpPC9oNT5cbiAgICAgICAge2RhdGFTb3VyY2VzTG9hZGluZy5sZW5ndGggPyAoXG4gICAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfVxuICAgICAgICAgICAgdGV4dD17YExvYWRpbmcgcnVsZXMgZnJvbSAke2RhdGFTb3VyY2VzTG9hZGluZy5sZW5ndGh9ICR7cGx1cmFsaXplKCdzb3VyY2UnLCBkYXRhU291cmNlc0xvYWRpbmcubGVuZ3RoKX1gfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtwYWdlSXRlbXMubWFwKCh7IGdyb3VwLCBuYW1lc3BhY2UgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSdWxlc0dyb3VwXG4gICAgICAgICAgICBncm91cD17Z3JvdXB9XG4gICAgICAgICAgICBrZXk9e2Ake2dldFJ1bGVzU291cmNlVWlkKG5hbWVzcGFjZS5ydWxlc1NvdXJjZSl9LSR7bmFtZXNwYWNlLm5hbWV9LSR7Z3JvdXAubmFtZX1gfVxuICAgICAgICAgICAgbmFtZXNwYWNlPXtuYW1lc3BhY2V9XG4gICAgICAgICAgICBleHBhbmRBbGw9e2V4cGFuZEFsbH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICB7bmFtZXNwYWNlcz8ubGVuZ3RoID09PSAwICYmICEhcnVsZXNEYXRhU291cmNlcy5sZW5ndGggJiYgPHA+Tm8gcnVsZXMgZm91bmQuPC9wPn1cbiAgICAgIHshcnVsZXNEYXRhU291cmNlcy5sZW5ndGggJiYgPHA+VGhlcmUgYXJlIG5vIFByb21ldGhldXMgb3IgTG9raSBkYXRhIHNvdXJjZXMgY29uZmlndXJlZC48L3A+fVxuICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn1cbiAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XG4gICAgICAgIG51bWJlck9mUGFnZXM9e251bWJlck9mUGFnZXN9XG4gICAgICAgIG9uTmF2aWdhdGU9e29uUGFnZUNoYW5nZX1cbiAgICAgICAgaGlkZVdoZW5TaW5nbGVQYWdlXG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgbG9hZGVyOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYCxcbiAgc2VjdGlvbkhlYWRlcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBgLFxuICB3cmFwcGVyOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgYCxcbiAgcGFnaW5hdGlvbjogZ2V0UGFnaW5hdGlvblN0eWxlcyh0aGVtZSksXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEZvcm0sIEZpZWxkLCBJbnB1dCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZUNsZWFudXAgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VDbGVhbnVwJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZUdyb3VwLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgdXBkYXRlTG90ZXhOYW1lc3BhY2VBbmRHcm91cEFjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UnVsZXNTb3VyY2VOYW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi8uLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgeyBkdXJhdGlvblZhbGlkYXRpb25QYXR0ZXJuIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlO1xuICBncm91cDogQ29tYmluZWRSdWxlR3JvdXA7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBGb3JtVmFsdWVzIHtcbiAgbmFtZXNwYWNlTmFtZTogc3RyaW5nO1xuICBncm91cE5hbWU6IHN0cmluZztcbiAgZ3JvdXBJbnRlcnZhbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRWRpdENsb3VkR3JvdXBNb2RhbChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IG5hbWVzcGFjZSwgZ3JvdXAsIG9uQ2xvc2UgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGlzcGF0Y2hlZCB9ID1cbiAgICB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVwZGF0ZUxvdGV4TmFtZXNwYWNlQW5kR3JvdXApID8/IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcblxuICBjb25zdCBkZWZhdWx0VmFsdWVzID0gdXNlTWVtbyhcbiAgICAoKTogRm9ybVZhbHVlcyA9PiAoe1xuICAgICAgbmFtZXNwYWNlTmFtZTogbmFtZXNwYWNlLm5hbWUsXG4gICAgICBncm91cE5hbWU6IGdyb3VwLm5hbWUsXG4gICAgICBncm91cEludGVydmFsOiBncm91cC5pbnRlcnZhbCA/PyAnJyxcbiAgICB9KSxcbiAgICBbbmFtZXNwYWNlLCBncm91cF1cbiAgKTtcblxuICAvLyBjbG9zZSBtb2RhbCBpZiBzdWNjZXNzZnVsbHkgc2F2ZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlzcGF0Y2hlZCAmJiAhbG9hZGluZyAmJiAhZXJyb3IpIHtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaGVkLCBsb2FkaW5nLCBvbkNsb3NlLCBlcnJvcl0pO1xuXG4gIHVzZUNsZWFudXAoKHN0YXRlKSA9PiBzdGF0ZS51bmlmaWVkQWxlcnRpbmcudXBkYXRlTG90ZXhOYW1lc3BhY2VBbmRHcm91cCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzOiBGb3JtVmFsdWVzKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICB1cGRhdGVMb3RleE5hbWVzcGFjZUFuZEdyb3VwQWN0aW9uKHtcbiAgICAgICAgcnVsZXNTb3VyY2VOYW1lOiBnZXRSdWxlc1NvdXJjZU5hbWUobmFtZXNwYWNlLnJ1bGVzU291cmNlKSxcbiAgICAgICAgZ3JvdXBOYW1lOiBncm91cC5uYW1lLFxuICAgICAgICBuZXdHcm91cE5hbWU6IHZhbHVlcy5ncm91cE5hbWUsXG4gICAgICAgIG5hbWVzcGFjZU5hbWU6IG5hbWVzcGFjZS5uYW1lLFxuICAgICAgICBuZXdOYW1lc3BhY2VOYW1lOiB2YWx1ZXMubmFtZXNwYWNlTmFtZSxcbiAgICAgICAgZ3JvdXBJbnRlcnZhbDogdmFsdWVzLmdyb3VwSW50ZXJ2YWwgfHwgdW5kZWZpbmVkLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH1cbiAgICAgIGlzT3Blbj17dHJ1ZX1cbiAgICAgIHRpdGxlPVwiRWRpdCBuYW1lc3BhY2Ugb3IgcnVsZSBncm91cFwiXG4gICAgICBvbkRpc21pc3M9e29uQ2xvc2V9XG4gICAgICBvbkNsaWNrQmFja2Ryb3A9e29uQ2xvc2V9XG4gICAgPlxuICAgICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17ZGVmYXVsdFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fSBrZXk9e0pTT04uc3RyaW5naWZ5KGRlZmF1bHRWYWx1ZXMpfT5cbiAgICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMsIGZvcm1TdGF0ZTogeyBpc0RpcnR5IH0gfSkgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJOYW1lc3BhY2VcIiBpbnZhbGlkPXshIWVycm9ycy5uYW1lc3BhY2VOYW1lfSBlcnJvcj17ZXJyb3JzLm5hbWVzcGFjZU5hbWU/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVzcGFjZU5hbWVcIlxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZXNwYWNlTmFtZScsIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnTmFtZXNwYWNlIG5hbWUgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJSdWxlIGdyb3VwXCIgaW52YWxpZD17ISFlcnJvcnMuZ3JvdXBOYW1lfSBlcnJvcj17ZXJyb3JzLmdyb3VwTmFtZT8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiZ3JvdXBOYW1lXCJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2dyb3VwTmFtZScsIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnUnVsZSBncm91cCBuYW1lIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwiUnVsZSBncm91cCBldmFsdWF0aW9uIGludGVydmFsXCJcbiAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZ3JvdXBJbnRlcnZhbH1cbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5ncm91cEludGVydmFsPy5tZXNzYWdlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImdyb3VwSW50ZXJ2YWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMW1cIlxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZ3JvdXBJbnRlcnZhbCcsIHtcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IGR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4sXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e2xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xvc2V9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshaXNEaXJ0eSB8fCBsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICdTYXZpbmcuLi4nIDogJ1NhdmUgY2hhbmdlcyd9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm0+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgbW9kYWw6IGNzc2BcbiAgICBtYXgtd2lkdGg6IDU2MHB4O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIsIFBhZ2luYXRpb24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMgfSBmcm9tICcuLi8uLi9ob29rcy91c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzJztcbmltcG9ydCB7IHVzZVBhZ2luYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcy91c2VQYWdpbmF0aW9uJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZ2V0UGFnaW5hdGlvblN0eWxlcyB9IGZyb20gJy4uLy4uL3N0eWxlcy9wYWdpbmF0aW9uJztcbmltcG9ydCB7IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3JlZHV4JztcblxuaW1wb3J0IHsgUnVsZXNHcm91cCB9IGZyb20gJy4vUnVsZXNHcm91cCc7XG5pbXBvcnQgeyB1c2VDb21iaW5lZEdyb3VwTmFtZXNwYWNlIH0gZnJvbSAnLi91c2VDb21iaW5lZEdyb3VwTmFtZXNwYWNlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG4gIGV4cGFuZEFsbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEdyYWZhbmFSdWxlczogRkM8UHJvcHM+ID0gKHsgbmFtZXNwYWNlcywgZXhwYW5kQWxsIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbcXVlcnlQYXJhbXNdID0gdXNlUXVlcnlQYXJhbXMoKTtcblxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzW0dSQUZBTkFfUlVMRVNfU09VUkNFX05BTUVdIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZVxuICApO1xuXG4gIGNvbnN0IHdhbnRzR3JvdXBlZFZpZXcgPSBxdWVyeVBhcmFtc1sndmlldyddID09PSAnZ3JvdXBlZCc7XG4gIGNvbnN0IG5hbWVzcGFjZXNGb3JtYXQgPSB3YW50c0dyb3VwZWRWaWV3ID8gbmFtZXNwYWNlcyA6IGZsYXR0ZW5HcmFmYW5hTWFuYWdlZFJ1bGVzKG5hbWVzcGFjZXMpO1xuXG4gIGNvbnN0IGdyb3Vwc1dpdGhOYW1lc3BhY2VzID0gdXNlQ29tYmluZWRHcm91cE5hbWVzcGFjZShuYW1lc3BhY2VzRm9ybWF0KTtcblxuICBjb25zdCB7IG51bWJlck9mUGFnZXMsIG9uUGFnZUNoYW5nZSwgcGFnZSwgcGFnZUl0ZW1zIH0gPSB1c2VQYWdpbmF0aW9uKFxuICAgIGdyb3Vwc1dpdGhOYW1lc3BhY2VzLFxuICAgIDEsXG4gICAgREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbkhlYWRlcn0+XG4gICAgICAgIDxoNT5HcmFmYW5hPC9oNT5cbiAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ1BsYWNlaG9sZGVyIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0gdGV4dD1cIkxvYWRpbmcuLi5cIiAvPiA6IDxkaXYgLz59XG4gICAgICA8L2Rpdj5cblxuICAgICAge3BhZ2VJdGVtcy5tYXAoKHsgZ3JvdXAsIG5hbWVzcGFjZSB9KSA9PiAoXG4gICAgICAgIDxSdWxlc0dyb3VwIGdyb3VwPXtncm91cH0ga2V5PXtgJHtuYW1lc3BhY2UubmFtZX0tJHtncm91cC5uYW1lfWB9IG5hbWVzcGFjZT17bmFtZXNwYWNlfSBleHBhbmRBbGw9e2V4cGFuZEFsbH0gLz5cbiAgICAgICkpfVxuICAgICAge25hbWVzcGFjZXNGb3JtYXQ/Lmxlbmd0aCA9PT0gMCAmJiA8cD5ObyBydWxlcyBmb3VuZC48L3A+fVxuICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn1cbiAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XG4gICAgICAgIG51bWJlck9mUGFnZXM9e251bWJlck9mUGFnZXN9XG4gICAgICAgIG9uTmF2aWdhdGU9e29uUGFnZUNoYW5nZX1cbiAgICAgICAgaGlkZVdoZW5TaW5nbGVQYWdlXG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgbG9hZGVyOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYCxcbiAgc2VjdGlvbkhlYWRlcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBgLFxuICB3cmFwcGVyOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgYCxcbiAgcGFnaW5hdGlvbjogZ2V0UGFnaW5hdGlvblN0eWxlcyh0aGVtZSksXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2FsbFRvQWN0aW9uQ2FyZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcblxuaW1wb3J0IHsgdXNlUnVsZXNBY2Nlc3MgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3NDb250cm9sSG9va3MnO1xuXG5leHBvcnQgY29uc3QgTm9SdWxlc1NwbGFzaDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzLCBjYW5DcmVhdGVDbG91ZFJ1bGVzIH0gPSB1c2VSdWxlc0FjY2VzcygpO1xuXG4gIGlmIChjYW5DcmVhdGVHcmFmYW5hUnVsZXMgfHwgY2FuQ3JlYXRlQ2xvdWRSdWxlcykge1xuICAgIHJldHVybiAoXG4gICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgIHRpdGxlPVwiWW91IGhhdmVuYHQgY3JlYXRlZCBhbnkgYWxlcnQgcnVsZXMgeWV0XCJcbiAgICAgICAgYnV0dG9uSWNvbj1cImJlbGxcIlxuICAgICAgICBidXR0b25MaW5rPXsnYWxlcnRpbmcvbmV3J31cbiAgICAgICAgYnV0dG9uVGl0bGU9XCJOZXcgYWxlcnQgcnVsZVwiXG4gICAgICAgIHByb1RpcD1cInlvdSBjYW4gYWxzbyBjcmVhdGUgYWxlcnQgcnVsZXMgZnJvbSBleGlzdGluZyBwYW5lbHMgYW5kIHF1ZXJpZXMuXCJcbiAgICAgICAgcHJvVGlwTGluaz1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9cIlxuICAgICAgICBwcm9UaXBMaW5rVGl0bGU9XCJMZWFybiBtb3JlXCJcbiAgICAgICAgcHJvVGlwVGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gPENhbGxUb0FjdGlvbkNhcmQgbWVzc2FnZT1cIk5vIHJ1bGVzIGV4aXN0IHlldC5cIiBjYWxsVG9BY3Rpb25FbGVtZW50PXs8ZGl2IC8+fSAvPjtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBBbGVydExhYmVscyB9IGZyb20gJy4uL0FsZXJ0TGFiZWxzJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5cbmltcG9ydCB7IFJ1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucyB9IGZyb20gJy4vUnVsZURldGFpbHNBY3Rpb25CdXR0b25zJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzQW5ub3RhdGlvbnMgfSBmcm9tICcuL1J1bGVEZXRhaWxzQW5ub3RhdGlvbnMnO1xuaW1wb3J0IHsgUnVsZURldGFpbHNEYXRhU291cmNlcyB9IGZyb20gJy4vUnVsZURldGFpbHNEYXRhU291cmNlcyc7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc0V4cHJlc3Npb24gfSBmcm9tICcuL1J1bGVEZXRhaWxzRXhwcmVzc2lvbic7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzIH0gZnJvbSAnLi9SdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xufVxuXG4vLyBUaGUgbGltaXQgaXMgc2V0IHRvIDE1IGluIG9yZGVyIHRvIHVwa2VlcCB0aGUgZ29vZCBwZXJmb3JtYW5jZVxuLy8gYW5kIHRvIGVuY291cmFnZSB1c2VycyB0byBnbyB0byB0aGUgcnVsZSBkZXRhaWxzIHBhZ2UgdG8gc2VlIHRoZSByZXN0IG9mIHRoZSBpbnN0YW5jZXNcbi8vIFdlIGRvbid0IHdhbnQgdG8gcGFnaW5hdGUgdGhlIGluc3RhbmNlcyBsaXN0IG9uIHRoZSBhbGVydCBsaXN0IHBhZ2VcbmNvbnN0IElOU1RBTkNFU19ESVNQTEFZX0xJTUlUID0gMTU7XG5cbmV4cG9ydCBjb25zdCBSdWxlRGV0YWlsczogRkM8UHJvcHM+ID0gKHsgcnVsZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3Qge1xuICAgIG5hbWVzcGFjZTogeyBydWxlc1NvdXJjZSB9LFxuICB9ID0gcnVsZTtcblxuICBjb25zdCBhbm5vdGF0aW9ucyA9IE9iamVjdC5lbnRyaWVzKHJ1bGUuYW5ub3RhdGlvbnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gISF2YWx1ZS50cmltKCkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMgcnVsZT17cnVsZX0gcnVsZXNTb3VyY2U9e3J1bGVzU291cmNlfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0U2lkZX0+XG4gICAgICAgICAgeyEhcnVsZS5sYWJlbHMgJiYgISFPYmplY3Qua2V5cyhydWxlLmxhYmVscykubGVuZ3RoICYmIChcbiAgICAgICAgICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJMYWJlbHNcIiBob3Jpem9udGFsPXt0cnVlfT5cbiAgICAgICAgICAgICAgPEFsZXJ0TGFiZWxzIGxhYmVscz17cnVsZS5sYWJlbHN9IC8+XG4gICAgICAgICAgICA8L0RldGFpbHNGaWVsZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxSdWxlRGV0YWlsc0V4cHJlc3Npb24gcnVsZXNTb3VyY2U9e3J1bGVzU291cmNlfSBydWxlPXtydWxlfSBhbm5vdGF0aW9ucz17YW5ub3RhdGlvbnN9IC8+XG4gICAgICAgICAgPFJ1bGVEZXRhaWxzQW5ub3RhdGlvbnMgYW5ub3RhdGlvbnM9e2Fubm90YXRpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFNpZGV9PlxuICAgICAgICAgIDxSdWxlRGV0YWlsc0RhdGFTb3VyY2VzIHJ1bGVzU291cmNlPXtydWxlc1NvdXJjZX0gcnVsZT17cnVsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxSdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzIHJ1bGU9e3J1bGV9IGl0ZW1zRGlzcGxheUxpbWl0PXtJTlNUQU5DRVNfRElTUExBWV9MSU1JVH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAke3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyl9IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICBgLFxuICBsZWZ0U2lkZTogY3NzYFxuICAgIGZsZXg6IDE7XG4gIGAsXG4gIHJpZ2h0U2lkZTogY3NzYFxuICAgICR7dGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyl9IHtcbiAgICAgIHBhZGRpbmctbGVmdDogOTBweDtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICB9XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIENsaXBib2FyZEJ1dHRvbiwgQ29uZmlybU1vZGFsLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VBcHBOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyB1c2VJc1J1bGVFZGl0YWJsZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzUnVsZUVkaXRhYmxlJztcbmltcG9ydCB7IHVzZVN0YXRlSGlzdG9yeU1vZGFsIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlU3RhdGVIaXN0b3J5TW9kYWwnO1xuaW1wb3J0IHsgZGVsZXRlUnVsZUFjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxlcnRtYW5hZ2VyQnlVaWQgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgQW5ub3RhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRSdWxlc1NvdXJjZU5hbWUsIGlzQ2xvdWRSdWxlc1NvdXJjZSwgaXNHcmFmYW5hUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGNyZWF0ZUV4cGxvcmVMaW5rLCBjcmVhdGVWaWV3TGluaywgbWFrZVJ1bGVCYXNlZFNpbGVuY2VMaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgKiBhcyBydWxlSWQgZnJvbSAnLi4vLi4vdXRpbHMvcnVsZS1pZCc7XG5pbXBvcnQgeyBpc0ZlZGVyYXRlZFJ1bGVHcm91cCwgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG4gIHJ1bGVzU291cmNlOiBSdWxlc1NvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVEZXRhaWxzQWN0aW9uQnV0dG9uczogRkM8UHJvcHM+ID0gKHsgcnVsZSwgcnVsZXNTb3VyY2UgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IHN0eWxlID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCB7IG5hbWVzcGFjZSwgZ3JvdXAsIHJ1bGVyUnVsZSB9ID0gcnVsZTtcbiAgY29uc3QgW3J1bGVUb0RlbGV0ZSwgc2V0UnVsZVRvRGVsZXRlXSA9IHVzZVN0YXRlPENvbWJpbmVkUnVsZT4oKTtcbiAgY29uc3QgYWxlcnRJZCA9IGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlLnJ1bGVyUnVsZSkgPyBydWxlLnJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0LmlkID8/ICcnIDogJyc7XG4gIGNvbnN0IHsgU3RhdGVIaXN0b3J5TW9kYWwsIHNob3dTdGF0ZUhpc3RvcnlNb2RhbCB9ID0gdXNlU3RhdGVIaXN0b3J5TW9kYWwoYWxlcnRJZCk7XG5cbiAgY29uc3QgYWxlcnRtYW5hZ2VyU291cmNlTmFtZSA9IGlzR3JhZmFuYVJ1bGVzU291cmNlKHJ1bGVzU291cmNlKVxuICAgID8gcnVsZXNTb3VyY2VcbiAgICA6IGdldEFsZXJ0bWFuYWdlckJ5VWlkKHJ1bGVzU291cmNlLmpzb25EYXRhLmFsZXJ0bWFuYWdlclVpZCk/Lm5hbWU7XG4gIGNvbnN0IHJ1bGVzU291cmNlTmFtZSA9IGdldFJ1bGVzU291cmNlTmFtZShydWxlc1NvdXJjZSk7XG5cbiAgY29uc3QgaGFzRXhwbG9yZVBlcm1pc3Npb24gPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc0V4cGxvcmUpO1xuICBjb25zdCBpc1Byb3Zpc2lvbmVkID0gaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUucnVsZXJSdWxlKSAmJiBCb29sZWFuKHJ1bGUucnVsZXJSdWxlLmdyYWZhbmFfYWxlcnQucHJvdmVuYW5jZSk7XG5cbiAgY29uc3QgbGVmdEJ1dHRvbnM6IEpTWC5FbGVtZW50W10gPSBbXTtcbiAgY29uc3QgcmlnaHRCdXR0b25zOiBKU1guRWxlbWVudFtdID0gW107XG5cbiAgY29uc3QgaXNGZWRlcmF0ZWQgPSBpc0ZlZGVyYXRlZFJ1bGVHcm91cChncm91cCk7XG4gIGNvbnN0IHsgaXNFZGl0YWJsZSwgaXNSZW1vdmFibGUgfSA9IHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVzU291cmNlTmFtZSwgcnVsZXJSdWxlKTtcbiAgY29uc3QgcmV0dXJuVG8gPSBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgaXNWaWV3TW9kZSA9IGluVmlld01vZGUobG9jYXRpb24ucGF0aG5hbWUpO1xuXG4gIGNvbnN0IGRlbGV0ZVJ1bGUgPSAoKSA9PiB7XG4gICAgaWYgKHJ1bGVUb0RlbGV0ZSAmJiBydWxlVG9EZWxldGUucnVsZXJSdWxlKSB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gcnVsZUlkLmZyb21SdWxlclJ1bGUoXG4gICAgICAgIGdldFJ1bGVzU291cmNlTmFtZShydWxlVG9EZWxldGUubmFtZXNwYWNlLnJ1bGVzU291cmNlKSxcbiAgICAgICAgcnVsZVRvRGVsZXRlLm5hbWVzcGFjZS5uYW1lLFxuICAgICAgICBydWxlVG9EZWxldGUuZ3JvdXAubmFtZSxcbiAgICAgICAgcnVsZVRvRGVsZXRlLnJ1bGVyUnVsZVxuICAgICAgKTtcblxuICAgICAgZGlzcGF0Y2goZGVsZXRlUnVsZUFjdGlvbihpZGVudGlmaWVyLCB7IG5hdmlnYXRlVG86IGlzVmlld01vZGUgPyAnL2FsZXJ0aW5nL2xpc3QnIDogdW5kZWZpbmVkIH0pKTtcbiAgICAgIHNldFJ1bGVUb0RlbGV0ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidWlsZFNoYXJlVXJsID0gKCkgPT4ge1xuICAgIGlmIChpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgICBjb25zdCB7IGFwcFVybCwgYXBwU3ViVXJsIH0gPSBjb25maWc7XG4gICAgICBjb25zdCBiYXNlVXJsID0gYXBwU3ViVXJsICE9PSAnJyA/IGAke2FwcFVybH0ke2FwcFN1YlVybH0vYCA6IGNvbmZpZy5hcHBVcmw7XG4gICAgICBjb25zdCBydWxlVXJsID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KHJ1bGVzU291cmNlLm5hbWUpfS8ke2VuY29kZVVSSUNvbXBvbmVudChydWxlLm5hbWUpfWA7XG4gICAgICByZXR1cm4gYCR7YmFzZVVybH1hbGVydGluZy8ke3J1bGVVcmx9L2ZpbmRgO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICB9O1xuXG4gIC8vIGV4cGxvcmUgZG9lcyBub3Qgc3VwcG9ydCBncmFmYW5hIHJ1bGUgcXVlcmllcyBhdG1cbiAgLy8gbmVpdGhlciBkbyBcImZlZGVyYXRlZCBydWxlc1wiXG4gIGlmIChpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpICYmIGhhc0V4cGxvcmVQZXJtaXNzaW9uICYmICFpc0ZlZGVyYXRlZCkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwiZXhwbG9yZVwiXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgaWNvbj1cImNoYXJ0LWxpbmVcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgaHJlZj17Y3JlYXRlRXhwbG9yZUxpbmsocnVsZXNTb3VyY2UubmFtZSwgcnVsZS5xdWVyeSl9XG4gICAgICA+XG4gICAgICAgIFNlZSBncmFwaFxuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cbiAgaWYgKHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5ydW5ib29rVVJMXSkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwicnVuYm9va1wiXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgaWNvbj1cImJvb2tcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgaHJlZj17cnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLnJ1bmJvb2tVUkxdfVxuICAgICAgPlxuICAgICAgICBWaWV3IHJ1bmJvb2tcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG4gIGlmIChydWxlLmFubm90YXRpb25zW0Fubm90YXRpb24uZGFzaGJvYXJkVUlEXSkge1xuICAgIGNvbnN0IGRhc2hib2FyZFVJRCA9IHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5kYXNoYm9hcmRVSURdO1xuICAgIGlmIChkYXNoYm9hcmRVSUQpIHtcbiAgICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICBrZXk9XCJkYXNoYm9hcmRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpY29uPVwiYXBwc1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgICAgaHJlZj17YGQvJHtlbmNvZGVVUklDb21wb25lbnQoZGFzaGJvYXJkVUlEKX1gfVxuICAgICAgICA+XG4gICAgICAgICAgR28gdG8gZGFzaGJvYXJkXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICk7XG4gICAgICBjb25zdCBwYW5lbElkID0gcnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLnBhbmVsSURdO1xuICAgICAgaWYgKHBhbmVsSWQpIHtcbiAgICAgICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAga2V5PVwicGFuZWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgaWNvbj1cImFwcHNcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgICAgICBocmVmPXtgZC8ke2VuY29kZVVSSUNvbXBvbmVudChkYXNoYm9hcmRVSUQpfT92aWV3UGFuZWw9JHtlbmNvZGVVUklDb21wb25lbnQocGFuZWxJZCl9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBHbyB0byBwYW5lbFxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWxlcnRtYW5hZ2VyU291cmNlTmFtZSAmJiBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nSW5zdGFuY2VDcmVhdGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpKSB7XG4gICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICBrZXk9XCJzaWxlbmNlXCJcbiAgICAgICAgaWNvbj1cImJlbGwtc2xhc2hcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgaHJlZj17bWFrZVJ1bGVCYXNlZFNpbGVuY2VMaW5rKGFsZXJ0bWFuYWdlclNvdXJjZU5hbWUsIHJ1bGUpfVxuICAgICAgPlxuICAgICAgICBTaWxlbmNlXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChhbGVydElkKSB7XG4gICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgIDxGcmFnbWVudCBrZXk9XCJoaXN0b3J5XCI+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IHNpemU9XCJ4c1wiIGljb249XCJoaXN0b3J5XCIgb25DbGljaz17KCkgPT4gc2hvd1N0YXRlSGlzdG9yeU1vZGFsKCl9PlxuICAgICAgICAgIFNob3cgc3RhdGUgaGlzdG9yeVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAge1N0YXRlSGlzdG9yeU1vZGFsfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFpc1ZpZXdNb2RlKSB7XG4gICAgcmlnaHRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwidmlld1wiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICBpY29uPVwiZXllXCJcbiAgICAgICAgaHJlZj17Y3JlYXRlVmlld0xpbmsocnVsZXNTb3VyY2UsIHJ1bGUsIHJldHVyblRvKX1cbiAgICAgID5cbiAgICAgICAgVmlld1xuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAoaXNFZGl0YWJsZSAmJiBydWxlclJ1bGUgJiYgIWlzRmVkZXJhdGVkICYmICFpc1Byb3Zpc2lvbmVkKSB7XG4gICAgY29uc3Qgc291cmNlTmFtZSA9IGdldFJ1bGVzU291cmNlTmFtZShydWxlc1NvdXJjZSk7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC5mcm9tUnVsZXJSdWxlKHNvdXJjZU5hbWUsIG5hbWVzcGFjZS5uYW1lLCBncm91cC5uYW1lLCBydWxlclJ1bGUpO1xuXG4gICAgY29uc3QgZWRpdFVSTCA9IHVybFV0aWwucmVuZGVyVXJsKFxuICAgICAgYCR7Y29uZmlnLmFwcFN1YlVybH0vYWxlcnRpbmcvJHtlbmNvZGVVUklDb21wb25lbnQocnVsZUlkLnN0cmluZ2lmeUlkZW50aWZpZXIoaWRlbnRpZmllcikpfS9lZGl0YCxcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuVG8sXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChpc1ZpZXdNb2RlKSB7XG4gICAgICByaWdodEJ1dHRvbnMucHVzaChcbiAgICAgICAgPENsaXBib2FyZEJ1dHRvblxuICAgICAgICAgIGtleT1cImNvcHlcIlxuICAgICAgICAgIG9uQ2xpcGJvYXJkQ29weT17KCkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5QXBwLnN1Y2Nlc3MoJ1VSTCBjb3BpZWQhJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsaXBib2FyZEVycm9yPXsoY29waWVkVGV4dCkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5QXBwLmVycm9yKCdFcnJvciB3aGlsZSBjb3B5aW5nIFVSTCcsIGNvcGllZFRleHQpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBnZXRUZXh0PXtidWlsZFNoYXJlVXJsfVxuICAgICAgICA+XG4gICAgICAgICAgQ29weSBsaW5rIHRvIHJ1bGVcbiAgICAgICAgPC9DbGlwYm9hcmRCdXR0b24+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJpZ2h0QnV0dG9ucy5wdXNoKFxuICAgICAgPExpbmtCdXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IHNpemU9XCJ4c1wiIGtleT1cImVkaXRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWNvbj1cInBlblwiIGhyZWY9e2VkaXRVUkx9PlxuICAgICAgICBFZGl0XG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChpc1JlbW92YWJsZSAmJiBydWxlclJ1bGUgJiYgIWlzRmVkZXJhdGVkICYmICFpc1Byb3Zpc2lvbmVkKSB7XG4gICAgcmlnaHRCdXR0b25zLnB1c2goXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAga2V5PVwiZGVsZXRlXCJcbiAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSdWxlVG9EZWxldGUocnVsZSl9XG4gICAgICA+XG4gICAgICAgIERlbGV0ZVxuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChsZWZ0QnV0dG9ucy5sZW5ndGggfHwgcmlnaHRCdXR0b25zLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XG4gICAgICAgICAgPEhvcml6b250YWxHcm91cCB3aWR0aD1cImF1dG9cIj57bGVmdEJ1dHRvbnMubGVuZ3RoID8gbGVmdEJ1dHRvbnMgOiA8ZGl2IC8+fTwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgd2lkdGg9XCJhdXRvXCI+e3JpZ2h0QnV0dG9ucy5sZW5ndGggPyByaWdodEJ1dHRvbnMgOiA8ZGl2IC8+fTwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyEhcnVsZVRvRGVsZXRlICYmIChcbiAgICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBydWxlXCJcbiAgICAgICAgICAgIGJvZHk9XCJEZWxldGluZyB0aGlzIHJ1bGUgd2lsbCBwZXJtYW5lbnRseSByZW1vdmUgaXQgZnJvbSB5b3VyIGFsZXJ0IHJ1bGUgbGlzdC4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJ1bGU/XCJcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0PVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgICAgaWNvbj1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJcbiAgICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlUnVsZX1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0UnVsZVRvRGVsZXRlKHVuZGVmaW5lZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGluVmlld01vZGUocGF0aG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aG5hbWUuZW5kc1dpdGgoJy92aWV3Jyk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICBgLFxuICBidXR0b246IGNzc2BcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEFubm90YXRpb25EZXRhaWxzRmllbGQgfSBmcm9tICcuLi9Bbm5vdGF0aW9uRGV0YWlsc0ZpZWxkJztcblxudHlwZSBQcm9wcyA9IHtcbiAgYW5ub3RhdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVEZXRhaWxzQW5ub3RhdGlvbnMocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyBhbm5vdGF0aW9ucyB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBpZiAoYW5ub3RhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5ub3RhdGlvbnN9PlxuICAgICAge2Fubm90YXRpb25zLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoXG4gICAgICAgIDxBbm5vdGF0aW9uRGV0YWlsc0ZpZWxkIGtleT17a2V5fSBhbm5vdGF0aW9uS2V5PXtrZXl9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiAoe1xuICBhbm5vdGF0aW9uczogY3NzYFxuICAgIG1hcmdpbi10b3A6IDQ2cHg7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEV4cHJlc3Npb25EYXRhc291cmNlVUlEIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL0V4cHJlc3Npb25EYXRhc291cmNlJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSwgUnVsZXNTb3VyY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5cbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vRGV0YWlsc0ZpZWxkJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2U7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZURldGFpbHNEYXRhU291cmNlcyhwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHJ1bGVzU291cmNlLCBydWxlIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGRhdGFTb3VyY2VzOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgaWNvbj86IHN0cmluZyB9PiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgICByZXR1cm4gW3sgbmFtZTogcnVsZXNTb3VyY2UubmFtZSwgaWNvbjogcnVsZXNTb3VyY2UubWV0YS5pbmZvLmxvZ29zLnNtYWxsIH1dO1xuICAgIH1cblxuICAgIGlmIChpc0dyYWZhbmFSdWxlclJ1bGUocnVsZS5ydWxlclJ1bGUpKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJ1bGUucnVsZXJSdWxlLmdyYWZhbmFfYWxlcnQ7XG4gICAgICBjb25zdCB1bmlxdWUgPSBkYXRhLnJlZHVjZSgoZGF0YVNvdXJjZXMsIHF1ZXJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRzID0gZ2V0RGF0YVNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MocXVlcnkuZGF0YXNvdXJjZVVpZCk7XG5cbiAgICAgICAgaWYgKCFkcyB8fCBkcy51aWQgPT09IEV4cHJlc3Npb25EYXRhc291cmNlVUlEKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVNvdXJjZXNbZHMubmFtZV0gPSB7IG5hbWU6IGRzLm5hbWUsIGljb246IGRzLm1ldGEuaW5mby5sb2dvcy5zbWFsbCB9O1xuICAgICAgICByZXR1cm4gZGF0YVNvdXJjZXM7XG4gICAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCB7IG5hbWU6IHN0cmluZzsgaWNvbj86IHN0cmluZyB9Pik7XG5cbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHVuaXF1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9LCBbcnVsZSwgcnVsZXNTb3VyY2VdKTtcblxuICBpZiAoZGF0YVNvdXJjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJEYXRhIHNvdXJjZVwiPlxuICAgICAge2RhdGFTb3VyY2VzLm1hcCgoeyBuYW1lLCBpY29uIH0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtuYW1lfT5cbiAgICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aW1nIGFsdD17YCR7bmFtZX0gZGF0YXNvdXJjZSBsb2dvYH0gY2xhc3NOYW1lPXtzdHlsZXMuZGF0YVNvdXJjZUljb259IHNyYz17aWNvbn0gLz57JyAnfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0RldGFpbHNGaWVsZD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIGNvbnN0IHNpemUgPSB0aGVtZS5zcGFjaW5nKDIpO1xuXG4gIHJldHVybiB7XG4gICAgZGF0YVNvdXJjZUljb246IGNzc2BcbiAgICAgIHdpZHRoOiAke3NpemV9O1xuICAgICAgaGVpZ2h0OiAke3NpemV9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbWJpbmVkUnVsZSwgUnVsZXNTb3VyY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5cbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vRGV0YWlsc0ZpZWxkJztcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICcuLi9FeHByZXNzaW9uJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2U7XG4gIGFubm90YXRpb25zOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlRGV0YWlsc0V4cHJlc3Npb24ocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyBhbm5vdGF0aW9ucywgcnVsZXNTb3VyY2UsIHJ1bGUgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoKTtcblxuICBpZiAoIWlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIkV4cHJlc3Npb25cIiBob3Jpem9udGFsPXt0cnVlfSBjbGFzc05hbWU9e2N4KHsgW3N0eWxlcy5leHByUm93XTogISFhbm5vdGF0aW9ucy5sZW5ndGggfSl9PlxuICAgICAgPEV4cHJlc3Npb24gZXhwcmVzc2lvbj17cnVsZS5xdWVyeX0gcnVsZXNTb3VyY2U9e3J1bGVzU291cmNlfSAvPlxuICAgIDwvRGV0YWlsc0ZpZWxkPlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiAoe1xuICBleHByUm93OiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogNDZweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBjb3VudEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBMaW5rQnV0dG9uLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBNYXRjaGVyRmlsdGVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlcic7XG5pbXBvcnQge1xuICBBbGVydEluc3RhbmNlU3RhdGVGaWx0ZXIsXG4gIEluc3RhbmNlU3RhdGVGaWx0ZXIsXG59IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyJztcbmltcG9ydCB7IGxhYmVsc01hdGNoTWF0Y2hlcnMsIHBhcnNlTWF0Y2hlcnMgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgY3JlYXRlVmlld0xpbmssIHNvcnRBbGVydHMgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9taXNjJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJ2FwcC9wbHVnaW5zL3BhbmVsL2FsZXJ0bGlzdC90eXBlcyc7XG5pbXBvcnQgeyBBbGVydCwgQ29tYmluZWRSdWxlLCBQYWdpbmF0aW9uUHJvcHMgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBtYXBTdGF0ZVdpdGhSZWFzb25Ub0Jhc2VTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsIGlzR3JhZmFuYVJ1bGVzU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5cbmltcG9ydCB7IEFsZXJ0SW5zdGFuY2VzVGFibGUgfSBmcm9tICcuL0FsZXJ0SW5zdGFuY2VzVGFibGUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG4gIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uUHJvcHM7XG4gIGl0ZW1zRGlzcGxheUxpbWl0PzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgU2hvd01vcmVTdGF0cyB7XG4gIHRvdGFsSXRlbXNDb3VudDogbnVtYmVyO1xuICB2aXNpYmxlSXRlbXNDb3VudDogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBTaG93TW9yZUluc3RhbmNlcyhwcm9wczogeyBydWxlVmlld1BhZ2VMaW5rOiBzdHJpbmc7IHN0YXRzOiBTaG93TW9yZVN0YXRzIH0pIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgcnVsZVZpZXdQYWdlTGluaywgc3RhdHMgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJSb3d9PlxuICAgICAgPGRpdj5cbiAgICAgICAgU2hvd2luZyB7c3RhdHMudmlzaWJsZUl0ZW1zQ291bnR9IG91dCBvZiB7c3RhdHMudG90YWxJdGVtc0NvdW50fSBpbnN0YW5jZXNcbiAgICAgIDwvZGl2PlxuICAgICAge3J1bGVWaWV3UGFnZUxpbmsgJiYgKFxuICAgICAgICA8TGlua0J1dHRvbiBocmVmPXtydWxlVmlld1BhZ2VMaW5rfSBzaXplPVwic21cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgU2hvdyBhbGwge3N0YXRzLnRvdGFsSXRlbXNDb3VudH0gYWxlcnQgaW5zdGFuY2VzXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHtcbiAgICBydWxlOiB7IHByb21SdWxlLCBuYW1lc3BhY2UgfSxcbiAgICBpdGVtc0Rpc3BsYXlMaW1pdCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICBwYWdpbmF0aW9uLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3F1ZXJ5U3RyaW5nLCBzZXRRdWVyeVN0cmluZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFthbGVydFN0YXRlLCBzZXRBbGVydFN0YXRlXSA9IHVzZVN0YXRlPEluc3RhbmNlU3RhdGVGaWx0ZXI+KCk7XG5cbiAgLy8gVGhpcyBrZXkgaXMgdXNlZCB0byBmb3JjZSBhIHJlcmVuZGVyIG9uIHRoZSBpbnB1dHMgd2hlbiB0aGUgZmlsdGVycyBhcmUgY2xlYXJlZFxuICBjb25zdCBbZmlsdGVyS2V5XSA9IHVzZVN0YXRlPG51bWJlcj4oTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nS2V5ID0gYHF1ZXJ5U3RyaW5nLSR7ZmlsdGVyS2V5fWA7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgc3RhdGVGaWx0ZXJUeXBlID0gaXNHcmFmYW5hUnVsZXNTb3VyY2UobmFtZXNwYWNlLnJ1bGVzU291cmNlKSA/IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgOiAncHJvbWV0aGV1cyc7XG5cbiAgY29uc3QgYWxlcnRzID0gdXNlTWVtbyhcbiAgICAoKTogQWxlcnRbXSA9PlxuICAgICAgaXNBbGVydGluZ1J1bGUocHJvbVJ1bGUpICYmIHByb21SdWxlLmFsZXJ0cz8ubGVuZ3RoXG4gICAgICAgID8gZmlsdGVyQWxlcnRzKHF1ZXJ5U3RyaW5nLCBhbGVydFN0YXRlLCBzb3J0QWxlcnRzKFNvcnRPcmRlci5JbXBvcnRhbmNlLCBwcm9tUnVsZS5hbGVydHMpKVxuICAgICAgICA6IFtdLFxuICAgIFtwcm9tUnVsZSwgYWxlcnRTdGF0ZSwgcXVlcnlTdHJpbmddXG4gICk7XG5cbiAgaWYgKCFpc0FsZXJ0aW5nUnVsZShwcm9tUnVsZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHZpc2libGVJbnN0YW5jZXMgPSBhbGVydHMuc2xpY2UoMCwgaXRlbXNEaXNwbGF5TGltaXQpO1xuXG4gIGNvbnN0IGNvdW50QWxsQnlTdGF0ZSA9IGNvdW50QnkocHJvbVJ1bGUuYWxlcnRzLCAoYWxlcnQpID0+IG1hcFN0YXRlV2l0aFJlYXNvblRvQmFzZVN0YXRlKGFsZXJ0LnN0YXRlKSk7XG4gIGNvbnN0IGhpZGRlbkl0ZW1zQ291bnQgPSBhbGVydHMubGVuZ3RoIC0gdmlzaWJsZUluc3RhbmNlcy5sZW5ndGg7XG5cbiAgY29uc3Qgc3RhdHM6IFNob3dNb3JlU3RhdHMgPSB7XG4gICAgdG90YWxJdGVtc0NvdW50OiBhbGVydHMubGVuZ3RoLFxuICAgIHZpc2libGVJdGVtc0NvdW50OiB2aXNpYmxlSW5zdGFuY2VzLmxlbmd0aCxcbiAgfTtcblxuICBjb25zdCBydWxlVmlld1BhZ2VMaW5rID0gY3JlYXRlVmlld0xpbmsobmFtZXNwYWNlLnJ1bGVzU291cmNlLCBwcm9wcy5ydWxlLCBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgY29uc3QgZm9vdGVyUm93ID0gaGlkZGVuSXRlbXNDb3VudCA/IChcbiAgICA8U2hvd01vcmVJbnN0YW5jZXMgc3RhdHM9e3N0YXRzfSBydWxlVmlld1BhZ2VMaW5rPXtydWxlVmlld1BhZ2VMaW5rfSAvPlxuICApIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIk1hdGNoaW5nIGluc3RhbmNlc1wiIGhvcml6b250YWw9e3RydWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93LCBzdHlsZXMuc3BhY2VCZXR3ZWVuKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgPE1hdGNoZXJGaWx0ZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfVxuICAgICAgICAgICAga2V5PXtxdWVyeVN0cmluZ0tleX1cbiAgICAgICAgICAgIGRlZmF1bHRRdWVyeVN0cmluZz17cXVlcnlTdHJpbmd9XG4gICAgICAgICAgICBvbkZpbHRlckNoYW5nZT17KHZhbHVlKSA9PiBzZXRRdWVyeVN0cmluZyh2YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH1cbiAgICAgICAgICAgIGZpbHRlclR5cGU9e3N0YXRlRmlsdGVyVHlwZX1cbiAgICAgICAgICAgIHN0YXRlRmlsdGVyPXthbGVydFN0YXRlfVxuICAgICAgICAgICAgb25TdGF0ZUZpbHRlckNoYW5nZT17c2V0QWxlcnRTdGF0ZX1cbiAgICAgICAgICAgIGl0ZW1QZXJTdGF0ZVN0YXRzPXtjb3VudEFsbEJ5U3RhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEFsZXJ0SW5zdGFuY2VzVGFibGUgaW5zdGFuY2VzPXt2aXNpYmxlSW5zdGFuY2VzfSBwYWdpbmF0aW9uPXtwYWdpbmF0aW9ufSBmb290ZXJSb3c9e2Zvb3RlclJvd30gLz5cbiAgICA8L0RldGFpbHNGaWVsZD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyQWxlcnRzKFxuICBhbGVydEluc3RhbmNlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgYWxlcnRJbnN0YW5jZVN0YXRlOiBJbnN0YW5jZVN0YXRlRmlsdGVyIHwgdW5kZWZpbmVkLFxuICBhbGVydHM6IEFsZXJ0W11cbik6IEFsZXJ0W10ge1xuICBsZXQgZmlsdGVyZWRBbGVydHMgPSBbLi4uYWxlcnRzXTtcbiAgaWYgKGFsZXJ0SW5zdGFuY2VMYWJlbCkge1xuICAgIGNvbnN0IG1hdGNoZXJzID0gcGFyc2VNYXRjaGVycyhhbGVydEluc3RhbmNlTGFiZWwgfHwgJycpO1xuICAgIGZpbHRlcmVkQWxlcnRzID0gZmlsdGVyZWRBbGVydHMuZmlsdGVyKCh7IGxhYmVscyB9KSA9PiBsYWJlbHNNYXRjaE1hdGNoZXJzKGxhYmVscywgbWF0Y2hlcnMpKTtcbiAgfVxuICBpZiAoYWxlcnRJbnN0YW5jZVN0YXRlKSB7XG4gICAgZmlsdGVyZWRBbGVydHMgPSBmaWx0ZXJlZEFsZXJ0cy5maWx0ZXIoKGFsZXJ0KSA9PiB7XG4gICAgICByZXR1cm4gbWFwU3RhdGVXaXRoUmVhc29uVG9CYXNlU3RhdGUoYWxlcnQuc3RhdGUpID09PSBhbGVydEluc3RhbmNlU3RhdGU7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRBbGVydHM7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmxleFJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBzcGFjZUJldHdlZW46IGNzc2BcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBgLFxuICAgIHJvd0NoaWxkOiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBmb290ZXJSb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgVG9vbHRpcCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFJ1bGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5cbmludGVyZmFjZSBQcm9tIHtcbiAgcnVsZTogUnVsZTtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVIZWFsdGg6IEZDPFByb20+ID0gKHsgcnVsZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0gdXNlU3R5bGVzMihnZXRTdHlsZSk7XG4gIGlmIChydWxlLmhlYWx0aCA9PT0gJ2VycicgfHwgcnVsZS5oZWFsdGggPT09ICdlcnJvcicpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2x0aXAgdGhlbWU9XCJlcnJvclwiIGNvbnRlbnQ9e3J1bGUubGFzdEVycm9yIHx8ICdObyBlcnJvciBtZXNzYWdlIHByb3ZpZGVkLid9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud2Fybn0+XG4gICAgICAgICAgPEljb24gbmFtZT1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgICAgICA8c3Bhbj5lcnJvcjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gPD57cnVsZS5oZWFsdGh9PC8+O1xufTtcblxuY29uc3QgZ2V0U3R5bGUgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdhcm46IGNzc2BcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53YXJuaW5nLnRleHR9O1xuICAgICYgPiAqICsgKiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBTZXJpYWxpemVkRXJyb3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlLCBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBUb29sdGlwLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGdldFJ1bGVzRGF0YVNvdXJjZXMsIEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVMaXN0RXJyb3JzKCk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2xvc2VkLCBzZXRDbG9zZWRdID0gdXNlTG9jYWxTdG9yYWdlKCdncmFmYW5hLnVuaWZpZWRhbGVydGluZy5oaWRlRXJyb3JzJywgZmFsc2UpO1xuICBjb25zdCBkYXRhU291cmNlQ29uZmlnUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzKTtcbiAgY29uc3QgcHJvbVJ1bGVSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJ1bGVyUnVsZXMpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgZXJyb3JzID0gdXNlTWVtbygoKTogSlNYLkVsZW1lbnRbXSA9PiB7XG4gICAgY29uc3QgW2RhdGFTb3VyY2VDb25maWdFcnJvcnMsIHByb21SZXF1ZXN0RXJyb3JzLCBydWxlclJlcXVlc3RFcnJvcnNdID0gW1xuICAgICAgZGF0YVNvdXJjZUNvbmZpZ1JlcXVlc3RzLFxuICAgICAgcHJvbVJ1bGVSZXF1ZXN0cyxcbiAgICAgIHJ1bGVyUnVsZVJlcXVlc3RzLFxuICAgIF0ubWFwKChyZXF1ZXN0cykgPT5cbiAgICAgIGdldFJ1bGVzRGF0YVNvdXJjZXMoKS5yZWR1Y2U8QXJyYXk8eyBlcnJvcjogU2VyaWFsaXplZEVycm9yOyBkYXRhU291cmNlOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyB9Pj4oXG4gICAgICAgIChyZXN1bHQsIGRhdGFTb3VyY2UpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IHJlcXVlc3RzW2RhdGFTb3VyY2UubmFtZV0/LmVycm9yO1xuICAgICAgICAgIGlmIChyZXF1ZXN0c1tkYXRhU291cmNlLm5hbWVdICYmIGVycm9yICYmICFpc1J1bGVyTm90U3VwcG9ydGVkUmVzcG9uc2UocmVxdWVzdHNbZGF0YVNvdXJjZS5uYW1lXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4ucmVzdWx0LCB7IGRhdGFTb3VyY2UsIGVycm9yIH1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgICk7XG4gICAgY29uc3QgZ3JhZmFuYVByb21FcnJvciA9IHByb21SdWxlUmVxdWVzdHNbR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRV0/LmVycm9yO1xuICAgIGNvbnN0IGdyYWZhbmFSdWxlckVycm9yID0gcnVsZXJSdWxlUmVxdWVzdHNbR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRV0/LmVycm9yO1xuXG4gICAgY29uc3QgcmVzdWx0OiBKU1guRWxlbWVudFtdID0gW107XG5cbiAgICBpZiAoZ3JhZmFuYVByb21FcnJvcikge1xuICAgICAgcmVzdWx0LnB1c2goPD5GYWlsZWQgdG8gbG9hZCBHcmFmYW5hIHJ1bGVzIHN0YXRlOiB7Z3JhZmFuYVByb21FcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9PC8+KTtcbiAgICB9XG4gICAgaWYgKGdyYWZhbmFSdWxlckVycm9yKSB7XG4gICAgICByZXN1bHQucHVzaCg8PkZhaWxlZCB0byBsb2FkIEdyYWZhbmEgcnVsZXMgY29uZmlnOiB7Z3JhZmFuYVJ1bGVyRXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvci4nfTwvPik7XG4gICAgfVxuXG4gICAgZGF0YVNvdXJjZUNvbmZpZ0Vycm9ycy5mb3JFYWNoKCh7IGRhdGFTb3VyY2UsIGVycm9yIH0pID0+IHtcbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICA8PlxuICAgICAgICAgIEZhaWxlZCB0byBsb2FkIHRoZSBkYXRhIHNvdXJjZSBjb25maWd1cmF0aW9uIGZvcnsnICd9XG4gICAgICAgICAgPGEgaHJlZj17YGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH1gfT57ZGF0YVNvdXJjZS5uYW1lfTwvYT46IHtlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHByb21SZXF1ZXN0RXJyb3JzLmZvckVhY2goKHsgZGF0YVNvdXJjZSwgZXJyb3IgfSkgPT5cbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICA8PlxuICAgICAgICAgIEZhaWxlZCB0byBsb2FkIHJ1bGVzIHN0YXRlIGZyb20gPGEgaHJlZj17YGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH1gfT57ZGF0YVNvdXJjZS5uYW1lfTwvYT46eycgJ31cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvci4nfVxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICApO1xuXG4gICAgcnVsZXJSZXF1ZXN0RXJyb3JzLmZvckVhY2goKHsgZGF0YVNvdXJjZSwgZXJyb3IgfSkgPT5cbiAgICAgIHJlc3VsdC5wdXNoKFxuICAgICAgICA8PlxuICAgICAgICAgIEZhaWxlZCB0byBsb2FkIHJ1bGVzIGNvbmZpZyBmcm9tIDxhIGhyZWY9e2BkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9YH0+e2RhdGFTb3VyY2UubmFtZX08L2E+OnsnICd9XG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3IuJ31cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFtkYXRhU291cmNlQ29uZmlnUmVxdWVzdHMsIHByb21SdWxlUmVxdWVzdHMsIHJ1bGVyUnVsZVJlcXVlc3RzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyEhZXJyb3JzLmxlbmd0aCAmJiBjbG9zZWQgJiYgKFxuICAgICAgICA8RXJyb3JTdW1tYXJ5QnV0dG9uIGNvdW50PXtlcnJvcnMubGVuZ3RofSBvbkNsaWNrPXsoKSA9PiBzZXRDbG9zZWQoKGNsb3NlZCkgPT4gIWNsb3NlZCl9IC8+XG4gICAgICApfVxuICAgICAgeyEhZXJyb3JzLmxlbmd0aCAmJiAhY2xvc2VkICYmIChcbiAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJjbG91ZC1ydWxlc3NvdXJjZS1lcnJvcnNcIlxuICAgICAgICAgIHRpdGxlPVwiRXJyb3JzIGxvYWRpbmcgcnVsZXNcIlxuICAgICAgICAgIHNldmVyaXR5PVwiZXJyb3JcIlxuICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBzZXRDbG9zZWQodHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7ZXhwYW5kZWQgJiYgZXJyb3JzLm1hcCgoaXRlbSwgaWR4KSA9PiA8ZGl2IGtleT17aWR4fT57aXRlbX08L2Rpdj4pfVxuICAgICAgICAgIHshZXhwYW5kZWQgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdj57ZXJyb3JzWzBdfTwvZGl2PlxuICAgICAgICAgICAgICB7ZXJyb3JzLmxlbmd0aCA+PSAyICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb3JlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImFuZ2xlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCh0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLmxlbmd0aCAtIDF9IG1vcmUge3BsdXJhbGl6ZSgnZXJyb3InLCBlcnJvcnMubGVuZ3RoIC0gMSl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuaW50ZXJmYWNlIEVycm9yU3VtbWFyeVByb3BzIHtcbiAgY291bnQ6IG51bWJlcjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgRXJyb3JTdW1tYXJ5QnV0dG9uOiBGQzxFcnJvclN1bW1hcnlQcm9wcz4gPSAoeyBjb3VudCwgb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxvYXRSaWdodH0+XG4gICAgICA8VG9vbHRpcCBjb250ZW50PVwiU2hvdyBhbGwgZXJyb3JzXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XG4gICAgICAgIDxCdXR0b24gZmlsbD1cInRleHRcIiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICB7Y291bnQgPiAxID8gPD57Y291bnR9IGVycm9yczwvPiA6IDw+MSBlcnJvcjwvPn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIG1vcmVCdXR0b246IGNzc2BcbiAgICBwYWRkaW5nOiAwO1xuICBgLFxuICBmbG9hdFJpZ2h0OiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlTmFtZXNwYWNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBpc0Nsb3VkUnVsZXNTb3VyY2UsIGlzR3JhZmFuYVJ1bGVzU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBBdXRob3JpemUgfSBmcm9tICcuLi9BdXRob3JpemUnO1xuXG5pbXBvcnQgeyBDbG91ZFJ1bGVzIH0gZnJvbSAnLi9DbG91ZFJ1bGVzJztcbmltcG9ydCB7IEdyYWZhbmFSdWxlcyB9IGZyb20gJy4vR3JhZmFuYVJ1bGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG4gIGV4cGFuZEFsbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVMaXN0R3JvdXBWaWV3OiBGQzxQcm9wcz4gPSAoeyBuYW1lc3BhY2VzLCBleHBhbmRBbGwgfSkgPT4ge1xuICBjb25zdCBbZ3JhZmFuYU5hbWVzcGFjZXMsIGNsb3VkTmFtZXNwYWNlc10gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzb3J0ZWQgPSBuYW1lc3BhY2VzXG4gICAgICAubWFwKChuYW1lc3BhY2UpID0+ICh7XG4gICAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXBzOiBuYW1lc3BhY2UuZ3JvdXBzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpLFxuICAgICAgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIHNvcnRlZC5maWx0ZXIoKG5zKSA9PiBpc0dyYWZhbmFSdWxlc1NvdXJjZShucy5ydWxlc1NvdXJjZSkpLFxuICAgICAgc29ydGVkLmZpbHRlcigobnMpID0+IGlzQ2xvdWRSdWxlc1NvdXJjZShucy5ydWxlc1NvdXJjZSkpLFxuICAgIF07XG4gIH0sIFtuYW1lc3BhY2VzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbQWNjZXNzQ29udHJvbEFjdGlvbi5BbGVydGluZ1J1bGVSZWFkXX0+XG4gICAgICAgIDxHcmFmYW5hUnVsZXMgbmFtZXNwYWNlcz17Z3JhZmFuYU5hbWVzcGFjZXN9IGV4cGFuZEFsbD17ZXhwYW5kQWxsfSAvPlxuICAgICAgPC9BdXRob3JpemU+XG4gICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1tBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nUnVsZUV4dGVybmFsUmVhZF19PlxuICAgICAgICA8Q2xvdWRSdWxlcyBuYW1lc3BhY2VzPXtjbG91ZE5hbWVzcGFjZXN9IGV4cGFuZEFsbD17ZXhwYW5kQWxsfSAvPlxuICAgICAgPC9BdXRob3JpemU+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBhbGVydFN0YXRlVG9SZWFkYWJsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IENvbGxhcHNlVG9nZ2xlIH0gZnJvbSAnLi4vQ29sbGFwc2VUb2dnbGUnO1xuXG5pbXBvcnQgeyBSdWxlc1RhYmxlIH0gZnJvbSAnLi9SdWxlc1RhYmxlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZXM6IENvbWJpbmVkUnVsZVtdO1xuICBzdGF0ZTogUHJvbUFsZXJ0aW5nUnVsZVN0YXRlO1xuICBkZWZhdWx0Q29sbGFwc2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVMaXN0U3RhdGVTZWN0aW9uOiBGQzxQcm9wcz4gPSAoeyBydWxlcywgc3RhdGUsIGRlZmF1bHRDb2xsYXBzZWQgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShkZWZhdWx0Q29sbGFwc2VkKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPENvbGxhcHNlVG9nZ2xlXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VUb2dnbGV9XG4gICAgICAgICAgc2l6ZT1cInh4bFwiXG4gICAgICAgICAgaXNDb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICAgICAgICBvblRvZ2dsZT17KCkgPT4gc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpfVxuICAgICAgICAvPlxuICAgICAgICB7YWxlcnRTdGF0ZVRvUmVhZGFibGUoc3RhdGUpfSAoe3J1bGVzLmxlbmd0aH0pXG4gICAgICA8L2g0PlxuICAgICAgeyFjb2xsYXBzZWQgJiYgPFJ1bGVzVGFibGUgY2xhc3NOYW1lPXtzdHlsZXMucnVsZXNUYWJsZX0gcnVsZXM9e3J1bGVzfSBzaG93R3JvdXBDb2x1bW49e3RydWV9IC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb2xsYXBzZVRvZ2dsZTogY3NzYFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGAsXG4gIGhlYWRlcjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG4gIHJ1bGVzVGFibGU6IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5cbmltcG9ydCB7IFJ1bGVMaXN0U3RhdGVTZWN0aW9uIH0gZnJvbSAnLi9SdWxlTGlzdFN0YXRlU2VjdGlvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWVzcGFjZXM6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xuICBleHBhbmRBbGw/OiBib29sZWFuO1xufVxuXG50eXBlIEdyb3VwZWRSdWxlcyA9IFJlY29yZDxQcm9tQWxlcnRpbmdSdWxlU3RhdGUsIENvbWJpbmVkUnVsZVtdPjtcblxuZXhwb3J0IGNvbnN0IFJ1bGVMaXN0U3RhdGVWaWV3OiBGQzxQcm9wcz4gPSAoeyBuYW1lc3BhY2VzIH0pID0+IHtcbiAgY29uc3QgZmlsdGVycyA9IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zKHVzZVF1ZXJ5UGFyYW1zKClbMF0pO1xuXG4gIGNvbnN0IGdyb3VwZWRSdWxlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogR3JvdXBlZFJ1bGVzID0ge1xuICAgICAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmddOiBbXSxcbiAgICAgIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmVdOiBbXSxcbiAgICAgIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ106IFtdLFxuICAgIH07XG5cbiAgICBuYW1lc3BhY2VzLmZvckVhY2goKG5hbWVzcGFjZSkgPT5cbiAgICAgIG5hbWVzcGFjZS5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+XG4gICAgICAgIGdyb3VwLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgICBpZiAocnVsZS5wcm9tUnVsZSAmJiBpc0FsZXJ0aW5nUnVsZShydWxlLnByb21SdWxlKSkge1xuICAgICAgICAgICAgcmVzdWx0W3J1bGUucHJvbVJ1bGUuc3RhdGVdLnB1c2gocnVsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG5cbiAgICBPYmplY3QudmFsdWVzKHJlc3VsdCkuZm9yRWFjaCgocnVsZXMpID0+IHJ1bGVzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIFtuYW1lc3BhY2VzXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsoIWZpbHRlcnMuYWxlcnRTdGF0ZSB8fCBmaWx0ZXJzLmFsZXJ0U3RhdGUgPT09IFByb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmcpICYmIChcbiAgICAgICAgPFJ1bGVMaXN0U3RhdGVTZWN0aW9uIHN0YXRlPXtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuRmlyaW5nfSBydWxlcz17Z3JvdXBlZFJ1bGVzW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmddfSAvPlxuICAgICAgKX1cbiAgICAgIHsoIWZpbHRlcnMuYWxlcnRTdGF0ZSB8fCBmaWx0ZXJzLmFsZXJ0U3RhdGUgPT09IFByb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nKSAmJiAoXG4gICAgICAgIDxSdWxlTGlzdFN0YXRlU2VjdGlvblxuICAgICAgICAgIHN0YXRlPXtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ31cbiAgICAgICAgICBydWxlcz17Z3JvdXBlZFJ1bGVzW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nXX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7KCFmaWx0ZXJzLmFsZXJ0U3RhdGUgfHwgZmlsdGVycy5hbGVydFN0YXRlID09PSBQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmUpICYmIChcbiAgICAgICAgPFJ1bGVMaXN0U3RhdGVTZWN0aW9uXG4gICAgICAgICAgZGVmYXVsdENvbGxhcHNlZD17ZmlsdGVycy5hbGVydFN0YXRlICE9PSBQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmV9XG4gICAgICAgICAgc3RhdGU9e1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZX1cbiAgICAgICAgICBydWxlcz17Z3JvdXBlZFJ1bGVzW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZV19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIFNwaW5uZXIsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSwgaXNSZWNvcmRpbmdSdWxlLCBnZXRGaXJzdEFjdGl2ZUF0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyBBbGVydFN0YXRlVGFnIH0gZnJvbSAnLi9BbGVydFN0YXRlVGFnJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xuICBpc0RlbGV0aW5nOiBib29sZWFuO1xuICBpc0NyZWF0aW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZVN0YXRlOiBGQzxQcm9wcz4gPSAoeyBydWxlLCBpc0RlbGV0aW5nLCBpc0NyZWF0aW5nIH0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB1c2VTdHlsZXMyKGdldFN0eWxlKTtcbiAgY29uc3QgeyBwcm9tUnVsZSB9ID0gcnVsZTtcblxuICAvLyByZXR1cm4gaG93IGxvbmcgdGhlIHJ1bGUgaGFzIGJlZW4gaW4gaXQncyBmaXJpbmcgc3RhdGUsIGlmIGFueVxuICBjb25zdCBmb3JUaW1lID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcHJvbVJ1bGUgJiZcbiAgICAgIGlzQWxlcnRpbmdSdWxlKHByb21SdWxlKSAmJlxuICAgICAgcHJvbVJ1bGUuYWxlcnRzPy5sZW5ndGggJiZcbiAgICAgIHByb21SdWxlLnN0YXRlICE9PSBQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmVcbiAgICApIHtcbiAgICAgIC8vIGZpbmQgZWFybGllc3QgYWxlcnRcbiAgICAgIGNvbnN0IGZpcnN0QWN0aXZlQXQgPSBnZXRGaXJzdEFjdGl2ZUF0KHByb21SdWxlKTtcblxuICAgICAgLy8gY2FsY3VsYXRlIHRpbWUgZWxhcHNlZCBmcm9tIGVhcmxpZXN0IGFsZXJ0XG4gICAgICBpZiAoZmlyc3RBY3RpdmVBdCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzcGFuIHRpdGxlPXtTdHJpbmcoZmlyc3RBY3RpdmVBdCl9IGNsYXNzTmFtZT17c3R5bGUuZm9yfT5cbiAgICAgICAgICAgIGZvcnsnICd9XG4gICAgICAgICAgICB7aW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmcoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogZmlyc3RBY3RpdmVBdCxcbiAgICAgICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIFtwcm9tUnVsZSwgc3R5bGVdKTtcblxuICBpZiAoaXNEZWxldGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICBkZWxldGluZ1xuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChpc0NyZWF0aW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIGNyZWF0aW5nXG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9IGVsc2UgaWYgKHByb21SdWxlICYmIGlzQWxlcnRpbmdSdWxlKHByb21SdWxlKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICA8QWxlcnRTdGF0ZVRhZyBzdGF0ZT17cHJvbVJ1bGUuc3RhdGV9IC8+XG4gICAgICAgIHtmb3JUaW1lfVxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChwcm9tUnVsZSAmJiBpc1JlY29yZGluZ1J1bGUocHJvbVJ1bGUpKSB7XG4gICAgcmV0dXJuIDw+UmVjb3JkaW5nIHJ1bGU8Lz47XG4gIH1cbiAgcmV0dXJuIDw+bi9hPC8+O1xufTtcblxuY29uc3QgZ2V0U3R5bGUgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGZvcjogY3NzYFxuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gIGAsXG59KTtcbiIsImltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcbmltcG9ydCBSZWFjdCwgeyBGQywgRnJhZ21lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbWJpbmVkUnVsZSwgQ29tYmluZWRSdWxlR3JvdXAsIENvbWJpbmVkUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlLCBpc1JlY29yZGluZ1J1bGUsIGlzUmVjb3JkaW5nUnVsZXJSdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgU3RhdGVDb2xvcmVkVGV4dCB9IGZyb20gJy4uL1N0YXRlQ29sb3JlZFRleHQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaG93SW5hY3RpdmU/OiBib29sZWFuO1xuICBzaG93UmVjb3JkaW5nPzogYm9vbGVhbjtcbiAgZ3JvdXA/OiBDb21iaW5lZFJ1bGVHcm91cDtcbiAgbmFtZXNwYWNlcz86IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xufVxuXG5jb25zdCBlbXB0eVN0YXRzID0ge1xuICB0b3RhbDogMCxcbiAgcmVjb3JkaW5nOiAwLFxuICBbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZ106IDAsXG4gIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ106IDAsXG4gIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmVdOiAwLFxuICBlcnJvcjogMCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBSdWxlU3RhdHM6IEZDPFByb3BzPiA9ICh7IHNob3dJbmFjdGl2ZSwgc2hvd1JlY29yZGluZywgZ3JvdXAsIG5hbWVzcGFjZXMgfSkgPT4ge1xuICBjb25zdCBjYWxjdWxhdGVkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3RhdHMgPSB7IC4uLmVtcHR5U3RhdHMgfTtcbiAgICBjb25zdCBjYWxjUnVsZSA9IChydWxlOiBDb21iaW5lZFJ1bGUpID0+IHtcbiAgICAgIGlmIChydWxlLnByb21SdWxlICYmIGlzQWxlcnRpbmdSdWxlKHJ1bGUucHJvbVJ1bGUpKSB7XG4gICAgICAgIHN0YXRzW3J1bGUucHJvbVJ1bGUuc3RhdGVdICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAocnVsZS5wcm9tUnVsZT8uaGVhbHRoID09PSAnZXJyJyB8fCBydWxlLnByb21SdWxlPy5oZWFsdGggPT09ICdlcnJvcicpIHtcbiAgICAgICAgc3RhdHMuZXJyb3IgKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHJ1bGUucHJvbVJ1bGUgJiYgaXNSZWNvcmRpbmdSdWxlKHJ1bGUucHJvbVJ1bGUpKSB8fFxuICAgICAgICAocnVsZS5ydWxlclJ1bGUgJiYgaXNSZWNvcmRpbmdSdWxlclJ1bGUocnVsZS5ydWxlclJ1bGUpKVxuICAgICAgKSB7XG4gICAgICAgIHN0YXRzLnJlY29yZGluZyArPSAxO1xuICAgICAgfVxuICAgICAgc3RhdHMudG90YWwgKz0gMTtcbiAgICB9O1xuICAgIGlmIChncm91cCkge1xuICAgICAgZ3JvdXAucnVsZXMuZm9yRWFjaChjYWxjUnVsZSk7XG4gICAgfVxuICAgIGlmIChuYW1lc3BhY2VzKSB7XG4gICAgICBuYW1lc3BhY2VzLmZvckVhY2goKG5hbWVzcGFjZSkgPT4gbmFtZXNwYWNlLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4gZ3JvdXAucnVsZXMuZm9yRWFjaChjYWxjUnVsZSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRzO1xuICB9LCBbZ3JvdXAsIG5hbWVzcGFjZXNdKTtcblxuICBjb25zdCBzdGF0c0NvbXBvbmVudHM6IFJlYWN0LlJlYWN0Tm9kZVtdID0gW107XG4gIGlmIChjYWxjdWxhdGVkW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmddKSB7XG4gICAgc3RhdHNDb21wb25lbnRzLnB1c2goXG4gICAgICA8U3RhdGVDb2xvcmVkVGV4dCBrZXk9XCJmaXJpbmdcIiBzdGF0dXM9e1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmd9PlxuICAgICAgICB7Y2FsY3VsYXRlZFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuRmlyaW5nXX0gZmlyaW5nXG4gICAgICA8L1N0YXRlQ29sb3JlZFRleHQ+XG4gICAgKTtcbiAgfVxuICBpZiAoY2FsY3VsYXRlZC5lcnJvcikge1xuICAgIHN0YXRzQ29tcG9uZW50cy5wdXNoKFxuICAgICAgPFN0YXRlQ29sb3JlZFRleHQga2V5PVwiZXJyb3JzXCIgc3RhdHVzPXtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuRmlyaW5nfT5cbiAgICAgICAge2NhbGN1bGF0ZWQuZXJyb3J9IGVycm9yc1xuICAgICAgPC9TdGF0ZUNvbG9yZWRUZXh0PlxuICAgICk7XG4gIH1cbiAgaWYgKGNhbGN1bGF0ZWRbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLlBlbmRpbmddKSB7XG4gICAgc3RhdHNDb21wb25lbnRzLnB1c2goXG4gICAgICA8U3RhdGVDb2xvcmVkVGV4dCBrZXk9XCJwZW5kaW5nXCIgc3RhdHVzPXtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ30+XG4gICAgICAgIHtjYWxjdWxhdGVkW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nXX0gcGVuZGluZ1xuICAgICAgPC9TdGF0ZUNvbG9yZWRUZXh0PlxuICAgICk7XG4gIH1cbiAgaWYgKHNob3dJbmFjdGl2ZSAmJiBjYWxjdWxhdGVkW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZV0pIHtcbiAgICBzdGF0c0NvbXBvbmVudHMucHVzaChcbiAgICAgIDxTdGF0ZUNvbG9yZWRUZXh0IGtleT1cImluYWN0aXZlXCIgc3RhdHVzPVwibmV1dHJhbFwiPlxuICAgICAgICB7Y2FsY3VsYXRlZFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuSW5hY3RpdmVdfSBub3JtYWxcbiAgICAgIDwvU3RhdGVDb2xvcmVkVGV4dD5cbiAgICApO1xuICB9XG4gIGlmIChzaG93UmVjb3JkaW5nICYmIGNhbGN1bGF0ZWQucmVjb3JkaW5nKSB7XG4gICAgc3RhdHNDb21wb25lbnRzLnB1c2goXG4gICAgICA8U3RhdGVDb2xvcmVkVGV4dCBrZXk9XCJyZWNvcmRpbmdcIiBzdGF0dXM9XCJuZXV0cmFsXCI+XG4gICAgICAgIHtjYWxjdWxhdGVkLnJlY29yZGluZ30gcmVjb3JkaW5nXG4gICAgICA8L1N0YXRlQ29sb3JlZFRleHQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7Y2FsY3VsYXRlZC50b3RhbH0ge3BsdXJhbGl6ZSgncnVsZScsIGNhbGN1bGF0ZWQudG90YWwpfVxuICAgICAgPC9zcGFuPlxuICAgICAgeyEhc3RhdHNDb21wb25lbnRzLmxlbmd0aCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW4+OiA8L3NwYW4+XG4gICAgICAgICAge3N0YXRzQ29tcG9uZW50cy5yZWR1Y2U8UmVhY3QuUmVhY3ROb2RlW10+KFxuICAgICAgICAgICAgKHByZXYsIGN1cnIsIGlkeCkgPT5cbiAgICAgICAgICAgICAgcHJldi5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgcHJldixcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4sIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD4sXG4gICAgICAgICAgICAgICAgICAgIGN1cnIsXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBbY3Vycl0sXG4gICAgICAgICAgICBbXVxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgR3JhZmFuYVRoZW1lLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEljb24sIElucHV0LCBMYWJlbCwgUmFkaW9CdXR0b25Hcm91cCwgVG9vbHRpcCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgeyBQcm9tQWxlcnRpbmdSdWxlU3RhdGUsIFByb21SdWxlVHlwZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBhbGVydFN0YXRlVG9SZWFkYWJsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcblxuY29uc3QgVmlld09wdGlvbnM6IFNlbGVjdGFibGVWYWx1ZVtdID0gW1xuICB7XG4gICAgaWNvbjogJ2xpc3QtdWwnLFxuICAgIGxhYmVsOiAnTGlzdCcsXG4gICAgdmFsdWU6ICdsaXN0JyxcbiAgfSxcbiAge1xuICAgIGljb246ICdmb2xkZXInLFxuICAgIGxhYmVsOiAnR3JvdXBlZCcsXG4gICAgdmFsdWU6ICdncm91cGVkJyxcbiAgfSxcbiAge1xuICAgIGljb246ICdoZWFydC1yYXRlJyxcbiAgICBsYWJlbDogJ1N0YXRlJyxcbiAgICB2YWx1ZTogJ3N0YXRlJyxcbiAgfSxcbl07XG5cbmNvbnN0IFJ1bGVUeXBlT3B0aW9uczogU2VsZWN0YWJsZVZhbHVlW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ0FsZXJ0ICcsXG4gICAgdmFsdWU6IFByb21SdWxlVHlwZS5BbGVydGluZyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUmVjb3JkaW5nICcsXG4gICAgdmFsdWU6IFByb21SdWxlVHlwZS5SZWNvcmRpbmcsXG4gIH0sXG5dO1xuXG5jb25zdCBSdWxlc0ZpbHRlciA9ICgpID0+IHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zLCBzZXRRdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICAvLyBUaGlzIGtleSBpcyB1c2VkIHRvIGZvcmNlIGEgcmVyZW5kZXIgb24gdGhlIGlucHV0cyB3aGVuIHRoZSBmaWx0ZXJzIGFyZSBjbGVhcmVkXG4gIGNvbnN0IFtmaWx0ZXJLZXksIHNldEZpbHRlcktleV0gPSB1c2VTdGF0ZTxudW1iZXI+KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkpO1xuICBjb25zdCBkYXRhU291cmNlS2V5ID0gYGRhdGFTb3VyY2UtJHtmaWx0ZXJLZXl9YDtcbiAgY29uc3QgcXVlcnlTdHJpbmdLZXkgPSBgcXVlcnlTdHJpbmctJHtmaWx0ZXJLZXl9YDtcblxuICBjb25zdCB7IGRhdGFTb3VyY2UsIGFsZXJ0U3RhdGUsIHF1ZXJ5U3RyaW5nLCBydWxlVHlwZSB9ID0gZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMocXVlcnlQYXJhbXMpO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCBzdGF0ZU9wdGlvbnMgPSBPYmplY3QuZW50cmllcyhQcm9tQWxlcnRpbmdSdWxlU3RhdGUpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgIGxhYmVsOiBhbGVydFN0YXRlVG9SZWFkYWJsZSh2YWx1ZSksXG4gICAgdmFsdWUsXG4gIH0pKTtcblxuICBjb25zdCBoYW5kbGVEYXRhU291cmNlQ2hhbmdlID0gKGRhdGFTb3VyY2VWYWx1ZTogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IGRhdGFTb3VyY2U6IGRhdGFTb3VyY2VWYWx1ZS5uYW1lIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRGF0YVNvdXJjZSA9ICgpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IGRhdGFTb3VyY2U6IG51bGwgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUXVlcnlTdHJpbmdDaGFuZ2UgPSBkZWJvdW5jZSgoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IHF1ZXJ5U3RyaW5nOiB0YXJnZXQudmFsdWUgfHwgbnVsbCB9KTtcbiAgfSwgNjAwKTtcblxuICBjb25zdCBoYW5kbGVBbGVydFN0YXRlQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IGFsZXJ0U3RhdGU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVZpZXdDaGFuZ2UgPSAodmlldzogc3RyaW5nKSA9PiB7XG4gICAgc2V0UXVlcnlQYXJhbXMoeyB2aWV3IH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJ1bGVUeXBlQ2hhbmdlID0gKHJ1bGVUeXBlOiBQcm9tUnVsZVR5cGUpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IHJ1bGVUeXBlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsZWFyRmlsdGVyc0NsaWNrID0gKCkgPT4ge1xuICAgIHNldFF1ZXJ5UGFyYW1zKHtcbiAgICAgIGFsZXJ0U3RhdGU6IG51bGwsXG4gICAgICBxdWVyeVN0cmluZzogbnVsbCxcbiAgICAgIGRhdGFTb3VyY2U6IG51bGwsXG4gICAgICBydWxlVHlwZTogbnVsbCxcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZpbHRlcktleShmaWx0ZXJLZXkgKyAxKSwgMTAwKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hJY29uID0gPEljb24gbmFtZT17J3NlYXJjaCd9IC8+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxGaWVsZCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdpZHRofSBsYWJlbD1cIlNlYXJjaCBieSBkYXRhIHNvdXJjZVwiPlxuICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgIGtleT17ZGF0YVNvdXJjZUtleX1cbiAgICAgICAgICBhbGVydGluZ1xuICAgICAgICAgIG5vRGVmYXVsdFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWxsIGRhdGEgc291cmNlc1wiXG4gICAgICAgICAgY3VycmVudD17ZGF0YVNvdXJjZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICBvbkNsZWFyPXtjbGVhckRhdGFTb3VyY2V9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93LCBzdHlsZXMuc3BhY2VCZXR3ZWVuKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH1cbiAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgPExhYmVsPlxuICAgICAgICAgICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggYnkgbGFiZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgRmlsdGVyIHJ1bGVzIGFuZCBhbGVydHMgdXNpbmcgbGFiZWwgcXVlcnlpbmcsIGV4OlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+e2B7c2V2ZXJpdHk9XCJjcml0aWNhbFwiLCBpbnN0YW5jZT1+XCJjbHVzdGVyLXVzLS4rXCJ9YH08L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImluZm8tY2lyY2xlXCIgc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBrZXk9e3F1ZXJ5U3RyaW5nS2V5fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdpZHRofVxuICAgICAgICAgICAgICBwcmVmaXg9e3NlYXJjaEljb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdWVyeVN0cmluZ0NoYW5nZX1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtxdWVyeVN0cmluZ31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInNlYXJjaC1xdWVyeS1pbnB1dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH0+XG4gICAgICAgICAgICA8TGFiZWw+U3RhdGU8L0xhYmVsPlxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXAgb3B0aW9ucz17c3RhdGVPcHRpb25zfSB2YWx1ZT17YWxlcnRTdGF0ZX0gb25DaGFuZ2U9e2hhbmRsZUFsZXJ0U3RhdGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH0+XG4gICAgICAgICAgICA8TGFiZWw+UnVsZSB0eXBlPC9MYWJlbD5cbiAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1J1bGVUeXBlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3J1bGVUeXBlIGFzIFByb21SdWxlVHlwZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJ1bGVUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfT5cbiAgICAgICAgICAgIDxMYWJlbD5WaWV3IGFzPC9MYWJlbD5cbiAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1ZpZXdPcHRpb25zfVxuICAgICAgICAgICAgICB2YWx1ZT17U3RyaW5nKHF1ZXJ5UGFyYW1zWyd2aWV3J10gPz8gVmlld09wdGlvbnNbMF0udmFsdWUpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVmlld0NoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7KGRhdGFTb3VyY2UgfHwgYWxlcnRTdGF0ZSB8fCBxdWVyeVN0cmluZyB8fCBydWxlVHlwZSkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyQnV0dG9ufVxuICAgICAgICAgICAgICBmdWxsV2lkdGg9e2ZhbHNlfVxuICAgICAgICAgICAgICBpY29uPVwidGltZXNcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJGaWx0ZXJzQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsZWFyIGZpbHRlcnNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBpbnB1dFdpZHRoOiBjc3NgXG4gICAgICB3aWR0aDogMzQwcHg7XG4gICAgICBmbGV4LWdyb3c6IDA7XG4gICAgYCxcbiAgICBmbGV4Um93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGAsXG4gICAgc3BhY2VCZXR3ZWVuOiBjc3NgXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYCxcbiAgICByb3dDaGlsZDogY3NzYFxuICAgICAgbWFyZ2luOiAwICR7dGhlbWUuc3BhY2luZy5zbX0gMCAwO1xuICAgIGAsXG4gICAgY2xlYXJCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bGVzRmlsdGVyO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWRnZSwgQ29uZmlybU1vZGFsLCBIb3Jpem9udGFsR3JvdXAsIEljb24sIFNwaW5uZXIsIFRvb2x0aXAsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQga2JuIGZyb20gJ2FwcC9jb3JlL3V0aWxzL2tibic7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGVHcm91cCwgQ29tYmluZWRSdWxlTmFtZXNwYWNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyB1c2VGb2xkZXIgfSBmcm9tICcuLi8uLi9ob29rcy91c2VGb2xkZXInO1xuaW1wb3J0IHsgdXNlSGFzUnVsZXIgfSBmcm9tICcuLi8uLi9ob29rcy91c2VIYXNSdWxlcic7XG5pbXBvcnQgeyBkZWxldGVSdWxlc0dyb3VwQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VSdWxlc0FjY2VzcyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzc0NvbnRyb2xIb29rcyc7XG5pbXBvcnQgeyBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FLCBpc0Nsb3VkUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGlzRmVkZXJhdGVkUnVsZUdyb3VwLCBpc0dyYWZhbmFSdWxlclJ1bGUgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyBDb2xsYXBzZVRvZ2dsZSB9IGZyb20gJy4uL0NvbGxhcHNlVG9nZ2xlJztcbmltcG9ydCB7IFJ1bGVMb2NhdGlvbiB9IGZyb20gJy4uL1J1bGVMb2NhdGlvbic7XG5cbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuL0FjdGlvbkljb24nO1xuaW1wb3J0IHsgRWRpdENsb3VkR3JvdXBNb2RhbCB9IGZyb20gJy4vRWRpdENsb3VkR3JvdXBNb2RhbCc7XG5pbXBvcnQgeyBSdWxlU3RhdHMgfSBmcm9tICcuL1J1bGVTdGF0cyc7XG5pbXBvcnQgeyBSdWxlc1RhYmxlIH0gZnJvbSAnLi9SdWxlc1RhYmxlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2U7XG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cDtcbiAgZXhwYW5kQWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZXNHcm91cDogRkM8UHJvcHM+ID0gUmVhY3QubWVtbygoeyBncm91cCwgbmFtZXNwYWNlLCBleHBhbmRBbGwgfSkgPT4ge1xuICBjb25zdCB7IHJ1bGVzU291cmNlIH0gPSBuYW1lc3BhY2U7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IFtpc0VkaXRpbmdHcm91cCwgc2V0SXNFZGl0aW5nR3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEZWxldGluZ0dyb3VwLCBzZXRJc0RlbGV0aW5nR3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldElzQ29sbGFwc2VkXSA9IHVzZVN0YXRlKCFleHBhbmRBbGwpO1xuXG4gIGNvbnN0IHsgY2FuRWRpdFJ1bGVzIH0gPSB1c2VSdWxlc0FjY2VzcygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDb2xsYXBzZWQoIWV4cGFuZEFsbCk7XG4gIH0sIFtleHBhbmRBbGxdKTtcblxuICBjb25zdCBoYXNSdWxlciA9IHVzZUhhc1J1bGVyKCk7XG4gIGNvbnN0IHJ1bGVyUnVsZSA9IGdyb3VwLnJ1bGVzWzBdPy5ydWxlclJ1bGU7XG4gIGNvbnN0IGZvbGRlclVJRCA9IChydWxlclJ1bGUgJiYgaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGVyUnVsZSkgJiYgcnVsZXJSdWxlLmdyYWZhbmFfYWxlcnQubmFtZXNwYWNlX3VpZCkgfHwgdW5kZWZpbmVkO1xuICBjb25zdCB7IGZvbGRlciB9ID0gdXNlRm9sZGVyKGZvbGRlclVJRCk7XG5cbiAgLy8gZ3JvdXAgXCJpcyBkZWxldGluZ1wiIGlmIHJ1bGVzIHNvdXJjZSBoYXMgcnVsZXIsIGJ1dCB0aGlzIGdyb3VwIGhhcyBubyBydWxlcyB0aGF0IGFyZSBpbiBydWxlclxuICBjb25zdCBpc0RlbGV0aW5nID0gaGFzUnVsZXIocnVsZXNTb3VyY2UpICYmICFncm91cC5ydWxlcy5maW5kKChydWxlKSA9PiAhIXJ1bGUucnVsZXJSdWxlKTtcbiAgY29uc3QgaXNGZWRlcmF0ZWQgPSBpc0ZlZGVyYXRlZFJ1bGVHcm91cChncm91cCk7XG5cbiAgY29uc3QgZGVsZXRlR3JvdXAgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goZGVsZXRlUnVsZXNHcm91cEFjdGlvbihuYW1lc3BhY2UsIGdyb3VwKSk7XG4gICAgc2V0SXNEZWxldGluZ0dyb3VwKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBhY3Rpb25JY29uczogUmVhY3QuUmVhY3ROb2RlW10gPSBbXTtcblxuICAvLyBmb3IgZ3JhZmFuYSwgbGluayB0byBmb2xkZXIgdmlld3NcbiAgaWYgKGlzRGVsZXRpbmcpIHtcbiAgICBhY3Rpb25JY29ucy5wdXNoKFxuICAgICAgPEhvcml6b250YWxHcm91cCBrZXk9XCJpcy1kZWxldGluZ1wiPlxuICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICBkZWxldGluZ1xuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChydWxlc1NvdXJjZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgIGlmIChmb2xkZXJVSUQpIHtcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSBgL2Rhc2hib2FyZHMvZi8ke2ZvbGRlclVJRH0vJHtrYm4uc2x1Z2lmeUZvclVybChuYW1lc3BhY2UubmFtZSl9YDtcbiAgICAgIGlmIChmb2xkZXI/LmNhblNhdmUpIHtcbiAgICAgICAgYWN0aW9uSWNvbnMucHVzaChcbiAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImVkaXQgZm9sZGVyXCJcbiAgICAgICAgICAgIGtleT1cImVkaXRcIlxuICAgICAgICAgICAgaWNvbj1cInBlblwiXG4gICAgICAgICAgICB0b29sdGlwPVwiZWRpdCBmb2xkZXJcIlxuICAgICAgICAgICAgdG89e2Jhc2VVcmwgKyAnL3NldHRpbmdzJ31cbiAgICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZm9sZGVyPy5jYW5BZG1pbikge1xuICAgICAgICBhY3Rpb25JY29ucy5wdXNoKFxuICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibWFuYWdlIHBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgIGtleT1cIm1hbmFnZS1wZXJtc1wiXG4gICAgICAgICAgICBpY29uPVwibG9ja1wiXG4gICAgICAgICAgICB0b29sdGlwPVwibWFuYWdlIHBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgIHRvPXtiYXNlVXJsICsgJy9wZXJtaXNzaW9ucyd9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChjYW5FZGl0UnVsZXMocnVsZXNTb3VyY2UubmFtZSkgJiYgaGFzUnVsZXIocnVsZXNTb3VyY2UpKSB7XG4gICAgaWYgKCFpc0ZlZGVyYXRlZCkge1xuICAgICAgYWN0aW9uSWNvbnMucHVzaChcbiAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZWRpdCBydWxlIGdyb3VwXCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImVkaXQtZ3JvdXBcIlxuICAgICAgICAgIGtleT1cImVkaXRcIlxuICAgICAgICAgIGljb249XCJwZW5cIlxuICAgICAgICAgIHRvb2x0aXA9XCJlZGl0IHJ1bGUgZ3JvdXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZ0dyb3VwKHRydWUpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBhY3Rpb25JY29ucy5wdXNoKFxuICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZSBydWxlIGdyb3VwXCJcbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJkZWxldGUtZ3JvdXBcIlxuICAgICAgICBrZXk9XCJkZWxldGUtZ3JvdXBcIlxuICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgdG9vbHRpcD1cImRlbGV0ZSBydWxlIGdyb3VwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNEZWxldGluZ0dyb3VwKHRydWUpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgLy8gdW5ncm91cGVkIHJ1bGVzIGFyZSBydWxlcyB0aGF0IGFyZSBpbiB0aGUgXCJkZWZhdWx0XCIgZ3JvdXAgbmFtZVxuICBjb25zdCBpc1VuZ3JvdXBlZCA9IGdyb3VwLm5hbWUgPT09ICdkZWZhdWx0JztcbiAgY29uc3QgZ3JvdXBOYW1lID0gaXNVbmdyb3VwZWQgPyAoXG4gICAgPFJ1bGVMb2NhdGlvbiBuYW1lc3BhY2U9e25hbWVzcGFjZS5uYW1lfSAvPlxuICApIDogKFxuICAgIDxSdWxlTG9jYXRpb24gbmFtZXNwYWNlPXtuYW1lc3BhY2UubmFtZX0gZ3JvdXA9e2dyb3VwLm5hbWV9IC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IGRhdGEtdGVzdGlkPVwicnVsZS1ncm91cFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IGRhdGEtdGVzdGlkPVwicnVsZS1ncm91cC1oZWFkZXJcIj5cbiAgICAgICAgPENvbGxhcHNlVG9nZ2xlXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VUb2dnbGV9XG4gICAgICAgICAgaXNDb2xsYXBzZWQ9e2lzQ29sbGFwc2VkfVxuICAgICAgICAgIG9uVG9nZ2xlPXtzZXRJc0NvbGxhcHNlZH1cbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImdyb3VwLWNvbGxhcHNlLXRvZ2dsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxJY29uIG5hbWU9e2lzQ29sbGFwc2VkID8gJ2ZvbGRlcicgOiAnZm9sZGVyLW9wZW4nfSAvPlxuICAgICAgICB7aXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSAmJiAoXG4gICAgICAgICAgPFRvb2x0aXAgY29udGVudD17cnVsZXNTb3VyY2UubmFtZX0gcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD17cnVsZXNTb3VyY2UubWV0YS5uYW1lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlSWNvbn1cbiAgICAgICAgICAgICAgc3JjPXtydWxlc1NvdXJjZS5tZXRhLmluZm8ubG9nb3Muc21hbGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKX1cbiAgICAgICAgPGg2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICAgIHtpc0ZlZGVyYXRlZCAmJiA8QmFkZ2UgY29sb3I9XCJwdXJwbGVcIiB0ZXh0PVwiRmVkZXJhdGVkXCIgLz59IHtncm91cE5hbWV9XG4gICAgICAgIDwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclN0YXRzfT5cbiAgICAgICAgICA8UnVsZVN0YXRzIHNob3dJbmFjdGl2ZT17ZmFsc2V9IGdyb3VwPXtncm91cH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshIWFjdGlvbkljb25zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc1NlcGFyYXRvcn0+fDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25JY29uc30+e2FjdGlvbkljb25zfTwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7IWlzQ29sbGFwc2VkICYmIChcbiAgICAgICAgPFJ1bGVzVGFibGUgc2hvd1N1bW1hcnlDb2x1bW49e3RydWV9IGNsYXNzTmFtZT17c3R5bGVzLnJ1bGVzVGFibGV9IHNob3dHdWlkZWxpbmVzPXt0cnVlfSBydWxlcz17Z3JvdXAucnVsZXN9IC8+XG4gICAgICApfVxuICAgICAge2lzRWRpdGluZ0dyb3VwICYmIChcbiAgICAgICAgPEVkaXRDbG91ZEdyb3VwTW9kYWwgZ3JvdXA9e2dyb3VwfSBuYW1lc3BhY2U9e25hbWVzcGFjZX0gb25DbG9zZT17KCkgPT4gc2V0SXNFZGl0aW5nR3JvdXAoZmFsc2UpfSAvPlxuICAgICAgKX1cbiAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc0RlbGV0aW5nR3JvdXB9XG4gICAgICAgIHRpdGxlPVwiRGVsZXRlIGdyb3VwXCJcbiAgICAgICAgYm9keT17XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIERlbGV0aW5nIHRoaXMgZ3JvdXAgd2lsbCBwZXJtYW5lbnRseSByZW1vdmUgdGhlIGdyb3VwXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIGFuZCB7Z3JvdXAucnVsZXMubGVuZ3RofSBhbGVydCB7cGx1cmFsaXplKCdydWxlJywgZ3JvdXAucnVsZXMubGVuZ3RoKX0gYmVsb25naW5nIHRvIGl0LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZ3JvdXA/XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgb25Db25maXJtPXtkZWxldGVHcm91cH1cbiAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRJc0RlbGV0aW5nR3JvdXAoZmFsc2UpfVxuICAgICAgICBjb25maXJtVGV4dD1cIkRlbGV0ZVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cblJ1bGVzR3JvdXAuZGlzcGxheU5hbWUgPSAnUnVsZXNHcm91cCc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIH1cbiAgYCxcbiAgaGVhZGVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfSAke3RoZW1lLnNwYWNpbmcoMSl9ICR7dGhlbWUuc3BhY2luZygxKX0gMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICBgLFxuICBoZWFkZXJTdGF0czogY3NzYFxuICAgIHNwYW4ge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAke3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyl9IHtcbiAgICAgIG9yZGVyOiAyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuICBgLFxuICBoZWFkaW5nOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYCxcbiAgc3BhY2VyOiBjc3NgXG4gICAgZmxleDogMTtcbiAgYCxcbiAgY29sbGFwc2VUb2dnbGU6IGNzc2BcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAtJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBtYXJnaW4tYm90dG9tOiAtJHt0aGVtZS5zcGFjaW5nKDEpfTtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgYCxcbiAgZGF0YVNvdXJjZUljb246IGNzc2BcbiAgICB3aWR0aDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBoZWlnaHQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG4gIGRhdGFTb3VyY2VPcmlnaW46IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5kaXNhYmxlZH07XG4gIGAsXG4gIGFjdGlvbnNTZXBhcmF0b3I6IGNzc2BcbiAgICBtYXJnaW46IDAgJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbiAgYWN0aW9uSWNvbnM6IGNzc2BcbiAgICAmID4gKiArICoge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICB9XG4gIGAsXG4gIHJ1bGVzVGFibGU6IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlSGFzUnVsZXIgfSBmcm9tICcuLi8uLi9ob29rcy91c2VIYXNSdWxlcic7XG5pbXBvcnQgeyBBbm5vdGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IER5bmFtaWNUYWJsZSwgRHluYW1pY1RhYmxlQ29sdW1uUHJvcHMsIER5bmFtaWNUYWJsZUl0ZW1Qcm9wcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZSc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzJztcbmltcG9ydCB7IFByb3Zpc2lvbmluZ0JhZGdlIH0gZnJvbSAnLi4vUHJvdmlzaW9uaW5nJztcbmltcG9ydCB7IFJ1bGVMb2NhdGlvbiB9IGZyb20gJy4uL1J1bGVMb2NhdGlvbic7XG5cbmltcG9ydCB7IFJ1bGVEZXRhaWxzIH0gZnJvbSAnLi9SdWxlRGV0YWlscyc7XG5pbXBvcnQgeyBSdWxlSGVhbHRoIH0gZnJvbSAnLi9SdWxlSGVhbHRoJztcbmltcG9ydCB7IFJ1bGVTdGF0ZSB9IGZyb20gJy4vUnVsZVN0YXRlJztcblxudHlwZSBSdWxlVGFibGVDb2x1bW5Qcm9wcyA9IER5bmFtaWNUYWJsZUNvbHVtblByb3BzPENvbWJpbmVkUnVsZT47XG50eXBlIFJ1bGVUYWJsZUl0ZW1Qcm9wcyA9IER5bmFtaWNUYWJsZUl0ZW1Qcm9wczxDb21iaW5lZFJ1bGU+O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlczogQ29tYmluZWRSdWxlW107XG4gIHNob3dHdWlkZWxpbmVzPzogYm9vbGVhbjtcbiAgc2hvd0dyb3VwQ29sdW1uPzogYm9vbGVhbjtcbiAgc2hvd1N1bW1hcnlDb2x1bW4/OiBib29sZWFuO1xuICBlbXB0eU1lc3NhZ2U/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVzVGFibGU6IEZDPFByb3BzPiA9ICh7XG4gIHJ1bGVzLFxuICBjbGFzc05hbWUsXG4gIHNob3dHdWlkZWxpbmVzID0gZmFsc2UsXG4gIGVtcHR5TWVzc2FnZSA9ICdObyBydWxlcyBmb3VuZC4nLFxuICBzaG93R3JvdXBDb2x1bW4gPSBmYWxzZSxcbiAgc2hvd1N1bW1hcnlDb2x1bW4gPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IHdyYXBwZXJDbGFzcyA9IGN4KHN0eWxlcy53cmFwcGVyLCBjbGFzc05hbWUsIHsgW3N0eWxlcy53cmFwcGVyTWFyZ2luXTogc2hvd0d1aWRlbGluZXMgfSk7XG5cbiAgY29uc3QgaXRlbXMgPSB1c2VNZW1vKCgpOiBSdWxlVGFibGVJdGVtUHJvcHNbXSA9PiB7XG4gICAgY29uc3Qgc2VlbktleXM6IHN0cmluZ1tdID0gW107XG4gICAgcmV0dXJuIHJ1bGVzLm1hcCgocnVsZSwgcnVsZUlkeCkgPT4ge1xuICAgICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtydWxlLnByb21SdWxlPy50eXBlLCBydWxlLmxhYmVscywgcnVsZS5xdWVyeSwgcnVsZS5uYW1lLCBydWxlLmFubm90YXRpb25zXSk7XG4gICAgICBpZiAoc2VlbktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBrZXkgKz0gYC0ke3J1bGVJZHh9YDtcbiAgICAgIH1cbiAgICAgIHNlZW5LZXlzLnB1c2goa2V5KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIGRhdGE6IHJ1bGUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbcnVsZXNdKTtcblxuICBjb25zdCBjb2x1bW5zID0gdXNlQ29sdW1ucyhzaG93U3VtbWFyeUNvbHVtbiwgc2hvd0dyb3VwQ29sdW1uKTtcblxuICBpZiAoIXJ1bGVzLmxlbmd0aCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3god3JhcHBlckNsYXNzLCBzdHlsZXMuZW1wdHlNZXNzYWdlKX0+e2VtcHR5TWVzc2FnZX08L2Rpdj47XG4gIH1cblxuICBjb25zdCBUYWJsZUNvbXBvbmVudCA9IHNob3dHdWlkZWxpbmVzID8gRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXMgOiBEeW5hbWljVGFibGU7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfSBkYXRhLXRlc3RpZD1cInJ1bGVzLXRhYmxlXCI+XG4gICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgY29scz17Y29sdW1uc31cbiAgICAgICAgaXNFeHBhbmRhYmxlPXt0cnVlfVxuICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIHJlbmRlckV4cGFuZGVkQ29udGVudD17KHsgZGF0YTogcnVsZSB9KSA9PiA8UnVsZURldGFpbHMgcnVsZT17cnVsZX0gLz59XG4gICAgICAgIHBhZ2luYXRpb249e3sgaXRlbXNQZXJQYWdlOiBERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04gfX1cbiAgICAgICAgcGFnaW5hdGlvblN0eWxlcz17c3R5bGVzLnBhZ2luYXRpb259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlck1hcmdpbjogY3NzYFxuICAgICR7dGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyl9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cbiAgYCxcbiAgZW1wdHlNZXNzYWdlOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICBgLFxuICBwYWdpbmF0aW9uOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZygwLjI1KX07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIuc3Ryb25nfTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIuc3Ryb25nfTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLnN0cm9uZ307XG4gIGAsXG59KTtcblxuZnVuY3Rpb24gdXNlQ29sdW1ucyhzaG93U3VtbWFyeUNvbHVtbjogYm9vbGVhbiwgc2hvd0dyb3VwQ29sdW1uOiBib29sZWFuKSB7XG4gIGNvbnN0IGhhc1J1bGVyID0gdXNlSGFzUnVsZXIoKTtcblxuICByZXR1cm4gdXNlTWVtbygoKTogUnVsZVRhYmxlQ29sdW1uUHJvcHNbXSA9PiB7XG4gICAgY29uc3QgY29sdW1uczogUnVsZVRhYmxlQ29sdW1uUHJvcHNbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzdGF0ZScsXG4gICAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgIHJlbmRlckNlbGw6ICh7IGRhdGE6IHJ1bGUgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZXNwYWNlIH0gPSBydWxlO1xuICAgICAgICAgIGNvbnN0IHsgcnVsZXNTb3VyY2UgfSA9IG5hbWVzcGFjZTtcbiAgICAgICAgICBjb25zdCB7IHByb21SdWxlLCBydWxlclJ1bGUgfSA9IHJ1bGU7XG4gICAgICAgICAgY29uc3QgaXNEZWxldGluZyA9ICEhKGhhc1J1bGVyKHJ1bGVzU291cmNlKSAmJiBwcm9tUnVsZSAmJiAhcnVsZXJSdWxlKTtcbiAgICAgICAgICBjb25zdCBpc0NyZWF0aW5nID0gISEoaGFzUnVsZXIocnVsZXNTb3VyY2UpICYmIHJ1bGVyUnVsZSAmJiAhcHJvbVJ1bGUpO1xuICAgICAgICAgIHJldHVybiA8UnVsZVN0YXRlIHJ1bGU9e3J1bGV9IGlzRGVsZXRpbmc9e2lzRGVsZXRpbmd9IGlzQ3JlYXRpbmc9e2lzQ3JlYXRpbmd9IC8+O1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiAnMTY1cHgnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICduYW1lJyxcbiAgICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuICAgICAgICByZW5kZXJDZWxsOiAoeyBkYXRhOiBydWxlIH0pID0+IHJ1bGUubmFtZSxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAncHJvdmlzaW9uZWQnLFxuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICAgICAgcmVuZGVyQ2VsbDogKHsgZGF0YTogcnVsZSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZXJSdWxlID0gcnVsZS5ydWxlclJ1bGU7XG4gICAgICAgICAgY29uc3QgaXNHcmFmYW5hTWFuYWdlZFJ1bGUgPSBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZXJSdWxlKTtcblxuICAgICAgICAgIGlmICghaXNHcmFmYW5hTWFuYWdlZFJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHByb3ZlbmFuY2UgPSBydWxlclJ1bGUuZ3JhZmFuYV9hbGVydC5wcm92ZW5hbmNlO1xuICAgICAgICAgIHJldHVybiBwcm92ZW5hbmNlID8gPFByb3Zpc2lvbmluZ0JhZGdlIC8+IDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogJzEwMHB4JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnaGVhbHRoJyxcbiAgICAgICAgbGFiZWw6ICdIZWFsdGgnLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgIHJlbmRlckNlbGw6ICh7IGRhdGE6IHsgcHJvbVJ1bGUgfSB9KSA9PiAocHJvbVJ1bGUgPyA8UnVsZUhlYWx0aCBydWxlPXtwcm9tUnVsZX0gLz4gOiBudWxsKSxcbiAgICAgICAgc2l6ZTogJzc1cHgnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGlmIChzaG93U3VtbWFyeUNvbHVtbikge1xuICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgaWQ6ICdzdW1tYXJ5JyxcbiAgICAgICAgbGFiZWw6ICdTdW1tYXJ5JyxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuICAgICAgICByZW5kZXJDZWxsOiAoeyBkYXRhOiBydWxlIH0pID0+IHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5zdW1tYXJ5XSA/PyAnJyxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hvd0dyb3VwQ29sdW1uKSB7XG4gICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICBpZDogJ2dyb3VwJyxcbiAgICAgICAgbGFiZWw6ICdHcm91cCcsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICAgICAgcmVuZGVyQ2VsbDogKHsgZGF0YTogcnVsZSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBuYW1lc3BhY2UsIGdyb3VwIH0gPSBydWxlO1xuICAgICAgICAgIC8vIHVuZ3JvdXBlZCBydWxlcyBhcmUgcnVsZXMgdGhhdCBhcmUgaW4gdGhlIFwiZGVmYXVsdFwiIGdyb3VwIG5hbWVcbiAgICAgICAgICBjb25zdCBpc1VuZ3JvdXBlZCA9IGdyb3VwLm5hbWUgPT09ICdkZWZhdWx0JztcbiAgICAgICAgICBjb25zdCBncm91cE5hbWUgPSBpc1VuZ3JvdXBlZCA/IChcbiAgICAgICAgICAgIDxSdWxlTG9jYXRpb24gbmFtZXNwYWNlPXtuYW1lc3BhY2UubmFtZX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFJ1bGVMb2NhdGlvbiBuYW1lc3BhY2U9e25hbWVzcGFjZS5uYW1lfSBncm91cD17Z3JvdXAubmFtZX0gLz5cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmV0dXJuIGdyb3VwTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfSwgW2hhc1J1bGVyLCBzaG93U3VtbWFyeUNvbHVtbiwgc2hvd0dyb3VwQ29sdW1uXSk7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydFN0YXRlLCBkYXRlVGltZUZvcm1hdCwgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgTG9hZGluZ1BsYWNlaG9sZGVyLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTdGF0ZUhpc3RvcnlJdGVtLCBTdGF0ZUhpc3RvcnlJdGVtRGF0YSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IEdyYWZhbmFBbGVydFN0YXRlV2l0aFJlYXNvbiwgUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5JztcbmltcG9ydCB7IEFsZXJ0TGFiZWwgfSBmcm9tICcuLi9BbGVydExhYmVsJztcbmltcG9ydCB7IER5bmFtaWNUYWJsZSwgRHluYW1pY1RhYmxlQ29sdW1uUHJvcHMsIER5bmFtaWNUYWJsZUl0ZW1Qcm9wcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZSc7XG5cbmltcG9ydCB7IEFsZXJ0U3RhdGVUYWcgfSBmcm9tICcuL0FsZXJ0U3RhdGVUYWcnO1xuXG50eXBlIFN0YXRlSGlzdG9yeVJvd0l0ZW0gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHN0YXRlOiBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfCBHcmFmYW5hQWxlcnRTdGF0ZVdpdGhSZWFzb24gfCBBbGVydFN0YXRlO1xuICB0ZXh0Pzogc3RyaW5nO1xuICBkYXRhPzogU3RhdGVIaXN0b3J5SXRlbURhdGE7XG4gIHRpbWVzdGFtcD86IG51bWJlcjtcbn07XG5cbnR5cGUgU3RhdGVIaXN0b3J5Um93ID0gRHluYW1pY1RhYmxlSXRlbVByb3BzPFN0YXRlSGlzdG9yeVJvd0l0ZW0+O1xuXG5pbnRlcmZhY2UgUnVsZVN0YXRlSGlzdG9yeVByb3BzIHtcbiAgYWxlcnRJZDogc3RyaW5nO1xufVxuXG5jb25zdCBTdGF0ZUhpc3Rvcnk6IEZDPFJ1bGVTdGF0ZUhpc3RvcnlQcm9wcz4gPSAoeyBhbGVydElkIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgcmVzdWx0ID0gW10gfSA9IHVzZU1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeShhbGVydElkKTtcblxuICBpZiAobG9hZGluZyAmJiAhZXJyb3IpIHtcbiAgICByZXR1cm4gPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PXsnTG9hZGluZyBoaXN0b3J5Li4uJ30gLz47XG4gIH1cblxuICBpZiAoZXJyb3IgJiYgIWxvYWRpbmcpIHtcbiAgICByZXR1cm4gPEFsZXJ0IHRpdGxlPXsnRmFpbGVkIHRvIGZldGNoIGFsZXJ0IHN0YXRlIGhpc3RvcnknfT57ZXJyb3IubWVzc2FnZX08L0FsZXJ0PjtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbnM6IEFycmF5PER5bmFtaWNUYWJsZUNvbHVtblByb3BzPFN0YXRlSGlzdG9yeVJvd0l0ZW0+PiA9IFtcbiAgICB7IGlkOiAnc3RhdGUnLCBsYWJlbDogJ1N0YXRlJywgc2l6ZTogJ21heC1jb250ZW50JywgcmVuZGVyQ2VsbDogcmVuZGVyU3RhdGVDZWxsIH0sXG4gICAgeyBpZDogJ3ZhbHVlJywgbGFiZWw6ICcnLCBzaXplOiAnYXV0bycsIHJlbmRlckNlbGw6IHJlbmRlclZhbHVlQ2VsbCB9LFxuICAgIHsgaWQ6ICd0aW1lc3RhbXAnLCBsYWJlbDogJ1RpbWUnLCBzaXplOiAnbWF4LWNvbnRlbnQnLCByZW5kZXJDZWxsOiByZW5kZXJUaW1lc3RhbXBDZWxsIH0sXG4gIF07XG5cbiAgY29uc3QgaXRlbXM6IFN0YXRlSGlzdG9yeVJvd1tdID0gcmVzdWx0XG4gICAgLnJlZHVjZSgoYWNjOiBTdGF0ZUhpc3RvcnlSb3dJdGVtW10sIGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBhY2MucHVzaCh7XG4gICAgICAgIGlkOiBTdHJpbmcoaXRlbS5pZCksXG4gICAgICAgIHN0YXRlOiBpdGVtLm5ld1N0YXRlLFxuICAgICAgICB0ZXh0OiBpdGVtLnRleHQsXG4gICAgICAgIGRhdGE6IGl0ZW0uZGF0YSxcbiAgICAgICAgdGltZXN0YW1wOiBpdGVtLnVwZGF0ZWQsXG4gICAgICB9KTtcblxuICAgICAgLy8gaWYgdGhlIHByZWNlZGluZyBzdGF0ZSBpcyBub3QgdGhlIHNhbWUsIGNyZWF0ZSBhIHNlcGFyYXRlIHN0YXRlIGVudHJ5IOKAkyB0aGlzIGxpa2VseSBtZWFucyB0aGUgc3RhdGUgd2FzIHJlc2V0XG4gICAgICBpZiAoIWhhc01hdGNoaW5nUHJlY2VkaW5nU3RhdGUoaW5kZXgsIHJlc3VsdCkpIHtcbiAgICAgICAgYWNjLnB1c2goeyBpZDogdW5pcXVlSWQoKSwgc3RhdGU6IGl0ZW0ucHJldlN0YXRlIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKVxuICAgIC5tYXAoKGhpc3RvcnlJdGVtKSA9PiAoe1xuICAgICAgaWQ6IGhpc3RvcnlJdGVtLmlkLFxuICAgICAgZGF0YTogaGlzdG9yeUl0ZW0sXG4gICAgfSkpO1xuXG4gIHJldHVybiA8RHluYW1pY1RhYmxlIGNvbHM9e2NvbHVtbnN9IGl0ZW1zPXtpdGVtc30gLz47XG59O1xuXG5mdW5jdGlvbiByZW5kZXJWYWx1ZUNlbGwoaXRlbTogU3RhdGVIaXN0b3J5Um93KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBpdGVtLmRhdGEuZGF0YT8uZXZhbE1hdGNoZXMgPz8gW107XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2l0ZW0uZGF0YS50ZXh0fVxuICAgICAgPExhYmVsc1dyYXBwZXI+XG4gICAgICAgIHttYXRjaGVzLm1hcCgobWF0Y2gpID0+IChcbiAgICAgICAgICA8QWxlcnRMYWJlbCBrZXk9e21hdGNoLm1ldHJpY30gbGFiZWxLZXk9e21hdGNoLm1ldHJpY30gdmFsdWU9e1N0cmluZyhtYXRjaC52YWx1ZSl9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9MYWJlbHNXcmFwcGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdGF0ZUNlbGwoaXRlbTogU3RhdGVIaXN0b3J5Um93KSB7XG4gIHJldHVybiA8QWxlcnRTdGF0ZVRhZyBzdGF0ZT17aXRlbS5kYXRhLnN0YXRlfSAvPjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZXN0YW1wQ2VsbChpdGVtOiBTdGF0ZUhpc3RvcnlSb3cpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17VGltZXN0YW1wU3R5bGV9PntpdGVtLmRhdGEudGltZXN0YW1wICYmIDxzcGFuPntkYXRlVGltZUZvcm1hdChpdGVtLmRhdGEudGltZXN0YW1wKX08L3NwYW4+fTwvZGl2PlxuICApO1xufVxuXG5jb25zdCBMYWJlbHNXcmFwcGVyOiBGQzx7fT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgd3JhcHBlciB9ID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlcn0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmNvbnN0IFRpbWVzdGFtcFN0eWxlID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgICYgPiAqIHtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICB9XG4gIGAsXG59KTtcblxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGZpZ3VyZSBvdXQgaWYgYSBnaXZlbiBoaXN0b3J5SXRlbSBoYXMgYSBwcmVjZWRpbmcgaGlzdG9yeUl0ZW0gd2hlcmUgdGhlIHN0YXRlcyBtYXRjaCAtIGluIG90aGVyIHdvcmRzXG4vLyB0aGUgbmV3U3RhdGUgb2YgdGhlIHByZXZpb3VzIGhpc3RvcnlJdGVtIGlzIHRoZSBzYW1lIGFzIHRoZSBwcmV2U3RhdGUgb2YgdGhlIGN1cnJlbnQgaGlzdG9yeUl0ZW1cbmZ1bmN0aW9uIGhhc01hdGNoaW5nUHJlY2VkaW5nU3RhdGUoaW5kZXg6IG51bWJlciwgaXRlbXM6IFN0YXRlSGlzdG9yeUl0ZW1bXSk6IGJvb2xlYW4ge1xuICBjb25zdCBjdXJyZW50SGlzdG9yeUl0ZW0gPSBpdGVtc1tpbmRleF07XG4gIGNvbnN0IHByZXZpb3VzSGlzdG9yeUl0ZW0gPSBpdGVtc1tpbmRleCArIDFdO1xuXG4gIGlmICghcHJldmlvdXNIaXN0b3J5SXRlbSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c0hpc3RvcnlJdGVtLm5ld1N0YXRlID09PSBjdXJyZW50SGlzdG9yeUl0ZW0ucHJldlN0YXRlO1xufVxuXG5leHBvcnQgeyBTdGF0ZUhpc3RvcnkgfTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbWJpbmVkUnVsZU5hbWVzcGFjZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRHcm91cE5hbWVzcGFjZShuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSkge1xuICByZXR1cm4gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgbmFtZXNwYWNlcy5mbGF0TWFwKChucykgPT5cbiAgICAgICAgbnMuZ3JvdXBzLm1hcCgoZykgPT4gKHtcbiAgICAgICAgICBuYW1lc3BhY2U6IG5zLFxuICAgICAgICAgIGdyb3VwOiBnLFxuICAgICAgICB9KSlcbiAgICAgICksXG4gICAgW25hbWVzcGFjZXNdXG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbWJpbmVkUnVsZSxcbiAgQ29tYmluZWRSdWxlR3JvdXAsXG4gIENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgUnVsZSxcbiAgUnVsZUdyb3VwLFxuICBSdWxlTmFtZXNwYWNlLFxuICBSdWxlc1NvdXJjZSxcbn0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUnVsZXJSdWxlRFRPLCBSdWxlclJ1bGVHcm91cERUTywgUnVsZXJSdWxlc0NvbmZpZ0RUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7XG4gIGdldEFsbFJ1bGVzU291cmNlcyxcbiAgZ2V0UnVsZXNTb3VyY2VCeU5hbWUsXG4gIGlzQ2xvdWRSdWxlc1NvdXJjZSxcbiAgaXNHcmFmYW5hUnVsZXNTb3VyY2UsXG59IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzQWxlcnRpbmdSdWxlclJ1bGUsIGlzUmVjb3JkaW5nUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgQ2FjaGVWYWx1ZSB7XG4gIHByb21SdWxlcz86IFJ1bGVOYW1lc3BhY2VbXTtcbiAgcnVsZXJSdWxlcz86IFJ1bGVyUnVsZXNDb25maWdEVE8gfCBudWxsO1xuICByZXN1bHQ6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xufVxuXG4vLyB0aGlzIGxpdHRsZSBtb25zdGVyIGNvbWJpbmVzIHByb21ldGhldXMgcnVsZXMgYW5kIHJ1bGVyIHJ1bGVzIHRvIHByb2R1Y2UgYSB1bmlmaWVkIGRhdGEgc3RydWN0dXJlXG4vLyBjYW4gbGltaXQgdG8gYSBzaW5nbGUgcnVsZXMgc291cmNlXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlc1NvdXJjZU5hbWU/OiBzdHJpbmcpOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSB7XG4gIGNvbnN0IHByb21SdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG5cbiAgLy8gY2FjaGUgcmVzdWx0cyBwZXIgcnVsZXMgc291cmNlLCBzbyB3ZSBvbmx5IHJlY2FsY3VsYXRlIHRob3NlIGZvciB3aGljaCByZXN1bHRzIGhhdmUgYWN0dWFsbHkgY2hhbmdlZFxuICBjb25zdCBjYWNoZSA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBDYWNoZVZhbHVlPj4oe30pO1xuXG4gIGNvbnN0IHJ1bGVzU291cmNlcyA9IHVzZU1lbW8oKCk6IFJ1bGVzU291cmNlW10gPT4ge1xuICAgIGlmIChydWxlc1NvdXJjZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVzU291cmNlID0gZ2V0UnVsZXNTb3VyY2VCeU5hbWUocnVsZXNTb3VyY2VOYW1lKTtcbiAgICAgIGlmICghcnVsZXNTb3VyY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHJ1bGVzIHNvdXJjZTogJHtydWxlc1NvdXJjZU5hbWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3J1bGVzU291cmNlXTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEFsbFJ1bGVzU291cmNlcygpO1xuICB9LCBbcnVsZXNTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHJ1bGVzU291cmNlc1xuICAgICAgICAubWFwKChydWxlc1NvdXJjZSk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSBpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gcnVsZXNTb3VyY2UubmFtZSA6IHJ1bGVzU291cmNlO1xuICAgICAgICAgIGNvbnN0IHByb21SdWxlcyA9IHByb21SdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgcnVsZXJSdWxlcyA9IHJ1bGVyUnVsZXNSZXNwb25zZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuXG4gICAgICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdO1xuICAgICAgICAgIGlmIChjYWNoZWQgJiYgY2FjaGVkLnByb21SdWxlcyA9PT0gcHJvbVJ1bGVzICYmIGNhY2hlZC5ydWxlclJ1bGVzID09PSBydWxlclJ1bGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkLnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZXNwYWNlczogUmVjb3JkPHN0cmluZywgQ29tYmluZWRSdWxlTmFtZXNwYWNlPiA9IHt9O1xuXG4gICAgICAgICAgLy8gZmlyc3QgZ2V0IGFsbCB0aGUgcnVsZXIgcnVsZXMgaW5cbiAgICAgICAgICBPYmplY3QuZW50cmllcyhydWxlclJ1bGVzIHx8IHt9KS5mb3JFYWNoKChbbmFtZXNwYWNlTmFtZSwgZ3JvdXBzXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgPSB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2U7XG4gICAgICAgICAgICBhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhlbiBjb3JyZWxhdGUgd2l0aCBwcm9tZXRoZXVzIHJ1bGVzXG4gICAgICAgICAgcHJvbVJ1bGVzPy5mb3JFYWNoKCh7IG5hbWU6IG5hbWVzcGFjZU5hbWUsIGdyb3VwcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBucyA9IChuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSB8fCB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5zLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LnZhbHVlcyhuYW1lc3BhY2VzKTtcblxuICAgICAgICAgIGNhY2hlLmN1cnJlbnRbcnVsZXNTb3VyY2VOYW1lXSA9IHsgcHJvbVJ1bGVzLCBydWxlclJ1bGVzLCByZXN1bHQgfTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpLFxuICAgIFtwcm9tUnVsZXNSZXNwb25zZXMsIHJ1bGVyUnVsZXNSZXNwb25zZXMsIHJ1bGVzU291cmNlc11cbiAgKTtcbn1cblxuLy8gbWVyZ2UgYWxsIGdyb3VwcyBpbiBjYXNlIG9mIGdyYWZhbmEgbWFuYWdlZCwgZXNzZW50aWFsbHkgdHJlYXRpbmcgbmFtZXNwYWNlcyAoZm9sZGVycykgYXMgZ3JvdXBzXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMobmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10pIHtcbiAgcmV0dXJuIG5hbWVzcGFjZXMubWFwKChuYW1lc3BhY2UpID0+IHtcbiAgICBjb25zdCBuZXdOYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgIGdyb3VwczogW10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IGdyb3VwIHdpdGggdW5ncm91cGVkIHJ1bGVzXG4gICAgbmV3TmFtZXNwYWNlLmdyb3Vwcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgIHJ1bGVzOiBzb3J0UnVsZXNCeU5hbWUobmFtZXNwYWNlLmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4gZ3JvdXAucnVsZXMpKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdOYW1lc3BhY2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFJ1bGVzQnlOYW1lKHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSkge1xuICByZXR1cm4gcnVsZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlclJ1bGVHcm91cERUT1tdKTogdm9pZCB7XG4gIG5hbWVzcGFjZS5ncm91cHMgPSBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmVkR3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwID0ge1xuICAgICAgbmFtZTogZ3JvdXAubmFtZSxcbiAgICAgIGludGVydmFsOiBncm91cC5pbnRlcnZhbCxcbiAgICAgIHNvdXJjZV90ZW5hbnRzOiBncm91cC5zb3VyY2VfdGVuYW50cyxcbiAgICAgIHJ1bGVzOiBbXSxcbiAgICB9O1xuICAgIGNvbWJpbmVkR3JvdXAucnVsZXMgPSBncm91cC5ydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCkpO1xuICAgIHJldHVybiBjb21iaW5lZEdyb3VwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwczogUnVsZUdyb3VwW10pOiB2b2lkIHtcbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgbGV0IGNvbWJpbmVkR3JvdXAgPSBuYW1lc3BhY2UuZ3JvdXBzLmZpbmQoKGcpID0+IGcubmFtZSA9PT0gZ3JvdXAubmFtZSk7XG4gICAgaWYgKCFjb21iaW5lZEdyb3VwKSB7XG4gICAgICBjb21iaW5lZEdyb3VwID0ge1xuICAgICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgICBydWxlczogW10sXG4gICAgICB9O1xuICAgICAgbmFtZXNwYWNlLmdyb3Vwcy5wdXNoKGNvbWJpbmVkR3JvdXApO1xuICAgIH1cblxuICAgIChncm91cC5ydWxlcyA/PyBbXSkuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdSdWxlID0gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChydWxlLCBjb21iaW5lZEdyb3VwISwgbmFtZXNwYWNlLnJ1bGVzU291cmNlKTtcbiAgICAgIGlmIChleGlzdGluZ1J1bGUpIHtcbiAgICAgICAgZXhpc3RpbmdSdWxlLnByb21SdWxlID0gcnVsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbWJpbmVkR3JvdXAhLnJ1bGVzLnB1c2gocHJvbVJ1bGVUb0NvbWJpbmVkUnVsZShydWxlLCBuYW1lc3BhY2UsIGNvbWJpbmVkR3JvdXAhKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGU6IFJ1bGUsIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cDogQ29tYmluZWRSdWxlR3JvdXApOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHJ1bGUubmFtZSxcbiAgICBxdWVyeTogcnVsZS5xdWVyeSxcbiAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgIGFubm90YXRpb25zOiBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICBwcm9tUnVsZTogcnVsZSxcbiAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICBncm91cCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUoXG4gIHJ1bGU6IFJ1bGVyUnVsZURUTyxcbiAgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cFxuKTogQ29tYmluZWRSdWxlIHtcbiAgcmV0dXJuIGlzQWxlcnRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5hbGVydCxcbiAgICAgICAgcXVlcnk6IHJ1bGUuZXhwcixcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IGlzUmVjb3JkaW5nUnVsZXJSdWxlKHJ1bGUpXG4gICAgPyB7XG4gICAgICAgIG5hbWU6IHJ1bGUucmVjb3JkLFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczoge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgbmFtZTogcnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiBydWxlLmFubm90YXRpb25zIHx8IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9O1xufVxuXG4vLyBmaW5kIGV4aXN0aW5nIHJ1bGUgaW4gZ3JvdXAgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBwcm9tIHJ1bGVcbmZ1bmN0aW9uIGdldEV4aXN0aW5nUnVsZUluR3JvdXAoXG4gIHJ1bGU6IFJ1bGUsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCxcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlXG4pOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQge1xuICBpZiAoaXNHcmFmYW5hUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgLy8gYXNzdW1lIGdyYWZhbmEgZ3JvdXBzIGhhdmUgb25seSB0aGUgb25lIHJ1bGUuIGNoZWNrIG5hbWUgYW55d2F5IGJlY2F1c2UgcGFyYW5vaWRcbiAgICByZXR1cm4gZ3JvdXAhLnJ1bGVzLmZpbmQoKGV4aXN0aW5nUnVsZSkgPT4gZXhpc3RpbmdSdWxlLm5hbWUgPT09IHJ1bGUubmFtZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvLyB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBtYXRjaGVzIG5hbWUsIGxhYmVscywgYW5ub3RhdGlvbnMgYW5kIHF1ZXJ5XG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgdHJ1ZSlcbiAgICApID8/XG4gICAgLy8gaWYgdGhhdCBmYWlscywgdHJ5IGZpbmRpbmcgYSBydWxlIHRoYXQgb25seSBtYXRjaGVzIG5hbWUsIGxhYmVscyBhbmQgYW5ub3RhdGlvbnMuXG4gICAgLy8gbG9raSAmIHByb20gY2FuIHNvbWV0aW1lcyBtb2RpZnkgdGhlIHF1ZXJ5IHNvIGl0IGRvZXNudCBtYXRjaCwgZWcgYDIgPiAxYCBiZWNvbWVzIGAxYFxuICAgIGdyb3VwIS5ydWxlcy5maW5kKFxuICAgICAgKGV4aXN0aW5nUnVsZSkgPT4gIWV4aXN0aW5nUnVsZS5wcm9tUnVsZSAmJiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShleGlzdGluZ1J1bGUsIHJ1bGUsIGZhbHNlKVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUsIHJ1bGU6IFJ1bGUsIGNoZWNrUXVlcnkgPSB0cnVlKTogYm9vbGVhbiB7XG4gIGlmIChjb21iaW5lZFJ1bGUubmFtZSA9PT0gcnVsZS5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgY2hlY2tRdWVyeSA/IGhhc2hRdWVyeShjb21iaW5lZFJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5sYWJlbHMsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5hbm5vdGF0aW9ucyxcbiAgICAgIF0pID09PVxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KHJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHRoZXJlIGNhbiBiZSBzbGlnaHQgZGlmZmVyZW5jZXMgaW4gaG93IHByb20gJiBydWxlciByZW5kZXIgYSBxdWVyeSwgdGhpcyB3aWxsIGhhc2ggdGhlbSBhY2NvdW50aW5nIGZvciB0aGUgZGlmZmVyZW5jZXNcbmZ1bmN0aW9uIGhhc2hRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gIC8vIG9uZSBvZiB0aGVtIG1pZ2h0IGJlIHdyYXBwZWQgaW4gcGFyZW5zXG4gIGlmIChxdWVyeS5sZW5ndGggPiAxICYmIHF1ZXJ5WzBdID09PSAnKCcgJiYgcXVlcnlbcXVlcnkubGVuZ3RoIC0gMV0gPT09ICcpJykge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMSwgLTEpO1xuICB9XG4gIC8vIHdoaXRlc3BhY2UgY291bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xcc3xcXG4vZywgJycpO1xuICAvLyBsYWJlbHMgbWF0Y2hlcnMgY2FuIGJlIHJlb3JkZXJlZCwgc28gc29ydCB0aGUgZW5pdHJlIHN0cmluZywgZXNlbnRpYWxseSBjb21wYXJpbmcganVzdCB0aGUgY2hhcmFjdGVyIGNvdW50c1xuICByZXR1cm4gcXVlcnkuc3BsaXQoJycpLnNvcnQoKS5qb2luKCcnKTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlR3JvdXAsIENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgRmlsdGVyU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBQcm9tUnVsZVR5cGUsIFJ1bGVyR3JhZmFuYVJ1bGVEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBsYWJlbHNNYXRjaE1hdGNoZXJzLCBwYXJzZU1hdGNoZXJzIH0gZnJvbSAnLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMgfSBmcm9tICcuLi91dGlscy9taXNjJztcbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlLCBpc0dyYWZhbmFSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VGaWx0ZXJlZFJ1bGVzID0gKG5hbWVzcGFjZXM6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdKSA9PiB7XG4gIGNvbnN0IFtxdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICBjb25zdCBmaWx0ZXJzID0gZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMocXVlcnlQYXJhbXMpO1xuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBmaWx0ZXJlZE5hbWVzcGFjZXMgPSBuYW1lc3BhY2VzXG4gICAgICAvLyBGaWx0ZXIgYnkgZGF0YSBzb3VyY2VcbiAgICAgIC8vIFRPRE86IGZpbHRlciBieSBtdWx0aXBsZSBkYXRhIHNvdXJjZXMgZm9yIGdyYWZhbmEtbWFuYWdlZCBhbGVydHNcbiAgICAgIC5maWx0ZXIoKHsgcnVsZXNTb3VyY2UgfSkgPT5cbiAgICAgICAgZmlsdGVycy5kYXRhU291cmNlICYmIGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgPyBydWxlc1NvdXJjZS5uYW1lID09PSBmaWx0ZXJzLmRhdGFTb3VyY2UgOiB0cnVlXG4gICAgICApXG4gICAgICAvLyBJZiBhIG5hbWVzcGFjZSBhbmQgZ3JvdXAgaGF2ZSBydWxlcyB0aGF0IG1hdGNoIHRoZSBydWxlcyBmaWx0ZXJzIHRoZW4ga2VlcCB0aGVtLlxuICAgICAgLnJlZHVjZShyZWR1Y2VOYW1lc3BhY2VzKGZpbHRlcnMpLCBbXSBhcyBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkTmFtZXNwYWNlcztcbiAgfSwgW25hbWVzcGFjZXMsIGZpbHRlcnNdKTtcbn07XG5cbmNvbnN0IHJlZHVjZU5hbWVzcGFjZXMgPSAoZmlsdGVyczogRmlsdGVyU3RhdGUpID0+IHtcbiAgcmV0dXJuIChuYW1lc3BhY2VBY2M6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdLCBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSkgPT4ge1xuICAgIGNvbnN0IGdyb3VwcyA9IG5hbWVzcGFjZS5ncm91cHMucmVkdWNlKHJlZHVjZUdyb3VwcyhmaWx0ZXJzKSwgW10gYXMgQ29tYmluZWRSdWxlR3JvdXBbXSk7XG5cbiAgICBpZiAoZ3JvdXBzLmxlbmd0aCkge1xuICAgICAgbmFtZXNwYWNlQWNjLnB1c2goe1xuICAgICAgICAuLi5uYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lc3BhY2VBY2M7XG4gIH07XG59O1xuXG4vLyBSZWR1Y2VzIGdyb3VwcyB0byBvbmx5IGdyb3VwcyB0aGF0IGhhdmUgcnVsZXMgbWF0Y2hpbmcgdGhlIGZpbHRlcnNcbmNvbnN0IHJlZHVjZUdyb3VwcyA9IChmaWx0ZXJzOiBGaWx0ZXJTdGF0ZSkgPT4ge1xuICByZXR1cm4gKGdyb3VwQWNjOiBDb21iaW5lZFJ1bGVHcm91cFtdLCBncm91cDogQ29tYmluZWRSdWxlR3JvdXApID0+IHtcbiAgICBjb25zdCBydWxlcyA9IGdyb3VwLnJ1bGVzLmZpbHRlcigocnVsZSkgPT4ge1xuICAgICAgaWYgKGZpbHRlcnMucnVsZVR5cGUgJiYgZmlsdGVycy5ydWxlVHlwZSAhPT0gcnVsZS5wcm9tUnVsZT8udHlwZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVycy5kYXRhU291cmNlICYmIGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlLnJ1bGVyUnVsZSkgJiYgIWlzUXVlcnlpbmdEYXRhU291cmNlKHJ1bGUucnVsZXJSdWxlLCBmaWx0ZXJzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBRdWVyeSBzdHJpbmdzIGNhbiBtYXRjaCBhbGVydCBuYW1lLCBsYWJlbCBrZXlzLCBhbmQgbGFiZWwgdmFsdWVzXG4gICAgICBpZiAoZmlsdGVycy5xdWVyeVN0cmluZykge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkUXVlcnlTdHJpbmcgPSBmaWx0ZXJzLnF1ZXJ5U3RyaW5nLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGRvZXNOYW1lQ29udGFpbnNRdWVyeVN0cmluZyA9IHJ1bGUubmFtZT8udG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyhub3JtYWxpemVkUXVlcnlTdHJpbmcpO1xuICAgICAgICBjb25zdCBtYXRjaGVycyA9IHBhcnNlTWF0Y2hlcnMoZmlsdGVycy5xdWVyeVN0cmluZyk7XG5cbiAgICAgICAgY29uc3QgZG9SdWxlTGFiZWxzTWF0Y2hRdWVyeSA9IGxhYmVsc01hdGNoTWF0Y2hlcnMocnVsZS5sYWJlbHMsIG1hdGNoZXJzKTtcbiAgICAgICAgY29uc3QgZG9BbGVydHNDb250YWluTWF0Y2hpbmdMYWJlbHMgPVxuICAgICAgICAgIHJ1bGUucHJvbVJ1bGUgJiZcbiAgICAgICAgICBydWxlLnByb21SdWxlLnR5cGUgPT09IFByb21SdWxlVHlwZS5BbGVydGluZyAmJlxuICAgICAgICAgIHJ1bGUucHJvbVJ1bGUuYWxlcnRzICYmXG4gICAgICAgICAgcnVsZS5wcm9tUnVsZS5hbGVydHMuc29tZSgoYWxlcnQpID0+IGxhYmVsc01hdGNoTWF0Y2hlcnMoYWxlcnQubGFiZWxzLCBtYXRjaGVycykpO1xuXG4gICAgICAgIGlmICghKGRvZXNOYW1lQ29udGFpbnNRdWVyeVN0cmluZyB8fCBkb1J1bGVMYWJlbHNNYXRjaFF1ZXJ5IHx8IGRvQWxlcnRzQ29udGFpbk1hdGNoaW5nTGFiZWxzKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBmaWx0ZXJzLmFsZXJ0U3RhdGUgJiZcbiAgICAgICAgIShydWxlLnByb21SdWxlICYmIGlzQWxlcnRpbmdSdWxlKHJ1bGUucHJvbVJ1bGUpICYmIHJ1bGUucHJvbVJ1bGUuc3RhdGUgPT09IGZpbHRlcnMuYWxlcnRTdGF0ZSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICAvLyBBZGQgcnVsZXMgdG8gdGhlIGdyb3VwIHRoYXQgbWF0Y2ggdGhlIHJ1bGUgbGlzdCBmaWx0ZXJzXG4gICAgaWYgKHJ1bGVzLmxlbmd0aCkge1xuICAgICAgZ3JvdXBBY2MucHVzaCh7XG4gICAgICAgIC4uLmdyb3VwLFxuICAgICAgICBydWxlcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ3JvdXBBY2M7XG4gIH07XG59O1xuXG5jb25zdCBpc1F1ZXJ5aW5nRGF0YVNvdXJjZSA9IChydWxlclJ1bGU6IFJ1bGVyR3JhZmFuYVJ1bGVEVE8sIGZpbHRlcjogRmlsdGVyU3RhdGUpOiBib29sZWFuID0+IHtcbiAgaWYgKCFmaWx0ZXIuZGF0YVNvdXJjZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuICEhcnVsZXJSdWxlLmdyYWZhbmFfYWxlcnQuZGF0YS5maW5kKChxdWVyeSkgPT4ge1xuICAgIGlmICghcXVlcnkuZGF0YXNvdXJjZVVpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBkcyA9IGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpO1xuICAgIHJldHVybiBkcz8ubmFtZSA9PT0gZmlsdGVyLmRhdGFTb3VyY2U7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBGb2xkZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBmZXRjaEZvbGRlcklmTm90RmV0Y2hlZEFjdGlvbiB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgUmV0dXJuQmFnIHtcbiAgZm9sZGVyPzogRm9sZGVyRFRPO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9sZGVyKHVpZD86IHN0cmluZyk6IFJldHVybkJhZyB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZm9sZGVyUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvbGRlcnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1aWQpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uKHVpZCkpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCB1aWRdKTtcblxuICBpZiAodWlkKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGZvbGRlclJlcXVlc3RzW3VpZF0gfHwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICAgIHJldHVybiB7XG4gICAgICBmb2xkZXI6IHJlcXVlc3QucmVzdWx0LFxuICAgICAgbG9hZGluZzogcmVxdWVzdC5sb2FkaW5nLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSdWxlc1NvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG4vLyBkYXRhc291cmNlIGhhcyBydWxlciBpZiBpdCdzIGdyYWZhbmEgbWFuYWdlZCBvciBpZiB3ZSdyZSBhYmxlIHRvIGxvYWQgcnVsZXMgZnJvbSBpdFxuZXhwb3J0IGZ1bmN0aW9uIHVzZUhhc1J1bGVyKCk6IChydWxlc1NvdXJjZTogc3RyaW5nIHwgUnVsZXNTb3VyY2UpID0+IGJvb2xlYW4ge1xuICBjb25zdCBydWxlclJ1bGVzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKFxuICAgIChydWxlc1NvdXJjZTogc3RyaW5nIHwgUnVsZXNTb3VyY2UpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVzU291cmNlTmFtZSA9IHR5cGVvZiBydWxlc1NvdXJjZSA9PT0gJ3N0cmluZycgPyBydWxlc1NvdXJjZSA6IHJ1bGVzU291cmNlLm5hbWU7XG4gICAgICByZXR1cm4gcnVsZXNTb3VyY2VOYW1lID09PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIHx8ICEhcnVsZXJSdWxlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG4gICAgfSxcbiAgICBbcnVsZXJSdWxlc11cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBnZXRSdWxlc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyB1c2VGb2xkZXIgfSBmcm9tICcuL3VzZUZvbGRlcic7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgUmVzdWx0QmFnIHtcbiAgaXNFZGl0YWJsZT86IGJvb2xlYW47XG4gIGlzUmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVzU291cmNlTmFtZTogc3RyaW5nLCBydWxlPzogUnVsZXJSdWxlRFRPKTogUmVzdWx0QmFnIHtcbiAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzKTtcbiAgY29uc3QgZm9sZGVyVUlEID0gcnVsZSAmJiBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZSkgPyBydWxlLmdyYWZhbmFfYWxlcnQubmFtZXNwYWNlX3VpZCA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBydWxlUGVybWlzc2lvbiA9IGdldFJ1bGVzUGVybWlzc2lvbnMocnVsZXNTb3VyY2VOYW1lKTtcblxuICBjb25zdCB7IGZvbGRlciwgbG9hZGluZyB9ID0gdXNlRm9sZGVyKGZvbGRlclVJRCk7XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgcmV0dXJuIHsgaXNFZGl0YWJsZTogZmFsc2UsIGlzUmVtb3ZhYmxlOiBmYWxzZSwgbG9hZGluZzogZmFsc2UgfTtcbiAgfVxuXG4gIC8vIEdyYWZhbmEgcnVsZXMgY2FuIGJlIGVkaXRlZCBpZiB1c2VyIGNhbiBlZGl0IHRoZSBmb2xkZXIgdGhleSdyZSBpblxuICAvLyBXaGVuIFJCQUMgaXMgZGlzYWJsZWQgYWNjZXNzIHRvIGEgZm9sZGVyIGlzIHRoZSBvbmx5IHJlcXVpcmVtZW50IGZvciBtYW5hZ2luZyBydWxlc1xuICAvLyBXaGVuIFJCQUMgaXMgZW5hYmxlZCB0aGUgYXBwcm9wcmlhdGUgYWxlcnRpbmcgcGVybWlzc2lvbnMgbmVlZCB0byBiZSBtZXRcbiAgaWYgKGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlKSkge1xuICAgIGlmICghZm9sZGVyVUlEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBSdWxlICR7cnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVyIHVpZCwgY2Fubm90IGRldGVybWluZSBpZiBpdCBpcyBlZGl0YWJsZS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbkVkaXRHcmFmYW5hUnVsZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi51cGRhdGUsIGZvbGRlcj8uY2FuU2F2ZSA/PyBmYWxzZSk7XG4gICAgY29uc3QgY2FuUmVtb3ZlR3JhZmFuYVJ1bGVzID0gY29udGV4dFNydi5oYXNBY2Nlc3MocnVsZVBlcm1pc3Npb24uZGVsZXRlLCBmb2xkZXI/LmNhblNhdmUgPz8gZmFsc2UpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRWRpdGFibGU6IGNhbkVkaXRHcmFmYW5hUnVsZXMsXG4gICAgICBpc1JlbW92YWJsZTogY2FuUmVtb3ZlR3JhZmFuYVJ1bGVzLFxuICAgICAgbG9hZGluZyxcbiAgICB9O1xuICB9XG5cbiAgLy8gcHJvbSBydWxlcyBhcmUgb25seSBlZGl0YWJsZSBieSB1c2VycyB3aXRoIEVkaXRvciByb2xlIGFuZCBvbmx5IGlmIHJ1bGVzIHNvdXJjZSBzdXBwb3J0cyBlZGl0aW5nXG4gIGNvbnN0IGlzUnVsZXJBdmFpbGFibGUgPSBCb29sZWFuKGRhdGFTb3VyY2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdD8ucnVsZXJDb25maWcpO1xuICBjb25zdCBjYW5FZGl0Q2xvdWRSdWxlcyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKHJ1bGVQZXJtaXNzaW9uLnVwZGF0ZSwgY29udGV4dFNydi5pc0VkaXRvcik7XG4gIGNvbnN0IGNhblJlbW92ZUNsb3VkUnVsZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi5kZWxldGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuXG4gIHJldHVybiB7XG4gICAgaXNFZGl0YWJsZTogY2FuRWRpdENsb3VkUnVsZXMgJiYgaXNSdWxlckF2YWlsYWJsZSxcbiAgICBpc1JlbW92YWJsZTogY2FuUmVtb3ZlQ2xvdWRSdWxlcyAmJiBpc1J1bGVyQXZhaWxhYmxlLFxuICAgIGxvYWRpbmc6IGRhdGFTb3VyY2VzW3J1bGVzU291cmNlTmFtZV0/LmxvYWRpbmcsXG4gIH07XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgU3RhdGVIaXN0b3J5SXRlbSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgZmV0Y2hHcmFmYW5hQW5ub3RhdGlvbnNBY3Rpb24gfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5KGFsZXJ0SWQ6IHN0cmluZykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvcjxBc3luY1JlcXVlc3RTdGF0ZTxTdGF0ZUhpc3RvcnlJdGVtW10+PihcbiAgICAoc3RhdGUpID0+IHN0YXRlLm1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hHcmFmYW5hQW5ub3RhdGlvbnNBY3Rpb24oYWxlcnRJZCkpO1xuICB9LCBbZGlzcGF0Y2gsIGFsZXJ0SWRdKTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFN0YXRlSGlzdG9yeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcnVsZXMvU3RhdGVIaXN0b3J5JztcblxuZnVuY3Rpb24gdXNlU3RhdGVIaXN0b3J5TW9kYWwoYWxlcnRJZDogc3RyaW5nKSB7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgU3RhdGVIaXN0b3J5TW9kYWwgPSB1c2VNZW1vKFxuICAgICgpID0+IChcbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICBjbG9zZU9uQmFja2Ryb3BDbGljaz17dHJ1ZX1cbiAgICAgICAgY2xvc2VPbkVzY2FwZT17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJTdGF0ZSBoaXN0b3J5XCJcbiAgICAgID5cbiAgICAgICAgPFN0YXRlSGlzdG9yeSBhbGVydElkPXthbGVydElkfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICApLFxuICAgIFthbGVydElkLCBzaG93TW9kYWxdXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBTdGF0ZUhpc3RvcnlNb2RhbCxcbiAgICBzaG93U3RhdGVIaXN0b3J5TW9kYWw6ICgpID0+IHNldFNob3dNb2RhbCh0cnVlKSxcbiAgICBoaWRlU3RhdGVIaXN0b3J5TW9kYWw6ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSksXG4gIH07XG59XG5cbmV4cG9ydCB7IHVzZVN0YXRlSGlzdG9yeU1vZGFsIH07XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRSdWxlc0FjY2VzcyB9IGZyb20gJy4vYWNjZXNzLWNvbnRyb2wnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUnVsZXNBY2Nlc3MoKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGdldFJ1bGVzQWNjZXNzKCksIFtdKTtcbn1cbiIsImltcG9ydCB7IEdyYW1tYXIgfSBmcm9tICdwcmlzbWpzJztcblxuaW1wb3J0IHsgQ29tcGxldGlvbkl0ZW0gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmNvbnN0IEFHR1JFR0FUSU9OX09QRVJBVE9SUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAge1xuICAgIGxhYmVsOiAnc3VtJyxcbiAgICBpbnNlcnRUZXh0OiAnc3VtJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHN1bSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdtaW4nLFxuICAgIGluc2VydFRleHQ6ICdtaW4nLFxuICAgIGRvY3VtZW50YXRpb246ICdTZWxlY3QgbWluaW11bSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdtYXgnLFxuICAgIGluc2VydFRleHQ6ICdtYXgnLFxuICAgIGRvY3VtZW50YXRpb246ICdTZWxlY3QgbWF4aW11bSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhdmcnLFxuICAgIGluc2VydFRleHQ6ICdhdmcnLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgdGhlIGF2ZXJhZ2Ugb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc3RkZGV2JyxcbiAgICBpbnNlcnRUZXh0OiAnc3RkZGV2JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHBvcHVsYXRpb24gc3RhbmRhcmQgZGV2aWF0aW9uIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZHZhcicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZHZhcicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIHZhcmlhbmNlIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2NvdW50JyxcbiAgICBpbnNlcnRUZXh0OiAnY291bnQnLFxuICAgIGRvY3VtZW50YXRpb246ICdDb3VudCBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIHZlY3RvcicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2JvdHRvbWsnLFxuICAgIGluc2VydFRleHQ6ICdib3R0b21rJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU21hbGxlc3QgayBlbGVtZW50cyBieSBzYW1wbGUgdmFsdWUnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICd0b3BrJyxcbiAgICBpbnNlcnRUZXh0OiAndG9waycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0xhcmdlc3QgayBlbGVtZW50cyBieSBzYW1wbGUgdmFsdWUnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFBJUEVfUEFSU0VSUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAge1xuICAgIGxhYmVsOiAnanNvbicsXG4gICAgaW5zZXJ0VGV4dDogJ2pzb24nLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyBqc29uIHBhcnNlci4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3JlZ2V4cCcsXG4gICAgaW5zZXJ0VGV4dDogJ3JlZ2V4cCBcIlwiJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRXh0cmFjdGluZyBsYWJlbHMgZnJvbSB0aGUgbG9nIGxpbmUgdXNpbmcgcmVnZXhwIHBhcnNlci4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gICAgbW92ZTogLTEsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2xvZ2ZtdCcsXG4gICAgaW5zZXJ0VGV4dDogJ2xvZ2ZtdCcsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0V4dHJhY3RpbmcgbGFiZWxzIGZyb20gdGhlIGxvZyBsaW5lIHVzaW5nIGxvZ2ZtdCBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdwYXR0ZXJuJyxcbiAgICBpbnNlcnRUZXh0OiAncGF0dGVybicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0V4dHJhY3RpbmcgbGFiZWxzIGZyb20gdGhlIGxvZyBsaW5lIHVzaW5nIHBhdHRlcm4gcGFyc2VyLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMysuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndW5wYWNrJyxcbiAgICBpbnNlcnRUZXh0OiAndW5wYWNrJyxcbiAgICBkZXRhaWw6ICd1bnBhY2sgaWRlbnRpZmllcicsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdQYXJzZXMgYSBKU09OIGxvZyBsaW5lLCB1bnBhY2tpbmcgYWxsIGVtYmVkZGVkIGxhYmVscyBpbiB0aGUgcGFjayBzdGFnZS4gQSBzcGVjaWFsIHByb3BlcnR5IFwiX2VudHJ5XCIgd2lsbCBhbHNvIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgb3JpZ2luYWwgbG9nIGxpbmUuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4yKy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFBJUEVfT1BFUkFUT1JTOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICd1bndyYXAnLFxuICAgIGluc2VydFRleHQ6ICd1bndyYXAnLFxuICAgIGRldGFpbDogJ3Vud3JhcCBpZGVudGlmaWVyJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1Rha2UgbGFiZWxzIGFuZCB1c2UgdGhlIHZhbHVlcyBhcyBzYW1wbGUgZGF0YSBmb3IgbWV0cmljIGFnZ3JlZ2F0aW9ucy4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2xhYmVsX2Zvcm1hdCcsXG4gICAgaW5zZXJ0VGV4dDogJ2xhYmVsX2Zvcm1hdCcsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdVc2UgdG8gcmVuYW1lLCBtb2RpZnkgb3IgYWRkIGxhYmVscy4gRm9yIGV4YW1wbGUsIHwgbGFiZWxfZm9ybWF0IGZvbz1iYXIgLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbGluZV9mb3JtYXQnLFxuICAgIGluc2VydFRleHQ6ICdsaW5lX2Zvcm1hdCcsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXdyaXRlcyBsb2cgbGluZSBjb250ZW50LiBGb3IgZXhhbXBsZSwgfCBsaW5lX2Zvcm1hdCBcInt7LnF1ZXJ5fX0ge3suZHVyYXRpb259fVwiIC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUkFOR0VfVkVDX0ZVTkNUSU9OUyA9IFtcbiAge1xuICAgIGluc2VydFRleHQ6ICdhdmdfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2F2Z19vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2F2Z19vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBhdmVyYWdlIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWluX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdtaW5fb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdtaW5fb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbWluaW11bSBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21heF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbWF4X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbWF4X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1heGltdW0gb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdmaXJzdF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnZmlyc3Rfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdmaXJzdF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBmaXJzdCBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4zKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xhc3Rfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2xhc3Rfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdsYXN0X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIGxhc3Qgb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMysuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdW1fb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N1bV9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N1bV9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBzdW0gb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjb3VudF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdjb3VudF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBjb3VudCBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdGR2YXJfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N0ZHZhcl9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N0ZHZhcl9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdUaGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvZiB0aGUgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3RkZGV2X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3RkZGV2X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1RoZSBwb3B1bGF0aW9uIHN0YW5kYXJkIGRldmlhdGlvbiBvZiB0aGUgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3F1YW50aWxlX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdxdWFudGlsZV9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3F1YW50aWxlX292ZXJfdGltZShzY2FsYXIsIHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgz4YtcXVhbnRpbGUgKDAg4omkIM+GIOKJpCAxKSBvZiB0aGUgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2J5dGVzX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdieXRlc19vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2J5dGVzX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ291bnRzIHRoZSBhbW91bnQgb2YgYnl0ZXMgdXNlZCBieSBlYWNoIGxvZyBzdHJlYW0gZm9yIGEgZ2l2ZW4gcmFuZ2UnLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2J5dGVzX3JhdGUnLFxuICAgIGxhYmVsOiAnYnl0ZXNfcmF0ZScsXG4gICAgZGV0YWlsOiAnYnl0ZXNfcmF0ZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIGJ5dGVzIHBlciBzZWNvbmQgZm9yIGVhY2ggc3RyZWFtLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmF0ZScsXG4gICAgbGFiZWw6ICdyYXRlJyxcbiAgICBkZXRhaWw6ICdyYXRlKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBlbnRyaWVzIHBlciBzZWNvbmQuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBGVU5DVElPTlMgPSBbLi4uQUdHUkVHQVRJT05fT1BFUkFUT1JTLCAuLi5SQU5HRV9WRUNfRlVOQ1RJT05TXTtcbmV4cG9ydCBjb25zdCBMT0tJX0tFWVdPUkRTID0gWy4uLkZVTkNUSU9OUywgLi4uUElQRV9PUEVSQVRPUlMsIC4uLlBJUEVfUEFSU0VSU10ubWFwKChrZXl3b3JkKSA9PiBrZXl3b3JkLmxhYmVsKTtcblxuZXhwb3J0IGNvbnN0IGxva2lHcmFtbWFyOiBHcmFtbWFyID0ge1xuICBjb21tZW50OiB7XG4gICAgcGF0dGVybjogLyMuKi8sXG4gIH0sXG4gICdjb250ZXh0LWFnZ3JlZ2F0aW9uJzoge1xuICAgIHBhdHRlcm46IC8oKHdpdGhvdXR8YnkpXFxzKilcXChbXildKlxcKS8sIC8vIGJ5ICgpXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdsYWJlbC1rZXknOiB7XG4gICAgICAgIHBhdHRlcm46IC9bXigpLFxcc11bXiwpXSpbXiksXFxzXSovLFxuICAgICAgICBhbGlhczogJ2F0dHItbmFtZScsXG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IC9bKCldLyxcbiAgICB9LFxuICB9LFxuICAnY29udGV4dC1sYWJlbHMnOiB7XG4gICAgcGF0dGVybjogL1xce1tefV0qKD89fT8pLyxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC8jLiovLFxuICAgICAgfSxcbiAgICAgICdsYWJlbC1rZXknOiB7XG4gICAgICAgIHBhdHRlcm46IC9bYS16QS1aX11cXHcqKD89XFxzKig9fCE9fD1+fCF+KSkvLFxuICAgICAgICBhbGlhczogJ2F0dHItbmFtZScsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwtdmFsdWUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXSkqXCIvLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnYXR0ci12YWx1ZScsXG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IC9be10vLFxuICAgIH0sXG4gIH0sXG4gICdjb250ZXh0LXBpcGUnOiB7XG4gICAgcGF0dGVybjogL1xcc1xcfFtePX5dXFxzP1xcdyovaSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdwaXBlLW9wZXJhdG9yJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFx8L2ksXG4gICAgICAgIGFsaWFzOiAnb3BlcmF0b3InLFxuICAgICAgfSxcbiAgICAgICdwaXBlLW9wZXJhdGlvbnMnOiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCR7Wy4uLlBJUEVfUEFSU0VSUywgLi4uUElQRV9PUEVSQVRPUlNdLm1hcCgoZikgPT4gZi5sYWJlbCkuam9pbignfCcpfWAsICdpJyksXG4gICAgICAgIGFsaWFzOiAna2V5d29yZCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGZ1bmN0aW9uOiBuZXcgUmVnRXhwKGBcXFxcYig/OiR7RlVOQ1RJT05TLm1hcCgoZikgPT4gZi5sYWJlbCkuam9pbignfCcpfSkoPz1cXFxccypcXFxcKClgLCAnaScpLFxuICAnY29udGV4dC1yYW5nZSc6IFtcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvXFxbW15cXF1dKig/PVxcXSkvLCAvLyBbMW1dXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3JhbmdlLWR1cmF0aW9uJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXGJcXGQrW3NtaGR3eV1cXGIvaSxcbiAgICAgICAgICBhbGlhczogJ251bWJlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0dGVybjogLyhvZmZzZXRcXHMrKVxcdysvLCAvLyBvZmZzZXQgMW1cbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3JhbmdlLWR1cmF0aW9uJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXGJcXGQrW3NtaGR3eV1cXGIvaSxcbiAgICAgICAgICBhbGlhczogJ251bWJlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIHF1b3RlOiB7XG4gICAgcGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXCJdKSpcIi8sXG4gICAgYWxpYXM6ICdzdHJpbmcnLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgfSxcbiAgYmFja3RpY2tzOiB7XG4gICAgcGF0dGVybjogL2AoPzpcXFxcLnxbXlxcXFxgXSkqYC8sXG4gICAgYWxpYXM6ICdzdHJpbmcnLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgfSxcbiAgbnVtYmVyOiAvXFxiLT9cXGQrKChcXC5cXGQqKT8oW2VFXVsrLV0/XFxkKyk/KT9cXGIvLFxuICBvcGVyYXRvcjogL1xccz8oXFx8Wz1+XT98IT0/fDwoPzo9Pj98PHw+KT98Pls+PV0/KVxccz8vaSxcbiAgcHVuY3R1YXRpb246IC9be30oKSwuXS8sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2tpR3JhbW1hcjtcbiIsImltcG9ydCB7IEdyYW1tYXIgfSBmcm9tICdwcmlzbWpzJztcblxuaW1wb3J0IHsgQ29tcGxldGlvbkl0ZW0gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbi8vIFdoZW4gY2hhbmdpbmcgUkFURV9SQU5HRVMsIGNoZWNrIGlmIExva2kvTG9nUUwgcmFuZ2VzIHNob3VsZCBiZSBjaGFuZ2VkIHRvb1xuLy8gQHNlZSBwdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9sb2tpL2xhbmd1YWdlX3Byb3ZpZGVyLnRzXG5leHBvcnQgY29uc3QgUkFURV9SQU5HRVM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHsgbGFiZWw6ICckX19pbnRlcnZhbCcsIHNvcnRWYWx1ZTogJyRfX2ludGVydmFsJyB9LFxuICB7IGxhYmVsOiAnJF9fcmF0ZV9pbnRlcnZhbCcsIHNvcnRWYWx1ZTogJyRfX3JhdGVfaW50ZXJ2YWwnIH0sXG4gIHsgbGFiZWw6ICckX19yYW5nZScsIHNvcnRWYWx1ZTogJyRfX3JhbmdlJyB9LFxuICB7IGxhYmVsOiAnMW0nLCBzb3J0VmFsdWU6ICcwMDowMTowMCcgfSxcbiAgeyBsYWJlbDogJzVtJywgc29ydFZhbHVlOiAnMDA6MDU6MDAnIH0sXG4gIHsgbGFiZWw6ICcxMG0nLCBzb3J0VmFsdWU6ICcwMDoxMDowMCcgfSxcbiAgeyBsYWJlbDogJzMwbScsIHNvcnRWYWx1ZTogJzAwOjMwOjAwJyB9LFxuICB7IGxhYmVsOiAnMWgnLCBzb3J0VmFsdWU6ICcwMTowMDowMCcgfSxcbiAgeyBsYWJlbDogJzFkJywgc29ydFZhbHVlOiAnMjQ6MDA6MDAnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgT1BFUkFUT1JTID0gWydieScsICdncm91cF9sZWZ0JywgJ2dyb3VwX3JpZ2h0JywgJ2lnbm9yaW5nJywgJ29uJywgJ29mZnNldCcsICd3aXRob3V0J107XG5leHBvcnQgY29uc3QgTE9HSUNBTF9PUEVSQVRPUlMgPSBbJ29yJywgJ2FuZCcsICd1bmxlc3MnXTtcblxuY29uc3QgVFJJR09OT01FVFJJQ19GVU5DVElPTlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ2Fjb3MnLFxuICAgIGluc2VydFRleHQ6ICdhY29zJyxcbiAgICBkZXRhaWw6ICdhY29zKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgYXJjY29zaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYWNvc2gnLFxuICAgIGluc2VydFRleHQ6ICdhY29zaCcsXG4gICAgZGV0YWlsOiAnYWNvc2godiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBpbnZlcnNlIGh5cGVyYm9saWMgY29zaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXNpbicsXG4gICAgaW5zZXJ0VGV4dDogJ2FzaW4nLFxuICAgIGRldGFpbDogJ2FzaW4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBhcmNzaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXNpbmgnLFxuICAgIGluc2VydFRleHQ6ICdhc2luaCcsXG4gICAgZGV0YWlsOiAnYXNpbmgodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBpbnZlcnNlIGh5cGVyYm9saWMgc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2F0YW4nLFxuICAgIGluc2VydFRleHQ6ICdhdGFuJyxcbiAgICBkZXRhaWw6ICdhdGFuKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgYXJjdGFuZ2VudCBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2F0YW5oJyxcbiAgICBpbnNlcnRUZXh0OiAnYXRhbmgnLFxuICAgIGRldGFpbDogJ2F0YW5oKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBoeXBlcmJvbGljIHRhbmdlbnQgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3MnLFxuICAgIGluc2VydFRleHQ6ICdjb3MnLFxuICAgIGRldGFpbDogJ2Nvcyh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGNvc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2Nvc2gnLFxuICAgIGluc2VydFRleHQ6ICdjb3NoJyxcbiAgICBkZXRhaWw6ICdjb3NoKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaHlwZXJib2xpYyBjb3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzaW4nLFxuICAgIGluc2VydFRleHQ6ICdzaW4nLFxuICAgIGRldGFpbDogJ3Npbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIHNpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzaW5oJyxcbiAgICBpbnNlcnRUZXh0OiAnc2luaCcsXG4gICAgZGV0YWlsOiAnc2luaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGh5cGVyYm9saWMgc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3RhbicsXG4gICAgaW5zZXJ0VGV4dDogJ3RhbicsXG4gICAgZGV0YWlsOiAndGFuKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgdGFuZ2VudCBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3RhbmgnLFxuICAgIGluc2VydFRleHQ6ICd0YW5oJyxcbiAgICBkZXRhaWw6ICd0YW5oKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaHlwZXJib2xpYyB0YW5nZW50IG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbl07XG5cbmNvbnN0IEFHR1JFR0FUSU9OX09QRVJBVE9SUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAge1xuICAgIGxhYmVsOiAnc3VtJyxcbiAgICBpbnNlcnRUZXh0OiAnc3VtJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHN1bSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdtaW4nLFxuICAgIGluc2VydFRleHQ6ICdtaW4nLFxuICAgIGRvY3VtZW50YXRpb246ICdTZWxlY3QgbWluaW11bSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdtYXgnLFxuICAgIGluc2VydFRleHQ6ICdtYXgnLFxuICAgIGRvY3VtZW50YXRpb246ICdTZWxlY3QgbWF4aW11bSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhdmcnLFxuICAgIGluc2VydFRleHQ6ICdhdmcnLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgdGhlIGF2ZXJhZ2Ugb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnZ3JvdXAnLFxuICAgIGluc2VydFRleHQ6ICdncm91cCcsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0FsbCB2YWx1ZXMgaW4gdGhlIHJlc3VsdGluZyB2ZWN0b3IgYXJlIDEnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzdGRkZXYnLFxuICAgIGluc2VydFRleHQ6ICdzdGRkZXYnLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgcG9wdWxhdGlvbiBzdGFuZGFyZCBkZXZpYXRpb24gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc3RkdmFyJyxcbiAgICBpbnNlcnRUZXh0OiAnc3RkdmFyJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHBvcHVsYXRpb24gc3RhbmRhcmQgdmFyaWFuY2Ugb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnY291bnQnLFxuICAgIGluc2VydFRleHQ6ICdjb3VudCcsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvdW50IG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgdmVjdG9yJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnY291bnRfdmFsdWVzJyxcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfdmFsdWVzJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ291bnQgbnVtYmVyIG9mIGVsZW1lbnRzIHdpdGggdGhlIHNhbWUgdmFsdWUnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdib3R0b21rJyxcbiAgICBpbnNlcnRUZXh0OiAnYm90dG9taycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NtYWxsZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndG9waycsXG4gICAgaW5zZXJ0VGV4dDogJ3RvcGsnLFxuICAgIGRvY3VtZW50YXRpb246ICdMYXJnZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAncXVhbnRpbGUnLFxuICAgIGluc2VydFRleHQ6ICdxdWFudGlsZScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSDPhi1xdWFudGlsZSAoMCDiiaQgz4Yg4omkIDEpIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRlVOQ1RJT05TID0gW1xuICAuLi5BR0dSRUdBVElPTl9PUEVSQVRPUlMsXG4gIC4uLlRSSUdPTk9NRVRSSUNfRlVOQ1RJT05TLFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2FicycsXG4gICAgbGFiZWw6ICdhYnMnLFxuICAgIGRldGFpbDogJ2Ficyh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdGhlIGlucHV0IHZlY3RvciB3aXRoIGFsbCBzYW1wbGUgdmFsdWVzIGNvbnZlcnRlZCB0byB0aGVpciBhYnNvbHV0ZSB2YWx1ZS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2Fic2VudCcsXG4gICAgbGFiZWw6ICdhYnNlbnQnLFxuICAgIGRldGFpbDogJ2Fic2VudCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIGFuIGVtcHR5IHZlY3RvciBpZiB0aGUgdmVjdG9yIHBhc3NlZCB0byBpdCBoYXMgYW55IGVsZW1lbnRzIGFuZCBhIDEtZWxlbWVudCB2ZWN0b3Igd2l0aCB0aGUgdmFsdWUgMSBpZiB0aGUgdmVjdG9yIHBhc3NlZCB0byBpdCBoYXMgbm8gZWxlbWVudHMuIFRoaXMgaXMgdXNlZnVsIGZvciBhbGVydGluZyBvbiB3aGVuIG5vIHRpbWUgc2VyaWVzIGV4aXN0IGZvciBhIGdpdmVuIG1ldHJpYyBuYW1lIGFuZCBsYWJlbCBjb21iaW5hdGlvbi4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2Fic2VudF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnYWJzZW50X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnYWJzZW50KHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIGFuIGVtcHR5IHZlY3RvciBpZiB0aGUgcmFuZ2UgdmVjdG9yIHBhc3NlZCB0byBpdCBoYXMgYW55IGVsZW1lbnRzIGFuZCBhIDEtZWxlbWVudCB2ZWN0b3Igd2l0aCB0aGUgdmFsdWUgMSBpZiB0aGUgcmFuZ2UgdmVjdG9yIHBhc3NlZCB0byBpdCBoYXMgbm8gZWxlbWVudHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjZWlsJyxcbiAgICBsYWJlbDogJ2NlaWwnLFxuICAgIGRldGFpbDogJ2NlaWwodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSb3VuZHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCB1cCB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2hhbmdlcycsXG4gICAgbGFiZWw6ICdjaGFuZ2VzJyxcbiAgICBkZXRhaWw6ICdjaGFuZ2VzKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdGb3IgZWFjaCBpbnB1dCB0aW1lIHNlcmllcywgYGNoYW5nZXModiByYW5nZS12ZWN0b3IpYCByZXR1cm5zIHRoZSBudW1iZXIgb2YgdGltZXMgaXRzIHZhbHVlIGhhcyBjaGFuZ2VkIHdpdGhpbiB0aGUgcHJvdmlkZWQgdGltZSByYW5nZSBhcyBhbiBpbnN0YW50IHZlY3Rvci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NsYW1wJyxcbiAgICBsYWJlbDogJ2NsYW1wJyxcbiAgICBkZXRhaWw6ICdjbGFtcCh2IGluc3RhbnQtdmVjdG9yLCBtaW4gc2NhbGFyLCBtYXggc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDbGFtcHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCB0byBoYXZlIGEgbG93ZXIgbGltaXQgb2YgYG1pbmAgYW5kIGFuIHVwcGVyIGxpbWl0IG9mIGBtYXhgLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2xhbXBfbWF4JyxcbiAgICBsYWJlbDogJ2NsYW1wX21heCcsXG4gICAgZGV0YWlsOiAnY2xhbXBfbWF4KHYgaW5zdGFudC12ZWN0b3IsIG1heCBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2xhbXBzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdG8gaGF2ZSBhbiB1cHBlciBsaW1pdCBvZiBgbWF4YC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NsYW1wX21pbicsXG4gICAgbGFiZWw6ICdjbGFtcF9taW4nLFxuICAgIGRldGFpbDogJ2NsYW1wX21pbih2IGluc3RhbnQtdmVjdG9yLCBtaW4gc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NsYW1wcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHRvIGhhdmUgYSBsb3dlciBsaW1pdCBvZiBgbWluYC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50X3NjYWxhcicsXG4gICAgbGFiZWw6ICdjb3VudF9zY2FsYXInLFxuICAgIGRldGFpbDogJ2NvdW50X3NjYWxhcih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gYSB0aW1lIHNlcmllcyB2ZWN0b3IgYXMgYSBzY2FsYXIuIFRoaXMgaXMgaW4gY29udHJhc3QgdG8gdGhlIGBjb3VudCgpYCBhZ2dyZWdhdGlvbiBvcGVyYXRvciwgd2hpY2ggYWx3YXlzIHJldHVybnMgYSB2ZWN0b3IgKGFuIGVtcHR5IG9uZSBpZiB0aGUgaW5wdXQgdmVjdG9yIGlzIGVtcHR5KSBhbmQgYWxsb3dzIGdyb3VwaW5nIGJ5IGxhYmVscyB2aWEgYSBgYnlgIGNsYXVzZS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2RlZycsXG4gICAgbGFiZWw6ICdkZWcnLFxuICAgIGRldGFpbDogJ2RlZyh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvbnZlcnRzIHJhZGlhbnMgdG8gZGVncmVlcyBmb3IgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2RheV9vZl9tb250aCcsXG4gICAgbGFiZWw6ICdkYXlfb2ZfbW9udGgnLFxuICAgIGRldGFpbDogJ2RheV9vZl9tb250aCh2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdGhlIGRheSBvZiB0aGUgbW9udGggZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDEgdG8gMzEuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkYXlfb2Zfd2VlaycsXG4gICAgbGFiZWw6ICdkYXlfb2Zfd2VlaycsXG4gICAgZGV0YWlsOiAnZGF5X29mX3dlZWsodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyB0aGUgZGF5IG9mIHRoZSB3ZWVrIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAwIHRvIDYsIHdoZXJlIDAgbWVhbnMgU3VuZGF5IGV0Yy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2RheXNfaW5fbW9udGgnLFxuICAgIGxhYmVsOiAnZGF5c19pbl9tb250aCcsXG4gICAgZGV0YWlsOiAnZGF5c19pbl9tb250aCh2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIG51bWJlciBvZiBkYXlzIGluIHRoZSBtb250aCBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMjggdG8gMzEuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkZWx0YScsXG4gICAgbGFiZWw6ICdkZWx0YScsXG4gICAgZGV0YWlsOiAnZGVsdGEodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZmlyc3QgYW5kIGxhc3QgdmFsdWUgb2YgZWFjaCB0aW1lIHNlcmllcyBlbGVtZW50IGluIGEgcmFuZ2UgdmVjdG9yIGB2YCwgcmV0dXJuaW5nIGFuIGluc3RhbnQgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGRlbHRhcyBhbmQgZXF1aXZhbGVudCBsYWJlbHMuIFRoZSBkZWx0YSBpcyBleHRyYXBvbGF0ZWQgdG8gY292ZXIgdGhlIGZ1bGwgdGltZSByYW5nZSBhcyBzcGVjaWZpZWQgaW4gdGhlIHJhbmdlIHZlY3RvciBzZWxlY3Rvciwgc28gdGhhdCBpdCBpcyBwb3NzaWJsZSB0byBnZXQgYSBub24taW50ZWdlciByZXN1bHQgZXZlbiBpZiB0aGUgc2FtcGxlIHZhbHVlcyBhcmUgYWxsIGludGVnZXJzLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGVyaXYnLFxuICAgIGxhYmVsOiAnZGVyaXYnLFxuICAgIGRldGFpbDogJ2Rlcml2KHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBwZXItc2Vjb25kIGRlcml2YXRpdmUgb2YgdGhlIHRpbWUgc2VyaWVzIGluIGEgcmFuZ2UgdmVjdG9yIGB2YCwgdXNpbmcgc2ltcGxlIGxpbmVhciByZWdyZXNzaW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZHJvcF9jb21tb25fbGFiZWxzJyxcbiAgICBsYWJlbDogJ2Ryb3BfY29tbW9uX2xhYmVscycsXG4gICAgZGV0YWlsOiAnZHJvcF9jb21tb25fbGFiZWxzKGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0Ryb3BzIGFsbCBsYWJlbHMgdGhhdCBoYXZlIHRoZSBzYW1lIG5hbWUgYW5kIHZhbHVlIGFjcm9zcyBhbGwgc2VyaWVzIGluIHRoZSBpbnB1dCB2ZWN0b3IuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdleHAnLFxuICAgIGxhYmVsOiAnZXhwJyxcbiAgICBkZXRhaWw6ICdleHAodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgZXhwb25lbnRpYWwgZnVuY3Rpb24gZm9yIGFsbCBlbGVtZW50cyBpbiBgdmAuXFxuU3BlY2lhbCBjYXNlcyBhcmU6XFxuKiBgRXhwKCtJbmYpID0gK0luZmAgXFxuKiBgRXhwKE5hTikgPSBOYU5gJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdmbG9vcicsXG4gICAgbGFiZWw6ICdmbG9vcicsXG4gICAgZGV0YWlsOiAnZmxvb3IodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSb3VuZHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCBkb3duIHRvIHRoZSBuZWFyZXN0IGludGVnZXIuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdoaXN0b2dyYW1fcXVhbnRpbGUnLFxuICAgIGxhYmVsOiAnaGlzdG9ncmFtX3F1YW50aWxlJyxcbiAgICBkZXRhaWw6ICdoaXN0b2dyYW1fcXVhbnRpbGUoz4YgZmxvYXQsIGIgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgZnJvbSB0aGUgYnVja2V0cyBgYmAgb2YgYSBoaXN0b2dyYW0uIFRoZSBzYW1wbGVzIGluIGBiYCBhcmUgdGhlIGNvdW50cyBvZiBvYnNlcnZhdGlvbnMgaW4gZWFjaCBidWNrZXQuIEVhY2ggc2FtcGxlIG11c3QgaGF2ZSBhIGxhYmVsIGBsZWAgd2hlcmUgdGhlIGxhYmVsIHZhbHVlIGRlbm90ZXMgdGhlIGluY2x1c2l2ZSB1cHBlciBib3VuZCBvZiB0aGUgYnVja2V0LiAoU2FtcGxlcyB3aXRob3V0IHN1Y2ggYSBsYWJlbCBhcmUgc2lsZW50bHkgaWdub3JlZC4pIFRoZSBoaXN0b2dyYW0gbWV0cmljIHR5cGUgYXV0b21hdGljYWxseSBwcm92aWRlcyB0aW1lIHNlcmllcyB3aXRoIHRoZSBgX2J1Y2tldGAgc3VmZml4IGFuZCB0aGUgYXBwcm9wcmlhdGUgbGFiZWxzLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnaG9sdF93aW50ZXJzJyxcbiAgICBsYWJlbDogJ2hvbHRfd2ludGVycycsXG4gICAgZGV0YWlsOiAnaG9sdF93aW50ZXJzKHYgcmFuZ2UtdmVjdG9yLCBzZiBzY2FsYXIsIHRmIHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUHJvZHVjZXMgYSBzbW9vdGhlZCB2YWx1ZSBmb3IgdGltZSBzZXJpZXMgYmFzZWQgb24gdGhlIHJhbmdlIGluIGB2YC4gVGhlIGxvd2VyIHRoZSBzbW9vdGhpbmcgZmFjdG9yIGBzZmAsIHRoZSBtb3JlIGltcG9ydGFuY2UgaXMgZ2l2ZW4gdG8gb2xkIGRhdGEuIFRoZSBoaWdoZXIgdGhlIHRyZW5kIGZhY3RvciBgdGZgLCB0aGUgbW9yZSB0cmVuZHMgaW4gdGhlIGRhdGEgaXMgY29uc2lkZXJlZC4gQm90aCBgc2ZgIGFuZCBgdGZgIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnaG91cicsXG4gICAgbGFiZWw6ICdob3VyJyxcbiAgICBkZXRhaWw6ICdob3VyKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgaG91ciBvZiB0aGUgZGF5IGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAwIHRvIDIzLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnaWRlbHRhJyxcbiAgICBsYWJlbDogJ2lkZWx0YScsXG4gICAgZGV0YWlsOiAnaWRlbHRhKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGxhc3QgdHdvIHNhbXBsZXMgaW4gdGhlIHJhbmdlIHZlY3RvciBgdmAsIHJldHVybmluZyBhbiBpbnN0YW50IHZlY3RvciB3aXRoIHRoZSBnaXZlbiBkZWx0YXMgYW5kIGVxdWl2YWxlbnQgbGFiZWxzLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnaW5jcmVhc2UnLFxuICAgIGxhYmVsOiAnaW5jcmVhc2UnLFxuICAgIGRldGFpbDogJ2luY3JlYXNlKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBpbmNyZWFzZSBpbiB0aGUgdGltZSBzZXJpZXMgaW4gdGhlIHJhbmdlIHZlY3Rvci4gQnJlYWtzIGluIG1vbm90b25pY2l0eSAoc3VjaCBhcyBjb3VudGVyIHJlc2V0cyBkdWUgdG8gdGFyZ2V0IHJlc3RhcnRzKSBhcmUgYXV0b21hdGljYWxseSBhZGp1c3RlZCBmb3IuIFRoZSBpbmNyZWFzZSBpcyBleHRyYXBvbGF0ZWQgdG8gY292ZXIgdGhlIGZ1bGwgdGltZSByYW5nZSBhcyBzcGVjaWZpZWQgaW4gdGhlIHJhbmdlIHZlY3RvciBzZWxlY3Rvciwgc28gdGhhdCBpdCBpcyBwb3NzaWJsZSB0byBnZXQgYSBub24taW50ZWdlciByZXN1bHQgZXZlbiBpZiBhIGNvdW50ZXIgaW5jcmVhc2VzIG9ubHkgYnkgaW50ZWdlciBpbmNyZW1lbnRzLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnaXJhdGUnLFxuICAgIGxhYmVsOiAnaXJhdGUnLFxuICAgIGRldGFpbDogJ2lyYXRlKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBwZXItc2Vjb25kIGluc3RhbnQgcmF0ZSBvZiBpbmNyZWFzZSBvZiB0aGUgdGltZSBzZXJpZXMgaW4gdGhlIHJhbmdlIHZlY3Rvci4gVGhpcyBpcyBiYXNlZCBvbiB0aGUgbGFzdCB0d28gZGF0YSBwb2ludHMuIEJyZWFrcyBpbiBtb25vdG9uaWNpdHkgKHN1Y2ggYXMgY291bnRlciByZXNldHMgZHVlIHRvIHRhcmdldCByZXN0YXJ0cykgYXJlIGF1dG9tYXRpY2FsbHkgYWRqdXN0ZWQgZm9yLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbGFiZWxfam9pbicsXG4gICAgbGFiZWw6ICdsYWJlbF9qb2luJyxcbiAgICBkZXRhaWw6XG4gICAgICAnbGFiZWxfam9pbih2IGluc3RhbnQtdmVjdG9yLCBkc3RfbGFiZWwgc3RyaW5nLCBzZXBhcmF0b3Igc3RyaW5nLCBzcmNfbGFiZWxfMSBzdHJpbmcsIHNyY19sYWJlbF8yIHN0cmluZywgLi4uKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdGb3IgZWFjaCB0aW1lc2VyaWVzIGluIGB2YCwgam9pbnMgYWxsIHRoZSB2YWx1ZXMgb2YgYWxsIHRoZSBgc3JjX2xhYmVsc2AgdXNpbmcgYHNlcGFyYXRvcmAgYW5kIHJldHVybnMgdGhlIHRpbWVzZXJpZXMgd2l0aCB0aGUgbGFiZWwgYGRzdF9sYWJlbGAgY29udGFpbmluZyB0aGUgam9pbmVkIHZhbHVlLiBUaGVyZSBjYW4gYmUgYW55IG51bWJlciBvZiBgc3JjX2xhYmVsc2AgaW4gdGhpcyBmdW5jdGlvbi4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xhYmVsX3JlcGxhY2UnLFxuICAgIGxhYmVsOiAnbGFiZWxfcmVwbGFjZScsXG4gICAgZGV0YWlsOiAnbGFiZWxfcmVwbGFjZSh2IGluc3RhbnQtdmVjdG9yLCBkc3RfbGFiZWwgc3RyaW5nLCByZXBsYWNlbWVudCBzdHJpbmcsIHNyY19sYWJlbCBzdHJpbmcsIHJlZ2V4IHN0cmluZyknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICBcIkZvciBlYWNoIHRpbWVzZXJpZXMgaW4gYHZgLCBgbGFiZWxfcmVwbGFjZSh2IGluc3RhbnQtdmVjdG9yLCBkc3RfbGFiZWwgc3RyaW5nLCByZXBsYWNlbWVudCBzdHJpbmcsIHNyY19sYWJlbCBzdHJpbmcsIHJlZ2V4IHN0cmluZylgICBtYXRjaGVzIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gYHJlZ2V4YCBhZ2FpbnN0IHRoZSBsYWJlbCBgc3JjX2xhYmVsYC4gIElmIGl0IG1hdGNoZXMsIHRoZW4gdGhlIHRpbWVzZXJpZXMgaXMgcmV0dXJuZWQgd2l0aCB0aGUgbGFiZWwgYGRzdF9sYWJlbGAgcmVwbGFjZWQgYnkgdGhlIGV4cGFuc2lvbiBvZiBgcmVwbGFjZW1lbnRgLiBgJDFgIGlzIHJlcGxhY2VkIHdpdGggdGhlIGZpcnN0IG1hdGNoaW5nIHN1Ymdyb3VwLCBgJDJgIHdpdGggdGhlIHNlY29uZCBldGMuIElmIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gZG9lc24ndCBtYXRjaCB0aGVuIHRoZSB0aW1lc2VyaWVzIGlzIHJldHVybmVkIHVuY2hhbmdlZC5cIixcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsbicsXG4gICAgbGFiZWw6ICdsbicsXG4gICAgZGV0YWlsOiAnbG4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgbmF0dXJhbCBsb2dhcml0aG0gZm9yIGFsbCBlbGVtZW50cyBpbiBgdmAuXFxuU3BlY2lhbCBjYXNlcyBhcmU6XFxuICogYGxuKCtJbmYpID0gK0luZmBcXG4gKiBgbG4oMCkgPSAtSW5mYFxcbiAqIGBsbih4IDwgMCkgPSBOYU5gXFxuICogYGxuKE5hTikgPSBOYU5gJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsb2cyJyxcbiAgICBsYWJlbDogJ2xvZzInLFxuICAgIGRldGFpbDogJ2xvZzIodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgYmluYXJ5IGxvZ2FyaXRobSBmb3IgYWxsIGVsZW1lbnRzIGluIGB2YC4gVGhlIHNwZWNpYWwgY2FzZXMgYXJlIGVxdWl2YWxlbnQgdG8gdGhvc2UgaW4gYGxuYC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xvZzEwJyxcbiAgICBsYWJlbDogJ2xvZzEwJyxcbiAgICBkZXRhaWw6ICdsb2cxMCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBkZWNpbWFsIGxvZ2FyaXRobSBmb3IgYWxsIGVsZW1lbnRzIGluIGB2YC4gVGhlIHNwZWNpYWwgY2FzZXMgYXJlIGVxdWl2YWxlbnQgdG8gdGhvc2UgaW4gYGxuYC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21pbnV0ZScsXG4gICAgbGFiZWw6ICdtaW51dGUnLFxuICAgIGRldGFpbDogJ21pbnV0ZSh2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBtaW51dGUgb2YgdGhlIGhvdXIgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDAgdG8gNTkuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtb250aCcsXG4gICAgbGFiZWw6ICdtb250aCcsXG4gICAgZGV0YWlsOiAnbW9udGgodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyB0aGUgbW9udGggb2YgdGhlIHllYXIgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDEgdG8gMTIsIHdoZXJlIDEgbWVhbnMgSmFudWFyeSBldGMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdwaScsXG4gICAgbGFiZWw6ICdwaScsXG4gICAgZGV0YWlsOiAncGkoKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgcGknLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3ByZWRpY3RfbGluZWFyJyxcbiAgICBsYWJlbDogJ3ByZWRpY3RfbGluZWFyJyxcbiAgICBkZXRhaWw6ICdwcmVkaWN0X2xpbmVhcih2IHJhbmdlLXZlY3RvciwgdCBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1ByZWRpY3RzIHRoZSB2YWx1ZSBvZiB0aW1lIHNlcmllcyBgdGAgc2Vjb25kcyBmcm9tIG5vdywgYmFzZWQgb24gdGhlIHJhbmdlIHZlY3RvciBgdmAsIHVzaW5nIHNpbXBsZSBsaW5lYXIgcmVncmVzc2lvbi4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3JhZCcsXG4gICAgbGFiZWw6ICdyYWQnLFxuICAgIGRldGFpbDogJ3JhZCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvbnZlcnRzIGRlZ3JlZXMgdG8gcmFkaWFucyBmb3IgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3JhdGUnLFxuICAgIGxhYmVsOiAncmF0ZScsXG4gICAgZGV0YWlsOiAncmF0ZSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICBcIkNhbGN1bGF0ZXMgdGhlIHBlci1zZWNvbmQgYXZlcmFnZSByYXRlIG9mIGluY3JlYXNlIG9mIHRoZSB0aW1lIHNlcmllcyBpbiB0aGUgcmFuZ2UgdmVjdG9yLiBCcmVha3MgaW4gbW9ub3RvbmljaXR5IChzdWNoIGFzIGNvdW50ZXIgcmVzZXRzIGR1ZSB0byB0YXJnZXQgcmVzdGFydHMpIGFyZSBhdXRvbWF0aWNhbGx5IGFkanVzdGVkIGZvci4gQWxzbywgdGhlIGNhbGN1bGF0aW9uIGV4dHJhcG9sYXRlcyB0byB0aGUgZW5kcyBvZiB0aGUgdGltZSByYW5nZSwgYWxsb3dpbmcgZm9yIG1pc3NlZCBzY3JhcGVzIG9yIGltcGVyZmVjdCBhbGlnbm1lbnQgb2Ygc2NyYXBlIGN5Y2xlcyB3aXRoIHRoZSByYW5nZSdzIHRpbWUgcGVyaW9kLlwiLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3Jlc2V0cycsXG4gICAgbGFiZWw6ICdyZXNldHMnLFxuICAgIGRldGFpbDogJ3Jlc2V0cyh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnRm9yIGVhY2ggaW5wdXQgdGltZSBzZXJpZXMsIGByZXNldHModiByYW5nZS12ZWN0b3IpYCByZXR1cm5zIHRoZSBudW1iZXIgb2YgY291bnRlciByZXNldHMgd2l0aGluIHRoZSBwcm92aWRlZCB0aW1lIHJhbmdlIGFzIGFuIGluc3RhbnQgdmVjdG9yLiBBbnkgZGVjcmVhc2UgaW4gdGhlIHZhbHVlIGJldHdlZW4gdHdvIGNvbnNlY3V0aXZlIHNhbXBsZXMgaXMgaW50ZXJwcmV0ZWQgYXMgYSBjb3VudGVyIHJlc2V0LicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncm91bmQnLFxuICAgIGxhYmVsOiAncm91bmQnLFxuICAgIGRldGFpbDogJ3JvdW5kKHYgaW5zdGFudC12ZWN0b3IsIHRvX25lYXJlc3Q9MSBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JvdW5kcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHRvIHRoZSBuZWFyZXN0IGludGVnZXIuIFRpZXMgYXJlIHJlc29sdmVkIGJ5IHJvdW5kaW5nIHVwLiBUaGUgb3B0aW9uYWwgYHRvX25lYXJlc3RgIGFyZ3VtZW50IGFsbG93cyBzcGVjaWZ5aW5nIHRoZSBuZWFyZXN0IG11bHRpcGxlIHRvIHdoaWNoIHRoZSBzYW1wbGUgdmFsdWVzIHNob3VsZCBiZSByb3VuZGVkLiBUaGlzIG11bHRpcGxlIG1heSBhbHNvIGJlIGEgZnJhY3Rpb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzY2FsYXInLFxuICAgIGxhYmVsOiAnc2NhbGFyJyxcbiAgICBkZXRhaWw6ICdzY2FsYXIodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnR2l2ZW4gYSBzaW5nbGUtZWxlbWVudCBpbnB1dCB2ZWN0b3IsIGBzY2FsYXIodiBpbnN0YW50LXZlY3RvcilgIHJldHVybnMgdGhlIHNhbXBsZSB2YWx1ZSBvZiB0aGF0IHNpbmdsZSBlbGVtZW50IGFzIGEgc2NhbGFyLiBJZiB0aGUgaW5wdXQgdmVjdG9yIGRvZXMgbm90IGhhdmUgZXhhY3RseSBvbmUgZWxlbWVudCwgYHNjYWxhcmAgd2lsbCByZXR1cm4gYE5hTmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzZ24nLFxuICAgIGxhYmVsOiAnc2duJyxcbiAgICBkZXRhaWw6ICdzZ24odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyBhIHZlY3RvciB3aXRoIGFsbCBzYW1wbGUgdmFsdWVzIGNvbnZlcnRlZCB0byB0aGVpciBzaWduLCBkZWZpbmVkIGFzIHRoaXM6IDEgaWYgdiBpcyBwb3NpdGl2ZSwgLTEgaWYgdiBpcyBuZWdhdGl2ZSBhbmQgMCBpZiB2IGlzIGVxdWFsIHRvIHplcm8uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzb3J0JyxcbiAgICBsYWJlbDogJ3NvcnQnLFxuICAgIGRldGFpbDogJ3NvcnQodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHZlY3RvciBlbGVtZW50cyBzb3J0ZWQgYnkgdGhlaXIgc2FtcGxlIHZhbHVlcywgaW4gYXNjZW5kaW5nIG9yZGVyLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc29ydF9kZXNjJyxcbiAgICBsYWJlbDogJ3NvcnRfZGVzYycsXG4gICAgZGV0YWlsOiAnc29ydF9kZXNjKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB2ZWN0b3IgZWxlbWVudHMgc29ydGVkIGJ5IHRoZWlyIHNhbXBsZSB2YWx1ZXMsIGluIGRlc2NlbmRpbmcgb3JkZXIuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzcXJ0JyxcbiAgICBsYWJlbDogJ3NxcnQnLFxuICAgIGRldGFpbDogJ3NxcnQodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGVzIHRoZSBzcXVhcmUgcm9vdCBvZiBhbGwgZWxlbWVudHMgaW4gYHZgLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAndGltZScsXG4gICAgbGFiZWw6ICd0aW1lJyxcbiAgICBkZXRhaWw6ICd0aW1lKCknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyB0aGUgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgSmFudWFyeSAxLCAxOTcwIFVUQy4gTm90ZSB0aGF0IHRoaXMgZG9lcyBub3QgYWN0dWFsbHkgcmV0dXJuIHRoZSBjdXJyZW50IHRpbWUsIGJ1dCB0aGUgdGltZSBhdCB3aGljaCB0aGUgZXhwcmVzc2lvbiBpcyB0byBiZSBldmFsdWF0ZWQuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICd0aW1lc3RhbXAnLFxuICAgIGxhYmVsOiAndGltZXN0YW1wJyxcbiAgICBkZXRhaWw6ICd0aW1lc3RhbXAodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyB0aGUgdGltZXN0YW1wIG9mIGVhY2ggb2YgdGhlIHNhbXBsZXMgb2YgdGhlIGdpdmVuIHZlY3RvciBhcyB0aGUgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgSmFudWFyeSAxLCAxOTcwIFVUQy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3ZlY3RvcicsXG4gICAgbGFiZWw6ICd2ZWN0b3InLFxuICAgIGRldGFpbDogJ3ZlY3RvcihzIHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSBzY2FsYXIgYHNgIGFzIGEgdmVjdG9yIHdpdGggbm8gbGFiZWxzLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAneWVhcicsXG4gICAgbGFiZWw6ICd5ZWFyJyxcbiAgICBkZXRhaWw6ICd5ZWFyKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgeWVhciBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYXZnX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdhdmdfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdhdmdfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgYXZlcmFnZSB2YWx1ZSBvZiBhbGwgcG9pbnRzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtaW5fb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ21pbl9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ21pbl9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtaW5pbXVtIHZhbHVlIG9mIGFsbCBwb2ludHMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21heF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbWF4X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbWF4X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1heGltdW0gdmFsdWUgb2YgYWxsIHBvaW50cyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3VtX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdW1fb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdW1fb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgc3VtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdjb3VudF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2NvdW50X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIGNvdW50IG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3F1YW50aWxlX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdxdWFudGlsZV9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3F1YW50aWxlX292ZXJfdGltZShzY2FsYXIsIHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgz4YtcXVhbnRpbGUgKDAg4omkIM+GIOKJpCAxKSBvZiB0aGUgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdGRkZXZfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N0ZGRldl9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N0ZGRldl9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBwb3B1bGF0aW9uIHN0YW5kYXJkIGRldmlhdGlvbiBvZiB0aGUgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdGR2YXJfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N0ZHZhcl9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N0ZHZhcl9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBwb3B1bGF0aW9uIHN0YW5kYXJkIHZhcmlhbmNlIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xhc3Rfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2xhc3Rfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdsYXN0X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1vc3QgcmVjZW50IHBvaW50IHZhbHVlIGluIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFBST01fS0VZV09SRFMgPSBGVU5DVElPTlMubWFwKChrZXl3b3JkKSA9PiBrZXl3b3JkLmxhYmVsKTtcblxuZXhwb3J0IGNvbnN0IHByb21xbEdyYW1tYXI6IEdyYW1tYXIgPSB7XG4gIGNvbW1lbnQ6IHtcbiAgICBwYXR0ZXJuOiAvIy4qLyxcbiAgfSxcbiAgJ2NvbnRleHQtYWdncmVnYXRpb24nOiB7XG4gICAgcGF0dGVybjogLygoYnl8d2l0aG91dClcXHMqKVxcKFteKV0qXFwpLywgLy8gYnkgKClcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgJ2xhYmVsLWtleSc6IHtcbiAgICAgICAgcGF0dGVybjogL1teKCksXFxzXVteLCldKlteKSxcXHNdKi8sXG4gICAgICAgIGFsaWFzOiAnYXR0ci1uYW1lJyxcbiAgICAgIH0sXG4gICAgICBwdW5jdHVhdGlvbjogL1soKV0vLFxuICAgIH0sXG4gIH0sXG4gICdjb250ZXh0LWxhYmVscyc6IHtcbiAgICBwYXR0ZXJuOiAvXFx7W159XSooPz19PykvLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogLyMuKi8sXG4gICAgICB9LFxuICAgICAgJ2xhYmVsLWtleSc6IHtcbiAgICAgICAgcGF0dGVybjogL1thLXpfXVxcdyooPz1cXHMqKD18IT18PX58IX4pKS8sXG4gICAgICAgIGFsaWFzOiAnYXR0ci1uYW1lJyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgICdsYWJlbC12YWx1ZSc6IHtcbiAgICAgICAgcGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXCJdKSpcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdhdHRyLXZhbHVlJyxcbiAgICAgIH0sXG4gICAgICBwdW5jdHVhdGlvbjogL1t7XS8sXG4gICAgfSxcbiAgfSxcbiAgZnVuY3Rpb246IG5ldyBSZWdFeHAoYFxcXFxiKD86JHtGVU5DVElPTlMubWFwKChmKSA9PiBmLmxhYmVsKS5qb2luKCd8Jyl9KSg/PVxcXFxzKlxcXFwoKWAsICdpJyksXG4gICdjb250ZXh0LXJhbmdlJzogW1xuICAgIHtcbiAgICAgIHBhdHRlcm46IC9cXFtbXlxcXV0qKD89XSkvLCAvLyBbMW1dXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3JhbmdlLWR1cmF0aW9uJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXGJcXGQrW3NtaGR3eV1cXGIvaSxcbiAgICAgICAgICBhbGlhczogJ251bWJlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0dGVybjogLyhvZmZzZXRcXHMrKVxcdysvLCAvLyBvZmZzZXQgMW1cbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3JhbmdlLWR1cmF0aW9uJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXGJcXGQrW3NtaGR3eV1cXGIvaSxcbiAgICAgICAgICBhbGlhczogJ251bWJlcicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIGlkTGlzdDoge1xuICAgIHBhdHRlcm46IC9cXGQrKFxcfFxcZCspKy8sXG4gICAgYWxpYXM6ICdudW1iZXInLFxuICB9LFxuICBudW1iZXI6IC9cXGItP1xcZCsoKFxcLlxcZCopPyhbZUVdWystXT9cXGQrKT8pP1xcYi8sXG4gIG9wZXJhdG9yOiBuZXcgUmVnRXhwKGAvWy0rKi89JV5+XXwmJj98XFxcXHw/XFxcXHx8IT0/fDwoPzo9Pj98PHw+KT98Pls+PV0/fFxcXFxiKD86JHtPUEVSQVRPUlMuam9pbignfCcpfSlcXFxcYmAsICdpJyksXG4gIHB1bmN0dWF0aW9uOiAvW3t9OygpYCwuXS8sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9tcWxHcmFtbWFyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURpc3BhdGNoIiwiY2xlYW5VcEFjdGlvbiIsInVzZUNsZWFudXAiLCJzdGF0ZVNlbGVjdG9yIiwiZGlzcGF0Y2giLCJzZWxlY3RvclJlZiIsImN1cnJlbnQiLCJSZWFjdCIsIk1vZGFsIiwiVmVydGljYWxHcm91cCIsIkFsZXJ0SG93VG9Nb2RhbCIsIm9uRGlzbWlzcyIsInVzZUNhbGxiYWNrIiwiSGlnaGxpZ2h0ZXIiLCJJY29uIiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsIkNhcmQiLCJBbGVydFJ1bGVJdGVtIiwicnVsZSIsInNlYXJjaCIsIm9uVG9nZ2xlUGF1c2UiLCJydWxlVXJsIiwidXJsIiwicGFuZWxJZCIsInJlbmRlclRleHQiLCJ0ZXh0IiwibmFtZSIsInN0YXRlSWNvbiIsInN0YXRlQ2xhc3MiLCJzdGF0ZVRleHQiLCJzdGF0ZUFnZSIsImluZm8iLCJzdGF0ZSIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwiY29uZmlnIiwibG9jYXRpb25TZXJ2aWNlIiwiRmlsdGVySW5wdXQiLCJTZWxlY3QiLCJhcHBFdmVudHMiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJTaG93TW9kYWxSZWFjdEV2ZW50IiwiRGVwcmVjYXRpb25Ob3RpY2UiLCJnZXRBbGVydFJ1bGVzQXN5bmMiLCJ0b2dnbGVQYXVzZUFsZXJ0UnVsZSIsInNldFNlYXJjaFF1ZXJ5IiwiZ2V0QWxlcnRSdWxlSXRlbXMiLCJnZXRTZWFyY2hRdWVyeSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJhbGVydFJ1bGVzIiwiaXNMb2FkaW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiQWxlcnRSdWxlTGlzdFVuY29ubmVjdGVkIiwibGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbiIsInBhcnRpYWwiLCJwdWJsaXNoIiwiY29tcG9uZW50IiwicHJvcHMiLCJpZCIsInBhdXNlZCIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hSdWxlcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInF1ZXJ5UGFyYW1zIiwiZ2V0U3RhdGVGaWx0ZXIiLCJyZW5kZXIiLCJvblNlYXJjaFF1ZXJ5Q2hhbmdlIiwic3RhdGVGaWx0ZXJzIiwib25TdGF0ZUZpbHRlckNoYW5nZWQiLCJ1bmlmaWVkQWxlcnRpbmdFbmFibGVkIiwib25PcGVuSG93VG8iLCJtYXAiLCJBbGVydCIsIkxPQ0FMX1NUT1JBR0VfS0VZIiwiZ2V0QmFja2VuZFNydiIsImlzRmV0Y2hFcnJvciIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImxvYWRBbGVydFJ1bGVzIiwibG9hZGVkQWxlcnRSdWxlcyIsIm5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQiLCJzZXROb3RpZmljYXRpb25DaGFubmVscyIsIm9wdGlvbnMiLCJydWxlcyIsImdldCIsInBvc3QiLCJzdGF0ZUZpbHRlciIsImdldFNlYXJjaE9iamVjdCIsInRvU3RyaW5nIiwiY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJ1cGRhdGVOb3RpZmljYXRpb25DaGFubmVsIiwicHV0IiwidGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwiLCJnZXRTdGF0ZSIsImNoYW5uZWwiLCJub3RpZmljYXRpb25DaGFubmVsIiwibG9hZE5vdGlmaWNhdGlvblR5cGVzIiwiYWxlcnROb3RpZmllcnMiLCJub3RpZmljYXRpb25UeXBlcyIsInNvcnQiLCJvMSIsIm8yIiwibG9hZE5vdGlmaWNhdGlvbkNoYW5uZWwiLCJzZWFyY2hRdWVyeSIsInJlZ2V4IiwiUmVnRXhwIiwiaXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwidGVzdCIsImdldE5vdGlmaWNhdGlvbkNoYW5uZWwiLCJjaGFubmVsSWQiLCJjc3MiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VMb2NhdGlvbiIsInVybFV0aWwiLCJ1c2VTdHlsZXMyIiwid2l0aEVycm9yQm91bmRhcnkiLCJ1c2VRdWVyeVBhcmFtcyIsIkFsZXJ0aW5nUGFnZVdyYXBwZXIiLCJOb1J1bGVzU3BsYXNoIiwiUnVsZUxpc3RFcnJvcnMiLCJSdWxlTGlzdEdyb3VwVmlldyIsIlJ1bGVMaXN0U3RhdGVWaWV3IiwiUnVsZVN0YXRzIiwiUnVsZXNGaWx0ZXIiLCJ1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzIiwidXNlRmlsdGVyZWRSdWxlcyIsInVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIiwiZmV0Y2hBbGxQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbiIsInVzZVJ1bGVzQWNjZXNzIiwiUlVMRV9MSVNUX1BPTExfSU5URVJWQUxfTVMiLCJnZXRBbGxSdWxlc1NvdXJjZU5hbWVzIiwiZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMiLCJWSUVXUyIsImdyb3VwcyIsIlJ1bGVMaXN0Iiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwicnVsZXNEYXRhU291cmNlTmFtZXMiLCJsb2NhdGlvbiIsImV4cGFuZEFsbCIsInNldEV4cGFuZEFsbCIsImZpbHRlcnMiLCJmaWx0ZXJzQWN0aXZlIiwiT2JqZWN0IiwidmFsdWVzIiwic29tZSIsInVuZGVmaW5lZCIsImNhbkNyZWF0ZUdyYWZhbmFSdWxlcyIsImNhbkNyZWF0ZUNsb3VkUnVsZXMiLCJ2aWV3IiwiVmlld0NvbXBvbmVudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicHJvbVJ1bGVSZXF1ZXN0cyIsInByb21SdWxlcyIsInJ1bGVyUnVsZVJlcXVlc3RzIiwicnVsZXJSdWxlcyIsImRpc3BhdGNoZWQiLCJsb2FkaW5nIiwiaGF2ZVJlc3VsdHMiLCJyZXN1bHQiLCJsZW5ndGgiLCJrZXlzIiwic2hvd05ld0FsZXJ0U3BsYXNoIiwiY29tYmluZWROYW1lc3BhY2VzIiwiZmlsdGVyZWROYW1lc3BhY2VzIiwiYnJlYWsiLCJidXR0b25zQ29udGFpbmVyIiwic3RhdHNDb250YWluZXIiLCJleHBhbmRBbGxCdXR0b24iLCJyZW5kZXJVcmwiLCJyZXR1cm5UbyIsInBhdGhuYW1lIiwic3R5bGUiLCJ0aGVtZSIsInNwYWNpbmciLCJjb2xvcnMiLCJib3JkZXIiLCJtZWRpdW0iLCJ1c2VTZWxlY3RvciIsImNoaWxkcmVuIiwicGFnZUlkIiwiY29udGV4dFNydiIsIkF1dGhvcml6ZSIsImFjdGlvbnMiLCJmYWxsYmFjayIsImFjdGlvbiIsImhhc0FjY2VzcyIsImN4IiwiRHluYW1pY1RhYmxlIiwiRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXMiLCJyZW5kZXJFeHBhbmRlZENvbnRlbnQiLCJpbmRleCIsImNvbnRlbnRHdWlkZWxpbmUiLCJndWlkZWxpbmUiLCJyZWxhdGl2ZSIsImhlYWRlckd1aWRlbGluZSIsIl8iLCJ0b3BHdWlkZWxpbmUiLCJib3R0b21HdWlkZWxpbmUiLCJicmVha3BvaW50cyIsImRvd24iLCJsYW5ndWFnZXMiLCJwcmlzbUxhbmd1YWdlcyIsIkVkaXRvciIsIm1ha2VWYWx1ZSIsIlNsYXRlUHJpc20iLCJ1c2VTdHlsZXMiLCJMb2dxbFN5bnRheCIsIlByb21xbFN5bnRheCIsIkRhdGFTb3VyY2VUeXBlIiwiaXNDbG91ZFJ1bGVzU291cmNlIiwiV2VsbCIsIkhpZ2hsaWdodGVkUXVlcnkiLCJsYW5ndWFnZSIsImV4cHIiLCJwbHVnaW5zIiwib25seUluIiwibm9kZSIsInR5cGUiLCJnZXRTeW50YXgiLCJzbGF0ZVZhbHVlIiwiRXhwcmVzc2lvbiIsImV4cHJlc3Npb24iLCJxdWVyeSIsInJ1bGVzU291cmNlIiwid2VsbCIsIkxva2kiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsIm1vbm9zcGFjZSIsIkJhZGdlIiwiUHJvdmlzaW9uZWRSZXNvdXJjZSIsIlByb3Zpc2lvbmluZ0FsZXJ0IiwicmVzb3VyY2UiLCJQcm92aXNpb25pbmdCYWRnZSIsIlJ1bGVMb2NhdGlvbiIsIm5hbWVzcGFjZSIsImdyb3VwIiwiUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIiwiU3RhdGVDb2xvcmVkVGV4dCIsInN0YXR1cyIsIkluYWN0aXZlIiwic3VjY2VzcyIsIlBlbmRpbmciLCJ3YXJuaW5nIiwiRmlyaW5nIiwibmV1dHJhbCIsInNlY29uZGFyeSIsIlN0YWNrIiwiTGFiZWwiLCJUb29sdGlwIiwiSW5wdXQiLCJNYXRjaGVyRmlsdGVyIiwiY2xhc3NOYW1lIiwib25GaWx0ZXJDaGFuZ2UiLCJkZWZhdWx0UXVlcnlTdHJpbmciLCJxdWVyeVN0cmluZyIsImhhbmRsZVNlYXJjaENoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZWFyY2hJY29uIiwiaWNvbiIsImlucHV0V2lkdGgiLCJBY3Rpb25JY29uIiwidG9vbHRpcCIsInRvIiwib25DbGljayIsInRvb2x0aXBQbGFjZW1lbnQiLCJyZXN0IiwiYXJpYUxhYmVsIiwiY2FwaXRhbGl6ZSIsIlJhZGlvQnV0dG9uR3JvdXAiLCJUYWciLCJHcmFmYW5hQWxlcnRTdGF0ZSIsIkFsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlciIsIm9uU3RhdGVGaWx0ZXJDaGFuZ2UiLCJmaWx0ZXJUeXBlIiwiaXRlbVBlclN0YXRlU3RhdHMiLCJnZXRPcHRpb25Db21wb25lbnQiLCJJbnN0YW5jZVN0YXRlQ291bnRlciIsInRvRml4ZWQiLCJ0YWciLCJncmFmYW5hT3B0aW9ucyIsInByb21PcHRpb25WYWx1ZXMiLCJwcm9tT3B0aW9ucyIsInN0YXRlT3B0aW9ucyIsInYiLCJwbHVyYWxpemUiLCJMb2FkaW5nUGxhY2Vob2xkZXIiLCJQYWdpbmF0aW9uIiwiREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIiwidXNlUGFnaW5hdGlvbiIsImdldFBhZ2luYXRpb25TdHlsZXMiLCJnZXRSdWxlc0RhdGFTb3VyY2VzIiwiZ2V0UnVsZXNTb3VyY2VVaWQiLCJSdWxlc0dyb3VwIiwidXNlQ29tYmluZWRHcm91cE5hbWVzcGFjZSIsIkNsb3VkUnVsZXMiLCJuYW1lc3BhY2VzIiwicnVsZXNEYXRhU291cmNlcyIsImdyb3Vwc1dpdGhOYW1lc3BhY2VzIiwiZGF0YVNvdXJjZXNMb2FkaW5nIiwiZHMiLCJudW1iZXJPZlBhZ2VzIiwib25QYWdlQ2hhbmdlIiwicGFnZSIsInBhZ2VJdGVtcyIsIndyYXBwZXIiLCJzZWN0aW9uSGVhZGVyIiwibG9hZGVyIiwicGFnaW5hdGlvbiIsIkZvcm0iLCJGaWVsZCIsInVwZGF0ZUxvdGV4TmFtZXNwYWNlQW5kR3JvdXBBY3Rpb24iLCJnZXRSdWxlc1NvdXJjZU5hbWUiLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJkdXJhdGlvblZhbGlkYXRpb25QYXR0ZXJuIiwiRWRpdENsb3VkR3JvdXBNb2RhbCIsIm9uQ2xvc2UiLCJ1cGRhdGVMb3RleE5hbWVzcGFjZUFuZEdyb3VwIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWVzcGFjZU5hbWUiLCJncm91cE5hbWUiLCJncm91cEludGVydmFsIiwidW5pZmllZEFsZXJ0aW5nIiwib25TdWJtaXQiLCJydWxlc1NvdXJjZU5hbWUiLCJuZXdHcm91cE5hbWUiLCJuZXdOYW1lc3BhY2VOYW1lIiwibW9kYWwiLCJyZWdpc3RlciIsImVycm9ycyIsImZvcm1TdGF0ZSIsImlzRGlydHkiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwiSlNPTiIsInN0cmluZ2lmeSIsImZsYXR0ZW5HcmFmYW5hTWFuYWdlZFJ1bGVzIiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsIkdyYWZhbmFSdWxlcyIsIndhbnRzR3JvdXBlZFZpZXciLCJuYW1lc3BhY2VzRm9ybWF0IiwiQ2FsbFRvQWN0aW9uQ2FyZCIsIkVtcHR5TGlzdENUQSIsIkFsZXJ0TGFiZWxzIiwiRGV0YWlsc0ZpZWxkIiwiUnVsZURldGFpbHNBY3Rpb25CdXR0b25zIiwiUnVsZURldGFpbHNBbm5vdGF0aW9ucyIsIlJ1bGVEZXRhaWxzRGF0YVNvdXJjZXMiLCJSdWxlRGV0YWlsc0V4cHJlc3Npb24iLCJSdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzIiwiSU5TVEFOQ0VTX0RJU1BMQVlfTElNSVQiLCJSdWxlRGV0YWlscyIsImFubm90YXRpb25zIiwiZW50cmllcyIsInRyaW0iLCJsZWZ0U2lkZSIsImxhYmVscyIsInJpZ2h0U2lkZSIsInVwIiwiRnJhZ21lbnQiLCJDbGlwYm9hcmRCdXR0b24iLCJDb25maXJtTW9kYWwiLCJIb3Jpem9udGFsR3JvdXAiLCJ1c2VBcHBOb3RpZmljYXRpb24iLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwidXNlSXNSdWxlRWRpdGFibGUiLCJ1c2VTdGF0ZUhpc3RvcnlNb2RhbCIsImRlbGV0ZVJ1bGVBY3Rpb24iLCJnZXRBbGVydG1hbmFnZXJCeVVpZCIsIkFubm90YXRpb24iLCJpc0dyYWZhbmFSdWxlc1NvdXJjZSIsImNyZWF0ZUV4cGxvcmVMaW5rIiwiY3JlYXRlVmlld0xpbmsiLCJtYWtlUnVsZUJhc2VkU2lsZW5jZUxpbmsiLCJydWxlSWQiLCJpc0ZlZGVyYXRlZFJ1bGVHcm91cCIsImlzR3JhZmFuYVJ1bGVyUnVsZSIsInJ1bGVyUnVsZSIsInJ1bGVUb0RlbGV0ZSIsInNldFJ1bGVUb0RlbGV0ZSIsImFsZXJ0SWQiLCJncmFmYW5hX2FsZXJ0IiwiU3RhdGVIaXN0b3J5TW9kYWwiLCJzaG93U3RhdGVIaXN0b3J5TW9kYWwiLCJhbGVydG1hbmFnZXJTb3VyY2VOYW1lIiwianNvbkRhdGEiLCJhbGVydG1hbmFnZXJVaWQiLCJoYXNFeHBsb3JlUGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb24iLCJEYXRhU291cmNlc0V4cGxvcmUiLCJpc1Byb3Zpc2lvbmVkIiwiQm9vbGVhbiIsInByb3ZlbmFuY2UiLCJsZWZ0QnV0dG9ucyIsInJpZ2h0QnV0dG9ucyIsImlzRmVkZXJhdGVkIiwiaXNFZGl0YWJsZSIsImlzUmVtb3ZhYmxlIiwiaXNWaWV3TW9kZSIsImluVmlld01vZGUiLCJkZWxldGVSdWxlIiwiaWRlbnRpZmllciIsImZyb21SdWxlclJ1bGUiLCJuYXZpZ2F0ZVRvIiwiYnVpbGRTaGFyZVVybCIsImFwcFVybCIsImFwcFN1YlVybCIsImJhc2VVcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3aW5kb3ciLCJocmVmIiwic3BsaXQiLCJidXR0b24iLCJydW5ib29rVVJMIiwiZGFzaGJvYXJkVUlEIiwicGFuZWxJRCIsIkFsZXJ0aW5nSW5zdGFuY2VDcmVhdGUiLCJpc0VkaXRvciIsInNvdXJjZU5hbWUiLCJlZGl0VVJMIiwic3RyaW5naWZ5SWRlbnRpZmllciIsImNvcGllZFRleHQiLCJlbmRzV2l0aCIsInNpemUiLCJzbSIsIkFubm90YXRpb25EZXRhaWxzRmllbGQiLCJrZXkiLCJnZXREYXRhU291cmNlU3J2IiwiRXhwcmVzc2lvbkRhdGFzb3VyY2VVSUQiLCJkYXRhU291cmNlcyIsIm1ldGEiLCJsb2dvcyIsInNtYWxsIiwidW5pcXVlIiwicmVkdWNlIiwiZ2V0SW5zdGFuY2VTZXR0aW5ncyIsImRhdGFzb3VyY2VVaWQiLCJ1aWQiLCJkYXRhU291cmNlSWNvbiIsImV4cHJSb3ciLCJjb3VudEJ5IiwibGFiZWxzTWF0Y2hNYXRjaGVycyIsInBhcnNlTWF0Y2hlcnMiLCJzb3J0QWxlcnRzIiwiU29ydE9yZGVyIiwibWFwU3RhdGVXaXRoUmVhc29uVG9CYXNlU3RhdGUiLCJpc0FsZXJ0aW5nUnVsZSIsIkFsZXJ0SW5zdGFuY2VzVGFibGUiLCJTaG93TW9yZUluc3RhbmNlcyIsInJ1bGVWaWV3UGFnZUxpbmsiLCJzdGF0cyIsImZvb3RlclJvdyIsInZpc2libGVJdGVtc0NvdW50IiwidG90YWxJdGVtc0NvdW50IiwicHJvbVJ1bGUiLCJpdGVtc0Rpc3BsYXlMaW1pdCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwic2V0UXVlcnlTdHJpbmciLCJhbGVydFN0YXRlIiwic2V0QWxlcnRTdGF0ZSIsImZpbHRlcktleSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInF1ZXJ5U3RyaW5nS2V5Iiwic3RhdGVGaWx0ZXJUeXBlIiwiYWxlcnRzIiwiZmlsdGVyQWxlcnRzIiwiSW1wb3J0YW5jZSIsInZpc2libGVJbnN0YW5jZXMiLCJzbGljZSIsImNvdW50QWxsQnlTdGF0ZSIsImFsZXJ0IiwiaGlkZGVuSXRlbXNDb3VudCIsImZsZXhSb3ciLCJzcGFjZUJldHdlZW4iLCJyb3dDaGlsZCIsImFsZXJ0SW5zdGFuY2VMYWJlbCIsImFsZXJ0SW5zdGFuY2VTdGF0ZSIsImZpbHRlcmVkQWxlcnRzIiwibWF0Y2hlcnMiLCJSdWxlSGVhbHRoIiwiZ2V0U3R5bGUiLCJoZWFsdGgiLCJsYXN0RXJyb3IiLCJ3YXJuIiwidXNlTG9jYWxTdG9yYWdlIiwiaXNSdWxlck5vdFN1cHBvcnRlZFJlc3BvbnNlIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImNsb3NlZCIsInNldENsb3NlZCIsImRhdGFTb3VyY2VDb25maWdSZXF1ZXN0cyIsImRhdGFTb3VyY2VDb25maWdFcnJvcnMiLCJwcm9tUmVxdWVzdEVycm9ycyIsInJ1bGVyUmVxdWVzdEVycm9ycyIsInJlcXVlc3RzIiwiZGF0YVNvdXJjZSIsImdyYWZhbmFQcm9tRXJyb3IiLCJncmFmYW5hUnVsZXJFcnJvciIsImZvckVhY2giLCJpZHgiLCJtb3JlQnV0dG9uIiwiRXJyb3JTdW1tYXJ5QnV0dG9uIiwiY291bnQiLCJmbG9hdFJpZ2h0IiwiZ3JhZmFuYU5hbWVzcGFjZXMiLCJjbG91ZE5hbWVzcGFjZXMiLCJzb3J0ZWQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJucyIsIkFsZXJ0aW5nUnVsZVJlYWQiLCJBbGVydGluZ1J1bGVFeHRlcm5hbFJlYWQiLCJhbGVydFN0YXRlVG9SZWFkYWJsZSIsIkNvbGxhcHNlVG9nZ2xlIiwiUnVsZXNUYWJsZSIsIlJ1bGVMaXN0U3RhdGVTZWN0aW9uIiwiZGVmYXVsdENvbGxhcHNlZCIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImhlYWRlciIsImNvbGxhcHNlVG9nZ2xlIiwicnVsZXNUYWJsZSIsImdyb3VwZWRSdWxlcyIsImludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nIiwiU3Bpbm5lciIsImlzUmVjb3JkaW5nUnVsZSIsImdldEZpcnN0QWN0aXZlQXQiLCJBbGVydFN0YXRlVGFnIiwiUnVsZVN0YXRlIiwiaXNEZWxldGluZyIsImlzQ3JlYXRpbmciLCJmb3JUaW1lIiwiZmlyc3RBY3RpdmVBdCIsIlN0cmluZyIsImZvciIsInN0YXJ0IiwiZW5kIiwiRGF0ZSIsImJvZHlTbWFsbCIsImZvbnRTaXplIiwiaXNSZWNvcmRpbmdSdWxlclJ1bGUiLCJlbXB0eVN0YXRzIiwidG90YWwiLCJyZWNvcmRpbmciLCJzaG93SW5hY3RpdmUiLCJzaG93UmVjb3JkaW5nIiwiY2FsY3VsYXRlZCIsImNhbGNSdWxlIiwic3RhdHNDb21wb25lbnRzIiwicHJldiIsImN1cnIiLCJkZWJvdW5jZSIsIkRhdGFTb3VyY2VQaWNrZXIiLCJQcm9tUnVsZVR5cGUiLCJWaWV3T3B0aW9ucyIsIlJ1bGVUeXBlT3B0aW9ucyIsIkFsZXJ0aW5nIiwiUmVjb3JkaW5nIiwic2V0UXVlcnlQYXJhbXMiLCJzZXRGaWx0ZXJLZXkiLCJkYXRhU291cmNlS2V5IiwicnVsZVR5cGUiLCJoYW5kbGVEYXRhU291cmNlQ2hhbmdlIiwiZGF0YVNvdXJjZVZhbHVlIiwiY2xlYXJEYXRhU291cmNlIiwiaGFuZGxlUXVlcnlTdHJpbmdDaGFuZ2UiLCJoYW5kbGVBbGVydFN0YXRlQ2hhbmdlIiwiaGFuZGxlVmlld0NoYW5nZSIsImhhbmRsZVJ1bGVUeXBlQ2hhbmdlIiwiaGFuZGxlQ2xlYXJGaWx0ZXJzQ2xpY2siLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY2xlYXJCdXR0b24iLCJrYm4iLCJ1c2VGb2xkZXIiLCJ1c2VIYXNSdWxlciIsImRlbGV0ZVJ1bGVzR3JvdXBBY3Rpb24iLCJtZW1vIiwiaXNFZGl0aW5nR3JvdXAiLCJzZXRJc0VkaXRpbmdHcm91cCIsImlzRGVsZXRpbmdHcm91cCIsInNldElzRGVsZXRpbmdHcm91cCIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJjYW5FZGl0UnVsZXMiLCJoYXNSdWxlciIsImZvbGRlclVJRCIsIm5hbWVzcGFjZV91aWQiLCJmb2xkZXIiLCJmaW5kIiwiZGVsZXRlR3JvdXAiLCJhY3Rpb25JY29ucyIsInNsdWdpZnlGb3JVcmwiLCJjYW5TYXZlIiwiY2FuQWRtaW4iLCJpc1VuZ3JvdXBlZCIsImhlYWRpbmciLCJzcGFjZXIiLCJoZWFkZXJTdGF0cyIsImFjdGlvbnNTZXBhcmF0b3IiLCJkaXNwbGF5TmFtZSIsImJhY2tncm91bmQiLCJkYXRhU291cmNlT3JpZ2luIiwiZGlzYWJsZWQiLCJzaG93R3VpZGVsaW5lcyIsImVtcHR5TWVzc2FnZSIsInNob3dHcm91cENvbHVtbiIsInNob3dTdW1tYXJ5Q29sdW1uIiwid3JhcHBlckNsYXNzIiwid3JhcHBlck1hcmdpbiIsInNlZW5LZXlzIiwicnVsZUlkeCIsImluY2x1ZGVzIiwiY29sdW1ucyIsInVzZUNvbHVtbnMiLCJUYWJsZUNvbXBvbmVudCIsIml0ZW1zUGVyUGFnZSIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwic3Ryb25nIiwicmVuZGVyQ2VsbCIsImlzR3JhZmFuYU1hbmFnZWRSdWxlIiwic3VtbWFyeSIsInVuaXF1ZUlkIiwiZGF0ZVRpbWVGb3JtYXQiLCJ1c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkiLCJBbGVydExhYmVsIiwiU3RhdGVIaXN0b3J5IiwicmVuZGVyU3RhdGVDZWxsIiwicmVuZGVyVmFsdWVDZWxsIiwicmVuZGVyVGltZXN0YW1wQ2VsbCIsImFjYyIsIm5ld1N0YXRlIiwidGltZXN0YW1wIiwidXBkYXRlZCIsImhhc01hdGNoaW5nUHJlY2VkaW5nU3RhdGUiLCJwcmV2U3RhdGUiLCJoaXN0b3J5SXRlbSIsIm1hdGNoZXMiLCJldmFsTWF0Y2hlcyIsIm1hdGNoIiwibWV0cmljIiwiVGltZXN0YW1wU3R5bGUiLCJMYWJlbHNXcmFwcGVyIiwieHMiLCJjdXJyZW50SGlzdG9yeUl0ZW0iLCJwcmV2aW91c0hpc3RvcnlJdGVtIiwiZmxhdE1hcCIsImciLCJnZXRBbGxSdWxlc1NvdXJjZXMiLCJnZXRSdWxlc1NvdXJjZUJ5TmFtZSIsImlzQWxlcnRpbmdSdWxlclJ1bGUiLCJwcm9tUnVsZXNSZXNwb25zZXMiLCJydWxlclJ1bGVzUmVzcG9uc2VzIiwiY2FjaGUiLCJydWxlc1NvdXJjZXMiLCJFcnJvciIsImNhY2hlZCIsImFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsImFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlIiwiZmxhdCIsIm5ld05hbWVzcGFjZSIsInNvcnRSdWxlc0J5TmFtZSIsImNvbWJpbmVkR3JvdXAiLCJzb3VyY2VfdGVuYW50cyIsInJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlIiwiZXhpc3RpbmdSdWxlIiwiZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cCIsInByb21SdWxlVG9Db21iaW5lZFJ1bGUiLCJyZWNvcmQiLCJ0aXRsZSIsImlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlIiwiY29tYmluZWRSdWxlIiwiY2hlY2tRdWVyeSIsImhhc2hRdWVyeSIsInJlcGxhY2UiLCJqb2luIiwicmVkdWNlTmFtZXNwYWNlcyIsIm5hbWVzcGFjZUFjYyIsInJlZHVjZUdyb3VwcyIsImdyb3VwQWNjIiwiaXNRdWVyeWluZ0RhdGFTb3VyY2UiLCJub3JtYWxpemVkUXVlcnlTdHJpbmciLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImRvZXNOYW1lQ29udGFpbnNRdWVyeVN0cmluZyIsImRvUnVsZUxhYmVsc01hdGNoUXVlcnkiLCJkb0FsZXJ0c0NvbnRhaW5NYXRjaGluZ0xhYmVscyIsImZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uIiwiZm9sZGVyUmVxdWVzdHMiLCJmb2xkZXJzIiwicmVxdWVzdCIsImdldFJ1bGVzUGVybWlzc2lvbnMiLCJydWxlUGVybWlzc2lvbiIsImNhbkVkaXRHcmFmYW5hUnVsZXMiLCJ1cGRhdGUiLCJjYW5SZW1vdmVHcmFmYW5hUnVsZXMiLCJkZWxldGUiLCJpc1J1bGVyQXZhaWxhYmxlIiwicnVsZXJDb25maWciLCJjYW5FZGl0Q2xvdWRSdWxlcyIsImNhblJlbW92ZUNsb3VkUnVsZXMiLCJmZXRjaEdyYWZhbmFBbm5vdGF0aW9uc0FjdGlvbiIsImhpc3RvcnkiLCJtYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoaWRlU3RhdGVIaXN0b3J5TW9kYWwiLCJnZXRSdWxlc0FjY2VzcyIsIkFHR1JFR0FUSU9OX09QRVJBVE9SUyIsImluc2VydFRleHQiLCJkb2N1bWVudGF0aW9uIiwiUElQRV9QQVJTRVJTIiwibW92ZSIsImRldGFpbCIsIlBJUEVfT1BFUkFUT1JTIiwiUkFOR0VfVkVDX0ZVTkNUSU9OUyIsIkZVTkNUSU9OUyIsIkxPS0lfS0VZV09SRFMiLCJrZXl3b3JkIiwibG9raUdyYW1tYXIiLCJjb21tZW50IiwibG9va2JlaGluZCIsImluc2lkZSIsImFsaWFzIiwicHVuY3R1YXRpb24iLCJncmVlZHkiLCJmIiwiZnVuY3Rpb24iLCJxdW90ZSIsImJhY2t0aWNrcyIsIm51bWJlciIsIm9wZXJhdG9yIiwiUkFURV9SQU5HRVMiLCJzb3J0VmFsdWUiLCJPUEVSQVRPUlMiLCJMT0dJQ0FMX09QRVJBVE9SUyIsIlRSSUdPTk9NRVRSSUNfRlVOQ1RJT05TIiwiUFJPTV9LRVlXT1JEUyIsInByb21xbEdyYW1tYXIiLCJpZExpc3QiXSwic291cmNlUm9vdCI6IiJ9