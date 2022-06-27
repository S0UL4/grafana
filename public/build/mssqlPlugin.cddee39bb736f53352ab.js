"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["mssqlPlugin"],{

/***/ "./public/app/angular/AngularLocationWrapper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularLocationWrapper": () => (/* binding */ AngularLocationWrapper)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

 // Ref: https://github.com/angular/angular.js/blob/ae8e903edf88a83fedd116ae02c0628bf72b150c/src/ng/location.js#L5

const DEFAULT_PORTS = {
  http: 80,
  https: 443,
  ftp: 21
};
class AngularLocationWrapper {
  constructor() {
    this.absUrl = this.wrapInDeprecationWarning(this.absUrl);
    this.hash = this.wrapInDeprecationWarning(this.hash);
    this.host = this.wrapInDeprecationWarning(this.host);
    this.path = this.wrapInDeprecationWarning(this.path);
    this.port = this.wrapInDeprecationWarning(this.port, 'window.location');
    this.protocol = this.wrapInDeprecationWarning(this.protocol, 'window.location');
    this.replace = this.wrapInDeprecationWarning(this.replace);
    this.search = this.wrapInDeprecationWarning(this.search);
    this.state = this.wrapInDeprecationWarning(this.state);
    this.url = this.wrapInDeprecationWarning(this.url);
  }

  wrapInDeprecationWarning(fn, replacement) {
    let self = this;
    return function wrapper() {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.deprecationWarning)('$location', fn.name, replacement || 'locationService');
      return fn.apply(self, arguments);
    };
  }

  absUrl() {
    return `${window.location.origin}${this.url()}`;
  }

  hash(newHash) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: hash');

    if (!newHash) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().hash.slice(1);
    } else {
      throw new Error('AngularLocationWrapper method not implemented.');
    }
  }

  host() {
    return new URL(window.location.href).hostname;
  }

  path(pathname) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: path');
    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation();

    if (pathname !== undefined && pathname !== null) {
      let parsedPath = String(pathname);
      parsedPath = parsedPath.startsWith('/') ? parsedPath : `/${parsedPath}`;
      const url = new URL(`${window.location.origin}${parsedPath}`);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push({
        pathname: url.pathname,
        search: url.search.length > 0 ? url.search : location.search,
        hash: url.hash.length > 0 ? url.hash : location.hash
      });
      return this;
    }

    if (pathname === null) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push('/');
      return this;
    }

    return location.pathname;
  }

  port() {
    const url = new URL(window.location.href);
    return parseInt(url.port, 10) || DEFAULT_PORTS[url.protocol] || null;
  }

  protocol() {
    return new URL(window.location.href).protocol.slice(0, -1);
  }

  replace() {
    throw new Error('AngularLocationWrapper method not implemented.');
  }

  search(search, paramValue) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: search');

    if (!search) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getSearchObject();
    }

    if (search && arguments.length > 1) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
        [search]: paramValue
      });
      return this;
    }

    if (search) {
      let newQuery;

      if (typeof search === 'object') {
        newQuery = Object.assign({}, search);
      } else {
        newQuery = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationSearchToObject)(search);
      }

      for (const key of Object.keys(newQuery)) {
        // removing params with null | undefined
        if (newQuery[key] === null || newQuery[key] === undefined) {
          delete newQuery[key];
        }
      }

      const updatedUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.urlUtil.renderUrl(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().pathname, newQuery);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(updatedUrl);
    }

    return this;
  }

  state(state) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: state');
    throw new Error('AngularLocationWrapper method not implemented.');
  }

  url(newUrl) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: url');

    if (newUrl !== undefined) {
      if (newUrl.startsWith('#')) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
          hash: newUrl
        }));
      } else if (newUrl.startsWith('?')) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
          search: newUrl
        }));
      } else if (newUrl.trim().length === 0) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push('/');
      } else {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(newUrl);
      }

      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService;
    }

    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation();
    return `${location.pathname}${location.search}${location.hash}`;
  }

}

/***/ }),

/***/ "./public/app/angular/panel/metrics_panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsPanelCtrl": () => (/* binding */ MetricsPanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MetricsPanelCtrl extends app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__.PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);

    _defineProperty(this, "contextSrv", void 0);

    _defineProperty(this, "datasourceSrv", void 0);

    _defineProperty(this, "timeSrv", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "intervalMs", void 0);

    _defineProperty(this, "resolution", void 0);

    _defineProperty(this, "timeInfo", void 0);

    _defineProperty(this, "skipDataOnInit", false);

    _defineProperty(this, "dataList", []);

    _defineProperty(this, "querySubscription", void 0);

    _defineProperty(this, "useDataFrames", false);

    _defineProperty(this, "panelData", void 0);

    _defineProperty(this, "panelDataObserver", {
      next: data => {
        this.panelData = data;

        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Error) {
          this.loading = false;
          this.processDataError(data.error);
        } // Ignore data in loading state


        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading) {
          this.loading = true;
          this.angularDirtyCheck();
          return;
        }

        if (data.request) {
          const {
            timeInfo
          } = data.request;

          if (timeInfo) {
            this.timeInfo = timeInfo;
          }
        }

        if (data.timeRange) {
          this.range = data.timeRange;
        }

        if (this.useDataFrames) {
          this.handleDataFrames(data.series);
        } else {
          // Make the results look as if they came directly from a <6.2 datasource request
          const legacy = data.series.map(v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toLegacyResponseData)(v));
          this.handleQueryResult({
            data: legacy
          });
        }

        this.angularDirtyCheck();
      }
    });

    this.contextSrv = $injector.get('contextSrv');
    this.datasourceSrv = $injector.get('datasourceSrv');
    this.timeSrv = $injector.get('timeSrv');
    this.templateSrv = $injector.get('templateSrv');
    this.panel.datasource = this.panel.datasource || null;
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.refresh, this.onMetricsPanelRefresh.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.panelTeardown, this.onPanelTearDown.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.componentDidMount, this.onMetricsPanelMounted.bind(this));
  }

  onMetricsPanelMounted() {
    const queryRunner = this.panel.getQueryRunner();
    this.querySubscription = queryRunner.getData({
      withTransforms: true,
      withFieldConfig: true
    }).subscribe(this.panelDataObserver);
  }

  onPanelTearDown() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
      this.querySubscription = null;
    }
  }

  onMetricsPanelRefresh() {
    // ignore fetching data if another panel is in fullscreen
    if (this.otherPanelInFullscreenMode()) {
      return;
    } // if we have snapshot data use that


    if (this.panel.snapshotData) {
      this.updateTimeRange();
      let data = this.panel.snapshotData; // backward compatibility

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(data)) {
        data = data.data;
      }

      this.panelData = {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done,
        series: data,
        timeRange: this.range
      }; // Defer panel rendering till the next digest cycle.
      // For some reason snapshot panels don't init at this time, so this helps to avoid rendering issues.

      return this.$timeout(() => {
        this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataSnapshotLoad, data);
      });
    } // clear loading/error state


    delete this.error;
    this.loading = true; // load datasource service

    return this.datasourceSrv.get(this.panel.datasource, this.panel.scopedVars).then(this.issueQueries.bind(this)).catch(err => {
      this.processDataError(err);
    });
  }

  processDataError(err) {
    // if canceled  keep loading set to true
    if (err.cancelled) {
      console.log('Panel request cancelled', err);
      return;
    }

    this.error = err.message || 'Request Error';

    if (err.data) {
      if (err.data.message) {
        this.error = err.data.message;
      } else if (err.data.error) {
        this.error = err.data.error;
      }
    }

    this.angularDirtyCheck();
  }

  angularDirtyCheck() {
    if (!this.$scope.$root.$$phase) {
      this.$scope.$digest();
    }
  } // Updates the response with information from the stream


  updateTimeRange(datasource) {
    this.datasource = datasource || this.datasource;
    this.range = this.timeSrv.timeRange();
    const newTimeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__.applyPanelTimeOverrides)(this.panel, this.range);
    this.timeInfo = newTimeData.timeInfo;
    this.range = newTimeData.timeRange;
  }

  issueQueries(datasource) {
    this.updateTimeRange(datasource);
    this.datasource = datasource;
    const panel = this.panel;
    const queryRunner = panel.getQueryRunner();
    return queryRunner.run({
      datasource: panel.datasource,
      queries: panel.targets,
      panelId: panel.id,
      dashboardId: this.dashboard.id,
      timezone: this.dashboard.getTimezone(),
      timeInfo: this.timeInfo,
      timeRange: this.range,
      maxDataPoints: panel.maxDataPoints || this.width,
      minInterval: panel.interval,
      scopedVars: panel.scopedVars,
      cacheTimeout: panel.cacheTimeout,
      transformations: panel.transformations
    });
  }

  handleDataFrames(data) {
    this.loading = false;

    if (this.dashboard && this.dashboard.snapshot) {
      this.panel.snapshotData = data.map(frame => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toDataFrameDTO)(frame));
    }

    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataFramesReceived, data);
    } catch (err) {
      this.processDataError(err);
    }
  }

  handleQueryResult(result) {
    this.loading = false;

    if (this.dashboard.snapshot) {
      this.panel.snapshotData = result.data;
    }

    if (!result || !result.data) {
      console.log('Data source query result invalid, missing data field:', result);
      result = {
        data: []
      };
    }

    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataReceived, result.data);
    } catch (err) {
      this.processDataError(err);
    }
  }

}



/***/ }),

/***/ "./public/app/angular/panel/panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelCtrl": () => (/* binding */ PanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/AngularLocationWrapper.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class PanelCtrl {
  constructor($scope, $injector) {
    var _this$panel, _this$dashboard;

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "pluginName", '');

    _defineProperty(this, "pluginId", '');

    _defineProperty(this, "editorTabs", void 0);

    _defineProperty(this, "$scope", void 0);

    _defineProperty(this, "$injector", void 0);

    _defineProperty(this, "$timeout", void 0);

    _defineProperty(this, "editModeInitiated", false);

    _defineProperty(this, "containerHeight", void 0);

    _defineProperty(this, "events", void 0);

    _defineProperty(this, "loading", false);

    _defineProperty(this, "timing", void 0);

    _defineProperty(this, "$location", void 0);

    _defineProperty(this, "onPluginTypeChange", plugin => {});

    this.panel = (_this$panel = this.panel) !== null && _this$panel !== void 0 ? _this$panel : $scope.$parent.panel;
    this.dashboard = (_this$dashboard = this.dashboard) !== null && _this$dashboard !== void 0 ? _this$dashboard : $scope.$parent.dashboard;
    this.$injector = $injector;
    this.$scope = $scope;
    this.$timeout = $injector.get('$timeout');
    this.editorTabs = [];
    this.$location = new app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__.AngularLocationWrapper();
    this.events = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.EventBusSrv();
    this.timing = {}; // not used but here to not break plugins

    const plugin = app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].panels[this.panel.type];

    if (plugin) {
      this.pluginId = plugin.id;
      this.pluginName = plugin.name;
    }

    $scope.$on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.componentDidMount.name, () => this.panelDidMount());
  }

  panelDidMount() {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.componentDidMount);
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.initialized);
    this.dashboard.panelInitialized(this.panel);
  }

  renderingCompleted() {
    app_core_core__WEBPACK_IMPORTED_MODULE_4__.profiler.renderingCompleted();
  }

  refresh() {
    this.panel.refresh();
  }

  publishAppEvent(event, payload) {
    this.$scope.$root.appEvent(event, payload);
  }

  initEditMode() {
    if (!this.editModeInitiated) {
      this.editModeInitiated = true;
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.editModeInitialized);
    }
  }

  addEditorTab(title, directiveFn, index, icon) {
    const editorTab = {
      title,
      directiveFn,
      icon
    };

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(directiveFn)) {
      editorTab.directiveFn = () => {
        return {
          templateUrl: directiveFn
        };
      };
    }

    if (index) {
      this.editorTabs.splice(index, 0, editorTab);
    } else {
      this.editorTabs.push(editorTab);
    }
  }

  getExtendedMenu() {
    const menu = [];
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.initPanelActions, menu);
    return menu;
  } // Override in sub-class to add items before extended menu


  async getAdditionalMenuItems() {
    return [];
  }

  otherPanelInFullscreenMode() {
    return this.dashboard.otherPanelInFullscreen(this.panel);
  }

  render(payload) {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.render, payload);
  } // overriden from react


}

