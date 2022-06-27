"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["zipkinPlugin"],{

/***/ "./public/app/core/components/NodeGraphSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./public/app/plugins/datasource/zipkin/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      defaultUrl: "http://localhost:9411",
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

/***/ "./public/app/plugins/datasource/zipkin/QueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipkinQueryField": () => (/* binding */ ZipkinQueryField),
/* harmony export */   "useLoadOptions": () => (/* binding */ useLoadOptions),
/* harmony export */   "useServices": () => (/* binding */ useServices)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMount.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/zipkin/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













const getStyles = theme => {
  return {
    tracesCascader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'tracesCascader',
      marginRight: theme.spacing(1)
    })
  };
};

const ZipkinQueryField = ({
  query,
  onChange,
  onRunQuery,
  datasource
}) => {
  const serviceOptions = useServices(datasource);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    onLoadOptions,
    allOptions
  } = useLoadOptions(datasource);
  const onSelectTrace = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((values, selectedOptions) => {
    if (selectedOptions.length === 3) {
      const traceID = selectedOptions[2].value;
      onChange(Object.assign({}, query, {
        query: traceID
      }));
      onRunQuery();
    }
  }, [onChange, onRunQuery, query]);

  const onChangeQuery = value => {
    const nextQuery = Object.assign({}, query, {
      query: value
    });
    onChange(nextQuery);
  };

  let cascaderOptions = useMapToCascaderOptions(serviceOptions, allOptions);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Query type",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
          options: [{
            value: 'traceID',
            label: 'TraceID'
          }, {
            value: 'upload',
            label: 'JSON file'
          }],
          value: query.queryType || 'traceID',
          onChange: v => onChange(Object.assign({}, query, {
            queryType: v
          })),
          size: "md"
        })
      })
    }), query.queryType === 'upload' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        padding: theme.spacing(2)
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FileDropzone, {
        options: {
          multiple: false
        },
        onLoad: result => {
          datasource.uploadedJson = result;
          onRunQuery();
        }
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ButtonCascader, {
        options: cascaderOptions,
        onChange: onSelectTrace,
        loadData: onLoadOptions,
        variant: "secondary",
        buttonProps: {
          className: styles.tracesCascader
        },
        children: "Traces"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "gf-form gf-form--grow flex-shrink-1 min-width-15",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.QueryField, {
          query: query.query,
          onChange: onChangeQuery,
          onRunQuery: onRunQuery,
          placeholder: 'Insert Trace ID (run with Shift+Enter)',
          portalOrigin: "zipkin"
        })
      })]
    })]
  });
}; // Exported for tests

function useServices(datasource) {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_7__.apiPrefix}/services`;
  const [servicesOptions, fetch] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async () => {
    try {
      const services = await datasource.metadataRequest(url);

      if (services) {
        return services.sort().map(service => ({
          label: service,
          value: service,
          isLeaf: false
        }));
      }

      return [];
    } catch (error) {
      const errorToShow = error instanceof Error ? error : 'An unknown error occurred';
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createErrorNotification)('Failed to load services from Zipkin', errorToShow)));
      throw error;
    }
  }, [datasource]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    // We should probably call this periodically to get new services after mount.
    fetch();
  });
  return servicesOptions;
}
// Exported for tests
function useLoadOptions(datasource) {
  const isMounted = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [allOptions, setAllOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const [, fetchSpans] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async function findSpans(service) {
    const url = `${_constants__WEBPACK_IMPORTED_MODULE_7__.apiPrefix}/spans`;

    try {
      // The response of this should have been full ZipkinSpan objects based on API docs but is just list
      // of span names.
      // TODO: check if this is some issue of version used or something else
      const response = await datasource.metadataRequest(url, {
        serviceName: service
      });

      if (isMounted()) {
        setAllOptions(state => {
          const spanOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(response.map(span => [span, undefined]));
          return Object.assign({}, state, {
            [service]: spanOptions
          });
        });
      }
    } catch (error) {
      const errorToShow = error instanceof Error ? error : 'An unknown error occurred';
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createErrorNotification)('Failed to load spans from Zipkin', errorToShow)));
      throw error;
    }
  }, [datasource, allOptions]);
  const [, fetchTraces] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async function findTraces(serviceName, spanName) {
    const url = `${_constants__WEBPACK_IMPORTED_MODULE_7__.apiPrefix}/traces`;
    const search = {
      serviceName,
      spanName // See other params and default here https://zipkin.io/zipkin-api/#/default/get_traces

    };

    try {
      // This should return just root traces as there isn't any nesting
      const traces = await datasource.metadataRequest(url, search);

      if (isMounted()) {
        const newTraces = traces.length ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(traces.map(trace => {
          const rootSpan = trace.find(span => !span.parentId);
          return [`${rootSpan.name} [${Math.floor(rootSpan.duration / 1000)} ms]`, rootSpan.traceId];
        })) : noTracesOptions;
        setAllOptions(state => {
          const spans = state[serviceName];
          return Object.assign({}, state, {
            [serviceName]: Object.assign({}, spans, {
              [spanName]: newTraces
            })
          });
        });
      }
    } catch (error) {
      const errorToShow = error instanceof Error ? error : 'An unknown error occurred';
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createErrorNotification)('Failed to load spans from Zipkin', errorToShow)));
      throw error;
    }
  }, [datasource]);
  const onLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(selectedOptions => {
    const service = selectedOptions[0].value;

    if (selectedOptions.length === 1) {
      fetchSpans(service);
    } else if (selectedOptions.length === 2) {
      const spanName = selectedOptions[1].value;
      fetchTraces(service, spanName);
    }
  }, [fetchSpans, fetchTraces]);
  return {
    onLoadOptions,
    allOptions
  };
}

function useMapToCascaderOptions(services, allOptions) {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    let cascaderOptions = [];

    if (services.value && services.value.length) {
      cascaderOptions = services.value.map(services => {
        return Object.assign({}, services, {
          children: allOptions[services.value] && Object.keys(allOptions[services.value]).map(spanName => {
            return {
              label: spanName,
              value: spanName,
              isLeaf: false,
              children: allOptions[services.value][spanName] && Object.keys(allOptions[services.value][spanName]).map(traceName => {
                return {
                  label: traceName,
                  value: allOptions[services.value][spanName][traceName]
                };
              })
            };
          })
        });
      });
    } else if (services.value && !services.value.length) {
      cascaderOptions = noTracesFoundOptions;
    }

    return cascaderOptions;
  }, [services, allOptions]);
}

const NO_TRACES_KEY = '__NO_TRACES__';
const noTracesFoundOptions = [{
  label: 'No traces found',
  value: 'no_traces',
  isLeaf: true // Cannot be disabled because then cascader shows 'loading' for some reason.
  // disabled: true,

}];
const noTracesOptions = {
  '[No traces in time range]': NO_TRACES_KEY
};

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiPrefix": () => (/* binding */ apiPrefix)
/* harmony export */ });
const apiPrefix = '/api/v2';

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipkinDatasource": () => (/* binding */ ZipkinDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _core_utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/utils/fetch.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/zipkin/constants.ts");
/* harmony import */ var _utils_graphTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/zipkin/utils/graphTransform.ts");
/* harmony import */ var _utils_transforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/zipkin/utils/transforms.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ZipkinDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);

    _defineProperty(this, "uploadedJson", null);

    _defineProperty(this, "nodeGraph", void 0);

    this.instanceSettings = instanceSettings;
    this.nodeGraph = instanceSettings.jsonData.nodeGraph;
  }

  query(options) {
    const target = options.targets[0];

    if (target.queryType === 'upload') {
      if (!this.uploadedJson) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          data: []
        });
      }

      try {
        var _this$nodeGraph;

        const traceData = JSON.parse(this.uploadedJson);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(responseToDataQueryResponse({
          data: traceData
        }, (_this$nodeGraph = this.nodeGraph) === null || _this$nodeGraph === void 0 ? void 0 : _this$nodeGraph.enabled));
      } catch (error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          error: {
            message: 'JSON is not valid Zipkin format'
          },
          data: []
        });
      }
    }

    if (target.query) {
      return this.request(`${_constants__WEBPACK_IMPORTED_MODULE_3__.apiPrefix}/trace/${encodeURIComponent(target.query)}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
        var _this$nodeGraph2;

        return responseToDataQueryResponse(res, (_this$nodeGraph2 = this.nodeGraph) === null || _this$nodeGraph2 === void 0 ? void 0 : _this$nodeGraph2.enabled);
      }));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(emptyDataQueryResponse);
  }

  async metadataRequest(url, params) {
    const res = await (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.lastValueFrom)(this.request(url, params, {
      hideFromInspector: true
    }));
    return res.data;
  }

  async testDatasource() {
    await this.metadataRequest(`${_constants__WEBPACK_IMPORTED_MODULE_3__.apiPrefix}/services`);
    return {
      status: 'success',
      message: 'Data source is working'
    };
  }

  getQueryDisplayText(query) {
    return query.query;
  }

  request(apiUrl, data, options) {
    const params = data ? (0,_core_utils_fetch__WEBPACK_IMPORTED_MODULE_2__.serializeParams)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch(req);
  }

}

function responseToDataQueryResponse(response, nodeGraph = false) {
  let data = response !== null && response !== void 0 && response.data ? [(0,_utils_transforms__WEBPACK_IMPORTED_MODULE_5__.transformResponse)(response === null || response === void 0 ? void 0 : response.data)] : [];

  if (nodeGraph) {
    data.push(...(0,_utils_graphTransform__WEBPACK_IMPORTED_MODULE_4__.createGraphFrames)(response === null || response === void 0 ? void 0 : response.data));
  }

  return {
    data
  };
}

const emptyDataQueryResponse = {
  data: [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'trace',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.trace,
      values: []
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'zipkin'
      }
    }
  })]
};

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/zipkin/ConfigEditor.tsx");
/* harmony import */ var _QueryField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/zipkin/QueryField.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/zipkin/datasource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_3__.ZipkinDatasource).setQueryEditor(_QueryField__WEBPACK_IMPORTED_MODULE_2__.ZipkinQueryField).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/utils/graphTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

function convertTraceToGraph(spans) {
  const nodes = [];
  const edges = [];
  const traceDuration = findTraceDuration(spans);
  const spanMap = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeSpanMap)(index => {
    if (index >= spans.length) {
      return undefined;
    }

    return {
      span: spans[index],
      id: spans[index].id,
      parentIds: spans[index].parentId ? [spans[index].parentId] : []
    };
  });

  for (const span of spans) {
    var _span$localEndpoint, _span$remoteEndpoint;

    const ranges = spanMap[span.id].children.map(c => {
      const span = spanMap[c].span;
      return [span.timestamp, span.timestamp + span.duration];
    });
    const childrenDuration = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getNonOverlappingDuration)(ranges);
    const selfDuration = span.duration - childrenDuration;
    const stats = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getStats)(span.duration / 1000, traceDuration / 1000, selfDuration / 1000);
    nodes.push({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: span.id,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: ((_span$localEndpoint = span.localEndpoint) === null || _span$localEndpoint === void 0 ? void 0 : _span$localEndpoint.serviceName) || ((_span$remoteEndpoint = span.remoteEndpoint) === null || _span$remoteEndpoint === void 0 ? void 0 : _span$remoteEndpoint.serviceName) || 'unknown',
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: span.name,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    });

    if (span.parentId && spanMap[span.parentId].span) {
      edges.push({
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: span.parentId + '--' + span.id,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: span.id,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: span.parentId
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
    if (span.timestamp < traceStartTime) {
      traceStartTime = span.timestamp;
    }

    if (span.timestamp + span.duration > traceEndTime) {
      traceEndTime = span.timestamp + span.duration;
    }
  }

  return traceEndTime - traceStartTime;
}

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/utils/transforms.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformResponse": () => (/* binding */ transformResponse),
/* harmony export */   "transformToZipkin": () => (/* binding */ transformToZipkin)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");



/**
 * Transforms response to Grafana trace data frame.
 */
function transformResponse(zSpans) {
  const spanRows = zSpans.map(transformSpan);
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'zipkin'
      }
    }
  });

  for (const span of spanRows) {
    frame.add(span);
  }

  return frame;
}

