(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["jaegerPlugin"],{

/***/ "./public/app/core/components/NodeGraphSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeGraphSettings": () => (/* binding */ NodeGraphSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;







function NodeGraphSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$nod;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      className: "page-heading",
      children: "Node Graph"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      className: styles.row,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "Enables the Node Graph visualization in the trace viewer.",
        label: "Enable Node Graph",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
          id: "enableNodeGraph",
          value: (_options$jsonData$nod = options.jsonData.nodeGraph) === null || _options$jsonData$nod === void 0 ? void 0 : _options$jsonData$nod.enabled,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'nodeGraph', Object.assign({}, options.jsonData.nodeGraph, {
            enabled: event.currentTarget.checked
          }))
        })
      })
    })]
  });
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: container;
    width: 100%;
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: row;
    align-items: baseline;
  `
});

/***/ }),

/***/ "./public/app/core/components/TraceToLogs/KeyValueInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Icon2, _Icon3;






const EQ_WIDTH = 3; // = 24px in inline label

const KeyValueInput = ({
  values,
  onChange,
  id,
  keyPlaceholder = 'Key',
  valuePlaceholder = 'Value (optional)'
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.wrapper,
    children: values.length ? values.map((value, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.pair,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentInput, {
        id: `${id}-key-${idx}`,
        placeholder: keyPlaceholder,
        value: value.key,
        onChange: e => {
          onChange(values.map((v, i) => {
            if (i === idx) {
              v.key = String(e);
            }

            return v;
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
        "aria-label": "equals",
        className: styles.operator,
        width: EQ_WIDTH,
        children: "="
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentInput, {
        id: `${id}-value-${idx}`,
        placeholder: valuePlaceholder,
        value: value.value,
        onChange: e => {
          onChange(values.map((v, i) => {
            if (i === idx) {
              v.value = String(e);
            }

            return v;
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: () => onChange([...values.slice(0, idx), ...values.slice(idx + 1)]),
        className: "gf-form-label query-part",
        "aria-label": "Remove tag",
        type: "button",
        children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "times"
        }))
      }), idx === values.length - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: () => onChange([...values, {
          key: '',
          value: ''
        }]),
        className: "gf-form-label query-part",
        "aria-label": "Add tag",
        type: "button",
        children: _Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "plus"
        }))
      }) : null]
    }, idx)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      onClick: () => onChange([...values, {
        key: '',
        value: ''
      }]),
      className: "gf-form-label query-part",
      "aria-label": "Add tag",
      type: "button",
      children: _Icon3 || (_Icon3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "plus"
      }))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyValueInput);

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs} 0;
  `,
  pair: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: start;
    align-items: center;
  `,
  operator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.palette.orange};
  `
});

/***/ }),

/***/ "./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceToLogsSettings": () => (/* binding */ TraceToLogsSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _KeyValueInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TraceToLogs/KeyValueInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;









function TraceToLogsSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$tra, _options$jsonData$tra3, _ref, _options$jsonData$tra4, _options$jsonData$tra5, _options$jsonData$tra6, _options$jsonData$tra7, _options$jsonData$tra8, _options$jsonData$tra9, _options$jsonData$tra10, _options$jsonData$tra11, _options$jsonData$tra12, _options$jsonData$tra13, _options$jsonData$tra14;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
      className: "page-heading",
      children: "Trace to logs"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.infoText,
      children: "Trace to logs lets you navigate from a trace span to the selected data source's logs."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "The data source the trace is going to navigate to",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.DataSourcePicker, {
          inputId: "trace-to-logs-data-source-picker",
          filter: ds => {
            // Trace to logs only supports loki and splunk at the moment
            return ds.type === 'loki' || ds.type === 'grafana-splunk-datasource';
          },
          current: (_options$jsonData$tra = options.jsonData.tracesToLogs) === null || _options$jsonData$tra === void 0 ? void 0 : _options$jsonData$tra.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => {
            var _options$jsonData$tra2;

            return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
              onOptionsChange,
              options
            }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
              datasourceUid: ds.uid,
              tags: (_options$jsonData$tra2 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra2 === void 0 ? void 0 : _options$jsonData$tra2.tags
            }));
          }
        })
      })
    }), (_options$jsonData$tra3 = options.jsonData.tracesToLogs) !== null && _options$jsonData$tra3 !== void 0 && _options$jsonData$tra3.mapTagNamesEnabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_KeyValueInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          keyPlaceholder: "Tag",
          values: (_ref = (_options$jsonData$tra4 = (_options$jsonData$tra5 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra5 === void 0 ? void 0 : _options$jsonData$tra5.mappedTags) !== null && _options$jsonData$tra4 !== void 0 ? _options$jsonData$tra4 : (_options$jsonData$tra6 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra6 === void 0 ? void 0 : (_options$jsonData$tra7 = _options$jsonData$tra6.tags) === null || _options$jsonData$tra7 === void 0 ? void 0 : _options$jsonData$tra7.map(tag => ({
            key: tag
          }))) !== null && _ref !== void 0 ? _ref : [],
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            mappedTags: v
          }))
        })
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TagsInput, {
          tags: (_options$jsonData$tra8 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra8 === void 0 ? void 0 : _options$jsonData$tra8.tags,
          width: 40,
          onChange: tags => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            tags: tags
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Map tag names",
        labelWidth: 26,
        grow: true,
        tooltip: "Map trace tag names to log label names. Ex: k8s.pod.name -> pod",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch, {
          id: "mapTagNames",
          value: (_options$jsonData$tra9 = (_options$jsonData$tra10 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra10 === void 0 ? void 0 : _options$jsonData$tra10.mapTagNamesEnabled) !== null && _options$jsonData$tra9 !== void 0 ? _options$jsonData$tra9 : false,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            mapTagNamesEnabled: event.currentTarget.checked
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Span start time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the start time of the span. Default 0 (Time units can be used here, for example: 5s, 1m, 3h)",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "text",
          placeholder: "1h",
          width: 40,
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            spanStartTimeShift: v.currentTarget.value
          })),
          value: ((_options$jsonData$tra11 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra11 === void 0 ? void 0 : _options$jsonData$tra11.spanStartTimeShift) || ''
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Span end time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the end time of the span. Default 0 Time units can be used here, for example: 5s, 1m, 3h",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "text",
          placeholder: "1h",
          width: 40,
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            spanEndTimeShift: v.currentTarget.value
          })),
          value: ((_options$jsonData$tra12 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra12 === void 0 ? void 0 : _options$jsonData$tra12.spanEndTimeShift) || ''
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Filter by Trace ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Trace ID. Appends '|=<trace id>' to the query.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch, {
          id: "filterByTraceID",
          value: (_options$jsonData$tra13 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra13 === void 0 ? void 0 : _options$jsonData$tra13.filterByTraceID,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            filterByTraceID: event.currentTarget.checked
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Filter by Span ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Span ID. Appends '|=<span id>' to the query.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch, {
          id: "filterBySpanID",
          value: (_options$jsonData$tra14 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra14 === void 0 ? void 0 : _options$jsonData$tra14.filterBySpanID,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            filterBySpanID: event.currentTarget.checked
          }))
        })
      })
    })]
  });
}

const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `
});

/***/ }),

/***/ "./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceToMetricsSettings": () => (/* binding */ TraceToMetricsSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _TraceToLogs_KeyValueInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TraceToLogs/KeyValueInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;









function TraceToMetricsSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$tra, _options$jsonData$tra2, _options$jsonData$tra3, _options$jsonData$tra4, _options$jsonData$tra5, _options$jsonData$tra6;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
      className: "page-heading",
      children: "Trace to metrics"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.infoText,
      children: "Trace to metrics lets you navigate from a trace span to the selected data source."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "The data source the trace is going to navigate to",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.DataSourcePicker, {
          inputId: "trace-to-metrics-data-source-picker",
          pluginId: "prometheus",
          current: (_options$jsonData$tra = options.jsonData.tracesToMetrics) === null || _options$jsonData$tra === void 0 ? void 0 : _options$jsonData$tra.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
            datasourceUid: ds.uid
          }))
        })
      }), (_options$jsonData$tra2 = options.jsonData.tracesToMetrics) !== null && _options$jsonData$tra2 !== void 0 && _options$jsonData$tra2.datasourceUid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "button",
        variant: "secondary",
        size: "sm",
        fill: "text",
        onClick: () => {
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
            datasourceUid: undefined
          }));
        },
        children: "Clear"
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "Tags that will be used in the metrics query.",
        label: "Tags",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_TraceToLogs_KeyValueInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          keyPlaceholder: "Tag",
          values: (_options$jsonData$tra3 = (_options$jsonData$tra4 = options.jsonData.tracesToMetrics) === null || _options$jsonData$tra4 === void 0 ? void 0 : _options$jsonData$tra4.tags) !== null && _options$jsonData$tra3 !== void 0 ? _options$jsonData$tra3 : [],
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
            tags: v
          }))
        })
      })
    }), (_options$jsonData$tra5 = options.jsonData.tracesToMetrics) === null || _options$jsonData$tra5 === void 0 ? void 0 : (_options$jsonData$tra6 = _options$jsonData$tra5.queries) === null || _options$jsonData$tra6 === void 0 ? void 0 : _options$jsonData$tra6.map((query, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.queryRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Link Label",
        labelWidth: 10,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          label: "Link Label",
          type: "text",
          allowFullScreen: true,
          value: query.name,
          onChange: e => {
            var _options$jsonData$tra7, _options$jsonData$tra8;

            let newQueries = (_options$jsonData$tra7 = (_options$jsonData$tra8 = options.jsonData.tracesToMetrics) === null || _options$jsonData$tra8 === void 0 ? void 0 : _options$jsonData$tra8.queries.slice()) !== null && _options$jsonData$tra7 !== void 0 ? _options$jsonData$tra7 : [];
            newQueries[i].name = e.currentTarget.value;
            (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
              onOptionsChange,
              options
            }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
              queries: newQueries
            }));
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Query",
        labelWidth: 10,
        tooltip: "The Prometheus query that will run when navigating from a trace to metrics. Interpolate tags using the `$__tags` keyword.",
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          label: "Query",
          type: "text",
          allowFullScreen: true,
          value: query.query,
          onChange: e => {
            var _options$jsonData$tra9, _options$jsonData$tra10;

            let newQueries = (_options$jsonData$tra9 = (_options$jsonData$tra10 = options.jsonData.tracesToMetrics) === null || _options$jsonData$tra10 === void 0 ? void 0 : _options$jsonData$tra10.queries.slice()) !== null && _options$jsonData$tra9 !== void 0 ? _options$jsonData$tra9 : [];
            newQueries[i].query = e.currentTarget.value;
            (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
              onOptionsChange,
              options
            }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
              queries: newQueries
            }));
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "destructive",
        title: "Remove query",
        icon: "times",
        type: "button",
        onClick: () => {
          var _options$jsonData$tra11;

          let newQueries = (_options$jsonData$tra11 = options.jsonData.tracesToMetrics) === null || _options$jsonData$tra11 === void 0 ? void 0 : _options$jsonData$tra11.queries.slice();
          newQueries === null || newQueries === void 0 ? void 0 : newQueries.splice(i, 1);
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
            queries: newQueries
          }));
        }
      })]
    }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
      variant: "secondary",
      title: "Add query",
      icon: "plus",
      type: "button",
      onClick: () => {
        var _options$jsonData$tra12, _options$jsonData$tra13;

        (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
          onOptionsChange,
          options
        }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
          queries: [...((_options$jsonData$tra12 = (_options$jsonData$tra13 = options.jsonData.tracesToMetrics) === null || _options$jsonData$tra13 === void 0 ? void 0 : _options$jsonData$tra13.queries) !== null && _options$jsonData$tra12 !== void 0 ? _options$jsonData$tra12 : []), {
            query: ''
          }]
        }));
      },
      children: "Add query"
    })]
  });
}

const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: row;
    align-items: baseline;
  `,
  queryRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
  `
});

/***/ }),

/***/ "./public/app/core/utils/tracing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNonOverlappingDuration": () => (/* binding */ getNonOverlappingDuration),
/* harmony export */   "getStats": () => (/* binding */ getStats),
/* harmony export */   "makeFrames": () => (/* binding */ makeFrames),
/* harmony export */   "makeSpanMap": () => (/* binding */ makeSpanMap)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/**
 * Get non overlapping duration of the ranges as they can overlap or have gaps.
 */

function getNonOverlappingDuration(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  const mergedRanges = ranges.reduce((acc, range) => {
    if (!acc.length) {
      return [range];
    }

    const tail = acc.slice(-1)[0];
    const [prevStart, prevEnd] = tail;
    const [start, end] = range;

    if (end < prevEnd) {
      // In this case the range is completely inside the prev range so we can just ignore it.
      return acc;
    }

    if (start > prevEnd) {
      // There is no overlap so we can just add it to stack
      return [...acc, range];
    } // We know there is overlap and current range ends later than previous so we can just extend the range


    return [...acc.slice(0, -1), [prevStart, end]];
  }, []);
  return mergedRanges.reduce((acc, range) => {
    return acc + (range[1] - range[0]);
  }, 0);
}
/**
 * Returns a map of the spans with children array for easier processing. It will also contain empty spans in case
 * span is missing but other spans are it's children. This is more generic because it needs to allow iterating over
 * both arrays and dataframe views.
 */

function makeSpanMap(getSpan) {
  const spanMap = {};
  let span;

  for (let index = 0; span = getSpan(index), !!span; index++) {
    if (!spanMap[span.id]) {
      spanMap[span.id] = {
        span: span.span,
        children: []
      };
    } else {
      spanMap[span.id].span = span.span;
    }

    for (const parentId of span.parentIds) {
      if (parentId) {
        if (!spanMap[parentId]) {
          spanMap[parentId] = {
            span: undefined,
            children: [span.id]
          };
        } else {
          spanMap[parentId].children.push(span.id);
        }
      }
    }
  }

  return spanMap;
}
function getStats(duration, traceDuration, selfDuration) {
  return {
    main: `${toFixedNoTrailingZeros(duration)}ms (${toFixedNoTrailingZeros(duration / traceDuration * 100)}%)`,
    secondary: `${toFixedNoTrailingZeros(selfDuration)}ms (${toFixedNoTrailingZeros(selfDuration / duration * 100)}%)`
  };
}

function toFixedNoTrailingZeros(n) {
  return parseFloat(n.toFixed(2));
}
/**
 * Create default frames used when returning data for node graph.
 */


function makeFrames() {
  const nodesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Total time (% of trace)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Self time (% of total)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          mode: 'continuous-GrYlRd'
        },
        displayName: 'Self time / Trace duration'
      }
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  return [nodesFrame, edgesFrame];
}

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/components/AdvancedOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedOptions": () => (/* binding */ AdvancedOptions)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const durationPlaceholder = 'e.g. 1.2s, 100ms, 500us';
function AdvancedOptions({
  query,
  onChange
}) {
  const [showAdvancedOptions, setShowAdvancedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: styles.advancedOptionsContainer,
        onClick: () => setShowAdvancedOptions(!showAdvancedOptions),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
          as: "div",
          children: ["Advanced options", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            className: showAdvancedOptions ? styles.angleUp : styles.angleDown,
            name: "angle-down"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
      in: showAdvancedOptions,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 300,
      classNames: styles,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            label: "Min Duration",
            labelWidth: 21,
            grow: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              id: "minDuration",
              name: "minDuration",
              value: query.minDuration || '',
              placeholder: durationPlaceholder,
              onChange: v => onChange(Object.assign({}, query, {
                minDuration: v.currentTarget.value
              }))
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            label: "Max Duration",
            labelWidth: 21,
            grow: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              id: "maxDuration",
              name: "maxDuration",
              value: query.maxDuration || '',
              placeholder: durationPlaceholder,
              onChange: v => onChange(Object.assign({}, query, {
                maxDuration: v.currentTarget.value
              }))
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            label: "Limit",
            labelWidth: 21,
            grow: true,
            tooltip: "Maximum numbers of returned results",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              id: "limit",
              name: "limit",
              value: query.limit || '',
              type: "number",
              onChange: v => onChange(Object.assign({}, query, {
                limit: v.currentTarget.value ? parseInt(v.currentTarget.value, 10) : undefined
              }))
            })
          })
        })]
      })
    })]
  });
}

function getStyles(theme) {
  return {
    advancedOptionsContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0 ${theme.spacing.xs} ${theme.spacing.xs} 0;
      width: 100%;
      cursor: pointer;
    `,
    enter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: enter;
      height: 0;
      opacity: 0;
    `,
    enterActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: enterActive;
      height: 108px;
      opacity: 1;
      transition: height 300ms ease, opacity 300ms ease;
    `,
    exit: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: exit;
      height: 108px;
      opacity: 1;
    `,
    exitActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: exitActive;
      height: 0;
      opacity: 0;
      transition: height 300ms ease, opacity 300ms ease;
    `,
    angleUp: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      transform: rotate(-180deg);
      transition: transform 300ms;
    `,
    angleDown: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      transform: rotate(0deg);
      transition: transform 300ms;
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/components/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_NodeGraphSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/NodeGraphSettings.tsx");
/* harmony import */ var app_core_components_TraceToLogs_TraceToLogsSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx");
/* harmony import */ var app_core_components_TraceToMetrics_TraceToMetricsSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const ConfigEditor = ({
  options,
  onOptionsChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DataSourceHttpSettings, {
      defaultUrl: "http://localhost:16686",
      dataSourceConfig: options,
      showAccessOptions: false,
      onChange: onOptionsChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_TraceToLogs_TraceToLogsSettings__WEBPACK_IMPORTED_MODULE_4__.TraceToLogsSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.traceToMetrics ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_TraceToMetrics_TraceToMetricsSettings__WEBPACK_IMPORTED_MODULE_5__.TraceToMetricsSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_NodeGraphSettings__WEBPACK_IMPORTED_MODULE_3__.NodeGraphSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/SearchForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function QueryEditor({
  datasource,
  query,
  onChange,
  onRunQuery
}) {
  var _SearchForm;

  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();

  const onChangeQuery = value => {
    const nextQuery = Object.assign({}, query, {
      query: value
    });
    onChange(nextQuery);
  };

  const renderEditorBody = () => {
    switch (query.queryType) {
      case 'search':
        return _SearchForm || (_SearchForm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SearchForm__WEBPACK_IMPORTED_MODULE_3__.SearchForm, {
          datasource: datasource,
          query: query,
          onChange: onChange
        }));

      case 'upload':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
            padding: theme.spacing(2)
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FileDropzone, {
            options: {
              multiple: false
            },
            onLoad: result => {
              datasource.uploadedJson = result;
              onRunQuery();
            }
          })
        });

      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            label: "Trace ID",
            labelWidth: 14,
            grow: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.QueryField, {
              query: query.query,
              onChange: onChangeQuery,
              onRunQuery: onRunQuery,
              onBlur: () => {},
              placeholder: 'Enter a Trace ID (run with Shift+Enter)',
              portalOrigin: "jaeger"
            })
          })
        });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        width: '100%'
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
          label: "Query type",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
            options: [{
              value: 'search',
              label: 'Search'
            }, {
              value: undefined,
              label: 'TraceID'
            }, {
              value: 'upload',
              label: 'JSON file'
            }],
            value: query.queryType,
            onChange: v => onChange(Object.assign({}, query, {
              queryType: v
            })),
            size: "md"
          })
        })
      }), renderEditorBody()]
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/components/SearchForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_OPERATIONS_KEY": () => (/* binding */ ALL_OPERATIONS_KEY),
/* harmony export */   "SearchForm": () => (/* binding */ SearchForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/jaeger/util.ts");
/* harmony import */ var _AdvancedOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/AdvancedOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const ALL_OPERATIONS_KEY = 'All';
const allOperationsOption = {
  label: ALL_OPERATIONS_KEY,
  value: undefined
};
function SearchForm({
  datasource,
  query,
  onChange
}) {
  const [serviceOptions, setServiceOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [operationOptions, setOperationOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    services: false,
    operations: false
  });
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (url, loaderOfType, query = '') => {
    setIsLoading(prevValue => Object.assign({}, prevValue, {
      [loaderOfType]: true
    }));

    try {
      const values = await datasource.metadataRequest(url);

      if (!values) {
        return [{
          label: `No ${loaderOfType} found`,
          value: `No ${loaderOfType} found`
        }];
      }

      const options = values.sort().map(option => ({
        label: option,
        value: option
      }));
      const filteredOptions = options.filter(item => item.value ? (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.fuzzyMatch)(item.value, query).found : false);
      return filteredOptions;
    } catch (error) {
      if (error instanceof Error) {
        (0,app_store_store__WEBPACK_IMPORTED_MODULE_7__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_5__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__.createErrorNotification)('Error', error)));
      }

      return [];
    } finally {
      setIsLoading(prevValue => Object.assign({}, prevValue, {
        [loaderOfType]: false
      }));
    }
  }, [datasource]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getServices = async () => {
      const services = await loadOptions('/api/services', 'services');

      if (query.service && (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().containsTemplate(query.service)) {
        services.push((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(query.service));
      }

      setServiceOptions(services);
    };

    getServices();
  }, [datasource, loadOptions, query.service]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getOperations = async () => {
      const operations = await loadOptions(`/api/services/${encodeURIComponent((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().replace(query.service))}/operations`, 'operations');

      if (query.operation && (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().containsTemplate(query.operation)) {
        operations.push((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(query.operation));
      }

      setOperationOptions([allOperationsOption, ...operations]);
    };

    if (query.service) {
      getOperations();
    }
  }, [datasource, query.service, loadOptions, query.operation]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      maxWidth: '500px'
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Service",
        labelWidth: 14,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
          inputId: "service",
          options: serviceOptions,
          onOpenMenu: () => loadOptions('/api/services', 'services'),
          isLoading: isLoading.services,
          value: (serviceOptions === null || serviceOptions === void 0 ? void 0 : serviceOptions.find(v => (v === null || v === void 0 ? void 0 : v.value) === query.service)) || undefined,
          onChange: v => onChange(Object.assign({}, query, {
            service: v === null || v === void 0 ? void 0 : v.value,
            operation: query.service !== (v === null || v === void 0 ? void 0 : v.value) ? undefined : query.operation
          })),
          menuPlacement: "bottom",
          isClearable: true,
          "aria-label": 'select-service-name',
          allowCustomValue: true
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Operation",
        labelWidth: 14,
        grow: true,
        disabled: !query.service,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
          inputId: "operation",
          options: operationOptions,
          onOpenMenu: () => loadOptions(`/api/services/${encodeURIComponent((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().replace(query.service))}/operations`, 'operations'),
          isLoading: isLoading.operations,
          value: (operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.find(v => v.value === query.operation)) || null,
          onChange: v => onChange(Object.assign({}, query, {
            operation: (v === null || v === void 0 ? void 0 : v.value) || undefined
          })),
          menuPlacement: "bottom",
          isClearable: true,
          "aria-label": 'select-operation-name',
          allowCustomValue: true
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Tags",
        labelWidth: 14,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          id: "tags",
          value: (0,_util__WEBPACK_IMPORTED_MODULE_8__.transformToLogfmt)(query.tags),
          placeholder: "http.status_code=200 error=true",
          onChange: v => onChange(Object.assign({}, query, {
            tags: v.currentTarget.value
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AdvancedOptions__WEBPACK_IMPORTED_MODULE_9__.AdvancedOptions, {
      query: query,
      onChange: onChange
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchForm);

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JaegerDatasource": () => (/* binding */ JaegerDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_utils_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/fetch.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/SearchForm.tsx");
/* harmony import */ var _graphTransform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/jaeger/graphTransform.ts");
/* harmony import */ var _responseTransform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/jaeger/responseTransform.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/jaeger/util.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class JaegerDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourceApi {
  constructor(instanceSettings, timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__.getTimeSrv)(), templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)()) {
    super(instanceSettings);

    _defineProperty(this, "uploadedJson", null);

    _defineProperty(this, "nodeGraph", void 0);

    this.instanceSettings = instanceSettings;
    this.timeSrv = timeSrv;
    this.templateSrv = templateSrv;
    this.nodeGraph = instanceSettings.jsonData.nodeGraph;
  }

  async metadataRequest(url, params) {
    const res = await (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.lastValueFrom)(this._request(url, params, {
      hideFromInspector: true
    }));
    return res.data.data;
  }

  query(options) {
    // At this moment we expect only one target. In case we somehow change the UI to be able to show multiple
    // traces at one we need to change this.
    const target = options.targets[0];

    if (!target) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
        data: [emptyTraceDataFrame]
      });
    }

    if (target.queryType !== 'search' && target.query) {
      return this._request(`/api/traces/${encodeURIComponent(this.templateSrv.replace(target.query, options.scopedVars))}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
        var _response$data, _response$data$data, _this$nodeGraph;

        const traceData = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$data = _response$data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data[0];

        if (!traceData) {
          return {
            data: [emptyTraceDataFrame]
          };
        }

        let data = [(0,_responseTransform__WEBPACK_IMPORTED_MODULE_7__.createTraceFrame)(traceData)];

        if ((_this$nodeGraph = this.nodeGraph) !== null && _this$nodeGraph !== void 0 && _this$nodeGraph.enabled) {
          data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_6__.createGraphFrames)(traceData));
        }

        return {
          data
        };
      }));
    }

    if (target.queryType === 'upload') {
      if (!this.uploadedJson) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
          data: []
        });
      }

      try {
        var _this$nodeGraph2;

        const traceData = JSON.parse(this.uploadedJson).data[0];
        let data = [(0,_responseTransform__WEBPACK_IMPORTED_MODULE_7__.createTraceFrame)(traceData)];

        if ((_this$nodeGraph2 = this.nodeGraph) !== null && _this$nodeGraph2 !== void 0 && _this$nodeGraph2.enabled) {
          data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_6__.createGraphFrames)(traceData));
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
          data
        });
      } catch (error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
          error: {
            message: 'JSON is not valid Jaeger format'
          },
          data: []
        });
      }
    }

    let jaegerInterpolated = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(this.applyVariables(target, options.scopedVars), ['service', 'operation', 'tags', 'minDuration', 'maxDuration', 'limit']); // remove empty properties

    let jaegerQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pickBy)(jaegerInterpolated, lodash__WEBPACK_IMPORTED_MODULE_0__.identity);

    if (jaegerQuery.operation === _components_SearchForm__WEBPACK_IMPORTED_MODULE_5__.ALL_OPERATIONS_KEY) {
      jaegerQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(jaegerQuery, 'operation');
    }

    if (jaegerQuery.tags) {
      jaegerQuery = Object.assign({}, jaegerQuery, {
        tags: (0,_util__WEBPACK_IMPORTED_MODULE_8__.convertTagsLogfmt)(jaegerQuery.tags.toString())
      });
    } // TODO: this api is internal, used in jaeger ui. Officially they have gRPC api that should be used.


    return this._request(`/api/traces`, Object.assign({}, jaegerQuery, this.getTimeRange(), {
      lookback: 'custom'
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
      return {
        data: [(0,_responseTransform__WEBPACK_IMPORTED_MODULE_7__.createTableFrame)(response.data.data, this.instanceSettings)]
      };
    }));
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries || queries.length === 0) {
      return [];
    }

    return queries.map(query => {
      return Object.assign({}, query, {
        datasource: this.getRef()
      }, this.applyVariables(query, scopedVars));
    });
  }

  applyVariables(query, scopedVars) {
    var _query$service, _query$operation, _query$minDuration, _query$maxDuration;

    let expandedQuery = Object.assign({}, query);

    if (query.tags && this.templateSrv.containsTemplate(query.tags)) {
      expandedQuery = Object.assign({}, query, {
        tags: this.templateSrv.replace(query.tags, scopedVars)
      });
    }

    return Object.assign({}, expandedQuery, {
      service: this.templateSrv.replace((_query$service = query.service) !== null && _query$service !== void 0 ? _query$service : '', scopedVars),
      operation: this.templateSrv.replace((_query$operation = query.operation) !== null && _query$operation !== void 0 ? _query$operation : '', scopedVars),
      minDuration: this.templateSrv.replace((_query$minDuration = query.minDuration) !== null && _query$minDuration !== void 0 ? _query$minDuration : '', scopedVars),
      maxDuration: this.templateSrv.replace((_query$maxDuration = query.maxDuration) !== null && _query$maxDuration !== void 0 ? _query$maxDuration : '', scopedVars)
    });
  }

  async testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.lastValueFrom)(this._request('/api/services').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(res => {
      var _res$data;

      const values = (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) || [];
      const testResult = values.length > 0 ? {
        status: 'success',
        message: 'Data source connected and services found.'
      } : {
        status: 'error',
        message: 'Data source connected, but no services received. Verify that Jaeger is configured properly.'
      };
      return testResult;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => {
      let message = 'Jaeger: ';

      if (err.statusText) {
        message += err.statusText;
      } else {
        message += 'Cannot connect to Jaeger';
      }

      if (err.status) {
        message += `. ${err.status}`;
      }

      if (err.data && err.data.message) {
        message += `. ${err.data.message}`;
      } else if (err.data) {
        message += `. ${JSON.stringify(err.data)}`;
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
        status: 'error',
        message: message
      });
    })));
  }

  getTimeRange() {
    const range = this.timeSrv.timeRange();
    return {
      start: getTime(range.from, false),
      end: getTime(range.to, true)
    };
  }

  getQueryDisplayText(query) {
    return query.query || '';
  }

  _request(apiUrl, data, options) {
    const params = data ? (0,app_core_utils_fetch__WEBPACK_IMPORTED_MODULE_3__.serializeParams)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch(req);
  }

}