/***/ }),

/***/ "./public/app/angular/panel/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryCtrl": () => (/* binding */ QueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class QueryCtrl {
  constructor($scope, $injector) {
    var _this$panelCtrl, _this$target, _this$datasource, _this$panelCtrl$panel, _this$panelCtrl2;

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "hasRawMode", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "isLastQuery", void 0);

    this.$scope = $scope;
    this.$injector = $injector;
    this.panelCtrl = (_this$panelCtrl = this.panelCtrl) !== null && _this$panelCtrl !== void 0 ? _this$panelCtrl : $scope.ctrl.panelCtrl;
    this.target = (_this$target = this.target) !== null && _this$target !== void 0 ? _this$target : $scope.ctrl.target;
    this.datasource = (_this$datasource = this.datasource) !== null && _this$datasource !== void 0 ? _this$datasource : $scope.ctrl.datasource;
    this.panel = (_this$panelCtrl$panel = (_this$panelCtrl2 = this.panelCtrl) === null || _this$panelCtrl2 === void 0 ? void 0 : _this$panelCtrl2.panel) !== null && _this$panelCtrl$panel !== void 0 ? _this$panelCtrl$panel : $scope.ctrl.panelCtrl.panel;
    this.isLastQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.panel.targets, this.target) === this.panel.targets.length - 1;
  }

  refresh() {
    this.panelCtrl.refresh();
  }

}

/***/ }),

/***/ "./public/app/features/datasources/utils/passwordHandlers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFieldEnum": () => (/* binding */ PasswordFieldEnum),
/* harmony export */   "createChangeHandler": () => (/* binding */ createChangeHandler),
/* harmony export */   "createResetHandler": () => (/* binding */ createResetHandler)
/* harmony export */ });
/**
 * Set of handlers for secure password field in Angular components. They handle backward compatibility with
 * passwords stored in plain text fields.
 */
let PasswordFieldEnum;
/**
 * Basic shape for settings controllers in at the moment mostly angular data source plugins.
 */

(function (PasswordFieldEnum) {
  PasswordFieldEnum["Password"] = "password";
  PasswordFieldEnum["BasicAuthPassword"] = "basicAuthPassword";
})(PasswordFieldEnum || (PasswordFieldEnum = {}));

const createResetHandler = (ctrl, field) => event => {
  event.preventDefault(); // Reset also normal plain text password to remove it and only save it in secureJsonData.

  ctrl.current[field] = undefined;
  ctrl.current.secureJsonFields[field] = false;
  ctrl.current.secureJsonData = ctrl.current.secureJsonData || {};
  ctrl.current.secureJsonData[field] = '';
};
const createChangeHandler = (ctrl, field) => event => {
  ctrl.current.secureJsonData = ctrl.current.secureJsonData || {};
  ctrl.current.secureJsonData[field] = event.currentTarget.value;
};

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/config_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MssqlConfigCtrl": () => (/* binding */ MssqlConfigCtrl)
/* harmony export */ });
/* harmony import */ var _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/datasources/utils/passwordHandlers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class MssqlConfigCtrl {
  /** @ngInject */
  constructor($scope) {
    _defineProperty(this, "onPasswordReset", void 0);

    _defineProperty(this, "onPasswordChange", void 0);

    _defineProperty(this, "showUserCredentials", false);

    _defineProperty(this, "showTlsConfig", false);

    _defineProperty(this, "showCertificateConfig", false);

    this.current = $scope.ctrl.current;
    this.current.jsonData.encrypt = this.current.jsonData.encrypt || 'false';
    this.current.jsonData.sslRootCertFile = this.current.jsonData.sslRootCertFile || '';
    this.current.jsonData.tlsSkipVerify = this.current.jsonData.tlsSkipVerify || false;
    this.current.jsonData.serverName = this.current.jsonData.serverName || '';
    this.current.jsonData.authenticationType = this.current.jsonData.authenticationType || 'SQL Server Authentication';
    this.onPasswordReset = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.createResetHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.PasswordFieldEnum.Password);
    this.onPasswordChange = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.createChangeHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.PasswordFieldEnum.Password);
    this.onAuthenticationTypeChange();
    this.onEncryptChange();
  }

  onAuthenticationTypeChange() {
    // This is using the fallback in https://github.com/denisenkom/go-mssqldb to use Windows Auth if login/user id is empty.
    if (this.current.jsonData.authenticationType === 'Windows Authentication') {
      this.current.user = '';
      this.current.password = '';
    }

    this.showUserCredentials = this.current.jsonData.authenticationType !== 'Windows Authentication';
  }

  onEncryptChange() {
    this.showTlsConfig = this.current.jsonData.encrypt === 'true';
    this.showCertificateConfig = this.showTlsConfig && this.current.jsonData.tlsSkipVerify === false;
  }

}
MssqlConfigCtrl.$inject = ["$scope"];

_defineProperty(MssqlConfigCtrl, "templateUrl", 'partials/config.html');

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MssqlDatasource": () => (/* binding */ MssqlDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/mssql/response_parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MssqlDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)()) {
    super(instanceSettings);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "interval", void 0);

    this.templateSrv = templateSrv;
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const settingsData = instanceSettings.jsonData || {};
    this.interval = settingsData.timeInterval || '1m';
  }

  interpolateVariable(value, variable) {
    if (typeof value === 'string') {
      if (variable.multi || variable.includeAll) {
        return "'" + value.replace(/'/g, `''`) + "'";
      } else {
        return value;
      }
    }

    if (typeof value === 'number') {
      return value;
    }

    const quotedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, val => {
      if (typeof value === 'number') {
        return value;
      }

      return "'" + val.replace(/'/g, `''`) + "'";
    });

    return quotedValues.join(',');
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;

    if (queries && queries.length > 0) {
      expandedQueries = queries.map(query => {
        const expandedQuery = Object.assign({}, query, {
          datasource: this.getRef(),
          rawSql: this.templateSrv.replace(query.rawSql, scopedVars, this.interpolateVariable),
          rawQuery: true
        });
        return expandedQuery;
      });
    }

    return expandedQueries;
  }

  applyTemplateVariables(target, scopedVars) {
    return {
      refId: target.refId,
      datasource: this.getRef(),
      rawSql: this.templateSrv.replace(target.rawSql, scopedVars, this.interpolateVariable),
      format: target.format
    };
  }

  async annotationQuery(options) {
    if (!options.annotation.rawQuery) {
      return Promise.reject({
        message: 'Query missing in annotation definition'
      });
    }

    const query = {
      refId: options.annotation.name,
      datasource: this.getRef(),
      rawSql: this.templateSrv.replace(options.annotation.rawQuery, options.scopedVars, this.interpolateVariable),
      format: 'table'
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: options.range.from.valueOf().toString(),
        to: options.range.to.valueOf().toString(),
        queries: [query]
      },
      requestId: options.annotation.name
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(async res => await this.responseParser.transformAnnotationResponse(options, res.data))));
  }

  filterQuery(query) {
    return !query.hide;
  }

  metricFindQuery(query, optionalOptions) {
    var _range$from, _range$from$valueOf, _range$to, _range$to$valueOf;

    let refId = 'tempvar';

    if (optionalOptions && optionalOptions.variable && optionalOptions.variable.name) {
      refId = optionalOptions.variable.name;
    }

    const range = optionalOptions === null || optionalOptions === void 0 ? void 0 : optionalOptions.range;
    const interpolatedQuery = {
      refId: refId,
      datasource: this.getRef(),
      rawSql: this.templateSrv.replace(query, {}, this.interpolateVariable),
      format: 'table'
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: range === null || range === void 0 ? void 0 : (_range$from = range.from) === null || _range$from === void 0 ? void 0 : (_range$from$valueOf = _range$from.valueOf()) === null || _range$from$valueOf === void 0 ? void 0 : _range$from$valueOf.toString(),
        to: range === null || range === void 0 ? void 0 : (_range$to = range.to) === null || _range$to === void 0 ? void 0 : (_range$to$valueOf = _range$to.valueOf()) === null || _range$to$valueOf === void 0 ? void 0 : _range$to$valueOf.toString(),
        queries: [interpolatedQuery]
      },
      requestId: refId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(rsp => {
      return this.responseParser.transformMetricFindResponse(rsp);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    })));
  }

  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: '5m',
        to: 'now',
        queries: [{
          refId: 'A',
          intervalMs: 1,
          maxDataPoints: 1,
          datasource: this.getRef(),
          rawSql: 'SELECT 1',
          format: 'table'
        }]
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mapTo)({
      status: 'success',
      message: 'Database Connection OK'
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__.toTestingStatus)(err));
    })));
  }

  targetContainsTemplate(query) {
    const rawSql = query.rawSql.replace('$__', '');
    return this.templateSrv.containsTemplate(rawSql);
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _config_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/mssql/config_ctrl.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/mssql/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/mssql/query_ctrl.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const defaultQuery = `SELECT
    <time_column> as time,
    <text_column> as text,
    <tags_column> as tags
  FROM
    <table name>
  WHERE
    $__timeFilter(time_column)
  ORDER BY
    <time_column> ASC`;

class MssqlAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.rawQuery = this.annotation.rawQuery || defaultQuery;
  }

}

MssqlAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(MssqlAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.MssqlDatasource).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_3__.MssqlQueryCtrl).setConfigCtrl(_config_ctrl__WEBPACK_IMPORTED_MODULE_1__.MssqlConfigCtrl).setAnnotationQueryCtrl(MssqlAnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MssqlQueryCtrl": () => (/* binding */ MssqlQueryCtrl)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/sdk.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultQuery = `SELECT
  $__timeEpoch(<time_column>),
  <value column> as value,
  <series name column> as metric
FROM
  <table name>
WHERE
  $__timeFilter(time_column)
ORDER BY
  <time_column> ASC`;
class MssqlQueryCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__.QueryCtrl {
  /** @ngInject */
  constructor($scope, $injector) {
    super($scope, $injector);

    _defineProperty(this, "formats", void 0);

    _defineProperty(this, "lastQueryMeta", void 0);

    _defineProperty(this, "lastQueryError", void 0);

    _defineProperty(this, "showHelp", false);

    this.target.format = this.target.format || 'time_series';
    this.target.alias = '';
    this.formats = [{
      text: 'Time series',
      value: 'time_series'
    }, {
      text: 'Table',
      value: 'table'
    }];

    if (!this.target.rawSql) {
      // special handling when in table panel
      if (this.panelCtrl.panel.type === 'table') {
        this.target.format = 'table';
        this.target.rawSql = 'SELECT 1';
      } else {
        this.target.rawSql = defaultQuery;
      }
    }

    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelEvents.dataReceived, this.onDataReceived.bind(this), $scope);
    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelEvents.dataError, this.onDataError.bind(this), $scope);
  }

  onDataReceived(dataList) {
    var _dataList$;

    this.lastQueryError = undefined;
    this.lastQueryMeta = (_dataList$ = dataList[0]) === null || _dataList$ === void 0 ? void 0 : _dataList$.meta;
  }

  onDataError(err) {
    if (err.data && err.data.results) {
      const queryRes = err.data.results[this.target.refId];

      if (queryRes) {
        this.lastQueryError = queryRes.error;
      }
    }
  }

}
MssqlQueryCtrl.$inject = ["$scope", "$injector"];

_defineProperty(MssqlQueryCtrl, "templateUrl", 'partials/query.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/response_parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponseParser)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

class ResponseParser {
  transformMetricFindResponse(raw) {
    const frames = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.toDataQueryResponse)(raw).data;

    if (!frames || !frames.length) {
      return [];
    }

    const frame = frames[0];
    const values = [];
    const textField = frame.fields.find(f => f.name === '__text');
    const valueField = frame.fields.find(f => f.name === '__value');

    if (textField && valueField) {
      for (let i = 0; i < textField.values.length; i++) {
        values.push({
          text: '' + textField.values.get(i),
          value: '' + valueField.values.get(i)
        });
      }
    } else {
      values.push(...frame.fields.flatMap(f => f.values.toArray()).map(v => ({
        text: v
      })));
    }

    return Array.from(new Set(values.map(v => v.text))).map(text => {
      var _values$find;

      return {
        text,
        value: (_values$find = values.find(v => v.text === text)) === null || _values$find === void 0 ? void 0 : _values$find.value
      };
    });
  }

  async transformAnnotationResponse(options, data) {
    const frames = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.toDataQueryResponse)({
      data: data
    }).data;

    if (!frames || !frames.length) {
      return [];
    }

    const frame = frames[0];
    const timeField = frame.fields.find(f => f.name === 'time');

    if (!timeField) {
      return Promise.reject({
        message: 'Missing mandatory time column (with time column alias) in annotation query.'
      });
    }

    const timeEndField = frame.fields.find(f => f.name === 'timeend');
    const textField = frame.fields.find(f => f.name === 'text');
    const tagsField = frame.fields.find(f => f.name === 'tags');
    const list = [];

    for (let i = 0; i < frame.length; i++) {
      const timeEnd = timeEndField && timeEndField.values.get(i) ? Math.floor(timeEndField.values.get(i)) : undefined;
      list.push({
        annotation: options.annotation,
        time: Math.floor(timeField.values.get(i)),
        timeEnd,
        text: textField && textField.values.get(i) ? textField.values.get(i) : '',
        tags: tagsField && tagsField.values.get(i) ? tagsField.values.get(i).trim().split(/\s*,\s*/) : []
      });
    }

    return list;
  }

}

/***/ }),

/***/ "./public/app/plugins/sdk.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsPanelCtrl": () => (/* binding */ MetricsPanelCtrl),
/* harmony export */   "PanelCtrl": () => (/* binding */ PanelCtrl),
/* harmony export */   "QueryCtrl": () => (/* binding */ QueryCtrl),
/* harmony export */   "loadPluginCss": () => (/* reexport safe */ _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.loadPluginCss)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/metrics_panel_ctrl.ts");
/* harmony import */ var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/angular/panel/query_ctrl.ts");





const PanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__.PanelCtrl);
const MetricsPanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__.MetricsPanelCtrl);
const QueryCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__.QueryCtrl);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztNQUNBdVIsSUFBSSxDQUFDblIsSUFBTCxDQUFVO1FBQ1JzTixVQUFVLEVBQUVELE9BQU8sQ0FBQ0MsVUFEWjtRQUVSaUUsSUFBSSxFQUFFRixJQUFJLENBQUNDLEtBQUwsQ0FBV04sU0FBUyxDQUFDWCxNQUFWLENBQWlCek4sR0FBakIsQ0FBcUIrTixDQUFyQixDQUFYLENBRkU7UUFHUlMsT0FIUTtRQUlSNUIsSUFBSSxFQUFFYyxTQUFTLElBQUlBLFNBQVMsQ0FBQ0QsTUFBVixDQUFpQnpOLEdBQWpCLENBQXFCK04sQ0FBckIsQ0FBYixHQUF1Q0wsU0FBUyxDQUFDRCxNQUFWLENBQWlCek4sR0FBakIsQ0FBcUIrTixDQUFyQixDQUF2QyxHQUFpRSxFQUovRDtRQUtSYSxJQUFJLEVBQ0ZOLFNBQVMsSUFBSUEsU0FBUyxDQUFDYixNQUFWLENBQWlCek4sR0FBakIsQ0FBcUIrTixDQUFyQixDQUFiLEdBQ0lPLFNBQVMsQ0FBQ2IsTUFBVixDQUNHek4sR0FESCxDQUNPK04sQ0FEUCxFQUVHOVAsSUFGSCxHQUdHNFEsS0FISCxDQUdTLFNBSFQsQ0FESixHQUtJO01BWEUsQ0FBVjtJQWFEOztJQUVELE9BQU9OLElBQVA7RUFDRDs7QUFyRWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNaFEsU0FBUyxHQUFHdVEscUVBQXNCLENBQUNHLG1FQUFELENBQXhDO0FBQ0EsTUFBTXhRLGdCQUFnQixHQUFHcVEscUVBQXNCLENBQUNFLGtGQUFELENBQS9DO0FBQ0EsTUFBTXhJLFNBQVMsR0FBR3NJLHFFQUFzQixDQUFDSSxtRUFBRCxDQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL21ldHJpY3NfcGFuZWxfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3V0aWxzL3Bhc3N3b3JkSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL21zc3FsL2NvbmZpZ19jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9tc3NxbC9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9tc3NxbC9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL21zc3FsL3F1ZXJ5X2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL21zc3FsL3Jlc3BvbnNlX3BhcnNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3Nkay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXByZWNhdGlvbldhcm5pbmcsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VhcmNoVG9PYmplY3QsIGxvY2F0aW9uU2VydmljZSwgbmF2aWdhdGlvbkxvZ2dlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG4vLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9hZThlOTAzZWRmODhhODNmZWRkMTE2YWUwMmMwNjI4YmY3MmIxNTBjL3NyYy9uZy9sb2NhdGlvbi5qcyNMNVxuY29uc3QgREVGQVVMVF9QT1JUUzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgaHR0cDogODAsIGh0dHBzOiA0NDMsIGZ0cDogMjEgfTtcblxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFic1VybCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuYWJzVXJsKTtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLmhhc2gpO1xuICAgIHRoaXMuaG9zdCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaG9zdCk7XG4gICAgdGhpcy5wYXRoID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wYXRoKTtcbiAgICB0aGlzLnBvcnQgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBvcnQsICd3aW5kb3cubG9jYXRpb24nKTtcbiAgICB0aGlzLnByb3RvY29sID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wcm90b2NvbCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucmVwbGFjZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucmVwbGFjZSk7XG4gICAgdGhpcy5zZWFyY2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnNlYXJjaCk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy51cmwpO1xuICB9XG5cbiAgd3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKGZuOiBGdW5jdGlvbiwgcmVwbGFjZW1lbnQ/OiBzdHJpbmcpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICAgIGRlcHJlY2F0aW9uV2FybmluZygnJGxvY2F0aW9uJywgZm4ubmFtZSwgcmVwbGFjZW1lbnQgfHwgJ2xvY2F0aW9uU2VydmljZScpO1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGFic1VybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7dGhpcy51cmwoKX1gO1xuICB9XG5cbiAgaGFzaChuZXdIYXNoPzogc3RyaW5nIHwgbnVsbCkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBoYXNoJyk7XG5cbiAgICBpZiAoIW5ld0hhc2gpIHtcbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5oYXNoLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gIH1cblxuICBob3N0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLmhvc3RuYW1lO1xuICB9XG5cbiAgcGF0aChwYXRobmFtZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBwYXRoJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuXG4gICAgaWYgKHBhdGhuYW1lICE9PSB1bmRlZmluZWQgJiYgcGF0aG5hbWUgIT09IG51bGwpIHtcbiAgICAgIGxldCBwYXJzZWRQYXRoID0gU3RyaW5nKHBhdGhuYW1lKTtcbiAgICAgIHBhcnNlZFBhdGggPSBwYXJzZWRQYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhcnNlZFBhdGggOiBgLyR7cGFyc2VkUGF0aH1gO1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7cGFyc2VkUGF0aH1gKTtcblxuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IHVybC5zZWFyY2gubGVuZ3RoID4gMCA/IHVybC5zZWFyY2ggOiBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2g6IHVybC5oYXNoLmxlbmd0aCA+IDAgPyB1cmwuaGFzaCA6IGxvY2F0aW9uLmhhc2gsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PT0gbnVsbCkge1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxuXG4gIHBvcnQoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVybC5wb3J0LCAxMCkgfHwgREVGQVVMVF9QT1JUU1t1cmwucHJvdG9jb2xdIHx8IG51bGw7XG4gIH1cblxuICBwcm90b2NvbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5wcm90b2NvbC5zbGljZSgwLCAtMSk7XG4gIH1cblxuICByZXBsYWNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgc2VhcmNoKHNlYXJjaD86IGFueSwgcGFyYW1WYWx1ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzZWFyY2gnKTtcbiAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7XG4gICAgICAgIFtzZWFyY2hdOiBwYXJhbVZhbHVlLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGxldCBuZXdRdWVyeTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0geyAuLi5zZWFyY2ggfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0gbG9jYXRpb25TZWFyY2hUb09iamVjdChzZWFyY2gpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdRdWVyeSkpIHtcbiAgICAgICAgLy8gcmVtb3ZpbmcgcGFyYW1zIHdpdGggbnVsbCB8IHVuZGVmaW5lZFxuICAgICAgICBpZiAobmV3UXVlcnlba2V5XSA9PT0gbnVsbCB8fCBuZXdRdWVyeVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkZWxldGUgbmV3UXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVkVXJsID0gdXJsVXRpbC5yZW5kZXJVcmwobG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkucGF0aG5hbWUsIG5ld1F1ZXJ5KTtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHVwZGF0ZWRVcmwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGUoc3RhdGU/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogc3RhdGUnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHVybChuZXdVcmw/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogdXJsJyk7XG5cbiAgICBpZiAobmV3VXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIGhhc2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnN0YXJ0c1dpdGgoJz8nKSkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7IC4uLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLCBzZWFyY2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKG5ld1VybCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKTtcbiAgICByZXR1cm4gYCR7bG9jYXRpb24ucGF0aG5hbWV9JHtsb2NhdGlvbi5zZWFyY2h9JHtsb2NhdGlvbi5oYXNofWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgTGVnYWN5UmVzcG9uc2VEYXRhLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUGFuZWxFdmVudHMsXG4gIFRpbWVSYW5nZSxcbiAgdG9EYXRhRnJhbWVEVE8sXG4gIHRvTGVnYWN5UmVzcG9uc2VEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFBhbmVsQ3RybCB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgQ29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IFBhbmVsTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlJztcbmltcG9ydCB7IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9wYW5lbCc7XG5cbmltcG9ydCB7IFBhbmVsUXVlcnlSdW5uZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9xdWVyeS9zdGF0ZS9QYW5lbFF1ZXJ5UnVubmVyJztcblxuY2xhc3MgTWV0cmljc1BhbmVsQ3RybCBleHRlbmRzIFBhbmVsQ3RybCB7XG4gIGRlY2xhcmUgZGF0YXNvdXJjZTogRGF0YVNvdXJjZUFwaTtcbiAgZGVjbGFyZSByYW5nZTogVGltZVJhbmdlO1xuXG4gIGNvbnRleHRTcnY6IENvbnRleHRTcnY7XG4gIGRhdGFzb3VyY2VTcnY6IGFueTtcbiAgdGltZVNydjogYW55O1xuICB0ZW1wbGF0ZVNydjogYW55O1xuICBpbnRlcnZhbDogYW55O1xuICBpbnRlcnZhbE1zOiBhbnk7XG4gIHJlc29sdXRpb246IGFueTtcbiAgdGltZUluZm8/OiBzdHJpbmc7XG4gIHNraXBEYXRhT25Jbml0ID0gZmFsc2U7XG4gIGRhdGFMaXN0OiBMZWdhY3lSZXNwb25zZURhdGFbXSA9IFtdO1xuICBxdWVyeVN1YnNjcmlwdGlvbj86IFVuc3Vic2NyaWJhYmxlIHwgbnVsbDtcbiAgdXNlRGF0YUZyYW1lcyA9IGZhbHNlO1xuICBwYW5lbERhdGE/OiBQYW5lbERhdGE7XG5cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYW55KSB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgdGhpcy5jb250ZXh0U3J2ID0gJGluamVjdG9yLmdldCgnY29udGV4dFNydicpO1xuICAgIHRoaXMuZGF0YXNvdXJjZVNydiA9ICRpbmplY3Rvci5nZXQoJ2RhdGFzb3VyY2VTcnYnKTtcbiAgICB0aGlzLnRpbWVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0aW1lU3J2Jyk7XG4gICAgdGhpcy50ZW1wbGF0ZVNydiA9ICRpbmplY3Rvci5nZXQoJ3RlbXBsYXRlU3J2Jyk7XG4gICAgdGhpcy5wYW5lbC5kYXRhc291cmNlID0gdGhpcy5wYW5lbC5kYXRhc291cmNlIHx8IG51bGw7XG5cbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5yZWZyZXNoLCB0aGlzLm9uTWV0cmljc1BhbmVsUmVmcmVzaC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5wYW5lbFRlYXJkb3duLCB0aGlzLm9uUGFuZWxUZWFyRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5jb21wb25lbnREaWRNb3VudCwgdGhpcy5vbk1ldHJpY3NQYW5lbE1vdW50ZWQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsTW91bnRlZCgpIHtcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHRoaXMucGFuZWwuZ2V0UXVlcnlSdW5uZXIoKSBhcyBQYW5lbFF1ZXJ5UnVubmVyO1xuICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSBxdWVyeVJ1bm5lclxuICAgICAgLmdldERhdGEoeyB3aXRoVHJhbnNmb3JtczogdHJ1ZSwgd2l0aEZpZWxkQ29uZmlnOiB0cnVlIH0pXG4gICAgICAuc3Vic2NyaWJlKHRoaXMucGFuZWxEYXRhT2JzZXJ2ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBhbmVsVGVhckRvd24oKSB7XG4gICAgaWYgKHRoaXMucXVlcnlTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25NZXRyaWNzUGFuZWxSZWZyZXNoKCkge1xuICAgIC8vIGlnbm9yZSBmZXRjaGluZyBkYXRhIGlmIGFub3RoZXIgcGFuZWwgaXMgaW4gZnVsbHNjcmVlblxuICAgIGlmICh0aGlzLm90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSBoYXZlIHNuYXBzaG90IGRhdGEgdXNlIHRoYXRcbiAgICBpZiAodGhpcy5wYW5lbC5zbmFwc2hvdERhdGEpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZVJhbmdlKCk7XG4gICAgICBsZXQgZGF0YSA9IHRoaXMucGFuZWwuc25hcHNob3REYXRhO1xuICAgICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgaWYgKCFpc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFuZWxEYXRhID0ge1xuICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgICAgIHNlcmllczogZGF0YSxcbiAgICAgICAgdGltZVJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgfTtcblxuICAgICAgLy8gRGVmZXIgcGFuZWwgcmVuZGVyaW5nIHRpbGwgdGhlIG5leHQgZGlnZXN0IGN5Y2xlLlxuICAgICAgLy8gRm9yIHNvbWUgcmVhc29uIHNuYXBzaG90IHBhbmVscyBkb24ndCBpbml0IGF0IHRoaXMgdGltZSwgc28gdGhpcyBoZWxwcyB0byBhdm9pZCByZW5kZXJpbmcgaXNzdWVzLlxuICAgICAgcmV0dXJuIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFTbmFwc2hvdExvYWQsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgbG9hZGluZy9lcnJvciBzdGF0ZVxuICAgIGRlbGV0ZSB0aGlzLmVycm9yO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyBsb2FkIGRhdGFzb3VyY2Ugc2VydmljZVxuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VTcnZcbiAgICAgIC5nZXQodGhpcy5wYW5lbC5kYXRhc291cmNlLCB0aGlzLnBhbmVsLnNjb3BlZFZhcnMpXG4gICAgICAudGhlbih0aGlzLmlzc3VlUXVlcmllcy5iaW5kKHRoaXMpKVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvY2Vzc0RhdGFFcnJvcihlcnI6IGFueSkge1xuICAgIC8vIGlmIGNhbmNlbGVkICBrZWVwIGxvYWRpbmcgc2V0IHRvIHRydWVcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgY29uc29sZS5sb2coJ1BhbmVsIHJlcXVlc3QgY2FuY2VsbGVkJywgZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9yID0gZXJyLm1lc3NhZ2UgfHwgJ1JlcXVlc3QgRXJyb3InO1xuXG4gICAgaWYgKGVyci5kYXRhKSB7XG4gICAgICBpZiAoZXJyLmRhdGEubWVzc2FnZSkge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLmRhdGEubWVzc2FnZTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5kYXRhLmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgfVxuXG4gIGFuZ3VsYXJEaXJ0eUNoZWNrKCkge1xuICAgIGlmICghdGhpcy4kc2NvcGUuJHJvb3QuJCRwaGFzZSkge1xuICAgICAgdGhpcy4kc2NvcGUuJGRpZ2VzdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZXMgdGhlIHJlc3BvbnNlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgc3RyZWFtXG4gIHBhbmVsRGF0YU9ic2VydmVyID0ge1xuICAgIG5leHQ6IChkYXRhOiBQYW5lbERhdGEpID0+IHtcbiAgICAgIHRoaXMucGFuZWxEYXRhID0gZGF0YTtcblxuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5FcnJvcikge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZ25vcmUgZGF0YSBpbiBsb2FkaW5nIHN0YXRlXG4gICAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgeyB0aW1lSW5mbyB9ID0gZGF0YS5yZXF1ZXN0O1xuICAgICAgICBpZiAodGltZUluZm8pIHtcbiAgICAgICAgICB0aGlzLnRpbWVJbmZvID0gdGltZUluZm87XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudGltZVJhbmdlKSB7XG4gICAgICAgIHRoaXMucmFuZ2UgPSBkYXRhLnRpbWVSYW5nZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudXNlRGF0YUZyYW1lcykge1xuICAgICAgICB0aGlzLmhhbmRsZURhdGFGcmFtZXMoZGF0YS5zZXJpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWFrZSB0aGUgcmVzdWx0cyBsb29rIGFzIGlmIHRoZXkgY2FtZSBkaXJlY3RseSBmcm9tIGEgPDYuMiBkYXRhc291cmNlIHJlcXVlc3RcbiAgICAgICAgY29uc3QgbGVnYWN5ID0gZGF0YS5zZXJpZXMubWFwKCh2KSA9PiB0b0xlZ2FjeVJlc3BvbnNlRGF0YSh2KSk7XG4gICAgICAgIHRoaXMuaGFuZGxlUXVlcnlSZXN1bHQoeyBkYXRhOiBsZWdhY3kgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgICB9LFxuICB9O1xuXG4gIHVwZGF0ZVRpbWVSYW5nZShkYXRhc291cmNlPzogRGF0YVNvdXJjZUFwaSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IGRhdGFzb3VyY2UgfHwgdGhpcy5kYXRhc291cmNlO1xuICAgIHRoaXMucmFuZ2UgPSB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCk7XG5cbiAgICBjb25zdCBuZXdUaW1lRGF0YSA9IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzKHRoaXMucGFuZWwsIHRoaXMucmFuZ2UpO1xuICAgIHRoaXMudGltZUluZm8gPSBuZXdUaW1lRGF0YS50aW1lSW5mbztcbiAgICB0aGlzLnJhbmdlID0gbmV3VGltZURhdGEudGltZVJhbmdlO1xuICB9XG5cbiAgaXNzdWVRdWVyaWVzKGRhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGkpIHtcbiAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZShkYXRhc291cmNlKTtcblxuICAgIHRoaXMuZGF0YXNvdXJjZSA9IGRhdGFzb3VyY2U7XG5cbiAgICBjb25zdCBwYW5lbCA9IHRoaXMucGFuZWwgYXMgUGFuZWxNb2RlbDtcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHBhbmVsLmdldFF1ZXJ5UnVubmVyKCk7XG5cbiAgICByZXR1cm4gcXVlcnlSdW5uZXIucnVuKHtcbiAgICAgIGRhdGFzb3VyY2U6IHBhbmVsLmRhdGFzb3VyY2UsXG4gICAgICBxdWVyaWVzOiBwYW5lbC50YXJnZXRzLFxuICAgICAgcGFuZWxJZDogcGFuZWwuaWQsXG4gICAgICBkYXNoYm9hcmRJZDogdGhpcy5kYXNoYm9hcmQuaWQsXG4gICAgICB0aW1lem9uZTogdGhpcy5kYXNoYm9hcmQuZ2V0VGltZXpvbmUoKSxcbiAgICAgIHRpbWVJbmZvOiB0aGlzLnRpbWVJbmZvLFxuICAgICAgdGltZVJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgbWF4RGF0YVBvaW50czogcGFuZWwubWF4RGF0YVBvaW50cyB8fCB0aGlzLndpZHRoLFxuICAgICAgbWluSW50ZXJ2YWw6IHBhbmVsLmludGVydmFsLFxuICAgICAgc2NvcGVkVmFyczogcGFuZWwuc2NvcGVkVmFycyxcbiAgICAgIGNhY2hlVGltZW91dDogcGFuZWwuY2FjaGVUaW1lb3V0LFxuICAgICAgdHJhbnNmb3JtYXRpb25zOiBwYW5lbC50cmFuc2Zvcm1hdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEYXRhRnJhbWVzKGRhdGE6IERhdGFGcmFtZVtdKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kYXNoYm9hcmQgJiYgdGhpcy5kYXNoYm9hcmQuc25hcHNob3QpIHtcbiAgICAgIHRoaXMucGFuZWwuc25hcHNob3REYXRhID0gZGF0YS5tYXAoKGZyYW1lKSA9PiB0b0RhdGFGcmFtZURUTyhmcmFtZSkpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFGcmFtZXNSZWNlaXZlZCwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVRdWVyeVJlc3VsdChyZXN1bHQ6IERhdGFRdWVyeVJlc3BvbnNlKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kYXNoYm9hcmQuc25hcHNob3QpIHtcbiAgICAgIHRoaXMucGFuZWwuc25hcHNob3REYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5kYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YSBzb3VyY2UgcXVlcnkgcmVzdWx0IGludmFsaWQsIG1pc3NpbmcgZGF0YSBmaWVsZDonLCByZXN1bHQpO1xuICAgICAgcmVzdWx0ID0geyBkYXRhOiBbXSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgcmVzdWx0LmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IE1ldHJpY3NQYW5lbEN0cmwgfTtcbiIsImltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcbiAgQXBwRXZlbnQsXG4gIFBhbmVsRXZlbnRzLFxuICBQYW5lbFBsdWdpbk1ldGEsXG4gIEFuZ3VsYXJQYW5lbE1lbnVJdGVtLFxuICBFdmVudEJ1c0V4dGVuZGVkLFxuICBFdmVudEJ1c1Nydixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyIH0gZnJvbSAnYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBwcm9maWxlciB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBQYW5lbEN0cmwge1xuICBwYW5lbDogYW55O1xuICBlcnJvcjogYW55O1xuICBkZWNsYXJlIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbk5hbWUgPSAnJztcbiAgcGx1Z2luSWQgPSAnJztcbiAgZWRpdG9yVGFiczogYW55O1xuICAkc2NvcGU6IGFueTtcbiAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2U7XG4gICR0aW1lb3V0OiBhbnk7XG4gIGVkaXRNb2RlSW5pdGlhdGVkID0gZmFsc2U7XG4gIGRlY2xhcmUgaGVpZ2h0OiBudW1iZXI7XG4gIGRlY2xhcmUgd2lkdGg6IG51bWJlcjtcbiAgY29udGFpbmVySGVpZ2h0OiBhbnk7XG4gIGV2ZW50czogRXZlbnRCdXNFeHRlbmRlZDtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICB0aW1pbmc6IGFueTtcbiAgJGxvY2F0aW9uOiBBbmd1bGFyTG9jYXRpb25XcmFwcGVyO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsID8/ICRzY29wZS4kcGFyZW50LnBhbmVsO1xuICAgIHRoaXMuZGFzaGJvYXJkID0gdGhpcy5kYXNoYm9hcmQgPz8gJHNjb3BlLiRwYXJlbnQuZGFzaGJvYXJkO1xuICAgIHRoaXMuJGluamVjdG9yID0gJGluamVjdG9yO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHRpbWVvdXQgPSAkaW5qZWN0b3IuZ2V0KCckdGltZW91dCcpO1xuICAgIHRoaXMuZWRpdG9yVGFicyA9IFtdO1xuICAgIHRoaXMuJGxvY2F0aW9uID0gbmV3IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEJ1c1NydigpO1xuICAgIHRoaXMudGltaW5nID0ge307IC8vIG5vdCB1c2VkIGJ1dCBoZXJlIHRvIG5vdCBicmVhayBwbHVnaW5zXG5cbiAgICBjb25zdCBwbHVnaW4gPSBjb25maWcucGFuZWxzW3RoaXMucGFuZWwudHlwZV07XG4gICAgaWYgKHBsdWdpbikge1xuICAgICAgdGhpcy5wbHVnaW5JZCA9IHBsdWdpbi5pZDtcbiAgICAgIHRoaXMucGx1Z2luTmFtZSA9IHBsdWdpbi5uYW1lO1xuICAgIH1cblxuICAgICRzY29wZS4kb24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQubmFtZSwgKCkgPT4gdGhpcy5wYW5lbERpZE1vdW50KCkpO1xuICB9XG5cbiAgcGFuZWxEaWRNb3VudCgpIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50KTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRpYWxpemVkKTtcbiAgICB0aGlzLmRhc2hib2FyZC5wYW5lbEluaXRpYWxpemVkKHRoaXMucGFuZWwpO1xuICB9XG5cbiAgcmVuZGVyaW5nQ29tcGxldGVkKCkge1xuICAgIHByb2ZpbGVyLnJlbmRlcmluZ0NvbXBsZXRlZCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnBhbmVsLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1Ymxpc2hBcHBFdmVudDxUPihldmVudDogQXBwRXZlbnQ8VD4sIHBheWxvYWQ/OiBUKSB7XG4gICAgdGhpcy4kc2NvcGUuJHJvb3QuYXBwRXZlbnQoZXZlbnQsIHBheWxvYWQpO1xuICB9XG5cbiAgaW5pdEVkaXRNb2RlKCkge1xuICAgIGlmICghdGhpcy5lZGl0TW9kZUluaXRpYXRlZCkge1xuICAgICAgdGhpcy5lZGl0TW9kZUluaXRpYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmVkaXRNb2RlSW5pdGlhbGl6ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkaXRvclRhYih0aXRsZTogc3RyaW5nLCBkaXJlY3RpdmVGbjogYW55LCBpbmRleD86IG51bWJlciwgaWNvbj86IGFueSkge1xuICAgIGNvbnN0IGVkaXRvclRhYiA9IHsgdGl0bGUsIGRpcmVjdGl2ZUZuLCBpY29uIH07XG5cbiAgICBpZiAoaXNTdHJpbmcoZGlyZWN0aXZlRm4pKSB7XG4gICAgICBlZGl0b3JUYWIuZGlyZWN0aXZlRm4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlVXJsOiBkaXJlY3RpdmVGbiB9O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5zcGxpY2UoaW5kZXgsIDAsIGVkaXRvclRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5wdXNoKGVkaXRvclRhYik7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXh0ZW5kZWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnU6IEFuZ3VsYXJQYW5lbE1lbnVJdGVtW10gPSBbXTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRQYW5lbEFjdGlvbnMsIG1lbnUpO1xuICAgIHJldHVybiBtZW51O1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgaW4gc3ViLWNsYXNzIHRvIGFkZCBpdGVtcyBiZWZvcmUgZXh0ZW5kZWQgbWVudVxuICBhc3luYyBnZXRBZGRpdGlvbmFsTWVudUl0ZW1zKCk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmQub3RoZXJQYW5lbEluRnVsbHNjcmVlbih0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcihwYXlsb2FkPzogYW55KSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5yZW5kZXIsIHBheWxvYWQpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVuIGZyb20gcmVhY3RcbiAgb25QbHVnaW5UeXBlQ2hhbmdlID0gKHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhKSA9PiB7fTtcbn1cbiIsImltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY2xhc3MgUXVlcnlDdHJsPFQgPSBhbnk+IHtcbiAgdGFyZ2V0ITogVDtcbiAgZGF0YXNvdXJjZSE6IGFueTtcbiAgcGFuZWxDdHJsITogYW55O1xuICBwYW5lbDogYW55O1xuICBoYXNSYXdNb2RlITogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuICBpc0xhc3RRdWVyeTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbnksIHB1YmxpYyAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWxDdHJsID0gdGhpcy5wYW5lbEN0cmwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQgPz8gJHNjb3BlLmN0cmwudGFyZ2V0O1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IHRoaXMuZGF0YXNvdXJjZSA/PyAkc2NvcGUuY3RybC5kYXRhc291cmNlO1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsQ3RybD8ucGFuZWwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMuaXNMYXN0UXVlcnkgPSBpbmRleE9mKHRoaXMucGFuZWwudGFyZ2V0cywgdGhpcy50YXJnZXQpID09PSB0aGlzLnBhbmVsLnRhcmdldHMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpO1xuICB9XG59XG4iLCIvKipcbiAqIFNldCBvZiBoYW5kbGVycyBmb3Igc2VjdXJlIHBhc3N3b3JkIGZpZWxkIGluIEFuZ3VsYXIgY29tcG9uZW50cy4gVGhleSBoYW5kbGUgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoXG4gKiBwYXNzd29yZHMgc3RvcmVkIGluIHBsYWluIHRleHQgZmllbGRzLlxuICovXG5cbmltcG9ydCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZW51bSBQYXNzd29yZEZpZWxkRW51bSB7XG4gIFBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbiAgQmFzaWNBdXRoUGFzc3dvcmQgPSAnYmFzaWNBdXRoUGFzc3dvcmQnLFxufVxuXG4vKipcbiAqIEJhc2ljIHNoYXBlIGZvciBzZXR0aW5ncyBjb250cm9sbGVycyBpbiBhdCB0aGUgbW9tZW50IG1vc3RseSBhbmd1bGFyIGRhdGEgc291cmNlIHBsdWdpbnMuXG4gKi9cbmV4cG9ydCB0eXBlIEN0cmwgPSB7XG4gIGN1cnJlbnQ6IHtcbiAgICBzZWN1cmVKc29uRmllbGRzOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xuICAgIH07XG4gICAgc2VjdXJlSnNvbkRhdGE/OiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBiYXNpY0F1dGhQYXNzd29yZD86IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNldEhhbmRsZXIgPVxuICAoY3RybDogQ3RybCwgZmllbGQ6IFBhc3N3b3JkRmllbGRFbnVtKSA9PiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBSZXNldCBhbHNvIG5vcm1hbCBwbGFpbiB0ZXh0IHBhc3N3b3JkIHRvIHJlbW92ZSBpdCBhbmQgb25seSBzYXZlIGl0IGluIHNlY3VyZUpzb25EYXRhLlxuICAgIGN0cmwuY3VycmVudFtmaWVsZF0gPSB1bmRlZmluZWQ7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25GaWVsZHNbZmllbGRdID0gZmFsc2U7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhID0gY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhIHx8IHt9O1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YVtmaWVsZF0gPSAnJztcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYW5nZUhhbmRsZXIgPVxuICAoY3RybDogYW55LCBmaWVsZDogUGFzc3dvcmRGaWVsZEVudW0pID0+IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgPSBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgfHwge307XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhW2ZpZWxkXSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gIH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVDaGFuZ2VIYW5kbGVyLFxuICBjcmVhdGVSZXNldEhhbmRsZXIsXG4gIFBhc3N3b3JkRmllbGRFbnVtLFxufSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9kYXRhc291cmNlcy91dGlscy9wYXNzd29yZEhhbmRsZXJzJztcblxuZXhwb3J0IGNsYXNzIE1zc3FsQ29uZmlnQ3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9jb25maWcuaHRtbCc7XG5cbiAgLy8gU2V0IHRocm91Z2ggYW5ndWxhciBiaW5kaW5nc1xuICBkZWNsYXJlIGN1cnJlbnQ6IGFueTtcblxuICBvblBhc3N3b3JkUmVzZXQ6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVJlc2V0SGFuZGxlcj47XG4gIG9uUGFzc3dvcmRDaGFuZ2U6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUNoYW5nZUhhbmRsZXI+O1xuICBzaG93VXNlckNyZWRlbnRpYWxzID0gZmFsc2U7XG4gIHNob3dUbHNDb25maWcgPSBmYWxzZTtcbiAgc2hvd0NlcnRpZmljYXRlQ29uZmlnID0gZmFsc2U7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSkge1xuICAgIHRoaXMuY3VycmVudCA9ICRzY29wZS5jdHJsLmN1cnJlbnQ7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLmVuY3J5cHQgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEuZW5jcnlwdCB8fCAnZmFsc2UnO1xuICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS5zc2xSb290Q2VydEZpbGUgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEuc3NsUm9vdENlcnRGaWxlIHx8ICcnO1xuICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNTa2lwVmVyaWZ5ID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc1NraXBWZXJpZnkgfHwgZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnNlcnZlck5hbWUgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEuc2VydmVyTmFtZSB8fCAnJztcbiAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSB8fCAnU1FMIFNlcnZlciBBdXRoZW50aWNhdGlvbic7XG4gICAgdGhpcy5vblBhc3N3b3JkUmVzZXQgPSBjcmVhdGVSZXNldEhhbmRsZXIodGhpcywgUGFzc3dvcmRGaWVsZEVudW0uUGFzc3dvcmQpO1xuICAgIHRoaXMub25QYXNzd29yZENoYW5nZSA9IGNyZWF0ZUNoYW5nZUhhbmRsZXIodGhpcywgUGFzc3dvcmRGaWVsZEVudW0uUGFzc3dvcmQpO1xuICAgIHRoaXMub25BdXRoZW50aWNhdGlvblR5cGVDaGFuZ2UoKTtcbiAgICB0aGlzLm9uRW5jcnlwdENoYW5nZSgpO1xuICB9XG5cbiAgb25BdXRoZW50aWNhdGlvblR5cGVDaGFuZ2UoKSB7XG4gICAgLy8gVGhpcyBpcyB1c2luZyB0aGUgZmFsbGJhY2sgaW4gaHR0cHM6Ly9naXRodWIuY29tL2RlbmlzZW5rb20vZ28tbXNzcWxkYiB0byB1c2UgV2luZG93cyBBdXRoIGlmIGxvZ2luL3VzZXIgaWQgaXMgZW1wdHkuXG4gICAgaWYgKHRoaXMuY3VycmVudC5qc29uRGF0YS5hdXRoZW50aWNhdGlvblR5cGUgPT09ICdXaW5kb3dzIEF1dGhlbnRpY2F0aW9uJykge1xuICAgICAgdGhpcy5jdXJyZW50LnVzZXIgPSAnJztcbiAgICAgIHRoaXMuY3VycmVudC5wYXNzd29yZCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd1VzZXJDcmVkZW50aWFscyA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5hdXRoZW50aWNhdGlvblR5cGUgIT09ICdXaW5kb3dzIEF1dGhlbnRpY2F0aW9uJztcbiAgfVxuXG4gIG9uRW5jcnlwdENoYW5nZSgpIHtcbiAgICB0aGlzLnNob3dUbHNDb25maWcgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEuZW5jcnlwdCA9PT0gJ3RydWUnO1xuICAgIHRoaXMuc2hvd0NlcnRpZmljYXRlQ29uZmlnID0gdGhpcy5zaG93VGxzQ29uZmlnICYmIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNTa2lwVmVyaWZ5ID09PSBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbWFwIGFzIF9tYXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFubm90YXRpb25FdmVudCwgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIE1ldHJpY0ZpbmRWYWx1ZSwgU2NvcGVkVmFycywgVGltZVJhbmdlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlLCBEYXRhU291cmNlV2l0aEJhY2tlbmQsIEZldGNoUmVzcG9uc2UsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHRvVGVzdGluZ1N0YXR1cyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL3F1ZXJ5UmVzcG9uc2UnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcblxuaW1wb3J0IFJlc3BvbnNlUGFyc2VyIGZyb20gJy4vcmVzcG9uc2VfcGFyc2VyJztcbmltcG9ydCB7IE1zc3FsT3B0aW9ucywgTXNzcWxRdWVyeSwgTXNzcWxRdWVyeUZvckludGVycG9sYXRpb24gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIE1zc3FsRGF0YXNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VXaXRoQmFja2VuZDxNc3NxbFF1ZXJ5LCBNc3NxbE9wdGlvbnM+IHtcbiAgaWQ6IGFueTtcbiAgbmFtZTogYW55O1xuICByZXNwb25zZVBhcnNlcjogUmVzcG9uc2VQYXJzZXI7XG4gIGludGVydmFsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8TXNzcWxPcHRpb25zPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KClcbiAgKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gICAgdGhpcy5uYW1lID0gaW5zdGFuY2VTZXR0aW5ncy5uYW1lO1xuICAgIHRoaXMuaWQgPSBpbnN0YW5jZVNldHRpbmdzLmlkO1xuICAgIHRoaXMucmVzcG9uc2VQYXJzZXIgPSBuZXcgUmVzcG9uc2VQYXJzZXIoKTtcbiAgICBjb25zdCBzZXR0aW5nc0RhdGEgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhIHx8ICh7fSBhcyBNc3NxbE9wdGlvbnMpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXR0aW5nc0RhdGEudGltZUludGVydmFsIHx8ICcxbSc7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlKHZhbHVlOiBhbnksIHZhcmlhYmxlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhcmlhYmxlLm11bHRpIHx8IHZhcmlhYmxlLmluY2x1ZGVBbGwpIHtcbiAgICAgICAgcmV0dXJuIFwiJ1wiICsgdmFsdWUucmVwbGFjZSgvJy9nLCBgJydgKSArIFwiJ1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcXVvdGVkVmFsdWVzID0gX21hcCh2YWx1ZSwgKHZhbCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCInXCIgKyB2YWwucmVwbGFjZSgvJy9nLCBgJydgKSArIFwiJ1wiO1xuICAgIH0pO1xuICAgIHJldHVybiBxdW90ZWRWYWx1ZXMuam9pbignLCcpO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMoXG4gICAgcXVlcmllczogTXNzcWxRdWVyeUZvckludGVycG9sYXRpb25bXSxcbiAgICBzY29wZWRWYXJzOiBTY29wZWRWYXJzXG4gICk6IE1zc3FsUXVlcnlGb3JJbnRlcnBvbGF0aW9uW10ge1xuICAgIGxldCBleHBhbmRlZFF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgIGlmIChxdWVyaWVzICYmIHF1ZXJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZXhwYW5kZWRRdWVyaWVzID0gcXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkUXVlcnkgPSB7XG4gICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgICByYXdTcWw6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5yYXdTcWwsIHNjb3BlZFZhcnMsIHRoaXMuaW50ZXJwb2xhdGVWYXJpYWJsZSksXG4gICAgICAgICAgcmF3UXVlcnk6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBleHBhbmRlZFF1ZXJ5O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBleHBhbmRlZFF1ZXJpZXM7XG4gIH1cblxuICBhcHBseVRlbXBsYXRlVmFyaWFibGVzKHRhcmdldDogTXNzcWxRdWVyeSwgc2NvcGVkVmFyczogU2NvcGVkVmFycyk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICAgIHJldHVybiB7XG4gICAgICByZWZJZDogdGFyZ2V0LnJlZklkLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHRhcmdldC5yYXdTcWwsIHNjb3BlZFZhcnMsIHRoaXMuaW50ZXJwb2xhdGVWYXJpYWJsZSksXG4gICAgICBmb3JtYXQ6IHRhcmdldC5mb3JtYXQsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGFubm90YXRpb25RdWVyeShvcHRpb25zOiBhbnkpOiBQcm9taXNlPEFubm90YXRpb25FdmVudFtdPiB7XG4gICAgaWYgKCFvcHRpb25zLmFubm90YXRpb24ucmF3UXVlcnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7IG1lc3NhZ2U6ICdRdWVyeSBtaXNzaW5nIGluIGFubm90YXRpb24gZGVmaW5pdGlvbicgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICByZWZJZDogb3B0aW9ucy5hbm5vdGF0aW9uLm5hbWUsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2Uob3B0aW9ucy5hbm5vdGF0aW9uLnJhd1F1ZXJ5LCBvcHRpb25zLnNjb3BlZFZhcnMsIHRoaXMuaW50ZXJwb2xhdGVWYXJpYWJsZSksXG4gICAgICBmb3JtYXQ6ICd0YWJsZScsXG4gICAgfTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAgIC5mZXRjaDxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPih7XG4gICAgICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZnJvbTogb3B0aW9ucy5yYW5nZS5mcm9tLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgdG86IG9wdGlvbnMucmFuZ2UudG8udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBxdWVyaWVzOiBbcXVlcnldLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWVzdElkOiBvcHRpb25zLmFubm90YXRpb24ubmFtZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgYXN5bmMgKHJlczogRmV0Y2hSZXNwb25zZTxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPikgPT5cbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXNwb25zZVBhcnNlci50cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2Uob3B0aW9ucywgcmVzLmRhdGEpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlclF1ZXJ5KHF1ZXJ5OiBNc3NxbFF1ZXJ5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFxdWVyeS5oaWRlO1xuICB9XG5cbiAgbWV0cmljRmluZFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIG9wdGlvbmFsT3B0aW9uczogYW55KTogUHJvbWlzZTxNZXRyaWNGaW5kVmFsdWVbXT4ge1xuICAgIGxldCByZWZJZCA9ICd0ZW1wdmFyJztcbiAgICBpZiAob3B0aW9uYWxPcHRpb25zICYmIG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZSAmJiBvcHRpb25hbE9wdGlvbnMudmFyaWFibGUubmFtZSkge1xuICAgICAgcmVmSWQgPSBvcHRpb25hbE9wdGlvbnMudmFyaWFibGUubmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCByYW5nZSA9IG9wdGlvbmFsT3B0aW9ucz8ucmFuZ2UgYXMgVGltZVJhbmdlO1xuXG4gICAgY29uc3QgaW50ZXJwb2xhdGVkUXVlcnkgPSB7XG4gICAgICByZWZJZDogcmVmSWQsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnksIHt9LCB0aGlzLmludGVycG9sYXRlVmFyaWFibGUpLFxuICAgICAgZm9ybWF0OiAndGFibGUnLFxuICAgIH07XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZmV0Y2g8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4oe1xuICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZyb206IHJhbmdlPy5mcm9tPy52YWx1ZU9mKCk/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogcmFuZ2U/LnRvPy52YWx1ZU9mKCk/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBxdWVyaWVzOiBbaW50ZXJwb2xhdGVkUXVlcnldLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWVzdElkOiByZWZJZCxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyc3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlUGFyc2VyLnRyYW5zZm9ybU1ldHJpY0ZpbmRSZXNwb25zZShyc3ApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHRlc3REYXRhc291cmNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoKHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiAnNW0nLFxuICAgICAgICAgICAgdG86ICdub3cnLFxuICAgICAgICAgICAgcXVlcmllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVmSWQ6ICdBJyxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbE1zOiAxLFxuICAgICAgICAgICAgICAgIG1heERhdGFQb2ludHM6IDEsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgICAgICAgICByYXdTcWw6ICdTRUxFQ1QgMScsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAndGFibGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXBUbyh7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YWJhc2UgQ29ubmVjdGlvbiBPSycgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YodG9UZXN0aW5nU3RhdHVzKGVycikpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdGFyZ2V0Q29udGFpbnNUZW1wbGF0ZShxdWVyeTogTXNzcWxRdWVyeSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJhd1NxbCA9IHF1ZXJ5LnJhd1NxbC5yZXBsYWNlKCckX18nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYuY29udGFpbnNUZW1wbGF0ZShyYXdTcWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IE1zc3FsQ29uZmlnQ3RybCB9IGZyb20gJy4vY29uZmlnX2N0cmwnO1xuaW1wb3J0IHsgTXNzcWxEYXRhc291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IE1zc3FsUXVlcnlDdHJsIH0gZnJvbSAnLi9xdWVyeV9jdHJsJztcbmltcG9ydCB7IE1zc3FsUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFF1ZXJ5ID0gYFNFTEVDVFxuICAgIDx0aW1lX2NvbHVtbj4gYXMgdGltZSxcbiAgICA8dGV4dF9jb2x1bW4+IGFzIHRleHQsXG4gICAgPHRhZ3NfY29sdW1uPiBhcyB0YWdzXG4gIEZST01cbiAgICA8dGFibGUgbmFtZT5cbiAgV0hFUkVcbiAgICAkX190aW1lRmlsdGVyKHRpbWVfY29sdW1uKVxuICBPUkRFUiBCWVxuICAgIDx0aW1lX2NvbHVtbj4gQVNDYDtcblxuY2xhc3MgTXNzcWxBbm5vdGF0aW9uc1F1ZXJ5Q3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9hbm5vdGF0aW9ucy5lZGl0b3IuaHRtbCc7XG5cbiAgZGVjbGFyZSBhbm5vdGF0aW9uOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSkge1xuICAgIHRoaXMuYW5ub3RhdGlvbiA9ICRzY29wZS5jdHJsLmFubm90YXRpb247XG4gICAgdGhpcy5hbm5vdGF0aW9uLnJhd1F1ZXJ5ID0gdGhpcy5hbm5vdGF0aW9uLnJhd1F1ZXJ5IHx8IGRlZmF1bHRRdWVyeTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW48TXNzcWxEYXRhc291cmNlLCBNc3NxbFF1ZXJ5PihNc3NxbERhdGFzb3VyY2UpXG4gIC5zZXRRdWVyeUN0cmwoTXNzcWxRdWVyeUN0cmwpXG4gIC5zZXRDb25maWdDdHJsKE1zc3FsQ29uZmlnQ3RybClcbiAgLnNldEFubm90YXRpb25RdWVyeUN0cmwoTXNzcWxBbm5vdGF0aW9uc1F1ZXJ5Q3RybCk7XG4iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSAnYW5ndWxhcic7XG5cbmltcG9ydCB7IFBhbmVsRXZlbnRzLCBRdWVyeVJlc3VsdE1ldGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFF1ZXJ5Q3RybCB9IGZyb20gJ2FwcC9wbHVnaW5zL3Nkayc7XG5cbmltcG9ydCB7IE1zc3FsUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFF1ZXJ5ID0gYFNFTEVDVFxuICAkX190aW1lRXBvY2goPHRpbWVfY29sdW1uPiksXG4gIDx2YWx1ZSBjb2x1bW4+IGFzIHZhbHVlLFxuICA8c2VyaWVzIG5hbWUgY29sdW1uPiBhcyBtZXRyaWNcbkZST01cbiAgPHRhYmxlIG5hbWU+XG5XSEVSRVxuICAkX190aW1lRmlsdGVyKHRpbWVfY29sdW1uKVxuT1JERVIgQllcbiAgPHRpbWVfY29sdW1uPiBBU0NgO1xuXG5leHBvcnQgY2xhc3MgTXNzcWxRdWVyeUN0cmwgZXh0ZW5kcyBRdWVyeUN0cmw8TXNzcWxRdWVyeT4ge1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAncGFydGlhbHMvcXVlcnkuZWRpdG9yLmh0bWwnO1xuXG4gIGZvcm1hdHM6IGFueVtdO1xuICBsYXN0UXVlcnlNZXRhPzogUXVlcnlSZXN1bHRNZXRhO1xuICBsYXN0UXVlcnlFcnJvcj86IHN0cmluZztcbiAgc2hvd0hlbHAgPSBmYWxzZTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcblxuICAgIHRoaXMudGFyZ2V0LmZvcm1hdCA9IHRoaXMudGFyZ2V0LmZvcm1hdCB8fCAndGltZV9zZXJpZXMnO1xuICAgIHRoaXMudGFyZ2V0LmFsaWFzID0gJyc7XG4gICAgdGhpcy5mb3JtYXRzID0gW1xuICAgICAgeyB0ZXh0OiAnVGltZSBzZXJpZXMnLCB2YWx1ZTogJ3RpbWVfc2VyaWVzJyB9LFxuICAgICAgeyB0ZXh0OiAnVGFibGUnLCB2YWx1ZTogJ3RhYmxlJyB9LFxuICAgIF07XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0LnJhd1NxbCkge1xuICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyB3aGVuIGluIHRhYmxlIHBhbmVsXG4gICAgICBpZiAodGhpcy5wYW5lbEN0cmwucGFuZWwudHlwZSA9PT0gJ3RhYmxlJykge1xuICAgICAgICB0aGlzLnRhcmdldC5mb3JtYXQgPSAndGFibGUnO1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSAnU0VMRUNUIDEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YXJnZXQucmF3U3FsID0gZGVmYXVsdFF1ZXJ5O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGFuZWxDdHJsLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5kYXRhUmVjZWl2ZWQsIHRoaXMub25EYXRhUmVjZWl2ZWQuYmluZCh0aGlzKSwgJHNjb3BlKTtcbiAgICB0aGlzLnBhbmVsQ3RybC5ldmVudHMub24oUGFuZWxFdmVudHMuZGF0YUVycm9yLCB0aGlzLm9uRGF0YUVycm9yLmJpbmQodGhpcyksICRzY29wZSk7XG4gIH1cblxuICBvbkRhdGFSZWNlaXZlZChkYXRhTGlzdDogYW55KSB7XG4gICAgdGhpcy5sYXN0UXVlcnlFcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhc3RRdWVyeU1ldGEgPSBkYXRhTGlzdFswXT8ubWV0YTtcbiAgfVxuXG4gIG9uRGF0YUVycm9yKGVycjogYW55KSB7XG4gICAgaWYgKGVyci5kYXRhICYmIGVyci5kYXRhLnJlc3VsdHMpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5UmVzID0gZXJyLmRhdGEucmVzdWx0c1t0aGlzLnRhcmdldC5yZWZJZF07XG4gICAgICBpZiAocXVlcnlSZXMpIHtcbiAgICAgICAgdGhpcy5sYXN0UXVlcnlFcnJvciA9IHF1ZXJ5UmVzLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQW5ub3RhdGlvbkV2ZW50LCBEYXRhRnJhbWUsIE1ldHJpY0ZpbmRWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQmFja2VuZERhdGFTb3VyY2VSZXNwb25zZSwgdG9EYXRhUXVlcnlSZXNwb25zZSwgRmV0Y2hSZXNwb25zZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZVBhcnNlciB7XG4gIHRyYW5zZm9ybU1ldHJpY0ZpbmRSZXNwb25zZShyYXc6IEZldGNoUmVzcG9uc2U8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4pOiBNZXRyaWNGaW5kVmFsdWVbXSB7XG4gICAgY29uc3QgZnJhbWVzID0gdG9EYXRhUXVlcnlSZXNwb25zZShyYXcpLmRhdGEgYXMgRGF0YUZyYW1lW107XG5cbiAgICBpZiAoIWZyYW1lcyB8fCAhZnJhbWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGZyYW1lID0gZnJhbWVzWzBdO1xuXG4gICAgY29uc3QgdmFsdWVzOiBNZXRyaWNGaW5kVmFsdWVbXSA9IFtdO1xuICAgIGNvbnN0IHRleHRGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICdfX3RleHQnKTtcbiAgICBjb25zdCB2YWx1ZUZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ19fdmFsdWUnKTtcblxuICAgIGlmICh0ZXh0RmllbGQgJiYgdmFsdWVGaWVsZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0RmllbGQudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKHsgdGV4dDogJycgKyB0ZXh0RmllbGQudmFsdWVzLmdldChpKSwgdmFsdWU6ICcnICsgdmFsdWVGaWVsZC52YWx1ZXMuZ2V0KGkpIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZXMucHVzaChcbiAgICAgICAgLi4uZnJhbWUuZmllbGRzXG4gICAgICAgICAgLmZsYXRNYXAoKGYpID0+IGYudmFsdWVzLnRvQXJyYXkoKSlcbiAgICAgICAgICAubWFwKCh2KSA9PiAoe1xuICAgICAgICAgICAgdGV4dDogdixcbiAgICAgICAgICB9KSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldCh2YWx1ZXMubWFwKCh2KSA9PiB2LnRleHQpKSkubWFwKCh0ZXh0KSA9PiAoe1xuICAgICAgdGV4dCxcbiAgICAgIHZhbHVlOiB2YWx1ZXMuZmluZCgodikgPT4gdi50ZXh0ID09PSB0ZXh0KT8udmFsdWUsXG4gICAgfSkpO1xuICB9XG5cbiAgYXN5bmMgdHJhbnNmb3JtQW5ub3RhdGlvblJlc3BvbnNlKG9wdGlvbnM6IGFueSwgZGF0YTogQmFja2VuZERhdGFTb3VyY2VSZXNwb25zZSk6IFByb21pc2U8QW5ub3RhdGlvbkV2ZW50W10+IHtcbiAgICBjb25zdCBmcmFtZXMgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKHsgZGF0YTogZGF0YSB9KS5kYXRhIGFzIERhdGFGcmFtZVtdO1xuICAgIGlmICghZnJhbWVzIHx8ICFmcmFtZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGZyYW1lID0gZnJhbWVzWzBdO1xuICAgIGNvbnN0IHRpbWVGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0aW1lJyk7XG5cbiAgICBpZiAoIXRpbWVGaWVsZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgbWVzc2FnZTogJ01pc3NpbmcgbWFuZGF0b3J5IHRpbWUgY29sdW1uICh3aXRoIHRpbWUgY29sdW1uIGFsaWFzKSBpbiBhbm5vdGF0aW9uIHF1ZXJ5LicgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGltZUVuZEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpbWVlbmQnKTtcbiAgICBjb25zdCB0ZXh0RmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGV4dCcpO1xuICAgIGNvbnN0IHRhZ3NGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0YWdzJyk7XG5cbiAgICBjb25zdCBsaXN0OiBBbm5vdGF0aW9uRXZlbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRpbWVFbmQgPSB0aW1lRW5kRmllbGQgJiYgdGltZUVuZEZpZWxkLnZhbHVlcy5nZXQoaSkgPyBNYXRoLmZsb29yKHRpbWVFbmRGaWVsZC52YWx1ZXMuZ2V0KGkpKSA6IHVuZGVmaW5lZDtcbiAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgIGFubm90YXRpb246IG9wdGlvbnMuYW5ub3RhdGlvbixcbiAgICAgICAgdGltZTogTWF0aC5mbG9vcih0aW1lRmllbGQudmFsdWVzLmdldChpKSksXG4gICAgICAgIHRpbWVFbmQsXG4gICAgICAgIHRleHQ6IHRleHRGaWVsZCAmJiB0ZXh0RmllbGQudmFsdWVzLmdldChpKSA/IHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpIDogJycsXG4gICAgICAgIHRhZ3M6XG4gICAgICAgICAgdGFnc0ZpZWxkICYmIHRhZ3NGaWVsZC52YWx1ZXMuZ2V0KGkpXG4gICAgICAgICAgICA/IHRhZ3NGaWVsZC52YWx1ZXNcbiAgICAgICAgICAgICAgICAuZ2V0KGkpXG4gICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAgICAgICAgIDogW10sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbWFrZUNsYXNzRVM1Q29tcGF0aWJsZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9hZFBsdWdpbkNzcyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTWV0cmljc1BhbmVsQ3RybCBhcyBNZXRyaWNzUGFuZWxDdHJsRVM2IH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvbWV0cmljc19wYW5lbF9jdHJsJztcbmltcG9ydCB7IFBhbmVsQ3RybCBhcyBQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IFF1ZXJ5Q3RybCBhcyBRdWVyeUN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsJztcblxuY29uc3QgUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShQYW5lbEN0cmxFUzYpO1xuY29uc3QgTWV0cmljc1BhbmVsQ3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoTWV0cmljc1BhbmVsQ3RybEVTNik7XG5jb25zdCBRdWVyeUN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFF1ZXJ5Q3RybEVTNik7XG5cbmV4cG9ydCB7IFBhbmVsQ3RybCwgTWV0cmljc1BhbmVsQ3RybCwgUXVlcnlDdHJsLCBsb2FkUGx1Z2luQ3NzIH07XG4iXSwibmFtZXMiOlsiZGVwcmVjYXRpb25XYXJuaW5nIiwidXJsVXRpbCIsImxvY2F0aW9uU2VhcmNoVG9PYmplY3QiLCJsb2NhdGlvblNlcnZpY2UiLCJuYXZpZ2F0aW9uTG9nZ2VyIiwiREVGQVVMVF9QT1JUUyIsImh0dHAiLCJodHRwcyIsImZ0cCIsIkFuZ3VsYXJMb2NhdGlvbldyYXBwZXIiLCJjb25zdHJ1Y3RvciIsImFic1VybCIsIndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyIsImhhc2giLCJob3N0IiwicGF0aCIsInBvcnQiLCJwcm90b2NvbCIsInJlcGxhY2UiLCJzZWFyY2giLCJzdGF0ZSIsInVybCIsImZuIiwicmVwbGFjZW1lbnQiLCJzZWxmIiwid3JhcHBlciIsIm5hbWUiLCJhcHBseSIsImFyZ3VtZW50cyIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibmV3SGFzaCIsImdldExvY2F0aW9uIiwic2xpY2UiLCJFcnJvciIsIlVSTCIsImhyZWYiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwicGFyc2VkUGF0aCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJwdXNoIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJwYXJhbVZhbHVlIiwiZ2V0U2VhcmNoT2JqZWN0IiwicGFydGlhbCIsIm5ld1F1ZXJ5Iiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsInVwZGF0ZWRVcmwiLCJyZW5kZXJVcmwiLCJuZXdVcmwiLCJ0cmltIiwiaXNBcnJheSIsIkxvYWRpbmdTdGF0ZSIsIlBhbmVsRXZlbnRzIiwidG9EYXRhRnJhbWVEVE8iLCJ0b0xlZ2FjeVJlc3BvbnNlRGF0YSIsIlBhbmVsQ3RybCIsImFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIiwiTWV0cmljc1BhbmVsQ3RybCIsIiRzY29wZSIsIiRpbmplY3RvciIsIm5leHQiLCJkYXRhIiwicGFuZWxEYXRhIiwibG9hZGluZyIsInByb2Nlc3NEYXRhRXJyb3IiLCJlcnJvciIsIkxvYWRpbmciLCJhbmd1bGFyRGlydHlDaGVjayIsInJlcXVlc3QiLCJ0aW1lSW5mbyIsInRpbWVSYW5nZSIsInJhbmdlIiwidXNlRGF0YUZyYW1lcyIsImhhbmRsZURhdGFGcmFtZXMiLCJzZXJpZXMiLCJsZWdhY3kiLCJtYXAiLCJ2IiwiaGFuZGxlUXVlcnlSZXN1bHQiLCJjb250ZXh0U3J2IiwiZ2V0IiwiZGF0YXNvdXJjZVNydiIsInRpbWVTcnYiLCJ0ZW1wbGF0ZVNydiIsInBhbmVsIiwiZGF0YXNvdXJjZSIsImV2ZW50cyIsIm9uIiwicmVmcmVzaCIsIm9uTWV0cmljc1BhbmVsUmVmcmVzaCIsImJpbmQiLCJwYW5lbFRlYXJkb3duIiwib25QYW5lbFRlYXJEb3duIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbk1ldHJpY3NQYW5lbE1vdW50ZWQiLCJxdWVyeVJ1bm5lciIsImdldFF1ZXJ5UnVubmVyIiwicXVlcnlTdWJzY3JpcHRpb24iLCJnZXREYXRhIiwid2l0aFRyYW5zZm9ybXMiLCJ3aXRoRmllbGRDb25maWciLCJzdWJzY3JpYmUiLCJwYW5lbERhdGFPYnNlcnZlciIsInVuc3Vic2NyaWJlIiwib3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUiLCJzbmFwc2hvdERhdGEiLCJ1cGRhdGVUaW1lUmFuZ2UiLCJEb25lIiwiJHRpbWVvdXQiLCJlbWl0IiwiZGF0YVNuYXBzaG90TG9hZCIsInNjb3BlZFZhcnMiLCJ0aGVuIiwiaXNzdWVRdWVyaWVzIiwiY2F0Y2giLCJlcnIiLCJjYW5jZWxsZWQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIiRyb290IiwiJCRwaGFzZSIsIiRkaWdlc3QiLCJuZXdUaW1lRGF0YSIsInJ1biIsInF1ZXJpZXMiLCJ0YXJnZXRzIiwicGFuZWxJZCIsImlkIiwiZGFzaGJvYXJkSWQiLCJkYXNoYm9hcmQiLCJ0aW1lem9uZSIsImdldFRpbWV6b25lIiwibWF4RGF0YVBvaW50cyIsIndpZHRoIiwibWluSW50ZXJ2YWwiLCJpbnRlcnZhbCIsImNhY2hlVGltZW91dCIsInRyYW5zZm9ybWF0aW9ucyIsInNuYXBzaG90IiwiZnJhbWUiLCJkYXRhRnJhbWVzUmVjZWl2ZWQiLCJyZXN1bHQiLCJkYXRhUmVjZWl2ZWQiLCJpc1N0cmluZyIsIkV2ZW50QnVzU3J2IiwiY29uZmlnIiwicHJvZmlsZXIiLCJwbHVnaW4iLCIkcGFyZW50IiwiZWRpdG9yVGFicyIsIiRsb2NhdGlvbiIsInRpbWluZyIsInBhbmVscyIsInR5cGUiLCJwbHVnaW5JZCIsInBsdWdpbk5hbWUiLCIkb24iLCJwYW5lbERpZE1vdW50IiwiaW5pdGlhbGl6ZWQiLCJwYW5lbEluaXRpYWxpemVkIiwicmVuZGVyaW5nQ29tcGxldGVkIiwicHVibGlzaEFwcEV2ZW50IiwiZXZlbnQiLCJwYXlsb2FkIiwiYXBwRXZlbnQiLCJpbml0RWRpdE1vZGUiLCJlZGl0TW9kZUluaXRpYXRlZCIsImVkaXRNb2RlSW5pdGlhbGl6ZWQiLCJhZGRFZGl0b3JUYWIiLCJ0aXRsZSIsImRpcmVjdGl2ZUZuIiwiaW5kZXgiLCJpY29uIiwiZWRpdG9yVGFiIiwidGVtcGxhdGVVcmwiLCJzcGxpY2UiLCJnZXRFeHRlbmRlZE1lbnUiLCJtZW51IiwiaW5pdFBhbmVsQWN0aW9ucyIsImdldEFkZGl0aW9uYWxNZW51SXRlbXMiLCJvdGhlclBhbmVsSW5GdWxsc2NyZWVuIiwicmVuZGVyIiwiaW5kZXhPZiIsIlF1ZXJ5Q3RybCIsInBhbmVsQ3RybCIsImN0cmwiLCJ0YXJnZXQiLCJpc0xhc3RRdWVyeSIsIlBhc3N3b3JkRmllbGRFbnVtIiwiY3JlYXRlUmVzZXRIYW5kbGVyIiwiZmllbGQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzZWN1cmVKc29uRmllbGRzIiwic2VjdXJlSnNvbkRhdGEiLCJjcmVhdGVDaGFuZ2VIYW5kbGVyIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiTXNzcWxDb25maWdDdHJsIiwianNvbkRhdGEiLCJlbmNyeXB0Iiwic3NsUm9vdENlcnRGaWxlIiwidGxzU2tpcFZlcmlmeSIsInNlcnZlck5hbWUiLCJhdXRoZW50aWNhdGlvblR5cGUiLCJvblBhc3N3b3JkUmVzZXQiLCJQYXNzd29yZCIsIm9uUGFzc3dvcmRDaGFuZ2UiLCJvbkF1dGhlbnRpY2F0aW9uVHlwZUNoYW5nZSIsIm9uRW5jcnlwdENoYW5nZSIsInVzZXIiLCJwYXNzd29yZCIsInNob3dVc2VyQ3JlZGVudGlhbHMiLCJzaG93VGxzQ29uZmlnIiwic2hvd0NlcnRpZmljYXRlQ29uZmlnIiwiX21hcCIsImxhc3RWYWx1ZUZyb20iLCJvZiIsImNhdGNoRXJyb3IiLCJtYXBUbyIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImdldEJhY2tlbmRTcnYiLCJ0b1Rlc3RpbmdTdGF0dXMiLCJnZXRUZW1wbGF0ZVNydiIsIlJlc3BvbnNlUGFyc2VyIiwiTXNzcWxEYXRhc291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInJlc3BvbnNlUGFyc2VyIiwic2V0dGluZ3NEYXRhIiwidGltZUludGVydmFsIiwiaW50ZXJwb2xhdGVWYXJpYWJsZSIsInZhcmlhYmxlIiwibXVsdGkiLCJpbmNsdWRlQWxsIiwicXVvdGVkVmFsdWVzIiwidmFsIiwiam9pbiIsImludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzIiwiZXhwYW5kZWRRdWVyaWVzIiwicXVlcnkiLCJleHBhbmRlZFF1ZXJ5IiwiZ2V0UmVmIiwicmF3U3FsIiwicmF3UXVlcnkiLCJhcHBseVRlbXBsYXRlVmFyaWFibGVzIiwicmVmSWQiLCJmb3JtYXQiLCJhbm5vdGF0aW9uUXVlcnkiLCJvcHRpb25zIiwiYW5ub3RhdGlvbiIsIlByb21pc2UiLCJyZWplY3QiLCJmZXRjaCIsIm1ldGhvZCIsImZyb20iLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0byIsInJlcXVlc3RJZCIsInBpcGUiLCJyZXMiLCJ0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2UiLCJmaWx0ZXJRdWVyeSIsImhpZGUiLCJtZXRyaWNGaW5kUXVlcnkiLCJvcHRpb25hbE9wdGlvbnMiLCJpbnRlcnBvbGF0ZWRRdWVyeSIsInJzcCIsInRyYW5zZm9ybU1ldHJpY0ZpbmRSZXNwb25zZSIsInRlc3REYXRhc291cmNlIiwiaW50ZXJ2YWxNcyIsInN0YXR1cyIsInRhcmdldENvbnRhaW5zVGVtcGxhdGUiLCJjb250YWluc1RlbXBsYXRlIiwiRGF0YVNvdXJjZVBsdWdpbiIsIk1zc3FsUXVlcnlDdHJsIiwiZGVmYXVsdFF1ZXJ5IiwiTXNzcWxBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsInNldFF1ZXJ5Q3RybCIsInNldENvbmZpZ0N0cmwiLCJzZXRBbm5vdGF0aW9uUXVlcnlDdHJsIiwiYWxpYXMiLCJmb3JtYXRzIiwidGV4dCIsIm9uRGF0YVJlY2VpdmVkIiwiZGF0YUVycm9yIiwib25EYXRhRXJyb3IiLCJkYXRhTGlzdCIsImxhc3RRdWVyeUVycm9yIiwibGFzdFF1ZXJ5TWV0YSIsIm1ldGEiLCJyZXN1bHRzIiwicXVlcnlSZXMiLCJ0b0RhdGFRdWVyeVJlc3BvbnNlIiwicmF3IiwiZnJhbWVzIiwidmFsdWVzIiwidGV4dEZpZWxkIiwiZmllbGRzIiwiZmluZCIsImYiLCJ2YWx1ZUZpZWxkIiwiaSIsImZsYXRNYXAiLCJ0b0FycmF5IiwiQXJyYXkiLCJTZXQiLCJ0aW1lRmllbGQiLCJ0aW1lRW5kRmllbGQiLCJ0YWdzRmllbGQiLCJsaXN0IiwidGltZUVuZCIsIk1hdGgiLCJmbG9vciIsInRpbWUiLCJ0YWdzIiwic3BsaXQiLCJtYWtlQ2xhc3NFUzVDb21wYXRpYmxlIiwibG9hZFBsdWdpbkNzcyIsIk1ldHJpY3NQYW5lbEN0cmxFUzYiLCJQYW5lbEN0cmxFUzYiLCJRdWVyeUN0cmxFUzYiXSwic291cmNlUm9vdCI6IiJ9