function transformSpan(span) {
  var _span$localEndpoint, _span$remoteEndpoint, _span$annotations$map, _span$annotations;

  const row = {
    traceID: span.traceId,
    spanID: span.id,
    parentSpanID: span.parentId,
    operationName: span.name,
    serviceName: ((_span$localEndpoint = span.localEndpoint) === null || _span$localEndpoint === void 0 ? void 0 : _span$localEndpoint.serviceName) || ((_span$remoteEndpoint = span.remoteEndpoint) === null || _span$remoteEndpoint === void 0 ? void 0 : _span$remoteEndpoint.serviceName) || 'unknown',
    serviceTags: serviceTags(span),
    startTime: span.timestamp / 1000,
    duration: span.duration / 1000,
    logs: (_span$annotations$map = (_span$annotations = span.annotations) === null || _span$annotations === void 0 ? void 0 : _span$annotations.map(transformAnnotation)) !== null && _span$annotations$map !== void 0 ? _span$annotations$map : [],
    tags: Object.keys(span.tags || {}).reduce((acc, key) => {
      // If tag is error we remap it to simple boolean so that the trace ui will show an error icon.
      if (key === 'error') {
        acc.push({
          key: 'error',
          value: true
        });
        acc.push({
          key: 'errorValue',
          value: span.tags['error']
        });
        return acc;
      }

      acc.push({
        key,
        value: span.tags[key]
      });
      return acc;
    }, [])
  };

  if (span.kind) {
    var _row$tags;

    row.tags = [{
      key: 'kind',
      value: span.kind
    }, ...((_row$tags = row.tags) !== null && _row$tags !== void 0 ? _row$tags : [])];
  }

  if (span.shared) {
    var _row$tags2;

    row.tags = [{
      key: 'shared',
      value: span.shared
    }, ...((_row$tags2 = row.tags) !== null && _row$tags2 !== void 0 ? _row$tags2 : [])];
  }

  return row;
}
/**
 * Maps annotations as a log as that seems to be the closest thing.
 * See https://zipkin.io/zipkin-api/#/default/get_trace__traceId_
 */


function transformAnnotation(annotation) {
  return {
    timestamp: annotation.timestamp,
    fields: [{
      key: 'annotation',
      value: annotation.value
    }]
  };
}

function serviceTags(span) {
  const endpoint = span.localEndpoint || span.remoteEndpoint;

  if (!endpoint) {
    return [];
  }

  return [valueToTag('ipv4', endpoint.ipv4), valueToTag('ipv6', endpoint.ipv6), valueToTag('port', endpoint.port), valueToTag('endpointType', span.localEndpoint ? 'local' : 'remote')].filter(lodash__WEBPACK_IMPORTED_MODULE_0__.identity);
}

function valueToTag(key, value) {
  if (!value) {
    return undefined;
  }

  return {
    key,
    value
  };
}
/**
 * Transforms data frame to Zipkin response
 */


const transformToZipkin = data => {
  let response = [];

  for (let i = 0; i < data.length; i++) {
    var _span$tags$find, _span$tags$find2;

    const span = data.get(i);
    response.push(Object.assign({
      traceId: span.traceID,
      parentId: span.parentSpanID,
      name: span.operationName,
      id: span.spanID,
      timestamp: span.startTime * 1000,
      duration: span.duration * 1000
    }, getEndpoint(span), {
      annotations: span.logs.length ? span.logs.map(l => ({
        timestamp: l.timestamp,
        value: l.fields[0].value
      })) : undefined,
      tags: span.tags.length ? span.tags.filter(t => t.key !== 'kind' && t.key !== 'endpointType' && t.key !== 'shared').reduce((tags, t) => {
        if (t.key === 'error') {
          return Object.assign({}, tags, {
            [t.key]: span.tags.find(t => t.key === 'errorValue').value || ''
          });
        }

        return Object.assign({}, tags, {
          [t.key]: t.value
        });
      }, {}) : undefined,
      kind: (_span$tags$find = span.tags.find(t => t.key === 'kind')) === null || _span$tags$find === void 0 ? void 0 : _span$tags$find.value,
      shared: (_span$tags$find2 = span.tags.find(t => t.key === 'shared')) === null || _span$tags$find2 === void 0 ? void 0 : _span$tags$find2.value
    }));
  }

  return response;
}; // Returns remote or local endpoint object

