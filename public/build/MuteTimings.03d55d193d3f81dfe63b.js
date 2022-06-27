"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["MuteTimings"],{

/***/ "./public/app/features/alerting/unified/MuteTimings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _components_amroutes_MuteTimingForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingForm.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _Route, _Redirect;
















const MuteTimings = () => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__.useQueryParams)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_6__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__.useAlertManagerSourceName)(alertManagers);
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const fetchConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchConfig();
  }, [fetchConfig]);
  const {
    result,
    error,
    loading
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_9__.initialAsyncRequestState;
  const config = result === null || result === void 0 ? void 0 : result.alertmanager_config;
  const getMuteTimingByName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => {
    var _config$mute_time_int;

    const timing = config === null || config === void 0 ? void 0 : (_config$mute_time_int = config.mute_time_intervals) === null || _config$mute_time_int === void 0 ? void 0 : _config$mute_time_int.find(({
      name
    }) => name === id);

    if (timing) {
      var _config$muteTimeProve;

      const provenance = ((_config$muteTimeProve = config === null || config === void 0 ? void 0 : config.muteTimeProvenances) !== null && _config$muteTimeProve !== void 0 ? _config$muteTimeProve : {})[timing.name];
      return Object.assign({}, timing, {
        provenance
      });
    }

    return timing;
  }, [config]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
      text: "Loading mute timing"
    }))), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "error",
      title: `Error loading Alertmanager config for ${alertManagerSourceName}`,
      children: error.message || 'Unknown error.'
    }), result && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Switch, {
      children: [_Route || (_Route = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        exact: true,
        path: "/alerting/routes/mute-timing/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_amroutes_MuteTimingForm__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        exact: true,
        path: "/alerting/routes/mute-timing/edit",
        children: () => {
          if (queryParams['muteName']) {
            const muteTiming = getMuteTimingByName(String(queryParams['muteName']));
            const provenance = muteTiming === null || muteTiming === void 0 ? void 0 : muteTiming.provenance;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_amroutes_MuteTimingForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
              muteTiming: muteTiming,
              showError: !muteTiming,
              provenance: provenance
            });
          }

          return _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Redirect, {
            to: "/alerting/routes"
          }));
        }
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MuteTimings);

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

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/mute-timings.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _MuteTimingTimeInterval__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeInterval.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _MuteTimingTimeInterv;





















const useDefaultValues = muteTiming => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const defaultValues = {
      name: '',
      time_intervals: [_utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval]
    };

    if (!muteTiming) {
      return defaultValues;
    }

    const intervals = muteTiming.time_intervals.map(interval => {
      var _interval$times, _interval$weekdays$jo, _interval$weekdays, _interval$days_of_mon, _interval$days_of_mon2, _interval$months$join, _interval$months, _interval$years$join, _interval$years;

      return {
        times: (_interval$times = interval.times) !== null && _interval$times !== void 0 ? _interval$times : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.times,
        weekdays: (_interval$weekdays$jo = interval === null || interval === void 0 ? void 0 : (_interval$weekdays = interval.weekdays) === null || _interval$weekdays === void 0 ? void 0 : _interval$weekdays.join(', ')) !== null && _interval$weekdays$jo !== void 0 ? _interval$weekdays$jo : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.weekdays,
        days_of_month: (_interval$days_of_mon = interval === null || interval === void 0 ? void 0 : (_interval$days_of_mon2 = interval.days_of_month) === null || _interval$days_of_mon2 === void 0 ? void 0 : _interval$days_of_mon2.join(', ')) !== null && _interval$days_of_mon !== void 0 ? _interval$days_of_mon : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.days_of_month,
        months: (_interval$months$join = interval === null || interval === void 0 ? void 0 : (_interval$months = interval.months) === null || _interval$months === void 0 ? void 0 : _interval$months.join(', ')) !== null && _interval$months$join !== void 0 ? _interval$months$join : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.months,
        years: (_interval$years$join = interval === null || interval === void 0 ? void 0 : (_interval$years = interval.years) === null || _interval$years === void 0 ? void 0 : _interval$years.join(', ')) !== null && _interval$years$join !== void 0 ? _interval$years$join : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.years
      };
    });
    return {
      name: muteTiming.name,
      time_intervals: intervals
    };
  }, [muteTiming]);
};

const MuteTimingForm = ({
  muteTiming,
  showError,
  provenance
}) => {
  var _result$alertmanager_, _formApi$formState$er, _formApi$formState$er2;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_6__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__.useAlertManagerSourceName)(alertManagers);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const defaultAmCortexConfig = {
    alertmanager_config: {},
    template_files: {}
  };
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const {
    result = defaultAmCortexConfig,
    loading
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_12__.initialAsyncRequestState;
  const config = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : result.alertmanager_config) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : {};
  const defaultValues = useDefaultValues(muteTiming);
  const formApi = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues
  });

  const onSubmit = values => {
    var _config$mute_time_int, _config$route;

    const newMuteTiming = (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.createMuteTiming)(values);
    const muteTimings = muteTiming ? config === null || config === void 0 ? void 0 : (_config$mute_time_int = config.mute_time_intervals) === null || _config$mute_time_int === void 0 ? void 0 : _config$mute_time_int.filter(({
      name
    }) => name !== muteTiming.name) : config.mute_time_intervals;
    const newConfig = Object.assign({}, result, {
      alertmanager_config: Object.assign({}, config, {
        route: muteTiming && newMuteTiming.name !== muteTiming.name ? (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.renameMuteTimings)(newMuteTiming.name, muteTiming.name, (_config$route = config.route) !== null && _config$route !== void 0 ? _config$route : {}) : config.route,
        mute_time_intervals: [...(muteTimings || []), newMuteTiming]
      })
    });
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.updateAlertManagerConfigAction)({
      newConfig,
      oldConfig: result,
      alertManagerSourceName: alertManagerSourceName,
      successMessage: 'Mute timing saved',
      redirectPath: '/alerting/routes/'
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_14__.AlertingPageWrapper, {
    pageId: "am-routes",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_13__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      disabled: true,
      dataSources: alertManagers
    }), provenance && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_15__.ProvisioningAlert, {
      resource: _Provisioning__WEBPACK_IMPORTED_MODULE_15__.ProvisionedResource.MuteTiming
    }), result && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formApi, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("form", {
        onSubmit: formApi.handleSubmit(onSubmit),
        "data-testid": "mute-timing-form",
        children: [showError && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
          title: "No matching mute timing found"
        }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FieldSet, {
          label: 'Create mute timing',
          disabled: Boolean(provenance),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
            required: true,
            label: "Name",
            description: "A unique name for the mute timing",
            invalid: !!((_formApi$formState$er = formApi.formState.errors) !== null && _formApi$formState$er !== void 0 && _formApi$formState$er.name),
            error: (_formApi$formState$er2 = formApi.formState.errors.name) === null || _formApi$formState$er2 === void 0 ? void 0 : _formApi$formState$er2.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, formApi.register('name', {
              required: true,
              validate: value => {
                if (!muteTiming) {
                  var _config$mute_time_int2;

                  const existingMuteTiming = config === null || config === void 0 ? void 0 : (_config$mute_time_int2 = config.mute_time_intervals) === null || _config$mute_time_int2 === void 0 ? void 0 : _config$mute_time_int2.find(({
                    name
                  }) => value === name);
                  return existingMuteTiming ? `Mute timing already exists for "${value}"` : true;
                }

                return value.length > 0 || 'Name is required';
              }
            }), {
              className: styles.input,
              "data-testid": 'mute-timing-name'
            }))
          }), _MuteTimingTimeInterv || (_MuteTimingTimeInterv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_MuteTimingTimeInterval__WEBPACK_IMPORTED_MODULE_16__.MuteTimingTimeInterval, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
            type: "button",
            variant: "secondary",
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('/alerting/routes/', alertManagerSourceName),
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            type: "submit",
            className: styles.submitButton,
            children: muteTiming ? 'Save' : 'Submit'
          })]
        })]
      })
    }))]
  });
};

