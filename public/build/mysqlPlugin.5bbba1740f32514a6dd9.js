"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["mysqlPlugin"],{

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

/***/ "./public/app/angular/components/sql_part/sql_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlPart": () => (/* binding */ SqlPart),
/* harmony export */   "SqlPartDef": () => (/* binding */ SqlPartDef)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class SqlPartDef {
  constructor(options) {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "style", void 0);

    _defineProperty(this, "label", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "defaultParams", void 0);

    _defineProperty(this, "wrapOpen", void 0);

    _defineProperty(this, "wrapClose", void 0);

    _defineProperty(this, "separator", void 0);

    this.type = options.type;

    if (options.label) {
      this.label = options.label;
    } else {
      this.label = this.type[0].toUpperCase() + this.type.substring(1) + ':';
    }

    this.style = options.style;

    if (this.style === 'function') {
      this.wrapOpen = '(';
      this.wrapClose = ')';
      this.separator = ', ';
    } else {
      this.wrapOpen = ' ';
      this.wrapClose = ' ';
      this.separator = ' ';
    }

    this.params = options.params;
    this.defaultParams = options.defaultParams;
  }

}
class SqlPart {
  constructor(part, def) {
    _defineProperty(this, "part", void 0);

    _defineProperty(this, "def", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "label", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "datatype", void 0);

    this.part = part;
    this.def = def;

    if (!this.def) {
      throw {
        message: 'Could not find sql part ' + part.type
      };
    }

    this.datatype = part.datatype;

    if (part.name) {
      this.name = part.name;
      this.label = def.label + ' ' + part.name;
    } else {
      this.name = '';
      this.label = def.label;
    }

    part.params = part.params || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(this.def.defaultParams);
    this.params = part.params;
  }

  updateParam(strValue, index) {
    // handle optional parameters
    if (strValue === '' && this.def.params[index].optional) {
      this.params.splice(index, 1);
    } else {
      this.params[index] = strValue;
    }

    this.part.params = this.params;
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

/***/ "./public/app/plugins/datasource/mysql/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MysqlDatasource": () => (/* binding */ MysqlDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/mysql/mysql_query_model.ts");
/* harmony import */ var _features_variables_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/mysql/response_parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class MysqlDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)()) {
    super(instanceSettings);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "interpolateVariable", (value, variable) => {
      if (typeof value === 'string') {
        if (variable.multi || variable.includeAll) {
          const result = this.queryModel.quoteLiteral(value);
          return result;
        } else {
          return value;
        }
      }

      if (typeof value === 'number') {
        return value;
      }

      const quotedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, v => {
        return this.queryModel.quoteLiteral(v);
      });

      return quotedValues.join(',');
    });

    this.templateSrv = templateSrv;
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.queryModel = new app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_4__["default"]({});
    const settingsData = instanceSettings.jsonData || {};
    this.interval = settingsData.timeInterval || '1m';
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

  filterQuery(query) {
    return !query.hide;
  }

  applyTemplateVariables(target, scopedVars) {
    const queryModel = new app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](target, this.templateSrv, scopedVars);
    return {
      refId: target.refId,
      datasource: this.getRef(),
      rawSql: queryModel.render(this.interpolateVariable),
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
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: options.range.from.valueOf().toString(),
        to: options.range.to.valueOf().toString(),
        queries: [query]
      },
      requestId: options.annotation.name
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(async res => await this.responseParser.transformAnnotationResponse(options, res.data))));
  }

  metricFindQuery(query, optionalOptions) {
    var _range$from, _range$from$valueOf, _range$to, _range$to$valueOf;

    let refId = 'tempvar';

    if (optionalOptions && optionalOptions.variable && optionalOptions.variable.name) {
      refId = optionalOptions.variable.name;
    }

    const rawSql = this.templateSrv.replace(query, (0,_features_variables_utils__WEBPACK_IMPORTED_MODULE_5__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '%',
      options: optionalOptions
    }), this.interpolateVariable);
    const interpolatedQuery = {
      refId: refId,
      datasource: this.getRef(),
      rawSql,
      format: 'table'
    };
    const range = optionalOptions === null || optionalOptions === void 0 ? void 0 : optionalOptions.range;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: range === null || range === void 0 ? void 0 : (_range$from = range.from) === null || _range$from === void 0 ? void 0 : (_range$from$valueOf = _range$from.valueOf()) === null || _range$from$valueOf === void 0 ? void 0 : _range$from$valueOf.toString(),
        to: range === null || range === void 0 ? void 0 : (_range$to = range.to) === null || _range$to === void 0 ? void 0 : (_range$to$valueOf = _range$to.valueOf()) === null || _range$to$valueOf === void 0 ? void 0 : _range$to$valueOf.toString(),
        queries: [interpolatedQuery]
      },
      requestId: refId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(rsp => {
      return this.responseParser.transformMetricFindResponse(rsp);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]);
    })));
  }

  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
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
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)({
      status: 'success',
      message: 'Database Connection OK'
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)((0,_grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__.toTestingStatus)(err));
    })));
  }

  targetContainsTemplate(target) {
    let rawSql = '';

    if (target.rawQuery) {
      rawSql = target.rawSql;
    } else {
      const query = new app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](target);
      rawSql = query.buildQuery();
    }

    rawSql = rawSql.replace('$__', '');
    return this.templateSrv.containsTemplate(rawSql);
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/meta_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MysqlMetaQuery": () => (/* binding */ MysqlMetaQuery)
/* harmony export */ });
class MysqlMetaQuery {
  constructor(target, queryModel) {
    this.target = target;
    this.queryModel = queryModel;
  }

  getOperators(datatype) {
    switch (datatype) {
      case 'double':
      case 'float':
        {
          return ['=', '!=', '<', '<=', '>', '>='];
        }

      case 'text':
      case 'tinytext':
      case 'mediumtext':
      case 'longtext':
      case 'varchar':
      case 'char':
        {
          return ['=', '!=', '<', '<=', '>', '>=', 'IN', 'NOT IN', 'LIKE', 'NOT LIKE'];
        }

      default:
        {
          return ['=', '!=', '<', '<=', '>', '>=', 'IN', 'NOT IN'];
        }
    }
  } // quote identifier as literal to use in metadata queries


  quoteIdentAsLiteral(value) {
    return this.queryModel.quoteLiteral(this.queryModel.unquoteIdentifier(value));
  }

  findMetricTable() {
    // query that returns first table found that has a timestamp(tz) column and a float column
    const query = `
  SELECT
    table_name as table_name,
    ( SELECT
        column_name as column_name
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN ('timestamp', 'datetime')
      ORDER BY ordinal_position LIMIT 1
    ) AS time_column,
    ( SELECT
        column_name AS column_name
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN('float', 'int', 'bigint')
      ORDER BY ordinal_position LIMIT 1
    ) AS value_column
  FROM information_schema.tables t
  WHERE
    t.table_schema = database() AND
    EXISTS
    ( SELECT 1
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN ('timestamp', 'datetime')
    ) AND
    EXISTS
    ( SELECT 1
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN('float', 'int', 'bigint')
    )
  LIMIT 1
;`;
    return query;
  }

  buildTableConstraint(table) {
    let query = ''; // check for schema qualified table

    if (table.includes('.')) {
      const parts = table.split('.');
      query = 'table_schema = ' + this.quoteIdentAsLiteral(parts[0]);
      query += ' AND table_name = ' + this.quoteIdentAsLiteral(parts[1]);
      return query;
    } else {
      query = 'table_schema = database() AND table_name = ' + this.quoteIdentAsLiteral(table);
      return query;
    }
  }

  buildTableQuery() {
    return 'SELECT table_name FROM information_schema.tables WHERE table_schema = database() ORDER BY table_name';
  }

  buildColumnQuery(type) {
    let query = 'SELECT column_name FROM information_schema.columns WHERE ';
    query += this.buildTableConstraint(this.target.table);

    switch (type) {
      case 'time':
        {
          query += " AND data_type IN ('timestamp','datetime','bigint','int','double','float')";
          break;
        }

      case 'metric':
        {
          query += " AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')";
          break;
        }

      case 'value':
        {
          query += " AND data_type IN ('bigint','int','smallint','mediumint','tinyint','double','decimal','float')";
          query += ' AND column_name <> ' + this.quoteIdentAsLiteral(this.target.timeColumn);
          break;
        }

      case 'group':
        {
          query += " AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')";
          break;
        }
    }

    query += ' ORDER BY column_name';
    return query;
  }

  buildValueQuery(column) {
    let query = 'SELECT DISTINCT QUOTE(' + column + ')';
    query += ' FROM ' + this.target.table;
    query += ' WHERE $__timeFilter(' + this.target.timeColumn + ')';
    query += ' ORDER BY 1 LIMIT 100';
    return query;
  }

  buildDatatypeQuery(column) {
    let query = `
SELECT data_type
FROM information_schema.columns
WHERE `;
    query += ' table_name = ' + this.quoteIdentAsLiteral(this.target.table);
    query += ' AND column_name = ' + this.quoteIdentAsLiteral(column);
    return query;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationsQueryCtrl": () => (/* binding */ MysqlAnnotationsQueryCtrl),
/* harmony export */   "ConfigCtrl": () => (/* binding */ MysqlConfigCtrl),
/* harmony export */   "Datasource": () => (/* reexport safe */ _datasource__WEBPACK_IMPORTED_MODULE_2__.MysqlDatasource),
/* harmony export */   "MysqlDatasource": () => (/* reexport safe */ _datasource__WEBPACK_IMPORTED_MODULE_2__.MysqlDatasource),
/* harmony export */   "QueryCtrl": () => (/* reexport safe */ _query_ctrl__WEBPACK_IMPORTED_MODULE_3__.MysqlQueryCtrl),
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/datasources/utils/passwordHandlers.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/mysql/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/mysql/query_ctrl.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MysqlConfigCtrl {
  constructor() {
    _defineProperty(this, "current", void 0);

    _defineProperty(this, "onPasswordReset", void 0);

    _defineProperty(this, "onPasswordChange", void 0);

    this.onPasswordReset = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createResetHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
    this.onPasswordChange = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createChangeHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
  }

}

_defineProperty(MysqlConfigCtrl, "templateUrl", 'partials/config.html');

const defaultQuery = `SELECT
    UNIX_TIMESTAMP(<time_column>) as time_sec,
    <text_column> as text,
    <tags_column> as tags
  FROM <table name>
  WHERE $__timeFilter(time_column)
  ORDER BY <time_column> ASC
  LIMIT 100
  `;

class MysqlAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.rawQuery = this.annotation.rawQuery || defaultQuery;
  }

}

MysqlAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(MysqlAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');


const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.MysqlDatasource).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_3__.MysqlQueryCtrl).setConfigCtrl(MysqlConfigCtrl).setAnnotationQueryCtrl(MysqlAnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/mysql_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MySQLQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class MySQLQueryModel {
  /** @ngInject */
  constructor(target, templateSrv, scopedVars) {
    _defineProperty(this, "target", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "scopedVars", void 0);

    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    target.format = target.format || 'time_series';
    target.timeColumn = target.timeColumn || 'time';
    target.metricColumn = target.metricColumn || 'none';
    target.group = target.group || [];
    target.where = target.where || [{
      type: 'macro',
      name: '$__timeFilter',
      params: []
    }];
    target.select = target.select || [[{
      type: 'column',
      params: ['value']
    }]]; // handle pre query gui panels gracefully

    if (!('rawQuery' in this.target)) {
      if ('rawSql' in target) {
        // pre query gui panel
        target.rawQuery = true;
      } else {
        // new panel
        target.rawQuery = false;
      }
    } // give interpolateQueryStr access to this


    this.interpolateQueryStr = this.interpolateQueryStr.bind(this);
  } // remove identifier quoting from identifier to use in metadata queries


  unquoteIdentifier(value) {
    if (value[0] === '"' && value[value.length - 1] === '"') {
      return value.substring(1, value.length - 1).replace(/""/g, '"');
    } else {
      return value;
    }
  }

  quoteIdentifier(value) {
    return '"' + value.replace(/"/g, '""') + '"';
  }

  quoteLiteral(value) {
    return "'" + value.replace(/'/g, "''") + "'";
  }

  escapeLiteral(value) {
    return String(value).replace(/'/g, "''");
  }

  hasTimeGroup() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.group, g => g.type === 'time');
  }

  hasMetricColumn() {
    return this.target.metricColumn !== 'none';
  }

  interpolateQueryStr(value, variable, defaultFormatFn) {
    // if no multi or include all do not regexEscape
    if (!variable.multi && !variable.includeAll) {
      return this.escapeLiteral(value);
    }

    if (typeof value === 'string') {
      return this.quoteLiteral(value);
    }

    const escapedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, this.quoteLiteral);
    return escapedValues.join(',');
  }

  render(interpolate) {
    const target = this.target; // new query with no table set yet

    if (!this.target.rawQuery && !('table' in this.target)) {
      return '';
    }

    if (!target.rawQuery) {
      target.rawSql = this.buildQuery();
    }

    if (interpolate) {
      return this.templateSrv.replace(target.rawSql, this.scopedVars, this.interpolateQueryStr);
    } else {
      return target.rawSql;
    }
  }

  hasUnixEpochTimecolumn() {
    return ['int', 'bigint', 'double'].indexOf(this.target.timeColumnType) > -1;
  }

  buildTimeColumn(alias = true) {
    const timeGroup = this.hasTimeGroup();
    let query;
    let macro = '$__timeGroup';

    if (timeGroup) {
      let args;

      if (timeGroup.params.length > 1 && timeGroup.params[1] !== 'none') {
        args = timeGroup.params.join(',');
      } else {
        args = timeGroup.params[0];
      }

      if (this.hasUnixEpochTimecolumn()) {
        macro = '$__unixEpochGroup';
      }

      if (alias) {
        macro += 'Alias';
      }

      query = macro + '(' + this.target.timeColumn + ',' + args + ')';
    } else {
      query = this.target.timeColumn;

      if (alias) {
        query += ' AS "time"';
      }
    }

    return query;
  }

  buildMetricColumn() {
    if (this.hasMetricColumn()) {
      return this.target.metricColumn + ' AS metric';
    }

    return '';
  }

  buildValueColumns() {
    let query = '';

    for (const column of this.target.select) {
      query += ',\n  ' + this.buildValueColumn(column);
    }

    return query;
  }

  buildValueColumn(column) {
    let query = '';
    const columnName = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'column');
    query = columnName.params[0];
    const aggregate = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'aggregate');

    if (aggregate) {
      const func = aggregate.params[0];
      query = func + '(' + query + ')';
    }

    const alias = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'alias');

    if (alias) {
      query += ' AS ' + this.quoteIdentifier(alias.params[0]);
    }

    return query;
  }

  buildWhereClause() {
    let query = '';
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.where, (tag, index) => {
      switch (tag.type) {
        case 'macro':
          return tag.name + '(' + this.target.timeColumn + ')';
          break;

        case 'expression':
          return tag.params.join(' ');
          break;
      }
    });

    if (conditions.length > 0) {
      query = '\nWHERE\n  ' + conditions.join(' AND\n  ');
    }

    return query;
  }

  buildGroupClause() {
    let query = '';
    let groupSection = '';

    for (let i = 0; i < this.target.group.length; i++) {
      const part = this.target.group[i];

      if (i > 0) {
        groupSection += ', ';
      }

      if (part.type === 'time') {
        groupSection += '1';
      } else {
        groupSection += part.params[0];
      }
    }

    if (groupSection.length) {
      query = '\nGROUP BY ' + groupSection;

      if (this.hasMetricColumn()) {
        query += ',2';
      }
    }

    return query;
  }

  buildQuery() {
    let query = 'SELECT';
    query += '\n  ' + this.buildTimeColumn();

    if (this.hasMetricColumn()) {
      query += ',\n  ' + this.buildMetricColumn();
    }

    query += this.buildValueColumns();
    query += '\nFROM ' + this.target.table;
    query += this.buildWhereClause();
    query += this.buildGroupClause();
    query += '\nORDER BY ' + this.buildTimeColumn(false);
    return query;
  }

}
MySQLQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MysqlQueryCtrl": () => (/* binding */ MysqlQueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _meta_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/mysql/meta_query.ts");
/* harmony import */ var _mysql_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/mysql/mysql_query_model.ts");
/* harmony import */ var _sql_part__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/mysql/sql_part.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const defaultQuery = `SELECT
  UNIX_TIMESTAMP(<time_column>) as time_sec,
  <value column> as value,
  <series name column> as metric
FROM <table name>
WHERE $__timeFilter(time_column)
ORDER BY <time_column> ASC
`;
class MysqlQueryCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__.QueryCtrl {
  /** @ngInject */
  constructor($scope, $injector, templateSrv, uiSegmentSrv) {
    super($scope, $injector);

    _defineProperty(this, "formats", void 0);

    _defineProperty(this, "lastQueryError", void 0);

    _defineProperty(this, "showHelp", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "metaBuilder", void 0);

    _defineProperty(this, "lastQueryMeta", void 0);

    _defineProperty(this, "tableSegment", void 0);

    _defineProperty(this, "whereAdd", void 0);

    _defineProperty(this, "timeColumnSegment", void 0);

    _defineProperty(this, "metricColumnSegment", void 0);

    _defineProperty(this, "selectMenu", []);

    _defineProperty(this, "selectParts", []);

    _defineProperty(this, "groupParts", []);

    _defineProperty(this, "whereParts", []);

    _defineProperty(this, "groupAdd", void 0);

    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target = this.target;
    this.queryModel = new _mysql_query_model__WEBPACK_IMPORTED_MODULE_6__["default"](this.target, templateSrv, this.panel.scopedVars);
    this.metaBuilder = new _meta_query__WEBPACK_IMPORTED_MODULE_5__.MysqlMetaQuery(this.target, this.queryModel);
    this.updateProjection();
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
        this.target.rawQuery = true;
      } else {
        this.target.rawSql = defaultQuery;
        this.datasource.metricFindQuery(this.metaBuilder.findMetricTable()).then(result => {
          if (result.length > 0) {
            this.target.table = result[0].text;
            let segment = this.uiSegmentSrv.newSegment(this.target.table);
            this.tableSegment.html = segment.html;
            this.tableSegment.value = segment.value;
            this.target.timeColumn = result[1].text;
            segment = this.uiSegmentSrv.newSegment(this.target.timeColumn);
            this.timeColumnSegment.html = segment.html;
            this.timeColumnSegment.value = segment.value;
            this.target.timeColumnType = 'timestamp';
            this.target.select = [[{
              type: 'column',
              params: [result[2].text]
            }]];
            this.updateProjection();
            this.updateRawSqlAndRefresh();
          }
        });
      }
    }

    if (!this.target.table) {
      this.tableSegment = uiSegmentSrv.newSegment({
        value: 'select table',
        fake: true
      });
    } else {
      this.tableSegment = uiSegmentSrv.newSegment(this.target.table);
    }

    this.timeColumnSegment = uiSegmentSrv.newSegment(this.target.timeColumn);
    this.metricColumnSegment = uiSegmentSrv.newSegment(this.target.metricColumn);
    this.buildSelectMenu();
    this.whereAdd = this.uiSegmentSrv.newPlusButton();
    this.groupAdd = this.uiSegmentSrv.newPlusButton();
    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataReceived, this.onDataReceived.bind(this), $scope);
    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataError, this.onDataError.bind(this), $scope);
  }

  updateRawSqlAndRefresh() {
    if (!this.target.rawQuery) {
      this.target.rawSql = this.queryModel.buildQuery();
    }

    this.panelCtrl.refresh();
  }

  updateProjection() {
    this.selectParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, parts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create).filter(n => n);
    });
    this.whereParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.where, _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create).filter(n => n);
    this.groupParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.group, _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create).filter(n => n);
  }

  updatePersistedParts() {
    this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectParts, selectParts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
        return {
          type: part.def.type,
          datatype: part.datatype,
          params: part.params
        };
      });
    });
    this.target.where = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.whereParts, part => {
      return {
        type: part.def.type,
        datatype: part.datatype,
        name: part.name,
        params: part.params
      };
    });
    this.target.group = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.groupParts, part => {
      return {
        type: part.def.type,
        datatype: part.datatype,
        params: part.params
      };
    });
  }

  buildSelectMenu() {
    const aggregates = {
      text: 'Aggregate Functions',
      value: 'aggregate',
      submenu: [{
        text: 'Average',
        value: 'avg'
      }, {
        text: 'Count',
        value: 'count'
      }, {
        text: 'Maximum',
        value: 'max'
      }, {
        text: 'Minimum',
        value: 'min'
      }, {
        text: 'Sum',
        value: 'sum'
      }, {
        text: 'Standard deviation',
        value: 'stddev'
      }, {
        text: 'Variance',
        value: 'variance'
      }]
    };
    this.selectMenu.push(aggregates);
    this.selectMenu.push({
      text: 'Alias',
      value: 'alias'
    });
    this.selectMenu.push({
      text: 'Column',
      value: 'column'
    });
  }

  toggleEditorMode() {
    if (this.target.rawQuery) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_2__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_4__.ShowConfirmModalEvent({
        title: 'Warning',
        text2: 'Switching to query builder may overwrite your raw SQL.',
        icon: 'exclamation-triangle',
        yesText: 'Switch',
        onConfirm: () => {
          // This could be called from React, so wrap in $evalAsync.
          // Will then either run as part of the current digest cycle or trigger a new one.
          this.$scope.$evalAsync(() => {
            this.target.rawQuery = !this.target.rawQuery;
          });
        }
      }));
    } else {
      // This could be called from React, so wrap in $evalAsync.
      // Will then either run as part of the current digest cycle or trigger a new one.
      this.$scope.$evalAsync(() => {
        this.target.rawQuery = !this.target.rawQuery;
      });
    }
  }

  resetPlusButton(button) {
    const plusButton = this.uiSegmentSrv.newPlusButton();
    button.html = plusButton.html;
    button.value = plusButton.value;
  }

  getTableSegments() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildTableQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
  }

  tableChanged() {
    this.target.table = this.tableSegment.value;
    this.target.where = [];
    this.target.group = [];
    this.updateProjection();
    const segment = this.uiSegmentSrv.newSegment('none');
    this.metricColumnSegment.html = segment.html;
    this.metricColumnSegment.value = segment.value;
    this.target.metricColumn = 'none';
    const task1 = this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('time')).then(result => {
      // check if time column is still valid
      if (result.length > 0 && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(result, r => r.text === this.target.timeColumn)) {
        const segment = this.uiSegmentSrv.newSegment(result[0].text);
        this.timeColumnSegment.html = segment.html;
        this.timeColumnSegment.value = segment.value;
      }

      return this.timeColumnChanged(false);
    });
    const task2 = this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('value')).then(result => {
      if (result.length > 0) {
        this.target.select = [[{
          type: 'column',
          params: [result[0].text]
        }]];
        this.updateProjection();
      }
    });
    Promise.all([task1, task2]).then(() => {
      this.updateRawSqlAndRefresh();
    });
  }

  getTimeColumnSegments() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('time')).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
  }

  timeColumnChanged(refresh) {
    this.target.timeColumn = this.timeColumnSegment.value;
    return this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(this.target.timeColumn)).then(result => {
      if (result.length === 1) {
        if (this.target.timeColumnType !== result[0].text) {
          this.target.timeColumnType = result[0].text;
        }

        let partModel;

        if (this.queryModel.hasUnixEpochTimecolumn()) {
          partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'macro',
            name: '$__unixEpochFilter',
            params: []
          });
        } else {
          partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'macro',
            name: '$__timeFilter',
            params: []
          });
        }

        if (this.whereParts.length >= 1 && this.whereParts[0].def.type === 'macro') {
          // replace current macro
          this.whereParts[0] = partModel;
        } else {
          this.whereParts.splice(0, 0, partModel);
        }
      }

      this.updatePersistedParts();

      if (refresh !== false) {
        this.updateRawSqlAndRefresh();
      }
    });
  }

  getMetricColumnSegments() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('metric')).then(this.transformToSegments({
      addNone: true
    })).catch(this.handleQueryError.bind(this));
  }

  metricColumnChanged() {
    this.target.metricColumn = this.metricColumnSegment.value;
    this.updateRawSqlAndRefresh();
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

  transformToSegments(config) {
    return results => {
      const segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results, segment => {
        return this.uiSegmentSrv.newSegment({
          value: segment.text,
          expandable: segment.expandable
        });
      });

      if (config.addTemplateVars) {
        for (const variable of this.templateSrv.getVariables()) {
          let value;
          value = '$' + variable.name;

          if (config.templateQuoter && variable.multi === false) {
            value = config.templateQuoter(value);
          }

          segments.unshift(this.uiSegmentSrv.newSegment({
            type: 'template',
            value: value,
            expandable: true
          }));
        }
      }

      if (config.addNone) {
        segments.unshift(this.uiSegmentSrv.newSegment({
          type: 'template',
          value: 'none',
          expandable: true
        }));
      }

      return segments;
    };
  }

  findAggregateIndex(selectParts) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(selectParts, p => p.def.type === 'aggregate' || p.def.type === 'percentile');
  }

  findWindowIndex(selectParts) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(selectParts, p => p.def.type === 'window' || p.def.type === 'moving_window');
  }

  addSelectPart(selectParts, item, subItem) {
    let partType = item.value;

    if (subItem && subItem.type) {
      partType = subItem.type;
    }

    let partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
      type: partType
    });

    if (subItem) {
      partModel.params[0] = subItem.value;
    }

    let addAlias = false;

    switch (partType) {
      case 'column':
        const parts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
          return _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: part.def.type,
            params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(part.params)
          });
        });
        this.selectParts.push(parts);
        break;

      case 'percentile':
      case 'aggregate':
        // add group by if no group by yet
        if (this.target.group.length === 0) {
          this.addGroup('time', '$__interval');
        }

        const aggIndex = this.findAggregateIndex(selectParts);

        if (aggIndex !== -1) {
          // replace current aggregation
          selectParts[aggIndex] = partModel;
        } else {
          selectParts.splice(1, 0, partModel);
        }

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(selectParts, p => p.def.type === 'alias')) {
          addAlias = true;
        }

        break;

      case 'moving_window':
      case 'window':
        const windowIndex = this.findWindowIndex(selectParts);

        if (windowIndex !== -1) {
          // replace current window function
          selectParts[windowIndex] = partModel;
        } else {
          const aggIndex = this.findAggregateIndex(selectParts);

          if (aggIndex !== -1) {
            selectParts.splice(aggIndex + 1, 0, partModel);
          } else {
            selectParts.splice(1, 0, partModel);
          }
        }

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(selectParts, p => p.def.type === 'alias')) {
          addAlias = true;
        }

        break;

      case 'alias':
        addAlias = true;
        break;
    }

    if (addAlias) {
      // set initial alias name to column name
      partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
        type: 'alias',
        params: [selectParts[0].params[0].replace(/"/g, '')]
      });

      if (selectParts[selectParts.length - 1].def.type === 'alias') {
        selectParts[selectParts.length - 1] = partModel;
      } else {
        selectParts.push(partModel);
      }
    }

    this.updatePersistedParts();
    this.updateRawSqlAndRefresh();
  }

  removeSelectPart(selectParts, part) {
    if (part.def.type === 'column') {
      // remove all parts of column unless its last column
      if (this.selectParts.length > 1) {
        const modelsIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.selectParts, selectParts);
        this.selectParts.splice(modelsIndex, 1);
      }
    } else {
      const partIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(selectParts, part);
      selectParts.splice(partIndex, 1);
    }

    this.updatePersistedParts();
  }

  handleSelectPartEvent(selectParts, part, evt) {
    switch (evt.name) {
      case 'get-param-options':
        {
          switch (part.def.type) {
            // case 'aggregate':
            //   return this.datasource
            //     .metricFindQuery(this.metaBuilder.buildAggregateQuery())
            //     .then(this.transformToSegments({}))
            //     .catch(this.handleQueryError.bind(this));
            case 'column':
              return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('value')).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
          }
        }

      case 'part-param-changed':
        {
          this.updatePersistedParts();
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'action':
        {
          this.removeSelectPart(selectParts, part);
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([{
            text: 'Remove',
            value: 'remove-part'
          }]);
        }
    }
  }

  handleGroupPartEvent(part, index, evt) {
    switch (evt.name) {
      case 'get-param-options':
        {
          return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
        }

      case 'part-param-changed':
        {
          this.updatePersistedParts();
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'action':
        {
          this.removeGroup(part, index);
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([{
            text: 'Remove',
            value: 'remove-part'
          }]);
        }
    }
  }

  addGroup(partType, value) {
    let params = [value];

    if (partType === 'time') {
      params = ['$__interval', 'none'];
    }

    const partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
      type: partType,
      params: params
    });

    if (partType === 'time') {
      // put timeGroup at start
      this.groupParts.splice(0, 0, partModel);
    } else {
      this.groupParts.push(partModel);
    } // add aggregates when adding group by


    for (const selectParts of this.selectParts) {
      if (!selectParts.some(part => part.def.type === 'aggregate')) {
        const aggregate = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
          type: 'aggregate',
          params: ['avg']
        });
        selectParts.splice(1, 0, aggregate);

        if (!selectParts.some(part => part.def.type === 'alias')) {
          const alias = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'alias',
            params: [selectParts[0].part.params[0]]
          });
          selectParts.push(alias);
        }
      }
    }

    this.updatePersistedParts();
  }

  removeGroup(part, index) {
    if (part.def.type === 'time') {
      // remove aggregations
      this.selectParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectParts, s => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(s, part => {
          if (part.def.type === 'aggregate' || part.def.type === 'percentile') {
            return false;
          }

          return true;
        });
      });
    }

    this.groupParts.splice(index, 1);
    this.updatePersistedParts();
  }

  handleWherePartEvent(whereParts, part, evt, index) {
    switch (evt.name) {
      case 'get-param-options':
        {
          switch (evt.param.name) {
            case 'left':
              return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));

            case 'right':
              if (['int', 'bigint', 'double', 'datetime'].indexOf(part.datatype) > -1) {
                // don't do value lookups for numerical fields
                return Promise.resolve([]);
              } else {
                return this.datasource.metricFindQuery(this.metaBuilder.buildValueQuery(part.params[0])).then(this.transformToSegments({
                  addTemplateVars: true,
                  templateQuoter: v => {
                    return this.queryModel.quoteLiteral(v);
                  }
                })).catch(this.handleQueryError.bind(this));
              }

            case 'op':
              return Promise.resolve(this.uiSegmentSrv.newOperators(this.metaBuilder.getOperators(part.datatype)));

            default:
              return Promise.resolve([]);
          }
        }

      case 'part-param-changed':
        {
          this.updatePersistedParts();
          this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(part.params[0])).then(d => {
            if (d.length === 1) {
              part.datatype = d[0].text;
            }
          });
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'action':
        {
          // remove element
          whereParts.splice(index, 1);
          this.updatePersistedParts();
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([{
            text: 'Remove',
            value: 'remove-part'
          }]);
        }
    }
  }

  getWhereOptions() {
    const options = [];

    if (this.queryModel.hasUnixEpochTimecolumn()) {
      options.push(this.uiSegmentSrv.newSegment({
        type: 'macro',
        value: '$__unixEpochFilter'
      }));
    } else {
      options.push(this.uiSegmentSrv.newSegment({
        type: 'macro',
        value: '$__timeFilter'
      }));
    }

    options.push(this.uiSegmentSrv.newSegment({
      type: 'expression',
      value: 'Expression'
    }));
    return Promise.resolve(options);
  }

  addWhereAction(part, index) {
    switch (this.whereAdd.type) {
      case 'macro':
        {
          const partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'macro',
            name: this.whereAdd.value,
            params: []
          });

          if (this.whereParts.length >= 1 && this.whereParts[0].def.type === 'macro') {
            // replace current macro
            this.whereParts[0] = partModel;
          } else {
            this.whereParts.splice(0, 0, partModel);
          }

          break;
        }

      default:
        {
          this.whereParts.push(_sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'expression',
            params: ['value', '=', 'value']
          }));
        }
    }

    this.updatePersistedParts();
    this.resetPlusButton(this.whereAdd);
    this.updateRawSqlAndRefresh();
  }

  getGroupOptions() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('group')).then(tags => {
      const options = [];

      if (!this.queryModel.hasTimeGroup()) {
        options.push(this.uiSegmentSrv.newSegment({
          type: 'time',
          value: 'time($__interval,none)'
        }));
      }

      for (const tag of tags) {
        options.push(this.uiSegmentSrv.newSegment({
          type: 'column',
          value: tag.text
        }));
      }

      return options;
    }).catch(this.handleQueryError.bind(this));
  }

  addGroupAction() {
    switch (this.groupAdd.value) {
      default:
        {
          this.addGroup(this.groupAdd.type, this.groupAdd.value);
        }
    }

    this.resetPlusButton(this.groupAdd);
    this.updateRawSqlAndRefresh();
  }

  handleQueryError(err) {
    this.error = err.message || 'Failed to issue metric query';
    return [];
  }

}
MysqlQueryCtrl.$inject = ["$scope", "$injector", "templateSrv", "uiSegmentSrv"];

