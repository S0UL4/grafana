"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["tableOldPlugin"],{

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

/***/ "./public/app/plugins/panel/table-old/column_options.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnOptionsCtrl": () => (/* binding */ ColumnOptionsCtrl),
/* harmony export */   "columnOptionsTab": () => (/* binding */ columnOptionsTab)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ColumnOptionsCtrl {
  /** @ngInject */
  constructor($scope) {
    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "colorModes", void 0);

    _defineProperty(this, "columnStyles", void 0);

    _defineProperty(this, "columnTypes", void 0);

    _defineProperty(this, "fontSizes", void 0);

    _defineProperty(this, "dateFormats", void 0);

    _defineProperty(this, "addColumnSegment", void 0);

    _defineProperty(this, "unitFormats", void 0);

    _defineProperty(this, "getColumnNames", void 0);

    _defineProperty(this, "activeStyleIndex", void 0);

    _defineProperty(this, "mappingTypes", void 0);

    _defineProperty(this, "alignTypes", void 0);

    $scope.editor = this;
    this.activeStyleIndex = 0;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.unitFormats = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getValueFormats)();
    this.colorModes = [{
      text: 'Disabled',
      value: null
    }, {
      text: 'Cell',
      value: 'cell'
    }, {
      text: 'Value',
      value: 'value'
    }, {
      text: 'Row',
      value: 'row'
    }];
    this.columnTypes = [{
      text: 'Number',
      value: 'number'
    }, {
      text: 'String',
      value: 'string'
    }, {
      text: 'Date',
      value: 'date'
    }, {
      text: 'Hidden',
      value: 'hidden'
    }];
    this.fontSizes = ['80%', '90%', '100%', '110%', '120%', '130%', '150%', '160%', '180%', '200%', '220%', '250%'];
    this.dateFormats = [{
      text: 'YYYY-MM-DD HH:mm:ss',
      value: 'YYYY-MM-DD HH:mm:ss'
    }, {
      text: 'YYYY-MM-DD HH:mm:ss.SSS',
      value: 'YYYY-MM-DD HH:mm:ss.SSS'
    }, {
      text: 'MM/DD/YY h:mm:ss a',
      value: 'MM/DD/YY h:mm:ss a'
    }, {
      text: 'MMMM D, YYYY LT',
      value: 'MMMM D, YYYY LT'
    }, {
      text: 'YYYY-MM-DD',
      value: 'YYYY-MM-DD'
    }];
    this.mappingTypes = [{
      text: 'Value to text',
      value: 1
    }, {
      text: 'Range to text',
      value: 2
    }];
    this.alignTypes = ColumnOptionsCtrl.alignTypesEnum;

    this.getColumnNames = () => {
      if (!this.panelCtrl.table) {
        return [];
      }

      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.panelCtrl.table.columns, col => {
        return col.text;
      });
    };

    this.onColorChange = this.onColorChange.bind(this);
  }

  render() {
    this.panelCtrl.render();
  }

  setUnitFormat(column) {
    return value => {
      column.unit = value;
      this.panelCtrl.render();
    };
  }

  addColumnStyle() {
    const newStyleRule = {
      unit: 'short',
      type: 'number',
      alias: '',
      decimals: 2,
      colors: ['rgba(245, 54, 54, 0.9)', 'rgba(237, 129, 40, 0.89)', 'rgba(50, 172, 45, 0.97)'],
      colorMode: null,
      pattern: '',
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      thresholds: [],
      mappingType: 1,
      align: 'auto'
    };
    const styles = this.panel.styles;
    const stylesCount = styles.length;
    let indexToInsert = stylesCount; // check if last is a catch all rule, then add it before that one

    if (stylesCount > 0) {
      const last = styles[stylesCount - 1];

      if (last.pattern === '/.*/') {
        indexToInsert = stylesCount - 1;
      }
    }

    styles.splice(indexToInsert, 0, newStyleRule);
    this.activeStyleIndex = indexToInsert;
  }

  removeColumnStyle(style) {
    this.panel.styles = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.panel.styles, style);
  }

  invertColorOrder(index) {
    const ref = this.panel.styles[index].colors;
    const copy = ref[0];
    ref[0] = ref[2];
    ref[2] = copy;
    this.panelCtrl.render();
  }

  onColorChange(style, colorIndex) {
    return newColor => {
      style.colors[colorIndex] = newColor;
      this.render();
    };
  }

  addValueMap(style) {
    if (!style.valueMaps) {
      style.valueMaps = [];
    }

    style.valueMaps.push({
      value: '',
      text: ''
    });
    this.panelCtrl.render();
  }

  removeValueMap(style, index) {
    style.valueMaps.splice(index, 1);
    this.panelCtrl.render();
  }

  addRangeMap(style) {
    if (!style.rangeMaps) {
      style.rangeMaps = [];
    }

    style.rangeMaps.push({
      from: '',
      to: '',
      text: ''
    });
    this.panelCtrl.render();
  }

  removeRangeMap(style, index) {
    style.rangeMaps.splice(index, 1);
    this.panelCtrl.render();
  }

}
ColumnOptionsCtrl.$inject = ["$scope"];

_defineProperty(ColumnOptionsCtrl, "alignTypesEnum", [{
  text: 'auto',
  value: ''
}, {
  text: 'left',
  value: 'left'
}, {
  text: 'center',
  value: 'center'
}, {
  text: 'right',
  value: 'right'
}]);

function columnOptionsTab() {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/table-old/column_options.html',
    controller: ColumnOptionsCtrl
  };
}

/***/ }),

/***/ "./public/app/plugins/panel/table-old/editor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablePanelEditorCtrl": () => (/* binding */ TablePanelEditorCtrl),
/* harmony export */   "tablePanelEditor": () => (/* binding */ tablePanelEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/table-old/transformers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class TablePanelEditorCtrl {
  /** @ngInject */
  constructor($scope, uiSegmentSrv) {
    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "transformers", void 0);

    _defineProperty(this, "fontSizes", void 0);

    _defineProperty(this, "addColumnSegment", void 0);

    _defineProperty(this, "getColumnNames", void 0);

    _defineProperty(this, "canSetColumns", false);

    _defineProperty(this, "columnsHelpMessage", '');

    this.uiSegmentSrv = uiSegmentSrv;
    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.transformers = _transformers__WEBPACK_IMPORTED_MODULE_1__.transformers;
    this.fontSizes = ['80%', '90%', '100%', '110%', '120%', '130%', '150%', '160%', '180%', '200%', '220%', '250%'];
    this.addColumnSegment = uiSegmentSrv.newPlusButton();
    this.updateTransformHints();
  }

  updateTransformHints() {
    this.canSetColumns = false;
    this.columnsHelpMessage = '';

    switch (this.panel.transform) {
      case 'timeseries_aggregations':
        {
          this.canSetColumns = true;
          break;
        }

      case 'json':
        {
          this.canSetColumns = true;
          break;
        }

      case 'table':
        {
          this.columnsHelpMessage = 'Columns and their order are determined by the data query';
        }
    }
  }

  getColumnOptions() {
    if (!this.panelCtrl.dataRaw) {
      return Promise.resolve([]);
    }

    const columns = this.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw);
    const segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(columns, c => this.uiSegmentSrv.newSegment({
      value: c.text
    }));
    return Promise.resolve(segments);
  }

  addColumn() {
    const columns = _transformers__WEBPACK_IMPORTED_MODULE_1__.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw);
    const column = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(columns, {
      text: this.addColumnSegment.value
    });

    if (column) {
      this.panel.columns.push(column);
      this.render();
    }

    const plusButton = this.uiSegmentSrv.newPlusButton();
    this.addColumnSegment.html = plusButton.html;
    this.addColumnSegment.value = plusButton.value;
  }

  transformChanged() {
    this.panel.columns = [];

    if (this.panel.transform === 'annotations') {
      this.panelCtrl.refresh();
    } else {
      if (this.panel.transform === 'timeseries_aggregations') {
        this.panel.columns.push({
          text: 'Avg',
          value: 'avg'
        });
      }

      this.updateTransformHints();
      this.render();
    }
  }

  render() {
    this.panelCtrl.render();
  }

  removeColumn(column) {
    this.panel.columns = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.panel.columns, column);
    this.panelCtrl.render();
  }

}
TablePanelEditorCtrl.$inject = ["$scope", "uiSegmentSrv"];
function tablePanelEditor(uiSegmentSrv) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/table-old/editor.html',
    controller: TablePanelEditorCtrl
  };
}

/***/ }),

/***/ "./public/app/plugins/panel/table-old/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablePanelCtrl": () => (/* binding */ TablePanelCtrl),
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/jquery-npm-3.6.0-ca7872bdbb-8fd5fef4aa.zip/node_modules/jquery/dist/jquery-exposed.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/variables/adhoc/actions.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _column_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/table-old/column_options.ts");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/table-old/editor.ts");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/table-old/renderer.ts");
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/table-old/transformers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class TablePanelCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_5__.MetricsPanelCtrl {
  /** @ngInject */
  constructor($scope, $injector, annotationsSrv, $sanitize) {
    super($scope, $injector);

    _defineProperty(this, "pageIndex", void 0);

    _defineProperty(this, "dataRaw", void 0);

    _defineProperty(this, "table", void 0);

    _defineProperty(this, "renderer", void 0);

    _defineProperty(this, "panelHasRowColorMode", void 0);

    _defineProperty(this, "panelHasLinks", void 0);

    _defineProperty(this, "panelDefaults", {
      targets: [{}],
      transform: 'timeseries_to_columns',
      pageSize: null,
      showHeader: true,
      styles: [{
        type: 'date',
        pattern: 'Time',
        alias: 'Time',
        dateFormat: 'YYYY-MM-DD HH:mm:ss',
        align: 'auto'
      }, {
        unit: 'short',
        type: 'number',
        alias: '',
        decimals: 2,
        colors: ['rgba(245, 54, 54, 0.9)', 'rgba(237, 129, 40, 0.89)', 'rgba(50, 172, 45, 0.97)'],
        colorMode: null,
        pattern: '/.*/',
        thresholds: [],
        align: 'right'
      }],
      columns: [],
      fontSize: '100%',
      sort: {
        col: 0,
        desc: true
      }
    });

    this.annotationsSrv = annotationsSrv;
    this.$sanitize = $sanitize;
    this.pageIndex = 0;

    if (this.panel.styles === void 0) {
      this.panel.styles = this.panel.columns;
      this.panel.columns = this.panel.fields;
      delete this.panel.columns;
      delete this.panel.fields;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.defaults)(this.panel, this.panelDefaults);
    this.panelHasRowColorMode = Boolean(this.panel.styles.find(style => style.colorMode === 'row'));
    this.panelHasLinks = Boolean(this.panel.styles.find(style => style.link));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelEvents.dataReceived, this.onDataReceived.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelEvents.dataSnapshotLoad, this.onDataReceived.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelEvents.editModeInitialized, this.onInitEditMode.bind(this));
  }

  onInitEditMode() {
    this.addEditorTab('Options', _editor__WEBPACK_IMPORTED_MODULE_8__.tablePanelEditor, 2);
    this.addEditorTab('Column Styles', _column_options__WEBPACK_IMPORTED_MODULE_7__.columnOptionsTab, 3);
  }

  migrateToPanel(type) {
    this.onPluginTypeChange(app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].panels[type]);
  }

  issueQueries(datasource) {
    this.pageIndex = 0;

    if (this.panel.transform === 'annotations') {
      return this.annotationsSrv.getAnnotations({
        dashboard: this.dashboard,
        panel: this.panel,
        range: this.range
      }).then(anno => {
        this.loading = false;
        this.dataRaw = anno;
        this.pageIndex = 0;
        this.render();
        return {
          data: this.dataRaw
        }; // Not used
      });
    }

    return super.issueQueries(datasource);
  }

  onDataReceived(dataList) {
    this.dataRaw = dataList;
    this.pageIndex = 0; // automatically correct transform mode based on data

    if (this.dataRaw && this.dataRaw.length) {
      if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isTableData)(this.dataRaw[0])) {
        this.panel.transform = 'table';
      } else {
        if (this.dataRaw[0].type === 'docs') {
          this.panel.transform = 'json';
        } else {
          if (this.panel.transform === 'table' || this.panel.transform === 'json') {
            this.panel.transform = 'timeseries_to_rows';
          }
        }
      }
    }

    this.render();
  }

  render() {
    this.table = (0,_transformers__WEBPACK_IMPORTED_MODULE_10__.transformDataToTable)(this.dataRaw, this.panel);
    this.table.sort(this.panel.sort);
    this.renderer = new _renderer__WEBPACK_IMPORTED_MODULE_9__.TableRenderer(this.panel, this.table, this.dashboard.getTimezone(), this.$sanitize, this.templateSrv, app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].theme);
    return super.render(this.table);
  }

  toggleColumnSort(col, colIndex) {
    // remove sort flag from current column
    if (this.table.columns[this.panel.sort.col]) {
      this.table.columns[this.panel.sort.col].sort = false;
    }

    if (this.panel.sort.col === colIndex) {
      if (this.panel.sort.desc) {
        this.panel.sort.desc = false;
      } else {
        this.panel.sort.col = null;
      }
    } else {
      this.panel.sort.col = colIndex;
      this.panel.sort.desc = true;
    }

    this.render();
  }

  link(scope, elem, attrs, ctrl) {
    let data;
    const panel = ctrl.panel;
    let pageCount = 0;

    function getTableHeight() {
      let panelHeight = ctrl.height;

      if (pageCount > 1) {
        panelHeight -= 26;
      }

      return panelHeight - 31 + 'px';
    }

    function appendTableRows(tbodyElem) {
      ctrl.renderer.setTable(data);
      tbodyElem.empty();
      tbodyElem.html(ctrl.renderer.render(ctrl.pageIndex));
    }

    function switchPage(e) {
      const el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      ctrl.pageIndex = parseInt(el.text(), 10) - 1;
      renderPanel();
    }

    function appendPaginationControls(footerElem) {
      footerElem.empty();
      const pageSize = panel.pageSize || 100;
      pageCount = Math.ceil(data.rows.length / pageSize);

      if (pageCount === 1) {
        return;
      }

      const startPage = Math.max(ctrl.pageIndex - 3, 0);
      const endPage = Math.min(pageCount, startPage + 9);
      const paginationList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');

      for (let i = startPage; i < endPage; i++) {
        const activeClass = i === ctrl.pageIndex ? 'active' : '';
        const pageLinkElem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li><a class="table-panel-page-link pointer ' + activeClass + '">' + (i + 1) + '</a></li>');
        paginationList.append(pageLinkElem);
      }

      footerElem.append(paginationList);
    }

    function renderPanel() {
      const panelElem = elem.parents('.panel-content');
      const rootElem = elem.find('.table-panel-scroll');
      const tbodyElem = elem.find('tbody');
      const footerElem = elem.find('.table-panel-footer');
      elem.css({
        'font-size': panel.fontSize
      });
      panelElem.addClass('table-panel-content');
      appendTableRows(tbodyElem);
      appendPaginationControls(footerElem);
      rootElem.css({
        'max-height': getTableHeight()
      });
    } // hook up link tooltips


    elem.tooltip({
      selector: '[data-link-tooltip]'
    });

    function addFilterClicked(e) {
      const filterData = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).data();
      const options = {
        datasource: panel.datasource,
        key: data.columns[filterData.column].text,
        value: data.rows[filterData.row][filterData.column],
        operator: filterData.operator
      };
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_4__.applyFilterFromTable)(options));
    }

    elem.on('click', '.table-panel-page-link', switchPage);
    elem.on('click', '.table-panel-filter-link', addFilterClicked);
    const unbindDestroy = scope.$on('$destroy', () => {
      elem.off('click', '.table-panel-page-link');
      elem.off('click', '.table-panel-filter-link');
      unbindDestroy();
    });
    ctrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelEvents.render, renderData => {
      data = renderData || data;

      if (data) {
        renderPanel();
      }

      ctrl.renderingCompleted();
    });
  }

}
TablePanelCtrl.$inject = ["$scope", "$injector", "annotationsSrv", "$sanitize"];

_defineProperty(TablePanelCtrl, "templateUrl", 'module.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelPlugin(null);
plugin.angularPanelCtrl = TablePanelCtrl;
plugin.setNoPadding();

/***/ }),

