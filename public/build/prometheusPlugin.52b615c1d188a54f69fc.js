(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["prometheusPlugin"],{

/***/ "./public/app/core/utils/CancelablePromise.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCancelablePromiseRejection": () => (/* binding */ isCancelablePromiseRejection),
/* harmony export */   "makePromiseCancelable": () => (/* binding */ makePromiseCancelable)
/* harmony export */ });
// https://github.com/facebook/react/issues/5465
function isCancelablePromiseRejection(promise) {
  return typeof promise === 'object' && promise !== null && 'isCanceled' in promise;
}
const makePromiseCancelable = promise => {
  let hasCanceled_ = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    const canceledPromiseRejection = {
      isCanceled: true
    };
    promise.then(val => hasCanceled_ ? reject(canceledPromiseRejection) : resolve(val));
    promise.catch(error => hasCanceled_ ? reject(canceledPromiseRejection) : reject(error));
  });
  return {
    promise: wrappedPromise,

    cancel() {
      hasCanceled_ = true;
    }

  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/add_label_to_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLabelToQuery": () => (/* binding */ addLabelToQuery)
/* harmony export */ });
/* harmony import */ var lezer_promql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");
/* harmony import */ var _querybuilder_PromQueryModeller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
/* harmony import */ var _querybuilder_parsing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/parsing.ts");




/**
 * Adds label filter to existing query. Useful for query modification for example for ad hoc filters.
 *
 * It uses PromQL parser to find instances of metric and labels, alters them and then splices them back into the query.
 * Ideally we could use the parse -> change -> render is a simple 3 steps but right now building the visual query
 * object does not support all possible queries.
 *
 * So instead this just operates on substrings of the query with labels and operates just on those. This makes this
 * more robust and can alter even invalid queries, and preserves in general the query structure and whitespace.
 * @param query
 * @param key
 * @param value
 * @param operator
 */
function addLabelToQuery(query, key, value, operator = '=') {
  if (!key || !value) {
    throw new Error('Need label to add to query.');
  }

  const vectorSelectorPositions = getVectorSelectorPositions(query);

  if (!vectorSelectorPositions.length) {
    return query;
  }

  const filter = toLabelFilter(key, value, operator);
  return addFilter(query, vectorSelectorPositions, filter);
}

/**
 * Parse the string and get all VectorSelector positions in the query together with parsed representation of the vector
 * selector.
 * @param query
 */
function getVectorSelectorPositions(query) {
  const tree = lezer_promql__WEBPACK_IMPORTED_MODULE_0__.parser.parse(query);
  const positions = [];
  tree.iterate({
    enter: (type, from, to, get) => {
      if (type.name === 'VectorSelector') {
        const visQuery = (0,_querybuilder_parsing__WEBPACK_IMPORTED_MODULE_2__.buildVisualQueryFromString)(query.substring(from, to));
        positions.push({
          query: visQuery.query,
          from,
          to
        });
        return false;
      }
    }
  });
  return positions;
}

function toLabelFilter(key, value, operator) {
  // We need to make sure that we convert the value back to string because it may be a number
  const transformedValue = value === Infinity ? '+Inf' : value.toString();
  return {
    label: key,
    op: operator,
    value: transformedValue
  };
}

function addFilter(query, vectorSelectorPositions, filter) {
  const modeller = new _querybuilder_PromQueryModeller__WEBPACK_IMPORTED_MODULE_1__.PromQueryModeller();
  let newQuery = '';
  let prev = 0;

  for (let i = 0; i < vectorSelectorPositions.length; i++) {
    // This is basically just doing splice on a string for each matched vector selector.
    const match = vectorSelectorPositions[i];
    const isLast = i === vectorSelectorPositions.length - 1;
    const start = query.substring(prev, match.from);
    const end = isLast ? query.substring(match.to) : '';

    if (!labelExists(match.query.labels, filter)) {
      // We don't want to add duplicate labels.
      match.query.labels.push(filter);
    }

    const newLabels = modeller.renderQuery(match.query);
    newQuery += start + newLabels + end;
    prev = match.to;
  }

  return newQuery;
}
/**
 * Check if label exists in the list of labels but ignore the operator.
 * @param labels
 * @param filter
 */


function labelExists(labels, filter) {
  return labels.find(label => label.label === filter.label && label.value === filter.value);
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/AnnotationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationQueryEditor": () => (/* binding */ AnnotationQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _querybuilder_components_PromQueryCodeEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryCodeEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _code, _code2, _Space;








function AnnotationQueryEditor(props) {
  // This is because of problematic typing. See AnnotationQueryEditorProps in grafana-data/annotations.ts.
  const annotation = props.annotation;
  const onAnnotationChange = props.onAnnotationChange;
  const query = {
    expr: annotation.expr,
    refId: annotation.name,
    interval: annotation.step
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRows, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_querybuilder_components_PromQueryCodeEditor__WEBPACK_IMPORTED_MODULE_3__.PromQueryCodeEditor, Object.assign({}, props, {
        query: query,
        onChange: query => {
          onAnnotationChange(Object.assign({}, annotation, {
            expr: query.expr
          }));
        }
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
          label: "Min step",
          tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: ["An additional lower limit for the step parameter of the Prometheus query and for the", ' ', _code || (_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
              children: "$__interval"
            })), " and ", _code2 || (_code2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
              children: "$__rate_interval"
            })), " variables."]
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AutoSizeInput, {
            type: "text",
            "aria-label": "Set lower limit for the step parameter",
            placeholder: 'auto',
            minWidth: 10,
            onCommitChange: ev => {
              onAnnotationChange(Object.assign({}, annotation, {
                step: ev.currentTarget.value
              }));
            },
            defaultValue: query.interval
          })
        })
      })]
    }), _Space || (_Space = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Space, {
      v: 0.5
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Title",
        tooltip: 'Use either the name or a pattern. For example, {{instance}} is replaced with label value for the label instance.',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "text",
          placeholder: "{{alertname}}",
          value: annotation.titleFormat,
          onChange: event => {
            onAnnotationChange(Object.assign({}, annotation, {
              titleFormat: event.currentTarget.value
            }));
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Tags",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "text",
          placeholder: "label1,label2",
          value: annotation.tagKeys,
          onChange: event => {
            onAnnotationChange(Object.assign({}, annotation, {
              tagKeys: event.currentTarget.value
            }));
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Text",
        tooltip: 'Use either the name or a pattern. For example, {{instance}} is replaced with label value for the label instance.',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "text",
          placeholder: "{{instance}}",
          value: annotation.textFormat,
          onChange: event => {
            onAnnotationChange(Object.assign({}, annotation, {
              textFormat: event.currentTarget.value
            }));
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Series value as timestamp",
        tooltip: 'The unit of timestamp is milliseconds. If the unit of the series value is seconds, multiply its range vector by 1000.',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorSwitch, {
          value: annotation.useValueForTime,
          onChange: event => {
            onAnnotationChange(Object.assign({}, annotation, {
              useValueForTime: event.currentTarget.value
            }));
          }
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PromCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;




const CHEAT_SHEET_ITEMS = [{
  title: 'Request Rate',
  expression: 'rate(http_request_total[5m])',
  label: 'Given an HTTP request counter, this query calculates the per-second average request rate over the last 5 minutes.'
}, {
  title: '95th Percentile of Request Latencies',
  expression: 'histogram_quantile(0.95, sum(rate(prometheus_http_request_duration_seconds_bucket[5m])) by (le))',
  label: 'Calculates the 95th percentile of HTTP request rate over 5 minute windows.'
}, {
  title: 'Alerts Firing',
  expression: 'sort_desc(sum(sum_over_time(ALERTS{alertstate="firing"}[24h])) by (alertname))',
  label: 'Sums up the alerts that have been firing over the last 24 hours.'
}, {
  title: 'Step',
  label: 'Defines the graph resolution using a duration format (15s, 1m, 3h, ...). Small steps create high-resolution graphs but can be slow over larger time ranges. Using a longer step lowers the resolution and smooths the graph by producing fewer datapoints. If no step is given the resolution is calculated automatically.'
}];

const PromCheatSheet = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
    children: "PromQL Cheat Sheet"
  })), CHEAT_SHEET_ITEMS.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "cheat-sheet-item",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cheat-sheet-item__title",
      children: item.title
    }), item.expression ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cheat-sheet-item__example",
      onClick: e => props.onClickExample({
        refId: 'A',
        expr: item.expression
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
        children: item.expression
      })
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cheat-sheet-item__label",
      children: item.label
    })]
  }, index))]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromCheatSheet);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PromExemplarField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromExemplarField": () => (/* binding */ PromExemplarField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["datasource", "onChange", "query"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function PromExemplarField(_ref) {
  let {
    datasource,
    onChange,
    query
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const prevError = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(error);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!datasource.exemplarsAvailable) {
      setError('Exemplars for this query are not available');
      onChange(false);
    } else if (query.instant && !query.range) {
      setError('Exemplars are not available for instant queries');
      onChange(false);
    } else {
      setError(null); // If error is cleared, we want to change exemplar to true

      if (prevError && !error) {
        onChange(true);
      }
    }
  }, [datasource.exemplarsAvailable, query.instant, query.range, onChange, prevError, error]);
  const iconButtonStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
    [styles.activeIcon]: !!query.exemplar
  }, styles.eyeIcon);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
    width: "auto",
    "data-testid": rest['data-testid'],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      content: error !== null && error !== void 0 ? error : '',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: styles.iconWrapper,
        children: ["Exemplars", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
          name: "eye",
          tooltip: !!query.exemplar ? 'Disable query with exemplars' : 'Enable query with exemplars',
          disabled: !!error,
          className: iconButtonStyles,
          onClick: () => {
            onChange(!query.exemplar);
          }
        })]
      })
    })
  });
}

function getStyles(theme) {
  return {
    eyeIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(2)};
    `,
    activeIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.primary.main};
    `,
    iconWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PromExploreExtraField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromExploreExtraField": () => (/* binding */ PromExploreExtraField),
/* harmony export */   "getQueryTypeChangeHandler": () => (/* binding */ getQueryTypeChangeHandler),
/* harmony export */   "getQueryTypeOptions": () => (/* binding */ getQueryTypeOptions),
/* harmony export */   "testIds": () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PromExemplarField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromExemplarField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _InlineFormLabel2;









const PromExploreExtraField = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({
  query,
  datasource,
  onChange,
  onRunQuery
}) => {
  var _query$interval;

  const rangeOptions = getQueryTypeOptions(true);
  const prevQuery = (0,react_use__WEBPACK_IMPORTED_MODULE_6__["default"])(query);
  const onExemplarChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(exemplar => {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(query, prevQuery) || exemplar !== query.exemplar) {
      onChange(Object.assign({}, query, {
        exemplar
      }));
    }
  }, [prevQuery, query, onChange]);

  function onChangeQueryStep(interval) {
    onChange(Object.assign({}, query, {
      interval
    }));
  }

  function onStepChange(e) {
    if (e.currentTarget.value !== query.interval) {
      onChangeQueryStep(e.currentTarget.value);
    }
  }

  function onReturnKeyDown(e) {
    if (e.key === 'Enter' && e.shiftKey) {
      onRunQuery();
    }
  }

  const onQueryTypeChange = getQueryTypeChangeHandler(query, onChange);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    "aria-label": "Prometheus extra field",
    className: "gf-form-inline",
    "data-testid": testIds.extraFieldEditor,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      "data-testid": testIds.queryTypeField,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form explore-input-margin', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              flex-wrap: nowrap;
            `),
      "aria-label": "Query type field",
      children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
        width: "auto",
        children: "Query type"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
        options: rangeOptions,
        value: query.range && query.instant ? 'both' : query.instant ? 'instant' : 'range',
        onChange: onQueryTypeChange
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      "data-testid": testIds.stepField,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              flex-wrap: nowrap;
            `),
      "aria-label": "Step field",
      children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
        width: 6,
        tooltip: 'Time units and built-in variables can be used here, for example: $__interval, $__rate_interval, 5s, 1m, 3h, 1d, 1y (Default if no unit is specified: s)',
        children: "Min step"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
        type: 'text',
        className: "gf-form-input width-4",
        placeholder: 'auto',
        onChange: onStepChange,
        onKeyDown: onReturnKeyDown,
        value: (_query$interval = query.interval) !== null && _query$interval !== void 0 ? _query$interval : ''
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PromExemplarField__WEBPACK_IMPORTED_MODULE_4__.PromExemplarField, {
      onChange: onExemplarChange,
      datasource: datasource,
      query: query
    })]
  });
});
PromExploreExtraField.displayName = 'PromExploreExtraField';
function getQueryTypeOptions(includeBoth) {
  const rangeOptions = [{
    value: 'range',
    label: 'Range',
    description: 'Run query over a range of time'
  }, {
    value: 'instant',
    label: 'Instant',
    description: 'Run query against a single point in time. For this query, the "To" time is used'
  }];

  if (includeBoth) {
    rangeOptions.push({
      value: 'both',
      label: 'Both',
      description: 'Run an Instant query and a Range query'
    });
  }

  return rangeOptions;
}
function getQueryTypeChangeHandler(query, onChange) {
  return queryType => {
    if (queryType === 'instant') {
      onChange(Object.assign({}, query, {
        instant: true,
        range: false,
        exemplar: false
      }));
    } else if (queryType === 'range') {
      onChange(Object.assign({}, query, {
        instant: false,
        range: true
      }));
    } else {
      onChange(Object.assign({}, query, {
        instant: true,
        range: true
      }));
    }
  };
}
const testIds = {
  extraFieldEditor: 'prom-editor-extra-field',
  stepField: 'prom-editor-extra-field-step',
  queryTypeField: 'prom-editor-extra-field-query-type'
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PromExploreQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromExploreQueryEditor": () => (/* binding */ PromExploreQueryEditor),
/* harmony export */   "testIds": () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _PromExploreExtraField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromExploreExtraField.tsx");
/* harmony import */ var _PromQueryField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromQueryField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const PromExploreQueryEditor = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(props => {
  const {
    range,
    query,
    data,
    datasource,
    history,
    onChange,
    onRunQuery
  } = props; // Setting default values

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (query.expr === undefined) {
      onChange(Object.assign({}, query, {
        expr: ''
      }));
    }

    if (query.exemplar === undefined) {
      onChange(Object.assign({}, query, {
        exemplar: true
      }));
    } // Override query type to "Both" only for new queries (no query.expr).


    if (!query.instant && !query.range && !query.expr) {
      onChange(Object.assign({}, query, {
        instant: true,
        range: true
      }));
    }
  }, [onChange, query]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PromQueryField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    app: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CoreApp.Explore,
    datasource: datasource,
    query: query,
    range: range,
    onRunQuery: onRunQuery,
    onChange: onChange,
    onBlur: () => {},
    history: history,
    data: data,
    "data-testid": testIds.editor,
    ExtraFieldElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PromExploreExtraField__WEBPACK_IMPORTED_MODULE_2__.PromExploreExtraField, {
      query: query,
      onChange: onChange,
      datasource: datasource,
      onRunQuery: onRunQuery
    })
  });
});
PromExploreQueryEditor.displayName = 'PromExploreQueryEditor';
const testIds = {
  editor: 'prom-editor-explore'
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PromLink.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const PromLink = ({
  panelData,
  query,
  datasource
}) => {
  const [href, setHref] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (panelData) {
      const getExternalLink = () => {
        if (!panelData.request) {
          return '';
        }

        const {
          request: {
            range,
            interval,
            scopedVars
          }
        } = panelData;
        const start = datasource.getPrometheusTime(range.from, false);
        const end = datasource.getPrometheusTime(range.to, true);
        const rangeDiff = Math.ceil(end - start);
        const endTime = range.to.utc().format('YYYY-MM-DD HH:mm');
        const enrichedScopedVars = Object.assign({}, scopedVars, datasource.getRateIntervalScopedVariable(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(interval), _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(datasource.interval)));
        const options = {
          interval,
          scopedVars: enrichedScopedVars
        };
        const customQueryParameters = {};

        if (datasource.customQueryParameters) {
          for (const [k, v] of datasource.customQueryParameters) {
            customQueryParameters[k] = v;
          }
        }

        const queryOptions = datasource.createQuery(query, options, start, end);
        const expr = Object.assign({}, customQueryParameters, {
          'g0.expr': queryOptions.expr,
          'g0.range_input': rangeDiff + 's',
          'g0.end_input': endTime,
          'g0.step_input': queryOptions.step,
          'g0.tab': 0
        });
        const args = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(expr, (v, k) => {
          return k + '=' + encodeURIComponent(v);
        }).join('&');
        return `${datasource.directUrl}/graph?${args}`;
      };

      setHref(getExternalLink());
    }
  }, [datasource, panelData, query]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
    href: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.textUtil.sanitizeUrl(href),
    target: "_blank",
    rel: "noopener noreferrer",
    children: "Prometheus"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PromLink));

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PromQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORMAT_OPTIONS": () => (/* binding */ FORMAT_OPTIONS),
/* harmony export */   "INTERVAL_FACTOR_OPTIONS": () => (/* binding */ INTERVAL_FACTOR_OPTIONS),
/* harmony export */   "PromQueryEditor": () => (/* binding */ PromQueryEditor),
/* harmony export */   "testIds": () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PromExemplarField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromExemplarField.tsx");
/* harmony import */ var _PromLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromLink.tsx");
/* harmony import */ var _PromQueryField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromQueryField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _InlineFormLabel2, _div, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Types









const {
  Switch
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LegacyForms;
const FORMAT_OPTIONS = [{
  label: 'Time series',
  value: 'time_series'
}, {
  label: 'Table',
  value: 'table'
}, {
  label: 'Heatmap',
  value: 'heatmap'
}];
const INTERVAL_FACTOR_OPTIONS = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)([1, 2, 3, 4, 5, 10], value => ({
  value,
  label: '1/' + value
}));
class PromQueryEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  // Query target to be modified and used for queries
  constructor(props) {
    super(props); // Use default query to prevent undefined input values

    _defineProperty(this, "query", void 0);

    _defineProperty(this, "onFieldChange", (query, override) => {
      this.query.expr = query.expr;
    });

    _defineProperty(this, "onFormatChange", option => {
      this.query.format = option.value;
      this.setState({
        formatOption: option
      }, this.onRunQuery);
    });

    _defineProperty(this, "onInstantChange", e => {
      const instant = e.target.checked;
      this.query.instant = instant;
      this.setState({
        instant
      }, this.onRunQuery);
    });

    _defineProperty(this, "onIntervalChange", e => {
      const interval = e.currentTarget.value;
      this.query.interval = interval;
      this.setState({
        interval
      });
    });

    _defineProperty(this, "onIntervalFactorChange", option => {
      this.query.intervalFactor = option.value;
      this.setState({
        intervalFactorOption: option
      }, this.onRunQuery);
    });

    _defineProperty(this, "onLegendChange", e => {
      const legendFormat = e.currentTarget.value;
      this.query.legendFormat = legendFormat;
      this.setState({
        legendFormat
      });
    });

    _defineProperty(this, "onExemplarChange", isEnabled => {
      this.query.exemplar = isEnabled;
      this.setState({
        exemplar: isEnabled
      }, this.onRunQuery);
    });

    _defineProperty(this, "onRunQuery", () => {
      const {
        query
      } = this; // Change of query.hide happens outside of this component and is just passed as prop. We have to update it when running queries.

      const {
        hide
      } = this.props.query;
      this.props.onChange(Object.assign({}, query, {
        hide
      }));
      this.props.onRunQuery();
    });

    const defaultQuery = {
      expr: '',
      legendFormat: '',
      interval: '',
      // Set exemplar to false for alerting queries
      exemplar: props.app === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.UnifiedAlerting ? false : true
    };

    const _query = Object.assign({}, defaultQuery, props.query);

    this.query = _query; // Query target properties that are fully controlled inputs

    this.state = {
      // Fully controlled text inputs
      interval: _query.interval,
      legendFormat: _query.legendFormat,
      // Select options
      formatOption: FORMAT_OPTIONS.find(option => option.value === _query.format) || FORMAT_OPTIONS[0],
      intervalFactorOption: INTERVAL_FACTOR_OPTIONS.find(option => option.value === _query.intervalFactor) || INTERVAL_FACTOR_OPTIONS[0],
      // Switch options
      instant: Boolean(_query.instant),
      exemplar: Boolean(_query.exemplar)
    };
  }

  render() {
    const {
      datasource,
      query,
      range,
      data
    } = this.props;
    const {
      formatOption,
      instant,
      interval,
      intervalFactorOption,
      legendFormat
    } = this.state; //We want to hide exemplar field for unified alerting as exemplars in alerting don't make sense and are source of confusion

    const showExemplarField = this.props.app !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.UnifiedAlerting;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PromQueryField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      datasource: datasource,
      query: query,
      range: range,
      onRunQuery: this.onRunQuery,
      onChange: this.onFieldChange,
      history: [],
      data: data,
      "data-testid": testIds.editor,
      ExtraFieldElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "gf-form-inline",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            width: 7,
            tooltip: "Controls the name of the time series, using name or pattern. For example {{hostname}} will be replaced with label value for the label hostname.",
            children: "Legend"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
            type: "text",
            className: "gf-form-input",
            placeholder: "legend format",
            value: legendFormat,
            onChange: this.onLegendChange,
            onBlur: this.onRunQuery
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            width: 7,
            tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: ["An additional lower limit for the step parameter of the Prometheus query and for the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("code", {
                children: "$__interval"
              }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("code", {
                children: "$__rate_interval"
              }), " variables. The limit is absolute and not modified by the \"Resolution\" setting."]
            }),
            children: "Min step"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
            type: "text",
            className: "gf-form-input width-8",
            "aria-label": "Set lower limit for the step parameter",
            placeholder: interval,
            onChange: this.onIntervalChange,
            onBlur: this.onRunQuery,
            value: interval
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "gf-form",
          children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "gf-form-label",
            children: "Resolution"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            "aria-label": "Select resolution",
            isSearchable: false,
            options: INTERVAL_FACTOR_OPTIONS,
            onChange: this.onIntervalFactorChange,
            value: intervalFactorOption
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "gf-form",
          children: [_div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "gf-form-label width-7",
            children: "Format"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            className: "select-container",
            width: 16,
            isSearchable: false,
            options: FORMAT_OPTIONS,
            onChange: this.onFormatChange,
            value: formatOption,
            "aria-label": "Select format"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Switch, {
            label: "Instant",
            checked: instant,
            onChange: this.onInstantChange
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            width: 10,
            tooltip: "Link to Graph in Prometheus",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PromLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
              datasource: datasource,
              query: this.query // Use modified query
              ,
              panelData: data
            })
          })]
        }), showExemplarField && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PromExemplarField__WEBPACK_IMPORTED_MODULE_4__.PromExemplarField, {
          onChange: this.onExemplarChange,
          datasource: datasource,
          query: this.query,
          "data-testid": testIds.exemplar
        })]
      })
    });
  }

}
const testIds = {
  editor: 'prom-editor',
  exemplar: 'exemplar-editor'
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PromQueryEditorByApp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryEditorByApp": () => (/* binding */ PromQueryEditorByApp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _querybuilder_components_PromQueryEditorSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryEditorSelector.tsx");
/* harmony import */ var _PromExploreQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromExploreQueryEditor.tsx");
/* harmony import */ var _PromQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromQueryEditor.tsx");
/* harmony import */ var _PromQueryEditorForAlerting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromQueryEditorForAlerting.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








function PromQueryEditorByApp(props) {
  const {
    app
  } = props;

  switch (app) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CoreApp.CloudAlerting:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PromQueryEditorForAlerting__WEBPACK_IMPORTED_MODULE_6__.PromQueryEditorForAlerting, Object.assign({}, props));

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CoreApp.Explore:
      if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.promQueryBuilder) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_querybuilder_components_PromQueryEditorSelector__WEBPACK_IMPORTED_MODULE_3__.PromQueryEditorSelector, Object.assign({}, props));
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PromExploreQueryEditor__WEBPACK_IMPORTED_MODULE_4__.PromExploreQueryEditor, Object.assign({}, props));

    default:
      if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.promQueryBuilder) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_querybuilder_components_PromQueryEditorSelector__WEBPACK_IMPORTED_MODULE_3__.PromQueryEditorSelector, Object.assign({}, props));
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PromQueryEditor__WEBPACK_IMPORTED_MODULE_5__.PromQueryEditor, Object.assign({}, props));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(PromQueryEditorByApp));

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PromQueryEditorForAlerting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryEditorForAlerting": () => (/* binding */ PromQueryEditorForAlerting),
/* harmony export */   "testIds": () => (/* binding */ testIds)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PromQueryField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromQueryField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



function PromQueryEditorForAlerting(props) {
  const {
    datasource,
    query,
    range,
    data,
    onChange,
    onRunQuery
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PromQueryField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    datasource: datasource,
    query: query,
    onRunQuery: onRunQuery,
    onChange: onChange,
    history: [],
    range: range,
    data: data,
    "data-testid": testIds.editor
  });
}
const testIds = {
  editor: 'prom-editor-cloud-alerting'
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PromQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECORDING_RULES_GROUP": () => (/* binding */ RECORDING_RULES_GROUP),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "willApplySuggestion": () => (/* binding */ willApplySuggestion)
/* harmony export */ });
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.28.0-28f20a79ff-bde93fb2be.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
/* harmony import */ var app_core_utils_CancelablePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/utils/CancelablePromise.ts");
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
/* harmony import */ var _PrometheusMetricsBrowser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PrometheusMetricsBrowser.tsx");
/* harmony import */ var _monaco_query_field_MonacoQueryFieldWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryFieldWrapper.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const RECORDING_RULES_GROUP = '__recording_rules__';
const LAST_USED_LABELS_KEY = 'grafana.datasources.prometheus.browser.labels';

function getChooserText(metricsLookupDisabled, hasSyntax, hasMetrics) {
  if (metricsLookupDisabled) {
    return '(Disabled)';
  }

  if (!hasSyntax) {
    return 'Loading metrics...';
  }

  if (!hasMetrics) {
    return '(No metrics found)';
  }

  return 'Metrics browser';
}

function willApplySuggestion(suggestion, {
  typeaheadContext,
  typeaheadText
}) {
  // Modify suggestion based on context
  switch (typeaheadContext) {
    case 'context-labels':
      {
        const nextChar = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.DOMUtil.getNextCharacter();

        if (!nextChar || nextChar === '}' || nextChar === ',') {
          suggestion += '=';
        }

        break;
      }

    case 'context-label-values':
      {
        // Always add quotes and remove existing ones instead
        if (!typeaheadText.match(/^(!?=~?"|")/)) {
          suggestion = `"${suggestion}`;
        }

        if (_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.DOMUtil.getNextCharacter() !== '"') {
          suggestion = `${suggestion}"`;
        }

        break;
      }

    default:
  }

  return suggestion;
}

class PromQueryField extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props, context) {
    super(props, context);

    _defineProperty(this, "plugins", void 0);

    _defineProperty(this, "refreshHint", () => {
      const {
        datasource,
        query,
        data
      } = this.props;
      const initHints = datasource.getInitHints();
      const initHint = initHints.length > 0 ? initHints[0] : null;

      if (!data || data.series.length === 0) {
        this.setState({
          hint: initHint
        });
        return;
      }

      const result = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isDataFrame)(data.series[0]) ? data.series.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toLegacyResponseData) : data.series;
      const queryHints = datasource.getQueryHints(query, result);
      let queryHint = queryHints.length > 0 ? queryHints[0] : null;
      this.setState({
        hint: queryHint !== null && queryHint !== void 0 ? queryHint : initHint
      });
    });

    _defineProperty(this, "refreshMetrics", async () => {
      const {
        datasource: {
          languageProvider
        }
      } = this.props;
      this.languageProviderInitializationPromise = (0,app_core_utils_CancelablePromise__WEBPACK_IMPORTED_MODULE_5__.makePromiseCancelable)(languageProvider.start());

      try {
        const remainingTasks = await this.languageProviderInitializationPromise.promise;
        await Promise.all(remainingTasks);
        this.onUpdateLanguage();
      } catch (err) {
        if ((0,app_core_utils_CancelablePromise__WEBPACK_IMPORTED_MODULE_5__.isCancelablePromiseRejection)(err) && err.isCanceled) {// do nothing, promise was canceled
        } else {
          throw err;
        }
      }
    });

    _defineProperty(this, "onChangeLabelBrowser", selector => {
      this.onChangeQuery(selector, true);
      this.setState({
        labelBrowserVisible: false
      });
    });

    _defineProperty(this, "onChangeQuery", (value, override) => {
      // Send text change to parent
      const {
        query,
        onChange,
        onRunQuery
      } = this.props;

      if (onChange) {
        const nextQuery = Object.assign({}, query, {
          expr: value
        });
        onChange(nextQuery);

        if (override && onRunQuery) {
          onRunQuery();
        }
      }
    });

    _defineProperty(this, "onClickChooserButton", () => {
      this.setState(state => ({
        labelBrowserVisible: !state.labelBrowserVisible
      }));
    });

    _defineProperty(this, "onClickHintFix", () => {
      const {
        datasource,
        query,
        onChange,
        onRunQuery
      } = this.props;
      const {
        hint
      } = this.state;
      onChange(datasource.modifyQuery(query, hint.fix.action));
      onRunQuery();
    });

    _defineProperty(this, "onUpdateLanguage", () => {
      const {
        datasource: {
          languageProvider
        }
      } = this.props;
      const {
        metrics
      } = languageProvider;

      if (!metrics) {
        return;
      }

      this.setState({
        syntaxLoaded: true
      });
    });

    _defineProperty(this, "onTypeahead", async typeahead => {
      const {
        datasource: {
          languageProvider
        }
      } = this.props;

      if (!languageProvider) {
        return {
          suggestions: []
        };
      }

      const {
        history
      } = this.props;
      const {
        prefix,
        text,
        value,
        wrapperClasses,
        labelKey
      } = typeahead;
      const result = await languageProvider.provideCompletionItems({
        text,
        value,
        prefix,
        wrapperClasses,
        labelKey
      }, {
        history
      });
      return result;
    });

    this.plugins = [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.BracesPlugin)(), (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SlatePrism)({
      onlyIn: node => node.type === 'code_block',
      getSyntax: node => 'promql'
    }, Object.assign({}, prismjs__WEBPACK_IMPORTED_MODULE_0__.languages, {
      promql: this.props.datasource.languageProvider.syntax
    }))];
    this.state = {
      labelBrowserVisible: false,
      syntaxLoaded: false,
      hint: null
    };
  }

  componentDidMount() {
    if (this.props.datasource.languageProvider) {
      this.refreshMetrics();
    }

    this.refreshHint();
  }

  componentWillUnmount() {
    if (this.languageProviderInitializationPromise) {
      this.languageProviderInitializationPromise.cancel();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      data,
      datasource: {
        languageProvider
      },
      range
    } = this.props;

    if (languageProvider !== prevProps.datasource.languageProvider) {
      // We reset this only on DS change so we do not flesh loading state on every rangeChange which happens on every
      // query run if using relative range.
      this.setState({
        syntaxLoaded: false
      });
    }

    const changedRangeToRefresh = this.rangeChangedToRefresh(range, prevProps.range); // We want to refresh metrics when language provider changes and/or when range changes (we round up intervals to a minute)

    if (languageProvider !== prevProps.datasource.languageProvider || changedRangeToRefresh) {
      this.refreshMetrics();
    }

    if (data && prevProps.data && prevProps.data.series !== data.series) {
      this.refreshHint();
    }
  }

  rangeChangedToRefresh(range, prevRange) {
    if (range && prevRange) {
      const sameMinuteFrom = (0,_language_utils__WEBPACK_IMPORTED_MODULE_6__.roundMsToMin)(range.from.valueOf()) === (0,_language_utils__WEBPACK_IMPORTED_MODULE_6__.roundMsToMin)(prevRange.from.valueOf());
      const sameMinuteTo = (0,_language_utils__WEBPACK_IMPORTED_MODULE_6__.roundMsToMin)(range.to.valueOf()) === (0,_language_utils__WEBPACK_IMPORTED_MODULE_6__.roundMsToMin)(prevRange.to.valueOf()); // If both are same, don't need to refresh.

      return !(sameMinuteFrom && sameMinuteTo);
    }

    return false;
  }
  /**
   * TODO #33976: Remove this, add histogram group (query = `histogram_quantile(0.95, sum(rate(${metric}[5m])) by (le))`;)
   */


  render() {
    const {
      datasource,
      datasource: {
        languageProvider
      },
      query,
      ExtraFieldElement,
      history = []
    } = this.props;
    const {
      labelBrowserVisible,
      syntaxLoaded,
      hint
    } = this.state;
    const hasMetrics = languageProvider.metrics.length > 0;
    const chooserText = getChooserText(datasource.lookupsDisabled, syntaxLoaded, hasMetrics);
    const buttonDisabled = !(syntaxLoaded && hasMetrics);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_4__.LocalStorageValueProvider, {
      storageKey: LAST_USED_LABELS_KEY,
      defaultValue: [],
      children: (lastUsedLabels, onLastUsedLabelsSave, onLastUsedLabelsDelete) => {
        var _query$expr;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "gf-form-inline gf-form-inline--xs-view-flex-column flex-grow-1",
            "data-testid": this.props['data-testid'],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
              className: "gf-form-label query-keyword pointer",
              onClick: this.onClickChooserButton,
              disabled: buttonDisabled,
              children: [chooserText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                name: labelBrowserVisible ? 'angle-down' : 'angle-right'
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "gf-form gf-form--grow flex-shrink-1 min-width-15",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_monaco_query_field_MonacoQueryFieldWrapper__WEBPACK_IMPORTED_MODULE_8__.MonacoQueryFieldWrapper, {
                runQueryOnBlur: this.props.app !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.Explore,
                languageProvider: languageProvider,
                history: history,
                onChange: this.onChangeQuery,
                onRunQuery: this.props.onRunQuery,
                initialValue: (_query$expr = query.expr) !== null && _query$expr !== void 0 ? _query$expr : ''
              })
            })]
          }), labelBrowserVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PrometheusMetricsBrowser__WEBPACK_IMPORTED_MODULE_7__.PrometheusMetricsBrowser, {
              languageProvider: languageProvider,
              onChange: this.onChangeLabelBrowser,
              lastUsedLabels: lastUsedLabels || [],
              storeLastUsedLabels: onLastUsedLabelsSave,
              deleteLastUsedLabels: onLastUsedLabelsDelete
            })
          }), ExtraFieldElement, hint ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "query-row-break",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "prom-query-field-info text-warning",
              children: [hint.label, ' ', hint.fix ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
                className: "text-link muted",
                onClick: this.onClickHintFix,
                children: hint.fix.label
              }) : null]
            })
          }) : null]
        });
      }
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromQueryField);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/PrometheusMetricsBrowser.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrometheusMetricsBrowser": () => (/* binding */ PrometheusMetricsBrowser),
/* harmony export */   "UnthemedPrometheusMetricsBrowser": () => (/* binding */ UnthemedPrometheusMetricsBrowser),
/* harmony export */   "buildSelector": () => (/* binding */ buildSelector),
/* harmony export */   "facetLabels": () => (/* binding */ facetLabels)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-window-virtual-db79012d82/0/cache/react-window-npm-1.8.7-5a23226c09-1e122c2922.zip/node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _Label, _Label2, _Label3, _Label4;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // Hard limit on labels to render



const EMPTY_SELECTOR = '{}';
const METRIC_LABEL = '__name__';
const LIST_ITEM_SIZE = 25;
function buildSelector(labels) {
  let singleMetric = '';
  const selectedLabels = [];

  for (const label of labels) {
    if ((label.name === METRIC_LABEL || label.selected) && label.values && label.values.length > 0) {
      const selectedValues = label.values.filter(value => value.selected).map(value => value.name);

      if (selectedValues.length > 1) {
        selectedLabels.push(`${label.name}=~"${selectedValues.map(_language_utils__WEBPACK_IMPORTED_MODULE_3__.escapeLabelValueInRegexSelector).join('|')}"`);
      } else if (selectedValues.length === 1) {
        if (label.name === METRIC_LABEL) {
          singleMetric = selectedValues[0];
        } else {
          selectedLabels.push(`${label.name}="${(0,_language_utils__WEBPACK_IMPORTED_MODULE_3__.escapeLabelValueInExactSelector)(selectedValues[0])}"`);
        }
      }
    }
  }

  return [singleMetric, '{', selectedLabels.join(','), '}'].join('');
}
function facetLabels(labels, possibleLabels, lastFacetted) {
  return labels.map(label => {
    const possibleValues = possibleLabels[label.name];

    if (possibleValues) {
      let existingValues;

      if (label.name === lastFacetted && label.values) {
        // Facetting this label, show all values
        existingValues = label.values;
      } else {
        var _label$values;

        // Keep selection in other facets
        const selectedValues = new Set(((_label$values = label.values) === null || _label$values === void 0 ? void 0 : _label$values.filter(value => value.selected).map(value => value.name)) || []); // Values for this label have not been requested yet, let's use the facetted ones as the initial values

        existingValues = possibleValues.map(value => ({
          name: value,
          selected: selectedValues.has(value)
        }));
      }

      return Object.assign({}, label, {
        loading: false,
        values: existingValues,
        hidden: !possibleValues,
        facets: existingValues.length
      });
    } // Label is facetted out, hide all values


    return Object.assign({}, label, {
      loading: false,
      hidden: !possibleValues,
      values: undefined,
      facets: 0
    });
  });
}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.bg2};
    padding: ${theme.spacing.sm};
    width: 100%;
  `,
  list: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing.sm};
    display: flex;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: auto;
    align-content: flex-start;
  `,
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & + & {
      margin: ${theme.spacing.md} 0;
    }
    position: relative;
  `,
  selector: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.typography.fontFamily.monospace};
    margin-bottom: ${theme.spacing.sm};
  `,
  status: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing.xs};
    color: ${theme.colors.textSemiWeak};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* using absolute positioning because flex interferes with ellipsis */
    position: absolute;
    width: 50%;
    right: 0;
    text-align: right;
    transition: opacity 100ms linear;
    opacity: 0;
  `,
  statusShowing: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    opacity: 1;
  `,
  error: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.palette.brandDanger};
  `,
  valueList: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing.sm};
  `,
  valueListWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    border-left: 1px solid ${theme.colors.border2};
    margin: ${theme.spacing.sm} 0;
    padding: ${theme.spacing.sm} 0 ${theme.spacing.sm} ${theme.spacing.sm};
  `,
  valueListArea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${theme.spacing.sm};
  `,
  valueTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: -${theme.spacing.xs};
    margin-bottom: ${theme.spacing.sm};
  `,
  validationStatus: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.textStrong};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}));
/**
 * TODO #33976: Remove duplicated code. The component is very similar to LokiLabelBrowser.tsx. Check if it's possible
 *              to create a single, generic component.
 */

class UnthemedPrometheusMetricsBrowser extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "valueListsRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef());

    _defineProperty(this, "state", {
      labels: [],
      labelSearchTerm: '',
      metricSearchTerm: '',
      status: 'Ready',
      error: '',
      validationStatus: '',
      valueSearchTerm: ''
    });

    _defineProperty(this, "onChangeLabelSearch", event => {
      this.setState({
        labelSearchTerm: event.target.value
      });
    });

    _defineProperty(this, "onChangeMetricSearch", event => {
      this.setState({
        metricSearchTerm: event.target.value
      });
    });

    _defineProperty(this, "onChangeValueSearch", event => {
      this.setState({
        valueSearchTerm: event.target.value
      });
    });

    _defineProperty(this, "onClickRunQuery", () => {
      const selector = buildSelector(this.state.labels);
      this.props.onChange(selector);
    });

    _defineProperty(this, "onClickRunRateQuery", () => {
      const selector = buildSelector(this.state.labels);
      const query = `rate(${selector}[$__interval])`;
      this.props.onChange(query);
    });

    _defineProperty(this, "onClickClear", () => {
      this.setState(state => {
        const labels = state.labels.map(label => Object.assign({}, label, {
          values: undefined,
          selected: false,
          loading: false,
          hidden: false,
          facets: undefined
        }));
        return {
          labels,
          labelSearchTerm: '',
          metricSearchTerm: '',
          status: '',
          error: '',
          validationStatus: '',
          valueSearchTerm: ''
        };
      });
      this.props.deleteLastUsedLabels(); // Get metrics

      this.fetchValues(METRIC_LABEL, EMPTY_SELECTOR);
    });

    _defineProperty(this, "onClickLabel", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label) {
        return;
      } // Toggle selected state


      const selected = !label.selected;
      let nextValue = {
        selected
      };

      if (label.values && !selected) {
        // Deselect all values if label was deselected
        const values = label.values.map(value => Object.assign({}, value, {
          selected: false
        }));
        nextValue = Object.assign({}, nextValue, {
          facets: 0,
          values
        });
      } // Resetting search to prevent empty results


      this.setState({
        labelSearchTerm: ''
      });
      this.updateLabelState(name, nextValue, '', () => this.doFacettingForLabel(name));
    });

    _defineProperty(this, "onClickValue", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label || !label.values) {
        return;
      } // Resetting search to prevent empty results


      this.setState({
        labelSearchTerm: ''
      }); // Toggling value for selected label, leaving other values intact

      const values = label.values.map(v => Object.assign({}, v, {
        selected: v.name === value ? !v.selected : v.selected
      }));
      this.updateLabelState(name, {
        values
      }, '', () => this.doFacetting(name));
    });

    _defineProperty(this, "onClickMetric", (name, value, event) => {
      // Finding special metric label
      const label = this.state.labels.find(l => l.name === name);

      if (!label || !label.values) {
        return;
      } // Resetting search to prevent empty results


      this.setState({
        metricSearchTerm: ''
      }); // Toggling value for selected label, leaving other values intact

      const values = label.values.map(v => Object.assign({}, v, {
        selected: v.name === value || v.selected ? !v.selected : v.selected
      })); // Toggle selected state of special metrics label

      const selected = values.some(v => v.selected);
      this.updateLabelState(name, {
        selected,
        values
      }, '', () => this.doFacetting(name));
    });

    _defineProperty(this, "onClickValidate", () => {
      const selector = buildSelector(this.state.labels);
      this.validateSelector(selector);
    });

    _defineProperty(this, "doFacetting", lastFacetted => {
      const selector = buildSelector(this.state.labels);

      if (selector === EMPTY_SELECTOR) {
        // Clear up facetting
        const labels = this.state.labels.map(label => {
          return Object.assign({}, label, {
            facets: 0,
            values: undefined,
            hidden: false
          });
        });
        this.setState({
          labels
        }, () => {
          // Get fresh set of values
          this.state.labels.forEach(label => (label.selected || label.name === METRIC_LABEL) && this.fetchValues(label.name, selector));
        });
      } else {
        // Do facetting
        this.fetchSeries(selector, lastFacetted);
      }
    });
  }

  updateLabelState(name, updatedFields, status = '', cb) {
    this.setState(state => {
      const labels = state.labels.map(label => {
        if (label.name === name) {
          return Object.assign({}, label, updatedFields);
        }

        return label;
      }); // New status overrides errors

      const error = status ? '' : state.error;
      return {
        labels,
        status,
        error,
        validationStatus: ''
      };
    }, cb);
  }

  componentDidMount() {
    const {
      languageProvider,
      lastUsedLabels
    } = this.props;

    if (languageProvider) {
      const selectedLabels = lastUsedLabels;
      languageProvider.start().then(() => {
        let rawLabels = languageProvider.getLabelKeys(); // Get metrics

        this.fetchValues(METRIC_LABEL, EMPTY_SELECTOR); // Auto-select previously selected labels

        const labels = rawLabels.map((label, i, arr) => ({
          name: label,
          selected: selectedLabels.includes(label),
          loading: false
        })); // Pre-fetch values for selected labels

        this.setState({
          labels
        }, () => {
          this.state.labels.forEach(label => {
            if (label.selected) {
              this.fetchValues(label.name, EMPTY_SELECTOR);
            }
          });
        });
      });
    }
  }

  doFacettingForLabel(name) {
    const label = this.state.labels.find(l => l.name === name);

    if (!label) {
      return;
    }

    const selectedLabels = this.state.labels.filter(label => label.selected).map(label => label.name);
    this.props.storeLastUsedLabels(selectedLabels);

    if (label.selected) {
      // Refetch values for newly selected label...
      if (!label.values) {
        this.fetchValues(name, buildSelector(this.state.labels));
      }
    } else {
      // Only need to facet when deselecting labels
      this.doFacetting();
    }
  }

  async fetchValues(name, selector) {
    const {
      languageProvider
    } = this.props;
    this.updateLabelState(name, {
      loading: true
    }, `Fetching values for ${name}`);

    try {
      let rawValues = await languageProvider.getLabelValues(name); // If selector changed, clear loading state and discard result by returning early

      if (selector !== buildSelector(this.state.labels)) {
        this.updateLabelState(name, {
          loading: false
        });
        return;
      }

      const values = [];
      const {
        metricsMetadata
      } = languageProvider;

      for (const labelValue of rawValues) {
        const value = {
          name: labelValue
        }; // Adding type/help text to metrics

        if (name === METRIC_LABEL && metricsMetadata) {
          const meta = metricsMetadata[labelValue];

          if (meta) {
            value.details = `(${meta.type}) ${meta.help}`;
          }
        }

        values.push(value);
      }

      this.updateLabelState(name, {
        values,
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  async fetchSeries(selector, lastFacetted) {
    const {
      languageProvider
    } = this.props;

    if (lastFacetted) {
      this.updateLabelState(lastFacetted, {
        loading: true
      }, `Facetting labels for ${selector}`);
    }

    try {
      const possibleLabels = await languageProvider.fetchSeriesLabels(selector, true); // If selector changed, clear loading state and discard result by returning early

      if (selector !== buildSelector(this.state.labels)) {
        if (lastFacetted) {
          this.updateLabelState(lastFacetted, {
            loading: false
          });
        }

        return;
      }

      if (Object.keys(possibleLabels).length === 0) {
        this.setState({
          error: `Empty results, no matching label for ${selector}`
        });
        return;
      }

      const labels = facetLabels(this.state.labels, possibleLabels, lastFacetted);
      this.setState({
        labels,
        error: ''
      });

      if (lastFacetted) {
        this.updateLabelState(lastFacetted, {
          loading: false
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async validateSelector(selector) {
    const {
      languageProvider
    } = this.props;
    this.setState({
      validationStatus: `Validating selector ${selector}`,
      error: ''
    });
    const streams = await languageProvider.fetchSeries(selector);
    this.setState({
      validationStatus: `Selector is valid (${streams.length} series found)`
    });
  }

  render() {
    var _metrics, _metrics$values2;

    const {
      theme
    } = this.props;
    const {
      labels,
      labelSearchTerm,
      metricSearchTerm,
      status,
      error,
      validationStatus,
      valueSearchTerm
    } = this.state;
    const styles = getStyles(theme);

    if (labels.length === 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.wrapper,
        children: _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
          text: "Loading labels..."
        }))
      });
    } // Filter metrics


    let metrics = labels.find(label => label.name === METRIC_LABEL);

    if (metrics && metricSearchTerm) {
      var _metrics$values;

      metrics = Object.assign({}, metrics, {
        values: (_metrics$values = metrics.values) === null || _metrics$values === void 0 ? void 0 : _metrics$values.filter(value => value.selected || value.name.includes(metricSearchTerm))
      });
    } // Filter labels


    let nonMetricLabels = labels.filter(label => !label.hidden && label.name !== METRIC_LABEL);

    if (labelSearchTerm) {
      nonMetricLabels = nonMetricLabels.filter(label => label.selected || label.name.includes(labelSearchTerm));
    } // Filter non-metric label values


    let selectedLabels = nonMetricLabels.filter(label => label.selected && label.values);

    if (valueSearchTerm) {
      selectedLabels = selectedLabels.map(label => {
        var _label$values2;

        return Object.assign({}, label, {
          values: (_label$values2 = label.values) === null || _label$values2 === void 0 ? void 0 : _label$values2.filter(value => value.selected || value.name.includes(valueSearchTerm))
        });
      });
    }

    const selector = buildSelector(this.state.labels);
    const empty = selector === EMPTY_SELECTOR;
    const metricCount = ((_metrics = metrics) === null || _metrics === void 0 ? void 0 : (_metrics$values2 = _metrics.values) === null || _metrics$values2 === void 0 ? void 0 : _metrics$values2.length) || 0;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        align: "flex-start",
        spacing: "lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.section,
            children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
              description: "Once a metric is selected only possible labels are shown.",
              children: "1. Select a metric"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
                onChange: this.onChangeMetricSearch,
                "aria-label": "Filter expression for metric",
                value: metricSearchTerm
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              role: "list",
              className: styles.valueListWrapper,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_5__.FixedSizeList, {
                height: Math.min(450, metricCount * LIST_ITEM_SIZE),
                itemCount: metricCount,
                itemSize: LIST_ITEM_SIZE,
                itemKey: i => metrics.values[i].name,
                width: 300,
                className: styles.valueList,
                children: ({
                  index,
                  style
                }) => {
                  var _metrics2, _metrics2$values;

                  const value = (_metrics2 = metrics) === null || _metrics2 === void 0 ? void 0 : (_metrics2$values = _metrics2.values) === null || _metrics2$values === void 0 ? void 0 : _metrics2$values[index];

                  if (!value) {
                    return null;
                  }

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    style: style,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.BrowserLabel, {
                      name: metrics.name,
                      value: value === null || value === void 0 ? void 0 : value.name,
                      title: value.details,
                      active: value === null || value === void 0 ? void 0 : value.selected,
                      onClick: this.onClickMetric,
                      searchTerm: metricSearchTerm
                    })
                  });
                }
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.section,
            children: [_Label2 || (_Label2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
              description: "Once label values are selected, only possible label combinations are shown.",
              children: "2. Select labels to search in"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
                onChange: this.onChangeLabelSearch,
                "aria-label": "Filter expression for label",
                value: labelSearchTerm
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: styles.list,
              style: {
                height: 120
              },
              children: nonMetricLabels.map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.BrowserLabel, {
                name: label.name,
                loading: label.loading,
                active: label.selected,
                hidden: label.hidden,
                facets: label.facets,
                onClick: this.onClickLabel,
                searchTerm: labelSearchTerm
              }, label.name))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.section,
            children: [_Label3 || (_Label3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
              description: "Use the search field to find values across selected labels.",
              children: "3. Select (multiple) values for your labels"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
                onChange: this.onChangeValueSearch,
                "aria-label": "Filter expression for label values",
                value: valueSearchTerm
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: styles.valueListArea,
              ref: this.valueListsRef,
              children: selectedLabels.map(label => {
                var _label$values3, _label$values4, _label$values5;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  role: "list",
                  "aria-label": `Values for ${label.name}`,
                  className: styles.valueListWrapper,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: styles.valueTitle,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.BrowserLabel, {
                      name: label.name,
                      loading: label.loading,
                      active: label.selected,
                      hidden: label.hidden //If no facets, we want to show number of all label values
                      ,
                      facets: label.facets || ((_label$values3 = label.values) === null || _label$values3 === void 0 ? void 0 : _label$values3.length),
                      onClick: this.onClickLabel
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_5__.FixedSizeList, {
                    height: Math.min(200, LIST_ITEM_SIZE * (((_label$values4 = label.values) === null || _label$values4 === void 0 ? void 0 : _label$values4.length) || 0)),
                    itemCount: ((_label$values5 = label.values) === null || _label$values5 === void 0 ? void 0 : _label$values5.length) || 0,
                    itemSize: 28,
                    itemKey: i => label.values[i].name,
                    width: 200,
                    className: styles.valueList,
                    children: ({
                      index,
                      style
                    }) => {
                      var _label$values6;

                      const value = (_label$values6 = label.values) === null || _label$values6 === void 0 ? void 0 : _label$values6[index];

                      if (!value) {
                        return null;
                      }

                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        style: style,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.BrowserLabel, {
                          name: label.name,
                          value: value === null || value === void 0 ? void 0 : value.name,
                          active: value === null || value === void 0 ? void 0 : value.selected,
                          onClick: this.onClickValue,
                          searchTerm: valueSearchTerm
                        })
                      });
                    }
                  })]
                }, label.name);
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: styles.section,
        children: [_Label4 || (_Label4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
          children: "4. Resulting selector"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          "aria-label": "selector",
          className: styles.selector,
          children: selector
        }), validationStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: styles.validationStatus,
          children: validationStatus
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            "aria-label": "Use selector for query button",
            disabled: empty,
            onClick: this.onClickRunQuery,
            children: "Use query"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            "aria-label": "Use selector as metrics button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickRunRateQuery,
            children: "Use as rate query"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            "aria-label": "Validate submit button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickValidate,
            children: "Validate selector"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            "aria-label": "Selector clear button",
            variant: "secondary",
            onClick: this.onClickClear,
            children: "Clear"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.status, (status || error) && styles.statusShowing),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: error ? styles.error : '',
              children: error || status
            })
          })]
        })]
      })]
    });
  }

}
const PrometheusMetricsBrowser = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withTheme)(UnthemedPrometheusMetricsBrowser);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryFieldLazy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonacoQueryFieldLazy": () => (/* binding */ MonacoQueryFieldLazy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


const Field = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => __webpack_require__.e(/* import() | prom-query-field */ "prom-query-field").then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryField.tsx")));
const MonacoQueryFieldLazy = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, Object.assign({}, props))
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryFieldWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonacoQueryFieldWrapper": () => (/* binding */ MonacoQueryFieldWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _MonacoQueryFieldLazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryFieldLazy.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["runQueryOnBlur", "onRunQuery", "onChange"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const MonacoQueryFieldWrapper = props => {
  const lastRunValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const {
    runQueryOnBlur,
    onRunQuery,
    onChange
  } = props,
        rest = _objectWithoutPropertiesLoose(props, _excluded);

  const handleRunQuery = value => {
    lastRunValueRef.current = value;
    onChange(value);
    onRunQuery();
  };

  const handleBlur = value => {
    if (runQueryOnBlur) {
      // run handleRunQuery only if the current value is different from the last-time-executed value
      if (value !== lastRunValueRef.current) {
        handleRunQuery(value);
      }
    } else {
      onChange(value);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MonacoQueryFieldLazy__WEBPACK_IMPORTED_MODULE_1__.MonacoQueryFieldLazy, Object.assign({
    onRunQuery: handleRunQuery,
    onBlur: handleBlur
  }, rest));
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/configuration/AzureAuthSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureAuthSettings": () => (/* binding */ AzureAuthSettings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AzureCredentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/AzureCredentials.ts");
/* harmony import */ var _AzureCredentialsConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/AzureCredentialsConfig.ts");
/* harmony import */ var _AzureCredentialsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/AzureCredentialsForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _h2;










const AzureAuthSettings = props => {
  const {
    dataSourceConfig,
    onChange
  } = props;
  const [overrideAudienceAllowed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.prometheusAzureOverrideAudience || !!dataSourceConfig.jsonData.azureEndpointResourceId);
  const [overrideAudienceChecked, setOverrideAudienceChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!dataSourceConfig.jsonData.azureEndpointResourceId);
  const credentials = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_AzureCredentialsConfig__WEBPACK_IMPORTED_MODULE_4__.getCredentials)(dataSourceConfig), [dataSourceConfig]);

  const onCredentialsChange = credentials => {
    onChange((0,_AzureCredentialsConfig__WEBPACK_IMPORTED_MODULE_4__.updateCredentials)(dataSourceConfig, credentials));
  };

  const onOverrideAudienceChange = ev => {
    setOverrideAudienceChecked(ev.currentTarget.checked);

    if (!ev.currentTarget.checked) {
      onChange(Object.assign({}, dataSourceConfig, {
        jsonData: Object.assign({}, dataSourceConfig.jsonData, {
          azureEndpointResourceId: undefined
        })
      }));
    }
  };

  const onResourceIdChange = ev => {
    if (overrideAudienceChecked) {
      onChange(Object.assign({}, dataSourceConfig, {
        jsonData: Object.assign({}, dataSourceConfig.jsonData, {
          azureEndpointResourceId: ev.currentTarget.value
        })
      }));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h6", {
      children: "Azure Authentication"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_AzureCredentialsForm__WEBPACK_IMPORTED_MODULE_5__.AzureCredentialsForm, {
      managedIdentityEnabled: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.azure.managedIdentityEnabled,
      credentials: credentials,
      azureCloudOptions: _AzureCredentials__WEBPACK_IMPORTED_MODULE_3__.KnownAzureClouds,
      onCredentialsChange: onCredentialsChange
    }), overrideAudienceAllowed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [_h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h6", {
        children: "Azure Configuration"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            labelWidth: 26,
            label: "Override AAD audience",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
              value: overrideAudienceChecked,
              onChange: onOverrideAudienceChange
            })
          })
        }), overrideAudienceChecked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            labelWidth: 26,
            label: "Resource ID",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              className: "width-30",
              value: dataSourceConfig.jsonData.azureEndpointResourceId || '',
              onChange: onResourceIdChange
            })
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AzureAuthSettings);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/configuration/AzureCredentials.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureCloud": () => (/* binding */ AzureCloud),
/* harmony export */   "KnownAzureClouds": () => (/* binding */ KnownAzureClouds),
/* harmony export */   "isCredentialsComplete": () => (/* binding */ isCredentialsComplete)
/* harmony export */ });
let AzureCloud;

(function (AzureCloud) {
  AzureCloud["Public"] = "AzureCloud";
  AzureCloud["China"] = "AzureChinaCloud";
  AzureCloud["USGovernment"] = "AzureUSGovernment";
  AzureCloud["Germany"] = "AzureGermanCloud";
  AzureCloud["None"] = "";
})(AzureCloud || (AzureCloud = {}));

const KnownAzureClouds = [{
  value: AzureCloud.Public,
  label: 'Azure'
}, {
  value: AzureCloud.China,
  label: 'Azure China'
}, {
  value: AzureCloud.USGovernment,
  label: 'Azure US Government'
}, {
  value: AzureCloud.Germany,
  label: 'Azure Germany'
}];
function isCredentialsComplete(credentials) {
  switch (credentials.authType) {
    case 'msi':
      return true;

    case 'clientsecret':
      return !!(credentials.azureCloud && credentials.tenantId && credentials.clientId && credentials.clientSecret);
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/configuration/AzureCredentialsConfig.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCredentials": () => (/* binding */ getCredentials),
/* harmony export */   "getDefaultCredentials": () => (/* binding */ getDefaultCredentials),
/* harmony export */   "hasCredentials": () => (/* binding */ hasCredentials),
/* harmony export */   "resetCredentials": () => (/* binding */ resetCredentials),
/* harmony export */   "setDefaultCredentials": () => (/* binding */ setDefaultCredentials),
/* harmony export */   "updateCredentials": () => (/* binding */ updateCredentials)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _AzureCredentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/AzureCredentials.ts");


const concealed = Symbol('Concealed client secret');

function getDefaultAzureCloud() {
  return _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.azure.cloud || _AzureCredentials__WEBPACK_IMPORTED_MODULE_1__.AzureCloud.Public;
}

function getSecret(options) {
  if (options.secureJsonFields.azureClientSecret) {
    // The secret is concealed on server
    return concealed;
  } else {
    var _options$secureJsonDa;

    const secret = (_options$secureJsonDa = options.secureJsonData) === null || _options$secureJsonDa === void 0 ? void 0 : _options$secureJsonDa.azureClientSecret;
    return typeof secret === 'string' && secret.length > 0 ? secret : undefined;
  }
}

function hasCredentials(options) {
  return !!options.jsonData.azureCredentials;
}
function getDefaultCredentials() {
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.azure.managedIdentityEnabled) {
    return {
      authType: 'msi'
    };
  } else {
    return {
      authType: 'clientsecret',
      azureCloud: getDefaultAzureCloud()
    };
  }
}
function getCredentials(options) {
  const credentials = options.jsonData.azureCredentials; // If no credentials saved, then return empty credentials
  // of type based on whether the managed identity enabled

  if (!credentials) {
    return getDefaultCredentials();
  }

  switch (credentials.authType) {
    case 'msi':
      if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.azure.managedIdentityEnabled) {
        return {
          authType: 'msi'
        };
      } else {
        // If authentication type is managed identity but managed identities were disabled in Grafana config,
        // then we should fallback to an empty app registration (client secret) configuration
        return {
          authType: 'clientsecret',
          azureCloud: getDefaultAzureCloud()
        };
      }

    case 'clientsecret':
      return {
        authType: 'clientsecret',
        azureCloud: credentials.azureCloud || getDefaultAzureCloud(),
        tenantId: credentials.tenantId,
        clientId: credentials.clientId,
        clientSecret: getSecret(options)
      };
  }
}
function updateCredentials(options, credentials) {
  switch (credentials.authType) {
    case 'msi':
      if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.azure.managedIdentityEnabled) {
        throw new Error('Managed Identity authentication is not enabled in Grafana config.');
      }

      options = Object.assign({}, options, {
        jsonData: Object.assign({}, options.jsonData, {
          azureCredentials: {
            authType: 'msi'
          }
        })
      });
      return options;

    case 'clientsecret':
      options = Object.assign({}, options, {
        jsonData: Object.assign({}, options.jsonData, {
          azureCredentials: {
            authType: 'clientsecret',
            azureCloud: credentials.azureCloud || getDefaultAzureCloud(),
            tenantId: credentials.tenantId,
            clientId: credentials.clientId
          }
        }),
        secureJsonData: Object.assign({}, options.secureJsonData, {
          azureClientSecret: typeof credentials.clientSecret === 'string' && credentials.clientSecret.length > 0 ? credentials.clientSecret : undefined
        }),
        secureJsonFields: Object.assign({}, options.secureJsonFields, {
          azureClientSecret: typeof credentials.clientSecret === 'symbol'
        })
      });
      return options;
  }
}
function setDefaultCredentials(options) {
  return {
    jsonData: Object.assign({}, options.jsonData, {
      azureCredentials: getDefaultCredentials()
    })
  };
}
function resetCredentials(options) {
  return {
    jsonData: Object.assign({}, options.jsonData, {
      azureAuth: undefined,
      azureCredentials: undefined,
      azureEndpointResourceId: undefined
    })
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/configuration/AzureCredentialsForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureCredentialsForm": () => (/* binding */ AzureCredentialsForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/index.ts");
/* harmony import */ var _grafana_ui_src_components_Forms_Legacy_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Legacy/Input/Input.tsx");
/* harmony import */ var _grafana_ui_src_components_Forms_Legacy_Select_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Legacy/Select/Select.tsx");
/* harmony import */ var _AzureCredentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/AzureCredentials.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _InlineFormLabel2, _InlineFormLabel3, _InlineFormLabel4, _div, _InlineFormLabel5, _InlineFormLabel6;









const authTypeOptions = [{
  value: 'msi',
  label: 'Managed Identity'
}, {
  value: 'clientsecret',
  label: 'App Registration'
}];
const AzureCredentialsForm = props => {
  const {
    credentials,
    azureCloudOptions,
    onCredentialsChange,
    getSubscriptions
  } = props;
  const hasRequiredFields = (0,_AzureCredentials__WEBPACK_IMPORTED_MODULE_4__.isCredentialsComplete)(credentials);
  const [subscriptions, setSubscriptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loadSubscriptionsClicked, onLoadSubscriptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(val => val + 1, 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!getSubscriptions || !hasRequiredFields) {
      updateSubscriptions([]);
      return;
    }

    let canceled = false;
    getSubscriptions().then(result => {
      if (!canceled) {
        updateSubscriptions(result, loadSubscriptionsClicked);
      }
    });
    return () => {
      canceled = true;
    }; // This effect is intended to be called only once initially and on Load Subscriptions click
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadSubscriptionsClicked]);

  const updateSubscriptions = (received, autoSelect = false) => {
    setSubscriptions(received);

    if (getSubscriptions) {
      if (autoSelect && !credentials.defaultSubscriptionId && received.length > 0) {
        // Selecting the default subscription if subscriptions received but no default subscription selected
        onSubscriptionChange(received[0]);
      } else if (credentials.defaultSubscriptionId) {
        const found = received.find(opt => opt.value === credentials.defaultSubscriptionId);

        if (!found) {
          // Unselecting the default subscription if it isn't found among the received subscriptions
          onSubscriptionChange(undefined);
        }
      }
    }
  };

  const onAuthTypeChange = selected => {
    if (onCredentialsChange) {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        authType: selected.value || 'msi',
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onAzureCloudChange = selected => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        azureCloud: selected.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onTenantIdChange = event => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        tenantId: event.target.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onClientIdChange = event => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        clientId: event.target.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onClientSecretChange = event => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        clientSecret: event.target.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onClientSecretReset = () => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        clientSecret: '',
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onSubscriptionChange = selected => {
    if (onCredentialsChange) {
      const updated = Object.assign({}, credentials, {
        defaultSubscriptionId: selected === null || selected === void 0 ? void 0 : selected.value
      });
      onCredentialsChange(updated);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "gf-form-group",
    children: [props.managedIdentityEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
          className: "width-12",
          tooltip: "Choose the type of authentication to Azure services",
          children: "Authentication"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components_Forms_Legacy_Select_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
          className: "width-15",
          value: authTypeOptions.find(opt => opt.value === credentials.authType),
          options: authTypeOptions,
          onChange: onAuthTypeChange
        })]
      })
    }), credentials.authType === 'clientsecret' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [azureCloudOptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
            className: "width-12",
            tooltip: "Choose an Azure Cloud",
            children: "Azure Cloud"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components_Forms_Legacy_Select_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
            className: "width-15",
            value: azureCloudOptions.find(opt => opt.value === credentials.azureCloud),
            options: azureCloudOptions,
            onChange: onAzureCloudChange
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
            className: "width-12",
            children: "Directory (tenant) ID"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-15",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components_Forms_Legacy_Input_Input__WEBPACK_IMPORTED_MODULE_2__.Input, {
              className: "width-30",
              placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
              value: credentials.tenantId || '',
              onChange: onTenantIdChange
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel4 || (_InlineFormLabel4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
            className: "width-12",
            children: "Application (client) ID"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-15",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components_Forms_Legacy_Input_Input__WEBPACK_IMPORTED_MODULE_2__.Input, {
              className: "width-30",
              placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
              value: credentials.clientId || '',
              onChange: onClientIdChange
            })
          })]
        })
      }), typeof credentials.clientSecret === 'symbol' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form-inline",
        children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
            className: "width-12",
            children: "Client Secret"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components_Forms_Legacy_Input_Input__WEBPACK_IMPORTED_MODULE_2__.Input, {
            className: "width-25",
            placeholder: "configured",
            disabled: true
          })]
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "max-width-30 gf-form-inline",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              type: "button",
              onClick: onClientSecretReset,
              children: "reset"
            })
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel5 || (_InlineFormLabel5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
            className: "width-12",
            children: "Client Secret"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-15",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components_Forms_Legacy_Input_Input__WEBPACK_IMPORTED_MODULE_2__.Input, {
              className: "width-30",
              placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
              value: credentials.clientSecret || '',
              onChange: onClientSecretChange
            })
          })]
        })
      })]
    }), getSubscriptions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel6 || (_InlineFormLabel6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
            className: "width-12",
            children: "Default Subscription"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-25",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components_Forms_Legacy_Select_Select__WEBPACK_IMPORTED_MODULE_3__.Select, {
              value: credentials.defaultSubscriptionId ? subscriptions.find(opt => opt.value === credentials.defaultSubscriptionId) : undefined,
              options: subscriptions,
              onChange: onSubscriptionChange
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "max-width-30 gf-form-inline",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui_src_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              type: "button",
              onClick: onLoadSubscriptions,
              disabled: !hasRequiredFields,
              children: "Load Subscriptions"
            })
          })
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AzureCredentialsForm);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/configuration/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@grafana-aws-sdk-npm-0.0.36-8ab4b07904-c243f7c900.zip/node_modules/@grafana/aws-sdk/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _AzureAuthSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/AzureAuthSettings.tsx");
/* harmony import */ var _AzureCredentialsConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/AzureCredentialsConfig.ts");
/* harmony import */ var _PromSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/PromSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;












const ConfigEditor = props => {
  const {
    options,
    onOptionsChange
  } = props;
  const alertmanagers = (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.getAllAlertmanagerDataSources)();
  const azureAuthSettings = {
    azureAuthSupported: !!app_core_config__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.prometheus_azure_auth,
    getAzureAuthEnabled: config => (0,_AzureCredentialsConfig__WEBPACK_IMPORTED_MODULE_6__.hasCredentials)(config),
    setAzureAuthEnabled: (config, enabled) => enabled ? (0,_AzureCredentialsConfig__WEBPACK_IMPORTED_MODULE_6__.setDefaultCredentials)(config) : (0,_AzureCredentialsConfig__WEBPACK_IMPORTED_MODULE_6__.resetCredentials)(config),
    azureSettingsUI: _AzureAuthSettings__WEBPACK_IMPORTED_MODULE_5__.AzureAuthSettings
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [options.access === 'direct' && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      title: "Deprecation Notice",
      severity: "warning",
      children: "Browser access mode in the Prometheus datasource is deprecated and will be removed in a future release."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DataSourceHttpSettings, {
      defaultUrl: "http://localhost:9090",
      dataSourceConfig: options,
      showAccessOptions: true,
      onChange: onOptionsChange,
      sigV4AuthToggleEnabled: app_core_config__WEBPACK_IMPORTED_MODULE_3__.config.sigV4AuthEnabled,
      azureAuthSettings: azureAuthSettings,
      renderSigV4Editor: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_1__.SIGV4ConnectionConfig, Object.assign({}, props))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AlertingSettings, {
      alertmanagerDataSources: alertmanagers,
      options: options,
      onOptionsChange: onOptionsChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PromSettings__WEBPACK_IMPORTED_MODULE_7__.PromSettings, {
      options: options,
      onOptionsChange: onOptionsChange
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/configuration/ExemplarSetting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExemplarSetting)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








function ExemplarSetting({
  value,
  onChange,
  onDelete
}) {
  const [isInternalLink, setIsInternalLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Boolean(value.datasourceUid));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "gf-form-group",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
      label: "Internal link",
      labelWidth: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch, {
          value: isInternalLink,
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.DataSource.Prometheus.configPage.internalLinkSwitch,
          onChange: ev => setIsInternalLink(ev.currentTarget.checked)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "destructive",
          title: "Remove link",
          icon: "times",
          onClick: event => {
            event.preventDefault();
            onDelete();
          },
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              margin-left: 8px;
            `
        })]
      })
    }), isInternalLink ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
      label: "Data source",
      labelWidth: 24,
      tooltip: "The data source the exemplar is going to navigate to.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.DataSourcePicker, {
        tracing: true,
        current: value.datasourceUid,
        noDefault: true,
        width: 40,
        onChange: ds => onChange(Object.assign({}, value, {
          datasourceUid: ds.uid,
          url: undefined
        }))
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
      label: "URL",
      labelWidth: 24,
      tooltip: "The URL of the trace backend the user would go to see its trace.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
        placeholder: "https://example.com/${__value.raw}",
        spellCheck: false,
        width: 40,
        value: value.url,
        onChange: event => onChange(Object.assign({}, value, {
          datasourceUid: undefined,
          url: event.currentTarget.value
        }))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
      label: "URL Label",
      labelWidth: 24,
      tooltip: "Use to override the button label on the exemplar traceID field.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
        placeholder: "Go to example.com",
        spellCheck: false,
        width: 40,
        value: value.urlDisplayLabel,
        onChange: event => onChange(Object.assign({}, value, {
          urlDisplayLabel: event.currentTarget.value
        }))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
      label: "Label name",
      labelWidth: 24,
      tooltip: "The name of the field in the labels object that should be used to get the traceID.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
        placeholder: "traceID",
        spellCheck: false,
        width: 40,
        value: value.name,
        onChange: event => onChange(Object.assign({}, value, {
          name: event.currentTarget.value
        }))
      })
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/configuration/ExemplarsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExemplarsSettings": () => (/* binding */ ExemplarsSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _ExemplarSetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/ExemplarSetting.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;









function ExemplarsSettings({
  options,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "page-heading",
      children: "Exemplars"
    })), options && options.map((option, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ExemplarSetting__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: option,
        onChange: newField => {
          const newOptions = [...options];
          newOptions.splice(index, 1, newField);
          onChange(newOptions);
        },
        onDelete: () => {
          const newOptions = [...options];
          newOptions.splice(index, 1);
          onChange(newOptions);
        }
      }, index);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.DataSource.Prometheus.configPage.exemplarsAddButton,
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
          margin-bottom: 10px;
        `,
      icon: "plus",
      onClick: event => {
        event.preventDefault();
        const newOptions = [...(options || []), {
          name: 'traceID'
        }];
        onChange(newOptions);
      },
      children: "Add"
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/configuration/PromSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromSettings": () => (/* binding */ PromSettings),
/* harmony export */   "getValueFromEventItem": () => (/* binding */ getValueFromEventItem),
/* harmony export */   "promSettingsValidationEvents": () => (/* binding */ promSettingsValidationEvents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _ExemplarsSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/ExemplarsSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _h;








const {
  Select,
  Input,
  FormField
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;
const httpOptions = [{
  value: 'POST',
  label: 'POST'
}, {
  value: 'GET',
  label: 'GET'
}];
const PromSettings = props => {
  var _options$jsonData$dis;

  const {
    options,
    onOptionsChange
  } = props; // We are explicitly adding httpMethod so it is correctly displayed in dropdown. This way, it is more predictable for users.

  if (!options.jsonData.httpMethod) {
    options.jsonData.httpMethod = 'POST';
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "gf-form-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FormField, {
            label: "Scrape interval",
            labelWidth: 13,
            inputEl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Input, {
              className: "width-6",
              value: options.jsonData.timeInterval,
              spellCheck: false,
              placeholder: "15s",
              onChange: onChangeHandler('timeInterval', options, onOptionsChange),
              validationEvents: promSettingsValidationEvents
            }),
            tooltip: "Set this to the typical scrape and evaluation interval configured in Prometheus. Defaults to 15s."
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FormField, {
            label: "Query timeout",
            labelWidth: 13,
            inputEl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Input, {
              className: "width-6",
              value: options.jsonData.queryTimeout,
              onChange: onChangeHandler('queryTimeout', options, onOptionsChange),
              spellCheck: false,
              placeholder: "60s",
              validationEvents: promSettingsValidationEvents
            }),
            tooltip: "Set the Prometheus query timeout."
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
          width: 13,
          tooltip: "You can use either POST or GET HTTP method to query your Prometheus data source. POST is the recommended method as it allows bigger queries. Change this to GET if you have a Prometheus version older than 2.1 or if POST requests are restricted in your network.",
          children: "HTTP Method"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Select, {
          "aria-label": "Select HTTP method",
          options: httpOptions,
          value: httpOptions.find(o => o.value === options.jsonData.httpMethod),
          onChange: onChangeHandler('httpMethod', options, onOptionsChange),
          width: 7
        })]
      })]
    }), _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      className: "page-heading",
      children: "Misc"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "gf-form-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "gf-form",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
          labelWidth: 28,
          label: "Disable metrics lookup",
          tooltip: "Checking this option will disable the metrics chooser and metric/label support in the query field's autocomplete. This helps if you have performance issues with bigger Prometheus instances.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
            value: (_options$jsonData$dis = options.jsonData.disableMetricsLookup) !== null && _options$jsonData$dis !== void 0 ? _options$jsonData$dis : false,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOptionChecked)(props, 'disableMetricsLookup')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "gf-form max-width-30",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(FormField, {
            label: "Custom query parameters",
            labelWidth: 14,
            tooltip: "Add Custom parameters to all Prometheus or Thanos queries.",
            inputEl: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Input, {
              className: "width-25",
              value: options.jsonData.customQueryParameters,
              onChange: onChangeHandler('customQueryParameters', options, onOptionsChange),
              spellCheck: false,
              placeholder: "Example: max_source_resolution=5m&timeout=10"
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ExemplarsSettings__WEBPACK_IMPORTED_MODULE_3__.ExemplarsSettings, {
      options: options.jsonData.exemplarTraceIdDestinations,
      onChange: exemplarOptions => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginJsonDataOption)({
        onOptionsChange,
        options
      }, 'exemplarTraceIdDestinations', exemplarOptions)
    })]
  });
};
const promSettingsValidationEvents = {
  [_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.EventsWithValidation.onBlur]: [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.regexValidation)(/^$|^\d+(ms|[Mwdhmsy])$/, 'Value is not valid, you can use number with time unit specifier: y, M, w, d, h, m, s')]
};
const getValueFromEventItem = eventItem => {
  if (!eventItem) {
    return '';
  }

  if (eventItem.hasOwnProperty('currentTarget')) {
    return eventItem.currentTarget.value;
  }

  return eventItem.value;
};

const onChangeHandler = (key, options, onOptionsChange) => eventItem => {
  onOptionsChange(Object.assign({}, options, {
    jsonData: Object.assign({}, options.jsonData, {
      [key]: getValueFromEventItem(eventItem)
    })
  }));
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/datasource.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrometheusDatasource": () => (/* binding */ PrometheusDatasource),
/* harmony export */   "alignRange": () => (/* binding */ alignRange),
/* harmony export */   "extractRuleMappingFromGroups": () => (/* binding */ extractRuleMappingFromGroups),
/* harmony export */   "prometheusRegularEscape": () => (/* binding */ prometheusRegularEscape),
/* harmony export */   "prometheusSpecialRegexEscape": () => (/* binding */ prometheusSpecialRegexEscape)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lru-cache-npm-7.10.1-5af910d0ed-e8b190d71e.zip/node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_utils_explore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/utils/explore.ts");
/* harmony import */ var app_features_alerting_unified_api_buildInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/api/buildInfo.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _add_label_to_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/prometheus/add_label_to_query.ts");
/* harmony import */ var _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/AnnotationQueryEditor.tsx");
/* harmony import */ var _language_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_provider.ts");
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
/* harmony import */ var _legend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/prometheus/legend.ts");
/* harmony import */ var _metric_find_query__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/prometheus/metric_find_query.ts");
/* harmony import */ var _query_hints__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/prometheus/query_hints.ts");
/* harmony import */ var _result_transformer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/prometheus/result_transformer.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/datasource/prometheus/types.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/datasource/prometheus/variables.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge, _Badge2, _Tooltip, _div, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























const ANNOTATION_QUERY_STEP_DEFAULT = '60s';
const GET_AND_POST_METADATA_ENDPOINTS = ['api/v1/query', 'api/v1/query_range', 'api/v1/series', 'api/v1/labels'];
class PrometheusDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_9__.getTemplateSrv)(), timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_8__.getTimeSrv)(), languageProvider) {
    var _instanceSettings$jso, _instanceSettings$jso2;

    super(instanceSettings);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "editorSrc", void 0);

    _defineProperty(this, "ruleMappings", void 0);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "directUrl", void 0);

    _defineProperty(this, "access", void 0);

    _defineProperty(this, "basicAuth", void 0);

    _defineProperty(this, "withCredentials", void 0);

    _defineProperty(this, "metricsNameCache", new (lru_cache__WEBPACK_IMPORTED_MODULE_1___default())({
      max: 10
    }));

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "queryTimeout", void 0);

    _defineProperty(this, "httpMethod", void 0);

    _defineProperty(this, "languageProvider", void 0);

    _defineProperty(this, "exemplarTraceIdDestinations", void 0);

    _defineProperty(this, "lookupsDisabled", void 0);

    _defineProperty(this, "customQueryParameters", void 0);

    _defineProperty(this, "exemplarsAvailable", void 0);

    _defineProperty(this, "subType", void 0);

    _defineProperty(this, "rulerEnabled", void 0);

    _defineProperty(this, "init", async () => {
      this.loadRules();
      this.exemplarsAvailable = await this.areExemplarsAvailable();
    });

    _defineProperty(this, "prepareTargets", (options, start, end) => {
      const queries = [];
      const activeTargets = [];
      const clonedTargets = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(options.targets);

      for (const target of clonedTargets) {
        if (!target.expr || target.hide) {
          continue;
        }

        target.requestId = options.panelId + target.refId;
        const metricName = this.languageProvider.histogramMetrics.find(m => target.expr.includes(m)); // In Explore, we run both (instant and range) queries if both are true (selected) or both are undefined (legacy Explore queries)

        if (options.app === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.Explore && target.range === target.instant) {
          // Create instant target
          const instantTarget = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(target);
          instantTarget.format = 'table';
          instantTarget.instant = true;
          instantTarget.range = false;
          instantTarget.valueWithRefId = true;
          delete instantTarget.maxDataPoints;
          instantTarget.requestId += '_instant'; // Create range target

          const rangeTarget = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(target);
          rangeTarget.format = 'time_series';
          rangeTarget.instant = false;
          instantTarget.range = true; // Create exemplar query

          if (target.exemplar) {
            // Only create exemplar target for different metric names
            if (!metricName || metricName && !activeTargets.some(activeTarget => activeTarget.expr.includes(metricName))) {
              const exemplarTarget = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(target);
              exemplarTarget.instant = false;
              exemplarTarget.requestId += '_exemplar';
              queries.push(this.createQuery(exemplarTarget, options, start, end));
              activeTargets.push(exemplarTarget);
            }

            instantTarget.exemplar = false;
            rangeTarget.exemplar = false;
          } // Add both targets to activeTargets and queries arrays


          activeTargets.push(instantTarget, rangeTarget);
          queries.push(this.createQuery(instantTarget, options, start, end), this.createQuery(rangeTarget, options, start, end)); // If running only instant query in Explore, format as table
        } else if (target.instant && options.app === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.Explore) {
          const instantTarget = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(target);
          instantTarget.format = 'table';
          queries.push(this.createQuery(instantTarget, options, start, end));
          activeTargets.push(instantTarget);
        } else {
          // It doesn't make sense to query for exemplars in dashboard if only instant is selected
          if (target.exemplar && !target.instant) {
            if (!metricName || metricName && !activeTargets.some(activeTarget => activeTarget.expr.includes(metricName))) {
              const exemplarTarget = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(target);
              exemplarTarget.requestId += '_exemplar';
              queries.push(this.createQuery(exemplarTarget, options, start, end));
              activeTargets.push(exemplarTarget);
            }

            target.exemplar = false;
          }

          queries.push(this.createQuery(target, options, start, end));
          activeTargets.push(target);
        }
      }

      return {
        queries,
        activeTargets
      };
    });

    _defineProperty(this, "handleErrors", (err, target) => {
      const error = {
        message: err && err.statusText || 'Unknown error during query transaction. Please check JS console logs.',
        refId: target.refId
      };

      if (err.data) {
        if (typeof err.data === 'string') {
          error.message = err.data;
        } else if (err.data.error) {
          error.message = (0,app_core_utils_explore__WEBPACK_IMPORTED_MODULE_6__.safeStringifyValue)(err.data.error);
        }
      } else if (err.message) {
        error.message = err.message;
      } else if (typeof err === 'string') {
        error.message = err;
      }

      error.status = err.status;
      error.statusText = err.statusText;
      return error;
    });

    _defineProperty(this, "processAnnotationResponse", (options, data) => {
      const frames = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.toDataQueryResponse)({
        data: data
      }).data;

      if (!frames || !frames.length) {
        return [];
      }

      const annotation = options.annotation;
      const {
        tagKeys = '',
        titleFormat = '',
        textFormat = ''
      } = annotation;
      const step = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.rangeUtil.intervalToSeconds(annotation.step || ANNOTATION_QUERY_STEP_DEFAULT) * 1000;
      const tagKeysArray = tagKeys.split(',');
      const eventList = [];

      for (const frame of frames) {
        const timeField = frame.fields[0];
        const valueField = frame.fields[1];
        const labels = (valueField === null || valueField === void 0 ? void 0 : valueField.labels) || {};
        const tags = Object.keys(labels).filter(label => tagKeysArray.includes(label)).map(label => labels[label]);
        const timeValueTuple = [];
        let idx = 0;
        valueField.values.toArray().forEach(value => {
          let timeStampValue;
          let valueValue;
          const time = timeField.values.get(idx); // If we want to use value as a time, we use value as timeStampValue and valueValue will be 1

          if (options.annotation.useValueForTime) {
            timeStampValue = Math.floor(parseFloat(value));
            valueValue = 1;
          } else {
            timeStampValue = Math.floor(parseFloat(time));
            valueValue = parseFloat(value);
          }

          idx++;
          timeValueTuple.push([timeStampValue, valueValue]);
        });
        const activeValues = timeValueTuple.filter(value => value[1] >= 1);
        const activeValuesTimestamps = activeValues.map(value => value[0]); // Instead of creating singular annotation for each active event we group events into region if they are less
        // or equal to `step` apart.

        let latestEvent = null;

        for (const timestamp of activeValuesTimestamps) {
          var _latestEvent$timeEnd;

          // We already have event `open` and we have new event that is inside the `step` so we just update the end.
          if (latestEvent && ((_latestEvent$timeEnd = latestEvent.timeEnd) !== null && _latestEvent$timeEnd !== void 0 ? _latestEvent$timeEnd : 0) + step >= timestamp) {
            latestEvent.timeEnd = timestamp;
            continue;
          } // Event exists but new one is outside of the `step` so we add it to eventList.


          if (latestEvent) {
            eventList.push(latestEvent);
          } // We start a new region.


          latestEvent = {
            time: timestamp,
            timeEnd: timestamp,
            annotation,
            title: (0,_legend__WEBPACK_IMPORTED_MODULE_15__.renderLegendFormat)(titleFormat, labels),
            tags,
            text: (0,_legend__WEBPACK_IMPORTED_MODULE_15__.renderLegendFormat)(textFormat, labels)
          };
        }

        if (latestEvent) {
          // Finish up last point if we have one
          latestEvent.timeEnd = activeValuesTimestamps[activeValuesTimestamps.length - 1];
          eventList.push(latestEvent);
        }
      }

      return eventList;
    });

    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.type = 'prometheus';
    this.subType = app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Prometheus;
    this.rulerEnabled = false;
    this.editorSrc = 'app/features/prometheus/partials/query.editor.html';
    this.id = instanceSettings.id;
    this.url = instanceSettings.url;
    this.access = instanceSettings.access;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.interval = instanceSettings.jsonData.timeInterval || '15s';
    this.queryTimeout = instanceSettings.jsonData.queryTimeout;
    this.httpMethod = instanceSettings.jsonData.httpMethod || 'GET'; // `directUrl` is never undefined, we set it at https://github.com/grafana/grafana/blob/main/pkg/api/frontendsettings.go#L108
    // here we "fall back" to this.url to make typescript happy, but it should never happen

    this.directUrl = (_instanceSettings$jso = instanceSettings.jsonData.directUrl) !== null && _instanceSettings$jso !== void 0 ? _instanceSettings$jso : this.url;
    this.exemplarTraceIdDestinations = instanceSettings.jsonData.exemplarTraceIdDestinations;
    this.ruleMappings = {};
    this.languageProvider = languageProvider !== null && languageProvider !== void 0 ? languageProvider : new _language_provider__WEBPACK_IMPORTED_MODULE_13__["default"](this);
    this.lookupsDisabled = (_instanceSettings$jso2 = instanceSettings.jsonData.disableMetricsLookup) !== null && _instanceSettings$jso2 !== void 0 ? _instanceSettings$jso2 : false;
    this.customQueryParameters = new URLSearchParams(instanceSettings.jsonData.customQueryParameters);
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_20__.PrometheusVariableSupport(this, this.templateSrv, this.timeSrv);
    this.exemplarsAvailable = true; // This needs to be here and cannot be static because of how annotations typing affects casting of data source
    // objects to DataSourceApi types.
    // We don't use the default processing for prometheus.
    // See standardAnnotationSupport.ts/[shouldUseMappingUI|shouldUseLegacyRunner]

    this.annotations = {
      QueryEditor: _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_12__.AnnotationQueryEditor
    };
  }

  getQueryDisplayText(query) {
    return query.expr;
  }

  _addTracingHeaders(httpOptions, options) {
    httpOptions.headers = {};
    const proxyMode = !this.url.match(/^http/);

    if (proxyMode) {
      httpOptions.headers['X-Dashboard-Id'] = options.dashboardId;
      httpOptions.headers['X-Panel-Id'] = options.panelId;
    }
  }
  /**
   * Any request done from this data source should go through here as it contains some common processing for the
   * request. Any processing done here needs to be also copied on the backend as this goes through data source proxy
   * but not through the same code as alerting.
   */


  _request(url, data, overrides = {}) {
    data = data || {};

    for (const [key, value] of this.customQueryParameters) {
      if (data[key] == null) {
        data[key] = value;
      }
    }

    let queryUrl = this.url + url;

    if (url.startsWith(`/api/datasources/${this.id}`)) {
      // This url is meant to be a replacement for the whole URL. Replace the entire URL
      queryUrl = url;
    }

    const options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaults)(overrides, {
      url: queryUrl,
      method: this.httpMethod,
      headers: {}
    });

    if (options.method === 'GET') {
      if (data && Object.keys(data).length) {
        options.url = options.url + (options.url.search(/\?/) >= 0 ? '&' : '?') + Object.entries(data).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
      }
    } else {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      options.data = data;
    }

    if (this.basicAuth || this.withCredentials) {
      options.withCredentials = true;
    }

    if (this.basicAuth) {
      options.headers.Authorization = this.basicAuth;
    }

    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().fetch(options);
  }

  async importFromAbstractQueries(abstractQueries) {
    return abstractQueries.map(abstractQuery => this.languageProvider.importFromAbstractQuery(abstractQuery));
  }

  async exportToAbstractQueries(queries) {
    return queries.map(query => this.languageProvider.exportToAbstractQuery(query));
  } // Use this for tab completion features, wont publish response to other components


  async metadataRequest(url, params = {}) {
    // If URL includes endpoint that supports POST and GET method, try to use configured method. This might fail as POST is supported only in v2.10+.
    if (GET_AND_POST_METADATA_ENDPOINTS.some(endpoint => url.includes(endpoint))) {
      try {
        return await (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.lastValueFrom)(this._request(`/api/datasources/${this.id}/resources${url}`, params, {
          method: this.httpMethod,
          hideFromInspector: true,
          showErrorAlert: false
        }));
      } catch (err) {
        // If status code of error is Method Not Allowed (405) and HTTP method is POST, retry with GET
        if (this.httpMethod === 'POST' && (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.isFetchError)(err) && (err.status === 405 || err.status === 400)) {
          console.warn(`Couldn't use configured POST HTTP method for this request. Trying to use GET method instead.`);
        } else {
          throw err;
        }
      }
    }

    return await (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.lastValueFrom)(this._request(`/api/datasources/${this.id}/resources${url}`, params, {
      method: 'GET',
      hideFromInspector: true
    })); // toPromise until we change getTagValues, getTagKeys to Observable
  }

  interpolateQueryExpr(value = [], variable) {
    // if no multi or include all do not regexEscape
    if (!variable.multi && !variable.includeAll) {
      return prometheusRegularEscape(value);
    }

    if (typeof value === 'string') {
      return prometheusSpecialRegexEscape(value);
    }

    const escapedValues = value.map(val => prometheusSpecialRegexEscape(val));

    if (escapedValues.length === 1) {
      return escapedValues[0];
    }

    return '(' + escapedValues.join('|') + ')';
  }

  targetContainsTemplate(target) {
    return this.templateSrv.containsTemplate(target.expr);
  }

  shouldRunExemplarQuery(target, request) {
    if (target.exemplar) {
      // We check all already processed targets and only create exemplar target for not used metric names
      const metricName = this.languageProvider.histogramMetrics.find(m => target.expr.includes(m)); // Remove targets that weren't processed yet (in targets array they are after current target)

      const currentTargetIdx = request.targets.findIndex(t => t.refId === target.refId);
      const targets = request.targets.slice(0, currentTargetIdx).filter(t => !t.hide);

      if (!metricName || metricName && !targets.some(t => t.expr.includes(metricName))) {
        return true;
      }

      return false;
    }

    return false;
  }

  processTargetV2(target, request) {
    const processedTarget = Object.assign({}, target, {
      queryType: _types__WEBPACK_IMPORTED_MODULE_19__.PromQueryType.timeSeriesQuery,
      exemplar: this.shouldRunExemplarQuery(target, request),
      requestId: request.panelId + target.refId,
      // We need to pass utcOffsetSec to backend to calculate aligned range
      utcOffsetSec: this.timeSrv.timeRange().to.utcOffset() * 60
    });
    return processedTarget;
  }

  query(request) {
    if (this.access === 'proxy') {
      const targets = request.targets.map(target => this.processTargetV2(target, request));
      return super.query(Object.assign({}, request, {
        targets
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(response => (0,_result_transformer__WEBPACK_IMPORTED_MODULE_18__.transformV2)(response, request, {
        exemplarTraceIdDestinations: this.exemplarTraceIdDestinations
      }))); // Run queries trough browser/proxy
    } else {
      const start = this.getPrometheusTime(request.range.from, false);
      const end = this.getPrometheusTime(request.range.to, true);
      const {
        queries,
        activeTargets
      } = this.prepareTargets(request, start, end); // No valid targets, return the empty result to save a round trip.

      if (!queries || !queries.length) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)({
          data: [],
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done
        });
      }

      if (request.app === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.Explore) {
        return this.exploreQuery(queries, activeTargets, end);
      }

      return this.panelsQuery(queries, activeTargets, end, request.requestId, request.scopedVars);
    }
  }

  exploreQuery(queries, activeTargets, end) {
    let runningQueriesCount = queries.length;
    const subQueries = queries.map((query, index) => {
      const target = activeTargets[index];
      const filterAndMapResponse = (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.pipe)( // Decrease the counter here. We assume that each request returns only single value and then completes
      // (should hold until there is some streaming requests involved).
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(() => runningQueriesCount--), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.filter)(response => response.cancelled ? false : true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(response => {
        const data = (0,_result_transformer__WEBPACK_IMPORTED_MODULE_18__.transform)(response, {
          query,
          target,
          responseListLength: queries.length,
          exemplarTraceIdDestinations: this.exemplarTraceIdDestinations
        });
        return {
          data,
          key: query.requestId,
          state: runningQueriesCount === 0 ? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done : _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading
        };
      }));
      return this.runQuery(query, end, filterAndMapResponse);
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.merge)(...subQueries);
  }

  panelsQuery(queries, activeTargets, end, requestId, scopedVars) {
    const observables = queries.map((query, index) => {
      const target = activeTargets[index];
      const filterAndMapResponse = (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.filter)(response => response.cancelled ? false : true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(response => {
        const data = (0,_result_transformer__WEBPACK_IMPORTED_MODULE_18__.transform)(response, {
          query,
          target,
          responseListLength: queries.length,
          scopedVars,
          exemplarTraceIdDestinations: this.exemplarTraceIdDestinations
        });
        return data;
      }));
      return this.runQuery(query, end, filterAndMapResponse);
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.forkJoin)(observables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(results => {
      const data = results.reduce((result, current) => {
        return [...result, ...current];
      }, []);
      return {
        data,
        key: requestId,
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done
      };
    }));
  }

  runQuery(query, end, filter) {
    if (query.instant) {
      return this.performInstantQuery(query, end).pipe(filter);
    }

    if (query.exemplar) {
      return this.getExemplars(query).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)({
          data: [],
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done
        });
      }), filter);
    }

    return this.performTimeSeriesQuery(query, query.start, query.end).pipe(filter);
  }

  createQuery(target, options, start, end) {
    const query = {
      hinting: target.hinting,
      instant: target.instant,
      exemplar: target.exemplar,
      step: 0,
      expr: '',
      requestId: target.requestId,
      refId: target.refId,
      start: 0,
      end: 0
    };
    const range = Math.ceil(end - start); // options.interval is the dynamically calculated interval

    let interval = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.rangeUtil.intervalToSeconds(options.interval); // Minimum interval ("Min step"), if specified for the query, or same as interval otherwise.

    const minInterval = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.rangeUtil.intervalToSeconds(this.templateSrv.replace(target.interval || options.interval, options.scopedVars)); // Scrape interval as specified for the query ("Min step") or otherwise taken from the datasource.
    // Min step field can have template variables in it, make sure to replace it.

    const scrapeInterval = target.interval ? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.rangeUtil.intervalToSeconds(this.templateSrv.replace(target.interval, options.scopedVars)) : _grafana_data__WEBPACK_IMPORTED_MODULE_3__.rangeUtil.intervalToSeconds(this.interval);
    const intervalFactor = target.intervalFactor || 1; // Adjust the interval to take into account any specified minimum and interval factor plus Prometheus limits

    const adjustedInterval = this.adjustInterval(interval, minInterval, range, intervalFactor);
    let scopedVars = Object.assign({}, options.scopedVars, this.getRangeScopedVars(options.range), this.getRateIntervalScopedVariable(adjustedInterval, scrapeInterval)); // If the interval was adjusted, make a shallow copy of scopedVars with updated interval vars

    if (interval !== adjustedInterval) {
      interval = adjustedInterval;
      scopedVars = Object.assign({}, options.scopedVars, Object.assign({
        __interval: {
          text: interval + 's',
          value: interval + 's'
        },
        __interval_ms: {
          text: interval * 1000,
          value: interval * 1000
        }
      }, this.getRateIntervalScopedVariable(interval, scrapeInterval), this.getRangeScopedVars(options.range)));
    }

    query.step = interval;
    let expr = target.expr; // Apply adhoc filters

    expr = this.enhanceExprWithAdHocFilters(expr); // Only replace vars in expression after having (possibly) updated interval vars

    query.expr = this.templateSrv.replace(expr, scopedVars, this.interpolateQueryExpr); // Align query interval with step to allow query caching and to ensure
    // that about-same-time query results look the same.

    const adjusted = alignRange(start, end, query.step, this.timeSrv.timeRange().to.utcOffset() * 60);
    query.start = adjusted.start;
    query.end = adjusted.end;

    this._addTracingHeaders(query, options);

    return query;
  }

  getRateIntervalScopedVariable(interval, scrapeInterval) {
    // Fall back to the default scrape interval of 15s if scrapeInterval is 0 for some reason.
    if (scrapeInterval === 0) {
      scrapeInterval = 15;
    }

    const rateInterval = Math.max(interval + scrapeInterval, 4 * scrapeInterval);
    return {
      __rate_interval: {
        text: rateInterval + 's',
        value: rateInterval + 's'
      }
    };
  }

  adjustInterval(interval, minInterval, range, intervalFactor) {
    // Prometheus will drop queries that might return more than 11000 data points.
    // Calculate a safe interval as an additional minimum to take into account.
    // Fractional safeIntervals are allowed, however serve little purpose if the interval is greater than 1
    // If this is the case take the ceil of the value.
    let safeInterval = range / 11000;

    if (safeInterval > 1) {
      safeInterval = Math.ceil(safeInterval);
    }

    return Math.max(interval * intervalFactor, minInterval, safeInterval);
  }

  performTimeSeriesQuery(query, start, end) {
    if (start > end) {
      throw {
        message: 'Invalid time range'
      };
    }

    const url = '/api/v1/query_range';
    const data = {
      query: query.expr,
      start,
      end,
      step: query.step
    };

    if (this.queryTimeout) {
      data['timeout'] = this.queryTimeout;
    }

    return this._request(url, data, {
      requestId: query.requestId,
      headers: query.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.catchError)(err => {
      if (err.cancelled) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)(err);
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.throwError)(this.handleErrors(err, query));
    }));
  }

  performInstantQuery(query, time) {
    const url = '/api/v1/query';
    const data = {
      query: query.expr,
      time
    };

    if (this.queryTimeout) {
      data['timeout'] = this.queryTimeout;
    }

    return this._request(url, data, {
      requestId: query.requestId,
      headers: query.headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.catchError)(err => {
      if (err.cancelled) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)(err);
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.throwError)(this.handleErrors(err, query));
    }));
  }

  metricFindQuery(query) {
    if (!query) {
      return Promise.resolve([]);
    }

    const scopedVars = Object.assign({
      __interval: {
        text: this.interval,
        value: this.interval
      },
      __interval_ms: {
        text: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.rangeUtil.intervalToMs(this.interval),
        value: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.rangeUtil.intervalToMs(this.interval)
      }
    }, this.getRangeScopedVars(this.timeSrv.timeRange()));
    const interpolated = this.templateSrv.replace(query, scopedVars, this.interpolateQueryExpr);
    const metricFindQuery = new _metric_find_query__WEBPACK_IMPORTED_MODULE_16__["default"](this, interpolated);
    return metricFindQuery.process();
  }

  getRangeScopedVars(range = this.timeSrv.timeRange()) {
    const msRange = range.to.diff(range.from);
    const sRange = Math.round(msRange / 1000);
    return {
      __range_ms: {
        text: msRange,
        value: msRange
      },
      __range_s: {
        text: sRange,
        value: sRange
      },
      __range: {
        text: sRange + 's',
        value: sRange + 's'
      }
    };
  }

  async annotationQuery(options) {
    const annotation = options.annotation;
    const {
      expr = ''
    } = annotation;

    if (!expr) {
      return Promise.resolve([]);
    }

    const step = options.annotation.step || ANNOTATION_QUERY_STEP_DEFAULT;
    const queryModel = {
      expr,
      range: true,
      instant: false,
      exemplar: false,
      interval: step,
      queryType: _types__WEBPACK_IMPORTED_MODULE_19__.PromQueryType.timeSeriesQuery,
      refId: 'X',
      datasource: this.getRef()
    };
    return await (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: (this.getPrometheusTime(options.range.from, false) * 1000).toString(),
        to: (this.getPrometheusTime(options.range.to, true) * 1000).toString(),
        queries: [this.applyTemplateVariables(queryModel, {})]
      },
      requestId: `prom-query-${annotation.name}`
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(rsp => {
      return this.processAnnotationResponse(options, rsp.data);
    })));
  }

  getExemplars(query) {
    const url = '/api/v1/query_exemplars';
    return this._request(url, {
      query: query.expr,
      start: query.start.toString(),
      end: query.end.toString()
    }, {
      requestId: query.requestId,
      headers: query.headers
    });
  }

  async getSubtitle() {
    const buildInfo = await this.getBuildInfo();
    return buildInfo ? this.getBuildInfoMessage(buildInfo) : null;
  }

  async getTagKeys(options) {
    if (options !== null && options !== void 0 && options.series) {
      // Get tags for the provided series only
      const seriesLabels = await Promise.all(options.series.map(series => this.languageProvider.fetchSeriesLabels(series))); // Combines tags from all options.series provided

      let tags = [];
      seriesLabels.map(value => tags = tags.concat(Object.keys(value)));
      const uniqueLabels = [...new Set(tags)];
      return uniqueLabels.map(value => ({
        text: value
      }));
    } else {
      var _result$data$data$map, _result$data, _result$data$data;

      // Get all tags
      const result = await this.metadataRequest('/api/v1/labels');
      return (_result$data$data$map = result === null || result === void 0 ? void 0 : (_result$data = result.data) === null || _result$data === void 0 ? void 0 : (_result$data$data = _result$data.data) === null || _result$data$data === void 0 ? void 0 : _result$data$data.map(value => ({
        text: value
      }))) !== null && _result$data$data$map !== void 0 ? _result$data$data$map : [];
    }
  }

  async getTagValues(options = {}) {
    var _result$data$data$map2, _result$data2, _result$data2$data;

    const result = await this.metadataRequest(`/api/v1/label/${options.key}/values`);
    return (_result$data$data$map2 = result === null || result === void 0 ? void 0 : (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : (_result$data2$data = _result$data2.data) === null || _result$data2$data === void 0 ? void 0 : _result$data2$data.map(value => ({
      text: value
    }))) !== null && _result$data$data$map2 !== void 0 ? _result$data$data$map2 : [];
  }

  async getBuildInfo() {
    try {
      const buildInfo = await (0,app_features_alerting_unified_api_buildInfo__WEBPACK_IMPORTED_MODULE_7__.discoverDataSourceFeatures)({
        url: this.url,
        name: this.name,
        type: 'prometheus'
      });
      return buildInfo;
    } catch (error) {
      // We don't want to break the rest of functionality if build info does not work correctly
      return undefined;
    }
  }

  getBuildInfoMessage(buildInfo) {
    var _buildInfo$applicatio, _buildInfo$applicatio2;

    const enabled = _Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge, {
      color: "green",
      icon: "check",
      text: "Ruler API enabled"
    }));

    const disabled = _Badge2 || (_Badge2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge, {
      color: "orange",
      icon: "exclamation-triangle",
      text: "Ruler API not enabled"
    }));

    const unsupported = _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
      placement: "top",
      content: "Prometheus does not allow editing rules, connect to either a Mimir or Cortex datasource to manage alerts via Grafana.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge, {
          color: "red",
          icon: "exclamation-triangle",
          text: "Ruler API not supported"
        })
      })
    }));

    const LOGOS = {
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Lotex]: '/public/app/plugins/datasource/prometheus/img/cortex_logo.svg',
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Mimir]: '/public/app/plugins/datasource/prometheus/img/mimir_logo.svg',
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Prometheus]: '/public/app/plugins/datasource/prometheus/img/prometheus_logo.svg'
    };
    const COLORS = {
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Lotex]: 'blue',
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Mimir]: 'orange',
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Prometheus]: 'red'
    };
    const AppDisplayNames = {
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Lotex]: 'Cortex',
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Mimir]: 'Mimir',
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Prometheus]: 'Prometheus'
    }; // this will inform the user about what "subtype" the datasource is; Mimir, Cortex or vanilla Prometheus

    const applicationSubType = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge, {
      text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("img", {
          style: {
            width: 14,
            height: 14,
            verticalAlign: 'text-bottom'
          },
          src: LOGOS[(_buildInfo$applicatio = buildInfo.application) !== null && _buildInfo$applicatio !== void 0 ? _buildInfo$applicatio : app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Prometheus]
        }), ' ', buildInfo.application ? AppDisplayNames[buildInfo.application] : 'Unknown']
      }),
      color: COLORS[(_buildInfo$applicatio2 = buildInfo.application) !== null && _buildInfo$applicatio2 !== void 0 ? _buildInfo$applicatio2 : app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Prometheus]
    });

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'max-content max-content',
        rowGap: '0.5rem',
        columnGap: '2rem',
        marginTop: '1rem'
      },
      children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        children: "Type"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        children: applicationSubType
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
        children: [_div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
          children: "Ruler API"
        })), buildInfo.application === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Prometheus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
          children: unsupported
        }), buildInfo.application !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_10__.PromApplication.Prometheus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
          children: buildInfo.features.rulerApiEnabled ? enabled : disabled
        })]
      })]
    });
  }

  async testDatasource() {
    const now = new Date().getTime();
    const request = {
      targets: [{
        refId: 'test',
        expr: '1+1',
        instant: true
      }],
      requestId: `${this.id}-health`,
      scopedVars: {},
      dashboardId: 0,
      panelId: 0,
      interval: '1m',
      intervalMs: 60000,
      maxDataPoints: 1,
      range: {
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(now - 1000),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(now)
      }
    };
    const buildInfo = await this.getBuildInfo();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.lastValueFrom)(this.query(request)).then(res => {
      if (!res || !res.data || res.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done) {
        var _res$error;

        return {
          status: 'error',
          message: `Error reading Prometheus: ${res === null || res === void 0 ? void 0 : (_res$error = res.error) === null || _res$error === void 0 ? void 0 : _res$error.message}`
        };
      } else {
        return {
          status: 'success',
          message: 'Data source is working',
          details: buildInfo && {
            verboseMessage: this.getBuildInfoMessage(buildInfo)
          }
        };
      }
    }).catch(err => {
      console.error('Prometheus Error', err);
      return {
        status: 'error',
        message: err.message
      };
    });
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;

    if (queries && queries.length) {
      expandedQueries = queries.map(query => {
        const expandedQuery = Object.assign({}, query, {
          datasource: this.getRef(),
          expr: this.templateSrv.replace(query.expr, scopedVars, this.interpolateQueryExpr),
          interval: this.templateSrv.replace(query.interval, scopedVars)
        });
        return expandedQuery;
      });
    }

    return expandedQueries;
  }

  getQueryHints(query, result) {
    var _query$expr;

    return (0,_query_hints__WEBPACK_IMPORTED_MODULE_17__.getQueryHints)((_query$expr = query.expr) !== null && _query$expr !== void 0 ? _query$expr : '', result, this);
  }

  getInitHints() {
    return (0,_query_hints__WEBPACK_IMPORTED_MODULE_17__.getInitHints)(this);
  }

  async loadRules() {
    try {
      var _res$data, _res$data$data;

      const res = await this.metadataRequest('/api/v1/rules');
      const groups = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.groups;

      if (groups) {
        this.ruleMappings = extractRuleMappingFromGroups(groups);
      }
    } catch (e) {
      console.log('Rules API is experimental. Ignore next error.');
      console.error(e);
    }
  }

  async areExemplarsAvailable() {
    try {
      const res = await this.getResource('/api/v1/query_exemplars', {
        query: 'test',
        start: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)().subtract(30, 'minutes').valueOf(),
        end: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)().valueOf()
      });

      if (res.data.status === 'success') {
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  modifyQuery(query, action) {
    var _query$expr2;

    let expression = (_query$expr2 = query.expr) !== null && _query$expr2 !== void 0 ? _query$expr2 : '';

    switch (action.type) {
      case 'ADD_FILTER':
        {
          expression = (0,_add_label_to_query__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(expression, action.key, action.value);
          break;
        }

      case 'ADD_FILTER_OUT':
        {
          expression = (0,_add_label_to_query__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(expression, action.key, action.value, '!=');
          break;
        }

      case 'ADD_HISTOGRAM_QUANTILE':
        {
          expression = `histogram_quantile(0.95, sum(rate(${expression}[$__rate_interval])) by (le))`;
          break;
        }

      case 'ADD_RATE':
        {
          expression = `rate(${expression}[$__rate_interval])`;
          break;
        }

      case 'ADD_SUM':
        {
          expression = `sum(${expression.trim()}) by ($1)`;
          break;
        }

      case 'EXPAND_RULES':
        {
          if (action.mapping) {
            expression = (0,_language_utils__WEBPACK_IMPORTED_MODULE_14__.expandRecordingRules)(expression, action.mapping);
          }

          break;
        }

      default:
        break;
    }

    return Object.assign({}, query, {
      expr: expression
    });
  }

  getPrometheusTime(date, roundUp) {
    if (typeof date === 'string') {
      date = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateMath.parse(date, roundUp);
    }

    return Math.ceil(date.valueOf() / 1000);
  }

  getTimeRangeParams() {
    const range = this.timeSrv.timeRange();
    return {
      start: this.getPrometheusTime(range.from, false).toString(),
      end: this.getPrometheusTime(range.to, true).toString()
    };
  }

  getOriginalMetricName(labelData) {
    return (0,_result_transformer__WEBPACK_IMPORTED_MODULE_18__.getOriginalMetricName)(labelData);
  }

  enhanceExprWithAdHocFilters(expr) {
    const adhocFilters = this.templateSrv.getAdhocFilters(this.name);
    const finalQuery = adhocFilters.reduce((acc, filter) => {
      const {
        key,
        operator
      } = filter;
      let {
        value
      } = filter;

      if (operator === '=~' || operator === '!~') {
        value = prometheusRegularEscape(value);
      }

      return (0,_add_label_to_query__WEBPACK_IMPORTED_MODULE_11__.addLabelToQuery)(acc, key, value, operator);
    }, expr);
    return finalQuery;
  } // Used when running queries trough backend


  filterQuery(query) {
    if (query.hide || !query.expr) {
      return false;
    }

    return true;
  } // Used when running queries trough backend


  applyTemplateVariables(target, scopedVars) {
    const variables = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(scopedVars); // We want to interpolate these variables on backend

    delete variables.__interval;
    delete variables.__interval_ms; //Add ad hoc filters

    const expr = this.enhanceExprWithAdHocFilters(target.expr);
    return Object.assign({}, target, {
      legendFormat: this.templateSrv.replace(target.legendFormat, variables),
      expr: this.templateSrv.replace(expr, variables, this.interpolateQueryExpr),
      interval: this.templateSrv.replace(target.interval, variables)
    });
  }

  getVariables() {
    return this.templateSrv.getVariables().map(v => `$${v.name}`);
  }

  interpolateString(string) {
    return this.templateSrv.replace(string, undefined, this.interpolateQueryExpr);
  }

}
/**
 * Align query range to step.
 * Rounds start and end down to a multiple of step.
 * @param start Timestamp marking the beginning of the range.
 * @param end Timestamp marking the end of the range.
 * @param step Interval to align start and end with.
 * @param utcOffsetSec Number of seconds current timezone is offset from UTC
 */

function alignRange(start, end, step, utcOffsetSec) {
  const alignedEnd = Math.floor((end + utcOffsetSec) / step) * step - utcOffsetSec;
  const alignedStart = Math.floor((start + utcOffsetSec) / step) * step - utcOffsetSec;
  return {
    end: alignedEnd,
    start: alignedStart
  };
}
function extractRuleMappingFromGroups(groups) {
  return groups.reduce((mapping, group) => group.rules.filter(rule => rule.type === 'recording').reduce((acc, rule) => Object.assign({}, acc, {
    [rule.name]: rule.query
  }), mapping), {});
} // NOTE: these two functions are very similar to the escapeLabelValueIn* functions
// in language_utils.ts, but they are not exactly the same algorithm, and we found
// no way to reuse one in the another or vice versa.

function prometheusRegularEscape(value) {
  return typeof value === 'string' ? value.replace(/\\/g, '\\\\').replace(/'/g, "\\\\'") : value;
}
function prometheusSpecialRegexEscape(value) {
  return typeof value === 'string' ? value.replace(/\\/g, '\\\\\\\\').replace(/[$^*{}\[\]\'+?.()|]/g, '\\\\$&') : value;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/language_provider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUGGESTIONS_LIMIT": () => (/* binding */ SUGGESTIONS_LIMIT),
/* harmony export */   "addHistoryMetadata": () => (/* binding */ addHistoryMetadata),
/* harmony export */   "default": () => (/* binding */ PromQlLanguageProvider),
/* harmony export */   "getMetadataString": () => (/* binding */ getMetadataString)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lru-cache-npm-7.10.1-5af910d0ed-e8b190d71e.zip/node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.28.0-28f20a79ff-bde93fb2be.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
/* harmony import */ var _promql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const DEFAULT_KEYS = ['job', 'instance'];
const EMPTY_SELECTOR = '{}';
const HISTORY_ITEM_COUNT = 5;
const HISTORY_COUNT_CUTOFF = 1000 * 60 * 60 * 24; // 24h
// Max number of items (metrics, labels, values) that we display as suggestions. Prevents from running out of memory.

const SUGGESTIONS_LIMIT = 10000;

const wrapLabel = label => ({
  label
});

const setFunctionKind = suggestion => {
  suggestion.kind = 'function';
  return suggestion;
};

function addHistoryMetadata(item, history) {
  const cutoffTs = Date.now() - HISTORY_COUNT_CUTOFF;
  const historyForItem = history.filter(h => h.ts > cutoffTs && h.query === item.label);
  const count = historyForItem.length;
  const recent = historyForItem[0];
  let hint = `Queried ${count} times in the last 24h.`;

  if (recent) {
    const lastQueried = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(recent.ts).fromNow();
    hint = `${hint} Last queried ${lastQueried}.`;
  }

  return Object.assign({}, item, {
    documentation: hint
  });
}

function addMetricsMetadata(metric, metadata) {
  const item = {
    label: metric
  };

  if (metadata && metadata[metric]) {
    item.documentation = getMetadataString(metric, metadata);
  }

  return item;
}

function getMetadataString(metric, metadata) {
  if (!metadata[metric]) {
    return undefined;
  }

  const {
    type,
    help
  } = metadata[metric];
  return `${type.toUpperCase()}: ${help}`;
}
const PREFIX_DELIMITER_REGEX = /(="|!="|=~"|!~"|\{|\[|\(|\+|-|\/|\*|%|\^|\band\b|\bor\b|\bunless\b|==|>=|!=|<=|>|<|=|~|,)/;
class PromQlLanguageProvider extends _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LanguageProvider {
  /**
   *  Cache for labels of series. This is bit simplistic in the sense that it just counts responses each as a 1 and does
   *  not account for different size of a response. If that is needed a `length` function can be added in the options.
   *  10 as a max size is totally arbitrary right now.
   */
  constructor(datasource, initialValues) {
    super();

    _defineProperty(this, "histogramMetrics", void 0);

    _defineProperty(this, "timeRange", void 0);

    _defineProperty(this, "metrics", void 0);

    _defineProperty(this, "metricsMetadata", void 0);

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "labelKeys", []);

    _defineProperty(this, "labelsCache", new (lru_cache__WEBPACK_IMPORTED_MODULE_1___default())({
      max: 10
    }));

    _defineProperty(this, "request", async (url, defaultValue, params = {}) => {
      try {
        const res = await this.datasource.metadataRequest(url, params);
        return res.data.data;
      } catch (error) {
        console.error(error);
      }

      return defaultValue;
    });

    _defineProperty(this, "start", async () => {
      if (this.datasource.lookupsDisabled) {
        return [];
      } // TODO #33976: make those requests parallel


      await this.fetchLabels();
      this.metrics = (await this.fetchLabelValues('__name__')) || [];
      await this.loadMetricsMetadata();
      this.histogramMetrics = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.processHistogramMetrics)(this.metrics).sort();
      return [];
    });

    _defineProperty(this, "provideCompletionItems", async ({
      prefix,
      text,
      value,
      labelKey,
      wrapperClasses
    }, context = {}) => {
      const emptyResult = {
        suggestions: []
      };

      if (!value) {
        return emptyResult;
      } // Local text properties


      const empty = value.document.text.length === 0;
      const selectedLines = value.document.getTextsAtRange(value.selection);
      const currentLine = selectedLines.size === 1 ? selectedLines.first().getText() : null;
      const nextCharacter = currentLine ? currentLine[value.selection.anchor.offset] : null; // Syntax spans have 3 classes by default. More indicate a recognized token

      const tokenRecognized = wrapperClasses.length > 3; // Non-empty prefix, but not inside known token

      const prefixUnrecognized = prefix && !tokenRecognized; // Prevent suggestions in `function(|suffix)`

      const noSuffix = !nextCharacter || nextCharacter === ')'; // Prefix is safe if it does not immediately follow a complete expression and has no text after it

      const safePrefix = prefix && !text.match(/^[\]})\s]+$/) && noSuffix; // About to type next operand if preceded by binary operator

      const operatorsPattern = /[+\-*/^%]/;
      const isNextOperand = text.match(operatorsPattern); // Determine candidates by CSS context

      if (wrapperClasses.includes('context-range')) {
        // Suggestions for metric[|]
        return this.getRangeCompletionItems();
      } else if (wrapperClasses.includes('context-labels')) {
        // Suggestions for metric{|} and metric{foo=|}, as well as metric-independent label queries like {|}
        return this.getLabelCompletionItems({
          prefix,
          text,
          value,
          labelKey,
          wrapperClasses
        });
      } else if (wrapperClasses.includes('context-aggregation')) {
        // Suggestions for sum(metric) by (|)
        return this.getAggregationCompletionItems(value);
      } else if (empty) {
        // Suggestions for empty query field
        return this.getEmptyCompletionItems(context);
      } else if (prefixUnrecognized && noSuffix && !isNextOperand) {
        // Show term suggestions in a couple of scenarios
        return this.getBeginningCompletionItems(context);
      } else if (prefixUnrecognized && safePrefix) {
        // Show term suggestions in a couple of scenarios
        return this.getTermCompletionItems();
      }

      return emptyResult;
    });

    _defineProperty(this, "getBeginningCompletionItems", context => {
      return {
        suggestions: [...this.getEmptyCompletionItems(context).suggestions, ...this.getTermCompletionItems().suggestions]
      };
    });

    _defineProperty(this, "getEmptyCompletionItems", context => {
      const {
        history
      } = context;
      const suggestions = [];

      if (history && history.length) {
        const historyItems = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chain)(history).map(h => h.query.expr).filter().uniq().take(HISTORY_ITEM_COUNT).map(wrapLabel).map(item => addHistoryMetadata(item, history)).value();
        suggestions.push({
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix,
          skipSort: true,
          label: 'History',
          items: historyItems
        });
      }

      return {
        suggestions
      };
    });

    _defineProperty(this, "getTermCompletionItems", () => {
      const {
        metrics,
        metricsMetadata
      } = this;
      const suggestions = [];
      suggestions.push({
        searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix,
        label: 'Functions',
        items: _promql__WEBPACK_IMPORTED_MODULE_6__.FUNCTIONS.map(setFunctionKind)
      });

      if (metrics && metrics.length) {
        suggestions.push({
          label: 'Metrics',
          items: metrics.map(m => addMetricsMetadata(m, metricsMetadata)),
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Fuzzy
        });
      }

      return {
        suggestions
      };
    });

    _defineProperty(this, "getAggregationCompletionItems", async value => {
      const suggestions = []; // Stitch all query lines together to support multi-line queries

      let queryOffset;
      const queryText = value.document.getBlocks().reduce((text, block) => {
        if (text === undefined) {
          return '';
        }

        if (!block) {
          return text;
        }

        const blockText = block === null || block === void 0 ? void 0 : block.getText();

        if (value.anchorBlock.key === block.key) {
          // Newline characters are not accounted for but this is irrelevant
          // for the purpose of extracting the selector string
          queryOffset = value.selection.anchor.offset + text.length;
        }

        return text + blockText;
      }, ''); // Try search for selector part on the left-hand side, such as `sum (m) by (l)`

      const openParensAggregationIndex = queryText.lastIndexOf('(', queryOffset);
      let openParensSelectorIndex = queryText.lastIndexOf('(', openParensAggregationIndex - 1);
      let closeParensSelectorIndex = queryText.indexOf(')', openParensSelectorIndex); // Try search for selector part of an alternate aggregation clause, such as `sum by (l) (m)`

      if (openParensSelectorIndex === -1) {
        const closeParensAggregationIndex = queryText.indexOf(')', queryOffset);
        closeParensSelectorIndex = queryText.indexOf(')', closeParensAggregationIndex + 1);
        openParensSelectorIndex = queryText.lastIndexOf('(', closeParensSelectorIndex);
      }

      const result = {
        suggestions,
        context: 'context-aggregation'
      }; // Suggestions are useless for alternative aggregation clauses without a selector in context

      if (openParensSelectorIndex === -1) {
        return result;
      } // Range vector syntax not accounted for by subsequent parse so discard it if present


      const selectorString = queryText.slice(openParensSelectorIndex + 1, closeParensSelectorIndex).replace(/\[[^\]]+\]$/, '');
      const selector = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.parseSelector)(selectorString, selectorString.length - 2).selector;
      const series = await this.getSeries(selector);
      const labelKeys = Object.keys(series);

      if (labelKeys.length > 0) {
        const limitInfo = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.addLimitInfo)(labelKeys);
        suggestions.push({
          label: `Labels${limitInfo}`,
          items: labelKeys.map(wrapLabel),
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Fuzzy
        });
      }

      return result;
    });

    _defineProperty(this, "getLabelCompletionItems", async ({
      text,
      wrapperClasses,
      labelKey,
      value
    }) => {
      if (!value) {
        return {
          suggestions: []
        };
      }

      const suggestions = [];
      const line = value.anchorBlock.getText();
      const cursorOffset = value.selection.anchor.offset;
      const suffix = line.substr(cursorOffset);
      const prefix = line.substr(0, cursorOffset);
      const isValueStart = text.match(/^(=|=~|!=|!~)/);
      const isValueEnd = suffix.match(/^"?[,}]|$/); // Detect cursor in front of value, e.g., {key=|"}

      const isPreValue = prefix.match(/(=|=~|!=|!~)$/) && suffix.match(/^"/); // Don't suggest anything at the beginning or inside a value

      const isValueEmpty = isValueStart && isValueEnd;
      const hasValuePrefix = isValueEnd && !isValueStart;

      if (!isValueEmpty && !hasValuePrefix || isPreValue) {
        return {
          suggestions
        };
      } // Get normalized selector


      let selector;
      let parsedSelector;

      try {
        parsedSelector = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.parseSelector)(line, cursorOffset);
        selector = parsedSelector.selector;
      } catch {
        selector = EMPTY_SELECTOR;
      }

      const containsMetric = selector.includes('__name__=');
      const existingKeys = parsedSelector ? parsedSelector.labelKeys : [];
      let series = {}; // Query labels for selector

      if (selector) {
        series = await this.getSeries(selector, !containsMetric);
      }

      if (Object.keys(series).length === 0) {
        console.warn(`Server did not return any values for selector = ${selector}`);
        return {
          suggestions
        };
      }

      let context;

      if (text && isValueStart || wrapperClasses.includes('attr-value')) {
        // Label values
        if (labelKey && series[labelKey]) {
          context = 'context-label-values';
          const limitInfo = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.addLimitInfo)(series[labelKey]);
          suggestions.push({
            label: `Label values for "${labelKey}"${limitInfo}`,
            items: series[labelKey].map(wrapLabel),
            searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Fuzzy
          });
        }
      } else {
        // Label keys
        const labelKeys = series ? Object.keys(series) : containsMetric ? null : DEFAULT_KEYS;

        if (labelKeys) {
          const possibleKeys = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.difference)(labelKeys, existingKeys);

          if (possibleKeys.length) {
            context = 'context-labels';
            const newItems = possibleKeys.map(key => ({
              label: key
            }));
            const limitInfo = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.addLimitInfo)(newItems);
            const newSuggestion = {
              label: `Labels${limitInfo}`,
              items: newItems,
              searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Fuzzy
            };
            suggestions.push(newSuggestion);
          }
        }
      }

      return {
        context,
        suggestions
      };
    });

    _defineProperty(this, "fetchLabelValues", async key => {
      const params = this.datasource.getTimeRangeParams();
      const url = `/api/v1/label/${this.datasource.interpolateString(key)}/values`;
      return await this.request(url, [], params);
    });

    _defineProperty(this, "fetchSeriesLabels", async (name, withName) => {
      const interpolatedName = this.datasource.interpolateString(name);
      const range = this.datasource.getTimeRangeParams();
      const urlParams = Object.assign({}, range, {
        'match[]': interpolatedName
      });
      const url = `/api/v1/series`; // Cache key is a bit different here. We add the `withName` param and also round up to a minute the intervals.
      // The rounding may seem strange but makes relative intervals like now-1h less prone to need separate request every
      // millisecond while still actually getting all the keys for the correct interval. This still can create problems
      // when user does not the newest values for a minute if already cached.

      const cacheParams = new URLSearchParams({
        'match[]': interpolatedName,
        start: (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.roundSecToMin)(parseInt(range.start, 10)).toString(),
        end: (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.roundSecToMin)(parseInt(range.end, 10)).toString(),
        withName: withName ? 'true' : 'false'
      });
      const cacheKey = `/api/v1/series?${cacheParams.toString()}`;
      let value = this.labelsCache.get(cacheKey);

      if (!value) {
        const data = await this.request(url, [], urlParams);
        const {
          values
        } = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.processLabels)(data, withName);
        value = values;
        this.labelsCache.set(cacheKey, value);
      }

      return value;
    });

    _defineProperty(this, "fetchSeries", async match => {
      const url = '/api/v1/series';
      const range = this.datasource.getTimeRangeParams();
      const params = Object.assign({}, range, {
        'match[]': match
      });
      return await this.request(url, {}, params);
    });

    _defineProperty(this, "fetchDefaultSeries", (0,lodash__WEBPACK_IMPORTED_MODULE_0__.once)(async () => {
      const values = await Promise.all(DEFAULT_KEYS.map(key => this.fetchLabelValues(key)));
      return DEFAULT_KEYS.reduce((acc, key, i) => Object.assign({}, acc, {
        [key]: values[i]
      }), {});
    }));

    this.datasource = datasource;
    this.histogramMetrics = [];
    this.timeRange = {
      start: 0,
      end: 0
    };
    this.metrics = [];
    Object.assign(this, initialValues);
  } // Strip syntax chars so that typeahead suggestions can work on clean inputs


  cleanText(s) {
    const parts = s.split(PREFIX_DELIMITER_REGEX);
    const last = parts.pop();
    return last.trimLeft().replace(/"$/, '').replace(/^"/, '');
  }

  get syntax() {
    return _promql__WEBPACK_IMPORTED_MODULE_6__["default"];
  }

  async loadMetricsMetadata() {
    this.metricsMetadata = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.fixSummariesMetadata)(await this.request('/api/v1/metadata', {}));
  }

  getLabelKeys() {
    return this.labelKeys;
  }

  getRangeCompletionItems() {
    return {
      context: 'context-range',
      suggestions: [{
        label: 'Range vector',
        items: [..._promql__WEBPACK_IMPORTED_MODULE_6__.RATE_RANGES]
      }]
    };
  }

  importFromAbstractQuery(labelBasedQuery) {
    return (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.toPromLikeQuery)(labelBasedQuery);
  }

  exportToAbstractQuery(query) {
    const promQuery = query.expr;

    if (!promQuery || promQuery.length === 0) {
      return {
        refId: query.refId,
        labelMatchers: []
      };
    }

    const tokens = prismjs__WEBPACK_IMPORTED_MODULE_2___default().tokenize(promQuery, _promql__WEBPACK_IMPORTED_MODULE_6__["default"]);
    const labelMatchers = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__.extractLabelMatchers)(tokens);
    const nameLabelValue = getNameLabelValue(promQuery, tokens);

    if (nameLabelValue && nameLabelValue.length > 0) {
      labelMatchers.push({
        name: '__name__',
        operator: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AbstractLabelOperator.Equal,
        value: nameLabelValue
      });
    }

    return {
      refId: query.refId,
      labelMatchers
    };
  }

  async getSeries(selector, withName) {
    if (this.datasource.lookupsDisabled) {
      return {};
    }

    try {
      if (selector === EMPTY_SELECTOR) {
        return await this.fetchDefaultSeries();
      } else {
        return await this.fetchSeriesLabels(selector, withName);
      }
    } catch (error) {
      // TODO: better error handling
      console.error(error);
      return {};
    }
  }

  async getLabelValues(key) {
    return await this.fetchLabelValues(key);
  }
  /**
   * Fetches all label keys
   */


  async fetchLabels() {
    const url = '/api/v1/labels';
    const params = this.datasource.getTimeRangeParams();
    this.labelFetchTs = Date.now().valueOf();
    const res = await this.request(url, [], params);

    if (Array.isArray(res)) {
      this.labelKeys = res.slice().sort();
    }

    return [];
  }
  /**
   * Fetch labels for a series. This is cached by it's args but also by the global timeRange currently selected as
   * they can change over requested time.
   * @param name
   * @param withName
   */


}

function getNameLabelValue(promQuery, tokens) {
  let nameLabelValue = '';

  for (let prop in tokens) {
    if (typeof tokens[prop] === 'string') {
      nameLabelValue = tokens[prop];
      break;
    }
  }

  return nameLabelValue;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/language_utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLimitInfo": () => (/* binding */ addLimitInfo),
/* harmony export */   "escapeLabelValueInExactSelector": () => (/* binding */ escapeLabelValueInExactSelector),
/* harmony export */   "escapeLabelValueInRegexSelector": () => (/* binding */ escapeLabelValueInRegexSelector),
/* harmony export */   "expandRecordingRules": () => (/* binding */ expandRecordingRules),
/* harmony export */   "extractLabelMatchers": () => (/* binding */ extractLabelMatchers),
/* harmony export */   "fixSummariesMetadata": () => (/* binding */ fixSummariesMetadata),
/* harmony export */   "labelRegexp": () => (/* binding */ labelRegexp),
/* harmony export */   "limitSuggestions": () => (/* binding */ limitSuggestions),
/* harmony export */   "parseSelector": () => (/* binding */ parseSelector),
/* harmony export */   "processHistogramMetrics": () => (/* binding */ processHistogramMetrics),
/* harmony export */   "processLabels": () => (/* binding */ processLabels),
/* harmony export */   "roundMsToMin": () => (/* binding */ roundMsToMin),
/* harmony export */   "roundSecToMin": () => (/* binding */ roundSecToMin),
/* harmony export */   "selectorRegexp": () => (/* binding */ selectorRegexp),
/* harmony export */   "toPromLikeExpr": () => (/* binding */ toPromLikeExpr),
/* harmony export */   "toPromLikeQuery": () => (/* binding */ toPromLikeQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.28.0-28f20a79ff-bde93fb2be.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _add_label_to_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/add_label_to_query.ts");
/* harmony import */ var _language_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_provider.ts");
const _excluded = ["__name__"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const processHistogramMetrics = metrics => {
  const resultSet = new Set();
  const regexp = new RegExp('_bucket($|:)');

  for (let index = 0; index < metrics.length; index++) {
    const metric = metrics[index];
    const isHistogramValue = regexp.test(metric);

    if (isHistogramValue) {
      resultSet.add(metric);
    }
  }

  return [...resultSet];
};
function processLabels(labels, withName = false) {
  // For processing we are going to use sets as they have significantly better performance than arrays
  // After we process labels, we will convert sets to arrays and return object with label values in arrays
  const valueSet = {};
  labels.forEach(label => {
    const {
      __name__
    } = label,
          rest = _objectWithoutPropertiesLoose(label, _excluded);

    if (withName) {
      valueSet['__name__'] = valueSet['__name__'] || new Set();

      if (!valueSet['__name__'].has(__name__)) {
        valueSet['__name__'].add(__name__);
      }
    }

    Object.keys(rest).forEach(key => {
      if (!valueSet[key]) {
        valueSet[key] = new Set();
      }

      if (!valueSet[key].has(rest[key])) {
        valueSet[key].add(rest[key]);
      }
    });
  }); // valueArray that we are going to return in the object

  const valueArray = {};
  limitSuggestions(Object.keys(valueSet)).forEach(key => {
    valueArray[key] = limitSuggestions(Array.from(valueSet[key]));
  });
  return {
    values: valueArray,
    keys: Object.keys(valueArray)
  };
} // const cleanSelectorRegexp = /\{(\w+="[^"\n]*?")(,\w+="[^"\n]*?")*\}/;

const selectorRegexp = /\{[^}]*?(\}|$)/;
const labelRegexp = /\b(\w+)(!?=~?)("[^"\n]*?")/g;
function parseSelector(query, cursorOffset = 1) {
  if (!query.match(selectorRegexp)) {
    // Special matcher for metrics
    if (query.match(/^[A-Za-z:][\w:]*$/)) {
      return {
        selector: `{__name__="${query}"}`,
        labelKeys: ['__name__']
      };
    }

    throw new Error('Query must contain a selector: ' + query);
  } // Check if inside a selector


  const prefix = query.slice(0, cursorOffset);
  const prefixOpen = prefix.lastIndexOf('{');
  const prefixClose = prefix.lastIndexOf('}');

  if (prefixOpen === -1) {
    throw new Error('Not inside selector, missing open brace: ' + prefix);
  }

  if (prefixClose > -1 && prefixClose > prefixOpen) {
    throw new Error('Not inside selector, previous selector already closed: ' + prefix);
  }

  const suffix = query.slice(cursorOffset);
  const suffixCloseIndex = suffix.indexOf('}');
  const suffixClose = suffixCloseIndex + cursorOffset;
  const suffixOpenIndex = suffix.indexOf('{');
  const suffixOpen = suffixOpenIndex + cursorOffset;

  if (suffixClose === -1) {
    throw new Error('Not inside selector, missing closing brace in suffix: ' + suffix);
  }

  if (suffixOpenIndex > -1 && suffixOpen < suffixClose) {
    throw new Error('Not inside selector, next selector opens before this one closed: ' + suffix);
  } // Extract clean labels to form clean selector, incomplete labels are dropped


  const selector = query.slice(prefixOpen, suffixClose);
  const labels = {};
  selector.replace(labelRegexp, (label, key, operator, value) => {
    const labelOffset = query.indexOf(label);
    const valueStart = labelOffset + key.length + operator.length + 1;
    const valueEnd = labelOffset + key.length + operator.length + value.length - 1; // Skip label if cursor is in value

    if (cursorOffset < valueStart || cursorOffset > valueEnd) {
      labels[key] = {
        value,
        operator
      };
    }

    return '';
  }); // Add metric if there is one before the selector

  const metricPrefix = query.slice(0, prefixOpen);
  const metricMatch = metricPrefix.match(/[A-Za-z:][\w:]*$/);

  if (metricMatch) {
    labels['__name__'] = {
      value: `"${metricMatch[0]}"`,
      operator: '='
    };
  } // Build sorted selector


  const labelKeys = Object.keys(labels).sort();
  const cleanSelector = labelKeys.map(key => `${key}${labels[key].operator}${labels[key].value}`).join(',');
  const selectorString = ['{', cleanSelector, '}'].join('');
  return {
    labelKeys,
    selector: selectorString
  };
}
function expandRecordingRules(query, mapping) {
  const ruleNames = Object.keys(mapping);
  const rulesRegex = new RegExp(`(\\s|^)(${ruleNames.join('|')})(\\s|$|\\(|\\[|\\{)`, 'ig');
  const expandedQuery = query.replace(rulesRegex, (match, pre, name, post) => `${pre}${mapping[name]}${post}`); // Split query into array, so if query uses operators, we can correctly add labels to each individual part.

  const queryArray = expandedQuery.split(/(\+|\-|\*|\/|\%|\^)/); // Regex that matches occurrences of ){ or }{ or ]{ which is a sign of incorrecly added labels.

  const invalidLabelsRegex = /(\)\{|\}\{|\]\{)/;
  const correctlyExpandedQueryArray = queryArray.map(query => {
    return addLabelsToExpression(query, invalidLabelsRegex);
  });
  return correctlyExpandedQueryArray.join('');
}

function addLabelsToExpression(expr, invalidLabelsRegexp) {
  var _match$index;

  const match = expr.match(invalidLabelsRegexp);

  if (!match) {
    return expr;
  } // Split query into 2 parts - before the invalidLabelsRegex match and after.


  const indexOfRegexMatch = (_match$index = match.index) !== null && _match$index !== void 0 ? _match$index : 0;
  const exprBeforeRegexMatch = expr.slice(0, indexOfRegexMatch + 1);
  const exprAfterRegexMatch = expr.slice(indexOfRegexMatch + 1); // Create arrayOfLabelObjects with label objects that have key, operator and value.

  const arrayOfLabelObjects = [];
  exprAfterRegexMatch.replace(labelRegexp, (label, key, operator, value) => {
    arrayOfLabelObjects.push({
      key,
      operator,
      value
    });
    return '';
  }); // Loop through all label objects and add them to query.
  // As a starting point we have valid query without the labels.

  let result = exprBeforeRegexMatch;
  arrayOfLabelObjects.filter(Boolean).forEach(obj => {
    // Remove extra set of quotes from obj.value
    const value = obj.value.slice(1, -1);
    result = (0,_add_label_to_query__WEBPACK_IMPORTED_MODULE_3__.addLabelToQuery)(result, obj.key, value, obj.operator);
  });
  return result;
}
/**
 * Adds metadata for synthetic metrics for which the API does not provide metadata.
 * See https://github.com/grafana/grafana/issues/22337 for details.
 *
 * @param metadata HELP and TYPE metadata from /api/v1/metadata
 */


function fixSummariesMetadata(metadata) {
  if (!metadata) {
    return metadata;
  }

  const baseMetadata = {};
  const summaryMetadata = {};

  for (const metric in metadata) {
    // NOTE: based on prometheus-documentation, we can receive
    // multiple metadata-entries for the given metric, it seems
    // it happens when the same metric is on multiple targets
    // and their help-text differs
    // (https://prometheus.io/docs/prometheus/latest/querying/api/#querying-metric-metadata)
    // for now we just use the first entry.
    const item = metadata[metric][0];
    baseMetadata[metric] = item;

    if (item.type === 'histogram') {
      summaryMetadata[`${metric}_bucket`] = {
        type: 'counter',
        help: `Cumulative counters for the observation buckets (${item.help})`
      };
      summaryMetadata[`${metric}_count`] = {
        type: 'counter',
        help: `Count of events that have been observed for the histogram metric (${item.help})`
      };
      summaryMetadata[`${metric}_sum`] = {
        type: 'counter',
        help: `Total sum of all observed values for the histogram metric (${item.help})`
      };
    }

    if (item.type === 'summary') {
      summaryMetadata[`${metric}_count`] = {
        type: 'counter',
        help: `Count of events that have been observed for the base metric (${item.help})`
      };
      summaryMetadata[`${metric}_sum`] = {
        type: 'counter',
        help: `Total sum of all observed values for the base metric (${item.help})`
      };
    }
  } // Synthetic series


  const syntheticMetadata = {};
  syntheticMetadata['ALERTS'] = {
    type: 'counter',
    help: 'Time series showing pending and firing alerts. The sample value is set to 1 as long as the alert is in the indicated active (pending or firing) state.'
  };
  return Object.assign({}, baseMetadata, summaryMetadata, syntheticMetadata);
}
function roundMsToMin(milliseconds) {
  return roundSecToMin(milliseconds / 1000);
}
function roundSecToMin(seconds) {
  return Math.floor(seconds / 60);
}
function limitSuggestions(items) {
  return items.slice(0, _language_provider__WEBPACK_IMPORTED_MODULE_4__.SUGGESTIONS_LIMIT);
}
function addLimitInfo(items) {
  return items && items.length >= _language_provider__WEBPACK_IMPORTED_MODULE_4__.SUGGESTIONS_LIMIT ? `, limited to the first ${_language_provider__WEBPACK_IMPORTED_MODULE_4__.SUGGESTIONS_LIMIT} received items` : '';
} // NOTE: the following 2 exported functions are very similar to the prometheus*Escape
// functions in datasource.ts, but they are not exactly the same algorithm, and we found
// no way to reuse one in the another or vice versa.
// Prometheus regular-expressions use the RE2 syntax (https://github.com/google/re2/wiki/Syntax),
// so every character that matches something in that list has to be escaped.
// the list of metacharacters is: *+?()|\.[]{}^$
// we make a javascript regular expression that matches those characters:

const RE2_METACHARACTERS = /[*+?()|\\.\[\]{}^$]/g;

function escapePrometheusRegexp(value) {
  return value.replace(RE2_METACHARACTERS, '\\$&');
} // based on the openmetrics-documentation, the 3 symbols we have to handle are:
// - \n ... the newline character
// - \  ... the backslash character
// - "  ... the double-quote character


function escapeLabelValueInExactSelector(labelValue) {
  return labelValue.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"');
}
function escapeLabelValueInRegexSelector(labelValue) {
  return escapeLabelValueInExactSelector(escapePrometheusRegexp(labelValue));
}
const FromPromLikeMap = {
  '=': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.Equal,
  '!=': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.NotEqual,
  '=~': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.EqualRegEx,
  '!~': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.NotEqualRegEx
};
const ToPromLikeMap = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.invert)(FromPromLikeMap);
function toPromLikeExpr(labelBasedQuery) {
  const expr = labelBasedQuery.labelMatchers.map(selector => {
    const operator = ToPromLikeMap[selector.operator];

    if (operator) {
      return `${selector.name}${operator}"${selector.value}"`;
    } else {
      return '';
    }
  }).filter(e => e !== '').join(', ');
  return expr ? `{${expr}}` : '';
}
function toPromLikeQuery(labelBasedQuery) {
  return {
    refId: labelBasedQuery.refId,
    expr: toPromLikeExpr(labelBasedQuery),
    range: true
  };
}
function extractLabelMatchers(tokens) {
  const labelMatchers = [];

  for (let prop in tokens) {
    if (tokens[prop] instanceof prismjs__WEBPACK_IMPORTED_MODULE_1__.Token) {
      let token = tokens[prop];

      if (token.type === 'context-labels') {
        let labelKey = '';
        let labelValue = '';
        let labelOperator = '';
        let contentTokens = token.content;

        for (let currentToken in contentTokens) {
          if (typeof contentTokens[currentToken] === 'string') {
            let currentStr;
            currentStr = contentTokens[currentToken];

            if (currentStr === '=' || currentStr === '!=' || currentStr === '=~' || currentStr === '!~') {
              labelOperator = currentStr;
            }
          } else if (contentTokens[currentToken] instanceof prismjs__WEBPACK_IMPORTED_MODULE_1__.Token) {
            switch (contentTokens[currentToken].type) {
              case 'label-key':
                labelKey = contentTokens[currentToken].content;
                break;

              case 'label-value':
                labelValue = contentTokens[currentToken].content;
                labelValue = labelValue.substring(1, labelValue.length - 1);
                const labelComparator = FromPromLikeMap[labelOperator];

                if (labelComparator) {
                  labelMatchers.push({
                    name: labelKey,
                    operator: labelComparator,
                    value: labelValue
                  });
                }

                break;
            }
          }
        }
      }
    }
  }

  return labelMatchers;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/metric_find_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrometheusMetricFindQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PrometheusMetricFindQuery {
  constructor(datasource, query) {
    _defineProperty(this, "range", void 0);

    this.datasource = datasource;
    this.query = query;
    this.datasource = datasource;
    this.query = query;
    this.range = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_1__.getTimeSrv)().timeRange();
  }

  process() {
    const labelNamesRegex = /^label_names\(\)\s*$/;
    const labelValuesRegex = /^label_values\((?:(.+),\s*)?([a-zA-Z_][a-zA-Z0-9_]*)\)\s*$/;
    const metricNamesRegex = /^metrics\((.+)\)\s*$/;
    const queryResultRegex = /^query_result\((.+)\)\s*$/;
    const labelNamesQuery = this.query.match(labelNamesRegex);

    if (labelNamesQuery) {
      return this.labelNamesQuery();
    }

    const labelValuesQuery = this.query.match(labelValuesRegex);

    if (labelValuesQuery) {
      if (labelValuesQuery[1]) {
        return this.labelValuesQuery(labelValuesQuery[2], labelValuesQuery[1]);
      } else {
        return this.labelValuesQuery(labelValuesQuery[2]);
      }
    }

    const metricNamesQuery = this.query.match(metricNamesRegex);

    if (metricNamesQuery) {
      return this.metricNameQuery(metricNamesQuery[1]);
    }

    const queryResultQuery = this.query.match(queryResultRegex);

    if (queryResultQuery) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this.queryResultQuery(queryResultQuery[1]));
    } // if query contains full metric name, return metric name and label list


    return this.metricNameAndLabelsQuery(this.query);
  }

  labelNamesQuery() {
    const start = this.datasource.getPrometheusTime(this.range.from, false);
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    const params = {
      start: start.toString(),
      end: end.toString()
    };
    const url = `/api/v1/labels`;
    return this.datasource.metadataRequest(url, params).then(result => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(result.data.data, value => {
        return {
          text: value
        };
      });
    });
  }

  labelValuesQuery(label, metric) {
    const start = this.datasource.getPrometheusTime(this.range.from, false);
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    let url;

    if (!metric) {
      const params = {
        start: start.toString(),
        end: end.toString()
      }; // return label values globally

      url = `/api/v1/label/${label}/values`;
      return this.datasource.metadataRequest(url, params).then(result => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(result.data.data, value => {
          return {
            text: value
          };
        });
      });
    } else {
      const params = {
        'match[]': metric,
        start: start.toString(),
        end: end.toString()
      };
      url = `/api/v1/series`;
      return this.datasource.metadataRequest(url, params).then(result => {
        const _labels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(result.data.data, metric => {
          return metric[label] || '';
        }).filter(label => {
          return label !== '';
        });

        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(_labels).map(metric => {
          return {
            text: metric,
            expandable: true
          };
        });
      });
    }
  }

  metricNameQuery(metricFilterPattern) {
    const start = this.datasource.getPrometheusTime(this.range.from, false);
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    const params = {
      start: start.toString(),
      end: end.toString()
    };
    const url = `/api/v1/label/__name__/values`;
    return this.datasource.metadataRequest(url, params).then(result => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chain)(result.data.data).filter(metricName => {
        const r = new RegExp(metricFilterPattern);
        return r.test(metricName);
      }).map(matchedMetricName => {
        return {
          text: matchedMetricName,
          expandable: true
        };
      }).value();
    });
  }

  queryResultQuery(query) {
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    const instantQuery = {
      expr: query
    };
    return this.datasource.performInstantQuery(instantQuery, end).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(result.data.data.result, metricData => {
        let text = metricData.metric.__name__ || '';
        delete metricData.metric.__name__;
        text += '{' + (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(metricData.metric, (v, k) => {
          return k + '="' + v + '"';
        }).join(',') + '}';
        text += ' ' + metricData.value[1] + ' ' + metricData.value[0] * 1000;
        return {
          text: text,
          expandable: true
        };
      });
    }));
  }

  metricNameAndLabelsQuery(query) {
    const start = this.datasource.getPrometheusTime(this.range.from, false);
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    const params = {
      'match[]': query,
      start: start.toString(),
      end: end.toString()
    };
    const url = `/api/v1/series`;
    const self = this;
    return this.datasource.metadataRequest(url, params).then(result => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(result.data.data, metric => {
        return {
          text: self.datasource.getOriginalMetricName(metric),
          expandable: true
        };
      });
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_PromCheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromCheatSheet.tsx");
/* harmony import */ var _components_PromQueryEditorByApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromQueryEditorByApp.tsx");
/* harmony import */ var _configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/configuration/ConfigEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/datasource.tsx");





const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_4__.PrometheusDatasource).setQueryEditor(_components_PromQueryEditorByApp__WEBPACK_IMPORTED_MODULE_2__["default"]).setConfigEditor(_configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setQueryEditorHelp(_components_PromCheatSheet__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/promql.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./public/app/plugins/datasource/prometheus/query_hints.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUM_HINT_THRESHOLD_COUNT": () => (/* binding */ SUM_HINT_THRESHOLD_COUNT),
/* harmony export */   "getInitHints": () => (/* binding */ getInitHints),
/* harmony export */   "getQueryHints": () => (/* binding */ getQueryHints)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Number of time series results needed before starting to suggest sum aggregation hints
 */
const SUM_HINT_THRESHOLD_COUNT = 20;
function getQueryHints(query, series, datasource) {
  const hints = []; // ..._bucket metric needs a histogram_quantile()

  const histogramMetric = query.trim().match(/^\w+_bucket$|^\w+_bucket{.*}$/);

  if (histogramMetric) {
    const label = 'Selected metric has buckets.';
    hints.push({
      type: 'HISTOGRAM_QUANTILE',
      label,
      fix: {
        label: 'Consider calculating aggregated quantile by adding histogram_quantile().',
        action: {
          type: 'ADD_HISTOGRAM_QUANTILE',
          query
        }
      }
    });
  } // Check for need of rate()


  if (query.indexOf('rate(') === -1 && query.indexOf('increase(') === -1) {
    var _datasource$languageP, _datasource$languageP2;

    // Use metric metadata for exact types
    const nameMatch = query.match(/\b(\w+_(total|sum|count))\b/);
    let counterNameMetric = nameMatch ? nameMatch[1] : '';
    const metricsMetadata = (_datasource$languageP = datasource === null || datasource === void 0 ? void 0 : (_datasource$languageP2 = datasource.languageProvider) === null || _datasource$languageP2 === void 0 ? void 0 : _datasource$languageP2.metricsMetadata) !== null && _datasource$languageP !== void 0 ? _datasource$languageP : {};
    const metricMetadataKeys = Object.keys(metricsMetadata);
    let certain = false;

    if (metricMetadataKeys.length > 0) {
      var _metricMetadataKeys$f;

      counterNameMetric = (_metricMetadataKeys$f = metricMetadataKeys.find(metricName => {
        // Only considering first type information, could be non-deterministic
        const metadata = metricsMetadata[metricName];

        if (metadata.type.toLowerCase() === 'counter') {
          const metricRegex = new RegExp(`\\b${metricName}\\b`);

          if (query.match(metricRegex)) {
            certain = true;
            return true;
          }
        }

        return false;
      })) !== null && _metricMetadataKeys$f !== void 0 ? _metricMetadataKeys$f : '';
    }

    if (counterNameMetric) {
      // FixableQuery consists of metric name and optionally label-value pairs. We are not offering fix for complex queries yet.
      const fixableQuery = query.trim().match(/^\w+$|^\w+{.*}$/);
      const verb = certain ? 'is' : 'looks like';
      let label = `Selected metric ${verb} a counter.`;
      let fix;

      if (fixableQuery) {
        fix = {
          label: 'Consider calculating rate of counter by adding rate().',
          action: {
            type: 'ADD_RATE',
            query
          }
        };
      } else {
        label = `${label} Consider calculating rate of counter by adding rate().`;
      }

      hints.push({
        type: 'APPLY_RATE',
        label,
        fix
      });
    }
  } // Check for recording rules expansion


  if (datasource && datasource.ruleMappings) {
    const mapping = datasource.ruleMappings;
    const mappingForQuery = Object.keys(mapping).reduce((acc, ruleName) => {
      if (query.search(ruleName) > -1) {
        return Object.assign({}, acc, {
          [ruleName]: mapping[ruleName]
        });
      }

      return acc;
    }, {});

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.size)(mappingForQuery) > 0) {
      const label = 'Query contains recording rules.';
      hints.push({
        type: 'EXPAND_RULES',
        label,
        fix: {
          label: 'Expand rules',
          action: {
            type: 'EXPAND_RULES',
            query,
            mapping: mappingForQuery
          }
        }
      });
    }
  }

  if (series && series.length >= SUM_HINT_THRESHOLD_COUNT) {
    const simpleMetric = query.trim().match(/^\w+$/);

    if (simpleMetric) {
      hints.push({
        type: 'ADD_SUM',
        label: 'Many time series results returned.',
        fix: {
          label: 'Consider aggregating with sum().',
          action: {
            type: 'ADD_SUM',
            query: query,
            preventSubmit: true
          }
        }
      });
    }
  }

  return hints;
}
function getInitHints(datasource) {
  const hints = []; // Hint if using Loki as Prometheus data source

  if (datasource.directUrl.includes('/loki') && !datasource.languageProvider.metrics.length) {
    hints.push({
      label: `Using Loki as a Prometheus data source is no longer supported. You must use the Loki data source for your Loki instance.`,
      type: 'INFO'
    });
  } // Hint for big disabled lookups


  if (datasource.lookupsDisabled) {
    hints.push({
      label: `Labels and metrics lookup was disabled in data source settings.`,
      type: 'INFO'
    });
  }

  return hints;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryModeller": () => (/* binding */ PromQueryModeller),
/* harmony export */   "promQueryModeller": () => (/* binding */ promQueryModeller)
/* harmony export */ });
/* harmony import */ var _promql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var _aggregations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/aggregations.ts");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/operations.ts");
/* harmony import */ var _shared_LokiAndPromQueryModellerBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/LokiAndPromQueryModellerBase.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");





class PromQueryModeller extends _shared_LokiAndPromQueryModellerBase__WEBPACK_IMPORTED_MODULE_3__.LokiAndPromQueryModellerBase {
  constructor() {
    super(() => {
      const allOperations = [...(0,_operations__WEBPACK_IMPORTED_MODULE_2__.getOperationDefinitions)(), ...(0,_aggregations__WEBPACK_IMPORTED_MODULE_1__.getAggregationOperations)()];

      for (const op of allOperations) {
        const func = _promql__WEBPACK_IMPORTED_MODULE_0__.FUNCTIONS.find(x => x.insertText === op.id);

        if (func) {
          op.documentation = func.documentation;
        }
      }

      return allOperations;
    });
    this.setOperationCategories([_types__WEBPACK_IMPORTED_MODULE_4__.PromVisualQueryOperationCategory.Aggregations, _types__WEBPACK_IMPORTED_MODULE_4__.PromVisualQueryOperationCategory.RangeFunctions, _types__WEBPACK_IMPORTED_MODULE_4__.PromVisualQueryOperationCategory.Functions, _types__WEBPACK_IMPORTED_MODULE_4__.PromVisualQueryOperationCategory.BinaryOps, _types__WEBPACK_IMPORTED_MODULE_4__.PromVisualQueryOperationCategory.Trigonometric, _types__WEBPACK_IMPORTED_MODULE_4__.PromVisualQueryOperationCategory.Time]);
  }

  getQueryPatterns() {
    return [{
      name: 'Rate then sum',
      operations: [{
        id: 'rate',
        params: ['$__rate_interval']
      }, {
        id: 'sum',
        params: []
      }]
    }, {
      name: 'Rate then sum by(label) then avg',
      operations: [{
        id: 'rate',
        params: ['$__rate_interval']
      }, {
        id: '__sum_by',
        params: ['']
      }, {
        id: 'avg',
        params: []
      }]
    }, {
      name: 'Histogram quantile on rate',
      operations: [{
        id: 'rate',
        params: ['$__rate_interval']
      }, {
        id: '__sum_by',
        params: ['le']
      }, {
        id: 'histogram_quantile',
        params: [0.95]
      }]
    }, {
      name: 'Histogram quantile on increase ',
      operations: [{
        id: 'increase',
        params: ['$__rate_interval']
      }, {
        id: '__max_by',
        params: ['le']
      }, {
        id: 'histogram_quantile',
        params: [0.95]
      }]
    }];
  }

}
const promQueryModeller = new PromQueryModeller();

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/aggregations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAggregationOperations": () => (/* binding */ getAggregationOperations)
/* harmony export */ });
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/operations.ts");
/* harmony import */ var _shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");



function getAggregationOperations() {
  return [...(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.createAggregationOperation)(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.Sum), ...(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.createAggregationOperation)(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.Avg), ...(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.createAggregationOperation)(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.Min), ...(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.createAggregationOperation)(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.Max), ...(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.createAggregationOperation)(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.Count), ...(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.createAggregationOperationWithParam)(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.TopK, {
    params: [{
      name: 'K-value',
      type: 'number'
    }],
    defaultParams: [5]
  }), ...(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.createAggregationOperationWithParam)(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.BottomK, {
    params: [{
      name: 'K-value',
      type: 'number'
    }],
    defaultParams: [5]
  }), ...(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.createAggregationOperationWithParam)(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.CountValues, {
    params: [{
      name: 'Identifier',
      type: 'string'
    }],
    defaultParams: ['count']
  }), createAggregationOverTime(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.SumOverTime), createAggregationOverTime(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.AvgOverTime), createAggregationOverTime(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.MinOverTime), createAggregationOverTime(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.MaxOverTime), createAggregationOverTime(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.CountOverTime), createAggregationOverTime(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.LastOverTime), createAggregationOverTime(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.PresentOverTime), createAggregationOverTime(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.AbsentOverTime), createAggregationOverTime(_types__WEBPACK_IMPORTED_MODULE_2__.PromOperationId.StddevOverTime)];
}

function createAggregationOverTime(name) {
  return {
    id: name,
    name: (0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.getPromAndLokiOperationDisplayName)(name),
    params: [(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_1__.getRangeVectorParamDef)()],
    defaultParams: ['$__interval'],
    alternativesKey: 'overtime function',
    category: _types__WEBPACK_IMPORTED_MODULE_2__.PromVisualQueryOperationCategory.RangeFunctions,
    renderer: operationWithRangeVectorRenderer,
    addOperationHandler: _operations__WEBPACK_IMPORTED_MODULE_0__.addOperationWithRangeVector
  };
}

function operationWithRangeVectorRenderer(model, def, innerExpr) {
  var _, _model$params;

  let rangeVector = (_ = ((_model$params = model.params) !== null && _model$params !== void 0 ? _model$params : [])[0]) !== null && _ !== void 0 ? _ : '$__interval';
  return `${def.id}(${innerExpr}[${rangeVector}])`;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/binaryScalarOperations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "binaryScalarDefs": () => (/* binding */ binaryScalarDefs),
/* harmony export */   "binaryScalarOperations": () => (/* binding */ binaryScalarOperations),
/* harmony export */   "binaryScalarOperatorToOperatorName": () => (/* binding */ binaryScalarOperatorToOperatorName)
/* harmony export */ });
/* harmony import */ var _shared_operationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");


const binaryScalarDefs = [{
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.Addition,
  name: 'Add scalar',
  sign: '+'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.Subtraction,
  name: 'Subtract scalar',
  sign: '-'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.MultiplyBy,
  name: 'Multiply by scalar',
  sign: '*'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.DivideBy,
  name: 'Divide by scalar',
  sign: '/'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.Modulo,
  name: 'Modulo by scalar',
  sign: '%'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.Exponent,
  name: 'Exponent',
  sign: '^'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.EqualTo,
  name: 'Equal to',
  sign: '==',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.NotEqualTo,
  name: 'Not equal to',
  sign: '!=',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.GreaterThan,
  name: 'Greater than',
  sign: '>',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.LessThan,
  name: 'Less than',
  sign: '<',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.GreaterOrEqual,
  name: 'Greater or equal to',
  sign: '>=',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__.PromOperationId.LessOrEqual,
  name: 'Less or equal to',
  sign: '<=',
  comparison: true
}];
const binaryScalarOperatorToOperatorName = binaryScalarDefs.reduce((acc, def) => {
  acc[def.sign] = {
    id: def.id,
    comparison: def.comparison
  };
  return acc;
}, {}); // Not sure about this one. It could also be a more generic 'Simple math operation' where user specifies
// both the operator and the operand in a single input

const binaryScalarOperations = binaryScalarDefs.map(opDef => {
  const params = [{
    name: 'Value',
    type: 'number'
  }];
  const defaultParams = [2];

  if (opDef.comparison) {
    params.push({
      name: 'Bool',
      type: 'boolean',
      description: 'If checked comparison will return 0 or 1 for the value rather than filtering.'
    });
    defaultParams.push(false);
  }

  return {
    id: opDef.id,
    name: opDef.name,
    params,
    defaultParams,
    alternativesKey: 'binary scalar operations',
    category: _types__WEBPACK_IMPORTED_MODULE_1__.PromVisualQueryOperationCategory.BinaryOps,
    renderer: getSimpleBinaryRenderer(opDef.sign),
    addOperationHandler: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_0__.defaultAddOperationHandler
  };
});

function getSimpleBinaryRenderer(operator) {
  return function binaryRenderer(model, def, innerExpr) {
    let param = model.params[0];
    let bool = '';

    if (model.params.length === 2) {
      bool = model.params[1] ? ' bool' : '';
    }

    return `${innerExpr} ${operator}${bool} ${param}`;
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/LabelParamEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelParamEditor": () => (/* binding */ LabelParamEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
/* harmony import */ var _shared_operationUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function LabelParamEditor({
  onChange,
  index,
  operationIndex,
  value,
  query,
  datasource
}) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
    inputId: (0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_4__.getOperationParamId)(operationIndex, index),
    autoFocus: value === '' ? true : undefined,
    openMenuOnFocus: true,
    onOpenMenu: async () => {
      setState({
        isLoading: true
      });
      const options = await loadGroupByLabels(query, datasource);
      setState({
        options,
        isLoading: undefined
      });
    },
    isLoading: state.isLoading,
    allowCustomValue: true,
    noOptionsMessage: "No labels found",
    loadingMessage: "Loading labels",
    options: state.options,
    value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(value),
    onChange: value => onChange(index, value.value)
  });
}

async function loadGroupByLabels(query, datasource) {
  let labels = query.labels; // This function is used by both Prometheus and Loki and this the only difference.

  if (datasource.type === 'prometheus') {
    labels = [{
      label: '__name__',
      op: '=',
      value: query.metric
    }, ...query.labels];
  }

  const expr = _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__.promQueryModeller.renderLabels(labels);
  const result = await datasource.languageProvider.fetchSeriesLabels(expr);
  return Object.keys(result).map(x => ({
    label: x,
    value: x
  }));
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/MetricSelect.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricSelect": () => (/* binding */ MetricSelect)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-highlight-words-virtual-cb0ac01bed/0/cache/react-highlight-words-npm-0.18.0-101bfefffe-ff9759e7eb.zip/node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");

 // @ts-ignore






// We are matching words split with space
const splitSeparator = ' ';
function MetricSelect({
  query,
  onChange,
  onGetMetrics
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const customFilterOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((option, searchQuery) => {
    var _option$label;

    const label = (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : option.value;

    if (!label) {
      return false;
    } // custom value is not a string label but a react node


    if (!label.toLowerCase) {
      return true;
    }

    const searchWords = searchQuery.split(splitSeparator);
    return searchWords.reduce((acc, cur) => acc && label.toLowerCase().includes(cur.toLowerCase()), true);
  }, []);
  const formatOptionLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((option, meta) => {
    var _option$label2;

    // For newly created custom value we don't want to add highlight
    if (option['__isNew__']) {
      return option.label;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((react_highlight_words__WEBPACK_IMPORTED_MODULE_2___default()), {
      searchWords: meta.inputValue.split(splitSeparator),
      textToHighlight: (_option$label2 = option.label) !== null && _option$label2 !== void 0 ? _option$label2 : '',
      highlightClassName: styles.highlight
    });
  }, [styles.highlight]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.EditorFieldGroup, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.EditorField, {
      label: "Metric",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select, {
        inputId: "prometheus-metric-select",
        className: styles.select,
        value: query.metric ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toOption)(query.metric) : undefined,
        placeholder: "Select metric",
        allowCustomValue: true,
        formatOptionLabel: formatOptionLabel,
        filterOption: customFilterOption,
        onOpenMenu: async () => {
          setState({
            isLoading: true
          });
          const metrics = await onGetMetrics();
          setState({
            metrics,
            isLoading: undefined
          });
        },
        isLoading: state.isLoading,
        options: state.metrics,
        onChange: ({
          value
        }) => {
          if (value) {
            onChange(Object.assign({}, query, {
              metric: value
            }));
          }
        }
      })
    })
  });
}

const getStyles = theme => ({
  select: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    min-width: 125px;
  `,
  highlight: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: select__match-highlight;
    background: inherit;
    padding: inherit;
    color: ${theme.colors.warning.contrastText};
    background-color: ${theme.colors.warning.main};
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/NestedQuery.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NestedQuery": () => (/* binding */ NestedQuery)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/binaryScalarOperations.ts");
/* harmony import */ var _PromQueryBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilder.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _FlexItem;










const NestedQuery = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(({
  nestedQuery,
  index,
  datasource,
  onChange,
  onRemove,
  onRunQuery
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.card,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: styles.name,
        children: "Operator"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
        width: "auto",
        options: operators,
        value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(nestedQuery.operator),
        onChange: value => {
          onChange(index, Object.assign({}, nestedQuery, {
            operator: value.value
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: styles.name,
        children: "Vector matches"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.vectorMatchWrapper,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
          width: "auto",
          value: nestedQuery.vectorMatchesType || 'on',
          allowCustomValue: true,
          options: [{
            value: 'on',
            label: 'on'
          }, {
            value: 'ignoring',
            label: 'ignoring'
          }],
          onChange: val => {
            onChange(index, Object.assign({}, nestedQuery, {
              vectorMatchesType: val.value
            }));
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.AutoSizeInput, {
          className: styles.vectorMatchInput,
          minWidth: 20,
          defaultValue: nestedQuery.vectorMatches,
          onCommitChange: evt => {
            onChange(index, Object.assign({}, nestedQuery, {
              vectorMatches: evt.currentTarget.value,
              vectorMatchesType: nestedQuery.vectorMatchesType || 'on'
            }));
          }
        })]
      }), _FlexItem || (_FlexItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
        grow: 1
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
        name: "times",
        size: "sm",
        onClick: () => onRemove(index)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.body,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.EditorRows, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PromQueryBuilder__WEBPACK_IMPORTED_MODULE_6__.PromQueryBuilder, {
          query: nestedQuery.query,
          datasource: datasource,
          nested: true,
          onRunQuery: onRunQuery,
          onChange: update => {
            onChange(index, Object.assign({}, nestedQuery, {
              query: update
            }));
          }
        })
      })
    })]
  });
});
const operators = _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_5__.binaryScalarDefs.map(def => ({
  label: def.sign,
  value: def.sign
}));
NestedQuery.displayName = 'NestedQuery';

const getStyles = theme => {
  return {
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'card',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(0.5)
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'header',
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      gap: theme.spacing(1),
      display: 'flex',
      alignItems: 'center'
    }),
    name: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'name',
      whiteSpace: 'nowrap'
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'body',
      paddingLeft: theme.spacing(2)
    }),
    vectorMatchInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'vectorMatchInput',
      marginLeft: -1
    }),
    vectorMatchWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'vectorMatchWrapper',
      display: 'flex'
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/NestedQueryList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NestedQueryList": () => (/* binding */ NestedQueryList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _NestedQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/NestedQuery.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function NestedQueryList({
  query,
  datasource,
  onChange,
  onRunQuery
}) {
  var _query$binaryQueries;

  const nestedQueries = (_query$binaryQueries = query.binaryQueries) !== null && _query$binaryQueries !== void 0 ? _query$binaryQueries : [];

  const onNestedQueryUpdate = (index, update) => {
    const updatedList = [...nestedQueries];
    updatedList.splice(index, 1, update);
    onChange(Object.assign({}, query, {
      binaryQueries: updatedList
    }));
  };

  const onRemove = index => {
    const updatedList = [...nestedQueries.slice(0, index), ...nestedQueries.slice(index + 1)];
    onChange(Object.assign({}, query, {
      binaryQueries: updatedList
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    direction: "column",
    gap: 1,
    children: nestedQueries.map((nestedQuery, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NestedQuery__WEBPACK_IMPORTED_MODULE_2__.NestedQuery, {
      nestedQuery: nestedQuery,
      index: index,
      onChange: onNestedQueryUpdate,
      datasource: datasource,
      onRemove: onRemove,
      onRunQuery: onRunQuery
    }, index.toString()))
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilder.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryBuilder": () => (/* binding */ PromQueryBuilder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _language_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_provider.ts");
/* harmony import */ var _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
/* harmony import */ var _shared_LabelFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/LabelFilters.tsx");
/* harmony import */ var _shared_OperationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationList.tsx");
/* harmony import */ var _shared_OperationsEditorRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationsEditorRow.tsx");
/* harmony import */ var _MetricSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/MetricSelect.tsx");
/* harmony import */ var _NestedQueryList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/NestedQueryList.tsx");
/* harmony import */ var _PromQueryBuilderHints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilderHints.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













const PromQueryBuilder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(({
  datasource,
  query,
  onChange,
  onRunQuery,
  data
}) => {
  const onChangeLabels = labels => {
    onChange(Object.assign({}, query, {
      labels
    }));
  };
  /**
   * Map metric metadata to SelectableValue for Select component and also adds defined template variables to the list.
   */


  const withTemplateVariableOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async optionsPromise => {
    const variables = datasource.getVariables();
    const options = await optionsPromise;
    return [...variables.map(value => ({
      label: value,
      value
    })), ...options.map(option => ({
      label: option.value,
      value: option.value,
      title: option.description
    }))];
  }, [datasource]);

  const onGetLabelNames = async forLabel => {
    // If no metric we need to use a different method
    if (!query.metric) {
      // Todo add caching but inside language provider!
      await datasource.languageProvider.fetchLabels();
      return datasource.languageProvider.getLabelKeys().map(k => ({
        value: k
      }));
    }

    const labelsToConsider = query.labels.filter(x => x !== forLabel);
    labelsToConsider.push({
      label: '__name__',
      op: '=',
      value: query.metric
    });
    const expr = _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__.promQueryModeller.renderLabels(labelsToConsider);
    const labelsIndex = await datasource.languageProvider.fetchSeriesLabels(expr); // filter out already used labels

    return Object.keys(labelsIndex).filter(labelName => !labelsToConsider.find(filter => filter.label === labelName)).map(k => ({
      value: k
    }));
  };

  const onGetLabelValues = async forLabel => {
    var _result$forLabelInter;

    if (!forLabel.label) {
      return [];
    } // If no metric we need to use a different method


    if (!query.metric) {
      return (await datasource.languageProvider.getLabelValues(forLabel.label)).map(v => ({
        value: v
      }));
    }

    const labelsToConsider = query.labels.filter(x => x !== forLabel);
    labelsToConsider.push({
      label: '__name__',
      op: '=',
      value: query.metric
    });
    const expr = _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__.promQueryModeller.renderLabels(labelsToConsider);
    const result = await datasource.languageProvider.fetchSeriesLabels(expr);
    const forLabelInterpolated = datasource.interpolateString(forLabel.label);
    return (_result$forLabelInter = result[forLabelInterpolated].map(v => ({
      value: v
    }))) !== null && _result$forLabelInter !== void 0 ? _result$forLabelInter : [];
  };

  const onGetMetrics = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return withTemplateVariableOptions(getMetrics(datasource, query));
  }, [datasource, query, withTemplateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MetricSelect__WEBPACK_IMPORTED_MODULE_7__.MetricSelect, {
        query: query,
        onChange: onChange,
        onGetMetrics: onGetMetrics
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_LabelFilters__WEBPACK_IMPORTED_MODULE_4__.LabelFilters, {
        labelsFilters: query.labels,
        onChange: onChangeLabels,
        onGetLabelNames: forLabel => withTemplateVariableOptions(onGetLabelNames(forLabel)),
        onGetLabelValues: forLabel => withTemplateVariableOptions(onGetLabelValues(forLabel))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_shared_OperationsEditorRow__WEBPACK_IMPORTED_MODULE_6__.OperationsEditorRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_OperationList__WEBPACK_IMPORTED_MODULE_5__.OperationList, {
        queryModeller: _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__.promQueryModeller,
        datasource: datasource,
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PromQueryBuilderHints__WEBPACK_IMPORTED_MODULE_9__.PromQueryBuilderHints, {
        datasource: datasource,
        query: query,
        onChange: onChange,
        data: data
      })]
    }), query.binaryQueries && query.binaryQueries.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_NestedQueryList__WEBPACK_IMPORTED_MODULE_8__.NestedQueryList, {
      query: query,
      datasource: datasource,
      onChange: onChange,
      onRunQuery: onRunQuery
    })]
  });
});
/**
 * Returns list of metrics, either all or filtered by query param. It also adds description string to each metric if it
 * exists.
 * @param datasource
 * @param query
 */

async function getMetrics(datasource, query) {
  // Makes sure we loaded the metadata for metrics. Usually this is done in the start() method of the provider but we
  // don't use it with the visual builder and there is no need to run all the start() setup anyway.
  if (!datasource.languageProvider.metricsMetadata) {
    await datasource.languageProvider.loadMetricsMetadata();
  }

  let metrics;

  if (query.labels.length > 0) {
    var _await$datasource$lan;

    const expr = _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__.promQueryModeller.renderLabels(query.labels);
    metrics = (_await$datasource$lan = (await datasource.languageProvider.getSeries(expr, true))['__name__']) !== null && _await$datasource$lan !== void 0 ? _await$datasource$lan : [];
  } else {
    var _await$datasource$lan2;

    metrics = (_await$datasource$lan2 = await datasource.languageProvider.getLabelValues('__name__')) !== null && _await$datasource$lan2 !== void 0 ? _await$datasource$lan2 : [];
  }

  return metrics.map(m => ({
    value: m,
    description: (0,_language_provider__WEBPACK_IMPORTED_MODULE_2__.getMetadataString)(m, datasource.languageProvider.metricsMetadata)
  }));
}

PromQueryBuilder.displayName = 'PromQueryBuilder';

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilderContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryBuilderContainer": () => (/* binding */ PromQueryBuilderContainer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-6cd1e25811/0/cache/@reduxjs-toolkit-npm-1.8.1-cf386ae48d-be5cdea975.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PromQueryModeller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
/* harmony import */ var _parsing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/parsing.ts");
/* harmony import */ var _PromQueryBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilder.tsx");
/* harmony import */ var _QueryPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/QueryPreview.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










/**
 * This component is here just to contain the translation logic between string query and the visual query builder model.
 */
function PromQueryBuilderContainer(props) {
  const {
    query,
    onChange,
    onRunQuery,
    datasource,
    data,
    showRawQuery
  } = props;
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(stateSlice.reducer, {
    expr: query.expr
  }); // Only rebuild visual query if expr changes from outside

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch(exprChanged(query.expr));
  }, [query.expr]);

  const onVisQueryChange = visQuery => {
    const expr = _PromQueryModeller__WEBPACK_IMPORTED_MODULE_1__.promQueryModeller.renderQuery(visQuery);
    dispatch(visualQueryChange({
      visQuery,
      expr
    }));
    onChange(Object.assign({}, props.query, {
      expr: expr
    }));
  };

  if (!state.visQuery) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PromQueryBuilder__WEBPACK_IMPORTED_MODULE_3__.PromQueryBuilder, {
      query: state.visQuery,
      datasource: datasource,
      onChange: onVisQueryChange,
      onRunQuery: onRunQuery,
      data: data
    }), showRawQuery && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_QueryPreview__WEBPACK_IMPORTED_MODULE_4__.QueryPreview, {
      query: query.expr
    })]
  });
}
const stateSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.createSlice)({
  name: 'prom-builder-container',
  initialState: {
    expr: ''
  },
  reducers: {
    visualQueryChange: (state, action) => {
      state.expr = action.payload.expr;
      state.visQuery = action.payload.visQuery;
    },
    exprChanged: (state, action) => {
      if (!state.visQuery || state.expr !== action.payload) {
        state.expr = action.payload;
        const parseResult = (0,_parsing__WEBPACK_IMPORTED_MODULE_2__.buildVisualQueryFromString)(action.payload);
        state.visQuery = parseResult.query;
      }
    }
  }
});
const {
  visualQueryChange,
  exprChanged
} = stateSlice.actions;

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilderExplained.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryBuilderExplained": () => (/* binding */ PromQueryBuilderExplained)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _promql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
/* harmony import */ var _parsing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/parsing.ts");
/* harmony import */ var _shared_OperationExplainedBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationExplainedBox.tsx");
/* harmony import */ var _shared_OperationListExplained__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationListExplained.tsx");
/* harmony import */ var _shared_RawQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/RawQuery.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const PromQueryBuilderExplained = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(({
  query
}) => {
  const visQuery = (0,_parsing__WEBPACK_IMPORTED_MODULE_4__.buildVisualQueryFromString)(query || '').query;
  const lang = {
    grammar: _promql__WEBPACK_IMPORTED_MODULE_2__["default"],
    name: 'promql'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    gap: 0.5,
    direction: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_OperationExplainedBox__WEBPACK_IMPORTED_MODULE_5__.OperationExplainedBox, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_RawQuery__WEBPACK_IMPORTED_MODULE_7__.RawQuery, {
        query: query,
        lang: lang
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_OperationExplainedBox__WEBPACK_IMPORTED_MODULE_5__.OperationExplainedBox, {
      stepNumber: 1,
      title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_RawQuery__WEBPACK_IMPORTED_MODULE_7__.RawQuery, {
        query: `${visQuery.metric} ${_PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__.promQueryModeller.renderLabels(visQuery.labels)}`,
        lang: lang
      }),
      children: "Fetch all series matching metric name and label filters."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_OperationListExplained__WEBPACK_IMPORTED_MODULE_6__.OperationListExplained, {
      stepNumber: 2,
      queryModeller: _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__.promQueryModeller,
      query: visQuery,
      lang: lang
    })]
  });
});
PromQueryBuilderExplained.displayName = 'PromQueryBuilderExplained';

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilderHints.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryBuilderHints": () => (/* binding */ PromQueryBuilderHints)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
/* harmony import */ var _parsing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/parsing.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const PromQueryBuilderHints = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(({
  datasource,
  query,
  onChange,
  data
}) => {
  const [hints, setHints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const promQuery = {
      expr: _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__.promQueryModeller.renderQuery(query),
      refId: ''
    }; // For now show only actionable hints

    const hints = datasource.getQueryHints(promQuery, (data === null || data === void 0 ? void 0 : data.series) || []).filter(hint => {
      var _hint$fix;

      return (_hint$fix = hint.fix) === null || _hint$fix === void 0 ? void 0 : _hint$fix.action;
    });
    setHints(hints);
  }, [datasource, query, onChange, data, styles.hint]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: hints.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.container,
      children: hints.map(hint => {
        var _hint$fix2, _hint$fix3, _hint$fix3$action;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
          content: `${hint.label} ${(_hint$fix2 = hint.fix) === null || _hint$fix2 === void 0 ? void 0 : _hint$fix2.label}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: () => {
              const promQuery = {
                expr: _PromQueryModeller__WEBPACK_IMPORTED_MODULE_3__.promQueryModeller.renderQuery(query),
                refId: ''
              };
              const newPromQuery = datasource.modifyQuery(promQuery, hint.fix.action);
              const visualQuery = (0,_parsing__WEBPACK_IMPORTED_MODULE_4__.buildVisualQueryFromString)(newPromQuery.expr);
              return onChange(visualQuery.query);
            },
            fill: "outline",
            size: "sm",
            className: styles.hint,
            children: 'hint: ' + ((_hint$fix3 = hint.fix) === null || _hint$fix3 === void 0 ? void 0 : (_hint$fix3$action = _hint$fix3.action) === null || _hint$fix3$action === void 0 ? void 0 : _hint$fix3$action.type.toLowerCase().replace('_', ' ')) + '()'
          })
        }, hint.type);
      })
    })
  });
});
PromQueryBuilderHints.displayName = 'PromQueryBuilderHints';

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin-bottom: ${theme.spacing(1)};
      align-items: center;
    `,
    hint: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing(1)};
    `
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilderOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryBuilderOptions": () => (/* binding */ PromQueryBuilderOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_PromExploreExtraField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromExploreExtraField.tsx");
/* harmony import */ var _components_PromQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromQueryEditor.tsx");
/* harmony import */ var _shared_QueryOptionGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryOptionGroup.tsx");
/* harmony import */ var _PromQueryLegendEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryLegendEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _code, _code2;












const PromQueryBuilderOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(({
  query,
  app,
  onChange,
  onRunQuery
}) => {
  const onChangeFormat = value => {
    onChange(Object.assign({}, query, {
      format: value.value
    }));
    onRunQuery();
  };

  const onChangeStep = evt => {
    onChange(Object.assign({}, query, {
      interval: evt.currentTarget.value
    }));
    onRunQuery();
  };

  const queryTypeOptions = (0,_components_PromExploreExtraField__WEBPACK_IMPORTED_MODULE_4__.getQueryTypeOptions)(app === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CoreApp.Explore);
  const onQueryTypeChange = (0,_components_PromExploreExtraField__WEBPACK_IMPORTED_MODULE_4__.getQueryTypeChangeHandler)(query, onChange);

  const onExemplarChange = event => {
    const isEnabled = event.currentTarget.checked;
    onChange(Object.assign({}, query, {
      exemplar: isEnabled
    }));
    onRunQuery();
  };

  const onIntervalFactorChange = value => {
    onChange(Object.assign({}, query, {
      intervalFactor: value.value
    }));
    onRunQuery();
  };

  const formatOption = _components_PromQueryEditor__WEBPACK_IMPORTED_MODULE_5__.FORMAT_OPTIONS.find(option => option.value === query.format) || _components_PromQueryEditor__WEBPACK_IMPORTED_MODULE_5__.FORMAT_OPTIONS[0];
  const queryTypeValue = getQueryTypeValue(query);
  const queryTypeLabel = queryTypeOptions.find(x => x.value === queryTypeValue).label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_shared_QueryOptionGroup__WEBPACK_IMPORTED_MODULE_6__.QueryOptionGroup, {
      title: "Options",
      collapsedInfo: getCollapsedInfo(query, formatOption.label, queryTypeLabel),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PromQueryLegendEditor__WEBPACK_IMPORTED_MODULE_7__.PromQueryLegendEditor, {
        legendFormat: query.legendFormat,
        onChange: legendFormat => onChange(Object.assign({}, query, {
          legendFormat
        })),
        onRunQuery: onRunQuery
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "Min step",
        tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: ["An additional lower limit for the step parameter of the Prometheus query and for the", ' ', _code || (_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "$__interval"
          })), " and ", _code2 || (_code2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("code", {
            children: "$__rate_interval"
          })), " variables."]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.AutoSizeInput, {
          type: "text",
          "aria-label": "Set lower limit for the step parameter",
          placeholder: 'auto',
          minWidth: 10,
          onCommitChange: onChangeStep,
          defaultValue: query.interval
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "Format",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          value: formatOption,
          allowCustomValue: true,
          onChange: onChangeFormat,
          options: _components_PromQueryEditor__WEBPACK_IMPORTED_MODULE_5__.FORMAT_OPTIONS
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "Type",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
          options: queryTypeOptions,
          value: queryTypeValue,
          onChange: onQueryTypeChange
        })
      }), shouldShowExemplarSwitch(query, app) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "Exemplars",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorSwitch, {
          value: query.exemplar,
          onChange: onExemplarChange
        })
      }), query.intervalFactor && query.intervalFactor > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
        label: "Resolution",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          "aria-label": "Select resolution",
          isSearchable: false,
          options: _components_PromQueryEditor__WEBPACK_IMPORTED_MODULE_5__.INTERVAL_FACTOR_OPTIONS,
          onChange: onIntervalFactorChange,
          value: _components_PromQueryEditor__WEBPACK_IMPORTED_MODULE_5__.INTERVAL_FACTOR_OPTIONS.find(option => option.value === query.intervalFactor)
        })
      })]
    })
  });
});

function shouldShowExemplarSwitch(query, app) {
  if (app === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CoreApp.UnifiedAlerting || !query.range) {
    return false;
  }

  return true;
}

function getQueryTypeValue(query) {
  return query.range && query.instant ? 'both' : query.instant ? 'instant' : 'range';
}

function getCollapsedInfo(query, formatOption, queryType) {
  var _query$interval;

  const items = [];
  items.push(`Legend: ${(0,_PromQueryLegendEditor__WEBPACK_IMPORTED_MODULE_7__.getLegendModeLabel)(query.legendFormat)}`);
  items.push(`Format: ${formatOption}`);
  items.push(`Step: ${(_query$interval = query.interval) !== null && _query$interval !== void 0 ? _query$interval : 'auto'}`);
  items.push(`Type: ${queryType}`);

  if (query.exemplar) {
    items.push(`Exemplars: true`);
  }

  return items;
}

PromQueryBuilderOptions.displayName = 'PromQueryBuilderOptions';

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryCodeEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryCodeEditor": () => (/* binding */ PromQueryCodeEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_PromQueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromQueryEditor.tsx");
/* harmony import */ var _components_PromQueryField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/PromQueryField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function PromQueryCodeEditor({
  query,
  datasource,
  range,
  onRunQuery,
  onChange,
  data,
  app
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_PromQueryField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      datasource: datasource,
      query: query,
      range: range,
      onRunQuery: onRunQuery,
      onChange: onChange,
      history: [],
      data: data,
      "data-testid": _components_PromQueryEditor__WEBPACK_IMPORTED_MODULE_3__.testIds.editor,
      app: app
    })
  });
}

const getStyles = theme => {
  return {
    // This wrapper styling can be removed after the old PromQueryEditor is removed.
    // This is removing margin bottom on the old legacy inline form styles
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      .gf-form {
        margin-bottom: 0;
      }
    `
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryEditorSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryEditorSelector": () => (/* binding */ PromQueryEditorSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PromQueryModeller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
/* harmony import */ var _parsing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/parsing.ts");
/* harmony import */ var _shared_FeedbackLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/FeedbackLink.tsx");
/* harmony import */ var _shared_QueryEditorModeToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryEditorModeToggle.tsx");
/* harmony import */ var _shared_QueryHeaderSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryHeaderSwitch.tsx");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/types.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/state.ts");
/* harmony import */ var _PromQueryBuilderContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilderContainer.tsx");
/* harmony import */ var _PromQueryBuilderExplained__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilderExplained.tsx");
/* harmony import */ var _PromQueryBuilderOptions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryBuilderOptions.tsx");
/* harmony import */ var _PromQueryCodeEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryCodeEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _FeedbackLink, _FlexItem, _Space;




















const PromQueryEditorSelector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(props => {
  const {
    onChange,
    onRunQuery,
    data,
    app
  } = props;
  const [parseModalOpen, setParseModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [dataIsStale, setDataIsStale] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const query = (0,_state__WEBPACK_IMPORTED_MODULE_11__.getQueryWithDefaults)(props.query, app);
  const [rawQuery, setRawQuery] = (0,_state__WEBPACK_IMPORTED_MODULE_11__.useRawQuery)(); // This should be filled in from the defaults by now.

  const editorMode = query.editorMode;
  const onEditorModeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newMetricEditorMode => {
    var _query$editorMode;

    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)('user_grafana_prometheus_editor_mode_clicked', {
      newEditor: newMetricEditorMode,
      previousEditor: (_query$editorMode = query.editorMode) !== null && _query$editorMode !== void 0 ? _query$editorMode : '',
      newQuery: !query.expr,
      app: app !== null && app !== void 0 ? app : ''
    });

    if (newMetricEditorMode === _shared_types__WEBPACK_IMPORTED_MODULE_10__.QueryEditorMode.Builder) {
      const result = (0,_parsing__WEBPACK_IMPORTED_MODULE_6__.buildVisualQueryFromString)(query.expr || ''); // If there are errors, give user a chance to decide if they want to go to builder as that can loose some data.

      if (result.errors.length) {
        setParseModalOpen(true);
        return;
      }
    }

    (0,_state__WEBPACK_IMPORTED_MODULE_11__.changeEditorMode)(query, newMetricEditorMode, onChange);
  }, [onChange, query, app]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setDataIsStale(false);
  }, [data]);

  const onQueryPreviewChange = event => {
    const isEnabled = event.currentTarget.checked;
    setRawQuery(isEnabled);
  };

  const onChangeInternal = query => {
    setDataIsStale(true);
    onChange(query);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, {
      isOpen: parseModalOpen,
      title: "Query parsing",
      body: "There were errors while trying to parse the query. Continuing to visual builder may loose some parts of the query.",
      confirmText: "Continue",
      onConfirm: () => {
        (0,_state__WEBPACK_IMPORTED_MODULE_11__.changeEditorMode)(query, _shared_types__WEBPACK_IMPORTED_MODULE_10__.QueryEditorMode.Builder, onChange);
        setParseModalOpen(false);
      },
      onDismiss: () => setParseModalOpen(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorHeader, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.InlineSelect, {
        value: null,
        placeholder: "Query patterns",
        allowCustomValue: true,
        onChange: ({
          value
        }) => {
          // TODO: Bit convoluted as we don't have access to visualQuery model here. Maybe would make sense to
          //  move it inside the editor?
          const result = (0,_parsing__WEBPACK_IMPORTED_MODULE_6__.buildVisualQueryFromString)(query.expr || '');
          result.query.operations = value === null || value === void 0 ? void 0 : value.operations;
          onChange(Object.assign({}, query, {
            expr: _PromQueryModeller__WEBPACK_IMPORTED_MODULE_5__.promQueryModeller.renderQuery(result.query)
          }));
        },
        options: _PromQueryModeller__WEBPACK_IMPORTED_MODULE_5__.promQueryModeller.getQueryPatterns().map(x => ({
          label: x.name,
          value: x
        }))
      }), editorMode === _shared_types__WEBPACK_IMPORTED_MODULE_10__.QueryEditorMode.Builder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_shared_QueryHeaderSwitch__WEBPACK_IMPORTED_MODULE_9__.QueryHeaderSwitch, {
          label: "Raw query",
          value: rawQuery,
          onChange: onQueryPreviewChange
        }), _FeedbackLink || (_FeedbackLink = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_shared_FeedbackLink__WEBPACK_IMPORTED_MODULE_7__.FeedbackLink, {
          feedbackUrl: "https://github.com/grafana/grafana/discussions/47693"
        }))]
      }), _FlexItem || (_FlexItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
        grow: 1
      })), app !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CoreApp.Explore && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: dataIsStale ? 'primary' : 'secondary',
        size: "sm",
        onClick: onRunQuery,
        icon: (data === null || data === void 0 ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading ? 'fa fa-spinner' : undefined,
        disabled: (data === null || data === void 0 ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading,
        children: "Run queries"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_shared_QueryEditorModeToggle__WEBPACK_IMPORTED_MODULE_8__.QueryEditorModeToggle, {
        mode: editorMode,
        onChange: onEditorModeChange
      })]
    }), _Space || (_Space = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Space, {
      v: 0.5
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorRows, {
      children: [editorMode === _shared_types__WEBPACK_IMPORTED_MODULE_10__.QueryEditorMode.Code && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_PromQueryCodeEditor__WEBPACK_IMPORTED_MODULE_15__.PromQueryCodeEditor, Object.assign({}, props)), editorMode === _shared_types__WEBPACK_IMPORTED_MODULE_10__.QueryEditorMode.Builder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_PromQueryBuilderContainer__WEBPACK_IMPORTED_MODULE_12__.PromQueryBuilderContainer, {
        query: query,
        datasource: props.datasource,
        onChange: onChangeInternal,
        onRunQuery: props.onRunQuery,
        data: data,
        showRawQuery: rawQuery
      }), editorMode === _shared_types__WEBPACK_IMPORTED_MODULE_10__.QueryEditorMode.Explain && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_PromQueryBuilderExplained__WEBPACK_IMPORTED_MODULE_13__.PromQueryBuilderExplained, {
        query: query.expr
      }), editorMode !== _shared_types__WEBPACK_IMPORTED_MODULE_10__.QueryEditorMode.Explain && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_PromQueryBuilderOptions__WEBPACK_IMPORTED_MODULE_14__.PromQueryBuilderOptions, {
        query: query,
        app: props.app,
        onChange: onChange,
        onRunQuery: onRunQuery
      })]
    })]
  });
});
PromQueryEditorSelector.displayName = 'PromQueryEditorSelector';

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/PromQueryLegendEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromQueryLegendEditor": () => (/* binding */ PromQueryLegendEditor),
/* harmony export */   "getLegendModeLabel": () => (/* binding */ getLegendModeLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const legendModeOptions = [{
  label: 'Auto',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Auto,
  description: 'Only includes unique labels'
}, {
  label: 'Verbose',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Verbose,
  description: 'All label names and values'
}, {
  label: 'Custom',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Custom,
  description: 'Provide a naming template'
}];
/**
 * Tests for this component are on the parent level (PromQueryBuilderOptions).
 */

const PromQueryLegendEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(({
  legendFormat,
  onChange,
  onRunQuery
}) => {
  const mode = getLegendMode(legendFormat);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onLegendFormatChanged = evt => {
    let newFormat = evt.currentTarget.value;

    if (newFormat.length === 0) {
      newFormat = _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Auto;
    }

    if (newFormat !== legendFormat) {
      onChange(newFormat);
      onRunQuery();
    }
  };

  const onLegendModeChanged = value => {
    switch (value.value) {
      case _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Auto:
        onChange(_types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Auto);
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Custom:
        onChange('{{label_name}}');
        setTimeout(() => {
          var _inputRef$current, _inputRef$current2;

          (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
          (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.setSelectionRange(2, 12, 'forward');
        }, 10);
        break;

      case _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Verbose:
        onChange('');
        break;
    }

    onRunQuery();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
    label: "Legend",
    tooltip: "Series name override or template. Ex. {{hostname}} will be replaced with label value for hostname.",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [mode === _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Custom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AutoSizeInput, {
        id: "legendFormat",
        minWidth: 22,
        placeholder: "auto",
        defaultValue: legendFormat,
        onCommitChange: onLegendFormatChanged,
        ref: inputRef
      }), mode !== _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Custom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
        inputId: "legend.mode",
        isSearchable: false,
        placeholder: "Select legend mode",
        options: legendModeOptions,
        width: 22,
        onChange: onLegendModeChanged,
        value: legendModeOptions.find(x => x.value === mode)
      })]
    })
  });
});
PromQueryLegendEditor.displayName = 'PromQueryLegendEditor';

function getLegendMode(legendFormat) {
  // This special value means the new smart minimal series naming
  if (legendFormat === _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Auto) {
    return _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Auto;
  } // Missing or empty legend format is the old verbose behavior


  if (legendFormat == null || legendFormat === '') {
    return _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Verbose;
  }

  return _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Custom;
}

function getLegendModeLabel(legendFormat) {
  const mode = getLegendMode(legendFormat);

  if (mode !== _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Custom) {
    var _legendModeOptions$fi;

    return (_legendModeOptions$fi = legendModeOptions.find(x => x.value === mode)) === null || _legendModeOptions$fi === void 0 ? void 0 : _legendModeOptions$fi.label;
  }

  return legendFormat;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/QueryPreview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryPreview": () => (/* binding */ QueryPreview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _promql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var _shared_RawQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/RawQuery.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function QueryPreview({
  query
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorFieldGroup, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_1__.EditorField, {
        label: "Raw query",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_RawQuery__WEBPACK_IMPORTED_MODULE_3__.RawQuery, {
          query: query,
          lang: {
            grammar: _promql__WEBPACK_IMPORTED_MODULE_2__["default"],
            name: 'promql'
          }
        })
      })
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/operations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOperationWithRangeVector": () => (/* binding */ addOperationWithRangeVector),
/* harmony export */   "createFunction": () => (/* binding */ createFunction),
/* harmony export */   "createRangeFunction": () => (/* binding */ createRangeFunction),
/* harmony export */   "getOperationDefinitions": () => (/* binding */ getOperationDefinitions),
/* harmony export */   "operationWithRangeVectorRenderer": () => (/* binding */ operationWithRangeVectorRenderer)
/* harmony export */ });
/* harmony import */ var _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/binaryScalarOperations.ts");
/* harmony import */ var _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/LabelParamEditor.tsx");
/* harmony import */ var _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");




function getOperationDefinitions() {
  const list = [{
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.HistogramQuantile,
    name: 'Histogram quantile',
    params: [{
      name: 'Quantile',
      type: 'number',
      options: [0.99, 0.95, 0.9, 0.75, 0.5, 0.25]
    }],
    defaultParams: [0.9],
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Functions,
    renderer: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.functionRendererLeft,
    addOperationHandler: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.defaultAddOperationHandler
  }, {
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.LabelReplace,
    name: 'Label replace',
    params: [{
      name: 'Destination label',
      type: 'string'
    }, {
      name: 'Replacement',
      type: 'string'
    }, {
      name: 'Source label',
      type: 'string'
    }, {
      name: 'Regex',
      type: 'string'
    }],
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Functions,
    defaultParams: ['', '$1', '', '(.*)'],
    renderer: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.functionRendererRight,
    addOperationHandler: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.defaultAddOperationHandler
  }, {
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Ln,
    name: 'Ln',
    params: [],
    defaultParams: [],
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Functions,
    renderer: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.functionRendererLeft,
    addOperationHandler: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.defaultAddOperationHandler
  }, createRangeFunction(_types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Changes), createRangeFunction(_types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Rate, true), createRangeFunction(_types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Irate), createRangeFunction(_types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Increase, true), createRangeFunction(_types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Idelta), createRangeFunction(_types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Delta), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.HoltWinters,
    params: [(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getRangeVectorParamDef)(), {
      name: 'Smoothing Factor',
      type: 'number'
    }, {
      name: 'Trend Factor',
      type: 'number'
    }],
    defaultParams: ['$__interval', 0.5, 0.5],
    alternativesKey: 'range function',
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.RangeFunctions,
    renderer: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.rangeRendererRightWithParams,
    addOperationHandler: addOperationWithRangeVector,
    changeTypeHandler: operationTypeChangedHandlerForRangeFunction
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.PredictLinear,
    params: [(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getRangeVectorParamDef)(), {
      name: 'Seconds from now',
      type: 'number'
    }],
    defaultParams: ['$__interval', 60],
    alternativesKey: 'range function',
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.RangeFunctions,
    renderer: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.rangeRendererRightWithParams,
    addOperationHandler: addOperationWithRangeVector,
    changeTypeHandler: operationTypeChangedHandlerForRangeFunction
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.QuantileOverTime,
    params: [(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getRangeVectorParamDef)(), {
      name: 'Quantile',
      type: 'number'
    }],
    defaultParams: ['$__interval', 0.5],
    alternativesKey: 'overtime function',
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.RangeFunctions,
    renderer: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.rangeRendererLeftWithParams,
    addOperationHandler: addOperationWithRangeVector,
    changeTypeHandler: operationTypeChangedHandlerForRangeFunction
  }), ..._binaryScalarOperations__WEBPACK_IMPORTED_MODULE_0__.binaryScalarOperations, {
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.NestedQuery,
    name: 'Binary operation with query',
    params: [],
    defaultParams: [],
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.BinaryOps,
    renderer: (model, def, innerExpr) => innerExpr,
    addOperationHandler: addNestedQueryHandler
  }, createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Absent
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Acos,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Acosh,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Asin,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Asinh,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Atan,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Atanh,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Ceil
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Clamp,
    name: 'Clamp',
    params: [{
      name: 'Minimum Scalar',
      type: 'number'
    }, {
      name: 'Maximum Scalar',
      type: 'number'
    }],
    defaultParams: [1, 1]
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.ClampMax,
    params: [{
      name: 'Maximum Scalar',
      type: 'number'
    }],
    defaultParams: [1]
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.ClampMin,
    params: [{
      name: 'Minimum Scalar',
      type: 'number'
    }],
    defaultParams: [1]
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Cos,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Cosh,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.DayOfMonth,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Time
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.DayOfWeek,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Time
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.DaysInMonth,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Time
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Deg
  }), createRangeFunction(_types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Deriv), //
  createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Exp
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Floor
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Group
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Hour
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.LabelJoin,
    params: [{
      name: 'Destination Label',
      type: 'string',
      editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_1__.LabelParamEditor
    }, {
      name: 'Separator',
      type: 'string'
    }, {
      name: 'Source Label',
      type: 'string',
      restParam: true,
      optional: true,
      editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_1__.LabelParamEditor
    }],
    defaultParams: ['', ',', ''],
    renderer: labelJoinRenderer,
    addOperationHandler: labelJoinAddOperationHandler
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Log10
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Log2
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Minute
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Month
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Pi,
    renderer: model => `${model.id}()`
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Quantile,
    params: [{
      name: 'Value',
      type: 'number'
    }],
    defaultParams: [1],
    renderer: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.functionRendererLeft
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Rad
  }), createRangeFunction(_types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Resets), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Round,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Functions,
    params: [{
      name: 'To Nearest',
      type: 'number'
    }],
    defaultParams: [1]
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Scalar
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Sgn
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Sin,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Sinh,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Sort
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.SortDesc
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Sqrt
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Stddev
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Tan,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Tanh,
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Trigonometric
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Time,
    renderer: model => `${model.id}()`
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Timestamp
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Vector,
    params: [{
      name: 'Value',
      type: 'number'
    }],
    defaultParams: [1],
    renderer: model => `${model.id}(${model.params[0]})`
  }), createFunction({
    id: _types__WEBPACK_IMPORTED_MODULE_3__.PromOperationId.Year
  })];
  return list;
}
function createFunction(definition) {
  var _definition$name, _definition$params, _definition$defaultPa, _definition$category, _definition$renderer, _definition$addOperat;

  return Object.assign({}, definition, {
    id: definition.id,
    name: (_definition$name = definition.name) !== null && _definition$name !== void 0 ? _definition$name : (0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getPromAndLokiOperationDisplayName)(definition.id),
    params: (_definition$params = definition.params) !== null && _definition$params !== void 0 ? _definition$params : [],
    defaultParams: (_definition$defaultPa = definition.defaultParams) !== null && _definition$defaultPa !== void 0 ? _definition$defaultPa : [],
    category: (_definition$category = definition.category) !== null && _definition$category !== void 0 ? _definition$category : _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Functions,
    renderer: (_definition$renderer = definition.renderer) !== null && _definition$renderer !== void 0 ? _definition$renderer : definition.params ? _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.functionRendererRight : _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.functionRendererLeft,
    addOperationHandler: (_definition$addOperat = definition.addOperationHandler) !== null && _definition$addOperat !== void 0 ? _definition$addOperat : _shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.defaultAddOperationHandler
  });
}
function createRangeFunction(name, withRateInterval = false) {
  return {
    id: name,
    name: (0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getPromAndLokiOperationDisplayName)(name),
    params: [(0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_2__.getRangeVectorParamDef)(withRateInterval)],
    defaultParams: [withRateInterval ? '$__rate_interval' : '$__interval'],
    alternativesKey: 'range function',
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.RangeFunctions,
    renderer: operationWithRangeVectorRenderer,
    addOperationHandler: addOperationWithRangeVector,
    changeTypeHandler: operationTypeChangedHandlerForRangeFunction
  };
}

function operationTypeChangedHandlerForRangeFunction(operation, newDef) {
  // validate current parameter
  if (operation.params[0] === '$__rate_interval' && newDef.defaultParams[0] !== '$__rate_interval') {
    operation.params = newDef.defaultParams;
  } else if (operation.params[0] === '$__interval' && newDef.defaultParams[0] !== '$__interval') {
    operation.params = newDef.defaultParams;
  }

  return operation;
}

function operationWithRangeVectorRenderer(model, def, innerExpr) {
  var _, _model$params;

  let rangeVector = (_ = ((_model$params = model.params) !== null && _model$params !== void 0 ? _model$params : [])[0]) !== null && _ !== void 0 ? _ : '5m';
  return `${def.id}(${innerExpr}[${rangeVector}])`;
}
/**
 * Since there can only be one operation with range vector this will replace the current one (if one was added )
 */

function addOperationWithRangeVector(def, query, modeller) {
  const newOperation = {
    id: def.id,
    params: def.defaultParams
  };

  if (query.operations.length > 0) {
    // If operation exists it has to be in the registry so no point to check if it was found
    const firstOp = modeller.getOperationDef(query.operations[0].id);

    if (firstOp.addOperationHandler === addOperationWithRangeVector) {
      return Object.assign({}, query, {
        operations: [newOperation, ...query.operations.slice(1)]
      });
    }
  }

  return Object.assign({}, query, {
    operations: [newOperation, ...query.operations]
  });
}

function addNestedQueryHandler(def, query) {
  var _query$binaryQueries;

  return Object.assign({}, query, {
    binaryQueries: [...((_query$binaryQueries = query.binaryQueries) !== null && _query$binaryQueries !== void 0 ? _query$binaryQueries : []), {
      operator: '/',
      query
    }]
  });
}

function labelJoinRenderer(model, def, innerExpr) {
  if (typeof model.params[1] !== 'string') {
    throw 'The separator must be a string';
  }

  const separator = `"${model.params[1]}"`;
  return `${model.id}(${innerExpr}, "${model.params[0]}", ${separator}, "${model.params.slice(2).join(separator)}")`;
}

function labelJoinAddOperationHandler(def, query) {
  const newOperation = {
    id: def.id,
    params: def.defaultParams
  };
  return Object.assign({}, query, {
    operations: [...query.operations, newOperation]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/parsing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildVisualQueryFromString": () => (/* binding */ buildVisualQueryFromString),
/* harmony export */   "handleExpression": () => (/* binding */ handleExpression)
/* harmony export */ });
/* harmony import */ var lezer_promql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");
/* harmony import */ var _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/binaryScalarOperations.ts");
/* harmony import */ var _shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/parsingUtils.ts");




/**
 * Parses a PromQL query into a visual query model.
 *
 * It traverses the tree and uses sort of state machine to update the query model. The query model is modified
 * during the traversal and sent to each handler as context.
 *
 * @param expr
 */
function buildVisualQueryFromString(expr) {
  const replacedExpr = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.replaceVariables)(expr);
  const tree = lezer_promql__WEBPACK_IMPORTED_MODULE_0__.parser.parse(replacedExpr);
  const node = tree.topNode; // This will be modified in the handlers.

  const visQuery = {
    metric: '',
    labels: [],
    operations: []
  };
  const context = {
    query: visQuery,
    errors: []
  };

  try {
    handleExpression(replacedExpr, node, context);
  } catch (err) {
    // Not ideal to log it here, but otherwise we would lose the stack trace.
    console.error(err);

    if (err instanceof Error) {
      context.errors.push({
        text: err.message
      });
    }
  } // If we have empty query, we want to reset errors


  if (isEmptyQuery(context.query)) {
    context.errors = [];
  }

  return context;
}

/**
 * Handler for default state. It will traverse the tree and call the appropriate handler for each node. The node
 * handled here does not necessarily need to be of type == Expr.
 * @param expr
 * @param node
 * @param context
 */
function handleExpression(expr, node, context) {
  const visQuery = context.query;

  switch (node.name) {
    case 'MetricIdentifier':
      {
        // Expectation is that there is only one of those per query.
        visQuery.metric = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, node);
        break;
      }

    case 'LabelMatcher':
      {
        // Same as MetricIdentifier should be just one per query.
        visQuery.labels.push(getLabel(expr, node));
        const err = node.getChild(_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.ErrorName);

        if (err) {
          context.errors.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.makeError)(expr, err));
        }

        break;
      }

    case 'FunctionCall':
      {
        handleFunction(expr, node, context);
        break;
      }

    case 'AggregateExpr':
      {
        handleAggregation(expr, node, context);
        break;
      }

    case 'BinaryExpr':
      {
        handleBinary(expr, node, context);
        break;
      }

    case _shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.ErrorName:
      {
        if (isIntervalVariableError(node)) {
          break;
        }

        context.errors.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.makeError)(expr, node));
        break;
      }

    default:
      {
        if (node.name === 'ParenExpr') {
          // We don't support parenthesis in the query to group expressions. We just report error but go on with the
          // parsing.
          context.errors.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.makeError)(expr, node));
        } // Any other nodes we just ignore and go to it's children. This should be fine as there are lot's of wrapper
        // nodes that can be skipped.
        // TODO: there are probably cases where we will just skip nodes we don't support and we should be able to
        //  detect those and report back.


        let child = node.firstChild;

        while (child) {
          handleExpression(expr, child, context);
          child = child.nextSibling;
        }
      }
  }
}

function isIntervalVariableError(node) {
  var _node$prevSibling, _node$prevSibling2, _node$prevSibling2$fi;

  return ((_node$prevSibling = node.prevSibling) === null || _node$prevSibling === void 0 ? void 0 : _node$prevSibling.name) === 'Expr' && ((_node$prevSibling2 = node.prevSibling) === null || _node$prevSibling2 === void 0 ? void 0 : (_node$prevSibling2$fi = _node$prevSibling2.firstChild) === null || _node$prevSibling2$fi === void 0 ? void 0 : _node$prevSibling2$fi.name) === 'VectorSelector';
}

function getLabel(expr, node) {
  const label = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, node.getChild('LabelName'));
  const op = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, node.getChild('MatchOp'));
  const value = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, node.getChild('StringLiteral')).replace(/"/g, '');
  return {
    label,
    op,
    value
  };
}

const rangeFunctions = ['changes', 'rate', 'irate', 'increase', 'delta'];
/**
 * Handle function call which is usually and identifier and its body > arguments.
 * @param expr
 * @param node
 * @param context
 */

function handleFunction(expr, node, context) {
  const visQuery = context.query;
  const nameNode = node.getChild('FunctionIdentifier');
  const funcName = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, nameNode);
  const body = node.getChild('FunctionCallBody');
  const callArgs = body.getChild('FunctionCallArgs');
  const params = [];
  let interval = ''; // This is a bit of a shortcut to get the interval argument. Reasons are
  // - interval is not part of the function args per promQL grammar but we model it as argument for the function in
  //   the query model.
  // - it is easier to handle template variables this way as template variable is an error for the parser

  if (rangeFunctions.includes(funcName) || funcName.endsWith('_over_time')) {
    let match = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, node).match(/\[(.+)\]/);

    if (match !== null && match !== void 0 && match[1]) {
      interval = match[1];
      params.push(match[1]);
    }
  }

  const op = {
    id: funcName,
    params
  }; // We unshift operations to keep the more natural order that we want to have in the visual query editor.

  visQuery.operations.unshift(op);

  if (callArgs) {
    if ((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, callArgs) === interval + ']') {
      // This is a special case where we have a function with a single argument and it is the interval.
      // This happens when you start adding operations in query builder and did not set a metric yet.
      return;
    }

    updateFunctionArgs(expr, callArgs, context, op);
  }
}
/**
 * Handle aggregation as they are distinct type from other functions.
 * @param expr
 * @param node
 * @param context
 */


function handleAggregation(expr, node, context) {
  const visQuery = context.query;
  const nameNode = node.getChild('AggregateOp');
  let funcName = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, nameNode);
  const modifier = node.getChild('AggregateModifier');
  const labels = [];

  if (modifier) {
    const byModifier = modifier.getChild(`By`);

    if (byModifier && funcName) {
      funcName = `__${funcName}_by`;
    }

    const withoutModifier = modifier.getChild(`Without`);

    if (withoutModifier) {
      funcName = `__${funcName}_without`;
    }

    labels.push(...(0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getAllByType)(expr, modifier, 'GroupingLabel'));
  }

  const body = node.getChild('FunctionCallBody');
  const callArgs = body.getChild('FunctionCallArgs');
  const op = {
    id: funcName,
    params: []
  };
  visQuery.operations.unshift(op);
  updateFunctionArgs(expr, callArgs, context, op); // We add labels after params in the visual query editor.

  op.params.push(...labels);
}
/**
 * Handle (probably) all types of arguments that function or aggregation can have.
 *
 *  FunctionCallArgs are nested bit weirdly basically its [firstArg, ...rest] where rest is again FunctionCallArgs so
 *  we cannot just get all the children and iterate them as arguments we have to again recursively traverse through
 *  them.
 *
 * @param expr
 * @param node
 * @param context
 * @param op - We need the operation to add the params to as an additional context.
 */


function updateFunctionArgs(expr, node, context, op) {
  if (!node) {
    return;
  }

  switch (node.name) {
    // In case we have an expression we don't know what kind so we have to look at the child as it can be anything.
    case 'Expr': // FunctionCallArgs are nested bit weirdly as mentioned so we have to go one deeper in this case.

    case 'FunctionCallArgs':
      {
        let child = node.firstChild;

        while (child) {
          updateFunctionArgs(expr, child, context, op);
          child = child.nextSibling;
        }

        break;
      }

    case 'NumberLiteral':
      {
        op.params.push(parseFloat((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, node)));
        break;
      }

    case 'StringLiteral':
      {
        op.params.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, node).replace(/"/g, ''));
        break;
      }

    default:
      {
        // Means we get to something that does not seem like simple function arg and is probably nested query so jump
        // back to main context
        handleExpression(expr, node, context);
      }
  }
}
/**
 * Right now binary expressions can be represented in 2 way in visual query. As additional operation in case it is
 * just operation with scalar or it creates a binaryQuery when it's 2 queries.
 * @param expr
 * @param node
 * @param context
 */


function handleBinary(expr, node, context) {
  const visQuery = context.query;
  const left = node.firstChild;
  const op = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, left.nextSibling);
  const binModifier = getBinaryModifier(expr, node.getChild('BinModifiers'));
  const right = node.lastChild;
  const opDef = _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_1__.binaryScalarOperatorToOperatorName[op];
  const leftNumber = left.getChild('NumberLiteral');
  const rightNumber = right.getChild('NumberLiteral');
  const rightBinary = right.getChild('BinaryExpr');

  if (leftNumber) {// TODO: this should be already handled in case parent is binary expression as it has to be added to parent
    //  if query starts with a number that isn't handled now.
  } else {
    // If this is binary we don't really know if there is a query or just chained scalars. So
    // we have to traverse a bit deeper to know
    handleExpression(expr, left, context);
  }

  if (rightNumber) {
    visQuery.operations.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.makeBinOp)(opDef, expr, right, !!(binModifier !== null && binModifier !== void 0 && binModifier.isBool)));
  } else if (rightBinary) {
    // Due to the way binary ops are parsed we can get a binary operation on the right that starts with a number which
    // is a factor for a current binary operation. So we have to add it as an operation now.
    const leftMostChild = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getLeftMostChild)(right);

    if ((leftMostChild === null || leftMostChild === void 0 ? void 0 : leftMostChild.name) === 'NumberLiteral') {
      visQuery.operations.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.makeBinOp)(opDef, expr, leftMostChild, !!(binModifier !== null && binModifier !== void 0 && binModifier.isBool)));
    } // If we added the first number literal as operation here we still can continue and handle the rest as the first
    // number will be just skipped.


    handleExpression(expr, right, context);
  } else {
    visQuery.binaryQueries = visQuery.binaryQueries || [];
    const binQuery = {
      operator: op,
      query: {
        metric: '',
        labels: [],
        operations: []
      }
    };

    if (binModifier !== null && binModifier !== void 0 && binModifier.isMatcher) {
      binQuery.vectorMatchesType = binModifier.matchType;
      binQuery.vectorMatches = binModifier.matches;
    }

    visQuery.binaryQueries.push(binQuery);
    handleExpression(expr, right, {
      query: binQuery.query,
      errors: context.errors
    });
  }
}

function getBinaryModifier(expr, node) {
  if (!node) {
    return undefined;
  }

  if (node.getChild('Bool')) {
    return {
      isBool: true,
      isMatcher: false
    };
  } else {
    var _matcher$getChild;

    const matcher = node.getChild('OnOrIgnoring');

    if (!matcher) {
      // Not sure what this could be, maybe should be an error.
      return undefined;
    }

    const labels = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__.getString)(expr, (_matcher$getChild = matcher.getChild('GroupingLabels')) === null || _matcher$getChild === void 0 ? void 0 : _matcher$getChild.getChild('GroupingLabelList'));
    return {
      isMatcher: true,
      isBool: false,
      matches: labels,
      matchType: matcher.getChild('On') ? 'on' : 'ignoring'
    };
  }
}

function isEmptyQuery(query) {
  if (query.labels.length === 0 && query.operations.length === 0 && !query.metric) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/FeedbackLink.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackLink": () => (/* binding */ FeedbackLink)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;








function FeedbackLink({
  feedbackUrl
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);

  if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.feedbackLinksEnabled) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    gap: 1,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
      href: feedbackUrl,
      className: styles.link,
      title: "This query builder is new, please let us know how we can improve it",
      target: "_blank",
      rel: "noreferrer noopener",
      onClick: () => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)('grafana_feedback_link_clicked', {
        link: feedbackUrl
      }),
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        name: "comment-alt-message"
      })), " Give feedback"]
    })
  });
}

function getStyles(theme) {
  return {
    link: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize,
      ':hover': {
        color: theme.colors.text.link
      }
    })
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/LabelFilterItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelFilterItem": () => (/* binding */ LabelFilterItem)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function LabelFilterItem({
  item,
  defaultOp,
  onChange,
  onDelete,
  onGetLabelNames,
  onGetLabelValues
}) {
  var _item$op2;

  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});

  const isMultiSelect = () => {
    return item.op === operators[0].label;
  };

  const getSelectOptionsFromString = item => {
    if (item) {
      if (item.indexOf('|') > 0) {
        return item.split('|');
      }

      return [item];
    }

    return [];
  };

  const getOptions = () => {
    const labelValues = state.labelValues ? [...state.labelValues] : [];
    const selectedOptions = getSelectOptionsFromString(item === null || item === void 0 ? void 0 : item.value).map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption); // Remove possible duplicated values

    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)([...selectedOptions, ...labelValues], 'value');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    "data-testid": "prometheus-dimensions-filter-item",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.InputGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
        inputId: "prometheus-dimensions-filter-item-key",
        width: "auto",
        value: item.label ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(item.label) : null,
        allowCustomValue: true,
        onOpenMenu: async () => {
          setState({
            isLoadingLabelNames: true
          });
          const labelNames = await onGetLabelNames(item);
          setState({
            labelNames,
            isLoadingLabelNames: undefined
          });
        },
        isLoading: state.isLoadingLabelNames,
        options: state.labelNames,
        onChange: change => {
          if (change.label) {
            var _item$op;

            onChange(Object.assign({}, item, {
              op: (_item$op = item.op) !== null && _item$op !== void 0 ? _item$op : defaultOp,
              label: change.label
            }));
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
        value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)((_item$op2 = item.op) !== null && _item$op2 !== void 0 ? _item$op2 : defaultOp),
        options: operators,
        width: "auto",
        onChange: change => {
          if (change.value != null) {
            onChange(Object.assign({}, item, {
              op: change.value
            }));
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
        inputId: "prometheus-dimensions-filter-item-value",
        width: "auto",
        value: isMultiSelect() ? getSelectOptionsFromString(item === null || item === void 0 ? void 0 : item.value).map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption) : getSelectOptionsFromString(item === null || item === void 0 ? void 0 : item.value).map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)[0],
        allowCustomValue: true,
        onOpenMenu: async () => {
          setState({
            isLoadingLabelValues: true
          });
          const labelValues = await onGetLabelValues(item);
          setState(Object.assign({}, state, {
            labelValues,
            isLoadingLabelValues: undefined
          }));
        },
        isMulti: isMultiSelect(),
        isLoading: state.isLoadingLabelValues,
        options: getOptions(),
        onChange: change => {
          if (change.value) {
            var _item$op3;

            onChange(Object.assign({}, item, {
              value: change.value,
              op: (_item$op3 = item.op) !== null && _item$op3 !== void 0 ? _item$op3 : defaultOp
            }));
          } else {
            var _item$op4;

            const changes = change.map(change => {
              return change.label;
            }).join('|');
            onChange(Object.assign({}, item, {
              value: changes,
              op: (_item$op4 = item.op) !== null && _item$op4 !== void 0 ? _item$op4 : defaultOp
            }));
          }
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.AccessoryButton, {
        "aria-label": "remove",
        icon: "times",
        variant: "secondary",
        onClick: onDelete
      })]
    })
  });
}
const operators = [{
  label: '=~',
  value: '=~'
}, {
  label: '=',
  value: '='
}, {
  label: '!=',
  value: '!='
}, {
  label: '!~',
  value: '!~'
}];

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/LabelFilters.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelFilters": () => (/* binding */ LabelFilters)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _LabelFilterItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/LabelFilterItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function LabelFilters({
  labelsFilters,
  onChange,
  onGetLabelNames,
  onGetLabelValues,
  error
}) {
  const defaultOp = '=';
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    op: defaultOp
  }]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (labelsFilters.length > 0) {
      setItems(labelsFilters);
    } else {
      setItems([{
        op: defaultOp
      }]);
    }
  }, [labelsFilters]);

  const onLabelsChange = newItems => {
    setItems(newItems); // Extract full label filters with both label & value

    const newLabels = newItems.filter(x => x.label != null && x.value != null);

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(newLabels, labelsFilters)) {
      onChange(newLabels);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorFieldGroup, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorField, {
      label: "Labels",
      error: error,
      invalid: !!error,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.EditorList, {
        items: items,
        onChange: onLabelsChange,
        renderItem: (item, onChangeItem, onDelete) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_LabelFilterItem__WEBPACK_IMPORTED_MODULE_3__.LabelFilterItem, {
          item: item,
          defaultOp: defaultOp,
          onChange: onChangeItem,
          onDelete: onDelete,
          onGetLabelNames: onGetLabelNames,
          onGetLabelValues: onGetLabelValues
        })
      })
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/LokiAndPromQueryModellerBase.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokiAndPromQueryModellerBase": () => (/* binding */ LokiAndPromQueryModellerBase)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class LokiAndPromQueryModellerBase {
  constructor(getOperations) {
    _defineProperty(this, "operationsRegisty", void 0);

    _defineProperty(this, "categories", []);

    this.operationsRegisty = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.Registry(getOperations);
  }

  setOperationCategories(categories) {
    this.categories = categories;
  }

  getOperationsForCategory(category) {
    return this.operationsRegisty.list().filter(op => op.category === category && !op.hideFromList);
  }

  getAlternativeOperations(key) {
    return this.operationsRegisty.list().filter(op => op.alternativesKey === key);
  }

  getCategories() {
    return this.categories;
  }

  getOperationDef(id) {
    return this.operationsRegisty.getIfExists(id);
  }

  renderOperations(queryString, operations) {
    for (const operation of operations) {
      const def = this.operationsRegisty.getIfExists(operation.id);

      if (!def) {
        throw new Error(`Could not find operation ${operation.id} in the registry`);
      }

      queryString = def.renderer(operation, def, queryString);
    }

    return queryString;
  }

  renderBinaryQueries(queryString, binaryQueries) {
    if (binaryQueries) {
      for (const binQuery of binaryQueries) {
        queryString = `${this.renderBinaryQuery(queryString, binQuery)}`;
      }
    }

    return queryString;
  }

  renderBinaryQuery(leftOperand, binaryQuery) {
    let result = leftOperand + ` ${binaryQuery.operator} `;

    if (binaryQuery.vectorMatches) {
      result += `${binaryQuery.vectorMatchesType}(${binaryQuery.vectorMatches}) `;
    }

    return result + this.renderQuery(binaryQuery.query, true);
  }

  renderLabels(labels) {
    if (labels.length === 0) {
      return '';
    }

    let expr = '{';

    for (const filter of labels) {
      if (expr !== '{') {
        expr += ', ';
      }

      expr += `${filter.label}${filter.op}"${filter.value}"`;
    }

    return expr + `}`;
  }

  renderQuery(query, nested) {
    var _query$metric, _query$binaryQueries, _query$binaryQueries2;

    let queryString = `${(_query$metric = query.metric) !== null && _query$metric !== void 0 ? _query$metric : ''}${this.renderLabels(query.labels)}`;
    queryString = this.renderOperations(queryString, query.operations);

    if (!nested && this.hasBinaryOp(query) && Boolean((_query$binaryQueries = query.binaryQueries) === null || _query$binaryQueries === void 0 ? void 0 : _query$binaryQueries.length)) {
      queryString = `(${queryString})`;
    }

    queryString = this.renderBinaryQueries(queryString, query.binaryQueries);

    if (nested && (this.hasBinaryOp(query) || Boolean((_query$binaryQueries2 = query.binaryQueries) === null || _query$binaryQueries2 === void 0 ? void 0 : _query$binaryQueries2.length))) {
      queryString = `(${queryString})`;
    }

    return queryString;
  }

  hasBinaryOp(query) {
    return query.operations.find(op => {
      const def = this.getOperationDef(op.id);
      return (def === null || def === void 0 ? void 0 : def.category) === _types__WEBPACK_IMPORTED_MODULE_1__.PromVisualQueryOperationCategory.BinaryOps;
    }) !== undefined;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationEditor": () => (/* binding */ OperationEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _OperationHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationHeader.tsx");
/* harmony import */ var _OperationParamEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationParamEditor.tsx");
/* harmony import */ var _operationUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










function OperationEditor({
  operation,
  index,
  onRemove,
  onChange,
  onRunQuery,
  queryModeller,
  query,
  datasource,
  highlight
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const def = queryModeller.getOperationDef(operation.id);
  const shouldHighlight = useHighlight(highlight);

  if (!def) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      children: ["Operation ", operation.id, " not found"]
    });
  }

  const onParamValueChanged = (paramIdx, value) => {
    const update = Object.assign({}, operation, {
      params: [...operation.params]
    });
    update.params[paramIdx] = value;
    callParamChangedThenOnChange(def, update, index, paramIdx, onChange);
  };

  const onAddRestParam = () => {
    const update = Object.assign({}, operation, {
      params: [...operation.params, '']
    });
    callParamChangedThenOnChange(def, update, index, operation.params.length, onChange);
  };

  const onRemoveRestParam = paramIdx => {
    const update = Object.assign({}, operation, {
      params: [...operation.params.slice(0, paramIdx), ...operation.params.slice(paramIdx + 1)]
    });
    callParamChangedThenOnChange(def, update, index, paramIdx, onChange);
  };

  const operationElements = [];

  for (let paramIndex = 0; paramIndex < operation.params.length; paramIndex++) {
    const paramDef = def.params[Math.min(def.params.length - 1, paramIndex)];
    const Editor = (0,_OperationParamEditor__WEBPACK_IMPORTED_MODULE_5__.getOperationParamEditor)(paramDef);
    operationElements.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.paramRow,
      children: [!paramDef.hideName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.paramName,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
          htmlFor: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_6__.getOperationParamId)(index, paramIndex),
          children: paramDef.name
        }), paramDef.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          placement: "top",
          content: paramDef.description,
          theme: "info",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "info-circle",
            size: "sm",
            className: styles.infoIcon
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: styles.paramValue,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
          gap: 0.5,
          direction: "row",
          alignItems: "center",
          wrap: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Editor, {
            index: paramIndex,
            paramDef: paramDef,
            value: operation.params[paramIndex],
            operation: operation,
            operationIndex: index,
            onChange: onParamValueChanged,
            onRunQuery: onRunQuery,
            query: query,
            datasource: datasource
          }), paramDef.restParam && (operation.params.length > def.params.length || paramDef.optional) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            "data-testid": `operations.${index}.remove-rest-param`,
            size: "sm",
            fill: "text",
            icon: "times",
            variant: "secondary",
            title: `Remove ${paramDef.name}`,
            onClick: () => onRemoveRestParam(paramIndex)
          })]
        })
      })]
    }, `${paramIndex}-1`));
  } // Handle adding button for rest params


  let restParam;

  if (def.params.length > 0) {
    const lastParamDef = def.params[def.params.length - 1];

    if (lastParamDef.restParam) {
      restParam = renderAddRestParamButton(lastParamDef, onAddRestParam, index, operation.params.length, styles);
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_8__.Draggable, {
    draggableId: `operation-${index}`,
    index: index,
    children: provided => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", Object.assign({
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.card, shouldHighlight && styles.cardHighlight),
      ref: provided.innerRef
    }, provided.draggableProps, {
      "data-testid": `operations.${index}.wrapper`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_OperationHeader__WEBPACK_IMPORTED_MODULE_4__.OperationHeader, {
        operation: operation,
        dragHandleProps: provided.dragHandleProps,
        def: def,
        index: index,
        onChange: onChange,
        onRemove: onRemove,
        queryModeller: queryModeller
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: styles.body,
        children: operationElements
      }), restParam, index < query.operations.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.arrow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: styles.arrowLine
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: styles.arrowArrow
        })]
      })]
    }))
  });
}
/**
 * When highlight is switched on makes sure it is switched of right away, so we just flash the highlight and then fade
 * out.
 * @param highlight
 */

function useHighlight(highlight) {
  const [keepHighlight, setKeepHighlight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let t;

    if (highlight) {
      t = setTimeout(() => {
        setKeepHighlight(false);
      }, 1);
    } else {
      setKeepHighlight(true);
    }

    return () => clearTimeout(t);
  }, [highlight]);
  return keepHighlight && highlight;
}

function renderAddRestParamButton(paramDef, onAddRestParam, operationIndex, paramIndex, styles) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: styles.restParam,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      size: "sm",
      icon: "plus",
      title: `Add ${paramDef.name}`,
      variant: "secondary",
      onClick: onAddRestParam,
      "data-testid": `operations.${operationIndex}.add-rest-param`,
      children: paramDef.name
    })
  }, `${paramIndex}-2`);
}

function callParamChangedThenOnChange(def, operation, operationIndex, paramIndex, onChange) {
  if (def.paramChangedHandler) {
    onChange(operationIndex, def.paramChangedHandler(paramIndex, operation, def));
  } else {
    onChange(operationIndex, operation);
  }
}

const getStyles = theme => {
  return {
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      background: theme.colors.background.primary,
      border: `1px solid ${theme.colors.border.medium}`,
      display: 'flex',
      flexDirection: 'column',
      cursor: 'grab',
      borderRadius: theme.shape.borderRadius(1),
      marginBottom: theme.spacing(1),
      position: 'relative',
      transition: 'all 1s ease-in 0s'
    }),
    cardHighlight: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      boxShadow: `0px 0px 4px 0px ${theme.colors.primary.border}`,
      border: `1px solid ${theme.colors.primary.border}`
    }),
    infoIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginLeft: theme.spacing(0.5),
      color: theme.colors.text.secondary,
      ':hover': {
        color: theme.colors.text.primary
      }
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      margin: theme.spacing(1, 1, 0.5, 1),
      display: 'table'
    }),
    paramRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'paramRow',
      display: 'table-row',
      verticalAlign: 'middle'
    }),
    paramName: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'table-cell',
      padding: theme.spacing(0, 1, 0, 0),
      fontSize: theme.typography.bodySmall.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      verticalAlign: 'middle',
      height: '32px'
    }),
    paramValue: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'paramValue',
      display: 'table-cell',
      verticalAlign: 'middle'
    }),
    restParam: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      padding: theme.spacing(0, 1, 1, 1)
    }),
    arrow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      position: 'absolute',
      top: '0',
      right: '-18px',
      display: 'flex'
    }),
    arrowLine: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      height: '2px',
      width: '8px',
      backgroundColor: theme.colors.border.strong,
      position: 'relative',
      top: '14px'
    }),
    arrowArrow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: 0,
      height: 0,
      borderTop: `5px solid transparent`,
      borderBottom: `5px solid transparent`,
      borderLeft: `7px solid ${theme.colors.border.strong}`,
      position: 'relative',
      top: '10px'
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationExplainedBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationExplainedBox": () => (/* binding */ OperationExplainedBox)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function OperationExplainedBox({
  title,
  stepNumber,
  markdown,
  children
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.box,
    children: [stepNumber !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.stepNumber,
      children: stepNumber
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.boxInner,
      children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.header,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: styles.body,
        children: [markdown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.renderMarkdown)(markdown)
          }
        }), children]
      })]
    })]
  });
}

const getStyles = theme => {
  return {
    box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      background: theme.colors.background.secondary,
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius(),
      position: 'relative'
    }),
    boxInner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginLeft: theme.spacing(4)
    }),
    stepNumber: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontWeight: theme.typography.fontWeightMedium,
      background: theme.colors.secondary.main,
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '10px',
      left: '11px',
      fontSize: theme.typography.bodySmall.fontSize
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      paddingBottom: theme.spacing(0.5),
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamilyMonospace
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      'p:last-child': {
        margin: 0
      },
      a: {
        color: theme.colors.text.link,
        textDecoration: 'underline'
      }
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationHeader": () => (/* binding */ OperationHeader)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _OperationInfoButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationInfoButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _FlexItem;









const OperationHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(({
  operation,
  def,
  index,
  onChange,
  onRemove,
  queryModeller,
  dragHandleProps
}) => {
  var _def$name;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});

  const onToggleSwitcher = () => {
    if (state.isOpen) {
      setState(Object.assign({}, state, {
        isOpen: false
      }));
    } else {
      const alternatives = queryModeller.getAlternativeOperations(def.alternativesKey).map(alt => ({
        label: alt.name,
        value: alt
      }));
      setState({
        isOpen: true,
        alternatives
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: styles.header,
    children: [!state.isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", Object.assign({}, dragHandleProps, {
        children: (_def$name = def.name) !== null && _def$name !== void 0 ? _def$name : def.id
      })), _FlexItem || (_FlexItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.FlexItem, {
        grow: 1
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: `${styles.operationHeaderButtons} operation-header-show-on-hover`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          icon: "angle-down",
          size: "sm",
          onClick: onToggleSwitcher,
          fill: "text",
          variant: "secondary",
          title: "Click to view alternative operations"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_OperationInfoButton__WEBPACK_IMPORTED_MODULE_4__.OperationInfoButton, {
          def: def,
          operation: operation
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          icon: "times",
          size: "sm",
          onClick: () => onRemove(index),
          fill: "text",
          variant: "secondary",
          title: "Remove operation"
        })]
      })]
    }), state.isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.selectWrapper,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
        autoFocus: true,
        openMenuOnFocus: true,
        placeholder: "Replace with",
        options: state.alternatives,
        isOpen: true,
        onCloseMenu: onToggleSwitcher,
        onChange: value => {
          if (value.value) {
            // Operation should exist if it is selectable
            const newDef = queryModeller.getOperationDef(value.value.id);
            let changedOp = Object.assign({}, operation, {
              id: value.value.id
            });
            onChange(index, def.changeTypeHandler ? def.changeTypeHandler(changedOp, newDef) : changedOp);
          }
        }
      })
    })]
  });
});
OperationHeader.displayName = 'OperationHeader';

const getStyles = theme => {
  return {
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      borderBottom: `1px solid ${theme.colors.border.medium}`,
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      display: 'flex',
      alignItems: 'center',
      '&:hover .operation-header-show-on-hover': (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        opacity: 1
      })
    }),
    operationHeaderButtons: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      opacity: 0,
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.short
      })
    }),
    selectWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      paddingRight: theme.spacing(2)
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationInfoButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationInfoButton": () => (/* binding */ OperationInfoButton)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_popper_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-popper-tooltip-virtual-ff0da4b2fd/0/cache/react-popper-tooltip-npm-4.4.1-2214480dbc-58dacdf9bc.zip/node_modules/react-popper-tooltip/dist/esm/react-popper-tooltip.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _FlexItem;










const OperationInfoButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(({
  def,
  operation
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = (0,react_popper_tooltip__WEBPACK_IMPORTED_MODULE_6__.usePopperTooltip)({
    placement: 'top',
    visible: show,
    offset: [0, 16],
    onVisibleChange: setShow,
    interactive: true,
    trigger: ['click']
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
      title: "Click to show description",
      ref: setTriggerRef,
      icon: "info-circle",
      size: "sm",
      variant: "secondary",
      fill: "text"
    }), visible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Portal, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", Object.assign({
        ref: setTooltipRef
      }, getTooltipProps(), {
        className: styles.docBox,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: styles.docBoxHeader,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            children: def.renderer(operation, def, '<expr>')
          }), _FlexItem || (_FlexItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.FlexItem, {
            grow: 1
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            icon: "times",
            onClick: () => setShow(false),
            fill: "text",
            variant: "secondary",
            title: "Remove operation"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: styles.docBoxBody,
          dangerouslySetInnerHTML: {
            __html: getOperationDocs(def, operation)
          }
        })]
      }))
    })]
  });
});
OperationInfoButton.displayName = 'OperationDocs';

const getStyles = theme => {
  return {
    docBox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      overflow: 'hidden',
      background: theme.colors.background.primary,
      border: `1px solid ${theme.colors.border.strong}`,
      boxShadow: theme.shadows.z3,
      maxWidth: '600px',
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius(),
      zIndex: theme.zIndex.tooltip
    }),
    docBoxHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: theme.typography.h5.fontSize,
      fontFamily: theme.typography.fontFamilyMonospace,
      paddingBottom: theme.spacing(1),
      display: 'flex',
      alignItems: 'center'
    }),
    docBoxBody: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      // The markdown paragraph has a marginBottom this removes it
      marginBottom: theme.spacing(-1),
      color: theme.colors.text.secondary
    }),
    signature: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: theme.typography.bodySmall.fontSize,
      fontFamily: theme.typography.fontFamilyMonospace
    }),
    dropdown: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      opacity: 0,
      color: theme.colors.text.secondary
    })
  };
};

function getOperationDocs(def, op) {
  var _def$documentation;

  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.renderMarkdown)(def.explainHandler ? def.explainHandler(op, def) : (_def$documentation = def.documentation) !== null && _def$documentation !== void 0 ? _def$documentation : 'no docs');
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationList": () => (/* binding */ OperationList)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _OperationEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function OperationList({
  query,
  datasource,
  queryModeller,
  onChange,
  onRunQuery
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    operations
  } = query;
  const opsToHighlight = useOperationsHighlight(operations);
  const [cascaderOpen, setCascaderOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onOperationChange = (index, update) => {
    const updatedList = [...operations];
    updatedList.splice(index, 1, update);
    onChange(Object.assign({}, query, {
      operations: updatedList
    }));
  };

  const onRemove = index => {
    const updatedList = [...operations.slice(0, index), ...operations.slice(index + 1)];
    onChange(Object.assign({}, query, {
      operations: updatedList
    }));
  };

  const addOptions = queryModeller.getCategories().map(category => {
    return {
      value: category,
      label: category,
      items: queryModeller.getOperationsForCategory(category).map(operation => ({
        value: operation.id,
        label: operation.name,
        isLeaf: true
      }))
    };
  });

  const onAddOperation = value => {
    const operationDef = queryModeller.getOperationDef(value);

    if (!operationDef) {
      return;
    }

    onChange(operationDef.addOperationHandler(operationDef, query, queryModeller));
    setCascaderOpen(false);
  };

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const updatedList = [...operations];
    const element = updatedList[result.source.index];
    updatedList.splice(result.source.index, 1);
    updatedList.splice(result.destination.index, 0, element);
    onChange(Object.assign({}, query, {
      operations: updatedList
    }));
  };

  const onCascaderBlur = () => {
    setCascaderOpen(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    gap: 1,
    direction: "column",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
      gap: 1,
      children: [operations.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.DragDropContext, {
        onDragEnd: onDragEnd,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.Droppable, {
          droppableId: "sortable-field-mappings",
          direction: "horizontal",
          children: provided => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", Object.assign({
            className: styles.operationList,
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [operations.map((op, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_OperationEditor__WEBPACK_IMPORTED_MODULE_4__.OperationEditor, {
              queryModeller: queryModeller,
              index: index,
              operation: op,
              query: query,
              datasource: datasource,
              onChange: onOperationChange,
              onRemove: onRemove,
              onRunQuery: onRunQuery,
              highlight: opsToHighlight[index]
            }, op.id + index)), provided.placeholder]
          }))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: styles.addButton,
        children: cascaderOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Cascader, {
          options: addOptions,
          onSelect: onAddOperation,
          onBlur: onCascaderBlur,
          autoFocus: true,
          alwaysOpen: true,
          hideActiveLevelLabel: true,
          placeholder: 'Search'
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          icon: 'plus',
          variant: 'secondary',
          onClick: () => setCascaderOpen(true),
          title: 'Add operation',
          children: "Operations"
        })
      })]
    })
  });
}
/**
 * Returns indexes of operations that should be highlighted. We check the diff of operations added but at the same time
 * we want to highlight operations only after the initial render, so we check for mounted state and calculate the diff
 * only after.
 * @param operations
 */

function useOperationsHighlight(operations) {
  const isMounted = (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const prevOperations = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(operations);

  if (!isMounted()) {
    return operations.map(() => false);
  }

  if (!prevOperations) {
    return operations.map(() => true);
  }

  let newOps = [];

  if (prevOperations.length - 1 === operations.length && operations.every(op => prevOperations.includes(op))) {
    // In case we remove one op and does not change any ops then don't highlight anything.
    return operations.map(() => false);
  }

  if (prevOperations.length + 1 === operations.length && prevOperations.every(op => operations.includes(op))) {
    // If we add a single op just find it and highlight just that.
    const newOp = operations.find(op => !prevOperations.includes(op));
    newOps = operations.map(op => {
      return op === newOp;
    });
  } else {
    // Default diff of all ops.
    newOps = operations.map((op, index) => {
      var _prevOperations$index;

      return !isSameOp(op.id, (_prevOperations$index = prevOperations[index]) === null || _prevOperations$index === void 0 ? void 0 : _prevOperations$index.id);
    });
  }

  return newOps;
}

function isSameOp(op1, op2) {
  return op1 === op2 || `__${op1}_by` === op2 || op1 === `__${op2}_by`;
}

const getStyles = theme => {
  return {
    heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'heading',
      fontSize: 12,
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: 0
    }),
    operationList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'operationList',
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(2)
    }),
    addButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'addButton',
      width: 126,
      paddingBottom: theme.spacing(1)
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationListExplained.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationListExplained": () => (/* binding */ OperationListExplained)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _OperationExplainedBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationExplainedBox.tsx");
/* harmony import */ var _RawQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/RawQuery.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function OperationListExplained({
  query,
  queryModeller,
  stepNumber,
  lang
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: query.operations.map((op, index) => {
      var _def$documentation;

      const def = queryModeller.getOperationDef(op.id);

      if (!def) {
        return `Operation ${op.id} not found`;
      }

      const title = def.renderer(op, def, '<expr>');
      const body = def.explainHandler ? def.explainHandler(op, def) : (_def$documentation = def.documentation) !== null && _def$documentation !== void 0 ? _def$documentation : 'no docs';
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OperationExplainedBox__WEBPACK_IMPORTED_MODULE_1__.OperationExplainedBox, {
        stepNumber: index + stepNumber,
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RawQuery__WEBPACK_IMPORTED_MODULE_2__.RawQuery, {
          query: title,
          lang: lang
        }),
        markdown: body
      }, index);
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationParamEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOperationParamEditor": () => (/* binding */ getOperationParamEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _operationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function getOperationParamEditor(paramDef) {
  if (paramDef.editor) {
    return paramDef.editor;
  }

  if (paramDef.options) {
    return SelectInputParamEditor;
  }

  switch (paramDef.type) {
    case 'boolean':
      return BoolInputParamEditor;

    case 'number':
    case 'string':
    default:
      return SimpleInputParamEditor;
  }
}

function SimpleInputParamEditor(props) {
  var _props$value;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AutoSizeInput, {
    id: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_3__.getOperationParamId)(props.operationIndex, props.index),
    defaultValue: (_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.toString(),
    minWidth: props.paramDef.minWidth,
    placeholder: props.paramDef.placeholder,
    title: props.paramDef.description,
    onCommitChange: evt => {
      props.onChange(props.index, evt.currentTarget.value);

      if (props.paramDef.runQueryOnEnter && evt.type === 'keydown') {
        props.onRunQuery();
      }
    }
  });
}

function BoolInputParamEditor(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
    id: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_3__.getOperationParamId)(props.operationIndex, props.index),
    value: props.value,
    onChange: evt => props.onChange(props.index, evt.currentTarget.checked)
  });
}

function SelectInputParamEditor({
  paramDef,
  value,
  index,
  operationIndex,
  onChange
}) {
  var _selectOptions$, _selectOptions$find;

  let selectOptions = paramDef.options;

  if (!((_selectOptions$ = selectOptions[0]) !== null && _selectOptions$ !== void 0 && _selectOptions$.label)) {
    selectOptions = paramDef.options.map(option => ({
      label: option.toString(),
      value: option
    }));
  }

  let valueOption = (_selectOptions$find = selectOptions.find(x => x.value === value)) !== null && _selectOptions$find !== void 0 ? _selectOptions$find : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
    id: (0,_operationUtils__WEBPACK_IMPORTED_MODULE_3__.getOperationParamId)(operationIndex, index),
    value: valueOption,
    options: selectOptions,
    placeholder: paramDef.placeholder,
    allowCustomValue: true,
    onChange: value => onChange(index, value.value)
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationsEditorRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationsEditorRow": () => (/* binding */ OperationsEditorRow)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function OperationsEditorRow({
  children
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: styles.root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
      gap: 1,
      children: children
    })
  });
}

const getStyles = theme => {
  return {
    root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      padding: theme.spacing(1, 1, 0, 1),
      backgroundColor: theme.colors.background.secondary,
      borderRadius: theme.shape.borderRadius(1)
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryEditorModeToggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorModeToggle": () => (/* binding */ QueryEditorModeToggle)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const editorModes = [{
  label: 'Explain',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.QueryEditorMode.Explain
}, {
  label: 'Builder',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.QueryEditorMode.Builder,
  component: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tag, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: 10,
      padding: '1px 5px',
      verticalAlign: 'text-bottom'
    }),
    name: 'Beta',
    colorIndex: 1
  })
}, {
  label: 'Code',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.QueryEditorMode.Code
}];
function QueryEditorModeToggle({
  mode,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    "data-testid": 'QueryEditorModeToggle',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
      options: editorModes,
      size: "sm",
      value: mode,
      onChange: onChange
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryHeaderSwitch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryHeaderSwitch": () => (/* binding */ QueryHeaderSwitch)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function QueryHeaderSwitch(_ref) {
  let {
    label
  } = _ref,
      inputProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const dashedLabel = label.replace(' ', '-');
  const switchIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)(`switch-${dashedLabel}`));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    gap: 1,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
      htmlFor: switchIdRef.current,
      className: styles.switchLabel,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Switch, Object.assign({}, inputProps, {
      id: switchIdRef.current
    }))]
  });
}

const getStyles = theme => {
  return {
    switchLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      cursor: 'pointer',
      fontSize: theme.typography.bodySmall.fontSize,
      '&:hover': {
        color: theme.colors.text.primary
      }
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryOptionGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryOptionGroup": () => (/* binding */ QueryOptionGroup)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-45ce772437/0/cache/@grafana-experimental-npm-0.0.2-canary.32-3892e62f7b-71924e6d03.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function QueryOptionGroup({
  title,
  children,
  collapsedInfo
}) {
  const [isOpen, toggleOpen] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    gap: 0,
    direction: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.header,
      onClick: toggleOpen,
      title: "Click to edit options",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.toggle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          name: isOpen ? 'angle-down' : 'angle-right'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
        className: styles.title,
        children: title
      }), !isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.description,
        children: collapsedInfo.map((x, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: x
        }, i))
      })]
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.body,
      children: children
    })]
  });
}

const getStyles = theme => {
  return {
    switchLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      cursor: 'pointer',
      fontSize: theme.typography.bodySmall.fontSize,
      '&:hover': {
        color: theme.colors.text.primary
      }
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'baseline',
      color: theme.colors.text.primary,
      '&:hover': {
        background: theme.colors.emphasize(theme.colors.background.primary, 0.03)
      }
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      flexGrow: 1,
      overflow: 'hidden',
      fontSize: theme.typography.bodySmall.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      margin: 0
    }),
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize,
      paddingLeft: theme.spacing(2),
      gap: theme.spacing(2),
      display: 'flex'
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      paddingTop: theme.spacing(2),
      gap: theme.spacing(2),
      flexWrap: 'wrap'
    }),
    toggle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      marginRight: `${theme.spacing(1)}`
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/RawQuery.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawQuery": () => (/* binding */ RawQuery)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.28.0-28f20a79ff-bde93fb2be.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function RawQuery({
  query,
  lang
}) {
  const theme = (0,_grafana_ui_src__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = getStyles(theme);
  const highlighted = prismjs__WEBPACK_IMPORTED_MODULE_1___default().highlight(query, lang.grammar, lang.name);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.editorField, 'prism-syntax-highlight'),
    "aria-label": "selector",
    dangerouslySetInnerHTML: {
      __html: highlighted
    }
  });
}

const getStyles = theme => {
  return {
    editorField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontFamily: theme.typography.fontFamilyMonospace,
      fontSize: theme.typography.bodySmall.fontSize
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAggregationOperation": () => (/* binding */ createAggregationOperation),
/* harmony export */   "createAggregationOperationWithParam": () => (/* binding */ createAggregationOperationWithParam),
/* harmony export */   "defaultAddOperationHandler": () => (/* binding */ defaultAddOperationHandler),
/* harmony export */   "functionRendererLeft": () => (/* binding */ functionRendererLeft),
/* harmony export */   "functionRendererRight": () => (/* binding */ functionRendererRight),
/* harmony export */   "getOperationParamId": () => (/* binding */ getOperationParamId),
/* harmony export */   "getPromAndLokiOperationDisplayName": () => (/* binding */ getPromAndLokiOperationDisplayName),
/* harmony export */   "getRangeVectorParamDef": () => (/* binding */ getRangeVectorParamDef),
/* harmony export */   "rangeRendererLeftWithParams": () => (/* binding */ rangeRendererLeftWithParams),
/* harmony export */   "rangeRendererRightWithParams": () => (/* binding */ rangeRendererRightWithParams)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/LabelParamEditor.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");




function functionRendererLeft(model, def, innerExpr) {
  const params = renderParams(model, def, innerExpr);
  const str = model.id + '(';

  if (innerExpr) {
    params.push(innerExpr);
  }

  return str + params.join(', ') + ')';
}
function functionRendererRight(model, def, innerExpr) {
  const params = renderParams(model, def, innerExpr);
  const str = model.id + '(';

  if (innerExpr) {
    params.unshift(innerExpr);
  }

  return str + params.join(', ') + ')';
}

function rangeRendererWithParams(model, def, innerExpr, renderLeft) {
  var _, _model$params;

  if (def.params.length < 2) {
    throw `Cannot render a function with params of length [${def.params.length}]`;
  }

  let rangeVector = (_ = ((_model$params = model.params) !== null && _model$params !== void 0 ? _model$params : [])[0]) !== null && _ !== void 0 ? _ : '5m'; // Next frame the remaining parameters, but get rid of the first one because it's used to move the
  // instant vector into a range vector.

  const params = renderParams(Object.assign({}, model, {
    params: model.params.slice(1)
  }), Object.assign({}, def, {
    params: def.params.slice(1),
    defaultParams: def.defaultParams.slice(1)
  }), innerExpr);
  const str = model.id + '('; // Depending on the renderLeft variable, render parameters to the left or right
  // renderLeft === true (renderLeft) => (param1, param2, rangeVector[...])
  // renderLeft === false (renderRight) => (rangeVector[...], param1, param2)

  if (innerExpr) {
    renderLeft ? params.push(`${innerExpr}[${rangeVector}]`) : params.unshift(`${innerExpr}[${rangeVector}]`);
  } // stick everything together


  return str + params.join(', ') + ')';
}

function rangeRendererRightWithParams(model, def, innerExpr) {
  return rangeRendererWithParams(model, def, innerExpr, false);
}
function rangeRendererLeftWithParams(model, def, innerExpr) {
  return rangeRendererWithParams(model, def, innerExpr, true);
}

function renderParams(model, def, innerExpr) {
  var _model$params2;

  return ((_model$params2 = model.params) !== null && _model$params2 !== void 0 ? _model$params2 : []).map((value, index) => {
    const paramDef = def.params[index];

    if (paramDef.type === 'string') {
      return '"' + value + '"';
    }

    return value;
  });
}

function defaultAddOperationHandler(def, query) {
  const newOperation = {
    id: def.id,
    params: def.defaultParams
  };
  return Object.assign({}, query, {
    operations: [...query.operations, newOperation]
  });
}
function getPromAndLokiOperationDisplayName(funcName) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(funcName.replace(/_/g, ' '));
}
function getOperationParamId(operationIndex, paramIndex) {
  return `operations.${operationIndex}.param.${paramIndex}`;
}
function getRangeVectorParamDef(withRateInterval = false) {
  const param = {
    name: 'Range',
    type: 'string',
    options: [{
      label: '$__interval',
      value: '$__interval' // tooltip: 'Dynamic interval based on max data points, scrape and min interval',

    }, {
      label: '1m',
      value: '1m'
    }, {
      label: '5m',
      value: '5m'
    }, {
      label: '10m',
      value: '10m'
    }, {
      label: '1h',
      value: '1h'
    }, {
      label: '24h',
      value: '24h'
    }]
  };

  if (withRateInterval) {
    param.options.unshift({
      label: '$__rate_interval',
      value: '$__rate_interval' // tooltip: 'Always above 4x scrape interval',

    });
  }

  return param;
}
/**
 * This function is shared between Prometheus and Loki variants
 */

function createAggregationOperation(name, overrides = {}) {
  const operations = [Object.assign({
    id: name,
    name: getPromAndLokiOperationDisplayName(name),
    params: [{
      name: 'By label',
      type: 'string',
      restParam: true,
      optional: true
    }],
    defaultParams: [],
    alternativesKey: 'plain aggregations',
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Aggregations,
    renderer: functionRendererLeft,
    paramChangedHandler: getOnLabelAddedHandler(`__${name}_by`),
    explainHandler: getAggregationExplainer(name, ''),
    addOperationHandler: defaultAddOperationHandler
  }, overrides), Object.assign({
    id: `__${name}_by`,
    name: `${getPromAndLokiOperationDisplayName(name)} by`,
    params: [{
      name: 'Label',
      type: 'string',
      restParam: true,
      optional: true,
      editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_2__.LabelParamEditor
    }],
    defaultParams: [''],
    alternativesKey: 'aggregations by',
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Aggregations,
    renderer: getAggregationByRenderer(name),
    paramChangedHandler: getLastLabelRemovedHandler(name),
    explainHandler: getAggregationExplainer(name, 'by'),
    addOperationHandler: defaultAddOperationHandler,
    hideFromList: true
  }, overrides), Object.assign({
    id: `__${name}_without`,
    name: `${getPromAndLokiOperationDisplayName(name)} without`,
    params: [{
      name: 'Label',
      type: 'string',
      restParam: true,
      optional: true,
      editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_2__.LabelParamEditor
    }],
    defaultParams: [''],
    alternativesKey: 'aggregations by',
    category: _types__WEBPACK_IMPORTED_MODULE_3__.PromVisualQueryOperationCategory.Aggregations,
    renderer: getAggregationWithoutRenderer(name),
    paramChangedHandler: getLastLabelRemovedHandler(name),
    explainHandler: getAggregationExplainer(name, 'without'),
    addOperationHandler: defaultAddOperationHandler,
    hideFromList: true
  }, overrides)];
  return operations;
}
function createAggregationOperationWithParam(name, paramsDef, overrides = {}) {
  const operations = createAggregationOperation(name, overrides);
  operations[0].params.unshift(...paramsDef.params);
  operations[1].params.unshift(...paramsDef.params);
  operations[2].params.unshift(...paramsDef.params);
  operations[0].defaultParams = paramsDef.defaultParams;
  operations[1].defaultParams = [...paramsDef.defaultParams, ''];
  operations[2].defaultParams = [...paramsDef.defaultParams, ''];
  operations[1].renderer = getAggregationByRendererWithParameter(name);
  operations[2].renderer = getAggregationByRendererWithParameter(name);
  return operations;
}

function getAggregationByRenderer(aggregation) {
  return function aggregationRenderer(model, def, innerExpr) {
    return `${aggregation} by(${model.params.join(', ')}) (${innerExpr})`;
  };
}

function getAggregationWithoutRenderer(aggregation) {
  return function aggregationRenderer(model, def, innerExpr) {
    return `${aggregation} without(${model.params.join(', ')}) (${innerExpr})`;
  };
}
/**
 * Very simple poc implementation, needs to be modified to support all aggregation operators
 */


function getAggregationExplainer(aggregationName, mode) {
  return function aggregationExplainer(model) {
    const labels = model.params.map(label => `\`${label}\``).join(' and ');
    const labelWord = pluralize__WEBPACK_IMPORTED_MODULE_1___default()('label', model.params.length);

    switch (mode) {
      case 'by':
        return `Calculates ${aggregationName} over dimensions while preserving ${labelWord} ${labels}.`;

      case 'without':
        return `Calculates ${aggregationName} over the dimensions ${labels}. All other labels are preserved.`;

      default:
        return `Calculates ${aggregationName} over the dimensions.`;
    }
  };
}

function getAggregationByRendererWithParameter(aggregation) {
  return function aggregationRenderer(model, def, innerExpr) {
    function mapType(p) {
      if (typeof p === 'string') {
        return `\"${p}\"`;
      }

      return p;
    }

    const params = model.params.slice(0, -1);
    const restParams = model.params.slice(1);
    return `${aggregation} by(${restParams.join(', ')}) (${params.map(mapType).join(', ')}, ${innerExpr})`;
  };
}
/**
 * This function will transform operations without labels to their plan aggregation operation
 */


function getLastLabelRemovedHandler(changeToOperationId) {
  return function onParamChanged(index, op, def) {
    // If definition has more params then is defined there are no optional rest params anymore.
    // We then transform this operation into a different one
    if (op.params.length < def.params.length) {
      return Object.assign({}, op, {
        id: changeToOperationId
      });
    }

    return op;
  };
}

function getOnLabelAddedHandler(changeToOperationId) {
  return function onParamChanged(index, op, def) {
    // Check if we actually have the label param. As it's optional the aggregation can have one less, which is the
    // case of just simple aggregation without label. When user adds the label it now has the same number of params
    // as it's definition, and now we can change it to it's `_by` variant.
    if (op.params.length === def.params.length) {
      return Object.assign({}, op, {
        id: changeToOperationId
      });
    }

    return op;
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/parsingUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorName": () => (/* binding */ ErrorName),
/* harmony export */   "getAllByType": () => (/* binding */ getAllByType),
/* harmony export */   "getLeftMostChild": () => (/* binding */ getLeftMostChild),
/* harmony export */   "getString": () => (/* binding */ getString),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "makeBinOp": () => (/* binding */ makeBinOp),
/* harmony export */   "makeError": () => (/* binding */ makeError),
/* harmony export */   "replaceVariables": () => (/* binding */ replaceVariables)
/* harmony export */ });
// This is used for error type for some reason
const ErrorName = '⚠';
function getLeftMostChild(cur) {
  return cur.firstChild ? getLeftMostChild(cur.firstChild) : cur;
}
function makeError(expr, node) {
  var _node$parent;

  return {
    text: getString(expr, node),
    // TODO: this are positions in the string with the replaced variables. Means it cannot be used to show exact
    //  placement of the error for the user. We need some translation table to positions before the variable
    //  replace.
    from: node.from,
    to: node.to,
    parentType: (_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.name
  };
} // Taken from template_srv, but copied so to not mess with the regex.index which is manipulated in the service

/*
 * This regex matches 3 types of variable reference with an optional format specifier
 * \$(\w+)                          $var1
 * \[\[([\s\S]+?)(?::(\w+))?\]\]    [[var2]] or [[var2:fmt2]]
 * \${(\w+)(?::(\w+))?}             ${var3} or ${var3:fmt3}
 */

const variableRegex = /\$(\w+)|\[\[([\s\S]+?)(?::(\w+))?\]\]|\${(\w+)(?:\.([^:^\}]+))?(?::([^\}]+))?}/g;
/**
 * As variables with $ are creating parsing errors, we first replace them with magic string that is parsable and at
 * the same time we can get the variable and it's format back from it.
 * @param expr
 */

function replaceVariables(expr) {
  return expr.replace(variableRegex, (match, var1, var2, fmt2, var3, fieldPath, fmt3) => {
    const fmt = fmt2 || fmt3;
    let variable = var1;
    let varType = '0';

    if (var2) {
      variable = var2;
      varType = '1';
    }

    if (var3) {
      variable = var3;
      varType = '2';
    }

    return `__V_${varType}__` + variable + '__V__' + (fmt ? '__F__' + fmt + '__F__' : '');
  });
}
const varTypeFunc = [(v, f) => `\$${v}`, (v, f) => `[[${v}${f ? `:${f}` : ''}]]`, (v, f) => `\$\{${v}${f ? `:${f}` : ''}\}`];
/**
 * Get back the text with variables in their original format.
 * @param expr
 */

function returnVariables(expr) {
  return expr.replace(/__V_(\d)__(.+?)__V__(?:__F__(\w+)__F__)?/g, (match, type, v, f) => {
    return varTypeFunc[parseInt(type, 10)](v, f);
  });
}
/**
 * Get the actual string of the expression. That is not stored in the tree so we have to get the indexes from the node
 * and then based on that get it from the expression.
 * @param expr
 * @param node
 */


function getString(expr, node) {
  if (!node) {
    return '';
  }

  return returnVariables(expr.substring(node.from, node.to));
}
/**
 * Create simple scalar binary op object.
 * @param opDef - definition of the op to be created
 * @param expr
 * @param numberNode - the node for the scalar
 * @param hasBool - whether operation has a bool modifier. Is used only for ops for which it makes sense.
 */

function makeBinOp(opDef, expr, numberNode, hasBool) {
  const params = [parseFloat(getString(expr, numberNode))];

  if (opDef.comparison) {
    params.push(hasBool);
  }

  return {
    id: opDef.id,
    params
  };
}
/**
 * Get all nodes with type in the tree. This traverses the tree so it is safe only when you know there shouldn't be
 * too much nesting but you just want to skip some of the wrappers. For example getting function args this way would
 * not be safe is it would also find arguments of nested functions.
 * @param expr
 * @param cur
 * @param type
 */

function getAllByType(expr, cur, type) {
  if (cur.name === type) {
    return [getString(expr, cur)];
  }

  const values = [];
  let pos = 0;
  let child = cur.childAfter(pos);

  while (child) {
    values.push(...getAllByType(expr, child, type));
    pos = child.to;
    child = cur.childAfter(pos);
  }

  return values;
} // Debugging function for convenience. Gives you nice output similar to linux tree util.
// @ts-ignore

function log(expr, cur) {
  if (!cur) {
    console.log('<empty>');
    return;
  }

  const json = toJson(expr, cur);
  const text = jsonToText(json);

  if (!text) {
    console.log('<empty>');
    return;
  }

  console.log(text);
}

function toJson(expr, cur) {
  const treeJson = {};
  const name = nodeToString(expr, cur);
  const children = [];
  let pos = 0;
  let child = cur.childAfter(pos);

  while (child) {
    children.push(toJson(expr, child));
    pos = child.to;
    child = cur.childAfter(pos);
  }

  treeJson.name = name;
  treeJson.children = children;
  return treeJson;
}

function jsonToText(node, context = {
  lastChild: true,
  indent: ''
}) {
  const name = node.name;
  const {
    lastChild,
    indent
  } = context;
  const newIndent = indent !== '' ? indent + (lastChild ? '└─' : '├─') : '';
  let text = newIndent + name;
  const children = node.children;
  children.forEach((child, index) => {
    const isLastChild = index === children.length - 1;
    text += '\n' + jsonToText(child, {
      lastChild: isLastChild,
      indent: indent + (lastChild ? '  ' : '│ ')
    });
  });
  return text;
}

function nodeToString(expr, node) {
  return node.name + ': ' + getString(expr, node);
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorMode": () => (/* binding */ QueryEditorMode)
/* harmony export */ });
/**
 * Shared types that can be reused by Loki and other data sources
 */
let QueryEditorMode;

(function (QueryEditorMode) {
  QueryEditorMode["Code"] = "code";
  QueryEditorMode["Builder"] = "builder";
  QueryEditorMode["Explain"] = "explain";
})(QueryEditorMode || (QueryEditorMode = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/state.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeEditorMode": () => (/* binding */ changeEditorMode),
/* harmony export */   "getQueryWithDefaults": () => (/* binding */ getQueryWithDefaults),
/* harmony export */   "useRawQuery": () => (/* binding */ useRawQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/types.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/types.ts");





const queryEditorModeDefaultLocalStorageKey = 'PrometheusQueryEditorModeDefault';
function changeEditorMode(query, editorMode, onChange) {
  // If empty query store new mode as default
  if (query.expr === '') {
    app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].set(queryEditorModeDefaultLocalStorageKey, editorMode);
  }

  onChange(Object.assign({}, query, {
    editorMode
  }));
}

function getDefaultEditorMode(expr) {
  // If we already have an expression default to code view
  if (expr != null && expr !== '') {
    return _shared_types__WEBPACK_IMPORTED_MODULE_4__.QueryEditorMode.Code;
  }

  const value = app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(queryEditorModeDefaultLocalStorageKey);

  switch (value) {
    case _shared_types__WEBPACK_IMPORTED_MODULE_4__.QueryEditorMode.Builder:
    case _shared_types__WEBPACK_IMPORTED_MODULE_4__.QueryEditorMode.Code:
    case _shared_types__WEBPACK_IMPORTED_MODULE_4__.QueryEditorMode.Explain:
      return value;

    default:
      return _shared_types__WEBPACK_IMPORTED_MODULE_4__.QueryEditorMode.Builder;
  }
}
/**
 * Returns query with defaults, and boolean true/false depending on change was required
 */


function getQueryWithDefaults(query, app) {
  let result = query;

  if (!query.editorMode) {
    result = Object.assign({}, query, {
      editorMode: getDefaultEditorMode(query.expr)
    });
  }

  if (query.expr == null) {
    result = Object.assign({}, result, {
      expr: '',
      legendFormat: _types__WEBPACK_IMPORTED_MODULE_3__.LegendFormatMode.Auto
    });
  }

  if (query.range == null && query.instant == null) {
    // Default to range query
    result = Object.assign({}, result, {
      range: true
    }); // In explore we default to both instant & range

    if (app === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CoreApp.Explore) {
      result.instant = true;
    }
  }

  return result;
}
const queryEditorRawQueryLocalStorageKey = 'PrometheusQueryEditorRawQueryDefault';

function getRawQueryVisibility() {
  const val = app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(queryEditorRawQueryLocalStorageKey);
  return val === undefined ? true : Boolean(parseInt(val, 10));
}

function setRawQueryVisibility(value) {
  app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].set(queryEditorRawQueryLocalStorageKey, value ? '1' : '0');
}
/**
 * Use and store value of raw query switch in local storage.
 * Needs to be a hook with local state to trigger rerenders.
 */


function useRawQuery() {
  const [rawQuery, setRawQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getRawQueryVisibility());
  const setter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    setRawQueryVisibility(value);
    setRawQuery(value);
  }, []);
  return [rawQuery, setter];
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromOperationId": () => (/* binding */ PromOperationId),
/* harmony export */   "PromVisualQueryOperationCategory": () => (/* binding */ PromVisualQueryOperationCategory)
/* harmony export */ });
/**
 * Visual query model
 */
let PromVisualQueryOperationCategory;

(function (PromVisualQueryOperationCategory) {
  PromVisualQueryOperationCategory["Aggregations"] = "Aggregations";
  PromVisualQueryOperationCategory["RangeFunctions"] = "Range functions";
  PromVisualQueryOperationCategory["Functions"] = "Functions";
  PromVisualQueryOperationCategory["BinaryOps"] = "Binary operations";
  PromVisualQueryOperationCategory["Trigonometric"] = "Trigonometric";
  PromVisualQueryOperationCategory["Time"] = "Time Functions";
})(PromVisualQueryOperationCategory || (PromVisualQueryOperationCategory = {}));

let PromOperationId;

(function (PromOperationId) {
  PromOperationId["Abs"] = "abs";
  PromOperationId["Absent"] = "absent";
  PromOperationId["AbsentOverTime"] = "absent_over_time";
  PromOperationId["Acos"] = "acos";
  PromOperationId["Acosh"] = "acosh";
  PromOperationId["Asin"] = "asin";
  PromOperationId["Asinh"] = "asinh";
  PromOperationId["Atan"] = "atan";
  PromOperationId["Atanh"] = "atanh";
  PromOperationId["Avg"] = "avg";
  PromOperationId["AvgOverTime"] = "avg_over_time";
  PromOperationId["BottomK"] = "bottomk";
  PromOperationId["Ceil"] = "ceil";
  PromOperationId["Changes"] = "changes";
  PromOperationId["Clamp"] = "clamp";
  PromOperationId["ClampMax"] = "clamp_max";
  PromOperationId["ClampMin"] = "clamp_min";
  PromOperationId["Cos"] = "cos";
  PromOperationId["Cosh"] = "cosh";
  PromOperationId["Count"] = "count";
  PromOperationId["CountOverTime"] = "count_over_time";
  PromOperationId["CountScalar"] = "count_scalar";
  PromOperationId["CountValues"] = "count_values";
  PromOperationId["DayOfMonth"] = "day_of_month";
  PromOperationId["DayOfWeek"] = "day_of_week";
  PromOperationId["DaysInMonth"] = "days_in_month";
  PromOperationId["Deg"] = "deg";
  PromOperationId["Delta"] = "delta";
  PromOperationId["Deriv"] = "deriv";
  PromOperationId["DropCommonLabels"] = "drop_common_labels";
  PromOperationId["Exp"] = "exp";
  PromOperationId["Floor"] = "floor";
  PromOperationId["Group"] = "group";
  PromOperationId["HistogramQuantile"] = "histogram_quantile";
  PromOperationId["HoltWinters"] = "holt_winters";
  PromOperationId["Hour"] = "hour";
  PromOperationId["Idelta"] = "idelta";
  PromOperationId["Increase"] = "increase";
  PromOperationId["Irate"] = "irate";
  PromOperationId["LabelJoin"] = "label_join";
  PromOperationId["LabelReplace"] = "label_replace";
  PromOperationId["Last"] = "last";
  PromOperationId["LastOverTime"] = "last_over_time";
  PromOperationId["Ln"] = "ln";
  PromOperationId["Log10"] = "log10";
  PromOperationId["Log2"] = "log2";
  PromOperationId["Max"] = "max";
  PromOperationId["MaxOverTime"] = "max_over_time";
  PromOperationId["Min"] = "min";
  PromOperationId["MinOverTime"] = "min_over_time";
  PromOperationId["Minute"] = "minute";
  PromOperationId["Month"] = "month";
  PromOperationId["Pi"] = "pi";
  PromOperationId["PredictLinear"] = "predict_linear";
  PromOperationId["Present"] = "present";
  PromOperationId["PresentOverTime"] = "present_over_time";
  PromOperationId["Quantile"] = "quantile";
  PromOperationId["QuantileOverTime"] = "quantile_over_time";
  PromOperationId["Rad"] = "rad";
  PromOperationId["Rate"] = "rate";
  PromOperationId["Resets"] = "resets";
  PromOperationId["Round"] = "round";
  PromOperationId["Scalar"] = "scalar";
  PromOperationId["Sgn"] = "sgn";
  PromOperationId["Sin"] = "sin";
  PromOperationId["Sinh"] = "sinh";
  PromOperationId["Sort"] = "sort";
  PromOperationId["SortDesc"] = "sort_desc";
  PromOperationId["Sqrt"] = "sqrt";
  PromOperationId["Stddev"] = "stddev";
  PromOperationId["StddevOverTime"] = "stddev_over_time";
  PromOperationId["Sum"] = "sum";
  PromOperationId["SumOverTime"] = "sum_over_time";
  PromOperationId["Tan"] = "tan";
  PromOperationId["Tanh"] = "tanh";
  PromOperationId["Time"] = "time";
  PromOperationId["Timestamp"] = "timestamp";
  PromOperationId["TopK"] = "topk";
  PromOperationId["Vector"] = "vector";
  PromOperationId["Year"] = "year";
  PromOperationId["Addition"] = "__addition";
  PromOperationId["Subtraction"] = "__subtraction";
  PromOperationId["MultiplyBy"] = "__multiply_by";
  PromOperationId["DivideBy"] = "__divide_by";
  PromOperationId["Modulo"] = "__modulo";
  PromOperationId["Exponent"] = "__exponent";
  PromOperationId["NestedQuery"] = "__nested_query";
  PromOperationId["EqualTo"] = "__equal_to";
  PromOperationId["NotEqualTo"] = "__not_equal_to";
  PromOperationId["GreaterThan"] = "__greater_than";
  PromOperationId["LessThan"] = "__less_than";
  PromOperationId["GreaterOrEqual"] = "__greater_or_equal";
  PromOperationId["LessOrEqual"] = "__less_or_equal";
})(PromOperationId || (PromOperationId = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/result_transformer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOriginalMetricName": () => (/* binding */ getOriginalMetricName),
/* harmony export */   "parseSampleValue": () => (/* binding */ parseSampleValue),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "transformDFToTable": () => (/* binding */ transformDFToTable),
/* harmony export */   "transformV2": () => (/* binding */ transformV2)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/d3-npm-5.15.0-0c7696026f-7342d82e55.zip/node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _legend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/legend.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/types.ts");
const _excluded = ["__name__"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






 // handles case-insensitive Inf, +Inf, -Inf (with optional "inity" suffix)

const INFINITY_SAMPLE_REGEX = /^[+-]?inf(?:inity)?$/i;

const isTableResult = (dataFrame, options) => {
  var _dataFrame$meta, _dataFrame$meta$custo, _dataFrame$meta2, _dataFrame$meta2$cust;

  // We want to process vector and scalar results in Explore as table
  if (options.app === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.Explore && (((_dataFrame$meta = dataFrame.meta) === null || _dataFrame$meta === void 0 ? void 0 : (_dataFrame$meta$custo = _dataFrame$meta.custom) === null || _dataFrame$meta$custo === void 0 ? void 0 : _dataFrame$meta$custo.resultType) === 'vector' || ((_dataFrame$meta2 = dataFrame.meta) === null || _dataFrame$meta2 === void 0 ? void 0 : (_dataFrame$meta2$cust = _dataFrame$meta2.custom) === null || _dataFrame$meta2$cust === void 0 ? void 0 : _dataFrame$meta2$cust.resultType) === 'scalar')) {
    return true;
  } // We want to process all dataFrames with target.format === 'table' as table


  const target = options.targets.find(target => target.refId === dataFrame.refId);
  return (target === null || target === void 0 ? void 0 : target.format) === 'table';
};

const isHeatmapResult = (dataFrame, options) => {
  const target = options.targets.find(target => target.refId === dataFrame.refId);
  return (target === null || target === void 0 ? void 0 : target.format) === 'heatmap';
}; // V2 result trasnformer used to transform query results from queries that were run trough prometheus backend


function transformV2(response, request, options) {
  const [tableFrames, framesWithoutTable] = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.partition)(response.data, df => isTableResult(df, request));
  const processedTableFrames = transformDFToTable(tableFrames);
  const [exemplarFrames, framesWithoutTableAndExemplars] = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.partition)(framesWithoutTable, df => {
    var _df$meta, _df$meta$custom;

    return ((_df$meta = df.meta) === null || _df$meta === void 0 ? void 0 : (_df$meta$custom = _df$meta.custom) === null || _df$meta$custom === void 0 ? void 0 : _df$meta$custom.resultType) === 'exemplar';
  }); // EXEMPLAR FRAMES: We enrich exemplar frames with data links and add dataTopic meta info

  const {
    exemplarTraceIdDestinations: destinations
  } = options;
  const processedExemplarFrames = exemplarFrames.map(dataFrame => {
    if (destinations !== null && destinations !== void 0 && destinations.length) {
      for (const exemplarTraceIdDestination of destinations) {
        const traceIDField = dataFrame.fields.find(field => field.name === exemplarTraceIdDestination.name);

        if (traceIDField) {
          var _traceIDField$config$;

          const links = getDataLinks(exemplarTraceIdDestination);
          traceIDField.config.links = (_traceIDField$config$ = traceIDField.config.links) !== null && _traceIDField$config$ !== void 0 && _traceIDField$config$.length ? [...traceIDField.config.links, ...links] : links;
        }
      }
    }

    return Object.assign({}, dataFrame, {
      meta: Object.assign({}, dataFrame.meta, {
        dataTopic: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataTopic.Annotations
      })
    });
  });
  const [heatmapResults, framesWithoutTableHeatmapsAndExemplars] = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.partition)(framesWithoutTableAndExemplars, df => isHeatmapResult(df, request));
  const processedHeatmapFrames = mergeHeatmapFrames(transformToHistogramOverTime(heatmapResults.sort(sortSeriesByLabel))); // Everything else is processed as time_series result and graph preferredVisualisationType

  const otherFrames = framesWithoutTableHeatmapsAndExemplars.map(dataFrame => {
    const df = Object.assign({}, dataFrame, {
      meta: Object.assign({}, dataFrame.meta, {
        preferredVisualisationType: 'graph'
      })
    });
    return df;
  });
  return Object.assign({}, response, {
    data: [...otherFrames, ...processedTableFrames, ...processedHeatmapFrames, ...processedExemplarFrames]
  });
}
function transformDFToTable(dfs) {
  // If no dataFrames or if 1 dataFrames with no values, return original dataFrame
  if (dfs.length === 0 || dfs.length === 1 && dfs[0].length === 0) {
    return dfs;
  } // Group results by refId and process dataFrames with the same refId as 1 dataFrame


  const dataFramesByRefId = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.groupBy)(dfs, 'refId');
  const refIds = Object.keys(dataFramesByRefId);
  const frames = refIds.map(refId => {
    // Create timeField, valueField and labelFields
    const valueText = getValueText(refIds.length, refId);
    const valueField = getValueField({
      data: [],
      valueName: valueText
    });
    const timeField = getTimeField([]);
    const labelFields = []; // Fill labelsFields with labels from dataFrames

    dataFramesByRefId[refId].forEach(df => {
      var _frameValueField$labe;

      const frameValueField = df.fields[1];
      const promLabels = (_frameValueField$labe = frameValueField.labels) !== null && _frameValueField$labe !== void 0 ? _frameValueField$labe : {};
      Object.keys(promLabels).sort().forEach(label => {
        // If we don't have label in labelFields, add it
        if (!labelFields.some(l => l.name === label)) {
          const numberField = label === 'le';
          labelFields.push({
            name: label,
            config: {
              filterable: true
            },
            type: numberField ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number : _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
            values: new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ArrayVector()
          });
        }
      });
    }); // Fill valueField, timeField and labelFields with values

    dataFramesByRefId[refId].forEach(df => {
      df.fields[0].values.toArray().forEach(value => timeField.values.add(value));
      df.fields[1].values.toArray().forEach(value => {
        var _df$fields$1$labels;

        valueField.values.add(parseSampleValue(value));
        const labelsForField = (_df$fields$1$labels = df.fields[1].labels) !== null && _df$fields$1$labels !== void 0 ? _df$fields$1$labels : {};
        labelFields.forEach(field => field.values.add(getLabelValue(labelsForField, field.name)));
      });
    });
    const fields = [timeField, ...labelFields, valueField];
    return {
      refId,
      fields,
      meta: Object.assign({}, dfs[0].meta, {
        preferredVisualisationType: 'table'
      }),
      length: timeField.values.length
    };
  });
  return frames;
}

function getValueText(responseLength, refId = '') {
  return responseLength > 1 ? `Value #${refId}` : 'Value';
}

function transform(response, transformOptions) {
  // Create options object from transformOptions
  const options = {
    format: transformOptions.target.format,
    step: transformOptions.query.step,
    legendFormat: transformOptions.target.legendFormat,
    start: transformOptions.query.start,
    end: transformOptions.query.end,
    query: transformOptions.query.expr,
    responseListLength: transformOptions.responseListLength,
    scopedVars: transformOptions.scopedVars,
    refId: transformOptions.target.refId,
    valueWithRefId: transformOptions.target.valueWithRefId,
    meta: {
      // Fix for showing of Prometheus results in Explore table
      preferredVisualisationType: transformOptions.query.instant ? 'table' : 'graph'
    }
  };
  const prometheusResult = response.data.data;

  if ((0,_types__WEBPACK_IMPORTED_MODULE_5__.isExemplarData)(prometheusResult)) {
    var _transformOptions$exe;

    const events = [];
    prometheusResult.forEach(exemplarData => {
      const data = exemplarData.exemplars.map(exemplar => {
        return Object.assign({
          [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_TIME_FIELD_NAME]: exemplar.timestamp * 1000,
          [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_VALUE_FIELD_NAME]: exemplar.value
        }, exemplar.labels, exemplarData.seriesLabels);
      });
      events.push(...data);
    }); // Grouping exemplars by step

    const sampledExemplars = sampleExemplars(events, options);
    const dataFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ArrayDataFrame(sampledExemplars);
    dataFrame.meta = {
      dataTopic: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataTopic.Annotations
    }; // Add data links if configured

    if ((_transformOptions$exe = transformOptions.exemplarTraceIdDestinations) !== null && _transformOptions$exe !== void 0 && _transformOptions$exe.length) {
      for (const exemplarTraceIdDestination of transformOptions.exemplarTraceIdDestinations) {
        const traceIDField = dataFrame.fields.find(field => field.name === exemplarTraceIdDestination.name);

        if (traceIDField) {
          var _traceIDField$config$2;

          const links = getDataLinks(exemplarTraceIdDestination);
          traceIDField.config.links = (_traceIDField$config$2 = traceIDField.config.links) !== null && _traceIDField$config$2 !== void 0 && _traceIDField$config$2.length ? [...traceIDField.config.links, ...links] : links;
        }
      }
    }

    return [dataFrame];
  }

  if (!(prometheusResult !== null && prometheusResult !== void 0 && prometheusResult.result)) {
    return [];
  } // Return early if result type is scalar


  if (prometheusResult.resultType === 'scalar') {
    return [{
      meta: options.meta,
      refId: options.refId,
      length: 1,
      fields: [getTimeField([prometheusResult.result]), getValueField({
        data: [prometheusResult.result]
      })]
    }];
  } // Return early again if the format is table, this needs special transformation.


  if (options.format === 'table') {
    const tableData = transformMetricDataToTable(prometheusResult.result, options);
    return [tableData];
  } // Process matrix and vector results to DataFrame


  const dataFrame = [];
  prometheusResult.result.forEach(data => dataFrame.push(transformToDataFrame(data, options))); // When format is heatmap use the already created data frames and transform it more

  if (options.format === 'heatmap') {
    return mergeHeatmapFrames(transformToHistogramOverTime(dataFrame.sort(sortSeriesByLabel)));
  } // Return matrix or vector result as DataFrame[]


  return dataFrame;
}

function getDataLinks(options) {
  const dataLinks = [];

  if (options.datasourceUid) {
    const dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)();
    const dsSettings = dataSourceSrv.getInstanceSettings(options.datasourceUid); // dsSettings is undefined because of the reasons below:
    // - permissions issues (probably most likely)
    // - deleted datasource
    // - misconfiguration

    if (dsSettings) {
      var _dsSettings$name;

      dataLinks.push({
        title: options.urlDisplayLabel || `Query with ${dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.name}`,
        url: '',
        internal: {
          query: {
            query: '${__value.raw}',
            queryType: 'traceId'
          },
          datasourceUid: options.datasourceUid,
          datasourceName: (_dsSettings$name = dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.name) !== null && _dsSettings$name !== void 0 ? _dsSettings$name : 'Data source not found'
        }
      });
    }
  }

  if (options.url) {
    dataLinks.push({
      title: options.urlDisplayLabel || `Go to ${options.url}`,
      url: options.url,
      targetBlank: true
    });
  }

  return dataLinks;
}
/**
 * Reduce the density of the exemplars by making sure that the highest value exemplar is included
 * and then only the ones that are 2 times the standard deviation of the all the values.
 * This makes sure not to show too many dots near each other.
 */


function sampleExemplars(events, options) {
  const step = options.step || 15;
  const bucketedExemplars = {};
  const values = [];

  for (const exemplar of events) {
    // Align exemplar timestamp to nearest step second
    const alignedTs = String(Math.floor(exemplar[_grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_TIME_FIELD_NAME] / 1000 / step) * step * 1000);

    if (!bucketedExemplars[alignedTs]) {
      // New bucket found
      bucketedExemplars[alignedTs] = [];
    }

    bucketedExemplars[alignedTs].push(exemplar);
    values.push(exemplar[_grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_VALUE_FIELD_NAME]);
  } // Getting exemplars from each bucket


  const standardDeviation = (0,d3__WEBPACK_IMPORTED_MODULE_0__.deviation)(values);
  const sampledBuckets = Object.keys(bucketedExemplars).sort();
  const sampledExemplars = [];

  for (const ts of sampledBuckets) {
    const exemplarsInBucket = bucketedExemplars[ts];

    if (exemplarsInBucket.length === 1) {
      sampledExemplars.push(exemplarsInBucket[0]);
    } else {
      // Choose which values to sample
      const bucketValues = exemplarsInBucket.map(ex => ex[_grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_VALUE_FIELD_NAME]).sort(d3__WEBPACK_IMPORTED_MODULE_0__.descending);
      const sampledBucketValues = bucketValues.reduce((acc, curr) => {
        if (acc.length === 0) {
          // First value is max and is always added
          acc.push(curr);
        } else {
          // Then take values only when at least 2 standard deviation distance to previously taken value
          const prev = acc[acc.length - 1];

          if (standardDeviation && prev - curr >= 2 * standardDeviation) {
            acc.push(curr);
          }
        }

        return acc;
      }, []); // Find the exemplars for the sampled values

      sampledExemplars.push(...sampledBucketValues.map(value => exemplarsInBucket.find(ex => ex[_grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_VALUE_FIELD_NAME] === value)));
    }
  }

  return sampledExemplars;
}
/**
 * Transforms matrix and vector result from Prometheus result to DataFrame
 */


function transformToDataFrame(data, options) {
  const {
    name,
    labels
  } = createLabelInfo(data.metric, options);
  const fields = [];

  if ((0,_types__WEBPACK_IMPORTED_MODULE_5__.isMatrixData)(data)) {
    const stepMs = options.step ? options.step * 1000 : NaN;
    let baseTimestamp = options.start * 1000;
    const dps = [];

    for (const value of data.values) {
      let dpValue = parseSampleValue(value[1]);

      if (isNaN(dpValue)) {
        dpValue = null;
      }

      const timestamp = value[0] * 1000;

      for (let t = baseTimestamp; t < timestamp; t += stepMs) {
        dps.push([t, null]);
      }

      baseTimestamp = timestamp + stepMs;
      dps.push([timestamp, dpValue]);
    }

    const endTimestamp = options.end * 1000;

    for (let t = baseTimestamp; t <= endTimestamp; t += stepMs) {
      dps.push([t, null]);
    }

    fields.push(getTimeField(dps, true));
    fields.push(getValueField({
      data: dps,
      parseValue: false,
      labels,
      displayNameFromDS: name
    }));
  } else {
    fields.push(getTimeField([data.value]));
    fields.push(getValueField({
      data: [data.value],
      labels,
      displayNameFromDS: name
    }));
  }

  return {
    meta: options.meta,
    refId: options.refId,
    length: fields[0].values.length,
    fields,
    name
  };
}

function transformMetricDataToTable(md, options) {
  if (!md || md.length === 0) {
    return {
      meta: options.meta,
      refId: options.refId,
      length: 0,
      fields: []
    };
  }

  const valueText = options.responseListLength > 1 || options.valueWithRefId ? `Value #${options.refId}` : 'Value';
  const timeField = getTimeField([]);
  const metricFields = Object.keys(md.reduce((acc, series) => Object.assign({}, acc, series.metric), {})).sort().map(label => {
    // Labels have string field type, otherwise table tries to figure out the type which can result in unexpected results
    // Only "le" label has a number field type
    const numberField = label === 'le';
    return {
      name: label,
      config: {
        filterable: true
      },
      type: numberField ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number : _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ArrayVector()
    };
  });
  const valueField = getValueField({
    data: [],
    valueName: valueText
  });
  md.forEach(d => {
    if ((0,_types__WEBPACK_IMPORTED_MODULE_5__.isMatrixData)(d)) {
      d.values.forEach(val => {
        timeField.values.add(val[0] * 1000);
        metricFields.forEach(metricField => metricField.values.add(getLabelValue(d.metric, metricField.name)));
        valueField.values.add(parseSampleValue(val[1]));
      });
    } else {
      timeField.values.add(d.value[0] * 1000);
      metricFields.forEach(metricField => metricField.values.add(getLabelValue(d.metric, metricField.name)));
      valueField.values.add(parseSampleValue(d.value[1]));
    }
  });
  return {
    meta: options.meta,
    refId: options.refId,
    length: timeField.values.length,
    fields: [timeField, ...metricFields, valueField]
  };
}

function getLabelValue(metric, label) {
  if (metric.hasOwnProperty(label)) {
    if (label === 'le') {
      return parseSampleValue(metric[label]);
    }

    return metric[label];
  }

  return '';
}

function getTimeField(data, isMs = false) {
  return {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_TIME_FIELD_NAME,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ArrayVector(data.map(val => isMs ? val[0] : val[0] * 1000))
  };
}

function getValueField({
  data,
  valueName = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_VALUE_FIELD_NAME,
  parseValue = true,
  labels,
  displayNameFromDS
}) {
  return {
    name: valueName,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number,
    display: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDisplayProcessor)(),
    config: {
      displayNameFromDS
    },
    labels,
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ArrayVector(data.map(val => parseValue ? parseSampleValue(val[1]) : val[1]))
  };
}

function createLabelInfo(labels, options) {
  if (options !== null && options !== void 0 && options.legendFormat) {
    const title = (0,_legend__WEBPACK_IMPORTED_MODULE_4__.renderLegendFormat)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().replace(options.legendFormat, options === null || options === void 0 ? void 0 : options.scopedVars), labels);
    return {
      name: title,
      labels
    };
  }

  const {
    __name__
  } = labels,
        labelsWithoutName = _objectWithoutPropertiesLoose(labels, _excluded);

  const labelPart = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.formatLabels)(labelsWithoutName);
  let title = `${__name__ !== null && __name__ !== void 0 ? __name__ : ''}${labelPart}`;

  if (!title) {
    title = options.query;
  }

  return {
    name: title,
    labels: labelsWithoutName
  };
}

function getOriginalMetricName(labelData) {
  const metricName = labelData.__name__ || '';
  delete labelData.__name__;
  const labelPart = Object.entries(labelData).map(label => `${label[0]}="${label[1]}"`).join(',');
  return `${metricName}{${labelPart}}`;
}

function mergeHeatmapFrames(frames) {
  if (frames.length === 0) {
    return [];
  }

  const timeField = frames[0].fields.find(field => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time);
  const countFields = frames.map(frame => {
    let field = frame.fields.find(field => field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number);
    return Object.assign({}, field, {
      name: field.config.displayNameFromDS
    });
  });
  return [Object.assign({}, frames[0], {
    meta: Object.assign({}, frames[0].meta, {
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DataFrameType.HeatmapRows
    }),
    fields: [timeField, ...countFields]
  })];
}

function transformToHistogramOverTime(seriesList) {
  /*      t1 = timestamp1, t2 = timestamp2 etc.
            t1  t2  t3          t1  t2  t3
    le10    10  10  0     =>    10  10  0
    le20    20  10  30    =>    10  0   30
    le30    30  10  35    =>    10  0   5
    */
  for (let i = seriesList.length - 1; i > 0; i--) {
    const topSeries = seriesList[i].fields.find(s => s.name === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_VALUE_FIELD_NAME);
    const bottomSeries = seriesList[i - 1].fields.find(s => s.name === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.TIME_SERIES_VALUE_FIELD_NAME);

    if (!topSeries || !bottomSeries) {
      throw new Error('Prometheus heatmap transform error: data should be a time series');
    }

    for (let j = 0; j < topSeries.values.length; j++) {
      const bottomPoint = bottomSeries.values.get(j) || [0];
      topSeries.values.toArray()[j] -= bottomPoint;
    }
  }

  return seriesList;
}

function sortSeriesByLabel(s1, s2) {
  let le1, le2;

  try {
    var _s1$name, _s2$name;

    // fail if not integer. might happen with bad queries
    le1 = parseSampleValue((_s1$name = s1.name) !== null && _s1$name !== void 0 ? _s1$name : '');
    le2 = parseSampleValue((_s2$name = s2.name) !== null && _s2$name !== void 0 ? _s2$name : '');
  } catch (err) {
    console.error(err);
    return 0;
  }

  if (le1 > le2) {
    return 1;
  }

  if (le1 < le2) {
    return -1;
  }

  return 0;
}
/** @internal */


function parseSampleValue(value) {
  if (INFINITY_SAMPLE_REGEX.test(value)) {
    return value[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  }

  return parseFloat(value);
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegendFormatMode": () => (/* binding */ LegendFormatMode),
/* harmony export */   "PromQueryType": () => (/* binding */ PromQueryType),
/* harmony export */   "isExemplarData": () => (/* binding */ isExemplarData),
/* harmony export */   "isMatrixData": () => (/* binding */ isMatrixData)
/* harmony export */ });
let PromQueryType;

(function (PromQueryType) {
  PromQueryType["timeSeriesQuery"] = "timeSeriesQuery";
})(PromQueryType || (PromQueryType = {}));

function isMatrixData(result) {
  return 'values' in result;
}
function isExemplarData(result) {
  if (result == null || !Array.isArray(result)) {
    return false;
  }

  return result.length ? 'exemplars' in result[0] : false;
}

/**
 * Auto = query.legendFormat == '__auto'
 * Verbose = query.legendFormat == null/undefined/''
 * Custom query.legendFormat.length > 0 && query.legendFormat !== '__auto'
 */
let LegendFormatMode;

(function (LegendFormatMode) {
  LegendFormatMode["Auto"] = "__auto";
  LegendFormatMode["Verbose"] = "__verbose";
  LegendFormatMode["Custom"] = "__custom";
})(LegendFormatMode || (LegendFormatMode = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrometheusVariableSupport": () => (/* binding */ PrometheusVariableSupport)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _metric_find_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/metric_find_query.ts");






class PrometheusVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.StandardVariableSupport {
  constructor(datasource, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)(), timeSrv = (0,_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_2__.getTimeSrv)()) {
    super();
    this.datasource = datasource;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.query = this.query.bind(this);
  }

  query(request) {
    const query = request.targets[0].expr;

    if (!query) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({
        data: []
      });
    }

    const scopedVars = Object.assign({}, request.scopedVars, {
      __interval: {
        text: this.datasource.interval,
        value: this.datasource.interval
      },
      __interval_ms: {
        text: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.intervalToMs(this.datasource.interval),
        value: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.intervalToMs(this.datasource.interval)
      }
    }, this.datasource.getRangeScopedVars(this.timeSrv.timeRange()));
    const interpolated = this.templateSrv.replace(query, scopedVars, this.datasource.interpolateQueryExpr);
    const metricFindQuery = new _metric_find_query__WEBPACK_IMPORTED_MODULE_3__["default"](this.datasource, interpolated);
    const metricFindStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(metricFindQuery.process());
    return metricFindStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(results => ({
      data: results
    })));
  }

  toDataQuery(query) {
    return {
      refId: 'PrometheusDatasource-VariableQuery',
      expr: query.query
    };
  }

}

/***/ }),

/***/ "./.yarn/__virtual__/react-popper-tooltip-virtual-ff0da4b2fd/0/cache/react-popper-tooltip-npm-4.4.1-2214480dbc-58dacdf9bc.zip/node_modules/react-popper-tooltip/dist/esm/react-popper-tooltip.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePopperTooltip": () => (/* binding */ usePopperTooltip)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@babel-runtime-npm-7.18.3-1883c70fa6-db8526226a.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@babel-runtime-npm-7.18.3-1883c70fa6-db8526226a.zip/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-popper-virtual-44630d53ac/0/cache/react-popper-npm-2.3.0-1045578379-837111c987.zip/node_modules/react-popper/lib/esm/usePopper.js");





function useGetLatest(val) {
  var ref = react__WEBPACK_IMPORTED_MODULE_2__.useRef(val);
  ref.current = val;
  return react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    return ref.current;
  }, []);
}

var noop = function noop() {// do nothing
};

function useControlledState(_ref) {
  var initial = _ref.initial,
      value = _ref.value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange;

  if (initial === undefined && value === undefined) {
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(initial),
      state = _React$useState[0],
      setState = _React$useState[1];

  var getLatest = useGetLatest(state);
  var set = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (updater) {
    var state = getLatest();
    var updatedState = typeof updater === 'function' ? updater(state) : updater;
    if (typeof updatedState.persist === 'function') updatedState.persist();
    setState(updatedState);
    if (typeof onChange === 'function') onChange(updatedState);
  }, [getLatest, onChange]);
  var isControlled = value !== undefined;
  return [isControlled ? value : state, isControlled ? onChange : set];
}
function generateBoundingClientRect(x, y) {
  if (x === void 0) {
    x = 0;
  }

  if (y === void 0) {
    y = 0;
  }

  return function () {
    return {
      width: 0,
      height: 0,
      top: y,
      right: x,
      bottom: y,
      left: x,
      x: 0,
      y: 0,
      toJSON: function toJSON() {
        return null;
      }
    };
  };
}

var _excluded = ["styles", "attributes"];
var virtualElement = {
  getBoundingClientRect: generateBoundingClientRect()
};
var defaultConfig = {
  closeOnOutsideClick: true,
  closeOnTriggerHidden: false,
  defaultVisible: false,
  delayHide: 0,
  delayShow: 0,
  followCursor: false,
  interactive: false,
  mutationObserverOptions: {
    attributes: true,
    childList: true,
    subtree: true
  },
  offset: [0, 6],
  trigger: 'hover'
};
function usePopperTooltip(config, popperOptions) {
  var _popperProps$state, _popperProps$state$mo, _popperProps$state$mo2;

  if (config === void 0) {
    config = {};
  }

  if (popperOptions === void 0) {
    popperOptions = {};
  }

  // Merging options with default options.
  // Keys with undefined values are replaced with the default ones if any.
  // Keys with other values pass through.
  var finalConfig = Object.keys(defaultConfig).reduce(function (config, key) {
    var _extends2;

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, config, (_extends2 = {}, _extends2[key] = config[key] !== undefined ? config[key] : defaultConfig[key], _extends2));
  }, config);
  var defaultModifiers = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return [{
      name: 'offset',
      options: {
        offset: finalConfig.offset
      }
    }];
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  Array.isArray(finalConfig.offset) ? finalConfig.offset : []);

  var finalPopperOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, popperOptions, {
    placement: popperOptions.placement || finalConfig.placement,
    modifiers: popperOptions.modifiers || defaultModifiers
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(null),
      triggerRef = _React$useState[0],
      setTriggerRef = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__.useState(null),
      tooltipRef = _React$useState2[0],
      setTooltipRef = _React$useState2[1];

  var _useControlledState = useControlledState({
    initial: finalConfig.defaultVisible,
    value: finalConfig.visible,
    onChange: finalConfig.onVisibleChange
  }),
      visible = _useControlledState[0],
      setVisible = _useControlledState[1];

  var timer = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    return function () {
      return clearTimeout(timer.current);
    };
  }, []);

  var _usePopper = (0,react_popper__WEBPACK_IMPORTED_MODULE_3__.usePopper)(finalConfig.followCursor ? virtualElement : triggerRef, tooltipRef, finalPopperOptions),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_usePopper, _excluded);

  var update = popperProps.update;
  var getLatest = useGetLatest({
    visible: visible,
    triggerRef: triggerRef,
    tooltipRef: tooltipRef,
    finalConfig: finalConfig
  });
  var isTriggeredBy = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (trigger) {
    return Array.isArray(finalConfig.trigger) ? finalConfig.trigger.includes(trigger) : finalConfig.trigger === trigger;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  Array.isArray(finalConfig.trigger) ? finalConfig.trigger : [finalConfig.trigger]);
  var hideTooltip = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(function () {
      return setVisible(false);
    }, finalConfig.delayHide);
  }, [finalConfig.delayHide, setVisible]);
  var showTooltip = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(function () {
      return setVisible(true);
    }, finalConfig.delayShow);
  }, [finalConfig.delayShow, setVisible]);
  var toggleTooltip = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    if (getLatest().visible) {
      hideTooltip();
    } else {
      showTooltip();
    }
  }, [getLatest, hideTooltip, showTooltip]); // Handle click outside

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (!getLatest().finalConfig.closeOnOutsideClick) return;

    var handleClickOutside = function handleClickOutside(event) {
      var _event$composedPath;

      var _getLatest = getLatest(),
          tooltipRef = _getLatest.tooltipRef,
          triggerRef = _getLatest.triggerRef;

      var target = (event.composedPath == null ? void 0 : (_event$composedPath = event.composedPath()) == null ? void 0 : _event$composedPath[0]) || event.target;

      if (target instanceof Node) {
        if (tooltipRef != null && triggerRef != null && !tooltipRef.contains(target) && !triggerRef.contains(target)) {
          hideTooltip();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      return document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [getLatest, hideTooltip]); // Trigger: click

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('click')) return;
    triggerRef.addEventListener('click', toggleTooltip);
    return function () {
      return triggerRef.removeEventListener('click', toggleTooltip);
    };
  }, [triggerRef, isTriggeredBy, toggleTooltip]); // Trigger: double-click

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('double-click')) return;
    triggerRef.addEventListener('dblclick', toggleTooltip);
    return function () {
      return triggerRef.removeEventListener('dblclick', toggleTooltip);
    };
  }, [triggerRef, isTriggeredBy, toggleTooltip]); // Trigger: right-click

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('right-click')) return;

    var preventDefaultAndToggle = function preventDefaultAndToggle(event) {
      // Don't show the context menu
      event.preventDefault();
      toggleTooltip();
    };

    triggerRef.addEventListener('contextmenu', preventDefaultAndToggle);
    return function () {
      return triggerRef.removeEventListener('contextmenu', preventDefaultAndToggle);
    };
  }, [triggerRef, isTriggeredBy, toggleTooltip]); // Trigger: focus

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('focus')) return;
    triggerRef.addEventListener('focus', showTooltip);
    triggerRef.addEventListener('blur', hideTooltip);
    return function () {
      triggerRef.removeEventListener('focus', showTooltip);
      triggerRef.removeEventListener('blur', hideTooltip);
    };
  }, [triggerRef, isTriggeredBy, showTooltip, hideTooltip]); // Trigger: hover on trigger

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (triggerRef == null || !isTriggeredBy('hover')) return;
    triggerRef.addEventListener('mouseenter', showTooltip);
    triggerRef.addEventListener('mouseleave', hideTooltip);
    return function () {
      triggerRef.removeEventListener('mouseenter', showTooltip);
      triggerRef.removeEventListener('mouseleave', hideTooltip);
    };
  }, [triggerRef, isTriggeredBy, showTooltip, hideTooltip]); // Trigger: hover on tooltip, keep it open if hovered

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (tooltipRef == null || !getLatest().finalConfig.interactive) return;
    tooltipRef.addEventListener('mouseenter', showTooltip);
    tooltipRef.addEventListener('mouseleave', hideTooltip);
    return function () {
      tooltipRef.removeEventListener('mouseenter', showTooltip);
      tooltipRef.removeEventListener('mouseleave', hideTooltip);
    };
  }, [tooltipRef, showTooltip, hideTooltip, getLatest]); // Handle closing tooltip if trigger hidden

  var isReferenceHidden = popperProps == null ? void 0 : (_popperProps$state = popperProps.state) == null ? void 0 : (_popperProps$state$mo = _popperProps$state.modifiersData) == null ? void 0 : (_popperProps$state$mo2 = _popperProps$state$mo.hide) == null ? void 0 : _popperProps$state$mo2.isReferenceHidden;
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (finalConfig.closeOnTriggerHidden && isReferenceHidden) hideTooltip();
  }, [finalConfig.closeOnTriggerHidden, hideTooltip, isReferenceHidden]); // Handle follow cursor

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (!finalConfig.followCursor || triggerRef == null) return;

    function setMousePosition(_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY;
      virtualElement.getBoundingClientRect = generateBoundingClientRect(clientX, clientY);
      update == null ? void 0 : update();
    }

    triggerRef.addEventListener('mousemove', setMousePosition);
    return function () {
      return triggerRef.removeEventListener('mousemove', setMousePosition);
    };
  }, [finalConfig.followCursor, triggerRef, update]); // Handle tooltip DOM mutation changes (aka mutation observer)

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (tooltipRef == null || update == null || finalConfig.mutationObserverOptions == null) return;
    var observer = new MutationObserver(update);
    observer.observe(tooltipRef, finalConfig.mutationObserverOptions);
    return function () {
      return observer.disconnect();
    };
  }, [finalConfig.mutationObserverOptions, tooltipRef, update]); // Tooltip props getter

  var getTooltipProps = function getTooltipProps(args) {
    if (args === void 0) {
      args = {};
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, args, {
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, args.style, styles.popper)
    }, attributes.popper, {
      'data-popper-interactive': finalConfig.interactive
    });
  }; // Arrow props getter


  var getArrowProps = function getArrowProps(args) {
    if (args === void 0) {
      args = {};
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, args, attributes.arrow, {
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, args.style, styles.arrow),
      'data-popper-arrow': true
    });
  };

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    getArrowProps: getArrowProps,
    getTooltipProps: getTooltipProps,
    setTooltipRef: setTooltipRef,
    setTriggerRef: setTriggerRef,
    tooltipRef: tooltipRef,
    triggerRef: triggerRef,
    visible: visible
  }, popperProps);
}


//# sourceMappingURL=react-popper-tooltip.js.map


/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ }),

/***/ "./.yarn/cache/@grafana-aws-sdk-npm-0.0.36-8ab4b07904-c243f7c900.zip/node_modules/@grafana/aws-sdk/dist/index.development.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var React__default = _interopDefault(React);
var ui = __webpack_require__("./packages/grafana-ui/src/index.ts");
var data = __webpack_require__("./packages/grafana-data/src/index.ts");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

var standardRegions = [
    'af-south-1',
    'ap-east-1',
    'ap-northeast-1',
    'ap-northeast-2',
    'ap-northeast-3',
    'ap-south-1',
    'ap-southeast-1',
    'ap-southeast-2',
    'ca-central-1',
    'cn-north-1',
    'cn-northwest-1',
    'eu-central-1',
    'eu-north-1',
    'eu-west-1',
    'eu-west-2',
    'eu-west-3',
    'me-south-1',
    'sa-east-1',
    'us-east-1',
    'us-east-2',
    'us-gov-east-1',
    'us-gov-west-1',
    'us-iso-east-1',
    'us-isob-east-1',
    'us-west-1',
    'us-west-2',
];

(function (AwsAuthType) {
    AwsAuthType["Keys"] = "keys";
    AwsAuthType["Credentials"] = "credentials";
    AwsAuthType["Default"] = "default";
    AwsAuthType["EC2IAMRole"] = "ec2_iam_role";
    /**
     * @deprecated use default
     */
    AwsAuthType["ARN"] = "arn";
})(exports.AwsAuthType || (exports.AwsAuthType = {}));

var awsAuthProviderOptions = [
    {
        label: 'Workspace IAM Role',
        value: exports.AwsAuthType.EC2IAMRole,
    },
    {
        label: 'AWS SDK Default',
        value: exports.AwsAuthType.Default,
    },
    {
        label: 'Access & secret key',
        value: exports.AwsAuthType.Keys,
    },
    {
        label: 'Credentials file',
        value: exports.AwsAuthType.Credentials,
    },
];

var toOption = function (value) { return ({ value: value, label: value }); };
var ConnectionConfig = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var _k = __read(React.useState((props.standardRegions || standardRegions).map(toOption)), 2), regions = _k[0], setRegions = _k[1];
    var loadRegions = props.loadRegions, onOptionsChange = props.onOptionsChange, _l = props.skipHeader, skipHeader = _l === void 0 ? false : _l, _m = props.skipEndpoint, skipEndpoint = _m === void 0 ? false : _m;
    var options = props.options;
    var profile = options.jsonData.profile;
    if (profile === undefined) {
        profile = options.database;
    }
    var settings = window.grafanaBootData.settings;
    var awsAllowedAuthProviders = (_a = settings.awsAllowedAuthProviders) !== null && _a !== void 0 ? _a : [
        exports.AwsAuthType.Default,
        exports.AwsAuthType.Keys,
        exports.AwsAuthType.Credentials,
    ];
    var awsAssumeRoleEnabled = (_b = settings.awsAssumeRoleEnabled) !== null && _b !== void 0 ? _b : true;
    var currentProvider = awsAuthProviderOptions.find(function (p) { return p.value === options.jsonData.authType; });
    React.useEffect(function () {
        // Make sure a authType exists in the current model
        if (!currentProvider && awsAllowedAuthProviders.length) {
            onOptionsChange(__assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { authType: awsAllowedAuthProviders[0] }) }));
        }
    }, [currentProvider, options, onOptionsChange]);
    React.useEffect(function () {
        if (!loadRegions) {
            return;
        }
        loadRegions().then(function (regions) { return setRegions(regions.map(toOption)); });
    }, [loadRegions]);
    return (React__default.createElement(ui.FieldSet, { label: skipHeader ? '' : 'Connection Details', "data-testid": "connection-config" },
        React__default.createElement(ui.InlineField, { label: "Authentication Provider", labelWidth: 28, tooltip: "Specify which AWS credentials chain to use." },
            React__default.createElement(ui.Select, { "aria-label": "Authentication Provider", className: "width-30", value: currentProvider, options: awsAuthProviderOptions.filter(function (opt) { return awsAllowedAuthProviders.includes(opt.value); }), defaultValue: options.jsonData.authType, onChange: function (option) {
                    data.onUpdateDatasourceJsonDataOptionSelect(props, 'authType')(option);
                }, menuShouldPortal: true })),
        options.jsonData.authType === 'credentials' && (React__default.createElement(ui.InlineField, { label: "Credentials Profile Name", labelWidth: 28, tooltip: "Credentials profile name, as specified in ~/.aws/credentials, leave blank for default." },
            React__default.createElement(ui.Input, { "aria-label": "Credentials Profile Name", className: "width-30", placeholder: "default", value: profile, onChange: data.onUpdateDatasourceJsonDataOption(props, 'profile') }))),
        options.jsonData.authType === 'keys' && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(ui.InlineField, { label: "Access Key ID", labelWidth: 28 }, ((_c = props.options.secureJsonFields) === null || _c === void 0 ? void 0 : _c.accessKey) ? (React__default.createElement(ui.ButtonGroup, { className: "width-30" },
                React__default.createElement(ui.Input, { disabled: true, placeholder: "Configured" }),
                React__default.createElement(ui.ToolbarButton, { icon: "edit", tooltip: "Edit Access Key ID", type: "button", onClick: data.onUpdateDatasourceResetOption(props, 'accessKey') }))) : (React__default.createElement(ui.Input, { "aria-label": "Access Key ID", className: "width-30", value: (_e = (_d = options.secureJsonData) === null || _d === void 0 ? void 0 : _d.accessKey) !== null && _e !== void 0 ? _e : '', onChange: data.onUpdateDatasourceSecureJsonDataOption(props, 'accessKey') }))),
            React__default.createElement(ui.InlineField, { label: "Secret Access Key", labelWidth: 28 }, ((_f = props.options.secureJsonFields) === null || _f === void 0 ? void 0 : _f.secretKey) ? (React__default.createElement(ui.ButtonGroup, { className: "width-30" },
                React__default.createElement(ui.Input, { disabled: true, placeholder: "Configured" }),
                React__default.createElement(ui.ToolbarButton, { icon: "edit", type: "button", tooltip: "Edit Secret Access Key", onClick: data.onUpdateDatasourceResetOption(props, 'secretKey') }))) : (React__default.createElement(ui.Input, { "aria-label": "Secret Access Key", className: "width-30", value: (_h = (_g = options.secureJsonData) === null || _g === void 0 ? void 0 : _g.secretKey) !== null && _h !== void 0 ? _h : '', onChange: data.onUpdateDatasourceSecureJsonDataOption(props, 'secretKey') }))))),
        awsAssumeRoleEnabled && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(ui.InlineField, { label: "Assume Role ARN", labelWidth: 28, tooltip: "Optionally, specify the ARN of a role to assume. Specifying a role here will ensure that the selected authentication provider is used to assume the specified role rather than using the credentials directly. Leave blank if you don't need to assume a role at all" },
                React__default.createElement(ui.Input, { "aria-label": "Assume Role ARN", className: "width-30", placeholder: "arn:aws:iam:*", value: options.jsonData.assumeRoleArn || '', onChange: data.onUpdateDatasourceJsonDataOption(props, 'assumeRoleArn') })),
            React__default.createElement(ui.InlineField, { label: "External ID", labelWidth: 28, tooltip: "If you are assuming a role in another account, that has been created with an external ID, specify the external ID here." },
                React__default.createElement(ui.Input, { "aria-label": "External ID", className: "width-30", placeholder: "External ID", value: options.jsonData.externalId || '', onChange: data.onUpdateDatasourceJsonDataOption(props, 'externalId') })))),
        !skipEndpoint && (React__default.createElement(ui.InlineField, { label: "Endpoint", labelWidth: 28, tooltip: "Optionally, specify a custom endpoint for the service" },
            React__default.createElement(ui.Input, { "aria-label": "Endpoint", className: "width-30", placeholder: (_j = props.defaultEndpoint) !== null && _j !== void 0 ? _j : 'https://{service}.{region}.amazonaws.com', value: options.jsonData.endpoint || '', onChange: data.onUpdateDatasourceJsonDataOption(props, 'endpoint') }))),
        React__default.createElement(ui.InlineField, { label: "Default Region", labelWidth: 28, tooltip: "Specify the region, such as for US West (Oregon) use ` us-west-2 ` as the region." },
            React__default.createElement(ui.Select, { "aria-label": "Default Region", className: "width-30", value: regions.find(function (region) { return region.value === options.jsonData.defaultRegion; }), options: regions, defaultValue: options.jsonData.defaultRegion, allowCustomValue: true, onChange: data.onUpdateDatasourceJsonDataOptionSelect(props, 'defaultRegion'), formatCreateLabel: function (r) { return "Use region: " + r; }, menuShouldPortal: true })),
        props.children));
};

var SIGV4ConnectionConfig = function (props) {
    var _a, _b, _c, _d;
    var onOptionsChange = props.onOptionsChange, options = props.options;
    // Map HttpSettings props to ConnectionConfigProps
    var connectionConfigProps = {
        onOptionsChange: function (awsDataSourceSettings) {
            var _a, _b, _c, _d;
            var dataSourceSettings = __assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { sigV4AuthType: awsDataSourceSettings.jsonData.authType, sigV4Profile: awsDataSourceSettings.jsonData.profile, sigV4AssumeRoleArn: awsDataSourceSettings.jsonData.assumeRoleArn, sigV4ExternalId: awsDataSourceSettings.jsonData.externalId, sigV4Region: awsDataSourceSettings.jsonData.defaultRegion, sigV4Endpoint: awsDataSourceSettings.jsonData.endpoint }), secureJsonFields: {
                    sigV4AccessKey: (_a = awsDataSourceSettings.secureJsonFields) === null || _a === void 0 ? void 0 : _a.accessKey,
                    sigV4SecretKey: (_b = awsDataSourceSettings.secureJsonFields) === null || _b === void 0 ? void 0 : _b.secretKey,
                }, secureJsonData: {
                    sigV4AccessKey: (_c = awsDataSourceSettings.secureJsonData) === null || _c === void 0 ? void 0 : _c.accessKey,
                    sigV4SecretKey: (_d = awsDataSourceSettings.secureJsonData) === null || _d === void 0 ? void 0 : _d.secretKey,
                } });
            onOptionsChange(dataSourceSettings);
        },
        options: __assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { authType: options.jsonData.sigV4AuthType, profile: options.jsonData.sigV4Profile, assumeRoleArn: options.jsonData.sigV4AssumeRoleArn, externalId: options.jsonData.sigV4ExternalId, defaultRegion: options.jsonData.sigV4Region, endpoint: options.jsonData.sigV4Endpoint }), secureJsonFields: {
                accessKey: (_a = options.secureJsonFields) === null || _a === void 0 ? void 0 : _a.sigV4AccessKey,
                secretKey: (_b = options.secureJsonFields) === null || _b === void 0 ? void 0 : _b.sigV4SecretKey,
            }, secureJsonData: {
                accessKey: (_c = options.secureJsonData) === null || _c === void 0 ? void 0 : _c.sigV4AccessKey,
                secretKey: (_d = options.secureJsonData) === null || _d === void 0 ? void 0 : _d.sigV4SecretKey,
            } }),
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "gf-form" },
            React__default.createElement("h6", null, "SigV4 Auth Details")),
        React__default.createElement(ConnectionConfig, __assign({}, connectionConfigProps, { skipHeader: true, skipEndpoint: true }))));
};

var defaultKey = '__default';

function ResourceSelector(props) {
    var _this = this;
    var _a = __read(React.useState(props.value || props.default || null), 2), resource = _a[0], setResource = _a[1];
    var _b = __read(React.useState(resource ? [resource] : []), 2), resources = _b[0], setResources = _b[1];
    var _c = __read(React.useState(props.dependencies), 2), dependencies = _c[0], setDependencies = _c[1];
    var _d = __read(React.useState(false), 2), isLoading = _d[0], setIsLoading = _d[1];
    var _e = __read(React.useState(false), 2), fetched = _e[0], setFetched = _e[1];
    var defaultOpts = React.useMemo(function () {
        var opts = [
            {
                label: "default (" + props.default + ")",
                value: defaultKey,
                description: "Default value set in the data source",
            },
        ];
        if (props.value && props.value !== defaultKey) {
            opts.push({ label: props.value, value: props.value });
        }
        return opts;
    }, [props.default, props.value]);
    var _f = __read(React.useState(props.default ? defaultOpts : []), 2), options = _f[0], setOptions = _f[1];
    React.useEffect(function () {
        if (props.resources !== undefined) {
            setResources(props.resources);
        }
    }, [props.resources]);
    React.useEffect(function () {
        var newOptions = props.default ? defaultOpts : [];
        if (resources.length) {
            resources.forEach(function (r) {
                var value = typeof r === 'string' ? r : r.value;
                if (!newOptions.find(function (o) { return o.value === value; })) {
                    typeof r === 'string' ? newOptions.push({ label: r, value: r }) : newOptions.push(r);
                }
            });
            setOptions(newOptions);
        }
        else {
            setOptions([]);
        }
    }, [resources, defaultOpts, props.default]);
    React.useEffect(function () {
        // A change in the dependencies cause a state clean-up
        if (!lodash.isEqual(props.dependencies, dependencies)) {
            setFetched(false);
            setResource(null);
            props.onChange(null);
            setDependencies(props.dependencies);
        }
    }, [props, dependencies]);
    var fetch = function () { return __awaiter(_this, void 0, void 0, function () {
        var resources_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (fetched) {
                        return [2 /*return*/];
                    }
                    if (!props.saveOptions) return [3 /*break*/, 2];
                    return [4 /*yield*/, props.saveOptions()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, , 4, 5]);
                    return [4 /*yield*/, props.fetch()];
                case 3:
                    resources_1 = _a.sent();
                    setResources(resources_1);
                    return [3 /*break*/, 5];
                case 4:
                    setFetched(true);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var onChange = function (e) {
        props.onChange(e);
        if (e.value) {
            setResource(e.value);
        }
    };
    var onClick = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, fetch()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React__default.createElement(ui.InlineField, { label: props.label, labelWidth: props.labelWidth, tooltip: props.tooltip, hidden: props.hidden },
        React__default.createElement("div", { "data-testid": props['data-testid'], title: props.title },
            React__default.createElement(ui.Select, __assign({}, props, { "aria-label": props.label, options: options, onChange: onChange, isLoading: isLoading, className: props.className || 'min-width-6', onOpenMenu: function () { return props.fetch && onClick(); }, menuShouldPortal: true })))));
}

function ConfigSelect(props) {
    var jsonData = props.options.jsonData;
    var commonProps = {
        title: jsonData.defaultRegion ? '' : 'select a default region',
        labelWidth: 28,
        className: 'width-30',
    };
    // Any change in the AWS connection details will affect selectors
    var dependencies = [
        props.options.jsonData.assumeRoleArn,
        props.options.jsonData.authType,
        props.options.jsonData.defaultRegion,
        props.options.jsonData.endpoint,
        props.options.jsonData.externalId,
        props.options.jsonData.profile,
    ].concat(props.dependencies);
    return (React__default.createElement(ResourceSelector, __assign({ label: props.label, "data-testid": props['data-testid'], onChange: props.onChange, fetch: props.fetch, value: props.value, saveOptions: props.saveOptions, dependencies: dependencies, hidden: props.hidden, disabled: props.disabled || !jsonData.defaultRegion, allowCustomValue: props.allowCustomValue, autoFocus: props.autoFocus, backspaceRemovesValue: props.backspaceRemovesValue, className: props.className, invalid: props.invalid, isClearable: props.isClearable, isMulti: props.isMulti, inputId: props.inputId, showAllSelectedWhenOpen: props.showAllSelectedWhenOpen, maxMenuHeight: props.maxMenuHeight, minMenuHeight: props.minMenuHeight, maxVisibleValues: props.maxVisibleValues, menuPlacement: props.menuPlacement, menuPosition: props.menuPosition, noOptionsMessage: props.noOptionsMessage, onBlur: props.onBlur, onCreateOption: props.onCreateOption, onInputChange: props.onInputChange, placeholder: props.placeholder, width: props.width, isOptionDisabled: props.isOptionDisabled }, commonProps)));
}

function InlineInput(props) {
    return (React__default.createElement(ui.InlineField, { label: props.label, labelWidth: 28, tooltip: props.tooltip, hidden: props.hidden, disabled: props.disabled },
        React__default.createElement(ui.Input, { "data-testid": props['data-testid'], className: "width-30", value: props.value, onChange: props.onChange, placeholder: props.placeholder, disabled: props.disabled })));
}

function QueryCodeEditor(props) {
    var getSuggestions = props.getSuggestions, query = props.query;
    var rawSQL = lodash.defaults(props.query, { rawSQL: '' }).rawSQL;
    var onRawSqlChange = function (rawSQL) {
        var query = __assign(__assign({}, props.query), { rawSQL: rawSQL });
        props.onChange(query);
        props.onRunQuery();
    };
    // Use a reference for suggestions because a bug in CodeEditor getSuggestions
    // https://github.com/grafana/grafana/issues/40121
    // It was been fixed in 8.3 but keeping the workaround here to support older
    // versions.
    var suggestionsRef = React.useRef([]);
    React.useEffect(function () {
        suggestionsRef.current = getSuggestions(query);
    }, [getSuggestions, query]);
    return (React__default.createElement(ui.CodeEditor, __assign({ language: props.language, value: rawSQL, onBlur: onRawSqlChange, showMiniMap: false, showLineNumbers: true, getSuggestions: function () { return suggestionsRef.current; }, height: "240px" }, props.editorProps)));
}

function FormatSelect(props) {
    var onChangeFormat = function (e) {
        props.onChange(__assign(__assign({}, props.query), { format: e.value || 0 }));
        props.onRunQuery();
    };
    return (React__default.createElement(ui.InlineField, { label: "Format as", labelWidth: 11 },
        React__default.createElement(ui.Select, { "aria-label": "Format as", options: props.options, value: props.query.format, onChange: onChangeFormat, className: "width-12", menuShouldPortal: true })));
}

(function (FillValueOptions) {
    FillValueOptions[FillValueOptions["Previous"] = 0] = "Previous";
    FillValueOptions[FillValueOptions["Null"] = 1] = "Null";
    FillValueOptions[FillValueOptions["Value"] = 2] = "Value";
})(exports.FillValueOptions || (exports.FillValueOptions = {}));
var SelectableFillValueOptions = [
    {
        label: 'Previous Value',
        value: exports.FillValueOptions.Previous,
    },
    {
        label: 'NULL',
        value: exports.FillValueOptions.Null,
    },
    {
        label: 'Value',
        value: exports.FillValueOptions.Value,
    },
];
function FillValueSelect(props) {
    var _a, _b, _c;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(ui.InlineField, { label: "Fill value", tooltip: "value to fill missing points" },
            React__default.createElement(ui.Select, { "aria-label": "Fill value", options: SelectableFillValueOptions, value: (_b = (_a = props.query.fillMode) === null || _a === void 0 ? void 0 : _a.mode) !== null && _b !== void 0 ? _b : exports.FillValueOptions.Previous, onChange: function (_a) {
                    var value = _a.value;
                    props.onChange(__assign(__assign({}, props.query), { 
                        // Keep the fillMode.value in case FillValueOptions.Value mode is selected back
                        fillMode: __assign(__assign({}, props.query.fillMode), { mode: value }) }));
                    props.onRunQuery();
                }, className: "width-12", menuShouldPortal: true })),
        ((_c = props.query.fillMode) === null || _c === void 0 ? void 0 : _c.mode) === exports.FillValueOptions.Value && (React__default.createElement(ui.InlineField, { label: "Value", labelWidth: 11 },
            React__default.createElement(ui.Input, { type: "number", "aria-label": "Value", value: props.query.fillMode.value, onChange: function (_a) {
                    var currentTarget = _a.currentTarget;
                    return props.onChange(__assign(__assign({}, props.query), { fillMode: {
                            mode: exports.FillValueOptions.Value,
                            value: currentTarget.valueAsNumber,
                        } }));
                }, onBlur: function () { return props.onRunQuery(); } })))));
}

/**
 * Do not execute queries that do not exist yet
 */
function filterSQLQuery(query) {
    return !!query.rawSQL;
}
function applySQLTemplateVariables(query, scopedVars, getTemplateSrv) {
    var templateSrv = getTemplateSrv();
    return __assign(__assign({}, query), { rawSQL: templateSrv.replace(query.rawSQL, scopedVars, interpolateVariable) });
}
function interpolateVariable(value) {
    if (typeof value === 'string') {
        return value;
    }
    var quotedValues = value.map(function (v) {
        return quoteLiteral(v);
    });
    return quotedValues.join(',');
}
function quoteLiteral(value) {
    return "'" + String(value).replace(/'/g, "''") + "'";
}
var appendTemplateVariablesAsSuggestions = function (getTemplateSrv, sugs) {
    var templateSrv = getTemplateSrv();
    var templateSugs = [];
    templateSrv.getVariables().forEach(function (variable) {
        var label = '$' + variable.name;
        var val = templateSrv.replace(label);
        if (val === label) {
            val = '';
        }
        templateSugs.push({
            label: label,
            kind: ui.CodeEditorSuggestionItemKind.Text,
            detail: "(Template Variable) " + val,
        });
    });
    return sugs.concat(templateSugs);
};

exports.ConfigSelect = ConfigSelect;
exports.ConnectionConfig = ConnectionConfig;
exports.FillValueSelect = FillValueSelect;
exports.FormatSelect = FormatSelect;
exports.InlineInput = InlineInput;
exports.QueryCodeEditor = QueryCodeEditor;
exports.ResourceSelector = ResourceSelector;
exports.SIGV4ConnectionConfig = SIGV4ConnectionConfig;
exports.appendTemplateVariablesAsSuggestions = appendTemplateVariablesAsSuggestions;
exports.applySQLTemplateVariables = applySQLTemplateVariables;
exports.awsAuthProviderOptions = awsAuthProviderOptions;
exports.filterSQLQuery = filterSQLQuery;
exports.standardRegions = standardRegions;
//# sourceMappingURL=index.development.js.map


/***/ }),

/***/ "./.yarn/cache/@grafana-aws-sdk-npm-0.0.36-8ab4b07904-c243f7c900.zip/node_modules/@grafana/aws-sdk/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__("./.yarn/cache/@grafana-aws-sdk-npm-0.0.36-8ab4b07904-c243f7c900.zip/node_modules/@grafana/aws-sdk/dist/index.development.js");
}


/***/ }),

/***/ "./.yarn/cache/lru-cache-npm-7.10.1-5af910d0ed-e8b190d71e.zip/node_modules/lru-cache/index.js":
/***/ ((module) => {

const perf =
  typeof performance === 'object' &&
  performance &&
  typeof performance.now === 'function'
    ? performance
    : Date

const hasAbortController = typeof AbortController === 'function'

// minimal backwards-compatibility polyfill
// this doesn't have nearly all the checks and whatnot that
// actual AbortController/Signal has, but it's enough for
// our purposes, and if used properly, behaves the same.
const AC = hasAbortController
  ? AbortController
  : class AbortController {
      constructor() {
        this.signal = new AS()
      }
      abort() {
        this.signal.dispatchEvent('abort')
      }
    }

const AS = hasAbortController
  ? AbortSignal
  : class AbortSignal {
      constructor() {
        this.aborted = false
        this._listeners = []
      }
      dispatchEvent(type) {
        if (type === 'abort') {
          this.aborted = true
          const e = { type, target: this }
          this.onabort(e)
          this._listeners.forEach(f => f(e), this)
        }
      }
      onabort() {}
      addEventListener(ev, fn) {
        if (ev === 'abort') {
          this._listeners.push(fn)
        }
      }
      removeEventListener(ev, fn) {
        if (ev === 'abort') {
          this._listeners = this._listeners.filter(f => f !== fn)
        }
      }
    }

const warned = new Set()
const deprecatedOption = (opt, instead) => {
  const code = `LRU_CACHE_OPTION_${opt}`
  if (shouldWarn(code)) {
    warn(code, `${opt} option`, `options.${instead}`, LRUCache)
  }
}
const deprecatedMethod = (method, instead) => {
  const code = `LRU_CACHE_METHOD_${method}`
  if (shouldWarn(code)) {
    const { prototype } = LRUCache
    const { get } = Object.getOwnPropertyDescriptor(prototype, method)
    warn(code, `${method} method`, `cache.${instead}()`, get)
  }
}
const deprecatedProperty = (field, instead) => {
  const code = `LRU_CACHE_PROPERTY_${field}`
  if (shouldWarn(code)) {
    const { prototype } = LRUCache
    const { get } = Object.getOwnPropertyDescriptor(prototype, field)
    warn(code, `${field} property`, `cache.${instead}`, get)
  }
}

const emitWarning = (...a) => {
  typeof process === 'object' &&
  process &&
  typeof process.emitWarning === 'function'
    ? process.emitWarning(...a)
    : console.error(...a)
}

const shouldWarn = code => !warned.has(code)

const warn = (code, what, instead, fn) => {
  warned.add(code)
  const msg = `The ${what} is deprecated. Please use ${instead} instead.`
  emitWarning(msg, 'DeprecationWarning', code, fn)
}

const isPosInt = n => n && n === Math.floor(n) && n > 0 && isFinite(n)

/* istanbul ignore next - This is a little bit ridiculous, tbh.
 * The maximum array length is 2^32-1 or thereabouts on most JS impls.
 * And well before that point, you're caching the entire world, I mean,
 * that's ~32GB of just integers for the next/prev links, plus whatever
 * else to hold that many keys and values.  Just filling the memory with
 * zeroes at init time is brutal when you get that big.
 * But why not be complete?
 * Maybe in the future, these limits will have expanded. */
const getUintArray = max =>
  !isPosInt(max)
    ? null
    : max <= Math.pow(2, 8)
    ? Uint8Array
    : max <= Math.pow(2, 16)
    ? Uint16Array
    : max <= Math.pow(2, 32)
    ? Uint32Array
    : max <= Number.MAX_SAFE_INTEGER
    ? ZeroArray
    : null

class ZeroArray extends Array {
  constructor(size) {
    super(size)
    this.fill(0)
  }
}

class Stack {
  constructor(max) {
    if (max === 0) {
      return []
    }
    const UintArray = getUintArray(max)
    this.heap = new UintArray(max)
    this.length = 0
  }
  push(n) {
    this.heap[this.length++] = n
  }
  pop() {
    return this.heap[--this.length]
  }
}

class LRUCache {
  constructor(options = {}) {
    const {
      max = 0,
      ttl,
      ttlResolution = 1,
      ttlAutopurge,
      updateAgeOnGet,
      updateAgeOnHas,
      allowStale,
      dispose,
      disposeAfter,
      noDisposeOnSet,
      noUpdateTTL,
      maxSize = 0,
      sizeCalculation,
      fetchMethod,
      noDeleteOnFetchRejection,
    } = options

    // deprecated options, don't trigger a warning for getting them if
    // the thing being passed in is another LRUCache we're copying.
    const { length, maxAge, stale } =
      options instanceof LRUCache ? {} : options

    if (max !== 0 && !isPosInt(max)) {
      throw new TypeError('max option must be a nonnegative integer')
    }

    const UintArray = max ? getUintArray(max) : Array
    if (!UintArray) {
      throw new Error('invalid max value: ' + max)
    }

    this.max = max
    this.maxSize = maxSize
    this.sizeCalculation = sizeCalculation || length
    if (this.sizeCalculation) {
      if (!this.maxSize) {
        throw new TypeError(
          'cannot set sizeCalculation without setting maxSize'
        )
      }
      if (typeof this.sizeCalculation !== 'function') {
        throw new TypeError('sizeCalculation set to non-function')
      }
    }

    this.fetchMethod = fetchMethod || null
    if (this.fetchMethod && typeof this.fetchMethod !== 'function') {
      throw new TypeError(
        'fetchMethod must be a function if specified'
      )
    }

    this.keyMap = new Map()
    this.keyList = new Array(max).fill(null)
    this.valList = new Array(max).fill(null)
    this.next = new UintArray(max)
    this.prev = new UintArray(max)
    this.head = 0
    this.tail = 0
    this.free = new Stack(max)
    this.initialFill = 1
    this.size = 0

    if (typeof dispose === 'function') {
      this.dispose = dispose
    }
    if (typeof disposeAfter === 'function') {
      this.disposeAfter = disposeAfter
      this.disposed = []
    } else {
      this.disposeAfter = null
      this.disposed = null
    }
    this.noDisposeOnSet = !!noDisposeOnSet
    this.noUpdateTTL = !!noUpdateTTL
    this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection

    if (this.maxSize !== 0) {
      if (!isPosInt(this.maxSize)) {
        throw new TypeError(
          'maxSize must be a positive integer if specified'
        )
      }
      this.initializeSizeTracking()
    }

    this.allowStale = !!allowStale || !!stale
    this.updateAgeOnGet = !!updateAgeOnGet
    this.updateAgeOnHas = !!updateAgeOnHas
    this.ttlResolution =
      isPosInt(ttlResolution) || ttlResolution === 0
        ? ttlResolution
        : 1
    this.ttlAutopurge = !!ttlAutopurge
    this.ttl = ttl || maxAge || 0
    if (this.ttl) {
      if (!isPosInt(this.ttl)) {
        throw new TypeError(
          'ttl must be a positive integer if specified'
        )
      }
      this.initializeTTLTracking()
    }

    // do not allow completely unbounded caches
    if (this.max === 0 && this.ttl === 0 && this.maxSize === 0) {
      throw new TypeError(
        'At least one of max, maxSize, or ttl is required'
      )
    }
    if (!this.ttlAutopurge && !this.max && !this.maxSize) {
      const code = 'LRU_CACHE_UNBOUNDED'
      if (shouldWarn(code)) {
        warned.add(code)
        const msg =
          'TTL caching without ttlAutopurge, max, or maxSize can ' +
          'result in unbounded memory consumption.'
        emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache)
      }
    }

    if (stale) {
      deprecatedOption('stale', 'allowStale')
    }
    if (maxAge) {
      deprecatedOption('maxAge', 'ttl')
    }
    if (length) {
      deprecatedOption('length', 'sizeCalculation')
    }
  }

  getRemainingTTL(key) {
    return this.has(key, { updateAgeOnHas: false }) ? Infinity : 0
  }

  initializeTTLTracking() {
    this.ttls = new ZeroArray(this.max)
    this.starts = new ZeroArray(this.max)

    this.setItemTTL = (index, ttl) => {
      this.starts[index] = ttl !== 0 ? perf.now() : 0
      this.ttls[index] = ttl
      if (ttl !== 0 && this.ttlAutopurge) {
        const t = setTimeout(() => {
          if (this.isStale(index)) {
            this.delete(this.keyList[index])
          }
        }, ttl + 1)
        /* istanbul ignore else - unref() not supported on all platforms */
        if (t.unref) {
          t.unref()
        }
      }
    }

    this.updateItemAge = index => {
      this.starts[index] = this.ttls[index] !== 0 ? perf.now() : 0
    }

    // debounce calls to perf.now() to 1s so we're not hitting
    // that costly call repeatedly.
    let cachedNow = 0
    const getNow = () => {
      const n = perf.now()
      if (this.ttlResolution > 0) {
        cachedNow = n
        const t = setTimeout(
          () => (cachedNow = 0),
          this.ttlResolution
        )
        /* istanbul ignore else - not available on all platforms */
        if (t.unref) {
          t.unref()
        }
      }
      return n
    }

    this.getRemainingTTL = key => {
      const index = this.keyMap.get(key)
      if (index === undefined) {
        return 0
      }
      return this.ttls[index] === 0 || this.starts[index] === 0
        ? Infinity
        : this.starts[index] +
            this.ttls[index] -
            (cachedNow || getNow())
    }

    this.isStale = index => {
      return (
        this.ttls[index] !== 0 &&
        this.starts[index] !== 0 &&
        (cachedNow || getNow()) - this.starts[index] >
          this.ttls[index]
      )
    }
  }
  updateItemAge(index) {}
  setItemTTL(index, ttl) {}
  isStale(index) {
    return false
  }

  initializeSizeTracking() {
    this.calculatedSize = 0
    this.sizes = new ZeroArray(this.max)
    this.removeItemSize = index =>
      (this.calculatedSize -= this.sizes[index])
    this.requireSize = (k, v, size, sizeCalculation) => {
      if (!isPosInt(size)) {
        if (sizeCalculation) {
          if (typeof sizeCalculation !== 'function') {
            throw new TypeError('sizeCalculation must be a function')
          }
          size = sizeCalculation(v, k)
          if (!isPosInt(size)) {
            throw new TypeError(
              'sizeCalculation return invalid (expect positive integer)'
            )
          }
        } else {
          throw new TypeError(
            'invalid size value (must be positive integer)'
          )
        }
      }
      return size
    }
    this.addItemSize = (index, v, k, size) => {
      this.sizes[index] = size
      const maxSize = this.maxSize - this.sizes[index]
      while (this.calculatedSize > maxSize) {
        this.evict(true)
      }
      this.calculatedSize += this.sizes[index]
    }
  }
  removeItemSize(index) {}
  addItemSize(index, v, k, size) {}
  requireSize(k, v, size, sizeCalculation) {
    if (size || sizeCalculation) {
      throw new TypeError(
        'cannot set size without setting maxSize on cache'
      )
    }
  }

  *indexes({ allowStale = this.allowStale } = {}) {
    if (this.size) {
      for (let i = this.tail; true; ) {
        if (!this.isValidIndex(i)) {
          break
        }
        if (allowStale || !this.isStale(i)) {
          yield i
        }
        if (i === this.head) {
          break
        } else {
          i = this.prev[i]
        }
      }
    }
  }

  *rindexes({ allowStale = this.allowStale } = {}) {
    if (this.size) {
      for (let i = this.head; true; ) {
        if (!this.isValidIndex(i)) {
          break
        }
        if (allowStale || !this.isStale(i)) {
          yield i
        }
        if (i === this.tail) {
          break
        } else {
          i = this.next[i]
        }
      }
    }
  }

  isValidIndex(index) {
    return this.keyMap.get(this.keyList[index]) === index
  }

  *entries() {
    for (const i of this.indexes()) {
      yield [this.keyList[i], this.valList[i]]
    }
  }
  *rentries() {
    for (const i of this.rindexes()) {
      yield [this.keyList[i], this.valList[i]]
    }
  }

  *keys() {
    for (const i of this.indexes()) {
      yield this.keyList[i]
    }
  }
  *rkeys() {
    for (const i of this.rindexes()) {
      yield this.keyList[i]
    }
  }

  *values() {
    for (const i of this.indexes()) {
      yield this.valList[i]
    }
  }
  *rvalues() {
    for (const i of this.rindexes()) {
      yield this.valList[i]
    }
  }

  [Symbol.iterator]() {
    return this.entries()
  }

  find(fn, getOptions = {}) {
    for (const i of this.indexes()) {
      if (fn(this.valList[i], this.keyList[i], this)) {
        return this.get(this.keyList[i], getOptions)
      }
    }
  }

  forEach(fn, thisp = this) {
    for (const i of this.indexes()) {
      fn.call(thisp, this.valList[i], this.keyList[i], this)
    }
  }

  rforEach(fn, thisp = this) {
    for (const i of this.rindexes()) {
      fn.call(thisp, this.valList[i], this.keyList[i], this)
    }
  }

  get prune() {
    deprecatedMethod('prune', 'purgeStale')
    return this.purgeStale
  }

  purgeStale() {
    let deleted = false
    for (const i of this.rindexes({ allowStale: true })) {
      if (this.isStale(i)) {
        this.delete(this.keyList[i])
        deleted = true
      }
    }
    return deleted
  }

  dump() {
    const arr = []
    for (const i of this.indexes()) {
      const key = this.keyList[i]
      const value = this.valList[i]
      const entry = { value }
      if (this.ttls) {
        entry.ttl = this.ttls[i]
      }
      if (this.sizes) {
        entry.size = this.sizes[i]
      }
      arr.unshift([key, entry])
    }
    return arr
  }

  load(arr) {
    this.clear()
    for (const [key, entry] of arr) {
      this.set(key, entry.value, entry)
    }
  }

  dispose(v, k, reason) {}

  set(
    k,
    v,
    {
      ttl = this.ttl,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
    } = {}
  ) {
    size = this.requireSize(k, v, size, sizeCalculation)
    let index = this.size === 0 ? undefined : this.keyMap.get(k)
    if (index === undefined) {
      // addition
      index = this.newIndex()
      this.keyList[index] = k
      this.valList[index] = v
      this.keyMap.set(k, index)
      this.next[this.tail] = index
      this.prev[index] = this.tail
      this.tail = index
      this.size++
      this.addItemSize(index, v, k, size)
      noUpdateTTL = false
    } else {
      // update
      const oldVal = this.valList[index]
      if (v !== oldVal) {
        if (this.isBackgroundFetch(oldVal)) {
          oldVal.__abortController.abort()
        } else {
          if (!noDisposeOnSet) {
            this.dispose(oldVal, k, 'set')
            if (this.disposeAfter) {
              this.disposed.push([oldVal, k, 'set'])
            }
          }
        }
        this.removeItemSize(index)
        this.valList[index] = v
        this.addItemSize(index, v, k, size)
      }
      this.moveToTail(index)
    }
    if (ttl !== 0 && this.ttl === 0 && !this.ttls) {
      this.initializeTTLTracking()
    }
    if (!noUpdateTTL) {
      this.setItemTTL(index, ttl)
    }
    if (this.disposeAfter) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift())
      }
    }
    return this
  }

  newIndex() {
    if (this.size === 0) {
      return this.tail
    }
    if (this.size === this.max && this.max !== 0) {
      return this.evict(false)
    }
    if (this.free.length !== 0) {
      return this.free.pop()
    }
    // initial fill, just keep writing down the list
    return this.initialFill++
  }

  pop() {
    if (this.size) {
      const val = this.valList[this.head]
      this.evict(true)
      return val
    }
  }

  evict(free) {
    const head = this.head
    const k = this.keyList[head]
    const v = this.valList[head]
    if (this.isBackgroundFetch(v)) {
      v.__abortController.abort()
    } else {
      this.dispose(v, k, 'evict')
      if (this.disposeAfter) {
        this.disposed.push([v, k, 'evict'])
      }
    }
    this.removeItemSize(head)
    // if we aren't about to use the index, then null these out
    if (free) {
      this.keyList[head] = null
      this.valList[head] = null
      this.free.push(head)
    }
    this.head = this.next[head]
    this.keyMap.delete(k)
    this.size--
    return head
  }

  has(k, { updateAgeOnHas = this.updateAgeOnHas } = {}) {
    const index = this.keyMap.get(k)
    if (index !== undefined) {
      if (!this.isStale(index)) {
        if (updateAgeOnHas) {
          this.updateItemAge(index)
        }
        return true
      }
    }
    return false
  }

  // like get(), but without any LRU updating or TTL expiration
  peek(k, { allowStale = this.allowStale } = {}) {
    const index = this.keyMap.get(k)
    if (index !== undefined && (allowStale || !this.isStale(index))) {
      return this.valList[index]
    }
  }

  backgroundFetch(k, index, options) {
    const v = index === undefined ? undefined : this.valList[index]
    if (this.isBackgroundFetch(v)) {
      return v
    }
    const ac = new AC()
    const fetchOpts = {
      signal: ac.signal,
      options,
    }
    const cb = v => {
      if (!ac.signal.aborted) {
        this.set(k, v, fetchOpts.options)
      }
      return v
    }
    const eb = er => {
      if (this.valList[index] === p) {
        const del =
          !options.noDeleteOnFetchRejection ||
          p.__staleWhileFetching === undefined
        if (del) {
          this.delete(k)
        } else {
          // still replace the *promise* with the stale value,
          // since we are done with the promise at this point.
          this.valList[index] = p.__staleWhileFetching
        }
      }
      if (p.__returned === p) {
        throw er
      }
    }
    const pcall = res => res(this.fetchMethod(k, v, fetchOpts))
    const p = new Promise(pcall).then(cb, eb)
    p.__abortController = ac
    p.__staleWhileFetching = v
    p.__returned = null
    if (index === undefined) {
      this.set(k, p, fetchOpts.options)
      index = this.keyMap.get(k)
    } else {
      this.valList[index] = p
    }
    return p
  }

  isBackgroundFetch(p) {
    return (
      p &&
      typeof p === 'object' &&
      typeof p.then === 'function' &&
      Object.prototype.hasOwnProperty.call(
        p,
        '__staleWhileFetching'
      ) &&
      Object.prototype.hasOwnProperty.call(p, '__returned') &&
      (p.__returned === p || p.__returned === null)
    )
  }

  // this takes the union of get() and set() opts, because it does both
  async fetch(
    k,
    {
      // get options
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      // set options
      ttl = this.ttl,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
    } = {}
  ) {
    if (!this.fetchMethod) {
      return this.get(k, { allowStale, updateAgeOnGet })
    }

    const options = {
      allowStale,
      updateAgeOnGet,
      ttl,
      noDisposeOnSet,
      size,
      sizeCalculation,
      noUpdateTTL,
      noDeleteOnFetchRejection,
    }

    let index = this.keyMap.get(k)
    if (index === undefined) {
      const p = this.backgroundFetch(k, index, options)
      return (p.__returned = p)
    } else {
      // in cache, maybe already fetching
      const v = this.valList[index]
      if (this.isBackgroundFetch(v)) {
        return allowStale && v.__staleWhileFetching !== undefined
          ? v.__staleWhileFetching
          : (v.__returned = v)
      }

      if (!this.isStale(index)) {
        this.moveToTail(index)
        if (updateAgeOnGet) {
          this.updateItemAge(index)
        }
        return v
      }

      // ok, it is stale, and not already fetching
      // refresh the cache.
      const p = this.backgroundFetch(k, index, options)
      return allowStale && p.__staleWhileFetching !== undefined
        ? p.__staleWhileFetching
        : (p.__returned = p)
    }
  }

  get(
    k,
    {
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
    } = {}
  ) {
    const index = this.keyMap.get(k)
    if (index !== undefined) {
      const value = this.valList[index]
      const fetching = this.isBackgroundFetch(value)
      if (this.isStale(index)) {
        // delete only if not an in-flight background fetch
        if (!fetching) {
          this.delete(k)
          return allowStale ? value : undefined
        } else {
          return allowStale ? value.__staleWhileFetching : undefined
        }
      } else {
        // if we're currently fetching it, we don't actually have it yet
        // it's not stale, which means this isn't a staleWhileRefetching,
        // so we just return undefined
        if (fetching) {
          return undefined
        }
        this.moveToTail(index)
        if (updateAgeOnGet) {
          this.updateItemAge(index)
        }
        return value
      }
    }
  }

  connect(p, n) {
    this.prev[n] = p
    this.next[p] = n
  }

  moveToTail(index) {
    // if tail already, nothing to do
    // if head, move head to next[index]
    // else
    //   move next[prev[index]] to next[index] (head has no prev)
    //   move prev[next[index]] to prev[index]
    // prev[index] = tail
    // next[tail] = index
    // tail = index
    if (index !== this.tail) {
      if (index === this.head) {
        this.head = this.next[index]
      } else {
        this.connect(this.prev[index], this.next[index])
      }
      this.connect(this.tail, index)
      this.tail = index
    }
  }

  get del() {
    deprecatedMethod('del', 'delete')
    return this.delete
  }

  delete(k) {
    let deleted = false
    if (this.size !== 0) {
      const index = this.keyMap.get(k)
      if (index !== undefined) {
        deleted = true
        if (this.size === 1) {
          this.clear()
        } else {
          this.removeItemSize(index)
          const v = this.valList[index]
          if (this.isBackgroundFetch(v)) {
            v.__abortController.abort()
          } else {
            this.dispose(v, k, 'delete')
            if (this.disposeAfter) {
              this.disposed.push([v, k, 'delete'])
            }
          }
          this.keyMap.delete(k)
          this.keyList[index] = null
          this.valList[index] = null
          if (index === this.tail) {
            this.tail = this.prev[index]
          } else if (index === this.head) {
            this.head = this.next[index]
          } else {
            this.next[this.prev[index]] = this.next[index]
            this.prev[this.next[index]] = this.prev[index]
          }
          this.size--
          this.free.push(index)
        }
      }
    }
    if (this.disposed) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift())
      }
    }
    return deleted
  }

  clear() {
    for (const index of this.rindexes({ allowStale: true })) {
      const v = this.valList[index]
      if (this.isBackgroundFetch(v)) {
        v.__abortController.abort()
      } else {
        const k = this.keyList[index]
        this.dispose(v, k, 'delete')
        if (this.disposeAfter) {
          this.disposed.push([v, k, 'delete'])
        }
      }
    }

    this.keyMap.clear()
    this.valList.fill(null)
    this.keyList.fill(null)
    if (this.ttls) {
      this.ttls.fill(0)
      this.starts.fill(0)
    }
    if (this.sizes) {
      this.sizes.fill(0)
    }
    this.head = 0
    this.tail = 0
    this.initialFill = 1
    this.free.length = 0
    this.calculatedSize = 0
    this.size = 0
    if (this.disposed) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift())
      }
    }
  }

  get reset() {
    deprecatedMethod('reset', 'clear')
    return this.clear
  }

  get length() {
    deprecatedProperty('length', 'size')
    return this.size
  }

  static get AbortController() {
    return AC
  }
  static get AbortSignal() {
    return AS
  }
}

module.exports = LRUCache


/***/ }),

/***/ "./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Abs": () => (/* binding */ Abs),
/* harmony export */   "Absent": () => (/* binding */ Absent),
/* harmony export */   "AbsentOverTime": () => (/* binding */ AbsentOverTime),
/* harmony export */   "Acos": () => (/* binding */ Acos),
/* harmony export */   "Acosh": () => (/* binding */ Acosh),
/* harmony export */   "Add": () => (/* binding */ Add),
/* harmony export */   "AggregateExpr": () => (/* binding */ AggregateExpr),
/* harmony export */   "AggregateModifier": () => (/* binding */ AggregateModifier),
/* harmony export */   "AggregateOp": () => (/* binding */ AggregateOp),
/* harmony export */   "And": () => (/* binding */ And$1),
/* harmony export */   "Asin": () => (/* binding */ Asin),
/* harmony export */   "Asinh": () => (/* binding */ Asinh),
/* harmony export */   "At": () => (/* binding */ At),
/* harmony export */   "AtModifierPreprocessors": () => (/* binding */ AtModifierPreprocessors),
/* harmony export */   "Atan": () => (/* binding */ Atan),
/* harmony export */   "Atan2": () => (/* binding */ Atan2$1),
/* harmony export */   "Atanh": () => (/* binding */ Atanh),
/* harmony export */   "Avg": () => (/* binding */ Avg$1),
/* harmony export */   "AvgOverTime": () => (/* binding */ AvgOverTime),
/* harmony export */   "BinModifiers": () => (/* binding */ BinModifiers),
/* harmony export */   "BinaryExpr": () => (/* binding */ BinaryExpr),
/* harmony export */   "Bool": () => (/* binding */ Bool$1),
/* harmony export */   "Bottomk": () => (/* binding */ Bottomk$1),
/* harmony export */   "By": () => (/* binding */ By$1),
/* harmony export */   "Ceil": () => (/* binding */ Ceil),
/* harmony export */   "Changes": () => (/* binding */ Changes),
/* harmony export */   "Clamp": () => (/* binding */ Clamp),
/* harmony export */   "ClampMax": () => (/* binding */ ClampMax),
/* harmony export */   "ClampMin": () => (/* binding */ ClampMin),
/* harmony export */   "Cos": () => (/* binding */ Cos),
/* harmony export */   "Cosh": () => (/* binding */ Cosh),
/* harmony export */   "Count": () => (/* binding */ Count$1),
/* harmony export */   "CountOverTime": () => (/* binding */ CountOverTime),
/* harmony export */   "CountValues": () => (/* binding */ CountValues$1),
/* harmony export */   "DayOfMonth": () => (/* binding */ DayOfMonth),
/* harmony export */   "DayOfWeek": () => (/* binding */ DayOfWeek),
/* harmony export */   "DaysInMonth": () => (/* binding */ DaysInMonth),
/* harmony export */   "Deg": () => (/* binding */ Deg),
/* harmony export */   "Delta": () => (/* binding */ Delta),
/* harmony export */   "Deriv": () => (/* binding */ Deriv),
/* harmony export */   "Div": () => (/* binding */ Div),
/* harmony export */   "Duration": () => (/* binding */ Duration),
/* harmony export */   "End": () => (/* binding */ End$1),
/* harmony export */   "Eql": () => (/* binding */ Eql),
/* harmony export */   "EqlRegex": () => (/* binding */ EqlRegex),
/* harmony export */   "EqlSingle": () => (/* binding */ EqlSingle),
/* harmony export */   "Exp": () => (/* binding */ Exp),
/* harmony export */   "Expr": () => (/* binding */ Expr),
/* harmony export */   "Floor": () => (/* binding */ Floor),
/* harmony export */   "FunctionCall": () => (/* binding */ FunctionCall),
/* harmony export */   "FunctionCallArgs": () => (/* binding */ FunctionCallArgs),
/* harmony export */   "FunctionCallBody": () => (/* binding */ FunctionCallBody),
/* harmony export */   "FunctionIdentifier": () => (/* binding */ FunctionIdentifier),
/* harmony export */   "Group": () => (/* binding */ Group$1),
/* harmony export */   "GroupLeft": () => (/* binding */ GroupLeft$1),
/* harmony export */   "GroupRight": () => (/* binding */ GroupRight$1),
/* harmony export */   "GroupingLabel": () => (/* binding */ GroupingLabel),
/* harmony export */   "GroupingLabelList": () => (/* binding */ GroupingLabelList),
/* harmony export */   "GroupingLabels": () => (/* binding */ GroupingLabels),
/* harmony export */   "Gte": () => (/* binding */ Gte),
/* harmony export */   "Gtr": () => (/* binding */ Gtr),
/* harmony export */   "HistogramQuantile": () => (/* binding */ HistogramQuantile),
/* harmony export */   "HoltWinters": () => (/* binding */ HoltWinters),
/* harmony export */   "Hour": () => (/* binding */ Hour),
/* harmony export */   "Idelta": () => (/* binding */ Idelta),
/* harmony export */   "Identifier": () => (/* binding */ Identifier),
/* harmony export */   "Ignoring": () => (/* binding */ Ignoring$1),
/* harmony export */   "Increase": () => (/* binding */ Increase),
/* harmony export */   "Irate": () => (/* binding */ Irate),
/* harmony export */   "LabelJoin": () => (/* binding */ LabelJoin),
/* harmony export */   "LabelMatchList": () => (/* binding */ LabelMatchList),
/* harmony export */   "LabelMatcher": () => (/* binding */ LabelMatcher),
/* harmony export */   "LabelMatchers": () => (/* binding */ LabelMatchers),
/* harmony export */   "LabelName": () => (/* binding */ LabelName),
/* harmony export */   "LabelReplace": () => (/* binding */ LabelReplace),
/* harmony export */   "LastOverTime": () => (/* binding */ LastOverTime),
/* harmony export */   "LineComment": () => (/* binding */ LineComment),
/* harmony export */   "Ln": () => (/* binding */ Ln),
/* harmony export */   "Log10": () => (/* binding */ Log10),
/* harmony export */   "Log2": () => (/* binding */ Log2),
/* harmony export */   "Lss": () => (/* binding */ Lss),
/* harmony export */   "Lte": () => (/* binding */ Lte),
/* harmony export */   "MatchOp": () => (/* binding */ MatchOp),
/* harmony export */   "MatrixSelector": () => (/* binding */ MatrixSelector),
/* harmony export */   "Max": () => (/* binding */ Max$1),
/* harmony export */   "MaxOverTime": () => (/* binding */ MaxOverTime),
/* harmony export */   "MetricIdentifier": () => (/* binding */ MetricIdentifier),
/* harmony export */   "MetricName": () => (/* binding */ MetricName),
/* harmony export */   "Min": () => (/* binding */ Min$1),
/* harmony export */   "MinOverTime": () => (/* binding */ MinOverTime),
/* harmony export */   "Minute": () => (/* binding */ Minute),
/* harmony export */   "Mod": () => (/* binding */ Mod),
/* harmony export */   "Month": () => (/* binding */ Month),
/* harmony export */   "Mul": () => (/* binding */ Mul),
/* harmony export */   "Neq": () => (/* binding */ Neq),
/* harmony export */   "NeqRegex": () => (/* binding */ NeqRegex),
/* harmony export */   "NumberLiteral": () => (/* binding */ NumberLiteral),
/* harmony export */   "Offset": () => (/* binding */ Offset$1),
/* harmony export */   "OffsetExpr": () => (/* binding */ OffsetExpr),
/* harmony export */   "On": () => (/* binding */ On$1),
/* harmony export */   "OnOrIgnoring": () => (/* binding */ OnOrIgnoring),
/* harmony export */   "Or": () => (/* binding */ Or$1),
/* harmony export */   "ParenExpr": () => (/* binding */ ParenExpr),
/* harmony export */   "Pi": () => (/* binding */ Pi),
/* harmony export */   "Pow": () => (/* binding */ Pow),
/* harmony export */   "PredictLinear": () => (/* binding */ PredictLinear),
/* harmony export */   "PresentOverTime": () => (/* binding */ PresentOverTime),
/* harmony export */   "PromQL": () => (/* binding */ PromQL),
/* harmony export */   "Quantile": () => (/* binding */ Quantile$1),
/* harmony export */   "QuantileOverTime": () => (/* binding */ QuantileOverTime),
/* harmony export */   "Rad": () => (/* binding */ Rad),
/* harmony export */   "Rate": () => (/* binding */ Rate),
/* harmony export */   "Resets": () => (/* binding */ Resets),
/* harmony export */   "Round": () => (/* binding */ Round),
/* harmony export */   "Scalar": () => (/* binding */ Scalar),
/* harmony export */   "Sgn": () => (/* binding */ Sgn),
/* harmony export */   "Sin": () => (/* binding */ Sin),
/* harmony export */   "Sinh": () => (/* binding */ Sinh),
/* harmony export */   "Sort": () => (/* binding */ Sort),
/* harmony export */   "SortDesc": () => (/* binding */ SortDesc),
/* harmony export */   "Sqrt": () => (/* binding */ Sqrt),
/* harmony export */   "Start": () => (/* binding */ Start$1),
/* harmony export */   "Stddev": () => (/* binding */ Stddev$1),
/* harmony export */   "StddevOverTime": () => (/* binding */ StddevOverTime),
/* harmony export */   "Stdvar": () => (/* binding */ Stdvar$1),
/* harmony export */   "StdvarOverTime": () => (/* binding */ StdvarOverTime),
/* harmony export */   "StepInvariantExpr": () => (/* binding */ StepInvariantExpr),
/* harmony export */   "StringLiteral": () => (/* binding */ StringLiteral),
/* harmony export */   "Sub": () => (/* binding */ Sub),
/* harmony export */   "SubqueryExpr": () => (/* binding */ SubqueryExpr),
/* harmony export */   "Sum": () => (/* binding */ Sum$1),
/* harmony export */   "SumOverTime": () => (/* binding */ SumOverTime),
/* harmony export */   "Tan": () => (/* binding */ Tan),
/* harmony export */   "Tanh": () => (/* binding */ Tanh),
/* harmony export */   "Time": () => (/* binding */ Time),
/* harmony export */   "Timestamp": () => (/* binding */ Timestamp),
/* harmony export */   "Topk": () => (/* binding */ Topk$1),
/* harmony export */   "UnaryExpr": () => (/* binding */ UnaryExpr),
/* harmony export */   "UnaryOp": () => (/* binding */ UnaryOp),
/* harmony export */   "Unless": () => (/* binding */ Unless$1),
/* harmony export */   "Vector": () => (/* binding */ Vector),
/* harmony export */   "VectorSelector": () => (/* binding */ VectorSelector),
/* harmony export */   "Without": () => (/* binding */ Without$1),
/* harmony export */   "Year": () => (/* binding */ Year),
/* harmony export */   "inf": () => (/* binding */ inf$1),
/* harmony export */   "nan": () => (/* binding */ nan$1),
/* harmony export */   "parser": () => (/* binding */ parser)
/* harmony export */ });
/* harmony import */ var _lezer_lr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@lezer-lr-npm-0.15.8-8c481c39cd-e741225d6a.zip/node_modules/@lezer/lr/dist/index.js");


// This file was generated by lezer-generator. You probably shouldn't edit it.
const 
  inf = 146,
  nan = 147,
  Bool = 1,
  Ignoring = 2,
  On = 3,
  GroupLeft = 4,
  GroupRight = 5,
  Offset = 6,
  Atan2 = 7,
  Avg = 8,
  Bottomk = 9,
  Count = 10,
  CountValues = 11,
  Group = 12,
  Max = 13,
  Min = 14,
  Quantile = 15,
  Stddev = 16,
  Stdvar = 17,
  Sum = 18,
  Topk = 19,
  By = 20,
  Without = 21,
  And = 22,
  Or = 23,
  Unless = 24,
  Start = 25,
  End = 26;

// Copyright 2021 The Prometheus Authors

const keywordTokens = {
    inf: inf,
    nan: nan,
    bool: Bool,
    ignoring: Ignoring,
    on: On,
    group_left: GroupLeft,
    group_right: GroupRight,
    offset: Offset,
};

const specializeIdentifier = (value, stack) => {
    return keywordTokens[value.toLowerCase()] || -1;
};

const contextualKeywordTokens = {
    avg: Avg,
    atan2: Atan2,
    bottomk: Bottomk,
    count: Count,
    count_values: CountValues,
    group: Group,
    max: Max,
    min: Min,
    quantile: Quantile,
    stddev: Stddev,
    stdvar: Stdvar,
    sum: Sum,
    topk: Topk,
    by: By,
    without: Without,
    and: And,
    or: Or,
    unless: Unless,
    start: Start,
    end: End,
};

const extendIdentifier = (value, stack) => {
    return contextualKeywordTokens[value.toLowerCase()] || -1;
};

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Identifier = {__proto__:null,absent_over_time:307, absent:309, abs:311, acos:313, acosh:315, asin:317, asinh:319, atan:321, atanh:323, avg_over_time:325, ceil:327, changes:329, clamp:331, clamp_max:333, clamp_min:335, cos:337, cosh:339, count_over_time:341, days_in_month:343, day_of_month:345, day_of_week:347, deg:349, delta:351, deriv:353, exp:355, floor:357, histogram_quantile:359, holt_winters:361, hour:363, idelta:365, increase:367, irate:369, label_replace:371, label_join:373, last_over_time:375, ln:377, log10:379, log2:381, max_over_time:383, min_over_time:385, minute:387, month:389, pi:391, predict_linear:393, present_over_time:395, quantile_over_time:397, rad:399, rate:401, resets:403, round:405, scalar:407, sgn:409, sin:411, sinh:413, sort:415, sort_desc:417, sqrt:419, stddev_over_time:421, stdvar_over_time:423, sum_over_time:425, tan:427, tanh:429, timestamp:431, time:433, vector:435, year:437};
const parser = _lezer_lr__WEBPACK_IMPORTED_MODULE_0__.LRParser.deserialize({
  version: 13,
  states: "6[OYQPOOO&{QPOOOOQO'#C{'#C{O'QQPO'#CzQ']QQOOOOQO'#De'#DeO'WQPO'#DdOOQO'#E}'#E}O(jQPO'#FTOYQPO'#FPOYQPO'#FSOOQO'#FV'#FVO.fQSO'#FWO.nQQO'#FUOOQO'#FU'#FUOOQO'#Cy'#CyOOQO'#Df'#DfOOQO'#Dh'#DhOOQO'#Di'#DiOOQO'#Dj'#DjOOQO'#Dk'#DkOOQO'#Dl'#DlOOQO'#Dm'#DmOOQO'#Dn'#DnOOQO'#Do'#DoOOQO'#Dp'#DpOOQO'#Dq'#DqOOQO'#Dr'#DrOOQO'#Ds'#DsOOQO'#Dt'#DtOOQO'#Du'#DuOOQO'#Dv'#DvOOQO'#Dw'#DwOOQO'#Dx'#DxOOQO'#Dy'#DyOOQO'#Dz'#DzOOQO'#D{'#D{OOQO'#D|'#D|OOQO'#D}'#D}OOQO'#EO'#EOOOQO'#EP'#EPOOQO'#EQ'#EQOOQO'#ER'#EROOQO'#ES'#ESOOQO'#ET'#ETOOQO'#EU'#EUOOQO'#EV'#EVOOQO'#EW'#EWOOQO'#EX'#EXOOQO'#EY'#EYOOQO'#EZ'#EZOOQO'#E['#E[OOQO'#E]'#E]OOQO'#E^'#E^OOQO'#E_'#E_OOQO'#E`'#E`OOQO'#Ea'#EaOOQO'#Eb'#EbOOQO'#Ec'#EcOOQO'#Ed'#EdOOQO'#Ee'#EeOOQO'#Ef'#EfOOQO'#Eg'#EgOOQO'#Eh'#EhOOQO'#Ei'#EiOOQO'#Ej'#EjOOQO'#Ek'#EkOOQO'#El'#ElOOQO'#Em'#EmOOQO'#En'#EnOOQO'#Eo'#EoOOQO'#Ep'#EpOOQO'#Eq'#EqOOQO'#Er'#ErOOQO'#Es'#EsOOQO'#Et'#EtOOQO'#Eu'#EuOOQO'#Ev'#EvOOQO'#Ew'#EwOOQO'#Ex'#ExOOQO'#Ey'#EyOOQO'#Ez'#EzQOQPOOO0XQPO'#C|O0^QPO'#DRO'WQPO,59fO0eQQO,59fO2RQPO,59oO2RQPO,59oO2RQPO,59oO2RQPO,59oO2RQPO,59oO7}QQO,5;gO8SQQO,5;jO8[QPO,5;yOOQO,5:O,5:OOOQO,5;i,5;iO8sQQO,5;kO8zQQO,5;nO:bQPO'#FYO:pQPO,5;rOOQO'#FX'#FXOOQO,5;r,5;rOOQO,5;p,5;pO:xQSO'#C}OOQO,59h,59hO;QQPO,59mO;YQQO'#DSOOQO,59m,59mOOQO1G/Q1G/QO0XQPO'#DWOAVQPO'#DVOAaQPO'#DVOYQPO1G/ZOYQPO1G/ZOYQPO1G/ZOYQPO1G/ZOYQPO1G/ZOAkQSO1G1ROOQO1G1U1G1UOAsQQO1G1UOAxQPO'#E}OOQO'#Fa'#FaOOQO1G1e1G1eOBTQPO1G1eOOQO1G1V1G1VOOQO'#FZ'#FZOBYQPO,5;tOB_QSO1G1^OOQO1G1^1G1^OOQO'#DP'#DPOBgQPO,59iOOQO'#DO'#DOOOQO,59i,59iOYQPO,59nOOQO1G/X1G/XOOQO,59r,59rOH_QPO,59qOHfQPO,59qOI}QQO7+$uOJ_QQO7+$uOKsQQO7+$uOLZQQO7+$uOMrQQO7+$uOOQO7+&m7+&mON]QQO7+&sOOQO7+&p7+&pONeQPO7+'POOQO1G1`1G1`OOQO1G1_1G1_OOQO7+&x7+&xONjQSO1G/TOOQO1G/T1G/TONrQQO1G/YOOQO1G/]1G/]ON|QPO1G/]OOQO<<J_<<J_O!&oQPO<<J_OOQO<<Jk<<JkOOQO1G/U1G/UOOQO7+$o7+$oOOQO7+$w7+$wOOQOAN?yAN?y",
  stateData: "!&t~O$ZOSkOS~OWQOXQOYQOZQO[QO]QO^QO_QO`QOaQObQOcQO!ZZO#t_O$WVO$XVO$[XO$_`O$`aO$abO$bcO$cdO$deO$efO$fgO$ghO$hiO$ijO$jkO$klO$lmO$mnO$noO$opO$pqO$qrO$rsO$stO$tuO$uvO$vwO$wxO$xyO$yzO$z{O${|O$|}O$}!OO%O!PO%P!QO%Q!RO%R!SO%S!TO%T!UO%U!VO%V!WO%W!XO%X!YO%Y!ZO%Z![O%[!]O%]!^O%^!_O%_!`O%`!aO%a!bO%b!cO%c!dO%d!eO%e!fO%f!gO%g!hO%h!iO%i!jO%j!kO%k!lO%l!mO%m!nO%n!oO%o!pO%p!qO%q!rO%r!sO%uWO%vWO%wVO%y[O~O!ZZO~Od!uOe!uO$[!vO~OU#POV!yOf!|Og!}Oh!|Ox!yO{!yO|!yO}!yO!O!zO!P!zO!Q!{O!R!{O!S!{O!T!{O!U!{O!V!{O$S#QO%s#OO~O$W#SO$X#SO%w#SOW#wXX#wXY#wXZ#wX[#wX]#wX^#wX_#wX`#wXa#wXb#wXc#wX!Z#wX#t#wX$W#wX$X#wX$[#wX$_#wX$`#wX$a#wX$b#wX$c#wX$d#wX$e#wX$f#wX$g#wX$h#wX$i#wX$j#wX$k#wX$l#wX$m#wX$n#wX$o#wX$p#wX$q#wX$r#wX$s#wX$t#wX$u#wX$v#wX$w#wX$x#wX$y#wX$z#wX${#wX$|#wX$}#wX%O#wX%P#wX%Q#wX%R#wX%S#wX%T#wX%U#wX%V#wX%W#wX%X#wX%Y#wX%Z#wX%[#wX%]#wX%^#wX%_#wX%`#wX%a#wX%b#wX%c#wX%d#wX%e#wX%f#wX%g#wX%h#wX%i#wX%j#wX%k#wX%l#wX%m#wX%n#wX%o#wX%p#wX%q#wX%r#wX%u#wX%v#wX%w#wX%y#wX~Ot#VO%z#YO~O%y[OU#xXV#xXf#xXg#xXh#xXx#xX{#xX|#xX}#xX!O#xX!P#xX!Q#xX!R#xX!S#xX!T#xX!U#xX!V#xX$S#xX$V#xX%s#xX$^#xX$]#xX~O$[#[O~O$^#`O~PYOd!uOe!uOUnaVnafnagnahnaxna{na|na}na!Ona!Pna!Qna!Rna!Sna!Tna!Una!Vna$Sna$Vna%sna$^na$]na~OP#dOQ#bOR#bOWyPXyPYyPZyP[yP]yP^yP_yP`yPayPbyPcyP!ZyP#tyP$WyP$XyP$[yP$_yP$`yP$ayP$byP$cyP$dyP$eyP$fyP$gyP$hyP$iyP$jyP$kyP$lyP$myP$nyP$oyP$pyP$qyP$ryP$syP$tyP$uyP$vyP$wyP$xyP$yyP$zyP${yP$|yP$}yP%OyP%PyP%QyP%RyP%SyP%TyP%UyP%VyP%WyP%XyP%YyP%ZyP%[yP%]yP%^yP%_yP%`yP%ayP%byP%cyP%dyP%eyP%fyP%gyP%hyP%iyP%jyP%kyP%lyP%myP%nyP%oyP%pyP%qyP%ryP%uyP%vyP%wyP%yyP~O#p#jO~O!P#lO#p#kO~Oi#nOj#nO$WVO$XVO%u#mO%v#mO%wVO~O$^#qO~P']Ox!yOU#vaV#vaf#vag#vah#va{#va|#va}#va!O#va!P#va!Q#va!R#va!S#va!T#va!U#va!V#va$S#va$V#va%s#va$^#va$]#va~O!V#rO$O#rO$P#rO$Q#rO~O$]#tO%z#uO~Ot#vO$^#yO~O$]#zO$^#{O~O$]vX$^vX~P']OWyXXyXYyXZyX[yX]yX^yX_yX`yXayXbyXcyX!ZyX#tyX$WyX$XyX$[yX$_yX$`yX$ayX$byX$cyX$dyX$eyX$fyX$gyX$hyX$iyX$jyX$kyX$lyX$myX$nyX$oyX$pyX$qyX$ryX$syX$tyX$uyX$vyX$wyX$xyX$yyX$zyX${yX$|yX$}yX%OyX%PyX%QyX%RyX%SyX%TyX%UyX%VyX%WyX%XyX%YyX%ZyX%[yX%]yX%^yX%_yX%`yX%ayX%byX%cyX%dyX%eyX%fyX%gyX%hyX%iyX%jyX%kyX%lyX%myX%nyX%oyX%pyX%qyX%ryX%uyX%vyX%wyX%yyX~OS#}OT#}O~P;dOQ#bOR#bO~P;dO%t$UO%x$VO~O#p$WO~O$W#SO$X#SO%w#SO~O$[$XO~O#t$YO~Ot#VO%z$[O~O$]$]O$^$^O~OWyaXyaYyaZya[ya]ya^ya_ya`yaayabyacya!Zya#tya$Wya$Xya$_ya$`ya$aya$bya$cya$dya$eya$fya$gya$hya$iya$jya$kya$lya$mya$nya$oya$pya$qya$rya$sya$tya$uya$vya$wya$xya$yya$zya${ya$|ya$}ya%Oya%Pya%Qya%Rya%Sya%Tya%Uya%Vya%Wya%Xya%Yya%Zya%[ya%]ya%^ya%_ya%`ya%aya%bya%cya%dya%eya%fya%gya%hya%iya%jya%kya%lya%mya%nya%oya%pya%qya%rya%uya%vya%wya%yya~O$[#[O~PBoOS$aOT$aO$[ya~PBoOx!yOUwqfwqgwqhwq!Owq!Pwq!Qwq!Rwq!Swq!Twq!Uwq!Vwq$Swq$Vwq%swq$^wq$]wq~OVwq{wq|wq}wq~PHsOV!yO{!yO|!yO}!yO~PHsOV!yOx!yO{!yO|!yO}!yO!O!zO!P!zOUwqfwqgwqhwq$Swq$Vwq%swq$^wq$]wq~O!Qwq!Rwq!Swq!Twq!Uwq!Vwq~PJoO!Q!{O!R!{O!S!{O!T!{O!U!{O!V!{O~PJoOV!yOf!|Oh!|Ox!yO{!yO|!yO}!yO!O!zO!P!zO!Q!{O!R!{O!S!{O!T!{O!U!{O!V!{O~OUwqgwq$Swq$Vwq%swq$^wq$]wq~PLqO#p$cO%t$bO~O$^$dO~Ot#vO$^$fO~O$]vi$^vi~P']O$[#[OWyiXyiYyiZyi[yi]yi^yi_yi`yiayibyicyi!Zyi#tyi$Wyi$Xyi$_yi$`yi$ayi$byi$cyi$dyi$eyi$fyi$gyi$hyi$iyi$jyi$kyi$lyi$myi$nyi$oyi$pyi$qyi$ryi$syi$tyi$uyi$vyi$wyi$xyi$yyi$zyi${yi$|yi$}yi%Oyi%Pyi%Qyi%Ryi%Syi%Tyi%Uyi%Vyi%Wyi%Xyi%Yyi%Zyi%[yi%]yi%^yi%_yi%`yi%ayi%byi%cyi%dyi%eyi%fyi%gyi%hyi%iyi%jyi%kyi%lyi%myi%nyi%oyi%pyi%qyi%ryi%uyi%vyi%wyi%yyi~O%t$hO~O",
  goto: "(u$UPPPPPPPPPPPPPPPPPPPPPPPPPPPPP$V$u%R%_%e%q%tP%z&T$uP&W&gPPPPPPPPPPP$u&q&}P&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}$uP'Z$u$uP$u$u'j$u'v(V(f(i(oPPP$uP(rQSOQ#TXQ#UYQ#_!vQ$P#eQ$Q#fQ$R#gQ$S#hQ$T#iR$_#ze_OXY!v#e#f#g#h#i#zeROXY!v#e#f#g#h#i#zQ!wRR#a!xQ#]!uQ#|#bQ$`#}R$g$aR#w#[Q#x#[R$e$]Q!xRQ#RUR#a!wR#^!vQ#e!yQ#f!zQ#g!{Q#h!|R#i!}Y#c!y!z!{!|!}R$O#deUOXY!v#e#f#g#h#i#zeTOXY!v#e#f#g#h#i#zd_OXY!v#e#f#g#h#i#zR#o#QeYOXY!v#e#f#g#h#i#zd]OXY!v#e#f#g#h#i#zR!tPd^OXY!v#e#f#g#h#i#zR#Z]R#W[Q#X[R$Z#tR#s#VR#p#Q",
  nodeNames: "⚠ Bool Ignoring On GroupLeft GroupRight Offset Atan2 Avg Bottomk Count CountValues Group Max Min Quantile Stddev Stdvar Sum Topk By Without And Or Unless Start End LineComment PromQL Expr AggregateExpr AggregateOp AggregateModifier GroupingLabels GroupingLabelList GroupingLabel LabelName FunctionCallBody FunctionCallArgs BinaryExpr Pow BinModifiers OnOrIgnoring Mul Div Mod Add Sub Eql Gte Gtr Lte Lss Neq FunctionCall FunctionIdentifier AbsentOverTime Identifier Absent Abs Acos Acosh Asin Asinh Atan Atanh AvgOverTime Ceil Changes Clamp ClampMax ClampMin Cos Cosh CountOverTime DaysInMonth DayOfMonth DayOfWeek Deg Delta Deriv Exp Floor HistogramQuantile HoltWinters Hour Idelta Increase Irate LabelReplace LabelJoin LastOverTime Ln Log10 Log2 MaxOverTime MinOverTime Minute Month Pi PredictLinear PresentOverTime QuantileOverTime Rad Rate Resets Round Scalar Sgn Sin Sinh Sort SortDesc Sqrt StddevOverTime StdvarOverTime SumOverTime Tan Tanh Timestamp Time Vector Year MatrixSelector Duration NumberLiteral OffsetExpr ParenExpr StringLiteral SubqueryExpr UnaryExpr UnaryOp VectorSelector MetricIdentifier LabelMatchers LabelMatchList LabelMatcher MatchOp EqlSingle EqlRegex NeqRegex StepInvariantExpr At AtModifierPreprocessors MetricName",
  maxTerm: 226,
  skippedNodes: [0,27],
  repeatNodeCount: 0,
  tokenData: "1R~RwX^#lpq#lqr$ars$tst%huv%swx%xxy&gyz&lz{&q{|&v|}&}}!O'S!O!P'Z!P!Q(Z!Q!R(`!R![)W![!]-r!^!_.n!_!`.{!`!a/b!b!c/o!c!}/t!}#O0[#P#Q0a#Q#R0f#R#S/t#S#T0k#T#o/t#o#p0w#q#r0|#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~#qY$Z~X^#lpq#l#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~$dQ!_!`$j#r#s$o~$oO!V~~$tO$Q~~$yU#t~OY$tZr$trs%]s#O$t#O#P%b#P~$t~%bO#t~~%ePO~$t~%mQk~OY%hZ~%h~%xO}~~%}U#t~OY%xZw%xwx%]x#O%x#O#P&a#P~%x~&dPO~%x~&lO$[~~&qO$^~~&vO{~R&}O%vP!OQ~'SO$]~R'ZO%uP!PQP'^P!Q!['aP'fR%wP!Q!['a!g!h'o#X#Y'oP'rR{|'{}!O'{!Q![(RP(OP!Q![(RP(WP%wP!Q![(R~(`O|~R(eZ%wP!O!P'a!Q![)W!g!h'o#W#X){#X#Y'o#[#]*d#a#b*x#g#h+l#k#l+}#l#m-W#m#n,iR)]Y%wP!O!P'a!Q![)W!g!h'o#W#X){#X#Y'o#[#]*d#a#b*x#g#h+l#k#l+}#m#n,iQ*QP#pQ!Q![*TQ*WS!Q![*T#[#]*d#a#b*x#g#h+lQ*iP#pQ!Q![*lQ*oR!Q![*l#a#b*x#g#h+lQ*}Q#pQ!Q![+T#g#h+gQ+WR!Q![+T#a#b+a#g#h+lQ+dP#g#h+gQ+lO#pQQ+qP#pQ!Q![+tQ+wQ!Q![+t#a#b+aQ,SP#pQ!Q![,VQ,YT!Q![,V#W#X){#[#]*d#a#b*x#g#h+lQ,nP#pQ!Q![,qQ,tU!Q![,q#W#X){#[#]*d#a#b*x#g#h+l#k#l+}P-ZR!Q![-d!c!i-d#T#Z-dP-iR%wP!Q![-d!c!i-d#T#Z-dV-yT%xS!ZR!Q![.Y![!].Y!c!}.Y#R#S.Y#T#o.YR._T!ZR!Q![.Y![!].Y!c!}.Y#R#S.Y#T#o.Y~.sP!U~!_!`.v~.{O!T~~/QQ$OP!_!`/W#r#s/]Q/]O!QQ~/bO$P~~/gP!S~!_!`/j~/oO!R~~/tO$S~V/{T!ZRtS!Q![/t![!].Y!c!}/t#R#S/t#T#o/t~0aO%s~~0fO%t~~0kOx~~0nRO#S0k#S#T%]#T~0k~0|O%y~~1RO%z~",
  tokenizers: [0, 1, 2],
  topRules: {"PromQL":[0,28],"MetricName":[1,144]},
  specialized: [{term: 57, get: (value, stack) => (specializeIdentifier(value) << 1)},{term: 57, get: (value, stack) => (extendIdentifier(value) << 1) | 1},{term: 57, get: value => spec_Identifier[value] || -1}],
  tokenPrec: 0
});
// This file was generated by lezer-generator. You probably shouldn't edit it.
const 
  inf$1 = 146,
  nan$1 = 147,
  Bool$1 = 1,
  Ignoring$1 = 2,
  On$1 = 3,
  GroupLeft$1 = 4,
  GroupRight$1 = 5,
  Offset$1 = 6,
  Atan2$1 = 7,
  Avg$1 = 8,
  Bottomk$1 = 9,
  Count$1 = 10,
  CountValues$1 = 11,
  Group$1 = 12,
  Max$1 = 13,
  Min$1 = 14,
  Quantile$1 = 15,
  Stddev$1 = 16,
  Stdvar$1 = 17,
  Sum$1 = 18,
  Topk$1 = 19,
  By$1 = 20,
  Without$1 = 21,
  And$1 = 22,
  Or$1 = 23,
  Unless$1 = 24,
  Start$1 = 25,
  End$1 = 26,
  LineComment = 27,
  PromQL = 28,
  Expr = 29,
  AggregateExpr = 30,
  AggregateOp = 31,
  AggregateModifier = 32,
  GroupingLabels = 33,
  GroupingLabelList = 34,
  GroupingLabel = 35,
  LabelName = 36,
  FunctionCallBody = 37,
  FunctionCallArgs = 38,
  BinaryExpr = 39,
  Pow = 40,
  BinModifiers = 41,
  OnOrIgnoring = 42,
  Mul = 43,
  Div = 44,
  Mod = 45,
  Add = 46,
  Sub = 47,
  Eql = 48,
  Gte = 49,
  Gtr = 50,
  Lte = 51,
  Lss = 52,
  Neq = 53,
  FunctionCall = 54,
  FunctionIdentifier = 55,
  AbsentOverTime = 56,
  Identifier = 57,
  Absent = 58,
  Abs = 59,
  Acos = 60,
  Acosh = 61,
  Asin = 62,
  Asinh = 63,
  Atan = 64,
  Atanh = 65,
  AvgOverTime = 66,
  Ceil = 67,
  Changes = 68,
  Clamp = 69,
  ClampMax = 70,
  ClampMin = 71,
  Cos = 72,
  Cosh = 73,
  CountOverTime = 74,
  DaysInMonth = 75,
  DayOfMonth = 76,
  DayOfWeek = 77,
  Deg = 78,
  Delta = 79,
  Deriv = 80,
  Exp = 81,
  Floor = 82,
  HistogramQuantile = 83,
  HoltWinters = 84,
  Hour = 85,
  Idelta = 86,
  Increase = 87,
  Irate = 88,
  LabelReplace = 89,
  LabelJoin = 90,
  LastOverTime = 91,
  Ln = 92,
  Log10 = 93,
  Log2 = 94,
  MaxOverTime = 95,
  MinOverTime = 96,
  Minute = 97,
  Month = 98,
  Pi = 99,
  PredictLinear = 100,
  PresentOverTime = 101,
  QuantileOverTime = 102,
  Rad = 103,
  Rate = 104,
  Resets = 105,
  Round = 106,
  Scalar = 107,
  Sgn = 108,
  Sin = 109,
  Sinh = 110,
  Sort = 111,
  SortDesc = 112,
  Sqrt = 113,
  StddevOverTime = 114,
  StdvarOverTime = 115,
  SumOverTime = 116,
  Tan = 117,
  Tanh = 118,
  Timestamp = 119,
  Time = 120,
  Vector = 121,
  Year = 122,
  MatrixSelector = 123,
  Duration = 124,
  NumberLiteral = 125,
  OffsetExpr = 126,
  ParenExpr = 127,
  StringLiteral = 128,
  SubqueryExpr = 129,
  UnaryExpr = 130,
  UnaryOp = 131,
  VectorSelector = 132,
  MetricIdentifier = 133,
  LabelMatchers = 134,
  LabelMatchList = 135,
  LabelMatcher = 136,
  MatchOp = 137,
  EqlSingle = 138,
  EqlRegex = 139,
  NeqRegex = 140,
  StepInvariantExpr = 141,
  At = 142,
  AtModifierPreprocessors = 143,
  MetricName = 144;




/***/ }),

/***/ "./.yarn/cache/@babel-runtime-npm-7.18.3-1883c70fa6-db8526226a.zip/node_modules/@babel/runtime/helpers/esm/extends.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./.yarn/cache/@babel-runtime-npm-7.18.3-1883c70fa6-db8526226a.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./.yarn/cache/@lezer-common-npm-0.15.12-62017272b0-dae6581618.zip/node_modules/@lezer/common/dist/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultBufferLength": () => (/* binding */ DefaultBufferLength),
/* harmony export */   "MountedTree": () => (/* binding */ MountedTree),
/* harmony export */   "NodeProp": () => (/* binding */ NodeProp),
/* harmony export */   "NodeSet": () => (/* binding */ NodeSet),
/* harmony export */   "NodeType": () => (/* binding */ NodeType),
/* harmony export */   "Parser": () => (/* binding */ Parser),
/* harmony export */   "Tree": () => (/* binding */ Tree),
/* harmony export */   "TreeBuffer": () => (/* binding */ TreeBuffer),
/* harmony export */   "TreeCursor": () => (/* binding */ TreeCursor),
/* harmony export */   "TreeFragment": () => (/* binding */ TreeFragment),
/* harmony export */   "parseMixed": () => (/* binding */ parseMixed)
/* harmony export */ });
// FIXME profile adding a per-Tree TreeNode cache, validating it by
// parent pointer
/// The default maximum length of a `TreeBuffer` node (1024).
const DefaultBufferLength = 1024;
let nextPropID = 0;
class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}
/// Each [node type](#common.NodeType) or [individual tree](#common.Tree)
/// can have metadata associated with it in props. Instances of this
/// class represent prop names.
class NodeProp {
    /// Create a new node prop type.
    constructor(config = {}) {
        this.id = nextPropID++;
        this.perNode = !!config.perNode;
        this.deserialize = config.deserialize || (() => {
            throw new Error("This node type doesn't define a deserialize function");
        });
    }
    /// This is meant to be used with
    /// [`NodeSet.extend`](#common.NodeSet.extend) or
    /// [`LRParser.configure`](#lr.ParserConfig.props) to compute
    /// prop values for each node type in the set. Takes a [match
    /// object](#common.NodeType^match) or function that returns undefined
    /// if the node type doesn't get this prop, and the prop's value if
    /// it does.
    add(match) {
        if (this.perNode)
            throw new RangeError("Can't add per-node props to node types");
        if (typeof match != "function")
            match = NodeType.match(match);
        return (type) => {
            let result = match(type);
            return result === undefined ? null : [this, result];
        };
    }
}
/// Prop that is used to describe matching delimiters. For opening
/// delimiters, this holds an array of node names (written as a
/// space-separated string when declaring this prop in a grammar)
/// for the node types of closing delimiters that match it.
NodeProp.closedBy = new NodeProp({ deserialize: str => str.split(" ") });
/// The inverse of [`closedBy`](#common.NodeProp^closedBy). This is
/// attached to closing delimiters, holding an array of node names
/// of types of matching opening delimiters.
NodeProp.openedBy = new NodeProp({ deserialize: str => str.split(" ") });
/// Used to assign node types to groups (for example, all node
/// types that represent an expression could be tagged with an
/// `"Expression"` group).
NodeProp.group = new NodeProp({ deserialize: str => str.split(" ") });
/// The hash of the [context](#lr.ContextTracker.constructor)
/// that the node was parsed in, if any. Used to limit reuse of
/// contextual nodes.
NodeProp.contextHash = new NodeProp({ perNode: true });
/// The distance beyond the end of the node that the tokenizer
/// looked ahead for any of the tokens inside the node. (The LR
/// parser only stores this when it is larger than 25, for
/// efficiency reasons.)
NodeProp.lookAhead = new NodeProp({ perNode: true });
/// This per-node prop is used to replace a given node, or part of a
/// node, with another tree. This is useful to include trees from
/// different languages.
NodeProp.mounted = new NodeProp({ perNode: true });
/// A mounted tree, which can be [stored](#common.NodeProp^mounted) on
/// a tree node to indicate that parts of its content are
/// represented by another tree.
class MountedTree {
    constructor(
    /// The inner tree.
    tree, 
    /// If this is null, this tree replaces the entire node (it will
    /// be included in the regular iteration instead of its host
    /// node). If not, only the given ranges are considered to be
    /// covered by this tree. This is used for trees that are mixed in
    /// a way that isn't strictly hierarchical. Such mounted trees are
    /// only entered by [`resolveInner`](#common.Tree.resolveInner)
    /// and [`enter`](#common.SyntaxNode.enter).
    overlay, 
    /// The parser used to create this subtree.
    parser) {
        this.tree = tree;
        this.overlay = overlay;
        this.parser = parser;
    }
}
const noProps = Object.create(null);
/// Each node in a syntax tree has a node type associated with it.
class NodeType {
    /// @internal
    constructor(
    /// The name of the node type. Not necessarily unique, but if the
    /// grammar was written properly, different node types with the
    /// same name within a node set should play the same semantic
    /// role.
    name, 
    /// @internal
    props, 
    /// The id of this node in its set. Corresponds to the term ids
    /// used in the parser.
    id, 
    /// @internal
    flags = 0) {
        this.name = name;
        this.props = props;
        this.id = id;
        this.flags = flags;
    }
    static define(spec) {
        let props = spec.props && spec.props.length ? Object.create(null) : noProps;
        let flags = (spec.top ? 1 /* Top */ : 0) | (spec.skipped ? 2 /* Skipped */ : 0) |
            (spec.error ? 4 /* Error */ : 0) | (spec.name == null ? 8 /* Anonymous */ : 0);
        let type = new NodeType(spec.name || "", props, spec.id, flags);
        if (spec.props)
            for (let src of spec.props) {
                if (!Array.isArray(src))
                    src = src(type);
                if (src) {
                    if (src[0].perNode)
                        throw new RangeError("Can't store a per-node prop on a node type");
                    props[src[0].id] = src[1];
                }
            }
        return type;
    }
    /// Retrieves a node prop for this type. Will return `undefined` if
    /// the prop isn't present on this node.
    prop(prop) { return this.props[prop.id]; }
    /// True when this is the top node of a grammar.
    get isTop() { return (this.flags & 1 /* Top */) > 0; }
    /// True when this node is produced by a skip rule.
    get isSkipped() { return (this.flags & 2 /* Skipped */) > 0; }
    /// Indicates whether this is an error node.
    get isError() { return (this.flags & 4 /* Error */) > 0; }
    /// When true, this node type doesn't correspond to a user-declared
    /// named node, for example because it is used to cache repetition.
    get isAnonymous() { return (this.flags & 8 /* Anonymous */) > 0; }
    /// Returns true when this node's name or one of its
    /// [groups](#common.NodeProp^group) matches the given string.
    is(name) {
        if (typeof name == 'string') {
            if (this.name == name)
                return true;
            let group = this.prop(NodeProp.group);
            return group ? group.indexOf(name) > -1 : false;
        }
        return this.id == name;
    }
    /// Create a function from node types to arbitrary values by
    /// specifying an object whose property names are node or
    /// [group](#common.NodeProp^group) names. Often useful with
    /// [`NodeProp.add`](#common.NodeProp.add). You can put multiple
    /// names, separated by spaces, in a single property name to map
    /// multiple node names to a single value.
    static match(map) {
        let direct = Object.create(null);
        for (let prop in map)
            for (let name of prop.split(" "))
                direct[name] = map[prop];
        return (node) => {
            for (let groups = node.prop(NodeProp.group), i = -1; i < (groups ? groups.length : 0); i++) {
                let found = direct[i < 0 ? node.name : groups[i]];
                if (found)
                    return found;
            }
        };
    }
}
/// An empty dummy node type to use when no actual type is available.
NodeType.none = new NodeType("", Object.create(null), 0, 8 /* Anonymous */);
/// A node set holds a collection of node types. It is used to
/// compactly represent trees by storing their type ids, rather than a
/// full pointer to the type object, in a numeric array. Each parser
/// [has](#lr.LRParser.nodeSet) a node set, and [tree
/// buffers](#common.TreeBuffer) can only store collections of nodes
/// from the same set. A set can have a maximum of 2**16 (65536) node
/// types in it, so that the ids fit into 16-bit typed array slots.
class NodeSet {
    /// Create a set with the given types. The `id` property of each
    /// type should correspond to its position within the array.
    constructor(
    /// The node types in this set, by id.
    types) {
        this.types = types;
        for (let i = 0; i < types.length; i++)
            if (types[i].id != i)
                throw new RangeError("Node type ids should correspond to array positions when creating a node set");
    }
    /// Create a copy of this set with some node properties added. The
    /// arguments to this method should be created with
    /// [`NodeProp.add`](#common.NodeProp.add).
    extend(...props) {
        let newTypes = [];
        for (let type of this.types) {
            let newProps = null;
            for (let source of props) {
                let add = source(type);
                if (add) {
                    if (!newProps)
                        newProps = Object.assign({}, type.props);
                    newProps[add[0].id] = add[1];
                }
            }
            newTypes.push(newProps ? new NodeType(type.name, newProps, type.id, type.flags) : type);
        }
        return new NodeSet(newTypes);
    }
}
const CachedNode = new WeakMap(), CachedInnerNode = new WeakMap();
/// A piece of syntax tree. There are two ways to approach these
/// trees: the way they are actually stored in memory, and the
/// convenient way.
///
/// Syntax trees are stored as a tree of `Tree` and `TreeBuffer`
/// objects. By packing detail information into `TreeBuffer` leaf
/// nodes, the representation is made a lot more memory-efficient.
///
/// However, when you want to actually work with tree nodes, this
/// representation is very awkward, so most client code will want to
/// use the [`TreeCursor`](#common.TreeCursor) or
/// [`SyntaxNode`](#common.SyntaxNode) interface instead, which provides
/// a view on some part of this data structure, and can be used to
/// move around to adjacent nodes.
class Tree {
    /// Construct a new tree. See also [`Tree.build`](#common.Tree^build).
    constructor(
    /// The type of the top node.
    type, 
    /// This node's child nodes.
    children, 
    /// The positions (offsets relative to the start of this tree) of
    /// the children.
    positions, 
    /// The total length of this tree
    length, 
    /// Per-node [node props](#common.NodeProp) to associate with this node.
    props) {
        this.type = type;
        this.children = children;
        this.positions = positions;
        this.length = length;
        /// @internal
        this.props = null;
        if (props && props.length) {
            this.props = Object.create(null);
            for (let [prop, value] of props)
                this.props[typeof prop == "number" ? prop : prop.id] = value;
        }
    }
    /// @internal
    toString() {
        let mounted = this.prop(NodeProp.mounted);
        if (mounted && !mounted.overlay)
            return mounted.tree.toString();
        let children = "";
        for (let ch of this.children) {
            let str = ch.toString();
            if (str) {
                if (children)
                    children += ",";
                children += str;
            }
        }
        return !this.type.name ? children :
            (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) +
                (children.length ? "(" + children + ")" : "");
    }
    /// Get a [tree cursor](#common.TreeCursor) rooted at this tree. When
    /// `pos` is given, the cursor is [moved](#common.TreeCursor.moveTo)
    /// to the given position and side.
    cursor(pos, side = 0) {
        let scope = (pos != null && CachedNode.get(this)) || this.topNode;
        let cursor = new TreeCursor(scope);
        if (pos != null) {
            cursor.moveTo(pos, side);
            CachedNode.set(this, cursor._tree);
        }
        return cursor;
    }
    /// Get a [tree cursor](#common.TreeCursor) that, unlike regular
    /// cursors, doesn't skip through
    /// [anonymous](#common.NodeType.isAnonymous) nodes and doesn't
    /// automatically enter mounted nodes.
    fullCursor() {
        return new TreeCursor(this.topNode, 1 /* Full */);
    }
    /// Get a [syntax node](#common.SyntaxNode) object for the top of the
    /// tree.
    get topNode() {
        return new TreeNode(this, 0, 0, null);
    }
    /// Get the [syntax node](#common.SyntaxNode) at the given position.
    /// If `side` is -1, this will move into nodes that end at the
    /// position. If 1, it'll move into nodes that start at the
    /// position. With 0, it'll only enter nodes that cover the position
    /// from both sides.
    resolve(pos, side = 0) {
        let node = resolveNode(CachedNode.get(this) || this.topNode, pos, side, false);
        CachedNode.set(this, node);
        return node;
    }
    /// Like [`resolve`](#common.Tree.resolve), but will enter
    /// [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
    /// pointing into the innermost overlaid tree at the given position
    /// (with parent links going through all parent structure, including
    /// the host trees).
    resolveInner(pos, side = 0) {
        let node = resolveNode(CachedInnerNode.get(this) || this.topNode, pos, side, true);
        CachedInnerNode.set(this, node);
        return node;
    }
    /// Iterate over the tree and its children, calling `enter` for any
    /// node that touches the `from`/`to` region (if given) before
    /// running over such a node's children, and `leave` (if given) when
    /// leaving the node. When `enter` returns `false`, that node will
    /// not have its children iterated over (or `leave` called).
    iterate(spec) {
        let { enter, leave, from = 0, to = this.length } = spec;
        for (let c = this.cursor(), get = () => c.node;;) {
            let mustLeave = false;
            if (c.from <= to && c.to >= from && (c.type.isAnonymous || enter(c.type, c.from, c.to, get) !== false)) {
                if (c.firstChild())
                    continue;
                if (!c.type.isAnonymous)
                    mustLeave = true;
            }
            for (;;) {
                if (mustLeave && leave)
                    leave(c.type, c.from, c.to, get);
                mustLeave = c.type.isAnonymous;
                if (c.nextSibling())
                    break;
                if (!c.parent())
                    return;
                mustLeave = true;
            }
        }
    }
    /// Get the value of the given [node prop](#common.NodeProp) for this
    /// node. Works with both per-node and per-type props.
    prop(prop) {
        return !prop.perNode ? this.type.prop(prop) : this.props ? this.props[prop.id] : undefined;
    }
    /// Returns the node's [per-node props](#common.NodeProp.perNode) in a
    /// format that can be passed to the [`Tree`](#common.Tree)
    /// constructor.
    get propValues() {
        let result = [];
        if (this.props)
            for (let id in this.props)
                result.push([+id, this.props[id]]);
        return result;
    }
    /// Balance the direct children of this tree, producing a copy of
    /// which may have children grouped into subtrees with type
    /// [`NodeType.none`](#common.NodeType^none).
    balance(config = {}) {
        return this.children.length <= 8 /* BranchFactor */ ? this :
            balanceRange(NodeType.none, this.children, this.positions, 0, this.children.length, 0, this.length, (children, positions, length) => new Tree(this.type, children, positions, length, this.propValues), config.makeTree || ((children, positions, length) => new Tree(NodeType.none, children, positions, length)));
    }
    /// Build a tree from a postfix-ordered buffer of node information,
    /// or a cursor over such a buffer.
    static build(data) { return buildTree(data); }
}
/// The empty tree
Tree.empty = new Tree(NodeType.none, [], [], 0);
class FlatBufferCursor {
    constructor(buffer, index) {
        this.buffer = buffer;
        this.index = index;
    }
    get id() { return this.buffer[this.index - 4]; }
    get start() { return this.buffer[this.index - 3]; }
    get end() { return this.buffer[this.index - 2]; }
    get size() { return this.buffer[this.index - 1]; }
    get pos() { return this.index; }
    next() { this.index -= 4; }
    fork() { return new FlatBufferCursor(this.buffer, this.index); }
}
/// Tree buffers contain (type, start, end, endIndex) quads for each
/// node. In such a buffer, nodes are stored in prefix order (parents
/// before children, with the endIndex of the parent indicating which
/// children belong to it)
class TreeBuffer {
    /// Create a tree buffer.
    constructor(
    /// The buffer's content.
    buffer, 
    /// The total length of the group of nodes in the buffer.
    length, 
    /// The node set used in this buffer.
    set) {
        this.buffer = buffer;
        this.length = length;
        this.set = set;
    }
    /// @internal
    get type() { return NodeType.none; }
    /// @internal
    toString() {
        let result = [];
        for (let index = 0; index < this.buffer.length;) {
            result.push(this.childString(index));
            index = this.buffer[index + 3];
        }
        return result.join(",");
    }
    /// @internal
    childString(index) {
        let id = this.buffer[index], endIndex = this.buffer[index + 3];
        let type = this.set.types[id], result = type.name;
        if (/\W/.test(result) && !type.isError)
            result = JSON.stringify(result);
        index += 4;
        if (endIndex == index)
            return result;
        let children = [];
        while (index < endIndex) {
            children.push(this.childString(index));
            index = this.buffer[index + 3];
        }
        return result + "(" + children.join(",") + ")";
    }
    /// @internal
    findChild(startIndex, endIndex, dir, pos, side) {
        let { buffer } = this, pick = -1;
        for (let i = startIndex; i != endIndex; i = buffer[i + 3]) {
            if (checkSide(side, pos, buffer[i + 1], buffer[i + 2])) {
                pick = i;
                if (dir > 0)
                    break;
            }
        }
        return pick;
    }
    /// @internal
    slice(startI, endI, from, to) {
        let b = this.buffer;
        let copy = new Uint16Array(endI - startI);
        for (let i = startI, j = 0; i < endI;) {
            copy[j++] = b[i++];
            copy[j++] = b[i++] - from;
            copy[j++] = b[i++] - from;
            copy[j++] = b[i++] - startI;
        }
        return new TreeBuffer(copy, to - from, this.set);
    }
}
function checkSide(side, pos, from, to) {
    switch (side) {
        case -2 /* Before */: return from < pos;
        case -1 /* AtOrBefore */: return to >= pos && from < pos;
        case 0 /* Around */: return from < pos && to > pos;
        case 1 /* AtOrAfter */: return from <= pos && to > pos;
        case 2 /* After */: return to > pos;
        case 4 /* DontCare */: return true;
    }
}
function enterUnfinishedNodesBefore(node, pos) {
    let scan = node.childBefore(pos);
    while (scan) {
        let last = scan.lastChild;
        if (!last || last.to != scan.to)
            break;
        if (last.type.isError && last.from == last.to) {
            node = scan;
            scan = last.prevSibling;
        }
        else {
            scan = last;
        }
    }
    return node;
}
function resolveNode(node, pos, side, overlays) {
    var _a;
    // Move up to a node that actually holds the position, if possible
    while (node.from == node.to ||
        (side < 1 ? node.from >= pos : node.from > pos) ||
        (side > -1 ? node.to <= pos : node.to < pos)) {
        let parent = !overlays && node instanceof TreeNode && node.index < 0 ? null : node.parent;
        if (!parent)
            return node;
        node = parent;
    }
    // Must go up out of overlays when those do not overlap with pos
    if (overlays)
        for (let scan = node, parent = scan.parent; parent; scan = parent, parent = scan.parent) {
            if (scan instanceof TreeNode && scan.index < 0 && ((_a = parent.enter(pos, side, true)) === null || _a === void 0 ? void 0 : _a.from) != scan.from)
                node = parent;
        }
    for (;;) {
        let inner = node.enter(pos, side, overlays);
        if (!inner)
            return node;
        node = inner;
    }
}
class TreeNode {
    constructor(node, _from, 
    // Index in parent node, set to -1 if the node is not a direct child of _parent.node (overlay)
    index, _parent) {
        this.node = node;
        this._from = _from;
        this.index = index;
        this._parent = _parent;
    }
    get type() { return this.node.type; }
    get name() { return this.node.type.name; }
    get from() { return this._from; }
    get to() { return this._from + this.node.length; }
    nextChild(i, dir, pos, side, mode = 0) {
        for (let parent = this;;) {
            for (let { children, positions } = parent.node, e = dir > 0 ? children.length : -1; i != e; i += dir) {
                let next = children[i], start = positions[i] + parent._from;
                if (!checkSide(side, pos, start, start + next.length))
                    continue;
                if (next instanceof TreeBuffer) {
                    if (mode & 2 /* NoEnterBuffer */)
                        continue;
                    let index = next.findChild(0, next.buffer.length, dir, pos - start, side);
                    if (index > -1)
                        return new BufferNode(new BufferContext(parent, next, i, start), null, index);
                }
                else if ((mode & 1 /* Full */) || (!next.type.isAnonymous || hasChild(next))) {
                    let mounted;
                    if (!(mode & 1 /* Full */) && next.props && (mounted = next.prop(NodeProp.mounted)) && !mounted.overlay)
                        return new TreeNode(mounted.tree, start, i, parent);
                    let inner = new TreeNode(next, start, i, parent);
                    return (mode & 1 /* Full */) || !inner.type.isAnonymous ? inner
                        : inner.nextChild(dir < 0 ? next.children.length - 1 : 0, dir, pos, side);
                }
            }
            if ((mode & 1 /* Full */) || !parent.type.isAnonymous)
                return null;
            if (parent.index >= 0)
                i = parent.index + dir;
            else
                i = dir < 0 ? -1 : parent._parent.node.children.length;
            parent = parent._parent;
            if (!parent)
                return null;
        }
    }
    get firstChild() { return this.nextChild(0, 1, 0, 4 /* DontCare */); }
    get lastChild() { return this.nextChild(this.node.children.length - 1, -1, 0, 4 /* DontCare */); }
    childAfter(pos) { return this.nextChild(0, 1, pos, 2 /* After */); }
    childBefore(pos) { return this.nextChild(this.node.children.length - 1, -1, pos, -2 /* Before */); }
    enter(pos, side, overlays = true, buffers = true) {
        let mounted;
        if (overlays && (mounted = this.node.prop(NodeProp.mounted)) && mounted.overlay) {
            let rPos = pos - this.from;
            for (let { from, to } of mounted.overlay) {
                if ((side > 0 ? from <= rPos : from < rPos) &&
                    (side < 0 ? to >= rPos : to > rPos))
                    return new TreeNode(mounted.tree, mounted.overlay[0].from + this.from, -1, this);
            }
        }
        return this.nextChild(0, 1, pos, side, buffers ? 0 : 2 /* NoEnterBuffer */);
    }
    nextSignificantParent() {
        let val = this;
        while (val.type.isAnonymous && val._parent)
            val = val._parent;
        return val;
    }
    get parent() {
        return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4 /* DontCare */) : null;
    }
    get prevSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4 /* DontCare */) : null;
    }
    get cursor() { return new TreeCursor(this); }
    get tree() { return this.node; }
    toTree() { return this.node; }
    resolve(pos, side = 0) {
        return resolveNode(this, pos, side, false);
    }
    resolveInner(pos, side = 0) {
        return resolveNode(this, pos, side, true);
    }
    enterUnfinishedNodesBefore(pos) { return enterUnfinishedNodesBefore(this, pos); }
    getChild(type, before = null, after = null) {
        let r = getChildren(this, type, before, after);
        return r.length ? r[0] : null;
    }
    getChildren(type, before = null, after = null) {
        return getChildren(this, type, before, after);
    }
    /// @internal
    toString() { return this.node.toString(); }
}
function getChildren(node, type, before, after) {
    let cur = node.cursor, result = [];
    if (!cur.firstChild())
        return result;
    if (before != null)
        while (!cur.type.is(before))
            if (!cur.nextSibling())
                return result;
    for (;;) {
        if (after != null && cur.type.is(after))
            return result;
        if (cur.type.is(type))
            result.push(cur.node);
        if (!cur.nextSibling())
            return after == null ? result : [];
    }
}
class BufferContext {
    constructor(parent, buffer, index, start) {
        this.parent = parent;
        this.buffer = buffer;
        this.index = index;
        this.start = start;
    }
}
class BufferNode {
    constructor(context, _parent, index) {
        this.context = context;
        this._parent = _parent;
        this.index = index;
        this.type = context.buffer.set.types[context.buffer.buffer[index]];
    }
    get name() { return this.type.name; }
    get from() { return this.context.start + this.context.buffer.buffer[this.index + 1]; }
    get to() { return this.context.start + this.context.buffer.buffer[this.index + 2]; }
    child(dir, pos, side) {
        let { buffer } = this.context;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.context.start, side);
        return index < 0 ? null : new BufferNode(this.context, this, index);
    }
    get firstChild() { return this.child(1, 0, 4 /* DontCare */); }
    get lastChild() { return this.child(-1, 0, 4 /* DontCare */); }
    childAfter(pos) { return this.child(1, pos, 2 /* After */); }
    childBefore(pos) { return this.child(-1, pos, -2 /* Before */); }
    enter(pos, side, overlays, buffers = true) {
        if (!buffers)
            return null;
        let { buffer } = this.context;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], side > 0 ? 1 : -1, pos - this.context.start, side);
        return index < 0 ? null : new BufferNode(this.context, this, index);
    }
    get parent() {
        return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(dir) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + dir, dir, 0, 4 /* DontCare */);
    }
    get nextSibling() {
        let { buffer } = this.context;
        let after = buffer.buffer[this.index + 3];
        if (after < (this._parent ? buffer.buffer[this._parent.index + 3] : buffer.buffer.length))
            return new BufferNode(this.context, this._parent, after);
        return this.externalSibling(1);
    }
    get prevSibling() {
        let { buffer } = this.context;
        let parentStart = this._parent ? this._parent.index + 4 : 0;
        if (this.index == parentStart)
            return this.externalSibling(-1);
        return new BufferNode(this.context, this._parent, buffer.findChild(parentStart, this.index, -1, 0, 4 /* DontCare */));
    }
    get cursor() { return new TreeCursor(this); }
    get tree() { return null; }
    toTree() {
        let children = [], positions = [];
        let { buffer } = this.context;
        let startI = this.index + 4, endI = buffer.buffer[this.index + 3];
        if (endI > startI) {
            let from = buffer.buffer[this.index + 1], to = buffer.buffer[this.index + 2];
            children.push(buffer.slice(startI, endI, from, to));
            positions.push(0);
        }
        return new Tree(this.type, children, positions, this.to - this.from);
    }
    resolve(pos, side = 0) {
        return resolveNode(this, pos, side, false);
    }
    resolveInner(pos, side = 0) {
        return resolveNode(this, pos, side, true);
    }
    enterUnfinishedNodesBefore(pos) { return enterUnfinishedNodesBefore(this, pos); }
    /// @internal
    toString() { return this.context.buffer.childString(this.index); }
    getChild(type, before = null, after = null) {
        let r = getChildren(this, type, before, after);
        return r.length ? r[0] : null;
    }
    getChildren(type, before = null, after = null) {
        return getChildren(this, type, before, after);
    }
}
/// A tree cursor object focuses on a given node in a syntax tree, and
/// allows you to move to adjacent nodes.
class TreeCursor {
    /// @internal
    constructor(node, 
    /// @internal
    mode = 0) {
        this.mode = mode;
        this.buffer = null;
        this.stack = [];
        this.index = 0;
        this.bufferNode = null;
        if (node instanceof TreeNode) {
            this.yieldNode(node);
        }
        else {
            this._tree = node.context.parent;
            this.buffer = node.context;
            for (let n = node._parent; n; n = n._parent)
                this.stack.unshift(n.index);
            this.bufferNode = node;
            this.yieldBuf(node.index);
        }
    }
    /// Shorthand for `.type.name`.
    get name() { return this.type.name; }
    yieldNode(node) {
        if (!node)
            return false;
        this._tree = node;
        this.type = node.type;
        this.from = node.from;
        this.to = node.to;
        return true;
    }
    yieldBuf(index, type) {
        this.index = index;
        let { start, buffer } = this.buffer;
        this.type = type || buffer.set.types[buffer.buffer[index]];
        this.from = start + buffer.buffer[index + 1];
        this.to = start + buffer.buffer[index + 2];
        return true;
    }
    yield(node) {
        if (!node)
            return false;
        if (node instanceof TreeNode) {
            this.buffer = null;
            return this.yieldNode(node);
        }
        this.buffer = node.context;
        return this.yieldBuf(node.index, node.type);
    }
    /// @internal
    toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    /// @internal
    enterChild(dir, pos, side) {
        if (!this.buffer)
            return this.yield(this._tree.nextChild(dir < 0 ? this._tree.node.children.length - 1 : 0, dir, pos, side, this.mode));
        let { buffer } = this.buffer;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.buffer.start, side);
        if (index < 0)
            return false;
        this.stack.push(this.index);
        return this.yieldBuf(index);
    }
    /// Move the cursor to this node's first child. When this returns
    /// false, the node has no child, and the cursor has not been moved.
    firstChild() { return this.enterChild(1, 0, 4 /* DontCare */); }
    /// Move the cursor to this node's last child.
    lastChild() { return this.enterChild(-1, 0, 4 /* DontCare */); }
    /// Move the cursor to the first child that ends after `pos`.
    childAfter(pos) { return this.enterChild(1, pos, 2 /* After */); }
    /// Move to the last child that starts before `pos`.
    childBefore(pos) { return this.enterChild(-1, pos, -2 /* Before */); }
    /// Move the cursor to the child around `pos`. If side is -1 the
    /// child may end at that position, when 1 it may start there. This
    /// will also enter [overlaid](#common.MountedTree.overlay)
    /// [mounted](#common.NodeProp^mounted) trees unless `overlays` is
    /// set to false.
    enter(pos, side, overlays = true, buffers = true) {
        if (!this.buffer)
            return this.yield(this._tree.enter(pos, side, overlays && !(this.mode & 1 /* Full */), buffers));
        return buffers ? this.enterChild(1, pos, side) : false;
    }
    /// Move to the node's parent node, if this isn't the top node.
    parent() {
        if (!this.buffer)
            return this.yieldNode((this.mode & 1 /* Full */) ? this._tree._parent : this._tree.parent);
        if (this.stack.length)
            return this.yieldBuf(this.stack.pop());
        let parent = (this.mode & 1 /* Full */) ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        this.buffer = null;
        return this.yieldNode(parent);
    }
    /// @internal
    sibling(dir) {
        if (!this.buffer)
            return !this._tree._parent ? false
                : this.yield(this._tree.index < 0 ? null
                    : this._tree._parent.nextChild(this._tree.index + dir, dir, 0, 4 /* DontCare */, this.mode));
        let { buffer } = this.buffer, d = this.stack.length - 1;
        if (dir < 0) {
            let parentStart = d < 0 ? 0 : this.stack[d] + 4;
            if (this.index != parentStart)
                return this.yieldBuf(buffer.findChild(parentStart, this.index, -1, 0, 4 /* DontCare */));
        }
        else {
            let after = buffer.buffer[this.index + 3];
            if (after < (d < 0 ? buffer.buffer.length : buffer.buffer[this.stack[d] + 3]))
                return this.yieldBuf(after);
        }
        return d < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + dir, dir, 0, 4 /* DontCare */, this.mode)) : false;
    }
    /// Move to this node's next sibling, if any.
    nextSibling() { return this.sibling(1); }
    /// Move to this node's previous sibling, if any.
    prevSibling() { return this.sibling(-1); }
    atLastNode(dir) {
        let index, parent, { buffer } = this;
        if (buffer) {
            if (dir > 0) {
                if (this.index < buffer.buffer.buffer.length)
                    return false;
            }
            else {
                for (let i = 0; i < this.index; i++)
                    if (buffer.buffer.buffer[i + 3] < this.index)
                        return false;
            }
            ({ index, parent } = buffer);
        }
        else {
            ({ index, _parent: parent } = this._tree);
        }
        for (; parent; { index, _parent: parent } = parent) {
            if (index > -1)
                for (let i = index + dir, e = dir < 0 ? -1 : parent.node.children.length; i != e; i += dir) {
                    let child = parent.node.children[i];
                    if ((this.mode & 1 /* Full */) || child instanceof TreeBuffer || !child.type.isAnonymous || hasChild(child))
                        return false;
                }
        }
        return true;
    }
    move(dir, enter) {
        if (enter && this.enterChild(dir, 0, 4 /* DontCare */))
            return true;
        for (;;) {
            if (this.sibling(dir))
                return true;
            if (this.atLastNode(dir) || !this.parent())
                return false;
        }
    }
    /// Move to the next node in a
    /// [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR))
    /// traversal, going from a node to its first child or, if the
    /// current node is empty or `enter` is false, its next sibling or
    /// the next sibling of the first parent node that has one.
    next(enter = true) { return this.move(1, enter); }
    /// Move to the next node in a last-to-first pre-order traveral. A
    /// node is followed by its last child or, if it has none, its
    /// previous sibling or the previous sibling of the first parent
    /// node that has one.
    prev(enter = true) { return this.move(-1, enter); }
    /// Move the cursor to the innermost node that covers `pos`. If
    /// `side` is -1, it will enter nodes that end at `pos`. If it is 1,
    /// it will enter nodes that start at `pos`.
    moveTo(pos, side = 0) {
        // Move up to a node that actually holds the position, if possible
        while (this.from == this.to ||
            (side < 1 ? this.from >= pos : this.from > pos) ||
            (side > -1 ? this.to <= pos : this.to < pos))
            if (!this.parent())
                break;
        // Then scan down into child nodes as far as possible
        while (this.enterChild(1, pos, side)) { }
        return this;
    }
    /// Get a [syntax node](#common.SyntaxNode) at the cursor's current
    /// position.
    get node() {
        if (!this.buffer)
            return this._tree;
        let cache = this.bufferNode, result = null, depth = 0;
        if (cache && cache.context == this.buffer) {
            scan: for (let index = this.index, d = this.stack.length; d >= 0;) {
                for (let c = cache; c; c = c._parent)
                    if (c.index == index) {
                        if (index == this.index)
                            return c;
                        result = c;
                        depth = d + 1;
                        break scan;
                    }
                index = this.stack[--d];
            }
        }
        for (let i = depth; i < this.stack.length; i++)
            result = new BufferNode(this.buffer, result, this.stack[i]);
        return this.bufferNode = new BufferNode(this.buffer, result, this.index);
    }
    /// Get the [tree](#common.Tree) that represents the current node, if
    /// any. Will return null when the node is in a [tree
    /// buffer](#common.TreeBuffer).
    get tree() {
        return this.buffer ? null : this._tree.node;
    }
}
function hasChild(tree) {
    return tree.children.some(ch => ch instanceof TreeBuffer || !ch.type.isAnonymous || hasChild(ch));
}
function buildTree(data) {
    var _a;
    let { buffer, nodeSet, maxBufferLength = DefaultBufferLength, reused = [], minRepeatType = nodeSet.types.length } = data;
    let cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
    let types = nodeSet.types;
    let contextHash = 0, lookAhead = 0;
    function takeNode(parentStart, minPos, children, positions, inRepeat) {
        let { id, start, end, size } = cursor;
        let lookAheadAtStart = lookAhead;
        while (size < 0) {
            cursor.next();
            if (size == -1 /* Reuse */) {
                let node = reused[id];
                children.push(node);
                positions.push(start - parentStart);
                return;
            }
            else if (size == -3 /* ContextChange */) { // Context change
                contextHash = id;
                return;
            }
            else if (size == -4 /* LookAhead */) {
                lookAhead = id;
                return;
            }
            else {
                throw new RangeError(`Unrecognized record size: ${size}`);
            }
        }
        let type = types[id], node, buffer;
        let startPos = start - parentStart;
        if (end - start <= maxBufferLength && (buffer = findBufferSize(cursor.pos - minPos, inRepeat))) {
            // Small enough for a buffer, and no reused nodes inside
            let data = new Uint16Array(buffer.size - buffer.skip);
            let endPos = cursor.pos - buffer.size, index = data.length;
            while (cursor.pos > endPos)
                index = copyToBuffer(buffer.start, data, index);
            node = new TreeBuffer(data, end - buffer.start, nodeSet);
            startPos = buffer.start - parentStart;
        }
        else { // Make it a node
            let endPos = cursor.pos - size;
            cursor.next();
            let localChildren = [], localPositions = [];
            let localInRepeat = id >= minRepeatType ? id : -1;
            let lastGroup = 0, lastEnd = end;
            while (cursor.pos > endPos) {
                if (localInRepeat >= 0 && cursor.id == localInRepeat && cursor.size >= 0) {
                    if (cursor.end <= lastEnd - maxBufferLength) {
                        makeRepeatLeaf(localChildren, localPositions, start, lastGroup, cursor.end, lastEnd, localInRepeat, lookAheadAtStart);
                        lastGroup = localChildren.length;
                        lastEnd = cursor.end;
                    }
                    cursor.next();
                }
                else {
                    takeNode(start, endPos, localChildren, localPositions, localInRepeat);
                }
            }
            if (localInRepeat >= 0 && lastGroup > 0 && lastGroup < localChildren.length)
                makeRepeatLeaf(localChildren, localPositions, start, lastGroup, start, lastEnd, localInRepeat, lookAheadAtStart);
            localChildren.reverse();
            localPositions.reverse();
            if (localInRepeat > -1 && lastGroup > 0) {
                let make = makeBalanced(type);
                node = balanceRange(type, localChildren, localPositions, 0, localChildren.length, 0, end - start, make, make);
            }
            else {
                node = makeTree(type, localChildren, localPositions, end - start, lookAheadAtStart - end);
            }
        }
        children.push(node);
        positions.push(startPos);
    }
    function makeBalanced(type) {
        return (children, positions, length) => {
            let lookAhead = 0, lastI = children.length - 1, last, lookAheadProp;
            if (lastI >= 0 && (last = children[lastI]) instanceof Tree) {
                if (!lastI && last.type == type && last.length == length)
                    return last;
                if (lookAheadProp = last.prop(NodeProp.lookAhead))
                    lookAhead = positions[lastI] + last.length + lookAheadProp;
            }
            return makeTree(type, children, positions, length, lookAhead);
        };
    }
    function makeRepeatLeaf(children, positions, base, i, from, to, type, lookAhead) {
        let localChildren = [], localPositions = [];
        while (children.length > i) {
            localChildren.push(children.pop());
            localPositions.push(positions.pop() + base - from);
        }
        children.push(makeTree(nodeSet.types[type], localChildren, localPositions, to - from, lookAhead - to));
        positions.push(from - base);
    }
    function makeTree(type, children, positions, length, lookAhead = 0, props) {
        if (contextHash) {
            let pair = [NodeProp.contextHash, contextHash];
            props = props ? [pair].concat(props) : [pair];
        }
        if (lookAhead > 25) {
            let pair = [NodeProp.lookAhead, lookAhead];
            props = props ? [pair].concat(props) : [pair];
        }
        return new Tree(type, children, positions, length, props);
    }
    function findBufferSize(maxSize, inRepeat) {
        // Scan through the buffer to find previous siblings that fit
        // together in a TreeBuffer, and don't contain any reused nodes
        // (which can't be stored in a buffer).
        // If `inRepeat` is > -1, ignore node boundaries of that type for
        // nesting, but make sure the end falls either at the start
        // (`maxSize`) or before such a node.
        let fork = cursor.fork();
        let size = 0, start = 0, skip = 0, minStart = fork.end - maxBufferLength;
        let result = { size: 0, start: 0, skip: 0 };
        scan: for (let minPos = fork.pos - maxSize; fork.pos > minPos;) {
            let nodeSize = fork.size;
            // Pretend nested repeat nodes of the same type don't exist
            if (fork.id == inRepeat && nodeSize >= 0) {
                // Except that we store the current state as a valid return
                // value.
                result.size = size;
                result.start = start;
                result.skip = skip;
                skip += 4;
                size += 4;
                fork.next();
                continue;
            }
            let startPos = fork.pos - nodeSize;
            if (nodeSize < 0 || startPos < minPos || fork.start < minStart)
                break;
            let localSkipped = fork.id >= minRepeatType ? 4 : 0;
            let nodeStart = fork.start;
            fork.next();
            while (fork.pos > startPos) {
                if (fork.size < 0) {
                    if (fork.size == -3 /* ContextChange */)
                        localSkipped += 4;
                    else
                        break scan;
                }
                else if (fork.id >= minRepeatType) {
                    localSkipped += 4;
                }
                fork.next();
            }
            start = nodeStart;
            size += nodeSize;
            skip += localSkipped;
        }
        if (inRepeat < 0 || size == maxSize) {
            result.size = size;
            result.start = start;
            result.skip = skip;
        }
        return result.size > 4 ? result : undefined;
    }
    function copyToBuffer(bufferStart, buffer, index) {
        let { id, start, end, size } = cursor;
        cursor.next();
        if (size >= 0 && id < minRepeatType) {
            let startIndex = index;
            if (size > 4) {
                let endPos = cursor.pos - (size - 4);
                while (cursor.pos > endPos)
                    index = copyToBuffer(bufferStart, buffer, index);
            }
            buffer[--index] = startIndex;
            buffer[--index] = end - bufferStart;
            buffer[--index] = start - bufferStart;
            buffer[--index] = id;
        }
        else if (size == -3 /* ContextChange */) {
            contextHash = id;
        }
        else if (size == -4 /* LookAhead */) {
            lookAhead = id;
        }
        return index;
    }
    let children = [], positions = [];
    while (cursor.pos > 0)
        takeNode(data.start || 0, data.bufferStart || 0, children, positions, -1);
    let length = (_a = data.length) !== null && _a !== void 0 ? _a : (children.length ? positions[0] + children[0].length : 0);
    return new Tree(types[data.topID], children.reverse(), positions.reverse(), length);
}
const nodeSizeCache = new WeakMap;
function nodeSize(balanceType, node) {
    if (!balanceType.isAnonymous || node instanceof TreeBuffer || node.type != balanceType)
        return 1;
    let size = nodeSizeCache.get(node);
    if (size == null) {
        size = 1;
        for (let child of node.children) {
            if (child.type != balanceType || !(child instanceof Tree)) {
                size = 1;
                break;
            }
            size += nodeSize(balanceType, child);
        }
        nodeSizeCache.set(node, size);
    }
    return size;
}
function balanceRange(
// The type the balanced tree's inner nodes.
balanceType, 
// The direct children and their positions
children, positions, 
// The index range in children/positions to use
from, to, 
// The start position of the nodes, relative to their parent.
start, 
// Length of the outer node
length, 
// Function to build the top node of the balanced tree
mkTop, 
// Function to build internal nodes for the balanced tree
mkTree) {
    let total = 0;
    for (let i = from; i < to; i++)
        total += nodeSize(balanceType, children[i]);
    let maxChild = Math.ceil((total * 1.5) / 8 /* BranchFactor */);
    let localChildren = [], localPositions = [];
    function divide(children, positions, from, to, offset) {
        for (let i = from; i < to;) {
            let groupFrom = i, groupStart = positions[i], groupSize = nodeSize(balanceType, children[i]);
            i++;
            for (; i < to; i++) {
                let nextSize = nodeSize(balanceType, children[i]);
                if (groupSize + nextSize >= maxChild)
                    break;
                groupSize += nextSize;
            }
            if (i == groupFrom + 1) {
                if (groupSize > maxChild) {
                    let only = children[groupFrom]; // Only trees can have a size > 1
                    divide(only.children, only.positions, 0, only.children.length, positions[groupFrom] + offset);
                    continue;
                }
                localChildren.push(children[groupFrom]);
            }
            else {
                let length = positions[i - 1] + children[i - 1].length - groupStart;
                localChildren.push(balanceRange(balanceType, children, positions, groupFrom, i, groupStart, length, null, mkTree));
            }
            localPositions.push(groupStart + offset - start);
        }
    }
    divide(children, positions, from, to, 0);
    return (mkTop || mkTree)(localChildren, localPositions, length);
}

/// Tree fragments are used during [incremental
/// parsing](#common.Parser.startParse) to track parts of old trees
/// that can be reused in a new parse. An array of fragments is used
/// to track regions of an old tree whose nodes might be reused in new
/// parses. Use the static
/// [`applyChanges`](#common.TreeFragment^applyChanges) method to
/// update fragments for document changes.
class TreeFragment {
    /// Construct a tree fragment.
    constructor(
    /// The start of the unchanged range pointed to by this fragment.
    /// This refers to an offset in the _updated_ document (as opposed
    /// to the original tree).
    from, 
    /// The end of the unchanged range.
    to, 
    /// The tree that this fragment is based on.
    tree, 
    /// The offset between the fragment's tree and the document that
    /// this fragment can be used against. Add this when going from
    /// document to tree positions, subtract it to go from tree to
    /// document positions.
    offset, openStart = false, openEnd = false) {
        this.from = from;
        this.to = to;
        this.tree = tree;
        this.offset = offset;
        this.open = (openStart ? 1 /* Start */ : 0) | (openEnd ? 2 /* End */ : 0);
    }
    /// Whether the start of the fragment represents the start of a
    /// parse, or the end of a change. (In the second case, it may not
    /// be safe to reuse some nodes at the start, depending on the
    /// parsing algorithm.)
    get openStart() { return (this.open & 1 /* Start */) > 0; }
    /// Whether the end of the fragment represents the end of a
    /// full-document parse, or the start of a change.
    get openEnd() { return (this.open & 2 /* End */) > 0; }
    /// Create a set of fragments from a freshly parsed tree, or update
    /// an existing set of fragments by replacing the ones that overlap
    /// with a tree with content from the new tree. When `partial` is
    /// true, the parse is treated as incomplete, and the resulting
    /// fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
    /// true.
    static addTree(tree, fragments = [], partial = false) {
        let result = [new TreeFragment(0, tree.length, tree, 0, false, partial)];
        for (let f of fragments)
            if (f.to > tree.length)
                result.push(f);
        return result;
    }
    /// Apply a set of edits to an array of fragments, removing or
    /// splitting fragments as necessary to remove edited ranges, and
    /// adjusting offsets for fragments that moved.
    static applyChanges(fragments, changes, minGap = 128) {
        if (!changes.length)
            return fragments;
        let result = [];
        let fI = 1, nextF = fragments.length ? fragments[0] : null;
        for (let cI = 0, pos = 0, off = 0;; cI++) {
            let nextC = cI < changes.length ? changes[cI] : null;
            let nextPos = nextC ? nextC.fromA : 1e9;
            if (nextPos - pos >= minGap)
                while (nextF && nextF.from < nextPos) {
                    let cut = nextF;
                    if (pos >= cut.from || nextPos <= cut.to || off) {
                        let fFrom = Math.max(cut.from, pos) - off, fTo = Math.min(cut.to, nextPos) - off;
                        cut = fFrom >= fTo ? null : new TreeFragment(fFrom, fTo, cut.tree, cut.offset + off, cI > 0, !!nextC);
                    }
                    if (cut)
                        result.push(cut);
                    if (nextF.to > nextPos)
                        break;
                    nextF = fI < fragments.length ? fragments[fI++] : null;
                }
            if (!nextC)
                break;
            pos = nextC.toA;
            off = nextC.toA - nextC.toB;
        }
        return result;
    }
}
/// A superclass that parsers should extend.
class Parser {
    /// Start a parse, returning a [partial parse](#common.PartialParse)
    /// object. [`fragments`](#common.TreeFragment) can be passed in to
    /// make the parse incremental.
    ///
    /// By default, the entire input is parsed. You can pass `ranges`,
    /// which should be a sorted array of non-empty, non-overlapping
    /// ranges, to parse only those ranges. The tree returned in that
    /// case will start at `ranges[0].from`.
    startParse(input, fragments, ranges) {
        if (typeof input == "string")
            input = new StringInput(input);
        ranges = !ranges ? [new Range(0, input.length)] : ranges.length ? ranges.map(r => new Range(r.from, r.to)) : [new Range(0, 0)];
        return this.createParse(input, fragments || [], ranges);
    }
    /// Run a full parse, returning the resulting tree.
    parse(input, fragments, ranges) {
        let parse = this.startParse(input, fragments, ranges);
        for (;;) {
            let done = parse.advance();
            if (done)
                return done;
        }
    }
}
class StringInput {
    constructor(string) {
        this.string = string;
    }
    get length() { return this.string.length; }
    chunk(from) { return this.string.slice(from); }
    get lineChunks() { return false; }
    read(from, to) { return this.string.slice(from, to); }
}

/// Create a parse wrapper that, after the inner parse completes,
/// scans its tree for mixed language regions with the `nest`
/// function, runs the resulting [inner parses](#common.NestedParse),
/// and then [mounts](#common.NodeProp^mounted) their results onto the
/// tree.
///
/// The nesting function is passed a cursor to provide context for a
/// node, but _should not_ move that cursor, only inspect its
/// properties and optionally access its
/// [node object](#common.TreeCursor.node).
function parseMixed(nest) {
    return (parse, input, fragments, ranges) => new MixedParse(parse, nest, input, fragments, ranges);
}
class InnerParse {
    constructor(parser, parse, overlay, target, ranges) {
        this.parser = parser;
        this.parse = parse;
        this.overlay = overlay;
        this.target = target;
        this.ranges = ranges;
    }
}
class ActiveOverlay {
    constructor(parser, predicate, mounts, index, start, target, prev) {
        this.parser = parser;
        this.predicate = predicate;
        this.mounts = mounts;
        this.index = index;
        this.start = start;
        this.target = target;
        this.prev = prev;
        this.depth = 0;
        this.ranges = [];
    }
}
const stoppedInner = new NodeProp({ perNode: true });
class MixedParse {
    constructor(base, nest, input, fragments, ranges) {
        this.nest = nest;
        this.input = input;
        this.fragments = fragments;
        this.ranges = ranges;
        this.inner = [];
        this.innerDone = 0;
        this.baseTree = null;
        this.stoppedAt = null;
        this.baseParse = base;
    }
    advance() {
        if (this.baseParse) {
            let done = this.baseParse.advance();
            if (!done)
                return null;
            this.baseParse = null;
            this.baseTree = done;
            this.startInner();
            if (this.stoppedAt != null)
                for (let inner of this.inner)
                    inner.parse.stopAt(this.stoppedAt);
        }
        if (this.innerDone == this.inner.length) {
            let result = this.baseTree;
            if (this.stoppedAt != null)
                result = new Tree(result.type, result.children, result.positions, result.length, result.propValues.concat([[stoppedInner, this.stoppedAt]]));
            return result;
        }
        let inner = this.inner[this.innerDone], done = inner.parse.advance();
        if (done) {
            this.innerDone++;
            // This is a somewhat dodgy but super helpful hack where we
            // patch up nodes created by the inner parse (and thus
            // presumably not aliased anywhere else) to hold the information
            // about the inner parse.
            let props = Object.assign(Object.create(null), inner.target.props);
            props[NodeProp.mounted.id] = new MountedTree(done, inner.overlay, inner.parser);
            inner.target.props = props;
        }
        return null;
    }
    get parsedPos() {
        if (this.baseParse)
            return 0;
        let pos = this.input.length;
        for (let i = this.innerDone; i < this.inner.length; i++) {
            if (this.inner[i].ranges[0].from < pos)
                pos = Math.min(pos, this.inner[i].parse.parsedPos);
        }
        return pos;
    }
    stopAt(pos) {
        this.stoppedAt = pos;
        if (this.baseParse)
            this.baseParse.stopAt(pos);
        else
            for (let i = this.innerDone; i < this.inner.length; i++)
                this.inner[i].parse.stopAt(pos);
    }
    startInner() {
        let fragmentCursor = new FragmentCursor(this.fragments);
        let overlay = null;
        let covered = null;
        let cursor = new TreeCursor(new TreeNode(this.baseTree, this.ranges[0].from, 0, null), 1 /* Full */);
        scan: for (let nest, isCovered; this.stoppedAt == null || cursor.from < this.stoppedAt;) {
            let enter = true, range;
            if (fragmentCursor.hasNode(cursor)) {
                if (overlay) {
                    let match = overlay.mounts.find(m => m.frag.from <= cursor.from && m.frag.to >= cursor.to && m.mount.overlay);
                    if (match)
                        for (let r of match.mount.overlay) {
                            let from = r.from + match.pos, to = r.to + match.pos;
                            if (from >= cursor.from && to <= cursor.to && !overlay.ranges.some(r => r.from < to && r.to > from))
                                overlay.ranges.push({ from, to });
                        }
                }
                enter = false;
            }
            else if (covered && (isCovered = checkCover(covered.ranges, cursor.from, cursor.to))) {
                enter = isCovered != 2 /* Full */;
            }
            else if (!cursor.type.isAnonymous && cursor.from < cursor.to && (nest = this.nest(cursor, this.input))) {
                if (!cursor.tree)
                    materialize(cursor);
                let oldMounts = fragmentCursor.findMounts(cursor.from, nest.parser);
                if (typeof nest.overlay == "function") {
                    overlay = new ActiveOverlay(nest.parser, nest.overlay, oldMounts, this.inner.length, cursor.from, cursor.tree, overlay);
                }
                else {
                    let ranges = punchRanges(this.ranges, nest.overlay || [new Range(cursor.from, cursor.to)]);
                    if (ranges.length)
                        this.inner.push(new InnerParse(nest.parser, nest.parser.startParse(this.input, enterFragments(oldMounts, ranges), ranges), nest.overlay ? nest.overlay.map(r => new Range(r.from - cursor.from, r.to - cursor.from)) : null, cursor.tree, ranges));
                    if (!nest.overlay)
                        enter = false;
                    else if (ranges.length)
                        covered = { ranges, depth: 0, prev: covered };
                }
            }
            else if (overlay && (range = overlay.predicate(cursor))) {
                if (range === true)
                    range = new Range(cursor.from, cursor.to);
                if (range.from < range.to)
                    overlay.ranges.push(range);
            }
            if (enter && cursor.firstChild()) {
                if (overlay)
                    overlay.depth++;
                if (covered)
                    covered.depth++;
            }
            else {
                for (;;) {
                    if (cursor.nextSibling())
                        break;
                    if (!cursor.parent())
                        break scan;
                    if (overlay && !--overlay.depth) {
                        let ranges = punchRanges(this.ranges, overlay.ranges);
                        if (ranges.length)
                            this.inner.splice(overlay.index, 0, new InnerParse(overlay.parser, overlay.parser.startParse(this.input, enterFragments(overlay.mounts, ranges), ranges), overlay.ranges.map(r => new Range(r.from - overlay.start, r.to - overlay.start)), overlay.target, ranges));
                        overlay = overlay.prev;
                    }
                    if (covered && !--covered.depth)
                        covered = covered.prev;
                }
            }
        }
    }
}
function checkCover(covered, from, to) {
    for (let range of covered) {
        if (range.from >= to)
            break;
        if (range.to > from)
            return range.from <= from && range.to >= to ? 2 /* Full */ : 1 /* Partial */;
    }
    return 0 /* None */;
}
// Take a piece of buffer and convert it into a stand-alone
// TreeBuffer.
function sliceBuf(buf, startI, endI, nodes, positions, off) {
    if (startI < endI) {
        let from = buf.buffer[startI + 1], to = buf.buffer[endI - 2];
        nodes.push(buf.slice(startI, endI, from, to));
        positions.push(from - off);
    }
}
// This function takes a node that's in a buffer, and converts it, and
// its parent buffer nodes, into a Tree. This is again acting on the
// assumption that the trees and buffers have been constructed by the
// parse that was ran via the mix parser, and thus aren't shared with
// any other code, making violations of the immutability safe.
function materialize(cursor) {
    let { node } = cursor, depth = 0;
    // Scan up to the nearest tree
    do {
        cursor.parent();
        depth++;
    } while (!cursor.tree);
    // Find the index of the buffer in that tree
    let i = 0, base = cursor.tree, off = 0;
    for (;; i++) {
        off = base.positions[i] + cursor.from;
        if (off <= node.from && off + base.children[i].length >= node.to)
            break;
    }
    let buf = base.children[i], b = buf.buffer;
    // Split a level in the buffer, putting the nodes before and after
    // the child that contains `node` into new buffers.
    function split(startI, endI, type, innerOffset, length) {
        let i = startI;
        while (b[i + 2] + off <= node.from)
            i = b[i + 3];
        let children = [], positions = [];
        sliceBuf(buf, startI, i, children, positions, innerOffset);
        let from = b[i + 1], to = b[i + 2];
        let isTarget = from + off == node.from && to + off == node.to && b[i] == node.type.id;
        children.push(isTarget ? node.toTree() : split(i + 4, b[i + 3], buf.set.types[b[i]], from, to - from));
        positions.push(from - innerOffset);
        sliceBuf(buf, b[i + 3], endI, children, positions, innerOffset);
        return new Tree(type, children, positions, length);
    }
    base.children[i] = split(0, b.length, NodeType.none, 0, buf.length);
    // Move the cursor back to the target node
    for (let d = 0; d <= depth; d++)
        cursor.childAfter(node.from);
}
class StructureCursor {
    constructor(root, offset) {
        this.offset = offset;
        this.done = false;
        this.cursor = root.fullCursor();
    }
    // Move to the first node (in pre-order) that starts at or after `pos`.
    moveTo(pos) {
        let { cursor } = this, p = pos - this.offset;
        while (!this.done && cursor.from < p) {
            if (cursor.to >= pos && cursor.enter(p, 1, false, false)) ;
            else if (!cursor.next(false))
                this.done = true;
        }
    }
    hasNode(cursor) {
        this.moveTo(cursor.from);
        if (!this.done && this.cursor.from + this.offset == cursor.from && this.cursor.tree) {
            for (let tree = this.cursor.tree;;) {
                if (tree == cursor.tree)
                    return true;
                if (tree.children.length && tree.positions[0] == 0 && tree.children[0] instanceof Tree)
                    tree = tree.children[0];
                else
                    break;
            }
        }
        return false;
    }
}
class FragmentCursor {
    constructor(fragments) {
        var _a;
        this.fragments = fragments;
        this.curTo = 0;
        this.fragI = 0;
        if (fragments.length) {
            let first = this.curFrag = fragments[0];
            this.curTo = (_a = first.tree.prop(stoppedInner)) !== null && _a !== void 0 ? _a : first.to;
            this.inner = new StructureCursor(first.tree, -first.offset);
        }
        else {
            this.curFrag = this.inner = null;
        }
    }
    hasNode(node) {
        while (this.curFrag && node.from >= this.curTo)
            this.nextFrag();
        return this.curFrag && this.curFrag.from <= node.from && this.curTo >= node.to && this.inner.hasNode(node);
    }
    nextFrag() {
        var _a;
        this.fragI++;
        if (this.fragI == this.fragments.length) {
            this.curFrag = this.inner = null;
        }
        else {
            let frag = this.curFrag = this.fragments[this.fragI];
            this.curTo = (_a = frag.tree.prop(stoppedInner)) !== null && _a !== void 0 ? _a : frag.to;
            this.inner = new StructureCursor(frag.tree, -frag.offset);
        }
    }
    findMounts(pos, parser) {
        var _a;
        let result = [];
        if (this.inner) {
            this.inner.cursor.moveTo(pos, 1);
            for (let pos = this.inner.cursor.node; pos; pos = pos.parent) {
                let mount = (_a = pos.tree) === null || _a === void 0 ? void 0 : _a.prop(NodeProp.mounted);
                if (mount && mount.parser == parser) {
                    for (let i = this.fragI; i < this.fragments.length; i++) {
                        let frag = this.fragments[i];
                        if (frag.from >= pos.to)
                            break;
                        if (frag.tree == this.curFrag.tree)
                            result.push({
                                frag,
                                pos: pos.from - frag.offset,
                                mount
                            });
                    }
                }
            }
        }
        return result;
    }
}
function punchRanges(outer, ranges) {
    let copy = null, current = ranges;
    for (let i = 1, j = 0; i < outer.length; i++) {
        let gapFrom = outer[i - 1].to, gapTo = outer[i].from;
        for (; j < current.length; j++) {
            let r = current[j];
            if (r.from >= gapTo)
                break;
            if (r.to <= gapFrom)
                continue;
            if (!copy)
                current = copy = ranges.slice();
            if (r.from < gapFrom) {
                copy[j] = new Range(r.from, gapFrom);
                if (r.to > gapTo)
                    copy.splice(j + 1, 0, new Range(gapTo, r.to));
            }
            else if (r.to > gapTo) {
                copy[j--] = new Range(gapTo, r.to);
            }
            else {
                copy.splice(j--, 1);
            }
        }
    }
    return current;
}
function findCoverChanges(a, b, from, to) {
    let iA = 0, iB = 0, inA = false, inB = false, pos = -1e9;
    let result = [];
    for (;;) {
        let nextA = iA == a.length ? 1e9 : inA ? a[iA].to : a[iA].from;
        let nextB = iB == b.length ? 1e9 : inB ? b[iB].to : b[iB].from;
        if (inA != inB) {
            let start = Math.max(pos, from), end = Math.min(nextA, nextB, to);
            if (start < end)
                result.push(new Range(start, end));
        }
        pos = Math.min(nextA, nextB);
        if (pos == 1e9)
            break;
        if (nextA == pos) {
            if (!inA)
                inA = true;
            else {
                inA = false;
                iA++;
            }
        }
        if (nextB == pos) {
            if (!inB)
                inB = true;
            else {
                inB = false;
                iB++;
            }
        }
    }
    return result;
}
// Given a number of fragments for the outer tree, and a set of ranges
// to parse, find fragments for inner trees mounted around those
// ranges, if any.
function enterFragments(mounts, ranges) {
    let result = [];
    for (let { pos, mount, frag } of mounts) {
        let startPos = pos + (mount.overlay ? mount.overlay[0].from : 0), endPos = startPos + mount.tree.length;
        let from = Math.max(frag.from, startPos), to = Math.min(frag.to, endPos);
        if (mount.overlay) {
            let overlay = mount.overlay.map(r => new Range(r.from + pos, r.to + pos));
            let changes = findCoverChanges(ranges, overlay, from, to);
            for (let i = 0, pos = from;; i++) {
                let last = i == changes.length, end = last ? to : changes[i].from;
                if (end > pos)
                    result.push(new TreeFragment(pos, end, mount.tree, -startPos, frag.from >= pos, frag.to <= end));
                if (last)
                    break;
                pos = changes[i].to;
            }
        }
        else {
            result.push(new TreeFragment(from, to, mount.tree, -startPos, frag.from >= startPos, frag.to <= endPos));
        }
    }
    return result;
}




/***/ }),

/***/ "./.yarn/cache/@lezer-lr-npm-0.15.8-8c481c39cd-e741225d6a.zip/node_modules/@lezer/lr/dist/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextTracker": () => (/* binding */ ContextTracker),
/* harmony export */   "ExternalTokenizer": () => (/* binding */ ExternalTokenizer),
/* harmony export */   "InputStream": () => (/* binding */ InputStream),
/* harmony export */   "LRParser": () => (/* binding */ LRParser),
/* harmony export */   "Stack": () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var _lezer_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@lezer-common-npm-0.15.12-62017272b0-dae6581618.zip/node_modules/@lezer/common/dist/index.js");


/// A parse stack. These are used internally by the parser to track
/// parsing progress. They also provide some properties and methods
/// that external code such as a tokenizer can use to get information
/// about the parse state.
class Stack {
    /// @internal
    constructor(
    /// The parse that this stack is part of @internal
    p, 
    /// Holds state, input pos, buffer index triplets for all but the
    /// top state @internal
    stack, 
    /// The current parse state @internal
    state, 
    // The position at which the next reduce should take place. This
    // can be less than `this.pos` when skipped expressions have been
    // added to the stack (which should be moved outside of the next
    // reduction)
    /// @internal
    reducePos, 
    /// The input position up to which this stack has parsed.
    pos, 
    /// The dynamic score of the stack, including dynamic precedence
    /// and error-recovery penalties
    /// @internal
    score, 
    // The output buffer. Holds (type, start, end, size) quads
    // representing nodes created by the parser, where `size` is
    // amount of buffer array entries covered by this node.
    /// @internal
    buffer, 
    // The base offset of the buffer. When stacks are split, the split
    // instance shared the buffer history with its parent up to
    // `bufferBase`, which is the absolute offset (including the
    // offset of previous splits) into the buffer at which this stack
    // starts writing.
    /// @internal
    bufferBase, 
    /// @internal
    curContext, 
    /// @internal
    lookAhead = 0, 
    // A parent stack from which this was split off, if any. This is
    // set up so that it always points to a stack that has some
    // additional buffer content, never to a stack with an equal
    // `bufferBase`.
    /// @internal
    parent) {
        this.p = p;
        this.stack = stack;
        this.state = state;
        this.reducePos = reducePos;
        this.pos = pos;
        this.score = score;
        this.buffer = buffer;
        this.bufferBase = bufferBase;
        this.curContext = curContext;
        this.lookAhead = lookAhead;
        this.parent = parent;
    }
    /// @internal
    toString() {
        return `[${this.stack.filter((_, i) => i % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    // Start an empty stack
    /// @internal
    static start(p, state, pos = 0) {
        let cx = p.parser.context;
        return new Stack(p, [], state, pos, pos, 0, [], 0, cx ? new StackContext(cx, cx.start) : null, 0, null);
    }
    /// The stack's current [context](#lr.ContextTracker) value, if
    /// any. Its type will depend on the context tracker's type
    /// parameter, or it will be `null` if there is no context
    /// tracker.
    get context() { return this.curContext ? this.curContext.context : null; }
    // Push a state onto the stack, tracking its start position as well
    // as the buffer base at that point.
    /// @internal
    pushState(state, start) {
        this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
        this.state = state;
    }
    // Apply a reduce action
    /// @internal
    reduce(action) {
        let depth = action >> 19 /* ReduceDepthShift */, type = action & 65535 /* ValueMask */;
        let { parser } = this.p;
        let dPrec = parser.dynamicPrecedence(type);
        if (dPrec)
            this.score += dPrec;
        if (depth == 0) {
            this.pushState(parser.getGoto(this.state, type, true), this.reducePos);
            // Zero-depth reductions are a special case—they add stuff to
            // the stack without popping anything off.
            if (type < parser.minRepeatTerm)
                this.storeNode(type, this.reducePos, this.reducePos, 4, true);
            this.reduceContext(type, this.reducePos);
            return;
        }
        // Find the base index into `this.stack`, content after which will
        // be dropped. Note that with `StayFlag` reductions we need to
        // consume two extra frames (the dummy parent node for the skipped
        // expression and the state that we'll be staying in, which should
        // be moved to `this.state`).
        let base = this.stack.length - ((depth - 1) * 3) - (action & 262144 /* StayFlag */ ? 6 : 0);
        let start = this.stack[base - 2];
        let bufferBase = this.stack[base - 1], count = this.bufferBase + this.buffer.length - bufferBase;
        // Store normal terms or `R -> R R` repeat reductions
        if (type < parser.minRepeatTerm || (action & 131072 /* RepeatFlag */)) {
            let pos = parser.stateFlag(this.state, 1 /* Skipped */) ? this.pos : this.reducePos;
            this.storeNode(type, start, pos, count + 4, true);
        }
        if (action & 262144 /* StayFlag */) {
            this.state = this.stack[base];
        }
        else {
            let baseStateID = this.stack[base - 3];
            this.state = parser.getGoto(baseStateID, type, true);
        }
        while (this.stack.length > base)
            this.stack.pop();
        this.reduceContext(type, start);
    }
    // Shift a value into the buffer
    /// @internal
    storeNode(term, start, end, size = 4, isReduce = false) {
        if (term == 0 /* Err */) { // Try to omit/merge adjacent error nodes
            let cur = this, top = this.buffer.length;
            if (top == 0 && cur.parent) {
                top = cur.bufferBase - cur.parent.bufferBase;
                cur = cur.parent;
            }
            if (top > 0 && cur.buffer[top - 4] == 0 /* Err */ && cur.buffer[top - 1] > -1) {
                if (start == end)
                    return;
                if (cur.buffer[top - 2] >= start) {
                    cur.buffer[top - 2] = end;
                    return;
                }
            }
        }
        if (!isReduce || this.pos == end) { // Simple case, just append
            this.buffer.push(term, start, end, size);
        }
        else { // There may be skipped nodes that have to be moved forward
            let index = this.buffer.length;
            if (index > 0 && this.buffer[index - 4] != 0 /* Err */)
                while (index > 0 && this.buffer[index - 2] > end) {
                    // Move this record forward
                    this.buffer[index] = this.buffer[index - 4];
                    this.buffer[index + 1] = this.buffer[index - 3];
                    this.buffer[index + 2] = this.buffer[index - 2];
                    this.buffer[index + 3] = this.buffer[index - 1];
                    index -= 4;
                    if (size > 4)
                        size -= 4;
                }
            this.buffer[index] = term;
            this.buffer[index + 1] = start;
            this.buffer[index + 2] = end;
            this.buffer[index + 3] = size;
        }
    }
    // Apply a shift action
    /// @internal
    shift(action, next, nextEnd) {
        let start = this.pos;
        if (action & 131072 /* GotoFlag */) {
            this.pushState(action & 65535 /* ValueMask */, this.pos);
        }
        else if ((action & 262144 /* StayFlag */) == 0) { // Regular shift
            let nextState = action, { parser } = this.p;
            if (nextEnd > this.pos || next <= parser.maxNode) {
                this.pos = nextEnd;
                if (!parser.stateFlag(nextState, 1 /* Skipped */))
                    this.reducePos = nextEnd;
            }
            this.pushState(nextState, start);
            this.shiftContext(next, start);
            if (next <= parser.maxNode)
                this.buffer.push(next, start, nextEnd, 4);
        }
        else { // Shift-and-stay, which means this is a skipped token
            this.pos = nextEnd;
            this.shiftContext(next, start);
            if (next <= this.p.parser.maxNode)
                this.buffer.push(next, start, nextEnd, 4);
        }
    }
    // Apply an action
    /// @internal
    apply(action, next, nextEnd) {
        if (action & 65536 /* ReduceFlag */)
            this.reduce(action);
        else
            this.shift(action, next, nextEnd);
    }
    // Add a prebuilt (reused) node into the buffer.
    /// @internal
    useNode(value, next) {
        let index = this.p.reused.length - 1;
        if (index < 0 || this.p.reused[index] != value) {
            this.p.reused.push(value);
            index++;
        }
        let start = this.pos;
        this.reducePos = this.pos = start + value.length;
        this.pushState(next, start);
        this.buffer.push(index, start, this.reducePos, -1 /* size == -1 means this is a reused value */);
        if (this.curContext)
            this.updateContext(this.curContext.tracker.reuse(this.curContext.context, value, this, this.p.stream.reset(this.pos - value.length)));
    }
    // Split the stack. Due to the buffer sharing and the fact
    // that `this.stack` tends to stay quite shallow, this isn't very
    // expensive.
    /// @internal
    split() {
        let parent = this;
        let off = parent.buffer.length;
        // Because the top of the buffer (after this.pos) may be mutated
        // to reorder reductions and skipped tokens, and shared buffers
        // should be immutable, this copies any outstanding skipped tokens
        // to the new buffer, and puts the base pointer before them.
        while (off > 0 && parent.buffer[off - 2] > parent.reducePos)
            off -= 4;
        let buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
        // Make sure parent points to an actual parent with content, if there is such a parent.
        while (parent && base == parent.bufferBase)
            parent = parent.parent;
        return new Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, buffer, base, this.curContext, this.lookAhead, parent);
    }
    // Try to recover from an error by 'deleting' (ignoring) one token.
    /// @internal
    recoverByDelete(next, nextEnd) {
        let isNode = next <= this.p.parser.maxNode;
        if (isNode)
            this.storeNode(next, this.pos, nextEnd, 4);
        this.storeNode(0 /* Err */, this.pos, nextEnd, isNode ? 8 : 4);
        this.pos = this.reducePos = nextEnd;
        this.score -= 190 /* Delete */;
    }
    /// Check if the given term would be able to be shifted (optionally
    /// after some reductions) on this stack. This can be useful for
    /// external tokenizers that want to make sure they only provide a
    /// given token when it applies.
    canShift(term) {
        for (let sim = new SimulatedStack(this);;) {
            let action = this.p.parser.stateSlot(sim.state, 4 /* DefaultReduce */) || this.p.parser.hasAction(sim.state, term);
            if ((action & 65536 /* ReduceFlag */) == 0)
                return true;
            if (action == 0)
                return false;
            sim.reduce(action);
        }
    }
    // Apply up to Recover.MaxNext recovery actions that conceptually
    // inserts some missing token or rule.
    /// @internal
    recoverByInsert(next) {
        if (this.stack.length >= 300 /* MaxInsertStackDepth */)
            return [];
        let nextStates = this.p.parser.nextStates(this.state);
        if (nextStates.length > 4 /* MaxNext */ << 1 || this.stack.length >= 120 /* DampenInsertStackDepth */) {
            let best = [];
            for (let i = 0, s; i < nextStates.length; i += 2) {
                if ((s = nextStates[i + 1]) != this.state && this.p.parser.hasAction(s, next))
                    best.push(nextStates[i], s);
            }
            if (this.stack.length < 120 /* DampenInsertStackDepth */)
                for (let i = 0; best.length < 4 /* MaxNext */ << 1 && i < nextStates.length; i += 2) {
                    let s = nextStates[i + 1];
                    if (!best.some((v, i) => (i & 1) && v == s))
                        best.push(nextStates[i], s);
                }
            nextStates = best;
        }
        let result = [];
        for (let i = 0; i < nextStates.length && result.length < 4 /* MaxNext */; i += 2) {
            let s = nextStates[i + 1];
            if (s == this.state)
                continue;
            let stack = this.split();
            stack.storeNode(0 /* Err */, stack.pos, stack.pos, 4, true);
            stack.pushState(s, this.pos);
            stack.shiftContext(nextStates[i], this.pos);
            stack.score -= 200 /* Insert */;
            result.push(stack);
        }
        return result;
    }
    // Force a reduce, if possible. Return false if that can't
    // be done.
    /// @internal
    forceReduce() {
        let reduce = this.p.parser.stateSlot(this.state, 5 /* ForcedReduce */);
        if ((reduce & 65536 /* ReduceFlag */) == 0)
            return false;
        let { parser } = this.p;
        if (!parser.validAction(this.state, reduce)) {
            let depth = reduce >> 19 /* ReduceDepthShift */, term = reduce & 65535 /* ValueMask */;
            let target = this.stack.length - depth * 3;
            if (target < 0 || parser.getGoto(this.stack[target], term, false) < 0)
                return false;
            this.storeNode(0 /* Err */, this.reducePos, this.reducePos, 4, true);
            this.score -= 100 /* Reduce */;
        }
        this.reduce(reduce);
        return true;
    }
    /// @internal
    forceAll() {
        while (!this.p.parser.stateFlag(this.state, 2 /* Accepting */)) {
            if (!this.forceReduce()) {
                this.storeNode(0 /* Err */, this.pos, this.pos, 4, true);
                break;
            }
        }
        return this;
    }
    /// Check whether this state has no further actions (assumed to be a direct descendant of the
    /// top state, since any other states must be able to continue
    /// somehow). @internal
    get deadEnd() {
        if (this.stack.length != 3)
            return false;
        let { parser } = this.p;
        return parser.data[parser.stateSlot(this.state, 1 /* Actions */)] == 65535 /* End */ &&
            !parser.stateSlot(this.state, 4 /* DefaultReduce */);
    }
    /// Restart the stack (put it back in its start state). Only safe
    /// when this.stack.length == 3 (state is directly below the top
    /// state). @internal
    restart() {
        this.state = this.stack[0];
        this.stack.length = 0;
    }
    /// @internal
    sameState(other) {
        if (this.state != other.state || this.stack.length != other.stack.length)
            return false;
        for (let i = 0; i < this.stack.length; i += 3)
            if (this.stack[i] != other.stack[i])
                return false;
        return true;
    }
    /// Get the parser used by this stack.
    get parser() { return this.p.parser; }
    /// Test whether a given dialect (by numeric ID, as exported from
    /// the terms file) is enabled.
    dialectEnabled(dialectID) { return this.p.parser.dialect.flags[dialectID]; }
    shiftContext(term, start) {
        if (this.curContext)
            this.updateContext(this.curContext.tracker.shift(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    reduceContext(term, start) {
        if (this.curContext)
            this.updateContext(this.curContext.tracker.reduce(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    /// @internal
    emitContext() {
        let last = this.buffer.length - 1;
        if (last < 0 || this.buffer[last] != -3)
            this.buffer.push(this.curContext.hash, this.reducePos, this.reducePos, -3);
    }
    /// @internal
    emitLookAhead() {
        let last = this.buffer.length - 1;
        if (last < 0 || this.buffer[last] != -4)
            this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4);
    }
    updateContext(context) {
        if (context != this.curContext.context) {
            let newCx = new StackContext(this.curContext.tracker, context);
            if (newCx.hash != this.curContext.hash)
                this.emitContext();
            this.curContext = newCx;
        }
    }
    /// @internal
    setLookAhead(lookAhead) {
        if (lookAhead > this.lookAhead) {
            this.emitLookAhead();
            this.lookAhead = lookAhead;
        }
    }
    /// @internal
    close() {
        if (this.curContext && this.curContext.tracker.strict)
            this.emitContext();
        if (this.lookAhead > 0)
            this.emitLookAhead();
    }
}
class StackContext {
    constructor(tracker, context) {
        this.tracker = tracker;
        this.context = context;
        this.hash = tracker.strict ? tracker.hash(context) : 0;
    }
}
var Recover;
(function (Recover) {
    Recover[Recover["Insert"] = 200] = "Insert";
    Recover[Recover["Delete"] = 190] = "Delete";
    Recover[Recover["Reduce"] = 100] = "Reduce";
    Recover[Recover["MaxNext"] = 4] = "MaxNext";
    Recover[Recover["MaxInsertStackDepth"] = 300] = "MaxInsertStackDepth";
    Recover[Recover["DampenInsertStackDepth"] = 120] = "DampenInsertStackDepth";
})(Recover || (Recover = {}));
// Used to cheaply run some reductions to scan ahead without mutating
// an entire stack
class SimulatedStack {
    constructor(start) {
        this.start = start;
        this.state = start.state;
        this.stack = start.stack;
        this.base = this.stack.length;
    }
    reduce(action) {
        let term = action & 65535 /* ValueMask */, depth = action >> 19 /* ReduceDepthShift */;
        if (depth == 0) {
            if (this.stack == this.start.stack)
                this.stack = this.stack.slice();
            this.stack.push(this.state, 0, 0);
            this.base += 3;
        }
        else {
            this.base -= (depth - 1) * 3;
        }
        let goto = this.start.p.parser.getGoto(this.stack[this.base - 3], term, true);
        this.state = goto;
    }
}
// This is given to `Tree.build` to build a buffer, and encapsulates
// the parent-stack-walking necessary to read the nodes.
class StackBufferCursor {
    constructor(stack, pos, index) {
        this.stack = stack;
        this.pos = pos;
        this.index = index;
        this.buffer = stack.buffer;
        if (this.index == 0)
            this.maybeNext();
    }
    static create(stack, pos = stack.bufferBase + stack.buffer.length) {
        return new StackBufferCursor(stack, pos, pos - stack.bufferBase);
    }
    maybeNext() {
        let next = this.stack.parent;
        if (next != null) {
            this.index = this.stack.bufferBase - next.bufferBase;
            this.stack = next;
            this.buffer = next.buffer;
        }
    }
    get id() { return this.buffer[this.index - 4]; }
    get start() { return this.buffer[this.index - 3]; }
    get end() { return this.buffer[this.index - 2]; }
    get size() { return this.buffer[this.index - 1]; }
    next() {
        this.index -= 4;
        this.pos -= 4;
        if (this.index == 0)
            this.maybeNext();
    }
    fork() {
        return new StackBufferCursor(this.stack, this.pos, this.index);
    }
}

class CachedToken {
    constructor() {
        this.start = -1;
        this.value = -1;
        this.end = -1;
        this.extended = -1;
        this.lookAhead = 0;
        this.mask = 0;
        this.context = 0;
    }
}
const nullToken = new CachedToken;
/// [Tokenizers](#lr.ExternalTokenizer) interact with the input
/// through this interface. It presents the input as a stream of
/// characters, tracking lookahead and hiding the complexity of
/// [ranges](#common.Parser.parse^ranges) from tokenizer code.
class InputStream {
    /// @internal
    constructor(
    /// @internal
    input, 
    /// @internal
    ranges) {
        this.input = input;
        this.ranges = ranges;
        /// @internal
        this.chunk = "";
        /// @internal
        this.chunkOff = 0;
        /// Backup chunk
        this.chunk2 = "";
        this.chunk2Pos = 0;
        /// The character code of the next code unit in the input, or -1
        /// when the stream is at the end of the input.
        this.next = -1;
        /// @internal
        this.token = nullToken;
        this.rangeIndex = 0;
        this.pos = this.chunkPos = ranges[0].from;
        this.range = ranges[0];
        this.end = ranges[ranges.length - 1].to;
        this.readNext();
    }
    resolveOffset(offset, assoc) {
        let range = this.range, index = this.rangeIndex;
        let pos = this.pos + offset;
        while (pos < range.from) {
            if (!index)
                return null;
            let next = this.ranges[--index];
            pos -= range.from - next.to;
            range = next;
        }
        while (assoc < 0 ? pos > range.to : pos >= range.to) {
            if (index == this.ranges.length - 1)
                return null;
            let next = this.ranges[++index];
            pos += next.from - range.to;
            range = next;
        }
        return pos;
    }
    /// Look at a code unit near the stream position. `.peek(0)` equals
    /// `.next`, `.peek(-1)` gives you the previous character, and so
    /// on.
    ///
    /// Note that looking around during tokenizing creates dependencies
    /// on potentially far-away content, which may reduce the
    /// effectiveness incremental parsing—when looking forward—or even
    /// cause invalid reparses when looking backward more than 25 code
    /// units, since the library does not track lookbehind.
    peek(offset) {
        let idx = this.chunkOff + offset, pos, result;
        if (idx >= 0 && idx < this.chunk.length) {
            pos = this.pos + offset;
            result = this.chunk.charCodeAt(idx);
        }
        else {
            let resolved = this.resolveOffset(offset, 1);
            if (resolved == null)
                return -1;
            pos = resolved;
            if (pos >= this.chunk2Pos && pos < this.chunk2Pos + this.chunk2.length) {
                result = this.chunk2.charCodeAt(pos - this.chunk2Pos);
            }
            else {
                let i = this.rangeIndex, range = this.range;
                while (range.to <= pos)
                    range = this.ranges[++i];
                this.chunk2 = this.input.chunk(this.chunk2Pos = pos);
                if (pos + this.chunk2.length > range.to)
                    this.chunk2 = this.chunk2.slice(0, range.to - pos);
                result = this.chunk2.charCodeAt(0);
            }
        }
        if (pos >= this.token.lookAhead)
            this.token.lookAhead = pos + 1;
        return result;
    }
    /// Accept a token. By default, the end of the token is set to the
    /// current stream position, but you can pass an offset (relative to
    /// the stream position) to change that.
    acceptToken(token, endOffset = 0) {
        let end = endOffset ? this.resolveOffset(endOffset, -1) : this.pos;
        if (end == null || end < this.token.start)
            throw new RangeError("Token end out of bounds");
        this.token.value = token;
        this.token.end = end;
    }
    getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
            let { chunk, chunkPos } = this;
            this.chunk = this.chunk2;
            this.chunkPos = this.chunk2Pos;
            this.chunk2 = chunk;
            this.chunk2Pos = chunkPos;
            this.chunkOff = this.pos - this.chunkPos;
        }
        else {
            this.chunk2 = this.chunk;
            this.chunk2Pos = this.chunkPos;
            let nextChunk = this.input.chunk(this.pos);
            let end = this.pos + nextChunk.length;
            this.chunk = end > this.range.to ? nextChunk.slice(0, this.range.to - this.pos) : nextChunk;
            this.chunkPos = this.pos;
            this.chunkOff = 0;
        }
    }
    readNext() {
        if (this.chunkOff >= this.chunk.length) {
            this.getChunk();
            if (this.chunkOff == this.chunk.length)
                return this.next = -1;
        }
        return this.next = this.chunk.charCodeAt(this.chunkOff);
    }
    /// Move the stream forward N (defaults to 1) code units. Returns
    /// the new value of [`next`](#lr.InputStream.next).
    advance(n = 1) {
        this.chunkOff += n;
        while (this.pos + n >= this.range.to) {
            if (this.rangeIndex == this.ranges.length - 1)
                return this.setDone();
            n -= this.range.to - this.pos;
            this.range = this.ranges[++this.rangeIndex];
            this.pos = this.range.from;
        }
        this.pos += n;
        if (this.pos >= this.token.lookAhead)
            this.token.lookAhead = this.pos + 1;
        return this.readNext();
    }
    setDone() {
        this.pos = this.chunkPos = this.end;
        this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
        this.chunk = "";
        return this.next = -1;
    }
    /// @internal
    reset(pos, token) {
        if (token) {
            this.token = token;
            token.start = pos;
            token.lookAhead = pos + 1;
            token.value = token.extended = -1;
        }
        else {
            this.token = nullToken;
        }
        if (this.pos != pos) {
            this.pos = pos;
            if (pos == this.end) {
                this.setDone();
                return this;
            }
            while (pos < this.range.from)
                this.range = this.ranges[--this.rangeIndex];
            while (pos >= this.range.to)
                this.range = this.ranges[++this.rangeIndex];
            if (pos >= this.chunkPos && pos < this.chunkPos + this.chunk.length) {
                this.chunkOff = pos - this.chunkPos;
            }
            else {
                this.chunk = "";
                this.chunkOff = 0;
            }
            this.readNext();
        }
        return this;
    }
    /// @internal
    read(from, to) {
        if (from >= this.chunkPos && to <= this.chunkPos + this.chunk.length)
            return this.chunk.slice(from - this.chunkPos, to - this.chunkPos);
        if (from >= this.chunk2Pos && to <= this.chunk2Pos + this.chunk2.length)
            return this.chunk2.slice(from - this.chunk2Pos, to - this.chunk2Pos);
        if (from >= this.range.from && to <= this.range.to)
            return this.input.read(from, to);
        let result = "";
        for (let r of this.ranges) {
            if (r.from >= to)
                break;
            if (r.to > from)
                result += this.input.read(Math.max(r.from, from), Math.min(r.to, to));
        }
        return result;
    }
}
/// @internal
class TokenGroup {
    constructor(data, id) {
        this.data = data;
        this.id = id;
    }
    token(input, stack) { readToken(this.data, input, stack, this.id); }
}
TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/// `@external tokens` declarations in the grammar should resolve to
/// an instance of this class.
class ExternalTokenizer {
    /// Create a tokenizer. The first argument is the function that,
    /// given an input stream, scans for the types of tokens it
    /// recognizes at the stream's position, and calls
    /// [`acceptToken`](#lr.InputStream.acceptToken) when it finds
    /// one.
    constructor(
    /// @internal
    token, options = {}) {
        this.token = token;
        this.contextual = !!options.contextual;
        this.fallback = !!options.fallback;
        this.extend = !!options.extend;
    }
}
// Tokenizer data is stored a big uint16 array containing, for each
// state:
//
//  - A group bitmask, indicating what token groups are reachable from
//    this state, so that paths that can only lead to tokens not in
//    any of the current groups can be cut off early.
//
//  - The position of the end of the state's sequence of accepting
//    tokens
//
//  - The number of outgoing edges for the state
//
//  - The accepting tokens, as (token id, group mask) pairs
//
//  - The outgoing edges, as (start character, end character, state
//    index) triples, with end character being exclusive
//
// This function interprets that data, running through a stream as
// long as new states with the a matching group mask can be reached,
// and updating `token` when it matches a token.
function readToken(data, input, stack, group) {
    let state = 0, groupMask = 1 << group, { parser } = stack.p, { dialect } = parser;
    scan: for (;;) {
        if ((groupMask & data[state]) == 0)
            break;
        let accEnd = data[state + 1];
        // Check whether this state can lead to a token in the current group
        // Accept tokens in this state, possibly overwriting
        // lower-precedence / shorter tokens
        for (let i = state + 3; i < accEnd; i += 2)
            if ((data[i + 1] & groupMask) > 0) {
                let term = data[i];
                if (dialect.allows(term) &&
                    (input.token.value == -1 || input.token.value == term || parser.overrides(term, input.token.value))) {
                    input.acceptToken(term);
                    break;
                }
            }
        // Do a binary search on the state's edges
        for (let next = input.next, low = 0, high = data[state + 2]; low < high;) {
            let mid = (low + high) >> 1;
            let index = accEnd + mid + (mid << 1);
            let from = data[index], to = data[index + 1];
            if (next < from)
                high = mid;
            else if (next >= to)
                low = mid + 1;
            else {
                state = data[index + 2];
                input.advance();
                continue scan;
            }
        }
        break;
    }
}

// See lezer-generator/src/encode.ts for comments about the encoding
// used here
function decodeArray(input, Type = Uint16Array) {
    if (typeof input != "string")
        return input;
    let array = null;
    for (let pos = 0, out = 0; pos < input.length;) {
        let value = 0;
        for (;;) {
            let next = input.charCodeAt(pos++), stop = false;
            if (next == 126 /* BigValCode */) {
                value = 65535 /* BigVal */;
                break;
            }
            if (next >= 92 /* Gap2 */)
                next--;
            if (next >= 34 /* Gap1 */)
                next--;
            let digit = next - 32 /* Start */;
            if (digit >= 46 /* Base */) {
                digit -= 46 /* Base */;
                stop = true;
            }
            value += digit;
            if (stop)
                break;
            value *= 46 /* Base */;
        }
        if (array)
            array[out++] = value;
        else
            array = new Type(value);
    }
    return array;
}

// FIXME find some way to reduce recovery work done when the input
// doesn't match the grammar at all.
// Environment variable used to control console output
const verbose = typeof process != "undefined" && /\bparse\b/.test(({"NODE_ENV":"development"}).LOG);
let stackIDs = null;
var Safety;
(function (Safety) {
    Safety[Safety["Margin"] = 25] = "Margin";
})(Safety || (Safety = {}));
function cutAt(tree, pos, side) {
    let cursor = tree.fullCursor();
    cursor.moveTo(pos);
    for (;;) {
        if (!(side < 0 ? cursor.childBefore(pos) : cursor.childAfter(pos)))
            for (;;) {
                if ((side < 0 ? cursor.to < pos : cursor.from > pos) && !cursor.type.isError)
                    return side < 0 ? Math.max(0, Math.min(cursor.to - 1, pos - 25 /* Margin */))
                        : Math.min(tree.length, Math.max(cursor.from + 1, pos + 25 /* Margin */));
                if (side < 0 ? cursor.prevSibling() : cursor.nextSibling())
                    break;
                if (!cursor.parent())
                    return side < 0 ? 0 : tree.length;
            }
    }
}
class FragmentCursor {
    constructor(fragments, nodeSet) {
        this.fragments = fragments;
        this.nodeSet = nodeSet;
        this.i = 0;
        this.fragment = null;
        this.safeFrom = -1;
        this.safeTo = -1;
        this.trees = [];
        this.start = [];
        this.index = [];
        this.nextFragment();
    }
    nextFragment() {
        let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (fr) {
            this.safeFrom = fr.openStart ? cutAt(fr.tree, fr.from + fr.offset, 1) - fr.offset : fr.from;
            this.safeTo = fr.openEnd ? cutAt(fr.tree, fr.to + fr.offset, -1) - fr.offset : fr.to;
            while (this.trees.length) {
                this.trees.pop();
                this.start.pop();
                this.index.pop();
            }
            this.trees.push(fr.tree);
            this.start.push(-fr.offset);
            this.index.push(0);
            this.nextStart = this.safeFrom;
        }
        else {
            this.nextStart = 1e9;
        }
    }
    // `pos` must be >= any previously given `pos` for this cursor
    nodeAt(pos) {
        if (pos < this.nextStart)
            return null;
        while (this.fragment && this.safeTo <= pos)
            this.nextFragment();
        if (!this.fragment)
            return null;
        for (;;) {
            let last = this.trees.length - 1;
            if (last < 0) { // End of tree
                this.nextFragment();
                return null;
            }
            let top = this.trees[last], index = this.index[last];
            if (index == top.children.length) {
                this.trees.pop();
                this.start.pop();
                this.index.pop();
                continue;
            }
            let next = top.children[index];
            let start = this.start[last] + top.positions[index];
            if (start > pos) {
                this.nextStart = start;
                return null;
            }
            if (next instanceof _lezer_common__WEBPACK_IMPORTED_MODULE_0__.Tree) {
                if (start == pos) {
                    if (start < this.safeFrom)
                        return null;
                    let end = start + next.length;
                    if (end <= this.safeTo) {
                        let lookAhead = next.prop(_lezer_common__WEBPACK_IMPORTED_MODULE_0__.NodeProp.lookAhead);
                        if (!lookAhead || end + lookAhead < this.fragment.to)
                            return next;
                    }
                }
                this.index[last]++;
                if (start + next.length >= Math.max(this.safeFrom, pos)) { // Enter this node
                    this.trees.push(next);
                    this.start.push(start);
                    this.index.push(0);
                }
            }
            else {
                this.index[last]++;
                this.nextStart = start + next.length;
            }
        }
    }
}
class TokenCache {
    constructor(parser, stream) {
        this.stream = stream;
        this.tokens = [];
        this.mainToken = null;
        this.actions = [];
        this.tokens = parser.tokenizers.map(_ => new CachedToken);
    }
    getActions(stack) {
        let actionIndex = 0;
        let main = null;
        let { parser } = stack.p, { tokenizers } = parser;
        let mask = parser.stateSlot(stack.state, 3 /* TokenizerMask */);
        let context = stack.curContext ? stack.curContext.hash : 0;
        let lookAhead = 0;
        for (let i = 0; i < tokenizers.length; i++) {
            if (((1 << i) & mask) == 0)
                continue;
            let tokenizer = tokenizers[i], token = this.tokens[i];
            if (main && !tokenizer.fallback)
                continue;
            if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {
                this.updateCachedToken(token, tokenizer, stack);
                token.mask = mask;
                token.context = context;
            }
            if (token.lookAhead > token.end + 25 /* Margin */)
                lookAhead = Math.max(token.lookAhead, lookAhead);
            if (token.value != 0 /* Err */) {
                let startIndex = actionIndex;
                if (token.extended > -1)
                    actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
                actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
                if (!tokenizer.extend) {
                    main = token;
                    if (actionIndex > startIndex)
                        break;
                }
            }
        }
        while (this.actions.length > actionIndex)
            this.actions.pop();
        if (lookAhead)
            stack.setLookAhead(lookAhead);
        if (!main && stack.pos == this.stream.end) {
            main = new CachedToken;
            main.value = stack.p.parser.eofTerm;
            main.start = main.end = stack.pos;
            actionIndex = this.addActions(stack, main.value, main.end, actionIndex);
        }
        this.mainToken = main;
        return this.actions;
    }
    getMainToken(stack) {
        if (this.mainToken)
            return this.mainToken;
        let main = new CachedToken, { pos, p } = stack;
        main.start = pos;
        main.end = Math.min(pos + 1, p.stream.end);
        main.value = pos == p.stream.end ? p.parser.eofTerm : 0 /* Err */;
        return main;
    }
    updateCachedToken(token, tokenizer, stack) {
        tokenizer.token(this.stream.reset(stack.pos, token), stack);
        if (token.value > -1) {
            let { parser } = stack.p;
            for (let i = 0; i < parser.specialized.length; i++)
                if (parser.specialized[i] == token.value) {
                    let result = parser.specializers[i](this.stream.read(token.start, token.end), stack);
                    if (result >= 0 && stack.p.parser.dialect.allows(result >> 1)) {
                        if ((result & 1) == 0 /* Specialize */)
                            token.value = result >> 1;
                        else
                            token.extended = result >> 1;
                        break;
                    }
                }
        }
        else {
            token.value = 0 /* Err */;
            token.end = Math.min(stack.p.stream.end, stack.pos + 1);
        }
    }
    putAction(action, token, end, index) {
        // Don't add duplicate actions
        for (let i = 0; i < index; i += 3)
            if (this.actions[i] == action)
                return index;
        this.actions[index++] = action;
        this.actions[index++] = token;
        this.actions[index++] = end;
        return index;
    }
    addActions(stack, token, end, index) {
        let { state } = stack, { parser } = stack.p, { data } = parser;
        for (let set = 0; set < 2; set++) {
            for (let i = parser.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */);; i += 3) {
                if (data[i] == 65535 /* End */) {
                    if (data[i + 1] == 1 /* Next */) {
                        i = pair(data, i + 2);
                    }
                    else {
                        if (index == 0 && data[i + 1] == 2 /* Other */)
                            index = this.putAction(pair(data, i + 2), token, end, index);
                        break;
                    }
                }
                if (data[i] == token)
                    index = this.putAction(pair(data, i + 1), token, end, index);
            }
        }
        return index;
    }
}
var Rec;
(function (Rec) {
    Rec[Rec["Distance"] = 5] = "Distance";
    Rec[Rec["MaxRemainingPerStep"] = 3] = "MaxRemainingPerStep";
    // When two stacks have been running independently long enough to
    // add this many elements to their buffers, prune one.
    Rec[Rec["MinBufferLengthPrune"] = 500] = "MinBufferLengthPrune";
    Rec[Rec["ForceReduceLimit"] = 10] = "ForceReduceLimit";
    // Once a stack reaches this depth (in .stack.length) force-reduce
    // it back to CutTo to avoid creating trees that overflow the stack
    // on recursive traversal.
    Rec[Rec["CutDepth"] = 15000] = "CutDepth";
    Rec[Rec["CutTo"] = 9000] = "CutTo";
})(Rec || (Rec = {}));
class Parse {
    constructor(parser, input, fragments, ranges) {
        this.parser = parser;
        this.input = input;
        this.ranges = ranges;
        this.recovering = 0;
        this.nextStackID = 0x2654; // ♔, ♕, ♖, ♗, ♘, ♙, ♠, ♡, ♢, ♣, ♤, ♥, ♦, ♧
        this.minStackPos = 0;
        this.reused = [];
        this.stoppedAt = null;
        this.stream = new InputStream(input, ranges);
        this.tokens = new TokenCache(parser, this.stream);
        this.topTerm = parser.top[1];
        let { from } = ranges[0];
        this.stacks = [Stack.start(this, parser.top[0], from)];
        this.fragments = fragments.length && this.stream.end - from > parser.bufferLength * 4
            ? new FragmentCursor(fragments, parser.nodeSet) : null;
    }
    get parsedPos() {
        return this.minStackPos;
    }
    // Move the parser forward. This will process all parse stacks at
    // `this.pos` and try to advance them to a further position. If no
    // stack for such a position is found, it'll start error-recovery.
    //
    // When the parse is finished, this will return a syntax tree. When
    // not, it returns `null`.
    advance() {
        let stacks = this.stacks, pos = this.minStackPos;
        // This will hold stacks beyond `pos`.
        let newStacks = this.stacks = [];
        let stopped, stoppedTokens;
        // Keep advancing any stacks at `pos` until they either move
        // forward or can't be advanced. Gather stacks that can't be
        // advanced further in `stopped`.
        for (let i = 0; i < stacks.length; i++) {
            let stack = stacks[i];
            for (;;) {
                this.tokens.mainToken = null;
                if (stack.pos > pos) {
                    newStacks.push(stack);
                }
                else if (this.advanceStack(stack, newStacks, stacks)) {
                    continue;
                }
                else {
                    if (!stopped) {
                        stopped = [];
                        stoppedTokens = [];
                    }
                    stopped.push(stack);
                    let tok = this.tokens.getMainToken(stack);
                    stoppedTokens.push(tok.value, tok.end);
                }
                break;
            }
        }
        if (!newStacks.length) {
            let finished = stopped && findFinished(stopped);
            if (finished)
                return this.stackToTree(finished);
            if (this.parser.strict) {
                if (verbose && stopped)
                    console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
                throw new SyntaxError("No parse at " + pos);
            }
            if (!this.recovering)
                this.recovering = 5 /* Distance */;
        }
        if (this.recovering && stopped) {
            let finished = this.stoppedAt != null && stopped[0].pos > this.stoppedAt ? stopped[0]
                : this.runRecovery(stopped, stoppedTokens, newStacks);
            if (finished)
                return this.stackToTree(finished.forceAll());
        }
        if (this.recovering) {
            let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3 /* MaxRemainingPerStep */;
            if (newStacks.length > maxRemaining) {
                newStacks.sort((a, b) => b.score - a.score);
                while (newStacks.length > maxRemaining)
                    newStacks.pop();
            }
            if (newStacks.some(s => s.reducePos > pos))
                this.recovering--;
        }
        else if (newStacks.length > 1) {
            // Prune stacks that are in the same state, or that have been
            // running without splitting for a while, to avoid getting stuck
            // with multiple successful stacks running endlessly on.
            outer: for (let i = 0; i < newStacks.length - 1; i++) {
                let stack = newStacks[i];
                for (let j = i + 1; j < newStacks.length; j++) {
                    let other = newStacks[j];
                    if (stack.sameState(other) ||
                        stack.buffer.length > 500 /* MinBufferLengthPrune */ && other.buffer.length > 500 /* MinBufferLengthPrune */) {
                        if (((stack.score - other.score) || (stack.buffer.length - other.buffer.length)) > 0) {
                            newStacks.splice(j--, 1);
                        }
                        else {
                            newStacks.splice(i--, 1);
                            continue outer;
                        }
                    }
                }
            }
        }
        this.minStackPos = newStacks[0].pos;
        for (let i = 1; i < newStacks.length; i++)
            if (newStacks[i].pos < this.minStackPos)
                this.minStackPos = newStacks[i].pos;
        return null;
    }
    stopAt(pos) {
        if (this.stoppedAt != null && this.stoppedAt < pos)
            throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = pos;
    }
    // Returns an updated version of the given stack, or null if the
    // stack can't advance normally. When `split` and `stacks` are
    // given, stacks split off by ambiguous operations will be pushed to
    // `split`, or added to `stacks` if they move `pos` forward.
    advanceStack(stack, stacks, split) {
        let start = stack.pos, { parser } = this;
        let base = verbose ? this.stackID(stack) + " -> " : "";
        if (this.stoppedAt != null && start > this.stoppedAt)
            return stack.forceReduce() ? stack : null;
        if (this.fragments) {
            let strictCx = stack.curContext && stack.curContext.tracker.strict, cxHash = strictCx ? stack.curContext.hash : 0;
            for (let cached = this.fragments.nodeAt(start); cached;) {
                let match = this.parser.nodeSet.types[cached.type.id] == cached.type ? parser.getGoto(stack.state, cached.type.id) : -1;
                if (match > -1 && cached.length && (!strictCx || (cached.prop(_lezer_common__WEBPACK_IMPORTED_MODULE_0__.NodeProp.contextHash) || 0) == cxHash)) {
                    stack.useNode(cached, match);
                    if (verbose)
                        console.log(base + this.stackID(stack) + ` (via reuse of ${parser.getName(cached.type.id)})`);
                    return true;
                }
                if (!(cached instanceof _lezer_common__WEBPACK_IMPORTED_MODULE_0__.Tree) || cached.children.length == 0 || cached.positions[0] > 0)
                    break;
                let inner = cached.children[0];
                if (inner instanceof _lezer_common__WEBPACK_IMPORTED_MODULE_0__.Tree && cached.positions[0] == 0)
                    cached = inner;
                else
                    break;
            }
        }
        let defaultReduce = parser.stateSlot(stack.state, 4 /* DefaultReduce */);
        if (defaultReduce > 0) {
            stack.reduce(defaultReduce);
            if (verbose)
                console.log(base + this.stackID(stack) + ` (via always-reduce ${parser.getName(defaultReduce & 65535 /* ValueMask */)})`);
            return true;
        }
        if (stack.stack.length >= 15000 /* CutDepth */) {
            while (stack.stack.length > 9000 /* CutTo */ && stack.forceReduce()) { }
        }
        let actions = this.tokens.getActions(stack);
        for (let i = 0; i < actions.length;) {
            let action = actions[i++], term = actions[i++], end = actions[i++];
            let last = i == actions.length || !split;
            let localStack = last ? stack : stack.split();
            localStack.apply(action, term, end);
            if (verbose)
                console.log(base + this.stackID(localStack) + ` (via ${(action & 65536 /* ReduceFlag */) == 0 ? "shift"
                    : `reduce of ${parser.getName(action & 65535 /* ValueMask */)}`} for ${parser.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})`);
            if (last)
                return true;
            else if (localStack.pos > start)
                stacks.push(localStack);
            else
                split.push(localStack);
        }
        return false;
    }
    // Advance a given stack forward as far as it will go. Returns the
    // (possibly updated) stack if it got stuck, or null if it moved
    // forward and was given to `pushStackDedup`.
    advanceFully(stack, newStacks) {
        let pos = stack.pos;
        for (;;) {
            if (!this.advanceStack(stack, null, null))
                return false;
            if (stack.pos > pos) {
                pushStackDedup(stack, newStacks);
                return true;
            }
        }
    }
    runRecovery(stacks, tokens, newStacks) {
        let finished = null, restarted = false;
        for (let i = 0; i < stacks.length; i++) {
            let stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
            let base = verbose ? this.stackID(stack) + " -> " : "";
            if (stack.deadEnd) {
                if (restarted)
                    continue;
                restarted = true;
                stack.restart();
                if (verbose)
                    console.log(base + this.stackID(stack) + " (restarted)");
                let done = this.advanceFully(stack, newStacks);
                if (done)
                    continue;
            }
            let force = stack.split(), forceBase = base;
            for (let j = 0; force.forceReduce() && j < 10 /* ForceReduceLimit */; j++) {
                if (verbose)
                    console.log(forceBase + this.stackID(force) + " (via force-reduce)");
                let done = this.advanceFully(force, newStacks);
                if (done)
                    break;
                if (verbose)
                    forceBase = this.stackID(force) + " -> ";
            }
            for (let insert of stack.recoverByInsert(token)) {
                if (verbose)
                    console.log(base + this.stackID(insert) + " (via recover-insert)");
                this.advanceFully(insert, newStacks);
            }
            if (this.stream.end > stack.pos) {
                if (tokenEnd == stack.pos) {
                    tokenEnd++;
                    token = 0 /* Err */;
                }
                stack.recoverByDelete(token, tokenEnd);
                if (verbose)
                    console.log(base + this.stackID(stack) + ` (via recover-delete ${this.parser.getName(token)})`);
                pushStackDedup(stack, newStacks);
            }
            else if (!finished || finished.score < stack.score) {
                finished = stack;
            }
        }
        return finished;
    }
    // Convert the stack's buffer to a syntax tree.
    stackToTree(stack) {
        stack.close();
        return _lezer_common__WEBPACK_IMPORTED_MODULE_0__.Tree.build({ buffer: StackBufferCursor.create(stack),
            nodeSet: this.parser.nodeSet,
            topID: this.topTerm,
            maxBufferLength: this.parser.bufferLength,
            reused: this.reused,
            start: this.ranges[0].from,
            length: stack.pos - this.ranges[0].from,
            minRepeatType: this.parser.minRepeatTerm });
    }
    stackID(stack) {
        let id = (stackIDs || (stackIDs = new WeakMap)).get(stack);
        if (!id)
            stackIDs.set(stack, id = String.fromCodePoint(this.nextStackID++));
        return id + stack;
    }
}
function pushStackDedup(stack, newStacks) {
    for (let i = 0; i < newStacks.length; i++) {
        let other = newStacks[i];
        if (other.pos == stack.pos && other.sameState(stack)) {
            if (newStacks[i].score < stack.score)
                newStacks[i] = stack;
            return;
        }
    }
    newStacks.push(stack);
}
class Dialect {
    constructor(source, flags, disabled) {
        this.source = source;
        this.flags = flags;
        this.disabled = disabled;
    }
    allows(term) { return !this.disabled || this.disabled[term] == 0; }
}
const id = x => x;
/// Context trackers are used to track stateful context (such as
/// indentation in the Python grammar, or parent elements in the XML
/// grammar) needed by external tokenizers. You declare them in a
/// grammar file as `@context exportName from "module"`.
///
/// Context values should be immutable, and can be updated (replaced)
/// on shift or reduce actions.
///
/// The export used in a `@context` declaration should be of this
/// type.
class ContextTracker {
    /// Define a context tracker.
    constructor(spec) {
        this.start = spec.start;
        this.shift = spec.shift || id;
        this.reduce = spec.reduce || id;
        this.reuse = spec.reuse || id;
        this.hash = spec.hash || (() => 0);
        this.strict = spec.strict !== false;
    }
}
/// A parser holds the parse tables for a given grammar, as generated
/// by `lezer-generator`.
class LRParser extends _lezer_common__WEBPACK_IMPORTED_MODULE_0__.Parser {
    /// @internal
    constructor(spec) {
        super();
        /// @internal
        this.wrappers = [];
        if (spec.version != 13 /* Version */)
            throw new RangeError(`Parser version (${spec.version}) doesn't match runtime version (${13 /* Version */})`);
        let nodeNames = spec.nodeNames.split(" ");
        this.minRepeatTerm = nodeNames.length;
        for (let i = 0; i < spec.repeatNodeCount; i++)
            nodeNames.push("");
        let topTerms = Object.keys(spec.topRules).map(r => spec.topRules[r][1]);
        let nodeProps = [];
        for (let i = 0; i < nodeNames.length; i++)
            nodeProps.push([]);
        function setProp(nodeID, prop, value) {
            nodeProps[nodeID].push([prop, prop.deserialize(String(value))]);
        }
        if (spec.nodeProps)
            for (let propSpec of spec.nodeProps) {
                let prop = propSpec[0];
                for (let i = 1; i < propSpec.length;) {
                    let next = propSpec[i++];
                    if (next >= 0) {
                        setProp(next, prop, propSpec[i++]);
                    }
                    else {
                        let value = propSpec[i + -next];
                        for (let j = -next; j > 0; j--)
                            setProp(propSpec[i++], prop, value);
                        i++;
                    }
                }
            }
        this.nodeSet = new _lezer_common__WEBPACK_IMPORTED_MODULE_0__.NodeSet(nodeNames.map((name, i) => _lezer_common__WEBPACK_IMPORTED_MODULE_0__.NodeType.define({
            name: i >= this.minRepeatTerm ? undefined : name,
            id: i,
            props: nodeProps[i],
            top: topTerms.indexOf(i) > -1,
            error: i == 0,
            skipped: spec.skippedNodes && spec.skippedNodes.indexOf(i) > -1
        })));
        this.strict = false;
        this.bufferLength = _lezer_common__WEBPACK_IMPORTED_MODULE_0__.DefaultBufferLength;
        let tokenArray = decodeArray(spec.tokenData);
        this.context = spec.context;
        this.specialized = new Uint16Array(spec.specialized ? spec.specialized.length : 0);
        this.specializers = [];
        if (spec.specialized)
            for (let i = 0; i < spec.specialized.length; i++) {
                this.specialized[i] = spec.specialized[i].term;
                this.specializers[i] = spec.specialized[i].get;
            }
        this.states = decodeArray(spec.states, Uint32Array);
        this.data = decodeArray(spec.stateData);
        this.goto = decodeArray(spec.goto);
        this.maxTerm = spec.maxTerm;
        this.tokenizers = spec.tokenizers.map(value => typeof value == "number" ? new TokenGroup(tokenArray, value) : value);
        this.topRules = spec.topRules;
        this.dialects = spec.dialects || {};
        this.dynamicPrecedences = spec.dynamicPrecedences || null;
        this.tokenPrecTable = spec.tokenPrec;
        this.termNames = spec.termNames || null;
        this.maxNode = this.nodeSet.types.length - 1;
        this.dialect = this.parseDialect();
        this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    createParse(input, fragments, ranges) {
        let parse = new Parse(this, input, fragments, ranges);
        for (let w of this.wrappers)
            parse = w(parse, input, fragments, ranges);
        return parse;
    }
    /// Get a goto table entry @internal
    getGoto(state, term, loose = false) {
        let table = this.goto;
        if (term >= table[0])
            return -1;
        for (let pos = table[term + 1];;) {
            let groupTag = table[pos++], last = groupTag & 1;
            let target = table[pos++];
            if (last && loose)
                return target;
            for (let end = pos + (groupTag >> 1); pos < end; pos++)
                if (table[pos] == state)
                    return target;
            if (last)
                return -1;
        }
    }
    /// Check if this state has an action for a given terminal @internal
    hasAction(state, terminal) {
        let data = this.data;
        for (let set = 0; set < 2; set++) {
            for (let i = this.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */), next;; i += 3) {
                if ((next = data[i]) == 65535 /* End */) {
                    if (data[i + 1] == 1 /* Next */)
                        next = data[i = pair(data, i + 2)];
                    else if (data[i + 1] == 2 /* Other */)
                        return pair(data, i + 2);
                    else
                        break;
                }
                if (next == terminal || next == 0 /* Err */)
                    return pair(data, i + 1);
            }
        }
        return 0;
    }
    /// @internal
    stateSlot(state, slot) {
        return this.states[(state * 6 /* Size */) + slot];
    }
    /// @internal
    stateFlag(state, flag) {
        return (this.stateSlot(state, 0 /* Flags */) & flag) > 0;
    }
    /// @internal
    validAction(state, action) {
        if (action == this.stateSlot(state, 4 /* DefaultReduce */))
            return true;
        for (let i = this.stateSlot(state, 1 /* Actions */);; i += 3) {
            if (this.data[i] == 65535 /* End */) {
                if (this.data[i + 1] == 1 /* Next */)
                    i = pair(this.data, i + 2);
                else
                    return false;
            }
            if (action == pair(this.data, i + 1))
                return true;
        }
    }
    /// Get the states that can follow this one through shift actions or
    /// goto jumps. @internal
    nextStates(state) {
        let result = [];
        for (let i = this.stateSlot(state, 1 /* Actions */);; i += 3) {
            if (this.data[i] == 65535 /* End */) {
                if (this.data[i + 1] == 1 /* Next */)
                    i = pair(this.data, i + 2);
                else
                    break;
            }
            if ((this.data[i + 2] & (65536 /* ReduceFlag */ >> 16)) == 0) {
                let value = this.data[i + 1];
                if (!result.some((v, i) => (i & 1) && v == value))
                    result.push(this.data[i], value);
            }
        }
        return result;
    }
    /// @internal
    overrides(token, prev) {
        let iPrev = findOffset(this.data, this.tokenPrecTable, prev);
        return iPrev < 0 || findOffset(this.data, this.tokenPrecTable, token) < iPrev;
    }
    /// Configure the parser. Returns a new parser instance that has the
    /// given settings modified. Settings not provided in `config` are
    /// kept from the original parser.
    configure(config) {
        // Hideous reflection-based kludge to make it easy to create a
        // slightly modified copy of a parser.
        let copy = Object.assign(Object.create(LRParser.prototype), this);
        if (config.props)
            copy.nodeSet = this.nodeSet.extend(...config.props);
        if (config.top) {
            let info = this.topRules[config.top];
            if (!info)
                throw new RangeError(`Invalid top rule name ${config.top}`);
            copy.top = info;
        }
        if (config.tokenizers)
            copy.tokenizers = this.tokenizers.map(t => {
                let found = config.tokenizers.find(r => r.from == t);
                return found ? found.to : t;
            });
        if (config.contextTracker)
            copy.context = config.contextTracker;
        if (config.dialect)
            copy.dialect = this.parseDialect(config.dialect);
        if (config.strict != null)
            copy.strict = config.strict;
        if (config.wrap)
            copy.wrappers = copy.wrappers.concat(config.wrap);
        if (config.bufferLength != null)
            copy.bufferLength = config.bufferLength;
        return copy;
    }
    /// Returns the name associated with a given term. This will only
    /// work for all terms when the parser was generated with the
    /// `--names` option. By default, only the names of tagged terms are
    /// stored.
    getName(term) {
        return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.nodeSet.types[term].name || term);
    }
    /// The eof term id is always allocated directly after the node
    /// types. @internal
    get eofTerm() { return this.maxNode + 1; }
    /// The type of top node produced by the parser.
    get topNode() { return this.nodeSet.types[this.top[1]]; }
    /// @internal
    dynamicPrecedence(term) {
        let prec = this.dynamicPrecedences;
        return prec == null ? 0 : prec[term] || 0;
    }
    /// @internal
    parseDialect(dialect) {
        let values = Object.keys(this.dialects), flags = values.map(() => false);
        if (dialect)
            for (let part of dialect.split(" ")) {
                let id = values.indexOf(part);
                if (id >= 0)
                    flags[id] = true;
            }
        let disabled = null;
        for (let i = 0; i < values.length; i++)
            if (!flags[i]) {
                for (let j = this.dialects[values[i]], id; (id = this.data[j++]) != 65535 /* End */;)
                    (disabled || (disabled = new Uint8Array(this.maxTerm + 1)))[id] = 1;
            }
        return new Dialect(dialect, flags, disabled);
    }
    /// (used by the output of the parser generator) @internal
    static deserialize(spec) {
        return new LRParser(spec);
    }
}
function pair(data, off) { return data[off] | (data[off + 1] << 16); }
function findOffset(data, start, term) {
    for (let i = start, next; (next = data[i]) != 65535 /* End */; i++)
        if (next == term)
            return i - start;
    return -1;
}
function findFinished(stacks) {
    let best = null;
    for (let stack of stacks) {
        let stopped = stack.p.stoppedAt;
        if ((stack.pos == stack.p.stream.end || stopped != null && stack.pos > stopped) &&
            stack.p.parser.stateFlag(stack.state, 2 /* Accepting */) &&
            (!best || best.score < stack.score))
            best = stack;
    }
    return best;
}




/***/ })

}]);