_defineProperty(MysqlQueryCtrl, "templateUrl", 'partials/query.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/response_parser.ts":
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
    const timeField = frame.fields.find(f => f.name === 'time' || f.name === 'time_sec');

    if (!timeField) {
      throw new Error('Missing mandatory time column (with time column alias) in annotation query');
    }

    if (frame.fields.find(f => f.name === 'title')) {
      throw new Error('The title column for annotations is deprecated, now only a column named text is returned');
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

/***/ "./public/app/plugins/datasource/mysql/sql_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_angular_components_sql_part_sql_part__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/angular/components/sql_part/sql_part.ts");

const index = [];

function createPart(part) {
  const def = index[part.type];

  if (!def) {
    return null;
  }

  return new app_angular_components_sql_part_sql_part__WEBPACK_IMPORTED_MODULE_0__.SqlPart(part, def);
}

function register(options) {
  index[options.type] = new app_angular_components_sql_part_sql_part__WEBPACK_IMPORTED_MODULE_0__.SqlPartDef(options);
}

register({
  type: 'column',
  style: 'label',
  params: [{
    type: 'column',
    dynamicLookup: true
  }],
  defaultParams: ['value']
});
register({
  type: 'expression',
  style: 'expression',
  label: 'Expr:',
  params: [{
    name: 'left',
    type: 'string',
    dynamicLookup: true
  }, {
    name: 'op',
    type: 'string',
    dynamicLookup: true
  }, {
    name: 'right',
    type: 'string',
    dynamicLookup: true
  }],
  defaultParams: ['value', '=', 'value']
});
register({
  type: 'macro',
  style: 'label',
  label: 'Macro:',
  params: [],
  defaultParams: []
});
register({
  type: 'aggregate',
  style: 'label',
  params: [{
    name: 'name',
    type: 'string',
    options: ['avg', 'count', 'min', 'max', 'sum', 'stddev', 'variance']
  }],
  defaultParams: ['avg']
});
register({
  type: 'alias',
  style: 'label',
  params: [{
    name: 'name',
    type: 'string',
    quote: 'double'
  }],
  defaultParams: ['alias']
});
register({
  type: 'time',
  style: 'function',
  label: 'time',
  params: [{
    name: 'interval',
    type: 'interval',
    options: ['$__interval', '1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }, {
    name: 'fill',
    type: 'string',
    options: ['none', 'NULL', 'previous', '0']
  }],
  defaultParams: ['$__interval', 'none']
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: createPart
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLFFBQXRCO0lBQWdDOFosS0FBSyxFQUFFO0VBQXZDLENBQUQsQ0FIRDtFQUlQclosYUFBYSxFQUFFLENBQUMsT0FBRDtBQUpSLENBQUQsQ0FBUjtBQU9BbVosUUFBUSxDQUFDO0VBQ1A1WixJQUFJLEVBQUUsTUFEQztFQUVQSSxLQUFLLEVBQUUsVUFGQTtFQUdQSCxLQUFLLEVBQUUsTUFIQTtFQUlQTyxNQUFNLEVBQUUsQ0FDTjtJQUNFM0MsSUFBSSxFQUFFLFVBRFI7SUFFRW1DLElBQUksRUFBRSxVQUZSO0lBR0VELE9BQU8sRUFBRSxDQUFDLGFBQUQsRUFBZ0IsSUFBaEIsRUFBc0IsS0FBdEIsRUFBNkIsSUFBN0IsRUFBbUMsSUFBbkMsRUFBeUMsS0FBekMsRUFBZ0QsS0FBaEQsRUFBdUQsSUFBdkQ7RUFIWCxDQURNLEVBTU47SUFDRWxDLElBQUksRUFBRSxNQURSO0lBRUVtQyxJQUFJLEVBQUUsUUFGUjtJQUdFRCxPQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixHQUE3QjtFQUhYLENBTk0sQ0FKRDtFQWdCUFUsYUFBYSxFQUFFLENBQUMsYUFBRCxFQUFnQixNQUFoQjtBQWhCUixDQUFELENBQVI7QUFtQkEsaUVBQWU7RUFDYnFULE1BQU0sRUFBRTZGO0FBREssQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTWxZLFNBQVMsR0FBR3NZLHFFQUFzQixDQUFDRyxtRUFBRCxDQUF4QztBQUNBLE1BQU12WSxnQkFBZ0IsR0FBR29ZLHFFQUFzQixDQUFDRSxrRkFBRCxDQUEvQztBQUNBLE1BQU0zUSxTQUFTLEdBQUd5USxxRUFBc0IsQ0FBQ0ksbUVBQUQsQ0FBeEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9jb21wb25lbnRzL3NxbF9wYXJ0L3NxbF9wYXJ0LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvcGFuZWwvbWV0cmljc19wYW5lbF9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvcGFuZWwvcGFuZWxfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL3F1ZXJ5X2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvdXRpbHMvcGFzc3dvcmRIYW5kbGVycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXlzcWwvZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXlzcWwvbWV0YV9xdWVyeS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXlzcWwvbW9kdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9teXNxbC9teXNxbF9xdWVyeV9tb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXlzcWwvcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXlzcWwvcmVzcG9uc2VfcGFyc2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9teXNxbC9zcWxfcGFydC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3Nkay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXByZWNhdGlvbldhcm5pbmcsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VhcmNoVG9PYmplY3QsIGxvY2F0aW9uU2VydmljZSwgbmF2aWdhdGlvbkxvZ2dlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG4vLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9hZThlOTAzZWRmODhhODNmZWRkMTE2YWUwMmMwNjI4YmY3MmIxNTBjL3NyYy9uZy9sb2NhdGlvbi5qcyNMNVxuY29uc3QgREVGQVVMVF9QT1JUUzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgaHR0cDogODAsIGh0dHBzOiA0NDMsIGZ0cDogMjEgfTtcblxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFic1VybCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuYWJzVXJsKTtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLmhhc2gpO1xuICAgIHRoaXMuaG9zdCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaG9zdCk7XG4gICAgdGhpcy5wYXRoID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wYXRoKTtcbiAgICB0aGlzLnBvcnQgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBvcnQsICd3aW5kb3cubG9jYXRpb24nKTtcbiAgICB0aGlzLnByb3RvY29sID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wcm90b2NvbCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucmVwbGFjZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucmVwbGFjZSk7XG4gICAgdGhpcy5zZWFyY2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnNlYXJjaCk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy51cmwpO1xuICB9XG5cbiAgd3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKGZuOiBGdW5jdGlvbiwgcmVwbGFjZW1lbnQ/OiBzdHJpbmcpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICAgIGRlcHJlY2F0aW9uV2FybmluZygnJGxvY2F0aW9uJywgZm4ubmFtZSwgcmVwbGFjZW1lbnQgfHwgJ2xvY2F0aW9uU2VydmljZScpO1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGFic1VybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7dGhpcy51cmwoKX1gO1xuICB9XG5cbiAgaGFzaChuZXdIYXNoPzogc3RyaW5nIHwgbnVsbCkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBoYXNoJyk7XG5cbiAgICBpZiAoIW5ld0hhc2gpIHtcbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5oYXNoLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gIH1cblxuICBob3N0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLmhvc3RuYW1lO1xuICB9XG5cbiAgcGF0aChwYXRobmFtZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBwYXRoJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuXG4gICAgaWYgKHBhdGhuYW1lICE9PSB1bmRlZmluZWQgJiYgcGF0aG5hbWUgIT09IG51bGwpIHtcbiAgICAgIGxldCBwYXJzZWRQYXRoID0gU3RyaW5nKHBhdGhuYW1lKTtcbiAgICAgIHBhcnNlZFBhdGggPSBwYXJzZWRQYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhcnNlZFBhdGggOiBgLyR7cGFyc2VkUGF0aH1gO1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7cGFyc2VkUGF0aH1gKTtcblxuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IHVybC5zZWFyY2gubGVuZ3RoID4gMCA/IHVybC5zZWFyY2ggOiBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2g6IHVybC5oYXNoLmxlbmd0aCA+IDAgPyB1cmwuaGFzaCA6IGxvY2F0aW9uLmhhc2gsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PT0gbnVsbCkge1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxuXG4gIHBvcnQoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVybC5wb3J0LCAxMCkgfHwgREVGQVVMVF9QT1JUU1t1cmwucHJvdG9jb2xdIHx8IG51bGw7XG4gIH1cblxuICBwcm90b2NvbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5wcm90b2NvbC5zbGljZSgwLCAtMSk7XG4gIH1cblxuICByZXBsYWNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgc2VhcmNoKHNlYXJjaD86IGFueSwgcGFyYW1WYWx1ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzZWFyY2gnKTtcbiAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7XG4gICAgICAgIFtzZWFyY2hdOiBwYXJhbVZhbHVlLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGxldCBuZXdRdWVyeTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0geyAuLi5zZWFyY2ggfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0gbG9jYXRpb25TZWFyY2hUb09iamVjdChzZWFyY2gpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdRdWVyeSkpIHtcbiAgICAgICAgLy8gcmVtb3ZpbmcgcGFyYW1zIHdpdGggbnVsbCB8IHVuZGVmaW5lZFxuICAgICAgICBpZiAobmV3UXVlcnlba2V5XSA9PT0gbnVsbCB8fCBuZXdRdWVyeVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkZWxldGUgbmV3UXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVkVXJsID0gdXJsVXRpbC5yZW5kZXJVcmwobG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkucGF0aG5hbWUsIG5ld1F1ZXJ5KTtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHVwZGF0ZWRVcmwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGUoc3RhdGU/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogc3RhdGUnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHVybChuZXdVcmw/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogdXJsJyk7XG5cbiAgICBpZiAobmV3VXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIGhhc2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnN0YXJ0c1dpdGgoJz8nKSkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7IC4uLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLCBzZWFyY2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKG5ld1VybCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKTtcbiAgICByZXR1cm4gYCR7bG9jYXRpb24ucGF0aG5hbWV9JHtsb2NhdGlvbi5zZWFyY2h9JHtsb2NhdGlvbi5oYXNofWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNsb25lIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIFNxbFBhcnREZWYge1xuICB0eXBlOiBzdHJpbmc7XG4gIHN0eWxlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBhcmFtczogYW55W107XG4gIGRlZmF1bHRQYXJhbXM6IGFueVtdO1xuICB3cmFwT3Blbjogc3RyaW5nO1xuICB3cmFwQ2xvc2U6IHN0cmluZztcbiAgc2VwYXJhdG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIGlmIChvcHRpb25zLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdGhpcy50eXBlLnN1YnN0cmluZygxKSArICc6JztcbiAgICB9XG4gICAgdGhpcy5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgaWYgKHRoaXMuc3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMud3JhcE9wZW4gPSAnKCc7XG4gICAgICB0aGlzLndyYXBDbG9zZSA9ICcpJztcbiAgICAgIHRoaXMuc2VwYXJhdG9yID0gJywgJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53cmFwT3BlbiA9ICcgJztcbiAgICAgIHRoaXMud3JhcENsb3NlID0gJyAnO1xuICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnICc7XG4gICAgfVxuICAgIHRoaXMucGFyYW1zID0gb3B0aW9ucy5wYXJhbXM7XG4gICAgdGhpcy5kZWZhdWx0UGFyYW1zID0gb3B0aW9ucy5kZWZhdWx0UGFyYW1zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcWxQYXJ0IHtcbiAgcGFydDogYW55O1xuICBkZWY6IFNxbFBhcnREZWY7XG4gIHBhcmFtczogYW55W107XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0YXR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwYXJ0OiBhbnksIGRlZjogYW55KSB7XG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgICB0aGlzLmRlZiA9IGRlZjtcbiAgICBpZiAoIXRoaXMuZGVmKSB7XG4gICAgICB0aHJvdyB7IG1lc3NhZ2U6ICdDb3VsZCBub3QgZmluZCBzcWwgcGFydCAnICsgcGFydC50eXBlIH07XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhdHlwZSA9IHBhcnQuZGF0YXR5cGU7XG5cbiAgICBpZiAocGFydC5uYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBwYXJ0Lm5hbWU7XG4gICAgICB0aGlzLmxhYmVsID0gZGVmLmxhYmVsICsgJyAnICsgcGFydC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgIHRoaXMubGFiZWwgPSBkZWYubGFiZWw7XG4gICAgfVxuXG4gICAgcGFydC5wYXJhbXMgPSBwYXJ0LnBhcmFtcyB8fCBjbG9uZSh0aGlzLmRlZi5kZWZhdWx0UGFyYW1zKTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcnQucGFyYW1zO1xuICB9XG5cbiAgdXBkYXRlUGFyYW0oc3RyVmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgIC8vIGhhbmRsZSBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgaWYgKHN0clZhbHVlID09PSAnJyAmJiB0aGlzLmRlZi5wYXJhbXNbaW5kZXhdLm9wdGlvbmFsKSB7XG4gICAgICB0aGlzLnBhcmFtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhcmFtc1tpbmRleF0gPSBzdHJWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcnQucGFyYW1zID0gdGhpcy5wYXJhbXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgTGVnYWN5UmVzcG9uc2VEYXRhLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUGFuZWxFdmVudHMsXG4gIFRpbWVSYW5nZSxcbiAgdG9EYXRhRnJhbWVEVE8sXG4gIHRvTGVnYWN5UmVzcG9uc2VEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFBhbmVsQ3RybCB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgQ29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IFBhbmVsTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlJztcbmltcG9ydCB7IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9wYW5lbCc7XG5cbmltcG9ydCB7IFBhbmVsUXVlcnlSdW5uZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9xdWVyeS9zdGF0ZS9QYW5lbFF1ZXJ5UnVubmVyJztcblxuY2xhc3MgTWV0cmljc1BhbmVsQ3RybCBleHRlbmRzIFBhbmVsQ3RybCB7XG4gIGRlY2xhcmUgZGF0YXNvdXJjZTogRGF0YVNvdXJjZUFwaTtcbiAgZGVjbGFyZSByYW5nZTogVGltZVJhbmdlO1xuXG4gIGNvbnRleHRTcnY6IENvbnRleHRTcnY7XG4gIGRhdGFzb3VyY2VTcnY6IGFueTtcbiAgdGltZVNydjogYW55O1xuICB0ZW1wbGF0ZVNydjogYW55O1xuICBpbnRlcnZhbDogYW55O1xuICBpbnRlcnZhbE1zOiBhbnk7XG4gIHJlc29sdXRpb246IGFueTtcbiAgdGltZUluZm8/OiBzdHJpbmc7XG4gIHNraXBEYXRhT25Jbml0ID0gZmFsc2U7XG4gIGRhdGFMaXN0OiBMZWdhY3lSZXNwb25zZURhdGFbXSA9IFtdO1xuICBxdWVyeVN1YnNjcmlwdGlvbj86IFVuc3Vic2NyaWJhYmxlIHwgbnVsbDtcbiAgdXNlRGF0YUZyYW1lcyA9IGZhbHNlO1xuICBwYW5lbERhdGE/OiBQYW5lbERhdGE7XG5cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYW55KSB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgdGhpcy5jb250ZXh0U3J2ID0gJGluamVjdG9yLmdldCgnY29udGV4dFNydicpO1xuICAgIHRoaXMuZGF0YXNvdXJjZVNydiA9ICRpbmplY3Rvci5nZXQoJ2RhdGFzb3VyY2VTcnYnKTtcbiAgICB0aGlzLnRpbWVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0aW1lU3J2Jyk7XG4gICAgdGhpcy50ZW1wbGF0ZVNydiA9ICRpbmplY3Rvci5nZXQoJ3RlbXBsYXRlU3J2Jyk7XG4gICAgdGhpcy5wYW5lbC5kYXRhc291cmNlID0gdGhpcy5wYW5lbC5kYXRhc291cmNlIHx8IG51bGw7XG5cbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5yZWZyZXNoLCB0aGlzLm9uTWV0cmljc1BhbmVsUmVmcmVzaC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5wYW5lbFRlYXJkb3duLCB0aGlzLm9uUGFuZWxUZWFyRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5jb21wb25lbnREaWRNb3VudCwgdGhpcy5vbk1ldHJpY3NQYW5lbE1vdW50ZWQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsTW91bnRlZCgpIHtcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHRoaXMucGFuZWwuZ2V0UXVlcnlSdW5uZXIoKSBhcyBQYW5lbFF1ZXJ5UnVubmVyO1xuICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSBxdWVyeVJ1bm5lclxuICAgICAgLmdldERhdGEoeyB3aXRoVHJhbnNmb3JtczogdHJ1ZSwgd2l0aEZpZWxkQ29uZmlnOiB0cnVlIH0pXG4gICAgICAuc3Vic2NyaWJlKHRoaXMucGFuZWxEYXRhT2JzZXJ2ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBhbmVsVGVhckRvd24oKSB7XG4gICAgaWYgKHRoaXMucXVlcnlTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25NZXRyaWNzUGFuZWxSZWZyZXNoKCkge1xuICAgIC8vIGlnbm9yZSBmZXRjaGluZyBkYXRhIGlmIGFub3RoZXIgcGFuZWwgaXMgaW4gZnVsbHNjcmVlblxuICAgIGlmICh0aGlzLm90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSBoYXZlIHNuYXBzaG90IGRhdGEgdXNlIHRoYXRcbiAgICBpZiAodGhpcy5wYW5lbC5zbmFwc2hvdERhdGEpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZVJhbmdlKCk7XG4gICAgICBsZXQgZGF0YSA9IHRoaXMucGFuZWwuc25hcHNob3REYXRhO1xuICAgICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgaWYgKCFpc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFuZWxEYXRhID0ge1xuICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgICAgIHNlcmllczogZGF0YSxcbiAgICAgICAgdGltZVJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgfTtcblxuICAgICAgLy8gRGVmZXIgcGFuZWwgcmVuZGVyaW5nIHRpbGwgdGhlIG5leHQgZGlnZXN0IGN5Y2xlLlxuICAgICAgLy8gRm9yIHNvbWUgcmVhc29uIHNuYXBzaG90IHBhbmVscyBkb24ndCBpbml0IGF0IHRoaXMgdGltZSwgc28gdGhpcyBoZWxwcyB0byBhdm9pZCByZW5kZXJpbmcgaXNzdWVzLlxuICAgICAgcmV0dXJuIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFTbmFwc2hvdExvYWQsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgbG9hZGluZy9lcnJvciBzdGF0ZVxuICAgIGRlbGV0ZSB0aGlzLmVycm9yO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyBsb2FkIGRhdGFzb3VyY2Ugc2VydmljZVxuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VTcnZcbiAgICAgIC5nZXQodGhpcy5wYW5lbC5kYXRhc291cmNlLCB0aGlzLnBhbmVsLnNjb3BlZFZhcnMpXG4gICAgICAudGhlbih0aGlzLmlzc3VlUXVlcmllcy5iaW5kKHRoaXMpKVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvY2Vzc0RhdGFFcnJvcihlcnI6IGFueSkge1xuICAgIC8vIGlmIGNhbmNlbGVkICBrZWVwIGxvYWRpbmcgc2V0IHRvIHRydWVcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgY29uc29sZS5sb2coJ1BhbmVsIHJlcXVlc3QgY2FuY2VsbGVkJywgZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9yID0gZXJyLm1lc3NhZ2UgfHwgJ1JlcXVlc3QgRXJyb3InO1xuXG4gICAgaWYgKGVyci5kYXRhKSB7XG4gICAgICBpZiAoZXJyLmRhdGEubWVzc2FnZSkge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLmRhdGEubWVzc2FnZTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5kYXRhLmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgfVxuXG4gIGFuZ3VsYXJEaXJ0eUNoZWNrKCkge1xuICAgIGlmICghdGhpcy4kc2NvcGUuJHJvb3QuJCRwaGFzZSkge1xuICAgICAgdGhpcy4kc2NvcGUuJGRpZ2VzdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZXMgdGhlIHJlc3BvbnNlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgc3RyZWFtXG4gIHBhbmVsRGF0YU9ic2VydmVyID0ge1xuICAgIG5leHQ6IChkYXRhOiBQYW5lbERhdGEpID0+IHtcbiAgICAgIHRoaXMucGFuZWxEYXRhID0gZGF0YTtcblxuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5FcnJvcikge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZ25vcmUgZGF0YSBpbiBsb2FkaW5nIHN0YXRlXG4gICAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgeyB0aW1lSW5mbyB9ID0gZGF0YS5yZXF1ZXN0O1xuICAgICAgICBpZiAodGltZUluZm8pIHtcbiAgICAgICAgICB0aGlzLnRpbWVJbmZvID0gdGltZUluZm87XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudGltZVJhbmdlKSB7XG4gICAgICAgIHRoaXMucmFuZ2UgPSBkYXRhLnRpbWVSYW5nZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudXNlRGF0YUZyYW1lcykge1xuICAgICAgICB0aGlzLmhhbmRsZURhdGFGcmFtZXMoZGF0YS5zZXJpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWFrZSB0aGUgcmVzdWx0cyBsb29rIGFzIGlmIHRoZXkgY2FtZSBkaXJlY3RseSBmcm9tIGEgPDYuMiBkYXRhc291cmNlIHJlcXVlc3RcbiAgICAgICAgY29uc3QgbGVnYWN5ID0gZGF0YS5zZXJpZXMubWFwKCh2KSA9PiB0b0xlZ2FjeVJlc3BvbnNlRGF0YSh2KSk7XG4gICAgICAgIHRoaXMuaGFuZGxlUXVlcnlSZXN1bHQoeyBkYXRhOiBsZWdhY3kgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgICB9LFxuICB9O1xuXG4gIHVwZGF0ZVRpbWVSYW5nZShkYXRhc291cmNlPzogRGF0YVNvdXJjZUFwaSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IGRhdGFzb3VyY2UgfHwgdGhpcy5kYXRhc291cmNlO1xuICAgIHRoaXMucmFuZ2UgPSB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCk7XG5cbiAgICBjb25zdCBuZXdUaW1lRGF0YSA9IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzKHRoaXMucGFuZWwsIHRoaXMucmFuZ2UpO1xuICAgIHRoaXMudGltZUluZm8gPSBuZXdUaW1lRGF0YS50aW1lSW5mbztcbiAgICB0aGlzLnJhbmdlID0gbmV3VGltZURhdGEudGltZVJhbmdlO1xuICB9XG5cbiAgaXNzdWVRdWVyaWVzKGRhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGkpIHtcbiAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZShkYXRhc291cmNlKTtcblxuICAgIHRoaXMuZGF0YXNvdXJjZSA9IGRhdGFzb3VyY2U7XG5cbiAgICBjb25zdCBwYW5lbCA9IHRoaXMucGFuZWwgYXMgUGFuZWxNb2RlbDtcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHBhbmVsLmdldFF1ZXJ5UnVubmVyKCk7XG5cbiAgICByZXR1cm4gcXVlcnlSdW5uZXIucnVuKHtcbiAgICAgIGRhdGFzb3VyY2U6IHBhbmVsLmRhdGFzb3VyY2UsXG4gICAgICBxdWVyaWVzOiBwYW5lbC50YXJnZXRzLFxuICAgICAgcGFuZWxJZDogcGFuZWwuaWQsXG4gICAgICBkYXNoYm9hcmRJZDogdGhpcy5kYXNoYm9hcmQuaWQsXG4gICAgICB0aW1lem9uZTogdGhpcy5kYXNoYm9hcmQuZ2V0VGltZXpvbmUoKSxcbiAgICAgIHRpbWVJbmZvOiB0aGlzLnRpbWVJbmZvLFxuICAgICAgdGltZVJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgbWF4RGF0YVBvaW50czogcGFuZWwubWF4RGF0YVBvaW50cyB8fCB0aGlzLndpZHRoLFxuICAgICAgbWluSW50ZXJ2YWw6IHBhbmVsLmludGVydmFsLFxuICAgICAgc2NvcGVkVmFyczogcGFuZWwuc2NvcGVkVmFycyxcbiAgICAgIGNhY2hlVGltZW91dDogcGFuZWwuY2FjaGVUaW1lb3V0LFxuICAgICAgdHJhbnNmb3JtYXRpb25zOiBwYW5lbC50cmFuc2Zvcm1hdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEYXRhRnJhbWVzKGRhdGE6IERhdGFGcmFtZVtdKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kYXNoYm9hcmQgJiYgdGhpcy5kYXNoYm9hcmQuc25hcHNob3QpIHtcbiAgICAgIHRoaXMucGFuZWwuc25hcHNob3REYXRhID0gZGF0YS5tYXAoKGZyYW1lKSA9PiB0b0RhdGFGcmFtZURUTyhmcmFtZSkpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFGcmFtZXNSZWNlaXZlZCwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVRdWVyeVJlc3VsdChyZXN1bHQ6IERhdGFRdWVyeVJlc3BvbnNlKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kYXNoYm9hcmQuc25hcHNob3QpIHtcbiAgICAgIHRoaXMucGFuZWwuc25hcHNob3REYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5kYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YSBzb3VyY2UgcXVlcnkgcmVzdWx0IGludmFsaWQsIG1pc3NpbmcgZGF0YSBmaWVsZDonLCByZXN1bHQpO1xuICAgICAgcmVzdWx0ID0geyBkYXRhOiBbXSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgcmVzdWx0LmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IE1ldHJpY3NQYW5lbEN0cmwgfTtcbiIsImltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcbiAgQXBwRXZlbnQsXG4gIFBhbmVsRXZlbnRzLFxuICBQYW5lbFBsdWdpbk1ldGEsXG4gIEFuZ3VsYXJQYW5lbE1lbnVJdGVtLFxuICBFdmVudEJ1c0V4dGVuZGVkLFxuICBFdmVudEJ1c1Nydixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyIH0gZnJvbSAnYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBwcm9maWxlciB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBQYW5lbEN0cmwge1xuICBwYW5lbDogYW55O1xuICBlcnJvcjogYW55O1xuICBkZWNsYXJlIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbk5hbWUgPSAnJztcbiAgcGx1Z2luSWQgPSAnJztcbiAgZWRpdG9yVGFiczogYW55O1xuICAkc2NvcGU6IGFueTtcbiAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2U7XG4gICR0aW1lb3V0OiBhbnk7XG4gIGVkaXRNb2RlSW5pdGlhdGVkID0gZmFsc2U7XG4gIGRlY2xhcmUgaGVpZ2h0OiBudW1iZXI7XG4gIGRlY2xhcmUgd2lkdGg6IG51bWJlcjtcbiAgY29udGFpbmVySGVpZ2h0OiBhbnk7XG4gIGV2ZW50czogRXZlbnRCdXNFeHRlbmRlZDtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICB0aW1pbmc6IGFueTtcbiAgJGxvY2F0aW9uOiBBbmd1bGFyTG9jYXRpb25XcmFwcGVyO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsID8/ICRzY29wZS4kcGFyZW50LnBhbmVsO1xuICAgIHRoaXMuZGFzaGJvYXJkID0gdGhpcy5kYXNoYm9hcmQgPz8gJHNjb3BlLiRwYXJlbnQuZGFzaGJvYXJkO1xuICAgIHRoaXMuJGluamVjdG9yID0gJGluamVjdG9yO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHRpbWVvdXQgPSAkaW5qZWN0b3IuZ2V0KCckdGltZW91dCcpO1xuICAgIHRoaXMuZWRpdG9yVGFicyA9IFtdO1xuICAgIHRoaXMuJGxvY2F0aW9uID0gbmV3IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEJ1c1NydigpO1xuICAgIHRoaXMudGltaW5nID0ge307IC8vIG5vdCB1c2VkIGJ1dCBoZXJlIHRvIG5vdCBicmVhayBwbHVnaW5zXG5cbiAgICBjb25zdCBwbHVnaW4gPSBjb25maWcucGFuZWxzW3RoaXMucGFuZWwudHlwZV07XG4gICAgaWYgKHBsdWdpbikge1xuICAgICAgdGhpcy5wbHVnaW5JZCA9IHBsdWdpbi5pZDtcbiAgICAgIHRoaXMucGx1Z2luTmFtZSA9IHBsdWdpbi5uYW1lO1xuICAgIH1cblxuICAgICRzY29wZS4kb24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQubmFtZSwgKCkgPT4gdGhpcy5wYW5lbERpZE1vdW50KCkpO1xuICB9XG5cbiAgcGFuZWxEaWRNb3VudCgpIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50KTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRpYWxpemVkKTtcbiAgICB0aGlzLmRhc2hib2FyZC5wYW5lbEluaXRpYWxpemVkKHRoaXMucGFuZWwpO1xuICB9XG5cbiAgcmVuZGVyaW5nQ29tcGxldGVkKCkge1xuICAgIHByb2ZpbGVyLnJlbmRlcmluZ0NvbXBsZXRlZCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnBhbmVsLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1Ymxpc2hBcHBFdmVudDxUPihldmVudDogQXBwRXZlbnQ8VD4sIHBheWxvYWQ/OiBUKSB7XG4gICAgdGhpcy4kc2NvcGUuJHJvb3QuYXBwRXZlbnQoZXZlbnQsIHBheWxvYWQpO1xuICB9XG5cbiAgaW5pdEVkaXRNb2RlKCkge1xuICAgIGlmICghdGhpcy5lZGl0TW9kZUluaXRpYXRlZCkge1xuICAgICAgdGhpcy5lZGl0TW9kZUluaXRpYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmVkaXRNb2RlSW5pdGlhbGl6ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkaXRvclRhYih0aXRsZTogc3RyaW5nLCBkaXJlY3RpdmVGbjogYW55LCBpbmRleD86IG51bWJlciwgaWNvbj86IGFueSkge1xuICAgIGNvbnN0IGVkaXRvclRhYiA9IHsgdGl0bGUsIGRpcmVjdGl2ZUZuLCBpY29uIH07XG5cbiAgICBpZiAoaXNTdHJpbmcoZGlyZWN0aXZlRm4pKSB7XG4gICAgICBlZGl0b3JUYWIuZGlyZWN0aXZlRm4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlVXJsOiBkaXJlY3RpdmVGbiB9O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5zcGxpY2UoaW5kZXgsIDAsIGVkaXRvclRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5wdXNoKGVkaXRvclRhYik7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXh0ZW5kZWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnU6IEFuZ3VsYXJQYW5lbE1lbnVJdGVtW10gPSBbXTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRQYW5lbEFjdGlvbnMsIG1lbnUpO1xuICAgIHJldHVybiBtZW51O1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgaW4gc3ViLWNsYXNzIHRvIGFkZCBpdGVtcyBiZWZvcmUgZXh0ZW5kZWQgbWVudVxuICBhc3luYyBnZXRBZGRpdGlvbmFsTWVudUl0ZW1zKCk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmQub3RoZXJQYW5lbEluRnVsbHNjcmVlbih0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcihwYXlsb2FkPzogYW55KSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5yZW5kZXIsIHBheWxvYWQpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVuIGZyb20gcmVhY3RcbiAgb25QbHVnaW5UeXBlQ2hhbmdlID0gKHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhKSA9PiB7fTtcbn1cbiIsImltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY2xhc3MgUXVlcnlDdHJsPFQgPSBhbnk+IHtcbiAgdGFyZ2V0ITogVDtcbiAgZGF0YXNvdXJjZSE6IGFueTtcbiAgcGFuZWxDdHJsITogYW55O1xuICBwYW5lbDogYW55O1xuICBoYXNSYXdNb2RlITogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuICBpc0xhc3RRdWVyeTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbnksIHB1YmxpYyAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWxDdHJsID0gdGhpcy5wYW5lbEN0cmwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQgPz8gJHNjb3BlLmN0cmwudGFyZ2V0O1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IHRoaXMuZGF0YXNvdXJjZSA/PyAkc2NvcGUuY3RybC5kYXRhc291cmNlO1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsQ3RybD8ucGFuZWwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMuaXNMYXN0UXVlcnkgPSBpbmRleE9mKHRoaXMucGFuZWwudGFyZ2V0cywgdGhpcy50YXJnZXQpID09PSB0aGlzLnBhbmVsLnRhcmdldHMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpO1xuICB9XG59XG4iLCIvKipcbiAqIFNldCBvZiBoYW5kbGVycyBmb3Igc2VjdXJlIHBhc3N3b3JkIGZpZWxkIGluIEFuZ3VsYXIgY29tcG9uZW50cy4gVGhleSBoYW5kbGUgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoXG4gKiBwYXNzd29yZHMgc3RvcmVkIGluIHBsYWluIHRleHQgZmllbGRzLlxuICovXG5cbmltcG9ydCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZW51bSBQYXNzd29yZEZpZWxkRW51bSB7XG4gIFBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbiAgQmFzaWNBdXRoUGFzc3dvcmQgPSAnYmFzaWNBdXRoUGFzc3dvcmQnLFxufVxuXG4vKipcbiAqIEJhc2ljIHNoYXBlIGZvciBzZXR0aW5ncyBjb250cm9sbGVycyBpbiBhdCB0aGUgbW9tZW50IG1vc3RseSBhbmd1bGFyIGRhdGEgc291cmNlIHBsdWdpbnMuXG4gKi9cbmV4cG9ydCB0eXBlIEN0cmwgPSB7XG4gIGN1cnJlbnQ6IHtcbiAgICBzZWN1cmVKc29uRmllbGRzOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xuICAgIH07XG4gICAgc2VjdXJlSnNvbkRhdGE/OiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBiYXNpY0F1dGhQYXNzd29yZD86IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNldEhhbmRsZXIgPVxuICAoY3RybDogQ3RybCwgZmllbGQ6IFBhc3N3b3JkRmllbGRFbnVtKSA9PiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBSZXNldCBhbHNvIG5vcm1hbCBwbGFpbiB0ZXh0IHBhc3N3b3JkIHRvIHJlbW92ZSBpdCBhbmQgb25seSBzYXZlIGl0IGluIHNlY3VyZUpzb25EYXRhLlxuICAgIGN0cmwuY3VycmVudFtmaWVsZF0gPSB1bmRlZmluZWQ7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25GaWVsZHNbZmllbGRdID0gZmFsc2U7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhID0gY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhIHx8IHt9O1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YVtmaWVsZF0gPSAnJztcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYW5nZUhhbmRsZXIgPVxuICAoY3RybDogYW55LCBmaWVsZDogUGFzc3dvcmRGaWVsZEVudW0pID0+IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgPSBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgfHwge307XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhW2ZpZWxkXSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gIH07XG4iLCJpbXBvcnQgeyBtYXAgYXMgX21hcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQW5ub3RhdGlvbkV2ZW50LCBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgTWV0cmljRmluZFZhbHVlLCBTY29wZWRWYXJzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlLCBEYXRhU291cmNlV2l0aEJhY2tlbmQsIEZldGNoUmVzcG9uc2UsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHRvVGVzdGluZ1N0YXR1cyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL3F1ZXJ5UmVzcG9uc2UnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcbmltcG9ydCBNeVNRTFF1ZXJ5TW9kZWwgZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9teXNxbC9teXNxbF9xdWVyeV9tb2RlbCc7XG5cbmltcG9ydCB7IGdldFNlYXJjaEZpbHRlclNjb3BlZFZhciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL3ZhcmlhYmxlcy91dGlscyc7XG5cbmltcG9ydCBSZXNwb25zZVBhcnNlciBmcm9tICcuL3Jlc3BvbnNlX3BhcnNlcic7XG5pbXBvcnQgeyBNeVNRTE9wdGlvbnMsIE15U1FMUXVlcnksIE15c3FsUXVlcnlGb3JJbnRlcnBvbGF0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBNeXNxbERhdGFzb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlV2l0aEJhY2tlbmQ8TXlTUUxRdWVyeSwgTXlTUUxPcHRpb25zPiB7XG4gIGlkOiBhbnk7XG4gIG5hbWU6IGFueTtcbiAgcmVzcG9uc2VQYXJzZXI6IFJlc3BvbnNlUGFyc2VyO1xuICBxdWVyeU1vZGVsOiBNeVNRTFF1ZXJ5TW9kZWw7XG4gIGludGVydmFsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8TXlTUUxPcHRpb25zPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KClcbiAgKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gICAgdGhpcy5uYW1lID0gaW5zdGFuY2VTZXR0aW5ncy5uYW1lO1xuICAgIHRoaXMuaWQgPSBpbnN0YW5jZVNldHRpbmdzLmlkO1xuICAgIHRoaXMucmVzcG9uc2VQYXJzZXIgPSBuZXcgUmVzcG9uc2VQYXJzZXIoKTtcbiAgICB0aGlzLnF1ZXJ5TW9kZWwgPSBuZXcgTXlTUUxRdWVyeU1vZGVsKHt9KTtcbiAgICBjb25zdCBzZXR0aW5nc0RhdGEgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhIHx8ICh7fSBhcyBNeVNRTE9wdGlvbnMpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXR0aW5nc0RhdGEudGltZUludGVydmFsIHx8ICcxbSc7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlID0gKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bWJlciwgdmFyaWFibGU6IGFueSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodmFyaWFibGUubXVsdGkgfHwgdmFyaWFibGUuaW5jbHVkZUFsbCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHF1b3RlZFZhbHVlcyA9IF9tYXAodmFsdWUsICh2OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHYpO1xuICAgIH0pO1xuICAgIHJldHVybiBxdW90ZWRWYWx1ZXMuam9pbignLCcpO1xuICB9O1xuXG4gIGludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzKFxuICAgIHF1ZXJpZXM6IE15c3FsUXVlcnlGb3JJbnRlcnBvbGF0aW9uW10sXG4gICAgc2NvcGVkVmFyczogU2NvcGVkVmFyc1xuICApOiBNeXNxbFF1ZXJ5Rm9ySW50ZXJwb2xhdGlvbltdIHtcbiAgICBsZXQgZXhwYW5kZWRRdWVyaWVzID0gcXVlcmllcztcbiAgICBpZiAocXVlcmllcyAmJiBxdWVyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXMubWFwKChxdWVyeSkgPT4ge1xuICAgICAgICBjb25zdCBleHBhbmRlZFF1ZXJ5ID0ge1xuICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgICAgcmF3U3FsOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkucmF3U3FsLCBzY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlVmFyaWFibGUpLFxuICAgICAgICAgIHJhd1F1ZXJ5OiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZXhwYW5kZWRRdWVyeTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXhwYW5kZWRRdWVyaWVzO1xuICB9XG5cbiAgZmlsdGVyUXVlcnkocXVlcnk6IE15U1FMUXVlcnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXF1ZXJ5LmhpZGU7XG4gIH1cblxuICBhcHBseVRlbXBsYXRlVmFyaWFibGVzKHRhcmdldDogTXlTUUxRdWVyeSwgc2NvcGVkVmFyczogU2NvcGVkVmFycyk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5TW9kZWwgPSBuZXcgTXlTUUxRdWVyeU1vZGVsKHRhcmdldCwgdGhpcy50ZW1wbGF0ZVNydiwgc2NvcGVkVmFycyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZklkOiB0YXJnZXQucmVmSWQsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsOiBxdWVyeU1vZGVsLnJlbmRlcih0aGlzLmludGVycG9sYXRlVmFyaWFibGUgYXMgYW55KSxcbiAgICAgIGZvcm1hdDogdGFyZ2V0LmZvcm1hdCxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgYW5ub3RhdGlvblF1ZXJ5KG9wdGlvbnM6IGFueSk6IFByb21pc2U8QW5ub3RhdGlvbkV2ZW50W10+IHtcbiAgICBpZiAoIW9wdGlvbnMuYW5ub3RhdGlvbi5yYXdRdWVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgbWVzc2FnZTogJ1F1ZXJ5IG1pc3NpbmcgaW4gYW5ub3RhdGlvbiBkZWZpbml0aW9uJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgcmVmSWQ6IG9wdGlvbnMuYW5ub3RhdGlvbi5uYW1lLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMuYW5ub3RhdGlvbi5yYXdRdWVyeSwgb3B0aW9ucy5zY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlVmFyaWFibGUpLFxuICAgICAgZm9ybWF0OiAndGFibGUnLFxuICAgIH07XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZmV0Y2g8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4oe1xuICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZyb206IG9wdGlvbnMucmFuZ2UuZnJvbS52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiBvcHRpb25zLnJhbmdlLnRvLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgcXVlcmllczogW3F1ZXJ5XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5hbm5vdGF0aW9uLm5hbWUsXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgIGFzeW5jIChyZXM6IEZldGNoUmVzcG9uc2U8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4pID0+XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVzcG9uc2VQYXJzZXIudHJhbnNmb3JtQW5ub3RhdGlvblJlc3BvbnNlKG9wdGlvbnMsIHJlcy5kYXRhKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBtZXRyaWNGaW5kUXVlcnkocXVlcnk6IHN0cmluZywgb3B0aW9uYWxPcHRpb25zOiBhbnkpOiBQcm9taXNlPE1ldHJpY0ZpbmRWYWx1ZVtdPiB7XG4gICAgbGV0IHJlZklkID0gJ3RlbXB2YXInO1xuICAgIGlmIChvcHRpb25hbE9wdGlvbnMgJiYgb3B0aW9uYWxPcHRpb25zLnZhcmlhYmxlICYmIG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lKSB7XG4gICAgICByZWZJZCA9IG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHJhd1NxbCA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgIHF1ZXJ5LFxuICAgICAgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyKHsgcXVlcnksIHdpbGRjYXJkQ2hhcjogJyUnLCBvcHRpb25zOiBvcHRpb25hbE9wdGlvbnMgfSksXG4gICAgICB0aGlzLmludGVycG9sYXRlVmFyaWFibGVcbiAgICApO1xuXG4gICAgY29uc3QgaW50ZXJwb2xhdGVkUXVlcnkgPSB7XG4gICAgICByZWZJZDogcmVmSWQsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsLFxuICAgICAgZm9ybWF0OiAndGFibGUnLFxuICAgIH07XG5cbiAgICBjb25zdCByYW5nZSA9IG9wdGlvbmFsT3B0aW9ucz8ucmFuZ2U7XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZmV0Y2g8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4oe1xuICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZyb206IHJhbmdlPy5mcm9tPy52YWx1ZU9mKCk/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogcmFuZ2U/LnRvPy52YWx1ZU9mKCk/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBxdWVyaWVzOiBbaW50ZXJwb2xhdGVkUXVlcnldLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxdWVzdElkOiByZWZJZCxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChyc3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlUGFyc2VyLnRyYW5zZm9ybU1ldHJpY0ZpbmRSZXNwb25zZShyc3ApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHRlc3REYXRhc291cmNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoKHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiAnNW0nLFxuICAgICAgICAgICAgdG86ICdub3cnLFxuICAgICAgICAgICAgcXVlcmllczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVmSWQ6ICdBJyxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbE1zOiAxLFxuICAgICAgICAgICAgICAgIG1heERhdGFQb2ludHM6IDEsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgICAgICAgICByYXdTcWw6ICdTRUxFQ1QgMScsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAndGFibGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXBUbyh7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YWJhc2UgQ29ubmVjdGlvbiBPSycgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YodG9UZXN0aW5nU3RhdHVzKGVycikpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdGFyZ2V0Q29udGFpbnNUZW1wbGF0ZSh0YXJnZXQ6IGFueSkge1xuICAgIGxldCByYXdTcWwgPSAnJztcblxuICAgIGlmICh0YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIHJhd1NxbCA9IHRhcmdldC5yYXdTcWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IE15U1FMUXVlcnlNb2RlbCh0YXJnZXQpO1xuICAgICAgcmF3U3FsID0gcXVlcnkuYnVpbGRRdWVyeSgpO1xuICAgIH1cblxuICAgIHJhd1NxbCA9IHJhd1NxbC5yZXBsYWNlKCckX18nLCAnJyk7XG5cbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5jb250YWluc1RlbXBsYXRlKHJhd1NxbCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBNeXNxbE1ldGFRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFyZ2V0OiBhbnksIHByaXZhdGUgcXVlcnlNb2RlbDogYW55KSB7fVxuXG4gIGdldE9wZXJhdG9ycyhkYXRhdHlwZTogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChkYXRhdHlwZSkge1xuICAgICAgY2FzZSAnZG91YmxlJzpcbiAgICAgIGNhc2UgJ2Zsb2F0Jzoge1xuICAgICAgICByZXR1cm4gWyc9JywgJyE9JywgJzwnLCAnPD0nLCAnPicsICc+PSddO1xuICAgICAgfVxuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICBjYXNlICd0aW55dGV4dCc6XG4gICAgICBjYXNlICdtZWRpdW10ZXh0JzpcbiAgICAgIGNhc2UgJ2xvbmd0ZXh0JzpcbiAgICAgIGNhc2UgJ3ZhcmNoYXInOlxuICAgICAgY2FzZSAnY2hhcic6IHtcbiAgICAgICAgcmV0dXJuIFsnPScsICchPScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnSU4nLCAnTk9UIElOJywgJ0xJS0UnLCAnTk9UIExJS0UnXTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIFsnPScsICchPScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnSU4nLCAnTk9UIElOJ107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcXVvdGUgaWRlbnRpZmllciBhcyBsaXRlcmFsIHRvIHVzZSBpbiBtZXRhZGF0YSBxdWVyaWVzXG4gIHF1b3RlSWRlbnRBc0xpdGVyYWwodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHRoaXMucXVlcnlNb2RlbC51bnF1b3RlSWRlbnRpZmllcih2YWx1ZSkpO1xuICB9XG5cbiAgZmluZE1ldHJpY1RhYmxlKCkge1xuICAgIC8vIHF1ZXJ5IHRoYXQgcmV0dXJucyBmaXJzdCB0YWJsZSBmb3VuZCB0aGF0IGhhcyBhIHRpbWVzdGFtcCh0eikgY29sdW1uIGFuZCBhIGZsb2F0IGNvbHVtblxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxuICBTRUxFQ1RcbiAgICB0YWJsZV9uYW1lIGFzIHRhYmxlX25hbWUsXG4gICAgKCBTRUxFQ1RcbiAgICAgICAgY29sdW1uX25hbWUgYXMgY29sdW1uX25hbWVcbiAgICAgIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgY1xuICAgICAgV0hFUkVcbiAgICAgICAgYy50YWJsZV9zY2hlbWEgPSB0LnRhYmxlX3NjaGVtYSBBTkRcbiAgICAgICAgYy50YWJsZV9uYW1lID0gdC50YWJsZV9uYW1lIEFORFxuICAgICAgICBjLmRhdGFfdHlwZSBJTiAoJ3RpbWVzdGFtcCcsICdkYXRldGltZScpXG4gICAgICBPUkRFUiBCWSBvcmRpbmFsX3Bvc2l0aW9uIExJTUlUIDFcbiAgICApIEFTIHRpbWVfY29sdW1uLFxuICAgICggU0VMRUNUXG4gICAgICAgIGNvbHVtbl9uYW1lIEFTIGNvbHVtbl9uYW1lXG4gICAgICBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIGNcbiAgICAgIFdIRVJFXG4gICAgICAgIGMudGFibGVfc2NoZW1hID0gdC50YWJsZV9zY2hlbWEgQU5EXG4gICAgICAgIGMudGFibGVfbmFtZSA9IHQudGFibGVfbmFtZSBBTkRcbiAgICAgICAgYy5kYXRhX3R5cGUgSU4oJ2Zsb2F0JywgJ2ludCcsICdiaWdpbnQnKVxuICAgICAgT1JERVIgQlkgb3JkaW5hbF9wb3NpdGlvbiBMSU1JVCAxXG4gICAgKSBBUyB2YWx1ZV9jb2x1bW5cbiAgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEudGFibGVzIHRcbiAgV0hFUkVcbiAgICB0LnRhYmxlX3NjaGVtYSA9IGRhdGFiYXNlKCkgQU5EXG4gICAgRVhJU1RTXG4gICAgKCBTRUxFQ1QgMVxuICAgICAgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBjXG4gICAgICBXSEVSRVxuICAgICAgICBjLnRhYmxlX3NjaGVtYSA9IHQudGFibGVfc2NoZW1hIEFORFxuICAgICAgICBjLnRhYmxlX25hbWUgPSB0LnRhYmxlX25hbWUgQU5EXG4gICAgICAgIGMuZGF0YV90eXBlIElOICgndGltZXN0YW1wJywgJ2RhdGV0aW1lJylcbiAgICApIEFORFxuICAgIEVYSVNUU1xuICAgICggU0VMRUNUIDFcbiAgICAgIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgY1xuICAgICAgV0hFUkVcbiAgICAgICAgYy50YWJsZV9zY2hlbWEgPSB0LnRhYmxlX3NjaGVtYSBBTkRcbiAgICAgICAgYy50YWJsZV9uYW1lID0gdC50YWJsZV9uYW1lIEFORFxuICAgICAgICBjLmRhdGFfdHlwZSBJTignZmxvYXQnLCAnaW50JywgJ2JpZ2ludCcpXG4gICAgKVxuICBMSU1JVCAxXG47YDtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZFRhYmxlQ29uc3RyYWludCh0YWJsZTogc3RyaW5nKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG5cbiAgICAvLyBjaGVjayBmb3Igc2NoZW1hIHF1YWxpZmllZCB0YWJsZVxuICAgIGlmICh0YWJsZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHRhYmxlLnNwbGl0KCcuJyk7XG4gICAgICBxdWVyeSA9ICd0YWJsZV9zY2hlbWEgPSAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKHBhcnRzWzBdKTtcbiAgICAgIHF1ZXJ5ICs9ICcgQU5EIHRhYmxlX25hbWUgPSAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKHBhcnRzWzFdKTtcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnkgPSAndGFibGVfc2NoZW1hID0gZGF0YWJhc2UoKSBBTkQgdGFibGVfbmFtZSA9ICcgKyB0aGlzLnF1b3RlSWRlbnRBc0xpdGVyYWwodGFibGUpO1xuXG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRUYWJsZVF1ZXJ5KCkge1xuICAgIHJldHVybiAnU0VMRUNUIHRhYmxlX25hbWUgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEudGFibGVzIFdIRVJFIHRhYmxlX3NjaGVtYSA9IGRhdGFiYXNlKCkgT1JERVIgQlkgdGFibGVfbmFtZSc7XG4gIH1cblxuICBidWlsZENvbHVtblF1ZXJ5KHR5cGU/OiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUIGNvbHVtbl9uYW1lIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgV0hFUkUgJztcbiAgICBxdWVyeSArPSB0aGlzLmJ1aWxkVGFibGVDb25zdHJhaW50KHRoaXMudGFyZ2V0LnRhYmxlKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAndGltZSc6IHtcbiAgICAgICAgcXVlcnkgKz0gXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ3RpbWVzdGFtcCcsJ2RhdGV0aW1lJywnYmlnaW50JywnaW50JywnZG91YmxlJywnZmxvYXQnKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ21ldHJpYyc6IHtcbiAgICAgICAgcXVlcnkgKz0gXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ3RleHQnLCd0aW55dGV4dCcsJ21lZGl1bXRleHQnLCdsb25ndGV4dCcsJ3ZhcmNoYXInLCdjaGFyJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd2YWx1ZSc6IHtcbiAgICAgICAgcXVlcnkgKz0gXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ2JpZ2ludCcsJ2ludCcsJ3NtYWxsaW50JywnbWVkaXVtaW50JywndGlueWludCcsJ2RvdWJsZScsJ2RlY2ltYWwnLCdmbG9hdCcpXCI7XG4gICAgICAgIHF1ZXJ5ICs9ICcgQU5EIGNvbHVtbl9uYW1lIDw+ICcgKyB0aGlzLnF1b3RlSWRlbnRBc0xpdGVyYWwodGhpcy50YXJnZXQudGltZUNvbHVtbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZ3JvdXAnOiB7XG4gICAgICAgIHF1ZXJ5ICs9IFwiIEFORCBkYXRhX3R5cGUgSU4gKCd0ZXh0JywndGlueXRleHQnLCdtZWRpdW10ZXh0JywnbG9uZ3RleHQnLCd2YXJjaGFyJywnY2hhcicpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHF1ZXJ5ICs9ICcgT1JERVIgQlkgY29sdW1uX25hbWUnO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRWYWx1ZVF1ZXJ5KGNvbHVtbjogc3RyaW5nKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJ1NFTEVDVCBESVNUSU5DVCBRVU9URSgnICsgY29sdW1uICsgJyknO1xuICAgIHF1ZXJ5ICs9ICcgRlJPTSAnICsgdGhpcy50YXJnZXQudGFibGU7XG4gICAgcXVlcnkgKz0gJyBXSEVSRSAkX190aW1lRmlsdGVyKCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJyknO1xuICAgIHF1ZXJ5ICs9ICcgT1JERVIgQlkgMSBMSU1JVCAxMDAnO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkRGF0YXR5cGVRdWVyeShjb2x1bW46IHN0cmluZykge1xuICAgIGxldCBxdWVyeSA9IGBcblNFTEVDVCBkYXRhX3R5cGVcbkZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnNcbldIRVJFIGA7XG4gICAgcXVlcnkgKz0gJyB0YWJsZV9uYW1lID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbCh0aGlzLnRhcmdldC50YWJsZSk7XG4gICAgcXVlcnkgKz0gJyBBTkQgY29sdW1uX25hbWUgPSAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKGNvbHVtbik7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZUNoYW5nZUhhbmRsZXIsXG4gIGNyZWF0ZVJlc2V0SGFuZGxlcixcbiAgUGFzc3dvcmRGaWVsZEVudW0sXG59IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3V0aWxzL3Bhc3N3b3JkSGFuZGxlcnMnO1xuXG5pbXBvcnQgeyBNeXNxbERhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgTXlzcWxRdWVyeUN0cmwgfSBmcm9tICcuL3F1ZXJ5X2N0cmwnO1xuaW1wb3J0IHsgTXlTUUxRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jbGFzcyBNeXNxbENvbmZpZ0N0cmwge1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAncGFydGlhbHMvY29uZmlnLmh0bWwnO1xuICBjdXJyZW50OiBhbnk7XG4gIG9uUGFzc3dvcmRSZXNldDogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUmVzZXRIYW5kbGVyPjtcbiAgb25QYXNzd29yZENoYW5nZTogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlQ2hhbmdlSGFuZGxlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vblBhc3N3b3JkUmVzZXQgPSBjcmVhdGVSZXNldEhhbmRsZXIodGhpcywgUGFzc3dvcmRGaWVsZEVudW0uUGFzc3dvcmQpO1xuICAgIHRoaXMub25QYXNzd29yZENoYW5nZSA9IGNyZWF0ZUNoYW5nZUhhbmRsZXIodGhpcywgUGFzc3dvcmRGaWVsZEVudW0uUGFzc3dvcmQpO1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRRdWVyeSA9IGBTRUxFQ1RcbiAgICBVTklYX1RJTUVTVEFNUCg8dGltZV9jb2x1bW4+KSBhcyB0aW1lX3NlYyxcbiAgICA8dGV4dF9jb2x1bW4+IGFzIHRleHQsXG4gICAgPHRhZ3NfY29sdW1uPiBhcyB0YWdzXG4gIEZST00gPHRhYmxlIG5hbWU+XG4gIFdIRVJFICRfX3RpbWVGaWx0ZXIodGltZV9jb2x1bW4pXG4gIE9SREVSIEJZIDx0aW1lX2NvbHVtbj4gQVNDXG4gIExJTUlUIDEwMFxuICBgO1xuXG5jbGFzcyBNeXNxbEFubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcblxuICBkZWNsYXJlIGFubm90YXRpb246IGFueTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55KSB7XG4gICAgdGhpcy5hbm5vdGF0aW9uID0gJHNjb3BlLmN0cmwuYW5ub3RhdGlvbjtcbiAgICB0aGlzLmFubm90YXRpb24ucmF3UXVlcnkgPSB0aGlzLmFubm90YXRpb24ucmF3UXVlcnkgfHwgZGVmYXVsdFF1ZXJ5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIE15c3FsRGF0YXNvdXJjZSxcbiAgTXlzcWxEYXRhc291cmNlIGFzIERhdGFzb3VyY2UsXG4gIE15c3FsUXVlcnlDdHJsIGFzIFF1ZXJ5Q3RybCxcbiAgTXlzcWxDb25maWdDdHJsIGFzIENvbmZpZ0N0cmwsXG4gIE15c3FsQW5ub3RhdGlvbnNRdWVyeUN0cmwgYXMgQW5ub3RhdGlvbnNRdWVyeUN0cmwsXG59O1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW48TXlzcWxEYXRhc291cmNlLCBNeVNRTFF1ZXJ5PihNeXNxbERhdGFzb3VyY2UpXG4gIC5zZXRRdWVyeUN0cmwoTXlzcWxRdWVyeUN0cmwpXG4gIC5zZXRDb25maWdDdHJsKE15c3FsQ29uZmlnQ3RybClcbiAgLnNldEFubm90YXRpb25RdWVyeUN0cmwoTXlzcWxBbm5vdGF0aW9uc1F1ZXJ5Q3RybCk7XG4iLCJpbXBvcnQgeyBmaW5kLCBtYXAgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTY29wZWRWYXJzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVNRTFF1ZXJ5TW9kZWwge1xuICB0YXJnZXQ6IGFueTtcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgc2NvcGVkVmFyczogYW55O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IodGFyZ2V0OiBhbnksIHRlbXBsYXRlU3J2PzogVGVtcGxhdGVTcnYsIHNjb3BlZFZhcnM/OiBTY29wZWRWYXJzKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy50ZW1wbGF0ZVNydiA9IHRlbXBsYXRlU3J2O1xuICAgIHRoaXMuc2NvcGVkVmFycyA9IHNjb3BlZFZhcnM7XG5cbiAgICB0YXJnZXQuZm9ybWF0ID0gdGFyZ2V0LmZvcm1hdCB8fCAndGltZV9zZXJpZXMnO1xuICAgIHRhcmdldC50aW1lQ29sdW1uID0gdGFyZ2V0LnRpbWVDb2x1bW4gfHwgJ3RpbWUnO1xuICAgIHRhcmdldC5tZXRyaWNDb2x1bW4gPSB0YXJnZXQubWV0cmljQ29sdW1uIHx8ICdub25lJztcblxuICAgIHRhcmdldC5ncm91cCA9IHRhcmdldC5ncm91cCB8fCBbXTtcbiAgICB0YXJnZXQud2hlcmUgPSB0YXJnZXQud2hlcmUgfHwgW3sgdHlwZTogJ21hY3JvJywgbmFtZTogJyRfX3RpbWVGaWx0ZXInLCBwYXJhbXM6IFtdIH1dO1xuICAgIHRhcmdldC5zZWxlY3QgPSB0YXJnZXQuc2VsZWN0IHx8IFtbeyB0eXBlOiAnY29sdW1uJywgcGFyYW1zOiBbJ3ZhbHVlJ10gfV1dO1xuXG4gICAgLy8gaGFuZGxlIHByZSBxdWVyeSBndWkgcGFuZWxzIGdyYWNlZnVsbHlcbiAgICBpZiAoISgncmF3UXVlcnknIGluIHRoaXMudGFyZ2V0KSkge1xuICAgICAgaWYgKCdyYXdTcWwnIGluIHRhcmdldCkge1xuICAgICAgICAvLyBwcmUgcXVlcnkgZ3VpIHBhbmVsXG4gICAgICAgIHRhcmdldC5yYXdRdWVyeSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBuZXcgcGFuZWxcbiAgICAgICAgdGFyZ2V0LnJhd1F1ZXJ5ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2l2ZSBpbnRlcnBvbGF0ZVF1ZXJ5U3RyIGFjY2VzcyB0byB0aGlzXG4gICAgdGhpcy5pbnRlcnBvbGF0ZVF1ZXJ5U3RyID0gdGhpcy5pbnRlcnBvbGF0ZVF1ZXJ5U3RyLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyByZW1vdmUgaWRlbnRpZmllciBxdW90aW5nIGZyb20gaWRlbnRpZmllciB0byB1c2UgaW4gbWV0YWRhdGEgcXVlcmllc1xuICB1bnF1b3RlSWRlbnRpZmllcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlWzBdID09PSAnXCInICYmIHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnXCInKSB7XG4gICAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKDEsIHZhbHVlLmxlbmd0aCAtIDEpLnJlcGxhY2UoL1wiXCIvZywgJ1wiJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBxdW90ZUlkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiAnXCInICsgdmFsdWUucmVwbGFjZSgvXCIvZywgJ1wiXCInKSArICdcIic7XG4gIH1cblxuICBxdW90ZUxpdGVyYWwodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiBcIidcIiArIHZhbHVlLnJlcGxhY2UoLycvZywgXCInJ1wiKSArIFwiJ1wiO1xuICB9XG5cbiAgZXNjYXBlTGl0ZXJhbCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvJy9nLCBcIicnXCIpO1xuICB9XG5cbiAgaGFzVGltZUdyb3VwKCkge1xuICAgIHJldHVybiBmaW5kKHRoaXMudGFyZ2V0Lmdyb3VwLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICd0aW1lJyk7XG4gIH1cblxuICBoYXNNZXRyaWNDb2x1bW4oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbiAhPT0gJ25vbmUnO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVRdWVyeVN0cih2YWx1ZTogc3RyaW5nLCB2YXJpYWJsZTogeyBtdWx0aTogYW55OyBpbmNsdWRlQWxsOiBhbnkgfSwgZGVmYXVsdEZvcm1hdEZuOiBhbnkpIHtcbiAgICAvLyBpZiBubyBtdWx0aSBvciBpbmNsdWRlIGFsbCBkbyBub3QgcmVnZXhFc2NhcGVcbiAgICBpZiAoIXZhcmlhYmxlLm11bHRpICYmICF2YXJpYWJsZS5pbmNsdWRlQWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5lc2NhcGVMaXRlcmFsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMucXVvdGVMaXRlcmFsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBlc2NhcGVkVmFsdWVzID0gbWFwKHZhbHVlLCB0aGlzLnF1b3RlTGl0ZXJhbCk7XG4gICAgcmV0dXJuIGVzY2FwZWRWYWx1ZXMuam9pbignLCcpO1xuICB9XG5cbiAgcmVuZGVyKGludGVycG9sYXRlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuXG4gICAgLy8gbmV3IHF1ZXJ5IHdpdGggbm8gdGFibGUgc2V0IHlldFxuICAgIGlmICghdGhpcy50YXJnZXQucmF3UXVlcnkgJiYgISgndGFibGUnIGluIHRoaXMudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0LnJhd1F1ZXJ5KSB7XG4gICAgICB0YXJnZXQucmF3U3FsID0gdGhpcy5idWlsZFF1ZXJ5KCk7XG4gICAgfVxuXG4gICAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHRhcmdldC5yYXdTcWwsIHRoaXMuc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVF1ZXJ5U3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRhcmdldC5yYXdTcWw7XG4gICAgfVxuICB9XG5cbiAgaGFzVW5peEVwb2NoVGltZWNvbHVtbigpIHtcbiAgICByZXR1cm4gWydpbnQnLCAnYmlnaW50JywgJ2RvdWJsZSddLmluZGV4T2YodGhpcy50YXJnZXQudGltZUNvbHVtblR5cGUpID4gLTE7XG4gIH1cblxuICBidWlsZFRpbWVDb2x1bW4oYWxpYXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGltZUdyb3VwID0gdGhpcy5oYXNUaW1lR3JvdXAoKTtcbiAgICBsZXQgcXVlcnk7XG4gICAgbGV0IG1hY3JvID0gJyRfX3RpbWVHcm91cCc7XG5cbiAgICBpZiAodGltZUdyb3VwKSB7XG4gICAgICBsZXQgYXJncztcbiAgICAgIGlmICh0aW1lR3JvdXAucGFyYW1zLmxlbmd0aCA+IDEgJiYgdGltZUdyb3VwLnBhcmFtc1sxXSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGFyZ3MgPSB0aW1lR3JvdXAucGFyYW1zLmpvaW4oJywnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZ3MgPSB0aW1lR3JvdXAucGFyYW1zWzBdO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaGFzVW5peEVwb2NoVGltZWNvbHVtbigpKSB7XG4gICAgICAgIG1hY3JvID0gJyRfX3VuaXhFcG9jaEdyb3VwJztcbiAgICAgIH1cbiAgICAgIGlmIChhbGlhcykge1xuICAgICAgICBtYWNybyArPSAnQWxpYXMnO1xuICAgICAgfVxuICAgICAgcXVlcnkgPSBtYWNybyArICcoJyArIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gKyAnLCcgKyBhcmdzICsgJyknO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeSA9IHRoaXMudGFyZ2V0LnRpbWVDb2x1bW47XG4gICAgICBpZiAoYWxpYXMpIHtcbiAgICAgICAgcXVlcnkgKz0gJyBBUyBcInRpbWVcIic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRNZXRyaWNDb2x1bW4oKSB7XG4gICAgaWYgKHRoaXMuaGFzTWV0cmljQ29sdW1uKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4gKyAnIEFTIG1ldHJpYyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgYnVpbGRWYWx1ZUNvbHVtbnMoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2YgdGhpcy50YXJnZXQuc2VsZWN0KSB7XG4gICAgICBxdWVyeSArPSAnLFxcbiAgJyArIHRoaXMuYnVpbGRWYWx1ZUNvbHVtbihjb2x1bW4pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkVmFsdWVDb2x1bW4oY29sdW1uOiBhbnkpIHtcbiAgICBsZXQgcXVlcnkgPSAnJztcblxuICAgIGNvbnN0IGNvbHVtbk5hbWU6IGFueSA9IGZpbmQoY29sdW1uLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICdjb2x1bW4nKTtcbiAgICBxdWVyeSA9IGNvbHVtbk5hbWUucGFyYW1zWzBdO1xuXG4gICAgY29uc3QgYWdncmVnYXRlOiBhbnkgPSBmaW5kKGNvbHVtbiwgKGc6IGFueSkgPT4gZy50eXBlID09PSAnYWdncmVnYXRlJyk7XG5cbiAgICBpZiAoYWdncmVnYXRlKSB7XG4gICAgICBjb25zdCBmdW5jID0gYWdncmVnYXRlLnBhcmFtc1swXTtcbiAgICAgIHF1ZXJ5ID0gZnVuYyArICcoJyArIHF1ZXJ5ICsgJyknO1xuICAgIH1cblxuICAgIGNvbnN0IGFsaWFzOiBhbnkgPSBmaW5kKGNvbHVtbiwgKGc6IGFueSkgPT4gZy50eXBlID09PSAnYWxpYXMnKTtcbiAgICBpZiAoYWxpYXMpIHtcbiAgICAgIHF1ZXJ5ICs9ICcgQVMgJyArIHRoaXMucXVvdGVJZGVudGlmaWVyKGFsaWFzLnBhcmFtc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRXaGVyZUNsYXVzZSgpIHtcbiAgICBsZXQgcXVlcnkgPSAnJztcbiAgICBjb25zdCBjb25kaXRpb25zID0gbWFwKHRoaXMudGFyZ2V0LndoZXJlLCAodGFnLCBpbmRleCkgPT4ge1xuICAgICAgc3dpdGNoICh0YWcudHlwZSkge1xuICAgICAgICBjYXNlICdtYWNybyc6XG4gICAgICAgICAgcmV0dXJuIHRhZy5uYW1lICsgJygnICsgdGhpcy50YXJnZXQudGltZUNvbHVtbiArICcpJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXhwcmVzc2lvbic6XG4gICAgICAgICAgcmV0dXJuIHRhZy5wYXJhbXMuam9pbignICcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmRpdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgcXVlcnkgPSAnXFxuV0hFUkVcXG4gICcgKyBjb25kaXRpb25zLmpvaW4oJyBBTkRcXG4gICcpO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkR3JvdXBDbGF1c2UoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgbGV0IGdyb3VwU2VjdGlvbiA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhcmdldC5ncm91cC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFydCA9IHRoaXMudGFyZ2V0Lmdyb3VwW2ldO1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIGdyb3VwU2VjdGlvbiArPSAnLCAnO1xuICAgICAgfVxuICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAgIGdyb3VwU2VjdGlvbiArPSAnMSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncm91cFNlY3Rpb24gKz0gcGFydC5wYXJhbXNbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdyb3VwU2VjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5ID0gJ1xcbkdST1VQIEJZICcgKyBncm91cFNlY3Rpb247XG4gICAgICBpZiAodGhpcy5oYXNNZXRyaWNDb2x1bW4oKSkge1xuICAgICAgICBxdWVyeSArPSAnLDInO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZFF1ZXJ5KCkge1xuICAgIGxldCBxdWVyeSA9ICdTRUxFQ1QnO1xuXG4gICAgcXVlcnkgKz0gJ1xcbiAgJyArIHRoaXMuYnVpbGRUaW1lQ29sdW1uKCk7XG4gICAgaWYgKHRoaXMuaGFzTWV0cmljQ29sdW1uKCkpIHtcbiAgICAgIHF1ZXJ5ICs9ICcsXFxuICAnICsgdGhpcy5idWlsZE1ldHJpY0NvbHVtbigpO1xuICAgIH1cbiAgICBxdWVyeSArPSB0aGlzLmJ1aWxkVmFsdWVDb2x1bW5zKCk7XG5cbiAgICBxdWVyeSArPSAnXFxuRlJPTSAnICsgdGhpcy50YXJnZXQudGFibGU7XG5cbiAgICBxdWVyeSArPSB0aGlzLmJ1aWxkV2hlcmVDbGF1c2UoKTtcbiAgICBxdWVyeSArPSB0aGlzLmJ1aWxkR3JvdXBDbGF1c2UoKTtcblxuICAgIHF1ZXJ5ICs9ICdcXG5PUkRFUiBCWSAnICsgdGhpcy5idWlsZFRpbWVDb2x1bW4oZmFsc2UpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBjbG9uZSwgZmlsdGVyLCBmaW5kLCBmaW5kSW5kZXgsIGluZGV4T2YsIG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFBhbmVsRXZlbnRzLCBRdWVyeVJlc3VsdE1ldGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBTcWxQYXJ0IH0gZnJvbSAnYXBwL2FuZ3VsYXIvY29tcG9uZW50cy9zcWxfcGFydC9zcWxfcGFydCc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IHsgVmFyaWFibGVXaXRoTXVsdGlTdXBwb3J0IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3ZhcmlhYmxlcy90eXBlcyc7XG5pbXBvcnQgeyBRdWVyeUN0cmwgfSBmcm9tICdhcHAvcGx1Z2lucy9zZGsnO1xuXG5pbXBvcnQgeyBTaG93Q29uZmlybU1vZGFsRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ldmVudHMnO1xuXG5pbXBvcnQgeyBNeXNxbE1ldGFRdWVyeSB9IGZyb20gJy4vbWV0YV9xdWVyeSc7XG5pbXBvcnQgTXlTUUxRdWVyeU1vZGVsIGZyb20gJy4vbXlzcWxfcXVlcnlfbW9kZWwnO1xuaW1wb3J0IHNxbFBhcnQgZnJvbSAnLi9zcWxfcGFydCc7XG5cbmNvbnN0IGRlZmF1bHRRdWVyeSA9IGBTRUxFQ1RcbiAgVU5JWF9USU1FU1RBTVAoPHRpbWVfY29sdW1uPikgYXMgdGltZV9zZWMsXG4gIDx2YWx1ZSBjb2x1bW4+IGFzIHZhbHVlLFxuICA8c2VyaWVzIG5hbWUgY29sdW1uPiBhcyBtZXRyaWNcbkZST00gPHRhYmxlIG5hbWU+XG5XSEVSRSAkX190aW1lRmlsdGVyKHRpbWVfY29sdW1uKVxuT1JERVIgQlkgPHRpbWVfY29sdW1uPiBBU0NcbmA7XG5cbmV4cG9ydCBjbGFzcyBNeXNxbFF1ZXJ5Q3RybCBleHRlbmRzIFF1ZXJ5Q3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9xdWVyeS5lZGl0b3IuaHRtbCc7XG5cbiAgZm9ybWF0czogYW55W107XG4gIGxhc3RRdWVyeUVycm9yPzogc3RyaW5nO1xuICBzaG93SGVscCE6IGJvb2xlYW47XG5cbiAgcXVlcnlNb2RlbDogTXlTUUxRdWVyeU1vZGVsO1xuICBtZXRhQnVpbGRlcjogTXlzcWxNZXRhUXVlcnk7XG4gIGxhc3RRdWVyeU1ldGE/OiBRdWVyeVJlc3VsdE1ldGE7XG4gIHRhYmxlU2VnbWVudDogYW55O1xuICB3aGVyZUFkZDogYW55O1xuICB0aW1lQ29sdW1uU2VnbWVudDogYW55O1xuICBtZXRyaWNDb2x1bW5TZWdtZW50OiBhbnk7XG4gIHNlbGVjdE1lbnU6IGFueVtdID0gW107XG4gIHNlbGVjdFBhcnRzOiBTcWxQYXJ0W11bXSA9IFtdO1xuICBncm91cFBhcnRzOiBTcWxQYXJ0W10gPSBbXTtcbiAgd2hlcmVQYXJ0czogU3FsUGFydFtdID0gW107XG4gIGdyb3VwQWRkOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAkc2NvcGU6IGFueSxcbiAgICAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSxcbiAgICBwcml2YXRlIHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydixcbiAgICBwcml2YXRlIHVpU2VnbWVudFNydjogYW55XG4gICkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcblxuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgdGhpcy5xdWVyeU1vZGVsID0gbmV3IE15U1FMUXVlcnlNb2RlbCh0aGlzLnRhcmdldCwgdGVtcGxhdGVTcnYsIHRoaXMucGFuZWwuc2NvcGVkVmFycyk7XG4gICAgdGhpcy5tZXRhQnVpbGRlciA9IG5ldyBNeXNxbE1ldGFRdWVyeSh0aGlzLnRhcmdldCwgdGhpcy5xdWVyeU1vZGVsKTtcbiAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcblxuICAgIHRoaXMuZm9ybWF0cyA9IFtcbiAgICAgIHsgdGV4dDogJ1RpbWUgc2VyaWVzJywgdmFsdWU6ICd0aW1lX3NlcmllcycgfSxcbiAgICAgIHsgdGV4dDogJ1RhYmxlJywgdmFsdWU6ICd0YWJsZScgfSxcbiAgICBdO1xuXG4gICAgaWYgKCF0aGlzLnRhcmdldC5yYXdTcWwpIHtcbiAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgd2hlbiBpbiB0YWJsZSBwYW5lbFxuICAgICAgaWYgKHRoaXMucGFuZWxDdHJsLnBhbmVsLnR5cGUgPT09ICd0YWJsZScpIHtcbiAgICAgICAgdGhpcy50YXJnZXQuZm9ybWF0ID0gJ3RhYmxlJztcbiAgICAgICAgdGhpcy50YXJnZXQucmF3U3FsID0gJ1NFTEVDVCAxJztcbiAgICAgICAgdGhpcy50YXJnZXQucmF3UXVlcnkgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YXJnZXQucmF3U3FsID0gZGVmYXVsdFF1ZXJ5O1xuICAgICAgICB0aGlzLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuZmluZE1ldHJpY1RhYmxlKCkpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50YWJsZSA9IHJlc3VsdFswXS50ZXh0O1xuICAgICAgICAgICAgbGV0IHNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHRoaXMudGFyZ2V0LnRhYmxlKTtcbiAgICAgICAgICAgIHRoaXMudGFibGVTZWdtZW50Lmh0bWwgPSBzZWdtZW50Lmh0bWw7XG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VnbWVudC52YWx1ZSA9IHNlZ21lbnQudmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gPSByZXN1bHRbMV0udGV4dDtcbiAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4pO1xuICAgICAgICAgICAgdGhpcy50aW1lQ29sdW1uU2VnbWVudC5odG1sID0gc2VnbWVudC5odG1sO1xuICAgICAgICAgICAgdGhpcy50aW1lQ29sdW1uU2VnbWVudC52YWx1ZSA9IHNlZ21lbnQudmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlID0gJ3RpbWVzdGFtcCc7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZWxlY3QgPSBbW3sgdHlwZTogJ2NvbHVtbicsIHBhcmFtczogW3Jlc3VsdFsyXS50ZXh0XSB9XV07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRhcmdldC50YWJsZSkge1xuICAgICAgdGhpcy50YWJsZVNlZ21lbnQgPSB1aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHZhbHVlOiAnc2VsZWN0IHRhYmxlJywgZmFrZTogdHJ1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJsZVNlZ21lbnQgPSB1aVNlZ21lbnRTcnYubmV3U2VnbWVudCh0aGlzLnRhcmdldC50YWJsZSk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lQ29sdW1uU2VnbWVudCA9IHVpU2VnbWVudFNydi5uZXdTZWdtZW50KHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4pO1xuICAgIHRoaXMubWV0cmljQ29sdW1uU2VnbWVudCA9IHVpU2VnbWVudFNydi5uZXdTZWdtZW50KHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbik7XG5cbiAgICB0aGlzLmJ1aWxkU2VsZWN0TWVudSgpO1xuICAgIHRoaXMud2hlcmVBZGQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XG4gICAgdGhpcy5ncm91cEFkZCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcblxuICAgIHRoaXMucGFuZWxDdHJsLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5kYXRhUmVjZWl2ZWQsIHRoaXMub25EYXRhUmVjZWl2ZWQuYmluZCh0aGlzKSwgJHNjb3BlKTtcbiAgICB0aGlzLnBhbmVsQ3RybC5ldmVudHMub24oUGFuZWxFdmVudHMuZGF0YUVycm9yLCB0aGlzLm9uRGF0YUVycm9yLmJpbmQodGhpcyksICRzY29wZSk7XG4gIH1cblxuICB1cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCkge1xuICAgIGlmICghdGhpcy50YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIHRoaXMudGFyZ2V0LnJhd1NxbCA9IHRoaXMucXVlcnlNb2RlbC5idWlsZFF1ZXJ5KCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpO1xuICB9XG5cbiAgdXBkYXRlUHJvamVjdGlvbigpIHtcbiAgICB0aGlzLnNlbGVjdFBhcnRzID0gbWFwKHRoaXMudGFyZ2V0LnNlbGVjdCwgKHBhcnRzOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBtYXAocGFydHMsIHNxbFBhcnQuY3JlYXRlKS5maWx0ZXIoKG4pID0+IG4pO1xuICAgIH0pO1xuICAgIHRoaXMud2hlcmVQYXJ0cyA9IG1hcCh0aGlzLnRhcmdldC53aGVyZSwgc3FsUGFydC5jcmVhdGUpLmZpbHRlcigobikgPT4gbik7XG4gICAgdGhpcy5ncm91cFBhcnRzID0gbWFwKHRoaXMudGFyZ2V0Lmdyb3VwLCBzcWxQYXJ0LmNyZWF0ZSkuZmlsdGVyKChuKSA9PiBuKTtcbiAgfVxuXG4gIHVwZGF0ZVBlcnNpc3RlZFBhcnRzKCkge1xuICAgIHRoaXMudGFyZ2V0LnNlbGVjdCA9IG1hcCh0aGlzLnNlbGVjdFBhcnRzLCAoc2VsZWN0UGFydHMpID0+IHtcbiAgICAgIHJldHVybiBtYXAoc2VsZWN0UGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogcGFydC5kZWYudHlwZSwgZGF0YXR5cGU6IHBhcnQuZGF0YXR5cGUsIHBhcmFtczogcGFydC5wYXJhbXMgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0LndoZXJlID0gbWFwKHRoaXMud2hlcmVQYXJ0cywgKHBhcnQ6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZTogcGFydC5kZWYudHlwZSwgZGF0YXR5cGU6IHBhcnQuZGF0YXR5cGUsIG5hbWU6IHBhcnQubmFtZSwgcGFyYW1zOiBwYXJ0LnBhcmFtcyB9O1xuICAgIH0pO1xuICAgIHRoaXMudGFyZ2V0Lmdyb3VwID0gbWFwKHRoaXMuZ3JvdXBQYXJ0cywgKHBhcnQ6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHsgdHlwZTogcGFydC5kZWYudHlwZSwgZGF0YXR5cGU6IHBhcnQuZGF0YXR5cGUsIHBhcmFtczogcGFydC5wYXJhbXMgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkU2VsZWN0TWVudSgpIHtcbiAgICBjb25zdCBhZ2dyZWdhdGVzID0ge1xuICAgICAgdGV4dDogJ0FnZ3JlZ2F0ZSBGdW5jdGlvbnMnLFxuICAgICAgdmFsdWU6ICdhZ2dyZWdhdGUnLFxuICAgICAgc3VibWVudTogW1xuICAgICAgICB7IHRleHQ6ICdBdmVyYWdlJywgdmFsdWU6ICdhdmcnIH0sXG4gICAgICAgIHsgdGV4dDogJ0NvdW50JywgdmFsdWU6ICdjb3VudCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWF4aW11bScsIHZhbHVlOiAnbWF4JyB9LFxuICAgICAgICB7IHRleHQ6ICdNaW5pbXVtJywgdmFsdWU6ICdtaW4nIH0sXG4gICAgICAgIHsgdGV4dDogJ1N1bScsIHZhbHVlOiAnc3VtJyB9LFxuICAgICAgICB7IHRleHQ6ICdTdGFuZGFyZCBkZXZpYXRpb24nLCB2YWx1ZTogJ3N0ZGRldicgfSxcbiAgICAgICAgeyB0ZXh0OiAnVmFyaWFuY2UnLCB2YWx1ZTogJ3ZhcmlhbmNlJyB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZWxlY3RNZW51LnB1c2goYWdncmVnYXRlcyk7XG4gICAgdGhpcy5zZWxlY3RNZW51LnB1c2goeyB0ZXh0OiAnQWxpYXMnLCB2YWx1ZTogJ2FsaWFzJyB9KTtcbiAgICB0aGlzLnNlbGVjdE1lbnUucHVzaCh7IHRleHQ6ICdDb2x1bW4nLCB2YWx1ZTogJ2NvbHVtbicgfSk7XG4gIH1cblxuICB0b2dnbGVFZGl0b3JNb2RlKCkge1xuICAgIGlmICh0aGlzLnRhcmdldC5yYXdRdWVyeSkge1xuICAgICAgYXBwRXZlbnRzLnB1Ymxpc2goXG4gICAgICAgIG5ldyBTaG93Q29uZmlybU1vZGFsRXZlbnQoe1xuICAgICAgICAgIHRpdGxlOiAnV2FybmluZycsXG4gICAgICAgICAgdGV4dDI6ICdTd2l0Y2hpbmcgdG8gcXVlcnkgYnVpbGRlciBtYXkgb3ZlcndyaXRlIHlvdXIgcmF3IFNRTC4nLFxuICAgICAgICAgIGljb246ICdleGNsYW1hdGlvbi10cmlhbmdsZScsXG4gICAgICAgICAgeWVzVGV4dDogJ1N3aXRjaCcsXG4gICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBUaGlzIGNvdWxkIGJlIGNhbGxlZCBmcm9tIFJlYWN0LCBzbyB3cmFwIGluICRldmFsQXN5bmMuXG4gICAgICAgICAgICAvLyBXaWxsIHRoZW4gZWl0aGVyIHJ1biBhcyBwYXJ0IG9mIHRoZSBjdXJyZW50IGRpZ2VzdCBjeWNsZSBvciB0cmlnZ2VyIGEgbmV3IG9uZS5cbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLiRldmFsQXN5bmMoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yYXdRdWVyeSA9ICF0aGlzLnRhcmdldC5yYXdRdWVyeTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGNvdWxkIGJlIGNhbGxlZCBmcm9tIFJlYWN0LCBzbyB3cmFwIGluICRldmFsQXN5bmMuXG4gICAgICAvLyBXaWxsIHRoZW4gZWl0aGVyIHJ1biBhcyBwYXJ0IG9mIHRoZSBjdXJyZW50IGRpZ2VzdCBjeWNsZSBvciB0cmlnZ2VyIGEgbmV3IG9uZS5cbiAgICAgIHRoaXMuJHNjb3BlLiRldmFsQXN5bmMoKCkgPT4ge1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdRdWVyeSA9ICF0aGlzLnRhcmdldC5yYXdRdWVyeTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0UGx1c0J1dHRvbihidXR0b246IHsgaHRtbDogYW55OyB2YWx1ZTogYW55IH0pIHtcbiAgICBjb25zdCBwbHVzQnV0dG9uID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xuICAgIGJ1dHRvbi5odG1sID0gcGx1c0J1dHRvbi5odG1sO1xuICAgIGJ1dHRvbi52YWx1ZSA9IHBsdXNCdXR0b24udmFsdWU7XG4gIH1cblxuICBnZXRUYWJsZVNlZ21lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZFRhYmxlUXVlcnkoKSlcbiAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdGFibGVDaGFuZ2VkKCkge1xuICAgIHRoaXMudGFyZ2V0LnRhYmxlID0gdGhpcy50YWJsZVNlZ21lbnQudmFsdWU7XG4gICAgdGhpcy50YXJnZXQud2hlcmUgPSBbXTtcbiAgICB0aGlzLnRhcmdldC5ncm91cCA9IFtdO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuXG4gICAgY29uc3Qgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoJ25vbmUnKTtcbiAgICB0aGlzLm1ldHJpY0NvbHVtblNlZ21lbnQuaHRtbCA9IHNlZ21lbnQuaHRtbDtcbiAgICB0aGlzLm1ldHJpY0NvbHVtblNlZ21lbnQudmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuICAgIHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbiA9ICdub25lJztcblxuICAgIGNvbnN0IHRhc2sxID0gdGhpcy5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ3RpbWUnKSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIC8vIGNoZWNrIGlmIHRpbWUgY29sdW1uIGlzIHN0aWxsIHZhbGlkXG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDAgJiYgIWZpbmQocmVzdWx0LCAocjogYW55KSA9PiByLnRleHQgPT09IHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4pKSB7XG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHJlc3VsdFswXS50ZXh0KTtcbiAgICAgICAgdGhpcy50aW1lQ29sdW1uU2VnbWVudC5odG1sID0gc2VnbWVudC5odG1sO1xuICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50LnZhbHVlID0gc2VnbWVudC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRpbWVDb2x1bW5DaGFuZ2VkKGZhbHNlKTtcbiAgICB9KTtcbiAgICBjb25zdCB0YXNrMiA9IHRoaXMuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCd2YWx1ZScpKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LnNlbGVjdCA9IFtbeyB0eXBlOiAnY29sdW1uJywgcGFyYW1zOiBbcmVzdWx0WzBdLnRleHRdIH1dXTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBQcm9taXNlLmFsbChbdGFzazEsIHRhc2syXSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRpbWVDb2x1bW5TZWdtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgndGltZScpKVxuICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICB0aW1lQ29sdW1uQ2hhbmdlZChyZWZyZXNoPzogYm9vbGVhbikge1xuICAgIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gPSB0aGlzLnRpbWVDb2x1bW5TZWdtZW50LnZhbHVlO1xuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZERhdGF0eXBlUXVlcnkodGhpcy50YXJnZXQudGltZUNvbHVtbikpXG4gICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpZiAodGhpcy50YXJnZXQudGltZUNvbHVtblR5cGUgIT09IHJlc3VsdFswXS50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50aW1lQ29sdW1uVHlwZSA9IHJlc3VsdFswXS50ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcGFydE1vZGVsO1xuICAgICAgICAgIGlmICh0aGlzLnF1ZXJ5TW9kZWwuaGFzVW5peEVwb2NoVGltZWNvbHVtbigpKSB7XG4gICAgICAgICAgICBwYXJ0TW9kZWwgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdtYWNybycsIG5hbWU6ICckX191bml4RXBvY2hGaWx0ZXInLCBwYXJhbXM6IFtdIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJ0TW9kZWwgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdtYWNybycsIG5hbWU6ICckX190aW1lRmlsdGVyJywgcGFyYW1zOiBbXSB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy53aGVyZVBhcnRzLmxlbmd0aCA+PSAxICYmIHRoaXMud2hlcmVQYXJ0c1swXS5kZWYudHlwZSA9PT0gJ21hY3JvJykge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IG1hY3JvXG4gICAgICAgICAgICB0aGlzLndoZXJlUGFydHNbMF0gPSBwYXJ0TW9kZWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud2hlcmVQYXJ0cy5zcGxpY2UoMCwgMCwgcGFydE1vZGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIGlmIChyZWZyZXNoICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldE1ldHJpY0NvbHVtblNlZ21lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCdtZXRyaWMnKSlcbiAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7IGFkZE5vbmU6IHRydWUgfSkpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbWV0cmljQ29sdW1uQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4gPSB0aGlzLm1ldHJpY0NvbHVtblNlZ21lbnQudmFsdWU7XG4gICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gIH1cblxuICBvbkRhdGFSZWNlaXZlZChkYXRhTGlzdDogYW55KSB7XG4gICAgdGhpcy5sYXN0UXVlcnlFcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhc3RRdWVyeU1ldGEgPSBkYXRhTGlzdFswXT8ubWV0YTtcbiAgfVxuXG4gIG9uRGF0YUVycm9yKGVycjogYW55KSB7XG4gICAgaWYgKGVyci5kYXRhICYmIGVyci5kYXRhLnJlc3VsdHMpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5UmVzID0gZXJyLmRhdGEucmVzdWx0c1t0aGlzLnRhcmdldC5yZWZJZF07XG4gICAgICBpZiAocXVlcnlSZXMpIHtcbiAgICAgICAgdGhpcy5sYXN0UXVlcnlFcnJvciA9IHF1ZXJ5UmVzLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRyYW5zZm9ybVRvU2VnbWVudHMoY29uZmlnOiBhbnkpIHtcbiAgICByZXR1cm4gKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgc2VnbWVudHMgPSBtYXAocmVzdWx0cywgKHNlZ21lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoe1xuICAgICAgICAgIHZhbHVlOiBzZWdtZW50LnRleHQsXG4gICAgICAgICAgZXhwYW5kYWJsZTogc2VnbWVudC5leHBhbmRhYmxlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29uZmlnLmFkZFRlbXBsYXRlVmFycykge1xuICAgICAgICBmb3IgKGNvbnN0IHZhcmlhYmxlIG9mIHRoaXMudGVtcGxhdGVTcnYuZ2V0VmFyaWFibGVzKCkpIHtcbiAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgdmFsdWUgPSAnJCcgKyB2YXJpYWJsZS5uYW1lO1xuICAgICAgICAgIGlmIChjb25maWcudGVtcGxhdGVRdW90ZXIgJiYgKHZhcmlhYmxlIGFzIHVua25vd24gYXMgVmFyaWFibGVXaXRoTXVsdGlTdXBwb3J0KS5tdWx0aSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhbHVlID0gY29uZmlnLnRlbXBsYXRlUXVvdGVyKHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWdtZW50cy51bnNoaWZ0KFxuICAgICAgICAgICAgdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7XG4gICAgICAgICAgICAgIHR5cGU6ICd0ZW1wbGF0ZScsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmFkZE5vbmUpIHtcbiAgICAgICAgc2VnbWVudHMudW5zaGlmdCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ3RlbXBsYXRlJywgdmFsdWU6ICdub25lJywgZXhwYW5kYWJsZTogdHJ1ZSB9KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWdtZW50cztcbiAgICB9O1xuICB9XG5cbiAgZmluZEFnZ3JlZ2F0ZUluZGV4KHNlbGVjdFBhcnRzOiBhbnkpIHtcbiAgICByZXR1cm4gZmluZEluZGV4KHNlbGVjdFBhcnRzLCAocDogYW55KSA9PiBwLmRlZi50eXBlID09PSAnYWdncmVnYXRlJyB8fCBwLmRlZi50eXBlID09PSAncGVyY2VudGlsZScpO1xuICB9XG5cbiAgZmluZFdpbmRvd0luZGV4KHNlbGVjdFBhcnRzOiBhbnkpIHtcbiAgICByZXR1cm4gZmluZEluZGV4KHNlbGVjdFBhcnRzLCAocDogYW55KSA9PiBwLmRlZi50eXBlID09PSAnd2luZG93JyB8fCBwLmRlZi50eXBlID09PSAnbW92aW5nX3dpbmRvdycpO1xuICB9XG5cbiAgYWRkU2VsZWN0UGFydChzZWxlY3RQYXJ0czogYW55W10sIGl0ZW06IHsgdmFsdWU6IGFueSB9LCBzdWJJdGVtOiB7IHR5cGU6IGFueTsgdmFsdWU6IGFueSB9KSB7XG4gICAgbGV0IHBhcnRUeXBlID0gaXRlbS52YWx1ZTtcbiAgICBpZiAoc3ViSXRlbSAmJiBzdWJJdGVtLnR5cGUpIHtcbiAgICAgIHBhcnRUeXBlID0gc3ViSXRlbS50eXBlO1xuICAgIH1cbiAgICBsZXQgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiBwYXJ0VHlwZSB9KTtcbiAgICBpZiAoc3ViSXRlbSkge1xuICAgICAgcGFydE1vZGVsLnBhcmFtc1swXSA9IHN1Ykl0ZW0udmFsdWU7XG4gICAgfVxuICAgIGxldCBhZGRBbGlhcyA9IGZhbHNlO1xuXG4gICAgc3dpdGNoIChwYXJ0VHlwZSkge1xuICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgY29uc3QgcGFydHMgPSBtYXAoc2VsZWN0UGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBwYXJhbXM6IGNsb25lKHBhcnQucGFyYW1zKSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFydHMucHVzaChwYXJ0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGVyY2VudGlsZSc6XG4gICAgICBjYXNlICdhZ2dyZWdhdGUnOlxuICAgICAgICAvLyBhZGQgZ3JvdXAgYnkgaWYgbm8gZ3JvdXAgYnkgeWV0XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5ncm91cC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmFkZEdyb3VwKCd0aW1lJywgJyRfX2ludGVydmFsJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWdnSW5kZXggPSB0aGlzLmZpbmRBZ2dyZWdhdGVJbmRleChzZWxlY3RQYXJ0cyk7XG4gICAgICAgIGlmIChhZ2dJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgYWdncmVnYXRpb25cbiAgICAgICAgICBzZWxlY3RQYXJ0c1thZ2dJbmRleF0gPSBwYXJ0TW9kZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKDEsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaW5kKHNlbGVjdFBhcnRzLCAocDogYW55KSA9PiBwLmRlZi50eXBlID09PSAnYWxpYXMnKSkge1xuICAgICAgICAgIGFkZEFsaWFzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdmluZ193aW5kb3cnOlxuICAgICAgY2FzZSAnd2luZG93JzpcbiAgICAgICAgY29uc3Qgd2luZG93SW5kZXggPSB0aGlzLmZpbmRXaW5kb3dJbmRleChzZWxlY3RQYXJ0cyk7XG4gICAgICAgIGlmICh3aW5kb3dJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgd2luZG93IGZ1bmN0aW9uXG4gICAgICAgICAgc2VsZWN0UGFydHNbd2luZG93SW5kZXhdID0gcGFydE1vZGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFnZ0luZGV4ID0gdGhpcy5maW5kQWdncmVnYXRlSW5kZXgoc2VsZWN0UGFydHMpO1xuICAgICAgICAgIGlmIChhZ2dJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZShhZ2dJbmRleCArIDEsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZpbmQoc2VsZWN0UGFydHMsIChwOiBhbnkpID0+IHAuZGVmLnR5cGUgPT09ICdhbGlhcycpKSB7XG4gICAgICAgICAgYWRkQWxpYXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWxpYXMnOlxuICAgICAgICBhZGRBbGlhcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChhZGRBbGlhcykge1xuICAgICAgLy8gc2V0IGluaXRpYWwgYWxpYXMgbmFtZSB0byBjb2x1bW4gbmFtZVxuICAgICAgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnYWxpYXMnLCBwYXJhbXM6IFtzZWxlY3RQYXJ0c1swXS5wYXJhbXNbMF0ucmVwbGFjZSgvXCIvZywgJycpXSB9KTtcbiAgICAgIGlmIChzZWxlY3RQYXJ0c1tzZWxlY3RQYXJ0cy5sZW5ndGggLSAxXS5kZWYudHlwZSA9PT0gJ2FsaWFzJykge1xuICAgICAgICBzZWxlY3RQYXJ0c1tzZWxlY3RQYXJ0cy5sZW5ndGggLSAxXSA9IHBhcnRNb2RlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdFBhcnRzLnB1c2gocGFydE1vZGVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gIH1cblxuICByZW1vdmVTZWxlY3RQYXJ0KHNlbGVjdFBhcnRzOiBhbnksIHBhcnQ6IHsgZGVmOiB7IHR5cGU6IHN0cmluZyB9IH0pIHtcbiAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ2NvbHVtbicpIHtcbiAgICAgIC8vIHJlbW92ZSBhbGwgcGFydHMgb2YgY29sdW1uIHVubGVzcyBpdHMgbGFzdCBjb2x1bW5cbiAgICAgIGlmICh0aGlzLnNlbGVjdFBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbW9kZWxzSW5kZXggPSBpbmRleE9mKHRoaXMuc2VsZWN0UGFydHMsIHNlbGVjdFBhcnRzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RQYXJ0cy5zcGxpY2UobW9kZWxzSW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJ0SW5kZXggPSBpbmRleE9mKHNlbGVjdFBhcnRzLCBwYXJ0KTtcbiAgICAgIHNlbGVjdFBhcnRzLnNwbGljZShwYXJ0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdFBhcnRFdmVudChzZWxlY3RQYXJ0czogYW55LCBwYXJ0OiB7IGRlZjogYW55IH0sIGV2dDogeyBuYW1lOiBhbnkgfSkge1xuICAgIHN3aXRjaCAoZXZ0Lm5hbWUpIHtcbiAgICAgIGNhc2UgJ2dldC1wYXJhbS1vcHRpb25zJzoge1xuICAgICAgICBzd2l0Y2ggKHBhcnQuZGVmLnR5cGUpIHtcbiAgICAgICAgICAvLyBjYXNlICdhZ2dyZWdhdGUnOlxuICAgICAgICAgIC8vICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgIC8vICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRBZ2dyZWdhdGVRdWVyeSgpKVxuICAgICAgICAgIC8vICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgICAgIC8vICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAgICAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCd2YWx1ZScpKVxuICAgICAgICAgICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlICdwYXJ0LXBhcmFtLWNoYW5nZWQnOiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnYWN0aW9uJzoge1xuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdFBhcnQoc2VsZWN0UGFydHMsIHBhcnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdnZXQtcGFydC1hY3Rpb25zJzoge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt7IHRleHQ6ICdSZW1vdmUnLCB2YWx1ZTogJ3JlbW92ZS1wYXJ0JyB9XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlR3JvdXBQYXJ0RXZlbnQocGFydDogYW55LCBpbmRleDogYW55LCBldnQ6IHsgbmFtZTogYW55IH0pIHtcbiAgICBzd2l0Y2ggKGV2dC5uYW1lKSB7XG4gICAgICBjYXNlICdnZXQtcGFyYW0tb3B0aW9ucyc6IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCkpXG4gICAgICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgICAgY2FzZSAncGFydC1wYXJhbS1jaGFuZ2VkJzoge1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2FjdGlvbic6IHtcbiAgICAgICAgdGhpcy5yZW1vdmVHcm91cChwYXJ0LCBpbmRleCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dldC1wYXJ0LWFjdGlvbnMnOiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW3sgdGV4dDogJ1JlbW92ZScsIHZhbHVlOiAncmVtb3ZlLXBhcnQnIH1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRHcm91cChwYXJ0VHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IHBhcmFtcyA9IFt2YWx1ZV07XG4gICAgaWYgKHBhcnRUeXBlID09PSAndGltZScpIHtcbiAgICAgIHBhcmFtcyA9IFsnJF9faW50ZXJ2YWwnLCAnbm9uZSddO1xuICAgIH1cbiAgICBjb25zdCBwYXJ0TW9kZWwgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6IHBhcnRUeXBlLCBwYXJhbXM6IHBhcmFtcyB9KTtcblxuICAgIGlmIChwYXJ0VHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAvLyBwdXQgdGltZUdyb3VwIGF0IHN0YXJ0XG4gICAgICB0aGlzLmdyb3VwUGFydHMuc3BsaWNlKDAsIDAsIHBhcnRNb2RlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JvdXBQYXJ0cy5wdXNoKHBhcnRNb2RlbCk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGFnZ3JlZ2F0ZXMgd2hlbiBhZGRpbmcgZ3JvdXAgYnlcbiAgICBmb3IgKGNvbnN0IHNlbGVjdFBhcnRzIG9mIHRoaXMuc2VsZWN0UGFydHMpIHtcbiAgICAgIGlmICghc2VsZWN0UGFydHMuc29tZSgocGFydCkgPT4gcGFydC5kZWYudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScpKSB7XG4gICAgICAgIGNvbnN0IGFnZ3JlZ2F0ZSA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ2FnZ3JlZ2F0ZScsIHBhcmFtczogWydhdmcnXSB9KTtcbiAgICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKDEsIDAsIGFnZ3JlZ2F0ZSk7XG4gICAgICAgIGlmICghc2VsZWN0UGFydHMuc29tZSgocGFydCkgPT4gcGFydC5kZWYudHlwZSA9PT0gJ2FsaWFzJykpIHtcbiAgICAgICAgICBjb25zdCBhbGlhcyA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ2FsaWFzJywgcGFyYW1zOiBbc2VsZWN0UGFydHNbMF0ucGFydC5wYXJhbXNbMF1dIH0pO1xuICAgICAgICAgIHNlbGVjdFBhcnRzLnB1c2goYWxpYXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICB9XG5cbiAgcmVtb3ZlR3JvdXAocGFydDogeyBkZWY6IHsgdHlwZTogc3RyaW5nIH0gfSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChwYXJ0LmRlZi50eXBlID09PSAndGltZScpIHtcbiAgICAgIC8vIHJlbW92ZSBhZ2dyZWdhdGlvbnNcbiAgICAgIHRoaXMuc2VsZWN0UGFydHMgPSBtYXAodGhpcy5zZWxlY3RQYXJ0cywgKHM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZmlsdGVyKHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScgfHwgcGFydC5kZWYudHlwZSA9PT0gJ3BlcmNlbnRpbGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuZ3JvdXBQYXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgfVxuXG4gIGhhbmRsZVdoZXJlUGFydEV2ZW50KHdoZXJlUGFydHM6IGFueSwgcGFydDogYW55LCBldnQ6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIHN3aXRjaCAoZXZ0Lm5hbWUpIHtcbiAgICAgIGNhc2UgJ2dldC1wYXJhbS1vcHRpb25zJzoge1xuICAgICAgICBzd2l0Y2ggKGV2dC5wYXJhbS5uYW1lKSB7XG4gICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAgICAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCkpXG4gICAgICAgICAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgaWYgKFsnaW50JywgJ2JpZ2ludCcsICdkb3VibGUnLCAnZGF0ZXRpbWUnXS5pbmRleE9mKHBhcnQuZGF0YXR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgICAgLy8gZG9uJ3QgZG8gdmFsdWUgbG9va3VwcyBmb3IgbnVtZXJpY2FsIGZpZWxkc1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgICAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRWYWx1ZVF1ZXJ5KHBhcnQucGFyYW1zWzBdKSlcbiAgICAgICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRlbXBsYXRlVmFyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVRdW90ZXI6ICh2OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeU1vZGVsLnF1b3RlTGl0ZXJhbCh2KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnb3AnOlxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnVpU2VnbWVudFNydi5uZXdPcGVyYXRvcnModGhpcy5tZXRhQnVpbGRlci5nZXRPcGVyYXRvcnMocGFydC5kYXRhdHlwZSkpKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgJ3BhcnQtcGFyYW0tY2hhbmdlZCc6IHtcbiAgICAgICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgICAgICB0aGlzLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGREYXRhdHlwZVF1ZXJ5KHBhcnQucGFyYW1zWzBdKSkudGhlbigoZDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBwYXJ0LmRhdGF0eXBlID0gZFswXS50ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2FjdGlvbic6IHtcbiAgICAgICAgLy8gcmVtb3ZlIGVsZW1lbnRcbiAgICAgICAgd2hlcmVQYXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dldC1wYXJ0LWFjdGlvbnMnOiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW3sgdGV4dDogJ1JlbW92ZScsIHZhbHVlOiAncmVtb3ZlLXBhcnQnIH1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRXaGVyZU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLnF1ZXJ5TW9kZWwuaGFzVW5peEVwb2NoVGltZWNvbHVtbigpKSB7XG4gICAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICdtYWNybycsIHZhbHVlOiAnJF9fdW5peEVwb2NoRmlsdGVyJyB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ21hY3JvJywgdmFsdWU6ICckX190aW1lRmlsdGVyJyB9KSk7XG4gICAgfVxuICAgIG9wdGlvbnMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ2V4cHJlc3Npb24nLCB2YWx1ZTogJ0V4cHJlc3Npb24nIH0pKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG9wdGlvbnMpO1xuICB9XG5cbiAgYWRkV2hlcmVBY3Rpb24ocGFydDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgc3dpdGNoICh0aGlzLndoZXJlQWRkLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21hY3JvJzoge1xuICAgICAgICBjb25zdCBwYXJ0TW9kZWwgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdtYWNybycsIG5hbWU6IHRoaXMud2hlcmVBZGQudmFsdWUsIHBhcmFtczogW10gfSk7XG4gICAgICAgIGlmICh0aGlzLndoZXJlUGFydHMubGVuZ3RoID49IDEgJiYgdGhpcy53aGVyZVBhcnRzWzBdLmRlZi50eXBlID09PSAnbWFjcm8nKSB7XG4gICAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IG1hY3JvXG4gICAgICAgICAgdGhpcy53aGVyZVBhcnRzWzBdID0gcGFydE1vZGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMud2hlcmVQYXJ0cy5zcGxpY2UoMCwgMCwgcGFydE1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhpcy53aGVyZVBhcnRzLnB1c2goc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnZXhwcmVzc2lvbicsIHBhcmFtczogWyd2YWx1ZScsICc9JywgJ3ZhbHVlJ10gfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICB0aGlzLnJlc2V0UGx1c0J1dHRvbih0aGlzLndoZXJlQWRkKTtcbiAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgfVxuXG4gIGdldEdyb3VwT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgnZ3JvdXAnKSlcbiAgICAgIC50aGVuKCh0YWdzOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIXRoaXMucXVlcnlNb2RlbC5oYXNUaW1lR3JvdXAoKSkge1xuICAgICAgICAgIG9wdGlvbnMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ3RpbWUnLCB2YWx1ZTogJ3RpbWUoJF9faW50ZXJ2YWwsbm9uZSknIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAnY29sdW1uJywgdmFsdWU6IHRhZy50ZXh0IH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkR3JvdXBBY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLmdyb3VwQWRkLnZhbHVlKSB7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRoaXMuYWRkR3JvdXAodGhpcy5ncm91cEFkZC50eXBlLCB0aGlzLmdyb3VwQWRkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0UGx1c0J1dHRvbih0aGlzLmdyb3VwQWRkKTtcbiAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgfVxuXG4gIGhhbmRsZVF1ZXJ5RXJyb3IoZXJyOiBhbnkpOiBhbnlbXSB7XG4gICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gaXNzdWUgbWV0cmljIHF1ZXJ5JztcbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiIsImltcG9ydCB7IEFubm90YXRpb25FdmVudCwgRGF0YUZyYW1lLCBNZXRyaWNGaW5kVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2UsIEZldGNoUmVzcG9uc2UsIHRvRGF0YVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2VQYXJzZXIge1xuICB0cmFuc2Zvcm1NZXRyaWNGaW5kUmVzcG9uc2UocmF3OiBGZXRjaFJlc3BvbnNlPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KTogTWV0cmljRmluZFZhbHVlW10ge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UocmF3KS5kYXRhIGFzIERhdGFGcmFtZVtdO1xuXG4gICAgaWYgKCFmcmFtZXMgfHwgIWZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBmcmFtZSA9IGZyYW1lc1swXTtcblxuICAgIGNvbnN0IHZhbHVlczogTWV0cmljRmluZFZhbHVlW10gPSBbXTtcbiAgICBjb25zdCB0ZXh0RmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnX190ZXh0Jyk7XG4gICAgY29uc3QgdmFsdWVGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICdfX3ZhbHVlJyk7XG5cbiAgICBpZiAodGV4dEZpZWxkICYmIHZhbHVlRmllbGQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dEZpZWxkLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZXMucHVzaCh7IHRleHQ6ICcnICsgdGV4dEZpZWxkLnZhbHVlcy5nZXQoaSksIHZhbHVlOiAnJyArIHZhbHVlRmllbGQudmFsdWVzLmdldChpKSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVzLnB1c2goXG4gICAgICAgIC4uLmZyYW1lLmZpZWxkc1xuICAgICAgICAgIC5mbGF0TWFwKChmKSA9PiBmLnZhbHVlcy50b0FycmF5KCkpXG4gICAgICAgICAgLm1hcCgodikgPT4gKHtcbiAgICAgICAgICAgIHRleHQ6IHYsXG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQodmFsdWVzLm1hcCgodikgPT4gdi50ZXh0KSkpLm1hcCgodGV4dCkgPT4gKHtcbiAgICAgIHRleHQsXG4gICAgICB2YWx1ZTogdmFsdWVzLmZpbmQoKHYpID0+IHYudGV4dCA9PT0gdGV4dCk/LnZhbHVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIGFzeW5jIHRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZShvcHRpb25zOiBhbnksIGRhdGE6IEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2UpOiBQcm9taXNlPEFubm90YXRpb25FdmVudFtdPiB7XG4gICAgY29uc3QgZnJhbWVzID0gdG9EYXRhUXVlcnlSZXNwb25zZSh7IGRhdGE6IGRhdGEgfSkuZGF0YSBhcyBEYXRhRnJhbWVbXTtcbiAgICBpZiAoIWZyYW1lcyB8fCAhZnJhbWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCBmcmFtZSA9IGZyYW1lc1swXTtcbiAgICBjb25zdCB0aW1lRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGltZScgfHwgZi5uYW1lID09PSAndGltZV9zZWMnKTtcblxuICAgIGlmICghdGltZUZpZWxkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbWFuZGF0b3J5IHRpbWUgY29sdW1uICh3aXRoIHRpbWUgY29sdW1uIGFsaWFzKSBpbiBhbm5vdGF0aW9uIHF1ZXJ5Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0aXRsZScpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0aXRsZSBjb2x1bW4gZm9yIGFubm90YXRpb25zIGlzIGRlcHJlY2F0ZWQsIG5vdyBvbmx5IGEgY29sdW1uIG5hbWVkIHRleHQgaXMgcmV0dXJuZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lRW5kRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGltZWVuZCcpO1xuICAgIGNvbnN0IHRleHRGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0ZXh0Jyk7XG4gICAgY29uc3QgdGFnc0ZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RhZ3MnKTtcblxuICAgIGNvbnN0IGxpc3Q6IEFubm90YXRpb25FdmVudFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGltZUVuZCA9IHRpbWVFbmRGaWVsZCAmJiB0aW1lRW5kRmllbGQudmFsdWVzLmdldChpKSA/IE1hdGguZmxvb3IodGltZUVuZEZpZWxkLnZhbHVlcy5nZXQoaSkpIDogdW5kZWZpbmVkO1xuICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgYW5ub3RhdGlvbjogb3B0aW9ucy5hbm5vdGF0aW9uLFxuICAgICAgICB0aW1lOiBNYXRoLmZsb29yKHRpbWVGaWVsZC52YWx1ZXMuZ2V0KGkpKSxcbiAgICAgICAgdGltZUVuZCxcbiAgICAgICAgdGV4dDogdGV4dEZpZWxkICYmIHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpID8gdGV4dEZpZWxkLnZhbHVlcy5nZXQoaSkgOiAnJyxcbiAgICAgICAgdGFnczpcbiAgICAgICAgICB0YWdzRmllbGQgJiYgdGFnc0ZpZWxkLnZhbHVlcy5nZXQoaSlcbiAgICAgICAgICAgID8gdGFnc0ZpZWxkLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5nZXQoaSlcbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgLnNwbGl0KC9cXHMqLFxccyovKVxuICAgICAgICAgICAgOiBbXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBTcWxQYXJ0RGVmLCBTcWxQYXJ0IH0gZnJvbSAnYXBwL2FuZ3VsYXIvY29tcG9uZW50cy9zcWxfcGFydC9zcWxfcGFydCc7XG5cbmNvbnN0IGluZGV4OiBhbnlbXSA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVQYXJ0KHBhcnQ6IGFueSk6IGFueSB7XG4gIGNvbnN0IGRlZiA9IGluZGV4W3BhcnQudHlwZV07XG4gIGlmICghZGVmKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV3IFNxbFBhcnQocGFydCwgZGVmKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXIob3B0aW9uczogYW55KSB7XG4gIGluZGV4W29wdGlvbnMudHlwZV0gPSBuZXcgU3FsUGFydERlZihvcHRpb25zKTtcbn1cblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnY29sdW1uJyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIHBhcmFtczogW3sgdHlwZTogJ2NvbHVtbicsIGR5bmFtaWNMb29rdXA6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsndmFsdWUnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdleHByZXNzaW9uJyxcbiAgc3R5bGU6ICdleHByZXNzaW9uJyxcbiAgbGFiZWw6ICdFeHByOicsXG4gIHBhcmFtczogW1xuICAgIHsgbmFtZTogJ2xlZnQnLCB0eXBlOiAnc3RyaW5nJywgZHluYW1pY0xvb2t1cDogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29wJywgdHlwZTogJ3N0cmluZycsIGR5bmFtaWNMb29rdXA6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdyaWdodCcsIHR5cGU6ICdzdHJpbmcnLCBkeW5hbWljTG9va3VwOiB0cnVlIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsndmFsdWUnLCAnPScsICd2YWx1ZSddLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ21hY3JvJyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIGxhYmVsOiAnTWFjcm86JyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnYWdncmVnYXRlJyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydhdmcnLCAnY291bnQnLCAnbWluJywgJ21heCcsICdzdW0nLCAnc3RkZGV2JywgJ3ZhcmlhbmNlJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydhdmcnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdhbGlhcycsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBwYXJhbXM6IFt7IG5hbWU6ICduYW1lJywgdHlwZTogJ3N0cmluZycsIHF1b3RlOiAnZG91YmxlJyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWydhbGlhcyddLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ3RpbWUnLFxuICBzdHlsZTogJ2Z1bmN0aW9uJyxcbiAgbGFiZWw6ICd0aW1lJyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2ludGVydmFsJyxcbiAgICAgIHR5cGU6ICdpbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJyRfX2ludGVydmFsJywgJzFzJywgJzEwcycsICcxbScsICc1bScsICcxMG0nLCAnMTVtJywgJzFoJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZmlsbCcsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnbm9uZScsICdOVUxMJywgJ3ByZXZpb3VzJywgJzAnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJyRfX2ludGVydmFsJywgJ25vbmUnXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZTogY3JlYXRlUGFydCxcbn07XG4iLCJpbXBvcnQgeyBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2FkUGx1Z2luQ3NzIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIGFzIE1ldHJpY3NQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgUGFuZWxDdHJsIGFzIFBhbmVsQ3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgUXVlcnlDdHJsIGFzIFF1ZXJ5Q3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3F1ZXJ5X2N0cmwnO1xuXG5jb25zdCBQYW5lbEN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFBhbmVsQ3RybEVTNik7XG5jb25zdCBNZXRyaWNzUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShNZXRyaWNzUGFuZWxDdHJsRVM2KTtcbmNvbnN0IFF1ZXJ5Q3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoUXVlcnlDdHJsRVM2KTtcblxuZXhwb3J0IHsgUGFuZWxDdHJsLCBNZXRyaWNzUGFuZWxDdHJsLCBRdWVyeUN0cmwsIGxvYWRQbHVnaW5Dc3MgfTtcbiJdLCJuYW1lcyI6WyJkZXByZWNhdGlvbldhcm5pbmciLCJ1cmxVdGlsIiwibG9jYXRpb25TZWFyY2hUb09iamVjdCIsImxvY2F0aW9uU2VydmljZSIsIm5hdmlnYXRpb25Mb2dnZXIiLCJERUZBVUxUX1BPUlRTIiwiaHR0cCIsImh0dHBzIiwiZnRwIiwiQW5ndWxhckxvY2F0aW9uV3JhcHBlciIsImNvbnN0cnVjdG9yIiwiYWJzVXJsIiwid3JhcEluRGVwcmVjYXRpb25XYXJuaW5nIiwiaGFzaCIsImhvc3QiLCJwYXRoIiwicG9ydCIsInByb3RvY29sIiwicmVwbGFjZSIsInNlYXJjaCIsInN0YXRlIiwidXJsIiwiZm4iLCJyZXBsYWNlbWVudCIsInNlbGYiLCJ3cmFwcGVyIiwibmFtZSIsImFwcGx5IiwiYXJndW1lbnRzIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJuZXdIYXNoIiwiZ2V0TG9jYXRpb24iLCJzbGljZSIsIkVycm9yIiwiVVJMIiwiaHJlZiIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJwYXJzZWRQYXRoIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInB1c2giLCJsZW5ndGgiLCJwYXJzZUludCIsInBhcmFtVmFsdWUiLCJnZXRTZWFyY2hPYmplY3QiLCJwYXJ0aWFsIiwibmV3UXVlcnkiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwidXBkYXRlZFVybCIsInJlbmRlclVybCIsIm5ld1VybCIsInRyaW0iLCJjbG9uZSIsIlNxbFBhcnREZWYiLCJvcHRpb25zIiwidHlwZSIsImxhYmVsIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJzdHlsZSIsIndyYXBPcGVuIiwid3JhcENsb3NlIiwic2VwYXJhdG9yIiwicGFyYW1zIiwiZGVmYXVsdFBhcmFtcyIsIlNxbFBhcnQiLCJwYXJ0IiwiZGVmIiwibWVzc2FnZSIsImRhdGF0eXBlIiwidXBkYXRlUGFyYW0iLCJzdHJWYWx1ZSIsImluZGV4Iiwib3B0aW9uYWwiLCJzcGxpY2UiLCJpc0FycmF5IiwiTG9hZGluZ1N0YXRlIiwiUGFuZWxFdmVudHMiLCJ0b0RhdGFGcmFtZURUTyIsInRvTGVnYWN5UmVzcG9uc2VEYXRhIiwiUGFuZWxDdHJsIiwiYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMiLCJNZXRyaWNzUGFuZWxDdHJsIiwiJHNjb3BlIiwiJGluamVjdG9yIiwibmV4dCIsImRhdGEiLCJwYW5lbERhdGEiLCJsb2FkaW5nIiwicHJvY2Vzc0RhdGFFcnJvciIsImVycm9yIiwiTG9hZGluZyIsImFuZ3VsYXJEaXJ0eUNoZWNrIiwicmVxdWVzdCIsInRpbWVJbmZvIiwidGltZVJhbmdlIiwicmFuZ2UiLCJ1c2VEYXRhRnJhbWVzIiwiaGFuZGxlRGF0YUZyYW1lcyIsInNlcmllcyIsImxlZ2FjeSIsIm1hcCIsInYiLCJoYW5kbGVRdWVyeVJlc3VsdCIsImNvbnRleHRTcnYiLCJnZXQiLCJkYXRhc291cmNlU3J2IiwidGltZVNydiIsInRlbXBsYXRlU3J2IiwicGFuZWwiLCJkYXRhc291cmNlIiwiZXZlbnRzIiwib24iLCJyZWZyZXNoIiwib25NZXRyaWNzUGFuZWxSZWZyZXNoIiwiYmluZCIsInBhbmVsVGVhcmRvd24iLCJvblBhbmVsVGVhckRvd24iLCJjb21wb25lbnREaWRNb3VudCIsIm9uTWV0cmljc1BhbmVsTW91bnRlZCIsInF1ZXJ5UnVubmVyIiwiZ2V0UXVlcnlSdW5uZXIiLCJxdWVyeVN1YnNjcmlwdGlvbiIsImdldERhdGEiLCJ3aXRoVHJhbnNmb3JtcyIsIndpdGhGaWVsZENvbmZpZyIsInN1YnNjcmliZSIsInBhbmVsRGF0YU9ic2VydmVyIiwidW5zdWJzY3JpYmUiLCJvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSIsInNuYXBzaG90RGF0YSIsInVwZGF0ZVRpbWVSYW5nZSIsIkRvbmUiLCIkdGltZW91dCIsImVtaXQiLCJkYXRhU25hcHNob3RMb2FkIiwic2NvcGVkVmFycyIsInRoZW4iLCJpc3N1ZVF1ZXJpZXMiLCJjYXRjaCIsImVyciIsImNhbmNlbGxlZCIsImNvbnNvbGUiLCJsb2ciLCIkcm9vdCIsIiQkcGhhc2UiLCIkZGlnZXN0IiwibmV3VGltZURhdGEiLCJydW4iLCJxdWVyaWVzIiwidGFyZ2V0cyIsInBhbmVsSWQiLCJpZCIsImRhc2hib2FyZElkIiwiZGFzaGJvYXJkIiwidGltZXpvbmUiLCJnZXRUaW1lem9uZSIsIm1heERhdGFQb2ludHMiLCJ3aWR0aCIsIm1pbkludGVydmFsIiwiaW50ZXJ2YWwiLCJjYWNoZVRpbWVvdXQiLCJ0cmFuc2Zvcm1hdGlvbnMiLCJzbmFwc2hvdCIsImZyYW1lIiwiZGF0YUZyYW1lc1JlY2VpdmVkIiwicmVzdWx0IiwiZGF0YVJlY2VpdmVkIiwiaXNTdHJpbmciLCJFdmVudEJ1c1NydiIsImNvbmZpZyIsInByb2ZpbGVyIiwicGx1Z2luIiwiJHBhcmVudCIsImVkaXRvclRhYnMiLCIkbG9jYXRpb24iLCJ0aW1pbmciLCJwYW5lbHMiLCJwbHVnaW5JZCIsInBsdWdpbk5hbWUiLCIkb24iLCJwYW5lbERpZE1vdW50IiwiaW5pdGlhbGl6ZWQiLCJwYW5lbEluaXRpYWxpemVkIiwicmVuZGVyaW5nQ29tcGxldGVkIiwicHVibGlzaEFwcEV2ZW50IiwiZXZlbnQiLCJwYXlsb2FkIiwiYXBwRXZlbnQiLCJpbml0RWRpdE1vZGUiLCJlZGl0TW9kZUluaXRpYXRlZCIsImVkaXRNb2RlSW5pdGlhbGl6ZWQiLCJhZGRFZGl0b3JUYWIiLCJ0aXRsZSIsImRpcmVjdGl2ZUZuIiwiaWNvbiIsImVkaXRvclRhYiIsInRlbXBsYXRlVXJsIiwiZ2V0RXh0ZW5kZWRNZW51IiwibWVudSIsImluaXRQYW5lbEFjdGlvbnMiLCJnZXRBZGRpdGlvbmFsTWVudUl0ZW1zIiwib3RoZXJQYW5lbEluRnVsbHNjcmVlbiIsInJlbmRlciIsImluZGV4T2YiLCJRdWVyeUN0cmwiLCJwYW5lbEN0cmwiLCJjdHJsIiwidGFyZ2V0IiwiaXNMYXN0UXVlcnkiLCJQYXNzd29yZEZpZWxkRW51bSIsImNyZWF0ZVJlc2V0SGFuZGxlciIsImZpZWxkIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2VjdXJlSnNvbkZpZWxkcyIsInNlY3VyZUpzb25EYXRhIiwiY3JlYXRlQ2hhbmdlSGFuZGxlciIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIl9tYXAiLCJsYXN0VmFsdWVGcm9tIiwib2YiLCJjYXRjaEVycm9yIiwibWFwVG8iLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJnZXRCYWNrZW5kU3J2IiwidG9UZXN0aW5nU3RhdHVzIiwiZ2V0VGVtcGxhdGVTcnYiLCJNeVNRTFF1ZXJ5TW9kZWwiLCJnZXRTZWFyY2hGaWx0ZXJTY29wZWRWYXIiLCJSZXNwb25zZVBhcnNlciIsIk15c3FsRGF0YXNvdXJjZSIsImluc3RhbmNlU2V0dGluZ3MiLCJ2YXJpYWJsZSIsIm11bHRpIiwiaW5jbHVkZUFsbCIsInF1ZXJ5TW9kZWwiLCJxdW90ZUxpdGVyYWwiLCJxdW90ZWRWYWx1ZXMiLCJqb2luIiwicmVzcG9uc2VQYXJzZXIiLCJzZXR0aW5nc0RhdGEiLCJqc29uRGF0YSIsInRpbWVJbnRlcnZhbCIsImludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzIiwiZXhwYW5kZWRRdWVyaWVzIiwicXVlcnkiLCJleHBhbmRlZFF1ZXJ5IiwiZ2V0UmVmIiwicmF3U3FsIiwiaW50ZXJwb2xhdGVWYXJpYWJsZSIsInJhd1F1ZXJ5IiwiZmlsdGVyUXVlcnkiLCJoaWRlIiwiYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyIsInJlZklkIiwiZm9ybWF0IiwiYW5ub3RhdGlvblF1ZXJ5IiwiYW5ub3RhdGlvbiIsIlByb21pc2UiLCJyZWplY3QiLCJmZXRjaCIsIm1ldGhvZCIsImZyb20iLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0byIsInJlcXVlc3RJZCIsInBpcGUiLCJyZXMiLCJ0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2UiLCJtZXRyaWNGaW5kUXVlcnkiLCJvcHRpb25hbE9wdGlvbnMiLCJ3aWxkY2FyZENoYXIiLCJpbnRlcnBvbGF0ZWRRdWVyeSIsInJzcCIsInRyYW5zZm9ybU1ldHJpY0ZpbmRSZXNwb25zZSIsInRlc3REYXRhc291cmNlIiwiaW50ZXJ2YWxNcyIsInN0YXR1cyIsInRhcmdldENvbnRhaW5zVGVtcGxhdGUiLCJidWlsZFF1ZXJ5IiwiY29udGFpbnNUZW1wbGF0ZSIsIk15c3FsTWV0YVF1ZXJ5IiwiZ2V0T3BlcmF0b3JzIiwicXVvdGVJZGVudEFzTGl0ZXJhbCIsInVucXVvdGVJZGVudGlmaWVyIiwiZmluZE1ldHJpY1RhYmxlIiwiYnVpbGRUYWJsZUNvbnN0cmFpbnQiLCJ0YWJsZSIsImluY2x1ZGVzIiwicGFydHMiLCJzcGxpdCIsImJ1aWxkVGFibGVRdWVyeSIsImJ1aWxkQ29sdW1uUXVlcnkiLCJ0aW1lQ29sdW1uIiwiYnVpbGRWYWx1ZVF1ZXJ5IiwiY29sdW1uIiwiYnVpbGREYXRhdHlwZVF1ZXJ5IiwiRGF0YVNvdXJjZVBsdWdpbiIsIk15c3FsUXVlcnlDdHJsIiwiTXlzcWxDb25maWdDdHJsIiwib25QYXNzd29yZFJlc2V0IiwiUGFzc3dvcmQiLCJvblBhc3N3b3JkQ2hhbmdlIiwiZGVmYXVsdFF1ZXJ5IiwiTXlzcWxBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsIkRhdGFzb3VyY2UiLCJDb25maWdDdHJsIiwiQW5ub3RhdGlvbnNRdWVyeUN0cmwiLCJzZXRRdWVyeUN0cmwiLCJzZXRDb25maWdDdHJsIiwic2V0QW5ub3RhdGlvblF1ZXJ5Q3RybCIsImZpbmQiLCJtZXRyaWNDb2x1bW4iLCJncm91cCIsIndoZXJlIiwic2VsZWN0IiwiaW50ZXJwb2xhdGVRdWVyeVN0ciIsInF1b3RlSWRlbnRpZmllciIsImVzY2FwZUxpdGVyYWwiLCJoYXNUaW1lR3JvdXAiLCJnIiwiaGFzTWV0cmljQ29sdW1uIiwiZGVmYXVsdEZvcm1hdEZuIiwiZXNjYXBlZFZhbHVlcyIsImludGVycG9sYXRlIiwiaGFzVW5peEVwb2NoVGltZWNvbHVtbiIsInRpbWVDb2x1bW5UeXBlIiwiYnVpbGRUaW1lQ29sdW1uIiwiYWxpYXMiLCJ0aW1lR3JvdXAiLCJtYWNybyIsImFyZ3MiLCJidWlsZE1ldHJpY0NvbHVtbiIsImJ1aWxkVmFsdWVDb2x1bW5zIiwiYnVpbGRWYWx1ZUNvbHVtbiIsImNvbHVtbk5hbWUiLCJhZ2dyZWdhdGUiLCJmdW5jIiwiYnVpbGRXaGVyZUNsYXVzZSIsImNvbmRpdGlvbnMiLCJ0YWciLCJidWlsZEdyb3VwQ2xhdXNlIiwiZ3JvdXBTZWN0aW9uIiwiaSIsImZpbHRlciIsImZpbmRJbmRleCIsImFwcEV2ZW50cyIsIlNob3dDb25maXJtTW9kYWxFdmVudCIsInNxbFBhcnQiLCJ1aVNlZ21lbnRTcnYiLCJtZXRhQnVpbGRlciIsInVwZGF0ZVByb2plY3Rpb24iLCJmb3JtYXRzIiwidGV4dCIsInNlZ21lbnQiLCJuZXdTZWdtZW50IiwidGFibGVTZWdtZW50IiwiaHRtbCIsInRpbWVDb2x1bW5TZWdtZW50IiwidXBkYXRlUmF3U3FsQW5kUmVmcmVzaCIsImZha2UiLCJtZXRyaWNDb2x1bW5TZWdtZW50IiwiYnVpbGRTZWxlY3RNZW51Iiwid2hlcmVBZGQiLCJuZXdQbHVzQnV0dG9uIiwiZ3JvdXBBZGQiLCJvbkRhdGFSZWNlaXZlZCIsImRhdGFFcnJvciIsIm9uRGF0YUVycm9yIiwic2VsZWN0UGFydHMiLCJjcmVhdGUiLCJuIiwid2hlcmVQYXJ0cyIsImdyb3VwUGFydHMiLCJ1cGRhdGVQZXJzaXN0ZWRQYXJ0cyIsImFnZ3JlZ2F0ZXMiLCJzdWJtZW51Iiwic2VsZWN0TWVudSIsInRvZ2dsZUVkaXRvck1vZGUiLCJwdWJsaXNoIiwidGV4dDIiLCJ5ZXNUZXh0Iiwib25Db25maXJtIiwiJGV2YWxBc3luYyIsInJlc2V0UGx1c0J1dHRvbiIsImJ1dHRvbiIsInBsdXNCdXR0b24iLCJnZXRUYWJsZVNlZ21lbnRzIiwidHJhbnNmb3JtVG9TZWdtZW50cyIsImhhbmRsZVF1ZXJ5RXJyb3IiLCJ0YWJsZUNoYW5nZWQiLCJ0YXNrMSIsInIiLCJ0aW1lQ29sdW1uQ2hhbmdlZCIsInRhc2syIiwiYWxsIiwiZ2V0VGltZUNvbHVtblNlZ21lbnRzIiwicGFydE1vZGVsIiwiZ2V0TWV0cmljQ29sdW1uU2VnbWVudHMiLCJhZGROb25lIiwibWV0cmljQ29sdW1uQ2hhbmdlZCIsImRhdGFMaXN0IiwibGFzdFF1ZXJ5RXJyb3IiLCJsYXN0UXVlcnlNZXRhIiwibWV0YSIsInJlc3VsdHMiLCJxdWVyeVJlcyIsInNlZ21lbnRzIiwiZXhwYW5kYWJsZSIsImFkZFRlbXBsYXRlVmFycyIsImdldFZhcmlhYmxlcyIsInRlbXBsYXRlUXVvdGVyIiwidW5zaGlmdCIsImZpbmRBZ2dyZWdhdGVJbmRleCIsInAiLCJmaW5kV2luZG93SW5kZXgiLCJhZGRTZWxlY3RQYXJ0IiwiaXRlbSIsInN1Ykl0ZW0iLCJwYXJ0VHlwZSIsImFkZEFsaWFzIiwiYWRkR3JvdXAiLCJhZ2dJbmRleCIsIndpbmRvd0luZGV4IiwicmVtb3ZlU2VsZWN0UGFydCIsIm1vZGVsc0luZGV4IiwicGFydEluZGV4IiwiaGFuZGxlU2VsZWN0UGFydEV2ZW50IiwiZXZ0IiwicmVzb2x2ZSIsImhhbmRsZUdyb3VwUGFydEV2ZW50IiwicmVtb3ZlR3JvdXAiLCJzb21lIiwicyIsImhhbmRsZVdoZXJlUGFydEV2ZW50IiwicGFyYW0iLCJuZXdPcGVyYXRvcnMiLCJkIiwiZ2V0V2hlcmVPcHRpb25zIiwiYWRkV2hlcmVBY3Rpb24iLCJnZXRHcm91cE9wdGlvbnMiLCJ0YWdzIiwiYWRkR3JvdXBBY3Rpb24iLCJ0b0RhdGFRdWVyeVJlc3BvbnNlIiwicmF3IiwiZnJhbWVzIiwidmFsdWVzIiwidGV4dEZpZWxkIiwiZmllbGRzIiwiZiIsInZhbHVlRmllbGQiLCJmbGF0TWFwIiwidG9BcnJheSIsIkFycmF5IiwiU2V0IiwidGltZUZpZWxkIiwidGltZUVuZEZpZWxkIiwidGFnc0ZpZWxkIiwibGlzdCIsInRpbWVFbmQiLCJNYXRoIiwiZmxvb3IiLCJ0aW1lIiwiY3JlYXRlUGFydCIsInJlZ2lzdGVyIiwiZHluYW1pY0xvb2t1cCIsInF1b3RlIiwibWFrZUNsYXNzRVM1Q29tcGF0aWJsZSIsImxvYWRQbHVnaW5Dc3MiLCJNZXRyaWNzUGFuZWxDdHJsRVM2IiwiUGFuZWxDdHJsRVM2IiwiUXVlcnlDdHJsRVM2Il0sInNvdXJjZVJvb3QiOiIifQ==