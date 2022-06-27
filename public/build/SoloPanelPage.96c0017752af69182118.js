"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SoloPanelPage"],{

/***/ "./public/app/features/dashboard/containers/SoloPanelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoloPanel": () => (/* binding */ SoloPanel),
/* harmony export */   "SoloPanelPage": () => (/* binding */ SoloPanelPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");
/* harmony import */ var _state_initDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const mapStateToProps = state => ({
  dashboard: state.dashboard.getModel()
});

const mapDispatchToProps = {
  initDashboard: _state_initDashboard__WEBPACK_IMPORTED_MODULE_4__.initDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class SoloPanelPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      panel: null,
      notFound: false
    });
  }

  componentDidMount() {
    const {
      match,
      route
    } = this.props;
    this.props.initDashboard({
      urlSlug: match.params.slug,
      urlUid: match.params.uid,
      urlType: match.params.type,
      routeName: route.routeName,
      fixUrl: false
    });
  }

  getPanelId() {
    var _this$props$queryPara;

    return parseInt((_this$props$queryPara = this.props.queryParams.panelId) !== null && _this$props$queryPara !== void 0 ? _this$props$queryPara : '0', 10);
  }

  componentDidUpdate(prevProps) {
    const {
      dashboard
    } = this.props;

    if (!dashboard) {
      return;
    } // we just got a new dashboard


    if (!prevProps.dashboard || prevProps.dashboard.uid !== dashboard.uid) {
      const panel = dashboard.getPanelByUrlId(this.props.queryParams.panelId);

      if (!panel) {
        this.setState({
          notFound: true
        });
        return;
      }

      this.setState({
        panel
      });
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SoloPanel, {
      dashboard: this.props.dashboard,
      notFound: this.state.notFound,
      panel: this.state.panel,
      panelId: this.getPanelId()
    });
  }

}
const SoloPanel = ({
  dashboard,
  notFound,
  panel,
  panelId
}) => {
  if (notFound) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "alert alert-error",
      children: ["Panel with id ", panelId, " not found"]
    });
  }

  if (!panel || !dashboard) {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: "Loading & initializing dashboard"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "panel-solo",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: ({
        width,
        height
      }) => {
        if (width === 0) {
          return null;
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_3__.DashboardPanel, {
          stateKey: panel.key,
          width: width,
          height: height,
          dashboard: dashboard,
          panel: panel,
          isEditing: false,
          isViewing: false,
          lazy: false
        });
      }
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SoloPanelPage));

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/DashboardPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPanel": () => (/* binding */ DashboardPanel),
/* harmony export */   "DashboardPanelUnconnected": () => (/* binding */ DashboardPanelUnconnected)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _panel_state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/panel/state/actions.ts");
/* harmony import */ var _panel_state_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/dashgrid/LazyLoader.tsx");
/* harmony import */ var _PanelChrome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelChrome.tsx");
/* harmony import */ var _PanelChromeAngular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelChromeAngular.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const mapStateToProps = (state, props) => {
  const panelState = state.panels[props.stateKey];

  if (!panelState) {
    return {
      plugin: null
    };
  }

  return {
    plugin: panelState.plugin,
    instanceState: panelState.instanceState
  };
};

const mapDispatchToProps = {
  initPanelState: _panel_state_actions__WEBPACK_IMPORTED_MODULE_2__.initPanelState,
  setPanelInstanceState: _panel_state_reducers__WEBPACK_IMPORTED_MODULE_3__.setPanelInstanceState
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class DashboardPanelUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onInstanceStateChange", value => {
      this.props.setPanelInstanceState({
        key: this.props.stateKey,
        value
      });
    });

    _defineProperty(this, "onVisibilityChange", v => {
      this.props.panel.isInView = v;
    });

    _defineProperty(this, "onPanelLoad", () => {
      if (!this.props.plugin) {
        this.props.initPanelState(this.props.panel);
      }
    });
  }

  componentDidMount() {
    this.props.panel.isInView = !this.props.lazy;

    if (!this.props.lazy) {
      this.onPanelLoad();
    }
  }

  render() {
    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      width,
      height,
      lazy,
      plugin
    } = this.props;

    const renderPanelChrome = isInView => plugin && (plugin.angularPanelCtrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PanelChromeAngular__WEBPACK_IMPORTED_MODULE_6__.PanelChromeAngular, {
      plugin: plugin,
      panel: panel,
      dashboard: dashboard,
      isViewing: isViewing,
      isEditing: isEditing,
      isInView: isInView,
      width: width,
      height: height
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PanelChrome__WEBPACK_IMPORTED_MODULE_5__.PanelChrome, {
      plugin: plugin,
      panel: panel,
      dashboard: dashboard,
      isViewing: isViewing,
      isEditing: isEditing,
      isInView: isInView,
      width: width,
      height: height,
      onInstanceStateChange: this.onInstanceStateChange
    }));

    return lazy ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LazyLoader__WEBPACK_IMPORTED_MODULE_4__.LazyLoader, {
      width: width,
      height: height,
      onChange: this.onVisibilityChange,
      onLoad: this.onPanelLoad,
      children: ({
        isInView
      }) => renderPanelChrome(isInView)
    }) : renderPanelChrome(true);
  }

}

_defineProperty(DashboardPanelUnconnected, "defaultProps", {
  lazy: true
});

const DashboardPanel = connector(DashboardPanelUnconnected);

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/LazyLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyLoader": () => (/* binding */ LazyLoader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var app_plugins_datasource_influxdb_components_useUniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function LazyLoader({
  children,
  width,
  height,
  onLoad,
  onChange
}) {
  const id = (0,app_plugins_datasource_influxdb_components_useUniqueId__WEBPACK_IMPORTED_MODULE_1__.useUniqueId)();
  const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isInView, setIsInView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    LazyLoader.addCallback(id, entry => {
      if (!loaded && entry.isIntersecting) {
        setLoaded(true);
        onLoad === null || onLoad === void 0 ? void 0 : onLoad();
      }

      setIsInView(entry.isIntersecting);
      onChange === null || onChange === void 0 ? void 0 : onChange(entry.isIntersecting);
    });
    const wrapperEl = wrapperRef.current;

    if (wrapperEl) {
      LazyLoader.observer.observe(wrapperEl);
    }

    return () => {
      delete LazyLoader.callbacks[id];
      wrapperEl && LazyLoader.observer.unobserve(wrapperEl);

      if (Object.keys(LazyLoader.callbacks).length === 0) {
        LazyLoader.observer.disconnect();
      }
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: id,
    ref: wrapperRef,
    style: {
      width,
      height
    },
    children: loaded && (typeof children === 'function' ? children({
      isInView
    }) : children)
  });
}
LazyLoader.callbacks = {};

LazyLoader.addCallback = (id, c) => LazyLoader.callbacks[id] = c;

LazyLoader.observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    LazyLoader.callbacks[entry.target.id](entry);
  }
}, {
  rootMargin: '100px'
});

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelChrome.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelChrome": () => (/* binding */ PanelChrome)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_core_profiler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/profiler.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/routes/utils.ts");
/* harmony import */ var _annotations_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/annotations/api.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/utils/loadSnapshotData.ts");
/* harmony import */ var _PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeader.tsx");
/* harmony import */ var _SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts");
/* harmony import */ var _liveTimer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























const DEFAULT_PLUGIN_ERROR = 'Error in plugin';
class PanelChrome extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props); // Can this eventBus be on PanelModel?  when we have more complex event filtering, that may be a better option

    _defineProperty(this, "timeSrv", (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_15__.getTimeSrv)());

    _defineProperty(this, "subs", new rxjs__WEBPACK_IMPORTED_MODULE_21__.Subscription());

    _defineProperty(this, "eventFilter", {
      onlyLocal: true
    });

    _defineProperty(this, "canEditDashboard", () => Boolean(this.props.dashboard.meta.canEdit || this.props.dashboard.meta.canMakeEditable));

    _defineProperty(this, "canAddAnnotation", () => {
      let canAdd = true;

      if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__.contextSrv.accessControlEnabled()) {
        var _this$props$dashboard;

        canAdd = !!((_this$props$dashboard = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard !== void 0 && _this$props$dashboard.dashboard.canAdd);
      }

      return canAdd && this.canEditDashboard();
    });

    _defineProperty(this, "canEditAnnotation", dashboardId => {
      let canEdit = true;

      if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__.contextSrv.accessControlEnabled()) {
        if (dashboardId !== 0) {
          var _this$props$dashboard2;

          canEdit = !!((_this$props$dashboard2 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard2 !== void 0 && _this$props$dashboard2.dashboard.canEdit);
        } else {
          var _this$props$dashboard3;

          canEdit = !!((_this$props$dashboard3 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard3 !== void 0 && _this$props$dashboard3.organization.canEdit);
        }
      }

      return canEdit && this.canEditDashboard();
    });

    _defineProperty(this, "canDeleteAnnotation", dashboardId => {
      let canDelete = true;

      if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_11__.contextSrv.accessControlEnabled()) {
        if (dashboardId !== 0) {
          var _this$props$dashboard4;

          canDelete = !!((_this$props$dashboard4 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard4 !== void 0 && _this$props$dashboard4.dashboard.canDelete);
        } else {
          var _this$props$dashboard5;

          canDelete = !!((_this$props$dashboard5 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard5 !== void 0 && _this$props$dashboard5.organization.canDelete);
        }
      }

      return canDelete && this.canEditDashboard();
    });

    _defineProperty(this, "getSync", () => this.props.isEditing ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DashboardCursorSync.Off : this.props.dashboard.graphTooltip);

    _defineProperty(this, "onInstanceStateChange", value => {
      this.props.onInstanceStateChange(value);
      this.setState({
        context: Object.assign({}, this.state.context, {
          instanceState: value
        })
      });
    });

    _defineProperty(this, "onSeriesColorChange", (label, color) => {
      this.onFieldConfigChange((0,app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_9__.changeSeriesColorConfigFactory)(label, color, this.props.panel.fieldConfig));
    });

    _defineProperty(this, "onSeriesVisibilityChange", (label, mode) => {
      this.onFieldConfigChange((0,_SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_18__.seriesVisibilityConfigFactory)(label, mode, this.props.panel.fieldConfig, this.state.data.series));
    });

    _defineProperty(this, "onToggleLegendSort", sortKey => {
      const legendOptions = this.props.panel.options.legend; // We don't want to do anything when legend options are not available

      if (!legendOptions) {
        return;
      }

      let sortDesc = legendOptions.sortDesc;
      let sortBy = legendOptions.sortBy;

      if (sortKey !== sortBy) {
        sortDesc = undefined;
      } // if already sort ascending, disable sorting


      if (sortDesc === false) {
        sortBy = undefined;
        sortDesc = undefined;
      } else {
        sortDesc = !sortDesc;
        sortBy = sortKey;
      }

      this.onOptionsChange(Object.assign({}, this.props.panel.options, {
        legend: Object.assign({}, legendOptions, {
          sortBy,
          sortDesc
        })
      }));
    });

    _defineProperty(this, "onRefresh", () => {
      const {
        dashboard,
        panel,
        isInView,
        width
      } = this.props;

      if (!isInView) {
        this.setState({
          refreshWhenInView: true
        });
        return;
      }

      const timeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_8__.applyPanelTimeOverrides)(panel, this.timeSrv.timeRange()); // Issue Query

      if (this.wantsQueryExecution) {
        if (width < 0) {
          return;
        }

        if (this.state.refreshWhenInView) {
          this.setState({
            refreshWhenInView: false
          });
        }

        panel.runAllPanelQueries(dashboard.id, dashboard.getTimezone(), timeData, width, dashboard.meta.publicDashboardAccessToken);
      } else {
        // The panel should render on refresh as well if it doesn't have a query, like clock panel
        this.setState({
          data: Object.assign({}, this.state.data, {
            timeRange: this.timeSrv.timeRange()
          }),
          renderCounter: this.state.renderCounter + 1,
          liveTime: undefined
        });
      }
    });

    _defineProperty(this, "onRender", () => {
      const stateUpdate = {
        renderCounter: this.state.renderCounter + 1
      };
      this.setState(stateUpdate);
    });

    _defineProperty(this, "onOptionsChange", options => {
      this.props.panel.updateOptions(options);
    });

    _defineProperty(this, "onFieldConfigChange", config => {
      this.props.panel.updateFieldConfig(config);
    });

    _defineProperty(this, "onPanelError", error => {
      const errorMessage = error.message || DEFAULT_PLUGIN_ERROR;

      if (this.state.errorMessage !== errorMessage) {
        this.setState({
          errorMessage
        });
      }
    });

    _defineProperty(this, "onPanelErrorRecover", () => {
      this.setState({
        errorMessage: undefined
      });
    });

    _defineProperty(this, "onAnnotationCreate", async event => {
      const isRegion = event.from !== event.to;
      const anno = {
        dashboardId: this.props.dashboard.id,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,_annotations_api__WEBPACK_IMPORTED_MODULE_13__.saveAnnotation)(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_14__.getDashboardQueryRunner)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AnnotationChangeEvent(anno));
    });

    _defineProperty(this, "onAnnotationDelete", async id => {
      await (0,_annotations_api__WEBPACK_IMPORTED_MODULE_13__.deleteAnnotation)({
        id
      });
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_14__.getDashboardQueryRunner)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AnnotationChangeEvent({
        id
      }));
    });

    _defineProperty(this, "onAnnotationUpdate", async event => {
      const isRegion = event.from !== event.to;
      const anno = {
        id: event.id,
        dashboardId: this.props.dashboard.id,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,_annotations_api__WEBPACK_IMPORTED_MODULE_13__.updateAnnotation)(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_14__.getDashboardQueryRunner)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AnnotationChangeEvent(anno));
    });

    _defineProperty(this, "onChangeTimeRange", timeRange => {
      this.timeSrv.setTime({
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toUtc)(timeRange.from),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toUtc)(timeRange.to)
      });
    });

    const eventBus = props.dashboard.events.newScopedBus(`panel:${props.panel.id}`, this.eventFilter);
    this.state = {
      isFirstLoad: true,
      renderCounter: 0,
      refreshWhenInView: false,
      context: {
        eventBus,
        app: this.getPanelContextApp(),
        sync: this.getSync,
        onSeriesColorChange: this.onSeriesColorChange,
        onToggleSeriesVisibility: this.onSeriesVisibilityChange,
        onAnnotationCreate: this.onAnnotationCreate,
        onAnnotationUpdate: this.onAnnotationUpdate,
        onAnnotationDelete: this.onAnnotationDelete,
        canAddAnnotations: this.canAddAnnotation,
        onInstanceStateChange: this.onInstanceStateChange,
        onToggleLegendSort: this.onToggleLegendSort,
        canEditAnnotations: this.canEditAnnotation,
        canDeleteAnnotations: this.canDeleteAnnotation
      },
      data: this.getInitialPanelDataState()
    };
  }

  getPanelContextApp() {
    if (this.props.isEditing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.PanelEditor;
    }

    if (this.props.isViewing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.PanelViewer;
    }

    return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.Dashboard;
  }

  getInitialPanelDataState() {
    return {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.NotStarted,
      series: [],
      timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDefaultTimeRange)()
    };
  }

  componentDidMount() {
    const {
      panel,
      dashboard
    } = this.props; // Subscribe to panel events

    this.subs.add(panel.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.RefreshEvent, this.onRefresh));
    this.subs.add(panel.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_10__.RenderEvent, this.onRender));
    dashboard.panelInitialized(this.props.panel); // Move snapshot data into the query response

    if (this.hasPanelSnapshot) {
      this.setState({
        data: (0,_utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_16__.loadSnapshotData)(panel, dashboard),
        isFirstLoad: false
      });
      return;
    }

    if (!this.wantsQueryExecution) {
      this.setState({
        isFirstLoad: false
      });
    }

    this.subs.add(panel.getQueryRunner().getData({
      withTransforms: true,
      withFieldConfig: true
    }).subscribe({
      next: data => this.onDataUpdate(data)
    })); // Listen for live timer events

    _liveTimer__WEBPACK_IMPORTED_MODULE_19__.liveTimer.listen(this);
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
    _liveTimer__WEBPACK_IMPORTED_MODULE_19__.liveTimer.remove(this);
  }

  liveTimeChanged(liveTime) {
    const {
      data
    } = this.state;

    if (data.timeRange) {
      const delta = liveTime.to.valueOf() - data.timeRange.to.valueOf();

      if (delta < 100) {
        // 10hz
        console.log('Skip tick render', this.props.panel.title, delta);
        return;
      }
    }

    this.setState({
      liveTime
    });
  }

  componentDidUpdate(prevProps) {
    const {
      isInView,
      width
    } = this.props;
    const {
      context
    } = this.state;
    const app = this.getPanelContextApp();

    if (context.app !== app) {
      this.setState({
        context: Object.assign({}, context, {
          app
        })
      });
    } // View state has changed


    if (isInView !== prevProps.isInView) {
      if (isInView) {
        // Check if we need a delayed refresh
        if (this.state.refreshWhenInView) {
          this.onRefresh();
        }
      }
    } // The timer depends on panel width


    if (width !== prevProps.width) {
      _liveTimer__WEBPACK_IMPORTED_MODULE_19__.liveTimer.updateInterval(this);
    }
  } // Updates the response with information from the stream
  // The next is outside a react synthetic event so setState is not batched
  // So in this context we can only do a single call to setState


  onDataUpdate(data) {
    const {
      dashboard,
      panel,
      plugin
    } = this.props; // Ignore this data update if we are now a non data panel

    if (plugin.meta.skipDataQuery) {
      this.setState({
        data: this.getInitialPanelDataState()
      });
      return;
    }

    let {
      isFirstLoad
    } = this.state;
    let errorMessage;

    switch (data.state) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading:
        // Skip updating state data if it is already in loading state
        // This is to avoid rendering partial loading responses
        if (this.state.data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading) {
          return;
        }

        break;

      case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Error:
        const {
          error
        } = data;

        if (error) {
          if (errorMessage !== error.message) {
            errorMessage = error.message;
          }
        }

        break;

      case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done:
        // If we are doing a snapshot save data in panel model
        if (dashboard.snapshot) {
          panel.snapshotData = data.series.map(frame => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toDataFrameDTO)(frame));
        }

        if (isFirstLoad) {
          isFirstLoad = false;
        }

        break;
    }

    this.setState({
      isFirstLoad,
      errorMessage,
      data,
      liveTime: undefined
    });
  }

  get hasPanelSnapshot() {
    const {
      panel
    } = this.props;
    return panel.snapshotData && panel.snapshotData.length;
  }

  get wantsQueryExecution() {
    return !(this.props.plugin.meta.skipDataQuery || this.hasPanelSnapshot);
  }

  shouldSignalRenderingCompleted(loadingState, pluginMeta) {
    return loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done || pluginMeta.skipDataQuery;
  }

  skipFirstRender(loadingState) {
    const {
      isFirstLoad
    } = this.state;
    return this.wantsQueryExecution && isFirstLoad && (loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading || loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.NotStarted);
  }

  renderPanel(width, height) {
    var _ref, _this$state$liveTime;

    const {
      panel,
      plugin,
      dashboard
    } = this.props;
    const {
      renderCounter,
      data
    } = this.state;
    const {
      theme
    } = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config;
    const {
      state: loadingState
    } = data; // do not render component until we have first data

    if (this.skipFirstRender(loadingState)) {
      return null;
    } // This is only done to increase a counter that is used by backend
    // image rendering to know when to capture image


    if (this.shouldSignalRenderingCompleted(loadingState, plugin.meta)) {
      app_core_profiler__WEBPACK_IMPORTED_MODULE_7__.profiler.renderingCompleted();
    }

    const PanelComponent = plugin.panel;
    const timeRange = (_ref = (_this$state$liveTime = this.state.liveTime) !== null && _this$state$liveTime !== void 0 ? _this$state$liveTime : data.timeRange) !== null && _ref !== void 0 ? _ref : this.timeSrv.timeRange();
    const headerHeight = this.hasOverlayHeader() ? 0 : theme.panelHeaderHeight;
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    const panelWidth = width - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_6__.PANEL_BORDER;
    const innerPanelHeight = height - headerHeight - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_6__.PANEL_BORDER;
    const panelContentClassNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'panel-content': true,
      'panel-content--no-padding': plugin.noPadding
    });
    const panelOptions = panel.getOptions(); // Update the event filter (dashboard settings may have changed)
    // Yes this is called ever render for a function that is triggered on every mouse move

    this.eventFilter.onlyLocal = dashboard.graphTooltip === 0;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div", {
        className: panelContentClassNames,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.PanelContextProvider, {
          value: this.state.context,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(PanelComponent, {
            id: panel.id,
            data: data,
            title: panel.title,
            timeRange: timeRange,
            timeZone: this.props.dashboard.getTimezone(),
            options: panelOptions,
            fieldConfig: panel.fieldConfig,
            transparent: panel.transparent,
            width: panelWidth,
            height: innerPanelHeight,
            renderCounter: renderCounter,
            replaceVariables: panel.replaceVariables,
            onOptionsChange: this.onOptionsChange,
            onFieldConfigChange: this.onFieldConfigChange,
            onChangeTimeRange: this.onChangeTimeRange,
            eventBus: dashboard.events
          })
        })
      })
    });
  }

  hasOverlayHeader() {
    const {
      panel
    } = this.props;
    const {
      data
    } = this.state; // always show normal header if we have time override

    if (data.request && data.request.timeInfo) {
      return false;
    }

    return !panel.hasTitle();
  }

  render() {
    var _data$alertState;

    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      width,
      height,
      plugin
    } = this.props;
    const {
      errorMessage,
      data
    } = this.state;
    const {
      transparent
    } = panel;
    const alertState = (_data$alertState = data.alertState) === null || _data$alertState === void 0 ? void 0 : _data$alertState.state;
    const containerClassNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'panel-container': true,
      'panel-container--absolute': (0,_routes_utils__WEBPACK_IMPORTED_MODULE_12__.isSoloRoute)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.getLocation().pathname),
      'panel-container--transparent': transparent,
      'panel-container--no-title': this.hasOverlayHeader(),
      [`panel-alert-state--${alertState}`]: alertState !== undefined
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("section", {
      className: containerClassNames,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.Panels.Panel.containerByTitle(panel.title),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_17__.PanelHeader, {
        panel: panel,
        dashboard: dashboard,
        title: panel.title,
        description: panel.description,
        links: panel.links,
        error: errorMessage,
        isEditing: isEditing,
        isViewing: isViewing,
        alertState: alertState,
        data: data
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ErrorBoundary, {
        dependencies: [data, plugin, panel.getOptions()],
        onError: this.onPanelError,
        onRecover: this.onPanelErrorRecover,
        children: ({
          error
        }) => {
          if (error) {
            return null;
          }

          return this.renderPanel(width, height);
        }
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelChromeAngular.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelChromeAngular": () => (/* binding */ PanelChromeAngular),
/* harmony export */   "PanelChromeAngularUnconnected": () => (/* binding */ PanelChromeAngularUnconnected)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/panel/state/selectors.ts");
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/routes/utils.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeader.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class PanelChromeAngularUnconnected extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "timeSrv", (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_11__.getTimeSrv)());

    _defineProperty(this, "scopeProps", void 0);

    _defineProperty(this, "subs", new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription());

    this.state = {
      data: {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted,
        series: [],
        timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultTimeRange)()
      }
    };
  }

  componentDidMount() {
    const {
      panel
    } = this.props;
    this.loadAngularPanel(); // subscribe to data events

    const queryRunner = panel.getQueryRunner(); // we are not displaying any of this data so no need for transforms or field config

    this.subs.add(queryRunner.getData({
      withTransforms: false,
      withFieldConfig: false
    }).subscribe({
      next: data => this.onPanelDataUpdate(data)
    }));
  }

  onPanelDataUpdate(data) {
    let errorMessage;

    if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error) {
      const {
        error
      } = data;

      if (error) {
        if (errorMessage !== error.message) {
          errorMessage = error.message;
        }
      }
    }

    this.setState({
      data,
      errorMessage
    });
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      plugin,
      height,
      width,
      panel
    } = this.props;

    if (prevProps.plugin !== plugin) {
      this.loadAngularPanel();
    }

    if (prevProps.width !== width || prevProps.height !== height) {
      if (this.scopeProps) {
        this.scopeProps.size.height = this.getInnerPanelHeight();
        this.scopeProps.size.width = this.getInnerPanelWidth();
        panel.render();
      }
    }
  }

  getInnerPanelHeight() {
    const {
      plugin,
      height
    } = this.props;
    const {
      theme
    } = app_core_config__WEBPACK_IMPORTED_MODULE_6__["default"];
    const headerHeight = this.hasOverlayHeader() ? 0 : theme.panelHeaderHeight;
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    return height - headerHeight - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_7__.PANEL_BORDER;
  }

  getInnerPanelWidth() {
    const {
      plugin,
      width
    } = this.props;
    const {
      theme
    } = app_core_config__WEBPACK_IMPORTED_MODULE_6__["default"];
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    return width - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_7__.PANEL_BORDER;
  }

  loadAngularPanel() {
    const {
      panel,
      dashboard,
      setPanelAngularComponent
    } = this.props; // if we have no element or already have loaded the panel return

    if (!this.element) {
      return;
    }

    const loader = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getAngularLoader)();
    const template = '<plugin-component type="panel" class="panel-height-helper"></plugin-component>';
    this.scopeProps = {
      panel: panel,
      dashboard: dashboard,
      size: {
        width: this.getInnerPanelWidth(),
        height: this.getInnerPanelHeight()
      }
    };
    setPanelAngularComponent({
      key: panel.key,
      angularComponent: loader.load(this.element, this.scopeProps, template)
    });
  }

  hasOverlayHeader() {
    const {
      panel
    } = this.props;
    const {
      data
    } = this.state; // always show normal header if we have time override

    if (data.request && data.request.timeInfo) {
      return false;
    }

    return !panel.hasTitle();
  }

  render() {
    var _data$alertState;

    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      plugin
    } = this.props;
    const {
      errorMessage,
      data
    } = this.state;
    const {
      transparent
    } = panel;
    const alertState = (_data$alertState = data.alertState) === null || _data$alertState === void 0 ? void 0 : _data$alertState.state;
    const containerClassNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'panel-container': true,
      'panel-container--absolute': (0,_routes_utils__WEBPACK_IMPORTED_MODULE_10__.isSoloRoute)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.getLocation().pathname),
      'panel-container--transparent': transparent,
      'panel-container--no-title': this.hasOverlayHeader(),
      'panel-has-alert': panel.alert !== undefined,
      [`panel-alert-state--${alertState}`]: alertState !== undefined
    });
    const panelContentClassNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'panel-content': true,
      'panel-content--no-padding': plugin.noPadding
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: containerClassNames,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.Panels.Panel.containerByTitle(panel.title),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_12__.PanelHeader, {
        panel: panel,
        dashboard: dashboard,
        title: panel.title,
        description: panel.description,
        links: panel.links,
        error: errorMessage,
        isViewing: isViewing,
        isEditing: isEditing,
        data: data,
        alertState: alertState
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: panelContentClassNames,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          ref: element => this.element = element,
          className: "panel-height-helper"
        })
      })]
    });
  }

}

const mapStateToProps = (state, props) => {
  var _getPanelStateForMode;

  return {
    angularComponent: (_getPanelStateForMode = (0,app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_9__.getPanelStateForModel)(state, props.panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent
  };
};

const mapDispatchToProps = {
  setPanelAngularComponent: app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_8__.setPanelAngularComponent
};
const PanelChromeAngular = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(PanelChromeAngularUnconnected);

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeader": () => (/* binding */ PanelHeader)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/panel/panellinks/linkSuppliers.ts");
/* harmony import */ var _PanelHeaderCorner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx");
/* harmony import */ var _PanelHeaderLoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderLoadingIndicator.tsx");
/* harmony import */ var _PanelHeaderMenuTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuTrigger.tsx");
/* harmony import */ var _PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx");
/* harmony import */ var _PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotices.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Icon2;














const PanelHeader = ({
  panel,
  error,
  isViewing,
  isEditing,
  data,
  alertState,
  dashboard
}) => {
  const onCancelQuery = () => panel.getQueryRunner().cancelQuery();

  const title = panel.getDisplayTitle();
  const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('panel-header', !(isViewing || isEditing) ? 'grid-drag-handle' : '');
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(panelStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderLoadingIndicator__WEBPACK_IMPORTED_MODULE_6__.PanelHeaderLoadingIndicator, {
      state: data.state,
      onClick: onCancelQuery
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderCorner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      panel: panel,
      title: panel.title,
      description: panel.description,
      scopedVars: panel.scopedVars,
      links: (0,app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_4__.getPanelLinksSupplier)(panel),
      error: error
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: className,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderMenuTrigger__WEBPACK_IMPORTED_MODULE_7__.PanelHeaderMenuTrigger, {
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.Panels.Panel.title(title),
        children: ({
          closeMenu,
          panelMenuOpen
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "panel-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_9__.PanelHeaderNotices, {
              frames: data.series,
              panelId: panel.id
            }), alertState ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              name: alertState === 'alerting' ? 'heart-break' : 'heart',
              className: "icon-gf panel-alert-icon",
              style: {
                marginRight: '4px'
              },
              size: "sm"
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
              className: styles.titleText,
              children: title
            }), !dashboard.meta.publicDashboardAccessToken && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              "data-testid": "panel-dropdown",
              children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                name: "angle-down",
                className: "panel-menu-toggle"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_8__.PanelHeaderMenuWrapper, {
                panel: panel,
                dashboard: dashboard,
                show: panelMenuOpen,
                onClose: closeMenu
              })]
            }), data.request && data.request.timeInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
              className: "panel-time-info",
              children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                name: "clock-nine",
                size: "sm"
              })), " ", data.request.timeInfo]
            })]
          });
        }
      })
    })]
  });
};