const getEndpoint = span => {
  var _span$serviceTags$fin, _span$serviceTags$fin2, _span$serviceTags$fin3, _span$serviceTags$fin4;

  const key = ((_span$serviceTags$fin = span.serviceTags.find(t => t.key === 'endpointType')) === null || _span$serviceTags$fin === void 0 ? void 0 : _span$serviceTags$fin.value) === 'local' ? 'localEndpoint' : 'remoteEndpoint';
  return span.serviceName !== 'unknown' ? {
    [key]: {
      serviceName: span.serviceName,
      ipv4: (_span$serviceTags$fin2 = span.serviceTags.find(t => t.key === 'ipv4')) === null || _span$serviceTags$fin2 === void 0 ? void 0 : _span$serviceTags$fin2.value,
      ipv6: (_span$serviceTags$fin3 = span.serviceTags.find(t => t.key === 'ipv6')) === null || _span$serviceTags$fin3 === void 0 ? void 0 : _span$serviceTags$fin3.value,
      port: (_span$serviceTags$fin4 = span.serviceTags.find(t => t.key === 'port')) === null || _span$serviceTags$fin4 === void 0 ? void 0 : _span$serviceTags$fin4.value
    }
  } : undefined;
};

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUUsSUFBSSxDQUFDOEYsV0FBTCxLQUFxQixTQUFyQixHQUNIO0lBQ0UsQ0FBQzlKLEdBQUQsR0FBTztNQUNMOEosV0FBVyxFQUFFOUYsSUFBSSxDQUFDOEYsV0FEYjtNQUVMNEYsSUFBSSw0QkFBRTFMLElBQUksQ0FBQ2dMLFdBQUwsQ0FBaUJ2RSxJQUFqQixDQUF1QnlGLENBQUQsSUFBMEJBLENBQUMsQ0FBQ2xRLEdBQUYsS0FBVSxNQUExRCxDQUFGLDJEQUFFLHVCQUFtRUgsS0FGcEU7TUFHTDhQLElBQUksNEJBQUUzTCxJQUFJLENBQUNnTCxXQUFMLENBQWlCdkUsSUFBakIsQ0FBdUJ5RixDQUFELElBQTBCQSxDQUFDLENBQUNsUSxHQUFGLEtBQVUsTUFBMUQsQ0FBRiwyREFBRSx1QkFBbUVILEtBSHBFO01BSUwrUCxJQUFJLDRCQUFFNUwsSUFBSSxDQUFDZ0wsV0FBTCxDQUFpQnZFLElBQWpCLENBQXVCeUYsQ0FBRCxJQUEwQkEsQ0FBQyxDQUFDbFEsR0FBRixLQUFVLE1BQTFELENBQUYsMkRBQUUsdUJBQW1FSDtJQUpwRTtFQURULENBREcsR0FTSHVDLFNBVEo7QUFVRCxDQWZEOzs7Ozs7Ozs7Ozs7QUM1SzRDO0FBQzVDO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9Ob2RlR3JhcGhTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL0tleVZhbHVlSW5wdXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9UcmFjZVRvTG9ncy9UcmFjZVRvTG9nc1NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb01ldHJpY3MvVHJhY2VUb01ldHJpY3NTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS91dGlscy90cmFjaW5nLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vQ29uZmlnRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2Uvemlwa2luL1F1ZXJ5RmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2Uvemlwa2luL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2Uvemlwa2luL3V0aWxzL2dyYXBoVHJhbnNmb3JtLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vdXRpbHMvdHJhbnNmb3Jtcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtY2VhOGU4MjZkYy8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuNC4wLTBlZjQ1MjE1NDQtMDg4OWRhOTE5Yi56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlTW91bnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIERhdGFTb3VyY2VKc29uRGF0YSxcbiAgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyxcbiAgR3JhZmFuYVRoZW1lLFxuICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24sXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbmxpbmVTd2l0Y2gsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlR3JhcGhPcHRpb25zIHtcbiAgZW5hYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUdyYXBoRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIG5vZGVHcmFwaD86IE5vZGVHcmFwaE9wdGlvbnM7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8Tm9kZUdyYXBoRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIE5vZGVHcmFwaFNldHRpbmdzKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPk5vZGUgR3JhcGg8L2gzPlxuICAgICAgPElubGluZUZpZWxkUm93IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIHRvb2x0aXA9XCJFbmFibGVzIHRoZSBOb2RlIEdyYXBoIHZpc3VhbGl6YXRpb24gaW4gdGhlIHRyYWNlIHZpZXdlci5cIlxuICAgICAgICAgIGxhYmVsPVwiRW5hYmxlIE5vZGUgR3JhcGhcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJlbmFibGVOb2RlR3JhcGhcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEubm9kZUdyYXBoPy5lbmFibGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAnbm9kZUdyYXBoJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEubm9kZUdyYXBoLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIGxhYmVsOiBjb250YWluZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGAsXG4gIHJvdzogY3NzYFxuICAgIGxhYmVsOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lLCBLZXlWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VnbWVudElucHV0LCB1c2VTdHlsZXMsIElubGluZUxhYmVsLCBJY29uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5jb25zdCBFUV9XSURUSCA9IDM7IC8vID0gMjRweCBpbiBpbmxpbmUgbGFiZWxcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdmFsdWVzOiBBcnJheTxLZXlWYWx1ZTxzdHJpbmc+PjtcbiAgb25DaGFuZ2U6ICh2YWx1ZXM6IEFycmF5PEtleVZhbHVlPHN0cmluZz4+KSA9PiB2b2lkO1xuICBpZD86IHN0cmluZztcbiAga2V5UGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHZhbHVlUGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEtleVZhbHVlSW5wdXQgPSAoe1xuICB2YWx1ZXMsXG4gIG9uQ2hhbmdlLFxuICBpZCxcbiAga2V5UGxhY2Vob2xkZXIgPSAnS2V5JyxcbiAgdmFsdWVQbGFjZWhvbGRlciA9ICdWYWx1ZSAob3B0aW9uYWwpJyxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIHt2YWx1ZXMubGVuZ3RoID8gKFxuICAgICAgICB2YWx1ZXMubWFwKCh2YWx1ZSwgaWR4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWlyfSBrZXk9e2lkeH0+XG4gICAgICAgICAgICA8U2VnbWVudElucHV0XG4gICAgICAgICAgICAgIGlkPXtgJHtpZH0ta2V5LSR7aWR4fWB9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtrZXlQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmtleX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICB2YWx1ZXMubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2LmtleSA9IFN0cmluZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5saW5lTGFiZWwgYXJpYS1sYWJlbD1cImVxdWFsc1wiIGNsYXNzTmFtZT17c3R5bGVzLm9wZXJhdG9yfSB3aWR0aD17RVFfV0lEVEh9PlxuICAgICAgICAgICAgICA9XG4gICAgICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICAgICAgPFNlZ21lbnRJbnB1dFxuICAgICAgICAgICAgICBpZD17YCR7aWR9LXZhbHVlLSR7aWR4fWB9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt2YWx1ZVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgdmFsdWVzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdi52YWx1ZSA9IFN0cmluZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi52YWx1ZXMuc2xpY2UoMCwgaWR4KSwgLi4udmFsdWVzLnNsaWNlKGlkeCArIDEpXSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgcXVlcnktcGFydFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZW1vdmUgdGFnXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ0aW1lc1wiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtpZHggPT09IHZhbHVlcy5sZW5ndGggLSAxID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoWy4uLnZhbHVlcywgeyBrZXk6ICcnLCB2YWx1ZTogJycgfV0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgcXVlcnktcGFydFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZCB0YWdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInBsdXNcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi52YWx1ZXMsIHsga2V5OiAnJywgdmFsdWU6ICcnIH1dKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgdGFnXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5VmFsdWVJbnB1dDtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAke3RoZW1lLnNwYWNpbmcueHN9IDA7XG4gIGAsXG4gIHBhaXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYCxcbiAgb3BlcmF0b3I6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5wYWxldHRlLm9yYW5nZX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBEYXRhU291cmNlSnNvbkRhdGEsXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLFxuICBHcmFmYW5hVGhlbWUsXG4gIEtleVZhbHVlLFxuICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24sXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBpY2tlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbnB1dCwgVGFnc0lucHV0LCB1c2VTdHlsZXMsIElubGluZVN3aXRjaCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IEtleVZhbHVlSW5wdXQgZnJvbSAnLi9LZXlWYWx1ZUlucHV0JztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTG9nc09wdGlvbnMge1xuICBkYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nW107XG4gIG1hcHBlZFRhZ3M/OiBBcnJheTxLZXlWYWx1ZTxzdHJpbmc+PjtcbiAgbWFwVGFnTmFtZXNFbmFibGVkPzogYm9vbGVhbjtcbiAgc3BhblN0YXJ0VGltZVNoaWZ0Pzogc3RyaW5nO1xuICBzcGFuRW5kVGltZVNoaWZ0Pzogc3RyaW5nO1xuICBmaWx0ZXJCeVRyYWNlSUQ/OiBib29sZWFuO1xuICBmaWx0ZXJCeVNwYW5JRD86IGJvb2xlYW47XG4gIGxva2lTZWFyY2g/OiBib29sZWFuOyAvLyBsZWdhY3lcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTG9nc0RhdGEgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICB0cmFjZXNUb0xvZ3M/OiBUcmFjZVRvTG9nc09wdGlvbnM7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8VHJhY2VUb0xvZ3NEYXRhPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gVHJhY2VUb0xvZ3NTZXR0aW5ncyh7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyB3aWR0aDogJzEwMCUnIH0pfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5UcmFjZSB0byBsb2dzPC9oMz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvVGV4dH0+XG4gICAgICAgIFRyYWNlIHRvIGxvZ3MgbGV0cyB5b3UgbmF2aWdhdGUgZnJvbSBhIHRyYWNlIHNwYW4gdG8gdGhlIHNlbGVjdGVkIGRhdGEgc291cmNlJmFwb3M7cyBsb2dzLlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIHRvb2x0aXA9XCJUaGUgZGF0YSBzb3VyY2UgdGhlIHRyYWNlIGlzIGdvaW5nIHRvIG5hdmlnYXRlIHRvXCIgbGFiZWw9XCJEYXRhIHNvdXJjZVwiIGxhYmVsV2lkdGg9ezI2fT5cbiAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgaW5wdXRJZD1cInRyYWNlLXRvLWxvZ3MtZGF0YS1zb3VyY2UtcGlja2VyXCJcbiAgICAgICAgICAgIGZpbHRlcj17KGRzKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFRyYWNlIHRvIGxvZ3Mgb25seSBzdXBwb3J0cyBsb2tpIGFuZCBzcGx1bmsgYXQgdGhlIG1vbWVudFxuICAgICAgICAgICAgICByZXR1cm4gZHMudHlwZSA9PT0gJ2xva2knIHx8IGRzLnR5cGUgPT09ICdncmFmYW5hLXNwbHVuay1kYXRhc291cmNlJztcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjdXJyZW50PXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uZGF0YXNvdXJjZVVpZH1cbiAgICAgICAgICAgIG5vRGVmYXVsdD17dHJ1ZX1cbiAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZHM6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiBkcy51aWQsXG4gICAgICAgICAgICAgICAgdGFnczogb3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3MsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIHtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwVGFnTmFtZXNFbmFibGVkID8gKFxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICB0b29sdGlwPVwiVGFncyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgTG9raSBxdWVyeS4gRGVmYXVsdCB0YWdzOiAnY2x1c3RlcicsICdob3N0bmFtZScsICduYW1lc3BhY2UnLCAncG9kJ1wiXG4gICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxuICAgICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEtleVZhbHVlSW5wdXRcbiAgICAgICAgICAgICAga2V5UGxhY2Vob2xkZXI9XCJUYWdcIlxuICAgICAgICAgICAgICB2YWx1ZXM9e1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5tYXBwZWRUYWdzID8/XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3M/Lm1hcCgodGFnKSA9PiAoeyBrZXk6IHRhZyB9KSkgPz9cbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgICAgbWFwcGVkVGFnczogdixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICApIDogKFxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICB0b29sdGlwPVwiVGFncyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgTG9raSBxdWVyeS4gRGVmYXVsdCB0YWdzOiAnY2x1c3RlcicsICdob3N0bmFtZScsICduYW1lc3BhY2UnLCAncG9kJ1wiXG4gICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxuICAgICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRhZ3NJbnB1dFxuICAgICAgICAgICAgICB0YWdzPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8udGFnc31cbiAgICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHRhZ3MpID0+XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgKX1cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIk1hcCB0YWcgbmFtZXNcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiTWFwIHRyYWNlIHRhZyBuYW1lcyB0byBsb2cgbGFiZWwgbmFtZXMuIEV4OiBrOHMucG9kLm5hbWUgLT4gcG9kXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbmxpbmVTd2l0Y2hcbiAgICAgICAgICAgIGlkPVwibWFwVGFnTmFtZXNcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5tYXBUYWdOYW1lc0VuYWJsZWQgPz8gZmFsc2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgbWFwVGFnTmFtZXNFbmFibGVkOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJTcGFuIHN0YXJ0IHRpbWUgc2hpZnRcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiU2hpZnRzIHRoZSBzdGFydCB0aW1lIG9mIHRoZSBzcGFuLiBEZWZhdWx0IDAgKFRpbWUgdW5pdHMgY2FuIGJlIHVzZWQgaGVyZSwgZm9yIGV4YW1wbGU6IDVzLCAxbSwgM2gpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxaFwiXG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIHNwYW5TdGFydFRpbWVTaGlmdDogdi5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5zcGFuU3RhcnRUaW1lU2hpZnQgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJTcGFuIGVuZCB0aW1lIHNoaWZ0XCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIlNoaWZ0cyB0aGUgZW5kIHRpbWUgb2YgdGhlIHNwYW4uIERlZmF1bHQgMCBUaW1lIHVuaXRzIGNhbiBiZSB1c2VkIGhlcmUsIGZvciBleGFtcGxlOiA1cywgMW0sIDNoXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxaFwiXG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIHNwYW5FbmRUaW1lU2hpZnQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uc3BhbkVuZFRpbWVTaGlmdCB8fCAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlciBieSBUcmFjZSBJRFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJGaWx0ZXJzIGxvZ3MgYnkgVHJhY2UgSUQuIEFwcGVuZHMgJ3w9PHRyYWNlIGlkPicgdG8gdGhlIHF1ZXJ5LlwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImZpbHRlckJ5VHJhY2VJRFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmZpbHRlckJ5VHJhY2VJRH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJCeVRyYWNlSUQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlciBieSBTcGFuIElEXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIkZpbHRlcnMgbG9ncyBieSBTcGFuIElELiBBcHBlbmRzICd8PTxzcGFuIGlkPicgdG8gdGhlIHF1ZXJ5LlwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImZpbHRlckJ5U3BhbklEXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uZmlsdGVyQnlTcGFuSUR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZmlsdGVyQnlTcGFuSUQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGluZm9UZXh0OiBjc3NgXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBEYXRhU291cmNlSnNvbkRhdGEsXG4gIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsXG4gIEdyYWZhbmFUaGVtZSxcbiAgS2V5VmFsdWUsXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGlja2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IEtleVZhbHVlSW5wdXQgZnJvbSAnLi4vVHJhY2VUb0xvZ3MvS2V5VmFsdWVJbnB1dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb01ldHJpY3NPcHRpb25zIHtcbiAgZGF0YXNvdXJjZVVpZD86IHN0cmluZztcbiAgdGFncz86IEFycmF5PEtleVZhbHVlPHN0cmluZz4+O1xuICBxdWVyaWVzOiBUcmFjZVRvTWV0cmljUXVlcnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTWV0cmljUXVlcnkge1xuICBuYW1lPzogc3RyaW5nO1xuICBxdWVyeT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTWV0cmljc0RhdGEgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICB0cmFjZXNUb01ldHJpY3M/OiBUcmFjZVRvTWV0cmljc09wdGlvbnM7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8VHJhY2VUb01ldHJpY3NEYXRhPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gVHJhY2VUb01ldHJpY3NTZXR0aW5ncyh7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyB3aWR0aDogJzEwMCUnIH0pfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5UcmFjZSB0byBtZXRyaWNzPC9oMz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvVGV4dH0+XG4gICAgICAgIFRyYWNlIHRvIG1ldHJpY3MgbGV0cyB5b3UgbmF2aWdhdGUgZnJvbSBhIHRyYWNlIHNwYW4gdG8gdGhlIHNlbGVjdGVkIGRhdGEgc291cmNlLlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdyBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICA8SW5saW5lRmllbGQgdG9vbHRpcD1cIlRoZSBkYXRhIHNvdXJjZSB0aGUgdHJhY2UgaXMgZ29pbmcgdG8gbmF2aWdhdGUgdG9cIiBsYWJlbD1cIkRhdGEgc291cmNlXCIgbGFiZWxXaWR0aD17MjZ9PlxuICAgICAgICAgIDxEYXRhU291cmNlUGlja2VyXG4gICAgICAgICAgICBpbnB1dElkPVwidHJhY2UtdG8tbWV0cmljcy1kYXRhLXNvdXJjZS1waWNrZXJcIlxuICAgICAgICAgICAgcGx1Z2luSWQ9XCJwcm9tZXRoZXVzXCJcbiAgICAgICAgICAgIGN1cnJlbnQ9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzPy5kYXRhc291cmNlVWlkfVxuICAgICAgICAgICAgbm9EZWZhdWx0PXt0cnVlfVxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhkcykgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb01ldHJpY3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3MsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogZHMudWlkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIHtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcz8uZGF0YXNvdXJjZVVpZCA/IChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb01ldHJpY3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3MsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiVGFncyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgbWV0cmljcyBxdWVyeS5cIiBsYWJlbD1cIlRhZ3NcIiBsYWJlbFdpZHRoPXsyNn0+XG4gICAgICAgICAgPEtleVZhbHVlSW5wdXRcbiAgICAgICAgICAgIGtleVBsYWNlaG9sZGVyPVwiVGFnXCJcbiAgICAgICAgICAgIHZhbHVlcz17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LnRhZ3MgPz8gW119XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9NZXRyaWNzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzLFxuICAgICAgICAgICAgICAgIHRhZ3M6IHYsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIHtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcz8ucXVlcmllcz8ubWFwKChxdWVyeSwgaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZXMucXVlcnlSb3d9PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkxpbmsgTGFiZWxcIiBsYWJlbFdpZHRoPXsxMH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJMaW5rIExhYmVsXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5Lm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdRdWVyaWVzID0gb3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LnF1ZXJpZXMuc2xpY2UoKSA/PyBbXTtcbiAgICAgICAgICAgICAgICBuZXdRdWVyaWVzW2ldLm5hbWUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb01ldHJpY3MnLCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcyxcbiAgICAgICAgICAgICAgICAgIHF1ZXJpZXM6IG5ld1F1ZXJpZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIlF1ZXJ5XCJcbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezEwfVxuICAgICAgICAgICAgdG9vbHRpcD1cIlRoZSBQcm9tZXRoZXVzIHF1ZXJ5IHRoYXQgd2lsbCBydW4gd2hlbiBuYXZpZ2F0aW5nIGZyb20gYSB0cmFjZSB0byBtZXRyaWNzLiBJbnRlcnBvbGF0ZSB0YWdzIHVzaW5nIHRoZSBgJF9fdGFnc2Aga2V5d29yZC5cIlxuICAgICAgICAgICAgZ3Jvd1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIlF1ZXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UXVlcmllcyA9IG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzPy5xdWVyaWVzLnNsaWNlKCkgPz8gW107XG4gICAgICAgICAgICAgICAgbmV3UXVlcmllc1tpXS5xdWVyeSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTWV0cmljcycsIHtcbiAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzLFxuICAgICAgICAgICAgICAgICAgcXVlcmllczogbmV3UXVlcmllcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBxdWVyeVwiXG4gICAgICAgICAgICBpY29uPVwidGltZXNcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuZXdRdWVyaWVzID0gb3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LnF1ZXJpZXMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgbmV3UXVlcmllcz8uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTWV0cmljcycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcyxcbiAgICAgICAgICAgICAgICBxdWVyaWVzOiBuZXdRdWVyaWVzLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cblxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgdGl0bGU9XCJBZGQgcXVlcnlcIlxuICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb01ldHJpY3MnLCB7XG4gICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcyxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFsuLi4ob3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LnF1ZXJpZXMgPz8gW10pLCB7IHF1ZXJ5OiAnJyB9XSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWRkIHF1ZXJ5XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGluZm9UZXh0OiBjc3NgXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gIGAsXG4gIHJvdzogY3NzYFxuICAgIGxhYmVsOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBgLFxuICBxdWVyeVJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gIGAsXG59KTtcbiIsIi8qKlxuICogR2V0IG5vbiBvdmVybGFwcGluZyBkdXJhdGlvbiBvZiB0aGUgcmFuZ2VzIGFzIHRoZXkgY2FuIG92ZXJsYXAgb3IgaGF2ZSBnYXBzLlxuICovXG5pbXBvcnQgeyBGaWVsZFR5cGUsIE11dGFibGVEYXRhRnJhbWUsIE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMgYXMgRmllbGRzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uKHJhbmdlczogQXJyYXk8W251bWJlciwgbnVtYmVyXT4pOiBudW1iZXIge1xuICByYW5nZXMuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pO1xuICBjb25zdCBtZXJnZWRSYW5nZXMgPSByYW5nZXMucmVkdWNlKChhY2MsIHJhbmdlKSA9PiB7XG4gICAgaWYgKCFhY2MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW3JhbmdlXTtcbiAgICB9XG4gICAgY29uc3QgdGFpbCA9IGFjYy5zbGljZSgtMSlbMF07XG4gICAgY29uc3QgW3ByZXZTdGFydCwgcHJldkVuZF0gPSB0YWlsO1xuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlO1xuICAgIGlmIChlbmQgPCBwcmV2RW5kKSB7XG4gICAgICAvLyBJbiB0aGlzIGNhc2UgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgaW5zaWRlIHRoZSBwcmV2IHJhbmdlIHNvIHdlIGNhbiBqdXN0IGlnbm9yZSBpdC5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gcHJldkVuZCkge1xuICAgICAgLy8gVGhlcmUgaXMgbm8gb3ZlcmxhcCBzbyB3ZSBjYW4ganVzdCBhZGQgaXQgdG8gc3RhY2tcbiAgICAgIHJldHVybiBbLi4uYWNjLCByYW5nZV07XG4gICAgfVxuXG4gICAgLy8gV2Uga25vdyB0aGVyZSBpcyBvdmVybGFwIGFuZCBjdXJyZW50IHJhbmdlIGVuZHMgbGF0ZXIgdGhhbiBwcmV2aW91cyBzbyB3ZSBjYW4ganVzdCBleHRlbmQgdGhlIHJhbmdlXG4gICAgcmV0dXJuIFsuLi5hY2Muc2xpY2UoMCwgLTEpLCBbcHJldlN0YXJ0LCBlbmRdXSBhcyBBcnJheTxbbnVtYmVyLCBudW1iZXJdPjtcbiAgfSwgW10gYXMgQXJyYXk8W251bWJlciwgbnVtYmVyXT4pO1xuXG4gIHJldHVybiBtZXJnZWRSYW5nZXMucmVkdWNlKChhY2MsIHJhbmdlKSA9PiB7XG4gICAgcmV0dXJuIGFjYyArIChyYW5nZVsxXSAtIHJhbmdlWzBdKTtcbiAgfSwgMCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hcCBvZiB0aGUgc3BhbnMgd2l0aCBjaGlsZHJlbiBhcnJheSBmb3IgZWFzaWVyIHByb2Nlc3NpbmcuIEl0IHdpbGwgYWxzbyBjb250YWluIGVtcHR5IHNwYW5zIGluIGNhc2VcbiAqIHNwYW4gaXMgbWlzc2luZyBidXQgb3RoZXIgc3BhbnMgYXJlIGl0J3MgY2hpbGRyZW4uIFRoaXMgaXMgbW9yZSBnZW5lcmljIGJlY2F1c2UgaXQgbmVlZHMgdG8gYWxsb3cgaXRlcmF0aW5nIG92ZXJcbiAqIGJvdGggYXJyYXlzIGFuZCBkYXRhZnJhbWUgdmlld3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3Bhbk1hcDxUPihnZXRTcGFuOiAoaW5kZXg6IG51bWJlcikgPT4geyBzcGFuOiBUOyBpZDogc3RyaW5nOyBwYXJlbnRJZHM6IHN0cmluZ1tdIH0gfCB1bmRlZmluZWQpOiB7XG4gIFtpZDogc3RyaW5nXTogeyBzcGFuOiBUOyBjaGlsZHJlbjogc3RyaW5nW10gfTtcbn0ge1xuICBjb25zdCBzcGFuTWFwOiB7IFtpZDogc3RyaW5nXTogeyBzcGFuPzogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH0gfSA9IHt9O1xuXG4gIGxldCBzcGFuO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IChzcGFuID0gZ2V0U3BhbihpbmRleCkpLCAhIXNwYW47IGluZGV4KyspIHtcbiAgICBpZiAoIXNwYW5NYXBbc3Bhbi5pZF0pIHtcbiAgICAgIHNwYW5NYXBbc3Bhbi5pZF0gPSB7XG4gICAgICAgIHNwYW46IHNwYW4uc3BhbixcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Bhbk1hcFtzcGFuLmlkXS5zcGFuID0gc3Bhbi5zcGFuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGFyZW50SWQgb2Ygc3Bhbi5wYXJlbnRJZHMpIHtcbiAgICAgIGlmIChwYXJlbnRJZCkge1xuICAgICAgICBpZiAoIXNwYW5NYXBbcGFyZW50SWRdKSB7XG4gICAgICAgICAgc3Bhbk1hcFtwYXJlbnRJZF0gPSB7XG4gICAgICAgICAgICBzcGFuOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NwYW4uaWRdLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbk1hcFtwYXJlbnRJZF0uY2hpbGRyZW4ucHVzaChzcGFuLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3Bhbk1hcCBhcyB7IFtpZDogc3RyaW5nXTogeyBzcGFuOiBUOyBjaGlsZHJlbjogc3RyaW5nW10gfSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHMoZHVyYXRpb246IG51bWJlciwgdHJhY2VEdXJhdGlvbjogbnVtYmVyLCBzZWxmRHVyYXRpb246IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1haW46IGAke3RvRml4ZWROb1RyYWlsaW5nWmVyb3MoZHVyYXRpb24pfW1zICgke3RvRml4ZWROb1RyYWlsaW5nWmVyb3MoKGR1cmF0aW9uIC8gdHJhY2VEdXJhdGlvbikgKiAxMDApfSUpYCxcbiAgICBzZWNvbmRhcnk6IGAke3RvRml4ZWROb1RyYWlsaW5nWmVyb3Moc2VsZkR1cmF0aW9uKX1tcyAoJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKFxuICAgICAgKHNlbGZEdXJhdGlvbiAvIGR1cmF0aW9uKSAqIDEwMFxuICAgICl9JSlgLFxuICB9O1xufVxuXG5mdW5jdGlvbiB0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKG46IG51bWJlcikge1xuICByZXR1cm4gcGFyc2VGbG9hdChuLnRvRml4ZWQoMikpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBkZWZhdWx0IGZyYW1lcyB1c2VkIHdoZW4gcmV0dXJuaW5nIGRhdGEgZm9yIG5vZGUgZ3JhcGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRnJhbWVzKCkge1xuICBjb25zdCBub2Rlc0ZyYW1lID0gbmV3IE11dGFibGVEYXRhRnJhbWUoe1xuICAgIGZpZWxkczogW1xuICAgICAgeyBuYW1lOiBGaWVsZHMuaWQsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLnRpdGxlLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zdWJUaXRsZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMubWFpblN0YXQsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ1RvdGFsIHRpbWUgKCUgb2YgdHJhY2UpJyB9IH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zZWNvbmRhcnlTdGF0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdTZWxmIHRpbWUgKCUgb2YgdG90YWwpJyB9IH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IEZpZWxkcy5jb2xvcixcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgICAgY29uZmlnOiB7IGNvbG9yOiB7IG1vZGU6ICdjb250aW51b3VzLUdyWWxSZCcgfSwgZGlzcGxheU5hbWU6ICdTZWxmIHRpbWUgLyBUcmFjZSBkdXJhdGlvbicgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ25vZGVHcmFwaCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZWRnZXNGcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogRmllbGRzLmlkLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy50YXJnZXQsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLnNvdXJjZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IERhdGFTb3VyY2VIdHRwU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb2RlR3JhcGhTZXR0aW5ncyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvTm9kZUdyYXBoU2V0dGluZ3MnO1xuaW1wb3J0IHsgVHJhY2VUb0xvZ3NTZXR0aW5ncyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb0xvZ3MvVHJhY2VUb0xvZ3NTZXR0aW5ncyc7XG5pbXBvcnQgeyBUcmFjZVRvTWV0cmljc1NldHRpbmdzIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9UcmFjZVRvTWV0cmljcy9UcmFjZVRvTWV0cmljc1NldHRpbmdzJztcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnRWRpdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGF0YVNvdXJjZUh0dHBTZXR0aW5nc1xuICAgICAgICBkZWZhdWx0VXJsPVwiaHR0cDovL2xvY2FsaG9zdDo5NDExXCJcbiAgICAgICAgZGF0YVNvdXJjZUNvbmZpZz17b3B0aW9uc31cbiAgICAgICAgc2hvd0FjY2Vzc09wdGlvbnM9e2ZhbHNlfVxuICAgICAgICBvbkNoYW5nZT17b25PcHRpb25zQ2hhbmdlfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgIDxUcmFjZVRvTG9nc1NldHRpbmdzIG9wdGlvbnM9e29wdGlvbnN9IG9uT3B0aW9uc0NoYW5nZT17b25PcHRpb25zQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtjb25maWcuZmVhdHVyZVRvZ2dsZXMudHJhY2VUb01ldHJpY3MgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxUcmFjZVRvTWV0cmljc1NldHRpbmdzIG9wdGlvbnM9e29wdGlvbnN9IG9uT3B0aW9uc0NoYW5nZT17b25PcHRpb25zQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPE5vZGVHcmFwaFNldHRpbmdzIG9wdGlvbnM9e29wdGlvbnN9IG9uT3B0aW9uc0NoYW5nZT17b25PcHRpb25zQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGZyb21QYWlycyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXN5bmNGbiwgdXNlTW91bnQsIHVzZU1vdW50ZWRTdGF0ZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBBc3luY1N0YXRlIH0gZnJvbSAncmVhY3QtdXNlL2xpYi91c2VBc3luY0ZuJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgUXVlcnlFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHtcbiAgQnV0dG9uQ2FzY2FkZXIsXG4gIENhc2NhZGVyT3B0aW9uLFxuICBGaWxlRHJvcHpvbmUsXG4gIElubGluZUZpZWxkLFxuICBJbmxpbmVGaWVsZFJvdyxcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgdXNlVGhlbWUyLFxuICBRdWVyeUZpZWxkLFxuICB1c2VTdHlsZXMyLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICdhcHAvc3RvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBhcGlQcmVmaXggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBaaXBraW5EYXRhc291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IFppcGtpblF1ZXJ5LCBaaXBraW5RdWVyeVR5cGUsIFppcGtpblNwYW4gfSBmcm9tICcuL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IFF1ZXJ5RWRpdG9yUHJvcHM8Wmlwa2luRGF0YXNvdXJjZSwgWmlwa2luUXVlcnk+O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0cmFjZXNDYXNjYWRlcjogY3NzKHtcbiAgICAgIGxhYmVsOiAndHJhY2VzQ2FzY2FkZXInLFxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSksXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgWmlwa2luUXVlcnlGaWVsZCA9ICh7IHF1ZXJ5LCBvbkNoYW5nZSwgb25SdW5RdWVyeSwgZGF0YXNvdXJjZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzZXJ2aWNlT3B0aW9ucyA9IHVzZVNlcnZpY2VzKGRhdGFzb3VyY2UpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgb25Mb2FkT3B0aW9ucywgYWxsT3B0aW9ucyB9ID0gdXNlTG9hZE9wdGlvbnMoZGF0YXNvdXJjZSk7XG5cbiAgY29uc3Qgb25TZWxlY3RUcmFjZSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZXM6IHN0cmluZ1tdLCBzZWxlY3RlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10pID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZE9wdGlvbnMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHRyYWNlSUQgPSBzZWxlY3RlZE9wdGlvbnNbMl0udmFsdWU7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHF1ZXJ5OiB0cmFjZUlEIH0pO1xuICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25DaGFuZ2UsIG9uUnVuUXVlcnksIHF1ZXJ5XVxuICApO1xuXG4gIGNvbnN0IG9uQ2hhbmdlUXVlcnkgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5leHRRdWVyeSA9IHsgLi4ucXVlcnksIHF1ZXJ5OiB2YWx1ZSB9O1xuICAgIG9uQ2hhbmdlKG5leHRRdWVyeSk7XG4gIH07XG5cbiAgbGV0IGNhc2NhZGVyT3B0aW9ucyA9IHVzZU1hcFRvQ2FzY2FkZXJPcHRpb25zKHNlcnZpY2VPcHRpb25zLCBhbGxPcHRpb25zKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlF1ZXJ5IHR5cGVcIj5cbiAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cDxaaXBraW5RdWVyeVR5cGU+XG4gICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICd0cmFjZUlEJywgbGFiZWw6ICdUcmFjZUlEJyB9LFxuICAgICAgICAgICAgICB7IHZhbHVlOiAndXBsb2FkJywgbGFiZWw6ICdKU09OIGZpbGUnIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnF1ZXJ5VHlwZSB8fCAndHJhY2VJRCd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6IHYsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAge3F1ZXJ5LnF1ZXJ5VHlwZSA9PT0gJ3VwbG9hZCcgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpIH0pfT5cbiAgICAgICAgICA8RmlsZURyb3B6b25lXG4gICAgICAgICAgICBvcHRpb25zPXt7IG11bHRpcGxlOiBmYWxzZSB9fVxuICAgICAgICAgICAgb25Mb2FkPXsocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGRhdGFzb3VyY2UudXBsb2FkZWRKc29uID0gcmVzdWx0O1xuICAgICAgICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxCdXR0b25DYXNjYWRlclxuICAgICAgICAgICAgb3B0aW9ucz17Y2FzY2FkZXJPcHRpb25zfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0VHJhY2V9XG4gICAgICAgICAgICBsb2FkRGF0YT17b25Mb2FkT3B0aW9uc31cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYnV0dG9uUHJvcHM9e3sgY2xhc3NOYW1lOiBzdHlsZXMudHJhY2VzQ2FzY2FkZXIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBUcmFjZXNcbiAgICAgICAgICA8L0J1dHRvbkNhc2NhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93IGZsZXgtc2hyaW5rLTEgbWluLXdpZHRoLTE1XCI+XG4gICAgICAgICAgICA8UXVlcnlGaWVsZFxuICAgICAgICAgICAgICBxdWVyeT17cXVlcnkucXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVF1ZXJ5fVxuICAgICAgICAgICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0luc2VydCBUcmFjZSBJRCAocnVuIHdpdGggU2hpZnQrRW50ZXIpJ31cbiAgICAgICAgICAgICAgcG9ydGFsT3JpZ2luPVwiemlwa2luXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuLy8gRXhwb3J0ZWQgZm9yIHRlc3RzXG5leHBvcnQgZnVuY3Rpb24gdXNlU2VydmljZXMoZGF0YXNvdXJjZTogWmlwa2luRGF0YXNvdXJjZSk6IEFzeW5jU3RhdGU8Q2FzY2FkZXJPcHRpb25bXT4ge1xuICBjb25zdCB1cmwgPSBgJHthcGlQcmVmaXh9L3NlcnZpY2VzYDtcblxuICBjb25zdCBbc2VydmljZXNPcHRpb25zLCBmZXRjaF0gPSB1c2VBc3luY0ZuKGFzeW5jICgpOiBQcm9taXNlPENhc2NhZGVyT3B0aW9uW10+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VydmljZXM6IHN0cmluZ1tdIHwgbnVsbCA9IGF3YWl0IGRhdGFzb3VyY2UubWV0YWRhdGFSZXF1ZXN0KHVybCk7XG4gICAgICBpZiAoc2VydmljZXMpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VzLnNvcnQoKS5tYXAoKHNlcnZpY2UpID0+ICh7XG4gICAgICAgICAgbGFiZWw6IHNlcnZpY2UsXG4gICAgICAgICAgdmFsdWU6IHNlcnZpY2UsXG4gICAgICAgICAgaXNMZWFmOiBmYWxzZSxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlcnJvclRvU2hvdyA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJztcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbignRmFpbGVkIHRvIGxvYWQgc2VydmljZXMgZnJvbSBaaXBraW4nLCBlcnJvclRvU2hvdykpKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfSwgW2RhdGFzb3VyY2VdKTtcblxuICB1c2VNb3VudCgoKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIHByb2JhYmx5IGNhbGwgdGhpcyBwZXJpb2RpY2FsbHkgdG8gZ2V0IG5ldyBzZXJ2aWNlcyBhZnRlciBtb3VudC5cbiAgICBmZXRjaCgpO1xuICB9KTtcblxuICByZXR1cm4gc2VydmljZXNPcHRpb25zO1xufVxuXG50eXBlIE9wdGlvbnNTdGF0ZSA9IHtcbiAgW3NlcnZpY2VOYW1lOiBzdHJpbmddOiB7XG4gICAgW3NwYW5OYW1lOiBzdHJpbmddOiB7XG4gICAgICBbdHJhY2VJZDogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gIH07XG59O1xuXG4vLyBFeHBvcnRlZCBmb3IgdGVzdHNcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2FkT3B0aW9ucyhkYXRhc291cmNlOiBaaXBraW5EYXRhc291cmNlKSB7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZU1vdW50ZWRTdGF0ZSgpO1xuICBjb25zdCBbYWxsT3B0aW9ucywgc2V0QWxsT3B0aW9uc10gPSB1c2VTdGF0ZSh7fSBhcyBPcHRpb25zU3RhdGUpO1xuXG4gIGNvbnN0IFssIGZldGNoU3BhbnNdID0gdXNlQXN5bmNGbihcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5kU3BhbnMoc2VydmljZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBjb25zdCB1cmwgPSBgJHthcGlQcmVmaXh9L3NwYW5zYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoZSByZXNwb25zZSBvZiB0aGlzIHNob3VsZCBoYXZlIGJlZW4gZnVsbCBaaXBraW5TcGFuIG9iamVjdHMgYmFzZWQgb24gQVBJIGRvY3MgYnV0IGlzIGp1c3QgbGlzdFxuICAgICAgICAvLyBvZiBzcGFuIG5hbWVzLlxuICAgICAgICAvLyBUT0RPOiBjaGVjayBpZiB0aGlzIGlzIHNvbWUgaXNzdWUgb2YgdmVyc2lvbiB1c2VkIG9yIHNvbWV0aGluZyBlbHNlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBzdHJpbmdbXSA9IGF3YWl0IGRhdGFzb3VyY2UubWV0YWRhdGFSZXF1ZXN0KHVybCwgeyBzZXJ2aWNlTmFtZTogc2VydmljZSB9KTtcbiAgICAgICAgaWYgKGlzTW91bnRlZCgpKSB7XG4gICAgICAgICAgc2V0QWxsT3B0aW9ucygoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW5PcHRpb25zID0gZnJvbVBhaXJzKHJlc3BvbnNlLm1hcCgoc3Bhbjogc3RyaW5nKSA9PiBbc3BhbiwgdW5kZWZpbmVkXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIFtzZXJ2aWNlXTogc3Bhbk9wdGlvbnMgYXMgYW55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgZXJyb3JUb1Nob3cgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbignRmFpbGVkIHRvIGxvYWQgc3BhbnMgZnJvbSBaaXBraW4nLCBlcnJvclRvU2hvdykpKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICBbZGF0YXNvdXJjZSwgYWxsT3B0aW9uc11cbiAgKTtcblxuICBjb25zdCBbLCBmZXRjaFRyYWNlc10gPSB1c2VBc3luY0ZuKFxuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbmRUcmFjZXMoc2VydmljZU5hbWU6IHN0cmluZywgc3Bhbk5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgY29uc3QgdXJsID0gYCR7YXBpUHJlZml4fS90cmFjZXNgO1xuICAgICAgY29uc3Qgc2VhcmNoID0ge1xuICAgICAgICBzZXJ2aWNlTmFtZSxcbiAgICAgICAgc3Bhbk5hbWUsXG4gICAgICAgIC8vIFNlZSBvdGhlciBwYXJhbXMgYW5kIGRlZmF1bHQgaGVyZSBodHRwczovL3ppcGtpbi5pby96aXBraW4tYXBpLyMvZGVmYXVsdC9nZXRfdHJhY2VzXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgcmV0dXJuIGp1c3Qgcm9vdCB0cmFjZXMgYXMgdGhlcmUgaXNuJ3QgYW55IG5lc3RpbmdcbiAgICAgICAgY29uc3QgdHJhY2VzOiBaaXBraW5TcGFuW11bXSA9IGF3YWl0IGRhdGFzb3VyY2UubWV0YWRhdGFSZXF1ZXN0KHVybCwgc2VhcmNoKTtcbiAgICAgICAgaWYgKGlzTW91bnRlZCgpKSB7XG4gICAgICAgICAgY29uc3QgbmV3VHJhY2VzID0gdHJhY2VzLmxlbmd0aFxuICAgICAgICAgICAgPyBmcm9tUGFpcnMoXG4gICAgICAgICAgICAgICAgdHJhY2VzLm1hcCgodHJhY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RTcGFuID0gdHJhY2UuZmluZCgoc3BhbikgPT4gIXNwYW4ucGFyZW50SWQpITtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtgJHtyb290U3Bhbi5uYW1lfSBbJHtNYXRoLmZsb29yKHJvb3RTcGFuLmR1cmF0aW9uIC8gMTAwMCl9IG1zXWAsIHJvb3RTcGFuLnRyYWNlSWRdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbm9UcmFjZXNPcHRpb25zO1xuXG4gICAgICAgICAgc2V0QWxsT3B0aW9ucygoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW5zID0gc3RhdGVbc2VydmljZU5hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIFtzZXJ2aWNlTmFtZV06IHtcbiAgICAgICAgICAgICAgICAuLi5zcGFucyxcbiAgICAgICAgICAgICAgICBbc3Bhbk5hbWVdOiBuZXdUcmFjZXMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCBlcnJvclRvU2hvdyA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvciA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdGYWlsZWQgdG8gbG9hZCBzcGFucyBmcm9tIFppcGtpbicsIGVycm9yVG9TaG93KSkpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkYXRhc291cmNlXVxuICApO1xuXG4gIGNvbnN0IG9uTG9hZE9wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VsZWN0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdKSA9PiB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZmV0Y2hTcGFucyhzZXJ2aWNlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBjb25zdCBzcGFuTmFtZSA9IHNlbGVjdGVkT3B0aW9uc1sxXS52YWx1ZTtcbiAgICAgICAgZmV0Y2hUcmFjZXMoc2VydmljZSwgc3Bhbk5hbWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2ZldGNoU3BhbnMsIGZldGNoVHJhY2VzXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgb25Mb2FkT3B0aW9ucyxcbiAgICBhbGxPcHRpb25zLFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VNYXBUb0Nhc2NhZGVyT3B0aW9ucyhzZXJ2aWNlczogQXN5bmNTdGF0ZTxDYXNjYWRlck9wdGlvbltdPiwgYWxsT3B0aW9uczogT3B0aW9uc1N0YXRlKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgY2FzY2FkZXJPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XG5cbiAgICBpZiAoc2VydmljZXMudmFsdWUgJiYgc2VydmljZXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICBjYXNjYWRlck9wdGlvbnMgPSBzZXJ2aWNlcy52YWx1ZS5tYXAoKHNlcnZpY2VzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2VydmljZXMsXG4gICAgICAgICAgY2hpbGRyZW46XG4gICAgICAgICAgICBhbGxPcHRpb25zW3NlcnZpY2VzLnZhbHVlXSAmJlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWxsT3B0aW9uc1tzZXJ2aWNlcy52YWx1ZV0pLm1hcCgoc3Bhbk5hbWUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3Bhbk5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNwYW5OYW1lLFxuICAgICAgICAgICAgICAgIGlzTGVhZjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46XG4gICAgICAgICAgICAgICAgICBhbGxPcHRpb25zW3NlcnZpY2VzLnZhbHVlXVtzcGFuTmFtZV0gJiZcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFsbE9wdGlvbnNbc2VydmljZXMudmFsdWVdW3NwYW5OYW1lXSkubWFwKCh0cmFjZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdHJhY2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhbGxPcHRpb25zW3NlcnZpY2VzLnZhbHVlXVtzcGFuTmFtZV1bdHJhY2VOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHNlcnZpY2VzLnZhbHVlICYmICFzZXJ2aWNlcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGNhc2NhZGVyT3B0aW9ucyA9IG5vVHJhY2VzRm91bmRPcHRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBjYXNjYWRlck9wdGlvbnM7XG4gIH0sIFtzZXJ2aWNlcywgYWxsT3B0aW9uc10pO1xufVxuXG5jb25zdCBOT19UUkFDRVNfS0VZID0gJ19fTk9fVFJBQ0VTX18nO1xuY29uc3Qgbm9UcmFjZXNGb3VuZE9wdGlvbnMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ05vIHRyYWNlcyBmb3VuZCcsXG4gICAgdmFsdWU6ICdub190cmFjZXMnLFxuICAgIGlzTGVhZjogdHJ1ZSxcblxuICAgIC8vIENhbm5vdCBiZSBkaXNhYmxlZCBiZWNhdXNlIHRoZW4gY2FzY2FkZXIgc2hvd3MgJ2xvYWRpbmcnIGZvciBzb21lIHJlYXNvbi5cbiAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmNvbnN0IG5vVHJhY2VzT3B0aW9ucyA9IHtcbiAgJ1tObyB0cmFjZXMgaW4gdGltZSByYW5nZV0nOiBOT19UUkFDRVNfS0VZLFxufTtcbiIsImV4cG9ydCBjb25zdCBhcGlQcmVmaXggPSAnL2FwaS92Mic7XG4iLCJpbXBvcnQgeyBsYXN0VmFsdWVGcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIERhdGFTb3VyY2VKc29uRGF0YSxcbiAgRmllbGRUeXBlLFxuICBNdXRhYmxlRGF0YUZyYW1lLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhY2tlbmRTcnZSZXF1ZXN0LCBGZXRjaFJlc3BvbnNlLCBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBOb2RlR3JhcGhPcHRpb25zIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Ob2RlR3JhcGhTZXR0aW5ncyc7XG5cbmltcG9ydCB7IHNlcmlhbGl6ZVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMvZmV0Y2gnO1xuXG5pbXBvcnQgeyBhcGlQcmVmaXggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBaaXBraW5RdWVyeSwgWmlwa2luU3BhbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlR3JhcGhGcmFtZXMgfSBmcm9tICcuL3V0aWxzL2dyYXBoVHJhbnNmb3JtJztcbmltcG9ydCB7IHRyYW5zZm9ybVJlc3BvbnNlIH0gZnJvbSAnLi91dGlscy90cmFuc2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBaaXBraW5Kc29uRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIG5vZGVHcmFwaD86IE5vZGVHcmFwaE9wdGlvbnM7XG59XG5cbmV4cG9ydCBjbGFzcyBaaXBraW5EYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZUFwaTxaaXBraW5RdWVyeSwgWmlwa2luSnNvbkRhdGE+IHtcbiAgdXBsb2FkZWRKc29uOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IG51bGwgPSBudWxsO1xuICBub2RlR3JhcGg/OiBOb2RlR3JhcGhPcHRpb25zO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzPFppcGtpbkpzb25EYXRhPikge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMubm9kZUdyYXBoID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5ub2RlR3JhcGg7XG4gIH1cblxuICBxdWVyeShvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFppcGtpblF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldHNbMF07XG4gICAgaWYgKHRhcmdldC5xdWVyeVR5cGUgPT09ICd1cGxvYWQnKSB7XG4gICAgICBpZiAoIXRoaXMudXBsb2FkZWRKc29uKSB7XG4gICAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdIH0pO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0cmFjZURhdGEgPSBKU09OLnBhcnNlKHRoaXMudXBsb2FkZWRKc29uIGFzIHN0cmluZyk7XG4gICAgICAgIHJldHVybiBvZihyZXNwb25zZVRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiB0cmFjZURhdGEgfSwgdGhpcy5ub2RlR3JhcGg/LmVuYWJsZWQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBvZih7IGVycm9yOiB7IG1lc3NhZ2U6ICdKU09OIGlzIG5vdCB2YWxpZCBaaXBraW4gZm9ybWF0JyB9LCBkYXRhOiBbXSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LnF1ZXJ5KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0PFppcGtpblNwYW5bXT4oYCR7YXBpUHJlZml4fS90cmFjZS8ke2VuY29kZVVSSUNvbXBvbmVudCh0YXJnZXQucXVlcnkpfWApLnBpcGUoXG4gICAgICAgIG1hcCgocmVzKSA9PiByZXNwb25zZVRvRGF0YVF1ZXJ5UmVzcG9uc2UocmVzLCB0aGlzLm5vZGVHcmFwaD8uZW5hYmxlZCkpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb2YoZW1wdHlEYXRhUXVlcnlSZXNwb25zZSk7XG4gIH1cblxuICBhc3luYyBtZXRhZGF0YVJlcXVlc3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy5yZXF1ZXN0KHVybCwgcGFyYW1zLCB7IGhpZGVGcm9tSW5zcGVjdG9yOiB0cnVlIH0pKTtcbiAgICByZXR1cm4gcmVzLmRhdGE7XG4gIH1cblxuICBhc3luYyB0ZXN0RGF0YXNvdXJjZSgpOiBQcm9taXNlPHsgc3RhdHVzOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgYXdhaXQgdGhpcy5tZXRhZGF0YVJlcXVlc3QoYCR7YXBpUHJlZml4fS9zZXJ2aWNlc2ApO1xuICAgIHJldHVybiB7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgaXMgd29ya2luZycgfTtcbiAgfVxuXG4gIGdldFF1ZXJ5RGlzcGxheVRleHQocXVlcnk6IFppcGtpblF1ZXJ5KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcXVlcnkucXVlcnk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVlc3Q8VCA9IGFueT4oXG4gICAgYXBpVXJsOiBzdHJpbmcsXG4gICAgZGF0YT86IGFueSxcbiAgICBvcHRpb25zPzogUGFydGlhbDxCYWNrZW5kU3J2UmVxdWVzdD5cbiAgKTogT2JzZXJ2YWJsZTxGZXRjaFJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3QgcGFyYW1zID0gZGF0YSA/IHNlcmlhbGl6ZVBhcmFtcyhkYXRhKSA6ICcnO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaW5zdGFuY2VTZXR0aW5ncy51cmx9JHthcGlVcmx9JHtwYXJhbXMubGVuZ3RoID8gYD8ke3BhcmFtc31gIDogJyd9YDtcbiAgICBjb25zdCByZXEgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdXJsLFxuICAgIH07XG5cbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpLmZldGNoPFQ+KHJlcSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzcG9uc2VUb0RhdGFRdWVyeVJlc3BvbnNlKHJlc3BvbnNlOiB7IGRhdGE6IFppcGtpblNwYW5bXSB9LCBub2RlR3JhcGggPSBmYWxzZSk6IERhdGFRdWVyeVJlc3BvbnNlIHtcbiAgbGV0IGRhdGEgPSByZXNwb25zZT8uZGF0YSA/IFt0cmFuc2Zvcm1SZXNwb25zZShyZXNwb25zZT8uZGF0YSldIDogW107XG4gIGlmIChub2RlR3JhcGgpIHtcbiAgICBkYXRhLnB1c2goLi4uY3JlYXRlR3JhcGhGcmFtZXMocmVzcG9uc2U/LmRhdGEpKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gIH07XG59XG5cbmNvbnN0IGVtcHR5RGF0YVF1ZXJ5UmVzcG9uc2UgPSB7XG4gIGRhdGE6IFtcbiAgICBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0cmFjZScsXG4gICAgICAgICAgdHlwZTogRmllbGRUeXBlLnRyYWNlLFxuICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbWV0YToge1xuICAgICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgdHJhY2VGb3JtYXQ6ICd6aXBraW4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn07XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IENvbmZpZ0VkaXRvciB9IGZyb20gJy4vQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IFppcGtpblF1ZXJ5RmllbGQgfSBmcm9tICcuL1F1ZXJ5RmllbGQnO1xuaW1wb3J0IHsgWmlwa2luRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbihaaXBraW5EYXRhc291cmNlKVxuICAuc2V0UXVlcnlFZGl0b3IoWmlwa2luUXVlcnlGaWVsZClcbiAgLnNldENvbmZpZ0VkaXRvcihDb25maWdFZGl0b3IpO1xuIiwiaW1wb3J0IHsgRGF0YUZyYW1lLCBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIGFzIEZpZWxkcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uLCBnZXRTdGF0cywgbWFrZUZyYW1lcywgbWFrZVNwYW5NYXAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3V0aWxzL3RyYWNpbmcnO1xuaW1wb3J0IHsgWmlwa2luU3BhbiB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIE5vZGUge1xuICBbRmllbGRzLmlkXTogc3RyaW5nO1xuICBbRmllbGRzLnRpdGxlXTogc3RyaW5nO1xuICBbRmllbGRzLnN1YlRpdGxlXTogc3RyaW5nO1xuICBbRmllbGRzLm1haW5TdGF0XTogc3RyaW5nO1xuICBbRmllbGRzLnNlY29uZGFyeVN0YXRdOiBzdHJpbmc7XG4gIFtGaWVsZHMuY29sb3JdOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBFZGdlIHtcbiAgW0ZpZWxkcy5pZF06IHN0cmluZztcbiAgW0ZpZWxkcy50YXJnZXRdOiBzdHJpbmc7XG4gIFtGaWVsZHMuc291cmNlXTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR3JhcGhGcmFtZXMoZGF0YTogWmlwa2luU3BhbltdKTogRGF0YUZyYW1lW10ge1xuICBjb25zdCB7IG5vZGVzLCBlZGdlcyB9ID0gY29udmVydFRyYWNlVG9HcmFwaChkYXRhKTtcbiAgY29uc3QgW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdID0gbWFrZUZyYW1lcygpO1xuXG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIG5vZGVzRnJhbWUuYWRkKG5vZGUpO1xuICB9XG5cbiAgZm9yIChjb25zdCBlZGdlIG9mIGVkZ2VzKSB7XG4gICAgZWRnZXNGcmFtZS5hZGQoZWRnZSk7XG4gIH1cblxuICByZXR1cm4gW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VHJhY2VUb0dyYXBoKHNwYW5zOiBaaXBraW5TcGFuW10pOiB7IG5vZGVzOiBOb2RlW107IGVkZ2VzOiBFZGdlW10gfSB7XG4gIGNvbnN0IG5vZGVzOiBOb2RlW10gPSBbXTtcbiAgY29uc3QgZWRnZXM6IEVkZ2VbXSA9IFtdO1xuXG4gIGNvbnN0IHRyYWNlRHVyYXRpb24gPSBmaW5kVHJhY2VEdXJhdGlvbihzcGFucyk7XG4gIGNvbnN0IHNwYW5NYXAgPSBtYWtlU3Bhbk1hcCgoaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPj0gc3BhbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3Bhbjogc3BhbnNbaW5kZXhdLFxuICAgICAgaWQ6IHNwYW5zW2luZGV4XS5pZCxcbiAgICAgIHBhcmVudElkczogc3BhbnNbaW5kZXhdLnBhcmVudElkID8gW3NwYW5zW2luZGV4XS5wYXJlbnRJZCFdIDogW10sXG4gICAgfTtcbiAgfSk7XG5cbiAgZm9yIChjb25zdCBzcGFuIG9mIHNwYW5zKSB7XG4gICAgY29uc3QgcmFuZ2VzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPiA9IHNwYW5NYXBbc3Bhbi5pZF0uY2hpbGRyZW4ubWFwKChjKSA9PiB7XG4gICAgICBjb25zdCBzcGFuID0gc3Bhbk1hcFtjXS5zcGFuO1xuICAgICAgcmV0dXJuIFtzcGFuLnRpbWVzdGFtcCwgc3Bhbi50aW1lc3RhbXAgKyBzcGFuLmR1cmF0aW9uXTtcbiAgICB9KTtcbiAgICBjb25zdCBjaGlsZHJlbkR1cmF0aW9uID0gZ2V0Tm9uT3ZlcmxhcHBpbmdEdXJhdGlvbihyYW5nZXMpO1xuICAgIGNvbnN0IHNlbGZEdXJhdGlvbiA9IHNwYW4uZHVyYXRpb24gLSBjaGlsZHJlbkR1cmF0aW9uO1xuICAgIGNvbnN0IHN0YXRzID0gZ2V0U3RhdHMoc3Bhbi5kdXJhdGlvbiAvIDEwMDAsIHRyYWNlRHVyYXRpb24gLyAxMDAwLCBzZWxmRHVyYXRpb24gLyAxMDAwKTtcblxuICAgIG5vZGVzLnB1c2goe1xuICAgICAgW0ZpZWxkcy5pZF06IHNwYW4uaWQsXG4gICAgICBbRmllbGRzLnRpdGxlXTogc3Bhbi5sb2NhbEVuZHBvaW50Py5zZXJ2aWNlTmFtZSB8fCBzcGFuLnJlbW90ZUVuZHBvaW50Py5zZXJ2aWNlTmFtZSB8fCAndW5rbm93bicsXG4gICAgICBbRmllbGRzLnN1YlRpdGxlXTogc3Bhbi5uYW1lLFxuICAgICAgW0ZpZWxkcy5tYWluU3RhdF06IHN0YXRzLm1haW4sXG4gICAgICBbRmllbGRzLnNlY29uZGFyeVN0YXRdOiBzdGF0cy5zZWNvbmRhcnksXG4gICAgICBbRmllbGRzLmNvbG9yXTogc2VsZkR1cmF0aW9uIC8gdHJhY2VEdXJhdGlvbixcbiAgICB9KTtcblxuICAgIGlmIChzcGFuLnBhcmVudElkICYmIHNwYW5NYXBbc3Bhbi5wYXJlbnRJZF0uc3Bhbikge1xuICAgICAgZWRnZXMucHVzaCh7XG4gICAgICAgIFtGaWVsZHMuaWRdOiBzcGFuLnBhcmVudElkICsgJy0tJyArIHNwYW4uaWQsXG4gICAgICAgIFtGaWVsZHMudGFyZ2V0XTogc3Bhbi5pZCxcbiAgICAgICAgW0ZpZWxkcy5zb3VyY2VdOiBzcGFuLnBhcmVudElkLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbm9kZXMsIGVkZ2VzIH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBkdXJhdGlvbiBvZiB0aGUgd2hvbGUgdHJhY2UgYXMgaXQgaXNuJ3QgYSBwYXJ0IG9mIHRoZSByZXNwb25zZSBkYXRhLlxuICogTm90ZTogU2VlbXMgbGlrZSB0aGlzIHNob3VsZCBiZSB0aGUgc2FtZSBhcyBqdXN0IGxvbmdlc3Qgc3BhbiwgYnV0IHRoaXMgaXMgcHJvYmFibHkgc2FmZXIuXG4gKi9cbmZ1bmN0aW9uIGZpbmRUcmFjZUR1cmF0aW9uKHNwYW5zOiBaaXBraW5TcGFuW10pOiBudW1iZXIge1xuICBsZXQgdHJhY2VFbmRUaW1lID0gMDtcbiAgbGV0IHRyYWNlU3RhcnRUaW1lID0gSW5maW5pdHk7XG5cbiAgZm9yIChjb25zdCBzcGFuIG9mIHNwYW5zKSB7XG4gICAgaWYgKHNwYW4udGltZXN0YW1wIDwgdHJhY2VTdGFydFRpbWUpIHtcbiAgICAgIHRyYWNlU3RhcnRUaW1lID0gc3Bhbi50aW1lc3RhbXA7XG4gICAgfVxuXG4gICAgaWYgKHNwYW4udGltZXN0YW1wICsgc3Bhbi5kdXJhdGlvbiA+IHRyYWNlRW5kVGltZSkge1xuICAgICAgdHJhY2VFbmRUaW1lID0gc3Bhbi50aW1lc3RhbXAgKyBzcGFuLmR1cmF0aW9uO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhY2VFbmRUaW1lIC0gdHJhY2VTdGFydFRpbWU7XG59XG4iLCJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IERhdGFGcmFtZSwgRmllbGRUeXBlLCBNdXRhYmxlRGF0YUZyYW1lLCBUcmFjZUtleVZhbHVlUGFpciwgVHJhY2VMb2csIFRyYWNlU3BhblJvdyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBaaXBraW5Bbm5vdGF0aW9uLCBaaXBraW5FbmRwb2ludCwgWmlwa2luU3BhbiB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHJlc3BvbnNlIHRvIEdyYWZhbmEgdHJhY2UgZGF0YSBmcmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKHpTcGFuczogWmlwa2luU3BhbltdKTogRGF0YUZyYW1lIHtcbiAgY29uc3Qgc3BhblJvd3MgPSB6U3BhbnMubWFwKHRyYW5zZm9ybVNwYW4pO1xuICBjb25zdCBmcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogJ3RyYWNlSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdzcGFuSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdwYXJlbnRTcGFuSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdvcGVyYXRpb25OYW1lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc2VydmljZU5hbWUnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdzZXJ2aWNlVGFncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgICAgeyBuYW1lOiAnc3RhcnRUaW1lJywgdHlwZTogRmllbGRUeXBlLm51bWJlciB9LFxuICAgICAgeyBuYW1lOiAnZHVyYXRpb24nLCB0eXBlOiBGaWVsZFR5cGUubnVtYmVyIH0sXG4gICAgICB7IG5hbWU6ICdsb2dzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgICB7IG5hbWU6ICd0YWdzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICB0cmFjZUZvcm1hdDogJ3ppcGtpbicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGZvciAoY29uc3Qgc3BhbiBvZiBzcGFuUm93cykge1xuICAgIGZyYW1lLmFkZChzcGFuKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3BhbihzcGFuOiBaaXBraW5TcGFuKTogVHJhY2VTcGFuUm93IHtcbiAgY29uc3Qgcm93ID0ge1xuICAgIHRyYWNlSUQ6IHNwYW4udHJhY2VJZCxcbiAgICBzcGFuSUQ6IHNwYW4uaWQsXG4gICAgcGFyZW50U3BhbklEOiBzcGFuLnBhcmVudElkLFxuICAgIG9wZXJhdGlvbk5hbWU6IHNwYW4ubmFtZSxcbiAgICBzZXJ2aWNlTmFtZTogc3Bhbi5sb2NhbEVuZHBvaW50Py5zZXJ2aWNlTmFtZSB8fCBzcGFuLnJlbW90ZUVuZHBvaW50Py5zZXJ2aWNlTmFtZSB8fCAndW5rbm93bicsXG4gICAgc2VydmljZVRhZ3M6IHNlcnZpY2VUYWdzKHNwYW4pLFxuICAgIHN0YXJ0VGltZTogc3Bhbi50aW1lc3RhbXAgLyAxMDAwLFxuICAgIGR1cmF0aW9uOiBzcGFuLmR1cmF0aW9uIC8gMTAwMCxcbiAgICBsb2dzOiBzcGFuLmFubm90YXRpb25zPy5tYXAodHJhbnNmb3JtQW5ub3RhdGlvbikgPz8gW10sXG4gICAgdGFnczogT2JqZWN0LmtleXMoc3Bhbi50YWdzIHx8IHt9KS5yZWR1Y2U8VHJhY2VLZXlWYWx1ZVBhaXJbXT4oKGFjYywga2V5KSA9PiB7XG4gICAgICAvLyBJZiB0YWcgaXMgZXJyb3Igd2UgcmVtYXAgaXQgdG8gc2ltcGxlIGJvb2xlYW4gc28gdGhhdCB0aGUgdHJhY2UgdWkgd2lsbCBzaG93IGFuIGVycm9yIGljb24uXG4gICAgICBpZiAoa2V5ID09PSAnZXJyb3InKSB7XG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICBrZXk6ICdlcnJvcicsXG4gICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICBrZXk6ICdlcnJvclZhbHVlJyxcbiAgICAgICAgICB2YWx1ZTogc3Bhbi50YWdzIVsnZXJyb3InXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBhY2MucHVzaCh7IGtleSwgdmFsdWU6IHNwYW4udGFncyFba2V5XSB9KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pLFxuICB9O1xuXG4gIGlmIChzcGFuLmtpbmQpIHtcbiAgICByb3cudGFncyA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAna2luZCcsXG4gICAgICAgIHZhbHVlOiBzcGFuLmtpbmQsXG4gICAgICB9LFxuICAgICAgLi4uKHJvdy50YWdzID8/IFtdKSxcbiAgICBdO1xuICB9XG5cbiAgaWYgKHNwYW4uc2hhcmVkKSB7XG4gICAgcm93LnRhZ3MgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3NoYXJlZCcsXG4gICAgICAgIHZhbHVlOiBzcGFuLnNoYXJlZCxcbiAgICAgIH0sXG4gICAgICAuLi4ocm93LnRhZ3MgPz8gW10pLFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gcm93O1xufVxuXG4vKipcbiAqIE1hcHMgYW5ub3RhdGlvbnMgYXMgYSBsb2cgYXMgdGhhdCBzZWVtcyB0byBiZSB0aGUgY2xvc2VzdCB0aGluZy5cbiAqIFNlZSBodHRwczovL3ppcGtpbi5pby96aXBraW4tYXBpLyMvZGVmYXVsdC9nZXRfdHJhY2VfX3RyYWNlSWRfXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybUFubm90YXRpb24oYW5ub3RhdGlvbjogWmlwa2luQW5ub3RhdGlvbik6IFRyYWNlTG9nIHtcbiAgcmV0dXJuIHtcbiAgICB0aW1lc3RhbXA6IGFubm90YXRpb24udGltZXN0YW1wLFxuICAgIGZpZWxkczogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdhbm5vdGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGFubm90YXRpb24udmFsdWUsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2VUYWdzKHNwYW46IFppcGtpblNwYW4pOiBUcmFjZUtleVZhbHVlUGFpcltdIHtcbiAgY29uc3QgZW5kcG9pbnQgPSBzcGFuLmxvY2FsRW5kcG9pbnQgfHwgc3Bhbi5yZW1vdGVFbmRwb2ludDtcbiAgaWYgKCFlbmRwb2ludCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gW1xuICAgIHZhbHVlVG9UYWcoJ2lwdjQnLCBlbmRwb2ludC5pcHY0KSxcbiAgICB2YWx1ZVRvVGFnKCdpcHY2JywgZW5kcG9pbnQuaXB2NiksXG4gICAgdmFsdWVUb1RhZygncG9ydCcsIGVuZHBvaW50LnBvcnQpLFxuICAgIHZhbHVlVG9UYWcoJ2VuZHBvaW50VHlwZScsIHNwYW4ubG9jYWxFbmRwb2ludCA/ICdsb2NhbCcgOiAncmVtb3RlJyksXG4gIF0uZmlsdGVyKGlkZW50aXR5KSBhcyBUcmFjZUtleVZhbHVlUGFpcltdO1xufVxuXG5mdW5jdGlvbiB2YWx1ZVRvVGFnPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IFRyYWNlS2V5VmFsdWVQYWlyPFQ+IHwgdW5kZWZpbmVkIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXksXG4gICAgdmFsdWUsXG4gIH07XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyBkYXRhIGZyYW1lIHRvIFppcGtpbiByZXNwb25zZVxuICovXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtVG9aaXBraW4gPSAoZGF0YTogTXV0YWJsZURhdGFGcmFtZSk6IFppcGtpblNwYW5bXSA9PiB7XG4gIGxldCByZXNwb25zZTogWmlwa2luU3BhbltdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3BhbiA9IGRhdGEuZ2V0KGkpO1xuICAgIHJlc3BvbnNlLnB1c2goe1xuICAgICAgdHJhY2VJZDogc3Bhbi50cmFjZUlELFxuICAgICAgcGFyZW50SWQ6IHNwYW4ucGFyZW50U3BhbklELFxuICAgICAgbmFtZTogc3Bhbi5vcGVyYXRpb25OYW1lLFxuICAgICAgaWQ6IHNwYW4uc3BhbklELFxuICAgICAgdGltZXN0YW1wOiBzcGFuLnN0YXJ0VGltZSAqIDEwMDAsXG4gICAgICBkdXJhdGlvbjogc3Bhbi5kdXJhdGlvbiAqIDEwMDAsXG4gICAgICAuLi5nZXRFbmRwb2ludChzcGFuKSxcbiAgICAgIGFubm90YXRpb25zOiBzcGFuLmxvZ3MubGVuZ3RoXG4gICAgICAgID8gc3Bhbi5sb2dzLm1hcCgobDogVHJhY2VMb2cpID0+ICh7IHRpbWVzdGFtcDogbC50aW1lc3RhbXAsIHZhbHVlOiBsLmZpZWxkc1swXS52YWx1ZSB9KSlcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB0YWdzOiBzcGFuLnRhZ3MubGVuZ3RoXG4gICAgICAgID8gc3Bhbi50YWdzXG4gICAgICAgICAgICAuZmlsdGVyKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgIT09ICdraW5kJyAmJiB0LmtleSAhPT0gJ2VuZHBvaW50VHlwZScgJiYgdC5rZXkgIT09ICdzaGFyZWQnKVxuICAgICAgICAgICAgLnJlZHVjZSgodGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgdDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHQua2V5ID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIC4uLnRhZ3MsXG4gICAgICAgICAgICAgICAgICBbdC5rZXldOiBzcGFuLnRhZ3MuZmluZCgodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ID09PSAnZXJyb3JWYWx1ZScpLnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4udGFncywgW3Qua2V5XTogdC52YWx1ZSB9O1xuICAgICAgICAgICAgfSwge30pXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAga2luZDogc3Bhbi50YWdzLmZpbmQoKHQ6IFRyYWNlS2V5VmFsdWVQYWlyKSA9PiB0LmtleSA9PT0gJ2tpbmQnKT8udmFsdWUsXG4gICAgICBzaGFyZWQ6IHNwYW4udGFncy5maW5kKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgPT09ICdzaGFyZWQnKT8udmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG4vLyBSZXR1cm5zIHJlbW90ZSBvciBsb2NhbCBlbmRwb2ludCBvYmplY3RcbmNvbnN0IGdldEVuZHBvaW50ID0gKHNwYW46IGFueSk6IHsgW2tleTogc3RyaW5nXTogWmlwa2luRW5kcG9pbnQgfSB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGtleSA9XG4gICAgc3Bhbi5zZXJ2aWNlVGFncy5maW5kKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgPT09ICdlbmRwb2ludFR5cGUnKT8udmFsdWUgPT09ICdsb2NhbCdcbiAgICAgID8gJ2xvY2FsRW5kcG9pbnQnXG4gICAgICA6ICdyZW1vdGVFbmRwb2ludCc7XG4gIHJldHVybiBzcGFuLnNlcnZpY2VOYW1lICE9PSAndW5rbm93bidcbiAgICA/IHtcbiAgICAgICAgW2tleV06IHtcbiAgICAgICAgICBzZXJ2aWNlTmFtZTogc3Bhbi5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICBpcHY0OiBzcGFuLnNlcnZpY2VUYWdzLmZpbmQoKHQ6IFRyYWNlS2V5VmFsdWVQYWlyKSA9PiB0LmtleSA9PT0gJ2lwdjQnKT8udmFsdWUsXG4gICAgICAgICAgaXB2Njogc3Bhbi5zZXJ2aWNlVGFncy5maW5kKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgPT09ICdpcHY2Jyk/LnZhbHVlLFxuICAgICAgICAgIHBvcnQ6IHNwYW4uc2VydmljZVRhZ3MuZmluZCgodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ID09PSAncG9ydCcpPy52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICA6IHVuZGVmaW5lZDtcbn07XG4iLCJpbXBvcnQgdXNlRWZmZWN0T25jZSBmcm9tICcuL3VzZUVmZmVjdE9uY2UnO1xudmFyIHVzZU1vdW50ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdXNlRWZmZWN0T25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTW91bnQ7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJ1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24iLCJJbmxpbmVGaWVsZCIsIklubGluZUZpZWxkUm93IiwiSW5saW5lU3dpdGNoIiwidXNlU3R5bGVzIiwiTm9kZUdyYXBoU2V0dGluZ3MiLCJvcHRpb25zIiwib25PcHRpb25zQ2hhbmdlIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiY29udGFpbmVyIiwicm93IiwianNvbkRhdGEiLCJub2RlR3JhcGgiLCJlbmFibGVkIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tlZCIsInRoZW1lIiwiU2VnbWVudElucHV0IiwiSW5saW5lTGFiZWwiLCJJY29uIiwiRVFfV0lEVEgiLCJLZXlWYWx1ZUlucHV0IiwidmFsdWVzIiwib25DaGFuZ2UiLCJpZCIsImtleVBsYWNlaG9sZGVyIiwidmFsdWVQbGFjZWhvbGRlciIsIndyYXBwZXIiLCJsZW5ndGgiLCJtYXAiLCJ2YWx1ZSIsImlkeCIsInBhaXIiLCJrZXkiLCJlIiwidiIsImkiLCJTdHJpbmciLCJvcGVyYXRvciIsInNsaWNlIiwic3BhY2luZyIsInhzIiwicGFsZXR0ZSIsIm9yYW5nZSIsIkRhdGFTb3VyY2VQaWNrZXIiLCJJbnB1dCIsIlRhZ3NJbnB1dCIsIlRyYWNlVG9Mb2dzU2V0dGluZ3MiLCJ3aWR0aCIsImluZm9UZXh0IiwiZHMiLCJ0eXBlIiwidHJhY2VzVG9Mb2dzIiwiZGF0YXNvdXJjZVVpZCIsInVpZCIsInRhZ3MiLCJtYXBUYWdOYW1lc0VuYWJsZWQiLCJtYXBwZWRUYWdzIiwidGFnIiwic3BhblN0YXJ0VGltZVNoaWZ0Iiwic3BhbkVuZFRpbWVTaGlmdCIsImZpbHRlckJ5VHJhY2VJRCIsImZpbHRlckJ5U3BhbklEIiwibWQiLCJjb2xvcnMiLCJ0ZXh0U2VtaVdlYWsiLCJCdXR0b24iLCJUcmFjZVRvTWV0cmljc1NldHRpbmdzIiwidHJhY2VzVG9NZXRyaWNzIiwidW5kZWZpbmVkIiwicXVlcmllcyIsInF1ZXJ5IiwicXVlcnlSb3ciLCJuYW1lIiwibmV3UXVlcmllcyIsInNwbGljZSIsIkZpZWxkVHlwZSIsIk11dGFibGVEYXRhRnJhbWUiLCJOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIiwiRmllbGRzIiwiZ2V0Tm9uT3ZlcmxhcHBpbmdEdXJhdGlvbiIsInJhbmdlcyIsInNvcnQiLCJhIiwiYiIsIm1lcmdlZFJhbmdlcyIsInJlZHVjZSIsImFjYyIsInJhbmdlIiwidGFpbCIsInByZXZTdGFydCIsInByZXZFbmQiLCJzdGFydCIsImVuZCIsIm1ha2VTcGFuTWFwIiwiZ2V0U3BhbiIsInNwYW5NYXAiLCJzcGFuIiwiaW5kZXgiLCJjaGlsZHJlbiIsInBhcmVudElkIiwicGFyZW50SWRzIiwicHVzaCIsImdldFN0YXRzIiwiZHVyYXRpb24iLCJ0cmFjZUR1cmF0aW9uIiwic2VsZkR1cmF0aW9uIiwibWFpbiIsInRvRml4ZWROb1RyYWlsaW5nWmVyb3MiLCJzZWNvbmRhcnkiLCJuIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJtYWtlRnJhbWVzIiwibm9kZXNGcmFtZSIsImZpZWxkcyIsInN0cmluZyIsInRpdGxlIiwic3ViVGl0bGUiLCJtYWluU3RhdCIsImNvbmZpZyIsImRpc3BsYXlOYW1lIiwic2Vjb25kYXJ5U3RhdCIsImNvbG9yIiwibnVtYmVyIiwibW9kZSIsIm1ldGEiLCJwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSIsImVkZ2VzRnJhbWUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJEYXRhU291cmNlSHR0cFNldHRpbmdzIiwiQ29uZmlnRWRpdG9yIiwiZmVhdHVyZVRvZ2dsZXMiLCJ0cmFjZVRvTWV0cmljcyIsImZyb21QYWlycyIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVN0YXRlIiwidXNlQXN5bmNGbiIsInVzZU1vdW50IiwidXNlTW91bnRlZFN0YXRlIiwiQnV0dG9uQ2FzY2FkZXIiLCJGaWxlRHJvcHpvbmUiLCJSYWRpb0J1dHRvbkdyb3VwIiwidXNlVGhlbWUyIiwiUXVlcnlGaWVsZCIsInVzZVN0eWxlczIiLCJub3RpZnlBcHAiLCJjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiIsImRpc3BhdGNoIiwiYXBpUHJlZml4IiwidHJhY2VzQ2FzY2FkZXIiLCJsYWJlbCIsIm1hcmdpblJpZ2h0IiwiWmlwa2luUXVlcnlGaWVsZCIsIm9uUnVuUXVlcnkiLCJkYXRhc291cmNlIiwic2VydmljZU9wdGlvbnMiLCJ1c2VTZXJ2aWNlcyIsIm9uTG9hZE9wdGlvbnMiLCJhbGxPcHRpb25zIiwidXNlTG9hZE9wdGlvbnMiLCJvblNlbGVjdFRyYWNlIiwic2VsZWN0ZWRPcHRpb25zIiwidHJhY2VJRCIsIm9uQ2hhbmdlUXVlcnkiLCJuZXh0UXVlcnkiLCJjYXNjYWRlck9wdGlvbnMiLCJ1c2VNYXBUb0Nhc2NhZGVyT3B0aW9ucyIsInF1ZXJ5VHlwZSIsInBhZGRpbmciLCJtdWx0aXBsZSIsInJlc3VsdCIsInVwbG9hZGVkSnNvbiIsImNsYXNzTmFtZSIsInVybCIsInNlcnZpY2VzT3B0aW9ucyIsImZldGNoIiwic2VydmljZXMiLCJtZXRhZGF0YVJlcXVlc3QiLCJzZXJ2aWNlIiwiaXNMZWFmIiwiZXJyb3IiLCJlcnJvclRvU2hvdyIsIkVycm9yIiwiaXNNb3VudGVkIiwic2V0QWxsT3B0aW9ucyIsImZldGNoU3BhbnMiLCJmaW5kU3BhbnMiLCJyZXNwb25zZSIsInNlcnZpY2VOYW1lIiwic3RhdGUiLCJzcGFuT3B0aW9ucyIsImZldGNoVHJhY2VzIiwiZmluZFRyYWNlcyIsInNwYW5OYW1lIiwic2VhcmNoIiwidHJhY2VzIiwibmV3VHJhY2VzIiwidHJhY2UiLCJyb290U3BhbiIsImZpbmQiLCJNYXRoIiwiZmxvb3IiLCJ0cmFjZUlkIiwibm9UcmFjZXNPcHRpb25zIiwic3BhbnMiLCJPYmplY3QiLCJrZXlzIiwidHJhY2VOYW1lIiwibm9UcmFjZXNGb3VuZE9wdGlvbnMiLCJOT19UUkFDRVNfS0VZIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwiRGF0YVNvdXJjZUFwaSIsImdldEJhY2tlbmRTcnYiLCJzZXJpYWxpemVQYXJhbXMiLCJjcmVhdGVHcmFwaEZyYW1lcyIsInRyYW5zZm9ybVJlc3BvbnNlIiwiWmlwa2luRGF0YXNvdXJjZSIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2VTZXR0aW5ncyIsInRhcmdldHMiLCJkYXRhIiwidHJhY2VEYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUb0RhdGFRdWVyeVJlc3BvbnNlIiwibWVzc2FnZSIsInJlcXVlc3QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwaXBlIiwicmVzIiwiZW1wdHlEYXRhUXVlcnlSZXNwb25zZSIsInBhcmFtcyIsImhpZGVGcm9tSW5zcGVjdG9yIiwidGVzdERhdGFzb3VyY2UiLCJzdGF0dXMiLCJnZXRRdWVyeURpc3BsYXlUZXh0IiwiYXBpVXJsIiwicmVxIiwiY3VzdG9tIiwidHJhY2VGb3JtYXQiLCJEYXRhU291cmNlUGx1Z2luIiwicGx1Z2luIiwic2V0UXVlcnlFZGl0b3IiLCJzZXRDb25maWdFZGl0b3IiLCJub2RlcyIsImVkZ2VzIiwiY29udmVydFRyYWNlVG9HcmFwaCIsIm5vZGUiLCJhZGQiLCJlZGdlIiwiZmluZFRyYWNlRHVyYXRpb24iLCJjIiwidGltZXN0YW1wIiwiY2hpbGRyZW5EdXJhdGlvbiIsInN0YXRzIiwibG9jYWxFbmRwb2ludCIsInJlbW90ZUVuZHBvaW50IiwidHJhY2VFbmRUaW1lIiwidHJhY2VTdGFydFRpbWUiLCJJbmZpbml0eSIsImlkZW50aXR5IiwielNwYW5zIiwic3BhblJvd3MiLCJ0cmFuc2Zvcm1TcGFuIiwiZnJhbWUiLCJvdGhlciIsInNwYW5JRCIsInBhcmVudFNwYW5JRCIsIm9wZXJhdGlvbk5hbWUiLCJzZXJ2aWNlVGFncyIsInN0YXJ0VGltZSIsImxvZ3MiLCJhbm5vdGF0aW9ucyIsInRyYW5zZm9ybUFubm90YXRpb24iLCJraW5kIiwic2hhcmVkIiwiYW5ub3RhdGlvbiIsImVuZHBvaW50IiwidmFsdWVUb1RhZyIsImlwdjQiLCJpcHY2IiwicG9ydCIsImZpbHRlciIsInRyYW5zZm9ybVRvWmlwa2luIiwiZ2V0IiwiZ2V0RW5kcG9pbnQiLCJsIiwidCJdLCJzb3VyY2VSb290IjoiIn0=