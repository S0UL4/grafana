(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["alertmanagerPlugin"],{

/***/ "./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx":
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _InlineFormLabel;









const IMPL_OPTIONS = [{
  value: _types__WEBPACK_IMPORTED_MODULE_4__.AlertManagerImplementation.mimir,
  icon: 'public/img/alerting/mimir_logo.svg',
  label: 'Mimir',
  description: `https://grafana.com/oss/mimir/. An open source, horizontally scalable, highly available, multi-tenant, long-term storage for Prometheus.`
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_4__.AlertManagerImplementation.cortex,
  label: 'Cortex',
  description: `https://cortexmetrics.io/`
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_4__.AlertManagerImplementation.prometheus,
  label: 'Prometheus',
  description: 'https://prometheus.io/. Does not support editing configuration via API, so contact points and notification policies are read-only.'
}];
const ConfigEditor = props => {
  const {
    options,
    onOptionsChange
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "page-heading",
      children: "Alertmanager"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFormLabel, {
            width: 13,
            children: "Implementation"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
            width: 40,
            options: IMPL_OPTIONS,
            value: options.jsonData.implementation || _types__WEBPACK_IMPORTED_MODULE_4__.AlertManagerImplementation.mimir,
            onChange: value => onOptionsChange(Object.assign({}, options, {
              jsonData: Object.assign({}, options.jsonData, {
                implementation: value.value
              })
            }))
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DataSourceHttpSettings, {
      defaultUrl: '',
      dataSourceConfig: options,
      showAccessOptions: true,
      onChange: onOptionsChange,
      sigV4AuthToggleEnabled: app_core_config__WEBPACK_IMPORTED_MODULE_3__.config.sigV4AuthEnabled,
      renderSigV4Editor: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_aws_sdk__WEBPACK_IMPORTED_MODULE_1__.SIGV4ConnectionConfig, Object.assign({}, props))
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/DataSource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertManagerDatasource": () => (/* binding */ AlertManagerDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");




class AlertManagerDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
  } // `query()` has to be implemented but we actually don't use it, just need this
  // data source to proxy requests.
  // @ts-ignore


  query() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      data: []
    });
  }

  _request(url) {
    const options = {
      headers: {},
      method: 'GET',
      url: this.instanceSettings.url + url
    };

    if (this.instanceSettings.basicAuth || this.instanceSettings.withCredentials) {
      this.instanceSettings.withCredentials = true;
    }

    if (this.instanceSettings.basicAuth) {
      options.headers.Authorization = this.instanceSettings.basicAuth;
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch(options));
  }

  async testDatasource() {
    var _alertmanagerResponse3;

    let alertmanagerResponse;

    if (this.instanceSettings.jsonData.implementation === _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.prometheus) {
      try {
        var _alertmanagerResponse;

        alertmanagerResponse = await this._request('/alertmanager/api/v2/status');

        if (alertmanagerResponse && ((_alertmanagerResponse = alertmanagerResponse) === null || _alertmanagerResponse === void 0 ? void 0 : _alertmanagerResponse.status) === 200) {
          return {
            status: 'error',
            message: 'It looks like you have chosen Prometheus implementation, but detected a Mimir or Cortex endpoint. Please update implementation selection and try again.'
          };
        }
      } catch (e) {}

      try {
        alertmanagerResponse = await this._request('/api/v2/status');
      } catch (e) {}
    } else {
      try {
        var _alertmanagerResponse2;

        alertmanagerResponse = await this._request('/api/v2/status');

        if (alertmanagerResponse && ((_alertmanagerResponse2 = alertmanagerResponse) === null || _alertmanagerResponse2 === void 0 ? void 0 : _alertmanagerResponse2.status) === 200) {
          return {
            status: 'error',
            message: 'It looks like you have chosen a Mimir or Cortex implementation, but detected a Prometheus endpoint. Please update implementation selection and try again.'
          };
        }
      } catch (e) {}

      try {
        alertmanagerResponse = await this._request('/alertmanager/api/v2/status');
      } catch (e) {}
    }

    return ((_alertmanagerResponse3 = alertmanagerResponse) === null || _alertmanagerResponse3 === void 0 ? void 0 : _alertmanagerResponse3.status) === 200 ? {
      status: 'success',
      message: 'Health check passed.'
    } : {
      status: 'error',
      message: 'Health check failed.'
    };
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx");
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/DataSource.ts");


 // This is not actually a data source but since 7.1,
// it is required to specify query types. Which we don't have.
// @ts-ignore

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_DataSource__WEBPACK_IMPORTED_MODULE_2__.AlertManagerDatasource).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor);

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRtYW5hZ2VyUGx1Z2luLjYwZDc1MjhmZWFlZWFlMzcyZTFkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQSxNQUFNTyxZQUErQixHQUFHLENBQ3RDO0VBQ0VDLEtBQUssRUFBRUYsb0VBRFQ7RUFFRUksSUFBSSxFQUFFLG9DQUZSO0VBR0VDLEtBQUssRUFBRSxPQUhUO0VBSUVDLFdBQVcsRUFBRztBQUpoQixDQURzQyxFQU90QztFQUNFSixLQUFLLEVBQUVGLHFFQURUO0VBRUVLLEtBQUssRUFBRSxRQUZUO0VBR0VDLFdBQVcsRUFBRztBQUhoQixDQVBzQyxFQVl0QztFQUNFSixLQUFLLEVBQUVGLHlFQURUO0VBRUVLLEtBQUssRUFBRSxZQUZUO0VBR0VDLFdBQVcsRUFDVDtBQUpKLENBWnNDLENBQXhDO0FBb0JPLE1BQU1HLFlBQVksR0FBSUMsS0FBRCxJQUFrQjtFQUM1QyxNQUFNO0lBQUVDLE9BQUY7SUFBV0M7RUFBWCxJQUErQkYsS0FBckM7RUFFQSxvQkFDRTtJQUFBLG9DQUNFO01BQUksU0FBUyxFQUFDLGNBQWQ7TUFBQTtJQUFBLEVBREYsZ0JBRUU7TUFBSyxTQUFTLEVBQUMsZUFBZjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDLGdCQUFmO1FBQUEsdUJBQ0U7VUFBSyxTQUFTLEVBQUMsU0FBZjtVQUFBLGdFQUNFLHVEQUFDLHdEQUFEO1lBQWlCLEtBQUssRUFBRSxFQUF4QjtZQUFBO1VBQUEsRUFERixnQkFFRSx1REFBQywrQ0FBRDtZQUNFLEtBQUssRUFBRSxFQURUO1lBRUUsT0FBTyxFQUFFVCxZQUZYO1lBR0UsS0FBSyxFQUFFVSxPQUFPLENBQUNFLFFBQVIsQ0FBaUJDLGNBQWpCLElBQW1DZCxvRUFINUM7WUFJRSxRQUFRLEVBQUdFLEtBQUQsSUFDUlUsZUFBZSxtQkFDVkQsT0FEVTtjQUViRSxRQUFRLG9CQUNIRixPQUFPLENBQUNFLFFBREw7Z0JBRU5DLGNBQWMs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QUFDakMsOEJBQThCO0FBQzlCLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkI7Ozs7Ozs7OztBQzFlYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsbUtBQXVEO0FBQ3pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci9Db25maWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvRGF0YVNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQGdyYWZhbmEtYXdzLXNkay1ucG0tMC4wLjM2LThhYjRiMDc5MDQtYzI0M2Y3YzkwMC56aXAvbm9kZV9tb2R1bGVzL0BncmFmYW5hL2F3cy1zZGsvZGlzdC9pbmRleC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQGdyYWZhbmEtYXdzLXNkay1ucG0tMC4wLjM2LThhYjRiMDc5MDQtYzI0M2Y3YzkwMC56aXAvbm9kZV9tb2R1bGVzL0BncmFmYW5hL2F3cy1zZGsvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU0lHVjRDb25uZWN0aW9uQ29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvYXdzLXNkayc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VIdHRwU2V0dGluZ3MsIElubGluZUZvcm1MYWJlbCwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZUpzb25EYXRhLCBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZUpzb25EYXRhPjtcblxuY29uc3QgSU1QTF9PUFRJT05TOiBTZWxlY3RhYmxlVmFsdWVbXSA9IFtcbiAge1xuICAgIHZhbHVlOiBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbi5taW1pcixcbiAgICBpY29uOiAncHVibGljL2ltZy9hbGVydGluZy9taW1pcl9sb2dvLnN2ZycsXG4gICAgbGFiZWw6ICdNaW1pcicsXG4gICAgZGVzY3JpcHRpb246IGBodHRwczovL2dyYWZhbmEuY29tL29zcy9taW1pci8uIEFuIG9wZW4gc291cmNlLCBob3Jpem9udGFsbHkgc2NhbGFibGUsIGhpZ2hseSBhdmFpbGFibGUsIG11bHRpLXRlbmFudCwgbG9uZy10ZXJtIHN0b3JhZ2UgZm9yIFByb21ldGhldXMuYCxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbi5jb3J0ZXgsXG4gICAgbGFiZWw6ICdDb3J0ZXgnLFxuICAgIGRlc2NyaXB0aW9uOiBgaHR0cHM6Ly9jb3J0ZXhtZXRyaWNzLmlvL2AsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogQWxlcnRNYW5hZ2VySW1wbGVtZW50YXRpb24ucHJvbWV0aGV1cyxcbiAgICBsYWJlbDogJ1Byb21ldGhldXMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ2h0dHBzOi8vcHJvbWV0aGV1cy5pby8uIERvZXMgbm90IHN1cHBvcnQgZWRpdGluZyBjb25maWd1cmF0aW9uIHZpYSBBUEksIHNvIGNvbnRhY3QgcG9pbnRzIGFuZCBub3RpZmljYXRpb24gcG9saWNpZXMgYXJlIHJlYWQtb25seS4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0VkaXRvciA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5BbGVydG1hbmFnZXI8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWwgd2lkdGg9ezEzfT5JbXBsZW1lbnRhdGlvbjwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e0lNUExfT1BUSU9OU31cbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEuaW1wbGVtZW50YXRpb24gfHwgQWxlcnRNYW5hZ2VySW1wbGVtZW50YXRpb24ubWltaXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgb25PcHRpb25zQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICBqc29uRGF0YToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLFxuICAgICAgICAgICAgICAgICAgICBpbXBsZW1lbnRhdGlvbjogdmFsdWUudmFsdWUgYXMgQWxlcnRNYW5hZ2VySW1wbGVtZW50YXRpb24sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8RGF0YVNvdXJjZUh0dHBTZXR0aW5nc1xuICAgICAgICBkZWZhdWx0VXJsPXsnJ31cbiAgICAgICAgZGF0YVNvdXJjZUNvbmZpZz17b3B0aW9uc31cbiAgICAgICAgc2hvd0FjY2Vzc09wdGlvbnM9e3RydWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAgIHNpZ1Y0QXV0aFRvZ2dsZUVuYWJsZWQ9e2NvbmZpZy5zaWdWNEF1dGhFbmFibGVkfVxuICAgICAgICByZW5kZXJTaWdWNEVkaXRvcj17PFNJR1Y0Q29ubmVjdGlvbkNvbmZpZyB7Li4ucHJvcHN9PjwvU0lHVjRDb25uZWN0aW9uQ29uZmlnPn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVF1ZXJ5LCBEYXRhUXVlcnlSZXNwb25zZSwgRGF0YVNvdXJjZUFwaSwgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhY2tlbmRTcnZSZXF1ZXN0LCBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VKc29uRGF0YSwgQWxlcnRNYW5hZ2VySW1wbGVtZW50YXRpb24gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgQWxlcnRNYW5hZ2VyUXVlcnkgPSB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG59ICYgRGF0YVF1ZXJ5O1xuXG5leHBvcnQgY2xhc3MgQWxlcnRNYW5hZ2VyRGF0YXNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VBcGk8QWxlcnRNYW5hZ2VyUXVlcnksIEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VKc29uRGF0YT4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZUpzb25EYXRhPikge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gYHF1ZXJ5KClgIGhhcyB0byBiZSBpbXBsZW1lbnRlZCBidXQgd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIGl0LCBqdXN0IG5lZWQgdGhpc1xuICAvLyBkYXRhIHNvdXJjZSB0byBwcm94eSByZXF1ZXN0cy5cbiAgLy8gQHRzLWlnbm9yZVxuICBxdWVyeSgpOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIG9mKHtcbiAgICAgIGRhdGE6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgX3JlcXVlc3QodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBvcHRpb25zOiBCYWNrZW5kU3J2UmVxdWVzdCA9IHtcbiAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogdGhpcy5pbnN0YW5jZVNldHRpbmdzLnVybCArIHVybCxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2VTZXR0aW5ncy5iYXNpY0F1dGggfHwgdGhpcy5pbnN0YW5jZVNldHRpbmdzLndpdGhDcmVkZW50aWFscykge1xuICAgICAgdGhpcy5pbnN0YW5jZVNldHRpbmdzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2VTZXR0aW5ncy5iYXNpY0F1dGgpIHtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyEuQXV0aG9yaXphdGlvbiA9IHRoaXMuaW5zdGFuY2VTZXR0aW5ncy5iYXNpY0F1dGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oZ2V0QmFja2VuZFNydigpLmZldGNoPGFueT4ob3B0aW9ucykpO1xuICB9XG5cbiAgYXN5bmMgdGVzdERhdGFzb3VyY2UoKSB7XG4gICAgbGV0IGFsZXJ0bWFuYWdlclJlc3BvbnNlO1xuXG4gICAgaWYgKHRoaXMuaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5pbXBsZW1lbnRhdGlvbiA9PT0gQWxlcnRNYW5hZ2VySW1wbGVtZW50YXRpb24ucHJvbWV0aGV1cykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWxlcnRtYW5hZ2VyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0KCcvYWxlcnRtYW5hZ2VyL2FwaS92Mi9zdGF0dXMnKTtcbiAgICAgICAgaWYgKGFsZXJ0bWFuYWdlclJlc3BvbnNlICYmIGFsZXJ0bWFuYWdlclJlc3BvbnNlPy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAnSXQgbG9va3MgbGlrZSB5b3UgaGF2ZSBjaG9zZW4gUHJvbWV0aGV1cyBpbXBsZW1lbnRhdGlvbiwgYnV0IGRldGVjdGVkIGEgTWltaXIgb3IgQ29ydGV4IGVuZHBvaW50LiBQbGVhc2UgdXBkYXRlIGltcGxlbWVudGF0aW9uIHNlbGVjdGlvbiBhbmQgdHJ5IGFnYWluLicsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHRyeSB7XG4gICAgICAgIGFsZXJ0bWFuYWdlclJlc3BvbnNlID0gYXdhaXQgdGhpcy5fcmVxdWVzdCgnL2FwaS92Mi9zdGF0dXMnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFsZXJ0bWFuYWdlclJlc3BvbnNlID0gYXdhaXQgdGhpcy5fcmVxdWVzdCgnL2FwaS92Mi9zdGF0dXMnKTtcbiAgICAgICAgaWYgKGFsZXJ0bWFuYWdlclJlc3BvbnNlICYmIGFsZXJ0bWFuYWdlclJlc3BvbnNlPy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAnSXQgbG9va3MgbGlrZSB5b3UgaGF2ZSBjaG9zZW4gYSBNaW1pciBvciBDb3J0ZXggaW1wbGVtZW50YXRpb24sIGJ1dCBkZXRlY3RlZCBhIFByb21ldGhldXMgZW5kcG9pbnQuIFBsZWFzZSB1cGRhdGUgaW1wbGVtZW50YXRpb24gc2VsZWN0aW9uIGFuZCB0cnkgYWdhaW4uJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdHJ5IHtcbiAgICAgICAgYWxlcnRtYW5hZ2VyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0KCcvYWxlcnRtYW5hZ2VyL2FwaS92Mi9zdGF0dXMnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsZXJ0bWFuYWdlclJlc3BvbnNlPy5zdGF0dXMgPT09IDIwMFxuICAgICAgPyB7XG4gICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogJ0hlYWx0aCBjaGVjayBwYXNzZWQuJyxcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgIG1lc3NhZ2U6ICdIZWFsdGggY2hlY2sgZmFpbGVkLicsXG4gICAgICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgQ29uZmlnRWRpdG9yIH0gZnJvbSAnLi9Db25maWdFZGl0b3InO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyRGF0YXNvdXJjZSB9IGZyb20gJy4vRGF0YVNvdXJjZSc7XG5cbi8vIFRoaXMgaXMgbm90IGFjdHVhbGx5IGEgZGF0YSBzb3VyY2UgYnV0IHNpbmNlIDcuMSxcbi8vIGl0IGlzIHJlcXVpcmVkIHRvIHNwZWNpZnkgcXVlcnkgdHlwZXMuIFdoaWNoIHdlIGRvbid0IGhhdmUuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW4oQWxlcnRNYW5hZ2VyRGF0YXNvdXJjZSkuc2V0Q29uZmlnRWRpdG9yKENvbmZpZ0VkaXRvcik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IF9pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG52YXIgdWkgPSByZXF1aXJlKCdAZ3JhZmFuYS91aScpO1xudmFyIGRhdGEgPSByZXF1aXJlKCdAZ3JhZmFuYS9kYXRhJyk7XG52YXIgbG9kYXNoID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cblxudmFyIHN0YW5kYXJkUmVnaW9ucyA9IFtcclxuICAgICdhZi1zb3V0aC0xJyxcclxuICAgICdhcC1lYXN0LTEnLFxyXG4gICAgJ2FwLW5vcnRoZWFzdC0xJyxcclxuICAgICdhcC1ub3J0aGVhc3QtMicsXHJcbiAgICAnYXAtbm9ydGhlYXN0LTMnLFxyXG4gICAgJ2FwLXNvdXRoLTEnLFxyXG4gICAgJ2FwLXNvdXRoZWFzdC0xJyxcclxuICAgICdhcC1zb3V0aGVhc3QtMicsXHJcbiAgICAnY2EtY2VudHJhbC0xJyxcclxuICAgICdjbi1ub3J0aC0xJyxcclxuICAgICdjbi1ub3J0aHdlc3QtMScsXHJcbiAgICAnZXUtY2VudHJhbC0xJyxcclxuICAgICdldS1ub3J0aC0xJyxcclxuICAgICdldS13ZXN0LTEnLFxyXG4gICAgJ2V1LXdlc3QtMicsXHJcbiAgICAnZXUtd2VzdC0zJyxcclxuICAgICdtZS1zb3V0aC0xJyxcclxuICAgICdzYS1lYXN0LTEnLFxyXG4gICAgJ3VzLWVhc3QtMScsXHJcbiAgICAndXMtZWFzdC0yJyxcclxuICAgICd1cy1nb3YtZWFzdC0xJyxcclxuICAgICd1cy1nb3Ytd2VzdC0xJyxcclxuICAgICd1cy1pc28tZWFzdC0xJyxcclxuICAgICd1cy1pc29iLWVhc3QtMScsXHJcbiAgICAndXMtd2VzdC0xJyxcclxuICAgICd1cy13ZXN0LTInLFxyXG5dO1xuXG4oZnVuY3Rpb24gKEF3c0F1dGhUeXBlKSB7XHJcbiAgICBBd3NBdXRoVHlwZVtcIktleXNcIl0gPSBcImtleXNcIjtcclxuICAgIEF3c0F1dGhUeXBlW1wiQ3JlZGVudGlhbHNcIl0gPSBcImNyZWRlbnRpYWxzXCI7XHJcbiAgICBBd3NBdXRoVHlwZVtcIkRlZmF1bHRcIl0gPSBcImRlZmF1bHRcIjtcclxuICAgIEF3c0F1dGhUeXBlW1wiRUMySUFNUm9sZVwiXSA9IFwiZWMyX2lhbV9yb2xlXCI7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIHVzZSBkZWZhdWx0XHJcbiAgICAgKi9cclxuICAgIEF3c0F1dGhUeXBlW1wiQVJOXCJdID0gXCJhcm5cIjtcclxufSkoZXhwb3J0cy5Bd3NBdXRoVHlwZSB8fCAoZXhwb3J0cy5Bd3NBdXRoVHlwZSA9IHt9KSk7XG5cbnZhciBhd3NBdXRoUHJvdmlkZXJPcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnV29ya3NwYWNlIElBTSBSb2xlJyxcclxuICAgICAgICB2YWx1ZTogZXhwb3J0cy5Bd3NBdXRoVHlwZS5FQzJJQU1Sb2xlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ0FXUyBTREsgRGVmYXVsdCcsXHJcbiAgICAgICAgdmFsdWU6IGV4cG9ydHMuQXdzQXV0aFR5cGUuRGVmYXVsdCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdBY2Nlc3MgJiBzZWNyZXQga2V5JyxcclxuICAgICAgICB2YWx1ZTogZXhwb3J0cy5Bd3NBdXRoVHlwZS5LZXlzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogJ0NyZWRlbnRpYWxzIGZpbGUnLFxyXG4gICAgICAgIHZhbHVlOiBleHBvcnRzLkF3c0F1dGhUeXBlLkNyZWRlbnRpYWxzLFxyXG4gICAgfSxcclxuXTtcblxudmFyIHRvT3B0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAoeyB2YWx1ZTogdmFsdWUsIGxhYmVsOiB2YWx1ZSB9KTsgfTtcclxudmFyIENvbm5lY3Rpb25Db25maWcgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qO1xyXG4gICAgdmFyIF9rID0gX19yZWFkKFJlYWN0LnVzZVN0YXRlKChwcm9wcy5zdGFuZGFyZFJlZ2lvbnMgfHwgc3RhbmRhcmRSZWdpb25zKS5tYXAodG9PcHRpb24pKSwgMiksIHJlZ2lvbnMgPSBfa1swXSwgc2V0UmVnaW9ucyA9IF9rWzFdO1xyXG4gICAgdmFyIGxvYWRSZWdpb25zID0gcHJvcHMubG9hZFJlZ2lvbnMsIG9uT3B0aW9uc0NoYW5nZSA9IHByb3BzLm9uT3B0aW9uc0NoYW5nZSwgX2wgPSBwcm9wcy5za2lwSGVhZGVyLCBza2lwSGVhZGVyID0gX2wgPT09IHZvaWQgMCA/IGZhbHNlIDogX2wsIF9tID0gcHJvcHMuc2tpcEVuZHBvaW50LCBza2lwRW5kcG9pbnQgPSBfbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfbTtcclxuICAgIHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcclxuICAgIHZhciBwcm9maWxlID0gb3B0aW9ucy5qc29uRGF0YS5wcm9maWxlO1xyXG4gICAgaWYgKHByb2ZpbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHByb2ZpbGUgPSBvcHRpb25zLmRhdGFiYXNlO1xyXG4gICAgfVxyXG4gICAgdmFyIHNldHRpbmdzID0gd2luZG93LmdyYWZhbmFCb290RGF0YS5zZXR0aW5ncztcclxuICAgIHZhciBhd3NBbGxvd2VkQXV0aFByb3ZpZGVycyA9IChfYSA9IHNldHRpbmdzLmF3c0FsbG93ZWRBdXRoUHJvdmlkZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXHJcbiAgICAgICAgZXhwb3J0cy5Bd3NBdXRoVHlwZS5EZWZhdWx0LFxyXG4gICAgICAgIGV4cG9ydHMuQXdzQXV0aFR5cGUuS2V5cyxcclxuICAgICAgICBleHBvcnRzLkF3c0F1dGhUeXBlLkNyZWRlbnRpYWxzLFxyXG4gICAgXTtcclxuICAgIHZhciBhd3NBc3N1bWVSb2xlRW5hYmxlZCA9IChfYiA9IHNldHRpbmdzLmF3c0Fzc3VtZVJvbGVFbmFibGVkKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0cnVlO1xyXG4gICAgdmFyIGN1cnJlbnRQcm92aWRlciA9IGF3c0F1dGhQcm92aWRlck9wdGlvbnMuZmluZChmdW5jdGlvbiAocCkgeyByZXR1cm4gcC52YWx1ZSA9PT0gb3B0aW9ucy5qc29uRGF0YS5hdXRoVHlwZTsgfSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhIGF1dGhUeXBlIGV4aXN0cyBpbiB0aGUgY3VycmVudCBtb2RlbFxyXG4gICAgICAgIGlmICghY3VycmVudFByb3ZpZGVyICYmIGF3c0FsbG93ZWRBdXRoUHJvdmlkZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvbk9wdGlvbnNDaGFuZ2UoX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGpzb25EYXRhOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucy5qc29uRGF0YSksIHsgYXV0aFR5cGU6IGF3c0FsbG93ZWRBdXRoUHJvdmlkZXJzWzBdIH0pIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFByb3ZpZGVyLCBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2VdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFsb2FkUmVnaW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRSZWdpb25zKCkudGhlbihmdW5jdGlvbiAocmVnaW9ucykgeyByZXR1cm4gc2V0UmVnaW9ucyhyZWdpb25zLm1hcCh0b09wdGlvbikpOyB9KTtcclxuICAgIH0sIFtsb2FkUmVnaW9uc10pO1xyXG4gICAgcmV0dXJuIChSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLkZpZWxkU2V0LCB7IGxhYmVsOiBza2lwSGVhZGVyID8gJycgOiAnQ29ubmVjdGlvbiBEZXRhaWxzJywgXCJkYXRhLXRlc3RpZFwiOiBcImNvbm5lY3Rpb24tY29uZmlnXCIgfSxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLklubGluZUZpZWxkLCB7IGxhYmVsOiBcIkF1dGhlbnRpY2F0aW9uIFByb3ZpZGVyXCIsIGxhYmVsV2lkdGg6IDI4LCB0b29sdGlwOiBcIlNwZWNpZnkgd2hpY2ggQVdTIGNyZWRlbnRpYWxzIGNoYWluIHRvIHVzZS5cIiB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLlNlbGVjdCwgeyBcImFyaWEtbGFiZWxcIjogXCJBdXRoZW50aWNhdGlvbiBQcm92aWRlclwiLCBjbGFzc05hbWU6IFwid2lkdGgtMzBcIiwgdmFsdWU6IGN1cnJlbnRQcm92aWRlciwgb3B0aW9uczogYXdzQXV0aFByb3ZpZGVyT3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdCkgeyByZXR1cm4gYXdzQWxsb3dlZEF1dGhQcm92aWRlcnMuaW5jbHVkZXMob3B0LnZhbHVlKTsgfSksIGRlZmF1bHRWYWx1ZTogb3B0aW9ucy5qc29uRGF0YS5hdXRoVHlwZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0KHByb3BzLCAnYXV0aFR5cGUnKShvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSwgbWVudVNob3VsZFBvcnRhbDogdHJ1ZSB9KSksXHJcbiAgICAgICAgb3B0aW9ucy5qc29uRGF0YS5hdXRoVHlwZSA9PT0gJ2NyZWRlbnRpYWxzJyAmJiAoUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5JbmxpbmVGaWVsZCwgeyBsYWJlbDogXCJDcmVkZW50aWFscyBQcm9maWxlIE5hbWVcIiwgbGFiZWxXaWR0aDogMjgsIHRvb2x0aXA6IFwiQ3JlZGVudGlhbHMgcHJvZmlsZSBuYW1lLCBhcyBzcGVjaWZpZWQgaW4gfi8uYXdzL2NyZWRlbnRpYWxzLCBsZWF2ZSBibGFuayBmb3IgZGVmYXVsdC5cIiB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLklucHV0LCB7IFwiYXJpYS1sYWJlbFwiOiBcIkNyZWRlbnRpYWxzIFByb2ZpbGUgTmFtZVwiLCBjbGFzc05hbWU6IFwid2lkdGgtMzBcIiwgcGxhY2Vob2xkZXI6IFwiZGVmYXVsdFwiLCB2YWx1ZTogcHJvZmlsZSwgb25DaGFuZ2U6IGRhdGEub25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb24ocHJvcHMsICdwcm9maWxlJykgfSkpKSxcclxuICAgICAgICBvcHRpb25zLmpzb25EYXRhLmF1dGhUeXBlID09PSAna2V5cycgJiYgKFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUmVhY3RfX2RlZmF1bHQuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodWkuSW5saW5lRmllbGQsIHsgbGFiZWw6IFwiQWNjZXNzIEtleSBJRFwiLCBsYWJlbFdpZHRoOiAyOCB9LCAoKF9jID0gcHJvcHMub3B0aW9ucy5zZWN1cmVKc29uRmllbGRzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuYWNjZXNzS2V5KSA/IChSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLkJ1dHRvbkdyb3VwLCB7IGNsYXNzTmFtZTogXCJ3aWR0aC0zMFwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLklucHV0LCB7IGRpc2FibGVkOiB0cnVlLCBwbGFjZWhvbGRlcjogXCJDb25maWd1cmVkXCIgfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLlRvb2xiYXJCdXR0b24sIHsgaWNvbjogXCJlZGl0XCIsIHRvb2x0aXA6IFwiRWRpdCBBY2Nlc3MgS2V5IElEXCIsIHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGRhdGEub25VcGRhdGVEYXRhc291cmNlUmVzZXRPcHRpb24ocHJvcHMsICdhY2Nlc3NLZXknKSB9KSkpIDogKFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodWkuSW5wdXQsIHsgXCJhcmlhLWxhYmVsXCI6IFwiQWNjZXNzIEtleSBJRFwiLCBjbGFzc05hbWU6IFwid2lkdGgtMzBcIiwgdmFsdWU6IChfZSA9IChfZCA9IG9wdGlvbnMuc2VjdXJlSnNvbkRhdGEpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5hY2Nlc3NLZXkpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6ICcnLCBvbkNoYW5nZTogZGF0YS5vblVwZGF0ZURhdGFzb3VyY2VTZWN1cmVKc29uRGF0YU9wdGlvbihwcm9wcywgJ2FjY2Vzc0tleScpIH0pKSksXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodWkuSW5saW5lRmllbGQsIHsgbGFiZWw6IFwiU2VjcmV0IEFjY2VzcyBLZXlcIiwgbGFiZWxXaWR0aDogMjggfSwgKChfZiA9IHByb3BzLm9wdGlvbnMuc2VjdXJlSnNvbkZpZWxkcykgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLnNlY3JldEtleSkgPyAoUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5CdXR0b25Hcm91cCwgeyBjbGFzc05hbWU6IFwid2lkdGgtMzBcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5JbnB1dCwgeyBkaXNhYmxlZDogdHJ1ZSwgcGxhY2Vob2xkZXI6IFwiQ29uZmlndXJlZFwiIH0pLFxyXG4gICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5Ub29sYmFyQnV0dG9uLCB7IGljb246IFwiZWRpdFwiLCB0eXBlOiBcImJ1dHRvblwiLCB0b29sdGlwOiBcIkVkaXQgU2VjcmV0IEFjY2VzcyBLZXlcIiwgb25DbGljazogZGF0YS5vblVwZGF0ZURhdGFzb3VyY2VSZXNldE9wdGlvbihwcm9wcywgJ3NlY3JldEtleScpIH0pKSkgOiAoUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5JbnB1dCwgeyBcImFyaWEtbGFiZWxcIjogXCJTZWNyZXQgQWNjZXNzIEtleVwiLCBjbGFzc05hbWU6IFwid2lkdGgtMzBcIiwgdmFsdWU6IChfaCA9IChfZyA9IG9wdGlvbnMuc2VjdXJlSnNvbkRhdGEpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy5zZWNyZXRLZXkpICE9PSBudWxsICYmIF9oICE9PSB2b2lkIDAgPyBfaCA6ICcnLCBvbkNoYW5nZTogZGF0YS5vblVwZGF0ZURhdGFzb3VyY2VTZWN1cmVKc29uRGF0YU9wdGlvbihwcm9wcywgJ3NlY3JldEtleScpIH0pKSkpKSxcclxuICAgICAgICBhd3NBc3N1bWVSb2xlRW5hYmxlZCAmJiAoUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChSZWFjdF9fZGVmYXVsdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5JbmxpbmVGaWVsZCwgeyBsYWJlbDogXCJBc3N1bWUgUm9sZSBBUk5cIiwgbGFiZWxXaWR0aDogMjgsIHRvb2x0aXA6IFwiT3B0aW9uYWxseSwgc3BlY2lmeSB0aGUgQVJOIG9mIGEgcm9sZSB0byBhc3N1bWUuIFNwZWNpZnlpbmcgYSByb2xlIGhlcmUgd2lsbCBlbnN1cmUgdGhhdCB0aGUgc2VsZWN0ZWQgYXV0aGVudGljYXRpb24gcHJvdmlkZXIgaXMgdXNlZCB0byBhc3N1bWUgdGhlIHNwZWNpZmllZCByb2xlIHJhdGhlciB0aGFuIHVzaW5nIHRoZSBjcmVkZW50aWFscyBkaXJlY3RseS4gTGVhdmUgYmxhbmsgaWYgeW91IGRvbid0IG5lZWQgdG8gYXNzdW1lIGEgcm9sZSBhdCBhbGxcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5JbnB1dCwgeyBcImFyaWEtbGFiZWxcIjogXCJBc3N1bWUgUm9sZSBBUk5cIiwgY2xhc3NOYW1lOiBcIndpZHRoLTMwXCIsIHBsYWNlaG9sZGVyOiBcImFybjphd3M6aWFtOipcIiwgdmFsdWU6IG9wdGlvbnMuanNvbkRhdGEuYXNzdW1lUm9sZUFybiB8fCAnJywgb25DaGFuZ2U6IGRhdGEub25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb24ocHJvcHMsICdhc3N1bWVSb2xlQXJuJykgfSkpLFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLklubGluZUZpZWxkLCB7IGxhYmVsOiBcIkV4dGVybmFsIElEXCIsIGxhYmVsV2lkdGg6IDI4LCB0b29sdGlwOiBcIklmIHlvdSBhcmUgYXNzdW1pbmcgYSByb2xlIGluIGFub3RoZXIgYWNjb3VudCwgdGhhdCBoYXMgYmVlbiBjcmVhdGVkIHdpdGggYW4gZXh0ZXJuYWwgSUQsIHNwZWNpZnkgdGhlIGV4dGVybmFsIElEIGhlcmUuXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodWkuSW5wdXQsIHsgXCJhcmlhLWxhYmVsXCI6IFwiRXh0ZXJuYWwgSURcIiwgY2xhc3NOYW1lOiBcIndpZHRoLTMwXCIsIHBsYWNlaG9sZGVyOiBcIkV4dGVybmFsIElEXCIsIHZhbHVlOiBvcHRpb25zLmpzb25EYXRhLmV4dGVybmFsSWQgfHwgJycsIG9uQ2hhbmdlOiBkYXRhLm9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uKHByb3BzLCAnZXh0ZXJuYWxJZCcpIH0pKSkpLFxyXG4gICAgICAgICFza2lwRW5kcG9pbnQgJiYgKFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodWkuSW5saW5lRmllbGQsIHsgbGFiZWw6IFwiRW5kcG9pbnRcIiwgbGFiZWxXaWR0aDogMjgsIHRvb2x0aXA6IFwiT3B0aW9uYWxseSwgc3BlY2lmeSBhIGN1c3RvbSBlbmRwb2ludCBmb3IgdGhlIHNlcnZpY2VcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLklucHV0LCB7IFwiYXJpYS1sYWJlbFwiOiBcIkVuZHBvaW50XCIsIGNsYXNzTmFtZTogXCJ3aWR0aC0zMFwiLCBwbGFjZWhvbGRlcjogKF9qID0gcHJvcHMuZGVmYXVsdEVuZHBvaW50KSAhPT0gbnVsbCAmJiBfaiAhPT0gdm9pZCAwID8gX2ogOiAnaHR0cHM6Ly97c2VydmljZX0ue3JlZ2lvbn0uYW1hem9uYXdzLmNvbScsIHZhbHVlOiBvcHRpb25zLmpzb25EYXRhLmVuZHBvaW50IHx8ICcnLCBvbkNoYW5nZTogZGF0YS5vblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvbihwcm9wcywgJ2VuZHBvaW50JykgfSkpKSxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLklubGluZUZpZWxkLCB7IGxhYmVsOiBcIkRlZmF1bHQgUmVnaW9uXCIsIGxhYmVsV2lkdGg6IDI4LCB0b29sdGlwOiBcIlNwZWNpZnkgdGhlIHJlZ2lvbiwgc3VjaCBhcyBmb3IgVVMgV2VzdCAoT3JlZ29uKSB1c2UgYCB1cy13ZXN0LTIgYCBhcyB0aGUgcmVnaW9uLlwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodWkuU2VsZWN0LCB7IFwiYXJpYS1sYWJlbFwiOiBcIkRlZmF1bHQgUmVnaW9uXCIsIGNsYXNzTmFtZTogXCJ3aWR0aC0zMFwiLCB2YWx1ZTogcmVnaW9ucy5maW5kKGZ1bmN0aW9uIChyZWdpb24pIHsgcmV0dXJuIHJlZ2lvbi52YWx1ZSA9PT0gb3B0aW9ucy5qc29uRGF0YS5kZWZhdWx0UmVnaW9uOyB9KSwgb3B0aW9uczogcmVnaW9ucywgZGVmYXVsdFZhbHVlOiBvcHRpb25zLmpzb25EYXRhLmRlZmF1bHRSZWdpb24sIGFsbG93Q3VzdG9tVmFsdWU6IHRydWUsIG9uQ2hhbmdlOiBkYXRhLm9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0KHByb3BzLCAnZGVmYXVsdFJlZ2lvbicpLCBmb3JtYXRDcmVhdGVMYWJlbDogZnVuY3Rpb24gKHIpIHsgcmV0dXJuIFwiVXNlIHJlZ2lvbjogXCIgKyByOyB9LCBtZW51U2hvdWxkUG9ydGFsOiB0cnVlIH0pKSxcclxuICAgICAgICBwcm9wcy5jaGlsZHJlbikpO1xyXG59O1xuXG52YXIgU0lHVjRDb25uZWN0aW9uQ29uZmlnID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICB2YXIgb25PcHRpb25zQ2hhbmdlID0gcHJvcHMub25PcHRpb25zQ2hhbmdlLCBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcclxuICAgIC8vIE1hcCBIdHRwU2V0dGluZ3MgcHJvcHMgdG8gQ29ubmVjdGlvbkNvbmZpZ1Byb3BzXHJcbiAgICB2YXIgY29ubmVjdGlvbkNvbmZpZ1Byb3BzID0ge1xyXG4gICAgICAgIG9uT3B0aW9uc0NoYW5nZTogZnVuY3Rpb24gKGF3c0RhdGFTb3VyY2VTZXR0aW5ncykge1xyXG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgICAgIHZhciBkYXRhU291cmNlU2V0dGluZ3MgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsganNvbkRhdGE6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLmpzb25EYXRhKSwgeyBzaWdWNEF1dGhUeXBlOiBhd3NEYXRhU291cmNlU2V0dGluZ3MuanNvbkRhdGEuYXV0aFR5cGUsIHNpZ1Y0UHJvZmlsZTogYXdzRGF0YVNvdXJjZVNldHRpbmdzLmpzb25EYXRhLnByb2ZpbGUsIHNpZ1Y0QXNzdW1lUm9sZUFybjogYXdzRGF0YVNvdXJjZVNldHRpbmdzLmpzb25EYXRhLmFzc3VtZVJvbGVBcm4sIHNpZ1Y0RXh0ZXJuYWxJZDogYXdzRGF0YVNvdXJjZVNldHRpbmdzLmpzb25EYXRhLmV4dGVybmFsSWQsIHNpZ1Y0UmVnaW9uOiBhd3NEYXRhU291cmNlU2V0dGluZ3MuanNvbkRhdGEuZGVmYXVsdFJlZ2lvbiwgc2lnVjRFbmRwb2ludDogYXdzRGF0YVNvdXJjZVNldHRpbmdzLmpzb25EYXRhLmVuZHBvaW50IH0pLCBzZWN1cmVKc29uRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lnVjRBY2Nlc3NLZXk6IChfYSA9IGF3c0RhdGFTb3VyY2VTZXR0aW5ncy5zZWN1cmVKc29uRmllbGRzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWNjZXNzS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ1Y0U2VjcmV0S2V5OiAoX2IgPSBhd3NEYXRhU291cmNlU2V0dGluZ3Muc2VjdXJlSnNvbkZpZWxkcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNlY3JldEtleSxcclxuICAgICAgICAgICAgICAgIH0sIHNlY3VyZUpzb25EYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lnVjRBY2Nlc3NLZXk6IChfYyA9IGF3c0RhdGFTb3VyY2VTZXR0aW5ncy5zZWN1cmVKc29uRGF0YSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFjY2Vzc0tleSxcclxuICAgICAgICAgICAgICAgICAgICBzaWdWNFNlY3JldEtleTogKF9kID0gYXdzRGF0YVNvdXJjZVNldHRpbmdzLnNlY3VyZUpzb25EYXRhKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Quc2VjcmV0S2V5LFxyXG4gICAgICAgICAgICAgICAgfSB9KTtcclxuICAgICAgICAgICAgb25PcHRpb25zQ2hhbmdlKGRhdGFTb3VyY2VTZXR0aW5ncyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsganNvbkRhdGE6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLmpzb25EYXRhKSwgeyBhdXRoVHlwZTogb3B0aW9ucy5qc29uRGF0YS5zaWdWNEF1dGhUeXBlLCBwcm9maWxlOiBvcHRpb25zLmpzb25EYXRhLnNpZ1Y0UHJvZmlsZSwgYXNzdW1lUm9sZUFybjogb3B0aW9ucy5qc29uRGF0YS5zaWdWNEFzc3VtZVJvbGVBcm4sIGV4dGVybmFsSWQ6IG9wdGlvbnMuanNvbkRhdGEuc2lnVjRFeHRlcm5hbElkLCBkZWZhdWx0UmVnaW9uOiBvcHRpb25zLmpzb25EYXRhLnNpZ1Y0UmVnaW9uLCBlbmRwb2ludDogb3B0aW9ucy5qc29uRGF0YS5zaWdWNEVuZHBvaW50IH0pLCBzZWN1cmVKc29uRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NLZXk6IChfYSA9IG9wdGlvbnMuc2VjdXJlSnNvbkZpZWxkcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNpZ1Y0QWNjZXNzS2V5LFxyXG4gICAgICAgICAgICAgICAgc2VjcmV0S2V5OiAoX2IgPSBvcHRpb25zLnNlY3VyZUpzb25GaWVsZHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zaWdWNFNlY3JldEtleSxcclxuICAgICAgICAgICAgfSwgc2VjdXJlSnNvbkRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogKF9jID0gb3B0aW9ucy5zZWN1cmVKc29uRGF0YSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNpZ1Y0QWNjZXNzS2V5LFxyXG4gICAgICAgICAgICAgICAgc2VjcmV0S2V5OiAoX2QgPSBvcHRpb25zLnNlY3VyZUpzb25EYXRhKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Quc2lnVjRTZWNyZXRLZXksXHJcbiAgICAgICAgICAgIH0gfSksXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0X19kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2YtZm9ybVwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoNlwiLCBudWxsLCBcIlNpZ1Y0IEF1dGggRGV0YWlsc1wiKSksXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChDb25uZWN0aW9uQ29uZmlnLCBfX2Fzc2lnbih7fSwgY29ubmVjdGlvbkNvbmZpZ1Byb3BzLCB7IHNraXBIZWFkZXI6IHRydWUsIHNraXBFbmRwb2ludDogdHJ1ZSB9KSkpKTtcclxufTtcblxudmFyIGRlZmF1bHRLZXkgPSAnX19kZWZhdWx0JztcblxuZnVuY3Rpb24gUmVzb3VyY2VTZWxlY3Rvcihwcm9wcykge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBfYSA9IF9fcmVhZChSZWFjdC51c2VTdGF0ZShwcm9wcy52YWx1ZSB8fCBwcm9wcy5kZWZhdWx0IHx8IG51bGwpLCAyKSwgcmVzb3VyY2UgPSBfYVswXSwgc2V0UmVzb3VyY2UgPSBfYVsxXTtcclxuICAgIHZhciBfYiA9IF9fcmVhZChSZWFjdC51c2VTdGF0ZShyZXNvdXJjZSA/IFtyZXNvdXJjZV0gOiBbXSksIDIpLCByZXNvdXJjZXMgPSBfYlswXSwgc2V0UmVzb3VyY2VzID0gX2JbMV07XHJcbiAgICB2YXIgX2MgPSBfX3JlYWQoUmVhY3QudXNlU3RhdGUocHJvcHMuZGVwZW5kZW5jaWVzKSwgMiksIGRlcGVuZGVuY2llcyA9IF9jWzBdLCBzZXREZXBlbmRlbmNpZXMgPSBfY1sxXTtcclxuICAgIHZhciBfZCA9IF9fcmVhZChSZWFjdC51c2VTdGF0ZShmYWxzZSksIDIpLCBpc0xvYWRpbmcgPSBfZFswXSwgc2V0SXNMb2FkaW5nID0gX2RbMV07XHJcbiAgICB2YXIgX2UgPSBfX3JlYWQoUmVhY3QudXNlU3RhdGUoZmFsc2UpLCAyKSwgZmV0Y2hlZCA9IF9lWzBdLCBzZXRGZXRjaGVkID0gX2VbMV07XHJcbiAgICB2YXIgZGVmYXVsdE9wdHMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3B0cyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiZGVmYXVsdCAoXCIgKyBwcm9wcy5kZWZhdWx0ICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGVmYXVsdEtleSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlZmF1bHQgdmFsdWUgc2V0IGluIHRoZSBkYXRhIHNvdXJjZVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICYmIHByb3BzLnZhbHVlICE9PSBkZWZhdWx0S2V5KSB7XHJcbiAgICAgICAgICAgIG9wdHMucHVzaCh7IGxhYmVsOiBwcm9wcy52YWx1ZSwgdmFsdWU6IHByb3BzLnZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3B0cztcclxuICAgIH0sIFtwcm9wcy5kZWZhdWx0LCBwcm9wcy52YWx1ZV0pO1xyXG4gICAgdmFyIF9mID0gX19yZWFkKFJlYWN0LnVzZVN0YXRlKHByb3BzLmRlZmF1bHQgPyBkZWZhdWx0T3B0cyA6IFtdKSwgMiksIG9wdGlvbnMgPSBfZlswXSwgc2V0T3B0aW9ucyA9IF9mWzFdO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocHJvcHMucmVzb3VyY2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0UmVzb3VyY2VzKHByb3BzLnJlc291cmNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLnJlc291cmNlc10pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IHByb3BzLmRlZmF1bHQgPyBkZWZhdWx0T3B0cyA6IFtdO1xyXG4gICAgICAgIGlmIChyZXNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2YgciA9PT0gJ3N0cmluZycgPyByIDogci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICghbmV3T3B0aW9ucy5maW5kKGZ1bmN0aW9uIChvKSB7IHJldHVybiBvLnZhbHVlID09PSB2YWx1ZTsgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgciA9PT0gJ3N0cmluZycgPyBuZXdPcHRpb25zLnB1c2goeyBsYWJlbDogciwgdmFsdWU6IHIgfSkgOiBuZXdPcHRpb25zLnB1c2gocik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRPcHRpb25zKG5ld09wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0T3B0aW9ucyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jlc291cmNlcywgZGVmYXVsdE9wdHMsIHByb3BzLmRlZmF1bHRdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQSBjaGFuZ2UgaW4gdGhlIGRlcGVuZGVuY2llcyBjYXVzZSBhIHN0YXRlIGNsZWFuLXVwXHJcbiAgICAgICAgaWYgKCFsb2Rhc2guaXNFcXVhbChwcm9wcy5kZXBlbmRlbmNpZXMsIGRlcGVuZGVuY2llcykpIHtcclxuICAgICAgICAgICAgc2V0RmV0Y2hlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldFJlc291cmNlKG51bGwpO1xyXG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShudWxsKTtcclxuICAgICAgICAgICAgc2V0RGVwZW5kZW5jaWVzKHByb3BzLmRlcGVuZGVuY2llcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLCBkZXBlbmRlbmNpZXNdKTtcclxuICAgIHZhciBmZXRjaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzb3VyY2VzXzE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZldGNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3BzLnNhdmVPcHRpb25zKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBwcm9wcy5zYXZlT3B0aW9ucygpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMiwgLCA0LCA1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcHJvcHMuZmV0Y2goKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzb3VyY2VzKHJlc291cmNlc18xKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBzZXRGZXRjaGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICB2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKGUpO1xyXG4gICAgICAgIGlmIChlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldFJlc291cmNlKGUudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb25DbGljayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgLCAzLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHJldHVybiAoUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5JbmxpbmVGaWVsZCwgeyBsYWJlbDogcHJvcHMubGFiZWwsIGxhYmVsV2lkdGg6IHByb3BzLmxhYmVsV2lkdGgsIHRvb2x0aXA6IHByb3BzLnRvb2x0aXAsIGhpZGRlbjogcHJvcHMuaGlkZGVuIH0sXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IFwiZGF0YS10ZXN0aWRcIjogcHJvcHNbJ2RhdGEtdGVzdGlkJ10sIHRpdGxlOiBwcm9wcy50aXRsZSB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLlNlbGVjdCwgX19hc3NpZ24oe30sIHByb3BzLCB7IFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbCwgb3B0aW9uczogb3B0aW9ucywgb25DaGFuZ2U6IG9uQ2hhbmdlLCBpc0xvYWRpbmc6IGlzTG9hZGluZywgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfHwgJ21pbi13aWR0aC02Jywgb25PcGVuTWVudTogZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvcHMuZmV0Y2ggJiYgb25DbGljaygpOyB9LCBtZW51U2hvdWxkUG9ydGFsOiB0cnVlIH0pKSkpKTtcclxufVxuXG5mdW5jdGlvbiBDb25maWdTZWxlY3QocHJvcHMpIHtcclxuICAgIHZhciBqc29uRGF0YSA9IHByb3BzLm9wdGlvbnMuanNvbkRhdGE7XHJcbiAgICB2YXIgY29tbW9uUHJvcHMgPSB7XHJcbiAgICAgICAgdGl0bGU6IGpzb25EYXRhLmRlZmF1bHRSZWdpb24gPyAnJyA6ICdzZWxlY3QgYSBkZWZhdWx0IHJlZ2lvbicsXHJcbiAgICAgICAgbGFiZWxXaWR0aDogMjgsXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnd2lkdGgtMzAnLFxyXG4gICAgfTtcclxuICAgIC8vIEFueSBjaGFuZ2UgaW4gdGhlIEFXUyBjb25uZWN0aW9uIGRldGFpbHMgd2lsbCBhZmZlY3Qgc2VsZWN0b3JzXHJcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gW1xyXG4gICAgICAgIHByb3BzLm9wdGlvbnMuanNvbkRhdGEuYXNzdW1lUm9sZUFybixcclxuICAgICAgICBwcm9wcy5vcHRpb25zLmpzb25EYXRhLmF1dGhUeXBlLFxyXG4gICAgICAgIHByb3BzLm9wdGlvbnMuanNvbkRhdGEuZGVmYXVsdFJlZ2lvbixcclxuICAgICAgICBwcm9wcy5vcHRpb25zLmpzb25EYXRhLmVuZHBvaW50LFxyXG4gICAgICAgIHByb3BzLm9wdGlvbnMuanNvbkRhdGEuZXh0ZXJuYWxJZCxcclxuICAgICAgICBwcm9wcy5vcHRpb25zLmpzb25EYXRhLnByb2ZpbGUsXHJcbiAgICBdLmNvbmNhdChwcm9wcy5kZXBlbmRlbmNpZXMpO1xyXG4gICAgcmV0dXJuIChSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlc291cmNlU2VsZWN0b3IsIF9fYXNzaWduKHsgbGFiZWw6IHByb3BzLmxhYmVsLCBcImRhdGEtdGVzdGlkXCI6IHByb3BzWydkYXRhLXRlc3RpZCddLCBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2UsIGZldGNoOiBwcm9wcy5mZXRjaCwgdmFsdWU6IHByb3BzLnZhbHVlLCBzYXZlT3B0aW9uczogcHJvcHMuc2F2ZU9wdGlvbnMsIGRlcGVuZGVuY2llczogZGVwZW5kZW5jaWVzLCBoaWRkZW46IHByb3BzLmhpZGRlbiwgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkIHx8ICFqc29uRGF0YS5kZWZhdWx0UmVnaW9uLCBhbGxvd0N1c3RvbVZhbHVlOiBwcm9wcy5hbGxvd0N1c3RvbVZhbHVlLCBhdXRvRm9jdXM6IHByb3BzLmF1dG9Gb2N1cywgYmFja3NwYWNlUmVtb3Zlc1ZhbHVlOiBwcm9wcy5iYWNrc3BhY2VSZW1vdmVzVmFsdWUsIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLCBpbnZhbGlkOiBwcm9wcy5pbnZhbGlkLCBpc0NsZWFyYWJsZTogcHJvcHMuaXNDbGVhcmFibGUsIGlzTXVsdGk6IHByb3BzLmlzTXVsdGksIGlucHV0SWQ6IHByb3BzLmlucHV0SWQsIHNob3dBbGxTZWxlY3RlZFdoZW5PcGVuOiBwcm9wcy5zaG93QWxsU2VsZWN0ZWRXaGVuT3BlbiwgbWF4TWVudUhlaWdodDogcHJvcHMubWF4TWVudUhlaWdodCwgbWluTWVudUhlaWdodDogcHJvcHMubWluTWVudUhlaWdodCwgbWF4VmlzaWJsZVZhbHVlczogcHJvcHMubWF4VmlzaWJsZVZhbHVlcywgbWVudVBsYWNlbWVudDogcHJvcHMubWVudVBsYWNlbWVudCwgbWVudVBvc2l0aW9uOiBwcm9wcy5tZW51UG9zaXRpb24sIG5vT3B0aW9uc01lc3NhZ2U6IHByb3BzLm5vT3B0aW9uc01lc3NhZ2UsIG9uQmx1cjogcHJvcHMub25CbHVyLCBvbkNyZWF0ZU9wdGlvbjogcHJvcHMub25DcmVhdGVPcHRpb24sIG9uSW5wdXRDaGFuZ2U6IHByb3BzLm9uSW5wdXRDaGFuZ2UsIHBsYWNlaG9sZGVyOiBwcm9wcy5wbGFjZWhvbGRlciwgd2lkdGg6IHByb3BzLndpZHRoLCBpc09wdGlvbkRpc2FibGVkOiBwcm9wcy5pc09wdGlvbkRpc2FibGVkIH0sIGNvbW1vblByb3BzKSkpO1xyXG59XG5cbmZ1bmN0aW9uIElubGluZUlucHV0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodWkuSW5saW5lRmllbGQsIHsgbGFiZWw6IHByb3BzLmxhYmVsLCBsYWJlbFdpZHRoOiAyOCwgdG9vbHRpcDogcHJvcHMudG9vbHRpcCwgaGlkZGVuOiBwcm9wcy5oaWRkZW4sIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCB9LFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodWkuSW5wdXQsIHsgXCJkYXRhLXRlc3RpZFwiOiBwcm9wc1snZGF0YS10ZXN0aWQnXSwgY2xhc3NOYW1lOiBcIndpZHRoLTMwXCIsIHZhbHVlOiBwcm9wcy52YWx1ZSwgb25DaGFuZ2U6IHByb3BzLm9uQ2hhbmdlLCBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCB9KSkpO1xyXG59XG5cbmZ1bmN0aW9uIFF1ZXJ5Q29kZUVkaXRvcihwcm9wcykge1xyXG4gICAgdmFyIGdldFN1Z2dlc3Rpb25zID0gcHJvcHMuZ2V0U3VnZ2VzdGlvbnMsIHF1ZXJ5ID0gcHJvcHMucXVlcnk7XHJcbiAgICB2YXIgcmF3U1FMID0gbG9kYXNoLmRlZmF1bHRzKHByb3BzLnF1ZXJ5LCB7IHJhd1NRTDogJycgfSkucmF3U1FMO1xyXG4gICAgdmFyIG9uUmF3U3FsQ2hhbmdlID0gZnVuY3Rpb24gKHJhd1NRTCkge1xyXG4gICAgICAgIHZhciBxdWVyeSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcy5xdWVyeSksIHsgcmF3U1FMOiByYXdTUUwgfSk7XHJcbiAgICAgICAgcHJvcHMub25DaGFuZ2UocXVlcnkpO1xyXG4gICAgICAgIHByb3BzLm9uUnVuUXVlcnkoKTtcclxuICAgIH07XHJcbiAgICAvLyBVc2UgYSByZWZlcmVuY2UgZm9yIHN1Z2dlc3Rpb25zIGJlY2F1c2UgYSBidWcgaW4gQ29kZUVkaXRvciBnZXRTdWdnZXN0aW9uc1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvZ3JhZmFuYS9pc3N1ZXMvNDAxMjFcclxuICAgIC8vIEl0IHdhcyBiZWVuIGZpeGVkIGluIDguMyBidXQga2VlcGluZyB0aGUgd29ya2Fyb3VuZCBoZXJlIHRvIHN1cHBvcnQgb2xkZXJcclxuICAgIC8vIHZlcnNpb25zLlxyXG4gICAgdmFyIHN1Z2dlc3Rpb25zUmVmID0gUmVhY3QudXNlUmVmKFtdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3VnZ2VzdGlvbnNSZWYuY3VycmVudCA9IGdldFN1Z2dlc3Rpb25zKHF1ZXJ5KTtcclxuICAgIH0sIFtnZXRTdWdnZXN0aW9ucywgcXVlcnldKTtcclxuICAgIHJldHVybiAoUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5Db2RlRWRpdG9yLCBfX2Fzc2lnbih7IGxhbmd1YWdlOiBwcm9wcy5sYW5ndWFnZSwgdmFsdWU6IHJhd1NRTCwgb25CbHVyOiBvblJhd1NxbENoYW5nZSwgc2hvd01pbmlNYXA6IGZhbHNlLCBzaG93TGluZU51bWJlcnM6IHRydWUsIGdldFN1Z2dlc3Rpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWdnZXN0aW9uc1JlZi5jdXJyZW50OyB9LCBoZWlnaHQ6IFwiMjQwcHhcIiB9LCBwcm9wcy5lZGl0b3JQcm9wcykpKTtcclxufVxuXG5mdW5jdGlvbiBGb3JtYXRTZWxlY3QocHJvcHMpIHtcclxuICAgIHZhciBvbkNoYW5nZUZvcm1hdCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcHJvcHMub25DaGFuZ2UoX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzLnF1ZXJ5KSwgeyBmb3JtYXQ6IGUudmFsdWUgfHwgMCB9KSk7XHJcbiAgICAgICAgcHJvcHMub25SdW5RdWVyeSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5JbmxpbmVGaWVsZCwgeyBsYWJlbDogXCJGb3JtYXQgYXNcIiwgbGFiZWxXaWR0aDogMTEgfSxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLlNlbGVjdCwgeyBcImFyaWEtbGFiZWxcIjogXCJGb3JtYXQgYXNcIiwgb3B0aW9uczogcHJvcHMub3B0aW9ucywgdmFsdWU6IHByb3BzLnF1ZXJ5LmZvcm1hdCwgb25DaGFuZ2U6IG9uQ2hhbmdlRm9ybWF0LCBjbGFzc05hbWU6IFwid2lkdGgtMTJcIiwgbWVudVNob3VsZFBvcnRhbDogdHJ1ZSB9KSkpO1xyXG59XG5cbihmdW5jdGlvbiAoRmlsbFZhbHVlT3B0aW9ucykge1xyXG4gICAgRmlsbFZhbHVlT3B0aW9uc1tGaWxsVmFsdWVPcHRpb25zW1wiUHJldmlvdXNcIl0gPSAwXSA9IFwiUHJldmlvdXNcIjtcclxuICAgIEZpbGxWYWx1ZU9wdGlvbnNbRmlsbFZhbHVlT3B0aW9uc1tcIk51bGxcIl0gPSAxXSA9IFwiTnVsbFwiO1xyXG4gICAgRmlsbFZhbHVlT3B0aW9uc1tGaWxsVmFsdWVPcHRpb25zW1wiVmFsdWVcIl0gPSAyXSA9IFwiVmFsdWVcIjtcclxufSkoZXhwb3J0cy5GaWxsVmFsdWVPcHRpb25zIHx8IChleHBvcnRzLkZpbGxWYWx1ZU9wdGlvbnMgPSB7fSkpO1xyXG52YXIgU2VsZWN0YWJsZUZpbGxWYWx1ZU9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdQcmV2aW91cyBWYWx1ZScsXHJcbiAgICAgICAgdmFsdWU6IGV4cG9ydHMuRmlsbFZhbHVlT3B0aW9ucy5QcmV2aW91cyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdOVUxMJyxcclxuICAgICAgICB2YWx1ZTogZXhwb3J0cy5GaWxsVmFsdWVPcHRpb25zLk51bGwsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiAnVmFsdWUnLFxyXG4gICAgICAgIHZhbHVlOiBleHBvcnRzLkZpbGxWYWx1ZU9wdGlvbnMuVmFsdWUsXHJcbiAgICB9LFxyXG5dO1xyXG5mdW5jdGlvbiBGaWxsVmFsdWVTZWxlY3QocHJvcHMpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgcmV0dXJuIChSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlYWN0X19kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodWkuSW5saW5lRmllbGQsIHsgbGFiZWw6IFwiRmlsbCB2YWx1ZVwiLCB0b29sdGlwOiBcInZhbHVlIHRvIGZpbGwgbWlzc2luZyBwb2ludHNcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLlNlbGVjdCwgeyBcImFyaWEtbGFiZWxcIjogXCJGaWxsIHZhbHVlXCIsIG9wdGlvbnM6IFNlbGVjdGFibGVGaWxsVmFsdWVPcHRpb25zLCB2YWx1ZTogKF9iID0gKF9hID0gcHJvcHMucXVlcnkuZmlsbE1vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tb2RlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBleHBvcnRzLkZpbGxWYWx1ZU9wdGlvbnMuUHJldmlvdXMsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfYS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMucXVlcnkpLCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBLZWVwIHRoZSBmaWxsTW9kZS52YWx1ZSBpbiBjYXNlIEZpbGxWYWx1ZU9wdGlvbnMuVmFsdWUgbW9kZSBpcyBzZWxlY3RlZCBiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxNb2RlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMucXVlcnkuZmlsbE1vZGUpLCB7IG1vZGU6IHZhbHVlIH0pIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vblJ1blF1ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICB9LCBjbGFzc05hbWU6IFwid2lkdGgtMTJcIiwgbWVudVNob3VsZFBvcnRhbDogdHJ1ZSB9KSksXHJcbiAgICAgICAgKChfYyA9IHByb3BzLnF1ZXJ5LmZpbGxNb2RlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MubW9kZSkgPT09IGV4cG9ydHMuRmlsbFZhbHVlT3B0aW9ucy5WYWx1ZSAmJiAoUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudCh1aS5JbmxpbmVGaWVsZCwgeyBsYWJlbDogXCJWYWx1ZVwiLCBsYWJlbFdpZHRoOiAxMSB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KHVpLklucHV0LCB7IHR5cGU6IFwibnVtYmVyXCIsIFwiYXJpYS1sYWJlbFwiOiBcIlZhbHVlXCIsIHZhbHVlOiBwcm9wcy5xdWVyeS5maWxsTW9kZS52YWx1ZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gX2EuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25DaGFuZ2UoX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzLnF1ZXJ5KSwgeyBmaWxsTW9kZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogZXhwb3J0cy5GaWxsVmFsdWVPcHRpb25zLlZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRUYXJnZXQudmFsdWVBc051bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSk7XHJcbiAgICAgICAgICAgICAgICB9LCBvbkJsdXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb3BzLm9uUnVuUXVlcnkoKTsgfSB9KSkpKSk7XHJcbn1cblxuLyoqXHJcbiAqIERvIG5vdCBleGVjdXRlIHF1ZXJpZXMgdGhhdCBkbyBub3QgZXhpc3QgeWV0XHJcbiAqL1xyXG5mdW5jdGlvbiBmaWx0ZXJTUUxRdWVyeShxdWVyeSkge1xyXG4gICAgcmV0dXJuICEhcXVlcnkucmF3U1FMO1xyXG59XHJcbmZ1bmN0aW9uIGFwcGx5U1FMVGVtcGxhdGVWYXJpYWJsZXMocXVlcnksIHNjb3BlZFZhcnMsIGdldFRlbXBsYXRlU3J2KSB7XHJcbiAgICB2YXIgdGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpO1xyXG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBxdWVyeSksIHsgcmF3U1FMOiB0ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnJhd1NRTCwgc2NvcGVkVmFycywgaW50ZXJwb2xhdGVWYXJpYWJsZSkgfSk7XHJcbn1cclxuZnVuY3Rpb24gaW50ZXJwb2xhdGVWYXJpYWJsZSh2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB2YXIgcXVvdGVkVmFsdWVzID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHF1b3RlTGl0ZXJhbCh2KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHF1b3RlZFZhbHVlcy5qb2luKCcsJyk7XHJcbn1cclxuZnVuY3Rpb24gcXVvdGVMaXRlcmFsKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gXCInXCIgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLycvZywgXCInJ1wiKSArIFwiJ1wiO1xyXG59XHJcbnZhciBhcHBlbmRUZW1wbGF0ZVZhcmlhYmxlc0FzU3VnZ2VzdGlvbnMgPSBmdW5jdGlvbiAoZ2V0VGVtcGxhdGVTcnYsIHN1Z3MpIHtcclxuICAgIHZhciB0ZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCk7XHJcbiAgICB2YXIgdGVtcGxhdGVTdWdzID0gW107XHJcbiAgICB0ZW1wbGF0ZVNydi5nZXRWYXJpYWJsZXMoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYWJsZSkge1xyXG4gICAgICAgIHZhciBsYWJlbCA9ICckJyArIHZhcmlhYmxlLm5hbWU7XHJcbiAgICAgICAgdmFyIHZhbCA9IHRlbXBsYXRlU3J2LnJlcGxhY2UobGFiZWwpO1xyXG4gICAgICAgIGlmICh2YWwgPT09IGxhYmVsKSB7XHJcbiAgICAgICAgICAgIHZhbCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZW1wbGF0ZVN1Z3MucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcclxuICAgICAgICAgICAga2luZDogdWkuQ29kZUVkaXRvclN1Z2dlc3Rpb25JdGVtS2luZC5UZXh0LFxyXG4gICAgICAgICAgICBkZXRhaWw6IFwiKFRlbXBsYXRlIFZhcmlhYmxlKSBcIiArIHZhbCxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN1Z3MuY29uY2F0KHRlbXBsYXRlU3Vncyk7XHJcbn07XG5cbmV4cG9ydHMuQ29uZmlnU2VsZWN0ID0gQ29uZmlnU2VsZWN0O1xuZXhwb3J0cy5Db25uZWN0aW9uQ29uZmlnID0gQ29ubmVjdGlvbkNvbmZpZztcbmV4cG9ydHMuRmlsbFZhbHVlU2VsZWN0ID0gRmlsbFZhbHVlU2VsZWN0O1xuZXhwb3J0cy5Gb3JtYXRTZWxlY3QgPSBGb3JtYXRTZWxlY3Q7XG5leHBvcnRzLklubGluZUlucHV0ID0gSW5saW5lSW5wdXQ7XG5leHBvcnRzLlF1ZXJ5Q29kZUVkaXRvciA9IFF1ZXJ5Q29kZUVkaXRvcjtcbmV4cG9ydHMuUmVzb3VyY2VTZWxlY3RvciA9IFJlc291cmNlU2VsZWN0b3I7XG5leHBvcnRzLlNJR1Y0Q29ubmVjdGlvbkNvbmZpZyA9IFNJR1Y0Q29ubmVjdGlvbkNvbmZpZztcbmV4cG9ydHMuYXBwZW5kVGVtcGxhdGVWYXJpYWJsZXNBc1N1Z2dlc3Rpb25zID0gYXBwZW5kVGVtcGxhdGVWYXJpYWJsZXNBc1N1Z2dlc3Rpb25zO1xuZXhwb3J0cy5hcHBseVNRTFRlbXBsYXRlVmFyaWFibGVzID0gYXBwbHlTUUxUZW1wbGF0ZVZhcmlhYmxlcztcbmV4cG9ydHMuYXdzQXV0aFByb3ZpZGVyT3B0aW9ucyA9IGF3c0F1dGhQcm92aWRlck9wdGlvbnM7XG5leHBvcnRzLmZpbHRlclNRTFF1ZXJ5ID0gZmlsdGVyU1FMUXVlcnk7XG5leHBvcnRzLnN0YW5kYXJkUmVnaW9ucyA9IHN0YW5kYXJkUmVnaW9ucztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmRldmVsb3BtZW50LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9pbmRleC5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9pbmRleC5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU0lHVjRDb25uZWN0aW9uQ29uZmlnIiwiRGF0YVNvdXJjZUh0dHBTZXR0aW5ncyIsIklubGluZUZvcm1MYWJlbCIsIlNlbGVjdCIsImNvbmZpZyIsIkFsZXJ0TWFuYWdlckltcGxlbWVudGF0aW9uIiwiSU1QTF9PUFRJT05TIiwidmFsdWUiLCJtaW1pciIsImljb24iLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwiY29ydGV4IiwicHJvbWV0aGV1cyIsIkNvbmZpZ0VkaXRvciIsInByb3BzIiwib3B0aW9ucyIsIm9uT3B0aW9uc0NoYW5nZSIsImpzb25EYXRhIiwiaW1wbGVtZW50YXRpb24iLCJzaWdWNEF1dGhFbmFibGVkIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwiRGF0YVNvdXJjZUFwaSIsImdldEJhY2tlbmRTcnYiLCJBbGVydE1hbmFnZXJEYXRhc291cmNlIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZVNldHRpbmdzIiwicXVlcnkiLCJkYXRhIiwiX3JlcXVlc3QiLCJ1cmwiLCJoZWFkZXJzIiwibWV0aG9kIiwiYmFzaWNBdXRoIiwid2l0aENyZWRlbnRpYWxzIiwiQXV0aG9yaXphdGlvbiIsImZldGNoIiwidGVzdERhdGFzb3VyY2UiLCJhbGVydG1hbmFnZXJSZXNwb25zZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlIiwiRGF0YVNvdXJjZVBsdWdpbiIsInBsdWdpbiIsInNldENvbmZpZ0VkaXRvciJdLCJzb3VyY2VSb290IjoiIn0=