/***/ "./public/app/plugins/panel/table-old/renderer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableRenderer": () => (/* binding */ TableRenderer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _column_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/table-old/column_options.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class TableRenderer {
  constructor(panel, table, timeZone, sanitize, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)(), theme) {
    _defineProperty(this, "formatters", []);

    _defineProperty(this, "colorState", void 0);

    this.panel = panel;
    this.table = table;
    this.timeZone = timeZone;
    this.sanitize = sanitize;
    this.templateSrv = templateSrv;
    this.theme = theme;
    this.initColumns();
  }

  setTable(table) {
    this.table = table;
    this.initColumns();
  }

  initColumns() {
    this.formatters = [];
    this.colorState = {};

    for (let colIndex = 0; colIndex < this.table.columns.length; colIndex++) {
      const column = this.table.columns[colIndex];
      column.title = column.text;

      for (let i = 0; i < this.panel.styles.length; i++) {
        const style = this.panel.styles[i];
        const escapedPattern = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.stringStartsAsRegEx)(style.pattern) ? style.pattern : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.escapeStringForRegex)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.unEscapeStringFromRegex)(style.pattern));
        const regex = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.stringToJsRegex)(escapedPattern);

        if (column.text.match(regex)) {
          column.style = style;

          if (style.alias) {
            column.title = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.escapeHtml(column.text.replace(regex, style.alias));
          }

          break;
        }
      }

      this.formatters[colIndex] = this.createColumnFormatter(column);
    }
  }

  getColorForValue(value, style) {
    if (!style.thresholds || !style.colors) {
      return null;
    }

    for (let i = style.thresholds.length; i > 0; i--) {
      if (value >= style.thresholds[i - 1]) {
        return this.theme.visualization.getColorByName(style.colors[i]);
      }
    }

    return this.theme.visualization.getColorByName((0,lodash__WEBPACK_IMPORTED_MODULE_0__.first)(style.colors));
  }

  defaultCellFormatter(v, style) {
    if (v === null || v === void 0 || v === undefined) {
      return '';
    }

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
      v = v.join(', ');
    }

    if (style && style.sanitize) {
      return this.sanitize(v);
    } else {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.escape)(v);
    }
  }

  createColumnFormatter(column) {
    if (!column.style) {
      return this.defaultCellFormatter;
    }

    if (column.style.type === 'hidden') {
      return v => undefined;
    }

    if (column.style.type === 'date') {
      return v => {
        if (v === undefined || v === null) {
          return '-';
        }

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          v = v[0];
        } // if is an epoch (numeric string and len > 12)


        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && !isNaN(v) && v.length > 12) {
          v = parseInt(v, 10);
        }

        if (!column.style.dateFormat) {
          return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeFormatISO)(v, {
            timeZone: this.timeZone
          });
        }

        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeFormat)(v, {
          format: column.style.dateFormat,
          timeZone: this.timeZone
        });
      };
    }

    if (column.style.type === 'string') {
      return v => {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          v = v.join(', ');
        }

        const mappingType = column.style.mappingType || 0;

        if (mappingType === 1 && column.style.valueMaps) {
          for (let i = 0; i < column.style.valueMaps.length; i++) {
            const map = column.style.valueMaps[i];

            if (v === null) {
              if (map.value === 'null') {
                return map.text;
              }

              continue;
            } // Allow both numeric and string values to be mapped


            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && Number(map.value) === Number(v) || map.value === v) {
              this.setColorState(v, column.style);
              return this.defaultCellFormatter(map.text, column.style);
            }
          }
        }

        if (mappingType === 2 && column.style.rangeMaps) {
          for (let i = 0; i < column.style.rangeMaps.length; i++) {
            const map = column.style.rangeMaps[i];

            if (v === null) {
              if (map.from === 'null' && map.to === 'null') {
                return map.text;
              }

              continue;
            }

            if (Number(map.from) <= Number(v) && Number(map.to) >= Number(v)) {
              this.setColorState(v, column.style);
              return this.defaultCellFormatter(map.text, column.style);
            }
          }
        }

        if (v === null || v === void 0) {
          return '-';
        }

        this.setColorState(v, column.style);
        return this.defaultCellFormatter(v, column.style);
      };
    }

    if (column.style.type === 'number') {
      const valueFormatter = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getValueFormat)(column.unit || column.style.unit);
      return v => {
        if (v === null || v === void 0) {
          return '-';
        }

        if (isNaN(v) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          return this.defaultCellFormatter(v, column.style);
        }

        this.setColorState(v, column.style);
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.formattedValueToString)(valueFormatter(v, column.style.decimals, null));
      };
    }

    return value => {
      return this.defaultCellFormatter(value, column.style);
    };
  }

  setColorState(value, style) {
    if (!style.colorMode) {
      return;
    }

    if (value === null || value === void 0 || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
      return;
    }

    const numericValue = Number(value);

    if (isNaN(numericValue)) {
      return;
    }

    this.colorState[style.colorMode] = this.getColorForValue(numericValue, style);
  }

  renderRowVariables(rowIndex) {
    const scopedVars = {};
    let cellVariable;
    const row = this.table.rows[rowIndex];

    for (let i = 0; i < row.length; i++) {
      cellVariable = `__cell_${i}`;
      scopedVars[cellVariable] = {
        value: row[i],
        text: row[i] ? row[i].toString() : ''
      };
    }

    return scopedVars;
  }

  formatColumnValue(colIndex, value) {
    const fmt = this.formatters[colIndex];

    if (fmt) {
      return fmt(value);
    }

    return value;
  }

  renderCell(columnIndex, rowIndex, value, addWidthHack = false) {
    value = this.formatColumnValue(columnIndex, value);
    const column = this.table.columns[columnIndex];
    const cellStyles = [];
    let cellStyle = '';
    const cellClasses = [];
    let cellClass = '';

    if (this.colorState.cell) {
      cellStyles.push('background-color:' + this.colorState.cell);
      cellClasses.push('table-panel-color-cell');
      this.colorState.cell = null;
    } else if (this.colorState.value) {
      cellStyles.push('color:' + this.colorState.value);
      this.colorState.value = null;
    } // because of the fixed table headers css only solution
    // there is an issue if header cell is wider the cell
    // this hack adds header content to cell (not visible)


    let columnHtml = '';

    if (addWidthHack) {
      columnHtml = '<div class="table-panel-width-hack">' + this.table.columns[columnIndex].title + '</div>';
    }

    if (value === undefined) {
      cellStyles.push('display:none');
      column.hidden = true;
    } else {
      column.hidden = false;
    }

    if (column.hidden === true) {
      return '';
    }

    if (column.style && column.style.preserveFormat) {
      cellClasses.push('table-panel-cell-pre');
    }

    if (column.style && column.style.align) {
      const textAlign = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(_column_options__WEBPACK_IMPORTED_MODULE_3__.ColumnOptionsCtrl.alignTypesEnum, ['text', column.style.align]);

      if (textAlign && textAlign['value']) {
        cellStyles.push(`text-align:${textAlign['value']}`);
      }
    }

    if (cellStyles.length) {
      cellStyle = ' style="' + cellStyles.join(';') + '"';
    }

    if (column.style && column.style.link) {
      // Render cell as link
      const scopedVars = this.renderRowVariables(rowIndex);
      scopedVars['__cell'] = {
        value: value,
        text: value ? value.toString() : ''
      };
      const cellLink = this.templateSrv.replace(column.style.linkUrl, scopedVars, encodeURIComponent);
      const sanitizedCellLink = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.sanitizeUrl(cellLink);
      const cellLinkTooltip = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.escapeHtml(this.templateSrv.replace(column.style.linkTooltip, scopedVars));
      const cellTarget = column.style.linkTargetBlank ? '_blank' : '';
      cellClasses.push('table-panel-cell-link');
      columnHtml += `<a href="${sanitizedCellLink}" target="${cellTarget}" data-link-tooltip data-original-title="${cellLinkTooltip}" data-placement="right"${cellStyle}>`;
      columnHtml += `${value}`;
      columnHtml += `</a>`;
    } else {
      columnHtml += value;
    }

    if (column.filterable) {
      cellClasses.push('table-panel-cell-filterable');
      columnHtml += `<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter out value" data-placement="bottom"
           data-row="${rowIndex}" data-column="${columnIndex}" data-operator="!=">`;
      columnHtml += `<i class="fa fa-search-minus"></i>`;
      columnHtml += `</a>`;
      columnHtml += `<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter for value" data-placement="bottom"
           data-row="${rowIndex}" data-column="${columnIndex}" data-operator="=">`;
      columnHtml += `<i class="fa fa-search-plus"></i>`;
      columnHtml += `</a>`;
    }

    if (cellClasses.length) {
      cellClass = ' class="' + cellClasses.join(' ') + '"';
    }

    columnHtml = '<td' + cellClass + cellStyle + '>' + columnHtml + '</td>';
    return columnHtml;
  }

  render(page) {
    const pageSize = this.panel.pageSize || 100;
    const startPos = page * pageSize;
    const endPos = Math.min(startPos + pageSize, this.table.rows.length);
    let html = '';

    for (let y = startPos; y < endPos; y++) {
      const row = this.table.rows[y];
      let cellHtml = '';
      let rowStyle = '';
      const rowClasses = [];
      let rowClass = '';

      for (let i = 0; i < this.table.columns.length; i++) {
        cellHtml += this.renderCell(i, y, row[i], y === startPos);
      }

      if (this.colorState.row) {
        rowStyle = ' style="background-color:' + this.colorState.row + '"';
        rowClasses.push('table-panel-color-row');
        this.colorState.row = null;
      }

      if (rowClasses.length) {
        rowClass = ' class="' + rowClasses.join(' ') + '"';
      }

      html += '<tr ' + rowClass + rowStyle + '>' + cellHtml + '</tr>';
    }

    return html;
  }

  render_values() {
    const rows = [];
    const visibleColumns = this.table.columns.filter(column => !column.hidden);

    for (let y = 0; y < this.table.rows.length; y++) {
      const row = this.table.rows[y];
      const newRow = [];

      for (let i = 0; i < this.table.columns.length; i++) {
        if (!this.table.columns[i].hidden) {
          newRow.push(this.formatColumnValue(i, row[i]));
        }
      }

      rows.push(newRow);
    }

    return {
      columns: visibleColumns,
      rows: rows
    };
  }

}

/***/ }),

/***/ "./public/app/plugins/panel/table-old/transformers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tableDataFormatFilterer": () => (/* binding */ tableDataFormatFilterer),
/* harmony export */   "timeSeriesFormatFilterer": () => (/* binding */ timeSeriesFormatFilterer),
/* harmony export */   "transformDataToTable": () => (/* binding */ transformDataToTable),
/* harmony export */   "transformers": () => (/* binding */ transformers)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/table_model.ts");
/* harmony import */ var app_core_time_series2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/time_series2.ts");
/* harmony import */ var app_core_utils_flatten__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/flatten.ts");




const transformers = {};
const timeSeriesFormatFilterer = data => {
  if (!Array.isArray(data)) {
    return data.datapoints ? [data] : [];
  }

  return data.reduce((acc, series) => {
    if (!series.datapoints) {
      return acc;
    }

    return acc.concat(series);
  }, []);
};
const tableDataFormatFilterer = data => {
  if (!Array.isArray(data)) {
    return data.columns ? [data] : [];
  }

  return data.reduce((acc, series) => {
    if (!series.columns) {
      return acc;
    }

    return acc.concat(series);
  }, []);
};
transformers['timeseries_to_rows'] = {
  description: 'Time series to rows',
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns = [{
      text: 'Time',
      type: 'date'
    }, {
      text: 'Metric'
    }, {
      text: 'Value'
    }];
    const filteredData = timeSeriesFormatFilterer(data);

    for (let i = 0; i < filteredData.length; i++) {
      const series = filteredData[i];

      for (let y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        model.rows.push([dp[1], series.target, dp[0]]);
      }
    }
  }
};
transformers['timeseries_to_columns'] = {
  description: 'Time series to columns',
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns.push({
      text: 'Time',
      type: 'date'
    }); // group by time

    const points = {};
    const filteredData = timeSeriesFormatFilterer(data);

    for (let i = 0; i < filteredData.length; i++) {
      const series = filteredData[i];
      model.columns.push({
        text: series.target
      });

      for (let y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        const timeKey = dp[1].toString();

        if (!points[timeKey]) {
          points[timeKey] = {
            time: dp[1]
          };
          points[timeKey][i] = dp[0];
        } else {
          points[timeKey][i] = dp[0];
        }
      }
    }

    for (const time in points) {
      const point = points[time];
      const values = [point.time];

      for (let i = 0; i < filteredData.length; i++) {
        const value = point[i];
        values.push(value);
      }

      model.rows.push(values);
    }
  }
};
transformers['timeseries_aggregations'] = {
  description: 'Time series aggregations',
  getColumns: () => {
    return [{
      text: 'Avg',
      value: 'avg'
    }, {
      text: 'Min',
      value: 'min'
    }, {
      text: 'Max',
      value: 'max'
    }, {
      text: 'Total',
      value: 'total'
    }, {
      text: 'Current',
      value: 'current'
    }, {
      text: 'Count',
      value: 'count'
    }];
  },
  transform: (data, panel, model) => {
    let i, y;
    model.columns.push({
      text: 'Metric'
    });

    for (i = 0; i < panel.columns.length; i++) {
      model.columns.push({
        text: panel.columns[i].text
      });
    }

    const filteredData = timeSeriesFormatFilterer(data);

    for (i = 0; i < filteredData.length; i++) {
      const series = new app_core_time_series2__WEBPACK_IMPORTED_MODULE_2__["default"]({
        datapoints: filteredData[i].datapoints,
        alias: filteredData[i].target
      });
      series.getFlotPairs('connected');
      const cells = [series.alias];

      for (y = 0; y < panel.columns.length; y++) {
        cells.push(series.stats[panel.columns[y].value]);
      }

      model.rows.push(cells);
    }
  }
};
transformers['annotations'] = {
  description: 'Annotations',
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns.push({
      text: 'Time',
      type: 'date'
    });
    model.columns.push({
      text: 'Title'
    });
    model.columns.push({
      text: 'Text'
    });
    model.columns.push({
      text: 'Tags'
    });

    if (!data || !data.annotations || data.annotations.length === 0) {
      return;
    }

    for (let i = 0; i < data.annotations.length; i++) {
      const evt = data.annotations[i];
      model.rows.push([evt.time, evt.title, evt.text, evt.tags]);
    }
  }
};
transformers['table'] = {
  description: 'Table',
  getColumns: data => {
    if (!data || data.length === 0) {
      return [];
    } // Single query returns data columns as is


    if (data.length === 1) {
      return [...data[0].columns];
    }

    const filteredData = tableDataFormatFilterer(data); // Track column indexes: name -> index

    const columnNames = {}; // Union of all columns

    const columns = filteredData.reduce((acc, series) => {
      series.columns.forEach(col => {
        const {
          text
        } = col;

        if (columnNames[text] === undefined) {
          columnNames[text] = acc.length;
          acc.push(col);
        }
      });
      return acc;
    }, []);
    return columns;
  },
  transform: (data, panel, model) => {
    if (!data || data.length === 0) {
      return;
    }

    const filteredData = tableDataFormatFilterer(data);
    const noTableIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(filteredData, d => 'columns' in d && 'rows' in d);

    if (noTableIndex < 0) {
      throw {
        message: `Result of query #${String.fromCharCode(65 + noTableIndex)} is not in table format, try using another transform.`
      };
    }

    (0,app_core_table_model__WEBPACK_IMPORTED_MODULE_1__.mergeTablesIntoModel)(model, ...filteredData);
  }
};
transformers['json'] = {
  description: 'JSON Data',
  getColumns: data => {
    if (!data || data.length === 0) {
      return [];
    }

    const names = {};

    for (let i = 0; i < data.length; i++) {
      const series = data[i];

      if (series.type !== 'docs') {
        continue;
      } // only look at 100 docs


      const maxDocs = Math.min(series.datapoints.length, 100);

      for (let y = 0; y < maxDocs; y++) {
        const doc = series.datapoints[y];
        const flattened = (0,app_core_utils_flatten__WEBPACK_IMPORTED_MODULE_3__["default"])(doc, {});

        for (const propName in flattened) {
          names[propName] = true;
        }
      }
    }

    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(names, (value, key) => {
      return {
        text: key,
        value: key
      };
    });
  },
  transform: (data, panel, model) => {
    let i, y, z;

    for (const column of panel.columns) {
      const tableCol = {
        text: column.text
      }; // if filterable data then set columns to filterable

      if (data.length > 0 && data[0].filterable) {
        tableCol.filterable = true;
      }

      model.columns.push(tableCol);
    }

    if (model.columns.length === 0) {
      model.columns.push({
        text: 'JSON'
      });
    }

    for (i = 0; i < data.length; i++) {
      const series = data[i];

      for (y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        const values = [];

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(dp) && panel.columns.length > 0) {
          const flattened = (0,app_core_utils_flatten__WEBPACK_IMPORTED_MODULE_3__["default"])(dp);

          for (z = 0; z < panel.columns.length; z++) {
            values.push(flattened[panel.columns[z].value]);
          }
        } else {
          values.push(JSON.stringify(dp));
        }

        model.rows.push(values);
      }
    }
  }
};

