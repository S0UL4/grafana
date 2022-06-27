"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRedirectToRule"],{

/***/ "./public/app/features/alerting/unified/RedirectToRuleViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectToRuleViewer": () => (/* binding */ RedirectToRuleViewer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_AlertLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _RuleViewerLayout, _Redirect, _Icon;












const pageTitle = 'Alerting / Find rule';
function RedirectToRuleViewer(props) {
  const {
    name,
    sourceName
  } = props.match.params;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    error,
    loading,
    result: rules,
    dispatched
  } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_5__.useCombinedRulesMatching)(name, sourceName);

  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: `Failed to load rules from ${sourceName}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("details", {
          className: styles.errorMessage,
          children: [error.message, _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {})), !!(error !== null && error !== void 0 && error.stack) && error.stack]
        })
      })
    });
  }

  if (loading || !dispatched || !Array.isArray(rules)) {
    return _RuleViewerLayout || (_RuleViewerLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (!name || !sourceName) {
    return _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
      to: "/notfound"
    }));
  }

  const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_6__.getRulesSourceByName)(sourceName);

  if (!rulesSource) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: "Could not view rule",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("details", {
          className: styles.errorMessage,
          children: `Could not find data source with name: ${sourceName}.`
        })
      })
    });
  }

  if (rules.length === 1) {
    const [rule] = rules;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
      to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.createViewLink)(rulesSource, rule, '/alerting/list')
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__.RuleViewerLayout, {
    title: pageTitle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: ["Several rules in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: styles.param,
        children: sourceName
      }), " matched the name", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: styles.param,
        children: name
      }), ", please select the rule you want to view."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.rules,
      children: rules.map((rule, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.createViewLink)(rulesSource, rule, '/alerting/list'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
            children: rule.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            separator: '',
            children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "folder"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: styles.namespace,
              children: `${rule.namespace.name} / ${rule.group.name}`
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Tags, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_AlertLabels__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, {
              labels: rule.labels
            })
          })]
        }, `${rule.name}-${index}`);
      })
    })]
  });
}

function getStyles(theme) {
  return {
    param: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-style: italic;
      color: ${theme.colors.text.secondary};
    `,
    rules: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
    `,
    namespace: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(1)};
    `,
    errorMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      white-space: pre-wrap;
    `
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(RedirectToRuleViewer, {
  style: 'page'
}));

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleViewerLayout": () => (/* binding */ RuleViewerLayout),
/* harmony export */   "RuleViewerLayoutContent": () => (/* binding */ RuleViewerLayoutContent)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function RuleViewerLayout(props) {
  const {
    wrapInContent = true,
    children,
    title
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getPageStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PageToolbar, {
      title: title,
      pageIcon: "bell",
      onGoBack: () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/alerting/list')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.content,
      children: wrapInContent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(RuleViewerLayoutContent, Object.assign({}, props)) : children
    })]
  });
}
function RuleViewerLayoutContent({
  children,
  padding = 2
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getContentStyles(padding));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: styles.wrapper,
    children: children
  });
}

const getPageStyles = theme => {
  return {
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(0, 2, 2)};
      max-width: ${theme.breakpoints.values.xxl}px;
    `
  };
};

const getContentStyles = padding => theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.weak};
      border-radius: ${theme.shape.borderRadius()};
      padding: ${theme.spacing(padding)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useCombinedRule.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCombinedRule": () => (/* binding */ useCombinedRule),
/* harmony export */   "useCombinedRulesMatching": () => (/* binding */ useCombinedRulesMatching)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");









function useCombinedRule(identifier, ruleSourceName) {
  const requestState = useCombinedRulesLoader(ruleSourceName);
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__.useCombinedRuleNamespaces)(ruleSourceName);
  const rule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!identifier || !ruleSourceName || combinedRules.length === 0) {
      return;
    }

    for (const namespace of combinedRules) {
      for (const group of namespace.groups) {
        for (const rule of group.rules) {
          const id = _utils_rule_id__WEBPACK_IMPORTED_MODULE_4__.fromCombinedRule(ruleSourceName, rule);

          if (_utils_rule_id__WEBPACK_IMPORTED_MODULE_4__.equal(id, identifier)) {
            return rule;
          }
        }
      }
    }

    return;
  }, [identifier, ruleSourceName, combinedRules]);
  return Object.assign({}, requestState, {
    result: rule
  });
}
function useCombinedRulesMatching(ruleName, ruleSourceName) {
  const requestState = useCombinedRulesLoader(ruleSourceName);
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__.useCombinedRuleNamespaces)(ruleSourceName);
  const rules = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!ruleName || !ruleSourceName || combinedRules.length === 0) {
      return [];
    }

    const rules = [];

    for (const namespace of combinedRules) {
      for (const group of namespace.groups) {
        for (const rule of group.rules) {
          if (rule.name === ruleName) {
            rules.push(rule);
          }
        }
      }
    }

    return rules;
  }, [ruleName, ruleSourceName, combinedRules]);
  return Object.assign({}, requestState, {
    result: rules
  });
}

function useCombinedRulesLoader(rulesSourceName) {
  var _promRuleRequest$erro;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const promRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.promRules);
  const promRuleRequest = getRequestState(rulesSourceName, promRuleRequests);
  const rulerRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const rulerRuleRequest = getRequestState(rulesSourceName, rulerRuleRequests);
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(async () => {
    if (!rulesSourceName) {
      return;
    }

    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPromAndRulerRulesAction)({
      rulesSourceName
    }));
  }, [dispatch, rulesSourceName]);
  return {
    loading,
    error: ((_promRuleRequest$erro = promRuleRequest.error) !== null && _promRuleRequest$erro !== void 0 ? _promRuleRequest$erro : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isRulerNotSupportedResponse)(rulerRuleRequest)) ? undefined : rulerRuleRequest.error,
    dispatched: promRuleRequest.dispatched && rulerRuleRequest.dispatched
  };
}

