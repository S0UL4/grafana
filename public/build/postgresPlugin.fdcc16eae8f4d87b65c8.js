"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["postgresPlugin"],{

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

/***/ "./public/app/plugins/datasource/postgres/config_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresConfigCtrl": () => (/* binding */ PostgresConfigCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/datasources/utils/passwordHandlers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PostgresConfigCtrl {
  /** @ngInject */
  constructor($scope, datasourceSrv) {
    _defineProperty(this, "datasourceSrv", void 0);

    _defineProperty(this, "showTimescaleDBHelp", void 0);

    _defineProperty(this, "onPasswordReset", void 0);

    _defineProperty(this, "onPasswordChange", void 0);

    _defineProperty(this, "postgresVersions", [{
      name: '9.3',
      value: 903
    }, {
      name: '9.4',
      value: 904
    }, {
      name: '9.5',
      value: 905
    }, {
      name: '9.6',
      value: 906
    }, {
      name: '10',
      value: 1000
    }, {
      name: '11',
      value: 1100
    }, {
      name: '12+',
      value: 1200
    }]);

    this.current = $scope.ctrl.current;
    this.datasourceSrv = datasourceSrv;
    this.current.jsonData.sslmode = this.current.jsonData.sslmode || 'verify-full';
    this.current.jsonData.tlsConfigurationMethod = this.current.jsonData.tlsConfigurationMethod || 'file-path';
    this.current.jsonData.postgresVersion = this.current.jsonData.postgresVersion || 903;
    this.showTimescaleDBHelp = false;
    this.autoDetectFeatures();
    this.onPasswordReset = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createResetHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
    this.onPasswordChange = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createChangeHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
    this.tlsModeMapping();
  }

  autoDetectFeatures() {
    if (!this.current.id) {
      return;
    }

    this.datasourceSrv.loadDatasource(this.current.name).then(ds => {
      return ds.getVersion().then(version => {
        version = Number(version[0].text); // timescaledb is only available for 9.6+

        if (version >= 906) {
          ds.getTimescaleDBVersion().then(version => {
            if (version.length === 1) {
              this.current.jsonData.timescaledb = true;
            }
          });
        }

        const major = Math.trunc(version / 100);
        const minor = version % 100;
        let name = String(major);

        if (version < 1000) {
          name = String(major) + '.' + String(minor);
        }

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.postgresVersions, p => p.value === version)) {
          this.postgresVersions.push({
            name: name,
            value: version
          });
        }

        this.current.jsonData.postgresVersion = version;
      });
    });
  }

  toggleTimescaleDBHelp() {
    this.showTimescaleDBHelp = !this.showTimescaleDBHelp;
  }

  tlsModeMapping() {
    if (this.current.jsonData.sslmode === 'disable') {
      this.current.jsonData.tlsAuth = false;
      this.current.jsonData.tlsAuthWithCACert = false;
      this.current.jsonData.tlsSkipVerify = true;
    } else {
      this.current.jsonData.tlsAuth = true;
      this.current.jsonData.tlsAuthWithCACert = true;
      this.current.jsonData.tlsSkipVerify = false;
    }
  } // the value portion is derived from postgres server_version_num/100


}
PostgresConfigCtrl.$inject = ["$scope", "datasourceSrv"];

_defineProperty(PostgresConfigCtrl, "templateUrl", 'partials/config.html');

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresDatasource": () => (/* binding */ PostgresDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/postgres/postgres_query_model.ts");
/* harmony import */ var _features_variables_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/postgres/response_parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class PostgresDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)()) {
    super(instanceSettings);

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "jsonData", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "interpolateVariable", (value, variable) => {
      if (typeof value === 'string') {
        if (variable.multi || variable.includeAll) {
          return this.queryModel.quoteLiteral(value);
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
    this.jsonData = instanceSettings.jsonData;
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.queryModel = new app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_4__["default"]({});
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
    const queryModel = new app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](target, this.templateSrv, scopedVars);
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

  _metaRequest(rawSql) {
    const refId = 'meta';
    const query = {
      refId: refId,
      datasource: this.getRef(),
      rawSql,
      format: 'table'
    };
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        queries: [query]
      },
      requestId: refId
    });
  }

  getVersion() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this._metaRequest("SELECT current_setting('server_version_num')::int/100"));
  }

  getTimescaleDBVersion() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this._metaRequest("SELECT extversion FROM pg_extension WHERE extname = 'timescaledb'"));
  }

  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this._metaRequest('SELECT 1')).then(() => {
      return {
        status: 'success',
        message: 'Database Connection OK'
      };
    }).catch(err => {
      return (0,_grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__.toTestingStatus)(err);
    });
  }

  targetContainsTemplate(target) {
    let rawSql = '';

    if (target.rawQuery) {
      rawSql = target.rawSql;
    } else {
      const query = new app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](target);
      rawSql = query.buildQuery();
    }

    rawSql = rawSql.replace('$__', '');
    return this.templateSrv.containsTemplate(rawSql);
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/meta_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresMetaQuery": () => (/* binding */ PostgresMetaQuery)
/* harmony export */ });
class PostgresMetaQuery {
  constructor(target, queryModel) {
    this.target = target;
    this.queryModel = queryModel;
  }