const getStyles = theme => ({
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 400px;
  `,
  submitButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MuteTimingForm);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeInterval.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuteTimingTimeInterval": () => (/* binding */ MuteTimingTimeInterval)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/mute-timings.ts");
/* harmony import */ var _MuteTimingTimeRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeRange.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;










const MuteTimingTimeInterval = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    formState,
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const {
    fields: timeIntervals,
    append: addTimeInterval,
    remove: removeTimeInterval
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({
    name: 'time_intervals'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, {
    className: styles.timeIntervalLegend,
    label: "Time intervals",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "A time interval is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A mute timing can contain multiple time intervals."
      })), timeIntervals.map((timeInterval, timeIntervalIndex) => {
        var _errors$time_interval, _errors$time_interval2, _errors$time_interval3, _errors$time_interval4, _errors$time_interval5, _errors$time_interval6, _errors$time_interval7, _errors$time_interval8, _errors$time_interval9, _errors$time_interval10, _errors$time_interval11, _errors$time_interval12, _errors$time_interval13, _errors$time_interval14, _errors$time_interval15, _errors$time_interval16, _errors$time_interval17, _errors$time_interval18, _errors$time_interval19, _errors$time_interval20, _errors$time_interval21, _errors$time_interval22;

        const errors = formState.errors;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.timeIntervalSection,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MuteTimingTimeRange__WEBPACK_IMPORTED_MODULE_5__.MuteTimingTimeRange, {
            intervalIndex: timeIntervalIndex
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Days of the week",
            error: (_errors$time_interval = (_errors$time_interval2 = errors.time_intervals) === null || _errors$time_interval2 === void 0 ? void 0 : (_errors$time_interval3 = _errors$time_interval2[timeIntervalIndex]) === null || _errors$time_interval3 === void 0 ? void 0 : (_errors$time_interval4 = _errors$time_interval3.weekdays) === null || _errors$time_interval4 === void 0 ? void 0 : _errors$time_interval4.message) !== null && _errors$time_interval !== void 0 ? _errors$time_interval : '',
            invalid: !!((_errors$time_interval5 = errors.time_intervals) !== null && _errors$time_interval5 !== void 0 && (_errors$time_interval6 = _errors$time_interval5[timeIntervalIndex]) !== null && _errors$time_interval6 !== void 0 && _errors$time_interval6.weekdays),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.weekdays`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, day => _utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.DAYS_OF_THE_WEEK.includes(day.toLowerCase()), 'Invalid day of the week')
            }), {
              className: styles.input,
              "data-testid": "mute-timing-weekdays" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.weekdays,
              placeholder: "Example: monday, tuesday:thursday"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Days of the month",
            description: "The days of the month, 1-31, of a month. Negative values can be used to represent days which begin at the end of the month",
            invalid: !!((_errors$time_interval7 = errors.time_intervals) !== null && _errors$time_interval7 !== void 0 && (_errors$time_interval8 = _errors$time_interval7[timeIntervalIndex]) !== null && _errors$time_interval8 !== void 0 && _errors$time_interval8.days_of_month),
            error: (_errors$time_interval9 = errors.time_intervals) === null || _errors$time_interval9 === void 0 ? void 0 : (_errors$time_interval10 = _errors$time_interval9[timeIntervalIndex]) === null || _errors$time_interval10 === void 0 ? void 0 : (_errors$time_interval11 = _errors$time_interval10.days_of_month) === null || _errors$time_interval11 === void 0 ? void 0 : _errors$time_interval11.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.days_of_month`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, day => {
                const parsedDay = parseInt(day, 10);
                return parsedDay > -31 && parsedDay < 0 || parsedDay > 0 && parsedDay < 32;
              }, 'Invalid day')
            }), {
              className: styles.input // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.days_of_month,
              placeholder: "Example: 1, 14:16, -1",
              "data-testid": "mute-timing-days"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Months",
            description: "The months of the year in either numerical or the full calendar month",
            invalid: !!((_errors$time_interval12 = errors.time_intervals) !== null && _errors$time_interval12 !== void 0 && (_errors$time_interval13 = _errors$time_interval12[timeIntervalIndex]) !== null && _errors$time_interval13 !== void 0 && _errors$time_interval13.months),
            error: (_errors$time_interval14 = errors.time_intervals) === null || _errors$time_interval14 === void 0 ? void 0 : (_errors$time_interval15 = _errors$time_interval14[timeIntervalIndex]) === null || _errors$time_interval15 === void 0 ? void 0 : (_errors$time_interval16 = _errors$time_interval15.months) === null || _errors$time_interval16 === void 0 ? void 0 : _errors$time_interval16.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.months`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, month => _utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.MONTHS.includes(month) || parseInt(month, 10) < 13 && parseInt(month, 10) > 0, 'Invalid month')
            }), {
              className: styles.input,
              placeholder: "Example: 1:3, may:august, december" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.months,
              "data-testid": "mute-timing-months"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Years",
            invalid: !!((_errors$time_interval17 = errors.time_intervals) !== null && _errors$time_interval17 !== void 0 && (_errors$time_interval18 = _errors$time_interval17[timeIntervalIndex]) !== null && _errors$time_interval18 !== void 0 && _errors$time_interval18.years),
            error: (_errors$time_interval19 = (_errors$time_interval20 = errors.time_intervals) === null || _errors$time_interval20 === void 0 ? void 0 : (_errors$time_interval21 = _errors$time_interval20[timeIntervalIndex]) === null || _errors$time_interval21 === void 0 ? void 0 : (_errors$time_interval22 = _errors$time_interval21.years) === null || _errors$time_interval22 === void 0 ? void 0 : _errors$time_interval22.message) !== null && _errors$time_interval19 !== void 0 ? _errors$time_interval19 : '',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.years`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, year => /^\d{4}$/.test(year), 'Invalid year')
            }), {
              className: styles.input,
              placeholder: "Example: 2021:2022, 2030" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.years,
              "data-testid": "mute-timing-years"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "button",
            variant: "destructive",
            icon: "trash-alt",
            onClick: () => removeTimeInterval(timeIntervalIndex),
            children: "Remove time interval"
          })]
        }, timeInterval.id);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "button",
        variant: "secondary",
        className: styles.removeTimeIntervalButton,
        onClick: () => {
          addTimeInterval(_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.defaultTimeInterval);
        },
        icon: "plus",
        children: "Add another time interval"
      })]
    })
  });
};

const getStyles = theme => ({
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 400px;
  `,
  timeIntervalLegend: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    legend {
      font-size: 1.25rem;
    }
  `,
  timeIntervalSection: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.secondary};
    padding: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
  `,
  removeTimeIntervalButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeRange.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuteTimingTimeRange": () => (/* binding */ MuteTimingTimeRange)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const MuteTimingTimeRange = ({
  intervalIndex
}) => {
  var _formState$errors$tim, _formErrors$times$som, _formErrors$times;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    register,
    formState
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const {
    fields: timeRanges,
    append: addTimeRange,
    remove: removeTimeRange
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({
    name: `time_intervals.${intervalIndex}.times`
  });

  const validateTime = timeString => {
    if (!timeString) {
      return true;
    }

    const [hour, minutes] = timeString.split(':').map(x => parseInt(x, 10));
    const isHourValid = hour >= 0 && hour < 25;
    const isMinuteValid = minutes > -1 && minutes < 60;
    const isTimeValid = hour === 24 ? minutes === 0 : isHourValid && isMinuteValid;
    return isTimeValid || 'Time is invalid';
  };

  const formErrors = (_formState$errors$tim = formState.errors.time_intervals) === null || _formState$errors$tim === void 0 ? void 0 : _formState$errors$tim[intervalIndex];
  const timeRangeInvalid = (_formErrors$times$som = formErrors === null || formErrors === void 0 ? void 0 : (_formErrors$times = formErrors.times) === null || _formErrors$times === void 0 ? void 0 : _formErrors$times.some(value => (value === null || value === void 0 ? void 0 : value.start_time) || (value === null || value === void 0 ? void 0 : value.end_time))) !== null && _formErrors$times$som !== void 0 ? _formErrors$times$som : false;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
      className: styles.field,
      label: "Time range",
      description: "The time inclusive of the starting time and exclusive of the end time in UTC",
      invalid: timeRangeInvalid,
      error: timeRangeInvalid ? 'Times must be between 00:00 and 24:00 UTC' : '',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: timeRanges.map((timeRange, index) => {
          var _formErrors$times2, _formErrors$times2$in, _formErrors$times3, _formErrors$times3$in;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: styles.timeRange,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
                label: "Start time",
                invalid: !!(formErrors !== null && formErrors !== void 0 && (_formErrors$times2 = formErrors.times) !== null && _formErrors$times2 !== void 0 && (_formErrors$times2$in = _formErrors$times2[index]) !== null && _formErrors$times2$in !== void 0 && _formErrors$times2$in.start_time),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${intervalIndex}.times.${index}.start_time`, {
                  validate: validateTime
                }), {
                  className: styles.timeRangeInput // @ts-ignore react-hook-form doesn't handle nested field arrays well
                  ,
                  defaultValue: timeRange.start_time,
                  placeholder: "HH:MM",
                  "data-testid": "mute-timing-starts-at"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
                label: "End time",
                invalid: !!(formErrors !== null && formErrors !== void 0 && (_formErrors$times3 = formErrors.times) !== null && _formErrors$times3 !== void 0 && (_formErrors$times3$in = _formErrors$times3[index]) !== null && _formErrors$times3$in !== void 0 && _formErrors$times3$in.end_time),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${intervalIndex}.times.${index}.end_time`, {
                  validate: validateTime
                }), {
                  className: styles.timeRangeInput // @ts-ignore react-hook-form doesn't handle nested field arrays well
                  ,
                  defaultValue: timeRange.end_time,
                  placeholder: "HH:MM",
                  "data-testid": "mute-timing-ends-at"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                className: styles.deleteTimeRange,
                title: 'Remove',
                name: 'trash-alt',
                type: "button",
                onClick: e => {
                  e.preventDefault();
                  removeTimeRange(index);
                }
              })]
            })
          }, timeRange.id);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: styles.addTimeRange,
      variant: "secondary",
      type: "button",
      icon: 'plus',
      onClick: () => addTimeRange({
        start_time: '',
        end_time: ''
      }),
      children: "Add another time range"
    })]
  });
};