const panelStyles = theme => {
  return {
    titleText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: calc(100% - 38px);
      cursor: pointer;
      font-weight: ${theme.typography.fontWeightMedium};
      font-size: ${theme.typography.body.fontSize};
      margin: 0;

      &:hover {
        color: ${theme.colors.text.primary};
      }
      .panel-has-alert & {
        max-width: calc(100% - 54px);
      }
    `
  };
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderCorner": () => (/* binding */ PanelHeaderCorner),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/inspector/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _i, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var InfoMode;

(function (InfoMode) {
  InfoMode["Error"] = "Error";
  InfoMode["Info"] = "Info";
  InfoMode["Links"] = "Links";
})(InfoMode || (InfoMode = {}));

class PanelHeaderCorner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "timeSrv", (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_5__.getTimeSrv)());

    _defineProperty(this, "getInfoMode", () => {
      const {
        panel,
        error
      } = this.props;

      if (error) {
        return InfoMode.Error;
      }

      if (!!panel.description) {
        return InfoMode.Info;
      }

      if (panel.links && panel.links.length) {
        return InfoMode.Links;
      }

      return undefined;
    });

    _defineProperty(this, "getInfoContent", () => {
      const {
        panel
      } = this.props;
      const markdown = panel.description || '';
      const interpolatedMarkdown = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().replace(markdown, panel.scopedVars);
      const markedInterpolatedMarkdown = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.renderMarkdown)(interpolatedMarkdown);
      const links = this.props.links && this.props.links.getLinks(panel.replaceVariables);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "panel-info-content markdown-html",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: markedInterpolatedMarkdown
          }
        }), links && links.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
          className: "panel-info-corner-links",
          children: links.map((link, idx) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                className: "panel-info-corner-links__item",
                href: link.href,
                target: link.target,
                children: link.title
              })
            }, idx);
          })
        })]
      });
    });

    _defineProperty(this, "onClickError", () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({
        inspect: this.props.panel.id,
        inspectTab: app_features_inspector_types__WEBPACK_IMPORTED_MODULE_6__.InspectTab.Error
      });
    });
  }

  renderCornerType(infoMode, content, onClick) {
    const theme = infoMode === InfoMode.Error ? 'error' : 'info';
    const className = `panel-info-corner panel-info-corner--${infoMode.toLowerCase()}`;
    const ariaLabel = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.Panels.Panel.headerCornerInfo(infoMode.toLowerCase());
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
      content: content,
      placement: "top-start",
      theme: theme,
      interactive: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
        className: className,
        onClick: onClick,
        "aria-label": ariaLabel,
        children: [_i || (_i = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
          "aria-hidden": true,
          className: "fa"
        })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "panel-info-corner-inner"
        }))]
      })
    });
  }

  render() {
    const {
      error
    } = this.props;
    const infoMode = this.getInfoMode();

    if (!infoMode) {
      return null;
    }

    if (infoMode === InfoMode.Error && error) {
      return this.renderCornerType(infoMode, error, this.onClickError);
    }

    if (infoMode === InfoMode.Info || infoMode === InfoMode.Links) {
      return this.renderCornerType(infoMode, this.getInfoContent);
    }

    return null;
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelHeaderCorner);

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderLoadingIndicator.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderLoadingIndicator": () => (/* binding */ PanelHeaderLoadingIndicator)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tooltip;






const PanelHeaderLoadingIndicator = ({
  state,
  onClick
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);

  if (state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "panel-loading",
      onClick: onClick,
      children: _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
        content: "Cancel query",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          className: "panel-loading__spinner spin-clockwise",
          name: "sync"
        })
      }))
    });
  }

  if (state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Streaming) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "panel-loading",
      onClick: onClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        title: "Streaming (click to stop)",
        className: styles.streamIndicator
      })
    });
  }

  return null;
};

function getStyles(theme) {
  return {
    streamIndicator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 10px;
      height: 10px;
      background: ${theme.colors.textFaint};
      box-shadow: 0 0 2px ${theme.colors.textFaint};
      border-radius: 50%;
      position: relative;
      top: 6px;
      right: 1px;
    `
  };
}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenu": () => (/* binding */ PanelHeaderMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PanelHeaderMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class PanelHeaderMenu extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderItems", (menu, isSubMenu = false) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "dropdown-menu dropdown-menu--menu panel-menu",
        role: isSubMenu ? '' : 'menu',
        children: menu.map((menuItem, idx) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PanelHeaderMenuItem__WEBPACK_IMPORTED_MODULE_1__.PanelHeaderMenuItem, {
            type: menuItem.type,
            text: menuItem.text,
            iconClassName: menuItem.iconClassName,
            onClick: menuItem.onClick,
            shortcut: menuItem.shortcut,
            children: menuItem.subMenu && this.renderItems(menuItem.subMenu, true)
          }, `${menuItem.text}${idx}`);
        })
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "panel-menu-container dropdown open",
      children: this.renderItems(this.props.items)
    });
  }

}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenuProvider": () => (/* binding */ PanelHeaderMenuProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/panel/state/selectors.ts");
/* harmony import */ var _utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/utils/getPanelMenu.ts");




const PanelHeaderMenuProvider = ({
  panel,
  dashboard,
  children
}) => {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const angularComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _getPanelStateForMode;

    return (_getPanelStateForMode = (0,app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_2__.getPanelStateForModel)(state, panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setItems((0,_utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_3__.getPanelMenu)(dashboard, panel, angularComponent));
  }, [dashboard, panel, angularComponent, setItems]);
  return children({
    items
  });
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuTrigger.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenuTrigger": () => (/* binding */ PanelHeaderMenuTrigger)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["children"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const PanelHeaderMenuTrigger = _ref => {
  let {
    children
  } = _ref,
      divProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [clickCoordinates, setClickCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const [panelMenuOpen, setPanelMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onMenuToggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (!isClick(clickCoordinates, eventToClickCoordinates(event))) {
      return;
    }

    event.stopPropagation();
    setPanelMenuOpen(!panelMenuOpen);
  }, [clickCoordinates, panelMenuOpen, setPanelMenuOpen]);
  const onMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    setClickCoordinates(eventToClickCoordinates(event));
  }, [setClickCoordinates]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("header", Object.assign({}, divProps, {
    className: "panel-title-container",
    onClick: onMenuToggle,
    onMouseDown: onMouseDown,
    children: children({
      panelMenuOpen,
      closeMenu: () => setPanelMenuOpen(false)
    })
  }));
};

function isClick(current, clicked) {
  return clicked.x === current.x && clicked.y === current.y;
}

function eventToClickCoordinates(event) {
  return {
    x: Math.floor(event.clientX),
    y: Math.floor(event.clientY)
  };
}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenuWrapper": () => (/* binding */ PanelHeaderMenuWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx");
/* harmony import */ var _PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const PanelHeaderMenuWrapper = ({
  show,
  onClose,
  panel,
  dashboard
}) => {
  if (!show) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideWrapper, {
    onClick: onClose,
    parent: document,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_3__.PanelHeaderMenuProvider, {
      panel: panel,
      dashboard: dashboard,
      children: ({
        items
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderMenu, {
          items: items
        });
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotice.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderNotice": () => (/* binding */ PanelHeaderNotice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const PanelHeaderNotice = ({
  notice,
  onClick
}) => {
  const iconName = notice.severity === 'error' || notice.severity === 'warning' ? 'exclamation-triangle' : 'info-circle';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: notice.text,
    children: notice.inspect ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "panel-info-notice pointer",
      onClick: e => onClick(e, notice.inspect),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: iconName,
        style: {
          marginRight: '8px'
        }
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      className: "panel-info-notice",
      href: notice.link,
      target: "_blank",
      rel: "noreferrer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: iconName,
        style: {
          marginRight: '8px'
        }
      })
    })
  }, notice.severity);
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotices.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderNotices": () => (/* binding */ PanelHeaderNotices)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _PanelHeaderNotice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotice.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const PanelHeaderNotices = ({
  frames,
  panelId
}) => {
  const openInspect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e, tab) => {
    e.stopPropagation();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
      inspect: panelId,
      inspectTab: tab
    });
  }, [panelId]); // dedupe on severity

  const notices = {};

  for (const frame of frames) {
    if (!frame.meta || !frame.meta.notices) {
      continue;
    }

    for (const notice of frame.meta.notices) {
      notices[notice.severity] = notice;
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: Object.values(notices).map(notice => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PanelHeaderNotice__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderNotice, {
      notice: notice,
      onClick: openInspect
    }, notice.severity))
  });
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "seriesVisibilityConfigFactory": () => (/* binding */ seriesVisibilityConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");


const displayOverrideRef = 'hideSeriesFrom';
const isHideSeriesOverride = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isSystemOverrideWithRef)(displayOverrideRef);
function seriesVisibilityConfigFactory(label, mode, fieldConfig, data) {
  const {
    overrides
  } = fieldConfig;
  const displayName = label;
  const currentIndex = overrides.findIndex(isHideSeriesOverride);

  if (currentIndex < 0) {
    if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
      const override = createOverride([displayName]);
      return Object.assign({}, fieldConfig, {
        overrides: [...fieldConfig.overrides, override]
      });
    }

    const displayNames = getDisplayNames(data, displayName);
    const override = createOverride(displayNames);
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, override]
    });
  }

  const overridesCopy = Array.from(overrides);
  const [current] = overridesCopy.splice(currentIndex, 1);

  if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
    const existing = getExistingDisplayNames(current);

    if (existing[0] === displayName && existing.length === 1) {
      return Object.assign({}, fieldConfig, {
        overrides: overridesCopy
      });
    }

    const override = createOverride([displayName]);
    return Object.assign({}, fieldConfig, {
      overrides: [...overridesCopy, override]
    });
  }

  const override = createExtendedOverride(current, displayName);

  if (allFieldsAreExcluded(override, data)) {
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  return Object.assign({}, fieldConfig, {
    overrides: [...overridesCopy, override]
  });
}

function createOverride(names, mode = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude, property) {
  var _property;

  property = (_property = property) !== null && _property !== void 0 ? _property : {
    id: 'custom.hideFrom',
    value: {
      viz: true,
      legend: false,
      tooltip: false
    }
  };
  return {
    __systemRef: displayOverrideRef,
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byNames,
      options: {
        mode: mode,
        names: names,
        prefix: mode === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude ? 'All except:' : undefined,
        readOnly: true
      }
    },
    properties: [Object.assign({}, property, {
      value: {
        viz: true,
        legend: false,
        tooltip: false
      }
    })]
  };
}

const createExtendedOverride = (current, displayName, mode = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude) => {
  const property = current.properties.find(p => p.id === 'custom.hideFrom');
  const existing = getExistingDisplayNames(current);
  const index = existing.findIndex(name => name === displayName);

  if (index < 0) {
    existing.push(displayName);
  } else {
    existing.splice(index, 1);
  }

  return createOverride(existing, mode, property);
};

const getExistingDisplayNames = rule => {
  var _rule$matcher$options;

  const names = (_rule$matcher$options = rule.matcher.options) === null || _rule$matcher$options === void 0 ? void 0 : _rule$matcher$options.names;

  if (!Array.isArray(names)) {
    return [];
  }

  return [...names];
};

const allFieldsAreExcluded = (override, data) => {
  return getExistingDisplayNames(override).length === getDisplayNames(data).length;
};

const getDisplayNames = (data, excludeName) => {
  const unique = new Set();

  for (const frame of data) {
    for (const field of frame.fields) {
      if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number) {
        continue;
      }

      const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(field, frame, data);

      if (name === excludeName) {
        continue;
      }

      unique.add(name);
    }
  }

  return Array.from(unique);
};

/***/ }),

/***/ "./public/app/features/dashboard/state/analyticsProcessor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitDashboardViewEvent": () => (/* binding */ emitDashboardViewEvent)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function emitDashboardViewEvent(dashboard) {
  const eventData = {
    dashboardId: dashboard.id,
    dashboardName: dashboard.title,
    dashboardUid: dashboard.uid,
    folderName: dashboard.meta.folderTitle,
    eventName: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.MetaAnalyticsEventName.DashboardView
  };
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportMetaAnalytics)(eventData);
}

/***/ }),

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewDashboardModelData": () => (/* binding */ getNewDashboardModelData),
/* harmony export */   "initDashboard": () => (/* binding */ initDashboard),
/* harmony export */   "removeDashboardToFetchFromLocalStorage": () => (/* binding */ removeDashboardToFetchFromLocalStorage),
/* harmony export */   "setDashboardToFetchFromLocalStorage": () => (/* binding */ setDashboardToFetchFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/keybindingSrv.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _DashboardModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _analyticsProcessor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/state/analyticsProcessor.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");




















async function fetchDashboard(args, dispatch, getState) {
  // When creating new or adding panels to a dashboard from explore we load it from local storage
  const model = app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"].getObject(DASHBOARD_FROM_LS_KEY);

  if (model) {
    removeDashboardToFetchFromLocalStorage();
    return model;
  }

  try {
    switch (args.routeName) {
      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Home:
        {
          // load home dash
          const dashDTO = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__.backendSrv.get('/api/dashboards/home'); // if user specified a custom home dashboard redirect to that

          if (dashDTO.redirectUri) {
            const newUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.replace(newUrl);
            return null;
          } // disable some actions on the default home dashboard


          dashDTO.meta.canSave = false;
          dashDTO.meta.canShare = false;
          dashDTO.meta.canStar = false;
          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Public:
        {
          return await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__.dashboardLoaderSrv.loadDashboard('public', args.urlSlug, args.accessToken);
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Normal:
        {
          const dashDTO = await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__.dashboardLoaderSrv.loadDashboard(args.urlType, args.urlSlug, args.urlUid);

          if (args.fixUrl && dashDTO.meta.url) {
            // check if the current url is correct (might be old slug)
            const dashboardUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
            const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().pathname;

            if (dashboardUrl !== currentPath) {
              // Spread current location to persist search params used for navigation
              _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.replace(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
                pathname: dashboardUrl
              }));
              console.log('not correct url correcting', dashboardUrl, currentPath);
            }
          }

          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.New:
        {
          return getNewDashboardModelData(args.urlFolderId);
        }

      default:
        throw {
          message: 'Unknown route ' + args.routeName
        };
    }
  } catch (err) {
    // Ignore cancelled errors
    if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.isFetchError)(err) && err.cancelled) {
      return null;
    }

    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFailed)({
      message: 'Failed to fetch dashboard',
      error: err
    }));
    console.error(err);
    return null;
  }
}
/**
 * This action (or saga) does everything needed to bootstrap a dashboard & dashboard model.
 * First it handles the process of fetching the dashboard, correcting the url if required (causing redirects/url updates)
 *
 * This is used both for single dashboard & solo panel routes, home & new dashboard routes.
 *
 * Then it handles the initializing of the old angular services that the dashboard components & panels still depend on
 *
 */


function initDashboard(args) {
  return async (dispatch, getState) => {
    var _args$urlUid;

    // set fetching state
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFetching)()); // fetch dashboard data

    const dashDTO = await fetchDashboard(args, dispatch, getState); // returns null if there was a redirect or error

    if (!dashDTO) {
      return;
    } // set initializing state


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitServices)()); // create model

    let dashboard;

    try {
      dashboard = new _DashboardModel__WEBPACK_IMPORTED_MODULE_16__.DashboardModel(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFailed)({
        message: 'Failed create dashboard model',
        error: err
      }));
      console.error(err);
      return;
    } // add missing orgId query param


    const storeState = getState();
    const queryParams = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getSearchObject();

    if (!queryParams.orgId) {
      // TODO this is currently not possible with the LocationService API
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
        orgId: storeState.user.orgId
      }, true);
    } // init services


    const timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__.getTimeSrv)();
    const dashboardSrv = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_8__.getDashboardSrv)(); // legacy srv state, we need this value updated for built-in annotations

    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_11__.toStateKey)((_args$urlUid = args.urlUid) !== null && _args$urlUid !== void 0 ? _args$urlUid : dashboard.uid); // template values service needs to initialize completely before the rest of the dashboard can load

    await dispatch((0,_variables_state_actions__WEBPACK_IMPORTED_MODULE_14__.initVariablesTransaction)(dashboardUid, dashboard)); // DashboardQueryRunner needs to run after all variables have been resolved so that any annotation query including a variable
    // will be correctly resolved

    const runner = (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_13__.createDashboardQueryRunner)({
      dashboard,
      timeSrv
    });
    runner.run({
      dashboard,
      range: timeSrv.timeRange()
    });

    if ((0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_15__.getIfExistsLastKey)(getState()) !== dashboardUid) {
      // if a previous dashboard has slow running variable queries the batch uid will be the new one
      // but the args.urlUid will be the same as before initVariablesTransaction was called so then we can't continue initializing
      // the previous dashboard.
      return;
    } // If dashboard is in a different init phase it means it cancelled during service init


    if (getState().dashboard.initPhase !== app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardInitPhase.Services) {
      return;
    }

    try {
      dashboard.processRepeats(); // handle auto fix experimental feature

      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__.keybindingSrv.setupDashboardBindings(dashboard);
    } catch (err) {
      if (err instanceof Error) {
        dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)('Dashboard init failed', err)));
      }

      console.error(err);
    } // send open dashboard event


    if (args.routeName !== app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.New) {
      (0,_analyticsProcessor__WEBPACK_IMPORTED_MODULE_17__.emitDashboardViewEvent)(dashboard); // Listen for changes on the current dashboard

      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__.dashboardWatcher.watch(dashboard.uid);
    } else {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__.dashboardWatcher.leave();
    } // set week start


    if (dashboard.weekStart !== '') {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.setWeekStart)(dashboard.weekStart);
    } else {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.setWeekStart)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.bootData.user.weekStart);
    } // yay we are done


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitCompleted)(dashboard));
  };
}
function getNewDashboardModelData(urlFolderId) {
  const data = {
    meta: {
      canStar: false,
      canShare: false,
      canDelete: false,
      isNew: true,
      folderId: 0
    },
    dashboard: {
      title: 'New dashboard',
      panels: [{
        type: 'add-panel',
        gridPos: {
          x: 0,
          y: 0,
          w: 12,
          h: 9
        },
        title: 'Panel Title'
      }]
    }
  };

  if (urlFolderId) {
    data.meta.folderId = parseInt(urlFolderId, 10);
  }

  return data;
}
const DASHBOARD_FROM_LS_KEY = 'DASHBOARD_FROM_LS_KEY';
function setDashboardToFetchFromLocalStorage(model) {
  app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"].setObject(DASHBOARD_FROM_LS_KEY, model);
}
function removeDashboardToFetchFromLocalStorage() {
  app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"]["delete"](DASHBOARD_FROM_LS_KEY);
}

/***/ }),

/***/ "./public/app/features/dashboard/utils/getPanelMenu.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPanelMenu": () => (/* binding */ getPanelMenu)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/guard.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _core_utils_explore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/utils/explore.ts");
/* harmony import */ var _explore_state_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");









function getPanelMenu(dashboard, panel, angularComponent) {
  const onViewPanel = event => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial({
      viewPanel: panel.id
    });
  };

  const onEditPanel = event => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial({
      editPanel: panel.id
    });
  };

  const onSharePanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.sharePanel)(dashboard, panel);
  };

  const onAddLibraryPanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.addLibraryPanel)(dashboard, panel);
  };

  const onUnlinkLibraryPanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.unlinkLibraryPanel)(panel);
  };

  const onInspectPanel = tab => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial({
      inspect: panel.id,
      inspectTab: tab
    });
  };

  const onMore = event => {
    event.preventDefault();
  };

  const onDuplicatePanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.duplicatePanel)(dashboard, panel);
  };

  const onCopyPanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.copyPanel)(panel);
  };

  const onRemovePanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.removePanel)(dashboard, panel, true);
  };

  const onNavigateToExplore = event => {
    event.preventDefault();
    const openInNewWindow = event.ctrlKey || event.metaKey ? url => window.open(`${app_core_config__WEBPACK_IMPORTED_MODULE_1__["default"].appSubUrl}${url}`) : undefined;
    app_store_store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch((0,_explore_state_main__WEBPACK_IMPORTED_MODULE_7__.navigateToExplore)(panel, {
      getDataSourceSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getDataSourceSrv,
      getTimeSrv: _services_TimeSrv__WEBPACK_IMPORTED_MODULE_8__.getTimeSrv,
      getExploreUrl: _core_utils_explore__WEBPACK_IMPORTED_MODULE_6__.getExploreUrl,
      openInNewWindow
    }));
  };

  const menu = [];

  if (!panel.isEditing) {
    menu.push({
      text: 'View',
      iconClassName: 'eye',
      onClick: onViewPanel,
      shortcut: 'v'
    });
  }

  if (dashboard.canEditPanel(panel) && !panel.isEditing) {
    menu.push({
      text: 'Edit',
      iconClassName: 'edit',
      onClick: onEditPanel,
      shortcut: 'e'
    });
  }

  menu.push({
    text: 'Share',
    iconClassName: 'share-alt',
    onClick: onSharePanel,
    shortcut: 'p s'
  });

  if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccessToExplore() && !(panel.plugin && panel.plugin.meta.skipDataQuery)) {
    menu.push({
      text: 'Explore',
      iconClassName: 'compass',
      shortcut: 'x',
      onClick: onNavigateToExplore
    });
  }

  const inspectMenu = []; // Only show these inspect actions for data plugins

  if (panel.plugin && !panel.plugin.meta.skipDataQuery) {
    inspectMenu.push({
      text: 'Data',
      onClick: e => onInspectPanel('data')
    });

    if (dashboard.meta.canEdit) {
      inspectMenu.push({
        text: 'Query',
        onClick: e => onInspectPanel('query')
      });
    }
  }

  inspectMenu.push({
    text: 'Panel JSON',
    onClick: e => onInspectPanel('json')
  });
  menu.push({
    type: 'submenu',
    text: 'Inspect',
    iconClassName: 'info-circle',
    onClick: e => onInspectPanel(),
    shortcut: 'i',
    subMenu: inspectMenu
  });
  const subMenu = [];

  if (dashboard.canEditPanel(panel) && !(panel.isViewing || panel.isEditing)) {
    subMenu.push({
      text: 'Duplicate',
      onClick: onDuplicatePanel,
      shortcut: 'p d'
    });
    subMenu.push({
      text: 'Copy',
      onClick: onCopyPanel
    });

    if ((0,app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_3__.isPanelModelLibraryPanel)(panel)) {
      subMenu.push({
        text: 'Unlink library panel',
        onClick: onUnlinkLibraryPanel
      });
    } else {
      subMenu.push({
        text: 'Create library panel',
        onClick: onAddLibraryPanel
      });
    }
  } // add old angular panel options


  if (angularComponent) {
    const scope = angularComponent.getScope();
    const panelCtrl = scope.$$childHead.ctrl;
    const angularMenuItems = panelCtrl.getExtendedMenu();

    for (const item of angularMenuItems) {
      const reactItem = {
        text: item.text,
        href: item.href,
        shortcut: item.shortcut
      };

      if (item.click) {
        reactItem.onClick = () => {
          scope.$eval(item.click, {
            ctrl: panelCtrl
          });
        };
      }

      subMenu.push(reactItem);
    }
  }

  if (!panel.isEditing && subMenu.length) {
    menu.push({
      type: 'submenu',
      text: 'More...',
      iconClassName: 'cube',
      subMenu,
      onClick: onMore
    });
  }

  if (dashboard.canEditPanel(panel) && !panel.isEditing && !panel.isViewing) {
    menu.push({
      type: 'divider',
      text: ''
    });
    menu.push({
      text: 'Remove',
      iconClassName: 'trash-alt',
      onClick: onRemovePanel,
      shortcut: 'p r'
    });
  }

  return menu;
}

/***/ }),

/***/ "./public/app/features/dashboard/utils/loadSnapshotData.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadSnapshotData": () => (/* binding */ loadSnapshotData)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/SnapshotWorker.ts");
/* harmony import */ var _query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/query/state/runRequest.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");






function loadSnapshotData(panel, dashboard) {
  const data = (0,_query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__.getProcessedDataFrames)(panel.snapshotData);
  const worker = new _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_2__.SnapshotWorker();
  const options = {
    dashboard,
    range: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)()
  };
  const annotationEvents = worker.canWork(options) ? worker.getAnnotationsInSnapshot(dashboard, panel.id) : [];
  const annotations = [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(annotationEvents)];
  const timeData = (0,_panel__WEBPACK_IMPORTED_MODULE_5__.applyPanelTimeOverrides)(panel, (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__.getTimeSrv)().timeRange());
  return {
    timeRange: timeData.timeRange,
    state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
    series: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.applyFieldOverrides)({
      data,
      fieldConfig: {
        defaults: {},
        overrides: []
      },
      replaceVariables: panel.replaceVariables,
      fieldConfigRegistry: panel.plugin.fieldConfigRegistry,
      theme: app_core_config__WEBPACK_IMPORTED_MODULE_1__.config.theme2,
      timeZone: dashboard.getTimezone()
    }),
    annotations
  };
}

/***/ }),

/***/ "./public/app/features/inspector/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectTab": () => (/* binding */ InspectTab)
/* harmony export */ });
let InspectTab;

(function (InspectTab) {
  InspectTab["Data"] = "data";
  InspectTab["Meta"] = "meta";
  InspectTab["Error"] = "error";
  InspectTab["Stats"] = "stats";
  InspectTab["JSON"] = "json";
  InspectTab["Query"] = "query";
  InspectTab["Actions"] = "actions";
})(InspectTab || (InspectTab = {}));

/***/ }),

/***/ "./public/app/features/panel/panellinks/linkSuppliers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFieldLinksSupplier": () => (/* binding */ getFieldLinksSupplier),
/* harmony export */   "getPanelLinksSupplier": () => (/* binding */ getPanelLinksSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _link_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");



/**
 * Link suppliers creates link models based on a link origin
 */
const getFieldLinksSupplier = value => {
  const links = value.field.links;

  if (!links || links.length === 0) {
    return undefined;
  }

  return {
    getLinks: replaceVariables => {
      const scopedVars = {};

      if (value.view) {
        const {
          dataFrame
        } = value.view;
        scopedVars['__series'] = {
          value: {
            name: dataFrame.name,
            refId: dataFrame.refId
          },
          text: 'Series'
        };
        const field = value.colIndex !== undefined ? dataFrame.fields[value.colIndex] : undefined;

        if (field) {
          scopedVars['__field'] = {
            value: {
              name: field.name,
              labels: field.labels
            },
            text: 'Field'
          };

          if (value.rowIndex !== undefined && value.rowIndex >= 0) {
            const {
              timeField
            } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getTimeField)(dataFrame);
            scopedVars['__value'] = {
              value: {
                raw: field.values.get(value.rowIndex),
                numeric: value.display.numeric,
                text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(value.display),
                time: timeField ? timeField.values.get(value.rowIndex) : undefined
              },
              text: 'Value'
            };
          } // Expose other values on the row


          if (value.view) {
            scopedVars['__data'] = {
              value: {
                name: dataFrame.name,
                refId: dataFrame.refId,
                fields: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayValuesProxy)({
                  frame: dataFrame,
                  rowIndex: value.rowIndex
                })
              },
              text: 'Data'
            };
          }
        } else {
          // calculation
          scopedVars['__value'] = {
            value: {
              raw: value.display.numeric,
              numeric: value.display.numeric,
              text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(value.display),
              calc: value.name
            },
            text: 'Value'
          };
        }
      } else {
        console.log('VALUE', value);
      }

      const replace = (value, vars, fmt) => {
        const finalVars = Object.assign({}, scopedVars, vars);
        return replaceVariables(value, finalVars, fmt);
      };

      return links.map(link => {
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__.getLinkSrv)().getDataLinkUIModel(link, replace, value);
      });
    }
  };
};
const getPanelLinksSupplier = panel => {
  const links = panel.links;

  if (!links || links.length === 0) {
    return undefined;
  }

  return {
    getLinks: () => {
      return links.map(link => {
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__.getLinkSrv)().getDataLinkUIModel(link, panel.replaceVariables, panel);
      });
    }
  };
};

/***/ }),

/***/ "./public/app/features/panel/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPanelStateForModel": () => (/* binding */ getPanelStateForModel)
/* harmony export */ });
function getPanelStateForModel(state, model) {
  return state.panels[model.key];
}

/***/ }),

/***/ "./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeSeriesColorConfigFactory": () => (/* binding */ changeSeriesColorConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

const changeSeriesColorConfigFactory = (label, color, fieldConfig) => {
  const {
    overrides
  } = fieldConfig;
  const currentIndex = fieldConfig.overrides.findIndex(override => {
    return override.matcher.id === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName && override.matcher.options === label;
  });

  if (currentIndex < 0) {
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, createOverride(label, color)]
    });
  }

  const overridesCopy = Array.from(overrides);
  const existing = overridesCopy[currentIndex];
  const propertyIndex = existing.properties.findIndex(p => p.id === 'color');

  if (propertyIndex < 0) {
    overridesCopy[currentIndex] = Object.assign({}, existing, {
      properties: [...existing.properties, createProperty(color)]
    });
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  const propertiesCopy = Array.from(existing.properties);
  propertiesCopy[propertyIndex] = createProperty(color);
  overridesCopy[currentIndex] = Object.assign({}, existing, {
    properties: propertiesCopy
  });
  return Object.assign({}, fieldConfig, {
    overrides: overridesCopy
  });
};

