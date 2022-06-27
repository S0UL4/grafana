"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["influxdbPlugin"],{

/***/ "./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _InlineFormLabel2, _InfoBox, _InlineFormLabel3, _h, _InfoBox2, _Alert, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Input,
  SecretFormField
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LegacyForms;




const httpModes = [{
  label: 'GET',
  value: 'GET'
}, {
  label: 'POST',
  value: 'POST'
}];
const versions = [{
  label: 'InfluxQL',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.InfluxQL,
  description: 'The InfluxDB SQL-like query language.'
}, {
  label: 'Flux',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux,
  description: 'Advanced data scripting and query language.  Supported in InfluxDB 2.x and 1.8+'
}];
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    var _props$options$jsonDa;

    super(props);

    _defineProperty(this, "state", {
      maxSeries: ''
    });

    _defineProperty(this, "htmlPrefix", void 0);

    _defineProperty(this, "onResetPassword", () => {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginResetOption)(this.props, 'password');
    });

    _defineProperty(this, "onResetToken", () => {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginResetOption)(this.props, 'token');
    });

    _defineProperty(this, "onVersionChanged", selected => {
      const {
        options,
        onOptionsChange
      } = this.props;
      const copy = Object.assign({}, options, {
        jsonData: Object.assign({}, options.jsonData, {
          version: selected.value
        })
      });

      if (selected.value === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux) {
        copy.access = 'proxy';
        copy.basicAuth = true;
        copy.jsonData.httpMode = 'POST'; // Remove old 1x configs

        delete copy.user;
        delete copy.database;
      }

      onOptionsChange(copy);
    });

    this.state.maxSeries = ((_props$options$jsonDa = props.options.jsonData.maxSeries) === null || _props$options$jsonDa === void 0 ? void 0 : _props$options$jsonDa.toString()) || '';
    this.htmlPrefix = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)('influxdb-config');
  } // 1x


  renderInflux2x() {
    const {
      options
    } = this.props;
    const {
      secureJsonFields
    } = options;
    const secureJsonData = options.secureJsonData || {};
    const {
      htmlPrefix
    } = this;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-org`,
            className: "width-10",
            children: "Organization"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              id: `${htmlPrefix}-org`,
              className: "width-20",
              value: options.jsonData.organization || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'organization')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SecretFormField, {
            isConfigured: secureJsonFields && secureJsonFields.token,
            value: secureJsonData.token || '',
            label: "Token",
            "aria-label": "Token",
            labelWidth: 10,
            inputWidth: 20,
            onReset: this.onResetToken,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceSecureJsonDataOption)(this.props, 'token')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            className: "width-10",
            children: "Default Bucket"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              className: "width-20",
              placeholder: "default bucket",
              value: options.jsonData.defaultBucket || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'defaultBucket')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            className: "width-10",
            tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
            children: "Min time interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              className: "width-10",
              placeholder: "10s",
              value: options.jsonData.timeInterval || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'timeInterval')
            })
          })]
        })
      })]
    });
  }

  renderInflux1x() {
    const {
      options
    } = this.props;
    const {
      secureJsonFields
    } = options;
    const secureJsonData = options.secureJsonData || {};
    const {
      htmlPrefix
    } = this;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
          children: "Database Access"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: ["Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "SHOW MEASUREMENTS ON _internal"
          }), " or", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "SELECT * FROM \"_internal\"..\"database\" LIMIT 10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "To support data isolation and security, make sure appropriate permissions are configured in InfluxDB."]
        })]
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-db`,
            className: "width-10",
            children: "Database"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-20",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              id: `${htmlPrefix}-db`,
              className: "width-20",
              value: options.database || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceOption)(this.props, 'database')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-user`,
            className: "width-10",
            children: "User"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              id: `${htmlPrefix}-user`,
              className: "width-20",
              value: options.user || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceOption)(this.props, 'user')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SecretFormField, {
            isConfigured: secureJsonFields && secureJsonFields.password,
            value: secureJsonData.password || '',
            label: "Password",
            "aria-label": "Password",
            labelWidth: 10,
            inputWidth: 20,
            onReset: this.onResetPassword,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceSecureJsonDataOption)(this.props, 'password')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-http-method`,
            className: "width-10",
            tooltip: "You can use either GET or POST HTTP method to query your InfluxDB database. The POST method allows you to perform heavy requests (with a lots of WHERE clause) while the GET method will restrict you and return an error if the query is too large.",
            children: "HTTP Method"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            inputId: `${htmlPrefix}-http-method`,
            className: "width-10",
            value: httpModes.find(httpMode => httpMode.value === options.jsonData.httpMode),
            options: httpModes,
            defaultValue: options.jsonData.httpMode,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'httpMode')
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            className: "width-10",
            tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
            children: "Min time interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              className: "width-10",
              placeholder: "10s",
              value: options.jsonData.timeInterval || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'timeInterval')
            })
          })]
        })
      })]
    });
  }

  render() {
    const {
      options,
      onOptionsChange
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        className: "page-heading",
        children: "Query Language"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
              "aria-label": "Query language",
              className: "width-30",
              value: options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux ? versions[1] : versions[0],
              options: versions,
              defaultValue: versions[0],
              onChange: this.onVersionChanged
            })
          })
        })
      }), options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux && (_InfoBox2 || (_InfoBox2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
          children: "Support for Flux in Grafana is currently in beta"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: ["Please report any issues to: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            href: "https://github.com/grafana/grafana/issues/new/choose",
            children: "https://github.com/grafana/grafana/issues"
          })]
        })]
      }))), options.access === 'direct' && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: "Deprecation Notice",
        severity: "warning",
        children: "Browser access mode in the InfluxDB datasource is deprecated and will be removed in a future release."
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.DataSourceHttpSettings, {
        showAccessOptions: true,
        dataSourceConfig: options,
        defaultUrl: "http://localhost:8086",
        onChange: onOptionsChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form-group",
        children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            className: "page-heading",
            children: "InfluxDB Details"
          })
        })), options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux ? this.renderInflux2x() : this.renderInflux1x(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
            labelWidth: 20,
            label: "Max series",
            tooltip: "Limit the number of series/tables that Grafana will process. Lower this number to prevent abuse, and increase it if you have lots of small time series and not all are shown. Defaults to 1000.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              placeholder: "1000",
              type: "number",
              className: "width-10",
              value: this.state.maxSeries,
              onChange: event => {
                // We duplicate this state so that we allow to write freely inside the input. We don't have
                // any influence over saving so this seems to be only way to do this.
                this.setState({
                  maxSeries: event.currentTarget.value
                });
                const val = parseInt(event.currentTarget.value, 10);
                (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)(this.props, 'maxSeries', Number.isFinite(val) ? val : undefined);
              }
            })
          })
        })]
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxQueryEditor": () => (/* binding */ FluxQueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _LinkButton, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const samples = [{
  label: 'Show buckets',
  description: 'List the available buckets (table)',
  value: 'buckets()'
}, {
  label: 'Simple query',
  description: 'filter by measurement and field',
  value: `from(bucket: "db/rp")
  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)
  |> filter(fn: (r) =>
    r._measurement == "example-measurement" and
    r._field == "example-field"
  )`
}, {
  label: 'Grouped Query',
  description: 'Group by (min/max/sum/median)',
  value: `// v.windowPeriod is a variable referring to the current optimized window period (currently: $interval)
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "measurement1" or r["_measurement"] =~ /^.*?regex.*$/)
  |> filter(fn: (r) => r["_field"] == "field2" or r["_field"] =~ /^.*?regex.*$/)
  |> aggregateWindow(every: v.windowPeriod, fn: mean|median|max|count|derivative|sum)
  |> yield(name: "some-name")`
}, {
  label: 'Filter by value',
  description: 'Results between a min/max',
  value: `// v.bucket, v.timeRangeStart, and v.timeRange stop are all variables supported by the flux plugin and influxdb
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_value"] >= 10 and r["_value"] <= 20)`
}, {
  label: 'Schema Exploration: (measurements)',
  description: 'Get a list of measurement using flux',
  value: `import "influxdata/influxdb/v1"
v1.measurements(bucket: v.bucket)`
}, {
  label: 'Schema Exploration: (fields)',
  description: 'Return every possible key in a single table',
  value: `from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)
  |> keys()
  |> keep(columns: ["_value"])
  |> group()
  |> distinct()`
}, {
  label: 'Schema Exploration: (tag keys)',
  description: 'Get a list of tag keys using flux',
  value: `import "influxdata/influxdb/v1"
v1.tagKeys(bucket: v.bucket)`
}, {
  label: 'Schema Exploration: (tag values)',
  description: 'Get a list of tag values using flux',
  value: `import "influxdata/influxdb/v1"
v1.tagValues(
    bucket: v.bucket,
    tag: "host",
    predicate: (r) => true,
    start: -1d
)`
}];
class FluxQueryEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onFluxQueryChange", query => {
      this.props.onChange(Object.assign({}, this.props.query, {
        query
      }));
      this.props.onRunQuery();
    });

    _defineProperty(this, "onSampleChange", val => {
      this.props.onChange(Object.assign({}, this.props.query, {
        query: val.value
      })); // Angular HACK: Since the target does not actually change!

      this.forceUpdate();
      this.props.onRunQuery();
    });

    _defineProperty(this, "getSuggestions", () => {
      const sugs = [{
        label: 'v.timeRangeStart',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'The start time'
      }, {
        label: 'v.timeRangeStop',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'The stop time'
      }, {
        label: 'v.windowPeriod',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'based on max data points'
      }, {
        label: 'v.defaultBucket',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'bucket configured in the datsource'
      }, {
        label: 'v.organization',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'org configured for the datsource'
      }];
      const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)();
      templateSrv.getVariables().forEach(variable => {
        const label = '${' + variable.name + '}';
        let val = templateSrv.replace(label);

        if (val === label) {
          val = '';
        }

        sugs.push({
          label,
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Text,
          detail: `(Template Variable) ${val}`
        });
      });
      return sugs;
    });

    _defineProperty(this, "editorDidMountCallbackHack", editor => {
      setTimeout(() => editor.layout(), 100);
    });
  }

  render() {
    const {
      query
    } = this.props;

    const helpTooltip = _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: ["Type: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
        children: "ctrl+space"
      }), " to show template variable suggestions ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Many queries can be copied from Chronograf"]
    }));

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditor, {
        height: '200px',
        language: "sql",
        value: query.query || '',
        onBlur: this.onFluxQueryChange,
        onSave: this.onFluxQueryChange,
        showMiniMap: false,
        showLineNumbers: true,
        getSuggestions: this.getSuggestions,
        onEditorDidMount: this.editorDidMountCallbackHack
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form-inline', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              margin-top: 6px;
            `),
        children: [_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          icon: "external-link-alt",
          variant: "secondary",
          target: "blank",
          href: "https://docs.influxdata.com/influxdb/latest/query-data/get-started/",
          children: "Flux language syntax"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Segment, {
          options: samples,
          value: "Sample Query",
          onChange: this.onSampleChange
        }), _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "gf-form-label gf-form-label--grow"
          })
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
          width: 5,
          tooltip: helpTooltip,
          children: "Help"
        })]
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;




const CHEAT_SHEET_ITEMS = [{
  title: 'Getting started',
  label: 'Start by selecting a measurement and field from the dropdown above. You can then use the tag selector to further narrow your search.'
}];

const InfluxCheatSheet = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
    children: "InfluxDB Cheat Sheet"
  })), CHEAT_SHEET_ITEMS.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "cheat-sheet-item",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cheat-sheet-item__title",
      children: item.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cheat-sheet-item__label",
      children: item.label
    })]
  }, item.title))]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfluxCheatSheet);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxStartPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



class InfluxStartPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClickExample: this.props.onClickExample
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _FluxQueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
/* harmony import */ var _QueryEditorModeSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/QueryEditorModeSwitcher.tsx");
/* harmony import */ var _RawInfluxQLEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/RawInfluxQLEditor.tsx");
/* harmony import */ var _VisualInfluxQLEditor_Editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Editor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const QueryEditor = ({
  query,
  onChange,
  onRunQuery,
  datasource,
  range,
  data
}) => {
  var _query$rawQuery;

  if (datasource.isFlux) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "gf-form-query-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_3__.FluxQueryEditor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery,
        datasource: datasource
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex'
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        flexGrow: 1
      }),
      children: query.rawQuery ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_RawInfluxQLEditor__WEBPACK_IMPORTED_MODULE_5__.RawInfluxQLEditor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_VisualInfluxQLEditor_Editor__WEBPACK_IMPORTED_MODULE_6__.Editor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery,
        datasource: datasource
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_QueryEditorModeSwitcher__WEBPACK_IMPORTED_MODULE_4__.QueryEditorModeSwitcher, {
      isRaw: (_query$rawQuery = query.rawQuery) !== null && _query$rawQuery !== void 0 ? _query$rawQuery : false,
      onChange: value => {
        onChange(Object.assign({}, query, {
          query: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.buildRawQuery)(query),
          rawQuery: value
        }));
        onRunQuery();
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/QueryEditorModeSwitcher.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorModeSwitcher": () => (/* binding */ QueryEditorModeSwitcher)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const QueryEditorModeSwitcher = ({
  isRaw,
  onChange
}) => {
  const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // if the isRaw changes, we hide the modal
    setModalOpen(false);
  }, [isRaw]);

  if (isRaw) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        "aria-label": "Switch to visual editor",
        icon: "pen",
        variant: "secondary",
        type: "button",
        onClick: () => {
          // we show the are-you-sure modal
          setModalOpen(true);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
        isOpen: isModalOpen,
        title: "Switch to visual editor mode",
        body: "Are you sure to switch to visual editor mode? You will lose the changes done in raw query mode.",
        confirmText: "Yes, switch to editor mode",
        dismissText: "No, stay in raw query mode",
        onConfirm: () => {
          onChange(false);
        },
        onDismiss: () => {
          setModalOpen(false);
        }
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      "aria-label": "Switch to text editor",
      icon: "pen",
      variant: "secondary",
      type: "button",
      onClick: () => {
        onChange(true);
      }
    });
  }
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/RawInfluxQLEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawInfluxQLEditor": () => (/* binding */ RawInfluxQLEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/constants.ts");
/* harmony import */ var _useShadowedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useShadowedState.ts");
/* harmony import */ var _useUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







// we handle 3 fields: "query", "alias", "resultFormat"
// "resultFormat" changes are applied immediately
// "query" and "alias" changes only happen on onblur
const RawInfluxQLEditor = ({
  query,
  onChange,
  onRunQuery
}) => {
  var _query$resultFormat;

  const [currentQuery, setCurrentQuery] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_3__.useShadowedState)(query.query);
  const [currentAlias, setCurrentAlias] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_3__.useShadowedState)(query.alias);
  const aliasElementId = (0,_useUniqueId__WEBPACK_IMPORTED_MODULE_4__.useUniqueId)();
  const selectElementId = (0,_useUniqueId__WEBPACK_IMPORTED_MODULE_4__.useUniqueId)();
  const resultFormat = (_query$resultFormat = query.resultFormat) !== null && _query$resultFormat !== void 0 ? _query$resultFormat : _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_RESULT_FORMAT;

  const applyDelayedChangesAndRunQuery = () => {
    onChange(Object.assign({}, query, {
      query: currentQuery,
      alias: currentAlias,
      resultFormat
    }));
    onRunQuery();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
      "aria-label": "query",
      rows: 3,
      spellCheck: false,
      placeholder: "InfluxDB Query",
      onBlur: applyDelayedChangesAndRunQuery,
      onChange: e => {
        setCurrentQuery(e.currentTarget.value);
      },
      value: currentQuery !== null && currentQuery !== void 0 ? currentQuery : ''
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
        htmlFor: selectElementId,
        children: "Format as"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        inputId: selectElementId,
        onChange: v => {
          onChange(Object.assign({}, query, {
            resultFormat: v.value
          }));
          onRunQuery();
        },
        value: resultFormat,
        options: _constants__WEBPACK_IMPORTED_MODULE_2__.RESULT_FORMATS
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
        htmlFor: aliasElementId,
        children: "Alias by"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        id: aliasElementId,
        type: "text",
        spellCheck: false,
        placeholder: "Naming pattern",
        onBlur: applyDelayedChangesAndRunQuery,
        onChange: e => {
          setCurrentAlias(e.currentTarget.value);
        },
        value: currentAlias !== null && currentAlias !== void 0 ? currentAlias : ''
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VariableQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _FluxQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class VariableQueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onRefresh", () => {// noop
    });
  }

  render() {
    let {
      query,
      datasource,
      onChange
    } = this.props;

    if (datasource.isFlux) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_2__.FluxQueryEditor, {
        datasource: datasource,
        query: {
          refId: 'A',
          query
        },
        onRunQuery: this.onRefresh,
        onChange: v => onChange(v.query)
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gf-form-inline",
      children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
        width: 10,
        children: "Query"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form-inline gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
          defaultValue: query || '',
          placeholder: "metric name or tags query",
          rows: 1,
          className: "gf-form-input",
          onBlur: e => onChange(e.currentTarget.value)
        })
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddButton": () => (/* binding */ AddButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const AddButton = ({
  loadOptions,
  allowCustomValue,
  onAdd
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
    value: "+",
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: v => {
      onAdd((0,_unwrap__WEBPACK_IMPORTED_MODULE_2__.unwrap)(v.value));
    }
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Editor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influxQLMetadataQuery.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/constants.ts");
/* harmony import */ var _useUniqueId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var _FormatAsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FormatAsSection.tsx");
/* harmony import */ var _FromSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FromSection.tsx");
/* harmony import */ var _InputSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/InputSection.tsx");
/* harmony import */ var _OrderByTimeSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/OrderByTimeSection.tsx");
/* harmony import */ var _PartListSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/PartListSection.tsx");
/* harmony import */ var _TagsSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/TagsSection.tsx");
/* harmony import */ var _partListUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/partListUtils.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



















function getTemplateVariableOptions() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)().getVariables() // we make them regex-params, i'm not 100% sure why.
  // probably because this way multi-value variables work ok too.
  .map(v => `/^$${v.name}$/`);
} // helper function to make it easy to call this from the widget-render-code


function withTemplateVariableOptions(optionsPromise) {
  return optionsPromise.then(options => [...getTemplateVariableOptions(), ...options]);
} // it is possible to add fields into the `InfluxQueryTag` structures, and they do work,
// but in some cases, when we do metadata queries, we have to remove them from the queries.


function filterTags(parts, allTagKeys) {
  return parts.filter(t => allTagKeys.has(t.key));
}

const Editor = props => {
  var _query$tags3, _query$limit, _query$slimit, _query$resultFormat;

  const uniqueId = (0,_useUniqueId__WEBPACK_IMPORTED_MODULE_7__.useUniqueId)();
  const formatAsId = `influxdb-qe-format-as-${uniqueId}`;
  const orderByTimeId = `influxdb-qe-order-by${uniqueId}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const query = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.normalizeQuery)(props.query);
  const {
    datasource
  } = props;
  const {
    measurement,
    policy
  } = query;
  const allTagKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getTagKeysForMeasurementAndTags)(measurement, policy, [], datasource).then(tags => {
      return new Set(tags);
    });
  }, [measurement, policy, datasource]);
  const selectLists = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _query$select;

    const dynamicSelectPartOptions = new Map([['field_0', () => {
      return measurement !== undefined ? (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getFieldKeysForMeasurement)(measurement, policy, datasource) : Promise.resolve([]);
    }]]);
    return ((_query$select = query.select) !== null && _query$select !== void 0 ? _query$select : []).map(sel => (0,_partListUtils__WEBPACK_IMPORTED_MODULE_14__.makePartList)(sel, dynamicSelectPartOptions));
  }, [measurement, policy, query.select, datasource]); // the following function is not complicated enough to memoize, but it's result
  // is used in both memoized and un-memoized parts, so we have no choice

  const getTagKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return () => allTagKeys.then(keys => {
      var _query$tags;

      return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getTagKeysForMeasurementAndTags)(measurement, policy, filterTags((_query$tags = query.tags) !== null && _query$tags !== void 0 ? _query$tags : [], keys), datasource);
    });
  }, [measurement, policy, query.tags, datasource, allTagKeys]);
  const groupByList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _query$groupBy;

    const dynamicGroupByPartOptions = new Map([['tag_0', getTagKeys]]);
    return (0,_partListUtils__WEBPACK_IMPORTED_MODULE_14__.makePartList)((_query$groupBy = query.groupBy) !== null && _query$groupBy !== void 0 ? _query$groupBy : [], dynamicGroupByPartOptions);
  }, [getTagKeys, query.groupBy]);

  const onAppliedChange = newQuery => {
    props.onChange(newQuery);
    props.onRunQuery();
  };

  const handleFromSectionChange = (p, m) => {
    onAppliedChange(Object.assign({}, query, {
      policy: p,
      measurement: m
    }));
  };

  const handleTagsSectionChange = tags => {
    // we set empty-arrays to undefined
    onAppliedChange(Object.assign({}, query, {
      tags: tags.length === 0 ? undefined : tags
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: "FROM",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_FromSection__WEBPACK_IMPORTED_MODULE_9__.FromSection, {
        policy: policy,
        measurement: measurement,
        getPolicyOptions: () => (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getAllPolicies)(datasource),
        getMeasurementOptions: filter => withTemplateVariableOptions(allTagKeys.then(keys => {
          var _query$tags2;

          return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getAllMeasurementsForTags)(filter === '' ? undefined : filter, filterTags((_query$tags2 = query.tags) !== null && _query$tags2 !== void 0 ? _query$tags2 : [], keys), datasource);
        })),
        onChange: handleFromSectionChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
        width: "auto",
        className: styles.inlineLabel,
        children: "WHERE"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_TagsSection__WEBPACK_IMPORTED_MODULE_13__.TagsSection, {
        tags: (_query$tags3 = query.tags) !== null && _query$tags3 !== void 0 ? _query$tags3 : [],
        onChange: handleTagsSectionChange,
        getTagKeyOptions: getTagKeys,
        getTagValueOptions: key => withTemplateVariableOptions(allTagKeys.then(keys => {
          var _query$tags4;

          return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getTagValues)(key, measurement, policy, filterTags((_query$tags4 = query.tags) !== null && _query$tags4 !== void 0 ? _query$tags4 : [], keys), datasource);
        }))
      })]
    }), selectLists.map((sel, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: index === 0 ? 'SELECT' : '',
      fill: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PartListSection__WEBPACK_IMPORTED_MODULE_12__.PartListSection, {
        parts: sel,
        getNewPartOptions: () => Promise.resolve((0,_partListUtils__WEBPACK_IMPORTED_MODULE_14__.getNewSelectPartOptions)()),
        onChange: (partIndex, newParams) => {
          const newQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.changeSelectPart)(query, index, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: type => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.addNewSelectPart)(query, type, index));
        },
        onRemovePart: partIndex => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.removeSelectPart)(query, partIndex, index));
        }
      })
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: "GROUP BY",
      fill: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PartListSection__WEBPACK_IMPORTED_MODULE_12__.PartListSection, {
        parts: groupByList,
        getNewPartOptions: () => (0,_partListUtils__WEBPACK_IMPORTED_MODULE_14__.getNewGroupByPartOptions)(query, getTagKeys),
        onChange: (partIndex, newParams) => {
          const newQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.changeGroupByPart)(query, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: type => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.addNewGroupByPart)(query, type));
        },
        onRemovePart: partIndex => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.removeGroupByPart)(query, partIndex));
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: "TIMEZONE",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_10__.InputSection, {
        placeholder: "(optional)",
        value: query.tz,
        onChange: tz => {
          onAppliedChange(Object.assign({}, query, {
            tz
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
        htmlFor: orderByTimeId,
        width: "auto",
        className: styles.inlineLabel,
        children: "ORDER BY TIME"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_OrderByTimeSection__WEBPACK_IMPORTED_MODULE_11__.OrderByTimeSection, {
        inputId: orderByTimeId,
        value: query.orderByTime === 'DESC' ? 'DESC' : 'ASC'
        /* FIXME: make this shared with influx_query_model */
        ,
        onChange: v => {
          onAppliedChange(Object.assign({}, query, {
            orderByTime: v
          }));
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: "LIMIT",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_10__.InputSection, {
        placeholder: "(optional)",
        value: (_query$limit = query.limit) === null || _query$limit === void 0 ? void 0 : _query$limit.toString(),
        onChange: limit => {
          onAppliedChange(Object.assign({}, query, {
            limit
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
        width: "auto",
        className: styles.inlineLabel,
        children: "SLIMIT"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_10__.InputSection, {
        placeholder: "(optional)",
        value: (_query$slimit = query.slimit) === null || _query$slimit === void 0 ? void 0 : _query$slimit.toString(),
        onChange: slimit => {
          onAppliedChange(Object.assign({}, query, {
            slimit
          }));
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      htmlFor: formatAsId,
      label: "FORMAT AS",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_FormatAsSection__WEBPACK_IMPORTED_MODULE_8__.FormatAsSection, {
        inputId: formatAsId,
        format: (_query$resultFormat = query.resultFormat) !== null && _query$resultFormat !== void 0 ? _query$resultFormat : _constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_RESULT_FORMAT,
        onChange: format => {
          onAppliedChange(Object.assign({}, query, {
            resultFormat: format
          }));
        }
      }), query.resultFormat !== 'table' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
          width: "auto",
          className: styles.inlineLabel,
          children: "ALIAS"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_10__.InputSection, {
          isWide: true,
          placeholder: "Naming pattern",
          value: query.alias,
          onChange: alias => {
            onAppliedChange(Object.assign({}, query, {
              alias
            }));
          }
        })]
      })]
    })]
  });
};

function getStyles(theme) {
  return {
    inlineLabel: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.primary.text};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FormatAsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatAsSection": () => (/* binding */ FormatAsSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/constants.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('width-8', _styles__WEBPACK_IMPORTED_MODULE_4__.paddingRightClass);
const FormatAsSection = ({
  format,
  inputId,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
    inputId: inputId,
    className: className,
    onChange: v => {
      onChange((0,_unwrap__WEBPACK_IMPORTED_MODULE_5__.unwrap)(v.value));
    },
    value: format,
    options: _constants__WEBPACK_IMPORTED_MODULE_3__.RESULT_FORMATS
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FromSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FromSection": () => (/* binding */ FromSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const DEFAULT_POLICY = 'default'; // we use the value "default" as a magic-value, it means
// we use the default retention-policy.
// unfortunately, IF the user has a retention-policy named "default",
// and it is not the default-retention-policy in influxdb,
// bad things will happen.
// https://github.com/grafana/grafana/issues/4347 :-(
// FIXME: we could maybe at least detect here that problem-is-happening,
// and show an error message or something.
// unfortunately, currently the ResponseParser does not return the
// is-default info for the retention-policies, so that should change first.

const FromSection = ({
  policy,
  measurement,
  onChange,
  getPolicyOptions,
  getMeasurementOptions
}) => {
  const handlePolicyLoadOptions = async () => {
    const allPolicies = await getPolicyOptions(); // if `default` does not exist in the list of policies, we add it

    const allPoliciesWithDefault = allPolicies.some(p => p === 'default') ? allPolicies : [DEFAULT_POLICY, ...allPolicies];
    return allPoliciesWithDefault.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue);
  };

  const handleMeasurementLoadOptions = async filter => {
    const allMeasurements = await getMeasurementOptions(filter);
    return allMeasurements.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      allowCustomValue: true,
      value: policy !== null && policy !== void 0 ? policy : 'using default policy',
      loadOptions: handlePolicyLoadOptions,
      onChange: v => {
        onChange(v.value, measurement);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      allowCustomValue: true,
      value: measurement !== null && measurement !== void 0 ? measurement : 'select measurement',
      loadOptions: handleMeasurementLoadOptions,
      filterByLoadOptions: true,
      onChange: v => {
        onChange(policy, v.value);
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/InputSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputSection": () => (/* binding */ InputSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _useShadowedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useShadowedState.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const InputSection = ({
  value,
  onChange,
  isWide,
  placeholder
}) => {
  const [currentValue, setCurrentValue] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_3__.useShadowedState)(value);

  const onBlur = () => {
    // we send empty-string as undefined
    const newValue = currentValue === '' ? undefined : currentValue;
    onChange(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
      placeholder: placeholder,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)((isWide !== null && isWide !== void 0 ? isWide : false) ? 'width-14' : 'width-8', _styles__WEBPACK_IMPORTED_MODULE_4__.paddingRightClass),
      type: "text",
      spellCheck: false,
      onBlur: onBlur,
      onChange: e => {
        setCurrentValue(e.currentTarget.value);
      },
      value: currentValue !== null && currentValue !== void 0 ? currentValue : ''
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/OrderByTimeSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderByTimeSection": () => (/* binding */ OrderByTimeSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const OPTIONS = [{
  label: 'ascending',
  value: 'ASC'
}, {
  label: 'descending',
  value: 'DESC'
}];
const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('width-9', _styles__WEBPACK_IMPORTED_MODULE_3__.paddingRightClass);
const OrderByTimeSection = ({
  value,
  onChange,
  inputId
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
      inputId: inputId,
      className: className,
      onChange: v => {
        onChange((0,_unwrap__WEBPACK_IMPORTED_MODULE_4__.unwrap)(v.value));
      },
      value: value,
      options: OPTIONS
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/PartListSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartListSection": () => (/* binding */ PartListSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const renderRemovableNameMenuItems = onClick => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: "",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
      label: "remove",
      onClick: onClick
    })
  });
};

const noRightMarginPaddingClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  paddingRight: '0',
  marginRight: '0'
});

const RemovableName = ({
  name,
  onRemove
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.WithContextMenu, {
    renderMenuItems: () => renderRemovableNameMenuItems(onRemove),
    children: ({
      openMenu
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form-label', noRightMarginPaddingClass),
      onClick: openMenu,
      children: name
    })
  });
};

const noHorizMarginPaddingClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  paddingLeft: '0',
  paddingRight: '0',
  marginLeft: '0',
  marginRight: '0'
});

const getPartClass = theme => {
  return (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form-label', (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    paddingLeft: '0',
    // gf-form-label class makes certain css attributes incorrect
    // for the selectbox-dropdown, so we have to "reset" them back
    lineHeight: theme.typography.body.lineHeight,
    fontSize: theme.typography.body.fontSize
  }));
};

const Part = ({
  name,
  params,
  onChange,
  onRemove
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const partClass = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => getPartClass(theme), [theme]);

  const onParamChange = (par, i) => {
    const newParams = params.map(p => p.value);
    newParams[i] = par;
    onChange(newParams);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: partClass,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(RemovableName, {
      name: name,
      onRemove: onRemove
    }), "(", params.map((p, i) => {
      const {
        value,
        options
      } = p;
      const isLast = i === params.length - 1;
      const loadOptions = options !== null ? () => options().then(items => items.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_5__.toSelectableValue)) : undefined;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_4__.Seg, {
          allowCustomValue: true,
          value: value,
          buttonClassName: noHorizMarginPaddingClass,
          loadOptions: loadOptions,
          onChange: v => {
            onParamChange((0,_unwrap__WEBPACK_IMPORTED_MODULE_6__.unwrap)(v.value), i);
          }
        }), !isLast && ',']
      }, i);
    }), ")"]
  });
};

const PartListSection = ({
  parts,
  getNewPartOptions,
  onAddNewPart,
  onRemovePart,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [parts.map((part, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Part, {
      name: part.name,
      params: part.params,
      onRemove: () => {
        onRemovePart(index);
      },
      onChange: pars => {
        onChange(index, pars);
      }
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AddButton__WEBPACK_IMPORTED_MODULE_3__.AddButton, {
      loadOptions: getNewPartOptions,
      onAdd: onAddNewPart
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Seg": () => (/* binding */ Seg)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _useShadowedState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useShadowedState.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





 // this file is a simpler version of `grafana-ui / SegmentAsync.tsx`
// with some changes:
// 1. click-outside does not select the value. i think it's better to be explicit here.
// 2. we set a min-width on the select-element to handle cases where the `value`
//    is very short, like "x", and then you click on it and the select opens,
//    and it tries to be as short as "x" and it does not work well.
// NOTE: maybe these changes could be migrated into the SegmentAsync later


const selectClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  minWidth: '160px'
});

// when a custom value is written into a select-box,
// by default the new value is prefixed with "Create:",
// and that sounds confusing because here we do not create
// anything. we change this to just be the entered string.
const formatCreateLabel = v => v;

const SelReload = ({
  loadOptions,
  allowCustomValue,
  onChange,
  onClose
}) => {
  // here we rely on the fact that writing text into the <AsyncSelect/>
  // does not cause a re-render of the current react component.
  // this way there is only a single render-call,
  // so there is only a single `debouncedLoadOptions`.
  // if we want ot make this "re-render safe,
  // we will have to put the debounced call into an useRef,
  // and probably have an useEffect
  const debouncedLoadOptions = debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()(loadOptions, 1000, {
    leading: true
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: selectClass,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.AsyncSelect, {
      formatCreateLabel: formatCreateLabel,
      defaultOptions: true,
      autoFocus: true,
      isOpen: true,
      onCloseMenu: onClose,
      allowCustomValue: allowCustomValue,
      loadOptions: debouncedLoadOptions,
      onChange: onChange
    })
  });
};

const SelSingleLoad = ({
  loadOptions,
  allowCustomValue,
  onChange,
  onClose
}) => {
  var _loadState$value;

  const [loadState, doLoad] = (0,react_use__WEBPACK_IMPORTED_MODULE_6__["default"])(loadOptions, [loadOptions]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    doLoad('');
  }, [doLoad, loadOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: selectClass,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      isLoading: loadState.loading,
      formatCreateLabel: formatCreateLabel,
      autoFocus: true,
      isOpen: true,
      onCloseMenu: onClose,
      allowCustomValue: allowCustomValue,
      options: (_loadState$value = loadState.value) !== null && _loadState$value !== void 0 ? _loadState$value : [],
      onChange: onChange
    })
  });
};

const Sel = ({
  loadOptions,
  filterByLoadOptions,
  allowCustomValue,
  onChange,
  onClose
}) => {
  // unfortunately <Segment/> and <SegmentAsync/> have somewhat different behavior,
  // so the simplest approach was to just create two separate wrapper-components
  return filterByLoadOptions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SelReload, {
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: onChange,
    onClose: onClose
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SelSingleLoad, {
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: onChange,
    onClose: onClose
  });
};

const Inp = ({
  initialValue,
  onChange,
  onClose
}) => {
  const [currentValue, setCurrentValue] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_4__.useShadowedState)(initialValue);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
    autoFocus: true,
    type: "text",
    spellCheck: false,
    onBlur: onClose,
    onKeyDown: e => {
      if (e.key === 'Enter') {
        onChange(currentValue);
      }
    },
    onChange: e => {
      setCurrentValue(e.currentTarget.value);
    },
    value: currentValue
  });
};

const defaultButtonClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  width: 'auto',
  cursor: 'pointer'
});
const Seg = ({
  value,
  buttonClassName,
  loadOptions,
  filterByLoadOptions,
  allowCustomValue,
  onChange
}) => {
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  if (!isOpen) {
    const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(defaultButtonClass, buttonClassName);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
      as: "button",
      className: className,
      onClick: () => {
        setOpen(true);
      },
      children: value
    });
  } else {
    if (loadOptions !== undefined) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Sel, {
        loadOptions: loadOptions,
        filterByLoadOptions: filterByLoadOptions !== null && filterByLoadOptions !== void 0 ? filterByLoadOptions : false,
        allowCustomValue: allowCustomValue,
        onChange: v => {
          setOpen(false);
          onChange(v);
        },
        onClose: () => {
          setOpen(false);
        }
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Inp, {
        initialValue: value,
        onClose: () => {
          setOpen(false);
        },
        onChange: v => {
          setOpen(false);
          onChange({
            value: v,
            label: v
          });
        }
      });
    }
  }
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/TagsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsSection": () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _tagUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/tagUtils.ts");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const knownOperators = ['=', '!=', '<>', '<', '>', '=~', '!~'];
const knownConditions = ['AND', 'OR'];
const operatorOptions = knownOperators.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue);
const condititonOptions = knownConditions.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue);

const loadConditionOptions = () => Promise.resolve(condititonOptions);

const loadOperatorOptions = () => Promise.resolve(operatorOptions);

const Tag = ({
  tag,
  isFirst,
  onRemove,
  onChange,
  getTagKeyOptions,
  getTagValueOptions
}) => {
  const operator = (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getOperator)(tag);
  const condition = (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getCondition)(tag, isFirst);

  const getTagKeySegmentOptions = () => {
    return getTagKeyOptions().catch(err => {
      // in this UI element we add a special item to the list of options,
      // that is used to remove the element.
      // this causes a problem: if `getTagKeyOptions` fails with an error,
      // the remove-filter option is never added to the list,
      // and the UI element can not be removed.
      // to avoid it, we catch any potential errors coming from `getTagKeyOptions`,
      // log the error, and pretend that the list of options is an empty list.
      // this way the remove-item option can always be added to the list.
      console.error(err);
      return [];
    }).then(tags => [{
      label: '-- remove filter --',
      value: undefined
    }, ...tags.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue)]);
  };

  const getTagValueSegmentOptions = () => {
    return getTagValueOptions(tag.key).then(tags => tags.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "gf-form",
    children: [condition != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_2__.Seg, {
      value: condition,
      loadOptions: loadConditionOptions,
      onChange: v => {
        onChange(Object.assign({}, tag, {
          condition: v.value
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_2__.Seg, {
      allowCustomValue: true,
      value: tag.key,
      loadOptions: getTagKeySegmentOptions,
      onChange: v => {
        const {
          value
        } = v;

        if (value === undefined) {
          onRemove();
        } else {
          onChange(Object.assign({}, tag, {
            key: value !== null && value !== void 0 ? value : ''
          }));
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_2__.Seg, {
      value: operator,
      loadOptions: loadOperatorOptions,
      onChange: op => {
        onChange(Object.assign({}, tag, {
          operator: op.value
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_2__.Seg, {
      allowCustomValue: true,
      value: tag.value,
      loadOptions: getTagValueSegmentOptions,
      onChange: v => {
        var _v$value;

        const value = (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : '';
        onChange(Object.assign({}, tag, {
          value,
          operator: (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.adjustOperatorIfNeeded)(operator, value)
        }));
      }
    })]
  });
};

const TagsSection = ({
  tags,
  onChange,
  getTagKeyOptions,
  getTagValueOptions
}) => {
  const onTagChange = (newTag, index) => {
    const newTags = tags.map((tag, i) => {
      return index === i ? newTag : tag;
    });
    onChange(newTags);
  };

  const onTagRemove = index => {
    const newTags = tags.filter((t, i) => i !== index);
    onChange(newTags);
  };

  const getTagKeySegmentOptions = () => {
    return getTagKeyOptions().then(tags => tags.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue));
  };

  const addNewTag = (tagKey, isFirst) => {
    const minimalTag = {
      key: tagKey,
      value: 'select tag value'
    };
    const newTag = {
      key: minimalTag.key,
      value: minimalTag.value,
      operator: (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getOperator)(minimalTag),
      condition: (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getCondition)(minimalTag, isFirst)
    };
    onChange([...tags, newTag]);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [tags.map((t, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Tag, {
      tag: t,
      isFirst: i === 0,
      onChange: newT => {
        onTagChange(newT, i);
      },
      onRemove: () => {
        onTagRemove(i);
      },
      getTagKeyOptions: getTagKeyOptions,
      getTagValueOptions: getTagValueOptions
    }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AddButton__WEBPACK_IMPORTED_MODULE_1__.AddButton, {
      allowCustomValue: true,
      loadOptions: getTagKeySegmentOptions,
      onAdd: v => {
        addNewTag(v, tags.length === 0);
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/partListUtils.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewGroupByPartOptions": () => (/* binding */ getNewGroupByPartOptions),
/* harmony export */   "getNewSelectPartOptions": () => (/* binding */ getNewSelectPartOptions),
/* harmony export */   "makePartList": () => (/* binding */ makePartList)
/* harmony export */ });
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");




function getNewSelectPartOptions() {
  const categories = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].getCategories();
  const options = [];
  const keys = Object.keys(categories);
  keys.forEach(key => {
    const children = categories[key].map(x => (0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)(x.type));
    options.push({
      label: key,
      options: children
    });
  });
  return options;
}
async function getNewGroupByPartOptions(query, getTagKeys) {
  const tagKeys = await getTagKeys();
  const queryCopy = Object.assign({}, query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_0__["default"](queryCopy);
  const options = [];

  if (!model.hasFill()) {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)('fill(null)'));
  }

  if (!model.hasGroupByTime()) {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)('time($interval)'));
  }

  tagKeys.forEach(key => {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)(`tag(${key})`));
  });
  return options;
}

function getPartParams(part, dynamicParamOptions) {
  var _part$params;

  // NOTE: the way the system is constructed,
  // there always can only be one possible dynamic-lookup
  // field. in case of select it is the field,
  // in case of group-by it is the tag
  const def = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create(part).def; // we switch the numbers to strings, it will work that way too,
  // and it makes the code simpler

  const paramValues = ((_part$params = part.params) !== null && _part$params !== void 0 ? _part$params : []).map(p => p.toString());

  if (paramValues.length !== def.params.length) {
    throw new Error('Invalid query-segment');
  }

  return paramValues.map((val, index) => {
    const defParam = def.params[index];

    if (defParam.dynamicLookup) {
      return {
        value: val,
        options: (0,_unwrap__WEBPACK_IMPORTED_MODULE_3__.unwrap)(dynamicParamOptions.get(`${def.type}_${index}`))
      };
    }

    if (defParam.options != null) {
      return {
        value: val,
        options: () => Promise.resolve(defParam.options)
      };
    }

    return {
      value: val,
      options: null
    };
  });
}

function makePartList(queryParts, dynamicParamOptions) {
  return queryParts.map(qp => {
    return {
      name: qp.type,
      params: getPartParams(qp, dynamicParamOptions)
    };
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paddingRightClass": () => (/* binding */ paddingRightClass)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const paddingRightClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  paddingRight: '4px'
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/tagUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustOperatorIfNeeded": () => (/* binding */ adjustOperatorIfNeeded),
/* harmony export */   "getCondition": () => (/* binding */ getCondition),
/* harmony export */   "getOperator": () => (/* binding */ getOperator)
/* harmony export */ });
function isRegex(text) {
  return /^\/.*\/$/.test(text);
} // FIXME: sync these to the query-string-generation-code
// probably it's in influx_query_model.ts


function getOperator(tag) {
  var _tag$operator;

  return (_tag$operator = tag.operator) !== null && _tag$operator !== void 0 ? _tag$operator : isRegex(tag.value) ? '=~' : '=';
} // FIXME: sync these to the query-string-generation-code
// probably it's in influx_query_model.ts

function getCondition(tag, isFirst) {
  var _tag$condition;

  return isFirst ? undefined : (_tag$condition = tag.condition) !== null && _tag$condition !== void 0 ? _tag$condition : 'AND';
}
function adjustOperatorIfNeeded(currentOperator, newTagValue) {
  const isCurrentOperatorRegex = currentOperator === '=~' || currentOperator === '!~';
  const isNewTagValueRegex = isRegex(newTagValue);

  if (isNewTagValueRegex) {
    return isCurrentOperatorRegex ? currentOperator : '=~';
  } else {
    return isCurrentOperatorRegex ? '=' : currentOperator;
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toSelectableValue": () => (/* binding */ toSelectableValue)
/* harmony export */ });
function toSelectableValue(t) {
  return {
    label: t,
    value: t
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unwrap": () => (/* binding */ unwrap)
/* harmony export */ });
function unwrap(value) {
  if (value == null) {
    throw new Error('value must not be nullish');
  }

  return value;
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_RESULT_FORMAT": () => (/* binding */ DEFAULT_RESULT_FORMAT),
/* harmony export */   "RESULT_FORMATS": () => (/* binding */ RESULT_FORMATS)
/* harmony export */ });
const RESULT_FORMATS = [{
  label: 'Time series',
  value: 'time_series'
}, {
  label: 'Table',
  value: 'table'
}, {
  label: 'Logs',
  value: 'logs'
}];
const DEFAULT_RESULT_FORMAT = 'time_series';

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/useShadowedState.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useShadowedState": () => (/* binding */ useShadowedState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js");


function useShadowedState(outsideVal) {
  const [currentVal, setCurrentVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(outsideVal);
  const prevOutsideVal = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(outsideVal);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isOutsideValChanged = prevOutsideVal !== outsideVal; // if the value changes from the outside, we accept it into the state
    // (we only set it if it is different from the current value)

    if (isOutsideValChanged && currentVal !== outsideVal) {
      setCurrentVal(outsideVal);
    }
  }, [outsideVal, currentVal, prevOutsideVal]);
  return [currentVal, setCurrentVal];
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _components_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _influx_series__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_series.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_builder.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/response_parser.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
const _excluded = ["__interval", "__interval_ms"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // we detect the field type based on the value-array

function getFieldType(values) {
  // the values-array may contain a lot of nulls.
  // we need the first not-null item
  const firstNotNull = values.find(v => v !== null);

  if (firstNotNull === undefined) {
    // we could not find any not-null values
    return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number;
  }

  const valueType = typeof firstNotNull;

  switch (valueType) {
    case 'string':
      return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string;

    case 'boolean':
      return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean;

    case 'number':
      return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number;

    default:
      // this should never happen, influxql values
      // can only be numbers, strings and booleans.
      throw new Error(`InfluxQL: invalid value type ${valueType}`);
  }
} // this conversion function is specialized to work with the timeseries
// data returned by InfluxDatasource.getTimeSeries()


function timeSeriesToDataFrame(timeSeries) {
  const times = [];
  const values = []; // the data we process here is not correctly typed.
  // the typescript types say every data-point is number|null,
  // but in fact it can be string or boolean too.

  const points = timeSeries.datapoints;

  for (const point of points) {
    values.push(point[0]);
    times.push(point[1]);
  }

  const timeField = {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.TIME_SERIES_TIME_FIELD_NAME,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.ArrayVector(times)
  };
  const valueField = {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.TIME_SERIES_VALUE_FIELD_NAME,
    type: getFieldType(values),
    config: {
      displayNameFromDS: timeSeries.title
    },
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.ArrayVector(values),
    labels: timeSeries.tags
  };
  const fields = [timeField, valueField];
  return {
    name: timeSeries.target,
    refId: timeSeries.refId,
    meta: timeSeries.meta,
    fields,
    length: values.length
  };
}

class InfluxDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)()) {
    var _instanceSettings$url, _instanceSettings$use, _instanceSettings$pas;

    super(instanceSettings);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "urls", void 0);

    _defineProperty(this, "username", void 0);

    _defineProperty(this, "password", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "database", void 0);

    _defineProperty(this, "basicAuth", void 0);

    _defineProperty(this, "withCredentials", void 0);

    _defineProperty(this, "access", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "httpMode", void 0);

    _defineProperty(this, "isFlux", void 0);

    this.templateSrv = templateSrv;
    this.type = 'influxdb';
    this.urls = ((_instanceSettings$url = instanceSettings.url) !== null && _instanceSettings$url !== void 0 ? _instanceSettings$url : '').split(',').map(url => {
      return url.trim();
    });
    this.username = (_instanceSettings$use = instanceSettings.username) !== null && _instanceSettings$use !== void 0 ? _instanceSettings$use : '';
    this.password = (_instanceSettings$pas = instanceSettings.password) !== null && _instanceSettings$pas !== void 0 ? _instanceSettings$pas : '';
    this.name = instanceSettings.name;
    this.database = instanceSettings.database;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.access = instanceSettings.access;
    const settingsData = instanceSettings.jsonData || {};
    this.interval = settingsData.timeInterval;
    this.httpMode = settingsData.httpMode || 'GET';
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_10__["default"]();
    this.isFlux = settingsData.version === _types__WEBPACK_IMPORTED_MODULE_11__.InfluxVersion.Flux;

    if (this.isFlux) {
      // When flux, use an annotation processor rather than the `annotationQuery` lifecycle
      this.annotations = {
        QueryEditor: _components_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_5__.FluxQueryEditor
      };
    }
  }

  query(request) {
    // for not-flux queries we call `this.classicQuery`, and that
    // handles the is-hidden situation.
    // for the flux-case, we do the filtering here
    const filteredRequest = Object.assign({}, request, {
      targets: request.targets.filter(t => t.hide !== true)
    });

    if (this.isFlux) {
      return super.query(filteredRequest);
    }

    if (this.isMigrationToggleOnAndIsAccessProxy()) {
      return super.query(filteredRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(res => {
        if (res.error) {
          throw {
            message: 'InfluxDB Error: ' + res.error.message,
            res
          };
        }

        const seriesList = [];
        const groupedFrames = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(res.data, x => x.refId);

        if (Object.keys(groupedFrames).length > 0) {
          filteredRequest.targets.forEach(target => {
            var _groupedFrames$target;

            const filteredFrames = (_groupedFrames$target = groupedFrames[target.refId]) !== null && _groupedFrames$target !== void 0 ? _groupedFrames$target : [];

            switch (target.resultFormat) {
              case 'logs':
              case 'table':
                seriesList.push(this.responseParser.getTable(filteredFrames, target, {
                  preferredVisualisationType: target.resultFormat
                }));
                break;

              default:
                {
                  for (let i = 0; i < filteredFrames.length; i++) {
                    seriesList.push(filteredFrames[i]);
                  }

                  break;
                }
            }
          });
        }

        return {
          data: seriesList
        };
      }));
    } // Fallback to classic query support


    return this.classicQuery(request);
  }

  getQueryDisplayText(query) {
    if (this.isFlux) {
      return query.query;
    }

    return new _influx_query_model__WEBPACK_IMPORTED_MODULE_6__["default"](query).render(false);
  }
  /**
   * Returns false if the query should be skipped
   */


  filterQuery(query) {
    if (this.isFlux) {
      return !!query.query;
    }

    return true;
  }

  applyTemplateVariables(query, scopedVars) {
    // We want to interpolate these variables on backend
    const rest = _objectWithoutPropertiesLoose(scopedVars, _excluded);

    if (this.isFlux) {
      var _query$query;

      return Object.assign({}, query, {
        query: this.templateSrv.replace((_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '', rest) // The raw query text

      });
    }

    if (app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].featureToggles.influxdbBackendMigration && this.access === 'proxy') {
      query = this.applyVariables(query, scopedVars, rest);
    }

    return query;
  }
  /**
   * The unchanged pre 7.1 query implementation
   */


  classicQuery(options) {
    let timeFilter = this.getTimeFilter(options);
    const scopedVars = options.scopedVars;
    const targets = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(options.targets);
    const queryTargets = [];
    let i, y;

    let allQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(targets, target => {
      if (target.hide) {
        return '';
      }

      queryTargets.push(target); // backward compatibility

      scopedVars.interval = scopedVars.__interval;
      return new _influx_query_model__WEBPACK_IMPORTED_MODULE_6__["default"](target, this.templateSrv, scopedVars).render(true);
    }).reduce((acc, current) => {
      if (current !== '') {
        acc += ';' + current;
      }

      return acc;
    });

    if (allQueries === '') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
        data: []
      });
    } // add global adhoc filters to timeFilter


    const adhocFilters = this.templateSrv.getAdhocFilters(this.name);

    if (adhocFilters.length > 0) {
      const tmpQuery = new _influx_query_model__WEBPACK_IMPORTED_MODULE_6__["default"]({
        refId: 'A'
      }, this.templateSrv, scopedVars);
      timeFilter += ' AND ' + tmpQuery.renderAdhocFilters(adhocFilters);
    } // replace grafana variables


    scopedVars.timeFilter = {
      value: timeFilter
    }; // replace templated variables

    allQueries = this.templateSrv.replace(allQueries, scopedVars);
    return this._seriesQuery(allQueries, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => {
      if (!data || !data.results) {
        return {
          data: []
        };
      }

      const seriesList = [];

      for (i = 0; i < data.results.length; i++) {
        const result = data.results[i];

        if (!result || !result.series) {
          continue;
        }

        const target = queryTargets[i];
        let alias = target.alias;

        if (alias) {
          alias = this.templateSrv.replace(target.alias, options.scopedVars);
        }

        const meta = {
          executedQueryString: data.executedQueryString
        };
        const influxSeries = new _influx_series__WEBPACK_IMPORTED_MODULE_7__["default"]({
          refId: target.refId,
          series: data.results[i].series,
          alias: alias,
          meta
        });

        switch (target.resultFormat) {
          case 'logs':
            meta.preferredVisualisationType = 'logs';

          case 'table':
            {
              seriesList.push(influxSeries.getTable());
              break;
            }

          default:
            {
              const timeSeries = influxSeries.getTimeSeries();

              for (y = 0; y < timeSeries.length; y++) {
                seriesList.push(timeSeriesToDataFrame(timeSeries[y]));
              }

              break;
            }
        }
      }

      return {
        data: seriesList
      };
    }));
  }

  async annotationQuery(options) {
    if (this.isFlux) {
      return Promise.reject({
        message: 'Flux requires the standard annotation query'
      });
    } // InfluxQL puts a query string on the annotation


    if (!options.annotation.query) {
      return Promise.reject({
        message: 'Query missing in annotation definition'
      });
    }

    if (app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].featureToggles.influxdbBackendMigration && this.access === 'proxy') {
      var _options$annotation$q;

      // We want to send our query to the backend as a raw query
      const target = {
        refId: 'metricFindQuery',
        datasource: this.getRef(),
        query: this.templateSrv.replace((_options$annotation$q = options.annotation.query) !== null && _options$annotation$q !== void 0 ? _options$annotation$q : ''),
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
          from: options.range.from.valueOf().toString(),
          to: options.range.to.valueOf().toString(),
          queries: [target]
        },
        requestId: options.annotation.name
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(async res => await this.responseParser.transformAnnotationResponse(options, res, target))));
    }

    const timeFilter = this.getTimeFilter({
      rangeRaw: options.rangeRaw,
      timezone: options.dashboard.timezone
    });
    let query = options.annotation.query.replace('$timeFilter', timeFilter);
    query = this.templateSrv.replace(query, undefined, 'regex');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this._seriesQuery(query, options)).then(data => {
      if (!data || !data.results || !data.results[0]) {
        throw {
          message: 'No results in response from InfluxDB'
        };
      }

      return new _influx_series__WEBPACK_IMPORTED_MODULE_7__["default"]({
        series: data.results[0].series,
        annotation: options.annotation
      }).getAnnotations();
    });
  }

  targetContainsTemplate(target) {
    // for flux-mode we just take target.query,
    // for influxql-mode we use InfluxQueryModel to create the text-representation
    const queryText = this.isFlux ? target.query : (0,_queryUtils__WEBPACK_IMPORTED_MODULE_8__.buildRawQuery)(target);
    return this.templateSrv.containsTemplate(queryText);
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries || queries.length === 0) {
      return [];
    }

    return queries.map(query => {
      if (this.isFlux) {
        var _query$query2;

        return Object.assign({}, query, {
          datasource: this.getRef(),
          query: this.templateSrv.replace((_query$query2 = query.query) !== null && _query$query2 !== void 0 ? _query$query2 : '', scopedVars) // The raw query text

        });
      }

      return Object.assign({}, query, {
        datasource: this.getRef()
      }, this.applyVariables(query, scopedVars, scopedVars));
    });
  }

  applyVariables(query, scopedVars, rest) {
    var _query$query3, _query$alias, _query$limit$toString, _query$limit, _query$measurement, _query$policy, _query$slimit$toStrin, _query$slimit, _query$tz;

    const expandedQuery = Object.assign({}, query);

    if (query.groupBy) {
      expandedQuery.groupBy = query.groupBy.map(groupBy => {
        var _groupBy$params;

        return Object.assign({}, groupBy, {
          params: (_groupBy$params = groupBy.params) === null || _groupBy$params === void 0 ? void 0 : _groupBy$params.map(param => {
            return this.templateSrv.replace(param.toString(), undefined, 'regex');
          })
        });
      });
    }

    if (query.select) {
      expandedQuery.select = query.select.map(selects => {
        return selects.map(select => {
          var _select$params;

          return Object.assign({}, select, {
            params: (_select$params = select.params) === null || _select$params === void 0 ? void 0 : _select$params.map(param => {
              return this.templateSrv.replace(param.toString(), undefined, 'regex');
            })
          });
        });
      });
    }

    if (query.tags) {
      expandedQuery.tags = query.tags.map(tag => {
        return Object.assign({}, tag, {
          value: this.templateSrv.replace(tag.value, undefined, 'regex')
        });
      });
    }

    return Object.assign({}, expandedQuery, {
      query: this.templateSrv.replace((_query$query3 = query.query) !== null && _query$query3 !== void 0 ? _query$query3 : '', rest),
      // The raw query text
      alias: this.templateSrv.replace((_query$alias = query.alias) !== null && _query$alias !== void 0 ? _query$alias : '', scopedVars),
      limit: this.templateSrv.replace((_query$limit$toString = (_query$limit = query.limit) === null || _query$limit === void 0 ? void 0 : _query$limit.toString()) !== null && _query$limit$toString !== void 0 ? _query$limit$toString : '', scopedVars, 'regex'),
      measurement: this.templateSrv.replace((_query$measurement = query.measurement) !== null && _query$measurement !== void 0 ? _query$measurement : '', scopedVars, 'regex'),
      policy: this.templateSrv.replace((_query$policy = query.policy) !== null && _query$policy !== void 0 ? _query$policy : '', scopedVars, 'regex'),
      slimit: this.templateSrv.replace((_query$slimit$toStrin = (_query$slimit = query.slimit) === null || _query$slimit === void 0 ? void 0 : _query$slimit.toString()) !== null && _query$slimit$toStrin !== void 0 ? _query$slimit$toStrin : '', scopedVars, 'regex'),
      tz: this.templateSrv.replace((_query$tz = query.tz) !== null && _query$tz !== void 0 ? _query$tz : '', scopedVars)
    });
  }

  async metricFindQuery(query, options) {
    if (this.isFlux || this.isMigrationToggleOnAndIsAccessProxy()) {
      const target = {
        refId: 'metricFindQuery',
        query,
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(super.query(Object.assign({}, options, {
        // includes 'range'
        targets: [target]
      }))).then(rsp => {
        var _rsp$data;

        if ((_rsp$data = rsp.data) !== null && _rsp$data !== void 0 && _rsp$data.length) {
          return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.frameToMetricFindValue)(rsp.data[0]);
        }

        return [];
      });
    }

    const interpolated = this.templateSrv.replace(query, undefined, 'regex');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this._seriesQuery(interpolated, options)).then(resp => {
      return this.responseParser.parse(query, resp);
    });
  }

  getTagKeys(options = {}) {
    const queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_9__.InfluxQueryBuilder({
      measurement: options.measurement || '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('TAG_KEYS');
    return this.metricFindQuery(query, options);
  }

  getTagValues(options = {}) {
    const queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_9__.InfluxQueryBuilder({
      measurement: options.measurement || '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('TAG_VALUES', options.key);
    return this.metricFindQuery(query, options);
  }

  _seriesQuery(query, options) {
    if (!query) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
        results: []
      });
    }

    if (options && options.range) {
      const timeFilter = this.getTimeFilter({
        rangeRaw: options.range,
        timezone: options.timezone
      });
      query = query.replace('$timeFilter', timeFilter);
    }

    return this._influxRequest(this.httpMode, '/query', {
      q: query,
      epoch: 'ms'
    }, options);
  }

  serializeParams(params) {
    if (!params) {
      return '';
    }

    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(params, (memo, value, key) => {
      if (value === null || value === undefined) {
        return memo;
      }

      memo.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      return memo;
    }, []).join('&');
  }

  testDatasource() {
    if (this.isFlux) {
      // TODO: eventually use the real /health endpoint
      const request = {
        targets: [{
          refId: 'test',
          query: 'buckets()'
        }],
        requestId: `${this.id}-health-${(0,uuid__WEBPACK_IMPORTED_MODULE_15__["default"])()}`,
        dashboardId: 0,
        panelId: 0,
        interval: '1m',
        intervalMs: 60000,
        maxDataPoints: 423,
        range: {
          from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTime)(1000),
          to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTime)(2000)
        }
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(super.query(request)).then(res => {
        if (!res || !res.data || res.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done) {
          console.error('InfluxDB Error', res);
          return {
            status: 'error',
            message: 'Error reading InfluxDB'
          };
        }

        const first = res.data[0];

        if (first && first.length) {
          return {
            status: 'success',
            message: `${first.length} buckets found`
          };
        }

        console.error('InfluxDB Error', res);
        return {
          status: 'error',
          message: 'Error reading buckets'
        };
      }).catch(err => {
        console.error('InfluxDB Error', err);
        return {
          status: 'error',
          message: err.message
        };
      });
    }

    if (this.isMigrationToggleOnAndIsAccessProxy()) {
      const target = {
        refId: 'metricFindQuery',
        query: 'SHOW TAG KEYS',
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(super.query({
        targets: [target]
      })).then(res => {
        var _res$data;

        if (!res || !res.data || res.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done) {
          return {
            status: 'error',
            message: 'Error reading InfluxDB.'
          };
        }

        if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.length) {
          return {
            status: 'success',
            message: 'Data source is working.'
          };
        }

        return {
          status: 'error',
          message: 'Successfully connected to InfluxDB, but no tags found.'
        };
      }).catch(err => {
        return {
          status: 'error',
          message: err.message
        };
      });
    }

    const queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_9__.InfluxQueryBuilder({
      measurement: '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('RETENTION POLICIES');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this._seriesQuery(query)).then(res => {
      const error = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(res, 'results[0].error');

      if (error) {
        return {
          status: 'error',
          message: error
        };
      }

      return {
        status: 'success',
        message: 'Data source is working'
      };
    }).catch(err => {
      return {
        status: 'error',
        message: err.message
      };
    });
  }

  _influxRequest(method, url, data, options) {
    const currentUrl = this.urls.shift();
    this.urls.push(currentUrl);
    const params = {};

    if (this.username) {
      params.u = this.username;
      params.p = this.password;
    }

    if (options && options.database) {
      params.db = options.database;
    } else if (this.database) {
      params.db = this.database;
    }

    const {
      q
    } = data;

    if (method === 'POST' && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.has)(data, 'q')) {
      // verb is POST and 'q' param is defined
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(params, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(data, ['q']));
      data = this.serializeParams((0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(data, ['q']));
    } else if (method === 'GET' || method === 'POST') {
      // verb is GET, or POST without 'q' param
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(params, data);
      data = null;
    }

    const req = {
      method: method,
      url: currentUrl + url,
      params: params,
      data: data,
      precision: 'ms',
      inspect: {
        type: 'influxdb'
      },
      paramSerializer: this.serializeParams
    };
    req.headers = req.headers || {};

    if (this.basicAuth || this.withCredentials) {
      req.withCredentials = true;
    }

    if (this.basicAuth) {
      req.headers.Authorization = this.basicAuth;
    }

    if (method === 'POST') {
      req.headers['Content-type'] = 'application/x-www-form-urlencoded';
    }

    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(result => {
      const {
        data
      } = result;

      if (data) {
        data.executedQueryString = q;

        if (data.results) {
          const errors = result.data.results.filter(elem => elem.error);

          if (errors.length > 0) {
            throw {
              message: 'InfluxDB Error: ' + errors[0].error,
              data
            };
          }
        }
      }

      return data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(err => {
      if (err.cancelled) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(err);
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.throwError)(this.handleErrors(err));
    }));
  }

  handleErrors(err) {
    const error = {
      message: err && err.status || err && err.message || 'Unknown error during query transaction. Please check JS console logs.'
    };

    if (Number.isInteger(err.status) && err.status !== 0 || err.status >= 300) {
      if (err.data && err.data.error) {
        error.message = 'InfluxDB Error: ' + err.data.error;
        error.data = err.data; // @ts-ignore

        error.config = err.config;
      } else {
        error.message = 'Network Error: ' + err.statusText + '(' + err.status + ')';
        error.data = err.data; // @ts-ignore

        error.config = err.config;
      }
    }

    return error;
  }

  getTimeFilter(options) {
    const from = this.getInfluxTime(options.rangeRaw.from, false, options.timezone);
    const until = this.getInfluxTime(options.rangeRaw.to, true, options.timezone);
    return 'time >= ' + from + ' and time <= ' + until;
  }

  getInfluxTime(date, roundUp, timezone) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(date)) {
      if (date === 'now') {
        return 'now()';
      }

      const parts = /^now-(\d+)([dhms])$/.exec(date);

      if (parts) {
        const amount = parseInt(parts[1], 10);
        const unit = parts[2];
        return 'now() - ' + amount + unit;
      }

      date = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(date, roundUp, timezone);
    }

    return date.valueOf() + 'ms';
  }

  isMigrationToggleOnAndIsAccessProxy() {
    return app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].featureToggles.influxdbBackendMigration && this.access === 'proxy';
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influxQLMetadataQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllMeasurementsForTags": () => (/* binding */ getAllMeasurementsForTags),
/* harmony export */   "getAllPolicies": () => (/* binding */ getAllPolicies),
/* harmony export */   "getFieldKeysForMeasurement": () => (/* binding */ getFieldKeysForMeasurement),
/* harmony export */   "getTagKeysForMeasurementAndTags": () => (/* binding */ getTagKeysForMeasurementAndTags),
/* harmony export */   "getTagValues": () => (/* binding */ getTagValues)
/* harmony export */ });
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_builder.ts");


const runExploreQuery = (type, withKey, withMeasurementFilter, target, datasource) => {
  const builder = new _query_builder__WEBPACK_IMPORTED_MODULE_0__.InfluxQueryBuilder(target, datasource.database);
  const q = builder.buildExploreQuery(type, withKey, withMeasurementFilter);
  return datasource.metricFindQuery(q);
};

async function getAllPolicies(datasource) {
  const target = {
    tags: [],
    measurement: undefined,
    policy: undefined
  };
  const data = await runExploreQuery('RETENTION POLICIES', undefined, undefined, target, datasource);
  return data.map(item => item.text);
}
async function getAllMeasurementsForTags(measurementFilter, tags, datasource) {
  const target = {
    tags,
    measurement: undefined,
    policy: undefined
  };
  const data = await runExploreQuery('MEASUREMENTS', undefined, measurementFilter, target, datasource);
  return data.map(item => item.text);
}
async function getTagKeysForMeasurementAndTags(measurement, policy, tags, datasource) {
  const target = {
    tags,
    measurement,
    policy
  };
  const data = await runExploreQuery('TAG_KEYS', undefined, undefined, target, datasource);
  return data.map(item => item.text);
}
async function getTagValues(tagKey, measurement, policy, tags, datasource) {
  const target = {
    tags,
    measurement,
    policy
  };
  const data = await runExploreQuery('TAG_VALUES', tagKey, undefined, target, datasource);
  return data.map(item => item.text);
}
async function getFieldKeysForMeasurement(measurement, policy, datasource) {
  const target = {
    tags: [],
    measurement,
    policy
  };
  const data = await runExploreQuery('FIELDS', undefined, undefined, target, datasource);
  return data.map(item => item.text);
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/kbn.ts");
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_part.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class InfluxQueryModel {
  /** @ngInject */
  constructor(target, templateSrv, scopedVars) {
    _defineProperty(this, "target", void 0);

    _defineProperty(this, "selectModels", []);

    _defineProperty(this, "queryBuilder", void 0);

    _defineProperty(this, "groupByParts", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "scopedVars", void 0);

    _defineProperty(this, "refId", void 0);

    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    target.policy = target.policy || 'default';
    target.resultFormat = target.resultFormat || 'time_series';
    target.orderByTime = target.orderByTime || 'ASC';
    target.tags = target.tags || [];
    target.groupBy = target.groupBy || [{
      type: 'time',
      params: ['$__interval']
    }, {
      type: 'fill',
      params: ['null']
    }];
    target.select = target.select || [[{
      type: 'field',
      params: ['value']
    }, {
      type: 'mean',
      params: []
    }]];
    this.updateProjection();
  }

  updateProjection() {
    this.selectModels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, parts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create);
    });
    this.groupByParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.groupBy, _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create);
  }

  updatePersistedParts() {
    this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectModels, selectParts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
        return {
          type: part.def.type,
          params: part.params
        };
      });
    });
  }

  hasGroupByTime() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.groupBy, g => g.type === 'time');
  }

  hasFill() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.groupBy, g => g.type === 'fill');
  }

  addGroupBy(value) {
    let stringParts = value.match(/^(\w+)\((.*)\)$/);

    if (!stringParts || !this.target.groupBy) {
      return;
    }

    const typePart = stringParts[1];
    const arg = stringParts[2];
    const partModel = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create({
      type: typePart,
      params: [arg]
    });
    const partCount = this.target.groupBy.length;

    if (partCount === 0) {
      this.target.groupBy.push(partModel.part);
    } else if (typePart === 'time') {
      this.target.groupBy.splice(0, 0, partModel.part);
    } else if (typePart === 'tag') {
      if (this.target.groupBy[partCount - 1].type === 'fill') {
        this.target.groupBy.splice(partCount - 1, 0, partModel.part);
      } else {
        this.target.groupBy.push(partModel.part);
      }
    } else {
      this.target.groupBy.push(partModel.part);
    }

    this.updateProjection();
  }

  removeGroupByPart(part, index) {
    const categories = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].getCategories();

    if (part.def.type === 'time') {
      // remove fill
      this.target.groupBy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(this.target.groupBy, g => g.type !== 'fill'); // remove aggregations

      this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, s => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(s, part => {
          const partModel = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create(part);

          if (partModel.def.category === categories.Aggregations) {
            return false;
          }

          if (partModel.def.category === categories.Selectors) {
            return false;
          }

          return true;
        });
      });
    }

    this.target.groupBy.splice(index, 1);
    this.updateProjection();
  }

  removeSelect(index) {
    this.target.select.splice(index, 1);
    this.updateProjection();
  }

  removeSelectPart(selectParts, part) {
    // if we remove the field remove the whole statement
    if (part.def.type === 'field') {
      if (this.selectModels.length > 1) {
        const modelsIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.selectModels, selectParts);
        this.selectModels.splice(modelsIndex, 1);
      }
    } else {
      const partIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(selectParts, part);
      selectParts.splice(partIndex, 1);
    }

    this.updatePersistedParts();
  }

  addSelectPart(selectParts, type) {
    const partModel = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create({
      type: type
    });
    partModel.def.addStrategy(selectParts, partModel, this);
    this.updatePersistedParts();
  }

  renderTagCondition(tag, index, interpolate) {
    // FIXME: merge this function with query_builder/renderTagCondition
    let str = '';
    let operator = tag.operator;
    let value = tag.value;

    if (index > 0) {
      str = (tag.condition || 'AND') + ' ';
    }

    if (!operator) {
      if (/^\/.*\/$/.test(value)) {
        operator = '=~';
      } else {
        operator = '=';
      }
    } // quote value unless regex


    if (operator !== '=~' && operator !== '!~') {
      if (interpolate) {
        value = this.templateSrv.replace(value, this.scopedVars);
      }

      if (operator !== '>' && operator !== '<') {
        value = "'" + value.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
      }
    } else if (interpolate) {
      value = this.templateSrv.replace(value, this.scopedVars, 'regex');
    }

    return str + '"' + tag.key + '" ' + operator + ' ' + value;
  }

  getMeasurementAndPolicy(interpolate) {
    let policy = this.target.policy;
    let measurement = this.target.measurement || 'measurement';

    if (!measurement.match('^/.*/$')) {
      measurement = '"' + measurement + '"';
    } else if (interpolate) {
      measurement = this.templateSrv.replace(measurement, this.scopedVars, 'regex');
    }

    if (policy !== 'default') {
      policy = '"' + this.target.policy + '".';
    } else {
      policy = '';
    }

    return policy + measurement;
  }

  interpolateQueryStr(value, variable, defaultFormatFn) {
    // if no multi or include all do not regexEscape
    if (!variable.multi && !variable.includeAll) {
      return value;
    }

    if (typeof value === 'string') {
      return app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__["default"].regexEscape(value);
    }

    const escapedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__["default"].regexEscape);
    return '(' + escapedValues.join('|') + ')';
  }

  render(interpolate) {
    const target = this.target;

    if (target.rawQuery) {
      if (interpolate) {
        return this.templateSrv.replace(target.query, this.scopedVars, this.interpolateQueryStr);
      } else {
        return target.query;
      }
    }

    let query = 'SELECT ';
    let i, y;

    for (i = 0; i < this.selectModels.length; i++) {
      const parts = this.selectModels[i];
      let selectText = '';

      for (y = 0; y < parts.length; y++) {
        const part = parts[y];
        selectText = part.render(selectText);
      }

      if (i > 0) {
        query += ', ';
      }

      query += selectText;
    }

    query += ' FROM ' + this.getMeasurementAndPolicy(interpolate) + ' WHERE ';
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(target.tags, (tag, index) => {
      return this.renderTagCondition(tag, index, interpolate);
    });

    if (conditions.length > 0) {
      query += '(' + conditions.join(' ') + ') AND ';
    }

    query += '$timeFilter';
    let groupBySection = '';

    for (i = 0; i < this.groupByParts.length; i++) {
      const part = this.groupByParts[i];

      if (i > 0) {
        // for some reason fill has no separator
        groupBySection += part.def.type === 'fill' ? ' ' : ', ';
      }

      groupBySection += part.render('');
    }

    if (groupBySection.length) {
      query += ' GROUP BY ' + groupBySection;
    }

    if (target.fill) {
      query += ' fill(' + target.fill + ')';
    }

    if (target.orderByTime === 'DESC') {
      query += ' ORDER BY time DESC';
    }

    if (target.limit) {
      query += ' LIMIT ' + target.limit;
    }

    if (target.slimit) {
      query += ' SLIMIT ' + target.slimit;
    }

    if (target.tz) {
      query += " tz('" + target.tz + "')";
    }

    return query;
  }

  renderAdhocFilters(filters) {
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(filters, (tag, index) => {
      return this.renderTagCondition(tag, index, true);
    });
    return conditions.join(' ');
  }

}
InfluxQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_series.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxSeries)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/table_model.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class InfluxSeries {
  constructor(options) {
    _defineProperty(this, "refId", void 0);

    _defineProperty(this, "series", void 0);

    _defineProperty(this, "alias", void 0);

    _defineProperty(this, "annotation", void 0);

    _defineProperty(this, "meta", void 0);

    this.series = options.series;
    this.alias = options.alias;
    this.annotation = options.annotation;
    this.meta = options.meta;
    this.refId = options.refId;
  }

  getTimeSeries() {
    const output = [];
    let i, j;

    if (this.series.length === 0) {
      return output;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, series => {
      const columns = series.columns.length;
      const tags = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(series.tags, (value, key) => {
        return key + ': ' + value;
      });

      for (j = 1; j < columns; j++) {
        let seriesName = series.name;
        const columnName = series.columns[j];

        if (columnName !== 'value') {
          seriesName = seriesName + '.' + columnName;
        }

        if (this.alias) {
          seriesName = this._getSeriesName(series, j);
        } else if (series.tags) {
          seriesName = seriesName + ' {' + tags.join(', ') + '}';
        }

        const datapoints = [];

        if (series.values) {
          for (i = 0; i < series.values.length; i++) {
            datapoints[i] = [series.values[i][j], series.values[i][0]];
          }
        }

        output.push({
          title: seriesName,
          target: seriesName,
          datapoints: datapoints,
          tags: series.tags,
          meta: this.meta,
          refId: this.refId
        });
      }
    });
    return output;
  }

  _getSeriesName(series, index) {
    const regex = /\$(\w+)|\[\[([\s\S]+?)\]\]/g;
    const segments = series.name.split('.');
    return this.alias.replace(regex, (match, g1, g2) => {
      const group = g1 || g2;
      const segIndex = parseInt(group, 10);

      if (group === 'm' || group === 'measurement') {
        return series.name;
      }

      if (group === 'col') {
        return series.columns[index];
      }

      if (!isNaN(segIndex)) {
        var _segments$segIndex;

        return (_segments$segIndex = segments[segIndex]) !== null && _segments$segIndex !== void 0 ? _segments$segIndex : match;
      }

      if (group.indexOf('tag_') !== 0) {
        return match;
      }

      const tag = group.replace('tag_', '');

      if (!series.tags) {
        return match;
      }

      return series.tags[tag];
    });
  }

  getAnnotations() {
    const list = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, series => {
      let titleCol = null;
      let timeCol = null;
      let timeEndCol = null;
      const tagsCol = [];
      let textCol = null;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(series.columns, (column, index) => {
        if (column === 'time') {
          timeCol = index;
          return;
        }

        if (column === 'sequence_number') {
          return;
        }

        if (column === this.annotation.titleColumn) {
          titleCol = index;
          return;
        }

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)((this.annotation.tagsColumn || '').replace(' ', '').split(','), column)) {
          tagsCol.push(index);
          return;
        }

        if (column === this.annotation.textColumn) {
          textCol = index;
          return;
        }

        if (column === this.annotation.timeEndColumn) {
          timeEndCol = index;
          return;
        } // legacy case


        if (!titleCol && textCol !== index) {
          titleCol = index;
        }
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(series.values, value => {
        const data = {
          annotation: this.annotation,
          time: +new Date(value[timeCol]),
          title: value[titleCol],
          timeEnd: value[timeEndCol],
          // Remove empty values, then split in different tags for comma separated values
          tags: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(tagsCol.filter(t => {
            return value[t];
          }).map(t => {
            return value[t].split(',');
          })),
          text: value[textCol]
        };
        list.push(data);
      });
    });
    return list;
  }

  getTable() {
    const table = new app_core_table_model__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let i, j;
    table.refId = this.refId;
    table.meta = this.meta;

    if (this.series.length === 0) {
      return table;
    } // the order is:
    // - first the first item from the value-array (this is often (always?) the timestamp)
    // - then all the tag-values
    // - then the rest of the value-array
    //
    // we have to keep this order both in table.columns and table.rows


    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, (series, seriesIndex) => {
      if (seriesIndex === 0) {
        const firstCol = series.columns[0]; // Check the first column's name, if it is `time`, we
        // mark it as having the type time

        const firstTableCol = firstCol === 'time' ? {
          text: 'Time',
          type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
        } : {
          text: firstCol
        };
        table.columns.push(firstTableCol);
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.keys)(series.tags), key => {
          table.columns.push({
            text: key
          });
        });

        for (j = 1; j < series.columns.length; j++) {
          table.columns.push({
            text: series.columns[j]
          });
        }
      }

      if (series.values) {
        for (i = 0; i < series.values.length; i++) {
          const values = series.values[i];
          const reordered = [values[0]];

          if (series.tags) {
            for (const key in series.tags) {
              if (series.tags.hasOwnProperty(key)) {
                reordered.push(series.tags[key]);
              }
            }
          }

          for (j = 1; j < values.length; j++) {
            reordered.push(values[j]);
          }

          table.rows.push(reordered);
        }
      }
    });
    return table;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx");
/* harmony import */ var _components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/QueryEditor.tsx");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VariableQueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/datasource.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class InfluxAnnotationsQueryCtrl {}

_defineProperty(InfluxAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_5__["default"]).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__["default"]).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__.QueryEditor).setAnnotationQueryCtrl(InfluxAnnotationsQueryCtrl).setVariableQueryEditor(_components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__["default"]).setQueryEditorHelp(_components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/queryUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewGroupByPart": () => (/* binding */ addNewGroupByPart),
/* harmony export */   "addNewSelectPart": () => (/* binding */ addNewSelectPart),
/* harmony export */   "buildRawQuery": () => (/* binding */ buildRawQuery),
/* harmony export */   "changeGroupByPart": () => (/* binding */ changeGroupByPart),
/* harmony export */   "changeSelectPart": () => (/* binding */ changeSelectPart),
/* harmony export */   "normalizeQuery": () => (/* binding */ normalizeQuery),
/* harmony export */   "removeGroupByPart": () => (/* binding */ removeGroupByPart),
/* harmony export */   "removeSelectPart": () => (/* binding */ removeSelectPart)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");


// FIXME: these functions are a beginning of a refactoring of influx_query_model.ts
// into a simpler approach with full typescript types.
// later we should be able to migrate the unit-tests
// that relate to these functions here, and then perhaps even move the implementation
// to this place
function buildRawQuery(query) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  return model.render(false);
}
function normalizeQuery(query) {
  // we return the original query if there is no need to update it
  if (query.policy !== undefined && query.resultFormat !== undefined && query.orderByTime !== undefined && query.tags !== undefined && query.groupBy !== undefined && query.select !== undefined) {
    return query;
  } // FIXME: we should move the whole normalizeQuery logic here,
  // and then have influxQueryModel call this function,
  // to concentrate the whole logic here


  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  return new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy).target;
}
function addNewSelectPart(query, type, index) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.addSelectPart(model.selectModels[index], type);
  return model.target;
}
function removeSelectPart(query, partIndex, index) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  const selectModel = model.selectModels[index];
  model.removeSelectPart(selectModel, selectModel[partIndex]);
  return model.target;
}
function changeSelectPart(query, listIndex, partIndex, newParams) {
  var _query$select;

  // we need to make shallow copy of `query.select` down to `query.select[listIndex][partIndex]`
  const newSel = [...((_query$select = query.select) !== null && _query$select !== void 0 ? _query$select : [])];
  newSel[listIndex] = [...newSel[listIndex]];
  newSel[listIndex][partIndex] = Object.assign({}, newSel[listIndex][partIndex], {
    params: newParams
  });
  return Object.assign({}, query, {
    select: newSel
  });
}
function addNewGroupByPart(query, type) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.addGroupBy(type);
  return model.target;
}
function removeGroupByPart(query, partIndex) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.removeGroupByPart(model.groupByParts[partIndex], partIndex);
  return model.target;
}
function changeGroupByPart(query, partIndex, newParams) {
  var _query$groupBy;

  // we need to make shallow copy of `query.groupBy` down to `query.groupBy[partIndex]`
  const newGroupBy = [...((_query$groupBy = query.groupBy) !== null && _query$groupBy !== void 0 ? _query$groupBy : [])];
  newGroupBy[partIndex] = Object.assign({}, newGroupBy[partIndex], {
    params: newParams
  });
  return Object.assign({}, query, {
    groupBy: newGroupBy
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_builder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfluxQueryBuilder": () => (/* binding */ InfluxQueryBuilder)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/kbn.ts");



function renderTagCondition(tag, index) {
  // FIXME: merge this function with influx_query_model/renderTagCondition
  let str = '';
  let operator = tag.operator;
  let value = tag.value;

  if (index > 0) {
    str = (tag.condition || 'AND') + ' ';
  }

  if (!operator) {
    if (/^\/.*\/$/.test(tag.value)) {
      operator = '=~';
    } else {
      operator = '=';
    }
  } // quote value unless regex or number, or if empty-string


  if (value === '' || operator !== '=~' && operator !== '!~' && isNaN(+value)) {
    value = "'" + value.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
  }

  return str + '"' + tag.key + '" ' + operator + ' ' + value;
}

class InfluxQueryBuilder {
  constructor(target, database) {
    this.target = target;
    this.database = database;
  }

  buildExploreQuery(type, withKey, withMeasurementFilter) {
    let query = '';
    let measurement;
    let policy;

    if (type === 'TAG_KEYS') {
      query = 'SHOW TAG KEYS';
      measurement = this.target.measurement;
      policy = this.target.policy;
    } else if (type === 'TAG_VALUES') {
      query = 'SHOW TAG VALUES';
      measurement = this.target.measurement;
      policy = this.target.policy;
    } else if (type === 'MEASUREMENTS') {
      query = 'SHOW MEASUREMENTS';

      if (withMeasurementFilter) {
        // we do a case-insensitive regex-based lookup
        query += ' WITH MEASUREMENT =~ /(?i)' + app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__["default"].regexEscape(withMeasurementFilter) + '/';
      }
    } else if (type === 'FIELDS') {
      measurement = this.target.measurement;
      policy = this.target.policy;

      if (!measurement.match('^/.*/')) {
        measurement = '"' + measurement + '"';

        if (policy && policy !== 'default') {
          policy = '"' + policy + '"';
          measurement = policy + '.' + measurement;
        }
      }

      return 'SHOW FIELD KEYS FROM ' + measurement;
    } else if (type === 'RETENTION POLICIES') {
      query = 'SHOW RETENTION POLICIES on "' + this.database + '"';
      return query;
    }

    if (measurement) {
      if (!measurement.match('^/.*/') && !measurement.match(/^merge\(.*\)/)) {
        measurement = '"' + measurement + '"';
      }

      if (policy && policy !== 'default') {
        policy = '"' + policy + '"';
        measurement = policy + '.' + measurement;
      }

      query += ' FROM ' + measurement;
    }

    if (withKey) {
      query += ' WITH KEY = "' + withKey + '"';
    }

    if (this.target.tags && this.target.tags.length > 0) {
      const whereConditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(this.target.tags, (memo, tag) => {
        // do not add a condition for the key we want to explore for
        if (tag.key === withKey) {
          return memo;
        } // value operators not supported in these types of queries


        if (tag.operator === '>' || tag.operator === '<') {
          return memo;
        }

        memo.push(renderTagCondition(tag, memo.length));
        return memo;
      }, []);

      if (whereConditions.length > 0) {
        query += ' WHERE ' + whereConditions.join(' ');
      }
    }

    if (type === 'MEASUREMENTS') {
      query += ' LIMIT 100'; //Solve issue #2524 by limiting the number of measurements returned
      //LIMIT must be after WITH MEASUREMENT and WHERE clauses
      //This also could be used for TAG KEYS and TAG VALUES, if desired
    }

    return query;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/state/query_part.ts");


const index = [];
const categories = {
  Aggregations: [],
  Selectors: [],
  Transformations: [],
  Predictors: [],
  Math: [],
  Aliasing: [],
  Fields: []
};

function createPart(part) {
  const def = index[part.type];

  if (!def) {
    throw {
      message: 'Could not find query part ' + part.type
    };
  }

  return new app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.QueryPart(part, def);
}

function register(options) {
  index[options.type] = new app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.QueryPartDef(options);
  options.category.push(index[options.type]);
}

const groupByTimeFunctions = [];

function aliasRenderer(part, innerExpr) {
  return innerExpr + ' AS ' + '"' + part.params[0] + '"';
}

function fieldRenderer(part, innerExpr) {
  if (part.params[0] === '*') {
    return '*';
  }

  return '"' + part.params[0] + '"';
}

function replaceAggregationAddStrategy(selectParts, partModel) {
  // look for existing aggregation
  for (let i = 0; i < selectParts.length; i++) {
    const part = selectParts[i];

    if (part.def.category === categories.Aggregations) {
      if (part.def.type === partModel.def.type) {
        return;
      } // count distinct is allowed


      if (part.def.type === 'count' && partModel.def.type === 'distinct') {
        break;
      } // remove next aggregation if distinct was replaced


      if (part.def.type === 'distinct') {
        const morePartsAvailable = selectParts.length >= i + 2;

        if (partModel.def.type !== 'count' && morePartsAvailable) {
          const nextPart = selectParts[i + 1];

          if (nextPart.def.category === categories.Aggregations) {
            selectParts.splice(i + 1, 1);
          }
        } else if (partModel.def.type === 'count') {
          if (!morePartsAvailable || selectParts[i + 1].def.type !== 'count') {
            selectParts.splice(i + 1, 0, partModel);
          }

          return;
        }
      }

      selectParts[i] = partModel;
      return;
    }

    if (part.def.category === categories.Selectors) {
      selectParts[i] = partModel;
      return;
    }
  }

  selectParts.splice(1, 0, partModel);
}

function addTransformationStrategy(selectParts, partModel) {
  let i; // look for index to add transformation

  for (i = 0; i < selectParts.length; i++) {
    const part = selectParts[i];

    if (part.def.category === categories.Math || part.def.category === categories.Aliasing) {
      break;
    }
  }

  selectParts.splice(i, 0, partModel);
}

function addMathStrategy(selectParts, partModel) {
  const partCount = selectParts.length;

  if (partCount > 0) {
    // if last is math, replace it
    if (selectParts[partCount - 1].def.type === 'math') {
      selectParts[partCount - 1] = partModel;
      return;
    } // if next to last is math, replace it


    if (partCount > 1 && selectParts[partCount - 2].def.type === 'math') {
      selectParts[partCount - 2] = partModel;
      return;
    } else if (selectParts[partCount - 1].def.type === 'alias') {
      // if last is alias add it before
      selectParts.splice(partCount - 1, 0, partModel);
      return;
    }
  }

  selectParts.push(partModel);
}

function addAliasStrategy(selectParts, partModel) {
  const partCount = selectParts.length;

  if (partCount > 0) {
    // if last is alias, replace it
    if (selectParts[partCount - 1].def.type === 'alias') {
      selectParts[partCount - 1] = partModel;
      return;
    }
  }

  selectParts.push(partModel);
}

function addFieldStrategy(selectParts, partModel, query) {
  // copy all parts
  const parts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
    return createPart({
      type: part.def.type,
      params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(part.params)
    });
  });
  query.selectModels.push(parts);
}

register({
  type: 'field',
  addStrategy: addFieldStrategy,
  category: categories.Fields,
  params: [{
    type: 'field',
    dynamicLookup: true
  }],
  defaultParams: ['value'],
  renderer: fieldRenderer
}); // Aggregations

register({
  type: 'count',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'distinct',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'integral',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'mean',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'median',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'mode',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'sum',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
}); // transformations

register({
  type: 'derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'spread',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'non_negative_derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'non_negative_difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'moving_average',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'window',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }],
  defaultParams: [10],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'cumulative_sum',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'stddev',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'time',
  category: groupByTimeFunctions,
  params: [{
    name: 'interval',
    type: 'time',
    options: ['$__interval', '1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['$__interval'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'fill',
  category: groupByTimeFunctions,
  params: [{
    name: 'fill',
    type: 'string',
    options: ['none', 'null', '0', 'previous', 'linear']
  }],
  defaultParams: ['null'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'elapsed',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
}); // predictions

register({
  type: 'holt_winters',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'holt_winters_with_fit',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
}); // Selectors

register({
  type: 'bottom',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'first',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'last',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'max',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'min',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'percentile',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'nth',
    type: 'int'
  }],
  defaultParams: [95],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'top',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'tag',
  category: groupByTimeFunctions,
  params: [{
    name: 'tag',
    type: 'string',
    dynamicLookup: true
  }],
  defaultParams: ['tag'],
  renderer: fieldRenderer
});
register({
  type: 'math',
  addStrategy: addMathStrategy,
  category: categories.Math,
  params: [{
    name: 'expr',
    type: 'string'
  }],
  defaultParams: [' / 100'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.suffixRenderer
});
register({
  type: 'alias',
  addStrategy: addAliasStrategy,
  category: categories.Aliasing,
  params: [{
    name: 'name',
    type: 'string',
    quote: 'double'
  }],
  defaultParams: ['alias'],
  renderMode: 'suffix',
  renderer: aliasRenderer
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: createPart,
  getCategories: () => {
    return categories;
  },
  replaceAggregationAdd: replaceAggregationAddStrategy
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/response_parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponseParser),
/* harmony export */   "getSelectedParams": () => (/* binding */ getSelectedParams)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/table_model.ts");




class ResponseParser {
  parse(query, results) {
    if (!(results !== null && results !== void 0 && results.results) || results.results.length === 0) {
      return [];
    }

    const influxResults = results.results[0];

    if (!influxResults.series) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();
    const isValueFirst = normalizedQuery.indexOf('show field keys') >= 0 || normalizedQuery.indexOf('show retention policies') >= 0;
    const res = new Set();
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(influxResults.series, serie => {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(serie.values, value => {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
          // In general, there are 2 possible shapes for the returned value.
          // The first one is a two-element array,
          // where the first element is somewhat a metadata value:
          // the tag name for SHOW TAG VALUES queries,
          // the time field for SELECT queries, etc.
          // The second shape is an one-element array,
          // that is containing an immediate value.
          // For example, SHOW FIELD KEYS queries return such shape.
          // Note, pre-0.11 versions return
          // the second shape for SHOW TAG VALUES queries
          // (while the newer versions—first).
          if (isValueFirst) {
            addUnique(res, value[0]);
          } else if (value[1] !== undefined) {
            addUnique(res, value[1]);
          } else {
            addUnique(res, value[0]);
          }
        } else {
          addUnique(res, value);
        }
      });
    }); // NOTE: it is important to keep the order of items in the parsed output
    // the same as it was in the influxdb-response.
    // we use a `Set` to collect the unique-results, and `Set` iteration
    // order is insertion-order, so this should be ok.

    return Array.from(res).map(v => ({
      text: v
    }));
  }

  getTable(dfs, target, meta) {
    let table = new app_core_table_model__WEBPACK_IMPORTED_MODULE_3__["default"]();

    if (dfs.length > 0) {
      var _dfs$0$meta;

      table.meta = Object.assign({}, meta, {
        executedQueryString: (_dfs$0$meta = dfs[0].meta) === null || _dfs$0$meta === void 0 ? void 0 : _dfs$0$meta.executedQueryString
      });
      table.refId = target.refId;
      table = getTableCols(dfs, table, target); // if group by tag(s) added

      if (dfs[0].fields[1] && dfs[0].fields[1].labels) {
        let dfsByLabels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(dfs, df => df.fields[1].labels ? Object.values(df.fields[1].labels) : null);
        const labels = Object.keys(dfsByLabels);
        dfsByLabels = Object.values(dfsByLabels);

        for (let i = 0; i < dfsByLabels.length; i++) {
          table = getTableRows(dfsByLabels[i], table, [...labels[i].split(',')]);
        }
      } else {
        table = getTableRows(dfs, table, []);
      }
    }

    return table;
  }

  async transformAnnotationResponse(options, data, target) {
    const rsp = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.toDataQueryResponse)(data, [target]);

    if (rsp) {
      const table = this.getTable(rsp.data, target, {});
      const list = [];
      let titleCol = null;
      let timeCol = null;
      let timeEndCol = null;
      const tagsCol = [];
      let textCol = null;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(table.columns, (column, index) => {
        if (column.text.toLowerCase() === 'time') {
          timeCol = index;
          return;
        }

        if (column.text === options.annotation.titleColumn) {
          titleCol = index;
          return;
        }

        if (colContainsTag(column.text, options.annotation.tagsColumn)) {
          tagsCol.push(index);
          return;
        }

        if (column.text.includes(options.annotation.textColumn)) {
          textCol = index;
          return;
        }

        if (column.text === options.annotation.timeEndColumn) {
          timeEndCol = index;
          return;
        } // legacy case


        if (!titleCol && textCol !== index) {
          titleCol = index;
        }
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(table.rows, value => {
        const data = {
          annotation: options.annotation,
          time: +new Date(value[timeCol]),
          title: value[titleCol],
          timeEnd: value[timeEndCol],
          // Remove empty values, then split in different tags for comma separated values
          tags: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(tagsCol.filter(t => {
            return value[t];
          }).map(t => {
            return value[t].split(',');
          })),
          text: value[textCol]
        };
        list.push(data);
      });
      return list;
    }

    return [];
  }

}

function colContainsTag(colText, tagsColumn) {
  const tags = (tagsColumn || '').replace(' ', '').split(',');

  for (var tag of tags) {
    if (colText.includes(tag)) {
      return true;
    }
  }

  return false;
}

function getTableCols(dfs, table, target) {
  const selectedParams = getSelectedParams(target);
  dfs[0].fields.forEach(field => {
    // Time col
    if (field.name === 'time') {
      table.columns.push({
        text: 'Time',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
      });
    } // Group by (label) column(s)
    else if (field.name === 'value') {
      if (field.labels) {
        Object.keys(field.labels).forEach(key => {
          table.columns.push({
            text: key
          });
        });
      }
    }
  }); // Get cols for annotationQuery

  if (dfs[0].refId === 'metricFindQuery') {
    dfs.forEach(field => {
      if (field.name) {
        table.columns.push({
          text: field.name
        });
      }
    });
  } // Select (metric) column(s)


  for (let i = 0; i < selectedParams.length; i++) {
    table.columns.push({
      text: selectedParams[i]
    });
  }

  return table;
}

function getTableRows(dfs, table, labels) {
  const values = dfs[0].fields[0].values.toArray();

  for (let i = 0; i < values.length; i++) {
    const time = values[i];
    const metrics = dfs.map(df => {
      return df.fields[1] ? df.fields[1].values.toArray()[i] : null;
    });

    if (metrics.indexOf(null) < 0) {
      table.rows.push([time, ...labels, ...metrics]);
    }
  }

  return table;
}

function getSelectedParams(target) {
  var _target$select;

  let allParams = [];
  (_target$select = target.select) === null || _target$select === void 0 ? void 0 : _target$select.forEach(select => {
    const selector = select.filter(x => x.type !== 'field');

    if (selector.length > 0) {
      allParams.push(selector[0].type);
    } else {
      if (select[0] && select[0].params && select[0].params[0]) {
        allParams.push(select[0].params[0].toString());
      }
    }
  });
  let uniqueParams = [];
  allParams.forEach(param => {
    uniqueParams.push(incrementName(param, param, uniqueParams, 0));
  });
  return uniqueParams;
}

function incrementName(name, nameIncremenet, params, index) {
  if (params.indexOf(nameIncremenet) > -1) {
    index++;
    return incrementName(name, name + '_' + index, params, index);
  }

  return nameIncremenet;
}

function addUnique(s, value) {
  s.add(value.toString());
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfluxVersion": () => (/* binding */ InfluxVersion)
/* harmony export */ });
let InfluxVersion;

(function (InfluxVersion) {
  InfluxVersion["InfluxQL"] = "InfluxQL";
  InfluxVersion["Flux"] = "Flux";
})(InfluxVersion || (InfluxVersion = {}));

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mbHV4ZGJQbHVnaW4uMDgwYWEwMTY1YzE2ZGY3ZjZmNmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQVVBO0FBRUEsTUFBTTtFQUFFZ0IsS0FBRjtFQUFTQztBQUFULElBQTZCSCxvREFBbkM7QUFDQTs7OztBQUVBLE1BQU1LLFNBQVMsR0FBRyxDQUNoQjtFQUFFQyxLQUFLLEVBQUUsS0FBVDtFQUFnQkMsS0FBSyxFQUFFO0FBQXZCLENBRGdCLEVBRWhCO0VBQUVELEtBQUssRUFBRSxNQUFUO0VBQWlCQyxLQUFLLEVBQUU7QUFBeEIsQ0FGZ0IsQ0FBbEI7QUFLQSxNQUFNQyxRQUFRLEdBQUcsQ0FDZjtFQUNFRixLQUFLLEVBQUUsVUFEVDtFQUVFQyxLQUFLLEVBQUVILDBEQUZUO0VBR0VNLFdBQVcsRUFBRTtBQUhmLENBRGUsRUFNZjtFQUNFSixLQUFLLEVBQUUsTUFEVDtFQUVFQyxLQUFLLEVBQUVILHNEQUZUO0VBR0VNLFdBQVcsRUFBRTtBQUhmLENBTmUsQ0FBakI7QUFrQk8sTUFBTUUsWUFBTixTQUEyQnhCLGdEQUEzQixDQUF1RDtFQU81RHlCLFdBQVcsQ0FBQ0MsS0FBRCxFQUFlO0lBQUE7O0lBQ3hCLE1BQU1BLEtBQU47O0lBRHdCLCtCQU5sQjtNQUNOQyxTQUFTLEVBQUU7SUFETCxDQU1rQjs7SUFBQTs7SUFBQSx5Q0FPUixNQUFNO01BQ3RCekIsZ0ZBQWlDLENBQUMsS0FBS3dCLEtBQU4sRUFBYSxVQUFiLENBQWpDO0lBQ0QsQ0FUeUI7O0lBQUEsc0NBWVgsTUFBTTtNQUNuQnhCLGdGQUFpQyxDQUFDLEtBQUt3QixLQUFOLEVBQWEsT0FBYixDQUFqQztJQUNELENBZHlCOztJQUFBLDBDQWdCTkUsUUFBRCxJQUE4QztNQUMvRCxNQUFNO1FBQUVDLE9BQUY7UUFBV0M7TUFBWCxJQUErQixLQUFLSixLQUExQztNQUVBLE1BQU1LLElBQVMscUJBQ1ZGLE9BRFU7UUFFYkcsUUFBUSxvQkFDSEgsT0FB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TUFBVixDQUFpQixDQUFqQixFQUFvQnBPLFFBQXBCLEVBQWY7TUFDRDtJQUNGO0VBQ0YsQ0FURDtFQVdBLElBQUlxb0IsWUFBc0IsR0FBRyxFQUE3QjtFQUNBRixTQUFTLENBQUN4bEIsT0FBVixDQUFtQnlaLEtBQUQsSUFBVztJQUMzQmlNLFlBQVksQ0FBQ3RsQixJQUFiLENBQWtCdWxCLGFBQWEsQ0FBQ2xNLEtBQUQsRUFBUUEsS0FBUixFQUFlaU0sWUFBZixFQUE2QixDQUE3QixDQUEvQjtFQUNELENBRkQ7RUFJQSxPQUFPQSxZQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QnpsQixJQUF2QixFQUFxQzBsQixjQUFyQyxFQUE2RG5hLE1BQTdELEVBQStFdEQsS0FBL0UsRUFBc0c7RUFDcEcsSUFBSXNELE1BQU0sQ0FBQ3FSLE9BQVAsQ0FBZThJLGNBQWYsSUFBaUMsQ0FBQyxDQUF0QyxFQUF5QztJQUN2Q3pkLEtBQUs7SUFDTCxPQUFPd2QsYUFBYSxDQUFDemxCLElBQUQsRUFBT0EsSUFBSSxHQUFHLEdBQVAsR0FBYWlJLEtBQXBCLEVBQTJCc0QsTUFBM0IsRUFBbUN0RCxLQUFuQyxDQUFwQjtFQUNEOztFQUNELE9BQU95ZCxjQUFQO0FBQ0Q7O0FBRUQsU0FBU2xCLFNBQVQsQ0FBbUI1RyxDQUFuQixFQUFtQzloQixLQUFuQyxFQUEyRDtFQUN6RDhoQixDQUFDLENBQUMrSCxHQUFGLENBQU03cEIsS0FBSyxDQUFDcUIsUUFBTixFQUFOO0FBQ0Q7Ozs7Ozs7Ozs7O0FDdlBNLElBQUt4QixhQUFaOztXQUFZQTtFQUFBQTtFQUFBQTtHQUFBQSxrQkFBQUE7Ozs7Ozs7Ozs7OztBQ0Y4QjtBQUMzQjtBQUNmLGNBQWMsNkNBQU07QUFDcEIsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9Db25maWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL0ZsdXhRdWVyeUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvSW5mbHV4Q2hlYXRTaGVldC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvSW5mbHV4U3RhcnRQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9RdWVyeUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvUXVlcnlFZGl0b3JNb2RlU3dpdGNoZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Jhd0luZmx1eFFMRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WYXJpYWJsZVF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9BZGRCdXR0b24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvRm9ybWF0QXNTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9Gcm9tU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvSW5wdXRTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9PcmRlckJ5VGltZVNlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL1BhcnRMaXN0U2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvU2VnLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9UYWdzU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvcGFydExpc3RVdGlscy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3Ivc3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL3RhZ1V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL3RvU2VsZWN0YWJsZVZhbHVlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL3Vud3JhcC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvdXNlU2hhZG93ZWRTdGF0ZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvaW5mbHV4UUxNZXRhZGF0YVF1ZXJ5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9pbmZsdXhfcXVlcnlfbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2luZmx1eF9zZXJpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvcXVlcnlVdGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvcXVlcnlfYnVpbGRlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvcXVlcnlfcGFydC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvcmVzcG9uc2VfcGFyc2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi90eXBlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtY2VhOGU4MjZkYy8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuNC4wLTBlZjQ1MjE1NDQtMDg4OWRhOTE5Yi56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlUHJldmlvdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsXG4gIFNlbGVjdGFibGVWYWx1ZSxcbiAgb25VcGRhdGVEYXRhc291cmNlT3B0aW9uLFxuICB1cGRhdGVEYXRhc291cmNlUGx1Z2luUmVzZXRPcHRpb24sXG4gIG9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uLFxuICBvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvblNlbGVjdCxcbiAgb25VcGRhdGVEYXRhc291cmNlU2VjdXJlSnNvbkRhdGFPcHRpb24sXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgRGF0YVNvdXJjZUh0dHBTZXR0aW5ncywgSW5mb0JveCwgSW5saW5lRmllbGQsIElubGluZUZvcm1MYWJlbCwgTGVnYWN5Rm9ybXMsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuY29uc3QgeyBJbnB1dCwgU2VjcmV0Rm9ybUZpZWxkIH0gPSBMZWdhY3lGb3JtcztcbmltcG9ydCB7IEluZmx1eE9wdGlvbnMsIEluZmx1eFNlY3VyZUpzb25EYXRhLCBJbmZsdXhWZXJzaW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBodHRwTW9kZXMgPSBbXG4gIHsgbGFiZWw6ICdHRVQnLCB2YWx1ZTogJ0dFVCcgfSxcbiAgeyBsYWJlbDogJ1BPU1QnLCB2YWx1ZTogJ1BPU1QnIH0sXG5dIGFzIFNlbGVjdGFibGVWYWx1ZVtdO1xuXG5jb25zdCB2ZXJzaW9ucyA9IFtcbiAge1xuICAgIGxhYmVsOiAnSW5mbHV4UUwnLFxuICAgIHZhbHVlOiBJbmZsdXhWZXJzaW9uLkluZmx1eFFMLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIEluZmx1eERCIFNRTC1saWtlIHF1ZXJ5IGxhbmd1YWdlLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0ZsdXgnLFxuICAgIHZhbHVlOiBJbmZsdXhWZXJzaW9uLkZsdXgsXG4gICAgZGVzY3JpcHRpb246ICdBZHZhbmNlZCBkYXRhIHNjcmlwdGluZyBhbmQgcXVlcnkgbGFuZ3VhZ2UuICBTdXBwb3J0ZWQgaW4gSW5mbHV4REIgMi54IGFuZCAxLjgrJyxcbiAgfSxcbl0gYXMgQXJyYXk8U2VsZWN0YWJsZVZhbHVlPEluZmx1eFZlcnNpb24+PjtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPEluZmx1eE9wdGlvbnM+O1xudHlwZSBTdGF0ZSA9IHtcbiAgbWF4U2VyaWVzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnRWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGUgPSB7XG4gICAgbWF4U2VyaWVzOiAnJyxcbiAgfTtcblxuICBodG1sUHJlZml4OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUubWF4U2VyaWVzID0gcHJvcHMub3B0aW9ucy5qc29uRGF0YS5tYXhTZXJpZXM/LnRvU3RyaW5nKCkgfHwgJyc7XG4gICAgdGhpcy5odG1sUHJlZml4ID0gdW5pcXVlSWQoJ2luZmx1eGRiLWNvbmZpZycpO1xuICB9XG5cbiAgLy8gMXhcbiAgb25SZXNldFBhc3N3b3JkID0gKCkgPT4ge1xuICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5SZXNldE9wdGlvbih0aGlzLnByb3BzLCAncGFzc3dvcmQnKTtcbiAgfTtcblxuICAvLyAyeFxuICBvblJlc2V0VG9rZW4gPSAoKSA9PiB7XG4gICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpblJlc2V0T3B0aW9uKHRoaXMucHJvcHMsICd0b2tlbicpO1xuICB9O1xuXG4gIG9uVmVyc2lvbkNoYW5nZWQgPSAoc2VsZWN0ZWQ6IFNlbGVjdGFibGVWYWx1ZTxJbmZsdXhWZXJzaW9uPikgPT4ge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY29weTogYW55ID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGpzb25EYXRhOiB7XG4gICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEsXG4gICAgICAgIHZlcnNpb246IHNlbGVjdGVkLnZhbHVlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzZWxlY3RlZC52YWx1ZSA9PT0gSW5mbHV4VmVyc2lvbi5GbHV4KSB7XG4gICAgICBjb3B5LmFjY2VzcyA9ICdwcm94eSc7XG4gICAgICBjb3B5LmJhc2ljQXV0aCA9IHRydWU7XG4gICAgICBjb3B5Lmpzb25EYXRhLmh0dHBNb2RlID0gJ1BPU1QnO1xuXG4gICAgICAvLyBSZW1vdmUgb2xkIDF4IGNvbmZpZ3NcbiAgICAgIGRlbGV0ZSBjb3B5LnVzZXI7XG4gICAgICBkZWxldGUgY29weS5kYXRhYmFzZTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbnNDaGFuZ2UoY29weSk7XG4gIH07XG5cbiAgcmVuZGVySW5mbHV4MngoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VjdXJlSnNvbkZpZWxkcyB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBzZWN1cmVKc29uRGF0YSA9IChvcHRpb25zLnNlY3VyZUpzb25EYXRhIHx8IHt9KSBhcyBJbmZsdXhTZWN1cmVKc29uRGF0YTtcbiAgICBjb25zdCB7IGh0bWxQcmVmaXggfSA9IHRoaXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbCBodG1sRm9yPXtgJHtodG1sUHJlZml4fS1vcmdgfSBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiPlxuICAgICAgICAgICAgICBPcmdhbml6YXRpb25cbiAgICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpZD17YCR7aHRtbFByZWZpeH0tb3JnYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0yMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEub3JnYW5pemF0aW9uIHx8ICcnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvbih0aGlzLnByb3BzLCAnb3JnYW5pemF0aW9uJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxTZWNyZXRGb3JtRmllbGRcbiAgICAgICAgICAgICAgaXNDb25maWd1cmVkPXsoc2VjdXJlSnNvbkZpZWxkcyAmJiBzZWN1cmVKc29uRmllbGRzLnRva2VuKSBhcyBib29sZWFufVxuICAgICAgICAgICAgICB2YWx1ZT17c2VjdXJlSnNvbkRhdGEudG9rZW4gfHwgJyd9XG4gICAgICAgICAgICAgIGxhYmVsPVwiVG9rZW5cIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9rZW5cIlxuICAgICAgICAgICAgICBsYWJlbFdpZHRoPXsxMH1cbiAgICAgICAgICAgICAgaW5wdXRXaWR0aD17MjB9XG4gICAgICAgICAgICAgIG9uUmVzZXQ9e3RoaXMub25SZXNldFRva2VufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlU2VjdXJlSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ3Rva2VuJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbCBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiPkRlZmF1bHQgQnVja2V0PC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTEwXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTIwXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRlZmF1bHQgYnVja2V0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS5kZWZhdWx0QnVja2V0IHx8ICcnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvbih0aGlzLnByb3BzLCAnZGVmYXVsdEJ1Y2tldCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMTBcIlxuICAgICAgICAgICAgICB0b29sdGlwPVwiQSBsb3dlciBsaW1pdCBmb3IgdGhlIGF1dG8gZ3JvdXAgYnkgdGltZSBpbnRlcnZhbC4gUmVjb21tZW5kZWQgdG8gYmUgc2V0IHRvIHdyaXRlIGZyZXF1ZW5jeSxcblx0XHRcdFx0Zm9yIGV4YW1wbGUgMW0gaWYgeW91ciBkYXRhIGlzIHdyaXR0ZW4gZXZlcnkgbWludXRlLlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1pbiB0aW1lIGludGVydmFsXG4gICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMTBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTBzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50aW1lSW50ZXJ2YWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uKHRoaXMucHJvcHMsICd0aW1lSW50ZXJ2YWwnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJbmZsdXgxeCgpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWN1cmVKc29uRmllbGRzIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHNlY3VyZUpzb25EYXRhID0gKG9wdGlvbnMuc2VjdXJlSnNvbkRhdGEgfHwge30pIGFzIEluZmx1eFNlY3VyZUpzb25EYXRhO1xuICAgIGNvbnN0IHsgaHRtbFByZWZpeCB9ID0gdGhpcztcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SW5mb0JveD5cbiAgICAgICAgICA8aDU+RGF0YWJhc2UgQWNjZXNzPC9oNT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFNldHRpbmcgdGhlIGRhdGFiYXNlIGZvciB0aGlzIGRhdGFzb3VyY2UgZG9lcyBub3QgZGVueSBhY2Nlc3MgdG8gb3RoZXIgZGF0YWJhc2VzLiBUaGUgSW5mbHV4REIgcXVlcnkgc3ludGF4XG4gICAgICAgICAgICBhbGxvd3Mgc3dpdGNoaW5nIHRoZSBkYXRhYmFzZSBpbiB0aGUgcXVlcnkuIEZvciBleGFtcGxlOlxuICAgICAgICAgICAgPGNvZGU+U0hPVyBNRUFTVVJFTUVOVFMgT04gX2ludGVybmFsPC9jb2RlPiBvclxuICAgICAgICAgICAgPGNvZGU+U0VMRUNUICogRlJPTSAmcXVvdDtfaW50ZXJuYWwmcXVvdDsuLiZxdW90O2RhdGFiYXNlJnF1b3Q7IExJTUlUIDEwPC9jb2RlPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFRvIHN1cHBvcnQgZGF0YSBpc29sYXRpb24gYW5kIHNlY3VyaXR5LCBtYWtlIHN1cmUgYXBwcm9wcmlhdGUgcGVybWlzc2lvbnMgYXJlIGNvbmZpZ3VyZWQgaW4gSW5mbHV4REIuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0luZm9Cb3g+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgaHRtbEZvcj17YCR7aHRtbFByZWZpeH0tZGJgfSBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiPlxuICAgICAgICAgICAgICBEYXRhYmFzZVxuICAgICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTIwXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgJHtodG1sUHJlZml4fS1kYmB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMjBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmRhdGFiYXNlIHx8ICcnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VPcHRpb24odGhpcy5wcm9wcywgJ2RhdGFiYXNlJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgaHRtbEZvcj17YCR7aHRtbFByZWZpeH0tdXNlcmB9IGNsYXNzTmFtZT1cIndpZHRoLTEwXCI+XG4gICAgICAgICAgICAgIFVzZXJcbiAgICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpZD17YCR7aHRtbFByZWZpeH0tdXNlcmB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMjBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLnVzZXIgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZU9wdGlvbih0aGlzLnByb3BzLCAndXNlcicpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8U2VjcmV0Rm9ybUZpZWxkXG4gICAgICAgICAgICAgIGlzQ29uZmlndXJlZD17KHNlY3VyZUpzb25GaWVsZHMgJiYgc2VjdXJlSnNvbkZpZWxkcy5wYXNzd29yZCkgYXMgYm9vbGVhbn1cbiAgICAgICAgICAgICAgdmFsdWU9e3NlY3VyZUpzb25EYXRhLnBhc3N3b3JkIHx8ICcnfVxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWxXaWR0aD17MTB9XG4gICAgICAgICAgICAgIGlucHV0V2lkdGg9ezIwfVxuICAgICAgICAgICAgICBvblJlc2V0PXt0aGlzLm9uUmVzZXRQYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZVNlY3VyZUpzb25EYXRhT3B0aW9uKHRoaXMucHJvcHMsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj17YCR7aHRtbFByZWZpeH0taHR0cC1tZXRob2RgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiXG4gICAgICAgICAgICAgIHRvb2x0aXA9XCJZb3UgY2FuIHVzZSBlaXRoZXIgR0VUIG9yIFBPU1QgSFRUUCBtZXRob2QgdG8gcXVlcnkgeW91ciBJbmZsdXhEQiBkYXRhYmFzZS4gVGhlIFBPU1RcbiAgICAgICAgICBtZXRob2QgYWxsb3dzIHlvdSB0byBwZXJmb3JtIGhlYXZ5IHJlcXVlc3RzICh3aXRoIGEgbG90cyBvZiBXSEVSRSBjbGF1c2UpIHdoaWxlIHRoZSBHRVQgbWV0aG9kXG4gICAgICAgICAgd2lsbCByZXN0cmljdCB5b3UgYW5kIHJldHVybiBhbiBlcnJvciBpZiB0aGUgcXVlcnkgaXMgdG9vIGxhcmdlLlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhUVFAgTWV0aG9kXG4gICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgaW5wdXRJZD17YCR7aHRtbFByZWZpeH0taHR0cC1tZXRob2RgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtodHRwTW9kZXMuZmluZCgoaHR0cE1vZGUpID0+IGh0dHBNb2RlLnZhbHVlID09PSBvcHRpb25zLmpzb25EYXRhLmh0dHBNb2RlKX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17aHR0cE1vZGVzfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnMuanNvbkRhdGEuaHR0cE1vZGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvblNlbGVjdCh0aGlzLnByb3BzLCAnaHR0cE1vZGUnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMTBcIlxuICAgICAgICAgICAgICB0b29sdGlwPVwiQSBsb3dlciBsaW1pdCBmb3IgdGhlIGF1dG8gZ3JvdXAgYnkgdGltZSBpbnRlcnZhbC4gUmVjb21tZW5kZWQgdG8gYmUgc2V0IHRvIHdyaXRlIGZyZXF1ZW5jeSxcblx0XHRcdFx0Zm9yIGV4YW1wbGUgMW0gaWYgeW91ciBkYXRhIGlzIHdyaXR0ZW4gZXZlcnkgbWludXRlLlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1pbiB0aW1lIGludGVydmFsXG4gICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMTBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTBzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50aW1lSW50ZXJ2YWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uKHRoaXMucHJvcHMsICd0aW1lSW50ZXJ2YWwnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPlF1ZXJ5IExhbmd1YWdlPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUXVlcnkgbGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTMwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS52ZXJzaW9uID09PSBJbmZsdXhWZXJzaW9uLkZsdXggPyB2ZXJzaW9uc1sxXSA6IHZlcnNpb25zWzBdfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3ZlcnNpb25zfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dmVyc2lvbnNbMF19XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25WZXJzaW9uQ2hhbmdlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7b3B0aW9ucy5qc29uRGF0YS52ZXJzaW9uID09PSBJbmZsdXhWZXJzaW9uLkZsdXggJiYgKFxuICAgICAgICAgIDxJbmZvQm94PlxuICAgICAgICAgICAgPGg1PlN1cHBvcnQgZm9yIEZsdXggaW4gR3JhZmFuYSBpcyBjdXJyZW50bHkgaW4gYmV0YTwvaDU+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgUGxlYXNlIHJlcG9ydCBhbnkgaXNzdWVzIHRvOiA8YnIgLz5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ncmFmYW5hL2dyYWZhbmEvaXNzdWVzL25ldy9jaG9vc2VcIj5cbiAgICAgICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9ncmFmYW5hL2lzc3Vlc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9JbmZvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHtvcHRpb25zLmFjY2VzcyA9PT0gJ2RpcmVjdCcgJiYgKFxuICAgICAgICAgIDxBbGVydCB0aXRsZT1cIkRlcHJlY2F0aW9uIE5vdGljZVwiIHNldmVyaXR5PVwid2FybmluZ1wiPlxuICAgICAgICAgICAgQnJvd3NlciBhY2Nlc3MgbW9kZSBpbiB0aGUgSW5mbHV4REIgZGF0YXNvdXJjZSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZS5cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApfVxuXG4gICAgICAgIDxEYXRhU291cmNlSHR0cFNldHRpbmdzXG4gICAgICAgICAgc2hvd0FjY2Vzc09wdGlvbnM9e3RydWV9XG4gICAgICAgICAgZGF0YVNvdXJjZUNvbmZpZz17b3B0aW9uc31cbiAgICAgICAgICBkZWZhdWx0VXJsPVwiaHR0cDovL2xvY2FsaG9zdDo4MDg2XCJcbiAgICAgICAgICBvbkNoYW5nZT17b25PcHRpb25zQ2hhbmdlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+SW5mbHV4REIgRGV0YWlsczwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge29wdGlvbnMuanNvbkRhdGEudmVyc2lvbiA9PT0gSW5mbHV4VmVyc2lvbi5GbHV4ID8gdGhpcy5yZW5kZXJJbmZsdXgyeCgpIDogdGhpcy5yZW5kZXJJbmZsdXgxeCgpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgICBsYWJlbFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgbGFiZWw9XCJNYXggc2VyaWVzXCJcbiAgICAgICAgICAgICAgdG9vbHRpcD1cIkxpbWl0IHRoZSBudW1iZXIgb2Ygc2VyaWVzL3RhYmxlcyB0aGF0IEdyYWZhbmEgd2lsbCBwcm9jZXNzLiBMb3dlciB0aGlzIG51bWJlciB0byBwcmV2ZW50IGFidXNlLCBhbmQgaW5jcmVhc2UgaXQgaWYgeW91IGhhdmUgbG90cyBvZiBzbWFsbCB0aW1lIHNlcmllcyBhbmQgbm90IGFsbCBhcmUgc2hvd24uIERlZmF1bHRzIHRvIDEwMDAuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMDAwXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWF4U2VyaWVzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIFdlIGR1cGxpY2F0ZSB0aGlzIHN0YXRlIHNvIHRoYXQgd2UgYWxsb3cgdG8gd3JpdGUgZnJlZWx5IGluc2lkZSB0aGUgaW5wdXQuIFdlIGRvbid0IGhhdmVcbiAgICAgICAgICAgICAgICAgIC8vIGFueSBpbmZsdWVuY2Ugb3ZlciBzYXZpbmcgc28gdGhpcyBzZWVtcyB0byBiZSBvbmx5IHdheSB0byBkbyB0aGlzLlxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1heFNlcmllczogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcnNlSW50KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih0aGlzLnByb3BzLCAnbWF4U2VyaWVzJywgTnVtYmVyLmlzRmluaXRlKHZhbCkgPyB2YWwgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnRWRpdG9yO1xuIiwiaW1wb3J0IHsgY3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHtcbiAgSW5saW5lRm9ybUxhYmVsLFxuICBMaW5rQnV0dG9uLFxuICBTZWdtZW50LFxuICBDb2RlRWRpdG9yLFxuICBNb25hY29FZGl0b3IsXG4gIENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbSxcbiAgQ29kZUVkaXRvclN1Z2dlc3Rpb25JdGVtS2luZCxcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgSW5mbHV4RGF0YXNvdXJjZSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IEluZmx1eFF1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBJbmZsdXhRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyeTogKCkgPT4gdm9pZDtcbiAgcXVlcnk6IEluZmx1eFF1ZXJ5O1xuICAvLyBgZGF0YXNvdXJjZWAgaXMgbm90IHVzZWQgaW50ZXJuYWxseSwgYnV0IHRoaXMgY29tcG9uZW50IGlzIHVzZWQgYXQgc29tZSBwbGFjZXNcbiAgLy8gZGlyZWN0bHksIHdoZXJlIHRoZSBgZGF0YXNvdXJjZWAgcHJvcCBoYXMgdG8gZXhpc3QuIGxhdGVyLCB3aGVuIHRoZSB3aG9sZVxuICAvLyBxdWVyeS1lZGl0b3IgZ2V0cyBjb252ZXJ0ZWQgdG8gcmVhY3Qgd2UgY2FuIHN0b3AgdXNpbmcgdGhpcyBjb21wb25lbnQgZGlyZWN0bHlcbiAgLy8gYW5kIHRoZW4gd2UgY2FuIHByb2JhYmx5IHJlbW92ZSB0aGUgZGF0YXNvdXJjZSBhdHRyaWJ1dGUuXG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2U7XG59O1xuXG5jb25zdCBzYW1wbGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBbXG4gIHsgbGFiZWw6ICdTaG93IGJ1Y2tldHMnLCBkZXNjcmlwdGlvbjogJ0xpc3QgdGhlIGF2YWlsYWJsZSBidWNrZXRzICh0YWJsZSknLCB2YWx1ZTogJ2J1Y2tldHMoKScgfSxcbiAge1xuICAgIGxhYmVsOiAnU2ltcGxlIHF1ZXJ5JyxcbiAgICBkZXNjcmlwdGlvbjogJ2ZpbHRlciBieSBtZWFzdXJlbWVudCBhbmQgZmllbGQnLFxuICAgIHZhbHVlOiBgZnJvbShidWNrZXQ6IFwiZGIvcnBcIilcbiAgfD4gcmFuZ2Uoc3RhcnQ6IHYudGltZVJhbmdlU3RhcnQsIHN0b3A6di50aW1lUmFuZ2VTdG9wKVxuICB8PiBmaWx0ZXIoZm46IChyKSA9PlxuICAgIHIuX21lYXN1cmVtZW50ID09IFwiZXhhbXBsZS1tZWFzdXJlbWVudFwiIGFuZFxuICAgIHIuX2ZpZWxkID09IFwiZXhhbXBsZS1maWVsZFwiXG4gIClgLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdHcm91cGVkIFF1ZXJ5JyxcbiAgICBkZXNjcmlwdGlvbjogJ0dyb3VwIGJ5IChtaW4vbWF4L3N1bS9tZWRpYW4pJyxcbiAgICB2YWx1ZTogYC8vIHYud2luZG93UGVyaW9kIGlzIGEgdmFyaWFibGUgcmVmZXJyaW5nIHRvIHRoZSBjdXJyZW50IG9wdGltaXplZCB3aW5kb3cgcGVyaW9kIChjdXJyZW50bHk6ICRpbnRlcnZhbClcbmZyb20oYnVja2V0OiB2LmJ1Y2tldClcbiAgfD4gcmFuZ2Uoc3RhcnQ6IHYudGltZVJhbmdlU3RhcnQsIHN0b3A6IHYudGltZVJhbmdlU3RvcClcbiAgfD4gZmlsdGVyKGZuOiAocikgPT4gcltcIl9tZWFzdXJlbWVudFwiXSA9PSBcIm1lYXN1cmVtZW50MVwiIG9yIHJbXCJfbWVhc3VyZW1lbnRcIl0gPX4gL14uKj9yZWdleC4qJC8pXG4gIHw+IGZpbHRlcihmbjogKHIpID0+IHJbXCJfZmllbGRcIl0gPT0gXCJmaWVsZDJcIiBvciByW1wiX2ZpZWxkXCJdID1+IC9eLio/cmVnZXguKiQvKVxuICB8PiBhZ2dyZWdhdGVXaW5kb3coZXZlcnk6IHYud2luZG93UGVyaW9kLCBmbjogbWVhbnxtZWRpYW58bWF4fGNvdW50fGRlcml2YXRpdmV8c3VtKVxuICB8PiB5aWVsZChuYW1lOiBcInNvbWUtbmFtZVwiKWAsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0ZpbHRlciBieSB2YWx1ZScsXG4gICAgZGVzY3JpcHRpb246ICdSZXN1bHRzIGJldHdlZW4gYSBtaW4vbWF4JyxcbiAgICB2YWx1ZTogYC8vIHYuYnVja2V0LCB2LnRpbWVSYW5nZVN0YXJ0LCBhbmQgdi50aW1lUmFuZ2Ugc3RvcCBhcmUgYWxsIHZhcmlhYmxlcyBzdXBwb3J0ZWQgYnkgdGhlIGZsdXggcGx1Z2luIGFuZCBpbmZsdXhkYlxuZnJvbShidWNrZXQ6IHYuYnVja2V0KVxuICB8PiByYW5nZShzdGFydDogdi50aW1lUmFuZ2VTdGFydCwgc3RvcDogdi50aW1lUmFuZ2VTdG9wKVxuICB8PiBmaWx0ZXIoZm46IChyKSA9PiByW1wiX3ZhbHVlXCJdID49IDEwIGFuZCByW1wiX3ZhbHVlXCJdIDw9IDIwKWAsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1NjaGVtYSBFeHBsb3JhdGlvbjogKG1lYXN1cmVtZW50cyknLFxuICAgIGRlc2NyaXB0aW9uOiAnR2V0IGEgbGlzdCBvZiBtZWFzdXJlbWVudCB1c2luZyBmbHV4JyxcbiAgICB2YWx1ZTogYGltcG9ydCBcImluZmx1eGRhdGEvaW5mbHV4ZGIvdjFcIlxudjEubWVhc3VyZW1lbnRzKGJ1Y2tldDogdi5idWNrZXQpYCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnU2NoZW1hIEV4cGxvcmF0aW9uOiAoZmllbGRzKScsXG4gICAgZGVzY3JpcHRpb246ICdSZXR1cm4gZXZlcnkgcG9zc2libGUga2V5IGluIGEgc2luZ2xlIHRhYmxlJyxcbiAgICB2YWx1ZTogYGZyb20oYnVja2V0OiB2LmJ1Y2tldClcbiAgfD4gcmFuZ2Uoc3RhcnQ6IHYudGltZVJhbmdlU3RhcnQsIHN0b3A6di50aW1lUmFuZ2VTdG9wKVxuICB8PiBrZXlzKClcbiAgfD4ga2VlcChjb2x1bW5zOiBbXCJfdmFsdWVcIl0pXG4gIHw+IGdyb3VwKClcbiAgfD4gZGlzdGluY3QoKWAsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1NjaGVtYSBFeHBsb3JhdGlvbjogKHRhZyBrZXlzKScsXG4gICAgZGVzY3JpcHRpb246ICdHZXQgYSBsaXN0IG9mIHRhZyBrZXlzIHVzaW5nIGZsdXgnLFxuICAgIHZhbHVlOiBgaW1wb3J0IFwiaW5mbHV4ZGF0YS9pbmZsdXhkYi92MVwiXG52MS50YWdLZXlzKGJ1Y2tldDogdi5idWNrZXQpYCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnU2NoZW1hIEV4cGxvcmF0aW9uOiAodGFnIHZhbHVlcyknLFxuICAgIGRlc2NyaXB0aW9uOiAnR2V0IGEgbGlzdCBvZiB0YWcgdmFsdWVzIHVzaW5nIGZsdXgnLFxuICAgIHZhbHVlOiBgaW1wb3J0IFwiaW5mbHV4ZGF0YS9pbmZsdXhkYi92MVwiXG52MS50YWdWYWx1ZXMoXG4gICAgYnVja2V0OiB2LmJ1Y2tldCxcbiAgICB0YWc6IFwiaG9zdFwiLFxuICAgIHByZWRpY2F0ZTogKHIpID0+IHRydWUsXG4gICAgc3RhcnQ6IC0xZFxuKWAsXG4gIH0sXG5dO1xuXG5leHBvcnQgY2xhc3MgRmx1eFF1ZXJ5RWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBvbkZsdXhRdWVyeUNoYW5nZSA9IChxdWVyeTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IC4uLnRoaXMucHJvcHMucXVlcnksIHF1ZXJ5IH0pO1xuICAgIHRoaXMucHJvcHMub25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIG9uU2FtcGxlQ2hhbmdlID0gKHZhbDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIC4uLnRoaXMucHJvcHMucXVlcnksXG4gICAgICBxdWVyeTogdmFsLnZhbHVlISxcbiAgICB9KTtcblxuICAgIC8vIEFuZ3VsYXIgSEFDSzogU2luY2UgdGhlIHRhcmdldCBkb2VzIG5vdCBhY3R1YWxseSBjaGFuZ2UhXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIHRoaXMucHJvcHMub25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIGdldFN1Z2dlc3Rpb25zID0gKCk6IENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbVtdID0+IHtcbiAgICBjb25zdCBzdWdzOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1bXSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd2LnRpbWVSYW5nZVN0YXJ0JyxcbiAgICAgICAga2luZDogQ29kZUVkaXRvclN1Z2dlc3Rpb25JdGVtS2luZC5Qcm9wZXJ0eSxcbiAgICAgICAgZGV0YWlsOiAnVGhlIHN0YXJ0IHRpbWUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd2LnRpbWVSYW5nZVN0b3AnLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICBkZXRhaWw6ICdUaGUgc3RvcCB0aW1lJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAndi53aW5kb3dQZXJpb2QnLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICBkZXRhaWw6ICdiYXNlZCBvbiBtYXggZGF0YSBwb2ludHMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd2LmRlZmF1bHRCdWNrZXQnLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICBkZXRhaWw6ICdidWNrZXQgY29uZmlndXJlZCBpbiB0aGUgZGF0c291cmNlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAndi5vcmdhbml6YXRpb24nLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICBkZXRhaWw6ICdvcmcgY29uZmlndXJlZCBmb3IgdGhlIGRhdHNvdXJjZScsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCB0ZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCk7XG4gICAgdGVtcGxhdGVTcnYuZ2V0VmFyaWFibGVzKCkuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gJyR7JyArIHZhcmlhYmxlLm5hbWUgKyAnfSc7XG4gICAgICBsZXQgdmFsID0gdGVtcGxhdGVTcnYucmVwbGFjZShsYWJlbCk7XG4gICAgICBpZiAodmFsID09PSBsYWJlbCkge1xuICAgICAgICB2YWwgPSAnJztcbiAgICAgIH1cbiAgICAgIHN1Z3MucHVzaCh7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlRleHQsXG4gICAgICAgIGRldGFpbDogYChUZW1wbGF0ZSBWYXJpYWJsZSkgJHt2YWx9YCxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1Z3M7XG4gIH07XG5cbiAgLy8gRm9yIHNvbWUgcmVhc29uIGluIGFuZ3VsYXIsIHdoZW4gdGhpcyBjb21wb25lbnQgZ2V0cyByZS1tb3VudGVkLCB0aGUgd2lkdGhcbiAgLy8gaXMgbm90IHNldCBwcm9wZXJseS4gIFRoaXMgZm9yY2VzIHRoZSBsYXlvdXQgc2hvcnRseSBhZnRlciBtb3VudCBzbyB0aGF0IGl0XG4gIC8vIGRpc3BsYXlzIE9LLiAgTm90ZTogdGhpcyBpcyBub3QgYW4gaXNzdWUgd2hlbiB1c2VkIGRpcmVjdGx5IGluIHJlYWN0XG4gIGVkaXRvckRpZE1vdW50Q2FsbGJhY2tIYWNrID0gKGVkaXRvcjogTW9uYWNvRWRpdG9yKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBlZGl0b3IubGF5b3V0KCksIDEwMCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBoZWxwVG9vbHRpcCA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIFR5cGU6IDxpPmN0cmwrc3BhY2U8L2k+IHRvIHNob3cgdGVtcGxhdGUgdmFyaWFibGUgc3VnZ2VzdGlvbnMgPGJyIC8+XG4gICAgICAgIE1hbnkgcXVlcmllcyBjYW4gYmUgY29waWVkIGZyb20gQ2hyb25vZ3JhZlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgIGhlaWdodD17JzIwMHB4J31cbiAgICAgICAgICBsYW5ndWFnZT1cInNxbFwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5LnF1ZXJ5IHx8ICcnfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkZsdXhRdWVyeUNoYW5nZX1cbiAgICAgICAgICBvblNhdmU9e3RoaXMub25GbHV4UXVlcnlDaGFuZ2V9XG4gICAgICAgICAgc2hvd01pbmlNYXA9e2ZhbHNlfVxuICAgICAgICAgIHNob3dMaW5lTnVtYmVycz17dHJ1ZX1cbiAgICAgICAgICBnZXRTdWdnZXN0aW9ucz17dGhpcy5nZXRTdWdnZXN0aW9uc31cbiAgICAgICAgICBvbkVkaXRvckRpZE1vdW50PXt0aGlzLmVkaXRvckRpZE1vdW50Q2FsbGJhY2tIYWNrfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICdnZi1mb3JtLWlubGluZScsXG4gICAgICAgICAgICBjc3NgXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgIGljb249XCJleHRlcm5hbC1saW5rLWFsdFwiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHRhcmdldD1cImJsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuaW5mbHV4ZGF0YS5jb20vaW5mbHV4ZGIvbGF0ZXN0L3F1ZXJ5LWRhdGEvZ2V0LXN0YXJ0ZWQvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBGbHV4IGxhbmd1YWdlIHN5bnRheFxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8U2VnbWVudCBvcHRpb25zPXtzYW1wbGVzfSB2YWx1ZT1cIlNhbXBsZSBRdWVyeVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2FtcGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgZ2YtZm9ybS1sYWJlbC0tZ3Jvd1wiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgd2lkdGg9ezV9IHRvb2x0aXA9e2hlbHBUb29sdGlwfT5cbiAgICAgICAgICAgIEhlbHBcbiAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDSEVBVF9TSEVFVF9JVEVNUyA9IFtcbiAge1xuICAgIHRpdGxlOiAnR2V0dGluZyBzdGFydGVkJyxcbiAgICBsYWJlbDpcbiAgICAgICdTdGFydCBieSBzZWxlY3RpbmcgYSBtZWFzdXJlbWVudCBhbmQgZmllbGQgZnJvbSB0aGUgZHJvcGRvd24gYWJvdmUuIFlvdSBjYW4gdGhlbiB1c2UgdGhlIHRhZyBzZWxlY3RvciB0byBmdXJ0aGVyIG5hcnJvdyB5b3VyIHNlYXJjaC4nLFxuICB9LFxuXTtcblxuY29uc3QgSW5mbHV4Q2hlYXRTaGVldCA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgyPkluZmx1eERCIENoZWF0IFNoZWV0PC9oMj5cbiAgICB7Q0hFQVRfU0hFRVRfSVRFTVMubWFwKChpdGVtKSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWF0LXNoZWV0LWl0ZW1cIiBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWF0LXNoZWV0LWl0ZW1fX3RpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlYXQtc2hlZXQtaXRlbV9fbGFiZWxcIj57aXRlbS5sYWJlbH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZmx1eENoZWF0U2hlZXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JIZWxwUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IEluZmx1eENoZWF0U2hlZXQgZnJvbSAnLi9JbmZsdXhDaGVhdFNoZWV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbHV4U3RhcnRQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxRdWVyeUVkaXRvckhlbHBQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxJbmZsdXhDaGVhdFNoZWV0IG9uQ2xpY2tFeGFtcGxlPXt0aGlzLnByb3BzLm9uQ2xpY2tFeGFtcGxlfSAvPjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IEluZmx1eERhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBidWlsZFJhd1F1ZXJ5IH0gZnJvbSAnLi4vcXVlcnlVdGlscyc7XG5pbXBvcnQgeyBJbmZsdXhPcHRpb25zLCBJbmZsdXhRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgRmx1eFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9GbHV4UXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3JNb2RlU3dpdGNoZXIgfSBmcm9tICcuL1F1ZXJ5RWRpdG9yTW9kZVN3aXRjaGVyJztcbmltcG9ydCB7IFJhd0luZmx1eFFMRWRpdG9yIH0gZnJvbSAnLi9SYXdJbmZsdXhRTEVkaXRvcic7XG5pbXBvcnQgeyBFZGl0b3IgYXMgVmlzdWFsSW5mbHV4UUxFZGl0b3IgfSBmcm9tICcuL1Zpc3VhbEluZmx1eFFMRWRpdG9yL0VkaXRvcic7XG5cbnR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPEluZmx1eERhdGFzb3VyY2UsIEluZmx1eFF1ZXJ5LCBJbmZsdXhPcHRpb25zPjtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RWRpdG9yID0gKHsgcXVlcnksIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5LCBkYXRhc291cmNlLCByYW5nZSwgZGF0YSB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgaWYgKGRhdGFzb3VyY2UuaXNGbHV4KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1xdWVyeS1jb250ZW50XCI+XG4gICAgICAgIDxGbHV4UXVlcnlFZGl0b3IgcXVlcnk9e3F1ZXJ5fSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uUnVuUXVlcnk9e29uUnVuUXVlcnl9IGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgZGlzcGxheTogJ2ZsZXgnIH0pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyBmbGV4R3JvdzogMSB9KX0+XG4gICAgICAgIHtxdWVyeS5yYXdRdWVyeSA/IChcbiAgICAgICAgICA8UmF3SW5mbHV4UUxFZGl0b3IgcXVlcnk9e3F1ZXJ5fSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uUnVuUXVlcnk9e29uUnVuUXVlcnl9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFZpc3VhbEluZmx1eFFMRWRpdG9yIHF1ZXJ5PXtxdWVyeX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fSBkYXRhc291cmNlPXtkYXRhc291cmNlfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8UXVlcnlFZGl0b3JNb2RlU3dpdGNoZXJcbiAgICAgICAgaXNSYXc9e3F1ZXJ5LnJhd1F1ZXJ5ID8/IGZhbHNlfVxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcXVlcnk6IGJ1aWxkUmF3UXVlcnkocXVlcnkpLCByYXdRdWVyeTogdmFsdWUgfSk7XG4gICAgICAgICAgb25SdW5RdWVyeSgpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlzUmF3OiBib29sZWFuO1xuICBvbkNoYW5nZTogKG5ld0lzUmF3OiBib29sZWFuKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RWRpdG9yTW9kZVN3aXRjaGVyID0gKHsgaXNSYXcsIG9uQ2hhbmdlIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpZiB0aGUgaXNSYXcgY2hhbmdlcywgd2UgaGlkZSB0aGUgbW9kYWxcbiAgICBzZXRNb2RhbE9wZW4oZmFsc2UpO1xuICB9LCBbaXNSYXddKTtcblxuICBpZiAoaXNSYXcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTd2l0Y2ggdG8gdmlzdWFsIGVkaXRvclwiXG4gICAgICAgICAgaWNvbj1cInBlblwiXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgLy8gd2Ugc2hvdyB0aGUgYXJlLXlvdS1zdXJlIG1vZGFsXG4gICAgICAgICAgICBzZXRNb2RhbE9wZW4odHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvQnV0dG9uPlxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgaXNPcGVuPXtpc01vZGFsT3Blbn1cbiAgICAgICAgICB0aXRsZT1cIlN3aXRjaCB0byB2aXN1YWwgZWRpdG9yIG1vZGVcIlxuICAgICAgICAgIGJvZHk9XCJBcmUgeW91IHN1cmUgdG8gc3dpdGNoIHRvIHZpc3VhbCBlZGl0b3IgbW9kZT8gWW91IHdpbGwgbG9zZSB0aGUgY2hhbmdlcyBkb25lIGluIHJhdyBxdWVyeSBtb2RlLlwiXG4gICAgICAgICAgY29uZmlybVRleHQ9XCJZZXMsIHN3aXRjaCB0byBlZGl0b3IgbW9kZVwiXG4gICAgICAgICAgZGlzbWlzc1RleHQ9XCJObywgc3RheSBpbiByYXcgcXVlcnkgbW9kZVwiXG4gICAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZShmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHtcbiAgICAgICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIlN3aXRjaCB0byB0ZXh0IGVkaXRvclwiXG4gICAgICAgIGljb249XCJwZW5cIlxuICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID48L0J1dHRvbj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVGV4dEFyZWEsIElubGluZUZvcm1MYWJlbCwgSW5wdXQsIFNlbGVjdCwgSG9yaXpvbnRhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBJbmZsdXhRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgUkVTVUxUX0ZPUk1BVFMsIERFRkFVTFRfUkVTVUxUX0ZPUk1BVCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZVNoYWRvd2VkU3RhdGUgfSBmcm9tICcuL3VzZVNoYWRvd2VkU3RhdGUnO1xuaW1wb3J0IHsgdXNlVW5pcXVlSWQgfSBmcm9tICcuL3VzZVVuaXF1ZUlkJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcXVlcnk6IEluZmx1eFF1ZXJ5O1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBJbmZsdXhRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyeTogKCkgPT4gdm9pZDtcbn07XG5cbi8vIHdlIGhhbmRsZSAzIGZpZWxkczogXCJxdWVyeVwiLCBcImFsaWFzXCIsIFwicmVzdWx0Rm9ybWF0XCJcbi8vIFwicmVzdWx0Rm9ybWF0XCIgY2hhbmdlcyBhcmUgYXBwbGllZCBpbW1lZGlhdGVseVxuLy8gXCJxdWVyeVwiIGFuZCBcImFsaWFzXCIgY2hhbmdlcyBvbmx5IGhhcHBlbiBvbiBvbmJsdXJcbmV4cG9ydCBjb25zdCBSYXdJbmZsdXhRTEVkaXRvciA9ICh7IHF1ZXJ5LCBvbkNoYW5nZSwgb25SdW5RdWVyeSB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW2N1cnJlbnRRdWVyeSwgc2V0Q3VycmVudFF1ZXJ5XSA9IHVzZVNoYWRvd2VkU3RhdGUocXVlcnkucXVlcnkpO1xuICBjb25zdCBbY3VycmVudEFsaWFzLCBzZXRDdXJyZW50QWxpYXNdID0gdXNlU2hhZG93ZWRTdGF0ZShxdWVyeS5hbGlhcyk7XG4gIGNvbnN0IGFsaWFzRWxlbWVudElkID0gdXNlVW5pcXVlSWQoKTtcbiAgY29uc3Qgc2VsZWN0RWxlbWVudElkID0gdXNlVW5pcXVlSWQoKTtcblxuICBjb25zdCByZXN1bHRGb3JtYXQgPSBxdWVyeS5yZXN1bHRGb3JtYXQgPz8gREVGQVVMVF9SRVNVTFRfRk9STUFUO1xuXG4gIGNvbnN0IGFwcGx5RGVsYXllZENoYW5nZXNBbmRSdW5RdWVyeSA9ICgpID0+IHtcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIHF1ZXJ5OiBjdXJyZW50UXVlcnksXG4gICAgICBhbGlhczogY3VycmVudEFsaWFzLFxuICAgICAgcmVzdWx0Rm9ybWF0LFxuICAgIH0pO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGV4dEFyZWFcbiAgICAgICAgYXJpYS1sYWJlbD1cInF1ZXJ5XCJcbiAgICAgICAgcm93cz17M31cbiAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiSW5mbHV4REIgUXVlcnlcIlxuICAgICAgICBvbkJsdXI9e2FwcGx5RGVsYXllZENoYW5nZXNBbmRSdW5RdWVyeX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudFF1ZXJ5KGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXtjdXJyZW50UXVlcnkgPz8gJyd9XG4gICAgICAvPlxuICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgPElubGluZUZvcm1MYWJlbCBodG1sRm9yPXtzZWxlY3RFbGVtZW50SWR9PkZvcm1hdCBhczwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgaW5wdXRJZD17c2VsZWN0RWxlbWVudElkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcmVzdWx0Rm9ybWF0OiB2LnZhbHVlIH0pO1xuICAgICAgICAgICAgb25SdW5RdWVyeSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3Jlc3VsdEZvcm1hdH1cbiAgICAgICAgICBvcHRpb25zPXtSRVNVTFRfRk9STUFUU31cbiAgICAgICAgLz5cbiAgICAgICAgPElubGluZUZvcm1MYWJlbCBodG1sRm9yPXthbGlhc0VsZW1lbnRJZH0+QWxpYXMgYnk8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWQ9e2FsaWFzRWxlbWVudElkfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBzcGVsbENoZWNrPXtmYWxzZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWluZyBwYXR0ZXJuXCJcbiAgICAgICAgICBvbkJsdXI9e2FwcGx5RGVsYXllZENoYW5nZXNBbmRSdW5RdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRBbGlhcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e2N1cnJlbnRBbGlhcyA/PyAnJ31cbiAgICAgICAgLz5cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbmxpbmVGb3JtTGFiZWwsIFRleHRBcmVhIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgSW5mbHV4RGF0YXNvdXJjZSBmcm9tICcuLi9kYXRhc291cmNlJztcblxuaW1wb3J0IHsgRmx1eFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9GbHV4UXVlcnlFZGl0b3InO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVyeTogc3RyaW5nOyAvLyBiZWZvcmUgZmx1eCwgaXQgd2FzIGFsd2F5cyBhIHN0cmluZ1xuICBvbkNoYW5nZTogKHF1ZXJ5Pzogc3RyaW5nKSA9PiB2b2lkO1xuICBkYXRhc291cmNlOiBJbmZsdXhEYXRhc291cmNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZVF1ZXJ5RWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBvblJlZnJlc2ggPSAoKSA9PiB7XG4gICAgLy8gbm9vcFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBxdWVyeSwgZGF0YXNvdXJjZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGRhdGFzb3VyY2UuaXNGbHV4KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rmx1eFF1ZXJ5RWRpdG9yXG4gICAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgICBxdWVyeT17e1xuICAgICAgICAgICAgcmVmSWQ6ICdBJyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25SdW5RdWVyeT17dGhpcy5vblJlZnJlc2h9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiBvbkNoYW5nZSh2LnF1ZXJ5KX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPElubGluZUZvcm1MYWJlbCB3aWR0aD17MTB9PlF1ZXJ5PC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmUgZ2YtZm9ybS0tZ3Jvd1wiPlxuICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtxdWVyeSB8fCAnJ31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibWV0cmljIG5hbWUgb3IgdGFncyBxdWVyeVwiXG4gICAgICAgICAgICByb3dzPXsxfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbnB1dFwiXG4gICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiBvbkNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IFNlZyB9IGZyb20gJy4vU2VnJztcbmltcG9ydCB7IHVud3JhcCB9IGZyb20gJy4vdW53cmFwJztcblxudHlwZSBQcm9wcyA9IHtcbiAgbG9hZE9wdGlvbnM6ICgpID0+IFByb21pc2U8U2VsZWN0YWJsZVZhbHVlW10+O1xuICBhbGxvd0N1c3RvbVZhbHVlPzogYm9vbGVhbjtcbiAgb25BZGQ6ICh2OiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQWRkQnV0dG9uID0gKHsgbG9hZE9wdGlvbnMsIGFsbG93Q3VzdG9tVmFsdWUsIG9uQWRkIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWdcbiAgICAgIHZhbHVlPVwiK1wiXG4gICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnN9XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlPXthbGxvd0N1c3RvbVZhbHVlfVxuICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgIG9uQWRkKHVud3JhcCh2LnZhbHVlKSk7XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW5saW5lTGFiZWwsIFNlZ21lbnRTZWN0aW9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgSW5mbHV4RGF0YXNvdXJjZSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7XG4gIGdldEFsbE1lYXN1cmVtZW50c0ZvclRhZ3MsXG4gIGdldEFsbFBvbGljaWVzLFxuICBnZXRGaWVsZEtleXNGb3JNZWFzdXJlbWVudCxcbiAgZ2V0VGFnS2V5c0Zvck1lYXN1cmVtZW50QW5kVGFncyxcbiAgZ2V0VGFnVmFsdWVzLFxufSBmcm9tICcuLi8uLi9pbmZsdXhRTE1ldGFkYXRhUXVlcnknO1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUXVlcnksXG4gIGFkZE5ld1NlbGVjdFBhcnQsXG4gIHJlbW92ZVNlbGVjdFBhcnQsXG4gIGFkZE5ld0dyb3VwQnlQYXJ0LFxuICByZW1vdmVHcm91cEJ5UGFydCxcbiAgY2hhbmdlU2VsZWN0UGFydCxcbiAgY2hhbmdlR3JvdXBCeVBhcnQsXG59IGZyb20gJy4uLy4uL3F1ZXJ5VXRpbHMnO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnksIEluZmx1eFF1ZXJ5VGFnIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgREVGQVVMVF9SRVNVTFRfRk9STUFUIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZVVuaXF1ZUlkIH0gZnJvbSAnLi4vdXNlVW5pcXVlSWQnO1xuXG5pbXBvcnQgeyBGb3JtYXRBc1NlY3Rpb24gfSBmcm9tICcuL0Zvcm1hdEFzU2VjdGlvbic7XG5pbXBvcnQgeyBGcm9tU2VjdGlvbiB9IGZyb20gJy4vRnJvbVNlY3Rpb24nO1xuaW1wb3J0IHsgSW5wdXRTZWN0aW9uIH0gZnJvbSAnLi9JbnB1dFNlY3Rpb24nO1xuaW1wb3J0IHsgT3JkZXJCeVRpbWVTZWN0aW9uIH0gZnJvbSAnLi9PcmRlckJ5VGltZVNlY3Rpb24nO1xuaW1wb3J0IHsgUGFydExpc3RTZWN0aW9uIH0gZnJvbSAnLi9QYXJ0TGlzdFNlY3Rpb24nO1xuaW1wb3J0IHsgVGFnc1NlY3Rpb24gfSBmcm9tICcuL1RhZ3NTZWN0aW9uJztcbmltcG9ydCB7IGdldE5ld1NlbGVjdFBhcnRPcHRpb25zLCBnZXROZXdHcm91cEJ5UGFydE9wdGlvbnMsIG1ha2VQYXJ0TGlzdCB9IGZyb20gJy4vcGFydExpc3RVdGlscyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHF1ZXJ5OiBJbmZsdXhRdWVyeTtcbiAgb25DaGFuZ2U6IChxdWVyeTogSW5mbHV4UXVlcnkpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcnk6ICgpID0+IHZvaWQ7XG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2U7XG59O1xuXG5mdW5jdGlvbiBnZXRUZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucygpIHtcbiAgcmV0dXJuIChcbiAgICBnZXRUZW1wbGF0ZVNydigpXG4gICAgICAuZ2V0VmFyaWFibGVzKClcbiAgICAgIC8vIHdlIG1ha2UgdGhlbSByZWdleC1wYXJhbXMsIGknbSBub3QgMTAwJSBzdXJlIHdoeS5cbiAgICAgIC8vIHByb2JhYmx5IGJlY2F1c2UgdGhpcyB3YXkgbXVsdGktdmFsdWUgdmFyaWFibGVzIHdvcmsgb2sgdG9vLlxuICAgICAgLm1hcCgodikgPT4gYC9eJCR7di5uYW1lfSQvYClcbiAgKTtcbn1cblxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIG1ha2UgaXQgZWFzeSB0byBjYWxsIHRoaXMgZnJvbSB0aGUgd2lkZ2V0LXJlbmRlci1jb2RlXG5mdW5jdGlvbiB3aXRoVGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMob3B0aW9uc1Byb21pc2U6IFByb21pc2U8c3RyaW5nW10+KTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICByZXR1cm4gb3B0aW9uc1Byb21pc2UudGhlbigob3B0aW9ucykgPT4gWy4uLmdldFRlbXBsYXRlVmFyaWFibGVPcHRpb25zKCksIC4uLm9wdGlvbnNdKTtcbn1cblxuLy8gaXQgaXMgcG9zc2libGUgdG8gYWRkIGZpZWxkcyBpbnRvIHRoZSBgSW5mbHV4UXVlcnlUYWdgIHN0cnVjdHVyZXMsIGFuZCB0aGV5IGRvIHdvcmssXG4vLyBidXQgaW4gc29tZSBjYXNlcywgd2hlbiB3ZSBkbyBtZXRhZGF0YSBxdWVyaWVzLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGVtIGZyb20gdGhlIHF1ZXJpZXMuXG5mdW5jdGlvbiBmaWx0ZXJUYWdzKHBhcnRzOiBJbmZsdXhRdWVyeVRhZ1tdLCBhbGxUYWdLZXlzOiBTZXQ8c3RyaW5nPik6IEluZmx1eFF1ZXJ5VGFnW10ge1xuICByZXR1cm4gcGFydHMuZmlsdGVyKCh0KSA9PiBhbGxUYWdLZXlzLmhhcyh0LmtleSkpO1xufVxuXG5leHBvcnQgY29uc3QgRWRpdG9yID0gKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgdW5pcXVlSWQgPSB1c2VVbmlxdWVJZCgpO1xuICBjb25zdCBmb3JtYXRBc0lkID0gYGluZmx1eGRiLXFlLWZvcm1hdC1hcy0ke3VuaXF1ZUlkfWA7XG4gIGNvbnN0IG9yZGVyQnlUaW1lSWQgPSBgaW5mbHV4ZGItcWUtb3JkZXItYnkke3VuaXF1ZUlkfWA7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBxdWVyeSA9IG5vcm1hbGl6ZVF1ZXJ5KHByb3BzLnF1ZXJ5KTtcbiAgY29uc3QgeyBkYXRhc291cmNlIH0gPSBwcm9wcztcbiAgY29uc3QgeyBtZWFzdXJlbWVudCwgcG9saWN5IH0gPSBxdWVyeTtcblxuICBjb25zdCBhbGxUYWdLZXlzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGdldFRhZ0tleXNGb3JNZWFzdXJlbWVudEFuZFRhZ3MobWVhc3VyZW1lbnQsIHBvbGljeSwgW10sIGRhdGFzb3VyY2UpLnRoZW4oKHRhZ3MpID0+IHtcbiAgICAgIHJldHVybiBuZXcgU2V0KHRhZ3MpO1xuICAgIH0pO1xuICB9LCBbbWVhc3VyZW1lbnQsIHBvbGljeSwgZGF0YXNvdXJjZV0pO1xuXG4gIGNvbnN0IHNlbGVjdExpc3RzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZHluYW1pY1NlbGVjdFBhcnRPcHRpb25zID0gbmV3IE1hcChbXG4gICAgICBbXG4gICAgICAgICdmaWVsZF8wJyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBtZWFzdXJlbWVudCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGdldEZpZWxkS2V5c0Zvck1lYXN1cmVtZW50KG1lYXN1cmVtZW50LCBwb2xpY3ksIGRhdGFzb3VyY2UpXG4gICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIF0pO1xuICAgIHJldHVybiAocXVlcnkuc2VsZWN0ID8/IFtdKS5tYXAoKHNlbCkgPT4gbWFrZVBhcnRMaXN0KHNlbCwgZHluYW1pY1NlbGVjdFBhcnRPcHRpb25zKSk7XG4gIH0sIFttZWFzdXJlbWVudCwgcG9saWN5LCBxdWVyeS5zZWxlY3QsIGRhdGFzb3VyY2VdKTtcblxuICAvLyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uIGlzIG5vdCBjb21wbGljYXRlZCBlbm91Z2ggdG8gbWVtb2l6ZSwgYnV0IGl0J3MgcmVzdWx0XG4gIC8vIGlzIHVzZWQgaW4gYm90aCBtZW1vaXplZCBhbmQgdW4tbWVtb2l6ZWQgcGFydHMsIHNvIHdlIGhhdmUgbm8gY2hvaWNlXG4gIGNvbnN0IGdldFRhZ0tleXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT5cbiAgICAgIGFsbFRhZ0tleXMudGhlbigoa2V5cykgPT5cbiAgICAgICAgZ2V0VGFnS2V5c0Zvck1lYXN1cmVtZW50QW5kVGFncyhtZWFzdXJlbWVudCwgcG9saWN5LCBmaWx0ZXJUYWdzKHF1ZXJ5LnRhZ3MgPz8gW10sIGtleXMpLCBkYXRhc291cmNlKVxuICAgICAgKTtcbiAgfSwgW21lYXN1cmVtZW50LCBwb2xpY3ksIHF1ZXJ5LnRhZ3MsIGRhdGFzb3VyY2UsIGFsbFRhZ0tleXNdKTtcblxuICBjb25zdCBncm91cEJ5TGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cEJ5UGFydE9wdGlvbnMgPSBuZXcgTWFwKFtbJ3RhZ18wJywgZ2V0VGFnS2V5c11dKTtcblxuICAgIHJldHVybiBtYWtlUGFydExpc3QocXVlcnkuZ3JvdXBCeSA/PyBbXSwgZHluYW1pY0dyb3VwQnlQYXJ0T3B0aW9ucyk7XG4gIH0sIFtnZXRUYWdLZXlzLCBxdWVyeS5ncm91cEJ5XSk7XG5cbiAgY29uc3Qgb25BcHBsaWVkQ2hhbmdlID0gKG5ld1F1ZXJ5OiBJbmZsdXhRdWVyeSkgPT4ge1xuICAgIHByb3BzLm9uQ2hhbmdlKG5ld1F1ZXJ5KTtcbiAgICBwcm9wcy5vblJ1blF1ZXJ5KCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUZyb21TZWN0aW9uQ2hhbmdlID0gKHA6IHN0cmluZyB8IHVuZGVmaW5lZCwgbTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgb25BcHBsaWVkQ2hhbmdlKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgcG9saWN5OiBwLFxuICAgICAgbWVhc3VyZW1lbnQ6IG0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFnc1NlY3Rpb25DaGFuZ2UgPSAodGFnczogSW5mbHV4UXVlcnlUYWdbXSkgPT4ge1xuICAgIC8vIHdlIHNldCBlbXB0eS1hcnJheXMgdG8gdW5kZWZpbmVkXG4gICAgb25BcHBsaWVkQ2hhbmdlKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgdGFnczogdGFncy5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiB0YWdzLFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZWdtZW50U2VjdGlvbiBsYWJlbD1cIkZST01cIiBmaWxsPXt0cnVlfT5cbiAgICAgICAgPEZyb21TZWN0aW9uXG4gICAgICAgICAgcG9saWN5PXtwb2xpY3l9XG4gICAgICAgICAgbWVhc3VyZW1lbnQ9e21lYXN1cmVtZW50fVxuICAgICAgICAgIGdldFBvbGljeU9wdGlvbnM9eygpID0+IGdldEFsbFBvbGljaWVzKGRhdGFzb3VyY2UpfVxuICAgICAgICAgIGdldE1lYXN1cmVtZW50T3B0aW9ucz17KGZpbHRlcikgPT5cbiAgICAgICAgICAgIHdpdGhUZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyhcbiAgICAgICAgICAgICAgYWxsVGFnS2V5cy50aGVuKChrZXlzKSA9PlxuICAgICAgICAgICAgICAgIGdldEFsbE1lYXN1cmVtZW50c0ZvclRhZ3MoXG4gICAgICAgICAgICAgICAgICBmaWx0ZXIgPT09ICcnID8gdW5kZWZpbmVkIDogZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyVGFncyhxdWVyeS50YWdzID8/IFtdLCBrZXlzKSxcbiAgICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZyb21TZWN0aW9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8SW5saW5lTGFiZWwgd2lkdGg9XCJhdXRvXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5saW5lTGFiZWx9PlxuICAgICAgICAgIFdIRVJFXG4gICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgIDxUYWdzU2VjdGlvblxuICAgICAgICAgIHRhZ3M9e3F1ZXJ5LnRhZ3MgPz8gW119XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhZ3NTZWN0aW9uQ2hhbmdlfVxuICAgICAgICAgIGdldFRhZ0tleU9wdGlvbnM9e2dldFRhZ0tleXN9XG4gICAgICAgICAgZ2V0VGFnVmFsdWVPcHRpb25zPXsoa2V5OiBzdHJpbmcpID0+XG4gICAgICAgICAgICB3aXRoVGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMoXG4gICAgICAgICAgICAgIGFsbFRhZ0tleXMudGhlbigoa2V5cykgPT5cbiAgICAgICAgICAgICAgICBnZXRUYWdWYWx1ZXMoa2V5LCBtZWFzdXJlbWVudCwgcG9saWN5LCBmaWx0ZXJUYWdzKHF1ZXJ5LnRhZ3MgPz8gW10sIGtleXMpLCBkYXRhc291cmNlKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9TZWdtZW50U2VjdGlvbj5cbiAgICAgIHtzZWxlY3RMaXN0cy5tYXAoKHNlbCwgaW5kZXgpID0+IChcbiAgICAgICAgPFNlZ21lbnRTZWN0aW9uIGtleT17aW5kZXh9IGxhYmVsPXtpbmRleCA9PT0gMCA/ICdTRUxFQ1QnIDogJyd9IGZpbGw9e3RydWV9PlxuICAgICAgICAgIDxQYXJ0TGlzdFNlY3Rpb25cbiAgICAgICAgICAgIHBhcnRzPXtzZWx9XG4gICAgICAgICAgICBnZXROZXdQYXJ0T3B0aW9ucz17KCkgPT4gUHJvbWlzZS5yZXNvbHZlKGdldE5ld1NlbGVjdFBhcnRPcHRpb25zKCkpfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhwYXJ0SW5kZXgsIG5ld1BhcmFtcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdRdWVyeSA9IGNoYW5nZVNlbGVjdFBhcnQocXVlcnksIGluZGV4LCBwYXJ0SW5kZXgsIG5ld1BhcmFtcyk7XG4gICAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZShuZXdRdWVyeSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25BZGROZXdQYXJ0PXsodHlwZSkgPT4ge1xuICAgICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoYWRkTmV3U2VsZWN0UGFydChxdWVyeSwgdHlwZSwgaW5kZXgpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblJlbW92ZVBhcnQ9eyhwYXJ0SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHJlbW92ZVNlbGVjdFBhcnQocXVlcnksIHBhcnRJbmRleCwgaW5kZXgpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZWdtZW50U2VjdGlvbj5cbiAgICAgICkpfVxuICAgICAgPFNlZ21lbnRTZWN0aW9uIGxhYmVsPVwiR1JPVVAgQllcIiBmaWxsPXt0cnVlfT5cbiAgICAgICAgPFBhcnRMaXN0U2VjdGlvblxuICAgICAgICAgIHBhcnRzPXtncm91cEJ5TGlzdH1cbiAgICAgICAgICBnZXROZXdQYXJ0T3B0aW9ucz17KCkgPT4gZ2V0TmV3R3JvdXBCeVBhcnRPcHRpb25zKHF1ZXJ5LCBnZXRUYWdLZXlzKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHBhcnRJbmRleCwgbmV3UGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdRdWVyeSA9IGNoYW5nZUdyb3VwQnlQYXJ0KHF1ZXJ5LCBwYXJ0SW5kZXgsIG5ld1BhcmFtcyk7XG4gICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UobmV3UXVlcnkpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25BZGROZXdQYXJ0PXsodHlwZSkgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKGFkZE5ld0dyb3VwQnlQYXJ0KHF1ZXJ5LCB0eXBlKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlbW92ZVBhcnQ9eyhwYXJ0SW5kZXgpID0+IHtcbiAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZShyZW1vdmVHcm91cEJ5UGFydChxdWVyeSwgcGFydEluZGV4KSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VnbWVudFNlY3Rpb24+XG4gICAgICA8U2VnbWVudFNlY3Rpb24gbGFiZWw9XCJUSU1FWk9ORVwiIGZpbGw9e3RydWV9PlxuICAgICAgICA8SW5wdXRTZWN0aW9uXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIob3B0aW9uYWwpXCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkudHp9XG4gICAgICAgICAgb25DaGFuZ2U9eyh0eikgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHsgLi4ucXVlcnksIHR6IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxJbmxpbmVMYWJlbCBodG1sRm9yPXtvcmRlckJ5VGltZUlkfSB3aWR0aD1cImF1dG9cIiBjbGFzc05hbWU9e3N0eWxlcy5pbmxpbmVMYWJlbH0+XG4gICAgICAgICAgT1JERVIgQlkgVElNRVxuICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICA8T3JkZXJCeVRpbWVTZWN0aW9uXG4gICAgICAgICAgaW5wdXRJZD17b3JkZXJCeVRpbWVJZH1cbiAgICAgICAgICB2YWx1ZT17cXVlcnkub3JkZXJCeVRpbWUgPT09ICdERVNDJyA/ICdERVNDJyA6ICdBU0MnIC8qIEZJWE1FOiBtYWtlIHRoaXMgc2hhcmVkIHdpdGggaW5mbHV4X3F1ZXJ5X21vZGVsICovfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHsgLi4ucXVlcnksIG9yZGVyQnlUaW1lOiB2IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlZ21lbnRTZWN0aW9uPlxuICAgICAgey8qIHF1ZXJ5LmZpbGwgaXMgaWdub3JlZCBpbiB0aGUgcXVlcnktZWRpdG9yLCBhbmQgaXQgaXMgZGVsZXRlZCB3aGVuZXZlclxuICAgICAgICAgIHF1ZXJ5LWVkaXRvciBjaGFuZ2VzLiB0aGUgaW5mbHV4X3F1ZXJ5X21vZGVsIHN0aWxsIGhhbmRsZXMgaXQsIGJ1dCB0aGUgbmV3XG4gICAgICAgICAgYXBwcm9hY2ggc2VlbSB0byBiZSB0byBoYW5kbGUgXCJmaWxsXCIgaW5zaWRlIHF1ZXJ5Lmdyb3VwQnkuIHNvLCBpZiB5b3VcbiAgICAgICAgICBoYXZlIGEgcGFuZWwgd2hlcmUgaW4gdGhlIGpzb24geW91IGhhdmUgcXVlcnkuZmlsbCwgaXQgd2lsbCBiZSBhcHBsaWVkLFxuICAgICAgICAgIGFzIGxvbmcgYXMgeW91IGRvIG5vdCBlZGl0IHRoYXQgcXVlcnkuICovfVxuICAgICAgPFNlZ21lbnRTZWN0aW9uIGxhYmVsPVwiTElNSVRcIiBmaWxsPXt0cnVlfT5cbiAgICAgICAgPElucHV0U2VjdGlvblxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKG9wdGlvbmFsKVwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5LmxpbWl0Py50b1N0cmluZygpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsobGltaXQpID0+IHtcbiAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZSh7IC4uLnF1ZXJ5LCBsaW1pdCB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8SW5saW5lTGFiZWwgd2lkdGg9XCJhdXRvXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5saW5lTGFiZWx9PlxuICAgICAgICAgIFNMSU1JVFxuICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICA8SW5wdXRTZWN0aW9uXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIob3B0aW9uYWwpXCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkuc2xpbWl0Py50b1N0cmluZygpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2xpbWl0KSA9PiB7XG4gICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoeyAuLi5xdWVyeSwgc2xpbWl0IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1NlZ21lbnRTZWN0aW9uPlxuICAgICAgPFNlZ21lbnRTZWN0aW9uIGh0bWxGb3I9e2Zvcm1hdEFzSWR9IGxhYmVsPVwiRk9STUFUIEFTXCIgZmlsbD17dHJ1ZX0+XG4gICAgICAgIDxGb3JtYXRBc1NlY3Rpb25cbiAgICAgICAgICBpbnB1dElkPXtmb3JtYXRBc0lkfVxuICAgICAgICAgIGZvcm1hdD17cXVlcnkucmVzdWx0Rm9ybWF0ID8/IERFRkFVTFRfUkVTVUxUX0ZPUk1BVH1cbiAgICAgICAgICBvbkNoYW5nZT17KGZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHsgLi4ucXVlcnksIHJlc3VsdEZvcm1hdDogZm9ybWF0IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHtxdWVyeS5yZXN1bHRGb3JtYXQgIT09ICd0YWJsZScgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SW5saW5lTGFiZWwgd2lkdGg9XCJhdXRvXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW5saW5lTGFiZWx9PlxuICAgICAgICAgICAgICBBTElBU1xuICAgICAgICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFNlY3Rpb25cbiAgICAgICAgICAgICAgaXNXaWRlXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtaW5nIHBhdHRlcm5cIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkuYWxpYXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoYWxpYXMpID0+IHtcbiAgICAgICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoeyAuLi5xdWVyeSwgYWxpYXMgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9TZWdtZW50U2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGlubGluZUxhYmVsOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucHJpbWFyeS50ZXh0fTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBSZXN1bHRGb3JtYXQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBSRVNVTFRfRk9STUFUUyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IHBhZGRpbmdSaWdodENsYXNzIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgdW53cmFwIH0gZnJvbSAnLi91bndyYXAnO1xuXG50eXBlIFByb3BzID0ge1xuICBpbnB1dElkPzogc3RyaW5nO1xuICBmb3JtYXQ6IFJlc3VsdEZvcm1hdDtcbiAgb25DaGFuZ2U6IChuZXdGb3JtYXQ6IFJlc3VsdEZvcm1hdCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGNsYXNzTmFtZSA9IGN4KCd3aWR0aC04JywgcGFkZGluZ1JpZ2h0Q2xhc3MpO1xuXG5leHBvcnQgY29uc3QgRm9ybWF0QXNTZWN0aW9uID0gKHsgZm9ybWF0LCBpbnB1dElkLCBvbkNoYW5nZSB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0PFJlc3VsdEZvcm1hdD5cbiAgICAgIGlucHV0SWQ9e2lucHV0SWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICBvbkNoYW5nZSh1bndyYXAodi52YWx1ZSkpO1xuICAgICAgfX1cbiAgICAgIHZhbHVlPXtmb3JtYXR9XG4gICAgICBvcHRpb25zPXtSRVNVTFRfRk9STUFUU31cbiAgICAvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlZyB9IGZyb20gJy4vU2VnJztcbmltcG9ydCB7IHRvU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnLi90b1NlbGVjdGFibGVWYWx1ZSc7XG5cbmNvbnN0IERFRkFVTFRfUE9MSUNZID0gJ2RlZmF1bHQnO1xuXG4vLyB3ZSB1c2UgdGhlIHZhbHVlIFwiZGVmYXVsdFwiIGFzIGEgbWFnaWMtdmFsdWUsIGl0IG1lYW5zXG4vLyB3ZSB1c2UgdGhlIGRlZmF1bHQgcmV0ZW50aW9uLXBvbGljeS5cbi8vIHVuZm9ydHVuYXRlbHksIElGIHRoZSB1c2VyIGhhcyBhIHJldGVudGlvbi1wb2xpY3kgbmFtZWQgXCJkZWZhdWx0XCIsXG4vLyBhbmQgaXQgaXMgbm90IHRoZSBkZWZhdWx0LXJldGVudGlvbi1wb2xpY3kgaW4gaW5mbHV4ZGIsXG4vLyBiYWQgdGhpbmdzIHdpbGwgaGFwcGVuLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvZ3JhZmFuYS9pc3N1ZXMvNDM0NyA6LShcbi8vIEZJWE1FOiB3ZSBjb3VsZCBtYXliZSBhdCBsZWFzdCBkZXRlY3QgaGVyZSB0aGF0IHByb2JsZW0taXMtaGFwcGVuaW5nLFxuLy8gYW5kIHNob3cgYW4gZXJyb3IgbWVzc2FnZSBvciBzb21ldGhpbmcuXG4vLyB1bmZvcnR1bmF0ZWx5LCBjdXJyZW50bHkgdGhlIFJlc3BvbnNlUGFyc2VyIGRvZXMgbm90IHJldHVybiB0aGVcbi8vIGlzLWRlZmF1bHQgaW5mbyBmb3IgdGhlIHJldGVudGlvbi1wb2xpY2llcywgc28gdGhhdCBzaG91bGQgY2hhbmdlIGZpcnN0LlxuXG50eXBlIFByb3BzID0ge1xuICBvbkNoYW5nZTogKHBvbGljeTogc3RyaW5nIHwgdW5kZWZpbmVkLCBtZWFzdXJlbWVudDogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xuICBwb2xpY3k6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbWVhc3VyZW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgZ2V0UG9saWN5T3B0aW9uczogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG4gIGdldE1lYXN1cmVtZW50T3B0aW9uczogKGZpbHRlcjogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbn07XG5cbmV4cG9ydCBjb25zdCBGcm9tU2VjdGlvbiA9ICh7XG4gIHBvbGljeSxcbiAgbWVhc3VyZW1lbnQsXG4gIG9uQ2hhbmdlLFxuICBnZXRQb2xpY3lPcHRpb25zLFxuICBnZXRNZWFzdXJlbWVudE9wdGlvbnMsXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgaGFuZGxlUG9saWN5TG9hZE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsUG9saWNpZXMgPSBhd2FpdCBnZXRQb2xpY3lPcHRpb25zKCk7XG4gICAgLy8gaWYgYGRlZmF1bHRgIGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IG9mIHBvbGljaWVzLCB3ZSBhZGQgaXRcbiAgICBjb25zdCBhbGxQb2xpY2llc1dpdGhEZWZhdWx0ID0gYWxsUG9saWNpZXMuc29tZSgocCkgPT4gcCA9PT0gJ2RlZmF1bHQnKVxuICAgICAgPyBhbGxQb2xpY2llc1xuICAgICAgOiBbREVGQVVMVF9QT0xJQ1ksIC4uLmFsbFBvbGljaWVzXTtcblxuICAgIHJldHVybiBhbGxQb2xpY2llc1dpdGhEZWZhdWx0Lm1hcCh0b1NlbGVjdGFibGVWYWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVhc3VyZW1lbnRMb2FkT3B0aW9ucyA9IGFzeW5jIChmaWx0ZXI6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFsbE1lYXN1cmVtZW50cyA9IGF3YWl0IGdldE1lYXN1cmVtZW50T3B0aW9ucyhmaWx0ZXIpO1xuICAgIHJldHVybiBhbGxNZWFzdXJlbWVudHMubWFwKHRvU2VsZWN0YWJsZVZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VnXG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgdmFsdWU9e3BvbGljeSA/PyAndXNpbmcgZGVmYXVsdCBwb2xpY3knfVxuICAgICAgICBsb2FkT3B0aW9ucz17aGFuZGxlUG9saWN5TG9hZE9wdGlvbnN9XG4gICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgIG9uQ2hhbmdlKHYudmFsdWUsIG1lYXN1cmVtZW50KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8U2VnXG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgdmFsdWU9e21lYXN1cmVtZW50ID8/ICdzZWxlY3QgbWVhc3VyZW1lbnQnfVxuICAgICAgICBsb2FkT3B0aW9ucz17aGFuZGxlTWVhc3VyZW1lbnRMb2FkT3B0aW9uc31cbiAgICAgICAgZmlsdGVyQnlMb2FkT3B0aW9uc1xuICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZShwb2xpY3ksIHYudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgdXNlU2hhZG93ZWRTdGF0ZSB9IGZyb20gJy4uL3VzZVNoYWRvd2VkU3RhdGUnO1xuXG5pbXBvcnQgeyBwYWRkaW5nUmlnaHRDbGFzcyB9IGZyb20gJy4vc3R5bGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xuICBpc1dpZGU/OiBib29sZWFuO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBJbnB1dFNlY3Rpb24gPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGlzV2lkZSwgcGxhY2Vob2xkZXIgfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtjdXJyZW50VmFsdWUsIHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTaGFkb3dlZFN0YXRlKHZhbHVlKTtcblxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XG4gICAgLy8gd2Ugc2VuZCBlbXB0eS1zdHJpbmcgYXMgdW5kZWZpbmVkXG4gICAgY29uc3QgbmV3VmFsdWUgPSBjdXJyZW50VmFsdWUgPT09ICcnID8gdW5kZWZpbmVkIDogY3VycmVudFZhbHVlO1xuICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBjbGFzc05hbWU9e2N4KGlzV2lkZSA/PyBmYWxzZSA/ICd3aWR0aC0xNCcgOiAnd2lkdGgtOCcsIHBhZGRpbmdSaWdodENsYXNzKX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBzcGVsbENoZWNrPXtmYWxzZX1cbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17Y3VycmVudFZhbHVlID8/ICcnfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgcGFkZGluZ1JpZ2h0Q2xhc3MgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyB1bndyYXAgfSBmcm9tICcuL3Vud3JhcCc7XG5cbnR5cGUgTW9kZSA9ICdBU0MnIHwgJ0RFU0MnO1xuXG5jb25zdCBPUFRJT05TOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8TW9kZT4+ID0gW1xuICB7IGxhYmVsOiAnYXNjZW5kaW5nJywgdmFsdWU6ICdBU0MnIH0sXG4gIHsgbGFiZWw6ICdkZXNjZW5kaW5nJywgdmFsdWU6ICdERVNDJyB9LFxuXTtcblxuY29uc3QgY2xhc3NOYW1lID0gY3goJ3dpZHRoLTknLCBwYWRkaW5nUmlnaHRDbGFzcyk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZhbHVlOiBNb2RlO1xuICBvbkNoYW5nZTogKHZhbHVlOiBNb2RlKSA9PiB2b2lkO1xuICBpbnB1dElkPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IE9yZGVyQnlUaW1lU2VjdGlvbiA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgaW5wdXRJZCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbGVjdDxNb2RlPlxuICAgICAgICBpbnB1dElkPXtpbnB1dElkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UodW53cmFwKHYudmFsdWUpKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvcHRpb25zPXtPUFRJT05TfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUsIEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IE1lbnVJdGVtLCBXaXRoQ29udGV4dE1lbnUsIE1lbnVHcm91cCwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBBZGRCdXR0b24gfSBmcm9tICcuL0FkZEJ1dHRvbic7XG5pbXBvcnQgeyBTZWcgfSBmcm9tICcuL1NlZyc7XG5pbXBvcnQgeyB0b1NlbGVjdGFibGVWYWx1ZSB9IGZyb20gJy4vdG9TZWxlY3RhYmxlVmFsdWUnO1xuaW1wb3J0IHsgdW53cmFwIH0gZnJvbSAnLi91bndyYXAnO1xuXG5leHBvcnQgdHlwZSBQYXJ0UGFyYW1zID0gQXJyYXk8e1xuICB2YWx1ZTogc3RyaW5nO1xuICBvcHRpb25zOiAoKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT4pIHwgbnVsbDtcbn0+O1xuXG50eXBlIFByb3BzID0ge1xuICBwYXJ0czogQXJyYXk8e1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwYXJhbXM6IFBhcnRQYXJhbXM7XG4gIH0+O1xuICBnZXROZXdQYXJ0T3B0aW9uczogKCkgPT4gUHJvbWlzZTxTZWxlY3RhYmxlVmFsdWVbXT47XG4gIG9uQ2hhbmdlOiAocGFydEluZGV4OiBudW1iZXIsIHBhcmFtVmFsdWVzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgb25SZW1vdmVQYXJ0OiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25BZGROZXdQYXJ0OiAodHlwZTogc3RyaW5nKSA9PiB2b2lkO1xufTtcblxuY29uc3QgcmVuZGVyUmVtb3ZhYmxlTmFtZU1lbnVJdGVtcyA9IChvbkNsaWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVHcm91cCBsYWJlbD1cIlwiPlxuICAgICAgPE1lbnVJdGVtIGxhYmVsPVwicmVtb3ZlXCIgb25DbGljaz17b25DbGlja30gLz5cbiAgICA8L01lbnVHcm91cD5cbiAgKTtcbn07XG5cbmNvbnN0IG5vUmlnaHRNYXJnaW5QYWRkaW5nQ2xhc3MgPSBjc3Moe1xuICBwYWRkaW5nUmlnaHQ6ICcwJyxcbiAgbWFyZ2luUmlnaHQ6ICcwJyxcbn0pO1xuXG5jb25zdCBSZW1vdmFibGVOYW1lID0gKHsgbmFtZSwgb25SZW1vdmUgfTogeyBuYW1lOiBzdHJpbmc7IG9uUmVtb3ZlOiAoKSA9PiB2b2lkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V2l0aENvbnRleHRNZW51IHJlbmRlck1lbnVJdGVtcz17KCkgPT4gcmVuZGVyUmVtb3ZhYmxlTmFtZU1lbnVJdGVtcyhvblJlbW92ZSl9PlxuICAgICAgeyh7IG9wZW5NZW51IH0pID0+IChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2N4KCdnZi1mb3JtLWxhYmVsJywgbm9SaWdodE1hcmdpblBhZGRpbmdDbGFzcyl9IG9uQ2xpY2s9e29wZW5NZW51fT5cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvV2l0aENvbnRleHRNZW51PlxuICApO1xufTtcblxudHlwZSBQYXJ0UHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFyYW1zOiBQYXJ0UGFyYW1zO1xuICBvblJlbW92ZTogKCkgPT4gdm9pZDtcbiAgb25DaGFuZ2U6IChwYXJhbVZhbHVlczogc3RyaW5nW10pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBub0hvcml6TWFyZ2luUGFkZGluZ0NsYXNzID0gY3NzKHtcbiAgcGFkZGluZ0xlZnQ6ICcwJyxcbiAgcGFkZGluZ1JpZ2h0OiAnMCcsXG4gIG1hcmdpbkxlZnQ6ICcwJyxcbiAgbWFyZ2luUmlnaHQ6ICcwJyxcbn0pO1xuXG5jb25zdCBnZXRQYXJ0Q2xhc3MgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIGN4KFxuICAgICdnZi1mb3JtLWxhYmVsJyxcbiAgICBjc3Moe1xuICAgICAgcGFkZGluZ0xlZnQ6ICcwJyxcbiAgICAgIC8vIGdmLWZvcm0tbGFiZWwgY2xhc3MgbWFrZXMgY2VydGFpbiBjc3MgYXR0cmlidXRlcyBpbmNvcnJlY3RcbiAgICAgIC8vIGZvciB0aGUgc2VsZWN0Ym94LWRyb3Bkb3duLCBzbyB3ZSBoYXZlIHRvIFwicmVzZXRcIiB0aGVtIGJhY2tcbiAgICAgIGxpbmVIZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuYm9keS5saW5lSGVpZ2h0LFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuYm9keS5mb250U2l6ZSxcbiAgICB9KVxuICApO1xufTtcblxuY29uc3QgUGFydCA9ICh7IG5hbWUsIHBhcmFtcywgb25DaGFuZ2UsIG9uUmVtb3ZlIH06IFBhcnRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZTIoKTtcbiAgY29uc3QgcGFydENsYXNzID0gdXNlTWVtbygoKSA9PiBnZXRQYXJ0Q2xhc3ModGhlbWUpLCBbdGhlbWVdKTtcblxuICBjb25zdCBvblBhcmFtQ2hhbmdlID0gKHBhcjogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuZXdQYXJhbXMgPSBwYXJhbXMubWFwKChwKSA9PiBwLnZhbHVlKTtcbiAgICBuZXdQYXJhbXNbaV0gPSBwYXI7XG4gICAgb25DaGFuZ2UobmV3UGFyYW1zKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cGFydENsYXNzfT5cbiAgICAgIDxSZW1vdmFibGVOYW1lIG5hbWU9e25hbWV9IG9uUmVtb3ZlPXtvblJlbW92ZX0gLz4oXG4gICAgICB7cGFyYW1zLm1hcCgocCwgaSkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBvcHRpb25zIH0gPSBwO1xuICAgICAgICBjb25zdCBpc0xhc3QgPSBpID09PSBwYXJhbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgbG9hZE9wdGlvbnMgPVxuICAgICAgICAgIG9wdGlvbnMgIT09IG51bGwgPyAoKSA9PiBvcHRpb25zKCkudGhlbigoaXRlbXMpID0+IGl0ZW1zLm1hcCh0b1NlbGVjdGFibGVWYWx1ZSkpIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAgPFNlZ1xuICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgYnV0dG9uQ2xhc3NOYW1lPXtub0hvcml6TWFyZ2luUGFkZGluZ0NsYXNzfVxuICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICAgIG9uUGFyYW1DaGFuZ2UodW53cmFwKHYudmFsdWUpLCBpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWlzTGFzdCAmJiAnLCd9XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgICAgKVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFBhcnRMaXN0U2VjdGlvbiA9ICh7XG4gIHBhcnRzLFxuICBnZXROZXdQYXJ0T3B0aW9ucyxcbiAgb25BZGROZXdQYXJ0LFxuICBvblJlbW92ZVBhcnQsXG4gIG9uQ2hhbmdlLFxufTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwYXJ0cy5tYXAoKHBhcnQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxQYXJ0XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBuYW1lPXtwYXJ0Lm5hbWV9XG4gICAgICAgICAgcGFyYW1zPXtwYXJ0LnBhcmFtc31cbiAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgb25SZW1vdmVQYXJ0KGluZGV4KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXsocGFycykgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UoaW5kZXgsIHBhcnMpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxBZGRCdXR0b24gbG9hZE9wdGlvbnM9e2dldE5ld1BhcnRPcHRpb25zfSBvbkFkZD17b25BZGROZXdQYXJ0fSAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IGRlYm91bmNlUHJvbWlzZSBmcm9tICdkZWJvdW5jZS1wcm9taXNlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXN5bmNGbiB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lTGFiZWwsIFNlbGVjdCwgQXN5bmNTZWxlY3QsIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VTaGFkb3dlZFN0YXRlIH0gZnJvbSAnLi4vdXNlU2hhZG93ZWRTdGF0ZSc7XG5cbi8vIHRoaXMgZmlsZSBpcyBhIHNpbXBsZXIgdmVyc2lvbiBvZiBgZ3JhZmFuYS11aSAvIFNlZ21lbnRBc3luYy50c3hgXG4vLyB3aXRoIHNvbWUgY2hhbmdlczpcbi8vIDEuIGNsaWNrLW91dHNpZGUgZG9lcyBub3Qgc2VsZWN0IHRoZSB2YWx1ZS4gaSB0aGluayBpdCdzIGJldHRlciB0byBiZSBleHBsaWNpdCBoZXJlLlxuLy8gMi4gd2Ugc2V0IGEgbWluLXdpZHRoIG9uIHRoZSBzZWxlY3QtZWxlbWVudCB0byBoYW5kbGUgY2FzZXMgd2hlcmUgdGhlIGB2YWx1ZWBcbi8vICAgIGlzIHZlcnkgc2hvcnQsIGxpa2UgXCJ4XCIsIGFuZCB0aGVuIHlvdSBjbGljayBvbiBpdCBhbmQgdGhlIHNlbGVjdCBvcGVucyxcbi8vICAgIGFuZCBpdCB0cmllcyB0byBiZSBhcyBzaG9ydCBhcyBcInhcIiBhbmQgaXQgZG9lcyBub3Qgd29yayB3ZWxsLlxuXG4vLyBOT1RFOiBtYXliZSB0aGVzZSBjaGFuZ2VzIGNvdWxkIGJlIG1pZ3JhdGVkIGludG8gdGhlIFNlZ21lbnRBc3luYyBsYXRlclxuXG50eXBlIFNlbFZhbCA9IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+O1xuXG4vLyB3aGVuIGFsbG93Q3VzdG9tVmFsdWUgaXMgdHJ1ZSwgdGhlcmUgaXMgbm8gd2F5IHRvIGVuZm9yY2UgdGhlIHNlbGVjdGFibGVWYWx1ZVxuLy8gZW51bS10eXBlLCBzbyBpIGp1c3QgZ28gd2l0aCBgc3RyaW5nYFxuXG50eXBlIExvYWRPcHRpb25zID0gKGZpbHRlcjogc3RyaW5nKSA9PiBQcm9taXNlPFNlbFZhbFtdPjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdmFsdWU6IHN0cmluZztcbiAgYnV0dG9uQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBsb2FkT3B0aW9ucz86IExvYWRPcHRpb25zO1xuICAvLyBpZiBmaWx0ZXJCeUxvYWRPcHRpb25zIGlzIGZhbHNlLFxuICAvLyBsb2FkT3B0aW9ucyBpcyBvbmx5IGV4ZWN1dGVkIG9uY2UsXG4gIC8vIHdoZW4gdGhlIHNlbGVjdC1ib3ggb3BlbnMsXG4gIC8vIGFuZCBhcyB5b3Ugd3JpdGUsIHRoZSBsaXN0IGdldHMgZmlsdGVyZWRcbiAgLy8gYnkgdGhlIHNlbGVjdC1ib3guXG4gIC8vIGlmIGZpbHRlckJ5TG9hZE9wdGlvbnMgaXMgdHJ1ZSxcbiAgLy8gYXMgeW91IHdyaXRlIHRoZSBsb2FkT3B0aW9ucyBpcyBleGVjdXRlZCBhZ2FpbiBhbmQgYWdhaW4sXG4gIC8vIGFuZCBpdCBpcyByZWxpZWQgb24gdG8gZmlsdGVyIHRoZSByZXN1bHRzLlxuICBmaWx0ZXJCeUxvYWRPcHRpb25zPzogYm9vbGVhbjtcbiAgb25DaGFuZ2U6ICh2OiBTZWxWYWwpID0+IHZvaWQ7XG4gIGFsbG93Q3VzdG9tVmFsdWU/OiBib29sZWFuO1xufTtcblxuY29uc3Qgc2VsZWN0Q2xhc3MgPSBjc3Moe1xuICBtaW5XaWR0aDogJzE2MHB4Jyxcbn0pO1xuXG50eXBlIFNlbFByb3BzID0ge1xuICBsb2FkT3B0aW9uczogTG9hZE9wdGlvbnM7XG4gIGZpbHRlckJ5TG9hZE9wdGlvbnM/OiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkNoYW5nZTogKHY6IFNlbFZhbCkgPT4gdm9pZDtcbiAgYWxsb3dDdXN0b21WYWx1ZT86IGJvb2xlYW47XG59O1xuXG50eXBlIFNlbFJlbG9hZFByb3BzID0ge1xuICBsb2FkT3B0aW9uczogKGZpbHRlcjogc3RyaW5nKSA9PiBQcm9taXNlPFNlbFZhbFtdPjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25DaGFuZ2U6ICh2OiBTZWxWYWwpID0+IHZvaWQ7XG4gIGFsbG93Q3VzdG9tVmFsdWU/OiBib29sZWFuO1xufTtcblxuLy8gd2hlbiBhIGN1c3RvbSB2YWx1ZSBpcyB3cml0dGVuIGludG8gYSBzZWxlY3QtYm94LFxuLy8gYnkgZGVmYXVsdCB0aGUgbmV3IHZhbHVlIGlzIHByZWZpeGVkIHdpdGggXCJDcmVhdGU6XCIsXG4vLyBhbmQgdGhhdCBzb3VuZHMgY29uZnVzaW5nIGJlY2F1c2UgaGVyZSB3ZSBkbyBub3QgY3JlYXRlXG4vLyBhbnl0aGluZy4gd2UgY2hhbmdlIHRoaXMgdG8ganVzdCBiZSB0aGUgZW50ZXJlZCBzdHJpbmcuXG5jb25zdCBmb3JtYXRDcmVhdGVMYWJlbCA9ICh2OiBzdHJpbmcpID0+IHY7XG5cbmNvbnN0IFNlbFJlbG9hZCA9ICh7IGxvYWRPcHRpb25zLCBhbGxvd0N1c3RvbVZhbHVlLCBvbkNoYW5nZSwgb25DbG9zZSB9OiBTZWxSZWxvYWRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgLy8gaGVyZSB3ZSByZWx5IG9uIHRoZSBmYWN0IHRoYXQgd3JpdGluZyB0ZXh0IGludG8gdGhlIDxBc3luY1NlbGVjdC8+XG4gIC8vIGRvZXMgbm90IGNhdXNlIGEgcmUtcmVuZGVyIG9mIHRoZSBjdXJyZW50IHJlYWN0IGNvbXBvbmVudC5cbiAgLy8gdGhpcyB3YXkgdGhlcmUgaXMgb25seSBhIHNpbmdsZSByZW5kZXItY2FsbCxcbiAgLy8gc28gdGhlcmUgaXMgb25seSBhIHNpbmdsZSBgZGVib3VuY2VkTG9hZE9wdGlvbnNgLlxuICAvLyBpZiB3ZSB3YW50IG90IG1ha2UgdGhpcyBcInJlLXJlbmRlciBzYWZlLFxuICAvLyB3ZSB3aWxsIGhhdmUgdG8gcHV0IHRoZSBkZWJvdW5jZWQgY2FsbCBpbnRvIGFuIHVzZVJlZixcbiAgLy8gYW5kIHByb2JhYmx5IGhhdmUgYW4gdXNlRWZmZWN0XG4gIGNvbnN0IGRlYm91bmNlZExvYWRPcHRpb25zID0gZGVib3VuY2VQcm9taXNlKGxvYWRPcHRpb25zLCAxMDAwLCB7IGxlYWRpbmc6IHRydWUgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3NlbGVjdENsYXNzfT5cbiAgICAgIDxBc3luY1NlbGVjdFxuICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbD17Zm9ybWF0Q3JlYXRlTGFiZWx9XG4gICAgICAgIGRlZmF1bHRPcHRpb25zXG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICBpc09wZW5cbiAgICAgICAgb25DbG9zZU1lbnU9e29uQ2xvc2V9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e2FsbG93Q3VzdG9tVmFsdWV9XG4gICAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRMb2FkT3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnR5cGUgU2VsU2luZ2xlTG9hZFByb3BzID0ge1xuICBsb2FkT3B0aW9uczogKGZpbHRlcjogc3RyaW5nKSA9PiBQcm9taXNlPFNlbFZhbFtdPjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25DaGFuZ2U6ICh2OiBTZWxWYWwpID0+IHZvaWQ7XG4gIGFsbG93Q3VzdG9tVmFsdWU/OiBib29sZWFuO1xufTtcblxuY29uc3QgU2VsU2luZ2xlTG9hZCA9ICh7IGxvYWRPcHRpb25zLCBhbGxvd0N1c3RvbVZhbHVlLCBvbkNoYW5nZSwgb25DbG9zZSB9OiBTZWxTaW5nbGVMb2FkUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtsb2FkU3RhdGUsIGRvTG9hZF0gPSB1c2VBc3luY0ZuKGxvYWRPcHRpb25zLCBbbG9hZE9wdGlvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvTG9hZCgnJyk7XG4gIH0sIFtkb0xvYWQsIGxvYWRPcHRpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2VsZWN0Q2xhc3N9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBpc0xvYWRpbmc9e2xvYWRTdGF0ZS5sb2FkaW5nfVxuICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbD17Zm9ybWF0Q3JlYXRlTGFiZWx9XG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICBpc09wZW5cbiAgICAgICAgb25DbG9zZU1lbnU9e29uQ2xvc2V9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e2FsbG93Q3VzdG9tVmFsdWV9XG4gICAgICAgIG9wdGlvbnM9e2xvYWRTdGF0ZS52YWx1ZSA/PyBbXX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNlbCA9ICh7IGxvYWRPcHRpb25zLCBmaWx0ZXJCeUxvYWRPcHRpb25zLCBhbGxvd0N1c3RvbVZhbHVlLCBvbkNoYW5nZSwgb25DbG9zZSB9OiBTZWxQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgLy8gdW5mb3J0dW5hdGVseSA8U2VnbWVudC8+IGFuZCA8U2VnbWVudEFzeW5jLz4gaGF2ZSBzb21ld2hhdCBkaWZmZXJlbnQgYmVoYXZpb3IsXG4gIC8vIHNvIHRoZSBzaW1wbGVzdCBhcHByb2FjaCB3YXMgdG8ganVzdCBjcmVhdGUgdHdvIHNlcGFyYXRlIHdyYXBwZXItY29tcG9uZW50c1xuICByZXR1cm4gZmlsdGVyQnlMb2FkT3B0aW9ucyA/IChcbiAgICA8U2VsUmVsb2FkIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uc30gYWxsb3dDdXN0b21WYWx1ZT17YWxsb3dDdXN0b21WYWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBvbkNsb3NlPXtvbkNsb3NlfSAvPlxuICApIDogKFxuICAgIDxTZWxTaW5nbGVMb2FkXG4gICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnN9XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlPXthbGxvd0N1c3RvbVZhbHVlfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAvPlxuICApO1xufTtcblxudHlwZSBJbnBQcm9wcyA9IHtcbiAgaW5pdGlhbFZhbHVlOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAobmV3VmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBJbnAgPSAoeyBpbml0aWFsVmFsdWUsIG9uQ2hhbmdlLCBvbkNsb3NlIH06IElucFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbY3VycmVudFZhbHVlLCBzZXRDdXJyZW50VmFsdWVdID0gdXNlU2hhZG93ZWRTdGF0ZShpbml0aWFsVmFsdWUpO1xuXG4gIHJldHVybiAoXG4gICAgPElucHV0XG4gICAgICBhdXRvRm9jdXNcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIHNwZWxsQ2hlY2s9e2ZhbHNlfVxuICAgICAgb25CbHVyPXtvbkNsb3NlfVxuICAgICAgb25LZXlEb3duPXsoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICBvbkNoYW5nZShjdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgfX1cbiAgICAgIHZhbHVlPXtjdXJyZW50VmFsdWV9XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IGRlZmF1bHRCdXR0b25DbGFzcyA9IGNzcyh7XG4gIHdpZHRoOiAnYXV0bycsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxufSk7XG5cbmV4cG9ydCBjb25zdCBTZWcgPSAoe1xuICB2YWx1ZSxcbiAgYnV0dG9uQ2xhc3NOYW1lLFxuICBsb2FkT3B0aW9ucyxcbiAgZmlsdGVyQnlMb2FkT3B0aW9ucyxcbiAgYWxsb3dDdXN0b21WYWx1ZSxcbiAgb25DaGFuZ2UsXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGlmICghaXNPcGVuKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY3goZGVmYXVsdEJ1dHRvbkNsYXNzLCBidXR0b25DbGFzc05hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8SW5saW5lTGFiZWxcbiAgICAgICAgYXM9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt2YWx1ZX1cbiAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAobG9hZE9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNlbFxuICAgICAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uc31cbiAgICAgICAgICBmaWx0ZXJCeUxvYWRPcHRpb25zPXtmaWx0ZXJCeUxvYWRPcHRpb25zID8/IGZhbHNlfVxuICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e2FsbG93Q3VzdG9tVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHYpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnBcbiAgICAgICAgICBpbml0aWFsVmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHsgdmFsdWU6IHYsIGxhYmVsOiB2IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBJbmZsdXhRdWVyeVRhZyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgQWRkQnV0dG9uIH0gZnJvbSAnLi9BZGRCdXR0b24nO1xuaW1wb3J0IHsgU2VnIH0gZnJvbSAnLi9TZWcnO1xuaW1wb3J0IHsgYWRqdXN0T3BlcmF0b3JJZk5lZWRlZCwgZ2V0Q29uZGl0aW9uLCBnZXRPcGVyYXRvciB9IGZyb20gJy4vdGFnVXRpbHMnO1xuaW1wb3J0IHsgdG9TZWxlY3RhYmxlVmFsdWUgfSBmcm9tICcuL3RvU2VsZWN0YWJsZVZhbHVlJztcblxudHlwZSBLbm93bk9wZXJhdG9yID0gJz0nIHwgJyE9JyB8ICc8PicgfCAnPCcgfCAnPicgfCAnPX4nIHwgJyF+JztcbmNvbnN0IGtub3duT3BlcmF0b3JzOiBLbm93bk9wZXJhdG9yW10gPSBbJz0nLCAnIT0nLCAnPD4nLCAnPCcsICc+JywgJz1+JywgJyF+J107XG5cbnR5cGUgS25vd25Db25kaXRpb24gPSAnQU5EJyB8ICdPUic7XG5jb25zdCBrbm93bkNvbmRpdGlvbnM6IEtub3duQ29uZGl0aW9uW10gPSBbJ0FORCcsICdPUiddO1xuXG5jb25zdCBvcGVyYXRvck9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxLbm93bk9wZXJhdG9yPj4gPSBrbm93bk9wZXJhdG9ycy5tYXAodG9TZWxlY3RhYmxlVmFsdWUpO1xuY29uc3QgY29uZGl0aXRvbk9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxLbm93bkNvbmRpdGlvbj4+ID0ga25vd25Db25kaXRpb25zLm1hcCh0b1NlbGVjdGFibGVWYWx1ZSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRhZ3M6IEluZmx1eFF1ZXJ5VGFnW107XG4gIG9uQ2hhbmdlOiAodGFnczogSW5mbHV4UXVlcnlUYWdbXSkgPT4gdm9pZDtcbiAgZ2V0VGFnS2V5T3B0aW9uczogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG4gIGdldFRhZ1ZhbHVlT3B0aW9uczogKGtleTogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbn07XG5cbnR5cGUgVGFnUHJvcHMgPSB7XG4gIHRhZzogSW5mbHV4UXVlcnlUYWc7XG4gIGlzRmlyc3Q6IGJvb2xlYW47XG4gIG9uUmVtb3ZlOiAoKSA9PiB2b2lkO1xuICBvbkNoYW5nZTogKHRhZzogSW5mbHV4UXVlcnlUYWcpID0+IHZvaWQ7XG4gIGdldFRhZ0tleU9wdGlvbnM6ICgpID0+IFByb21pc2U8c3RyaW5nW10+O1xuICBnZXRUYWdWYWx1ZU9wdGlvbnM6IChrZXk6IHN0cmluZykgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG59O1xuXG5jb25zdCBsb2FkQ29uZGl0aW9uT3B0aW9ucyA9ICgpID0+IFByb21pc2UucmVzb2x2ZShjb25kaXRpdG9uT3B0aW9ucyk7XG5cbmNvbnN0IGxvYWRPcGVyYXRvck9wdGlvbnMgPSAoKSA9PiBQcm9taXNlLnJlc29sdmUob3BlcmF0b3JPcHRpb25zKTtcblxuY29uc3QgVGFnID0gKHsgdGFnLCBpc0ZpcnN0LCBvblJlbW92ZSwgb25DaGFuZ2UsIGdldFRhZ0tleU9wdGlvbnMsIGdldFRhZ1ZhbHVlT3B0aW9ucyB9OiBUYWdQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qgb3BlcmF0b3IgPSBnZXRPcGVyYXRvcih0YWcpO1xuICBjb25zdCBjb25kaXRpb24gPSBnZXRDb25kaXRpb24odGFnLCBpc0ZpcnN0KTtcblxuICBjb25zdCBnZXRUYWdLZXlTZWdtZW50T3B0aW9ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0VGFnS2V5T3B0aW9ucygpXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBpbiB0aGlzIFVJIGVsZW1lbnQgd2UgYWRkIGEgc3BlY2lhbCBpdGVtIHRvIHRoZSBsaXN0IG9mIG9wdGlvbnMsXG4gICAgICAgIC8vIHRoYXQgaXMgdXNlZCB0byByZW1vdmUgdGhlIGVsZW1lbnQuXG4gICAgICAgIC8vIHRoaXMgY2F1c2VzIGEgcHJvYmxlbTogaWYgYGdldFRhZ0tleU9wdGlvbnNgIGZhaWxzIHdpdGggYW4gZXJyb3IsXG4gICAgICAgIC8vIHRoZSByZW1vdmUtZmlsdGVyIG9wdGlvbiBpcyBuZXZlciBhZGRlZCB0byB0aGUgbGlzdCxcbiAgICAgICAgLy8gYW5kIHRoZSBVSSBlbGVtZW50IGNhbiBub3QgYmUgcmVtb3ZlZC5cbiAgICAgICAgLy8gdG8gYXZvaWQgaXQsIHdlIGNhdGNoIGFueSBwb3RlbnRpYWwgZXJyb3JzIGNvbWluZyBmcm9tIGBnZXRUYWdLZXlPcHRpb25zYCxcbiAgICAgICAgLy8gbG9nIHRoZSBlcnJvciwgYW5kIHByZXRlbmQgdGhhdCB0aGUgbGlzdCBvZiBvcHRpb25zIGlzIGFuIGVtcHR5IGxpc3QuXG4gICAgICAgIC8vIHRoaXMgd2F5IHRoZSByZW1vdmUtaXRlbSBvcHRpb24gY2FuIGFsd2F5cyBiZSBhZGRlZCB0byB0aGUgbGlzdC5cbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHRhZ3MpID0+IFt7IGxhYmVsOiAnLS0gcmVtb3ZlIGZpbHRlciAtLScsIHZhbHVlOiB1bmRlZmluZWQgfSwgLi4udGFncy5tYXAodG9TZWxlY3RhYmxlVmFsdWUpXSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFnVmFsdWVTZWdtZW50T3B0aW9ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0VGFnVmFsdWVPcHRpb25zKHRhZy5rZXkpLnRoZW4oKHRhZ3MpID0+IHRhZ3MubWFwKHRvU2VsZWN0YWJsZVZhbHVlKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgIHtjb25kaXRpb24gIT0gbnVsbCAmJiAoXG4gICAgICAgIDxTZWdcbiAgICAgICAgICB2YWx1ZT17Y29uZGl0aW9ufVxuICAgICAgICAgIGxvYWRPcHRpb25zPXtsb2FkQ29uZGl0aW9uT3B0aW9uc31cbiAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4udGFnLCBjb25kaXRpb246IHYudmFsdWUgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8U2VnXG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgdmFsdWU9e3RhZy5rZXl9XG4gICAgICAgIGxvYWRPcHRpb25zPXtnZXRUYWdLZXlTZWdtZW50T3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdjtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb25SZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi50YWcsIGtleTogdmFsdWUgPz8gJycgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxTZWdcbiAgICAgICAgdmFsdWU9e29wZXJhdG9yfVxuICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wZXJhdG9yT3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9eyhvcCkgPT4ge1xuICAgICAgICAgIG9uQ2hhbmdlKHsgLi4udGFnLCBvcGVyYXRvcjogb3AudmFsdWUgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFNlZ1xuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIHZhbHVlPXt0YWcudmFsdWV9XG4gICAgICAgIGxvYWRPcHRpb25zPXtnZXRUYWdWYWx1ZVNlZ21lbnRPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHYudmFsdWUgPz8gJyc7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi50YWcsIHZhbHVlLCBvcGVyYXRvcjogYWRqdXN0T3BlcmF0b3JJZk5lZWRlZChvcGVyYXRvciwgdmFsdWUpIH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBUYWdzU2VjdGlvbiA9ICh7IHRhZ3MsIG9uQ2hhbmdlLCBnZXRUYWdLZXlPcHRpb25zLCBnZXRUYWdWYWx1ZU9wdGlvbnMgfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IG9uVGFnQ2hhbmdlID0gKG5ld1RhZzogSW5mbHV4UXVlcnlUYWcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuZXdUYWdzID0gdGFncy5tYXAoKHRhZywgaSkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ID09PSBpID8gbmV3VGFnIDogdGFnO1xuICAgIH0pO1xuICAgIG9uQ2hhbmdlKG5ld1RhZ3MpO1xuICB9O1xuXG4gIGNvbnN0IG9uVGFnUmVtb3ZlID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuZXdUYWdzID0gdGFncy5maWx0ZXIoKHQsIGkpID0+IGkgIT09IGluZGV4KTtcbiAgICBvbkNoYW5nZShuZXdUYWdzKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYWdLZXlTZWdtZW50T3B0aW9ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0VGFnS2V5T3B0aW9ucygpLnRoZW4oKHRhZ3MpID0+IHRhZ3MubWFwKHRvU2VsZWN0YWJsZVZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTmV3VGFnID0gKHRhZ0tleTogc3RyaW5nLCBpc0ZpcnN0OiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgbWluaW1hbFRhZzogSW5mbHV4UXVlcnlUYWcgPSB7XG4gICAgICBrZXk6IHRhZ0tleSxcbiAgICAgIHZhbHVlOiAnc2VsZWN0IHRhZyB2YWx1ZScsXG4gICAgfTtcblxuICAgIGNvbnN0IG5ld1RhZzogSW5mbHV4UXVlcnlUYWcgPSB7XG4gICAgICBrZXk6IG1pbmltYWxUYWcua2V5LFxuICAgICAgdmFsdWU6IG1pbmltYWxUYWcudmFsdWUsXG4gICAgICBvcGVyYXRvcjogZ2V0T3BlcmF0b3IobWluaW1hbFRhZyksXG4gICAgICBjb25kaXRpb246IGdldENvbmRpdGlvbihtaW5pbWFsVGFnLCBpc0ZpcnN0KSxcbiAgICB9O1xuXG4gICAgb25DaGFuZ2UoWy4uLnRhZ3MsIG5ld1RhZ10pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt0YWdzLm1hcCgodCwgaSkgPT4gKFxuICAgICAgICA8VGFnXG4gICAgICAgICAgdGFnPXt0fVxuICAgICAgICAgIGlzRmlyc3Q9e2kgPT09IDB9XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsobmV3VCkgPT4ge1xuICAgICAgICAgICAgb25UYWdDaGFuZ2UobmV3VCwgaSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgb25UYWdSZW1vdmUoaSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBnZXRUYWdLZXlPcHRpb25zPXtnZXRUYWdLZXlPcHRpb25zfVxuICAgICAgICAgIGdldFRhZ1ZhbHVlT3B0aW9ucz17Z2V0VGFnVmFsdWVPcHRpb25zfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8QWRkQnV0dG9uXG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgbG9hZE9wdGlvbnM9e2dldFRhZ0tleVNlZ21lbnRPcHRpb25zfVxuICAgICAgICBvbkFkZD17KHYpID0+IHtcbiAgICAgICAgICBhZGROZXdUYWcodiwgdGFncy5sZW5ndGggPT09IDApO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFF1ZXJ5UGFydERlZiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy9zdGF0ZS9xdWVyeV9wYXJ0JztcblxuaW1wb3J0IEluZmx1eFF1ZXJ5TW9kZWwgZnJvbSAnLi4vLi4vaW5mbHV4X3F1ZXJ5X21vZGVsJztcbmltcG9ydCBxdWVyeVBhcnQgZnJvbSAnLi4vLi4vcXVlcnlfcGFydCc7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeSwgSW5mbHV4UXVlcnlQYXJ0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBQYXJ0UGFyYW1zIH0gZnJvbSAnLi9QYXJ0TGlzdFNlY3Rpb24nO1xuaW1wb3J0IHsgdG9TZWxlY3RhYmxlVmFsdWUgfSBmcm9tICcuL3RvU2VsZWN0YWJsZVZhbHVlJztcbmltcG9ydCB7IHVud3JhcCB9IGZyb20gJy4vdW53cmFwJztcblxudHlwZSBDYXRlZ29yaWVzID0gUmVjb3JkPHN0cmluZywgUXVlcnlQYXJ0RGVmW10+O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3U2VsZWN0UGFydE9wdGlvbnMoKTogU2VsZWN0YWJsZVZhbHVlW10ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBDYXRlZ29yaWVzID0gcXVlcnlQYXJ0LmdldENhdGVnb3JpZXMoKTtcbiAgY29uc3Qgb3B0aW9uczogU2VsZWN0YWJsZVZhbHVlW10gPSBbXTtcblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY2F0ZWdvcmllcyk7XG5cbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbjogU2VsZWN0YWJsZVZhbHVlW10gPSBjYXRlZ29yaWVzW2tleV0ubWFwKCh4KSA9PiB0b1NlbGVjdGFibGVWYWx1ZSh4LnR5cGUpKTtcblxuICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICBsYWJlbDoga2V5LFxuICAgICAgb3B0aW9uczogY2hpbGRyZW4sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TmV3R3JvdXBCeVBhcnRPcHRpb25zKFxuICBxdWVyeTogSW5mbHV4UXVlcnksXG4gIGdldFRhZ0tleXM6ICgpID0+IFByb21pc2U8c3RyaW5nW10+XG4pOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4ge1xuICBjb25zdCB0YWdLZXlzID0gYXdhaXQgZ2V0VGFnS2V5cygpO1xuICBjb25zdCBxdWVyeUNvcHkgPSB7IC4uLnF1ZXJ5IH07IC8vIHRoZSBxdWVyeS1tb2RlbCBtdXRhdGVzIHRoZSBxdWVyeVxuICBjb25zdCBtb2RlbCA9IG5ldyBJbmZsdXhRdWVyeU1vZGVsKHF1ZXJ5Q29weSk7XG4gIGNvbnN0IG9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9IFtdO1xuICBpZiAoIW1vZGVsLmhhc0ZpbGwoKSkge1xuICAgIG9wdGlvbnMucHVzaCh0b1NlbGVjdGFibGVWYWx1ZSgnZmlsbChudWxsKScpKTtcbiAgfVxuICBpZiAoIW1vZGVsLmhhc0dyb3VwQnlUaW1lKCkpIHtcbiAgICBvcHRpb25zLnB1c2godG9TZWxlY3RhYmxlVmFsdWUoJ3RpbWUoJGludGVydmFsKScpKTtcbiAgfVxuICB0YWdLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIG9wdGlvbnMucHVzaCh0b1NlbGVjdGFibGVWYWx1ZShgdGFnKCR7a2V5fSlgKSk7XG4gIH0pO1xuICByZXR1cm4gb3B0aW9ucztcbn1cblxudHlwZSBQYXJ0ID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhcmFtczogUGFydFBhcmFtcztcbn07XG5cbmZ1bmN0aW9uIGdldFBhcnRQYXJhbXMocGFydDogSW5mbHV4UXVlcnlQYXJ0LCBkeW5hbWljUGFyYW1PcHRpb25zOiBNYXA8c3RyaW5nLCAoKSA9PiBQcm9taXNlPHN0cmluZ1tdPj4pOiBQYXJ0UGFyYW1zIHtcbiAgLy8gTk9URTogdGhlIHdheSB0aGUgc3lzdGVtIGlzIGNvbnN0cnVjdGVkLFxuICAvLyB0aGVyZSBhbHdheXMgY2FuIG9ubHkgYmUgb25lIHBvc3NpYmxlIGR5bmFtaWMtbG9va3VwXG4gIC8vIGZpZWxkLiBpbiBjYXNlIG9mIHNlbGVjdCBpdCBpcyB0aGUgZmllbGQsXG4gIC8vIGluIGNhc2Ugb2YgZ3JvdXAtYnkgaXQgaXMgdGhlIHRhZ1xuICBjb25zdCBkZWYgPSBxdWVyeVBhcnQuY3JlYXRlKHBhcnQpLmRlZjtcblxuICAvLyB3ZSBzd2l0Y2ggdGhlIG51bWJlcnMgdG8gc3RyaW5ncywgaXQgd2lsbCB3b3JrIHRoYXQgd2F5IHRvbyxcbiAgLy8gYW5kIGl0IG1ha2VzIHRoZSBjb2RlIHNpbXBsZXJcbiAgY29uc3QgcGFyYW1WYWx1ZXMgPSAocGFydC5wYXJhbXMgPz8gW10pLm1hcCgocCkgPT4gcC50b1N0cmluZygpKTtcblxuICBpZiAocGFyYW1WYWx1ZXMubGVuZ3RoICE9PSBkZWYucGFyYW1zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBxdWVyeS1zZWdtZW50Jyk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1WYWx1ZXMubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGVmUGFyYW0gPSBkZWYucGFyYW1zW2luZGV4XTtcbiAgICBpZiAoZGVmUGFyYW0uZHluYW1pY0xvb2t1cCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgb3B0aW9uczogdW53cmFwKGR5bmFtaWNQYXJhbU9wdGlvbnMuZ2V0KGAke2RlZi50eXBlfV8ke2luZGV4fWApKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGRlZlBhcmFtLm9wdGlvbnMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgb3B0aW9uczogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGRlZlBhcmFtLm9wdGlvbnMpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbCxcbiAgICAgIG9wdGlvbnM6IG51bGwsXG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGFydExpc3QoXG4gIHF1ZXJ5UGFydHM6IEluZmx1eFF1ZXJ5UGFydFtdLFxuICBkeW5hbWljUGFyYW1PcHRpb25zOiBNYXA8c3RyaW5nLCAoKSA9PiBQcm9taXNlPHN0cmluZ1tdPj5cbik6IFBhcnRbXSB7XG4gIHJldHVybiBxdWVyeVBhcnRzLm1hcCgocXApID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcXAudHlwZSxcbiAgICAgIHBhcmFtczogZ2V0UGFydFBhcmFtcyhxcCwgZHluYW1pY1BhcmFtT3B0aW9ucyksXG4gICAgfTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5leHBvcnQgY29uc3QgcGFkZGluZ1JpZ2h0Q2xhc3MgPSBjc3Moe1xuICBwYWRkaW5nUmlnaHQ6ICc0cHgnLFxufSk7XG4iLCJpbXBvcnQgeyBJbmZsdXhRdWVyeVRhZyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZnVuY3Rpb24gaXNSZWdleCh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIC9eXFwvLipcXC8kLy50ZXN0KHRleHQpO1xufVxuXG4vLyBGSVhNRTogc3luYyB0aGVzZSB0byB0aGUgcXVlcnktc3RyaW5nLWdlbmVyYXRpb24tY29kZVxuLy8gcHJvYmFibHkgaXQncyBpbiBpbmZsdXhfcXVlcnlfbW9kZWwudHNcbmV4cG9ydCBmdW5jdGlvbiBnZXRPcGVyYXRvcih0YWc6IEluZmx1eFF1ZXJ5VGFnKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRhZy5vcGVyYXRvciA/PyAoaXNSZWdleCh0YWcudmFsdWUpID8gJz1+JyA6ICc9Jyk7XG59XG5cbi8vIEZJWE1FOiBzeW5jIHRoZXNlIHRvIHRoZSBxdWVyeS1zdHJpbmctZ2VuZXJhdGlvbi1jb2RlXG4vLyBwcm9iYWJseSBpdCdzIGluIGluZmx1eF9xdWVyeV9tb2RlbC50c1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbmRpdGlvbih0YWc6IEluZmx1eFF1ZXJ5VGFnLCBpc0ZpcnN0OiBib29sZWFuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlzRmlyc3QgPyB1bmRlZmluZWQgOiB0YWcuY29uZGl0aW9uID8/ICdBTkQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0T3BlcmF0b3JJZk5lZWRlZChjdXJyZW50T3BlcmF0b3I6IHN0cmluZywgbmV3VGFnVmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGlzQ3VycmVudE9wZXJhdG9yUmVnZXggPSBjdXJyZW50T3BlcmF0b3IgPT09ICc9ficgfHwgY3VycmVudE9wZXJhdG9yID09PSAnIX4nO1xuICBjb25zdCBpc05ld1RhZ1ZhbHVlUmVnZXggPSBpc1JlZ2V4KG5ld1RhZ1ZhbHVlKTtcblxuICBpZiAoaXNOZXdUYWdWYWx1ZVJlZ2V4KSB7XG4gICAgcmV0dXJuIGlzQ3VycmVudE9wZXJhdG9yUmVnZXggPyBjdXJyZW50T3BlcmF0b3IgOiAnPX4nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpc0N1cnJlbnRPcGVyYXRvclJlZ2V4ID8gJz0nIDogY3VycmVudE9wZXJhdG9yO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvU2VsZWN0YWJsZVZhbHVlPFQgZXh0ZW5kcyBzdHJpbmc+KHQ6IFQpOiBTZWxlY3RhYmxlVmFsdWU8VD4ge1xuICByZXR1cm4geyBsYWJlbDogdCwgdmFsdWU6IHQgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1bndyYXA8VD4odmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogVCB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd2YWx1ZSBtdXN0IG5vdCBiZSBudWxsaXNoJyk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IFJlc3VsdEZvcm1hdCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IFJFU1VMVF9GT1JNQVRTOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8UmVzdWx0Rm9ybWF0Pj4gPSBbXG4gIHsgbGFiZWw6ICdUaW1lIHNlcmllcycsIHZhbHVlOiAndGltZV9zZXJpZXMnIH0sXG4gIHsgbGFiZWw6ICdUYWJsZScsIHZhbHVlOiAndGFibGUnIH0sXG4gIHsgbGFiZWw6ICdMb2dzJywgdmFsdWU6ICdsb2dzJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVTVUxUX0ZPUk1BVDogUmVzdWx0Rm9ybWF0ID0gJ3RpbWVfc2VyaWVzJztcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTaGFkb3dlZFN0YXRlPFQ+KG91dHNpZGVWYWw6IFQpOiBbVCwgKG5ld1ZhbDogVCkgPT4gdm9pZF0ge1xuICBjb25zdCBbY3VycmVudFZhbCwgc2V0Q3VycmVudFZhbF0gPSB1c2VTdGF0ZShvdXRzaWRlVmFsKTtcbiAgY29uc3QgcHJldk91dHNpZGVWYWwgPSB1c2VQcmV2aW91cyhvdXRzaWRlVmFsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlzT3V0c2lkZVZhbENoYW5nZWQgPSBwcmV2T3V0c2lkZVZhbCAhPT0gb3V0c2lkZVZhbDtcbiAgICAvLyBpZiB0aGUgdmFsdWUgY2hhbmdlcyBmcm9tIHRoZSBvdXRzaWRlLCB3ZSBhY2NlcHQgaXQgaW50byB0aGUgc3RhdGVcbiAgICAvLyAod2Ugb25seSBzZXQgaXQgaWYgaXQgaXMgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgdmFsdWUpXG4gICAgaWYgKGlzT3V0c2lkZVZhbENoYW5nZWQgJiYgY3VycmVudFZhbCAhPT0gb3V0c2lkZVZhbCkge1xuICAgICAgc2V0Q3VycmVudFZhbChvdXRzaWRlVmFsKTtcbiAgICB9XG4gIH0sIFtvdXRzaWRlVmFsLCBjdXJyZW50VmFsLCBwcmV2T3V0c2lkZVZhbF0pO1xuXG4gIHJldHVybiBbY3VycmVudFZhbCwgc2V0Q3VycmVudFZhbF07XG59XG4iLCJpbXBvcnQgeyBjbG9uZURlZXAsIGV4dGVuZCwgZ2V0LCBncm91cEJ5LCBoYXMsIGlzU3RyaW5nLCBtYXAgYXMgX21hcCwgb21pdCwgcGljaywgcmVkdWNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20sIE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuaW1wb3J0IHtcbiAgQW5ub3RhdGlvbkV2ZW50LFxuICBBcnJheVZlY3RvcixcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlFcnJvcixcbiAgRGF0YVF1ZXJ5UmVxdWVzdCxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBkYXRlTWF0aCxcbiAgZGF0ZVRpbWUsXG4gIEZpZWxkVHlwZSxcbiAgTG9hZGluZ1N0YXRlLFxuICBNZXRyaWNGaW5kVmFsdWUsXG4gIFF1ZXJ5UmVzdWx0TWV0YSxcbiAgU2NvcGVkVmFycyxcbiAgVElNRV9TRVJJRVNfVElNRV9GSUVMRF9OQU1FLFxuICBUSU1FX1NFUklFU19WQUxVRV9GSUVMRF9OQU1FLFxuICBUaW1lU2VyaWVzLFxuICBBbm5vdGF0aW9uUXVlcnlSZXF1ZXN0LFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2UsXG4gIERhdGFTb3VyY2VXaXRoQmFja2VuZCxcbiAgRmV0Y2hSZXNwb25zZSxcbiAgZnJhbWVUb01ldHJpY0ZpbmRWYWx1ZSxcbiAgZ2V0QmFja2VuZFNydixcbn0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiwgVGVtcGxhdGVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvdGVtcGxhdGluZy90ZW1wbGF0ZV9zcnYnO1xuXG5pbXBvcnQgeyBGbHV4UXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvRmx1eFF1ZXJ5RWRpdG9yJztcbmltcG9ydCBJbmZsdXhRdWVyeU1vZGVsIGZyb20gJy4vaW5mbHV4X3F1ZXJ5X21vZGVsJztcbmltcG9ydCBJbmZsdXhTZXJpZXMgZnJvbSAnLi9pbmZsdXhfc2VyaWVzJztcbmltcG9ydCB7IGJ1aWxkUmF3UXVlcnkgfSBmcm9tICcuL3F1ZXJ5VXRpbHMnO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnlCdWlsZGVyIH0gZnJvbSAnLi9xdWVyeV9idWlsZGVyJztcbmltcG9ydCBSZXNwb25zZVBhcnNlciBmcm9tICcuL3Jlc3BvbnNlX3BhcnNlcic7XG5pbXBvcnQgeyBJbmZsdXhPcHRpb25zLCBJbmZsdXhRdWVyeSwgSW5mbHV4VmVyc2lvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyB3ZSBkZXRlY3QgdGhlIGZpZWxkIHR5cGUgYmFzZWQgb24gdGhlIHZhbHVlLWFycmF5XG5mdW5jdGlvbiBnZXRGaWVsZFR5cGUodmFsdWVzOiB1bmtub3duW10pOiBGaWVsZFR5cGUge1xuICAvLyB0aGUgdmFsdWVzLWFycmF5IG1heSBjb250YWluIGEgbG90IG9mIG51bGxzLlxuICAvLyB3ZSBuZWVkIHRoZSBmaXJzdCBub3QtbnVsbCBpdGVtXG4gIGNvbnN0IGZpcnN0Tm90TnVsbCA9IHZhbHVlcy5maW5kKCh2KSA9PiB2ICE9PSBudWxsKTtcblxuICBpZiAoZmlyc3ROb3ROdWxsID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyB3ZSBjb3VsZCBub3QgZmluZCBhbnkgbm90LW51bGwgdmFsdWVzXG4gICAgcmV0dXJuIEZpZWxkVHlwZS5udW1iZXI7XG4gIH1cblxuICBjb25zdCB2YWx1ZVR5cGUgPSB0eXBlb2YgZmlyc3ROb3ROdWxsO1xuXG4gIHN3aXRjaCAodmFsdWVUeXBlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiBGaWVsZFR5cGUuc3RyaW5nO1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIEZpZWxkVHlwZS5ib29sZWFuO1xuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gRmllbGRUeXBlLm51bWJlcjtcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCBpbmZsdXhxbCB2YWx1ZXNcbiAgICAgIC8vIGNhbiBvbmx5IGJlIG51bWJlcnMsIHN0cmluZ3MgYW5kIGJvb2xlYW5zLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbmZsdXhRTDogaW52YWxpZCB2YWx1ZSB0eXBlICR7dmFsdWVUeXBlfWApO1xuICB9XG59XG5cbi8vIHRoaXMgY29udmVyc2lvbiBmdW5jdGlvbiBpcyBzcGVjaWFsaXplZCB0byB3b3JrIHdpdGggdGhlIHRpbWVzZXJpZXNcbi8vIGRhdGEgcmV0dXJuZWQgYnkgSW5mbHV4RGF0YXNvdXJjZS5nZXRUaW1lU2VyaWVzKClcbmZ1bmN0aW9uIHRpbWVTZXJpZXNUb0RhdGFGcmFtZSh0aW1lU2VyaWVzOiBUaW1lU2VyaWVzKTogRGF0YUZyYW1lIHtcbiAgY29uc3QgdGltZXM6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHZhbHVlczogdW5rbm93bltdID0gW107XG5cbiAgLy8gdGhlIGRhdGEgd2UgcHJvY2VzcyBoZXJlIGlzIG5vdCBjb3JyZWN0bHkgdHlwZWQuXG4gIC8vIHRoZSB0eXBlc2NyaXB0IHR5cGVzIHNheSBldmVyeSBkYXRhLXBvaW50IGlzIG51bWJlcnxudWxsLFxuICAvLyBidXQgaW4gZmFjdCBpdCBjYW4gYmUgc3RyaW5nIG9yIGJvb2xlYW4gdG9vLlxuXG4gIGNvbnN0IHBvaW50cyA9IHRpbWVTZXJpZXMuZGF0YXBvaW50cztcbiAgZm9yIChjb25zdCBwb2ludCBvZiBwb2ludHMpIHtcbiAgICB2YWx1ZXMucHVzaChwb2ludFswXSk7XG4gICAgdGltZXMucHVzaChwb2ludFsxXSBhcyBudW1iZXIpO1xuICB9XG5cbiAgY29uc3QgdGltZUZpZWxkID0ge1xuICAgIG5hbWU6IFRJTUVfU0VSSUVTX1RJTUVfRklFTERfTkFNRSxcbiAgICB0eXBlOiBGaWVsZFR5cGUudGltZSxcbiAgICBjb25maWc6IHt9LFxuICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yPG51bWJlcj4odGltZXMpLFxuICB9O1xuXG4gIGNvbnN0IHZhbHVlRmllbGQgPSB7XG4gICAgbmFtZTogVElNRV9TRVJJRVNfVkFMVUVfRklFTERfTkFNRSxcbiAgICB0eXBlOiBnZXRGaWVsZFR5cGUodmFsdWVzKSxcbiAgICBjb25maWc6IHtcbiAgICAgIGRpc3BsYXlOYW1lRnJvbURTOiB0aW1lU2VyaWVzLnRpdGxlLFxuICAgIH0sXG4gICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3I8dW5rbm93bj4odmFsdWVzKSxcbiAgICBsYWJlbHM6IHRpbWVTZXJpZXMudGFncyxcbiAgfTtcblxuICBjb25zdCBmaWVsZHMgPSBbdGltZUZpZWxkLCB2YWx1ZUZpZWxkXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IHRpbWVTZXJpZXMudGFyZ2V0LFxuICAgIHJlZklkOiB0aW1lU2VyaWVzLnJlZklkLFxuICAgIG1ldGE6IHRpbWVTZXJpZXMubWV0YSxcbiAgICBmaWVsZHMsXG4gICAgbGVuZ3RoOiB2YWx1ZXMubGVuZ3RoLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZsdXhEYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPEluZmx1eFF1ZXJ5LCBJbmZsdXhPcHRpb25zPiB7XG4gIHR5cGU6IHN0cmluZztcbiAgdXJsczogc3RyaW5nW107XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0YWJhc2U6IGFueTtcbiAgYmFzaWNBdXRoOiBhbnk7XG4gIHdpdGhDcmVkZW50aWFsczogYW55O1xuICBhY2Nlc3M6ICdkaXJlY3QnIHwgJ3Byb3h5JztcbiAgaW50ZXJ2YWw6IGFueTtcbiAgcmVzcG9uc2VQYXJzZXI6IGFueTtcbiAgaHR0cE1vZGU6IHN0cmluZztcbiAgaXNGbHV4OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzPEluZmx1eE9wdGlvbnM+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKVxuICApIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcblxuICAgIHRoaXMudHlwZSA9ICdpbmZsdXhkYic7XG4gICAgdGhpcy51cmxzID0gKGluc3RhbmNlU2V0dGluZ3MudXJsID8/ICcnKS5zcGxpdCgnLCcpLm1hcCgodXJsKSA9PiB7XG4gICAgICByZXR1cm4gdXJsLnRyaW0oKTtcbiAgICB9KTtcblxuICAgIHRoaXMudXNlcm5hbWUgPSBpbnN0YW5jZVNldHRpbmdzLnVzZXJuYW1lID8/ICcnO1xuICAgIHRoaXMucGFzc3dvcmQgPSBpbnN0YW5jZVNldHRpbmdzLnBhc3N3b3JkID8/ICcnO1xuICAgIHRoaXMubmFtZSA9IGluc3RhbmNlU2V0dGluZ3MubmFtZTtcbiAgICB0aGlzLmRhdGFiYXNlID0gaW5zdGFuY2VTZXR0aW5ncy5kYXRhYmFzZTtcbiAgICB0aGlzLmJhc2ljQXV0aCA9IGluc3RhbmNlU2V0dGluZ3MuYmFzaWNBdXRoO1xuICAgIHRoaXMud2l0aENyZWRlbnRpYWxzID0gaW5zdGFuY2VTZXR0aW5ncy53aXRoQ3JlZGVudGlhbHM7XG4gICAgdGhpcy5hY2Nlc3MgPSBpbnN0YW5jZVNldHRpbmdzLmFjY2VzcztcbiAgICBjb25zdCBzZXR0aW5nc0RhdGEgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhIHx8ICh7fSBhcyBJbmZsdXhPcHRpb25zKTtcbiAgICB0aGlzLmludGVydmFsID0gc2V0dGluZ3NEYXRhLnRpbWVJbnRlcnZhbDtcbiAgICB0aGlzLmh0dHBNb2RlID0gc2V0dGluZ3NEYXRhLmh0dHBNb2RlIHx8ICdHRVQnO1xuICAgIHRoaXMucmVzcG9uc2VQYXJzZXIgPSBuZXcgUmVzcG9uc2VQYXJzZXIoKTtcbiAgICB0aGlzLmlzRmx1eCA9IHNldHRpbmdzRGF0YS52ZXJzaW9uID09PSBJbmZsdXhWZXJzaW9uLkZsdXg7XG5cbiAgICBpZiAodGhpcy5pc0ZsdXgpIHtcbiAgICAgIC8vIFdoZW4gZmx1eCwgdXNlIGFuIGFubm90YXRpb24gcHJvY2Vzc29yIHJhdGhlciB0aGFuIHRoZSBgYW5ub3RhdGlvblF1ZXJ5YCBsaWZlY3ljbGVcbiAgICAgIHRoaXMuYW5ub3RhdGlvbnMgPSB7XG4gICAgICAgIFF1ZXJ5RWRpdG9yOiBGbHV4UXVlcnlFZGl0b3IsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHF1ZXJ5KHJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8SW5mbHV4UXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIC8vIGZvciBub3QtZmx1eCBxdWVyaWVzIHdlIGNhbGwgYHRoaXMuY2xhc3NpY1F1ZXJ5YCwgYW5kIHRoYXRcbiAgICAvLyBoYW5kbGVzIHRoZSBpcy1oaWRkZW4gc2l0dWF0aW9uLlxuICAgIC8vIGZvciB0aGUgZmx1eC1jYXNlLCB3ZSBkbyB0aGUgZmlsdGVyaW5nIGhlcmVcbiAgICBjb25zdCBmaWx0ZXJlZFJlcXVlc3QgPSB7XG4gICAgICAuLi5yZXF1ZXN0LFxuICAgICAgdGFyZ2V0czogcmVxdWVzdC50YXJnZXRzLmZpbHRlcigodCkgPT4gdC5oaWRlICE9PSB0cnVlKSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaXNGbHV4KSB7XG4gICAgICByZXR1cm4gc3VwZXIucXVlcnkoZmlsdGVyZWRSZXF1ZXN0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc01pZ3JhdGlvblRvZ2dsZU9uQW5kSXNBY2Nlc3NQcm94eSgpKSB7XG4gICAgICByZXR1cm4gc3VwZXIucXVlcnkoZmlsdGVyZWRSZXF1ZXN0KS5waXBlKFxuICAgICAgICBtYXAoKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0luZmx1eERCIEVycm9yOiAnICsgcmVzLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHJlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc2VyaWVzTGlzdDogYW55W10gPSBbXTtcblxuICAgICAgICAgIGNvbnN0IGdyb3VwZWRGcmFtZXMgPSBncm91cEJ5KHJlcy5kYXRhLCAoeCkgPT4geC5yZWZJZCk7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGdyb3VwZWRGcmFtZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUmVxdWVzdC50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZEZyYW1lcyA9IGdyb3VwZWRGcmFtZXNbdGFyZ2V0LnJlZklkXSA/PyBbXTtcbiAgICAgICAgICAgICAgc3dpdGNoICh0YXJnZXQucmVzdWx0Rm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbG9ncyc6XG4gICAgICAgICAgICAgICAgY2FzZSAndGFibGUnOlxuICAgICAgICAgICAgICAgICAgc2VyaWVzTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlUGFyc2VyLmdldFRhYmxlKGZpbHRlcmVkRnJhbWVzLCB0YXJnZXQsIHtcbiAgICAgICAgICAgICAgICAgICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogdGFyZ2V0LnJlc3VsdEZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkRnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcmllc0xpc3QucHVzaChmaWx0ZXJlZEZyYW1lc1tpXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7IGRhdGE6IHNlcmllc0xpc3QgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgdG8gY2xhc3NpYyBxdWVyeSBzdXBwb3J0XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NpY1F1ZXJ5KHJlcXVlc3QpO1xuICB9XG5cbiAgZ2V0UXVlcnlEaXNwbGF5VGV4dChxdWVyeTogSW5mbHV4UXVlcnkpIHtcbiAgICBpZiAodGhpcy5pc0ZsdXgpIHtcbiAgICAgIHJldHVybiBxdWVyeS5xdWVyeTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBJbmZsdXhRdWVyeU1vZGVsKHF1ZXJ5KS5yZW5kZXIoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIHF1ZXJ5IHNob3VsZCBiZSBza2lwcGVkXG4gICAqL1xuICBmaWx0ZXJRdWVyeShxdWVyeTogSW5mbHV4UXVlcnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc0ZsdXgpIHtcbiAgICAgIHJldHVybiAhIXF1ZXJ5LnF1ZXJ5O1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFwcGx5VGVtcGxhdGVWYXJpYWJsZXMocXVlcnk6IEluZmx1eFF1ZXJ5LCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgLy8gV2Ugd2FudCB0byBpbnRlcnBvbGF0ZSB0aGVzZSB2YXJpYWJsZXMgb24gYmFja2VuZFxuICAgIGNvbnN0IHsgX19pbnRlcnZhbCwgX19pbnRlcnZhbF9tcywgLi4ucmVzdCB9ID0gc2NvcGVkVmFycztcblxuICAgIGlmICh0aGlzLmlzRmx1eCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIHF1ZXJ5OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkucXVlcnkgPz8gJycsIHJlc3QpLCAvLyBUaGUgcmF3IHF1ZXJ5IHRleHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5pbmZsdXhkYkJhY2tlbmRNaWdyYXRpb24gJiYgdGhpcy5hY2Nlc3MgPT09ICdwcm94eScpIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5hcHBseVZhcmlhYmxlcyhxdWVyeSwgc2NvcGVkVmFycywgcmVzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB1bmNoYW5nZWQgcHJlIDcuMSBxdWVyeSBpbXBsZW1lbnRhdGlvblxuICAgKi9cbiAgY2xhc3NpY1F1ZXJ5KG9wdGlvbnM6IGFueSk6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBsZXQgdGltZUZpbHRlciA9IHRoaXMuZ2V0VGltZUZpbHRlcihvcHRpb25zKTtcbiAgICBjb25zdCBzY29wZWRWYXJzID0gb3B0aW9ucy5zY29wZWRWYXJzO1xuICAgIGNvbnN0IHRhcmdldHMgPSBjbG9uZURlZXAob3B0aW9ucy50YXJnZXRzKTtcbiAgICBjb25zdCBxdWVyeVRhcmdldHM6IGFueVtdID0gW107XG5cbiAgICBsZXQgaSwgeTtcblxuICAgIGxldCBhbGxRdWVyaWVzID0gX21hcCh0YXJnZXRzLCAodGFyZ2V0KSA9PiB7XG4gICAgICBpZiAodGFyZ2V0LmhpZGUpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBxdWVyeVRhcmdldHMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICBzY29wZWRWYXJzLmludGVydmFsID0gc2NvcGVkVmFycy5fX2ludGVydmFsO1xuXG4gICAgICByZXR1cm4gbmV3IEluZmx1eFF1ZXJ5TW9kZWwodGFyZ2V0LCB0aGlzLnRlbXBsYXRlU3J2LCBzY29wZWRWYXJzKS5yZW5kZXIodHJ1ZSk7XG4gICAgfSkucmVkdWNlKChhY2MsIGN1cnJlbnQpID0+IHtcbiAgICAgIGlmIChjdXJyZW50ICE9PSAnJykge1xuICAgICAgICBhY2MgKz0gJzsnICsgY3VycmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSk7XG5cbiAgICBpZiAoYWxsUXVlcmllcyA9PT0gJycpIHtcbiAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdIH0pO1xuICAgIH1cblxuICAgIC8vIGFkZCBnbG9iYWwgYWRob2MgZmlsdGVycyB0byB0aW1lRmlsdGVyXG4gICAgY29uc3QgYWRob2NGaWx0ZXJzID0gdGhpcy50ZW1wbGF0ZVNydi5nZXRBZGhvY0ZpbHRlcnModGhpcy5uYW1lKTtcbiAgICBpZiAoYWRob2NGaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRtcFF1ZXJ5ID0gbmV3IEluZmx1eFF1ZXJ5TW9kZWwoeyByZWZJZDogJ0EnIH0sIHRoaXMudGVtcGxhdGVTcnYsIHNjb3BlZFZhcnMpO1xuICAgICAgdGltZUZpbHRlciArPSAnIEFORCAnICsgdG1wUXVlcnkucmVuZGVyQWRob2NGaWx0ZXJzKGFkaG9jRmlsdGVycyk7XG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBncmFmYW5hIHZhcmlhYmxlc1xuICAgIHNjb3BlZFZhcnMudGltZUZpbHRlciA9IHsgdmFsdWU6IHRpbWVGaWx0ZXIgfTtcblxuICAgIC8vIHJlcGxhY2UgdGVtcGxhdGVkIHZhcmlhYmxlc1xuICAgIGFsbFF1ZXJpZXMgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoYWxsUXVlcmllcywgc2NvcGVkVmFycyk7XG5cbiAgICByZXR1cm4gdGhpcy5fc2VyaWVzUXVlcnkoYWxsUXVlcmllcywgb3B0aW9ucykucGlwZShcbiAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5yZXN1bHRzKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZGF0YTogW10gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlcmllc0xpc3QgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGEucmVzdWx0c1tpXTtcbiAgICAgICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnNlcmllcykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gcXVlcnlUYXJnZXRzW2ldO1xuICAgICAgICAgIGxldCBhbGlhcyA9IHRhcmdldC5hbGlhcztcbiAgICAgICAgICBpZiAoYWxpYXMpIHtcbiAgICAgICAgICAgIGFsaWFzID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHRhcmdldC5hbGlhcywgb3B0aW9ucy5zY29wZWRWYXJzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBtZXRhOiBRdWVyeVJlc3VsdE1ldGEgPSB7XG4gICAgICAgICAgICBleGVjdXRlZFF1ZXJ5U3RyaW5nOiBkYXRhLmV4ZWN1dGVkUXVlcnlTdHJpbmcsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IGluZmx1eFNlcmllcyA9IG5ldyBJbmZsdXhTZXJpZXMoe1xuICAgICAgICAgICAgcmVmSWQ6IHRhcmdldC5yZWZJZCxcbiAgICAgICAgICAgIHNlcmllczogZGF0YS5yZXN1bHRzW2ldLnNlcmllcyxcbiAgICAgICAgICAgIGFsaWFzOiBhbGlhcyxcbiAgICAgICAgICAgIG1ldGEsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKHRhcmdldC5yZXN1bHRGb3JtYXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvZ3MnOlxuICAgICAgICAgICAgICBtZXRhLnByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlID0gJ2xvZ3MnO1xuICAgICAgICAgICAgY2FzZSAndGFibGUnOiB7XG4gICAgICAgICAgICAgIHNlcmllc0xpc3QucHVzaChpbmZsdXhTZXJpZXMuZ2V0VGFibGUoKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lU2VyaWVzID0gaW5mbHV4U2VyaWVzLmdldFRpbWVTZXJpZXMoKTtcbiAgICAgICAgICAgICAgZm9yICh5ID0gMDsgeSA8IHRpbWVTZXJpZXMubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgICAgICBzZXJpZXNMaXN0LnB1c2godGltZVNlcmllc1RvRGF0YUZyYW1lKHRpbWVTZXJpZXNbeV0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBkYXRhOiBzZXJpZXNMaXN0IH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhc3luYyBhbm5vdGF0aW9uUXVlcnkob3B0aW9uczogQW5ub3RhdGlvblF1ZXJ5UmVxdWVzdDxhbnk+KTogUHJvbWlzZTxBbm5vdGF0aW9uRXZlbnRbXT4ge1xuICAgIGlmICh0aGlzLmlzRmx1eCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgbWVzc2FnZTogJ0ZsdXggcmVxdWlyZXMgdGhlIHN0YW5kYXJkIGFubm90YXRpb24gcXVlcnknLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSW5mbHV4UUwgcHV0cyBhIHF1ZXJ5IHN0cmluZyBvbiB0aGUgYW5ub3RhdGlvblxuICAgIGlmICghb3B0aW9ucy5hbm5vdGF0aW9uLnF1ZXJ5KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICBtZXNzYWdlOiAnUXVlcnkgbWlzc2luZyBpbiBhbm5vdGF0aW9uIGRlZmluaXRpb24nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5pbmZsdXhkYkJhY2tlbmRNaWdyYXRpb24gJiYgdGhpcy5hY2Nlc3MgPT09ICdwcm94eScpIHtcbiAgICAgIC8vIFdlIHdhbnQgdG8gc2VuZCBvdXIgcXVlcnkgdG8gdGhlIGJhY2tlbmQgYXMgYSByYXcgcXVlcnlcbiAgICAgIGNvbnN0IHRhcmdldDogSW5mbHV4UXVlcnkgPSB7XG4gICAgICAgIHJlZklkOiAnbWV0cmljRmluZFF1ZXJ5JyxcbiAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgcXVlcnk6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLmFubm90YXRpb24ucXVlcnkgPz8gJycpLFxuICAgICAgICByYXdRdWVyeTogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgICAuZmV0Y2g8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4oe1xuICAgICAgICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZnJvbTogb3B0aW9ucy5yYW5nZS5mcm9tLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgICB0bzogb3B0aW9ucy5yYW5nZS50by52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgcXVlcmllczogW3RhcmdldF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVxdWVzdElkOiBvcHRpb25zLmFubm90YXRpb24ubmFtZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICBhc3luYyAocmVzOiBGZXRjaFJlc3BvbnNlPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KSA9PlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVzcG9uc2VQYXJzZXIudHJhbnNmb3JtQW5ub3RhdGlvblJlc3BvbnNlKG9wdGlvbnMsIHJlcywgdGFyZ2V0KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdGltZUZpbHRlciA9IHRoaXMuZ2V0VGltZUZpbHRlcih7IHJhbmdlUmF3OiBvcHRpb25zLnJhbmdlUmF3LCB0aW1lem9uZTogb3B0aW9ucy5kYXNoYm9hcmQudGltZXpvbmUgfSk7XG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5hbm5vdGF0aW9uLnF1ZXJ5LnJlcGxhY2UoJyR0aW1lRmlsdGVyJywgdGltZUZpbHRlcik7XG4gICAgcXVlcnkgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnksIHVuZGVmaW5lZCwgJ3JlZ2V4Jyk7XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLl9zZXJpZXNRdWVyeShxdWVyeSwgb3B0aW9ucykpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnJlc3VsdHMgfHwgIWRhdGEucmVzdWx0c1swXSkge1xuICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6ICdObyByZXN1bHRzIGluIHJlc3BvbnNlIGZyb20gSW5mbHV4REInIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEluZmx1eFNlcmllcyh7XG4gICAgICAgIHNlcmllczogZGF0YS5yZXN1bHRzWzBdLnNlcmllcyxcbiAgICAgICAgYW5ub3RhdGlvbjogb3B0aW9ucy5hbm5vdGF0aW9uLFxuICAgICAgfSkuZ2V0QW5ub3RhdGlvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRhcmdldENvbnRhaW5zVGVtcGxhdGUodGFyZ2V0OiBhbnkpIHtcbiAgICAvLyBmb3IgZmx1eC1tb2RlIHdlIGp1c3QgdGFrZSB0YXJnZXQucXVlcnksXG4gICAgLy8gZm9yIGluZmx1eHFsLW1vZGUgd2UgdXNlIEluZmx1eFF1ZXJ5TW9kZWwgdG8gY3JlYXRlIHRoZSB0ZXh0LXJlcHJlc2VudGF0aW9uXG4gICAgY29uc3QgcXVlcnlUZXh0ID0gdGhpcy5pc0ZsdXggPyB0YXJnZXQucXVlcnkgOiBidWlsZFJhd1F1ZXJ5KHRhcmdldCk7XG5cbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5jb250YWluc1RlbXBsYXRlKHF1ZXJ5VGV4dCk7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyhxdWVyaWVzOiBJbmZsdXhRdWVyeVtdLCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogSW5mbHV4UXVlcnlbXSB7XG4gICAgaWYgKCFxdWVyaWVzIHx8IHF1ZXJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJpZXMubWFwKChxdWVyeSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNGbHV4KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgICBxdWVyeTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnF1ZXJ5ID8/ICcnLCBzY29wZWRWYXJzKSwgLy8gVGhlIHJhdyBxdWVyeSB0ZXh0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAuLi50aGlzLmFwcGx5VmFyaWFibGVzKHF1ZXJ5LCBzY29wZWRWYXJzLCBzY29wZWRWYXJzKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBhcHBseVZhcmlhYmxlcyhxdWVyeTogSW5mbHV4UXVlcnksIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMsIHJlc3Q6IFNjb3BlZFZhcnMpIHtcbiAgICBjb25zdCBleHBhbmRlZFF1ZXJ5ID0geyAuLi5xdWVyeSB9O1xuICAgIGlmIChxdWVyeS5ncm91cEJ5KSB7XG4gICAgICBleHBhbmRlZFF1ZXJ5Lmdyb3VwQnkgPSBxdWVyeS5ncm91cEJ5Lm1hcCgoZ3JvdXBCeSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmdyb3VwQnksXG4gICAgICAgICAgcGFyYW1zOiBncm91cEJ5LnBhcmFtcz8ubWFwKChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShwYXJhbS50b1N0cmluZygpLCB1bmRlZmluZWQsICdyZWdleCcpO1xuICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5LnNlbGVjdCkge1xuICAgICAgZXhwYW5kZWRRdWVyeS5zZWxlY3QgPSBxdWVyeS5zZWxlY3QubWFwKChzZWxlY3RzKSA9PiB7XG4gICAgICAgIHJldHVybiBzZWxlY3RzLm1hcCgoc2VsZWN0OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc2VsZWN0LFxuICAgICAgICAgICAgcGFyYW1zOiBzZWxlY3QucGFyYW1zPy5tYXAoKHBhcmFtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShwYXJhbS50b1N0cmluZygpLCB1bmRlZmluZWQsICdyZWdleCcpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnkudGFncykge1xuICAgICAgZXhwYW5kZWRRdWVyeS50YWdzID0gcXVlcnkudGFncy5tYXAoKHRhZykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnRhZyxcbiAgICAgICAgICB2YWx1ZTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHRhZy52YWx1ZSwgdW5kZWZpbmVkLCAncmVnZXgnKSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5leHBhbmRlZFF1ZXJ5LFxuICAgICAgcXVlcnk6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5xdWVyeSA/PyAnJywgcmVzdCksIC8vIFRoZSByYXcgcXVlcnkgdGV4dFxuICAgICAgYWxpYXM6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5hbGlhcyA/PyAnJywgc2NvcGVkVmFycyksXG4gICAgICBsaW1pdDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LmxpbWl0Py50b1N0cmluZygpID8/ICcnLCBzY29wZWRWYXJzLCAncmVnZXgnKSxcbiAgICAgIG1lYXN1cmVtZW50OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkubWVhc3VyZW1lbnQgPz8gJycsIHNjb3BlZFZhcnMsICdyZWdleCcpLFxuICAgICAgcG9saWN5OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkucG9saWN5ID8/ICcnLCBzY29wZWRWYXJzLCAncmVnZXgnKSxcbiAgICAgIHNsaW1pdDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnNsaW1pdD8udG9TdHJpbmcoKSA/PyAnJywgc2NvcGVkVmFycywgJ3JlZ2V4JyksXG4gICAgICB0ejogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnR6ID8/ICcnLCBzY29wZWRWYXJzKSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgbWV0cmljRmluZFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPE1ldHJpY0ZpbmRWYWx1ZVtdPiB7XG4gICAgaWYgKHRoaXMuaXNGbHV4IHx8IHRoaXMuaXNNaWdyYXRpb25Ub2dnbGVPbkFuZElzQWNjZXNzUHJveHkoKSkge1xuICAgICAgY29uc3QgdGFyZ2V0OiBJbmZsdXhRdWVyeSA9IHtcbiAgICAgICAgcmVmSWQ6ICdtZXRyaWNGaW5kUXVlcnknLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgcmF3UXVlcnk6IHRydWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIHN1cGVyLnF1ZXJ5KHtcbiAgICAgICAgICAuLi5vcHRpb25zLCAvLyBpbmNsdWRlcyAncmFuZ2UnXG4gICAgICAgICAgdGFyZ2V0czogW3RhcmdldF0sXG4gICAgICAgIH0gYXMgRGF0YVF1ZXJ5UmVxdWVzdClcbiAgICAgICkudGhlbigocnNwKSA9PiB7XG4gICAgICAgIGlmIChyc3AuZGF0YT8ubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZyYW1lVG9NZXRyaWNGaW5kVmFsdWUocnNwLmRhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeSwgdW5kZWZpbmVkLCAncmVnZXgnKTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuX3Nlcmllc1F1ZXJ5KGludGVycG9sYXRlZCwgb3B0aW9ucykpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlUGFyc2VyLnBhcnNlKHF1ZXJ5LCByZXNwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRhZ0tleXMob3B0aW9uczogYW55ID0ge30pIHtcbiAgICBjb25zdCBxdWVyeUJ1aWxkZXIgPSBuZXcgSW5mbHV4UXVlcnlCdWlsZGVyKHsgbWVhc3VyZW1lbnQ6IG9wdGlvbnMubWVhc3VyZW1lbnQgfHwgJycsIHRhZ3M6IFtdIH0sIHRoaXMuZGF0YWJhc2UpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gcXVlcnlCdWlsZGVyLmJ1aWxkRXhwbG9yZVF1ZXJ5KCdUQUdfS0VZUycpO1xuICAgIHJldHVybiB0aGlzLm1ldHJpY0ZpbmRRdWVyeShxdWVyeSwgb3B0aW9ucyk7XG4gIH1cblxuICBnZXRUYWdWYWx1ZXMob3B0aW9uczogYW55ID0ge30pIHtcbiAgICBjb25zdCBxdWVyeUJ1aWxkZXIgPSBuZXcgSW5mbHV4UXVlcnlCdWlsZGVyKHsgbWVhc3VyZW1lbnQ6IG9wdGlvbnMubWVhc3VyZW1lbnQgfHwgJycsIHRhZ3M6IFtdIH0sIHRoaXMuZGF0YWJhc2UpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gcXVlcnlCdWlsZGVyLmJ1aWxkRXhwbG9yZVF1ZXJ5KCdUQUdfVkFMVUVTJywgb3B0aW9ucy5rZXkpO1xuICAgIHJldHVybiB0aGlzLm1ldHJpY0ZpbmRRdWVyeShxdWVyeSwgb3B0aW9ucyk7XG4gIH1cblxuICBfc2VyaWVzUXVlcnkocXVlcnk6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHJldHVybiBvZih7IHJlc3VsdHM6IFtdIH0pO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmFuZ2UpIHtcbiAgICAgIGNvbnN0IHRpbWVGaWx0ZXIgPSB0aGlzLmdldFRpbWVGaWx0ZXIoeyByYW5nZVJhdzogb3B0aW9ucy5yYW5nZSwgdGltZXpvbmU6IG9wdGlvbnMudGltZXpvbmUgfSk7XG4gICAgICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoJyR0aW1lRmlsdGVyJywgdGltZUZpbHRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2luZmx1eFJlcXVlc3QodGhpcy5odHRwTW9kZSwgJy9xdWVyeScsIHsgcTogcXVlcnksIGVwb2NoOiAnbXMnIH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgc2VyaWFsaXplUGFyYW1zKHBhcmFtczogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVkdWNlKFxuICAgICAgcGFyYW1zLFxuICAgICAgKG1lbW8sIHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgfVxuICAgICAgICBtZW1vLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICB9LFxuICAgICAgW10gYXMgc3RyaW5nW11cbiAgICApLmpvaW4oJyYnKTtcbiAgfVxuXG4gIHRlc3REYXRhc291cmNlKCkge1xuICAgIGlmICh0aGlzLmlzRmx1eCkge1xuICAgICAgLy8gVE9ETzogZXZlbnR1YWxseSB1c2UgdGhlIHJlYWwgL2hlYWx0aCBlbmRwb2ludFxuICAgICAgY29uc3QgcmVxdWVzdDogRGF0YVF1ZXJ5UmVxdWVzdDxJbmZsdXhRdWVyeT4gPSB7XG4gICAgICAgIHRhcmdldHM6IFt7IHJlZklkOiAndGVzdCcsIHF1ZXJ5OiAnYnVja2V0cygpJyB9XSxcbiAgICAgICAgcmVxdWVzdElkOiBgJHt0aGlzLmlkfS1oZWFsdGgtJHt1dWlkdjQoKX1gLFxuICAgICAgICBkYXNoYm9hcmRJZDogMCxcbiAgICAgICAgcGFuZWxJZDogMCxcbiAgICAgICAgaW50ZXJ2YWw6ICcxbScsXG4gICAgICAgIGludGVydmFsTXM6IDYwMDAwLFxuICAgICAgICBtYXhEYXRhUG9pbnRzOiA0MjMsXG4gICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgZnJvbTogZGF0ZVRpbWUoMTAwMCksXG4gICAgICAgICAgdG86IGRhdGVUaW1lKDIwMDApLFxuICAgICAgICB9LFxuICAgICAgfSBhcyBEYXRhUXVlcnlSZXF1ZXN0PEluZmx1eFF1ZXJ5PjtcblxuICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oc3VwZXIucXVlcnkocmVxdWVzdCkpXG4gICAgICAgIC50aGVuKChyZXM6IERhdGFRdWVyeVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5kYXRhIHx8IHJlcy5zdGF0ZSAhPT0gTG9hZGluZ1N0YXRlLkRvbmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZmx1eERCIEVycm9yJywgcmVzKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogJ0Vycm9yIHJlYWRpbmcgSW5mbHV4REInIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcmVzLmRhdGFbMF07XG4gICAgICAgICAgaWYgKGZpcnN0ICYmIGZpcnN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnc3VjY2VzcycsIG1lc3NhZ2U6IGAke2ZpcnN0Lmxlbmd0aH0gYnVja2V0cyBmb3VuZGAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5lcnJvcignSW5mbHV4REIgRXJyb3InLCByZXMpO1xuICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogJ0Vycm9yIHJlYWRpbmcgYnVja2V0cycgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZmx1eERCIEVycm9yJywgZXJyKTtcbiAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdlcnJvcicsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTWlncmF0aW9uVG9nZ2xlT25BbmRJc0FjY2Vzc1Byb3h5KCkpIHtcbiAgICAgIGNvbnN0IHRhcmdldDogSW5mbHV4UXVlcnkgPSB7XG4gICAgICAgIHJlZklkOiAnbWV0cmljRmluZFF1ZXJ5JyxcbiAgICAgICAgcXVlcnk6ICdTSE9XIFRBRyBLRVlTJyxcbiAgICAgICAgcmF3UXVlcnk6IHRydWUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oc3VwZXIucXVlcnkoeyB0YXJnZXRzOiBbdGFyZ2V0XSB9IGFzIERhdGFRdWVyeVJlcXVlc3QpKVxuICAgICAgICAudGhlbigocmVzOiBEYXRhUXVlcnlSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzIHx8ICFyZXMuZGF0YSB8fCByZXMuc3RhdGUgIT09IExvYWRpbmdTdGF0ZS5Eb25lKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIEluZmx1eERCLicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzLmRhdGE/Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdEYXRhIHNvdXJjZSBpcyB3b3JraW5nLicgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIEluZmx1eERCLCBidXQgbm8gdGFncyBmb3VuZC4nLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdlcnJvcicsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5QnVpbGRlciA9IG5ldyBJbmZsdXhRdWVyeUJ1aWxkZXIoeyBtZWFzdXJlbWVudDogJycsIHRhZ3M6IFtdIH0sIHRoaXMuZGF0YWJhc2UpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gcXVlcnlCdWlsZGVyLmJ1aWxkRXhwbG9yZVF1ZXJ5KCdSRVRFTlRJT04gUE9MSUNJRVMnKTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuX3Nlcmllc1F1ZXJ5KHF1ZXJ5KSlcbiAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IGdldChyZXMsICdyZXN1bHRzWzBdLmVycm9yJyk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogZXJyb3IgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdzdWNjZXNzJywgbWVzc2FnZTogJ0RhdGEgc291cmNlIGlzIHdvcmtpbmcnIH07XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdlcnJvcicsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH07XG4gICAgICB9KTtcbiAgfVxuXG4gIF9pbmZsdXhSZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgZGF0YTogYW55LCBvcHRpb25zPzogYW55KSB7XG4gICAgY29uc3QgY3VycmVudFVybCA9IHRoaXMudXJscy5zaGlmdCgpITtcbiAgICB0aGlzLnVybHMucHVzaChjdXJyZW50VXJsKTtcblxuICAgIGNvbnN0IHBhcmFtczogYW55ID0ge307XG5cbiAgICBpZiAodGhpcy51c2VybmFtZSkge1xuICAgICAgcGFyYW1zLnUgPSB0aGlzLnVzZXJuYW1lO1xuICAgICAgcGFyYW1zLnAgPSB0aGlzLnBhc3N3b3JkO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGF0YWJhc2UpIHtcbiAgICAgIHBhcmFtcy5kYiA9IG9wdGlvbnMuZGF0YWJhc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGFiYXNlKSB7XG4gICAgICBwYXJhbXMuZGIgPSB0aGlzLmRhdGFiYXNlO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcSB9ID0gZGF0YTtcblxuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiBoYXMoZGF0YSwgJ3EnKSkge1xuICAgICAgLy8gdmVyYiBpcyBQT1NUIGFuZCAncScgcGFyYW0gaXMgZGVmaW5lZFxuICAgICAgZXh0ZW5kKHBhcmFtcywgb21pdChkYXRhLCBbJ3EnXSkpO1xuICAgICAgZGF0YSA9IHRoaXMuc2VyaWFsaXplUGFyYW1zKHBpY2soZGF0YSwgWydxJ10pKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIC8vIHZlcmIgaXMgR0VULCBvciBQT1NUIHdpdGhvdXQgJ3EnIHBhcmFtXG4gICAgICBleHRlbmQocGFyYW1zLCBkYXRhKTtcbiAgICAgIGRhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcTogYW55ID0ge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IGN1cnJlbnRVcmwgKyB1cmwsXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBwcmVjaXNpb246ICdtcycsXG4gICAgICBpbnNwZWN0OiB7IHR5cGU6ICdpbmZsdXhkYicgfSxcbiAgICAgIHBhcmFtU2VyaWFsaXplcjogdGhpcy5zZXJpYWxpemVQYXJhbXMsXG4gICAgfTtcblxuICAgIHJlcS5oZWFkZXJzID0gcmVxLmhlYWRlcnMgfHwge307XG4gICAgaWYgKHRoaXMuYmFzaWNBdXRoIHx8IHRoaXMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXEud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmFzaWNBdXRoKSB7XG4gICAgICByZXEuaGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5iYXNpY0F1dGg7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICByZXEuaGVhZGVyc1snQ29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpXG4gICAgICAuZmV0Y2gocmVxKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3VsdDtcbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgZGF0YS5leGVjdXRlZFF1ZXJ5U3RyaW5nID0gcTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gcmVzdWx0LmRhdGEucmVzdWx0cy5maWx0ZXIoKGVsZW06IGFueSkgPT4gZWxlbS5lcnJvcik7XG5cbiAgICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0luZmx1eERCIEVycm9yOiAnICsgZXJyb3JzWzBdLmVycm9yLFxuICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBvZihlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHRoaXMuaGFuZGxlRXJyb3JzKGVycikpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnI6IGFueSkge1xuICAgIGNvbnN0IGVycm9yOiBEYXRhUXVlcnlFcnJvciA9IHtcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgIChlcnIgJiYgZXJyLnN0YXR1cykgfHxcbiAgICAgICAgKGVyciAmJiBlcnIubWVzc2FnZSkgfHxcbiAgICAgICAgJ1Vua25vd24gZXJyb3IgZHVyaW5nIHF1ZXJ5IHRyYW5zYWN0aW9uLiBQbGVhc2UgY2hlY2sgSlMgY29uc29sZSBsb2dzLicsXG4gICAgfTtcblxuICAgIGlmICgoTnVtYmVyLmlzSW50ZWdlcihlcnIuc3RhdHVzKSAmJiBlcnIuc3RhdHVzICE9PSAwKSB8fCBlcnIuc3RhdHVzID49IDMwMCkge1xuICAgICAgaWYgKGVyci5kYXRhICYmIGVyci5kYXRhLmVycm9yKSB7XG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnSW5mbHV4REIgRXJyb3I6ICcgKyBlcnIuZGF0YS5lcnJvcjtcbiAgICAgICAgZXJyb3IuZGF0YSA9IGVyci5kYXRhO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGVycm9yLmNvbmZpZyA9IGVyci5jb25maWc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvci5tZXNzYWdlID0gJ05ldHdvcmsgRXJyb3I6ICcgKyBlcnIuc3RhdHVzVGV4dCArICcoJyArIGVyci5zdGF0dXMgKyAnKSc7XG4gICAgICAgIGVycm9yLmRhdGEgPSBlcnIuZGF0YTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBlcnJvci5jb25maWcgPSBlcnIuY29uZmlnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuXG4gIGdldFRpbWVGaWx0ZXIob3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgZnJvbSA9IHRoaXMuZ2V0SW5mbHV4VGltZShvcHRpb25zLnJhbmdlUmF3LmZyb20sIGZhbHNlLCBvcHRpb25zLnRpbWV6b25lKTtcbiAgICBjb25zdCB1bnRpbCA9IHRoaXMuZ2V0SW5mbHV4VGltZShvcHRpb25zLnJhbmdlUmF3LnRvLCB0cnVlLCBvcHRpb25zLnRpbWV6b25lKTtcblxuICAgIHJldHVybiAndGltZSA+PSAnICsgZnJvbSArICcgYW5kIHRpbWUgPD0gJyArIHVudGlsO1xuICB9XG5cbiAgZ2V0SW5mbHV4VGltZShkYXRlOiBhbnksIHJvdW5kVXA6IGFueSwgdGltZXpvbmU6IGFueSkge1xuICAgIGlmIChpc1N0cmluZyhkYXRlKSkge1xuICAgICAgaWYgKGRhdGUgPT09ICdub3cnKSB7XG4gICAgICAgIHJldHVybiAnbm93KCknO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJ0cyA9IC9ebm93LShcXGQrKShbZGhtc10pJC8uZXhlYyhkYXRlKTtcbiAgICAgIGlmIChwYXJ0cykge1xuICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApO1xuICAgICAgICBjb25zdCB1bml0ID0gcGFydHNbMl07XG4gICAgICAgIHJldHVybiAnbm93KCkgLSAnICsgYW1vdW50ICsgdW5pdDtcbiAgICAgIH1cbiAgICAgIGRhdGUgPSBkYXRlTWF0aC5wYXJzZShkYXRlLCByb3VuZFVwLCB0aW1lem9uZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGUudmFsdWVPZigpICsgJ21zJztcbiAgfVxuXG4gIGlzTWlncmF0aW9uVG9nZ2xlT25BbmRJc0FjY2Vzc1Byb3h5KCkge1xuICAgIHJldHVybiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuaW5mbHV4ZGJCYWNrZW5kTWlncmF0aW9uICYmIHRoaXMuYWNjZXNzID09PSAncHJveHknO1xuICB9XG59XG4iLCJpbXBvcnQgSW5mbHV4RGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnlCdWlsZGVyIH0gZnJvbSAnLi9xdWVyeV9idWlsZGVyJztcbmltcG9ydCB7IEluZmx1eFF1ZXJ5VGFnIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHJ1bkV4cGxvcmVRdWVyeSA9IChcbiAgdHlwZTogc3RyaW5nLFxuICB3aXRoS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHdpdGhNZWFzdXJlbWVudEZpbHRlcjogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICB0YXJnZXQ6IHsgbWVhc3VyZW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDsgdGFnczogSW5mbHV4UXVlcnlUYWdbXTsgcG9saWN5OiBzdHJpbmcgfCB1bmRlZmluZWQgfSxcbiAgZGF0YXNvdXJjZTogSW5mbHV4RGF0YXNvdXJjZVxuKTogUHJvbWlzZTxBcnJheTx7IHRleHQ6IHN0cmluZyB9Pj4gPT4ge1xuICBjb25zdCBidWlsZGVyID0gbmV3IEluZmx1eFF1ZXJ5QnVpbGRlcih0YXJnZXQsIGRhdGFzb3VyY2UuZGF0YWJhc2UpO1xuICBjb25zdCBxID0gYnVpbGRlci5idWlsZEV4cGxvcmVRdWVyeSh0eXBlLCB3aXRoS2V5LCB3aXRoTWVhc3VyZW1lbnRGaWx0ZXIpO1xuICByZXR1cm4gZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkocSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9saWNpZXMoZGF0YXNvdXJjZTogSW5mbHV4RGF0YXNvdXJjZSk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgdGFyZ2V0ID0geyB0YWdzOiBbXSwgbWVhc3VyZW1lbnQ6IHVuZGVmaW5lZCwgcG9saWN5OiB1bmRlZmluZWQgfTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJ1bkV4cGxvcmVRdWVyeSgnUkVURU5USU9OIFBPTElDSUVTJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhcmdldCwgZGF0YXNvdXJjZSk7XG4gIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS50ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbE1lYXN1cmVtZW50c0ZvclRhZ3MoXG4gIG1lYXN1cmVtZW50RmlsdGVyOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHRhZ3M6IEluZmx1eFF1ZXJ5VGFnW10sXG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2Vcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgdGFyZ2V0ID0geyB0YWdzLCBtZWFzdXJlbWVudDogdW5kZWZpbmVkLCBwb2xpY3k6IHVuZGVmaW5lZCB9O1xuICBjb25zdCBkYXRhID0gYXdhaXQgcnVuRXhwbG9yZVF1ZXJ5KCdNRUFTVVJFTUVOVFMnLCB1bmRlZmluZWQsIG1lYXN1cmVtZW50RmlsdGVyLCB0YXJnZXQsIGRhdGFzb3VyY2UpO1xuICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdLZXlzRm9yTWVhc3VyZW1lbnRBbmRUYWdzKFxuICBtZWFzdXJlbWVudDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBwb2xpY3k6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgdGFnczogSW5mbHV4UXVlcnlUYWdbXSxcbiAgZGF0YXNvdXJjZTogSW5mbHV4RGF0YXNvdXJjZVxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCB0YXJnZXQgPSB7IHRhZ3MsIG1lYXN1cmVtZW50LCBwb2xpY3kgfTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJ1bkV4cGxvcmVRdWVyeSgnVEFHX0tFWVMnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFyZ2V0LCBkYXRhc291cmNlKTtcbiAgcmV0dXJuIGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFnVmFsdWVzKFxuICB0YWdLZXk6IHN0cmluZyxcbiAgbWVhc3VyZW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgcG9saWN5OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHRhZ3M6IEluZmx1eFF1ZXJ5VGFnW10sXG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2Vcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgdGFyZ2V0ID0geyB0YWdzLCBtZWFzdXJlbWVudCwgcG9saWN5IH07XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBydW5FeHBsb3JlUXVlcnkoJ1RBR19WQUxVRVMnLCB0YWdLZXksIHVuZGVmaW5lZCwgdGFyZ2V0LCBkYXRhc291cmNlKTtcbiAgcmV0dXJuIGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmllbGRLZXlzRm9yTWVhc3VyZW1lbnQoXG4gIG1lYXN1cmVtZW50OiBzdHJpbmcsXG4gIHBvbGljeTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBkYXRhc291cmNlOiBJbmZsdXhEYXRhc291cmNlXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHRhcmdldCA9IHsgdGFnczogW10sIG1lYXN1cmVtZW50LCBwb2xpY3kgfTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJ1bkV4cGxvcmVRdWVyeSgnRklFTERTJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhcmdldCwgZGF0YXNvdXJjZSk7XG4gIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS50ZXh0KTtcbn1cbiIsImltcG9ydCB7IG1hcCwgZmluZCwgZmlsdGVyLCBpbmRleE9mIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU2NvcGVkVmFycyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgVGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCBrYm4gZnJvbSAnYXBwL2NvcmUvdXRpbHMva2JuJztcblxuaW1wb3J0IHF1ZXJ5UGFydCBmcm9tICcuL3F1ZXJ5X3BhcnQnO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnksIEluZmx1eFF1ZXJ5VGFnIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZmx1eFF1ZXJ5TW9kZWwge1xuICB0YXJnZXQ6IEluZmx1eFF1ZXJ5O1xuICBzZWxlY3RNb2RlbHM6IGFueVtdID0gW107XG4gIHF1ZXJ5QnVpbGRlcjogYW55O1xuICBncm91cEJ5UGFydHM6IGFueTtcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgc2NvcGVkVmFyczogYW55O1xuICByZWZJZD86IHN0cmluZztcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogSW5mbHV4UXVlcnksIHRlbXBsYXRlU3J2PzogVGVtcGxhdGVTcnYsIHNjb3BlZFZhcnM/OiBTY29wZWRWYXJzKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy50ZW1wbGF0ZVNydiA9IHRlbXBsYXRlU3J2O1xuICAgIHRoaXMuc2NvcGVkVmFycyA9IHNjb3BlZFZhcnM7XG5cbiAgICB0YXJnZXQucG9saWN5ID0gdGFyZ2V0LnBvbGljeSB8fCAnZGVmYXVsdCc7XG4gICAgdGFyZ2V0LnJlc3VsdEZvcm1hdCA9IHRhcmdldC5yZXN1bHRGb3JtYXQgfHwgJ3RpbWVfc2VyaWVzJztcbiAgICB0YXJnZXQub3JkZXJCeVRpbWUgPSB0YXJnZXQub3JkZXJCeVRpbWUgfHwgJ0FTQyc7XG4gICAgdGFyZ2V0LnRhZ3MgPSB0YXJnZXQudGFncyB8fCBbXTtcbiAgICB0YXJnZXQuZ3JvdXBCeSA9IHRhcmdldC5ncm91cEJ5IHx8IFtcbiAgICAgIHsgdHlwZTogJ3RpbWUnLCBwYXJhbXM6IFsnJF9faW50ZXJ2YWwnXSB9LFxuICAgICAgeyB0eXBlOiAnZmlsbCcsIHBhcmFtczogWydudWxsJ10gfSxcbiAgICBdO1xuICAgIHRhcmdldC5zZWxlY3QgPSB0YXJnZXQuc2VsZWN0IHx8IFtcbiAgICAgIFtcbiAgICAgICAgeyB0eXBlOiAnZmllbGQnLCBwYXJhbXM6IFsndmFsdWUnXSB9LFxuICAgICAgICB7IHR5cGU6ICdtZWFuJywgcGFyYW1zOiBbXSB9LFxuICAgICAgXSxcbiAgICBdO1xuXG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG4gIH1cblxuICB1cGRhdGVQcm9qZWN0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0TW9kZWxzID0gbWFwKHRoaXMudGFyZ2V0LnNlbGVjdCwgKHBhcnRzOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBtYXAocGFydHMsIHF1ZXJ5UGFydC5jcmVhdGUpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JvdXBCeVBhcnRzID0gbWFwKHRoaXMudGFyZ2V0Lmdyb3VwQnksIHF1ZXJ5UGFydC5jcmVhdGUpO1xuICB9XG5cbiAgdXBkYXRlUGVyc2lzdGVkUGFydHMoKSB7XG4gICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gbWFwKHRoaXMuc2VsZWN0TW9kZWxzLCAoc2VsZWN0UGFydHMpID0+IHtcbiAgICAgIHJldHVybiBtYXAoc2VsZWN0UGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogcGFydC5kZWYudHlwZSwgcGFyYW1zOiBwYXJ0LnBhcmFtcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYXNHcm91cEJ5VGltZSgpIHtcbiAgICByZXR1cm4gZmluZCh0aGlzLnRhcmdldC5ncm91cEJ5LCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICd0aW1lJyk7XG4gIH1cblxuICBoYXNGaWxsKCkge1xuICAgIHJldHVybiBmaW5kKHRoaXMudGFyZ2V0Lmdyb3VwQnksIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2ZpbGwnKTtcbiAgfVxuXG4gIGFkZEdyb3VwQnkodmFsdWU6IHN0cmluZykge1xuICAgIGxldCBzdHJpbmdQYXJ0cyA9IHZhbHVlLm1hdGNoKC9eKFxcdyspXFwoKC4qKVxcKSQvKTtcblxuICAgIGlmICghc3RyaW5nUGFydHMgfHwgIXRoaXMudGFyZ2V0Lmdyb3VwQnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlUGFydCA9IHN0cmluZ1BhcnRzWzFdO1xuICAgIGNvbnN0IGFyZyA9IHN0cmluZ1BhcnRzWzJdO1xuICAgIGNvbnN0IHBhcnRNb2RlbCA9IHF1ZXJ5UGFydC5jcmVhdGUoeyB0eXBlOiB0eXBlUGFydCwgcGFyYW1zOiBbYXJnXSB9KTtcbiAgICBjb25zdCBwYXJ0Q291bnQgPSB0aGlzLnRhcmdldC5ncm91cEJ5Lmxlbmd0aDtcblxuICAgIGlmIChwYXJ0Q291bnQgPT09IDApIHtcbiAgICAgIHRoaXMudGFyZ2V0Lmdyb3VwQnkucHVzaChwYXJ0TW9kZWwucGFydCk7XG4gICAgfSBlbHNlIGlmICh0eXBlUGFydCA9PT0gJ3RpbWUnKSB7XG4gICAgICB0aGlzLnRhcmdldC5ncm91cEJ5LnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwucGFydCk7XG4gICAgfSBlbHNlIGlmICh0eXBlUGFydCA9PT0gJ3RhZycpIHtcbiAgICAgIGlmICh0aGlzLnRhcmdldC5ncm91cEJ5W3BhcnRDb3VudCAtIDFdLnR5cGUgPT09ICdmaWxsJykge1xuICAgICAgICB0aGlzLnRhcmdldC5ncm91cEJ5LnNwbGljZShwYXJ0Q291bnQgLSAxLCAwLCBwYXJ0TW9kZWwucGFydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhcmdldC5ncm91cEJ5LnB1c2gocGFydE1vZGVsLnBhcnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhcmdldC5ncm91cEJ5LnB1c2gocGFydE1vZGVsLnBhcnQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICB9XG5cbiAgcmVtb3ZlR3JvdXBCeVBhcnQocGFydDogeyBkZWY6IHsgdHlwZTogc3RyaW5nIH0gfSwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBxdWVyeVBhcnQuZ2V0Q2F0ZWdvcmllcygpO1xuXG4gICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgLy8gcmVtb3ZlIGZpbGxcbiAgICAgIHRoaXMudGFyZ2V0Lmdyb3VwQnkgPSBmaWx0ZXIodGhpcy50YXJnZXQuZ3JvdXBCeSwgKGc6IGFueSkgPT4gZy50eXBlICE9PSAnZmlsbCcpO1xuICAgICAgLy8gcmVtb3ZlIGFnZ3JlZ2F0aW9uc1xuICAgICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gbWFwKHRoaXMudGFyZ2V0LnNlbGVjdCwgKHM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZmlsdGVyKHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0TW9kZWwgPSBxdWVyeVBhcnQuY3JlYXRlKHBhcnQpO1xuICAgICAgICAgIGlmIChwYXJ0TW9kZWwuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFydE1vZGVsLmRlZi5jYXRlZ29yeSA9PT0gY2F0ZWdvcmllcy5TZWxlY3RvcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy50YXJnZXQuZ3JvdXBCeSEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy50YXJnZXQuc2VsZWN0IS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICB9XG5cbiAgcmVtb3ZlU2VsZWN0UGFydChzZWxlY3RQYXJ0czogYW55W10sIHBhcnQ6IGFueSkge1xuICAgIC8vIGlmIHdlIHJlbW92ZSB0aGUgZmllbGQgcmVtb3ZlIHRoZSB3aG9sZSBzdGF0ZW1lbnRcbiAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ2ZpZWxkJykge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0TW9kZWxzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzSW5kZXggPSBpbmRleE9mKHRoaXMuc2VsZWN0TW9kZWxzLCBzZWxlY3RQYXJ0cyk7XG4gICAgICAgIHRoaXMuc2VsZWN0TW9kZWxzLnNwbGljZShtb2RlbHNJbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnRJbmRleCA9IGluZGV4T2Yoc2VsZWN0UGFydHMsIHBhcnQpO1xuICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKHBhcnRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICB9XG5cbiAgYWRkU2VsZWN0UGFydChzZWxlY3RQYXJ0czogYW55W10sIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IHBhcnRNb2RlbCA9IHF1ZXJ5UGFydC5jcmVhdGUoeyB0eXBlOiB0eXBlIH0pO1xuICAgIHBhcnRNb2RlbC5kZWYuYWRkU3RyYXRlZ3koc2VsZWN0UGFydHMsIHBhcnRNb2RlbCwgdGhpcyk7XG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUYWdDb25kaXRpb24odGFnOiBJbmZsdXhRdWVyeVRhZywgaW5kZXg6IG51bWJlciwgaW50ZXJwb2xhdGU/OiBib29sZWFuKSB7XG4gICAgLy8gRklYTUU6IG1lcmdlIHRoaXMgZnVuY3Rpb24gd2l0aCBxdWVyeV9idWlsZGVyL3JlbmRlclRhZ0NvbmRpdGlvblxuICAgIGxldCBzdHIgPSAnJztcbiAgICBsZXQgb3BlcmF0b3IgPSB0YWcub3BlcmF0b3I7XG4gICAgbGV0IHZhbHVlID0gdGFnLnZhbHVlO1xuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIHN0ciA9ICh0YWcuY29uZGl0aW9uIHx8ICdBTkQnKSArICcgJztcbiAgICB9XG5cbiAgICBpZiAoIW9wZXJhdG9yKSB7XG4gICAgICBpZiAoL15cXC8uKlxcLyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIG9wZXJhdG9yID0gJz1+JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZXJhdG9yID0gJz0nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHF1b3RlIHZhbHVlIHVubGVzcyByZWdleFxuICAgIGlmIChvcGVyYXRvciAhPT0gJz1+JyAmJiBvcGVyYXRvciAhPT0gJyF+Jykge1xuICAgICAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHZhbHVlLCB0aGlzLnNjb3BlZFZhcnMpO1xuICAgICAgfVxuICAgICAgaWYgKG9wZXJhdG9yICE9PSAnPicgJiYgb3BlcmF0b3IgIT09ICc8Jykge1xuICAgICAgICB2YWx1ZSA9IFwiJ1wiICsgdmFsdWUucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKS5yZXBsYWNlKC9cXCcvZywgXCJcXFxcJ1wiKSArIFwiJ1wiO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgIHZhbHVlID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHZhbHVlLCB0aGlzLnNjb3BlZFZhcnMsICdyZWdleCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIgKyAnXCInICsgdGFnLmtleSArICdcIiAnICsgb3BlcmF0b3IgKyAnICcgKyB2YWx1ZTtcbiAgfVxuXG4gIGdldE1lYXN1cmVtZW50QW5kUG9saWN5KGludGVycG9sYXRlOiBhbnkpIHtcbiAgICBsZXQgcG9saWN5ID0gdGhpcy50YXJnZXQucG9saWN5O1xuICAgIGxldCBtZWFzdXJlbWVudCA9IHRoaXMudGFyZ2V0Lm1lYXN1cmVtZW50IHx8ICdtZWFzdXJlbWVudCc7XG5cbiAgICBpZiAoIW1lYXN1cmVtZW50Lm1hdGNoKCdeLy4qLyQnKSkge1xuICAgICAgbWVhc3VyZW1lbnQgPSAnXCInICsgbWVhc3VyZW1lbnQgKyAnXCInO1xuICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgIG1lYXN1cmVtZW50ID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG1lYXN1cmVtZW50LCB0aGlzLnNjb3BlZFZhcnMsICdyZWdleCcpO1xuICAgIH1cblxuICAgIGlmIChwb2xpY3kgIT09ICdkZWZhdWx0Jykge1xuICAgICAgcG9saWN5ID0gJ1wiJyArIHRoaXMudGFyZ2V0LnBvbGljeSArICdcIi4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb2xpY3kgPSAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gcG9saWN5ICsgbWVhc3VyZW1lbnQ7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVF1ZXJ5U3RyKHZhbHVlOiBhbnlbXSwgdmFyaWFibGU6IHsgbXVsdGk6IGFueTsgaW5jbHVkZUFsbDogYW55IH0sIGRlZmF1bHRGb3JtYXRGbjogYW55KSB7XG4gICAgLy8gaWYgbm8gbXVsdGkgb3IgaW5jbHVkZSBhbGwgZG8gbm90IHJlZ2V4RXNjYXBlXG4gICAgaWYgKCF2YXJpYWJsZS5tdWx0aSAmJiAhdmFyaWFibGUuaW5jbHVkZUFsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ga2JuLnJlZ2V4RXNjYXBlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBlc2NhcGVkVmFsdWVzID0gbWFwKHZhbHVlLCBrYm4ucmVnZXhFc2NhcGUpO1xuICAgIHJldHVybiAnKCcgKyBlc2NhcGVkVmFsdWVzLmpvaW4oJ3wnKSArICcpJztcbiAgfVxuXG4gIHJlbmRlcihpbnRlcnBvbGF0ZT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcblxuICAgIGlmICh0YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHRhcmdldC5xdWVyeSwgdGhpcy5zY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5xdWVyeTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUICc7XG4gICAgbGV0IGksIHk7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuc2VsZWN0TW9kZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHRoaXMuc2VsZWN0TW9kZWxzW2ldO1xuICAgICAgbGV0IHNlbGVjdFRleHQgPSAnJztcbiAgICAgIGZvciAoeSA9IDA7IHkgPCBwYXJ0cy5sZW5ndGg7IHkrKykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbeV07XG4gICAgICAgIHNlbGVjdFRleHQgPSBwYXJ0LnJlbmRlcihzZWxlY3RUZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIHF1ZXJ5ICs9ICcsICc7XG4gICAgICB9XG4gICAgICBxdWVyeSArPSBzZWxlY3RUZXh0O1xuICAgIH1cblxuICAgIHF1ZXJ5ICs9ICcgRlJPTSAnICsgdGhpcy5nZXRNZWFzdXJlbWVudEFuZFBvbGljeShpbnRlcnBvbGF0ZSkgKyAnIFdIRVJFICc7XG4gICAgY29uc3QgY29uZGl0aW9ucyA9IG1hcCh0YXJnZXQudGFncywgKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhZ0NvbmRpdGlvbih0YWcsIGluZGV4LCBpbnRlcnBvbGF0ZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoY29uZGl0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBxdWVyeSArPSAnKCcgKyBjb25kaXRpb25zLmpvaW4oJyAnKSArICcpIEFORCAnO1xuICAgIH1cblxuICAgIHF1ZXJ5ICs9ICckdGltZUZpbHRlcic7XG5cbiAgICBsZXQgZ3JvdXBCeVNlY3Rpb24gPSAnJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5ncm91cEJ5UGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdyb3VwQnlQYXJ0c1tpXTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAvLyBmb3Igc29tZSByZWFzb24gZmlsbCBoYXMgbm8gc2VwYXJhdG9yXG4gICAgICAgIGdyb3VwQnlTZWN0aW9uICs9IHBhcnQuZGVmLnR5cGUgPT09ICdmaWxsJyA/ICcgJyA6ICcsICc7XG4gICAgICB9XG4gICAgICBncm91cEJ5U2VjdGlvbiArPSBwYXJ0LnJlbmRlcignJyk7XG4gICAgfVxuXG4gICAgaWYgKGdyb3VwQnlTZWN0aW9uLmxlbmd0aCkge1xuICAgICAgcXVlcnkgKz0gJyBHUk9VUCBCWSAnICsgZ3JvdXBCeVNlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5maWxsKSB7XG4gICAgICBxdWVyeSArPSAnIGZpbGwoJyArIHRhcmdldC5maWxsICsgJyknO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQub3JkZXJCeVRpbWUgPT09ICdERVNDJykge1xuICAgICAgcXVlcnkgKz0gJyBPUkRFUiBCWSB0aW1lIERFU0MnO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQubGltaXQpIHtcbiAgICAgIHF1ZXJ5ICs9ICcgTElNSVQgJyArIHRhcmdldC5saW1pdDtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LnNsaW1pdCkge1xuICAgICAgcXVlcnkgKz0gJyBTTElNSVQgJyArIHRhcmdldC5zbGltaXQ7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC50eikge1xuICAgICAgcXVlcnkgKz0gXCIgdHooJ1wiICsgdGFyZ2V0LnR6ICsgXCInKVwiO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIHJlbmRlckFkaG9jRmlsdGVycyhmaWx0ZXJzOiBhbnlbXSkge1xuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBtYXAoZmlsdGVycywgKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhZ0NvbmRpdGlvbih0YWcsIGluZGV4LCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29uZGl0aW9ucy5qb2luKCcgJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGVhY2gsIG1hcCwgaW5jbHVkZXMsIGZsYXR0ZW4sIGtleXMgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBGaWVsZFR5cGUsIFF1ZXJ5UmVzdWx0TWV0YSwgVGltZVNlcmllcywgVGFibGVEYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgVGFibGVNb2RlbCBmcm9tICdhcHAvY29yZS90YWJsZV9tb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZmx1eFNlcmllcyB7XG4gIHJlZklkPzogc3RyaW5nO1xuICBzZXJpZXM6IGFueTtcbiAgYWxpYXM6IGFueTtcbiAgYW5ub3RhdGlvbjogYW55O1xuICBtZXRhPzogUXVlcnlSZXN1bHRNZXRhO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHsgc2VyaWVzOiBhbnk7IGFsaWFzPzogYW55OyBhbm5vdGF0aW9uPzogYW55OyBtZXRhPzogUXVlcnlSZXN1bHRNZXRhOyByZWZJZD86IHN0cmluZyB9KSB7XG4gICAgdGhpcy5zZXJpZXMgPSBvcHRpb25zLnNlcmllcztcbiAgICB0aGlzLmFsaWFzID0gb3B0aW9ucy5hbGlhcztcbiAgICB0aGlzLmFubm90YXRpb24gPSBvcHRpb25zLmFubm90YXRpb247XG4gICAgdGhpcy5tZXRhID0gb3B0aW9ucy5tZXRhO1xuICAgIHRoaXMucmVmSWQgPSBvcHRpb25zLnJlZklkO1xuICB9XG5cbiAgZ2V0VGltZVNlcmllcygpOiBUaW1lU2VyaWVzW10ge1xuICAgIGNvbnN0IG91dHB1dDogVGltZVNlcmllc1tdID0gW107XG4gICAgbGV0IGksIGo7XG5cbiAgICBpZiAodGhpcy5zZXJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIGVhY2godGhpcy5zZXJpZXMsIChzZXJpZXMpID0+IHtcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBzZXJpZXMuY29sdW1ucy5sZW5ndGg7XG4gICAgICBjb25zdCB0YWdzID0gbWFwKHNlcmllcy50YWdzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4ga2V5ICsgJzogJyArIHZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAoaiA9IDE7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgbGV0IHNlcmllc05hbWUgPSBzZXJpZXMubmFtZTtcbiAgICAgICAgY29uc3QgY29sdW1uTmFtZSA9IHNlcmllcy5jb2x1bW5zW2pdO1xuICAgICAgICBpZiAoY29sdW1uTmFtZSAhPT0gJ3ZhbHVlJykge1xuICAgICAgICAgIHNlcmllc05hbWUgPSBzZXJpZXNOYW1lICsgJy4nICsgY29sdW1uTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFsaWFzKSB7XG4gICAgICAgICAgc2VyaWVzTmFtZSA9IHRoaXMuX2dldFNlcmllc05hbWUoc2VyaWVzLCBqKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZXJpZXMudGFncykge1xuICAgICAgICAgIHNlcmllc05hbWUgPSBzZXJpZXNOYW1lICsgJyB7JyArIHRhZ3Muam9pbignLCAnKSArICd9JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGFwb2ludHMgPSBbXTtcbiAgICAgICAgaWYgKHNlcmllcy52YWx1ZXMpIHtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VyaWVzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGF0YXBvaW50c1tpXSA9IFtzZXJpZXMudmFsdWVzW2ldW2pdLCBzZXJpZXMudmFsdWVzW2ldWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQucHVzaCh7XG4gICAgICAgICAgdGl0bGU6IHNlcmllc05hbWUsXG4gICAgICAgICAgdGFyZ2V0OiBzZXJpZXNOYW1lLFxuICAgICAgICAgIGRhdGFwb2ludHM6IGRhdGFwb2ludHMsXG4gICAgICAgICAgdGFnczogc2VyaWVzLnRhZ3MsXG4gICAgICAgICAgbWV0YTogdGhpcy5tZXRhLFxuICAgICAgICAgIHJlZklkOiB0aGlzLnJlZklkLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICBfZ2V0U2VyaWVzTmFtZShzZXJpZXM6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcJChcXHcrKXxcXFtcXFsoW1xcc1xcU10rPylcXF1cXF0vZztcbiAgICBjb25zdCBzZWdtZW50cyA9IHNlcmllcy5uYW1lLnNwbGl0KCcuJyk7XG5cbiAgICByZXR1cm4gdGhpcy5hbGlhcy5yZXBsYWNlKHJlZ2V4LCAobWF0Y2g6IGFueSwgZzE6IGFueSwgZzI6IGFueSkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXAgPSBnMSB8fCBnMjtcbiAgICAgIGNvbnN0IHNlZ0luZGV4ID0gcGFyc2VJbnQoZ3JvdXAsIDEwKTtcblxuICAgICAgaWYgKGdyb3VwID09PSAnbScgfHwgZ3JvdXAgPT09ICdtZWFzdXJlbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIHNlcmllcy5uYW1lO1xuICAgICAgfVxuICAgICAgaWYgKGdyb3VwID09PSAnY29sJykge1xuICAgICAgICByZXR1cm4gc2VyaWVzLmNvbHVtbnNbaW5kZXhdO1xuICAgICAgfVxuICAgICAgaWYgKCFpc05hTihzZWdJbmRleCkpIHtcbiAgICAgICAgcmV0dXJuIHNlZ21lbnRzW3NlZ0luZGV4XSA/PyBtYXRjaDtcbiAgICAgIH1cbiAgICAgIGlmIChncm91cC5pbmRleE9mKCd0YWdfJykgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YWcgPSBncm91cC5yZXBsYWNlKCd0YWdfJywgJycpO1xuICAgICAgaWYgKCFzZXJpZXMudGFncykge1xuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VyaWVzLnRhZ3NbdGFnXTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFubm90YXRpb25zKCkge1xuICAgIGNvbnN0IGxpc3Q6IGFueVtdID0gW107XG5cbiAgICBlYWNoKHRoaXMuc2VyaWVzLCAoc2VyaWVzKSA9PiB7XG4gICAgICBsZXQgdGl0bGVDb2w6IGFueSA9IG51bGw7XG4gICAgICBsZXQgdGltZUNvbDogYW55ID0gbnVsbDtcbiAgICAgIGxldCB0aW1lRW5kQ29sOiBhbnkgPSBudWxsO1xuICAgICAgY29uc3QgdGFnc0NvbDogYW55ID0gW107XG4gICAgICBsZXQgdGV4dENvbDogYW55ID0gbnVsbDtcblxuICAgICAgZWFjaChzZXJpZXMuY29sdW1ucywgKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gJ3RpbWUnKSB7XG4gICAgICAgICAgdGltZUNvbCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09PSAnc2VxdWVuY2VfbnVtYmVyJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09PSB0aGlzLmFubm90YXRpb24udGl0bGVDb2x1bW4pIHtcbiAgICAgICAgICB0aXRsZUNvbCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5jbHVkZXMoKHRoaXMuYW5ub3RhdGlvbi50YWdzQ29sdW1uIHx8ICcnKS5yZXBsYWNlKCcgJywgJycpLnNwbGl0KCcsJyksIGNvbHVtbikpIHtcbiAgICAgICAgICB0YWdzQ29sLnB1c2goaW5kZXgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09PSB0aGlzLmFubm90YXRpb24udGV4dENvbHVtbikge1xuICAgICAgICAgIHRleHRDb2wgPSBpbmRleDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbiA9PT0gdGhpcy5hbm5vdGF0aW9uLnRpbWVFbmRDb2x1bW4pIHtcbiAgICAgICAgICB0aW1lRW5kQ29sID0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxlZ2FjeSBjYXNlXG4gICAgICAgIGlmICghdGl0bGVDb2wgJiYgdGV4dENvbCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICB0aXRsZUNvbCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZWFjaChzZXJpZXMudmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBhbm5vdGF0aW9uOiB0aGlzLmFubm90YXRpb24sXG4gICAgICAgICAgdGltZTogK25ldyBEYXRlKHZhbHVlW3RpbWVDb2xdKSxcbiAgICAgICAgICB0aXRsZTogdmFsdWVbdGl0bGVDb2xdLFxuICAgICAgICAgIHRpbWVFbmQ6IHZhbHVlW3RpbWVFbmRDb2xdLFxuICAgICAgICAgIC8vIFJlbW92ZSBlbXB0eSB2YWx1ZXMsIHRoZW4gc3BsaXQgaW4gZGlmZmVyZW50IHRhZ3MgZm9yIGNvbW1hIHNlcGFyYXRlZCB2YWx1ZXNcbiAgICAgICAgICB0YWdzOiBmbGF0dGVuKFxuICAgICAgICAgICAgdGFnc0NvbFxuICAgICAgICAgICAgICAuZmlsdGVyKCh0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbdF07XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5tYXAoKHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVt0XS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgdGV4dDogdmFsdWVbdGV4dENvbF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdC5wdXNoKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIGdldFRhYmxlKCk6IFRhYmxlRGF0YSB7XG4gICAgY29uc3QgdGFibGUgPSBuZXcgVGFibGVNb2RlbCgpO1xuICAgIGxldCBpLCBqO1xuXG4gICAgdGFibGUucmVmSWQgPSB0aGlzLnJlZklkO1xuICAgIHRhYmxlLm1ldGEgPSB0aGlzLm1ldGE7XG5cbiAgICBpZiAodGhpcy5zZXJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGFibGU7XG4gICAgfVxuXG4gICAgLy8gdGhlIG9yZGVyIGlzOlxuICAgIC8vIC0gZmlyc3QgdGhlIGZpcnN0IGl0ZW0gZnJvbSB0aGUgdmFsdWUtYXJyYXkgKHRoaXMgaXMgb2Z0ZW4gKGFsd2F5cz8pIHRoZSB0aW1lc3RhbXApXG4gICAgLy8gLSB0aGVuIGFsbCB0aGUgdGFnLXZhbHVlc1xuICAgIC8vIC0gdGhlbiB0aGUgcmVzdCBvZiB0aGUgdmFsdWUtYXJyYXlcbiAgICAvL1xuICAgIC8vIHdlIGhhdmUgdG8ga2VlcCB0aGlzIG9yZGVyIGJvdGggaW4gdGFibGUuY29sdW1ucyBhbmQgdGFibGUucm93c1xuXG4gICAgZWFjaCh0aGlzLnNlcmllcywgKHNlcmllczogYW55LCBzZXJpZXNJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoc2VyaWVzSW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb2wgPSBzZXJpZXMuY29sdW1uc1swXTtcbiAgICAgICAgLy8gQ2hlY2sgdGhlIGZpcnN0IGNvbHVtbidzIG5hbWUsIGlmIGl0IGlzIGB0aW1lYCwgd2VcbiAgICAgICAgLy8gbWFyayBpdCBhcyBoYXZpbmcgdGhlIHR5cGUgdGltZVxuICAgICAgICBjb25zdCBmaXJzdFRhYmxlQ29sID0gZmlyc3RDb2wgPT09ICd0aW1lJyA/IHsgdGV4dDogJ1RpbWUnLCB0eXBlOiBGaWVsZFR5cGUudGltZSB9IDogeyB0ZXh0OiBmaXJzdENvbCB9O1xuICAgICAgICB0YWJsZS5jb2x1bW5zLnB1c2goZmlyc3RUYWJsZUNvbCk7XG4gICAgICAgIGVhY2goa2V5cyhzZXJpZXMudGFncyksIChrZXkpID0+IHtcbiAgICAgICAgICB0YWJsZS5jb2x1bW5zLnB1c2goeyB0ZXh0OiBrZXkgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGogPSAxOyBqIDwgc2VyaWVzLmNvbHVtbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB0YWJsZS5jb2x1bW5zLnB1c2goeyB0ZXh0OiBzZXJpZXMuY29sdW1uc1tqXSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VyaWVzLnZhbHVlcykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2VyaWVzLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHNlcmllcy52YWx1ZXNbaV07XG4gICAgICAgICAgY29uc3QgcmVvcmRlcmVkID0gW3ZhbHVlc1swXV07XG4gICAgICAgICAgaWYgKHNlcmllcy50YWdzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzZXJpZXMudGFncykge1xuICAgICAgICAgICAgICBpZiAoc2VyaWVzLnRhZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJlb3JkZXJlZC5wdXNoKHNlcmllcy50YWdzW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAoaiA9IDE7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHJlb3JkZXJlZC5wdXNoKHZhbHVlc1tqXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhYmxlLnJvd3MucHVzaChyZW9yZGVyZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFibGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IENvbmZpZ0VkaXRvciBmcm9tICcuL2NvbXBvbmVudHMvQ29uZmlnRWRpdG9yJztcbmltcG9ydCBJbmZsdXhTdGFydFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0luZmx1eFN0YXJ0UGFnZSc7XG5pbXBvcnQgeyBRdWVyeUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9RdWVyeUVkaXRvcic7XG5pbXBvcnQgVmFyaWFibGVRdWVyeUVkaXRvciBmcm9tICcuL2NvbXBvbmVudHMvVmFyaWFibGVRdWVyeUVkaXRvcic7XG5pbXBvcnQgSW5mbHV4RGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuXG5jbGFzcyBJbmZsdXhBbm5vdGF0aW9uc1F1ZXJ5Q3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9hbm5vdGF0aW9ucy5lZGl0b3IuaHRtbCc7XG59XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbihJbmZsdXhEYXRhc291cmNlKVxuICAuc2V0Q29uZmlnRWRpdG9yKENvbmZpZ0VkaXRvcilcbiAgLnNldFF1ZXJ5RWRpdG9yKFF1ZXJ5RWRpdG9yKVxuICAuc2V0QW5ub3RhdGlvblF1ZXJ5Q3RybChJbmZsdXhBbm5vdGF0aW9uc1F1ZXJ5Q3RybClcbiAgLnNldFZhcmlhYmxlUXVlcnlFZGl0b3IoVmFyaWFibGVRdWVyeUVkaXRvcilcbiAgLnNldFF1ZXJ5RWRpdG9ySGVscChJbmZsdXhTdGFydFBhZ2UpO1xuIiwiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IEluZmx1eFF1ZXJ5TW9kZWwgZnJvbSAnLi9pbmZsdXhfcXVlcnlfbW9kZWwnO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gRklYTUU6IHRoZXNlIGZ1bmN0aW9ucyBhcmUgYSBiZWdpbm5pbmcgb2YgYSByZWZhY3RvcmluZyBvZiBpbmZsdXhfcXVlcnlfbW9kZWwudHNcbi8vIGludG8gYSBzaW1wbGVyIGFwcHJvYWNoIHdpdGggZnVsbCB0eXBlc2NyaXB0IHR5cGVzLlxuLy8gbGF0ZXIgd2Ugc2hvdWxkIGJlIGFibGUgdG8gbWlncmF0ZSB0aGUgdW5pdC10ZXN0c1xuLy8gdGhhdCByZWxhdGUgdG8gdGhlc2UgZnVuY3Rpb25zIGhlcmUsIGFuZCB0aGVuIHBlcmhhcHMgZXZlbiBtb3ZlIHRoZSBpbXBsZW1lbnRhdGlvblxuLy8gdG8gdGhpcyBwbGFjZVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSYXdRdWVyeShxdWVyeTogSW5mbHV4UXVlcnkpOiBzdHJpbmcge1xuICBjb25zdCBxdWVyeUNvcHkgPSBjbG9uZURlZXAocXVlcnkpOyAvLyB0aGUgcXVlcnktbW9kZWwgbXV0YXRlcyB0aGUgcXVlcnlcbiAgY29uc3QgbW9kZWwgPSBuZXcgSW5mbHV4UXVlcnlNb2RlbChxdWVyeUNvcHkpO1xuICByZXR1cm4gbW9kZWwucmVuZGVyKGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVF1ZXJ5KHF1ZXJ5OiBJbmZsdXhRdWVyeSk6IEluZmx1eFF1ZXJ5IHtcbiAgLy8gd2UgcmV0dXJuIHRoZSBvcmlnaW5hbCBxdWVyeSBpZiB0aGVyZSBpcyBubyBuZWVkIHRvIHVwZGF0ZSBpdFxuICBpZiAoXG4gICAgcXVlcnkucG9saWN5ICE9PSB1bmRlZmluZWQgJiZcbiAgICBxdWVyeS5yZXN1bHRGb3JtYXQgIT09IHVuZGVmaW5lZCAmJlxuICAgIHF1ZXJ5Lm9yZGVyQnlUaW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICBxdWVyeS50YWdzICE9PSB1bmRlZmluZWQgJiZcbiAgICBxdWVyeS5ncm91cEJ5ICE9PSB1bmRlZmluZWQgJiZcbiAgICBxdWVyeS5zZWxlY3QgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvLyBGSVhNRTogd2Ugc2hvdWxkIG1vdmUgdGhlIHdob2xlIG5vcm1hbGl6ZVF1ZXJ5IGxvZ2ljIGhlcmUsXG4gIC8vIGFuZCB0aGVuIGhhdmUgaW5mbHV4UXVlcnlNb2RlbCBjYWxsIHRoaXMgZnVuY3Rpb24sXG4gIC8vIHRvIGNvbmNlbnRyYXRlIHRoZSB3aG9sZSBsb2dpYyBoZXJlXG5cbiAgY29uc3QgcXVlcnlDb3B5ID0gY2xvbmVEZWVwKHF1ZXJ5KTsgLy8gdGhlIHF1ZXJ5LW1vZGVsIG11dGF0ZXMgdGhlIHF1ZXJ5XG4gIHJldHVybiBuZXcgSW5mbHV4UXVlcnlNb2RlbChxdWVyeUNvcHkpLnRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1NlbGVjdFBhcnQocXVlcnk6IEluZmx1eFF1ZXJ5LCB0eXBlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBJbmZsdXhRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5Q29weSA9IGNsb25lRGVlcChxdWVyeSk7IC8vIHRoZSBxdWVyeS1tb2RlbCBtdXRhdGVzIHRoZSBxdWVyeVxuICBjb25zdCBtb2RlbCA9IG5ldyBJbmZsdXhRdWVyeU1vZGVsKHF1ZXJ5Q29weSk7XG4gIG1vZGVsLmFkZFNlbGVjdFBhcnQobW9kZWwuc2VsZWN0TW9kZWxzW2luZGV4XSwgdHlwZSk7XG4gIHJldHVybiBtb2RlbC50YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTZWxlY3RQYXJ0KHF1ZXJ5OiBJbmZsdXhRdWVyeSwgcGFydEluZGV4OiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBJbmZsdXhRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5Q29weSA9IGNsb25lRGVlcChxdWVyeSk7IC8vIHRoZSBxdWVyeS1tb2RlbCBtdXRhdGVzIHRoZSBxdWVyeVxuICBjb25zdCBtb2RlbCA9IG5ldyBJbmZsdXhRdWVyeU1vZGVsKHF1ZXJ5Q29weSk7XG4gIGNvbnN0IHNlbGVjdE1vZGVsID0gbW9kZWwuc2VsZWN0TW9kZWxzW2luZGV4XTtcbiAgbW9kZWwucmVtb3ZlU2VsZWN0UGFydChzZWxlY3RNb2RlbCwgc2VsZWN0TW9kZWxbcGFydEluZGV4XSk7XG4gIHJldHVybiBtb2RlbC50YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTZWxlY3RQYXJ0KFxuICBxdWVyeTogSW5mbHV4UXVlcnksXG4gIGxpc3RJbmRleDogbnVtYmVyLFxuICBwYXJ0SW5kZXg6IG51bWJlcixcbiAgbmV3UGFyYW1zOiBzdHJpbmdbXVxuKTogSW5mbHV4UXVlcnkge1xuICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc2hhbGxvdyBjb3B5IG9mIGBxdWVyeS5zZWxlY3RgIGRvd24gdG8gYHF1ZXJ5LnNlbGVjdFtsaXN0SW5kZXhdW3BhcnRJbmRleF1gXG4gIGNvbnN0IG5ld1NlbCA9IFsuLi4ocXVlcnkuc2VsZWN0ID8/IFtdKV07XG4gIG5ld1NlbFtsaXN0SW5kZXhdID0gWy4uLm5ld1NlbFtsaXN0SW5kZXhdXTtcbiAgbmV3U2VsW2xpc3RJbmRleF1bcGFydEluZGV4XSA9IHtcbiAgICAuLi5uZXdTZWxbbGlzdEluZGV4XVtwYXJ0SW5kZXhdLFxuICAgIHBhcmFtczogbmV3UGFyYW1zLFxuICB9O1xuICByZXR1cm4geyAuLi5xdWVyeSwgc2VsZWN0OiBuZXdTZWwgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0dyb3VwQnlQYXJ0KHF1ZXJ5OiBJbmZsdXhRdWVyeSwgdHlwZTogc3RyaW5nKTogSW5mbHV4UXVlcnkge1xuICBjb25zdCBxdWVyeUNvcHkgPSBjbG9uZURlZXAocXVlcnkpOyAvLyB0aGUgcXVlcnktbW9kZWwgbXV0YXRlcyB0aGUgcXVlcnlcbiAgY29uc3QgbW9kZWwgPSBuZXcgSW5mbHV4UXVlcnlNb2RlbChxdWVyeUNvcHkpO1xuICBtb2RlbC5hZGRHcm91cEJ5KHR5cGUpO1xuICByZXR1cm4gbW9kZWwudGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlR3JvdXBCeVBhcnQocXVlcnk6IEluZmx1eFF1ZXJ5LCBwYXJ0SW5kZXg6IG51bWJlcik6IEluZmx1eFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnlDb3B5ID0gY2xvbmVEZWVwKHF1ZXJ5KTsgLy8gdGhlIHF1ZXJ5LW1vZGVsIG11dGF0ZXMgdGhlIHF1ZXJ5XG4gIGNvbnN0IG1vZGVsID0gbmV3IEluZmx1eFF1ZXJ5TW9kZWwocXVlcnlDb3B5KTtcbiAgbW9kZWwucmVtb3ZlR3JvdXBCeVBhcnQobW9kZWwuZ3JvdXBCeVBhcnRzW3BhcnRJbmRleF0sIHBhcnRJbmRleCk7XG4gIHJldHVybiBtb2RlbC50YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VHcm91cEJ5UGFydChxdWVyeTogSW5mbHV4UXVlcnksIHBhcnRJbmRleDogbnVtYmVyLCBuZXdQYXJhbXM6IHN0cmluZ1tdKTogSW5mbHV4UXVlcnkge1xuICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc2hhbGxvdyBjb3B5IG9mIGBxdWVyeS5ncm91cEJ5YCBkb3duIHRvIGBxdWVyeS5ncm91cEJ5W3BhcnRJbmRleF1gXG4gIGNvbnN0IG5ld0dyb3VwQnkgPSBbLi4uKHF1ZXJ5Lmdyb3VwQnkgPz8gW10pXTtcbiAgbmV3R3JvdXBCeVtwYXJ0SW5kZXhdID0ge1xuICAgIC4uLm5ld0dyb3VwQnlbcGFydEluZGV4XSxcbiAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgfTtcbiAgcmV0dXJuIHsgLi4ucXVlcnksIGdyb3VwQnk6IG5ld0dyb3VwQnkgfTtcbn1cbiIsImltcG9ydCB7IHJlZHVjZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBrYm4gZnJvbSAnYXBwL2NvcmUvdXRpbHMva2JuJztcblxuZnVuY3Rpb24gcmVuZGVyVGFnQ29uZGl0aW9uKHRhZzogeyBvcGVyYXRvcjogYW55OyB2YWx1ZTogc3RyaW5nOyBjb25kaXRpb246IGFueTsga2V5OiBzdHJpbmcgfSwgaW5kZXg6IG51bWJlcikge1xuICAvLyBGSVhNRTogbWVyZ2UgdGhpcyBmdW5jdGlvbiB3aXRoIGluZmx1eF9xdWVyeV9tb2RlbC9yZW5kZXJUYWdDb25kaXRpb25cbiAgbGV0IHN0ciA9ICcnO1xuICBsZXQgb3BlcmF0b3IgPSB0YWcub3BlcmF0b3I7XG4gIGxldCB2YWx1ZSA9IHRhZy52YWx1ZTtcbiAgaWYgKGluZGV4ID4gMCkge1xuICAgIHN0ciA9ICh0YWcuY29uZGl0aW9uIHx8ICdBTkQnKSArICcgJztcbiAgfVxuXG4gIGlmICghb3BlcmF0b3IpIHtcbiAgICBpZiAoL15cXC8uKlxcLyQvLnRlc3QodGFnLnZhbHVlKSkge1xuICAgICAgb3BlcmF0b3IgPSAnPX4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVyYXRvciA9ICc9JztcbiAgICB9XG4gIH1cblxuICAvLyBxdW90ZSB2YWx1ZSB1bmxlc3MgcmVnZXggb3IgbnVtYmVyLCBvciBpZiBlbXB0eS1zdHJpbmdcbiAgaWYgKHZhbHVlID09PSAnJyB8fCAob3BlcmF0b3IgIT09ICc9ficgJiYgb3BlcmF0b3IgIT09ICchficgJiYgaXNOYU4oK3ZhbHVlKSkpIHtcbiAgICB2YWx1ZSA9IFwiJ1wiICsgdmFsdWUucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKS5yZXBsYWNlKC9cXCcvZywgXCJcXFxcJ1wiKSArIFwiJ1wiO1xuICB9XG5cbiAgcmV0dXJuIHN0ciArICdcIicgKyB0YWcua2V5ICsgJ1wiICcgKyBvcGVyYXRvciArICcgJyArIHZhbHVlO1xufVxuXG5leHBvcnQgY2xhc3MgSW5mbHV4UXVlcnlCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXJnZXQ6IHsgbWVhc3VyZW1lbnQ6IGFueTsgdGFnczogYW55OyBwb2xpY3k/OiBhbnkgfSwgcHJpdmF0ZSBkYXRhYmFzZT86IHN0cmluZykge31cblxuICBidWlsZEV4cGxvcmVRdWVyeSh0eXBlOiBzdHJpbmcsIHdpdGhLZXk/OiBzdHJpbmcsIHdpdGhNZWFzdXJlbWVudEZpbHRlcj86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgbGV0IG1lYXN1cmVtZW50O1xuICAgIGxldCBwb2xpY3k7XG5cbiAgICBpZiAodHlwZSA9PT0gJ1RBR19LRVlTJykge1xuICAgICAgcXVlcnkgPSAnU0hPVyBUQUcgS0VZUyc7XG4gICAgICBtZWFzdXJlbWVudCA9IHRoaXMudGFyZ2V0Lm1lYXN1cmVtZW50O1xuICAgICAgcG9saWN5ID0gdGhpcy50YXJnZXQucG9saWN5O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1RBR19WQUxVRVMnKSB7XG4gICAgICBxdWVyeSA9ICdTSE9XIFRBRyBWQUxVRVMnO1xuICAgICAgbWVhc3VyZW1lbnQgPSB0aGlzLnRhcmdldC5tZWFzdXJlbWVudDtcbiAgICAgIHBvbGljeSA9IHRoaXMudGFyZ2V0LnBvbGljeTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdNRUFTVVJFTUVOVFMnKSB7XG4gICAgICBxdWVyeSA9ICdTSE9XIE1FQVNVUkVNRU5UUyc7XG4gICAgICBpZiAod2l0aE1lYXN1cmVtZW50RmlsdGVyKSB7XG4gICAgICAgIC8vIHdlIGRvIGEgY2FzZS1pbnNlbnNpdGl2ZSByZWdleC1iYXNlZCBsb29rdXBcbiAgICAgICAgcXVlcnkgKz0gJyBXSVRIIE1FQVNVUkVNRU5UID1+IC8oP2kpJyArIGtibi5yZWdleEVzY2FwZSh3aXRoTWVhc3VyZW1lbnRGaWx0ZXIpICsgJy8nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0ZJRUxEUycpIHtcbiAgICAgIG1lYXN1cmVtZW50ID0gdGhpcy50YXJnZXQubWVhc3VyZW1lbnQ7XG4gICAgICBwb2xpY3kgPSB0aGlzLnRhcmdldC5wb2xpY3k7XG5cbiAgICAgIGlmICghbWVhc3VyZW1lbnQubWF0Y2goJ14vLiovJykpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQgPSAnXCInICsgbWVhc3VyZW1lbnQgKyAnXCInO1xuXG4gICAgICAgIGlmIChwb2xpY3kgJiYgcG9saWN5ICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICBwb2xpY3kgPSAnXCInICsgcG9saWN5ICsgJ1wiJztcbiAgICAgICAgICBtZWFzdXJlbWVudCA9IHBvbGljeSArICcuJyArIG1lYXN1cmVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnU0hPVyBGSUVMRCBLRVlTIEZST00gJyArIG1lYXN1cmVtZW50O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1JFVEVOVElPTiBQT0xJQ0lFUycpIHtcbiAgICAgIHF1ZXJ5ID0gJ1NIT1cgUkVURU5USU9OIFBPTElDSUVTIG9uIFwiJyArIHRoaXMuZGF0YWJhc2UgKyAnXCInO1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cblxuICAgIGlmIChtZWFzdXJlbWVudCkge1xuICAgICAgaWYgKCFtZWFzdXJlbWVudC5tYXRjaCgnXi8uKi8nKSAmJiAhbWVhc3VyZW1lbnQubWF0Y2goL15tZXJnZVxcKC4qXFwpLykpIHtcbiAgICAgICAgbWVhc3VyZW1lbnQgPSAnXCInICsgbWVhc3VyZW1lbnQgKyAnXCInO1xuICAgICAgfVxuXG4gICAgICBpZiAocG9saWN5ICYmIHBvbGljeSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHBvbGljeSA9ICdcIicgKyBwb2xpY3kgKyAnXCInO1xuICAgICAgICBtZWFzdXJlbWVudCA9IHBvbGljeSArICcuJyArIG1lYXN1cmVtZW50O1xuICAgICAgfVxuXG4gICAgICBxdWVyeSArPSAnIEZST00gJyArIG1lYXN1cmVtZW50O1xuICAgIH1cblxuICAgIGlmICh3aXRoS2V5KSB7XG4gICAgICBxdWVyeSArPSAnIFdJVEggS0VZID0gXCInICsgd2l0aEtleSArICdcIic7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGFyZ2V0LnRhZ3MgJiYgdGhpcy50YXJnZXQudGFncy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB3aGVyZUNvbmRpdGlvbnMgPSByZWR1Y2UoXG4gICAgICAgIHRoaXMudGFyZ2V0LnRhZ3MsXG4gICAgICAgIChtZW1vLCB0YWcpID0+IHtcbiAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgY29uZGl0aW9uIGZvciB0aGUga2V5IHdlIHdhbnQgdG8gZXhwbG9yZSBmb3JcbiAgICAgICAgICBpZiAodGFnLmtleSA9PT0gd2l0aEtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdmFsdWUgb3BlcmF0b3JzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlc2UgdHlwZXMgb2YgcXVlcmllc1xuICAgICAgICAgIGlmICh0YWcub3BlcmF0b3IgPT09ICc+JyB8fCB0YWcub3BlcmF0b3IgPT09ICc8Jykge1xuICAgICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWVtby5wdXNoKHJlbmRlclRhZ0NvbmRpdGlvbih0YWcsIG1lbW8ubGVuZ3RoKSk7XG4gICAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgICAgIH0sXG4gICAgICAgIFtdIGFzIHN0cmluZ1tdXG4gICAgICApO1xuXG4gICAgICBpZiAod2hlcmVDb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcXVlcnkgKz0gJyBXSEVSRSAnICsgd2hlcmVDb25kaXRpb25zLmpvaW4oJyAnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ01FQVNVUkVNRU5UUycpIHtcbiAgICAgIHF1ZXJ5ICs9ICcgTElNSVQgMTAwJztcbiAgICAgIC8vU29sdmUgaXNzdWUgIzI1MjQgYnkgbGltaXRpbmcgdGhlIG51bWJlciBvZiBtZWFzdXJlbWVudHMgcmV0dXJuZWRcbiAgICAgIC8vTElNSVQgbXVzdCBiZSBhZnRlciBXSVRIIE1FQVNVUkVNRU5UIGFuZCBXSEVSRSBjbGF1c2VzXG4gICAgICAvL1RoaXMgYWxzbyBjb3VsZCBiZSB1c2VkIGZvciBUQUcgS0VZUyBhbmQgVEFHIFZBTFVFUywgaWYgZGVzaXJlZFxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbWFwLCBjbG9uZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFF1ZXJ5UGFydERlZiwgUXVlcnlQYXJ0LCBmdW5jdGlvblJlbmRlcmVyLCBzdWZmaXhSZW5kZXJlciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy9zdGF0ZS9xdWVyeV9wYXJ0JztcblxuY29uc3QgaW5kZXg6IGFueVtdID0gW107XG5jb25zdCBjYXRlZ29yaWVzOiBhbnkgPSB7XG4gIEFnZ3JlZ2F0aW9uczogW10sXG4gIFNlbGVjdG9yczogW10sXG4gIFRyYW5zZm9ybWF0aW9uczogW10sXG4gIFByZWRpY3RvcnM6IFtdLFxuICBNYXRoOiBbXSxcbiAgQWxpYXNpbmc6IFtdLFxuICBGaWVsZHM6IFtdLFxufTtcblxuZnVuY3Rpb24gY3JlYXRlUGFydChwYXJ0OiBhbnkpOiBhbnkge1xuICBjb25zdCBkZWYgPSBpbmRleFtwYXJ0LnR5cGVdO1xuICBpZiAoIWRlZikge1xuICAgIHRocm93IHsgbWVzc2FnZTogJ0NvdWxkIG5vdCBmaW5kIHF1ZXJ5IHBhcnQgJyArIHBhcnQudHlwZSB9O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBRdWVyeVBhcnQocGFydCwgZGVmKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXIob3B0aW9uczogYW55KSB7XG4gIGluZGV4W29wdGlvbnMudHlwZV0gPSBuZXcgUXVlcnlQYXJ0RGVmKG9wdGlvbnMpO1xuICBvcHRpb25zLmNhdGVnb3J5LnB1c2goaW5kZXhbb3B0aW9ucy50eXBlXSk7XG59XG5cbmNvbnN0IGdyb3VwQnlUaW1lRnVuY3Rpb25zOiBhbnlbXSA9IFtdO1xuXG5mdW5jdGlvbiBhbGlhc1JlbmRlcmVyKHBhcnQ6IHsgcGFyYW1zOiBzdHJpbmdbXSB9LCBpbm5lckV4cHI6IHN0cmluZykge1xuICByZXR1cm4gaW5uZXJFeHByICsgJyBBUyAnICsgJ1wiJyArIHBhcnQucGFyYW1zWzBdICsgJ1wiJztcbn1cblxuZnVuY3Rpb24gZmllbGRSZW5kZXJlcihwYXJ0OiB7IHBhcmFtczogc3RyaW5nW10gfSwgaW5uZXJFeHByOiBhbnkpIHtcbiAgaWYgKHBhcnQucGFyYW1zWzBdID09PSAnKicpIHtcbiAgICByZXR1cm4gJyonO1xuICB9XG4gIHJldHVybiAnXCInICsgcGFydC5wYXJhbXNbMF0gKyAnXCInO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneShzZWxlY3RQYXJ0czogYW55W10sIHBhcnRNb2RlbDogeyBkZWY6IHsgdHlwZTogc3RyaW5nIH0gfSkge1xuICAvLyBsb29rIGZvciBleGlzdGluZyBhZ2dyZWdhdGlvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdFBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcGFydCA9IHNlbGVjdFBhcnRzW2ldO1xuICAgIGlmIChwYXJ0LmRlZi5jYXRlZ29yeSA9PT0gY2F0ZWdvcmllcy5BZ2dyZWdhdGlvbnMpIHtcbiAgICAgIGlmIChwYXJ0LmRlZi50eXBlID09PSBwYXJ0TW9kZWwuZGVmLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY291bnQgZGlzdGluY3QgaXMgYWxsb3dlZFxuICAgICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICdjb3VudCcgJiYgcGFydE1vZGVsLmRlZi50eXBlID09PSAnZGlzdGluY3QnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gcmVtb3ZlIG5leHQgYWdncmVnYXRpb24gaWYgZGlzdGluY3Qgd2FzIHJlcGxhY2VkXG4gICAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ2Rpc3RpbmN0Jykge1xuICAgICAgICBjb25zdCBtb3JlUGFydHNBdmFpbGFibGUgPSBzZWxlY3RQYXJ0cy5sZW5ndGggPj0gaSArIDI7XG4gICAgICAgIGlmIChwYXJ0TW9kZWwuZGVmLnR5cGUgIT09ICdjb3VudCcgJiYgbW9yZVBhcnRzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgY29uc3QgbmV4dFBhcnQgPSBzZWxlY3RQYXJ0c1tpICsgMV07XG4gICAgICAgICAgaWYgKG5leHRQYXJ0LmRlZi5jYXRlZ29yeSA9PT0gY2F0ZWdvcmllcy5BZ2dyZWdhdGlvbnMpIHtcbiAgICAgICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZShpICsgMSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBhcnRNb2RlbC5kZWYudHlwZSA9PT0gJ2NvdW50Jykge1xuICAgICAgICAgIGlmICghbW9yZVBhcnRzQXZhaWxhYmxlIHx8IHNlbGVjdFBhcnRzW2kgKyAxXS5kZWYudHlwZSAhPT0gJ2NvdW50Jykge1xuICAgICAgICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKGkgKyAxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNlbGVjdFBhcnRzW2ldID0gcGFydE1vZGVsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFydC5kZWYuY2F0ZWdvcnkgPT09IGNhdGVnb3JpZXMuU2VsZWN0b3JzKSB7XG4gICAgICBzZWxlY3RQYXJ0c1tpXSA9IHBhcnRNb2RlbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RQYXJ0cy5zcGxpY2UoMSwgMCwgcGFydE1vZGVsKTtcbn1cblxuZnVuY3Rpb24gYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneShzZWxlY3RQYXJ0czogYW55W10sIHBhcnRNb2RlbDogYW55KSB7XG4gIGxldCBpO1xuICAvLyBsb29rIGZvciBpbmRleCB0byBhZGQgdHJhbnNmb3JtYXRpb25cbiAgZm9yIChpID0gMDsgaSA8IHNlbGVjdFBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcGFydCA9IHNlbGVjdFBhcnRzW2ldO1xuICAgIGlmIChwYXJ0LmRlZi5jYXRlZ29yeSA9PT0gY2F0ZWdvcmllcy5NYXRoIHx8IHBhcnQuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLkFsaWFzaW5nKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZWxlY3RQYXJ0cy5zcGxpY2UoaSwgMCwgcGFydE1vZGVsKTtcbn1cblxuZnVuY3Rpb24gYWRkTWF0aFN0cmF0ZWd5KHNlbGVjdFBhcnRzOiBhbnlbXSwgcGFydE1vZGVsOiBhbnkpIHtcbiAgY29uc3QgcGFydENvdW50ID0gc2VsZWN0UGFydHMubGVuZ3RoO1xuICBpZiAocGFydENvdW50ID4gMCkge1xuICAgIC8vIGlmIGxhc3QgaXMgbWF0aCwgcmVwbGFjZSBpdFxuICAgIGlmIChzZWxlY3RQYXJ0c1twYXJ0Q291bnQgLSAxXS5kZWYudHlwZSA9PT0gJ21hdGgnKSB7XG4gICAgICBzZWxlY3RQYXJ0c1twYXJ0Q291bnQgLSAxXSA9IHBhcnRNb2RlbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgbmV4dCB0byBsYXN0IGlzIG1hdGgsIHJlcGxhY2UgaXRcbiAgICBpZiAocGFydENvdW50ID4gMSAmJiBzZWxlY3RQYXJ0c1twYXJ0Q291bnQgLSAyXS5kZWYudHlwZSA9PT0gJ21hdGgnKSB7XG4gICAgICBzZWxlY3RQYXJ0c1twYXJ0Q291bnQgLSAyXSA9IHBhcnRNb2RlbDtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDFdLmRlZi50eXBlID09PSAnYWxpYXMnKSB7XG4gICAgICAvLyBpZiBsYXN0IGlzIGFsaWFzIGFkZCBpdCBiZWZvcmVcbiAgICAgIHNlbGVjdFBhcnRzLnNwbGljZShwYXJ0Q291bnQgLSAxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBzZWxlY3RQYXJ0cy5wdXNoKHBhcnRNb2RlbCk7XG59XG5cbmZ1bmN0aW9uIGFkZEFsaWFzU3RyYXRlZ3koc2VsZWN0UGFydHM6IGFueVtdLCBwYXJ0TW9kZWw6IGFueSkge1xuICBjb25zdCBwYXJ0Q291bnQgPSBzZWxlY3RQYXJ0cy5sZW5ndGg7XG4gIGlmIChwYXJ0Q291bnQgPiAwKSB7XG4gICAgLy8gaWYgbGFzdCBpcyBhbGlhcywgcmVwbGFjZSBpdFxuICAgIGlmIChzZWxlY3RQYXJ0c1twYXJ0Q291bnQgLSAxXS5kZWYudHlwZSA9PT0gJ2FsaWFzJykge1xuICAgICAgc2VsZWN0UGFydHNbcGFydENvdW50IC0gMV0gPSBwYXJ0TW9kZWw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHNlbGVjdFBhcnRzLnB1c2gocGFydE1vZGVsKTtcbn1cblxuZnVuY3Rpb24gYWRkRmllbGRTdHJhdGVneShzZWxlY3RQYXJ0czogYW55LCBwYXJ0TW9kZWw6IGFueSwgcXVlcnk6IHsgc2VsZWN0TW9kZWxzOiBhbnlbXVtdIH0pIHtcbiAgLy8gY29weSBhbGwgcGFydHNcbiAgY29uc3QgcGFydHMgPSBtYXAoc2VsZWN0UGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlUGFydCh7IHR5cGU6IHBhcnQuZGVmLnR5cGUsIHBhcmFtczogY2xvbmUocGFydC5wYXJhbXMpIH0pO1xuICB9KTtcblxuICBxdWVyeS5zZWxlY3RNb2RlbHMucHVzaChwYXJ0cyk7XG59XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2ZpZWxkJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZEZpZWxkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkZpZWxkcyxcbiAgcGFyYW1zOiBbeyB0eXBlOiAnZmllbGQnLCBkeW5hbWljTG9va3VwOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3ZhbHVlJ10sXG4gIHJlbmRlcmVyOiBmaWVsZFJlbmRlcmVyLFxufSk7XG5cbi8vIEFnZ3JlZ2F0aW9uc1xucmVnaXN0ZXIoe1xuICB0eXBlOiAnY291bnQnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2Rpc3RpbmN0JyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5BZ2dyZWdhdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdpbnRlZ3JhbCcsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuQWdncmVnYXRpb25zLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbWVhbicsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuQWdncmVnYXRpb25zLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbWVkaWFuJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5BZ2dyZWdhdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtb2RlJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5BZ2dyZWdhdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdzdW0nLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbi8vIHRyYW5zZm9ybWF0aW9uc1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdkZXJpdmF0aXZlJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgICAgIHR5cGU6ICdpbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzFzJywgJzEwcycsICcxbScsICc1bScsICcxMG0nLCAnMTVtJywgJzFoJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWycxMHMnXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnc3ByZWFkJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ25vbl9uZWdhdGl2ZV9kZXJpdmF0aXZlJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgICAgIHR5cGU6ICdpbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzFzJywgJzEwcycsICcxbScsICc1bScsICcxMG0nLCAnMTVtJywgJzFoJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWycxMHMnXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZGlmZmVyZW5jZScsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5UcmFuc2Zvcm1hdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdub25fbmVnYXRpdmVfZGlmZmVyZW5jZScsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5UcmFuc2Zvcm1hdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtb3ZpbmdfYXZlcmFnZScsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5UcmFuc2Zvcm1hdGlvbnMsXG4gIHBhcmFtczogW3sgbmFtZTogJ3dpbmRvdycsIHR5cGU6ICdpbnQnLCBvcHRpb25zOiBbNSwgMTAsIDIwLCAzMCwgNDBdIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbMTBdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdjdW11bGF0aXZlX3N1bScsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5UcmFuc2Zvcm1hdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdzdGRkZXYnLFxuICBhZGRTdHJhdGVneTogYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuVHJhbnNmb3JtYXRpb25zLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAndGltZScsXG4gIGNhdGVnb3J5OiBncm91cEJ5VGltZUZ1bmN0aW9ucyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2ludGVydmFsJyxcbiAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgIG9wdGlvbnM6IFsnJF9faW50ZXJ2YWwnLCAnMXMnLCAnMTBzJywgJzFtJywgJzVtJywgJzEwbScsICcxNW0nLCAnMWgnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJyRfX2ludGVydmFsJ10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2ZpbGwnLFxuICBjYXRlZ29yeTogZ3JvdXBCeVRpbWVGdW5jdGlvbnMsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdmaWxsJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydub25lJywgJ251bGwnLCAnMCcsICdwcmV2aW91cycsICdsaW5lYXInXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ251bGwnXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZWxhcHNlZCcsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5UcmFuc2Zvcm1hdGlvbnMsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdkdXJhdGlvbicsXG4gICAgICB0eXBlOiAnaW50ZXJ2YWwnLFxuICAgICAgb3B0aW9uczogWycxcycsICcxMHMnLCAnMW0nLCAnNW0nLCAnMTBtJywgJzE1bScsICcxaCddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnMTBzJ10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbi8vIHByZWRpY3Rpb25zXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdob2x0X3dpbnRlcnMnLFxuICBhZGRTdHJhdGVneTogYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuUHJlZGljdG9ycyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAnbnVtYmVyJywgdHlwZTogJ2ludCcsIG9wdGlvbnM6IFs1LCAxMCwgMjAsIDMwLCA0MF0gfSxcbiAgICB7IG5hbWU6ICdzZWFzb24nLCB0eXBlOiAnaW50Jywgb3B0aW9uczogWzAsIDEsIDIsIDUsIDEwXSB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbMTAsIDJdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdob2x0X3dpbnRlcnNfd2l0aF9maXQnLFxuICBhZGRTdHJhdGVneTogYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuUHJlZGljdG9ycyxcbiAgcGFyYW1zOiBbXG4gICAgeyBuYW1lOiAnbnVtYmVyJywgdHlwZTogJ2ludCcsIG9wdGlvbnM6IFs1LCAxMCwgMjAsIDMwLCA0MF0gfSxcbiAgICB7IG5hbWU6ICdzZWFzb24nLCB0eXBlOiAnaW50Jywgb3B0aW9uczogWzAsIDEsIDIsIDUsIDEwXSB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbMTAsIDJdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG4vLyBTZWxlY3RvcnNcbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2JvdHRvbScsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU2VsZWN0b3JzLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdjb3VudCcsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbM10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2ZpcnN0JyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TZWxlY3RvcnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdsYXN0JyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TZWxlY3RvcnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtYXgnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNlbGVjdG9ycyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ21pbicsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU2VsZWN0b3JzLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAncGVyY2VudGlsZScsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU2VsZWN0b3JzLFxuICBwYXJhbXM6IFt7IG5hbWU6ICdudGgnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzk1XSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAndG9wJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TZWxlY3RvcnMsXG4gIHBhcmFtczogW3sgbmFtZTogJ2NvdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAndGFnJyxcbiAgY2F0ZWdvcnk6IGdyb3VwQnlUaW1lRnVuY3Rpb25zLFxuICBwYXJhbXM6IFt7IG5hbWU6ICd0YWcnLCB0eXBlOiAnc3RyaW5nJywgZHluYW1pY0xvb2t1cDogdHJ1ZSB9XSxcbiAgZGVmYXVsdFBhcmFtczogWyd0YWcnXSxcbiAgcmVuZGVyZXI6IGZpZWxkUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbWF0aCcsXG4gIGFkZFN0cmF0ZWd5OiBhZGRNYXRoU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLk1hdGgsXG4gIHBhcmFtczogW3sgbmFtZTogJ2V4cHInLCB0eXBlOiAnc3RyaW5nJyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWycgLyAxMDAnXSxcbiAgcmVuZGVyZXI6IHN1ZmZpeFJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2FsaWFzJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZEFsaWFzU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkFsaWFzaW5nLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduYW1lJywgdHlwZTogJ3N0cmluZycsIHF1b3RlOiAnZG91YmxlJyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWydhbGlhcyddLFxuICByZW5kZXJNb2RlOiAnc3VmZml4JyxcbiAgcmVuZGVyZXI6IGFsaWFzUmVuZGVyZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGU6IGNyZWF0ZVBhcnQsXG4gIGdldENhdGVnb3JpZXM6ICgpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcmllcztcbiAgfSxcbiAgcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkOiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbn07XG4iLCJpbXBvcnQgeyBlYWNoLCBmbGF0dGVuLCBncm91cEJ5LCBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQW5ub3RhdGlvbkV2ZW50LCBEYXRhRnJhbWUsIERhdGFRdWVyeSwgRmllbGRUeXBlLCBRdWVyeVJlc3VsdE1ldGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHRvRGF0YVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCBUYWJsZU1vZGVsIGZyb20gJ2FwcC9jb3JlL3RhYmxlX21vZGVsJztcblxuaW1wb3J0IHsgSW5mbHV4UXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2VQYXJzZXIge1xuICBwYXJzZShxdWVyeTogc3RyaW5nLCByZXN1bHRzOiB7IHJlc3VsdHM6IGFueSB9KSB7XG4gICAgaWYgKCFyZXN1bHRzPy5yZXN1bHRzIHx8IHJlc3VsdHMucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmZsdXhSZXN1bHRzID0gcmVzdWx0cy5yZXN1bHRzWzBdO1xuICAgIGlmICghaW5mbHV4UmVzdWx0cy5zZXJpZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGlzVmFsdWVGaXJzdCA9XG4gICAgICBub3JtYWxpemVkUXVlcnkuaW5kZXhPZignc2hvdyBmaWVsZCBrZXlzJykgPj0gMCB8fCBub3JtYWxpemVkUXVlcnkuaW5kZXhPZignc2hvdyByZXRlbnRpb24gcG9saWNpZXMnKSA+PSAwO1xuXG4gICAgY29uc3QgcmVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZWFjaChpbmZsdXhSZXN1bHRzLnNlcmllcywgKHNlcmllKSA9PiB7XG4gICAgICBlYWNoKHNlcmllLnZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIC8vIEluIGdlbmVyYWwsIHRoZXJlIGFyZSAyIHBvc3NpYmxlIHNoYXBlcyBmb3IgdGhlIHJldHVybmVkIHZhbHVlLlxuICAgICAgICAgIC8vIFRoZSBmaXJzdCBvbmUgaXMgYSB0d28tZWxlbWVudCBhcnJheSxcbiAgICAgICAgICAvLyB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudCBpcyBzb21ld2hhdCBhIG1ldGFkYXRhIHZhbHVlOlxuICAgICAgICAgIC8vIHRoZSB0YWcgbmFtZSBmb3IgU0hPVyBUQUcgVkFMVUVTIHF1ZXJpZXMsXG4gICAgICAgICAgLy8gdGhlIHRpbWUgZmllbGQgZm9yIFNFTEVDVCBxdWVyaWVzLCBldGMuXG4gICAgICAgICAgLy8gVGhlIHNlY29uZCBzaGFwZSBpcyBhbiBvbmUtZWxlbWVudCBhcnJheSxcbiAgICAgICAgICAvLyB0aGF0IGlzIGNvbnRhaW5pbmcgYW4gaW1tZWRpYXRlIHZhbHVlLlxuICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBTSE9XIEZJRUxEIEtFWVMgcXVlcmllcyByZXR1cm4gc3VjaCBzaGFwZS5cbiAgICAgICAgICAvLyBOb3RlLCBwcmUtMC4xMSB2ZXJzaW9ucyByZXR1cm5cbiAgICAgICAgICAvLyB0aGUgc2Vjb25kIHNoYXBlIGZvciBTSE9XIFRBRyBWQUxVRVMgcXVlcmllc1xuICAgICAgICAgIC8vICh3aGlsZSB0aGUgbmV3ZXIgdmVyc2lvbnPigJRmaXJzdCkuXG5cbiAgICAgICAgICBpZiAoaXNWYWx1ZUZpcnN0KSB7XG4gICAgICAgICAgICBhZGRVbmlxdWUocmVzLCB2YWx1ZVswXSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVsxXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhZGRVbmlxdWUocmVzLCB2YWx1ZVsxXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZFVuaXF1ZShyZXMsIHZhbHVlWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkVW5pcXVlKHJlcywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIE5PVEU6IGl0IGlzIGltcG9ydGFudCB0byBrZWVwIHRoZSBvcmRlciBvZiBpdGVtcyBpbiB0aGUgcGFyc2VkIG91dHB1dFxuICAgIC8vIHRoZSBzYW1lIGFzIGl0IHdhcyBpbiB0aGUgaW5mbHV4ZGItcmVzcG9uc2UuXG4gICAgLy8gd2UgdXNlIGEgYFNldGAgdG8gY29sbGVjdCB0aGUgdW5pcXVlLXJlc3VsdHMsIGFuZCBgU2V0YCBpdGVyYXRpb25cbiAgICAvLyBvcmRlciBpcyBpbnNlcnRpb24tb3JkZXIsIHNvIHRoaXMgc2hvdWxkIGJlIG9rLlxuICAgIHJldHVybiBBcnJheS5mcm9tKHJlcykubWFwKCh2KSA9PiAoeyB0ZXh0OiB2IH0pKTtcbiAgfVxuXG4gIGdldFRhYmxlKGRmczogRGF0YUZyYW1lW10sIHRhcmdldDogSW5mbHV4UXVlcnksIG1ldGE6IFF1ZXJ5UmVzdWx0TWV0YSk6IFRhYmxlTW9kZWwge1xuICAgIGxldCB0YWJsZSA9IG5ldyBUYWJsZU1vZGVsKCk7XG5cbiAgICBpZiAoZGZzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYmxlLm1ldGEgPSB7XG4gICAgICAgIC4uLm1ldGEsXG4gICAgICAgIGV4ZWN1dGVkUXVlcnlTdHJpbmc6IGRmc1swXS5tZXRhPy5leGVjdXRlZFF1ZXJ5U3RyaW5nLFxuICAgICAgfTtcblxuICAgICAgdGFibGUucmVmSWQgPSB0YXJnZXQucmVmSWQ7XG4gICAgICB0YWJsZSA9IGdldFRhYmxlQ29scyhkZnMsIHRhYmxlLCB0YXJnZXQpO1xuXG4gICAgICAvLyBpZiBncm91cCBieSB0YWcocykgYWRkZWRcbiAgICAgIGlmIChkZnNbMF0uZmllbGRzWzFdICYmIGRmc1swXS5maWVsZHNbMV0ubGFiZWxzKSB7XG4gICAgICAgIGxldCBkZnNCeUxhYmVsczogYW55ID0gZ3JvdXBCeShkZnMsIChkZjogRGF0YUZyYW1lKSA9PlxuICAgICAgICAgIGRmLmZpZWxkc1sxXS5sYWJlbHMgPyBPYmplY3QudmFsdWVzKGRmLmZpZWxkc1sxXS5sYWJlbHMhKSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbGFiZWxzID0gT2JqZWN0LmtleXMoZGZzQnlMYWJlbHMpO1xuICAgICAgICBkZnNCeUxhYmVscyA9IE9iamVjdC52YWx1ZXMoZGZzQnlMYWJlbHMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGZzQnlMYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0YWJsZSA9IGdldFRhYmxlUm93cyhkZnNCeUxhYmVsc1tpXSwgdGFibGUsIFsuLi5sYWJlbHNbaV0uc3BsaXQoJywnKV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJsZSA9IGdldFRhYmxlUm93cyhkZnMsIHRhYmxlLCBbXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYmxlO1xuICB9XG5cbiAgYXN5bmMgdHJhbnNmb3JtQW5ub3RhdGlvblJlc3BvbnNlKG9wdGlvbnM6IGFueSwgZGF0YTogYW55LCB0YXJnZXQ6IEluZmx1eFF1ZXJ5KTogUHJvbWlzZTxBbm5vdGF0aW9uRXZlbnRbXT4ge1xuICAgIGNvbnN0IHJzcCA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UoZGF0YSwgW3RhcmdldF0gYXMgRGF0YVF1ZXJ5W10pO1xuXG4gICAgaWYgKHJzcCkge1xuICAgICAgY29uc3QgdGFibGUgPSB0aGlzLmdldFRhYmxlKHJzcC5kYXRhLCB0YXJnZXQsIHt9KTtcbiAgICAgIGNvbnN0IGxpc3Q6IGFueVtdID0gW107XG4gICAgICBsZXQgdGl0bGVDb2w6IGFueSA9IG51bGw7XG4gICAgICBsZXQgdGltZUNvbDogYW55ID0gbnVsbDtcbiAgICAgIGxldCB0aW1lRW5kQ29sOiBhbnkgPSBudWxsO1xuICAgICAgY29uc3QgdGFnc0NvbDogYW55ID0gW107XG4gICAgICBsZXQgdGV4dENvbDogYW55ID0gbnVsbDtcblxuICAgICAgZWFjaCh0YWJsZS5jb2x1bW5zLCAoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY29sdW1uLnRleHQudG9Mb3dlckNhc2UoKSA9PT0gJ3RpbWUnKSB7XG4gICAgICAgICAgdGltZUNvbCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uLnRleHQgPT09IG9wdGlvbnMuYW5ub3RhdGlvbi50aXRsZUNvbHVtbikge1xuICAgICAgICAgIHRpdGxlQ29sID0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xDb250YWluc1RhZyhjb2x1bW4udGV4dCwgb3B0aW9ucy5hbm5vdGF0aW9uLnRhZ3NDb2x1bW4pKSB7XG4gICAgICAgICAgdGFnc0NvbC5wdXNoKGluZGV4KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbi50ZXh0LmluY2x1ZGVzKG9wdGlvbnMuYW5ub3RhdGlvbi50ZXh0Q29sdW1uKSkge1xuICAgICAgICAgIHRleHRDb2wgPSBpbmRleDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbHVtbi50ZXh0ID09PSBvcHRpb25zLmFubm90YXRpb24udGltZUVuZENvbHVtbikge1xuICAgICAgICAgIHRpbWVFbmRDb2wgPSBpbmRleDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGVnYWN5IGNhc2VcbiAgICAgICAgaWYgKCF0aXRsZUNvbCAmJiB0ZXh0Q29sICE9PSBpbmRleCkge1xuICAgICAgICAgIHRpdGxlQ29sID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBlYWNoKHRhYmxlLnJvd3MsICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGFubm90YXRpb246IG9wdGlvbnMuYW5ub3RhdGlvbixcbiAgICAgICAgICB0aW1lOiArbmV3IERhdGUodmFsdWVbdGltZUNvbF0pLFxuICAgICAgICAgIHRpdGxlOiB2YWx1ZVt0aXRsZUNvbF0sXG4gICAgICAgICAgdGltZUVuZDogdmFsdWVbdGltZUVuZENvbF0sXG4gICAgICAgICAgLy8gUmVtb3ZlIGVtcHR5IHZhbHVlcywgdGhlbiBzcGxpdCBpbiBkaWZmZXJlbnQgdGFncyBmb3IgY29tbWEgc2VwYXJhdGVkIHZhbHVlc1xuICAgICAgICAgIHRhZ3M6IGZsYXR0ZW4oXG4gICAgICAgICAgICB0YWdzQ29sXG4gICAgICAgICAgICAgIC5maWx0ZXIoKHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVt0XTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLm1hcCgodDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3RdLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0ZXh0OiB2YWx1ZVt0ZXh0Q29sXSxcbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0LnB1c2goZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2xDb250YWluc1RhZyhjb2xUZXh0OiBzdHJpbmcsIHRhZ3NDb2x1bW46IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB0YWdzID0gKHRhZ3NDb2x1bW4gfHwgJycpLnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgdGFnIG9mIHRhZ3MpIHtcbiAgICBpZiAoY29sVGV4dC5pbmNsdWRlcyh0YWcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRUYWJsZUNvbHMoZGZzOiBEYXRhRnJhbWVbXSwgdGFibGU6IFRhYmxlTW9kZWwsIHRhcmdldDogSW5mbHV4UXVlcnkpOiBUYWJsZU1vZGVsIHtcbiAgY29uc3Qgc2VsZWN0ZWRQYXJhbXMgPSBnZXRTZWxlY3RlZFBhcmFtcyh0YXJnZXQpO1xuXG4gIGRmc1swXS5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAvLyBUaW1lIGNvbFxuICAgIGlmIChmaWVsZC5uYW1lID09PSAndGltZScpIHtcbiAgICAgIHRhYmxlLmNvbHVtbnMucHVzaCh7IHRleHQ6ICdUaW1lJywgdHlwZTogRmllbGRUeXBlLnRpbWUgfSk7XG4gICAgfVxuXG4gICAgLy8gR3JvdXAgYnkgKGxhYmVsKSBjb2x1bW4ocylcbiAgICBlbHNlIGlmIChmaWVsZC5uYW1lID09PSAndmFsdWUnKSB7XG4gICAgICBpZiAoZmllbGQubGFiZWxzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGZpZWxkLmxhYmVscykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgdGFibGUuY29sdW1ucy5wdXNoKHsgdGV4dDoga2V5IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIEdldCBjb2xzIGZvciBhbm5vdGF0aW9uUXVlcnlcbiAgaWYgKGRmc1swXS5yZWZJZCA9PT0gJ21ldHJpY0ZpbmRRdWVyeScpIHtcbiAgICBkZnMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChmaWVsZC5uYW1lKSB7XG4gICAgICAgIHRhYmxlLmNvbHVtbnMucHVzaCh7IHRleHQ6IGZpZWxkLm5hbWUgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBTZWxlY3QgKG1ldHJpYykgY29sdW1uKHMpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRQYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICB0YWJsZS5jb2x1bW5zLnB1c2goeyB0ZXh0OiBzZWxlY3RlZFBhcmFtc1tpXSB9KTtcbiAgfVxuXG4gIHJldHVybiB0YWJsZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFibGVSb3dzKGRmczogRGF0YUZyYW1lW10sIHRhYmxlOiBUYWJsZU1vZGVsLCBsYWJlbHM6IHN0cmluZ1tdKTogVGFibGVNb2RlbCB7XG4gIGNvbnN0IHZhbHVlcyA9IGRmc1swXS5maWVsZHNbMF0udmFsdWVzLnRvQXJyYXkoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRpbWUgPSB2YWx1ZXNbaV07XG4gICAgY29uc3QgbWV0cmljcyA9IGRmcy5tYXAoKGRmOiBEYXRhRnJhbWUpID0+IHtcbiAgICAgIHJldHVybiBkZi5maWVsZHNbMV0gPyBkZi5maWVsZHNbMV0udmFsdWVzLnRvQXJyYXkoKVtpXSA6IG51bGw7XG4gICAgfSk7XG4gICAgaWYgKG1ldHJpY3MuaW5kZXhPZihudWxsKSA8IDApIHtcbiAgICAgIHRhYmxlLnJvd3MucHVzaChbdGltZSwgLi4ubGFiZWxzLCAuLi5tZXRyaWNzXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0YWJsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkUGFyYW1zKHRhcmdldDogSW5mbHV4UXVlcnkpOiBzdHJpbmdbXSB7XG4gIGxldCBhbGxQYXJhbXM6IHN0cmluZ1tdID0gW107XG4gIHRhcmdldC5zZWxlY3Q/LmZvckVhY2goKHNlbGVjdCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0LmZpbHRlcigoeCkgPT4geC50eXBlICE9PSAnZmllbGQnKTtcbiAgICBpZiAoc2VsZWN0b3IubGVuZ3RoID4gMCkge1xuICAgICAgYWxsUGFyYW1zLnB1c2goc2VsZWN0b3JbMF0udHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzZWxlY3RbMF0gJiYgc2VsZWN0WzBdLnBhcmFtcyAmJiBzZWxlY3RbMF0ucGFyYW1zWzBdKSB7XG4gICAgICAgIGFsbFBhcmFtcy5wdXNoKHNlbGVjdFswXS5wYXJhbXNbMF0udG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsZXQgdW5pcXVlUGFyYW1zOiBzdHJpbmdbXSA9IFtdO1xuICBhbGxQYXJhbXMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICB1bmlxdWVQYXJhbXMucHVzaChpbmNyZW1lbnROYW1lKHBhcmFtLCBwYXJhbSwgdW5pcXVlUGFyYW1zLCAwKSk7XG4gIH0pO1xuXG4gIHJldHVybiB1bmlxdWVQYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudE5hbWUobmFtZTogc3RyaW5nLCBuYW1lSW5jcmVtZW5ldDogc3RyaW5nLCBwYXJhbXM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKHBhcmFtcy5pbmRleE9mKG5hbWVJbmNyZW1lbmV0KSA+IC0xKSB7XG4gICAgaW5kZXgrKztcbiAgICByZXR1cm4gaW5jcmVtZW50TmFtZShuYW1lLCBuYW1lICsgJ18nICsgaW5kZXgsIHBhcmFtcywgaW5kZXgpO1xuICB9XG4gIHJldHVybiBuYW1lSW5jcmVtZW5ldDtcbn1cblxuZnVuY3Rpb24gYWRkVW5pcXVlKHM6IFNldDxzdHJpbmc+LCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHMuYWRkKHZhbHVlLnRvU3RyaW5nKCkpO1xufVxuIiwiaW1wb3J0IHsgRGF0YVF1ZXJ5LCBEYXRhU291cmNlSnNvbkRhdGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGVudW0gSW5mbHV4VmVyc2lvbiB7XG4gIEluZmx1eFFMID0gJ0luZmx1eFFMJyxcbiAgRmx1eCA9ICdGbHV4Jyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmZsdXhPcHRpb25zIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgdmVyc2lvbj86IEluZmx1eFZlcnNpb247XG5cbiAgdGltZUludGVydmFsPzogc3RyaW5nO1xuICBodHRwTW9kZT86IHN0cmluZztcblxuICAvLyBXaXRoIEZsdXhcbiAgb3JnYW5pemF0aW9uPzogc3RyaW5nO1xuICBkZWZhdWx0QnVja2V0Pzogc3RyaW5nO1xuICBtYXhTZXJpZXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mbHV4U2VjdXJlSnNvbkRhdGEge1xuICAvLyBGb3IgRmx1eFxuICB0b2tlbj86IHN0cmluZztcblxuICAvLyBJbiAxeCBhIGRpZmZlcmVudCBwYXNzd29yZCBjYW4gYmUgc2VudCB0aGFuIHRoZW4gSFRUUCBhdXRoXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZmx1eFF1ZXJ5UGFydCB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGFyYW1zPzogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcbiAgLy8gRklYTUU6IGBpbnRlcnZhbGAgZG9lcyBub3Qgc2VlbSB0byBiZSB1c2VkLlxuICAvLyBjaGVjayBhbGwgdGhlIGluZmx1eGRiIHBhcnRzIChxdWVyeS1nZW5lcmF0aW9uIGV0Yy4pLFxuICAvLyBpZiBpdCBpcyByZWFsbHkgc28sIGFuZCBpZiB5ZXMsIHJlbW92ZSBpdFxuICBpbnRlcnZhbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmZsdXhRdWVyeVRhZyB7XG4gIGtleTogc3RyaW5nO1xuICBvcGVyYXRvcj86IHN0cmluZztcbiAgY29uZGl0aW9uPzogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZXN1bHRGb3JtYXQgPSAndGltZV9zZXJpZXMnIHwgJ3RhYmxlJyB8ICdsb2dzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbmZsdXhRdWVyeSBleHRlbmRzIERhdGFRdWVyeSB7XG4gIHBvbGljeT86IHN0cmluZztcbiAgbWVhc3VyZW1lbnQ/OiBzdHJpbmc7XG4gIHJlc3VsdEZvcm1hdD86IFJlc3VsdEZvcm1hdDtcbiAgb3JkZXJCeVRpbWU/OiBzdHJpbmc7XG4gIHRhZ3M/OiBJbmZsdXhRdWVyeVRhZ1tdO1xuICBncm91cEJ5PzogSW5mbHV4UXVlcnlQYXJ0W107XG4gIHNlbGVjdD86IEluZmx1eFF1ZXJ5UGFydFtdW107XG4gIGxpbWl0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBzbGltaXQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHR6Pzogc3RyaW5nO1xuICAvLyBOT1RFOiBgZmlsbGAgaXMgbm90IHVzZWQgaW4gdGhlIHF1ZXJ5LWVkaXRvciBhbnltb3JlLCBhbmQgaXMgcmVtb3ZlZFxuICAvLyBpZiBhbnkgY2hhbmdlIGhhcHBlbnMgaW4gdGhlIHF1ZXJ5LWVkaXRvci4gdGhlIHF1ZXJ5LWdlbmVyYXRpb24gc3RpbGxcbiAgLy8gc3VwcG9ydHMgaXQgZm9yIG5vdy5cbiAgZmlsbD86IHN0cmluZztcbiAgcmF3UXVlcnk/OiBib29sZWFuO1xuICBxdWVyeT86IHN0cmluZztcbiAgYWxpYXM/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHN0YXRlKSB7XG4gICAgdmFyIHJlZiA9IHVzZVJlZigpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gc3RhdGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuIl0sIm5hbWVzIjpbInVuaXF1ZUlkIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Iiwib25VcGRhdGVEYXRhc291cmNlT3B0aW9uIiwidXBkYXRlRGF0YXNvdXJjZVBsdWdpblJlc2V0T3B0aW9uIiwib25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb24iLCJvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvblNlbGVjdCIsIm9uVXBkYXRlRGF0YXNvdXJjZVNlY3VyZUpzb25EYXRhT3B0aW9uIiwidXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uIiwiQWxlcnQiLCJEYXRhU291cmNlSHR0cFNldHRpbmdzIiwiSW5mb0JveCIsIklubGluZUZpZWxkIiwiSW5saW5lRm9ybUxhYmVsIiwiTGVnYWN5Rm9ybXMiLCJTZWxlY3QiLCJJbnB1dCIsIlNlY3JldEZvcm1GaWVsZCIsIkluZmx1eFZlcnNpb24iLCJodHRwTW9kZXMiLCJsYWJlbCIsInZhbHVlIiwidmVyc2lvbnMiLCJJbmZsdXhRTCIsImRlc2NyaXB0aW9uIiwiRmx1eCIsIkNvbmZpZ0VkaXRvciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtYXhTZXJpZXMiLCJzZWxlY3RlZCIsIm9wdGlvbnMiLCJvbk9wdGlvbnNDaGFuZ2UiLCJjb3B5IiwianNvbkRhdGEiLCJ2ZXJzaW9uIiwiYWNjZXNzIiwiYmFzaWNBdXRoIiwiaHR0cE1vZGUiLCJ1c2VyIiwiZGF0YWJhc2UiLCJzdGF0ZSIsInRvU3RyaW5nIiwiaHRtbFByZWZpeCIsInJlbmRlckluZmx1eDJ4Iiwic2VjdXJlSnNvbkZpZWxkcyIsInNlY3VyZUpzb25EYXRhIiwib3JnYW5pemF0aW9uIiwidG9rZW4iLCJvblJlc2V0VG9rZW4iLCJkZWZhdWx0QnVja2V0IiwidGltZUludGVydmFsIiwicmVuZGVySW5mbHV4MXgiLCJwYXNzd29yZCIsIm9uUmVzZXRQYXNzd29yZCIsImZpbmQiLCJyZW5kZXIiLCJvblZlcnNpb25DaGFuZ2VkIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWwiLCJwYXJzZUludCIsIk51bWJlciIsImlzRmluaXRlIiwidW5kZWZpbmVkIiwiY3giLCJjc3MiLCJnZXRUZW1wbGF0ZVNydiIsIkxpbmtCdXR0b24iLCJTZWdtZW50IiwiQ29kZUVkaXRvciIsIkNvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbUtpbmQiLCJzYW1wbGVzIiwiRmx1eFF1ZXJ5RWRpdG9yIiwicXVlcnkiLCJvbkNoYW5nZSIsIm9uUnVuUXVlcnkiLCJmb3JjZVVwZGF0ZSIsInN1Z3MiLCJraW5kIiwiUHJvcGVydHkiLCJkZXRhaWwiLCJ0ZW1wbGF0ZVNydiIsImdldFZhcmlhYmxlcyIsImZvckVhY2giLCJ2YXJpYWJsZSIsIm5hbWUiLCJyZXBsYWNlIiwicHVzaCIsIlRleHQiLCJlZGl0b3IiLCJzZXRUaW1lb3V0IiwibGF5b3V0IiwiaGVscFRvb2x0aXAiLCJvbkZsdXhRdWVyeUNoYW5nZSIsImdldFN1Z2dlc3Rpb25zIiwiZWRpdG9yRGlkTW91bnRDYWxsYmFja0hhY2siLCJvblNhbXBsZUNoYW5nZSIsIkNIRUFUX1NIRUVUX0lURU1TIiwidGl0bGUiLCJJbmZsdXhDaGVhdFNoZWV0IiwibWFwIiwiaXRlbSIsIkluZmx1eFN0YXJ0UGFnZSIsIm9uQ2xpY2tFeGFtcGxlIiwiYnVpbGRSYXdRdWVyeSIsIlF1ZXJ5RWRpdG9yTW9kZVN3aXRjaGVyIiwiUmF3SW5mbHV4UUxFZGl0b3IiLCJFZGl0b3IiLCJWaXN1YWxJbmZsdXhRTEVkaXRvciIsIlF1ZXJ5RWRpdG9yIiwiZGF0YXNvdXJjZSIsInJhbmdlIiwiZGF0YSIsImlzRmx1eCIsImRpc3BsYXkiLCJmbGV4R3JvdyIsInJhd1F1ZXJ5IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDb25maXJtTW9kYWwiLCJpc1JhdyIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiVGV4dEFyZWEiLCJIb3Jpem9udGFsR3JvdXAiLCJSRVNVTFRfRk9STUFUUyIsIkRFRkFVTFRfUkVTVUxUX0ZPUk1BVCIsInVzZVNoYWRvd2VkU3RhdGUiLCJ1c2VVbmlxdWVJZCIsImN1cnJlbnRRdWVyeSIsInNldEN1cnJlbnRRdWVyeSIsImN1cnJlbnRBbGlhcyIsInNldEN1cnJlbnRBbGlhcyIsImFsaWFzIiwiYWxpYXNFbGVtZW50SWQiLCJzZWxlY3RFbGVtZW50SWQiLCJyZXN1bHRGb3JtYXQiLCJhcHBseURlbGF5ZWRDaGFuZ2VzQW5kUnVuUXVlcnkiLCJlIiwidiIsIlZhcmlhYmxlUXVlcnlFZGl0b3IiLCJyZWZJZCIsIm9uUmVmcmVzaCIsIlNlZyIsInVud3JhcCIsIkFkZEJ1dHRvbiIsImxvYWRPcHRpb25zIiwiYWxsb3dDdXN0b21WYWx1ZSIsIm9uQWRkIiwidXNlTWVtbyIsIklubGluZUxhYmVsIiwiU2VnbWVudFNlY3Rpb24iLCJ1c2VTdHlsZXMyIiwiZ2V0QWxsTWVhc3VyZW1lbnRzRm9yVGFncyIsImdldEFsbFBvbGljaWVzIiwiZ2V0RmllbGRLZXlzRm9yTWVhc3VyZW1lbnQiLCJnZXRUYWdLZXlzRm9yTWVhc3VyZW1lbnRBbmRUYWdzIiwiZ2V0VGFnVmFsdWVzIiwibm9ybWFsaXplUXVlcnkiLCJhZGROZXdTZWxlY3RQYXJ0IiwicmVtb3ZlU2VsZWN0UGFydCIsImFkZE5ld0dyb3VwQnlQYXJ0IiwicmVtb3ZlR3JvdXBCeVBhcnQiLCJjaGFuZ2VTZWxlY3RQYXJ0IiwiY2hhbmdlR3JvdXBCeVBhcnQiLCJGb3JtYXRBc1NlY3Rpb24iLCJGcm9tU2VjdGlvbiIsIklucHV0U2VjdGlvbiIsIk9yZGVyQnlUaW1lU2VjdGlvbiIsIlBhcnRMaXN0U2VjdGlvbiIsIlRhZ3NTZWN0aW9uIiwiZ2V0TmV3U2VsZWN0UGFydE9wdGlvbnMiLCJnZXROZXdHcm91cEJ5UGFydE9wdGlvbnMiLCJtYWtlUGFydExpc3QiLCJnZXRUZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyIsIndpdGhUZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyIsIm9wdGlvbnNQcm9taXNlIiwidGhlbiIsImZpbHRlclRhZ3MiLCJwYXJ0cyIsImFsbFRhZ0tleXMiLCJmaWx0ZXIiLCJ0IiwiaGFzIiwia2V5IiwiZm9ybWF0QXNJZCIsIm9yZGVyQnlUaW1lSWQiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJtZWFzdXJlbWVudCIsInBvbGljeSIsInRhZ3MiLCJTZXQiLCJzZWxlY3RMaXN0cyIsImR5bmFtaWNTZWxlY3RQYXJ0T3B0aW9ucyIsIk1hcCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2VsZWN0Iiwic2VsIiwiZ2V0VGFnS2V5cyIsImtleXMiLCJncm91cEJ5TGlzdCIsImR5bmFtaWNHcm91cEJ5UGFydE9wdGlvbnMiLCJncm91cEJ5Iiwib25BcHBsaWVkQ2hhbmdlIiwibmV3UXVlcnkiLCJoYW5kbGVGcm9tU2VjdGlvbkNoYW5nZSIsInAiLCJtIiwiaGFuZGxlVGFnc1NlY3Rpb25DaGFuZ2UiLCJsZW5ndGgiLCJpbmxpbmVMYWJlbCIsImluZGV4IiwicGFydEluZGV4IiwibmV3UGFyYW1zIiwidHlwZSIsInR6Iiwib3JkZXJCeVRpbWUiLCJsaW1pdCIsInNsaW1pdCIsImZvcm1hdCIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsInRleHQiLCJwYWRkaW5nUmlnaHRDbGFzcyIsImNsYXNzTmFtZSIsImlucHV0SWQiLCJ0b1NlbGVjdGFibGVWYWx1ZSIsIkRFRkFVTFRfUE9MSUNZIiwiZ2V0UG9saWN5T3B0aW9ucyIsImdldE1lYXN1cmVtZW50T3B0aW9ucyIsImhhbmRsZVBvbGljeUxvYWRPcHRpb25zIiwiYWxsUG9saWNpZXMiLCJhbGxQb2xpY2llc1dpdGhEZWZhdWx0Iiwic29tZSIsImhhbmRsZU1lYXN1cmVtZW50TG9hZE9wdGlvbnMiLCJhbGxNZWFzdXJlbWVudHMiLCJpc1dpZGUiLCJwbGFjZWhvbGRlciIsImN1cnJlbnRWYWx1ZSIsInNldEN1cnJlbnRWYWx1ZSIsIm9uQmx1ciIsIm5ld1ZhbHVlIiwiT1BUSU9OUyIsIk1lbnVJdGVtIiwiV2l0aENvbnRleHRNZW51IiwiTWVudUdyb3VwIiwidXNlVGhlbWUyIiwicmVuZGVyUmVtb3ZhYmxlTmFtZU1lbnVJdGVtcyIsIm9uQ2xpY2siLCJub1JpZ2h0TWFyZ2luUGFkZGluZ0NsYXNzIiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luUmlnaHQiLCJSZW1vdmFibGVOYW1lIiwib25SZW1vdmUiLCJvcGVuTWVudSIsIm5vSG9yaXpNYXJnaW5QYWRkaW5nQ2xhc3MiLCJwYWRkaW5nTGVmdCIsIm1hcmdpbkxlZnQiLCJnZXRQYXJ0Q2xhc3MiLCJsaW5lSGVpZ2h0IiwidHlwb2dyYXBoeSIsImJvZHkiLCJmb250U2l6ZSIsIlBhcnQiLCJwYXJhbXMiLCJwYXJ0Q2xhc3MiLCJvblBhcmFtQ2hhbmdlIiwicGFyIiwiaSIsImlzTGFzdCIsIml0ZW1zIiwiZ2V0TmV3UGFydE9wdGlvbnMiLCJvbkFkZE5ld1BhcnQiLCJvblJlbW92ZVBhcnQiLCJwYXJ0IiwicGFycyIsImRlYm91bmNlUHJvbWlzZSIsInVzZUFzeW5jRm4iLCJBc3luY1NlbGVjdCIsInNlbGVjdENsYXNzIiwibWluV2lkdGgiLCJmb3JtYXRDcmVhdGVMYWJlbCIsIlNlbFJlbG9hZCIsIm9uQ2xvc2UiLCJkZWJvdW5jZWRMb2FkT3B0aW9ucyIsImxlYWRpbmciLCJTZWxTaW5nbGVMb2FkIiwibG9hZFN0YXRlIiwiZG9Mb2FkIiwibG9hZGluZyIsIlNlbCIsImZpbHRlckJ5TG9hZE9wdGlvbnMiLCJJbnAiLCJpbml0aWFsVmFsdWUiLCJkZWZhdWx0QnV0dG9uQ2xhc3MiLCJ3aWR0aCIsImN1cnNvciIsImJ1dHRvbkNsYXNzTmFtZSIsImlzT3BlbiIsInNldE9wZW4iLCJhZGp1c3RPcGVyYXRvcklmTmVlZGVkIiwiZ2V0Q29uZGl0aW9uIiwiZ2V0T3BlcmF0b3IiLCJrbm93bk9wZXJhdG9ycyIsImtub3duQ29uZGl0aW9ucyIsIm9wZXJhdG9yT3B0aW9ucyIsImNvbmRpdGl0b25PcHRpb25zIiwibG9hZENvbmRpdGlvbk9wdGlvbnMiLCJsb2FkT3BlcmF0b3JPcHRpb25zIiwiVGFnIiwidGFnIiwiaXNGaXJzdCIsImdldFRhZ0tleU9wdGlvbnMiLCJnZXRUYWdWYWx1ZU9wdGlvbnMiLCJvcGVyYXRvciIsImNvbmRpdGlvbiIsImdldFRhZ0tleVNlZ21lbnRPcHRpb25zIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRUYWdWYWx1ZVNlZ21lbnRPcHRpb25zIiwib3AiLCJvblRhZ0NoYW5nZSIsIm5ld1RhZyIsIm5ld1RhZ3MiLCJvblRhZ1JlbW92ZSIsImFkZE5ld1RhZyIsInRhZ0tleSIsIm1pbmltYWxUYWciLCJuZXdUIiwiSW5mbHV4UXVlcnlNb2RlbCIsInF1ZXJ5UGFydCIsImNhdGVnb3JpZXMiLCJnZXRDYXRlZ29yaWVzIiwiT2JqZWN0IiwiY2hpbGRyZW4iLCJ4IiwidGFnS2V5cyIsInF1ZXJ5Q29weSIsIm1vZGVsIiwiaGFzRmlsbCIsImhhc0dyb3VwQnlUaW1lIiwiZ2V0UGFydFBhcmFtcyIsImR5bmFtaWNQYXJhbU9wdGlvbnMiLCJkZWYiLCJjcmVhdGUiLCJwYXJhbVZhbHVlcyIsIkVycm9yIiwiZGVmUGFyYW0iLCJkeW5hbWljTG9va3VwIiwiZ2V0IiwicXVlcnlQYXJ0cyIsInFwIiwiaXNSZWdleCIsInRlc3QiLCJjdXJyZW50T3BlcmF0b3IiLCJuZXdUYWdWYWx1ZSIsImlzQ3VycmVudE9wZXJhdG9yUmVnZXgiLCJpc05ld1RhZ1ZhbHVlUmVnZXgiLCJ1c2VQcmV2aW91cyIsIm91dHNpZGVWYWwiLCJjdXJyZW50VmFsIiwic2V0Q3VycmVudFZhbCIsInByZXZPdXRzaWRlVmFsIiwiaXNPdXRzaWRlVmFsQ2hhbmdlZCIsImNsb25lRGVlcCIsImV4dGVuZCIsImlzU3RyaW5nIiwiX21hcCIsIm9taXQiLCJwaWNrIiwicmVkdWNlIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwidGhyb3dFcnJvciIsImNhdGNoRXJyb3IiLCJ2NCIsInV1aWR2NCIsIkFycmF5VmVjdG9yIiwiZGF0ZU1hdGgiLCJkYXRlVGltZSIsIkZpZWxkVHlwZSIsIkxvYWRpbmdTdGF0ZSIsIlRJTUVfU0VSSUVTX1RJTUVfRklFTERfTkFNRSIsIlRJTUVfU0VSSUVTX1ZBTFVFX0ZJRUxEX05BTUUiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJmcmFtZVRvTWV0cmljRmluZFZhbHVlIiwiZ2V0QmFja2VuZFNydiIsImNvbmZpZyIsIkluZmx1eFNlcmllcyIsIkluZmx1eFF1ZXJ5QnVpbGRlciIsIlJlc3BvbnNlUGFyc2VyIiwiZ2V0RmllbGRUeXBlIiwidmFsdWVzIiwiZmlyc3ROb3ROdWxsIiwibnVtYmVyIiwidmFsdWVUeXBlIiwic3RyaW5nIiwiYm9vbGVhbiIsInRpbWVTZXJpZXNUb0RhdGFGcmFtZSIsInRpbWVTZXJpZXMiLCJ0aW1lcyIsInBvaW50cyIsImRhdGFwb2ludHMiLCJwb2ludCIsInRpbWVGaWVsZCIsInRpbWUiLCJ2YWx1ZUZpZWxkIiwiZGlzcGxheU5hbWVGcm9tRFMiLCJsYWJlbHMiLCJmaWVsZHMiLCJ0YXJnZXQiLCJtZXRhIiwiSW5mbHV4RGF0YXNvdXJjZSIsImluc3RhbmNlU2V0dGluZ3MiLCJ1cmxzIiwidXJsIiwic3BsaXQiLCJ0cmltIiwidXNlcm5hbWUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzZXR0aW5nc0RhdGEiLCJpbnRlcnZhbCIsInJlc3BvbnNlUGFyc2VyIiwiYW5ub3RhdGlvbnMiLCJyZXF1ZXN0IiwiZmlsdGVyZWRSZXF1ZXN0IiwidGFyZ2V0cyIsImhpZGUiLCJpc01pZ3JhdGlvblRvZ2dsZU9uQW5kSXNBY2Nlc3NQcm94eSIsInBpcGUiLCJyZXMiLCJtZXNzYWdlIiwic2VyaWVzTGlzdCIsImdyb3VwZWRGcmFtZXMiLCJmaWx0ZXJlZEZyYW1lcyIsImdldFRhYmxlIiwicHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGUiLCJjbGFzc2ljUXVlcnkiLCJnZXRRdWVyeURpc3BsYXlUZXh0IiwiZmlsdGVyUXVlcnkiLCJhcHBseVRlbXBsYXRlVmFyaWFibGVzIiwic2NvcGVkVmFycyIsInJlc3QiLCJmZWF0dXJlVG9nZ2xlcyIsImluZmx1eGRiQmFja2VuZE1pZ3JhdGlvbiIsImFwcGx5VmFyaWFibGVzIiwidGltZUZpbHRlciIsImdldFRpbWVGaWx0ZXIiLCJxdWVyeVRhcmdldHMiLCJ5IiwiYWxsUXVlcmllcyIsIl9faW50ZXJ2YWwiLCJhY2MiLCJjdXJyZW50IiwiYWRob2NGaWx0ZXJzIiwiZ2V0QWRob2NGaWx0ZXJzIiwidG1wUXVlcnkiLCJyZW5kZXJBZGhvY0ZpbHRlcnMiLCJfc2VyaWVzUXVlcnkiLCJyZXN1bHRzIiwicmVzdWx0Iiwic2VyaWVzIiwiZXhlY3V0ZWRRdWVyeVN0cmluZyIsImluZmx1eFNlcmllcyIsImdldFRpbWVTZXJpZXMiLCJhbm5vdGF0aW9uUXVlcnkiLCJyZWplY3QiLCJhbm5vdGF0aW9uIiwiZ2V0UmVmIiwiZmV0Y2giLCJtZXRob2QiLCJmcm9tIiwidmFsdWVPZiIsInRvIiwicXVlcmllcyIsInJlcXVlc3RJZCIsInRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZSIsInJhbmdlUmF3IiwidGltZXpvbmUiLCJkYXNoYm9hcmQiLCJnZXRBbm5vdGF0aW9ucyIsInRhcmdldENvbnRhaW5zVGVtcGxhdGUiLCJxdWVyeVRleHQiLCJjb250YWluc1RlbXBsYXRlIiwiaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMiLCJleHBhbmRlZFF1ZXJ5IiwicGFyYW0iLCJzZWxlY3RzIiwibWV0cmljRmluZFF1ZXJ5IiwicnNwIiwiaW50ZXJwb2xhdGVkIiwicmVzcCIsInBhcnNlIiwicXVlcnlCdWlsZGVyIiwiYnVpbGRFeHBsb3JlUXVlcnkiLCJfaW5mbHV4UmVxdWVzdCIsInEiLCJlcG9jaCIsInNlcmlhbGl6ZVBhcmFtcyIsIm1lbW8iLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwidGVzdERhdGFzb3VyY2UiLCJpZCIsImRhc2hib2FyZElkIiwicGFuZWxJZCIsImludGVydmFsTXMiLCJtYXhEYXRhUG9pbnRzIiwiRG9uZSIsInN0YXR1cyIsImZpcnN0IiwiY3VycmVudFVybCIsInNoaWZ0IiwidSIsImRiIiwicmVxIiwicHJlY2lzaW9uIiwiaW5zcGVjdCIsInBhcmFtU2VyaWFsaXplciIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXJyb3JzIiwiZWxlbSIsImNhbmNlbGxlZCIsImhhbmRsZUVycm9ycyIsImlzSW50ZWdlciIsInN0YXR1c1RleHQiLCJnZXRJbmZsdXhUaW1lIiwidW50aWwiLCJkYXRlIiwicm91bmRVcCIsImV4ZWMiLCJhbW91bnQiLCJ1bml0IiwicnVuRXhwbG9yZVF1ZXJ5Iiwid2l0aEtleSIsIndpdGhNZWFzdXJlbWVudEZpbHRlciIsImJ1aWxkZXIiLCJtZWFzdXJlbWVudEZpbHRlciIsImluZGV4T2YiLCJrYm4iLCJ1cGRhdGVQcm9qZWN0aW9uIiwic2VsZWN0TW9kZWxzIiwiZ3JvdXBCeVBhcnRzIiwidXBkYXRlUGVyc2lzdGVkUGFydHMiLCJzZWxlY3RQYXJ0cyIsImciLCJhZGRHcm91cEJ5Iiwic3RyaW5nUGFydHMiLCJtYXRjaCIsInR5cGVQYXJ0IiwiYXJnIiwicGFydE1vZGVsIiwicGFydENvdW50Iiwic3BsaWNlIiwicyIsImNhdGVnb3J5IiwiQWdncmVnYXRpb25zIiwiU2VsZWN0b3JzIiwicmVtb3ZlU2VsZWN0IiwibW9kZWxzSW5kZXgiLCJhZGRTZWxlY3RQYXJ0IiwiYWRkU3RyYXRlZ3kiLCJyZW5kZXJUYWdDb25kaXRpb24iLCJpbnRlcnBvbGF0ZSIsInN0ciIsImdldE1lYXN1cmVtZW50QW5kUG9saWN5IiwiaW50ZXJwb2xhdGVRdWVyeVN0ciIsImRlZmF1bHRGb3JtYXRGbiIsIm11bHRpIiwiaW5jbHVkZUFsbCIsInJlZ2V4RXNjYXBlIiwiZXNjYXBlZFZhbHVlcyIsInNlbGVjdFRleHQiLCJjb25kaXRpb25zIiwiZ3JvdXBCeVNlY3Rpb24iLCJmaWxsIiwiZmlsdGVycyIsImVhY2giLCJpbmNsdWRlcyIsImZsYXR0ZW4iLCJUYWJsZU1vZGVsIiwib3V0cHV0IiwiaiIsImNvbHVtbnMiLCJzZXJpZXNOYW1lIiwiY29sdW1uTmFtZSIsIl9nZXRTZXJpZXNOYW1lIiwicmVnZXgiLCJzZWdtZW50cyIsImcxIiwiZzIiLCJncm91cCIsInNlZ0luZGV4IiwiaXNOYU4iLCJsaXN0IiwidGl0bGVDb2wiLCJ0aW1lQ29sIiwidGltZUVuZENvbCIsInRhZ3NDb2wiLCJ0ZXh0Q29sIiwiY29sdW1uIiwidGl0bGVDb2x1bW4iLCJ0YWdzQ29sdW1uIiwidGV4dENvbHVtbiIsInRpbWVFbmRDb2x1bW4iLCJEYXRlIiwidGltZUVuZCIsInRhYmxlIiwic2VyaWVzSW5kZXgiLCJmaXJzdENvbCIsImZpcnN0VGFibGVDb2wiLCJyZW9yZGVyZWQiLCJoYXNPd25Qcm9wZXJ0eSIsInJvd3MiLCJEYXRhU291cmNlUGx1Z2luIiwiSW5mbHV4QW5ub3RhdGlvbnNRdWVyeUN0cmwiLCJwbHVnaW4iLCJzZXRDb25maWdFZGl0b3IiLCJzZXRRdWVyeUVkaXRvciIsInNldEFubm90YXRpb25RdWVyeUN0cmwiLCJzZXRWYXJpYWJsZVF1ZXJ5RWRpdG9yIiwic2V0UXVlcnlFZGl0b3JIZWxwIiwic2VsZWN0TW9kZWwiLCJsaXN0SW5kZXgiLCJuZXdTZWwiLCJuZXdHcm91cEJ5Iiwid2hlcmVDb25kaXRpb25zIiwiY2xvbmUiLCJRdWVyeVBhcnREZWYiLCJRdWVyeVBhcnQiLCJmdW5jdGlvblJlbmRlcmVyIiwic3VmZml4UmVuZGVyZXIiLCJUcmFuc2Zvcm1hdGlvbnMiLCJQcmVkaWN0b3JzIiwiTWF0aCIsIkFsaWFzaW5nIiwiRmllbGRzIiwiY3JlYXRlUGFydCIsInJlZ2lzdGVyIiwiZ3JvdXBCeVRpbWVGdW5jdGlvbnMiLCJhbGlhc1JlbmRlcmVyIiwiaW5uZXJFeHByIiwiZmllbGRSZW5kZXJlciIsInJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5IiwibW9yZVBhcnRzQXZhaWxhYmxlIiwibmV4dFBhcnQiLCJhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5IiwiYWRkTWF0aFN0cmF0ZWd5IiwiYWRkQWxpYXNTdHJhdGVneSIsImFkZEZpZWxkU3RyYXRlZ3kiLCJkZWZhdWx0UGFyYW1zIiwicmVuZGVyZXIiLCJxdW90ZSIsInJlbmRlck1vZGUiLCJyZXBsYWNlQWdncmVnYXRpb25BZGQiLCJpc0FycmF5IiwidG9EYXRhUXVlcnlSZXNwb25zZSIsImluZmx1eFJlc3VsdHMiLCJub3JtYWxpemVkUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImlzVmFsdWVGaXJzdCIsInNlcmllIiwiYWRkVW5pcXVlIiwiQXJyYXkiLCJkZnMiLCJnZXRUYWJsZUNvbHMiLCJkZnNCeUxhYmVscyIsImRmIiwiZ2V0VGFibGVSb3dzIiwiY29sQ29udGFpbnNUYWciLCJjb2xUZXh0Iiwic2VsZWN0ZWRQYXJhbXMiLCJnZXRTZWxlY3RlZFBhcmFtcyIsImZpZWxkIiwidG9BcnJheSIsIm1ldHJpY3MiLCJhbGxQYXJhbXMiLCJzZWxlY3RvciIsInVuaXF1ZVBhcmFtcyIsImluY3JlbWVudE5hbWUiLCJuYW1lSW5jcmVtZW5ldCIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=