function getTime(date, roundUp) {
  if (typeof date === 'string') {
    date = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(date, roundUp);
  }

  return date.valueOf() * 1000;
}

const emptyTraceDataFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame({
  fields: [{
    name: 'trace',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.trace,
    values: []
  }],
  meta: {
    preferredVisualisationType: 'trace',
    custom: {
      traceFormat: 'jaeger'
    }
  }
});

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/graphTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGraphFrames": () => (/* binding */ createGraphFrames)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/tracing.ts");


function createGraphFrames(data) {
  const {
    nodes,
    edges
  } = convertTraceToGraph(data);
  const [nodesFrame, edgesFrame] = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeFrames)();

  for (const node of nodes) {
    nodesFrame.add(node);
  }

  for (const edge of edges) {
    edgesFrame.add(edge);
  }

  return [nodesFrame, edgesFrame];
}

function convertTraceToGraph(data) {
  const nodes = [];
  const edges = [];
  const traceDuration = findTraceDuration(data.spans);
  const spanMap = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeSpanMap)(index => {
    var _span$references;

    if (index >= data.spans.length) {
      return undefined;
    }

    const span = data.spans[index];
    return {
      span,
      id: span.spanID,
      parentIds: ((_span$references = span.references) === null || _span$references === void 0 ? void 0 : _span$references.filter(r => r.refType === 'CHILD_OF').map(r => r.spanID)) || []
    };
  });

  for (const span of data.spans) {
    var _process$serviceName, _span$references2, _span$references2$fin;

    const process = data.processes[span.processID];
    const ranges = spanMap[span.spanID].children.map(c => {
      const span = spanMap[c].span;
      return [span.startTime, span.startTime + span.duration];
    });
    const childrenDuration = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getNonOverlappingDuration)(ranges);
    const selfDuration = span.duration - childrenDuration;
    const stats = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getStats)(span.duration / 1000, traceDuration / 1000, selfDuration / 1000);
    nodes.push({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: span.spanID,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: (_process$serviceName = process === null || process === void 0 ? void 0 : process.serviceName) !== null && _process$serviceName !== void 0 ? _process$serviceName : '',
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: span.operationName,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    });
    const parentSpanID = (_span$references2 = span.references) === null || _span$references2 === void 0 ? void 0 : (_span$references2$fin = _span$references2.find(r => r.refType === 'CHILD_OF')) === null || _span$references2$fin === void 0 ? void 0 : _span$references2$fin.spanID; // Sometimes some span can be missing. Don't add edges for those.

    if (parentSpanID && spanMap[parentSpanID].span) {
      edges.push({
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: parentSpanID + '--' + span.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: span.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: parentSpanID
      });
    }
  }

  return {
    nodes,
    edges
  };
}
/**
 * Get the duration of the whole trace as it isn't a part of the response data.
 * Note: Seems like this should be the same as just longest span, but this is probably safer.
 */


function findTraceDuration(spans) {
  let traceEndTime = 0;
  let traceStartTime = Infinity;

  for (const span of spans) {
    if (span.startTime < traceStartTime) {
      traceStartTime = span.startTime;
    }

    if (span.startTime + span.duration > traceEndTime) {
      traceEndTime = span.startTime + span.duration;
    }
  }

  return traceEndTime - traceStartTime;
}

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/ConfigEditor.tsx");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/QueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/jaeger/datasource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_3__.JaegerDatasource).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_2__.QueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/responseTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTableFrame": () => (/* binding */ createTableFrame),
/* harmony export */   "createTraceFrame": () => (/* binding */ createTraceFrame),
/* harmony export */   "transformToJaeger": () => (/* binding */ transformToJaeger)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _jaegertracing_jaeger_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/jaeger-ui-components/src/index.ts");


function createTraceFrame(data) {
  const spans = data.spans.map(s => toSpanRow(s, data.processes));
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'warnings',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'stackTraces',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'jaeger'
      }
    }
  });

  for (const span of spans) {
    frame.add(span);
  }

  return frame;
}

function toSpanRow(span, processes) {
  var _span$references, _span$references$find, _span$warnings;

  return {
    spanID: span.spanID,
    traceID: span.traceID,
    parentSpanID: (_span$references = span.references) === null || _span$references === void 0 ? void 0 : (_span$references$find = _span$references.find(r => r.refType === 'CHILD_OF')) === null || _span$references$find === void 0 ? void 0 : _span$references$find.spanID,
    operationName: span.operationName,
    // from micro to millis
    startTime: span.startTime / 1000,
    duration: span.duration / 1000,
    logs: span.logs.map(l => Object.assign({}, l, {
      timestamp: l.timestamp / 1000
    })),
    tags: span.tags,
    warnings: (_span$warnings = span.warnings) !== null && _span$warnings !== void 0 ? _span$warnings : undefined,
    stackTraces: span.stackTraces,
    serviceName: processes[span.processID].serviceName,
    serviceTags: processes[span.processID].tags
  };
}

function createTableFrame(data, instanceSettings) {
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        unit: 'string',
        displayNameFromDS: 'Trace ID',
        links: [{
          title: 'Trace: ${__value.raw}',
          url: '',
          internal: {
            datasourceUid: instanceSettings.uid,
            datasourceName: instanceSettings.name,
            query: {
              query: '${__value.raw}'
            }
          }
        }]
      }
    }, {
      name: 'traceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace name'
      }
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time,
      config: {
        displayNameFromDS: 'Start time'
      }
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayNameFromDS: 'Duration',
        unit: 'µs'
      }
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  }); // Show the most recent traces

  const traceData = data.map(transformToTraceData).sort((a, b) => (b === null || b === void 0 ? void 0 : b.startTime) - (a === null || a === void 0 ? void 0 : a.startTime));

  for (const trace of traceData) {
    frame.add(trace);
  }

  return frame;
}

function transformToTraceData(data) {
  const traceData = (0,_jaegertracing_jaeger_ui_components__WEBPACK_IMPORTED_MODULE_1__.transformTraceData)(data);

  if (!traceData) {
    return;
  }

  return {
    traceID: traceData.traceID,
    startTime: traceData.startTime / 1000,
    duration: traceData.duration,
    traceName: traceData.traceName
  };
}

function transformToJaeger(data) {
  let traceResponse = {
    traceID: '',
    spans: [],
    processes: {},
    warnings: null
  };
  let processes = [];

  for (let i = 0; i < data.length; i++) {
    const span = data.get(i); // Set traceID

    if (!traceResponse.traceID) {
      traceResponse.traceID = span.traceID;
    } // Create process if doesn't exist


    if (!processes.find(p => p === span.serviceName)) {
      processes.push(span.serviceName);
      traceResponse.processes[`p${processes.length}`] = {
        serviceName: span.serviceName,
        tags: span.serviceTags
      };
    } // Create span


    traceResponse.spans.push({
      traceID: span.traceID,
      spanID: span.spanID,
      duration: span.duration * 1000,
      references: span.parentSpanID ? [{
        refType: 'CHILD_OF',
        spanID: span.parentSpanID,
        traceID: span.traceID
      }] : [],
      flags: 0,
      logs: span.logs.map(l => Object.assign({}, l, {
        timestamp: l.timestamp * 1000
      })),
      operationName: span.operationName,
      processID: Object.keys(traceResponse.processes).find(key => traceResponse.processes[key].serviceName === span.serviceName) || '',
      startTime: span.startTime * 1000,
      tags: span.tags,
      warnings: span.warnings ? span.warnings : null
    });
  }

  return {
    data: [traceResponse],
    total: 0,
    limit: 0,
    offset: 0,
    errors: null
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTagsLogfmt": () => (/* binding */ convertTagsLogfmt),
/* harmony export */   "transformToLogfmt": () => (/* binding */ transformToLogfmt)
/* harmony export */ });
/* harmony import */ var logfmt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js");
/* harmony import */ var logfmt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(logfmt__WEBPACK_IMPORTED_MODULE_0__);

function convertTagsLogfmt(tags) {
  if (!tags) {
    return '';
  }

  const data = logfmt__WEBPACK_IMPORTED_MODULE_0___default().parse(tags);
  Object.keys(data).forEach(key => {
    const value = data[key];

    if (typeof value !== 'string') {
      data[key] = String(value);
    }
  });
  return JSON.stringify(data);
}
function transformToLogfmt(tags) {
  if (!tags) {
    return '';
  }

  try {
    return logfmt__WEBPACK_IMPORTED_MODULE_0___default().stringify(JSON.parse(tags));
  } catch {
    return tags;
  }
}