function getRequestState(ruleSourceName, slice) {
  if (!ruleSourceName) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
  }

  const state = slice[ruleSourceName];

  if (!state) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
  }

  return state;
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRpbmdSZWRpcmVjdFRvUnVsZS5hNjQ3NTM1YmZlNzc0ZmZhMzY0Yy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsTUFBTWMsU0FBUyxHQUFHLHNCQUFsQjtBQUVPLFNBQVNDLG9CQUFULENBQThCQyxLQUE5QixFQUFvRjtFQUN6RixNQUFNO0lBQUVDLElBQUY7SUFBUUM7RUFBUixJQUF1QkYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLE1BQXpDO0VBQ0EsTUFBTUMsTUFBTSxHQUFHZCx1REFBVSxDQUFDZSxTQUFELENBQXpCO0VBQ0EsTUFBTTtJQUFFQyxLQUFGO0lBQVNDLE9BQVQ7SUFBa0JDLE1BQU0sRUFBRUMsS0FBMUI7SUFBaUNDO0VBQWpDLElBQWdEaEIsZ0ZBQXdCLENBQUNNLElBQUQsRUFBT0MsVUFBUCxDQUE5RTs7RUFFQSxJQUFJSyxLQUFKLEVBQVc7SUFDVCxvQkFDRSx1REFBQyxzRkFBRDtNQUFrQixLQUFLLEVBQUVULFNBQXpCO01BQUEsdUJBQ0UsdURBQUMsOENBQUQ7UUFBTyxLQUFLLEVBQUcsNkJBQTRCSSxVQUFXLEVBQXREO1FBQUEsdUJBQ0U7VUFBUyxTQUFTLEVBQUVHLE1BQU0sQ0FBQ08sWUFBM0I7VUFBQSxXQUNHTCxLQUFLLENBQUNNLE9BRFQsNkJBRUUsZ0VBRkYsR0FHRyxDQUFDLEVBQUNOLEtBQUQsYUFBQ0EsS0FBRCxlQUFDQSxLQUFLLENBQUVPLEtBQVIsQ0FBRCxJQUFrQlAsS0FBSyxDQUFDTyxLQUgzQjtRQUFBO01BREY7SUFERixFQURGO0VBV0Q7O0VBRUQsSUFBSU4sT0FBTyxJQUFJLENBQUNHLFVBQVosSUFBMEIsQ0FBQ0ksS0FBSyxDQUFDQyxPQUFOLENBQWNOLEtBQWQsQ0FBL0IsRUFBcUQ7SUFDbkQsOERBQ0UsdURBQUMsc0ZBQUQ7TUFBa0IsS0FBSyxFQUFFWixTQUF6QjtNQUFBLHVCQUNFLHVE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Q0FBUjtFQUNELENBSitCLENBS2hDOzs7RUFDQTBDLEtBQUssR0FBR0EsS0FBSyxDQUFDYSxPQUFOLENBQWMsUUFBZCxFQUF3QixFQUF4QixDQUFSLENBTmdDLENBT2hDOztFQUNBLE9BQU9iLEtBQUssQ0FBQ2MsS0FBTixDQUFZLEVBQVosRUFBZ0I1QixJQUFoQixHQUF1QjZCLElBQXZCLENBQTRCLEVBQTVCLENBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvUmVkaXJlY3RUb1J1bGVWaWV3ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLXZpZXdlci9SdWxlVmlld2VyTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUNvbWJpbmVkUnVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQ2FyZCwgSWNvbiwgTG9hZGluZ1BsYWNlaG9sZGVyLCB1c2VTdHlsZXMyLCB3aXRoRXJyb3JCb3VuZGFyeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5cbmltcG9ydCB7IEFsZXJ0TGFiZWxzIH0gZnJvbSAnLi9jb21wb25lbnRzL0FsZXJ0TGFiZWxzJztcbmltcG9ydCB7IFJ1bGVWaWV3ZXJMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZS12aWV3ZXIvUnVsZVZpZXdlckxheW91dCc7XG5pbXBvcnQgeyB1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmcgfSBmcm9tICcuL2hvb2tzL3VzZUNvbWJpbmVkUnVsZSc7XG5pbXBvcnQgeyBnZXRSdWxlc1NvdXJjZUJ5TmFtZSB9IGZyb20gJy4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3TGluayB9IGZyb20gJy4vdXRpbHMvbWlzYyc7XG5cbnR5cGUgUmVkaXJlY3RUb1J1bGVWaWV3ZXJQcm9wcyA9IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgbmFtZT86IHN0cmluZzsgc291cmNlTmFtZT86IHN0cmluZyB9PjtcbmNvbnN0IHBhZ2VUaXRsZSA9ICdBbGVydGluZyAvIEZpbmQgcnVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWRpcmVjdFRvUnVsZVZpZXdlcihwcm9wczogUmVkaXJlY3RUb1J1bGVWaWV3ZXJQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgbmFtZSwgc291cmNlTmFtZSB9ID0gcHJvcHMubWF0Y2gucGFyYW1zO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgZXJyb3IsIGxvYWRpbmcsIHJlc3VsdDogcnVsZXMsIGRpc3BhdGNoZWQgfSA9IHVzZUNvbWJpbmVkUnVsZXNNYXRjaGluZyhuYW1lLCBzb3VyY2VOYW1lKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJ1bGVWaWV3ZXJMYXlvdXQgdGl0bGU9e3BhZ2VUaXRsZX0+XG4gICAgICAgIDxBbGVydCB0aXRsZT17YEZhaWxlZCB0byBsb2FkIHJ1bGVzIGZyb20gJHtzb3VyY2VOYW1lfWB9PlxuICAgICAgICAgIDxkZXRhaWxzIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+XG4gICAgICAgICAgICB7ZXJyb3IubWVzc2FnZX1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgeyEhZXJyb3I/LnN0YWNrICYmIGVycm9yLnN0YWNrfVxuICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKGxvYWRpbmcgfHwgIWRpc3BhdGNoZWQgfHwgIUFycmF5LmlzQXJyYXkocnVsZXMpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgICA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nIHJ1bGUuLi5cIiAvPlxuICAgICAgPC9SdWxlVmlld2VyTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICBpZiAoIW5hbWUgfHwgIXNvdXJjZU5hbWUpIHtcbiAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL25vdGZvdW5kXCIgLz47XG4gIH1cblxuICBjb25zdCBydWxlc1NvdXJjZSA9IGdldFJ1bGVzU291cmNlQnlOYW1lKHNvdXJjZU5hbWUpO1xuXG4gIGlmICghcnVsZXNTb3VyY2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJ1bGVWaWV3ZXJMYXlvdXQgdGl0bGU9e3BhZ2VUaXRsZX0+XG4gICAgICAgIDxBbGVydCB0aXRsZT1cIkNvdWxkIG5vdCB2aWV3IHJ1bGVcIj5cbiAgICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PntgQ291bGQgbm90IGZpbmQgZGF0YSBzb3VyY2Ugd2l0aCBuYW1lOiAke3NvdXJjZU5hbWV9LmB9PC9kZXRhaWxzPlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9SdWxlVmlld2VyTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICBpZiAocnVsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgW3J1bGVdID0gcnVsZXM7XG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz17Y3JlYXRlVmlld0xpbmsocnVsZXNTb3VyY2UsIHJ1bGUsICcvYWxlcnRpbmcvbGlzdCcpfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJ1bGVWaWV3ZXJMYXlvdXQgdGl0bGU9e3BhZ2VUaXRsZX0+XG4gICAgICA8ZGl2PlxuICAgICAgICBTZXZlcmFsIHJ1bGVzIGluIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBhcmFtfT57c291cmNlTmFtZX08L3NwYW4+IG1hdGNoZWQgdGhlIG5hbWV7JyAnfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbX0+e25hbWV9PC9zcGFuPiwgcGxlYXNlIHNlbGVjdCB0aGUgcnVsZSB5b3Ugd2FudCB0byB2aWV3LlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJ1bGVzfT5cbiAgICAgICAge3J1bGVzLm1hcCgocnVsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQga2V5PXtgJHtydWxlLm5hbWV9LSR7aW5kZXh9YH0gaHJlZj17Y3JlYXRlVmlld0xpbmsocnVsZXNTb3VyY2UsIHJ1bGUsICcvYWxlcnRpbmcvbGlzdCcpfT5cbiAgICAgICAgICAgICAgPENhcmQuSGVhZGluZz57cnVsZS5uYW1lfTwvQ2FyZC5IZWFkaW5nPlxuICAgICAgICAgICAgICA8Q2FyZC5NZXRhIHNlcGFyYXRvcj17Jyd9PlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJmb2xkZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWVzcGFjZX0+e2Ake3J1bGUubmFtZXNwYWNlLm5hbWV9IC8gJHtydWxlLmdyb3VwLm5hbWV9YH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgICA8Q2FyZC5UYWdzPlxuICAgICAgICAgICAgICAgIDxBbGVydExhYmVscyBsYWJlbHM9e3J1bGUubGFiZWxzfSAvPlxuICAgICAgICAgICAgICA8L0NhcmQuVGFncz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgcGFyYW06IGNzc2BcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgYCxcbiAgICBydWxlczogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIG5hbWVzcGFjZTogY3NzYFxuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBlcnJvck1lc3NhZ2U6IGNzc2BcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBgLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRXJyb3JCb3VuZGFyeShSZWRpcmVjdFRvUnVsZVZpZXdlciwgeyBzdHlsZTogJ3BhZ2UnIH0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUGFnZVRvb2xiYXIsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIHwgUmVhY3QuUmVhY3ROb2RlW107XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHdyYXBJbkNvbnRlbnQ/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVWaWV3ZXJMYXlvdXQocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyB3cmFwSW5Db250ZW50ID0gdHJ1ZSwgY2hpbGRyZW4sIHRpdGxlIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRQYWdlU3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPFBhZ2VUb29sYmFyIHRpdGxlPXt0aXRsZX0gcGFnZUljb249XCJiZWxsXCIgb25Hb0JhY2s9eygpID0+IGxvY2F0aW9uU2VydmljZS5wdXNoKCcvYWxlcnRpbmcvbGlzdCcpfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57d3JhcEluQ29udGVudCA/IDxSdWxlVmlld2VyTGF5b3V0Q29udGVudCB7Li4ucHJvcHN9IC8+IDogY2hpbGRyZW59PC9kaXY+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG50eXBlIENvbnRlbnRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB8IFJlYWN0LlJlYWN0Tm9kZVtdO1xuICBwYWRkaW5nPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVWaWV3ZXJMYXlvdXRDb250ZW50KHsgY2hpbGRyZW4sIHBhZGRpbmcgPSAyIH06IENvbnRlbnRQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0Q29udGVudFN0eWxlcyhwYWRkaW5nKSk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmNvbnN0IGdldFBhZ2VTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygwLCAyLCAyKX07XG4gICAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnh4bH1weDtcbiAgICBgLFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q29udGVudFN0eWxlcyA9IChwYWRkaW5nOiBudW1iZXIpID0+ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXBwZXI6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIud2Vha307XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZyhwYWRkaW5nKX07XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IENvbWJpbmVkUnVsZSwgUnVsZUlkZW50aWZpZXIsIFJ1bGVOYW1lc3BhY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBSdWxlclJ1bGVzQ29uZmlnRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgZmV0Y2hQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbiB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQXN5bmNSZXF1ZXN0TWFwU2xpY2UsIEFzeW5jUmVxdWVzdFN0YXRlLCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgKiBhcyBydWxlSWQgZnJvbSAnLi4vdXRpbHMvcnVsZS1pZCc7XG5pbXBvcnQgeyBpc1J1bGVyTm90U3VwcG9ydGVkUmVzcG9uc2UgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5cbmltcG9ydCB7IHVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMgfSBmcm9tICcuL3VzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbWJpbmVkUnVsZShcbiAgaWRlbnRpZmllcjogUnVsZUlkZW50aWZpZXIgfCB1bmRlZmluZWQsXG4gIHJ1bGVTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IEFzeW5jUmVxdWVzdFN0YXRlPENvbWJpbmVkUnVsZT4ge1xuICBjb25zdCByZXF1ZXN0U3RhdGUgPSB1c2VDb21iaW5lZFJ1bGVzTG9hZGVyKHJ1bGVTb3VyY2VOYW1lKTtcbiAgY29uc3QgY29tYmluZWRSdWxlcyA9IHVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMocnVsZVNvdXJjZU5hbWUpO1xuXG4gIGNvbnN0IHJ1bGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWlkZW50aWZpZXIgfHwgIXJ1bGVTb3VyY2VOYW1lIHx8IGNvbWJpbmVkUnVsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBuYW1lc3BhY2Ugb2YgY29tYmluZWRSdWxlcykge1xuICAgICAgZm9yIChjb25zdCBncm91cCBvZiBuYW1lc3BhY2UuZ3JvdXBzKSB7XG4gICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBncm91cC5ydWxlcykge1xuICAgICAgICAgIGNvbnN0IGlkID0gcnVsZUlkLmZyb21Db21iaW5lZFJ1bGUocnVsZVNvdXJjZU5hbWUsIHJ1bGUpO1xuXG4gICAgICAgICAgaWYgKHJ1bGVJZC5lcXVhbChpZCwgaWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSwgW2lkZW50aWZpZXIsIHJ1bGVTb3VyY2VOYW1lLCBjb21iaW5lZFJ1bGVzXSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZXF1ZXN0U3RhdGUsXG4gICAgcmVzdWx0OiBydWxlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlc01hdGNoaW5nKFxuICBydWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBydWxlU291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiBBc3luY1JlcXVlc3RTdGF0ZTxDb21iaW5lZFJ1bGVbXT4ge1xuICBjb25zdCByZXF1ZXN0U3RhdGUgPSB1c2VDb21iaW5lZFJ1bGVzTG9hZGVyKHJ1bGVTb3VyY2VOYW1lKTtcbiAgY29uc3QgY29tYmluZWRSdWxlcyA9IHVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMocnVsZVNvdXJjZU5hbWUpO1xuXG4gIGNvbnN0IHJ1bGVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFydWxlTmFtZSB8fCAhcnVsZVNvdXJjZU5hbWUgfHwgY29tYmluZWRSdWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlczogQ29tYmluZWRSdWxlW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgbmFtZXNwYWNlIG9mIGNvbWJpbmVkUnVsZXMpIHtcbiAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgbmFtZXNwYWNlLmdyb3Vwcykge1xuICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgZ3JvdXAucnVsZXMpIHtcbiAgICAgICAgICBpZiAocnVsZS5uYW1lID09PSBydWxlTmFtZSkge1xuICAgICAgICAgICAgcnVsZXMucHVzaChydWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH0sIFtydWxlTmFtZSwgcnVsZVNvdXJjZU5hbWUsIGNvbWJpbmVkUnVsZXNdKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnJlcXVlc3RTdGF0ZSxcbiAgICByZXN1bHQ6IHJ1bGVzLFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGVzTG9hZGVyKHJ1bGVzU291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogQXN5bmNSZXF1ZXN0U3RhdGU8dm9pZD4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByb21SdWxlUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb21SdWxlcyk7XG4gIGNvbnN0IHByb21SdWxlUmVxdWVzdCA9IGdldFJlcXVlc3RTdGF0ZShydWxlc1NvdXJjZU5hbWUsIHByb21SdWxlUmVxdWVzdHMpO1xuICBjb25zdCBydWxlclJ1bGVSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG4gIGNvbnN0IHJ1bGVyUnVsZVJlcXVlc3QgPSBnZXRSZXF1ZXN0U3RhdGUocnVsZXNTb3VyY2VOYW1lLCBydWxlclJ1bGVSZXF1ZXN0cyk7XG5cbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFydWxlc1NvdXJjZU5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBkaXNwYXRjaChmZXRjaFByb21BbmRSdWxlclJ1bGVzQWN0aW9uKHsgcnVsZXNTb3VyY2VOYW1lIH0pKTtcbiAgfSwgW2Rpc3BhdGNoLCBydWxlc1NvdXJjZU5hbWVdKTtcblxuICByZXR1cm4ge1xuICAgIGxvYWRpbmcsXG4gICAgZXJyb3I6IHByb21SdWxlUmVxdWVzdC5lcnJvciA/PyBpc1J1bGVyTm90U3VwcG9ydGVkUmVzcG9uc2UocnVsZXJSdWxlUmVxdWVzdCkgPyB1bmRlZmluZWQgOiBydWxlclJ1bGVSZXF1ZXN0LmVycm9yLFxuICAgIGRpc3BhdGNoZWQ6IHByb21SdWxlUmVxdWVzdC5kaXNwYXRjaGVkICYmIHJ1bGVyUnVsZVJlcXVlc3QuZGlzcGF0Y2hlZCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWVzdFN0YXRlKFxuICBydWxlU291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBzbGljZTogQXN5bmNSZXF1ZXN0TWFwU2xpY2U8UnVsZXJSdWxlc0NvbmZpZ0RUTyB8IFJ1bGVOYW1lc3BhY2VbXSB8IG51bGw+XG4pOiBBc3luY1JlcXVlc3RTdGF0ZTxSdWxlclJ1bGVzQ29uZmlnRFRPIHwgUnVsZU5hbWVzcGFjZVtdIHwgbnVsbD4ge1xuICBpZiAoIXJ1bGVTb3VyY2VOYW1lKSB7XG4gICAgcmV0dXJuIGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHN0YXRlID0gc2xpY2VbcnVsZVNvdXJjZU5hbWVdO1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICByZXR1cm4gaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBDb21iaW5lZFJ1bGUsXG4gIENvbWJpbmVkUnVsZUdyb3VwLFxuICBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIFJ1bGUsXG4gIFJ1bGVHcm91cCxcbiAgUnVsZU5hbWVzcGFjZSxcbiAgUnVsZXNTb3VyY2UsXG59IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFJ1bGVyUnVsZURUTywgUnVsZXJSdWxlR3JvdXBEVE8sIFJ1bGVyUnVsZXNDb25maWdEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQge1xuICBnZXRBbGxSdWxlc1NvdXJjZXMsXG4gIGdldFJ1bGVzU291cmNlQnlOYW1lLFxuICBpc0Nsb3VkUnVsZXNTb3VyY2UsXG4gIGlzR3JhZmFuYVJ1bGVzU291cmNlLFxufSBmcm9tICcuLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlLCBpc0FsZXJ0aW5nUnVsZXJSdWxlLCBpc1JlY29yZGluZ1J1bGVyUnVsZSB9IGZyb20gJy4uL3V0aWxzL3J1bGVzJztcblxuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcblxuaW50ZXJmYWNlIENhY2hlVmFsdWUge1xuICBwcm9tUnVsZXM/OiBSdWxlTmFtZXNwYWNlW107XG4gIHJ1bGVyUnVsZXM/OiBSdWxlclJ1bGVzQ29uZmlnRFRPIHwgbnVsbDtcbiAgcmVzdWx0OiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXTtcbn1cblxuLy8gdGhpcyBsaXR0bGUgbW9uc3RlciBjb21iaW5lcyBwcm9tZXRoZXVzIHJ1bGVzIGFuZCBydWxlciBydWxlcyB0byBwcm9kdWNlIGEgdW5pZmllZCBkYXRhIHN0cnVjdHVyZVxuLy8gY2FuIGxpbWl0IHRvIGEgc2luZ2xlIHJ1bGVzIHNvdXJjZVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMocnVsZXNTb3VyY2VOYW1lPzogc3RyaW5nKTogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10ge1xuICBjb25zdCBwcm9tUnVsZXNSZXNwb25zZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb21SdWxlcyk7XG4gIGNvbnN0IHJ1bGVyUnVsZXNSZXNwb25zZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJ1bGVyUnVsZXMpO1xuXG4gIC8vIGNhY2hlIHJlc3VsdHMgcGVyIHJ1bGVzIHNvdXJjZSwgc28gd2Ugb25seSByZWNhbGN1bGF0ZSB0aG9zZSBmb3Igd2hpY2ggcmVzdWx0cyBoYXZlIGFjdHVhbGx5IGNoYW5nZWRcbiAgY29uc3QgY2FjaGUgPSB1c2VSZWY8UmVjb3JkPHN0cmluZywgQ2FjaGVWYWx1ZT4+KHt9KTtcblxuICBjb25zdCBydWxlc1NvdXJjZXMgPSB1c2VNZW1vKCgpOiBSdWxlc1NvdXJjZVtdID0+IHtcbiAgICBpZiAocnVsZXNTb3VyY2VOYW1lKSB7XG4gICAgICBjb25zdCBydWxlc1NvdXJjZSA9IGdldFJ1bGVzU291cmNlQnlOYW1lKHJ1bGVzU291cmNlTmFtZSk7XG4gICAgICBpZiAoIXJ1bGVzU291cmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBydWxlcyBzb3VyY2U6ICR7cnVsZXNTb3VyY2VOYW1lfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtydWxlc1NvdXJjZV07XG4gICAgfVxuICAgIHJldHVybiBnZXRBbGxSdWxlc1NvdXJjZXMoKTtcbiAgfSwgW3J1bGVzU291cmNlTmFtZV0pO1xuXG4gIHJldHVybiB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBydWxlc1NvdXJjZXNcbiAgICAgICAgLm1hcCgocnVsZXNTb3VyY2UpOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZXNTb3VyY2VOYW1lID0gaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSA/IHJ1bGVzU291cmNlLm5hbWUgOiBydWxlc1NvdXJjZTtcbiAgICAgICAgICBjb25zdCBwcm9tUnVsZXMgPSBwcm9tUnVsZXNSZXNwb25zZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuICAgICAgICAgIGNvbnN0IHJ1bGVyUnVsZXMgPSBydWxlclJ1bGVzUmVzcG9uc2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdDtcblxuICAgICAgICAgIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmN1cnJlbnRbcnVsZXNTb3VyY2VOYW1lXTtcbiAgICAgICAgICBpZiAoY2FjaGVkICYmIGNhY2hlZC5wcm9tUnVsZXMgPT09IHByb21SdWxlcyAmJiBjYWNoZWQucnVsZXJSdWxlcyA9PT0gcnVsZXJSdWxlcykge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZC5yZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVzcGFjZXM6IFJlY29yZDxzdHJpbmcsIENvbWJpbmVkUnVsZU5hbWVzcGFjZT4gPSB7fTtcblxuICAgICAgICAgIC8vIGZpcnN0IGdldCBhbGwgdGhlIHJ1bGVyIHJ1bGVzIGluXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMocnVsZXJSdWxlcyB8fCB7fSkuZm9yRWFjaCgoW25hbWVzcGFjZU5hbWUsIGdyb3Vwc10pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlID0ge1xuICAgICAgICAgICAgICBydWxlc1NvdXJjZSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZXNwYWNlTmFtZSxcbiAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdID0gbmFtZXNwYWNlO1xuICAgICAgICAgICAgYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5hbWVzcGFjZSwgZ3JvdXBzKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIHRoZW4gY29ycmVsYXRlIHdpdGggcHJvbWV0aGV1cyBydWxlc1xuICAgICAgICAgIHByb21SdWxlcz8uZm9yRWFjaCgoeyBuYW1lOiBuYW1lc3BhY2VOYW1lLCBncm91cHMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnMgPSAobmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSA9IG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gfHwge1xuICAgICAgICAgICAgICBydWxlc1NvdXJjZSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZXNwYWNlTmFtZSxcbiAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShucywgZ3JvdXBzKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC52YWx1ZXMobmFtZXNwYWNlcyk7XG5cbiAgICAgICAgICBjYWNoZS5jdXJyZW50W3J1bGVzU291cmNlTmFtZV0gPSB7IHByb21SdWxlcywgcnVsZXJSdWxlcywgcmVzdWx0IH07XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSlcbiAgICAgICAgLmZsYXQoKSxcbiAgICBbcHJvbVJ1bGVzUmVzcG9uc2VzLCBydWxlclJ1bGVzUmVzcG9uc2VzLCBydWxlc1NvdXJjZXNdXG4gICk7XG59XG5cbi8vIG1lcmdlIGFsbCBncm91cHMgaW4gY2FzZSBvZiBncmFmYW5hIG1hbmFnZWQsIGVzc2VudGlhbGx5IHRyZWF0aW5nIG5hbWVzcGFjZXMgKGZvbGRlcnMpIGFzIGdyb3Vwc1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5HcmFmYW5hTWFuYWdlZFJ1bGVzKG5hbWVzcGFjZXM6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdKSB7XG4gIHJldHVybiBuYW1lc3BhY2VzLm1hcCgobmFtZXNwYWNlKSA9PiB7XG4gICAgY29uc3QgbmV3TmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgPSB7XG4gICAgICAuLi5uYW1lc3BhY2UsXG4gICAgICBncm91cHM6IFtdLFxuICAgIH07XG5cbiAgICAvLyBhZGQgZGVmYXVsdCBncm91cCB3aXRoIHVuZ3JvdXBlZCBydWxlc1xuICAgIG5ld05hbWVzcGFjZS5ncm91cHMucHVzaCh7XG4gICAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgICBydWxlczogc29ydFJ1bGVzQnlOYW1lKG5hbWVzcGFjZS5ncm91cHMuZmxhdE1hcCgoZ3JvdXApID0+IGdyb3VwLnJ1bGVzKSksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3TmFtZXNwYWNlO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRSdWxlc0J5TmFtZShydWxlczogQ29tYmluZWRSdWxlW10pIHtcbiAgcmV0dXJuIHJ1bGVzLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xufVxuXG5mdW5jdGlvbiBhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwczogUnVsZXJSdWxlR3JvdXBEVE9bXSk6IHZvaWQge1xuICBuYW1lc3BhY2UuZ3JvdXBzID0gZ3JvdXBzLm1hcCgoZ3JvdXApID0+IHtcbiAgICBjb25zdCBjb21iaW5lZEdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCA9IHtcbiAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXG4gICAgICBpbnRlcnZhbDogZ3JvdXAuaW50ZXJ2YWwsXG4gICAgICBzb3VyY2VfdGVuYW50czogZ3JvdXAuc291cmNlX3RlbmFudHMsXG4gICAgICBydWxlczogW10sXG4gICAgfTtcbiAgICBjb21iaW5lZEdyb3VwLnJ1bGVzID0gZ3JvdXAucnVsZXMubWFwKChydWxlKSA9PiBydWxlclJ1bGVUb0NvbWJpbmVkUnVsZShydWxlLCBuYW1lc3BhY2UsIGNvbWJpbmVkR3JvdXApKTtcbiAgICByZXR1cm4gY29tYmluZWRHcm91cDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cHM6IFJ1bGVHcm91cFtdKTogdm9pZCB7XG4gIGdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgIGxldCBjb21iaW5lZEdyb3VwID0gbmFtZXNwYWNlLmdyb3Vwcy5maW5kKChnKSA9PiBnLm5hbWUgPT09IGdyb3VwLm5hbWUpO1xuICAgIGlmICghY29tYmluZWRHcm91cCkge1xuICAgICAgY29tYmluZWRHcm91cCA9IHtcbiAgICAgICAgbmFtZTogZ3JvdXAubmFtZSxcbiAgICAgICAgcnVsZXM6IFtdLFxuICAgICAgfTtcbiAgICAgIG5hbWVzcGFjZS5ncm91cHMucHVzaChjb21iaW5lZEdyb3VwKTtcbiAgICB9XG5cbiAgICAoZ3JvdXAucnVsZXMgPz8gW10pLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUnVsZSA9IGdldEV4aXN0aW5nUnVsZUluR3JvdXAocnVsZSwgY29tYmluZWRHcm91cCEsIG5hbWVzcGFjZS5ydWxlc1NvdXJjZSk7XG4gICAgICBpZiAoZXhpc3RpbmdSdWxlKSB7XG4gICAgICAgIGV4aXN0aW5nUnVsZS5wcm9tUnVsZSA9IHJ1bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21iaW5lZEdyb3VwIS5ydWxlcy5wdXNoKHByb21SdWxlVG9Db21iaW5lZFJ1bGUocnVsZSwgbmFtZXNwYWNlLCBjb21iaW5lZEdyb3VwISkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvbVJ1bGVUb0NvbWJpbmVkUnVsZShydWxlOiBSdWxlLCBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwKTogQ29tYmluZWRSdWxlIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBydWxlLm5hbWUsXG4gICAgcXVlcnk6IHJ1bGUucXVlcnksXG4gICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICBhbm5vdGF0aW9uczogaXNBbGVydGluZ1J1bGUocnVsZSkgPyBydWxlLmFubm90YXRpb25zIHx8IHt9IDoge30sXG4gICAgcHJvbVJ1bGU6IHJ1bGUsXG4gICAgbmFtZXNwYWNlOiBuYW1lc3BhY2UsXG4gICAgZ3JvdXAsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlKFxuICBydWxlOiBSdWxlclJ1bGVEVE8sXG4gIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLFxuICBncm91cDogQ29tYmluZWRSdWxlR3JvdXBcbik6IENvbWJpbmVkUnVsZSB7XG4gIHJldHVybiBpc0FsZXJ0aW5nUnVsZXJSdWxlKHJ1bGUpXG4gICAgPyB7XG4gICAgICAgIG5hbWU6IHJ1bGUuYWxlcnQsXG4gICAgICAgIHF1ZXJ5OiBydWxlLmV4cHIsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiBydWxlLmFubm90YXRpb25zIHx8IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9XG4gICAgOiBpc1JlY29yZGluZ1J1bGVyUnVsZShydWxlKVxuICAgID8ge1xuICAgICAgICBuYW1lOiBydWxlLnJlY29yZCxcbiAgICAgICAgcXVlcnk6IHJ1bGUuZXhwcixcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9XG4gICAgOiB7XG4gICAgICAgIG5hbWU6IHJ1bGUuZ3JhZmFuYV9hbGVydC50aXRsZSxcbiAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczogcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfTtcbn1cblxuLy8gZmluZCBleGlzdGluZyBydWxlIGluIGdyb3VwIHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gcHJvbSBydWxlXG5mdW5jdGlvbiBnZXRFeGlzdGluZ1J1bGVJbkdyb3VwKFxuICBydWxlOiBSdWxlLFxuICBncm91cDogQ29tYmluZWRSdWxlR3JvdXAsXG4gIHJ1bGVzU291cmNlOiBSdWxlc1NvdXJjZVxuKTogQ29tYmluZWRSdWxlIHwgdW5kZWZpbmVkIHtcbiAgaWYgKGlzR3JhZmFuYVJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgIC8vIGFzc3VtZSBncmFmYW5hIGdyb3VwcyBoYXZlIG9ubHkgdGhlIG9uZSBydWxlLiBjaGVjayBuYW1lIGFueXdheSBiZWNhdXNlIHBhcmFub2lkXG4gICAgcmV0dXJuIGdyb3VwIS5ydWxlcy5maW5kKChleGlzdGluZ1J1bGUpID0+IGV4aXN0aW5nUnVsZS5uYW1lID09PSBydWxlLm5hbWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgLy8gdHJ5IGZpbmRpbmcgYSBydWxlIHRoYXQgbWF0Y2hlcyBuYW1lLCBsYWJlbHMsIGFubm90YXRpb25zIGFuZCBxdWVyeVxuICAgIGdyb3VwIS5ydWxlcy5maW5kKFxuICAgICAgKGV4aXN0aW5nUnVsZSkgPT4gIWV4aXN0aW5nUnVsZS5wcm9tUnVsZSAmJiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShleGlzdGluZ1J1bGUsIHJ1bGUsIHRydWUpXG4gICAgKSA/P1xuICAgIC8vIGlmIHRoYXQgZmFpbHMsIHRyeSBmaW5kaW5nIGEgcnVsZSB0aGF0IG9ubHkgbWF0Y2hlcyBuYW1lLCBsYWJlbHMgYW5kIGFubm90YXRpb25zLlxuICAgIC8vIGxva2kgJiBwcm9tIGNhbiBzb21ldGltZXMgbW9kaWZ5IHRoZSBxdWVyeSBzbyBpdCBkb2VzbnQgbWF0Y2gsIGVnIGAyID4gMWAgYmVjb21lcyBgMWBcbiAgICBncm91cCEucnVsZXMuZmluZChcbiAgICAgIChleGlzdGluZ1J1bGUpID0+ICFleGlzdGluZ1J1bGUucHJvbVJ1bGUgJiYgaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoZXhpc3RpbmdSdWxlLCBydWxlLCBmYWxzZSlcbiAgICApXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGNvbWJpbmVkUnVsZTogQ29tYmluZWRSdWxlLCBydWxlOiBSdWxlLCBjaGVja1F1ZXJ5ID0gdHJ1ZSk6IGJvb2xlYW4ge1xuICBpZiAoY29tYmluZWRSdWxlLm5hbWUgPT09IHJ1bGUubmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIGNoZWNrUXVlcnkgPyBoYXNoUXVlcnkoY29tYmluZWRSdWxlLnF1ZXJ5KSA6ICcnLFxuICAgICAgICBjb21iaW5lZFJ1bGUubGFiZWxzLFxuICAgICAgICBjb21iaW5lZFJ1bGUuYW5ub3RhdGlvbnMsXG4gICAgICBdKSA9PT1cbiAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgY2hlY2tRdWVyeSA/IGhhc2hRdWVyeShydWxlLnF1ZXJ5KSA6ICcnLFxuICAgICAgICBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgaXNBbGVydGluZ1J1bGUocnVsZSkgPyBydWxlLmFubm90YXRpb25zIHx8IHt9IDoge30sXG4gICAgICBdKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyB0aGVyZSBjYW4gYmUgc2xpZ2h0IGRpZmZlcmVuY2VzIGluIGhvdyBwcm9tICYgcnVsZXIgcmVuZGVyIGEgcXVlcnksIHRoaXMgd2lsbCBoYXNoIHRoZW0gYWNjb3VudGluZyBmb3IgdGhlIGRpZmZlcmVuY2VzXG5mdW5jdGlvbiBoYXNoUXVlcnkocXVlcnk6IHN0cmluZykge1xuICAvLyBvbmUgb2YgdGhlbSBtaWdodCBiZSB3cmFwcGVkIGluIHBhcmVuc1xuICBpZiAocXVlcnkubGVuZ3RoID4gMSAmJiBxdWVyeVswXSA9PT0gJygnICYmIHF1ZXJ5W3F1ZXJ5Lmxlbmd0aCAtIDFdID09PSAnKScpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKDEsIC0xKTtcbiAgfVxuICAvLyB3aGl0ZXNwYWNlIGNvdWxkIGJlIGFkZGVkIG9yIHJlbW92ZWRcbiAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC9cXHN8XFxuL2csICcnKTtcbiAgLy8gbGFiZWxzIG1hdGNoZXJzIGNhbiBiZSByZW9yZGVyZWQsIHNvIHNvcnQgdGhlIGVuaXRyZSBzdHJpbmcsIGVzZW50aWFsbHkgY29tcGFyaW5nIGp1c3QgdGhlIGNoYXJhY3RlciBjb3VudHNcbiAgcmV0dXJuIHF1ZXJ5LnNwbGl0KCcnKS5zb3J0KCkuam9pbignJyk7XG59XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJSZWRpcmVjdCIsIkFsZXJ0IiwiQ2FyZCIsIkljb24iLCJMb2FkaW5nUGxhY2Vob2xkZXIiLCJ1c2VTdHlsZXMyIiwid2l0aEVycm9yQm91bmRhcnkiLCJBbGVydExhYmVscyIsIlJ1bGVWaWV3ZXJMYXlvdXQiLCJ1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmciLCJnZXRSdWxlc1NvdXJjZUJ5TmFtZSIsImNyZWF0ZVZpZXdMaW5rIiwicGFnZVRpdGxlIiwiUmVkaXJlY3RUb1J1bGVWaWV3ZXIiLCJwcm9wcyIsIm5hbWUiLCJzb3VyY2VOYW1lIiwibWF0Y2giLCJwYXJhbXMiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJlcnJvciIsImxvYWRpbmciLCJyZXN1bHQiLCJydWxlcyIsImRpc3BhdGNoZWQiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwic3RhY2siLCJBcnJheSIsImlzQXJyYXkiLCJydWxlc1NvdXJjZSIsImxlbmd0aCIsInJ1bGUiLCJwYXJhbSIsIm1hcCIsImluZGV4IiwibmFtZXNwYWNlIiwiZ3JvdXAiLCJsYWJlbHMiLCJ0aGVtZSIsImNvbG9ycyIsInRleHQiLCJzZWNvbmRhcnkiLCJzcGFjaW5nIiwic3R5bGUiLCJsb2NhdGlvblNlcnZpY2UiLCJQYWdlVG9vbGJhciIsIlBhZ2UiLCJ3cmFwSW5Db250ZW50IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImdldFBhZ2VTdHlsZXMiLCJwdXNoIiwiY29udGVudCIsIlJ1bGVWaWV3ZXJMYXlvdXRDb250ZW50IiwicGFkZGluZyIsImdldENvbnRlbnRTdHlsZXMiLCJ3cmFwcGVyIiwiYnJlYWtwb2ludHMiLCJ2YWx1ZXMiLCJ4eGwiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImJvcmRlciIsIndlYWsiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInVzZU1lbW8iLCJ1c2VEaXNwYXRjaCIsInVzZUFzeW5jIiwiZmV0Y2hQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbiIsImluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSIsInJ1bGVJZCIsImlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZSIsInVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMiLCJ1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciIsInVzZUNvbWJpbmVkUnVsZSIsImlkZW50aWZpZXIiLCJydWxlU291cmNlTmFtZSIsInJlcXVlc3RTdGF0ZSIsInVzZUNvbWJpbmVkUnVsZXNMb2FkZXIiLCJjb21iaW5lZFJ1bGVzIiwiZ3JvdXBzIiwiaWQiLCJmcm9tQ29tYmluZWRSdWxlIiwiZXF1YWwiLCJydWxlTmFtZSIsInJ1bGVzU291cmNlTmFtZSIsImRpc3BhdGNoIiwicHJvbVJ1bGVSZXF1ZXN0cyIsInN0YXRlIiwicHJvbVJ1bGVzIiwicHJvbVJ1bGVSZXF1ZXN0IiwiZ2V0UmVxdWVzdFN0YXRlIiwicnVsZXJSdWxlUmVxdWVzdHMiLCJydWxlclJ1bGVzIiwicnVsZXJSdWxlUmVxdWVzdCIsInVuZGVmaW5lZCIsInNsaWNlIiwidXNlUmVmIiwiZ2V0QWxsUnVsZXNTb3VyY2VzIiwiaXNDbG91ZFJ1bGVzU291cmNlIiwiaXNHcmFmYW5hUnVsZXNTb3VyY2UiLCJpc0FsZXJ0aW5nUnVsZSIsImlzQWxlcnRpbmdSdWxlclJ1bGUiLCJpc1JlY29yZGluZ1J1bGVyUnVsZSIsInByb21SdWxlc1Jlc3BvbnNlcyIsInJ1bGVyUnVsZXNSZXNwb25zZXMiLCJjYWNoZSIsInJ1bGVzU291cmNlcyIsIkVycm9yIiwiY2FjaGVkIiwiY3VycmVudCIsIm5hbWVzcGFjZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIm5hbWVzcGFjZU5hbWUiLCJhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UiLCJucyIsImFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlIiwiZmxhdCIsImZsYXR0ZW5HcmFmYW5hTWFuYWdlZFJ1bGVzIiwibmV3TmFtZXNwYWNlIiwic29ydFJ1bGVzQnlOYW1lIiwiZmxhdE1hcCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJjb21iaW5lZEdyb3VwIiwiaW50ZXJ2YWwiLCJzb3VyY2VfdGVuYW50cyIsInJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlIiwiZmluZCIsImciLCJleGlzdGluZ1J1bGUiLCJnZXRFeGlzdGluZ1J1bGVJbkdyb3VwIiwicHJvbVJ1bGUiLCJwcm9tUnVsZVRvQ29tYmluZWRSdWxlIiwicXVlcnkiLCJhbm5vdGF0aW9ucyIsImFsZXJ0IiwiZXhwciIsInJ1bGVyUnVsZSIsInJlY29yZCIsImdyYWZhbmFfYWxlcnQiLCJpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZSIsImNvbWJpbmVkUnVsZSIsImNoZWNrUXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFzaFF1ZXJ5IiwicmVwbGFjZSIsInNwbGl0Iiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=