  getOperators(datatype) {
    switch (datatype) {
      case 'float4':
      case 'float8':
        {
          return ['=', '!=', '<', '<=', '>', '>='];
        }

      case 'text':
      case 'varchar':
      case 'char':
        {
          return ['=', '!=', '<', '<=', '>', '>=', 'IN', 'NOT IN', 'LIKE', 'NOT LIKE', '~', '~*', '!~', '!~*'];
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
    let query = `
SELECT
	quote_ident(table_name) as table_name,
	( SELECT
	    quote_ident(column_name) as column_name
	  FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name IN ('timestamptz','timestamp')
    ORDER BY ordinal_position LIMIT 1
  ) AS time_column,
  ( SELECT
      quote_ident(column_name) AS column_name
    FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name='float8'
    ORDER BY ordinal_position LIMIT 1
  ) AS value_column
FROM information_schema.tables t
WHERE `;
    query += this.buildSchemaConstraint();
    query += ` AND
  EXISTS
  ( SELECT 1
    FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name IN ('timestamptz','timestamp')
  ) AND
  EXISTS
  ( SELECT 1
    FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name='float8'
  )
LIMIT 1
;`;
    return query;
  }

  buildSchemaConstraint() {
    // quote_ident protects hyphenated schemes
    const query = `
quote_ident(table_schema) IN (
  SELECT
    CASE WHEN trim(s[i]) = '"$user"' THEN user ELSE trim(s[i]) END
  FROM
    generate_series(
      array_lower(string_to_array(current_setting('search_path'),','),1),
      array_upper(string_to_array(current_setting('search_path'),','),1)
    ) as i,
    string_to_array(current_setting('search_path'),',') s
)`;
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
      query = this.buildSchemaConstraint();
      query += ' AND table_name = ' + this.quoteIdentAsLiteral(table);
      return query;
    }
  }

  buildTableQuery() {
    let query = 'SELECT quote_ident(table_name) FROM information_schema.tables WHERE ';
    query += this.buildSchemaConstraint();
    query += ' ORDER BY table_name';
    return query;
  }

  buildColumnQuery(type) {
    let query = 'SELECT quote_ident(column_name) FROM information_schema.columns WHERE ';
    query += this.buildTableConstraint(this.target.table);

    switch (type) {
      case 'time':
        {
          query += " AND data_type IN ('timestamp without time zone','timestamp with time zone','bigint','integer','double precision','real')";
          break;
        }

      case 'metric':
        {
          query += " AND data_type IN ('text','character','character varying')";
          break;
        }

      case 'value':
        {
          query += " AND data_type IN ('bigint','integer','double precision','real','numeric')";
          query += ' AND column_name <> ' + this.quoteIdentAsLiteral(this.target.timeColumn);
          break;
        }

      case 'group':
        {
          query += " AND data_type IN ('text','character','character varying','uuid')";
          break;
        }
    }

    query += ' ORDER BY column_name';
    return query;
  }

  buildValueQuery(column) {
    let query = 'SELECT DISTINCT quote_literal(' + column + ')';
    query += ' FROM ' + this.target.table;
    query += ' WHERE $__timeFilter(' + this.target.timeColumn + ')';
    query += ' AND ' + column + ' IS NOT NULL';
    query += ' ORDER BY 1 LIMIT 100';
    return query;
  }

  buildDatatypeQuery(column) {
    let query = 'SELECT udt_name FROM information_schema.columns WHERE ';
    query += this.buildTableConstraint(this.target.table);
    query += ' AND column_name = ' + this.quoteIdentAsLiteral(column);
    return query;
  }

  buildAggregateQuery() {
    let query = 'SELECT DISTINCT proname FROM pg_aggregate ';
    query += 'INNER JOIN pg_proc ON pg_aggregate.aggfnoid = pg_proc.oid ';
    query += 'INNER JOIN pg_type ON pg_type.oid=pg_proc.prorettype ';
    query += "WHERE pronargs=1 AND typname IN ('float8') AND aggkind='n' ORDER BY 1";
    return query;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _config_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/postgres/config_ctrl.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/postgres/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/postgres/query_ctrl.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const defaultQuery = `SELECT
  extract(epoch from time_column) AS time,
  text_column as text,
  tags_column as tags
FROM
  metric_table
WHERE
  $__timeFilter(time_column)
`;

class PostgresAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.rawQuery = this.annotation.rawQuery || defaultQuery;
  }

}

PostgresAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(PostgresAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.PostgresDatasource).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_3__.PostgresQueryCtrl).setConfigCtrl(_config_ctrl__WEBPACK_IMPORTED_MODULE_1__.PostgresConfigCtrl).setAnnotationQueryCtrl(PostgresAnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/postgres_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostgresQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PostgresQueryModel {
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
    return '"' + String(value).replace(/"/g, '""') + '"';
  }

  quoteLiteral(value) {
    return "'" + String(value).replace(/'/g, "''") + "'";
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
    return ['int4', 'int8', 'float4', 'float8', 'numeric'].indexOf(this.target.timeColumnType) > -1;
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
    const aggregate = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'aggregate' || g.type === 'percentile');
    const windows = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'window' || g.type === 'moving_window');

    if (aggregate) {
      const func = aggregate.params[0];

      switch (aggregate.type) {
        case 'aggregate':
          if (func === 'first' || func === 'last') {
            query = func + '(' + query + ',' + this.target.timeColumn + ')';
          } else {
            query = func + '(' + query + ')';
          }

          break;

        case 'percentile':
          query = func + '(' + aggregate.params[1] + ') WITHIN GROUP (ORDER BY ' + query + ')';
          break;
      }
    }

    if (windows) {
      const overParts = [];

      if (this.hasMetricColumn()) {
        overParts.push('PARTITION BY ' + this.target.metricColumn);
      }

      overParts.push('ORDER BY ' + this.buildTimeColumn(false));
      const over = overParts.join(' ');
      let curr;
      let prev;

      switch (windows.type) {
        case 'window':
          switch (windows.params[0]) {
            case 'delta':
              curr = query;
              prev = 'lag(' + curr + ') OVER (' + over + ')';
              query = curr + ' - ' + prev;
              break;

            case 'increase':
              curr = query;
              prev = 'lag(' + curr + ') OVER (' + over + ')';
              query = '(CASE WHEN ' + curr + ' >= ' + prev + ' THEN ' + curr + ' - ' + prev;
              query += ' WHEN ' + prev + ' IS NULL THEN NULL ELSE ' + curr + ' END)';
              break;

            case 'rate':
              let timeColumn = this.target.timeColumn;

              if (aggregate) {
                timeColumn = 'min(' + timeColumn + ')';
              }

              curr = query;
              prev = 'lag(' + curr + ') OVER (' + over + ')';
              query = '(CASE WHEN ' + curr + ' >= ' + prev + ' THEN ' + curr + ' - ' + prev;
              query += ' WHEN ' + prev + ' IS NULL THEN NULL ELSE ' + curr + ' END)';
              query += '/extract(epoch from ' + timeColumn + ' - lag(' + timeColumn + ') OVER (' + over + '))';
              break;

            default:
              query = windows.params[0] + '(' + query + ') OVER (' + over + ')';
              break;
          }

          break;

        case 'moving_window':
          query = windows.params[0] + '(' + query + ') OVER (' + over + ' ROWS ' + windows.params[1] + ' PRECEDING)';
          break;
      }
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
    query += '\nORDER BY 1';

    if (this.hasMetricColumn()) {
      query += ',2';
    }

    return query;
  }

}
PostgresQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresQueryCtrl": () => (/* binding */ PostgresQueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _meta_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/postgres/meta_query.ts");
/* harmony import */ var _postgres_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/postgres/postgres_query_model.ts");
/* harmony import */ var _sql_part__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/postgres/sql_part.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const defaultQuery = `SELECT
  $__time(time_column),
  value1
FROM
  metric_table
WHERE
  $__timeFilter(time_column)
`;
class PostgresQueryCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__.QueryCtrl {
  /** @ngInject */
  constructor($scope, $injector, templateSrv, uiSegmentSrv) {
    super($scope, $injector);

    _defineProperty(this, "formats", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "metaBuilder", void 0);

    _defineProperty(this, "lastQueryMeta", void 0);

    _defineProperty(this, "lastQueryError", void 0);

    _defineProperty(this, "showHelp", false);

    _defineProperty(this, "tableSegment", void 0);

    _defineProperty(this, "whereAdd", void 0);

    _defineProperty(this, "timeColumnSegment", void 0);

    _defineProperty(this, "metricColumnSegment", void 0);

    _defineProperty(this, "selectMenu", []);

    _defineProperty(this, "selectParts", [[]]);

    _defineProperty(this, "groupParts", []);

    _defineProperty(this, "whereParts", []);

    _defineProperty(this, "groupAdd", void 0);

    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target = this.target;
    this.queryModel = new _postgres_query_model__WEBPACK_IMPORTED_MODULE_6__["default"](this.target, templateSrv, this.panel.scopedVars);
    this.metaBuilder = new _meta_query__WEBPACK_IMPORTED_MODULE_5__.PostgresMetaQuery(this.target, this.queryModel);
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

  timescaleAggCheck() {
    const aggIndex = this.findAggregateIndex(this.selectParts[0]); // add or remove TimescaleDB aggregate functions as needed

    if (aggIndex !== -1) {
      const baseOpts = this.selectParts[0][aggIndex].def.params[0].baseOptions;
      const timescaleOpts = baseOpts.concat(this.selectParts[0][aggIndex].def.params[0].timescaleOptions);

      if (this.datasource.jsonData.timescaledb === true) {
        this.selectParts[0][aggIndex].def.params[0].options = timescaleOpts;
      } else {
        this.selectParts[0][aggIndex].def.params[0].options = baseOpts;
      }
    }
  }

  updateProjection() {
    this.selectParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, parts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create).filter(n => n);
    });
    this.timescaleAggCheck();
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
    this.timescaleAggCheck();
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
    this.selectMenu = [];
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
    }; // first and last aggregate are timescaledb specific

    if (this.datasource.jsonData.timescaledb === true) {
      aggregates.submenu.push({
        text: 'First',
        value: 'first'
      });
      aggregates.submenu.push({
        text: 'Last',
        value: 'last'
      });
    }

    this.selectMenu.push(aggregates); // ordered set aggregates require postgres 9.4+

    if (this.datasource.jsonData.postgresVersion >= 904) {
      const aggregates2 = {
        text: 'Ordered-Set Aggregate Functions',
        value: 'percentile',
        submenu: [{
          text: 'Percentile (continuous)',
          value: 'percentile_cont'
        }, {
          text: 'Percentile (discrete)',
          value: 'percentile_disc'
        }]
      };
      this.selectMenu.push(aggregates2);
    }

    const windows = {
      text: 'Window Functions',
      value: 'window',
      submenu: [{
        text: 'Delta',
        value: 'delta'
      }, {
        text: 'Increase',
        value: 'increase'
      }, {
        text: 'Rate',
        value: 'rate'
      }, {
        text: 'Sum',
        value: 'sum'
      }, {
        text: 'Moving Average',
        value: 'avg',
        type: 'moving_window'
      }]
    };
    this.selectMenu.push(windows);
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
      app_core_app_events__WEBPACK_IMPORTED_MODULE_2__["default"].publish(new app_types_events__WEBPACK_IMPORTED_MODULE_4__.ShowConfirmModalEvent({
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
    button.type = plusButton.type;
    button.fake = plusButton.fake;
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
            case 'aggregate':
              return this.datasource.metricFindQuery(this.metaBuilder.buildAggregateQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));

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
              if (['int4', 'int8', 'float4', 'float8', 'timestamp', 'timestamptz'].indexOf(part.datatype) > -1) {
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
    this.addGroup(this.groupAdd.type, this.groupAdd.value);
    this.resetPlusButton(this.groupAdd);
    this.updateRawSqlAndRefresh();
  }

  handleQueryError(err) {
    this.error = err.message || 'Failed to issue metric query';
    return [];
  }

}
PostgresQueryCtrl.$inject = ["$scope", "$injector", "templateSrv", "uiSegmentSrv"];

_defineProperty(PostgresQueryCtrl, "templateUrl", 'partials/query.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/response_parser.ts":
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
      throw new Error('Missing mandatory time column (with time column alias) in annotation query');
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

/***/ "./public/app/plugins/datasource/postgres/sql_part.ts":
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
    options: [],
    baseOptions: ['avg', 'count', 'min', 'max', 'sum', 'stddev', 'variance'],
    timescaleOptions: ['first', 'last']
  }],
  defaultParams: ['avg']
});
register({
  type: 'percentile',
  label: 'Aggregate:',
  style: 'label',
  params: [{
    name: 'name',
    type: 'string',
    options: ['percentile_cont', 'percentile_disc']
  }, {
    name: 'fraction',
    type: 'number',
    options: ['0.5', '0.75', '0.9', '0.95', '0.99']
  }],
  defaultParams: ['percentile_cont', '0.95']
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
register({
  type: 'window',
  style: 'label',
  params: [{
    name: 'function',
    type: 'string',
    options: ['delta', 'increase', 'rate', 'sum']
  }],
  defaultParams: ['increase']
});
register({
  type: 'moving_window',
  style: 'label',
  label: 'Moving Window:',
  params: [{
    name: 'function',
    type: 'string',
    options: ['avg']
  }, {
    name: 'window_size',
    type: 'number',
    options: ['3', '5', '7', '10', '20']
  }],
  defaultParams: ['avg', '5']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGdyZXNQbHVnaW4uZmRjYzE2ZWFlOGY0ZDg3YjY1YzguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxNQUFNSyxhQUFxQyxHQUFHO0VBQUVDLElBQUksRUFBRSxFQUFSO0VBQVlDLEtBQUssRUFBRSxHQUFuQjtFQUF3QkMsR0FBRyxFQUFFO0FBQTdCLENBQTlDO0FBRU8sTUFBTUMsc0JBQU4sQ0FBNkI7RUFDbENDLFdBQVcsR0FBRztJQUNaLEtBQUtDLE1BQUwsR0FBYyxLQUFLQyx3QkFBTCxDQUE4QixLQUFLRCxNQUFuQyxDQUFkO0lBQ0EsS0FBS0UsSUFBTCxHQUFZLEtBQUtELHdCQUFMLENBQThCLEtBQUtDLElBQW5DLENBQVo7SUFDQSxLQUFLQyxJQUFMLEdBQVksS0FBS0Ysd0JBQUwsQ0FBOEIsS0FBS0UsSUFBbkMsQ0FBWjtJQUNBLEtBQUtDLElBQUwsR0FBWSxLQUFLSCx3QkFBTCxDQUE4QixLQUFLRyxJQUFuQyxDQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZLEtBQUtKLHdCQUFMLENBQThCLEtBQUtJLElBQW5DLEVBQXlDLGlCQUF6QyxDQUFaO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixLQUFLTCx3QkFBTCxDQUE4QixLQUFLSyxRQUFuQyxFQUE2QyxpQkFBN0MsQ0FBaEI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsS0FBS04sd0JBQUwsQ0FBOEIsS0FBS00sT0FBbkMsQ0FBZjtJQUNBLEtBQUtDLE1BQUwsR0FBYyxLQUFLUCx3QkFBTCxDQUE4QixLQUFLTyxNQUFuQyxDQUFkO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLEtBQUtSLHdCQUFMLENBQThCLEtBQUtRLEtBQW5DLENBQWI7SUFDQSxLQUFLQyxHQUFMLEdBQVcsS0FBS1Qsd0JBQUwsQ0FBOEIsS0FBS1MsR0FBbkMsQ0FBWDtFQUNEOztFQUVEVCx3QkFBd0IsQ0FBQ1UsRUFBRCxFQUFlQyxXQUFmLEVBQXFDO0lBQzNELElBQUlDLElBQUksR0FBRyxJQUFYO0lBRUEsT0FB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QUFSO0FBaEJSLENBQUQsQ0FBUjtBQW1CQSxpRUFBZTtFQUNidVYsTUFBTSxFQUFFMEY7QUFESyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNamEsU0FBUyxHQUFHcWEscUVBQXNCLENBQUNHLG1FQUFELENBQXhDO0FBQ0EsTUFBTXRhLGdCQUFnQixHQUFHbWEscUVBQXNCLENBQUNFLGtGQUFELENBQS9DO0FBQ0EsTUFBTTFTLFNBQVMsR0FBR3dTLHFFQUFzQixDQUFDSSxtRUFBRCxDQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL2NvbXBvbmVudHMvc3FsX3BhcnQvc3FsX3BhcnQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvcGFuZWwvcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy91dGlscy9wYXNzd29yZEhhbmRsZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9jb25maWdfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvbWV0YV9xdWVyeS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvbW9kdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9wb3N0Z3Jlc19xdWVyeV9tb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvcmVzcG9uc2VfcGFyc2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9zcWxfcGFydC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3Nkay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXByZWNhdGlvbldhcm5pbmcsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VhcmNoVG9PYmplY3QsIGxvY2F0aW9uU2VydmljZSwgbmF2aWdhdGlvbkxvZ2dlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG4vLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9hZThlOTAzZWRmODhhODNmZWRkMTE2YWUwMmMwNjI4YmY3MmIxNTBjL3NyYy9uZy9sb2NhdGlvbi5qcyNMNVxuY29uc3QgREVGQVVMVF9QT1JUUzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgaHR0cDogODAsIGh0dHBzOiA0NDMsIGZ0cDogMjEgfTtcblxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFic1VybCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuYWJzVXJsKTtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLmhhc2gpO1xuICAgIHRoaXMuaG9zdCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaG9zdCk7XG4gICAgdGhpcy5wYXRoID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wYXRoKTtcbiAgICB0aGlzLnBvcnQgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBvcnQsICd3aW5kb3cubG9jYXRpb24nKTtcbiAgICB0aGlzLnByb3RvY29sID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wcm90b2NvbCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucmVwbGFjZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucmVwbGFjZSk7XG4gICAgdGhpcy5zZWFyY2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnNlYXJjaCk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy51cmwpO1xuICB9XG5cbiAgd3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKGZuOiBGdW5jdGlvbiwgcmVwbGFjZW1lbnQ/OiBzdHJpbmcpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICAgIGRlcHJlY2F0aW9uV2FybmluZygnJGxvY2F0aW9uJywgZm4ubmFtZSwgcmVwbGFjZW1lbnQgfHwgJ2xvY2F0aW9uU2VydmljZScpO1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGFic1VybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7dGhpcy51cmwoKX1gO1xuICB9XG5cbiAgaGFzaChuZXdIYXNoPzogc3RyaW5nIHwgbnVsbCkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBoYXNoJyk7XG5cbiAgICBpZiAoIW5ld0hhc2gpIHtcbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5oYXNoLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gIH1cblxuICBob3N0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLmhvc3RuYW1lO1xuICB9XG5cbiAgcGF0aChwYXRobmFtZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBwYXRoJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuXG4gICAgaWYgKHBhdGhuYW1lICE9PSB1bmRlZmluZWQgJiYgcGF0aG5hbWUgIT09IG51bGwpIHtcbiAgICAgIGxldCBwYXJzZWRQYXRoID0gU3RyaW5nKHBhdGhuYW1lKTtcbiAgICAgIHBhcnNlZFBhdGggPSBwYXJzZWRQYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhcnNlZFBhdGggOiBgLyR7cGFyc2VkUGF0aH1gO1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7cGFyc2VkUGF0aH1gKTtcblxuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IHVybC5zZWFyY2gubGVuZ3RoID4gMCA/IHVybC5zZWFyY2ggOiBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2g6IHVybC5oYXNoLmxlbmd0aCA+IDAgPyB1cmwuaGFzaCA6IGxvY2F0aW9uLmhhc2gsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PT0gbnVsbCkge1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxuXG4gIHBvcnQoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVybC5wb3J0LCAxMCkgfHwgREVGQVVMVF9QT1JUU1t1cmwucHJvdG9jb2xdIHx8IG51bGw7XG4gIH1cblxuICBwcm90b2NvbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5wcm90b2NvbC5zbGljZSgwLCAtMSk7XG4gIH1cblxuICByZXBsYWNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgc2VhcmNoKHNlYXJjaD86IGFueSwgcGFyYW1WYWx1ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzZWFyY2gnKTtcbiAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7XG4gICAgICAgIFtzZWFyY2hdOiBwYXJhbVZhbHVlLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGxldCBuZXdRdWVyeTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0geyAuLi5zZWFyY2ggfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0gbG9jYXRpb25TZWFyY2hUb09iamVjdChzZWFyY2gpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdRdWVyeSkpIHtcbiAgICAgICAgLy8gcmVtb3ZpbmcgcGFyYW1zIHdpdGggbnVsbCB8IHVuZGVmaW5lZFxuICAgICAgICBpZiAobmV3UXVlcnlba2V5XSA9PT0gbnVsbCB8fCBuZXdRdWVyeVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkZWxldGUgbmV3UXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVkVXJsID0gdXJsVXRpbC5yZW5kZXJVcmwobG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkucGF0aG5hbWUsIG5ld1F1ZXJ5KTtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHVwZGF0ZWRVcmwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGUoc3RhdGU/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogc3RhdGUnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHVybChuZXdVcmw/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogdXJsJyk7XG5cbiAgICBpZiAobmV3VXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIGhhc2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnN0YXJ0c1dpdGgoJz8nKSkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7IC4uLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLCBzZWFyY2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKG5ld1VybCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKTtcbiAgICByZXR1cm4gYCR7bG9jYXRpb24ucGF0aG5hbWV9JHtsb2NhdGlvbi5zZWFyY2h9JHtsb2NhdGlvbi5oYXNofWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNsb25lIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIFNxbFBhcnREZWYge1xuICB0eXBlOiBzdHJpbmc7XG4gIHN0eWxlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBhcmFtczogYW55W107XG4gIGRlZmF1bHRQYXJhbXM6IGFueVtdO1xuICB3cmFwT3Blbjogc3RyaW5nO1xuICB3cmFwQ2xvc2U6IHN0cmluZztcbiAgc2VwYXJhdG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIGlmIChvcHRpb25zLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdGhpcy50eXBlLnN1YnN0cmluZygxKSArICc6JztcbiAgICB9XG4gICAgdGhpcy5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgaWYgKHRoaXMuc3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMud3JhcE9wZW4gPSAnKCc7XG4gICAgICB0aGlzLndyYXBDbG9zZSA9ICcpJztcbiAgICAgIHRoaXMuc2VwYXJhdG9yID0gJywgJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53cmFwT3BlbiA9ICcgJztcbiAgICAgIHRoaXMud3JhcENsb3NlID0gJyAnO1xuICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnICc7XG4gICAgfVxuICAgIHRoaXMucGFyYW1zID0gb3B0aW9ucy5wYXJhbXM7XG4gICAgdGhpcy5kZWZhdWx0UGFyYW1zID0gb3B0aW9ucy5kZWZhdWx0UGFyYW1zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcWxQYXJ0IHtcbiAgcGFydDogYW55O1xuICBkZWY6IFNxbFBhcnREZWY7XG4gIHBhcmFtczogYW55W107XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0YXR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwYXJ0OiBhbnksIGRlZjogYW55KSB7XG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgICB0aGlzLmRlZiA9IGRlZjtcbiAgICBpZiAoIXRoaXMuZGVmKSB7XG4gICAgICB0aHJvdyB7IG1lc3NhZ2U6ICdDb3VsZCBub3QgZmluZCBzcWwgcGFydCAnICsgcGFydC50eXBlIH07XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhdHlwZSA9IHBhcnQuZGF0YXR5cGU7XG5cbiAgICBpZiAocGFydC5uYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBwYXJ0Lm5hbWU7XG4gICAgICB0aGlzLmxhYmVsID0gZGVmLmxhYmVsICsgJyAnICsgcGFydC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgIHRoaXMubGFiZWwgPSBkZWYubGFiZWw7XG4gICAgfVxuXG4gICAgcGFydC5wYXJhbXMgPSBwYXJ0LnBhcmFtcyB8fCBjbG9uZSh0aGlzLmRlZi5kZWZhdWx0UGFyYW1zKTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcnQucGFyYW1zO1xuICB9XG5cbiAgdXBkYXRlUGFyYW0oc3RyVmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgIC8vIGhhbmRsZSBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgaWYgKHN0clZhbHVlID09PSAnJyAmJiB0aGlzLmRlZi5wYXJhbXNbaW5kZXhdLm9wdGlvbmFsKSB7XG4gICAgICB0aGlzLnBhcmFtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhcmFtc1tpbmRleF0gPSBzdHJWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcnQucGFyYW1zID0gdGhpcy5wYXJhbXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgTGVnYWN5UmVzcG9uc2VEYXRhLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUGFuZWxFdmVudHMsXG4gIFRpbWVSYW5nZSxcbiAgdG9EYXRhRnJhbWVEVE8sXG4gIHRvTGVnYWN5UmVzcG9uc2VEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFBhbmVsQ3RybCB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgQ29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IFBhbmVsTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlJztcbmltcG9ydCB7IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9wYW5lbCc7XG5cbmltcG9ydCB7IFBhbmVsUXVlcnlSdW5uZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9xdWVyeS9zdGF0ZS9QYW5lbFF1ZXJ5UnVubmVyJztcblxuY2xhc3MgTWV0cmljc1BhbmVsQ3RybCBleHRlbmRzIFBhbmVsQ3RybCB7XG4gIGRlY2xhcmUgZGF0YXNvdXJjZTogRGF0YVNvdXJjZUFwaTtcbiAgZGVjbGFyZSByYW5nZTogVGltZVJhbmdlO1xuXG4gIGNvbnRleHRTcnY6IENvbnRleHRTcnY7XG4gIGRhdGFzb3VyY2VTcnY6IGFueTtcbiAgdGltZVNydjogYW55O1xuICB0ZW1wbGF0ZVNydjogYW55O1xuICBpbnRlcnZhbDogYW55O1xuICBpbnRlcnZhbE1zOiBhbnk7XG4gIHJlc29sdXRpb246IGFueTtcbiAgdGltZUluZm8/OiBzdHJpbmc7XG4gIHNraXBEYXRhT25Jbml0ID0gZmFsc2U7XG4gIGRhdGFMaXN0OiBMZWdhY3lSZXNwb25zZURhdGFbXSA9IFtdO1xuICBxdWVyeVN1YnNjcmlwdGlvbj86IFVuc3Vic2NyaWJhYmxlIHwgbnVsbDtcbiAgdXNlRGF0YUZyYW1lcyA9IGZhbHNlO1xuICBwYW5lbERhdGE/OiBQYW5lbERhdGE7XG5cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYW55KSB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgdGhpcy5jb250ZXh0U3J2ID0gJGluamVjdG9yLmdldCgnY29udGV4dFNydicpO1xuICAgIHRoaXMuZGF0YXNvdXJjZVNydiA9ICRpbmplY3Rvci5nZXQoJ2RhdGFzb3VyY2VTcnYnKTtcbiAgICB0aGlzLnRpbWVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0aW1lU3J2Jyk7XG4gICAgdGhpcy50ZW1wbGF0ZVNydiA9ICRpbmplY3Rvci5nZXQoJ3RlbXBsYXRlU3J2Jyk7XG4gICAgdGhpcy5wYW5lbC5kYXRhc291cmNlID0gdGhpcy5wYW5lbC5kYXRhc291cmNlIHx8IG51bGw7XG5cbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5yZWZyZXNoLCB0aGlzLm9uTWV0cmljc1BhbmVsUmVmcmVzaC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5wYW5lbFRlYXJkb3duLCB0aGlzLm9uUGFuZWxUZWFyRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5jb21wb25lbnREaWRNb3VudCwgdGhpcy5vbk1ldHJpY3NQYW5lbE1vdW50ZWQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsTW91bnRlZCgpIHtcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHRoaXMucGFuZWwuZ2V0UXVlcnlSdW5uZXIoKSBhcyBQYW5lbFF1ZXJ5UnVubmVyO1xuICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSBxdWVyeVJ1bm5lclxuICAgICAgLmdldERhdGEoeyB3aXRoVHJhbnNmb3JtczogdHJ1ZSwgd2l0aEZpZWxkQ29uZmlnOiB0cnVlIH0pXG4gICAgICAuc3Vic2NyaWJlKHRoaXMucGFuZWxEYXRhT2JzZXJ2ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBhbmVsVGVhckRvd24oKSB7XG4gICAgaWYgKHRoaXMucXVlcnlTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25NZXRyaWNzUGFuZWxSZWZyZXNoKCkge1xuICAgIC8vIGlnbm9yZSBmZXRjaGluZyBkYXRhIGlmIGFub3RoZXIgcGFuZWwgaXMgaW4gZnVsbHNjcmVlblxuICAgIGlmICh0aGlzLm90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSBoYXZlIHNuYXBzaG90IGRhdGEgdXNlIHRoYXRcbiAgICBpZiAodGhpcy5wYW5lbC5zbmFwc2hvdERhdGEpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZVJhbmdlKCk7XG4gICAgICBsZXQgZGF0YSA9IHRoaXMucGFuZWwuc25hcHNob3REYXRhO1xuICAgICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgaWYgKCFpc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFuZWxEYXRhID0ge1xuICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgICAgIHNlcmllczogZGF0YSxcbiAgICAgICAgdGltZVJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgfTtcblxuICAgICAgLy8gRGVmZXIgcGFuZWwgcmVuZGVyaW5nIHRpbGwgdGhlIG5leHQgZGlnZXN0IGN5Y2xlLlxuICAgICAgLy8gRm9yIHNvbWUgcmVhc29uIHNuYXBzaG90IHBhbmVscyBkb24ndCBpbml0IGF0IHRoaXMgdGltZSwgc28gdGhpcyBoZWxwcyB0byBhdm9pZCByZW5kZXJpbmcgaXNzdWVzLlxuICAgICAgcmV0dXJuIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFTbmFwc2hvdExvYWQsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgbG9hZGluZy9lcnJvciBzdGF0ZVxuICAgIGRlbGV0ZSB0aGlzLmVycm9yO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyBsb2FkIGRhdGFzb3VyY2Ugc2VydmljZVxuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VTcnZcbiAgICAgIC5nZXQodGhpcy5wYW5lbC5kYXRhc291cmNlLCB0aGlzLnBhbmVsLnNjb3BlZFZhcnMpXG4gICAgICAudGhlbih0aGlzLmlzc3VlUXVlcmllcy5iaW5kKHRoaXMpKVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvY2Vzc0RhdGFFcnJvcihlcnI6IGFueSkge1xuICAgIC8vIGlmIGNhbmNlbGVkICBrZWVwIGxvYWRpbmcgc2V0IHRvIHRydWVcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgY29uc29sZS5sb2coJ1BhbmVsIHJlcXVlc3QgY2FuY2VsbGVkJywgZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9yID0gZXJyLm1lc3NhZ2UgfHwgJ1JlcXVlc3QgRXJyb3InO1xuXG4gICAgaWYgKGVyci5kYXRhKSB7XG4gICAgICBpZiAoZXJyLmRhdGEubWVzc2FnZSkge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLmRhdGEubWVzc2FnZTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5kYXRhLmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgfVxuXG4gIGFuZ3VsYXJEaXJ0eUNoZWNrKCkge1xuICAgIGlmICghdGhpcy4kc2NvcGUuJHJvb3QuJCRwaGFzZSkge1xuICAgICAgdGhpcy4kc2NvcGUuJGRpZ2VzdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZXMgdGhlIHJlc3BvbnNlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgc3RyZWFtXG4gIHBhbmVsRGF0YU9ic2VydmVyID0ge1xuICAgIG5leHQ6IChkYXRhOiBQYW5lbERhdGEpID0+IHtcbiAgICAgIHRoaXMucGFuZWxEYXRhID0gZGF0YTtcblxuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5FcnJvcikge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZ25vcmUgZGF0YSBpbiBsb2FkaW5nIHN0YXRlXG4gICAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgeyB0aW1lSW5mbyB9ID0gZGF0YS5yZXF1ZXN0O1xuICAgICAgICBpZiAodGltZUluZm8pIHtcbiAgICAgICAgICB0aGlzLnRpbWVJbmZvID0gdGltZUluZm87XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudGltZVJhbmdlKSB7XG4gICAgICAgIHRoaXMucmFuZ2UgPSBkYXRhLnRpbWVSYW5nZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudXNlRGF0YUZyYW1lcykge1xuICAgICAgICB0aGlzLmhhbmRsZURhdGFGcmFtZXMoZGF0YS5zZXJpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWFrZSB0aGUgcmVzdWx0cyBsb29rIGFzIGlmIHRoZXkgY2FtZSBkaXJlY3RseSBmcm9tIGEgPDYuMiBkYXRhc291cmNlIHJlcXVlc3RcbiAgICAgICAgY29uc3QgbGVnYWN5ID0gZGF0YS5zZXJpZXMubWFwKCh2KSA9PiB0b0xlZ2FjeVJlc3BvbnNlRGF0YSh2KSk7XG4gICAgICAgIHRoaXMuaGFuZGxlUXVlcnlSZXN1bHQoeyBkYXRhOiBsZWdhY3kgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgICB9LFxuICB9O1xuXG4gIHVwZGF0ZVRpbWVSYW5nZShkYXRhc291cmNlPzogRGF0YVNvdXJjZUFwaSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IGRhdGFzb3VyY2UgfHwgdGhpcy5kYXRhc291cmNlO1xuICAgIHRoaXMucmFuZ2UgPSB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCk7XG5cbiAgICBjb25zdCBuZXdUaW1lRGF0YSA9IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzKHRoaXMucGFuZWwsIHRoaXMucmFuZ2UpO1xuICAgIHRoaXMudGltZUluZm8gPSBuZXdUaW1lRGF0YS50aW1lSW5mbztcbiAgICB0aGlzLnJhbmdlID0gbmV3VGltZURhdGEudGltZVJhbmdlO1xuICB9XG5cbiAgaXNzdWVRdWVyaWVzKGRhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGkpIHtcbiAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZShkYXRhc291cmNlKTtcblxuICAgIHRoaXMuZGF0YXNvdXJjZSA9IGRhdGFzb3VyY2U7XG5cbiAgICBjb25zdCBwYW5lbCA9IHRoaXMucGFuZWwgYXMgUGFuZWxNb2RlbDtcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHBhbmVsLmdldFF1ZXJ5UnVubmVyKCk7XG5cbiAgICByZXR1cm4gcXVlcnlSdW5uZXIucnVuKHtcbiAgICAgIGRhdGFzb3VyY2U6IHBhbmVsLmRhdGFzb3VyY2UsXG4gICAgICBxdWVyaWVzOiBwYW5lbC50YXJnZXRzLFxuICAgICAgcGFuZWxJZDogcGFuZWwuaWQsXG4gICAgICBkYXNoYm9hcmRJZDogdGhpcy5kYXNoYm9hcmQuaWQsXG4gICAgICB0aW1lem9uZTogdGhpcy5kYXNoYm9hcmQuZ2V0VGltZXpvbmUoKSxcbiAgICAgIHRpbWVJbmZvOiB0aGlzLnRpbWVJbmZvLFxuICAgICAgdGltZVJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgbWF4RGF0YVBvaW50czogcGFuZWwubWF4RGF0YVBvaW50cyB8fCB0aGlzLndpZHRoLFxuICAgICAgbWluSW50ZXJ2YWw6IHBhbmVsLmludGVydmFsLFxuICAgICAgc2NvcGVkVmFyczogcGFuZWwuc2NvcGVkVmFycyxcbiAgICAgIGNhY2hlVGltZW91dDogcGFuZWwuY2FjaGVUaW1lb3V0LFxuICAgICAgdHJhbnNmb3JtYXRpb25zOiBwYW5lbC50cmFuc2Zvcm1hdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEYXRhRnJhbWVzKGRhdGE6IERhdGFGcmFtZVtdKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kYXNoYm9hcmQgJiYgdGhpcy5kYXNoYm9hcmQuc25hcHNob3QpIHtcbiAgICAgIHRoaXMucGFuZWwuc25hcHNob3REYXRhID0gZGF0YS5tYXAoKGZyYW1lKSA9PiB0b0RhdGFGcmFtZURUTyhmcmFtZSkpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFGcmFtZXNSZWNlaXZlZCwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVRdWVyeVJlc3VsdChyZXN1bHQ6IERhdGFRdWVyeVJlc3BvbnNlKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kYXNoYm9hcmQuc25hcHNob3QpIHtcbiAgICAgIHRoaXMucGFuZWwuc25hcHNob3REYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5kYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YSBzb3VyY2UgcXVlcnkgcmVzdWx0IGludmFsaWQsIG1pc3NpbmcgZGF0YSBmaWVsZDonLCByZXN1bHQpO1xuICAgICAgcmVzdWx0ID0geyBkYXRhOiBbXSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgcmVzdWx0LmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IE1ldHJpY3NQYW5lbEN0cmwgfTtcbiIsImltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcbiAgQXBwRXZlbnQsXG4gIFBhbmVsRXZlbnRzLFxuICBQYW5lbFBsdWdpbk1ldGEsXG4gIEFuZ3VsYXJQYW5lbE1lbnVJdGVtLFxuICBFdmVudEJ1c0V4dGVuZGVkLFxuICBFdmVudEJ1c1Nydixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyIH0gZnJvbSAnYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBwcm9maWxlciB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBQYW5lbEN0cmwge1xuICBwYW5lbDogYW55O1xuICBlcnJvcjogYW55O1xuICBkZWNsYXJlIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbk5hbWUgPSAnJztcbiAgcGx1Z2luSWQgPSAnJztcbiAgZWRpdG9yVGFiczogYW55O1xuICAkc2NvcGU6IGFueTtcbiAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2U7XG4gICR0aW1lb3V0OiBhbnk7XG4gIGVkaXRNb2RlSW5pdGlhdGVkID0gZmFsc2U7XG4gIGRlY2xhcmUgaGVpZ2h0OiBudW1iZXI7XG4gIGRlY2xhcmUgd2lkdGg6IG51bWJlcjtcbiAgY29udGFpbmVySGVpZ2h0OiBhbnk7XG4gIGV2ZW50czogRXZlbnRCdXNFeHRlbmRlZDtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICB0aW1pbmc6IGFueTtcbiAgJGxvY2F0aW9uOiBBbmd1bGFyTG9jYXRpb25XcmFwcGVyO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsID8/ICRzY29wZS4kcGFyZW50LnBhbmVsO1xuICAgIHRoaXMuZGFzaGJvYXJkID0gdGhpcy5kYXNoYm9hcmQgPz8gJHNjb3BlLiRwYXJlbnQuZGFzaGJvYXJkO1xuICAgIHRoaXMuJGluamVjdG9yID0gJGluamVjdG9yO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHRpbWVvdXQgPSAkaW5qZWN0b3IuZ2V0KCckdGltZW91dCcpO1xuICAgIHRoaXMuZWRpdG9yVGFicyA9IFtdO1xuICAgIHRoaXMuJGxvY2F0aW9uID0gbmV3IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEJ1c1NydigpO1xuICAgIHRoaXMudGltaW5nID0ge307IC8vIG5vdCB1c2VkIGJ1dCBoZXJlIHRvIG5vdCBicmVhayBwbHVnaW5zXG5cbiAgICBjb25zdCBwbHVnaW4gPSBjb25maWcucGFuZWxzW3RoaXMucGFuZWwudHlwZV07XG4gICAgaWYgKHBsdWdpbikge1xuICAgICAgdGhpcy5wbHVnaW5JZCA9IHBsdWdpbi5pZDtcbiAgICAgIHRoaXMucGx1Z2luTmFtZSA9IHBsdWdpbi5uYW1lO1xuICAgIH1cblxuICAgICRzY29wZS4kb24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQubmFtZSwgKCkgPT4gdGhpcy5wYW5lbERpZE1vdW50KCkpO1xuICB9XG5cbiAgcGFuZWxEaWRNb3VudCgpIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50KTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRpYWxpemVkKTtcbiAgICB0aGlzLmRhc2hib2FyZC5wYW5lbEluaXRpYWxpemVkKHRoaXMucGFuZWwpO1xuICB9XG5cbiAgcmVuZGVyaW5nQ29tcGxldGVkKCkge1xuICAgIHByb2ZpbGVyLnJlbmRlcmluZ0NvbXBsZXRlZCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnBhbmVsLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1Ymxpc2hBcHBFdmVudDxUPihldmVudDogQXBwRXZlbnQ8VD4sIHBheWxvYWQ/OiBUKSB7XG4gICAgdGhpcy4kc2NvcGUuJHJvb3QuYXBwRXZlbnQoZXZlbnQsIHBheWxvYWQpO1xuICB9XG5cbiAgaW5pdEVkaXRNb2RlKCkge1xuICAgIGlmICghdGhpcy5lZGl0TW9kZUluaXRpYXRlZCkge1xuICAgICAgdGhpcy5lZGl0TW9kZUluaXRpYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmVkaXRNb2RlSW5pdGlhbGl6ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkaXRvclRhYih0aXRsZTogc3RyaW5nLCBkaXJlY3RpdmVGbjogYW55LCBpbmRleD86IG51bWJlciwgaWNvbj86IGFueSkge1xuICAgIGNvbnN0IGVkaXRvclRhYiA9IHsgdGl0bGUsIGRpcmVjdGl2ZUZuLCBpY29uIH07XG5cbiAgICBpZiAoaXNTdHJpbmcoZGlyZWN0aXZlRm4pKSB7XG4gICAgICBlZGl0b3JUYWIuZGlyZWN0aXZlRm4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlVXJsOiBkaXJlY3RpdmVGbiB9O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5zcGxpY2UoaW5kZXgsIDAsIGVkaXRvclRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5wdXNoKGVkaXRvclRhYik7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXh0ZW5kZWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnU6IEFuZ3VsYXJQYW5lbE1lbnVJdGVtW10gPSBbXTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRQYW5lbEFjdGlvbnMsIG1lbnUpO1xuICAgIHJldHVybiBtZW51O1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgaW4gc3ViLWNsYXNzIHRvIGFkZCBpdGVtcyBiZWZvcmUgZXh0ZW5kZWQgbWVudVxuICBhc3luYyBnZXRBZGRpdGlvbmFsTWVudUl0ZW1zKCk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmQub3RoZXJQYW5lbEluRnVsbHNjcmVlbih0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcihwYXlsb2FkPzogYW55KSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5yZW5kZXIsIHBheWxvYWQpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVuIGZyb20gcmVhY3RcbiAgb25QbHVnaW5UeXBlQ2hhbmdlID0gKHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhKSA9PiB7fTtcbn1cbiIsImltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY2xhc3MgUXVlcnlDdHJsPFQgPSBhbnk+IHtcbiAgdGFyZ2V0ITogVDtcbiAgZGF0YXNvdXJjZSE6IGFueTtcbiAgcGFuZWxDdHJsITogYW55O1xuICBwYW5lbDogYW55O1xuICBoYXNSYXdNb2RlITogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuICBpc0xhc3RRdWVyeTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbnksIHB1YmxpYyAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWxDdHJsID0gdGhpcy5wYW5lbEN0cmwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQgPz8gJHNjb3BlLmN0cmwudGFyZ2V0O1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IHRoaXMuZGF0YXNvdXJjZSA/PyAkc2NvcGUuY3RybC5kYXRhc291cmNlO1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsQ3RybD8ucGFuZWwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMuaXNMYXN0UXVlcnkgPSBpbmRleE9mKHRoaXMucGFuZWwudGFyZ2V0cywgdGhpcy50YXJnZXQpID09PSB0aGlzLnBhbmVsLnRhcmdldHMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpO1xuICB9XG59XG4iLCIvKipcbiAqIFNldCBvZiBoYW5kbGVycyBmb3Igc2VjdXJlIHBhc3N3b3JkIGZpZWxkIGluIEFuZ3VsYXIgY29tcG9uZW50cy4gVGhleSBoYW5kbGUgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoXG4gKiBwYXNzd29yZHMgc3RvcmVkIGluIHBsYWluIHRleHQgZmllbGRzLlxuICovXG5cbmltcG9ydCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZW51bSBQYXNzd29yZEZpZWxkRW51bSB7XG4gIFBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbiAgQmFzaWNBdXRoUGFzc3dvcmQgPSAnYmFzaWNBdXRoUGFzc3dvcmQnLFxufVxuXG4vKipcbiAqIEJhc2ljIHNoYXBlIGZvciBzZXR0aW5ncyBjb250cm9sbGVycyBpbiBhdCB0aGUgbW9tZW50IG1vc3RseSBhbmd1bGFyIGRhdGEgc291cmNlIHBsdWdpbnMuXG4gKi9cbmV4cG9ydCB0eXBlIEN0cmwgPSB7XG4gIGN1cnJlbnQ6IHtcbiAgICBzZWN1cmVKc29uRmllbGRzOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xuICAgIH07XG4gICAgc2VjdXJlSnNvbkRhdGE/OiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBiYXNpY0F1dGhQYXNzd29yZD86IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNldEhhbmRsZXIgPVxuICAoY3RybDogQ3RybCwgZmllbGQ6IFBhc3N3b3JkRmllbGRFbnVtKSA9PiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBSZXNldCBhbHNvIG5vcm1hbCBwbGFpbiB0ZXh0IHBhc3N3b3JkIHRvIHJlbW92ZSBpdCBhbmQgb25seSBzYXZlIGl0IGluIHNlY3VyZUpzb25EYXRhLlxuICAgIGN0cmwuY3VycmVudFtmaWVsZF0gPSB1bmRlZmluZWQ7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25GaWVsZHNbZmllbGRdID0gZmFsc2U7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhID0gY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhIHx8IHt9O1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YVtmaWVsZF0gPSAnJztcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYW5nZUhhbmRsZXIgPVxuICAoY3RybDogYW55LCBmaWVsZDogUGFzc3dvcmRGaWVsZEVudW0pID0+IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgPSBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgfHwge307XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhW2ZpZWxkXSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gIH07XG4iLCJpbXBvcnQgeyBmaW5kIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgRGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ2hhbmdlSGFuZGxlcixcbiAgY3JlYXRlUmVzZXRIYW5kbGVyLFxuICBQYXNzd29yZEZpZWxkRW51bSxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvZGF0YXNvdXJjZXMvdXRpbHMvcGFzc3dvcmRIYW5kbGVycyc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Z3Jlc0NvbmZpZ0N0cmwge1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAncGFydGlhbHMvY29uZmlnLmh0bWwnO1xuXG4gIC8vIFNldCB0aHJvdWdoIGFuZ3VsYXIgYmluZGluZ3NcbiAgZGVjbGFyZSBjdXJyZW50OiBhbnk7XG5cbiAgZGF0YXNvdXJjZVNydjogYW55O1xuICBzaG93VGltZXNjYWxlREJIZWxwOiBib29sZWFuO1xuICBvblBhc3N3b3JkUmVzZXQ6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVJlc2V0SGFuZGxlcj47XG4gIG9uUGFzc3dvcmRDaGFuZ2U6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUNoYW5nZUhhbmRsZXI+O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksIGRhdGFzb3VyY2VTcnY6IERhdGFzb3VyY2VTcnYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSAkc2NvcGUuY3RybC5jdXJyZW50O1xuICAgIHRoaXMuZGF0YXNvdXJjZVNydiA9IGRhdGFzb3VyY2VTcnY7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnNzbG1vZGUgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEuc3NsbW9kZSB8fCAndmVyaWZ5LWZ1bGwnO1xuICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNDb25maWd1cmF0aW9uTWV0aG9kID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc0NvbmZpZ3VyYXRpb25NZXRob2QgfHwgJ2ZpbGUtcGF0aCc7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnBvc3RncmVzVmVyc2lvbiA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5wb3N0Z3Jlc1ZlcnNpb24gfHwgOTAzO1xuICAgIHRoaXMuc2hvd1RpbWVzY2FsZURCSGVscCA9IGZhbHNlO1xuICAgIHRoaXMuYXV0b0RldGVjdEZlYXR1cmVzKCk7XG4gICAgdGhpcy5vblBhc3N3b3JkUmVzZXQgPSBjcmVhdGVSZXNldEhhbmRsZXIodGhpcywgUGFzc3dvcmRGaWVsZEVudW0uUGFzc3dvcmQpO1xuICAgIHRoaXMub25QYXNzd29yZENoYW5nZSA9IGNyZWF0ZUNoYW5nZUhhbmRsZXIodGhpcywgUGFzc3dvcmRGaWVsZEVudW0uUGFzc3dvcmQpO1xuICAgIHRoaXMudGxzTW9kZU1hcHBpbmcoKTtcbiAgfVxuXG4gIGF1dG9EZXRlY3RGZWF0dXJlcygpIHtcbiAgICBpZiAoIXRoaXMuY3VycmVudC5pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YXNvdXJjZVNydi5sb2FkRGF0YXNvdXJjZSh0aGlzLmN1cnJlbnQubmFtZSkudGhlbigoZHM6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIGRzLmdldFZlcnNpb24oKS50aGVuKCh2ZXJzaW9uOiBhbnkpID0+IHtcbiAgICAgICAgdmVyc2lvbiA9IE51bWJlcih2ZXJzaW9uWzBdLnRleHQpO1xuXG4gICAgICAgIC8vIHRpbWVzY2FsZWRiIGlzIG9ubHkgYXZhaWxhYmxlIGZvciA5LjYrXG4gICAgICAgIGlmICh2ZXJzaW9uID49IDkwNikge1xuICAgICAgICAgIGRzLmdldFRpbWVzY2FsZURCVmVyc2lvbigpLnRoZW4oKHZlcnNpb246IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZlcnNpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50aW1lc2NhbGVkYiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYWpvciA9IE1hdGgudHJ1bmModmVyc2lvbiAvIDEwMCk7XG4gICAgICAgIGNvbnN0IG1pbm9yID0gdmVyc2lvbiAlIDEwMDtcbiAgICAgICAgbGV0IG5hbWUgPSBTdHJpbmcobWFqb3IpO1xuICAgICAgICBpZiAodmVyc2lvbiA8IDEwMDApIHtcbiAgICAgICAgICBuYW1lID0gU3RyaW5nKG1ham9yKSArICcuJyArIFN0cmluZyhtaW5vcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaW5kKHRoaXMucG9zdGdyZXNWZXJzaW9ucywgKHA6IGFueSkgPT4gcC52YWx1ZSA9PT0gdmVyc2lvbikpIHtcbiAgICAgICAgICB0aGlzLnBvc3RncmVzVmVyc2lvbnMucHVzaCh7IG5hbWU6IG5hbWUsIHZhbHVlOiB2ZXJzaW9uIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS5wb3N0Z3Jlc1ZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVUaW1lc2NhbGVEQkhlbHAoKSB7XG4gICAgdGhpcy5zaG93VGltZXNjYWxlREJIZWxwID0gIXRoaXMuc2hvd1RpbWVzY2FsZURCSGVscDtcbiAgfVxuXG4gIHRsc01vZGVNYXBwaW5nKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQuanNvbkRhdGEuc3NsbW9kZSA9PT0gJ2Rpc2FibGUnKSB7XG4gICAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzQXV0aCA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc0F1dGhXaXRoQ0FDZXJ0ID0gZmFsc2U7XG4gICAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzU2tpcFZlcmlmeSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNBdXRoID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNBdXRoV2l0aENBQ2VydCA9IHRydWU7XG4gICAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzU2tpcFZlcmlmeSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoZSB2YWx1ZSBwb3J0aW9uIGlzIGRlcml2ZWQgZnJvbSBwb3N0Z3JlcyBzZXJ2ZXJfdmVyc2lvbl9udW0vMTAwXG4gIHBvc3RncmVzVmVyc2lvbnMgPSBbXG4gICAgeyBuYW1lOiAnOS4zJywgdmFsdWU6IDkwMyB9LFxuICAgIHsgbmFtZTogJzkuNCcsIHZhbHVlOiA5MDQgfSxcbiAgICB7IG5hbWU6ICc5LjUnLCB2YWx1ZTogOTA1IH0sXG4gICAgeyBuYW1lOiAnOS42JywgdmFsdWU6IDkwNiB9LFxuICAgIHsgbmFtZTogJzEwJywgdmFsdWU6IDEwMDAgfSxcbiAgICB7IG5hbWU6ICcxMScsIHZhbHVlOiAxMTAwIH0sXG4gICAgeyBuYW1lOiAnMTIrJywgdmFsdWU6IDEyMDAgfSxcbiAgXTtcbn1cbiIsImltcG9ydCB7IG1hcCBhcyBfbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFubm90YXRpb25FdmVudCwgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIE1ldHJpY0ZpbmRWYWx1ZSwgU2NvcGVkVmFycywgVGltZVJhbmdlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlLCBEYXRhU291cmNlV2l0aEJhY2tlbmQsIEZldGNoUmVzcG9uc2UsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHRvVGVzdGluZ1N0YXR1cyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL3F1ZXJ5UmVzcG9uc2UnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcbmltcG9ydCBQb3N0Z3Jlc1F1ZXJ5TW9kZWwgZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9wb3N0Z3Jlc19xdWVyeV9tb2RlbCc7XG5cbmltcG9ydCB7IGdldFNlYXJjaEZpbHRlclNjb3BlZFZhciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL3ZhcmlhYmxlcy91dGlscyc7XG5cbmltcG9ydCBSZXNwb25zZVBhcnNlciBmcm9tICcuL3Jlc3BvbnNlX3BhcnNlcic7XG5pbXBvcnQgeyBQb3N0Z3Jlc09wdGlvbnMsIFBvc3RncmVzUXVlcnksIFBvc3RncmVzUXVlcnlGb3JJbnRlcnBvbGF0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Z3Jlc0RhdGFzb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlV2l0aEJhY2tlbmQ8UG9zdGdyZXNRdWVyeSwgUG9zdGdyZXNPcHRpb25zPiB7XG4gIGlkOiBhbnk7XG4gIG5hbWU6IGFueTtcbiAganNvbkRhdGE6IGFueTtcbiAgcmVzcG9uc2VQYXJzZXI6IFJlc3BvbnNlUGFyc2VyO1xuICBxdWVyeU1vZGVsOiBQb3N0Z3Jlc1F1ZXJ5TW9kZWw7XG4gIGludGVydmFsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8UG9zdGdyZXNPcHRpb25zPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KClcbiAgKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gICAgdGhpcy5uYW1lID0gaW5zdGFuY2VTZXR0aW5ncy5uYW1lO1xuICAgIHRoaXMuaWQgPSBpbnN0YW5jZVNldHRpbmdzLmlkO1xuICAgIHRoaXMuanNvbkRhdGEgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhO1xuICAgIHRoaXMucmVzcG9uc2VQYXJzZXIgPSBuZXcgUmVzcG9uc2VQYXJzZXIoKTtcbiAgICB0aGlzLnF1ZXJ5TW9kZWwgPSBuZXcgUG9zdGdyZXNRdWVyeU1vZGVsKHt9KTtcbiAgICBjb25zdCBzZXR0aW5nc0RhdGEgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhIHx8ICh7fSBhcyBQb3N0Z3Jlc09wdGlvbnMpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXR0aW5nc0RhdGEudGltZUludGVydmFsIHx8ICcxbSc7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlID0gKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSwgdmFyaWFibGU6IHsgbXVsdGk6IGFueTsgaW5jbHVkZUFsbDogYW55IH0pID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhcmlhYmxlLm11bHRpIHx8IHZhcmlhYmxlLmluY2x1ZGVBbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNb2RlbC5xdW90ZUxpdGVyYWwodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcXVvdGVkVmFsdWVzID0gX21hcCh2YWx1ZSwgKHYpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHYpO1xuICAgIH0pO1xuICAgIHJldHVybiBxdW90ZWRWYWx1ZXMuam9pbignLCcpO1xuICB9O1xuXG4gIGludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzKFxuICAgIHF1ZXJpZXM6IFBvc3RncmVzUXVlcnlGb3JJbnRlcnBvbGF0aW9uW10sXG4gICAgc2NvcGVkVmFyczogU2NvcGVkVmFyc1xuICApOiBQb3N0Z3Jlc1F1ZXJ5Rm9ySW50ZXJwb2xhdGlvbltdIHtcbiAgICBsZXQgZXhwYW5kZWRRdWVyaWVzID0gcXVlcmllcztcbiAgICBpZiAocXVlcmllcyAmJiBxdWVyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXMubWFwKChxdWVyeSkgPT4ge1xuICAgICAgICBjb25zdCBleHBhbmRlZFF1ZXJ5ID0ge1xuICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgICAgcmF3U3FsOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkucmF3U3FsLCBzY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlVmFyaWFibGUpLFxuICAgICAgICAgIHJhd1F1ZXJ5OiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZXhwYW5kZWRRdWVyeTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXhwYW5kZWRRdWVyaWVzO1xuICB9XG5cbiAgZmlsdGVyUXVlcnkocXVlcnk6IFBvc3RncmVzUXVlcnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXF1ZXJ5LmhpZGU7XG4gIH1cblxuICBhcHBseVRlbXBsYXRlVmFyaWFibGVzKHRhcmdldDogUG9zdGdyZXNRdWVyeSwgc2NvcGVkVmFyczogU2NvcGVkVmFycyk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5TW9kZWwgPSBuZXcgUG9zdGdyZXNRdWVyeU1vZGVsKHRhcmdldCwgdGhpcy50ZW1wbGF0ZVNydiwgc2NvcGVkVmFycyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZklkOiB0YXJnZXQucmVmSWQsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsOiBxdWVyeU1vZGVsLnJlbmRlcih0aGlzLmludGVycG9sYXRlVmFyaWFibGUgYXMgYW55KSxcbiAgICAgIGZvcm1hdDogdGFyZ2V0LmZvcm1hdCxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgYW5ub3RhdGlvblF1ZXJ5KG9wdGlvbnM6IGFueSk6IFByb21pc2U8QW5ub3RhdGlvbkV2ZW50W10+IHtcbiAgICBpZiAoIW9wdGlvbnMuYW5ub3RhdGlvbi5yYXdRdWVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgbWVzc2FnZTogJ1F1ZXJ5IG1pc3NpbmcgaW4gYW5ub3RhdGlvbiBkZWZpbml0aW9uJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgcmVmSWQ6IG9wdGlvbnMuYW5ub3RhdGlvbi5uYW1lLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMuYW5ub3RhdGlvbi5yYXdRdWVyeSwgb3B0aW9ucy5zY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlVmFyaWFibGUpLFxuICAgICAgZm9ybWF0OiAndGFibGUnLFxuICAgIH07XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZmV0Y2g8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4oe1xuICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZyb206IG9wdGlvbnMucmFuZ2UuZnJvbS52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiBvcHRpb25zLnJhbmdlLnRvLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgcXVlcmllczogW3F1ZXJ5XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5hbm5vdGF0aW9uLm5hbWUsXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgIGFzeW5jIChyZXM6IEZldGNoUmVzcG9uc2U8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4pID0+XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVzcG9uc2VQYXJzZXIudHJhbnNmb3JtQW5ub3RhdGlvblJlc3BvbnNlKG9wdGlvbnMsIHJlcy5kYXRhKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBtZXRyaWNGaW5kUXVlcnkocXVlcnk6IHN0cmluZywgb3B0aW9uYWxPcHRpb25zOiBhbnkpOiBQcm9taXNlPE1ldHJpY0ZpbmRWYWx1ZVtdPiB7XG4gICAgbGV0IHJlZklkID0gJ3RlbXB2YXInO1xuICAgIGlmIChvcHRpb25hbE9wdGlvbnMgJiYgb3B0aW9uYWxPcHRpb25zLnZhcmlhYmxlICYmIG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lKSB7XG4gICAgICByZWZJZCA9IG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHJhd1NxbCA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgIHF1ZXJ5LFxuICAgICAgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyKHsgcXVlcnksIHdpbGRjYXJkQ2hhcjogJyUnLCBvcHRpb25zOiBvcHRpb25hbE9wdGlvbnMgfSksXG4gICAgICB0aGlzLmludGVycG9sYXRlVmFyaWFibGVcbiAgICApO1xuXG4gICAgY29uc3QgaW50ZXJwb2xhdGVkUXVlcnkgPSB7XG4gICAgICByZWZJZDogcmVmSWQsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsLFxuICAgICAgZm9ybWF0OiAndGFibGUnLFxuICAgIH07XG5cbiAgICBjb25zdCByYW5nZSA9IG9wdGlvbmFsT3B0aW9ucz8ucmFuZ2UgYXMgVGltZVJhbmdlO1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiByYW5nZT8uZnJvbT8udmFsdWVPZigpPy50b1N0cmluZygpLFxuICAgICAgICAgICAgdG86IHJhbmdlPy50bz8udmFsdWVPZigpPy50b1N0cmluZygpLFxuICAgICAgICAgICAgcXVlcmllczogW2ludGVycG9sYXRlZFF1ZXJ5XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3RJZDogcmVmSWQsXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocnNwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVBhcnNlci50cmFuc2Zvcm1NZXRyaWNGaW5kUmVzcG9uc2UocnNwKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9tZXRhUmVxdWVzdChyYXdTcWw6IHN0cmluZykge1xuICAgIGNvbnN0IHJlZklkID0gJ21ldGEnO1xuICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgcmVmSWQ6IHJlZklkLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbCxcbiAgICAgIGZvcm1hdDogJ3RhYmxlJyxcbiAgICB9O1xuICAgIHJldHVybiBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4oe1xuICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcXVlcmllczogW3F1ZXJ5XSxcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0SWQ6IHJlZklkLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmVyc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuX21ldGFSZXF1ZXN0KFwiU0VMRUNUIGN1cnJlbnRfc2V0dGluZygnc2VydmVyX3ZlcnNpb25fbnVtJyk6OmludC8xMDBcIikpO1xuICB9XG5cbiAgZ2V0VGltZXNjYWxlREJWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20odGhpcy5fbWV0YVJlcXVlc3QoXCJTRUxFQ1QgZXh0dmVyc2lvbiBGUk9NIHBnX2V4dGVuc2lvbiBXSEVSRSBleHRuYW1lID0gJ3RpbWVzY2FsZWRiJ1wiKSk7XG4gIH1cblxuICB0ZXN0RGF0YXNvdXJjZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuX21ldGFSZXF1ZXN0KCdTRUxFQ1QgMScpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdzdWNjZXNzJywgbWVzc2FnZTogJ0RhdGFiYXNlIENvbm5lY3Rpb24gT0snIH07XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdG9UZXN0aW5nU3RhdHVzKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHRhcmdldENvbnRhaW5zVGVtcGxhdGUodGFyZ2V0OiBhbnkpIHtcbiAgICBsZXQgcmF3U3FsID0gJyc7XG5cbiAgICBpZiAodGFyZ2V0LnJhd1F1ZXJ5KSB7XG4gICAgICByYXdTcWwgPSB0YXJnZXQucmF3U3FsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBQb3N0Z3Jlc1F1ZXJ5TW9kZWwodGFyZ2V0KTtcbiAgICAgIHJhd1NxbCA9IHF1ZXJ5LmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICByYXdTcWwgPSByYXdTcWwucmVwbGFjZSgnJF9fJywgJycpO1xuXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYuY29udGFpbnNUZW1wbGF0ZShyYXdTcWwpO1xuICB9XG59XG4iLCJpbXBvcnQgUXVlcnlNb2RlbCBmcm9tICcuL3Bvc3RncmVzX3F1ZXJ5X21vZGVsJztcblxuZXhwb3J0IGNsYXNzIFBvc3RncmVzTWV0YVF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXJnZXQ6IHsgdGFibGU6IHN0cmluZzsgdGltZUNvbHVtbjogc3RyaW5nIH0sIHByaXZhdGUgcXVlcnlNb2RlbDogUXVlcnlNb2RlbCkge31cblxuICBnZXRPcGVyYXRvcnMoZGF0YXR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAoZGF0YXR5cGUpIHtcbiAgICAgIGNhc2UgJ2Zsb2F0NCc6XG4gICAgICBjYXNlICdmbG9hdDgnOiB7XG4gICAgICAgIHJldHVybiBbJz0nLCAnIT0nLCAnPCcsICc8PScsICc+JywgJz49J107XG4gICAgICB9XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGNhc2UgJ3ZhcmNoYXInOlxuICAgICAgY2FzZSAnY2hhcic6IHtcbiAgICAgICAgcmV0dXJuIFsnPScsICchPScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnSU4nLCAnTk9UIElOJywgJ0xJS0UnLCAnTk9UIExJS0UnLCAnficsICd+KicsICchficsICchfionXTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIFsnPScsICchPScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnSU4nLCAnTk9UIElOJ107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcXVvdGUgaWRlbnRpZmllciBhcyBsaXRlcmFsIHRvIHVzZSBpbiBtZXRhZGF0YSBxdWVyaWVzXG4gIHF1b3RlSWRlbnRBc0xpdGVyYWwodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHRoaXMucXVlcnlNb2RlbC51bnF1b3RlSWRlbnRpZmllcih2YWx1ZSkpO1xuICB9XG5cbiAgZmluZE1ldHJpY1RhYmxlKCkge1xuICAgIC8vIHF1ZXJ5IHRoYXQgcmV0dXJucyBmaXJzdCB0YWJsZSBmb3VuZCB0aGF0IGhhcyBhIHRpbWVzdGFtcCh0eikgY29sdW1uIGFuZCBhIGZsb2F0IGNvbHVtblxuICAgIGxldCBxdWVyeSA9IGBcblNFTEVDVFxuXHRxdW90ZV9pZGVudCh0YWJsZV9uYW1lKSBhcyB0YWJsZV9uYW1lLFxuXHQoIFNFTEVDVFxuXHQgICAgcXVvdGVfaWRlbnQoY29sdW1uX25hbWUpIGFzIGNvbHVtbl9uYW1lXG5cdCAgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBjXG4gICAgV0hFUkVcbiAgICAgIGMudGFibGVfc2NoZW1hID0gdC50YWJsZV9zY2hlbWEgQU5EXG4gICAgICBjLnRhYmxlX25hbWUgPSB0LnRhYmxlX25hbWUgQU5EXG4gICAgICB1ZHRfbmFtZSBJTiAoJ3RpbWVzdGFtcHR6JywndGltZXN0YW1wJylcbiAgICBPUkRFUiBCWSBvcmRpbmFsX3Bvc2l0aW9uIExJTUlUIDFcbiAgKSBBUyB0aW1lX2NvbHVtbixcbiAgKCBTRUxFQ1RcbiAgICAgIHF1b3RlX2lkZW50KGNvbHVtbl9uYW1lKSBBUyBjb2x1bW5fbmFtZVxuICAgIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgY1xuICAgIFdIRVJFXG4gICAgICBjLnRhYmxlX3NjaGVtYSA9IHQudGFibGVfc2NoZW1hIEFORFxuICAgICAgYy50YWJsZV9uYW1lID0gdC50YWJsZV9uYW1lIEFORFxuICAgICAgdWR0X25hbWU9J2Zsb2F0OCdcbiAgICBPUkRFUiBCWSBvcmRpbmFsX3Bvc2l0aW9uIExJTUlUIDFcbiAgKSBBUyB2YWx1ZV9jb2x1bW5cbkZST00gaW5mb3JtYXRpb25fc2NoZW1hLnRhYmxlcyB0XG5XSEVSRSBgO1xuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRTY2hlbWFDb25zdHJhaW50KCk7XG4gICAgcXVlcnkgKz0gYCBBTkRcbiAgRVhJU1RTXG4gICggU0VMRUNUIDFcbiAgICBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIGNcbiAgICBXSEVSRVxuICAgICAgYy50YWJsZV9zY2hlbWEgPSB0LnRhYmxlX3NjaGVtYSBBTkRcbiAgICAgIGMudGFibGVfbmFtZSA9IHQudGFibGVfbmFtZSBBTkRcbiAgICAgIHVkdF9uYW1lIElOICgndGltZXN0YW1wdHonLCd0aW1lc3RhbXAnKVxuICApIEFORFxuICBFWElTVFNcbiAgKCBTRUxFQ1QgMVxuICAgIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgY1xuICAgIFdIRVJFXG4gICAgICBjLnRhYmxlX3NjaGVtYSA9IHQudGFibGVfc2NoZW1hIEFORFxuICAgICAgYy50YWJsZV9uYW1lID0gdC50YWJsZV9uYW1lIEFORFxuICAgICAgdWR0X25hbWU9J2Zsb2F0OCdcbiAgKVxuTElNSVQgMVxuO2A7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRTY2hlbWFDb25zdHJhaW50KCkge1xuICAgIC8vIHF1b3RlX2lkZW50IHByb3RlY3RzIGh5cGhlbmF0ZWQgc2NoZW1lc1xuICAgIGNvbnN0IHF1ZXJ5ID0gYFxucXVvdGVfaWRlbnQodGFibGVfc2NoZW1hKSBJTiAoXG4gIFNFTEVDVFxuICAgIENBU0UgV0hFTiB0cmltKHNbaV0pID0gJ1wiJHVzZXJcIicgVEhFTiB1c2VyIEVMU0UgdHJpbShzW2ldKSBFTkRcbiAgRlJPTVxuICAgIGdlbmVyYXRlX3NlcmllcyhcbiAgICAgIGFycmF5X2xvd2VyKHN0cmluZ190b19hcnJheShjdXJyZW50X3NldHRpbmcoJ3NlYXJjaF9wYXRoJyksJywnKSwxKSxcbiAgICAgIGFycmF5X3VwcGVyKHN0cmluZ190b19hcnJheShjdXJyZW50X3NldHRpbmcoJ3NlYXJjaF9wYXRoJyksJywnKSwxKVxuICAgICkgYXMgaSxcbiAgICBzdHJpbmdfdG9fYXJyYXkoY3VycmVudF9zZXR0aW5nKCdzZWFyY2hfcGF0aCcpLCcsJykgc1xuKWA7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRUYWJsZUNvbnN0cmFpbnQodGFibGU6IHN0cmluZykge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuXG4gICAgLy8gY2hlY2sgZm9yIHNjaGVtYSBxdWFsaWZpZWQgdGFibGVcbiAgICBpZiAodGFibGUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgY29uc3QgcGFydHMgPSB0YWJsZS5zcGxpdCgnLicpO1xuICAgICAgcXVlcnkgPSAndGFibGVfc2NoZW1hID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbChwYXJ0c1swXSk7XG4gICAgICBxdWVyeSArPSAnIEFORCB0YWJsZV9uYW1lID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbChwYXJ0c1sxXSk7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5idWlsZFNjaGVtYUNvbnN0cmFpbnQoKTtcbiAgICAgIHF1ZXJ5ICs9ICcgQU5EIHRhYmxlX25hbWUgPSAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKHRhYmxlKTtcblxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkVGFibGVRdWVyeSgpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUIHF1b3RlX2lkZW50KHRhYmxlX25hbWUpIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLnRhYmxlcyBXSEVSRSAnO1xuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRTY2hlbWFDb25zdHJhaW50KCk7XG4gICAgcXVlcnkgKz0gJyBPUkRFUiBCWSB0YWJsZV9uYW1lJztcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZENvbHVtblF1ZXJ5KHR5cGU/OiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUIHF1b3RlX2lkZW50KGNvbHVtbl9uYW1lKSBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIFdIRVJFICc7XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFRhYmxlQ29uc3RyYWludCh0aGlzLnRhcmdldC50YWJsZSk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpbWUnOiB7XG4gICAgICAgIHF1ZXJ5ICs9XG4gICAgICAgICAgXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ3RpbWVzdGFtcCB3aXRob3V0IHRpbWUgem9uZScsJ3RpbWVzdGFtcCB3aXRoIHRpbWUgem9uZScsJ2JpZ2ludCcsJ2ludGVnZXInLCdkb3VibGUgcHJlY2lzaW9uJywncmVhbCcpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbWV0cmljJzoge1xuICAgICAgICBxdWVyeSArPSBcIiBBTkQgZGF0YV90eXBlIElOICgndGV4dCcsJ2NoYXJhY3RlcicsJ2NoYXJhY3RlciB2YXJ5aW5nJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd2YWx1ZSc6IHtcbiAgICAgICAgcXVlcnkgKz0gXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ2JpZ2ludCcsJ2ludGVnZXInLCdkb3VibGUgcHJlY2lzaW9uJywncmVhbCcsJ251bWVyaWMnKVwiO1xuICAgICAgICBxdWVyeSArPSAnIEFORCBjb2x1bW5fbmFtZSA8PiAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dyb3VwJzoge1xuICAgICAgICBxdWVyeSArPSBcIiBBTkQgZGF0YV90eXBlIElOICgndGV4dCcsJ2NoYXJhY3RlcicsJ2NoYXJhY3RlciB2YXJ5aW5nJywndXVpZCcpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHF1ZXJ5ICs9ICcgT1JERVIgQlkgY29sdW1uX25hbWUnO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRWYWx1ZVF1ZXJ5KGNvbHVtbjogc3RyaW5nKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJ1NFTEVDVCBESVNUSU5DVCBxdW90ZV9saXRlcmFsKCcgKyBjb2x1bW4gKyAnKSc7XG4gICAgcXVlcnkgKz0gJyBGUk9NICcgKyB0aGlzLnRhcmdldC50YWJsZTtcbiAgICBxdWVyeSArPSAnIFdIRVJFICRfX3RpbWVGaWx0ZXIoJyArIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gKyAnKSc7XG4gICAgcXVlcnkgKz0gJyBBTkQgJyArIGNvbHVtbiArICcgSVMgTk9UIE5VTEwnO1xuICAgIHF1ZXJ5ICs9ICcgT1JERVIgQlkgMSBMSU1JVCAxMDAnO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkRGF0YXR5cGVRdWVyeShjb2x1bW46IHN0cmluZykge1xuICAgIGxldCBxdWVyeSA9ICdTRUxFQ1QgdWR0X25hbWUgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBXSEVSRSAnO1xuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRUYWJsZUNvbnN0cmFpbnQodGhpcy50YXJnZXQudGFibGUpO1xuICAgIHF1ZXJ5ICs9ICcgQU5EIGNvbHVtbl9uYW1lID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbChjb2x1bW4pO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkQWdncmVnYXRlUXVlcnkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJ1NFTEVDVCBESVNUSU5DVCBwcm9uYW1lIEZST00gcGdfYWdncmVnYXRlICc7XG4gICAgcXVlcnkgKz0gJ0lOTkVSIEpPSU4gcGdfcHJvYyBPTiBwZ19hZ2dyZWdhdGUuYWdnZm5vaWQgPSBwZ19wcm9jLm9pZCAnO1xuICAgIHF1ZXJ5ICs9ICdJTk5FUiBKT0lOIHBnX3R5cGUgT04gcGdfdHlwZS5vaWQ9cGdfcHJvYy5wcm9yZXR0eXBlICc7XG4gICAgcXVlcnkgKz0gXCJXSEVSRSBwcm9uYXJncz0xIEFORCB0eXBuYW1lIElOICgnZmxvYXQ4JykgQU5EIGFnZ2tpbmQ9J24nIE9SREVSIEJZIDFcIjtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgUG9zdGdyZXNDb25maWdDdHJsIH0gZnJvbSAnLi9jb25maWdfY3RybCc7XG5pbXBvcnQgeyBQb3N0Z3Jlc0RhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgUG9zdGdyZXNRdWVyeUN0cmwgfSBmcm9tICcuL3F1ZXJ5X2N0cmwnO1xuaW1wb3J0IHsgUG9zdGdyZXNRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBgU0VMRUNUXG4gIGV4dHJhY3QoZXBvY2ggZnJvbSB0aW1lX2NvbHVtbikgQVMgdGltZSxcbiAgdGV4dF9jb2x1bW4gYXMgdGV4dCxcbiAgdGFnc19jb2x1bW4gYXMgdGFnc1xuRlJPTVxuICBtZXRyaWNfdGFibGVcbldIRVJFXG4gICRfX3RpbWVGaWx0ZXIodGltZV9jb2x1bW4pXG5gO1xuXG5jbGFzcyBQb3N0Z3Jlc0Fubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcblxuICBkZWNsYXJlIGFubm90YXRpb246IGFueTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55KSB7XG4gICAgdGhpcy5hbm5vdGF0aW9uID0gJHNjb3BlLmN0cmwuYW5ub3RhdGlvbjtcbiAgICB0aGlzLmFubm90YXRpb24ucmF3UXVlcnkgPSB0aGlzLmFubm90YXRpb24ucmF3UXVlcnkgfHwgZGVmYXVsdFF1ZXJ5O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbjxQb3N0Z3Jlc0RhdGFzb3VyY2UsIFBvc3RncmVzUXVlcnk+KFBvc3RncmVzRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5Q3RybChQb3N0Z3Jlc1F1ZXJ5Q3RybClcbiAgLnNldENvbmZpZ0N0cmwoUG9zdGdyZXNDb25maWdDdHJsKVxuICAuc2V0QW5ub3RhdGlvblF1ZXJ5Q3RybChQb3N0Z3Jlc0Fubm90YXRpb25zUXVlcnlDdHJsKTtcbiIsImltcG9ydCB7IGZpbmQsIG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNjb3BlZFZhcnMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RncmVzUXVlcnlNb2RlbCB7XG4gIHRhcmdldDogYW55O1xuICB0ZW1wbGF0ZVNydjogYW55O1xuICBzY29wZWRWYXJzOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IGFueSwgdGVtcGxhdGVTcnY/OiBUZW1wbGF0ZVNydiwgc2NvcGVkVmFycz86IFNjb3BlZFZhcnMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnRlbXBsYXRlU3J2ID0gdGVtcGxhdGVTcnY7XG4gICAgdGhpcy5zY29wZWRWYXJzID0gc2NvcGVkVmFycztcblxuICAgIHRhcmdldC5mb3JtYXQgPSB0YXJnZXQuZm9ybWF0IHx8ICd0aW1lX3Nlcmllcyc7XG4gICAgdGFyZ2V0LnRpbWVDb2x1bW4gPSB0YXJnZXQudGltZUNvbHVtbiB8fCAndGltZSc7XG4gICAgdGFyZ2V0Lm1ldHJpY0NvbHVtbiA9IHRhcmdldC5tZXRyaWNDb2x1bW4gfHwgJ25vbmUnO1xuXG4gICAgdGFyZ2V0Lmdyb3VwID0gdGFyZ2V0Lmdyb3VwIHx8IFtdO1xuICAgIHRhcmdldC53aGVyZSA9IHRhcmdldC53aGVyZSB8fCBbeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiAnJF9fdGltZUZpbHRlcicsIHBhcmFtczogW10gfV07XG4gICAgdGFyZ2V0LnNlbGVjdCA9IHRhcmdldC5zZWxlY3QgfHwgW1t7IHR5cGU6ICdjb2x1bW4nLCBwYXJhbXM6IFsndmFsdWUnXSB9XV07XG5cbiAgICAvLyBoYW5kbGUgcHJlIHF1ZXJ5IGd1aSBwYW5lbHMgZ3JhY2VmdWxseVxuICAgIGlmICghKCdyYXdRdWVyeScgaW4gdGhpcy50YXJnZXQpKSB7XG4gICAgICBpZiAoJ3Jhd1NxbCcgaW4gdGFyZ2V0KSB7XG4gICAgICAgIC8vIHByZSBxdWVyeSBndWkgcGFuZWxcbiAgICAgICAgdGFyZ2V0LnJhd1F1ZXJ5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5ldyBwYW5lbFxuICAgICAgICB0YXJnZXQucmF3UXVlcnkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnaXZlIGludGVycG9sYXRlUXVlcnlTdHIgYWNjZXNzIHRvIHRoaXNcbiAgICB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIgPSB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBpZGVudGlmaWVyIHF1b3RpbmcgZnJvbSBpZGVudGlmaWVyIHRvIHVzZSBpbiBtZXRhZGF0YSBxdWVyaWVzXG4gIHVucXVvdGVJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWVbMF0gPT09ICdcIicgJiYgdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcIicpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMSwgdmFsdWUubGVuZ3RoIC0gMSkucmVwbGFjZSgvXCJcIi9nLCAnXCInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHF1b3RlSWRlbnRpZmllcih2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuICdcIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1wiL2csICdcIlwiJykgKyAnXCInO1xuICB9XG5cbiAgcXVvdGVMaXRlcmFsKHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gXCInXCIgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLycvZywgXCInJ1wiKSArIFwiJ1wiO1xuICB9XG5cbiAgZXNjYXBlTGl0ZXJhbCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvJy9nLCBcIicnXCIpO1xuICB9XG5cbiAgaGFzVGltZUdyb3VwKCkge1xuICAgIHJldHVybiBmaW5kKHRoaXMudGFyZ2V0Lmdyb3VwLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICd0aW1lJyk7XG4gIH1cblxuICBoYXNNZXRyaWNDb2x1bW4oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbiAhPT0gJ25vbmUnO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVRdWVyeVN0cih2YWx1ZTogYW55LCB2YXJpYWJsZTogeyBtdWx0aTogYW55OyBpbmNsdWRlQWxsOiBhbnkgfSwgZGVmYXVsdEZvcm1hdEZuOiBhbnkpIHtcbiAgICAvLyBpZiBubyBtdWx0aSBvciBpbmNsdWRlIGFsbCBkbyBub3QgcmVnZXhFc2NhcGVcbiAgICBpZiAoIXZhcmlhYmxlLm11bHRpICYmICF2YXJpYWJsZS5pbmNsdWRlQWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5lc2NhcGVMaXRlcmFsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMucXVvdGVMaXRlcmFsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBlc2NhcGVkVmFsdWVzID0gbWFwKHZhbHVlLCB0aGlzLnF1b3RlTGl0ZXJhbCk7XG4gICAgcmV0dXJuIGVzY2FwZWRWYWx1ZXMuam9pbignLCcpO1xuICB9XG5cbiAgcmVuZGVyKGludGVycG9sYXRlPzogYW55KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG5cbiAgICAvLyBuZXcgcXVlcnkgd2l0aCBubyB0YWJsZSBzZXQgeWV0XG4gICAgaWYgKCF0aGlzLnRhcmdldC5yYXdRdWVyeSAmJiAhKCd0YWJsZScgaW4gdGhpcy50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIHRhcmdldC5yYXdTcWwgPSB0aGlzLmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LnJhd1NxbCwgdGhpcy5zY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnJhd1NxbDtcbiAgICB9XG4gIH1cblxuICBoYXNVbml4RXBvY2hUaW1lY29sdW1uKCkge1xuICAgIHJldHVybiBbJ2ludDQnLCAnaW50OCcsICdmbG9hdDQnLCAnZmxvYXQ4JywgJ251bWVyaWMnXS5pbmRleE9mKHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlKSA+IC0xO1xuICB9XG5cbiAgYnVpbGRUaW1lQ29sdW1uKGFsaWFzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRpbWVHcm91cCA9IHRoaXMuaGFzVGltZUdyb3VwKCk7XG4gICAgbGV0IHF1ZXJ5O1xuICAgIGxldCBtYWNybyA9ICckX190aW1lR3JvdXAnO1xuXG4gICAgaWYgKHRpbWVHcm91cCkge1xuICAgICAgbGV0IGFyZ3M7XG4gICAgICBpZiAodGltZUdyb3VwLnBhcmFtcy5sZW5ndGggPiAxICYmIHRpbWVHcm91cC5wYXJhbXNbMV0gIT09ICdub25lJykge1xuICAgICAgICBhcmdzID0gdGltZUdyb3VwLnBhcmFtcy5qb2luKCcsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmdzID0gdGltZUdyb3VwLnBhcmFtc1swXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhhc1VuaXhFcG9jaFRpbWVjb2x1bW4oKSkge1xuICAgICAgICBtYWNybyA9ICckX191bml4RXBvY2hHcm91cCc7XG4gICAgICB9XG4gICAgICBpZiAoYWxpYXMpIHtcbiAgICAgICAgbWFjcm8gKz0gJ0FsaWFzJztcbiAgICAgIH1cbiAgICAgIHF1ZXJ5ID0gbWFjcm8gKyAnKCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJywnICsgYXJncyArICcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnkgPSB0aGlzLnRhcmdldC50aW1lQ29sdW1uO1xuICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgIHF1ZXJ5ICs9ICcgQVMgXCJ0aW1lXCInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkTWV0cmljQ29sdW1uKCkge1xuICAgIGlmICh0aGlzLmhhc01ldHJpY0NvbHVtbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXQubWV0cmljQ29sdW1uICsgJyBBUyBtZXRyaWMnO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGJ1aWxkVmFsdWVDb2x1bW5zKCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGZvciAoY29uc3QgY29sdW1uIG9mIHRoaXMudGFyZ2V0LnNlbGVjdCkge1xuICAgICAgcXVlcnkgKz0gJyxcXG4gICcgKyB0aGlzLmJ1aWxkVmFsdWVDb2x1bW4oY29sdW1uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZFZhbHVlQ29sdW1uKGNvbHVtbjogYW55KSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG5cbiAgICBjb25zdCBjb2x1bW5OYW1lOiBhbnkgPSBmaW5kKGNvbHVtbiwgKGc6IGFueSkgPT4gZy50eXBlID09PSAnY29sdW1uJyk7XG4gICAgcXVlcnkgPSBjb2x1bW5OYW1lLnBhcmFtc1swXTtcblxuICAgIGNvbnN0IGFnZ3JlZ2F0ZTogYW55ID0gZmluZChjb2x1bW4sIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScgfHwgZy50eXBlID09PSAncGVyY2VudGlsZScpO1xuICAgIGNvbnN0IHdpbmRvd3M6IGFueSA9IGZpbmQoY29sdW1uLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICd3aW5kb3cnIHx8IGcudHlwZSA9PT0gJ21vdmluZ193aW5kb3cnKTtcblxuICAgIGlmIChhZ2dyZWdhdGUpIHtcbiAgICAgIGNvbnN0IGZ1bmMgPSBhZ2dyZWdhdGUucGFyYW1zWzBdO1xuICAgICAgc3dpdGNoIChhZ2dyZWdhdGUudHlwZSkge1xuICAgICAgICBjYXNlICdhZ2dyZWdhdGUnOlxuICAgICAgICAgIGlmIChmdW5jID09PSAnZmlyc3QnIHx8IGZ1bmMgPT09ICdsYXN0Jykge1xuICAgICAgICAgICAgcXVlcnkgPSBmdW5jICsgJygnICsgcXVlcnkgKyAnLCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJyknO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IGZ1bmMgKyAnKCcgKyBxdWVyeSArICcpJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BlcmNlbnRpbGUnOlxuICAgICAgICAgIHF1ZXJ5ID0gZnVuYyArICcoJyArIGFnZ3JlZ2F0ZS5wYXJhbXNbMV0gKyAnKSBXSVRISU4gR1JPVVAgKE9SREVSIEJZICcgKyBxdWVyeSArICcpJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2luZG93cykge1xuICAgICAgY29uc3Qgb3ZlclBhcnRzID0gW107XG4gICAgICBpZiAodGhpcy5oYXNNZXRyaWNDb2x1bW4oKSkge1xuICAgICAgICBvdmVyUGFydHMucHVzaCgnUEFSVElUSU9OIEJZICcgKyB0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4pO1xuICAgICAgfVxuICAgICAgb3ZlclBhcnRzLnB1c2goJ09SREVSIEJZICcgKyB0aGlzLmJ1aWxkVGltZUNvbHVtbihmYWxzZSkpO1xuXG4gICAgICBjb25zdCBvdmVyID0gb3ZlclBhcnRzLmpvaW4oJyAnKTtcbiAgICAgIGxldCBjdXJyOiBzdHJpbmc7XG4gICAgICBsZXQgcHJldjogc3RyaW5nO1xuICAgICAgc3dpdGNoICh3aW5kb3dzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnd2luZG93JzpcbiAgICAgICAgICBzd2l0Y2ggKHdpbmRvd3MucGFyYW1zWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWx0YSc6XG4gICAgICAgICAgICAgIGN1cnIgPSBxdWVyeTtcbiAgICAgICAgICAgICAgcHJldiA9ICdsYWcoJyArIGN1cnIgKyAnKSBPVkVSICgnICsgb3ZlciArICcpJztcbiAgICAgICAgICAgICAgcXVlcnkgPSBjdXJyICsgJyAtICcgKyBwcmV2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luY3JlYXNlJzpcbiAgICAgICAgICAgICAgY3VyciA9IHF1ZXJ5O1xuICAgICAgICAgICAgICBwcmV2ID0gJ2xhZygnICsgY3VyciArICcpIE9WRVIgKCcgKyBvdmVyICsgJyknO1xuICAgICAgICAgICAgICBxdWVyeSA9ICcoQ0FTRSBXSEVOICcgKyBjdXJyICsgJyA+PSAnICsgcHJldiArICcgVEhFTiAnICsgY3VyciArICcgLSAnICsgcHJldjtcbiAgICAgICAgICAgICAgcXVlcnkgKz0gJyBXSEVOICcgKyBwcmV2ICsgJyBJUyBOVUxMIFRIRU4gTlVMTCBFTFNFICcgKyBjdXJyICsgJyBFTkQpJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyYXRlJzpcbiAgICAgICAgICAgICAgbGV0IHRpbWVDb2x1bW4gPSB0aGlzLnRhcmdldC50aW1lQ29sdW1uO1xuICAgICAgICAgICAgICBpZiAoYWdncmVnYXRlKSB7XG4gICAgICAgICAgICAgICAgdGltZUNvbHVtbiA9ICdtaW4oJyArIHRpbWVDb2x1bW4gKyAnKSc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjdXJyID0gcXVlcnk7XG4gICAgICAgICAgICAgIHByZXYgPSAnbGFnKCcgKyBjdXJyICsgJykgT1ZFUiAoJyArIG92ZXIgKyAnKSc7XG4gICAgICAgICAgICAgIHF1ZXJ5ID0gJyhDQVNFIFdIRU4gJyArIGN1cnIgKyAnID49ICcgKyBwcmV2ICsgJyBUSEVOICcgKyBjdXJyICsgJyAtICcgKyBwcmV2O1xuICAgICAgICAgICAgICBxdWVyeSArPSAnIFdIRU4gJyArIHByZXYgKyAnIElTIE5VTEwgVEhFTiBOVUxMIEVMU0UgJyArIGN1cnIgKyAnIEVORCknO1xuICAgICAgICAgICAgICBxdWVyeSArPSAnL2V4dHJhY3QoZXBvY2ggZnJvbSAnICsgdGltZUNvbHVtbiArICcgLSBsYWcoJyArIHRpbWVDb2x1bW4gKyAnKSBPVkVSICgnICsgb3ZlciArICcpKSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcXVlcnkgPSB3aW5kb3dzLnBhcmFtc1swXSArICcoJyArIHF1ZXJ5ICsgJykgT1ZFUiAoJyArIG92ZXIgKyAnKSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW92aW5nX3dpbmRvdyc6XG4gICAgICAgICAgcXVlcnkgPSB3aW5kb3dzLnBhcmFtc1swXSArICcoJyArIHF1ZXJ5ICsgJykgT1ZFUiAoJyArIG92ZXIgKyAnIFJPV1MgJyArIHdpbmRvd3MucGFyYW1zWzFdICsgJyBQUkVDRURJTkcpJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGlhczogYW55ID0gZmluZChjb2x1bW4sIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2FsaWFzJyk7XG4gICAgaWYgKGFsaWFzKSB7XG4gICAgICBxdWVyeSArPSAnIEFTICcgKyB0aGlzLnF1b3RlSWRlbnRpZmllcihhbGlhcy5wYXJhbXNbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkV2hlcmVDbGF1c2UoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgY29uc3QgY29uZGl0aW9ucyA9IG1hcCh0aGlzLnRhcmdldC53aGVyZSwgKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIHN3aXRjaCAodGFnLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWFjcm8nOlxuICAgICAgICAgIHJldHVybiB0YWcubmFtZSArICcoJyArIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gKyAnKSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V4cHJlc3Npb24nOlxuICAgICAgICAgIHJldHVybiB0YWcucGFyYW1zLmpvaW4oJyAnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHF1ZXJ5ID0gJ1xcbldIRVJFXFxuICAnICsgY29uZGl0aW9ucy5qb2luKCcgQU5EXFxuICAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZEdyb3VwQ2xhdXNlKCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGxldCBncm91cFNlY3Rpb24gPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXJnZXQuZ3JvdXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnRhcmdldC5ncm91cFtpXTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBncm91cFNlY3Rpb24gKz0gJywgJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0LnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICBncm91cFNlY3Rpb24gKz0gJzEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JvdXBTZWN0aW9uICs9IHBhcnQucGFyYW1zWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChncm91cFNlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9ICdcXG5HUk9VUCBCWSAnICsgZ3JvdXBTZWN0aW9uO1xuICAgICAgaWYgKHRoaXMuaGFzTWV0cmljQ29sdW1uKCkpIHtcbiAgICAgICAgcXVlcnkgKz0gJywyJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRRdWVyeSgpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUJztcblxuICAgIHF1ZXJ5ICs9ICdcXG4gICcgKyB0aGlzLmJ1aWxkVGltZUNvbHVtbigpO1xuICAgIGlmICh0aGlzLmhhc01ldHJpY0NvbHVtbigpKSB7XG4gICAgICBxdWVyeSArPSAnLFxcbiAgJyArIHRoaXMuYnVpbGRNZXRyaWNDb2x1bW4oKTtcbiAgICB9XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFZhbHVlQ29sdW1ucygpO1xuXG4gICAgcXVlcnkgKz0gJ1xcbkZST00gJyArIHRoaXMudGFyZ2V0LnRhYmxlO1xuXG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFdoZXJlQ2xhdXNlKCk7XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZEdyb3VwQ2xhdXNlKCk7XG5cbiAgICBxdWVyeSArPSAnXFxuT1JERVIgQlkgMSc7XG4gICAgaWYgKHRoaXMuaGFzTWV0cmljQ29sdW1uKCkpIHtcbiAgICAgIHF1ZXJ5ICs9ICcsMic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBjbG9uZSwgZmlsdGVyLCBmaW5kLCBmaW5kSW5kZXgsIGluZGV4T2YsIG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFBhbmVsRXZlbnRzLCBRdWVyeVJlc3VsdE1ldGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBTcWxQYXJ0IH0gZnJvbSAnYXBwL2FuZ3VsYXIvY29tcG9uZW50cy9zcWxfcGFydC9zcWxfcGFydCc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IHsgVmFyaWFibGVXaXRoTXVsdGlTdXBwb3J0IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3ZhcmlhYmxlcy90eXBlcyc7XG5pbXBvcnQgeyBRdWVyeUN0cmwgfSBmcm9tICdhcHAvcGx1Z2lucy9zZGsnO1xuaW1wb3J0IHsgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IH0gZnJvbSAnYXBwL3R5cGVzL2V2ZW50cyc7XG5cbmltcG9ydCB7IFBvc3RncmVzTWV0YVF1ZXJ5IH0gZnJvbSAnLi9tZXRhX3F1ZXJ5JztcbmltcG9ydCBQb3N0Z3Jlc1F1ZXJ5TW9kZWwgZnJvbSAnLi9wb3N0Z3Jlc19xdWVyeV9tb2RlbCc7XG5pbXBvcnQgc3FsUGFydCBmcm9tICcuL3NxbF9wYXJ0JztcblxuY29uc3QgZGVmYXVsdFF1ZXJ5ID0gYFNFTEVDVFxuICAkX190aW1lKHRpbWVfY29sdW1uKSxcbiAgdmFsdWUxXG5GUk9NXG4gIG1ldHJpY190YWJsZVxuV0hFUkVcbiAgJF9fdGltZUZpbHRlcih0aW1lX2NvbHVtbilcbmA7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Z3Jlc1F1ZXJ5Q3RybCBleHRlbmRzIFF1ZXJ5Q3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9xdWVyeS5lZGl0b3IuaHRtbCc7XG5cbiAgZm9ybWF0czogYW55W107XG4gIHF1ZXJ5TW9kZWw6IFBvc3RncmVzUXVlcnlNb2RlbDtcbiAgbWV0YUJ1aWxkZXI6IFBvc3RncmVzTWV0YVF1ZXJ5O1xuICBsYXN0UXVlcnlNZXRhPzogUXVlcnlSZXN1bHRNZXRhO1xuICBsYXN0UXVlcnlFcnJvcj86IHN0cmluZztcbiAgc2hvd0hlbHAgPSBmYWxzZTtcbiAgdGFibGVTZWdtZW50OiBhbnk7XG4gIHdoZXJlQWRkOiBhbnk7XG4gIHRpbWVDb2x1bW5TZWdtZW50OiBhbnk7XG4gIG1ldHJpY0NvbHVtblNlZ21lbnQ6IGFueTtcbiAgc2VsZWN0TWVudTogYW55W10gPSBbXTtcbiAgc2VsZWN0UGFydHM6IFNxbFBhcnRbXVtdID0gW1tdXTtcbiAgZ3JvdXBQYXJ0czogU3FsUGFydFtdID0gW107XG4gIHdoZXJlUGFydHM6IFNxbFBhcnRbXSA9IFtdO1xuICBncm91cEFkZDogYW55O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgJHNjb3BlOiBhbnksXG4gICAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYsXG4gICAgcHJpdmF0ZSB1aVNlZ21lbnRTcnY6IGFueVxuICApIHtcbiAgICBzdXBlcigkc2NvcGUsICRpbmplY3Rvcik7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICB0aGlzLnF1ZXJ5TW9kZWwgPSBuZXcgUG9zdGdyZXNRdWVyeU1vZGVsKHRoaXMudGFyZ2V0LCB0ZW1wbGF0ZVNydiwgdGhpcy5wYW5lbC5zY29wZWRWYXJzKTtcbiAgICB0aGlzLm1ldGFCdWlsZGVyID0gbmV3IFBvc3RncmVzTWV0YVF1ZXJ5KHRoaXMudGFyZ2V0LCB0aGlzLnF1ZXJ5TW9kZWwpO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuXG4gICAgdGhpcy5mb3JtYXRzID0gW1xuICAgICAgeyB0ZXh0OiAnVGltZSBzZXJpZXMnLCB2YWx1ZTogJ3RpbWVfc2VyaWVzJyB9LFxuICAgICAgeyB0ZXh0OiAnVGFibGUnLCB2YWx1ZTogJ3RhYmxlJyB9LFxuICAgIF07XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0LnJhd1NxbCkge1xuICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyB3aGVuIGluIHRhYmxlIHBhbmVsXG4gICAgICBpZiAodGhpcy5wYW5lbEN0cmwucGFuZWwudHlwZSA9PT0gJ3RhYmxlJykge1xuICAgICAgICB0aGlzLnRhcmdldC5mb3JtYXQgPSAndGFibGUnO1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSAnU0VMRUNUIDEnO1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdRdWVyeSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSBkZWZhdWx0UXVlcnk7XG4gICAgICAgIHRoaXMuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5maW5kTWV0cmljVGFibGUoKSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRhYmxlID0gcmVzdWx0WzBdLnRleHQ7XG4gICAgICAgICAgICBsZXQgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGFibGUpO1xuICAgICAgICAgICAgdGhpcy50YWJsZVNlZ21lbnQuaHRtbCA9IHNlZ21lbnQuaHRtbDtcbiAgICAgICAgICAgIHRoaXMudGFibGVTZWdtZW50LnZhbHVlID0gc2VnbWVudC52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy50YXJnZXQudGltZUNvbHVtbiA9IHJlc3VsdFsxXS50ZXh0O1xuICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGltZUNvbHVtbik7XG4gICAgICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50Lmh0bWwgPSBzZWdtZW50Lmh0bWw7XG4gICAgICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50LnZhbHVlID0gc2VnbWVudC52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy50YXJnZXQudGltZUNvbHVtblR5cGUgPSAndGltZXN0YW1wJztcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlbGVjdCA9IFtbeyB0eXBlOiAnY29sdW1uJywgcGFyYW1zOiBbcmVzdWx0WzJdLnRleHRdIH1dXTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0LnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlU2VnbWVudCA9IHVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6ICdzZWxlY3QgdGFibGUnLCBmYWtlOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYmxlU2VnbWVudCA9IHVpU2VnbWVudFNydi5uZXdTZWdtZW50KHRoaXMudGFyZ2V0LnRhYmxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGltZUNvbHVtbik7XG4gICAgdGhpcy5tZXRyaWNDb2x1bW5TZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQubWV0cmljQ29sdW1uKTtcblxuICAgIHRoaXMuYnVpbGRTZWxlY3RNZW51KCk7XG4gICAgdGhpcy53aGVyZUFkZCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICB0aGlzLmdyb3VwQWRkID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xuXG4gICAgdGhpcy5wYW5lbEN0cmwuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgdGhpcy5vbkRhdGFSZWNlaXZlZC5iaW5kKHRoaXMpLCAkc2NvcGUpO1xuICAgIHRoaXMucGFuZWxDdHJsLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5kYXRhRXJyb3IsIHRoaXMub25EYXRhRXJyb3IuYmluZCh0aGlzKSwgJHNjb3BlKTtcbiAgfVxuXG4gIHVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKSB7XG4gICAgaWYgKCF0aGlzLnRhcmdldC5yYXdRdWVyeSkge1xuICAgICAgdGhpcy50YXJnZXQucmF3U3FsID0gdGhpcy5xdWVyeU1vZGVsLmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhbmVsQ3RybC5yZWZyZXNoKCk7XG4gIH1cblxuICB0aW1lc2NhbGVBZ2dDaGVjaygpIHtcbiAgICBjb25zdCBhZ2dJbmRleCA9IHRoaXMuZmluZEFnZ3JlZ2F0ZUluZGV4KHRoaXMuc2VsZWN0UGFydHNbMF0pO1xuXG4gICAgLy8gYWRkIG9yIHJlbW92ZSBUaW1lc2NhbGVEQiBhZ2dyZWdhdGUgZnVuY3Rpb25zIGFzIG5lZWRlZFxuICAgIGlmIChhZ2dJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGJhc2VPcHRzID0gdGhpcy5zZWxlY3RQYXJ0c1swXVthZ2dJbmRleF0uZGVmLnBhcmFtc1swXS5iYXNlT3B0aW9ucztcbiAgICAgIGNvbnN0IHRpbWVzY2FsZU9wdHMgPSBiYXNlT3B0cy5jb25jYXQodGhpcy5zZWxlY3RQYXJ0c1swXVthZ2dJbmRleF0uZGVmLnBhcmFtc1swXS50aW1lc2NhbGVPcHRpb25zKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YXNvdXJjZS5qc29uRGF0YS50aW1lc2NhbGVkYiA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnNlbGVjdFBhcnRzWzBdW2FnZ0luZGV4XS5kZWYucGFyYW1zWzBdLm9wdGlvbnMgPSB0aW1lc2NhbGVPcHRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RQYXJ0c1swXVthZ2dJbmRleF0uZGVmLnBhcmFtc1swXS5vcHRpb25zID0gYmFzZU9wdHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUHJvamVjdGlvbigpIHtcbiAgICB0aGlzLnNlbGVjdFBhcnRzID0gbWFwKHRoaXMudGFyZ2V0LnNlbGVjdCwgKHBhcnRzOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBtYXAocGFydHMsIHNxbFBhcnQuY3JlYXRlKS5maWx0ZXIoKG4pID0+IG4pO1xuICAgIH0pO1xuICAgIHRoaXMudGltZXNjYWxlQWdnQ2hlY2soKTtcbiAgICB0aGlzLndoZXJlUGFydHMgPSBtYXAodGhpcy50YXJnZXQud2hlcmUsIHNxbFBhcnQuY3JlYXRlKS5maWx0ZXIoKG4pID0+IG4pO1xuICAgIHRoaXMuZ3JvdXBQYXJ0cyA9IG1hcCh0aGlzLnRhcmdldC5ncm91cCwgc3FsUGFydC5jcmVhdGUpLmZpbHRlcigobikgPT4gbik7XG4gIH1cblxuICB1cGRhdGVQZXJzaXN0ZWRQYXJ0cygpIHtcbiAgICB0aGlzLnRhcmdldC5zZWxlY3QgPSBtYXAodGhpcy5zZWxlY3RQYXJ0cywgKHNlbGVjdFBhcnRzKSA9PiB7XG4gICAgICByZXR1cm4gbWFwKHNlbGVjdFBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IHBhcnQuZGVmLnR5cGUsIGRhdGF0eXBlOiBwYXJ0LmRhdGF0eXBlLCBwYXJhbXM6IHBhcnQucGFyYW1zIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnRpbWVzY2FsZUFnZ0NoZWNrKCk7XG4gICAgdGhpcy50YXJnZXQud2hlcmUgPSBtYXAodGhpcy53aGVyZVBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBkYXRhdHlwZTogcGFydC5kYXRhdHlwZSwgbmFtZTogcGFydC5uYW1lLCBwYXJhbXM6IHBhcnQucGFyYW1zIH07XG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXQuZ3JvdXAgPSBtYXAodGhpcy5ncm91cFBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBkYXRhdHlwZTogcGFydC5kYXRhdHlwZSwgcGFyYW1zOiBwYXJ0LnBhcmFtcyB9O1xuICAgIH0pO1xuICB9XG5cbiAgYnVpbGRTZWxlY3RNZW51KCkge1xuICAgIHRoaXMuc2VsZWN0TWVudSA9IFtdO1xuICAgIGNvbnN0IGFnZ3JlZ2F0ZXMgPSB7XG4gICAgICB0ZXh0OiAnQWdncmVnYXRlIEZ1bmN0aW9ucycsXG4gICAgICB2YWx1ZTogJ2FnZ3JlZ2F0ZScsXG4gICAgICBzdWJtZW51OiBbXG4gICAgICAgIHsgdGV4dDogJ0F2ZXJhZ2UnLCB2YWx1ZTogJ2F2ZycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ291bnQnLCB2YWx1ZTogJ2NvdW50JyB9LFxuICAgICAgICB7IHRleHQ6ICdNYXhpbXVtJywgdmFsdWU6ICdtYXgnIH0sXG4gICAgICAgIHsgdGV4dDogJ01pbmltdW0nLCB2YWx1ZTogJ21pbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnU3VtJywgdmFsdWU6ICdzdW0nIH0sXG4gICAgICAgIHsgdGV4dDogJ1N0YW5kYXJkIGRldmlhdGlvbicsIHZhbHVlOiAnc3RkZGV2JyB9LFxuICAgICAgICB7IHRleHQ6ICdWYXJpYW5jZScsIHZhbHVlOiAndmFyaWFuY2UnIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICAvLyBmaXJzdCBhbmQgbGFzdCBhZ2dyZWdhdGUgYXJlIHRpbWVzY2FsZWRiIHNwZWNpZmljXG4gICAgaWYgKHRoaXMuZGF0YXNvdXJjZS5qc29uRGF0YS50aW1lc2NhbGVkYiA9PT0gdHJ1ZSkge1xuICAgICAgYWdncmVnYXRlcy5zdWJtZW51LnB1c2goeyB0ZXh0OiAnRmlyc3QnLCB2YWx1ZTogJ2ZpcnN0JyB9KTtcbiAgICAgIGFnZ3JlZ2F0ZXMuc3VibWVudS5wdXNoKHsgdGV4dDogJ0xhc3QnLCB2YWx1ZTogJ2xhc3QnIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKGFnZ3JlZ2F0ZXMpO1xuXG4gICAgLy8gb3JkZXJlZCBzZXQgYWdncmVnYXRlcyByZXF1aXJlIHBvc3RncmVzIDkuNCtcbiAgICBpZiAodGhpcy5kYXRhc291cmNlLmpzb25EYXRhLnBvc3RncmVzVmVyc2lvbiA+PSA5MDQpIHtcbiAgICAgIGNvbnN0IGFnZ3JlZ2F0ZXMyID0ge1xuICAgICAgICB0ZXh0OiAnT3JkZXJlZC1TZXQgQWdncmVnYXRlIEZ1bmN0aW9ucycsXG4gICAgICAgIHZhbHVlOiAncGVyY2VudGlsZScsXG4gICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICB7IHRleHQ6ICdQZXJjZW50aWxlIChjb250aW51b3VzKScsIHZhbHVlOiAncGVyY2VudGlsZV9jb250JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1BlcmNlbnRpbGUgKGRpc2NyZXRlKScsIHZhbHVlOiAncGVyY2VudGlsZV9kaXNjJyB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKGFnZ3JlZ2F0ZXMyKTtcbiAgICB9XG5cbiAgICBjb25zdCB3aW5kb3dzID0ge1xuICAgICAgdGV4dDogJ1dpbmRvdyBGdW5jdGlvbnMnLFxuICAgICAgdmFsdWU6ICd3aW5kb3cnLFxuICAgICAgc3VibWVudTogW1xuICAgICAgICB7IHRleHQ6ICdEZWx0YScsIHZhbHVlOiAnZGVsdGEnIH0sXG4gICAgICAgIHsgdGV4dDogJ0luY3JlYXNlJywgdmFsdWU6ICdpbmNyZWFzZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmF0ZScsIHZhbHVlOiAncmF0ZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnU3VtJywgdmFsdWU6ICdzdW0nIH0sXG4gICAgICAgIHsgdGV4dDogJ01vdmluZyBBdmVyYWdlJywgdmFsdWU6ICdhdmcnLCB0eXBlOiAnbW92aW5nX3dpbmRvdycgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdE1lbnUucHVzaCh3aW5kb3dzKTtcblxuICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKHsgdGV4dDogJ0FsaWFzJywgdmFsdWU6ICdhbGlhcycgfSk7XG4gICAgdGhpcy5zZWxlY3RNZW51LnB1c2goeyB0ZXh0OiAnQ29sdW1uJywgdmFsdWU6ICdjb2x1bW4nIH0pO1xuICB9XG5cbiAgdG9nZ2xlRWRpdG9yTW9kZSgpIHtcbiAgICBpZiAodGhpcy50YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIGFwcEV2ZW50cy5wdWJsaXNoKFxuICAgICAgICBuZXcgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50KHtcbiAgICAgICAgICB0aXRsZTogJ1dhcm5pbmcnLFxuICAgICAgICAgIHRleHQyOiAnU3dpdGNoaW5nIHRvIHF1ZXJ5IGJ1aWxkZXIgbWF5IG92ZXJ3cml0ZSB5b3VyIHJhdyBTUUwuJyxcbiAgICAgICAgICBpY29uOiAnZXhjbGFtYXRpb24tdHJpYW5nbGUnLFxuICAgICAgICAgIHllc1RleHQ6ICdTd2l0Y2gnLFxuICAgICAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgICAgLy8gVGhpcyBjb3VsZCBiZSBjYWxsZWQgZnJvbSBSZWFjdCwgc28gd3JhcCBpbiAkZXZhbEFzeW5jLlxuICAgICAgICAgICAgLy8gV2lsbCB0aGVuIGVpdGhlciBydW4gYXMgcGFydCBvZiB0aGUgY3VycmVudCBkaWdlc3QgY3ljbGUgb3IgdHJpZ2dlciBhIG5ldyBvbmUuXG4gICAgICAgICAgICB0aGlzLiRzY29wZS4kZXZhbEFzeW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmF3UXVlcnkgPSAhdGhpcy50YXJnZXQucmF3UXVlcnk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBjb3VsZCBiZSBjYWxsZWQgZnJvbSBSZWFjdCwgc28gd3JhcCBpbiAkZXZhbEFzeW5jLlxuICAgICAgLy8gV2lsbCB0aGVuIGVpdGhlciBydW4gYXMgcGFydCBvZiB0aGUgY3VycmVudCBkaWdlc3QgY3ljbGUgb3IgdHJpZ2dlciBhIG5ldyBvbmUuXG4gICAgICB0aGlzLiRzY29wZS4kZXZhbEFzeW5jKCgpID0+IHtcbiAgICAgICAgdGhpcy50YXJnZXQucmF3UXVlcnkgPSAhdGhpcy50YXJnZXQucmF3UXVlcnk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXNldFBsdXNCdXR0b24oYnV0dG9uOiB7IGh0bWw6IGFueTsgdmFsdWU6IGFueTsgdHlwZTogYW55OyBmYWtlOiBhbnkgfSkge1xuICAgIGNvbnN0IHBsdXNCdXR0b24gPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XG4gICAgYnV0dG9uLmh0bWwgPSBwbHVzQnV0dG9uLmh0bWw7XG4gICAgYnV0dG9uLnZhbHVlID0gcGx1c0J1dHRvbi52YWx1ZTtcbiAgICBidXR0b24udHlwZSA9IHBsdXNCdXR0b24udHlwZTtcbiAgICBidXR0b24uZmFrZSA9IHBsdXNCdXR0b24uZmFrZTtcbiAgfVxuXG4gIGdldFRhYmxlU2VnbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkVGFibGVRdWVyeSgpKVxuICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICB0YWJsZUNoYW5nZWQoKSB7XG4gICAgdGhpcy50YXJnZXQudGFibGUgPSB0aGlzLnRhYmxlU2VnbWVudC52YWx1ZTtcbiAgICB0aGlzLnRhcmdldC53aGVyZSA9IFtdO1xuICAgIHRoaXMudGFyZ2V0Lmdyb3VwID0gW107XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG5cbiAgICBjb25zdCBzZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCgnbm9uZScpO1xuICAgIHRoaXMubWV0cmljQ29sdW1uU2VnbWVudC5odG1sID0gc2VnbWVudC5odG1sO1xuICAgIHRoaXMubWV0cmljQ29sdW1uU2VnbWVudC52YWx1ZSA9IHNlZ21lbnQudmFsdWU7XG4gICAgdGhpcy50YXJnZXQubWV0cmljQ29sdW1uID0gJ25vbmUnO1xuXG4gICAgY29uc3QgdGFzazEgPSB0aGlzLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgndGltZScpKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgdGltZSBjb2x1bW4gaXMgc3RpbGwgdmFsaWRcbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCAmJiAhZmluZChyZXN1bHQsIChyOiBhbnkpID0+IHIudGV4dCA9PT0gdGhpcy50YXJnZXQudGltZUNvbHVtbikpIHtcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQocmVzdWx0WzBdLnRleHQpO1xuICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50Lmh0bWwgPSBzZWdtZW50Lmh0bWw7XG4gICAgICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQudmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudGltZUNvbHVtbkNoYW5nZWQoZmFsc2UpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRhc2syID0gdGhpcy5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ3ZhbHVlJykpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gW1t7IHR5cGU6ICdjb2x1bW4nLCBwYXJhbXM6IFtyZXN1bHRbMF0udGV4dF0gfV1dO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFByb21pc2UuYWxsKFt0YXNrMSwgdGFzazJdKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGltZUNvbHVtblNlZ21lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCd0aW1lJykpXG4gICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHRpbWVDb2x1bW5DaGFuZ2VkKHJlZnJlc2g/OiBib29sZWFuKSB7XG4gICAgdGhpcy50YXJnZXQudGltZUNvbHVtbiA9IHRoaXMudGltZUNvbHVtblNlZ21lbnQudmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkRGF0YXR5cGVRdWVyeSh0aGlzLnRhcmdldC50aW1lQ29sdW1uKSlcbiAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmICh0aGlzLnRhcmdldC50aW1lQ29sdW1uVHlwZSAhPT0gcmVzdWx0WzBdLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlID0gcmVzdWx0WzBdLnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBwYXJ0TW9kZWw7XG4gICAgICAgICAgaWYgKHRoaXMucXVlcnlNb2RlbC5oYXNVbml4RXBvY2hUaW1lY29sdW1uKCkpIHtcbiAgICAgICAgICAgIHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ21hY3JvJywgbmFtZTogJyRfX3VuaXhFcG9jaEZpbHRlcicsIHBhcmFtczogW10gfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ21hY3JvJywgbmFtZTogJyRfX3RpbWVGaWx0ZXInLCBwYXJhbXM6IFtdIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLndoZXJlUGFydHMubGVuZ3RoID49IDEgJiYgdGhpcy53aGVyZVBhcnRzWzBdLmRlZi50eXBlID09PSAnbWFjcm8nKSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbWFjcm9cbiAgICAgICAgICAgIHRoaXMud2hlcmVQYXJ0c1swXSA9IHBhcnRNb2RlbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53aGVyZVBhcnRzLnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgaWYgKHJlZnJlc2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0TWV0cmljQ29sdW1uU2VnbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ21ldHJpYycpKVxuICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHsgYWRkTm9uZTogdHJ1ZSB9KSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICBtZXRyaWNDb2x1bW5DaGFuZ2VkKCkge1xuICAgIHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbiA9IHRoaXMubWV0cmljQ29sdW1uU2VnbWVudC52YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgfVxuXG4gIG9uRGF0YVJlY2VpdmVkKGRhdGFMaXN0OiBhbnkpIHtcbiAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFzdFF1ZXJ5TWV0YSA9IGRhdGFMaXN0WzBdPy5tZXRhO1xuICB9XG5cbiAgb25EYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICBpZiAoZXJyLmRhdGEgJiYgZXJyLmRhdGEucmVzdWx0cykge1xuICAgICAgY29uc3QgcXVlcnlSZXMgPSBlcnIuZGF0YS5yZXN1bHRzW3RoaXMudGFyZ2V0LnJlZklkXTtcbiAgICAgIGlmIChxdWVyeVJlcykge1xuICAgICAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gcXVlcnlSZXMuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJhbnNmb3JtVG9TZWdtZW50cyhjb25maWc6IHsgYWRkTm9uZT86IGFueTsgYWRkVGVtcGxhdGVWYXJzPzogYW55OyB0ZW1wbGF0ZVF1b3Rlcj86IGFueSB9KSB7XG4gICAgcmV0dXJuIChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gbWFwKHJlc3VsdHMsIChzZWdtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHtcbiAgICAgICAgICB2YWx1ZTogc2VnbWVudC50ZXh0LFxuICAgICAgICAgIGV4cGFuZGFibGU6IHNlZ21lbnQuZXhwYW5kYWJsZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbmZpZy5hZGRUZW1wbGF0ZVZhcnMpIHtcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYWJsZSBvZiB0aGlzLnRlbXBsYXRlU3J2LmdldFZhcmlhYmxlcygpKSB7XG4gICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgIHZhbHVlID0gJyQnICsgdmFyaWFibGUubmFtZTtcbiAgICAgICAgICBpZiAoY29uZmlnLnRlbXBsYXRlUXVvdGVyICYmICh2YXJpYWJsZSBhcyB1bmtub3duIGFzIFZhcmlhYmxlV2l0aE11bHRpU3VwcG9ydCkubXVsdGkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGNvbmZpZy50ZW1wbGF0ZVF1b3Rlcih2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VnbWVudHMudW5zaGlmdChcbiAgICAgICAgICAgIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoe1xuICAgICAgICAgICAgICB0eXBlOiAndGVtcGxhdGUnLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5hZGROb25lKSB7XG4gICAgICAgIHNlZ21lbnRzLnVuc2hpZnQodGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICd0ZW1wbGF0ZScsIHZhbHVlOiAnbm9uZScsIGV4cGFuZGFibGU6IHRydWUgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VnbWVudHM7XG4gICAgfTtcbiAgfVxuXG4gIGZpbmRBZ2dyZWdhdGVJbmRleChzZWxlY3RQYXJ0czogYW55KSB7XG4gICAgcmV0dXJuIGZpbmRJbmRleChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScgfHwgcC5kZWYudHlwZSA9PT0gJ3BlcmNlbnRpbGUnKTtcbiAgfVxuXG4gIGZpbmRXaW5kb3dJbmRleChzZWxlY3RQYXJ0czogYW55KSB7XG4gICAgcmV0dXJuIGZpbmRJbmRleChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ3dpbmRvdycgfHwgcC5kZWYudHlwZSA9PT0gJ21vdmluZ193aW5kb3cnKTtcbiAgfVxuXG4gIGFkZFNlbGVjdFBhcnQoc2VsZWN0UGFydHM6IGFueVtdLCBpdGVtOiB7IHZhbHVlOiBhbnkgfSwgc3ViSXRlbTogeyB0eXBlOiBhbnk7IHZhbHVlOiBhbnkgfSkge1xuICAgIGxldCBwYXJ0VHlwZSA9IGl0ZW0udmFsdWU7XG4gICAgaWYgKHN1Ykl0ZW0gJiYgc3ViSXRlbS50eXBlKSB7XG4gICAgICBwYXJ0VHlwZSA9IHN1Ykl0ZW0udHlwZTtcbiAgICB9XG4gICAgbGV0IHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogcGFydFR5cGUgfSk7XG4gICAgaWYgKHN1Ykl0ZW0pIHtcbiAgICAgIHBhcnRNb2RlbC5wYXJhbXNbMF0gPSBzdWJJdGVtLnZhbHVlO1xuICAgIH1cbiAgICBsZXQgYWRkQWxpYXMgPSBmYWxzZTtcblxuICAgIHN3aXRjaCAocGFydFR5cGUpIHtcbiAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbWFwKHNlbGVjdFBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogcGFydC5kZWYudHlwZSwgcGFyYW1zOiBjbG9uZShwYXJ0LnBhcmFtcykgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdFBhcnRzLnB1c2gocGFydHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BlcmNlbnRpbGUnOlxuICAgICAgY2FzZSAnYWdncmVnYXRlJzpcbiAgICAgICAgLy8gYWRkIGdyb3VwIGJ5IGlmIG5vIGdyb3VwIGJ5IHlldFxuICAgICAgICBpZiAodGhpcy50YXJnZXQuZ3JvdXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5hZGRHcm91cCgndGltZScsICckX19pbnRlcnZhbCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFnZ0luZGV4ID0gdGhpcy5maW5kQWdncmVnYXRlSW5kZXgoc2VsZWN0UGFydHMpO1xuICAgICAgICBpZiAoYWdnSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IGFnZ3JlZ2F0aW9uXG4gICAgICAgICAgc2VsZWN0UGFydHNbYWdnSW5kZXhdID0gcGFydE1vZGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmluZChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ2FsaWFzJykpIHtcbiAgICAgICAgICBhZGRBbGlhcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb3Zpbmdfd2luZG93JzpcbiAgICAgIGNhc2UgJ3dpbmRvdyc6XG4gICAgICAgIGNvbnN0IHdpbmRvd0luZGV4ID0gdGhpcy5maW5kV2luZG93SW5kZXgoc2VsZWN0UGFydHMpO1xuICAgICAgICBpZiAod2luZG93SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IHdpbmRvdyBmdW5jdGlvblxuICAgICAgICAgIHNlbGVjdFBhcnRzW3dpbmRvd0luZGV4XSA9IHBhcnRNb2RlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhZ2dJbmRleCA9IHRoaXMuZmluZEFnZ3JlZ2F0ZUluZGV4KHNlbGVjdFBhcnRzKTtcbiAgICAgICAgICBpZiAoYWdnSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoYWdnSW5kZXggKyAxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoMSwgMCwgcGFydE1vZGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaW5kKHNlbGVjdFBhcnRzLCAocDogYW55KSA9PiBwLmRlZi50eXBlID09PSAnYWxpYXMnKSkge1xuICAgICAgICAgIGFkZEFsaWFzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FsaWFzJzpcbiAgICAgICAgYWRkQWxpYXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoYWRkQWxpYXMpIHtcbiAgICAgIC8vIHNldCBpbml0aWFsIGFsaWFzIG5hbWUgdG8gY29sdW1uIG5hbWVcbiAgICAgIHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ2FsaWFzJywgcGFyYW1zOiBbc2VsZWN0UGFydHNbMF0ucGFyYW1zWzBdLnJlcGxhY2UoL1wiL2csICcnKV0gfSk7XG4gICAgICBpZiAoc2VsZWN0UGFydHNbc2VsZWN0UGFydHMubGVuZ3RoIC0gMV0uZGVmLnR5cGUgPT09ICdhbGlhcycpIHtcbiAgICAgICAgc2VsZWN0UGFydHNbc2VsZWN0UGFydHMubGVuZ3RoIC0gMV0gPSBwYXJ0TW9kZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RQYXJ0cy5wdXNoKHBhcnRNb2RlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICB9XG5cbiAgcmVtb3ZlU2VsZWN0UGFydChzZWxlY3RQYXJ0czogYW55LCBwYXJ0OiB7IGRlZjogeyB0eXBlOiBzdHJpbmcgfSB9KSB7XG4gICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgICAvLyByZW1vdmUgYWxsIHBhcnRzIG9mIGNvbHVtbiB1bmxlc3MgaXRzIGxhc3QgY29sdW1uXG4gICAgICBpZiAodGhpcy5zZWxlY3RQYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsc0luZGV4ID0gaW5kZXhPZih0aGlzLnNlbGVjdFBhcnRzLCBzZWxlY3RQYXJ0cyk7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFydHMuc3BsaWNlKG1vZGVsc0luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFydEluZGV4ID0gaW5kZXhPZihzZWxlY3RQYXJ0cywgcGFydCk7XG4gICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UocGFydEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RQYXJ0RXZlbnQoc2VsZWN0UGFydHM6IGFueSwgcGFydDogeyBkZWY6IGFueSB9LCBldnQ6IHsgbmFtZTogYW55IH0pIHtcbiAgICBzd2l0Y2ggKGV2dC5uYW1lKSB7XG4gICAgICBjYXNlICdnZXQtcGFyYW0tb3B0aW9ucyc6IHtcbiAgICAgICAgc3dpdGNoIChwYXJ0LmRlZi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYWdncmVnYXRlJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgICAgICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQWdncmVnYXRlUXVlcnkoKSlcbiAgICAgICAgICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSAncGFydC1wYXJhbS1jaGFuZ2VkJzoge1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2FjdGlvbic6IHtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RQYXJ0KHNlbGVjdFBhcnRzLCBwYXJ0KTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZ2V0LXBhcnQtYWN0aW9ucyc6IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbeyB0ZXh0OiAnUmVtb3ZlJywgdmFsdWU6ICdyZW1vdmUtcGFydCcgfV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUdyb3VwUGFydEV2ZW50KHBhcnQ6IGFueSwgaW5kZXg6IGFueSwgZXZ0OiB7IG5hbWU6IGFueSB9KSB7XG4gICAgc3dpdGNoIChldnQubmFtZSkge1xuICAgICAgY2FzZSAnZ2V0LXBhcmFtLW9wdGlvbnMnOiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgpKVxuICAgICAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3BhcnQtcGFyYW0tY2hhbmdlZCc6IHtcbiAgICAgICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdhY3Rpb24nOiB7XG4gICAgICAgIHRoaXMucmVtb3ZlR3JvdXAocGFydCwgaW5kZXgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdnZXQtcGFydC1hY3Rpb25zJzoge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt7IHRleHQ6ICdSZW1vdmUnLCB2YWx1ZTogJ3JlbW92ZS1wYXJ0JyB9XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkR3JvdXAocGFydFR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGxldCBwYXJhbXMgPSBbdmFsdWVdO1xuICAgIGlmIChwYXJ0VHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICBwYXJhbXMgPSBbJyRfX2ludGVydmFsJywgJ25vbmUnXTtcbiAgICB9XG4gICAgY29uc3QgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiBwYXJ0VHlwZSwgcGFyYW1zOiBwYXJhbXMgfSk7XG5cbiAgICBpZiAocGFydFR5cGUgPT09ICd0aW1lJykge1xuICAgICAgLy8gcHV0IHRpbWVHcm91cCBhdCBzdGFydFxuICAgICAgdGhpcy5ncm91cFBhcnRzLnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyb3VwUGFydHMucHVzaChwYXJ0TW9kZWwpO1xuICAgIH1cblxuICAgIC8vIGFkZCBhZ2dyZWdhdGVzIHdoZW4gYWRkaW5nIGdyb3VwIGJ5XG4gICAgZm9yIChjb25zdCBzZWxlY3RQYXJ0cyBvZiB0aGlzLnNlbGVjdFBhcnRzKSB7XG4gICAgICBpZiAoIXNlbGVjdFBhcnRzLnNvbWUoKHBhcnQpID0+IHBhcnQuZGVmLnR5cGUgPT09ICdhZ2dyZWdhdGUnKSkge1xuICAgICAgICBjb25zdCBhZ2dyZWdhdGUgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdhZ2dyZWdhdGUnLCBwYXJhbXM6IFsnYXZnJ10gfSk7XG4gICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBhZ2dyZWdhdGUpO1xuICAgICAgICBpZiAoIXNlbGVjdFBhcnRzLnNvbWUoKHBhcnQpID0+IHBhcnQuZGVmLnR5cGUgPT09ICdhbGlhcycpKSB7XG4gICAgICAgICAgY29uc3QgYWxpYXMgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdhbGlhcycsIHBhcmFtczogW3NlbGVjdFBhcnRzWzBdLnBhcnQucGFyYW1zWzBdXSB9KTtcbiAgICAgICAgICBzZWxlY3RQYXJ0cy5wdXNoKGFsaWFzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgfVxuXG4gIHJlbW92ZUdyb3VwKHBhcnQ6IHsgZGVmOiB7IHR5cGU6IHN0cmluZyB9IH0sIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAvLyByZW1vdmUgYWdncmVnYXRpb25zXG4gICAgICB0aGlzLnNlbGVjdFBhcnRzID0gbWFwKHRoaXMuc2VsZWN0UGFydHMsIChzOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcihzLCAocGFydDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICdhZ2dyZWdhdGUnIHx8IHBhcnQuZGVmLnR5cGUgPT09ICdwZXJjZW50aWxlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3VwUGFydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gIH1cblxuICBoYW5kbGVXaGVyZVBhcnRFdmVudCh3aGVyZVBhcnRzOiBhbnksIHBhcnQ6IGFueSwgZXZ0OiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICBzd2l0Y2ggKGV2dC5uYW1lKSB7XG4gICAgICBjYXNlICdnZXQtcGFyYW0tb3B0aW9ucyc6IHtcbiAgICAgICAgc3dpdGNoIChldnQucGFyYW0ubmFtZSkge1xuICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgpKVxuICAgICAgICAgICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIGlmIChbJ2ludDQnLCAnaW50OCcsICdmbG9hdDQnLCAnZmxvYXQ4JywgJ3RpbWVzdGFtcCcsICd0aW1lc3RhbXB0eiddLmluZGV4T2YocGFydC5kYXRhdHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgICAvLyBkb24ndCBkbyB2YWx1ZSBsb29rdXBzIGZvciBudW1lcmljYWwgZmllbGRzXG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZFZhbHVlUXVlcnkocGFydC5wYXJhbXNbMF0pKVxuICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVGVtcGxhdGVWYXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVF1b3RlcjogKHY6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHYpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdvcCc6XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudWlTZWdtZW50U3J2Lm5ld09wZXJhdG9ycyh0aGlzLm1ldGFCdWlsZGVyLmdldE9wZXJhdG9ycyhwYXJ0LmRhdGF0eXBlKSkpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSAncGFydC1wYXJhbS1jaGFuZ2VkJzoge1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIHRoaXMuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZERhdGF0eXBlUXVlcnkocGFydC5wYXJhbXNbMF0pKS50aGVuKChkOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBhcnQuZGF0YXR5cGUgPSBkWzBdLnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnYWN0aW9uJzoge1xuICAgICAgICAvLyByZW1vdmUgZWxlbWVudFxuICAgICAgICB3aGVyZVBhcnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZ2V0LXBhcnQtYWN0aW9ucyc6IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbeyB0ZXh0OiAnUmVtb3ZlJywgdmFsdWU6ICdyZW1vdmUtcGFydCcgfV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFdoZXJlT3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgaWYgKHRoaXMucXVlcnlNb2RlbC5oYXNVbml4RXBvY2hUaW1lY29sdW1uKCkpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ21hY3JvJywgdmFsdWU6ICckX191bml4RXBvY2hGaWx0ZXInIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAnbWFjcm8nLCB2YWx1ZTogJyRfX3RpbWVGaWx0ZXInIH0pKTtcbiAgICB9XG4gICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAnZXhwcmVzc2lvbicsIHZhbHVlOiAnRXhwcmVzc2lvbicgfSkpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUob3B0aW9ucyk7XG4gIH1cblxuICBhZGRXaGVyZUFjdGlvbihwYXJ0OiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICBzd2l0Y2ggKHRoaXMud2hlcmVBZGQudHlwZSkge1xuICAgICAgY2FzZSAnbWFjcm8nOiB7XG4gICAgICAgIGNvbnN0IHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ21hY3JvJywgbmFtZTogdGhpcy53aGVyZUFkZC52YWx1ZSwgcGFyYW1zOiBbXSB9KTtcbiAgICAgICAgaWYgKHRoaXMud2hlcmVQYXJ0cy5sZW5ndGggPj0gMSAmJiB0aGlzLndoZXJlUGFydHNbMF0uZGVmLnR5cGUgPT09ICdtYWNybycpIHtcbiAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbWFjcm9cbiAgICAgICAgICB0aGlzLndoZXJlUGFydHNbMF0gPSBwYXJ0TW9kZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy53aGVyZVBhcnRzLnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aGlzLndoZXJlUGFydHMucHVzaChzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdleHByZXNzaW9uJywgcGFyYW1zOiBbJ3ZhbHVlJywgJz0nLCAndmFsdWUnXSB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgIHRoaXMucmVzZXRQbHVzQnV0dG9uKHRoaXMud2hlcmVBZGQpO1xuICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0R3JvdXBPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCdncm91cCcpKVxuICAgICAgLnRoZW4oKHRhZ3M6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgICAgIGlmICghdGhpcy5xdWVyeU1vZGVsLmhhc1RpbWVHcm91cCgpKSB7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAndGltZScsIHZhbHVlOiAndGltZSgkX19pbnRlcnZhbCxub25lKScgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICdjb2x1bW4nLCB2YWx1ZTogdGFnLnRleHQgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRHcm91cEFjdGlvbigpIHtcbiAgICB0aGlzLmFkZEdyb3VwKHRoaXMuZ3JvdXBBZGQudHlwZSwgdGhpcy5ncm91cEFkZC52YWx1ZSk7XG4gICAgdGhpcy5yZXNldFBsdXNCdXR0b24odGhpcy5ncm91cEFkZCk7XG4gICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gIH1cblxuICBoYW5kbGVRdWVyeUVycm9yKGVycjogYW55KTogYW55W10ge1xuICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGlzc3VlIG1ldHJpYyBxdWVyeSc7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBbm5vdGF0aW9uRXZlbnQsIERhdGFGcmFtZSwgTWV0cmljRmluZFZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlLCBGZXRjaFJlc3BvbnNlLCB0b0RhdGFRdWVyeVJlc3BvbnNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlUGFyc2VyIHtcbiAgdHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlKHJhdzogRmV0Y2hSZXNwb25zZTxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPik6IE1ldHJpY0ZpbmRWYWx1ZVtdIHtcbiAgICBjb25zdCBmcmFtZXMgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKHJhdykuZGF0YSBhcyBEYXRhRnJhbWVbXTtcblxuICAgIGlmICghZnJhbWVzIHx8ICFmcmFtZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG5cbiAgICBjb25zdCB2YWx1ZXM6IE1ldHJpY0ZpbmRWYWx1ZVtdID0gW107XG4gICAgY29uc3QgdGV4dEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ19fdGV4dCcpO1xuICAgIGNvbnN0IHZhbHVlRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnX192YWx1ZScpO1xuXG4gICAgaWYgKHRleHRGaWVsZCAmJiB2YWx1ZUZpZWxkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRGaWVsZC52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWVzLnB1c2goeyB0ZXh0OiAnJyArIHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpLCB2YWx1ZTogJycgKyB2YWx1ZUZpZWxkLnZhbHVlcy5nZXQoaSkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlcy5wdXNoKFxuICAgICAgICAuLi5mcmFtZS5maWVsZHNcbiAgICAgICAgICAuZmxhdE1hcCgoZikgPT4gZi52YWx1ZXMudG9BcnJheSgpKVxuICAgICAgICAgIC5tYXAoKHYpID0+ICh7XG4gICAgICAgICAgICB0ZXh0OiB2LFxuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHZhbHVlcy5tYXAoKHYpID0+IHYudGV4dCkpKS5tYXAoKHRleHQpID0+ICh7XG4gICAgICB0ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlcy5maW5kKCh2KSA9PiB2LnRleHQgPT09IHRleHQpPy52YWx1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyB0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2Uob3B0aW9uczogYW55LCBkYXRhOiBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlKTogUHJvbWlzZTxBbm5vdGF0aW9uRXZlbnRbXT4ge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiBkYXRhIH0pLmRhdGEgYXMgRGF0YUZyYW1lW107XG4gICAgaWYgKCFmcmFtZXMgfHwgIWZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG4gICAgY29uc3QgdGltZUZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpbWUnKTtcblxuICAgIGlmICghdGltZUZpZWxkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbWFuZGF0b3J5IHRpbWUgY29sdW1uICh3aXRoIHRpbWUgY29sdW1uIGFsaWFzKSBpbiBhbm5vdGF0aW9uIHF1ZXJ5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGltZUVuZEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpbWVlbmQnKTtcbiAgICBjb25zdCB0ZXh0RmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGV4dCcpO1xuICAgIGNvbnN0IHRhZ3NGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0YWdzJyk7XG5cbiAgICBjb25zdCBsaXN0OiBBbm5vdGF0aW9uRXZlbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRpbWVFbmQgPSB0aW1lRW5kRmllbGQgJiYgdGltZUVuZEZpZWxkLnZhbHVlcy5nZXQoaSkgPyBNYXRoLmZsb29yKHRpbWVFbmRGaWVsZC52YWx1ZXMuZ2V0KGkpKSA6IHVuZGVmaW5lZDtcbiAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgIGFubm90YXRpb246IG9wdGlvbnMuYW5ub3RhdGlvbixcbiAgICAgICAgdGltZTogTWF0aC5mbG9vcih0aW1lRmllbGQudmFsdWVzLmdldChpKSksXG4gICAgICAgIHRpbWVFbmQsXG4gICAgICAgIHRleHQ6IHRleHRGaWVsZCAmJiB0ZXh0RmllbGQudmFsdWVzLmdldChpKSA/IHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpIDogJycsXG4gICAgICAgIHRhZ3M6XG4gICAgICAgICAgdGFnc0ZpZWxkICYmIHRhZ3NGaWVsZC52YWx1ZXMuZ2V0KGkpXG4gICAgICAgICAgICA/IHRhZ3NGaWVsZC52YWx1ZXNcbiAgICAgICAgICAgICAgICAuZ2V0KGkpXG4gICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAgICAgICAgIDogW10sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3FsUGFydERlZiwgU3FsUGFydCB9IGZyb20gJ2FwcC9hbmd1bGFyL2NvbXBvbmVudHMvc3FsX3BhcnQvc3FsX3BhcnQnO1xuXG5jb25zdCBpbmRleDogYW55W10gPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlUGFydChwYXJ0OiBhbnkpOiBhbnkge1xuICBjb25zdCBkZWYgPSBpbmRleFtwYXJ0LnR5cGVdO1xuICBpZiAoIWRlZikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTcWxQYXJ0KHBhcnQsIGRlZik7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKG9wdGlvbnM6IGFueSkge1xuICBpbmRleFtvcHRpb25zLnR5cGVdID0gbmV3IFNxbFBhcnREZWYob3B0aW9ucyk7XG59XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2NvbHVtbicsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBwYXJhbXM6IFt7IHR5cGU6ICdjb2x1bW4nLCBkeW5hbWljTG9va3VwOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3ZhbHVlJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZXhwcmVzc2lvbicsXG4gIHN0eWxlOiAnZXhwcmVzc2lvbicsXG4gIGxhYmVsOiAnRXhwcjonLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdsZWZ0JywgdHlwZTogJ3N0cmluZycsIGR5bmFtaWNMb29rdXA6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvcCcsIHR5cGU6ICdzdHJpbmcnLCBkeW5hbWljTG9va3VwOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAncmlnaHQnLCB0eXBlOiAnc3RyaW5nJywgZHluYW1pY0xvb2t1cDogdHJ1ZSB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3ZhbHVlJywgJz0nLCAndmFsdWUnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtYWNybycsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBsYWJlbDogJ01hY3JvOicsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2FnZ3JlZ2F0ZScsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnbmFtZScsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgYmFzZU9wdGlvbnM6IFsnYXZnJywgJ2NvdW50JywgJ21pbicsICdtYXgnLCAnc3VtJywgJ3N0ZGRldicsICd2YXJpYW5jZSddLFxuICAgICAgdGltZXNjYWxlT3B0aW9uczogWydmaXJzdCcsICdsYXN0J10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydhdmcnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdwZXJjZW50aWxlJyxcbiAgbGFiZWw6ICdBZ2dyZWdhdGU6JyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydwZXJjZW50aWxlX2NvbnQnLCAncGVyY2VudGlsZV9kaXNjJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZnJhY3Rpb24nLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBvcHRpb25zOiBbJzAuNScsICcwLjc1JywgJzAuOScsICcwLjk1JywgJzAuOTknXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3BlcmNlbnRpbGVfY29udCcsICcwLjk1J10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnYWxpYXMnLFxuICBzdHlsZTogJ2xhYmVsJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbmFtZScsIHR5cGU6ICdzdHJpbmcnLCBxdW90ZTogJ2RvdWJsZScgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnYWxpYXMnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd0aW1lJyxcbiAgc3R5bGU6ICdmdW5jdGlvbicsXG4gIGxhYmVsOiAndGltZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdpbnRlcnZhbCcsXG4gICAgICB0eXBlOiAnaW50ZXJ2YWwnLFxuICAgICAgb3B0aW9uczogWyckX19pbnRlcnZhbCcsICcxcycsICcxMHMnLCAnMW0nLCAnNW0nLCAnMTBtJywgJzE1bScsICcxaCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2ZpbGwnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ25vbmUnLCAnTlVMTCcsICdwcmV2aW91cycsICcwJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWyckX19pbnRlcnZhbCcsICdub25lJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnd2luZG93JyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdmdW5jdGlvbicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnZGVsdGEnLCAnaW5jcmVhc2UnLCAncmF0ZScsICdzdW0nXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2luY3JlYXNlJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbW92aW5nX3dpbmRvdycsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBsYWJlbDogJ01vdmluZyBXaW5kb3c6JyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydhdmcnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd3aW5kb3dfc2l6ZScsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG9wdGlvbnM6IFsnMycsICc1JywgJzcnLCAnMTAnLCAnMjAnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2F2ZycsICc1J10sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGU6IGNyZWF0ZVBhcnQsXG59O1xuIiwiaW1wb3J0IHsgbWFrZUNsYXNzRVM1Q29tcGF0aWJsZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9hZFBsdWdpbkNzcyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTWV0cmljc1BhbmVsQ3RybCBhcyBNZXRyaWNzUGFuZWxDdHJsRVM2IH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvbWV0cmljc19wYW5lbF9jdHJsJztcbmltcG9ydCB7IFBhbmVsQ3RybCBhcyBQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IFF1ZXJ5Q3RybCBhcyBRdWVyeUN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsJztcblxuY29uc3QgUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShQYW5lbEN0cmxFUzYpO1xuY29uc3QgTWV0cmljc1BhbmVsQ3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoTWV0cmljc1BhbmVsQ3RybEVTNik7XG5jb25zdCBRdWVyeUN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFF1ZXJ5Q3RybEVTNik7XG5cbmV4cG9ydCB7IFBhbmVsQ3RybCwgTWV0cmljc1BhbmVsQ3RybCwgUXVlcnlDdHJsLCBsb2FkUGx1Z2luQ3NzIH07XG4iXSwibmFtZXMiOlsiZGVwcmVjYXRpb25XYXJuaW5nIiwidXJsVXRpbCIsImxvY2F0aW9uU2VhcmNoVG9PYmplY3QiLCJsb2NhdGlvblNlcnZpY2UiLCJuYXZpZ2F0aW9uTG9nZ2VyIiwiREVGQVVMVF9QT1JUUyIsImh0dHAiLCJodHRwcyIsImZ0cCIsIkFuZ3VsYXJMb2NhdGlvbldyYXBwZXIiLCJjb25zdHJ1Y3RvciIsImFic1VybCIsIndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyIsImhhc2giLCJob3N0IiwicGF0aCIsInBvcnQiLCJwcm90b2NvbCIsInJlcGxhY2UiLCJzZWFyY2giLCJzdGF0ZSIsInVybCIsImZuIiwicmVwbGFjZW1lbnQiLCJzZWxmIiwid3JhcHBlciIsIm5hbWUiLCJhcHBseSIsImFyZ3VtZW50cyIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibmV3SGFzaCIsImdldExvY2F0aW9uIiwic2xpY2UiLCJFcnJvciIsIlVSTCIsImhyZWYiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwicGFyc2VkUGF0aCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJwdXNoIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJwYXJhbVZhbHVlIiwiZ2V0U2VhcmNoT2JqZWN0IiwicGFydGlhbCIsIm5ld1F1ZXJ5Iiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsInVwZGF0ZWRVcmwiLCJyZW5kZXJVcmwiLCJuZXdVcmwiLCJ0cmltIiwiY2xvbmUiLCJTcWxQYXJ0RGVmIiwib3B0aW9ucyIsInR5cGUiLCJsYWJlbCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwic3R5bGUiLCJ3cmFwT3BlbiIsIndyYXBDbG9zZSIsInNlcGFyYXRvciIsInBhcmFtcyIsImRlZmF1bHRQYXJhbXMiLCJTcWxQYXJ0IiwicGFydCIsImRlZiIsIm1lc3NhZ2UiLCJkYXRhdHlwZSIsInVwZGF0ZVBhcmFtIiwic3RyVmFsdWUiLCJpbmRleCIsIm9wdGlvbmFsIiwic3BsaWNlIiwiaXNBcnJheSIsIkxvYWRpbmdTdGF0ZSIsIlBhbmVsRXZlbnRzIiwidG9EYXRhRnJhbWVEVE8iLCJ0b0xlZ2FjeVJlc3BvbnNlRGF0YSIsIlBhbmVsQ3RybCIsImFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIiwiTWV0cmljc1BhbmVsQ3RybCIsIiRzY29wZSIsIiRpbmplY3RvciIsIm5leHQiLCJkYXRhIiwicGFuZWxEYXRhIiwibG9hZGluZyIsInByb2Nlc3NEYXRhRXJyb3IiLCJlcnJvciIsIkxvYWRpbmciLCJhbmd1bGFyRGlydHlDaGVjayIsInJlcXVlc3QiLCJ0aW1lSW5mbyIsInRpbWVSYW5nZSIsInJhbmdlIiwidXNlRGF0YUZyYW1lcyIsImhhbmRsZURhdGFGcmFtZXMiLCJzZXJpZXMiLCJsZWdhY3kiLCJtYXAiLCJ2IiwiaGFuZGxlUXVlcnlSZXN1bHQiLCJjb250ZXh0U3J2IiwiZ2V0IiwiZGF0YXNvdXJjZVNydiIsInRpbWVTcnYiLCJ0ZW1wbGF0ZVNydiIsInBhbmVsIiwiZGF0YXNvdXJjZSIsImV2ZW50cyIsIm9uIiwicmVmcmVzaCIsIm9uTWV0cmljc1BhbmVsUmVmcmVzaCIsImJpbmQiLCJwYW5lbFRlYXJkb3duIiwib25QYW5lbFRlYXJEb3duIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbk1ldHJpY3NQYW5lbE1vdW50ZWQiLCJxdWVyeVJ1bm5lciIsImdldFF1ZXJ5UnVubmVyIiwicXVlcnlTdWJzY3JpcHRpb24iLCJnZXREYXRhIiwid2l0aFRyYW5zZm9ybXMiLCJ3aXRoRmllbGRDb25maWciLCJzdWJzY3JpYmUiLCJwYW5lbERhdGFPYnNlcnZlciIsInVuc3Vic2NyaWJlIiwib3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUiLCJzbmFwc2hvdERhdGEiLCJ1cGRhdGVUaW1lUmFuZ2UiLCJEb25lIiwiJHRpbWVvdXQiLCJlbWl0IiwiZGF0YVNuYXBzaG90TG9hZCIsInNjb3BlZFZhcnMiLCJ0aGVuIiwiaXNzdWVRdWVyaWVzIiwiY2F0Y2giLCJlcnIiLCJjYW5jZWxsZWQiLCJjb25zb2xlIiwibG9nIiwiJHJvb3QiLCIkJHBoYXNlIiwiJGRpZ2VzdCIsIm5ld1RpbWVEYXRhIiwicnVuIiwicXVlcmllcyIsInRhcmdldHMiLCJwYW5lbElkIiwiaWQiLCJkYXNoYm9hcmRJZCIsImRhc2hib2FyZCIsInRpbWV6b25lIiwiZ2V0VGltZXpvbmUiLCJtYXhEYXRhUG9pbnRzIiwid2lkdGgiLCJtaW5JbnRlcnZhbCIsImludGVydmFsIiwiY2FjaGVUaW1lb3V0IiwidHJhbnNmb3JtYXRpb25zIiwic25hcHNob3QiLCJmcmFtZSIsImRhdGFGcmFtZXNSZWNlaXZlZCIsInJlc3VsdCIsImRhdGFSZWNlaXZlZCIsImlzU3RyaW5nIiwiRXZlbnRCdXNTcnYiLCJjb25maWciLCJwcm9maWxlciIsInBsdWdpbiIsIiRwYXJlbnQiLCJlZGl0b3JUYWJzIiwiJGxvY2F0aW9uIiwidGltaW5nIiwicGFuZWxzIiwicGx1Z2luSWQiLCJwbHVnaW5OYW1lIiwiJG9uIiwicGFuZWxEaWRNb3VudCIsImluaXRpYWxpemVkIiwicGFuZWxJbml0aWFsaXplZCIsInJlbmRlcmluZ0NvbXBsZXRlZCIsInB1Ymxpc2hBcHBFdmVudCIsImV2ZW50IiwicGF5bG9hZCIsImFwcEV2ZW50IiwiaW5pdEVkaXRNb2RlIiwiZWRpdE1vZGVJbml0aWF0ZWQiLCJlZGl0TW9kZUluaXRpYWxpemVkIiwiYWRkRWRpdG9yVGFiIiwidGl0bGUiLCJkaXJlY3RpdmVGbiIsImljb24iLCJlZGl0b3JUYWIiLCJ0ZW1wbGF0ZVVybCIsImdldEV4dGVuZGVkTWVudSIsIm1lbnUiLCJpbml0UGFuZWxBY3Rpb25zIiwiZ2V0QWRkaXRpb25hbE1lbnVJdGVtcyIsIm90aGVyUGFuZWxJbkZ1bGxzY3JlZW4iLCJyZW5kZXIiLCJpbmRleE9mIiwiUXVlcnlDdHJsIiwicGFuZWxDdHJsIiwiY3RybCIsInRhcmdldCIsImlzTGFzdFF1ZXJ5IiwiUGFzc3dvcmRGaWVsZEVudW0iLCJjcmVhdGVSZXNldEhhbmRsZXIiLCJmaWVsZCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNlY3VyZUpzb25GaWVsZHMiLCJzZWN1cmVKc29uRGF0YSIsImNyZWF0ZUNoYW5nZUhhbmRsZXIiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJmaW5kIiwiUG9zdGdyZXNDb25maWdDdHJsIiwianNvbkRhdGEiLCJzc2xtb2RlIiwidGxzQ29uZmlndXJhdGlvbk1ldGhvZCIsInBvc3RncmVzVmVyc2lvbiIsInNob3dUaW1lc2NhbGVEQkhlbHAiLCJhdXRvRGV0ZWN0RmVhdHVyZXMiLCJvblBhc3N3b3JkUmVzZXQiLCJQYXNzd29yZCIsIm9uUGFzc3dvcmRDaGFuZ2UiLCJ0bHNNb2RlTWFwcGluZyIsImxvYWREYXRhc291cmNlIiwiZHMiLCJnZXRWZXJzaW9uIiwidmVyc2lvbiIsIk51bWJlciIsInRleHQiLCJnZXRUaW1lc2NhbGVEQlZlcnNpb24iLCJ0aW1lc2NhbGVkYiIsIm1ham9yIiwiTWF0aCIsInRydW5jIiwibWlub3IiLCJwb3N0Z3Jlc1ZlcnNpb25zIiwicCIsInRvZ2dsZVRpbWVzY2FsZURCSGVscCIsInRsc0F1dGgiLCJ0bHNBdXRoV2l0aENBQ2VydCIsInRsc1NraXBWZXJpZnkiLCJfbWFwIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwiY2F0Y2hFcnJvciIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImdldEJhY2tlbmRTcnYiLCJ0b1Rlc3RpbmdTdGF0dXMiLCJnZXRUZW1wbGF0ZVNydiIsIlBvc3RncmVzUXVlcnlNb2RlbCIsImdldFNlYXJjaEZpbHRlclNjb3BlZFZhciIsIlJlc3BvbnNlUGFyc2VyIiwiUG9zdGdyZXNEYXRhc291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInZhcmlhYmxlIiwibXVsdGkiLCJpbmNsdWRlQWxsIiwicXVlcnlNb2RlbCIsInF1b3RlTGl0ZXJhbCIsInF1b3RlZFZhbHVlcyIsImpvaW4iLCJyZXNwb25zZVBhcnNlciIsInNldHRpbmdzRGF0YSIsInRpbWVJbnRlcnZhbCIsImludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzIiwiZXhwYW5kZWRRdWVyaWVzIiwicXVlcnkiLCJleHBhbmRlZFF1ZXJ5IiwiZ2V0UmVmIiwicmF3U3FsIiwiaW50ZXJwb2xhdGVWYXJpYWJsZSIsInJhd1F1ZXJ5IiwiZmlsdGVyUXVlcnkiLCJoaWRlIiwiYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyIsInJlZklkIiwiZm9ybWF0IiwiYW5ub3RhdGlvblF1ZXJ5IiwiYW5ub3RhdGlvbiIsIlByb21pc2UiLCJyZWplY3QiLCJmZXRjaCIsIm1ldGhvZCIsImZyb20iLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0byIsInJlcXVlc3RJZCIsInBpcGUiLCJyZXMiLCJ0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2UiLCJtZXRyaWNGaW5kUXVlcnkiLCJvcHRpb25hbE9wdGlvbnMiLCJ3aWxkY2FyZENoYXIiLCJpbnRlcnBvbGF0ZWRRdWVyeSIsInJzcCIsInRyYW5zZm9ybU1ldHJpY0ZpbmRSZXNwb25zZSIsIl9tZXRhUmVxdWVzdCIsInRlc3REYXRhc291cmNlIiwic3RhdHVzIiwidGFyZ2V0Q29udGFpbnNUZW1wbGF0ZSIsImJ1aWxkUXVlcnkiLCJjb250YWluc1RlbXBsYXRlIiwiUG9zdGdyZXNNZXRhUXVlcnkiLCJnZXRPcGVyYXRvcnMiLCJxdW90ZUlkZW50QXNMaXRlcmFsIiwidW5xdW90ZUlkZW50aWZpZXIiLCJmaW5kTWV0cmljVGFibGUiLCJidWlsZFNjaGVtYUNvbnN0cmFpbnQiLCJidWlsZFRhYmxlQ29uc3RyYWludCIsInRhYmxlIiwiaW5jbHVkZXMiLCJwYXJ0cyIsInNwbGl0IiwiYnVpbGRUYWJsZVF1ZXJ5IiwiYnVpbGRDb2x1bW5RdWVyeSIsInRpbWVDb2x1bW4iLCJidWlsZFZhbHVlUXVlcnkiLCJjb2x1bW4iLCJidWlsZERhdGF0eXBlUXVlcnkiLCJidWlsZEFnZ3JlZ2F0ZVF1ZXJ5IiwiRGF0YVNvdXJjZVBsdWdpbiIsIlBvc3RncmVzUXVlcnlDdHJsIiwiZGVmYXVsdFF1ZXJ5IiwiUG9zdGdyZXNBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsInNldFF1ZXJ5Q3RybCIsInNldENvbmZpZ0N0cmwiLCJzZXRBbm5vdGF0aW9uUXVlcnlDdHJsIiwibWV0cmljQ29sdW1uIiwiZ3JvdXAiLCJ3aGVyZSIsInNlbGVjdCIsImludGVycG9sYXRlUXVlcnlTdHIiLCJxdW90ZUlkZW50aWZpZXIiLCJlc2NhcGVMaXRlcmFsIiwiaGFzVGltZUdyb3VwIiwiZyIsImhhc01ldHJpY0NvbHVtbiIsImRlZmF1bHRGb3JtYXRGbiIsImVzY2FwZWRWYWx1ZXMiLCJpbnRlcnBvbGF0ZSIsImhhc1VuaXhFcG9jaFRpbWVjb2x1bW4iLCJ0aW1lQ29sdW1uVHlwZSIsImJ1aWxkVGltZUNvbHVtbiIsImFsaWFzIiwidGltZUdyb3VwIiwibWFjcm8iLCJhcmdzIiwiYnVpbGRNZXRyaWNDb2x1bW4iLCJidWlsZFZhbHVlQ29sdW1ucyIsImJ1aWxkVmFsdWVDb2x1bW4iLCJjb2x1bW5OYW1lIiwiYWdncmVnYXRlIiwid2luZG93cyIsImZ1bmMiLCJvdmVyUGFydHMiLCJvdmVyIiwiY3VyciIsInByZXYiLCJidWlsZFdoZXJlQ2xhdXNlIiwiY29uZGl0aW9ucyIsInRhZyIsImJ1aWxkR3JvdXBDbGF1c2UiLCJncm91cFNlY3Rpb24iLCJpIiwiZmlsdGVyIiwiZmluZEluZGV4IiwiYXBwRXZlbnRzIiwiU2hvd0NvbmZpcm1Nb2RhbEV2ZW50Iiwic3FsUGFydCIsInVpU2VnbWVudFNydiIsIm1ldGFCdWlsZGVyIiwidXBkYXRlUHJvamVjdGlvbiIsImZvcm1hdHMiLCJzZWdtZW50IiwibmV3U2VnbWVudCIsInRhYmxlU2VnbWVudCIsImh0bWwiLCJ0aW1lQ29sdW1uU2VnbWVudCIsInVwZGF0ZVJhd1NxbEFuZFJlZnJlc2giLCJmYWtlIiwibWV0cmljQ29sdW1uU2VnbWVudCIsImJ1aWxkU2VsZWN0TWVudSIsIndoZXJlQWRkIiwibmV3UGx1c0J1dHRvbiIsImdyb3VwQWRkIiwib25EYXRhUmVjZWl2ZWQiLCJkYXRhRXJyb3IiLCJvbkRhdGFFcnJvciIsInRpbWVzY2FsZUFnZ0NoZWNrIiwiYWdnSW5kZXgiLCJmaW5kQWdncmVnYXRlSW5kZXgiLCJzZWxlY3RQYXJ0cyIsImJhc2VPcHRzIiwiYmFzZU9wdGlvbnMiLCJ0aW1lc2NhbGVPcHRzIiwiY29uY2F0IiwidGltZXNjYWxlT3B0aW9ucyIsImNyZWF0ZSIsIm4iLCJ3aGVyZVBhcnRzIiwiZ3JvdXBQYXJ0cyIsInVwZGF0ZVBlcnNpc3RlZFBhcnRzIiwic2VsZWN0TWVudSIsImFnZ3JlZ2F0ZXMiLCJzdWJtZW51IiwiYWdncmVnYXRlczIiLCJ0b2dnbGVFZGl0b3JNb2RlIiwicHVibGlzaCIsInRleHQyIiwieWVzVGV4dCIsIm9uQ29uZmlybSIsIiRldmFsQXN5bmMiLCJyZXNldFBsdXNCdXR0b24iLCJidXR0b24iLCJwbHVzQnV0dG9uIiwiZ2V0VGFibGVTZWdtZW50cyIsInRyYW5zZm9ybVRvU2VnbWVudHMiLCJoYW5kbGVRdWVyeUVycm9yIiwidGFibGVDaGFuZ2VkIiwidGFzazEiLCJyIiwidGltZUNvbHVtbkNoYW5nZWQiLCJ0YXNrMiIsImFsbCIsImdldFRpbWVDb2x1bW5TZWdtZW50cyIsInBhcnRNb2RlbCIsImdldE1ldHJpY0NvbHVtblNlZ21lbnRzIiwiYWRkTm9uZSIsIm1ldHJpY0NvbHVtbkNoYW5nZWQiLCJkYXRhTGlzdCIsImxhc3RRdWVyeUVycm9yIiwibGFzdFF1ZXJ5TWV0YSIsIm1ldGEiLCJyZXN1bHRzIiwicXVlcnlSZXMiLCJzZWdtZW50cyIsImV4cGFuZGFibGUiLCJhZGRUZW1wbGF0ZVZhcnMiLCJnZXRWYXJpYWJsZXMiLCJ0ZW1wbGF0ZVF1b3RlciIsInVuc2hpZnQiLCJmaW5kV2luZG93SW5kZXgiLCJhZGRTZWxlY3RQYXJ0IiwiaXRlbSIsInN1Ykl0ZW0iLCJwYXJ0VHlwZSIsImFkZEFsaWFzIiwiYWRkR3JvdXAiLCJ3aW5kb3dJbmRleCIsInJlbW92ZVNlbGVjdFBhcnQiLCJtb2RlbHNJbmRleCIsInBhcnRJbmRleCIsImhhbmRsZVNlbGVjdFBhcnRFdmVudCIsImV2dCIsInJlc29sdmUiLCJoYW5kbGVHcm91cFBhcnRFdmVudCIsInJlbW92ZUdyb3VwIiwic29tZSIsInMiLCJoYW5kbGVXaGVyZVBhcnRFdmVudCIsInBhcmFtIiwibmV3T3BlcmF0b3JzIiwiZCIsImdldFdoZXJlT3B0aW9ucyIsImFkZFdoZXJlQWN0aW9uIiwiZ2V0R3JvdXBPcHRpb25zIiwidGFncyIsImFkZEdyb3VwQWN0aW9uIiwidG9EYXRhUXVlcnlSZXNwb25zZSIsInJhdyIsImZyYW1lcyIsInZhbHVlcyIsInRleHRGaWVsZCIsImZpZWxkcyIsImYiLCJ2YWx1ZUZpZWxkIiwiZmxhdE1hcCIsInRvQXJyYXkiLCJBcnJheSIsIlNldCIsInRpbWVGaWVsZCIsInRpbWVFbmRGaWVsZCIsInRhZ3NGaWVsZCIsImxpc3QiLCJ0aW1lRW5kIiwiZmxvb3IiLCJ0aW1lIiwiY3JlYXRlUGFydCIsInJlZ2lzdGVyIiwiZHluYW1pY0xvb2t1cCIsInF1b3RlIiwibWFrZUNsYXNzRVM1Q29tcGF0aWJsZSIsImxvYWRQbHVnaW5Dc3MiLCJNZXRyaWNzUGFuZWxDdHJsRVM2IiwiUGFuZWxDdHJsRVM2IiwiUXVlcnlDdHJsRVM2Il0sInNvdXJjZVJvb3QiOiIifQ==