const createOverride = (label, color) => {
  return {
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
      options: label
    },
    properties: [createProperty(color)]
  };
};

const createProperty = color => {
  return {
    id: 'color',
    value: {
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
      fixedColor: color
    }
  };
};

/***/ }),

/***/ "./public/app/routes/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSoloRoute": () => (/* binding */ isSoloRoute)
/* harmony export */ });
function isSoloRoute(path) {
  return /(d-solo|dashboard-solo)/.test(path === null || path === void 0 ? void 0 : path.toLowerCase());
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixXQUFOLEVBQS9CLENBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9jb250YWluZXJzL1NvbG9QYW5lbFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9EYXNoYm9hcmRQYW5lbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL0xhenlMb2FkZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbENocm9tZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsQ2hyb21lQW5ndWxhci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXJDb3JuZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbEhlYWRlci9QYW5lbEhlYWRlckxvYWRpbmdJbmRpY2F0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbEhlYWRlci9QYW5lbEhlYWRlck1lbnUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbEhlYWRlci9QYW5lbEhlYWRlck1lbnVQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyTWVudVRyaWdnZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbEhlYWRlci9QYW5lbEhlYWRlck1lbnVXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXJOb3RpY2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbEhlYWRlci9QYW5lbEhlYWRlck5vdGljZXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9TZXJpZXNWaXNpYmlsaXR5Q29uZmlnRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUvYW5hbHl0aWNzUHJvY2Vzc29yLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9pbml0RGFzaGJvYXJkLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9nZXRQYW5lbE1lbnUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3V0aWxzL2xvYWRTbmFwc2hvdERhdGEudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvaW5zcGVjdG9yL3R5cGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BhbmVsL3BhbmVsbGlua3MvbGlua1N1cHBsaWVycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wYW5lbC9zdGF0ZS9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC90aW1lc2VyaWVzL292ZXJyaWRlcy9jb2xvclNlcmllc0NvbmZpZ0ZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcm91dGVzL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5cbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCwgUGFuZWxNb2RlbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IERhc2hib2FyZFBhbmVsIH0gZnJvbSAnLi4vZGFzaGdyaWQvRGFzaGJvYXJkUGFuZWwnO1xuaW1wb3J0IHsgaW5pdERhc2hib2FyZCB9IGZyb20gJy4uL3N0YXRlL2luaXREYXNoYm9hcmQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZFBhZ2VSb3V0ZVBhcmFtcyB7XG4gIHVpZD86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgc2x1Zz86IHN0cmluZztcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBkYXNoYm9hcmQ6IHN0YXRlLmRhc2hib2FyZC5nZXRNb2RlbCgpLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaW5pdERhc2hib2FyZCxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPERhc2hib2FyZFBhZ2VSb3V0ZVBhcmFtcywgeyBwYW5lbElkOiBzdHJpbmcgfT4gJlxuICBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIHBhbmVsOiBQYW5lbE1vZGVsIHwgbnVsbDtcbiAgbm90Rm91bmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBTb2xvUGFuZWxQYWdlIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgcGFuZWw6IG51bGwsXG4gICAgbm90Rm91bmQ6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbWF0Y2gsIHJvdXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5wcm9wcy5pbml0RGFzaGJvYXJkKHtcbiAgICAgIHVybFNsdWc6IG1hdGNoLnBhcmFtcy5zbHVnLFxuICAgICAgdXJsVWlkOiBtYXRjaC5wYXJhbXMudWlkLFxuICAgICAgdXJsVHlwZTogbWF0Y2gucGFyYW1zLnR5cGUsXG4gICAgICByb3V0ZU5hbWU6IHJvdXRlLnJvdXRlTmFtZSxcbiAgICAgIGZpeFVybDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBnZXRQYW5lbElkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHRoaXMucHJvcHMucXVlcnlQYXJhbXMucGFuZWxJZCA/PyAnMCcsIDEwKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgY29uc3QgeyBkYXNoYm9hcmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRhc2hib2FyZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHdlIGp1c3QgZ290IGEgbmV3IGRhc2hib2FyZFxuICAgIGlmICghcHJldlByb3BzLmRhc2hib2FyZCB8fCBwcmV2UHJvcHMuZGFzaGJvYXJkLnVpZCAhPT0gZGFzaGJvYXJkLnVpZCkge1xuICAgICAgY29uc3QgcGFuZWwgPSBkYXNoYm9hcmQuZ2V0UGFuZWxCeVVybElkKHRoaXMucHJvcHMucXVlcnlQYXJhbXMucGFuZWxJZCk7XG5cbiAgICAgIGlmICghcGFuZWwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5vdEZvdW5kOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYW5lbCB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTb2xvUGFuZWxcbiAgICAgICAgZGFzaGJvYXJkPXt0aGlzLnByb3BzLmRhc2hib2FyZH1cbiAgICAgICAgbm90Rm91bmQ9e3RoaXMuc3RhdGUubm90Rm91bmR9XG4gICAgICAgIHBhbmVsPXt0aGlzLnN0YXRlLnBhbmVsfVxuICAgICAgICBwYW5lbElkPXt0aGlzLmdldFBhbmVsSWQoKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvbG9QYW5lbFByb3BzIGV4dGVuZHMgU3RhdGUge1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsIHwgbnVsbDtcbiAgcGFuZWxJZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgU29sb1BhbmVsID0gKHsgZGFzaGJvYXJkLCBub3RGb3VuZCwgcGFuZWwsIHBhbmVsSWQgfTogU29sb1BhbmVsUHJvcHMpID0+IHtcbiAgaWYgKG5vdEZvdW5kKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZXJyb3JcIj5QYW5lbCB3aXRoIGlkIHtwYW5lbElkfSBub3QgZm91bmQ8L2Rpdj47XG4gIH1cblxuICBpZiAoIXBhbmVsIHx8ICFkYXNoYm9hcmQpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nICYgaW5pdGlhbGl6aW5nIGRhc2hib2FyZDwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1zb2xvXCI+XG4gICAgICA8QXV0b1NpemVyPlxuICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgICAgICAgaWYgKHdpZHRoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEYXNoYm9hcmRQYW5lbFxuICAgICAgICAgICAgICBzdGF0ZUtleT17cGFuZWwua2V5fVxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICBkYXNoYm9hcmQ9e2Rhc2hib2FyZH1cbiAgICAgICAgICAgICAgcGFuZWw9e3BhbmVsfVxuICAgICAgICAgICAgICBpc0VkaXRpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICBpc1ZpZXdpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICBsYXp5PXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvQXV0b1NpemVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKFNvbG9QYW5lbFBhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGluaXRQYW5lbFN0YXRlIH0gZnJvbSAnLi4vLi4vcGFuZWwvc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXRQYW5lbEluc3RhbmNlU3RhdGUgfSBmcm9tICcuLi8uLi9wYW5lbC9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCwgUGFuZWxNb2RlbCB9IGZyb20gJy4uL3N0YXRlJztcblxuaW1wb3J0IHsgTGF6eUxvYWRlciB9IGZyb20gJy4vTGF6eUxvYWRlcic7XG5pbXBvcnQgeyBQYW5lbENocm9tZSB9IGZyb20gJy4vUGFuZWxDaHJvbWUnO1xuaW1wb3J0IHsgUGFuZWxDaHJvbWVBbmd1bGFyIH0gZnJvbSAnLi9QYW5lbENocm9tZUFuZ3VsYXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE93blByb3BzIHtcbiAgcGFuZWw6IFBhbmVsTW9kZWw7XG4gIHN0YXRlS2V5OiBzdHJpbmc7XG4gIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIGlzRWRpdGluZzogYm9vbGVhbjtcbiAgaXNWaWV3aW5nOiBib29sZWFuO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGF6eT86IGJvb2xlYW47XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSwgcHJvcHM6IE93blByb3BzKSA9PiB7XG4gIGNvbnN0IHBhbmVsU3RhdGUgPSBzdGF0ZS5wYW5lbHNbcHJvcHMuc3RhdGVLZXldO1xuICBpZiAoIXBhbmVsU3RhdGUpIHtcbiAgICByZXR1cm4geyBwbHVnaW46IG51bGwgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGx1Z2luOiBwYW5lbFN0YXRlLnBsdWdpbixcbiAgICBpbnN0YW5jZVN0YXRlOiBwYW5lbFN0YXRlLmluc3RhbmNlU3RhdGUsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGluaXRQYW5lbFN0YXRlLFxuICBzZXRQYW5lbEluc3RhbmNlU3RhdGUsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkUGFuZWxVbmNvbm5lY3RlZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogUGFydGlhbDxQcm9wcz4gPSB7XG4gICAgbGF6eTogdHJ1ZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnBhbmVsLmlzSW5WaWV3ID0gIXRoaXMucHJvcHMubGF6eTtcbiAgICBpZiAoIXRoaXMucHJvcHMubGF6eSkge1xuICAgICAgdGhpcy5vblBhbmVsTG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5zdGFuY2VTdGF0ZUNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRQYW5lbEluc3RhbmNlU3RhdGUoeyBrZXk6IHRoaXMucHJvcHMuc3RhdGVLZXksIHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uVmlzaWJpbGl0eUNoYW5nZSA9ICh2OiBib29sZWFuKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5wYW5lbC5pc0luVmlldyA9IHY7XG4gIH07XG5cbiAgb25QYW5lbExvYWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnBsdWdpbikge1xuICAgICAgdGhpcy5wcm9wcy5pbml0UGFuZWxTdGF0ZSh0aGlzLnByb3BzLnBhbmVsKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkLCBwYW5lbCwgaXNWaWV3aW5nLCBpc0VkaXRpbmcsIHdpZHRoLCBoZWlnaHQsIGxhenksIHBsdWdpbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHJlbmRlclBhbmVsQ2hyb21lID0gKGlzSW5WaWV3OiBib29sZWFuKSA9PlxuICAgICAgcGx1Z2luICYmXG4gICAgICAocGx1Z2luLmFuZ3VsYXJQYW5lbEN0cmwgPyAoXG4gICAgICAgIDxQYW5lbENocm9tZUFuZ3VsYXJcbiAgICAgICAgICBwbHVnaW49e3BsdWdpbn1cbiAgICAgICAgICBwYW5lbD17cGFuZWx9XG4gICAgICAgICAgZGFzaGJvYXJkPXtkYXNoYm9hcmR9XG4gICAgICAgICAgaXNWaWV3aW5nPXtpc1ZpZXdpbmd9XG4gICAgICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XG4gICAgICAgICAgaXNJblZpZXc9e2lzSW5WaWV3fVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQYW5lbENocm9tZVxuICAgICAgICAgIHBsdWdpbj17cGx1Z2lufVxuICAgICAgICAgIHBhbmVsPXtwYW5lbH1cbiAgICAgICAgICBkYXNoYm9hcmQ9e2Rhc2hib2FyZH1cbiAgICAgICAgICBpc1ZpZXdpbmc9e2lzVmlld2luZ31cbiAgICAgICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cbiAgICAgICAgICBpc0luVmlldz17aXNJblZpZXd9XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIG9uSW5zdGFuY2VTdGF0ZUNoYW5nZT17dGhpcy5vbkluc3RhbmNlU3RhdGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICApKTtcblxuICAgIHJldHVybiBsYXp5ID8gKFxuICAgICAgPExhenlMb2FkZXIgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gb25DaGFuZ2U9e3RoaXMub25WaXNpYmlsaXR5Q2hhbmdlfSBvbkxvYWQ9e3RoaXMub25QYW5lbExvYWR9PlxuICAgICAgICB7KHsgaXNJblZpZXcgfSkgPT4gcmVuZGVyUGFuZWxDaHJvbWUoaXNJblZpZXcpfVxuICAgICAgPC9MYXp5TG9hZGVyPlxuICAgICkgOiAoXG4gICAgICByZW5kZXJQYW5lbENocm9tZSh0cnVlKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZFBhbmVsID0gY29ubmVjdG9yKERhc2hib2FyZFBhbmVsVW5jb25uZWN0ZWQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3RPbmNlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgdXNlVW5pcXVlSWQgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvdXNlVW5pcXVlSWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB8ICgoeyBpc0luVmlldyB9OiB7IGlzSW5WaWV3OiBib29sZWFuIH0pID0+IFJlYWN0LlJlYWN0Tm9kZSk7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIG9uTG9hZD86ICgpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlPzogKGlzSW5WaWV3OiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGF6eUxvYWRlcih7IGNoaWxkcmVuLCB3aWR0aCwgaGVpZ2h0LCBvbkxvYWQsIG9uQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IGlkID0gdXNlVW5pcXVlSWQoKTtcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzSW5WaWV3LCBzZXRJc0luVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdE9uY2UoKCkgPT4ge1xuICAgIExhenlMb2FkZXIuYWRkQ2FsbGJhY2soaWQsIChlbnRyeSkgPT4ge1xuICAgICAgaWYgKCFsb2FkZWQgJiYgZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICBvbkxvYWQ/LigpO1xuICAgICAgfVxuXG4gICAgICBzZXRJc0luVmlldyhlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICBvbkNoYW5nZT8uKGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdyYXBwZXJFbCA9IHdyYXBwZXJSZWYuY3VycmVudDtcblxuICAgIGlmICh3cmFwcGVyRWwpIHtcbiAgICAgIExhenlMb2FkZXIub2JzZXJ2ZXIub2JzZXJ2ZSh3cmFwcGVyRWwpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkZWxldGUgTGF6eUxvYWRlci5jYWxsYmFja3NbaWRdO1xuICAgICAgd3JhcHBlckVsICYmIExhenlMb2FkZXIub2JzZXJ2ZXIudW5vYnNlcnZlKHdyYXBwZXJFbCk7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoTGF6eUxvYWRlci5jYWxsYmFja3MpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBMYXp5TG9hZGVyLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9e2lkfSByZWY9e3dyYXBwZXJSZWZ9IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+XG4gICAgICB7bG9hZGVkICYmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7IGlzSW5WaWV3IH0pIDogY2hpbGRyZW4pfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5MYXp5TG9hZGVyLmNhbGxiYWNrcyA9IHt9IGFzIFJlY29yZDxzdHJpbmcsIChlOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KSA9PiB2b2lkPjtcbkxhenlMb2FkZXIuYWRkQ2FsbGJhY2sgPSAoaWQ6IHN0cmluZywgYzogKGU6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkpID0+IHZvaWQpID0+IChMYXp5TG9hZGVyLmNhbGxiYWNrc1tpZF0gPSBjKTtcbkxhenlMb2FkZXIub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gIChlbnRyaWVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBMYXp5TG9hZGVyLmNhbGxiYWNrc1tlbnRyeS50YXJnZXQuaWRdKGVudHJ5KTtcbiAgICB9XG4gIH0sXG4gIHsgcm9vdE1hcmdpbjogJzEwMHB4JyB9XG4pO1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBBYnNvbHV0ZVRpbWVSYW5nZSxcbiAgQW5ub3RhdGlvbkNoYW5nZUV2ZW50LFxuICBBbm5vdGF0aW9uRXZlbnRVSU1vZGVsLFxuICBDb3JlQXBwLFxuICBEYXNoYm9hcmRDdXJzb3JTeW5jLFxuICBFdmVudEZpbHRlck9wdGlvbnMsXG4gIEZpZWxkQ29uZmlnU291cmNlLFxuICBnZXREZWZhdWx0VGltZVJhbmdlLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUGFuZWxQbHVnaW4sXG4gIFBhbmVsUGx1Z2luTWV0YSxcbiAgVGltZVJhbmdlLFxuICB0b0RhdGFGcmFtZURUTyxcbiAgdG9VdGMsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBjb25maWcsIGxvY2F0aW9uU2VydmljZSwgUmVmcmVzaEV2ZW50IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBWaXpMZWdlbmRPcHRpb25zIH0gZnJvbSAnQGdyYWZhbmEvc2NoZW1hJztcbmltcG9ydCB7IEVycm9yQm91bmRhcnksIFBhbmVsQ29udGV4dCwgUGFuZWxDb250ZXh0UHJvdmlkZXIsIFNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUEFORUxfQk9SREVSIH0gZnJvbSAnYXBwL2NvcmUvY29uc3RhbnRzJztcbmltcG9ydCB7IHByb2ZpbGVyIH0gZnJvbSAnYXBwL2NvcmUvcHJvZmlsZXInO1xuaW1wb3J0IHsgYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3V0aWxzL3BhbmVsJztcbmltcG9ydCB7IGNoYW5nZVNlcmllc0NvbG9yQ29uZmlnRmFjdG9yeSB9IGZyb20gJ2FwcC9wbHVnaW5zL3BhbmVsL3RpbWVzZXJpZXMvb3ZlcnJpZGVzL2NvbG9yU2VyaWVzQ29uZmlnRmFjdG9yeSc7XG5pbXBvcnQgeyBSZW5kZXJFdmVudCB9IGZyb20gJ2FwcC90eXBlcy9ldmVudHMnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBpc1NvbG9Sb3V0ZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcy91dGlscyc7XG5pbXBvcnQgeyBkZWxldGVBbm5vdGF0aW9uLCBzYXZlQW5ub3RhdGlvbiwgdXBkYXRlQW5ub3RhdGlvbiB9IGZyb20gJy4uLy4uL2Fubm90YXRpb25zL2FwaSc7XG5pbXBvcnQgeyBnZXREYXNoYm9hcmRRdWVyeVJ1bm5lciB9IGZyb20gJy4uLy4uL3F1ZXJ5L3N0YXRlL0Rhc2hib2FyZFF1ZXJ5UnVubmVyL0Rhc2hib2FyZFF1ZXJ5UnVubmVyJztcbmltcG9ydCB7IGdldFRpbWVTcnYsIFRpbWVTcnYgfSBmcm9tICcuLi9zZXJ2aWNlcy9UaW1lU3J2JztcbmltcG9ydCB7IERhc2hib2FyZE1vZGVsLCBQYW5lbE1vZGVsIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgbG9hZFNuYXBzaG90RGF0YSB9IGZyb20gJy4uL3V0aWxzL2xvYWRTbmFwc2hvdERhdGEnO1xuXG5pbXBvcnQgeyBQYW5lbEhlYWRlciB9IGZyb20gJy4vUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXInO1xuaW1wb3J0IHsgc2VyaWVzVmlzaWJpbGl0eUNvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuL1Nlcmllc1Zpc2liaWxpdHlDb25maWdGYWN0b3J5JztcbmltcG9ydCB7IGxpdmVUaW1lciB9IGZyb20gJy4vbGl2ZVRpbWVyJztcblxuY29uc3QgREVGQVVMVF9QTFVHSU5fRVJST1IgPSAnRXJyb3IgaW4gcGx1Z2luJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHBhbmVsOiBQYW5lbE1vZGVsO1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICBwbHVnaW46IFBhbmVsUGx1Z2luO1xuICBpc1ZpZXdpbmc6IGJvb2xlYW47XG4gIGlzRWRpdGluZzogYm9vbGVhbjtcbiAgaXNJblZpZXc6IGJvb2xlYW47XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBvbkluc3RhbmNlU3RhdGVDaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNGaXJzdExvYWQ6IGJvb2xlYW47XG4gIHJlbmRlckNvdW50ZXI6IG51bWJlcjtcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xuICByZWZyZXNoV2hlbkluVmlldzogYm9vbGVhbjtcbiAgY29udGV4dDogUGFuZWxDb250ZXh0O1xuICBkYXRhOiBQYW5lbERhdGE7XG4gIGxpdmVUaW1lPzogVGltZVJhbmdlO1xufVxuXG5leHBvcnQgY2xhc3MgUGFuZWxDaHJvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBwcml2YXRlIHJlYWRvbmx5IHRpbWVTcnY6IFRpbWVTcnYgPSBnZXRUaW1lU3J2KCk7XG4gIHByaXZhdGUgc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSBldmVudEZpbHRlcjogRXZlbnRGaWx0ZXJPcHRpb25zID0geyBvbmx5TG9jYWw6IHRydWUgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBDYW4gdGhpcyBldmVudEJ1cyBiZSBvbiBQYW5lbE1vZGVsPyAgd2hlbiB3ZSBoYXZlIG1vcmUgY29tcGxleCBldmVudCBmaWx0ZXJpbmcsIHRoYXQgbWF5IGJlIGEgYmV0dGVyIG9wdGlvblxuICAgIGNvbnN0IGV2ZW50QnVzID0gcHJvcHMuZGFzaGJvYXJkLmV2ZW50cy5uZXdTY29wZWRCdXMoYHBhbmVsOiR7cHJvcHMucGFuZWwuaWR9YCwgdGhpcy5ldmVudEZpbHRlcik7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNGaXJzdExvYWQ6IHRydWUsXG4gICAgICByZW5kZXJDb3VudGVyOiAwLFxuICAgICAgcmVmcmVzaFdoZW5JblZpZXc6IGZhbHNlLFxuICAgICAgY29udGV4dDoge1xuICAgICAgICBldmVudEJ1cyxcbiAgICAgICAgYXBwOiB0aGlzLmdldFBhbmVsQ29udGV4dEFwcCgpLFxuICAgICAgICBzeW5jOiB0aGlzLmdldFN5bmMsXG4gICAgICAgIG9uU2VyaWVzQ29sb3JDaGFuZ2U6IHRoaXMub25TZXJpZXNDb2xvckNoYW5nZSxcbiAgICAgICAgb25Ub2dnbGVTZXJpZXNWaXNpYmlsaXR5OiB0aGlzLm9uU2VyaWVzVmlzaWJpbGl0eUNoYW5nZSxcbiAgICAgICAgb25Bbm5vdGF0aW9uQ3JlYXRlOiB0aGlzLm9uQW5ub3RhdGlvbkNyZWF0ZSxcbiAgICAgICAgb25Bbm5vdGF0aW9uVXBkYXRlOiB0aGlzLm9uQW5ub3RhdGlvblVwZGF0ZSxcbiAgICAgICAgb25Bbm5vdGF0aW9uRGVsZXRlOiB0aGlzLm9uQW5ub3RhdGlvbkRlbGV0ZSxcbiAgICAgICAgY2FuQWRkQW5ub3RhdGlvbnM6IHRoaXMuY2FuQWRkQW5ub3RhdGlvbixcbiAgICAgICAgb25JbnN0YW5jZVN0YXRlQ2hhbmdlOiB0aGlzLm9uSW5zdGFuY2VTdGF0ZUNoYW5nZSxcbiAgICAgICAgb25Ub2dnbGVMZWdlbmRTb3J0OiB0aGlzLm9uVG9nZ2xlTGVnZW5kU29ydCxcbiAgICAgICAgY2FuRWRpdEFubm90YXRpb25zOiB0aGlzLmNhbkVkaXRBbm5vdGF0aW9uLFxuICAgICAgICBjYW5EZWxldGVBbm5vdGF0aW9uczogdGhpcy5jYW5EZWxldGVBbm5vdGF0aW9uLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHRoaXMuZ2V0SW5pdGlhbFBhbmVsRGF0YVN0YXRlKCksXG4gICAgfTtcbiAgfVxuXG4gIGNhbkVkaXREYXNoYm9hcmQgPSAoKSA9PiBCb29sZWFuKHRoaXMucHJvcHMuZGFzaGJvYXJkLm1ldGEuY2FuRWRpdCB8fCB0aGlzLnByb3BzLmRhc2hib2FyZC5tZXRhLmNhbk1ha2VFZGl0YWJsZSk7XG5cbiAgY2FuQWRkQW5ub3RhdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgY2FuQWRkID0gdHJ1ZTtcblxuICAgIGlmIChjb250ZXh0U3J2LmFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGNhbkFkZCA9ICEhdGhpcy5wcm9wcy5kYXNoYm9hcmQubWV0YS5hbm5vdGF0aW9uc1Blcm1pc3Npb25zPy5kYXNoYm9hcmQuY2FuQWRkO1xuICAgIH1cbiAgICByZXR1cm4gY2FuQWRkICYmIHRoaXMuY2FuRWRpdERhc2hib2FyZCgpO1xuICB9O1xuXG4gIGNhbkVkaXRBbm5vdGF0aW9uID0gKGRhc2hib2FyZElkOiBudW1iZXIpID0+IHtcbiAgICBsZXQgY2FuRWRpdCA9IHRydWU7XG5cbiAgICBpZiAoY29udGV4dFNydi5hY2Nlc3NDb250cm9sRW5hYmxlZCgpKSB7XG4gICAgICBpZiAoZGFzaGJvYXJkSWQgIT09IDApIHtcbiAgICAgICAgY2FuRWRpdCA9ICEhdGhpcy5wcm9wcy5kYXNoYm9hcmQubWV0YS5hbm5vdGF0aW9uc1Blcm1pc3Npb25zPy5kYXNoYm9hcmQuY2FuRWRpdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbkVkaXQgPSAhIXRoaXMucHJvcHMuZGFzaGJvYXJkLm1ldGEuYW5ub3RhdGlvbnNQZXJtaXNzaW9ucz8ub3JnYW5pemF0aW9uLmNhbkVkaXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYW5FZGl0ICYmIHRoaXMuY2FuRWRpdERhc2hib2FyZCgpO1xuICB9O1xuXG4gIGNhbkRlbGV0ZUFubm90YXRpb24gPSAoZGFzaGJvYXJkSWQ6IG51bWJlcikgPT4ge1xuICAgIGxldCBjYW5EZWxldGUgPSB0cnVlO1xuXG4gICAgaWYgKGNvbnRleHRTcnYuYWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgICAgaWYgKGRhc2hib2FyZElkICE9PSAwKSB7XG4gICAgICAgIGNhbkRlbGV0ZSA9ICEhdGhpcy5wcm9wcy5kYXNoYm9hcmQubWV0YS5hbm5vdGF0aW9uc1Blcm1pc3Npb25zPy5kYXNoYm9hcmQuY2FuRGVsZXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuRGVsZXRlID0gISF0aGlzLnByb3BzLmRhc2hib2FyZC5tZXRhLmFubm90YXRpb25zUGVybWlzc2lvbnM/Lm9yZ2FuaXphdGlvbi5jYW5EZWxldGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYW5EZWxldGUgJiYgdGhpcy5jYW5FZGl0RGFzaGJvYXJkKCk7XG4gIH07XG5cbiAgLy8gRHVlIHRvIGEgbXV0YWJsZSBwYW5lbCBtb2RlbCB3ZSBnZXQgdGhlIHN5bmMgc2V0dGluZ3MgdmlhIGZ1bmN0aW9uIHRoYXQgcHJvYWN0aXZlbHkgcmVhZHMgZnJvbSB0aGUgbW9kZWxcbiAgZ2V0U3luYyA9ICgpID0+ICh0aGlzLnByb3BzLmlzRWRpdGluZyA/IERhc2hib2FyZEN1cnNvclN5bmMuT2ZmIDogdGhpcy5wcm9wcy5kYXNoYm9hcmQuZ3JhcGhUb29sdGlwKTtcblxuICBvbkluc3RhbmNlU3RhdGVDaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25JbnN0YW5jZVN0YXRlQ2hhbmdlKHZhbHVlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29udGV4dDoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmNvbnRleHQsXG4gICAgICAgIGluc3RhbmNlU3RhdGU6IHZhbHVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBnZXRQYW5lbENvbnRleHRBcHAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNFZGl0aW5nKSB7XG4gICAgICByZXR1cm4gQ29yZUFwcC5QYW5lbEVkaXRvcjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaXNWaWV3aW5nKSB7XG4gICAgICByZXR1cm4gQ29yZUFwcC5QYW5lbFZpZXdlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gQ29yZUFwcC5EYXNoYm9hcmQ7XG4gIH1cblxuICBvblNlcmllc0NvbG9yQ2hhbmdlID0gKGxhYmVsOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLm9uRmllbGRDb25maWdDaGFuZ2UoY2hhbmdlU2VyaWVzQ29sb3JDb25maWdGYWN0b3J5KGxhYmVsLCBjb2xvciwgdGhpcy5wcm9wcy5wYW5lbC5maWVsZENvbmZpZykpO1xuICB9O1xuXG4gIG9uU2VyaWVzVmlzaWJpbGl0eUNoYW5nZSA9IChsYWJlbDogc3RyaW5nLCBtb2RlOiBTZXJpZXNWaXNpYmlsaXR5Q2hhbmdlTW9kZSkgPT4ge1xuICAgIHRoaXMub25GaWVsZENvbmZpZ0NoYW5nZShcbiAgICAgIHNlcmllc1Zpc2liaWxpdHlDb25maWdGYWN0b3J5KGxhYmVsLCBtb2RlLCB0aGlzLnByb3BzLnBhbmVsLmZpZWxkQ29uZmlnLCB0aGlzLnN0YXRlLmRhdGEuc2VyaWVzKVxuICAgICk7XG4gIH07XG5cbiAgb25Ub2dnbGVMZWdlbmRTb3J0ID0gKHNvcnRLZXk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGxlZ2VuZE9wdGlvbnM6IFZpekxlZ2VuZE9wdGlvbnMgPSB0aGlzLnByb3BzLnBhbmVsLm9wdGlvbnMubGVnZW5kO1xuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBkbyBhbnl0aGluZyB3aGVuIGxlZ2VuZCBvcHRpb25zIGFyZSBub3QgYXZhaWxhYmxlXG4gICAgaWYgKCFsZWdlbmRPcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNvcnREZXNjID0gbGVnZW5kT3B0aW9ucy5zb3J0RGVzYztcbiAgICBsZXQgc29ydEJ5ID0gbGVnZW5kT3B0aW9ucy5zb3J0Qnk7XG4gICAgaWYgKHNvcnRLZXkgIT09IHNvcnRCeSkge1xuICAgICAgc29ydERlc2MgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gaWYgYWxyZWFkeSBzb3J0IGFzY2VuZGluZywgZGlzYWJsZSBzb3J0aW5nXG4gICAgaWYgKHNvcnREZXNjID09PSBmYWxzZSkge1xuICAgICAgc29ydEJ5ID0gdW5kZWZpbmVkO1xuICAgICAgc29ydERlc2MgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvcnREZXNjID0gIXNvcnREZXNjO1xuICAgICAgc29ydEJ5ID0gc29ydEtleTtcbiAgICB9XG5cbiAgICB0aGlzLm9uT3B0aW9uc0NoYW5nZSh7XG4gICAgICAuLi50aGlzLnByb3BzLnBhbmVsLm9wdGlvbnMsXG4gICAgICBsZWdlbmQ6IHsgLi4ubGVnZW5kT3B0aW9ucywgc29ydEJ5LCBzb3J0RGVzYyB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGdldEluaXRpYWxQYW5lbERhdGFTdGF0ZSgpOiBQYW5lbERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLk5vdFN0YXJ0ZWQsXG4gICAgICBzZXJpZXM6IFtdLFxuICAgICAgdGltZVJhbmdlOiBnZXREZWZhdWx0VGltZVJhbmdlKCksXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGFuZWwsIGRhc2hib2FyZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIFN1YnNjcmliZSB0byBwYW5lbCBldmVudHNcbiAgICB0aGlzLnN1YnMuYWRkKHBhbmVsLmV2ZW50cy5zdWJzY3JpYmUoUmVmcmVzaEV2ZW50LCB0aGlzLm9uUmVmcmVzaCkpO1xuICAgIHRoaXMuc3Vicy5hZGQocGFuZWwuZXZlbnRzLnN1YnNjcmliZShSZW5kZXJFdmVudCwgdGhpcy5vblJlbmRlcikpO1xuXG4gICAgZGFzaGJvYXJkLnBhbmVsSW5pdGlhbGl6ZWQodGhpcy5wcm9wcy5wYW5lbCk7XG5cbiAgICAvLyBNb3ZlIHNuYXBzaG90IGRhdGEgaW50byB0aGUgcXVlcnkgcmVzcG9uc2VcbiAgICBpZiAodGhpcy5oYXNQYW5lbFNuYXBzaG90KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogbG9hZFNuYXBzaG90RGF0YShwYW5lbCwgZGFzaGJvYXJkKSxcbiAgICAgICAgaXNGaXJzdExvYWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLndhbnRzUXVlcnlFeGVjdXRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZpcnN0TG9hZDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdWJzLmFkZChcbiAgICAgIHBhbmVsXG4gICAgICAgIC5nZXRRdWVyeVJ1bm5lcigpXG4gICAgICAgIC5nZXREYXRhKHsgd2l0aFRyYW5zZm9ybXM6IHRydWUsIHdpdGhGaWVsZENvbmZpZzogdHJ1ZSB9KVxuICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoZGF0YSkgPT4gdGhpcy5vbkRhdGFVcGRhdGUoZGF0YSksXG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIExpc3RlbiBmb3IgbGl2ZSB0aW1lciBldmVudHNcbiAgICBsaXZlVGltZXIubGlzdGVuKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgbGl2ZVRpbWVyLnJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIGxpdmVUaW1lQ2hhbmdlZChsaXZlVGltZTogVGltZVJhbmdlKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChkYXRhLnRpbWVSYW5nZSkge1xuICAgICAgY29uc3QgZGVsdGEgPSBsaXZlVGltZS50by52YWx1ZU9mKCkgLSBkYXRhLnRpbWVSYW5nZS50by52YWx1ZU9mKCk7XG4gICAgICBpZiAoZGVsdGEgPCAxMDApIHtcbiAgICAgICAgLy8gMTBoelxuICAgICAgICBjb25zb2xlLmxvZygnU2tpcCB0aWNrIHJlbmRlcicsIHRoaXMucHJvcHMucGFuZWwudGl0bGUsIGRlbHRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgbGl2ZVRpbWUgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IHsgaXNJblZpZXcsIHdpZHRoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGFwcCA9IHRoaXMuZ2V0UGFuZWxDb250ZXh0QXBwKCk7XG5cbiAgICBpZiAoY29udGV4dC5hcHAgIT09IGFwcCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAuLi5jb250ZXh0LFxuICAgICAgICAgIGFwcCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFZpZXcgc3RhdGUgaGFzIGNoYW5nZWRcbiAgICBpZiAoaXNJblZpZXcgIT09IHByZXZQcm9wcy5pc0luVmlldykge1xuICAgICAgaWYgKGlzSW5WaWV3KSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgYSBkZWxheWVkIHJlZnJlc2hcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVmcmVzaFdoZW5JblZpZXcpIHtcbiAgICAgICAgICB0aGlzLm9uUmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIHRpbWVyIGRlcGVuZHMgb24gcGFuZWwgd2lkdGhcbiAgICBpZiAod2lkdGggIT09IHByZXZQcm9wcy53aWR0aCkge1xuICAgICAgbGl2ZVRpbWVyLnVwZGF0ZUludGVydmFsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZXMgdGhlIHJlc3BvbnNlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgc3RyZWFtXG4gIC8vIFRoZSBuZXh0IGlzIG91dHNpZGUgYSByZWFjdCBzeW50aGV0aWMgZXZlbnQgc28gc2V0U3RhdGUgaXMgbm90IGJhdGNoZWRcbiAgLy8gU28gaW4gdGhpcyBjb250ZXh0IHdlIGNhbiBvbmx5IGRvIGEgc2luZ2xlIGNhbGwgdG8gc2V0U3RhdGVcbiAgb25EYXRhVXBkYXRlKGRhdGE6IFBhbmVsRGF0YSkge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkLCBwYW5lbCwgcGx1Z2luIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gSWdub3JlIHRoaXMgZGF0YSB1cGRhdGUgaWYgd2UgYXJlIG5vdyBhIG5vbiBkYXRhIHBhbmVsXG4gICAgaWYgKHBsdWdpbi5tZXRhLnNraXBEYXRhUXVlcnkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiB0aGlzLmdldEluaXRpYWxQYW5lbERhdGFTdGF0ZSgpIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB7IGlzRmlyc3RMb2FkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBlcnJvck1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIHN3aXRjaCAoZGF0YS5zdGF0ZSkge1xuICAgICAgY2FzZSBMb2FkaW5nU3RhdGUuTG9hZGluZzpcbiAgICAgICAgLy8gU2tpcCB1cGRhdGluZyBzdGF0ZSBkYXRhIGlmIGl0IGlzIGFscmVhZHkgaW4gbG9hZGluZyBzdGF0ZVxuICAgICAgICAvLyBUaGlzIGlzIHRvIGF2b2lkIHJlbmRlcmluZyBwYXJ0aWFsIGxvYWRpbmcgcmVzcG9uc2VzXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2FkaW5nU3RhdGUuRXJyb3I6XG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGRhdGE7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UgIT09IGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2FkaW5nU3RhdGUuRG9uZTpcbiAgICAgICAgLy8gSWYgd2UgYXJlIGRvaW5nIGEgc25hcHNob3Qgc2F2ZSBkYXRhIGluIHBhbmVsIG1vZGVsXG4gICAgICAgIGlmIChkYXNoYm9hcmQuc25hcHNob3QpIHtcbiAgICAgICAgICBwYW5lbC5zbmFwc2hvdERhdGEgPSBkYXRhLnNlcmllcy5tYXAoKGZyYW1lKSA9PiB0b0RhdGFGcmFtZURUTyhmcmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0ZpcnN0TG9hZCkge1xuICAgICAgICAgIGlzRmlyc3RMb2FkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRmlyc3RMb2FkLCBlcnJvck1lc3NhZ2UsIGRhdGEsIGxpdmVUaW1lOiB1bmRlZmluZWQgfSk7XG4gIH1cblxuICBvblJlZnJlc2ggPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXNoYm9hcmQsIHBhbmVsLCBpc0luVmlldywgd2lkdGggfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWlzSW5WaWV3KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVmcmVzaFdoZW5JblZpZXc6IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGltZURhdGEgPSBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyhwYW5lbCwgdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpKTtcblxuICAgIC8vIElzc3VlIFF1ZXJ5XG4gICAgaWYgKHRoaXMud2FudHNRdWVyeUV4ZWN1dGlvbikge1xuICAgICAgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnJlZnJlc2hXaGVuSW5WaWV3KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWZyZXNoV2hlbkluVmlldzogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICBwYW5lbC5ydW5BbGxQYW5lbFF1ZXJpZXMoXG4gICAgICAgIGRhc2hib2FyZC5pZCxcbiAgICAgICAgZGFzaGJvYXJkLmdldFRpbWV6b25lKCksXG4gICAgICAgIHRpbWVEYXRhLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgZGFzaGJvYXJkLm1ldGEucHVibGljRGFzaGJvYXJkQWNjZXNzVG9rZW5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBwYW5lbCBzaG91bGQgcmVuZGVyIG9uIHJlZnJlc2ggYXMgd2VsbCBpZiBpdCBkb2Vzbid0IGhhdmUgYSBxdWVyeSwgbGlrZSBjbG9jayBwYW5lbFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHsgLi4udGhpcy5zdGF0ZS5kYXRhLCB0aW1lUmFuZ2U6IHRoaXMudGltZVNydi50aW1lUmFuZ2UoKSB9LFxuICAgICAgICByZW5kZXJDb3VudGVyOiB0aGlzLnN0YXRlLnJlbmRlckNvdW50ZXIgKyAxLFxuICAgICAgICBsaXZlVGltZTogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uUmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlVXBkYXRlID0geyByZW5kZXJDb3VudGVyOiB0aGlzLnN0YXRlLnJlbmRlckNvdW50ZXIgKyAxIH07XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZVVwZGF0ZSk7XG4gIH07XG5cbiAgb25PcHRpb25zQ2hhbmdlID0gKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIHRoaXMucHJvcHMucGFuZWwudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgfTtcblxuICBvbkZpZWxkQ29uZmlnQ2hhbmdlID0gKGNvbmZpZzogRmllbGRDb25maWdTb3VyY2UpID0+IHtcbiAgICB0aGlzLnByb3BzLnBhbmVsLnVwZGF0ZUZpZWxkQ29uZmlnKGNvbmZpZyk7XG4gIH07XG5cbiAgb25QYW5lbEVycm9yID0gKGVycm9yOiBFcnJvcikgPT4ge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgfHwgREVGQVVMVF9QTFVHSU5fRVJST1I7XG4gICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBlcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uUGFuZWxFcnJvclJlY292ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogdW5kZWZpbmVkIH0pO1xuICB9O1xuXG4gIG9uQW5ub3RhdGlvbkNyZWF0ZSA9IGFzeW5jIChldmVudDogQW5ub3RhdGlvbkV2ZW50VUlNb2RlbCkgPT4ge1xuICAgIGNvbnN0IGlzUmVnaW9uID0gZXZlbnQuZnJvbSAhPT0gZXZlbnQudG87XG4gICAgY29uc3QgYW5ubyA9IHtcbiAgICAgIGRhc2hib2FyZElkOiB0aGlzLnByb3BzLmRhc2hib2FyZC5pZCxcbiAgICAgIHBhbmVsSWQ6IHRoaXMucHJvcHMucGFuZWwuaWQsXG4gICAgICBpc1JlZ2lvbixcbiAgICAgIHRpbWU6IGV2ZW50LmZyb20sXG4gICAgICB0aW1lRW5kOiBpc1JlZ2lvbiA/IGV2ZW50LnRvIDogMCxcbiAgICAgIHRhZ3M6IGV2ZW50LnRhZ3MsXG4gICAgICB0ZXh0OiBldmVudC5kZXNjcmlwdGlvbixcbiAgICB9O1xuICAgIGF3YWl0IHNhdmVBbm5vdGF0aW9uKGFubm8pO1xuICAgIGdldERhc2hib2FyZFF1ZXJ5UnVubmVyKCkucnVuKHsgZGFzaGJvYXJkOiB0aGlzLnByb3BzLmRhc2hib2FyZCwgcmFuZ2U6IHRoaXMudGltZVNydi50aW1lUmFuZ2UoKSB9KTtcbiAgICB0aGlzLnN0YXRlLmNvbnRleHQuZXZlbnRCdXMucHVibGlzaChuZXcgQW5ub3RhdGlvbkNoYW5nZUV2ZW50KGFubm8pKTtcbiAgfTtcblxuICBvbkFubm90YXRpb25EZWxldGUgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGF3YWl0IGRlbGV0ZUFubm90YXRpb24oeyBpZCB9KTtcbiAgICBnZXREYXNoYm9hcmRRdWVyeVJ1bm5lcigpLnJ1bih7IGRhc2hib2FyZDogdGhpcy5wcm9wcy5kYXNoYm9hcmQsIHJhbmdlOiB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCkgfSk7XG4gICAgdGhpcy5zdGF0ZS5jb250ZXh0LmV2ZW50QnVzLnB1Ymxpc2gobmV3IEFubm90YXRpb25DaGFuZ2VFdmVudCh7IGlkIH0pKTtcbiAgfTtcblxuICBvbkFubm90YXRpb25VcGRhdGUgPSBhc3luYyAoZXZlbnQ6IEFubm90YXRpb25FdmVudFVJTW9kZWwpID0+IHtcbiAgICBjb25zdCBpc1JlZ2lvbiA9IGV2ZW50LmZyb20gIT09IGV2ZW50LnRvO1xuICAgIGNvbnN0IGFubm8gPSB7XG4gICAgICBpZDogZXZlbnQuaWQsXG4gICAgICBkYXNoYm9hcmRJZDogdGhpcy5wcm9wcy5kYXNoYm9hcmQuaWQsXG4gICAgICBwYW5lbElkOiB0aGlzLnByb3BzLnBhbmVsLmlkLFxuICAgICAgaXNSZWdpb24sXG4gICAgICB0aW1lOiBldmVudC5mcm9tLFxuICAgICAgdGltZUVuZDogaXNSZWdpb24gPyBldmVudC50byA6IDAsXG4gICAgICB0YWdzOiBldmVudC50YWdzLFxuICAgICAgdGV4dDogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgfTtcbiAgICBhd2FpdCB1cGRhdGVBbm5vdGF0aW9uKGFubm8pO1xuXG4gICAgZ2V0RGFzaGJvYXJkUXVlcnlSdW5uZXIoKS5ydW4oeyBkYXNoYm9hcmQ6IHRoaXMucHJvcHMuZGFzaGJvYXJkLCByYW5nZTogdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpIH0pO1xuICAgIHRoaXMuc3RhdGUuY29udGV4dC5ldmVudEJ1cy5wdWJsaXNoKG5ldyBBbm5vdGF0aW9uQ2hhbmdlRXZlbnQoYW5ubykpO1xuICB9O1xuXG4gIGdldCBoYXNQYW5lbFNuYXBzaG90KCkge1xuICAgIGNvbnN0IHsgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHBhbmVsLnNuYXBzaG90RGF0YSAmJiBwYW5lbC5zbmFwc2hvdERhdGEubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHdhbnRzUXVlcnlFeGVjdXRpb24oKSB7XG4gICAgcmV0dXJuICEodGhpcy5wcm9wcy5wbHVnaW4ubWV0YS5za2lwRGF0YVF1ZXJ5IHx8IHRoaXMuaGFzUGFuZWxTbmFwc2hvdCk7XG4gIH1cblxuICBvbkNoYW5nZVRpbWVSYW5nZSA9ICh0aW1lUmFuZ2U6IEFic29sdXRlVGltZVJhbmdlKSA9PiB7XG4gICAgdGhpcy50aW1lU3J2LnNldFRpbWUoe1xuICAgICAgZnJvbTogdG9VdGModGltZVJhbmdlLmZyb20pLFxuICAgICAgdG86IHRvVXRjKHRpbWVSYW5nZS50byksXG4gICAgfSk7XG4gIH07XG5cbiAgc2hvdWxkU2lnbmFsUmVuZGVyaW5nQ29tcGxldGVkKGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLCBwbHVnaW5NZXRhOiBQYW5lbFBsdWdpbk1ldGEpIHtcbiAgICByZXR1cm4gbG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuRG9uZSB8fCBwbHVnaW5NZXRhLnNraXBEYXRhUXVlcnk7XG4gIH1cblxuICBza2lwRmlyc3RSZW5kZXIobG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUpIHtcbiAgICBjb25zdCB7IGlzRmlyc3RMb2FkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLndhbnRzUXVlcnlFeGVjdXRpb24gJiZcbiAgICAgIGlzRmlyc3RMb2FkICYmXG4gICAgICAobG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyB8fCBsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Ob3RTdGFydGVkKVxuICAgICk7XG4gIH1cblxuICByZW5kZXJQYW5lbCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIGNvbnN0IHsgcGFuZWwsIHBsdWdpbiwgZGFzaGJvYXJkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcmVuZGVyQ291bnRlciwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSBjb25maWc7XG4gICAgY29uc3QgeyBzdGF0ZTogbG9hZGluZ1N0YXRlIH0gPSBkYXRhO1xuXG4gICAgLy8gZG8gbm90IHJlbmRlciBjb21wb25lbnQgdW50aWwgd2UgaGF2ZSBmaXJzdCBkYXRhXG4gICAgaWYgKHRoaXMuc2tpcEZpcnN0UmVuZGVyKGxvYWRpbmdTdGF0ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIHRvIGluY3JlYXNlIGEgY291bnRlciB0aGF0IGlzIHVzZWQgYnkgYmFja2VuZFxuICAgIC8vIGltYWdlIHJlbmRlcmluZyB0byBrbm93IHdoZW4gdG8gY2FwdHVyZSBpbWFnZVxuICAgIGlmICh0aGlzLnNob3VsZFNpZ25hbFJlbmRlcmluZ0NvbXBsZXRlZChsb2FkaW5nU3RhdGUsIHBsdWdpbi5tZXRhKSkge1xuICAgICAgcHJvZmlsZXIucmVuZGVyaW5nQ29tcGxldGVkKCk7XG4gICAgfVxuXG4gICAgY29uc3QgUGFuZWxDb21wb25lbnQgPSBwbHVnaW4ucGFuZWwhO1xuICAgIGNvbnN0IHRpbWVSYW5nZSA9IHRoaXMuc3RhdGUubGl2ZVRpbWUgPz8gZGF0YS50aW1lUmFuZ2UgPz8gdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpO1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHRoaXMuaGFzT3ZlcmxheUhlYWRlcigpID8gMCA6IHRoZW1lLnBhbmVsSGVhZGVySGVpZ2h0O1xuICAgIGNvbnN0IGNocm9tZVBhZGRpbmcgPSBwbHVnaW4ubm9QYWRkaW5nID8gMCA6IHRoZW1lLnBhbmVsUGFkZGluZztcbiAgICBjb25zdCBwYW5lbFdpZHRoID0gd2lkdGggLSBjaHJvbWVQYWRkaW5nICogMiAtIFBBTkVMX0JPUkRFUjtcbiAgICBjb25zdCBpbm5lclBhbmVsSGVpZ2h0ID0gaGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gY2hyb21lUGFkZGluZyAqIDIgLSBQQU5FTF9CT1JERVI7XG4gICAgY29uc3QgcGFuZWxDb250ZW50Q2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgJ3BhbmVsLWNvbnRlbnQnOiB0cnVlLFxuICAgICAgJ3BhbmVsLWNvbnRlbnQtLW5vLXBhZGRpbmcnOiBwbHVnaW4ubm9QYWRkaW5nLFxuICAgIH0pO1xuICAgIGNvbnN0IHBhbmVsT3B0aW9ucyA9IHBhbmVsLmdldE9wdGlvbnMoKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgZXZlbnQgZmlsdGVyIChkYXNoYm9hcmQgc2V0dGluZ3MgbWF5IGhhdmUgY2hhbmdlZClcbiAgICAvLyBZZXMgdGhpcyBpcyBjYWxsZWQgZXZlciByZW5kZXIgZm9yIGEgZnVuY3Rpb24gdGhhdCBpcyB0cmlnZ2VyZWQgb24gZXZlcnkgbW91c2UgbW92ZVxuICAgIHRoaXMuZXZlbnRGaWx0ZXIub25seUxvY2FsID0gZGFzaGJvYXJkLmdyYXBoVG9vbHRpcCA9PT0gMDtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFuZWxDb250ZW50Q2xhc3NOYW1lc30+XG4gICAgICAgICAgPFBhbmVsQ29udGV4dFByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRleHR9PlxuICAgICAgICAgICAgPFBhbmVsQ29tcG9uZW50XG4gICAgICAgICAgICAgIGlkPXtwYW5lbC5pZH1cbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgdGl0bGU9e3BhbmVsLnRpdGxlfVxuICAgICAgICAgICAgICB0aW1lUmFuZ2U9e3RpbWVSYW5nZX1cbiAgICAgICAgICAgICAgdGltZVpvbmU9e3RoaXMucHJvcHMuZGFzaGJvYXJkLmdldFRpbWV6b25lKCl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3BhbmVsT3B0aW9uc31cbiAgICAgICAgICAgICAgZmllbGRDb25maWc9e3BhbmVsLmZpZWxkQ29uZmlnfVxuICAgICAgICAgICAgICB0cmFuc3BhcmVudD17cGFuZWwudHJhbnNwYXJlbnR9XG4gICAgICAgICAgICAgIHdpZHRoPXtwYW5lbFdpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2lubmVyUGFuZWxIZWlnaHR9XG4gICAgICAgICAgICAgIHJlbmRlckNvdW50ZXI9e3JlbmRlckNvdW50ZXJ9XG4gICAgICAgICAgICAgIHJlcGxhY2VWYXJpYWJsZXM9e3BhbmVsLnJlcGxhY2VWYXJpYWJsZXN9XG4gICAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZT17dGhpcy5vbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uRmllbGRDb25maWdDaGFuZ2U9e3RoaXMub25GaWVsZENvbmZpZ0NoYW5nZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2VUaW1lUmFuZ2U9e3RoaXMub25DaGFuZ2VUaW1lUmFuZ2V9XG4gICAgICAgICAgICAgIGV2ZW50QnVzPXtkYXNoYm9hcmQuZXZlbnRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1BhbmVsQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBoYXNPdmVybGF5SGVhZGVyKCkge1xuICAgIGNvbnN0IHsgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gYWx3YXlzIHNob3cgbm9ybWFsIGhlYWRlciBpZiB3ZSBoYXZlIHRpbWUgb3ZlcnJpZGVcbiAgICBpZiAoZGF0YS5yZXF1ZXN0ICYmIGRhdGEucmVxdWVzdC50aW1lSW5mbykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhcGFuZWwuaGFzVGl0bGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhc2hib2FyZCwgcGFuZWwsIGlzVmlld2luZywgaXNFZGl0aW5nLCB3aWR0aCwgaGVpZ2h0LCBwbHVnaW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlcnJvck1lc3NhZ2UsIGRhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0cmFuc3BhcmVudCB9ID0gcGFuZWw7XG5cbiAgICBjb25zdCBhbGVydFN0YXRlID0gZGF0YS5hbGVydFN0YXRlPy5zdGF0ZTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzTmFtZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICdwYW5lbC1jb250YWluZXInOiB0cnVlLFxuICAgICAgJ3BhbmVsLWNvbnRhaW5lci0tYWJzb2x1dGUnOiBpc1NvbG9Sb3V0ZShsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZSksXG4gICAgICAncGFuZWwtY29udGFpbmVyLS10cmFuc3BhcmVudCc6IHRyYW5zcGFyZW50LFxuICAgICAgJ3BhbmVsLWNvbnRhaW5lci0tbm8tdGl0bGUnOiB0aGlzLmhhc092ZXJsYXlIZWFkZXIoKSxcbiAgICAgIFtgcGFuZWwtYWxlcnQtc3RhdGUtLSR7YWxlcnRTdGF0ZX1gXTogYWxlcnRTdGF0ZSAhPT0gdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3NOYW1lc31cbiAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUGFuZWxzLlBhbmVsLmNvbnRhaW5lckJ5VGl0bGUocGFuZWwudGl0bGUpfVxuICAgICAgPlxuICAgICAgICA8UGFuZWxIZWFkZXJcbiAgICAgICAgICBwYW5lbD17cGFuZWx9XG4gICAgICAgICAgZGFzaGJvYXJkPXtkYXNoYm9hcmR9XG4gICAgICAgICAgdGl0bGU9e3BhbmVsLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwYW5lbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBsaW5rcz17cGFuZWwubGlua3N9XG4gICAgICAgICAgZXJyb3I9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cbiAgICAgICAgICBpc1ZpZXdpbmc9e2lzVmlld2luZ31cbiAgICAgICAgICBhbGVydFN0YXRlPXthbGVydFN0YXRlfVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIC8+XG4gICAgICAgIDxFcnJvckJvdW5kYXJ5XG4gICAgICAgICAgZGVwZW5kZW5jaWVzPXtbZGF0YSwgcGx1Z2luLCBwYW5lbC5nZXRPcHRpb25zKCldfVxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMub25QYW5lbEVycm9yfVxuICAgICAgICAgIG9uUmVjb3Zlcj17dGhpcy5vblBhbmVsRXJyb3JSZWNvdmVyfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7IGVycm9yIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclBhbmVsKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgTWFwRGlzcGF0Y2hUb1Byb3BzLCBNYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZ2V0RGVmYXVsdFRpbWVSYW5nZSwgTG9hZGluZ1N0YXRlLCBQYW5lbERhdGEsIFBhbmVsUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEFuZ3VsYXJDb21wb25lbnQsIGdldEFuZ3VsYXJMb2FkZXIsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUEFORUxfQk9SREVSIH0gZnJvbSAnYXBwL2NvcmUvY29uc3RhbnRzJztcbmltcG9ydCB7IHNldFBhbmVsQW5ndWxhckNvbXBvbmVudCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXRQYW5lbFN0YXRlRm9yTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGFuZWwvc3RhdGUvc2VsZWN0b3JzJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBpc1NvbG9Sb3V0ZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcy91dGlscyc7XG5pbXBvcnQgeyBnZXRUaW1lU3J2LCBUaW1lU3J2IH0gZnJvbSAnLi4vc2VydmljZXMvVGltZVNydic7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCwgUGFuZWxNb2RlbCB9IGZyb20gJy4uL3N0YXRlJztcblxuaW1wb3J0IHsgUGFuZWxIZWFkZXIgfSBmcm9tICcuL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyJztcblxuaW50ZXJmYWNlIE93blByb3BzIHtcbiAgcGFuZWw6IFBhbmVsTW9kZWw7XG4gIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbjogUGFuZWxQbHVnaW47XG4gIGlzVmlld2luZzogYm9vbGVhbjtcbiAgaXNFZGl0aW5nOiBib29sZWFuO1xuICBpc0luVmlldzogYm9vbGVhbjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDb25uZWN0ZWRQcm9wcyB7XG4gIGFuZ3VsYXJDb21wb25lbnQ/OiBBbmd1bGFyQ29tcG9uZW50O1xufVxuXG5pbnRlcmZhY2UgRGlzcGF0Y2hQcm9wcyB7XG4gIHNldFBhbmVsQW5ndWxhckNvbXBvbmVudDogdHlwZW9mIHNldFBhbmVsQW5ndWxhckNvbXBvbmVudDtcbn1cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzICYgRGlzcGF0Y2hQcm9wcztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGRhdGE6IFBhbmVsRGF0YTtcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQW5ndWxhclNjb3BlUHJvcHMge1xuICBwYW5lbDogUGFuZWxNb2RlbDtcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgc2l6ZToge1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBQYW5lbENocm9tZUFuZ3VsYXJVbmNvbm5lY3RlZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHRpbWVTcnY6IFRpbWVTcnYgPSBnZXRUaW1lU3J2KCk7XG4gIHNjb3BlUHJvcHM/OiBBbmd1bGFyU2NvcGVQcm9wcztcbiAgc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Ob3RTdGFydGVkLFxuICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgICB0aW1lUmFuZ2U6IGdldERlZmF1bHRUaW1lUmFuZ2UoKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5sb2FkQW5ndWxhclBhbmVsKCk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gZGF0YSBldmVudHNcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHBhbmVsLmdldFF1ZXJ5UnVubmVyKCk7XG5cbiAgICAvLyB3ZSBhcmUgbm90IGRpc3BsYXlpbmcgYW55IG9mIHRoaXMgZGF0YSBzbyBubyBuZWVkIGZvciB0cmFuc2Zvcm1zIG9yIGZpZWxkIGNvbmZpZ1xuICAgIHRoaXMuc3Vicy5hZGQoXG4gICAgICBxdWVyeVJ1bm5lci5nZXREYXRhKHsgd2l0aFRyYW5zZm9ybXM6IGZhbHNlLCB3aXRoRmllbGRDb25maWc6IGZhbHNlIH0pLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChkYXRhOiBQYW5lbERhdGEpID0+IHRoaXMub25QYW5lbERhdGFVcGRhdGUoZGF0YSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvblBhbmVsRGF0YVVwZGF0ZShkYXRhOiBQYW5lbERhdGEpIHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkVycm9yKSB7XG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBkYXRhO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UgIT09IGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEsIGVycm9yTWVzc2FnZSB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3Vicy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMsIHByZXZTdGF0ZTogU3RhdGUpIHtcbiAgICBjb25zdCB7IHBsdWdpbiwgaGVpZ2h0LCB3aWR0aCwgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocHJldlByb3BzLnBsdWdpbiAhPT0gcGx1Z2luKSB7XG4gICAgICB0aGlzLmxvYWRBbmd1bGFyUGFuZWwoKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlByb3BzLndpZHRoICE9PSB3aWR0aCB8fCBwcmV2UHJvcHMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIGlmICh0aGlzLnNjb3BlUHJvcHMpIHtcbiAgICAgICAgdGhpcy5zY29wZVByb3BzLnNpemUuaGVpZ2h0ID0gdGhpcy5nZXRJbm5lclBhbmVsSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuc2NvcGVQcm9wcy5zaXplLndpZHRoID0gdGhpcy5nZXRJbm5lclBhbmVsV2lkdGgoKTtcbiAgICAgICAgcGFuZWwucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0SW5uZXJQYW5lbEhlaWdodCgpIHtcbiAgICBjb25zdCB7IHBsdWdpbiwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHRoaXMuaGFzT3ZlcmxheUhlYWRlcigpID8gMCA6IHRoZW1lLnBhbmVsSGVhZGVySGVpZ2h0O1xuICAgIGNvbnN0IGNocm9tZVBhZGRpbmcgPSBwbHVnaW4ubm9QYWRkaW5nID8gMCA6IHRoZW1lLnBhbmVsUGFkZGluZztcbiAgICByZXR1cm4gaGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gY2hyb21lUGFkZGluZyAqIDIgLSBQQU5FTF9CT1JERVI7XG4gIH1cblxuICBnZXRJbm5lclBhbmVsV2lkdGgoKSB7XG4gICAgY29uc3QgeyBwbHVnaW4sIHdpZHRoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IGNocm9tZVBhZGRpbmcgPSBwbHVnaW4ubm9QYWRkaW5nID8gMCA6IHRoZW1lLnBhbmVsUGFkZGluZztcbiAgICByZXR1cm4gd2lkdGggLSBjaHJvbWVQYWRkaW5nICogMiAtIFBBTkVMX0JPUkRFUjtcbiAgfVxuXG4gIGxvYWRBbmd1bGFyUGFuZWwoKSB7XG4gICAgY29uc3QgeyBwYW5lbCwgZGFzaGJvYXJkLCBzZXRQYW5lbEFuZ3VsYXJDb21wb25lbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBpZiB3ZSBoYXZlIG5vIGVsZW1lbnQgb3IgYWxyZWFkeSBoYXZlIGxvYWRlZCB0aGUgcGFuZWwgcmV0dXJuXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkZXIgPSBnZXRBbmd1bGFyTG9hZGVyKCk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSAnPHBsdWdpbi1jb21wb25lbnQgdHlwZT1cInBhbmVsXCIgY2xhc3M9XCJwYW5lbC1oZWlnaHQtaGVscGVyXCI+PC9wbHVnaW4tY29tcG9uZW50Pic7XG5cbiAgICB0aGlzLnNjb3BlUHJvcHMgPSB7XG4gICAgICBwYW5lbDogcGFuZWwsXG4gICAgICBkYXNoYm9hcmQ6IGRhc2hib2FyZCxcbiAgICAgIHNpemU6IHsgd2lkdGg6IHRoaXMuZ2V0SW5uZXJQYW5lbFdpZHRoKCksIGhlaWdodDogdGhpcy5nZXRJbm5lclBhbmVsSGVpZ2h0KCkgfSxcbiAgICB9O1xuXG4gICAgc2V0UGFuZWxBbmd1bGFyQ29tcG9uZW50KHtcbiAgICAgIGtleTogcGFuZWwua2V5LFxuICAgICAgYW5ndWxhckNvbXBvbmVudDogbG9hZGVyLmxvYWQodGhpcy5lbGVtZW50LCB0aGlzLnNjb3BlUHJvcHMsIHRlbXBsYXRlKSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhc092ZXJsYXlIZWFkZXIoKSB7XG4gICAgY29uc3QgeyBwYW5lbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAvLyBhbHdheXMgc2hvdyBub3JtYWwgaGVhZGVyIGlmIHdlIGhhdmUgdGltZSBvdmVycmlkZVxuICAgIGlmIChkYXRhLnJlcXVlc3QgJiYgZGF0YS5yZXF1ZXN0LnRpbWVJbmZvKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICFwYW5lbC5oYXNUaXRsZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkLCBwYW5lbCwgaXNWaWV3aW5nLCBpc0VkaXRpbmcsIHBsdWdpbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVycm9yTWVzc2FnZSwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRyYW5zcGFyZW50IH0gPSBwYW5lbDtcblxuICAgIGNvbnN0IGFsZXJ0U3RhdGUgPSBkYXRhLmFsZXJ0U3RhdGU/LnN0YXRlO1xuXG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgJ3BhbmVsLWNvbnRhaW5lcic6IHRydWUsXG4gICAgICAncGFuZWwtY29udGFpbmVyLS1hYnNvbHV0ZSc6IGlzU29sb1JvdXRlKGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLnBhdGhuYW1lKSxcbiAgICAgICdwYW5lbC1jb250YWluZXItLXRyYW5zcGFyZW50JzogdHJhbnNwYXJlbnQsXG4gICAgICAncGFuZWwtY29udGFpbmVyLS1uby10aXRsZSc6IHRoaXMuaGFzT3ZlcmxheUhlYWRlcigpLFxuICAgICAgJ3BhbmVsLWhhcy1hbGVydCc6IHBhbmVsLmFsZXJ0ICE9PSB1bmRlZmluZWQsXG4gICAgICBbYHBhbmVsLWFsZXJ0LXN0YXRlLS0ke2FsZXJ0U3RhdGV9YF06IGFsZXJ0U3RhdGUgIT09IHVuZGVmaW5lZCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBhbmVsQ29udGVudENsYXNzTmFtZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICdwYW5lbC1jb250ZW50JzogdHJ1ZSxcbiAgICAgICdwYW5lbC1jb250ZW50LS1uby1wYWRkaW5nJzogcGx1Z2luLm5vUGFkZGluZyxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3NOYW1lc30gYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUGFuZWxzLlBhbmVsLmNvbnRhaW5lckJ5VGl0bGUocGFuZWwudGl0bGUpfT5cbiAgICAgICAgPFBhbmVsSGVhZGVyXG4gICAgICAgICAgcGFuZWw9e3BhbmVsfVxuICAgICAgICAgIGRhc2hib2FyZD17ZGFzaGJvYXJkfVxuICAgICAgICAgIHRpdGxlPXtwYW5lbC50aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17cGFuZWwuZGVzY3JpcHRpb259XG4gICAgICAgICAgbGlua3M9e3BhbmVsLmxpbmtzfVxuICAgICAgICAgIGVycm9yPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgaXNWaWV3aW5nPXtpc1ZpZXdpbmd9XG4gICAgICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBhbGVydFN0YXRlPXthbGVydFN0YXRlfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFuZWxDb250ZW50Q2xhc3NOYW1lc30+XG4gICAgICAgICAgPGRpdiByZWY9eyhlbGVtZW50KSA9PiAodGhpcy5lbGVtZW50ID0gZWxlbWVudCl9IGNsYXNzTmFtZT1cInBhbmVsLWhlaWdodC1oZWxwZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzOiBNYXBTdGF0ZVRvUHJvcHM8Q29ubmVjdGVkUHJvcHMsIE93blByb3BzLCBTdG9yZVN0YXRlPiA9IChzdGF0ZSwgcHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhbmd1bGFyQ29tcG9uZW50OiBnZXRQYW5lbFN0YXRlRm9yTW9kZWwoc3RhdGUsIHByb3BzLnBhbmVsKT8uYW5ndWxhckNvbXBvbmVudCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTWFwRGlzcGF0Y2hUb1Byb3BzPERpc3BhdGNoUHJvcHMsIE93blByb3BzPiA9IHsgc2V0UGFuZWxBbmd1bGFyQ29tcG9uZW50IH07XG5cbmV4cG9ydCBjb25zdCBQYW5lbENocm9tZUFuZ3VsYXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYW5lbENocm9tZUFuZ3VsYXJVbmNvbm5lY3RlZCk7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YUxpbmssIEdyYWZhbmFUaGVtZTIsIFBhbmVsRGF0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBJY29uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL0Rhc2hib2FyZE1vZGVsJztcbmltcG9ydCB7IFBhbmVsTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL1BhbmVsTW9kZWwnO1xuaW1wb3J0IHsgZ2V0UGFuZWxMaW5rc1N1cHBsaWVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BhbmVsL3BhbmVsbGlua3MvbGlua1N1cHBsaWVycyc7XG5cbmltcG9ydCBQYW5lbEhlYWRlckNvcm5lciBmcm9tICcuL1BhbmVsSGVhZGVyQ29ybmVyJztcbmltcG9ydCB7IFBhbmVsSGVhZGVyTG9hZGluZ0luZGljYXRvciB9IGZyb20gJy4vUGFuZWxIZWFkZXJMb2FkaW5nSW5kaWNhdG9yJztcbmltcG9ydCB7IFBhbmVsSGVhZGVyTWVudVRyaWdnZXIgfSBmcm9tICcuL1BhbmVsSGVhZGVyTWVudVRyaWdnZXInO1xuaW1wb3J0IHsgUGFuZWxIZWFkZXJNZW51V3JhcHBlciB9IGZyb20gJy4vUGFuZWxIZWFkZXJNZW51V3JhcHBlcic7XG5pbXBvcnQgeyBQYW5lbEhlYWRlck5vdGljZXMgfSBmcm9tICcuL1BhbmVsSGVhZGVyTm90aWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBwYW5lbDogUGFuZWxNb2RlbDtcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBsaW5rcz86IERhdGFMaW5rW107XG4gIGVycm9yPzogc3RyaW5nO1xuICBhbGVydFN0YXRlPzogc3RyaW5nO1xuICBpc1ZpZXdpbmc6IGJvb2xlYW47XG4gIGlzRWRpdGluZzogYm9vbGVhbjtcbiAgZGF0YTogUGFuZWxEYXRhO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXI6IEZDPFByb3BzPiA9ICh7IHBhbmVsLCBlcnJvciwgaXNWaWV3aW5nLCBpc0VkaXRpbmcsIGRhdGEsIGFsZXJ0U3RhdGUsIGRhc2hib2FyZCB9KSA9PiB7XG4gIGNvbnN0IG9uQ2FuY2VsUXVlcnkgPSAoKSA9PiBwYW5lbC5nZXRRdWVyeVJ1bm5lcigpLmNhbmNlbFF1ZXJ5KCk7XG4gIGNvbnN0IHRpdGxlID0gcGFuZWwuZ2V0RGlzcGxheVRpdGxlKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGN4KCdwYW5lbC1oZWFkZXInLCAhKGlzVmlld2luZyB8fCBpc0VkaXRpbmcpID8gJ2dyaWQtZHJhZy1oYW5kbGUnIDogJycpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKHBhbmVsU3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGFuZWxIZWFkZXJMb2FkaW5nSW5kaWNhdG9yIHN0YXRlPXtkYXRhLnN0YXRlfSBvbkNsaWNrPXtvbkNhbmNlbFF1ZXJ5fSAvPlxuICAgICAgPFBhbmVsSGVhZGVyQ29ybmVyXG4gICAgICAgIHBhbmVsPXtwYW5lbH1cbiAgICAgICAgdGl0bGU9e3BhbmVsLnRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17cGFuZWwuZGVzY3JpcHRpb259XG4gICAgICAgIHNjb3BlZFZhcnM9e3BhbmVsLnNjb3BlZFZhcnN9XG4gICAgICAgIGxpbmtzPXtnZXRQYW5lbExpbmtzU3VwcGxpZXIocGFuZWwpfVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxQYW5lbEhlYWRlck1lbnVUcmlnZ2VyIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5QYW5lbHMuUGFuZWwudGl0bGUodGl0bGUpfT5cbiAgICAgICAgICB7KHsgY2xvc2VNZW51LCBwYW5lbE1lbnVPcGVuIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8UGFuZWxIZWFkZXJOb3RpY2VzIGZyYW1lcz17ZGF0YS5zZXJpZXN9IHBhbmVsSWQ9e3BhbmVsLmlkfSAvPlxuICAgICAgICAgICAgICAgIHthbGVydFN0YXRlID8gKFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17YWxlcnRTdGF0ZSA9PT0gJ2FsZXJ0aW5nJyA/ICdoZWFydC1icmVhaycgOiAnaGVhcnQnfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWdmIHBhbmVsLWFsZXJ0LWljb25cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzRweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlVGV4dH0+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgeyFkYXNoYm9hcmQubWV0YS5wdWJsaWNEYXNoYm9hcmRBY2Nlc3NUb2tlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwicGFuZWwtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImFuZ2xlLWRvd25cIiBjbGFzc05hbWU9XCJwYW5lbC1tZW51LXRvZ2dsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEhlYWRlck1lbnVXcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgcGFuZWw9e3BhbmVsfVxuICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZD17ZGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgICAgICAgIHNob3c9e3BhbmVsTWVudU9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17Y2xvc2VNZW51fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ZGF0YS5yZXF1ZXN0ICYmIGRhdGEucmVxdWVzdC50aW1lSW5mbyAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC10aW1lLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNsb2NrLW5pbmVcIiBzaXplPVwic21cIiAvPiB7ZGF0YS5yZXF1ZXN0LnRpbWVJbmZvfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA8L1BhbmVsSGVhZGVyTWVudVRyaWdnZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IHBhbmVsU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGVUZXh0OiBjc3NgXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzOHB4KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bX07XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5ib2R5LmZvbnRTaXplfTtcbiAgICAgIG1hcmdpbjogMDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgLnBhbmVsLWhhcy1hbGVydCAmIHtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1NHB4KTtcbiAgICAgIH1cbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHJlbmRlck1hcmtkb3duLCBMaW5rTW9kZWxTdXBwbGllciwgU2NvcGVkVmFycyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UsIGdldFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBUb29sdGlwLCBQb3BvdmVyQ29udGVudCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldFRpbWVTcnYsIFRpbWVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL1RpbWVTcnYnO1xuaW1wb3J0IHsgUGFuZWxNb2RlbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUvUGFuZWxNb2RlbCc7XG5pbXBvcnQgeyBJbnNwZWN0VGFiIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2luc3BlY3Rvci90eXBlcyc7XG5cbmVudW0gSW5mb01vZGUge1xuICBFcnJvciA9ICdFcnJvcicsXG4gIEluZm8gPSAnSW5mbycsXG4gIExpbmtzID0gJ0xpbmtzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHBhbmVsOiBQYW5lbE1vZGVsO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHNjb3BlZFZhcnM/OiBTY29wZWRWYXJzO1xuICBsaW5rcz86IExpbmtNb2RlbFN1cHBsaWVyPFBhbmVsTW9kZWw+O1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBhbmVsSGVhZGVyQ29ybmVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHRpbWVTcnY6IFRpbWVTcnYgPSBnZXRUaW1lU3J2KCk7XG5cbiAgZ2V0SW5mb01vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYW5lbCwgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gSW5mb01vZGUuRXJyb3I7XG4gICAgfVxuICAgIGlmICghIXBhbmVsLmRlc2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm4gSW5mb01vZGUuSW5mbztcbiAgICB9XG4gICAgaWYgKHBhbmVsLmxpbmtzICYmIHBhbmVsLmxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIEluZm9Nb2RlLkxpbmtzO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgZ2V0SW5mb0NvbnRlbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHsgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbWFya2Rvd24gPSBwYW5lbC5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRNYXJrZG93biA9IGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZShtYXJrZG93biwgcGFuZWwuc2NvcGVkVmFycyk7XG4gICAgY29uc3QgbWFya2VkSW50ZXJwb2xhdGVkTWFya2Rvd24gPSByZW5kZXJNYXJrZG93bihpbnRlcnBvbGF0ZWRNYXJrZG93bik7XG4gICAgY29uc3QgbGlua3MgPSB0aGlzLnByb3BzLmxpbmtzICYmIHRoaXMucHJvcHMubGlua3MuZ2V0TGlua3MocGFuZWwucmVwbGFjZVZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1pbmZvLWNvbnRlbnQgbWFya2Rvd24taHRtbFwiPlxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkSW50ZXJwb2xhdGVkTWFya2Rvd24gfX0gLz5cblxuICAgICAgICB7bGlua3MgJiYgbGlua3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhbmVsLWluZm8tY29ybmVyLWxpbmtzXCI+XG4gICAgICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFuZWwtaW5mby1jb3JuZXItbGlua3NfX2l0ZW1cIiBocmVmPXtsaW5rLmhyZWZ9IHRhcmdldD17bGluay50YXJnZXR9PlxuICAgICAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIFBhbmVsIEluc3BlY3RvciB3aGVuIHdlIGNsaWNrIG9uIGFuIGVycm9yXG4gICAqL1xuICBvbkNsaWNrRXJyb3IgPSAoKSA9PiB7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoe1xuICAgICAgaW5zcGVjdDogdGhpcy5wcm9wcy5wYW5lbC5pZCxcbiAgICAgIGluc3BlY3RUYWI6IEluc3BlY3RUYWIuRXJyb3IsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyQ29ybmVyVHlwZShpbmZvTW9kZTogSW5mb01vZGUsIGNvbnRlbnQ6IFBvcG92ZXJDb250ZW50LCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIGNvbnN0IHRoZW1lID0gaW5mb01vZGUgPT09IEluZm9Nb2RlLkVycm9yID8gJ2Vycm9yJyA6ICdpbmZvJztcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgcGFuZWwtaW5mby1jb3JuZXIgcGFuZWwtaW5mby1jb3JuZXItLSR7aW5mb01vZGUudG9Mb3dlckNhc2UoKX1gO1xuICAgIGNvbnN0IGFyaWFMYWJlbCA9IHNlbGVjdG9ycy5jb21wb25lbnRzLlBhbmVscy5QYW5lbC5oZWFkZXJDb3JuZXJJbmZvKGluZm9Nb2RlLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwIGNvbnRlbnQ9e2NvbnRlbnR9IHBsYWNlbWVudD1cInRvcC1zdGFydFwiIHRoZW1lPXt0aGVtZX0gaW50ZXJhY3RpdmU+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtvbkNsaWNrfSBhcmlhLWxhYmVsPXthcmlhTGFiZWx9PlxuICAgICAgICAgIDxpIGFyaWEtaGlkZGVuIGNsYXNzTmFtZT1cImZhXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pbmZvLWNvcm5lci1pbm5lclwiIC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5mb01vZGU6IEluZm9Nb2RlIHwgdW5kZWZpbmVkID0gdGhpcy5nZXRJbmZvTW9kZSgpO1xuXG4gICAgaWYgKCFpbmZvTW9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGluZm9Nb2RlID09PSBJbmZvTW9kZS5FcnJvciAmJiBlcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29ybmVyVHlwZShpbmZvTW9kZSwgZXJyb3IsIHRoaXMub25DbGlja0Vycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoaW5mb01vZGUgPT09IEluZm9Nb2RlLkluZm8gfHwgaW5mb01vZGUgPT09IEluZm9Nb2RlLkxpbmtzKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb3JuZXJUeXBlKGluZm9Nb2RlLCB0aGlzLmdldEluZm9Db250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW5lbEhlYWRlckNvcm5lcjtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSwgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBUb29sdGlwLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHN0YXRlOiBMb2FkaW5nU3RhdGU7XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlckxvYWRpbmdJbmRpY2F0b3I6IEZDPFByb3BzPiA9ICh7IHN0YXRlLCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgaWYgKHN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWxvYWRpbmdcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgPFRvb2x0aXAgY29udGVudD1cIkNhbmNlbCBxdWVyeVwiPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInBhbmVsLWxvYWRpbmdfX3NwaW5uZXIgc3Bpbi1jbG9ja3dpc2VcIiBuYW1lPVwic3luY1wiIC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5TdHJlYW1pbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1sb2FkaW5nXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIDxkaXYgdGl0bGU9XCJTdHJlYW1pbmcgKGNsaWNrIHRvIHN0b3ApXCIgY2xhc3NOYW1lPXtzdHlsZXMuc3RyZWFtSW5kaWNhdG9yfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBzdHJlYW1JbmRpY2F0b3I6IGNzc2BcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMudGV4dEZhaW50fTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggJHt0aGVtZS5jb2xvcnMudGV4dEZhaW50fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogNnB4O1xuICAgICAgcmlnaHQ6IDFweDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBhbmVsTWVudUl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgUGFuZWxIZWFkZXJNZW51SXRlbSB9IGZyb20gJy4vUGFuZWxIZWFkZXJNZW51SXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBpdGVtczogUGFuZWxNZW51SXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgUGFuZWxIZWFkZXJNZW51IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXJJdGVtcyA9IChtZW51OiBQYW5lbE1lbnVJdGVtW10sIGlzU3ViTWVudSA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtLW1lbnUgcGFuZWwtbWVudVwiIHJvbGU9e2lzU3ViTWVudSA/ICcnIDogJ21lbnUnfT5cbiAgICAgICAge21lbnUubWFwKChtZW51SXRlbSwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyTWVudUl0ZW1cbiAgICAgICAgICAgICAga2V5PXtgJHttZW51SXRlbS50ZXh0fSR7aWR4fWB9XG4gICAgICAgICAgICAgIHR5cGU9e21lbnVJdGVtLnR5cGV9XG4gICAgICAgICAgICAgIHRleHQ9e21lbnVJdGVtLnRleHR9XG4gICAgICAgICAgICAgIGljb25DbGFzc05hbWU9e21lbnVJdGVtLmljb25DbGFzc05hbWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e21lbnVJdGVtLm9uQ2xpY2t9XG4gICAgICAgICAgICAgIHNob3J0Y3V0PXttZW51SXRlbS5zaG9ydGN1dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21lbnVJdGVtLnN1Yk1lbnUgJiYgdGhpcy5yZW5kZXJJdGVtcyhtZW51SXRlbS5zdWJNZW51LCB0cnVlKX1cbiAgICAgICAgICAgIDwvUGFuZWxIZWFkZXJNZW51SXRlbT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtbWVudS1jb250YWluZXIgZHJvcGRvd24gb3BlblwiPnt0aGlzLnJlbmRlckl0ZW1zKHRoaXMucHJvcHMuaXRlbXMpfTwvZGl2PjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRkMsIFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBQYW5lbE1lbnVJdGVtIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRQYW5lbFN0YXRlRm9yTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGFuZWwvc3RhdGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IERhc2hib2FyZE1vZGVsLCBQYW5lbE1vZGVsIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UGFuZWxNZW51IH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0UGFuZWxNZW51JztcblxuaW50ZXJmYWNlIFBhbmVsSGVhZGVyTWVudVByb3ZpZGVyQXBpIHtcbiAgaXRlbXM6IFBhbmVsTWVudUl0ZW1bXTtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFuZWw6IFBhbmVsTW9kZWw7XG4gIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIGNoaWxkcmVuOiAocHJvcHM6IFBhbmVsSGVhZGVyTWVudVByb3ZpZGVyQXBpKSA9PiBSZWFjdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlck1lbnVQcm92aWRlcjogRkM8UHJvcHM+ID0gKHsgcGFuZWwsIGRhc2hib2FyZCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPFBhbmVsTWVudUl0ZW1bXT4oW10pO1xuICBjb25zdCBhbmd1bGFyQ29tcG9uZW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBnZXRQYW5lbFN0YXRlRm9yTW9kZWwoc3RhdGUsIHBhbmVsKT8uYW5ndWxhckNvbXBvbmVudCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJdGVtcyhnZXRQYW5lbE1lbnUoZGFzaGJvYXJkLCBwYW5lbCwgYW5ndWxhckNvbXBvbmVudCkpO1xuICB9LCBbZGFzaGJvYXJkLCBwYW5lbCwgYW5ndWxhckNvbXBvbmVudCwgc2V0SXRlbXNdKTtcblxuICByZXR1cm4gY2hpbGRyZW4oeyBpdGVtcyB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzLCBNb3VzZUV2ZW50LCBSZWFjdEVsZW1lbnQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2FydGVzaWFuQ29vcmRzMkQgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW50ZXJmYWNlIFBhbmVsSGVhZGVyTWVudVRyaWdnZXJBcGkge1xuICBwYW5lbE1lbnVPcGVuOiBib29sZWFuO1xuICBjbG9zZU1lbnU6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIGNoaWxkcmVuOiAocHJvcHM6IFBhbmVsSGVhZGVyTWVudVRyaWdnZXJBcGkpID0+IFJlYWN0RWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyTWVudVRyaWdnZXI6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCAuLi5kaXZQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IFtjbGlja0Nvb3JkaW5hdGVzLCBzZXRDbGlja0Nvb3JkaW5hdGVzXSA9IHVzZVN0YXRlPENhcnRlc2lhbkNvb3JkczJEPih7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IFtwYW5lbE1lbnVPcGVuLCBzZXRQYW5lbE1lbnVPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3Qgb25NZW51VG9nZ2xlID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKCFpc0NsaWNrKGNsaWNrQ29vcmRpbmF0ZXMsIGV2ZW50VG9DbGlja0Nvb3JkaW5hdGVzKGV2ZW50KSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgc2V0UGFuZWxNZW51T3BlbighcGFuZWxNZW51T3Blbik7XG4gICAgfSxcbiAgICBbY2xpY2tDb29yZGluYXRlcywgcGFuZWxNZW51T3Blbiwgc2V0UGFuZWxNZW51T3Blbl1cbiAgKTtcbiAgY29uc3Qgb25Nb3VzZURvd24gPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICBzZXRDbGlja0Nvb3JkaW5hdGVzKGV2ZW50VG9DbGlja0Nvb3JkaW5hdGVzKGV2ZW50KSk7XG4gICAgfSxcbiAgICBbc2V0Q2xpY2tDb29yZGluYXRlc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgey4uLmRpdlByb3BzfSBjbGFzc05hbWU9XCJwYW5lbC10aXRsZS1jb250YWluZXJcIiBvbkNsaWNrPXtvbk1lbnVUb2dnbGV9IG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn0+XG4gICAgICB7Y2hpbGRyZW4oeyBwYW5lbE1lbnVPcGVuLCBjbG9zZU1lbnU6ICgpID0+IHNldFBhbmVsTWVudU9wZW4oZmFsc2UpIH0pfVxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZnVuY3Rpb24gaXNDbGljayhjdXJyZW50OiBDYXJ0ZXNpYW5Db29yZHMyRCwgY2xpY2tlZDogQ2FydGVzaWFuQ29vcmRzMkQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNsaWNrZWQueCA9PT0gY3VycmVudC54ICYmIGNsaWNrZWQueSA9PT0gY3VycmVudC55O1xufVxuXG5mdW5jdGlvbiBldmVudFRvQ2xpY2tDb29yZGluYXRlcyhldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pOiBDYXJ0ZXNpYW5Db29yZHMyRCB7XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5mbG9vcihldmVudC5jbGllbnRYKSxcbiAgICB5OiBNYXRoLmZsb29yKGV2ZW50LmNsaWVudFkpLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDbGlja091dHNpZGVXcmFwcGVyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCwgUGFuZWxNb2RlbCB9IGZyb20gJy4uLy4uL3N0YXRlJztcblxuaW1wb3J0IHsgUGFuZWxIZWFkZXJNZW51IH0gZnJvbSAnLi9QYW5lbEhlYWRlck1lbnUnO1xuaW1wb3J0IHsgUGFuZWxIZWFkZXJNZW51UHJvdmlkZXIgfSBmcm9tICcuL1BhbmVsSGVhZGVyTWVudVByb3ZpZGVyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFuZWw6IFBhbmVsTW9kZWw7XG4gIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHNob3c6IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlck1lbnVXcmFwcGVyOiBGQzxQcm9wcz4gPSAoeyBzaG93LCBvbkNsb3NlLCBwYW5lbCwgZGFzaGJvYXJkIH0pID0+IHtcbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDbGlja091dHNpZGVXcmFwcGVyIG9uQ2xpY2s9e29uQ2xvc2V9IHBhcmVudD17ZG9jdW1lbnR9PlxuICAgICAgPFBhbmVsSGVhZGVyTWVudVByb3ZpZGVyIHBhbmVsPXtwYW5lbH0gZGFzaGJvYXJkPXtkYXNoYm9hcmR9PlxuICAgICAgICB7KHsgaXRlbXMgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8UGFuZWxIZWFkZXJNZW51IGl0ZW1zPXtpdGVtc30gLz47XG4gICAgICAgIH19XG4gICAgICA8L1BhbmVsSGVhZGVyTWVudVByb3ZpZGVyPlxuICAgIDwvQ2xpY2tPdXRzaWRlV3JhcHBlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFF1ZXJ5UmVzdWx0TWV0YU5vdGljZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgVG9vbHRpcCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbm90aWNlOiBRdWVyeVJlc3VsdE1ldGFOb3RpY2U7XG4gIG9uQ2xpY2s6IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCwgdGFiOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlck5vdGljZTogRkM8UHJvcHM+ID0gKHsgbm90aWNlLCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc3QgaWNvbk5hbWUgPVxuICAgIG5vdGljZS5zZXZlcml0eSA9PT0gJ2Vycm9yJyB8fCBub3RpY2Uuc2V2ZXJpdHkgPT09ICd3YXJuaW5nJyA/ICdleGNsYW1hdGlvbi10cmlhbmdsZScgOiAnaW5mby1jaXJjbGUnO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXAgY29udGVudD17bm90aWNlLnRleHR9IGtleT17bm90aWNlLnNldmVyaXR5fT5cbiAgICAgIHtub3RpY2UuaW5zcGVjdCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1pbmZvLW5vdGljZSBwb2ludGVyXCIgb25DbGljaz17KGUpID0+IG9uQ2xpY2soZSwgbm90aWNlLmluc3BlY3QhKX0+XG4gICAgICAgICAgPEljb24gbmFtZT17aWNvbk5hbWV9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4JyB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInBhbmVsLWluZm8tbm90aWNlXCIgaHJlZj17bm90aWNlLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICA8SWNvbiBuYW1lPXtpY29uTmFtZX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICl9XG4gICAgPC9Ub29sdGlwPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERhdGFGcmFtZSwgUXVlcnlSZXN1bHRNZXRhTm90aWNlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgUGFuZWxIZWFkZXJOb3RpY2UgfSBmcm9tICcuL1BhbmVsSGVhZGVyTm90aWNlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFuZWxJZDogbnVtYmVyO1xuICBmcmFtZXM6IERhdGFGcmFtZVtdO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJOb3RpY2VzOiBGQzxQcm9wcz4gPSAoeyBmcmFtZXMsIHBhbmVsSWQgfSkgPT4ge1xuICBjb25zdCBvcGVuSW5zcGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCwgdGFiOiBzdHJpbmcpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7IGluc3BlY3Q6IHBhbmVsSWQsIGluc3BlY3RUYWI6IHRhYiB9KTtcbiAgICB9LFxuICAgIFtwYW5lbElkXVxuICApO1xuXG4gIC8vIGRlZHVwZSBvbiBzZXZlcml0eVxuICBjb25zdCBub3RpY2VzOiBSZWNvcmQ8c3RyaW5nLCBRdWVyeVJlc3VsdE1ldGFOb3RpY2U+ID0ge307XG4gIGZvciAoY29uc3QgZnJhbWUgb2YgZnJhbWVzKSB7XG4gICAgaWYgKCFmcmFtZS5tZXRhIHx8ICFmcmFtZS5tZXRhLm5vdGljZXMpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qgbm90aWNlIG9mIGZyYW1lLm1ldGEubm90aWNlcykge1xuICAgICAgbm90aWNlc1tub3RpY2Uuc2V2ZXJpdHldID0gbm90aWNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtPYmplY3QudmFsdWVzKG5vdGljZXMpLm1hcCgobm90aWNlKSA9PiAoXG4gICAgICAgIDxQYW5lbEhlYWRlck5vdGljZSBub3RpY2U9e25vdGljZX0gb25DbGljaz17b3Blbkluc3BlY3R9IGtleT17bm90aWNlLnNldmVyaXR5fSAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHtcbiAgQnlOYW1lc01hdGNoZXJNb2RlLFxuICBEYXRhRnJhbWUsXG4gIER5bmFtaWNDb25maWdWYWx1ZSxcbiAgRmllbGRDb25maWdTb3VyY2UsXG4gIEZpZWxkTWF0Y2hlcklELFxuICBGaWVsZFR5cGUsXG4gIGdldEZpZWxkRGlzcGxheU5hbWUsXG4gIGlzU3lzdGVtT3ZlcnJpZGVXaXRoUmVmLFxuICBTeXN0ZW1Db25maWdPdmVycmlkZVJ1bGUsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VyaWVzVmlzaWJpbGl0eUNoYW5nZU1vZGUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmNvbnN0IGRpc3BsYXlPdmVycmlkZVJlZiA9ICdoaWRlU2VyaWVzRnJvbSc7XG5jb25zdCBpc0hpZGVTZXJpZXNPdmVycmlkZSA9IGlzU3lzdGVtT3ZlcnJpZGVXaXRoUmVmKGRpc3BsYXlPdmVycmlkZVJlZik7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpZXNWaXNpYmlsaXR5Q29uZmlnRmFjdG9yeShcbiAgbGFiZWw6IHN0cmluZyxcbiAgbW9kZTogU2VyaWVzVmlzaWJpbGl0eUNoYW5nZU1vZGUsXG4gIGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZ1NvdXJjZSxcbiAgZGF0YTogRGF0YUZyYW1lW11cbikge1xuICBjb25zdCB7IG92ZXJyaWRlcyB9ID0gZmllbGRDb25maWc7XG5cbiAgY29uc3QgZGlzcGxheU5hbWUgPSBsYWJlbDtcbiAgY29uc3QgY3VycmVudEluZGV4ID0gb3ZlcnJpZGVzLmZpbmRJbmRleChpc0hpZGVTZXJpZXNPdmVycmlkZSk7XG5cbiAgaWYgKGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICBpZiAobW9kZSA9PT0gU2VyaWVzVmlzaWJpbGl0eUNoYW5nZU1vZGUuVG9nZ2xlU2VsZWN0aW9uKSB7XG4gICAgICBjb25zdCBvdmVycmlkZSA9IGNyZWF0ZU92ZXJyaWRlKFtkaXNwbGF5TmFtZV0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgICAgb3ZlcnJpZGVzOiBbLi4uZmllbGRDb25maWcub3ZlcnJpZGVzLCBvdmVycmlkZV0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlOYW1lcyA9IGdldERpc3BsYXlOYW1lcyhkYXRhLCBkaXNwbGF5TmFtZSk7XG4gICAgY29uc3Qgb3ZlcnJpZGUgPSBjcmVhdGVPdmVycmlkZShkaXNwbGF5TmFtZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmZpZWxkQ29uZmlnLFxuICAgICAgb3ZlcnJpZGVzOiBbLi4uZmllbGRDb25maWcub3ZlcnJpZGVzLCBvdmVycmlkZV0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG92ZXJyaWRlc0NvcHkgPSBBcnJheS5mcm9tKG92ZXJyaWRlcyk7XG4gIGNvbnN0IFtjdXJyZW50XSA9IG92ZXJyaWRlc0NvcHkuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSkgYXMgU3lzdGVtQ29uZmlnT3ZlcnJpZGVSdWxlW107XG5cbiAgaWYgKG1vZGUgPT09IFNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlLlRvZ2dsZVNlbGVjdGlvbikge1xuICAgIGNvbnN0IGV4aXN0aW5nID0gZ2V0RXhpc3RpbmdEaXNwbGF5TmFtZXMoY3VycmVudCk7XG5cbiAgICBpZiAoZXhpc3RpbmdbMF0gPT09IGRpc3BsYXlOYW1lICYmIGV4aXN0aW5nLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZmllbGRDb25maWcsXG4gICAgICAgIG92ZXJyaWRlczogb3ZlcnJpZGVzQ29weSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgb3ZlcnJpZGUgPSBjcmVhdGVPdmVycmlkZShbZGlzcGxheU5hbWVdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgIG92ZXJyaWRlczogWy4uLm92ZXJyaWRlc0NvcHksIG92ZXJyaWRlXSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgb3ZlcnJpZGUgPSBjcmVhdGVFeHRlbmRlZE92ZXJyaWRlKGN1cnJlbnQsIGRpc3BsYXlOYW1lKTtcblxuICBpZiAoYWxsRmllbGRzQXJlRXhjbHVkZWQob3ZlcnJpZGUsIGRhdGEpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmZpZWxkQ29uZmlnLFxuICAgICAgb3ZlcnJpZGVzOiBvdmVycmlkZXNDb3B5LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmZpZWxkQ29uZmlnLFxuICAgIG92ZXJyaWRlczogWy4uLm92ZXJyaWRlc0NvcHksIG92ZXJyaWRlXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3ZlcnJpZGUoXG4gIG5hbWVzOiBzdHJpbmdbXSxcbiAgbW9kZSA9IEJ5TmFtZXNNYXRjaGVyTW9kZS5leGNsdWRlLFxuICBwcm9wZXJ0eT86IER5bmFtaWNDb25maWdWYWx1ZVxuKTogU3lzdGVtQ29uZmlnT3ZlcnJpZGVSdWxlIHtcbiAgcHJvcGVydHkgPSBwcm9wZXJ0eSA/PyB7XG4gICAgaWQ6ICdjdXN0b20uaGlkZUZyb20nLFxuICAgIHZhbHVlOiB7XG4gICAgICB2aXo6IHRydWUsXG4gICAgICBsZWdlbmQ6IGZhbHNlLFxuICAgICAgdG9vbHRpcDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIF9fc3lzdGVtUmVmOiBkaXNwbGF5T3ZlcnJpZGVSZWYsXG4gICAgbWF0Y2hlcjoge1xuICAgICAgaWQ6IEZpZWxkTWF0Y2hlcklELmJ5TmFtZXMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgIG5hbWVzOiBuYW1lcyxcbiAgICAgICAgcHJlZml4OiBtb2RlID09PSBCeU5hbWVzTWF0Y2hlck1vZGUuZXhjbHVkZSA/ICdBbGwgZXhjZXB0OicgOiB1bmRlZmluZWQsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgLi4ucHJvcGVydHksXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdml6OiB0cnVlLFxuICAgICAgICAgIGxlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgdG9vbHRpcDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG59XG5cbmNvbnN0IGNyZWF0ZUV4dGVuZGVkT3ZlcnJpZGUgPSAoXG4gIGN1cnJlbnQ6IFN5c3RlbUNvbmZpZ092ZXJyaWRlUnVsZSxcbiAgZGlzcGxheU5hbWU6IHN0cmluZyxcbiAgbW9kZSA9IEJ5TmFtZXNNYXRjaGVyTW9kZS5leGNsdWRlXG4pOiBTeXN0ZW1Db25maWdPdmVycmlkZVJ1bGUgPT4ge1xuICBjb25zdCBwcm9wZXJ0eSA9IGN1cnJlbnQucHJvcGVydGllcy5maW5kKChwKSA9PiBwLmlkID09PSAnY3VzdG9tLmhpZGVGcm9tJyk7XG4gIGNvbnN0IGV4aXN0aW5nID0gZ2V0RXhpc3RpbmdEaXNwbGF5TmFtZXMoY3VycmVudCk7XG4gIGNvbnN0IGluZGV4ID0gZXhpc3RpbmcuZmluZEluZGV4KChuYW1lKSA9PiBuYW1lID09PSBkaXNwbGF5TmFtZSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGV4aXN0aW5nLnB1c2goZGlzcGxheU5hbWUpO1xuICB9IGVsc2Uge1xuICAgIGV4aXN0aW5nLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlT3ZlcnJpZGUoZXhpc3RpbmcsIG1vZGUsIHByb3BlcnR5KTtcbn07XG5cbmNvbnN0IGdldEV4aXN0aW5nRGlzcGxheU5hbWVzID0gKHJ1bGU6IFN5c3RlbUNvbmZpZ092ZXJyaWRlUnVsZSk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgbmFtZXMgPSBydWxlLm1hdGNoZXIub3B0aW9ucz8ubmFtZXM7XG4gIGlmICghQXJyYXkuaXNBcnJheShuYW1lcykpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIFsuLi5uYW1lc107XG59O1xuXG5jb25zdCBhbGxGaWVsZHNBcmVFeGNsdWRlZCA9IChvdmVycmlkZTogU3lzdGVtQ29uZmlnT3ZlcnJpZGVSdWxlLCBkYXRhOiBEYXRhRnJhbWVbXSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gZ2V0RXhpc3RpbmdEaXNwbGF5TmFtZXMob3ZlcnJpZGUpLmxlbmd0aCA9PT0gZ2V0RGlzcGxheU5hbWVzKGRhdGEpLmxlbmd0aDtcbn07XG5cbmNvbnN0IGdldERpc3BsYXlOYW1lcyA9IChkYXRhOiBEYXRhRnJhbWVbXSwgZXhjbHVkZU5hbWU/OiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IHVuaXF1ZSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIGZvciAoY29uc3QgZnJhbWUgb2YgZGF0YSkge1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgZnJhbWUuZmllbGRzKSB7XG4gICAgICBpZiAoZmllbGQudHlwZSAhPT0gRmllbGRUeXBlLm51bWJlcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmFtZSA9IGdldEZpZWxkRGlzcGxheU5hbWUoZmllbGQsIGZyYW1lLCBkYXRhKTtcblxuICAgICAgaWYgKG5hbWUgPT09IGV4Y2x1ZGVOYW1lKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB1bmlxdWUuYWRkKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBBcnJheS5mcm9tKHVuaXF1ZSk7XG59O1xuIiwiaW1wb3J0IHsgcmVwb3J0TWV0YUFuYWx5dGljcywgTWV0YUFuYWx5dGljc0V2ZW50TmFtZSwgRGFzaGJvYXJkVmlld0V2ZW50UGF5bG9hZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4vRGFzaGJvYXJkTW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdERhc2hib2FyZFZpZXdFdmVudChkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsKSB7XG4gIGNvbnN0IGV2ZW50RGF0YTogRGFzaGJvYXJkVmlld0V2ZW50UGF5bG9hZCA9IHtcbiAgICBkYXNoYm9hcmRJZDogZGFzaGJvYXJkLmlkLFxuICAgIGRhc2hib2FyZE5hbWU6IGRhc2hib2FyZC50aXRsZSxcbiAgICBkYXNoYm9hcmRVaWQ6IGRhc2hib2FyZC51aWQsXG4gICAgZm9sZGVyTmFtZTogZGFzaGJvYXJkLm1ldGEuZm9sZGVyVGl0bGUsXG4gICAgZXZlbnROYW1lOiBNZXRhQW5hbHl0aWNzRXZlbnROYW1lLkRhc2hib2FyZFZpZXcsXG4gIH07XG5cbiAgcmVwb3J0TWV0YUFuYWx5dGljcyhldmVudERhdGEpO1xufVxuIiwiaW1wb3J0IHsgbG9jYXRpb25VdGlsLCBzZXRXZWVrU3RhcnQgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgaXNGZXRjaEVycm9yLCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBiYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsga2V5YmluZGluZ1NydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2tleWJpbmRpbmdTcnYnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ2FwcC9jb3JlL3N0b3JlJztcbmltcG9ydCB7IGRhc2hib2FyZExvYWRlclNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc2VydmljZXMvRGFzaGJvYXJkTG9hZGVyU3J2JztcbmltcG9ydCB7IERhc2hib2FyZFNydiwgZ2V0RGFzaGJvYXJkU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9EYXNoYm9hcmRTcnYnO1xuaW1wb3J0IHsgZ2V0VGltZVNydiwgVGltZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc2VydmljZXMvVGltZVNydic7XG5pbXBvcnQgeyBkYXNoYm9hcmRXYXRjaGVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2xpdmUvZGFzaGJvYXJkL2Rhc2hib2FyZFdhdGNoZXInO1xuaW1wb3J0IHsgdG9TdGF0ZUtleSB9IGZyb20gJ2FwcC9mZWF0dXJlcy92YXJpYWJsZXMvdXRpbHMnO1xuaW1wb3J0IHsgRGFzaGJvYXJkRFRPLCBEYXNoYm9hcmRJbml0UGhhc2UsIERhc2hib2FyZFJvdXRlcywgU3RvcmVTdGF0ZSwgVGh1bmtEaXNwYXRjaCwgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBjcmVhdGVEYXNoYm9hcmRRdWVyeVJ1bm5lciB9IGZyb20gJy4uLy4uL3F1ZXJ5L3N0YXRlL0Rhc2hib2FyZFF1ZXJ5UnVubmVyL0Rhc2hib2FyZFF1ZXJ5UnVubmVyJztcbmltcG9ydCB7IGluaXRWYXJpYWJsZXNUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3ZhcmlhYmxlcy9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldElmRXhpc3RzTGFzdEtleSB9IGZyb20gJy4uLy4uL3ZhcmlhYmxlcy9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4vRGFzaGJvYXJkTW9kZWwnO1xuaW1wb3J0IHsgZW1pdERhc2hib2FyZFZpZXdFdmVudCB9IGZyb20gJy4vYW5hbHl0aWNzUHJvY2Vzc29yJztcbmltcG9ydCB7IGRhc2hib2FyZEluaXRDb21wbGV0ZWQsIGRhc2hib2FyZEluaXRGYWlsZWQsIGRhc2hib2FyZEluaXRGZXRjaGluZywgZGFzaGJvYXJkSW5pdFNlcnZpY2VzIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdERhc2hib2FyZEFyZ3Mge1xuICB1cmxVaWQ/OiBzdHJpbmc7XG4gIHVybFNsdWc/OiBzdHJpbmc7XG4gIHVybFR5cGU/OiBzdHJpbmc7XG4gIHVybEZvbGRlcklkPzogc3RyaW5nIHwgbnVsbDtcbiAgYWNjZXNzVG9rZW4/OiBzdHJpbmc7XG4gIHJvdXRlTmFtZT86IHN0cmluZztcbiAgZml4VXJsOiBib29sZWFuO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhc2hib2FyZChcbiAgYXJnczogSW5pdERhc2hib2FyZEFyZ3MsXG4gIGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoLFxuICBnZXRTdGF0ZTogKCkgPT4gU3RvcmVTdGF0ZVxuKTogUHJvbWlzZTxEYXNoYm9hcmREVE8gfCBudWxsPiB7XG4gIC8vIFdoZW4gY3JlYXRpbmcgbmV3IG9yIGFkZGluZyBwYW5lbHMgdG8gYSBkYXNoYm9hcmQgZnJvbSBleHBsb3JlIHdlIGxvYWQgaXQgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IG1vZGVsID0gc3RvcmUuZ2V0T2JqZWN0PERhc2hib2FyZERUTz4oREFTSEJPQVJEX0ZST01fTFNfS0VZKTtcbiAgaWYgKG1vZGVsKSB7XG4gICAgcmVtb3ZlRGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICB0cnkge1xuICAgIHN3aXRjaCAoYXJncy5yb3V0ZU5hbWUpIHtcbiAgICAgIGNhc2UgRGFzaGJvYXJkUm91dGVzLkhvbWU6IHtcbiAgICAgICAgLy8gbG9hZCBob21lIGRhc2hcbiAgICAgICAgY29uc3QgZGFzaERUTzogRGFzaGJvYXJkRFRPID0gYXdhaXQgYmFja2VuZFNydi5nZXQoJy9hcGkvZGFzaGJvYXJkcy9ob21lJyk7XG5cbiAgICAgICAgLy8gaWYgdXNlciBzcGVjaWZpZWQgYSBjdXN0b20gaG9tZSBkYXNoYm9hcmQgcmVkaXJlY3QgdG8gdGhhdFxuICAgICAgICBpZiAoZGFzaERUTy5yZWRpcmVjdFVyaSkge1xuICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGxvY2F0aW9uVXRpbC5zdHJpcEJhc2VGcm9tVXJsKGRhc2hEVE8ucmVkaXJlY3RVcmkpO1xuICAgICAgICAgIGxvY2F0aW9uU2VydmljZS5yZXBsYWNlKG5ld1VybCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkaXNhYmxlIHNvbWUgYWN0aW9ucyBvbiB0aGUgZGVmYXVsdCBob21lIGRhc2hib2FyZFxuICAgICAgICBkYXNoRFRPLm1ldGEuY2FuU2F2ZSA9IGZhbHNlO1xuICAgICAgICBkYXNoRFRPLm1ldGEuY2FuU2hhcmUgPSBmYWxzZTtcbiAgICAgICAgZGFzaERUTy5tZXRhLmNhblN0YXIgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGRhc2hEVE87XG4gICAgICB9XG4gICAgICBjYXNlIERhc2hib2FyZFJvdXRlcy5QdWJsaWM6IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGRhc2hib2FyZExvYWRlclNydi5sb2FkRGFzaGJvYXJkKCdwdWJsaWMnLCBhcmdzLnVybFNsdWcsIGFyZ3MuYWNjZXNzVG9rZW4pO1xuICAgICAgfVxuICAgICAgY2FzZSBEYXNoYm9hcmRSb3V0ZXMuTm9ybWFsOiB7XG4gICAgICAgIGNvbnN0IGRhc2hEVE86IERhc2hib2FyZERUTyA9IGF3YWl0IGRhc2hib2FyZExvYWRlclNydi5sb2FkRGFzaGJvYXJkKGFyZ3MudXJsVHlwZSwgYXJncy51cmxTbHVnLCBhcmdzLnVybFVpZCk7XG5cbiAgICAgICAgaWYgKGFyZ3MuZml4VXJsICYmIGRhc2hEVE8ubWV0YS51cmwpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgY3VycmVudCB1cmwgaXMgY29ycmVjdCAobWlnaHQgYmUgb2xkIHNsdWcpXG4gICAgICAgICAgY29uc3QgZGFzaGJvYXJkVXJsID0gbG9jYXRpb25VdGlsLnN0cmlwQmFzZUZyb21VcmwoZGFzaERUTy5tZXRhLnVybCk7XG4gICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZTtcblxuICAgICAgICAgIGlmIChkYXNoYm9hcmRVcmwgIT09IGN1cnJlbnRQYXRoKSB7XG4gICAgICAgICAgICAvLyBTcHJlYWQgY3VycmVudCBsb2NhdGlvbiB0byBwZXJzaXN0IHNlYXJjaCBwYXJhbXMgdXNlZCBmb3IgbmF2aWdhdGlvblxuICAgICAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnJlcGxhY2Uoe1xuICAgICAgICAgICAgICAuLi5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKSxcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IGRhc2hib2FyZFVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBjb3JyZWN0IHVybCBjb3JyZWN0aW5nJywgZGFzaGJvYXJkVXJsLCBjdXJyZW50UGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXNoRFRPO1xuICAgICAgfVxuICAgICAgY2FzZSBEYXNoYm9hcmRSb3V0ZXMuTmV3OiB7XG4gICAgICAgIHJldHVybiBnZXROZXdEYXNoYm9hcmRNb2RlbERhdGEoYXJncy51cmxGb2xkZXJJZCk7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6ICdVbmtub3duIHJvdXRlICcgKyBhcmdzLnJvdXRlTmFtZSB9O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSWdub3JlIGNhbmNlbGxlZCBlcnJvcnNcbiAgICBpZiAoaXNGZXRjaEVycm9yKGVycikgJiYgZXJyLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdEZhaWxlZCh7IG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggZGFzaGJvYXJkJywgZXJyb3I6IGVyciB9KSk7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBhY3Rpb24gKG9yIHNhZ2EpIGRvZXMgZXZlcnl0aGluZyBuZWVkZWQgdG8gYm9vdHN0cmFwIGEgZGFzaGJvYXJkICYgZGFzaGJvYXJkIG1vZGVsLlxuICogRmlyc3QgaXQgaGFuZGxlcyB0aGUgcHJvY2VzcyBvZiBmZXRjaGluZyB0aGUgZGFzaGJvYXJkLCBjb3JyZWN0aW5nIHRoZSB1cmwgaWYgcmVxdWlyZWQgKGNhdXNpbmcgcmVkaXJlY3RzL3VybCB1cGRhdGVzKVxuICpcbiAqIFRoaXMgaXMgdXNlZCBib3RoIGZvciBzaW5nbGUgZGFzaGJvYXJkICYgc29sbyBwYW5lbCByb3V0ZXMsIGhvbWUgJiBuZXcgZGFzaGJvYXJkIHJvdXRlcy5cbiAqXG4gKiBUaGVuIGl0IGhhbmRsZXMgdGhlIGluaXRpYWxpemluZyBvZiB0aGUgb2xkIGFuZ3VsYXIgc2VydmljZXMgdGhhdCB0aGUgZGFzaGJvYXJkIGNvbXBvbmVudHMgJiBwYW5lbHMgc3RpbGwgZGVwZW5kIG9uXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhc2hib2FyZChhcmdzOiBJbml0RGFzaGJvYXJkQXJncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAvLyBzZXQgZmV0Y2hpbmcgc3RhdGVcbiAgICBkaXNwYXRjaChkYXNoYm9hcmRJbml0RmV0Y2hpbmcoKSk7XG5cbiAgICAvLyBmZXRjaCBkYXNoYm9hcmQgZGF0YVxuICAgIGNvbnN0IGRhc2hEVE8gPSBhd2FpdCBmZXRjaERhc2hib2FyZChhcmdzLCBkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuXG4gICAgLy8gcmV0dXJucyBudWxsIGlmIHRoZXJlIHdhcyBhIHJlZGlyZWN0IG9yIGVycm9yXG4gICAgaWYgKCFkYXNoRFRPKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2V0IGluaXRpYWxpemluZyBzdGF0ZVxuICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRTZXJ2aWNlcygpKTtcblxuICAgIC8vIGNyZWF0ZSBtb2RlbFxuICAgIGxldCBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICAgIHRyeSB7XG4gICAgICBkYXNoYm9hcmQgPSBuZXcgRGFzaGJvYXJkTW9kZWwoZGFzaERUTy5kYXNoYm9hcmQsIGRhc2hEVE8ubWV0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkaXNwYXRjaChkYXNoYm9hcmRJbml0RmFpbGVkKHsgbWVzc2FnZTogJ0ZhaWxlZCBjcmVhdGUgZGFzaGJvYXJkIG1vZGVsJywgZXJyb3I6IGVyciB9KSk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWRkIG1pc3Npbmcgb3JnSWQgcXVlcnkgcGFyYW1cbiAgICBjb25zdCBzdG9yZVN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKTtcblxuICAgIGlmICghcXVlcnlQYXJhbXMub3JnSWQpIHtcbiAgICAgIC8vIFRPRE8gdGhpcyBpcyBjdXJyZW50bHkgbm90IHBvc3NpYmxlIHdpdGggdGhlIExvY2F0aW9uU2VydmljZSBBUElcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHsgb3JnSWQ6IHN0b3JlU3RhdGUudXNlci5vcmdJZCB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBpbml0IHNlcnZpY2VzXG4gICAgY29uc3QgdGltZVNydjogVGltZVNydiA9IGdldFRpbWVTcnYoKTtcbiAgICBjb25zdCBkYXNoYm9hcmRTcnY6IERhc2hib2FyZFNydiA9IGdldERhc2hib2FyZFNydigpO1xuXG4gICAgLy8gbGVnYWN5IHNydiBzdGF0ZSwgd2UgbmVlZCB0aGlzIHZhbHVlIHVwZGF0ZWQgZm9yIGJ1aWx0LWluIGFubm90YXRpb25zXG4gICAgZGFzaGJvYXJkU3J2LnNldEN1cnJlbnQoZGFzaGJvYXJkKTtcblxuICAgIHRpbWVTcnYuaW5pdChkYXNoYm9hcmQpO1xuXG4gICAgY29uc3QgZGFzaGJvYXJkVWlkID0gdG9TdGF0ZUtleShhcmdzLnVybFVpZCA/PyBkYXNoYm9hcmQudWlkKTtcbiAgICAvLyB0ZW1wbGF0ZSB2YWx1ZXMgc2VydmljZSBuZWVkcyB0byBpbml0aWFsaXplIGNvbXBsZXRlbHkgYmVmb3JlIHRoZSByZXN0IG9mIHRoZSBkYXNoYm9hcmQgY2FuIGxvYWRcbiAgICBhd2FpdCBkaXNwYXRjaChpbml0VmFyaWFibGVzVHJhbnNhY3Rpb24oZGFzaGJvYXJkVWlkLCBkYXNoYm9hcmQpKTtcblxuICAgIC8vIERhc2hib2FyZFF1ZXJ5UnVubmVyIG5lZWRzIHRvIHJ1biBhZnRlciBhbGwgdmFyaWFibGVzIGhhdmUgYmVlbiByZXNvbHZlZCBzbyB0aGF0IGFueSBhbm5vdGF0aW9uIHF1ZXJ5IGluY2x1ZGluZyBhIHZhcmlhYmxlXG4gICAgLy8gd2lsbCBiZSBjb3JyZWN0bHkgcmVzb2x2ZWRcbiAgICBjb25zdCBydW5uZXIgPSBjcmVhdGVEYXNoYm9hcmRRdWVyeVJ1bm5lcih7IGRhc2hib2FyZCwgdGltZVNydiB9KTtcbiAgICBydW5uZXIucnVuKHsgZGFzaGJvYXJkLCByYW5nZTogdGltZVNydi50aW1lUmFuZ2UoKSB9KTtcblxuICAgIGlmIChnZXRJZkV4aXN0c0xhc3RLZXkoZ2V0U3RhdGUoKSkgIT09IGRhc2hib2FyZFVpZCkge1xuICAgICAgLy8gaWYgYSBwcmV2aW91cyBkYXNoYm9hcmQgaGFzIHNsb3cgcnVubmluZyB2YXJpYWJsZSBxdWVyaWVzIHRoZSBiYXRjaCB1aWQgd2lsbCBiZSB0aGUgbmV3IG9uZVxuICAgICAgLy8gYnV0IHRoZSBhcmdzLnVybFVpZCB3aWxsIGJlIHRoZSBzYW1lIGFzIGJlZm9yZSBpbml0VmFyaWFibGVzVHJhbnNhY3Rpb24gd2FzIGNhbGxlZCBzbyB0aGVuIHdlIGNhbid0IGNvbnRpbnVlIGluaXRpYWxpemluZ1xuICAgICAgLy8gdGhlIHByZXZpb3VzIGRhc2hib2FyZC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBkYXNoYm9hcmQgaXMgaW4gYSBkaWZmZXJlbnQgaW5pdCBwaGFzZSBpdCBtZWFucyBpdCBjYW5jZWxsZWQgZHVyaW5nIHNlcnZpY2UgaW5pdFxuICAgIGlmIChnZXRTdGF0ZSgpLmRhc2hib2FyZC5pbml0UGhhc2UgIT09IERhc2hib2FyZEluaXRQaGFzZS5TZXJ2aWNlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBkYXNoYm9hcmQucHJvY2Vzc1JlcGVhdHMoKTtcblxuICAgICAgLy8gaGFuZGxlIGF1dG8gZml4IGV4cGVyaW1lbnRhbCBmZWF0dXJlXG4gICAgICBpZiAocXVlcnlQYXJhbXMuYXV0b2ZpdHBhbmVscykge1xuICAgICAgICBkYXNoYm9hcmQuYXV0b0ZpdFBhbmVscyh3aW5kb3cuaW5uZXJIZWlnaHQsIHF1ZXJ5UGFyYW1zLmtpb3NrKTtcbiAgICAgIH1cblxuICAgICAga2V5YmluZGluZ1Nydi5zZXR1cERhc2hib2FyZEJpbmRpbmdzKGRhc2hib2FyZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdEYXNoYm9hcmQgaW5pdCBmYWlsZWQnLCBlcnIpKSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuXG4gICAgLy8gc2VuZCBvcGVuIGRhc2hib2FyZCBldmVudFxuICAgIGlmIChhcmdzLnJvdXRlTmFtZSAhPT0gRGFzaGJvYXJkUm91dGVzLk5ldykge1xuICAgICAgZW1pdERhc2hib2FyZFZpZXdFdmVudChkYXNoYm9hcmQpO1xuXG4gICAgICAvLyBMaXN0ZW4gZm9yIGNoYW5nZXMgb24gdGhlIGN1cnJlbnQgZGFzaGJvYXJkXG4gICAgICBkYXNoYm9hcmRXYXRjaGVyLndhdGNoKGRhc2hib2FyZC51aWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXNoYm9hcmRXYXRjaGVyLmxlYXZlKCk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHdlZWsgc3RhcnRcbiAgICBpZiAoZGFzaGJvYXJkLndlZWtTdGFydCAhPT0gJycpIHtcbiAgICAgIHNldFdlZWtTdGFydChkYXNoYm9hcmQud2Vla1N0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0V2Vla1N0YXJ0KGNvbmZpZy5ib290RGF0YS51c2VyLndlZWtTdGFydCk7XG4gICAgfVxuXG4gICAgLy8geWF5IHdlIGFyZSBkb25lXG4gICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdENvbXBsZXRlZChkYXNoYm9hcmQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld0Rhc2hib2FyZE1vZGVsRGF0YSh1cmxGb2xkZXJJZD86IHN0cmluZyB8IG51bGwpOiBhbnkge1xuICBjb25zdCBkYXRhID0ge1xuICAgIG1ldGE6IHtcbiAgICAgIGNhblN0YXI6IGZhbHNlLFxuICAgICAgY2FuU2hhcmU6IGZhbHNlLFxuICAgICAgY2FuRGVsZXRlOiBmYWxzZSxcbiAgICAgIGlzTmV3OiB0cnVlLFxuICAgICAgZm9sZGVySWQ6IDAsXG4gICAgfSxcbiAgICBkYXNoYm9hcmQ6IHtcbiAgICAgIHRpdGxlOiAnTmV3IGRhc2hib2FyZCcsXG4gICAgICBwYW5lbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdhZGQtcGFuZWwnLFxuICAgICAgICAgIGdyaWRQb3M6IHsgeDogMCwgeTogMCwgdzogMTIsIGg6IDkgfSxcbiAgICAgICAgICB0aXRsZTogJ1BhbmVsIFRpdGxlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcblxuICBpZiAodXJsRm9sZGVySWQpIHtcbiAgICBkYXRhLm1ldGEuZm9sZGVySWQgPSBwYXJzZUludCh1cmxGb2xkZXJJZCwgMTApO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmNvbnN0IERBU0hCT0FSRF9GUk9NX0xTX0tFWSA9ICdEQVNIQk9BUkRfRlJPTV9MU19LRVknO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UobW9kZWw6IERhc2hib2FyZERUTykge1xuICBzdG9yZS5zZXRPYmplY3QoREFTSEJPQVJEX0ZST01fTFNfS0VZLCBtb2RlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgc3RvcmUuZGVsZXRlKERBU0hCT0FSRF9GUk9NX0xTX0tFWSk7XG59XG4iLCJpbXBvcnQgeyBQYW5lbE1lbnVJdGVtIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbmd1bGFyQ29tcG9uZW50LCBnZXREYXRhU291cmNlU3J2LCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFBhbmVsQ3RybCB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL0Rhc2hib2FyZE1vZGVsJztcbmltcG9ydCB7IFBhbmVsTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL1BhbmVsTW9kZWwnO1xuaW1wb3J0IHtcbiAgYWRkTGlicmFyeVBhbmVsLFxuICBjb3B5UGFuZWwsXG4gIGR1cGxpY2F0ZVBhbmVsLFxuICByZW1vdmVQYW5lbCxcbiAgc2hhcmVQYW5lbCxcbiAgdW5saW5rTGlicmFyeVBhbmVsLFxufSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3V0aWxzL3BhbmVsJztcbmltcG9ydCB7IGlzUGFuZWxNb2RlbExpYnJhcnlQYW5lbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9ndWFyZCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJ2FwcC9zdG9yZS9zdG9yZSc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IGdldEV4cGxvcmVVcmwgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWxzL2V4cGxvcmUnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb0V4cGxvcmUgfSBmcm9tICcuLi8uLi9leHBsb3JlL3N0YXRlL21haW4nO1xuaW1wb3J0IHsgZ2V0VGltZVNydiB9IGZyb20gJy4uL3NlcnZpY2VzL1RpbWVTcnYnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFuZWxNZW51KFxuICBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsLFxuICBwYW5lbDogUGFuZWxNb2RlbCxcbiAgYW5ndWxhckNvbXBvbmVudD86IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsXG4pOiBQYW5lbE1lbnVJdGVtW10ge1xuICBjb25zdCBvblZpZXdQYW5lbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7XG4gICAgICB2aWV3UGFuZWw6IHBhbmVsLmlkLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uRWRpdFBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHtcbiAgICAgIGVkaXRQYW5lbDogcGFuZWwuaWQsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25TaGFyZVBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNoYXJlUGFuZWwoZGFzaGJvYXJkLCBwYW5lbCk7XG4gIH07XG5cbiAgY29uc3Qgb25BZGRMaWJyYXJ5UGFuZWwgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkTGlicmFyeVBhbmVsKGRhc2hib2FyZCwgcGFuZWwpO1xuICB9O1xuXG4gIGNvbnN0IG9uVW5saW5rTGlicmFyeVBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHVubGlua0xpYnJhcnlQYW5lbChwYW5lbCk7XG4gIH07XG5cbiAgY29uc3Qgb25JbnNwZWN0UGFuZWwgPSAodGFiPzogc3RyaW5nKSA9PiB7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoe1xuICAgICAgaW5zcGVjdDogcGFuZWwuaWQsXG4gICAgICBpbnNwZWN0VGFiOiB0YWIsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25Nb3JlID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRHVwbGljYXRlUGFuZWwgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHVwbGljYXRlUGFuZWwoZGFzaGJvYXJkLCBwYW5lbCk7XG4gIH07XG5cbiAgY29uc3Qgb25Db3B5UGFuZWwgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29weVBhbmVsKHBhbmVsKTtcbiAgfTtcblxuICBjb25zdCBvblJlbW92ZVBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlbW92ZVBhbmVsKGRhc2hib2FyZCwgcGFuZWwsIHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uTmF2aWdhdGVUb0V4cGxvcmUgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgb3BlbkluTmV3V2luZG93ID1cbiAgICAgIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSA/ICh1cmw6IHN0cmluZykgPT4gd2luZG93Lm9wZW4oYCR7Y29uZmlnLmFwcFN1YlVybH0ke3VybH1gKSA6IHVuZGVmaW5lZDtcbiAgICBzdG9yZS5kaXNwYXRjaChuYXZpZ2F0ZVRvRXhwbG9yZShwYW5lbCwgeyBnZXREYXRhU291cmNlU3J2LCBnZXRUaW1lU3J2LCBnZXRFeHBsb3JlVXJsLCBvcGVuSW5OZXdXaW5kb3cgfSkgYXMgYW55KTtcbiAgfTtcblxuICBjb25zdCBtZW51OiBQYW5lbE1lbnVJdGVtW10gPSBbXTtcblxuICBpZiAoIXBhbmVsLmlzRWRpdGluZykge1xuICAgIG1lbnUucHVzaCh7XG4gICAgICB0ZXh0OiAnVmlldycsXG4gICAgICBpY29uQ2xhc3NOYW1lOiAnZXllJyxcbiAgICAgIG9uQ2xpY2s6IG9uVmlld1BhbmVsLFxuICAgICAgc2hvcnRjdXQ6ICd2JyxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChkYXNoYm9hcmQuY2FuRWRpdFBhbmVsKHBhbmVsKSAmJiAhcGFuZWwuaXNFZGl0aW5nKSB7XG4gICAgbWVudS5wdXNoKHtcbiAgICAgIHRleHQ6ICdFZGl0JyxcbiAgICAgIGljb25DbGFzc05hbWU6ICdlZGl0JyxcbiAgICAgIG9uQ2xpY2s6IG9uRWRpdFBhbmVsLFxuICAgICAgc2hvcnRjdXQ6ICdlJyxcbiAgICB9KTtcbiAgfVxuXG4gIG1lbnUucHVzaCh7XG4gICAgdGV4dDogJ1NoYXJlJyxcbiAgICBpY29uQ2xhc3NOYW1lOiAnc2hhcmUtYWx0JyxcbiAgICBvbkNsaWNrOiBvblNoYXJlUGFuZWwsXG4gICAgc2hvcnRjdXQ6ICdwIHMnLFxuICB9KTtcblxuICBpZiAoY29udGV4dFNydi5oYXNBY2Nlc3NUb0V4cGxvcmUoKSAmJiAhKHBhbmVsLnBsdWdpbiAmJiBwYW5lbC5wbHVnaW4ubWV0YS5za2lwRGF0YVF1ZXJ5KSkge1xuICAgIG1lbnUucHVzaCh7XG4gICAgICB0ZXh0OiAnRXhwbG9yZScsXG4gICAgICBpY29uQ2xhc3NOYW1lOiAnY29tcGFzcycsXG4gICAgICBzaG9ydGN1dDogJ3gnLFxuICAgICAgb25DbGljazogb25OYXZpZ2F0ZVRvRXhwbG9yZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGluc3BlY3RNZW51OiBQYW5lbE1lbnVJdGVtW10gPSBbXTtcblxuICAvLyBPbmx5IHNob3cgdGhlc2UgaW5zcGVjdCBhY3Rpb25zIGZvciBkYXRhIHBsdWdpbnNcbiAgaWYgKHBhbmVsLnBsdWdpbiAmJiAhcGFuZWwucGx1Z2luLm1ldGEuc2tpcERhdGFRdWVyeSkge1xuICAgIGluc3BlY3RNZW51LnB1c2goe1xuICAgICAgdGV4dDogJ0RhdGEnLFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4gb25JbnNwZWN0UGFuZWwoJ2RhdGEnKSxcbiAgICB9KTtcblxuICAgIGlmIChkYXNoYm9hcmQubWV0YS5jYW5FZGl0KSB7XG4gICAgICBpbnNwZWN0TWVudS5wdXNoKHtcbiAgICAgICAgdGV4dDogJ1F1ZXJ5JyxcbiAgICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4gb25JbnNwZWN0UGFuZWwoJ3F1ZXJ5JyksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbnNwZWN0TWVudS5wdXNoKHtcbiAgICB0ZXh0OiAnUGFuZWwgSlNPTicsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4gb25JbnNwZWN0UGFuZWwoJ2pzb24nKSxcbiAgfSk7XG5cbiAgbWVudS5wdXNoKHtcbiAgICB0eXBlOiAnc3VibWVudScsXG4gICAgdGV4dDogJ0luc3BlY3QnLFxuICAgIGljb25DbGFzc05hbWU6ICdpbmZvLWNpcmNsZScsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4gb25JbnNwZWN0UGFuZWwoKSxcbiAgICBzaG9ydGN1dDogJ2knLFxuICAgIHN1Yk1lbnU6IGluc3BlY3RNZW51LFxuICB9KTtcblxuICBjb25zdCBzdWJNZW51OiBQYW5lbE1lbnVJdGVtW10gPSBbXTtcblxuICBpZiAoZGFzaGJvYXJkLmNhbkVkaXRQYW5lbChwYW5lbCkgJiYgIShwYW5lbC5pc1ZpZXdpbmcgfHwgcGFuZWwuaXNFZGl0aW5nKSkge1xuICAgIHN1Yk1lbnUucHVzaCh7XG4gICAgICB0ZXh0OiAnRHVwbGljYXRlJyxcbiAgICAgIG9uQ2xpY2s6IG9uRHVwbGljYXRlUGFuZWwsXG4gICAgICBzaG9ydGN1dDogJ3AgZCcsXG4gICAgfSk7XG5cbiAgICBzdWJNZW51LnB1c2goe1xuICAgICAgdGV4dDogJ0NvcHknLFxuICAgICAgb25DbGljazogb25Db3B5UGFuZWwsXG4gICAgfSk7XG5cbiAgICBpZiAoaXNQYW5lbE1vZGVsTGlicmFyeVBhbmVsKHBhbmVsKSkge1xuICAgICAgc3ViTWVudS5wdXNoKHtcbiAgICAgICAgdGV4dDogJ1VubGluayBsaWJyYXJ5IHBhbmVsJyxcbiAgICAgICAgb25DbGljazogb25VbmxpbmtMaWJyYXJ5UGFuZWwsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViTWVudS5wdXNoKHtcbiAgICAgICAgdGV4dDogJ0NyZWF0ZSBsaWJyYXJ5IHBhbmVsJyxcbiAgICAgICAgb25DbGljazogb25BZGRMaWJyYXJ5UGFuZWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBhZGQgb2xkIGFuZ3VsYXIgcGFuZWwgb3B0aW9uc1xuICBpZiAoYW5ndWxhckNvbXBvbmVudCkge1xuICAgIGNvbnN0IHNjb3BlID0gYW5ndWxhckNvbXBvbmVudC5nZXRTY29wZSgpO1xuICAgIGNvbnN0IHBhbmVsQ3RybDogUGFuZWxDdHJsID0gc2NvcGUuJCRjaGlsZEhlYWQuY3RybDtcbiAgICBjb25zdCBhbmd1bGFyTWVudUl0ZW1zID0gcGFuZWxDdHJsLmdldEV4dGVuZGVkTWVudSgpO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFuZ3VsYXJNZW51SXRlbXMpIHtcbiAgICAgIGNvbnN0IHJlYWN0SXRlbTogUGFuZWxNZW51SXRlbSA9IHtcbiAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxuICAgICAgICBocmVmOiBpdGVtLmhyZWYsXG4gICAgICAgIHNob3J0Y3V0OiBpdGVtLnNob3J0Y3V0LFxuICAgICAgfTtcblxuICAgICAgaWYgKGl0ZW0uY2xpY2spIHtcbiAgICAgICAgcmVhY3RJdGVtLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgc2NvcGUuJGV2YWwoaXRlbS5jbGljaywgeyBjdHJsOiBwYW5lbEN0cmwgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN1Yk1lbnUucHVzaChyZWFjdEl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGlmICghcGFuZWwuaXNFZGl0aW5nICYmIHN1Yk1lbnUubGVuZ3RoKSB7XG4gICAgbWVudS5wdXNoKHtcbiAgICAgIHR5cGU6ICdzdWJtZW51JyxcbiAgICAgIHRleHQ6ICdNb3JlLi4uJyxcbiAgICAgIGljb25DbGFzc05hbWU6ICdjdWJlJyxcbiAgICAgIHN1Yk1lbnUsXG4gICAgICBvbkNsaWNrOiBvbk1vcmUsXG4gICAgfSk7XG4gIH1cblxuICBpZiAoZGFzaGJvYXJkLmNhbkVkaXRQYW5lbChwYW5lbCkgJiYgIXBhbmVsLmlzRWRpdGluZyAmJiAhcGFuZWwuaXNWaWV3aW5nKSB7XG4gICAgbWVudS5wdXNoKHsgdHlwZTogJ2RpdmlkZXInLCB0ZXh0OiAnJyB9KTtcblxuICAgIG1lbnUucHVzaCh7XG4gICAgICB0ZXh0OiAnUmVtb3ZlJyxcbiAgICAgIGljb25DbGFzc05hbWU6ICd0cmFzaC1hbHQnLFxuICAgICAgb25DbGljazogb25SZW1vdmVQYW5lbCxcbiAgICAgIHNob3J0Y3V0OiAncCByJyxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtZW51O1xufVxuIiwiaW1wb3J0IHsgYXBwbHlGaWVsZE92ZXJyaWRlcywgQXJyYXlEYXRhRnJhbWUsIGdldERlZmF1bHRUaW1lUmFuZ2UsIExvYWRpbmdTdGF0ZSwgUGFuZWxEYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuXG5pbXBvcnQgeyBTbmFwc2hvdFdvcmtlciB9IGZyb20gJy4uLy4uL3F1ZXJ5L3N0YXRlL0Rhc2hib2FyZFF1ZXJ5UnVubmVyL1NuYXBzaG90V29ya2VyJztcbmltcG9ydCB7IGdldFByb2Nlc3NlZERhdGFGcmFtZXMgfSBmcm9tICcuLi8uLi9xdWVyeS9zdGF0ZS9ydW5SZXF1ZXN0JztcbmltcG9ydCB7IGdldFRpbWVTcnYgfSBmcm9tICcuLi9zZXJ2aWNlcy9UaW1lU3J2JztcbmltcG9ydCB7IERhc2hib2FyZE1vZGVsLCBQYW5lbE1vZGVsIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5pbXBvcnQgeyBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyB9IGZyb20gJy4vcGFuZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNuYXBzaG90RGF0YShwYW5lbDogUGFuZWxNb2RlbCwgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbCk6IFBhbmVsRGF0YSB7XG4gIGNvbnN0IGRhdGEgPSBnZXRQcm9jZXNzZWREYXRhRnJhbWVzKHBhbmVsLnNuYXBzaG90RGF0YSk7XG4gIGNvbnN0IHdvcmtlciA9IG5ldyBTbmFwc2hvdFdvcmtlcigpO1xuICBjb25zdCBvcHRpb25zID0geyBkYXNoYm9hcmQsIHJhbmdlOiBnZXREZWZhdWx0VGltZVJhbmdlKCkgfTtcbiAgY29uc3QgYW5ub3RhdGlvbkV2ZW50cyA9IHdvcmtlci5jYW5Xb3JrKG9wdGlvbnMpID8gd29ya2VyLmdldEFubm90YXRpb25zSW5TbmFwc2hvdChkYXNoYm9hcmQsIHBhbmVsLmlkKSA6IFtdO1xuICBjb25zdCBhbm5vdGF0aW9ucyA9IFtuZXcgQXJyYXlEYXRhRnJhbWUoYW5ub3RhdGlvbkV2ZW50cyldO1xuICBjb25zdCB0aW1lRGF0YSA9IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzKHBhbmVsLCBnZXRUaW1lU3J2KCkudGltZVJhbmdlKCkpO1xuXG4gIHJldHVybiB7XG4gICAgdGltZVJhbmdlOiB0aW1lRGF0YS50aW1lUmFuZ2UsXG4gICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgIHNlcmllczogYXBwbHlGaWVsZE92ZXJyaWRlcyh7XG4gICAgICBkYXRhLFxuICAgICAgZmllbGRDb25maWc6IHtcbiAgICAgICAgZGVmYXVsdHM6IHt9LFxuICAgICAgICBvdmVycmlkZXM6IFtdLFxuICAgICAgfSxcbiAgICAgIHJlcGxhY2VWYXJpYWJsZXM6IHBhbmVsLnJlcGxhY2VWYXJpYWJsZXMsXG4gICAgICBmaWVsZENvbmZpZ1JlZ2lzdHJ5OiBwYW5lbC5wbHVnaW4hLmZpZWxkQ29uZmlnUmVnaXN0cnksXG4gICAgICB0aGVtZTogY29uZmlnLnRoZW1lMixcbiAgICAgIHRpbWVab25lOiBkYXNoYm9hcmQuZ2V0VGltZXpvbmUoKSxcbiAgICB9KSxcbiAgICBhbm5vdGF0aW9ucyxcbiAgfTtcbn1cbiIsImV4cG9ydCBlbnVtIEluc3BlY3RUYWIge1xuICBEYXRhID0gJ2RhdGEnLFxuICBNZXRhID0gJ21ldGEnLCAvLyBXaGVuIHJlc3VsdCBtZXRhZGF0YSBleGlzdHNcbiAgRXJyb3IgPSAnZXJyb3InLFxuICBTdGF0cyA9ICdzdGF0cycsXG4gIEpTT04gPSAnanNvbicsXG4gIFF1ZXJ5ID0gJ3F1ZXJ5JyxcbiAgQWN0aW9ucyA9ICdhY3Rpb25zJywgLy8gQUxQSEEhXG59XG4iLCJpbXBvcnQge1xuICBEYXRhTGluayxcbiAgRGlzcGxheVZhbHVlLFxuICBGaWVsZERpc3BsYXksXG4gIGZvcm1hdHRlZFZhbHVlVG9TdHJpbmcsXG4gIGdldEZpZWxkRGlzcGxheVZhbHVlc1Byb3h5LFxuICBnZXRUaW1lRmllbGQsXG4gIEludGVycG9sYXRlRnVuY3Rpb24sXG4gIExhYmVscyxcbiAgTGlua01vZGVsU3VwcGxpZXIsXG4gIFNjb3BlZFZhcixcbiAgU2NvcGVkVmFycyxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9QYW5lbE1vZGVsJztcblxuaW1wb3J0IHsgZ2V0TGlua1NydiB9IGZyb20gJy4vbGlua19zcnYnO1xuXG5pbnRlcmZhY2UgU2VyaWVzVmFycyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHJlZklkPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRmllbGRWYXJzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbHM/OiBMYWJlbHM7XG59XG5cbmludGVyZmFjZSBWYWx1ZVZhcnMge1xuICByYXc6IGFueTtcbiAgbnVtZXJpYzogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHRpbWU/OiBudW1iZXI7XG4gIGNhbGM/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEYXRhVmlld1ZhcnMge1xuICBuYW1lPzogc3RyaW5nO1xuICByZWZJZD86IHN0cmluZztcbiAgZmllbGRzPzogUmVjb3JkPHN0cmluZywgRGlzcGxheVZhbHVlPjtcbn1cblxuaW50ZXJmYWNlIERhdGFMaW5rU2NvcGVkVmFycyBleHRlbmRzIFNjb3BlZFZhcnMge1xuICBfX3NlcmllczogU2NvcGVkVmFyPFNlcmllc1ZhcnM+O1xuICBfX2ZpZWxkOiBTY29wZWRWYXI8RmllbGRWYXJzPjtcbiAgX192YWx1ZTogU2NvcGVkVmFyPFZhbHVlVmFycz47XG4gIF9fZGF0YTogU2NvcGVkVmFyPERhdGFWaWV3VmFycz47XG59XG5cbi8qKlxuICogTGluayBzdXBwbGllcnMgY3JlYXRlcyBsaW5rIG1vZGVscyBiYXNlZCBvbiBhIGxpbmsgb3JpZ2luXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGaWVsZExpbmtzU3VwcGxpZXIgPSAodmFsdWU6IEZpZWxkRGlzcGxheSk6IExpbmtNb2RlbFN1cHBsaWVyPEZpZWxkRGlzcGxheT4gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBsaW5rcyA9IHZhbHVlLmZpZWxkLmxpbmtzO1xuICBpZiAoIWxpbmtzIHx8IGxpbmtzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldExpbmtzOiAocmVwbGFjZVZhcmlhYmxlczogSW50ZXJwb2xhdGVGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc2NvcGVkVmFyczogUGFydGlhbDxEYXRhTGlua1Njb3BlZFZhcnM+ID0ge307XG5cbiAgICAgIGlmICh2YWx1ZS52aWV3KSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YUZyYW1lIH0gPSB2YWx1ZS52aWV3O1xuXG4gICAgICAgIHNjb3BlZFZhcnNbJ19fc2VyaWVzJ10gPSB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIG5hbWU6IGRhdGFGcmFtZS5uYW1lLFxuICAgICAgICAgICAgcmVmSWQ6IGRhdGFGcmFtZS5yZWZJZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6ICdTZXJpZXMnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdmFsdWUuY29sSW5kZXggIT09IHVuZGVmaW5lZCA/IGRhdGFGcmFtZS5maWVsZHNbdmFsdWUuY29sSW5kZXhdIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgIHNjb3BlZFZhcnNbJ19fZmllbGQnXSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgIGxhYmVsczogZmllbGQubGFiZWxzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHQ6ICdGaWVsZCcsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh2YWx1ZS5yb3dJbmRleCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLnJvd0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGltZUZpZWxkIH0gPSBnZXRUaW1lRmllbGQoZGF0YUZyYW1lKTtcbiAgICAgICAgICAgIHNjb3BlZFZhcnNbJ19fdmFsdWUnXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByYXc6IGZpZWxkLnZhbHVlcy5nZXQodmFsdWUucm93SW5kZXgpLFxuICAgICAgICAgICAgICAgIG51bWVyaWM6IHZhbHVlLmRpc3BsYXkubnVtZXJpYyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBmb3JtYXR0ZWRWYWx1ZVRvU3RyaW5nKHZhbHVlLmRpc3BsYXkpLFxuICAgICAgICAgICAgICAgIHRpbWU6IHRpbWVGaWVsZCA/IHRpbWVGaWVsZC52YWx1ZXMuZ2V0KHZhbHVlLnJvd0luZGV4KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGV4dDogJ1ZhbHVlJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRXhwb3NlIG90aGVyIHZhbHVlcyBvbiB0aGUgcm93XG4gICAgICAgICAgaWYgKHZhbHVlLnZpZXcpIHtcbiAgICAgICAgICAgIHNjb3BlZFZhcnNbJ19fZGF0YSddID0ge1xuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGFGcmFtZS5uYW1lLFxuICAgICAgICAgICAgICAgIHJlZklkOiBkYXRhRnJhbWUucmVmSWQsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBnZXRGaWVsZERpc3BsYXlWYWx1ZXNQcm94eSh7XG4gICAgICAgICAgICAgICAgICBmcmFtZTogZGF0YUZyYW1lLFxuICAgICAgICAgICAgICAgICAgcm93SW5kZXg6IHZhbHVlLnJvd0luZGV4ISxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGV4dDogJ0RhdGEnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2FsY3VsYXRpb25cbiAgICAgICAgICBzY29wZWRWYXJzWydfX3ZhbHVlJ10gPSB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICByYXc6IHZhbHVlLmRpc3BsYXkubnVtZXJpYyxcbiAgICAgICAgICAgICAgbnVtZXJpYzogdmFsdWUuZGlzcGxheS5udW1lcmljLFxuICAgICAgICAgICAgICB0ZXh0OiBmb3JtYXR0ZWRWYWx1ZVRvU3RyaW5nKHZhbHVlLmRpc3BsYXkpLFxuICAgICAgICAgICAgICBjYWxjOiB2YWx1ZS5uYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHQ6ICdWYWx1ZScsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1ZBTFVFJywgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXBsYWNlOiBJbnRlcnBvbGF0ZUZ1bmN0aW9uID0gKHZhbHVlOiBzdHJpbmcsIHZhcnM6IFNjb3BlZFZhcnMgfCB1bmRlZmluZWQsIGZtdD86IHN0cmluZyB8IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmFsVmFyczogU2NvcGVkVmFycyA9IHtcbiAgICAgICAgICAuLi4oc2NvcGVkVmFycyBhcyBTY29wZWRWYXJzKSxcbiAgICAgICAgICAuLi52YXJzLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVwbGFjZVZhcmlhYmxlcyh2YWx1ZSwgZmluYWxWYXJzLCBmbXQpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGxpbmtzLm1hcCgobGluazogRGF0YUxpbmspID0+IHtcbiAgICAgICAgcmV0dXJuIGdldExpbmtTcnYoKS5nZXREYXRhTGlua1VJTW9kZWwobGluaywgcmVwbGFjZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYW5lbExpbmtzU3VwcGxpZXIgPSAocGFuZWw6IFBhbmVsTW9kZWwpOiBMaW5rTW9kZWxTdXBwbGllcjxQYW5lbE1vZGVsPiB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGxpbmtzID0gcGFuZWwubGlua3M7XG5cbiAgaWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaW5rczogKCkgPT4ge1xuICAgICAgcmV0dXJuIGxpbmtzLm1hcCgobGluaykgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TGlua1NydigpLmdldERhdGFMaW5rVUlNb2RlbChsaW5rLCBwYW5lbC5yZXBsYWNlVmFyaWFibGVzLCBwYW5lbCk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufTtcbiIsImltcG9ydCB7IFBhbmVsTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBQYW5lbFN0YXRlIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYW5lbFN0YXRlRm9yTW9kZWwoc3RhdGU6IFN0b3JlU3RhdGUsIG1vZGVsOiBQYW5lbE1vZGVsKTogUGFuZWxTdGF0ZSB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBzdGF0ZS5wYW5lbHNbbW9kZWwua2V5XTtcbn1cbiIsImltcG9ydCB7XG4gIENvbmZpZ092ZXJyaWRlUnVsZSxcbiAgRHluYW1pY0NvbmZpZ1ZhbHVlLFxuICBGaWVsZENvbG9yTW9kZUlkLFxuICBGaWVsZENvbmZpZ1NvdXJjZSxcbiAgRmllbGRNYXRjaGVySUQsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlU2VyaWVzQ29sb3JDb25maWdGYWN0b3J5ID0gKFxuICBsYWJlbDogc3RyaW5nLFxuICBjb2xvcjogc3RyaW5nLFxuICBmaWVsZENvbmZpZzogRmllbGRDb25maWdTb3VyY2Vcbik6IEZpZWxkQ29uZmlnU291cmNlID0+IHtcbiAgY29uc3QgeyBvdmVycmlkZXMgfSA9IGZpZWxkQ29uZmlnO1xuICBjb25zdCBjdXJyZW50SW5kZXggPSBmaWVsZENvbmZpZy5vdmVycmlkZXMuZmluZEluZGV4KChvdmVycmlkZSkgPT4ge1xuICAgIHJldHVybiBvdmVycmlkZS5tYXRjaGVyLmlkID09PSBGaWVsZE1hdGNoZXJJRC5ieU5hbWUgJiYgb3ZlcnJpZGUubWF0Y2hlci5vcHRpb25zID09PSBsYWJlbDtcbiAgfSk7XG5cbiAgaWYgKGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmllbGRDb25maWcsXG4gICAgICBvdmVycmlkZXM6IFsuLi5maWVsZENvbmZpZy5vdmVycmlkZXMsIGNyZWF0ZU92ZXJyaWRlKGxhYmVsLCBjb2xvcildLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBvdmVycmlkZXNDb3B5ID0gQXJyYXkuZnJvbShvdmVycmlkZXMpO1xuICBjb25zdCBleGlzdGluZyA9IG92ZXJyaWRlc0NvcHlbY3VycmVudEluZGV4XTtcbiAgY29uc3QgcHJvcGVydHlJbmRleCA9IGV4aXN0aW5nLnByb3BlcnRpZXMuZmluZEluZGV4KChwKSA9PiBwLmlkID09PSAnY29sb3InKTtcblxuICBpZiAocHJvcGVydHlJbmRleCA8IDApIHtcbiAgICBvdmVycmlkZXNDb3B5W2N1cnJlbnRJbmRleF0gPSB7XG4gICAgICAuLi5leGlzdGluZyxcbiAgICAgIHByb3BlcnRpZXM6IFsuLi5leGlzdGluZy5wcm9wZXJ0aWVzLCBjcmVhdGVQcm9wZXJ0eShjb2xvcildLFxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmllbGRDb25maWcsXG4gICAgICBvdmVycmlkZXM6IG92ZXJyaWRlc0NvcHksXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHByb3BlcnRpZXNDb3B5ID0gQXJyYXkuZnJvbShleGlzdGluZy5wcm9wZXJ0aWVzKTtcbiAgcHJvcGVydGllc0NvcHlbcHJvcGVydHlJbmRleF0gPSBjcmVhdGVQcm9wZXJ0eShjb2xvcik7XG5cbiAgb3ZlcnJpZGVzQ29weVtjdXJyZW50SW5kZXhdID0ge1xuICAgIC4uLmV4aXN0aW5nLFxuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNDb3B5LFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uZmllbGRDb25maWcsXG4gICAgb3ZlcnJpZGVzOiBvdmVycmlkZXNDb3B5LFxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlT3ZlcnJpZGUgPSAobGFiZWw6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IENvbmZpZ092ZXJyaWRlUnVsZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWF0Y2hlcjoge1xuICAgICAgaWQ6IEZpZWxkTWF0Y2hlcklELmJ5TmFtZSxcbiAgICAgIG9wdGlvbnM6IGxhYmVsLFxuICAgIH0sXG4gICAgcHJvcGVydGllczogW2NyZWF0ZVByb3BlcnR5KGNvbG9yKV0sXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVQcm9wZXJ0eSA9IChjb2xvcjogc3RyaW5nKTogRHluYW1pY0NvbmZpZ1ZhbHVlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogJ2NvbG9yJyxcbiAgICB2YWx1ZToge1xuICAgICAgbW9kZTogRmllbGRDb2xvck1vZGVJZC5GaXhlZCxcbiAgICAgIGZpeGVkQ29sb3I6IGNvbG9yLFxuICAgIH0sXG4gIH07XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzU29sb1JvdXRlKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gLyhkLXNvbG98ZGFzaGJvYXJkLXNvbG8pLy50ZXN0KHBhdGg/LnRvTG93ZXJDYXNlKCkpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCIsIkF1dG9TaXplciIsIkRhc2hib2FyZFBhbmVsIiwiaW5pdERhc2hib2FyZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGFzaGJvYXJkIiwiZ2V0TW9kZWwiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJTb2xvUGFuZWxQYWdlIiwicGFuZWwiLCJub3RGb3VuZCIsImNvbXBvbmVudERpZE1vdW50IiwibWF0Y2giLCJyb3V0ZSIsInByb3BzIiwidXJsU2x1ZyIsInBhcmFtcyIsInNsdWciLCJ1cmxVaWQiLCJ1aWQiLCJ1cmxUeXBlIiwidHlwZSIsInJvdXRlTmFtZSIsImZpeFVybCIsImdldFBhbmVsSWQiLCJwYXJzZUludCIsInF1ZXJ5UGFyYW1zIiwicGFuZWxJZCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImdldFBhbmVsQnlVcmxJZCIsInNldFN0YXRlIiwicmVuZGVyIiwiU29sb1BhbmVsIiwid2lkdGgiLCJoZWlnaHQiLCJrZXkiLCJQdXJlQ29tcG9uZW50IiwiaW5pdFBhbmVsU3RhdGUiLCJzZXRQYW5lbEluc3RhbmNlU3RhdGUiLCJMYXp5TG9hZGVyIiwiUGFuZWxDaHJvbWUiLCJQYW5lbENocm9tZUFuZ3VsYXIiLCJwYW5lbFN0YXRlIiwicGFuZWxzIiwic3RhdGVLZXkiLCJwbHVnaW4iLCJpbnN0YW5jZVN0YXRlIiwiRGFzaGJvYXJkUGFuZWxVbmNvbm5lY3RlZCIsInZhbHVlIiwidiIsImlzSW5WaWV3IiwibGF6eSIsIm9uUGFuZWxMb2FkIiwiaXNWaWV3aW5nIiwiaXNFZGl0aW5nIiwicmVuZGVyUGFuZWxDaHJvbWUiLCJhbmd1bGFyUGFuZWxDdHJsIiwib25JbnN0YW5jZVN0YXRlQ2hhbmdlIiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3RPbmNlIiwidXNlVW5pcXVlSWQiLCJjaGlsZHJlbiIsIm9uTG9hZCIsIm9uQ2hhbmdlIiwiaWQiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJzZXRJc0luVmlldyIsIndyYXBwZXJSZWYiLCJhZGRDYWxsYmFjayIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ3cmFwcGVyRWwiLCJjdXJyZW50Iiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2FsbGJhY2tzIiwidW5vYnNlcnZlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImRpc2Nvbm5lY3QiLCJjIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwidGFyZ2V0Iiwicm9vdE1hcmdpbiIsImNsYXNzTmFtZXMiLCJTdWJzY3JpcHRpb24iLCJBbm5vdGF0aW9uQ2hhbmdlRXZlbnQiLCJDb3JlQXBwIiwiRGFzaGJvYXJkQ3Vyc29yU3luYyIsImdldERlZmF1bHRUaW1lUmFuZ2UiLCJMb2FkaW5nU3RhdGUiLCJ0b0RhdGFGcmFtZURUTyIsInRvVXRjIiwic2VsZWN0b3JzIiwiY29uZmlnIiwibG9jYXRpb25TZXJ2aWNlIiwiUmVmcmVzaEV2ZW50IiwiRXJyb3JCb3VuZGFyeSIsIlBhbmVsQ29udGV4dFByb3ZpZGVyIiwiUEFORUxfQk9SREVSIiwicHJvZmlsZXIiLCJhcHBseVBhbmVsVGltZU92ZXJyaWRlcyIsImNoYW5nZVNlcmllc0NvbG9yQ29uZmlnRmFjdG9yeSIsIlJlbmRlckV2ZW50IiwiY29udGV4dFNydiIsImlzU29sb1JvdXRlIiwiZGVsZXRlQW5ub3RhdGlvbiIsInNhdmVBbm5vdGF0aW9uIiwidXBkYXRlQW5ub3RhdGlvbiIsImdldERhc2hib2FyZFF1ZXJ5UnVubmVyIiwiZ2V0VGltZVNydiIsImxvYWRTbmFwc2hvdERhdGEiLCJQYW5lbEhlYWRlciIsInNlcmllc1Zpc2liaWxpdHlDb25maWdGYWN0b3J5IiwibGl2ZVRpbWVyIiwiREVGQVVMVF9QTFVHSU5fRVJST1IiLCJjb25zdHJ1Y3RvciIsIm9ubHlMb2NhbCIsIkJvb2xlYW4iLCJtZXRhIiwiY2FuRWRpdCIsImNhbk1ha2VFZGl0YWJsZSIsImNhbkFkZCIsImFjY2Vzc0NvbnRyb2xFbmFibGVkIiwiYW5ub3RhdGlvbnNQZXJtaXNzaW9ucyIsImNhbkVkaXREYXNoYm9hcmQiLCJkYXNoYm9hcmRJZCIsIm9yZ2FuaXphdGlvbiIsImNhbkRlbGV0ZSIsIk9mZiIsImdyYXBoVG9vbHRpcCIsImNvbnRleHQiLCJsYWJlbCIsImNvbG9yIiwib25GaWVsZENvbmZpZ0NoYW5nZSIsImZpZWxkQ29uZmlnIiwibW9kZSIsImRhdGEiLCJzZXJpZXMiLCJzb3J0S2V5IiwibGVnZW5kT3B0aW9ucyIsIm9wdGlvbnMiLCJsZWdlbmQiLCJzb3J0RGVzYyIsInNvcnRCeSIsInVuZGVmaW5lZCIsIm9uT3B0aW9uc0NoYW5nZSIsInJlZnJlc2hXaGVuSW5WaWV3IiwidGltZURhdGEiLCJ0aW1lU3J2IiwidGltZVJhbmdlIiwid2FudHNRdWVyeUV4ZWN1dGlvbiIsInJ1bkFsbFBhbmVsUXVlcmllcyIsImdldFRpbWV6b25lIiwicHVibGljRGFzaGJvYXJkQWNjZXNzVG9rZW4iLCJyZW5kZXJDb3VudGVyIiwibGl2ZVRpbWUiLCJzdGF0ZVVwZGF0ZSIsInVwZGF0ZU9wdGlvbnMiLCJ1cGRhdGVGaWVsZENvbmZpZyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImV2ZW50IiwiaXNSZWdpb24iLCJmcm9tIiwidG8iLCJhbm5vIiwidGltZSIsInRpbWVFbmQiLCJ0YWdzIiwidGV4dCIsImRlc2NyaXB0aW9uIiwicnVuIiwicmFuZ2UiLCJldmVudEJ1cyIsInB1Ymxpc2giLCJzZXRUaW1lIiwiZXZlbnRzIiwibmV3U2NvcGVkQnVzIiwiZXZlbnRGaWx0ZXIiLCJpc0ZpcnN0TG9hZCIsImFwcCIsImdldFBhbmVsQ29udGV4dEFwcCIsInN5bmMiLCJnZXRTeW5jIiwib25TZXJpZXNDb2xvckNoYW5nZSIsIm9uVG9nZ2xlU2VyaWVzVmlzaWJpbGl0eSIsIm9uU2VyaWVzVmlzaWJpbGl0eUNoYW5nZSIsIm9uQW5ub3RhdGlvbkNyZWF0ZSIsIm9uQW5ub3RhdGlvblVwZGF0ZSIsIm9uQW5ub3RhdGlvbkRlbGV0ZSIsImNhbkFkZEFubm90YXRpb25zIiwiY2FuQWRkQW5ub3RhdGlvbiIsIm9uVG9nZ2xlTGVnZW5kU29ydCIsImNhbkVkaXRBbm5vdGF0aW9ucyIsImNhbkVkaXRBbm5vdGF0aW9uIiwiY2FuRGVsZXRlQW5ub3RhdGlvbnMiLCJjYW5EZWxldGVBbm5vdGF0aW9uIiwiZ2V0SW5pdGlhbFBhbmVsRGF0YVN0YXRlIiwiUGFuZWxFZGl0b3IiLCJQYW5lbFZpZXdlciIsIkRhc2hib2FyZCIsIk5vdFN0YXJ0ZWQiLCJzdWJzIiwiYWRkIiwic3Vic2NyaWJlIiwib25SZWZyZXNoIiwib25SZW5kZXIiLCJwYW5lbEluaXRpYWxpemVkIiwiaGFzUGFuZWxTbmFwc2hvdCIsImdldFF1ZXJ5UnVubmVyIiwiZ2V0RGF0YSIsIndpdGhUcmFuc2Zvcm1zIiwid2l0aEZpZWxkQ29uZmlnIiwibmV4dCIsIm9uRGF0YVVwZGF0ZSIsImxpc3RlbiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwidW5zdWJzY3JpYmUiLCJyZW1vdmUiLCJsaXZlVGltZUNoYW5nZWQiLCJkZWx0YSIsInZhbHVlT2YiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJ1cGRhdGVJbnRlcnZhbCIsInNraXBEYXRhUXVlcnkiLCJMb2FkaW5nIiwiRXJyb3IiLCJEb25lIiwic25hcHNob3QiLCJzbmFwc2hvdERhdGEiLCJtYXAiLCJmcmFtZSIsInNob3VsZFNpZ25hbFJlbmRlcmluZ0NvbXBsZXRlZCIsImxvYWRpbmdTdGF0ZSIsInBsdWdpbk1ldGEiLCJza2lwRmlyc3RSZW5kZXIiLCJyZW5kZXJQYW5lbCIsInRoZW1lIiwicmVuZGVyaW5nQ29tcGxldGVkIiwiUGFuZWxDb21wb25lbnQiLCJoZWFkZXJIZWlnaHQiLCJoYXNPdmVybGF5SGVhZGVyIiwicGFuZWxIZWFkZXJIZWlnaHQiLCJjaHJvbWVQYWRkaW5nIiwibm9QYWRkaW5nIiwicGFuZWxQYWRkaW5nIiwicGFuZWxXaWR0aCIsImlubmVyUGFuZWxIZWlnaHQiLCJwYW5lbENvbnRlbnRDbGFzc05hbWVzIiwicGFuZWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsInRyYW5zcGFyZW50IiwicmVwbGFjZVZhcmlhYmxlcyIsIm9uQ2hhbmdlVGltZVJhbmdlIiwicmVxdWVzdCIsInRpbWVJbmZvIiwiaGFzVGl0bGUiLCJhbGVydFN0YXRlIiwiY29udGFpbmVyQ2xhc3NOYW1lcyIsImdldExvY2F0aW9uIiwicGF0aG5hbWUiLCJjb21wb25lbnRzIiwiUGFuZWxzIiwiUGFuZWwiLCJjb250YWluZXJCeVRpdGxlIiwibGlua3MiLCJvblBhbmVsRXJyb3IiLCJvblBhbmVsRXJyb3JSZWNvdmVyIiwiZ2V0QW5ndWxhckxvYWRlciIsInNldFBhbmVsQW5ndWxhckNvbXBvbmVudCIsImdldFBhbmVsU3RhdGVGb3JNb2RlbCIsIlBhbmVsQ2hyb21lQW5ndWxhclVuY29ubmVjdGVkIiwibG9hZEFuZ3VsYXJQYW5lbCIsInF1ZXJ5UnVubmVyIiwib25QYW5lbERhdGFVcGRhdGUiLCJwcmV2U3RhdGUiLCJzY29wZVByb3BzIiwic2l6ZSIsImdldElubmVyUGFuZWxIZWlnaHQiLCJnZXRJbm5lclBhbmVsV2lkdGgiLCJlbGVtZW50IiwibG9hZGVyIiwidGVtcGxhdGUiLCJhbmd1bGFyQ29tcG9uZW50IiwibG9hZCIsImFsZXJ0IiwiY3NzIiwiY3giLCJJY29uIiwidXNlU3R5bGVzMiIsImdldFBhbmVsTGlua3NTdXBwbGllciIsIlBhbmVsSGVhZGVyQ29ybmVyIiwiUGFuZWxIZWFkZXJMb2FkaW5nSW5kaWNhdG9yIiwiUGFuZWxIZWFkZXJNZW51VHJpZ2dlciIsIlBhbmVsSGVhZGVyTWVudVdyYXBwZXIiLCJQYW5lbEhlYWRlck5vdGljZXMiLCJvbkNhbmNlbFF1ZXJ5IiwiY2FuY2VsUXVlcnkiLCJnZXREaXNwbGF5VGl0bGUiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJwYW5lbFN0eWxlcyIsInNjb3BlZFZhcnMiLCJjbG9zZU1lbnUiLCJwYW5lbE1lbnVPcGVuIiwibWFyZ2luUmlnaHQiLCJ0aXRsZVRleHQiLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodE1lZGl1bSIsImJvZHkiLCJmb250U2l6ZSIsImNvbG9ycyIsInByaW1hcnkiLCJyZW5kZXJNYXJrZG93biIsImdldFRlbXBsYXRlU3J2IiwiVG9vbHRpcCIsIkluc3BlY3RUYWIiLCJJbmZvTW9kZSIsIkluZm8iLCJMaW5rcyIsIm1hcmtkb3duIiwiaW50ZXJwb2xhdGVkTWFya2Rvd24iLCJyZXBsYWNlIiwibWFya2VkSW50ZXJwb2xhdGVkTWFya2Rvd24iLCJnZXRMaW5rcyIsIl9faHRtbCIsImxpbmsiLCJpZHgiLCJocmVmIiwicGFydGlhbCIsImluc3BlY3QiLCJpbnNwZWN0VGFiIiwicmVuZGVyQ29ybmVyVHlwZSIsImluZm9Nb2RlIiwiY29udGVudCIsIm9uQ2xpY2siLCJ0b0xvd2VyQ2FzZSIsImFyaWFMYWJlbCIsImhlYWRlckNvcm5lckluZm8iLCJnZXRJbmZvTW9kZSIsIm9uQ2xpY2tFcnJvciIsImdldEluZm9Db250ZW50IiwidXNlU3R5bGVzIiwiZ2V0U3R5bGVzIiwiU3RyZWFtaW5nIiwic3RyZWFtSW5kaWNhdG9yIiwidGV4dEZhaW50IiwiUGFuZWxIZWFkZXJNZW51SXRlbSIsIlBhbmVsSGVhZGVyTWVudSIsIm1lbnUiLCJpc1N1Yk1lbnUiLCJtZW51SXRlbSIsImljb25DbGFzc05hbWUiLCJzaG9ydGN1dCIsInN1Yk1lbnUiLCJyZW5kZXJJdGVtcyIsIml0ZW1zIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJnZXRQYW5lbE1lbnUiLCJQYW5lbEhlYWRlck1lbnVQcm92aWRlciIsInNldEl0ZW1zIiwidXNlQ2FsbGJhY2siLCJkaXZQcm9wcyIsImNsaWNrQ29vcmRpbmF0ZXMiLCJzZXRDbGlja0Nvb3JkaW5hdGVzIiwieCIsInkiLCJzZXRQYW5lbE1lbnVPcGVuIiwib25NZW51VG9nZ2xlIiwiaXNDbGljayIsImV2ZW50VG9DbGlja0Nvb3JkaW5hdGVzIiwic3RvcFByb3BhZ2F0aW9uIiwib25Nb3VzZURvd24iLCJjbGlja2VkIiwiTWF0aCIsImZsb29yIiwiY2xpZW50WCIsImNsaWVudFkiLCJDbGlja091dHNpZGVXcmFwcGVyIiwic2hvdyIsIm9uQ2xvc2UiLCJkb2N1bWVudCIsIlBhbmVsSGVhZGVyTm90aWNlIiwibm90aWNlIiwiaWNvbk5hbWUiLCJzZXZlcml0eSIsImUiLCJmcmFtZXMiLCJvcGVuSW5zcGVjdCIsInRhYiIsIm5vdGljZXMiLCJ2YWx1ZXMiLCJCeU5hbWVzTWF0Y2hlck1vZGUiLCJGaWVsZE1hdGNoZXJJRCIsIkZpZWxkVHlwZSIsImdldEZpZWxkRGlzcGxheU5hbWUiLCJpc1N5c3RlbU92ZXJyaWRlV2l0aFJlZiIsIlNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlIiwiZGlzcGxheU92ZXJyaWRlUmVmIiwiaXNIaWRlU2VyaWVzT3ZlcnJpZGUiLCJvdmVycmlkZXMiLCJkaXNwbGF5TmFtZSIsImN1cnJlbnRJbmRleCIsImZpbmRJbmRleCIsIlRvZ2dsZVNlbGVjdGlvbiIsIm92ZXJyaWRlIiwiY3JlYXRlT3ZlcnJpZGUiLCJkaXNwbGF5TmFtZXMiLCJnZXREaXNwbGF5TmFtZXMiLCJvdmVycmlkZXNDb3B5IiwiQXJyYXkiLCJzcGxpY2UiLCJleGlzdGluZyIsImdldEV4aXN0aW5nRGlzcGxheU5hbWVzIiwiY3JlYXRlRXh0ZW5kZWRPdmVycmlkZSIsImFsbEZpZWxkc0FyZUV4Y2x1ZGVkIiwibmFtZXMiLCJleGNsdWRlIiwicHJvcGVydHkiLCJ2aXoiLCJ0b29sdGlwIiwiX19zeXN0ZW1SZWYiLCJtYXRjaGVyIiwiYnlOYW1lcyIsInByZWZpeCIsInJlYWRPbmx5IiwicHJvcGVydGllcyIsImZpbmQiLCJwIiwiaW5kZXgiLCJuYW1lIiwicHVzaCIsInJ1bGUiLCJpc0FycmF5IiwiZXhjbHVkZU5hbWUiLCJ1bmlxdWUiLCJTZXQiLCJmaWVsZCIsImZpZWxkcyIsIm51bWJlciIsInJlcG9ydE1ldGFBbmFseXRpY3MiLCJNZXRhQW5hbHl0aWNzRXZlbnROYW1lIiwiZW1pdERhc2hib2FyZFZpZXdFdmVudCIsImV2ZW50RGF0YSIsImRhc2hib2FyZE5hbWUiLCJkYXNoYm9hcmRVaWQiLCJmb2xkZXJOYW1lIiwiZm9sZGVyVGl0bGUiLCJldmVudE5hbWUiLCJEYXNoYm9hcmRWaWV3IiwibG9jYXRpb25VdGlsIiwic2V0V2Vla1N0YXJ0IiwiaXNGZXRjaEVycm9yIiwibm90aWZ5QXBwIiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJiYWNrZW5kU3J2Iiwia2V5YmluZGluZ1NydiIsInN0b3JlIiwiZGFzaGJvYXJkTG9hZGVyU3J2IiwiZ2V0RGFzaGJvYXJkU3J2IiwiZGFzaGJvYXJkV2F0Y2hlciIsInRvU3RhdGVLZXkiLCJEYXNoYm9hcmRJbml0UGhhc2UiLCJEYXNoYm9hcmRSb3V0ZXMiLCJjcmVhdGVEYXNoYm9hcmRRdWVyeVJ1bm5lciIsImluaXRWYXJpYWJsZXNUcmFuc2FjdGlvbiIsImdldElmRXhpc3RzTGFzdEtleSIsIkRhc2hib2FyZE1vZGVsIiwiZGFzaGJvYXJkSW5pdENvbXBsZXRlZCIsImRhc2hib2FyZEluaXRGYWlsZWQiLCJkYXNoYm9hcmRJbml0RmV0Y2hpbmciLCJkYXNoYm9hcmRJbml0U2VydmljZXMiLCJmZXRjaERhc2hib2FyZCIsImFyZ3MiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibW9kZWwiLCJnZXRPYmplY3QiLCJEQVNIQk9BUkRfRlJPTV9MU19LRVkiLCJyZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSIsIkhvbWUiLCJkYXNoRFRPIiwiZ2V0IiwicmVkaXJlY3RVcmkiLCJuZXdVcmwiLCJzdHJpcEJhc2VGcm9tVXJsIiwiY2FuU2F2ZSIsImNhblNoYXJlIiwiY2FuU3RhciIsIlB1YmxpYyIsImxvYWREYXNoYm9hcmQiLCJhY2Nlc3NUb2tlbiIsIk5vcm1hbCIsInVybCIsImRhc2hib2FyZFVybCIsImN1cnJlbnRQYXRoIiwiTmV3IiwiZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhIiwidXJsRm9sZGVySWQiLCJlcnIiLCJjYW5jZWxsZWQiLCJzdG9yZVN0YXRlIiwiZ2V0U2VhcmNoT2JqZWN0Iiwib3JnSWQiLCJ1c2VyIiwiZGFzaGJvYXJkU3J2Iiwic2V0Q3VycmVudCIsImluaXQiLCJydW5uZXIiLCJpbml0UGhhc2UiLCJTZXJ2aWNlcyIsInByb2Nlc3NSZXBlYXRzIiwiYXV0b2ZpdHBhbmVscyIsImF1dG9GaXRQYW5lbHMiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImtpb3NrIiwic2V0dXBEYXNoYm9hcmRCaW5kaW5ncyIsIndhdGNoIiwibGVhdmUiLCJ3ZWVrU3RhcnQiLCJib290RGF0YSIsImlzTmV3IiwiZm9sZGVySWQiLCJncmlkUG9zIiwidyIsImgiLCJzZXREYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSIsInNldE9iamVjdCIsImRlbGV0ZSIsImdldERhdGFTb3VyY2VTcnYiLCJhZGRMaWJyYXJ5UGFuZWwiLCJjb3B5UGFuZWwiLCJkdXBsaWNhdGVQYW5lbCIsInJlbW92ZVBhbmVsIiwic2hhcmVQYW5lbCIsInVubGlua0xpYnJhcnlQYW5lbCIsImlzUGFuZWxNb2RlbExpYnJhcnlQYW5lbCIsImdldEV4cGxvcmVVcmwiLCJuYXZpZ2F0ZVRvRXhwbG9yZSIsIm9uVmlld1BhbmVsIiwicHJldmVudERlZmF1bHQiLCJ2aWV3UGFuZWwiLCJvbkVkaXRQYW5lbCIsImVkaXRQYW5lbCIsIm9uU2hhcmVQYW5lbCIsIm9uQWRkTGlicmFyeVBhbmVsIiwib25VbmxpbmtMaWJyYXJ5UGFuZWwiLCJvbkluc3BlY3RQYW5lbCIsIm9uTW9yZSIsIm9uRHVwbGljYXRlUGFuZWwiLCJvbkNvcHlQYW5lbCIsIm9uUmVtb3ZlUGFuZWwiLCJvbk5hdmlnYXRlVG9FeHBsb3JlIiwib3BlbkluTmV3V2luZG93IiwiY3RybEtleSIsIm1ldGFLZXkiLCJvcGVuIiwiYXBwU3ViVXJsIiwiY2FuRWRpdFBhbmVsIiwiaGFzQWNjZXNzVG9FeHBsb3JlIiwiaW5zcGVjdE1lbnUiLCJzY29wZSIsImdldFNjb3BlIiwicGFuZWxDdHJsIiwiJCRjaGlsZEhlYWQiLCJjdHJsIiwiYW5ndWxhck1lbnVJdGVtcyIsImdldEV4dGVuZGVkTWVudSIsIml0ZW0iLCJyZWFjdEl0ZW0iLCJjbGljayIsIiRldmFsIiwiYXBwbHlGaWVsZE92ZXJyaWRlcyIsIkFycmF5RGF0YUZyYW1lIiwiU25hcHNob3RXb3JrZXIiLCJnZXRQcm9jZXNzZWREYXRhRnJhbWVzIiwid29ya2VyIiwiYW5ub3RhdGlvbkV2ZW50cyIsImNhbldvcmsiLCJnZXRBbm5vdGF0aW9uc0luU25hcHNob3QiLCJhbm5vdGF0aW9ucyIsImRlZmF1bHRzIiwiZmllbGRDb25maWdSZWdpc3RyeSIsInRoZW1lMiIsInRpbWVab25lIiwiZm9ybWF0dGVkVmFsdWVUb1N0cmluZyIsImdldEZpZWxkRGlzcGxheVZhbHVlc1Byb3h5IiwiZ2V0VGltZUZpZWxkIiwiZ2V0TGlua1NydiIsImdldEZpZWxkTGlua3NTdXBwbGllciIsInZpZXciLCJkYXRhRnJhbWUiLCJyZWZJZCIsImNvbEluZGV4IiwibGFiZWxzIiwicm93SW5kZXgiLCJ0aW1lRmllbGQiLCJyYXciLCJudW1lcmljIiwiZGlzcGxheSIsImNhbGMiLCJ2YXJzIiwiZm10IiwiZmluYWxWYXJzIiwiZ2V0RGF0YUxpbmtVSU1vZGVsIiwiRmllbGRDb2xvck1vZGVJZCIsImJ5TmFtZSIsInByb3BlcnR5SW5kZXgiLCJjcmVhdGVQcm9wZXJ0eSIsInByb3BlcnRpZXNDb3B5IiwiRml4ZWQiLCJmaXhlZENvbG9yIiwicGF0aCIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9