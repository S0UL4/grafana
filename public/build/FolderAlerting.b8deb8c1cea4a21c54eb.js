"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderAlerting"],{

/***/ "./public/app/features/alerting/unified/AlertsFolderView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsFolderView": () => (/* binding */ AlertsFolderView),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;



















var SortOrder;

(function (SortOrder) {
  SortOrder["Ascending"] = "alpha-asc";
  SortOrder["Descending"] = "alpha-desc";
})(SortOrder || (SortOrder = {}));

const sortOptions = [{
  label: 'Alphabetically [A-Z]',
  value: SortOrder.Ascending
}, {
  label: 'Alphabetically [Z-A]',
  value: SortOrder.Descending
}];
const AlertsFolderView = ({
  folder
}) => {
  var _matchingNamespace$gr;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  const onTagClick = tagName => {
    const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.parseMatchers)(labelFilter);
    const tagMatcherField = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.parseMatcher)(tagName);
    const uniqueMatchers = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqWith)([...matchers, tagMatcherField], lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual);
    const matchersString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.matchersToString)(uniqueMatchers);
    setLabelFilter(matchersString);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchPromRulesAction)({
      rulesSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME
    }));
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchRulerRulesAction)({
      rulesSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME
    }));
  }, [dispatch]);
  const combinedNamespaces = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_8__.useCombinedRuleNamespaces)(_utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME);
  const {
    nameFilter,
    labelFilter,
    sortOrder,
    setNameFilter,
    setLabelFilter,
    setSortOrder
  } = useAlertsFolderViewParams();
  const matchingNamespace = combinedNamespaces.find(namespace => namespace.name === folder.title);
  const alertRules = (_matchingNamespace$gr = matchingNamespace === null || matchingNamespace === void 0 ? void 0 : matchingNamespace.groups.flatMap(group => group.rules)) !== null && _matchingNamespace$gr !== void 0 ? _matchingNamespace$gr : [];
  const filteredRules = filterAndSortRules(alertRules, nameFilter, labelFilter, sortOrder !== null && sortOrder !== void 0 ? sortOrder : SortOrder.Ascending);
  const hasNoResults = alertRules.length === 0 || filteredRules.length === 0;
  const {
    page,
    numberOfPages,
    onPageChange,
    pageItems
  } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__.usePagination)(filteredRules, 1, app_core_constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_PER_PAGE_PAGINATION);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
    className: styles.container,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
      direction: "column",
      gap: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FilterInput, {
        value: nameFilter,
        onChange: setNameFilter,
        placeholder: "Search alert rules by name",
        "data-testid": "name-filter"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        direction: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select, {
          value: sortOrder,
          onChange: ({
            value
          }) => value && setSortOrder(value),
          options: sortOptions,
          width: 25,
          "aria-label": "Sort",
          placeholder: `Sort (Default A-Z)`,
          prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
            name: sortOrder === SortOrder.Ascending ? 'sort-amount-up' : 'sort-amount-down'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FilterInput, {
          value: labelFilter,
          onChange: setLabelFilter,
          placeholder: "Search alerts by labels",
          className: styles.filterLabelsInput,
          "data-testid": "label-filter"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        gap: 1,
        children: pageItems.map(currentRule => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.createViewLink)('grafana', currentRule, ''),
          className: styles.card,
          "data-testid": "alert-card-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Heading, {
            children: currentRule.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Tags, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TagList, {
              onClick: onTagClick,
              tags: Object.entries(currentRule.labels).map(([label, value]) => `${label}=${value}`)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Meta, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                name: "folder"
              })), " ", folder.title]
            })
          })]
        }, currentRule.name))
      }), hasNoResults && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: styles.noResults,
        children: "No alert rules found"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: styles.pagination,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
          currentPage: page,
          numberOfPages: numberOfPages,
          onNavigate: onPageChange,
          hideWhenSinglePage: true
        })
      })]
    })
  });
};
var AlertFolderViewParams;

(function (AlertFolderViewParams) {
  AlertFolderViewParams["nameFilter"] = "nameFilter";
  AlertFolderViewParams["labelFilter"] = "labelFilter";
  AlertFolderViewParams["sortOrder"] = "sort";
})(AlertFolderViewParams || (AlertFolderViewParams = {}));

function useAlertsFolderViewParams() {
  var _searchParams$get, _searchParams$get2;

  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_10__.useURLSearchParams)();
  const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((_searchParams$get = searchParams.get(AlertFolderViewParams.nameFilter)) !== null && _searchParams$get !== void 0 ? _searchParams$get : '');
  const [labelFilter, setLabelFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((_searchParams$get2 = searchParams.get(AlertFolderViewParams.labelFilter)) !== null && _searchParams$get2 !== void 0 ? _searchParams$get2 : '');
  const sortParam = searchParams.get(AlertFolderViewParams.sortOrder);
  const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(sortParam === SortOrder.Ascending ? SortOrder.Ascending : sortParam === SortOrder.Descending ? SortOrder.Descending : undefined);
  (0,react_use__WEBPACK_IMPORTED_MODULE_16__["default"])(() => setSearchParams({
    [AlertFolderViewParams.nameFilter]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_7__.getQueryParamValue)(nameFilter),
    [AlertFolderViewParams.labelFilter]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_7__.getQueryParamValue)(labelFilter),
    [AlertFolderViewParams.sortOrder]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_7__.getQueryParamValue)(sortOrder)
  }, true), 400, [nameFilter, labelFilter, sortOrder]);
  return {
    nameFilter,
    labelFilter,
    sortOrder,
    setNameFilter,
    setLabelFilter,
    setSortOrder
  };
}

