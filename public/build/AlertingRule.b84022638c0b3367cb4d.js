"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRule"],{

/***/ "./public/app/features/alerting/unified/RuleViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleViewer": () => (/* binding */ RuleViewer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useObservable.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _components_AlertLabels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _components_DetailsField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _components_Provisioning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewerVisualization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerVisualization.tsx");
/* harmony import */ var _components_rules_RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
/* harmony import */ var _components_rules_RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
/* harmony import */ var _components_rules_RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
/* harmony import */ var _components_rules_RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
/* harmony import */ var _components_rules_RuleDetailsFederatedSources__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsFederatedSources.tsx");
/* harmony import */ var _components_rules_RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
/* harmony import */ var _components_rules_RuleHealth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
/* harmony import */ var _components_rules_RuleState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
/* harmony import */ var _hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertingQueryRunner.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/query.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _RuleViewerLayout, _br, _RuleViewerLayout2, _Alert, _Icon;






























const errorMessage = 'Could not find data source for rule';
const errorTitle = 'Could not view rule';
const pageTitle = 'Alerting / View rule';
function RuleViewer({
  match
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    id
  } = match.params;
  const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_23__.tryParse(id, true);
  const {
    loading,
    error,
    result: rule
  } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_19__.useCombinedRule)(identifier, identifier === null || identifier === void 0 ? void 0 : identifier.ruleSourceName);
  const runner = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_20__.AlertingQueryRunner(), []);
  const data = (0,react_use__WEBPACK_IMPORTED_MODULE_26__["default"])(runner.get());
  const queries2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils_query__WEBPACK_IMPORTED_MODULE_22__.alertRuleToQueries)(rule), [rule]);
  const [queries, setQueries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    allDataSourcesAvailable
  } = (0,_hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_18__.useAlertQueriesStatus)(queries2);
  const onRunQueries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (queries.length > 0 && allDataSourcesAvailable) {
      runner.run(queries);
    }
  }, [queries, runner, allDataSourcesAvailable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setQueries(queries2);
  }, [queries2]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (allDataSourcesAvailable) {
      onRunQueries();
    }
  }, [onRunQueries, allDataSourcesAvailable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => runner.destroy();
  }, [runner]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(query => {
    setQueries(queries => queries.map(q => {
      if (q.refId === query.refId) {
        return query;
      }

      return q;
    }));
  }, []);

  if (!(identifier !== null && identifier !== void 0 && identifier.ruleSourceName)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_8__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: errorTitle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("details", {
          className: styles.errorMessage,
          children: errorMessage
        })
      })
    });
  }

  const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.getRulesSourceByName)(identifier.ruleSourceName);

  if (loading) {
    return _RuleViewerLayout || (_RuleViewerLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_8__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (error || !rulesSource) {
    var _error$message;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_8__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: errorTitle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("details", {
          className: styles.errorMessage,
          children: [(_error$message = error === null || error === void 0 ? void 0 : error.message) !== null && _error$message !== void 0 ? _error$message : errorMessage, _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("br", {})), !!(error !== null && error !== void 0 && error.stack) && error.stack]
        })
      })
    });
  }

  if (!rule) {
    return _RuleViewerLayout2 || (_RuleViewerLayout2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_8__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("span", {
        children: "Rule could not be found."
      })
    }));
  }

  const annotations = Object.entries(rule.annotations).filter(([_, value]) => !!value.trim());
  const isFederatedRule = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_24__.isFederatedRuleGroup)(rule.group);
  const isProvisioned = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_24__.isGrafanaRulerRule)(rule.rulerRule) && Boolean(rule.rulerRule.grafana_alert.provenance);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_8__.RuleViewerLayout, {
    wrapInContent: false,
    title: pageTitle,
    children: [isFederatedRule && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      severity: "info",
      title: "This rule is part of a federated rule group.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
        children: ["Federated rule groups are currently an experimental feature.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          fill: "text",
          icon: "book",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("a", {
            href: "https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation",
            children: "Read documentation"
          })
        })]
      })
    }))), isProvisioned && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_Provisioning__WEBPACK_IMPORTED_MODULE_7__.ProvisioningAlert, {
      resource: _components_Provisioning__WEBPACK_IMPORTED_MODULE_7__.ProvisionedResource.AlertRule
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_8__.RuleViewerLayoutContent, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("h4", {
          children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "bell",
            size: "lg"
          })), " ", rule.name]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rules_RuleState__WEBPACK_IMPORTED_MODULE_17__.RuleState, {
          rule: rule,
          isCreating: false,
          isDeleting: false
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rules_RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_10__.RuleDetailsActionButtons, {
          rule: rule,
          rulesSource: rulesSource
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
        className: styles.details,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: styles.leftSide,
          children: [rule.promRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_DetailsField__WEBPACK_IMPORTED_MODULE_6__.DetailsField, {
            label: "Health",
            horizontal: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rules_RuleHealth__WEBPACK_IMPORTED_MODULE_16__.RuleHealth, {
              rule: rule.promRule
            })
          }), !!rule.labels && !!Object.keys(rule.labels).length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_DetailsField__WEBPACK_IMPORTED_MODULE_6__.DetailsField, {
            label: "Labels",
            horizontal: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_AlertLabels__WEBPACK_IMPORTED_MODULE_5__.AlertLabels, {
              labels: rule.labels
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rules_RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_13__.RuleDetailsExpression, {
            rulesSource: rulesSource,
            rule: rule,
            annotations: annotations
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rules_RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_11__.RuleDetailsAnnotations, {
            annotations: annotations
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: styles.rightSide,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rules_RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_12__.RuleDetailsDataSources, {
            rule: rule,
            rulesSource: rulesSource
          }), isFederatedRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rules_RuleDetailsFederatedSources__WEBPACK_IMPORTED_MODULE_14__.RuleDetailsFederatedSources, {
            group: rule.group
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_DetailsField__WEBPACK_IMPORTED_MODULE_6__.DetailsField, {
            label: "Namespace / Group",
            children: `${rule.namespace.name} / ${rule.group.name}`
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rules_RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_15__.RuleDetailsMatchingInstances, {
          rule: rule,
          pagination: {
            itemsPerPage: _core_constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_PER_PAGE_PAGINATION
          }
        })
      })]
    }), !isFederatedRule && data && Object.keys(data).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
        className: styles.queriesTitle,
        children: ["Query results ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PanelChromeLoadingIndicator, {
          loading: isLoading(data),
          onCancel: () => runner.cancel()
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_8__.RuleViewerLayoutContent, {
        padding: 0,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
          className: styles.queries,
          children: queries.map(query => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)("div", {
              className: styles.query,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_components_rule_viewer_RuleViewerVisualization__WEBPACK_IMPORTED_MODULE_9__.RuleViewerVisualization, {
                query: query,
                data: data && data[query.refId],
                onChangeQuery: onChangeQuery
              })
            }, query.refId);
          })
        })
      })]
    }), !isFederatedRule && !allDataSourcesAvailable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      title: "Query not available",
      severity: "warning",
      className: styles.queryWarning,
      children: "Cannot display the query preview. Some of the data sources used in the queries are not available."
    })]
  });
}

function isLoading(data) {
  return !!Object.values(data).find(d => d.state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading);
}

const getStyles = theme => {
  return {
    errorMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      white-space: pre-wrap;
    `,
    queries: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 100%;
      width: 100%;
    `,
    queriesTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(2, 0.5)};
      font-size: ${theme.typography.h5.fontSize};
      font-weight: ${theme.typography.fontWeightBold};
      font-family: ${theme.typography.h5.fontFamily};
    `,
    query: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border-bottom: 1px solid ${theme.colors.border.medium};
      padding: ${theme.spacing(2)};
    `,
    queryWarning: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(4, 0)};
    `,
    details: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
    `,
    leftSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1;
    `,
    rightSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-left: 90px;
      width: 300px;
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withErrorBoundary)(RuleViewer, {
  style: 'page'
}));

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

/***/ "./public/app/features/alerting/unified/components/rule-viewer/RuleViewerVisualization.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleViewerVisualization": () => (/* binding */ RuleViewerVisualization)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["refId"];

var _Alert;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const headerHeight = 4;
function RuleViewerVisualization(props) {
  var _PanelPluginsButtonGr;

  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const {
    data,
    query,
    onChangeQuery
  } = props;
  const defaultPanel = (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model) ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__.TABLE : _utils_constants__WEBPACK_IMPORTED_MODULE_8__.TIMESERIES;
  const [panel, setPanel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultPanel);
  const dsSettings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
  const relativeTimeRange = query.relativeTimeRange;
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    frameIndex: 0,
    showHeader: true
  });
  const onTimeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newDateTime => {
    const now = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)().unix() - newDateTime.unix();

    if (relativeTimeRange) {
      const interval = relativeTimeRange.from - relativeTimeRange.to;
      onChangeQuery(Object.assign({}, query, {
        relativeTimeRange: {
          from: now + interval,
          to: now
        }
      }));
    }
  }, [onChangeQuery, query, relativeTimeRange]);
  const setDateTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(relativeTimeRangeTo => {
    return relativeTimeRangeTo === 0 ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)() : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)().subtract(relativeTimeRangeTo, 'seconds');
  }, []);

  if (!data) {
    return null;
  }

  if (!dsSettings) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.content,
      children: [_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, {
        title: "Could not find datasource for query"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditor, {
        width: "100%",
        height: "250px",
        language: "json",
        showLineNumbers: false,
        showMiniMap: false,
        value: JSON.stringify(query, null, '\t'),
        readOnly: true
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: styles.content,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: ({
        width,
        height
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          style: {
            width,
            height
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: styles.header,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              children: [`Query ${query.refId}`, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                className: styles.dataSource,
                children: ["(", dsSettings.name, ")"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: styles.actions,
              children: [!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model) && relativeTimeRange ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.DateTimePicker, {
                date: setDateTime(relativeTimeRange.to),
                onChange: onTimeChange,
                maxDate: new Date()
              }) : null, _PanelPluginsButtonGr || (_PanelPluginsButtonGr = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_10__.PanelPluginsButtonGroup, {
                onChange: setPanel,
                value: panel,
                size: "md"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_9__.Authorize, {
                actions: [app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.DataSourcesExplore],
                children: !(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                    className: styles.spacing
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
                    size: "md",
                    variant: "secondary",
                    icon: "compass",
                    target: "_blank",
                    href: createExploreLink(dsSettings, query),
                    children: "View in Explore"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.PanelRenderer, {
            height: height - theme.spacing.gridSize * headerHeight,
            width: width,
            data: data,
            pluginId: panel,
            title: "",
            onOptionsChange: setOptions,
            options: options
          })]
        });
      }
    })
  });
}

function createExploreLink(settings, query) {
  const {
    name
  } = settings;

  const _query$model = query.model,
        rest = _objectWithoutPropertiesLoose(_query$model, _excluded);

  const queryParams = Object.assign({}, rest, {
    datasource: name
  });
  return _grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl(`${_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl}/explore`, {
    left: JSON.stringify(['now-1h', 'now', name, queryParams])
  });
}

const getStyles = theme => {
  return {
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
      height: 250px;
    `,
    header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: ${theme.spacing(headerHeight)};
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
    `,
    refId: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: ${theme.typography.fontWeightMedium};
      color: ${theme.colors.text.link};
      overflow: hidden;
    `,
    dataSource: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(1)};
      font-style: italic;
      color: ${theme.colors.text.secondary};
    `,
    actions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
    `,
    spacing: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(0, 1, 0, 0)};
    `,
    errorMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      white-space: pre-wrap;
    `
  };
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

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsFederatedSources.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsFederatedSources": () => (/* binding */ RuleDetailsFederatedSources)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const RuleDetailsFederatedSources = ({
  group
}) => {
  var _group$source_tenants;

  const sourceTenants = (_group$source_tenants = group.source_tenants) !== null && _group$source_tenants !== void 0 ? _group$source_tenants : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_1__.DetailsField, {
    label: "Tenant sources",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: sourceTenants.map(tenant => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: tenant
      }, tenant))
    })
  });
};



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

/***/ "./public/app/features/alerting/unified/utils/query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alertRuleToQueries": () => (/* binding */ alertRuleToQueries)
/* harmony export */ });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");


function alertRuleToQueries(combinedRule) {
  if (!combinedRule) {
    return [];
  }

  const {
    namespace,
    rulerRule
  } = combinedRule;
  const {
    rulesSource
  } = namespace;

  if ((0,_datasource__WEBPACK_IMPORTED_MODULE_0__.isGrafanaRulesSource)(rulesSource)) {
    if ((0,_rules__WEBPACK_IMPORTED_MODULE_1__.isGrafanaRulerRule)(rulerRule)) {
      return rulerRule.grafana_alert.data;
    }
  }

  if ((0,_datasource__WEBPACK_IMPORTED_MODULE_0__.isCloudRulesSource)(rulesSource)) {
    const model = cloudAlertRuleToModel(rulesSource, combinedRule);
    return [{
      refId: model.refId,
      datasourceUid: rulesSource.uid,
      queryType: '',
      model,
      relativeTimeRange: {
        from: 360,
        to: 0
      }
    }];
  }

  return [];
}