/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/body_parser.js":
/***/ ((module, exports) => {


/*
Module dependencies.
*/

/*
JSON:

Parse logplex request bodies, providing the
parsed object as `req.body`.

Options: none

@param content_type {String} use when Content-Type matches this string
@param parser {Function} parsing function takes String body and returns new body
@return {Function}
@api public
*/

exports = module.exports = function(options) {
  var limit;
  if (options == null) options = {};

  return function(req, res, next) {
    if (req._body) return next();
    var is_mime = req.header('content-type') === options.contentType;
    if (!is_mime) return next();
    req._body = true;
    req.body = req.body || {};
    var buf;
    buf = "";
    req.setEncoding("utf8");
    req.on("data", function(chunk) {
      return buf += chunk;
    });
    req.on("end", function() {
      try {
        var lines = []
        buf.trim().split("\n").forEach(function(line){
          lines.push(options.parser(line))
        })
        req.body = lines;
      } catch (err) {
        err.body = buf;
        err.status = 400;
        return next(err);
      }
      return next();
    });
  };
};


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/body_parser_stream.js":
/***/ ((module, exports, __webpack_require__) => {

var split = __webpack_require__("./.yarn/cache/split-npm-0.2.10-a950dc8c82-9eb1195608.zip/node_modules/split/index.js");
var through = __webpack_require__("./.yarn/cache/through-npm-2.3.8-df5f72a16e-a38c3e0598.zip/node_modules/through/index.js");
var Readable = (__webpack_require__("?7db0").Readable);
var PassThrough = (__webpack_require__("?7db0").PassThrough);
var logfmt   = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js");

exports = module.exports = function(options){
  if(options == null) options = {};
  var mime = options.contentType || "application/logplex-1";

  return function(req, res, next) {

    //honor already parsed bodies
    if (req._body) return next();

    //mime-type check
    var is_mime = req.header('content-type') === mime;
    if (!is_mime) return next();
    req._body = true;
    req.body = new PassThrough({objectMode: true});
    req.pipe(logfmt.streamParser()).pipe(req.body);

    return next();
  }
}



/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/logfmt_parser.js":
/***/ ((__unused_webpack_module, exports) => {

exports.debug = false;

exports.parse = function(line) {
  var key = '';
  var value = '';
  var is_number = true;
  var in_key    = false;
  var in_value  = false;
  var in_quote  = false;
  var had_quote = false;
  var object    = {};
  var debug     = exports.debug;

  if(line[line.length - 1] == '\n'){
    line = line.slice(0,line.length - 1)
  }

  for(var i=0; i <= line.length; i++){

    if((line[i] == ' ' && !in_quote) || i == line.length){
      if(in_key && key.length > 0){
        object[key] = true;
      }else if(in_value){
        if(value == 'true') value = true;
        else if(value == 'false') value = false;
        else if(value === '' && !had_quote) value = null;
        object[key] = value;
        value = '';
      }

      if(i == line.length) break;
      else {
        in_key   = false;
        in_value = false;
        in_quote = false;
        had_quote = false;
      }
    }

    if(line[i] == '=' && !in_quote){
      if(debug) console.log('split')
      //split
      in_key = false;
      in_value = true;
    }
    else if(line[i] == '\\'){
      i ++ ;
      value += line[i];
      if(debug) console.log('escape: ' + line[i])
    }
    else if(line[i] == '"'){
      had_quote = true;
      in_quote = !in_quote;
      if(debug) console.log('in quote: ' + in_quote)
    }
    else if(line[i] != ' ' && !in_value && !in_key){
      if(debug) console.log('start key with: ' + line[i])
      in_key = true;
      key = line[i];
    }
    else if(in_key){
      if(debug) console.log('add to key: ' + line[i])
      key += line[i]
    }
    else if(in_value){
      if(debug) console.log('add to value: ' + line[i])
      value += line[i];
    }
  }

  return object;
}


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/logger.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.log = function(data, stream) {
  this.stream = this.stream || process.stdout;
  if(stream == undefined) stream = this.stream;

  var logData = Object.assign({}, this.defaultData, data);

  if(this.timers){
    for(var key in this.timers){
      var now = (new Date()).getTime()
      logData[key] = (now - this.timers[key]).toString() + 'ms' ;
    }
  }

  stream.write(this.stringify(logData) + "\n");
}

exports.time = function(label) {
  var logfmt = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js");
  var startTime = (new Date()).getTime();
  var label  = label || 'elapsed';
  var timer  = new logfmt();
  timer.stream = this.stream;
  timer.defaultData = this.defaultData;
  timer.timers = Object.assign({}, this.timers)
  timer.timers[label] = startTime;
  return timer;
}

exports.namespace = function(object) {
  var logfmt = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js");
  var namespaced = new logfmt()
  var namespace  = Object.assign({}, this.defaultData, object);
  namespaced.stream = this.stream;
  namespaced.defaultData = namespace
  namespaced.timers = this.timers;
  return namespaced;
}

exports.error = function(err, id) {
  this.maxErrorLines = this.maxErrorLines || 10;
  if (id === undefined) {
    id = Math.random().toString().slice(2, 12);
  }
  var errorLogger = this.namespace({
    error: true,
    id:id,
    now: (new Date()).toISOString()
  })
  errorLogger.log({ message:err.message });
  if (err.stack) {
    var stack = err.stack.split('\n');
    for (var line in stack) {
      if (line >= this.maxErrorLines) break;
      errorLogger.log({ line:line, trace:stack[line] });
    }
  }
}


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/request_logger.js":
/***/ ((__unused_webpack_module, exports) => {

var commonFormatter = function(req, res){
  if((typeof req.path) == 'function'){
    //in restify path is a function
    var path = req.path();
  }
  else{
    //in express it is an attribute
    var path = req.originalUrl || req.path || req.url;
  }

  var httpHeader = req.header && req.header('x-forwarded-for')
  var requestID  = req.header && req.header('x-request-id')

  var ip = req.ip || httpHeader
                  || req.connection.remoteAddress;

  var requestData =  {
    ip: ip,
    time: (new Date()).toISOString(),
    method: req.method,
    path: path,
    "status": res.statusCode,
  }

  if (requestID) {
    requestData.request_id = requestID;
  }

  if(res.get){
    requestData.content_length = res.get('content-length');
    requestData.content_type = res.get('content-type');
  }
  return requestData;
}

var immediateLogger = function(logger, options, formatter){
  return function(req, res, next){
    var data = formatter(req, res);
    logger.log(data);
    next();
  }
}

var timingLogger = function(logger, options, formatter){
  return function(req, res, next){
    var elapsed = options.elapsed || 'elapsed';
    var timer   = logger.time(elapsed);
    var end = res.end;
    res.end = function(chunk, encoding) {
      var data = formatter(req, res);
      res.end = end;
      res.end(chunk, encoding);
      timer.log(data);
    };
    next();
  }
}

exports.init = function(logger, options, formatter) {
  this.logger = logger;

  if(!formatter && !options){
    formatter = commonFormatter;
    options = {};
  }
  else if(!formatter){
    if(typeof options == 'function'){
      formatter = options;
      options = {};
    }else{
      formatter = commonFormatter;
    }
  }
  options = options || {};

  if(options.immediate){
    return immediateLogger(logger, options, formatter);
  }else{
    return timingLogger(logger, options, formatter);
  }
}

exports.commonFormatter = commonFormatter;


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/streaming.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var split       = __webpack_require__("./.yarn/cache/split-npm-0.2.10-a950dc8c82-9eb1195608.zip/node_modules/split/index.js")
var through     = __webpack_require__("./.yarn/cache/through-npm-2.3.8-df5f72a16e-a38c3e0598.zip/node_modules/through/index.js");
var PassThrough = (__webpack_require__("?7db0").PassThrough);

//returns a stream that splits and parses logfmt into objects
exports.streamParser = function(options){
  var options = options || {};

  var streamParser = new PassThrough();
  var self = this;

  var logfmtStream = through(function(line){
    if(line !== '') this.queue(self.parse(line))
  })

  // When a source stream is piped to us, undo that pipe, and save
  // off the source stream piped into our internally managed streams.
  streamParser.on('pipe', function(source) {
    if(source.unpipe) source.unpipe(this);
    this.transformStream = source.pipe(split()).pipe(logfmtStream);
  });

  // When we're piped to another stream, instead pipe our internal
  // transform stream to that destination.
  streamParser.pipe = function(destination, options) {
    return this.transformStream.pipe(destination, options);
  };

  return streamParser;
}

// returns a stream that stringifies objects
exports.streamStringify = function(options){
  var self = this;
  var options = options || {};
  if(options.hasOwnProperty('delimiter')){
    var delim = options.delimiter;
  }else{
    var delim = "\n";
  }

  return through(function(data){
    this.queue(self.stringify(data) + delim)
  }, function(){
    this.queue(null)
  })
}


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/stringify.js":
/***/ ((__unused_webpack_module, exports) => {

exports.stringify = function(data){
  var line = '';

  for(var key in data) {
    var value = data[key];
    var is_null = false;
    if(value == null) {
      is_null = true;
      value = '';
    }
    else value = value.toString();

    var needs_quoting  = value.indexOf(' ') > -1 || value.indexOf('=') > -1;
    var needs_escaping = value.indexOf('"') > -1 || value.indexOf("\\") > -1;

    if(needs_escaping) value = value.replace(/["\\]/g, '\\$&');
    if(needs_quoting) value = '"' + value + '"';
    if(value === '' && !is_null) value = '""';

    line += key + '=' + value + ' ';
  }

  //trim traling space
  return line.substring(0,line.length-1);
}



/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//constructor
function logfmt() {
}
module.exports = logfmt;

var streaming        = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/streaming.js");
var bodyParser       = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/body_parser.js");
var bodyParserStream = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/body_parser_stream.js");
var logfmtParser     = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/logfmt_parser.js");
var logger           = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/logger.js");
var requestLogger    = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/request_logger.js");
var serializer       = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/stringify.js");

//Build up logfmt prototype
Object.assign(logfmt.prototype, logger);
Object.assign(logfmt.prototype, streaming);

logfmt.prototype.stringify = serializer.stringify;
logfmt.prototype.parse = logfmtParser.parse;

// Synchronous body parser
logfmt.prototype.bodyParser = function(options) {
  options || (options = {});
  var mime = options.contentType || "application/logplex-1";
  return bodyParser({ contentType: mime, parser: this.parse });
};

// Stream parser
logfmt.prototype.bodyParserStream = function(options) {
  options || (options = {});
  var mime = options.contentType || "application/logplex-1";
  return bodyParserStream({ contentType: mime });
};

logfmt.prototype.requestLogger = function(options, formatter) {
  return requestLogger.init(this, options, formatter);
};

logfmt.prototype.requestLogger.commonFormatter = requestLogger.commonFormatter;

Object.assign(logfmt, logfmt.prototype);


/***/ }),

/***/ "./.yarn/cache/split-npm-0.2.10-a950dc8c82-9eb1195608.zip/node_modules/split/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//filter will reemit the data if cb(err,pass) pass is truthy

// reduce is more tricky
// maybe we want to group the reductions or emit progress updates occasionally
// the most basic reduce just emits one 'data' event after it has recieved 'end'


var through = __webpack_require__("./.yarn/cache/through-npm-2.3.8-df5f72a16e-a38c3e0598.zip/node_modules/through/index.js")
var Decoder = (__webpack_require__("?1a5c").StringDecoder)

module.exports = split

//TODO pass in a function to map across the lines.

function split (matcher, mapper) {
  var decoder = new Decoder()
  var soFar = ''
  if('function' === typeof matcher)
    mapper = matcher, matcher = null
  if (!matcher)
    matcher = /\r?\n/

  function emit(stream, piece) {
    if(mapper) {
      try {
        piece = mapper(piece)
      }
      catch (err) {
        return stream.emit('error', err)
      }
      if('undefined' !== typeof piece)
        stream.queue(piece)
    }
    else
      stream.queue(piece)
  }

  function next (stream, buffer) { 
    var pieces = (soFar + buffer).split(matcher)
    soFar = pieces.pop()

    for (var i = 0; i < pieces.length; i++) {
      var piece = pieces[i]
      emit(stream, piece)
    }
  }

  return through(function (b) {
    next(this, decoder.write(b))
  },
  function () {
    if(decoder.end) 
      next(this, decoder.end())
    if(soFar != null)
      emit(this, soFar)
    this.queue(null)
  })
}



/***/ }),

/***/ "./.yarn/cache/through-npm-2.3.8-df5f72a16e-a38c3e0598.zip/node_modules/through/index.js":
/***/ ((module, exports, __webpack_require__) => {

var Stream = __webpack_require__("?dcf2")

// through
//
// a stream that does nothing but re-emit the input.
// useful for aggregating a series of changing but not ending streams into one stream)

exports = module.exports = through
through.through = through

//create a readable writable stream.

function through (write, end, opts) {
  write = write || function (data) { this.queue(data) }
  end = end || function () { this.queue(null) }

  var ended = false, destroyed = false, buffer = [], _ended = false
  var stream = new Stream()
  stream.readable = stream.writable = true
  stream.paused = false

//  stream.autoPause   = !(opts && opts.autoPause   === false)
  stream.autoDestroy = !(opts && opts.autoDestroy === false)

  stream.write = function (data) {
    write.call(this, data)
    return !stream.paused
  }

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift()
      if(null === data)
        return stream.emit('end')
      else
        stream.emit('data', data)
    }
  }

  stream.queue = stream.push = function (data) {
//    console.error(ended)
    if(_ended) return stream
    if(data === null) _ended = true
    buffer.push(data)
    drain()
    return stream
  }

  //this will be registered as the first 'end' listener
  //must call destroy next tick, to make sure we're after any
  //stream piped from here.
  //this is only a problem if end is not emitted synchronously.
  //a nicer way to do this is to make sure this is the last listener for 'end'

  stream.on('end', function () {
    stream.readable = false
    if(!stream.writable && stream.autoDestroy)
      process.nextTick(function () {
        stream.destroy()
      })
  })

  function _end () {
    stream.writable = false
    end.call(stream)
    if(!stream.readable && stream.autoDestroy)
      stream.destroy()
  }

  stream.end = function (data) {
    if(ended) return
    ended = true
    if(arguments.length) stream.write(data)
    _end() // will emit or queue
    return stream
  }

  stream.destroy = function () {
    if(destroyed) return
    destroyed = true
    ended = true
    buffer.length = 0
    stream.writable = stream.readable = false
    stream.emit('close')
    return stream
  }

  stream.pause = function () {
    if(stream.paused) return
    stream.paused = true
    return stream
  }

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false
      stream.emit('resume')
    }
    drain()
    //may have become paused again,
    //as drain emits 'data'.
    if(!stream.paused)
      stream.emit('drain')
    return stream
  }
  return stream
}



/***/ }),

/***/ "?7db0":
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1a5c":
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?dcf2":
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFHQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvTm9kZUdyYXBoU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9UcmFjZVRvTG9ncy9LZXlWYWx1ZUlucHV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb0xvZ3MvVHJhY2VUb0xvZ3NTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9NZXRyaWNzL1RyYWNlVG9NZXRyaWNzU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvdXRpbHMvdHJhY2luZy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvamFlZ2VyL2NvbXBvbmVudHMvQWR2YW5jZWRPcHRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvamFlZ2VyL2NvbXBvbmVudHMvQ29uZmlnRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvamFlZ2VyL2NvbXBvbmVudHMvUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9qYWVnZXIvY29tcG9uZW50cy9TZWFyY2hGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvamFlZ2VyL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2phZWdlci9ncmFwaFRyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvamFlZ2VyL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvamFlZ2VyL3Jlc3BvbnNlVHJhbnNmb3JtLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9qYWVnZXIvdXRpbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvbG9nZm10LW5wbS0xLjMuMi0zN2ZhYmVlNDM2LTYzOWQzMjdjMWUuemlwL25vZGVfbW9kdWxlcy9sb2dmbXQvbGliL2JvZHlfcGFyc2VyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9sb2dmbXQtbnBtLTEuMy4yLTM3ZmFiZWU0MzYtNjM5ZDMyN2MxZS56aXAvbm9kZV9tb2R1bGVzL2xvZ2ZtdC9saWIvYm9keV9wYXJzZXJfc3RyZWFtLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9sb2dmbXQtbnBtLTEuMy4yLTM3ZmFiZWU0MzYtNjM5ZDMyN2MxZS56aXAvbm9kZV9tb2R1bGVzL2xvZ2ZtdC9saWIvbG9nZm10X3BhcnNlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvbG9nZm10LW5wbS0xLjMuMi0zN2ZhYmVlNDM2LTYzOWQzMjdjMWUuemlwL25vZGVfbW9kdWxlcy9sb2dmbXQvbGliL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvbG9nZm10LW5wbS0xLjMuMi0zN2ZhYmVlNDM2LTYzOWQzMjdjMWUuemlwL25vZGVfbW9kdWxlcy9sb2dmbXQvbGliL3JlcXVlc3RfbG9nZ2VyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9sb2dmbXQtbnBtLTEuMy4yLTM3ZmFiZWU0MzYtNjM5ZDMyN2MxZS56aXAvbm9kZV9tb2R1bGVzL2xvZ2ZtdC9saWIvc3RyZWFtaW5nLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9sb2dmbXQtbnBtLTEuMy4yLTM3ZmFiZWU0MzYtNjM5ZDMyN2MxZS56aXAvbm9kZV9tb2R1bGVzL2xvZ2ZtdC9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9sb2dmbXQtbnBtLTEuMy4yLTM3ZmFiZWU0MzYtNjM5ZDMyN2MxZS56aXAvbm9kZV9tb2R1bGVzL2xvZ2ZtdC9sb2dmbXQuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL3NwbGl0LW5wbS0wLjIuMTAtYTk1MGRjOGM4Mi05ZWIxMTk1NjA4LnppcC9ub2RlX21vZHVsZXMvc3BsaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL3Rocm91Z2gtbnBtLTIuMy44LWRmNWY3MmExNmUtYTM4YzNlMDU5OC56aXAvbm9kZV9tb2R1bGVzL3Rocm91Z2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS9pZ25vcmVkfC9ob21lL3NvdWxhL2dyYWZhbmEvLnlhcm4vY2FjaGUvbG9nZm10LW5wbS0xLjMuMi0zN2ZhYmVlNDM2LTYzOWQzMjdjMWUuemlwL25vZGVfbW9kdWxlcy9sb2dmbXQvbGlifHN0cmVhbSIsIndlYnBhY2s6Ly9ncmFmYW5hL2lnbm9yZWR8L2hvbWUvc291bGEvZ3JhZmFuYS8ueWFybi9jYWNoZS9zcGxpdC1ucG0tMC4yLjEwLWE5NTBkYzhjODItOWViMTE5NTYwOC56aXAvbm9kZV9tb2R1bGVzL3NwbGl0fHN0cmluZ19kZWNvZGVyIiwid2VicGFjazovL2dyYWZhbmEvaWdub3JlZHwvaG9tZS9zb3VsYS9ncmFmYW5hLy55YXJuL2NhY2hlL3Rocm91Z2gtbnBtLTIuMy44LWRmNWY3MmExNmUtYTM4YzNlMDU5OC56aXAvbm9kZV9tb2R1bGVzL3Rocm91Z2h8c3RyZWFtIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBEYXRhU291cmNlSnNvbkRhdGEsXG4gIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsXG4gIEdyYWZhbmFUaGVtZSxcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5saW5lU3dpdGNoLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUdyYXBoT3B0aW9ucyB7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVHcmFwaERhdGEgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICBub2RlR3JhcGg/OiBOb2RlR3JhcGhPcHRpb25zO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPE5vZGVHcmFwaERhdGE+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlR3JhcGhTZXR0aW5ncyh7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5Ob2RlIEdyYXBoPC9oMz5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdyBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICB0b29sdGlwPVwiRW5hYmxlcyB0aGUgTm9kZSBHcmFwaCB2aXN1YWxpemF0aW9uIGluIHRoZSB0cmFjZSB2aWV3ZXIuXCJcbiAgICAgICAgICBsYWJlbD1cIkVuYWJsZSBOb2RlIEdyYXBoXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbmxpbmVTd2l0Y2hcbiAgICAgICAgICAgIGlkPVwiZW5hYmxlTm9kZUdyYXBoXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLm5vZGVHcmFwaD8uZW5hYmxlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ25vZGVHcmFwaCcsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLm5vZGVHcmFwaCxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBsYWJlbDogY29udGFpbmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICBgLFxuICByb3c6IGNzc2BcbiAgICBsYWJlbDogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSwgS2V5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlZ21lbnRJbnB1dCwgdXNlU3R5bGVzLCBJbmxpbmVMYWJlbCwgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuY29uc3QgRVFfV0lEVEggPSAzOyAvLyA9IDI0cHggaW4gaW5saW5lIGxhYmVsXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlczogQXJyYXk8S2V5VmFsdWU8c3RyaW5nPj47XG4gIG9uQ2hhbmdlOiAodmFsdWVzOiBBcnJheTxLZXlWYWx1ZTxzdHJpbmc+PikgPT4gdm9pZDtcbiAgaWQ/OiBzdHJpbmc7XG4gIGtleVBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB2YWx1ZVBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5jb25zdCBLZXlWYWx1ZUlucHV0ID0gKHtcbiAgdmFsdWVzLFxuICBvbkNoYW5nZSxcbiAgaWQsXG4gIGtleVBsYWNlaG9sZGVyID0gJ0tleScsXG4gIHZhbHVlUGxhY2Vob2xkZXIgPSAnVmFsdWUgKG9wdGlvbmFsKScsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICB7dmFsdWVzLmxlbmd0aCA/IChcbiAgICAgICAgdmFsdWVzLm1hcCgodmFsdWUsIGlkeCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFpcn0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgPFNlZ21lbnRJbnB1dFxuICAgICAgICAgICAgICBpZD17YCR7aWR9LWtleS0ke2lkeH1gfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17a2V5UGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5rZXl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgdmFsdWVzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdi5rZXkgPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElubGluZUxhYmVsIGFyaWEtbGFiZWw9XCJlcXVhbHNcIiBjbGFzc05hbWU9e3N0eWxlcy5vcGVyYXRvcn0gd2lkdGg9e0VRX1dJRFRIfT5cbiAgICAgICAgICAgICAgPVxuICAgICAgICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICAgICAgICAgIDxTZWdtZW50SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfS12YWx1ZS0ke2lkeH1gfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgIHYudmFsdWUgPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbLi4udmFsdWVzLnNsaWNlKDAsIGlkeCksIC4uLnZhbHVlcy5zbGljZShpZHggKyAxKV0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIHRhZ1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidGltZXNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7aWR4ID09PSB2YWx1ZXMubGVuZ3RoIC0gMSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi52YWx1ZXMsIHsga2V5OiAnJywgdmFsdWU6ICcnIH1dKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgdGFnXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbLi4udmFsdWVzLCB7IGtleTogJycsIHZhbHVlOiAnJyB9XSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1wYXJ0XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRhZ1wiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleVZhbHVlSW5wdXQ7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogJHt0aGVtZS5zcGFjaW5nLnhzfSAwO1xuICBgLFxuICBwYWlyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG4gIG9wZXJhdG9yOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUucGFsZXR0ZS5vcmFuZ2V9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyxcbiAgR3JhZmFuYVRoZW1lLFxuICBLZXlWYWx1ZSxcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQsIFRhZ3NJbnB1dCwgdXNlU3R5bGVzLCBJbmxpbmVTd2l0Y2ggfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBLZXlWYWx1ZUlucHV0IGZyb20gJy4vS2V5VmFsdWVJbnB1dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb0xvZ3NPcHRpb25zIHtcbiAgZGF0YXNvdXJjZVVpZD86IHN0cmluZztcbiAgdGFncz86IHN0cmluZ1tdO1xuICBtYXBwZWRUYWdzPzogQXJyYXk8S2V5VmFsdWU8c3RyaW5nPj47XG4gIG1hcFRhZ05hbWVzRW5hYmxlZD86IGJvb2xlYW47XG4gIHNwYW5TdGFydFRpbWVTaGlmdD86IHN0cmluZztcbiAgc3BhbkVuZFRpbWVTaGlmdD86IHN0cmluZztcbiAgZmlsdGVyQnlUcmFjZUlEPzogYm9vbGVhbjtcbiAgZmlsdGVyQnlTcGFuSUQ/OiBib29sZWFuO1xuICBsb2tpU2VhcmNoPzogYm9vbGVhbjsgLy8gbGVnYWN5XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb0xvZ3NEYXRhIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgdHJhY2VzVG9Mb2dzPzogVHJhY2VUb0xvZ3NPcHRpb25zO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPFRyYWNlVG9Mb2dzRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWNlVG9Mb2dzU2V0dGluZ3MoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgd2lkdGg6ICcxMDAlJyB9KX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+VHJhY2UgdG8gbG9nczwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1RleHR9PlxuICAgICAgICBUcmFjZSB0byBsb2dzIGxldHMgeW91IG5hdmlnYXRlIGZyb20gYSB0cmFjZSBzcGFuIHRvIHRoZSBzZWxlY3RlZCBkYXRhIHNvdXJjZSZhcG9zO3MgbG9ncy5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiVGhlIGRhdGEgc291cmNlIHRoZSB0cmFjZSBpcyBnb2luZyB0byBuYXZpZ2F0ZSB0b1wiIGxhYmVsPVwiRGF0YSBzb3VyY2VcIiBsYWJlbFdpZHRoPXsyNn0+XG4gICAgICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgIGlucHV0SWQ9XCJ0cmFjZS10by1sb2dzLWRhdGEtc291cmNlLXBpY2tlclwiXG4gICAgICAgICAgICBmaWx0ZXI9eyhkcykgPT4ge1xuICAgICAgICAgICAgICAvLyBUcmFjZSB0byBsb2dzIG9ubHkgc3VwcG9ydHMgbG9raSBhbmQgc3BsdW5rIGF0IHRoZSBtb21lbnRcbiAgICAgICAgICAgICAgcmV0dXJuIGRzLnR5cGUgPT09ICdsb2tpJyB8fCBkcy50eXBlID09PSAnZ3JhZmFuYS1zcGx1bmstZGF0YXNvdXJjZSc7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY3VycmVudD17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmRhdGFzb3VyY2VVaWR9XG4gICAgICAgICAgICBub0RlZmF1bHQ9e3RydWV9XG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGRzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogZHMudWlkLFxuICAgICAgICAgICAgICAgIHRhZ3M6IG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy50YWdzLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICB7b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/Lm1hcFRhZ05hbWVzRW5hYmxlZCA/IChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgdG9vbHRpcD1cIlRhZ3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIExva2kgcXVlcnkuIERlZmF1bHQgdGFnczogJ2NsdXN0ZXInLCAnaG9zdG5hbWUnLCAnbmFtZXNwYWNlJywgJ3BvZCdcIlxuICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxLZXlWYWx1ZUlucHV0XG4gICAgICAgICAgICAgIGtleVBsYWNlaG9sZGVyPVwiVGFnXCJcbiAgICAgICAgICAgICAgdmFsdWVzPXtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwcGVkVGFncyA/P1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy50YWdzPy5tYXAoKHRhZykgPT4gKHsga2V5OiB0YWcgfSkpID8/XG4gICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICAgIG1hcHBlZFRhZ3M6IHYsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgKSA6IChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgdG9vbHRpcD1cIlRhZ3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIExva2kgcXVlcnkuIERlZmF1bHQgdGFnczogJ2NsdXN0ZXInLCAnaG9zdG5hbWUnLCAnbmFtZXNwYWNlJywgJ3BvZCdcIlxuICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUYWdzSW5wdXRcbiAgICAgICAgICAgICAgdGFncz17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3N9XG4gICAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0YWdzKSA9PlxuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgICB0YWdzOiB0YWdzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICl9XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJNYXAgdGFnIG5hbWVzXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIk1hcCB0cmFjZSB0YWcgbmFtZXMgdG8gbG9nIGxhYmVsIG5hbWVzLiBFeDogazhzLnBvZC5uYW1lIC0+IHBvZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cIm1hcFRhZ05hbWVzXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwVGFnTmFtZXNFbmFibGVkID8/IGZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIG1hcFRhZ05hbWVzRW5hYmxlZDogZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiU3BhbiBzdGFydCB0aW1lIHNoaWZ0XCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIlNoaWZ0cyB0aGUgc3RhcnQgdGltZSBvZiB0aGUgc3Bhbi4gRGVmYXVsdCAwIChUaW1lIHVuaXRzIGNhbiBiZSB1c2VkIGhlcmUsIGZvciBleGFtcGxlOiA1cywgMW0sIDNoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBzcGFuU3RhcnRUaW1lU2hpZnQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uc3BhblN0YXJ0VGltZVNoaWZ0IHx8ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiU3BhbiBlbmQgdGltZSBzaGlmdFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJTaGlmdHMgdGhlIGVuZCB0aW1lIG9mIHRoZSBzcGFuLiBEZWZhdWx0IDAgVGltZSB1bml0cyBjYW4gYmUgdXNlZCBoZXJlLCBmb3IgZXhhbXBsZTogNXMsIDFtLCAzaFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBzcGFuRW5kVGltZVNoaWZ0OiB2LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnNwYW5FbmRUaW1lU2hpZnQgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgYnkgVHJhY2UgSURcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiRmlsdGVycyBsb2dzIGJ5IFRyYWNlIElELiBBcHBlbmRzICd8PTx0cmFjZSBpZD4nIHRvIHRoZSBxdWVyeS5cIlxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJmaWx0ZXJCeVRyYWNlSURcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5maWx0ZXJCeVRyYWNlSUR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZmlsdGVyQnlUcmFjZUlEOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgYnkgU3BhbiBJRFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJGaWx0ZXJzIGxvZ3MgYnkgU3BhbiBJRC4gQXBwZW5kcyAnfD08c3BhbiBpZD4nIHRvIHRoZSBxdWVyeS5cIlxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJmaWx0ZXJCeVNwYW5JRFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmZpbHRlckJ5U3BhbklEfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIGZpbHRlckJ5U3BhbklEOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBpbmZvVGV4dDogY3NzYFxuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2VtaVdlYWt9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLFxuICBHcmFmYW5hVGhlbWUsXG4gIEtleVZhbHVlLFxuICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24sXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBpY2tlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElucHV0LCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBLZXlWYWx1ZUlucHV0IGZyb20gJy4uL1RyYWNlVG9Mb2dzL0tleVZhbHVlSW5wdXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNlVG9NZXRyaWNzT3B0aW9ucyB7XG4gIGRhdGFzb3VyY2VVaWQ/OiBzdHJpbmc7XG4gIHRhZ3M/OiBBcnJheTxLZXlWYWx1ZTxzdHJpbmc+PjtcbiAgcXVlcmllczogVHJhY2VUb01ldHJpY1F1ZXJ5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb01ldHJpY1F1ZXJ5IHtcbiAgbmFtZT86IHN0cmluZztcbiAgcXVlcnk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb01ldHJpY3NEYXRhIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgdHJhY2VzVG9NZXRyaWNzPzogVHJhY2VUb01ldHJpY3NPcHRpb25zO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPFRyYWNlVG9NZXRyaWNzRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWNlVG9NZXRyaWNzU2V0dGluZ3MoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgd2lkdGg6ICcxMDAlJyB9KX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+VHJhY2UgdG8gbWV0cmljczwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1RleHR9PlxuICAgICAgICBUcmFjZSB0byBtZXRyaWNzIGxldHMgeW91IG5hdmlnYXRlIGZyb20gYSB0cmFjZSBzcGFuIHRvIHRoZSBzZWxlY3RlZCBkYXRhIHNvdXJjZS5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3cgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgPElubGluZUZpZWxkIHRvb2x0aXA9XCJUaGUgZGF0YSBzb3VyY2UgdGhlIHRyYWNlIGlzIGdvaW5nIHRvIG5hdmlnYXRlIHRvXCIgbGFiZWw9XCJEYXRhIHNvdXJjZVwiIGxhYmVsV2lkdGg9ezI2fT5cbiAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgaW5wdXRJZD1cInRyYWNlLXRvLW1ldHJpY3MtZGF0YS1zb3VyY2UtcGlja2VyXCJcbiAgICAgICAgICAgIHBsdWdpbklkPVwicHJvbWV0aGV1c1wiXG4gICAgICAgICAgICBjdXJyZW50PXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcz8uZGF0YXNvdXJjZVVpZH1cbiAgICAgICAgICAgIG5vRGVmYXVsdD17dHJ1ZX1cbiAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZHMpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9NZXRyaWNzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzLFxuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IGRzLnVpZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICB7b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LmRhdGFzb3VyY2VVaWQgPyAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9NZXRyaWNzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzLFxuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgdG9vbHRpcD1cIlRhZ3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIG1ldHJpY3MgcXVlcnkuXCIgbGFiZWw9XCJUYWdzXCIgbGFiZWxXaWR0aD17MjZ9PlxuICAgICAgICAgIDxLZXlWYWx1ZUlucHV0XG4gICAgICAgICAgICBrZXlQbGFjZWhvbGRlcj1cIlRhZ1wiXG4gICAgICAgICAgICB2YWx1ZXM9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzPy50YWdzID8/IFtdfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTWV0cmljcycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcyxcbiAgICAgICAgICAgICAgICB0YWdzOiB2LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICB7b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LnF1ZXJpZXM/Lm1hcCgocXVlcnksIGkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXJ5Um93fT5cbiAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJMaW5rIExhYmVsXCIgbGFiZWxXaWR0aD17MTB9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiTGluayBMYWJlbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UXVlcmllcyA9IG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzPy5xdWVyaWVzLnNsaWNlKCkgPz8gW107XG4gICAgICAgICAgICAgICAgbmV3UXVlcmllc1tpXS5uYW1lID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9NZXRyaWNzJywge1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3MsXG4gICAgICAgICAgICAgICAgICBxdWVyaWVzOiBuZXdRdWVyaWVzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJRdWVyeVwiXG4gICAgICAgICAgICBsYWJlbFdpZHRoPXsxMH1cbiAgICAgICAgICAgIHRvb2x0aXA9XCJUaGUgUHJvbWV0aGV1cyBxdWVyeSB0aGF0IHdpbGwgcnVuIHdoZW4gbmF2aWdhdGluZyBmcm9tIGEgdHJhY2UgdG8gbWV0cmljcy4gSW50ZXJwb2xhdGUgdGFncyB1c2luZyB0aGUgYCRfX3RhZ3NgIGtleXdvcmQuXCJcbiAgICAgICAgICAgIGdyb3dcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJRdWVyeVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5xdWVyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1F1ZXJpZXMgPSBvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcz8ucXVlcmllcy5zbGljZSgpID8/IFtdO1xuICAgICAgICAgICAgICAgIG5ld1F1ZXJpZXNbaV0ucXVlcnkgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb01ldHJpY3MnLCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcyxcbiAgICAgICAgICAgICAgICAgIHF1ZXJpZXM6IG5ld1F1ZXJpZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgdGl0bGU9XCJSZW1vdmUgcXVlcnlcIlxuICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3UXVlcmllcyA9IG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzPy5xdWVyaWVzLnNsaWNlKCk7XG4gICAgICAgICAgICAgIG5ld1F1ZXJpZXM/LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb01ldHJpY3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3MsXG4gICAgICAgICAgICAgICAgcXVlcmllczogbmV3UXVlcmllcyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgIHRpdGxlPVwiQWRkIHF1ZXJ5XCJcbiAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9NZXRyaWNzJywge1xuICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3MsXG4gICAgICAgICAgICBxdWVyaWVzOiBbLi4uKG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzPy5xdWVyaWVzID8/IFtdKSwgeyBxdWVyeTogJycgfV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCBxdWVyeVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBpbmZvVGV4dDogY3NzYFxuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2VtaVdlYWt9O1xuICBgLFxuICByb3c6IGNzc2BcbiAgICBsYWJlbDogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgYCxcbiAgcXVlcnlSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBgLFxufSk7XG4iLCIvKipcbiAqIEdldCBub24gb3ZlcmxhcHBpbmcgZHVyYXRpb24gb2YgdGhlIHJhbmdlcyBhcyB0aGV5IGNhbiBvdmVybGFwIG9yIGhhdmUgZ2Fwcy5cbiAqL1xuaW1wb3J0IHsgRmllbGRUeXBlLCBNdXRhYmxlRGF0YUZyYW1lLCBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIGFzIEZpZWxkcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9uT3ZlcmxhcHBpbmdEdXJhdGlvbihyYW5nZXM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTogbnVtYmVyIHtcbiAgcmFuZ2VzLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKTtcbiAgY29uc3QgbWVyZ2VkUmFuZ2VzID0gcmFuZ2VzLnJlZHVjZSgoYWNjLCByYW5nZSkgPT4ge1xuICAgIGlmICghYWNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtyYW5nZV07XG4gICAgfVxuICAgIGNvbnN0IHRhaWwgPSBhY2Muc2xpY2UoLTEpWzBdO1xuICAgIGNvbnN0IFtwcmV2U3RhcnQsIHByZXZFbmRdID0gdGFpbDtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZTtcbiAgICBpZiAoZW5kIDwgcHJldkVuZCkge1xuICAgICAgLy8gSW4gdGhpcyBjYXNlIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IGluc2lkZSB0aGUgcHJldiByYW5nZSBzbyB3ZSBjYW4ganVzdCBpZ25vcmUgaXQuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IHByZXZFbmQpIHtcbiAgICAgIC8vIFRoZXJlIGlzIG5vIG92ZXJsYXAgc28gd2UgY2FuIGp1c3QgYWRkIGl0IHRvIHN0YWNrXG4gICAgICByZXR1cm4gWy4uLmFjYywgcmFuZ2VdO1xuICAgIH1cblxuICAgIC8vIFdlIGtub3cgdGhlcmUgaXMgb3ZlcmxhcCBhbmQgY3VycmVudCByYW5nZSBlbmRzIGxhdGVyIHRoYW4gcHJldmlvdXMgc28gd2UgY2FuIGp1c3QgZXh0ZW5kIHRoZSByYW5nZVxuICAgIHJldHVybiBbLi4uYWNjLnNsaWNlKDAsIC0xKSwgW3ByZXZTdGFydCwgZW5kXV0gYXMgQXJyYXk8W251bWJlciwgbnVtYmVyXT47XG4gIH0sIFtdIGFzIEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTtcblxuICByZXR1cm4gbWVyZ2VkUmFuZ2VzLnJlZHVjZSgoYWNjLCByYW5nZSkgPT4ge1xuICAgIHJldHVybiBhY2MgKyAocmFuZ2VbMV0gLSByYW5nZVswXSk7XG4gIH0sIDApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBtYXAgb2YgdGhlIHNwYW5zIHdpdGggY2hpbGRyZW4gYXJyYXkgZm9yIGVhc2llciBwcm9jZXNzaW5nLiBJdCB3aWxsIGFsc28gY29udGFpbiBlbXB0eSBzcGFucyBpbiBjYXNlXG4gKiBzcGFuIGlzIG1pc3NpbmcgYnV0IG90aGVyIHNwYW5zIGFyZSBpdCdzIGNoaWxkcmVuLiBUaGlzIGlzIG1vcmUgZ2VuZXJpYyBiZWNhdXNlIGl0IG5lZWRzIHRvIGFsbG93IGl0ZXJhdGluZyBvdmVyXG4gKiBib3RoIGFycmF5cyBhbmQgZGF0YWZyYW1lIHZpZXdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNwYW5NYXA8VD4oZ2V0U3BhbjogKGluZGV4OiBudW1iZXIpID0+IHsgc3BhbjogVDsgaWQ6IHN0cmluZzsgcGFyZW50SWRzOiBzdHJpbmdbXSB9IHwgdW5kZWZpbmVkKToge1xuICBbaWQ6IHN0cmluZ106IHsgc3BhbjogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH07XG59IHtcbiAgY29uc3Qgc3Bhbk1hcDogeyBbaWQ6IHN0cmluZ106IHsgc3Bhbj86IFQ7IGNoaWxkcmVuOiBzdHJpbmdbXSB9IH0gPSB7fTtcblxuICBsZXQgc3BhbjtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyAoc3BhbiA9IGdldFNwYW4oaW5kZXgpKSwgISFzcGFuOyBpbmRleCsrKSB7XG4gICAgaWYgKCFzcGFuTWFwW3NwYW4uaWRdKSB7XG4gICAgICBzcGFuTWFwW3NwYW4uaWRdID0ge1xuICAgICAgICBzcGFuOiBzcGFuLnNwYW4sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW5NYXBbc3Bhbi5pZF0uc3BhbiA9IHNwYW4uc3BhbjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBhcmVudElkIG9mIHNwYW4ucGFyZW50SWRzKSB7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaWYgKCFzcGFuTWFwW3BhcmVudElkXSkge1xuICAgICAgICAgIHNwYW5NYXBbcGFyZW50SWRdID0ge1xuICAgICAgICAgICAgc3BhbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcGFuLmlkXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW5NYXBbcGFyZW50SWRdLmNoaWxkcmVuLnB1c2goc3Bhbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNwYW5NYXAgYXMgeyBbaWQ6IHN0cmluZ106IHsgc3BhbjogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRzKGR1cmF0aW9uOiBudW1iZXIsIHRyYWNlRHVyYXRpb246IG51bWJlciwgc2VsZkR1cmF0aW9uOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBtYWluOiBgJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKGR1cmF0aW9uKX1tcyAoJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKChkdXJhdGlvbiAvIHRyYWNlRHVyYXRpb24pICogMTAwKX0lKWAsXG4gICAgc2Vjb25kYXJ5OiBgJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKHNlbGZEdXJhdGlvbil9bXMgKCR7dG9GaXhlZE5vVHJhaWxpbmdaZXJvcyhcbiAgICAgIChzZWxmRHVyYXRpb24gLyBkdXJhdGlvbikgKiAxMDBcbiAgICApfSUpYCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9GaXhlZE5vVHJhaWxpbmdaZXJvcyhuOiBudW1iZXIpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQobi50b0ZpeGVkKDIpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgZGVmYXVsdCBmcmFtZXMgdXNlZCB3aGVuIHJldHVybmluZyBkYXRhIGZvciBub2RlIGdyYXBoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZyYW1lcygpIHtcbiAgY29uc3Qgbm9kZXNGcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogRmllbGRzLmlkLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy50aXRsZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMuc3ViVGl0bGUsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLm1haW5TdGF0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdUb3RhbCB0aW1lICglIG9mIHRyYWNlKScgfSB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMuc2Vjb25kYXJ5U3RhdCwgdHlwZTogRmllbGRUeXBlLnN0cmluZywgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnU2VsZiB0aW1lICglIG9mIHRvdGFsKScgfSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBGaWVsZHMuY29sb3IsXG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBtb2RlOiAnY29udGludW91cy1HcllsUmQnIH0sIGRpc3BsYXlOYW1lOiAnU2VsZiB0aW1lIC8gVHJhY2UgZHVyYXRpb24nIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGVkZ2VzRnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7IG5hbWU6IEZpZWxkcy5pZCwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMudGFyZ2V0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zb3VyY2UsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICBdLFxuICAgIG1ldGE6IHtcbiAgICAgIHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbm9kZUdyYXBoJyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElubGluZUxhYmVsLCBJbnB1dCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBKYWVnZXJRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZHVyYXRpb25QbGFjZWhvbGRlciA9ICdlLmcuIDEuMnMsIDEwMG1zLCA1MDB1cyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHF1ZXJ5OiBKYWVnZXJRdWVyeTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogSmFlZ2VyUXVlcnkpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQWR2YW5jZWRPcHRpb25zKHsgcXVlcnksIG9uQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IFtzaG93QWR2YW5jZWRPcHRpb25zLCBzZXRTaG93QWR2YW5jZWRPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdmFuY2VkT3B0aW9uc0NvbnRhaW5lcn0gb25DbGljaz17KCkgPT4gc2V0U2hvd0FkdmFuY2VkT3B0aW9ucyghc2hvd0FkdmFuY2VkT3B0aW9ucyl9PlxuICAgICAgICAgIDxJbmxpbmVMYWJlbCBhcz1cImRpdlwiPlxuICAgICAgICAgICAgQWR2YW5jZWQgb3B0aW9uc3snICd9XG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e3Nob3dBZHZhbmNlZE9wdGlvbnMgPyBzdHlsZXMuYW5nbGVVcCA6IHN0eWxlcy5hbmdsZURvd259IG5hbWU9XCJhbmdsZS1kb3duXCIgLz5cbiAgICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICBpbj17c2hvd0FkdmFuY2VkT3B0aW9uc31cbiAgICAgICAgbW91bnRPbkVudGVyPXt0cnVlfVxuICAgICAgICB1bm1vdW50T25FeGl0PXt0cnVlfVxuICAgICAgICB0aW1lb3V0PXszMDB9XG4gICAgICAgIGNsYXNzTmFtZXM9e3N0eWxlc31cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJNaW4gRHVyYXRpb25cIiBsYWJlbFdpZHRoPXsyMX0gZ3Jvdz5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJtaW5EdXJhdGlvblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1pbkR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkubWluRHVyYXRpb24gfHwgJyd9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2R1cmF0aW9uUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgbWluRHVyYXRpb246IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIk1heCBEdXJhdGlvblwiIGxhYmVsV2lkdGg9ezIxfSBncm93PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cIm1heER1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWF4RHVyYXRpb25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5tYXhEdXJhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZHVyYXRpb25QbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbjogdi5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiTGltaXRcIiBsYWJlbFdpZHRoPXsyMX0gZ3JvdyB0b29sdGlwPVwiTWF4aW11bSBudW1iZXJzIG9mIHJldHVybmVkIHJlc3VsdHNcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJsaW1pdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxpbWl0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkubGltaXQgfHwgJyd9XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSA/IHBhcnNlSW50KHYuY3VycmVudFRhcmdldC52YWx1ZSwgMTApIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIGFkdmFuY2VkT3B0aW9uc0NvbnRhaW5lcjogY3NzYFxuICAgICAgbWFyZ2luOiAwICR7dGhlbWUuc3BhY2luZy54c30gJHt0aGVtZS5zcGFjaW5nLnhzfSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgICBlbnRlcjogY3NzYFxuICAgICAgbGFiZWw6IGVudGVyO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICBgLFxuICAgIGVudGVyQWN0aXZlOiBjc3NgXG4gICAgICBsYWJlbDogZW50ZXJBY3RpdmU7XG4gICAgICBoZWlnaHQ6IDEwOHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlLCBvcGFjaXR5IDMwMG1zIGVhc2U7XG4gICAgYCxcbiAgICBleGl0OiBjc3NgXG4gICAgICBsYWJlbDogZXhpdDtcbiAgICAgIGhlaWdodDogMTA4cHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIGAsXG4gICAgZXhpdEFjdGl2ZTogY3NzYFxuICAgICAgbGFiZWw6IGV4aXRBY3RpdmU7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2UsIG9wYWNpdHkgMzAwbXMgZWFzZTtcbiAgICBgLFxuICAgIGFuZ2xlVXA6IGNzc2BcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xuICAgIGAsXG4gICAgYW5nbGVEb3duOiBjc3NgXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlSHR0cFNldHRpbmdzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTm9kZUdyYXBoU2V0dGluZ3MgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL05vZGVHcmFwaFNldHRpbmdzJztcbmltcG9ydCB7IFRyYWNlVG9Mb2dzU2V0dGluZ3MgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL1RyYWNlVG9Mb2dzU2V0dGluZ3MnO1xuaW1wb3J0IHsgVHJhY2VUb01ldHJpY3NTZXR0aW5ncyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb01ldHJpY3MvVHJhY2VUb01ldHJpY3NTZXR0aW5ncyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0VkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERhdGFTb3VyY2VIdHRwU2V0dGluZ3NcbiAgICAgICAgZGVmYXVsdFVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6MTY2ODZcIlxuICAgICAgICBkYXRhU291cmNlQ29uZmlnPXtvcHRpb25zfVxuICAgICAgICBzaG93QWNjZXNzT3B0aW9ucz17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPFRyYWNlVG9Mb2dzU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2NvbmZpZy5mZWF0dXJlVG9nZ2xlcy50cmFjZVRvTWV0cmljcyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPFRyYWNlVG9NZXRyaWNzU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICA8Tm9kZUdyYXBoU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmlsZURyb3B6b25lLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIFF1ZXJ5RmllbGQsIFJhZGlvQnV0dG9uR3JvdXAsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgSmFlZ2VyRGF0YXNvdXJjZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgSmFlZ2VyUXVlcnksIEphZWdlclF1ZXJ5VHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgU2VhcmNoRm9ybSB9IGZyb20gJy4vU2VhcmNoRm9ybSc7XG5cbnR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPEphZWdlckRhdGFzb3VyY2UsIEphZWdlclF1ZXJ5PjtcblxuZXhwb3J0IGZ1bmN0aW9uIFF1ZXJ5RWRpdG9yKHsgZGF0YXNvdXJjZSwgcXVlcnksIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5IH06IFByb3BzKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG5cbiAgY29uc3Qgb25DaGFuZ2VRdWVyeSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV4dFF1ZXJ5OiBKYWVnZXJRdWVyeSA9IHsgLi4ucXVlcnksIHF1ZXJ5OiB2YWx1ZSB9O1xuICAgIG9uQ2hhbmdlKG5leHRRdWVyeSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRWRpdG9yQm9keSA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHF1ZXJ5LnF1ZXJ5VHlwZSkge1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgcmV0dXJuIDxTZWFyY2hGb3JtIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9IHF1ZXJ5PXtxdWVyeX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPjtcbiAgICAgIGNhc2UgJ3VwbG9hZCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh7IHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMikgfSl9PlxuICAgICAgICAgICAgPEZpbGVEcm9wem9uZVxuICAgICAgICAgICAgICBvcHRpb25zPXt7IG11bHRpcGxlOiBmYWxzZSB9fVxuICAgICAgICAgICAgICBvbkxvYWQ9eyhyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlLnVwbG9hZGVkSnNvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJUcmFjZSBJRFwiIGxhYmVsV2lkdGg9ezE0fSBncm93PlxuICAgICAgICAgICAgICA8UXVlcnlGaWVsZFxuICAgICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeS5xdWVyeX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VRdWVyeX1cbiAgICAgICAgICAgICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydFbnRlciBhIFRyYWNlIElEIChydW4gd2l0aCBTaGlmdCtFbnRlciknfVxuICAgICAgICAgICAgICAgIHBvcnRhbE9yaWdpbj1cImphZWdlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyB3aWR0aDogJzEwMCUnIH0pfT5cbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlF1ZXJ5IHR5cGVcIj5cbiAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwPEphZWdlclF1ZXJ5VHlwZT5cbiAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdzZWFyY2gnLCBsYWJlbDogJ1NlYXJjaCcgfSxcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiB1bmRlZmluZWQsIGxhYmVsOiAnVHJhY2VJRCcgfSxcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiAndXBsb2FkJywgbGFiZWw6ICdKU09OIGZpbGUnIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5xdWVyeVR5cGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogdixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgIHtyZW5kZXJFZGl0b3JCb2R5KCl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSwgdG9PcHRpb24gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBmdXp6eU1hdGNoLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElucHV0LCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICdhcHAvc3RvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBKYWVnZXJEYXRhc291cmNlIH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBKYWVnZXJRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IHRyYW5zZm9ybVRvTG9nZm10IH0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7IEFkdmFuY2VkT3B0aW9ucyB9IGZyb20gJy4vQWR2YW5jZWRPcHRpb25zJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGF0YXNvdXJjZTogSmFlZ2VyRGF0YXNvdXJjZTtcbiAgcXVlcnk6IEphZWdlclF1ZXJ5O1xuICBvbkNoYW5nZTogKHZhbHVlOiBKYWVnZXJRdWVyeSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBBTExfT1BFUkFUSU9OU19LRVkgPSAnQWxsJztcbmNvbnN0IGFsbE9wZXJhdGlvbnNPcHRpb246IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+ID0ge1xuICBsYWJlbDogQUxMX09QRVJBVElPTlNfS0VZLFxuICB2YWx1ZTogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBkYXRhc291cmNlLCBxdWVyeSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgW3NlcnZpY2VPcHRpb25zLCBzZXRTZXJ2aWNlT3B0aW9uc10gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+KCk7XG4gIGNvbnN0IFtvcGVyYXRpb25PcHRpb25zLCBzZXRPcGVyYXRpb25PcHRpb25zXSA9IHVzZVN0YXRlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4oKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPHtcbiAgICBzZXJ2aWNlczogYm9vbGVhbjtcbiAgICBvcGVyYXRpb25zOiBib29sZWFuO1xuICB9Pih7XG4gICAgc2VydmljZXM6IGZhbHNlLFxuICAgIG9wZXJhdGlvbnM6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBsb2FkT3B0aW9ucyA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh1cmw6IHN0cmluZywgbG9hZGVyT2ZUeXBlOiBzdHJpbmcsIHF1ZXJ5ID0gJycpOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4gPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKChwcmV2VmFsdWUpID0+ICh7IC4uLnByZXZWYWx1ZSwgW2xvYWRlck9mVHlwZV06IHRydWUgfSkpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB2YWx1ZXM6IHN0cmluZ1tdIHwgbnVsbCA9IGF3YWl0IGRhdGFzb3VyY2UubWV0YWRhdGFSZXF1ZXN0KHVybCk7XG4gICAgICAgIGlmICghdmFsdWVzKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGxhYmVsOiBgTm8gJHtsb2FkZXJPZlR5cGV9IGZvdW5kYCwgdmFsdWU6IGBObyAke2xvYWRlck9mVHlwZX0gZm91bmRgIH1dO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9uczogU2VsZWN0YWJsZVZhbHVlW10gPSB2YWx1ZXMuc29ydCgpLm1hcCgob3B0aW9uKSA9PiAoe1xuICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnMuZmlsdGVyKChpdGVtKSA9PiAoaXRlbS52YWx1ZSA/IGZ1enp5TWF0Y2goaXRlbS52YWx1ZSwgcXVlcnkpLmZvdW5kIDogZmFsc2UpKTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9ucztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdFcnJvcicsIGVycm9yKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZygocHJldlZhbHVlKSA9PiAoeyAuLi5wcmV2VmFsdWUsIFtsb2FkZXJPZlR5cGVdOiBmYWxzZSB9KSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbZGF0YXNvdXJjZV1cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFNlcnZpY2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgc2VydmljZXMgPSBhd2FpdCBsb2FkT3B0aW9ucygnL2FwaS9zZXJ2aWNlcycsICdzZXJ2aWNlcycpO1xuICAgICAgaWYgKHF1ZXJ5LnNlcnZpY2UgJiYgZ2V0VGVtcGxhdGVTcnYoKS5jb250YWluc1RlbXBsYXRlKHF1ZXJ5LnNlcnZpY2UpKSB7XG4gICAgICAgIHNlcnZpY2VzLnB1c2godG9PcHRpb24ocXVlcnkuc2VydmljZSkpO1xuICAgICAgfVxuICAgICAgc2V0U2VydmljZU9wdGlvbnMoc2VydmljZXMpO1xuICAgIH07XG4gICAgZ2V0U2VydmljZXMoKTtcbiAgfSwgW2RhdGFzb3VyY2UsIGxvYWRPcHRpb25zLCBxdWVyeS5zZXJ2aWNlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRPcGVyYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgb3BlcmF0aW9ucyA9IGF3YWl0IGxvYWRPcHRpb25zKFxuICAgICAgICBgL2FwaS9zZXJ2aWNlcy8ke2VuY29kZVVSSUNvbXBvbmVudChnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2UocXVlcnkuc2VydmljZSEpKX0vb3BlcmF0aW9uc2AsXG4gICAgICAgICdvcGVyYXRpb25zJ1xuICAgICAgKTtcbiAgICAgIGlmIChxdWVyeS5vcGVyYXRpb24gJiYgZ2V0VGVtcGxhdGVTcnYoKS5jb250YWluc1RlbXBsYXRlKHF1ZXJ5Lm9wZXJhdGlvbikpIHtcbiAgICAgICAgb3BlcmF0aW9ucy5wdXNoKHRvT3B0aW9uKHF1ZXJ5Lm9wZXJhdGlvbikpO1xuICAgICAgfVxuICAgICAgc2V0T3BlcmF0aW9uT3B0aW9ucyhbYWxsT3BlcmF0aW9uc09wdGlvbiwgLi4ub3BlcmF0aW9uc10pO1xuICAgIH07XG4gICAgaWYgKHF1ZXJ5LnNlcnZpY2UpIHtcbiAgICAgIGdldE9wZXJhdGlvbnMoKTtcbiAgICB9XG4gIH0sIFtkYXRhc291cmNlLCBxdWVyeS5zZXJ2aWNlLCBsb2FkT3B0aW9ucywgcXVlcnkub3BlcmF0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgbWF4V2lkdGg6ICc1MDBweCcgfSl9PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJTZXJ2aWNlXCIgbGFiZWxXaWR0aD17MTR9IGdyb3c+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgaW5wdXRJZD1cInNlcnZpY2VcIlxuICAgICAgICAgICAgb3B0aW9ucz17c2VydmljZU9wdGlvbnN9XG4gICAgICAgICAgICBvbk9wZW5NZW51PXsoKSA9PiBsb2FkT3B0aW9ucygnL2FwaS9zZXJ2aWNlcycsICdzZXJ2aWNlcycpfVxuICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmcuc2VydmljZXN9XG4gICAgICAgICAgICB2YWx1ZT17c2VydmljZU9wdGlvbnM/LmZpbmQoKHYpID0+IHY/LnZhbHVlID09PSBxdWVyeS5zZXJ2aWNlKSB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiB2Py52YWx1ZSEsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBxdWVyeS5zZXJ2aWNlICE9PSB2Py52YWx1ZSA/IHVuZGVmaW5lZCA6IHF1ZXJ5Lm9wZXJhdGlvbixcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9eydzZWxlY3Qtc2VydmljZS1uYW1lJ31cbiAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIk9wZXJhdGlvblwiIGxhYmVsV2lkdGg9ezE0fSBncm93IGRpc2FibGVkPXshcXVlcnkuc2VydmljZX0+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgaW5wdXRJZD1cIm9wZXJhdGlvblwiXG4gICAgICAgICAgICBvcHRpb25zPXtvcGVyYXRpb25PcHRpb25zfVxuICAgICAgICAgICAgb25PcGVuTWVudT17KCkgPT5cbiAgICAgICAgICAgICAgbG9hZE9wdGlvbnMoXG4gICAgICAgICAgICAgICAgYC9hcGkvc2VydmljZXMvJHtlbmNvZGVVUklDb21wb25lbnQoZ2V0VGVtcGxhdGVTcnYoKS5yZXBsYWNlKHF1ZXJ5LnNlcnZpY2UhKSl9L29wZXJhdGlvbnNgLFxuICAgICAgICAgICAgICAgICdvcGVyYXRpb25zJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZy5vcGVyYXRpb25zfVxuICAgICAgICAgICAgdmFsdWU9e29wZXJhdGlvbk9wdGlvbnM/LmZpbmQoKHYpID0+IHYudmFsdWUgPT09IHF1ZXJ5Lm9wZXJhdGlvbikgfHwgbnVsbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogdj8udmFsdWUhIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9eydzZWxlY3Qtb3BlcmF0aW9uLW5hbWUnfVxuICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiVGFnc1wiIGxhYmVsV2lkdGg9ezE0fSBncm93PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgaWQ9XCJ0YWdzXCJcbiAgICAgICAgICAgIHZhbHVlPXt0cmFuc2Zvcm1Ub0xvZ2ZtdChxdWVyeS50YWdzKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cC5zdGF0dXNfY29kZT0yMDAgZXJyb3I9dHJ1ZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICB0YWdzOiB2LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8QWR2YW5jZWRPcHRpb25zIHF1ZXJ5PXtxdWVyeX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGb3JtO1xuIiwiaW1wb3J0IHsgaWRlbnRpdHksIG9taXQsIHBpY2ssIHBpY2tCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIERhdGFTb3VyY2VKc29uRGF0YSxcbiAgZGF0ZU1hdGgsXG4gIERhdGVUaW1lLFxuICBGaWVsZFR5cGUsXG4gIE11dGFibGVEYXRhRnJhbWUsXG4gIFNjb3BlZFZhcnMsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQmFja2VuZFNydlJlcXVlc3QsIGdldEJhY2tlbmRTcnYsIGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTm9kZUdyYXBoT3B0aW9ucyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvTm9kZUdyYXBoU2V0dGluZ3MnO1xuaW1wb3J0IHsgc2VyaWFsaXplUGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvZmV0Y2gnO1xuaW1wb3J0IHsgZ2V0VGltZVNydiwgVGltZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc2VydmljZXMvVGltZVNydic7XG5cbmltcG9ydCB7IEFMTF9PUEVSQVRJT05TX0tFWSB9IGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hGb3JtJztcbmltcG9ydCB7IGNyZWF0ZUdyYXBoRnJhbWVzIH0gZnJvbSAnLi9ncmFwaFRyYW5zZm9ybSc7XG5pbXBvcnQgeyBjcmVhdGVUYWJsZUZyYW1lLCBjcmVhdGVUcmFjZUZyYW1lIH0gZnJvbSAnLi9yZXNwb25zZVRyYW5zZm9ybSc7XG5pbXBvcnQgeyBKYWVnZXJRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY29udmVydFRhZ3NMb2dmbXQgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEphZWdlckpzb25EYXRhIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgbm9kZUdyYXBoPzogTm9kZUdyYXBoT3B0aW9ucztcbn1cblxuZXhwb3J0IGNsYXNzIEphZWdlckRhdGFzb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlQXBpPEphZWdlclF1ZXJ5LCBKYWVnZXJKc29uRGF0YT4ge1xuICB1cGxvYWRlZEpzb246IHN0cmluZyB8IEFycmF5QnVmZmVyIHwgbnVsbCA9IG51bGw7XG4gIG5vZGVHcmFwaD86IE5vZGVHcmFwaE9wdGlvbnM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8SmFlZ2VySnNvbkRhdGE+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGltZVNydjogVGltZVNydiA9IGdldFRpbWVTcnYoKSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KClcbiAgKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gICAgdGhpcy5ub2RlR3JhcGggPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLm5vZGVHcmFwaDtcbiAgfVxuXG4gIGFzeW5jIG1ldGFkYXRhUmVxdWVzdCh1cmw6IHN0cmluZywgcGFyYW1zPzogUmVjb3JkPHN0cmluZywgYW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLl9yZXF1ZXN0KHVybCwgcGFyYW1zLCB7IGhpZGVGcm9tSW5zcGVjdG9yOiB0cnVlIH0pKTtcbiAgICByZXR1cm4gcmVzLmRhdGEuZGF0YTtcbiAgfVxuXG4gIHF1ZXJ5KG9wdGlvbnM6IERhdGFRdWVyeVJlcXVlc3Q8SmFlZ2VyUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIC8vIEF0IHRoaXMgbW9tZW50IHdlIGV4cGVjdCBvbmx5IG9uZSB0YXJnZXQuIEluIGNhc2Ugd2Ugc29tZWhvdyBjaGFuZ2UgdGhlIFVJIHRvIGJlIGFibGUgdG8gc2hvdyBtdWx0aXBsZVxuICAgIC8vIHRyYWNlcyBhdCBvbmUgd2UgbmVlZCB0byBjaGFuZ2UgdGhpcy5cbiAgICBjb25zdCB0YXJnZXQ6IEphZWdlclF1ZXJ5ID0gb3B0aW9ucy50YXJnZXRzWzBdO1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gb2YoeyBkYXRhOiBbZW1wdHlUcmFjZURhdGFGcmFtZV0gfSk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5xdWVyeVR5cGUgIT09ICdzZWFyY2gnICYmIHRhcmdldC5xdWVyeSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoXG4gICAgICAgIGAvYXBpL3RyYWNlcy8ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LnF1ZXJ5LCBvcHRpb25zLnNjb3BlZFZhcnMpKX1gXG4gICAgICApLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCB0cmFjZURhdGEgPSByZXNwb25zZT8uZGF0YT8uZGF0YT8uWzBdO1xuICAgICAgICAgIGlmICghdHJhY2VEYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBbZW1wdHlUcmFjZURhdGFGcmFtZV0gfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGRhdGEgPSBbY3JlYXRlVHJhY2VGcmFtZSh0cmFjZURhdGEpXTtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlR3JhcGg/LmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaCguLi5jcmVhdGVHcmFwaEZyYW1lcyh0cmFjZURhdGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5xdWVyeVR5cGUgPT09ICd1cGxvYWQnKSB7XG4gICAgICBpZiAoIXRoaXMudXBsb2FkZWRKc29uKSB7XG4gICAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdIH0pO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0cmFjZURhdGEgPSBKU09OLnBhcnNlKHRoaXMudXBsb2FkZWRKc29uIGFzIHN0cmluZykuZGF0YVswXTtcbiAgICAgICAgbGV0IGRhdGEgPSBbY3JlYXRlVHJhY2VGcmFtZSh0cmFjZURhdGEpXTtcbiAgICAgICAgaWYgKHRoaXMubm9kZUdyYXBoPy5lbmFibGVkKSB7XG4gICAgICAgICAgZGF0YS5wdXNoKC4uLmNyZWF0ZUdyYXBoRnJhbWVzKHRyYWNlRGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZih7IGRhdGEgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gb2YoeyBlcnJvcjogeyBtZXNzYWdlOiAnSlNPTiBpcyBub3QgdmFsaWQgSmFlZ2VyIGZvcm1hdCcgfSwgZGF0YTogW10gfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGphZWdlckludGVycG9sYXRlZCA9IHBpY2sodGhpcy5hcHBseVZhcmlhYmxlcyh0YXJnZXQsIG9wdGlvbnMuc2NvcGVkVmFycyksIFtcbiAgICAgICdzZXJ2aWNlJyxcbiAgICAgICdvcGVyYXRpb24nLFxuICAgICAgJ3RhZ3MnLFxuICAgICAgJ21pbkR1cmF0aW9uJyxcbiAgICAgICdtYXhEdXJhdGlvbicsXG4gICAgICAnbGltaXQnLFxuICAgIF0pO1xuICAgIC8vIHJlbW92ZSBlbXB0eSBwcm9wZXJ0aWVzXG4gICAgbGV0IGphZWdlclF1ZXJ5ID0gcGlja0J5KGphZWdlckludGVycG9sYXRlZCwgaWRlbnRpdHkpO1xuXG4gICAgaWYgKGphZWdlclF1ZXJ5Lm9wZXJhdGlvbiA9PT0gQUxMX09QRVJBVElPTlNfS0VZKSB7XG4gICAgICBqYWVnZXJRdWVyeSA9IG9taXQoamFlZ2VyUXVlcnksICdvcGVyYXRpb24nKTtcbiAgICB9XG5cbiAgICBpZiAoamFlZ2VyUXVlcnkudGFncykge1xuICAgICAgamFlZ2VyUXVlcnkgPSB7XG4gICAgICAgIC4uLmphZWdlclF1ZXJ5LFxuICAgICAgICB0YWdzOiBjb252ZXJ0VGFnc0xvZ2ZtdChqYWVnZXJRdWVyeS50YWdzLnRvU3RyaW5nKCkpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiB0aGlzIGFwaSBpcyBpbnRlcm5hbCwgdXNlZCBpbiBqYWVnZXIgdWkuIE9mZmljaWFsbHkgdGhleSBoYXZlIGdSUEMgYXBpIHRoYXQgc2hvdWxkIGJlIHVzZWQuXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoYC9hcGkvdHJhY2VzYCwge1xuICAgICAgLi4uamFlZ2VyUXVlcnksXG4gICAgICAuLi50aGlzLmdldFRpbWVSYW5nZSgpLFxuICAgICAgbG9va2JhY2s6ICdjdXN0b20nLFxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YTogW2NyZWF0ZVRhYmxlRnJhbWUocmVzcG9uc2UuZGF0YS5kYXRhLCB0aGlzLmluc3RhbmNlU2V0dGluZ3MpXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzKHF1ZXJpZXM6IEphZWdlclF1ZXJ5W10sIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpOiBKYWVnZXJRdWVyeVtdIHtcbiAgICBpZiAoIXF1ZXJpZXMgfHwgcXVlcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgLi4udGhpcy5hcHBseVZhcmlhYmxlcyhxdWVyeSwgc2NvcGVkVmFycyksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlWYXJpYWJsZXMocXVlcnk6IEphZWdlclF1ZXJ5LCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKSB7XG4gICAgbGV0IGV4cGFuZGVkUXVlcnkgPSB7IC4uLnF1ZXJ5IH07XG5cbiAgICBpZiAocXVlcnkudGFncyAmJiB0aGlzLnRlbXBsYXRlU3J2LmNvbnRhaW5zVGVtcGxhdGUocXVlcnkudGFncykpIHtcbiAgICAgIGV4cGFuZGVkUXVlcnkgPSB7XG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICB0YWdzOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkudGFncywgc2NvcGVkVmFycyksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBhbmRlZFF1ZXJ5LFxuICAgICAgc2VydmljZTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnNlcnZpY2UgPz8gJycsIHNjb3BlZFZhcnMpLFxuICAgICAgb3BlcmF0aW9uOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkub3BlcmF0aW9uID8/ICcnLCBzY29wZWRWYXJzKSxcbiAgICAgIG1pbkR1cmF0aW9uOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkubWluRHVyYXRpb24gPz8gJycsIHNjb3BlZFZhcnMpLFxuICAgICAgbWF4RHVyYXRpb246IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5tYXhEdXJhdGlvbiA/PyAnJywgc2NvcGVkVmFycyksXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHRlc3REYXRhc291cmNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLl9yZXF1ZXN0KCcvYXBpL3NlcnZpY2VzJykucGlwZShcbiAgICAgICAgbWFwKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZXM6IGFueVtdID0gcmVzPy5kYXRhPy5kYXRhIHx8IFtdO1xuICAgICAgICAgIGNvbnN0IHRlc3RSZXN1bHQgPVxuICAgICAgICAgICAgdmFsdWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyB7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgY29ubmVjdGVkIGFuZCBzZXJ2aWNlcyBmb3VuZC4nIH1cbiAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICAnRGF0YSBzb3VyY2UgY29ubmVjdGVkLCBidXQgbm8gc2VydmljZXMgcmVjZWl2ZWQuIFZlcmlmeSB0aGF0IEphZWdlciBpcyBjb25maWd1cmVkIHByb3Blcmx5LicsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVzdFJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnSmFlZ2VyOiAnO1xuICAgICAgICAgIGlmIChlcnIuc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBlcnIuc3RhdHVzVGV4dDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSArPSAnQ2Fubm90IGNvbm5lY3QgdG8gSmFlZ2VyJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cykge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgLiAke2Vyci5zdGF0dXN9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXJyLmRhdGEgJiYgZXJyLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgLiAke2Vyci5kYXRhLm1lc3NhZ2V9YDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVyci5kYXRhKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAuICR7SlNPTi5zdHJpbmdpZnkoZXJyLmRhdGEpfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZih7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogbWVzc2FnZSB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0VGltZVJhbmdlKCk6IHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBnZXRUaW1lKHJhbmdlLmZyb20sIGZhbHNlKSxcbiAgICAgIGVuZDogZ2V0VGltZShyYW5nZS50bywgdHJ1ZSksXG4gICAgfTtcbiAgfVxuXG4gIGdldFF1ZXJ5RGlzcGxheVRleHQocXVlcnk6IEphZWdlclF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5LnF1ZXJ5IHx8ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdChhcGlVcmw6IHN0cmluZywgZGF0YT86IGFueSwgb3B0aW9ucz86IFBhcnRpYWw8QmFja2VuZFNydlJlcXVlc3Q+KTogT2JzZXJ2YWJsZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PiB7XG4gICAgY29uc3QgcGFyYW1zID0gZGF0YSA/IHNlcmlhbGl6ZVBhcmFtcyhkYXRhKSA6ICcnO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaW5zdGFuY2VTZXR0aW5ncy51cmx9JHthcGlVcmx9JHtwYXJhbXMubGVuZ3RoID8gYD8ke3BhcmFtc31gIDogJyd9YDtcbiAgICBjb25zdCByZXEgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdXJsLFxuICAgIH07XG5cbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpLmZldGNoKHJlcSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGltZShkYXRlOiBzdHJpbmcgfCBEYXRlVGltZSwgcm91bmRVcDogYm9vbGVhbikge1xuICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0ZSA9IGRhdGVNYXRoLnBhcnNlKGRhdGUsIHJvdW5kVXApITtcbiAgfVxuICByZXR1cm4gZGF0ZS52YWx1ZU9mKCkgKiAxMDAwO1xufVxuXG5jb25zdCBlbXB0eVRyYWNlRGF0YUZyYW1lID0gbmV3IE11dGFibGVEYXRhRnJhbWUoe1xuICBmaWVsZHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAndHJhY2UnLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnRyYWNlLFxuICAgICAgdmFsdWVzOiBbXSxcbiAgICB9LFxuICBdLFxuICBtZXRhOiB7XG4gICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICd0cmFjZScsXG4gICAgY3VzdG9tOiB7XG4gICAgICB0cmFjZUZvcm1hdDogJ2phZWdlcicsXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgRGF0YUZyYW1lLCBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIGFzIEZpZWxkcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uLCBnZXRTdGF0cywgbWFrZUZyYW1lcywgbWFrZVNwYW5NYXAgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWxzL3RyYWNpbmcnO1xuXG5pbXBvcnQgeyBTcGFuLCBUcmFjZVJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBOb2RlIHtcbiAgW0ZpZWxkcy5pZF06IHN0cmluZztcbiAgW0ZpZWxkcy50aXRsZV06IHN0cmluZztcbiAgW0ZpZWxkcy5zdWJUaXRsZV06IHN0cmluZztcbiAgW0ZpZWxkcy5tYWluU3RhdF06IHN0cmluZztcbiAgW0ZpZWxkcy5zZWNvbmRhcnlTdGF0XTogc3RyaW5nO1xuICBbRmllbGRzLmNvbG9yXTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRWRnZSB7XG4gIFtGaWVsZHMuaWRdOiBzdHJpbmc7XG4gIFtGaWVsZHMudGFyZ2V0XTogc3RyaW5nO1xuICBbRmllbGRzLnNvdXJjZV06IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdyYXBoRnJhbWVzKGRhdGE6IFRyYWNlUmVzcG9uc2UpOiBEYXRhRnJhbWVbXSB7XG4gIGNvbnN0IHsgbm9kZXMsIGVkZ2VzIH0gPSBjb252ZXJ0VHJhY2VUb0dyYXBoKGRhdGEpO1xuICBjb25zdCBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV0gPSBtYWtlRnJhbWVzKCk7XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZXNGcmFtZS5hZGQobm9kZSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGVkZ2Ugb2YgZWRnZXMpIHtcbiAgICBlZGdlc0ZyYW1lLmFkZChlZGdlKTtcbiAgfVxuXG4gIHJldHVybiBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUcmFjZVRvR3JhcGgoZGF0YTogVHJhY2VSZXNwb25zZSk6IHsgbm9kZXM6IE5vZGVbXTsgZWRnZXM6IEVkZ2VbXSB9IHtcbiAgY29uc3Qgbm9kZXM6IE5vZGVbXSA9IFtdO1xuICBjb25zdCBlZGdlczogRWRnZVtdID0gW107XG5cbiAgY29uc3QgdHJhY2VEdXJhdGlvbiA9IGZpbmRUcmFjZUR1cmF0aW9uKGRhdGEuc3BhbnMpO1xuXG4gIGNvbnN0IHNwYW5NYXAgPSBtYWtlU3Bhbk1hcCgoaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPj0gZGF0YS5zcGFucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHNwYW4gPSBkYXRhLnNwYW5zW2luZGV4XTtcbiAgICByZXR1cm4ge1xuICAgICAgc3BhbixcbiAgICAgIGlkOiBzcGFuLnNwYW5JRCxcbiAgICAgIHBhcmVudElkczogc3Bhbi5yZWZlcmVuY2VzPy5maWx0ZXIoKHIpID0+IHIucmVmVHlwZSA9PT0gJ0NISUxEX09GJykubWFwKChyKSA9PiByLnNwYW5JRCkgfHwgW10sXG4gICAgfTtcbiAgfSk7XG5cbiAgZm9yIChjb25zdCBzcGFuIG9mIGRhdGEuc3BhbnMpIHtcbiAgICBjb25zdCBwcm9jZXNzID0gZGF0YS5wcm9jZXNzZXNbc3Bhbi5wcm9jZXNzSURdO1xuXG4gICAgY29uc3QgcmFuZ2VzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPiA9IHNwYW5NYXBbc3Bhbi5zcGFuSURdLmNoaWxkcmVuLm1hcCgoYykgPT4ge1xuICAgICAgY29uc3Qgc3BhbiA9IHNwYW5NYXBbY10uc3BhbjtcbiAgICAgIHJldHVybiBbc3Bhbi5zdGFydFRpbWUsIHNwYW4uc3RhcnRUaW1lICsgc3Bhbi5kdXJhdGlvbl07XG4gICAgfSk7XG4gICAgY29uc3QgY2hpbGRyZW5EdXJhdGlvbiA9IGdldE5vbk92ZXJsYXBwaW5nRHVyYXRpb24ocmFuZ2VzKTtcbiAgICBjb25zdCBzZWxmRHVyYXRpb24gPSBzcGFuLmR1cmF0aW9uIC0gY2hpbGRyZW5EdXJhdGlvbjtcbiAgICBjb25zdCBzdGF0cyA9IGdldFN0YXRzKHNwYW4uZHVyYXRpb24gLyAxMDAwLCB0cmFjZUR1cmF0aW9uIC8gMTAwMCwgc2VsZkR1cmF0aW9uIC8gMTAwMCk7XG5cbiAgICBub2Rlcy5wdXNoKHtcbiAgICAgIFtGaWVsZHMuaWRdOiBzcGFuLnNwYW5JRCxcbiAgICAgIFtGaWVsZHMudGl0bGVdOiBwcm9jZXNzPy5zZXJ2aWNlTmFtZSA/PyAnJyxcbiAgICAgIFtGaWVsZHMuc3ViVGl0bGVdOiBzcGFuLm9wZXJhdGlvbk5hbWUsXG4gICAgICBbRmllbGRzLm1haW5TdGF0XTogc3RhdHMubWFpbixcbiAgICAgIFtGaWVsZHMuc2Vjb25kYXJ5U3RhdF06IHN0YXRzLnNlY29uZGFyeSxcbiAgICAgIFtGaWVsZHMuY29sb3JdOiBzZWxmRHVyYXRpb24gLyB0cmFjZUR1cmF0aW9uLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyZW50U3BhbklEID0gc3Bhbi5yZWZlcmVuY2VzPy5maW5kKChyKSA9PiByLnJlZlR5cGUgPT09ICdDSElMRF9PRicpPy5zcGFuSUQ7XG4gICAgLy8gU29tZXRpbWVzIHNvbWUgc3BhbiBjYW4gYmUgbWlzc2luZy4gRG9uJ3QgYWRkIGVkZ2VzIGZvciB0aG9zZS5cbiAgICBpZiAocGFyZW50U3BhbklEICYmIHNwYW5NYXBbcGFyZW50U3BhbklEXS5zcGFuKSB7XG4gICAgICBlZGdlcy5wdXNoKHtcbiAgICAgICAgW0ZpZWxkcy5pZF06IHBhcmVudFNwYW5JRCArICctLScgKyBzcGFuLnNwYW5JRCxcbiAgICAgICAgW0ZpZWxkcy50YXJnZXRdOiBzcGFuLnNwYW5JRCxcbiAgICAgICAgW0ZpZWxkcy5zb3VyY2VdOiBwYXJlbnRTcGFuSUQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBub2RlcywgZWRnZXMgfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGR1cmF0aW9uIG9mIHRoZSB3aG9sZSB0cmFjZSBhcyBpdCBpc24ndCBhIHBhcnQgb2YgdGhlIHJlc3BvbnNlIGRhdGEuXG4gKiBOb3RlOiBTZWVtcyBsaWtlIHRoaXMgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIGp1c3QgbG9uZ2VzdCBzcGFuLCBidXQgdGhpcyBpcyBwcm9iYWJseSBzYWZlci5cbiAqL1xuZnVuY3Rpb24gZmluZFRyYWNlRHVyYXRpb24oc3BhbnM6IFNwYW5bXSk6IG51bWJlciB7XG4gIGxldCB0cmFjZUVuZFRpbWUgPSAwO1xuICBsZXQgdHJhY2VTdGFydFRpbWUgPSBJbmZpbml0eTtcblxuICBmb3IgKGNvbnN0IHNwYW4gb2Ygc3BhbnMpIHtcbiAgICBpZiAoc3Bhbi5zdGFydFRpbWUgPCB0cmFjZVN0YXJ0VGltZSkge1xuICAgICAgdHJhY2VTdGFydFRpbWUgPSBzcGFuLnN0YXJ0VGltZTtcbiAgICB9XG5cbiAgICBpZiAoc3Bhbi5zdGFydFRpbWUgKyBzcGFuLmR1cmF0aW9uID4gdHJhY2VFbmRUaW1lKSB7XG4gICAgICB0cmFjZUVuZFRpbWUgPSBzcGFuLnN0YXJ0VGltZSArIHNwYW4uZHVyYXRpb247XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRyYWNlRW5kVGltZSAtIHRyYWNlU3RhcnRUaW1lO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBDb25maWdFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IEphZWdlckRhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW4oSmFlZ2VyRGF0YXNvdXJjZSkuc2V0Q29uZmlnRWRpdG9yKENvbmZpZ0VkaXRvcikuc2V0UXVlcnlFZGl0b3IoUXVlcnlFZGl0b3IpO1xuIiwiaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRmllbGRUeXBlLFxuICBNdXRhYmxlRGF0YUZyYW1lLFxuICBUcmFjZUxvZyxcbiAgVHJhY2VTcGFuUm93LFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHRyYW5zZm9ybVRyYWNlRGF0YSB9IGZyb20gJ0BqYWVnZXJ0cmFjaW5nL2phZWdlci11aS1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgSmFlZ2VyUmVzcG9uc2UsIFNwYW4sIFRyYWNlUHJvY2VzcywgVHJhY2VSZXNwb25zZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhY2VGcmFtZShkYXRhOiBUcmFjZVJlc3BvbnNlKTogRGF0YUZyYW1lIHtcbiAgY29uc3Qgc3BhbnMgPSBkYXRhLnNwYW5zLm1hcCgocykgPT4gdG9TcGFuUm93KHMsIGRhdGEucHJvY2Vzc2VzKSk7XG5cbiAgY29uc3QgZnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7IG5hbWU6ICd0cmFjZUlEJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc3BhbklEJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAncGFyZW50U3BhbklEJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnb3BlcmF0aW9uTmFtZScsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogJ3NlcnZpY2VOYW1lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc2VydmljZVRhZ3MnLCB0eXBlOiBGaWVsZFR5cGUub3RoZXIgfSxcbiAgICAgIHsgbmFtZTogJ3N0YXJ0VGltZScsIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIgfSxcbiAgICAgIHsgbmFtZTogJ2R1cmF0aW9uJywgdHlwZTogRmllbGRUeXBlLm51bWJlciB9LFxuICAgICAgeyBuYW1lOiAnbG9ncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgICAgeyBuYW1lOiAndGFncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgICAgeyBuYW1lOiAnd2FybmluZ3MnLCB0eXBlOiBGaWVsZFR5cGUub3RoZXIgfSxcbiAgICAgIHsgbmFtZTogJ3N0YWNrVHJhY2VzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICB0cmFjZUZvcm1hdDogJ2phZWdlcicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGZvciAoY29uc3Qgc3BhbiBvZiBzcGFucykge1xuICAgIGZyYW1lLmFkZChzcGFuKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gdG9TcGFuUm93KHNwYW46IFNwYW4sIHByb2Nlc3NlczogUmVjb3JkPHN0cmluZywgVHJhY2VQcm9jZXNzPik6IFRyYWNlU3BhblJvdyB7XG4gIHJldHVybiB7XG4gICAgc3BhbklEOiBzcGFuLnNwYW5JRCxcbiAgICB0cmFjZUlEOiBzcGFuLnRyYWNlSUQsXG4gICAgcGFyZW50U3BhbklEOiBzcGFuLnJlZmVyZW5jZXM/LmZpbmQoKHIpID0+IHIucmVmVHlwZSA9PT0gJ0NISUxEX09GJyk/LnNwYW5JRCxcbiAgICBvcGVyYXRpb25OYW1lOiBzcGFuLm9wZXJhdGlvbk5hbWUsXG4gICAgLy8gZnJvbSBtaWNybyB0byBtaWxsaXNcbiAgICBzdGFydFRpbWU6IHNwYW4uc3RhcnRUaW1lIC8gMTAwMCxcbiAgICBkdXJhdGlvbjogc3Bhbi5kdXJhdGlvbiAvIDEwMDAsXG4gICAgbG9nczogc3Bhbi5sb2dzLm1hcCgobCkgPT4gKHtcbiAgICAgIC4uLmwsXG4gICAgICB0aW1lc3RhbXA6IGwudGltZXN0YW1wIC8gMTAwMCxcbiAgICB9KSksXG4gICAgdGFnczogc3Bhbi50YWdzLFxuICAgIHdhcm5pbmdzOiBzcGFuLndhcm5pbmdzID8/IHVuZGVmaW5lZCxcbiAgICBzdGFja1RyYWNlczogc3Bhbi5zdGFja1RyYWNlcyxcbiAgICBzZXJ2aWNlTmFtZTogcHJvY2Vzc2VzW3NwYW4ucHJvY2Vzc0lEXS5zZXJ2aWNlTmFtZSxcbiAgICBzZXJ2aWNlVGFnczogcHJvY2Vzc2VzW3NwYW4ucHJvY2Vzc0lEXS50YWdzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVGcmFtZShkYXRhOiBUcmFjZVJlc3BvbnNlW10sIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKTogRGF0YUZyYW1lIHtcbiAgY29uc3QgZnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0cmFjZUlEJyxcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgdW5pdDogJ3N0cmluZycsXG4gICAgICAgICAgZGlzcGxheU5hbWVGcm9tRFM6ICdUcmFjZSBJRCcsXG4gICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdUcmFjZTogJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IGluc3RhbmNlU2V0dGluZ3MudWlkLFxuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiBpbnN0YW5jZVNldHRpbmdzLm5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgeyBuYW1lOiAndHJhY2VOYW1lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZywgY29uZmlnOiB7IGRpc3BsYXlOYW1lRnJvbURTOiAnVHJhY2UgbmFtZScgfSB9LFxuICAgICAgeyBuYW1lOiAnc3RhcnRUaW1lJywgdHlwZTogRmllbGRUeXBlLnRpbWUsIGNvbmZpZzogeyBkaXNwbGF5TmFtZUZyb21EUzogJ1N0YXJ0IHRpbWUnIH0gfSxcbiAgICAgIHsgbmFtZTogJ2R1cmF0aW9uJywgdHlwZTogRmllbGRUeXBlLm51bWJlciwgY29uZmlnOiB7IGRpc3BsYXlOYW1lRnJvbURTOiAnRHVyYXRpb24nLCB1bml0OiAnwrVzJyB9IH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RhYmxlJyxcbiAgICB9LFxuICB9KTtcbiAgLy8gU2hvdyB0aGUgbW9zdCByZWNlbnQgdHJhY2VzXG4gIGNvbnN0IHRyYWNlRGF0YSA9IGRhdGEubWFwKHRyYW5zZm9ybVRvVHJhY2VEYXRhKS5zb3J0KChhLCBiKSA9PiBiPy5zdGFydFRpbWUhIC0gYT8uc3RhcnRUaW1lISk7XG5cbiAgZm9yIChjb25zdCB0cmFjZSBvZiB0cmFjZURhdGEpIHtcbiAgICBmcmFtZS5hZGQodHJhY2UpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ub1RyYWNlRGF0YShkYXRhOiBUcmFjZVJlc3BvbnNlKSB7XG4gIGNvbnN0IHRyYWNlRGF0YSA9IHRyYW5zZm9ybVRyYWNlRGF0YShkYXRhKTtcbiAgaWYgKCF0cmFjZURhdGEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRyYWNlSUQ6IHRyYWNlRGF0YS50cmFjZUlELFxuICAgIHN0YXJ0VGltZTogdHJhY2VEYXRhLnN0YXJ0VGltZSAvIDEwMDAsXG4gICAgZHVyYXRpb246IHRyYWNlRGF0YS5kdXJhdGlvbixcbiAgICB0cmFjZU5hbWU6IHRyYWNlRGF0YS50cmFjZU5hbWUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub0phZWdlcihkYXRhOiBNdXRhYmxlRGF0YUZyYW1lKTogSmFlZ2VyUmVzcG9uc2Uge1xuICBsZXQgdHJhY2VSZXNwb25zZTogVHJhY2VSZXNwb25zZSA9IHtcbiAgICB0cmFjZUlEOiAnJyxcbiAgICBzcGFuczogW10sXG4gICAgcHJvY2Vzc2VzOiB7fSxcbiAgICB3YXJuaW5nczogbnVsbCxcbiAgfTtcbiAgbGV0IHByb2Nlc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzcGFuID0gZGF0YS5nZXQoaSk7XG5cbiAgICAvLyBTZXQgdHJhY2VJRFxuICAgIGlmICghdHJhY2VSZXNwb25zZS50cmFjZUlEKSB7XG4gICAgICB0cmFjZVJlc3BvbnNlLnRyYWNlSUQgPSBzcGFuLnRyYWNlSUQ7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHByb2Nlc3MgaWYgZG9lc24ndCBleGlzdFxuICAgIGlmICghcHJvY2Vzc2VzLmZpbmQoKHApID0+IHAgPT09IHNwYW4uc2VydmljZU5hbWUpKSB7XG4gICAgICBwcm9jZXNzZXMucHVzaChzcGFuLnNlcnZpY2VOYW1lKTtcbiAgICAgIHRyYWNlUmVzcG9uc2UucHJvY2Vzc2VzW2BwJHtwcm9jZXNzZXMubGVuZ3RofWBdID0ge1xuICAgICAgICBzZXJ2aWNlTmFtZTogc3Bhbi5zZXJ2aWNlTmFtZSxcbiAgICAgICAgdGFnczogc3Bhbi5zZXJ2aWNlVGFncyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHNwYW5cbiAgICB0cmFjZVJlc3BvbnNlLnNwYW5zLnB1c2goe1xuICAgICAgdHJhY2VJRDogc3Bhbi50cmFjZUlELFxuICAgICAgc3BhbklEOiBzcGFuLnNwYW5JRCxcbiAgICAgIGR1cmF0aW9uOiBzcGFuLmR1cmF0aW9uICogMTAwMCxcbiAgICAgIHJlZmVyZW5jZXM6IHNwYW4ucGFyZW50U3BhbklEXG4gICAgICAgID8gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWZUeXBlOiAnQ0hJTERfT0YnLFxuICAgICAgICAgICAgICBzcGFuSUQ6IHNwYW4ucGFyZW50U3BhbklELFxuICAgICAgICAgICAgICB0cmFjZUlEOiBzcGFuLnRyYWNlSUQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSxcbiAgICAgIGZsYWdzOiAwLFxuICAgICAgbG9nczogc3Bhbi5sb2dzLm1hcCgobDogVHJhY2VMb2cpID0+ICh7XG4gICAgICAgIC4uLmwsXG4gICAgICAgIHRpbWVzdGFtcDogbC50aW1lc3RhbXAgKiAxMDAwLFxuICAgICAgfSkpLFxuICAgICAgb3BlcmF0aW9uTmFtZTogc3Bhbi5vcGVyYXRpb25OYW1lLFxuICAgICAgcHJvY2Vzc0lEOlxuICAgICAgICBPYmplY3Qua2V5cyh0cmFjZVJlc3BvbnNlLnByb2Nlc3NlcykuZmluZChcbiAgICAgICAgICAoa2V5KSA9PiB0cmFjZVJlc3BvbnNlLnByb2Nlc3Nlc1trZXldLnNlcnZpY2VOYW1lID09PSBzcGFuLnNlcnZpY2VOYW1lXG4gICAgICAgICkgfHwgJycsXG4gICAgICBzdGFydFRpbWU6IHNwYW4uc3RhcnRUaW1lICogMTAwMCxcbiAgICAgIHRhZ3M6IHNwYW4udGFncyxcbiAgICAgIHdhcm5pbmdzOiBzcGFuLndhcm5pbmdzID8gc3Bhbi53YXJuaW5ncyA6IG51bGwsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4geyBkYXRhOiBbdHJhY2VSZXNwb25zZV0sIHRvdGFsOiAwLCBsaW1pdDogMCwgb2Zmc2V0OiAwLCBlcnJvcnM6IG51bGwgfTtcbn1cbiIsImltcG9ydCBsb2dmbXQgZnJvbSAnbG9nZm10JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUYWdzTG9nZm10KHRhZ3M6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICBpZiAoIXRhZ3MpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3QgZGF0YTogYW55ID0gbG9nZm10LnBhcnNlKHRhZ3MpO1xuICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgZGF0YVtrZXldID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub0xvZ2ZtdCh0YWdzOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgaWYgKCF0YWdzKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIGxvZ2ZtdC5zdHJpbmdpZnkoSlNPTi5wYXJzZSh0YWdzKSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB0YWdzO1xuICB9XG59XG4iLCJcbi8qXG5Nb2R1bGUgZGVwZW5kZW5jaWVzLlxuKi9cblxuLypcbkpTT046XG5cblBhcnNlIGxvZ3BsZXggcmVxdWVzdCBib2RpZXMsIHByb3ZpZGluZyB0aGVcbnBhcnNlZCBvYmplY3QgYXMgYHJlcS5ib2R5YC5cblxuT3B0aW9uczogbm9uZVxuXG5AcGFyYW0gY29udGVudF90eXBlIHtTdHJpbmd9IHVzZSB3aGVuIENvbnRlbnQtVHlwZSBtYXRjaGVzIHRoaXMgc3RyaW5nXG5AcGFyYW0gcGFyc2VyIHtGdW5jdGlvbn0gcGFyc2luZyBmdW5jdGlvbiB0YWtlcyBTdHJpbmcgYm9keSBhbmQgcmV0dXJucyBuZXcgYm9keVxuQHJldHVybiB7RnVuY3Rpb259XG5AYXBpIHB1YmxpY1xuKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgbGltaXQ7XG4gIGlmIChvcHRpb25zID09IG51bGwpIG9wdGlvbnMgPSB7fTtcblxuICByZXR1cm4gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICBpZiAocmVxLl9ib2R5KSByZXR1cm4gbmV4dCgpO1xuICAgIHZhciBpc19taW1lID0gcmVxLmhlYWRlcignY29udGVudC10eXBlJykgPT09IG9wdGlvbnMuY29udGVudFR5cGU7XG4gICAgaWYgKCFpc19taW1lKSByZXR1cm4gbmV4dCgpO1xuICAgIHJlcS5fYm9keSA9IHRydWU7XG4gICAgcmVxLmJvZHkgPSByZXEuYm9keSB8fCB7fTtcbiAgICB2YXIgYnVmO1xuICAgIGJ1ZiA9IFwiXCI7XG4gICAgcmVxLnNldEVuY29kaW5nKFwidXRmOFwiKTtcbiAgICByZXEub24oXCJkYXRhXCIsIGZ1bmN0aW9uKGNodW5rKSB7XG4gICAgICByZXR1cm4gYnVmICs9IGNodW5rO1xuICAgIH0pO1xuICAgIHJlcS5vbihcImVuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBsaW5lcyA9IFtdXG4gICAgICAgIGJ1Zi50cmltKCkuc3BsaXQoXCJcXG5cIikuZm9yRWFjaChmdW5jdGlvbihsaW5lKXtcbiAgICAgICAgICBsaW5lcy5wdXNoKG9wdGlvbnMucGFyc2VyKGxpbmUpKVxuICAgICAgICB9KVxuICAgICAgICByZXEuYm9keSA9IGxpbmVzO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVyci5ib2R5ID0gYnVmO1xuICAgICAgICBlcnIuc3RhdHVzID0gNDAwO1xuICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJ2YXIgc3BsaXQgPSByZXF1aXJlKCdzcGxpdCcpO1xudmFyIHRocm91Z2ggPSByZXF1aXJlKCd0aHJvdWdoJyk7XG52YXIgUmVhZGFibGUgPSByZXF1aXJlKCdzdHJlYW0nKS5SZWFkYWJsZTtcbnZhciBQYXNzVGhyb3VnaCA9IHJlcXVpcmUoJ3N0cmVhbScpLlBhc3NUaHJvdWdoO1xudmFyIGxvZ2ZtdCAgID0gcmVxdWlyZSgnLi4vbG9nZm10Jyk7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBpZihvcHRpb25zID09IG51bGwpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIG1pbWUgPSBvcHRpb25zLmNvbnRlbnRUeXBlIHx8IFwiYXBwbGljYXRpb24vbG9ncGxleC0xXCI7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG5cbiAgICAvL2hvbm9yIGFscmVhZHkgcGFyc2VkIGJvZGllc1xuICAgIGlmIChyZXEuX2JvZHkpIHJldHVybiBuZXh0KCk7XG5cbiAgICAvL21pbWUtdHlwZSBjaGVja1xuICAgIHZhciBpc19taW1lID0gcmVxLmhlYWRlcignY29udGVudC10eXBlJykgPT09IG1pbWU7XG4gICAgaWYgKCFpc19taW1lKSByZXR1cm4gbmV4dCgpO1xuICAgIHJlcS5fYm9keSA9IHRydWU7XG4gICAgcmVxLmJvZHkgPSBuZXcgUGFzc1Rocm91Z2goe29iamVjdE1vZGU6IHRydWV9KTtcbiAgICByZXEucGlwZShsb2dmbXQuc3RyZWFtUGFyc2VyKCkpLnBpcGUocmVxLmJvZHkpO1xuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxufVxuXG4iLCJleHBvcnRzLmRlYnVnID0gZmFsc2U7XG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBrZXkgPSAnJztcbiAgdmFyIHZhbHVlID0gJyc7XG4gIHZhciBpc19udW1iZXIgPSB0cnVlO1xuICB2YXIgaW5fa2V5ICAgID0gZmFsc2U7XG4gIHZhciBpbl92YWx1ZSAgPSBmYWxzZTtcbiAgdmFyIGluX3F1b3RlICA9IGZhbHNlO1xuICB2YXIgaGFkX3F1b3RlID0gZmFsc2U7XG4gIHZhciBvYmplY3QgICAgPSB7fTtcbiAgdmFyIGRlYnVnICAgICA9IGV4cG9ydHMuZGVidWc7XG5cbiAgaWYobGluZVtsaW5lLmxlbmd0aCAtIDFdID09ICdcXG4nKXtcbiAgICBsaW5lID0gbGluZS5zbGljZSgwLGxpbmUubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIGZvcih2YXIgaT0wOyBpIDw9IGxpbmUubGVuZ3RoOyBpKyspe1xuXG4gICAgaWYoKGxpbmVbaV0gPT0gJyAnICYmICFpbl9xdW90ZSkgfHwgaSA9PSBsaW5lLmxlbmd0aCl7XG4gICAgICBpZihpbl9rZXkgJiYga2V5Lmxlbmd0aCA+IDApe1xuICAgICAgICBvYmplY3Rba2V5XSA9IHRydWU7XG4gICAgICB9ZWxzZSBpZihpbl92YWx1ZSl7XG4gICAgICAgIGlmKHZhbHVlID09ICd0cnVlJykgdmFsdWUgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmKHZhbHVlID09ICdmYWxzZScpIHZhbHVlID0gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYodmFsdWUgPT09ICcnICYmICFoYWRfcXVvdGUpIHZhbHVlID0gbnVsbDtcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYoaSA9PSBsaW5lLmxlbmd0aCkgYnJlYWs7XG4gICAgICBlbHNlIHtcbiAgICAgICAgaW5fa2V5ICAgPSBmYWxzZTtcbiAgICAgICAgaW5fdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgaW5fcXVvdGUgPSBmYWxzZTtcbiAgICAgICAgaGFkX3F1b3RlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYobGluZVtpXSA9PSAnPScgJiYgIWluX3F1b3RlKXtcbiAgICAgIGlmKGRlYnVnKSBjb25zb2xlLmxvZygnc3BsaXQnKVxuICAgICAgLy9zcGxpdFxuICAgICAgaW5fa2V5ID0gZmFsc2U7XG4gICAgICBpbl92YWx1ZSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYobGluZVtpXSA9PSAnXFxcXCcpe1xuICAgICAgaSArKyA7XG4gICAgICB2YWx1ZSArPSBsaW5lW2ldO1xuICAgICAgaWYoZGVidWcpIGNvbnNvbGUubG9nKCdlc2NhcGU6ICcgKyBsaW5lW2ldKVxuICAgIH1cbiAgICBlbHNlIGlmKGxpbmVbaV0gPT0gJ1wiJyl7XG4gICAgICBoYWRfcXVvdGUgPSB0cnVlO1xuICAgICAgaW5fcXVvdGUgPSAhaW5fcXVvdGU7XG4gICAgICBpZihkZWJ1ZykgY29uc29sZS5sb2coJ2luIHF1b3RlOiAnICsgaW5fcXVvdGUpXG4gICAgfVxuICAgIGVsc2UgaWYobGluZVtpXSAhPSAnICcgJiYgIWluX3ZhbHVlICYmICFpbl9rZXkpe1xuICAgICAgaWYoZGVidWcpIGNvbnNvbGUubG9nKCdzdGFydCBrZXkgd2l0aDogJyArIGxpbmVbaV0pXG4gICAgICBpbl9rZXkgPSB0cnVlO1xuICAgICAga2V5ID0gbGluZVtpXTtcbiAgICB9XG4gICAgZWxzZSBpZihpbl9rZXkpe1xuICAgICAgaWYoZGVidWcpIGNvbnNvbGUubG9nKCdhZGQgdG8ga2V5OiAnICsgbGluZVtpXSlcbiAgICAgIGtleSArPSBsaW5lW2ldXG4gICAgfVxuICAgIGVsc2UgaWYoaW5fdmFsdWUpe1xuICAgICAgaWYoZGVidWcpIGNvbnNvbGUubG9nKCdhZGQgdG8gdmFsdWU6ICcgKyBsaW5lW2ldKVxuICAgICAgdmFsdWUgKz0gbGluZVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuIiwiZXhwb3J0cy5sb2cgPSBmdW5jdGlvbihkYXRhLCBzdHJlYW0pIHtcbiAgdGhpcy5zdHJlYW0gPSB0aGlzLnN0cmVhbSB8fCBwcm9jZXNzLnN0ZG91dDtcbiAgaWYoc3RyZWFtID09IHVuZGVmaW5lZCkgc3RyZWFtID0gdGhpcy5zdHJlYW07XG5cbiAgdmFyIGxvZ0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHREYXRhLCBkYXRhKTtcblxuICBpZih0aGlzLnRpbWVycyl7XG4gICAgZm9yKHZhciBrZXkgaW4gdGhpcy50aW1lcnMpe1xuICAgICAgdmFyIG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgIGxvZ0RhdGFba2V5XSA9IChub3cgLSB0aGlzLnRpbWVyc1trZXldKS50b1N0cmluZygpICsgJ21zJyA7XG4gICAgfVxuICB9XG5cbiAgc3RyZWFtLndyaXRlKHRoaXMuc3RyaW5naWZ5KGxvZ0RhdGEpICsgXCJcXG5cIik7XG59XG5cbmV4cG9ydHMudGltZSA9IGZ1bmN0aW9uKGxhYmVsKSB7XG4gIHZhciBsb2dmbXQgPSByZXF1aXJlKCcuLi9sb2dmbXQnKTtcbiAgdmFyIHN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gIHZhciBsYWJlbCAgPSBsYWJlbCB8fCAnZWxhcHNlZCc7XG4gIHZhciB0aW1lciAgPSBuZXcgbG9nZm10KCk7XG4gIHRpbWVyLnN0cmVhbSA9IHRoaXMuc3RyZWFtO1xuICB0aW1lci5kZWZhdWx0RGF0YSA9IHRoaXMuZGVmYXVsdERhdGE7XG4gIHRpbWVyLnRpbWVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGltZXJzKVxuICB0aW1lci50aW1lcnNbbGFiZWxdID0gc3RhcnRUaW1lO1xuICByZXR1cm4gdGltZXI7XG59XG5cbmV4cG9ydHMubmFtZXNwYWNlID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBsb2dmbXQgPSByZXF1aXJlKCcuLi9sb2dmbXQnKTtcbiAgdmFyIG5hbWVzcGFjZWQgPSBuZXcgbG9nZm10KClcbiAgdmFyIG5hbWVzcGFjZSAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHREYXRhLCBvYmplY3QpO1xuICBuYW1lc3BhY2VkLnN0cmVhbSA9IHRoaXMuc3RyZWFtO1xuICBuYW1lc3BhY2VkLmRlZmF1bHREYXRhID0gbmFtZXNwYWNlXG4gIG5hbWVzcGFjZWQudGltZXJzID0gdGhpcy50aW1lcnM7XG4gIHJldHVybiBuYW1lc3BhY2VkO1xufVxuXG5leHBvcnRzLmVycm9yID0gZnVuY3Rpb24oZXJyLCBpZCkge1xuICB0aGlzLm1heEVycm9yTGluZXMgPSB0aGlzLm1heEVycm9yTGluZXMgfHwgMTA7XG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwgMTIpO1xuICB9XG4gIHZhciBlcnJvckxvZ2dlciA9IHRoaXMubmFtZXNwYWNlKHtcbiAgICBlcnJvcjogdHJ1ZSxcbiAgICBpZDppZCxcbiAgICBub3c6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpXG4gIH0pXG4gIGVycm9yTG9nZ2VyLmxvZyh7IG1lc3NhZ2U6ZXJyLm1lc3NhZ2UgfSk7XG4gIGlmIChlcnIuc3RhY2spIHtcbiAgICB2YXIgc3RhY2sgPSBlcnIuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgIGZvciAodmFyIGxpbmUgaW4gc3RhY2spIHtcbiAgICAgIGlmIChsaW5lID49IHRoaXMubWF4RXJyb3JMaW5lcykgYnJlYWs7XG4gICAgICBlcnJvckxvZ2dlci5sb2coeyBsaW5lOmxpbmUsIHRyYWNlOnN0YWNrW2xpbmVdIH0pO1xuICAgIH1cbiAgfVxufVxuIiwidmFyIGNvbW1vbkZvcm1hdHRlciA9IGZ1bmN0aW9uKHJlcSwgcmVzKXtcbiAgaWYoKHR5cGVvZiByZXEucGF0aCkgPT0gJ2Z1bmN0aW9uJyl7XG4gICAgLy9pbiByZXN0aWZ5IHBhdGggaXMgYSBmdW5jdGlvblxuICAgIHZhciBwYXRoID0gcmVxLnBhdGgoKTtcbiAgfVxuICBlbHNle1xuICAgIC8vaW4gZXhwcmVzcyBpdCBpcyBhbiBhdHRyaWJ1dGVcbiAgICB2YXIgcGF0aCA9IHJlcS5vcmlnaW5hbFVybCB8fCByZXEucGF0aCB8fCByZXEudXJsO1xuICB9XG5cbiAgdmFyIGh0dHBIZWFkZXIgPSByZXEuaGVhZGVyICYmIHJlcS5oZWFkZXIoJ3gtZm9yd2FyZGVkLWZvcicpXG4gIHZhciByZXF1ZXN0SUQgID0gcmVxLmhlYWRlciAmJiByZXEuaGVhZGVyKCd4LXJlcXVlc3QtaWQnKVxuXG4gIHZhciBpcCA9IHJlcS5pcCB8fCBodHRwSGVhZGVyXG4gICAgICAgICAgICAgICAgICB8fCByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzO1xuXG4gIHZhciByZXF1ZXN0RGF0YSA9ICB7XG4gICAgaXA6IGlwLFxuICAgIHRpbWU6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLFxuICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcbiAgICBwYXRoOiBwYXRoLFxuICAgIFwic3RhdHVzXCI6IHJlcy5zdGF0dXNDb2RlLFxuICB9XG5cbiAgaWYgKHJlcXVlc3RJRCkge1xuICAgIHJlcXVlc3REYXRhLnJlcXVlc3RfaWQgPSByZXF1ZXN0SUQ7XG4gIH1cblxuICBpZihyZXMuZ2V0KXtcbiAgICByZXF1ZXN0RGF0YS5jb250ZW50X2xlbmd0aCA9IHJlcy5nZXQoJ2NvbnRlbnQtbGVuZ3RoJyk7XG4gICAgcmVxdWVzdERhdGEuY29udGVudF90eXBlID0gcmVzLmdldCgnY29udGVudC10eXBlJyk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3REYXRhO1xufVxuXG52YXIgaW1tZWRpYXRlTG9nZ2VyID0gZnVuY3Rpb24obG9nZ2VyLCBvcHRpb25zLCBmb3JtYXR0ZXIpe1xuICByZXR1cm4gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpe1xuICAgIHZhciBkYXRhID0gZm9ybWF0dGVyKHJlcSwgcmVzKTtcbiAgICBsb2dnZXIubG9nKGRhdGEpO1xuICAgIG5leHQoKTtcbiAgfVxufVxuXG52YXIgdGltaW5nTG9nZ2VyID0gZnVuY3Rpb24obG9nZ2VyLCBvcHRpb25zLCBmb3JtYXR0ZXIpe1xuICByZXR1cm4gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpe1xuICAgIHZhciBlbGFwc2VkID0gb3B0aW9ucy5lbGFwc2VkIHx8ICdlbGFwc2VkJztcbiAgICB2YXIgdGltZXIgICA9IGxvZ2dlci50aW1lKGVsYXBzZWQpO1xuICAgIHZhciBlbmQgPSByZXMuZW5kO1xuICAgIHJlcy5lbmQgPSBmdW5jdGlvbihjaHVuaywgZW5jb2RpbmcpIHtcbiAgICAgIHZhciBkYXRhID0gZm9ybWF0dGVyKHJlcSwgcmVzKTtcbiAgICAgIHJlcy5lbmQgPSBlbmQ7XG4gICAgICByZXMuZW5kKGNodW5rLCBlbmNvZGluZyk7XG4gICAgICB0aW1lci5sb2coZGF0YSk7XG4gICAgfTtcbiAgICBuZXh0KCk7XG4gIH1cbn1cblxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24obG9nZ2VyLCBvcHRpb25zLCBmb3JtYXR0ZXIpIHtcbiAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cbiAgaWYoIWZvcm1hdHRlciAmJiAhb3B0aW9ucyl7XG4gICAgZm9ybWF0dGVyID0gY29tbW9uRm9ybWF0dGVyO1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBlbHNlIGlmKCFmb3JtYXR0ZXIpe1xuICAgIGlmKHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicpe1xuICAgICAgZm9ybWF0dGVyID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9ZWxzZXtcbiAgICAgIGZvcm1hdHRlciA9IGNvbW1vbkZvcm1hdHRlcjtcbiAgICB9XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYob3B0aW9ucy5pbW1lZGlhdGUpe1xuICAgIHJldHVybiBpbW1lZGlhdGVMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmb3JtYXR0ZXIpO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdGltaW5nTG9nZ2VyKGxvZ2dlciwgb3B0aW9ucywgZm9ybWF0dGVyKTtcbiAgfVxufVxuXG5leHBvcnRzLmNvbW1vbkZvcm1hdHRlciA9IGNvbW1vbkZvcm1hdHRlcjtcbiIsInZhciBzcGxpdCAgICAgICA9IHJlcXVpcmUoJ3NwbGl0JylcbnZhciB0aHJvdWdoICAgICA9IHJlcXVpcmUoJ3Rocm91Z2gnKTtcbnZhciBQYXNzVGhyb3VnaCA9IHJlcXVpcmUoJ3N0cmVhbScpLlBhc3NUaHJvdWdoO1xuXG4vL3JldHVybnMgYSBzdHJlYW0gdGhhdCBzcGxpdHMgYW5kIHBhcnNlcyBsb2dmbXQgaW50byBvYmplY3RzXG5leHBvcnRzLnN0cmVhbVBhcnNlciA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICB2YXIgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHN0cmVhbVBhcnNlciA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIGxvZ2ZtdFN0cmVhbSA9IHRocm91Z2goZnVuY3Rpb24obGluZSl7XG4gICAgaWYobGluZSAhPT0gJycpIHRoaXMucXVldWUoc2VsZi5wYXJzZShsaW5lKSlcbiAgfSlcblxuICAvLyBXaGVuIGEgc291cmNlIHN0cmVhbSBpcyBwaXBlZCB0byB1cywgdW5kbyB0aGF0IHBpcGUsIGFuZCBzYXZlXG4gIC8vIG9mZiB0aGUgc291cmNlIHN0cmVhbSBwaXBlZCBpbnRvIG91ciBpbnRlcm5hbGx5IG1hbmFnZWQgc3RyZWFtcy5cbiAgc3RyZWFtUGFyc2VyLm9uKCdwaXBlJywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgaWYoc291cmNlLnVucGlwZSkgc291cmNlLnVucGlwZSh0aGlzKTtcbiAgICB0aGlzLnRyYW5zZm9ybVN0cmVhbSA9IHNvdXJjZS5waXBlKHNwbGl0KCkpLnBpcGUobG9nZm10U3RyZWFtKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB3ZSdyZSBwaXBlZCB0byBhbm90aGVyIHN0cmVhbSwgaW5zdGVhZCBwaXBlIG91ciBpbnRlcm5hbFxuICAvLyB0cmFuc2Zvcm0gc3RyZWFtIHRvIHRoYXQgZGVzdGluYXRpb24uXG4gIHN0cmVhbVBhcnNlci5waXBlID0gZnVuY3Rpb24oZGVzdGluYXRpb24sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1TdHJlYW0ucGlwZShkZXN0aW5hdGlvbiwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIHN0cmVhbVBhcnNlcjtcbn1cblxuLy8gcmV0dXJucyBhIHN0cmVhbSB0aGF0IHN0cmluZ2lmaWVzIG9iamVjdHNcbmV4cG9ydHMuc3RyZWFtU3RyaW5naWZ5ID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KCdkZWxpbWl0ZXInKSl7XG4gICAgdmFyIGRlbGltID0gb3B0aW9ucy5kZWxpbWl0ZXI7XG4gIH1lbHNle1xuICAgIHZhciBkZWxpbSA9IFwiXFxuXCI7XG4gIH1cblxuICByZXR1cm4gdGhyb3VnaChmdW5jdGlvbihkYXRhKXtcbiAgICB0aGlzLnF1ZXVlKHNlbGYuc3RyaW5naWZ5KGRhdGEpICsgZGVsaW0pXG4gIH0sIGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5xdWV1ZShudWxsKVxuICB9KVxufVxuIiwiZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIGxpbmUgPSAnJztcblxuICBmb3IodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xuICAgIHZhciBpc19udWxsID0gZmFsc2U7XG4gICAgaWYodmFsdWUgPT0gbnVsbCkge1xuICAgICAgaXNfbnVsbCA9IHRydWU7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBlbHNlIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcblxuICAgIHZhciBuZWVkc19xdW90aW5nICA9IHZhbHVlLmluZGV4T2YoJyAnKSA+IC0xIHx8IHZhbHVlLmluZGV4T2YoJz0nKSA+IC0xO1xuICAgIHZhciBuZWVkc19lc2NhcGluZyA9IHZhbHVlLmluZGV4T2YoJ1wiJykgPiAtMSB8fCB2YWx1ZS5pbmRleE9mKFwiXFxcXFwiKSA+IC0xO1xuXG4gICAgaWYobmVlZHNfZXNjYXBpbmcpIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1wiXFxcXF0vZywgJ1xcXFwkJicpO1xuICAgIGlmKG5lZWRzX3F1b3RpbmcpIHZhbHVlID0gJ1wiJyArIHZhbHVlICsgJ1wiJztcbiAgICBpZih2YWx1ZSA9PT0gJycgJiYgIWlzX251bGwpIHZhbHVlID0gJ1wiXCInO1xuXG4gICAgbGluZSArPSBrZXkgKyAnPScgKyB2YWx1ZSArICcgJztcbiAgfVxuXG4gIC8vdHJpbSB0cmFsaW5nIHNwYWNlXG4gIHJldHVybiBsaW5lLnN1YnN0cmluZygwLGxpbmUubGVuZ3RoLTEpO1xufVxuXG4iLCIvL2NvbnN0cnVjdG9yXG5mdW5jdGlvbiBsb2dmbXQoKSB7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2ZtdDtcblxudmFyIHN0cmVhbWluZyAgICAgICAgPSByZXF1aXJlKCcuL2xpYi9zdHJlYW1pbmcnKTtcbnZhciBib2R5UGFyc2VyICAgICAgID0gcmVxdWlyZSgnLi9saWIvYm9keV9wYXJzZXInKTtcbnZhciBib2R5UGFyc2VyU3RyZWFtID0gcmVxdWlyZSgnLi9saWIvYm9keV9wYXJzZXJfc3RyZWFtJyk7XG52YXIgbG9nZm10UGFyc2VyICAgICA9IHJlcXVpcmUoJy4vbGliL2xvZ2ZtdF9wYXJzZXInKTtcbnZhciBsb2dnZXIgICAgICAgICAgID0gcmVxdWlyZSgnLi9saWIvbG9nZ2VyJyk7XG52YXIgcmVxdWVzdExvZ2dlciAgICA9IHJlcXVpcmUoJy4vbGliL3JlcXVlc3RfbG9nZ2VyJyk7XG52YXIgc2VyaWFsaXplciAgICAgICA9IHJlcXVpcmUoJy4vbGliL3N0cmluZ2lmeScpO1xuXG4vL0J1aWxkIHVwIGxvZ2ZtdCBwcm90b3R5cGVcbk9iamVjdC5hc3NpZ24obG9nZm10LnByb3RvdHlwZSwgbG9nZ2VyKTtcbk9iamVjdC5hc3NpZ24obG9nZm10LnByb3RvdHlwZSwgc3RyZWFtaW5nKTtcblxubG9nZm10LnByb3RvdHlwZS5zdHJpbmdpZnkgPSBzZXJpYWxpemVyLnN0cmluZ2lmeTtcbmxvZ2ZtdC5wcm90b3R5cGUucGFyc2UgPSBsb2dmbXRQYXJzZXIucGFyc2U7XG5cbi8vIFN5bmNocm9ub3VzIGJvZHkgcGFyc2VyXG5sb2dmbXQucHJvdG90eXBlLmJvZHlQYXJzZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIHZhciBtaW1lID0gb3B0aW9ucy5jb250ZW50VHlwZSB8fCBcImFwcGxpY2F0aW9uL2xvZ3BsZXgtMVwiO1xuICByZXR1cm4gYm9keVBhcnNlcih7IGNvbnRlbnRUeXBlOiBtaW1lLCBwYXJzZXI6IHRoaXMucGFyc2UgfSk7XG59O1xuXG4vLyBTdHJlYW0gcGFyc2VyXG5sb2dmbXQucHJvdG90eXBlLmJvZHlQYXJzZXJTdHJlYW0gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIHZhciBtaW1lID0gb3B0aW9ucy5jb250ZW50VHlwZSB8fCBcImFwcGxpY2F0aW9uL2xvZ3BsZXgtMVwiO1xuICByZXR1cm4gYm9keVBhcnNlclN0cmVhbSh7IGNvbnRlbnRUeXBlOiBtaW1lIH0pO1xufTtcblxubG9nZm10LnByb3RvdHlwZS5yZXF1ZXN0TG9nZ2VyID0gZnVuY3Rpb24ob3B0aW9ucywgZm9ybWF0dGVyKSB7XG4gIHJldHVybiByZXF1ZXN0TG9nZ2VyLmluaXQodGhpcywgb3B0aW9ucywgZm9ybWF0dGVyKTtcbn07XG5cbmxvZ2ZtdC5wcm90b3R5cGUucmVxdWVzdExvZ2dlci5jb21tb25Gb3JtYXR0ZXIgPSByZXF1ZXN0TG9nZ2VyLmNvbW1vbkZvcm1hdHRlcjtcblxuT2JqZWN0LmFzc2lnbihsb2dmbXQsIGxvZ2ZtdC5wcm90b3R5cGUpO1xuIiwiLy9maWx0ZXIgd2lsbCByZWVtaXQgdGhlIGRhdGEgaWYgY2IoZXJyLHBhc3MpIHBhc3MgaXMgdHJ1dGh5XG5cbi8vIHJlZHVjZSBpcyBtb3JlIHRyaWNreVxuLy8gbWF5YmUgd2Ugd2FudCB0byBncm91cCB0aGUgcmVkdWN0aW9ucyBvciBlbWl0IHByb2dyZXNzIHVwZGF0ZXMgb2NjYXNpb25hbGx5XG4vLyB0aGUgbW9zdCBiYXNpYyByZWR1Y2UganVzdCBlbWl0cyBvbmUgJ2RhdGEnIGV2ZW50IGFmdGVyIGl0IGhhcyByZWNpZXZlZCAnZW5kJ1xuXG5cbnZhciB0aHJvdWdoID0gcmVxdWlyZSgndGhyb3VnaCcpXG52YXIgRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyJykuU3RyaW5nRGVjb2RlclxuXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGl0XG5cbi8vVE9ETyBwYXNzIGluIGEgZnVuY3Rpb24gdG8gbWFwIGFjcm9zcyB0aGUgbGluZXMuXG5cbmZ1bmN0aW9uIHNwbGl0IChtYXRjaGVyLCBtYXBwZXIpIHtcbiAgdmFyIGRlY29kZXIgPSBuZXcgRGVjb2RlcigpXG4gIHZhciBzb0ZhciA9ICcnXG4gIGlmKCdmdW5jdGlvbicgPT09IHR5cGVvZiBtYXRjaGVyKVxuICAgIG1hcHBlciA9IG1hdGNoZXIsIG1hdGNoZXIgPSBudWxsXG4gIGlmICghbWF0Y2hlcilcbiAgICBtYXRjaGVyID0gL1xccj9cXG4vXG5cbiAgZnVuY3Rpb24gZW1pdChzdHJlYW0sIHBpZWNlKSB7XG4gICAgaWYobWFwcGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwaWVjZSA9IG1hcHBlcihwaWVjZSlcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgIH1cbiAgICAgIGlmKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgcGllY2UpXG4gICAgICAgIHN0cmVhbS5xdWV1ZShwaWVjZSlcbiAgICB9XG4gICAgZWxzZVxuICAgICAgc3RyZWFtLnF1ZXVlKHBpZWNlKVxuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCAoc3RyZWFtLCBidWZmZXIpIHsgXG4gICAgdmFyIHBpZWNlcyA9IChzb0ZhciArIGJ1ZmZlcikuc3BsaXQobWF0Y2hlcilcbiAgICBzb0ZhciA9IHBpZWNlcy5wb3AoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwaWVjZSA9IHBpZWNlc1tpXVxuICAgICAgZW1pdChzdHJlYW0sIHBpZWNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aHJvdWdoKGZ1bmN0aW9uIChiKSB7XG4gICAgbmV4dCh0aGlzLCBkZWNvZGVyLndyaXRlKGIpKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgaWYoZGVjb2Rlci5lbmQpIFxuICAgICAgbmV4dCh0aGlzLCBkZWNvZGVyLmVuZCgpKVxuICAgIGlmKHNvRmFyICE9IG51bGwpXG4gICAgICBlbWl0KHRoaXMsIHNvRmFyKVxuICAgIHRoaXMucXVldWUobnVsbClcbiAgfSlcbn1cblxuIiwidmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5cbi8vIHRocm91Z2hcbi8vXG4vLyBhIHN0cmVhbSB0aGF0IGRvZXMgbm90aGluZyBidXQgcmUtZW1pdCB0aGUgaW5wdXQuXG4vLyB1c2VmdWwgZm9yIGFnZ3JlZ2F0aW5nIGEgc2VyaWVzIG9mIGNoYW5naW5nIGJ1dCBub3QgZW5kaW5nIHN0cmVhbXMgaW50byBvbmUgc3RyZWFtKVxuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0aHJvdWdoXG50aHJvdWdoLnRocm91Z2ggPSB0aHJvdWdoXG5cbi8vY3JlYXRlIGEgcmVhZGFibGUgd3JpdGFibGUgc3RyZWFtLlxuXG5mdW5jdGlvbiB0aHJvdWdoICh3cml0ZSwgZW5kLCBvcHRzKSB7XG4gIHdyaXRlID0gd3JpdGUgfHwgZnVuY3Rpb24gKGRhdGEpIHsgdGhpcy5xdWV1ZShkYXRhKSB9XG4gIGVuZCA9IGVuZCB8fCBmdW5jdGlvbiAoKSB7IHRoaXMucXVldWUobnVsbCkgfVxuXG4gIHZhciBlbmRlZCA9IGZhbHNlLCBkZXN0cm95ZWQgPSBmYWxzZSwgYnVmZmVyID0gW10sIF9lbmRlZCA9IGZhbHNlXG4gIHZhciBzdHJlYW0gPSBuZXcgU3RyZWFtKClcbiAgc3RyZWFtLnJlYWRhYmxlID0gc3RyZWFtLndyaXRhYmxlID0gdHJ1ZVxuICBzdHJlYW0ucGF1c2VkID0gZmFsc2VcblxuLy8gIHN0cmVhbS5hdXRvUGF1c2UgICA9ICEob3B0cyAmJiBvcHRzLmF1dG9QYXVzZSAgID09PSBmYWxzZSlcbiAgc3RyZWFtLmF1dG9EZXN0cm95ID0gIShvcHRzICYmIG9wdHMuYXV0b0Rlc3Ryb3kgPT09IGZhbHNlKVxuXG4gIHN0cmVhbS53cml0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgd3JpdGUuY2FsbCh0aGlzLCBkYXRhKVxuICAgIHJldHVybiAhc3RyZWFtLnBhdXNlZFxuICB9XG5cbiAgZnVuY3Rpb24gZHJhaW4oKSB7XG4gICAgd2hpbGUoYnVmZmVyLmxlbmd0aCAmJiAhc3RyZWFtLnBhdXNlZCkge1xuICAgICAgdmFyIGRhdGEgPSBidWZmZXIuc2hpZnQoKVxuICAgICAgaWYobnVsbCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuIHN0cmVhbS5lbWl0KCdlbmQnKVxuICAgICAgZWxzZVxuICAgICAgICBzdHJlYW0uZW1pdCgnZGF0YScsIGRhdGEpXG4gICAgfVxuICB9XG5cbiAgc3RyZWFtLnF1ZXVlID0gc3RyZWFtLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSkge1xuLy8gICAgY29uc29sZS5lcnJvcihlbmRlZClcbiAgICBpZihfZW5kZWQpIHJldHVybiBzdHJlYW1cbiAgICBpZihkYXRhID09PSBudWxsKSBfZW5kZWQgPSB0cnVlXG4gICAgYnVmZmVyLnB1c2goZGF0YSlcbiAgICBkcmFpbigpXG4gICAgcmV0dXJuIHN0cmVhbVxuICB9XG5cbiAgLy90aGlzIHdpbGwgYmUgcmVnaXN0ZXJlZCBhcyB0aGUgZmlyc3QgJ2VuZCcgbGlzdGVuZXJcbiAgLy9tdXN0IGNhbGwgZGVzdHJveSBuZXh0IHRpY2ssIHRvIG1ha2Ugc3VyZSB3ZSdyZSBhZnRlciBhbnlcbiAgLy9zdHJlYW0gcGlwZWQgZnJvbSBoZXJlLlxuICAvL3RoaXMgaXMgb25seSBhIHByb2JsZW0gaWYgZW5kIGlzIG5vdCBlbWl0dGVkIHN5bmNocm9ub3VzbHkuXG4gIC8vYSBuaWNlciB3YXkgdG8gZG8gdGhpcyBpcyB0byBtYWtlIHN1cmUgdGhpcyBpcyB0aGUgbGFzdCBsaXN0ZW5lciBmb3IgJ2VuZCdcblxuICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBzdHJlYW0ucmVhZGFibGUgPSBmYWxzZVxuICAgIGlmKCFzdHJlYW0ud3JpdGFibGUgJiYgc3RyZWFtLmF1dG9EZXN0cm95KVxuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0cmVhbS5kZXN0cm95KClcbiAgICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gX2VuZCAoKSB7XG4gICAgc3RyZWFtLndyaXRhYmxlID0gZmFsc2VcbiAgICBlbmQuY2FsbChzdHJlYW0pXG4gICAgaWYoIXN0cmVhbS5yZWFkYWJsZSAmJiBzdHJlYW0uYXV0b0Rlc3Ryb3kpXG4gICAgICBzdHJlYW0uZGVzdHJveSgpXG4gIH1cblxuICBzdHJlYW0uZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZihlbmRlZCkgcmV0dXJuXG4gICAgZW5kZWQgPSB0cnVlXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCkgc3RyZWFtLndyaXRlKGRhdGEpXG4gICAgX2VuZCgpIC8vIHdpbGwgZW1pdCBvciBxdWV1ZVxuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIHN0cmVhbS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKGRlc3Ryb3llZCkgcmV0dXJuXG4gICAgZGVzdHJveWVkID0gdHJ1ZVxuICAgIGVuZGVkID0gdHJ1ZVxuICAgIGJ1ZmZlci5sZW5ndGggPSAwXG4gICAgc3RyZWFtLndyaXRhYmxlID0gc3RyZWFtLnJlYWRhYmxlID0gZmFsc2VcbiAgICBzdHJlYW0uZW1pdCgnY2xvc2UnKVxuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIHN0cmVhbS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihzdHJlYW0ucGF1c2VkKSByZXR1cm5cbiAgICBzdHJlYW0ucGF1c2VkID0gdHJ1ZVxuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIHN0cmVhbS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYoc3RyZWFtLnBhdXNlZCkge1xuICAgICAgc3RyZWFtLnBhdXNlZCA9IGZhbHNlXG4gICAgICBzdHJlYW0uZW1pdCgncmVzdW1lJylcbiAgICB9XG4gICAgZHJhaW4oKVxuICAgIC8vbWF5IGhhdmUgYmVjb21lIHBhdXNlZCBhZ2FpbixcbiAgICAvL2FzIGRyYWluIGVtaXRzICdkYXRhJy5cbiAgICBpZighc3RyZWFtLnBhdXNlZClcbiAgICAgIHN0cmVhbS5lbWl0KCdkcmFpbicpXG4gICAgcmV0dXJuIHN0cmVhbVxuICB9XG4gIHJldHVybiBzdHJlYW1cbn1cblxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwidXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uIiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIklubGluZVN3aXRjaCIsInVzZVN0eWxlcyIsIk5vZGVHcmFwaFNldHRpbmdzIiwib3B0aW9ucyIsIm9uT3B0aW9uc0NoYW5nZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImNvbnRhaW5lciIsInJvdyIsImpzb25EYXRhIiwibm9kZUdyYXBoIiwiZW5hYmxlZCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJ0aGVtZSIsIlNlZ21lbnRJbnB1dCIsIklubGluZUxhYmVsIiwiSWNvbiIsIkVRX1dJRFRIIiwiS2V5VmFsdWVJbnB1dCIsInZhbHVlcyIsIm9uQ2hhbmdlIiwiaWQiLCJrZXlQbGFjZWhvbGRlciIsInZhbHVlUGxhY2Vob2xkZXIiLCJ3cmFwcGVyIiwibGVuZ3RoIiwibWFwIiwidmFsdWUiLCJpZHgiLCJwYWlyIiwia2V5IiwiZSIsInYiLCJpIiwiU3RyaW5nIiwib3BlcmF0b3IiLCJzbGljZSIsInNwYWNpbmciLCJ4cyIsInBhbGV0dGUiLCJvcmFuZ2UiLCJEYXRhU291cmNlUGlja2VyIiwiSW5wdXQiLCJUYWdzSW5wdXQiLCJUcmFjZVRvTG9nc1NldHRpbmdzIiwid2lkdGgiLCJpbmZvVGV4dCIsImRzIiwidHlwZSIsInRyYWNlc1RvTG9ncyIsImRhdGFzb3VyY2VVaWQiLCJ1aWQiLCJ0YWdzIiwibWFwVGFnTmFtZXNFbmFibGVkIiwibWFwcGVkVGFncyIsInRhZyIsInNwYW5TdGFydFRpbWVTaGlmdCIsInNwYW5FbmRUaW1lU2hpZnQiLCJmaWx0ZXJCeVRyYWNlSUQiLCJmaWx0ZXJCeVNwYW5JRCIsIm1kIiwiY29sb3JzIiwidGV4dFNlbWlXZWFrIiwiQnV0dG9uIiwiVHJhY2VUb01ldHJpY3NTZXR0aW5ncyIsInRyYWNlc1RvTWV0cmljcyIsInVuZGVmaW5lZCIsInF1ZXJpZXMiLCJxdWVyeSIsInF1ZXJ5Um93IiwibmFtZSIsIm5ld1F1ZXJpZXMiLCJzcGxpY2UiLCJGaWVsZFR5cGUiLCJNdXRhYmxlRGF0YUZyYW1lIiwiTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcyIsIkZpZWxkcyIsImdldE5vbk92ZXJsYXBwaW5nRHVyYXRpb24iLCJyYW5nZXMiLCJzb3J0IiwiYSIsImIiLCJtZXJnZWRSYW5nZXMiLCJyZWR1Y2UiLCJhY2MiLCJyYW5nZSIsInRhaWwiLCJwcmV2U3RhcnQiLCJwcmV2RW5kIiwic3RhcnQiLCJlbmQiLCJtYWtlU3Bhbk1hcCIsImdldFNwYW4iLCJzcGFuTWFwIiwic3BhbiIsImluZGV4IiwiY2hpbGRyZW4iLCJwYXJlbnRJZCIsInBhcmVudElkcyIsInB1c2giLCJnZXRTdGF0cyIsImR1cmF0aW9uIiwidHJhY2VEdXJhdGlvbiIsInNlbGZEdXJhdGlvbiIsIm1haW4iLCJ0b0ZpeGVkTm9UcmFpbGluZ1plcm9zIiwic2Vjb25kYXJ5IiwibiIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwibWFrZUZyYW1lcyIsIm5vZGVzRnJhbWUiLCJmaWVsZHMiLCJzdHJpbmciLCJ0aXRsZSIsInN1YlRpdGxlIiwibWFpblN0YXQiLCJjb25maWciLCJkaXNwbGF5TmFtZSIsInNlY29uZGFyeVN0YXQiLCJjb2xvciIsIm51bWJlciIsIm1vZGUiLCJtZXRhIiwicHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGUiLCJlZGdlc0ZyYW1lIiwidGFyZ2V0Iiwic291cmNlIiwidXNlU3RhdGUiLCJDU1NUcmFuc2l0aW9uIiwiZHVyYXRpb25QbGFjZWhvbGRlciIsIkFkdmFuY2VkT3B0aW9ucyIsInNob3dBZHZhbmNlZE9wdGlvbnMiLCJzZXRTaG93QWR2YW5jZWRPcHRpb25zIiwiYWR2YW5jZWRPcHRpb25zQ29udGFpbmVyIiwiYW5nbGVVcCIsImFuZ2xlRG93biIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJsaW1pdCIsInBhcnNlSW50IiwiZW50ZXIiLCJlbnRlckFjdGl2ZSIsImV4aXQiLCJleGl0QWN0aXZlIiwiRGF0YVNvdXJjZUh0dHBTZXR0aW5ncyIsIkNvbmZpZ0VkaXRvciIsImZlYXR1cmVUb2dnbGVzIiwidHJhY2VUb01ldHJpY3MiLCJGaWxlRHJvcHpvbmUiLCJRdWVyeUZpZWxkIiwiUmFkaW9CdXR0b25Hcm91cCIsInVzZVRoZW1lMiIsIlNlYXJjaEZvcm0iLCJRdWVyeUVkaXRvciIsImRhdGFzb3VyY2UiLCJvblJ1blF1ZXJ5Iiwib25DaGFuZ2VRdWVyeSIsIm5leHRRdWVyeSIsInJlbmRlckVkaXRvckJvZHkiLCJxdWVyeVR5cGUiLCJwYWRkaW5nIiwibXVsdGlwbGUiLCJyZXN1bHQiLCJ1cGxvYWRlZEpzb24iLCJsYWJlbCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidG9PcHRpb24iLCJnZXRUZW1wbGF0ZVNydiIsImZ1enp5TWF0Y2giLCJTZWxlY3QiLCJub3RpZnlBcHAiLCJjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiIsImRpc3BhdGNoIiwidHJhbnNmb3JtVG9Mb2dmbXQiLCJBTExfT1BFUkFUSU9OU19LRVkiLCJhbGxPcGVyYXRpb25zT3B0aW9uIiwic2VydmljZU9wdGlvbnMiLCJzZXRTZXJ2aWNlT3B0aW9ucyIsIm9wZXJhdGlvbk9wdGlvbnMiLCJzZXRPcGVyYXRpb25PcHRpb25zIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2VydmljZXMiLCJvcGVyYXRpb25zIiwibG9hZE9wdGlvbnMiLCJ1cmwiLCJsb2FkZXJPZlR5cGUiLCJwcmV2VmFsdWUiLCJtZXRhZGF0YVJlcXVlc3QiLCJvcHRpb24iLCJmaWx0ZXJlZE9wdGlvbnMiLCJmaWx0ZXIiLCJpdGVtIiwiZm91bmQiLCJlcnJvciIsIkVycm9yIiwiZ2V0U2VydmljZXMiLCJzZXJ2aWNlIiwiY29udGFpbnNUZW1wbGF0ZSIsImdldE9wZXJhdGlvbnMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwib3BlcmF0aW9uIiwibWF4V2lkdGgiLCJmaW5kIiwiaWRlbnRpdHkiLCJvbWl0IiwicGljayIsInBpY2tCeSIsImxhc3RWYWx1ZUZyb20iLCJvZiIsImNhdGNoRXJyb3IiLCJEYXRhU291cmNlQXBpIiwiZGF0ZU1hdGgiLCJnZXRCYWNrZW5kU3J2Iiwic2VyaWFsaXplUGFyYW1zIiwiZ2V0VGltZVNydiIsImNyZWF0ZUdyYXBoRnJhbWVzIiwiY3JlYXRlVGFibGVGcmFtZSIsImNyZWF0ZVRyYWNlRnJhbWUiLCJjb252ZXJ0VGFnc0xvZ2ZtdCIsIkphZWdlckRhdGFzb3VyY2UiLCJjb25zdHJ1Y3RvciIsImluc3RhbmNlU2V0dGluZ3MiLCJ0aW1lU3J2IiwidGVtcGxhdGVTcnYiLCJwYXJhbXMiLCJyZXMiLCJfcmVxdWVzdCIsImhpZGVGcm9tSW5zcGVjdG9yIiwiZGF0YSIsInRhcmdldHMiLCJlbXB0eVRyYWNlRGF0YUZyYW1lIiwic2NvcGVkVmFycyIsInBpcGUiLCJyZXNwb25zZSIsInRyYWNlRGF0YSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJqYWVnZXJJbnRlcnBvbGF0ZWQiLCJhcHBseVZhcmlhYmxlcyIsImphZWdlclF1ZXJ5IiwidG9TdHJpbmciLCJnZXRUaW1lUmFuZ2UiLCJsb29rYmFjayIsImludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzIiwiZ2V0UmVmIiwiZXhwYW5kZWRRdWVyeSIsInRlc3REYXRhc291cmNlIiwidGVzdFJlc3VsdCIsInN0YXR1cyIsImVyciIsInN0YXR1c1RleHQiLCJzdHJpbmdpZnkiLCJ0aW1lUmFuZ2UiLCJnZXRUaW1lIiwiZnJvbSIsInRvIiwiZ2V0UXVlcnlEaXNwbGF5VGV4dCIsImFwaVVybCIsInJlcSIsImZldGNoIiwiZGF0ZSIsInJvdW5kVXAiLCJ2YWx1ZU9mIiwidHJhY2UiLCJjdXN0b20iLCJ0cmFjZUZvcm1hdCIsIm5vZGVzIiwiZWRnZXMiLCJjb252ZXJ0VHJhY2VUb0dyYXBoIiwibm9kZSIsImFkZCIsImVkZ2UiLCJmaW5kVHJhY2VEdXJhdGlvbiIsInNwYW5zIiwic3BhbklEIiwicmVmZXJlbmNlcyIsInIiLCJyZWZUeXBlIiwicHJvY2VzcyIsInByb2Nlc3NlcyIsInByb2Nlc3NJRCIsImMiLCJzdGFydFRpbWUiLCJjaGlsZHJlbkR1cmF0aW9uIiwic3RhdHMiLCJzZXJ2aWNlTmFtZSIsIm9wZXJhdGlvbk5hbWUiLCJwYXJlbnRTcGFuSUQiLCJ0cmFjZUVuZFRpbWUiLCJ0cmFjZVN0YXJ0VGltZSIsIkluZmluaXR5IiwiRGF0YVNvdXJjZVBsdWdpbiIsInBsdWdpbiIsInNldENvbmZpZ0VkaXRvciIsInNldFF1ZXJ5RWRpdG9yIiwidHJhbnNmb3JtVHJhY2VEYXRhIiwicyIsInRvU3BhblJvdyIsImZyYW1lIiwib3RoZXIiLCJ0cmFjZUlEIiwibG9ncyIsImwiLCJ0aW1lc3RhbXAiLCJ3YXJuaW5ncyIsInN0YWNrVHJhY2VzIiwic2VydmljZVRhZ3MiLCJ1bml0IiwiZGlzcGxheU5hbWVGcm9tRFMiLCJsaW5rcyIsImludGVybmFsIiwiZGF0YXNvdXJjZU5hbWUiLCJ0aW1lIiwidHJhbnNmb3JtVG9UcmFjZURhdGEiLCJ0cmFjZU5hbWUiLCJ0cmFuc2Zvcm1Ub0phZWdlciIsInRyYWNlUmVzcG9uc2UiLCJnZXQiLCJwIiwiZmxhZ3MiLCJPYmplY3QiLCJrZXlzIiwidG90YWwiLCJvZmZzZXQiLCJlcnJvcnMiLCJsb2dmbXQiLCJmb3JFYWNoIl0sInNvdXJjZVJvb3QiOiIifQ==