function transformDataToTable(data, panel) {
  const model = new app_core_table_model__WEBPACK_IMPORTED_MODULE_1__["default"]();

  if (!data || data.length === 0) {
    return model;
  }

  const transformer = transformers[panel.transform];

  if (!transformer) {
    throw {
      message: 'Transformer ' + panel.transform + ' not found'
    };
  }

  transformer.transform(data, panel, model);
  return model;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVPbGRQbHVnaW4uM2Q5ZWI0MjRiMGRlNDJjOTY3YTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxNQUFNSyxhQUFxQyxHQUFHO0VBQUVDLElBQUksRUFBRSxFQUFSO0VBQVlDLEtBQUssRUFBRSxHQUFuQjtFQUF3QkMsR0FBRyxFQUFFO0FBQTdCLENBQTlDO0FBRU8sTUFBTUMsc0JBQU4sQ0FBNkI7RUFDbENDLFdBQVcsR0FBRztJQUNaLEtBQUtDLE1BQUwsR0FBYyxLQUFLQyx3QkFBTCxDQUE4QixLQUFLRCxNQUFuQyxDQUFkO0lBQ0EsS0FBS0UsSUFBTCxHQUFZLEtBQUtELHdCQUFMLENBQThCLEtBQUtDLElBQW5DLENBQVo7SUFDQSxLQUFLQyxJQUFMLEdBQVksS0FBS0Ysd0JBQUwsQ0FBOEIsS0FBS0UsSUFBbkMsQ0FBWjtJQUNBLEtBQUtDLElBQUwsR0FBWSxLQUFLSCx3QkFBTCxDQUE4QixLQUFLRyxJQUFuQyxDQUFaO0lBQ0EsS0FBS0MsSUFBTCxHQUFZLEtBQUtKLHdCQUFMLENBQThCLEtBQUtJLElBQW5DLEVBQXlDLGlCQUF6QyxDQUFaO0lBQ0EsS0FBS0MsUUFBTCxHQUFnQixLQUFLTCx3QkFBTCxDQUE4QixLQUFLSyxRQUFuQyxFQUE2QyxpQkFBN0MsQ0FBaEI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsS0FBS04sd0JBQUwsQ0FBOEIsS0FBS00sT0FBbkMsQ0FBZjtJQUNBLEtBQUtDLE1BQUwsR0FBYyxLQUFLUCx3QkFBTCxDQUE4QixLQUFLTyxNQUFuQyxDQUFkO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLEtBQUtSLHdCQUFMLENBQThCLEtBQUtRLEtBQW5DLENBQWI7SUFDQSxLQUFLQyxHQUFMLEdBQVcsS0FBS1Qsd0JBQUwsQ0FBOEIsS0FBS1MsR0FBbkMsQ0FBWDtFQUNEOztFQUVEVCx3QkFBd0IsQ0FBQ1UsRUFBRCxFQUFlQyxXQUFmLEVBQXFDO0lBQzNELElBQUlDLElBQUksR0FBRyxJQUFYO0lBRUEsT0FB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QUNGO0FBbEVvQixDQUF2Qjs7QUFxRUEsU0FBU3ZLLG9CQUFULENBQThCeE4sSUFBOUIsRUFBeUN1QixLQUF6QyxFQUFxRDtFQUNuRCxNQUFNaVcsS0FBSyxHQUFHLElBQUlaLDREQUFKLEVBQWQ7O0VBRUEsSUFBSSxDQUFDNVcsSUFBRCxJQUFTQSxJQUFJLENBQUN4QixNQUFMLEtBQWdCLENBQTdCLEVBQWdDO0lBQzlCLE9BQU9nWixLQUFQO0VBQ0Q7O0VBRUQsTUFBTTRCLFdBQVcsR0FBRzFOLFlBQVksQ0FBQ25LLEtBQUssQ0FBQzJLLFNBQVAsQ0FBaEM7O0VBQ0EsSUFBSSxDQUFDa04sV0FBTCxFQUFrQjtJQUNoQixNQUFNO01BQUUxVixPQUFPLEVBQUUsaUJBQWlCbkMsS0FBSyxDQUFDMkssU0FBdkIsR0FBbUM7SUFBOUMsQ0FBTjtFQUNEOztFQUVEa04sV0FBVyxDQUFDbE4sU0FBWixDQUFzQmxNLElBQXRCLEVBQTRCdUIsS0FBNUIsRUFBbUNpVyxLQUFuQztFQUNBLE9BQU9BLEtBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNOVgsU0FBUyxHQUFHMloscUVBQXNCLENBQUNHLG1FQUFELENBQXhDO0FBQ0EsTUFBTTVaLGdCQUFnQixHQUFHeVoscUVBQXNCLENBQUNFLGtGQUFELENBQS9DO0FBQ0EsTUFBTTVSLFNBQVMsR0FBRzBSLHFFQUFzQixDQUFDSSxtRUFBRCxDQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL21ldHJpY3NfcGFuZWxfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvdGFibGUtb2xkL2NvbHVtbl9vcHRpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvdGFibGUtb2xkL2VkaXRvci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlLW9sZC9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC90YWJsZS1vbGQvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC90YWJsZS1vbGQvdHJhbnNmb3JtZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvc2RrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlcHJlY2F0aW9uV2FybmluZywgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9jYXRpb25TZWFyY2hUb09iamVjdCwgbG9jYXRpb25TZXJ2aWNlLCBuYXZpZ2F0aW9uTG9nZ2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbi8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL2FlOGU5MDNlZGY4OGE4M2ZlZGQxMTZhZTAyYzA2MjhiZjcyYjE1MGMvc3JjL25nL2xvY2F0aW9uLmpzI0w1XG5jb25zdCBERUZBVUxUX1BPUlRTOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyBodHRwOiA4MCwgaHR0cHM6IDQ0MywgZnRwOiAyMSB9O1xuXG5leHBvcnQgY2xhc3MgQW5ndWxhckxvY2F0aW9uV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWJzVXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5hYnNVcmwpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaGFzaCk7XG4gICAgdGhpcy5ob3N0ID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5ob3N0KTtcbiAgICB0aGlzLnBhdGggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBhdGgpO1xuICAgIHRoaXMucG9ydCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucG9ydCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucHJvdG9jb2wgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnByb3RvY29sLCAnd2luZG93LmxvY2F0aW9uJyk7XG4gICAgdGhpcy5yZXBsYWNlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5yZXBsYWNlKTtcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc2VhcmNoKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cmwgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnVybCk7XG4gIH1cblxuICB3cmFwSW5EZXByZWNhdGlvbldhcm5pbmcoZm46IEZ1bmN0aW9uLCByZXBsYWNlbWVudD86IHN0cmluZykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgICAgZGVwcmVjYXRpb25XYXJuaW5nKCckbG9jYXRpb24nLCBmbi5uYW1lLCByZXBsYWNlbWVudCB8fCAnbG9jYXRpb25TZXJ2aWNlJyk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgYWJzVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLnVybCgpfWA7XG4gIH1cblxuICBoYXNoKG5ld0hhc2g/OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IGhhc2gnKTtcblxuICAgIGlmICghbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLmhhc2guc2xpY2UoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgfVxuXG4gIGhvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuaG9zdG5hbWU7XG4gIH1cblxuICBwYXRoKHBhdGhuYW1lPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHBhdGgnKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCk7XG5cbiAgICBpZiAocGF0aG5hbWUgIT09IHVuZGVmaW5lZCAmJiBwYXRobmFtZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHBhcnNlZFBhdGggPSBTdHJpbmcocGF0aG5hbWUpO1xuICAgICAgcGFyc2VkUGF0aCA9IHBhcnNlZFBhdGguc3RhcnRzV2l0aCgnLycpID8gcGFyc2VkUGF0aCA6IGAvJHtwYXJzZWRQYXRofWA7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtwYXJzZWRQYXRofWApO1xuXG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogdXJsLnNlYXJjaC5sZW5ndGggPiAwID8gdXJsLnNlYXJjaCA6IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaDogdXJsLmhhc2gubGVuZ3RoID4gMCA/IHVybC5oYXNoIDogbG9jYXRpb24uaGFzaCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09PSBudWxsKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuICB9XG5cbiAgcG9ydCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsLnBvcnQsIDEwKSB8fCBERUZBVUxUX1BPUlRTW3VybC5wcm90b2NvbF0gfHwgbnVsbDtcbiAgfVxuXG4gIHByb3RvY29sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnByb3RvY29sLnNsaWNlKDAsIC0xKTtcbiAgfVxuXG4gIHJlcGxhY2UoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBzZWFyY2goc2VhcmNoPzogYW55LCBwYXJhbVZhbHVlPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHNlYXJjaCcpO1xuICAgIGlmICghc2VhcmNoKSB7XG4gICAgICByZXR1cm4gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2ggJiYgYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHtcbiAgICAgICAgW3NlYXJjaF06IHBhcmFtVmFsdWUsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgbGV0IG5ld1F1ZXJ5O1xuXG4gICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbmV3UXVlcnkgPSB7IC4uLnNlYXJjaCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UXVlcnkgPSBsb2NhdGlvblNlYXJjaFRvT2JqZWN0KHNlYXJjaCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld1F1ZXJ5KSkge1xuICAgICAgICAvLyByZW1vdmluZyBwYXJhbXMgd2l0aCBudWxsIHwgdW5kZWZpbmVkXG4gICAgICAgIGlmIChuZXdRdWVyeVtrZXldID09PSBudWxsIHx8IG5ld1F1ZXJ5W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSBuZXdRdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWRVcmwgPSB1cmxVdGlsLnJlbmRlclVybChsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZSwgbmV3UXVlcnkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2godXBkYXRlZFVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0ZShzdGF0ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzdGF0ZScpO1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdXJsKG5ld1VybD86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiB1cmwnKTtcblxuICAgIGlmIChuZXdVcmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG5ld1VybC5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goeyAuLi5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKSwgaGFzaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnPycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIHNlYXJjaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2gobmV3VXJsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuICAgIHJldHVybiBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH0ke2xvY2F0aW9uLmhhc2h9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEYXRhRnJhbWUsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlQXBpLFxuICBMZWdhY3lSZXNwb25zZURhdGEsXG4gIExvYWRpbmdTdGF0ZSxcbiAgUGFuZWxEYXRhLFxuICBQYW5lbEV2ZW50cyxcbiAgVGltZVJhbmdlLFxuICB0b0RhdGFGcmFtZURUTyxcbiAgdG9MZWdhY3lSZXNwb25zZURhdGEsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGFuZWxDdHJsIH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvcGFuZWxfY3RybCc7XG5pbXBvcnQgeyBDb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgUGFuZWxNb2RlbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUnO1xuaW1wb3J0IHsgYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3V0aWxzL3BhbmVsJztcblxuaW1wb3J0IHsgUGFuZWxRdWVyeVJ1bm5lciB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL1BhbmVsUXVlcnlSdW5uZXInO1xuXG5jbGFzcyBNZXRyaWNzUGFuZWxDdHJsIGV4dGVuZHMgUGFuZWxDdHJsIHtcbiAgZGVjbGFyZSBkYXRhc291cmNlOiBEYXRhU291cmNlQXBpO1xuICBkZWNsYXJlIHJhbmdlOiBUaW1lUmFuZ2U7XG5cbiAgY29udGV4dFNydjogQ29udGV4dFNydjtcbiAgZGF0YXNvdXJjZVNydjogYW55O1xuICB0aW1lU3J2OiBhbnk7XG4gIHRlbXBsYXRlU3J2OiBhbnk7XG4gIGludGVydmFsOiBhbnk7XG4gIGludGVydmFsTXM6IGFueTtcbiAgcmVzb2x1dGlvbjogYW55O1xuICB0aW1lSW5mbz86IHN0cmluZztcbiAgc2tpcERhdGFPbkluaXQgPSBmYWxzZTtcbiAgZGF0YUxpc3Q6IExlZ2FjeVJlc3BvbnNlRGF0YVtdID0gW107XG4gIHF1ZXJ5U3Vic2NyaXB0aW9uPzogVW5zdWJzY3JpYmFibGUgfCBudWxsO1xuICB1c2VEYXRhRnJhbWVzID0gZmFsc2U7XG4gIHBhbmVsRGF0YT86IFBhbmVsRGF0YTtcblxuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgJGluamVjdG9yOiBhbnkpIHtcbiAgICBzdXBlcigkc2NvcGUsICRpbmplY3Rvcik7XG5cbiAgICB0aGlzLmNvbnRleHRTcnYgPSAkaW5qZWN0b3IuZ2V0KCdjb250ZXh0U3J2Jyk7XG4gICAgdGhpcy5kYXRhc291cmNlU3J2ID0gJGluamVjdG9yLmdldCgnZGF0YXNvdXJjZVNydicpO1xuICAgIHRoaXMudGltZVNydiA9ICRpbmplY3Rvci5nZXQoJ3RpbWVTcnYnKTtcbiAgICB0aGlzLnRlbXBsYXRlU3J2ID0gJGluamVjdG9yLmdldCgndGVtcGxhdGVTcnYnKTtcbiAgICB0aGlzLnBhbmVsLmRhdGFzb3VyY2UgPSB0aGlzLnBhbmVsLmRhdGFzb3VyY2UgfHwgbnVsbDtcblxuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLnJlZnJlc2gsIHRoaXMub25NZXRyaWNzUGFuZWxSZWZyZXNoLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLnBhbmVsVGVhcmRvd24sIHRoaXMub25QYW5lbFRlYXJEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50LCB0aGlzLm9uTWV0cmljc1BhbmVsTW91bnRlZC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25NZXRyaWNzUGFuZWxNb3VudGVkKCkge1xuICAgIGNvbnN0IHF1ZXJ5UnVubmVyID0gdGhpcy5wYW5lbC5nZXRRdWVyeVJ1bm5lcigpIGFzIFBhbmVsUXVlcnlSdW5uZXI7XG4gICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IHF1ZXJ5UnVubmVyXG4gICAgICAuZ2V0RGF0YSh7IHdpdGhUcmFuc2Zvcm1zOiB0cnVlLCB3aXRoRmllbGRDb25maWc6IHRydWUgfSlcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5wYW5lbERhdGFPYnNlcnZlcik7XG4gIH1cblxuICBwcml2YXRlIG9uUGFuZWxUZWFyRG93bigpIHtcbiAgICBpZiAodGhpcy5xdWVyeVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk1ldHJpY3NQYW5lbFJlZnJlc2goKSB7XG4gICAgLy8gaWdub3JlIGZldGNoaW5nIGRhdGEgaWYgYW5vdGhlciBwYW5lbCBpcyBpbiBmdWxsc2NyZWVuXG4gICAgaWYgKHRoaXMub3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHdlIGhhdmUgc25hcHNob3QgZGF0YSB1c2UgdGhhdFxuICAgIGlmICh0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoKTtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5wYW5lbC5zbmFwc2hvdERhdGE7XG4gICAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICBpZiAoIWlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wYW5lbERhdGEgPSB7XG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgICAgc2VyaWVzOiBkYXRhLFxuICAgICAgICB0aW1lUmFuZ2U6IHRoaXMucmFuZ2UsXG4gICAgICB9O1xuXG4gICAgICAvLyBEZWZlciBwYW5lbCByZW5kZXJpbmcgdGlsbCB0aGUgbmV4dCBkaWdlc3QgY3ljbGUuXG4gICAgICAvLyBGb3Igc29tZSByZWFzb24gc25hcHNob3QgcGFuZWxzIGRvbid0IGluaXQgYXQgdGhpcyB0aW1lLCBzbyB0aGlzIGhlbHBzIHRvIGF2b2lkIHJlbmRlcmluZyBpc3N1ZXMuXG4gICAgICByZXR1cm4gdGhpcy4kdGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZGF0YVNuYXBzaG90TG9hZCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBsb2FkaW5nL2Vycm9yIHN0YXRlXG4gICAgZGVsZXRlIHRoaXMuZXJyb3I7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIC8vIGxvYWQgZGF0YXNvdXJjZSBzZXJ2aWNlXG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVNydlxuICAgICAgLmdldCh0aGlzLnBhbmVsLmRhdGFzb3VyY2UsIHRoaXMucGFuZWwuc2NvcGVkVmFycylcbiAgICAgIC50aGVuKHRoaXMuaXNzdWVRdWVyaWVzLmJpbmQodGhpcykpXG4gICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm9jZXNzRGF0YUVycm9yKGVycjogYW55KSB7XG4gICAgLy8gaWYgY2FuY2VsZWQgIGtlZXAgbG9hZGluZyBzZXQgdG8gdHJ1ZVxuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnUGFuZWwgcmVxdWVzdCBjYW5jZWxsZWQnLCBlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZSB8fCAnUmVxdWVzdCBFcnJvcic7XG5cbiAgICBpZiAoZXJyLmRhdGEpIHtcbiAgICAgIGlmIChlcnIuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnIuZGF0YS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmIChlcnIuZGF0YS5lcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLmRhdGEuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICB9XG5cbiAgYW5ndWxhckRpcnR5Q2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLiRzY29wZS4kcm9vdC4kJHBoYXNlKSB7XG4gICAgICB0aGlzLiRzY29wZS4kZGlnZXN0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlcyB0aGUgcmVzcG9uc2Ugd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzdHJlYW1cbiAgcGFuZWxEYXRhT2JzZXJ2ZXIgPSB7XG4gICAgbmV4dDogKGRhdGE6IFBhbmVsRGF0YSkgPT4ge1xuICAgICAgdGhpcy5wYW5lbERhdGEgPSBkYXRhO1xuXG4gICAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkVycm9yKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICB9XG5cbiAgICAgIC8vIElnbm9yZSBkYXRhIGluIGxvYWRpbmcgc3RhdGVcbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEucmVxdWVzdCkge1xuICAgICAgICBjb25zdCB7IHRpbWVJbmZvIH0gPSBkYXRhLnJlcXVlc3Q7XG4gICAgICAgIGlmICh0aW1lSW5mbykge1xuICAgICAgICAgIHRoaXMudGltZUluZm8gPSB0aW1lSW5mbztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aW1lUmFuZ2UpIHtcbiAgICAgICAgdGhpcy5yYW5nZSA9IGRhdGEudGltZVJhbmdlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy51c2VEYXRhRnJhbWVzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRGF0YUZyYW1lcyhkYXRhLnNlcmllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNYWtlIHRoZSByZXN1bHRzIGxvb2sgYXMgaWYgdGhleSBjYW1lIGRpcmVjdGx5IGZyb20gYSA8Ni4yIGRhdGFzb3VyY2UgcmVxdWVzdFxuICAgICAgICBjb25zdCBsZWdhY3kgPSBkYXRhLnNlcmllcy5tYXAoKHYpID0+IHRvTGVnYWN5UmVzcG9uc2VEYXRhKHYpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVRdWVyeVJlc3VsdCh7IGRhdGE6IGxlZ2FjeSB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICAgIH0sXG4gIH07XG5cbiAgdXBkYXRlVGltZVJhbmdlKGRhdGFzb3VyY2U/OiBEYXRhU291cmNlQXBpKSB7XG4gICAgdGhpcy5kYXRhc291cmNlID0gZGF0YXNvdXJjZSB8fCB0aGlzLmRhdGFzb3VyY2U7XG4gICAgdGhpcy5yYW5nZSA9IHRoaXMudGltZVNydi50aW1lUmFuZ2UoKTtcblxuICAgIGNvbnN0IG5ld1RpbWVEYXRhID0gYXBwbHlQYW5lbFRpbWVPdmVycmlkZXModGhpcy5wYW5lbCwgdGhpcy5yYW5nZSk7XG4gICAgdGhpcy50aW1lSW5mbyA9IG5ld1RpbWVEYXRhLnRpbWVJbmZvO1xuICAgIHRoaXMucmFuZ2UgPSBuZXdUaW1lRGF0YS50aW1lUmFuZ2U7XG4gIH1cblxuICBpc3N1ZVF1ZXJpZXMoZGF0YXNvdXJjZTogRGF0YVNvdXJjZUFwaSkge1xuICAgIHRoaXMudXBkYXRlVGltZVJhbmdlKGRhdGFzb3VyY2UpO1xuXG4gICAgdGhpcy5kYXRhc291cmNlID0gZGF0YXNvdXJjZTtcblxuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5wYW5lbCBhcyBQYW5lbE1vZGVsO1xuICAgIGNvbnN0IHF1ZXJ5UnVubmVyID0gcGFuZWwuZ2V0UXVlcnlSdW5uZXIoKTtcblxuICAgIHJldHVybiBxdWVyeVJ1bm5lci5ydW4oe1xuICAgICAgZGF0YXNvdXJjZTogcGFuZWwuZGF0YXNvdXJjZSxcbiAgICAgIHF1ZXJpZXM6IHBhbmVsLnRhcmdldHMsXG4gICAgICBwYW5lbElkOiBwYW5lbC5pZCxcbiAgICAgIGRhc2hib2FyZElkOiB0aGlzLmRhc2hib2FyZC5pZCxcbiAgICAgIHRpbWV6b25lOiB0aGlzLmRhc2hib2FyZC5nZXRUaW1lem9uZSgpLFxuICAgICAgdGltZUluZm86IHRoaXMudGltZUluZm8sXG4gICAgICB0aW1lUmFuZ2U6IHRoaXMucmFuZ2UsXG4gICAgICBtYXhEYXRhUG9pbnRzOiBwYW5lbC5tYXhEYXRhUG9pbnRzIHx8IHRoaXMud2lkdGgsXG4gICAgICBtaW5JbnRlcnZhbDogcGFuZWwuaW50ZXJ2YWwsXG4gICAgICBzY29wZWRWYXJzOiBwYW5lbC5zY29wZWRWYXJzLFxuICAgICAgY2FjaGVUaW1lb3V0OiBwYW5lbC5jYWNoZVRpbWVvdXQsXG4gICAgICB0cmFuc2Zvcm1hdGlvbnM6IHBhbmVsLnRyYW5zZm9ybWF0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURhdGFGcmFtZXMoZGF0YTogRGF0YUZyYW1lW10pIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmRhc2hib2FyZCAmJiB0aGlzLmRhc2hib2FyZC5zbmFwc2hvdCkge1xuICAgICAgdGhpcy5wYW5lbC5zbmFwc2hvdERhdGEgPSBkYXRhLm1hcCgoZnJhbWUpID0+IHRvRGF0YUZyYW1lRFRPKGZyYW1lKSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZGF0YUZyYW1lc1JlY2VpdmVkLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVF1ZXJ5UmVzdWx0KHJlc3VsdDogRGF0YVF1ZXJ5UmVzcG9uc2UpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmRhc2hib2FyZC5zbmFwc2hvdCkge1xuICAgICAgdGhpcy5wYW5lbC5zbmFwc2hvdERhdGEgPSByZXN1bHQuZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhIHNvdXJjZSBxdWVyeSByZXN1bHQgaW52YWxpZCwgbWlzc2luZyBkYXRhIGZpZWxkOicsIHJlc3VsdCk7XG4gICAgICByZXN1bHQgPSB7IGRhdGE6IFtdIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZGF0YVJlY2VpdmVkLCByZXN1bHQuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgTWV0cmljc1BhbmVsQ3RybCB9O1xuIiwiaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuICBBcHBFdmVudCxcbiAgUGFuZWxFdmVudHMsXG4gIFBhbmVsUGx1Z2luTWV0YSxcbiAgQW5ndWxhclBhbmVsTWVudUl0ZW0sXG4gIEV2ZW50QnVzRXh0ZW5kZWQsXG4gIEV2ZW50QnVzU3J2LFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIgfSBmcm9tICdhcHAvYW5ndWxhci9Bbmd1bGFyTG9jYXRpb25XcmFwcGVyJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHByb2ZpbGVyIH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7IERhc2hib2FyZE1vZGVsIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlJztcblxuZXhwb3J0IGNsYXNzIFBhbmVsQ3RybCB7XG4gIHBhbmVsOiBhbnk7XG4gIGVycm9yOiBhbnk7XG4gIGRlY2xhcmUgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgcGx1Z2luTmFtZSA9ICcnO1xuICBwbHVnaW5JZCA9ICcnO1xuICBlZGl0b3JUYWJzOiBhbnk7XG4gICRzY29wZTogYW55O1xuICAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZTtcbiAgJHRpbWVvdXQ6IGFueTtcbiAgZWRpdE1vZGVJbml0aWF0ZWQgPSBmYWxzZTtcbiAgZGVjbGFyZSBoZWlnaHQ6IG51bWJlcjtcbiAgZGVjbGFyZSB3aWR0aDogbnVtYmVyO1xuICBjb250YWluZXJIZWlnaHQ6IGFueTtcbiAgZXZlbnRzOiBFdmVudEJ1c0V4dGVuZGVkO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIHRpbWluZzogYW55O1xuICAkbG9jYXRpb246IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXI7XG5cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlKSB7XG4gICAgdGhpcy5wYW5lbCA9IHRoaXMucGFuZWwgPz8gJHNjb3BlLiRwYXJlbnQucGFuZWw7XG4gICAgdGhpcy5kYXNoYm9hcmQgPSB0aGlzLmRhc2hib2FyZCA/PyAkc2NvcGUuJHBhcmVudC5kYXNoYm9hcmQ7XG4gICAgdGhpcy4kaW5qZWN0b3IgPSAkaW5qZWN0b3I7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy4kdGltZW91dCA9ICRpbmplY3Rvci5nZXQoJyR0aW1lb3V0Jyk7XG4gICAgdGhpcy5lZGl0b3JUYWJzID0gW107XG4gICAgdGhpcy4kbG9jYXRpb24gPSBuZXcgQW5ndWxhckxvY2F0aW9uV3JhcHBlcigpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50QnVzU3J2KCk7XG4gICAgdGhpcy50aW1pbmcgPSB7fTsgLy8gbm90IHVzZWQgYnV0IGhlcmUgdG8gbm90IGJyZWFrIHBsdWdpbnNcblxuICAgIGNvbnN0IHBsdWdpbiA9IGNvbmZpZy5wYW5lbHNbdGhpcy5wYW5lbC50eXBlXTtcbiAgICBpZiAocGx1Z2luKSB7XG4gICAgICB0aGlzLnBsdWdpbklkID0gcGx1Z2luLmlkO1xuICAgICAgdGhpcy5wbHVnaW5OYW1lID0gcGx1Z2luLm5hbWU7XG4gICAgfVxuXG4gICAgJHNjb3BlLiRvbihQYW5lbEV2ZW50cy5jb21wb25lbnREaWRNb3VudC5uYW1lLCAoKSA9PiB0aGlzLnBhbmVsRGlkTW91bnQoKSk7XG4gIH1cblxuICBwYW5lbERpZE1vdW50KCkge1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQpO1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuaW5pdGlhbGl6ZWQpO1xuICAgIHRoaXMuZGFzaGJvYXJkLnBhbmVsSW5pdGlhbGl6ZWQodGhpcy5wYW5lbCk7XG4gIH1cblxuICByZW5kZXJpbmdDb21wbGV0ZWQoKSB7XG4gICAgcHJvZmlsZXIucmVuZGVyaW5nQ29tcGxldGVkKCk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMucGFuZWwucmVmcmVzaCgpO1xuICB9XG5cbiAgcHVibGlzaEFwcEV2ZW50PFQ+KGV2ZW50OiBBcHBFdmVudDxUPiwgcGF5bG9hZD86IFQpIHtcbiAgICB0aGlzLiRzY29wZS4kcm9vdC5hcHBFdmVudChldmVudCwgcGF5bG9hZCk7XG4gIH1cblxuICBpbml0RWRpdE1vZGUoKSB7XG4gICAgaWYgKCF0aGlzLmVkaXRNb2RlSW5pdGlhdGVkKSB7XG4gICAgICB0aGlzLmVkaXRNb2RlSW5pdGlhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZWRpdE1vZGVJbml0aWFsaXplZCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRWRpdG9yVGFiKHRpdGxlOiBzdHJpbmcsIGRpcmVjdGl2ZUZuOiBhbnksIGluZGV4PzogbnVtYmVyLCBpY29uPzogYW55KSB7XG4gICAgY29uc3QgZWRpdG9yVGFiID0geyB0aXRsZSwgZGlyZWN0aXZlRm4sIGljb24gfTtcblxuICAgIGlmIChpc1N0cmluZyhkaXJlY3RpdmVGbikpIHtcbiAgICAgIGVkaXRvclRhYi5kaXJlY3RpdmVGbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGVtcGxhdGVVcmw6IGRpcmVjdGl2ZUZuIH07XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpbmRleCkge1xuICAgICAgdGhpcy5lZGl0b3JUYWJzLnNwbGljZShpbmRleCwgMCwgZWRpdG9yVGFiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0b3JUYWJzLnB1c2goZWRpdG9yVGFiKTtcbiAgICB9XG4gIH1cblxuICBnZXRFeHRlbmRlZE1lbnUoKSB7XG4gICAgY29uc3QgbWVudTogQW5ndWxhclBhbmVsTWVudUl0ZW1bXSA9IFtdO1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuaW5pdFBhbmVsQWN0aW9ucywgbWVudSk7XG4gICAgcmV0dXJuIG1lbnU7XG4gIH1cblxuICAvLyBPdmVycmlkZSBpbiBzdWItY2xhc3MgdG8gYWRkIGl0ZW1zIGJlZm9yZSBleHRlbmRlZCBtZW51XG4gIGFzeW5jIGdldEFkZGl0aW9uYWxNZW51SXRlbXMoKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIG90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmRhc2hib2FyZC5vdGhlclBhbmVsSW5GdWxsc2NyZWVuKHRoaXMucGFuZWwpO1xuICB9XG5cbiAgcmVuZGVyKHBheWxvYWQ/OiBhbnkpIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLnJlbmRlciwgcGF5bG9hZCk7XG4gIH1cblxuICAvLyBvdmVycmlkZW4gZnJvbSByZWFjdFxuICBvblBsdWdpblR5cGVDaGFuZ2UgPSAocGx1Z2luOiBQYW5lbFBsdWdpbk1ldGEpID0+IHt9O1xufVxuIiwiaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgaW5kZXhPZiB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUN0cmw8VCA9IGFueT4ge1xuICB0YXJnZXQhOiBUO1xuICBkYXRhc291cmNlITogYW55O1xuICBwYW5lbEN0cmwhOiBhbnk7XG4gIHBhbmVsOiBhbnk7XG4gIGhhc1Jhd01vZGUhOiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZyB8IG51bGw7XG4gIGlzTGFzdFF1ZXJ5OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyAkc2NvcGU6IGFueSwgcHVibGljICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwgPSB0aGlzLnBhbmVsQ3RybCA/PyAkc2NvcGUuY3RybC5wYW5lbEN0cmw7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnRhcmdldCA/PyAkc2NvcGUuY3RybC50YXJnZXQ7XG4gICAgdGhpcy5kYXRhc291cmNlID0gdGhpcy5kYXRhc291cmNlID8/ICRzY29wZS5jdHJsLmRhdGFzb3VyY2U7XG4gICAgdGhpcy5wYW5lbCA9IHRoaXMucGFuZWxDdHJsPy5wYW5lbCA/PyAkc2NvcGUuY3RybC5wYW5lbEN0cmwucGFuZWw7XG4gICAgdGhpcy5pc0xhc3RRdWVyeSA9IGluZGV4T2YodGhpcy5wYW5lbC50YXJnZXRzLCB0aGlzLnRhcmdldCkgPT09IHRoaXMucGFuZWwudGFyZ2V0cy5sZW5ndGggLSAxO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZWZyZXNoKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IG1hcCwgd2l0aG91dCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IGdldFZhbHVlRm9ybWF0cyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uT3B0aW9uc0N0cmwge1xuICBwYW5lbDogYW55O1xuICBwYW5lbEN0cmw6IGFueTtcbiAgY29sb3JNb2RlczogYW55O1xuICBjb2x1bW5TdHlsZXM6IGFueTtcbiAgY29sdW1uVHlwZXM6IGFueTtcbiAgZm9udFNpemVzOiBhbnk7XG4gIGRhdGVGb3JtYXRzOiBhbnk7XG4gIGFkZENvbHVtblNlZ21lbnQ6IGFueTtcbiAgdW5pdEZvcm1hdHM6IGFueTtcbiAgZ2V0Q29sdW1uTmFtZXM6IGFueTtcbiAgYWN0aXZlU3R5bGVJbmRleDogbnVtYmVyO1xuICBtYXBwaW5nVHlwZXM6IGFueTtcblxuICBhbGlnblR5cGVzOiBhbnk7XG4gIHN0YXRpYyByZWFkb25seSBhbGlnblR5cGVzRW51bSA9IFtcbiAgICB7IHRleHQ6ICdhdXRvJywgdmFsdWU6ICcnIH0sXG4gICAgeyB0ZXh0OiAnbGVmdCcsIHZhbHVlOiAnbGVmdCcgfSxcbiAgICB7IHRleHQ6ICdjZW50ZXInLCB2YWx1ZTogJ2NlbnRlcicgfSxcbiAgICB7IHRleHQ6ICdyaWdodCcsIHZhbHVlOiAncmlnaHQnIH0sXG4gIF07XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSkge1xuICAgICRzY29wZS5lZGl0b3IgPSB0aGlzO1xuXG4gICAgdGhpcy5hY3RpdmVTdHlsZUluZGV4ID0gMDtcbiAgICB0aGlzLnBhbmVsQ3RybCA9ICRzY29wZS5jdHJsO1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsQ3RybC5wYW5lbDtcbiAgICB0aGlzLnVuaXRGb3JtYXRzID0gZ2V0VmFsdWVGb3JtYXRzKCk7XG4gICAgdGhpcy5jb2xvck1vZGVzID0gW1xuICAgICAgeyB0ZXh0OiAnRGlzYWJsZWQnLCB2YWx1ZTogbnVsbCB9LFxuICAgICAgeyB0ZXh0OiAnQ2VsbCcsIHZhbHVlOiAnY2VsbCcgfSxcbiAgICAgIHsgdGV4dDogJ1ZhbHVlJywgdmFsdWU6ICd2YWx1ZScgfSxcbiAgICAgIHsgdGV4dDogJ1JvdycsIHZhbHVlOiAncm93JyB9LFxuICAgIF07XG4gICAgdGhpcy5jb2x1bW5UeXBlcyA9IFtcbiAgICAgIHsgdGV4dDogJ051bWJlcicsIHZhbHVlOiAnbnVtYmVyJyB9LFxuICAgICAgeyB0ZXh0OiAnU3RyaW5nJywgdmFsdWU6ICdzdHJpbmcnIH0sXG4gICAgICB7IHRleHQ6ICdEYXRlJywgdmFsdWU6ICdkYXRlJyB9LFxuICAgICAgeyB0ZXh0OiAnSGlkZGVuJywgdmFsdWU6ICdoaWRkZW4nIH0sXG4gICAgXTtcbiAgICB0aGlzLmZvbnRTaXplcyA9IFsnODAlJywgJzkwJScsICcxMDAlJywgJzExMCUnLCAnMTIwJScsICcxMzAlJywgJzE1MCUnLCAnMTYwJScsICcxODAlJywgJzIwMCUnLCAnMjIwJScsICcyNTAlJ107XG4gICAgdGhpcy5kYXRlRm9ybWF0cyA9IFtcbiAgICAgIHsgdGV4dDogJ1lZWVktTU0tREQgSEg6bW06c3MnLCB2YWx1ZTogJ1lZWVktTU0tREQgSEg6bW06c3MnIH0sXG4gICAgICB7IHRleHQ6ICdZWVlZLU1NLUREIEhIOm1tOnNzLlNTUycsIHZhbHVlOiAnWVlZWS1NTS1ERCBISDptbTpzcy5TU1MnIH0sXG4gICAgICB7IHRleHQ6ICdNTS9ERC9ZWSBoOm1tOnNzIGEnLCB2YWx1ZTogJ01NL0REL1lZIGg6bW06c3MgYScgfSxcbiAgICAgIHsgdGV4dDogJ01NTU0gRCwgWVlZWSBMVCcsIHZhbHVlOiAnTU1NTSBELCBZWVlZIExUJyB9LFxuICAgICAgeyB0ZXh0OiAnWVlZWS1NTS1ERCcsIHZhbHVlOiAnWVlZWS1NTS1ERCcgfSxcbiAgICBdO1xuICAgIHRoaXMubWFwcGluZ1R5cGVzID0gW1xuICAgICAgeyB0ZXh0OiAnVmFsdWUgdG8gdGV4dCcsIHZhbHVlOiAxIH0sXG4gICAgICB7IHRleHQ6ICdSYW5nZSB0byB0ZXh0JywgdmFsdWU6IDIgfSxcbiAgICBdO1xuICAgIHRoaXMuYWxpZ25UeXBlcyA9IENvbHVtbk9wdGlvbnNDdHJsLmFsaWduVHlwZXNFbnVtO1xuXG4gICAgdGhpcy5nZXRDb2x1bW5OYW1lcyA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5wYW5lbEN0cmwudGFibGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hcCh0aGlzLnBhbmVsQ3RybC50YWJsZS5jb2x1bW5zLCAoY29sOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbC50ZXh0O1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMub25Db2xvckNoYW5nZSA9IHRoaXMub25Db2xvckNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMucGFuZWxDdHJsLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0VW5pdEZvcm1hdChjb2x1bW46IGFueSkge1xuICAgIHJldHVybiAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgY29sdW1uLnVuaXQgPSB2YWx1ZTtcbiAgICAgIHRoaXMucGFuZWxDdHJsLnJlbmRlcigpO1xuICAgIH07XG4gIH1cblxuICBhZGRDb2x1bW5TdHlsZSgpIHtcbiAgICBjb25zdCBuZXdTdHlsZVJ1bGU6IG9iamVjdCA9IHtcbiAgICAgIHVuaXQ6ICdzaG9ydCcsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGFsaWFzOiAnJyxcbiAgICAgIGRlY2ltYWxzOiAyLFxuICAgICAgY29sb3JzOiBbJ3JnYmEoMjQ1LCA1NCwgNTQsIDAuOSknLCAncmdiYSgyMzcsIDEyOSwgNDAsIDAuODkpJywgJ3JnYmEoNTAsIDE3MiwgNDUsIDAuOTcpJ10sXG4gICAgICBjb2xvck1vZGU6IG51bGwsXG4gICAgICBwYXR0ZXJuOiAnJyxcbiAgICAgIGRhdGVGb3JtYXQ6ICdZWVlZLU1NLUREIEhIOm1tOnNzJyxcbiAgICAgIHRocmVzaG9sZHM6IFtdLFxuICAgICAgbWFwcGluZ1R5cGU6IDEsXG4gICAgICBhbGlnbjogJ2F1dG8nLFxuICAgIH07XG5cbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLnBhbmVsLnN0eWxlcztcbiAgICBjb25zdCBzdHlsZXNDb3VudCA9IHN0eWxlcy5sZW5ndGg7XG4gICAgbGV0IGluZGV4VG9JbnNlcnQgPSBzdHlsZXNDb3VudDtcblxuICAgIC8vIGNoZWNrIGlmIGxhc3QgaXMgYSBjYXRjaCBhbGwgcnVsZSwgdGhlbiBhZGQgaXQgYmVmb3JlIHRoYXQgb25lXG4gICAgaWYgKHN0eWxlc0NvdW50ID4gMCkge1xuICAgICAgY29uc3QgbGFzdCA9IHN0eWxlc1tzdHlsZXNDb3VudCAtIDFdO1xuICAgICAgaWYgKGxhc3QucGF0dGVybiA9PT0gJy8uKi8nKSB7XG4gICAgICAgIGluZGV4VG9JbnNlcnQgPSBzdHlsZXNDb3VudCAtIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3R5bGVzLnNwbGljZShpbmRleFRvSW5zZXJ0LCAwLCBuZXdTdHlsZVJ1bGUpO1xuICAgIHRoaXMuYWN0aXZlU3R5bGVJbmRleCA9IGluZGV4VG9JbnNlcnQ7XG4gIH1cblxuICByZW1vdmVDb2x1bW5TdHlsZShzdHlsZTogYW55KSB7XG4gICAgdGhpcy5wYW5lbC5zdHlsZXMgPSB3aXRob3V0KHRoaXMucGFuZWwuc3R5bGVzLCBzdHlsZSk7XG4gIH1cblxuICBpbnZlcnRDb2xvck9yZGVyKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCByZWYgPSB0aGlzLnBhbmVsLnN0eWxlc1tpbmRleF0uY29sb3JzO1xuICAgIGNvbnN0IGNvcHkgPSByZWZbMF07XG4gICAgcmVmWzBdID0gcmVmWzJdO1xuICAgIHJlZlsyXSA9IGNvcHk7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cblxuICBvbkNvbG9yQ2hhbmdlKHN0eWxlOiBhbnksIGNvbG9ySW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiAobmV3Q29sb3I6IHN0cmluZykgPT4ge1xuICAgICAgc3R5bGUuY29sb3JzW2NvbG9ySW5kZXhdID0gbmV3Q29sb3I7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH07XG4gIH1cblxuICBhZGRWYWx1ZU1hcChzdHlsZTogYW55KSB7XG4gICAgaWYgKCFzdHlsZS52YWx1ZU1hcHMpIHtcbiAgICAgIHN0eWxlLnZhbHVlTWFwcyA9IFtdO1xuICAgIH1cbiAgICBzdHlsZS52YWx1ZU1hcHMucHVzaCh7IHZhbHVlOiAnJywgdGV4dDogJycgfSk7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cblxuICByZW1vdmVWYWx1ZU1hcChzdHlsZTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgc3R5bGUudmFsdWVNYXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cblxuICBhZGRSYW5nZU1hcChzdHlsZTogYW55KSB7XG4gICAgaWYgKCFzdHlsZS5yYW5nZU1hcHMpIHtcbiAgICAgIHN0eWxlLnJhbmdlTWFwcyA9IFtdO1xuICAgIH1cbiAgICBzdHlsZS5yYW5nZU1hcHMucHVzaCh7IGZyb206ICcnLCB0bzogJycsIHRleHQ6ICcnIH0pO1xuICAgIHRoaXMucGFuZWxDdHJsLnJlbmRlcigpO1xuICB9XG5cbiAgcmVtb3ZlUmFuZ2VNYXAoc3R5bGU6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIHN0eWxlLnJhbmdlTWFwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMucGFuZWxDdHJsLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW5PcHRpb25zVGFiKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogJ3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC90YWJsZS1vbGQvY29sdW1uX29wdGlvbnMuaHRtbCcsXG4gICAgY29udHJvbGxlcjogQ29sdW1uT3B0aW9uc0N0cmwsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBmaW5kLCBtYXAsIHdpdGhvdXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyB0cmFuc2Zvcm1lcnMgfSBmcm9tICcuL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBDb2x1bW5TdHlsZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVQYW5lbEVkaXRvckN0cmwge1xuICBwYW5lbDogYW55O1xuICBwYW5lbEN0cmw6IGFueTtcbiAgdHJhbnNmb3JtZXJzOiBhbnk7XG4gIGZvbnRTaXplczogYW55O1xuICBhZGRDb2x1bW5TZWdtZW50OiBhbnk7XG4gIGdldENvbHVtbk5hbWVzOiBhbnk7XG4gIGNhblNldENvbHVtbnMgPSBmYWxzZTtcbiAgY29sdW1uc0hlbHBNZXNzYWdlID0gJyc7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgcHJpdmF0ZSB1aVNlZ21lbnRTcnY6IGFueSkge1xuICAgICRzY29wZS5lZGl0b3IgPSB0aGlzO1xuICAgIHRoaXMucGFuZWxDdHJsID0gJHNjb3BlLmN0cmw7XG4gICAgdGhpcy5wYW5lbCA9IHRoaXMucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMudHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzO1xuICAgIHRoaXMuZm9udFNpemVzID0gWyc4MCUnLCAnOTAlJywgJzEwMCUnLCAnMTEwJScsICcxMjAlJywgJzEzMCUnLCAnMTUwJScsICcxNjAlJywgJzE4MCUnLCAnMjAwJScsICcyMjAlJywgJzI1MCUnXTtcbiAgICB0aGlzLmFkZENvbHVtblNlZ21lbnQgPSB1aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xuICAgIHRoaXMudXBkYXRlVHJhbnNmb3JtSGludHMoKTtcbiAgfVxuXG4gIHVwZGF0ZVRyYW5zZm9ybUhpbnRzKCkge1xuICAgIHRoaXMuY2FuU2V0Q29sdW1ucyA9IGZhbHNlO1xuICAgIHRoaXMuY29sdW1uc0hlbHBNZXNzYWdlID0gJyc7XG5cbiAgICBzd2l0Y2ggKHRoaXMucGFuZWwudHJhbnNmb3JtKSB7XG4gICAgICBjYXNlICd0aW1lc2VyaWVzX2FnZ3JlZ2F0aW9ucyc6IHtcbiAgICAgICAgdGhpcy5jYW5TZXRDb2x1bW5zID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdqc29uJzoge1xuICAgICAgICB0aGlzLmNhblNldENvbHVtbnMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3RhYmxlJzoge1xuICAgICAgICB0aGlzLmNvbHVtbnNIZWxwTWVzc2FnZSA9ICdDb2x1bW5zIGFuZCB0aGVpciBvcmRlciBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgZGF0YSBxdWVyeSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29sdW1uT3B0aW9ucygpIHtcbiAgICBpZiAoIXRoaXMucGFuZWxDdHJsLmRhdGFSYXcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIH1cbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy50cmFuc2Zvcm1lcnNbdGhpcy5wYW5lbC50cmFuc2Zvcm1dLmdldENvbHVtbnModGhpcy5wYW5lbEN0cmwuZGF0YVJhdyk7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBtYXAoY29sdW1ucywgKGM6IGFueSkgPT4gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHZhbHVlOiBjLnRleHQgfSkpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VnbWVudHMpO1xuICB9XG5cbiAgYWRkQ29sdW1uKCkge1xuICAgIGNvbnN0IGNvbHVtbnMgPSB0cmFuc2Zvcm1lcnNbdGhpcy5wYW5lbC50cmFuc2Zvcm1dLmdldENvbHVtbnModGhpcy5wYW5lbEN0cmwuZGF0YVJhdyk7XG4gICAgY29uc3QgY29sdW1uOiBhbnkgPSBmaW5kKGNvbHVtbnMsIHsgdGV4dDogdGhpcy5hZGRDb2x1bW5TZWdtZW50LnZhbHVlIH0pO1xuXG4gICAgaWYgKGNvbHVtbikge1xuICAgICAgdGhpcy5wYW5lbC5jb2x1bW5zLnB1c2goY29sdW1uKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGx1c0J1dHRvbiA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICB0aGlzLmFkZENvbHVtblNlZ21lbnQuaHRtbCA9IHBsdXNCdXR0b24uaHRtbDtcbiAgICB0aGlzLmFkZENvbHVtblNlZ21lbnQudmFsdWUgPSBwbHVzQnV0dG9uLnZhbHVlO1xuICB9XG5cbiAgdHJhbnNmb3JtQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnBhbmVsLmNvbHVtbnMgPSBbXTtcbiAgICBpZiAodGhpcy5wYW5lbC50cmFuc2Zvcm0gPT09ICdhbm5vdGF0aW9ucycpIHtcbiAgICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucGFuZWwudHJhbnNmb3JtID09PSAndGltZXNlcmllc19hZ2dyZWdhdGlvbnMnKSB7XG4gICAgICAgIHRoaXMucGFuZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogJ0F2ZycsIHZhbHVlOiAnYXZnJyB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVUcmFuc2Zvcm1IaW50cygpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cblxuICByZW1vdmVDb2x1bW4oY29sdW1uOiBDb2x1bW5TdHlsZSkge1xuICAgIHRoaXMucGFuZWwuY29sdW1ucyA9IHdpdGhvdXQodGhpcy5wYW5lbC5jb2x1bW5zLCBjb2x1bW4pO1xuICAgIHRoaXMucGFuZWxDdHJsLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWJsZVBhbmVsRWRpdG9yKHVpU2VnbWVudFNydjogYW55KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAncHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlLW9sZC9lZGl0b3IuaHRtbCcsXG4gICAgY29udHJvbGxlcjogVGFibGVQYW5lbEVkaXRvckN0cmwsXG4gIH07XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgaXNUYWJsZURhdGEsIFBhbmVsRXZlbnRzLCBQYW5lbFBsdWdpbiwgUGFuZWxQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgYXBwbHlGaWx0ZXJGcm9tVGFibGUgfSBmcm9tICdhcHAvZmVhdHVyZXMvdmFyaWFibGVzL2FkaG9jL2FjdGlvbnMnO1xuaW1wb3J0IHsgTWV0cmljc1BhbmVsQ3RybCB9IGZyb20gJ2FwcC9wbHVnaW5zL3Nkayc7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJ2FwcC9zdG9yZS9zdG9yZSc7XG5cbmltcG9ydCB7IGNvbHVtbk9wdGlvbnNUYWIgfSBmcm9tICcuL2NvbHVtbl9vcHRpb25zJztcbmltcG9ydCB7IHRhYmxlUGFuZWxFZGl0b3IgfSBmcm9tICcuL2VkaXRvcic7XG5pbXBvcnQgeyBUYWJsZVJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyB0cmFuc2Zvcm1EYXRhVG9UYWJsZSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlUGFuZWxDdHJsIGV4dGVuZHMgTWV0cmljc1BhbmVsQ3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdtb2R1bGUuaHRtbCc7XG5cbiAgcGFnZUluZGV4OiBudW1iZXI7XG4gIGRhdGFSYXc6IGFueTtcbiAgdGFibGU6IGFueTtcbiAgcmVuZGVyZXI6IGFueTtcbiAgcGFuZWxIYXNSb3dDb2xvck1vZGU6IGJvb2xlYW47XG4gIHBhbmVsSGFzTGlua3M6IGJvb2xlYW47XG5cbiAgcGFuZWxEZWZhdWx0czogYW55ID0ge1xuICAgIHRhcmdldHM6IFt7fV0sXG4gICAgdHJhbnNmb3JtOiAndGltZXNlcmllc190b19jb2x1bW5zJyxcbiAgICBwYWdlU2l6ZTogbnVsbCxcbiAgICBzaG93SGVhZGVyOiB0cnVlLFxuICAgIHN0eWxlczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIHBhdHRlcm46ICdUaW1lJyxcbiAgICAgICAgYWxpYXM6ICdUaW1lJyxcbiAgICAgICAgZGF0ZUZvcm1hdDogJ1lZWVktTU0tREQgSEg6bW06c3MnLFxuICAgICAgICBhbGlnbjogJ2F1dG8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdW5pdDogJ3Nob3J0JyxcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIGFsaWFzOiAnJyxcbiAgICAgICAgZGVjaW1hbHM6IDIsXG4gICAgICAgIGNvbG9yczogWydyZ2JhKDI0NSwgNTQsIDU0LCAwLjkpJywgJ3JnYmEoMjM3LCAxMjksIDQwLCAwLjg5KScsICdyZ2JhKDUwLCAxNzIsIDQ1LCAwLjk3KSddLFxuICAgICAgICBjb2xvck1vZGU6IG51bGwsXG4gICAgICAgIHBhdHRlcm46ICcvLiovJyxcbiAgICAgICAgdGhyZXNob2xkczogW10sXG4gICAgICAgIGFsaWduOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGNvbHVtbnM6IFtdLFxuXG4gICAgZm9udFNpemU6ICcxMDAlJyxcbiAgICBzb3J0OiB7IGNvbDogMCwgZGVzYzogdHJ1ZSB9LFxuICB9O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYW55LCBwcml2YXRlIGFubm90YXRpb25zU3J2OiBhbnksIHByaXZhdGUgJHNhbml0aXplOiBhbnkpIHtcbiAgICBzdXBlcigkc2NvcGUsICRpbmplY3Rvcik7XG5cbiAgICB0aGlzLnBhZ2VJbmRleCA9IDA7XG5cbiAgICBpZiAodGhpcy5wYW5lbC5zdHlsZXMgPT09IHZvaWQgMCkge1xuICAgICAgdGhpcy5wYW5lbC5zdHlsZXMgPSB0aGlzLnBhbmVsLmNvbHVtbnM7XG4gICAgICB0aGlzLnBhbmVsLmNvbHVtbnMgPSB0aGlzLnBhbmVsLmZpZWxkcztcbiAgICAgIGRlbGV0ZSB0aGlzLnBhbmVsLmNvbHVtbnM7XG4gICAgICBkZWxldGUgdGhpcy5wYW5lbC5maWVsZHM7XG4gICAgfVxuXG4gICAgZGVmYXVsdHModGhpcy5wYW5lbCwgdGhpcy5wYW5lbERlZmF1bHRzKTtcblxuICAgIHRoaXMucGFuZWxIYXNSb3dDb2xvck1vZGUgPSBCb29sZWFuKHRoaXMucGFuZWwuc3R5bGVzLmZpbmQoKHN0eWxlOiBhbnkpID0+IHN0eWxlLmNvbG9yTW9kZSA9PT0gJ3JvdycpKTtcbiAgICB0aGlzLnBhbmVsSGFzTGlua3MgPSBCb29sZWFuKHRoaXMucGFuZWwuc3R5bGVzLmZpbmQoKHN0eWxlOiBhbnkpID0+IHN0eWxlLmxpbmspKTtcblxuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgdGhpcy5vbkRhdGFSZWNlaXZlZC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5kYXRhU25hcHNob3RMb2FkLCB0aGlzLm9uRGF0YVJlY2VpdmVkLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmVkaXRNb2RlSW5pdGlhbGl6ZWQsIHRoaXMub25Jbml0RWRpdE1vZGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBvbkluaXRFZGl0TW9kZSgpIHtcbiAgICB0aGlzLmFkZEVkaXRvclRhYignT3B0aW9ucycsIHRhYmxlUGFuZWxFZGl0b3IsIDIpO1xuICAgIHRoaXMuYWRkRWRpdG9yVGFiKCdDb2x1bW4gU3R5bGVzJywgY29sdW1uT3B0aW9uc1RhYiwgMyk7XG4gIH1cblxuICBtaWdyYXRlVG9QYW5lbCh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9uUGx1Z2luVHlwZUNoYW5nZShjb25maWcucGFuZWxzW3R5cGVdKTtcbiAgfVxuXG4gIGlzc3VlUXVlcmllcyhkYXRhc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IDA7XG5cbiAgICBpZiAodGhpcy5wYW5lbC50cmFuc2Zvcm0gPT09ICdhbm5vdGF0aW9ucycpIHtcbiAgICAgIHJldHVybiB0aGlzLmFubm90YXRpb25zU3J2XG4gICAgICAgIC5nZXRBbm5vdGF0aW9ucyh7XG4gICAgICAgICAgZGFzaGJvYXJkOiB0aGlzLmRhc2hib2FyZCxcbiAgICAgICAgICBwYW5lbDogdGhpcy5wYW5lbCxcbiAgICAgICAgICByYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGFubm86IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGF0YVJhdyA9IGFubm87XG4gICAgICAgICAgdGhpcy5wYWdlSW5kZXggPSAwO1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgcmV0dXJuIHsgZGF0YTogdGhpcy5kYXRhUmF3IH07IC8vIE5vdCB1c2VkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5pc3N1ZVF1ZXJpZXMoZGF0YXNvdXJjZSk7XG4gIH1cblxuICBvbkRhdGFSZWNlaXZlZChkYXRhTGlzdDogYW55KSB7XG4gICAgdGhpcy5kYXRhUmF3ID0gZGF0YUxpc3Q7XG4gICAgdGhpcy5wYWdlSW5kZXggPSAwO1xuXG4gICAgLy8gYXV0b21hdGljYWxseSBjb3JyZWN0IHRyYW5zZm9ybSBtb2RlIGJhc2VkIG9uIGRhdGFcbiAgICBpZiAodGhpcy5kYXRhUmF3ICYmIHRoaXMuZGF0YVJhdy5sZW5ndGgpIHtcbiAgICAgIGlmIChpc1RhYmxlRGF0YSh0aGlzLmRhdGFSYXdbMF0pKSB7XG4gICAgICAgIHRoaXMucGFuZWwudHJhbnNmb3JtID0gJ3RhYmxlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFSYXdbMF0udHlwZSA9PT0gJ2RvY3MnKSB7XG4gICAgICAgICAgdGhpcy5wYW5lbC50cmFuc2Zvcm0gPSAnanNvbic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMucGFuZWwudHJhbnNmb3JtID09PSAndGFibGUnIHx8IHRoaXMucGFuZWwudHJhbnNmb3JtID09PSAnanNvbicpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWwudHJhbnNmb3JtID0gJ3RpbWVzZXJpZXNfdG9fcm93cyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnRhYmxlID0gdHJhbnNmb3JtRGF0YVRvVGFibGUodGhpcy5kYXRhUmF3LCB0aGlzLnBhbmVsKTtcbiAgICB0aGlzLnRhYmxlLnNvcnQodGhpcy5wYW5lbC5zb3J0KTtcblxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVGFibGVSZW5kZXJlcihcbiAgICAgIHRoaXMucGFuZWwsXG4gICAgICB0aGlzLnRhYmxlLFxuICAgICAgdGhpcy5kYXNoYm9hcmQuZ2V0VGltZXpvbmUoKSxcbiAgICAgIHRoaXMuJHNhbml0aXplLFxuICAgICAgdGhpcy50ZW1wbGF0ZVNydixcbiAgICAgIGNvbmZpZy50aGVtZVxuICAgICk7XG5cbiAgICByZXR1cm4gc3VwZXIucmVuZGVyKHRoaXMudGFibGUpO1xuICB9XG5cbiAgdG9nZ2xlQ29sdW1uU29ydChjb2w6IGFueSwgY29sSW5kZXg6IGFueSkge1xuICAgIC8vIHJlbW92ZSBzb3J0IGZsYWcgZnJvbSBjdXJyZW50IGNvbHVtblxuICAgIGlmICh0aGlzLnRhYmxlLmNvbHVtbnNbdGhpcy5wYW5lbC5zb3J0LmNvbF0pIHtcbiAgICAgIHRoaXMudGFibGUuY29sdW1uc1t0aGlzLnBhbmVsLnNvcnQuY29sXS5zb3J0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFuZWwuc29ydC5jb2wgPT09IGNvbEluZGV4KSB7XG4gICAgICBpZiAodGhpcy5wYW5lbC5zb3J0LmRlc2MpIHtcbiAgICAgICAgdGhpcy5wYW5lbC5zb3J0LmRlc2MgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFuZWwuc29ydC5jb2wgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhbmVsLnNvcnQuY29sID0gY29sSW5kZXg7XG4gICAgICB0aGlzLnBhbmVsLnNvcnQuZGVzYyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBsaW5rKHNjb3BlOiBhbnksIGVsZW06IEpRdWVyeSwgYXR0cnM6IGFueSwgY3RybDogVGFibGVQYW5lbEN0cmwpIHtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGNvbnN0IHBhbmVsID0gY3RybC5wYW5lbDtcbiAgICBsZXQgcGFnZUNvdW50ID0gMDtcblxuICAgIGZ1bmN0aW9uIGdldFRhYmxlSGVpZ2h0KCkge1xuICAgICAgbGV0IHBhbmVsSGVpZ2h0ID0gY3RybC5oZWlnaHQ7XG5cbiAgICAgIGlmIChwYWdlQ291bnQgPiAxKSB7XG4gICAgICAgIHBhbmVsSGVpZ2h0IC09IDI2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFuZWxIZWlnaHQgLSAzMSArICdweCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVGFibGVSb3dzKHRib2R5RWxlbTogSlF1ZXJ5KSB7XG4gICAgICBjdHJsLnJlbmRlcmVyLnNldFRhYmxlKGRhdGEpO1xuICAgICAgdGJvZHlFbGVtLmVtcHR5KCk7XG4gICAgICB0Ym9keUVsZW0uaHRtbChjdHJsLnJlbmRlcmVyLnJlbmRlcihjdHJsLnBhZ2VJbmRleCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFBhZ2UoZTogYW55KSB7XG4gICAgICBjb25zdCBlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGN0cmwucGFnZUluZGV4ID0gcGFyc2VJbnQoZWwudGV4dCgpLCAxMCkgLSAxO1xuICAgICAgcmVuZGVyUGFuZWwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRQYWdpbmF0aW9uQ29udHJvbHMoZm9vdGVyRWxlbTogSlF1ZXJ5KSB7XG4gICAgICBmb290ZXJFbGVtLmVtcHR5KCk7XG5cbiAgICAgIGNvbnN0IHBhZ2VTaXplID0gcGFuZWwucGFnZVNpemUgfHwgMTAwO1xuICAgICAgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGRhdGEucm93cy5sZW5ndGggLyBwYWdlU2l6ZSk7XG4gICAgICBpZiAocGFnZUNvdW50ID09PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3RybC5wYWdlSW5kZXggLSAzLCAwKTtcbiAgICAgIGNvbnN0IGVuZFBhZ2UgPSBNYXRoLm1pbihwYWdlQ291bnQsIHN0YXJ0UGFnZSArIDkpO1xuXG4gICAgICBjb25zdCBwYWdpbmF0aW9uTGlzdCA9ICQoJzx1bD48L3VsPicpO1xuXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQYWdlOyBpIDwgZW5kUGFnZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gaSA9PT0gY3RybC5wYWdlSW5kZXggPyAnYWN0aXZlJyA6ICcnO1xuICAgICAgICBjb25zdCBwYWdlTGlua0VsZW0gPSAkKFxuICAgICAgICAgICc8bGk+PGEgY2xhc3M9XCJ0YWJsZS1wYW5lbC1wYWdlLWxpbmsgcG9pbnRlciAnICsgYWN0aXZlQ2xhc3MgKyAnXCI+JyArIChpICsgMSkgKyAnPC9hPjwvbGk+J1xuICAgICAgICApO1xuICAgICAgICBwYWdpbmF0aW9uTGlzdC5hcHBlbmQocGFnZUxpbmtFbGVtKTtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyRWxlbS5hcHBlbmQocGFnaW5hdGlvbkxpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclBhbmVsKCkge1xuICAgICAgY29uc3QgcGFuZWxFbGVtID0gZWxlbS5wYXJlbnRzKCcucGFuZWwtY29udGVudCcpO1xuICAgICAgY29uc3Qgcm9vdEVsZW0gPSBlbGVtLmZpbmQoJy50YWJsZS1wYW5lbC1zY3JvbGwnKTtcbiAgICAgIGNvbnN0IHRib2R5RWxlbSA9IGVsZW0uZmluZCgndGJvZHknKTtcbiAgICAgIGNvbnN0IGZvb3RlckVsZW0gPSBlbGVtLmZpbmQoJy50YWJsZS1wYW5lbC1mb290ZXInKTtcblxuICAgICAgZWxlbS5jc3MoeyAnZm9udC1zaXplJzogcGFuZWwuZm9udFNpemUgfSk7XG4gICAgICBwYW5lbEVsZW0uYWRkQ2xhc3MoJ3RhYmxlLXBhbmVsLWNvbnRlbnQnKTtcblxuICAgICAgYXBwZW5kVGFibGVSb3dzKHRib2R5RWxlbSk7XG4gICAgICBhcHBlbmRQYWdpbmF0aW9uQ29udHJvbHMoZm9vdGVyRWxlbSk7XG5cbiAgICAgIHJvb3RFbGVtLmNzcyh7ICdtYXgtaGVpZ2h0JzogZ2V0VGFibGVIZWlnaHQoKSB9KTtcbiAgICB9XG5cbiAgICAvLyBob29rIHVwIGxpbmsgdG9vbHRpcHNcbiAgICBlbGVtLnRvb2x0aXAoe1xuICAgICAgc2VsZWN0b3I6ICdbZGF0YS1saW5rLXRvb2x0aXBdJyxcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFkZEZpbHRlckNsaWNrZWQoZTogYW55KSB7XG4gICAgICBjb25zdCBmaWx0ZXJEYXRhID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoKTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGFzb3VyY2U6IHBhbmVsLmRhdGFzb3VyY2UsXG4gICAgICAgIGtleTogZGF0YS5jb2x1bW5zW2ZpbHRlckRhdGEuY29sdW1uXS50ZXh0LFxuICAgICAgICB2YWx1ZTogZGF0YS5yb3dzW2ZpbHRlckRhdGEucm93XVtmaWx0ZXJEYXRhLmNvbHVtbl0sXG4gICAgICAgIG9wZXJhdG9yOiBmaWx0ZXJEYXRhLm9wZXJhdG9yLFxuICAgICAgfTtcblxuICAgICAgZGlzcGF0Y2goYXBwbHlGaWx0ZXJGcm9tVGFibGUob3B0aW9ucykpO1xuICAgIH1cblxuICAgIGVsZW0ub24oJ2NsaWNrJywgJy50YWJsZS1wYW5lbC1wYWdlLWxpbmsnLCBzd2l0Y2hQYWdlKTtcbiAgICBlbGVtLm9uKCdjbGljaycsICcudGFibGUtcGFuZWwtZmlsdGVyLWxpbmsnLCBhZGRGaWx0ZXJDbGlja2VkKTtcblxuICAgIGNvbnN0IHVuYmluZERlc3Ryb3kgPSBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xuICAgICAgZWxlbS5vZmYoJ2NsaWNrJywgJy50YWJsZS1wYW5lbC1wYWdlLWxpbmsnKTtcbiAgICAgIGVsZW0ub2ZmKCdjbGljaycsICcudGFibGUtcGFuZWwtZmlsdGVyLWxpbmsnKTtcbiAgICAgIHVuYmluZERlc3Ryb3koKTtcbiAgICB9KTtcblxuICAgIGN0cmwuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLnJlbmRlciwgKHJlbmRlckRhdGE6IGFueSkgPT4ge1xuICAgICAgZGF0YSA9IHJlbmRlckRhdGEgfHwgZGF0YTtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJlbmRlclBhbmVsKCk7XG4gICAgICB9XG4gICAgICBjdHJsLnJlbmRlcmluZ0NvbXBsZXRlZCgpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgUGFuZWxQbHVnaW4obnVsbCBhcyB1bmtub3duIGFzIENvbXBvbmVudFR5cGU8UGFuZWxQcm9wczxhbnk+Pik7XG5wbHVnaW4uYW5ndWxhclBhbmVsQ3RybCA9IFRhYmxlUGFuZWxDdHJsO1xucGx1Z2luLnNldE5vUGFkZGluZygpO1xuIiwiaW1wb3J0IHsgZmluZCwgZmlyc3QsIGlzQXJyYXksIGlzU3RyaW5nLCBlc2NhcGUgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuICBlc2NhcGVTdHJpbmdGb3JSZWdleCxcbiAgZm9ybWF0dGVkVmFsdWVUb1N0cmluZyxcbiAgZ2V0VmFsdWVGb3JtYXQsXG4gIFNjb3BlZFZhcnMsXG4gIHN0cmluZ1N0YXJ0c0FzUmVnRXgsXG4gIHN0cmluZ1RvSnNSZWdleCxcbiAgdGV4dFV0aWwsXG4gIHVuRXNjYXBlU3RyaW5nRnJvbVJlZ2V4LFxuICBUaW1lWm9uZSxcbiAgZGF0ZVRpbWVGb3JtYXRJU08sXG4gIGRhdGVUaW1lRm9ybWF0LFxuICBHcmFmYW5hVGhlbWUsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IENvbHVtbk9wdGlvbnNDdHJsIH0gZnJvbSAnLi9jb2x1bW5fb3B0aW9ucyc7XG5pbXBvcnQgeyBDb2x1bW5SZW5kZXIsIFRhYmxlUmVuZGVyTW9kZWwsIENvbHVtblN0eWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVJlbmRlcmVyIHtcbiAgZm9ybWF0dGVyczogYW55W10gPSBbXTtcbiAgY29sb3JTdGF0ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFuZWw6IHsgc3R5bGVzOiBDb2x1bW5TdHlsZVtdOyBwYWdlU2l6ZTogbnVtYmVyIH0sXG4gICAgcHJpdmF0ZSB0YWJsZTogVGFibGVSZW5kZXJNb2RlbCxcbiAgICBwcml2YXRlIHRpbWVab25lOiBUaW1lWm9uZSxcbiAgICBwcml2YXRlIHNhbml0aXplOiAodjogYW55KSA9PiBhbnksXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpLFxuICAgIHByaXZhdGUgdGhlbWU6IEdyYWZhbmFUaGVtZVxuICApIHtcbiAgICB0aGlzLmluaXRDb2x1bW5zKCk7XG4gIH1cblxuICBzZXRUYWJsZSh0YWJsZTogVGFibGVSZW5kZXJNb2RlbCkge1xuICAgIHRoaXMudGFibGUgPSB0YWJsZTtcblxuICAgIHRoaXMuaW5pdENvbHVtbnMoKTtcbiAgfVxuXG4gIGluaXRDb2x1bW5zKCkge1xuICAgIHRoaXMuZm9ybWF0dGVycyA9IFtdO1xuICAgIHRoaXMuY29sb3JTdGF0ZSA9IHt9O1xuXG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHRoaXMudGFibGUuY29sdW1ucy5sZW5ndGg7IGNvbEluZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMudGFibGUuY29sdW1uc1tjb2xJbmRleF07XG4gICAgICBjb2x1bW4udGl0bGUgPSBjb2x1bW4udGV4dDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhbmVsLnN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMucGFuZWwuc3R5bGVzW2ldO1xuXG4gICAgICAgIGNvbnN0IGVzY2FwZWRQYXR0ZXJuID0gc3RyaW5nU3RhcnRzQXNSZWdFeChzdHlsZS5wYXR0ZXJuKVxuICAgICAgICAgID8gc3R5bGUucGF0dGVyblxuICAgICAgICAgIDogZXNjYXBlU3RyaW5nRm9yUmVnZXgodW5Fc2NhcGVTdHJpbmdGcm9tUmVnZXgoc3R5bGUucGF0dGVybikpO1xuICAgICAgICBjb25zdCByZWdleCA9IHN0cmluZ1RvSnNSZWdleChlc2NhcGVkUGF0dGVybik7XG4gICAgICAgIGlmIChjb2x1bW4udGV4dC5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICBjb2x1bW4uc3R5bGUgPSBzdHlsZTtcblxuICAgICAgICAgIGlmIChzdHlsZS5hbGlhcykge1xuICAgICAgICAgICAgY29sdW1uLnRpdGxlID0gdGV4dFV0aWwuZXNjYXBlSHRtbChjb2x1bW4udGV4dC5yZXBsYWNlKHJlZ2V4LCBzdHlsZS5hbGlhcykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9ybWF0dGVyc1tjb2xJbmRleF0gPSB0aGlzLmNyZWF0ZUNvbHVtbkZvcm1hdHRlcihjb2x1bW4pO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbG9yRm9yVmFsdWUodmFsdWU6IG51bWJlciwgc3R5bGU6IENvbHVtblN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS50aHJlc2hvbGRzIHx8ICFzdHlsZS5jb2xvcnMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gc3R5bGUudGhyZXNob2xkcy5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGlmICh2YWx1ZSA+PSBzdHlsZS50aHJlc2hvbGRzW2kgLSAxXSkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVtZS52aXN1YWxpemF0aW9uLmdldENvbG9yQnlOYW1lKHN0eWxlLmNvbG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRoZW1lLnZpc3VhbGl6YXRpb24uZ2V0Q29sb3JCeU5hbWUoZmlyc3Qoc3R5bGUuY29sb3JzKSk7XG4gIH1cblxuICBkZWZhdWx0Q2VsbEZvcm1hdHRlcih2OiBhbnksIHN0eWxlOiBDb2x1bW5TdHlsZSkge1xuICAgIGlmICh2ID09PSBudWxsIHx8IHYgPT09IHZvaWQgMCB8fCB2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgdiA9IHYuam9pbignLCAnKTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUgJiYgc3R5bGUuc2FuaXRpemUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXNjYXBlKHYpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNvbHVtbkZvcm1hdHRlcihjb2x1bW46IENvbHVtblJlbmRlcikge1xuICAgIGlmICghY29sdW1uLnN0eWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q2VsbEZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnN0eWxlLnR5cGUgPT09ICdoaWRkZW4nKSB7XG4gICAgICByZXR1cm4gKHY6IGFueSk6IHVuZGVmaW5lZCA9PiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zdHlsZS50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgIHJldHVybiAodjogYW55KSA9PiB7XG4gICAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAnLSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHYgPSB2WzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXMgYW4gZXBvY2ggKG51bWVyaWMgc3RyaW5nIGFuZCBsZW4gPiAxMilcbiAgICAgICAgaWYgKGlzU3RyaW5nKHYpICYmICFpc05hTih2IGFzIGFueSkgJiYgdi5sZW5ndGggPiAxMikge1xuICAgICAgICAgIHYgPSBwYXJzZUludCh2LCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbHVtbi5zdHlsZS5kYXRlRm9ybWF0KSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0SVNPKHYsIHtcbiAgICAgICAgICAgIHRpbWVab25lOiB0aGlzLnRpbWVab25lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0KHYsIHtcbiAgICAgICAgICBmb3JtYXQ6IGNvbHVtbi5zdHlsZS5kYXRlRm9ybWF0LFxuICAgICAgICAgIHRpbWVab25lOiB0aGlzLnRpbWVab25lLFxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zdHlsZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICh2OiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHYgPSB2LmpvaW4oJywgJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXBwaW5nVHlwZSA9IGNvbHVtbi5zdHlsZS5tYXBwaW5nVHlwZSB8fCAwO1xuXG4gICAgICAgIGlmIChtYXBwaW5nVHlwZSA9PT0gMSAmJiBjb2x1bW4uc3R5bGUudmFsdWVNYXBzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW4uc3R5bGUudmFsdWVNYXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtYXAgPSBjb2x1bW4uc3R5bGUudmFsdWVNYXBzW2ldO1xuXG4gICAgICAgICAgICBpZiAodiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAobWFwLnZhbHVlID09PSAnbnVsbCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwLnRleHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFsbG93IGJvdGggbnVtZXJpYyBhbmQgc3RyaW5nIHZhbHVlcyB0byBiZSBtYXBwZWRcbiAgICAgICAgICAgIGlmICgoIWlzU3RyaW5nKHYpICYmIE51bWJlcihtYXAudmFsdWUpID09PSBOdW1iZXIodikpIHx8IG1hcC52YWx1ZSA9PT0gdikge1xuICAgICAgICAgICAgICB0aGlzLnNldENvbG9yU3RhdGUodiwgY29sdW1uLnN0eWxlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENlbGxGb3JtYXR0ZXIobWFwLnRleHQsIGNvbHVtbi5zdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hcHBpbmdUeXBlID09PSAyICYmIGNvbHVtbi5zdHlsZS5yYW5nZU1hcHMpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbi5zdHlsZS5yYW5nZU1hcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IGNvbHVtbi5zdHlsZS5yYW5nZU1hcHNbaV07XG5cbiAgICAgICAgICAgIGlmICh2ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChtYXAuZnJvbSA9PT0gJ251bGwnICYmIG1hcC50byA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcC50ZXh0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKG1hcC5mcm9tKSA8PSBOdW1iZXIodikgJiYgTnVtYmVyKG1hcC50bykgPj0gTnVtYmVyKHYpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0Q29sb3JTdGF0ZSh2LCBjb2x1bW4uc3R5bGUpO1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q2VsbEZvcm1hdHRlcihtYXAudGV4dCwgY29sdW1uLnN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodiA9PT0gbnVsbCB8fCB2ID09PSB2b2lkIDApIHtcbiAgICAgICAgICByZXR1cm4gJy0nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRDb2xvclN0YXRlKHYsIGNvbHVtbi5zdHlsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDZWxsRm9ybWF0dGVyKHYsIGNvbHVtbi5zdHlsZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uc3R5bGUudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IHZhbHVlRm9ybWF0dGVyID0gZ2V0VmFsdWVGb3JtYXQoY29sdW1uLnVuaXQgfHwgY29sdW1uLnN0eWxlLnVuaXQpO1xuXG4gICAgICByZXR1cm4gKHY6IGFueSk6IGFueSA9PiB7XG4gICAgICAgIGlmICh2ID09PSBudWxsIHx8IHYgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHJldHVybiAnLSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOYU4odikgfHwgaXNBcnJheSh2KSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDZWxsRm9ybWF0dGVyKHYsIGNvbHVtbi5zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldENvbG9yU3RhdGUodiwgY29sdW1uLnN0eWxlKTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlVG9TdHJpbmcodmFsdWVGb3JtYXR0ZXIodiwgY29sdW1uLnN0eWxlLmRlY2ltYWxzLCBudWxsKSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENlbGxGb3JtYXR0ZXIodmFsdWUsIGNvbHVtbi5zdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHNldENvbG9yU3RhdGUodmFsdWU6IGFueSwgc3R5bGU6IENvbHVtblN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5jb2xvck1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCB8fCBpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKGlzTmFOKG51bWVyaWNWYWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG9yU3RhdGVbc3R5bGUuY29sb3JNb2RlXSA9IHRoaXMuZ2V0Q29sb3JGb3JWYWx1ZShudW1lcmljVmFsdWUsIHN0eWxlKTtcbiAgfVxuXG4gIHJlbmRlclJvd1ZhcmlhYmxlcyhyb3dJbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2NvcGVkVmFyczogU2NvcGVkVmFycyA9IHt9O1xuICAgIGxldCBjZWxsVmFyaWFibGU7XG4gICAgY29uc3Qgcm93ID0gdGhpcy50YWJsZS5yb3dzW3Jvd0luZGV4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xuICAgICAgY2VsbFZhcmlhYmxlID0gYF9fY2VsbF8ke2l9YDtcbiAgICAgIHNjb3BlZFZhcnNbY2VsbFZhcmlhYmxlXSA9IHsgdmFsdWU6IHJvd1tpXSwgdGV4dDogcm93W2ldID8gcm93W2ldLnRvU3RyaW5nKCkgOiAnJyB9O1xuICAgIH1cbiAgICByZXR1cm4gc2NvcGVkVmFycztcbiAgfVxuXG4gIGZvcm1hdENvbHVtblZhbHVlKGNvbEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBmbXQgPSB0aGlzLmZvcm1hdHRlcnNbY29sSW5kZXhdO1xuICAgIGlmIChmbXQpIHtcbiAgICAgIHJldHVybiBmbXQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZW5kZXJDZWxsKGNvbHVtbkluZGV4OiBudW1iZXIsIHJvd0luZGV4OiBudW1iZXIsIHZhbHVlOiBhbnksIGFkZFdpZHRoSGFjayA9IGZhbHNlKSB7XG4gICAgdmFsdWUgPSB0aGlzLmZvcm1hdENvbHVtblZhbHVlKGNvbHVtbkluZGV4LCB2YWx1ZSk7XG5cbiAgICBjb25zdCBjb2x1bW4gPSB0aGlzLnRhYmxlLmNvbHVtbnNbY29sdW1uSW5kZXhdO1xuICAgIGNvbnN0IGNlbGxTdHlsZXMgPSBbXTtcbiAgICBsZXQgY2VsbFN0eWxlID0gJyc7XG4gICAgY29uc3QgY2VsbENsYXNzZXMgPSBbXTtcbiAgICBsZXQgY2VsbENsYXNzID0gJyc7XG5cbiAgICBpZiAodGhpcy5jb2xvclN0YXRlLmNlbGwpIHtcbiAgICAgIGNlbGxTdHlsZXMucHVzaCgnYmFja2dyb3VuZC1jb2xvcjonICsgdGhpcy5jb2xvclN0YXRlLmNlbGwpO1xuICAgICAgY2VsbENsYXNzZXMucHVzaCgndGFibGUtcGFuZWwtY29sb3ItY2VsbCcpO1xuICAgICAgdGhpcy5jb2xvclN0YXRlLmNlbGwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb2xvclN0YXRlLnZhbHVlKSB7XG4gICAgICBjZWxsU3R5bGVzLnB1c2goJ2NvbG9yOicgKyB0aGlzLmNvbG9yU3RhdGUudmFsdWUpO1xuICAgICAgdGhpcy5jb2xvclN0YXRlLnZhbHVlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gYmVjYXVzZSBvZiB0aGUgZml4ZWQgdGFibGUgaGVhZGVycyBjc3Mgb25seSBzb2x1dGlvblxuICAgIC8vIHRoZXJlIGlzIGFuIGlzc3VlIGlmIGhlYWRlciBjZWxsIGlzIHdpZGVyIHRoZSBjZWxsXG4gICAgLy8gdGhpcyBoYWNrIGFkZHMgaGVhZGVyIGNvbnRlbnQgdG8gY2VsbCAobm90IHZpc2libGUpXG4gICAgbGV0IGNvbHVtbkh0bWwgPSAnJztcbiAgICBpZiAoYWRkV2lkdGhIYWNrKSB7XG4gICAgICBjb2x1bW5IdG1sID0gJzxkaXYgY2xhc3M9XCJ0YWJsZS1wYW5lbC13aWR0aC1oYWNrXCI+JyArIHRoaXMudGFibGUuY29sdW1uc1tjb2x1bW5JbmRleF0udGl0bGUgKyAnPC9kaXY+JztcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2VsbFN0eWxlcy5wdXNoKCdkaXNwbGF5Om5vbmUnKTtcbiAgICAgIGNvbHVtbi5oaWRkZW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW4uaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5oaWRkZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnN0eWxlICYmIGNvbHVtbi5zdHlsZS5wcmVzZXJ2ZUZvcm1hdCkge1xuICAgICAgY2VsbENsYXNzZXMucHVzaCgndGFibGUtcGFuZWwtY2VsbC1wcmUnKTtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnN0eWxlICYmIGNvbHVtbi5zdHlsZS5hbGlnbikge1xuICAgICAgY29uc3QgdGV4dEFsaWduID0gZmluZChDb2x1bW5PcHRpb25zQ3RybC5hbGlnblR5cGVzRW51bSwgWyd0ZXh0JywgY29sdW1uLnN0eWxlLmFsaWduXSk7XG4gICAgICBpZiAodGV4dEFsaWduICYmIHRleHRBbGlnblsndmFsdWUnXSkge1xuICAgICAgICBjZWxsU3R5bGVzLnB1c2goYHRleHQtYWxpZ246JHt0ZXh0QWxpZ25bJ3ZhbHVlJ119YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNlbGxTdHlsZXMubGVuZ3RoKSB7XG4gICAgICBjZWxsU3R5bGUgPSAnIHN0eWxlPVwiJyArIGNlbGxTdHlsZXMuam9pbignOycpICsgJ1wiJztcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnN0eWxlICYmIGNvbHVtbi5zdHlsZS5saW5rKSB7XG4gICAgICAvLyBSZW5kZXIgY2VsbCBhcyBsaW5rXG4gICAgICBjb25zdCBzY29wZWRWYXJzID0gdGhpcy5yZW5kZXJSb3dWYXJpYWJsZXMocm93SW5kZXgpO1xuICAgICAgc2NvcGVkVmFyc1snX19jZWxsJ10gPSB7IHZhbHVlOiB2YWx1ZSwgdGV4dDogdmFsdWUgPyB2YWx1ZS50b1N0cmluZygpIDogJycgfTtcblxuICAgICAgY29uc3QgY2VsbExpbmsgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoY29sdW1uLnN0eWxlLmxpbmtVcmwsIHNjb3BlZFZhcnMsIGVuY29kZVVSSUNvbXBvbmVudCk7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRDZWxsTGluayA9IHRleHRVdGlsLnNhbml0aXplVXJsKGNlbGxMaW5rKTtcblxuICAgICAgY29uc3QgY2VsbExpbmtUb29sdGlwID0gdGV4dFV0aWwuZXNjYXBlSHRtbCh0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoY29sdW1uLnN0eWxlLmxpbmtUb29sdGlwLCBzY29wZWRWYXJzKSk7XG4gICAgICBjb25zdCBjZWxsVGFyZ2V0ID0gY29sdW1uLnN0eWxlLmxpbmtUYXJnZXRCbGFuayA/ICdfYmxhbmsnIDogJyc7XG5cbiAgICAgIGNlbGxDbGFzc2VzLnB1c2goJ3RhYmxlLXBhbmVsLWNlbGwtbGluaycpO1xuXG4gICAgICBjb2x1bW5IdG1sICs9IGA8YSBocmVmPVwiJHtzYW5pdGl6ZWRDZWxsTGlua31cIiB0YXJnZXQ9XCIke2NlbGxUYXJnZXR9XCIgZGF0YS1saW5rLXRvb2x0aXAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIiR7Y2VsbExpbmtUb29sdGlwfVwiIGRhdGEtcGxhY2VtZW50PVwicmlnaHRcIiR7Y2VsbFN0eWxlfT5gO1xuICAgICAgY29sdW1uSHRtbCArPSBgJHt2YWx1ZX1gO1xuICAgICAgY29sdW1uSHRtbCArPSBgPC9hPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbkh0bWwgKz0gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlKSB7XG4gICAgICBjZWxsQ2xhc3Nlcy5wdXNoKCd0YWJsZS1wYW5lbC1jZWxsLWZpbHRlcmFibGUnKTtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDxhIGNsYXNzPVwidGFibGUtcGFuZWwtZmlsdGVyLWxpbmtcIiBkYXRhLWxpbmstdG9vbHRpcCBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiRmlsdGVyIG91dCB2YWx1ZVwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiIGRhdGEtY29sdW1uPVwiJHtjb2x1bW5JbmRleH1cIiBkYXRhLW9wZXJhdG9yPVwiIT1cIj5gO1xuICAgICAgY29sdW1uSHRtbCArPSBgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtbWludXNcIj48L2k+YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDwvYT5gO1xuICAgICAgY29sdW1uSHRtbCArPSBgPGEgY2xhc3M9XCJ0YWJsZS1wYW5lbC1maWx0ZXItbGlua1wiIGRhdGEtbGluay10b29sdGlwIGRhdGEtb3JpZ2luYWwtdGl0bGU9XCJGaWx0ZXIgZm9yIHZhbHVlXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICBkYXRhLXJvdz1cIiR7cm93SW5kZXh9XCIgZGF0YS1jb2x1bW49XCIke2NvbHVtbkluZGV4fVwiIGRhdGEtb3BlcmF0b3I9XCI9XCI+YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLXBsdXNcIj48L2k+YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDwvYT5gO1xuICAgIH1cblxuICAgIGlmIChjZWxsQ2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIGNlbGxDbGFzcyA9ICcgY2xhc3M9XCInICsgY2VsbENsYXNzZXMuam9pbignICcpICsgJ1wiJztcbiAgICB9XG5cbiAgICBjb2x1bW5IdG1sID0gJzx0ZCcgKyBjZWxsQ2xhc3MgKyBjZWxsU3R5bGUgKyAnPicgKyBjb2x1bW5IdG1sICsgJzwvdGQ+JztcbiAgICByZXR1cm4gY29sdW1uSHRtbDtcbiAgfVxuXG4gIHJlbmRlcihwYWdlOiBudW1iZXIpIHtcbiAgICBjb25zdCBwYWdlU2l6ZSA9IHRoaXMucGFuZWwucGFnZVNpemUgfHwgMTAwO1xuICAgIGNvbnN0IHN0YXJ0UG9zID0gcGFnZSAqIHBhZ2VTaXplO1xuICAgIGNvbnN0IGVuZFBvcyA9IE1hdGgubWluKHN0YXJ0UG9zICsgcGFnZVNpemUsIHRoaXMudGFibGUucm93cy5sZW5ndGgpO1xuICAgIGxldCBodG1sID0gJyc7XG5cbiAgICBmb3IgKGxldCB5ID0gc3RhcnRQb3M7IHkgPCBlbmRQb3M7IHkrKykge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy50YWJsZS5yb3dzW3ldO1xuICAgICAgbGV0IGNlbGxIdG1sID0gJyc7XG4gICAgICBsZXQgcm93U3R5bGUgPSAnJztcbiAgICAgIGNvbnN0IHJvd0NsYXNzZXMgPSBbXTtcbiAgICAgIGxldCByb3dDbGFzcyA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2VsbEh0bWwgKz0gdGhpcy5yZW5kZXJDZWxsKGksIHksIHJvd1tpXSwgeSA9PT0gc3RhcnRQb3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jb2xvclN0YXRlLnJvdykge1xuICAgICAgICByb3dTdHlsZSA9ICcgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicgKyB0aGlzLmNvbG9yU3RhdGUucm93ICsgJ1wiJztcbiAgICAgICAgcm93Q2xhc3Nlcy5wdXNoKCd0YWJsZS1wYW5lbC1jb2xvci1yb3cnKTtcbiAgICAgICAgdGhpcy5jb2xvclN0YXRlLnJvdyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3dDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICByb3dDbGFzcyA9ICcgY2xhc3M9XCInICsgcm93Q2xhc3Nlcy5qb2luKCcgJykgKyAnXCInO1xuICAgICAgfVxuXG4gICAgICBodG1sICs9ICc8dHIgJyArIHJvd0NsYXNzICsgcm93U3R5bGUgKyAnPicgKyBjZWxsSHRtbCArICc8L3RyPic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICByZW5kZXJfdmFsdWVzKCkge1xuICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICBjb25zdCB2aXNpYmxlQ29sdW1ucyA9IHRoaXMudGFibGUuY29sdW1ucy5maWx0ZXIoKGNvbHVtbikgPT4gIWNvbHVtbi5oaWRkZW4pO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnRhYmxlLnJvd3MubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMudGFibGUucm93c1t5XTtcbiAgICAgIGNvbnN0IG5ld1JvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYmxlLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhYmxlLmNvbHVtbnNbaV0uaGlkZGVuKSB7XG4gICAgICAgICAgbmV3Um93LnB1c2godGhpcy5mb3JtYXRDb2x1bW5WYWx1ZShpLCByb3dbaV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcm93cy5wdXNoKG5ld1Jvdyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiB2aXNpYmxlQ29sdW1ucyxcbiAgICAgIHJvd3M6IHJvd3MsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZmluZEluZGV4LCBpc09iamVjdCwgbWFwIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQ29sdW1uLCBUYWJsZURhdGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCBUYWJsZU1vZGVsLCB7IG1lcmdlVGFibGVzSW50b01vZGVsIH0gZnJvbSAnYXBwL2NvcmUvdGFibGVfbW9kZWwnO1xuaW1wb3J0IFRpbWVTZXJpZXMgZnJvbSAnYXBwL2NvcmUvdGltZV9zZXJpZXMyJztcbmltcG9ydCBmbGF0dGVuIGZyb20gJ2FwcC9jb3JlL3V0aWxzL2ZsYXR0ZW4nO1xuXG5pbXBvcnQgeyBUYWJsZVRyYW5zZm9ybSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCB0cmFuc2Zvcm1lcnM6IHsgW2tleTogc3RyaW5nXTogVGFibGVUcmFuc2Zvcm0gfSA9IHt9O1xuZXhwb3J0IGNvbnN0IHRpbWVTZXJpZXNGb3JtYXRGaWx0ZXJlciA9IChkYXRhOiBhbnkpOiBhbnlbXSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHJldHVybiBkYXRhLmRhdGFwb2ludHMgPyBbZGF0YV0gOiBbXTtcbiAgfVxuXG4gIHJldHVybiBkYXRhLnJlZHVjZSgoYWNjLCBzZXJpZXMpID0+IHtcbiAgICBpZiAoIXNlcmllcy5kYXRhcG9pbnRzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIHJldHVybiBhY2MuY29uY2F0KHNlcmllcyk7XG4gIH0sIFtdKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0YWJsZURhdGFGb3JtYXRGaWx0ZXJlciA9IChkYXRhOiBhbnkpOiBhbnlbXSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHJldHVybiBkYXRhLmNvbHVtbnMgPyBbZGF0YV0gOiBbXTtcbiAgfVxuXG4gIHJldHVybiBkYXRhLnJlZHVjZSgoYWNjLCBzZXJpZXMpID0+IHtcbiAgICBpZiAoIXNlcmllcy5jb2x1bW5zKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIHJldHVybiBhY2MuY29uY2F0KHNlcmllcyk7XG4gIH0sIFtdKTtcbn07XG5cbnRyYW5zZm9ybWVyc1sndGltZXNlcmllc190b19yb3dzJ10gPSB7XG4gIGRlc2NyaXB0aW9uOiAnVGltZSBzZXJpZXMgdG8gcm93cycsXG4gIGdldENvbHVtbnM6ICgpID0+IHtcbiAgICByZXR1cm4gW107XG4gIH0sXG4gIHRyYW5zZm9ybTogKGRhdGEsIHBhbmVsLCBtb2RlbCkgPT4ge1xuICAgIG1vZGVsLmNvbHVtbnMgPSBbeyB0ZXh0OiAnVGltZScsIHR5cGU6ICdkYXRlJyB9LCB7IHRleHQ6ICdNZXRyaWMnIH0sIHsgdGV4dDogJ1ZhbHVlJyB9XTtcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aW1lU2VyaWVzRm9ybWF0RmlsdGVyZXIoZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2VyaWVzID0gZmlsdGVyZWREYXRhW2ldO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzZXJpZXMuZGF0YXBvaW50cy5sZW5ndGg7IHkrKykge1xuICAgICAgICBjb25zdCBkcCA9IHNlcmllcy5kYXRhcG9pbnRzW3ldO1xuICAgICAgICBtb2RlbC5yb3dzLnB1c2goW2RwWzFdLCBzZXJpZXMudGFyZ2V0LCBkcFswXV0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cbnRyYW5zZm9ybWVyc1sndGltZXNlcmllc190b19jb2x1bW5zJ10gPSB7XG4gIGRlc2NyaXB0aW9uOiAnVGltZSBzZXJpZXMgdG8gY29sdW1ucycsXG4gIGdldENvbHVtbnM6ICgpID0+IHtcbiAgICByZXR1cm4gW107XG4gIH0sXG4gIHRyYW5zZm9ybTogKGRhdGEsIHBhbmVsLCBtb2RlbCkgPT4ge1xuICAgIG1vZGVsLmNvbHVtbnMucHVzaCh7IHRleHQ6ICdUaW1lJywgdHlwZTogJ2RhdGUnIH0pO1xuXG4gICAgLy8gZ3JvdXAgYnkgdGltZVxuICAgIGNvbnN0IHBvaW50czogYW55ID0ge307XG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGltZVNlcmllc0Zvcm1hdEZpbHRlcmVyKGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNlcmllcyA9IGZpbHRlcmVkRGF0YVtpXTtcbiAgICAgIG1vZGVsLmNvbHVtbnMucHVzaCh7IHRleHQ6IHNlcmllcy50YXJnZXQgfSk7XG5cbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2VyaWVzLmRhdGFwb2ludHMubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgY29uc3QgZHAgPSBzZXJpZXMuZGF0YXBvaW50c1t5XTtcbiAgICAgICAgY29uc3QgdGltZUtleSA9IGRwWzFdLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgaWYgKCFwb2ludHNbdGltZUtleV0pIHtcbiAgICAgICAgICBwb2ludHNbdGltZUtleV0gPSB7IHRpbWU6IGRwWzFdIH07XG4gICAgICAgICAgcG9pbnRzW3RpbWVLZXldW2ldID0gZHBbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcG9pbnRzW3RpbWVLZXldW2ldID0gZHBbMF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRpbWUgaW4gcG9pbnRzKSB7XG4gICAgICBjb25zdCBwb2ludCA9IHBvaW50c1t0aW1lXTtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFtwb2ludC50aW1lXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwb2ludFtpXTtcbiAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBtb2RlbC5yb3dzLnB1c2godmFsdWVzKTtcbiAgICB9XG4gIH0sXG59O1xuXG50cmFuc2Zvcm1lcnNbJ3RpbWVzZXJpZXNfYWdncmVnYXRpb25zJ10gPSB7XG4gIGRlc2NyaXB0aW9uOiAnVGltZSBzZXJpZXMgYWdncmVnYXRpb25zJyxcbiAgZ2V0Q29sdW1uczogKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7IHRleHQ6ICdBdmcnLCB2YWx1ZTogJ2F2ZycgfSxcbiAgICAgIHsgdGV4dDogJ01pbicsIHZhbHVlOiAnbWluJyB9LFxuICAgICAgeyB0ZXh0OiAnTWF4JywgdmFsdWU6ICdtYXgnIH0sXG4gICAgICB7IHRleHQ6ICdUb3RhbCcsIHZhbHVlOiAndG90YWwnIH0sXG4gICAgICB7IHRleHQ6ICdDdXJyZW50JywgdmFsdWU6ICdjdXJyZW50JyB9LFxuICAgICAgeyB0ZXh0OiAnQ291bnQnLCB2YWx1ZTogJ2NvdW50JyB9LFxuICAgIF07XG4gIH0sXG4gIHRyYW5zZm9ybTogKGRhdGEsIHBhbmVsLCBtb2RlbCkgPT4ge1xuICAgIGxldCBpLCB5O1xuICAgIG1vZGVsLmNvbHVtbnMucHVzaCh7IHRleHQ6ICdNZXRyaWMnIH0pO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHBhbmVsLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG1vZGVsLmNvbHVtbnMucHVzaCh7IHRleHQ6IHBhbmVsLmNvbHVtbnNbaV0udGV4dCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aW1lU2VyaWVzRm9ybWF0RmlsdGVyZXIoZGF0YSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZmlsdGVyZWREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzZXJpZXMgPSBuZXcgVGltZVNlcmllcyh7XG4gICAgICAgIGRhdGFwb2ludHM6IGZpbHRlcmVkRGF0YVtpXS5kYXRhcG9pbnRzLFxuICAgICAgICBhbGlhczogZmlsdGVyZWREYXRhW2ldLnRhcmdldCxcbiAgICAgIH0pO1xuXG4gICAgICBzZXJpZXMuZ2V0RmxvdFBhaXJzKCdjb25uZWN0ZWQnKTtcbiAgICAgIGNvbnN0IGNlbGxzID0gW3Nlcmllcy5hbGlhc107XG5cbiAgICAgIGZvciAoeSA9IDA7IHkgPCBwYW5lbC5jb2x1bW5zLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGNlbGxzLnB1c2goc2VyaWVzLnN0YXRzW3BhbmVsLmNvbHVtbnNbeV0udmFsdWVdKTtcbiAgICAgIH1cblxuICAgICAgbW9kZWwucm93cy5wdXNoKGNlbGxzKTtcbiAgICB9XG4gIH0sXG59O1xuXG50cmFuc2Zvcm1lcnNbJ2Fubm90YXRpb25zJ10gPSB7XG4gIGRlc2NyaXB0aW9uOiAnQW5ub3RhdGlvbnMnLFxuICBnZXRDb2x1bW5zOiAoKSA9PiB7XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuICB0cmFuc2Zvcm06IChkYXRhLCBwYW5lbCwgbW9kZWwpID0+IHtcbiAgICBtb2RlbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiAnVGltZScsIHR5cGU6ICdkYXRlJyB9KTtcbiAgICBtb2RlbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiAnVGl0bGUnIH0pO1xuICAgIG1vZGVsLmNvbHVtbnMucHVzaCh7IHRleHQ6ICdUZXh0JyB9KTtcbiAgICBtb2RlbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiAnVGFncycgfSk7XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEuYW5ub3RhdGlvbnMgfHwgZGF0YS5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuYW5ub3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGV2dCA9IGRhdGEuYW5ub3RhdGlvbnNbaV07XG4gICAgICBtb2RlbC5yb3dzLnB1c2goW2V2dC50aW1lLCBldnQudGl0bGUsIGV2dC50ZXh0LCBldnQudGFnc10pO1xuICAgIH1cbiAgfSxcbn07XG5cbnRyYW5zZm9ybWVyc1sndGFibGUnXSA9IHtcbiAgZGVzY3JpcHRpb246ICdUYWJsZScsXG4gIGdldENvbHVtbnM6IChkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLy8gU2luZ2xlIHF1ZXJ5IHJldHVybnMgZGF0YSBjb2x1bW5zIGFzIGlzXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gWy4uLmRhdGFbMF0uY29sdW1uc107XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGFibGVEYXRhRm9ybWF0RmlsdGVyZXIoZGF0YSk7XG5cbiAgICAvLyBUcmFjayBjb2x1bW4gaW5kZXhlczogbmFtZSAtPiBpbmRleFxuICAgIGNvbnN0IGNvbHVtbk5hbWVzOiBhbnkgPSB7fTtcblxuICAgIC8vIFVuaW9uIG9mIGFsbCBjb2x1bW5zXG4gICAgY29uc3QgY29sdW1ucyA9IGZpbHRlcmVkRGF0YS5yZWR1Y2UoKGFjYzogQ29sdW1uW10sIHNlcmllczogVGFibGVEYXRhKSA9PiB7XG4gICAgICBzZXJpZXMuY29sdW1ucy5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgY29uc3QgeyB0ZXh0IH0gPSBjb2w7XG4gICAgICAgIGlmIChjb2x1bW5OYW1lc1t0ZXh0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29sdW1uTmFtZXNbdGV4dF0gPSBhY2MubGVuZ3RoO1xuICAgICAgICAgIGFjYy5wdXNoKGNvbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfSxcbiAgdHJhbnNmb3JtOiAoZGF0YTogYW55W10sIHBhbmVsLCBtb2RlbCkgPT4ge1xuICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0YWJsZURhdGFGb3JtYXRGaWx0ZXJlcihkYXRhKTtcbiAgICBjb25zdCBub1RhYmxlSW5kZXggPSBmaW5kSW5kZXgoZmlsdGVyZWREYXRhLCAoZCkgPT4gJ2NvbHVtbnMnIGluIGQgJiYgJ3Jvd3MnIGluIGQpO1xuICAgIGlmIChub1RhYmxlSW5kZXggPCAwKSB7XG4gICAgICB0aHJvdyB7XG4gICAgICAgIG1lc3NhZ2U6IGBSZXN1bHQgb2YgcXVlcnkgIyR7U3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgICA2NSArIG5vVGFibGVJbmRleFxuICAgICAgICApfSBpcyBub3QgaW4gdGFibGUgZm9ybWF0LCB0cnkgdXNpbmcgYW5vdGhlciB0cmFuc2Zvcm0uYCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbWVyZ2VUYWJsZXNJbnRvTW9kZWwobW9kZWwsIC4uLmZpbHRlcmVkRGF0YSk7XG4gIH0sXG59O1xuXG50cmFuc2Zvcm1lcnNbJ2pzb24nXSA9IHtcbiAgZGVzY3JpcHRpb246ICdKU09OIERhdGEnLFxuICBnZXRDb2x1bW5zOiAoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzOiBhbnkgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNlcmllcyA9IGRhdGFbaV07XG4gICAgICBpZiAoc2VyaWVzLnR5cGUgIT09ICdkb2NzJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gb25seSBsb29rIGF0IDEwMCBkb2NzXG4gICAgICBjb25zdCBtYXhEb2NzID0gTWF0aC5taW4oc2VyaWVzLmRhdGFwb2ludHMubGVuZ3RoLCAxMDApO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXhEb2NzOyB5KyspIHtcbiAgICAgICAgY29uc3QgZG9jID0gc2VyaWVzLmRhdGFwb2ludHNbeV07XG4gICAgICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXR0ZW4oZG9jLCB7fSk7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gZmxhdHRlbmVkKSB7XG4gICAgICAgICAgbmFtZXNbcHJvcE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXAobmFtZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICByZXR1cm4geyB0ZXh0OiBrZXksIHZhbHVlOiBrZXkgfTtcbiAgICB9KTtcbiAgfSxcbiAgdHJhbnNmb3JtOiAoZGF0YSwgcGFuZWwsIG1vZGVsKSA9PiB7XG4gICAgbGV0IGksIHksIHo7XG5cbiAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBwYW5lbC5jb2x1bW5zKSB7XG4gICAgICBjb25zdCB0YWJsZUNvbDogYW55ID0geyB0ZXh0OiBjb2x1bW4udGV4dCB9O1xuXG4gICAgICAvLyBpZiBmaWx0ZXJhYmxlIGRhdGEgdGhlbiBzZXQgY29sdW1ucyB0byBmaWx0ZXJhYmxlXG4gICAgICBpZiAoZGF0YS5sZW5ndGggPiAwICYmIGRhdGFbMF0uZmlsdGVyYWJsZSkge1xuICAgICAgICB0YWJsZUNvbC5maWx0ZXJhYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbW9kZWwuY29sdW1ucy5wdXNoKHRhYmxlQ29sKTtcbiAgICB9XG5cbiAgICBpZiAobW9kZWwuY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIG1vZGVsLmNvbHVtbnMucHVzaCh7IHRleHQ6ICdKU09OJyB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2VyaWVzID0gZGF0YVtpXTtcblxuICAgICAgZm9yICh5ID0gMDsgeSA8IHNlcmllcy5kYXRhcG9pbnRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGNvbnN0IGRwID0gc2VyaWVzLmRhdGFwb2ludHNbeV07XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGlmIChpc09iamVjdChkcCkgJiYgcGFuZWwuY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZmxhdHRlbmVkID0gZmxhdHRlbihkcCk7XG4gICAgICAgICAgZm9yICh6ID0gMDsgeiA8IHBhbmVsLmNvbHVtbnMubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKGZsYXR0ZW5lZFtwYW5lbC5jb2x1bW5zW3pdLnZhbHVlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKEpTT04uc3RyaW5naWZ5KGRwKSk7XG4gICAgICAgIH1cblxuICAgICAgICBtb2RlbC5yb3dzLnB1c2godmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1EYXRhVG9UYWJsZShkYXRhOiBhbnksIHBhbmVsOiBhbnkpIHtcbiAgY29uc3QgbW9kZWwgPSBuZXcgVGFibGVNb2RlbCgpO1xuXG4gIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybWVyID0gdHJhbnNmb3JtZXJzW3BhbmVsLnRyYW5zZm9ybV07XG4gIGlmICghdHJhbnNmb3JtZXIpIHtcbiAgICB0aHJvdyB7IG1lc3NhZ2U6ICdUcmFuc2Zvcm1lciAnICsgcGFuZWwudHJhbnNmb3JtICsgJyBub3QgZm91bmQnIH07XG4gIH1cblxuICB0cmFuc2Zvcm1lci50cmFuc2Zvcm0oZGF0YSwgcGFuZWwsIG1vZGVsKTtcbiAgcmV0dXJuIG1vZGVsO1xufVxuXG5leHBvcnQgeyB0cmFuc2Zvcm1lcnMsIHRyYW5zZm9ybURhdGFUb1RhYmxlIH07XG4iLCJpbXBvcnQgeyBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2FkUGx1Z2luQ3NzIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIGFzIE1ldHJpY3NQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgUGFuZWxDdHJsIGFzIFBhbmVsQ3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgUXVlcnlDdHJsIGFzIFF1ZXJ5Q3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3F1ZXJ5X2N0cmwnO1xuXG5jb25zdCBQYW5lbEN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFBhbmVsQ3RybEVTNik7XG5jb25zdCBNZXRyaWNzUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShNZXRyaWNzUGFuZWxDdHJsRVM2KTtcbmNvbnN0IFF1ZXJ5Q3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoUXVlcnlDdHJsRVM2KTtcblxuZXhwb3J0IHsgUGFuZWxDdHJsLCBNZXRyaWNzUGFuZWxDdHJsLCBRdWVyeUN0cmwsIGxvYWRQbHVnaW5Dc3MgfTtcbiJdLCJuYW1lcyI6WyJkZXByZWNhdGlvbldhcm5pbmciLCJ1cmxVdGlsIiwibG9jYXRpb25TZWFyY2hUb09iamVjdCIsImxvY2F0aW9uU2VydmljZSIsIm5hdmlnYXRpb25Mb2dnZXIiLCJERUZBVUxUX1BPUlRTIiwiaHR0cCIsImh0dHBzIiwiZnRwIiwiQW5ndWxhckxvY2F0aW9uV3JhcHBlciIsImNvbnN0cnVjdG9yIiwiYWJzVXJsIiwid3JhcEluRGVwcmVjYXRpb25XYXJuaW5nIiwiaGFzaCIsImhvc3QiLCJwYXRoIiwicG9ydCIsInByb3RvY29sIiwicmVwbGFjZSIsInNlYXJjaCIsInN0YXRlIiwidXJsIiwiZm4iLCJyZXBsYWNlbWVudCIsInNlbGYiLCJ3cmFwcGVyIiwibmFtZSIsImFwcGx5IiwiYXJndW1lbnRzIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJuZXdIYXNoIiwiZ2V0TG9jYXRpb24iLCJzbGljZSIsIkVycm9yIiwiVVJMIiwiaHJlZiIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJwYXJzZWRQYXRoIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInB1c2giLCJsZW5ndGgiLCJwYXJzZUludCIsInBhcmFtVmFsdWUiLCJnZXRTZWFyY2hPYmplY3QiLCJwYXJ0aWFsIiwibmV3UXVlcnkiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwidXBkYXRlZFVybCIsInJlbmRlclVybCIsIm5ld1VybCIsInRyaW0iLCJpc0FycmF5IiwiTG9hZGluZ1N0YXRlIiwiUGFuZWxFdmVudHMiLCJ0b0RhdGFGcmFtZURUTyIsInRvTGVnYWN5UmVzcG9uc2VEYXRhIiwiUGFuZWxDdHJsIiwiYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMiLCJNZXRyaWNzUGFuZWxDdHJsIiwiJHNjb3BlIiwiJGluamVjdG9yIiwibmV4dCIsImRhdGEiLCJwYW5lbERhdGEiLCJsb2FkaW5nIiwicHJvY2Vzc0RhdGFFcnJvciIsImVycm9yIiwiTG9hZGluZyIsImFuZ3VsYXJEaXJ0eUNoZWNrIiwicmVxdWVzdCIsInRpbWVJbmZvIiwidGltZVJhbmdlIiwicmFuZ2UiLCJ1c2VEYXRhRnJhbWVzIiwiaGFuZGxlRGF0YUZyYW1lcyIsInNlcmllcyIsImxlZ2FjeSIsIm1hcCIsInYiLCJoYW5kbGVRdWVyeVJlc3VsdCIsImNvbnRleHRTcnYiLCJnZXQiLCJkYXRhc291cmNlU3J2IiwidGltZVNydiIsInRlbXBsYXRlU3J2IiwicGFuZWwiLCJkYXRhc291cmNlIiwiZXZlbnRzIiwib24iLCJyZWZyZXNoIiwib25NZXRyaWNzUGFuZWxSZWZyZXNoIiwiYmluZCIsInBhbmVsVGVhcmRvd24iLCJvblBhbmVsVGVhckRvd24iLCJjb21wb25lbnREaWRNb3VudCIsIm9uTWV0cmljc1BhbmVsTW91bnRlZCIsInF1ZXJ5UnVubmVyIiwiZ2V0UXVlcnlSdW5uZXIiLCJxdWVyeVN1YnNjcmlwdGlvbiIsImdldERhdGEiLCJ3aXRoVHJhbnNmb3JtcyIsIndpdGhGaWVsZENvbmZpZyIsInN1YnNjcmliZSIsInBhbmVsRGF0YU9ic2VydmVyIiwidW5zdWJzY3JpYmUiLCJvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSIsInNuYXBzaG90RGF0YSIsInVwZGF0ZVRpbWVSYW5nZSIsIkRvbmUiLCIkdGltZW91dCIsImVtaXQiLCJkYXRhU25hcHNob3RMb2FkIiwic2NvcGVkVmFycyIsInRoZW4iLCJpc3N1ZVF1ZXJpZXMiLCJjYXRjaCIsImVyciIsImNhbmNlbGxlZCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiJHJvb3QiLCIkJHBoYXNlIiwiJGRpZ2VzdCIsIm5ld1RpbWVEYXRhIiwicnVuIiwicXVlcmllcyIsInRhcmdldHMiLCJwYW5lbElkIiwiaWQiLCJkYXNoYm9hcmRJZCIsImRhc2hib2FyZCIsInRpbWV6b25lIiwiZ2V0VGltZXpvbmUiLCJtYXhEYXRhUG9pbnRzIiwid2lkdGgiLCJtaW5JbnRlcnZhbCIsImludGVydmFsIiwiY2FjaGVUaW1lb3V0IiwidHJhbnNmb3JtYXRpb25zIiwic25hcHNob3QiLCJmcmFtZSIsImRhdGFGcmFtZXNSZWNlaXZlZCIsInJlc3VsdCIsImRhdGFSZWNlaXZlZCIsImlzU3RyaW5nIiwiRXZlbnRCdXNTcnYiLCJjb25maWciLCJwcm9maWxlciIsInBsdWdpbiIsIiRwYXJlbnQiLCJlZGl0b3JUYWJzIiwiJGxvY2F0aW9uIiwidGltaW5nIiwicGFuZWxzIiwidHlwZSIsInBsdWdpbklkIiwicGx1Z2luTmFtZSIsIiRvbiIsInBhbmVsRGlkTW91bnQiLCJpbml0aWFsaXplZCIsInBhbmVsSW5pdGlhbGl6ZWQiLCJyZW5kZXJpbmdDb21wbGV0ZWQiLCJwdWJsaXNoQXBwRXZlbnQiLCJldmVudCIsInBheWxvYWQiLCJhcHBFdmVudCIsImluaXRFZGl0TW9kZSIsImVkaXRNb2RlSW5pdGlhdGVkIiwiZWRpdE1vZGVJbml0aWFsaXplZCIsImFkZEVkaXRvclRhYiIsInRpdGxlIiwiZGlyZWN0aXZlRm4iLCJpbmRleCIsImljb24iLCJlZGl0b3JUYWIiLCJ0ZW1wbGF0ZVVybCIsInNwbGljZSIsImdldEV4dGVuZGVkTWVudSIsIm1lbnUiLCJpbml0UGFuZWxBY3Rpb25zIiwiZ2V0QWRkaXRpb25hbE1lbnVJdGVtcyIsIm90aGVyUGFuZWxJbkZ1bGxzY3JlZW4iLCJyZW5kZXIiLCJpbmRleE9mIiwiUXVlcnlDdHJsIiwicGFuZWxDdHJsIiwiY3RybCIsInRhcmdldCIsImlzTGFzdFF1ZXJ5Iiwid2l0aG91dCIsImdldFZhbHVlRm9ybWF0cyIsIkNvbHVtbk9wdGlvbnNDdHJsIiwiZWRpdG9yIiwiYWN0aXZlU3R5bGVJbmRleCIsInVuaXRGb3JtYXRzIiwiY29sb3JNb2RlcyIsInRleHQiLCJ2YWx1ZSIsImNvbHVtblR5cGVzIiwiZm9udFNpemVzIiwiZGF0ZUZvcm1hdHMiLCJtYXBwaW5nVHlwZXMiLCJhbGlnblR5cGVzIiwiYWxpZ25UeXBlc0VudW0iLCJnZXRDb2x1bW5OYW1lcyIsInRhYmxlIiwiY29sdW1ucyIsImNvbCIsIm9uQ29sb3JDaGFuZ2UiLCJzZXRVbml0Rm9ybWF0IiwiY29sdW1uIiwidW5pdCIsImFkZENvbHVtblN0eWxlIiwibmV3U3R5bGVSdWxlIiwiYWxpYXMiLCJkZWNpbWFscyIsImNvbG9ycyIsImNvbG9yTW9kZSIsInBhdHRlcm4iLCJkYXRlRm9ybWF0IiwidGhyZXNob2xkcyIsIm1hcHBpbmdUeXBlIiwiYWxpZ24iLCJzdHlsZXMiLCJzdHlsZXNDb3VudCIsImluZGV4VG9JbnNlcnQiLCJsYXN0IiwicmVtb3ZlQ29sdW1uU3R5bGUiLCJzdHlsZSIsImludmVydENvbG9yT3JkZXIiLCJyZWYiLCJjb3B5IiwiY29sb3JJbmRleCIsIm5ld0NvbG9yIiwiYWRkVmFsdWVNYXAiLCJ2YWx1ZU1hcHMiLCJyZW1vdmVWYWx1ZU1hcCIsImFkZFJhbmdlTWFwIiwicmFuZ2VNYXBzIiwiZnJvbSIsInRvIiwicmVtb3ZlUmFuZ2VNYXAiLCJjb2x1bW5PcHRpb25zVGFiIiwicmVzdHJpY3QiLCJzY29wZSIsImNvbnRyb2xsZXIiLCJmaW5kIiwidHJhbnNmb3JtZXJzIiwiVGFibGVQYW5lbEVkaXRvckN0cmwiLCJ1aVNlZ21lbnRTcnYiLCJhZGRDb2x1bW5TZWdtZW50IiwibmV3UGx1c0J1dHRvbiIsInVwZGF0ZVRyYW5zZm9ybUhpbnRzIiwiY2FuU2V0Q29sdW1ucyIsImNvbHVtbnNIZWxwTWVzc2FnZSIsInRyYW5zZm9ybSIsImdldENvbHVtbk9wdGlvbnMiLCJkYXRhUmF3IiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXRDb2x1bW5zIiwic2VnbWVudHMiLCJjIiwibmV3U2VnbWVudCIsImFkZENvbHVtbiIsInBsdXNCdXR0b24iLCJodG1sIiwidHJhbnNmb3JtQ2hhbmdlZCIsInJlbW92ZUNvbHVtbiIsInRhYmxlUGFuZWxFZGl0b3IiLCIkIiwiZGVmYXVsdHMiLCJpc1RhYmxlRGF0YSIsIlBhbmVsUGx1Z2luIiwiYXBwbHlGaWx0ZXJGcm9tVGFibGUiLCJkaXNwYXRjaCIsIlRhYmxlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1EYXRhVG9UYWJsZSIsIlRhYmxlUGFuZWxDdHJsIiwiYW5ub3RhdGlvbnNTcnYiLCIkc2FuaXRpemUiLCJwYWdlU2l6ZSIsInNob3dIZWFkZXIiLCJmb250U2l6ZSIsInNvcnQiLCJkZXNjIiwicGFnZUluZGV4IiwiZmllbGRzIiwicGFuZWxEZWZhdWx0cyIsInBhbmVsSGFzUm93Q29sb3JNb2RlIiwiQm9vbGVhbiIsInBhbmVsSGFzTGlua3MiLCJsaW5rIiwib25EYXRhUmVjZWl2ZWQiLCJvbkluaXRFZGl0TW9kZSIsIm1pZ3JhdGVUb1BhbmVsIiwib25QbHVnaW5UeXBlQ2hhbmdlIiwiZ2V0QW5ub3RhdGlvbnMiLCJhbm5vIiwiZGF0YUxpc3QiLCJyZW5kZXJlciIsInRoZW1lIiwidG9nZ2xlQ29sdW1uU29ydCIsImNvbEluZGV4IiwiZWxlbSIsImF0dHJzIiwicGFnZUNvdW50IiwiZ2V0VGFibGVIZWlnaHQiLCJwYW5lbEhlaWdodCIsImhlaWdodCIsImFwcGVuZFRhYmxlUm93cyIsInRib2R5RWxlbSIsInNldFRhYmxlIiwiZW1wdHkiLCJzd2l0Y2hQYWdlIiwiZSIsImVsIiwiY3VycmVudFRhcmdldCIsInJlbmRlclBhbmVsIiwiYXBwZW5kUGFnaW5hdGlvbkNvbnRyb2xzIiwiZm9vdGVyRWxlbSIsIk1hdGgiLCJjZWlsIiwicm93cyIsInN0YXJ0UGFnZSIsIm1heCIsImVuZFBhZ2UiLCJtaW4iLCJwYWdpbmF0aW9uTGlzdCIsImkiLCJhY3RpdmVDbGFzcyIsInBhZ2VMaW5rRWxlbSIsImFwcGVuZCIsInBhbmVsRWxlbSIsInBhcmVudHMiLCJyb290RWxlbSIsImNzcyIsImFkZENsYXNzIiwidG9vbHRpcCIsInNlbGVjdG9yIiwiYWRkRmlsdGVyQ2xpY2tlZCIsImZpbHRlckRhdGEiLCJvcHRpb25zIiwicm93Iiwib3BlcmF0b3IiLCJ1bmJpbmREZXN0cm95Iiwib2ZmIiwicmVuZGVyRGF0YSIsImFuZ3VsYXJQYW5lbEN0cmwiLCJzZXROb1BhZGRpbmciLCJmaXJzdCIsImVzY2FwZSIsImVzY2FwZVN0cmluZ0ZvclJlZ2V4IiwiZm9ybWF0dGVkVmFsdWVUb1N0cmluZyIsImdldFZhbHVlRm9ybWF0Iiwic3RyaW5nU3RhcnRzQXNSZWdFeCIsInN0cmluZ1RvSnNSZWdleCIsInRleHRVdGlsIiwidW5Fc2NhcGVTdHJpbmdGcm9tUmVnZXgiLCJkYXRlVGltZUZvcm1hdElTTyIsImRhdGVUaW1lRm9ybWF0IiwiZ2V0VGVtcGxhdGVTcnYiLCJ0aW1lWm9uZSIsInNhbml0aXplIiwiaW5pdENvbHVtbnMiLCJmb3JtYXR0ZXJzIiwiY29sb3JTdGF0ZSIsImVzY2FwZWRQYXR0ZXJuIiwicmVnZXgiLCJtYXRjaCIsImVzY2FwZUh0bWwiLCJjcmVhdGVDb2x1bW5Gb3JtYXR0ZXIiLCJnZXRDb2xvckZvclZhbHVlIiwidmlzdWFsaXphdGlvbiIsImdldENvbG9yQnlOYW1lIiwiZGVmYXVsdENlbGxGb3JtYXR0ZXIiLCJqb2luIiwiaXNOYU4iLCJmb3JtYXQiLCJOdW1iZXIiLCJzZXRDb2xvclN0YXRlIiwidmFsdWVGb3JtYXR0ZXIiLCJudW1lcmljVmFsdWUiLCJyZW5kZXJSb3dWYXJpYWJsZXMiLCJyb3dJbmRleCIsImNlbGxWYXJpYWJsZSIsInRvU3RyaW5nIiwiZm9ybWF0Q29sdW1uVmFsdWUiLCJmbXQiLCJyZW5kZXJDZWxsIiwiY29sdW1uSW5kZXgiLCJhZGRXaWR0aEhhY2siLCJjZWxsU3R5bGVzIiwiY2VsbFN0eWxlIiwiY2VsbENsYXNzZXMiLCJjZWxsQ2xhc3MiLCJjZWxsIiwiY29sdW1uSHRtbCIsImhpZGRlbiIsInByZXNlcnZlRm9ybWF0IiwidGV4dEFsaWduIiwiY2VsbExpbmsiLCJsaW5rVXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2FuaXRpemVkQ2VsbExpbmsiLCJzYW5pdGl6ZVVybCIsImNlbGxMaW5rVG9vbHRpcCIsImxpbmtUb29sdGlwIiwiY2VsbFRhcmdldCIsImxpbmtUYXJnZXRCbGFuayIsImZpbHRlcmFibGUiLCJwYWdlIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJ5IiwiY2VsbEh0bWwiLCJyb3dTdHlsZSIsInJvd0NsYXNzZXMiLCJyb3dDbGFzcyIsInJlbmRlcl92YWx1ZXMiLCJ2aXNpYmxlQ29sdW1ucyIsImZpbHRlciIsIm5ld1JvdyIsImZpbmRJbmRleCIsImlzT2JqZWN0IiwiVGFibGVNb2RlbCIsIm1lcmdlVGFibGVzSW50b01vZGVsIiwiVGltZVNlcmllcyIsImZsYXR0ZW4iLCJ0aW1lU2VyaWVzRm9ybWF0RmlsdGVyZXIiLCJBcnJheSIsImRhdGFwb2ludHMiLCJyZWR1Y2UiLCJhY2MiLCJjb25jYXQiLCJ0YWJsZURhdGFGb3JtYXRGaWx0ZXJlciIsImRlc2NyaXB0aW9uIiwibW9kZWwiLCJmaWx0ZXJlZERhdGEiLCJkcCIsInBvaW50cyIsInRpbWVLZXkiLCJ0aW1lIiwicG9pbnQiLCJ2YWx1ZXMiLCJnZXRGbG90UGFpcnMiLCJjZWxscyIsInN0YXRzIiwiYW5ub3RhdGlvbnMiLCJldnQiLCJ0YWdzIiwiY29sdW1uTmFtZXMiLCJmb3JFYWNoIiwibm9UYWJsZUluZGV4IiwiZCIsImZyb21DaGFyQ29kZSIsIm5hbWVzIiwibWF4RG9jcyIsImRvYyIsImZsYXR0ZW5lZCIsInByb3BOYW1lIiwieiIsInRhYmxlQ29sIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyYW5zZm9ybWVyIiwibWFrZUNsYXNzRVM1Q29tcGF0aWJsZSIsImxvYWRQbHVnaW5Dc3MiLCJNZXRyaWNzUGFuZWxDdHJsRVM2IiwiUGFuZWxDdHJsRVM2IiwiUXVlcnlDdHJsRVM2Il0sInNvdXJjZVJvb3QiOiIifQ==