function cloudAlertRuleToModel(dsSettings, rule) {
  const refId = 'A';

  switch (dsSettings.type) {
    case 'prometheus':
      {
        const query = {
          refId,
          expr: rule.query
        };
        return query;
      }

    case 'loki':
      {
        const query = {
          refId,
          expr: rule.query
        };
        return query;
      }

    default:
      throw new Error(`Query for datasource type ${dsSettings.type} is currently not supported by cloud alert rules.`);
  }
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

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useObservable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQzZCO0lBQzNCQyxVQUFVLEVBQUUsSUFGZDtJQUdFQyxNQUFNLEVBQUU7TUFDTixrQkFBa0I7UUFDaEJGLE9BQU8sRUFBRSxrQkFETztRQUVoQkcsS0FBSyxFQUFFO01BRlM7SUFEWjtFQUhWLENBVmUsQ0FwQ21CO0VBeURwQ2lCLE1BQU0sRUFBRTtJQUNOcEIsT0FBTyxFQUFFLGFBREg7SUFFTkcsS0FBSyxFQUFFO0VBRkQsQ0F6RDRCO0VBNkRwQ1EsTUFBTSxFQUFFLHFDQTdENEI7RUE4RHBDQyxRQUFRLEVBQUUsSUFBSU4sTUFBSixDQUFZLDBEQUF5RFMsU0FBUyxDQUFDeEksSUFBVixDQUFlLEdBQWYsQ0FBb0IsTUFBekYsRUFBZ0csR0FBaEcsQ0E5RDBCO0VBK0RwQzZILFdBQVcsRUFBRTtBQS9EdUIsQ0FBL0I7QUFrRVAsaUVBQWVlLGFBQWY7Ozs7Ozs7Ozs7Ozs7QUNqbEJpQztBQUNtQztBQUNwRTtBQUNBLGFBQWEsK0NBQVE7QUFDckIsSUFBSSxzRUFBeUI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL1J1bGVWaWV3ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9BdXRob3JpemUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9FeHByZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9Qcm92aXNpb25pbmcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtdmlld2VyL1J1bGVWaWV3ZXJMYXlvdXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLXZpZXdlci9SdWxlVmlld2VyVmlzdWFsaXphdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQW5ub3RhdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0RhdGFTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNFeHByZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNGZWRlcmF0ZWRTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVIZWFsdGgudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlU3RhdGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9TdGF0ZUhpc3RvcnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRRdWVyaWVzU3RhdHVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUZvbGRlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUlzUnVsZUVkaXRhYmxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlU3RhdGVIaXN0b3J5TW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvc3RhdGUvQWxlcnRpbmdRdWVyeVJ1bm5lci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL3F1ZXJ5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvdGltZVJhbmdlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS9zeW50YXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvcHJvbXFsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC1jZWE4ZTgyNmRjLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy40LjAtMGVmNDUyMTU0NC0wODg5ZGE5MTliLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VPYnNlcnZhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VPYnNlcnZhYmxlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgTG9hZGluZ1N0YXRlLCBQYW5lbERhdGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIEFsZXJ0LFxuICBCdXR0b24sXG4gIEljb24sXG4gIExvYWRpbmdQbGFjZWhvbGRlcixcbiAgUGFuZWxDaHJvbWVMb2FkaW5nSW5kaWNhdG9yLFxuICB1c2VTdHlsZXMyLFxuICBWZXJ0aWNhbEdyb3VwLFxuICB3aXRoRXJyb3JCb3VuZGFyeSxcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcblxuaW1wb3J0IHsgREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgQWxlcnRMYWJlbHMgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRMYWJlbHMnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHNGaWVsZCc7XG5pbXBvcnQgeyBQcm92aXNpb25lZFJlc291cmNlLCBQcm92aXNpb25pbmdBbGVydCB9IGZyb20gJy4vY29tcG9uZW50cy9Qcm92aXNpb25pbmcnO1xuaW1wb3J0IHsgUnVsZVZpZXdlckxheW91dCwgUnVsZVZpZXdlckxheW91dENvbnRlbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZS12aWV3ZXIvUnVsZVZpZXdlckxheW91dCc7XG5pbXBvcnQgeyBSdWxlVmlld2VyVmlzdWFsaXphdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlLXZpZXdlci9SdWxlVmlld2VyVmlzdWFsaXphdGlvbic7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNBY3Rpb25CdXR0b25zJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzQW5ub3RhdGlvbnMgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNBbm5vdGF0aW9ucyc7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc0RhdGFTb3VyY2VzIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzRGF0YVNvdXJjZXMnO1xuaW1wb3J0IHsgUnVsZURldGFpbHNFeHByZXNzaW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzRXhwcmVzc2lvbic7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc0ZlZGVyYXRlZFNvdXJjZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNGZWRlcmF0ZWRTb3VyY2VzJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcyc7XG5pbXBvcnQgeyBSdWxlSGVhbHRoIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVIZWFsdGgnO1xuaW1wb3J0IHsgUnVsZVN0YXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVTdGF0ZSc7XG5pbXBvcnQgeyB1c2VBbGVydFF1ZXJpZXNTdGF0dXMgfSBmcm9tICcuL2hvb2tzL3VzZUFsZXJ0UXVlcmllc1N0YXR1cyc7XG5pbXBvcnQgeyB1c2VDb21iaW5lZFJ1bGUgfSBmcm9tICcuL2hvb2tzL3VzZUNvbWJpbmVkUnVsZSc7XG5pbXBvcnQgeyBBbGVydGluZ1F1ZXJ5UnVubmVyIH0gZnJvbSAnLi9zdGF0ZS9BbGVydGluZ1F1ZXJ5UnVubmVyJztcbmltcG9ydCB7IGdldFJ1bGVzU291cmNlQnlOYW1lIH0gZnJvbSAnLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGFsZXJ0UnVsZVRvUXVlcmllcyB9IGZyb20gJy4vdXRpbHMvcXVlcnknO1xuaW1wb3J0ICogYXMgcnVsZUlkIGZyb20gJy4vdXRpbHMvcnVsZS1pZCc7XG5pbXBvcnQgeyBpc0ZlZGVyYXRlZFJ1bGVHcm91cCwgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi91dGlscy9ydWxlcyc7XG5cbnR5cGUgUnVsZVZpZXdlclByb3BzID0gR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZD86IHN0cmluZzsgc291cmNlTmFtZT86IHN0cmluZyB9PjtcblxuY29uc3QgZXJyb3JNZXNzYWdlID0gJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlIGZvciBydWxlJztcbmNvbnN0IGVycm9yVGl0bGUgPSAnQ291bGQgbm90IHZpZXcgcnVsZSc7XG5jb25zdCBwYWdlVGl0bGUgPSAnQWxlcnRpbmcgLyBWaWV3IHJ1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZVZpZXdlcih7IG1hdGNoIH06IFJ1bGVWaWV3ZXJQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgaWQgfSA9IG1hdGNoLnBhcmFtcztcbiAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC50cnlQYXJzZShpZCwgdHJ1ZSk7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgcmVzdWx0OiBydWxlIH0gPSB1c2VDb21iaW5lZFJ1bGUoaWRlbnRpZmllciwgaWRlbnRpZmllcj8ucnVsZVNvdXJjZU5hbWUpO1xuICBjb25zdCBydW5uZXIgPSB1c2VNZW1vKCgpID0+IG5ldyBBbGVydGluZ1F1ZXJ5UnVubmVyKCksIFtdKTtcbiAgY29uc3QgZGF0YSA9IHVzZU9ic2VydmFibGUocnVubmVyLmdldCgpKTtcbiAgY29uc3QgcXVlcmllczIgPSB1c2VNZW1vKCgpID0+IGFsZXJ0UnVsZVRvUXVlcmllcyhydWxlKSwgW3J1bGVdKTtcbiAgY29uc3QgW3F1ZXJpZXMsIHNldFF1ZXJpZXNdID0gdXNlU3RhdGU8QWxlcnRRdWVyeVtdPihbXSk7XG5cbiAgY29uc3QgeyBhbGxEYXRhU291cmNlc0F2YWlsYWJsZSB9ID0gdXNlQWxlcnRRdWVyaWVzU3RhdHVzKHF1ZXJpZXMyKTtcblxuICBjb25zdCBvblJ1blF1ZXJpZXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHF1ZXJpZXMubGVuZ3RoID4gMCAmJiBhbGxEYXRhU291cmNlc0F2YWlsYWJsZSkge1xuICAgICAgcnVubmVyLnJ1bihxdWVyaWVzKTtcbiAgICB9XG4gIH0sIFtxdWVyaWVzLCBydW5uZXIsIGFsbERhdGFTb3VyY2VzQXZhaWxhYmxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRRdWVyaWVzKHF1ZXJpZXMyKTtcbiAgfSwgW3F1ZXJpZXMyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUpIHtcbiAgICAgIG9uUnVuUXVlcmllcygpO1xuICAgIH1cbiAgfSwgW29uUnVuUXVlcmllcywgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBydW5uZXIuZGVzdHJveSgpO1xuICB9LCBbcnVubmVyXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VRdWVyeSA9IHVzZUNhbGxiYWNrKChxdWVyeTogQWxlcnRRdWVyeSkgPT4ge1xuICAgIHNldFF1ZXJpZXMoKHF1ZXJpZXMpID0+XG4gICAgICBxdWVyaWVzLm1hcCgocSkgPT4ge1xuICAgICAgICBpZiAocS5yZWZJZCA9PT0gcXVlcnkucmVmSWQpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHE7XG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtdKTtcblxuICBpZiAoIWlkZW50aWZpZXI/LnJ1bGVTb3VyY2VOYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgICA8QWxlcnQgdGl0bGU9e2Vycm9yVGl0bGV9PlxuICAgICAgICAgIDxkZXRhaWxzIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yTWVzc2FnZX08L2RldGFpbHM+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICA8L1J1bGVWaWV3ZXJMYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHJ1bGVzU291cmNlID0gZ2V0UnVsZXNTb3VyY2VCeU5hbWUoaWRlbnRpZmllci5ydWxlU291cmNlTmFtZSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJ1bGVWaWV3ZXJMYXlvdXQgdGl0bGU9e3BhZ2VUaXRsZX0+XG4gICAgICAgIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcgcnVsZS4uLlwiIC8+XG4gICAgICA8L1J1bGVWaWV3ZXJMYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChlcnJvciB8fCAhcnVsZXNTb3VyY2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJ1bGVWaWV3ZXJMYXlvdXQgdGl0bGU9e3BhZ2VUaXRsZX0+XG4gICAgICAgIDxBbGVydCB0aXRsZT17ZXJyb3JUaXRsZX0+XG4gICAgICAgICAgPGRldGFpbHMgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICAgIHtlcnJvcj8ubWVzc2FnZSA/PyBlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHshIWVycm9yPy5zdGFjayAmJiBlcnJvci5zdGFja31cbiAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICA8L1J1bGVWaWV3ZXJMYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghcnVsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8UnVsZVZpZXdlckxheW91dCB0aXRsZT17cGFnZVRpdGxlfT5cbiAgICAgICAgPHNwYW4+UnVsZSBjb3VsZCBub3QgYmUgZm91bmQuPC9zcGFuPlxuICAgICAgPC9SdWxlVmlld2VyTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBhbm5vdGF0aW9ucyA9IE9iamVjdC5lbnRyaWVzKHJ1bGUuYW5ub3RhdGlvbnMpLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gISF2YWx1ZS50cmltKCkpO1xuICBjb25zdCBpc0ZlZGVyYXRlZFJ1bGUgPSBpc0ZlZGVyYXRlZFJ1bGVHcm91cChydWxlLmdyb3VwKTtcbiAgY29uc3QgaXNQcm92aXNpb25lZCA9IGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlLnJ1bGVyUnVsZSkgJiYgQm9vbGVhbihydWxlLnJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0LnByb3ZlbmFuY2UpO1xuXG4gIHJldHVybiAoXG4gICAgPFJ1bGVWaWV3ZXJMYXlvdXQgd3JhcEluQ29udGVudD17ZmFsc2V9IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAge2lzRmVkZXJhdGVkUnVsZSAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIlRoaXMgcnVsZSBpcyBwYXJ0IG9mIGEgZmVkZXJhdGVkIHJ1bGUgZ3JvdXAuXCI+XG4gICAgICAgICAgPFZlcnRpY2FsR3JvdXA+XG4gICAgICAgICAgICBGZWRlcmF0ZWQgcnVsZSBncm91cHMgYXJlIGN1cnJlbnRseSBhbiBleHBlcmltZW50YWwgZmVhdHVyZS5cbiAgICAgICAgICAgIDxCdXR0b24gZmlsbD1cInRleHRcIiBpY29uPVwiYm9va1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL21ldHJpY3MtZW50ZXJwcmlzZS9sYXRlc3QvdGVuYW50LW1hbmFnZW1lbnQvdGVuYW50LWZlZGVyYXRpb24vI2Nyb3NzLXRlbmFudC1hbGVydGluZy1hbmQtcmVjb3JkaW5nLXJ1bGUtZmVkZXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIFJlYWQgZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge2lzUHJvdmlzaW9uZWQgJiYgPFByb3Zpc2lvbmluZ0FsZXJ0IHJlc291cmNlPXtQcm92aXNpb25lZFJlc291cmNlLkFsZXJ0UnVsZX0gLz59XG4gICAgICA8UnVsZVZpZXdlckxheW91dENvbnRlbnQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgPEljb24gbmFtZT1cImJlbGxcIiBzaXplPVwibGdcIiAvPiB7cnVsZS5uYW1lfVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPFJ1bGVTdGF0ZSBydWxlPXtydWxlfSBpc0NyZWF0aW5nPXtmYWxzZX0gaXNEZWxldGluZz17ZmFsc2V9IC8+XG4gICAgICAgICAgPFJ1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucyBydWxlPXtydWxlfSBydWxlc1NvdXJjZT17cnVsZXNTb3VyY2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdFNpZGV9PlxuICAgICAgICAgICAge3J1bGUucHJvbVJ1bGUgJiYgKFxuICAgICAgICAgICAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiSGVhbHRoXCIgaG9yaXpvbnRhbD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPFJ1bGVIZWFsdGggcnVsZT17cnVsZS5wcm9tUnVsZX0gLz5cbiAgICAgICAgICAgICAgPC9EZXRhaWxzRmllbGQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyEhcnVsZS5sYWJlbHMgJiYgISFPYmplY3Qua2V5cyhydWxlLmxhYmVscykubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIkxhYmVsc1wiIGhvcml6b250YWw9e3RydWV9PlxuICAgICAgICAgICAgICAgIDxBbGVydExhYmVscyBsYWJlbHM9e3J1bGUubGFiZWxzfSAvPlxuICAgICAgICAgICAgICA8L0RldGFpbHNGaWVsZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8UnVsZURldGFpbHNFeHByZXNzaW9uIHJ1bGVzU291cmNlPXtydWxlc1NvdXJjZX0gcnVsZT17cnVsZX0gYW5ub3RhdGlvbnM9e2Fubm90YXRpb25zfSAvPlxuICAgICAgICAgICAgPFJ1bGVEZXRhaWxzQW5ub3RhdGlvbnMgYW5ub3RhdGlvbnM9e2Fubm90YXRpb25zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRTaWRlfT5cbiAgICAgICAgICAgIDxSdWxlRGV0YWlsc0RhdGFTb3VyY2VzIHJ1bGU9e3J1bGV9IHJ1bGVzU291cmNlPXtydWxlc1NvdXJjZX0gLz5cbiAgICAgICAgICAgIHtpc0ZlZGVyYXRlZFJ1bGUgJiYgPFJ1bGVEZXRhaWxzRmVkZXJhdGVkU291cmNlcyBncm91cD17cnVsZS5ncm91cH0gLz59XG4gICAgICAgICAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiTmFtZXNwYWNlIC8gR3JvdXBcIj57YCR7cnVsZS5uYW1lc3BhY2UubmFtZX0gLyAke3J1bGUuZ3JvdXAubmFtZX1gfTwvRGV0YWlsc0ZpZWxkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8UnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcyBydWxlPXtydWxlfSBwYWdpbmF0aW9uPXt7IGl0ZW1zUGVyUGFnZTogREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SdWxlVmlld2VyTGF5b3V0Q29udGVudD5cbiAgICAgIHshaXNGZWRlcmF0ZWRSdWxlICYmIGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVyaWVzVGl0bGV9PlxuICAgICAgICAgICAgUXVlcnkgcmVzdWx0cyA8UGFuZWxDaHJvbWVMb2FkaW5nSW5kaWNhdG9yIGxvYWRpbmc9e2lzTG9hZGluZyhkYXRhKX0gb25DYW5jZWw9eygpID0+IHJ1bm5lci5jYW5jZWwoKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UnVsZVZpZXdlckxheW91dENvbnRlbnQgcGFkZGluZz17MH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXJpZXN9PlxuICAgICAgICAgICAgICB7cXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtxdWVyeS5yZWZJZH0gY2xhc3NOYW1lPXtzdHlsZXMucXVlcnl9PlxuICAgICAgICAgICAgICAgICAgICA8UnVsZVZpZXdlclZpc3VhbGl6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YSAmJiBkYXRhW3F1ZXJ5LnJlZklkXX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVF1ZXJ5PXtvbkNoYW5nZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1J1bGVWaWV3ZXJMYXlvdXRDb250ZW50PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IWlzRmVkZXJhdGVkUnVsZSAmJiAhYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgJiYgKFxuICAgICAgICA8QWxlcnQgdGl0bGU9XCJRdWVyeSBub3QgYXZhaWxhYmxlXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCIgY2xhc3NOYW1lPXtzdHlsZXMucXVlcnlXYXJuaW5nfT5cbiAgICAgICAgICBDYW5ub3QgZGlzcGxheSB0aGUgcXVlcnkgcHJldmlldy4gU29tZSBvZiB0aGUgZGF0YSBzb3VyY2VzIHVzZWQgaW4gdGhlIHF1ZXJpZXMgYXJlIG5vdCBhdmFpbGFibGUuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNMb2FkaW5nKGRhdGE6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4pOiBib29sZWFuIHtcbiAgcmV0dXJuICEhT2JqZWN0LnZhbHVlcyhkYXRhKS5maW5kKChkKSA9PiBkLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGVycm9yTWVzc2FnZTogY3NzYFxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGAsXG4gICAgcXVlcmllczogY3NzYFxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBxdWVyaWVzVGl0bGU6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyLCAwLjUpfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5Lmg1LmZvbnRTaXplfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGR9O1xuICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUudHlwb2dyYXBoeS5oNS5mb250RmFtaWx5fTtcbiAgICBgLFxuICAgIHF1ZXJ5OiBjc3NgXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gICAgcXVlcnlXYXJuaW5nOiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0LCAwKX07XG4gICAgYCxcbiAgICBkZXRhaWxzOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBgLFxuICAgIGxlZnRTaWRlOiBjc3NgXG4gICAgICBmbGV4OiAxO1xuICAgIGAsXG4gICAgcmlnaHRTaWRlOiBjc3NgXG4gICAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgYCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcnJvckJvdW5kYXJ5KFJ1bGVWaWV3ZXIsIHsgc3R5bGU6ICdwYWdlJyB9KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBhY3Rpb25zOiBBY2Nlc3NDb250cm9sQWN0aW9uW107XG4gIGZhbGxiYWNrPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBBdXRob3JpemU6IEZDPFByb3BzPiA9ICh7IGFjdGlvbnMsIGNoaWxkcmVuLCBmYWxsYmFjayA9IHRydWUgfSkgPT4ge1xuICBpZiAoYWN0aW9ucy5zb21lKChhY3Rpb24pID0+IGNvbnRleHRTcnYuaGFzQWNjZXNzKGFjdGlvbiwgZmFsbGJhY2spKSkge1xuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IExhbmd1YWdlTWFwLCBsYW5ndWFnZXMgYXMgcHJpc21MYW5ndWFnZXMgfSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdAZ3JhZmFuYS9zbGF0ZS1yZWFjdCc7XG5pbXBvcnQgeyBtYWtlVmFsdWUsIFNsYXRlUHJpc20sIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBMb2dxbFN5bnRheCBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvc3ludGF4JztcbmltcG9ydCBQcm9tcWxTeW50YXggZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL3Byb21xbCc7XG5pbXBvcnQgeyBSdWxlc1NvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVR5cGUsIGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5pbXBvcnQgeyBXZWxsIH0gZnJvbSAnLi9XZWxsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXhwcmVzc2lvbjogc3RyaW5nO1xuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBIaWdobGlnaHRlZFF1ZXJ5OiBGQzx7IGxhbmd1YWdlOiAncHJvbXFsJyB8ICdsb2dxbCc7IGV4cHI6IHN0cmluZyB9PiA9ICh7IGxhbmd1YWdlLCBleHByIH0pID0+IHtcbiAgY29uc3QgcGx1Z2lucyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAgU2xhdGVQcmlzbShcbiAgICAgICAge1xuICAgICAgICAgIG9ubHlJbjogKG5vZGU6IGFueSkgPT4gbm9kZS50eXBlID09PSAnY29kZV9ibG9jaycsXG4gICAgICAgICAgZ2V0U3ludGF4OiAoKSA9PiBsYW5ndWFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgeyAuLi4ocHJpc21MYW5ndWFnZXMgYXMgTGFuZ3VhZ2VNYXApLCBbbGFuZ3VhZ2VdOiBsYW5ndWFnZSA9PT0gJ2xvZ3FsJyA/IExvZ3FsU3ludGF4IDogUHJvbXFsU3ludGF4IH1cbiAgICAgICksXG4gICAgXSxcbiAgICBbbGFuZ3VhZ2VdXG4gICk7XG5cbiAgY29uc3Qgc2xhdGVWYWx1ZSA9IHVzZU1lbW8oKCkgPT4gbWFrZVZhbHVlKGV4cHIpLCBbZXhwcl0pO1xuXG4gIHJldHVybiA8RWRpdG9yIHBsdWdpbnM9e3BsdWdpbnN9IHZhbHVlPXtzbGF0ZVZhbHVlfSByZWFkT25seT17dHJ1ZX0gLz47XG59O1xuXG5leHBvcnQgY29uc3QgRXhwcmVzc2lvbjogRkM8UHJvcHM+ID0gKHsgZXhwcmVzc2lvbjogcXVlcnksIHJ1bGVzU291cmNlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8V2VsbCBjbGFzc05hbWU9e2N4KHN0eWxlcy53ZWxsLCAnc2xhdGUtcXVlcnktZmllbGQnKX0+XG4gICAgICB7aXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSA/IChcbiAgICAgICAgPEhpZ2hsaWdodGVkUXVlcnkgZXhwcj17cXVlcnl9IGxhbmd1YWdlPXtydWxlc1NvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZS5Mb2tpID8gJ2xvZ3FsJyA6ICdwcm9tcWwnfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgcXVlcnlcbiAgICAgICl9XG4gICAgPC9XZWxsPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICB3ZWxsOiBjc3NgXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9zcGFjZX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUmFkaW9CdXR0b25Hcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU1RBVCwgVEFCTEUsIFRJTUVTRVJJRVMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgdHlwZSBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMgPSAndGltZXNlcmllcycgfCAndGFibGUnIHwgJ3N0YXQnO1xuXG50eXBlIFByb3BzID0ge1xuICB2YWx1ZTogU3VwcG9ydGVkUGFuZWxQbHVnaW5zO1xuICBvbkNoYW5nZTogKHZhbHVlOiBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMpID0+IHZvaWQ7XG4gIHNpemU/OiAnc20nIHwgJ21kJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQYW5lbFBsdWdpbnNCdXR0b25Hcm91cChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgc2l6ZSA9ICdtZCcgfSA9IHByb3BzO1xuICBjb25zdCBwYW5lbHMgPSB1c2VNZW1vKCgpID0+IGdldFN1cHBvcnRlZFBhbmVscygpLCBbXSk7XG5cbiAgcmV0dXJuIDxSYWRpb0J1dHRvbkdyb3VwIG9wdGlvbnM9e3BhbmVsc30gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHNpemU9e3NpemV9IC8+O1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0ZWRQYW5lbHMoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFN1cHBvcnRlZFBhbmVsUGx1Z2lucz4+IHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY29uZmlnLnBhbmVscykucmVkdWNlKChwYW5lbHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxTdXBwb3J0ZWRQYW5lbFBsdWdpbnM+PiwgcGFuZWwpID0+IHtcbiAgICBpZiAoaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbihwYW5lbC5pZCkpIHtcbiAgICAgIHBhbmVscy5wdXNoKHtcbiAgICAgICAgdmFsdWU6IHBhbmVsLmlkLFxuICAgICAgICBsYWJlbDogcGFuZWwubmFtZSxcbiAgICAgICAgaW1nVXJsOiBwYW5lbC5pbmZvLmxvZ29zLnNtYWxsLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYW5lbHM7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbihpZDogc3RyaW5nKTogaWQgaXMgU3VwcG9ydGVkUGFuZWxQbHVnaW5zIHtcbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgVElNRVNFUklFUzpcbiAgICBjYXNlIFRBQkxFOlxuICAgIGNhc2UgU1RBVDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0LCBCYWRnZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGVudW0gUHJvdmlzaW9uZWRSZXNvdXJjZSB7XG4gIENvbnRhY3RQb2ludCA9ICdjb250YWN0IHBvaW50JyxcbiAgVGVtcGxhdGUgPSAndGVtcGxhdGUnLFxuICBNdXRlVGltaW5nID0gJ211dGUgdGltaW5nJyxcbiAgQWxlcnRSdWxlID0gJ2FsZXJ0IHJ1bGUnLFxuICBSb290Tm90aWZpY2F0aW9uUG9saWN5ID0gJ3Jvb3Qgbm90aWZpY2F0aW9uIHBvbGljeScsXG59XG5cbmludGVyZmFjZSBQcm92aXNpb25pbmdBbGVydFByb3BzIHtcbiAgcmVzb3VyY2U6IFByb3Zpc2lvbmVkUmVzb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBQcm92aXNpb25pbmdBbGVydCA9ICh7IHJlc291cmNlIH06IFByb3Zpc2lvbmluZ0FsZXJ0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWxlcnQgdGl0bGU9e2BUaGlzICR7cmVzb3VyY2V9IGNhbm5vdCBiZSBlZGl0ZWQgdGhyb3VnaCB0aGUgVUlgfSBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgIFRoaXMge3Jlc291cmNlfSBoYXMgYmVlbiBwcm92aXNpb25lZCwgdGhhdCBtZWFucyBpdCB3YXMgY3JlYXRlZCBieSBjb25maWcuIFBsZWFzZSBjb250YWN0IHlvdXIgc2VydmVyIGFkbWluIHRvXG4gICAgICB1cGRhdGUgdGhpcyB7cmVzb3VyY2V9LlxuICAgIDwvQWxlcnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgUHJvdmlzaW9uaW5nQmFkZ2UgPSAoKSA9PiB7XG4gIHJldHVybiA8QmFkZ2UgdGV4dD17J1Byb3Zpc2lvbmVkJ30gY29sb3I9eydwdXJwbGUnfSAvPjtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuaW1wb3J0IHsgTGFiZWwsIFRvb2x0aXAsIElucHV0LCBJY29uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHF1ZXJ5U3RyaW5nPzogc3RyaW5nO1xuICBkZWZhdWx0UXVlcnlTdHJpbmc/OiBzdHJpbmc7XG4gIG9uRmlsdGVyQ2hhbmdlOiAoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNYXRjaGVyRmlsdGVyID0gKHsgY2xhc3NOYW1lLCBvbkZpbHRlckNoYW5nZSwgZGVmYXVsdFF1ZXJ5U3RyaW5nLCBxdWVyeVN0cmluZyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIG9uRmlsdGVyQ2hhbmdlKHRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHNlYXJjaEljb24gPSA8SWNvbiBuYW1lPXsnc2VhcmNoJ30gLz47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGFiZWw+XG4gICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgPHNwYW4+U2VhcmNoIGJ5IGxhYmVsPC9zcGFuPlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBGaWx0ZXIgYWxlcnRzIHVzaW5nIGxhYmVsIHF1ZXJ5aW5nLCBleDpcbiAgICAgICAgICAgICAgICA8cHJlPntge3NldmVyaXR5PVwiY3JpdGljYWxcIiwgaW5zdGFuY2U9flwiY2x1c3Rlci11cy0uK1wifWB9PC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IG5hbWU9XCJpbmZvLWNpcmNsZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFF1ZXJ5U3RyaW5nfVxuICAgICAgICB2YWx1ZT17cXVlcnlTdHJpbmd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoLXF1ZXJ5LWlucHV0XCJcbiAgICAgICAgcHJlZml4PXtzZWFyY2hJY29ufVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdpZHRofVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgaWNvbjogY3NzYFxuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICBgLFxuICBpbnB1dFdpZHRoOiBjc3NgXG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUGFnZVRvb2xiYXIsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIHwgUmVhY3QuUmVhY3ROb2RlW107XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHdyYXBJbkNvbnRlbnQ/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVWaWV3ZXJMYXlvdXQocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyB3cmFwSW5Db250ZW50ID0gdHJ1ZSwgY2hpbGRyZW4sIHRpdGxlIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRQYWdlU3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPFBhZ2VUb29sYmFyIHRpdGxlPXt0aXRsZX0gcGFnZUljb249XCJiZWxsXCIgb25Hb0JhY2s9eygpID0+IGxvY2F0aW9uU2VydmljZS5wdXNoKCcvYWxlcnRpbmcvbGlzdCcpfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57d3JhcEluQ29udGVudCA/IDxSdWxlVmlld2VyTGF5b3V0Q29udGVudCB7Li4ucHJvcHN9IC8+IDogY2hpbGRyZW59PC9kaXY+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG50eXBlIENvbnRlbnRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB8IFJlYWN0LlJlYWN0Tm9kZVtdO1xuICBwYWRkaW5nPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVWaWV3ZXJMYXlvdXRDb250ZW50KHsgY2hpbGRyZW4sIHBhZGRpbmcgPSAyIH06IENvbnRlbnRQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0Q29udGVudFN0eWxlcyhwYWRkaW5nKSk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PntjaGlsZHJlbn08L2Rpdj47XG59XG5cbmNvbnN0IGdldFBhZ2VTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygwLCAyLCAyKX07XG4gICAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnh4bH1weDtcbiAgICBgLFxuICB9O1xufTtcblxuY29uc3QgZ2V0Q29udGVudFN0eWxlcyA9IChwYWRkaW5nOiBudW1iZXIpID0+ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXBwZXI6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIud2Vha307XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZyhwYWRkaW5nKX07XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBEYXRlVGltZSwgZGF0ZVRpbWUsIEdyYWZhbmFUaGVtZTIsIFBhbmVsRGF0YSwgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBnZXREYXRhU291cmNlU3J2LCBQYW5lbFJlbmRlcmVyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBBbGVydCwgQ29kZUVkaXRvciwgRGF0ZVRpbWVQaWNrZXIsIExpbmtCdXR0b24sIHVzZVN0eWxlczIsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBQYW5lbE9wdGlvbnMgfSBmcm9tICdhcHAvcGx1Z2lucy9wYW5lbC90YWJsZS9tb2RlbHMuZ2VuJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IFRBQkxFLCBUSU1FU0VSSUVTIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uL0F1dGhvcml6ZSc7XG5pbXBvcnQgeyBQYW5lbFBsdWdpbnNCdXR0b25Hcm91cCwgU3VwcG9ydGVkUGFuZWxQbHVnaW5zIH0gZnJvbSAnLi4vUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAnO1xuXG50eXBlIFJ1bGVWaWV3ZXJWaXN1YWxpemF0aW9uUHJvcHMgPSB7XG4gIGRhdGE/OiBQYW5lbERhdGE7XG4gIHF1ZXJ5OiBBbGVydFF1ZXJ5O1xuICBvbkNoYW5nZVF1ZXJ5OiAocXVlcnk6IEFsZXJ0UXVlcnkpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBoZWFkZXJIZWlnaHQgPSA0O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZVZpZXdlclZpc3VhbGl6YXRpb24ocHJvcHM6IFJ1bGVWaWV3ZXJWaXN1YWxpemF0aW9uUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgZGF0YSwgcXVlcnksIG9uQ2hhbmdlUXVlcnkgfSA9IHByb3BzO1xuICBjb25zdCBkZWZhdWx0UGFuZWwgPSBpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkgPyBUQUJMRSA6IFRJTUVTRVJJRVM7XG4gIGNvbnN0IFtwYW5lbCwgc2V0UGFuZWxdID0gdXNlU3RhdGU8U3VwcG9ydGVkUGFuZWxQbHVnaW5zPihkZWZhdWx0UGFuZWwpO1xuICBjb25zdCBkc1NldHRpbmdzID0gZ2V0RGF0YVNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MocXVlcnkuZGF0YXNvdXJjZVVpZCk7XG4gIGNvbnN0IHJlbGF0aXZlVGltZVJhbmdlID0gcXVlcnkucmVsYXRpdmVUaW1lUmFuZ2U7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlPFBhbmVsT3B0aW9ucz4oe1xuICAgIGZyYW1lSW5kZXg6IDAsXG4gICAgc2hvd0hlYWRlcjogdHJ1ZSxcbiAgfSk7XG5cbiAgY29uc3Qgb25UaW1lQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKG5ld0RhdGVUaW1lOiBEYXRlVGltZSkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gZGF0ZVRpbWUoKS51bml4KCkgLSBuZXdEYXRlVGltZS51bml4KCk7XG5cbiAgICAgIGlmIChyZWxhdGl2ZVRpbWVSYW5nZSkge1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHJlbGF0aXZlVGltZVJhbmdlLmZyb20gLSByZWxhdGl2ZVRpbWVSYW5nZS50bztcbiAgICAgICAgb25DaGFuZ2VRdWVyeSh7XG4gICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgcmVsYXRpdmVUaW1lUmFuZ2U6IHsgZnJvbTogbm93ICsgaW50ZXJ2YWwsIHRvOiBub3cgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25DaGFuZ2VRdWVyeSwgcXVlcnksIHJlbGF0aXZlVGltZVJhbmdlXVxuICApO1xuXG4gIGNvbnN0IHNldERhdGVUaW1lID0gdXNlQ2FsbGJhY2soKHJlbGF0aXZlVGltZVJhbmdlVG86IG51bWJlcikgPT4ge1xuICAgIHJldHVybiByZWxhdGl2ZVRpbWVSYW5nZVRvID09PSAwID8gZGF0ZVRpbWUoKSA6IGRhdGVUaW1lKCkuc3VidHJhY3QocmVsYXRpdmVUaW1lUmFuZ2VUbywgJ3NlY29uZHMnKTtcbiAgfSwgW10pO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCFkc1NldHRpbmdzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxBbGVydCB0aXRsZT1cIkNvdWxkIG5vdCBmaW5kIGRhdGFzb3VyY2UgZm9yIHF1ZXJ5XCIgLz5cbiAgICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjI1MHB4XCJcbiAgICAgICAgICBsYW5ndWFnZT1cImpzb25cIlxuICAgICAgICAgIHNob3dMaW5lTnVtYmVycz17ZmFsc2V9XG4gICAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeShxdWVyeSwgbnVsbCwgJ1xcdCcpfVxuICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgIDxBdXRvU2l6ZXI+XG4gICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHtgUXVlcnkgJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0YVNvdXJjZX0+KHtkc1NldHRpbmdzLm5hbWV9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgeyFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkgJiYgcmVsYXRpdmVUaW1lUmFuZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlVGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3NldERhdGVUaW1lKHJlbGF0aXZlVGltZVJhbmdlLnRvKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25UaW1lQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIG1heERhdGU9e25ldyBEYXRlKCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDxQYW5lbFBsdWdpbnNCdXR0b25Hcm91cCBvbkNoYW5nZT17c2V0UGFuZWx9IHZhbHVlPXtwYW5lbH0gc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W0FjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNFeHBsb3JlXX0+XG4gICAgICAgICAgICAgICAgICAgIHshaXNFeHByZXNzaW9uUXVlcnkocXVlcnkubW9kZWwpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjb21wYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Y3JlYXRlRXhwbG9yZUxpbmsoZHNTZXR0aW5ncywgcXVlcnkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IGluIEV4cGxvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFBhbmVsUmVuZGVyZXJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIHRoZW1lLnNwYWNpbmcuZ3JpZFNpemUgKiBoZWFkZXJIZWlnaHR9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgcGx1Z2luSWQ9e3BhbmVsfVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICBvbk9wdGlvbnNDaGFuZ2U9e3NldE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0F1dG9TaXplcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXhwbG9yZUxpbmsoc2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBxdWVyeTogQWxlcnRRdWVyeSk6IHN0cmluZyB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gc2V0dGluZ3M7XG4gIGNvbnN0IHsgcmVmSWQsIC4uLnJlc3QgfSA9IHF1ZXJ5Lm1vZGVsO1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IHsgLi4ucmVzdCwgZGF0YXNvdXJjZTogbmFtZSB9O1xuXG4gIHJldHVybiB1cmxVdGlsLnJlbmRlclVybChgJHtjb25maWcuYXBwU3ViVXJsfS9leHBsb3JlYCwge1xuICAgIGxlZnQ6IEpTT04uc3RyaW5naWZ5KFsnbm93LTFoJywgJ25vdycsIG5hbWUsIHF1ZXJ5UGFyYW1zXSksXG4gIH0pO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgYCxcbiAgICBoZWFkZXI6IGNzc2BcbiAgICAgIGhlaWdodDogJHt0aGVtZS5zcGFjaW5nKGhlYWRlckhlaWdodCl9O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGAsXG4gICAgcmVmSWQ6IGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5saW5rfTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYCxcbiAgICBkYXRhU291cmNlOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgYCxcbiAgICBhY3Rpb25zOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICAgIHNwYWNpbmc6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLCAxLCAwLCAwKX07XG4gICAgYCxcbiAgICBlcnJvck1lc3NhZ2U6IGNzc2BcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhL3NyYyc7XG5pbXBvcnQgeyBMYWJlbCwgUmFkaW9CdXR0b25Hcm91cCwgVGFnLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYUFsZXJ0U3RhdGUsIFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmV4cG9ydCB0eXBlIEluc3RhbmNlU3RhdGVGaWx0ZXIgPSBHcmFmYW5hQWxlcnRTdGF0ZSB8IFByb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nIHwgUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBmaWx0ZXJUeXBlOiAnZ3JhZmFuYScgfCAncHJvbWV0aGV1cyc7XG4gIHN0YXRlRmlsdGVyPzogSW5zdGFuY2VTdGF0ZUZpbHRlcjtcbiAgb25TdGF0ZUZpbHRlckNoYW5nZTogKHZhbHVlPzogSW5zdGFuY2VTdGF0ZUZpbHRlcikgPT4gdm9pZDtcbiAgaXRlbVBlclN0YXRlU3RhdHM/OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyID0gKHtcbiAgY2xhc3NOYW1lLFxuICBvblN0YXRlRmlsdGVyQ2hhbmdlLFxuICBzdGF0ZUZpbHRlcixcbiAgZmlsdGVyVHlwZSxcbiAgaXRlbVBlclN0YXRlU3RhdHMsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgZ2V0T3B0aW9uQ29tcG9uZW50ID0gKHN0YXRlOiBJbnN0YW5jZVN0YXRlRmlsdGVyKSA9PiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIEluc3RhbmNlU3RhdGVDb3VudGVyKCkge1xuICAgICAgcmV0dXJuIGl0ZW1QZXJTdGF0ZVN0YXRzICYmIGl0ZW1QZXJTdGF0ZVN0YXRzW3N0YXRlXSA/IChcbiAgICAgICAgPFRhZyBuYW1lPXtpdGVtUGVyU3RhdGVTdGF0c1tzdGF0ZV0udG9GaXhlZCgwKX0gY29sb3JJbmRleD17OX0gY2xhc3NOYW1lPXtzdHlsZXMudGFnfSAvPlxuICAgICAgKSA6IG51bGw7XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBncmFmYW5hT3B0aW9ucyA9IE9iamVjdC52YWx1ZXMoR3JhZmFuYUFsZXJ0U3RhdGUpLm1hcCgoc3RhdGUpID0+ICh7XG4gICAgbGFiZWw6IHN0YXRlLFxuICAgIHZhbHVlOiBzdGF0ZSxcbiAgICBjb21wb25lbnQ6IGdldE9wdGlvbkNvbXBvbmVudChzdGF0ZSksXG4gIH0pKTtcblxuICBjb25zdCBwcm9tT3B0aW9uVmFsdWVzID0gW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmcsIFByb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nXSBhcyBjb25zdDtcbiAgY29uc3QgcHJvbU9wdGlvbnMgPSBwcm9tT3B0aW9uVmFsdWVzLm1hcCgoc3RhdGUpID0+ICh7XG4gICAgbGFiZWw6IGNhcGl0YWxpemUoc3RhdGUpLFxuICAgIHZhbHVlOiBzdGF0ZSxcbiAgICBjb21wb25lbnQ6IGdldE9wdGlvbkNvbXBvbmVudChzdGF0ZSksXG4gIH0pKTtcblxuICBjb25zdCBzdGF0ZU9wdGlvbnMgPSBmaWx0ZXJUeXBlID09PSAnZ3JhZmFuYScgPyBncmFmYW5hT3B0aW9ucyA6IHByb21PcHRpb25zO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZGF0YS10ZXN0aWQ9XCJhbGVydC1pbnN0YW5jZS1zdGF0ZS1maWx0ZXJcIj5cbiAgICAgIDxMYWJlbD5TdGF0ZTwvTGFiZWw+XG4gICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICBvcHRpb25zPXtzdGF0ZU9wdGlvbnN9XG4gICAgICAgIHZhbHVlPXtzdGF0ZUZpbHRlcn1cbiAgICAgICAgb25DaGFuZ2U9e29uU3RhdGVGaWx0ZXJDaGFuZ2V9XG4gICAgICAgIG9uQ2xpY2s9eyh2KSA9PiB7XG4gICAgICAgICAgaWYgKHYgPT09IHN0YXRlRmlsdGVyKSB7XG4gICAgICAgICAgICBvblN0YXRlRmlsdGVyQ2hhbmdlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIHRhZzogY3NzYFxuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLjI1LCAwLjUpfTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBDbGlwYm9hcmRCdXR0b24sIENvbmZpcm1Nb2RhbCwgSG9yaXpvbnRhbEdyb3VwLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlQXBwTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBSdWxlc1NvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgdXNlSXNSdWxlRWRpdGFibGUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VJc1J1bGVFZGl0YWJsZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZUhpc3RvcnlNb2RhbCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVN0YXRlSGlzdG9yeU1vZGFsJztcbmltcG9ydCB7IGRlbGV0ZVJ1bGVBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEFsZXJ0bWFuYWdlckJ5VWlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IEFubm90YXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0UnVsZXNTb3VyY2VOYW1lLCBpc0Nsb3VkUnVsZXNTb3VyY2UsIGlzR3JhZmFuYVJ1bGVzU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBjcmVhdGVFeHBsb3JlTGluaywgY3JlYXRlVmlld0xpbmssIG1ha2VSdWxlQmFzZWRTaWxlbmNlTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0ICogYXMgcnVsZUlkIGZyb20gJy4uLy4uL3V0aWxzL3J1bGUtaWQnO1xuaW1wb3J0IHsgaXNGZWRlcmF0ZWRSdWxlR3JvdXAsIGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnM6IEZDPFByb3BzPiA9ICh7IHJ1bGUsIHJ1bGVzU291cmNlIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IG5vdGlmeUFwcCA9IHVzZUFwcE5vdGlmaWNhdGlvbigpO1xuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgeyBuYW1lc3BhY2UsIGdyb3VwLCBydWxlclJ1bGUgfSA9IHJ1bGU7XG4gIGNvbnN0IFtydWxlVG9EZWxldGUsIHNldFJ1bGVUb0RlbGV0ZV0gPSB1c2VTdGF0ZTxDb21iaW5lZFJ1bGU+KCk7XG4gIGNvbnN0IGFsZXJ0SWQgPSBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZS5ydWxlclJ1bGUpID8gcnVsZS5ydWxlclJ1bGUuZ3JhZmFuYV9hbGVydC5pZCA/PyAnJyA6ICcnO1xuICBjb25zdCB7IFN0YXRlSGlzdG9yeU1vZGFsLCBzaG93U3RhdGVIaXN0b3J5TW9kYWwgfSA9IHVzZVN0YXRlSGlzdG9yeU1vZGFsKGFsZXJ0SWQpO1xuXG4gIGNvbnN0IGFsZXJ0bWFuYWdlclNvdXJjZU5hbWUgPSBpc0dyYWZhbmFSdWxlc1NvdXJjZShydWxlc1NvdXJjZSlcbiAgICA/IHJ1bGVzU291cmNlXG4gICAgOiBnZXRBbGVydG1hbmFnZXJCeVVpZChydWxlc1NvdXJjZS5qc29uRGF0YS5hbGVydG1hbmFnZXJVaWQpPy5uYW1lO1xuICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSBnZXRSdWxlc1NvdXJjZU5hbWUocnVsZXNTb3VyY2UpO1xuXG4gIGNvbnN0IGhhc0V4cGxvcmVQZXJtaXNzaW9uID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNFeHBsb3JlKTtcbiAgY29uc3QgaXNQcm92aXNpb25lZCA9IGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlLnJ1bGVyUnVsZSkgJiYgQm9vbGVhbihydWxlLnJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0LnByb3ZlbmFuY2UpO1xuXG4gIGNvbnN0IGxlZnRCdXR0b25zOiBKU1guRWxlbWVudFtdID0gW107XG4gIGNvbnN0IHJpZ2h0QnV0dG9uczogSlNYLkVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0IGlzRmVkZXJhdGVkID0gaXNGZWRlcmF0ZWRSdWxlR3JvdXAoZ3JvdXApO1xuICBjb25zdCB7IGlzRWRpdGFibGUsIGlzUmVtb3ZhYmxlIH0gPSB1c2VJc1J1bGVFZGl0YWJsZShydWxlc1NvdXJjZU5hbWUsIHJ1bGVyUnVsZSk7XG4gIGNvbnN0IHJldHVyblRvID0gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2g7XG4gIGNvbnN0IGlzVmlld01vZGUgPSBpblZpZXdNb2RlKGxvY2F0aW9uLnBhdGhuYW1lKTtcblxuICBjb25zdCBkZWxldGVSdWxlID0gKCkgPT4ge1xuICAgIGlmIChydWxlVG9EZWxldGUgJiYgcnVsZVRvRGVsZXRlLnJ1bGVyUnVsZSkge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC5mcm9tUnVsZXJSdWxlKFxuICAgICAgICBnZXRSdWxlc1NvdXJjZU5hbWUocnVsZVRvRGVsZXRlLm5hbWVzcGFjZS5ydWxlc1NvdXJjZSksXG4gICAgICAgIHJ1bGVUb0RlbGV0ZS5uYW1lc3BhY2UubmFtZSxcbiAgICAgICAgcnVsZVRvRGVsZXRlLmdyb3VwLm5hbWUsXG4gICAgICAgIHJ1bGVUb0RlbGV0ZS5ydWxlclJ1bGVcbiAgICAgICk7XG5cbiAgICAgIGRpc3BhdGNoKGRlbGV0ZVJ1bGVBY3Rpb24oaWRlbnRpZmllciwgeyBuYXZpZ2F0ZVRvOiBpc1ZpZXdNb2RlID8gJy9hbGVydGluZy9saXN0JyA6IHVuZGVmaW5lZCB9KSk7XG4gICAgICBzZXRSdWxlVG9EZWxldGUodW5kZWZpbmVkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYnVpbGRTaGFyZVVybCA9ICgpID0+IHtcbiAgICBpZiAoaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgICAgY29uc3QgeyBhcHBVcmwsIGFwcFN1YlVybCB9ID0gY29uZmlnO1xuICAgICAgY29uc3QgYmFzZVVybCA9IGFwcFN1YlVybCAhPT0gJycgPyBgJHthcHBVcmx9JHthcHBTdWJVcmx9L2AgOiBjb25maWcuYXBwVXJsO1xuICAgICAgY29uc3QgcnVsZVVybCA9IGAke2VuY29kZVVSSUNvbXBvbmVudChydWxlc1NvdXJjZS5uYW1lKX0vJHtlbmNvZGVVUklDb21wb25lbnQocnVsZS5uYW1lKX1gO1xuICAgICAgcmV0dXJuIGAke2Jhc2VVcmx9YWxlcnRpbmcvJHtydWxlVXJsfS9maW5kYDtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXTtcbiAgfTtcblxuICAvLyBleHBsb3JlIGRvZXMgbm90IHN1cHBvcnQgZ3JhZmFuYSBydWxlIHF1ZXJpZXMgYXRtXG4gIC8vIG5laXRoZXIgZG8gXCJmZWRlcmF0ZWQgcnVsZXNcIlxuICBpZiAoaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSAmJiBoYXNFeHBsb3JlUGVybWlzc2lvbiAmJiAhaXNGZWRlcmF0ZWQpIHtcbiAgICBsZWZ0QnV0dG9ucy5wdXNoKFxuICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGtleT1cImV4cGxvcmVcIlxuICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgIGljb249XCJjaGFydC1saW5lXCJcbiAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgIGhyZWY9e2NyZWF0ZUV4cGxvcmVMaW5rKHJ1bGVzU291cmNlLm5hbWUsIHJ1bGUucXVlcnkpfVxuICAgICAgPlxuICAgICAgICBTZWUgZ3JhcGhcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG4gIGlmIChydWxlLmFubm90YXRpb25zW0Fubm90YXRpb24ucnVuYm9va1VSTF0pIHtcbiAgICBsZWZ0QnV0dG9ucy5wdXNoKFxuICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGtleT1cInJ1bmJvb2tcIlxuICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgIGljb249XCJib29rXCJcbiAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgIGhyZWY9e3J1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5ydW5ib29rVVJMXX1cbiAgICAgID5cbiAgICAgICAgVmlldyBydW5ib29rXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuICBpZiAocnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLmRhc2hib2FyZFVJRF0pIHtcbiAgICBjb25zdCBkYXNoYm9hcmRVSUQgPSBydWxlLmFubm90YXRpb25zW0Fubm90YXRpb24uZGFzaGJvYXJkVUlEXTtcbiAgICBpZiAoZGFzaGJvYXJkVUlEKSB7XG4gICAgICBsZWZ0QnV0dG9ucy5wdXNoKFxuICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAga2V5PVwiZGFzaGJvYXJkXCJcbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgaWNvbj1cImFwcHNcIlxuICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgIGhyZWY9e2BkLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhc2hib2FyZFVJRCl9YH1cbiAgICAgICAgPlxuICAgICAgICAgIEdvIHRvIGRhc2hib2FyZFxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICApO1xuICAgICAgY29uc3QgcGFuZWxJZCA9IHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5wYW5lbElEXTtcbiAgICAgIGlmIChwYW5lbElkKSB7XG4gICAgICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgIGtleT1cInBhbmVsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGljb249XCJhcHBzXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj17YGQvJHtlbmNvZGVVUklDb21wb25lbnQoZGFzaGJvYXJkVUlEKX0/dmlld1BhbmVsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhbmVsSWQpfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR28gdG8gcGFuZWxcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFsZXJ0bWFuYWdlclNvdXJjZU5hbWUgJiYgY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5BbGVydGluZ0luc3RhbmNlQ3JlYXRlLCBjb250ZXh0U3J2LmlzRWRpdG9yKSkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwic2lsZW5jZVwiXG4gICAgICAgIGljb249XCJiZWxsLXNsYXNoXCJcbiAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgIGhyZWY9e21ha2VSdWxlQmFzZWRTaWxlbmNlTGluayhhbGVydG1hbmFnZXJTb3VyY2VOYW1lLCBydWxlKX1cbiAgICAgID5cbiAgICAgICAgU2lsZW5jZVxuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAoYWxlcnRJZCkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8RnJhZ21lbnQga2V5PVwiaGlzdG9yeVwiPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSBzaXplPVwieHNcIiBpY29uPVwiaGlzdG9yeVwiIG9uQ2xpY2s9eygpID0+IHNob3dTdGF0ZUhpc3RvcnlNb2RhbCgpfT5cbiAgICAgICAgICBTaG93IHN0YXRlIGhpc3RvcnlcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHtTdGF0ZUhpc3RvcnlNb2RhbH1cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghaXNWaWV3TW9kZSkge1xuICAgIHJpZ2h0QnV0dG9ucy5wdXNoKFxuICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGtleT1cInZpZXdcIlxuICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgaWNvbj1cImV5ZVwiXG4gICAgICAgIGhyZWY9e2NyZWF0ZVZpZXdMaW5rKHJ1bGVzU291cmNlLCBydWxlLCByZXR1cm5Ubyl9XG4gICAgICA+XG4gICAgICAgIFZpZXdcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGlzRWRpdGFibGUgJiYgcnVsZXJSdWxlICYmICFpc0ZlZGVyYXRlZCAmJiAhaXNQcm92aXNpb25lZCkge1xuICAgIGNvbnN0IHNvdXJjZU5hbWUgPSBnZXRSdWxlc1NvdXJjZU5hbWUocnVsZXNTb3VyY2UpO1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBydWxlSWQuZnJvbVJ1bGVyUnVsZShzb3VyY2VOYW1lLCBuYW1lc3BhY2UubmFtZSwgZ3JvdXAubmFtZSwgcnVsZXJSdWxlKTtcblxuICAgIGNvbnN0IGVkaXRVUkwgPSB1cmxVdGlsLnJlbmRlclVybChcbiAgICAgIGAke2NvbmZpZy5hcHBTdWJVcmx9L2FsZXJ0aW5nLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJ1bGVJZC5zdHJpbmdpZnlJZGVudGlmaWVyKGlkZW50aWZpZXIpKX0vZWRpdGAsXG4gICAgICB7XG4gICAgICAgIHJldHVyblRvLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoaXNWaWV3TW9kZSkge1xuICAgICAgcmlnaHRCdXR0b25zLnB1c2goXG4gICAgICAgIDxDbGlwYm9hcmRCdXR0b25cbiAgICAgICAgICBrZXk9XCJjb3B5XCJcbiAgICAgICAgICBvbkNsaXBib2FyZENvcHk9eygpID0+IHtcbiAgICAgICAgICAgIG5vdGlmeUFwcC5zdWNjZXNzKCdVUkwgY29waWVkIScpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGlwYm9hcmRFcnJvcj17KGNvcGllZFRleHQpID0+IHtcbiAgICAgICAgICAgIG5vdGlmeUFwcC5lcnJvcignRXJyb3Igd2hpbGUgY29weWluZyBVUkwnLCBjb3BpZWRUZXh0KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgZ2V0VGV4dD17YnVpbGRTaGFyZVVybH1cbiAgICAgICAgPlxuICAgICAgICAgIENvcHkgbGluayB0byBydWxlXG4gICAgICAgIDwvQ2xpcGJvYXJkQnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByaWdodEJ1dHRvbnMucHVzaChcbiAgICAgIDxMaW5rQnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSBzaXplPVwieHNcIiBrZXk9XCJlZGl0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGljb249XCJwZW5cIiBocmVmPXtlZGl0VVJMfT5cbiAgICAgICAgRWRpdFxuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAoaXNSZW1vdmFibGUgJiYgcnVsZXJSdWxlICYmICFpc0ZlZGVyYXRlZCAmJiAhaXNQcm92aXNpb25lZCkge1xuICAgIHJpZ2h0QnV0dG9ucy5wdXNoKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGtleT1cImRlbGV0ZVwiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZVRvRGVsZXRlKHJ1bGUpfVxuICAgICAgPlxuICAgICAgICBEZWxldGVcbiAgICAgIDwvQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAobGVmdEJ1dHRvbnMubGVuZ3RoIHx8IHJpZ2h0QnV0dG9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgd2lkdGg9XCJhdXRvXCI+e2xlZnRCdXR0b25zLmxlbmd0aCA/IGxlZnRCdXR0b25zIDogPGRpdiAvPn08L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIHdpZHRoPVwiYXV0b1wiPntyaWdodEJ1dHRvbnMubGVuZ3RoID8gcmlnaHRCdXR0b25zIDogPGRpdiAvPn08L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshIXJ1bGVUb0RlbGV0ZSAmJiAoXG4gICAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgICAgdGl0bGU9XCJEZWxldGUgcnVsZVwiXG4gICAgICAgICAgICBib2R5PVwiRGVsZXRpbmcgdGhpcyBydWxlIHdpbGwgcGVybWFuZW50bHkgcmVtb3ZlIGl0IGZyb20geW91ciBhbGVydCBydWxlIGxpc3QuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBydWxlP1wiXG4gICAgICAgICAgICBjb25maXJtVGV4dD1cIlllcywgZGVsZXRlXCJcbiAgICAgICAgICAgIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgICBvbkNvbmZpcm09e2RlbGV0ZVJ1bGV9XG4gICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFJ1bGVUb0RlbGV0ZSh1bmRlZmluZWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBpblZpZXdNb2RlKHBhdGhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGhuYW1lLmVuZHNXaXRoKCcvdmlldycpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgYCxcbiAgYnV0dG9uOiBjc3NgXG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBBbm5vdGF0aW9uRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vQW5ub3RhdGlvbkRldGFpbHNGaWVsZCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFubm90YXRpb25zOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlRGV0YWlsc0Fubm90YXRpb25zKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgYW5ub3RhdGlvbnMgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgaWYgKGFubm90YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFubm90YXRpb25zfT5cbiAgICAgIHthbm5vdGF0aW9ucy5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxuICAgICAgICA8QW5ub3RhdGlvbkRldGFpbHNGaWVsZCBrZXk9e2tleX0gYW5ub3RhdGlvbktleT17a2V5fSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgYW5ub3RhdGlvbnM6IGNzc2BcbiAgICBtYXJnaW4tdG9wOiA0NnB4O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9FeHByZXNzaW9uRGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBpc0Nsb3VkUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJ1bGU6IENvbWJpbmVkUnVsZTtcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVEZXRhaWxzRGF0YVNvdXJjZXMocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyBydWxlc1NvdXJjZSwgcnVsZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBkYXRhU291cmNlczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IGljb24/OiBzdHJpbmcgfT4gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgICAgcmV0dXJuIFt7IG5hbWU6IHJ1bGVzU291cmNlLm5hbWUsIGljb246IHJ1bGVzU291cmNlLm1ldGEuaW5mby5sb2dvcy5zbWFsbCB9XTtcbiAgICB9XG5cbiAgICBpZiAoaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUucnVsZXJSdWxlKSkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBydWxlLnJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0O1xuICAgICAgY29uc3QgdW5pcXVlID0gZGF0YS5yZWR1Y2UoKGRhdGFTb3VyY2VzLCBxdWVyeSkgPT4ge1xuICAgICAgICBjb25zdCBkcyA9IGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpO1xuXG4gICAgICAgIGlmICghZHMgfHwgZHMudWlkID09PSBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCkge1xuICAgICAgICAgIHJldHVybiBkYXRhU291cmNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFTb3VyY2VzW2RzLm5hbWVdID0geyBuYW1lOiBkcy5uYW1lLCBpY29uOiBkcy5tZXRhLmluZm8ubG9nb3Muc21hbGwgfTtcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2VzO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgeyBuYW1lOiBzdHJpbmc7IGljb24/OiBzdHJpbmcgfT4pO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh1bmlxdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfSwgW3J1bGUsIHJ1bGVzU291cmNlXSk7XG5cbiAgaWYgKGRhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiRGF0YSBzb3VyY2VcIj5cbiAgICAgIHtkYXRhU291cmNlcy5tYXAoKHsgbmFtZSwgaWNvbiB9LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17bmFtZX0+XG4gICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9e2Ake25hbWV9IGRhdGFzb3VyY2UgbG9nb2B9IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTb3VyY2VJY29ufSBzcmM9e2ljb259IC8+eycgJ31cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9EZXRhaWxzRmllbGQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICBjb25zdCBzaXplID0gdGhlbWUuc3BhY2luZygyKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGFTb3VyY2VJY29uOiBjc3NgXG4gICAgICB3aWR0aDogJHtzaXplfTtcbiAgICAgIGhlaWdodDogJHtzaXplfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBpc0Nsb3VkUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnLi4vRXhwcmVzc2lvbic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJ1bGU6IENvbWJpbmVkUnVsZTtcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlO1xuICBhbm5vdGF0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZURldGFpbHNFeHByZXNzaW9uKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgYW5ub3RhdGlvbnMsIHJ1bGVzU291cmNlLCBydWxlIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgaWYgKCFpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJFeHByZXNzaW9uXCIgaG9yaXpvbnRhbD17dHJ1ZX0gY2xhc3NOYW1lPXtjeCh7IFtzdHlsZXMuZXhwclJvd106ICEhYW5ub3RhdGlvbnMubGVuZ3RoIH0pfT5cbiAgICAgIDxFeHByZXNzaW9uIGV4cHJlc3Npb249e3J1bGUucXVlcnl9IHJ1bGVzU291cmNlPXtydWxlc1NvdXJjZX0gLz5cbiAgICA8L0RldGFpbHNGaWVsZD5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgZXhwclJvdzogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDQ2cHg7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29tYmluZWRSdWxlR3JvdXAgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5cbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cDtcbn1cblxuY29uc3QgUnVsZURldGFpbHNGZWRlcmF0ZWRTb3VyY2VzOiBGQzxQcm9wcz4gPSAoeyBncm91cCB9KSA9PiB7XG4gIGNvbnN0IHNvdXJjZVRlbmFudHMgPSBncm91cC5zb3VyY2VfdGVuYW50cyA/PyBbXTtcblxuICByZXR1cm4gKFxuICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJUZW5hbnQgc291cmNlc1wiPlxuICAgICAgPD5cbiAgICAgICAge3NvdXJjZVRlbmFudHMubWFwKCh0ZW5hbnQpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17dGVuYW50fT57dGVuYW50fTwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvPlxuICAgIDwvRGV0YWlsc0ZpZWxkPlxuICApO1xufTtcblxuZXhwb3J0IHsgUnVsZURldGFpbHNGZWRlcmF0ZWRTb3VyY2VzIH07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGNvdW50QnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IExpbmtCdXR0b24sIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE1hdGNoZXJGaWx0ZXIgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9NYXRjaGVyRmlsdGVyJztcbmltcG9ydCB7XG4gIEFsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlcixcbiAgSW5zdGFuY2VTdGF0ZUZpbHRlcixcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9BbGVydEluc3RhbmNlU3RhdGVGaWx0ZXInO1xuaW1wb3J0IHsgbGFiZWxzTWF0Y2hNYXRjaGVycywgcGFyc2VNYXRjaGVycyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBjcmVhdGVWaWV3TGluaywgc29ydEFsZXJ0cyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnYXBwL3BsdWdpbnMvcGFuZWwvYWxlcnRsaXN0L3R5cGVzJztcbmltcG9ydCB7IEFsZXJ0LCBDb21iaW5lZFJ1bGUsIFBhZ2luYXRpb25Qcm9wcyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IG1hcFN0YXRlV2l0aFJlYXNvblRvQmFzZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSwgaXNHcmFmYW5hUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vRGV0YWlsc0ZpZWxkJztcblxuaW1wb3J0IHsgQWxlcnRJbnN0YW5jZXNUYWJsZSB9IGZyb20gJy4vQWxlcnRJbnN0YW5jZXNUYWJsZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGU6IENvbWJpbmVkUnVsZTtcbiAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Qcm9wcztcbiAgaXRlbXNEaXNwbGF5TGltaXQ/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBTaG93TW9yZVN0YXRzIHtcbiAgdG90YWxJdGVtc0NvdW50OiBudW1iZXI7XG4gIHZpc2libGVJdGVtc0NvdW50OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIFNob3dNb3JlSW5zdGFuY2VzKHByb3BzOiB7IHJ1bGVWaWV3UGFnZUxpbms6IHN0cmluZzsgc3RhdHM6IFNob3dNb3JlU3RhdHMgfSkge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3QgeyBydWxlVmlld1BhZ2VMaW5rLCBzdGF0cyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclJvd30+XG4gICAgICA8ZGl2PlxuICAgICAgICBTaG93aW5nIHtzdGF0cy52aXNpYmxlSXRlbXNDb3VudH0gb3V0IG9mIHtzdGF0cy50b3RhbEl0ZW1zQ291bnR9IGluc3RhbmNlc1xuICAgICAgPC9kaXY+XG4gICAgICB7cnVsZVZpZXdQYWdlTGluayAmJiAoXG4gICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e3J1bGVWaWV3UGFnZUxpbmt9IHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICBTaG93IGFsbCB7c3RhdHMudG90YWxJdGVtc0NvdW50fSBhbGVydCBpbnN0YW5jZXNcbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qge1xuICAgIHJ1bGU6IHsgcHJvbVJ1bGUsIG5hbWVzcGFjZSB9LFxuICAgIGl0ZW1zRGlzcGxheUxpbWl0ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIHBhZ2luYXRpb24sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbcXVlcnlTdHJpbmcsIHNldFF1ZXJ5U3RyaW5nXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2FsZXJ0U3RhdGUsIHNldEFsZXJ0U3RhdGVdID0gdXNlU3RhdGU8SW5zdGFuY2VTdGF0ZUZpbHRlcj4oKTtcblxuICAvLyBUaGlzIGtleSBpcyB1c2VkIHRvIGZvcmNlIGEgcmVyZW5kZXIgb24gdGhlIGlucHV0cyB3aGVuIHRoZSBmaWx0ZXJzIGFyZSBjbGVhcmVkXG4gIGNvbnN0IFtmaWx0ZXJLZXldID0gdXNlU3RhdGU8bnVtYmVyPihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcbiAgY29uc3QgcXVlcnlTdHJpbmdLZXkgPSBgcXVlcnlTdHJpbmctJHtmaWx0ZXJLZXl9YDtcblxuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBzdGF0ZUZpbHRlclR5cGUgPSBpc0dyYWZhbmFSdWxlc1NvdXJjZShuYW1lc3BhY2UucnVsZXNTb3VyY2UpID8gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSA6ICdwcm9tZXRoZXVzJztcblxuICBjb25zdCBhbGVydHMgPSB1c2VNZW1vKFxuICAgICgpOiBBbGVydFtdID0+XG4gICAgICBpc0FsZXJ0aW5nUnVsZShwcm9tUnVsZSkgJiYgcHJvbVJ1bGUuYWxlcnRzPy5sZW5ndGhcbiAgICAgICAgPyBmaWx0ZXJBbGVydHMocXVlcnlTdHJpbmcsIGFsZXJ0U3RhdGUsIHNvcnRBbGVydHMoU29ydE9yZGVyLkltcG9ydGFuY2UsIHByb21SdWxlLmFsZXJ0cykpXG4gICAgICAgIDogW10sXG4gICAgW3Byb21SdWxlLCBhbGVydFN0YXRlLCBxdWVyeVN0cmluZ11cbiAgKTtcblxuICBpZiAoIWlzQWxlcnRpbmdSdWxlKHByb21SdWxlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgdmlzaWJsZUluc3RhbmNlcyA9IGFsZXJ0cy5zbGljZSgwLCBpdGVtc0Rpc3BsYXlMaW1pdCk7XG5cbiAgY29uc3QgY291bnRBbGxCeVN0YXRlID0gY291bnRCeShwcm9tUnVsZS5hbGVydHMsIChhbGVydCkgPT4gbWFwU3RhdGVXaXRoUmVhc29uVG9CYXNlU3RhdGUoYWxlcnQuc3RhdGUpKTtcbiAgY29uc3QgaGlkZGVuSXRlbXNDb3VudCA9IGFsZXJ0cy5sZW5ndGggLSB2aXNpYmxlSW5zdGFuY2VzLmxlbmd0aDtcblxuICBjb25zdCBzdGF0czogU2hvd01vcmVTdGF0cyA9IHtcbiAgICB0b3RhbEl0ZW1zQ291bnQ6IGFsZXJ0cy5sZW5ndGgsXG4gICAgdmlzaWJsZUl0ZW1zQ291bnQ6IHZpc2libGVJbnN0YW5jZXMubGVuZ3RoLFxuICB9O1xuXG4gIGNvbnN0IHJ1bGVWaWV3UGFnZUxpbmsgPSBjcmVhdGVWaWV3TGluayhuYW1lc3BhY2UucnVsZXNTb3VyY2UsIHByb3BzLnJ1bGUsIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoKTtcblxuICBjb25zdCBmb290ZXJSb3cgPSBoaWRkZW5JdGVtc0NvdW50ID8gKFxuICAgIDxTaG93TW9yZUluc3RhbmNlcyBzdGF0cz17c3RhdHN9IHJ1bGVWaWV3UGFnZUxpbms9e3J1bGVWaWV3UGFnZUxpbmt9IC8+XG4gICkgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiTWF0Y2hpbmcgaW5zdGFuY2VzXCIgaG9yaXpvbnRhbD17dHJ1ZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3csIHN0eWxlcy5zcGFjZUJldHdlZW4pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICA8TWF0Y2hlckZpbHRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucm93Q2hpbGR9XG4gICAgICAgICAgICBrZXk9e3F1ZXJ5U3RyaW5nS2V5fVxuICAgICAgICAgICAgZGVmYXVsdFF1ZXJ5U3RyaW5nPXtxdWVyeVN0cmluZ31cbiAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXsodmFsdWUpID0+IHNldFF1ZXJ5U3RyaW5nKHZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBbGVydEluc3RhbmNlU3RhdGVGaWx0ZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfVxuICAgICAgICAgICAgZmlsdGVyVHlwZT17c3RhdGVGaWx0ZXJUeXBlfVxuICAgICAgICAgICAgc3RhdGVGaWx0ZXI9e2FsZXJ0U3RhdGV9XG4gICAgICAgICAgICBvblN0YXRlRmlsdGVyQ2hhbmdlPXtzZXRBbGVydFN0YXRlfVxuICAgICAgICAgICAgaXRlbVBlclN0YXRlU3RhdHM9e2NvdW50QWxsQnlTdGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8QWxlcnRJbnN0YW5jZXNUYWJsZSBpbnN0YW5jZXM9e3Zpc2libGVJbnN0YW5jZXN9IHBhZ2luYXRpb249e3BhZ2luYXRpb259IGZvb3RlclJvdz17Zm9vdGVyUm93fSAvPlxuICAgIDwvRGV0YWlsc0ZpZWxkPlxuICApO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJBbGVydHMoXG4gIGFsZXJ0SW5zdGFuY2VMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBhbGVydEluc3RhbmNlU3RhdGU6IEluc3RhbmNlU3RhdGVGaWx0ZXIgfCB1bmRlZmluZWQsXG4gIGFsZXJ0czogQWxlcnRbXVxuKTogQWxlcnRbXSB7XG4gIGxldCBmaWx0ZXJlZEFsZXJ0cyA9IFsuLi5hbGVydHNdO1xuICBpZiAoYWxlcnRJbnN0YW5jZUxhYmVsKSB7XG4gICAgY29uc3QgbWF0Y2hlcnMgPSBwYXJzZU1hdGNoZXJzKGFsZXJ0SW5zdGFuY2VMYWJlbCB8fCAnJyk7XG4gICAgZmlsdGVyZWRBbGVydHMgPSBmaWx0ZXJlZEFsZXJ0cy5maWx0ZXIoKHsgbGFiZWxzIH0pID0+IGxhYmVsc01hdGNoTWF0Y2hlcnMobGFiZWxzLCBtYXRjaGVycykpO1xuICB9XG4gIGlmIChhbGVydEluc3RhbmNlU3RhdGUpIHtcbiAgICBmaWx0ZXJlZEFsZXJ0cyA9IGZpbHRlcmVkQWxlcnRzLmZpbHRlcigoYWxlcnQpID0+IHtcbiAgICAgIHJldHVybiBtYXBTdGF0ZVdpdGhSZWFzb25Ub0Jhc2VTdGF0ZShhbGVydC5zdGF0ZSkgPT09IGFsZXJ0SW5zdGFuY2VTdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEFsZXJ0cztcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmbGV4Um93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIHNwYWNlQmV0d2VlbjogY3NzYFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGAsXG4gICAgcm93Q2hpbGQ6IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIGZvb3RlclJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBUb29sdGlwLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW50ZXJmYWNlIFByb20ge1xuICBydWxlOiBSdWxlO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZUhlYWx0aDogRkM8UHJvbT4gPSAoeyBydWxlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB1c2VTdHlsZXMyKGdldFN0eWxlKTtcbiAgaWYgKHJ1bGUuaGVhbHRoID09PSAnZXJyJyB8fCBydWxlLmhlYWx0aCA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCB0aGVtZT1cImVycm9yXCIgY29udGVudD17cnVsZS5sYXN0RXJyb3IgfHwgJ05vIGVycm9yIG1lc3NhZ2UgcHJvdmlkZWQuJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53YXJufT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiAvPlxuICAgICAgICAgIDxzcGFuPmVycm9yPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApO1xuICB9XG4gIHJldHVybiA8PntydWxlLmhlYWx0aH08Lz47XG59O1xuXG5jb25zdCBnZXRTdHlsZSA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd2FybjogY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndhcm5pbmcudGV4dH07XG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmcgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgU3Bpbm5lciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlLCBpc1JlY29yZGluZ1J1bGUsIGdldEZpcnN0QWN0aXZlQXQgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5cbmltcG9ydCB7IEFsZXJ0U3RhdGVUYWcgfSBmcm9tICcuL0FsZXJ0U3RhdGVUYWcnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG4gIGlzRGVsZXRpbmc6IGJvb2xlYW47XG4gIGlzQ3JlYXRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlU3RhdGU6IEZDPFByb3BzPiA9ICh7IHJ1bGUsIGlzRGVsZXRpbmcsIGlzQ3JlYXRpbmcgfSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGUpO1xuICBjb25zdCB7IHByb21SdWxlIH0gPSBydWxlO1xuXG4gIC8vIHJldHVybiBob3cgbG9uZyB0aGUgcnVsZSBoYXMgYmVlbiBpbiBpdCdzIGZpcmluZyBzdGF0ZSwgaWYgYW55XG4gIGNvbnN0IGZvclRpbWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwcm9tUnVsZSAmJlxuICAgICAgaXNBbGVydGluZ1J1bGUocHJvbVJ1bGUpICYmXG4gICAgICBwcm9tUnVsZS5hbGVydHM/Lmxlbmd0aCAmJlxuICAgICAgcHJvbVJ1bGUuc3RhdGUgIT09IFByb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZVxuICAgICkge1xuICAgICAgLy8gZmluZCBlYXJsaWVzdCBhbGVydFxuICAgICAgY29uc3QgZmlyc3RBY3RpdmVBdCA9IGdldEZpcnN0QWN0aXZlQXQocHJvbVJ1bGUpO1xuXG4gICAgICAvLyBjYWxjdWxhdGUgdGltZSBlbGFwc2VkIGZyb20gZWFybGllc3QgYWxlcnRcbiAgICAgIGlmIChmaXJzdEFjdGl2ZUF0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gdGl0bGU9e1N0cmluZyhmaXJzdEFjdGl2ZUF0KX0gY2xhc3NOYW1lPXtzdHlsZS5mb3J9PlxuICAgICAgICAgICAgZm9yeycgJ31cbiAgICAgICAgICAgIHtpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyhcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBmaXJzdEFjdGl2ZUF0LFxuICAgICAgICAgICAgICAgIGVuZDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgW3Byb21SdWxlLCBzdHlsZV0pO1xuXG4gIGlmIChpc0RlbGV0aW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIGRlbGV0aW5nXG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9IGVsc2UgaWYgKGlzQ3JlYXRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgY3JlYXRpbmdcbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH0gZWxzZSBpZiAocHJvbVJ1bGUgJiYgaXNBbGVydGluZ1J1bGUocHJvbVJ1bGUpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIDxBbGVydFN0YXRlVGFnIHN0YXRlPXtwcm9tUnVsZS5zdGF0ZX0gLz5cbiAgICAgICAge2ZvclRpbWV9XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9IGVsc2UgaWYgKHByb21SdWxlICYmIGlzUmVjb3JkaW5nUnVsZShwcm9tUnVsZSkpIHtcbiAgICByZXR1cm4gPD5SZWNvcmRpbmcgcnVsZTwvPjtcbiAgfVxuICByZXR1cm4gPD5uL2E8Lz47XG59O1xuXG5jb25zdCBnZXRTdHlsZSA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZm9yOiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnRTdGF0ZSwgZGF0ZVRpbWVGb3JtYXQsIEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIExvYWRpbmdQbGFjZWhvbGRlciwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU3RhdGVIaXN0b3J5SXRlbSwgU3RhdGVIaXN0b3J5SXRlbURhdGEgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZVdpdGhSZWFzb24sIFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IHVzZU1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZU1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeSc7XG5pbXBvcnQgeyBBbGVydExhYmVsIH0gZnJvbSAnLi4vQWxlcnRMYWJlbCc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGUsIER5bmFtaWNUYWJsZUNvbHVtblByb3BzLCBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9EeW5hbWljVGFibGUnO1xuXG5pbXBvcnQgeyBBbGVydFN0YXRlVGFnIH0gZnJvbSAnLi9BbGVydFN0YXRlVGFnJztcblxudHlwZSBTdGF0ZUhpc3RvcnlSb3dJdGVtID0ge1xuICBpZDogc3RyaW5nO1xuICBzdGF0ZTogUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIHwgR3JhZmFuYUFsZXJ0U3RhdGVXaXRoUmVhc29uIHwgQWxlcnRTdGF0ZTtcbiAgdGV4dD86IHN0cmluZztcbiAgZGF0YT86IFN0YXRlSGlzdG9yeUl0ZW1EYXRhO1xuICB0aW1lc3RhbXA/OiBudW1iZXI7XG59O1xuXG50eXBlIFN0YXRlSGlzdG9yeVJvdyA9IER5bmFtaWNUYWJsZUl0ZW1Qcm9wczxTdGF0ZUhpc3RvcnlSb3dJdGVtPjtcblxuaW50ZXJmYWNlIFJ1bGVTdGF0ZUhpc3RvcnlQcm9wcyB7XG4gIGFsZXJ0SWQ6IHN0cmluZztcbn1cblxuY29uc3QgU3RhdGVIaXN0b3J5OiBGQzxSdWxlU3RhdGVIaXN0b3J5UHJvcHM+ID0gKHsgYWxlcnRJZCB9KSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIHJlc3VsdCA9IFtdIH0gPSB1c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkoYWxlcnRJZCk7XG5cbiAgaWYgKGxvYWRpbmcgJiYgIWVycm9yKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD17J0xvYWRpbmcgaGlzdG9yeS4uLid9IC8+O1xuICB9XG5cbiAgaWYgKGVycm9yICYmICFsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxBbGVydCB0aXRsZT17J0ZhaWxlZCB0byBmZXRjaCBhbGVydCBzdGF0ZSBoaXN0b3J5J30+e2Vycm9yLm1lc3NhZ2V9PC9BbGVydD47XG4gIH1cblxuICBjb25zdCBjb2x1bW5zOiBBcnJheTxEeW5hbWljVGFibGVDb2x1bW5Qcm9wczxTdGF0ZUhpc3RvcnlSb3dJdGVtPj4gPSBbXG4gICAgeyBpZDogJ3N0YXRlJywgbGFiZWw6ICdTdGF0ZScsIHNpemU6ICdtYXgtY29udGVudCcsIHJlbmRlckNlbGw6IHJlbmRlclN0YXRlQ2VsbCB9LFxuICAgIHsgaWQ6ICd2YWx1ZScsIGxhYmVsOiAnJywgc2l6ZTogJ2F1dG8nLCByZW5kZXJDZWxsOiByZW5kZXJWYWx1ZUNlbGwgfSxcbiAgICB7IGlkOiAndGltZXN0YW1wJywgbGFiZWw6ICdUaW1lJywgc2l6ZTogJ21heC1jb250ZW50JywgcmVuZGVyQ2VsbDogcmVuZGVyVGltZXN0YW1wQ2VsbCB9LFxuICBdO1xuXG4gIGNvbnN0IGl0ZW1zOiBTdGF0ZUhpc3RvcnlSb3dbXSA9IHJlc3VsdFxuICAgIC5yZWR1Y2UoKGFjYzogU3RhdGVIaXN0b3J5Um93SXRlbVtdLCBpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgYWNjLnB1c2goe1xuICAgICAgICBpZDogU3RyaW5nKGl0ZW0uaWQpLFxuICAgICAgICBzdGF0ZTogaXRlbS5uZXdTdGF0ZSxcbiAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxuICAgICAgICBkYXRhOiBpdGVtLmRhdGEsXG4gICAgICAgIHRpbWVzdGFtcDogaXRlbS51cGRhdGVkLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGlmIHRoZSBwcmVjZWRpbmcgc3RhdGUgaXMgbm90IHRoZSBzYW1lLCBjcmVhdGUgYSBzZXBhcmF0ZSBzdGF0ZSBlbnRyeSDigJMgdGhpcyBsaWtlbHkgbWVhbnMgdGhlIHN0YXRlIHdhcyByZXNldFxuICAgICAgaWYgKCFoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlKGluZGV4LCByZXN1bHQpKSB7XG4gICAgICAgIGFjYy5wdXNoKHsgaWQ6IHVuaXF1ZUlkKCksIHN0YXRlOiBpdGVtLnByZXZTdGF0ZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSlcbiAgICAubWFwKChoaXN0b3J5SXRlbSkgPT4gKHtcbiAgICAgIGlkOiBoaXN0b3J5SXRlbS5pZCxcbiAgICAgIGRhdGE6IGhpc3RvcnlJdGVtLFxuICAgIH0pKTtcblxuICByZXR1cm4gPER5bmFtaWNUYWJsZSBjb2xzPXtjb2x1bW5zfSBpdGVtcz17aXRlbXN9IC8+O1xufTtcblxuZnVuY3Rpb24gcmVuZGVyVmFsdWVDZWxsKGl0ZW06IFN0YXRlSGlzdG9yeVJvdykge1xuICBjb25zdCBtYXRjaGVzID0gaXRlbS5kYXRhLmRhdGE/LmV2YWxNYXRjaGVzID8/IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpdGVtLmRhdGEudGV4dH1cbiAgICAgIDxMYWJlbHNXcmFwcGVyPlxuICAgICAgICB7bWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiAoXG4gICAgICAgICAgPEFsZXJ0TGFiZWwga2V5PXttYXRjaC5tZXRyaWN9IGxhYmVsS2V5PXttYXRjaC5tZXRyaWN9IHZhbHVlPXtTdHJpbmcobWF0Y2gudmFsdWUpfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTGFiZWxzV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3RhdGVDZWxsKGl0ZW06IFN0YXRlSGlzdG9yeVJvdykge1xuICByZXR1cm4gPEFsZXJ0U3RhdGVUYWcgc3RhdGU9e2l0ZW0uZGF0YS5zdGF0ZX0gLz47XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVzdGFtcENlbGwoaXRlbTogU3RhdGVIaXN0b3J5Um93KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1RpbWVzdGFtcFN0eWxlfT57aXRlbS5kYXRhLnRpbWVzdGFtcCAmJiA8c3Bhbj57ZGF0ZVRpbWVGb3JtYXQoaXRlbS5kYXRhLnRpbWVzdGFtcCl9PC9zcGFuPn08L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTGFiZWxzV3JhcHBlcjogRkM8e30+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IHdyYXBwZXIgfSA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5jb25zdCBUaW1lc3RhbXBTdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICAmID4gKiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgfVxuICBgLFxufSk7XG5cbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCBmaWd1cmUgb3V0IGlmIGEgZ2l2ZW4gaGlzdG9yeUl0ZW0gaGFzIGEgcHJlY2VkaW5nIGhpc3RvcnlJdGVtIHdoZXJlIHRoZSBzdGF0ZXMgbWF0Y2ggLSBpbiBvdGhlciB3b3Jkc1xuLy8gdGhlIG5ld1N0YXRlIG9mIHRoZSBwcmV2aW91cyBoaXN0b3J5SXRlbSBpcyB0aGUgc2FtZSBhcyB0aGUgcHJldlN0YXRlIG9mIHRoZSBjdXJyZW50IGhpc3RvcnlJdGVtXG5mdW5jdGlvbiBoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlKGluZGV4OiBudW1iZXIsIGl0ZW1zOiBTdGF0ZUhpc3RvcnlJdGVtW10pOiBib29sZWFuIHtcbiAgY29uc3QgY3VycmVudEhpc3RvcnlJdGVtID0gaXRlbXNbaW5kZXhdO1xuICBjb25zdCBwcmV2aW91c0hpc3RvcnlJdGVtID0gaXRlbXNbaW5kZXggKyAxXTtcblxuICBpZiAoIXByZXZpb3VzSGlzdG9yeUl0ZW0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcHJldmlvdXNIaXN0b3J5SXRlbS5uZXdTdGF0ZSA9PT0gY3VycmVudEhpc3RvcnlJdGVtLnByZXZTdGF0ZTtcbn1cblxuZXhwb3J0IHsgU3RhdGVIaXN0b3J5IH07XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXREYXRhU291cmNlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0UXVlcmllc1N0YXR1cyhxdWVyaWVzOiBBbGVydFF1ZXJ5W10pIHtcbiAgY29uc3QgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgPSB1c2VNZW1vKFxuICAgICgpID0+IHF1ZXJpZXMuZXZlcnkoKHF1ZXJ5KSA9PiBCb29sZWFuKGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpKSksXG4gICAgW3F1ZXJpZXNdXG4gICk7XG5cbiAgcmV0dXJuIHsgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgfTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBSdWxlSWRlbnRpZmllciwgUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFJ1bGVyUnVsZXNDb25maWdEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBmZXRjaFByb21BbmRSdWxlclJ1bGVzQWN0aW9uIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBBc3luY1JlcXVlc3RNYXBTbGljZSwgQXN5bmNSZXF1ZXN0U3RhdGUsIGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3JlZHV4JztcbmltcG9ydCAqIGFzIHJ1bGVJZCBmcm9tICcuLi91dGlscy9ydWxlLWlkJztcbmltcG9ydCB7IGlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZSB9IGZyb20gJy4uL3V0aWxzL3J1bGVzJztcblxuaW1wb3J0IHsgdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyB9IGZyb20gJy4vdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlKFxuICBpZGVudGlmaWVyOiBSdWxlSWRlbnRpZmllciB8IHVuZGVmaW5lZCxcbiAgcnVsZVNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogQXN5bmNSZXF1ZXN0U3RhdGU8Q29tYmluZWRSdWxlPiB7XG4gIGNvbnN0IHJlcXVlc3RTdGF0ZSA9IHVzZUNvbWJpbmVkUnVsZXNMb2FkZXIocnVsZVNvdXJjZU5hbWUpO1xuICBjb25zdCBjb21iaW5lZFJ1bGVzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlU291cmNlTmFtZSk7XG5cbiAgY29uc3QgcnVsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghaWRlbnRpZmllciB8fCAhcnVsZVNvdXJjZU5hbWUgfHwgY29tYmluZWRSdWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5hbWVzcGFjZSBvZiBjb21iaW5lZFJ1bGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIG5hbWVzcGFjZS5ncm91cHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIGdyb3VwLnJ1bGVzKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBydWxlSWQuZnJvbUNvbWJpbmVkUnVsZShydWxlU291cmNlTmFtZSwgcnVsZSk7XG5cbiAgICAgICAgICBpZiAocnVsZUlkLmVxdWFsKGlkLCBpZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9LCBbaWRlbnRpZmllciwgcnVsZVNvdXJjZU5hbWUsIGNvbWJpbmVkUnVsZXNdKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnJlcXVlc3RTdGF0ZSxcbiAgICByZXN1bHQ6IHJ1bGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmcoXG4gIHJ1bGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHJ1bGVTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IEFzeW5jUmVxdWVzdFN0YXRlPENvbWJpbmVkUnVsZVtdPiB7XG4gIGNvbnN0IHJlcXVlc3RTdGF0ZSA9IHVzZUNvbWJpbmVkUnVsZXNMb2FkZXIocnVsZVNvdXJjZU5hbWUpO1xuICBjb25zdCBjb21iaW5lZFJ1bGVzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlU291cmNlTmFtZSk7XG5cbiAgY29uc3QgcnVsZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXJ1bGVOYW1lIHx8ICFydWxlU291cmNlTmFtZSB8fCBjb21iaW5lZFJ1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBuYW1lc3BhY2Ugb2YgY29tYmluZWRSdWxlcykge1xuICAgICAgZm9yIChjb25zdCBncm91cCBvZiBuYW1lc3BhY2UuZ3JvdXBzKSB7XG4gICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBncm91cC5ydWxlcykge1xuICAgICAgICAgIGlmIChydWxlLm5hbWUgPT09IHJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfSwgW3J1bGVOYW1lLCBydWxlU291cmNlTmFtZSwgY29tYmluZWRSdWxlc10pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVxdWVzdFN0YXRlLFxuICAgIHJlc3VsdDogcnVsZXMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUNvbWJpbmVkUnVsZXNMb2FkZXIocnVsZXNTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBBc3luY1JlcXVlc3RTdGF0ZTx2b2lkPiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvbVJ1bGVSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcHJvbVJ1bGVSZXF1ZXN0ID0gZ2V0UmVxdWVzdFN0YXRlKHJ1bGVzU291cmNlTmFtZSwgcHJvbVJ1bGVSZXF1ZXN0cyk7XG4gIGNvbnN0IHJ1bGVyUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlUmVxdWVzdCA9IGdldFJlcXVlc3RTdGF0ZShydWxlc1NvdXJjZU5hbWUsIHJ1bGVyUnVsZVJlcXVlc3RzKTtcblxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXJ1bGVzU291cmNlTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IGRpc3BhdGNoKGZldGNoUHJvbUFuZFJ1bGVyUnVsZXNBY3Rpb24oeyBydWxlc1NvdXJjZU5hbWUgfSkpO1xuICB9LCBbZGlzcGF0Y2gsIHJ1bGVzU291cmNlTmFtZV0pO1xuXG4gIHJldHVybiB7XG4gICAgbG9hZGluZyxcbiAgICBlcnJvcjogcHJvbVJ1bGVSZXF1ZXN0LmVycm9yID8/IGlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZShydWxlclJ1bGVSZXF1ZXN0KSA/IHVuZGVmaW5lZCA6IHJ1bGVyUnVsZVJlcXVlc3QuZXJyb3IsXG4gICAgZGlzcGF0Y2hlZDogcHJvbVJ1bGVSZXF1ZXN0LmRpc3BhdGNoZWQgJiYgcnVsZXJSdWxlUmVxdWVzdC5kaXNwYXRjaGVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRSZXF1ZXN0U3RhdGUoXG4gIHJ1bGVTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHNsaWNlOiBBc3luY1JlcXVlc3RNYXBTbGljZTxSdWxlclJ1bGVzQ29uZmlnRFRPIHwgUnVsZU5hbWVzcGFjZVtdIHwgbnVsbD5cbik6IEFzeW5jUmVxdWVzdFN0YXRlPFJ1bGVyUnVsZXNDb25maWdEVE8gfCBSdWxlTmFtZXNwYWNlW10gfCBudWxsPiB7XG4gIGlmICghcnVsZVNvdXJjZU5hbWUpIHtcbiAgICByZXR1cm4gaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICB9XG5cbiAgY29uc3Qgc3RhdGUgPSBzbGljZVtydWxlU291cmNlTmFtZV07XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbWJpbmVkUnVsZSxcbiAgQ29tYmluZWRSdWxlR3JvdXAsXG4gIENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgUnVsZSxcbiAgUnVsZUdyb3VwLFxuICBSdWxlTmFtZXNwYWNlLFxuICBSdWxlc1NvdXJjZSxcbn0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUnVsZXJSdWxlRFRPLCBSdWxlclJ1bGVHcm91cERUTywgUnVsZXJSdWxlc0NvbmZpZ0RUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7XG4gIGdldEFsbFJ1bGVzU291cmNlcyxcbiAgZ2V0UnVsZXNTb3VyY2VCeU5hbWUsXG4gIGlzQ2xvdWRSdWxlc1NvdXJjZSxcbiAgaXNHcmFmYW5hUnVsZXNTb3VyY2UsXG59IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzQWxlcnRpbmdSdWxlclJ1bGUsIGlzUmVjb3JkaW5nUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgQ2FjaGVWYWx1ZSB7XG4gIHByb21SdWxlcz86IFJ1bGVOYW1lc3BhY2VbXTtcbiAgcnVsZXJSdWxlcz86IFJ1bGVyUnVsZXNDb25maWdEVE8gfCBudWxsO1xuICByZXN1bHQ6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xufVxuXG4vLyB0aGlzIGxpdHRsZSBtb25zdGVyIGNvbWJpbmVzIHByb21ldGhldXMgcnVsZXMgYW5kIHJ1bGVyIHJ1bGVzIHRvIHByb2R1Y2UgYSB1bmlmaWVkIGRhdGEgc3RydWN0dXJlXG4vLyBjYW4gbGltaXQgdG8gYSBzaW5nbGUgcnVsZXMgc291cmNlXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlc1NvdXJjZU5hbWU/OiBzdHJpbmcpOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSB7XG4gIGNvbnN0IHByb21SdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG5cbiAgLy8gY2FjaGUgcmVzdWx0cyBwZXIgcnVsZXMgc291cmNlLCBzbyB3ZSBvbmx5IHJlY2FsY3VsYXRlIHRob3NlIGZvciB3aGljaCByZXN1bHRzIGhhdmUgYWN0dWFsbHkgY2hhbmdlZFxuICBjb25zdCBjYWNoZSA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBDYWNoZVZhbHVlPj4oe30pO1xuXG4gIGNvbnN0IHJ1bGVzU291cmNlcyA9IHVzZU1lbW8oKCk6IFJ1bGVzU291cmNlW10gPT4ge1xuICAgIGlmIChydWxlc1NvdXJjZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVzU291cmNlID0gZ2V0UnVsZXNTb3VyY2VCeU5hbWUocnVsZXNTb3VyY2VOYW1lKTtcbiAgICAgIGlmICghcnVsZXNTb3VyY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHJ1bGVzIHNvdXJjZTogJHtydWxlc1NvdXJjZU5hbWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3J1bGVzU291cmNlXTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEFsbFJ1bGVzU291cmNlcygpO1xuICB9LCBbcnVsZXNTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHJ1bGVzU291cmNlc1xuICAgICAgICAubWFwKChydWxlc1NvdXJjZSk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSBpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gcnVsZXNTb3VyY2UubmFtZSA6IHJ1bGVzU291cmNlO1xuICAgICAgICAgIGNvbnN0IHByb21SdWxlcyA9IHByb21SdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgcnVsZXJSdWxlcyA9IHJ1bGVyUnVsZXNSZXNwb25zZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuXG4gICAgICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdO1xuICAgICAgICAgIGlmIChjYWNoZWQgJiYgY2FjaGVkLnByb21SdWxlcyA9PT0gcHJvbVJ1bGVzICYmIGNhY2hlZC5ydWxlclJ1bGVzID09PSBydWxlclJ1bGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkLnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZXNwYWNlczogUmVjb3JkPHN0cmluZywgQ29tYmluZWRSdWxlTmFtZXNwYWNlPiA9IHt9O1xuXG4gICAgICAgICAgLy8gZmlyc3QgZ2V0IGFsbCB0aGUgcnVsZXIgcnVsZXMgaW5cbiAgICAgICAgICBPYmplY3QuZW50cmllcyhydWxlclJ1bGVzIHx8IHt9KS5mb3JFYWNoKChbbmFtZXNwYWNlTmFtZSwgZ3JvdXBzXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgPSB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2U7XG4gICAgICAgICAgICBhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhlbiBjb3JyZWxhdGUgd2l0aCBwcm9tZXRoZXVzIHJ1bGVzXG4gICAgICAgICAgcHJvbVJ1bGVzPy5mb3JFYWNoKCh7IG5hbWU6IG5hbWVzcGFjZU5hbWUsIGdyb3VwcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBucyA9IChuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSB8fCB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5zLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LnZhbHVlcyhuYW1lc3BhY2VzKTtcblxuICAgICAgICAgIGNhY2hlLmN1cnJlbnRbcnVsZXNTb3VyY2VOYW1lXSA9IHsgcHJvbVJ1bGVzLCBydWxlclJ1bGVzLCByZXN1bHQgfTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpLFxuICAgIFtwcm9tUnVsZXNSZXNwb25zZXMsIHJ1bGVyUnVsZXNSZXNwb25zZXMsIHJ1bGVzU291cmNlc11cbiAgKTtcbn1cblxuLy8gbWVyZ2UgYWxsIGdyb3VwcyBpbiBjYXNlIG9mIGdyYWZhbmEgbWFuYWdlZCwgZXNzZW50aWFsbHkgdHJlYXRpbmcgbmFtZXNwYWNlcyAoZm9sZGVycykgYXMgZ3JvdXBzXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMobmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10pIHtcbiAgcmV0dXJuIG5hbWVzcGFjZXMubWFwKChuYW1lc3BhY2UpID0+IHtcbiAgICBjb25zdCBuZXdOYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgIGdyb3VwczogW10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IGdyb3VwIHdpdGggdW5ncm91cGVkIHJ1bGVzXG4gICAgbmV3TmFtZXNwYWNlLmdyb3Vwcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgIHJ1bGVzOiBzb3J0UnVsZXNCeU5hbWUobmFtZXNwYWNlLmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4gZ3JvdXAucnVsZXMpKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdOYW1lc3BhY2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFJ1bGVzQnlOYW1lKHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSkge1xuICByZXR1cm4gcnVsZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlclJ1bGVHcm91cERUT1tdKTogdm9pZCB7XG4gIG5hbWVzcGFjZS5ncm91cHMgPSBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmVkR3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwID0ge1xuICAgICAgbmFtZTogZ3JvdXAubmFtZSxcbiAgICAgIGludGVydmFsOiBncm91cC5pbnRlcnZhbCxcbiAgICAgIHNvdXJjZV90ZW5hbnRzOiBncm91cC5zb3VyY2VfdGVuYW50cyxcbiAgICAgIHJ1bGVzOiBbXSxcbiAgICB9O1xuICAgIGNvbWJpbmVkR3JvdXAucnVsZXMgPSBncm91cC5ydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCkpO1xuICAgIHJldHVybiBjb21iaW5lZEdyb3VwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwczogUnVsZUdyb3VwW10pOiB2b2lkIHtcbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgbGV0IGNvbWJpbmVkR3JvdXAgPSBuYW1lc3BhY2UuZ3JvdXBzLmZpbmQoKGcpID0+IGcubmFtZSA9PT0gZ3JvdXAubmFtZSk7XG4gICAgaWYgKCFjb21iaW5lZEdyb3VwKSB7XG4gICAgICBjb21iaW5lZEdyb3VwID0ge1xuICAgICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgICBydWxlczogW10sXG4gICAgICB9O1xuICAgICAgbmFtZXNwYWNlLmdyb3Vwcy5wdXNoKGNvbWJpbmVkR3JvdXApO1xuICAgIH1cblxuICAgIChncm91cC5ydWxlcyA/PyBbXSkuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdSdWxlID0gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChydWxlLCBjb21iaW5lZEdyb3VwISwgbmFtZXNwYWNlLnJ1bGVzU291cmNlKTtcbiAgICAgIGlmIChleGlzdGluZ1J1bGUpIHtcbiAgICAgICAgZXhpc3RpbmdSdWxlLnByb21SdWxlID0gcnVsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbWJpbmVkR3JvdXAhLnJ1bGVzLnB1c2gocHJvbVJ1bGVUb0NvbWJpbmVkUnVsZShydWxlLCBuYW1lc3BhY2UsIGNvbWJpbmVkR3JvdXAhKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGU6IFJ1bGUsIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cDogQ29tYmluZWRSdWxlR3JvdXApOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHJ1bGUubmFtZSxcbiAgICBxdWVyeTogcnVsZS5xdWVyeSxcbiAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgIGFubm90YXRpb25zOiBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICBwcm9tUnVsZTogcnVsZSxcbiAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICBncm91cCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUoXG4gIHJ1bGU6IFJ1bGVyUnVsZURUTyxcbiAgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cFxuKTogQ29tYmluZWRSdWxlIHtcbiAgcmV0dXJuIGlzQWxlcnRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5hbGVydCxcbiAgICAgICAgcXVlcnk6IHJ1bGUuZXhwcixcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IGlzUmVjb3JkaW5nUnVsZXJSdWxlKHJ1bGUpXG4gICAgPyB7XG4gICAgICAgIG5hbWU6IHJ1bGUucmVjb3JkLFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczoge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgbmFtZTogcnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiBydWxlLmFubm90YXRpb25zIHx8IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9O1xufVxuXG4vLyBmaW5kIGV4aXN0aW5nIHJ1bGUgaW4gZ3JvdXAgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBwcm9tIHJ1bGVcbmZ1bmN0aW9uIGdldEV4aXN0aW5nUnVsZUluR3JvdXAoXG4gIHJ1bGU6IFJ1bGUsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCxcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlXG4pOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQge1xuICBpZiAoaXNHcmFmYW5hUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgLy8gYXNzdW1lIGdyYWZhbmEgZ3JvdXBzIGhhdmUgb25seSB0aGUgb25lIHJ1bGUuIGNoZWNrIG5hbWUgYW55d2F5IGJlY2F1c2UgcGFyYW5vaWRcbiAgICByZXR1cm4gZ3JvdXAhLnJ1bGVzLmZpbmQoKGV4aXN0aW5nUnVsZSkgPT4gZXhpc3RpbmdSdWxlLm5hbWUgPT09IHJ1bGUubmFtZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvLyB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBtYXRjaGVzIG5hbWUsIGxhYmVscywgYW5ub3RhdGlvbnMgYW5kIHF1ZXJ5XG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgdHJ1ZSlcbiAgICApID8/XG4gICAgLy8gaWYgdGhhdCBmYWlscywgdHJ5IGZpbmRpbmcgYSBydWxlIHRoYXQgb25seSBtYXRjaGVzIG5hbWUsIGxhYmVscyBhbmQgYW5ub3RhdGlvbnMuXG4gICAgLy8gbG9raSAmIHByb20gY2FuIHNvbWV0aW1lcyBtb2RpZnkgdGhlIHF1ZXJ5IHNvIGl0IGRvZXNudCBtYXRjaCwgZWcgYDIgPiAxYCBiZWNvbWVzIGAxYFxuICAgIGdyb3VwIS5ydWxlcy5maW5kKFxuICAgICAgKGV4aXN0aW5nUnVsZSkgPT4gIWV4aXN0aW5nUnVsZS5wcm9tUnVsZSAmJiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShleGlzdGluZ1J1bGUsIHJ1bGUsIGZhbHNlKVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUsIHJ1bGU6IFJ1bGUsIGNoZWNrUXVlcnkgPSB0cnVlKTogYm9vbGVhbiB7XG4gIGlmIChjb21iaW5lZFJ1bGUubmFtZSA9PT0gcnVsZS5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgY2hlY2tRdWVyeSA/IGhhc2hRdWVyeShjb21iaW5lZFJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5sYWJlbHMsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5hbm5vdGF0aW9ucyxcbiAgICAgIF0pID09PVxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KHJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHRoZXJlIGNhbiBiZSBzbGlnaHQgZGlmZmVyZW5jZXMgaW4gaG93IHByb20gJiBydWxlciByZW5kZXIgYSBxdWVyeSwgdGhpcyB3aWxsIGhhc2ggdGhlbSBhY2NvdW50aW5nIGZvciB0aGUgZGlmZmVyZW5jZXNcbmZ1bmN0aW9uIGhhc2hRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gIC8vIG9uZSBvZiB0aGVtIG1pZ2h0IGJlIHdyYXBwZWQgaW4gcGFyZW5zXG4gIGlmIChxdWVyeS5sZW5ndGggPiAxICYmIHF1ZXJ5WzBdID09PSAnKCcgJiYgcXVlcnlbcXVlcnkubGVuZ3RoIC0gMV0gPT09ICcpJykge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMSwgLTEpO1xuICB9XG4gIC8vIHdoaXRlc3BhY2UgY291bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xcc3xcXG4vZywgJycpO1xuICAvLyBsYWJlbHMgbWF0Y2hlcnMgY2FuIGJlIHJlb3JkZXJlZCwgc28gc29ydCB0aGUgZW5pdHJlIHN0cmluZywgZXNlbnRpYWxseSBjb21wYXJpbmcganVzdCB0aGUgY2hhcmFjdGVyIGNvdW50c1xuICByZXR1cm4gcXVlcnkuc3BsaXQoJycpLnNvcnQoKS5qb2luKCcnKTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBGb2xkZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBmZXRjaEZvbGRlcklmTm90RmV0Y2hlZEFjdGlvbiB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgUmV0dXJuQmFnIHtcbiAgZm9sZGVyPzogRm9sZGVyRFRPO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9sZGVyKHVpZD86IHN0cmluZyk6IFJldHVybkJhZyB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZm9sZGVyUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvbGRlcnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1aWQpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uKHVpZCkpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCB1aWRdKTtcblxuICBpZiAodWlkKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGZvbGRlclJlcXVlc3RzW3VpZF0gfHwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICAgIHJldHVybiB7XG4gICAgICBmb2xkZXI6IHJlcXVlc3QucmVzdWx0LFxuICAgICAgbG9hZGluZzogcmVxdWVzdC5sb2FkaW5nLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBnZXRSdWxlc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyB1c2VGb2xkZXIgfSBmcm9tICcuL3VzZUZvbGRlcic7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgUmVzdWx0QmFnIHtcbiAgaXNFZGl0YWJsZT86IGJvb2xlYW47XG4gIGlzUmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVzU291cmNlTmFtZTogc3RyaW5nLCBydWxlPzogUnVsZXJSdWxlRFRPKTogUmVzdWx0QmFnIHtcbiAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzKTtcbiAgY29uc3QgZm9sZGVyVUlEID0gcnVsZSAmJiBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZSkgPyBydWxlLmdyYWZhbmFfYWxlcnQubmFtZXNwYWNlX3VpZCA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBydWxlUGVybWlzc2lvbiA9IGdldFJ1bGVzUGVybWlzc2lvbnMocnVsZXNTb3VyY2VOYW1lKTtcblxuICBjb25zdCB7IGZvbGRlciwgbG9hZGluZyB9ID0gdXNlRm9sZGVyKGZvbGRlclVJRCk7XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgcmV0dXJuIHsgaXNFZGl0YWJsZTogZmFsc2UsIGlzUmVtb3ZhYmxlOiBmYWxzZSwgbG9hZGluZzogZmFsc2UgfTtcbiAgfVxuXG4gIC8vIEdyYWZhbmEgcnVsZXMgY2FuIGJlIGVkaXRlZCBpZiB1c2VyIGNhbiBlZGl0IHRoZSBmb2xkZXIgdGhleSdyZSBpblxuICAvLyBXaGVuIFJCQUMgaXMgZGlzYWJsZWQgYWNjZXNzIHRvIGEgZm9sZGVyIGlzIHRoZSBvbmx5IHJlcXVpcmVtZW50IGZvciBtYW5hZ2luZyBydWxlc1xuICAvLyBXaGVuIFJCQUMgaXMgZW5hYmxlZCB0aGUgYXBwcm9wcmlhdGUgYWxlcnRpbmcgcGVybWlzc2lvbnMgbmVlZCB0byBiZSBtZXRcbiAgaWYgKGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlKSkge1xuICAgIGlmICghZm9sZGVyVUlEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBSdWxlICR7cnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlfSBkb2VzIG5vdCBoYXZlIGEgZm9sZGVyIHVpZCwgY2Fubm90IGRldGVybWluZSBpZiBpdCBpcyBlZGl0YWJsZS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbkVkaXRHcmFmYW5hUnVsZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi51cGRhdGUsIGZvbGRlcj8uY2FuU2F2ZSA/PyBmYWxzZSk7XG4gICAgY29uc3QgY2FuUmVtb3ZlR3JhZmFuYVJ1bGVzID0gY29udGV4dFNydi5oYXNBY2Nlc3MocnVsZVBlcm1pc3Npb24uZGVsZXRlLCBmb2xkZXI/LmNhblNhdmUgPz8gZmFsc2UpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRWRpdGFibGU6IGNhbkVkaXRHcmFmYW5hUnVsZXMsXG4gICAgICBpc1JlbW92YWJsZTogY2FuUmVtb3ZlR3JhZmFuYVJ1bGVzLFxuICAgICAgbG9hZGluZyxcbiAgICB9O1xuICB9XG5cbiAgLy8gcHJvbSBydWxlcyBhcmUgb25seSBlZGl0YWJsZSBieSB1c2VycyB3aXRoIEVkaXRvciByb2xlIGFuZCBvbmx5IGlmIHJ1bGVzIHNvdXJjZSBzdXBwb3J0cyBlZGl0aW5nXG4gIGNvbnN0IGlzUnVsZXJBdmFpbGFibGUgPSBCb29sZWFuKGRhdGFTb3VyY2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdD8ucnVsZXJDb25maWcpO1xuICBjb25zdCBjYW5FZGl0Q2xvdWRSdWxlcyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKHJ1bGVQZXJtaXNzaW9uLnVwZGF0ZSwgY29udGV4dFNydi5pc0VkaXRvcik7XG4gIGNvbnN0IGNhblJlbW92ZUNsb3VkUnVsZXMgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi5kZWxldGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuXG4gIHJldHVybiB7XG4gICAgaXNFZGl0YWJsZTogY2FuRWRpdENsb3VkUnVsZXMgJiYgaXNSdWxlckF2YWlsYWJsZSxcbiAgICBpc1JlbW92YWJsZTogY2FuUmVtb3ZlQ2xvdWRSdWxlcyAmJiBpc1J1bGVyQXZhaWxhYmxlLFxuICAgIGxvYWRpbmc6IGRhdGFTb3VyY2VzW3J1bGVzU291cmNlTmFtZV0/LmxvYWRpbmcsXG4gIH07XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgU3RhdGVIaXN0b3J5SXRlbSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgZmV0Y2hHcmFmYW5hQW5ub3RhdGlvbnNBY3Rpb24gfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5KGFsZXJ0SWQ6IHN0cmluZykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvcjxBc3luY1JlcXVlc3RTdGF0ZTxTdGF0ZUhpc3RvcnlJdGVtW10+PihcbiAgICAoc3RhdGUpID0+IHN0YXRlLm1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hHcmFmYW5hQW5ub3RhdGlvbnNBY3Rpb24oYWxlcnRJZCkpO1xuICB9LCBbZGlzcGF0Y2gsIGFsZXJ0SWRdKTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFN0YXRlSGlzdG9yeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcnVsZXMvU3RhdGVIaXN0b3J5JztcblxuZnVuY3Rpb24gdXNlU3RhdGVIaXN0b3J5TW9kYWwoYWxlcnRJZDogc3RyaW5nKSB7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgU3RhdGVIaXN0b3J5TW9kYWwgPSB1c2VNZW1vKFxuICAgICgpID0+IChcbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICBjbG9zZU9uQmFja2Ryb3BDbGljaz17dHJ1ZX1cbiAgICAgICAgY2xvc2VPbkVzY2FwZT17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJTdGF0ZSBoaXN0b3J5XCJcbiAgICAgID5cbiAgICAgICAgPFN0YXRlSGlzdG9yeSBhbGVydElkPXthbGVydElkfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICApLFxuICAgIFthbGVydElkLCBzaG93TW9kYWxdXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBTdGF0ZUhpc3RvcnlNb2RhbCxcbiAgICBzaG93U3RhdGVIaXN0b3J5TW9kYWw6ICgpID0+IHNldFNob3dNb2RhbCh0cnVlKSxcbiAgICBoaWRlU3RhdGVIaXN0b3J5TW9kYWw6ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSksXG4gIH07XG59XG5cbmV4cG9ydCB7IHVzZVN0YXRlSGlzdG9yeU1vZGFsIH07XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgT3BlcmF0b3JGdW5jdGlvbiwgUmVwbGF5U3ViamVjdCwgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuaW1wb3J0IHtcbiAgZGF0YUZyYW1lRnJvbUpTT04sXG4gIERhdGFGcmFtZUpTT04sXG4gIGdldERlZmF1bHRUaW1lUmFuZ2UsXG4gIExvYWRpbmdTdGF0ZSxcbiAgUGFuZWxEYXRhLFxuICByYW5nZVV0aWwsXG4gIFRpbWVSYW5nZSxcbiAgd2l0aExvYWRpbmdJbmRpY2F0b3IsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmV0Y2hSZXNwb25zZSwgZ2V0RGF0YVNvdXJjZVNydiwgdG9EYXRhUXVlcnlFcnJvciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQmFja2VuZFNydiwgZ2V0QmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBjYW5jZWxOZXR3b3JrUmVxdWVzdHNPblVuc3Vic2NyaWJlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL3Byb2Nlc3NpbmcvY2FuY2VsZXInO1xuaW1wb3J0IHsgc2V0U3RydWN0dXJlUmV2aXNpb24gfSBmcm9tICdhcHAvZmVhdHVyZXMvcXVlcnkvc3RhdGUvcHJvY2Vzc2luZy9yZXZpc2lvbic7XG5pbXBvcnQgeyBwcmVQcm9jZXNzUGFuZWxEYXRhIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL3J1blJlcXVlc3QnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGdldFRpbWVSYW5nZUZvckV4cHJlc3Npb24gfSBmcm9tICcuLi91dGlscy90aW1lUmFuZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0aW5nUXVlcnlSZXN1bHQge1xuICBmcmFtZXM6IERhdGFGcmFtZUpTT05bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydGluZ1F1ZXJ5UmVzcG9uc2Uge1xuICByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBBbGVydGluZ1F1ZXJ5UmVzdWx0Pjtcbn1cbmV4cG9ydCBjbGFzcyBBbGVydGluZ1F1ZXJ5UnVubmVyIHtcbiAgcHJpdmF0ZSBzdWJqZWN0OiBSZXBsYXlTdWJqZWN0PFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbj86IFVuc3Vic2NyaWJhYmxlO1xuICBwcml2YXRlIGxhc3RSZXN1bHQ6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZW5kU3J2ID0gZ2V0QmFja2VuZFNydigpLCBwcml2YXRlIGRhdGFTb3VyY2VTcnYgPSBnZXREYXRhU291cmNlU3J2KCkpIHtcbiAgICB0aGlzLnN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgICB0aGlzLmxhc3RSZXN1bHQgPSB7fTtcbiAgfVxuXG4gIGdldCgpOiBPYnNlcnZhYmxlPFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgYXN5bmMgcnVuKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkge1xuICAgIGlmIChxdWVyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZW1wdHkgPSBpbml0aWFsU3RhdGUocXVlcmllcywgTG9hZGluZ1N0YXRlLkRvbmUpO1xuICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5uZXh0KGVtcHR5KTtcbiAgICB9XG5cbiAgICAvLyBkbyBub3QgZXhlY3V0ZSBpZiBvbmUgbW9yZSBvZiB0aGUgcXVlcmllcyBhcmUgbm90IHJ1bm5hYmxlLFxuICAgIC8vIGZvciBleGFtcGxlIG5vdCBjb21wbGV0ZWx5IGNvbmZpZ3VyZWRcbiAgICBmb3IgKGNvbnN0IHF1ZXJ5IG9mIHF1ZXJpZXMpIHtcbiAgICAgIGlmICghaXNFeHByZXNzaW9uUXVlcnkocXVlcnkubW9kZWwpKSB7XG4gICAgICAgIGNvbnN0IGRzID0gYXdhaXQgdGhpcy5kYXRhU291cmNlU3J2LmdldChxdWVyeS5kYXRhc291cmNlVWlkKTtcbiAgICAgICAgaWYgKGRzLmZpbHRlclF1ZXJ5ICYmICFkcy5maWx0ZXJRdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICAgICAgICBjb25zdCBlbXB0eSA9IGluaXRpYWxTdGF0ZShxdWVyaWVzLCBMb2FkaW5nU3RhdGUuRG9uZSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5uZXh0KGVtcHR5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gcnVuUmVxdWVzdCh0aGlzLmJhY2tlbmRTcnYsIHF1ZXJpZXMpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoZGF0YVBlclF1ZXJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRSZXN1bHQgPSBhcHBseUNoYW5nZShkYXRhUGVyUXVlcnksIChyZWZJZCwgZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5sYXN0UmVzdWx0W3JlZklkXTtcbiAgICAgICAgICBjb25zdCBwcmVQcm9jZXNzZWQgPSBwcmVQcm9jZXNzUGFuZWxEYXRhKGRhdGEsIHByZXZpb3VzKTtcbiAgICAgICAgICByZXR1cm4gc2V0U3RydWN0dXJlUmV2aXNpb24ocHJlUHJvY2Vzc2VkLCBwcmV2aW91cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IG5leHRSZXN1bHQ7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHRoaXMubGFzdFJlc3VsdCk7XG4gICAgICB9LFxuXG4gICAgICBlcnJvcjogKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxhc3RSZXN1bHQgPSBtYXBFcnJvclRvUGFuZWxEYXRhKHRoaXMubGFzdFJlc3VsdCwgZXJyb3IpO1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh0aGlzLmxhc3RSZXN1bHQpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cbiAgICBsZXQgcmVxdWVzdElzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbmV4dFJlc3VsdCA9IGFwcGx5Q2hhbmdlKHRoaXMubGFzdFJlc3VsdCwgKHJlZklkLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkxvYWRpbmcpIHtcbiAgICAgICAgcmVxdWVzdElzUnVubmluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAocmVxdWVzdElzUnVubmluZykge1xuICAgICAgdGhpcy5zdWJqZWN0Lm5leHQobmV4dFJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJqZWN0KSB7XG4gICAgICB0aGlzLnN1YmplY3QuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG59XG5cbmNvbnN0IHJ1blJlcXVlc3QgPSAoYmFja2VuZFNydjogQmFja2VuZFNydiwgcXVlcmllczogQWxlcnRRdWVyeVtdKTogT2JzZXJ2YWJsZTxSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+PiA9PiB7XG4gIGNvbnN0IGluaXRpYWwgPSBpbml0aWFsU3RhdGUocXVlcmllcywgTG9hZGluZ1N0YXRlLkxvYWRpbmcpO1xuICBjb25zdCByZXF1ZXN0ID0ge1xuICAgIGRhdGE6IHsgZGF0YTogcXVlcmllcyB9LFxuICAgIHVybDogJy9hcGkvdjEvZXZhbCcsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgcmVxdWVzdElkOiB1dWlkdjQoKSxcbiAgfTtcblxuICByZXR1cm4gd2l0aExvYWRpbmdJbmRpY2F0b3Ioe1xuICAgIHdoaWxlTG9hZGluZzogaW5pdGlhbCxcbiAgICBzb3VyY2U6IGJhY2tlbmRTcnYuZmV0Y2g8QWxlcnRpbmdRdWVyeVJlc3BvbnNlPihyZXF1ZXN0KS5waXBlKFxuICAgICAgbWFwVG9QYW5lbERhdGEoaW5pdGlhbCksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gb2YobWFwRXJyb3JUb1BhbmVsRGF0YShpbml0aWFsLCBlcnJvcikpKSxcbiAgICAgIGNhbmNlbE5ldHdvcmtSZXF1ZXN0c09uVW5zdWJzY3JpYmUoYmFja2VuZFNydiwgcmVxdWVzdC5yZXF1ZXN0SWQpLFxuICAgICAgc2hhcmUoKVxuICAgICksXG4gIH0pO1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSwgc3RhdGU6IExvYWRpbmdTdGF0ZSk6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPT4ge1xuICByZXR1cm4gcXVlcmllcy5yZWR1Y2UoKGRhdGFCeVF1ZXJ5OiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+LCBxdWVyeSkgPT4ge1xuICAgIGRhdGFCeVF1ZXJ5W3F1ZXJ5LnJlZklkXSA9IHtcbiAgICAgIHN0YXRlLFxuICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIHRpbWVSYW5nZTogZ2V0VGltZVJhbmdlKHF1ZXJ5LCBxdWVyaWVzKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGFCeVF1ZXJ5O1xuICB9LCB7fSk7XG59O1xuXG5jb25zdCBnZXRUaW1lUmFuZ2UgPSAocXVlcnk6IEFsZXJ0UXVlcnksIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSk6IFRpbWVSYW5nZSA9PiB7XG4gIGlmIChpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICBjb25zdCByZWxhdGl2ZSA9IGdldFRpbWVSYW5nZUZvckV4cHJlc3Npb24ocXVlcnkubW9kZWwsIHF1ZXJpZXMpO1xuICAgIHJldHVybiByYW5nZVV0aWwucmVsYXRpdmVUb1RpbWVSYW5nZShyZWxhdGl2ZSk7XG4gIH1cblxuICBpZiAoIXF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlKSB7XG4gICAgY29uc29sZS53YXJuKGBRdWVyeSB3aXRoIHJlZklkOiAke3F1ZXJ5LnJlZklkfSBkaWQgbm90IGhhdmUgYW55IHJlbGF0aXZlIHRpbWUgcmFuZ2UsIHVzaW5nIGRlZmF1bHQuYCk7XG4gICAgcmV0dXJuIGdldERlZmF1bHRUaW1lUmFuZ2UoKTtcbiAgfVxuXG4gIHJldHVybiByYW5nZVV0aWwucmVsYXRpdmVUb1RpbWVSYW5nZShxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZSk7XG59O1xuXG5jb25zdCBtYXBUb1BhbmVsRGF0YSA9IChcbiAgZGF0YUJ5UXVlcnk6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT5cbik6IE9wZXJhdG9yRnVuY3Rpb248RmV0Y2hSZXNwb25zZTxBbGVydGluZ1F1ZXJ5UmVzcG9uc2U+LCBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+PiA9PiB7XG4gIHJldHVybiBtYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IFtyZWZJZCwgcmVzdWx0XSBvZiBPYmplY3QuZW50cmllcyhkYXRhLnJlc3VsdHMpKSB7XG4gICAgICByZXN1bHRzW3JlZklkXSA9IHtcbiAgICAgICAgdGltZVJhbmdlOiBkYXRhQnlRdWVyeVtyZWZJZF0udGltZVJhbmdlLFxuICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgICAgIHNlcmllczogcmVzdWx0LmZyYW1lcy5tYXAoZGF0YUZyYW1lRnJvbUpTT04pLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSk7XG59O1xuXG5jb25zdCBtYXBFcnJvclRvUGFuZWxEYXRhID0gKGxhc3RSZXN1bHQ6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4sIGVycm9yOiBFcnJvcik6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPT4ge1xuICBjb25zdCBxdWVyeUVycm9yID0gdG9EYXRhUXVlcnlFcnJvcihlcnJvcik7XG5cbiAgcmV0dXJuIGFwcGx5Q2hhbmdlKGxhc3RSZXN1bHQsIChyZWZJZCwgZGF0YSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5FcnJvcixcbiAgICAgIGVycm9yOiBxdWVyeUVycm9yLFxuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgYXBwbHlDaGFuZ2UgPSAoXG4gIGluaXRpYWw6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4sXG4gIGNoYW5nZTogKHJlZklkOiBzdHJpbmcsIGRhdGE6IFBhbmVsRGF0YSkgPT4gUGFuZWxEYXRhXG4pOiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+ID0+IHtcbiAgY29uc3QgbmV4dFJlc3VsdDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9IHt9O1xuXG4gIGZvciAoY29uc3QgW3JlZklkLCBkYXRhXSBvZiBPYmplY3QuZW50cmllcyhpbml0aWFsKSkge1xuICAgIG5leHRSZXN1bHRbcmVmSWRdID0gY2hhbmdlKHJlZklkLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBuZXh0UmVzdWx0O1xufTtcbiIsImltcG9ydCB7IERhdGFRdWVyeSwgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IExva2lRdWVyeSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS90eXBlcyc7XG5pbXBvcnQgeyBQcm9tUXVlcnkgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvdHlwZXMnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSwgaXNHcmFmYW5hUnVsZXNTb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi9ydWxlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGVydFJ1bGVUb1F1ZXJpZXMoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQgfCBudWxsKTogQWxlcnRRdWVyeVtdIHtcbiAgaWYgKCFjb21iaW5lZFJ1bGUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgeyBuYW1lc3BhY2UsIHJ1bGVyUnVsZSB9ID0gY29tYmluZWRSdWxlO1xuICBjb25zdCB7IHJ1bGVzU291cmNlIH0gPSBuYW1lc3BhY2U7XG5cbiAgaWYgKGlzR3JhZmFuYVJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgIGlmIChpc0dyYWZhbmFSdWxlclJ1bGUocnVsZXJSdWxlKSkge1xuICAgICAgcmV0dXJuIHJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0LmRhdGE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICBjb25zdCBtb2RlbCA9IGNsb3VkQWxlcnRSdWxlVG9Nb2RlbChydWxlc1NvdXJjZSwgY29tYmluZWRSdWxlKTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHJlZklkOiBtb2RlbC5yZWZJZCxcbiAgICAgICAgZGF0YXNvdXJjZVVpZDogcnVsZXNTb3VyY2UudWlkLFxuICAgICAgICBxdWVyeVR5cGU6ICcnLFxuICAgICAgICBtb2RlbCxcbiAgICAgICAgcmVsYXRpdmVUaW1lUmFuZ2U6IHtcbiAgICAgICAgICBmcm9tOiAzNjAsXG4gICAgICAgICAgdG86IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbmZ1bmN0aW9uIGNsb3VkQWxlcnRSdWxlVG9Nb2RlbChkc1NldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgcnVsZTogQ29tYmluZWRSdWxlKTogRGF0YVF1ZXJ5IHtcbiAgY29uc3QgcmVmSWQgPSAnQSc7XG5cbiAgc3dpdGNoIChkc1NldHRpbmdzLnR5cGUpIHtcbiAgICBjYXNlICdwcm9tZXRoZXVzJzoge1xuICAgICAgY29uc3QgcXVlcnk6IFByb21RdWVyeSA9IHtcbiAgICAgICAgcmVmSWQsXG4gICAgICAgIGV4cHI6IHJ1bGUucXVlcnksXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuXG4gICAgY2FzZSAnbG9raSc6IHtcbiAgICAgIGNvbnN0IHF1ZXJ5OiBMb2tpUXVlcnkgPSB7XG4gICAgICAgIHJlZklkLFxuICAgICAgICBleHByOiBydWxlLnF1ZXJ5LFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFF1ZXJ5IGZvciBkYXRhc291cmNlIHR5cGUgJHtkc1NldHRpbmdzLnR5cGV9IGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGJ5IGNsb3VkIGFsZXJ0IHJ1bGVzLmApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWxhdGl2ZVRpbWVSYW5nZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb25RdWVyeSwgRXhwcmVzc2lvblF1ZXJ5VHlwZSB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3Npb25zL3R5cGVzJztcblxuY29uc3QgRkFMTF9CQUNLX1RJTUVfUkFOR0UgPSB7IGZyb206IDIxNjAwLCB0bzogMCB9O1xuXG5leHBvcnQgY29uc3QgZ2V0VGltZVJhbmdlRm9yRXhwcmVzc2lvbiA9IChxdWVyeTogRXhwcmVzc2lvblF1ZXJ5LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pOiBSZWxhdGl2ZVRpbWVSYW5nZSA9PiB7XG4gIGNvbnN0IHJlZmVyZW5jZWRSZWZJZHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gZ2V0UmVmZXJlbmNlZElkcyhxdWVyeSwgcXVlcmllcyk7XG5cbiAgaWYgKCFyZWZlcmVuY2VkUmVmSWRzKSB7XG4gICAgcmV0dXJuIEZBTExfQkFDS19USU1FX1JBTkdFO1xuICB9XG5cbiAgY29uc3QgeyBmcm9tLCB0byB9ID0gZ2V0VGltZVJhbmdlcyhyZWZlcmVuY2VkUmVmSWRzLCBxdWVyaWVzKTtcblxuICBpZiAoIWZyb20ubGVuZ3RoICYmICF0by5sZW5ndGgpIHtcbiAgICByZXR1cm4gRkFMTF9CQUNLX1RJTUVfUkFOR0U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZyb206IE1hdGgubWF4KC4uLmZyb20pLFxuICAgIHRvOiBNYXRoLm1pbiguLi50byksXG4gIH07XG59O1xuXG5jb25zdCBnZXRSZWZlcmVuY2VkSWRzID0gKG1vZGVsOiBFeHByZXNzaW9uUXVlcnksIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0+IHtcbiAgc3dpdGNoIChtb2RlbC50eXBlKSB7XG4gICAgY2FzZSBFeHByZXNzaW9uUXVlcnlUeXBlLmNsYXNzaWM6XG4gICAgICByZXR1cm4gZ2V0UmVmZXJlbmNlZElkc0ZvckNsYXNzaWNDb25kaXRpb24obW9kZWwpO1xuICAgIGNhc2UgRXhwcmVzc2lvblF1ZXJ5VHlwZS5tYXRoOlxuICAgICAgcmV0dXJuIGdldFJlZmVyZW5jZWRJZHNGb3JNYXRoKG1vZGVsLCBxdWVyaWVzKTtcbiAgICBjYXNlIEV4cHJlc3Npb25RdWVyeVR5cGUucmVzYW1wbGU6XG4gICAgY2FzZSBFeHByZXNzaW9uUXVlcnlUeXBlLnJlZHVjZTpcbiAgICAgIHJldHVybiBnZXRSZWZlcmVuY2VkSWRzRm9yUmVkdWNlKG1vZGVsKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0UmVmZXJlbmNlZElkc0ZvckNsYXNzaWNDb25kaXRpb24gPSAobW9kZWw6IEV4cHJlc3Npb25RdWVyeSkgPT4ge1xuICByZXR1cm4gbW9kZWwuY29uZGl0aW9ucz8ubWFwKChjb25kaXRpb24pID0+IHtcbiAgICByZXR1cm4gY29uZGl0aW9uLnF1ZXJ5LnBhcmFtc1swXTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRUaW1lUmFuZ2VzID0gKHJlZmVyZW5jZWRSZWZJZHM6IHN0cmluZ1tdLCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pID0+IHtcbiAgbGV0IGZyb206IG51bWJlcltdID0gW107XG4gIGxldCB0byA9IFtGQUxMX0JBQ0tfVElNRV9SQU5HRS50b107XG4gIGZvciAoY29uc3QgcmVmZXJlbmNlZFJlZklkc0tleSBvZiByZWZlcmVuY2VkUmVmSWRzKSB7XG4gICAgY29uc3QgcXVlcnkgPSBxdWVyaWVzLmZpbmQoKHF1ZXJ5KSA9PiBxdWVyeS5yZWZJZCA9PT0gcmVmZXJlbmNlZFJlZklkc0tleSk7XG5cbiAgICBpZiAoIXF1ZXJ5IHx8ICFxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZyb20ucHVzaChxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZS5mcm9tKTtcbiAgICB0by5wdXNoKHF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlLnRvKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZnJvbSxcbiAgICB0byxcbiAgfTtcbn07XG5cbmNvbnN0IGdldFJlZmVyZW5jZWRJZHNGb3JNYXRoID0gKG1vZGVsOiBFeHByZXNzaW9uUXVlcnksIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkgPT4ge1xuICByZXR1cm4gKFxuICAgIHF1ZXJpZXNcbiAgICAgIC8vIGZpbHRlciBxdWVyaWVzIG9mIHR5cGUgcXVlcnkgYW5kIGZpbHRlciBleHByZXNzaW9uIG9uIGlmIGl0IGluY2x1ZGVzIGFueSByZWZJZHNcbiAgICAgIC5maWx0ZXIoKHEpID0+IHEucXVlcnlUeXBlID09PSAncXVlcnknICYmIG1vZGVsLmV4cHJlc3Npb24/LmluY2x1ZGVzKHEucmVmSWQpKVxuICAgICAgLm1hcCgocSkgPT4ge1xuICAgICAgICByZXR1cm4gcS5yZWZJZDtcbiAgICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBnZXRSZWZlcmVuY2VkSWRzRm9yUmVkdWNlID0gKG1vZGVsOiBFeHByZXNzaW9uUXVlcnkpID0+IHtcbiAgcmV0dXJuIG1vZGVsLmV4cHJlc3Npb24gPyBbbW9kZWwuZXhwcmVzc2lvbl0gOiB1bmRlZmluZWQ7XG59O1xuIiwiaW1wb3J0IHsgRGF0YVF1ZXJ5IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBpc0V4cHJlc3Npb25SZWZlcmVuY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYy91dGlscy9EYXRhU291cmNlV2l0aEJhY2tlbmQnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uUXVlcnksIEV4cHJlc3Npb25RdWVyeVR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGlzRXhwcmVzc2lvblF1ZXJ5ID0gKGRhdGFRdWVyeT86IERhdGFRdWVyeSk6IGRhdGFRdWVyeSBpcyBFeHByZXNzaW9uUXVlcnkgPT4ge1xuICBpZiAoIWRhdGFRdWVyeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0V4cHJlc3Npb25SZWZlcmVuY2UoZGF0YVF1ZXJ5LmRhdGFzb3VyY2UpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBleHByZXNzaW9uID0gZGF0YVF1ZXJ5IGFzIEV4cHJlc3Npb25RdWVyeTtcblxuICBpZiAodHlwZW9mIGV4cHJlc3Npb24udHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoRXhwcmVzc2lvblF1ZXJ5VHlwZSkuaW5jbHVkZXMoZXhwcmVzc2lvbi50eXBlKTtcbn07XG4iLCJpbXBvcnQgeyBHcmFtbWFyIH0gZnJvbSAncHJpc21qcyc7XG5cbmltcG9ydCB7IENvbXBsZXRpb25JdGVtIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5jb25zdCBBR0dSRUdBVElPTl9PUEVSQVRPUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ3N1bScsXG4gICAgaW5zZXJ0VGV4dDogJ3N1bScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBzdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWluJyxcbiAgICBpbnNlcnRUZXh0OiAnbWluJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1pbmltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWF4JyxcbiAgICBpbnNlcnRUZXh0OiAnbWF4JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1heGltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXZnJyxcbiAgICBpbnNlcnRUZXh0OiAnYXZnJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHRoZSBhdmVyYWdlIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZGRldicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIGRldmlhdGlvbiBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzdGR2YXInLFxuICAgIGluc2VydFRleHQ6ICdzdGR2YXInLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudCcsXG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ291bnQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB2ZWN0b3InLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdib3R0b21rJyxcbiAgICBpbnNlcnRUZXh0OiAnYm90dG9taycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NtYWxsZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndG9waycsXG4gICAgaW5zZXJ0VGV4dDogJ3RvcGsnLFxuICAgIGRvY3VtZW50YXRpb246ICdMYXJnZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQSVBFX1BBUlNFUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ2pzb24nLFxuICAgIGluc2VydFRleHQ6ICdqc29uJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRXh0cmFjdGluZyBsYWJlbHMgZnJvbSB0aGUgbG9nIGxpbmUgdXNpbmcganNvbiBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdyZWdleHAnLFxuICAgIGluc2VydFRleHQ6ICdyZWdleHAgXCJcIicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0V4dHJhY3RpbmcgbGFiZWxzIGZyb20gdGhlIGxvZyBsaW5lIHVzaW5nIHJlZ2V4cCBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICAgIG1vdmU6IC0xLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdsb2dmbXQnLFxuICAgIGluc2VydFRleHQ6ICdsb2dmbXQnLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyBsb2dmbXQgcGFyc2VyLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAncGF0dGVybicsXG4gICAgaW5zZXJ0VGV4dDogJ3BhdHRlcm4nLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyBwYXR0ZXJuIHBhcnNlci4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjMrLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3VucGFjaycsXG4gICAgaW5zZXJ0VGV4dDogJ3VucGFjaycsXG4gICAgZGV0YWlsOiAndW5wYWNrIGlkZW50aWZpZXInLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUGFyc2VzIGEgSlNPTiBsb2cgbGluZSwgdW5wYWNraW5nIGFsbCBlbWJlZGRlZCBsYWJlbHMgaW4gdGhlIHBhY2sgc3RhZ2UuIEEgc3BlY2lhbCBwcm9wZXJ0eSBcIl9lbnRyeVwiIHdpbGwgYWxzbyBiZSB1c2VkIHRvIHJlcGxhY2UgdGhlIG9yaWdpbmFsIGxvZyBsaW5lLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMisuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQSVBFX09QRVJBVE9SUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAge1xuICAgIGxhYmVsOiAndW53cmFwJyxcbiAgICBpbnNlcnRUZXh0OiAndW53cmFwJyxcbiAgICBkZXRhaWw6ICd1bndyYXAgaWRlbnRpZmllcicsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdUYWtlIGxhYmVscyBhbmQgdXNlIHRoZSB2YWx1ZXMgYXMgc2FtcGxlIGRhdGEgZm9yIG1ldHJpYyBhZ2dyZWdhdGlvbnMuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdsYWJlbF9mb3JtYXQnLFxuICAgIGluc2VydFRleHQ6ICdsYWJlbF9mb3JtYXQnLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVXNlIHRvIHJlbmFtZSwgbW9kaWZ5IG9yIGFkZCBsYWJlbHMuIEZvciBleGFtcGxlLCB8IGxhYmVsX2Zvcm1hdCBmb289YmFyIC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2xpbmVfZm9ybWF0JyxcbiAgICBpbnNlcnRUZXh0OiAnbGluZV9mb3JtYXQnLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV3cml0ZXMgbG9nIGxpbmUgY29udGVudC4gRm9yIGV4YW1wbGUsIHwgbGluZV9mb3JtYXQgXCJ7ey5xdWVyeX19IHt7LmR1cmF0aW9ufX1cIiAuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFJBTkdFX1ZFQ19GVU5DVElPTlMgPSBbXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYXZnX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdhdmdfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdhdmdfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgYXZlcmFnZSBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21pbl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbWluX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbWluX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1pbmltdW0gb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ21heF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ21heF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtYXhpbXVtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZmlyc3Rfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2ZpcnN0X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnZmlyc3Rfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgZmlyc3Qgb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMysuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsYXN0X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdsYXN0X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbGFzdF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBsYXN0IG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjMrLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3VtX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdW1fb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdW1fb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgc3VtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2NvdW50X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnY291bnRfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgY291bnQgb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdGR2YXJfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdGR2YXJfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgdmFyaWFuY2Ugb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdGRkZXZfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N0ZGRldl9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N0ZGRldl9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdUaGUgcG9wdWxhdGlvbiBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdxdWFudGlsZV9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdxdWFudGlsZV9vdmVyX3RpbWUoc2NhbGFyLCByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdieXRlc19vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnYnl0ZXNfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdieXRlc19vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvdW50cyB0aGUgYW1vdW50IG9mIGJ5dGVzIHVzZWQgYnkgZWFjaCBsb2cgc3RyZWFtIGZvciBhIGdpdmVuIHJhbmdlJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdieXRlc19yYXRlJyxcbiAgICBsYWJlbDogJ2J5dGVzX3JhdGUnLFxuICAgIGRldGFpbDogJ2J5dGVzX3JhdGUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBieXRlcyBwZXIgc2Vjb25kIGZvciBlYWNoIHN0cmVhbS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3JhdGUnLFxuICAgIGxhYmVsOiAncmF0ZScsXG4gICAgZGV0YWlsOiAncmF0ZSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgZW50cmllcyBwZXIgc2Vjb25kLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRlVOQ1RJT05TID0gWy4uLkFHR1JFR0FUSU9OX09QRVJBVE9SUywgLi4uUkFOR0VfVkVDX0ZVTkNUSU9OU107XG5leHBvcnQgY29uc3QgTE9LSV9LRVlXT1JEUyA9IFsuLi5GVU5DVElPTlMsIC4uLlBJUEVfT1BFUkFUT1JTLCAuLi5QSVBFX1BBUlNFUlNdLm1hcCgoa2V5d29yZCkgPT4ga2V5d29yZC5sYWJlbCk7XG5cbmV4cG9ydCBjb25zdCBsb2tpR3JhbW1hcjogR3JhbW1hciA9IHtcbiAgY29tbWVudDoge1xuICAgIHBhdHRlcm46IC8jLiovLFxuICB9LFxuICAnY29udGV4dC1hZ2dyZWdhdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvKCh3aXRob3V0fGJ5KVxccyopXFwoW14pXSpcXCkvLCAvLyBieSAoKVxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW14oKSxcXHNdW14sKV0qW14pLFxcc10qLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpXS8sXG4gICAgfSxcbiAgfSxcbiAgJ2NvbnRleHQtbGFiZWxzJzoge1xuICAgIHBhdHRlcm46IC9cXHtbXn1dKig/PX0/KS8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvIy4qLyxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW2EtekEtWl9dXFx3Kig/PVxccyooPXwhPXw9fnwhfikpLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgJ2xhYmVsLXZhbHVlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ2F0dHItdmFsdWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW3tdLyxcbiAgICB9LFxuICB9LFxuICAnY29udGV4dC1waXBlJzoge1xuICAgIHBhdHRlcm46IC9cXHNcXHxbXj1+XVxccz9cXHcqL2ksXG4gICAgaW5zaWRlOiB7XG4gICAgICAncGlwZS1vcGVyYXRvcic6IHtcbiAgICAgICAgcGF0dGVybjogL1xcfC9pLFxuICAgICAgICBhbGlhczogJ29wZXJhdG9yJyxcbiAgICAgIH0sXG4gICAgICAncGlwZS1vcGVyYXRpb25zJzoge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAke1suLi5QSVBFX1BBUlNFUlMsIC4uLlBJUEVfT1BFUkFUT1JTXS5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX1gLCAnaScpLFxuICAgICAgICBhbGlhczogJ2tleXdvcmQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBmdW5jdGlvbjogbmV3IFJlZ0V4cChgXFxcXGIoPzoke0ZVTkNUSU9OUy5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX0pKD89XFxcXHMqXFxcXCgpYCwgJ2knKSxcbiAgJ2NvbnRleHQtcmFuZ2UnOiBbXG4gICAge1xuICAgICAgcGF0dGVybjogL1xcW1teXFxdXSooPz1cXF0pLywgLy8gWzFtXVxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdHRlcm46IC8ob2Zmc2V0XFxzKylcXHcrLywgLy8gb2Zmc2V0IDFtXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBxdW90ZToge1xuICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXSkqXCIvLFxuICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICBncmVlZHk6IHRydWUsXG4gIH0sXG4gIGJhY2t0aWNrczoge1xuICAgIHBhdHRlcm46IC9gKD86XFxcXC58W15cXFxcYF0pKmAvLFxuICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICBncmVlZHk6IHRydWUsXG4gIH0sXG4gIG51bWJlcjogL1xcYi0/XFxkKygoXFwuXFxkKik/KFtlRV1bKy1dP1xcZCspPyk/XFxiLyxcbiAgb3BlcmF0b3I6IC9cXHM/KFxcfFs9fl0/fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dPylcXHM/L2ksXG4gIHB1bmN0dWF0aW9uOiAvW3t9KCksLl0vLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9raUdyYW1tYXI7XG4iLCJpbXBvcnQgeyBHcmFtbWFyIH0gZnJvbSAncHJpc21qcyc7XG5cbmltcG9ydCB7IENvbXBsZXRpb25JdGVtIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG4vLyBXaGVuIGNoYW5naW5nIFJBVEVfUkFOR0VTLCBjaGVjayBpZiBMb2tpL0xvZ1FMIHJhbmdlcyBzaG91bGQgYmUgY2hhbmdlZCB0b29cbi8vIEBzZWUgcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS9sYW5ndWFnZV9wcm92aWRlci50c1xuZXhwb3J0IGNvbnN0IFJBVEVfUkFOR0VTOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7IGxhYmVsOiAnJF9faW50ZXJ2YWwnLCBzb3J0VmFsdWU6ICckX19pbnRlcnZhbCcgfSxcbiAgeyBsYWJlbDogJyRfX3JhdGVfaW50ZXJ2YWwnLCBzb3J0VmFsdWU6ICckX19yYXRlX2ludGVydmFsJyB9LFxuICB7IGxhYmVsOiAnJF9fcmFuZ2UnLCBzb3J0VmFsdWU6ICckX19yYW5nZScgfSxcbiAgeyBsYWJlbDogJzFtJywgc29ydFZhbHVlOiAnMDA6MDE6MDAnIH0sXG4gIHsgbGFiZWw6ICc1bScsIHNvcnRWYWx1ZTogJzAwOjA1OjAwJyB9LFxuICB7IGxhYmVsOiAnMTBtJywgc29ydFZhbHVlOiAnMDA6MTA6MDAnIH0sXG4gIHsgbGFiZWw6ICczMG0nLCBzb3J0VmFsdWU6ICcwMDozMDowMCcgfSxcbiAgeyBsYWJlbDogJzFoJywgc29ydFZhbHVlOiAnMDE6MDA6MDAnIH0sXG4gIHsgbGFiZWw6ICcxZCcsIHNvcnRWYWx1ZTogJzI0OjAwOjAwJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IE9QRVJBVE9SUyA9IFsnYnknLCAnZ3JvdXBfbGVmdCcsICdncm91cF9yaWdodCcsICdpZ25vcmluZycsICdvbicsICdvZmZzZXQnLCAnd2l0aG91dCddO1xuZXhwb3J0IGNvbnN0IExPR0lDQUxfT1BFUkFUT1JTID0gWydvcicsICdhbmQnLCAndW5sZXNzJ107XG5cbmNvbnN0IFRSSUdPTk9NRVRSSUNfRlVOQ1RJT05TOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdhY29zJyxcbiAgICBpbnNlcnRUZXh0OiAnYWNvcycsXG4gICAgZGV0YWlsOiAnYWNvcyh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGFyY2Nvc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2Fjb3NoJyxcbiAgICBpbnNlcnRUZXh0OiAnYWNvc2gnLFxuICAgIGRldGFpbDogJ2Fjb3NoKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBoeXBlcmJvbGljIGNvc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2FzaW4nLFxuICAgIGluc2VydFRleHQ6ICdhc2luJyxcbiAgICBkZXRhaWw6ICdhc2luKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgYXJjc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2FzaW5oJyxcbiAgICBpbnNlcnRUZXh0OiAnYXNpbmgnLFxuICAgIGRldGFpbDogJ2FzaW5oKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBoeXBlcmJvbGljIHNpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhdGFuJyxcbiAgICBpbnNlcnRUZXh0OiAnYXRhbicsXG4gICAgZGV0YWlsOiAnYXRhbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGFyY3RhbmdlbnQgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhdGFuaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2F0YW5oJyxcbiAgICBkZXRhaWw6ICdhdGFuaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGludmVyc2UgaHlwZXJib2xpYyB0YW5nZW50IG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnY29zJyxcbiAgICBpbnNlcnRUZXh0OiAnY29zJyxcbiAgICBkZXRhaWw6ICdjb3ModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBjb3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3NoJyxcbiAgICBpbnNlcnRUZXh0OiAnY29zaCcsXG4gICAgZGV0YWlsOiAnY29zaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGh5cGVyYm9saWMgY29zaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc2luJyxcbiAgICBpbnNlcnRUZXh0OiAnc2luJyxcbiAgICBkZXRhaWw6ICdzaW4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBzaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc2luaCcsXG4gICAgaW5zZXJ0VGV4dDogJ3NpbmgnLFxuICAgIGRldGFpbDogJ3NpbmgodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBoeXBlcmJvbGljIHNpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICd0YW4nLFxuICAgIGluc2VydFRleHQ6ICd0YW4nLFxuICAgIGRldGFpbDogJ3Rhbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIHRhbmdlbnQgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICd0YW5oJyxcbiAgICBpbnNlcnRUZXh0OiAndGFuaCcsXG4gICAgZGV0YWlsOiAndGFuaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGh5cGVyYm9saWMgdGFuZ2VudCBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG5dO1xuXG5jb25zdCBBR0dSRUdBVElPTl9PUEVSQVRPUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ3N1bScsXG4gICAgaW5zZXJ0VGV4dDogJ3N1bScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBzdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWluJyxcbiAgICBpbnNlcnRUZXh0OiAnbWluJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1pbmltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWF4JyxcbiAgICBpbnNlcnRUZXh0OiAnbWF4JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1heGltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXZnJyxcbiAgICBpbnNlcnRUZXh0OiAnYXZnJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHRoZSBhdmVyYWdlIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2dyb3VwJyxcbiAgICBpbnNlcnRUZXh0OiAnZ3JvdXAnLFxuICAgIGRvY3VtZW50YXRpb246ICdBbGwgdmFsdWVzIGluIHRoZSByZXN1bHRpbmcgdmVjdG9yIGFyZSAxJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc3RkZGV2JyxcbiAgICBpbnNlcnRUZXh0OiAnc3RkZGV2JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHBvcHVsYXRpb24gc3RhbmRhcmQgZGV2aWF0aW9uIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZHZhcicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZHZhcicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIHZhcmlhbmNlIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2NvdW50JyxcbiAgICBpbnNlcnRUZXh0OiAnY291bnQnLFxuICAgIGRvY3VtZW50YXRpb246ICdDb3VudCBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIHZlY3RvcicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2NvdW50X3ZhbHVlcycsXG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50X3ZhbHVlcycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvdW50IG51bWJlciBvZiBlbGVtZW50cyB3aXRoIHRoZSBzYW1lIHZhbHVlJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYm90dG9taycsXG4gICAgaW5zZXJ0VGV4dDogJ2JvdHRvbWsnLFxuICAgIGRvY3VtZW50YXRpb246ICdTbWFsbGVzdCBrIGVsZW1lbnRzIGJ5IHNhbXBsZSB2YWx1ZScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3RvcGsnLFxuICAgIGluc2VydFRleHQ6ICd0b3BrJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnTGFyZ2VzdCBrIGVsZW1lbnRzIGJ5IHNhbXBsZSB2YWx1ZScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3F1YW50aWxlJyxcbiAgICBpbnNlcnRUZXh0OiAncXVhbnRpbGUnLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgz4YtcXVhbnRpbGUgKDAg4omkIM+GIOKJpCAxKSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgLi4uQUdHUkVHQVRJT05fT1BFUkFUT1JTLFxuICAuLi5UUklHT05PTUVUUklDX0ZVTkNUSU9OUyxcbiAge1xuICAgIGluc2VydFRleHQ6ICdhYnMnLFxuICAgIGxhYmVsOiAnYWJzJyxcbiAgICBkZXRhaWw6ICdhYnModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSBpbnB1dCB2ZWN0b3Igd2l0aCBhbGwgc2FtcGxlIHZhbHVlcyBjb252ZXJ0ZWQgdG8gdGhlaXIgYWJzb2x1dGUgdmFsdWUuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdhYnNlbnQnLFxuICAgIGxhYmVsOiAnYWJzZW50JyxcbiAgICBkZXRhaWw6ICdhYnNlbnQodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyBhbiBlbXB0eSB2ZWN0b3IgaWYgdGhlIHZlY3RvciBwYXNzZWQgdG8gaXQgaGFzIGFueSBlbGVtZW50cyBhbmQgYSAxLWVsZW1lbnQgdmVjdG9yIHdpdGggdGhlIHZhbHVlIDEgaWYgdGhlIHZlY3RvciBwYXNzZWQgdG8gaXQgaGFzIG5vIGVsZW1lbnRzLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYWxlcnRpbmcgb24gd2hlbiBubyB0aW1lIHNlcmllcyBleGlzdCBmb3IgYSBnaXZlbiBtZXRyaWMgbmFtZSBhbmQgbGFiZWwgY29tYmluYXRpb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdhYnNlbnRfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2Fic2VudF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2Fic2VudCh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyBhbiBlbXB0eSB2ZWN0b3IgaWYgdGhlIHJhbmdlIHZlY3RvciBwYXNzZWQgdG8gaXQgaGFzIGFueSBlbGVtZW50cyBhbmQgYSAxLWVsZW1lbnQgdmVjdG9yIHdpdGggdGhlIHZhbHVlIDEgaWYgdGhlIHJhbmdlIHZlY3RvciBwYXNzZWQgdG8gaXQgaGFzIG5vIGVsZW1lbnRzLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2VpbCcsXG4gICAgbGFiZWw6ICdjZWlsJyxcbiAgICBkZXRhaWw6ICdjZWlsKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUm91bmRzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdXAgdG8gdGhlIG5lYXJlc3QgaW50ZWdlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NoYW5nZXMnLFxuICAgIGxhYmVsOiAnY2hhbmdlcycsXG4gICAgZGV0YWlsOiAnY2hhbmdlcyh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnRm9yIGVhY2ggaW5wdXQgdGltZSBzZXJpZXMsIGBjaGFuZ2VzKHYgcmFuZ2UtdmVjdG9yKWAgcmV0dXJucyB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0cyB2YWx1ZSBoYXMgY2hhbmdlZCB3aXRoaW4gdGhlIHByb3ZpZGVkIHRpbWUgcmFuZ2UgYXMgYW4gaW5zdGFudCB2ZWN0b3IuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjbGFtcCcsXG4gICAgbGFiZWw6ICdjbGFtcCcsXG4gICAgZGV0YWlsOiAnY2xhbXAodiBpbnN0YW50LXZlY3RvciwgbWluIHNjYWxhciwgbWF4IHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2xhbXBzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdG8gaGF2ZSBhIGxvd2VyIGxpbWl0IG9mIGBtaW5gIGFuZCBhbiB1cHBlciBsaW1pdCBvZiBgbWF4YC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NsYW1wX21heCcsXG4gICAgbGFiZWw6ICdjbGFtcF9tYXgnLFxuICAgIGRldGFpbDogJ2NsYW1wX21heCh2IGluc3RhbnQtdmVjdG9yLCBtYXggc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NsYW1wcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHRvIGhhdmUgYW4gdXBwZXIgbGltaXQgb2YgYG1heGAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjbGFtcF9taW4nLFxuICAgIGxhYmVsOiAnY2xhbXBfbWluJyxcbiAgICBkZXRhaWw6ICdjbGFtcF9taW4odiBpbnN0YW50LXZlY3RvciwgbWluIHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDbGFtcHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCB0byBoYXZlIGEgbG93ZXIgbGltaXQgb2YgYG1pbmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjb3VudF9zY2FsYXInLFxuICAgIGxhYmVsOiAnY291bnRfc2NhbGFyJyxcbiAgICBkZXRhaWw6ICdjb3VudF9zY2FsYXIodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGEgdGltZSBzZXJpZXMgdmVjdG9yIGFzIGEgc2NhbGFyLiBUaGlzIGlzIGluIGNvbnRyYXN0IHRvIHRoZSBgY291bnQoKWAgYWdncmVnYXRpb24gb3BlcmF0b3IsIHdoaWNoIGFsd2F5cyByZXR1cm5zIGEgdmVjdG9yIChhbiBlbXB0eSBvbmUgaWYgdGhlIGlucHV0IHZlY3RvciBpcyBlbXB0eSkgYW5kIGFsbG93cyBncm91cGluZyBieSBsYWJlbHMgdmlhIGEgYGJ5YCBjbGF1c2UuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkZWcnLFxuICAgIGxhYmVsOiAnZGVnJyxcbiAgICBkZXRhaWw6ICdkZWcodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDb252ZXJ0cyByYWRpYW5zIHRvIGRlZ3JlZXMgZm9yIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkYXlfb2ZfbW9udGgnLFxuICAgIGxhYmVsOiAnZGF5X29mX21vbnRoJyxcbiAgICBkZXRhaWw6ICdkYXlfb2ZfbW9udGgodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSBkYXkgb2YgdGhlIG1vbnRoIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAxIHRvIDMxLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGF5X29mX3dlZWsnLFxuICAgIGxhYmVsOiAnZGF5X29mX3dlZWsnLFxuICAgIGRldGFpbDogJ2RheV9vZl93ZWVrKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIGRheSBvZiB0aGUgd2VlayBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMCB0byA2LCB3aGVyZSAwIG1lYW5zIFN1bmRheSBldGMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkYXlzX2luX21vbnRoJyxcbiAgICBsYWJlbDogJ2RheXNfaW5fbW9udGgnLFxuICAgIGRldGFpbDogJ2RheXNfaW5fbW9udGgodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyBudW1iZXIgb2YgZGF5cyBpbiB0aGUgbW9udGggZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDI4IHRvIDMxLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGVsdGEnLFxuICAgIGxhYmVsOiAnZGVsdGEnLFxuICAgIGRldGFpbDogJ2RlbHRhKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0IHZhbHVlIG9mIGVhY2ggdGltZSBzZXJpZXMgZWxlbWVudCBpbiBhIHJhbmdlIHZlY3RvciBgdmAsIHJldHVybmluZyBhbiBpbnN0YW50IHZlY3RvciB3aXRoIHRoZSBnaXZlbiBkZWx0YXMgYW5kIGVxdWl2YWxlbnQgbGFiZWxzLiBUaGUgZGVsdGEgaXMgZXh0cmFwb2xhdGVkIHRvIGNvdmVyIHRoZSBmdWxsIHRpbWUgcmFuZ2UgYXMgc3BlY2lmaWVkIGluIHRoZSByYW5nZSB2ZWN0b3Igc2VsZWN0b3IsIHNvIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gZ2V0IGEgbm9uLWludGVnZXIgcmVzdWx0IGV2ZW4gaWYgdGhlIHNhbXBsZSB2YWx1ZXMgYXJlIGFsbCBpbnRlZ2Vycy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2Rlcml2JyxcbiAgICBsYWJlbDogJ2Rlcml2JyxcbiAgICBkZXRhaWw6ICdkZXJpdih2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgcGVyLXNlY29uZCBkZXJpdmF0aXZlIG9mIHRoZSB0aW1lIHNlcmllcyBpbiBhIHJhbmdlIHZlY3RvciBgdmAsIHVzaW5nIHNpbXBsZSBsaW5lYXIgcmVncmVzc2lvbi4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2Ryb3BfY29tbW9uX2xhYmVscycsXG4gICAgbGFiZWw6ICdkcm9wX2NvbW1vbl9sYWJlbHMnLFxuICAgIGRldGFpbDogJ2Ryb3BfY29tbW9uX2xhYmVscyhpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdEcm9wcyBhbGwgbGFiZWxzIHRoYXQgaGF2ZSB0aGUgc2FtZSBuYW1lIGFuZCB2YWx1ZSBhY3Jvc3MgYWxsIHNlcmllcyBpbiB0aGUgaW5wdXQgdmVjdG9yLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZXhwJyxcbiAgICBsYWJlbDogJ2V4cCcsXG4gICAgZGV0YWlsOiAnZXhwKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGV4cG9uZW50aWFsIGZ1bmN0aW9uIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLlxcblNwZWNpYWwgY2FzZXMgYXJlOlxcbiogYEV4cCgrSW5mKSA9ICtJbmZgIFxcbiogYEV4cChOYU4pID0gTmFOYCcsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZmxvb3InLFxuICAgIGxhYmVsOiAnZmxvb3InLFxuICAgIGRldGFpbDogJ2Zsb29yKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUm91bmRzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgZG93biB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnaGlzdG9ncmFtX3F1YW50aWxlJyxcbiAgICBsYWJlbDogJ2hpc3RvZ3JhbV9xdWFudGlsZScsXG4gICAgZGV0YWlsOiAnaGlzdG9ncmFtX3F1YW50aWxlKM+GIGZsb2F0LCBiIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSDPhi1xdWFudGlsZSAoMCDiiaQgz4Yg4omkIDEpIGZyb20gdGhlIGJ1Y2tldHMgYGJgIG9mIGEgaGlzdG9ncmFtLiBUaGUgc2FtcGxlcyBpbiBgYmAgYXJlIHRoZSBjb3VudHMgb2Ygb2JzZXJ2YXRpb25zIGluIGVhY2ggYnVja2V0LiBFYWNoIHNhbXBsZSBtdXN0IGhhdmUgYSBsYWJlbCBgbGVgIHdoZXJlIHRoZSBsYWJlbCB2YWx1ZSBkZW5vdGVzIHRoZSBpbmNsdXNpdmUgdXBwZXIgYm91bmQgb2YgdGhlIGJ1Y2tldC4gKFNhbXBsZXMgd2l0aG91dCBzdWNoIGEgbGFiZWwgYXJlIHNpbGVudGx5IGlnbm9yZWQuKSBUaGUgaGlzdG9ncmFtIG1ldHJpYyB0eXBlIGF1dG9tYXRpY2FsbHkgcHJvdmlkZXMgdGltZSBzZXJpZXMgd2l0aCB0aGUgYF9idWNrZXRgIHN1ZmZpeCBhbmQgdGhlIGFwcHJvcHJpYXRlIGxhYmVscy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2hvbHRfd2ludGVycycsXG4gICAgbGFiZWw6ICdob2x0X3dpbnRlcnMnLFxuICAgIGRldGFpbDogJ2hvbHRfd2ludGVycyh2IHJhbmdlLXZlY3Rvciwgc2Ygc2NhbGFyLCB0ZiBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1Byb2R1Y2VzIGEgc21vb3RoZWQgdmFsdWUgZm9yIHRpbWUgc2VyaWVzIGJhc2VkIG9uIHRoZSByYW5nZSBpbiBgdmAuIFRoZSBsb3dlciB0aGUgc21vb3RoaW5nIGZhY3RvciBgc2ZgLCB0aGUgbW9yZSBpbXBvcnRhbmNlIGlzIGdpdmVuIHRvIG9sZCBkYXRhLiBUaGUgaGlnaGVyIHRoZSB0cmVuZCBmYWN0b3IgYHRmYCwgdGhlIG1vcmUgdHJlbmRzIGluIHRoZSBkYXRhIGlzIGNvbnNpZGVyZWQuIEJvdGggYHNmYCBhbmQgYHRmYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2hvdXInLFxuICAgIGxhYmVsOiAnaG91cicsXG4gICAgZGV0YWlsOiAnaG91cih2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdGhlIGhvdXIgb2YgdGhlIGRheSBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMCB0byAyMy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2lkZWx0YScsXG4gICAgbGFiZWw6ICdpZGVsdGEnLFxuICAgIGRldGFpbDogJ2lkZWx0YSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBsYXN0IHR3byBzYW1wbGVzIGluIHRoZSByYW5nZSB2ZWN0b3IgYHZgLCByZXR1cm5pbmcgYW4gaW5zdGFudCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gZGVsdGFzIGFuZCBlcXVpdmFsZW50IGxhYmVscy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2luY3JlYXNlJyxcbiAgICBsYWJlbDogJ2luY3JlYXNlJyxcbiAgICBkZXRhaWw6ICdpbmNyZWFzZSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgaW5jcmVhc2UgaW4gdGhlIHRpbWUgc2VyaWVzIGluIHRoZSByYW5nZSB2ZWN0b3IuIEJyZWFrcyBpbiBtb25vdG9uaWNpdHkgKHN1Y2ggYXMgY291bnRlciByZXNldHMgZHVlIHRvIHRhcmdldCByZXN0YXJ0cykgYXJlIGF1dG9tYXRpY2FsbHkgYWRqdXN0ZWQgZm9yLiBUaGUgaW5jcmVhc2UgaXMgZXh0cmFwb2xhdGVkIHRvIGNvdmVyIHRoZSBmdWxsIHRpbWUgcmFuZ2UgYXMgc3BlY2lmaWVkIGluIHRoZSByYW5nZSB2ZWN0b3Igc2VsZWN0b3IsIHNvIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gZ2V0IGEgbm9uLWludGVnZXIgcmVzdWx0IGV2ZW4gaWYgYSBjb3VudGVyIGluY3JlYXNlcyBvbmx5IGJ5IGludGVnZXIgaW5jcmVtZW50cy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2lyYXRlJyxcbiAgICBsYWJlbDogJ2lyYXRlJyxcbiAgICBkZXRhaWw6ICdpcmF0ZSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgcGVyLXNlY29uZCBpbnN0YW50IHJhdGUgb2YgaW5jcmVhc2Ugb2YgdGhlIHRpbWUgc2VyaWVzIGluIHRoZSByYW5nZSB2ZWN0b3IuIFRoaXMgaXMgYmFzZWQgb24gdGhlIGxhc3QgdHdvIGRhdGEgcG9pbnRzLiBCcmVha3MgaW4gbW9ub3RvbmljaXR5IChzdWNoIGFzIGNvdW50ZXIgcmVzZXRzIGR1ZSB0byB0YXJnZXQgcmVzdGFydHMpIGFyZSBhdXRvbWF0aWNhbGx5IGFkanVzdGVkIGZvci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xhYmVsX2pvaW4nLFxuICAgIGxhYmVsOiAnbGFiZWxfam9pbicsXG4gICAgZGV0YWlsOlxuICAgICAgJ2xhYmVsX2pvaW4odiBpbnN0YW50LXZlY3RvciwgZHN0X2xhYmVsIHN0cmluZywgc2VwYXJhdG9yIHN0cmluZywgc3JjX2xhYmVsXzEgc3RyaW5nLCBzcmNfbGFiZWxfMiBzdHJpbmcsIC4uLiknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnRm9yIGVhY2ggdGltZXNlcmllcyBpbiBgdmAsIGpvaW5zIGFsbCB0aGUgdmFsdWVzIG9mIGFsbCB0aGUgYHNyY19sYWJlbHNgIHVzaW5nIGBzZXBhcmF0b3JgIGFuZCByZXR1cm5zIHRoZSB0aW1lc2VyaWVzIHdpdGggdGhlIGxhYmVsIGBkc3RfbGFiZWxgIGNvbnRhaW5pbmcgdGhlIGpvaW5lZCB2YWx1ZS4gVGhlcmUgY2FuIGJlIGFueSBudW1iZXIgb2YgYHNyY19sYWJlbHNgIGluIHRoaXMgZnVuY3Rpb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsYWJlbF9yZXBsYWNlJyxcbiAgICBsYWJlbDogJ2xhYmVsX3JlcGxhY2UnLFxuICAgIGRldGFpbDogJ2xhYmVsX3JlcGxhY2UodiBpbnN0YW50LXZlY3RvciwgZHN0X2xhYmVsIHN0cmluZywgcmVwbGFjZW1lbnQgc3RyaW5nLCBzcmNfbGFiZWwgc3RyaW5nLCByZWdleCBzdHJpbmcpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgXCJGb3IgZWFjaCB0aW1lc2VyaWVzIGluIGB2YCwgYGxhYmVsX3JlcGxhY2UodiBpbnN0YW50LXZlY3RvciwgZHN0X2xhYmVsIHN0cmluZywgcmVwbGFjZW1lbnQgc3RyaW5nLCBzcmNfbGFiZWwgc3RyaW5nLCByZWdleCBzdHJpbmcpYCAgbWF0Y2hlcyB0aGUgcmVndWxhciBleHByZXNzaW9uIGByZWdleGAgYWdhaW5zdCB0aGUgbGFiZWwgYHNyY19sYWJlbGAuICBJZiBpdCBtYXRjaGVzLCB0aGVuIHRoZSB0aW1lc2VyaWVzIGlzIHJldHVybmVkIHdpdGggdGhlIGxhYmVsIGBkc3RfbGFiZWxgIHJlcGxhY2VkIGJ5IHRoZSBleHBhbnNpb24gb2YgYHJlcGxhY2VtZW50YC4gYCQxYCBpcyByZXBsYWNlZCB3aXRoIHRoZSBmaXJzdCBtYXRjaGluZyBzdWJncm91cCwgYCQyYCB3aXRoIHRoZSBzZWNvbmQgZXRjLiBJZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGRvZXNuJ3QgbWF0Y2ggdGhlbiB0aGUgdGltZXNlcmllcyBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXCIsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbG4nLFxuICAgIGxhYmVsOiAnbG4nLFxuICAgIGRldGFpbDogJ2xuKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIG5hdHVyYWwgbG9nYXJpdGhtIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLlxcblNwZWNpYWwgY2FzZXMgYXJlOlxcbiAqIGBsbigrSW5mKSA9ICtJbmZgXFxuICogYGxuKDApID0gLUluZmBcXG4gKiBgbG4oeCA8IDApID0gTmFOYFxcbiAqIGBsbihOYU4pID0gTmFOYCcsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbG9nMicsXG4gICAgbGFiZWw6ICdsb2cyJyxcbiAgICBkZXRhaWw6ICdsb2cyKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGJpbmFyeSBsb2dhcml0aG0gZm9yIGFsbCBlbGVtZW50cyBpbiBgdmAuIFRoZSBzcGVjaWFsIGNhc2VzIGFyZSBlcXVpdmFsZW50IHRvIHRob3NlIGluIGBsbmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsb2cxMCcsXG4gICAgbGFiZWw6ICdsb2cxMCcsXG4gICAgZGV0YWlsOiAnbG9nMTAodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgZGVjaW1hbCBsb2dhcml0aG0gZm9yIGFsbCBlbGVtZW50cyBpbiBgdmAuIFRoZSBzcGVjaWFsIGNhc2VzIGFyZSBlcXVpdmFsZW50IHRvIHRob3NlIGluIGBsbmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtaW51dGUnLFxuICAgIGxhYmVsOiAnbWludXRlJyxcbiAgICBkZXRhaWw6ICdtaW51dGUodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyB0aGUgbWludXRlIG9mIHRoZSBob3VyIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAwIHRvIDU5LicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbW9udGgnLFxuICAgIGxhYmVsOiAnbW9udGgnLFxuICAgIGRldGFpbDogJ21vbnRoKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG1vbnRoIG9mIHRoZSB5ZWFyIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAxIHRvIDEyLCB3aGVyZSAxIG1lYW5zIEphbnVhcnkgZXRjLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncGknLFxuICAgIGxhYmVsOiAncGknLFxuICAgIGRldGFpbDogJ3BpKCknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHBpJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdwcmVkaWN0X2xpbmVhcicsXG4gICAgbGFiZWw6ICdwcmVkaWN0X2xpbmVhcicsXG4gICAgZGV0YWlsOiAncHJlZGljdF9saW5lYXIodiByYW5nZS12ZWN0b3IsIHQgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdQcmVkaWN0cyB0aGUgdmFsdWUgb2YgdGltZSBzZXJpZXMgYHRgIHNlY29uZHMgZnJvbSBub3csIGJhc2VkIG9uIHRoZSByYW5nZSB2ZWN0b3IgYHZgLCB1c2luZyBzaW1wbGUgbGluZWFyIHJlZ3Jlc3Npb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyYWQnLFxuICAgIGxhYmVsOiAncmFkJyxcbiAgICBkZXRhaWw6ICdyYWQodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDb252ZXJ0cyBkZWdyZWVzIHRvIHJhZGlhbnMgZm9yIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyYXRlJyxcbiAgICBsYWJlbDogJ3JhdGUnLFxuICAgIGRldGFpbDogJ3JhdGUodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgXCJDYWxjdWxhdGVzIHRoZSBwZXItc2Vjb25kIGF2ZXJhZ2UgcmF0ZSBvZiBpbmNyZWFzZSBvZiB0aGUgdGltZSBzZXJpZXMgaW4gdGhlIHJhbmdlIHZlY3Rvci4gQnJlYWtzIGluIG1vbm90b25pY2l0eSAoc3VjaCBhcyBjb3VudGVyIHJlc2V0cyBkdWUgdG8gdGFyZ2V0IHJlc3RhcnRzKSBhcmUgYXV0b21hdGljYWxseSBhZGp1c3RlZCBmb3IuIEFsc28sIHRoZSBjYWxjdWxhdGlvbiBleHRyYXBvbGF0ZXMgdG8gdGhlIGVuZHMgb2YgdGhlIHRpbWUgcmFuZ2UsIGFsbG93aW5nIGZvciBtaXNzZWQgc2NyYXBlcyBvciBpbXBlcmZlY3QgYWxpZ25tZW50IG9mIHNjcmFwZSBjeWNsZXMgd2l0aCB0aGUgcmFuZ2UncyB0aW1lIHBlcmlvZC5cIixcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyZXNldHMnLFxuICAgIGxhYmVsOiAncmVzZXRzJyxcbiAgICBkZXRhaWw6ICdyZXNldHModiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0ZvciBlYWNoIGlucHV0IHRpbWUgc2VyaWVzLCBgcmVzZXRzKHYgcmFuZ2UtdmVjdG9yKWAgcmV0dXJucyB0aGUgbnVtYmVyIG9mIGNvdW50ZXIgcmVzZXRzIHdpdGhpbiB0aGUgcHJvdmlkZWQgdGltZSByYW5nZSBhcyBhbiBpbnN0YW50IHZlY3Rvci4gQW55IGRlY3JlYXNlIGluIHRoZSB2YWx1ZSBiZXR3ZWVuIHR3byBjb25zZWN1dGl2ZSBzYW1wbGVzIGlzIGludGVycHJldGVkIGFzIGEgY291bnRlciByZXNldC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3JvdW5kJyxcbiAgICBsYWJlbDogJ3JvdW5kJyxcbiAgICBkZXRhaWw6ICdyb3VuZCh2IGluc3RhbnQtdmVjdG9yLCB0b19uZWFyZXN0PTEgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSb3VuZHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyLiBUaWVzIGFyZSByZXNvbHZlZCBieSByb3VuZGluZyB1cC4gVGhlIG9wdGlvbmFsIGB0b19uZWFyZXN0YCBhcmd1bWVudCBhbGxvd3Mgc3BlY2lmeWluZyB0aGUgbmVhcmVzdCBtdWx0aXBsZSB0byB3aGljaCB0aGUgc2FtcGxlIHZhbHVlcyBzaG91bGQgYmUgcm91bmRlZC4gVGhpcyBtdWx0aXBsZSBtYXkgYWxzbyBiZSBhIGZyYWN0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc2NhbGFyJyxcbiAgICBsYWJlbDogJ3NjYWxhcicsXG4gICAgZGV0YWlsOiAnc2NhbGFyKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0dpdmVuIGEgc2luZ2xlLWVsZW1lbnQgaW5wdXQgdmVjdG9yLCBgc2NhbGFyKHYgaW5zdGFudC12ZWN0b3IpYCByZXR1cm5zIHRoZSBzYW1wbGUgdmFsdWUgb2YgdGhhdCBzaW5nbGUgZWxlbWVudCBhcyBhIHNjYWxhci4gSWYgdGhlIGlucHV0IHZlY3RvciBkb2VzIG5vdCBoYXZlIGV4YWN0bHkgb25lIGVsZW1lbnQsIGBzY2FsYXJgIHdpbGwgcmV0dXJuIGBOYU5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc2duJyxcbiAgICBsYWJlbDogJ3NnbicsXG4gICAgZGV0YWlsOiAnc2duKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgYSB2ZWN0b3Igd2l0aCBhbGwgc2FtcGxlIHZhbHVlcyBjb252ZXJ0ZWQgdG8gdGhlaXIgc2lnbiwgZGVmaW5lZCBhcyB0aGlzOiAxIGlmIHYgaXMgcG9zaXRpdmUsIC0xIGlmIHYgaXMgbmVnYXRpdmUgYW5kIDAgaWYgdiBpcyBlcXVhbCB0byB6ZXJvLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc29ydCcsXG4gICAgbGFiZWw6ICdzb3J0JyxcbiAgICBkZXRhaWw6ICdzb3J0KHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB2ZWN0b3IgZWxlbWVudHMgc29ydGVkIGJ5IHRoZWlyIHNhbXBsZSB2YWx1ZXMsIGluIGFzY2VuZGluZyBvcmRlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NvcnRfZGVzYycsXG4gICAgbGFiZWw6ICdzb3J0X2Rlc2MnLFxuICAgIGRldGFpbDogJ3NvcnRfZGVzYyh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdmVjdG9yIGVsZW1lbnRzIHNvcnRlZCBieSB0aGVpciBzYW1wbGUgdmFsdWVzLCBpbiBkZXNjZW5kaW5nIG9yZGVyLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3FydCcsXG4gICAgbGFiZWw6ICdzcXJ0JyxcbiAgICBkZXRhaWw6ICdzcXJ0KHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlcyB0aGUgc3F1YXJlIHJvb3Qgb2YgYWxsIGVsZW1lbnRzIGluIGB2YC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3RpbWUnLFxuICAgIGxhYmVsOiAndGltZScsXG4gICAgZGV0YWlsOiAndGltZSgpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIEphbnVhcnkgMSwgMTk3MCBVVEMuIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IGFjdHVhbGx5IHJldHVybiB0aGUgY3VycmVudCB0aW1lLCBidXQgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGV4cHJlc3Npb24gaXMgdG8gYmUgZXZhbHVhdGVkLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAndGltZXN0YW1wJyxcbiAgICBsYWJlbDogJ3RpbWVzdGFtcCcsXG4gICAgZGV0YWlsOiAndGltZXN0YW1wKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIHRpbWVzdGFtcCBvZiBlYWNoIG9mIHRoZSBzYW1wbGVzIG9mIHRoZSBnaXZlbiB2ZWN0b3IgYXMgdGhlIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIEphbnVhcnkgMSwgMTk3MCBVVEMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICd2ZWN0b3InLFxuICAgIGxhYmVsOiAndmVjdG9yJyxcbiAgICBkZXRhaWw6ICd2ZWN0b3IocyBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgc2NhbGFyIGBzYCBhcyBhIHZlY3RvciB3aXRoIG5vIGxhYmVscy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3llYXInLFxuICAgIGxhYmVsOiAneWVhcicsXG4gICAgZGV0YWlsOiAneWVhcih2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdGhlIHllYXIgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2F2Z19vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnYXZnX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnYXZnX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIGF2ZXJhZ2UgdmFsdWUgb2YgYWxsIHBvaW50cyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWluX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdtaW5fb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdtaW5fb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbWluaW11bSB2YWx1ZSBvZiBhbGwgcG9pbnRzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ21heF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ21heF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtYXhpbXVtIHZhbHVlIG9mIGFsbCBwb2ludHMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N1bV9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3VtX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3VtX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIHN1bSBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjb3VudF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdjb3VudF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBjb3VudCBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdxdWFudGlsZV9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdxdWFudGlsZV9vdmVyX3RpbWUoc2NhbGFyLCByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3RkZGV2X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdGRkZXZfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdGRkZXZfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgcG9wdWxhdGlvbiBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdGR2YXJfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdGR2YXJfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvZiB0aGUgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsYXN0X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdsYXN0X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbGFzdF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtb3N0IHJlY2VudCBwb2ludCB2YWx1ZSBpbiBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQUk9NX0tFWVdPUkRTID0gRlVOQ1RJT05TLm1hcCgoa2V5d29yZCkgPT4ga2V5d29yZC5sYWJlbCk7XG5cbmV4cG9ydCBjb25zdCBwcm9tcWxHcmFtbWFyOiBHcmFtbWFyID0ge1xuICBjb21tZW50OiB7XG4gICAgcGF0dGVybjogLyMuKi8sXG4gIH0sXG4gICdjb250ZXh0LWFnZ3JlZ2F0aW9uJzoge1xuICAgIHBhdHRlcm46IC8oKGJ5fHdpdGhvdXQpXFxzKilcXChbXildKlxcKS8sIC8vIGJ5ICgpXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdsYWJlbC1rZXknOiB7XG4gICAgICAgIHBhdHRlcm46IC9bXigpLFxcc11bXiwpXSpbXiksXFxzXSovLFxuICAgICAgICBhbGlhczogJ2F0dHItbmFtZScsXG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IC9bKCldLyxcbiAgICB9LFxuICB9LFxuICAnY29udGV4dC1sYWJlbHMnOiB7XG4gICAgcGF0dGVybjogL1xce1tefV0qKD89fT8pLyxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC8jLiovLFxuICAgICAgfSxcbiAgICAgICdsYWJlbC1rZXknOiB7XG4gICAgICAgIHBhdHRlcm46IC9bYS16X11cXHcqKD89XFxzKig9fCE9fD1+fCF+KSkvLFxuICAgICAgICBhbGlhczogJ2F0dHItbmFtZScsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwtdmFsdWUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXSkqXCIvLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnYXR0ci12YWx1ZScsXG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IC9be10vLFxuICAgIH0sXG4gIH0sXG4gIGZ1bmN0aW9uOiBuZXcgUmVnRXhwKGBcXFxcYig/OiR7RlVOQ1RJT05TLm1hcCgoZikgPT4gZi5sYWJlbCkuam9pbignfCcpfSkoPz1cXFxccypcXFxcKClgLCAnaScpLFxuICAnY29udGV4dC1yYW5nZSc6IFtcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvXFxbW15cXF1dKig/PV0pLywgLy8gWzFtXVxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdHRlcm46IC8ob2Zmc2V0XFxzKylcXHcrLywgLy8gb2Zmc2V0IDFtXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBpZExpc3Q6IHtcbiAgICBwYXR0ZXJuOiAvXFxkKyhcXHxcXGQrKSsvLFxuICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgfSxcbiAgbnVtYmVyOiAvXFxiLT9cXGQrKChcXC5cXGQqKT8oW2VFXVsrLV0/XFxkKyk/KT9cXGIvLFxuICBvcGVyYXRvcjogbmV3IFJlZ0V4cChgL1stKyovPSVefl18JiY/fFxcXFx8P1xcXFx8fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dP3xcXFxcYig/OiR7T1BFUkFUT1JTLmpvaW4oJ3wnKX0pXFxcXGJgLCAnaScpLFxuICBwdW5jdHVhdGlvbjogL1t7fTsoKWAsLl0vLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvbXFsR3JhbW1hcjtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgZnJvbSAnLi91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmZ1bmN0aW9uIHVzZU9ic2VydmFibGUob2JzZXJ2YWJsZSQsIGluaXRpYWxWYWx1ZSkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSksIHZhbHVlID0gX2FbMF0sIHVwZGF0ZSA9IF9hWzFdO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcyA9IG9ic2VydmFibGUkLnN1YnNjcmliZSh1cGRhdGUpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcy51bnN1YnNjcmliZSgpOyB9O1xuICAgIH0sIFtvYnNlcnZhYmxlJF0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZU9ic2VydmFibGU7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZU9ic2VydmFibGUiLCJMb2FkaW5nU3RhdGUiLCJBbGVydCIsIkJ1dHRvbiIsIkljb24iLCJMb2FkaW5nUGxhY2Vob2xkZXIiLCJQYW5lbENocm9tZUxvYWRpbmdJbmRpY2F0b3IiLCJ1c2VTdHlsZXMyIiwiVmVydGljYWxHcm91cCIsIndpdGhFcnJvckJvdW5kYXJ5IiwiREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIiwiQWxlcnRMYWJlbHMiLCJEZXRhaWxzRmllbGQiLCJQcm92aXNpb25lZFJlc291cmNlIiwiUHJvdmlzaW9uaW5nQWxlcnQiLCJSdWxlVmlld2VyTGF5b3V0IiwiUnVsZVZpZXdlckxheW91dENvbnRlbnQiLCJSdWxlVmlld2VyVmlzdWFsaXphdGlvbiIsIlJ1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucyIsIlJ1bGVEZXRhaWxzQW5ub3RhdGlvbnMiLCJSdWxlRGV0YWlsc0RhdGFTb3VyY2VzIiwiUnVsZURldGFpbHNFeHByZXNzaW9uIiwiUnVsZURldGFpbHNGZWRlcmF0ZWRTb3VyY2VzIiwiUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcyIsIlJ1bGVIZWFsdGgiLCJSdWxlU3RhdGUiLCJ1c2VBbGVydFF1ZXJpZXNTdGF0dXMiLCJ1c2VDb21iaW5lZFJ1bGUiLCJBbGVydGluZ1F1ZXJ5UnVubmVyIiwiZ2V0UnVsZXNTb3VyY2VCeU5hbWUiLCJhbGVydFJ1bGVUb1F1ZXJpZXMiLCJydWxlSWQiLCJpc0ZlZGVyYXRlZFJ1bGVHcm91cCIsImlzR3JhZmFuYVJ1bGVyUnVsZSIsImVycm9yTWVzc2FnZSIsImVycm9yVGl0bGUiLCJwYWdlVGl0bGUiLCJSdWxlVmlld2VyIiwibWF0Y2giLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJpZCIsInBhcmFtcyIsImlkZW50aWZpZXIiLCJ0cnlQYXJzZSIsImxvYWRpbmciLCJlcnJvciIsInJlc3VsdCIsInJ1bGUiLCJydWxlU291cmNlTmFtZSIsInJ1bm5lciIsImRhdGEiLCJnZXQiLCJxdWVyaWVzMiIsInF1ZXJpZXMiLCJzZXRRdWVyaWVzIiwiYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUiLCJvblJ1blF1ZXJpZXMiLCJsZW5ndGgiLCJydW4iLCJkZXN0cm95Iiwib25DaGFuZ2VRdWVyeSIsInF1ZXJ5IiwibWFwIiwicSIsInJlZklkIiwicnVsZXNTb3VyY2UiLCJtZXNzYWdlIiwic3RhY2siLCJhbm5vdGF0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJfIiwidmFsdWUiLCJ0cmltIiwiaXNGZWRlcmF0ZWRSdWxlIiwiZ3JvdXAiLCJpc1Byb3Zpc2lvbmVkIiwicnVsZXJSdWxlIiwiQm9vbGVhbiIsImdyYWZhbmFfYWxlcnQiLCJwcm92ZW5hbmNlIiwiQWxlcnRSdWxlIiwibmFtZSIsImRldGFpbHMiLCJsZWZ0U2lkZSIsInByb21SdWxlIiwibGFiZWxzIiwia2V5cyIsInJpZ2h0U2lkZSIsIm5hbWVzcGFjZSIsIml0ZW1zUGVyUGFnZSIsInF1ZXJpZXNUaXRsZSIsImlzTG9hZGluZyIsImNhbmNlbCIsInF1ZXJ5V2FybmluZyIsInZhbHVlcyIsImZpbmQiLCJkIiwic3RhdGUiLCJMb2FkaW5nIiwidGhlbWUiLCJzcGFjaW5nIiwidHlwb2dyYXBoeSIsImg1IiwiZm9udFNpemUiLCJmb250V2VpZ2h0Qm9sZCIsImZvbnRGYW1pbHkiLCJjb2xvcnMiLCJib3JkZXIiLCJtZWRpdW0iLCJzdHlsZSIsImNvbnRleHRTcnYiLCJBdXRob3JpemUiLCJhY3Rpb25zIiwiY2hpbGRyZW4iLCJmYWxsYmFjayIsInNvbWUiLCJhY3Rpb24iLCJoYXNBY2Nlc3MiLCJjeCIsImxhbmd1YWdlcyIsInByaXNtTGFuZ3VhZ2VzIiwiRWRpdG9yIiwibWFrZVZhbHVlIiwiU2xhdGVQcmlzbSIsInVzZVN0eWxlcyIsIkxvZ3FsU3ludGF4IiwiUHJvbXFsU3ludGF4IiwiRGF0YVNvdXJjZVR5cGUiLCJpc0Nsb3VkUnVsZXNTb3VyY2UiLCJXZWxsIiwiSGlnaGxpZ2h0ZWRRdWVyeSIsImxhbmd1YWdlIiwiZXhwciIsInBsdWdpbnMiLCJvbmx5SW4iLCJub2RlIiwidHlwZSIsImdldFN5bnRheCIsInNsYXRlVmFsdWUiLCJFeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsIndlbGwiLCJMb2tpIiwibW9ub3NwYWNlIiwiY29uZmlnIiwiUmFkaW9CdXR0b25Hcm91cCIsIlNUQVQiLCJUQUJMRSIsIlRJTUVTRVJJRVMiLCJQYW5lbFBsdWdpbnNCdXR0b25Hcm91cCIsInByb3BzIiwib25DaGFuZ2UiLCJzaXplIiwicGFuZWxzIiwiZ2V0U3VwcG9ydGVkUGFuZWxzIiwicmVkdWNlIiwicGFuZWwiLCJpc1N1cHBvcnRlZFBhbmVsUGx1Z2luIiwicHVzaCIsImxhYmVsIiwiaW1nVXJsIiwiaW5mbyIsImxvZ29zIiwic21hbGwiLCJCYWRnZSIsInJlc291cmNlIiwiUHJvdmlzaW9uaW5nQmFkZ2UiLCJTdGFjayIsIkxhYmVsIiwiVG9vbHRpcCIsIklucHV0IiwiTWF0Y2hlckZpbHRlciIsImNsYXNzTmFtZSIsIm9uRmlsdGVyQ2hhbmdlIiwiZGVmYXVsdFF1ZXJ5U3RyaW5nIiwicXVlcnlTdHJpbmciLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2VhcmNoSWNvbiIsImljb24iLCJpbnB1dFdpZHRoIiwibG9jYXRpb25TZXJ2aWNlIiwiUGFnZVRvb2xiYXIiLCJQYWdlIiwid3JhcEluQ29udGVudCIsInRpdGxlIiwiZ2V0UGFnZVN0eWxlcyIsImNvbnRlbnQiLCJwYWRkaW5nIiwiZ2V0Q29udGVudFN0eWxlcyIsIndyYXBwZXIiLCJicmVha3BvaW50cyIsInh4bCIsImJhY2tncm91bmQiLCJwcmltYXJ5Iiwid2VhayIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiQXV0b1NpemVyIiwiZGF0ZVRpbWUiLCJ1cmxVdGlsIiwiZ2V0RGF0YVNvdXJjZVNydiIsIlBhbmVsUmVuZGVyZXIiLCJDb2RlRWRpdG9yIiwiRGF0ZVRpbWVQaWNrZXIiLCJMaW5rQnV0dG9uIiwidXNlVGhlbWUyIiwiaXNFeHByZXNzaW9uUXVlcnkiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiaGVhZGVySGVpZ2h0IiwiZGVmYXVsdFBhbmVsIiwibW9kZWwiLCJzZXRQYW5lbCIsImRzU2V0dGluZ3MiLCJnZXRJbnN0YW5jZVNldHRpbmdzIiwiZGF0YXNvdXJjZVVpZCIsInJlbGF0aXZlVGltZVJhbmdlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJmcmFtZUluZGV4Iiwic2hvd0hlYWRlciIsIm9uVGltZUNoYW5nZSIsIm5ld0RhdGVUaW1lIiwibm93IiwidW5peCIsImludGVydmFsIiwiZnJvbSIsInRvIiwic2V0RGF0ZVRpbWUiLCJyZWxhdGl2ZVRpbWVSYW5nZVRvIiwic3VidHJhY3QiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGgiLCJoZWlnaHQiLCJoZWFkZXIiLCJkYXRhU291cmNlIiwiRGF0ZSIsIkRhdGFTb3VyY2VzRXhwbG9yZSIsImNyZWF0ZUV4cGxvcmVMaW5rIiwiZ3JpZFNpemUiLCJzZXR0aW5ncyIsInJlc3QiLCJxdWVyeVBhcmFtcyIsImRhdGFzb3VyY2UiLCJyZW5kZXJVcmwiLCJhcHBTdWJVcmwiLCJsZWZ0IiwiZm9udFdlaWdodE1lZGl1bSIsInRleHQiLCJsaW5rIiwic2Vjb25kYXJ5IiwiY2FwaXRhbGl6ZSIsIlRhZyIsIkdyYWZhbmFBbGVydFN0YXRlIiwiUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIiwiQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyIiwib25TdGF0ZUZpbHRlckNoYW5nZSIsInN0YXRlRmlsdGVyIiwiZmlsdGVyVHlwZSIsIml0ZW1QZXJTdGF0ZVN0YXRzIiwiZ2V0T3B0aW9uQ29tcG9uZW50IiwiSW5zdGFuY2VTdGF0ZUNvdW50ZXIiLCJ0b0ZpeGVkIiwidGFnIiwiZ3JhZmFuYU9wdGlvbnMiLCJjb21wb25lbnQiLCJwcm9tT3B0aW9uVmFsdWVzIiwiRmlyaW5nIiwiUGVuZGluZyIsInByb21PcHRpb25zIiwic3RhdGVPcHRpb25zIiwidiIsInVuZGVmaW5lZCIsIkZyYWdtZW50IiwidXNlRGlzcGF0Y2giLCJ1c2VMb2NhdGlvbiIsIkNsaXBib2FyZEJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsIkhvcml6b250YWxHcm91cCIsInVzZUFwcE5vdGlmaWNhdGlvbiIsInVzZUlzUnVsZUVkaXRhYmxlIiwidXNlU3RhdGVIaXN0b3J5TW9kYWwiLCJkZWxldGVSdWxlQWN0aW9uIiwiZ2V0QWxlcnRtYW5hZ2VyQnlVaWQiLCJBbm5vdGF0aW9uIiwiZ2V0UnVsZXNTb3VyY2VOYW1lIiwiaXNHcmFmYW5hUnVsZXNTb3VyY2UiLCJjcmVhdGVWaWV3TGluayIsIm1ha2VSdWxlQmFzZWRTaWxlbmNlTGluayIsImRpc3BhdGNoIiwibG9jYXRpb24iLCJub3RpZnlBcHAiLCJydWxlVG9EZWxldGUiLCJzZXRSdWxlVG9EZWxldGUiLCJhbGVydElkIiwiU3RhdGVIaXN0b3J5TW9kYWwiLCJzaG93U3RhdGVIaXN0b3J5TW9kYWwiLCJhbGVydG1hbmFnZXJTb3VyY2VOYW1lIiwianNvbkRhdGEiLCJhbGVydG1hbmFnZXJVaWQiLCJydWxlc1NvdXJjZU5hbWUiLCJoYXNFeHBsb3JlUGVybWlzc2lvbiIsImhhc1Blcm1pc3Npb24iLCJsZWZ0QnV0dG9ucyIsInJpZ2h0QnV0dG9ucyIsImlzRmVkZXJhdGVkIiwiaXNFZGl0YWJsZSIsImlzUmVtb3ZhYmxlIiwicmV0dXJuVG8iLCJwYXRobmFtZSIsInNlYXJjaCIsImlzVmlld01vZGUiLCJpblZpZXdNb2RlIiwiZGVsZXRlUnVsZSIsImZyb21SdWxlclJ1bGUiLCJuYXZpZ2F0ZVRvIiwiYnVpbGRTaGFyZVVybCIsImFwcFVybCIsImJhc2VVcmwiLCJydWxlVXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwiaHJlZiIsInNwbGl0IiwiYnV0dG9uIiwicnVuYm9va1VSTCIsImRhc2hib2FyZFVJRCIsInBhbmVsSWQiLCJwYW5lbElEIiwiQWxlcnRpbmdJbnN0YW5jZUNyZWF0ZSIsImlzRWRpdG9yIiwic291cmNlTmFtZSIsImVkaXRVUkwiLCJzdHJpbmdpZnlJZGVudGlmaWVyIiwic3VjY2VzcyIsImNvcGllZFRleHQiLCJlbmRzV2l0aCIsInNtIiwiQW5ub3RhdGlvbkRldGFpbHNGaWVsZCIsImtleSIsIkV4cHJlc3Npb25EYXRhc291cmNlVUlEIiwiZGF0YVNvdXJjZXMiLCJtZXRhIiwidW5pcXVlIiwiZHMiLCJ1aWQiLCJpbmRleCIsImRhdGFTb3VyY2VJY29uIiwiZXhwclJvdyIsInNvdXJjZVRlbmFudHMiLCJzb3VyY2VfdGVuYW50cyIsInRlbmFudCIsImNvdW50QnkiLCJsYWJlbHNNYXRjaE1hdGNoZXJzIiwicGFyc2VNYXRjaGVycyIsInNvcnRBbGVydHMiLCJTb3J0T3JkZXIiLCJtYXBTdGF0ZVdpdGhSZWFzb25Ub0Jhc2VTdGF0ZSIsIkdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUiLCJpc0FsZXJ0aW5nUnVsZSIsIkFsZXJ0SW5zdGFuY2VzVGFibGUiLCJTaG93TW9yZUluc3RhbmNlcyIsInJ1bGVWaWV3UGFnZUxpbmsiLCJzdGF0cyIsImZvb3RlclJvdyIsInZpc2libGVJdGVtc0NvdW50IiwidG90YWxJdGVtc0NvdW50IiwiaXRlbXNEaXNwbGF5TGltaXQiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsInBhZ2luYXRpb24iLCJzZXRRdWVyeVN0cmluZyIsImFsZXJ0U3RhdGUiLCJzZXRBbGVydFN0YXRlIiwiZmlsdGVyS2V5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicXVlcnlTdHJpbmdLZXkiLCJzdGF0ZUZpbHRlclR5cGUiLCJhbGVydHMiLCJmaWx0ZXJBbGVydHMiLCJJbXBvcnRhbmNlIiwidmlzaWJsZUluc3RhbmNlcyIsInNsaWNlIiwiY291bnRBbGxCeVN0YXRlIiwiYWxlcnQiLCJoaWRkZW5JdGVtc0NvdW50IiwiZmxleFJvdyIsInNwYWNlQmV0d2VlbiIsInJvd0NoaWxkIiwiYWxlcnRJbnN0YW5jZUxhYmVsIiwiYWxlcnRJbnN0YW5jZVN0YXRlIiwiZmlsdGVyZWRBbGVydHMiLCJtYXRjaGVycyIsImdldFN0eWxlIiwiaGVhbHRoIiwibGFzdEVycm9yIiwid2FybiIsIndhcm5pbmciLCJpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyIsIlNwaW5uZXIiLCJpc1JlY29yZGluZ1J1bGUiLCJnZXRGaXJzdEFjdGl2ZUF0IiwiQWxlcnRTdGF0ZVRhZyIsImlzRGVsZXRpbmciLCJpc0NyZWF0aW5nIiwiZm9yVGltZSIsIkluYWN0aXZlIiwiZmlyc3RBY3RpdmVBdCIsIlN0cmluZyIsImZvciIsInN0YXJ0IiwiZW5kIiwiYm9keVNtYWxsIiwidW5pcXVlSWQiLCJkYXRlVGltZUZvcm1hdCIsInVzZU1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeSIsIkFsZXJ0TGFiZWwiLCJEeW5hbWljVGFibGUiLCJTdGF0ZUhpc3RvcnkiLCJjb2x1bW5zIiwicmVuZGVyQ2VsbCIsInJlbmRlclN0YXRlQ2VsbCIsInJlbmRlclZhbHVlQ2VsbCIsInJlbmRlclRpbWVzdGFtcENlbGwiLCJpdGVtcyIsImFjYyIsIml0ZW0iLCJuZXdTdGF0ZSIsInRpbWVzdGFtcCIsInVwZGF0ZWQiLCJoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlIiwicHJldlN0YXRlIiwiaGlzdG9yeUl0ZW0iLCJtYXRjaGVzIiwiZXZhbE1hdGNoZXMiLCJtZXRyaWMiLCJUaW1lc3RhbXBTdHlsZSIsIkxhYmVsc1dyYXBwZXIiLCJ4cyIsImN1cnJlbnRIaXN0b3J5SXRlbSIsInByZXZpb3VzSGlzdG9yeUl0ZW0iLCJldmVyeSIsInVzZUFzeW5jIiwiZmV0Y2hQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbiIsImluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSIsImlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZSIsInVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMiLCJ1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciIsInJlcXVlc3RTdGF0ZSIsInVzZUNvbWJpbmVkUnVsZXNMb2FkZXIiLCJjb21iaW5lZFJ1bGVzIiwiZ3JvdXBzIiwicnVsZXMiLCJmcm9tQ29tYmluZWRSdWxlIiwiZXF1YWwiLCJ1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmciLCJydWxlTmFtZSIsInByb21SdWxlUmVxdWVzdHMiLCJwcm9tUnVsZXMiLCJwcm9tUnVsZVJlcXVlc3QiLCJnZXRSZXF1ZXN0U3RhdGUiLCJydWxlclJ1bGVSZXF1ZXN0cyIsInJ1bGVyUnVsZXMiLCJydWxlclJ1bGVSZXF1ZXN0IiwiZGlzcGF0Y2hlZCIsInVzZVJlZiIsImdldEFsbFJ1bGVzU291cmNlcyIsImlzQWxlcnRpbmdSdWxlclJ1bGUiLCJpc1JlY29yZGluZ1J1bGVyUnVsZSIsInByb21SdWxlc1Jlc3BvbnNlcyIsInJ1bGVyUnVsZXNSZXNwb25zZXMiLCJjYWNoZSIsInJ1bGVzU291cmNlcyIsIkVycm9yIiwiY2FjaGVkIiwiY3VycmVudCIsIm5hbWVzcGFjZXMiLCJmb3JFYWNoIiwibmFtZXNwYWNlTmFtZSIsImFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsIm5zIiwiYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UiLCJmbGF0IiwiZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMiLCJuZXdOYW1lc3BhY2UiLCJzb3J0UnVsZXNCeU5hbWUiLCJmbGF0TWFwIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvbWJpbmVkR3JvdXAiLCJydWxlclJ1bGVUb0NvbWJpbmVkUnVsZSIsImciLCJleGlzdGluZ1J1bGUiLCJnZXRFeGlzdGluZ1J1bGVJbkdyb3VwIiwicHJvbVJ1bGVUb0NvbWJpbmVkUnVsZSIsInJlY29yZCIsImlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlIiwiY29tYmluZWRSdWxlIiwiY2hlY2tRdWVyeSIsImhhc2hRdWVyeSIsInJlcGxhY2UiLCJqb2luIiwiZmV0Y2hGb2xkZXJJZk5vdEZldGNoZWRBY3Rpb24iLCJ1c2VGb2xkZXIiLCJmb2xkZXJSZXF1ZXN0cyIsImZvbGRlcnMiLCJyZXF1ZXN0IiwiZm9sZGVyIiwiZ2V0UnVsZXNQZXJtaXNzaW9ucyIsImZvbGRlclVJRCIsIm5hbWVzcGFjZV91aWQiLCJydWxlUGVybWlzc2lvbiIsImNhbkVkaXRHcmFmYW5hUnVsZXMiLCJ1cGRhdGUiLCJjYW5TYXZlIiwiY2FuUmVtb3ZlR3JhZmFuYVJ1bGVzIiwiZGVsZXRlIiwiaXNSdWxlckF2YWlsYWJsZSIsInJ1bGVyQ29uZmlnIiwiY2FuRWRpdENsb3VkUnVsZXMiLCJjYW5SZW1vdmVDbG91ZFJ1bGVzIiwiZmV0Y2hHcmFmYW5hQW5ub3RhdGlvbnNBY3Rpb24iLCJoaXN0b3J5IiwibWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5IiwiTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoaWRlU3RhdGVIaXN0b3J5TW9kYWwiLCJvZiIsIlJlcGxheVN1YmplY3QiLCJjYXRjaEVycm9yIiwic2hhcmUiLCJ2NCIsInV1aWR2NCIsImRhdGFGcmFtZUZyb21KU09OIiwiZ2V0RGVmYXVsdFRpbWVSYW5nZSIsInJhbmdlVXRpbCIsIndpdGhMb2FkaW5nSW5kaWNhdG9yIiwidG9EYXRhUXVlcnlFcnJvciIsImdldEJhY2tlbmRTcnYiLCJjYW5jZWxOZXR3b3JrUmVxdWVzdHNPblVuc3Vic2NyaWJlIiwic2V0U3RydWN0dXJlUmV2aXNpb24iLCJwcmVQcm9jZXNzUGFuZWxEYXRhIiwiZ2V0VGltZVJhbmdlRm9yRXhwcmVzc2lvbiIsImNvbnN0cnVjdG9yIiwiYmFja2VuZFNydiIsImRhdGFTb3VyY2VTcnYiLCJzdWJqZWN0IiwibGFzdFJlc3VsdCIsImFzT2JzZXJ2YWJsZSIsImVtcHR5IiwiaW5pdGlhbFN0YXRlIiwiRG9uZSIsIm5leHQiLCJmaWx0ZXJRdWVyeSIsInN1YnNjcmlwdGlvbiIsInJ1blJlcXVlc3QiLCJzdWJzY3JpYmUiLCJkYXRhUGVyUXVlcnkiLCJuZXh0UmVzdWx0IiwiYXBwbHlDaGFuZ2UiLCJwcmV2aW91cyIsInByZVByb2Nlc3NlZCIsIm1hcEVycm9yVG9QYW5lbERhdGEiLCJ1bnN1YnNjcmliZSIsInJlcXVlc3RJc1J1bm5pbmciLCJjb21wbGV0ZSIsImluaXRpYWwiLCJ1cmwiLCJtZXRob2QiLCJyZXF1ZXN0SWQiLCJ3aGlsZUxvYWRpbmciLCJzb3VyY2UiLCJmZXRjaCIsInBpcGUiLCJtYXBUb1BhbmVsRGF0YSIsImRhdGFCeVF1ZXJ5Iiwic2VyaWVzIiwidGltZVJhbmdlIiwiZ2V0VGltZVJhbmdlIiwicmVsYXRpdmUiLCJyZWxhdGl2ZVRvVGltZVJhbmdlIiwiY29uc29sZSIsInJlc3BvbnNlIiwicmVzdWx0cyIsImZyYW1lcyIsInF1ZXJ5RXJyb3IiLCJjaGFuZ2UiLCJjbG91ZEFsZXJ0UnVsZVRvTW9kZWwiLCJxdWVyeVR5cGUiLCJFeHByZXNzaW9uUXVlcnlUeXBlIiwiRkFMTF9CQUNLX1RJTUVfUkFOR0UiLCJyZWZlcmVuY2VkUmVmSWRzIiwiZ2V0UmVmZXJlbmNlZElkcyIsImdldFRpbWVSYW5nZXMiLCJtYXgiLCJtaW4iLCJjbGFzc2ljIiwiZ2V0UmVmZXJlbmNlZElkc0ZvckNsYXNzaWNDb25kaXRpb24iLCJtYXRoIiwiZ2V0UmVmZXJlbmNlZElkc0Zvck1hdGgiLCJyZXNhbXBsZSIsImdldFJlZmVyZW5jZWRJZHNGb3JSZWR1Y2UiLCJjb25kaXRpb25zIiwiY29uZGl0aW9uIiwicmVmZXJlbmNlZFJlZklkc0tleSIsImluY2x1ZGVzIiwiaXNFeHByZXNzaW9uUmVmZXJlbmNlIiwiZGF0YVF1ZXJ5IiwiQUdHUkVHQVRJT05fT1BFUkFUT1JTIiwiaW5zZXJ0VGV4dCIsImRvY3VtZW50YXRpb24iLCJQSVBFX1BBUlNFUlMiLCJtb3ZlIiwiZGV0YWlsIiwiUElQRV9PUEVSQVRPUlMiLCJSQU5HRV9WRUNfRlVOQ1RJT05TIiwiRlVOQ1RJT05TIiwiTE9LSV9LRVlXT1JEUyIsImtleXdvcmQiLCJsb2tpR3JhbW1hciIsImNvbW1lbnQiLCJwYXR0ZXJuIiwibG9va2JlaGluZCIsImluc2lkZSIsImFsaWFzIiwicHVuY3R1YXRpb24iLCJncmVlZHkiLCJSZWdFeHAiLCJmIiwiZnVuY3Rpb24iLCJxdW90ZSIsImJhY2t0aWNrcyIsIm51bWJlciIsIm9wZXJhdG9yIiwiUkFURV9SQU5HRVMiLCJzb3J0VmFsdWUiLCJPUEVSQVRPUlMiLCJMT0dJQ0FMX09QRVJBVE9SUyIsIlRSSUdPTk9NRVRSSUNfRlVOQ1RJT05TIiwiUFJPTV9LRVlXT1JEUyIsInByb21xbEdyYW1tYXIiLCJpZExpc3QiXSwic291cmNlUm9vdCI6IiJ9