function filterAndSortRules(originalRules, nameFilter, labelFilter, sortOrder) {
  const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.parseMatchers)(labelFilter);
  let rules = originalRules.filter(rule => rule.name.toLowerCase().includes(nameFilter.toLowerCase()) && (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.labelsMatchMatchers)(rule.labels, matchers));
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.orderBy)(rules, x => x.name.toLowerCase(), [sortOrder === SortOrder.Ascending ? 'asc' : 'desc']);
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(1)};
  `,
  card: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    grid-template-columns: auto 1fr 2fr;
    margin: 0;
  `,
  pagination: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    align-self: center;
  `,
  filterLabelsInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
    width: auto;
    min-width: 240px;
  `,
  noResults: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2)};
    background-color: ${theme.colors.background.secondary};
    font-style: italic;
  `
});

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

/***/ "./public/app/features/folders/FolderAlerting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _alerting_unified_AlertsFolderView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/AlertsFolderView.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const FolderAlerting = ({
  match
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex);
  const folder = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.folder);
  const uid = match.params.uid;
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(navIndex, `folder-alerting-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_6__.getLoadingNav)(1));
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(async () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__.getFolderByUid)(uid)), [_state_actions__WEBPACK_IMPORTED_MODULE_5__.getFolderByUid, uid]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      isLoading: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_alerting_unified_AlertsFolderView__WEBPACK_IMPORTED_MODULE_4__.AlertsFolderView, {
        folder: folder
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderAlerting);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyxxRUFBRDtJQUFNLFFBQVEsRUFBRUUsUUFBaEI7SUFBQSx1QkFDRSx1REFBQyw4RUFBRDtNQUFlLFNBQVMsRUFBRUMsT0FBMUI7TUFBQSx1QkFDRSx1REFBQyxnRkFBRDtRQUFrQixNQUFNLEVBQUVySjtNQUExQjtJQURGO0VBREYsRUFERjtBQU9ELENBakJEOztBQW1CQSxpRUFBZStJLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL0FsZXJ0c0ZvbGRlclZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZVVSTFNlYXJjaFBhcmFtcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9mb2xkZXJzL0ZvbGRlckFsZXJ0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgaXNFcXVhbCwgb3JkZXJCeSwgdW5pcVdpdGggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyBDYXJkLCBGaWx0ZXJJbnB1dCwgSWNvbiwgUGFnaW5hdGlvbiwgU2VsZWN0LCBUYWdMaXN0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIH0gZnJvbSAnYXBwL2NvcmUvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldFF1ZXJ5UGFyYW1WYWx1ZSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL3F1ZXJ5JztcbmltcG9ydCB7IEZvbGRlclN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyB9IGZyb20gJy4vaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyc7XG5pbXBvcnQgeyB1c2VQYWdpbmF0aW9uIH0gZnJvbSAnLi9ob29rcy91c2VQYWdpbmF0aW9uJztcbmltcG9ydCB7IHVzZVVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vaG9va3MvdXNlVVJMU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IGZldGNoUHJvbVJ1bGVzQWN0aW9uLCBmZXRjaFJ1bGVyUnVsZXNBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgbGFiZWxzTWF0Y2hNYXRjaGVycywgbWF0Y2hlcnNUb1N0cmluZywgcGFyc2VNYXRjaGVyLCBwYXJzZU1hdGNoZXJzIH0gZnJvbSAnLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3TGluayB9IGZyb20gJy4vdXRpbHMvbWlzYyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZvbGRlcjogRm9sZGVyU3RhdGU7XG59XG5cbmVudW0gU29ydE9yZGVyIHtcbiAgQXNjZW5kaW5nID0gJ2FscGhhLWFzYycsXG4gIERlc2NlbmRpbmcgPSAnYWxwaGEtZGVzYycsXG59XG5cbmNvbnN0IHNvcnRPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8U29ydE9yZGVyPj4gPSBbXG4gIHsgbGFiZWw6ICdBbHBoYWJldGljYWxseSBbQS1aXScsIHZhbHVlOiBTb3J0T3JkZXIuQXNjZW5kaW5nIH0sXG4gIHsgbGFiZWw6ICdBbHBoYWJldGljYWxseSBbWi1BXScsIHZhbHVlOiBTb3J0T3JkZXIuRGVzY2VuZGluZyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEFsZXJ0c0ZvbGRlclZpZXcgPSAoeyBmb2xkZXIgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25UYWdDbGljayA9ICh0YWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtYXRjaGVycyA9IHBhcnNlTWF0Y2hlcnMobGFiZWxGaWx0ZXIpO1xuICAgIGNvbnN0IHRhZ01hdGNoZXJGaWVsZCA9IHBhcnNlTWF0Y2hlcih0YWdOYW1lKTtcbiAgICBjb25zdCB1bmlxdWVNYXRjaGVycyA9IHVuaXFXaXRoKFsuLi5tYXRjaGVycywgdGFnTWF0Y2hlckZpZWxkXSwgaXNFcXVhbCk7XG4gICAgY29uc3QgbWF0Y2hlcnNTdHJpbmcgPSBtYXRjaGVyc1RvU3RyaW5nKHVuaXF1ZU1hdGNoZXJzKTtcbiAgICBzZXRMYWJlbEZpbHRlcihtYXRjaGVyc1N0cmluZyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFByb21SdWxlc0FjdGlvbih7IHJ1bGVzU291cmNlTmFtZTogR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9KSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hSdWxlclJ1bGVzQWN0aW9uKHsgcnVsZXNTb3VyY2VOYW1lOiBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0pKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3QgY29tYmluZWROYW1lc3BhY2VzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKTtcbiAgY29uc3QgeyBuYW1lRmlsdGVyLCBsYWJlbEZpbHRlciwgc29ydE9yZGVyLCBzZXROYW1lRmlsdGVyLCBzZXRMYWJlbEZpbHRlciwgc2V0U29ydE9yZGVyIH0gPVxuICAgIHVzZUFsZXJ0c0ZvbGRlclZpZXdQYXJhbXMoKTtcblxuICBjb25zdCBtYXRjaGluZ05hbWVzcGFjZSA9IGNvbWJpbmVkTmFtZXNwYWNlcy5maW5kKChuYW1lc3BhY2UpID0+IG5hbWVzcGFjZS5uYW1lID09PSBmb2xkZXIudGl0bGUpO1xuICBjb25zdCBhbGVydFJ1bGVzID0gbWF0Y2hpbmdOYW1lc3BhY2U/Lmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4gZ3JvdXAucnVsZXMpID8/IFtdO1xuXG4gIGNvbnN0IGZpbHRlcmVkUnVsZXMgPSBmaWx0ZXJBbmRTb3J0UnVsZXMoYWxlcnRSdWxlcywgbmFtZUZpbHRlciwgbGFiZWxGaWx0ZXIsIHNvcnRPcmRlciA/PyBTb3J0T3JkZXIuQXNjZW5kaW5nKTtcblxuICBjb25zdCBoYXNOb1Jlc3VsdHMgPSBhbGVydFJ1bGVzLmxlbmd0aCA9PT0gMCB8fCBmaWx0ZXJlZFJ1bGVzLmxlbmd0aCA9PT0gMDtcbiAgY29uc3QgeyBwYWdlLCBudW1iZXJPZlBhZ2VzLCBvblBhZ2VDaGFuZ2UsIHBhZ2VJdGVtcyB9ID0gdXNlUGFnaW5hdGlvbihmaWx0ZXJlZFJ1bGVzLCAxLCBERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cImNvbHVtblwiIGdhcD17M30+XG4gICAgICAgIDxGaWx0ZXJJbnB1dFxuICAgICAgICAgIHZhbHVlPXtuYW1lRmlsdGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXROYW1lRmlsdGVyfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFsZXJ0IHJ1bGVzIGJ5IG5hbWVcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPVwibmFtZS1maWx0ZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgPFNlbGVjdDxTb3J0T3JkZXI+XG4gICAgICAgICAgICB2YWx1ZT17c29ydE9yZGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHZhbHVlICYmIHNldFNvcnRPcmRlcih2YWx1ZSl9XG4gICAgICAgICAgICBvcHRpb25zPXtzb3J0T3B0aW9uc31cbiAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTb3J0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgU29ydCAoRGVmYXVsdCBBLVopYH1cbiAgICAgICAgICAgIHByZWZpeD17PEljb24gbmFtZT17c29ydE9yZGVyID09PSBTb3J0T3JkZXIuQXNjZW5kaW5nID8gJ3NvcnQtYW1vdW50LXVwJyA6ICdzb3J0LWFtb3VudC1kb3duJ30gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RmlsdGVySW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtsYWJlbEZpbHRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRMYWJlbEZpbHRlcn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFsZXJ0cyBieSBsYWJlbHNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyTGFiZWxzSW5wdXR9XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImxhYmVsLWZpbHRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8U3RhY2sgZ2FwPXsxfT5cbiAgICAgICAgICB7cGFnZUl0ZW1zLm1hcCgoY3VycmVudFJ1bGUpID0+IChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGtleT17Y3VycmVudFJ1bGUubmFtZX1cbiAgICAgICAgICAgICAgaHJlZj17Y3JlYXRlVmlld0xpbmsoJ2dyYWZhbmEnLCBjdXJyZW50UnVsZSwgJycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImFsZXJ0LWNhcmQtcm93XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcmQuSGVhZGluZz57Y3VycmVudFJ1bGUubmFtZX08L0NhcmQuSGVhZGluZz5cbiAgICAgICAgICAgICAgPENhcmQuVGFncz5cbiAgICAgICAgICAgICAgICA8VGFnTGlzdFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25UYWdDbGlja31cbiAgICAgICAgICAgICAgICAgIHRhZ3M9e09iamVjdC5lbnRyaWVzKGN1cnJlbnRSdWxlLmxhYmVscykubWFwKChbbGFiZWwsIHZhbHVlXSkgPT4gYCR7bGFiZWx9PSR7dmFsdWV9YCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DYXJkLlRhZ3M+XG4gICAgICAgICAgICAgIDxDYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJmb2xkZXJcIiAvPiB7Zm9sZGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmQuTWV0YT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAge2hhc05vUmVzdWx0cyAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUmVzdWx0c30+Tm8gYWxlcnQgcnVsZXMgZm91bmQ8L2Rpdj59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn0+XG4gICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlfVxuICAgICAgICAgICAgbnVtYmVyT2ZQYWdlcz17bnVtYmVyT2ZQYWdlc31cbiAgICAgICAgICAgIG9uTmF2aWdhdGU9e29uUGFnZUNoYW5nZX1cbiAgICAgICAgICAgIGhpZGVXaGVuU2luZ2xlUGFnZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5lbnVtIEFsZXJ0Rm9sZGVyVmlld1BhcmFtcyB7XG4gIG5hbWVGaWx0ZXIgPSAnbmFtZUZpbHRlcicsXG4gIGxhYmVsRmlsdGVyID0gJ2xhYmVsRmlsdGVyJyxcbiAgc29ydE9yZGVyID0gJ3NvcnQnLFxufVxuXG5mdW5jdGlvbiB1c2VBbGVydHNGb2xkZXJWaWV3UGFyYW1zKCkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlVVJMU2VhcmNoUGFyYW1zKCk7XG5cbiAgY29uc3QgW25hbWVGaWx0ZXIsIHNldE5hbWVGaWx0ZXJdID0gdXNlU3RhdGUoc2VhcmNoUGFyYW1zLmdldChBbGVydEZvbGRlclZpZXdQYXJhbXMubmFtZUZpbHRlcikgPz8gJycpO1xuICBjb25zdCBbbGFiZWxGaWx0ZXIsIHNldExhYmVsRmlsdGVyXSA9IHVzZVN0YXRlKHNlYXJjaFBhcmFtcy5nZXQoQWxlcnRGb2xkZXJWaWV3UGFyYW1zLmxhYmVsRmlsdGVyKSA/PyAnJyk7XG5cbiAgY29uc3Qgc29ydFBhcmFtID0gc2VhcmNoUGFyYW1zLmdldChBbGVydEZvbGRlclZpZXdQYXJhbXMuc29ydE9yZGVyKTtcbiAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlPFNvcnRPcmRlciB8IHVuZGVmaW5lZD4oXG4gICAgc29ydFBhcmFtID09PSBTb3J0T3JkZXIuQXNjZW5kaW5nXG4gICAgICA/IFNvcnRPcmRlci5Bc2NlbmRpbmdcbiAgICAgIDogc29ydFBhcmFtID09PSBTb3J0T3JkZXIuRGVzY2VuZGluZ1xuICAgICAgPyBTb3J0T3JkZXIuRGVzY2VuZGluZ1xuICAgICAgOiB1bmRlZmluZWRcbiAgKTtcblxuICB1c2VEZWJvdW5jZShcbiAgICAoKSA9PlxuICAgICAgc2V0U2VhcmNoUGFyYW1zKFxuICAgICAgICB7XG4gICAgICAgICAgW0FsZXJ0Rm9sZGVyVmlld1BhcmFtcy5uYW1lRmlsdGVyXTogZ2V0UXVlcnlQYXJhbVZhbHVlKG5hbWVGaWx0ZXIpLFxuICAgICAgICAgIFtBbGVydEZvbGRlclZpZXdQYXJhbXMubGFiZWxGaWx0ZXJdOiBnZXRRdWVyeVBhcmFtVmFsdWUobGFiZWxGaWx0ZXIpLFxuICAgICAgICAgIFtBbGVydEZvbGRlclZpZXdQYXJhbXMuc29ydE9yZGVyXTogZ2V0UXVlcnlQYXJhbVZhbHVlKHNvcnRPcmRlciksXG4gICAgICAgIH0sXG4gICAgICAgIHRydWVcbiAgICAgICksXG4gICAgNDAwLFxuICAgIFtuYW1lRmlsdGVyLCBsYWJlbEZpbHRlciwgc29ydE9yZGVyXVxuICApO1xuXG4gIHJldHVybiB7IG5hbWVGaWx0ZXIsIGxhYmVsRmlsdGVyLCBzb3J0T3JkZXIsIHNldE5hbWVGaWx0ZXIsIHNldExhYmVsRmlsdGVyLCBzZXRTb3J0T3JkZXIgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyQW5kU29ydFJ1bGVzKFxuICBvcmlnaW5hbFJ1bGVzOiBDb21iaW5lZFJ1bGVbXSxcbiAgbmFtZUZpbHRlcjogc3RyaW5nLFxuICBsYWJlbEZpbHRlcjogc3RyaW5nLFxuICBzb3J0T3JkZXI6IFNvcnRPcmRlclxuKSB7XG4gIGNvbnN0IG1hdGNoZXJzID0gcGFyc2VNYXRjaGVycyhsYWJlbEZpbHRlcik7XG4gIGxldCBydWxlcyA9IG9yaWdpbmFsUnVsZXMuZmlsdGVyKFxuICAgIChydWxlKSA9PiBydWxlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhuYW1lRmlsdGVyLnRvTG93ZXJDYXNlKCkpICYmIGxhYmVsc01hdGNoTWF0Y2hlcnMocnVsZS5sYWJlbHMsIG1hdGNoZXJzKVxuICApO1xuXG4gIHJldHVybiBvcmRlckJ5KHJ1bGVzLCAoeCkgPT4geC5uYW1lLnRvTG93ZXJDYXNlKCksIFtzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5Bc2NlbmRpbmcgPyAnYXNjJyA6ICdkZXNjJ10pO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICBjYXJkOiBjc3NgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciAyZnI7XG4gICAgbWFyZ2luOiAwO1xuICBgLFxuICBwYWdpbmF0aW9uOiBjc3NgXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBgLFxuICBmaWx0ZXJMYWJlbHNJbnB1dDogY3NzYFxuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAyNDBweDtcbiAgYCxcbiAgbm9SZXN1bHRzOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbWJpbmVkUnVsZSxcbiAgQ29tYmluZWRSdWxlR3JvdXAsXG4gIENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgUnVsZSxcbiAgUnVsZUdyb3VwLFxuICBSdWxlTmFtZXNwYWNlLFxuICBSdWxlc1NvdXJjZSxcbn0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUnVsZXJSdWxlRFRPLCBSdWxlclJ1bGVHcm91cERUTywgUnVsZXJSdWxlc0NvbmZpZ0RUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7XG4gIGdldEFsbFJ1bGVzU291cmNlcyxcbiAgZ2V0UnVsZXNTb3VyY2VCeU5hbWUsXG4gIGlzQ2xvdWRSdWxlc1NvdXJjZSxcbiAgaXNHcmFmYW5hUnVsZXNTb3VyY2UsXG59IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzQWxlcnRpbmdSdWxlclJ1bGUsIGlzUmVjb3JkaW5nUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgQ2FjaGVWYWx1ZSB7XG4gIHByb21SdWxlcz86IFJ1bGVOYW1lc3BhY2VbXTtcbiAgcnVsZXJSdWxlcz86IFJ1bGVyUnVsZXNDb25maWdEVE8gfCBudWxsO1xuICByZXN1bHQ6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xufVxuXG4vLyB0aGlzIGxpdHRsZSBtb25zdGVyIGNvbWJpbmVzIHByb21ldGhldXMgcnVsZXMgYW5kIHJ1bGVyIHJ1bGVzIHRvIHByb2R1Y2UgYSB1bmlmaWVkIGRhdGEgc3RydWN0dXJlXG4vLyBjYW4gbGltaXQgdG8gYSBzaW5nbGUgcnVsZXMgc291cmNlXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlc1NvdXJjZU5hbWU/OiBzdHJpbmcpOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSB7XG4gIGNvbnN0IHByb21SdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG5cbiAgLy8gY2FjaGUgcmVzdWx0cyBwZXIgcnVsZXMgc291cmNlLCBzbyB3ZSBvbmx5IHJlY2FsY3VsYXRlIHRob3NlIGZvciB3aGljaCByZXN1bHRzIGhhdmUgYWN0dWFsbHkgY2hhbmdlZFxuICBjb25zdCBjYWNoZSA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBDYWNoZVZhbHVlPj4oe30pO1xuXG4gIGNvbnN0IHJ1bGVzU291cmNlcyA9IHVzZU1lbW8oKCk6IFJ1bGVzU291cmNlW10gPT4ge1xuICAgIGlmIChydWxlc1NvdXJjZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVzU291cmNlID0gZ2V0UnVsZXNTb3VyY2VCeU5hbWUocnVsZXNTb3VyY2VOYW1lKTtcbiAgICAgIGlmICghcnVsZXNTb3VyY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHJ1bGVzIHNvdXJjZTogJHtydWxlc1NvdXJjZU5hbWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3J1bGVzU291cmNlXTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEFsbFJ1bGVzU291cmNlcygpO1xuICB9LCBbcnVsZXNTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHJ1bGVzU291cmNlc1xuICAgICAgICAubWFwKChydWxlc1NvdXJjZSk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSBpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gcnVsZXNTb3VyY2UubmFtZSA6IHJ1bGVzU291cmNlO1xuICAgICAgICAgIGNvbnN0IHByb21SdWxlcyA9IHByb21SdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgcnVsZXJSdWxlcyA9IHJ1bGVyUnVsZXNSZXNwb25zZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuXG4gICAgICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdO1xuICAgICAgICAgIGlmIChjYWNoZWQgJiYgY2FjaGVkLnByb21SdWxlcyA9PT0gcHJvbVJ1bGVzICYmIGNhY2hlZC5ydWxlclJ1bGVzID09PSBydWxlclJ1bGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkLnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZXNwYWNlczogUmVjb3JkPHN0cmluZywgQ29tYmluZWRSdWxlTmFtZXNwYWNlPiA9IHt9O1xuXG4gICAgICAgICAgLy8gZmlyc3QgZ2V0IGFsbCB0aGUgcnVsZXIgcnVsZXMgaW5cbiAgICAgICAgICBPYmplY3QuZW50cmllcyhydWxlclJ1bGVzIHx8IHt9KS5mb3JFYWNoKChbbmFtZXNwYWNlTmFtZSwgZ3JvdXBzXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgPSB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2U7XG4gICAgICAgICAgICBhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhlbiBjb3JyZWxhdGUgd2l0aCBwcm9tZXRoZXVzIHJ1bGVzXG4gICAgICAgICAgcHJvbVJ1bGVzPy5mb3JFYWNoKCh7IG5hbWU6IG5hbWVzcGFjZU5hbWUsIGdyb3VwcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBucyA9IChuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSB8fCB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5zLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LnZhbHVlcyhuYW1lc3BhY2VzKTtcblxuICAgICAgICAgIGNhY2hlLmN1cnJlbnRbcnVsZXNTb3VyY2VOYW1lXSA9IHsgcHJvbVJ1bGVzLCBydWxlclJ1bGVzLCByZXN1bHQgfTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpLFxuICAgIFtwcm9tUnVsZXNSZXNwb25zZXMsIHJ1bGVyUnVsZXNSZXNwb25zZXMsIHJ1bGVzU291cmNlc11cbiAgKTtcbn1cblxuLy8gbWVyZ2UgYWxsIGdyb3VwcyBpbiBjYXNlIG9mIGdyYWZhbmEgbWFuYWdlZCwgZXNzZW50aWFsbHkgdHJlYXRpbmcgbmFtZXNwYWNlcyAoZm9sZGVycykgYXMgZ3JvdXBzXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMobmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10pIHtcbiAgcmV0dXJuIG5hbWVzcGFjZXMubWFwKChuYW1lc3BhY2UpID0+IHtcbiAgICBjb25zdCBuZXdOYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgIGdyb3VwczogW10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IGdyb3VwIHdpdGggdW5ncm91cGVkIHJ1bGVzXG4gICAgbmV3TmFtZXNwYWNlLmdyb3Vwcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgIHJ1bGVzOiBzb3J0UnVsZXNCeU5hbWUobmFtZXNwYWNlLmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4gZ3JvdXAucnVsZXMpKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdOYW1lc3BhY2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFJ1bGVzQnlOYW1lKHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSkge1xuICByZXR1cm4gcnVsZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlclJ1bGVHcm91cERUT1tdKTogdm9pZCB7XG4gIG5hbWVzcGFjZS5ncm91cHMgPSBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmVkR3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwID0ge1xuICAgICAgbmFtZTogZ3JvdXAubmFtZSxcbiAgICAgIGludGVydmFsOiBncm91cC5pbnRlcnZhbCxcbiAgICAgIHNvdXJjZV90ZW5hbnRzOiBncm91cC5zb3VyY2VfdGVuYW50cyxcbiAgICAgIHJ1bGVzOiBbXSxcbiAgICB9O1xuICAgIGNvbWJpbmVkR3JvdXAucnVsZXMgPSBncm91cC5ydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCkpO1xuICAgIHJldHVybiBjb21iaW5lZEdyb3VwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwczogUnVsZUdyb3VwW10pOiB2b2lkIHtcbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgbGV0IGNvbWJpbmVkR3JvdXAgPSBuYW1lc3BhY2UuZ3JvdXBzLmZpbmQoKGcpID0+IGcubmFtZSA9PT0gZ3JvdXAubmFtZSk7XG4gICAgaWYgKCFjb21iaW5lZEdyb3VwKSB7XG4gICAgICBjb21iaW5lZEdyb3VwID0ge1xuICAgICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgICBydWxlczogW10sXG4gICAgICB9O1xuICAgICAgbmFtZXNwYWNlLmdyb3Vwcy5wdXNoKGNvbWJpbmVkR3JvdXApO1xuICAgIH1cblxuICAgIChncm91cC5ydWxlcyA/PyBbXSkuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdSdWxlID0gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChydWxlLCBjb21iaW5lZEdyb3VwISwgbmFtZXNwYWNlLnJ1bGVzU291cmNlKTtcbiAgICAgIGlmIChleGlzdGluZ1J1bGUpIHtcbiAgICAgICAgZXhpc3RpbmdSdWxlLnByb21SdWxlID0gcnVsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbWJpbmVkR3JvdXAhLnJ1bGVzLnB1c2gocHJvbVJ1bGVUb0NvbWJpbmVkUnVsZShydWxlLCBuYW1lc3BhY2UsIGNvbWJpbmVkR3JvdXAhKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGU6IFJ1bGUsIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cDogQ29tYmluZWRSdWxlR3JvdXApOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHJ1bGUubmFtZSxcbiAgICBxdWVyeTogcnVsZS5xdWVyeSxcbiAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgIGFubm90YXRpb25zOiBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICBwcm9tUnVsZTogcnVsZSxcbiAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICBncm91cCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUoXG4gIHJ1bGU6IFJ1bGVyUnVsZURUTyxcbiAgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cFxuKTogQ29tYmluZWRSdWxlIHtcbiAgcmV0dXJuIGlzQWxlcnRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5hbGVydCxcbiAgICAgICAgcXVlcnk6IHJ1bGUuZXhwcixcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IGlzUmVjb3JkaW5nUnVsZXJSdWxlKHJ1bGUpXG4gICAgPyB7XG4gICAgICAgIG5hbWU6IHJ1bGUucmVjb3JkLFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczoge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgbmFtZTogcnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiBydWxlLmFubm90YXRpb25zIHx8IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9O1xufVxuXG4vLyBmaW5kIGV4aXN0aW5nIHJ1bGUgaW4gZ3JvdXAgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBwcm9tIHJ1bGVcbmZ1bmN0aW9uIGdldEV4aXN0aW5nUnVsZUluR3JvdXAoXG4gIHJ1bGU6IFJ1bGUsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCxcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlXG4pOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQge1xuICBpZiAoaXNHcmFmYW5hUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgLy8gYXNzdW1lIGdyYWZhbmEgZ3JvdXBzIGhhdmUgb25seSB0aGUgb25lIHJ1bGUuIGNoZWNrIG5hbWUgYW55d2F5IGJlY2F1c2UgcGFyYW5vaWRcbiAgICByZXR1cm4gZ3JvdXAhLnJ1bGVzLmZpbmQoKGV4aXN0aW5nUnVsZSkgPT4gZXhpc3RpbmdSdWxlLm5hbWUgPT09IHJ1bGUubmFtZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvLyB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBtYXRjaGVzIG5hbWUsIGxhYmVscywgYW5ub3RhdGlvbnMgYW5kIHF1ZXJ5XG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgdHJ1ZSlcbiAgICApID8/XG4gICAgLy8gaWYgdGhhdCBmYWlscywgdHJ5IGZpbmRpbmcgYSBydWxlIHRoYXQgb25seSBtYXRjaGVzIG5hbWUsIGxhYmVscyBhbmQgYW5ub3RhdGlvbnMuXG4gICAgLy8gbG9raSAmIHByb20gY2FuIHNvbWV0aW1lcyBtb2RpZnkgdGhlIHF1ZXJ5IHNvIGl0IGRvZXNudCBtYXRjaCwgZWcgYDIgPiAxYCBiZWNvbWVzIGAxYFxuICAgIGdyb3VwIS5ydWxlcy5maW5kKFxuICAgICAgKGV4aXN0aW5nUnVsZSkgPT4gIWV4aXN0aW5nUnVsZS5wcm9tUnVsZSAmJiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShleGlzdGluZ1J1bGUsIHJ1bGUsIGZhbHNlKVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUsIHJ1bGU6IFJ1bGUsIGNoZWNrUXVlcnkgPSB0cnVlKTogYm9vbGVhbiB7XG4gIGlmIChjb21iaW5lZFJ1bGUubmFtZSA9PT0gcnVsZS5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgY2hlY2tRdWVyeSA/IGhhc2hRdWVyeShjb21iaW5lZFJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5sYWJlbHMsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5hbm5vdGF0aW9ucyxcbiAgICAgIF0pID09PVxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KHJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHRoZXJlIGNhbiBiZSBzbGlnaHQgZGlmZmVyZW5jZXMgaW4gaG93IHByb20gJiBydWxlciByZW5kZXIgYSBxdWVyeSwgdGhpcyB3aWxsIGhhc2ggdGhlbSBhY2NvdW50aW5nIGZvciB0aGUgZGlmZmVyZW5jZXNcbmZ1bmN0aW9uIGhhc2hRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gIC8vIG9uZSBvZiB0aGVtIG1pZ2h0IGJlIHdyYXBwZWQgaW4gcGFyZW5zXG4gIGlmIChxdWVyeS5sZW5ndGggPiAxICYmIHF1ZXJ5WzBdID09PSAnKCcgJiYgcXVlcnlbcXVlcnkubGVuZ3RoIC0gMV0gPT09ICcpJykge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMSwgLTEpO1xuICB9XG4gIC8vIHdoaXRlc3BhY2UgY291bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xcc3xcXG4vZywgJycpO1xuICAvLyBsYWJlbHMgbWF0Y2hlcnMgY2FuIGJlIHJlb3JkZXJlZCwgc28gc29ydCB0aGUgZW5pdHJlIHN0cmluZywgZXNlbnRpYWxseSBjb21wYXJpbmcganVzdCB0aGUgY2hhcmFjdGVyIGNvdW50c1xuICByZXR1cm4gcXVlcnkuc3BsaXQoJycpLnNvcnQoKS5qb2luKCcnKTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VVUkxTZWFyY2hQYXJhbXMoKTogW1xuICBVUkxTZWFyY2hQYXJhbXMsXG4gIChzZWFyY2hWYWx1ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkPiwgcmVwbGFjZT86IGJvb2xlYW4pID0+IHZvaWRcbl0ge1xuICBjb25zdCB7IHNlYXJjaCB9ID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSB1c2VNZW1vKCgpID0+IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKSwgW3NlYXJjaF0pO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKChzZWFyY2hWYWx1ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkPiwgcmVwbGFjZT86IGJvb2xlYW4pID0+IHtcbiAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbChzZWFyY2hWYWx1ZXMsIHJlcGxhY2UpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFtxdWVyeVBhcmFtcywgdXBkYXRlXTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgQWxlcnRzRm9sZGVyVmlldyB9IGZyb20gJy4uL2FsZXJ0aW5nL3VuaWZpZWQvQWxlcnRzRm9sZGVyVmlldyc7XG5cbmltcG9ydCB7IGdldEZvbGRlckJ5VWlkIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldExvYWRpbmdOYXYgfSBmcm9tICcuL3N0YXRlL25hdk1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuY29uc3QgRm9sZGVyQWxlcnRpbmcgPSAoeyBtYXRjaCB9OiBPd25Qcm9wcykgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG5hdkluZGV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCk7XG4gIGNvbnN0IGZvbGRlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUuZm9sZGVyKTtcblxuICBjb25zdCB1aWQgPSBtYXRjaC5wYXJhbXMudWlkO1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKG5hdkluZGV4LCBgZm9sZGVyLWFsZXJ0aW5nLSR7dWlkfWAsIGdldExvYWRpbmdOYXYoMSkpO1xuXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXN5bmMoYXN5bmMgKCkgPT4gZGlzcGF0Y2goZ2V0Rm9sZGVyQnlVaWQodWlkKSksIFtnZXRGb2xkZXJCeVVpZCwgdWlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgPEFsZXJ0c0ZvbGRlclZpZXcgZm9sZGVyPXtmb2xkZXJ9IC8+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9sZGVyQWxlcnRpbmc7XG4iXSwibmFtZXMiOlsiY3NzIiwiaXNFcXVhbCIsIm9yZGVyQnkiLCJ1bmlxV2l0aCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZURlYm91bmNlIiwiU3RhY2siLCJDYXJkIiwiRmlsdGVySW5wdXQiLCJJY29uIiwiUGFnaW5hdGlvbiIsIlNlbGVjdCIsIlRhZ0xpc3QiLCJ1c2VTdHlsZXMyIiwiREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIiwiZ2V0UXVlcnlQYXJhbVZhbHVlIiwidXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyIsInVzZVBhZ2luYXRpb24iLCJ1c2VVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaFByb21SdWxlc0FjdGlvbiIsImZldGNoUnVsZXJSdWxlc0FjdGlvbiIsImxhYmVsc01hdGNoTWF0Y2hlcnMiLCJtYXRjaGVyc1RvU3RyaW5nIiwicGFyc2VNYXRjaGVyIiwicGFyc2VNYXRjaGVycyIsIkdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUiLCJjcmVhdGVWaWV3TGluayIsIlNvcnRPcmRlciIsInNvcnRPcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsIkFzY2VuZGluZyIsIkRlc2NlbmRpbmciLCJBbGVydHNGb2xkZXJWaWV3IiwiZm9sZGVyIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZGlzcGF0Y2giLCJvblRhZ0NsaWNrIiwidGFnTmFtZSIsIm1hdGNoZXJzIiwibGFiZWxGaWx0ZXIiLCJ0YWdNYXRjaGVyRmllbGQiLCJ1bmlxdWVNYXRjaGVycyIsIm1hdGNoZXJzU3RyaW5nIiwic2V0TGFiZWxGaWx0ZXIiLCJydWxlc1NvdXJjZU5hbWUiLCJjb21iaW5lZE5hbWVzcGFjZXMiLCJuYW1lRmlsdGVyIiwic29ydE9yZGVyIiwic2V0TmFtZUZpbHRlciIsInNldFNvcnRPcmRlciIsInVzZUFsZXJ0c0ZvbGRlclZpZXdQYXJhbXMiLCJtYXRjaGluZ05hbWVzcGFjZSIsImZpbmQiLCJuYW1lc3BhY2UiLCJuYW1lIiwidGl0bGUiLCJhbGVydFJ1bGVzIiwiZ3JvdXBzIiwiZmxhdE1hcCIsImdyb3VwIiwicnVsZXMiLCJmaWx0ZXJlZFJ1bGVzIiwiZmlsdGVyQW5kU29ydFJ1bGVzIiwiaGFzTm9SZXN1bHRzIiwibGVuZ3RoIiwicGFnZSIsIm51bWJlck9mUGFnZXMiLCJvblBhZ2VDaGFuZ2UiLCJwYWdlSXRlbXMiLCJjb250YWluZXIiLCJmaWx0ZXJMYWJlbHNJbnB1dCIsIm1hcCIsImN1cnJlbnRSdWxlIiwiY2FyZCIsIk9iamVjdCIsImVudHJpZXMiLCJsYWJlbHMiLCJub1Jlc3VsdHMiLCJwYWdpbmF0aW9uIiwiQWxlcnRGb2xkZXJWaWV3UGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0U2VhcmNoUGFyYW1zIiwiZ2V0Iiwic29ydFBhcmFtIiwidW5kZWZpbmVkIiwib3JpZ2luYWxSdWxlcyIsImZpbHRlciIsInJ1bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwieCIsInRoZW1lIiwic3BhY2luZyIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJ1c2VNZW1vIiwidXNlUmVmIiwiZ2V0QWxsUnVsZXNTb3VyY2VzIiwiZ2V0UnVsZXNTb3VyY2VCeU5hbWUiLCJpc0Nsb3VkUnVsZXNTb3VyY2UiLCJpc0dyYWZhbmFSdWxlc1NvdXJjZSIsImlzQWxlcnRpbmdSdWxlIiwiaXNBbGVydGluZ1J1bGVyUnVsZSIsImlzUmVjb3JkaW5nUnVsZXJSdWxlIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJwcm9tUnVsZXNSZXNwb25zZXMiLCJzdGF0ZSIsInByb21SdWxlcyIsInJ1bGVyUnVsZXNSZXNwb25zZXMiLCJydWxlclJ1bGVzIiwiY2FjaGUiLCJydWxlc1NvdXJjZXMiLCJydWxlc1NvdXJjZSIsIkVycm9yIiwicmVzdWx0IiwiY2FjaGVkIiwiY3VycmVudCIsIm5hbWVzcGFjZXMiLCJmb3JFYWNoIiwibmFtZXNwYWNlTmFtZSIsImFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsIm5zIiwiYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UiLCJ2YWx1ZXMiLCJmbGF0IiwiZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMiLCJuZXdOYW1lc3BhY2UiLCJwdXNoIiwic29ydFJ1bGVzQnlOYW1lIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvbWJpbmVkR3JvdXAiLCJpbnRlcnZhbCIsInNvdXJjZV90ZW5hbnRzIiwicnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUiLCJnIiwiZXhpc3RpbmdSdWxlIiwiZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cCIsInByb21SdWxlIiwicHJvbVJ1bGVUb0NvbWJpbmVkUnVsZSIsInF1ZXJ5IiwiYW5ub3RhdGlvbnMiLCJhbGVydCIsImV4cHIiLCJydWxlclJ1bGUiLCJyZWNvcmQiLCJncmFmYW5hX2FsZXJ0IiwiaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUiLCJjb21iaW5lZFJ1bGUiLCJjaGVja1F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhhc2hRdWVyeSIsInNsaWNlIiwicmVwbGFjZSIsInNwbGl0Iiwiam9pbiIsInVzZUNhbGxiYWNrIiwidXNlTG9jYXRpb24iLCJsb2NhdGlvblNlcnZpY2UiLCJzZWFyY2giLCJxdWVyeVBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInVwZGF0ZSIsInNlYXJjaFZhbHVlcyIsInBhcnRpYWwiLCJ1c2VTZWxlY3RvciIsInVzZUFzeW5jIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiZ2V0Rm9sZGVyQnlVaWQiLCJnZXRMb2FkaW5nTmF2IiwiRm9sZGVyQWxlcnRpbmciLCJtYXRjaCIsIm5hdkluZGV4IiwidWlkIiwicGFyYW1zIiwibmF2TW9kZWwiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==