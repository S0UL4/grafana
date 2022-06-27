"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRuleForm"],{

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

/***/ "./public/app/features/alerting/unified/RuleEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _components_rule_editor_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AlertRuleForm.tsx");
/* harmony import */ var _hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _AlertWarning, _AlertWarning2, _AlertWarning3, _AlertWarning4, _Page$Contents2, _AlertRuleForm, _LinkButton;

















const ExistingRuleEditor = ({
  identifier
}) => {
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__.useCleanup)(state => state.unifiedAlerting.ruleForm.existingRule);
  const {
    loading,
    result,
    error,
    dispatched
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__.useUnifiedAlertingSelector)(state => state.ruleForm.existingRule);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    isEditable
  } = (0,_hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_7__.useIsRuleEditable)(_utils_rule_id__WEBPACK_IMPORTED_MODULE_11__.ruleIdentifierToRuleSourceName(identifier), result === null || result === void 0 ? void 0 : result.rule);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!dispatched) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.fetchEditableRuleAction)(identifier));
    }
  }, [dispatched, dispatch, identifier]);

  if (loading || isEditable === undefined) {
    return _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        severity: "error",
        title: "Failed to load rule",
        children: error.message
      })
    });
  }

  if (!result) {
    return _AlertWarning || (_AlertWarning = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Rule not found",
      children: "Sorry! This rule does not exist."
    }));
  }

  if (isEditable === false) {
    return _AlertWarning2 || (_AlertWarning2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Cannot edit rule",
      children: "Sorry! You do not have permission to edit this rule."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_rule_editor_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__.AlertRuleForm, {
    existing: result
  });
};

const RuleEditor = ({
  match
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    id
  } = match.params;
  const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_11__.tryParse(id, true);
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_13__["default"])(async () => {
    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.fetchAllPromBuildInfoAction)());
  }, [dispatch]);
  const {
    canCreateGrafanaRules,
    canCreateCloudRules,
    canEditRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_10__.useRulesAccess)();

  if (!identifier && !canCreateGrafanaRules && !canCreateCloudRules) {
    return _AlertWarning3 || (_AlertWarning3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Cannot create rules",
      children: "Sorry! You are not allowed to create rules."
    }));
  }

  if (identifier && !canEditRules(identifier.ruleSourceName)) {
    return _AlertWarning4 || (_AlertWarning4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Cannot edit rules",
      children: "Sorry! You are not allowed to edit rules."
    }));
  }

  if (loading) {
    return _Page$Contents2 || (_Page$Contents2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
        text: "Loading..."
      })
    }));
  }

  if (identifier) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ExistingRuleEditor, {
      identifier: identifier
    }, id);
  }

  return _AlertRuleForm || (_AlertRuleForm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_rule_editor_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__.AlertRuleForm, {}));
};

const AlertWarning = ({
  title,
  children
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
  className: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(warningStyles).warning,
  severity: "warning",
  title: title,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
    children: children
  }), _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
    href: "alerting/list",
    children: "To rule list"
  }))]
});

const warningStyles = theme => ({
  warning: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(4)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withErrorBoundary)(RuleEditor, {
  style: 'page'
}));

/***/ }),

/***/ "./public/app/features/alerting/unified/api/preview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewAlertRule": () => (/* binding */ previewAlertRule)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _types_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/types/preview.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");






function previewAlertRule(request) {
  if ((0,_types_preview__WEBPACK_IMPORTED_MODULE_2__.isCloudPreviewRequest)(request)) {
    return previewCloudAlertRule(request);
  }

  if ((0,_types_preview__WEBPACK_IMPORTED_MODULE_2__.isGrafanaPreviewRequest)(request)) {
    return previewGrafanaAlertRule(request);
  }

  throw new Error('unsupported preview rule request');
}

function previewGrafanaAlertRule(request) {
  const type = _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.grafana;
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.withLoadingIndicator)({
    whileLoading: createResponse(type),
    source: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      method: 'POST',
      url: `/api/v1/rule/test/grafana`,
      data: request
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
      data
    }) => {
      return createResponse(type, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
        series: data.instances.map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dataFrameFromJSON)
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(createResponse(type, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error,
        error: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryError)(error)
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)())
  });
}

function createResponse(ruleType, data = {}) {
  return {
    ruleType,
    data: Object.assign({
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
      series: [],
      timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)()
    }, data)
  };
}

function previewCloudAlertRule(request) {
  throw new Error('preview for cloud alerting rules is not implemented');
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelPluginsButtonGroup": () => (/* binding */ PanelPluginsButtonGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PanelPluginsButtonGroup(props) {
  const {
    value,
    onChange,
    size = 'md'
  } = props;
  const panels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getSupportedPanels(), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
    options: panels,
    value: value,
    onChange: onChange,
    size: size
  });
}

function getSupportedPanels() {
  return Object.values(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.panels).reduce((panels, panel) => {
    if (isSupportedPanelPlugin(panel.id)) {
      panels.push({
        value: panel.id,
        label: panel.name,
        imgUrl: panel.info.logos.small
      });
    }

    return panels;
  }, []);
}

function isSupportedPanelPlugin(id) {
  switch (id) {
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.TIMESERIES:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.TABLE:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STAT:
      return true;

    default:
      return false;
  }
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AlertRuleForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertRuleForm": () => (/* binding */ AlertRuleForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/0/cache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _CloudEvaluationBehavior__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudEvaluationBehavior.tsx");
/* harmony import */ var _DetailsStep__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/DetailsStep.tsx");
/* harmony import */ var _GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaEvaluationBehavior.tsx");
/* harmony import */ var _NotificationsStep__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NotificationsStep.tsx");
/* harmony import */ var _RuleInspector__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleInspector.tsx");
/* harmony import */ var _query_and_alert_condition_QueryAndAlertConditionStep__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/QueryAndAlertConditionStep.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _GrafanaEvaluationBeh, _CloudEvaluationBehav, _NotificationsStep;

























const AlertRuleForm = ({
  existing
}) => {
  var _ref;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.useAppNotification)();
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__.useQueryParams)();
  const [showEditYaml, setShowEditYaml] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const returnTo = (_ref = queryParams['returnTo']) !== null && _ref !== void 0 ? _ref : '/alerting/list';
  const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (existing) {
      return (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_12__.rulerRuleToFormValues)(existing);
    }

    return Object.assign({}, (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_12__.getDefaultFormValues)(), {
      queries: (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_12__.getDefaultQueries)()
    }, queryParams['defaults'] ? JSON.parse(queryParams['defaults']) : {}, {
      type: _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.grafana
    });
  }, [existing, queryParams]);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onSubmit',
    defaultValues,
    shouldFocusError: true
  });
  const {
    handleSubmit,
    watch
  } = formAPI;
  const type = watch('type');
  const dataSourceName = watch('dataSourceName');
  const showStep2 = Boolean(type && (type === _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.grafana || !!dataSourceName));
  const submitState = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__.useUnifiedAlertingSelector)(state => state.ruleForm.saveRule) || _utils_redux__WEBPACK_IMPORTED_MODULE_11__.initialAsyncRequestState;
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_6__.useCleanup)(state => state.unifiedAlerting.ruleForm.saveRule);

  const submit = (values, exitOnSave) => {
    var _values$annotations$m, _values$annotations, _values$labels$map$fi, _values$labels;

    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.saveRuleFormAction)({
      values: Object.assign({}, defaultValues, values, {
        annotations: (_values$annotations$m = (_values$annotations = values.annotations) === null || _values$annotations === void 0 ? void 0 : _values$annotations.map(({
          key,
          value
        }) => ({
          key: key.trim(),
          value: value.trim()
        })).filter(({
          key,
          value
        }) => !!key && !!value)) !== null && _values$annotations$m !== void 0 ? _values$annotations$m : [],
        labels: (_values$labels$map$fi = (_values$labels = values.labels) === null || _values$labels === void 0 ? void 0 : _values$labels.map(({
          key,
          value
        }) => ({
          key: key.trim(),
          value: value.trim()
        })).filter(({
          key
        }) => !!key)) !== null && _values$labels$map$fi !== void 0 ? _values$labels$map$fi : []
      }),
      existing,
      redirectOnSave: exitOnSave ? returnTo : undefined
    }));
  };

  const deleteRule = () => {
    if (existing) {
      const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.fromRulerRule(existing.ruleSourceName, existing.namespace, existing.group.name, existing.rule);
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.deleteRuleAction)(identifier, {
        navigateTo: '/alerting/list'
      }));
    }
  };

  const onInvalid = () => {
    notifyApp.error('There are errors in the form. Please correct them and try again!');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formAPI, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("form", {
      onSubmit: e => e.preventDefault(),
      className: styles.form,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PageToolbar, {
        title: `${existing ? 'Edit' : 'Create'} alert rule`,
        pageIcon: "bell",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.Link, {
          to: returnTo,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "secondary",
            disabled: submitState.loading,
            type: "button",
            fill: "outline",
            children: "Cancel"
          })
        }), existing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "destructive",
          type: "button",
          onClick: () => setShowDeleteModal(true),
          children: "Delete"
        }) : null, isCortexLokiOrRecordingRule(watch) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "secondary",
          type: "button",
          onClick: () => setShowEditYaml(true),
          disabled: submitState.loading,
          children: "Edit yaml"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "primary",
          type: "button",
          onClick: handleSubmit(values => submit(values, false), onInvalid),
          disabled: submitState.loading,
          children: [submitState.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
            className: styles.buttonSpinner,
            inline: true
          }), "Save"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "primary",
          type: "button",
          onClick: handleSubmit(values => submit(values, true), onInvalid),
          disabled: submitState.loading,
          children: [submitState.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
            className: styles.buttonSpinner,
            inline: true
          }), "Save and exit"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
        className: styles.contentOuter,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CustomScrollbar, {
          autoHeightMin: "100%",
          hideHorizontalTrack: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div", {
            className: styles.contentInner,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_query_and_alert_condition_QueryAndAlertConditionStep__WEBPACK_IMPORTED_MODULE_19__.QueryAndAlertConditionStep, {
              editingExistingRule: !!existing
            }), showStep2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
              children: [type === _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.grafana ? _GrafanaEvaluationBeh || (_GrafanaEvaluationBeh = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_16__.GrafanaEvaluationBehavior, {})) : _CloudEvaluationBehav || (_CloudEvaluationBehav = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_CloudEvaluationBehavior__WEBPACK_IMPORTED_MODULE_14__.CloudEvaluationBehavior, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_DetailsStep__WEBPACK_IMPORTED_MODULE_15__.DetailsStep, {
                initialFolder: defaultValues.folder
              }), _NotificationsStep || (_NotificationsStep = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_NotificationsStep__WEBPACK_IMPORTED_MODULE_17__.NotificationsStep, {}))]
            })]
          })
        })
      })]
    }), showDeleteModal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, {
      isOpen: true,
      title: "Delete rule",
      body: "Deleting this rule will permanently remove it. Are you sure you want to delete this rule?",
      confirmText: "Yes, delete",
      icon: "exclamation-triangle",
      onConfirm: deleteRule,
      onDismiss: () => setShowDeleteModal(false)
    }) : null, showEditYaml ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_RuleInspector__WEBPACK_IMPORTED_MODULE_18__.RuleInspector, {
      onClose: () => setShowEditYaml(false)
    }) : null]
  }));
};

const isCortexLokiOrRecordingRule = watch => {
  const [ruleType, dataSourceName] = watch(['type', 'dataSourceName']);
  return (ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.cloudAlerting || ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.cloudRecording) && dataSourceName !== '';
};

const getStyles = theme => {
  return {
    buttonSpinner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing(1)};
    `,
    form: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    `,
    contentInner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1;
      padding: ${theme.spacing(2)};
    `,
    contentOuter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.weak};
      border-radius: ${theme.shape.borderRadius()};
      margin: ${theme.spacing(0, 2, 2)};
      overflow: hidden;
      flex: 1;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    `
  };
};

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

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudEvaluationBehavior.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudEvaluationBehavior": () => (/* binding */ CloudEvaluationBehavior)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _PreviewRule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _PreviewRule;

const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const CloudEvaluationBehavior = () => {
  var _errors$forTime, _errors$forTime2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const type = watch('type'); // cloud recording rules do not have alert conditions

  if (type === _types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.cloudRecording) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_7__.RuleEditorSection, {
    stepNo: 2,
    title: "Alert evaluation behavior",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
      label: "For",
      description: "Expression has to be true for this long for the alert to be fired.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          invalid: !!((_errors$forTime = errors.forTime) !== null && _errors$forTime !== void 0 && _errors$forTime.message),
          error: (_errors$forTime2 = errors.forTime) === null || _errors$forTime2 === void 0 ? void 0 : _errors$forTime2.message,
          className: styles.inlineField,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register('forTime', {
            pattern: {
              value: /^\d+$/,
              message: 'Must be a positive integer.'
            }
          }), {
            width: 8
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
          name: "forTimeUnit",
          render: _ref => {
            let {
              field: {
                onChange
              }
            } = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, Object.assign({}, field, {
              options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
              onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value),
              width: 15,
              className: styles.timeUnit
            }));
          },
          control: control
        })]
      })
    }), _PreviewRule || (_PreviewRule = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PreviewRule__WEBPACK_IMPORTED_MODULE_6__.PreviewRule, {}))]
  });
};

const getStyles = theme => ({
  inlineField: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  timeUnit: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing.xs};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudRulesSourcePicker": () => (/* binding */ CloudRulesSourcePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function CloudRulesSourcePicker(_ref) {
  let {
    value
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const rulesSourcesWithRuler = (0,_hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_2__.useRulesSourcesWithRuler)();
  const dataSourceFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(ds => {
    return !!rulesSourcesWithRuler.find(({
      id
    }) => id === ds.id);
  }, [rulesSourcesWithRuler]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourcePicker, Object.assign({
    noDefault: true,
    alerting: true,
    filter: dataSourceFilter,
    current: value
  }, props));
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/ConditionField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionField": () => (/* binding */ ConditionField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

var _Card$Heading, _Card$Meta;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const ConditionField = ({
  existing = false
}) => {
  var _errors$condition, _errors$condition2;

  const {
    watch,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const queries = watch('queries');
  const condition = watch('condition');
  const expressions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return queries.filter(query => query.datasourceUid === app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_5__.ExpressionDatasourceUID);
  }, [queries]);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => queries.filter(q => !!q.refId).map(q => ({
    value: q.refId,
    label: `${q.refId} - ${expressions.includes(q) ? 'expression' : 'query'}`
  })), [queries, expressions]); // automatically use the last expression when new expressions have been added

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const lastExpression = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.last)(expressions);

    if (lastExpression && !existing) {
      setValue('condition', lastExpression.refId, {
        shouldValidate: true
      });
    }
  }, [expressions, setValue, existing]); // reset condition if option no longer exists or if it is unset, but there are options available

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const lastExpression = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.last)(expressions);
    const conditionExists = options.find(({
      value
    }) => value === condition);

    if (condition && !conditionExists) {
      var _lastExpression$refId;

      setValue('condition', (_lastExpression$refId = lastExpression === null || lastExpression === void 0 ? void 0 : lastExpression.refId) !== null && _lastExpression$refId !== void 0 ? _lastExpression$refId : null);
    } else if (!condition && lastExpression) {
      setValue('condition', lastExpression.refId, {
        shouldValidate: true
      });
    }
  }, [condition, expressions, options, setValue]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return options.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card, {
    className: styles.container,
    children: [_Card$Heading || (_Card$Heading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Heading, {
      children: "Set alert condition"
    })), _Card$Meta || (_Card$Meta = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {
      children: "Select one of your queries or expressions set above that contains your alert condition."
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Actions, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        error: (_errors$condition = errors.condition) === null || _errors$condition === void 0 ? void 0 : _errors$condition.message,
        invalid: !!((_errors$condition2 = errors.condition) !== null && _errors$condition2 !== void 0 && _errors$condition2.message),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
          name: "condition",
          render: _ref => {
            let {
              field: {
                onChange
              }
            } = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonList, Object.assign({
              options: options,
              onChange: onChange
            }, field));
          },
          rules: {
            required: {
              value: true,
              message: 'Please select the condition to alert on'
            }
          }
        })
      })
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
    title: "No queries or expressions have been configured",
    severity: "warning",
    className: styles.container,
    children: "Create at least one query or expression to be alerted on"
  });
};

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: ${theme.breakpoints.values.sm}px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/DetailsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsStep": () => (/* binding */ DetailsStep)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _AnnotationsField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx");
/* harmony import */ var _GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GroupAndNamespaceFields.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _RuleFolderPicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleFolderPicker.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

var _Label, _AnnotationsField;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const recordingRuleNameValidationPattern = {
  message: 'Recording rule name must be valid metric name. It may only contain letters, numbers, and colons. It may not contain whitespace.',
  value: /^[a-zA-Z_:][a-zA-Z0-9_:]*$/
};
const DetailsStep = ({
  initialFolder
}) => {
  var _errors$name, _errors$name2, _errors$folder, _errors$folder2, _errors$group, _errors$group2;

  const {
    register,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const ruleFormType = watch('type');
  const dataSourceName = watch('dataSourceName');
  const type = watch('type');
  const folderFilter = useRuleFolderFilter(initialFolder);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_11__.RuleEditorSection, {
    stepNo: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.cloudRecording ? 2 : 3,
    title: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.cloudRecording ? 'Add details for your recording rule' : 'Add details for your alert',
    description: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.cloudRecording ? 'Add labels to help you better manage your rules' : 'Write a summary and add labels to help you better manage your alerts',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
      className: styles.formInput,
      label: "Rule name",
      error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
      invalid: !!((_errors$name2 = errors.name) !== null && _errors$name2 !== void 0 && _errors$name2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input, Object.assign({
        id: "name"
      }, register('name', {
        required: {
          value: true,
          message: 'Must enter an alert name'
        },
        pattern: ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.cloudRecording ? recordingRuleNameValidationPattern : undefined,
        validate: {
          pathSeparator: value => {
            // we use the alert rule name as the "groupname" for Grafana managed alerts, so we can't allow path separators
            if (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.grafana) {
              return (0,_util__WEBPACK_IMPORTED_MODULE_13__.checkForPathSeparator)(value);
            }

            return true;
          }
        }
      })))
    }), (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.cloudRecording || ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.cloudAlerting) && dataSourceName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_10__.GroupAndNamespaceFields, {
      rulesSourceName: dataSourceName
    }), ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.grafana && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([styles.flexRow, styles.alignBaseline]),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
        label: _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
          htmlFor: "folder",
          description: 'Select a folder to store your rule.',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
            gap: 0.5,
            children: ["Folder", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
              placement: "top",
              content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                children: "Each folder has unique folder permission. When you store multiple rules in a folder, the folder access permissions get assigned to the rules."
              }),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                name: "info-circle",
                size: "xs"
              })
            })]
          })
        })),
        className: styles.formInput,
        error: (_errors$folder = errors.folder) === null || _errors$folder === void 0 ? void 0 : _errors$folder.message,
        invalid: !!((_errors$folder2 = errors.folder) !== null && _errors$folder2 !== void 0 && _errors$folder2.message),
        "data-testid": "folder-picker",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InputControl, {
          render: _ref => {
            let {} = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_RuleFolderPicker__WEBPACK_IMPORTED_MODULE_12__.RuleFolderPicker, Object.assign({
              inputId: "folder"
            }, field, {
              enableCreateNew: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.FoldersCreate),
              enableReset: true,
              filter: folderFilter
            }));
          },
          name: "folder",
          rules: {
            required: {
              value: true,
              message: 'Please select a folder'
            },
            validate: {
              pathSeparator: folder => (0,_util__WEBPACK_IMPORTED_MODULE_13__.checkForPathSeparator)(folder.title)
            }
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
        label: "Group",
        "data-testid": "group-picker",
        description: "Rules within the same group are evaluated after the same time interval.",
        className: styles.formInput,
        error: (_errors$group = errors.group) === null || _errors$group === void 0 ? void 0 : _errors$group.message,
        invalid: !!((_errors$group2 = errors.group) !== null && _errors$group2 !== void 0 && _errors$group2.message),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input, Object.assign({
          id: "group"
        }, register('group', {
          required: {
            value: true,
            message: 'Must enter a group name'
          }
        })))
      })]
    }), type !== _types_rule_form__WEBPACK_IMPORTED_MODULE_8__.RuleFormType.cloudRecording && (_AnnotationsField || (_AnnotationsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_AnnotationsField__WEBPACK_IMPORTED_MODULE_9__["default"], {})))]
  });
};

const useRuleFolderFilter = existingRuleForm => {
  const isSearchHitAvailable = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(hit => {
    const rbacDisabledFallback = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasEditPermissionInFolders;
    const canCreateRuleInFolder = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.AlertingRuleCreate, hit, rbacDisabledFallback);
    const canUpdateInCurrentFolder = existingRuleForm && hit.folderId === existingRuleForm.id && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.AlertingRuleUpdate, hit, rbacDisabledFallback);
    return canCreateRuleInFolder || canUpdateInCurrentFolder;
  }, [existingRuleForm]);
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(folderHits => folderHits.filter(isSearchHitAvailable), [isSearchHitAvailable]);
};

const getStyles = theme => ({
  alignBaseline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    align-items: baseline;
    margin-bottom: ${theme.spacing(3)};
  `,
  formInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 275px;

    & + & {
      margin-left: ${theme.spacing(3)};
    }
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/ExpressionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressionEditor": () => (/* binding */ ExpressionEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const ExpressionEditor = ({
  value,
  onChange,
  dataSourceName
}) => {
  var _dataSource$component, _dataSource$component2;

  const {
    mapToValue,
    mapToQuery
  } = useQueryMappers(dataSourceName);
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mapToQuery({
    refId: 'A',
    hide: false
  }, value));
  const {
    error,
    loading,
    value: dataSource
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().get(dataSourceName);
  }, [dataSourceName]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(query => {
    setQuery(query);
    onChange(mapToValue(query));
  }, [onChange, mapToValue]);

  if (loading || (dataSource === null || dataSource === void 0 ? void 0 : dataSource.name) !== dataSourceName) {
    return null;
  }

  if (error || !dataSource || !(dataSource !== null && dataSource !== void 0 && (_dataSource$component = dataSource.components) !== null && _dataSource$component !== void 0 && _dataSource$component.QueryEditor)) {
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) || 'Data source plugin does not export any Query Editor component';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: ["Could not load query editor due to: ", errorMessage]
    });
  }

  const QueryEditor = dataSource === null || dataSource === void 0 ? void 0 : (_dataSource$component2 = dataSource.components) === null || _dataSource$component2 === void 0 ? void 0 : _dataSource$component2.QueryEditor;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(QueryEditor, {
    query: query,
    queries: [query],
    app: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.CloudAlerting,
    onChange: onChangeQuery,
    onRunQuery: lodash__WEBPACK_IMPORTED_MODULE_0__.noop,
    datasource: dataSource
  });
};

function useQueryMappers(dataSourceName) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const settings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().getInstanceSettings(dataSourceName);

    switch (settings === null || settings === void 0 ? void 0 : settings.type) {
      case 'loki':
      case 'prometheus':
        return {
          mapToValue: query => query.expr,
          mapToQuery: (existing, value) => Object.assign({}, existing, {
            expr: value
          })
        };

      default:
        throw new Error(`${dataSourceName} is not supported as an expression editor`);
    }
  }, [dataSourceName]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaAlertStatePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaAlertStatePicker": () => (/* binding */ GrafanaAlertStatePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["includeNoData", "includeError"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const options = [{
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.Alerting,
  label: 'Alerting'
}, {
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.NoData,
  label: 'No Data'
}, {
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.OK,
  label: 'OK'
}, {
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.Error,
  label: 'Error'
}];
const GrafanaAlertStatePicker = _ref => {
  let {
    includeNoData,
    includeError
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const opts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!includeNoData) {
      return options.filter(opt => opt.value !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.NoData);
    }

    if (!includeError) {
      return options.filter(opt => opt.value !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.Error);
    }

    return options;
  }, [includeNoData, includeError]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({
    options: opts
  }, props));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaConditionEvalWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaConditionEvalWarning": () => (/* binding */ GrafanaConditionEvalWarning)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;







// a warning that will be shown if a problematic yet technically valid combination of "evaluate every" and "evaluate for" is enetered
const GrafanaConditionEvalWarning = () => {
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const evaluateFor = watch('evaluateFor');
  const evaluateEvery = watch('evaluateEvery');

  if (evaluateFor === '0') {
    return null;
  }

  const durationFor = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.parseDuration)(evaluateFor);
  const durationEvery = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.parseDuration)(evaluateEvery);

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(durationFor) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(durationEvery)) {
    return null;
  }

  const millisFor = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.durationToMilliseconds)(durationFor);
  const millisEvery = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.durationToMilliseconds)(durationEvery);

  if (millisFor && millisEvery && millisFor <= millisEvery) {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      severity: "warning",
      title: "",
      children: "Setting a \"for\" duration that is less than or equal to the evaluation interval will result in the evaluation interval being used to calculate when an alert that has stopped receiving data will be closed."
    }));
  }

  return null;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaEvaluationBehavior.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaEvaluationBehavior": () => (/* binding */ GrafanaEvaluationBehavior)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaAlertStatePicker.tsx");
/* harmony import */ var _GrafanaConditionEvalWarning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaConditionEvalWarning.tsx");
/* harmony import */ var _PreviewRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"];

var _GrafanaConditionEval, _PreviewRule;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const MIN_TIME_RANGE_STEP_S = 10; // 10 seconds

const forValidationOptions = {
  required: {
    value: true,
    message: 'Required.'
  },
  pattern: _utils_time__WEBPACK_IMPORTED_MODULE_5__.durationValidationPattern
};
const evaluateEveryValidationOptions = {
  required: {
    value: true,
    message: 'Required.'
  },
  pattern: _utils_time__WEBPACK_IMPORTED_MODULE_5__.positiveDurationValidationPattern,
  validate: value => {
    const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.parseDuration)(value);

    if (Object.keys(duration).length) {
      const diff = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.durationToMilliseconds)(duration);

      if (diff < MIN_TIME_RANGE_STEP_S * 1000) {
        return `Cannot be less than ${MIN_TIME_RANGE_STEP_S} seconds.`;
      }

      if (diff % (MIN_TIME_RANGE_STEP_S * 1000) !== 0) {
        return `Must be a multiple of ${MIN_TIME_RANGE_STEP_S} seconds.`;
      }
    }

    return true;
  }
};
const GrafanaEvaluationBehavior = () => {
  var _errors$evaluateFor, _errors$evaluateFor2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const [showErrorHandling, setShowErrorHandling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    register,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const evaluateEveryId = 'eval-every-input';
  const evaluateForId = 'eval-for-input';
  return (
    /*#__PURE__*/
    // TODO remove "and alert condition" for recording rules
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_10__.RuleEditorSection, {
      stepNo: 2,
      title: "Alert evaluation behavior",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: "Evaluate",
        description: "Evaluation interval applies to every rule within a group. It can overwrite the interval of an existing alert rule.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: styles.flexRow,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, {
            htmlFor: evaluateEveryId,
            width: 16,
            tooltip: "How often the alert will be evaluated to see if it fires",
            children: "Evaluate every"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
            id: evaluateEveryId,
            width: 8
          }, register('evaluateEvery', evaluateEveryValidationOptions))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, {
            htmlFor: evaluateForId,
            width: 7,
            tooltip: "Once condition is breached, alert will go into pending state. If it is pending for longer than the \"for\" value, it will become a firing alert.",
            children: "for"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
            className: styles.inlineField,
            error: (_errors$evaluateFor = errors.evaluateFor) === null || _errors$evaluateFor === void 0 ? void 0 : _errors$evaluateFor.message,
            invalid: !!((_errors$evaluateFor2 = errors.evaluateFor) !== null && _errors$evaluateFor2 !== void 0 && _errors$evaluateFor2.message),
            validationMessageHorizontalOverflow: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
              id: evaluateForId,
              width: 8
            }, register('evaluateFor', forValidationOptions)))
          })]
        })
      }), _GrafanaConditionEval || (_GrafanaConditionEval = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_GrafanaConditionEvalWarning__WEBPACK_IMPORTED_MODULE_8__.GrafanaConditionEvalWarning, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_6__.CollapseToggle, {
        isCollapsed: !showErrorHandling,
        onToggle: collapsed => setShowErrorHandling(!collapsed),
        text: "Configure no data and error handling",
        className: styles.collapseToggle
      }), showErrorHandling && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
          htmlFor: "no-data-state-input",
          label: "Alert state if no data or all values are null",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
            render: _ref => {
              let {
                field: {
                  onChange
                }
              } = _ref,
                  field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_7__.GrafanaAlertStatePicker, Object.assign({}, field, {
                inputId: "no-data-state-input",
                width: 42,
                includeNoData: true,
                includeError: false,
                onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
              }));
            },
            name: "noDataState"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
          htmlFor: "exec-err-state-input",
          label: "Alert state if execution error or timeout",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
            render: _ref2 => {
              let {
                field: {
                  onChange
                }
              } = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_7__.GrafanaAlertStatePicker, Object.assign({}, field, {
                inputId: "exec-err-state-input",
                width: 42,
                includeNoData: false,
                includeError: true,
                onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
              }));
            },
            name: "execErrState"
          })
        })]
      }), _PreviewRule || (_PreviewRule = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PreviewRule__WEBPACK_IMPORTED_MODULE_9__.PreviewRule, {}))]
    })
  );
};

const getStyles = theme => ({
  inlineField: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  collapseToggle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(2, 0, 2, -1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GroupAndNamespaceFields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupAndNamespaceFields": () => (/* binding */ GroupAndNamespaceFields)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _SelectWIthAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"],
      _excluded2 = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const GroupAndNamespaceFields = ({
  rulesSourceName
}) => {
  var _rulerRequests$rulesS, _errors$namespace, _errors$namespace2, _errors$group, _errors$group2;

  const {
    control,
    watch,
    formState: {
      errors
    },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyle);
  const [customGroup, setCustomGroup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const rulerRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchRulerRulesAction)({
      rulesSourceName
    }));
  }, [rulesSourceName, dispatch]);
  const rulesConfig = (_rulerRequests$rulesS = rulerRequests[rulesSourceName]) === null || _rulerRequests$rulesS === void 0 ? void 0 : _rulerRequests$rulesS.result;
  const namespace = watch('namespace');
  const namespaceOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => rulesConfig ? Object.keys(rulesConfig).map(namespace => ({
    label: namespace,
    value: namespace
  })) : [], [rulesConfig]);
  const groupOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _rulesConfig$namespac;

    return namespace && (rulesConfig === null || rulesConfig === void 0 ? void 0 : (_rulesConfig$namespac = rulesConfig[namespace]) === null || _rulesConfig$namespac === void 0 ? void 0 : _rulesConfig$namespac.map(group => ({
      label: group.name,
      value: group.name
    }))) || [];
  }, [namespace, rulesConfig]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: style.flexRow,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      "data-testid": "namespace-picker",
      label: "Namespace",
      error: (_errors$namespace = errors.namespace) === null || _errors$namespace === void 0 ? void 0 : _errors$namespace.message,
      invalid: !!((_errors$namespace2 = errors.namespace) !== null && _errors$namespace2 !== void 0 && _errors$namespace2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: _ref => {
          let {
            field: {
              onChange
            }
          } = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_7__.SelectWithAdd, Object.assign({}, field, {
            className: style.input,
            onChange: value => {
              setValue('group', ''); //reset if namespace changes

              onChange(value);
            },
            onCustomChange: custom => {
              custom && setCustomGroup(true);
            },
            options: namespaceOptions,
            width: 42
          }));
        },
        name: "namespace",
        control: control,
        rules: {
          required: {
            value: true,
            message: 'Required.'
          },
          validate: {
            pathSeparator: _util__WEBPACK_IMPORTED_MODULE_8__.checkForPathSeparator
          }
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      "data-testid": "group-picker",
      label: "Group",
      error: (_errors$group = errors.group) === null || _errors$group === void 0 ? void 0 : _errors$group.message,
      invalid: !!((_errors$group2 = errors.group) !== null && _errors$group2 !== void 0 && _errors$group2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: _ref2 => {
          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_7__.SelectWithAdd, Object.assign({}, field, {
            options: groupOptions,
            width: 42,
            custom: customGroup,
            className: style.input
          }));
        },
        name: "group",
        control: control,
        rules: {
          required: {
            value: true,
            message: 'Required.'
          },
          validate: {
            pathSeparator: _util__WEBPACK_IMPORTED_MODULE_8__.checkForPathSeparator
          }
        }
      })
    })]
  });
};

const getStyle = theme => ({
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * + * {
      margin-left: ${theme.spacing(3)};
    }
  `,
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 330px !important;
  `
});

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

/***/ "./public/app/features/alerting/unified/components/rule-editor/NotificationsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsStep": () => (/* binding */ NotificationsStep)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _LabelsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LabelsField, _Card$Heading, _Card$Description;








const NotificationsStep = () => {
  const [hideFlowChart, setHideFlowChart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__.RuleEditorSection, {
    stepNo: 4,
    title: "Notifications",
    description: "Grafana handles the notifications for alerts by assigning labels to alerts. These labels connect alerts to contact points and silence alert instances that have matching labels.",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: styles.hideButton,
        onClick: () => setHideFlowChart(!hideFlowChart),
        children: `${!hideFlowChart ? 'Hide' : 'Show'} flow chart`
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: styles.contentWrapper,
      children: [!hideFlowChart && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        className: styles.flowChart,
        src: `/public/img/alerting/notification_policy_${theme.name.toLowerCase()}.svg`,
        alt: "notification policy flow chart"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column'
        },
        children: [_LabelsField || (_LabelsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_LabelsField__WEBPACK_IMPORTED_MODULE_3__["default"], {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
          className: styles.card,
          children: [_Card$Heading || (_Card$Heading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
            children: "Root route \u2013 default for all alerts"
          })), _Card$Description || (_Card$Description = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
            children: ["Without custom labels, your alert will be routed through the root route. To view and edit the root route, go to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
              href: "/alerting/routes",
              children: "notification policies"
            }), " or contact your admin in case you are using non-Grafana alert management."]
          }))]
        })]
      })]
    })]
  });
};

const getStyles = theme => ({
  contentWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    align-items: center;
  `,
  hideButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    cursor: pointer;
    margin-bottom: ${theme.spacing(1)};
  `,
  card: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 500px;
  `,
  flowChart: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(3)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewRule": () => (/* binding */ PreviewRule)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _api_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/api/preview.ts");
/* harmony import */ var _hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _PreviewRuleResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRuleResult.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;














const fields = ['type', 'dataSourceName', 'condition', 'queries', 'expression'];
function PreviewRule() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const [preview, onPreview] = usePreview();
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const [type, condition, queries] = watch(['type', 'condition', 'queries']);
  const {
    allDataSourcesAvailable
  } = (0,_hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_6__.useAlertQueriesStatus)(queries);

  if (type === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudRecording || type === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudAlerting) {
    return null;
  }

  const isPreviewAvailable = Boolean(condition) && allDataSourcesAvailable;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
      children: [allDataSourcesAvailable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        disabled: !isPreviewAvailable,
        type: "button",
        variant: "primary",
        onClick: onPreview,
        children: "Preview alerts"
      }), !allDataSourcesAvailable && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
        title: "Preview is not available",
        severity: "warning",
        children: "Cannot display the query preview. Some of the data sources used in the queries are not available."
      })))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PreviewRuleResult__WEBPACK_IMPORTED_MODULE_8__.PreviewRuleResult, {
      preview: preview
    })]
  });
}

function usePreview() {
  const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const isMounted = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const onPreview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const values = getValues(fields);
    const request = createPreviewRequest(values);
    (0,_api_preview__WEBPACK_IMPORTED_MODULE_5__.previewAlertRule)(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeWhile)(response => !isCompleted(response), true)).subscribe(response => {
      if (!isMounted()) {
        return;
      }

      setPreview(response);
    });
  }, [getValues, isMounted]);
  return [preview, onPreview];
}

function createPreviewRequest(values) {
  const [type, dataSourceName, condition, queries, expression] = values;

  switch (type) {
    case _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudAlerting:
      return {
        dataSourceName,
        expr: expression
      };

    case _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.grafana:
      return {
        grafana_condition: {
          condition,
          data: queries,
          now: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormatISO)(Date.now())
        }
      };

    default:
      throw new Error(`Alert type ${type} not supported by preview.`);
  }
}

function isCompleted(response) {
  switch (response.data.state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error:
      return true;

    default:
      return false;
  }
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
      max-width: ${theme.breakpoints.values.xxl}px;
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/PreviewRuleResult.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewRuleResult": () => (/* binding */ PreviewRuleResult)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;











function PreviewRuleResult(props) {
  const {
    preview
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const fieldConfig = {
    defaults: {},
    overrides: [{
      matcher: {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldMatcherID.byName,
        options: 'Info'
      },
      properties: [{
        id: 'custom.displayMode',
        value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.JSONView
      }]
    }]
  };

  if (!preview) {
    return null;
  }

  const {
    data,
    ruleType
  } = preview;

  if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        children: "Loading preview..."
      }))
    });
  }

  if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: data.error ? (0,_utils_redux__WEBPACK_IMPORTED_MODULE_7__.messageFromError)(data.error) : 'Failed to preview alert rule'
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
      children: ["Preview based on the result of running the query, for this moment.", ' ', ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana ? 'Configuration for `no data` and `error handling` is not applied.' : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.table,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: ({
          width,
          height
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          style: {
            width: `${width}px`,
            height: `${height}px`
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.PanelRenderer, {
            title: "",
            width: width,
            height: height,
            pluginId: "table",
            data: data,
            fieldConfig: fieldConfig
          })
        })
      })
    })]
  });
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(2)} 0;
    `,
    table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1 1 auto;
      height: 135px;
      margin-top: ${theme.spacing(2)};
      border: 1px solid ${theme.colors.border.medium};
      border-radius: ${theme.shape.borderRadius(1)};
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/expressions/types.ts");
/* harmony import */ var app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/expressions/utils/expressionTypes.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertingQueryRunner.ts");
/* harmony import */ var _QueryRows__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryRows.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    var _props$value;

    super(props);

    _defineProperty(this, "runner", void 0);

    _defineProperty(this, "queries", void 0);

    _defineProperty(this, "onRunQueries", () => {
      const {
        queries
      } = this;
      this.runner.run(queries);
    });

    _defineProperty(this, "onCancelQueries", () => {
      this.runner.cancel();
    });

    _defineProperty(this, "onChangeQueries", queries => {
      this.queries = queries;
      this.props.onChange(queries);
    });

    _defineProperty(this, "onDuplicateQuery", query => {
      const {
        queries
      } = this;
      this.onChangeQueries(addQuery(queries, query));
    });

    _defineProperty(this, "onNewAlertingQuery", () => {
      const {
        queries
      } = this;
      const defaultDataSource = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_11__.getDatasourceSrv)().getInstanceSettings('default');

      if (!defaultDataSource) {
        return;
      }

      this.onChangeQueries(addQuery(queries, {
        datasourceUid: defaultDataSource.uid,
        model: {
          refId: '',
          datasource: {
            type: defaultDataSource.type,
            uid: defaultDataSource.uid
          }
        }
      }));
    });

    _defineProperty(this, "onNewExpressionQuery", () => {
      const {
        queries
      } = this;
      this.onChangeQueries(addQuery(queries, {
        datasourceUid: app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__.ExpressionDatasourceUID,
        model: app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__.dataSource.newQuery({
          type: app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__.ExpressionQueryType.classic,
          conditions: [app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__.defaultCondition]
        })
      }));
    });

    this.state = {
      panelDataByRefId: {}
    };
    this.runner = new _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_12__.AlertingQueryRunner();
    this.queries = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : [];
  }

  componentDidMount() {
    this.runner.get().subscribe(data => {
      this.setState({
        panelDataByRefId: data
      });
    });
  }

  componentWillUnmount() {
    this.runner.destroy();
  }

  isRunning() {
    const data = Object.values(this.state.panelDataByRefId).find(d => Boolean(d));
    return (data === null || data === void 0 ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading;
  }

  renderRunQueryButton() {
    const isRunning = this.isRunning();

    if (isRunning) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        icon: "fa fa-spinner",
        type: "button",
        variant: "destructive",
        onClick: this.onCancelQueries,
        children: "Cancel"
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
      icon: "sync",
      type: "button",
      onClick: this.onRunQueries,
      children: "Run queries"
    });
  }

  render() {
    const {
      value = []
    } = this.props;
    const {
      panelDataByRefId
    } = this.state;
    const styles = getStyles(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.theme2);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: styles.container,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_QueryRows__WEBPACK_IMPORTED_MODULE_13__.QueryRows, {
        data: panelDataByRefId,
        queries: value,
        onQueriesChange: this.onChangeQueries,
        onDuplicateQuery: this.onDuplicateQuery,
        onRunQueries: this.onRunQueries
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
        spacing: "sm",
        align: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          type: "button",
          icon: "plus",
          onClick: this.onNewAlertingQuery,
          variant: "secondary",
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryTab.addQuery,
          children: "Add query"
        }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.expressionsEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          type: "button",
          icon: "plus",
          onClick: this.onNewExpressionQuery,
          variant: "secondary",
          children: "Add expression"
        }), this.renderRunQueryButton()]
      })]
    });
  }

}

const addQuery = (queries, queryToAdd) => {
  const refId = (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_6__.getNextRefIdChar)(queries);
  const query = Object.assign({}, queryToAdd, {
    refId,
    queryType: '',
    model: Object.assign({}, queryToAdd.model, {
      hide: false,
      refId
    }),
    relativeTimeRange: defaultTimeRange(queryToAdd.model)
  });
  return [...queries, query];
};

const defaultTimeRange = model => {
  if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__.isExpressionQuery)(model)) {
    return;
  }

  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDefaultRelativeTimeRange)();
};

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.stylesFactory)(theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.background.primary};
      height: 100%;
      max-width: ${theme.breakpoints.values.xxl}px;
    `,
    runWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(1)};
    `,
    editorWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 1px solid ${theme.colors.border.medium};
      border-radius: ${theme.shape.borderRadius()};
    `
  };
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryRows": () => (/* binding */ QueryRows)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _QueryWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryWrapper.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Card$Heading, _Card$Description, _Card$Figure;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class QueryRows extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onRemoveQuery", query => {
      this.props.onQueriesChange(this.props.queries.filter(item => {
        return item.model.refId !== query.refId;
      }));
    });

    _defineProperty(this, "onChangeTimeRange", (timeRange, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props;
      onQueriesChange(queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return Object.assign({}, item, {
          relativeTimeRange: timeRange
        });
      }));
    });

    _defineProperty(this, "onChangeThreshold", (thresholds, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props;
      const referencedRefId = queries[index].refId;
      onQueriesChange(queries.map(query => {
        if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model)) {
          return query;
        }

        if (query.model.conditions && query.model.conditions[0].query.params[0] === referencedRefId) {
          return Object.assign({}, query, {
            model: Object.assign({}, query.model, {
              conditions: query.model.conditions.map((condition, conditionIndex) => {
                // Only update the first condition for a given refId.
                if (condition.query.params[0] === referencedRefId && conditionIndex === 0) {
                  return Object.assign({}, condition, {
                    evaluator: Object.assign({}, condition.evaluator, {
                      params: [parseFloat(thresholds.steps[1].value.toPrecision(3))]
                    })
                  });
                }

                return condition;
              })
            })
          });
        }

        return query;
      }));
    });

    _defineProperty(this, "onChangeDataSource", (settings, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props;
      const updatedQueries = queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return copyModel(item, settings.uid);
      });
      onQueriesChange(updatedQueries);
    });

    _defineProperty(this, "onChangeQuery", (query, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props; // find what queries still have a reference to the old name

      const previousRefId = queries[index].refId;
      const newRefId = query.refId;
      onQueriesChange((0,_util__WEBPACK_IMPORTED_MODULE_9__.queriesWithUpdatedReferences)(queries, previousRefId, newRefId).map((item, itemIndex) => {
        var _item$model$queryType;

        if (itemIndex !== index) {
          return item;
        }

        return Object.assign({}, item, {
          refId: query.refId,
          queryType: (_item$model$queryType = item.model.queryType) !== null && _item$model$queryType !== void 0 ? _item$model$queryType : '',
          model: Object.assign({}, item.model, query, {
            datasource: query.datasource
          })
        });
      }));
    });

    _defineProperty(this, "onDragEnd", result => {
      const {
        queries,
        onQueriesChange
      } = this.props;

      if (!result || !result.destination) {
        return;
      }

      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      if (startIndex === endIndex) {
        return;
      }

      const update = Array.from(queries);
      const [removed] = update.splice(startIndex, 1);
      update.splice(endIndex, 0, removed);
      onQueriesChange(update);
    });

    _defineProperty(this, "onDuplicateQuery", (query, source) => {
      this.props.onDuplicateQuery(Object.assign({}, source, {
        model: query
      }));
    });

    _defineProperty(this, "getDataSourceSettings", query => {
      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    });

    _defineProperty(this, "getThresholdsForQueries", queries => {
      const record = {};

      for (const query of queries) {
        if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model)) {
          continue;
        }

        if (!Array.isArray(query.model.conditions)) {
          continue;
        }

        query.model.conditions.forEach((condition, index) => {
          if (index > 0) {
            return;
          }

          const threshold = condition.evaluator.params[0];
          const refId = condition.query.params[0];

          if (condition.evaluator.type === 'outside_range' || condition.evaluator.type === 'within_range') {
            return;
          }

          if (!record[refId]) {
            record[refId] = {
              mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ThresholdsMode.Absolute,
              steps: [{
                value: -Infinity,
                color: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.theme2.colors.success.main
              }]
            };
          }

          record[refId].steps.push({
            value: threshold,
            color: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.theme2.colors.error.main
          });
        });
      }

      return record;
    });

    this.state = {
      dataPerQuery: {}
    };
  }

  render() {
    const {
      onDuplicateQuery,
      onRunQueries,
      queries
    } = this.props;
    const thresholdByRefId = this.getThresholdsForQueries(queries);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.DragDropContext, {
      onDragEnd: this.onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.Droppable, {
        droppableId: "alerting-queries",
        direction: "vertical",
        children: provided => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", Object.assign({
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [queries.map((query, index) => {
              var _this$props$data$quer, _this$props$data;

              const data = (_this$props$data$quer = (_this$props$data = this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data[query.refId]) !== null && _this$props$data$quer !== void 0 ? _this$props$data$quer : {
                series: [],
                state: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.NotStarted
              };
              const dsSettings = this.getDataSourceSettings(query);

              if (!dsSettings) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DatasourceNotFound, {
                  index: index,
                  model: query.model,
                  onUpdateDatasource: () => {
                    const defaultDataSource = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_7__.getDatasourceSrv)().getInstanceSettings(null);

                    if (defaultDataSource) {
                      this.onChangeDataSource(defaultDataSource, index);
                    }
                  },
                  onRemoveQuery: () => {
                    this.onRemoveQuery(query);
                  }
                }, `${query.refId}-${index}`);
              }

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_QueryWrapper__WEBPACK_IMPORTED_MODULE_8__.QueryWrapper, {
                index: index,
                dsSettings: dsSettings,
                data: data,
                query: query,
                onChangeQuery: this.onChangeQuery,
                onRemoveQuery: this.onRemoveQuery,
                queries: queries,
                onChangeDataSource: this.onChangeDataSource,
                onDuplicateQuery: onDuplicateQuery,
                onRunQueries: onRunQueries,
                onChangeTimeRange: this.onChangeTimeRange,
                thresholds: thresholdByRefId[query.refId],
                onChangeThreshold: this.onChangeThreshold
              }, query.refId);
            }), provided.placeholder]
          }));
        }
      })
    });
  }

}

function copyModel(item, uid) {
  return Object.assign({}, item, {
    model: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(item.model, 'datasource'),
    datasourceUid: uid
  });
}

const DatasourceNotFound = ({
  index,
  onUpdateDatasource,
  onRemoveQuery,
  model
}) => {
  const refId = model.refId;
  const [showDetails, setShowDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const toggleDetails = () => {
    setShowDetails(show => !show);
  };

  const handleUpdateDatasource = () => {
    onUpdateDatasource();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_QueryWrapper__WEBPACK_IMPORTED_MODULE_8__.EmptyQueryWrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_5__.QueryOperationRow, {
      title: refId,
      draggable: true,
      index: index,
      id: refId,
      isOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card, {
        children: [_Card$Heading || (_Card$Heading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Heading, {
          children: "This datasource has been removed"
        })), _Card$Description || (_Card$Description = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Description, {
          children: "The datasource for this query was not found, it was either removed or is not installed correctly."
        })), _Card$Figure || (_Card$Figure = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Figure, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
            name: "question-circle"
          })
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Actions, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "secondary",
            onClick: handleUpdateDatasource,
            children: "Update datasource"
          }, "update"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "destructive",
            onClick: onRemoveQuery,
            children: "Remove query"
          }, "remove")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.SecondaryActions, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            onClick: toggleDetails,
            icon: showDetails ? 'angle-up' : 'angle-down',
            fill: "text",
            size: "sm",
            children: "Show details"
          }, "details")
        })]
      }), showDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("pre", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("code", {
            children: JSON.stringify(model, null, 2)
          })
        })
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyQueryWrapper": () => (/* binding */ EmptyQueryWrapper),
/* harmony export */   "QueryWrapper": () => (/* binding */ QueryWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _VizWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/VizWrapper.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const QueryWrapper = ({
  data,
  dsSettings,
  index,
  onChangeDataSource,
  onChangeQuery,
  onChangeTimeRange,
  onRunQueries,
  onRemoveQuery,
  onDuplicateQuery,
  query,
  queries,
  thresholds,
  onChangeThreshold
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const isExpression = (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__.isExpressionQuery)(query.model);
  const [pluginId, changePluginId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isExpression ? _utils_constants__WEBPACK_IMPORTED_MODULE_7__.TABLE : _utils_constants__WEBPACK_IMPORTED_MODULE_7__.TIMESERIES);

  const renderTimePicker = (query, index) => {
    var _query$relativeTimeRa;

    if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__.isExpressionQuery)(query.model) || !onChangeTimeRange) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RelativeTimeRangePicker, {
      timeRange: (_query$relativeTimeRa = query.relativeTimeRange) !== null && _query$relativeTimeRa !== void 0 ? _query$relativeTimeRa : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultRelativeTimeRange)(),
      onChange: range => onChangeTimeRange(range, index)
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_6__.QueryEditorRow, {
      alerting: true,
      dataSource: dsSettings,
      onChangeDataSource: !isExpression ? settings => onChangeDataSource(settings, index) : undefined,
      id: query.refId,
      index: index,
      data: data,
      query: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(query.model),
      onChange: query => onChangeQuery(query, index),
      onRemoveQuery: onRemoveQuery,
      onAddQuery: () => onDuplicateQuery((0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(query)),
      onRunQuery: onRunQueries,
      queries: queries,
      renderHeaderExtras: () => renderTimePicker(query, index),
      app: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.UnifiedAlerting,
      visualization: data.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VizWrapper__WEBPACK_IMPORTED_MODULE_8__.VizWrapper, {
        data: data,
        changePanel: changePluginId,
        currentPanel: pluginId,
        thresholds: thresholds,
        onThresholdsChange: thresholds => onChangeThreshold(thresholds, index)
      }) : null,
      hideDisableQuery: true
    }, query.refId)
  });
};
const EmptyQueryWrapper = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: styles.wrapper,
    children: children
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: AlertingQueryWrapper;
    margin-bottom: ${theme.spacing(1)};
    border: 1px solid ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleEditorSection": () => (/* binding */ RuleEditorSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const RuleEditorSection = ({
  title,
  stepNo,
  children,
  description
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: styles.parent,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: styles.stepNo,
        children: stepNo
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
        label: title,
        className: styles.fieldset,
        children: [description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: styles.description,
          children: description
        }), children]
      })
    })]
  });
};

const getStyles = theme => ({
  fieldset: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    legend {
      font-size: 16px;
      padding-top: ${theme.spacing(0.5)};
    }
  `,
  parent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    max-width: ${theme.breakpoints.values.xl};
    & + & {
      margin-top: ${theme.spacing(4)};
    }
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: -${theme.spacing(2)};
    color: ${theme.colors.text.secondary};
  `,
  stepNo: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: inline-block;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    line-height: ${theme.spacing(4)};
    border-radius: ${theme.spacing(4)};
    text-align: center;
    color: ${theme.colors.text.maxContrast};
    background-color: ${theme.colors.background.canvas};
    font-size: ${theme.typography.size.lg};
    margin-right: ${theme.spacing(2)};
  `,
  content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RuleFolderPicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleFolderPicker": () => (/* binding */ RuleFolderPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const RuleFolderPicker = _ref => {
  let {
    value
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_1__.FolderPicker, Object.assign({
    showRoot: false,
    allowEmpty: true,
    initialTitle: value === null || value === void 0 ? void 0 : value.title,
    initialFolderId: value === null || value === void 0 ? void 0 : value.id,
    accessControlMetadata: true
  }, props, {
    permissionLevel: app_types__WEBPACK_IMPORTED_MODULE_2__.PermissionLevelString.View
  }));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RuleInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleInspector": () => (/* binding */ RuleInspector)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/js-yaml-npm-4.1.0-3606f32312-c7830dfd45.zip/node_modules/js-yaml/dist/js-yaml.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const tabs = [{
  label: 'Yaml',
  value: 'yaml'
}];
const RuleInspector = ({
  onClose
}) => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('yaml');
  const {
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(drawerStyles);

  const onApply = formValues => {
    // Need to loop through all values and set them individually
    // TODO this is not type-safe :(
    for (const key in formValues) {
      // @ts-ignore
      setValue(key, formValues[key]);
    }

    onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Drawer, {
    title: "Inspect Alert rule",
    subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.subtitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(RuleInspectorSubtitle, {
        setActiveTab: setActiveTab,
        activeTab: activeTab
      })
    }),
    onClose: onClose,
    children: activeTab === 'yaml' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InspectorYamlTab, {
      onSubmit: onApply
    })
  });
};

const RuleInspectorSubtitle = ({
  activeTab,
  setActiveTab
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TabsBar, {
    children: tabs.map((tab, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tab, {
        label: tab.label,
        value: tab.value,
        onChangeTab: () => setActiveTab(tab.value),
        active: activeTab === tab.value
      }, `${tab.value}-${index}`);
    })
  });
};

const InspectorYamlTab = ({
  onSubmit
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(yamlTabStyle);
  const {
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const [alertRuleAsYaml, setAlertRuleAsYaml] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,js_yaml__WEBPACK_IMPORTED_MODULE_1__.dump)(getValues()));

  const onApply = () => {
    onSubmit((0,js_yaml__WEBPACK_IMPORTED_MODULE_1__.load)(alertRuleAsYaml));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.applyButton,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        type: "button",
        onClick: onApply,
        children: "Apply"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        disableWidth: true,
        children: ({
          height
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditor, {
          width: "100%",
          height: height,
          language: "yaml",
          value: alertRuleAsYaml,
          onBlur: setAlertRuleAsYaml,
          monacoOptions: {
            minimap: {
              enabled: false
            }
          }
        })
      })
    })]
  });
};

const yamlTabStyle = theme => ({
  content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex-grow: 1;
    height: 100%;
    padding-bottom: 16px;
    margin-bottom: ${theme.spacing(2)};
  `,
  applyButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-grow: 0;
  `
});

const drawerStyles = () => ({
  subtitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
});

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

/***/ "./public/app/features/alerting/unified/components/rule-editor/VizWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VizWrapper": () => (/* binding */ VizWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _hooks_useVizHeight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useVizHeight.ts");
/* harmony import */ var _PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const VizWrapper = ({
  data,
  currentPanel,
  changePanel,
  onThresholdsChange,
  thresholds
}) => {
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    frameIndex: 0,
    showHeader: true
  });
  const vizHeight = (0,_hooks_useVizHeight__WEBPACK_IMPORTED_MODULE_7__.useVizHeight)(data, currentPanel, options.frameIndex);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles(vizHeight));
  const [fieldConfig, setFieldConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultFieldConfig(thresholds, data));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setFieldConfig(fieldConfig => Object.assign({}, fieldConfig, {
      defaults: Object.assign({}, fieldConfig.defaults, {
        thresholds: thresholds,
        unit: defaultUnit(data),
        custom: Object.assign({}, fieldConfig.defaults.custom, {
          thresholdsStyle: {
            mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.GraphTresholdsStyleMode.Line
          }
        })
      })
    }));
  }, [thresholds, setFieldConfig, data]);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    eventBus: app_core_app_events__WEBPACK_IMPORTED_MODULE_6__["default"],
    canEditThresholds: true,
    onThresholdsChange: onThresholdsChange
  }), [onThresholdsChange]);

  if (!options || !data) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.buttonGroup,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_8__.PanelPluginsButtonGroup, {
        onChange: changePanel,
        value: currentPanel
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: ({
        width
      }) => {
        if (width === 0) {
          return null;
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          style: {
            height: `${vizHeight}px`,
            width: `${width}px`
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.PanelContextProvider, {
            value: context,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.PanelRenderer, {
              height: vizHeight,
              width: width,
              data: data,
              pluginId: currentPanel,
              title: "title",
              onOptionsChange: setOptions,
              options: options,
              fieldConfig: fieldConfig
            })
          })
        });
      }
    })]
  });
};

const getStyles = visHeight => theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: 0 ${theme.spacing(2)};
    height: ${visHeight + theme.spacing.gridSize * 4}px;
  `,
  buttonGroup: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: flex-end;
  `
});

function defaultUnit(data) {
  var _data$series$, _data$series$$fields$;

  return (_data$series$ = data.series[0]) === null || _data$series$ === void 0 ? void 0 : (_data$series$$fields$ = _data$series$.fields.find(field => field.type === 'number')) === null || _data$series$$fields$ === void 0 ? void 0 : _data$series$$fields$.config.unit;
}

function defaultFieldConfig(thresholds, data) {
  if (!thresholds) {
    return {
      defaults: {},
      overrides: []
    };
  }

  return {
    defaults: {
      thresholds: thresholds,
      unit: defaultUnit(data),
      custom: {
        thresholdsStyle: {
          mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.GraphTresholdsStyleMode.Line
        }
      }
    },
    overrides: []
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/AlertType.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx");
/* harmony import */ var _rule_types_RuleTypePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleTypePicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const AlertType = ({
  editingExistingRule
}) => {
  var _errors$type, _errors$type2, _errors$dataSourceNam, _errors$dataSourceNam2;

  const {
    enabledRuleTypes,
    defaultRuleType
  } = getAvailableRuleTypes();
  const {
    control,
    formState: {
      errors
    },
    getValues,
    setValue,
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const ruleFormType = watch('type');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [!editingExistingRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
      error: (_errors$type = errors.type) === null || _errors$type === void 0 ? void 0 : _errors$type.message,
      invalid: !!((_errors$type2 = errors.type) !== null && _errors$type2 !== void 0 && _errors$type2.message),
      "data-testid": "alert-type-picker",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
        render: ({
          field: {
            onChange
          }
        }) => {
          var _getValues;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_rule_types_RuleTypePicker__WEBPACK_IMPORTED_MODULE_8__.RuleTypePicker, {
            "aria-label": "Rule type",
            selected: (_getValues = getValues('type')) !== null && _getValues !== void 0 ? _getValues : defaultRuleType,
            onChange: onChange,
            enabledTypes: enabledRuleTypes
          });
        },
        name: "type",
        control: control,
        rules: {
          required: {
            value: true,
            message: 'Please select alert type'
          }
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.flexRow,
      children: (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording || ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
        className: styles.formInput,
        label: "Select data source",
        error: (_errors$dataSourceNam = errors.dataSourceName) === null || _errors$dataSourceNam === void 0 ? void 0 : _errors$dataSourceNam.message,
        invalid: !!((_errors$dataSourceNam2 = errors.dataSourceName) !== null && _errors$dataSourceNam2 !== void 0 && _errors$dataSourceNam2.message),
        "data-testid": "datasource-picker",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
          render: _ref => {
            let {
              field: {
                onChange
              }
            } = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_7__.CloudRulesSourcePicker, Object.assign({}, field, {
              onChange: ds => {
                var _ds$name;

                // reset location if switching data sources, as different rules source will have different groups and namespaces
                setValue('location', undefined);
                onChange((_ds$name = ds === null || ds === void 0 ? void 0 : ds.name) !== null && _ds$name !== void 0 ? _ds$name : null);
              }
            }));
          },
          name: "dataSourceName",
          control: control,
          rules: {
            required: {
              value: true,
              message: 'Please select a data source'
            }
          }
        })
      })
    })]
  });
};

function getAvailableRuleTypes() {
  const canCreateGrafanaRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.AlertingRuleCreate, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasEditPermissionInFolders);
  const canCreateCloudRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.AlertingRuleExternalWrite, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.isEditor);
  const defaultRuleType = canCreateGrafanaRules ? _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana : _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting;
  const enabledRuleTypes = [];

  if (canCreateGrafanaRules) {
    enabledRuleTypes.push(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana);
  }

  if (canCreateCloudRules) {
    enabledRuleTypes.push(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting, _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording);
  }

  return {
    enabledRuleTypes,
    defaultRuleType
  };
}

const getStyles = theme => ({
  formInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 330px;
    & + & {
      margin-left: ${theme.spacing(3)};
    }
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/Query.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _ExpressionEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/ExpressionEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"],
      _excluded2 = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Query = () => {
  var _errors$expression, _errors$expression2;

  const {
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const type = watch('type');
  const dataSourceName = watch('dataSourceName');
  const isGrafanaManagedType = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.grafana;
  const isCloudAlertRuleType = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.cloudAlerting;
  const isRecordingRuleType = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.cloudRecording;
  const showCloudExpressionEditor = (isRecordingRuleType || isCloudAlertRuleType) && dataSourceName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [showCloudExpressionEditor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      error: (_errors$expression = errors.expression) === null || _errors$expression === void 0 ? void 0 : _errors$expression.message,
      invalid: !!((_errors$expression2 = errors.expression) !== null && _errors$expression2 !== void 0 && _errors$expression2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
        name: "expression",
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ExpressionEditor__WEBPACK_IMPORTED_MODULE_4__.ExpressionEditor, Object.assign({}, field, {
            dataSourceName: dataSourceName
          }));
        },
        control: control,
        rules: {
          required: {
            value: true,
            message: 'A valid expression is required'
          }
        }
      })
    }), isGrafanaManagedType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      invalid: !!errors.queries,
      error: !!errors.queries && 'Must provide at least one valid query.' || undefined,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
        name: "queries",
        render: _ref2 => {
          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_QueryEditor__WEBPACK_IMPORTED_MODULE_5__.QueryEditor, Object.assign({}, field));
        },
        control: control,
        rules: {
          validate: queries => Array.isArray(queries) && !!queries.length
        }
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/QueryAndAlertConditionStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryAndAlertConditionStep": () => (/* binding */ QueryAndAlertConditionStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _ConditionField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/ConditionField.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _AlertType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/AlertType.tsx");
/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/Query.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Query;










const QueryAndAlertConditionStep = ({
  editingExistingRule
}) => {
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const type = watch('type');
  const isGrafanaManagedType = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_2__.RuleFormType.grafana;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__.RuleEditorSection, {
    stepNo: 1,
    title: "Set a query and alert condition",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AlertType__WEBPACK_IMPORTED_MODULE_5__.AlertType, {
      editingExistingRule: editingExistingRule
    }), type && (_Query || (_Query = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Query__WEBPACK_IMPORTED_MODULE_6__.Query, {}))), isGrafanaManagedType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ConditionField__WEBPACK_IMPORTED_MODULE_3__.ConditionField, {
      existing: editingExistingRule
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/DisabledTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisabledTooltip": () => (/* binding */ DisabledTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const DisabledTooltip = ({
  children,
  visible = false
}) => {
  if (!visible) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: "You do not appear to have any compatible datasources.",
    placement: "top",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: children
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/GrafanaManagedAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaManagedRuleType": () => (/* binding */ GrafanaManagedRuleType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _RuleType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;







const GrafanaManagedRuleType = ({
  selected = false,
  disabled,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RuleType__WEBPACK_IMPORTED_MODULE_2__.RuleType, {
    name: "Grafana managed alert",
    description: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      children: ["Supports multiple data sources of any kind.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "Transform data with expressions."]
    })),
    image: "public/img/grafana_icon.svg",
    selected: selected,
    disabled: disabled,
    value: _types_rule_form__WEBPACK_IMPORTED_MODULE_1__.RuleFormType.grafana,
    onClick: onClick
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MimirFlavoredType": () => (/* binding */ MimirFlavoredType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/DisabledTooltip.tsx");
/* harmony import */ var _RuleType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;








const MimirFlavoredType = ({
  selected = false,
  disabled = false,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__.DisabledTooltip, {
    visible: disabled,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RuleType__WEBPACK_IMPORTED_MODULE_3__.RuleType, {
      name: "Mimir or Loki alert",
      description: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        children: ["Use a Mimir, Loki or Cortex datasource.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Expressions are not supported."]
      })),
      image: "public/img/alerting/mimir_logo.svg",
      selected: selected,
      disabled: disabled,
      value: _types_rule_form__WEBPACK_IMPORTED_MODULE_1__.RuleFormType.cloudAlerting,
      onClick: onClick
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiRecordingRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingRuleType": () => (/* binding */ RecordingRuleType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/DisabledTooltip.tsx");
/* harmony import */ var _RuleType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;








const RecordingRuleType = ({
  selected = false,
  disabled = false,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__.DisabledTooltip, {
    visible: disabled,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RuleType__WEBPACK_IMPORTED_MODULE_3__.RuleType, {
      name: "Mimir or Loki recording rule",
      description: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        children: ["Precompute expressions.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Should be combined with an alert rule."]
      })),
      image: "public/img/alerting/mimir_logo_recording.svg",
      selected: selected,
      disabled: disabled,
      value: _types_rule_form__WEBPACK_IMPORTED_MODULE_1__.RuleFormType.cloudRecording,
      onClick: onClick
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleType": () => (/* binding */ RuleType)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const RuleType = props => {
  const {
    name,
    description,
    image,
    selected = false,
    value,
    onClick,
    disabled = false
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const cardStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
    [styles.wrapper]: true,
    [styles.disabled]: disabled
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: cardStyles,
    isSelected: selected,
    onClick: () => onClick(value),
    disabled: disabled,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Figure, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: image
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
      children: description
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 380px;
    cursor: pointer;
    user-select: none;
  `,
  disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    opacity: 0.5;
  `
});



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleTypePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTypePicker": () => (/* binding */ RuleTypePicker)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _GrafanaManagedAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/GrafanaManagedAlert.tsx");
/* harmony import */ var _MimirOrLokiAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiAlert.tsx");
/* harmony import */ var _MimirOrLokiRecordingRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiRecordingRule.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");














const RuleTypePicker = ({
  selected,
  onChange,
  enabledTypes
}) => {
  const rulesSourcesWithRuler = (0,_hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_5__.useRulesSourcesWithRuler)();
  const hasLotexDatasources = !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(rulesSourcesWithRuler);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.Stack, {
      direction: "row",
      gap: 2,
      children: [enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GrafanaManagedAlert__WEBPACK_IMPORTED_MODULE_7__.GrafanaManagedRuleType, {
        selected: selected === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana,
        onClick: onChange
      }), enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MimirOrLokiAlert__WEBPACK_IMPORTED_MODULE_8__.MimirFlavoredType, {
        selected: selected === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting,
        onClick: onChange,
        disabled: !hasLotexDatasources
      }), enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MimirOrLokiRecordingRule__WEBPACK_IMPORTED_MODULE_9__.RecordingRuleType, {
        selected: selected === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording,
        onClick: onChange,
        disabled: !hasLotexDatasources
      })]
    }), enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("small", {
      className: styles.meta,
      children: "Select \u201CGrafana managed\u201D unless you have a Mimir, Loki or Cortex data source with the Ruler API enabled."
    })]
  });
};

const getStyles = theme => ({
  meta: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.disabled};
  `
});



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkForPathSeparator": () => (/* binding */ checkForPathSeparator),
/* harmony export */   "queriesWithUpdatedReferences": () => (/* binding */ queriesWithUpdatedReferences),
/* harmony export */   "updateMathExpressionRefs": () => (/* binding */ updateMathExpressionRefs)
/* harmony export */ });
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/expressions/guards.ts");

function queriesWithUpdatedReferences(queries, previousRefId, newRefId) {
  return queries.map(query => {
    if (previousRefId === newRefId) {
      return query;
    }

    if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_0__.isExpressionQuery)(query.model)) {
      return query;
    }

    const isMathExpression = query.model.type === 'math';
    const isReduceExpression = query.model.type === 'reduce';
    const isResampleExpression = query.model.type === 'resample';
    const isClassicExpression = query.model.type === 'classic_conditions';

    if (isMathExpression) {
      var _query$model$expressi;

      return Object.assign({}, query, {
        model: Object.assign({}, query.model, {
          expression: updateMathExpressionRefs((_query$model$expressi = query.model.expression) !== null && _query$model$expressi !== void 0 ? _query$model$expressi : '', previousRefId, newRefId)
        })
      });
    }

    if (isResampleExpression || isReduceExpression) {
      const isReferencing = query.model.expression === previousRefId;
      return Object.assign({}, query, {
        model: Object.assign({}, query.model, {
          expression: isReferencing ? newRefId : query.model.expression
        })
      });
    }

    if (isClassicExpression) {
      var _query$model$conditio;

      const conditions = (_query$model$conditio = query.model.conditions) === null || _query$model$conditio === void 0 ? void 0 : _query$model$conditio.map(condition => Object.assign({}, condition, {
        query: Object.assign({}, condition.query, {
          params: condition.query.params.map(param => param === previousRefId ? newRefId : param)
        })
      }));
      return Object.assign({}, query, {
        model: Object.assign({}, query.model, {
          conditions
        })
      });
    }

    return query;
  });
}
function updateMathExpressionRefs(expression, previousRefId, newRefId) {
  const oldExpression = new RegExp('(\\$' + previousRefId + '\\b)|(\\${' + previousRefId + '})', 'gm');
  const newExpression = '${' + newRefId + '}';
  return expression.replace(oldExpression, newExpression);
} // some gateways (like Istio) will decode "/" and "\" characters – this will cause 404 errors for any API call
// that includes these values in the URL (ie. /my/path%2fto/resource -> /my/path/to/resource)
//
// see https://istio.io/latest/docs/ops/best-practices/security/#customize-your-system-on-path-normalization

function checkForPathSeparator(value) {
  const containsPathSeparator = value.includes('/') || value.includes('\\');

  if (containsPathSeparator) {
    return 'Cannot contain "/" or "\\" characters';
  }

  return true;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertQueriesStatus": () => (/* binding */ useAlertQueriesStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


function useAlertQueriesStatus(queries) {
  const allDataSourcesAvailable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => queries.every(query => Boolean((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid))), [queries]);
  return {
    allDataSourcesAvailable
  };
}

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

/***/ "./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRulesSourcesWithRuler": () => (/* binding */ useRulesSourcesWithRuler)
/* harmony export */ });
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");


function useRulesSourcesWithRuler() {
  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_1__.useUnifiedAlertingSelector)(state => state.dataSources);
  const dataSourcesWithRuler = Object.values(dataSources).map(ds => ds.result).filter(ds => Boolean(ds === null || ds === void 0 ? void 0 : ds.rulerConfig)); // try fetching rules for each prometheus to see if it has ruler

  return dataSourcesWithRuler.map(ds => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_0__.getDataSourceByName)(ds.name)).filter(dsConfig => Boolean(dsConfig));
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useVizHeight.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVizHeight": () => (/* binding */ useVizHeight)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");


function useVizHeight(data, pluginId, frameIndex) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.useTheme2)();

  if (pluginId === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESERIES || pluginId === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STAT || dataIsEmpty(data)) {
    return 200;
  }

  const values = data.series[frameIndex].fields[0].values.length;
  const rowHeight = theme.spacing.gridSize * 5;
  /*
   Calculate how if we can make  the table smaller than 200px
   for when we only have 1-2 values
   The extra rowHeight is to accommodate the header.
  */

  const tableHeight = values * rowHeight + rowHeight;
  return tableHeight >= 200 ? 200 : tableHeight;
}

function dataIsEmpty(data) {
  return !data || !data.series[0] || !data.series[0].fields[0] || !data.series[0].fields[0].values;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/state/AlertingQueryRunner.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertingQueryRunner": () => (/* binding */ AlertingQueryRunner)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_query_state_processing_canceler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/query/state/processing/canceler.ts");
/* harmony import */ var app_features_query_state_processing_revision__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/query/state/processing/revision.ts");
/* harmony import */ var app_features_query_state_runRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/query/state/runRequest.ts");
/* harmony import */ var _utils_timeRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/timeRange.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class AlertingQueryRunner {
  constructor(backendSrv = (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)(), dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)()) {
    _defineProperty(this, "subject", void 0);

    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "lastResult", void 0);

    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject(1);
    this.lastResult = {};
  }

  get() {
    return this.subject.asObservable();
  }

  async run(queries) {
    if (queries.length === 0) {
      const empty = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done);
      return this.subject.next(empty);
    } // do not execute if one more of the queries are not runnable,
    // for example not completely configured


    for (const query of queries) {
      if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_3__.isExpressionQuery)(query.model)) {
        const ds = await this.dataSourceSrv.get(query.datasourceUid);

        if (ds.filterQuery && !ds.filterQuery(query.model)) {
          const empty = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done);
          return this.subject.next(empty);
        }
      }
    }

    this.subscription = runRequest(this.backendSrv, queries).subscribe({
      next: dataPerQuery => {
        const nextResult = applyChange(dataPerQuery, (refId, data) => {
          const previous = this.lastResult[refId];
          const preProcessed = (0,app_features_query_state_runRequest__WEBPACK_IMPORTED_MODULE_6__.preProcessPanelData)(data, previous);
          return (0,app_features_query_state_processing_revision__WEBPACK_IMPORTED_MODULE_5__.setStructureRevision)(preProcessed, previous);
        });
        this.lastResult = nextResult;
        this.subject.next(this.lastResult);
      },
      error: error => {
        this.lastResult = mapErrorToPanelData(this.lastResult, error);
        this.subject.next(this.lastResult);
      }
    });
  }

  cancel() {
    if (!this.subscription) {
      return;
    }

    this.subscription.unsubscribe();
    let requestIsRunning = false;
    const nextResult = applyChange(this.lastResult, (refId, data) => {
      if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading) {
        requestIsRunning = true;
      }

      return Object.assign({}, data, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
      });
    });

    if (requestIsRunning) {
      this.subject.next(nextResult);
    }
  }

  destroy() {
    if (this.subject) {
      this.subject.complete();
    }

    this.cancel();
  }

}

const runRequest = (backendSrv, queries) => {
  const initial = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading);
  const request = {
    data: {
      data: queries
    },
    url: '/api/v1/eval',
    method: 'POST',
    requestId: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])()
  };
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.withLoadingIndicator)({
    whileLoading: initial,
    source: backendSrv.fetch(request).pipe(mapToPanelData(initial), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(mapErrorToPanelData(initial, error))), (0,app_features_query_state_processing_canceler__WEBPACK_IMPORTED_MODULE_4__.cancelNetworkRequestsOnUnsubscribe)(backendSrv, request.requestId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.share)())
  });
};

const initialState = (queries, state) => {
  return queries.reduce((dataByQuery, query) => {
    dataByQuery[query.refId] = {
      state,
      series: [],
      timeRange: getTimeRange(query, queries)
    };
    return dataByQuery;
  }, {});
};

const getTimeRange = (query, queries) => {
  if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_3__.isExpressionQuery)(query.model)) {
    const relative = (0,_utils_timeRange__WEBPACK_IMPORTED_MODULE_7__.getTimeRangeForExpression)(query.model, queries);
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.relativeToTimeRange(relative);
  }

  if (!query.relativeTimeRange) {
    console.warn(`Query with refId: ${query.refId} did not have any relative time range, using default.`);
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)();
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.relativeToTimeRange(query.relativeTimeRange);
};

const mapToPanelData = dataByQuery => {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(response => {
    const {
      data
    } = response;
    const results = {};

    for (const [refId, result] of Object.entries(data.results)) {
      results[refId] = {
        timeRange: dataByQuery[refId].timeRange,
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
        series: result.frames.map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dataFrameFromJSON)
      };
    }

    return results;
  });
};

const mapErrorToPanelData = (lastResult, error) => {
  const queryError = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryError)(error);
  return applyChange(lastResult, (refId, data) => {
    return Object.assign({}, data, {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error,
      error: queryError
    });
  });
};

const applyChange = (initial, change) => {
  const nextResult = {};

  for (const [refId, data] of Object.entries(initial)) {
    nextResult[refId] = change(refId, data);
  }

  return nextResult;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/types/preview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCloudPreviewRequest": () => (/* binding */ isCloudPreviewRequest),
/* harmony export */   "isGrafanaPreviewRequest": () => (/* binding */ isGrafanaPreviewRequest)
/* harmony export */ });
function isCloudPreviewRequest(request) {
  return 'expr' in request;
}
function isGrafanaPreviewRequest(request) {
  return 'grafana_condition' in request;
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

/***/ "./public/app/features/alerting/unified/utils/timeRange.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimeRangeForExpression": () => (/* binding */ getTimeRangeForExpression)
/* harmony export */ });
/* harmony import */ var _expressions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/expressions/types.ts");

const FALL_BACK_TIME_RANGE = {
  from: 21600,
  to: 0
};
const getTimeRangeForExpression = (query, queries) => {
  const referencedRefIds = getReferencedIds(query, queries);

  if (!referencedRefIds) {
    return FALL_BACK_TIME_RANGE;
  }

  const {
    from,
    to
  } = getTimeRanges(referencedRefIds, queries);

  if (!from.length && !to.length) {
    return FALL_BACK_TIME_RANGE;
  }

  return {
    from: Math.max(...from),
    to: Math.min(...to)
  };
};

const getReferencedIds = (model, queries) => {
  switch (model.type) {
    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.classic:
      return getReferencedIdsForClassicCondition(model);

    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.math:
      return getReferencedIdsForMath(model, queries);

    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.resample:
    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.reduce:
      return getReferencedIdsForReduce(model);
  }
};

const getReferencedIdsForClassicCondition = model => {
  var _model$conditions;

  return (_model$conditions = model.conditions) === null || _model$conditions === void 0 ? void 0 : _model$conditions.map(condition => {
    return condition.query.params[0];
  });
};

const getTimeRanges = (referencedRefIds, queries) => {
  let from = [];
  let to = [FALL_BACK_TIME_RANGE.to];

  for (const referencedRefIdsKey of referencedRefIds) {
    const query = queries.find(query => query.refId === referencedRefIdsKey);

    if (!query || !query.relativeTimeRange) {
      continue;
    }

    from.push(query.relativeTimeRange.from);
    to.push(query.relativeTimeRange.to);
  }

  return {
    from,
    to
  };
};

const getReferencedIdsForMath = (model, queries) => {
  return queries // filter queries of type query and filter expression on if it includes any refIds
  .filter(q => {
    var _model$expression;

    return q.queryType === 'query' && ((_model$expression = model.expression) === null || _model$expression === void 0 ? void 0 : _model$expression.includes(q.refId));
  }).map(q => {
    return q.refId;
  });
};

const getReferencedIdsForReduce = model => {
  return model.expression ? [model.expression] : undefined;
};

/***/ }),

/***/ "./public/app/features/expressions/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExpressionQuery": () => (/* binding */ isExpressionQuery)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/expressions/types.ts");


const isExpressionQuery = dataQuery => {
  if (!dataQuery) {
    return false;
  }

  if ((0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__.isExpressionReference)(dataQuery.datasource)) {
    return true;
  }

  const expression = dataQuery;

  if (typeof expression.type !== 'string') {
    return false;
  }

  return Object.values(_types__WEBPACK_IMPORTED_MODULE_1__.ExpressionQueryType).includes(expression.type);
};

/***/ }),

/***/ "./.yarn/cache/js-yaml-npm-4.1.0-3606f32312-c7830dfd45.zip/node_modules/js-yaml/dist/js-yaml.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORE_SCHEMA": () => (/* binding */ CORE_SCHEMA),
/* harmony export */   "DEFAULT_SCHEMA": () => (/* binding */ DEFAULT_SCHEMA),
/* harmony export */   "FAILSAFE_SCHEMA": () => (/* binding */ FAILSAFE_SCHEMA),
/* harmony export */   "JSON_SCHEMA": () => (/* binding */ JSON_SCHEMA),
/* harmony export */   "Schema": () => (/* binding */ Schema),
/* harmony export */   "Type": () => (/* binding */ Type),
/* harmony export */   "YAMLException": () => (/* binding */ YAMLException),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dump": () => (/* binding */ dump),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "loadAll": () => (/* binding */ loadAll),
/* harmony export */   "safeDump": () => (/* binding */ safeDump),
/* harmony export */   "safeLoad": () => (/* binding */ safeLoad),
/* harmony export */   "safeLoadAll": () => (/* binding */ safeLoadAll),
/* harmony export */   "types": () => (/* binding */ types)
/* harmony export */ });

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var types = {
  binary:    binary,
  float:     float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: dump,
	YAMLException: YAMLException,
	types: types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jsYaml);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRpbmdSdWxlRm9ybS40YTBiNWFhN2ZmMWNhNDc1MGExOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRU8sU0FBU0ksVUFBVCxDQUF1QkMsYUFBdkIsRUFBd0Q7RUFDN0QsTUFBTUMsUUFBUSxHQUFHSix3REFBVyxFQUE1QixDQUQ2RCxDQUU3RDs7RUFDQSxNQUFNSyxXQUFXLEdBQUdOLDZDQUFNLENBQUNJLGFBQUQsQ0FBMUI7RUFDQUUsV0FBVyxDQUFDQyxPQUFaLEdBQXNCSCxhQUF0QjtFQUNBTCxnREFBUyxDQUFDLE1BQU07SUFDZCxPQUFPLE1BQU07TUFDWE0sUUFBUSxDQUFDSCwrREFBYSxDQUFDO1FBQUVFLGFBQWEsRUFBRUUsV0FBVyxDQUFDQztNQUE3QixDQUFELENBQWQsQ0FBUjtJQUNELENBRkQ7RUFHRCxDQUpRLEVBSU4sQ0FBQ0YsUUFBRCxDQUpNLENBQVQ7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFNQSxNQUFNbUIsa0JBQStDLEdBQUcsQ0FBQztFQUFFQztBQUFGLENBQUQsS0FBb0I7RUFDMUV0QixxRUFBVSxDQUFFdUIsS0FBRCxJQUFXQSxLQUFLLENBQUNDLGVBQU4sQ0FBc0JDLFFBQXRCLENBQStCQyxZQUEzQyxDQUFWO0VBQ0EsTUFBTTtJQUFFQyxPQUFGO0lBQVdDLE1BQVg7SUFBbUJDLEtBQW5CO0lBQTBCQztFQUExQixJQUF5Q2QsNkZBQTBCLENBQUVPLEtBQUQsSUFBV0EsS0FBSyxDQUFDRSxRQUFOLENBQWVDLFlBQTNCLENBQXpFO0VBQ0EsTUFBTXhCLFFBQVEsR0FBR0osd0RBQVcsRUFBNUI7RUFDQSxNQUFNO0lBQUVpQztFQUFGLElBQWlCaEIsMkVBQWlCLENBQUNLLDJFQUFBLENBQXNDRSxVQUF0QyxDQUFELEVBQW9ETSxNQUFwRCxhQUFvREEs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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMENBQTBDLGdCQUFnQjtBQUMxRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDLGdCQUFnQjtBQUMxRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUEsUUFBUTtBQUNSO0FBQ0E7O0FBRUEsZUFBZSxlQUFlO0FBQzlCOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLElBQUkseUJBQXlCO0FBQzdCLHNCQUFzQixLQUFLO0FBQzNCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBLDZFQUE2RTtBQUM3RSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUiw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBLFFBQVE7QUFDUiw2REFBNkQsc0JBQXNCO0FBQ25GOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLG9FQUFvRTs7QUFFcEUsVUFBVTtBQUNWO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUEsUUFBUTtBQUNSLCtEQUErRDs7QUFFL0QsUUFBUTtBQUNSO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKOztBQUVBLElBQUk7QUFDSjs7QUFFQSxJQUFJO0FBQ0o7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBLG1FQUFtRSwwQkFBMEI7QUFDN0Y7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELDBCQUEwQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDLEtBQUs7QUFDM0Msc0NBQXNDO0FBQ3RDLHNDQUFzQyxLQUFLOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdURBQXVELGdCQUFnQjtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE1BQU07QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxnQkFBZ0I7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGdCQUFnQjtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRCxnQkFBZ0I7O0FBRWpFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsZ0JBQWdCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsR0FBRztBQUNoQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscURBQXFELGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQSxnREFBZ0QsZ0JBQWdCO0FBQ2hFO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsdURBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDO0FBQ3lJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9ob29rcy91c2VDbGVhbnVwLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvUnVsZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9hcGkvcHJldmlldy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9BbGVydFJ1bGVGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQW5ub3RhdGlvbktleUlucHV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQW5ub3RhdGlvbnNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0Nsb3VkRXZhbHVhdGlvbkJlaGF2aW9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQ2xvdWRSdWxlc1NvdXJjZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0NvbmRpdGlvbkZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvRGV0YWlsc1N0ZXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9FeHByZXNzaW9uRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvR3JhZmFuYUFsZXJ0U3RhdGVQaWNrZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9HcmFmYW5hQ29uZGl0aW9uRXZhbFdhcm5pbmcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9HcmFmYW5hRXZhbHVhdGlvbkJlaGF2aW9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvR3JvdXBBbmROYW1lc3BhY2VGaWVsZHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9MYWJlbHNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL05vdGlmaWNhdGlvbnNTdGVwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUHJldmlld1J1bGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9QcmV2aWV3UnVsZVJlc3VsdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL1F1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUXVlcnlSb3dzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUXVlcnlXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUnVsZUVkaXRvclNlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9SdWxlRm9sZGVyUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUnVsZUluc3BlY3Rvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL1NlbGVjdFdJdGhBZGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9WaXpXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcXVlcnktYW5kLWFsZXJ0LWNvbmRpdGlvbi9BbGVydFR5cGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9xdWVyeS1hbmQtYWxlcnQtY29uZGl0aW9uL1F1ZXJ5LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcXVlcnktYW5kLWFsZXJ0LWNvbmRpdGlvbi9RdWVyeUFuZEFsZXJ0Q29uZGl0aW9uU3RlcC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL3J1bGUtdHlwZXMvRGlzYWJsZWRUb29sdGlwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcnVsZS10eXBlcy9HcmFmYW5hTWFuYWdlZEFsZXJ0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcnVsZS10eXBlcy9NaW1pck9yTG9raUFsZXJ0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcnVsZS10eXBlcy9NaW1pck9yTG9raVJlY29yZGluZ1J1bGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9ydWxlLXR5cGVzL1J1bGVUeXBlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcnVsZS10eXBlcy9SdWxlVHlwZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydFF1ZXJpZXNTdGF0dXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VGb2xkZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VJc1J1bGVFZGl0YWJsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZVJ1bGVTb3VyY2VzV2l0aFJ1bGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlVml6SGVpZ2h0LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvc3RhdGUvQWxlcnRpbmdRdWVyeVJ1bm5lci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3R5cGVzL3ByZXZpZXcudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9hY2Nlc3NDb250cm9sSG9va3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy90aW1lUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvZ3VhcmRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9qcy15YW1sLW5wbS00LjEuMC0zNjA2ZjMyMzEyLWM3ODMwZGZkNDUuemlwL25vZGVfbW9kdWxlcy9qcy15YW1sL2Rpc3QvanMteWFtbC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiwgU3RhdGVTZWxlY3RvciB9IGZyb20gJy4uL2FjdGlvbnMvY2xlYW5VcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDbGVhbnVwPFQ+KHN0YXRlU2VsZWN0b3I6IFN0YXRlU2VsZWN0b3I8VD4pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAvL2JpdCBvZiBhIGhhY2sgdG8gdW5idXJkZW4gdXNlciBmcm9tIGhhdmluZyB0byB3cmFwIHN0YXRlU2VsY2V0b3IgaW4gYSB1c2VDYWxsYmFjay4gT3RoZXJ3aXNlIGNsZWFudXAgd291bGQgaGFwcGVuIG9uIGV2ZXJ5IHJlbmRlclxuICBjb25zdCBzZWxlY3RvclJlZiA9IHVzZVJlZihzdGF0ZVNlbGVjdG9yKTtcbiAgc2VsZWN0b3JSZWYuY3VycmVudCA9IHN0YXRlU2VsZWN0b3I7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yOiBzZWxlY3RvclJlZi5jdXJyZW50IH0pKTtcbiAgICB9O1xuICB9LCBbZGlzcGF0Y2hdKTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgTGlua0J1dHRvbiwgTG9hZGluZ1BsYWNlaG9sZGVyLCB1c2VTdHlsZXMyLCB3aXRoRXJyb3JCb3VuZGFyeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IHVzZUNsZWFudXAgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VDbGVhbnVwJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBSdWxlSWRlbnRpZmllciB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgQWxlcnRSdWxlRm9ybSB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlLWVkaXRvci9BbGVydFJ1bGVGb3JtJztcbmltcG9ydCB7IHVzZUlzUnVsZUVkaXRhYmxlIH0gZnJvbSAnLi9ob29rcy91c2VJc1J1bGVFZGl0YWJsZSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZmV0Y2hBbGxQcm9tQnVpbGRJbmZvQWN0aW9uLCBmZXRjaEVkaXRhYmxlUnVsZUFjdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VSdWxlc0FjY2VzcyB9IGZyb20gJy4vdXRpbHMvYWNjZXNzQ29udHJvbEhvb2tzJztcbmltcG9ydCAqIGFzIHJ1bGVJZCBmcm9tICcuL3V0aWxzL3J1bGUtaWQnO1xuXG5pbnRlcmZhY2UgRXhpc3RpbmdSdWxlRWRpdG9yUHJvcHMge1xuICBpZGVudGlmaWVyOiBSdWxlSWRlbnRpZmllcjtcbn1cblxuY29uc3QgRXhpc3RpbmdSdWxlRWRpdG9yOiBGQzxFeGlzdGluZ1J1bGVFZGl0b3JQcm9wcz4gPSAoeyBpZGVudGlmaWVyIH0pID0+IHtcbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5ydWxlRm9ybS5leGlzdGluZ1J1bGUpO1xuICBjb25zdCB7IGxvYWRpbmcsIHJlc3VsdCwgZXJyb3IsIGRpc3BhdGNoZWQgfSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZUZvcm0uZXhpc3RpbmdSdWxlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGlzRWRpdGFibGUgfSA9IHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVJZC5ydWxlSWRlbnRpZmllclRvUnVsZVNvdXJjZU5hbWUoaWRlbnRpZmllciksIHJlc3VsdD8ucnVsZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpc3BhdGNoZWQpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoRWRpdGFibGVSdWxlQWN0aW9uKGlkZW50aWZpZXIpKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaGVkLCBkaXNwYXRjaCwgaWRlbnRpZmllcl0pO1xuXG4gIGlmIChsb2FkaW5nIHx8IGlzRWRpdGFibGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBydWxlLi4uXCIgLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICApO1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiIHRpdGxlPVwiRmFpbGVkIHRvIGxvYWQgcnVsZVwiPlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICk7XG4gIH1cblxuICBpZiAoIXJlc3VsdCkge1xuICAgIHJldHVybiA8QWxlcnRXYXJuaW5nIHRpdGxlPVwiUnVsZSBub3QgZm91bmRcIj5Tb3JyeSEgVGhpcyBydWxlIGRvZXMgbm90IGV4aXN0LjwvQWxlcnRXYXJuaW5nPjtcbiAgfVxuXG4gIGlmIChpc0VkaXRhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVybiA8QWxlcnRXYXJuaW5nIHRpdGxlPVwiQ2Fubm90IGVkaXQgcnVsZVwiPlNvcnJ5ISBZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBlZGl0IHRoaXMgcnVsZS48L0FsZXJ0V2FybmluZz47XG4gIH1cblxuICByZXR1cm4gPEFsZXJ0UnVsZUZvcm0gZXhpc3Rpbmc9e3Jlc3VsdH0gLz47XG59O1xuXG50eXBlIFJ1bGVFZGl0b3JQcm9wcyA9IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgaWQ/OiBzdHJpbmcgfT47XG5cbmNvbnN0IFJ1bGVFZGl0b3I6IEZDPFJ1bGVFZGl0b3JQcm9wcz4gPSAoeyBtYXRjaCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBpZCB9ID0gbWF0Y2gucGFyYW1zO1xuICBjb25zdCBpZGVudGlmaWVyID0gcnVsZUlkLnRyeVBhcnNlKGlkLCB0cnVlKTtcblxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChmZXRjaEFsbFByb21CdWlsZEluZm9BY3Rpb24oKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IHsgY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzLCBjYW5DcmVhdGVDbG91ZFJ1bGVzLCBjYW5FZGl0UnVsZXMgfSA9IHVzZVJ1bGVzQWNjZXNzKCk7XG5cbiAgaWYgKCFpZGVudGlmaWVyICYmICFjYW5DcmVhdGVHcmFmYW5hUnVsZXMgJiYgIWNhbkNyZWF0ZUNsb3VkUnVsZXMpIHtcbiAgICByZXR1cm4gPEFsZXJ0V2FybmluZyB0aXRsZT1cIkNhbm5vdCBjcmVhdGUgcnVsZXNcIj5Tb3JyeSEgWW91IGFyZSBub3QgYWxsb3dlZCB0byBjcmVhdGUgcnVsZXMuPC9BbGVydFdhcm5pbmc+O1xuICB9XG5cbiAgaWYgKGlkZW50aWZpZXIgJiYgIWNhbkVkaXRSdWxlcyhpZGVudGlmaWVyLnJ1bGVTb3VyY2VOYW1lKSkge1xuICAgIHJldHVybiA8QWxlcnRXYXJuaW5nIHRpdGxlPVwiQ2Fubm90IGVkaXQgcnVsZXNcIj5Tb3JyeSEgWW91IGFyZSBub3QgYWxsb3dlZCB0byBlZGl0IHJ1bGVzLjwvQWxlcnRXYXJuaW5nPjtcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nLi4uXCIgLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICApO1xuICB9XG5cbiAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gPEV4aXN0aW5nUnVsZUVkaXRvciBrZXk9e2lkfSBpZGVudGlmaWVyPXtpZGVudGlmaWVyfSAvPjtcbiAgfVxuXG4gIHJldHVybiA8QWxlcnRSdWxlRm9ybSAvPjtcbn07XG5cbmNvbnN0IEFsZXJ0V2FybmluZzogRkM8eyB0aXRsZTogc3RyaW5nIH0+ID0gKHsgdGl0bGUsIGNoaWxkcmVuIH0pID0+IChcbiAgPEFsZXJ0IGNsYXNzTmFtZT17dXNlU3R5bGVzMih3YXJuaW5nU3R5bGVzKS53YXJuaW5nfSBzZXZlcml0eT1cIndhcm5pbmdcIiB0aXRsZT17dGl0bGV9PlxuICAgIDxwPntjaGlsZHJlbn08L3A+XG4gICAgPExpbmtCdXR0b24gaHJlZj1cImFsZXJ0aW5nL2xpc3RcIj5UbyBydWxlIGxpc3Q8L0xpbmtCdXR0b24+XG4gIDwvQWxlcnQ+XG4pO1xuXG5jb25zdCB3YXJuaW5nU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3YXJuaW5nOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICBgLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcnJvckJvdW5kYXJ5KFJ1bGVFZGl0b3IsIHsgc3R5bGU6ICdwYWdlJyB9KTtcbiIsImltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBkYXRhRnJhbWVGcm9tSlNPTixcbiAgRGF0YUZyYW1lSlNPTixcbiAgZ2V0RGVmYXVsdFRpbWVSYW5nZSxcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIHdpdGhMb2FkaW5nSW5kaWNhdG9yLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYsIHRvRGF0YVF1ZXJ5RXJyb3IgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHtcbiAgQ2xvdWRQcmV2aWV3UnVsZVJlcXVlc3QsXG4gIEdyYWZhbmFQcmV2aWV3UnVsZVJlcXVlc3QsXG4gIGlzQ2xvdWRQcmV2aWV3UmVxdWVzdCxcbiAgaXNHcmFmYW5hUHJldmlld1JlcXVlc3QsXG4gIFByZXZpZXdSdWxlUmVxdWVzdCxcbiAgUHJldmlld1J1bGVSZXNwb25zZSxcbn0gZnJvbSAnLi4vdHlwZXMvcHJldmlldyc7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUgfSBmcm9tICcuLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldmlld0FsZXJ0UnVsZShyZXF1ZXN0OiBQcmV2aWV3UnVsZVJlcXVlc3QpOiBPYnNlcnZhYmxlPFByZXZpZXdSdWxlUmVzcG9uc2U+IHtcbiAgaWYgKGlzQ2xvdWRQcmV2aWV3UmVxdWVzdChyZXF1ZXN0KSkge1xuICAgIHJldHVybiBwcmV2aWV3Q2xvdWRBbGVydFJ1bGUocmVxdWVzdCk7XG4gIH1cblxuICBpZiAoaXNHcmFmYW5hUHJldmlld1JlcXVlc3QocmVxdWVzdCkpIHtcbiAgICByZXR1cm4gcHJldmlld0dyYWZhbmFBbGVydFJ1bGUocmVxdWVzdCk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIHByZXZpZXcgcnVsZSByZXF1ZXN0Jyk7XG59XG5cbnR5cGUgR3JhZmFuYVByZXZpZXdSdWxlUmVzcG9uc2UgPSB7XG4gIGluc3RhbmNlczogRGF0YUZyYW1lSlNPTltdO1xufTtcblxuZnVuY3Rpb24gcHJldmlld0dyYWZhbmFBbGVydFJ1bGUocmVxdWVzdDogR3JhZmFuYVByZXZpZXdSdWxlUmVxdWVzdCk6IE9ic2VydmFibGU8UHJldmlld1J1bGVSZXNwb25zZT4ge1xuICBjb25zdCB0eXBlID0gUnVsZUZvcm1UeXBlLmdyYWZhbmE7XG5cbiAgcmV0dXJuIHdpdGhMb2FkaW5nSW5kaWNhdG9yKHtcbiAgICB3aGlsZUxvYWRpbmc6IGNyZWF0ZVJlc3BvbnNlKHR5cGUpLFxuICAgIHNvdXJjZTogZ2V0QmFja2VuZFNydigpXG4gICAgICAuZmV0Y2g8R3JhZmFuYVByZXZpZXdSdWxlUmVzcG9uc2U+KHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVybDogYC9hcGkvdjEvcnVsZS90ZXN0L2dyYWZhbmFgLFxuICAgICAgICBkYXRhOiByZXF1ZXN0LFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZVJlc3BvbnNlKHR5cGUsIHtcbiAgICAgICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgICAgICAgIHNlcmllczogZGF0YS5pbnN0YW5jZXMubWFwKGRhdGFGcmFtZUZyb21KU09OKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICAgIGNyZWF0ZVJlc3BvbnNlKHR5cGUsIHtcbiAgICAgICAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5FcnJvcixcbiAgICAgICAgICAgICAgZXJyb3I6IHRvRGF0YVF1ZXJ5RXJyb3IoZXJyb3IpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgc2hhcmUoKVxuICAgICAgKSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlc3BvbnNlKHJ1bGVUeXBlOiBSdWxlRm9ybVR5cGUsIGRhdGE6IFBhcnRpYWw8UGFuZWxEYXRhPiA9IHt9KTogUHJldmlld1J1bGVSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgcnVsZVR5cGUsXG4gICAgZGF0YToge1xuICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Mb2FkaW5nLFxuICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIHRpbWVSYW5nZTogZ2V0RGVmYXVsdFRpbWVSYW5nZSgpLFxuICAgICAgLi4uZGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBwcmV2aWV3Q2xvdWRBbGVydFJ1bGUocmVxdWVzdDogQ2xvdWRQcmV2aWV3UnVsZVJlcXVlc3QpOiBPYnNlcnZhYmxlPFByZXZpZXdSdWxlUmVzcG9uc2U+IHtcbiAgdGhyb3cgbmV3IEVycm9yKCdwcmV2aWV3IGZvciBjbG91ZCBhbGVydGluZyBydWxlcyBpcyBub3QgaW1wbGVtZW50ZWQnKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUmFkaW9CdXR0b25Hcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU1RBVCwgVEFCTEUsIFRJTUVTRVJJRVMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgdHlwZSBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMgPSAndGltZXNlcmllcycgfCAndGFibGUnIHwgJ3N0YXQnO1xuXG50eXBlIFByb3BzID0ge1xuICB2YWx1ZTogU3VwcG9ydGVkUGFuZWxQbHVnaW5zO1xuICBvbkNoYW5nZTogKHZhbHVlOiBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMpID0+IHZvaWQ7XG4gIHNpemU/OiAnc20nIHwgJ21kJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQYW5lbFBsdWdpbnNCdXR0b25Hcm91cChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgc2l6ZSA9ICdtZCcgfSA9IHByb3BzO1xuICBjb25zdCBwYW5lbHMgPSB1c2VNZW1vKCgpID0+IGdldFN1cHBvcnRlZFBhbmVscygpLCBbXSk7XG5cbiAgcmV0dXJuIDxSYWRpb0J1dHRvbkdyb3VwIG9wdGlvbnM9e3BhbmVsc30gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHNpemU9e3NpemV9IC8+O1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0ZWRQYW5lbHMoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFN1cHBvcnRlZFBhbmVsUGx1Z2lucz4+IHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY29uZmlnLnBhbmVscykucmVkdWNlKChwYW5lbHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxTdXBwb3J0ZWRQYW5lbFBsdWdpbnM+PiwgcGFuZWwpID0+IHtcbiAgICBpZiAoaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbihwYW5lbC5pZCkpIHtcbiAgICAgIHBhbmVscy5wdXNoKHtcbiAgICAgICAgdmFsdWU6IHBhbmVsLmlkLFxuICAgICAgICBsYWJlbDogcGFuZWwubmFtZSxcbiAgICAgICAgaW1nVXJsOiBwYW5lbC5pbmZvLmxvZ29zLnNtYWxsLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYW5lbHM7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbihpZDogc3RyaW5nKTogaWQgaXMgU3VwcG9ydGVkUGFuZWxQbHVnaW5zIHtcbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgVElNRVNFUklFUzpcbiAgICBjYXNlIFRBQkxFOlxuICAgIGNhc2UgU1RBVDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybVByb3ZpZGVyLCB1c2VGb3JtLCBVc2VGb3JtV2F0Y2ggfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29uZmlybU1vZGFsLCBDdXN0b21TY3JvbGxiYXIsIFBhZ2VUb29sYmFyLCBTcGlubmVyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlQXBwTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgdXNlQ2xlYW51cCB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgeyBSdWxlV2l0aExvY2F0aW9uIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGRlbGV0ZVJ1bGVBY3Rpb24sIHNhdmVSdWxlRm9ybUFjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgUnVsZUZvcm1UeXBlLCBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi8uLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgeyBnZXREZWZhdWx0Rm9ybVZhbHVlcywgZ2V0RGVmYXVsdFF1ZXJpZXMsIHJ1bGVyUnVsZVRvRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGUtZm9ybSc7XG5pbXBvcnQgKiBhcyBydWxlSWQgZnJvbSAnLi4vLi4vdXRpbHMvcnVsZS1pZCc7XG5cbmltcG9ydCB7IENsb3VkRXZhbHVhdGlvbkJlaGF2aW9yIH0gZnJvbSAnLi9DbG91ZEV2YWx1YXRpb25CZWhhdmlvcic7XG5pbXBvcnQgeyBEZXRhaWxzU3RlcCB9IGZyb20gJy4vRGV0YWlsc1N0ZXAnO1xuaW1wb3J0IHsgR3JhZmFuYUV2YWx1YXRpb25CZWhhdmlvciB9IGZyb20gJy4vR3JhZmFuYUV2YWx1YXRpb25CZWhhdmlvcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU3RlcCB9IGZyb20gJy4vTm90aWZpY2F0aW9uc1N0ZXAnO1xuaW1wb3J0IHsgUnVsZUluc3BlY3RvciB9IGZyb20gJy4vUnVsZUluc3BlY3Rvcic7XG5pbXBvcnQgeyBRdWVyeUFuZEFsZXJ0Q29uZGl0aW9uU3RlcCB9IGZyb20gJy4vcXVlcnktYW5kLWFsZXJ0LWNvbmRpdGlvbi9RdWVyeUFuZEFsZXJ0Q29uZGl0aW9uU3RlcCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGV4aXN0aW5nPzogUnVsZVdpdGhMb2NhdGlvbjtcbn07XG5cbmV4cG9ydCBjb25zdCBBbGVydFJ1bGVGb3JtOiBGQzxQcm9wcz4gPSAoeyBleGlzdGluZyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBub3RpZnlBcHAgPSB1c2VBcHBOb3RpZmljYXRpb24oKTtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IFtzaG93RWRpdFlhbWwsIHNldFNob3dFZGl0WWFtbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcmV0dXJuVG86IHN0cmluZyA9IChxdWVyeVBhcmFtc1sncmV0dXJuVG8nXSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcvYWxlcnRpbmcvbGlzdCc7XG4gIGNvbnN0IFtzaG93RGVsZXRlTW9kYWwsIHNldFNob3dEZWxldGVNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlczogUnVsZUZvcm1WYWx1ZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIHJldHVybiBydWxlclJ1bGVUb0Zvcm1WYWx1ZXMoZXhpc3RpbmcpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZ2V0RGVmYXVsdEZvcm1WYWx1ZXMoKSxcbiAgICAgIHF1ZXJpZXM6IGdldERlZmF1bHRRdWVyaWVzKCksXG4gICAgICAuLi4ocXVlcnlQYXJhbXNbJ2RlZmF1bHRzJ10gPyBKU09OLnBhcnNlKHF1ZXJ5UGFyYW1zWydkZWZhdWx0cyddIGFzIHN0cmluZykgOiB7fSksXG4gICAgICB0eXBlOiBSdWxlRm9ybVR5cGUuZ3JhZmFuYSxcbiAgICB9O1xuICB9LCBbZXhpc3RpbmcsIHF1ZXJ5UGFyYW1zXSk7XG5cbiAgY29uc3QgZm9ybUFQSSA9IHVzZUZvcm08UnVsZUZvcm1WYWx1ZXM+KHtcbiAgICBtb2RlOiAnb25TdWJtaXQnLFxuICAgIGRlZmF1bHRWYWx1ZXMsXG4gICAgc2hvdWxkRm9jdXNFcnJvcjogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHdhdGNoIH0gPSBmb3JtQVBJO1xuXG4gIGNvbnN0IHR5cGUgPSB3YXRjaCgndHlwZScpO1xuICBjb25zdCBkYXRhU291cmNlTmFtZSA9IHdhdGNoKCdkYXRhU291cmNlTmFtZScpO1xuXG4gIGNvbnN0IHNob3dTdGVwMiA9IEJvb2xlYW4odHlwZSAmJiAodHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmEgfHwgISFkYXRhU291cmNlTmFtZSkpO1xuXG4gIGNvbnN0IHN1Ym1pdFN0YXRlID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlRm9ybS5zYXZlUnVsZSkgfHwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICB1c2VDbGVhbnVwKChzdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLnJ1bGVGb3JtLnNhdmVSdWxlKTtcblxuICBjb25zdCBzdWJtaXQgPSAodmFsdWVzOiBSdWxlRm9ybVZhbHVlcywgZXhpdE9uU2F2ZTogYm9vbGVhbikgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgc2F2ZVJ1bGVGb3JtQWN0aW9uKHtcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgYW5ub3RhdGlvbnM6XG4gICAgICAgICAgICB2YWx1ZXMuYW5ub3RhdGlvbnNcbiAgICAgICAgICAgICAgPy5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiAoeyBrZXk6IGtleS50cmltKCksIHZhbHVlOiB2YWx1ZS50cmltKCkgfSkpXG4gICAgICAgICAgICAgIC5maWx0ZXIoKHsga2V5LCB2YWx1ZSB9KSA9PiAhIWtleSAmJiAhIXZhbHVlKSA/PyBbXSxcbiAgICAgICAgICBsYWJlbHM6XG4gICAgICAgICAgICB2YWx1ZXMubGFiZWxzXG4gICAgICAgICAgICAgID8ubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHsga2V5OiBrZXkudHJpbSgpLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0pKVxuICAgICAgICAgICAgICAuZmlsdGVyKCh7IGtleSB9KSA9PiAhIWtleSkgPz8gW10sXG4gICAgICAgIH0sXG4gICAgICAgIGV4aXN0aW5nLFxuICAgICAgICByZWRpcmVjdE9uU2F2ZTogZXhpdE9uU2F2ZSA/IHJldHVyblRvIDogdW5kZWZpbmVkLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVJ1bGUgPSAoKSA9PiB7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gcnVsZUlkLmZyb21SdWxlclJ1bGUoXG4gICAgICAgIGV4aXN0aW5nLnJ1bGVTb3VyY2VOYW1lLFxuICAgICAgICBleGlzdGluZy5uYW1lc3BhY2UsXG4gICAgICAgIGV4aXN0aW5nLmdyb3VwLm5hbWUsXG4gICAgICAgIGV4aXN0aW5nLnJ1bGVcbiAgICAgICk7XG5cbiAgICAgIGRpc3BhdGNoKGRlbGV0ZVJ1bGVBY3Rpb24oaWRlbnRpZmllciwgeyBuYXZpZ2F0ZVRvOiAnL2FsZXJ0aW5nL2xpc3QnIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25JbnZhbGlkID0gKCkgPT4ge1xuICAgIG5vdGlmeUFwcC5lcnJvcignVGhlcmUgYXJlIGVycm9ycyBpbiB0aGUgZm9ybS4gUGxlYXNlIGNvcnJlY3QgdGhlbSBhbmQgdHJ5IGFnYWluIScpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Qcm92aWRlciB7Li4uZm9ybUFQSX0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgIDxQYWdlVG9vbGJhciB0aXRsZT17YCR7ZXhpc3RpbmcgPyAnRWRpdCcgOiAnQ3JlYXRlJ30gYWxlcnQgcnVsZWB9IHBhZ2VJY29uPVwiYmVsbFwiPlxuICAgICAgICAgIDxMaW5rIHRvPXtyZXR1cm5Ub30+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBkaXNhYmxlZD17c3VibWl0U3RhdGUubG9hZGluZ30gdHlwZT1cImJ1dHRvblwiIGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHtleGlzdGluZyA/IChcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZWxldGVNb2RhbCh0cnVlKX0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2lzQ29ydGV4TG9raU9yUmVjb3JkaW5nUnVsZSh3YXRjaCkgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dFZGl0WWFtbCh0cnVlKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdFN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVkaXQgeWFtbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdCgodmFsdWVzKSA9PiBzdWJtaXQodmFsdWVzLCBmYWxzZSksIG9uSW52YWxpZCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0U3RhdGUubG9hZGluZ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3VibWl0U3RhdGUubG9hZGluZyAmJiA8U3Bpbm5lciBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TcGlubmVyfSBpbmxpbmU9e3RydWV9IC8+fVxuICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0KCh2YWx1ZXMpID0+IHN1Ym1pdCh2YWx1ZXMsIHRydWUpLCBvbkludmFsaWQpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdFN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N1Ym1pdFN0YXRlLmxvYWRpbmcgJiYgPFNwaW5uZXIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uU3Bpbm5lcn0gaW5saW5lPXt0cnVlfSAvPn1cbiAgICAgICAgICAgIFNhdmUgYW5kIGV4aXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9QYWdlVG9vbGJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50T3V0ZXJ9PlxuICAgICAgICAgIDxDdXN0b21TY3JvbGxiYXIgYXV0b0hlaWdodE1pbj1cIjEwMCVcIiBoaWRlSG9yaXpvbnRhbFRyYWNrPXt0cnVlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudElubmVyfT5cbiAgICAgICAgICAgICAgPFF1ZXJ5QW5kQWxlcnRDb25kaXRpb25TdGVwIGVkaXRpbmdFeGlzdGluZ1J1bGU9eyEhZXhpc3Rpbmd9IC8+XG4gICAgICAgICAgICAgIHtzaG93U3RlcDIgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmEgPyA8R3JhZmFuYUV2YWx1YXRpb25CZWhhdmlvciAvPiA6IDxDbG91ZEV2YWx1YXRpb25CZWhhdmlvciAvPn1cbiAgICAgICAgICAgICAgICAgIDxEZXRhaWxzU3RlcCBpbml0aWFsRm9sZGVyPXtkZWZhdWx0VmFsdWVzLmZvbGRlcn0gLz5cbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zU3RlcCAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DdXN0b21TY3JvbGxiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAge3Nob3dEZWxldGVNb2RhbCA/IChcbiAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgIGlzT3Blbj17dHJ1ZX1cbiAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBydWxlXCJcbiAgICAgICAgICBib2R5PVwiRGVsZXRpbmcgdGhpcyBydWxlIHdpbGwgcGVybWFuZW50bHkgcmVtb3ZlIGl0LiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcnVsZT9cIlxuICAgICAgICAgIGNvbmZpcm1UZXh0PVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgb25Db25maXJtPXtkZWxldGVSdWxlfVxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0U2hvd0RlbGV0ZU1vZGFsKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgICAge3Nob3dFZGl0WWFtbCA/IDxSdWxlSW5zcGVjdG9yIG9uQ2xvc2U9eygpID0+IHNldFNob3dFZGl0WWFtbChmYWxzZSl9IC8+IDogbnVsbH1cbiAgICA8L0Zvcm1Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IGlzQ29ydGV4TG9raU9yUmVjb3JkaW5nUnVsZSA9ICh3YXRjaDogVXNlRm9ybVdhdGNoPFJ1bGVGb3JtVmFsdWVzPikgPT4ge1xuICBjb25zdCBbcnVsZVR5cGUsIGRhdGFTb3VyY2VOYW1lXSA9IHdhdGNoKFsndHlwZScsICdkYXRhU291cmNlTmFtZSddKTtcblxuICByZXR1cm4gKHJ1bGVUeXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZyB8fCBydWxlVHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nKSAmJiBkYXRhU291cmNlTmFtZSAhPT0gJyc7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBidXR0b25TcGlubmVyOiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBmb3JtOiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGAsXG4gICAgY29udGVudElubmVyOiBjc3NgXG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIGNvbnRlbnRPdXRlcjogY3NzYFxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5wcmltYXJ5fTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci53ZWFrfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMCwgMiwgMil9O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZsZXg6IDE7XG4gICAgYCxcbiAgICBmbGV4Um93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEFubm90YXRpb24sIGFubm90YXRpb25MYWJlbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBTZWxlY3RXaXRoQWRkIH0gZnJvbSAnLi9TZWxlY3RXSXRoQWRkJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBleGlzdGluZ0tleXM6IHN0cmluZ1tdO1xuXG4gIHZhbHVlPzogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAnYXJpYS1sYWJlbCc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBbm5vdGF0aW9uS2V5SW5wdXQ6IEZDPFByb3BzPiA9ICh7IHZhbHVlLCBleGlzdGluZ0tleXMsICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgYW5ub3RhdGlvbk9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpOiBTZWxlY3RhYmxlVmFsdWVbXSA9PlxuICAgICAgT2JqZWN0LnZhbHVlcyhBbm5vdGF0aW9uKVxuICAgICAgICAuZmlsdGVyKChrZXkpID0+ICFleGlzdGluZ0tleXMuaW5jbHVkZXMoa2V5KSkgLy8gcmVtb3ZlIGtleXMgYWxyZWFkeSB0YWtlbiBpbiBvdGhlciBhbm5vdGF0aW9uc1xuICAgICAgICAubWFwKChrZXkpID0+ICh7IHZhbHVlOiBrZXksIGxhYmVsOiBhbm5vdGF0aW9uTGFiZWxzW2tleV0gfSkpLFxuICAgIFtleGlzdGluZ0tleXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0V2l0aEFkZFxuICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb3B0aW9ucz17YW5ub3RhdGlvbk9wdGlvbnN9XG4gICAgICBjdXN0b209eyEhdmFsdWUgJiYgIShPYmplY3QudmFsdWVzKEFubm90YXRpb24pIGFzIHN0cmluZ1tdKS5pbmNsdWRlcyh2YWx1ZSl9XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEZpZWxkLCBGaWVsZEFycmF5LCBJbnB1dCwgSW5wdXRDb250cm9sLCBMYWJlbCwgVGV4dEFyZWEsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbXBvcnQgeyBBbm5vdGF0aW9uS2V5SW5wdXQgfSBmcm9tICcuL0Fubm90YXRpb25LZXlJbnB1dCc7XG5cbmNvbnN0IEFubm90YXRpb25zRmllbGQ6IEZDID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3Qge1xuICAgIGNvbnRyb2wsXG4gICAgcmVnaXN0ZXIsXG4gICAgd2F0Y2gsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3QgYW5ub3RhdGlvbnMgPSB3YXRjaCgnYW5ub3RhdGlvbnMnKSBhcyBSdWxlRm9ybVZhbHVlc1snYW5ub3RhdGlvbnMnXTtcblxuICBjb25zdCBleGlzdGluZ0tleXMgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcik6IHN0cmluZ1tdID0+IGFubm90YXRpb25zLmZpbHRlcigoXywgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gaW5kZXgpLm1hcCgoeyBrZXkgfSkgPT4ga2V5KSxcbiAgICBbYW5ub3RhdGlvbnNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExhYmVsPlN1bW1hcnkgYW5kIGFubm90YXRpb25zPC9MYWJlbD5cbiAgICAgIDxGaWVsZEFycmF5IG5hbWU9eydhbm5vdGF0aW9ucyd9IGNvbnRyb2w9e2NvbnRyb2x9PlxuICAgICAgICB7KHsgZmllbGRzLCBhcHBlbmQsIHJlbW92ZSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleENvbHVtbn0+XG4gICAgICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1VybCA9IGFubm90YXRpb25zW2luZGV4XT8ua2V5Py50b0xvY2FsZUxvd2VyQ2FzZSgpLmVuZHNXaXRoKCd1cmwnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBWYWx1ZUlucHV0Q29tcG9uZW50ID0gaXNVcmwgPyBJbnB1dCA6IFRleHRBcmVhO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmllbGQuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5hbm5vdGF0aW9ucz8uW2luZGV4XT8ua2V5Py5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuYW5ub3RhdGlvbnM/LltpbmRleF0/LmtleT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YGFubm90YXRpb24ta2V5LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Bhbm5vdGF0aW9uc1ske2luZGV4fV0ua2V5YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFubm90YXRpb25LZXlJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgQW5ub3RhdGlvbiBkZXRhaWwgJHtpbmRleCArIDF9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0tleXM9e2V4aXN0aW5nS2V5cyhpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogeyB2YWx1ZTogISFhbm5vdGF0aW9uc1tpbmRleF0/LnZhbHVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9IH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuZmxleFJvd0l0ZW1NYXJnaW4sIHN0eWxlcy5maWVsZCl9XG4gICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuYW5ub3RhdGlvbnM/LltpbmRleF0/LnZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuYW5ub3RhdGlvbnM/LltpbmRleF0/LnZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFZhbHVlSW5wdXRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgYW5ub3RhdGlvbi12YWx1ZS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5hbm5vdGF0aW9uVmFsdWVJbnB1dCwgeyBbc3R5bGVzLnRleHRhcmVhXTogIWlzVXJsIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGBhbm5vdGF0aW9uc1ske2luZGV4fV0udmFsdWVgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpc1VybCA/ICdodHRwczovLycgOiBgVGV4dGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93SXRlbU1hcmdpbn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZGVsZXRlIGFubm90YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEFubm90YXRpb25zQnV0dG9ufVxuICAgICAgICAgICAgICAgIGljb249XCJwbHVzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgYXBwZW5kKHsga2V5OiAnJywgdmFsdWU6ICcnIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGQgaW5mb1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0ZpZWxkQXJyYXk+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgYW5ub3RhdGlvblZhbHVlSW5wdXQ6IGNzc2BcbiAgICB3aWR0aDogNDI2cHg7XG4gIGAsXG4gIHRleHRhcmVhOiBjc3NgXG4gICAgaGVpZ2h0OiA3NnB4O1xuICBgLFxuICBhZGRBbm5vdGF0aW9uc0J1dHRvbjogY3NzYFxuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNDhweDtcbiAgYCxcbiAgZmxleENvbHVtbjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYCxcbiAgZmllbGQ6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICBgLFxuICBmbGV4Um93OiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYCxcbiAgZmxleFJvd0l0ZW1NYXJnaW46IGNzc2BcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBbm5vdGF0aW9uc0ZpZWxkO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGaWVsZCwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0LCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSwgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuaW1wb3J0IHsgdGltZU9wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy90aW1lJztcblxuaW1wb3J0IHsgUHJldmlld1J1bGUgfSBmcm9tICcuL1ByZXZpZXdSdWxlJztcbmltcG9ydCB7IFJ1bGVFZGl0b3JTZWN0aW9uIH0gZnJvbSAnLi9SdWxlRWRpdG9yU2VjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBDbG91ZEV2YWx1YXRpb25CZWhhdmlvcjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgY29udHJvbCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcblxuICBjb25zdCB0eXBlID0gd2F0Y2goJ3R5cGUnKTtcblxuICAvLyBjbG91ZCByZWNvcmRpbmcgcnVsZXMgZG8gbm90IGhhdmUgYWxlcnQgY29uZGl0aW9uc1xuICBpZiAodHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSdWxlRWRpdG9yU2VjdGlvbiBzdGVwTm89ezJ9IHRpdGxlPVwiQWxlcnQgZXZhbHVhdGlvbiBiZWhhdmlvclwiPlxuICAgICAgPEZpZWxkIGxhYmVsPVwiRm9yXCIgZGVzY3JpcHRpb249XCJFeHByZXNzaW9uIGhhcyB0byBiZSB0cnVlIGZvciB0aGlzIGxvbmcgZm9yIHRoZSBhbGVydCB0byBiZSBmaXJlZC5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMuZm9yVGltZT8ubWVzc2FnZX0gZXJyb3I9e2Vycm9ycy5mb3JUaW1lPy5tZXNzYWdlfSBjbGFzc05hbWU9e3N0eWxlcy5pbmxpbmVGaWVsZH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdmb3JUaW1lJywgeyBwYXR0ZXJuOiB7IHZhbHVlOiAvXlxcZCskLywgbWVzc2FnZTogJ011c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLicgfSB9KX1cbiAgICAgICAgICAgICAgd2lkdGg9ezh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgbmFtZT1cImZvclRpbWVVbml0XCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGltZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWU/LnZhbHVlKX1cbiAgICAgICAgICAgICAgICB3aWR0aD17MTV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZVVuaXR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8UHJldmlld1J1bGUgLz5cbiAgICA8L1J1bGVFZGl0b3JTZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGlubGluZUZpZWxkOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYCxcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGAsXG4gIHRpbWVVbml0OiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgdXNlUnVsZXNTb3VyY2VzV2l0aFJ1bGVyIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlUnVsZVNvdXJjZXNXaXRoUnVsZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKGRzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykgPT4gdm9pZDtcbiAgdmFsdWU6IHN0cmluZyB8IG51bGw7XG4gIG9uQmx1cj86ICgpID0+IHZvaWQ7XG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDbG91ZFJ1bGVzU291cmNlUGlja2VyKHsgdmFsdWUsIC4uLnByb3BzIH06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBydWxlc1NvdXJjZXNXaXRoUnVsZXIgPSB1c2VSdWxlc1NvdXJjZXNXaXRoUnVsZXIoKTtcblxuICBjb25zdCBkYXRhU291cmNlRmlsdGVyID0gdXNlQ2FsbGJhY2soXG4gICAgKGRzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuICEhcnVsZXNTb3VyY2VzV2l0aFJ1bGVyLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGRzLmlkKTtcbiAgICB9LFxuICAgIFtydWxlc1NvdXJjZXNXaXRoUnVsZXJdXG4gICk7XG5cbiAgcmV0dXJuIDxEYXRhU291cmNlUGlja2VyIG5vRGVmYXVsdCBhbGVydGluZyBmaWx0ZXI9e2RhdGFTb3VyY2VGaWx0ZXJ9IGN1cnJlbnQ9e3ZhbHVlfSB7Li4ucHJvcHN9IC8+O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGxhc3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIENhcmQsIEZpZWxkLCBJbnB1dENvbnRyb2wsIFJhZGlvQnV0dG9uTGlzdCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEV4cHJlc3Npb25EYXRhc291cmNlVUlEIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL0V4cHJlc3Npb25EYXRhc291cmNlJztcblxuaW1wb3J0IHsgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBleGlzdGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBDb25kaXRpb25GaWVsZDogRkM8UHJvcHM+ID0gKHsgZXhpc3RpbmcgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB3YXRjaCxcbiAgICBzZXRWYWx1ZSxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcblxuICBjb25zdCBxdWVyaWVzID0gd2F0Y2goJ3F1ZXJpZXMnKTtcbiAgY29uc3QgY29uZGl0aW9uID0gd2F0Y2goJ2NvbmRpdGlvbicpO1xuXG4gIGNvbnN0IGV4cHJlc3Npb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXJpZXMuZmlsdGVyKChxdWVyeSkgPT4gcXVlcnkuZGF0YXNvdXJjZVVpZCA9PT0gRXhwcmVzc2lvbkRhdGFzb3VyY2VVSUQpO1xuICB9LCBbcXVlcmllc10pO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBxdWVyaWVzXG4gICAgICAgIC5maWx0ZXIoKHEpID0+ICEhcS5yZWZJZClcbiAgICAgICAgLm1hcDxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4oKHEpID0+ICh7XG4gICAgICAgICAgdmFsdWU6IHEucmVmSWQsXG4gICAgICAgICAgbGFiZWw6IGAke3EucmVmSWR9IC0gJHtleHByZXNzaW9ucy5pbmNsdWRlcyhxKSA/ICdleHByZXNzaW9uJyA6ICdxdWVyeSd9YCxcbiAgICAgICAgfSkpLFxuICAgIFtxdWVyaWVzLCBleHByZXNzaW9uc11cbiAgKTtcblxuICAvLyBhdXRvbWF0aWNhbGx5IHVzZSB0aGUgbGFzdCBleHByZXNzaW9uIHdoZW4gbmV3IGV4cHJlc3Npb25zIGhhdmUgYmVlbiBhZGRlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxhc3RFeHByZXNzaW9uID0gbGFzdChleHByZXNzaW9ucyk7XG4gICAgaWYgKGxhc3RFeHByZXNzaW9uICYmICFleGlzdGluZykge1xuICAgICAgc2V0VmFsdWUoJ2NvbmRpdGlvbicsIGxhc3RFeHByZXNzaW9uLnJlZklkLCB7IHNob3VsZFZhbGlkYXRlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSwgW2V4cHJlc3Npb25zLCBzZXRWYWx1ZSwgZXhpc3RpbmddKTtcblxuICAvLyByZXNldCBjb25kaXRpb24gaWYgb3B0aW9uIG5vIGxvbmdlciBleGlzdHMgb3IgaWYgaXQgaXMgdW5zZXQsIGJ1dCB0aGVyZSBhcmUgb3B0aW9ucyBhdmFpbGFibGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsYXN0RXhwcmVzc2lvbiA9IGxhc3QoZXhwcmVzc2lvbnMpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkV4aXN0cyA9IG9wdGlvbnMuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gY29uZGl0aW9uKTtcblxuICAgIGlmIChjb25kaXRpb24gJiYgIWNvbmRpdGlvbkV4aXN0cykge1xuICAgICAgc2V0VmFsdWUoJ2NvbmRpdGlvbicsIGxhc3RFeHByZXNzaW9uPy5yZWZJZCA/PyBudWxsKTtcbiAgICB9IGVsc2UgaWYgKCFjb25kaXRpb24gJiYgbGFzdEV4cHJlc3Npb24pIHtcbiAgICAgIHNldFZhbHVlKCdjb25kaXRpb24nLCBsYXN0RXhwcmVzc2lvbi5yZWZJZCwgeyBzaG91bGRWYWxpZGF0ZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0sIFtjb25kaXRpb24sIGV4cHJlc3Npb25zLCBvcHRpb25zLCBzZXRWYWx1ZV0pO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gb3B0aW9ucy5sZW5ndGggPyAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxDYXJkLkhlYWRpbmc+U2V0IGFsZXJ0IGNvbmRpdGlvbjwvQ2FyZC5IZWFkaW5nPlxuICAgICAgPENhcmQuTWV0YT5TZWxlY3Qgb25lIG9mIHlvdXIgcXVlcmllcyBvciBleHByZXNzaW9ucyBzZXQgYWJvdmUgdGhhdCBjb250YWlucyB5b3VyIGFsZXJ0IGNvbmRpdGlvbi48L0NhcmQuTWV0YT5cbiAgICAgIDxDYXJkLkFjdGlvbnM+XG4gICAgICAgIDxGaWVsZCBlcnJvcj17ZXJyb3JzLmNvbmRpdGlvbj8ubWVzc2FnZX0gaW52YWxpZD17ISFlcnJvcnMuY29uZGl0aW9uPy5tZXNzYWdlfT5cbiAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICBuYW1lPVwiY29uZGl0aW9uXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxSYWRpb0J1dHRvbkxpc3Qgb3B0aW9ucz17b3B0aW9uc30gb25DaGFuZ2U9e29uQ2hhbmdlfSB7Li4uZmllbGR9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCB0aGUgY29uZGl0aW9uIHRvIGFsZXJ0IG9uJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZD5cbiAgICAgIDwvQ2FyZC5BY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKSA6IChcbiAgICA8QWxlcnQgdGl0bGU9XCJObyBxdWVyaWVzIG9yIGV4cHJlc3Npb25zIGhhdmUgYmVlbiBjb25maWd1cmVkXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIENyZWF0ZSBhdCBsZWFzdCBvbmUgcXVlcnkgb3IgZXhwcmVzc2lvbiB0byBiZSBhbGVydGVkIG9uXG4gICAgPC9BbGVydD5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5zbX1weDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyLCBGaWVsZCwgSW5wdXQsIElucHV0Q29udHJvbCwgTGFiZWwsIFRvb2x0aXAsIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBGb2xkZXJQaWNrZXJGaWx0ZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1NlbGVjdC9Gb2xkZXJQaWNrZXInO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9zZWFyY2gvdHlwZXMnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtLCBSdWxlRm9ybVR5cGUsIFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuaW1wb3J0IEFubm90YXRpb25zRmllbGQgZnJvbSAnLi9Bbm5vdGF0aW9uc0ZpZWxkJztcbmltcG9ydCB7IEdyb3VwQW5kTmFtZXNwYWNlRmllbGRzIH0gZnJvbSAnLi9Hcm91cEFuZE5hbWVzcGFjZUZpZWxkcyc7XG5pbXBvcnQgeyBSdWxlRWRpdG9yU2VjdGlvbiB9IGZyb20gJy4vUnVsZUVkaXRvclNlY3Rpb24nO1xuaW1wb3J0IHsgUnVsZUZvbGRlclBpY2tlciwgRm9sZGVyIH0gZnJvbSAnLi9SdWxlRm9sZGVyUGlja2VyJztcbmltcG9ydCB7IGNoZWNrRm9yUGF0aFNlcGFyYXRvciB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IHJlY29yZGluZ1J1bGVOYW1lVmFsaWRhdGlvblBhdHRlcm4gPSB7XG4gIG1lc3NhZ2U6XG4gICAgJ1JlY29yZGluZyBydWxlIG5hbWUgbXVzdCBiZSB2YWxpZCBtZXRyaWMgbmFtZS4gSXQgbWF5IG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBhbmQgY29sb25zLiBJdCBtYXkgbm90IGNvbnRhaW4gd2hpdGVzcGFjZS4nLFxuICB2YWx1ZTogL15bYS16QS1aXzpdW2EtekEtWjAtOV86XSokLyxcbn07XG5cbmludGVyZmFjZSBEZXRhaWxzU3RlcFByb3BzIHtcbiAgaW5pdGlhbEZvbGRlcjogUnVsZUZvcm0gfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgRGV0YWlsc1N0ZXAgPSAoeyBpbml0aWFsRm9sZGVyIH06IERldGFpbHNTdGVwUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzICYgeyBsb2NhdGlvbj86IHN0cmluZyB9PigpO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBydWxlRm9ybVR5cGUgPSB3YXRjaCgndHlwZScpO1xuICBjb25zdCBkYXRhU291cmNlTmFtZSA9IHdhdGNoKCdkYXRhU291cmNlTmFtZScpO1xuICBjb25zdCB0eXBlID0gd2F0Y2goJ3R5cGUnKTtcblxuICBjb25zdCBmb2xkZXJGaWx0ZXIgPSB1c2VSdWxlRm9sZGVyRmlsdGVyKGluaXRpYWxGb2xkZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPFJ1bGVFZGl0b3JTZWN0aW9uXG4gICAgICBzdGVwTm89e3R5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZyA/IDIgOiAzfVxuICAgICAgdGl0bGU9e1xuICAgICAgICB0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcgPyAnQWRkIGRldGFpbHMgZm9yIHlvdXIgcmVjb3JkaW5nIHJ1bGUnIDogJ0FkZCBkZXRhaWxzIGZvciB5b3VyIGFsZXJ0J1xuICAgICAgfVxuICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICB0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmdcbiAgICAgICAgICA/ICdBZGQgbGFiZWxzIHRvIGhlbHAgeW91IGJldHRlciBtYW5hZ2UgeW91ciBydWxlcydcbiAgICAgICAgICA6ICdXcml0ZSBhIHN1bW1hcnkgYW5kIGFkZCBsYWJlbHMgdG8gaGVscCB5b3UgYmV0dGVyIG1hbmFnZSB5b3VyIGFsZXJ0cydcbiAgICAgIH1cbiAgICA+XG4gICAgICA8RmllbGRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0fVxuICAgICAgICBsYWJlbD1cIlJ1bGUgbmFtZVwiXG4gICAgICAgIGVycm9yPXtlcnJvcnM/Lm5hbWU/Lm1lc3NhZ2V9XG4gICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm5hbWU/Lm1lc3NhZ2V9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdNdXN0IGVudGVyIGFuIGFsZXJ0IG5hbWUnIH0sXG4gICAgICAgICAgICBwYXR0ZXJuOiBydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZyA/IHJlY29yZGluZ1J1bGVOYW1lVmFsaWRhdGlvblBhdHRlcm4gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgICBwYXRoU2VwYXJhdG9yOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdlIHVzZSB0aGUgYWxlcnQgcnVsZSBuYW1lIGFzIHRoZSBcImdyb3VwbmFtZVwiIGZvciBHcmFmYW5hIG1hbmFnZWQgYWxlcnRzLCBzbyB3ZSBjYW4ndCBhbGxvdyBwYXRoIHNlcGFyYXRvcnNcbiAgICAgICAgICAgICAgICBpZiAocnVsZUZvcm1UeXBlID09PSBSdWxlRm9ybVR5cGUuZ3JhZmFuYSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrRm9yUGF0aFNlcGFyYXRvcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cblxuICAgICAgeyhydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZyB8fCBydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nKSAmJlxuICAgICAgICBkYXRhU291cmNlTmFtZSAmJiA8R3JvdXBBbmROYW1lc3BhY2VGaWVsZHMgcnVsZXNTb3VyY2VOYW1lPXtkYXRhU291cmNlTmFtZX0gLz59XG5cbiAgICAgIHtydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5ncmFmYW5hICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoW3N0eWxlcy5mbGV4Um93LCBzdHlsZXMuYWxpZ25CYXNlbGluZV0pfT5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJmb2xkZXJcIiBkZXNjcmlwdGlvbj17J1NlbGVjdCBhIGZvbGRlciB0byBzdG9yZSB5b3VyIHJ1bGUuJ30+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGdhcD17MC41fT5cbiAgICAgICAgICAgICAgICAgIEZvbGRlclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggZm9sZGVyIGhhcyB1bmlxdWUgZm9sZGVyIHBlcm1pc3Npb24uIFdoZW4geW91IHN0b3JlIG11bHRpcGxlIHJ1bGVzIGluIGEgZm9sZGVyLCB0aGUgZm9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3MgcGVybWlzc2lvbnMgZ2V0IGFzc2lnbmVkIHRvIHRoZSBydWxlcy5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaW5mby1jaXJjbGVcIiBzaXplPVwieHNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXR9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmZvbGRlcj8ubWVzc2FnZX1cbiAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmZvbGRlcj8ubWVzc2FnZX1cbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZm9sZGVyLXBpY2tlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFJ1bGVGb2xkZXJQaWNrZXJcbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9XCJmb2xkZXJcIlxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgZW5hYmxlQ3JlYXRlTmV3PXtjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5Gb2xkZXJzQ3JlYXRlKX1cbiAgICAgICAgICAgICAgICAgIGVuYWJsZVJlc2V0PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgZmlsdGVyPXtmb2xkZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbmFtZT1cImZvbGRlclwiXG4gICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGEgZm9sZGVyJyB9LFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgICBwYXRoU2VwYXJhdG9yOiAoZm9sZGVyOiBGb2xkZXIpID0+IGNoZWNrRm9yUGF0aFNlcGFyYXRvcihmb2xkZXIudGl0bGUpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIkdyb3VwXCJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZ3JvdXAtcGlja2VyXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUnVsZXMgd2l0aGluIHRoZSBzYW1lIGdyb3VwIGFyZSBldmFsdWF0ZWQgYWZ0ZXIgdGhlIHNhbWUgdGltZSBpbnRlcnZhbC5cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0fVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5ncm91cD8ubWVzc2FnZX1cbiAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmdyb3VwPy5tZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cImdyb3VwXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdncm91cCcsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ011c3QgZW50ZXIgYSBncm91cCBuYW1lJyB9LFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3R5cGUgIT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZyAmJiA8QW5ub3RhdGlvbnNGaWVsZCAvPn1cbiAgICA8L1J1bGVFZGl0b3JTZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgdXNlUnVsZUZvbGRlckZpbHRlciA9IChleGlzdGluZ1J1bGVGb3JtOiBSdWxlRm9ybSB8IG51bGwpID0+IHtcbiAgY29uc3QgaXNTZWFyY2hIaXRBdmFpbGFibGUgPSB1c2VDYWxsYmFjayhcbiAgICAoaGl0OiBEYXNoYm9hcmRTZWFyY2hIaXQpID0+IHtcbiAgICAgIGNvbnN0IHJiYWNEaXNhYmxlZEZhbGxiYWNrID0gY29udGV4dFNydi5oYXNFZGl0UGVybWlzc2lvbkluRm9sZGVycztcblxuICAgICAgY29uc3QgY2FuQ3JlYXRlUnVsZUluRm9sZGVyID0gY29udGV4dFNydi5oYXNBY2Nlc3NJbk1ldGFkYXRhKFxuICAgICAgICBBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nUnVsZUNyZWF0ZSxcbiAgICAgICAgaGl0LFxuICAgICAgICByYmFjRGlzYWJsZWRGYWxsYmFja1xuICAgICAgKTtcblxuICAgICAgY29uc3QgY2FuVXBkYXRlSW5DdXJyZW50Rm9sZGVyID1cbiAgICAgICAgZXhpc3RpbmdSdWxlRm9ybSAmJlxuICAgICAgICBoaXQuZm9sZGVySWQgPT09IGV4aXN0aW5nUnVsZUZvcm0uaWQgJiZcbiAgICAgICAgY29udGV4dFNydi5oYXNBY2Nlc3NJbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWxlcnRpbmdSdWxlVXBkYXRlLCBoaXQsIHJiYWNEaXNhYmxlZEZhbGxiYWNrKTtcblxuICAgICAgcmV0dXJuIGNhbkNyZWF0ZVJ1bGVJbkZvbGRlciB8fCBjYW5VcGRhdGVJbkN1cnJlbnRGb2xkZXI7XG4gICAgfSxcbiAgICBbZXhpc3RpbmdSdWxlRm9ybV1cbiAgKTtcblxuICByZXR1cm4gdXNlQ2FsbGJhY2s8Rm9sZGVyUGlja2VyRmlsdGVyPihcbiAgICAoZm9sZGVySGl0cykgPT4gZm9sZGVySGl0cy5maWx0ZXIoaXNTZWFyY2hIaXRBdmFpbGFibGUpLFxuICAgIFtpc1NlYXJjaEhpdEF2YWlsYWJsZV1cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgYWxpZ25CYXNlbGluZTogY3NzYFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICBgLFxuICBmb3JtSW5wdXQ6IGNzc2BcbiAgICB3aWR0aDogMjc1cHg7XG5cbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgICB9XG4gIGAsXG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgQ29yZUFwcCwgRGF0YVF1ZXJ5IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBMb2tpUXVlcnkgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvdHlwZXMnO1xuaW1wb3J0IHsgUHJvbVF1ZXJ5IH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBFeHByZXNzaW9uRWRpdG9yUHJvcHMge1xuICB2YWx1ZT86IHN0cmluZztcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBkYXRhU291cmNlTmFtZTogc3RyaW5nOyAvLyB3aWxsIGJlIGEgcHJvbWV0aGV1cyBvciBsb2tpIGRhdGFzb3VyY2Vcbn1cblxuZXhwb3J0IGNvbnN0IEV4cHJlc3Npb25FZGl0b3I6IEZDPEV4cHJlc3Npb25FZGl0b3JQcm9wcz4gPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGRhdGFTb3VyY2VOYW1lIH0pID0+IHtcbiAgY29uc3QgeyBtYXBUb1ZhbHVlLCBtYXBUb1F1ZXJ5IH0gPSB1c2VRdWVyeU1hcHBlcnMoZGF0YVNvdXJjZU5hbWUpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKG1hcFRvUXVlcnkoeyByZWZJZDogJ0EnLCBoaWRlOiBmYWxzZSB9LCB2YWx1ZSkpO1xuICBjb25zdCB7XG4gICAgZXJyb3IsXG4gICAgbG9hZGluZyxcbiAgICB2YWx1ZTogZGF0YVNvdXJjZSxcbiAgfSA9IHVzZUFzeW5jKCgpID0+IHtcbiAgICByZXR1cm4gZ2V0RGF0YVNvdXJjZVNydigpLmdldChkYXRhU291cmNlTmFtZSk7XG4gIH0sIFtkYXRhU291cmNlTmFtZV0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlUXVlcnkgPSB1c2VDYWxsYmFjayhcbiAgICAocXVlcnk6IERhdGFRdWVyeSkgPT4ge1xuICAgICAgc2V0UXVlcnkocXVlcnkpO1xuICAgICAgb25DaGFuZ2UobWFwVG9WYWx1ZShxdWVyeSkpO1xuICAgIH0sXG4gICAgW29uQ2hhbmdlLCBtYXBUb1ZhbHVlXVxuICApO1xuXG4gIGlmIChsb2FkaW5nIHx8IGRhdGFTb3VyY2U/Lm5hbWUgIT09IGRhdGFTb3VyY2VOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZXJyb3IgfHwgIWRhdGFTb3VyY2UgfHwgIWRhdGFTb3VyY2U/LmNvbXBvbmVudHM/LlF1ZXJ5RWRpdG9yKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3I/Lm1lc3NhZ2UgfHwgJ0RhdGEgc291cmNlIHBsdWdpbiBkb2VzIG5vdCBleHBvcnQgYW55IFF1ZXJ5IEVkaXRvciBjb21wb25lbnQnO1xuICAgIHJldHVybiA8ZGl2PkNvdWxkIG5vdCBsb2FkIHF1ZXJ5IGVkaXRvciBkdWUgdG86IHtlcnJvck1lc3NhZ2V9PC9kaXY+O1xuICB9XG5cbiAgY29uc3QgUXVlcnlFZGl0b3IgPSBkYXRhU291cmNlPy5jb21wb25lbnRzPy5RdWVyeUVkaXRvcjtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUVkaXRvclxuICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgcXVlcmllcz17W3F1ZXJ5XX1cbiAgICAgIGFwcD17Q29yZUFwcC5DbG91ZEFsZXJ0aW5nfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUXVlcnl9XG4gICAgICBvblJ1blF1ZXJ5PXtub29wfVxuICAgICAgZGF0YXNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAvPlxuICApO1xufTtcblxudHlwZSBRdWVyeU1hcHBlcnM8VCBleHRlbmRzIERhdGFRdWVyeSA9IERhdGFRdWVyeT4gPSB7XG4gIG1hcFRvVmFsdWU6IChxdWVyeTogVCkgPT4gc3RyaW5nO1xuICBtYXBUb1F1ZXJ5OiAoZXhpc3Rpbmc6IFQsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IFQ7XG59O1xuXG5mdW5jdGlvbiB1c2VRdWVyeU1hcHBlcnMoZGF0YVNvdXJjZU5hbWU6IHN0cmluZyk6IFF1ZXJ5TWFwcGVycyB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKGRhdGFTb3VyY2VOYW1lKTtcblxuICAgIHN3aXRjaCAoc2V0dGluZ3M/LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2xva2knOlxuICAgICAgY2FzZSAncHJvbWV0aGV1cyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWFwVG9WYWx1ZTogKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IChxdWVyeSBhcyBQcm9tUXVlcnkgfCBMb2tpUXVlcnkpLmV4cHIsXG4gICAgICAgICAgbWFwVG9RdWVyeTogKGV4aXN0aW5nOiBEYXRhUXVlcnksIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+ICh7IC4uLmV4aXN0aW5nLCBleHByOiB2YWx1ZSB9KSxcbiAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtkYXRhU291cmNlTmFtZX0gaXMgbm90IHN1cHBvcnRlZCBhcyBhbiBleHByZXNzaW9uIGVkaXRvcmApO1xuICAgIH1cbiAgfSwgW2RhdGFTb3VyY2VOYW1lXSk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU2VsZWN0QmFzZVByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvU2VsZWN0L3R5cGVzJztcbmltcG9ydCB7IEdyYWZhbmFBbGVydFN0YXRlRGVjaXNpb24gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG50eXBlIFByb3BzID0gT21pdDxTZWxlY3RCYXNlUHJvcHM8R3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbj4sICdvcHRpb25zJz4gJiB7XG4gIGluY2x1ZGVOb0RhdGE6IGJvb2xlYW47XG4gIGluY2x1ZGVFcnJvcjogYm9vbGVhbjtcbn07XG5cbmNvbnN0IG9wdGlvbnM6IFNlbGVjdGFibGVWYWx1ZVtdID0gW1xuICB7IHZhbHVlOiBHcmFmYW5hQWxlcnRTdGF0ZURlY2lzaW9uLkFsZXJ0aW5nLCBsYWJlbDogJ0FsZXJ0aW5nJyB9LFxuICB7IHZhbHVlOiBHcmFmYW5hQWxlcnRTdGF0ZURlY2lzaW9uLk5vRGF0YSwgbGFiZWw6ICdObyBEYXRhJyB9LFxuICB7IHZhbHVlOiBHcmFmYW5hQWxlcnRTdGF0ZURlY2lzaW9uLk9LLCBsYWJlbDogJ09LJyB9LFxuICB7IHZhbHVlOiBHcmFmYW5hQWxlcnRTdGF0ZURlY2lzaW9uLkVycm9yLCBsYWJlbDogJ0Vycm9yJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEdyYWZhbmFBbGVydFN0YXRlUGlja2VyOiBGQzxQcm9wcz4gPSAoeyBpbmNsdWRlTm9EYXRhLCBpbmNsdWRlRXJyb3IsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3Qgb3B0cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghaW5jbHVkZU5vRGF0YSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKChvcHQpID0+IG9wdC52YWx1ZSAhPT0gR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5Ob0RhdGEpO1xuICAgIH1cbiAgICBpZiAoIWluY2x1ZGVFcnJvcikge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKChvcHQpID0+IG9wdC52YWx1ZSAhPT0gR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5FcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuICB9LCBbaW5jbHVkZU5vRGF0YSwgaW5jbHVkZUVycm9yXSk7XG4gIHJldHVybiA8U2VsZWN0IG9wdGlvbnM9e29wdHN9IHsuLi5wcm9wc30gLz47XG59O1xuIiwiaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IGR1cmF0aW9uVG9NaWxsaXNlY29uZHMsIHBhcnNlRHVyYXRpb24gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbi8vIGEgd2FybmluZyB0aGF0IHdpbGwgYmUgc2hvd24gaWYgYSBwcm9ibGVtYXRpYyB5ZXQgdGVjaG5pY2FsbHkgdmFsaWQgY29tYmluYXRpb24gb2YgXCJldmFsdWF0ZSBldmVyeVwiIGFuZCBcImV2YWx1YXRlIGZvclwiIGlzIGVuZXRlcmVkXG5leHBvcnQgY29uc3QgR3JhZmFuYUNvbmRpdGlvbkV2YWxXYXJuaW5nOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyB3YXRjaCB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG4gIGNvbnN0IGV2YWx1YXRlRm9yID0gd2F0Y2goJ2V2YWx1YXRlRm9yJyk7XG4gIGNvbnN0IGV2YWx1YXRlRXZlcnkgPSB3YXRjaCgnZXZhbHVhdGVFdmVyeScpO1xuICBpZiAoZXZhbHVhdGVGb3IgPT09ICcwJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGR1cmF0aW9uRm9yID0gcGFyc2VEdXJhdGlvbihldmFsdWF0ZUZvcik7XG4gIGNvbnN0IGR1cmF0aW9uRXZlcnkgPSBwYXJzZUR1cmF0aW9uKGV2YWx1YXRlRXZlcnkpO1xuICBpZiAoaXNFbXB0eShkdXJhdGlvbkZvcikgfHwgaXNFbXB0eShkdXJhdGlvbkV2ZXJ5KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IG1pbGxpc0ZvciA9IGR1cmF0aW9uVG9NaWxsaXNlY29uZHMoZHVyYXRpb25Gb3IpO1xuICBjb25zdCBtaWxsaXNFdmVyeSA9IGR1cmF0aW9uVG9NaWxsaXNlY29uZHMoZHVyYXRpb25FdmVyeSk7XG4gIGlmIChtaWxsaXNGb3IgJiYgbWlsbGlzRXZlcnkgJiYgbWlsbGlzRm9yIDw9IG1pbGxpc0V2ZXJ5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzZXZlcml0eT1cIndhcm5pbmdcIiB0aXRsZT1cIlwiPlxuICAgICAgICBTZXR0aW5nIGEgJnF1b3Q7Zm9yJnF1b3Q7IGR1cmF0aW9uIHRoYXQgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBldmFsdWF0aW9uIGludGVydmFsIHdpbGwgcmVzdWx0IGluIHRoZVxuICAgICAgICBldmFsdWF0aW9uIGludGVydmFsIGJlaW5nIHVzZWQgdG8gY2FsY3VsYXRlIHdoZW4gYW4gYWxlcnQgdGhhdCBoYXMgc3RvcHBlZCByZWNlaXZpbmcgZGF0YSB3aWxsIGJlIGNsb3NlZC5cbiAgICAgIDwvQWxlcnQ+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0LCBSZWdpc3Rlck9wdGlvbnMgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBwYXJzZUR1cmF0aW9uLCBkdXJhdGlvblRvTWlsbGlzZWNvbmRzLCBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGaWVsZCwgSW5saW5lTGFiZWwsIElucHV0LCBJbnB1dENvbnRyb2wsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IHBvc2l0aXZlRHVyYXRpb25WYWxpZGF0aW9uUGF0dGVybiwgZHVyYXRpb25WYWxpZGF0aW9uUGF0dGVybiB9IGZyb20gJy4uLy4uL3V0aWxzL3RpbWUnO1xuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGUgfSBmcm9tICcuLi9Db2xsYXBzZVRvZ2dsZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFBbGVydFN0YXRlUGlja2VyIH0gZnJvbSAnLi9HcmFmYW5hQWxlcnRTdGF0ZVBpY2tlcic7XG5pbXBvcnQgeyBHcmFmYW5hQ29uZGl0aW9uRXZhbFdhcm5pbmcgfSBmcm9tICcuL0dyYWZhbmFDb25kaXRpb25FdmFsV2FybmluZyc7XG5pbXBvcnQgeyBQcmV2aWV3UnVsZSB9IGZyb20gJy4vUHJldmlld1J1bGUnO1xuaW1wb3J0IHsgUnVsZUVkaXRvclNlY3Rpb24gfSBmcm9tICcuL1J1bGVFZGl0b3JTZWN0aW9uJztcblxuY29uc3QgTUlOX1RJTUVfUkFOR0VfU1RFUF9TID0gMTA7IC8vIDEwIHNlY29uZHNcblxuY29uc3QgZm9yVmFsaWRhdGlvbk9wdGlvbnM6IFJlZ2lzdGVyT3B0aW9ucyA9IHtcbiAgcmVxdWlyZWQ6IHtcbiAgICB2YWx1ZTogdHJ1ZSxcbiAgICBtZXNzYWdlOiAnUmVxdWlyZWQuJyxcbiAgfSxcbiAgcGF0dGVybjogZHVyYXRpb25WYWxpZGF0aW9uUGF0dGVybixcbn07XG5cbmNvbnN0IGV2YWx1YXRlRXZlcnlWYWxpZGF0aW9uT3B0aW9uczogUmVnaXN0ZXJPcHRpb25zID0ge1xuICByZXF1aXJlZDoge1xuICAgIHZhbHVlOiB0cnVlLFxuICAgIG1lc3NhZ2U6ICdSZXF1aXJlZC4nLFxuICB9LFxuICBwYXR0ZXJuOiBwb3NpdGl2ZUR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4sXG4gIHZhbGlkYXRlOiAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbih2YWx1ZSk7XG4gICAgaWYgKE9iamVjdC5rZXlzKGR1cmF0aW9uKS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRpZmYgPSBkdXJhdGlvblRvTWlsbGlzZWNvbmRzKGR1cmF0aW9uKTtcbiAgICAgIGlmIChkaWZmIDwgTUlOX1RJTUVfUkFOR0VfU1RFUF9TICogMTAwMCkge1xuICAgICAgICByZXR1cm4gYENhbm5vdCBiZSBsZXNzIHRoYW4gJHtNSU5fVElNRV9SQU5HRV9TVEVQX1N9IHNlY29uZHMuYDtcbiAgICAgIH1cbiAgICAgIGlmIChkaWZmICUgKE1JTl9USU1FX1JBTkdFX1NURVBfUyAqIDEwMDApICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBgTXVzdCBiZSBhIG11bHRpcGxlIG9mICR7TUlOX1RJTUVfUkFOR0VfU1RFUF9TfSBzZWNvbmRzLmA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEdyYWZhbmFFdmFsdWF0aW9uQmVoYXZpb3I6IEZDID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IFtzaG93RXJyb3JIYW5kbGluZywgc2V0U2hvd0Vycm9ySGFuZGxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG5cbiAgY29uc3QgZXZhbHVhdGVFdmVyeUlkID0gJ2V2YWwtZXZlcnktaW5wdXQnO1xuICBjb25zdCBldmFsdWF0ZUZvcklkID0gJ2V2YWwtZm9yLWlucHV0JztcblxuICByZXR1cm4gKFxuICAgIC8vIFRPRE8gcmVtb3ZlIFwiYW5kIGFsZXJ0IGNvbmRpdGlvblwiIGZvciByZWNvcmRpbmcgcnVsZXNcbiAgICA8UnVsZUVkaXRvclNlY3Rpb24gc3RlcE5vPXsyfSB0aXRsZT1cIkFsZXJ0IGV2YWx1YXRpb24gYmVoYXZpb3JcIj5cbiAgICAgIDxGaWVsZFxuICAgICAgICBsYWJlbD1cIkV2YWx1YXRlXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJFdmFsdWF0aW9uIGludGVydmFsIGFwcGxpZXMgdG8gZXZlcnkgcnVsZSB3aXRoaW4gYSBncm91cC4gSXQgY2FuIG92ZXJ3cml0ZSB0aGUgaW50ZXJ2YWwgb2YgYW4gZXhpc3RpbmcgYWxlcnQgcnVsZS5cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICAgIDxJbmxpbmVMYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj17ZXZhbHVhdGVFdmVyeUlkfVxuICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgdG9vbHRpcD1cIkhvdyBvZnRlbiB0aGUgYWxlcnQgd2lsbCBiZSBldmFsdWF0ZWQgdG8gc2VlIGlmIGl0IGZpcmVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBFdmFsdWF0ZSBldmVyeVxuICAgICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgPElucHV0IGlkPXtldmFsdWF0ZUV2ZXJ5SWR9IHdpZHRoPXs4fSB7Li4ucmVnaXN0ZXIoJ2V2YWx1YXRlRXZlcnknLCBldmFsdWF0ZUV2ZXJ5VmFsaWRhdGlvbk9wdGlvbnMpfSAvPlxuICAgICAgICAgIDxJbmxpbmVMYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj17ZXZhbHVhdGVGb3JJZH1cbiAgICAgICAgICAgIHdpZHRoPXs3fVxuICAgICAgICAgICAgdG9vbHRpcD0nT25jZSBjb25kaXRpb24gaXMgYnJlYWNoZWQsIGFsZXJ0IHdpbGwgZ28gaW50byBwZW5kaW5nIHN0YXRlLiBJZiBpdCBpcyBwZW5kaW5nIGZvciBsb25nZXIgdGhhbiB0aGUgXCJmb3JcIiB2YWx1ZSwgaXQgd2lsbCBiZWNvbWUgYSBmaXJpbmcgYWxlcnQuJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIGZvclxuICAgICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbmxpbmVGaWVsZH1cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZXZhbHVhdGVGb3I/Lm1lc3NhZ2V9XG4gICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5ldmFsdWF0ZUZvcj8ubWVzc2FnZX1cbiAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlSG9yaXpvbnRhbE92ZXJmbG93PXt0cnVlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCBpZD17ZXZhbHVhdGVGb3JJZH0gd2lkdGg9ezh9IHsuLi5yZWdpc3RlcignZXZhbHVhdGVGb3InLCBmb3JWYWxpZGF0aW9uT3B0aW9ucyl9IC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEdyYWZhbmFDb25kaXRpb25FdmFsV2FybmluZyAvPlxuICAgICAgPENvbGxhcHNlVG9nZ2xlXG4gICAgICAgIGlzQ29sbGFwc2VkPXshc2hvd0Vycm9ySGFuZGxpbmd9XG4gICAgICAgIG9uVG9nZ2xlPXsoY29sbGFwc2VkKSA9PiBzZXRTaG93RXJyb3JIYW5kbGluZyghY29sbGFwc2VkKX1cbiAgICAgICAgdGV4dD1cIkNvbmZpZ3VyZSBubyBkYXRhIGFuZCBlcnJvciBoYW5kbGluZ1wiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxhcHNlVG9nZ2xlfVxuICAgICAgLz5cbiAgICAgIHtzaG93RXJyb3JIYW5kbGluZyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZpZWxkIGh0bWxGb3I9XCJuby1kYXRhLXN0YXRlLWlucHV0XCIgbGFiZWw9XCJBbGVydCBzdGF0ZSBpZiBubyBkYXRhIG9yIGFsbCB2YWx1ZXMgYXJlIG51bGxcIj5cbiAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICA8R3JhZmFuYUFsZXJ0U3RhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9XCJuby1kYXRhLXN0YXRlLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs0Mn1cbiAgICAgICAgICAgICAgICAgIGluY2x1ZGVOb0RhdGE9e3RydWV9XG4gICAgICAgICAgICAgICAgICBpbmNsdWRlRXJyb3I9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWU/LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBuYW1lPVwibm9EYXRhU3RhdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxGaWVsZCBodG1sRm9yPVwiZXhlYy1lcnItc3RhdGUtaW5wdXRcIiBsYWJlbD1cIkFsZXJ0IHN0YXRlIGlmIGV4ZWN1dGlvbiBlcnJvciBvciB0aW1lb3V0XCI+XG4gICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyYWZhbmFBbGVydFN0YXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPVwiZXhlYy1lcnItc3RhdGUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezQyfVxuICAgICAgICAgICAgICAgICAgaW5jbHVkZU5vRGF0YT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBpbmNsdWRlRXJyb3I9e3RydWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZT8udmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIG5hbWU9XCJleGVjRXJyU3RhdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8UHJldmlld1J1bGUgLz5cbiAgICA8L1J1bGVFZGl0b3JTZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBpbmxpbmVGaWVsZDogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIGAsXG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBgLFxuICBjb2xsYXBzZVRvZ2dsZTogY3NzYFxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDIsIDAsIDIsIC0xKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGaWVsZCwgSW5wdXRDb250cm9sLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGZldGNoUnVsZXJSdWxlc0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbXBvcnQgeyBTZWxlY3RXaXRoQWRkIH0gZnJvbSAnLi9TZWxlY3RXSXRoQWRkJztcbmltcG9ydCB7IGNoZWNrRm9yUGF0aFNlcGFyYXRvciB9IGZyb20gJy4vdXRpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGVzU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgR3JvdXBBbmROYW1lc3BhY2VGaWVsZHM6IEZDPFByb3BzPiA9ICh7IHJ1bGVzU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgICBzZXRWYWx1ZSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuXG4gIGNvbnN0IHN0eWxlID0gdXNlU3R5bGVzMihnZXRTdHlsZSk7XG5cbiAgY29uc3QgW2N1c3RvbUdyb3VwLCBzZXRDdXN0b21Hcm91cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcnVsZXJSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFJ1bGVyUnVsZXNBY3Rpb24oeyBydWxlc1NvdXJjZU5hbWUgfSkpO1xuICB9LCBbcnVsZXNTb3VyY2VOYW1lLCBkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IHJ1bGVzQ29uZmlnID0gcnVsZXJSZXF1ZXN0c1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG5cbiAgY29uc3QgbmFtZXNwYWNlID0gd2F0Y2goJ25hbWVzcGFjZScpO1xuXG4gIGNvbnN0IG5hbWVzcGFjZU9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT5cbiAgICAgIHJ1bGVzQ29uZmlnID8gT2JqZWN0LmtleXMocnVsZXNDb25maWcpLm1hcCgobmFtZXNwYWNlKSA9PiAoeyBsYWJlbDogbmFtZXNwYWNlLCB2YWx1ZTogbmFtZXNwYWNlIH0pKSA6IFtdLFxuICAgIFtydWxlc0NvbmZpZ11cbiAgKTtcblxuICBjb25zdCBncm91cE9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT5cbiAgICAgIChuYW1lc3BhY2UgJiYgcnVsZXNDb25maWc/LltuYW1lc3BhY2VdPy5tYXAoKGdyb3VwKSA9PiAoeyBsYWJlbDogZ3JvdXAubmFtZSwgdmFsdWU6IGdyb3VwLm5hbWUgfSkpKSB8fCBbXSxcbiAgICBbbmFtZXNwYWNlLCBydWxlc0NvbmZpZ11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mbGV4Um93fT5cbiAgICAgIDxGaWVsZFxuICAgICAgICBkYXRhLXRlc3RpZD1cIm5hbWVzcGFjZS1waWNrZXJcIlxuICAgICAgICBsYWJlbD1cIk5hbWVzcGFjZVwiXG4gICAgICAgIGVycm9yPXtlcnJvcnMubmFtZXNwYWNlPy5tZXNzYWdlfVxuICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5uYW1lc3BhY2U/Lm1lc3NhZ2V9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgPFNlbGVjdFdpdGhBZGRcbiAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmlucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoJ2dyb3VwJywgJycpOyAvL3Jlc2V0IGlmIG5hbWVzcGFjZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkN1c3RvbUNoYW5nZT17KGN1c3RvbTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGN1c3RvbSAmJiBzZXRDdXN0b21Hcm91cCh0cnVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17bmFtZXNwYWNlT3B0aW9uc31cbiAgICAgICAgICAgICAgd2lkdGg9ezQyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJuYW1lc3BhY2VcIlxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgcGF0aFNlcGFyYXRvcjogY2hlY2tGb3JQYXRoU2VwYXJhdG9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZCBkYXRhLXRlc3RpZD1cImdyb3VwLXBpY2tlclwiIGxhYmVsPVwiR3JvdXBcIiBlcnJvcj17ZXJyb3JzLmdyb3VwPy5tZXNzYWdlfSBpbnZhbGlkPXshIWVycm9ycy5ncm91cD8ubWVzc2FnZX0+XG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICA8U2VsZWN0V2l0aEFkZCB7Li4uZmllbGR9IG9wdGlvbnM9e2dyb3VwT3B0aW9uc30gd2lkdGg9ezQyfSBjdXN0b209e2N1c3RvbUdyb3VwfSBjbGFzc05hbWU9e3N0eWxlLmlucHV0fSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImdyb3VwXCJcbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgIHBhdGhTZXBhcmF0b3I6IGNoZWNrRm9yUGF0aFNlcGFyYXRvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZSA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAmID4gKiArICoge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgfVxuICBgLFxuICBpbnB1dDogY3NzYFxuICAgIHdpZHRoOiAzMzBweCAhaW1wb3J0YW50O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEZpZWxkLCBGaWVsZEFycmF5LCBJbnB1dCwgSW5saW5lTGFiZWwsIExhYmVsLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgTGFiZWxzRmllbGQ6IEZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgY29udHJvbCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xuICBjb25zdCBsYWJlbHMgPSB3YXRjaCgnbGFiZWxzJyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgc3R5bGVzLndyYXBwZXIpfT5cbiAgICAgIDxMYWJlbD5DdXN0b20gTGFiZWxzPC9MYWJlbD5cbiAgICAgIDxGaWVsZEFycmF5IGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgeyh7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICAgICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD17MTh9PkxhYmVsczwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29sdW1ufT5cbiAgICAgICAgICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmllbGQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93LCBzdHlsZXMuY2VudGVyQWxpZ25Sb3cpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5sYWJlbHM/LltpbmRleF0/LmtleT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmxhYmVscz8uW2luZGV4XT8ua2V5Py5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYGxhYmVsc1ske2luZGV4fV0ua2V5YCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogISFsYWJlbHNbaW5kZXhdPy52YWx1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2BsYWJlbC1rZXktJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElubGluZUxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmVxdWFsU2lnbn0+PTwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubGFiZWxzPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmxhYmVscz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgbGFiZWxzWyR7aW5kZXh9XS52YWx1ZWAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6ICEhbGFiZWxzW2luZGV4XT8ua2V5LCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgbGFiZWwtdmFsdWUtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlTGFiZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZSBsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTGFiZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZCh7fSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFkZCBsYWJlbFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRmllbGRBcnJheT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcHBlcjogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICBgLFxuICAgIGZsZXhDb2x1bW46IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGAsXG4gICAgZmxleFJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICYgKyBidXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICAgIH1cbiAgICBgLFxuICAgIGRlbGV0ZUxhYmVsQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgICBhZGRMYWJlbEJ1dHRvbjogY3NzYFxuICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBgLFxuICAgIGNlbnRlckFsaWduUm93OiBjc3NgXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgYCxcbiAgICBlcXVhbFNpZ246IGNzc2BcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgYCxcbiAgICBsYWJlbElucHV0OiBjc3NgXG4gICAgICB3aWR0aDogMTc1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgJiArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICAgIH1cbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWxzRmllbGQ7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2FyZCwgTGluaywgdXNlU3R5bGVzMiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgTGFiZWxzRmllbGQgZnJvbSAnLi9MYWJlbHNGaWVsZCc7XG5pbXBvcnQgeyBSdWxlRWRpdG9yU2VjdGlvbiB9IGZyb20gJy4vUnVsZUVkaXRvclNlY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uc1N0ZXA6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbaGlkZUZsb3dDaGFydCwgc2V0SGlkZUZsb3dDaGFydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZTIoKTtcblxuICByZXR1cm4gKFxuICAgIDxSdWxlRWRpdG9yU2VjdGlvblxuICAgICAgc3RlcE5vPXs0fVxuICAgICAgdGl0bGU9XCJOb3RpZmljYXRpb25zXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiR3JhZmFuYSBoYW5kbGVzIHRoZSBub3RpZmljYXRpb25zIGZvciBhbGVydHMgYnkgYXNzaWduaW5nIGxhYmVscyB0byBhbGVydHMuIFRoZXNlIGxhYmVscyBjb25uZWN0IGFsZXJ0cyB0byBjb250YWN0IHBvaW50cyBhbmQgc2lsZW5jZSBhbGVydCBpbnN0YW5jZXMgdGhhdCBoYXZlIG1hdGNoaW5nIGxhYmVscy5cIlxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGlkZUJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2V0SGlkZUZsb3dDaGFydCghaGlkZUZsb3dDaGFydCl9PlxuICAgICAgICAgIHtgJHshaGlkZUZsb3dDaGFydCA/ICdIaWRlJyA6ICdTaG93J30gZmxvdyBjaGFydGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRXcmFwcGVyfT5cbiAgICAgICAgeyFoaWRlRmxvd0NoYXJ0ICYmIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mbG93Q2hhcnR9XG4gICAgICAgICAgICBzcmM9e2AvcHVibGljL2ltZy9hbGVydGluZy9ub3RpZmljYXRpb25fcG9saWN5XyR7dGhlbWUubmFtZS50b0xvd2VyQ2FzZSgpfS5zdmdgfVxuICAgICAgICAgICAgYWx0PVwibm90aWZpY2F0aW9uIHBvbGljeSBmbG93IGNoYXJ0XCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICAgICAgPExhYmVsc0ZpZWxkIC8+XG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8Q2FyZC5IZWFkaW5nPlJvb3Qgcm91dGUg4oCTIGRlZmF1bHQgZm9yIGFsbCBhbGVydHM8L0NhcmQuSGVhZGluZz5cbiAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICBXaXRob3V0IGN1c3RvbSBsYWJlbHMsIHlvdXIgYWxlcnQgd2lsbCBiZSByb3V0ZWQgdGhyb3VnaCB0aGUgcm9vdCByb3V0ZS4gVG8gdmlldyBhbmQgZWRpdCB0aGUgcm9vdCByb3V0ZSxcbiAgICAgICAgICAgICAgZ28gdG8gPExpbmsgaHJlZj1cIi9hbGVydGluZy9yb3V0ZXNcIj5ub3RpZmljYXRpb24gcG9saWNpZXM8L0xpbms+IG9yIGNvbnRhY3QgeW91ciBhZG1pbiBpbiBjYXNlIHlvdSBhcmVcbiAgICAgICAgICAgICAgdXNpbmcgbm9uLUdyYWZhbmEgYWxlcnQgbWFuYWdlbWVudC5cbiAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SdWxlRWRpdG9yU2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29udGVudFdyYXBwZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG4gIGhpZGVCdXR0b246IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICBjYXJkOiBjc3NgXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgYCxcbiAgZmxvd0NoYXJ0OiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IHVzZU1vdW50ZWRTdGF0ZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRhdGVUaW1lRm9ybWF0SVNPLCBHcmFmYW5hVGhlbWUyLCBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIEhvcml6b250YWxHcm91cCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgcHJldmlld0FsZXJ0UnVsZSB9IGZyb20gJy4uLy4uL2FwaS9wcmV2aWV3JztcbmltcG9ydCB7IHVzZUFsZXJ0UXVlcmllc1N0YXR1cyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUFsZXJ0UXVlcmllc1N0YXR1cyc7XG5pbXBvcnQgeyBQcmV2aWV3UnVsZVJlcXVlc3QsIFByZXZpZXdSdWxlUmVzcG9uc2UgfSBmcm9tICcuLi8uLi90eXBlcy9wcmV2aWV3JztcbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSwgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbXBvcnQgeyBQcmV2aWV3UnVsZVJlc3VsdCB9IGZyb20gJy4vUHJldmlld1J1bGVSZXN1bHQnO1xuXG5jb25zdCBmaWVsZHM6IEFycmF5PGtleW9mIFJ1bGVGb3JtVmFsdWVzPiA9IFsndHlwZScsICdkYXRhU291cmNlTmFtZScsICdjb25kaXRpb24nLCAncXVlcmllcycsICdleHByZXNzaW9uJ107XG5cbmV4cG9ydCBmdW5jdGlvbiBQcmV2aWV3UnVsZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbcHJldmlldywgb25QcmV2aWV3XSA9IHVzZVByZXZpZXcoKTtcbiAgY29uc3QgeyB3YXRjaCB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG4gIGNvbnN0IFt0eXBlLCBjb25kaXRpb24sIHF1ZXJpZXNdID0gd2F0Y2goWyd0eXBlJywgJ2NvbmRpdGlvbicsICdxdWVyaWVzJ10pO1xuICBjb25zdCB7IGFsbERhdGFTb3VyY2VzQXZhaWxhYmxlIH0gPSB1c2VBbGVydFF1ZXJpZXNTdGF0dXMocXVlcmllcyk7XG5cbiAgaWYgKHR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZyB8fCB0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaXNQcmV2aWV3QXZhaWxhYmxlID0gQm9vbGVhbihjb25kaXRpb24pICYmIGFsbERhdGFTb3VyY2VzQXZhaWxhYmxlO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAge2FsbERhdGFTb3VyY2VzQXZhaWxhYmxlICYmIChcbiAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXshaXNQcmV2aWV3QXZhaWxhYmxlfSB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtvblByZXZpZXd9PlxuICAgICAgICAgICAgUHJldmlldyBhbGVydHNcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgeyFhbGxEYXRhU291cmNlc0F2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgPEFsZXJ0IHRpdGxlPVwiUHJldmlldyBpcyBub3QgYXZhaWxhYmxlXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICBDYW5ub3QgZGlzcGxheSB0aGUgcXVlcnkgcHJldmlldy4gU29tZSBvZiB0aGUgZGF0YSBzb3VyY2VzIHVzZWQgaW4gdGhlIHF1ZXJpZXMgYXJlIG5vdCBhdmFpbGFibGUuXG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgKX1cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgPFByZXZpZXdSdWxlUmVzdWx0IHByZXZpZXc9e3ByZXZpZXd9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZVByZXZpZXcoKTogW1ByZXZpZXdSdWxlUmVzcG9uc2UgfCB1bmRlZmluZWQsICgpID0+IHZvaWRdIHtcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGU8UHJldmlld1J1bGVSZXNwb25zZSB8IHVuZGVmaW5lZD4oKTtcbiAgY29uc3QgeyBnZXRWYWx1ZXMgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuICBjb25zdCBpc01vdW50ZWQgPSB1c2VNb3VudGVkU3RhdGUoKTtcblxuICBjb25zdCBvblByZXZpZXcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gZ2V0VmFsdWVzKGZpZWxkcyk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGNyZWF0ZVByZXZpZXdSZXF1ZXN0KHZhbHVlcyk7XG5cbiAgICBwcmV2aWV3QWxlcnRSdWxlKHJlcXVlc3QpXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKHJlc3BvbnNlKSA9PiAhaXNDb21wbGV0ZWQocmVzcG9uc2UpLCB0cnVlKSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmICghaXNNb3VudGVkKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0UHJldmlldyhyZXNwb25zZSk7XG4gICAgICB9KTtcbiAgfSwgW2dldFZhbHVlcywgaXNNb3VudGVkXSk7XG5cbiAgcmV0dXJuIFtwcmV2aWV3LCBvblByZXZpZXddO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmV2aWV3UmVxdWVzdCh2YWx1ZXM6IGFueVtdKTogUHJldmlld1J1bGVSZXF1ZXN0IHtcbiAgY29uc3QgW3R5cGUsIGRhdGFTb3VyY2VOYW1lLCBjb25kaXRpb24sIHF1ZXJpZXMsIGV4cHJlc3Npb25dID0gdmFsdWVzO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhU291cmNlTmFtZSxcbiAgICAgICAgZXhwcjogZXhwcmVzc2lvbixcbiAgICAgIH07XG5cbiAgICBjYXNlIFJ1bGVGb3JtVHlwZS5ncmFmYW5hOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ3JhZmFuYV9jb25kaXRpb246IHtcbiAgICAgICAgICBjb25kaXRpb24sXG4gICAgICAgICAgZGF0YTogcXVlcmllcyxcbiAgICAgICAgICBub3c6IGRhdGVUaW1lRm9ybWF0SVNPKERhdGUubm93KCkpLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEFsZXJ0IHR5cGUgJHt0eXBlfSBub3Qgc3VwcG9ydGVkIGJ5IHByZXZpZXcuYCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZWQocmVzcG9uc2U6IFByZXZpZXdSdWxlUmVzcG9uc2UpOiBib29sZWFuIHtcbiAgc3dpdGNoIChyZXNwb25zZS5kYXRhLnN0YXRlKSB7XG4gICAgY2FzZSBMb2FkaW5nU3RhdGUuRG9uZTpcbiAgICBjYXNlIExvYWRpbmdTdGF0ZS5FcnJvcjpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54eGx9cHg7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dG9TaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcblxuaW1wb3J0IHsgRmllbGRDb25maWdTb3VyY2UsIEZpZWxkTWF0Y2hlcklELCBHcmFmYW5hVGhlbWUyLCBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFBhbmVsUmVuZGVyZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFRhYmxlQ2VsbERpc3BsYXlNb2RlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBQcmV2aWV3UnVsZVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcHJldmlldyc7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuaW1wb3J0IHsgbWVzc2FnZUZyb21FcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL3JlZHV4JztcblxudHlwZSBQcm9wcyA9IHtcbiAgcHJldmlldzogUHJldmlld1J1bGVSZXNwb25zZSB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQcmV2aWV3UnVsZVJlc3VsdChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyBwcmV2aWV3IH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBmaWVsZENvbmZpZzogRmllbGRDb25maWdTb3VyY2UgPSB7XG4gICAgZGVmYXVsdHM6IHt9LFxuICAgIG92ZXJyaWRlczogW1xuICAgICAge1xuICAgICAgICBtYXRjaGVyOiB7IGlkOiBGaWVsZE1hdGNoZXJJRC5ieU5hbWUsIG9wdGlvbnM6ICdJbmZvJyB9LFxuICAgICAgICBwcm9wZXJ0aWVzOiBbeyBpZDogJ2N1c3RvbS5kaXNwbGF5TW9kZScsIHZhbHVlOiBUYWJsZUNlbGxEaXNwbGF5TW9kZS5KU09OVmlldyB9XSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBpZiAoIXByZXZpZXcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgcnVsZVR5cGUgfSA9IHByZXZpZXc7XG5cbiAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPHNwYW4+TG9hZGluZyBwcmV2aWV3Li4uPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuRXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7ZGF0YS5lcnJvciA/IG1lc3NhZ2VGcm9tRXJyb3IoZGF0YS5lcnJvcikgOiAnRmFpbGVkIHRvIHByZXZpZXcgYWxlcnQgcnVsZSd9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPHNwYW4+XG4gICAgICAgIFByZXZpZXcgYmFzZWQgb24gdGhlIHJlc3VsdCBvZiBydW5uaW5nIHRoZSBxdWVyeSwgZm9yIHRoaXMgbW9tZW50LnsnICd9XG4gICAgICAgIHtydWxlVHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmEgPyAnQ29uZmlndXJhdGlvbiBmb3IgYG5vIGRhdGFgIGFuZCBgZXJyb3IgaGFuZGxpbmdgIGlzIG5vdCBhcHBsaWVkLicgOiBudWxsfVxuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XG4gICAgICAgIDxBdXRvU2l6ZXI+XG4gICAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogYCR7d2lkdGh9cHhgLCBoZWlnaHQ6IGAke2hlaWdodH1weGAgfX0+XG4gICAgICAgICAgICAgIDxQYW5lbFJlbmRlcmVyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgICBwbHVnaW5JZD1cInRhYmxlXCJcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIGZpZWxkQ29uZmlnPXtmaWVsZENvbmZpZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXV0b1NpemVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMil9IDA7XG4gICAgYCxcbiAgICB0YWJsZTogY3NzYFxuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICBoZWlnaHQ6IDEzNXB4O1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoMSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIERhdGFRdWVyeSxcbiAgZ2V0RGVmYXVsdFJlbGF0aXZlVGltZVJhbmdlLFxuICBHcmFmYW5hVGhlbWUyLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUmVsYXRpdmVUaW1lUmFuZ2UsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgSG9yaXpvbnRhbEdyb3VwLCBzdHlsZXNGYWN0b3J5IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0TmV4dFJlZklkQ2hhciB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL3F1ZXJ5JztcbmltcG9ydCB7XG4gIGRhdGFTb3VyY2UgYXMgZXhwcmVzc2lvbkRhdGFzb3VyY2UsXG4gIEV4cHJlc3Npb25EYXRhc291cmNlVUlELFxufSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvRXhwcmVzc2lvbkRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNFeHByZXNzaW9uUXVlcnkgfSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvZ3VhcmRzJztcbmltcG9ydCB7IEV4cHJlc3Npb25RdWVyeVR5cGUgfSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvdHlwZXMnO1xuaW1wb3J0IHsgZGVmYXVsdENvbmRpdGlvbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy91dGlscy9leHByZXNzaW9uVHlwZXMnO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBBbGVydGluZ1F1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vLi4vc3RhdGUvQWxlcnRpbmdRdWVyeVJ1bm5lcic7XG5cbmltcG9ydCB7IFF1ZXJ5Um93cyB9IGZyb20gJy4vUXVlcnlSb3dzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdmFsdWU/OiBBbGVydFF1ZXJ5W107XG4gIG9uQ2hhbmdlOiAocXVlcmllczogQWxlcnRRdWVyeVtdKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBwYW5lbERhdGFCeVJlZklkOiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+O1xufVxuZXhwb3J0IGNsYXNzIFF1ZXJ5RWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgcHJpdmF0ZSBydW5uZXI6IEFsZXJ0aW5nUXVlcnlSdW5uZXI7XG4gIHByaXZhdGUgcXVlcmllczogQWxlcnRRdWVyeVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBwYW5lbERhdGFCeVJlZklkOiB7fSB9O1xuICAgIHRoaXMucnVubmVyID0gbmV3IEFsZXJ0aW5nUXVlcnlSdW5uZXIoKTtcbiAgICB0aGlzLnF1ZXJpZXMgPSBwcm9wcy52YWx1ZSA/PyBbXTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucnVubmVyLmdldCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhbmVsRGF0YUJ5UmVmSWQ6IGRhdGEgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJ1bm5lci5kZXN0cm95KCk7XG4gIH1cblxuICBvblJ1blF1ZXJpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzIH0gPSB0aGlzO1xuICAgIHRoaXMucnVubmVyLnJ1bihxdWVyaWVzKTtcbiAgfTtcblxuICBvbkNhbmNlbFF1ZXJpZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5ydW5uZXIuY2FuY2VsKCk7XG4gIH07XG5cbiAgb25DaGFuZ2VRdWVyaWVzID0gKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkgPT4ge1xuICAgIHRoaXMucXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShxdWVyaWVzKTtcbiAgfTtcblxuICBvbkR1cGxpY2F0ZVF1ZXJ5ID0gKHF1ZXJ5OiBBbGVydFF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzIH0gPSB0aGlzO1xuICAgIHRoaXMub25DaGFuZ2VRdWVyaWVzKGFkZFF1ZXJ5KHF1ZXJpZXMsIHF1ZXJ5KSk7XG4gIH07XG5cbiAgb25OZXdBbGVydGluZ1F1ZXJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcyB9ID0gdGhpcztcbiAgICBjb25zdCBkZWZhdWx0RGF0YVNvdXJjZSA9IGdldERhdGFzb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKCdkZWZhdWx0Jyk7XG5cbiAgICBpZiAoIWRlZmF1bHREYXRhU291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZVF1ZXJpZXMoXG4gICAgICBhZGRRdWVyeShxdWVyaWVzLCB7XG4gICAgICAgIGRhdGFzb3VyY2VVaWQ6IGRlZmF1bHREYXRhU291cmNlLnVpZCxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICByZWZJZDogJycsXG4gICAgICAgICAgZGF0YXNvdXJjZToge1xuICAgICAgICAgICAgdHlwZTogZGVmYXVsdERhdGFTb3VyY2UudHlwZSxcbiAgICAgICAgICAgIHVpZDogZGVmYXVsdERhdGFTb3VyY2UudWlkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgb25OZXdFeHByZXNzaW9uUXVlcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzIH0gPSB0aGlzO1xuXG4gICAgdGhpcy5vbkNoYW5nZVF1ZXJpZXMoXG4gICAgICBhZGRRdWVyeShxdWVyaWVzLCB7XG4gICAgICAgIGRhdGFzb3VyY2VVaWQ6IEV4cHJlc3Npb25EYXRhc291cmNlVUlELFxuICAgICAgICBtb2RlbDogZXhwcmVzc2lvbkRhdGFzb3VyY2UubmV3UXVlcnkoe1xuICAgICAgICAgIHR5cGU6IEV4cHJlc3Npb25RdWVyeVR5cGUuY2xhc3NpYyxcbiAgICAgICAgICBjb25kaXRpb25zOiBbZGVmYXVsdENvbmRpdGlvbl0sXG4gICAgICAgIH0pLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGlzUnVubmluZygpIHtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLnBhbmVsRGF0YUJ5UmVmSWQpLmZpbmQoKGQpID0+IEJvb2xlYW4oZCkpO1xuICAgIHJldHVybiBkYXRhPy5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkxvYWRpbmc7XG4gIH1cblxuICByZW5kZXJSdW5RdWVyeUJ1dHRvbigpIHtcbiAgICBjb25zdCBpc1J1bm5pbmcgPSB0aGlzLmlzUnVubmluZygpO1xuXG4gICAgaWYgKGlzUnVubmluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvbiBpY29uPVwiZmEgZmEtc3Bpbm5lclwiIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsUXVlcmllc30+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvbiBpY29uPVwic3luY1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm9uUnVuUXVlcmllc30+XG4gICAgICAgIFJ1biBxdWVyaWVzXG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgPSBbXSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhbmVsRGF0YUJ5UmVmSWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKGNvbmZpZy50aGVtZTIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFF1ZXJ5Um93c1xuICAgICAgICAgIGRhdGE9e3BhbmVsRGF0YUJ5UmVmSWR9XG4gICAgICAgICAgcXVlcmllcz17dmFsdWV9XG4gICAgICAgICAgb25RdWVyaWVzQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlUXVlcmllc31cbiAgICAgICAgICBvbkR1cGxpY2F0ZVF1ZXJ5PXt0aGlzLm9uRHVwbGljYXRlUXVlcnl9XG4gICAgICAgICAgb25SdW5RdWVyaWVzPXt0aGlzLm9uUnVuUXVlcmllc31cbiAgICAgICAgLz5cbiAgICAgICAgPEhvcml6b250YWxHcm91cCBzcGFjaW5nPVwic21cIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25OZXdBbGVydGluZ1F1ZXJ5fVxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMuY29tcG9uZW50cy5RdWVyeVRhYi5hZGRRdWVyeX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgcXVlcnlcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7Y29uZmlnLmV4cHJlc3Npb25zRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBpY29uPVwicGx1c1wiIG9uQ2xpY2s9e3RoaXMub25OZXdFeHByZXNzaW9uUXVlcnl9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQWRkIGV4cHJlc3Npb25cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RoaXMucmVuZGVyUnVuUXVlcnlCdXR0b24oKX1cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGFkZFF1ZXJ5ID0gKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSwgcXVlcnlUb0FkZDogUGljazxBbGVydFF1ZXJ5LCAnbW9kZWwnIHwgJ2RhdGFzb3VyY2VVaWQnPik6IEFsZXJ0UXVlcnlbXSA9PiB7XG4gIGNvbnN0IHJlZklkID0gZ2V0TmV4dFJlZklkQ2hhcihxdWVyaWVzKTtcblxuICBjb25zdCBxdWVyeTogQWxlcnRRdWVyeSA9IHtcbiAgICAuLi5xdWVyeVRvQWRkLFxuICAgIHJlZklkLFxuICAgIHF1ZXJ5VHlwZTogJycsXG4gICAgbW9kZWw6IHtcbiAgICAgIC4uLnF1ZXJ5VG9BZGQubW9kZWwsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIHJlZklkLFxuICAgIH0sXG4gICAgcmVsYXRpdmVUaW1lUmFuZ2U6IGRlZmF1bHRUaW1lUmFuZ2UocXVlcnlUb0FkZC5tb2RlbCksXG4gIH07XG5cbiAgcmV0dXJuIFsuLi5xdWVyaWVzLCBxdWVyeV07XG59O1xuXG5jb25zdCBkZWZhdWx0VGltZVJhbmdlID0gKG1vZGVsOiBEYXRhUXVlcnkpOiBSZWxhdGl2ZVRpbWVSYW5nZSB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChpc0V4cHJlc3Npb25RdWVyeShtb2RlbCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gZ2V0RGVmYXVsdFJlbGF0aXZlVGltZVJhbmdlKCk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5wcmltYXJ5fTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueHhsfXB4O1xuICAgIGAsXG4gICAgcnVuV3JhcHBlcjogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGVkaXRvcldyYXBwZXI6IGNzc2BcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gICAgYCxcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyb3BwYWJsZSwgRHJvcFJlc3VsdCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnksXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUmVsYXRpdmVUaW1lUmFuZ2UsXG4gIFRocmVzaG9sZHNDb25maWcsXG4gIFRocmVzaG9sZHNNb2RlLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBJY29uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUXVlcnlPcGVyYXRpb25Sb3cgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1F1ZXJ5T3BlcmF0aW9uUm93L1F1ZXJ5T3BlcmF0aW9uUm93JztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBnZXREYXRhc291cmNlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvZGF0YXNvdXJjZV9zcnYnO1xuaW1wb3J0IHsgQWxlcnREYXRhUXVlcnksIEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBFbXB0eVF1ZXJ5V3JhcHBlciwgUXVlcnlXcmFwcGVyIH0gZnJvbSAnLi9RdWVyeVdyYXBwZXInO1xuaW1wb3J0IHsgcXVlcmllc1dpdGhVcGRhdGVkUmVmZXJlbmNlcyB9IGZyb20gJy4vdXRpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8vIFRoZSBxdWVyeSBjb25maWd1cmF0aW9uXG4gIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXTtcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPjtcblxuICAvLyBRdWVyeSBlZGl0aW5nXG4gIG9uUXVlcmllc0NoYW5nZTogKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkgPT4gdm9pZDtcbiAgb25EdXBsaWNhdGVRdWVyeTogKHF1ZXJ5OiBBbGVydFF1ZXJ5KSA9PiB2b2lkO1xuICBvblJ1blF1ZXJpZXM6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGRhdGFQZXJRdWVyeTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPjtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXJ5Um93cyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IGRhdGFQZXJRdWVyeToge30gfTtcbiAgfVxuXG4gIG9uUmVtb3ZlUXVlcnkgPSAocXVlcnk6IERhdGFRdWVyeSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25RdWVyaWVzQ2hhbmdlKFxuICAgICAgdGhpcy5wcm9wcy5xdWVyaWVzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5tb2RlbC5yZWZJZCAhPT0gcXVlcnkucmVmSWQ7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgb25DaGFuZ2VUaW1lUmFuZ2UgPSAodGltZVJhbmdlOiBSZWxhdGl2ZVRpbWVSYW5nZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcywgb25RdWVyaWVzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUXVlcmllc0NoYW5nZShcbiAgICAgIHF1ZXJpZXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgcmVsYXRpdmVUaW1lUmFuZ2U6IHRpbWVSYW5nZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBvbkNoYW5nZVRocmVzaG9sZCA9ICh0aHJlc2hvbGRzOiBUaHJlc2hvbGRzQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzLCBvblF1ZXJpZXNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCByZWZlcmVuY2VkUmVmSWQgPSBxdWVyaWVzW2luZGV4XS5yZWZJZDtcblxuICAgIG9uUXVlcmllc0NoYW5nZShcbiAgICAgIHF1ZXJpZXMubWFwKChxdWVyeSkgPT4ge1xuICAgICAgICBpZiAoIWlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKSkge1xuICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVyeS5tb2RlbC5jb25kaXRpb25zICYmIHF1ZXJ5Lm1vZGVsLmNvbmRpdGlvbnNbMF0ucXVlcnkucGFyYW1zWzBdID09PSByZWZlcmVuY2VkUmVmSWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAuLi5xdWVyeS5tb2RlbCxcbiAgICAgICAgICAgICAgY29uZGl0aW9uczogcXVlcnkubW9kZWwuY29uZGl0aW9ucy5tYXAoKGNvbmRpdGlvbiwgY29uZGl0aW9uSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgZmlyc3QgY29uZGl0aW9uIGZvciBhIGdpdmVuIHJlZklkLlxuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24ucXVlcnkucGFyYW1zWzBdID09PSByZWZlcmVuY2VkUmVmSWQgJiYgY29uZGl0aW9uSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZXZhbHVhdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uY29uZGl0aW9uLmV2YWx1YXRvcixcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtwYXJzZUZsb2F0KHRocmVzaG9sZHMuc3RlcHNbMV0udmFsdWUudG9QcmVjaXNpb24oMykpXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25kaXRpb247XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBvbkNoYW5nZURhdGFTb3VyY2UgPSAoc2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzLCBvblF1ZXJpZXNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB1cGRhdGVkUXVlcmllcyA9IHF1ZXJpZXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29weU1vZGVsKGl0ZW0sIHNldHRpbmdzLnVpZCk7XG4gICAgfSk7XG4gICAgb25RdWVyaWVzQ2hhbmdlKHVwZGF0ZWRRdWVyaWVzKTtcbiAgfTtcblxuICBvbkNoYW5nZVF1ZXJ5ID0gKHF1ZXJ5OiBEYXRhUXVlcnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJpZXMsIG9uUXVlcmllc0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIGZpbmQgd2hhdCBxdWVyaWVzIHN0aWxsIGhhdmUgYSByZWZlcmVuY2UgdG8gdGhlIG9sZCBuYW1lXG4gICAgY29uc3QgcHJldmlvdXNSZWZJZCA9IHF1ZXJpZXNbaW5kZXhdLnJlZklkO1xuICAgIGNvbnN0IG5ld1JlZklkID0gcXVlcnkucmVmSWQ7XG5cbiAgICBvblF1ZXJpZXNDaGFuZ2UoXG4gICAgICBxdWVyaWVzV2l0aFVwZGF0ZWRSZWZlcmVuY2VzKHF1ZXJpZXMsIHByZXZpb3VzUmVmSWQsIG5ld1JlZklkKS5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICBpZiAoaXRlbUluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIHJlZklkOiBxdWVyeS5yZWZJZCxcbiAgICAgICAgICBxdWVyeVR5cGU6IGl0ZW0ubW9kZWwucXVlcnlUeXBlID8/ICcnLFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAuLi5pdGVtLm1vZGVsLFxuICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICBkYXRhc291cmNlOiBxdWVyeS5kYXRhc291cmNlISxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIG9uRHJhZ0VuZCA9IChyZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJpZXMsIG9uUXVlcmllc0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuZGVzdGluYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEluZGV4ID0gcmVzdWx0LnNvdXJjZS5pbmRleDtcbiAgICBjb25zdCBlbmRJbmRleCA9IHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleDtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gZW5kSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGUgPSBBcnJheS5mcm9tKHF1ZXJpZXMpO1xuICAgIGNvbnN0IFtyZW1vdmVkXSA9IHVwZGF0ZS5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gICAgdXBkYXRlLnNwbGljZShlbmRJbmRleCwgMCwgcmVtb3ZlZCk7XG4gICAgb25RdWVyaWVzQ2hhbmdlKHVwZGF0ZSk7XG4gIH07XG5cbiAgb25EdXBsaWNhdGVRdWVyeSA9IChxdWVyeTogRGF0YVF1ZXJ5LCBzb3VyY2U6IEFsZXJ0UXVlcnkpOiB2b2lkID0+IHtcbiAgICB0aGlzLnByb3BzLm9uRHVwbGljYXRlUXVlcnkoe1xuICAgICAgLi4uc291cmNlLFxuICAgICAgbW9kZWw6IHF1ZXJ5LFxuICAgIH0pO1xuICB9O1xuXG4gIGdldERhdGFTb3VyY2VTZXR0aW5ncyA9IChxdWVyeTogQWxlcnRRdWVyeSk6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzIHwgdW5kZWZpbmVkID0+IHtcbiAgICByZXR1cm4gZ2V0RGF0YVNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MocXVlcnkuZGF0YXNvdXJjZVVpZCk7XG4gIH07XG5cbiAgZ2V0VGhyZXNob2xkc0ZvclF1ZXJpZXMgPSAocXVlcmllczogQWxlcnRRdWVyeVtdKTogUmVjb3JkPHN0cmluZywgVGhyZXNob2xkc0NvbmZpZz4gPT4ge1xuICAgIGNvbnN0IHJlY29yZDogUmVjb3JkPHN0cmluZywgVGhyZXNob2xkc0NvbmZpZz4gPSB7fTtcblxuICAgIGZvciAoY29uc3QgcXVlcnkgb2YgcXVlcmllcykge1xuICAgICAgaWYgKCFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShxdWVyeS5tb2RlbC5jb25kaXRpb25zKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcXVlcnkubW9kZWwuY29uZGl0aW9ucy5mb3JFYWNoKChjb25kaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gY29uZGl0aW9uLmV2YWx1YXRvci5wYXJhbXNbMF07XG4gICAgICAgIGNvbnN0IHJlZklkID0gY29uZGl0aW9uLnF1ZXJ5LnBhcmFtc1swXTtcblxuICAgICAgICBpZiAoY29uZGl0aW9uLmV2YWx1YXRvci50eXBlID09PSAnb3V0c2lkZV9yYW5nZScgfHwgY29uZGl0aW9uLmV2YWx1YXRvci50eXBlID09PSAnd2l0aGluX3JhbmdlJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlY29yZFtyZWZJZF0pIHtcbiAgICAgICAgICByZWNvcmRbcmVmSWRdID0ge1xuICAgICAgICAgICAgbW9kZTogVGhyZXNob2xkc01vZGUuQWJzb2x1dGUsXG4gICAgICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IC1JbmZpbml0eSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29uZmlnLnRoZW1lMi5jb2xvcnMuc3VjY2Vzcy5tYWluLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkW3JlZklkXS5zdGVwcy5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogdGhyZXNob2xkLFxuICAgICAgICAgIGNvbG9yOiBjb25maWcudGhlbWUyLmNvbG9ycy5lcnJvci5tYWluLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZWNvcmQ7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb25EdXBsaWNhdGVRdWVyeSwgb25SdW5RdWVyaWVzLCBxdWVyaWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRocmVzaG9sZEJ5UmVmSWQgPSB0aGlzLmdldFRocmVzaG9sZHNGb3JRdWVyaWVzKHF1ZXJpZXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXt0aGlzLm9uRHJhZ0VuZH0+XG4gICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJhbGVydGluZy1xdWVyaWVzXCIgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICB7KHByb3ZpZGVkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30+XG4gICAgICAgICAgICAgICAge3F1ZXJpZXMubWFwKChxdWVyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IFBhbmVsRGF0YSA9IHRoaXMucHJvcHMuZGF0YT8uW3F1ZXJ5LnJlZklkXSA/PyB7XG4gICAgICAgICAgICAgICAgICAgIHNlcmllczogW10sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuTm90U3RhcnRlZCxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBjb25zdCBkc1NldHRpbmdzID0gdGhpcy5nZXREYXRhU291cmNlU2V0dGluZ3MocXVlcnkpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoIWRzU2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8RGF0YXNvdXJjZU5vdEZvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake3F1ZXJ5LnJlZklkfS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbD17cXVlcnkubW9kZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZURhdGFzb3VyY2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdERhdGFTb3VyY2UgPSBnZXREYXRhc291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncyhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHREYXRhU291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZURhdGFTb3VyY2UoZGVmYXVsdERhdGFTb3VyY2UsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlUXVlcnk9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblJlbW92ZVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXJ5V3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgICAgICAgICAgIGRzU2V0dGluZ3M9e2RzU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VRdWVyeT17dGhpcy5vbkNoYW5nZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlUXVlcnk9e3RoaXMub25SZW1vdmVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVyaWVzPXtxdWVyaWVzfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRGF0YVNvdXJjZT17dGhpcy5vbkNoYW5nZURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25EdXBsaWNhdGVRdWVyeT17b25EdXBsaWNhdGVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBvblJ1blF1ZXJpZXM9e29uUnVuUXVlcmllc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRpbWVSYW5nZT17dGhpcy5vbkNoYW5nZVRpbWVSYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGRzPXt0aHJlc2hvbGRCeVJlZklkW3F1ZXJ5LnJlZklkXX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRocmVzaG9sZD17dGhpcy5vbkNoYW5nZVRocmVzaG9sZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHlNb2RlbChpdGVtOiBBbGVydFF1ZXJ5LCB1aWQ6IHN0cmluZyk6IE9taXQ8QWxlcnRRdWVyeSwgJ2RhdGFzb3VyY2UnPiB7XG4gIHJldHVybiB7XG4gICAgLi4uaXRlbSxcbiAgICBtb2RlbDogb21pdChpdGVtLm1vZGVsLCAnZGF0YXNvdXJjZScpLFxuICAgIGRhdGFzb3VyY2VVaWQ6IHVpZCxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIERhdGFzb3VyY2VOb3RGb3VuZFByb3BzIHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbW9kZWw6IEFsZXJ0RGF0YVF1ZXJ5O1xuICBvblVwZGF0ZURhdGFzb3VyY2U6ICgpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlUXVlcnk6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IERhdGFzb3VyY2VOb3RGb3VuZCA9ICh7IGluZGV4LCBvblVwZGF0ZURhdGFzb3VyY2UsIG9uUmVtb3ZlUXVlcnksIG1vZGVsIH06IERhdGFzb3VyY2VOb3RGb3VuZFByb3BzKSA9PiB7XG4gIGNvbnN0IHJlZklkID0gbW9kZWwucmVmSWQ7XG5cbiAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlRGV0YWlscyA9ICgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlscygoc2hvdykgPT4gIXNob3cpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZURhdGFzb3VyY2UgPSAoKSA9PiB7XG4gICAgb25VcGRhdGVEYXRhc291cmNlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlRdWVyeVdyYXBwZXI+XG4gICAgICA8UXVlcnlPcGVyYXRpb25Sb3cgdGl0bGU9e3JlZklkfSBkcmFnZ2FibGUgaW5kZXg9e2luZGV4fSBpZD17cmVmSWR9IGlzT3Blbj5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuSGVhZGluZz5UaGlzIGRhdGFzb3VyY2UgaGFzIGJlZW4gcmVtb3ZlZDwvQ2FyZC5IZWFkaW5nPlxuICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgVGhlIGRhdGFzb3VyY2UgZm9yIHRoaXMgcXVlcnkgd2FzIG5vdCBmb3VuZCwgaXQgd2FzIGVpdGhlciByZW1vdmVkIG9yIGlzIG5vdCBpbnN0YWxsZWQgY29ycmVjdGx5LlxuICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICA8Q2FyZC5GaWd1cmU+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgLz5cbiAgICAgICAgICA8L0NhcmQuRmlndXJlPlxuICAgICAgICAgIDxDYXJkLkFjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uIGtleT1cInVwZGF0ZVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVVcGRhdGVEYXRhc291cmNlfT5cbiAgICAgICAgICAgICAgVXBkYXRlIGRhdGFzb3VyY2VcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJyZW1vdmVcIiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBvbkNsaWNrPXtvblJlbW92ZVF1ZXJ5fT5cbiAgICAgICAgICAgICAgUmVtb3ZlIHF1ZXJ5XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmQuQWN0aW9ucz5cbiAgICAgICAgICA8Q2FyZC5TZWNvbmRhcnlBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9XCJkZXRhaWxzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGV0YWlsc31cbiAgICAgICAgICAgICAgaWNvbj17c2hvd0RldGFpbHMgPyAnYW5nbGUtdXAnIDogJ2FuZ2xlLWRvd24nfVxuICAgICAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNob3cgZGV0YWlsc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkLlNlY29uZGFyeUFjdGlvbnM+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAge3Nob3dEZXRhaWxzICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KG1vZGVsLCBudWxsLCAyKX08L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUXVlcnlPcGVyYXRpb25Sb3c+XG4gICAgPC9FbXB0eVF1ZXJ5V3JhcHBlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBGQywgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29yZUFwcCxcbiAgRGF0YVF1ZXJ5LFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgZ2V0RGVmYXVsdFJlbGF0aXZlVGltZVJhbmdlLFxuICBHcmFmYW5hVGhlbWUyLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUmVsYXRpdmVUaW1lUmFuZ2UsXG4gIFRocmVzaG9sZHNDb25maWcsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUmVsYXRpdmVUaW1lUmFuZ2VQaWNrZXIsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBpc0V4cHJlc3Npb25RdWVyeSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9ndWFyZHMnO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICdhcHAvZmVhdHVyZXMvcXVlcnkvY29tcG9uZW50cy9RdWVyeUVkaXRvclJvdyc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgVEFCTEUsIFRJTUVTRVJJRVMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgU3VwcG9ydGVkUGFuZWxQbHVnaW5zIH0gZnJvbSAnLi4vUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAnO1xuXG5pbXBvcnQgeyBWaXpXcmFwcGVyIH0gZnJvbSAnLi9WaXpXcmFwcGVyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogUGFuZWxEYXRhO1xuICBxdWVyeTogQWxlcnRRdWVyeTtcbiAgcXVlcmllczogQWxlcnRRdWVyeVtdO1xuICBkc1NldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncztcbiAgb25DaGFuZ2VEYXRhU291cmNlOiAoc2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkNoYW5nZVF1ZXJ5OiAocXVlcnk6IERhdGFRdWVyeSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25DaGFuZ2VUaW1lUmFuZ2U/OiAodGltZVJhbmdlOiBSZWxhdGl2ZVRpbWVSYW5nZSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25SZW1vdmVRdWVyeTogKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IHZvaWQ7XG4gIG9uRHVwbGljYXRlUXVlcnk6IChxdWVyeTogQWxlcnRRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyaWVzOiAoKSA9PiB2b2lkO1xuICBpbmRleDogbnVtYmVyO1xuICB0aHJlc2hvbGRzOiBUaHJlc2hvbGRzQ29uZmlnO1xuICBvbkNoYW5nZVRocmVzaG9sZDogKHRocmVzaG9sZHM6IFRocmVzaG9sZHNDb25maWcsIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeVdyYXBwZXI6IEZDPFByb3BzPiA9ICh7XG4gIGRhdGEsXG4gIGRzU2V0dGluZ3MsXG4gIGluZGV4LFxuICBvbkNoYW5nZURhdGFTb3VyY2UsXG4gIG9uQ2hhbmdlUXVlcnksXG4gIG9uQ2hhbmdlVGltZVJhbmdlLFxuICBvblJ1blF1ZXJpZXMsXG4gIG9uUmVtb3ZlUXVlcnksXG4gIG9uRHVwbGljYXRlUXVlcnksXG4gIHF1ZXJ5LFxuICBxdWVyaWVzLFxuICB0aHJlc2hvbGRzLFxuICBvbkNoYW5nZVRocmVzaG9sZCxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBpc0V4cHJlc3Npb24gPSBpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCk7XG4gIGNvbnN0IFtwbHVnaW5JZCwgY2hhbmdlUGx1Z2luSWRdID0gdXNlU3RhdGU8U3VwcG9ydGVkUGFuZWxQbHVnaW5zPihpc0V4cHJlc3Npb24gPyBUQUJMRSA6IFRJTUVTRVJJRVMpO1xuXG4gIGNvbnN0IHJlbmRlclRpbWVQaWNrZXIgPSAocXVlcnk6IEFsZXJ0UXVlcnksIGluZGV4OiBudW1iZXIpOiBSZWFjdE5vZGUgPT4ge1xuICAgIGlmIChpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkgfHwgIW9uQ2hhbmdlVGltZVJhbmdlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlbGF0aXZlVGltZVJhbmdlUGlja2VyXG4gICAgICAgIHRpbWVSYW5nZT17cXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UgPz8gZ2V0RGVmYXVsdFJlbGF0aXZlVGltZVJhbmdlKCl9XG4gICAgICAgIG9uQ2hhbmdlPXsocmFuZ2UpID0+IG9uQ2hhbmdlVGltZVJhbmdlKHJhbmdlLCBpbmRleCl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPFF1ZXJ5RWRpdG9yUm93PERhdGFRdWVyeT5cbiAgICAgICAgYWxlcnRpbmdcbiAgICAgICAgZGF0YVNvdXJjZT17ZHNTZXR0aW5nc31cbiAgICAgICAgb25DaGFuZ2VEYXRhU291cmNlPXshaXNFeHByZXNzaW9uID8gKHNldHRpbmdzKSA9PiBvbkNoYW5nZURhdGFTb3VyY2Uoc2V0dGluZ3MsIGluZGV4KSA6IHVuZGVmaW5lZH1cbiAgICAgICAgaWQ9e3F1ZXJ5LnJlZklkfVxuICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgIGtleT17cXVlcnkucmVmSWR9XG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIHF1ZXJ5PXtjbG9uZURlZXAocXVlcnkubW9kZWwpfVxuICAgICAgICBvbkNoYW5nZT17KHF1ZXJ5KSA9PiBvbkNoYW5nZVF1ZXJ5KHF1ZXJ5LCBpbmRleCl9XG4gICAgICAgIG9uUmVtb3ZlUXVlcnk9e29uUmVtb3ZlUXVlcnl9XG4gICAgICAgIG9uQWRkUXVlcnk9eygpID0+IG9uRHVwbGljYXRlUXVlcnkoY2xvbmVEZWVwKHF1ZXJ5KSl9XG4gICAgICAgIG9uUnVuUXVlcnk9e29uUnVuUXVlcmllc31cbiAgICAgICAgcXVlcmllcz17cXVlcmllc31cbiAgICAgICAgcmVuZGVySGVhZGVyRXh0cmFzPXsoKSA9PiByZW5kZXJUaW1lUGlja2VyKHF1ZXJ5LCBpbmRleCl9XG4gICAgICAgIGFwcD17Q29yZUFwcC5VbmlmaWVkQWxlcnRpbmd9XG4gICAgICAgIHZpc3VhbGl6YXRpb249e1xuICAgICAgICAgIGRhdGEuc3RhdGUgIT09IExvYWRpbmdTdGF0ZS5Ob3RTdGFydGVkID8gKFxuICAgICAgICAgICAgPFZpeldyYXBwZXJcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgY2hhbmdlUGFuZWw9e2NoYW5nZVBsdWdpbklkfVxuICAgICAgICAgICAgICBjdXJyZW50UGFuZWw9e3BsdWdpbklkfVxuICAgICAgICAgICAgICB0aHJlc2hvbGRzPXt0aHJlc2hvbGRzfVxuICAgICAgICAgICAgICBvblRocmVzaG9sZHNDaGFuZ2U9eyh0aHJlc2hvbGRzKSA9PiBvbkNoYW5nZVRocmVzaG9sZCh0aHJlc2hvbGRzLCBpbmRleCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaGlkZURpc2FibGVRdWVyeT17dHJ1ZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRW1wdHlRdWVyeVdyYXBwZXI6IEZDPHt9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgbGFiZWw6IEFsZXJ0aW5nUXVlcnlXcmFwcGVyO1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoMSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGaWVsZFNldCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBSdWxlRWRpdG9yU2VjdGlvblByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3RlcE5vOiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZUVkaXRvclNlY3Rpb246IEZDPFJ1bGVFZGl0b3JTZWN0aW9uUHJvcHM+ID0gKHsgdGl0bGUsIHN0ZXBObywgY2hpbGRyZW4sIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJlbnR9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3RlcE5vfT57c3RlcE5vfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPEZpZWxkU2V0IGxhYmVsPXt0aXRsZX0gY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRzZXR9PlxuICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvcD59XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0ZpZWxkU2V0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGZpZWxkc2V0OiBjc3NgXG4gICAgbGVnZW5kIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgfVxuICBgLFxuICBwYXJlbnQ6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54bH07XG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgICB9XG4gIGAsXG4gIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogLSR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgYCxcbiAgc3RlcE5vOiBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGhlaWdodDogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgICBsaW5lLWhlaWdodDogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5tYXhDb250cmFzdH07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5jYW52YXN9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUubGd9O1xuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbiAgY29udGVudDogY3NzYFxuICAgIGZsZXg6IDE7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRm9sZGVyUGlja2VyLCBQcm9wcyBhcyBGb2xkZXJQaWNrZXJQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L0ZvbGRlclBpY2tlcic7XG5pbXBvcnQgeyBQZXJtaXNzaW9uTGV2ZWxTdHJpbmcgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGRlciB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnVsZUZvbGRlclBpY2tlclByb3BzIGV4dGVuZHMgT21pdDxGb2xkZXJQaWNrZXJQcm9wcywgJ2luaXRpYWxUaXRsZScgfCAnaW5pdGlhbEZvbGRlcklkJz4ge1xuICB2YWx1ZT86IEZvbGRlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVGb2xkZXJQaWNrZXI6IEZDPFJ1bGVGb2xkZXJQaWNrZXJQcm9wcz4gPSAoeyB2YWx1ZSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb2xkZXJQaWNrZXJcbiAgICAgIHNob3dSb290PXtmYWxzZX1cbiAgICAgIGFsbG93RW1wdHk9e3RydWV9XG4gICAgICBpbml0aWFsVGl0bGU9e3ZhbHVlPy50aXRsZX1cbiAgICAgIGluaXRpYWxGb2xkZXJJZD17dmFsdWU/LmlkfVxuICAgICAgYWNjZXNzQ29udHJvbE1ldGFkYXRhXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBwZXJtaXNzaW9uTGV2ZWw9e1Blcm1pc3Npb25MZXZlbFN0cmluZy5WaWV3fVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGR1bXAsIGxvYWQgfSBmcm9tICdqcy15YW1sJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgQXV0b1NpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIENvZGVFZGl0b3IsIERyYXdlciwgVGFiLCBUYWJzQmFyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IHRhYnMgPSBbeyBsYWJlbDogJ1lhbWwnLCB2YWx1ZTogJ3lhbWwnIH1dO1xuXG5leHBvcnQgY29uc3QgUnVsZUluc3BlY3RvcjogRkM8UHJvcHM+ID0gKHsgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgneWFtbCcpO1xuICBjb25zdCB7IHNldFZhbHVlIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihkcmF3ZXJTdHlsZXMpO1xuXG4gIGNvbnN0IG9uQXBwbHkgPSAoZm9ybVZhbHVlczogUnVsZUZvcm1WYWx1ZXMpID0+IHtcbiAgICAvLyBOZWVkIHRvIGxvb3AgdGhyb3VnaCBhbGwgdmFsdWVzIGFuZCBzZXQgdGhlbSBpbmRpdmlkdWFsbHlcbiAgICAvLyBUT0RPIHRoaXMgaXMgbm90IHR5cGUtc2FmZSA6KFxuICAgIGZvciAoY29uc3Qga2V5IGluIGZvcm1WYWx1ZXMpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHNldFZhbHVlKGtleSwgZm9ybVZhbHVlc1trZXldKTtcbiAgICB9XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERyYXdlclxuICAgICAgdGl0bGU9XCJJbnNwZWN0IEFsZXJ0IHJ1bGVcIlxuICAgICAgc3VidGl0bGU9e1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgICA8UnVsZUluc3BlY3RvclN1YnRpdGxlIHNldEFjdGl2ZVRhYj17c2V0QWN0aXZlVGFifSBhY3RpdmVUYWI9e2FjdGl2ZVRhYn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgID5cbiAgICAgIHthY3RpdmVUYWIgPT09ICd5YW1sJyAmJiA8SW5zcGVjdG9yWWFtbFRhYiBvblN1Ym1pdD17b25BcHBseX0gLz59XG4gICAgPC9EcmF3ZXI+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgU3VidGl0bGVQcm9wcyB7XG4gIGFjdGl2ZVRhYjogc3RyaW5nO1xuICBzZXRBY3RpdmVUYWI6ICh0YWI6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgUnVsZUluc3BlY3RvclN1YnRpdGxlOiBGQzxTdWJ0aXRsZVByb3BzPiA9ICh7IGFjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGFic0Jhcj5cbiAgICAgIHt0YWJzLm1hcCgodGFiLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgIGtleT17YCR7dGFiLnZhbHVlfS0ke2luZGV4fWB9XG4gICAgICAgICAgICBsYWJlbD17dGFiLmxhYmVsfVxuICAgICAgICAgICAgdmFsdWU9e3RhYi52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlVGFiPXsoKSA9PiBzZXRBY3RpdmVUYWIodGFiLnZhbHVlKX1cbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlVGFiID09PSB0YWIudmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvVGFic0Jhcj5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBZYW1sVGFiUHJvcHMge1xuICBvblN1Ym1pdDogKG5ld01vZGVsOiBSdWxlRm9ybVZhbHVlcykgPT4gdm9pZDtcbn1cblxuY29uc3QgSW5zcGVjdG9yWWFtbFRhYjogRkM8WWFtbFRhYlByb3BzPiA9ICh7IG9uU3VibWl0IH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMih5YW1sVGFiU3R5bGUpO1xuICBjb25zdCB7IGdldFZhbHVlcyB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG4gIGNvbnN0IFthbGVydFJ1bGVBc1lhbWwsIHNldEFsZXJ0UnVsZUFzWWFtbF0gPSB1c2VTdGF0ZShkdW1wKGdldFZhbHVlcygpKSk7XG5cbiAgY29uc3Qgb25BcHBseSA9ICgpID0+IHtcbiAgICBvblN1Ym1pdChsb2FkKGFsZXJ0UnVsZUFzWWFtbCkgYXMgUnVsZUZvcm1WYWx1ZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwbHlCdXR0b259PlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkFwcGx5fT5cbiAgICAgICAgICBBcHBseVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8QXV0b1NpemVyIGRpc2FibGVXaWR0aD5cbiAgICAgICAgICB7KHsgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgICAgIDxDb2RlRWRpdG9yXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICBsYW5ndWFnZT1cInlhbWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17YWxlcnRSdWxlQXNZYW1sfVxuICAgICAgICAgICAgICBvbkJsdXI9e3NldEFsZXJ0UnVsZUFzWWFtbH1cbiAgICAgICAgICAgICAgbW9uYWNvT3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIG1pbmltYXA6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXV0b1NpemVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCB5YW1sVGFiU3R5bGUgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRlbnQ6IGNzc2BcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG4gIGFwcGx5QnV0dG9uOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDA7XG4gIGAsXG59KTtcblxuY29uc3QgZHJhd2VyU3R5bGVzID0gKCkgPT4gKHtcbiAgc3VidGl0bGU6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5wdXQsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHZhbHVlPzogc3RyaW5nO1xuICBhZGRMYWJlbD86IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgY3VzdG9tPzogYm9vbGVhbjtcbiAgb25DdXN0b21DaGFuZ2U/OiAoY3VzdG9tOiBib29sZWFuKSA9PiB2b2lkO1xuICB3aWR0aD86IG51bWJlcjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAnYXJpYS1sYWJlbCc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RXaXRoQWRkOiBGQzxQcm9wcz4gPSAoe1xuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIG9wdGlvbnMsXG4gIGNsYXNzTmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHdpZHRoLFxuICBjdXN0b20sXG4gIG9uQ3VzdG9tQ2hhbmdlLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICBhZGRMYWJlbCA9ICcrIEFkZCBuZXcnLFxuICAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCxcbn0pID0+IHtcbiAgY29uc3QgW2lzQ3VzdG9tLCBzZXRJc0N1c3RvbV0gPSB1c2VTdGF0ZShjdXN0b20pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1c3RvbSkge1xuICAgICAgc2V0SXNDdXN0b20oY3VzdG9tKTtcbiAgICB9XG4gIH0sIFtjdXN0b21dKTtcblxuICBjb25zdCBfb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9PiBbLi4ub3B0aW9ucywgeyB2YWx1ZTogJ19fYWRkX18nLCBsYWJlbDogYWRkTGFiZWwgfV0sXG4gICAgW29wdGlvbnMsIGFkZExhYmVsXVxuICApO1xuXG4gIGlmIChpc0N1c3RvbSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGF1dG9Gb2N1cz17IWN1c3RvbX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgb3B0aW9ucz17X29wdGlvbnN9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17KHZhbDogU2VsZWN0YWJsZVZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWw/LnZhbHVlO1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ19fYWRkX18nKSB7XG4gICAgICAgICAgICBzZXRJc0N1c3RvbSh0cnVlKTtcbiAgICAgICAgICAgIGlmIChvbkN1c3RvbUNoYW5nZSkge1xuICAgICAgICAgICAgICBvbkN1c3RvbUNoYW5nZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlKCcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXV0b1NpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuXG5pbXBvcnQgeyBGaWVsZENvbmZpZ1NvdXJjZSwgR3JhZmFuYVRoZW1lMiwgUGFuZWxEYXRhLCBUaHJlc2hvbGRzQ29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBQYW5lbFJlbmRlcmVyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBHcmFwaEZpZWxkQ29uZmlnLCBHcmFwaFRyZXNob2xkc1N0eWxlTW9kZSB9IGZyb20gJ0BncmFmYW5hL3NjaGVtYSc7XG5pbXBvcnQgeyBQYW5lbENvbnRleHQsIFBhbmVsQ29udGV4dFByb3ZpZGVyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGFwcEV2ZW50cyBmcm9tICdhcHAvY29yZS9hcHBfZXZlbnRzJztcbmltcG9ydCB7IFBhbmVsT3B0aW9ucyB9IGZyb20gJ2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlL21vZGVscy5nZW4nO1xuXG5pbXBvcnQgeyB1c2VWaXpIZWlnaHQgfSBmcm9tICcuLi8uLi9ob29rcy91c2VWaXpIZWlnaHQnO1xuaW1wb3J0IHsgU3VwcG9ydGVkUGFuZWxQbHVnaW5zLCBQYW5lbFBsdWdpbnNCdXR0b25Hcm91cCB9IGZyb20gJy4uL1BhbmVsUGx1Z2luc0J1dHRvbkdyb3VwJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogUGFuZWxEYXRhO1xuICBjdXJyZW50UGFuZWw6IFN1cHBvcnRlZFBhbmVsUGx1Z2lucztcbiAgY2hhbmdlUGFuZWw6IChwYW5lbDogU3VwcG9ydGVkUGFuZWxQbHVnaW5zKSA9PiB2b2lkO1xuICB0aHJlc2hvbGRzOiBUaHJlc2hvbGRzQ29uZmlnO1xuICBvblRocmVzaG9sZHNDaGFuZ2U6ICh0aHJlc2hvbGRzOiBUaHJlc2hvbGRzQ29uZmlnKSA9PiB2b2lkO1xufVxuXG50eXBlIFBhbmVsRmllbGRDb25maWcgPSBGaWVsZENvbmZpZ1NvdXJjZTxHcmFwaEZpZWxkQ29uZmlnPjtcblxuZXhwb3J0IGNvbnN0IFZpeldyYXBwZXI6IEZDPFByb3BzPiA9ICh7IGRhdGEsIGN1cnJlbnRQYW5lbCwgY2hhbmdlUGFuZWwsIG9uVGhyZXNob2xkc0NoYW5nZSwgdGhyZXNob2xkcyB9KSA9PiB7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlPFBhbmVsT3B0aW9ucz4oe1xuICAgIGZyYW1lSW5kZXg6IDAsXG4gICAgc2hvd0hlYWRlcjogdHJ1ZSxcbiAgfSk7XG4gIGNvbnN0IHZpekhlaWdodCA9IHVzZVZpekhlaWdodChkYXRhLCBjdXJyZW50UGFuZWwsIG9wdGlvbnMuZnJhbWVJbmRleCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKHZpekhlaWdodCkpO1xuXG4gIGNvbnN0IFtmaWVsZENvbmZpZywgc2V0RmllbGRDb25maWddID0gdXNlU3RhdGU8UGFuZWxGaWVsZENvbmZpZz4oZGVmYXVsdEZpZWxkQ29uZmlnKHRocmVzaG9sZHMsIGRhdGEpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZpZWxkQ29uZmlnKChmaWVsZENvbmZpZykgPT4gKHtcbiAgICAgIC4uLmZpZWxkQ29uZmlnLFxuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgLi4uZmllbGRDb25maWcuZGVmYXVsdHMsXG4gICAgICAgIHRocmVzaG9sZHM6IHRocmVzaG9sZHMsXG4gICAgICAgIHVuaXQ6IGRlZmF1bHRVbml0KGRhdGEpLFxuICAgICAgICBjdXN0b206IHtcbiAgICAgICAgICAuLi5maWVsZENvbmZpZy5kZWZhdWx0cy5jdXN0b20sXG4gICAgICAgICAgdGhyZXNob2xkc1N0eWxlOiB7XG4gICAgICAgICAgICBtb2RlOiBHcmFwaFRyZXNob2xkc1N0eWxlTW9kZS5MaW5lLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pKTtcbiAgfSwgW3RocmVzaG9sZHMsIHNldEZpZWxkQ29uZmlnLCBkYXRhXSk7XG5cbiAgY29uc3QgY29udGV4dDogUGFuZWxDb250ZXh0ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgZXZlbnRCdXM6IGFwcEV2ZW50cyxcbiAgICAgIGNhbkVkaXRUaHJlc2hvbGRzOiB0cnVlLFxuICAgICAgb25UaHJlc2hvbGRzQ2hhbmdlOiBvblRocmVzaG9sZHNDaGFuZ2UsXG4gICAgfSksXG4gICAgW29uVGhyZXNob2xkc0NoYW5nZV1cbiAgKTtcblxuICBpZiAoIW9wdGlvbnMgfHwgIWRhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICA8UGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAgb25DaGFuZ2U9e2NoYW5nZVBhbmVsfSB2YWx1ZT17Y3VycmVudFBhbmVsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8QXV0b1NpemVyPlxuICAgICAgICB7KHsgd2lkdGggfSkgPT4ge1xuICAgICAgICAgIGlmICh3aWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogYCR7dml6SGVpZ2h0fXB4YCwgd2lkdGg6IGAke3dpZHRofXB4YCB9fT5cbiAgICAgICAgICAgICAgPFBhbmVsQ29udGV4dFByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT5cbiAgICAgICAgICAgICAgICA8UGFuZWxSZW5kZXJlclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt2aXpIZWlnaHR9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgcGx1Z2luSWQ9e2N1cnJlbnRQYW5lbH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgb25PcHRpb25zQ2hhbmdlPXtzZXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIGZpZWxkQ29uZmlnPXtmaWVsZENvbmZpZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1BhbmVsQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvQXV0b1NpemVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHZpc0hlaWdodDogbnVtYmVyKSA9PiAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgaGVpZ2h0OiAke3Zpc0hlaWdodCArIHRoZW1lLnNwYWNpbmcuZ3JpZFNpemUgKiA0fXB4O1xuICBgLFxuICBidXR0b25Hcm91cDogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYCxcbn0pO1xuXG5mdW5jdGlvbiBkZWZhdWx0VW5pdChkYXRhOiBQYW5lbERhdGEpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gZGF0YS5zZXJpZXNbMF0/LmZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGQudHlwZSA9PT0gJ251bWJlcicpPy5jb25maWcudW5pdDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEZpZWxkQ29uZmlnKHRocmVzaG9sZHM6IFRocmVzaG9sZHNDb25maWcsIGRhdGE6IFBhbmVsRGF0YSk6IFBhbmVsRmllbGRDb25maWcge1xuICBpZiAoIXRocmVzaG9sZHMpIHtcbiAgICByZXR1cm4geyBkZWZhdWx0czoge30sIG92ZXJyaWRlczogW10gfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgIHRocmVzaG9sZHM6IHRocmVzaG9sZHMsXG4gICAgICB1bml0OiBkZWZhdWx0VW5pdChkYXRhKSxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICB0aHJlc2hvbGRzU3R5bGU6IHtcbiAgICAgICAgICBtb2RlOiBHcmFwaFRyZXNob2xkc1N0eWxlTW9kZS5MaW5lLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIG92ZXJyaWRlczogW10sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGQsIElucHV0Q29udHJvbCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgUnVsZUZvcm1UeXBlLCBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5pbXBvcnQgeyBDbG91ZFJ1bGVzU291cmNlUGlja2VyIH0gZnJvbSAnLi4vQ2xvdWRSdWxlc1NvdXJjZVBpY2tlcic7XG5pbXBvcnQgeyBSdWxlVHlwZVBpY2tlciB9IGZyb20gJy4uL3J1bGUtdHlwZXMvUnVsZVR5cGVQaWNrZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBlZGl0aW5nRXhpc3RpbmdSdWxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRUeXBlOiBGQzxQcm9wcz4gPSAoeyBlZGl0aW5nRXhpc3RpbmdSdWxlIH0pID0+IHtcbiAgY29uc3QgeyBlbmFibGVkUnVsZVR5cGVzLCBkZWZhdWx0UnVsZVR5cGUgfSA9IGdldEF2YWlsYWJsZVJ1bGVUeXBlcygpO1xuXG4gIGNvbnN0IHtcbiAgICBjb250cm9sLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgICBnZXRWYWx1ZXMsXG4gICAgc2V0VmFsdWUsXG4gICAgd2F0Y2gsXG4gIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcyAmIHsgbG9jYXRpb24/OiBzdHJpbmcgfT4oKTtcblxuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHJ1bGVGb3JtVHlwZSA9IHdhdGNoKCd0eXBlJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFlZGl0aW5nRXhpc3RpbmdSdWxlICYmIChcbiAgICAgICAgPEZpZWxkIGVycm9yPXtlcnJvcnMudHlwZT8ubWVzc2FnZX0gaW52YWxpZD17ISFlcnJvcnMudHlwZT8ubWVzc2FnZX0gZGF0YS10ZXN0aWQ9XCJhbGVydC10eXBlLXBpY2tlclwiPlxuICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UgfSB9KSA9PiAoXG4gICAgICAgICAgICAgIDxSdWxlVHlwZVBpY2tlclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSdWxlIHR5cGVcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtnZXRWYWx1ZXMoJ3R5cGUnKSA/PyBkZWZhdWx0UnVsZVR5cGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGVuYWJsZWRUeXBlcz17ZW5hYmxlZFJ1bGVUeXBlc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGFsZXJ0IHR5cGUnIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmllbGQ+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICB7KHJ1bGVGb3JtVHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nIHx8IHJ1bGVGb3JtVHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmcpICYmIChcbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIGxhYmVsPVwiU2VsZWN0IGRhdGEgc291cmNlXCJcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZGF0YVNvdXJjZU5hbWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5kYXRhU291cmNlTmFtZT8ubWVzc2FnZX1cbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZGF0YXNvdXJjZS1waWNrZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICA8Q2xvdWRSdWxlc1NvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgbG9jYXRpb24gaWYgc3dpdGNoaW5nIGRhdGEgc291cmNlcywgYXMgZGlmZmVyZW50IHJ1bGVzIHNvdXJjZSB3aWxsIGhhdmUgZGlmZmVyZW50IGdyb3VwcyBhbmQgbmFtZXNwYWNlc1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSgnbG9jYXRpb24nLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShkcz8ubmFtZSA/PyBudWxsKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbmFtZT1cImRhdGFTb3VyY2VOYW1lXCJcbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgYSBkYXRhIHNvdXJjZScgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0QXZhaWxhYmxlUnVsZVR5cGVzKCkge1xuICBjb25zdCBjYW5DcmVhdGVHcmFmYW5hUnVsZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhcbiAgICBBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nUnVsZUNyZWF0ZSxcbiAgICBjb250ZXh0U3J2Lmhhc0VkaXRQZXJtaXNzaW9uSW5Gb2xkZXJzXG4gICk7XG4gIGNvbnN0IGNhbkNyZWF0ZUNsb3VkUnVsZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nUnVsZUV4dGVybmFsV3JpdGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuICBjb25zdCBkZWZhdWx0UnVsZVR5cGUgPSBjYW5DcmVhdGVHcmFmYW5hUnVsZXMgPyBSdWxlRm9ybVR5cGUuZ3JhZmFuYSA6IFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nO1xuXG4gIGNvbnN0IGVuYWJsZWRSdWxlVHlwZXM6IFJ1bGVGb3JtVHlwZVtdID0gW107XG4gIGlmIChjYW5DcmVhdGVHcmFmYW5hUnVsZXMpIHtcbiAgICBlbmFibGVkUnVsZVR5cGVzLnB1c2goUnVsZUZvcm1UeXBlLmdyYWZhbmEpO1xuICB9XG4gIGlmIChjYW5DcmVhdGVDbG91ZFJ1bGVzKSB7XG4gICAgZW5hYmxlZFJ1bGVUeXBlcy5wdXNoKFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nLCBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHsgZW5hYmxlZFJ1bGVUeXBlcywgZGVmYXVsdFJ1bGVUeXBlIH07XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZm9ybUlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDMzMHB4O1xuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgIH1cbiAgYCxcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEZpZWxkLCBJbnB1dENvbnRyb2wgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSwgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuaW1wb3J0IHsgRXhwcmVzc2lvbkVkaXRvciB9IGZyb20gJy4uL0V4cHJlc3Npb25FZGl0b3InO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3IgfSBmcm9tICcuLi9RdWVyeUVkaXRvcic7XG5cbmV4cG9ydCBjb25zdCBRdWVyeTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuXG4gIGNvbnN0IHR5cGUgPSB3YXRjaCgndHlwZScpO1xuICBjb25zdCBkYXRhU291cmNlTmFtZSA9IHdhdGNoKCdkYXRhU291cmNlTmFtZScpO1xuXG4gIGNvbnN0IGlzR3JhZmFuYU1hbmFnZWRUeXBlID0gdHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmE7XG4gIGNvbnN0IGlzQ2xvdWRBbGVydFJ1bGVUeXBlID0gdHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmc7XG4gIGNvbnN0IGlzUmVjb3JkaW5nUnVsZVR5cGUgPSB0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmc7XG5cbiAgY29uc3Qgc2hvd0Nsb3VkRXhwcmVzc2lvbkVkaXRvciA9IChpc1JlY29yZGluZ1J1bGVUeXBlIHx8IGlzQ2xvdWRBbGVydFJ1bGVUeXBlKSAmJiBkYXRhU291cmNlTmFtZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogVGhpcyBpcyB0aGUgUHJvbVFMIEVkaXRvciBmb3IgQ2xvdWQgcnVsZXMgYW5kIHJlY29yZGluZyBydWxlcyAqL31cbiAgICAgIHtzaG93Q2xvdWRFeHByZXNzaW9uRWRpdG9yICYmIChcbiAgICAgICAgPEZpZWxkIGVycm9yPXtlcnJvcnMuZXhwcmVzc2lvbj8ubWVzc2FnZX0gaW52YWxpZD17ISFlcnJvcnMuZXhwcmVzc2lvbj8ubWVzc2FnZX0+XG4gICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgbmFtZT1cImV4cHJlc3Npb25cIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPEV4cHJlc3Npb25FZGl0b3Igey4uLmZpZWxkfSBkYXRhU291cmNlTmFtZT17ZGF0YVNvdXJjZU5hbWV9IC8+O1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ0EgdmFsaWQgZXhwcmVzc2lvbiBpcyByZXF1aXJlZCcgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZD5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBUaGlzIGlzIHRoZSBlZGl0b3IgZm9yIEdyYWZhbmEgbWFuYWdlZCBydWxlcyAqL31cbiAgICAgIHtpc0dyYWZhbmFNYW5hZ2VkVHlwZSAmJiAoXG4gICAgICAgIDxGaWVsZFxuICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnF1ZXJpZXN9XG4gICAgICAgICAgZXJyb3I9eyghIWVycm9ycy5xdWVyaWVzICYmICdNdXN0IHByb3ZpZGUgYXQgbGVhc3Qgb25lIHZhbGlkIHF1ZXJ5LicpIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgIG5hbWU9XCJxdWVyaWVzXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IDxRdWVyeUVkaXRvciB7Li4uZmllbGR9IC8+fVxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgIHZhbGlkYXRlOiAocXVlcmllcykgPT4gQXJyYXkuaXNBcnJheShxdWVyaWVzKSAmJiAhIXF1ZXJpZXMubGVuZ3RoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSwgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuaW1wb3J0IHsgQ29uZGl0aW9uRmllbGQgfSBmcm9tICcuLi9Db25kaXRpb25GaWVsZCc7XG5pbXBvcnQgeyBSdWxlRWRpdG9yU2VjdGlvbiB9IGZyb20gJy4uL1J1bGVFZGl0b3JTZWN0aW9uJztcblxuaW1wb3J0IHsgQWxlcnRUeXBlIH0gZnJvbSAnLi9BbGVydFR5cGUnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICcuL1F1ZXJ5JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZWRpdGluZ0V4aXN0aW5nUnVsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QW5kQWxlcnRDb25kaXRpb25TdGVwOiBGQzxQcm9wcz4gPSAoeyBlZGl0aW5nRXhpc3RpbmdSdWxlIH0pID0+IHtcbiAgY29uc3QgeyB3YXRjaCB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG5cbiAgY29uc3QgdHlwZSA9IHdhdGNoKCd0eXBlJyk7XG4gIGNvbnN0IGlzR3JhZmFuYU1hbmFnZWRUeXBlID0gdHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmE7XG5cbiAgcmV0dXJuIChcbiAgICA8UnVsZUVkaXRvclNlY3Rpb24gc3RlcE5vPXsxfSB0aXRsZT1cIlNldCBhIHF1ZXJ5IGFuZCBhbGVydCBjb25kaXRpb25cIj5cbiAgICAgIDxBbGVydFR5cGUgZWRpdGluZ0V4aXN0aW5nUnVsZT17ZWRpdGluZ0V4aXN0aW5nUnVsZX0gLz5cbiAgICAgIHt0eXBlICYmIDxRdWVyeSAvPn1cbiAgICAgIHtpc0dyYWZhbmFNYW5hZ2VkVHlwZSAmJiA8Q29uZGl0aW9uRmllbGQgZXhpc3Rpbmc9e2VkaXRpbmdFeGlzdGluZ1J1bGV9IC8+fVxuICAgIDwvUnVsZUVkaXRvclNlY3Rpb24+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG50eXBlIFByb3BzID0ge1xuICB2aXNpYmxlOiBib29sZWFuO1xufTtcblxuY29uc3QgRGlzYWJsZWRUb29sdGlwOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgdmlzaWJsZSA9IGZhbHNlIH0pID0+IHtcbiAgaWYgKCF2aXNpYmxlKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXAgY29udGVudD1cIllvdSBkbyBub3QgYXBwZWFyIHRvIGhhdmUgYW55IGNvbXBhdGlibGUgZGF0YXNvdXJjZXMuXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59O1xuXG5leHBvcnQgeyBEaXNhYmxlZFRvb2x0aXAgfTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUnVsZUZvcm1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuaW1wb3J0IHsgUnVsZVR5cGUsIFNoYXJlZFByb3BzIH0gZnJvbSAnLi9SdWxlVHlwZSc7XG5cbmNvbnN0IEdyYWZhbmFNYW5hZ2VkUnVsZVR5cGU6IEZDPFNoYXJlZFByb3BzPiA9ICh7IHNlbGVjdGVkID0gZmFsc2UsIGRpc2FibGVkLCBvbkNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UnVsZVR5cGVcbiAgICAgIG5hbWU9XCJHcmFmYW5hIG1hbmFnZWQgYWxlcnRcIlxuICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBTdXBwb3J0cyBtdWx0aXBsZSBkYXRhIHNvdXJjZXMgb2YgYW55IGtpbmQuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgVHJhbnNmb3JtIGRhdGEgd2l0aCBleHByZXNzaW9ucy5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgfVxuICAgICAgaW1hZ2U9XCJwdWJsaWMvaW1nL2dyYWZhbmFfaWNvbi5zdmdcIlxuICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgdmFsdWU9e1J1bGVGb3JtVHlwZS5ncmFmYW5hfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IHsgR3JhZmFuYU1hbmFnZWRSdWxlVHlwZSB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbXBvcnQgeyBEaXNhYmxlZFRvb2x0aXAgfSBmcm9tICcuL0Rpc2FibGVkVG9vbHRpcCc7XG5pbXBvcnQgeyBSdWxlVHlwZSwgU2hhcmVkUHJvcHMgfSBmcm9tICcuL1J1bGVUeXBlJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgU2hhcmVkUHJvcHMge1xuICBvbkNsaWNrOiAodmFsdWU6IFJ1bGVGb3JtVHlwZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgTWltaXJGbGF2b3JlZFR5cGU6IEZDPFByb3BzPiA9ICh7IHNlbGVjdGVkID0gZmFsc2UsIGRpc2FibGVkID0gZmFsc2UsIG9uQ2xpY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEaXNhYmxlZFRvb2x0aXAgdmlzaWJsZT17ZGlzYWJsZWR9PlxuICAgICAgPFJ1bGVUeXBlXG4gICAgICAgIG5hbWU9XCJNaW1pciBvciBMb2tpIGFsZXJ0XCJcbiAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgVXNlIGEgTWltaXIsIExva2kgb3IgQ29ydGV4IGRhdGFzb3VyY2UuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgICBpbWFnZT1cInB1YmxpYy9pbWcvYWxlcnRpbmcvbWltaXJfbG9nby5zdmdcIlxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgdmFsdWU9e1J1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgLz5cbiAgICA8L0Rpc2FibGVkVG9vbHRpcD5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IE1pbWlyRmxhdm9yZWRUeXBlIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmltcG9ydCB7IERpc2FibGVkVG9vbHRpcCB9IGZyb20gJy4vRGlzYWJsZWRUb29sdGlwJztcbmltcG9ydCB7IFJ1bGVUeXBlLCBTaGFyZWRQcm9wcyB9IGZyb20gJy4vUnVsZVR5cGUnO1xuXG5jb25zdCBSZWNvcmRpbmdSdWxlVHlwZTogRkM8U2hhcmVkUHJvcHM+ID0gKHsgc2VsZWN0ZWQgPSBmYWxzZSwgZGlzYWJsZWQgPSBmYWxzZSwgb25DbGljayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPERpc2FibGVkVG9vbHRpcCB2aXNpYmxlPXtkaXNhYmxlZH0+XG4gICAgICA8UnVsZVR5cGVcbiAgICAgICAgbmFtZT1cIk1pbWlyIG9yIExva2kgcmVjb3JkaW5nIHJ1bGVcIlxuICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBQcmVjb21wdXRlIGV4cHJlc3Npb25zLlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBTaG91bGQgYmUgY29tYmluZWQgd2l0aCBhbiBhbGVydCBydWxlLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgICBpbWFnZT1cInB1YmxpYy9pbWcvYWxlcnRpbmcvbWltaXJfbG9nb19yZWNvcmRpbmcuc3ZnXCJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHZhbHVlPXtSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmd9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAvPlxuICAgIDwvRGlzYWJsZWRUb29sdGlwPlxuICApO1xufTtcblxuZXhwb3J0IHsgUmVjb3JkaW5nUnVsZVR5cGUgfTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IENhcmQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFNoYXJlZFByb3BzIHtcbiAgaW1hZ2U6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogUmVhY3ROb2RlO1xuICB2YWx1ZTogUnVsZUZvcm1UeXBlO1xufVxuXG4vLyB0aGVzZSBwcm9wZXJ0aWVzIGFyZSBzaGFyZWQgYmV0d2VlbiBhbGwgUnVsZSBUeXBlc1xuZXhwb3J0IGludGVyZmFjZSBTaGFyZWRQcm9wcyB7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiAodmFsdWU6IFJ1bGVGb3JtVHlwZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgUnVsZVR5cGU6IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBpbWFnZSwgc2VsZWN0ZWQgPSBmYWxzZSwgdmFsdWUsIG9uQ2xpY2ssIGRpc2FibGVkID0gZmFsc2UgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgY2FyZFN0eWxlcyA9IGN4KHtcbiAgICBbc3R5bGVzLndyYXBwZXJdOiB0cnVlLFxuICAgIFtzdHlsZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NhcmRTdHlsZXN9IGlzU2VsZWN0ZWQ9e3NlbGVjdGVkfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZhbHVlKX0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgIDxDYXJkLkZpZ3VyZT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgPC9DYXJkLkZpZ3VyZT5cbiAgICAgIDxDYXJkLkhlYWRpbmc+e25hbWV9PC9DYXJkLkhlYWRpbmc+XG4gICAgICA8Q2FyZC5EZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgIHdpZHRoOiAzODBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGAsXG4gIGRpc2FibGVkOiBjc3NgXG4gICAgb3BhY2l0eTogMC41O1xuICBgLFxufSk7XG5cbmV4cG9ydCB7IFJ1bGVUeXBlIH07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhL3NyYyc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VSdWxlc1NvdXJjZXNXaXRoUnVsZXIgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VSdWxlU291cmNlc1dpdGhSdWxlcic7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbXBvcnQgeyBHcmFmYW5hTWFuYWdlZFJ1bGVUeXBlIH0gZnJvbSAnLi9HcmFmYW5hTWFuYWdlZEFsZXJ0JztcbmltcG9ydCB7IE1pbWlyRmxhdm9yZWRUeXBlIH0gZnJvbSAnLi9NaW1pck9yTG9raUFsZXJ0JztcbmltcG9ydCB7IFJlY29yZGluZ1J1bGVUeXBlIH0gZnJvbSAnLi9NaW1pck9yTG9raVJlY29yZGluZ1J1bGUnO1xuXG5pbnRlcmZhY2UgUnVsZVR5cGVQaWNrZXJQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IFJ1bGVGb3JtVHlwZSkgPT4gdm9pZDtcbiAgc2VsZWN0ZWQ6IFJ1bGVGb3JtVHlwZTtcbiAgZW5hYmxlZFR5cGVzOiBSdWxlRm9ybVR5cGVbXTtcbn1cblxuY29uc3QgUnVsZVR5cGVQaWNrZXI6IEZDPFJ1bGVUeXBlUGlja2VyUHJvcHM+ID0gKHsgc2VsZWN0ZWQsIG9uQ2hhbmdlLCBlbmFibGVkVHlwZXMgfSkgPT4ge1xuICBjb25zdCBydWxlc1NvdXJjZXNXaXRoUnVsZXIgPSB1c2VSdWxlc1NvdXJjZXNXaXRoUnVsZXIoKTtcbiAgY29uc3QgaGFzTG90ZXhEYXRhc291cmNlcyA9ICFpc0VtcHR5KHJ1bGVzU291cmNlc1dpdGhSdWxlcik7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBnYXA9ezJ9PlxuICAgICAgICB7ZW5hYmxlZFR5cGVzLmluY2x1ZGVzKFJ1bGVGb3JtVHlwZS5ncmFmYW5hKSAmJiAoXG4gICAgICAgICAgPEdyYWZhbmFNYW5hZ2VkUnVsZVR5cGUgc2VsZWN0ZWQ9e3NlbGVjdGVkID09PSBSdWxlRm9ybVR5cGUuZ3JhZmFuYX0gb25DbGljaz17b25DaGFuZ2V9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtlbmFibGVkVHlwZXMuaW5jbHVkZXMoUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmcpICYmIChcbiAgICAgICAgICA8TWltaXJGbGF2b3JlZFR5cGVcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZCA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshaGFzTG90ZXhEYXRhc291cmNlc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7ZW5hYmxlZFR5cGVzLmluY2x1ZGVzKFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZykgJiYgKFxuICAgICAgICAgIDxSZWNvcmRpbmdSdWxlVHlwZVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshaGFzTG90ZXhEYXRhc291cmNlc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9TdGFjaz5cbiAgICAgIHtlbmFibGVkVHlwZXMuaW5jbHVkZXMoUnVsZUZvcm1UeXBlLmdyYWZhbmEpICYmIChcbiAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT17c3R5bGVzLm1ldGF9PlxuICAgICAgICAgIFNlbGVjdCAmbGRxdW87R3JhZmFuYSBtYW5hZ2VkJnJkcXVvOyB1bmxlc3MgeW91IGhhdmUgYSBNaW1pciwgTG9raSBvciBDb3J0ZXggZGF0YSBzb3VyY2Ugd2l0aCB0aGUgUnVsZXIgQVBJXG4gICAgICAgICAgZW5hYmxlZC5cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIG1ldGE6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5kaXNhYmxlZH07XG4gIGAsXG59KTtcblxuZXhwb3J0IHsgUnVsZVR5cGVQaWNrZXIgfTtcbiIsImltcG9ydCB7IFZhbGlkYXRlUmVzdWx0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgaXNFeHByZXNzaW9uUXVlcnkgfSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvZ3VhcmRzJztcbmltcG9ydCB7IEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5leHBvcnQgZnVuY3Rpb24gcXVlcmllc1dpdGhVcGRhdGVkUmVmZXJlbmNlcyhcbiAgcXVlcmllczogQWxlcnRRdWVyeVtdLFxuICBwcmV2aW91c1JlZklkOiBzdHJpbmcsXG4gIG5ld1JlZklkOiBzdHJpbmdcbik6IEFsZXJ0UXVlcnlbXSB7XG4gIHJldHVybiBxdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICBpZiAocHJldmlvdXNSZWZJZCA9PT0gbmV3UmVmSWQpIHtcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKSkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGlzTWF0aEV4cHJlc3Npb24gPSBxdWVyeS5tb2RlbC50eXBlID09PSAnbWF0aCc7XG4gICAgY29uc3QgaXNSZWR1Y2VFeHByZXNzaW9uID0gcXVlcnkubW9kZWwudHlwZSA9PT0gJ3JlZHVjZSc7XG4gICAgY29uc3QgaXNSZXNhbXBsZUV4cHJlc3Npb24gPSBxdWVyeS5tb2RlbC50eXBlID09PSAncmVzYW1wbGUnO1xuICAgIGNvbnN0IGlzQ2xhc3NpY0V4cHJlc3Npb24gPSBxdWVyeS5tb2RlbC50eXBlID09PSAnY2xhc3NpY19jb25kaXRpb25zJztcblxuICAgIGlmIChpc01hdGhFeHByZXNzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAuLi5xdWVyeS5tb2RlbCxcbiAgICAgICAgICBleHByZXNzaW9uOiB1cGRhdGVNYXRoRXhwcmVzc2lvblJlZnMocXVlcnkubW9kZWwuZXhwcmVzc2lvbiA/PyAnJywgcHJldmlvdXNSZWZJZCwgbmV3UmVmSWQpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZXNhbXBsZUV4cHJlc3Npb24gfHwgaXNSZWR1Y2VFeHByZXNzaW9uKSB7XG4gICAgICBjb25zdCBpc1JlZmVyZW5jaW5nID0gcXVlcnkubW9kZWwuZXhwcmVzc2lvbiA9PT0gcHJldmlvdXNSZWZJZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgLi4ucXVlcnkubW9kZWwsXG4gICAgICAgICAgZXhwcmVzc2lvbjogaXNSZWZlcmVuY2luZyA/IG5ld1JlZklkIDogcXVlcnkubW9kZWwuZXhwcmVzc2lvbixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzQ2xhc3NpY0V4cHJlc3Npb24pIHtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBxdWVyeS5tb2RlbC5jb25kaXRpb25zPy5tYXAoKGNvbmRpdGlvbikgPT4gKHtcbiAgICAgICAgLi4uY29uZGl0aW9uLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIC4uLmNvbmRpdGlvbi5xdWVyeSxcbiAgICAgICAgICBwYXJhbXM6IGNvbmRpdGlvbi5xdWVyeS5wYXJhbXMubWFwKChwYXJhbTogc3RyaW5nKSA9PiAocGFyYW0gPT09IHByZXZpb3VzUmVmSWQgPyBuZXdSZWZJZCA6IHBhcmFtKSksXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiB7IC4uLnF1ZXJ5LCBtb2RlbDogeyAuLi5xdWVyeS5tb2RlbCwgY29uZGl0aW9ucyB9IH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1hdGhFeHByZXNzaW9uUmVmcyhleHByZXNzaW9uOiBzdHJpbmcsIHByZXZpb3VzUmVmSWQ6IHN0cmluZywgbmV3UmVmSWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IG9sZEV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKCcoXFxcXCQnICsgcHJldmlvdXNSZWZJZCArICdcXFxcYil8KFxcXFwkeycgKyBwcmV2aW91c1JlZklkICsgJ30pJywgJ2dtJyk7XG4gIGNvbnN0IG5ld0V4cHJlc3Npb24gPSAnJHsnICsgbmV3UmVmSWQgKyAnfSc7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb24ucmVwbGFjZShvbGRFeHByZXNzaW9uLCBuZXdFeHByZXNzaW9uKTtcbn1cblxuLy8gc29tZSBnYXRld2F5cyAobGlrZSBJc3Rpbykgd2lsbCBkZWNvZGUgXCIvXCIgYW5kIFwiXFxcIiBjaGFyYWN0ZXJzIOKAkyB0aGlzIHdpbGwgY2F1c2UgNDA0IGVycm9ycyBmb3IgYW55IEFQSSBjYWxsXG4vLyB0aGF0IGluY2x1ZGVzIHRoZXNlIHZhbHVlcyBpbiB0aGUgVVJMIChpZS4gL215L3BhdGglMmZ0by9yZXNvdXJjZSAtPiAvbXkvcGF0aC90by9yZXNvdXJjZSlcbi8vXG4vLyBzZWUgaHR0cHM6Ly9pc3Rpby5pby9sYXRlc3QvZG9jcy9vcHMvYmVzdC1wcmFjdGljZXMvc2VjdXJpdHkvI2N1c3RvbWl6ZS15b3VyLXN5c3RlbS1vbi1wYXRoLW5vcm1hbGl6YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ZvclBhdGhTZXBhcmF0b3IodmFsdWU6IHN0cmluZyk6IFZhbGlkYXRlUmVzdWx0IHtcbiAgY29uc3QgY29udGFpbnNQYXRoU2VwYXJhdG9yID0gdmFsdWUuaW5jbHVkZXMoJy8nKSB8fCB2YWx1ZS5pbmNsdWRlcygnXFxcXCcpO1xuICBpZiAoY29udGFpbnNQYXRoU2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuICdDYW5ub3QgY29udGFpbiBcIi9cIiBvciBcIlxcXFxcIiBjaGFyYWN0ZXJzJztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydFF1ZXJpZXNTdGF0dXMocXVlcmllczogQWxlcnRRdWVyeVtdKSB7XG4gIGNvbnN0IGFsbERhdGFTb3VyY2VzQXZhaWxhYmxlID0gdXNlTWVtbyhcbiAgICAoKSA9PiBxdWVyaWVzLmV2ZXJ5KChxdWVyeSkgPT4gQm9vbGVhbihnZXREYXRhU291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncyhxdWVyeS5kYXRhc291cmNlVWlkKSkpLFxuICAgIFtxdWVyaWVzXVxuICApO1xuXG4gIHJldHVybiB7IGFsbERhdGFTb3VyY2VzQXZhaWxhYmxlIH07XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgRm9sZGVyRFRPIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgZmV0Y2hGb2xkZXJJZk5vdEZldGNoZWRBY3Rpb24gfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3JlZHV4JztcblxuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuaW50ZXJmYWNlIFJldHVybkJhZyB7XG4gIGZvbGRlcj86IEZvbGRlckRUTztcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvbGRlcih1aWQ/OiBzdHJpbmcpOiBSZXR1cm5CYWcge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGZvbGRlclJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mb2xkZXJzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodWlkKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaEZvbGRlcklmTm90RmV0Y2hlZEFjdGlvbih1aWQpKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgdWlkXSk7XG5cbiAgaWYgKHVpZCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBmb2xkZXJSZXF1ZXN0c1t1aWRdIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcbiAgICByZXR1cm4ge1xuICAgICAgZm9sZGVyOiByZXF1ZXN0LnJlc3VsdCxcbiAgICAgIGxvYWRpbmc6IHJlcXVlc3QubG9hZGluZyxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgUnVsZXJSdWxlRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgZ2V0UnVsZXNQZXJtaXNzaW9ucyB9IGZyb20gJy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcbmltcG9ydCB7IGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uL3V0aWxzL3J1bGVzJztcblxuaW1wb3J0IHsgdXNlRm9sZGVyIH0gZnJvbSAnLi91c2VGb2xkZXInO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuaW50ZXJmYWNlIFJlc3VsdEJhZyB7XG4gIGlzRWRpdGFibGU/OiBib29sZWFuO1xuICBpc1JlbW92YWJsZT86IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc1J1bGVFZGl0YWJsZShydWxlc1NvdXJjZU5hbWU6IHN0cmluZywgcnVsZT86IFJ1bGVyUnVsZURUTyk6IFJlc3VsdEJhZyB7XG4gIGNvbnN0IGRhdGFTb3VyY2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlcyk7XG4gIGNvbnN0IGZvbGRlclVJRCA9IHJ1bGUgJiYgaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUpID8gcnVsZS5ncmFmYW5hX2FsZXJ0Lm5hbWVzcGFjZV91aWQgOiB1bmRlZmluZWQ7XG5cbiAgY29uc3QgcnVsZVBlcm1pc3Npb24gPSBnZXRSdWxlc1Blcm1pc3Npb25zKHJ1bGVzU291cmNlTmFtZSk7XG5cbiAgY29uc3QgeyBmb2xkZXIsIGxvYWRpbmcgfSA9IHVzZUZvbGRlcihmb2xkZXJVSUQpO1xuXG4gIGlmICghcnVsZSkge1xuICAgIHJldHVybiB7IGlzRWRpdGFibGU6IGZhbHNlLCBpc1JlbW92YWJsZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlIH07XG4gIH1cblxuICAvLyBHcmFmYW5hIHJ1bGVzIGNhbiBiZSBlZGl0ZWQgaWYgdXNlciBjYW4gZWRpdCB0aGUgZm9sZGVyIHRoZXkncmUgaW5cbiAgLy8gV2hlbiBSQkFDIGlzIGRpc2FibGVkIGFjY2VzcyB0byBhIGZvbGRlciBpcyB0aGUgb25seSByZXF1aXJlbWVudCBmb3IgbWFuYWdpbmcgcnVsZXNcbiAgLy8gV2hlbiBSQkFDIGlzIGVuYWJsZWQgdGhlIGFwcHJvcHJpYXRlIGFsZXJ0aW5nIHBlcm1pc3Npb25zIG5lZWQgdG8gYmUgbWV0XG4gIGlmIChpc0dyYWZhbmFSdWxlclJ1bGUocnVsZSkpIHtcbiAgICBpZiAoIWZvbGRlclVJRCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgUnVsZSAke3J1bGUuZ3JhZmFuYV9hbGVydC50aXRsZX0gZG9lcyBub3QgaGF2ZSBhIGZvbGRlciB1aWQsIGNhbm5vdCBkZXRlcm1pbmUgaWYgaXQgaXMgZWRpdGFibGUuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW5FZGl0R3JhZmFuYVJ1bGVzID0gY29udGV4dFNydi5oYXNBY2Nlc3MocnVsZVBlcm1pc3Npb24udXBkYXRlLCBmb2xkZXI/LmNhblNhdmUgPz8gZmFsc2UpO1xuICAgIGNvbnN0IGNhblJlbW92ZUdyYWZhbmFSdWxlcyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKHJ1bGVQZXJtaXNzaW9uLmRlbGV0ZSwgZm9sZGVyPy5jYW5TYXZlID8/IGZhbHNlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc0VkaXRhYmxlOiBjYW5FZGl0R3JhZmFuYVJ1bGVzLFxuICAgICAgaXNSZW1vdmFibGU6IGNhblJlbW92ZUdyYWZhbmFSdWxlcyxcbiAgICAgIGxvYWRpbmcsXG4gICAgfTtcbiAgfVxuXG4gIC8vIHByb20gcnVsZXMgYXJlIG9ubHkgZWRpdGFibGUgYnkgdXNlcnMgd2l0aCBFZGl0b3Igcm9sZSBhbmQgb25seSBpZiBydWxlcyBzb3VyY2Ugc3VwcG9ydHMgZWRpdGluZ1xuICBjb25zdCBpc1J1bGVyQXZhaWxhYmxlID0gQm9vbGVhbihkYXRhU291cmNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ/LnJ1bGVyQ29uZmlnKTtcbiAgY29uc3QgY2FuRWRpdENsb3VkUnVsZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi51cGRhdGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuICBjb25zdCBjYW5SZW1vdmVDbG91ZFJ1bGVzID0gY29udGV4dFNydi5oYXNBY2Nlc3MocnVsZVBlcm1pc3Npb24uZGVsZXRlLCBjb250ZXh0U3J2LmlzRWRpdG9yKTtcblxuICByZXR1cm4ge1xuICAgIGlzRWRpdGFibGU6IGNhbkVkaXRDbG91ZFJ1bGVzICYmIGlzUnVsZXJBdmFpbGFibGUsXG4gICAgaXNSZW1vdmFibGU6IGNhblJlbW92ZUNsb3VkUnVsZXMgJiYgaXNSdWxlckF2YWlsYWJsZSxcbiAgICBsb2FkaW5nOiBkYXRhU291cmNlc1tydWxlc1NvdXJjZU5hbWVdPy5sb2FkaW5nLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFByb21CYXNlZERhdGFTb3VyY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5cbmltcG9ydCB7IGdldERhdGFTb3VyY2VCeU5hbWUgfSBmcm9tICcuLi91dGlscy9kYXRhc291cmNlJztcblxuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJ1bGVzU291cmNlc1dpdGhSdWxlcigpOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nc1tdIHtcbiAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzKTtcblxuICBjb25zdCBkYXRhU291cmNlc1dpdGhSdWxlciA9IE9iamVjdC52YWx1ZXMoZGF0YVNvdXJjZXMpXG4gICAgLm1hcCgoZHMpID0+IGRzLnJlc3VsdClcbiAgICAuZmlsdGVyKChkcyk6IGRzIGlzIFByb21CYXNlZERhdGFTb3VyY2UgPT4gQm9vbGVhbihkcz8ucnVsZXJDb25maWcpKTtcbiAgLy8gdHJ5IGZldGNoaW5nIHJ1bGVzIGZvciBlYWNoIHByb21ldGhldXMgdG8gc2VlIGlmIGl0IGhhcyBydWxlclxuXG4gIHJldHVybiBkYXRhU291cmNlc1dpdGhSdWxlclxuICAgIC5tYXAoKGRzKSA9PiBnZXREYXRhU291cmNlQnlOYW1lKGRzLm5hbWUpKVxuICAgIC5maWx0ZXIoKGRzQ29uZmlnKTogZHNDb25maWcgaXMgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MgPT4gQm9vbGVhbihkc0NvbmZpZykpO1xufVxuIiwiaW1wb3J0IHsgUGFuZWxEYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFNUQVQsIFRJTUVTRVJJRVMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVml6SGVpZ2h0KGRhdGE6IFBhbmVsRGF0YSwgcGx1Z2luSWQ6IHN0cmluZywgZnJhbWVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGlmIChwbHVnaW5JZCA9PT0gVElNRVNFUklFUyB8fCBwbHVnaW5JZCA9PT0gU1RBVCB8fCBkYXRhSXNFbXB0eShkYXRhKSkge1xuICAgIHJldHVybiAyMDA7XG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSBkYXRhLnNlcmllc1tmcmFtZUluZGV4XS5maWVsZHNbMF0udmFsdWVzLmxlbmd0aDtcbiAgY29uc3Qgcm93SGVpZ2h0ID0gdGhlbWUuc3BhY2luZy5ncmlkU2l6ZSAqIDU7XG5cbiAgLypcbiAgIENhbGN1bGF0ZSBob3cgaWYgd2UgY2FuIG1ha2UgIHRoZSB0YWJsZSBzbWFsbGVyIHRoYW4gMjAwcHhcbiAgIGZvciB3aGVuIHdlIG9ubHkgaGF2ZSAxLTIgdmFsdWVzXG4gICBUaGUgZXh0cmEgcm93SGVpZ2h0IGlzIHRvIGFjY29tbW9kYXRlIHRoZSBoZWFkZXIuXG4gICovXG4gIGNvbnN0IHRhYmxlSGVpZ2h0ID0gdmFsdWVzICogcm93SGVpZ2h0ICsgcm93SGVpZ2h0O1xuXG4gIHJldHVybiB0YWJsZUhlaWdodCA+PSAyMDAgPyAyMDAgOiB0YWJsZUhlaWdodDtcbn1cblxuZnVuY3Rpb24gZGF0YUlzRW1wdHkoZGF0YTogUGFuZWxEYXRhKSB7XG4gIHJldHVybiAhZGF0YSB8fCAhZGF0YS5zZXJpZXNbMF0gfHwgIWRhdGEuc2VyaWVzWzBdLmZpZWxkc1swXSB8fCAhZGF0YS5zZXJpZXNbMF0uZmllbGRzWzBdLnZhbHVlcztcbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBPcGVyYXRvckZ1bmN0aW9uLCBSZXBsYXlTdWJqZWN0LCBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5pbXBvcnQge1xuICBkYXRhRnJhbWVGcm9tSlNPTixcbiAgRGF0YUZyYW1lSlNPTixcbiAgZ2V0RGVmYXVsdFRpbWVSYW5nZSxcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIHJhbmdlVXRpbCxcbiAgVGltZVJhbmdlLFxuICB3aXRoTG9hZGluZ0luZGljYXRvcixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGZXRjaFJlc3BvbnNlLCBnZXREYXRhU291cmNlU3J2LCB0b0RhdGFRdWVyeUVycm9yIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCYWNrZW5kU3J2LCBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgaXNFeHByZXNzaW9uUXVlcnkgfSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvZ3VhcmRzJztcbmltcG9ydCB7IGNhbmNlbE5ldHdvcmtSZXF1ZXN0c09uVW5zdWJzY3JpYmUgfSBmcm9tICdhcHAvZmVhdHVyZXMvcXVlcnkvc3RhdGUvcHJvY2Vzc2luZy9jYW5jZWxlcic7XG5pbXBvcnQgeyBzZXRTdHJ1Y3R1cmVSZXZpc2lvbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9xdWVyeS9zdGF0ZS9wcm9jZXNzaW5nL3JldmlzaW9uJztcbmltcG9ydCB7IHByZVByb2Nlc3NQYW5lbERhdGEgfSBmcm9tICdhcHAvZmVhdHVyZXMvcXVlcnkvc3RhdGUvcnVuUmVxdWVzdCc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgZ2V0VGltZVJhbmdlRm9yRXhwcmVzc2lvbiB9IGZyb20gJy4uL3V0aWxzL3RpbWVSYW5nZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRpbmdRdWVyeVJlc3VsdCB7XG4gIGZyYW1lczogRGF0YUZyYW1lSlNPTltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0aW5nUXVlcnlSZXNwb25zZSB7XG4gIHJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIEFsZXJ0aW5nUXVlcnlSZXN1bHQ+O1xufVxuZXhwb3J0IGNsYXNzIEFsZXJ0aW5nUXVlcnlSdW5uZXIge1xuICBwcml2YXRlIHN1YmplY3Q6IFJlcGxheVN1YmplY3Q8UmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPj47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uPzogVW5zdWJzY3JpYmFibGU7XG4gIHByaXZhdGUgbGFzdFJlc3VsdDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmRTcnYgPSBnZXRCYWNrZW5kU3J2KCksIHByaXZhdGUgZGF0YVNvdXJjZVNydiA9IGdldERhdGFTb3VyY2VTcnYoKSkge1xuICAgIHRoaXMuc3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICAgIHRoaXMubGFzdFJlc3VsdCA9IHt9O1xuICB9XG5cbiAgZ2V0KCk6IE9ic2VydmFibGU8UmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPj4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBhc3luYyBydW4ocXVlcmllczogQWxlcnRRdWVyeVtdKSB7XG4gICAgaWYgKHF1ZXJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBlbXB0eSA9IGluaXRpYWxTdGF0ZShxdWVyaWVzLCBMb2FkaW5nU3RhdGUuRG9uZSk7XG4gICAgICByZXR1cm4gdGhpcy5zdWJqZWN0Lm5leHQoZW1wdHkpO1xuICAgIH1cblxuICAgIC8vIGRvIG5vdCBleGVjdXRlIGlmIG9uZSBtb3JlIG9mIHRoZSBxdWVyaWVzIGFyZSBub3QgcnVubmFibGUsXG4gICAgLy8gZm9yIGV4YW1wbGUgbm90IGNvbXBsZXRlbHkgY29uZmlndXJlZFxuICAgIGZvciAoY29uc3QgcXVlcnkgb2YgcXVlcmllcykge1xuICAgICAgaWYgKCFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICAgICAgY29uc3QgZHMgPSBhd2FpdCB0aGlzLmRhdGFTb3VyY2VTcnYuZ2V0KHF1ZXJ5LmRhdGFzb3VyY2VVaWQpO1xuICAgICAgICBpZiAoZHMuZmlsdGVyUXVlcnkgJiYgIWRzLmZpbHRlclF1ZXJ5KHF1ZXJ5Lm1vZGVsKSkge1xuICAgICAgICAgIGNvbnN0IGVtcHR5ID0gaW5pdGlhbFN0YXRlKHF1ZXJpZXMsIExvYWRpbmdTdGF0ZS5Eb25lKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0Lm5leHQoZW1wdHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBydW5SZXF1ZXN0KHRoaXMuYmFja2VuZFNydiwgcXVlcmllcykuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChkYXRhUGVyUXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFJlc3VsdCA9IGFwcGx5Q2hhbmdlKGRhdGFQZXJRdWVyeSwgKHJlZklkLCBkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmxhc3RSZXN1bHRbcmVmSWRdO1xuICAgICAgICAgIGNvbnN0IHByZVByb2Nlc3NlZCA9IHByZVByb2Nlc3NQYW5lbERhdGEoZGF0YSwgcHJldmlvdXMpO1xuICAgICAgICAgIHJldHVybiBzZXRTdHJ1Y3R1cmVSZXZpc2lvbihwcmVQcm9jZXNzZWQsIHByZXZpb3VzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sYXN0UmVzdWx0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodGhpcy5sYXN0UmVzdWx0KTtcbiAgICAgIH0sXG5cbiAgICAgIGVycm9yOiAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IG1hcEVycm9yVG9QYW5lbERhdGEodGhpcy5sYXN0UmVzdWx0LCBlcnJvcik7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHRoaXMubGFzdFJlc3VsdCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIGlmICghdGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIGxldCByZXF1ZXN0SXNSdW5uaW5nID0gZmFsc2U7XG5cbiAgICBjb25zdCBuZXh0UmVzdWx0ID0gYXBwbHlDaGFuZ2UodGhpcy5sYXN0UmVzdWx0LCAocmVmSWQsIGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgICAgICByZXF1ZXN0SXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChyZXF1ZXN0SXNSdW5uaW5nKSB7XG4gICAgICB0aGlzLnN1YmplY3QubmV4dChuZXh0UmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YmplY3QpIHtcbiAgICAgIHRoaXMuc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cbn1cblxuY29uc3QgcnVuUmVxdWVzdCA9IChiYWNrZW5kU3J2OiBCYWNrZW5kU3J2LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pOiBPYnNlcnZhYmxlPFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+ID0+IHtcbiAgY29uc3QgaW5pdGlhbCA9IGluaXRpYWxTdGF0ZShxdWVyaWVzLCBMb2FkaW5nU3RhdGUuTG9hZGluZyk7XG4gIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgZGF0YTogeyBkYXRhOiBxdWVyaWVzIH0sXG4gICAgdXJsOiAnL2FwaS92MS9ldmFsJyxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICByZXF1ZXN0SWQ6IHV1aWR2NCgpLFxuICB9O1xuXG4gIHJldHVybiB3aXRoTG9hZGluZ0luZGljYXRvcih7XG4gICAgd2hpbGVMb2FkaW5nOiBpbml0aWFsLFxuICAgIHNvdXJjZTogYmFja2VuZFNydi5mZXRjaDxBbGVydGluZ1F1ZXJ5UmVzcG9uc2U+KHJlcXVlc3QpLnBpcGUoXG4gICAgICBtYXBUb1BhbmVsRGF0YShpbml0aWFsKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiBvZihtYXBFcnJvclRvUGFuZWxEYXRhKGluaXRpYWwsIGVycm9yKSkpLFxuICAgICAgY2FuY2VsTmV0d29ya1JlcXVlc3RzT25VbnN1YnNjcmliZShiYWNrZW5kU3J2LCByZXF1ZXN0LnJlcXVlc3RJZCksXG4gICAgICBzaGFyZSgpXG4gICAgKSxcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAocXVlcmllczogQWxlcnRRdWVyeVtdLCBzdGF0ZTogTG9hZGluZ1N0YXRlKTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9PiB7XG4gIHJldHVybiBxdWVyaWVzLnJlZHVjZSgoZGF0YUJ5UXVlcnk6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4sIHF1ZXJ5KSA9PiB7XG4gICAgZGF0YUJ5UXVlcnlbcXVlcnkucmVmSWRdID0ge1xuICAgICAgc3RhdGUsXG4gICAgICBzZXJpZXM6IFtdLFxuICAgICAgdGltZVJhbmdlOiBnZXRUaW1lUmFuZ2UocXVlcnksIHF1ZXJpZXMpLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGF0YUJ5UXVlcnk7XG4gIH0sIHt9KTtcbn07XG5cbmNvbnN0IGdldFRpbWVSYW5nZSA9IChxdWVyeTogQWxlcnRRdWVyeSwgcXVlcmllczogQWxlcnRRdWVyeVtdKTogVGltZVJhbmdlID0+IHtcbiAgaWYgKGlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKSkge1xuICAgIGNvbnN0IHJlbGF0aXZlID0gZ2V0VGltZVJhbmdlRm9yRXhwcmVzc2lvbihxdWVyeS5tb2RlbCwgcXVlcmllcyk7XG4gICAgcmV0dXJuIHJhbmdlVXRpbC5yZWxhdGl2ZVRvVGltZVJhbmdlKHJlbGF0aXZlKTtcbiAgfVxuXG4gIGlmICghcXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UpIHtcbiAgICBjb25zb2xlLndhcm4oYFF1ZXJ5IHdpdGggcmVmSWQ6ICR7cXVlcnkucmVmSWR9IGRpZCBub3QgaGF2ZSBhbnkgcmVsYXRpdmUgdGltZSByYW5nZSwgdXNpbmcgZGVmYXVsdC5gKTtcbiAgICByZXR1cm4gZ2V0RGVmYXVsdFRpbWVSYW5nZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJhbmdlVXRpbC5yZWxhdGl2ZVRvVGltZVJhbmdlKHF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlKTtcbn07XG5cbmNvbnN0IG1hcFRvUGFuZWxEYXRhID0gKFxuICBkYXRhQnlRdWVyeTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPlxuKTogT3BlcmF0b3JGdW5jdGlvbjxGZXRjaFJlc3BvbnNlPEFsZXJ0aW5nUXVlcnlSZXNwb25zZT4sIFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+ID0+IHtcbiAgcmV0dXJuIG1hcCgocmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IHJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPSB7fTtcblxuICAgIGZvciAoY29uc3QgW3JlZklkLCByZXN1bHRdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEucmVzdWx0cykpIHtcbiAgICAgIHJlc3VsdHNbcmVmSWRdID0ge1xuICAgICAgICB0aW1lUmFuZ2U6IGRhdGFCeVF1ZXJ5W3JlZklkXS50aW1lUmFuZ2UsXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgICAgc2VyaWVzOiByZXN1bHQuZnJhbWVzLm1hcChkYXRhRnJhbWVGcm9tSlNPTiksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9KTtcbn07XG5cbmNvbnN0IG1hcEVycm9yVG9QYW5lbERhdGEgPSAobGFzdFJlc3VsdDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiwgZXJyb3I6IEVycm9yKTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9PiB7XG4gIGNvbnN0IHF1ZXJ5RXJyb3IgPSB0b0RhdGFRdWVyeUVycm9yKGVycm9yKTtcblxuICByZXR1cm4gYXBwbHlDaGFuZ2UobGFzdFJlc3VsdCwgKHJlZklkLCBkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkVycm9yLFxuICAgICAgZXJyb3I6IHF1ZXJ5RXJyb3IsXG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBhcHBseUNoYW5nZSA9IChcbiAgaW5pdGlhbDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPixcbiAgY2hhbmdlOiAocmVmSWQ6IHN0cmluZywgZGF0YTogUGFuZWxEYXRhKSA9PiBQYW5lbERhdGFcbik6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPT4ge1xuICBjb25zdCBuZXh0UmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+ID0ge307XG5cbiAgZm9yIChjb25zdCBbcmVmSWQsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKGluaXRpYWwpKSB7XG4gICAgbmV4dFJlc3VsdFtyZWZJZF0gPSBjaGFuZ2UocmVmSWQsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIG5leHRSZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgUGFuZWxEYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgUnVsZUZvcm1UeXBlIH0gZnJvbSAnLi9ydWxlLWZvcm0nO1xuXG5leHBvcnQgdHlwZSBQcmV2aWV3UnVsZVJlcXVlc3QgPSBHcmFmYW5hUHJldmlld1J1bGVSZXF1ZXN0IHwgQ2xvdWRQcmV2aWV3UnVsZVJlcXVlc3Q7XG5cbmV4cG9ydCB0eXBlIEdyYWZhbmFQcmV2aWV3UnVsZVJlcXVlc3QgPSB7XG4gIGdyYWZhbmFfY29uZGl0aW9uOiB7XG4gICAgY29uZGl0aW9uOiBzdHJpbmc7XG4gICAgZGF0YTogQWxlcnRRdWVyeVtdO1xuICAgIG5vdzogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ2xvdWRQcmV2aWV3UnVsZVJlcXVlc3QgPSB7XG4gIGRhdGFTb3VyY2VOYW1lOiBzdHJpbmc7XG4gIGV4cHI6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFByZXZpZXdSdWxlUmVzcG9uc2UgPSB7XG4gIHJ1bGVUeXBlOiBSdWxlRm9ybVR5cGU7XG4gIGRhdGE6IFBhbmVsRGF0YTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Nsb3VkUHJldmlld1JlcXVlc3QocmVxdWVzdDogUHJldmlld1J1bGVSZXF1ZXN0KTogcmVxdWVzdCBpcyBDbG91ZFByZXZpZXdSdWxlUmVxdWVzdCB7XG4gIHJldHVybiAnZXhwcicgaW4gcmVxdWVzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzR3JhZmFuYVByZXZpZXdSZXF1ZXN0KHJlcXVlc3Q6IFByZXZpZXdSdWxlUmVxdWVzdCk6IHJlcXVlc3QgaXMgR3JhZmFuYVByZXZpZXdSdWxlUmVxdWVzdCB7XG4gIHJldHVybiAnZ3JhZmFuYV9jb25kaXRpb24nIGluIHJlcXVlc3Q7XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRSdWxlc0FjY2VzcyB9IGZyb20gJy4vYWNjZXNzLWNvbnRyb2wnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUnVsZXNBY2Nlc3MoKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGdldFJ1bGVzQWNjZXNzKCksIFtdKTtcbn1cbiIsImltcG9ydCB7IFJlbGF0aXZlVGltZVJhbmdlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvblF1ZXJ5LCBFeHByZXNzaW9uUXVlcnlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzc2lvbnMvdHlwZXMnO1xuXG5jb25zdCBGQUxMX0JBQ0tfVElNRV9SQU5HRSA9IHsgZnJvbTogMjE2MDAsIHRvOiAwIH07XG5cbmV4cG9ydCBjb25zdCBnZXRUaW1lUmFuZ2VGb3JFeHByZXNzaW9uID0gKHF1ZXJ5OiBFeHByZXNzaW9uUXVlcnksIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSk6IFJlbGF0aXZlVGltZVJhbmdlID0+IHtcbiAgY29uc3QgcmVmZXJlbmNlZFJlZklkczogc3RyaW5nW10gfCB1bmRlZmluZWQgPSBnZXRSZWZlcmVuY2VkSWRzKHF1ZXJ5LCBxdWVyaWVzKTtcblxuICBpZiAoIXJlZmVyZW5jZWRSZWZJZHMpIHtcbiAgICByZXR1cm4gRkFMTF9CQUNLX1RJTUVfUkFOR0U7XG4gIH1cblxuICBjb25zdCB7IGZyb20sIHRvIH0gPSBnZXRUaW1lUmFuZ2VzKHJlZmVyZW5jZWRSZWZJZHMsIHF1ZXJpZXMpO1xuXG4gIGlmICghZnJvbS5sZW5ndGggJiYgIXRvLmxlbmd0aCkge1xuICAgIHJldHVybiBGQUxMX0JBQ0tfVElNRV9SQU5HRTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZnJvbTogTWF0aC5tYXgoLi4uZnJvbSksXG4gICAgdG86IE1hdGgubWluKC4uLnRvKSxcbiAgfTtcbn07XG5cbmNvbnN0IGdldFJlZmVyZW5jZWRJZHMgPSAobW9kZWw6IEV4cHJlc3Npb25RdWVyeSwgcXVlcmllczogQWxlcnRRdWVyeVtdKTogc3RyaW5nW10gfCB1bmRlZmluZWQgPT4ge1xuICBzd2l0Y2ggKG1vZGVsLnR5cGUpIHtcbiAgICBjYXNlIEV4cHJlc3Npb25RdWVyeVR5cGUuY2xhc3NpYzpcbiAgICAgIHJldHVybiBnZXRSZWZlcmVuY2VkSWRzRm9yQ2xhc3NpY0NvbmRpdGlvbihtb2RlbCk7XG4gICAgY2FzZSBFeHByZXNzaW9uUXVlcnlUeXBlLm1hdGg6XG4gICAgICByZXR1cm4gZ2V0UmVmZXJlbmNlZElkc0Zvck1hdGgobW9kZWwsIHF1ZXJpZXMpO1xuICAgIGNhc2UgRXhwcmVzc2lvblF1ZXJ5VHlwZS5yZXNhbXBsZTpcbiAgICBjYXNlIEV4cHJlc3Npb25RdWVyeVR5cGUucmVkdWNlOlxuICAgICAgcmV0dXJuIGdldFJlZmVyZW5jZWRJZHNGb3JSZWR1Y2UobW9kZWwpO1xuICB9XG59O1xuXG5jb25zdCBnZXRSZWZlcmVuY2VkSWRzRm9yQ2xhc3NpY0NvbmRpdGlvbiA9IChtb2RlbDogRXhwcmVzc2lvblF1ZXJ5KSA9PiB7XG4gIHJldHVybiBtb2RlbC5jb25kaXRpb25zPy5tYXAoKGNvbmRpdGlvbikgPT4ge1xuICAgIHJldHVybiBjb25kaXRpb24ucXVlcnkucGFyYW1zWzBdO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldFRpbWVSYW5nZXMgPSAocmVmZXJlbmNlZFJlZklkczogc3RyaW5nW10sIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkgPT4ge1xuICBsZXQgZnJvbTogbnVtYmVyW10gPSBbXTtcbiAgbGV0IHRvID0gW0ZBTExfQkFDS19USU1FX1JBTkdFLnRvXTtcbiAgZm9yIChjb25zdCByZWZlcmVuY2VkUmVmSWRzS2V5IG9mIHJlZmVyZW5jZWRSZWZJZHMpIHtcbiAgICBjb25zdCBxdWVyeSA9IHF1ZXJpZXMuZmluZCgocXVlcnkpID0+IHF1ZXJ5LnJlZklkID09PSByZWZlcmVuY2VkUmVmSWRzS2V5KTtcblxuICAgIGlmICghcXVlcnkgfHwgIXF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZnJvbS5wdXNoKHF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlLmZyb20pO1xuICAgIHRvLnB1c2gocXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UudG8pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9tLFxuICAgIHRvLFxuICB9O1xufTtcblxuY29uc3QgZ2V0UmVmZXJlbmNlZElkc0Zvck1hdGggPSAobW9kZWw6IEV4cHJlc3Npb25RdWVyeSwgcXVlcmllczogQWxlcnRRdWVyeVtdKSA9PiB7XG4gIHJldHVybiAoXG4gICAgcXVlcmllc1xuICAgICAgLy8gZmlsdGVyIHF1ZXJpZXMgb2YgdHlwZSBxdWVyeSBhbmQgZmlsdGVyIGV4cHJlc3Npb24gb24gaWYgaXQgaW5jbHVkZXMgYW55IHJlZklkc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5xdWVyeVR5cGUgPT09ICdxdWVyeScgJiYgbW9kZWwuZXhwcmVzc2lvbj8uaW5jbHVkZXMocS5yZWZJZCkpXG4gICAgICAubWFwKChxKSA9PiB7XG4gICAgICAgIHJldHVybiBxLnJlZklkO1xuICAgICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGdldFJlZmVyZW5jZWRJZHNGb3JSZWR1Y2UgPSAobW9kZWw6IEV4cHJlc3Npb25RdWVyeSkgPT4ge1xuICByZXR1cm4gbW9kZWwuZXhwcmVzc2lvbiA/IFttb2RlbC5leHByZXNzaW9uXSA6IHVuZGVmaW5lZDtcbn07XG4iLCJpbXBvcnQgeyBEYXRhUXVlcnkgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblJlZmVyZW5jZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL0RhdGFTb3VyY2VXaXRoQmFja2VuZCc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb25RdWVyeSwgRXhwcmVzc2lvblF1ZXJ5VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgaXNFeHByZXNzaW9uUXVlcnkgPSAoZGF0YVF1ZXJ5PzogRGF0YVF1ZXJ5KTogZGF0YVF1ZXJ5IGlzIEV4cHJlc3Npb25RdWVyeSA9PiB7XG4gIGlmICghZGF0YVF1ZXJ5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRXhwcmVzc2lvblJlZmVyZW5jZShkYXRhUXVlcnkuZGF0YXNvdXJjZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBkYXRhUXVlcnkgYXMgRXhwcmVzc2lvblF1ZXJ5O1xuXG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbi50eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhFeHByZXNzaW9uUXVlcnlUeXBlKS5pbmNsdWRlcyhleHByZXNzaW9uLnR5cGUpO1xufTtcbiIsIlxuLyohIGpzLXlhbWwgNC4xLjAgaHR0cHM6Ly9naXRodWIuY29tL25vZGVjYS9qcy15YW1sIEBsaWNlbnNlIE1JVCAqL1xuZnVuY3Rpb24gaXNOb3RoaW5nKHN1YmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygc3ViamVjdCA9PT0gJ3VuZGVmaW5lZCcpIHx8IChzdWJqZWN0ID09PSBudWxsKTtcbn1cblxuXG5mdW5jdGlvbiBpc09iamVjdChzdWJqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnKSAmJiAoc3ViamVjdCAhPT0gbnVsbCk7XG59XG5cblxuZnVuY3Rpb24gdG9BcnJheShzZXF1ZW5jZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShzZXF1ZW5jZSkpIHJldHVybiBzZXF1ZW5jZTtcbiAgZWxzZSBpZiAoaXNOb3RoaW5nKHNlcXVlbmNlKSkgcmV0dXJuIFtdO1xuXG4gIHJldHVybiBbIHNlcXVlbmNlIF07XG59XG5cblxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBpbmRleCwgbGVuZ3RoLCBrZXksIHNvdXJjZUtleXM7XG5cbiAgaWYgKHNvdXJjZSkge1xuICAgIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHNvdXJjZUtleXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAga2V5ID0gc291cmNlS2V5c1tpbmRleF07XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuZnVuY3Rpb24gcmVwZWF0KHN0cmluZywgY291bnQpIHtcbiAgdmFyIHJlc3VsdCA9ICcnLCBjeWNsZTtcblxuICBmb3IgKGN5Y2xlID0gMDsgY3ljbGUgPCBjb3VudDsgY3ljbGUgKz0gMSkge1xuICAgIHJlc3VsdCArPSBzdHJpbmc7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIGlzTmVnYXRpdmVaZXJvKG51bWJlcikge1xuICByZXR1cm4gKG51bWJlciA9PT0gMCkgJiYgKE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA9PT0gMSAvIG51bWJlcik7XG59XG5cblxudmFyIGlzTm90aGluZ18xICAgICAgPSBpc05vdGhpbmc7XG52YXIgaXNPYmplY3RfMSAgICAgICA9IGlzT2JqZWN0O1xudmFyIHRvQXJyYXlfMSAgICAgICAgPSB0b0FycmF5O1xudmFyIHJlcGVhdF8xICAgICAgICAgPSByZXBlYXQ7XG52YXIgaXNOZWdhdGl2ZVplcm9fMSA9IGlzTmVnYXRpdmVaZXJvO1xudmFyIGV4dGVuZF8xICAgICAgICAgPSBleHRlbmQ7XG5cbnZhciBjb21tb24gPSB7XG5cdGlzTm90aGluZzogaXNOb3RoaW5nXzEsXG5cdGlzT2JqZWN0OiBpc09iamVjdF8xLFxuXHR0b0FycmF5OiB0b0FycmF5XzEsXG5cdHJlcGVhdDogcmVwZWF0XzEsXG5cdGlzTmVnYXRpdmVaZXJvOiBpc05lZ2F0aXZlWmVyb18xLFxuXHRleHRlbmQ6IGV4dGVuZF8xXG59O1xuXG4vLyBZQU1MIGVycm9yIGNsYXNzLiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg0NTg5ODRcblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcihleGNlcHRpb24sIGNvbXBhY3QpIHtcbiAgdmFyIHdoZXJlID0gJycsIG1lc3NhZ2UgPSBleGNlcHRpb24ucmVhc29uIHx8ICcodW5rbm93biByZWFzb24pJztcblxuICBpZiAoIWV4Y2VwdGlvbi5tYXJrKSByZXR1cm4gbWVzc2FnZTtcblxuICBpZiAoZXhjZXB0aW9uLm1hcmsubmFtZSkge1xuICAgIHdoZXJlICs9ICdpbiBcIicgKyBleGNlcHRpb24ubWFyay5uYW1lICsgJ1wiICc7XG4gIH1cblxuICB3aGVyZSArPSAnKCcgKyAoZXhjZXB0aW9uLm1hcmsubGluZSArIDEpICsgJzonICsgKGV4Y2VwdGlvbi5tYXJrLmNvbHVtbiArIDEpICsgJyknO1xuXG4gIGlmICghY29tcGFjdCAmJiBleGNlcHRpb24ubWFyay5zbmlwcGV0KSB7XG4gICAgd2hlcmUgKz0gJ1xcblxcbicgKyBleGNlcHRpb24ubWFyay5zbmlwcGV0O1xuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2UgKyAnICcgKyB3aGVyZTtcbn1cblxuXG5mdW5jdGlvbiBZQU1MRXhjZXB0aW9uJDEocmVhc29uLCBtYXJrKSB7XG4gIC8vIFN1cGVyIGNvbnN0cnVjdG9yXG4gIEVycm9yLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5uYW1lID0gJ1lBTUxFeGNlcHRpb24nO1xuICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgdGhpcy5tYXJrID0gbWFyaztcbiAgdGhpcy5tZXNzYWdlID0gZm9ybWF0RXJyb3IodGhpcywgZmFsc2UpO1xuXG4gIC8vIEluY2x1ZGUgc3RhY2sgdHJhY2UgaW4gZXJyb3Igb2JqZWN0XG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIC8vIENocm9tZSBhbmQgTm9kZUpTXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gRkYsIElFIDEwKyBhbmQgU2FmYXJpIDYrLiBGYWxsYmFjayBmb3Igb3RoZXJzXG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2sgfHwgJyc7XG4gIH1cbn1cblxuXG4vLyBJbmhlcml0IGZyb20gRXJyb3JcbllBTUxFeGNlcHRpb24kMS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5ZQU1MRXhjZXB0aW9uJDEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gWUFNTEV4Y2VwdGlvbiQxO1xuXG5cbllBTUxFeGNlcHRpb24kMS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhjb21wYWN0KSB7XG4gIHJldHVybiB0aGlzLm5hbWUgKyAnOiAnICsgZm9ybWF0RXJyb3IodGhpcywgY29tcGFjdCk7XG59O1xuXG5cbnZhciBleGNlcHRpb24gPSBZQU1MRXhjZXB0aW9uJDE7XG5cbi8vIGdldCBzbmlwcGV0IGZvciBhIHNpbmdsZSBsaW5lLCByZXNwZWN0aW5nIG1heExlbmd0aFxuZnVuY3Rpb24gZ2V0TGluZShidWZmZXIsIGxpbmVTdGFydCwgbGluZUVuZCwgcG9zaXRpb24sIG1heExpbmVMZW5ndGgpIHtcbiAgdmFyIGhlYWQgPSAnJztcbiAgdmFyIHRhaWwgPSAnJztcbiAgdmFyIG1heEhhbGZMZW5ndGggPSBNYXRoLmZsb29yKG1heExpbmVMZW5ndGggLyAyKSAtIDE7XG5cbiAgaWYgKHBvc2l0aW9uIC0gbGluZVN0YXJ0ID4gbWF4SGFsZkxlbmd0aCkge1xuICAgIGhlYWQgPSAnIC4uLiAnO1xuICAgIGxpbmVTdGFydCA9IHBvc2l0aW9uIC0gbWF4SGFsZkxlbmd0aCArIGhlYWQubGVuZ3RoO1xuICB9XG5cbiAgaWYgKGxpbmVFbmQgLSBwb3NpdGlvbiA+IG1heEhhbGZMZW5ndGgpIHtcbiAgICB0YWlsID0gJyAuLi4nO1xuICAgIGxpbmVFbmQgPSBwb3NpdGlvbiArIG1heEhhbGZMZW5ndGggLSB0YWlsLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RyOiBoZWFkICsgYnVmZmVyLnNsaWNlKGxpbmVTdGFydCwgbGluZUVuZCkucmVwbGFjZSgvXFx0L2csICfihpInKSArIHRhaWwsXG4gICAgcG9zOiBwb3NpdGlvbiAtIGxpbmVTdGFydCArIGhlYWQubGVuZ3RoIC8vIHJlbGF0aXZlIHBvc2l0aW9uXG4gIH07XG59XG5cblxuZnVuY3Rpb24gcGFkU3RhcnQoc3RyaW5nLCBtYXgpIHtcbiAgcmV0dXJuIGNvbW1vbi5yZXBlYXQoJyAnLCBtYXggLSBzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn1cblxuXG5mdW5jdGlvbiBtYWtlU25pcHBldChtYXJrLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMgfHwgbnVsbCk7XG5cbiAgaWYgKCFtYXJrLmJ1ZmZlcikgcmV0dXJuIG51bGw7XG5cbiAgaWYgKCFvcHRpb25zLm1heExlbmd0aCkgb3B0aW9ucy5tYXhMZW5ndGggPSA3OTtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluZGVudCAgICAgICE9PSAnbnVtYmVyJykgb3B0aW9ucy5pbmRlbnQgICAgICA9IDE7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5saW5lc0JlZm9yZSAhPT0gJ251bWJlcicpIG9wdGlvbnMubGluZXNCZWZvcmUgPSAzO1xuICBpZiAodHlwZW9mIG9wdGlvbnMubGluZXNBZnRlciAgIT09ICdudW1iZXInKSBvcHRpb25zLmxpbmVzQWZ0ZXIgID0gMjtcblxuICB2YXIgcmUgPSAvXFxyP1xcbnxcXHJ8XFwwL2c7XG4gIHZhciBsaW5lU3RhcnRzID0gWyAwIF07XG4gIHZhciBsaW5lRW5kcyA9IFtdO1xuICB2YXIgbWF0Y2g7XG4gIHZhciBmb3VuZExpbmVObyA9IC0xO1xuXG4gIHdoaWxlICgobWF0Y2ggPSByZS5leGVjKG1hcmsuYnVmZmVyKSkpIHtcbiAgICBsaW5lRW5kcy5wdXNoKG1hdGNoLmluZGV4KTtcbiAgICBsaW5lU3RhcnRzLnB1c2gobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuXG4gICAgaWYgKG1hcmsucG9zaXRpb24gPD0gbWF0Y2guaW5kZXggJiYgZm91bmRMaW5lTm8gPCAwKSB7XG4gICAgICBmb3VuZExpbmVObyA9IGxpbmVTdGFydHMubGVuZ3RoIC0gMjtcbiAgICB9XG4gIH1cblxuICBpZiAoZm91bmRMaW5lTm8gPCAwKSBmb3VuZExpbmVObyA9IGxpbmVTdGFydHMubGVuZ3RoIC0gMTtcblxuICB2YXIgcmVzdWx0ID0gJycsIGksIGxpbmU7XG4gIHZhciBsaW5lTm9MZW5ndGggPSBNYXRoLm1pbihtYXJrLmxpbmUgKyBvcHRpb25zLmxpbmVzQWZ0ZXIsIGxpbmVFbmRzLmxlbmd0aCkudG9TdHJpbmcoKS5sZW5ndGg7XG4gIHZhciBtYXhMaW5lTGVuZ3RoID0gb3B0aW9ucy5tYXhMZW5ndGggLSAob3B0aW9ucy5pbmRlbnQgKyBsaW5lTm9MZW5ndGggKyAzKTtcblxuICBmb3IgKGkgPSAxOyBpIDw9IG9wdGlvbnMubGluZXNCZWZvcmU7IGkrKykge1xuICAgIGlmIChmb3VuZExpbmVObyAtIGkgPCAwKSBicmVhaztcbiAgICBsaW5lID0gZ2V0TGluZShcbiAgICAgIG1hcmsuYnVmZmVyLFxuICAgICAgbGluZVN0YXJ0c1tmb3VuZExpbmVObyAtIGldLFxuICAgICAgbGluZUVuZHNbZm91bmRMaW5lTm8gLSBpXSxcbiAgICAgIG1hcmsucG9zaXRpb24gLSAobGluZVN0YXJ0c1tmb3VuZExpbmVOb10gLSBsaW5lU3RhcnRzW2ZvdW5kTGluZU5vIC0gaV0pLFxuICAgICAgbWF4TGluZUxlbmd0aFxuICAgICk7XG4gICAgcmVzdWx0ID0gY29tbW9uLnJlcGVhdCgnICcsIG9wdGlvbnMuaW5kZW50KSArIHBhZFN0YXJ0KChtYXJrLmxpbmUgLSBpICsgMSkudG9TdHJpbmcoKSwgbGluZU5vTGVuZ3RoKSArXG4gICAgICAnIHwgJyArIGxpbmUuc3RyICsgJ1xcbicgKyByZXN1bHQ7XG4gIH1cblxuICBsaW5lID0gZ2V0TGluZShtYXJrLmJ1ZmZlciwgbGluZVN0YXJ0c1tmb3VuZExpbmVOb10sIGxpbmVFbmRzW2ZvdW5kTGluZU5vXSwgbWFyay5wb3NpdGlvbiwgbWF4TGluZUxlbmd0aCk7XG4gIHJlc3VsdCArPSBjb21tb24ucmVwZWF0KCcgJywgb3B0aW9ucy5pbmRlbnQpICsgcGFkU3RhcnQoKG1hcmsubGluZSArIDEpLnRvU3RyaW5nKCksIGxpbmVOb0xlbmd0aCkgK1xuICAgICcgfCAnICsgbGluZS5zdHIgKyAnXFxuJztcbiAgcmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJy0nLCBvcHRpb25zLmluZGVudCArIGxpbmVOb0xlbmd0aCArIDMgKyBsaW5lLnBvcykgKyAnXicgKyAnXFxuJztcblxuICBmb3IgKGkgPSAxOyBpIDw9IG9wdGlvbnMubGluZXNBZnRlcjsgaSsrKSB7XG4gICAgaWYgKGZvdW5kTGluZU5vICsgaSA+PSBsaW5lRW5kcy5sZW5ndGgpIGJyZWFrO1xuICAgIGxpbmUgPSBnZXRMaW5lKFxuICAgICAgbWFyay5idWZmZXIsXG4gICAgICBsaW5lU3RhcnRzW2ZvdW5kTGluZU5vICsgaV0sXG4gICAgICBsaW5lRW5kc1tmb3VuZExpbmVObyArIGldLFxuICAgICAgbWFyay5wb3NpdGlvbiAtIChsaW5lU3RhcnRzW2ZvdW5kTGluZU5vXSAtIGxpbmVTdGFydHNbZm91bmRMaW5lTm8gKyBpXSksXG4gICAgICBtYXhMaW5lTGVuZ3RoXG4gICAgKTtcbiAgICByZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnICcsIG9wdGlvbnMuaW5kZW50KSArIHBhZFN0YXJ0KChtYXJrLmxpbmUgKyBpICsgMSkudG9TdHJpbmcoKSwgbGluZU5vTGVuZ3RoKSArXG4gICAgICAnIHwgJyArIGxpbmUuc3RyICsgJ1xcbic7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LnJlcGxhY2UoL1xcbiQvLCAnJyk7XG59XG5cblxudmFyIHNuaXBwZXQgPSBtYWtlU25pcHBldDtcblxudmFyIFRZUEVfQ09OU1RSVUNUT1JfT1BUSU9OUyA9IFtcbiAgJ2tpbmQnLFxuICAnbXVsdGknLFxuICAncmVzb2x2ZScsXG4gICdjb25zdHJ1Y3QnLFxuICAnaW5zdGFuY2VPZicsXG4gICdwcmVkaWNhdGUnLFxuICAncmVwcmVzZW50JyxcbiAgJ3JlcHJlc2VudE5hbWUnLFxuICAnZGVmYXVsdFN0eWxlJyxcbiAgJ3N0eWxlQWxpYXNlcydcbl07XG5cbnZhciBZQU1MX05PREVfS0lORFMgPSBbXG4gICdzY2FsYXInLFxuICAnc2VxdWVuY2UnLFxuICAnbWFwcGluZydcbl07XG5cbmZ1bmN0aW9uIGNvbXBpbGVTdHlsZUFsaWFzZXMobWFwKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBpZiAobWFwICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgbWFwW3N0eWxlXS5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICByZXN1bHRbU3RyaW5nKGFsaWFzKV0gPSBzdHlsZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gVHlwZSQxKHRhZywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKFRZUEVfQ09OU1RSVUNUT1JfT1BUSU9OUy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignVW5rbm93biBvcHRpb24gXCInICsgbmFtZSArICdcIiBpcyBtZXQgaW4gZGVmaW5pdGlvbiBvZiBcIicgKyB0YWcgKyAnXCIgWUFNTCB0eXBlLicpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVE9ETzogQWRkIHRhZyBmb3JtYXQgY2hlY2suXG4gIHRoaXMub3B0aW9ucyAgICAgICA9IG9wdGlvbnM7IC8vIGtlZXAgb3JpZ2luYWwgb3B0aW9ucyBpbiBjYXNlIHVzZXIgd2FudHMgdG8gZXh0ZW5kIHRoaXMgdHlwZSBsYXRlclxuICB0aGlzLnRhZyAgICAgICAgICAgPSB0YWc7XG4gIHRoaXMua2luZCAgICAgICAgICA9IG9wdGlvbnNbJ2tpbmQnXSAgICAgICAgICB8fCBudWxsO1xuICB0aGlzLnJlc29sdmUgICAgICAgPSBvcHRpb25zWydyZXNvbHZlJ10gICAgICAgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTtcbiAgdGhpcy5jb25zdHJ1Y3QgICAgID0gb3B0aW9uc1snY29uc3RydWN0J10gICAgIHx8IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhOyB9O1xuICB0aGlzLmluc3RhbmNlT2YgICAgPSBvcHRpb25zWydpbnN0YW5jZU9mJ10gICAgfHwgbnVsbDtcbiAgdGhpcy5wcmVkaWNhdGUgICAgID0gb3B0aW9uc1sncHJlZGljYXRlJ10gICAgIHx8IG51bGw7XG4gIHRoaXMucmVwcmVzZW50ICAgICA9IG9wdGlvbnNbJ3JlcHJlc2VudCddICAgICB8fCBudWxsO1xuICB0aGlzLnJlcHJlc2VudE5hbWUgPSBvcHRpb25zWydyZXByZXNlbnROYW1lJ10gfHwgbnVsbDtcbiAgdGhpcy5kZWZhdWx0U3R5bGUgID0gb3B0aW9uc1snZGVmYXVsdFN0eWxlJ10gIHx8IG51bGw7XG4gIHRoaXMubXVsdGkgICAgICAgICA9IG9wdGlvbnNbJ211bHRpJ10gICAgICAgICB8fCBmYWxzZTtcbiAgdGhpcy5zdHlsZUFsaWFzZXMgID0gY29tcGlsZVN0eWxlQWxpYXNlcyhvcHRpb25zWydzdHlsZUFsaWFzZXMnXSB8fCBudWxsKTtcblxuICBpZiAoWUFNTF9OT0RFX0tJTkRTLmluZGV4T2YodGhpcy5raW5kKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdVbmtub3duIGtpbmQgXCInICsgdGhpcy5raW5kICsgJ1wiIGlzIHNwZWNpZmllZCBmb3IgXCInICsgdGFnICsgJ1wiIFlBTUwgdHlwZS4nKTtcbiAgfVxufVxuXG52YXIgdHlwZSA9IFR5cGUkMTtcblxuLyplc2xpbnQtZGlzYWJsZSBtYXgtbGVuKi9cblxuXG5cblxuXG5mdW5jdGlvbiBjb21waWxlTGlzdChzY2hlbWEsIG5hbWUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIHNjaGVtYVtuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50VHlwZSkge1xuICAgIHZhciBuZXdJbmRleCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgICByZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAocHJldmlvdXNUeXBlLCBwcmV2aW91c0luZGV4KSB7XG4gICAgICBpZiAocHJldmlvdXNUeXBlLnRhZyA9PT0gY3VycmVudFR5cGUudGFnICYmXG4gICAgICAgICAgcHJldmlvdXNUeXBlLmtpbmQgPT09IGN1cnJlbnRUeXBlLmtpbmQgJiZcbiAgICAgICAgICBwcmV2aW91c1R5cGUubXVsdGkgPT09IGN1cnJlbnRUeXBlLm11bHRpKSB7XG5cbiAgICAgICAgbmV3SW5kZXggPSBwcmV2aW91c0luZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzdWx0W25ld0luZGV4XSA9IGN1cnJlbnRUeXBlO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIGNvbXBpbGVNYXAoLyogbGlzdHMuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgc2NhbGFyOiB7fSxcbiAgICAgICAgc2VxdWVuY2U6IHt9LFxuICAgICAgICBtYXBwaW5nOiB7fSxcbiAgICAgICAgZmFsbGJhY2s6IHt9LFxuICAgICAgICBtdWx0aToge1xuICAgICAgICAgIHNjYWxhcjogW10sXG4gICAgICAgICAgc2VxdWVuY2U6IFtdLFxuICAgICAgICAgIG1hcHBpbmc6IFtdLFxuICAgICAgICAgIGZhbGxiYWNrOiBbXVxuICAgICAgICB9XG4gICAgICB9LCBpbmRleCwgbGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3RUeXBlKHR5cGUpIHtcbiAgICBpZiAodHlwZS5tdWx0aSkge1xuICAgICAgcmVzdWx0Lm11bHRpW3R5cGUua2luZF0ucHVzaCh0eXBlKTtcbiAgICAgIHJlc3VsdC5tdWx0aVsnZmFsbGJhY2snXS5wdXNoKHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbdHlwZS5raW5kXVt0eXBlLnRhZ10gPSByZXN1bHRbJ2ZhbGxiYWNrJ11bdHlwZS50YWddID0gdHlwZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBhcmd1bWVudHNbaW5kZXhdLmZvckVhY2goY29sbGVjdFR5cGUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gU2NoZW1hJDEoZGVmaW5pdGlvbikge1xuICByZXR1cm4gdGhpcy5leHRlbmQoZGVmaW5pdGlvbik7XG59XG5cblxuU2NoZW1hJDEucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZChkZWZpbml0aW9uKSB7XG4gIHZhciBpbXBsaWNpdCA9IFtdO1xuICB2YXIgZXhwbGljaXQgPSBbXTtcblxuICBpZiAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIHR5cGUpIHtcbiAgICAvLyBTY2hlbWEuZXh0ZW5kKHR5cGUpXG4gICAgZXhwbGljaXQucHVzaChkZWZpbml0aW9uKTtcblxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcbiAgICAvLyBTY2hlbWEuZXh0ZW5kKFsgdHlwZTEsIHR5cGUyLCAuLi4gXSlcbiAgICBleHBsaWNpdCA9IGV4cGxpY2l0LmNvbmNhdChkZWZpbml0aW9uKTtcblxuICB9IGVsc2UgaWYgKGRlZmluaXRpb24gJiYgKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbi5pbXBsaWNpdCkgfHwgQXJyYXkuaXNBcnJheShkZWZpbml0aW9uLmV4cGxpY2l0KSkpIHtcbiAgICAvLyBTY2hlbWEuZXh0ZW5kKHsgZXhwbGljaXQ6IFsgdHlwZTEsIHR5cGUyLCAuLi4gXSwgaW1wbGljaXQ6IFsgdHlwZTEsIHR5cGUyLCAuLi4gXSB9KVxuICAgIGlmIChkZWZpbml0aW9uLmltcGxpY2l0KSBpbXBsaWNpdCA9IGltcGxpY2l0LmNvbmNhdChkZWZpbml0aW9uLmltcGxpY2l0KTtcbiAgICBpZiAoZGVmaW5pdGlvbi5leHBsaWNpdCkgZXhwbGljaXQgPSBleHBsaWNpdC5jb25jYXQoZGVmaW5pdGlvbi5leHBsaWNpdCk7XG5cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdTY2hlbWEuZXh0ZW5kIGFyZ3VtZW50IHNob3VsZCBiZSBhIFR5cGUsIFsgVHlwZSBdLCAnICtcbiAgICAgICdvciBhIHNjaGVtYSBkZWZpbml0aW9uICh7IGltcGxpY2l0OiBbLi4uXSwgZXhwbGljaXQ6IFsuLi5dIH0pJyk7XG4gIH1cblxuICBpbXBsaWNpdC5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlJDEpIHtcbiAgICBpZiAoISh0eXBlJDEgaW5zdGFuY2VvZiB0eXBlKSkge1xuICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignU3BlY2lmaWVkIGxpc3Qgb2YgWUFNTCB0eXBlcyAob3IgYSBzaW5nbGUgVHlwZSBvYmplY3QpIGNvbnRhaW5zIGEgbm9uLVR5cGUgb2JqZWN0LicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlJDEubG9hZEtpbmQgJiYgdHlwZSQxLmxvYWRLaW5kICE9PSAnc2NhbGFyJykge1xuICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignVGhlcmUgaXMgYSBub24tc2NhbGFyIHR5cGUgaW4gdGhlIGltcGxpY2l0IGxpc3Qgb2YgYSBzY2hlbWEuIEltcGxpY2l0IHJlc29sdmluZyBvZiBzdWNoIHR5cGVzIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUkMS5tdWx0aSkge1xuICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignVGhlcmUgaXMgYSBtdWx0aSB0eXBlIGluIHRoZSBpbXBsaWNpdCBsaXN0IG9mIGEgc2NoZW1hLiBNdWx0aSB0YWdzIGNhbiBvbmx5IGJlIGxpc3RlZCBhcyBleHBsaWNpdC4nKTtcbiAgICB9XG4gIH0pO1xuXG4gIGV4cGxpY2l0LmZvckVhY2goZnVuY3Rpb24gKHR5cGUkMSkge1xuICAgIGlmICghKHR5cGUkMSBpbnN0YW5jZW9mIHR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdTcGVjaWZpZWQgbGlzdCBvZiBZQU1MIHR5cGVzIChvciBhIHNpbmdsZSBUeXBlIG9iamVjdCkgY29udGFpbnMgYSBub24tVHlwZSBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShTY2hlbWEkMS5wcm90b3R5cGUpO1xuXG4gIHJlc3VsdC5pbXBsaWNpdCA9ICh0aGlzLmltcGxpY2l0IHx8IFtdKS5jb25jYXQoaW1wbGljaXQpO1xuICByZXN1bHQuZXhwbGljaXQgPSAodGhpcy5leHBsaWNpdCB8fCBbXSkuY29uY2F0KGV4cGxpY2l0KTtcblxuICByZXN1bHQuY29tcGlsZWRJbXBsaWNpdCA9IGNvbXBpbGVMaXN0KHJlc3VsdCwgJ2ltcGxpY2l0Jyk7XG4gIHJlc3VsdC5jb21waWxlZEV4cGxpY2l0ID0gY29tcGlsZUxpc3QocmVzdWx0LCAnZXhwbGljaXQnKTtcbiAgcmVzdWx0LmNvbXBpbGVkVHlwZU1hcCAgPSBjb21waWxlTWFwKHJlc3VsdC5jb21waWxlZEltcGxpY2l0LCByZXN1bHQuY29tcGlsZWRFeHBsaWNpdCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxudmFyIHNjaGVtYSA9IFNjaGVtYSQxO1xuXG52YXIgc3RyID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnN0cicsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDogJyc7IH1cbn0pO1xuXG52YXIgc2VxID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnNlcScsIHtcbiAga2luZDogJ3NlcXVlbmNlJyxcbiAgY29uc3RydWN0OiBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRhdGEgOiBbXTsgfVxufSk7XG5cbnZhciBtYXAgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6bWFwJywge1xuICBraW5kOiAnbWFwcGluZycsXG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDoge307IH1cbn0pO1xuXG52YXIgZmFpbHNhZmUgPSBuZXcgc2NoZW1hKHtcbiAgZXhwbGljaXQ6IFtcbiAgICBzdHIsXG4gICAgc2VxLFxuICAgIG1hcFxuICBdXG59KTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxOdWxsKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBtYXggPSBkYXRhLmxlbmd0aDtcblxuICByZXR1cm4gKG1heCA9PT0gMSAmJiBkYXRhID09PSAnficpIHx8XG4gICAgICAgICAobWF4ID09PSA0ICYmIChkYXRhID09PSAnbnVsbCcgfHwgZGF0YSA9PT0gJ051bGwnIHx8IGRhdGEgPT09ICdOVUxMJykpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA9PT0gbnVsbDtcbn1cblxudmFyIF9udWxsID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm51bGwnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbE51bGwsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbE51bGwsXG4gIHByZWRpY2F0ZTogaXNOdWxsLFxuICByZXByZXNlbnQ6IHtcbiAgICBjYW5vbmljYWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICd+JzsgICAgfSxcbiAgICBsb3dlcmNhc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdudWxsJzsgfSxcbiAgICB1cHBlcmNhc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdOVUxMJzsgfSxcbiAgICBjYW1lbGNhc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdOdWxsJzsgfSxcbiAgICBlbXB0eTogICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyAgICAgfVxuICB9LFxuICBkZWZhdWx0U3R5bGU6ICdsb3dlcmNhc2UnXG59KTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxCb29sZWFuKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICB2YXIgbWF4ID0gZGF0YS5sZW5ndGg7XG5cbiAgcmV0dXJuIChtYXggPT09IDQgJiYgKGRhdGEgPT09ICd0cnVlJyB8fCBkYXRhID09PSAnVHJ1ZScgfHwgZGF0YSA9PT0gJ1RSVUUnKSkgfHxcbiAgICAgICAgIChtYXggPT09IDUgJiYgKGRhdGEgPT09ICdmYWxzZScgfHwgZGF0YSA9PT0gJ0ZhbHNlJyB8fCBkYXRhID09PSAnRkFMU0UnKSk7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxCb29sZWFuKGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEgPT09ICd0cnVlJyB8fFxuICAgICAgICAgZGF0YSA9PT0gJ1RydWUnIHx8XG4gICAgICAgICBkYXRhID09PSAnVFJVRSc7XG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBCb29sZWFuXSc7XG59XG5cbnZhciBib29sID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmJvb2wnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbEJvb2xlYW4sXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbEJvb2xlYW4sXG4gIHByZWRpY2F0ZTogaXNCb29sZWFuLFxuICByZXByZXNlbnQ6IHtcbiAgICBsb3dlcmNhc2U6IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdCA/ICd0cnVlJyA6ICdmYWxzZSc7IH0sXG4gICAgdXBwZXJjYXNlOiBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgPyAnVFJVRScgOiAnRkFMU0UnOyB9LFxuICAgIGNhbWVsY2FzZTogZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0ID8gJ1RydWUnIDogJ0ZhbHNlJzsgfVxuICB9LFxuICBkZWZhdWx0U3R5bGU6ICdsb3dlcmNhc2UnXG59KTtcblxuZnVuY3Rpb24gaXNIZXhDb2RlKGMpIHtcbiAgcmV0dXJuICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzOS8qIDkgKi8pKSB8fFxuICAgICAgICAgKCgweDQxLyogQSAqLyA8PSBjKSAmJiAoYyA8PSAweDQ2LyogRiAqLykpIHx8XG4gICAgICAgICAoKDB4NjEvKiBhICovIDw9IGMpICYmIChjIDw9IDB4NjYvKiBmICovKSk7XG59XG5cbmZ1bmN0aW9uIGlzT2N0Q29kZShjKSB7XG4gIHJldHVybiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzcvKiA3ICovKSk7XG59XG5cbmZ1bmN0aW9uIGlzRGVjQ29kZShjKSB7XG4gIHJldHVybiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sSW50ZWdlcihkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG1heCA9IGRhdGEubGVuZ3RoLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgaGFzRGlnaXRzID0gZmFsc2UsXG4gICAgICBjaDtcblxuICBpZiAoIW1heCkgcmV0dXJuIGZhbHNlO1xuXG4gIGNoID0gZGF0YVtpbmRleF07XG5cbiAgLy8gc2lnblxuICBpZiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnKSB7XG4gICAgY2ggPSBkYXRhWysraW5kZXhdO1xuICB9XG5cbiAgaWYgKGNoID09PSAnMCcpIHtcbiAgICAvLyAwXG4gICAgaWYgKGluZGV4ICsgMSA9PT0gbWF4KSByZXR1cm4gdHJ1ZTtcbiAgICBjaCA9IGRhdGFbKytpbmRleF07XG5cbiAgICAvLyBiYXNlIDIsIGJhc2UgOCwgYmFzZSAxNlxuXG4gICAgaWYgKGNoID09PSAnYicpIHtcbiAgICAgIC8vIGJhc2UgMlxuICAgICAgaW5kZXgrKztcblxuICAgICAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGNoICE9PSAnMCcgJiYgY2ggIT09ICcxJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBoYXNEaWdpdHMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0RpZ2l0cyAmJiBjaCAhPT0gJ18nO1xuICAgIH1cblxuXG4gICAgaWYgKGNoID09PSAneCcpIHtcbiAgICAgIC8vIGJhc2UgMTZcbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIGZvciAoOyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgICAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgICAgICBpZiAoY2ggPT09ICdfJykgY29udGludWU7XG4gICAgICAgIGlmICghaXNIZXhDb2RlKGRhdGEuY2hhckNvZGVBdChpbmRleCkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzRGlnaXRzICYmIGNoICE9PSAnXyc7XG4gICAgfVxuXG5cbiAgICBpZiAoY2ggPT09ICdvJykge1xuICAgICAgLy8gYmFzZSA4XG4gICAgICBpbmRleCsrO1xuXG4gICAgICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgY2ggPSBkYXRhW2luZGV4XTtcbiAgICAgICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIWlzT2N0Q29kZShkYXRhLmNoYXJDb2RlQXQoaW5kZXgpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBoYXNEaWdpdHMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0RpZ2l0cyAmJiBjaCAhPT0gJ18nO1xuICAgIH1cbiAgfVxuXG4gIC8vIGJhc2UgMTAgKGV4Y2VwdCAwKVxuXG4gIC8vIHZhbHVlIHNob3VsZCBub3Qgc3RhcnQgd2l0aCBgX2A7XG4gIGlmIChjaCA9PT0gJ18nKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgY2ggPSBkYXRhW2luZGV4XTtcbiAgICBpZiAoY2ggPT09ICdfJykgY29udGludWU7XG4gICAgaWYgKCFpc0RlY0NvZGUoZGF0YS5jaGFyQ29kZUF0KGluZGV4KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNob3VsZCBoYXZlIGRpZ2l0cyBhbmQgc2hvdWxkIG5vdCBlbmQgd2l0aCBgX2BcbiAgaWYgKCFoYXNEaWdpdHMgfHwgY2ggPT09ICdfJykgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sSW50ZWdlcihkYXRhKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGEsIHNpZ24gPSAxLCBjaDtcblxuICBpZiAodmFsdWUuaW5kZXhPZignXycpICE9PSAtMSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXy9nLCAnJyk7XG4gIH1cblxuICBjaCA9IHZhbHVlWzBdO1xuXG4gIGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcbiAgICBpZiAoY2ggPT09ICctJykgc2lnbiA9IC0xO1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gICAgY2ggPSB2YWx1ZVswXTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJzAnKSByZXR1cm4gMDtcblxuICBpZiAoY2ggPT09ICcwJykge1xuICAgIGlmICh2YWx1ZVsxXSA9PT0gJ2InKSByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCAyKTtcbiAgICBpZiAodmFsdWVbMV0gPT09ICd4JykgcmV0dXJuIHNpZ24gKiBwYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgMTYpO1xuICAgIGlmICh2YWx1ZVsxXSA9PT0gJ28nKSByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCA4KTtcbiAgfVxuXG4gIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUsIDEwKTtcbn1cblxuZnVuY3Rpb24gaXNJbnRlZ2VyKG9iamVjdCkge1xuICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgJiZcbiAgICAgICAgIChvYmplY3QgJSAxID09PSAwICYmICFjb21tb24uaXNOZWdhdGl2ZVplcm8ob2JqZWN0KSk7XG59XG5cbnZhciBpbnQgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6aW50Jywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxJbnRlZ2VyLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxJbnRlZ2VyLFxuICBwcmVkaWNhdGU6IGlzSW50ZWdlcixcbiAgcmVwcmVzZW50OiB7XG4gICAgYmluYXJ5OiAgICAgIGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiA+PSAwID8gJzBiJyArIG9iai50b1N0cmluZygyKSA6ICctMGInICsgb2JqLnRvU3RyaW5nKDIpLnNsaWNlKDEpOyB9LFxuICAgIG9jdGFsOiAgICAgICBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogPj0gMCA/ICcwbycgICsgb2JqLnRvU3RyaW5nKDgpIDogJy0wbycgICsgb2JqLnRvU3RyaW5nKDgpLnNsaWNlKDEpOyB9LFxuICAgIGRlY2ltYWw6ICAgICBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmoudG9TdHJpbmcoMTApOyB9LFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBoZXhhZGVjaW1hbDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqID49IDAgPyAnMHgnICsgb2JqLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpIDogICctMHgnICsgb2JqLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpLnNsaWNlKDEpOyB9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZTogJ2RlY2ltYWwnLFxuICBzdHlsZUFsaWFzZXM6IHtcbiAgICBiaW5hcnk6ICAgICAgWyAyLCAgJ2JpbicgXSxcbiAgICBvY3RhbDogICAgICAgWyA4LCAgJ29jdCcgXSxcbiAgICBkZWNpbWFsOiAgICAgWyAxMCwgJ2RlYycgXSxcbiAgICBoZXhhZGVjaW1hbDogWyAxNiwgJ2hleCcgXVxuICB9XG59KTtcblxudmFyIFlBTUxfRkxPQVRfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gIC8vIDIuNWU0LCAyLjUgYW5kIGludGVnZXJzXG4gICdeKD86Wy0rXT8oPzpbMC05XVswLTlfXSopKD86XFxcXC5bMC05X10qKT8oPzpbZUVdWy0rXT9bMC05XSspPycgK1xuICAvLyAuMmU0LCAuMlxuICAvLyBzcGVjaWFsIGNhc2UsIHNlZW1zIG5vdCBmcm9tIHNwZWNcbiAgJ3xcXFxcLlswLTlfXSsoPzpbZUVdWy0rXT9bMC05XSspPycgK1xuICAvLyAuaW5mXG4gICd8Wy0rXT9cXFxcLig/OmluZnxJbmZ8SU5GKScgK1xuICAvLyAubmFuXG4gICd8XFxcXC4oPzpuYW58TmFOfE5BTikpJCcpO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEZsb2F0KGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoIVlBTUxfRkxPQVRfUEFUVEVSTi50ZXN0KGRhdGEpIHx8XG4gICAgICAvLyBRdWljayBoYWNrIHRvIG5vdCBhbGxvdyBpbnRlZ2VycyBlbmQgd2l0aCBgX2BcbiAgICAgIC8vIFByb2JhYmx5IHNob3VsZCB1cGRhdGUgcmVnZXhwICYgY2hlY2sgc3BlZWRcbiAgICAgIGRhdGFbZGF0YS5sZW5ndGggLSAxXSA9PT0gJ18nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxGbG9hdChkYXRhKSB7XG4gIHZhciB2YWx1ZSwgc2lnbjtcblxuICB2YWx1ZSAgPSBkYXRhLnJlcGxhY2UoL18vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIHNpZ24gICA9IHZhbHVlWzBdID09PSAnLScgPyAtMSA6IDE7XG5cbiAgaWYgKCcrLScuaW5kZXhPZih2YWx1ZVswXSkgPj0gMCkge1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gIH1cblxuICBpZiAodmFsdWUgPT09ICcuaW5mJykge1xuICAgIHJldHVybiAoc2lnbiA9PT0gMSkgPyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgOiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJy5uYW4nKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gc2lnbiAqIHBhcnNlRmxvYXQodmFsdWUsIDEwKTtcbn1cblxuXG52YXIgU0NJRU5USUZJQ19XSVRIT1VUX0RPVCA9IC9eWy0rXT9bMC05XStlLztcblxuZnVuY3Rpb24gcmVwcmVzZW50WWFtbEZsb2F0KG9iamVjdCwgc3R5bGUpIHtcbiAgdmFyIHJlcztcblxuICBpZiAoaXNOYU4ob2JqZWN0KSkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6IHJldHVybiAnLm5hbic7XG4gICAgICBjYXNlICd1cHBlcmNhc2UnOiByZXR1cm4gJy5OQU4nO1xuICAgICAgY2FzZSAnY2FtZWxjYXNlJzogcmV0dXJuICcuTmFOJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZID09PSBvYmplY3QpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICBjYXNlICdsb3dlcmNhc2UnOiByZXR1cm4gJy5pbmYnO1xuICAgICAgY2FzZSAndXBwZXJjYXNlJzogcmV0dXJuICcuSU5GJztcbiAgICAgIGNhc2UgJ2NhbWVsY2FzZSc6IHJldHVybiAnLkluZic7XG4gICAgfVxuICB9IGVsc2UgaWYgKE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA9PT0gb2JqZWN0KSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgY2FzZSAnbG93ZXJjYXNlJzogcmV0dXJuICctLmluZic7XG4gICAgICBjYXNlICd1cHBlcmNhc2UnOiByZXR1cm4gJy0uSU5GJztcbiAgICAgIGNhc2UgJ2NhbWVsY2FzZSc6IHJldHVybiAnLS5JbmYnO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb21tb24uaXNOZWdhdGl2ZVplcm8ob2JqZWN0KSkge1xuICAgIHJldHVybiAnLTAuMCc7XG4gIH1cblxuICByZXMgPSBvYmplY3QudG9TdHJpbmcoMTApO1xuXG4gIC8vIEpTIHN0cmluZ2lmaWVyIGNhbiBidWlsZCBzY2llbnRpZmljIGZvcm1hdCB3aXRob3V0IGRvdHM6IDVlLTEwMCxcbiAgLy8gd2hpbGUgWUFNTCByZXF1cmVzIGRvdDogNS5lLTEwMC4gRml4IGl0IHdpdGggc2ltcGxlIGhhY2tcblxuICByZXR1cm4gU0NJRU5USUZJQ19XSVRIT1VUX0RPVC50ZXN0KHJlcykgPyByZXMucmVwbGFjZSgnZScsICcuZScpIDogcmVzO1xufVxuXG5mdW5jdGlvbiBpc0Zsb2F0KG9iamVjdCkge1xuICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBOdW1iZXJdJykgJiZcbiAgICAgICAgIChvYmplY3QgJSAxICE9PSAwIHx8IGNvbW1vbi5pc05lZ2F0aXZlWmVybyhvYmplY3QpKTtcbn1cblxudmFyIGZsb2F0ID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmZsb2F0Jywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxGbG9hdCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sRmxvYXQsXG4gIHByZWRpY2F0ZTogaXNGbG9hdCxcbiAgcmVwcmVzZW50OiByZXByZXNlbnRZYW1sRmxvYXQsXG4gIGRlZmF1bHRTdHlsZTogJ2xvd2VyY2FzZSdcbn0pO1xuXG52YXIganNvbiA9IGZhaWxzYWZlLmV4dGVuZCh7XG4gIGltcGxpY2l0OiBbXG4gICAgX251bGwsXG4gICAgYm9vbCxcbiAgICBpbnQsXG4gICAgZmxvYXRcbiAgXVxufSk7XG5cbnZhciBjb3JlID0ganNvbjtcblxudmFyIFlBTUxfREFURV9SRUdFWFAgPSBuZXcgUmVnRXhwKFxuICAnXihbMC05XVswLTldWzAtOV1bMC05XSknICAgICAgICAgICsgLy8gWzFdIHllYXJcbiAgJy0oWzAtOV1bMC05XSknICAgICAgICAgICAgICAgICAgICArIC8vIFsyXSBtb250aFxuICAnLShbMC05XVswLTldKSQnKTsgICAgICAgICAgICAgICAgICAgLy8gWzNdIGRheVxuXG52YXIgWUFNTF9USU1FU1RBTVBfUkVHRVhQID0gbmV3IFJlZ0V4cChcbiAgJ14oWzAtOV1bMC05XVswLTldWzAtOV0pJyAgICAgICAgICArIC8vIFsxXSB5ZWFyXG4gICctKFswLTldWzAtOV0/KScgICAgICAgICAgICAgICAgICAgKyAvLyBbMl0gbW9udGhcbiAgJy0oWzAtOV1bMC05XT8pJyAgICAgICAgICAgICAgICAgICArIC8vIFszXSBkYXlcbiAgJyg/OltUdF18WyBcXFxcdF0rKScgICAgICAgICAgICAgICAgICsgLy8gLi4uXG4gICcoWzAtOV1bMC05XT8pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbNF0gaG91clxuICAnOihbMC05XVswLTldKScgICAgICAgICAgICAgICAgICAgICsgLy8gWzVdIG1pbnV0ZVxuICAnOihbMC05XVswLTldKScgICAgICAgICAgICAgICAgICAgICsgLy8gWzZdIHNlY29uZFxuICAnKD86XFxcXC4oWzAtOV0qKSk/JyAgICAgICAgICAgICAgICAgKyAvLyBbN10gZnJhY3Rpb25cbiAgJyg/OlsgXFxcXHRdKihafChbLStdKShbMC05XVswLTldPyknICsgLy8gWzhdIHR6IFs5XSB0el9zaWduIFsxMF0gdHpfaG91clxuICAnKD86OihbMC05XVswLTldKSk/KSk/JCcpOyAgICAgICAgICAgLy8gWzExXSB0el9taW51dGVcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxUaW1lc3RhbXAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoWUFNTF9EQVRFX1JFR0VYUC5leGVjKGRhdGEpICE9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKFlBTUxfVElNRVNUQU1QX1JFR0VYUC5leGVjKGRhdGEpICE9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sVGltZXN0YW1wKGRhdGEpIHtcbiAgdmFyIG1hdGNoLCB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgZnJhY3Rpb24gPSAwLFxuICAgICAgZGVsdGEgPSBudWxsLCB0el9ob3VyLCB0el9taW51dGUsIGRhdGU7XG5cbiAgbWF0Y2ggPSBZQU1MX0RBVEVfUkVHRVhQLmV4ZWMoZGF0YSk7XG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgbWF0Y2ggPSBZQU1MX1RJTUVTVEFNUF9SRUdFWFAuZXhlYyhkYXRhKTtcblxuICBpZiAobWF0Y2ggPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignRGF0ZSByZXNvbHZlIGVycm9yJyk7XG5cbiAgLy8gbWF0Y2g6IFsxXSB5ZWFyIFsyXSBtb250aCBbM10gZGF5XG5cbiAgeWVhciA9ICsobWF0Y2hbMV0pO1xuICBtb250aCA9ICsobWF0Y2hbMl0pIC0gMTsgLy8gSlMgbW9udGggc3RhcnRzIHdpdGggMFxuICBkYXkgPSArKG1hdGNoWzNdKTtcblxuICBpZiAoIW1hdGNoWzRdKSB7IC8vIG5vIGhvdXJcbiAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgsIGRheSkpO1xuICB9XG5cbiAgLy8gbWF0Y2g6IFs0XSBob3VyIFs1XSBtaW51dGUgWzZdIHNlY29uZCBbN10gZnJhY3Rpb25cblxuICBob3VyID0gKyhtYXRjaFs0XSk7XG4gIG1pbnV0ZSA9ICsobWF0Y2hbNV0pO1xuICBzZWNvbmQgPSArKG1hdGNoWzZdKTtcblxuICBpZiAobWF0Y2hbN10pIHtcbiAgICBmcmFjdGlvbiA9IG1hdGNoWzddLnNsaWNlKDAsIDMpO1xuICAgIHdoaWxlIChmcmFjdGlvbi5sZW5ndGggPCAzKSB7IC8vIG1pbGxpLXNlY29uZHNcbiAgICAgIGZyYWN0aW9uICs9ICcwJztcbiAgICB9XG4gICAgZnJhY3Rpb24gPSArZnJhY3Rpb247XG4gIH1cblxuICAvLyBtYXRjaDogWzhdIHR6IFs5XSB0el9zaWduIFsxMF0gdHpfaG91ciBbMTFdIHR6X21pbnV0ZVxuXG4gIGlmIChtYXRjaFs5XSkge1xuICAgIHR6X2hvdXIgPSArKG1hdGNoWzEwXSk7XG4gICAgdHpfbWludXRlID0gKyhtYXRjaFsxMV0gfHwgMCk7XG4gICAgZGVsdGEgPSAodHpfaG91ciAqIDYwICsgdHpfbWludXRlKSAqIDYwMDAwOyAvLyBkZWx0YSBpbiBtaWxpLXNlY29uZHNcbiAgICBpZiAobWF0Y2hbOV0gPT09ICctJykgZGVsdGEgPSAtZGVsdGE7XG4gIH1cblxuICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIGZyYWN0aW9uKSk7XG5cbiAgaWYgKGRlbHRhKSBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgLSBkZWx0YSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudFlhbWxUaW1lc3RhbXAob2JqZWN0IC8qLCBzdHlsZSovKSB7XG4gIHJldHVybiBvYmplY3QudG9JU09TdHJpbmcoKTtcbn1cblxudmFyIHRpbWVzdGFtcCA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjp0aW1lc3RhbXAnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbFRpbWVzdGFtcCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sVGltZXN0YW1wLFxuICBpbnN0YW5jZU9mOiBEYXRlLFxuICByZXByZXNlbnQ6IHJlcHJlc2VudFlhbWxUaW1lc3RhbXBcbn0pO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbE1lcmdlKGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEgPT09ICc8PCcgfHwgZGF0YSA9PT0gbnVsbDtcbn1cblxudmFyIG1lcmdlID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm1lcmdlJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxNZXJnZVxufSk7XG5cbi8qZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSovXG5cblxuXG5cblxuLy8gWyA2NCwgNjUsIDY2IF0gLT4gWyBwYWRkaW5nLCBDUiwgTEYgXVxudmFyIEJBU0U2NF9NQVAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cXG5cXHInO1xuXG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sQmluYXJ5KGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICB2YXIgY29kZSwgaWR4LCBiaXRsZW4gPSAwLCBtYXggPSBkYXRhLmxlbmd0aCwgbWFwID0gQkFTRTY0X01BUDtcblxuICAvLyBDb252ZXJ0IG9uZSBieSBvbmUuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGNvZGUgPSBtYXAuaW5kZXhPZihkYXRhLmNoYXJBdChpZHgpKTtcblxuICAgIC8vIFNraXAgQ1IvTEZcbiAgICBpZiAoY29kZSA+IDY0KSBjb250aW51ZTtcblxuICAgIC8vIEZhaWwgb24gaWxsZWdhbCBjaGFyYWN0ZXJzXG4gICAgaWYgKGNvZGUgPCAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICBiaXRsZW4gKz0gNjtcbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBhbnkgYml0cyBsZWZ0LCBzb3VyY2Ugd2FzIGNvcnJ1cHRlZFxuICByZXR1cm4gKGJpdGxlbiAlIDgpID09PSAwO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sQmluYXJ5KGRhdGEpIHtcbiAgdmFyIGlkeCwgdGFpbGJpdHMsXG4gICAgICBpbnB1dCA9IGRhdGEucmVwbGFjZSgvW1xcclxcbj1dL2csICcnKSwgLy8gcmVtb3ZlIENSL0xGICYgcGFkZGluZyB0byBzaW1wbGlmeSBzY2FuXG4gICAgICBtYXggPSBpbnB1dC5sZW5ndGgsXG4gICAgICBtYXAgPSBCQVNFNjRfTUFQLFxuICAgICAgYml0cyA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICAvLyBDb2xsZWN0IGJ5IDYqNCBiaXRzICgzIGJ5dGVzKVxuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGlmICgoaWR4ICUgNCA9PT0gMCkgJiYgaWR4KSB7XG4gICAgICByZXN1bHQucHVzaCgoYml0cyA+PiAxNikgJiAweEZGKTtcbiAgICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDgpICYgMHhGRik7XG4gICAgICByZXN1bHQucHVzaChiaXRzICYgMHhGRik7XG4gICAgfVxuXG4gICAgYml0cyA9IChiaXRzIDw8IDYpIHwgbWFwLmluZGV4T2YoaW5wdXQuY2hhckF0KGlkeCkpO1xuICB9XG5cbiAgLy8gRHVtcCB0YWlsXG5cbiAgdGFpbGJpdHMgPSAobWF4ICUgNCkgKiA2O1xuXG4gIGlmICh0YWlsYml0cyA9PT0gMCkge1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDE2KSAmIDB4RkYpO1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDgpICYgMHhGRik7XG4gICAgcmVzdWx0LnB1c2goYml0cyAmIDB4RkYpO1xuICB9IGVsc2UgaWYgKHRhaWxiaXRzID09PSAxOCkge1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDEwKSAmIDB4RkYpO1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDIpICYgMHhGRik7XG4gIH0gZWxzZSBpZiAodGFpbGJpdHMgPT09IDEyKSB7XG4gICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gNCkgJiAweEZGKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiByZXByZXNlbnRZYW1sQmluYXJ5KG9iamVjdCAvKiwgc3R5bGUqLykge1xuICB2YXIgcmVzdWx0ID0gJycsIGJpdHMgPSAwLCBpZHgsIHRhaWwsXG4gICAgICBtYXggPSBvYmplY3QubGVuZ3RoLFxuICAgICAgbWFwID0gQkFTRTY0X01BUDtcblxuICAvLyBDb252ZXJ0IGV2ZXJ5IHRocmVlIGJ5dGVzIHRvIDQgQVNDSUkgY2hhcmFjdGVycy5cblxuICBmb3IgKGlkeCA9IDA7IGlkeCA8IG1heDsgaWR4KyspIHtcbiAgICBpZiAoKGlkeCAlIDMgPT09IDApICYmIGlkeCkge1xuICAgICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAxOCkgJiAweDNGXTtcbiAgICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTIpICYgMHgzRl07XG4gICAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDYpICYgMHgzRl07XG4gICAgICByZXN1bHQgKz0gbWFwW2JpdHMgJiAweDNGXTtcbiAgICB9XG5cbiAgICBiaXRzID0gKGJpdHMgPDwgOCkgKyBvYmplY3RbaWR4XTtcbiAgfVxuXG4gIC8vIER1bXAgdGFpbFxuXG4gIHRhaWwgPSBtYXggJSAzO1xuXG4gIGlmICh0YWlsID09PSAwKSB7XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAxOCkgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDEyKSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gNikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwW2JpdHMgJiAweDNGXTtcbiAgfSBlbHNlIGlmICh0YWlsID09PSAyKSB7XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAxMCkgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDQpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA8PCAyKSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbNjRdO1xuICB9IGVsc2UgaWYgKHRhaWwgPT09IDEpIHtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDIpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA8PCA0KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbNjRdO1xuICAgIHJlc3VsdCArPSBtYXBbNjRdO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXNCaW5hcnkob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gICdbb2JqZWN0IFVpbnQ4QXJyYXldJztcbn1cblxudmFyIGJpbmFyeSA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpiaW5hcnknLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbEJpbmFyeSxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sQmluYXJ5LFxuICBwcmVkaWNhdGU6IGlzQmluYXJ5LFxuICByZXByZXNlbnQ6IHJlcHJlc2VudFlhbWxCaW5hcnlcbn0pO1xuXG52YXIgX2hhc093blByb3BlcnR5JDMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF90b1N0cmluZyQyICAgICAgID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxPbWFwKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBvYmplY3RLZXlzID0gW10sIGluZGV4LCBsZW5ndGgsIHBhaXIsIHBhaXJLZXksIHBhaXJIYXNLZXksXG4gICAgICBvYmplY3QgPSBkYXRhO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXIgPSBvYmplY3RbaW5kZXhdO1xuICAgIHBhaXJIYXNLZXkgPSBmYWxzZTtcblxuICAgIGlmIChfdG9TdHJpbmckMi5jYWxsKHBhaXIpICE9PSAnW29iamVjdCBPYmplY3RdJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChwYWlyS2V5IGluIHBhaXIpIHtcbiAgICAgIGlmIChfaGFzT3duUHJvcGVydHkkMy5jYWxsKHBhaXIsIHBhaXJLZXkpKSB7XG4gICAgICAgIGlmICghcGFpckhhc0tleSkgcGFpckhhc0tleSA9IHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFpckhhc0tleSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG9iamVjdEtleXMuaW5kZXhPZihwYWlyS2V5KSA9PT0gLTEpIG9iamVjdEtleXMucHVzaChwYWlyS2V5KTtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sT21hcChkYXRhKSB7XG4gIHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IFtdO1xufVxuXG52YXIgb21hcCA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpvbWFwJywge1xuICBraW5kOiAnc2VxdWVuY2UnLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbE9tYXAsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbE9tYXBcbn0pO1xuXG52YXIgX3RvU3RyaW5nJDEgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbFBhaXJzKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBpbmRleCwgbGVuZ3RoLCBwYWlyLCBrZXlzLCByZXN1bHQsXG4gICAgICBvYmplY3QgPSBkYXRhO1xuXG4gIHJlc3VsdCA9IG5ldyBBcnJheShvYmplY3QubGVuZ3RoKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBwYWlyID0gb2JqZWN0W2luZGV4XTtcblxuICAgIGlmIChfdG9TdHJpbmckMS5jYWxsKHBhaXIpICE9PSAnW29iamVjdCBPYmplY3RdJykgcmV0dXJuIGZhbHNlO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHBhaXIpO1xuXG4gICAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXN1bHRbaW5kZXhdID0gWyBrZXlzWzBdLCBwYWlyW2tleXNbMF1dIF07XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbFBhaXJzKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBbXTtcblxuICB2YXIgaW5kZXgsIGxlbmd0aCwgcGFpciwga2V5cywgcmVzdWx0LFxuICAgICAgb2JqZWN0ID0gZGF0YTtcblxuICByZXN1bHQgPSBuZXcgQXJyYXkob2JqZWN0Lmxlbmd0aCk7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgcGFpciA9IG9iamVjdFtpbmRleF07XG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMocGFpcik7XG5cbiAgICByZXN1bHRbaW5kZXhdID0gWyBrZXlzWzBdLCBwYWlyW2tleXNbMF1dIF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgcGFpcnMgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6cGFpcnMnLCB7XG4gIGtpbmQ6ICdzZXF1ZW5jZScsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sUGFpcnMsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbFBhaXJzXG59KTtcblxudmFyIF9oYXNPd25Qcm9wZXJ0eSQyID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxTZXQoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGtleSwgb2JqZWN0ID0gZGF0YTtcblxuICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoX2hhc093blByb3BlcnR5JDIuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgIGlmIChvYmplY3Rba2V5XSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sU2V0KGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDoge307XG59XG5cbnZhciBzZXQgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6c2V0Jywge1xuICBraW5kOiAnbWFwcGluZycsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sU2V0LFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxTZXRcbn0pO1xuXG52YXIgX2RlZmF1bHQgPSBjb3JlLmV4dGVuZCh7XG4gIGltcGxpY2l0OiBbXG4gICAgdGltZXN0YW1wLFxuICAgIG1lcmdlXG4gIF0sXG4gIGV4cGxpY2l0OiBbXG4gICAgYmluYXJ5LFxuICAgIG9tYXAsXG4gICAgcGFpcnMsXG4gICAgc2V0XG4gIF1cbn0pO1xuXG4vKmVzbGludC1kaXNhYmxlIG1heC1sZW4sbm8tdXNlLWJlZm9yZS1kZWZpbmUqL1xuXG5cblxuXG5cblxuXG52YXIgX2hhc093blByb3BlcnR5JDEgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5cbnZhciBDT05URVhUX0ZMT1dfSU4gICA9IDE7XG52YXIgQ09OVEVYVF9GTE9XX09VVCAgPSAyO1xudmFyIENPTlRFWFRfQkxPQ0tfSU4gID0gMztcbnZhciBDT05URVhUX0JMT0NLX09VVCA9IDQ7XG5cblxudmFyIENIT01QSU5HX0NMSVAgID0gMTtcbnZhciBDSE9NUElOR19TVFJJUCA9IDI7XG52YXIgQ0hPTVBJTkdfS0VFUCAgPSAzO1xuXG5cbnZhciBQQVRURVJOX05PTl9QUklOVEFCTEUgICAgICAgICA9IC9bXFx4MDAtXFx4MDhcXHgwQlxceDBDXFx4MEUtXFx4MUZcXHg3Ri1cXHg4NFxceDg2LVxceDlGXFx1RkZGRVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdLztcbnZhciBQQVRURVJOX05PTl9BU0NJSV9MSU5FX0JSRUFLUyA9IC9bXFx4ODVcXHUyMDI4XFx1MjAyOV0vO1xudmFyIFBBVFRFUk5fRkxPV19JTkRJQ0FUT1JTICAgICAgID0gL1ssXFxbXFxdXFx7XFx9XS87XG52YXIgUEFUVEVSTl9UQUdfSEFORExFICAgICAgICAgICAgPSAvXig/OiF8ISF8IVthLXpcXC1dKyEpJC9pO1xudmFyIFBBVFRFUk5fVEFHX1VSSSAgICAgICAgICAgICAgID0gL14oPzohfFteLFxcW1xcXVxce1xcfV0pKD86JVswLTlhLWZdezJ9fFswLTlhLXpcXC0jO1xcL1xcPzpAJj1cXCtcXCQsX1xcLiF+XFwqJ1xcKFxcKVxcW1xcXV0pKiQvaTtcblxuXG5mdW5jdGlvbiBfY2xhc3Mob2JqKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTsgfVxuXG5mdW5jdGlvbiBpc19FT0woYykge1xuICByZXR1cm4gKGMgPT09IDB4MEEvKiBMRiAqLykgfHwgKGMgPT09IDB4MEQvKiBDUiAqLyk7XG59XG5cbmZ1bmN0aW9uIGlzX1dISVRFX1NQQUNFKGMpIHtcbiAgcmV0dXJuIChjID09PSAweDA5LyogVGFiICovKSB8fCAoYyA9PT0gMHgyMC8qIFNwYWNlICovKTtcbn1cblxuZnVuY3Rpb24gaXNfV1NfT1JfRU9MKGMpIHtcbiAgcmV0dXJuIChjID09PSAweDA5LyogVGFiICovKSB8fFxuICAgICAgICAgKGMgPT09IDB4MjAvKiBTcGFjZSAqLykgfHxcbiAgICAgICAgIChjID09PSAweDBBLyogTEYgKi8pIHx8XG4gICAgICAgICAoYyA9PT0gMHgwRC8qIENSICovKTtcbn1cblxuZnVuY3Rpb24gaXNfRkxPV19JTkRJQ0FUT1IoYykge1xuICByZXR1cm4gYyA9PT0gMHgyQy8qICwgKi8gfHxcbiAgICAgICAgIGMgPT09IDB4NUIvKiBbICovIHx8XG4gICAgICAgICBjID09PSAweDVELyogXSAqLyB8fFxuICAgICAgICAgYyA9PT0gMHg3Qi8qIHsgKi8gfHxcbiAgICAgICAgIGMgPT09IDB4N0QvKiB9ICovO1xufVxuXG5mdW5jdGlvbiBmcm9tSGV4Q29kZShjKSB7XG4gIHZhciBsYztcblxuICBpZiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSkge1xuICAgIHJldHVybiBjIC0gMHgzMDtcbiAgfVxuXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSovXG4gIGxjID0gYyB8IDB4MjA7XG5cbiAgaWYgKCgweDYxLyogYSAqLyA8PSBsYykgJiYgKGxjIDw9IDB4NjYvKiBmICovKSkge1xuICAgIHJldHVybiBsYyAtIDB4NjEgKyAxMDtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlZEhleExlbihjKSB7XG4gIGlmIChjID09PSAweDc4LyogeCAqLykgeyByZXR1cm4gMjsgfVxuICBpZiAoYyA9PT0gMHg3NS8qIHUgKi8pIHsgcmV0dXJuIDQ7IH1cbiAgaWYgKGMgPT09IDB4NTUvKiBVICovKSB7IHJldHVybiA4OyB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBmcm9tRGVjaW1hbENvZGUoYykge1xuICBpZiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSkge1xuICAgIHJldHVybiBjIC0gMHgzMDtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlRXNjYXBlU2VxdWVuY2UoYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbiAgcmV0dXJuIChjID09PSAweDMwLyogMCAqLykgPyAnXFx4MDAnIDpcbiAgICAgICAgKGMgPT09IDB4NjEvKiBhICovKSA/ICdcXHgwNycgOlxuICAgICAgICAoYyA9PT0gMHg2Mi8qIGIgKi8pID8gJ1xceDA4JyA6XG4gICAgICAgIChjID09PSAweDc0LyogdCAqLykgPyAnXFx4MDknIDpcbiAgICAgICAgKGMgPT09IDB4MDkvKiBUYWIgKi8pID8gJ1xceDA5JyA6XG4gICAgICAgIChjID09PSAweDZFLyogbiAqLykgPyAnXFx4MEEnIDpcbiAgICAgICAgKGMgPT09IDB4NzYvKiB2ICovKSA/ICdcXHgwQicgOlxuICAgICAgICAoYyA9PT0gMHg2Ni8qIGYgKi8pID8gJ1xceDBDJyA6XG4gICAgICAgIChjID09PSAweDcyLyogciAqLykgPyAnXFx4MEQnIDpcbiAgICAgICAgKGMgPT09IDB4NjUvKiBlICovKSA/ICdcXHgxQicgOlxuICAgICAgICAoYyA9PT0gMHgyMC8qIFNwYWNlICovKSA/ICcgJyA6XG4gICAgICAgIChjID09PSAweDIyLyogXCIgKi8pID8gJ1xceDIyJyA6XG4gICAgICAgIChjID09PSAweDJGLyogLyAqLykgPyAnLycgOlxuICAgICAgICAoYyA9PT0gMHg1Qy8qIFxcICovKSA/ICdcXHg1QycgOlxuICAgICAgICAoYyA9PT0gMHg0RS8qIE4gKi8pID8gJ1xceDg1JyA6XG4gICAgICAgIChjID09PSAweDVGLyogXyAqLykgPyAnXFx4QTAnIDpcbiAgICAgICAgKGMgPT09IDB4NEMvKiBMICovKSA/ICdcXHUyMDI4JyA6XG4gICAgICAgIChjID09PSAweDUwLyogUCAqLykgPyAnXFx1MjAyOScgOiAnJztcbn1cblxuZnVuY3Rpb24gY2hhckZyb21Db2RlcG9pbnQoYykge1xuICBpZiAoYyA8PSAweEZGRkYpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgfVxuICAvLyBFbmNvZGUgVVRGLTE2IHN1cnJvZ2F0ZSBwYWlyXG4gIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VURi0xNiNDb2RlX3BvaW50c19VLjJCMDEwMDAwX3RvX1UuMkIxMEZGRkZcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgKChjIC0gMHgwMTAwMDApID4+IDEwKSArIDB4RDgwMCxcbiAgICAoKGMgLSAweDAxMDAwMCkgJiAweDAzRkYpICsgMHhEQzAwXG4gICk7XG59XG5cbnZhciBzaW1wbGVFc2NhcGVDaGVjayA9IG5ldyBBcnJheSgyNTYpOyAvLyBpbnRlZ2VyLCBmb3IgZmFzdCBhY2Nlc3NcbnZhciBzaW1wbGVFc2NhcGVNYXAgPSBuZXcgQXJyYXkoMjU2KTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgc2ltcGxlRXNjYXBlQ2hlY2tbaV0gPSBzaW1wbGVFc2NhcGVTZXF1ZW5jZShpKSA/IDEgOiAwO1xuICBzaW1wbGVFc2NhcGVNYXBbaV0gPSBzaW1wbGVFc2NhcGVTZXF1ZW5jZShpKTtcbn1cblxuXG5mdW5jdGlvbiBTdGF0ZSQxKGlucHV0LCBvcHRpb25zKSB7XG4gIHRoaXMuaW5wdXQgPSBpbnB1dDtcblxuICB0aGlzLmZpbGVuYW1lICA9IG9wdGlvbnNbJ2ZpbGVuYW1lJ10gIHx8IG51bGw7XG4gIHRoaXMuc2NoZW1hICAgID0gb3B0aW9uc1snc2NoZW1hJ10gICAgfHwgX2RlZmF1bHQ7XG4gIHRoaXMub25XYXJuaW5nID0gb3B0aW9uc1snb25XYXJuaW5nJ10gfHwgbnVsbDtcbiAgLy8gKEhpZGRlbikgUmVtb3ZlPyBtYWtlcyB0aGUgbG9hZGVyIHRvIGV4cGVjdCBZQU1MIDEuMSBkb2N1bWVudHNcbiAgLy8gaWYgc3VjaCBkb2N1bWVudHMgaGF2ZSBubyBleHBsaWNpdCAlWUFNTCBkaXJlY3RpdmVcbiAgdGhpcy5sZWdhY3kgICAgPSBvcHRpb25zWydsZWdhY3knXSAgICB8fCBmYWxzZTtcblxuICB0aGlzLmpzb24gICAgICA9IG9wdGlvbnNbJ2pzb24nXSAgICAgIHx8IGZhbHNlO1xuICB0aGlzLmxpc3RlbmVyICA9IG9wdGlvbnNbJ2xpc3RlbmVyJ10gIHx8IG51bGw7XG5cbiAgdGhpcy5pbXBsaWNpdFR5cGVzID0gdGhpcy5zY2hlbWEuY29tcGlsZWRJbXBsaWNpdDtcbiAgdGhpcy50eXBlTWFwICAgICAgID0gdGhpcy5zY2hlbWEuY29tcGlsZWRUeXBlTWFwO1xuXG4gIHRoaXMubGVuZ3RoICAgICA9IGlucHV0Lmxlbmd0aDtcbiAgdGhpcy5wb3NpdGlvbiAgID0gMDtcbiAgdGhpcy5saW5lICAgICAgID0gMDtcbiAgdGhpcy5saW5lU3RhcnQgID0gMDtcbiAgdGhpcy5saW5lSW5kZW50ID0gMDtcblxuICAvLyBwb3NpdGlvbiBvZiBmaXJzdCBsZWFkaW5nIHRhYiBpbiB0aGUgY3VycmVudCBsaW5lLFxuICAvLyB1c2VkIHRvIG1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gdGFicyBpbiB0aGUgaW5kZW50YXRpb25cbiAgdGhpcy5maXJzdFRhYkluTGluZSA9IC0xO1xuXG4gIHRoaXMuZG9jdW1lbnRzID0gW107XG5cbiAgLypcbiAgdGhpcy52ZXJzaW9uO1xuICB0aGlzLmNoZWNrTGluZUJyZWFrcztcbiAgdGhpcy50YWdNYXA7XG4gIHRoaXMuYW5jaG9yTWFwO1xuICB0aGlzLnRhZztcbiAgdGhpcy5hbmNob3I7XG4gIHRoaXMua2luZDtcbiAgdGhpcy5yZXN1bHQ7Ki9cblxufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlRXJyb3Ioc3RhdGUsIG1lc3NhZ2UpIHtcbiAgdmFyIG1hcmsgPSB7XG4gICAgbmFtZTogICAgIHN0YXRlLmZpbGVuYW1lLFxuICAgIGJ1ZmZlcjogICBzdGF0ZS5pbnB1dC5zbGljZSgwLCAtMSksIC8vIG9taXQgdHJhaWxpbmcgXFwwXG4gICAgcG9zaXRpb246IHN0YXRlLnBvc2l0aW9uLFxuICAgIGxpbmU6ICAgICBzdGF0ZS5saW5lLFxuICAgIGNvbHVtbjogICBzdGF0ZS5wb3NpdGlvbiAtIHN0YXRlLmxpbmVTdGFydFxuICB9O1xuXG4gIG1hcmsuc25pcHBldCA9IHNuaXBwZXQobWFyayk7XG5cbiAgcmV0dXJuIG5ldyBleGNlcHRpb24obWVzc2FnZSwgbWFyayk7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3Ioc3RhdGUsIG1lc3NhZ2UpIHtcbiAgdGhyb3cgZ2VuZXJhdGVFcnJvcihzdGF0ZSwgbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHRocm93V2FybmluZyhzdGF0ZSwgbWVzc2FnZSkge1xuICBpZiAoc3RhdGUub25XYXJuaW5nKSB7XG4gICAgc3RhdGUub25XYXJuaW5nLmNhbGwobnVsbCwgZ2VuZXJhdGVFcnJvcihzdGF0ZSwgbWVzc2FnZSkpO1xuICB9XG59XG5cblxudmFyIGRpcmVjdGl2ZUhhbmRsZXJzID0ge1xuXG4gIFlBTUw6IGZ1bmN0aW9uIGhhbmRsZVlhbWxEaXJlY3RpdmUoc3RhdGUsIG5hbWUsIGFyZ3MpIHtcblxuICAgIHZhciBtYXRjaCwgbWFqb3IsIG1pbm9yO1xuXG4gICAgaWYgKHN0YXRlLnZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGlvbiBvZiAlWUFNTCBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdZQU1MIGRpcmVjdGl2ZSBhY2NlcHRzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgbWF0Y2ggPSAvXihbMC05XSspXFwuKFswLTldKykkLy5leGVjKGFyZ3NbMF0pO1xuXG4gICAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaWxsLWZvcm1lZCBhcmd1bWVudCBvZiB0aGUgWUFNTCBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBtYWpvciA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gICAgbWlub3IgPSBwYXJzZUludChtYXRjaFsyXSwgMTApO1xuXG4gICAgaWYgKG1ham9yICE9PSAxKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5hY2NlcHRhYmxlIFlBTUwgdmVyc2lvbiBvZiB0aGUgZG9jdW1lbnQnKTtcbiAgICB9XG5cbiAgICBzdGF0ZS52ZXJzaW9uID0gYXJnc1swXTtcbiAgICBzdGF0ZS5jaGVja0xpbmVCcmVha3MgPSAobWlub3IgPCAyKTtcblxuICAgIGlmIChtaW5vciAhPT0gMSAmJiBtaW5vciAhPT0gMikge1xuICAgICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAndW5zdXBwb3J0ZWQgWUFNTCB2ZXJzaW9uIG9mIHRoZSBkb2N1bWVudCcpO1xuICAgIH1cbiAgfSxcblxuICBUQUc6IGZ1bmN0aW9uIGhhbmRsZVRhZ0RpcmVjdGl2ZShzdGF0ZSwgbmFtZSwgYXJncykge1xuXG4gICAgdmFyIGhhbmRsZSwgcHJlZml4O1xuXG4gICAgaWYgKGFyZ3MubGVuZ3RoICE9PSAyKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnVEFHIGRpcmVjdGl2ZSBhY2NlcHRzIGV4YWN0bHkgdHdvIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGhhbmRsZSA9IGFyZ3NbMF07XG4gICAgcHJlZml4ID0gYXJnc1sxXTtcblxuICAgIGlmICghUEFUVEVSTl9UQUdfSEFORExFLnRlc3QoaGFuZGxlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2lsbC1mb3JtZWQgdGFnIGhhbmRsZSAoZmlyc3QgYXJndW1lbnQpIG9mIHRoZSBUQUcgZGlyZWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eSQxLmNhbGwoc3RhdGUudGFnTWFwLCBoYW5kbGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGhlcmUgaXMgYSBwcmV2aW91c2x5IGRlY2xhcmVkIHN1ZmZpeCBmb3IgXCInICsgaGFuZGxlICsgJ1wiIHRhZyBoYW5kbGUnKTtcbiAgICB9XG5cbiAgICBpZiAoIVBBVFRFUk5fVEFHX1VSSS50ZXN0KHByZWZpeCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdpbGwtZm9ybWVkIHRhZyBwcmVmaXggKHNlY29uZCBhcmd1bWVudCkgb2YgdGhlIFRBRyBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcHJlZml4ID0gZGVjb2RlVVJJQ29tcG9uZW50KHByZWZpeCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFnIHByZWZpeCBpcyBtYWxmb3JtZWQ6ICcgKyBwcmVmaXgpO1xuICAgIH1cblxuICAgIHN0YXRlLnRhZ01hcFtoYW5kbGVdID0gcHJlZml4O1xuICB9XG59O1xuXG5cbmZ1bmN0aW9uIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBzdGFydCwgZW5kLCBjaGVja0pzb24pIHtcbiAgdmFyIF9wb3NpdGlvbiwgX2xlbmd0aCwgX2NoYXJhY3RlciwgX3Jlc3VsdDtcblxuICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICBfcmVzdWx0ID0gc3RhdGUuaW5wdXQuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICBpZiAoY2hlY2tKc29uKSB7XG4gICAgICBmb3IgKF9wb3NpdGlvbiA9IDAsIF9sZW5ndGggPSBfcmVzdWx0Lmxlbmd0aDsgX3Bvc2l0aW9uIDwgX2xlbmd0aDsgX3Bvc2l0aW9uICs9IDEpIHtcbiAgICAgICAgX2NoYXJhY3RlciA9IF9yZXN1bHQuY2hhckNvZGVBdChfcG9zaXRpb24pO1xuICAgICAgICBpZiAoIShfY2hhcmFjdGVyID09PSAweDA5IHx8XG4gICAgICAgICAgICAgICgweDIwIDw9IF9jaGFyYWN0ZXIgJiYgX2NoYXJhY3RlciA8PSAweDEwRkZGRikpKSB7XG4gICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2V4cGVjdGVkIHZhbGlkIEpTT04gY2hhcmFjdGVyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFBBVFRFUk5fTk9OX1BSSU5UQUJMRS50ZXN0KF9yZXN1bHQpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGhlIHN0cmVhbSBjb250YWlucyBub24tcHJpbnRhYmxlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5yZXN1bHQgKz0gX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZU1hcHBpbmdzKHN0YXRlLCBkZXN0aW5hdGlvbiwgc291cmNlLCBvdmVycmlkYWJsZUtleXMpIHtcbiAgdmFyIHNvdXJjZUtleXMsIGtleSwgaW5kZXgsIHF1YW50aXR5O1xuXG4gIGlmICghY29tbW9uLmlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2Fubm90IG1lcmdlIG1hcHBpbmdzOyB0aGUgcHJvdmlkZWQgc291cmNlIG9iamVjdCBpcyB1bmFjY2VwdGFibGUnKTtcbiAgfVxuXG4gIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBxdWFudGl0eSA9IHNvdXJjZUtleXMubGVuZ3RoOyBpbmRleCA8IHF1YW50aXR5OyBpbmRleCArPSAxKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpbmRleF07XG5cbiAgICBpZiAoIV9oYXNPd25Qcm9wZXJ0eSQxLmNhbGwoZGVzdGluYXRpb24sIGtleSkpIHtcbiAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIG92ZXJyaWRhYmxlS2V5c1trZXldID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSxcbiAgc3RhcnRMaW5lLCBzdGFydExpbmVTdGFydCwgc3RhcnRQb3MpIHtcblxuICB2YXIgaW5kZXgsIHF1YW50aXR5O1xuXG4gIC8vIFRoZSBvdXRwdXQgaXMgYSBwbGFpbiBvYmplY3QgaGVyZSwgc28ga2V5cyBjYW4gb25seSBiZSBzdHJpbmdzLlxuICAvLyBXZSBuZWVkIHRvIGNvbnZlcnQga2V5Tm9kZSB0byBhIHN0cmluZywgYnV0IGRvaW5nIHNvIGNhbiBoYW5nIHRoZSBwcm9jZXNzXG4gIC8vIChkZWVwbHkgbmVzdGVkIGFycmF5cyB0aGF0IGV4cGxvZGUgZXhwb25lbnRpYWxseSB1c2luZyBhbGlhc2VzKS5cbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5Tm9kZSkpIHtcbiAgICBrZXlOb2RlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoa2V5Tm9kZSk7XG5cbiAgICBmb3IgKGluZGV4ID0gMCwgcXVhbnRpdHkgPSBrZXlOb2RlLmxlbmd0aDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXggKz0gMSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5Tm9kZVtpbmRleF0pKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICduZXN0ZWQgYXJyYXlzIGFyZSBub3Qgc3VwcG9ydGVkIGluc2lkZSBrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Yga2V5Tm9kZSA9PT0gJ29iamVjdCcgJiYgX2NsYXNzKGtleU5vZGVbaW5kZXhdKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAga2V5Tm9kZVtpbmRleF0gPSAnW29iamVjdCBPYmplY3RdJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBdm9pZCBjb2RlIGV4ZWN1dGlvbiBpbiBsb2FkKCkgdmlhIHRvU3RyaW5nIHByb3BlcnR5XG4gIC8vIChzdGlsbCB1c2UgaXRzIG93biB0b1N0cmluZyBmb3IgYXJyYXlzLCB0aW1lc3RhbXBzLFxuICAvLyBhbmQgd2hhdGV2ZXIgdXNlciBzY2hlbWEgZXh0ZW5zaW9ucyBoYXBwZW4gdG8gaGF2ZSBAQHRvU3RyaW5nVGFnKVxuICBpZiAodHlwZW9mIGtleU5vZGUgPT09ICdvYmplY3QnICYmIF9jbGFzcyhrZXlOb2RlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBrZXlOb2RlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIH1cblxuXG4gIGtleU5vZGUgPSBTdHJpbmcoa2V5Tm9kZSk7XG5cbiAgaWYgKF9yZXN1bHQgPT09IG51bGwpIHtcbiAgICBfcmVzdWx0ID0ge307XG4gIH1cblxuICBpZiAoa2V5VGFnID09PSAndGFnOnlhbWwub3JnLDIwMDI6bWVyZ2UnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVOb2RlKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIHF1YW50aXR5ID0gdmFsdWVOb2RlLmxlbmd0aDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXggKz0gMSkge1xuICAgICAgICBtZXJnZU1hcHBpbmdzKHN0YXRlLCBfcmVzdWx0LCB2YWx1ZU5vZGVbaW5kZXhdLCBvdmVycmlkYWJsZUtleXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXJnZU1hcHBpbmdzKHN0YXRlLCBfcmVzdWx0LCB2YWx1ZU5vZGUsIG92ZXJyaWRhYmxlS2V5cyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICghc3RhdGUuanNvbiAmJlxuICAgICAgICAhX2hhc093blByb3BlcnR5JDEuY2FsbChvdmVycmlkYWJsZUtleXMsIGtleU5vZGUpICYmXG4gICAgICAgIF9oYXNPd25Qcm9wZXJ0eSQxLmNhbGwoX3Jlc3VsdCwga2V5Tm9kZSkpIHtcbiAgICAgIHN0YXRlLmxpbmUgPSBzdGFydExpbmUgfHwgc3RhdGUubGluZTtcbiAgICAgIHN0YXRlLmxpbmVTdGFydCA9IHN0YXJ0TGluZVN0YXJ0IHx8IHN0YXRlLmxpbmVTdGFydDtcbiAgICAgIHN0YXRlLnBvc2l0aW9uID0gc3RhcnRQb3MgfHwgc3RhdGUucG9zaXRpb247XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZHVwbGljYXRlZCBtYXBwaW5nIGtleScpO1xuICAgIH1cblxuICAgIC8vIHVzZWQgZm9yIHRoaXMgc3BlY2lmaWMga2V5IG9ubHkgYmVjYXVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgaXMgc2xvd1xuICAgIGlmIChrZXlOb2RlID09PSAnX19wcm90b19fJykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9yZXN1bHQsIGtleU5vZGUsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlTm9kZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9yZXN1bHRba2V5Tm9kZV0gPSB2YWx1ZU5vZGU7XG4gICAgfVxuICAgIGRlbGV0ZSBvdmVycmlkYWJsZUtleXNba2V5Tm9kZV07XG4gIH1cblxuICByZXR1cm4gX3Jlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVhZExpbmVCcmVhayhzdGF0ZSkge1xuICB2YXIgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4MEEvKiBMRiAqLykge1xuICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4MEQvKiBDUiAqLykge1xuICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgaWYgKHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pID09PSAweDBBLyogTEYgKi8pIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdhIGxpbmUgYnJlYWsgaXMgZXhwZWN0ZWQnKTtcbiAgfVxuXG4gIHN0YXRlLmxpbmUgKz0gMTtcbiAgc3RhdGUubGluZVN0YXJ0ID0gc3RhdGUucG9zaXRpb247XG4gIHN0YXRlLmZpcnN0VGFiSW5MaW5lID0gLTE7XG59XG5cbmZ1bmN0aW9uIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGFsbG93Q29tbWVudHMsIGNoZWNrSW5kZW50KSB7XG4gIHZhciBsaW5lQnJlYWtzID0gMCxcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgd2hpbGUgKGlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgICAgaWYgKGNoID09PSAweDA5LyogVGFiICovICYmIHN0YXRlLmZpcnN0VGFiSW5MaW5lID09PSAtMSkge1xuICAgICAgICBzdGF0ZS5maXJzdFRhYkluTGluZSA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmIChhbGxvd0NvbW1lbnRzICYmIGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgZG8ge1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICB9IHdoaWxlIChjaCAhPT0gMHgwQS8qIExGICovICYmIGNoICE9PSAweDBELyogQ1IgKi8gJiYgY2ggIT09IDApO1xuICAgIH1cblxuICAgIGlmIChpc19FT0woY2gpKSB7XG4gICAgICByZWFkTGluZUJyZWFrKHN0YXRlKTtcblxuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcbiAgICAgIGxpbmVCcmVha3MrKztcbiAgICAgIHN0YXRlLmxpbmVJbmRlbnQgPSAwO1xuXG4gICAgICB3aGlsZSAoY2ggPT09IDB4MjAvKiBTcGFjZSAqLykge1xuICAgICAgICBzdGF0ZS5saW5lSW5kZW50Kys7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNoZWNrSW5kZW50ICE9PSAtMSAmJiBsaW5lQnJlYWtzICE9PSAwICYmIHN0YXRlLmxpbmVJbmRlbnQgPCBjaGVja0luZGVudCkge1xuICAgIHRocm93V2FybmluZyhzdGF0ZSwgJ2RlZmljaWVudCBpbmRlbnRhdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVCcmVha3M7XG59XG5cbmZ1bmN0aW9uIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkge1xuICB2YXIgX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24sXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uKTtcblxuICAvLyBDb25kaXRpb24gc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCBpcyB0ZXN0ZWRcbiAgLy8gaW4gcGFyZW50IG9uIGVhY2ggY2FsbCwgZm9yIGVmZmljaWVuY3kuIE5vIG5lZWRzIHRvIHRlc3QgaGVyZSBhZ2Fpbi5cbiAgaWYgKChjaCA9PT0gMHgyRC8qIC0gKi8gfHwgY2ggPT09IDB4MkUvKiAuICovKSAmJlxuICAgICAgY2ggPT09IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uICsgMSkgJiZcbiAgICAgIGNoID09PSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbiArIDIpKSB7XG5cbiAgICBfcG9zaXRpb24gKz0gMztcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSAwIHx8IGlzX1dTX09SX0VPTChjaCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gd3JpdGVGb2xkZWRMaW5lcyhzdGF0ZSwgY291bnQpIHtcbiAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgc3RhdGUucmVzdWx0ICs9ICcgJztcbiAgfSBlbHNlIGlmIChjb3VudCA+IDEpIHtcbiAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgY291bnQgLSAxKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlYWRQbGFpblNjYWxhcihzdGF0ZSwgbm9kZUluZGVudCwgd2l0aGluRmxvd0NvbGxlY3Rpb24pIHtcbiAgdmFyIHByZWNlZGluZyxcbiAgICAgIGZvbGxvd2luZyxcbiAgICAgIGNhcHR1cmVTdGFydCxcbiAgICAgIGNhcHR1cmVFbmQsXG4gICAgICBoYXNQZW5kaW5nQ29udGVudCxcbiAgICAgIF9saW5lLFxuICAgICAgX2xpbmVTdGFydCxcbiAgICAgIF9saW5lSW5kZW50LFxuICAgICAgX2tpbmQgPSBzdGF0ZS5raW5kLFxuICAgICAgX3Jlc3VsdCA9IHN0YXRlLnJlc3VsdCxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGlzX1dTX09SX0VPTChjaCkgICAgICB8fFxuICAgICAgaXNfRkxPV19JTkRJQ0FUT1IoY2gpIHx8XG4gICAgICBjaCA9PT0gMHgyMy8qICMgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDI2LyogJiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MkEvKiAqICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyMS8qICEgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDdDLyogfCAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4M0UvKiA+ICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyNy8qICcgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDIyLyogXCIgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDI1LyogJSAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4NDAvKiBAICovICAgIHx8XG4gICAgICBjaCA9PT0gMHg2MC8qIGAgKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoY2ggPT09IDB4M0YvKiA/ICovIHx8IGNoID09PSAweDJELyogLSAqLykge1xuICAgIGZvbGxvd2luZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKTtcblxuICAgIGlmIChpc19XU19PUl9FT0woZm9sbG93aW5nKSB8fFxuICAgICAgICB3aXRoaW5GbG93Q29sbGVjdGlvbiAmJiBpc19GTE9XX0lORElDQVRPUihmb2xsb3dpbmcpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUua2luZCA9ICdzY2FsYXInO1xuICBzdGF0ZS5yZXN1bHQgPSAnJztcbiAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICBoYXNQZW5kaW5nQ29udGVudCA9IGZhbHNlO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIGlmIChjaCA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgIGZvbGxvd2luZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKTtcblxuICAgICAgaWYgKGlzX1dTX09SX0VPTChmb2xsb3dpbmcpIHx8XG4gICAgICAgICAgd2l0aGluRmxvd0NvbGxlY3Rpb24gJiYgaXNfRkxPV19JTkRJQ0FUT1IoZm9sbG93aW5nKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4MjMvKiAjICovKSB7XG4gICAgICBwcmVjZWRpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uIC0gMSk7XG5cbiAgICAgIGlmIChpc19XU19PUl9FT0wocHJlY2VkaW5nKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoKHN0YXRlLnBvc2l0aW9uID09PSBzdGF0ZS5saW5lU3RhcnQgJiYgdGVzdERvY3VtZW50U2VwYXJhdG9yKHN0YXRlKSkgfHxcbiAgICAgICAgICAgICAgIHdpdGhpbkZsb3dDb2xsZWN0aW9uICYmIGlzX0ZMT1dfSU5ESUNBVE9SKGNoKSkge1xuICAgICAgYnJlYWs7XG5cbiAgICB9IGVsc2UgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIF9saW5lID0gc3RhdGUubGluZTtcbiAgICAgIF9saW5lU3RhcnQgPSBzdGF0ZS5saW5lU3RhcnQ7XG4gICAgICBfbGluZUluZGVudCA9IHN0YXRlLmxpbmVJbmRlbnQ7XG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgLTEpO1xuXG4gICAgICBpZiAoc3RhdGUubGluZUluZGVudCA+PSBub2RlSW5kZW50KSB7XG4gICAgICAgIGhhc1BlbmRpbmdDb250ZW50ID0gdHJ1ZTtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbiA9IGNhcHR1cmVFbmQ7XG4gICAgICAgIHN0YXRlLmxpbmUgPSBfbGluZTtcbiAgICAgICAgc3RhdGUubGluZVN0YXJ0ID0gX2xpbmVTdGFydDtcbiAgICAgICAgc3RhdGUubGluZUluZGVudCA9IF9saW5lSW5kZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzUGVuZGluZ0NvbnRlbnQpIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIGNhcHR1cmVFbmQsIGZhbHNlKTtcbiAgICAgIHdyaXRlRm9sZGVkTGluZXMoc3RhdGUsIHN0YXRlLmxpbmUgLSBfbGluZSk7XG4gICAgICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gICAgICBoYXNQZW5kaW5nQ29udGVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb24gKyAxO1xuICAgIH1cblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIGNhcHR1cmVFbmQsIGZhbHNlKTtcblxuICBpZiAoc3RhdGUucmVzdWx0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0ZS5raW5kID0gX2tpbmQ7XG4gIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVhZFNpbmdsZVF1b3RlZFNjYWxhcihzdGF0ZSwgbm9kZUluZGVudCkge1xuICB2YXIgY2gsXG4gICAgICBjYXB0dXJlU3RhcnQsIGNhcHR1cmVFbmQ7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MjcvKiAnICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGUua2luZCA9ICdzY2FsYXInO1xuICBzdGF0ZS5yZXN1bHQgPSAnJztcbiAgc3RhdGUucG9zaXRpb24rKztcbiAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlICgoY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSkgIT09IDApIHtcbiAgICBpZiAoY2ggPT09IDB4MjcvKiAnICovKSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBzdGF0ZS5wb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgIGlmIChjaCA9PT0gMHgyNy8qICcgKi8pIHtcbiAgICAgICAgY2FwdHVyZVN0YXJ0ID0gc3RhdGUucG9zaXRpb247XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICAgIGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBjYXB0dXJlRW5kLCB0cnVlKTtcbiAgICAgIHdyaXRlRm9sZGVkTGluZXMoc3RhdGUsIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCBub2RlSW5kZW50KSk7XG4gICAgICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG5cbiAgICB9IGVsc2UgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBzdGF0ZS5saW5lU3RhcnQgJiYgdGVzdERvY3VtZW50U2VwYXJhdG9yKHN0YXRlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBkb2N1bWVudCB3aXRoaW4gYSBzaW5nbGUgcXVvdGVkIHNjYWxhcicpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBzdHJlYW0gd2l0aGluIGEgc2luZ2xlIHF1b3RlZCBzY2FsYXInKTtcbn1cblxuZnVuY3Rpb24gcmVhZERvdWJsZVF1b3RlZFNjYWxhcihzdGF0ZSwgbm9kZUluZGVudCkge1xuICB2YXIgY2FwdHVyZVN0YXJ0LFxuICAgICAgY2FwdHVyZUVuZCxcbiAgICAgIGhleExlbmd0aCxcbiAgICAgIGhleFJlc3VsdCxcbiAgICAgIHRtcCxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDIyLyogXCIgKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0ZS5raW5kID0gJ3NjYWxhcic7XG4gIHN0YXRlLnJlc3VsdCA9ICcnO1xuICBzdGF0ZS5wb3NpdGlvbisrO1xuICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG5cbiAgd2hpbGUgKChjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pKSAhPT0gMCkge1xuICAgIGlmIChjaCA9PT0gMHgyMi8qIFwiICovKSB7XG4gICAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBzdGF0ZS5wb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9IGVsc2UgaWYgKGNoID09PSAweDVDLyogXFwgKi8pIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCB0cnVlKTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgZmFsc2UsIG5vZGVJbmRlbnQpO1xuXG4gICAgICAgIC8vIFRPRE86IHJld29yayB0byBpbmxpbmUgZm4gd2l0aCBubyB0eXBlIGNhc3Q/XG4gICAgICB9IGVsc2UgaWYgKGNoIDwgMjU2ICYmIHNpbXBsZUVzY2FwZUNoZWNrW2NoXSkge1xuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gc2ltcGxlRXNjYXBlTWFwW2NoXTtcbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcblxuICAgICAgfSBlbHNlIGlmICgodG1wID0gZXNjYXBlZEhleExlbihjaCkpID4gMCkge1xuICAgICAgICBoZXhMZW5ndGggPSB0bXA7XG4gICAgICAgIGhleFJlc3VsdCA9IDA7XG5cbiAgICAgICAgZm9yICg7IGhleExlbmd0aCA+IDA7IGhleExlbmd0aC0tKSB7XG4gICAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICAgICAgaWYgKCh0bXAgPSBmcm9tSGV4Q29kZShjaCkpID49IDApIHtcbiAgICAgICAgICAgIGhleFJlc3VsdCA9IChoZXhSZXN1bHQgPDwgNCkgKyB0bXA7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2V4cGVjdGVkIGhleGFkZWNpbWFsIGNoYXJhY3RlcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBjaGFyRnJvbUNvZGVwb2ludChoZXhSZXN1bHQpO1xuXG4gICAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmtub3duIGVzY2FwZSBzZXF1ZW5jZScpO1xuICAgICAgfVxuXG4gICAgICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG5cbiAgICB9IGVsc2UgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIGNhcHR1cmVFbmQsIHRydWUpO1xuICAgICAgd3JpdGVGb2xkZWRMaW5lcyhzdGF0ZSwgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgZmFsc2UsIG5vZGVJbmRlbnQpKTtcbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIH0gZWxzZSBpZiAoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIGRvY3VtZW50IHdpdGhpbiBhIGRvdWJsZSBxdW90ZWQgc2NhbGFyJyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgIGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSBkb3VibGUgcXVvdGVkIHNjYWxhcicpO1xufVxuXG5mdW5jdGlvbiByZWFkRmxvd0NvbGxlY3Rpb24oc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIHJlYWROZXh0ID0gdHJ1ZSxcbiAgICAgIF9saW5lLFxuICAgICAgX2xpbmVTdGFydCxcbiAgICAgIF9wb3MsXG4gICAgICBfdGFnICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIF9yZXN1bHQsXG4gICAgICBfYW5jaG9yICA9IHN0YXRlLmFuY2hvcixcbiAgICAgIGZvbGxvd2luZyxcbiAgICAgIHRlcm1pbmF0b3IsXG4gICAgICBpc1BhaXIsXG4gICAgICBpc0V4cGxpY2l0UGFpcixcbiAgICAgIGlzTWFwcGluZyxcbiAgICAgIG92ZXJyaWRhYmxlS2V5cyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBrZXlOb2RlLFxuICAgICAga2V5VGFnLFxuICAgICAgdmFsdWVOb2RlLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4NUIvKiBbICovKSB7XG4gICAgdGVybWluYXRvciA9IDB4NUQ7LyogXSAqL1xuICAgIGlzTWFwcGluZyA9IGZhbHNlO1xuICAgIF9yZXN1bHQgPSBbXTtcbiAgfSBlbHNlIGlmIChjaCA9PT0gMHg3Qi8qIHsgKi8pIHtcbiAgICB0ZXJtaW5hdG9yID0gMHg3RDsvKiB9ICovXG4gICAgaXNNYXBwaW5nID0gdHJ1ZTtcbiAgICBfcmVzdWx0ID0ge307XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gX3Jlc3VsdDtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IHRlcm1pbmF0b3IpIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICBzdGF0ZS50YWcgPSBfdGFnO1xuICAgICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICAgIHN0YXRlLmtpbmQgPSBpc01hcHBpbmcgPyAnbWFwcGluZycgOiAnc2VxdWVuY2UnO1xuICAgICAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXJlYWROZXh0KSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbWlzc2VkIGNvbW1hIGJldHdlZW4gZmxvdyBjb2xsZWN0aW9uIGVudHJpZXMnKTtcbiAgICB9IGVsc2UgaWYgKGNoID09PSAweDJDLyogLCAqLykge1xuICAgICAgLy8gXCJmbG93IGNvbGxlY3Rpb24gZW50cmllcyBjYW4gbmV2ZXIgYmUgY29tcGxldGVseSBlbXB0eVwiLCBhcyBwZXIgWUFNTCAxLjIsIHNlY3Rpb24gNy40XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCBcImV4cGVjdGVkIHRoZSBub2RlIGNvbnRlbnQsIGJ1dCBmb3VuZCAnLCdcIik7XG4gICAgfVxuXG4gICAga2V5VGFnID0ga2V5Tm9kZSA9IHZhbHVlTm9kZSA9IG51bGw7XG4gICAgaXNQYWlyID0gaXNFeHBsaWNpdFBhaXIgPSBmYWxzZTtcblxuICAgIGlmIChjaCA9PT0gMHgzRi8qID8gKi8pIHtcbiAgICAgIGZvbGxvd2luZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKTtcblxuICAgICAgaWYgKGlzX1dTX09SX0VPTChmb2xsb3dpbmcpKSB7XG4gICAgICAgIGlzUGFpciA9IGlzRXhwbGljaXRQYWlyID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2xpbmUgPSBzdGF0ZS5saW5lOyAvLyBTYXZlIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgX2xpbmVTdGFydCA9IHN0YXRlLmxpbmVTdGFydDtcbiAgICBfcG9zID0gc3RhdGUucG9zaXRpb247XG4gICAgY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfRkxPV19JTiwgZmFsc2UsIHRydWUpO1xuICAgIGtleVRhZyA9IHN0YXRlLnRhZztcbiAgICBrZXlOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmICgoaXNFeHBsaWNpdFBhaXIgfHwgc3RhdGUubGluZSA9PT0gX2xpbmUpICYmIGNoID09PSAweDNBLyogOiAqLykge1xuICAgICAgaXNQYWlyID0gdHJ1ZTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuICAgICAgY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfRkxPV19JTiwgZmFsc2UsIHRydWUpO1xuICAgICAgdmFsdWVOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpc01hcHBpbmcpIHtcbiAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCB2YWx1ZU5vZGUsIF9saW5lLCBfbGluZVN0YXJ0LCBfcG9zKTtcbiAgICB9IGVsc2UgaWYgKGlzUGFpcikge1xuICAgICAgX3Jlc3VsdC5wdXNoKHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIG51bGwsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCB2YWx1ZU5vZGUsIF9saW5lLCBfbGluZVN0YXJ0LCBfcG9zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9yZXN1bHQucHVzaChrZXlOb2RlKTtcbiAgICB9XG5cbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IDB4MkMvKiAsICovKSB7XG4gICAgICByZWFkTmV4dCA9IHRydWU7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlYWROZXh0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBzdHJlYW0gd2l0aGluIGEgZmxvdyBjb2xsZWN0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRCbG9ja1NjYWxhcihzdGF0ZSwgbm9kZUluZGVudCkge1xuICB2YXIgY2FwdHVyZVN0YXJ0LFxuICAgICAgZm9sZGluZyxcbiAgICAgIGNob21waW5nICAgICAgID0gQ0hPTVBJTkdfQ0xJUCxcbiAgICAgIGRpZFJlYWRDb250ZW50ID0gZmFsc2UsXG4gICAgICBkZXRlY3RlZEluZGVudCA9IGZhbHNlLFxuICAgICAgdGV4dEluZGVudCAgICAgPSBub2RlSW5kZW50LFxuICAgICAgZW1wdHlMaW5lcyAgICAgPSAwLFxuICAgICAgYXRNb3JlSW5kZW50ZWQgPSBmYWxzZSxcbiAgICAgIHRtcCxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoID09PSAweDdDLyogfCAqLykge1xuICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChjaCA9PT0gMHgzRS8qID4gKi8pIHtcbiAgICBmb2xkaW5nID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0ZS5raW5kID0gJ3NjYWxhcic7XG4gIHN0YXRlLnJlc3VsdCA9ICcnO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChjaCA9PT0gMHgyQi8qICsgKi8gfHwgY2ggPT09IDB4MkQvKiAtICovKSB7XG4gICAgICBpZiAoQ0hPTVBJTkdfQ0xJUCA9PT0gY2hvbXBpbmcpIHtcbiAgICAgICAgY2hvbXBpbmcgPSAoY2ggPT09IDB4MkIvKiArICovKSA/IENIT01QSU5HX0tFRVAgOiBDSE9NUElOR19TVFJJUDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdyZXBlYXQgb2YgYSBjaG9tcGluZyBtb2RlIGlkZW50aWZpZXInKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoKHRtcCA9IGZyb21EZWNpbWFsQ29kZShjaCkpID49IDApIHtcbiAgICAgIGlmICh0bXAgPT09IDApIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2JhZCBleHBsaWNpdCBpbmRlbnRhdGlvbiB3aWR0aCBvZiBhIGJsb2NrIHNjYWxhcjsgaXQgY2Fubm90IGJlIGxlc3MgdGhhbiBvbmUnKTtcbiAgICAgIH0gZWxzZSBpZiAoIWRldGVjdGVkSW5kZW50KSB7XG4gICAgICAgIHRleHRJbmRlbnQgPSBub2RlSW5kZW50ICsgdG1wIC0gMTtcbiAgICAgICAgZGV0ZWN0ZWRJbmRlbnQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3JlcGVhdCBvZiBhbiBpbmRlbnRhdGlvbiB3aWR0aCBpZGVudGlmaWVyJyk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgd2hpbGUgKGlzX1dISVRFX1NQQUNFKGNoKSk7XG5cbiAgICBpZiAoY2ggPT09IDB4MjMvKiAjICovKSB7XG4gICAgICBkbyB7IGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTsgfVxuICAgICAgd2hpbGUgKCFpc19FT0woY2gpICYmIChjaCAhPT0gMCkpO1xuICAgIH1cbiAgfVxuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIHJlYWRMaW5lQnJlYWsoc3RhdGUpO1xuICAgIHN0YXRlLmxpbmVJbmRlbnQgPSAwO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIHdoaWxlICgoIWRldGVjdGVkSW5kZW50IHx8IHN0YXRlLmxpbmVJbmRlbnQgPCB0ZXh0SW5kZW50KSAmJlxuICAgICAgICAgICAoY2ggPT09IDB4MjAvKiBTcGFjZSAqLykpIHtcbiAgICAgIHN0YXRlLmxpbmVJbmRlbnQrKztcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIWRldGVjdGVkSW5kZW50ICYmIHN0YXRlLmxpbmVJbmRlbnQgPiB0ZXh0SW5kZW50KSB7XG4gICAgICB0ZXh0SW5kZW50ID0gc3RhdGUubGluZUluZGVudDtcbiAgICB9XG5cbiAgICBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgZW1wdHlMaW5lcysrO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gRW5kIG9mIHRoZSBzY2FsYXIuXG4gICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPCB0ZXh0SW5kZW50KSB7XG5cbiAgICAgIC8vIFBlcmZvcm0gdGhlIGNob21waW5nLlxuICAgICAgaWYgKGNob21waW5nID09PSBDSE9NUElOR19LRUVQKSB7XG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBkaWRSZWFkQ29udGVudCA/IDEgKyBlbXB0eUxpbmVzIDogZW1wdHlMaW5lcyk7XG4gICAgICB9IGVsc2UgaWYgKGNob21waW5nID09PSBDSE9NUElOR19DTElQKSB7XG4gICAgICAgIGlmIChkaWRSZWFkQ29udGVudCkgeyAvLyBpLmUuIG9ubHkgaWYgdGhlIHNjYWxhciBpcyBub3QgZW1wdHkuXG4gICAgICAgICAgc3RhdGUucmVzdWx0ICs9ICdcXG4nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJyZWFrIHRoaXMgYHdoaWxlYCBjeWNsZSBhbmQgZ28gdG8gdGhlIGZ1bmNpdG9uJ3MgZXBpbG9ndWUuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBGb2xkZWQgc3R5bGU6IHVzZSBmYW5jeSBydWxlcyB0byBoYW5kbGUgbGluZSBicmVha3MuXG4gICAgaWYgKGZvbGRpbmcpIHtcblxuICAgICAgLy8gTGluZXMgc3RhcnRpbmcgd2l0aCB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzIChtb3JlLWluZGVudGVkIGxpbmVzKSBhcmUgbm90IGZvbGRlZC5cbiAgICAgIGlmIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgICAgYXRNb3JlSW5kZW50ZWQgPSB0cnVlO1xuICAgICAgICAvLyBleGNlcHQgZm9yIHRoZSBmaXJzdCBjb250ZW50IGxpbmUgKGNmLiBFeGFtcGxlIDguMSlcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGRpZFJlYWRDb250ZW50ID8gMSArIGVtcHR5TGluZXMgOiBlbXB0eUxpbmVzKTtcblxuICAgICAgLy8gRW5kIG9mIG1vcmUtaW5kZW50ZWQgYmxvY2suXG4gICAgICB9IGVsc2UgaWYgKGF0TW9yZUluZGVudGVkKSB7XG4gICAgICAgIGF0TW9yZUluZGVudGVkID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBlbXB0eUxpbmVzICsgMSk7XG5cbiAgICAgIC8vIEp1c3Qgb25lIGxpbmUgYnJlYWsgLSBwZXJjZWl2ZSBhcyB0aGUgc2FtZSBsaW5lLlxuICAgICAgfSBlbHNlIGlmIChlbXB0eUxpbmVzID09PSAwKSB7XG4gICAgICAgIGlmIChkaWRSZWFkQ29udGVudCkgeyAvLyBpLmUuIG9ubHkgaWYgd2UgaGF2ZSBhbHJlYWR5IHJlYWQgc29tZSBzY2FsYXIgY29udGVudC5cbiAgICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gJyAnO1xuICAgICAgICB9XG5cbiAgICAgIC8vIFNldmVyYWwgbGluZSBicmVha3MgLSBwZXJjZWl2ZSBhcyBkaWZmZXJlbnQgbGluZXMuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZW1wdHlMaW5lcyk7XG4gICAgICB9XG5cbiAgICAvLyBMaXRlcmFsIHN0eWxlOiBqdXN0IGFkZCBleGFjdCBudW1iZXIgb2YgbGluZSBicmVha3MgYmV0d2VlbiBjb250ZW50IGxpbmVzLlxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBLZWVwIGFsbCBsaW5lIGJyZWFrcyBleGNlcHQgdGhlIGhlYWRlciBsaW5lIGJyZWFrLlxuICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGRpZFJlYWRDb250ZW50ID8gMSArIGVtcHR5TGluZXMgOiBlbXB0eUxpbmVzKTtcbiAgICB9XG5cbiAgICBkaWRSZWFkQ29udGVudCA9IHRydWU7XG4gICAgZGV0ZWN0ZWRJbmRlbnQgPSB0cnVlO1xuICAgIGVtcHR5TGluZXMgPSAwO1xuICAgIGNhcHR1cmVTdGFydCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgd2hpbGUgKCFpc19FT0woY2gpICYmIChjaCAhPT0gMCkpIHtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBjYXB0dXJlU2VnbWVudChzdGF0ZSwgY2FwdHVyZVN0YXJ0LCBzdGF0ZS5wb3NpdGlvbiwgZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlYWRCbG9ja1NlcXVlbmNlKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBfbGluZSxcbiAgICAgIF90YWcgICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIF9hbmNob3IgICA9IHN0YXRlLmFuY2hvcixcbiAgICAgIF9yZXN1bHQgICA9IFtdLFxuICAgICAgZm9sbG93aW5nLFxuICAgICAgZGV0ZWN0ZWQgID0gZmFsc2UsXG4gICAgICBjaDtcblxuICAvLyB0aGVyZSBpcyBhIGxlYWRpbmcgdGFiIGJlZm9yZSB0aGlzIHRva2VuLCBzbyBpdCBjYW4ndCBiZSBhIGJsb2NrIHNlcXVlbmNlL21hcHBpbmc7XG4gIC8vIGl0IGNhbiBzdGlsbCBiZSBmbG93IHNlcXVlbmNlL21hcHBpbmcgb3IgYSBzY2FsYXJcbiAgaWYgKHN0YXRlLmZpcnN0VGFiSW5MaW5lICE9PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IF9yZXN1bHQ7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIGlmIChzdGF0ZS5maXJzdFRhYkluTGluZSAhPT0gLTEpIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uID0gc3RhdGUuZmlyc3RUYWJJbkxpbmU7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFiIGNoYXJhY3RlcnMgbXVzdCBub3QgYmUgdXNlZCBpbiBpbmRlbnRhdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChjaCAhPT0gMHgyRC8qIC0gKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvbGxvd2luZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKTtcblxuICAgIGlmICghaXNfV1NfT1JfRU9MKGZvbGxvd2luZykpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICBzdGF0ZS5wb3NpdGlvbisrO1xuXG4gICAgaWYgKHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKSkge1xuICAgICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPD0gbm9kZUluZGVudCkge1xuICAgICAgICBfcmVzdWx0LnB1c2gobnVsbCk7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9saW5lID0gc3RhdGUubGluZTtcbiAgICBjb21wb3NlTm9kZShzdGF0ZSwgbm9kZUluZGVudCwgQ09OVEVYVF9CTE9DS19JTiwgZmFsc2UsIHRydWUpO1xuICAgIF9yZXN1bHQucHVzaChzdGF0ZS5yZXN1bHQpO1xuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoKHN0YXRlLmxpbmUgPT09IF9saW5lIHx8IHN0YXRlLmxpbmVJbmRlbnQgPiBub2RlSW5kZW50KSAmJiAoY2ggIT09IDApKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYmFkIGluZGVudGF0aW9uIG9mIGEgc2VxdWVuY2UgZW50cnknKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPCBub2RlSW5kZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoZGV0ZWN0ZWQpIHtcbiAgICBzdGF0ZS50YWcgPSBfdGFnO1xuICAgIHN0YXRlLmFuY2hvciA9IF9hbmNob3I7XG4gICAgc3RhdGUua2luZCA9ICdzZXF1ZW5jZSc7XG4gICAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlYWRCbG9ja01hcHBpbmcoc3RhdGUsIG5vZGVJbmRlbnQsIGZsb3dJbmRlbnQpIHtcbiAgdmFyIGZvbGxvd2luZyxcbiAgICAgIGFsbG93Q29tcGFjdCxcbiAgICAgIF9saW5lLFxuICAgICAgX2tleUxpbmUsXG4gICAgICBfa2V5TGluZVN0YXJ0LFxuICAgICAgX2tleVBvcyxcbiAgICAgIF90YWcgICAgICAgICAgPSBzdGF0ZS50YWcsXG4gICAgICBfYW5jaG9yICAgICAgID0gc3RhdGUuYW5jaG9yLFxuICAgICAgX3Jlc3VsdCAgICAgICA9IHt9LFxuICAgICAgb3ZlcnJpZGFibGVLZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIGtleVRhZyAgICAgICAgPSBudWxsLFxuICAgICAga2V5Tm9kZSAgICAgICA9IG51bGwsXG4gICAgICB2YWx1ZU5vZGUgICAgID0gbnVsbCxcbiAgICAgIGF0RXhwbGljaXRLZXkgPSBmYWxzZSxcbiAgICAgIGRldGVjdGVkICAgICAgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIC8vIHRoZXJlIGlzIGEgbGVhZGluZyB0YWIgYmVmb3JlIHRoaXMgdG9rZW4sIHNvIGl0IGNhbid0IGJlIGEgYmxvY2sgc2VxdWVuY2UvbWFwcGluZztcbiAgLy8gaXQgY2FuIHN0aWxsIGJlIGZsb3cgc2VxdWVuY2UvbWFwcGluZyBvciBhIHNjYWxhclxuICBpZiAoc3RhdGUuZmlyc3RUYWJJbkxpbmUgIT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gX3Jlc3VsdDtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgaWYgKCFhdEV4cGxpY2l0S2V5ICYmIHN0YXRlLmZpcnN0VGFiSW5MaW5lICE9PSAtMSkge1xuICAgICAgc3RhdGUucG9zaXRpb24gPSBzdGF0ZS5maXJzdFRhYkluTGluZTtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWIgY2hhcmFjdGVycyBtdXN0IG5vdCBiZSB1c2VkIGluIGluZGVudGF0aW9uJyk7XG4gICAgfVxuXG4gICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuICAgIF9saW5lID0gc3RhdGUubGluZTsgLy8gU2F2ZSB0aGUgY3VycmVudCBsaW5lLlxuXG4gICAgLy9cbiAgICAvLyBFeHBsaWNpdCBub3RhdGlvbiBjYXNlLiBUaGVyZSBhcmUgdHdvIHNlcGFyYXRlIGJsb2NrczpcbiAgICAvLyBmaXJzdCBmb3IgdGhlIGtleSAoZGVub3RlZCBieSBcIj9cIikgYW5kIHNlY29uZCBmb3IgdGhlIHZhbHVlIChkZW5vdGVkIGJ5IFwiOlwiKVxuICAgIC8vXG4gICAgaWYgKChjaCA9PT0gMHgzRi8qID8gKi8gfHwgY2ggPT09IDB4M0EvKiA6ICovKSAmJiBpc19XU19PUl9FT0woZm9sbG93aW5nKSkge1xuXG4gICAgICBpZiAoY2ggPT09IDB4M0YvKiA/ICovKSB7XG4gICAgICAgIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgICAgICAgc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIG51bGwsIF9rZXlMaW5lLCBfa2V5TGluZVN0YXJ0LCBfa2V5UG9zKTtcbiAgICAgICAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgYXRFeHBsaWNpdEtleSA9IHRydWU7XG4gICAgICAgIGFsbG93Q29tcGFjdCA9IHRydWU7XG5cbiAgICAgIH0gZWxzZSBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgICAgICAvLyBpLmUuIDB4M0EvKiA6ICovID09PSBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIGV4cGxpY2l0IGtleS5cbiAgICAgICAgYXRFeHBsaWNpdEtleSA9IGZhbHNlO1xuICAgICAgICBhbGxvd0NvbXBhY3QgPSB0cnVlO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaW5jb21wbGV0ZSBleHBsaWNpdCBtYXBwaW5nIHBhaXI7IGEga2V5IG5vZGUgaXMgbWlzc2VkOyBvciBmb2xsb3dlZCBieSBhIG5vbi10YWJ1bGF0ZWQgZW1wdHkgbGluZScpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5wb3NpdGlvbiArPSAxO1xuICAgICAgY2ggPSBmb2xsb3dpbmc7XG5cbiAgICAvL1xuICAgIC8vIEltcGxpY2l0IG5vdGF0aW9uIGNhc2UuIEZsb3ctc3R5bGUgbm9kZSBhcyB0aGUga2V5IGZpcnN0LCB0aGVuIFwiOlwiLCBhbmQgdGhlIHZhbHVlLlxuICAgIC8vXG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXlMaW5lID0gc3RhdGUubGluZTtcbiAgICAgIF9rZXlMaW5lU3RhcnQgPSBzdGF0ZS5saW5lU3RhcnQ7XG4gICAgICBfa2V5UG9zID0gc3RhdGUucG9zaXRpb247XG5cbiAgICAgIGlmICghY29tcG9zZU5vZGUoc3RhdGUsIGZsb3dJbmRlbnQsIENPTlRFWFRfRkxPV19PVVQsIGZhbHNlLCB0cnVlKSkge1xuICAgICAgICAvLyBOZWl0aGVyIGltcGxpY2l0IG5vciBleHBsaWNpdCBub3RhdGlvbi5cbiAgICAgICAgLy8gUmVhZGluZyBpcyBkb25lLiBHbyB0byB0aGUgZXBpbG9ndWUuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUubGluZSA9PT0gX2xpbmUpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoID09PSAweDNBLyogOiAqLykge1xuICAgICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICAgIGlmICghaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2Egd2hpdGVzcGFjZSBjaGFyYWN0ZXIgaXMgZXhwZWN0ZWQgYWZ0ZXIgdGhlIGtleS12YWx1ZSBzZXBhcmF0b3Igd2l0aGluIGEgYmxvY2sgbWFwcGluZycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgICAgICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgbnVsbCwgX2tleUxpbmUsIF9rZXlMaW5lU3RhcnQsIF9rZXlQb3MpO1xuICAgICAgICAgICAga2V5VGFnID0ga2V5Tm9kZSA9IHZhbHVlTm9kZSA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGF0RXhwbGljaXRLZXkgPSBmYWxzZTtcbiAgICAgICAgICBhbGxvd0NvbXBhY3QgPSBmYWxzZTtcbiAgICAgICAgICBrZXlUYWcgPSBzdGF0ZS50YWc7XG4gICAgICAgICAga2V5Tm9kZSA9IHN0YXRlLnJlc3VsdDtcblxuICAgICAgICB9IGVsc2UgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2NhbiBub3QgcmVhZCBhbiBpbXBsaWNpdCBtYXBwaW5nIHBhaXI7IGEgY29sb24gaXMgbWlzc2VkJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS50YWcgPSBfdGFnO1xuICAgICAgICAgIHN0YXRlLmFuY2hvciA9IF9hbmNob3I7XG4gICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEtlZXAgdGhlIHJlc3VsdCBvZiBgY29tcG9zZU5vZGVgLlxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZGV0ZWN0ZWQpIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2NhbiBub3QgcmVhZCBhIGJsb2NrIG1hcHBpbmcgZW50cnk7IGEgbXVsdGlsaW5lIGtleSBtYXkgbm90IGJlIGFuIGltcGxpY2l0IGtleScpO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS50YWcgPSBfdGFnO1xuICAgICAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gS2VlcCB0aGUgcmVzdWx0IG9mIGBjb21wb3NlTm9kZWAuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBDb21tb24gcmVhZGluZyBjb2RlIGZvciBib3RoIGV4cGxpY2l0IGFuZCBpbXBsaWNpdCBub3RhdGlvbnMuXG4gICAgLy9cbiAgICBpZiAoc3RhdGUubGluZSA9PT0gX2xpbmUgfHwgc3RhdGUubGluZUluZGVudCA+IG5vZGVJbmRlbnQpIHtcbiAgICAgIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgICAgIF9rZXlMaW5lID0gc3RhdGUubGluZTtcbiAgICAgICAgX2tleUxpbmVTdGFydCA9IHN0YXRlLmxpbmVTdGFydDtcbiAgICAgICAgX2tleVBvcyA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tcG9zZU5vZGUoc3RhdGUsIG5vZGVJbmRlbnQsIENPTlRFWFRfQkxPQ0tfT1VULCB0cnVlLCBhbGxvd0NvbXBhY3QpKSB7XG4gICAgICAgIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgICAgICAga2V5Tm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZU5vZGUgPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhdEV4cGxpY2l0S2V5KSB7XG4gICAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCB2YWx1ZU5vZGUsIF9rZXlMaW5lLCBfa2V5TGluZVN0YXJ0LCBfa2V5UG9zKTtcbiAgICAgICAga2V5VGFnID0ga2V5Tm9kZSA9IHZhbHVlTm9kZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKChzdGF0ZS5saW5lID09PSBfbGluZSB8fCBzdGF0ZS5saW5lSW5kZW50ID4gbm9kZUluZGVudCkgJiYgKGNoICE9PSAwKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2JhZCBpbmRlbnRhdGlvbiBvZiBhIG1hcHBpbmcgZW50cnknKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPCBub2RlSW5kZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBFcGlsb2d1ZS5cbiAgLy9cblxuICAvLyBTcGVjaWFsIGNhc2U6IGxhc3QgbWFwcGluZydzIG5vZGUgY29udGFpbnMgb25seSB0aGUga2V5IGluIGV4cGxpY2l0IG5vdGF0aW9uLlxuICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCBudWxsLCBfa2V5TGluZSwgX2tleUxpbmVTdGFydCwgX2tleVBvcyk7XG4gIH1cblxuICAvLyBFeHBvc2UgdGhlIHJlc3VsdGluZyBtYXBwaW5nLlxuICBpZiAoZGV0ZWN0ZWQpIHtcbiAgICBzdGF0ZS50YWcgPSBfdGFnO1xuICAgIHN0YXRlLmFuY2hvciA9IF9hbmNob3I7XG4gICAgc3RhdGUua2luZCA9ICdtYXBwaW5nJztcbiAgICBzdGF0ZS5yZXN1bHQgPSBfcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGRldGVjdGVkO1xufVxuXG5mdW5jdGlvbiByZWFkVGFnUHJvcGVydHkoc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbixcbiAgICAgIGlzVmVyYmF0aW0gPSBmYWxzZSxcbiAgICAgIGlzTmFtZWQgICAgPSBmYWxzZSxcbiAgICAgIHRhZ0hhbmRsZSxcbiAgICAgIHRhZ05hbWUsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyMS8qICEgKi8pIHJldHVybiBmYWxzZTtcblxuICBpZiAoc3RhdGUudGFnICE9PSBudWxsKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0aW9uIG9mIGEgdGFnIHByb3BlcnR5Jyk7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoID09PSAweDNDLyogPCAqLykge1xuICAgIGlzVmVyYmF0aW0gPSB0cnVlO1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICB9IGVsc2UgaWYgKGNoID09PSAweDIxLyogISAqLykge1xuICAgIGlzTmFtZWQgPSB0cnVlO1xuICAgIHRhZ0hhbmRsZSA9ICchISc7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gIH0gZWxzZSB7XG4gICAgdGFnSGFuZGxlID0gJyEnO1xuICB9XG5cbiAgX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb247XG5cbiAgaWYgKGlzVmVyYmF0aW0pIHtcbiAgICBkbyB7IGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTsgfVxuICAgIHdoaWxlIChjaCAhPT0gMCAmJiBjaCAhPT0gMHgzRS8qID4gKi8pO1xuXG4gICAgaWYgKHN0YXRlLnBvc2l0aW9uIDwgc3RhdGUubGVuZ3RoKSB7XG4gICAgICB0YWdOYW1lID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbik7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIHZlcmJhdGltIHRhZycpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkpIHtcblxuICAgICAgaWYgKGNoID09PSAweDIxLyogISAqLykge1xuICAgICAgICBpZiAoIWlzTmFtZWQpIHtcbiAgICAgICAgICB0YWdIYW5kbGUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24gLSAxLCBzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgICAgICAgaWYgKCFQQVRURVJOX1RBR19IQU5ETEUudGVzdCh0YWdIYW5kbGUpKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbmFtZWQgdGFnIGhhbmRsZSBjYW5ub3QgY29udGFpbiBzdWNoIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpc05hbWVkID0gdHJ1ZTtcbiAgICAgICAgICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbiArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhZyBzdWZmaXggY2Fubm90IGNvbnRhaW4gZXhjbGFtYXRpb24gbWFya3MnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdGFnTmFtZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKFBBVFRFUk5fRkxPV19JTkRJQ0FUT1JTLnRlc3QodGFnTmFtZSkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWcgc3VmZml4IGNhbm5vdCBjb250YWluIGZsb3cgaW5kaWNhdG9yIGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGFnTmFtZSAmJiAhUEFUVEVSTl9UQUdfVVJJLnRlc3QodGFnTmFtZSkpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFnIG5hbWUgY2Fubm90IGNvbnRhaW4gc3VjaCBjaGFyYWN0ZXJzOiAnICsgdGFnTmFtZSk7XG4gIH1cblxuICB0cnkge1xuICAgIHRhZ05hbWUgPSBkZWNvZGVVUklDb21wb25lbnQodGFnTmFtZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWcgbmFtZSBpcyBtYWxmb3JtZWQ6ICcgKyB0YWdOYW1lKTtcbiAgfVxuXG4gIGlmIChpc1ZlcmJhdGltKSB7XG4gICAgc3RhdGUudGFnID0gdGFnTmFtZTtcblxuICB9IGVsc2UgaWYgKF9oYXNPd25Qcm9wZXJ0eSQxLmNhbGwoc3RhdGUudGFnTWFwLCB0YWdIYW5kbGUpKSB7XG4gICAgc3RhdGUudGFnID0gc3RhdGUudGFnTWFwW3RhZ0hhbmRsZV0gKyB0YWdOYW1lO1xuXG4gIH0gZWxzZSBpZiAodGFnSGFuZGxlID09PSAnIScpIHtcbiAgICBzdGF0ZS50YWcgPSAnIScgKyB0YWdOYW1lO1xuXG4gIH0gZWxzZSBpZiAodGFnSGFuZGxlID09PSAnISEnKSB7XG4gICAgc3RhdGUudGFnID0gJ3RhZzp5YW1sLm9yZywyMDAyOicgKyB0YWdOYW1lO1xuXG4gIH0gZWxzZSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZGVjbGFyZWQgdGFnIGhhbmRsZSBcIicgKyB0YWdIYW5kbGUgKyAnXCInKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWFkQW5jaG9yUHJvcGVydHkoc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbixcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDI2LyogJiAqLykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZHVwbGljYXRpb24gb2YgYW4gYW5jaG9yIHByb3BlcnR5Jyk7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSAmJiAhaXNfRkxPV19JTkRJQ0FUT1IoY2gpKSB7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBfcG9zaXRpb24pIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbmFtZSBvZiBhbiBhbmNob3Igbm9kZSBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpO1xuICB9XG5cbiAgc3RhdGUuYW5jaG9yID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbik7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWFkQWxpYXMoc3RhdGUpIHtcbiAgdmFyIF9wb3NpdGlvbiwgYWxpYXMsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyQS8qICogKi8pIHJldHVybiBmYWxzZTtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSAmJiAhaXNfRkxPV19JTkRJQ0FUT1IoY2gpKSB7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBvc2l0aW9uID09PSBfcG9zaXRpb24pIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbmFtZSBvZiBhbiBhbGlhcyBub2RlIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyJyk7XG4gIH1cblxuICBhbGlhcyA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmICghX2hhc093blByb3BlcnR5JDEuY2FsbChzdGF0ZS5hbmNob3JNYXAsIGFsaWFzKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmlkZW50aWZpZWQgYWxpYXMgXCInICsgYWxpYXMgKyAnXCInKTtcbiAgfVxuXG4gIHN0YXRlLnJlc3VsdCA9IHN0YXRlLmFuY2hvck1hcFthbGlhc107XG4gIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvc2VOb2RlKHN0YXRlLCBwYXJlbnRJbmRlbnQsIG5vZGVDb250ZXh0LCBhbGxvd1RvU2VlaywgYWxsb3dDb21wYWN0KSB7XG4gIHZhciBhbGxvd0Jsb2NrU3R5bGVzLFxuICAgICAgYWxsb3dCbG9ja1NjYWxhcnMsXG4gICAgICBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMsXG4gICAgICBpbmRlbnRTdGF0dXMgPSAxLCAvLyAxOiB0aGlzPnBhcmVudCwgMDogdGhpcz1wYXJlbnQsIC0xOiB0aGlzPHBhcmVudFxuICAgICAgYXROZXdMaW5lICA9IGZhbHNlLFxuICAgICAgaGFzQ29udGVudCA9IGZhbHNlLFxuICAgICAgdHlwZUluZGV4LFxuICAgICAgdHlwZVF1YW50aXR5LFxuICAgICAgdHlwZUxpc3QsXG4gICAgICB0eXBlLFxuICAgICAgZmxvd0luZGVudCxcbiAgICAgIGJsb2NrSW5kZW50O1xuXG4gIGlmIChzdGF0ZS5saXN0ZW5lciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmxpc3RlbmVyKCdvcGVuJywgc3RhdGUpO1xuICB9XG5cbiAgc3RhdGUudGFnICAgID0gbnVsbDtcbiAgc3RhdGUuYW5jaG9yID0gbnVsbDtcbiAgc3RhdGUua2luZCAgID0gbnVsbDtcbiAgc3RhdGUucmVzdWx0ID0gbnVsbDtcblxuICBhbGxvd0Jsb2NrU3R5bGVzID0gYWxsb3dCbG9ja1NjYWxhcnMgPSBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPVxuICAgIENPTlRFWFRfQkxPQ0tfT1VUID09PSBub2RlQ29udGV4dCB8fFxuICAgIENPTlRFWFRfQkxPQ0tfSU4gID09PSBub2RlQ29udGV4dDtcblxuICBpZiAoYWxsb3dUb1NlZWspIHtcbiAgICBpZiAoc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpKSB7XG4gICAgICBhdE5ld0xpbmUgPSB0cnVlO1xuXG4gICAgICBpZiAoc3RhdGUubGluZUluZGVudCA+IHBhcmVudEluZGVudCkge1xuICAgICAgICBpbmRlbnRTdGF0dXMgPSAxO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50ID09PSBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgaW5kZW50U3RhdHVzID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IHBhcmVudEluZGVudCkge1xuICAgICAgICBpbmRlbnRTdGF0dXMgPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW5kZW50U3RhdHVzID09PSAxKSB7XG4gICAgd2hpbGUgKHJlYWRUYWdQcm9wZXJ0eShzdGF0ZSkgfHwgcmVhZEFuY2hvclByb3BlcnR5KHN0YXRlKSkge1xuICAgICAgaWYgKHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKSkge1xuICAgICAgICBhdE5ld0xpbmUgPSB0cnVlO1xuICAgICAgICBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPSBhbGxvd0Jsb2NrU3R5bGVzO1xuXG4gICAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gcGFyZW50SW5kZW50KSB7XG4gICAgICAgICAgaW5kZW50U3RhdHVzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50ID09PSBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgICBpbmRlbnRTdGF0dXMgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPCBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgICBpbmRlbnRTdGF0dXMgPSAtMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFsbG93QmxvY2tDb2xsZWN0aW9ucykge1xuICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9IGF0TmV3TGluZSB8fCBhbGxvd0NvbXBhY3Q7XG4gIH1cblxuICBpZiAoaW5kZW50U3RhdHVzID09PSAxIHx8IENPTlRFWFRfQkxPQ0tfT1VUID09PSBub2RlQ29udGV4dCkge1xuICAgIGlmIChDT05URVhUX0ZMT1dfSU4gPT09IG5vZGVDb250ZXh0IHx8IENPTlRFWFRfRkxPV19PVVQgPT09IG5vZGVDb250ZXh0KSB7XG4gICAgICBmbG93SW5kZW50ID0gcGFyZW50SW5kZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBmbG93SW5kZW50ID0gcGFyZW50SW5kZW50ICsgMTtcbiAgICB9XG5cbiAgICBibG9ja0luZGVudCA9IHN0YXRlLnBvc2l0aW9uIC0gc3RhdGUubGluZVN0YXJ0O1xuXG4gICAgaWYgKGluZGVudFN0YXR1cyA9PT0gMSkge1xuICAgICAgaWYgKGFsbG93QmxvY2tDb2xsZWN0aW9ucyAmJlxuICAgICAgICAgIChyZWFkQmxvY2tTZXF1ZW5jZShzdGF0ZSwgYmxvY2tJbmRlbnQpIHx8XG4gICAgICAgICAgIHJlYWRCbG9ja01hcHBpbmcoc3RhdGUsIGJsb2NrSW5kZW50LCBmbG93SW5kZW50KSkgfHxcbiAgICAgICAgICByZWFkRmxvd0NvbGxlY3Rpb24oc3RhdGUsIGZsb3dJbmRlbnQpKSB7XG4gICAgICAgIGhhc0NvbnRlbnQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChhbGxvd0Jsb2NrU2NhbGFycyAmJiByZWFkQmxvY2tTY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQpKSB8fFxuICAgICAgICAgICAgcmVhZFNpbmdsZVF1b3RlZFNjYWxhcihzdGF0ZSwgZmxvd0luZGVudCkgfHxcbiAgICAgICAgICAgIHJlYWREb3VibGVRdW90ZWRTY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQpKSB7XG4gICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWFkQWxpYXMoc3RhdGUpKSB7XG4gICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoc3RhdGUudGFnICE9PSBudWxsIHx8IHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2FsaWFzIG5vZGUgc2hvdWxkIG5vdCBoYXZlIGFueSBwcm9wZXJ0aWVzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVhZFBsYWluU2NhbGFyKHN0YXRlLCBmbG93SW5kZW50LCBDT05URVhUX0ZMT1dfSU4gPT09IG5vZGVDb250ZXh0KSkge1xuICAgICAgICAgIGhhc0NvbnRlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlLnRhZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUudGFnID0gJz8nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5kZW50U3RhdHVzID09PSAwKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2U6IGJsb2NrIHNlcXVlbmNlcyBhcmUgYWxsb3dlZCB0byBoYXZlIHNhbWUgaW5kZW50YXRpb24gbGV2ZWwgYXMgdGhlIHBhcmVudC5cbiAgICAgIC8vIGh0dHA6Ly93d3cueWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2lkMjc5OTc4NFxuICAgICAgaGFzQ29udGVudCA9IGFsbG93QmxvY2tDb2xsZWN0aW9ucyAmJiByZWFkQmxvY2tTZXF1ZW5jZShzdGF0ZSwgYmxvY2tJbmRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS50YWcgPT09IG51bGwpIHtcbiAgICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IHN0YXRlLnJlc3VsdDtcbiAgICB9XG5cbiAgfSBlbHNlIGlmIChzdGF0ZS50YWcgPT09ICc/Jykge1xuICAgIC8vIEltcGxpY2l0IHJlc29sdmluZyBpcyBub3QgYWxsb3dlZCBmb3Igbm9uLXNjYWxhciB0eXBlcywgYW5kICc/J1xuICAgIC8vIG5vbi1zcGVjaWZpYyB0YWcgaXMgb25seSBhdXRvbWF0aWNhbGx5IGFzc2lnbmVkIHRvIHBsYWluIHNjYWxhcnMuXG4gICAgLy9cbiAgICAvLyBXZSBvbmx5IG5lZWQgdG8gY2hlY2sga2luZCBjb25mb3JtaXR5IGluIGNhc2UgdXNlciBleHBsaWNpdGx5IGFzc2lnbnMgJz8nXG4gICAgLy8gdGFnLCBmb3IgZXhhbXBsZSBsaWtlIHRoaXM6IFwiITw/PiBbMF1cIlxuICAgIC8vXG4gICAgaWYgKHN0YXRlLnJlc3VsdCAhPT0gbnVsbCAmJiBzdGF0ZS5raW5kICE9PSAnc2NhbGFyJykge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuYWNjZXB0YWJsZSBub2RlIGtpbmQgZm9yICE8Pz4gdGFnOyBpdCBzaG91bGQgYmUgXCJzY2FsYXJcIiwgbm90IFwiJyArIHN0YXRlLmtpbmQgKyAnXCInKTtcbiAgICB9XG5cbiAgICBmb3IgKHR5cGVJbmRleCA9IDAsIHR5cGVRdWFudGl0eSA9IHN0YXRlLmltcGxpY2l0VHlwZXMubGVuZ3RoOyB0eXBlSW5kZXggPCB0eXBlUXVhbnRpdHk7IHR5cGVJbmRleCArPSAxKSB7XG4gICAgICB0eXBlID0gc3RhdGUuaW1wbGljaXRUeXBlc1t0eXBlSW5kZXhdO1xuXG4gICAgICBpZiAodHlwZS5yZXNvbHZlKHN0YXRlLnJlc3VsdCkpIHsgLy8gYHN0YXRlLnJlc3VsdGAgdXBkYXRlZCBpbiByZXNvbHZlciBpZiBtYXRjaGVkXG4gICAgICAgIHN0YXRlLnJlc3VsdCA9IHR5cGUuY29uc3RydWN0KHN0YXRlLnJlc3VsdCk7XG4gICAgICAgIHN0YXRlLnRhZyA9IHR5cGUudGFnO1xuICAgICAgICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHN0YXRlLnRhZyAhPT0gJyEnKSB7XG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eSQxLmNhbGwoc3RhdGUudHlwZU1hcFtzdGF0ZS5raW5kIHx8ICdmYWxsYmFjayddLCBzdGF0ZS50YWcpKSB7XG4gICAgICB0eXBlID0gc3RhdGUudHlwZU1hcFtzdGF0ZS5raW5kIHx8ICdmYWxsYmFjayddW3N0YXRlLnRhZ107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvb2tpbmcgZm9yIG11bHRpIHR5cGVcbiAgICAgIHR5cGUgPSBudWxsO1xuICAgICAgdHlwZUxpc3QgPSBzdGF0ZS50eXBlTWFwLm11bHRpW3N0YXRlLmtpbmQgfHwgJ2ZhbGxiYWNrJ107XG5cbiAgICAgIGZvciAodHlwZUluZGV4ID0gMCwgdHlwZVF1YW50aXR5ID0gdHlwZUxpc3QubGVuZ3RoOyB0eXBlSW5kZXggPCB0eXBlUXVhbnRpdHk7IHR5cGVJbmRleCArPSAxKSB7XG4gICAgICAgIGlmIChzdGF0ZS50YWcuc2xpY2UoMCwgdHlwZUxpc3RbdHlwZUluZGV4XS50YWcubGVuZ3RoKSA9PT0gdHlwZUxpc3RbdHlwZUluZGV4XS50YWcpIHtcbiAgICAgICAgICB0eXBlID0gdHlwZUxpc3RbdHlwZUluZGV4XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdHlwZSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3Vua25vd24gdGFnICE8JyArIHN0YXRlLnRhZyArICc+Jyk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlLmtpbmQgIT09IHN0YXRlLmtpbmQpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmFjY2VwdGFibGUgbm9kZSBraW5kIGZvciAhPCcgKyBzdGF0ZS50YWcgKyAnPiB0YWc7IGl0IHNob3VsZCBiZSBcIicgKyB0eXBlLmtpbmQgKyAnXCIsIG5vdCBcIicgKyBzdGF0ZS5raW5kICsgJ1wiJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0eXBlLnJlc29sdmUoc3RhdGUucmVzdWx0LCBzdGF0ZS50YWcpKSB7IC8vIGBzdGF0ZS5yZXN1bHRgIHVwZGF0ZWQgaW4gcmVzb2x2ZXIgaWYgbWF0Y2hlZFxuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2Nhbm5vdCByZXNvbHZlIGEgbm9kZSB3aXRoICE8JyArIHN0YXRlLnRhZyArICc+IGV4cGxpY2l0IHRhZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5yZXN1bHQgPSB0eXBlLmNvbnN0cnVjdChzdGF0ZS5yZXN1bHQsIHN0YXRlLnRhZyk7XG4gICAgICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gc3RhdGUucmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5saXN0ZW5lciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmxpc3RlbmVyKCdjbG9zZScsIHN0YXRlKTtcbiAgfVxuICByZXR1cm4gc3RhdGUudGFnICE9PSBudWxsIHx8ICBzdGF0ZS5hbmNob3IgIT09IG51bGwgfHwgaGFzQ29udGVudDtcbn1cblxuZnVuY3Rpb24gcmVhZERvY3VtZW50KHN0YXRlKSB7XG4gIHZhciBkb2N1bWVudFN0YXJ0ID0gc3RhdGUucG9zaXRpb24sXG4gICAgICBfcG9zaXRpb24sXG4gICAgICBkaXJlY3RpdmVOYW1lLFxuICAgICAgZGlyZWN0aXZlQXJncyxcbiAgICAgIGhhc0RpcmVjdGl2ZXMgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIHN0YXRlLnZlcnNpb24gPSBudWxsO1xuICBzdGF0ZS5jaGVja0xpbmVCcmVha3MgPSBzdGF0ZS5sZWdhY3k7XG4gIHN0YXRlLnRhZ01hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0YXRlLmFuY2hvck1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgd2hpbGUgKChjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pKSAhPT0gMCkge1xuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoc3RhdGUubGluZUluZGVudCA+IDAgfHwgY2ggIT09IDB4MjUvKiAlICovKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBoYXNEaXJlY3RpdmVzID0gdHJ1ZTtcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb247XG5cbiAgICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkpIHtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkaXJlY3RpdmVOYW1lID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbik7XG4gICAgZGlyZWN0aXZlQXJncyA9IFtdO1xuXG4gICAgaWYgKGRpcmVjdGl2ZU5hbWUubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2RpcmVjdGl2ZSBuYW1lIG11c3Qgbm90IGJlIGxlc3MgdGhhbiBvbmUgY2hhcmFjdGVyIGluIGxlbmd0aCcpO1xuICAgIH1cblxuICAgIHdoaWxlIChjaCAhPT0gMCkge1xuICAgICAgd2hpbGUgKGlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICAgICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19FT0woY2gpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc19FT0woY2gpKSBicmVhaztcblxuICAgICAgX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb247XG5cbiAgICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRpcmVjdGl2ZUFyZ3MucHVzaChzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKSk7XG4gICAgfVxuXG4gICAgaWYgKGNoICE9PSAwKSByZWFkTGluZUJyZWFrKHN0YXRlKTtcblxuICAgIGlmIChfaGFzT3duUHJvcGVydHkkMS5jYWxsKGRpcmVjdGl2ZUhhbmRsZXJzLCBkaXJlY3RpdmVOYW1lKSkge1xuICAgICAgZGlyZWN0aXZlSGFuZGxlcnNbZGlyZWN0aXZlTmFtZV0oc3RhdGUsIGRpcmVjdGl2ZU5hbWUsIGRpcmVjdGl2ZUFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICd1bmtub3duIGRvY3VtZW50IGRpcmVjdGl2ZSBcIicgKyBkaXJlY3RpdmVOYW1lICsgJ1wiJyk7XG4gICAgfVxuICB9XG5cbiAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gIGlmIChzdGF0ZS5saW5lSW5kZW50ID09PSAwICYmXG4gICAgICBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSAgICAgPT09IDB4MkQvKiAtICovICYmXG4gICAgICBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSkgPT09IDB4MkQvKiAtICovICYmXG4gICAgICBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMikgPT09IDB4MkQvKiAtICovKSB7XG4gICAgc3RhdGUucG9zaXRpb24gKz0gMztcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgfSBlbHNlIGlmIChoYXNEaXJlY3RpdmVzKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2RpcmVjdGl2ZXMgZW5kIG1hcmsgaXMgZXhwZWN0ZWQnKTtcbiAgfVxuXG4gIGNvbXBvc2VOb2RlKHN0YXRlLCBzdGF0ZS5saW5lSW5kZW50IC0gMSwgQ09OVEVYVF9CTE9DS19PVVQsIGZhbHNlLCB0cnVlKTtcbiAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gIGlmIChzdGF0ZS5jaGVja0xpbmVCcmVha3MgJiZcbiAgICAgIFBBVFRFUk5fTk9OX0FTQ0lJX0xJTkVfQlJFQUtTLnRlc3Qoc3RhdGUuaW5wdXQuc2xpY2UoZG9jdW1lbnRTdGFydCwgc3RhdGUucG9zaXRpb24pKSkge1xuICAgIHRocm93V2FybmluZyhzdGF0ZSwgJ25vbi1BU0NJSSBsaW5lIGJyZWFrcyBhcmUgaW50ZXJwcmV0ZWQgYXMgY29udGVudCcpO1xuICB9XG5cbiAgc3RhdGUuZG9jdW1lbnRzLnB1c2goc3RhdGUucmVzdWx0KTtcblxuICBpZiAoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB7XG5cbiAgICBpZiAoc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgPT09IDB4MkUvKiAuICovKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbiArPSAzO1xuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUucG9zaXRpb24gPCAoc3RhdGUubGVuZ3RoIC0gMSkpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZW5kIG9mIHRoZSBzdHJlYW0gb3IgYSBkb2N1bWVudCBzZXBhcmF0b3IgaXMgZXhwZWN0ZWQnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBsb2FkRG9jdW1lbnRzKGlucHV0LCBvcHRpb25zKSB7XG4gIGlucHV0ID0gU3RyaW5nKGlucHV0KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGlucHV0Lmxlbmd0aCAhPT0gMCkge1xuXG4gICAgLy8gQWRkIHRhaWxpbmcgYFxcbmAgaWYgbm90IGV4aXN0c1xuICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KGlucHV0Lmxlbmd0aCAtIDEpICE9PSAweDBBLyogTEYgKi8gJiZcbiAgICAgICAgaW5wdXQuY2hhckNvZGVBdChpbnB1dC5sZW5ndGggLSAxKSAhPT0gMHgwRC8qIENSICovKSB7XG4gICAgICBpbnB1dCArPSAnXFxuJztcbiAgICB9XG5cbiAgICAvLyBTdHJpcCBCT01cbiAgICBpZiAoaW5wdXQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdGF0ZSA9IG5ldyBTdGF0ZSQxKGlucHV0LCBvcHRpb25zKTtcblxuICB2YXIgbnVsbHBvcyA9IGlucHV0LmluZGV4T2YoJ1xcMCcpO1xuXG4gIGlmIChudWxscG9zICE9PSAtMSkge1xuICAgIHN0YXRlLnBvc2l0aW9uID0gbnVsbHBvcztcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnbnVsbCBieXRlIGlzIG5vdCBhbGxvd2VkIGluIGlucHV0Jyk7XG4gIH1cblxuICAvLyBVc2UgMCBhcyBzdHJpbmcgdGVybWluYXRvci4gVGhhdCBzaWduaWZpY2FudGx5IHNpbXBsaWZpZXMgYm91bmRzIGNoZWNrLlxuICBzdGF0ZS5pbnB1dCArPSAnXFwwJztcblxuICB3aGlsZSAoc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgPT09IDB4MjAvKiBTcGFjZSAqLykge1xuICAgIHN0YXRlLmxpbmVJbmRlbnQgKz0gMTtcbiAgICBzdGF0ZS5wb3NpdGlvbiArPSAxO1xuICB9XG5cbiAgd2hpbGUgKHN0YXRlLnBvc2l0aW9uIDwgKHN0YXRlLmxlbmd0aCAtIDEpKSB7XG4gICAgcmVhZERvY3VtZW50KHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5kb2N1bWVudHM7XG59XG5cblxuZnVuY3Rpb24gbG9hZEFsbCQxKGlucHV0LCBpdGVyYXRvciwgb3B0aW9ucykge1xuICBpZiAoaXRlcmF0b3IgIT09IG51bGwgJiYgdHlwZW9mIGl0ZXJhdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zID0gaXRlcmF0b3I7XG4gICAgaXRlcmF0b3IgPSBudWxsO1xuICB9XG5cbiAgdmFyIGRvY3VtZW50cyA9IGxvYWREb2N1bWVudHMoaW5wdXQsIG9wdGlvbnMpO1xuXG4gIGlmICh0eXBlb2YgaXRlcmF0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZG9jdW1lbnRzO1xuICB9XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBkb2N1bWVudHMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGl0ZXJhdG9yKGRvY3VtZW50c1tpbmRleF0pO1xuICB9XG59XG5cblxuZnVuY3Rpb24gbG9hZCQxKGlucHV0LCBvcHRpb25zKSB7XG4gIHZhciBkb2N1bWVudHMgPSBsb2FkRG9jdW1lbnRzKGlucHV0LCBvcHRpb25zKTtcblxuICBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8qZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkKi9cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnRzWzBdO1xuICB9XG4gIHRocm93IG5ldyBleGNlcHRpb24oJ2V4cGVjdGVkIGEgc2luZ2xlIGRvY3VtZW50IGluIHRoZSBzdHJlYW0sIGJ1dCBmb3VuZCBtb3JlJyk7XG59XG5cblxudmFyIGxvYWRBbGxfMSA9IGxvYWRBbGwkMTtcbnZhciBsb2FkXzEgICAgPSBsb2FkJDE7XG5cbnZhciBsb2FkZXIgPSB7XG5cdGxvYWRBbGw6IGxvYWRBbGxfMSxcblx0bG9hZDogbG9hZF8xXG59O1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lKi9cblxuXG5cblxuXG52YXIgX3RvU3RyaW5nICAgICAgID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgQ0hBUl9CT00gICAgICAgICAgICAgICAgICA9IDB4RkVGRjtcbnZhciBDSEFSX1RBQiAgICAgICAgICAgICAgICAgID0gMHgwOTsgLyogVGFiICovXG52YXIgQ0hBUl9MSU5FX0ZFRUQgICAgICAgICAgICA9IDB4MEE7IC8qIExGICovXG52YXIgQ0hBUl9DQVJSSUFHRV9SRVRVUk4gICAgICA9IDB4MEQ7IC8qIENSICovXG52YXIgQ0hBUl9TUEFDRSAgICAgICAgICAgICAgICA9IDB4MjA7IC8qIFNwYWNlICovXG52YXIgQ0hBUl9FWENMQU1BVElPTiAgICAgICAgICA9IDB4MjE7IC8qICEgKi9cbnZhciBDSEFSX0RPVUJMRV9RVU9URSAgICAgICAgID0gMHgyMjsgLyogXCIgKi9cbnZhciBDSEFSX1NIQVJQICAgICAgICAgICAgICAgID0gMHgyMzsgLyogIyAqL1xudmFyIENIQVJfUEVSQ0VOVCAgICAgICAgICAgICAgPSAweDI1OyAvKiAlICovXG52YXIgQ0hBUl9BTVBFUlNBTkQgICAgICAgICAgICA9IDB4MjY7IC8qICYgKi9cbnZhciBDSEFSX1NJTkdMRV9RVU9URSAgICAgICAgID0gMHgyNzsgLyogJyAqL1xudmFyIENIQVJfQVNURVJJU0sgICAgICAgICAgICAgPSAweDJBOyAvKiAqICovXG52YXIgQ0hBUl9DT01NQSAgICAgICAgICAgICAgICA9IDB4MkM7IC8qICwgKi9cbnZhciBDSEFSX01JTlVTICAgICAgICAgICAgICAgID0gMHgyRDsgLyogLSAqL1xudmFyIENIQVJfQ09MT04gICAgICAgICAgICAgICAgPSAweDNBOyAvKiA6ICovXG52YXIgQ0hBUl9FUVVBTFMgICAgICAgICAgICAgICA9IDB4M0Q7IC8qID0gKi9cbnZhciBDSEFSX0dSRUFURVJfVEhBTiAgICAgICAgID0gMHgzRTsgLyogPiAqL1xudmFyIENIQVJfUVVFU1RJT04gICAgICAgICAgICAgPSAweDNGOyAvKiA/ICovXG52YXIgQ0hBUl9DT01NRVJDSUFMX0FUICAgICAgICA9IDB4NDA7IC8qIEAgKi9cbnZhciBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQgID0gMHg1QjsgLyogWyAqL1xudmFyIENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVQgPSAweDVEOyAvKiBdICovXG52YXIgQ0hBUl9HUkFWRV9BQ0NFTlQgICAgICAgICA9IDB4NjA7IC8qIGAgKi9cbnZhciBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0tFVCAgID0gMHg3QjsgLyogeyAqL1xudmFyIENIQVJfVkVSVElDQUxfTElORSAgICAgICAgPSAweDdDOyAvKiB8ICovXG52YXIgQ0hBUl9SSUdIVF9DVVJMWV9CUkFDS0VUICA9IDB4N0Q7IC8qIH0gKi9cblxudmFyIEVTQ0FQRV9TRVFVRU5DRVMgPSB7fTtcblxuRVNDQVBFX1NFUVVFTkNFU1sweDAwXSAgID0gJ1xcXFwwJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwN10gICA9ICdcXFxcYSc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDhdICAgPSAnXFxcXGInO1xuRVNDQVBFX1NFUVVFTkNFU1sweDA5XSAgID0gJ1xcXFx0JztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwQV0gICA9ICdcXFxcbic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MEJdICAgPSAnXFxcXHYnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBDXSAgID0gJ1xcXFxmJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwRF0gICA9ICdcXFxccic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MUJdICAgPSAnXFxcXGUnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDIyXSAgID0gJ1xcXFxcIic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4NUNdICAgPSAnXFxcXFxcXFwnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDg1XSAgID0gJ1xcXFxOJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHhBMF0gICA9ICdcXFxcXyc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MjAyOF0gPSAnXFxcXEwnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDIwMjldID0gJ1xcXFxQJztcblxudmFyIERFUFJFQ0FURURfQk9PTEVBTlNfU1lOVEFYID0gW1xuICAneScsICdZJywgJ3llcycsICdZZXMnLCAnWUVTJywgJ29uJywgJ09uJywgJ09OJyxcbiAgJ24nLCAnTicsICdubycsICdObycsICdOTycsICdvZmYnLCAnT2ZmJywgJ09GRidcbl07XG5cbnZhciBERVBSRUNBVEVEX0JBU0U2MF9TWU5UQVggPSAvXlstK10/WzAtOV9dKyg/OjpbMC05X10rKSsoPzpcXC5bMC05X10qKT8kLztcblxuZnVuY3Rpb24gY29tcGlsZVN0eWxlTWFwKHNjaGVtYSwgbWFwKSB7XG4gIHZhciByZXN1bHQsIGtleXMsIGluZGV4LCBsZW5ndGgsIHRhZywgc3R5bGUsIHR5cGU7XG5cbiAgaWYgKG1hcCA9PT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHJlc3VsdCA9IHt9O1xuICBrZXlzID0gT2JqZWN0LmtleXMobWFwKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdGFnID0ga2V5c1tpbmRleF07XG4gICAgc3R5bGUgPSBTdHJpbmcobWFwW3RhZ10pO1xuXG4gICAgaWYgKHRhZy5zbGljZSgwLCAyKSA9PT0gJyEhJykge1xuICAgICAgdGFnID0gJ3RhZzp5YW1sLm9yZywyMDAyOicgKyB0YWcuc2xpY2UoMik7XG4gICAgfVxuICAgIHR5cGUgPSBzY2hlbWEuY29tcGlsZWRUeXBlTWFwWydmYWxsYmFjayddW3RhZ107XG5cbiAgICBpZiAodHlwZSAmJiBfaGFzT3duUHJvcGVydHkuY2FsbCh0eXBlLnN0eWxlQWxpYXNlcywgc3R5bGUpKSB7XG4gICAgICBzdHlsZSA9IHR5cGUuc3R5bGVBbGlhc2VzW3N0eWxlXTtcbiAgICB9XG5cbiAgICByZXN1bHRbdGFnXSA9IHN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZW5jb2RlSGV4KGNoYXJhY3Rlcikge1xuICB2YXIgc3RyaW5nLCBoYW5kbGUsIGxlbmd0aDtcblxuICBzdHJpbmcgPSBjaGFyYWN0ZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cbiAgaWYgKGNoYXJhY3RlciA8PSAweEZGKSB7XG4gICAgaGFuZGxlID0gJ3gnO1xuICAgIGxlbmd0aCA9IDI7XG4gIH0gZWxzZSBpZiAoY2hhcmFjdGVyIDw9IDB4RkZGRikge1xuICAgIGhhbmRsZSA9ICd1JztcbiAgICBsZW5ndGggPSA0O1xuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA8PSAweEZGRkZGRkZGKSB7XG4gICAgaGFuZGxlID0gJ1UnO1xuICAgIGxlbmd0aCA9IDg7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignY29kZSBwb2ludCB3aXRoaW4gYSBzdHJpbmcgbWF5IG5vdCBiZSBncmVhdGVyIHRoYW4gMHhGRkZGRkZGRicpO1xuICB9XG5cbiAgcmV0dXJuICdcXFxcJyArIGhhbmRsZSArIGNvbW1vbi5yZXBlYXQoJzAnLCBsZW5ndGggLSBzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn1cblxuXG52YXIgUVVPVElOR19UWVBFX1NJTkdMRSA9IDEsXG4gICAgUVVPVElOR19UWVBFX0RPVUJMRSA9IDI7XG5cbmZ1bmN0aW9uIFN0YXRlKG9wdGlvbnMpIHtcbiAgdGhpcy5zY2hlbWEgICAgICAgID0gb3B0aW9uc1snc2NoZW1hJ10gfHwgX2RlZmF1bHQ7XG4gIHRoaXMuaW5kZW50ICAgICAgICA9IE1hdGgubWF4KDEsIChvcHRpb25zWydpbmRlbnQnXSB8fCAyKSk7XG4gIHRoaXMubm9BcnJheUluZGVudCA9IG9wdGlvbnNbJ25vQXJyYXlJbmRlbnQnXSB8fCBmYWxzZTtcbiAgdGhpcy5za2lwSW52YWxpZCAgID0gb3B0aW9uc1snc2tpcEludmFsaWQnXSB8fCBmYWxzZTtcbiAgdGhpcy5mbG93TGV2ZWwgICAgID0gKGNvbW1vbi5pc05vdGhpbmcob3B0aW9uc1snZmxvd0xldmVsJ10pID8gLTEgOiBvcHRpb25zWydmbG93TGV2ZWwnXSk7XG4gIHRoaXMuc3R5bGVNYXAgICAgICA9IGNvbXBpbGVTdHlsZU1hcCh0aGlzLnNjaGVtYSwgb3B0aW9uc1snc3R5bGVzJ10gfHwgbnVsbCk7XG4gIHRoaXMuc29ydEtleXMgICAgICA9IG9wdGlvbnNbJ3NvcnRLZXlzJ10gfHwgZmFsc2U7XG4gIHRoaXMubGluZVdpZHRoICAgICA9IG9wdGlvbnNbJ2xpbmVXaWR0aCddIHx8IDgwO1xuICB0aGlzLm5vUmVmcyAgICAgICAgPSBvcHRpb25zWydub1JlZnMnXSB8fCBmYWxzZTtcbiAgdGhpcy5ub0NvbXBhdE1vZGUgID0gb3B0aW9uc1snbm9Db21wYXRNb2RlJ10gfHwgZmFsc2U7XG4gIHRoaXMuY29uZGVuc2VGbG93ICA9IG9wdGlvbnNbJ2NvbmRlbnNlRmxvdyddIHx8IGZhbHNlO1xuICB0aGlzLnF1b3RpbmdUeXBlICAgPSBvcHRpb25zWydxdW90aW5nVHlwZSddID09PSAnXCInID8gUVVPVElOR19UWVBFX0RPVUJMRSA6IFFVT1RJTkdfVFlQRV9TSU5HTEU7XG4gIHRoaXMuZm9yY2VRdW90ZXMgICA9IG9wdGlvbnNbJ2ZvcmNlUXVvdGVzJ10gfHwgZmFsc2U7XG4gIHRoaXMucmVwbGFjZXIgICAgICA9IHR5cGVvZiBvcHRpb25zWydyZXBsYWNlciddID09PSAnZnVuY3Rpb24nID8gb3B0aW9uc1sncmVwbGFjZXInXSA6IG51bGw7XG5cbiAgdGhpcy5pbXBsaWNpdFR5cGVzID0gdGhpcy5zY2hlbWEuY29tcGlsZWRJbXBsaWNpdDtcbiAgdGhpcy5leHBsaWNpdFR5cGVzID0gdGhpcy5zY2hlbWEuY29tcGlsZWRFeHBsaWNpdDtcblxuICB0aGlzLnRhZyA9IG51bGw7XG4gIHRoaXMucmVzdWx0ID0gJyc7XG5cbiAgdGhpcy5kdXBsaWNhdGVzID0gW107XG4gIHRoaXMudXNlZER1cGxpY2F0ZXMgPSBudWxsO1xufVxuXG4vLyBJbmRlbnRzIGV2ZXJ5IGxpbmUgaW4gYSBzdHJpbmcuIEVtcHR5IGxpbmVzIChcXG4gb25seSkgYXJlIG5vdCBpbmRlbnRlZC5cbmZ1bmN0aW9uIGluZGVudFN0cmluZyhzdHJpbmcsIHNwYWNlcykge1xuICB2YXIgaW5kID0gY29tbW9uLnJlcGVhdCgnICcsIHNwYWNlcyksXG4gICAgICBwb3NpdGlvbiA9IDAsXG4gICAgICBuZXh0ID0gLTEsXG4gICAgICByZXN1bHQgPSAnJyxcbiAgICAgIGxpbmUsXG4gICAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgIG5leHQgPSBzdHJpbmcuaW5kZXhPZignXFxuJywgcG9zaXRpb24pO1xuICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgbGluZSA9IHN0cmluZy5zbGljZShwb3NpdGlvbik7XG4gICAgICBwb3NpdGlvbiA9IGxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZSA9IHN0cmluZy5zbGljZShwb3NpdGlvbiwgbmV4dCArIDEpO1xuICAgICAgcG9zaXRpb24gPSBuZXh0ICsgMTtcbiAgICB9XG5cbiAgICBpZiAobGluZS5sZW5ndGggJiYgbGluZSAhPT0gJ1xcbicpIHJlc3VsdCArPSBpbmQ7XG5cbiAgICByZXN1bHQgKz0gbGluZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKSB7XG4gIHJldHVybiAnXFxuJyArIGNvbW1vbi5yZXBlYXQoJyAnLCBzdGF0ZS5pbmRlbnQgKiBsZXZlbCk7XG59XG5cbmZ1bmN0aW9uIHRlc3RJbXBsaWNpdFJlc29sdmluZyhzdGF0ZSwgc3RyKSB7XG4gIHZhciBpbmRleCwgbGVuZ3RoLCB0eXBlO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBzdGF0ZS5pbXBsaWNpdFR5cGVzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB0eXBlID0gc3RhdGUuaW1wbGljaXRUeXBlc1tpbmRleF07XG5cbiAgICBpZiAodHlwZS5yZXNvbHZlKHN0cikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gWzMzXSBzLXdoaXRlIDo6PSBzLXNwYWNlIHwgcy10YWJcbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZShjKSB7XG4gIHJldHVybiBjID09PSBDSEFSX1NQQUNFIHx8IGMgPT09IENIQVJfVEFCO1xufVxuXG4vLyBSZXR1cm5zIHRydWUgaWYgdGhlIGNoYXJhY3RlciBjYW4gYmUgcHJpbnRlZCB3aXRob3V0IGVzY2FwaW5nLlxuLy8gRnJvbSBZQU1MIDEuMjogXCJhbnkgYWxsb3dlZCBjaGFyYWN0ZXJzIGtub3duIHRvIGJlIG5vbi1wcmludGFibGVcbi8vIHNob3VsZCBhbHNvIGJlIGVzY2FwZWQuIFtIb3dldmVyLF0gVGhpcyBpc27igJl0IG1hbmRhdG9yeVwiXG4vLyBEZXJpdmVkIGZyb20gbmItY2hhciAtIFxcdCAtICN4ODUgLSAjeEEwIC0gI3gyMDI4IC0gI3gyMDI5LlxuZnVuY3Rpb24gaXNQcmludGFibGUoYykge1xuICByZXR1cm4gICgweDAwMDIwIDw9IGMgJiYgYyA8PSAweDAwMDA3RSlcbiAgICAgIHx8ICgoMHgwMDBBMSA8PSBjICYmIGMgPD0gMHgwMEQ3RkYpICYmIGMgIT09IDB4MjAyOCAmJiBjICE9PSAweDIwMjkpXG4gICAgICB8fCAoKDB4MEUwMDAgPD0gYyAmJiBjIDw9IDB4MDBGRkZEKSAmJiBjICE9PSBDSEFSX0JPTSlcbiAgICAgIHx8ICAoMHgxMDAwMCA8PSBjICYmIGMgPD0gMHgxMEZGRkYpO1xufVxuXG4vLyBbMzRdIG5zLWNoYXIgOjo9IG5iLWNoYXIgLSBzLXdoaXRlXG4vLyBbMjddIG5iLWNoYXIgOjo9IGMtcHJpbnRhYmxlIC0gYi1jaGFyIC0gYy1ieXRlLW9yZGVyLW1hcmtcbi8vIFsyNl0gYi1jaGFyICA6Oj0gYi1saW5lLWZlZWQgfCBiLWNhcnJpYWdlLXJldHVyblxuLy8gSW5jbHVkaW5nIHMtd2hpdGUgKGZvciBzb21lIHJlYXNvbiwgZXhhbXBsZXMgZG9lc24ndCBtYXRjaCBzcGVjcyBpbiB0aGlzIGFzcGVjdClcbi8vIG5zLWNoYXIgOjo9IGMtcHJpbnRhYmxlIC0gYi1saW5lLWZlZWQgLSBiLWNhcnJpYWdlLXJldHVybiAtIGMtYnl0ZS1vcmRlci1tYXJrXG5mdW5jdGlvbiBpc05zQ2hhck9yV2hpdGVzcGFjZShjKSB7XG4gIHJldHVybiBpc1ByaW50YWJsZShjKVxuICAgICYmIGMgIT09IENIQVJfQk9NXG4gICAgLy8gLSBiLWNoYXJcbiAgICAmJiBjICE9PSBDSEFSX0NBUlJJQUdFX1JFVFVSTlxuICAgICYmIGMgIT09IENIQVJfTElORV9GRUVEO1xufVxuXG4vLyBbMTI3XSAgbnMtcGxhaW4tc2FmZShjKSA6Oj0gYyA9IGZsb3ctb3V0ICDih5IgbnMtcGxhaW4tc2FmZS1vdXRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gZmxvdy1pbiAgIOKHkiBucy1wbGFpbi1zYWZlLWluXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGJsb2NrLWtleSDih5IgbnMtcGxhaW4tc2FmZS1vdXRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gZmxvdy1rZXkgIOKHkiBucy1wbGFpbi1zYWZlLWluXG4vLyBbMTI4XSBucy1wbGFpbi1zYWZlLW91dCA6Oj0gbnMtY2hhclxuLy8gWzEyOV0gIG5zLXBsYWluLXNhZmUtaW4gOjo9IG5zLWNoYXIgLSBjLWZsb3ctaW5kaWNhdG9yXG4vLyBbMTMwXSAgbnMtcGxhaW4tY2hhcihjKSA6Oj0gICggbnMtcGxhaW4tc2FmZShjKSAtIOKAnDrigJ0gLSDigJwj4oCdIClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCAvKiBBbiBucy1jaGFyIHByZWNlZGluZyAqLyDigJwj4oCdIClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCDigJw64oCdIC8qIEZvbGxvd2VkIGJ5IGFuIG5zLXBsYWluLXNhZmUoYykgKi8gKVxuZnVuY3Rpb24gaXNQbGFpblNhZmUoYywgcHJldiwgaW5ibG9jaykge1xuICB2YXIgY0lzTnNDaGFyT3JXaGl0ZXNwYWNlID0gaXNOc0NoYXJPcldoaXRlc3BhY2UoYyk7XG4gIHZhciBjSXNOc0NoYXIgPSBjSXNOc0NoYXJPcldoaXRlc3BhY2UgJiYgIWlzV2hpdGVzcGFjZShjKTtcbiAgcmV0dXJuIChcbiAgICAvLyBucy1wbGFpbi1zYWZlXG4gICAgaW5ibG9jayA/IC8vIGMgPSBmbG93LWluXG4gICAgICBjSXNOc0NoYXJPcldoaXRlc3BhY2VcbiAgICAgIDogY0lzTnNDaGFyT3JXaGl0ZXNwYWNlXG4gICAgICAgIC8vIC0gYy1mbG93LWluZGljYXRvclxuICAgICAgICAmJiBjICE9PSBDSEFSX0NPTU1BXG4gICAgICAgICYmIGMgIT09IENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVFxuICAgICAgICAmJiBjICE9PSBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUXG4gICAgICAgICYmIGMgIT09IENIQVJfTEVGVF9DVVJMWV9CUkFDS0VUXG4gICAgICAgICYmIGMgIT09IENIQVJfUklHSFRfQ1VSTFlfQlJBQ0tFVFxuICApXG4gICAgLy8gbnMtcGxhaW4tY2hhclxuICAgICYmIGMgIT09IENIQVJfU0hBUlAgLy8gZmFsc2Ugb24gJyMnXG4gICAgJiYgIShwcmV2ID09PSBDSEFSX0NPTE9OICYmICFjSXNOc0NoYXIpIC8vIGZhbHNlIG9uICc6ICdcbiAgICB8fCAoaXNOc0NoYXJPcldoaXRlc3BhY2UocHJldikgJiYgIWlzV2hpdGVzcGFjZShwcmV2KSAmJiBjID09PSBDSEFSX1NIQVJQKSAvLyBjaGFuZ2UgdG8gdHJ1ZSBvbiAnW14gXSMnXG4gICAgfHwgKHByZXYgPT09IENIQVJfQ09MT04gJiYgY0lzTnNDaGFyKTsgLy8gY2hhbmdlIHRvIHRydWUgb24gJzpbXiBdJ1xufVxuXG4vLyBTaW1wbGlmaWVkIHRlc3QgZm9yIHZhbHVlcyBhbGxvd2VkIGFzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gcGxhaW4gc3R5bGUuXG5mdW5jdGlvbiBpc1BsYWluU2FmZUZpcnN0KGMpIHtcbiAgLy8gVXNlcyBhIHN1YnNldCBvZiBucy1jaGFyIC0gYy1pbmRpY2F0b3JcbiAgLy8gd2hlcmUgbnMtY2hhciA9IG5iLWNoYXIgLSBzLXdoaXRlLlxuICAvLyBObyBzdXBwb3J0IG9mICggKCDigJw/4oCdIHwg4oCcOuKAnSB8IOKAnC3igJ0gKSAvKiBGb2xsb3dlZCBieSBhbiBucy1wbGFpbi1zYWZlKGMpKSAqLyApIHBhcnRcbiAgcmV0dXJuIGlzUHJpbnRhYmxlKGMpICYmIGMgIT09IENIQVJfQk9NXG4gICAgJiYgIWlzV2hpdGVzcGFjZShjKSAvLyAtIHMtd2hpdGVcbiAgICAvLyAtIChjLWluZGljYXRvciA6Oj1cbiAgICAvLyDigJwt4oCdIHwg4oCcP+KAnSB8IOKAnDrigJ0gfCDigJws4oCdIHwg4oCcW+KAnSB8IOKAnF3igJ0gfCDigJx74oCdIHwg4oCcfeKAnVxuICAgICYmIGMgIT09IENIQVJfTUlOVVNcbiAgICAmJiBjICE9PSBDSEFSX1FVRVNUSU9OXG4gICAgJiYgYyAhPT0gQ0hBUl9DT0xPTlxuICAgICYmIGMgIT09IENIQVJfQ09NTUFcbiAgICAmJiBjICE9PSBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUXG4gICAgJiYgYyAhPT0gQ0hBUl9MRUZUX0NVUkxZX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX1JJR0hUX0NVUkxZX0JSQUNLRVRcbiAgICAvLyB8IOKAnCPigJ0gfCDigJwm4oCdIHwg4oCcKuKAnSB8IOKAnCHigJ0gfCDigJx84oCdIHwg4oCcPeKAnSB8IOKAnD7igJ0gfCDigJwn4oCdIHwg4oCcXCLigJ1cbiAgICAmJiBjICE9PSBDSEFSX1NIQVJQXG4gICAgJiYgYyAhPT0gQ0hBUl9BTVBFUlNBTkRcbiAgICAmJiBjICE9PSBDSEFSX0FTVEVSSVNLXG4gICAgJiYgYyAhPT0gQ0hBUl9FWENMQU1BVElPTlxuICAgICYmIGMgIT09IENIQVJfVkVSVElDQUxfTElORVxuICAgICYmIGMgIT09IENIQVJfRVFVQUxTXG4gICAgJiYgYyAhPT0gQ0hBUl9HUkVBVEVSX1RIQU5cbiAgICAmJiBjICE9PSBDSEFSX1NJTkdMRV9RVU9URVxuICAgICYmIGMgIT09IENIQVJfRE9VQkxFX1FVT1RFXG4gICAgLy8gfCDigJwl4oCdIHwg4oCcQOKAnSB8IOKAnGDigJ0pXG4gICAgJiYgYyAhPT0gQ0hBUl9QRVJDRU5UXG4gICAgJiYgYyAhPT0gQ0hBUl9DT01NRVJDSUFMX0FUXG4gICAgJiYgYyAhPT0gQ0hBUl9HUkFWRV9BQ0NFTlQ7XG59XG5cbi8vIFNpbXBsaWZpZWQgdGVzdCBmb3IgdmFsdWVzIGFsbG93ZWQgYXMgdGhlIGxhc3QgY2hhcmFjdGVyIGluIHBsYWluIHN0eWxlLlxuZnVuY3Rpb24gaXNQbGFpblNhZmVMYXN0KGMpIHtcbiAgLy8ganVzdCBub3Qgd2hpdGVzcGFjZSBvciBjb2xvbiwgaXQgd2lsbCBiZSBjaGVja2VkIHRvIGJlIHBsYWluIGNoYXJhY3RlciBsYXRlclxuICByZXR1cm4gIWlzV2hpdGVzcGFjZShjKSAmJiBjICE9PSBDSEFSX0NPTE9OO1xufVxuXG4vLyBTYW1lIGFzICdzdHJpbmcnLmNvZGVQb2ludEF0KHBvcyksIGJ1dCB3b3JrcyBpbiBvbGRlciBicm93c2Vycy5cbmZ1bmN0aW9uIGNvZGVQb2ludEF0KHN0cmluZywgcG9zKSB7XG4gIHZhciBmaXJzdCA9IHN0cmluZy5jaGFyQ29kZUF0KHBvcyksIHNlY29uZDtcbiAgaWYgKGZpcnN0ID49IDB4RDgwMCAmJiBmaXJzdCA8PSAweERCRkYgJiYgcG9zICsgMSA8IHN0cmluZy5sZW5ndGgpIHtcbiAgICBzZWNvbmQgPSBzdHJpbmcuY2hhckNvZGVBdChwb3MgKyAxKTtcbiAgICBpZiAoc2Vjb25kID49IDB4REMwMCAmJiBzZWNvbmQgPD0gMHhERkZGKSB7XG4gICAgICAvLyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgIHJldHVybiAoZmlyc3QgLSAweEQ4MDApICogMHg0MDAgKyBzZWNvbmQgLSAweERDMDAgKyAweDEwMDAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmlyc3Q7XG59XG5cbi8vIERldGVybWluZXMgd2hldGhlciBibG9jayBpbmRlbnRhdGlvbiBpbmRpY2F0b3IgaXMgcmVxdWlyZWQuXG5mdW5jdGlvbiBuZWVkSW5kZW50SW5kaWNhdG9yKHN0cmluZykge1xuICB2YXIgbGVhZGluZ1NwYWNlUmUgPSAvXlxcbiogLztcbiAgcmV0dXJuIGxlYWRpbmdTcGFjZVJlLnRlc3Qoc3RyaW5nKTtcbn1cblxudmFyIFNUWUxFX1BMQUlOICAgPSAxLFxuICAgIFNUWUxFX1NJTkdMRSAgPSAyLFxuICAgIFNUWUxFX0xJVEVSQUwgPSAzLFxuICAgIFNUWUxFX0ZPTERFRCAgPSA0LFxuICAgIFNUWUxFX0RPVUJMRSAgPSA1O1xuXG4vLyBEZXRlcm1pbmVzIHdoaWNoIHNjYWxhciBzdHlsZXMgYXJlIHBvc3NpYmxlIGFuZCByZXR1cm5zIHRoZSBwcmVmZXJyZWQgc3R5bGUuXG4vLyBsaW5lV2lkdGggPSAtMSA9PiBubyBsaW1pdC5cbi8vIFByZS1jb25kaXRpb25zOiBzdHIubGVuZ3RoID4gMC5cbi8vIFBvc3QtY29uZGl0aW9uczpcbi8vICAgIFNUWUxFX1BMQUlOIG9yIFNUWUxFX1NJTkdMRSA9PiBubyBcXG4gYXJlIGluIHRoZSBzdHJpbmcuXG4vLyAgICBTVFlMRV9MSVRFUkFMID0+IG5vIGxpbmVzIGFyZSBzdWl0YWJsZSBmb3IgZm9sZGluZyAob3IgbGluZVdpZHRoIGlzIC0xKS5cbi8vICAgIFNUWUxFX0ZPTERFRCA9PiBhIGxpbmUgPiBsaW5lV2lkdGggYW5kIGNhbiBiZSBmb2xkZWQgKGFuZCBsaW5lV2lkdGggIT0gLTEpLlxuZnVuY3Rpb24gY2hvb3NlU2NhbGFyU3R5bGUoc3RyaW5nLCBzaW5nbGVMaW5lT25seSwgaW5kZW50UGVyTGV2ZWwsIGxpbmVXaWR0aCxcbiAgdGVzdEFtYmlndW91c1R5cGUsIHF1b3RpbmdUeXBlLCBmb3JjZVF1b3RlcywgaW5ibG9jaykge1xuXG4gIHZhciBpO1xuICB2YXIgY2hhciA9IDA7XG4gIHZhciBwcmV2Q2hhciA9IG51bGw7XG4gIHZhciBoYXNMaW5lQnJlYWsgPSBmYWxzZTtcbiAgdmFyIGhhc0ZvbGRhYmxlTGluZSA9IGZhbHNlOyAvLyBvbmx5IGNoZWNrZWQgaWYgc2hvdWxkVHJhY2tXaWR0aFxuICB2YXIgc2hvdWxkVHJhY2tXaWR0aCA9IGxpbmVXaWR0aCAhPT0gLTE7XG4gIHZhciBwcmV2aW91c0xpbmVCcmVhayA9IC0xOyAvLyBjb3VudCB0aGUgZmlyc3QgbGluZSBjb3JyZWN0bHlcbiAgdmFyIHBsYWluID0gaXNQbGFpblNhZmVGaXJzdChjb2RlUG9pbnRBdChzdHJpbmcsIDApKVxuICAgICAgICAgICYmIGlzUGxhaW5TYWZlTGFzdChjb2RlUG9pbnRBdChzdHJpbmcsIHN0cmluZy5sZW5ndGggLSAxKSk7XG5cbiAgaWYgKHNpbmdsZUxpbmVPbmx5IHx8IGZvcmNlUXVvdGVzKSB7XG4gICAgLy8gQ2FzZTogbm8gYmxvY2sgc3R5bGVzLlxuICAgIC8vIENoZWNrIGZvciBkaXNhbGxvd2VkIGNoYXJhY3RlcnMgdG8gcnVsZSBvdXQgcGxhaW4gYW5kIHNpbmdsZS5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgY2hhciA+PSAweDEwMDAwID8gaSArPSAyIDogaSsrKSB7XG4gICAgICBjaGFyID0gY29kZVBvaW50QXQoc3RyaW5nLCBpKTtcbiAgICAgIGlmICghaXNQcmludGFibGUoY2hhcikpIHtcbiAgICAgICAgcmV0dXJuIFNUWUxFX0RPVUJMRTtcbiAgICAgIH1cbiAgICAgIHBsYWluID0gcGxhaW4gJiYgaXNQbGFpblNhZmUoY2hhciwgcHJldkNoYXIsIGluYmxvY2spO1xuICAgICAgcHJldkNoYXIgPSBjaGFyO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBDYXNlOiBibG9jayBzdHlsZXMgcGVybWl0dGVkLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBjaGFyID49IDB4MTAwMDAgPyBpICs9IDIgOiBpKyspIHtcbiAgICAgIGNoYXIgPSBjb2RlUG9pbnRBdChzdHJpbmcsIGkpO1xuICAgICAgaWYgKGNoYXIgPT09IENIQVJfTElORV9GRUVEKSB7XG4gICAgICAgIGhhc0xpbmVCcmVhayA9IHRydWU7XG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBsaW5lIGNhbiBiZSBmb2xkZWQuXG4gICAgICAgIGlmIChzaG91bGRUcmFja1dpZHRoKSB7XG4gICAgICAgICAgaGFzRm9sZGFibGVMaW5lID0gaGFzRm9sZGFibGVMaW5lIHx8XG4gICAgICAgICAgICAvLyBGb2xkYWJsZSBsaW5lID0gdG9vIGxvbmcsIGFuZCBub3QgbW9yZS1pbmRlbnRlZC5cbiAgICAgICAgICAgIChpIC0gcHJldmlvdXNMaW5lQnJlYWsgLSAxID4gbGluZVdpZHRoICYmXG4gICAgICAgICAgICAgc3RyaW5nW3ByZXZpb3VzTGluZUJyZWFrICsgMV0gIT09ICcgJyk7XG4gICAgICAgICAgcHJldmlvdXNMaW5lQnJlYWsgPSBpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc1ByaW50YWJsZShjaGFyKSkge1xuICAgICAgICByZXR1cm4gU1RZTEVfRE9VQkxFO1xuICAgICAgfVxuICAgICAgcGxhaW4gPSBwbGFpbiAmJiBpc1BsYWluU2FmZShjaGFyLCBwcmV2Q2hhciwgaW5ibG9jayk7XG4gICAgICBwcmV2Q2hhciA9IGNoYXI7XG4gICAgfVxuICAgIC8vIGluIGNhc2UgdGhlIGVuZCBpcyBtaXNzaW5nIGEgXFxuXG4gICAgaGFzRm9sZGFibGVMaW5lID0gaGFzRm9sZGFibGVMaW5lIHx8IChzaG91bGRUcmFja1dpZHRoICYmXG4gICAgICAoaSAtIHByZXZpb3VzTGluZUJyZWFrIC0gMSA+IGxpbmVXaWR0aCAmJlxuICAgICAgIHN0cmluZ1twcmV2aW91c0xpbmVCcmVhayArIDFdICE9PSAnICcpKTtcbiAgfVxuICAvLyBBbHRob3VnaCBldmVyeSBzdHlsZSBjYW4gcmVwcmVzZW50IFxcbiB3aXRob3V0IGVzY2FwaW5nLCBwcmVmZXIgYmxvY2sgc3R5bGVzXG4gIC8vIGZvciBtdWx0aWxpbmUsIHNpbmNlIHRoZXkncmUgbW9yZSByZWFkYWJsZSBhbmQgdGhleSBkb24ndCBhZGQgZW1wdHkgbGluZXMuXG4gIC8vIEFsc28gcHJlZmVyIGZvbGRpbmcgYSBzdXBlci1sb25nIGxpbmUuXG4gIGlmICghaGFzTGluZUJyZWFrICYmICFoYXNGb2xkYWJsZUxpbmUpIHtcbiAgICAvLyBTdHJpbmdzIGludGVycHJldGFibGUgYXMgYW5vdGhlciB0eXBlIGhhdmUgdG8gYmUgcXVvdGVkO1xuICAgIC8vIGUuZy4gdGhlIHN0cmluZyAndHJ1ZScgdnMuIHRoZSBib29sZWFuIHRydWUuXG4gICAgaWYgKHBsYWluICYmICFmb3JjZVF1b3RlcyAmJiAhdGVzdEFtYmlndW91c1R5cGUoc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIFNUWUxFX1BMQUlOO1xuICAgIH1cbiAgICByZXR1cm4gcXVvdGluZ1R5cGUgPT09IFFVT1RJTkdfVFlQRV9ET1VCTEUgPyBTVFlMRV9ET1VCTEUgOiBTVFlMRV9TSU5HTEU7XG4gIH1cbiAgLy8gRWRnZSBjYXNlOiBibG9jayBpbmRlbnRhdGlvbiBpbmRpY2F0b3IgY2FuIG9ubHkgaGF2ZSBvbmUgZGlnaXQuXG4gIGlmIChpbmRlbnRQZXJMZXZlbCA+IDkgJiYgbmVlZEluZGVudEluZGljYXRvcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIFNUWUxFX0RPVUJMRTtcbiAgfVxuICAvLyBBdCB0aGlzIHBvaW50IHdlIGtub3cgYmxvY2sgc3R5bGVzIGFyZSB2YWxpZC5cbiAgLy8gUHJlZmVyIGxpdGVyYWwgc3R5bGUgdW5sZXNzIHdlIHdhbnQgdG8gZm9sZC5cbiAgaWYgKCFmb3JjZVF1b3Rlcykge1xuICAgIHJldHVybiBoYXNGb2xkYWJsZUxpbmUgPyBTVFlMRV9GT0xERUQgOiBTVFlMRV9MSVRFUkFMO1xuICB9XG4gIHJldHVybiBxdW90aW5nVHlwZSA9PT0gUVVPVElOR19UWVBFX0RPVUJMRSA/IFNUWUxFX0RPVUJMRSA6IFNUWUxFX1NJTkdMRTtcbn1cblxuLy8gTm90ZTogbGluZSBicmVha2luZy9mb2xkaW5nIGlzIGltcGxlbWVudGVkIGZvciBvbmx5IHRoZSBmb2xkZWQgc3R5bGUuXG4vLyBOQi4gV2UgZHJvcCB0aGUgbGFzdCB0cmFpbGluZyBuZXdsaW5lIChpZiBhbnkpIG9mIGEgcmV0dXJuZWQgYmxvY2sgc2NhbGFyXG4vLyAgc2luY2UgdGhlIGR1bXBlciBhZGRzIGl0cyBvd24gbmV3bGluZS4gVGhpcyBhbHdheXMgd29ya3M6XG4vLyAgICDigKIgTm8gZW5kaW5nIG5ld2xpbmUgPT4gdW5hZmZlY3RlZDsgYWxyZWFkeSB1c2luZyBzdHJpcCBcIi1cIiBjaG9tcGluZy5cbi8vICAgIOKAoiBFbmRpbmcgbmV3bGluZSAgICA9PiByZW1vdmVkIHRoZW4gcmVzdG9yZWQuXG4vLyAgSW1wb3J0YW50bHksIHRoaXMga2VlcHMgdGhlIFwiK1wiIGNob21wIGluZGljYXRvciBmcm9tIGdhaW5pbmcgYW4gZXh0cmEgbGluZS5cbmZ1bmN0aW9uIHdyaXRlU2NhbGFyKHN0YXRlLCBzdHJpbmcsIGxldmVsLCBpc2tleSwgaW5ibG9jaykge1xuICBzdGF0ZS5kdW1wID0gKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnF1b3RpbmdUeXBlID09PSBRVU9USU5HX1RZUEVfRE9VQkxFID8gJ1wiXCInIDogXCInJ1wiO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm5vQ29tcGF0TW9kZSkge1xuICAgICAgaWYgKERFUFJFQ0FURURfQk9PTEVBTlNfU1lOVEFYLmluZGV4T2Yoc3RyaW5nKSAhPT0gLTEgfHwgREVQUkVDQVRFRF9CQVNFNjBfU1lOVEFYLnRlc3Qoc3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gc3RhdGUucXVvdGluZ1R5cGUgPT09IFFVT1RJTkdfVFlQRV9ET1VCTEUgPyAoJ1wiJyArIHN0cmluZyArICdcIicpIDogKFwiJ1wiICsgc3RyaW5nICsgXCInXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpbmRlbnQgPSBzdGF0ZS5pbmRlbnQgKiBNYXRoLm1heCgxLCBsZXZlbCk7IC8vIG5vIDAtaW5kZW50IHNjYWxhcnNcbiAgICAvLyBBcyBpbmRlbnRhdGlvbiBnZXRzIGRlZXBlciwgbGV0IHRoZSB3aWR0aCBkZWNyZWFzZSBtb25vdG9uaWNhbGx5XG4gICAgLy8gdG8gdGhlIGxvd2VyIGJvdW5kIG1pbihzdGF0ZS5saW5lV2lkdGgsIDQwKS5cbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpbXBsaWVzXG4gICAgLy8gIHN0YXRlLmxpbmVXaWR0aCDiiaQgNDAgKyBzdGF0ZS5pbmRlbnQ6IHdpZHRoIGlzIGZpeGVkIGF0IHRoZSBsb3dlciBib3VuZC5cbiAgICAvLyAgc3RhdGUubGluZVdpZHRoID4gNDAgKyBzdGF0ZS5pbmRlbnQ6IHdpZHRoIGRlY3JlYXNlcyB1bnRpbCB0aGUgbG93ZXIgYm91bmQuXG4gICAgLy8gVGhpcyBiZWhhdmVzIGJldHRlciB0aGFuIGEgY29uc3RhbnQgbWluaW11bSB3aWR0aCB3aGljaCBkaXNhbGxvd3MgbmFycm93ZXIgb3B0aW9ucyxcbiAgICAvLyBvciBhbiBpbmRlbnQgdGhyZXNob2xkIHdoaWNoIGNhdXNlcyB0aGUgd2lkdGggdG8gc3VkZGVubHkgaW5jcmVhc2UuXG4gICAgdmFyIGxpbmVXaWR0aCA9IHN0YXRlLmxpbmVXaWR0aCA9PT0gLTFcbiAgICAgID8gLTEgOiBNYXRoLm1heChNYXRoLm1pbihzdGF0ZS5saW5lV2lkdGgsIDQwKSwgc3RhdGUubGluZVdpZHRoIC0gaW5kZW50KTtcblxuICAgIC8vIFdpdGhvdXQga25vd2luZyBpZiBrZXlzIGFyZSBpbXBsaWNpdC9leHBsaWNpdCwgYXNzdW1lIGltcGxpY2l0IGZvciBzYWZldHkuXG4gICAgdmFyIHNpbmdsZUxpbmVPbmx5ID0gaXNrZXlcbiAgICAgIC8vIE5vIGJsb2NrIHN0eWxlcyBpbiBmbG93IG1vZGUuXG4gICAgICB8fCAoc3RhdGUuZmxvd0xldmVsID4gLTEgJiYgbGV2ZWwgPj0gc3RhdGUuZmxvd0xldmVsKTtcbiAgICBmdW5jdGlvbiB0ZXN0QW1iaWd1aXR5KHN0cmluZykge1xuICAgICAgcmV0dXJuIHRlc3RJbXBsaWNpdFJlc29sdmluZyhzdGF0ZSwgc3RyaW5nKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNob29zZVNjYWxhclN0eWxlKHN0cmluZywgc2luZ2xlTGluZU9ubHksIHN0YXRlLmluZGVudCwgbGluZVdpZHRoLFxuICAgICAgdGVzdEFtYmlndWl0eSwgc3RhdGUucXVvdGluZ1R5cGUsIHN0YXRlLmZvcmNlUXVvdGVzICYmICFpc2tleSwgaW5ibG9jaykpIHtcblxuICAgICAgY2FzZSBTVFlMRV9QTEFJTjpcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIGNhc2UgU1RZTEVfU0lOR0xFOlxuICAgICAgICByZXR1cm4gXCInXCIgKyBzdHJpbmcucmVwbGFjZSgvJy9nLCBcIicnXCIpICsgXCInXCI7XG4gICAgICBjYXNlIFNUWUxFX0xJVEVSQUw6XG4gICAgICAgIHJldHVybiAnfCcgKyBibG9ja0hlYWRlcihzdHJpbmcsIHN0YXRlLmluZGVudClcbiAgICAgICAgICArIGRyb3BFbmRpbmdOZXdsaW5lKGluZGVudFN0cmluZyhzdHJpbmcsIGluZGVudCkpO1xuICAgICAgY2FzZSBTVFlMRV9GT0xERUQ6XG4gICAgICAgIHJldHVybiAnPicgKyBibG9ja0hlYWRlcihzdHJpbmcsIHN0YXRlLmluZGVudClcbiAgICAgICAgICArIGRyb3BFbmRpbmdOZXdsaW5lKGluZGVudFN0cmluZyhmb2xkU3RyaW5nKHN0cmluZywgbGluZVdpZHRoKSwgaW5kZW50KSk7XG4gICAgICBjYXNlIFNUWUxFX0RPVUJMRTpcbiAgICAgICAgcmV0dXJuICdcIicgKyBlc2NhcGVTdHJpbmcoc3RyaW5nKSArICdcIic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdpbXBvc3NpYmxlIGVycm9yOiBpbnZhbGlkIHNjYWxhciBzdHlsZScpO1xuICAgIH1cbiAgfSgpKTtcbn1cblxuLy8gUHJlLWNvbmRpdGlvbnM6IHN0cmluZyBpcyB2YWxpZCBmb3IgYSBibG9jayBzY2FsYXIsIDEgPD0gaW5kZW50UGVyTGV2ZWwgPD0gOS5cbmZ1bmN0aW9uIGJsb2NrSGVhZGVyKHN0cmluZywgaW5kZW50UGVyTGV2ZWwpIHtcbiAgdmFyIGluZGVudEluZGljYXRvciA9IG5lZWRJbmRlbnRJbmRpY2F0b3Ioc3RyaW5nKSA/IFN0cmluZyhpbmRlbnRQZXJMZXZlbCkgOiAnJztcblxuICAvLyBub3RlIHRoZSBzcGVjaWFsIGNhc2U6IHRoZSBzdHJpbmcgJ1xcbicgY291bnRzIGFzIGEgXCJ0cmFpbGluZ1wiIGVtcHR5IGxpbmUuXG4gIHZhciBjbGlwID0gICAgICAgICAgc3RyaW5nW3N0cmluZy5sZW5ndGggLSAxXSA9PT0gJ1xcbic7XG4gIHZhciBrZWVwID0gY2xpcCAmJiAoc3RyaW5nW3N0cmluZy5sZW5ndGggLSAyXSA9PT0gJ1xcbicgfHwgc3RyaW5nID09PSAnXFxuJyk7XG4gIHZhciBjaG9tcCA9IGtlZXAgPyAnKycgOiAoY2xpcCA/ICcnIDogJy0nKTtcblxuICByZXR1cm4gaW5kZW50SW5kaWNhdG9yICsgY2hvbXAgKyAnXFxuJztcbn1cblxuLy8gKFNlZSB0aGUgbm90ZSBmb3Igd3JpdGVTY2FsYXIuKVxuZnVuY3Rpb24gZHJvcEVuZGluZ05ld2xpbmUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdbc3RyaW5nLmxlbmd0aCAtIDFdID09PSAnXFxuJyA/IHN0cmluZy5zbGljZSgwLCAtMSkgOiBzdHJpbmc7XG59XG5cbi8vIE5vdGU6IGEgbG9uZyBsaW5lIHdpdGhvdXQgYSBzdWl0YWJsZSBicmVhayBwb2ludCB3aWxsIGV4Y2VlZCB0aGUgd2lkdGggbGltaXQuXG4vLyBQcmUtY29uZGl0aW9uczogZXZlcnkgY2hhciBpbiBzdHIgaXNQcmludGFibGUsIHN0ci5sZW5ndGggPiAwLCB3aWR0aCA+IDAuXG5mdW5jdGlvbiBmb2xkU3RyaW5nKHN0cmluZywgd2lkdGgpIHtcbiAgLy8gSW4gZm9sZGVkIHN0eWxlLCAkayQgY29uc2VjdXRpdmUgbmV3bGluZXMgb3V0cHV0IGFzICRrKzEkIG5ld2xpbmVz4oCUXG4gIC8vIHVubGVzcyB0aGV5J3JlIGJlZm9yZSBvciBhZnRlciBhIG1vcmUtaW5kZW50ZWQgbGluZSwgb3IgYXQgdGhlIHZlcnlcbiAgLy8gYmVnaW5uaW5nIG9yIGVuZCwgaW4gd2hpY2ggY2FzZSAkayQgbWFwcyB0byAkayQuXG4gIC8vIFRoZXJlZm9yZSwgcGFyc2UgZWFjaCBjaHVuayBhcyBuZXdsaW5lKHMpIGZvbGxvd2VkIGJ5IGEgY29udGVudCBsaW5lLlxuICB2YXIgbGluZVJlID0gLyhcXG4rKShbXlxcbl0qKS9nO1xuXG4gIC8vIGZpcnN0IGxpbmUgKHBvc3NpYmx5IGFuIGVtcHR5IGxpbmUpXG4gIHZhciByZXN1bHQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBuZXh0TEYgPSBzdHJpbmcuaW5kZXhPZignXFxuJyk7XG4gICAgbmV4dExGID0gbmV4dExGICE9PSAtMSA/IG5leHRMRiA6IHN0cmluZy5sZW5ndGg7XG4gICAgbGluZVJlLmxhc3RJbmRleCA9IG5leHRMRjtcbiAgICByZXR1cm4gZm9sZExpbmUoc3RyaW5nLnNsaWNlKDAsIG5leHRMRiksIHdpZHRoKTtcbiAgfSgpKTtcbiAgLy8gSWYgd2UgaGF2ZW4ndCByZWFjaGVkIHRoZSBmaXJzdCBjb250ZW50IGxpbmUgeWV0LCBkb24ndCBhZGQgYW4gZXh0cmEgXFxuLlxuICB2YXIgcHJldk1vcmVJbmRlbnRlZCA9IHN0cmluZ1swXSA9PT0gJ1xcbicgfHwgc3RyaW5nWzBdID09PSAnICc7XG4gIHZhciBtb3JlSW5kZW50ZWQ7XG5cbiAgLy8gcmVzdCBvZiB0aGUgbGluZXNcbiAgdmFyIG1hdGNoO1xuICB3aGlsZSAoKG1hdGNoID0gbGluZVJlLmV4ZWMoc3RyaW5nKSkpIHtcbiAgICB2YXIgcHJlZml4ID0gbWF0Y2hbMV0sIGxpbmUgPSBtYXRjaFsyXTtcbiAgICBtb3JlSW5kZW50ZWQgPSAobGluZVswXSA9PT0gJyAnKTtcbiAgICByZXN1bHQgKz0gcHJlZml4XG4gICAgICArICghcHJldk1vcmVJbmRlbnRlZCAmJiAhbW9yZUluZGVudGVkICYmIGxpbmUgIT09ICcnXG4gICAgICAgID8gJ1xcbicgOiAnJylcbiAgICAgICsgZm9sZExpbmUobGluZSwgd2lkdGgpO1xuICAgIHByZXZNb3JlSW5kZW50ZWQgPSBtb3JlSW5kZW50ZWQ7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBHcmVlZHkgbGluZSBicmVha2luZy5cbi8vIFBpY2tzIHRoZSBsb25nZXN0IGxpbmUgdW5kZXIgdGhlIGxpbWl0IGVhY2ggdGltZSxcbi8vIG90aGVyd2lzZSBzZXR0bGVzIGZvciB0aGUgc2hvcnRlc3QgbGluZSBvdmVyIHRoZSBsaW1pdC5cbi8vIE5CLiBNb3JlLWluZGVudGVkIGxpbmVzICpjYW5ub3QqIGJlIGZvbGRlZCwgYXMgdGhhdCB3b3VsZCBhZGQgYW4gZXh0cmEgXFxuLlxuZnVuY3Rpb24gZm9sZExpbmUobGluZSwgd2lkdGgpIHtcbiAgaWYgKGxpbmUgPT09ICcnIHx8IGxpbmVbMF0gPT09ICcgJykgcmV0dXJuIGxpbmU7XG5cbiAgLy8gU2luY2UgYSBtb3JlLWluZGVudGVkIGxpbmUgYWRkcyBhIFxcbiwgYnJlYWtzIGNhbid0IGJlIGZvbGxvd2VkIGJ5IGEgc3BhY2UuXG4gIHZhciBicmVha1JlID0gLyBbXiBdL2c7IC8vIG5vdGU6IHRoZSBtYXRjaCBpbmRleCB3aWxsIGFsd2F5cyBiZSA8PSBsZW5ndGgtMi5cbiAgdmFyIG1hdGNoO1xuICAvLyBzdGFydCBpcyBhbiBpbmNsdXNpdmUgaW5kZXguIGVuZCwgY3VyciwgYW5kIG5leHQgYXJlIGV4Y2x1c2l2ZS5cbiAgdmFyIHN0YXJ0ID0gMCwgZW5kLCBjdXJyID0gMCwgbmV4dCA9IDA7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICAvLyBJbnZhcmlhbnRzOiAwIDw9IHN0YXJ0IDw9IGxlbmd0aC0xLlxuICAvLyAgIDAgPD0gY3VyciA8PSBuZXh0IDw9IG1heCgwLCBsZW5ndGgtMikuIGN1cnIgLSBzdGFydCA8PSB3aWR0aC5cbiAgLy8gSW5zaWRlIHRoZSBsb29wOlxuICAvLyAgIEEgbWF0Y2ggaW1wbGllcyBsZW5ndGggPj0gMiwgc28gY3VyciBhbmQgbmV4dCBhcmUgPD0gbGVuZ3RoLTIuXG4gIHdoaWxlICgobWF0Y2ggPSBicmVha1JlLmV4ZWMobGluZSkpKSB7XG4gICAgbmV4dCA9IG1hdGNoLmluZGV4O1xuICAgIC8vIG1haW50YWluIGludmFyaWFudDogY3VyciAtIHN0YXJ0IDw9IHdpZHRoXG4gICAgaWYgKG5leHQgLSBzdGFydCA+IHdpZHRoKSB7XG4gICAgICBlbmQgPSAoY3VyciA+IHN0YXJ0KSA/IGN1cnIgOiBuZXh0OyAvLyBkZXJpdmUgZW5kIDw9IGxlbmd0aC0yXG4gICAgICByZXN1bHQgKz0gJ1xcbicgKyBsaW5lLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgLy8gc2tpcCB0aGUgc3BhY2UgdGhhdCB3YXMgb3V0cHV0IGFzIFxcblxuICAgICAgc3RhcnQgPSBlbmQgKyAxOyAgICAgICAgICAgICAgICAgICAgLy8gZGVyaXZlIHN0YXJ0IDw9IGxlbmd0aC0xXG4gICAgfVxuICAgIGN1cnIgPSBuZXh0O1xuICB9XG5cbiAgLy8gQnkgdGhlIGludmFyaWFudHMsIHN0YXJ0IDw9IGxlbmd0aC0xLCBzbyB0aGVyZSBpcyBzb21ldGhpbmcgbGVmdCBvdmVyLlxuICAvLyBJdCBpcyBlaXRoZXIgdGhlIHdob2xlIHN0cmluZyBvciBhIHBhcnQgc3RhcnRpbmcgZnJvbSBub24td2hpdGVzcGFjZS5cbiAgcmVzdWx0ICs9ICdcXG4nO1xuICAvLyBJbnNlcnQgYSBicmVhayBpZiB0aGUgcmVtYWluZGVyIGlzIHRvbyBsb25nIGFuZCB0aGVyZSBpcyBhIGJyZWFrIGF2YWlsYWJsZS5cbiAgaWYgKGxpbmUubGVuZ3RoIC0gc3RhcnQgPiB3aWR0aCAmJiBjdXJyID4gc3RhcnQpIHtcbiAgICByZXN1bHQgKz0gbGluZS5zbGljZShzdGFydCwgY3VycikgKyAnXFxuJyArIGxpbmUuc2xpY2UoY3VyciArIDEpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCArPSBsaW5lLnNsaWNlKHN0YXJ0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuc2xpY2UoMSk7IC8vIGRyb3AgZXh0cmEgXFxuIGpvaW5lclxufVxuXG4vLyBFc2NhcGVzIGEgZG91YmxlLXF1b3RlZCBzdHJpbmcuXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGNoYXIgPSAwO1xuICB2YXIgZXNjYXBlU2VxO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgY2hhciA+PSAweDEwMDAwID8gaSArPSAyIDogaSsrKSB7XG4gICAgY2hhciA9IGNvZGVQb2ludEF0KHN0cmluZywgaSk7XG4gICAgZXNjYXBlU2VxID0gRVNDQVBFX1NFUVVFTkNFU1tjaGFyXTtcblxuICAgIGlmICghZXNjYXBlU2VxICYmIGlzUHJpbnRhYmxlKGNoYXIpKSB7XG4gICAgICByZXN1bHQgKz0gc3RyaW5nW2ldO1xuICAgICAgaWYgKGNoYXIgPj0gMHgxMDAwMCkgcmVzdWx0ICs9IHN0cmluZ1tpICsgMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBlc2NhcGVTZXEgfHwgZW5jb2RlSGV4KGNoYXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvd1NlcXVlbmNlKHN0YXRlLCBsZXZlbCwgb2JqZWN0KSB7XG4gIHZhciBfcmVzdWx0ID0gJycsXG4gICAgICBfdGFnICAgID0gc3RhdGUudGFnLFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGgsXG4gICAgICB2YWx1ZTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB2YWx1ZSA9IG9iamVjdFtpbmRleF07XG5cbiAgICBpZiAoc3RhdGUucmVwbGFjZXIpIHtcbiAgICAgIHZhbHVlID0gc3RhdGUucmVwbGFjZXIuY2FsbChvYmplY3QsIFN0cmluZyhpbmRleCksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBXcml0ZSBvbmx5IHZhbGlkIGVsZW1lbnRzLCBwdXQgbnVsbCBpbnN0ZWFkIG9mIGludmFsaWQgZWxlbWVudHMuXG4gICAgaWYgKHdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwsIHZhbHVlLCBmYWxzZSwgZmFsc2UpIHx8XG4gICAgICAgICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICB3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBudWxsLCBmYWxzZSwgZmFsc2UpKSkge1xuXG4gICAgICBpZiAoX3Jlc3VsdCAhPT0gJycpIF9yZXN1bHQgKz0gJywnICsgKCFzdGF0ZS5jb25kZW5zZUZsb3cgPyAnICcgOiAnJyk7XG4gICAgICBfcmVzdWx0ICs9IHN0YXRlLmR1bXA7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9ICdbJyArIF9yZXN1bHQgKyAnXSc7XG59XG5cbmZ1bmN0aW9uIHdyaXRlQmxvY2tTZXF1ZW5jZShzdGF0ZSwgbGV2ZWwsIG9iamVjdCwgY29tcGFjdCkge1xuICB2YXIgX3Jlc3VsdCA9ICcnLFxuICAgICAgX3RhZyAgICA9IHN0YXRlLnRhZyxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoLFxuICAgICAgdmFsdWU7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdmFsdWUgPSBvYmplY3RbaW5kZXhdO1xuXG4gICAgaWYgKHN0YXRlLnJlcGxhY2VyKSB7XG4gICAgICB2YWx1ZSA9IHN0YXRlLnJlcGxhY2VyLmNhbGwob2JqZWN0LCBTdHJpbmcoaW5kZXgpLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gV3JpdGUgb25seSB2YWxpZCBlbGVtZW50cywgcHV0IG51bGwgaW5zdGVhZCBvZiBpbnZhbGlkIGVsZW1lbnRzLlxuICAgIGlmICh3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgdmFsdWUsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlKSB8fFxuICAgICAgICAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCArIDEsIG51bGwsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlKSkpIHtcblxuICAgICAgaWYgKCFjb21wYWN0IHx8IF9yZXN1bHQgIT09ICcnKSB7XG4gICAgICAgIF9yZXN1bHQgKz0gZ2VuZXJhdGVOZXh0TGluZShzdGF0ZSwgbGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuZHVtcCAmJiBDSEFSX0xJTkVfRkVFRCA9PT0gc3RhdGUuZHVtcC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgIF9yZXN1bHQgKz0gJy0nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3Jlc3VsdCArPSAnLSAnO1xuICAgICAgfVxuXG4gICAgICBfcmVzdWx0ICs9IHN0YXRlLmR1bXA7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9IF9yZXN1bHQgfHwgJ1tdJzsgLy8gRW1wdHkgc2VxdWVuY2UgaWYgbm8gdmFsaWQgdmFsdWVzLlxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb3dNYXBwaW5nKHN0YXRlLCBsZXZlbCwgb2JqZWN0KSB7XG4gIHZhciBfcmVzdWx0ICAgICAgID0gJycsXG4gICAgICBfdGFnICAgICAgICAgID0gc3RhdGUudGFnLFxuICAgICAgb2JqZWN0S2V5TGlzdCA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aCxcbiAgICAgIG9iamVjdEtleSxcbiAgICAgIG9iamVjdFZhbHVlLFxuICAgICAgcGFpckJ1ZmZlcjtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0S2V5TGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG5cbiAgICBwYWlyQnVmZmVyID0gJyc7XG4gICAgaWYgKF9yZXN1bHQgIT09ICcnKSBwYWlyQnVmZmVyICs9ICcsICc7XG5cbiAgICBpZiAoc3RhdGUuY29uZGVuc2VGbG93KSBwYWlyQnVmZmVyICs9ICdcIic7XG5cbiAgICBvYmplY3RLZXkgPSBvYmplY3RLZXlMaXN0W2luZGV4XTtcbiAgICBvYmplY3RWYWx1ZSA9IG9iamVjdFtvYmplY3RLZXldO1xuXG4gICAgaWYgKHN0YXRlLnJlcGxhY2VyKSB7XG4gICAgICBvYmplY3RWYWx1ZSA9IHN0YXRlLnJlcGxhY2VyLmNhbGwob2JqZWN0LCBvYmplY3RLZXksIG9iamVjdFZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoIXdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwsIG9iamVjdEtleSwgZmFsc2UsIGZhbHNlKSkge1xuICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyBwYWlyIGJlY2F1c2Ugb2YgaW52YWxpZCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmR1bXAubGVuZ3RoID4gMTAyNCkgcGFpckJ1ZmZlciArPSAnPyAnO1xuXG4gICAgcGFpckJ1ZmZlciArPSBzdGF0ZS5kdW1wICsgKHN0YXRlLmNvbmRlbnNlRmxvdyA/ICdcIicgOiAnJykgKyAnOicgKyAoc3RhdGUuY29uZGVuc2VGbG93ID8gJycgOiAnICcpO1xuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBvYmplY3RWYWx1ZSwgZmFsc2UsIGZhbHNlKSkge1xuICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyBwYWlyIGJlY2F1c2Ugb2YgaW52YWxpZCB2YWx1ZS5cbiAgICB9XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXA7XG5cbiAgICAvLyBCb3RoIGtleSBhbmQgdmFsdWUgYXJlIHZhbGlkLlxuICAgIF9yZXN1bHQgKz0gcGFpckJ1ZmZlcjtcbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSAneycgKyBfcmVzdWx0ICsgJ30nO1xufVxuXG5mdW5jdGlvbiB3cml0ZUJsb2NrTWFwcGluZyhzdGF0ZSwgbGV2ZWwsIG9iamVjdCwgY29tcGFjdCkge1xuICB2YXIgX3Jlc3VsdCAgICAgICA9ICcnLFxuICAgICAgX3RhZyAgICAgICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIG9iamVjdEtleUxpc3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGgsXG4gICAgICBvYmplY3RLZXksXG4gICAgICBvYmplY3RWYWx1ZSxcbiAgICAgIGV4cGxpY2l0UGFpcixcbiAgICAgIHBhaXJCdWZmZXI7XG5cbiAgLy8gQWxsb3cgc29ydGluZyBrZXlzIHNvIHRoYXQgdGhlIG91dHB1dCBmaWxlIGlzIGRldGVybWluaXN0aWNcbiAgaWYgKHN0YXRlLnNvcnRLZXlzID09PSB0cnVlKSB7XG4gICAgLy8gRGVmYXVsdCBzb3J0aW5nXG4gICAgb2JqZWN0S2V5TGlzdC5zb3J0KCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHN0YXRlLnNvcnRLZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gQ3VzdG9tIHNvcnQgZnVuY3Rpb25cbiAgICBvYmplY3RLZXlMaXN0LnNvcnQoc3RhdGUuc29ydEtleXMpO1xuICB9IGVsc2UgaWYgKHN0YXRlLnNvcnRLZXlzKSB7XG4gICAgLy8gU29tZXRoaW5nIGlzIHdyb25nXG4gICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignc29ydEtleXMgbXVzdCBiZSBhIGJvb2xlYW4gb3IgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdEtleUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXJCdWZmZXIgPSAnJztcblxuICAgIGlmICghY29tcGFjdCB8fCBfcmVzdWx0ICE9PSAnJykge1xuICAgICAgcGFpckJ1ZmZlciArPSBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgb2JqZWN0S2V5ID0gb2JqZWN0S2V5TGlzdFtpbmRleF07XG4gICAgb2JqZWN0VmFsdWUgPSBvYmplY3Rbb2JqZWN0S2V5XTtcblxuICAgIGlmIChzdGF0ZS5yZXBsYWNlcikge1xuICAgICAgb2JqZWN0VmFsdWUgPSBzdGF0ZS5yZXBsYWNlci5jYWxsKG9iamVjdCwgb2JqZWN0S2V5LCBvYmplY3RWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgb2JqZWN0S2V5LCB0cnVlLCB0cnVlLCB0cnVlKSkge1xuICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyBwYWlyIGJlY2F1c2Ugb2YgaW52YWxpZCBrZXkuXG4gICAgfVxuXG4gICAgZXhwbGljaXRQYWlyID0gKHN0YXRlLnRhZyAhPT0gbnVsbCAmJiBzdGF0ZS50YWcgIT09ICc/JykgfHxcbiAgICAgICAgICAgICAgICAgICAoc3RhdGUuZHVtcCAmJiBzdGF0ZS5kdW1wLmxlbmd0aCA+IDEwMjQpO1xuXG4gICAgaWYgKGV4cGxpY2l0UGFpcikge1xuICAgICAgaWYgKHN0YXRlLmR1bXAgJiYgQ0hBUl9MSU5FX0ZFRUQgPT09IHN0YXRlLmR1bXAuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICBwYWlyQnVmZmVyICs9ICc/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhaXJCdWZmZXIgKz0gJz8gJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXA7XG5cbiAgICBpZiAoZXhwbGljaXRQYWlyKSB7XG4gICAgICBwYWlyQnVmZmVyICs9IGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKTtcbiAgICB9XG5cbiAgICBpZiAoIXdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwgKyAxLCBvYmplY3RWYWx1ZSwgdHJ1ZSwgZXhwbGljaXRQYWlyKSkge1xuICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyBwYWlyIGJlY2F1c2Ugb2YgaW52YWxpZCB2YWx1ZS5cbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZHVtcCAmJiBDSEFSX0xJTkVfRkVFRCA9PT0gc3RhdGUuZHVtcC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICBwYWlyQnVmZmVyICs9ICc6JztcbiAgICB9IGVsc2Uge1xuICAgICAgcGFpckJ1ZmZlciArPSAnOiAnO1xuICAgIH1cblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcDtcblxuICAgIC8vIEJvdGgga2V5IGFuZCB2YWx1ZSBhcmUgdmFsaWQuXG4gICAgX3Jlc3VsdCArPSBwYWlyQnVmZmVyO1xuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9IF9yZXN1bHQgfHwgJ3t9JzsgLy8gRW1wdHkgbWFwcGluZyBpZiBubyB2YWxpZCBwYWlycy5cbn1cblxuZnVuY3Rpb24gZGV0ZWN0VHlwZShzdGF0ZSwgb2JqZWN0LCBleHBsaWNpdCkge1xuICB2YXIgX3Jlc3VsdCwgdHlwZUxpc3QsIGluZGV4LCBsZW5ndGgsIHR5cGUsIHN0eWxlO1xuXG4gIHR5cGVMaXN0ID0gZXhwbGljaXQgPyBzdGF0ZS5leHBsaWNpdFR5cGVzIDogc3RhdGUuaW1wbGljaXRUeXBlcztcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdHlwZUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHR5cGUgPSB0eXBlTGlzdFtpbmRleF07XG5cbiAgICBpZiAoKHR5cGUuaW5zdGFuY2VPZiAgfHwgdHlwZS5wcmVkaWNhdGUpICYmXG4gICAgICAgICghdHlwZS5pbnN0YW5jZU9mIHx8ICgodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpICYmIChvYmplY3QgaW5zdGFuY2VvZiB0eXBlLmluc3RhbmNlT2YpKSkgJiZcbiAgICAgICAgKCF0eXBlLnByZWRpY2F0ZSAgfHwgdHlwZS5wcmVkaWNhdGUob2JqZWN0KSkpIHtcblxuICAgICAgaWYgKGV4cGxpY2l0KSB7XG4gICAgICAgIGlmICh0eXBlLm11bHRpICYmIHR5cGUucmVwcmVzZW50TmFtZSkge1xuICAgICAgICAgIHN0YXRlLnRhZyA9IHR5cGUucmVwcmVzZW50TmFtZShvYmplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLnRhZyA9IHR5cGUudGFnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS50YWcgPSAnPyc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlLnJlcHJlc2VudCkge1xuICAgICAgICBzdHlsZSA9IHN0YXRlLnN0eWxlTWFwW3R5cGUudGFnXSB8fCB0eXBlLmRlZmF1bHRTdHlsZTtcblxuICAgICAgICBpZiAoX3RvU3RyaW5nLmNhbGwodHlwZS5yZXByZXNlbnQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgICAgICAgX3Jlc3VsdCA9IHR5cGUucmVwcmVzZW50KG9iamVjdCwgc3R5bGUpO1xuICAgICAgICB9IGVsc2UgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHR5cGUucmVwcmVzZW50LCBzdHlsZSkpIHtcbiAgICAgICAgICBfcmVzdWx0ID0gdHlwZS5yZXByZXNlbnRbc3R5bGVdKG9iamVjdCwgc3R5bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb24oJyE8JyArIHR5cGUudGFnICsgJz4gdGFnIHJlc29sdmVyIGFjY2VwdHMgbm90IFwiJyArIHN0eWxlICsgJ1wiIHN0eWxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5kdW1wID0gX3Jlc3VsdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBTZXJpYWxpemVzIGBvYmplY3RgIGFuZCB3cml0ZXMgaXQgdG8gZ2xvYmFsIGByZXN1bHRgLlxuLy8gUmV0dXJucyB0cnVlIG9uIHN1Y2Nlc3MsIG9yIGZhbHNlIG9uIGludmFsaWQgb2JqZWN0LlxuLy9cbmZ1bmN0aW9uIHdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwsIG9iamVjdCwgYmxvY2ssIGNvbXBhY3QsIGlza2V5LCBpc2Jsb2Nrc2VxKSB7XG4gIHN0YXRlLnRhZyA9IG51bGw7XG4gIHN0YXRlLmR1bXAgPSBvYmplY3Q7XG5cbiAgaWYgKCFkZXRlY3RUeXBlKHN0YXRlLCBvYmplY3QsIGZhbHNlKSkge1xuICAgIGRldGVjdFR5cGUoc3RhdGUsIG9iamVjdCwgdHJ1ZSk7XG4gIH1cblxuICB2YXIgdHlwZSA9IF90b1N0cmluZy5jYWxsKHN0YXRlLmR1bXApO1xuICB2YXIgaW5ibG9jayA9IGJsb2NrO1xuICB2YXIgdGFnU3RyO1xuXG4gIGlmIChibG9jaykge1xuICAgIGJsb2NrID0gKHN0YXRlLmZsb3dMZXZlbCA8IDAgfHwgc3RhdGUuZmxvd0xldmVsID4gbGV2ZWwpO1xuICB9XG5cbiAgdmFyIG9iamVjdE9yQXJyYXkgPSB0eXBlID09PSAnW29iamVjdCBPYmplY3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBBcnJheV0nLFxuICAgICAgZHVwbGljYXRlSW5kZXgsXG4gICAgICBkdXBsaWNhdGU7XG5cbiAgaWYgKG9iamVjdE9yQXJyYXkpIHtcbiAgICBkdXBsaWNhdGVJbmRleCA9IHN0YXRlLmR1cGxpY2F0ZXMuaW5kZXhPZihvYmplY3QpO1xuICAgIGR1cGxpY2F0ZSA9IGR1cGxpY2F0ZUluZGV4ICE9PSAtMTtcbiAgfVxuXG4gIGlmICgoc3RhdGUudGFnICE9PSBudWxsICYmIHN0YXRlLnRhZyAhPT0gJz8nKSB8fCBkdXBsaWNhdGUgfHwgKHN0YXRlLmluZGVudCAhPT0gMiAmJiBsZXZlbCA+IDApKSB7XG4gICAgY29tcGFjdCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGR1cGxpY2F0ZSAmJiBzdGF0ZS51c2VkRHVwbGljYXRlc1tkdXBsaWNhdGVJbmRleF0pIHtcbiAgICBzdGF0ZS5kdW1wID0gJypyZWZfJyArIGR1cGxpY2F0ZUluZGV4O1xuICB9IGVsc2Uge1xuICAgIGlmIChvYmplY3RPckFycmF5ICYmIGR1cGxpY2F0ZSAmJiAhc3RhdGUudXNlZER1cGxpY2F0ZXNbZHVwbGljYXRlSW5kZXhdKSB7XG4gICAgICBzdGF0ZS51c2VkRHVwbGljYXRlc1tkdXBsaWNhdGVJbmRleF0gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgIGlmIChibG9jayAmJiAoT2JqZWN0LmtleXMoc3RhdGUuZHVtcCkubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICB3cml0ZUJsb2NrTWFwcGluZyhzdGF0ZSwgbGV2ZWwsIHN0YXRlLmR1bXAsIGNvbXBhY3QpO1xuICAgICAgICBpZiAoZHVwbGljYXRlKSB7XG4gICAgICAgICAgc3RhdGUuZHVtcCA9ICcmcmVmXycgKyBkdXBsaWNhdGVJbmRleCArIHN0YXRlLmR1bXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyaXRlRmxvd01hcHBpbmcoc3RhdGUsIGxldmVsLCBzdGF0ZS5kdW1wKTtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyAnICcgKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICBpZiAoYmxvY2sgJiYgKHN0YXRlLmR1bXAubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICBpZiAoc3RhdGUubm9BcnJheUluZGVudCAmJiAhaXNibG9ja3NlcSAmJiBsZXZlbCA+IDApIHtcbiAgICAgICAgICB3cml0ZUJsb2NrU2VxdWVuY2Uoc3RhdGUsIGxldmVsIC0gMSwgc3RhdGUuZHVtcCwgY29tcGFjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3JpdGVCbG9ja1NlcXVlbmNlKHN0YXRlLCBsZXZlbCwgc3RhdGUuZHVtcCwgY29tcGFjdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZUZsb3dTZXF1ZW5jZShzdGF0ZSwgbGV2ZWwsIHN0YXRlLmR1bXApO1xuICAgICAgICBpZiAoZHVwbGljYXRlKSB7XG4gICAgICAgICAgc3RhdGUuZHVtcCA9ICcmcmVmXycgKyBkdXBsaWNhdGVJbmRleCArICcgJyArIHN0YXRlLmR1bXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgICBpZiAoc3RhdGUudGFnICE9PSAnPycpIHtcbiAgICAgICAgd3JpdGVTY2FsYXIoc3RhdGUsIHN0YXRlLmR1bXAsIGxldmVsLCBpc2tleSwgaW5ibG9jayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnW29iamVjdCBVbmRlZmluZWRdJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RhdGUuc2tpcEludmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICAgIHRocm93IG5ldyBleGNlcHRpb24oJ3VuYWNjZXB0YWJsZSBraW5kIG9mIGFuIG9iamVjdCB0byBkdW1wICcgKyB0eXBlKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUudGFnICE9PSBudWxsICYmIHN0YXRlLnRhZyAhPT0gJz8nKSB7XG4gICAgICAvLyBOZWVkIHRvIGVuY29kZSBhbGwgY2hhcmFjdGVycyBleGNlcHQgdGhvc2UgYWxsb3dlZCBieSB0aGUgc3BlYzpcbiAgICAgIC8vXG4gICAgICAvLyBbMzVdIG5zLWRlYy1kaWdpdCAgICA6Oj0gIFsjeDMwLSN4MzldIC8qIDAtOSAqL1xuICAgICAgLy8gWzM2XSBucy1oZXgtZGlnaXQgICAgOjo9ICBucy1kZWMtZGlnaXRcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHwgWyN4NDEtI3g0Nl0gLyogQS1GICovIHwgWyN4NjEtI3g2Nl0gLyogYS1mICovXG4gICAgICAvLyBbMzddIG5zLWFzY2lpLWxldHRlciA6Oj0gIFsjeDQxLSN4NUFdIC8qIEEtWiAqLyB8IFsjeDYxLSN4N0FdIC8qIGEteiAqL1xuICAgICAgLy8gWzM4XSBucy13b3JkLWNoYXIgICAgOjo9ICBucy1kZWMtZGlnaXQgfCBucy1hc2NpaS1sZXR0ZXIgfCDigJwt4oCdXG4gICAgICAvLyBbMzldIG5zLXVyaS1jaGFyICAgICA6Oj0gIOKAnCXigJ0gbnMtaGV4LWRpZ2l0IG5zLWhleC1kaWdpdCB8IG5zLXdvcmQtY2hhciB8IOKAnCPigJ1cbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHwg4oCcO+KAnSB8IOKAnC/igJ0gfCDigJw/4oCdIHwg4oCcOuKAnSB8IOKAnEDigJ0gfCDigJwm4oCdIHwg4oCcPeKAnSB8IOKAnCvigJ0gfCDigJwk4oCdIHwg4oCcLOKAnVxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfCDigJxf4oCdIHwg4oCcLuKAnSB8IOKAnCHigJ0gfCDigJx+4oCdIHwg4oCcKuKAnSB8IOKAnCfigJ0gfCDigJwo4oCdIHwg4oCcKeKAnSB8IOKAnFvigJ0gfCDigJxd4oCdXG4gICAgICAvL1xuICAgICAgLy8gQWxzbyBuZWVkIHRvIGVuY29kZSAnIScgYmVjYXVzZSBpdCBoYXMgc3BlY2lhbCBtZWFuaW5nIChlbmQgb2YgdGFnIHByZWZpeCkuXG4gICAgICAvL1xuICAgICAgdGFnU3RyID0gZW5jb2RlVVJJKFxuICAgICAgICBzdGF0ZS50YWdbMF0gPT09ICchJyA/IHN0YXRlLnRhZy5zbGljZSgxKSA6IHN0YXRlLnRhZ1xuICAgICAgKS5yZXBsYWNlKC8hL2csICclMjEnKTtcblxuICAgICAgaWYgKHN0YXRlLnRhZ1swXSA9PT0gJyEnKSB7XG4gICAgICAgIHRhZ1N0ciA9ICchJyArIHRhZ1N0cjtcbiAgICAgIH0gZWxzZSBpZiAodGFnU3RyLnNsaWNlKDAsIDE4KSA9PT0gJ3RhZzp5YW1sLm9yZywyMDAyOicpIHtcbiAgICAgICAgdGFnU3RyID0gJyEhJyArIHRhZ1N0ci5zbGljZSgxOCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWdTdHIgPSAnITwnICsgdGFnU3RyICsgJz4nO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5kdW1wID0gdGFnU3RyICsgJyAnICsgc3RhdGUuZHVtcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0RHVwbGljYXRlUmVmZXJlbmNlcyhvYmplY3QsIHN0YXRlKSB7XG4gIHZhciBvYmplY3RzID0gW10sXG4gICAgICBkdXBsaWNhdGVzSW5kZXhlcyA9IFtdLFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGg7XG5cbiAgaW5zcGVjdE5vZGUob2JqZWN0LCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcyk7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGR1cGxpY2F0ZXNJbmRleGVzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBzdGF0ZS5kdXBsaWNhdGVzLnB1c2gob2JqZWN0c1tkdXBsaWNhdGVzSW5kZXhlc1tpbmRleF1dKTtcbiAgfVxuICBzdGF0ZS51c2VkRHVwbGljYXRlcyA9IG5ldyBBcnJheShsZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBpbnNwZWN0Tm9kZShvYmplY3QsIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKSB7XG4gIHZhciBvYmplY3RLZXlMaXN0LFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGg7XG5cbiAgaWYgKG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgIGluZGV4ID0gb2JqZWN0cy5pbmRleE9mKG9iamVjdCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgaWYgKGR1cGxpY2F0ZXNJbmRleGVzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBkdXBsaWNhdGVzSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0cy5wdXNoKG9iamVjdCk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgICAgaW5zcGVjdE5vZGUob2JqZWN0W2luZGV4XSwgb2JqZWN0cywgZHVwbGljYXRlc0luZGV4ZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RLZXlMaXN0ID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICAgICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0S2V5TGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgICAgaW5zcGVjdE5vZGUob2JqZWN0W29iamVjdEtleUxpc3RbaW5kZXhdXSwgb2JqZWN0cywgZHVwbGljYXRlc0luZGV4ZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGR1bXAkMShpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGUob3B0aW9ucyk7XG5cbiAgaWYgKCFzdGF0ZS5ub1JlZnMpIGdldER1cGxpY2F0ZVJlZmVyZW5jZXMoaW5wdXQsIHN0YXRlKTtcblxuICB2YXIgdmFsdWUgPSBpbnB1dDtcblxuICBpZiAoc3RhdGUucmVwbGFjZXIpIHtcbiAgICB2YWx1ZSA9IHN0YXRlLnJlcGxhY2VyLmNhbGwoeyAnJzogdmFsdWUgfSwgJycsIHZhbHVlKTtcbiAgfVxuXG4gIGlmICh3cml0ZU5vZGUoc3RhdGUsIDAsIHZhbHVlLCB0cnVlLCB0cnVlKSkgcmV0dXJuIHN0YXRlLmR1bXAgKyAnXFxuJztcblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBkdW1wXzEgPSBkdW1wJDE7XG5cbnZhciBkdW1wZXIgPSB7XG5cdGR1bXA6IGR1bXBfMVxufTtcblxuZnVuY3Rpb24gcmVuYW1lZChmcm9tLCB0bykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24geWFtbC4nICsgZnJvbSArICcgaXMgcmVtb3ZlZCBpbiBqcy15YW1sIDQuICcgK1xuICAgICAgJ1VzZSB5YW1sLicgKyB0byArICcgaW5zdGVhZCwgd2hpY2ggaXMgbm93IHNhZmUgYnkgZGVmYXVsdC4nKTtcbiAgfTtcbn1cblxuXG52YXIgVHlwZSAgICAgICAgICAgICAgICA9IHR5cGU7XG52YXIgU2NoZW1hICAgICAgICAgICAgICA9IHNjaGVtYTtcbnZhciBGQUlMU0FGRV9TQ0hFTUEgICAgID0gZmFpbHNhZmU7XG52YXIgSlNPTl9TQ0hFTUEgICAgICAgICA9IGpzb247XG52YXIgQ09SRV9TQ0hFTUEgICAgICAgICA9IGNvcmU7XG52YXIgREVGQVVMVF9TQ0hFTUEgICAgICA9IF9kZWZhdWx0O1xudmFyIGxvYWQgICAgICAgICAgICAgICAgPSBsb2FkZXIubG9hZDtcbnZhciBsb2FkQWxsICAgICAgICAgICAgID0gbG9hZGVyLmxvYWRBbGw7XG52YXIgZHVtcCAgICAgICAgICAgICAgICA9IGR1bXBlci5kdW1wO1xudmFyIFlBTUxFeGNlcHRpb24gICAgICAgPSBleGNlcHRpb247XG5cbi8vIFJlLWV4cG9ydCBhbGwgdHlwZXMgaW4gY2FzZSB1c2VyIHdhbnRzIHRvIGNyZWF0ZSBjdXN0b20gc2NoZW1hXG52YXIgdHlwZXMgPSB7XG4gIGJpbmFyeTogICAgYmluYXJ5LFxuICBmbG9hdDogICAgIGZsb2F0LFxuICBtYXA6ICAgICAgIG1hcCxcbiAgbnVsbDogICAgICBfbnVsbCxcbiAgcGFpcnM6ICAgICBwYWlycyxcbiAgc2V0OiAgICAgICBzZXQsXG4gIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICBib29sOiAgICAgIGJvb2wsXG4gIGludDogICAgICAgaW50LFxuICBtZXJnZTogICAgIG1lcmdlLFxuICBvbWFwOiAgICAgIG9tYXAsXG4gIHNlcTogICAgICAgc2VxLFxuICBzdHI6ICAgICAgIHN0clxufTtcblxuLy8gUmVtb3ZlZCBmdW5jdGlvbnMgZnJvbSBKUy1ZQU1MIDMuMC54XG52YXIgc2FmZUxvYWQgICAgICAgICAgICA9IHJlbmFtZWQoJ3NhZmVMb2FkJywgJ2xvYWQnKTtcbnZhciBzYWZlTG9hZEFsbCAgICAgICAgID0gcmVuYW1lZCgnc2FmZUxvYWRBbGwnLCAnbG9hZEFsbCcpO1xudmFyIHNhZmVEdW1wICAgICAgICAgICAgPSByZW5hbWVkKCdzYWZlRHVtcCcsICdkdW1wJyk7XG5cbnZhciBqc1lhbWwgPSB7XG5cdFR5cGU6IFR5cGUsXG5cdFNjaGVtYTogU2NoZW1hLFxuXHRGQUlMU0FGRV9TQ0hFTUE6IEZBSUxTQUZFX1NDSEVNQSxcblx0SlNPTl9TQ0hFTUE6IEpTT05fU0NIRU1BLFxuXHRDT1JFX1NDSEVNQTogQ09SRV9TQ0hFTUEsXG5cdERFRkFVTFRfU0NIRU1BOiBERUZBVUxUX1NDSEVNQSxcblx0bG9hZDogbG9hZCxcblx0bG9hZEFsbDogbG9hZEFsbCxcblx0ZHVtcDogZHVtcCxcblx0WUFNTEV4Y2VwdGlvbjogWUFNTEV4Y2VwdGlvbixcblx0dHlwZXM6IHR5cGVzLFxuXHRzYWZlTG9hZDogc2FmZUxvYWQsXG5cdHNhZmVMb2FkQWxsOiBzYWZlTG9hZEFsbCxcblx0c2FmZUR1bXA6IHNhZmVEdW1wXG59O1xuXG5leHBvcnQgZGVmYXVsdCBqc1lhbWw7XG5leHBvcnQgeyBDT1JFX1NDSEVNQSwgREVGQVVMVF9TQ0hFTUEsIEZBSUxTQUZFX1NDSEVNQSwgSlNPTl9TQ0hFTUEsIFNjaGVtYSwgVHlwZSwgWUFNTEV4Y2VwdGlvbiwgZHVtcCwgbG9hZCwgbG9hZEFsbCwgc2FmZUR1bXAsIHNhZmVMb2FkLCBzYWZlTG9hZEFsbCwgdHlwZXMgfTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VEaXNwYXRjaCIsImNsZWFuVXBBY3Rpb24iLCJ1c2VDbGVhbnVwIiwic3RhdGVTZWxlY3RvciIsImRpc3BhdGNoIiwic2VsZWN0b3JSZWYiLCJjdXJyZW50IiwiY3NzIiwiUmVhY3QiLCJ1c2VBc3luYyIsIkFsZXJ0IiwiTGlua0J1dHRvbiIsIkxvYWRpbmdQbGFjZWhvbGRlciIsInVzZVN0eWxlczIiLCJ3aXRoRXJyb3JCb3VuZGFyeSIsIlBhZ2UiLCJBbGVydFJ1bGVGb3JtIiwidXNlSXNSdWxlRWRpdGFibGUiLCJ1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciIsImZldGNoQWxsUHJvbUJ1aWxkSW5mb0FjdGlvbiIsImZldGNoRWRpdGFibGVSdWxlQWN0aW9uIiwidXNlUnVsZXNBY2Nlc3MiLCJydWxlSWQiLCJFeGlzdGluZ1J1bGVFZGl0b3IiLCJpZGVudGlmaWVyIiwic3RhdGUiLCJ1bmlmaWVkQWxlcnRpbmciLCJydWxlRm9ybSIsImV4aXN0aW5nUnVsZSIsImxvYWRpbmciLCJyZXN1bHQiLCJlcnJvciIsImRpc3BhdGNoZWQiLCJpc0VkaXRhYmxlIiwicnVsZUlkZW50aWZpZXJUb1J1bGVTb3VyY2VOYW1lIiwicnVsZSIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJSdWxlRWRpdG9yIiwibWF0Y2giLCJpZCIsInBhcmFtcyIsInRyeVBhcnNlIiwiY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzIiwiY2FuQ3JlYXRlQ2xvdWRSdWxlcyIsImNhbkVkaXRSdWxlcyIsInJ1bGVTb3VyY2VOYW1lIiwiQWxlcnRXYXJuaW5nIiwidGl0bGUiLCJjaGlsZHJlbiIsIndhcm5pbmdTdHlsZXMiLCJ3YXJuaW5nIiwidGhlbWUiLCJzcGFjaW5nIiwic3R5bGUiLCJvZiIsImNhdGNoRXJyb3IiLCJtYXAiLCJzaGFyZSIsImRhdGFGcmFtZUZyb21KU09OIiwiZ2V0RGVmYXVsdFRpbWVSYW5nZSIsIkxvYWRpbmdTdGF0ZSIsIndpdGhMb2FkaW5nSW5kaWNhdG9yIiwiZ2V0QmFja2VuZFNydiIsInRvRGF0YVF1ZXJ5RXJyb3IiLCJpc0Nsb3VkUHJldmlld1JlcXVlc3QiLCJpc0dyYWZhbmFQcmV2aWV3UmVxdWVzdCIsIlJ1bGVGb3JtVHlwZSIsInByZXZpZXdBbGVydFJ1bGUiLCJyZXF1ZXN0IiwicHJldmlld0Nsb3VkQWxlcnRSdWxlIiwicHJldmlld0dyYWZhbmFBbGVydFJ1bGUiLCJFcnJvciIsInR5cGUiLCJncmFmYW5hIiwid2hpbGVMb2FkaW5nIiwiY3JlYXRlUmVzcG9uc2UiLCJzb3VyY2UiLCJmZXRjaCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJwaXBlIiwiRG9uZSIsInNlcmllcyIsImluc3RhbmNlcyIsInJ1bGVUeXBlIiwiTG9hZGluZyIsInRpbWVSYW5nZSIsInVzZU1lbW8iLCJjb25maWciLCJSYWRpb0J1dHRvbkdyb3VwIiwiU1RBVCIsIlRBQkxFIiwiVElNRVNFUklFUyIsIlBhbmVsUGx1Z2luc0J1dHRvbkdyb3VwIiwicHJvcHMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwic2l6ZSIsInBhbmVscyIsImdldFN1cHBvcnRlZFBhbmVscyIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsInBhbmVsIiwiaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbiIsInB1c2giLCJsYWJlbCIsIm5hbWUiLCJpbWdVcmwiLCJpbmZvIiwibG9nb3MiLCJzbWFsbCIsInVzZVN0YXRlIiwiRm9ybVByb3ZpZGVyIiwidXNlRm9ybSIsIkxpbmsiLCJCdXR0b24iLCJDb25maXJtTW9kYWwiLCJDdXN0b21TY3JvbGxiYXIiLCJQYWdlVG9vbGJhciIsIlNwaW5uZXIiLCJ1c2VBcHBOb3RpZmljYXRpb24iLCJ1c2VRdWVyeVBhcmFtcyIsImRlbGV0ZVJ1bGVBY3Rpb24iLCJzYXZlUnVsZUZvcm1BY3Rpb24iLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJnZXREZWZhdWx0Rm9ybVZhbHVlcyIsImdldERlZmF1bHRRdWVyaWVzIiwicnVsZXJSdWxlVG9Gb3JtVmFsdWVzIiwiQ2xvdWRFdmFsdWF0aW9uQmVoYXZpb3IiLCJEZXRhaWxzU3RlcCIsIkdyYWZhbmFFdmFsdWF0aW9uQmVoYXZpb3IiLCJOb3RpZmljYXRpb25zU3RlcCIsIlJ1bGVJbnNwZWN0b3IiLCJRdWVyeUFuZEFsZXJ0Q29uZGl0aW9uU3RlcCIsImV4aXN0aW5nIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwibm90aWZ5QXBwIiwicXVlcnlQYXJhbXMiLCJzaG93RWRpdFlhbWwiLCJzZXRTaG93RWRpdFlhbWwiLCJyZXR1cm5UbyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImRlZmF1bHRWYWx1ZXMiLCJxdWVyaWVzIiwiSlNPTiIsInBhcnNlIiwiZm9ybUFQSSIsIm1vZGUiLCJzaG91bGRGb2N1c0Vycm9yIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJkYXRhU291cmNlTmFtZSIsInNob3dTdGVwMiIsIkJvb2xlYW4iLCJzdWJtaXRTdGF0ZSIsInNhdmVSdWxlIiwic3VibWl0IiwiZXhpdE9uU2F2ZSIsImFubm90YXRpb25zIiwia2V5IiwidHJpbSIsImZpbHRlciIsImxhYmVscyIsInJlZGlyZWN0T25TYXZlIiwiZGVsZXRlUnVsZSIsImZyb21SdWxlclJ1bGUiLCJuYW1lc3BhY2UiLCJncm91cCIsIm5hdmlnYXRlVG8iLCJvbkludmFsaWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiaXNDb3J0ZXhMb2tpT3JSZWNvcmRpbmdSdWxlIiwiYnV0dG9uU3Bpbm5lciIsImNvbnRlbnRPdXRlciIsImNvbnRlbnRJbm5lciIsImZvbGRlciIsImNsb3VkQWxlcnRpbmciLCJjbG91ZFJlY29yZGluZyIsImNvbG9ycyIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwiYm9yZGVyIiwid2VhayIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiZmxleFJvdyIsIkFubm90YXRpb24iLCJhbm5vdGF0aW9uTGFiZWxzIiwiU2VsZWN0V2l0aEFkZCIsIkFubm90YXRpb25LZXlJbnB1dCIsImV4aXN0aW5nS2V5cyIsImFyaWFMYWJlbCIsInJlc3QiLCJhbm5vdGF0aW9uT3B0aW9ucyIsImluY2x1ZGVzIiwiY3giLCJ1c2VDYWxsYmFjayIsInVzZUZvcm1Db250ZXh0IiwiRmllbGQiLCJGaWVsZEFycmF5IiwiSW5wdXQiLCJJbnB1dENvbnRyb2wiLCJMYWJlbCIsIlRleHRBcmVhIiwidXNlU3R5bGVzIiwiQW5ub3RhdGlvbnNGaWVsZCIsImNvbnRyb2wiLCJyZWdpc3RlciIsImZvcm1TdGF0ZSIsImVycm9ycyIsImluZGV4IiwiXyIsImlkeCIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsImZsZXhDb2x1bW4iLCJmaWVsZCIsImlzVXJsIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJlbmRzV2l0aCIsIlZhbHVlSW5wdXRDb21wb25lbnQiLCJyZXF1aXJlZCIsImZsZXhSb3dJdGVtTWFyZ2luIiwiYW5ub3RhdGlvblZhbHVlSW5wdXQiLCJ0ZXh0YXJlYSIsImFkZEFubm90YXRpb25zQnV0dG9uIiwieHMiLCJTZWxlY3QiLCJ0aW1lT3B0aW9ucyIsIlByZXZpZXdSdWxlIiwiUnVsZUVkaXRvclNlY3Rpb24iLCJmb3JUaW1lIiwiaW5saW5lRmllbGQiLCJwYXR0ZXJuIiwidGltZVVuaXQiLCJEYXRhU291cmNlUGlja2VyIiwidXNlUnVsZXNTb3VyY2VzV2l0aFJ1bGVyIiwiQ2xvdWRSdWxlc1NvdXJjZVBpY2tlciIsInJ1bGVzU291cmNlc1dpdGhSdWxlciIsImRhdGFTb3VyY2VGaWx0ZXIiLCJkcyIsImZpbmQiLCJsYXN0IiwiQ2FyZCIsIlJhZGlvQnV0dG9uTGlzdCIsIkV4cHJlc3Npb25EYXRhc291cmNlVUlEIiwiQ29uZGl0aW9uRmllbGQiLCJzZXRWYWx1ZSIsImNvbmRpdGlvbiIsImV4cHJlc3Npb25zIiwicXVlcnkiLCJkYXRhc291cmNlVWlkIiwib3B0aW9ucyIsInEiLCJyZWZJZCIsImxhc3RFeHByZXNzaW9uIiwic2hvdWxkVmFsaWRhdGUiLCJjb25kaXRpb25FeGlzdHMiLCJsZW5ndGgiLCJjb250YWluZXIiLCJicmVha3BvaW50cyIsInNtIiwiY2xhc3NOYW1lcyIsIlN0YWNrIiwiVG9vbHRpcCIsIkljb24iLCJjb250ZXh0U3J2IiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsIkdyb3VwQW5kTmFtZXNwYWNlRmllbGRzIiwiUnVsZUZvbGRlclBpY2tlciIsImNoZWNrRm9yUGF0aFNlcGFyYXRvciIsInJlY29yZGluZ1J1bGVOYW1lVmFsaWRhdGlvblBhdHRlcm4iLCJpbml0aWFsRm9sZGVyIiwicnVsZUZvcm1UeXBlIiwiZm9sZGVyRmlsdGVyIiwidXNlUnVsZUZvbGRlckZpbHRlciIsImZvcm1JbnB1dCIsInZhbGlkYXRlIiwicGF0aFNlcGFyYXRvciIsImFsaWduQmFzZWxpbmUiLCJoYXNQZXJtaXNzaW9uIiwiRm9sZGVyc0NyZWF0ZSIsImV4aXN0aW5nUnVsZUZvcm0iLCJpc1NlYXJjaEhpdEF2YWlsYWJsZSIsImhpdCIsInJiYWNEaXNhYmxlZEZhbGxiYWNrIiwiaGFzRWRpdFBlcm1pc3Npb25JbkZvbGRlcnMiLCJjYW5DcmVhdGVSdWxlSW5Gb2xkZXIiLCJoYXNBY2Nlc3NJbk1ldGFkYXRhIiwiQWxlcnRpbmdSdWxlQ3JlYXRlIiwiY2FuVXBkYXRlSW5DdXJyZW50Rm9sZGVyIiwiZm9sZGVySWQiLCJBbGVydGluZ1J1bGVVcGRhdGUiLCJmb2xkZXJIaXRzIiwibm9vcCIsIkNvcmVBcHAiLCJnZXREYXRhU291cmNlU3J2IiwiRXhwcmVzc2lvbkVkaXRvciIsIm1hcFRvVmFsdWUiLCJtYXBUb1F1ZXJ5IiwidXNlUXVlcnlNYXBwZXJzIiwic2V0UXVlcnkiLCJoaWRlIiwiZGF0YVNvdXJjZSIsImdldCIsIm9uQ2hhbmdlUXVlcnkiLCJjb21wb25lbnRzIiwiUXVlcnlFZGl0b3IiLCJlcnJvck1lc3NhZ2UiLCJDbG91ZEFsZXJ0aW5nIiwic2V0dGluZ3MiLCJnZXRJbnN0YW5jZVNldHRpbmdzIiwiZXhwciIsIkdyYWZhbmFBbGVydFN0YXRlRGVjaXNpb24iLCJBbGVydGluZyIsIk5vRGF0YSIsIk9LIiwiR3JhZmFuYUFsZXJ0U3RhdGVQaWNrZXIiLCJpbmNsdWRlTm9EYXRhIiwiaW5jbHVkZUVycm9yIiwib3B0cyIsIm9wdCIsImlzRW1wdHkiLCJkdXJhdGlvblRvTWlsbGlzZWNvbmRzIiwicGFyc2VEdXJhdGlvbiIsIkdyYWZhbmFDb25kaXRpb25FdmFsV2FybmluZyIsImV2YWx1YXRlRm9yIiwiZXZhbHVhdGVFdmVyeSIsImR1cmF0aW9uRm9yIiwiZHVyYXRpb25FdmVyeSIsIm1pbGxpc0ZvciIsIm1pbGxpc0V2ZXJ5IiwiSW5saW5lTGFiZWwiLCJwb3NpdGl2ZUR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4iLCJkdXJhdGlvblZhbGlkYXRpb25QYXR0ZXJuIiwiQ29sbGFwc2VUb2dnbGUiLCJNSU5fVElNRV9SQU5HRV9TVEVQX1MiLCJmb3JWYWxpZGF0aW9uT3B0aW9ucyIsImV2YWx1YXRlRXZlcnlWYWxpZGF0aW9uT3B0aW9ucyIsImR1cmF0aW9uIiwia2V5cyIsImRpZmYiLCJzaG93RXJyb3JIYW5kbGluZyIsInNldFNob3dFcnJvckhhbmRsaW5nIiwiZXZhbHVhdGVFdmVyeUlkIiwiZXZhbHVhdGVGb3JJZCIsImNvbGxhcHNlZCIsImNvbGxhcHNlVG9nZ2xlIiwiZmV0Y2hSdWxlclJ1bGVzQWN0aW9uIiwicnVsZXNTb3VyY2VOYW1lIiwiZ2V0U3R5bGUiLCJjdXN0b21Hcm91cCIsInNldEN1c3RvbUdyb3VwIiwicnVsZXJSZXF1ZXN0cyIsInJ1bGVyUnVsZXMiLCJydWxlc0NvbmZpZyIsIm5hbWVzcGFjZU9wdGlvbnMiLCJncm91cE9wdGlvbnMiLCJpbnB1dCIsImN1c3RvbSIsIkxhYmVsc0ZpZWxkIiwiY2xhc3NOYW1lIiwid3JhcHBlciIsImNlbnRlckFsaWduUm93IiwibGFiZWxJbnB1dCIsImVxdWFsU2lnbiIsImRlbGV0ZUxhYmVsQnV0dG9uIiwiYWRkTGFiZWxCdXR0b24iLCJ4bCIsInVzZVRoZW1lMiIsImhpZGVGbG93Q2hhcnQiLCJzZXRIaWRlRmxvd0NoYXJ0IiwiaGlkZUJ1dHRvbiIsImNvbnRlbnRXcmFwcGVyIiwiZmxvd0NoYXJ0IiwidG9Mb3dlckNhc2UiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImNhcmQiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwidXNlTW91bnRlZFN0YXRlIiwidGFrZVdoaWxlIiwiZGF0ZVRpbWVGb3JtYXRJU08iLCJIb3Jpem9udGFsR3JvdXAiLCJ1c2VBbGVydFF1ZXJpZXNTdGF0dXMiLCJQcmV2aWV3UnVsZVJlc3VsdCIsInByZXZpZXciLCJvblByZXZpZXciLCJ1c2VQcmV2aWV3IiwiYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUiLCJpc1ByZXZpZXdBdmFpbGFibGUiLCJzZXRQcmV2aWV3IiwiZ2V0VmFsdWVzIiwiaXNNb3VudGVkIiwiY3JlYXRlUHJldmlld1JlcXVlc3QiLCJyZXNwb25zZSIsImlzQ29tcGxldGVkIiwic3Vic2NyaWJlIiwiZXhwcmVzc2lvbiIsImdyYWZhbmFfY29uZGl0aW9uIiwibm93IiwiRGF0ZSIsInh4bCIsIkF1dG9TaXplciIsIkZpZWxkTWF0Y2hlcklEIiwiUGFuZWxSZW5kZXJlciIsIlRhYmxlQ2VsbERpc3BsYXlNb2RlIiwibWVzc2FnZUZyb21FcnJvciIsImZpZWxkQ29uZmlnIiwiZGVmYXVsdHMiLCJvdmVycmlkZXMiLCJtYXRjaGVyIiwiYnlOYW1lIiwicHJvcGVydGllcyIsIkpTT05WaWV3IiwidGFibGUiLCJ3aWR0aCIsImhlaWdodCIsIm1lZGl1bSIsIlB1cmVDb21wb25lbnQiLCJnZXREZWZhdWx0UmVsYXRpdmVUaW1lUmFuZ2UiLCJzZWxlY3RvcnMiLCJzdHlsZXNGYWN0b3J5IiwiZ2V0TmV4dFJlZklkQ2hhciIsImV4cHJlc3Npb25EYXRhc291cmNlIiwiaXNFeHByZXNzaW9uUXVlcnkiLCJFeHByZXNzaW9uUXVlcnlUeXBlIiwiZGVmYXVsdENvbmRpdGlvbiIsImdldERhdGFzb3VyY2VTcnYiLCJBbGVydGluZ1F1ZXJ5UnVubmVyIiwiUXVlcnlSb3dzIiwiY29uc3RydWN0b3IiLCJydW5uZXIiLCJydW4iLCJjYW5jZWwiLCJvbkNoYW5nZVF1ZXJpZXMiLCJhZGRRdWVyeSIsImRlZmF1bHREYXRhU291cmNlIiwidWlkIiwibW9kZWwiLCJkYXRhc291cmNlIiwibmV3UXVlcnkiLCJjbGFzc2ljIiwiY29uZGl0aW9ucyIsInBhbmVsRGF0YUJ5UmVmSWQiLCJjb21wb25lbnREaWRNb3VudCIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkZXN0cm95IiwiaXNSdW5uaW5nIiwiZCIsInJlbmRlclJ1blF1ZXJ5QnV0dG9uIiwib25DYW5jZWxRdWVyaWVzIiwib25SdW5RdWVyaWVzIiwicmVuZGVyIiwidGhlbWUyIiwib25EdXBsaWNhdGVRdWVyeSIsIm9uTmV3QWxlcnRpbmdRdWVyeSIsIlF1ZXJ5VGFiIiwiZXhwcmVzc2lvbnNFbmFibGVkIiwib25OZXdFeHByZXNzaW9uUXVlcnkiLCJxdWVyeVRvQWRkIiwicXVlcnlUeXBlIiwicmVsYXRpdmVUaW1lUmFuZ2UiLCJkZWZhdWx0VGltZVJhbmdlIiwicnVuV3JhcHBlciIsImVkaXRvcldyYXBwZXIiLCJvbWl0IiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJvcHBhYmxlIiwiVGhyZXNob2xkc01vZGUiLCJRdWVyeU9wZXJhdGlvblJvdyIsIkVtcHR5UXVlcnlXcmFwcGVyIiwiUXVlcnlXcmFwcGVyIiwicXVlcmllc1dpdGhVcGRhdGVkUmVmZXJlbmNlcyIsIm9uUXVlcmllc0NoYW5nZSIsIml0ZW0iLCJpdGVtSW5kZXgiLCJ0aHJlc2hvbGRzIiwicmVmZXJlbmNlZFJlZklkIiwiY29uZGl0aW9uSW5kZXgiLCJldmFsdWF0b3IiLCJwYXJzZUZsb2F0Iiwic3RlcHMiLCJ0b1ByZWNpc2lvbiIsInVwZGF0ZWRRdWVyaWVzIiwiY29weU1vZGVsIiwicHJldmlvdXNSZWZJZCIsIm5ld1JlZklkIiwiZGVzdGluYXRpb24iLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJ1cGRhdGUiLCJBcnJheSIsImZyb20iLCJyZW1vdmVkIiwic3BsaWNlIiwicmVjb3JkIiwiaXNBcnJheSIsImZvckVhY2giLCJ0aHJlc2hvbGQiLCJBYnNvbHV0ZSIsIkluZmluaXR5IiwiY29sb3IiLCJzdWNjZXNzIiwibWFpbiIsImRhdGFQZXJRdWVyeSIsInRocmVzaG9sZEJ5UmVmSWQiLCJnZXRUaHJlc2hvbGRzRm9yUXVlcmllcyIsIm9uRHJhZ0VuZCIsInByb3ZpZGVkIiwiaW5uZXJSZWYiLCJkcm9wcGFibGVQcm9wcyIsIk5vdFN0YXJ0ZWQiLCJkc1NldHRpbmdzIiwiZ2V0RGF0YVNvdXJjZVNldHRpbmdzIiwib25DaGFuZ2VEYXRhU291cmNlIiwib25SZW1vdmVRdWVyeSIsIm9uQ2hhbmdlVGltZVJhbmdlIiwib25DaGFuZ2VUaHJlc2hvbGQiLCJwbGFjZWhvbGRlciIsIkRhdGFzb3VyY2VOb3RGb3VuZCIsIm9uVXBkYXRlRGF0YXNvdXJjZSIsInNob3dEZXRhaWxzIiwic2V0U2hvd0RldGFpbHMiLCJ0b2dnbGVEZXRhaWxzIiwic2hvdyIsImhhbmRsZVVwZGF0ZURhdGFzb3VyY2UiLCJzdHJpbmdpZnkiLCJjbG9uZURlZXAiLCJSZWxhdGl2ZVRpbWVSYW5nZVBpY2tlciIsIlF1ZXJ5RWRpdG9yUm93IiwiVml6V3JhcHBlciIsImlzRXhwcmVzc2lvbiIsInBsdWdpbklkIiwiY2hhbmdlUGx1Z2luSWQiLCJyZW5kZXJUaW1lUGlja2VyIiwicmFuZ2UiLCJVbmlmaWVkQWxlcnRpbmciLCJGaWVsZFNldCIsInN0ZXBObyIsImRlc2NyaXB0aW9uIiwicGFyZW50IiwiY29udGVudCIsImZpZWxkc2V0IiwibWF4Q29udHJhc3QiLCJjYW52YXMiLCJ0eXBvZ3JhcGh5IiwibGciLCJGb2xkZXJQaWNrZXIiLCJQZXJtaXNzaW9uTGV2ZWxTdHJpbmciLCJWaWV3IiwiZHVtcCIsImxvYWQiLCJDb2RlRWRpdG9yIiwiRHJhd2VyIiwiVGFiIiwiVGFic0JhciIsInRhYnMiLCJvbkNsb3NlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiZHJhd2VyU3R5bGVzIiwib25BcHBseSIsImZvcm1WYWx1ZXMiLCJzdWJ0aXRsZSIsIlJ1bGVJbnNwZWN0b3JTdWJ0aXRsZSIsInRhYiIsIkluc3BlY3RvcllhbWxUYWIiLCJvblN1Ym1pdCIsInlhbWxUYWJTdHlsZSIsImFsZXJ0UnVsZUFzWWFtbCIsInNldEFsZXJ0UnVsZUFzWWFtbCIsImFwcGx5QnV0dG9uIiwibWluaW1hcCIsImVuYWJsZWQiLCJvbkN1c3RvbUNoYW5nZSIsImRpc2FibGVkIiwiYWRkTGFiZWwiLCJpc0N1c3RvbSIsInNldElzQ3VzdG9tIiwiX29wdGlvbnMiLCJ0YXJnZXQiLCJ2YWwiLCJHcmFwaFRyZXNob2xkc1N0eWxlTW9kZSIsIlBhbmVsQ29udGV4dFByb3ZpZGVyIiwiYXBwRXZlbnRzIiwidXNlVml6SGVpZ2h0IiwiY3VycmVudFBhbmVsIiwiY2hhbmdlUGFuZWwiLCJvblRocmVzaG9sZHNDaGFuZ2UiLCJzZXRPcHRpb25zIiwiZnJhbWVJbmRleCIsInNob3dIZWFkZXIiLCJ2aXpIZWlnaHQiLCJzZXRGaWVsZENvbmZpZyIsImRlZmF1bHRGaWVsZENvbmZpZyIsInVuaXQiLCJkZWZhdWx0VW5pdCIsInRocmVzaG9sZHNTdHlsZSIsIkxpbmUiLCJjb250ZXh0IiwiZXZlbnRCdXMiLCJjYW5FZGl0VGhyZXNob2xkcyIsImJ1dHRvbkdyb3VwIiwidmlzSGVpZ2h0IiwiZ3JpZFNpemUiLCJSdWxlVHlwZVBpY2tlciIsIkFsZXJ0VHlwZSIsImVkaXRpbmdFeGlzdGluZ1J1bGUiLCJlbmFibGVkUnVsZVR5cGVzIiwiZGVmYXVsdFJ1bGVUeXBlIiwiZ2V0QXZhaWxhYmxlUnVsZVR5cGVzIiwiaGFzQWNjZXNzIiwiQWxlcnRpbmdSdWxlRXh0ZXJuYWxXcml0ZSIsImlzRWRpdG9yIiwiUXVlcnkiLCJpc0dyYWZhbmFNYW5hZ2VkVHlwZSIsImlzQ2xvdWRBbGVydFJ1bGVUeXBlIiwiaXNSZWNvcmRpbmdSdWxlVHlwZSIsInNob3dDbG91ZEV4cHJlc3Npb25FZGl0b3IiLCJEaXNhYmxlZFRvb2x0aXAiLCJ2aXNpYmxlIiwiUnVsZVR5cGUiLCJHcmFmYW5hTWFuYWdlZFJ1bGVUeXBlIiwic2VsZWN0ZWQiLCJvbkNsaWNrIiwiTWltaXJGbGF2b3JlZFR5cGUiLCJSZWNvcmRpbmdSdWxlVHlwZSIsImltYWdlIiwiY2FyZFN0eWxlcyIsImVuYWJsZWRUeXBlcyIsImhhc0xvdGV4RGF0YXNvdXJjZXMiLCJtZXRhIiwiaXNNYXRoRXhwcmVzc2lvbiIsImlzUmVkdWNlRXhwcmVzc2lvbiIsImlzUmVzYW1wbGVFeHByZXNzaW9uIiwiaXNDbGFzc2ljRXhwcmVzc2lvbiIsInVwZGF0ZU1hdGhFeHByZXNzaW9uUmVmcyIsImlzUmVmZXJlbmNpbmciLCJwYXJhbSIsIm9sZEV4cHJlc3Npb24iLCJSZWdFeHAiLCJuZXdFeHByZXNzaW9uIiwicmVwbGFjZSIsImNvbnRhaW5zUGF0aFNlcGFyYXRvciIsImV2ZXJ5IiwiZmV0Y2hGb2xkZXJJZk5vdEZldGNoZWRBY3Rpb24iLCJ1c2VGb2xkZXIiLCJmb2xkZXJSZXF1ZXN0cyIsImZvbGRlcnMiLCJnZXRSdWxlc1Blcm1pc3Npb25zIiwiaXNHcmFmYW5hUnVsZXJSdWxlIiwiZGF0YVNvdXJjZXMiLCJmb2xkZXJVSUQiLCJncmFmYW5hX2FsZXJ0IiwibmFtZXNwYWNlX3VpZCIsInJ1bGVQZXJtaXNzaW9uIiwiaXNSZW1vdmFibGUiLCJjYW5FZGl0R3JhZmFuYVJ1bGVzIiwiY2FuU2F2ZSIsImNhblJlbW92ZUdyYWZhbmFSdWxlcyIsImRlbGV0ZSIsImlzUnVsZXJBdmFpbGFibGUiLCJydWxlckNvbmZpZyIsImNhbkVkaXRDbG91ZFJ1bGVzIiwiY2FuUmVtb3ZlQ2xvdWRSdWxlcyIsImdldERhdGFTb3VyY2VCeU5hbWUiLCJkYXRhU291cmNlc1dpdGhSdWxlciIsImRzQ29uZmlnIiwiZGF0YUlzRW1wdHkiLCJyb3dIZWlnaHQiLCJ0YWJsZUhlaWdodCIsIlJlcGxheVN1YmplY3QiLCJ2NCIsInV1aWR2NCIsInJhbmdlVXRpbCIsImNhbmNlbE5ldHdvcmtSZXF1ZXN0c09uVW5zdWJzY3JpYmUiLCJzZXRTdHJ1Y3R1cmVSZXZpc2lvbiIsInByZVByb2Nlc3NQYW5lbERhdGEiLCJnZXRUaW1lUmFuZ2VGb3JFeHByZXNzaW9uIiwiYmFja2VuZFNydiIsImRhdGFTb3VyY2VTcnYiLCJzdWJqZWN0IiwibGFzdFJlc3VsdCIsImFzT2JzZXJ2YWJsZSIsImVtcHR5IiwiaW5pdGlhbFN0YXRlIiwibmV4dCIsImZpbHRlclF1ZXJ5Iiwic3Vic2NyaXB0aW9uIiwicnVuUmVxdWVzdCIsIm5leHRSZXN1bHQiLCJhcHBseUNoYW5nZSIsInByZXZpb3VzIiwicHJlUHJvY2Vzc2VkIiwibWFwRXJyb3JUb1BhbmVsRGF0YSIsInVuc3Vic2NyaWJlIiwicmVxdWVzdElzUnVubmluZyIsImNvbXBsZXRlIiwiaW5pdGlhbCIsInJlcXVlc3RJZCIsIm1hcFRvUGFuZWxEYXRhIiwiZGF0YUJ5UXVlcnkiLCJnZXRUaW1lUmFuZ2UiLCJyZWxhdGl2ZSIsInJlbGF0aXZlVG9UaW1lUmFuZ2UiLCJjb25zb2xlIiwid2FybiIsInJlc3VsdHMiLCJlbnRyaWVzIiwiZnJhbWVzIiwicXVlcnlFcnJvciIsImNoYW5nZSIsImdldFJ1bGVzQWNjZXNzIiwiRkFMTF9CQUNLX1RJTUVfUkFOR0UiLCJ0byIsInJlZmVyZW5jZWRSZWZJZHMiLCJnZXRSZWZlcmVuY2VkSWRzIiwiZ2V0VGltZVJhbmdlcyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJnZXRSZWZlcmVuY2VkSWRzRm9yQ2xhc3NpY0NvbmRpdGlvbiIsIm1hdGgiLCJnZXRSZWZlcmVuY2VkSWRzRm9yTWF0aCIsInJlc2FtcGxlIiwiZ2V0UmVmZXJlbmNlZElkc0ZvclJlZHVjZSIsInJlZmVyZW5jZWRSZWZJZHNLZXkiLCJpc0V4cHJlc3Npb25SZWZlcmVuY2UiLCJkYXRhUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9