const getStyles = theme => ({
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  timeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(1)};
  `,
  timeRangeInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 120px;
  `,
  deleteTimeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(1)} 0 0 ${theme.spacing(0.5)};
  `,
  addTimeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
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

/***/ "./public/app/features/alerting/unified/utils/mute-timings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAYS_OF_THE_WEEK": () => (/* binding */ DAYS_OF_THE_WEEK),
/* harmony export */   "MONTHS": () => (/* binding */ MONTHS),
/* harmony export */   "createMuteTiming": () => (/* binding */ createMuteTiming),
/* harmony export */   "defaultTimeInterval": () => (/* binding */ defaultTimeInterval),
/* harmony export */   "validateArrayField": () => (/* binding */ validateArrayField)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const DAYS_OF_THE_WEEK = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const defaultTimeInterval = {
  times: [{
    start_time: '',
    end_time: ''
  }],
  weekdays: '',
  days_of_month: '',
  months: '',
  years: ''
};
const validateArrayField = (value, validateValue, invalidText) => {
  if (value) {
    return value.split(',').map(x => x.trim()).every(entry => entry.split(':').every(validateValue)) || invalidText;
  } else {
    return true;
  }
};

const convertStringToArray = str => {
  return str ? str.split(',').map(s => s.trim()) : undefined;
};

const createMuteTiming = fields => {
  const timeIntervals = fields.time_intervals.map(({
    times,
    weekdays,
    days_of_month,
    months,
    years
  }) => {
    var _convertStringToArray;

    const interval = {
      times: times.filter(({
        start_time,
        end_time
      }) => !!start_time && !!end_time),
      weekdays: (_convertStringToArray = convertStringToArray(weekdays)) === null || _convertStringToArray === void 0 ? void 0 : _convertStringToArray.map(v => v.toLowerCase()),
      days_of_month: convertStringToArray(days_of_month),
      months: convertStringToArray(months),
      years: convertStringToArray(years)
    };
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(interval, lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined);
  });
  return {
    name: fields.name,
    time_intervals: timeIntervals
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVQ7SUFBbUJFLGFBQW5CO0lBQWtDQyxNQUFsQztJQUEwQ0M7RUFBMUMsQ0FBRCxLQUF1RDtJQUFBOztJQUNyRCxNQUFNTixRQUFRLEdBQUc7TUFDZkMsS0FBSyxFQUFFQSxLQUFLLENBQUNpQixNQUFOLENBQWEsQ0FBQztRQUFFb0UsVUFBRjtRQUFjQztNQUFkLENBQUQsS0FBOEIsQ0FBQyxDQUFDRCxVQUFGLElBQWdCLENBQUMsQ0FBQ0MsUUFBN0QsQ0FEUTtNQUVmckYsUUFBUSwyQkFBRXdILG9CQUFvQixDQUFDeEgsUUFBRCxDQUF0QiwwREFBRSxzQkFBZ0NILEdBQWhDLENBQXFDOEgsQ0FBRCxJQUFPQSxDQUFDLENBQUNwRSxXQUFGLEVBQTNDLENBRks7TUFHZnJELGFBQWEsRUFBRXNILG9CQUFvQixDQUFDdEgsYUFBRCxDQUhwQjtNQUlmQyxNQUFNLEVBQUVxSCxvQkFBb0IsQ0FBQ3JILE1BQUQsQ0FKYjtNQUtmQyxLQUFLLEVBQUVvSCxvQkFBb0IsQ0FBQ3BILEtBQUQ7SUFMWixDQUFqQjtJQVFBLE9BQU82Ryw4Q0FBTSxDQUFDbkgsUUFBRCxFQUFXb0gsK0NBQVgsQ0FBYjtFQUNELENBWG1DLENBQXRDO0VBY0EsT0FBTztJQUNMOUosSUFBSSxFQUFFdUYsTUFBTSxDQUFDdkYsSUFEUjtJQUVMdUMsY0FBYyxFQUFFaUQ7RUFGWCxDQUFQO0FBSUQsQ0FuQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL011dGVUaW1pbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL1Byb3Zpc2lvbmluZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvTXV0ZVRpbWluZ1RpbWVJbnRlcnZhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdUaW1lUmFuZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9tdXRlLXRpbWluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IEFsZXJ0LCBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCB7IE11dGVUaW1lSW50ZXJ2YWwgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCBNdXRlVGltaW5nRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvYW1yb3V0ZXMvTXV0ZVRpbWluZ0Zvcm0nO1xuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9IGZyb20gJy4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uIH0gZnJvbSAnLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VzJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuL3V0aWxzL3JlZHV4JztcblxuY29uc3QgTXV0ZVRpbWluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGFsZXJ0TWFuYWdlcnMgPSB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uKCdub3RpZmljYXRpb24nKTtcbiAgY29uc3QgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdID0gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZShhbGVydE1hbmFnZXJzKTtcblxuICBjb25zdCBhbUNvbmZpZ3MgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFtQ29uZmlncyk7XG5cbiAgY29uc3QgZmV0Y2hDb25maWcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpKTtcbiAgICB9XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hDb25maWcoKTtcbiAgfSwgW2ZldGNoQ29uZmlnXSk7XG5cbiAgY29uc3QgeyByZXN1bHQsIGVycm9yLCBsb2FkaW5nIH0gPVxuICAgIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lICYmIGFtQ29uZmlnc1thbGVydE1hbmFnZXJTb3VyY2VOYW1lXSkgfHwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHJlc3VsdD8uYWxlcnRtYW5hZ2VyX2NvbmZpZztcblxuICBjb25zdCBnZXRNdXRlVGltaW5nQnlOYW1lID0gdXNlQ2FsbGJhY2soXG4gICAgKGlkOiBzdHJpbmcpOiBNdXRlVGltZUludGVydmFsIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgIGNvbnN0IHRpbWluZyA9IGNvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscz8uZmluZCgoeyBuYW1lIH06IE11dGVUaW1lSW50ZXJ2YWwpID0+IG5hbWUgPT09IGlkKTtcblxuICAgICAgaWYgKHRpbWluZykge1xuICAgICAgICBjb25zdCBwcm92ZW5hbmNlID0gKGNvbmZpZz8ubXV0ZVRpbWVQcm92ZW5hbmNlcyA/PyB7fSlbdGltaW5nLm5hbWVdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4udGltaW5nLFxuICAgICAgICAgIHByb3ZlbmFuY2UsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aW1pbmc7XG4gICAgfSxcbiAgICBbY29uZmlnXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcgbXV0ZSB0aW1pbmdcIiAvPn1cbiAgICAgIHtlcnJvciAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9e2BFcnJvciBsb2FkaW5nIEFsZXJ0bWFuYWdlciBjb25maWcgZm9yICR7YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1gfT5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvci4nfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIHtyZXN1bHQgJiYgIWVycm9yICYmIChcbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hbGVydGluZy9yb3V0ZXMvbXV0ZS10aW1pbmcvbmV3XCI+XG4gICAgICAgICAgICA8TXV0ZVRpbWluZ0Zvcm0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FsZXJ0aW5nL3JvdXRlcy9tdXRlLXRpbWluZy9lZGl0XCI+XG4gICAgICAgICAgICB7KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAocXVlcnlQYXJhbXNbJ211dGVOYW1lJ10pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRlVGltaW5nID0gZ2V0TXV0ZVRpbWluZ0J5TmFtZShTdHJpbmcocXVlcnlQYXJhbXNbJ211dGVOYW1lJ10pKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm92ZW5hbmNlID0gbXV0ZVRpbWluZz8ucHJvdmVuYW5jZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiA8TXV0ZVRpbWluZ0Zvcm0gbXV0ZVRpbWluZz17bXV0ZVRpbWluZ30gc2hvd0Vycm9yPXshbXV0ZVRpbWluZ30gcHJvdmVuYW5jZT17cHJvdmVuYW5jZX0gLz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9hbGVydGluZy9yb3V0ZXNcIiAvPjtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXV0ZVRpbWluZ3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VJZDogc3RyaW5nO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRpbmdQYWdlV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VJZCwgaXNMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChcbiAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KSxcbiAgICBwYWdlSWRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+e2NoaWxkcmVufTwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnQsIEJhZGdlIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgZW51bSBQcm92aXNpb25lZFJlc291cmNlIHtcbiAgQ29udGFjdFBvaW50ID0gJ2NvbnRhY3QgcG9pbnQnLFxuICBUZW1wbGF0ZSA9ICd0ZW1wbGF0ZScsXG4gIE11dGVUaW1pbmcgPSAnbXV0ZSB0aW1pbmcnLFxuICBBbGVydFJ1bGUgPSAnYWxlcnQgcnVsZScsXG4gIFJvb3ROb3RpZmljYXRpb25Qb2xpY3kgPSAncm9vdCBub3RpZmljYXRpb24gcG9saWN5Jyxcbn1cblxuaW50ZXJmYWNlIFByb3Zpc2lvbmluZ0FsZXJ0UHJvcHMge1xuICByZXNvdXJjZTogUHJvdmlzaW9uZWRSZXNvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IFByb3Zpc2lvbmluZ0FsZXJ0ID0gKHsgcmVzb3VyY2UgfTogUHJvdmlzaW9uaW5nQWxlcnRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBbGVydCB0aXRsZT17YFRoaXMgJHtyZXNvdXJjZX0gY2Fubm90IGJlIGVkaXRlZCB0aHJvdWdoIHRoZSBVSWB9IHNldmVyaXR5PVwiaW5mb1wiPlxuICAgICAgVGhpcyB7cmVzb3VyY2V9IGhhcyBiZWVuIHByb3Zpc2lvbmVkLCB0aGF0IG1lYW5zIGl0IHdhcyBjcmVhdGVkIGJ5IGNvbmZpZy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzZXJ2ZXIgYWRtaW4gdG9cbiAgICAgIHVwZGF0ZSB0aGlzIHtyZXNvdXJjZX0uXG4gICAgPC9BbGVydD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm92aXNpb25pbmdCYWRnZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxCYWRnZSB0ZXh0PXsnUHJvdmlzaW9uZWQnfSBjb2xvcj17J3B1cnBsZSd9IC8+O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1Qcm92aWRlciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIEZpZWxkLCBGaWVsZFNldCwgSW5wdXQsIEJ1dHRvbiwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7XG4gIEFsZXJ0bWFuYWdlckNvbmZpZyxcbiAgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnLFxuICBNdXRlVGltZUludGVydmFsLFxufSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24gfSBmcm9tICcuLi8uLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VzJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBNdXRlVGltaW5nRmllbGRzIH0gZnJvbSAnLi4vLi4vdHlwZXMvbXV0ZS10aW1pbmctZm9ybSc7XG5pbXBvcnQgeyByZW5hbWVNdXRlVGltaW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBjcmVhdGVNdXRlVGltaW5nLCBkZWZhdWx0VGltZUludGVydmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvbXV0ZS10aW1pbmdzJztcbmltcG9ydCB7IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3JlZHV4JztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4uL0FsZXJ0TWFuYWdlclBpY2tlcic7XG5pbXBvcnQgeyBBbGVydGluZ1BhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vQWxlcnRpbmdQYWdlV3JhcHBlcic7XG5pbXBvcnQgeyBQcm92aXNpb25lZFJlc291cmNlLCBQcm92aXNpb25pbmdBbGVydCB9IGZyb20gJy4uL1Byb3Zpc2lvbmluZyc7XG5cbmltcG9ydCB7IE11dGVUaW1pbmdUaW1lSW50ZXJ2YWwgfSBmcm9tICcuL011dGVUaW1pbmdUaW1lSW50ZXJ2YWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtdXRlVGltaW5nPzogTXV0ZVRpbWVJbnRlcnZhbDtcbiAgc2hvd0Vycm9yPzogYm9vbGVhbjtcbiAgcHJvdmVuYW5jZT86IHN0cmluZztcbn1cblxuY29uc3QgdXNlRGVmYXVsdFZhbHVlcyA9IChtdXRlVGltaW5nPzogTXV0ZVRpbWVJbnRlcnZhbCk6IE11dGVUaW1pbmdGaWVsZHMgPT4ge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdGltZV9pbnRlcnZhbHM6IFtkZWZhdWx0VGltZUludGVydmFsXSxcbiAgICB9O1xuXG4gICAgaWYgKCFtdXRlVGltaW5nKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlcztcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnZhbHMgPSBtdXRlVGltaW5nLnRpbWVfaW50ZXJ2YWxzLm1hcCgoaW50ZXJ2YWwpID0+ICh7XG4gICAgICB0aW1lczogaW50ZXJ2YWwudGltZXMgPz8gZGVmYXVsdFRpbWVJbnRlcnZhbC50aW1lcyxcbiAgICAgIHdlZWtkYXlzOiBpbnRlcnZhbD8ud2Vla2RheXM/LmpvaW4oJywgJykgPz8gZGVmYXVsdFRpbWVJbnRlcnZhbC53ZWVrZGF5cyxcbiAgICAgIGRheXNfb2ZfbW9udGg6IGludGVydmFsPy5kYXlzX29mX21vbnRoPy5qb2luKCcsICcpID8/IGRlZmF1bHRUaW1lSW50ZXJ2YWwuZGF5c19vZl9tb250aCxcbiAgICAgIG1vbnRoczogaW50ZXJ2YWw/Lm1vbnRocz8uam9pbignLCAnKSA/PyBkZWZhdWx0VGltZUludGVydmFsLm1vbnRocyxcbiAgICAgIHllYXJzOiBpbnRlcnZhbD8ueWVhcnM/LmpvaW4oJywgJykgPz8gZGVmYXVsdFRpbWVJbnRlcnZhbC55ZWFycyxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbXV0ZVRpbWluZy5uYW1lLFxuICAgICAgdGltZV9pbnRlcnZhbHM6IGludGVydmFscyxcbiAgICB9O1xuICB9LCBbbXV0ZVRpbWluZ10pO1xufTtcblxuY29uc3QgTXV0ZVRpbWluZ0Zvcm0gPSAoeyBtdXRlVGltaW5nLCBzaG93RXJyb3IsIHByb3ZlbmFuY2UgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBhbGVydE1hbmFnZXJzID0gdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbignbm90aWZpY2F0aW9uJyk7XG4gIGNvbnN0IFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoYWxlcnRNYW5hZ2Vycyk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBkZWZhdWx0QW1Db3J0ZXhDb25maWcgPSB7IGFsZXJ0bWFuYWdlcl9jb25maWc6IHt9LCB0ZW1wbGF0ZV9maWxlczoge30gfTtcbiAgY29uc3QgYW1Db25maWdzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbUNvbmZpZ3MpO1xuICBjb25zdCB7IHJlc3VsdCA9IGRlZmF1bHRBbUNvcnRleENvbmZpZywgbG9hZGluZyB9ID1cbiAgICAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAmJiBhbUNvbmZpZ3NbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0pIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcblxuICBjb25zdCBjb25maWc6IEFsZXJ0bWFuYWdlckNvbmZpZyA9IHJlc3VsdD8uYWxlcnRtYW5hZ2VyX2NvbmZpZyA/PyB7fTtcbiAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHVzZURlZmF1bHRWYWx1ZXMobXV0ZVRpbWluZyk7XG4gIGNvbnN0IGZvcm1BcGkgPSB1c2VGb3JtKHsgZGVmYXVsdFZhbHVlcyB9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9ICh2YWx1ZXM6IE11dGVUaW1pbmdGaWVsZHMpID0+IHtcbiAgICBjb25zdCBuZXdNdXRlVGltaW5nID0gY3JlYXRlTXV0ZVRpbWluZyh2YWx1ZXMpO1xuXG4gICAgY29uc3QgbXV0ZVRpbWluZ3MgPSBtdXRlVGltaW5nXG4gICAgICA/IGNvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscz8uZmlsdGVyKCh7IG5hbWUgfSkgPT4gbmFtZSAhPT0gbXV0ZVRpbWluZy5uYW1lKVxuICAgICAgOiBjb25maWcubXV0ZV90aW1lX2ludGVydmFscztcblxuICAgIGNvbnN0IG5ld0NvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnID0ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgYWxlcnRtYW5hZ2VyX2NvbmZpZzoge1xuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIHJvdXRlOlxuICAgICAgICAgIG11dGVUaW1pbmcgJiYgbmV3TXV0ZVRpbWluZy5uYW1lICE9PSBtdXRlVGltaW5nLm5hbWVcbiAgICAgICAgICAgID8gcmVuYW1lTXV0ZVRpbWluZ3MobmV3TXV0ZVRpbWluZy5uYW1lLCBtdXRlVGltaW5nLm5hbWUsIGNvbmZpZy5yb3V0ZSA/PyB7fSlcbiAgICAgICAgICAgIDogY29uZmlnLnJvdXRlLFxuICAgICAgICBtdXRlX3RpbWVfaW50ZXJ2YWxzOiBbLi4uKG11dGVUaW1pbmdzIHx8IFtdKSwgbmV3TXV0ZVRpbWluZ10sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChcbiAgICAgIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbih7XG4gICAgICAgIG5ld0NvbmZpZyxcbiAgICAgICAgb2xkQ29uZmlnOiByZXN1bHQsXG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUhLFxuICAgICAgICBzdWNjZXNzTWVzc2FnZTogJ011dGUgdGltaW5nIHNhdmVkJyxcbiAgICAgICAgcmVkaXJlY3RQYXRoOiAnL2FsZXJ0aW5nL3JvdXRlcy8nLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFsZXJ0aW5nUGFnZVdyYXBwZXIgcGFnZUlkPVwiYW0tcm91dGVzXCI+XG4gICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyXG4gICAgICAgIGN1cnJlbnQ9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICBkaXNhYmxlZFxuICAgICAgICBkYXRhU291cmNlcz17YWxlcnRNYW5hZ2Vyc31cbiAgICAgIC8+XG4gICAgICB7cHJvdmVuYW5jZSAmJiA8UHJvdmlzaW9uaW5nQWxlcnQgcmVzb3VyY2U9e1Byb3Zpc2lvbmVkUmVzb3VyY2UuTXV0ZVRpbWluZ30gLz59XG4gICAgICB7cmVzdWx0ICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgPEZvcm1Qcm92aWRlciB7Li4uZm9ybUFwaX0+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1BcGkuaGFuZGxlU3VibWl0KG9uU3VibWl0KX0gZGF0YS10ZXN0aWQ9XCJtdXRlLXRpbWluZy1mb3JtXCI+XG4gICAgICAgICAgICB7c2hvd0Vycm9yICYmIDxBbGVydCB0aXRsZT1cIk5vIG1hdGNoaW5nIG11dGUgdGltaW5nIGZvdW5kXCIgLz59XG4gICAgICAgICAgICA8RmllbGRTZXQgbGFiZWw9eydDcmVhdGUgbXV0ZSB0aW1pbmcnfSBkaXNhYmxlZD17Qm9vbGVhbihwcm92ZW5hbmNlKX0+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkEgdW5pcXVlIG5hbWUgZm9yIHRoZSBtdXRlIHRpbWluZ1wiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFmb3JtQXBpLmZvcm1TdGF0ZS5lcnJvcnM/Lm5hbWV9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Zvcm1BcGkuZm9ybVN0YXRlLmVycm9ycy5uYW1lPy5tZXNzYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB7Li4uZm9ybUFwaS5yZWdpc3RlcignbmFtZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIW11dGVUaW1pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTXV0ZVRpbWluZyA9IGNvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscz8uZmluZCgoeyBuYW1lIH0pID0+IHZhbHVlID09PSBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ011dGVUaW1pbmcgPyBgTXV0ZSB0aW1pbmcgYWxyZWFkeSBleGlzdHMgZm9yIFwiJHt2YWx1ZX1cImAgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMCB8fCAnTmFtZSBpcyByZXF1aXJlZCc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9eydtdXRlLXRpbWluZy1uYW1lJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8TXV0ZVRpbWluZ1RpbWVJbnRlcnZhbCAvPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoJy9hbGVydGluZy9yb3V0ZXMvJywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259PlxuICAgICAgICAgICAgICAgIHttdXRlVGltaW5nID8gJ1NhdmUnIDogJ1N1Ym1pdCd9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GaWVsZFNldD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvRm9ybVByb3ZpZGVyPlxuICAgICAgKX1cbiAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDQwMHB4O1xuICBgLFxuICBzdWJtaXRCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNdXRlVGltaW5nRm9ybTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIHVzZUZpZWxkQXJyYXkgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBGaWVsZCwgRmllbGRTZXQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE11dGVUaW1pbmdGaWVsZHMgfSBmcm9tICcuLi8uLi90eXBlcy9tdXRlLXRpbWluZy1mb3JtJztcbmltcG9ydCB7IERBWVNfT0ZfVEhFX1dFRUssIE1PTlRIUywgdmFsaWRhdGVBcnJheUZpZWxkLCBkZWZhdWx0VGltZUludGVydmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvbXV0ZS10aW1pbmdzJztcblxuaW1wb3J0IHsgTXV0ZVRpbWluZ1RpbWVSYW5nZSB9IGZyb20gJy4vTXV0ZVRpbWluZ1RpbWVSYW5nZSc7XG5cbmV4cG9ydCBjb25zdCBNdXRlVGltaW5nVGltZUludGVydmFsID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgZm9ybVN0YXRlLCByZWdpc3RlciB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3Qge1xuICAgIGZpZWxkczogdGltZUludGVydmFscyxcbiAgICBhcHBlbmQ6IGFkZFRpbWVJbnRlcnZhbCxcbiAgICByZW1vdmU6IHJlbW92ZVRpbWVJbnRlcnZhbCxcbiAgfSA9IHVzZUZpZWxkQXJyYXk8TXV0ZVRpbWluZ0ZpZWxkcz4oe1xuICAgIG5hbWU6ICd0aW1lX2ludGVydmFscycsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkU2V0IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVJbnRlcnZhbExlZ2VuZH0gbGFiZWw9XCJUaW1lIGludGVydmFsc1wiPlxuICAgICAgPD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQSB0aW1lIGludGVydmFsIGlzIGEgZGVmaW5pdGlvbiBmb3IgYSBtb21lbnQgaW4gdGltZS4gQWxsIGZpZWxkcyBhcmUgbGlzdHMsIGFuZCBhdCBsZWFzdCBvbmUgbGlzdCBlbGVtZW50IG11c3RcbiAgICAgICAgICBiZSBzYXRpc2ZpZWQgdG8gbWF0Y2ggdGhlIGZpZWxkLiBJZiBhIGZpZWxkIGlzIGxlZnQgYmxhbmssIGFueSBtb21lbnQgb2YgdGltZSB3aWxsIG1hdGNoIHRoZSBmaWVsZC4gRm9yIGFuXG4gICAgICAgICAgaW5zdGFudCBvZiB0aW1lIHRvIG1hdGNoIGEgY29tcGxldGUgdGltZSBpbnRlcnZhbCwgYWxsIGZpZWxkcyBtdXN0IG1hdGNoLiBBIG11dGUgdGltaW5nIGNhbiBjb250YWluIG11bHRpcGxlXG4gICAgICAgICAgdGltZSBpbnRlcnZhbHMuXG4gICAgICAgIDwvcD5cbiAgICAgICAge3RpbWVJbnRlcnZhbHMubWFwKCh0aW1lSW50ZXJ2YWwsIHRpbWVJbnRlcnZhbEluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0gZm9ybVN0YXRlLmVycm9ycztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3RpbWVJbnRlcnZhbC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMudGltZUludGVydmFsU2VjdGlvbn0+XG4gICAgICAgICAgICAgIDxNdXRlVGltaW5nVGltZVJhbmdlIGludGVydmFsSW5kZXg9e3RpbWVJbnRlcnZhbEluZGV4fSAvPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRheXMgb2YgdGhlIHdlZWtcIlxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LndlZWtkYXlzPy5tZXNzYWdlID8/ICcnfVxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnRpbWVfaW50ZXJ2YWxzPy5bdGltZUludGVydmFsSW5kZXhdPy53ZWVrZGF5c31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGB0aW1lX2ludGVydmFscy4ke3RpbWVJbnRlcnZhbEluZGV4fS53ZWVrZGF5c2AsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFycmF5RmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXkpID0+IERBWVNfT0ZfVEhFX1dFRUsuaW5jbHVkZXMoZGF5LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgZGF5IG9mIHRoZSB3ZWVrJ1xuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJtdXRlLXRpbWluZy13ZWVrZGF5c1wiXG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZUludGVydmFsLndlZWtkYXlzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBtb25kYXksIHR1ZXNkYXk6dGh1cnNkYXlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF5cyBvZiB0aGUgbW9udGhcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGRheXMgb2YgdGhlIG1vbnRoLCAxLTMxLCBvZiBhIG1vbnRoLiBOZWdhdGl2ZSB2YWx1ZXMgY2FuIGJlIHVzZWQgdG8gcmVwcmVzZW50IGRheXMgd2hpY2ggYmVnaW4gYXQgdGhlIGVuZCBvZiB0aGUgbW9udGhcIlxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnRpbWVfaW50ZXJ2YWxzPy5bdGltZUludGVydmFsSW5kZXhdPy5kYXlzX29mX21vbnRofVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LmRheXNfb2ZfbW9udGg/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgdGltZV9pbnRlcnZhbHMuJHt0aW1lSW50ZXJ2YWxJbmRleH0uZGF5c19vZl9tb250aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFycmF5RmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkRGF5ID0gcGFyc2VJbnQoZGF5LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkRGF5ID4gLTMxICYmIHBhcnNlZERheSA8IDApIHx8IChwYXJzZWREYXkgPiAwICYmIHBhcnNlZERheSA8IDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBkYXknXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZUludGVydmFsLmRheXNfb2ZfbW9udGh9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IDEsIDE0OjE2LCAtMVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm11dGUtdGltaW5nLWRheXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9udGhzXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBtb250aHMgb2YgdGhlIHllYXIgaW4gZWl0aGVyIG51bWVyaWNhbCBvciB0aGUgZnVsbCBjYWxlbmRhciBtb250aFwiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/Lm1vbnRoc31cbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnRpbWVfaW50ZXJ2YWxzPy5bdGltZUludGVydmFsSW5kZXhdPy5tb250aHM/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgdGltZV9pbnRlcnZhbHMuJHt0aW1lSW50ZXJ2YWxJbmRleH0ubW9udGhzYCwge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQXJyYXlGaWVsZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKG1vbnRoKSA9PiBNT05USFMuaW5jbHVkZXMobW9udGgpIHx8IChwYXJzZUludChtb250aCwgMTApIDwgMTMgJiYgcGFyc2VJbnQobW9udGgsIDEwKSA+IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgbW9udGgnXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IDE6MywgbWF5OmF1Z3VzdCwgZGVjZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSByZWFjdC1ob29rLWZvcm0gZG9lc24ndCBoYW5kbGUgbmVzdGVkIGZpZWxkIGFycmF5cyB3ZWxsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpbWVJbnRlcnZhbC5tb250aHN9XG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm11dGUtdGltaW5nLW1vbnRoc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJZZWFyc1wiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LnllYXJzfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LnllYXJzPy5tZXNzYWdlID8/ICcnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYHRpbWVfaW50ZXJ2YWxzLiR7dGltZUludGVydmFsSW5kZXh9LnllYXJzYCwge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB2YWxpZGF0ZUFycmF5RmllbGQodmFsdWUsICh5ZWFyKSA9PiAvXlxcZHs0fSQvLnRlc3QoeWVhciksICdJbnZhbGlkIHllYXInKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IDIwMjE6MjAyMiwgMjAzMFwiXG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZUludGVydmFsLnllYXJzfVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJtdXRlLXRpbWluZy15ZWFyc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVGltZUludGVydmFsKHRpbWVJbnRlcnZhbEluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbW92ZSB0aW1lIGludGVydmFsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVUaW1lSW50ZXJ2YWxCdXR0b259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgYWRkVGltZUludGVydmFsKGRlZmF1bHRUaW1lSW50ZXJ2YWwpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIGFub3RoZXIgdGltZSBpbnRlcnZhbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvPlxuICAgIDwvRmllbGRTZXQ+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDQwMHB4O1xuICBgLFxuICB0aW1lSW50ZXJ2YWxMZWdlbmQ6IGNzc2BcbiAgICBsZWdlbmQge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgYCxcbiAgdGltZUludGVydmFsU2VjdGlvbjogY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHJlbW92ZVRpbWVJbnRlcnZhbEJ1dHRvbjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGaWVsZEFycmF5LCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5saW5lRmllbGQsIElucHV0LCBCdXR0b24sIEljb25CdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE11dGVUaW1pbmdGaWVsZHMgfSBmcm9tICcuLi8uLi90eXBlcy9tdXRlLXRpbWluZy1mb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaW50ZXJ2YWxJbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTXV0ZVRpbWluZ1RpbWVSYW5nZTogRkM8UHJvcHM+ID0gKHsgaW50ZXJ2YWxJbmRleCB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgeyByZWdpc3RlciwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtQ29udGV4dDxNdXRlVGltaW5nRmllbGRzPigpO1xuXG4gIGNvbnN0IHtcbiAgICBmaWVsZHM6IHRpbWVSYW5nZXMsXG4gICAgYXBwZW5kOiBhZGRUaW1lUmFuZ2UsXG4gICAgcmVtb3ZlOiByZW1vdmVUaW1lUmFuZ2UsXG4gIH0gPSB1c2VGaWVsZEFycmF5PE11dGVUaW1pbmdGaWVsZHM+KHtcbiAgICBuYW1lOiBgdGltZV9pbnRlcnZhbHMuJHtpbnRlcnZhbEluZGV4fS50aW1lc2AsXG4gIH0pO1xuXG4gIGNvbnN0IHZhbGlkYXRlVGltZSA9ICh0aW1lU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXRpbWVTdHJpbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBbaG91ciwgbWludXRlc10gPSB0aW1lU3RyaW5nLnNwbGl0KCc6JykubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxMCkpO1xuICAgIGNvbnN0IGlzSG91clZhbGlkID0gaG91ciA+PSAwICYmIGhvdXIgPCAyNTtcbiAgICBjb25zdCBpc01pbnV0ZVZhbGlkID0gbWludXRlcyA+IC0xICYmIG1pbnV0ZXMgPCA2MDtcbiAgICBjb25zdCBpc1RpbWVWYWxpZCA9IGhvdXIgPT09IDI0ID8gbWludXRlcyA9PT0gMCA6IGlzSG91clZhbGlkICYmIGlzTWludXRlVmFsaWQ7XG5cbiAgICByZXR1cm4gaXNUaW1lVmFsaWQgfHwgJ1RpbWUgaXMgaW52YWxpZCc7XG4gIH07XG5cbiAgY29uc3QgZm9ybUVycm9ycyA9IGZvcm1TdGF0ZS5lcnJvcnMudGltZV9pbnRlcnZhbHM/LltpbnRlcnZhbEluZGV4XTtcbiAgY29uc3QgdGltZVJhbmdlSW52YWxpZCA9IGZvcm1FcnJvcnM/LnRpbWVzPy5zb21lKCh2YWx1ZSkgPT4gdmFsdWU/LnN0YXJ0X3RpbWUgfHwgdmFsdWU/LmVuZF90aW1lKSA/PyBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RmllbGRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGR9XG4gICAgICAgIGxhYmVsPVwiVGltZSByYW5nZVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHRpbWUgaW5jbHVzaXZlIG9mIHRoZSBzdGFydGluZyB0aW1lIGFuZCBleGNsdXNpdmUgb2YgdGhlIGVuZCB0aW1lIGluIFVUQ1wiXG4gICAgICAgIGludmFsaWQ9e3RpbWVSYW5nZUludmFsaWR9XG4gICAgICAgIGVycm9yPXt0aW1lUmFuZ2VJbnZhbGlkID8gJ1RpbWVzIG11c3QgYmUgYmV0d2VlbiAwMDowMCBhbmQgMjQ6MDAgVVRDJyA6ICcnfVxuICAgICAgPlxuICAgICAgICA8PlxuICAgICAgICAgIHt0aW1lUmFuZ2VzLm1hcCgodGltZVJhbmdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lUmFuZ2V9IGtleT17dGltZVJhbmdlLmlkfT5cbiAgICAgICAgICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJTdGFydCB0aW1lXCIgaW52YWxpZD17ISFmb3JtRXJyb3JzPy50aW1lcz8uW2luZGV4XT8uc3RhcnRfdGltZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgdGltZV9pbnRlcnZhbHMuJHtpbnRlcnZhbEluZGV4fS50aW1lcy4ke2luZGV4fS5zdGFydF90aW1lYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aW1lUmFuZ2VJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpbWVSYW5nZS5zdGFydF90aW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSEg6TU1cIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibXV0ZS10aW1pbmctc3RhcnRzLWF0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJFbmQgdGltZVwiIGludmFsaWQ9eyEhZm9ybUVycm9ycz8udGltZXM/LltpbmRleF0/LmVuZF90aW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGB0aW1lX2ludGVydmFscy4ke2ludGVydmFsSW5kZXh9LnRpbWVzLiR7aW5kZXh9LmVuZF90aW1lYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aW1lUmFuZ2VJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpbWVSYW5nZS5lbmRfdGltZX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhIOk1NXCJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm11dGUtdGltaW5nLWVuZHMtYXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZVRpbWVSYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydSZW1vdmUnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsndHJhc2gtYWx0J31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVRpbWVSYW5nZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUaW1lUmFuZ2V9XG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgaWNvbj17J3BsdXMnfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRUaW1lUmFuZ2UoeyBzdGFydF90aW1lOiAnJywgZW5kX3RpbWU6ICcnIH0pfVxuICAgICAgPlxuICAgICAgICBBZGQgYW5vdGhlciB0aW1lIHJhbmdlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZmllbGQ6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBgLFxuICB0aW1lUmFuZ2U6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICB0aW1lUmFuZ2VJbnB1dDogY3NzYFxuICAgIHdpZHRoOiAxMjBweDtcbiAgYCxcbiAgZGVsZXRlVGltZVJhbmdlOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMSl9IDAgMCAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gIGAsXG4gIGFkZFRpbWVSYW5nZTogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5cbmltcG9ydCB7IEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCBBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVkgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSwgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5mdW5jdGlvbiB1c2VJc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShhdmFpbGFibGVBbGVydE1hbmFnZXJzOiBBbGVydE1hbmFnZXJEYXRhU291cmNlW10pIHtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnNOYW1lcyA9IGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnMubWFwKChhbSkgPT4gYW0ubmFtZSk7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc05hbWVzLmluY2x1ZGVzKGFsZXJ0TWFuYWdlck5hbWUpO1xuICAgIH0sXG4gICAgW2F2YWlsYWJsZUFsZXJ0TWFuYWdlcnNdXG4gICk7XG59XG5cbi8qIFRoaXMgd2lsbCByZXR1cm4gYW0gbmFtZSBlaXRoZXIgZnJvbSBxdWVyeSBwYXJhbXMgb3IgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIGEgZGVmYXVsdCAoZ3JhZmFuYSkuXG4gKiBEdWUgdG8gUkJBQyBwZXJtaXNzaW9ucyBHcmFmYW5hIE1hbmFnZWQgQWxlcnQgbWFuYWdlciBvciBleHRlcm5hbCBhbGVydCBtYW5hZ2VycyBtYXkgbm90IGJlIGF2YWlsYWJsZVxuICogSW4gdGhlIHdvcnN0IGNhc2UgbmVpaHRlciBHTUEgbm9yIGV4dGVybmFsIGFsZXJ0IG1hbmFnZXIgaXMgYXZhaWxhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKFxuICBhdmFpbGFibGVBbGVydE1hbmFnZXJzOiBBbGVydE1hbmFnZXJEYXRhU291cmNlW11cbik6IFtzdHJpbmcgfCB1bmRlZmluZWQsIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHZvaWRdIHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zLCB1cGRhdGVRdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICBjb25zdCBpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZSA9IHVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnMpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpIHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogbnVsbCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLnNldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdXBkYXRlUXVlcnlQYXJhbXMsIGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlXVxuICApO1xuXG4gIGNvbnN0IHF1ZXJ5U291cmNlID0gcXVlcnlQYXJhbXNbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTtcblxuICBpZiAocXVlcnlTb3VyY2UgJiYgdHlwZW9mIHF1ZXJ5U291cmNlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShxdWVyeVNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBbcXVlcnlTb3VyY2UsIHVwZGF0ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vbiBleGlzdGluZyBhbGVydG1hbmFnZXJcbiAgICAgIHJldHVybiBbdW5kZWZpbmVkLCB1cGRhdGVdO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0b3JlU291cmNlID0gc3RvcmUuZ2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgaWYgKHN0b3JlU291cmNlICYmIHR5cGVvZiBzdG9yZVNvdXJjZSA9PT0gJ3N0cmluZycgJiYgaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoc3RvcmVTb3VyY2UpKSB7XG4gICAgdXBkYXRlKHN0b3JlU291cmNlKTtcbiAgICByZXR1cm4gW3N0b3JlU291cmNlLCB1cGRhdGVdO1xuICB9XG5cbiAgaWYgKGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpKSB7XG4gICAgcmV0dXJuIFtHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FLCB1cGRhdGVdO1xuICB9XG5cbiAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbiB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbihhY2Nlc3NUeXBlOiAnaW5zdGFuY2UnIHwgJ25vdGlmaWNhdGlvbicpIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXNCeVBlcm1pc3Npb24oYWNjZXNzVHlwZSksIFthY2Nlc3NUeXBlXSk7XG59XG4iLCJpbXBvcnQgeyBvbWl0QnksIGlzVW5kZWZpbmVkIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTXV0ZVRpbWVJbnRlcnZhbCwgVGltZUludGVydmFsIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBNdXRlVGltaW5nRmllbGRzLCBNdXRlVGltaW5nSW50ZXJ2YWxGaWVsZHMgfSBmcm9tICcuLi90eXBlcy9tdXRlLXRpbWluZy1mb3JtJztcblxuZXhwb3J0IGNvbnN0IERBWVNfT0ZfVEhFX1dFRUsgPSBbJ21vbmRheScsICd0dWVzZGF5JywgJ3dlZG5lc2RheScsICd0aHVyc2RheScsICdmcmlkYXknLCAnc2F0dXJkYXknLCAnc3VuZGF5J107XG5cbmV4cG9ydCBjb25zdCBNT05USFMgPSBbXG4gICdqYW51YXJ5JyxcbiAgJ2ZlYnJ1YXJ5JyxcbiAgJ21hcmNoJyxcbiAgJ2FwcmlsJyxcbiAgJ21heScsXG4gICdqdW5lJyxcbiAgJ2p1bHknLFxuICAnYXVndXN0JyxcbiAgJ3NlcHRlbWJlcicsXG4gICdvY3RvYmVyJyxcbiAgJ25vdmVtYmVyJyxcbiAgJ2RlY2VtYmVyJyxcbl07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0VGltZUludGVydmFsOiBNdXRlVGltaW5nSW50ZXJ2YWxGaWVsZHMgPSB7XG4gIHRpbWVzOiBbeyBzdGFydF90aW1lOiAnJywgZW5kX3RpbWU6ICcnIH1dLFxuICB3ZWVrZGF5czogJycsXG4gIGRheXNfb2ZfbW9udGg6ICcnLFxuICBtb250aHM6ICcnLFxuICB5ZWFyczogJycsXG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVBcnJheUZpZWxkID0gKHZhbHVlOiBzdHJpbmcsIHZhbGlkYXRlVmFsdWU6IChpbnB1dDogc3RyaW5nKSA9PiBib29sZWFuLCBpbnZhbGlkVGV4dDogc3RyaW5nKSA9PiB7XG4gIGlmICh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICB2YWx1ZVxuICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAubWFwKCh4KSA9PiB4LnRyaW0oKSlcbiAgICAgICAgLmV2ZXJ5KChlbnRyeSkgPT4gZW50cnkuc3BsaXQoJzonKS5ldmVyeSh2YWxpZGF0ZVZhbHVlKSkgfHwgaW52YWxpZFRleHRcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb252ZXJ0U3RyaW5nVG9BcnJheSA9IChzdHI6IHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyID8gc3RyLnNwbGl0KCcsJykubWFwKChzKSA9PiBzLnRyaW0oKSkgOiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTXV0ZVRpbWluZyA9IChmaWVsZHM6IE11dGVUaW1pbmdGaWVsZHMpOiBNdXRlVGltZUludGVydmFsID0+IHtcbiAgY29uc3QgdGltZUludGVydmFsczogVGltZUludGVydmFsW10gPSBmaWVsZHMudGltZV9pbnRlcnZhbHMubWFwKFxuICAgICh7IHRpbWVzLCB3ZWVrZGF5cywgZGF5c19vZl9tb250aCwgbW9udGhzLCB5ZWFycyB9KSA9PiB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHtcbiAgICAgICAgdGltZXM6IHRpbWVzLmZpbHRlcigoeyBzdGFydF90aW1lLCBlbmRfdGltZSB9KSA9PiAhIXN0YXJ0X3RpbWUgJiYgISFlbmRfdGltZSksXG4gICAgICAgIHdlZWtkYXlzOiBjb252ZXJ0U3RyaW5nVG9BcnJheSh3ZWVrZGF5cyk/Lm1hcCgodikgPT4gdi50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgZGF5c19vZl9tb250aDogY29udmVydFN0cmluZ1RvQXJyYXkoZGF5c19vZl9tb250aCksXG4gICAgICAgIG1vbnRoczogY29udmVydFN0cmluZ1RvQXJyYXkobW9udGhzKSxcbiAgICAgICAgeWVhcnM6IGNvbnZlcnRTdHJpbmdUb0FycmF5KHllYXJzKSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBvbWl0QnkoaW50ZXJ2YWwsIGlzVW5kZWZpbmVkKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmaWVsZHMubmFtZSxcbiAgICB0aW1lX2ludGVydmFsczogdGltZUludGVydmFscyxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiUm91dGUiLCJSZWRpcmVjdCIsIlN3aXRjaCIsIkFsZXJ0IiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwidXNlUXVlcnlQYXJhbXMiLCJNdXRlVGltaW5nRm9ybSIsInVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJ1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsImluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSIsIk11dGVUaW1pbmdzIiwicXVlcnlQYXJhbXMiLCJkaXNwYXRjaCIsImFsZXJ0TWFuYWdlcnMiLCJhbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwiYW1Db25maWdzIiwic3RhdGUiLCJmZXRjaENvbmZpZyIsInJlc3VsdCIsImVycm9yIiwibG9hZGluZyIsImNvbmZpZyIsImFsZXJ0bWFuYWdlcl9jb25maWciLCJnZXRNdXRlVGltaW5nQnlOYW1lIiwiaWQiLCJ0aW1pbmciLCJtdXRlX3RpbWVfaW50ZXJ2YWxzIiwiZmluZCIsIm5hbWUiLCJwcm92ZW5hbmNlIiwibXV0ZVRpbWVQcm92ZW5hbmNlcyIsIm1lc3NhZ2UiLCJtdXRlVGltaW5nIiwiU3RyaW5nIiwidXNlU2VsZWN0b3IiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJBbGVydGluZ1BhZ2VXcmFwcGVyIiwiY2hpbGRyZW4iLCJwYWdlSWQiLCJpc0xvYWRpbmciLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiQmFkZ2UiLCJQcm92aXNpb25lZFJlc291cmNlIiwiUHJvdmlzaW9uaW5nQWxlcnQiLCJyZXNvdXJjZSIsIlByb3Zpc2lvbmluZ0JhZGdlIiwiY3NzIiwidXNlTWVtbyIsIkZvcm1Qcm92aWRlciIsInVzZUZvcm0iLCJGaWVsZCIsIkZpZWxkU2V0IiwiSW5wdXQiLCJCdXR0b24iLCJMaW5rQnV0dG9uIiwidXNlU3R5bGVzMiIsInVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsInJlbmFtZU11dGVUaW1pbmdzIiwibWFrZUFNTGluayIsImNyZWF0ZU11dGVUaW1pbmciLCJkZWZhdWx0VGltZUludGVydmFsIiwiQWxlcnRNYW5hZ2VyUGlja2VyIiwiTXV0ZVRpbWluZ1RpbWVJbnRlcnZhbCIsInVzZURlZmF1bHRWYWx1ZXMiLCJkZWZhdWx0VmFsdWVzIiwidGltZV9pbnRlcnZhbHMiLCJpbnRlcnZhbHMiLCJtYXAiLCJpbnRlcnZhbCIsInRpbWVzIiwid2Vla2RheXMiLCJqb2luIiwiZGF5c19vZl9tb250aCIsIm1vbnRocyIsInllYXJzIiwic2hvd0Vycm9yIiwic2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImRlZmF1bHRBbUNvcnRleENvbmZpZyIsInRlbXBsYXRlX2ZpbGVzIiwiZm9ybUFwaSIsIm9uU3VibWl0IiwidmFsdWVzIiwibmV3TXV0ZVRpbWluZyIsIm11dGVUaW1pbmdzIiwiZmlsdGVyIiwibmV3Q29uZmlnIiwicm91dGUiLCJvbGRDb25maWciLCJzdWNjZXNzTWVzc2FnZSIsInJlZGlyZWN0UGF0aCIsIk11dGVUaW1pbmciLCJoYW5kbGVTdWJtaXQiLCJCb29sZWFuIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwicmVnaXN0ZXIiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwidmFsdWUiLCJleGlzdGluZ011dGVUaW1pbmciLCJsZW5ndGgiLCJpbnB1dCIsInN1Ym1pdEJ1dHRvbiIsInRoZW1lIiwic3BhY2luZyIsInVzZUZvcm1Db250ZXh0IiwidXNlRmllbGRBcnJheSIsIkRBWVNfT0ZfVEhFX1dFRUsiLCJNT05USFMiLCJ2YWxpZGF0ZUFycmF5RmllbGQiLCJNdXRlVGltaW5nVGltZVJhbmdlIiwiZmllbGRzIiwidGltZUludGVydmFscyIsImFwcGVuZCIsImFkZFRpbWVJbnRlcnZhbCIsInJlbW92ZSIsInJlbW92ZVRpbWVJbnRlcnZhbCIsInRpbWVJbnRlcnZhbExlZ2VuZCIsInRpbWVJbnRlcnZhbCIsInRpbWVJbnRlcnZhbEluZGV4IiwidGltZUludGVydmFsU2VjdGlvbiIsImRheSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJwYXJzZWREYXkiLCJwYXJzZUludCIsIm1vbnRoIiwieWVhciIsInRlc3QiLCJyZW1vdmVUaW1lSW50ZXJ2YWxCdXR0b24iLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwic2Vjb25kYXJ5IiwiSW5saW5lRmllbGRSb3ciLCJJbmxpbmVGaWVsZCIsIkljb25CdXR0b24iLCJpbnRlcnZhbEluZGV4IiwidGltZVJhbmdlcyIsImFkZFRpbWVSYW5nZSIsInJlbW92ZVRpbWVSYW5nZSIsInZhbGlkYXRlVGltZSIsInRpbWVTdHJpbmciLCJob3VyIiwibWludXRlcyIsInNwbGl0IiwieCIsImlzSG91clZhbGlkIiwiaXNNaW51dGVWYWxpZCIsImlzVGltZVZhbGlkIiwiZm9ybUVycm9ycyIsInRpbWVSYW5nZUludmFsaWQiLCJzb21lIiwic3RhcnRfdGltZSIsImVuZF90aW1lIiwiZmllbGQiLCJ0aW1lUmFuZ2UiLCJpbmRleCIsInRpbWVSYW5nZUlucHV0IiwiZGVsZXRlVGltZVJhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcmUiLCJBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSIsIkFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSIsIkdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUiLCJ1c2VJc0FsZXJ0TWFuYWdlckF2YWlsYWJsZSIsImF2YWlsYWJsZUFsZXJ0TWFuYWdlcnMiLCJhbGVydE1hbmFnZXJOYW1lIiwiYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc05hbWVzIiwiYW0iLCJ1cGRhdGVRdWVyeVBhcmFtcyIsImlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlIiwidXBkYXRlIiwiZGVsZXRlIiwic2V0IiwicXVlcnlTb3VyY2UiLCJ1bmRlZmluZWQiLCJzdG9yZVNvdXJjZSIsImdldCIsImdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzQnlQZXJtaXNzaW9uIiwiYWNjZXNzVHlwZSIsIm9taXRCeSIsImlzVW5kZWZpbmVkIiwidmFsaWRhdGVWYWx1ZSIsImludmFsaWRUZXh0IiwidHJpbSIsImV2ZXJ5IiwiZW50cnkiLCJjb252ZXJ0U3RyaW5nVG9BcnJheSIsInN0ciIsInMiLCJ2Il0sInNvdXJjZVJvb3QiOiIifQ==