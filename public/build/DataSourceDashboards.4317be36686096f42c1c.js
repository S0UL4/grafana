"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DataSourceDashboards"],{

/***/ "./public/app/features/admin/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightTrial": () => (/* binding */ highlightTrial),
/* harmony export */   "isTrial": () => (/* binding */ isTrial)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function isTrial() {
  var _config$licenseInfo;

  const expiry = (_config$licenseInfo = _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.licenseInfo) === null || _config$licenseInfo === void 0 ? void 0 : _config$licenseInfo.trialExpiry;
  return !!(expiry && expiry > 0);
}
const highlightTrial = () => isTrial() && _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.featureHighlights;

/***/ }),

/***/ "./public/app/features/datasources/DashboardsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;






const DashboardsTable = ({
  dashboards,
  onImport,
  onRemove
}) => {
  function buttonText(dashboard) {
    return dashboard.revision !== dashboard.importedRevision ? 'Update' : 'Re-import';
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
    className: "filter-table",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
      children: dashboards.map((dashboard, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [_td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            className: "width-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              name: "apps"
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: dashboard.imported ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: dashboard.importedUrl,
              children: dashboard.title
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: dashboard.title
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("td", {
            style: {
              textAlign: 'right'
            },
            children: [!dashboard.imported ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, false),
              children: "Import"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, true),
              children: buttonText(dashboard)
            }), dashboard.imported && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              "aria-label": "Delete dashboard",
              icon: "trash-alt",
              variant: "destructive",
              size: "sm",
              onClick: () => onRemove(dashboard)
            })]
          })]
        }, `${dashboard.dashboardId}-${index}`);
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardsTable);

/***/ }),

/***/ "./public/app/features/datasources/DataSourceDashboards.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourceDashboards": () => (/* binding */ DataSourceDashboards),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/state/actions.ts");
/* harmony import */ var _plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _DashboardsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/datasources/DashboardsTable.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function mapStateToProps(state, props) {
  const dataSourceId = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, `datasource-dashboards-${dataSourceId}`),
    dashboards: state.plugins.dashboards,
    dataSource: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_8__.getDataSource)(state.dataSources, dataSourceId),
    isLoading: state.plugins.isLoadingPluginDashboards,
    dataSourceId
  };
}

const mapDispatchToProps = {
  importDashboard: _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_4__.importDashboard,
  loadDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_7__.loadDataSource,
  loadPluginDashboards: _plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_5__.loadPluginDashboards,
  removeDashboard: _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_4__.removeDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class DataSourceDashboards extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onImport", (dashboard, overwrite) => {
      const {
        dataSource,
        importDashboard
      } = this.props;
      const data = {
        pluginId: dashboard.pluginId,
        path: dashboard.path,
        overwrite,
        inputs: []
      };

      if (dataSource) {
        data.inputs.push({
          name: '*',
          type: 'datasource',
          pluginId: dataSource.type,
          value: dataSource.name
        });
      }

      importDashboard(data, dashboard.title);
    });

    _defineProperty(this, "onRemove", dashboard => {
      this.props.removeDashboard(dashboard.uid);
    });
  }

  async componentDidMount() {
    const {
      loadDataSource,
      dataSourceId
    } = this.props;
    await loadDataSource(dataSourceId);
    this.props.loadPluginDashboards();
  }

  render() {
    const {
      dashboards,
      navModel,
      isLoading
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
        isLoading: isLoading,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_DashboardsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
          dashboards: dashboards,
          onImport: (dashboard, overwrite) => this.onImport(dashboard, overwrite),
          onRemove: dashboard => this.onRemove(dashboard)
        })
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourceDashboards));

/***/ }),

/***/ "./public/app/features/datasources/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDataSource": () => (/* binding */ addDataSource),
/* harmony export */   "deleteDataSource": () => (/* binding */ deleteDataSource),
/* harmony export */   "findNewName": () => (/* binding */ findNewName),
/* harmony export */   "getDataSourceUsingUidOrId": () => (/* binding */ getDataSourceUsingUidOrId),
/* harmony export */   "initDataSourceSettings": () => (/* binding */ initDataSourceSettings),
/* harmony export */   "loadDataSource": () => (/* binding */ loadDataSource),
/* harmony export */   "loadDataSourceMeta": () => (/* binding */ loadDataSourceMeta),
/* harmony export */   "loadDataSourcePlugins": () => (/* binding */ loadDataSourcePlugins),
/* harmony export */   "loadDataSources": () => (/* binding */ loadDataSources),
/* harmony export */   "nameExits": () => (/* binding */ nameExits),
/* harmony export */   "testDataSource": () => (/* binding */ testDataSource),
/* harmony export */   "updateDataSource": () => (/* binding */ updateDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_features_plugins_pluginSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/pluginSettings.ts");
/* harmony import */ var app_features_plugins_plugin_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _buildCategories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/datasources/state/buildCategories.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/datasources/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");














const initDataSourceSettings = (pageId, dependencies = {
  loadDataSource,
  loadDataSourceMeta,
  getDataSource: _selectors__WEBPACK_IMPORTED_MODULE_12__.getDataSource,
  getDataSourceMeta: _selectors__WEBPACK_IMPORTED_MODULE_12__.getDataSourceMeta,
  importDataSourcePlugin: app_features_plugins_plugin_loader__WEBPACK_IMPORTED_MODULE_7__.importDataSourcePlugin
}) => {
  return async (dispatch, getState) => {
    if (!pageId) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.initDataSourceSettingsFailed)(new Error('Invalid ID')));
      return;
    }

    try {
      const loadedDataSource = await dispatch(dependencies.loadDataSource(pageId));
      await dispatch(dependencies.loadDataSourceMeta(loadedDataSource)); // have we already loaded the plugin then we can skip the steps below?

      if (getState().dataSourceSettings.plugin) {
        return;
      }

      const dataSource = dependencies.getDataSource(getState().dataSources, pageId);
      const dataSourceMeta = dependencies.getDataSourceMeta(getState().dataSources, dataSource.type);
      const importedPlugin = await dependencies.importDataSourcePlugin(dataSourceMeta);
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.initDataSourceSettingsSucceeded)(importedPlugin));
    } catch (err) {
      if (err instanceof Error) {
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.initDataSourceSettingsFailed)(err));
      }
    }
  };
};
const testDataSource = (dataSourceName, dependencies = {
  getDatasourceSrv: app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv,
  getBackendSrv: app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv
}) => {
  return async (dispatch, getState) => {
    const dsApi = await dependencies.getDatasourceSrv().get(dataSourceName);

    if (!dsApi.testDatasource) {
      return;
    }

    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.testDataSourceStarting)());
    dependencies.getBackendSrv().withNoBackendCache(async () => {
      try {
        const result = await dsApi.testDatasource();
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.testDataSourceSucceeded)(result));
      } catch (err) {
        let message;
        let details;

        if (err instanceof _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.HealthCheckError) {
          message = err.message;
          details = err.details;
        } else if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.isFetchError)(err)) {
          var _err$data$message;

          message = (_err$data$message = err.data.message) !== null && _err$data$message !== void 0 ? _err$data$message : `HTTP error ${err.statusText}`;
        } else if (err instanceof Error) {
          message = err.message;
        }

        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.testDataSourceFailed)({
          message,
          details
        }));
      }
    });
  };
};
function loadDataSources() {
  return async dispatch => {
    const response = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get('/api/datasources');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourcesLoaded)(response));
  };
}
function loadDataSource(uid) {
  return async dispatch => {
    const dataSource = await getDataSourceUsingUidOrId(uid);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourceLoaded)(dataSource));
    return dataSource;
  };
}
function loadDataSourceMeta(dataSource) {
  return async dispatch => {
    const pluginInfo = await (0,app_features_plugins_pluginSettings__WEBPACK_IMPORTED_MODULE_6__.getPluginSettings)(dataSource.type);
    const plugin = await (0,app_features_plugins_plugin_loader__WEBPACK_IMPORTED_MODULE_7__.importDataSourcePlugin)(pluginInfo);
    const isBackend = plugin.DataSourceClass.prototype instanceof _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend;
    const meta = Object.assign({}, pluginInfo, {
      isBackend: pluginInfo.backend || isBackend
    });
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourceMetaLoaded)(meta));
    plugin.meta = meta;
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_10__.buildNavModel)(dataSource, plugin)));
  };
}
/**
 * Get data source by uid or id, if old id detected handles redirect
 */

async function getDataSourceUsingUidOrId(uid) {
  // Try first with uid api
  try {
    const byUid = await (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.lastValueFrom)((0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch({
      method: 'GET',
      url: `/api/datasources/uid/${uid}`,
      params: (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_4__.accessControlQueryParam)(),
      showErrorAlert: false
    }));

    if (byUid.ok) {
      return byUid.data;
    }
  } catch (err) {
    console.log('Failed to lookup data source by uid', err);
  } // try lookup by old db id


  const id = typeof uid === 'string' ? parseInt(uid, 10) : uid;

  if (!Number.isNaN(id)) {
    const response = await (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.lastValueFrom)((0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch({
      method: 'GET',
      url: `/api/datasources/${id}`,
      params: (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_4__.accessControlQueryParam)(),
      showErrorAlert: false
    })); // If the uid is a number, then this is a refresh on one of the settings tabs
    // and we can return the response data

    if (response.ok && typeof uid === 'number' && response.data.id === uid) {
      return response.data;
    } // Not ideal to do a full page reload here but so tricky to handle this
    // otherwise We can update the location using react router, but need to
    // fully reload the route as the nav model page index is not matching with
    // the url in that case. And react router has no way to unmount remount a
    // route


    if (response.ok && response.data.id.toString() === uid) {
      window.location.href = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.assureBaseUrl(`/datasources/edit/${response.data.uid}`);
      return {}; // avoids flashing an error
    }
  }

  throw Error('Could not find data source');
}
function addDataSource(plugin) {
  return async (dispatch, getStore) => {
    await dispatch(loadDataSources());
    const dataSources = getStore().dataSources.dataSources;
    const newInstance = {
      name: plugin.name,
      type: plugin.id,
      access: 'proxy',
      isDefault: dataSources.length === 0
    };

    if (nameExits(dataSources, newInstance.name)) {
      newInstance.name = findNewName(dataSources, newInstance.name);
    }

    const result = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/datasources', newInstance);
    await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().reload();
    await _core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.fetchUserPermissions();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(`/datasources/edit/${result.datasource.uid}`);
  };
}
function loadDataSourcePlugins() {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourcePluginsLoad)());
    const plugins = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get('/api/plugins', {
      enabled: 1,
      type: 'datasource'
    });
    const categories = (0,_buildCategories__WEBPACK_IMPORTED_MODULE_9__.buildCategories)(plugins);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourcePluginsLoaded)({
      plugins,
      categories
    }));
  };
}
function updateDataSource(dataSource) {
  return async dispatch => {
    await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().put(`/api/datasources/${dataSource.id}`, dataSource); // by UID not yet supported

    await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().reload();
    return dispatch(loadDataSource(dataSource.uid));
  };
}
function deleteDataSource() {
  return async (dispatch, getStore) => {
    const dataSource = getStore().dataSources.dataSource;
    await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().delete(`/api/datasources/${dataSource.id}`);
    await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().reload();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push('/datasources');
  };
}
function nameExits(dataSources, name) {
  return dataSources.filter(dataSource => {
    return dataSource.name.toLowerCase() === name.toLowerCase();
  }).length > 0;
}
function findNewName(dataSources, name) {
  // Need to loop through current data sources to make sure
  // the name doesn't exist
  while (nameExits(dataSources, name)) {
    // If there's a duplicate name that doesn't end with '-x'
    // we can add -1 to the name and be done.
    if (!nameHasSuffix(name)) {
      name = `${name}-1`;
    } else {
      // if there's a duplicate name that ends with '-x'
      // we can try to increment the last digit until the name is unique
      // remove the 'x' part and replace it with the new number
      name = `${getNewName(name)}${incrementLastDigit(getLastDigit(name))}`;
    }
  }

  return name;
}

function nameHasSuffix(name) {
  return name.endsWith('-', name.length - 1);
}

function getLastDigit(name) {
  return parseInt(name.slice(-1), 10);
}

function incrementLastDigit(digit) {
  return isNaN(digit) ? 1 : digit + 1;
}

function getNewName(name) {
  return name.slice(0, name.length - 1);
}

/***/ }),

/***/ "./public/app/features/datasources/state/buildCategories.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildCategories": () => (/* binding */ buildCategories)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


function buildCategories(plugins) {
  const categories = [{
    id: 'tsdb',
    title: 'Time series databases',
    plugins: []
  }, {
    id: 'logging',
    title: 'Logging & document databases',
    plugins: []
  }, {
    id: 'tracing',
    title: 'Distributed tracing',
    plugins: []
  }, {
    id: 'sql',
    title: 'SQL',
    plugins: []
  }, {
    id: 'cloud',
    title: 'Cloud',
    plugins: []
  }, {
    id: 'enterprise',
    title: 'Enterprise plugins',
    plugins: []
  }, {
    id: 'iot',
    title: 'Industrial & IoT',
    plugins: []
  }, {
    id: 'other',
    title: 'Others',
    plugins: []
  }].filter(item => item);
  const categoryIndex = {};
  const pluginIndex = {};
  const enterprisePlugins = getEnterprisePhantomPlugins(); // build indices

  for (const category of categories) {
    categoryIndex[category.id] = category;
  }

  for (const plugin of plugins) {
    const enterprisePlugin = enterprisePlugins.find(item => item.id === plugin.id); // Force category for enterprise plugins

    if (plugin.enterprise || enterprisePlugin) {
      var _enterprisePlugin$inf;

      plugin.category = 'enterprise';
      plugin.unlicensed = !(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('enterprise.plugins');
      plugin.info.links = (enterprisePlugin === null || enterprisePlugin === void 0 ? void 0 : (_enterprisePlugin$inf = enterprisePlugin.info) === null || _enterprisePlugin$inf === void 0 ? void 0 : _enterprisePlugin$inf.links) || plugin.info.links;
    } // Fix link name


    if (plugin.info.links) {
      for (const link of plugin.info.links) {
        link.name = 'Learn more';
      }
    }

    const category = categories.find(item => item.id === plugin.category) || categoryIndex['other'];
    category.plugins.push(plugin); // add to plugin index

    pluginIndex[plugin.id] = plugin;
  }

  for (const category of categories) {
    // add phantom plugin
    if (category.id === 'cloud') {
      category.plugins.push(getGrafanaCloudPhantomPlugin());
    } // add phantom plugins


    if (category.id === 'enterprise') {
      for (const plugin of enterprisePlugins) {
        if (!pluginIndex[plugin.id]) {
          category.plugins.push(plugin);
        }
      }
    }

    sortPlugins(category.plugins);
  } // Only show categories with plugins


  return categories.filter(c => c.plugins.length > 0);
}

function sortPlugins(plugins) {
  const sortingRules = {
    prometheus: 100,
    graphite: 95,
    loki: 90,
    mysql: 80,
    jaeger: 100,
    postgres: 79,
    gcloud: -1
  };
  plugins.sort((a, b) => {
    const aSort = sortingRules[a.id] || 0;
    const bSort = sortingRules[b.id] || 0;

    if (aSort > bSort) {
      return -1;
    }

    if (aSort < bSort) {
      return 1;
    }

    return a.name > b.name ? 1 : -1;
  });
}

function getEnterprisePhantomPlugins() {
  return [getPhantomPlugin({
    id: 'grafana-splunk-datasource',
    name: 'Splunk',
    description: 'Visualize and explore Splunk logs',
    imgUrl: 'public/img/plugins/splunk_logo_128.png'
  }), getPhantomPlugin({
    id: 'grafana-oracle-datasource',
    name: 'Oracle',
    description: 'Visualize and explore Oracle SQL',
    imgUrl: 'public/img/plugins/oracle.png'
  }), getPhantomPlugin({
    id: 'grafana-dynatrace-datasource',
    name: 'Dynatrace',
    description: 'Visualize and explore Dynatrace data',
    imgUrl: 'public/img/plugins/dynatrace.png'
  }), getPhantomPlugin({
    id: 'grafana-servicenow-datasource',
    description: 'ServiceNow integration and data source',
    name: 'ServiceNow',
    imgUrl: 'public/img/plugins/servicenow.svg'
  }), getPhantomPlugin({
    id: 'grafana-datadog-datasource',
    description: 'DataDog integration and data source',
    name: 'DataDog',
    imgUrl: 'public/img/plugins/datadog.png'
  }), getPhantomPlugin({
    id: 'grafana-newrelic-datasource',
    description: 'New Relic integration and data source',
    name: 'New Relic',
    imgUrl: 'public/img/plugins/newrelic.svg'
  }), getPhantomPlugin({
    id: 'grafana-mongodb-datasource',
    description: 'MongoDB integration and data source',
    name: 'MongoDB',
    imgUrl: 'public/img/plugins/mongodb.svg'
  }), getPhantomPlugin({
    id: 'grafana-snowflake-datasource',
    description: 'Snowflake integration and data source',
    name: 'Snowflake',
    imgUrl: 'public/img/plugins/snowflake.svg'
  }), getPhantomPlugin({
    id: 'grafana-wavefront-datasource',
    description: 'Wavefront integration and data source',
    name: 'Wavefront',
    imgUrl: 'public/img/plugins/wavefront.svg'
  }), getPhantomPlugin({
    id: 'dlopes7-appdynamics-datasource',
    description: 'AppDynamics integration and data source',
    name: 'AppDynamics',
    imgUrl: 'public/img/plugins/appdynamics.svg'
  }), getPhantomPlugin({
    id: 'grafana-saphana-datasource',
    description: 'SAP HANA® integration and data source',
    name: 'SAP HANA®',
    imgUrl: 'public/img/plugins/sap_hana.png'
  }), getPhantomPlugin({
    id: 'grafana-honeycomb-datasource',
    description: 'Honeycomb integration and datasource',
    name: 'Honeycomb',
    imgUrl: 'public/img/plugins/honeycomb.png'
  }), getPhantomPlugin({
    id: 'grafana-salesforce-datasource',
    description: 'Salesforce integration and datasource',
    name: 'Salesforce',
    imgUrl: 'public/img/plugins/salesforce.svg'
  }), getPhantomPlugin({
    id: 'grafana-jira-datasource',
    description: 'Jira integration and datasource',
    name: 'Jira',
    imgUrl: 'public/img/plugins/jira_logo.png'
  }), getPhantomPlugin({
    id: 'grafana-gitlab-datasource',
    description: 'GitLab integration and datasource',
    name: 'GitLab',
    imgUrl: 'public/img/plugins/gitlab.svg'
  }), getPhantomPlugin({
    id: 'grafana-splunk-monitoring-datasource',
    description: 'SignalFx integration and datasource',
    name: 'Splunk Infrastructure Monitoring',
    imgUrl: 'public/img/plugins/signalfx-logo.svg'
  }), getPhantomPlugin({
    id: 'grafana-azuredevops-datasource',
    description: 'Azure Devops datasource',
    name: 'Azure Devops',
    imgUrl: 'public/img/plugins/azure-devops.png'
  })];
}

function getGrafanaCloudPhantomPlugin() {
  return {
    id: 'gcloud',
    name: 'Grafana Cloud',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource,
    module: 'phantom',
    baseUrl: '',
    info: {
      description: 'Hosted Graphite, Prometheus, and Loki',
      logos: {
        small: 'public/img/grafana_icon.svg',
        large: 'asd'
      },
      author: {
        name: 'Grafana Labs'
      },
      links: [{
        url: 'https://grafana.com/products/cloud/',
        name: 'Learn more'
      }],
      screenshots: [],
      updated: '2019-05-10',
      version: '1.0.0'
    }
  };
}

function getPhantomPlugin(options) {
  return {
    id: options.id,
    name: options.name,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource,
    module: 'phantom',
    baseUrl: '',
    info: {
      description: options.description,
      logos: {
        small: options.imgUrl,
        large: options.imgUrl
      },
      author: {
        name: 'Grafana Labs'
      },
      links: [{
        url: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.pluginCatalogURL + options.id,
        name: 'Install now'
      }],
      screenshots: [],
      updated: '2019-05-10',
      version: '1.0.0'
    }
  };
}

/***/ }),

/***/ "./public/app/features/datasources/state/navModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildNavModel": () => (/* binding */ buildNavModel),
/* harmony export */   "getDataSourceLoadingNav": () => (/* binding */ getDataSourceLoadingNav),
/* harmony export */   "getDataSourceNav": () => (/* binding */ getDataSourceNav)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Upgrade/ProBadge.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _admin_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/utils.ts");







const loadingDSType = 'Loading';
function buildNavModel(dataSource, plugin) {
  const pluginMeta = plugin.meta;
  const highlightsEnabled = app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].featureToggles.featureHighlights;
  const navModel = {
    img: pluginMeta.info.logos.large,
    id: 'datasource-' + dataSource.uid,
    subTitle: `Type: ${pluginMeta.name}`,
    url: '',
    text: dataSource.name,
    breadcrumbs: [{
      title: 'Data Sources',
      url: 'datasources'
    }],
    children: [{
      active: false,
      icon: 'sliders-v-alt',
      id: `datasource-settings-${dataSource.uid}`,
      text: 'Settings',
      url: `datasources/edit/${dataSource.uid}/`
    }]
  };

  if (plugin.configPages) {
    for (const page of plugin.configPages) {
      navModel.children.push({
        active: false,
        text: page.title,
        icon: page.icon,
        url: `datasources/edit/${dataSource.uid}/?page=${page.id}`,
        id: `datasource-page-${page.id}`
      });
    }
  }

  if (pluginMeta.includes && hasDashboards(pluginMeta.includes) && app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasRole('Admin')) {
    navModel.children.push({
      active: false,
      icon: 'apps',
      id: `datasource-dashboards-${dataSource.uid}`,
      text: 'Dashboards',
      url: `datasources/edit/${dataSource.uid}/dashboards`
    });
  }

  const isLoadingNav = dataSource.type === loadingDSType;
  const permissionsExperimentId = 'feature-highlights-data-source-permissions-badge';
  const dsPermissions = {
    active: false,
    icon: 'lock',
    id: `datasource-permissions-${dataSource.uid}`,
    text: 'Permissions',
    url: `datasources/edit/${dataSource.uid}/permissions`
  };

  if ((0,_admin_utils__WEBPACK_IMPORTED_MODULE_6__.highlightTrial)() && !isLoadingNav) {
    dsPermissions.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
      experimentId: permissionsExperimentId,
      eventVariant: 'trial'
    });
  }

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('dspermissions')) {
    if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.DataSourcesPermissionsRead)) {
      navModel.children.push(dsPermissions);
    }
  } else if (highlightsEnabled && !isLoadingNav) {
    navModel.children.push(Object.assign({}, dsPermissions, {
      url: dsPermissions.url + '/upgrade',
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
        experimentId: permissionsExperimentId
      })
    }));
  }

  const analyticsExperimentId = 'feature-highlights-data-source-insights-badge';
  const analytics = {
    active: false,
    icon: 'info-circle',
    id: `datasource-insights-${dataSource.uid}`,
    text: 'Insights',
    url: `datasources/edit/${dataSource.uid}/insights`
  };

  if ((0,_admin_utils__WEBPACK_IMPORTED_MODULE_6__.highlightTrial)() && !isLoadingNav) {
    analytics.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
      experimentId: analyticsExperimentId,
      eventVariant: 'trial'
    });
  }

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('analytics')) {
    navModel.children.push(analytics);
  } else if (highlightsEnabled && !isLoadingNav) {
    navModel.children.push(Object.assign({}, analytics, {
      url: analytics.url + '/upgrade',
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
        experimentId: analyticsExperimentId
      })
    }));
  }

  const cachingExperimentId = 'feature-highlights-query-caching-badge';
  const caching = {
    active: false,
    icon: 'database',
    id: `datasource-cache-${dataSource.uid}`,
    text: 'Cache',
    url: `datasources/edit/${dataSource.uid}/cache`,
    hideFromTabs: !pluginMeta.isBackend || !app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].caching.enabled
  };

  if ((0,_admin_utils__WEBPACK_IMPORTED_MODULE_6__.highlightTrial)() && !isLoadingNav) {
    caching.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
      experimentId: cachingExperimentId,
      eventVariant: 'trial'
    });
  }

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('caching')) {
    navModel.children.push(caching);
  } else if (highlightsEnabled && !isLoadingNav) {
    navModel.children.push(Object.assign({}, caching, {
      url: caching.url + '/upgrade',
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
        experimentId: cachingExperimentId
      })
    }));
  }

  return navModel;
}
function getDataSourceNav(main, pageName) {
  let node = {
    text: ''
  }; // find active page

  for (const child of main.children) {
    if (child.id.indexOf(pageName) > 0) {
      child.active = true;
      node = child;
      break;
    }
  }

  return {
    main: main,
    node: node
  };
}
function getDataSourceLoadingNav(pageName) {
  const main = buildNavModel({
    access: '',
    basicAuth: false,
    basicAuthUser: '',
    withCredentials: false,
    database: '',
    id: 1,
    uid: 'x',
    isDefault: false,
    jsonData: {
      authType: 'credentials',
      defaultRegion: 'eu-west-2'
    },
    name: 'Loading',
    orgId: 1,
    readOnly: false,
    type: loadingDSType,
    typeName: loadingDSType,
    typeLogoUrl: 'public/img/icn-datasource.svg',
    url: '',
    user: '',
    secureJsonFields: {}
  }, {
    meta: {
      id: '1',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource,
      name: '',
      info: {
        author: {
          name: '',
          url: ''
        },
        description: '',
        links: [{
          name: '',
          url: ''
        }],
        logos: {
          large: '',
          small: ''
        },
        screenshots: [],
        updated: '',
        version: ''
      },
      includes: [],
      module: '',
      baseUrl: ''
    }
  });
  return getDataSourceNav(main, pageName);
}

function hasDashboards(includes) {
  return includes.find(include => {
    return include.type === 'dashboard';
  }) !== undefined;
}

/***/ }),

/***/ "./public/app/features/datasources/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataSource": () => (/* binding */ getDataSource),
/* harmony export */   "getDataSourceMeta": () => (/* binding */ getDataSourceMeta),
/* harmony export */   "getDataSourcePlugins": () => (/* binding */ getDataSourcePlugins),
/* harmony export */   "getDataSources": () => (/* binding */ getDataSources),
/* harmony export */   "getDataSourcesCount": () => (/* binding */ getDataSourcesCount),
/* harmony export */   "getDataSourcesLayoutMode": () => (/* binding */ getDataSourcesLayoutMode),
/* harmony export */   "getDataSourcesSearchQuery": () => (/* binding */ getDataSourcesSearchQuery)
/* harmony export */ });
const getDataSources = state => {
  const regex = new RegExp(state.searchQuery, 'i');
  return state.dataSources.filter(dataSource => {
    return regex.test(dataSource.name) || regex.test(dataSource.database) || regex.test(dataSource.type);
  });
};
const getDataSourcePlugins = state => {
  const regex = new RegExp(state.dataSourceTypeSearchQuery, 'i');
  return state.plugins.filter(type => {
    return regex.test(type.name);
  });
};
const getDataSource = (state, dataSourceId) => {
  if (state.dataSource.uid === dataSourceId) {
    return state.dataSource;
  }

  return {};
};
const getDataSourceMeta = (state, type) => {
  if (state.dataSourceMeta.id === type) {
    return state.dataSourceMeta;
  }

  return {};
};
const getDataSourcesSearchQuery = state => state.searchQuery;
const getDataSourcesLayoutMode = state => state.layoutMode;
const getDataSourcesCount = state => state.dataSourcesCount;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVNvdXJjZURhc2hib2FyZHMuNDMxN2JlMzY2ODYwOTZmNDJjMWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQyxPQUFULEdBQW1CO0VBQUE7O0VBQ3hCLE1BQU1DLE1BQU0sMEJBQUdGLG9FQUFILHdEQUFHLG9CQUFvQkksV0FBbkM7RUFDQSxPQUFPLENBQUMsRUFBRUYsTUFBTSxJQUFJQSxNQUFNLEdBQUcsQ0FBckIsQ0FBUjtBQUNEO0FBRU0sTUFBTUcsY0FBYyxHQUFHLE1BQU1KLE9BQU8sTUFBTUQseUZBQTFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFFQTs7OztBQVVBLE1BQU1XLGVBQTBCLEdBQUcsQ0FBQztFQUFFQyxVQUFGO0VBQWNDLFFBQWQ7RUFBd0JDO0FBQXhCLENBQUQsS0FBd0M7RUFDekUsU0FBU0MsVUFBVCxDQUFvQkMsU0FBcEIsRUFBZ0Q7SUFDOUMsT0FBT0EsU0FBUyxDQUFDQyxRQUFWLEtBQXVCRCxTQUFTLENBQUNFLGdCQUFqQyxHQUFvRCxRQUFwRCxHQUErRCxXQUF0RTtFQUNEOztFQUVELG9CQUNFO0lBQU8sU0FBUyxFQUFDLGNBQWpCO0lBQUEsdUJBQ0U7TUFBQSxVQUNHTixVQUFVLENBQUNPLEdBQVgsQ0FBZSxDQUFDSCxTQUFELEVBQVlJLEtBQVosS0FBc0I7UUFDcEMsb0JBQ0U7VUFBQSxzQ0FDRTtZQUFJLFNBQVMsRUFBQyxTQUFkO1lBQUEsdUJBQ0UsdURBQUMsNkNBQUQ7Y0FBTSxJQUFJLEVBQUM7WUFBWDtVQURGLEVBREYsZ0JBSUU7WUFBQSxVQUNHSixTQUFTLENBQUNLLFFBQVYsZ0JBQ0M7Y0FBRyxJQUFJLEVBQUVMLFNBQVMsQ0FBQ00sV0FBbkI7Y0FBQSxVQUFpQ04sU0FBUyxDQUFDTztZQUEzQyxFQURELGdCQUdDO2NBQUEsVUFBT1AsU0FBUyxDQUFDTztZQUFqQjtVQUpKLEVBSkYsZUFXRTtZQUFJLEtBQUssRUFBRTtjQUFFQyxTQUFTLEVBQUU7WUFBYixDQUFYO1lBQUEsV0FD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MUIsS0FBaUU7RUFDaEcsSUFBSXZCLEtBQUssQ0FBQytELGNBQU4sQ0FBcUI4QixFQUFyQixLQUE0QnRFLElBQWhDLEVBQXNDO0lBQ3BDLE9BQU92QixLQUFLLENBQUMrRCxjQUFiO0VBQ0Q7O0VBRUQsT0FBTyxFQUFQO0FBQ0QsQ0FOTTtBQVFBLE1BQU0ySyx5QkFBeUIsR0FBSTFPLEtBQUQsSUFBNkJBLEtBQUssQ0FBQ3NPLFdBQXJFO0FBQ0EsTUFBTUssd0JBQXdCLEdBQUkzTyxLQUFELElBQTZCQSxLQUFLLENBQUM0TyxVQUFwRTtBQUNBLE1BQU1DLG1CQUFtQixHQUFJN08sS0FBRCxJQUE2QkEsS0FBSyxDQUFDOE8sZ0JBQS9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvRGFzaGJvYXJkc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9EYXRhU291cmNlRGFzaGJvYXJkcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9idWlsZENhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvc2VsZWN0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJpYWwoKSB7XG4gIGNvbnN0IGV4cGlyeSA9IGNvbmZpZy5saWNlbnNlSW5mbz8udHJpYWxFeHBpcnk7XG4gIHJldHVybiAhIShleHBpcnkgJiYgZXhwaXJ5ID4gMCk7XG59XG5cbmV4cG9ydCBjb25zdCBoaWdobGlnaHRUcmlhbCA9ICgpID0+IGlzVHJpYWwoKSAmJiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUGx1Z2luRGFzaGJvYXJkIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgZGFzaGJvYXJkczogUGx1Z2luRGFzaGJvYXJkW107XG4gIG9uSW1wb3J0OiAoZGFzaGJvYXJkOiBQbHVnaW5EYXNoYm9hcmQsIG92ZXJ3cml0ZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgb25SZW1vdmU6IChkYXNoYm9hcmQ6IFBsdWdpbkRhc2hib2FyZCkgPT4gdm9pZDtcbn1cblxuY29uc3QgRGFzaGJvYXJkc1RhYmxlOiBGQzxQcm9wcz4gPSAoeyBkYXNoYm9hcmRzLCBvbkltcG9ydCwgb25SZW1vdmUgfSkgPT4ge1xuICBmdW5jdGlvbiBidXR0b25UZXh0KGRhc2hib2FyZDogUGx1Z2luRGFzaGJvYXJkKSB7XG4gICAgcmV0dXJuIGRhc2hib2FyZC5yZXZpc2lvbiAhPT0gZGFzaGJvYXJkLmltcG9ydGVkUmV2aXNpb24gPyAnVXBkYXRlJyA6ICdSZS1pbXBvcnQnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlXCI+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtkYXNoYm9hcmRzLm1hcCgoZGFzaGJvYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIga2V5PXtgJHtkYXNoYm9hcmQuZGFzaGJvYXJkSWR9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC0xXCI+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImFwcHNcIiAvPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge2Rhc2hib2FyZC5pbXBvcnRlZCA/IChcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Rhc2hib2FyZC5pbXBvcnRlZFVybH0+e2Rhc2hib2FyZC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXNoYm9hcmQudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgeyFkYXNoYm9hcmQuaW1wb3J0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBvbkltcG9ydChkYXNoYm9hcmQsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgIEltcG9ydFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IG9uSW1wb3J0KGRhc2hib2FyZCwgdHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dChkYXNoYm9hcmQpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ZGFzaGJvYXJkLmltcG9ydGVkICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBkYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25SZW1vdmUoZGFzaGJvYXJkKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRzVGFibGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgUGx1Z2luRGFzaGJvYXJkLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgaW1wb3J0RGFzaGJvYXJkLCByZW1vdmVEYXNoYm9hcmQgfSBmcm9tICcuLi9kYXNoYm9hcmQvc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBsb2FkUGx1Z2luRGFzaGJvYXJkcyB9IGZyb20gJy4uL3BsdWdpbnMvYWRtaW4vc3RhdGUvYWN0aW9ucyc7XG5cbmltcG9ydCBEYXNoYm9hcmRUYWJsZSBmcm9tICcuL0Rhc2hib2FyZHNUYWJsZSc7XG5pbXBvcnQgeyBsb2FkRGF0YVNvdXJjZSB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE93blByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyB1aWQ6IHN0cmluZyB9PiB7fVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUsIHByb3BzOiBPd25Qcm9wcykge1xuICBjb25zdCBkYXRhU291cmNlSWQgPSBwcm9wcy5tYXRjaC5wYXJhbXMudWlkO1xuXG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCBgZGF0YXNvdXJjZS1kYXNoYm9hcmRzLSR7ZGF0YVNvdXJjZUlkfWApLFxuICAgIGRhc2hib2FyZHM6IHN0YXRlLnBsdWdpbnMuZGFzaGJvYXJkcyxcbiAgICBkYXRhU291cmNlOiBnZXREYXRhU291cmNlKHN0YXRlLmRhdGFTb3VyY2VzLCBkYXRhU291cmNlSWQpLFxuICAgIGlzTG9hZGluZzogc3RhdGUucGx1Z2lucy5pc0xvYWRpbmdQbHVnaW5EYXNoYm9hcmRzLFxuICAgIGRhdGFTb3VyY2VJZCxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBpbXBvcnREYXNoYm9hcmQsXG4gIGxvYWREYXRhU291cmNlLFxuICBsb2FkUGx1Z2luRGFzaGJvYXJkcyxcbiAgcmVtb3ZlRGFzaGJvYXJkLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2VEYXNoYm9hcmRzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGxvYWREYXRhU291cmNlLCBkYXRhU291cmNlSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgYXdhaXQgbG9hZERhdGFTb3VyY2UoZGF0YVNvdXJjZUlkKTtcbiAgICB0aGlzLnByb3BzLmxvYWRQbHVnaW5EYXNoYm9hcmRzKCk7XG4gIH1cblxuICBvbkltcG9ydCA9IChkYXNoYm9hcmQ6IFBsdWdpbkRhc2hib2FyZCwgb3ZlcndyaXRlOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhU291cmNlLCBpbXBvcnREYXNoYm9hcmQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgcGx1Z2luSWQ6IGRhc2hib2FyZC5wbHVnaW5JZCxcbiAgICAgIHBhdGg6IGRhc2hib2FyZC5wYXRoLFxuICAgICAgb3ZlcndyaXRlLFxuICAgICAgaW5wdXRzOiBbXSxcbiAgICB9O1xuXG4gICAgaWYgKGRhdGFTb3VyY2UpIHtcbiAgICAgIGRhdGEuaW5wdXRzLnB1c2goe1xuICAgICAgICBuYW1lOiAnKicsXG4gICAgICAgIHR5cGU6ICdkYXRhc291cmNlJyxcbiAgICAgICAgcGx1Z2luSWQ6IGRhdGFTb3VyY2UudHlwZSxcbiAgICAgICAgdmFsdWU6IGRhdGFTb3VyY2UubmFtZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGltcG9ydERhc2hib2FyZChkYXRhLCBkYXNoYm9hcmQudGl0bGUpO1xuICB9O1xuXG4gIG9uUmVtb3ZlID0gKGRhc2hib2FyZDogUGx1Z2luRGFzaGJvYXJkKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5yZW1vdmVEYXNoYm9hcmQoZGFzaGJvYXJkLnVpZCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkcywgbmF2TW9kZWwsIGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxuICAgICAgICAgIDxEYXNoYm9hcmRUYWJsZVxuICAgICAgICAgICAgZGFzaGJvYXJkcz17ZGFzaGJvYXJkc31cbiAgICAgICAgICAgIG9uSW1wb3J0PXsoZGFzaGJvYXJkLCBvdmVyd3JpdGUpID0+IHRoaXMub25JbXBvcnQoZGFzaGJvYXJkLCBvdmVyd3JpdGUpfVxuICAgICAgICAgICAgb25SZW1vdmU9eyhkYXNoYm9hcmQpID0+IHRoaXMub25SZW1vdmUoZGFzaGJvYXJkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoRGF0YVNvdXJjZURhc2hib2FyZHMpO1xuIiwiaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBsb2NhdGlvblV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIERhdGFTb3VyY2VXaXRoQmFja2VuZCxcbiAgZ2V0RGF0YVNvdXJjZVNydixcbiAgSGVhbHRoQ2hlY2tFcnJvcixcbiAgSGVhbHRoQ2hlY2tSZXN1bHREZXRhaWxzLFxuICBpc0ZldGNoRXJyb3IsXG4gIGxvY2F0aW9uU2VydmljZSxcbn0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVOYXZJbmRleCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvYWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBnZXREYXRhc291cmNlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvZGF0YXNvdXJjZV9zcnYnO1xuaW1wb3J0IHsgZ2V0UGx1Z2luU2V0dGluZ3MgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9wbHVnaW5TZXR0aW5ncyc7XG5pbXBvcnQgeyBpbXBvcnREYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luX2xvYWRlcic7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnksIFRodW5rRGlzcGF0Y2gsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuXG5pbXBvcnQgeyBidWlsZENhdGVnb3JpZXMgfSBmcm9tICcuL2J1aWxkQ2F0ZWdvcmllcyc7XG5pbXBvcnQgeyBidWlsZE5hdk1vZGVsIH0gZnJvbSAnLi9uYXZNb2RlbCc7XG5pbXBvcnQge1xuICBkYXRhU291cmNlTG9hZGVkLFxuICBkYXRhU291cmNlTWV0YUxvYWRlZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkLFxuICBkYXRhU291cmNlUGx1Z2luc0xvYWRlZCxcbiAgZGF0YVNvdXJjZXNMb2FkZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQsXG4gIHRlc3REYXRhU291cmNlRmFpbGVkLFxuICB0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nLFxuICB0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCxcbn0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlLCBnZXREYXRhU291cmNlTWV0YSB9IGZyb20gJy4vc2VsZWN0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhU291cmNlVHlwZXNMb2FkZWRQYXlsb2FkIHtcbiAgcGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXTtcbiAgY2F0ZWdvcmllczogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzIHtcbiAgbG9hZERhdGFTb3VyY2U6IHR5cGVvZiBsb2FkRGF0YVNvdXJjZTtcbiAgbG9hZERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgbG9hZERhdGFTb3VyY2VNZXRhO1xuICBnZXREYXRhU291cmNlOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZTtcbiAgZ2V0RGF0YVNvdXJjZU1ldGE6IHR5cGVvZiBnZXREYXRhU291cmNlTWV0YTtcbiAgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbjogdHlwZW9mIGltcG9ydERhdGFTb3VyY2VQbHVnaW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdERhdGFTb3VyY2VEZXBlbmRlbmNpZXMge1xuICBnZXREYXRhc291cmNlU3J2OiB0eXBlb2YgZ2V0RGF0YVNvdXJjZVNydjtcbiAgZ2V0QmFja2VuZFNydjogdHlwZW9mIGdldEJhY2tlbmRTcnY7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0RGF0YVNvdXJjZVNldHRpbmdzID0gKFxuICBwYWdlSWQ6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBJbml0RGF0YVNvdXJjZVNldHRpbmdEZXBlbmRlbmNpZXMgPSB7XG4gICAgbG9hZERhdGFTb3VyY2UsXG4gICAgbG9hZERhdGFTb3VyY2VNZXRhLFxuICAgIGdldERhdGFTb3VyY2UsXG4gICAgZ2V0RGF0YVNvdXJjZU1ldGEsXG4gICAgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbixcbiAgfVxuKTogVGh1bmtSZXN1bHQ8dm9pZD4gPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGlmICghcGFnZUlkKSB7XG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKG5ldyBFcnJvcignSW52YWxpZCBJRCcpKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvYWRlZERhdGFTb3VyY2UgPSBhd2FpdCBkaXNwYXRjaChkZXBlbmRlbmNpZXMubG9hZERhdGFTb3VyY2UocGFnZUlkKSk7XG4gICAgICBhd2FpdCBkaXNwYXRjaChkZXBlbmRlbmNpZXMubG9hZERhdGFTb3VyY2VNZXRhKGxvYWRlZERhdGFTb3VyY2UpKTtcblxuICAgICAgLy8gaGF2ZSB3ZSBhbHJlYWR5IGxvYWRlZCB0aGUgcGx1Z2luIHRoZW4gd2UgY2FuIHNraXAgdGhlIHN0ZXBzIGJlbG93P1xuICAgICAgaWYgKGdldFN0YXRlKCkuZGF0YVNvdXJjZVNldHRpbmdzLnBsdWdpbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkZXBlbmRlbmNpZXMuZ2V0RGF0YVNvdXJjZShnZXRTdGF0ZSgpLmRhdGFTb3VyY2VzLCBwYWdlSWQpO1xuICAgICAgY29uc3QgZGF0YVNvdXJjZU1ldGEgPSBkZXBlbmRlbmNpZXMuZ2V0RGF0YVNvdXJjZU1ldGEoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgZGF0YVNvdXJjZSEudHlwZSk7XG4gICAgICBjb25zdCBpbXBvcnRlZFBsdWdpbiA9IGF3YWl0IGRlcGVuZGVuY2llcy5pbXBvcnREYXRhU291cmNlUGx1Z2luKGRhdGFTb3VyY2VNZXRhKTtcblxuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZChpbXBvcnRlZFBsdWdpbikpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQoZXJyKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3REYXRhU291cmNlID0gKFxuICBkYXRhU291cmNlTmFtZTogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzID0ge1xuICAgIGdldERhdGFzb3VyY2VTcnYsXG4gICAgZ2V0QmFja2VuZFNydixcbiAgfVxuKTogVGh1bmtSZXN1bHQ8dm9pZD4gPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRzQXBpID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldERhdGFzb3VyY2VTcnYoKS5nZXQoZGF0YVNvdXJjZU5hbWUpO1xuXG4gICAgaWYgKCFkc0FwaS50ZXN0RGF0YXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3RhcnRpbmcoKSk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLndpdGhOb0JhY2tlbmRDYWNoZShhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkc0FwaS50ZXN0RGF0YXNvdXJjZSgpO1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3VjY2VlZGVkKHJlc3VsdCkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBkZXRhaWxzOiBIZWFsdGhDaGVja1Jlc3VsdERldGFpbHM7XG5cbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEhlYWx0aENoZWNrRXJyb3IpIHtcbiAgICAgICAgICBtZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgZGV0YWlscyA9IGVyci5kZXRhaWxzO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRmV0Y2hFcnJvcihlcnIpKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGVyci5kYXRhLm1lc3NhZ2UgPz8gYEhUVFAgZXJyb3IgJHtlcnIuc3RhdHVzVGV4dH1gO1xuICAgICAgICB9IGVsc2UgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VGYWlsZWQoeyBtZXNzYWdlLCBkZXRhaWxzIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZXNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlKHVpZDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8UHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gYXdhaXQgZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCh1aWQpO1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZUxvYWRlZChkYXRhU291cmNlKSk7XG4gICAgcmV0dXJuIGRhdGFTb3VyY2U7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZU1ldGEoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcGx1Z2luSW5mbyA9IChhd2FpdCBnZXRQbHVnaW5TZXR0aW5ncyhkYXRhU291cmNlLnR5cGUpKSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbiAgICBjb25zdCBwbHVnaW4gPSBhd2FpdCBpbXBvcnREYXRhU291cmNlUGx1Z2luKHBsdWdpbkluZm8pO1xuICAgIGNvbnN0IGlzQmFja2VuZCA9IHBsdWdpbi5EYXRhU291cmNlQ2xhc3MucHJvdG90eXBlIGluc3RhbmNlb2YgRGF0YVNvdXJjZVdpdGhCYWNrZW5kO1xuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAuLi5wbHVnaW5JbmZvLFxuICAgICAgaXNCYWNrZW5kOiBwbHVnaW5JbmZvLmJhY2tlbmQgfHwgaXNCYWNrZW5kLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChkYXRhU291cmNlTWV0YUxvYWRlZChtZXRhKSk7XG5cbiAgICBwbHVnaW4ubWV0YSA9IG1ldGE7XG4gICAgZGlzcGF0Y2godXBkYXRlTmF2SW5kZXgoYnVpbGROYXZNb2RlbChkYXRhU291cmNlLCBwbHVnaW4pKSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0IGRhdGEgc291cmNlIGJ5IHVpZCBvciBpZCwgaWYgb2xkIGlkIGRldGVjdGVkIGhhbmRsZXMgcmVkaXJlY3RcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPERhdGFTb3VyY2VTZXR0aW5ncz4ge1xuICAvLyBUcnkgZmlyc3Qgd2l0aCB1aWQgYXBpXG4gIHRyeSB7XG4gICAgY29uc3QgYnlVaWQgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzL3VpZC8ke3VpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChieVVpZC5vaykge1xuICAgICAgcmV0dXJuIGJ5VWlkLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxvb2t1cCBkYXRhIHNvdXJjZSBieSB1aWQnLCBlcnIpO1xuICB9XG5cbiAgLy8gdHJ5IGxvb2t1cCBieSBvbGQgZGIgaWRcbiAgY29uc3QgaWQgPSB0eXBlb2YgdWlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHVpZCwgMTApIDogdWlkO1xuICBpZiAoIU51bWJlci5pc05hTihpZCkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8RGF0YVNvdXJjZVNldHRpbmdzPih7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogYC9hcGkvZGF0YXNvdXJjZXMvJHtpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIElmIHRoZSB1aWQgaXMgYSBudW1iZXIsIHRoZW4gdGhpcyBpcyBhIHJlZnJlc2ggb24gb25lIG9mIHRoZSBzZXR0aW5ncyB0YWJzXG4gICAgLy8gYW5kIHdlIGNhbiByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGFcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgdHlwZW9mIHVpZCA9PT0gJ251bWJlcicgJiYgcmVzcG9uc2UuZGF0YS5pZCA9PT0gdWlkKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICAvLyBOb3QgaWRlYWwgdG8gZG8gYSBmdWxsIHBhZ2UgcmVsb2FkIGhlcmUgYnV0IHNvIHRyaWNreSB0byBoYW5kbGUgdGhpc1xuICAgIC8vIG90aGVyd2lzZSBXZSBjYW4gdXBkYXRlIHRoZSBsb2NhdGlvbiB1c2luZyByZWFjdCByb3V0ZXIsIGJ1dCBuZWVkIHRvXG4gICAgLy8gZnVsbHkgcmVsb2FkIHRoZSByb3V0ZSBhcyB0aGUgbmF2IG1vZGVsIHBhZ2UgaW5kZXggaXMgbm90IG1hdGNoaW5nIHdpdGhcbiAgICAvLyB0aGUgdXJsIGluIHRoYXQgY2FzZS4gQW5kIHJlYWN0IHJvdXRlciBoYXMgbm8gd2F5IHRvIHVubW91bnQgcmVtb3VudCBhXG4gICAgLy8gcm91dGVcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2UuZGF0YS5pZC50b1N0cmluZygpID09PSB1aWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb25VdGlsLmFzc3VyZUJhc2VVcmwoYC9kYXRhc291cmNlcy9lZGl0LyR7cmVzcG9uc2UuZGF0YS51aWR9YCk7XG4gICAgICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzOyAvLyBhdm9pZHMgZmxhc2hpbmcgYW4gZXJyb3JcbiAgICB9XG4gIH1cblxuICB0aHJvdyBFcnJvcignQ291bGQgbm90IGZpbmQgZGF0YSBzb3VyY2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERhdGFTb3VyY2UocGx1Z2luOiBEYXRhU291cmNlUGx1Z2luTWV0YSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkRGF0YVNvdXJjZXMoKSk7XG5cbiAgICBjb25zdCBkYXRhU291cmNlcyA9IGdldFN0b3JlKCkuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZXM7XG5cbiAgICBjb25zdCBuZXdJbnN0YW5jZSA9IHtcbiAgICAgIG5hbWU6IHBsdWdpbi5uYW1lLFxuICAgICAgdHlwZTogcGx1Z2luLmlkLFxuICAgICAgYWNjZXNzOiAncHJveHknLFxuICAgICAgaXNEZWZhdWx0OiBkYXRhU291cmNlcy5sZW5ndGggPT09IDAsXG4gICAgfTtcblxuICAgIGlmIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpKSB7XG4gICAgICBuZXdJbnN0YW5jZS5uYW1lID0gZmluZE5ld05hbWUoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2RhdGFzb3VyY2VzJywgbmV3SW5zdGFuY2UpO1xuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcblxuICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcblxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3VsdC5kYXRhc291cmNlLnVpZH1gKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlUGx1Z2lucygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlUGx1Z2luc0xvYWQoKSk7XG4gICAgY29uc3QgcGx1Z2lucyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGx1Z2lucycsIHsgZW5hYmxlZDogMSwgdHlwZTogJ2RhdGFzb3VyY2UnIH0pO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBidWlsZENhdGVnb3JpZXMocGx1Z2lucyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQoeyBwbHVnaW5zLCBjYXRlZ29yaWVzIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURhdGFTb3VyY2UoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCwgZGF0YVNvdXJjZSk7IC8vIGJ5IFVJRCBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2gobG9hZERhdGFTb3VyY2UoZGF0YVNvdXJjZS51aWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURhdGFTb3VyY2UoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2U7XG5cbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL2RhdGFzb3VyY2VzLyR7ZGF0YVNvdXJjZS5pZH1gKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2RhdGFzb3VyY2VzJyk7XG4gIH07XG59XG5cbmludGVyZmFjZSBJdGVtV2l0aE5hbWUge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRXhpdHMoZGF0YVNvdXJjZXM6IEl0ZW1XaXRoTmFtZVtdLCBuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChcbiAgICBkYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2UpID0+IHtcbiAgICAgIHJldHVybiBkYXRhU291cmNlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIC8vIE5lZWQgdG8gbG9vcCB0aHJvdWdoIGN1cnJlbnQgZGF0YSBzb3VyY2VzIHRvIG1ha2Ugc3VyZVxuICAvLyB0aGUgbmFtZSBkb2Vzbid0IGV4aXN0XG4gIHdoaWxlIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5hbWUpKSB7XG4gICAgLy8gSWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZG9lc24ndCBlbmQgd2l0aCAnLXgnXG4gICAgLy8gd2UgY2FuIGFkZCAtMSB0byB0aGUgbmFtZSBhbmQgYmUgZG9uZS5cbiAgICBpZiAoIW5hbWVIYXNTdWZmaXgobmFtZSkpIHtcbiAgICAgIG5hbWUgPSBgJHtuYW1lfS0xYDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZW5kcyB3aXRoICcteCdcbiAgICAgIC8vIHdlIGNhbiB0cnkgdG8gaW5jcmVtZW50IHRoZSBsYXN0IGRpZ2l0IHVudGlsIHRoZSBuYW1lIGlzIHVuaXF1ZVxuXG4gICAgICAvLyByZW1vdmUgdGhlICd4JyBwYXJ0IGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIG5ldyBudW1iZXJcbiAgICAgIG5hbWUgPSBgJHtnZXROZXdOYW1lKG5hbWUpfSR7aW5jcmVtZW50TGFzdERpZ2l0KGdldExhc3REaWdpdChuYW1lKSl9YDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gbmFtZUhhc1N1ZmZpeChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuZW5kc1dpdGgoJy0nLCBuYW1lLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0RGlnaXQobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZUludChuYW1lLnNsaWNlKC0xKSwgMTApO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRMYXN0RGlnaXQoZGlnaXQ6IG51bWJlcikge1xuICByZXR1cm4gaXNOYU4oZGlnaXQpID8gMSA6IGRpZ2l0ICsgMTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSAxKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnkgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10pOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSB7XG4gIGNvbnN0IGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdID0gW1xuICAgIHsgaWQ6ICd0c2RiJywgdGl0bGU6ICdUaW1lIHNlcmllcyBkYXRhYmFzZXMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdsb2dnaW5nJywgdGl0bGU6ICdMb2dnaW5nICYgZG9jdW1lbnQgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAndHJhY2luZycsIHRpdGxlOiAnRGlzdHJpYnV0ZWQgdHJhY2luZycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3NxbCcsIHRpdGxlOiAnU1FMJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnY2xvdWQnLCB0aXRsZTogJ0Nsb3VkJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnZW50ZXJwcmlzZScsIHRpdGxlOiAnRW50ZXJwcmlzZSBwbHVnaW5zJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnaW90JywgdGl0bGU6ICdJbmR1c3RyaWFsICYgSW9UJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnb3RoZXInLCB0aXRsZTogJ090aGVycycsIHBsdWdpbnM6IFtdIH0sXG4gIF0uZmlsdGVyKChpdGVtKSA9PiBpdGVtKTtcblxuICBjb25zdCBjYXRlZ29yeUluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnk+ID0ge307XG4gIGNvbnN0IHBsdWdpbkluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luTWV0YT4gPSB7fTtcbiAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbnMgPSBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTtcblxuICAvLyBidWlsZCBpbmRpY2VzXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGNhdGVnb3J5SW5kZXhbY2F0ZWdvcnkuaWRdID0gY2F0ZWdvcnk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbiA9IGVudGVycHJpc2VQbHVnaW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5pZCk7XG4gICAgLy8gRm9yY2UgY2F0ZWdvcnkgZm9yIGVudGVycHJpc2UgcGx1Z2luc1xuICAgIGlmIChwbHVnaW4uZW50ZXJwcmlzZSB8fCBlbnRlcnByaXNlUGx1Z2luKSB7XG4gICAgICBwbHVnaW4uY2F0ZWdvcnkgPSAnZW50ZXJwcmlzZSc7XG4gICAgICBwbHVnaW4udW5saWNlbnNlZCA9ICFmZWF0dXJlRW5hYmxlZCgnZW50ZXJwcmlzZS5wbHVnaW5zJyk7XG4gICAgICBwbHVnaW4uaW5mby5saW5rcyA9IGVudGVycHJpc2VQbHVnaW4/LmluZm8/LmxpbmtzIHx8IHBsdWdpbi5pbmZvLmxpbmtzO1xuICAgIH1cblxuICAgIC8vIEZpeCBsaW5rIG5hbWVcbiAgICBpZiAocGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgIGZvciAoY29uc3QgbGluayBvZiBwbHVnaW4uaW5mby5saW5rcykge1xuICAgICAgICBsaW5rLm5hbWUgPSAnTGVhcm4gbW9yZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5jYXRlZ29yeSkgfHwgY2F0ZWdvcnlJbmRleFsnb3RoZXInXTtcbiAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAvLyBhZGQgdG8gcGx1Z2luIGluZGV4XG4gICAgcGx1Z2luSW5kZXhbcGx1Z2luLmlkXSA9IHBsdWdpbjtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpblxuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2Nsb3VkJykge1xuICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHBoYW50b20gcGx1Z2luc1xuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2VudGVycHJpc2UnKSB7XG4gICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBlbnRlcnByaXNlUGx1Z2lucykge1xuICAgICAgICBpZiAoIXBsdWdpbkluZGV4W3BsdWdpbi5pZF0pIHtcbiAgICAgICAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRQbHVnaW5zKGNhdGVnb3J5LnBsdWdpbnMpO1xuICB9XG5cbiAgLy8gT25seSBzaG93IGNhdGVnb3JpZXMgd2l0aCBwbHVnaW5zXG4gIHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYy5wbHVnaW5zLmxlbmd0aCA+IDApO1xufVxuXG5mdW5jdGlvbiBzb3J0UGx1Z2lucyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKSB7XG4gIGNvbnN0IHNvcnRpbmdSdWxlczogeyBbaWQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIHByb21ldGhldXM6IDEwMCxcbiAgICBncmFwaGl0ZTogOTUsXG4gICAgbG9raTogOTAsXG4gICAgbXlzcWw6IDgwLFxuICAgIGphZWdlcjogMTAwLFxuICAgIHBvc3RncmVzOiA3OSxcbiAgICBnY2xvdWQ6IC0xLFxuICB9O1xuXG4gIHBsdWdpbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFTb3J0ID0gc29ydGluZ1J1bGVzW2EuaWRdIHx8IDA7XG4gICAgY29uc3QgYlNvcnQgPSBzb3J0aW5nUnVsZXNbYi5pZF0gfHwgMDtcbiAgICBpZiAoYVNvcnQgPiBiU29ydCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYVNvcnQgPCBiU29ydCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IDEgOiAtMTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucygpOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdIHtcbiAgcmV0dXJuIFtcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zcGx1bmstZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIFNwbHVuayBsb2dzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zcGx1bmtfbG9nb18xMjgucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1vcmFjbGUtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnT3JhY2xlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIE9yYWNsZSBTUUwnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL29yYWNsZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWR5bmF0cmFjZS1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdEeW5hdHJhY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgRHluYXRyYWNlIGRhdGEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2R5bmF0cmFjZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNlcnZpY2Vub3ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NlcnZpY2VOb3cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTZXJ2aWNlTm93JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zZXJ2aWNlbm93LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZGF0YWRvZy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGF0YURvZyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ0RhdGFEb2cnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2RhdGFkb2cucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1uZXdyZWxpYy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTmV3IFJlbGljIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTmV3IFJlbGljJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9uZXdyZWxpYy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW1vbmdvZGItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ01vbmdvREIgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdNb25nb0RCJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9tb25nb2RiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc25vd2ZsYWtlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTbm93Zmxha2UgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTbm93Zmxha2UnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3Nub3dmbGFrZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXdhdmVmcm9udC1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2F2ZWZyb250IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnV2F2ZWZyb250JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy93YXZlZnJvbnQuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZGxvcGVzNy1hcHBkeW5hbWljcy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwRHluYW1pY3MgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdBcHBEeW5hbWljcycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvYXBwZHluYW1pY3Muc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYXBoYW5hLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTQVAgSEFOQcKuIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU0FQIEhBTkHCricsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FwX2hhbmEucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1ob25leWNvbWItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hvbmV5Y29tYiBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSG9uZXljb21iJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9ob25leWNvbWIucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYWxlc2ZvcmNlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTYWxlc2ZvcmNlIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTYWxlc2ZvcmNlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zYWxlc2ZvcmNlLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtamlyYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSmlyYSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSmlyYScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvamlyYV9sb2dvLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZ2l0bGFiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdHaXRMYWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0dpdExhYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZ2l0bGFiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLW1vbml0b3JpbmctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NpZ25hbEZ4IGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTcGx1bmsgSW5mcmFzdHJ1Y3R1cmUgTW9uaXRvcmluZycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2lnbmFsZngtbG9nby5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWF6dXJlZGV2b3BzLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdBenVyZSBEZXZvcHMgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnQXp1cmUgRGV2b3BzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9henVyZS1kZXZvcHMucG5nJyxcbiAgICB9KSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbigpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6ICdnY2xvdWQnLFxuICAgIG5hbWU6ICdHcmFmYW5hIENsb3VkJyxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246ICdIb3N0ZWQgR3JhcGhpdGUsIFByb21ldGhldXMsIGFuZCBMb2tpJyxcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiAncHVibGljL2ltZy9ncmFmYW5hX2ljb24uc3ZnJywgbGFyZ2U6ICdhc2QnIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2dyYWZhbmEuY29tL3Byb2R1Y3RzL2Nsb3VkLycsXG4gICAgICAgICAgbmFtZTogJ0xlYXJuIG1vcmUnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEdldFBoYW50b21QbHVnaW5PcHRpb25zIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWdVcmw6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0UGhhbnRvbVBsdWdpbihvcHRpb25zOiBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogb3B0aW9ucy5pZCxcbiAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgbG9nb3M6IHsgc21hbGw6IG9wdGlvbnMuaW1nVXJsLCBsYXJnZTogb3B0aW9ucy5pbWdVcmwgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogY29uZmlnLnBsdWdpbkNhdGFsb2dVUkwgKyBvcHRpb25zLmlkLFxuICAgICAgICAgIG5hbWU6ICdJbnN0YWxsIG5vdycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVNldHRpbmdzLCBQbHVnaW5UeXBlLCBQbHVnaW5JbmNsdWRlLCBOYXZNb2RlbCwgTmF2TW9kZWxJdGVtIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUHJvQmFkZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvUHJvQmFkZ2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGhpZ2hsaWdodFRyaWFsIH0gZnJvbSAnLi4vLi4vYWRtaW4vdXRpbHMnO1xuaW1wb3J0IHsgR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICcuLi9zZXR0aW5ncy9QbHVnaW5TZXR0aW5ncyc7XG5cbmNvbnN0IGxvYWRpbmdEU1R5cGUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncywgcGx1Z2luOiBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbik6IE5hdk1vZGVsSXRlbSB7XG4gIGNvbnN0IHBsdWdpbk1ldGEgPSBwbHVnaW4ubWV0YTtcbiAgY29uc3QgaGlnaGxpZ2h0c0VuYWJsZWQgPSBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4gIGNvbnN0IG5hdk1vZGVsOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaW1nOiBwbHVnaW5NZXRhLmluZm8ubG9nb3MubGFyZ2UsXG4gICAgaWQ6ICdkYXRhc291cmNlLScgKyBkYXRhU291cmNlLnVpZCxcbiAgICBzdWJUaXRsZTogYFR5cGU6ICR7cGx1Z2luTWV0YS5uYW1lfWAsXG4gICAgdXJsOiAnJyxcbiAgICB0ZXh0OiBkYXRhU291cmNlLm5hbWUsXG4gICAgYnJlYWRjcnVtYnM6IFt7IHRpdGxlOiAnRGF0YSBTb3VyY2VzJywgdXJsOiAnZGF0YXNvdXJjZXMnIH1dLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGljb246ICdzbGlkZXJzLXYtYWx0JyxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXNldHRpbmdzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgICAgdGV4dDogJ1NldHRpbmdzJyxcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9gLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGlmIChwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHRleHQ6IHBhZ2UudGl0bGUsXG4gICAgICAgIGljb246IHBhZ2UuaWNvbixcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS8/cGFnZT0ke3BhZ2UuaWR9YCxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXBhZ2UtJHtwYWdlLmlkfWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAocGx1Z2luTWV0YS5pbmNsdWRlcyAmJiBoYXNEYXNoYm9hcmRzKHBsdWdpbk1ldGEuaW5jbHVkZXMpICYmIGNvbnRleHRTcnYuaGFzUm9sZSgnQWRtaW4nKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBpY29uOiAnYXBwcycsXG4gICAgICBpZDogYGRhdGFzb3VyY2UtZGFzaGJvYXJkcy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICB0ZXh0OiAnRGFzaGJvYXJkcycsXG4gICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2Rhc2hib2FyZHNgLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaXNMb2FkaW5nTmF2ID0gZGF0YVNvdXJjZS50eXBlID09PSBsb2FkaW5nRFNUeXBlO1xuXG4gIGNvbnN0IHBlcm1pc3Npb25zRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1wZXJtaXNzaW9ucy1iYWRnZSc7XG4gIGNvbnN0IGRzUGVybWlzc2lvbnM6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdsb2NrJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtcGVybWlzc2lvbnMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdQZXJtaXNzaW9ucycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9wZXJtaXNzaW9uc2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGRzUGVybWlzc2lvbnMudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2RzcGVybWlzc2lvbnMnKSkge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCkpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGRzUGVybWlzc2lvbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uZHNQZXJtaXNzaW9ucyxcbiAgICAgIHVybDogZHNQZXJtaXNzaW9ucy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhbmFseXRpY3NFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLWluc2lnaHRzLWJhZGdlJztcbiAgY29uc3QgYW5hbHl0aWNzOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnaW5mby1jaXJjbGUnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1pbnNpZ2h0cy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0luc2lnaHRzJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2luc2lnaHRzYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgYW5hbHl0aWNzLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnYW5hbHl0aWNzJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChhbmFseXRpY3MpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5hbmFseXRpY3MsXG4gICAgICB1cmw6IGFuYWx5dGljcy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2FjaGluZ0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtcXVlcnktY2FjaGluZy1iYWRnZSc7XG5cbiAgY29uc3QgY2FjaGluZzogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2RhdGFiYXNlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtY2FjaGUtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdDYWNoZScsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9jYWNoZWAsXG4gICAgaGlkZUZyb21UYWJzOiAhcGx1Z2luTWV0YS5pc0JhY2tlbmQgfHwgIWNvbmZpZy5jYWNoaW5nLmVuYWJsZWQsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGNhY2hpbmcudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnY2FjaGluZycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goY2FjaGluZyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmNhY2hpbmcsXG4gICAgICB1cmw6IGNhY2hpbmcudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTmF2KG1haW46IE5hdk1vZGVsSXRlbSwgcGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgbGV0IG5vZGU6IE5hdk1vZGVsSXRlbSA9IHsgdGV4dDogJycgfTtcblxuICAvLyBmaW5kIGFjdGl2ZSBwYWdlXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgbWFpbi5jaGlsZHJlbiEpIHtcbiAgICBpZiAoY2hpbGQuaWQhLmluZGV4T2YocGFnZU5hbWUpID4gMCkge1xuICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbixcbiAgICBub2RlOiBub2RlISxcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTG9hZGluZ05hdihwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0gYnVpbGROYXZNb2RlbChcbiAgICB7XG4gICAgICBhY2Nlc3M6ICcnLFxuICAgICAgYmFzaWNBdXRoOiBmYWxzZSxcbiAgICAgIGJhc2ljQXV0aFVzZXI6ICcnLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIGRhdGFiYXNlOiAnJyxcbiAgICAgIGlkOiAxLFxuICAgICAgdWlkOiAneCcsXG4gICAgICBpc0RlZmF1bHQ6IGZhbHNlLFxuICAgICAganNvbkRhdGE6IHsgYXV0aFR5cGU6ICdjcmVkZW50aWFscycsIGRlZmF1bHRSZWdpb246ICdldS13ZXN0LTInIH0sXG4gICAgICBuYW1lOiAnTG9hZGluZycsXG4gICAgICBvcmdJZDogMSxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHR5cGU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTmFtZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVMb2dvVXJsOiAncHVibGljL2ltZy9pY24tZGF0YXNvdXJjZS5zdmcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgc2VjdXJlSnNvbkZpZWxkczoge30sXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICBsaW5rczogW3sgbmFtZTogJycsIHVybDogJycgfV0sXG4gICAgICAgICAgbG9nb3M6IHtcbiAgICAgICAgICAgIGxhcmdlOiAnJyxcbiAgICAgICAgICAgIHNtYWxsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgICB2ZXJzaW9uOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZXM6IFtdLFxuICAgICAgICBtb2R1bGU6ICcnLFxuICAgICAgICBiYXNlVXJsOiAnJyxcbiAgICAgIH0sXG4gICAgfSBhcyBhbnlcbiAgKTtcblxuICByZXR1cm4gZ2V0RGF0YVNvdXJjZU5hdihtYWluLCBwYWdlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0Rhc2hib2FyZHMoaW5jbHVkZXM6IFBsdWdpbkluY2x1ZGVbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGluY2x1ZGVzLmZpbmQoKGluY2x1ZGUpID0+IHtcbiAgICAgIHJldHVybiBpbmNsdWRlLnR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICAgIH0pICE9PSB1bmRlZmluZWRcbiAgKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIFVybFF1ZXJ5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZXNTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGFzb3VyY2VzJztcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5zZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChkYXRhU291cmNlLm5hbWUpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5kYXRhYmFzZSkgfHwgcmVnZXgudGVzdChkYXRhU291cmNlLnR5cGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlUGx1Z2lucyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuZGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUucGx1Z2lucy5maWx0ZXIoKHR5cGU6IERhdGFTb3VyY2VQbHVnaW5NZXRhKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodHlwZS5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgZGF0YVNvdXJjZUlkOiBVcmxRdWVyeVZhbHVlKTogRGF0YVNvdXJjZVNldHRpbmdzID0+IHtcbiAgaWYgKHN0YXRlLmRhdGFTb3VyY2UudWlkID09PSBkYXRhU291cmNlSWQpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZTtcbiAgfVxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VNZXRhID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlLCB0eXBlOiBzdHJpbmcpOiBEYXRhU291cmNlUGx1Z2luTWV0YSA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlTWV0YS5pZCA9PT0gdHlwZSkge1xuICAgIHJldHVybiBzdGF0ZS5kYXRhU291cmNlTWV0YTtcbiAgfVxuXG4gIHJldHVybiB7fSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5ID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc0xheW91dE1vZGUgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmxheW91dE1vZGU7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNDb3VudCA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXNDb3VudDtcbiJdLCJuYW1lcyI6WyJjb25maWciLCJpc1RyaWFsIiwiZXhwaXJ5IiwibGljZW5zZUluZm8iLCJ0cmlhbEV4cGlyeSIsImhpZ2hsaWdodFRyaWFsIiwiZmVhdHVyZVRvZ2dsZXMiLCJmZWF0dXJlSGlnaGxpZ2h0cyIsIlJlYWN0IiwiQnV0dG9uIiwiSWNvbiIsIkRhc2hib2FyZHNUYWJsZSIsImRhc2hib2FyZHMiLCJvbkltcG9ydCIsIm9uUmVtb3ZlIiwiYnV0dG9uVGV4dCIsImRhc2hib2FyZCIsInJldmlzaW9uIiwiaW1wb3J0ZWRSZXZpc2lvbiIsIm1hcCIsImluZGV4IiwiaW1wb3J0ZWQiLCJpbXBvcnRlZFVybCIsInRpdGxlIiwidGV4dEFsaWduIiwiZGFzaGJvYXJkSWQiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsImltcG9ydERhc2hib2FyZCIsInJlbW92ZURhc2hib2FyZCIsImxvYWRQbHVnaW5EYXNoYm9hcmRzIiwiRGFzaGJvYXJkVGFibGUiLCJsb2FkRGF0YVNvdXJjZSIsImdldERhdGFTb3VyY2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb3BzIiwiZGF0YVNvdXJjZUlkIiwibWF0Y2giLCJwYXJhbXMiLCJ1aWQiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwicGx1Z2lucyIsImRhdGFTb3VyY2UiLCJkYXRhU291cmNlcyIsImlzTG9hZGluZyIsImlzTG9hZGluZ1BsdWdpbkRhc2hib2FyZHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJEYXRhU291cmNlRGFzaGJvYXJkcyIsIm92ZXJ3cml0ZSIsImRhdGEiLCJwbHVnaW5JZCIsInBhdGgiLCJpbnB1dHMiLCJwdXNoIiwibmFtZSIsInR5cGUiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwibGFzdFZhbHVlRnJvbSIsImxvY2F0aW9uVXRpbCIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsIkhlYWx0aENoZWNrRXJyb3IiLCJpc0ZldGNoRXJyb3IiLCJsb2NhdGlvblNlcnZpY2UiLCJ1cGRhdGVOYXZJbmRleCIsImdldEJhY2tlbmRTcnYiLCJhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSIsImdldERhdGFzb3VyY2VTcnYiLCJnZXRQbHVnaW5TZXR0aW5ncyIsImltcG9ydERhdGFTb3VyY2VQbHVnaW4iLCJjb250ZXh0U3J2IiwiYnVpbGRDYXRlZ29yaWVzIiwiYnVpbGROYXZNb2RlbCIsImRhdGFTb3VyY2VMb2FkZWQiLCJkYXRhU291cmNlTWV0YUxvYWRlZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkIiwiZGF0YVNvdXJjZXNMb2FkZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZCIsInRlc3REYXRhU291cmNlRmFpbGVkIiwidGVzdERhdGFTb3VyY2VTdGFydGluZyIsInRlc3REYXRhU291cmNlU3VjY2VlZGVkIiwiZ2V0RGF0YVNvdXJjZU1ldGEiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzIiwicGFnZUlkIiwiZGVwZW5kZW5jaWVzIiwibG9hZERhdGFTb3VyY2VNZXRhIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIkVycm9yIiwibG9hZGVkRGF0YVNvdXJjZSIsImRhdGFTb3VyY2VTZXR0aW5ncyIsInBsdWdpbiIsImRhdGFTb3VyY2VNZXRhIiwiaW1wb3J0ZWRQbHVnaW4iLCJlcnIiLCJ0ZXN0RGF0YVNvdXJjZSIsImRhdGFTb3VyY2VOYW1lIiwiZHNBcGkiLCJnZXQiLCJ0ZXN0RGF0YXNvdXJjZSIsIndpdGhOb0JhY2tlbmRDYWNoZSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJkZXRhaWxzIiwic3RhdHVzVGV4dCIsImxvYWREYXRhU291cmNlcyIsInJlc3BvbnNlIiwiZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCIsInBsdWdpbkluZm8iLCJpc0JhY2tlbmQiLCJEYXRhU291cmNlQ2xhc3MiLCJwcm90b3R5cGUiLCJtZXRhIiwiYmFja2VuZCIsImJ5VWlkIiwiZmV0Y2giLCJtZXRob2QiLCJ1cmwiLCJzaG93RXJyb3JBbGVydCIsIm9rIiwiY29uc29sZSIsImxvZyIsImlkIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsInRvU3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYXNzdXJlQmFzZVVybCIsImFkZERhdGFTb3VyY2UiLCJnZXRTdG9yZSIsIm5ld0luc3RhbmNlIiwiYWNjZXNzIiwiaXNEZWZhdWx0IiwibGVuZ3RoIiwibmFtZUV4aXRzIiwiZmluZE5ld05hbWUiLCJwb3N0IiwicmVsb2FkIiwiZmV0Y2hVc2VyUGVybWlzc2lvbnMiLCJkYXRhc291cmNlIiwibG9hZERhdGFTb3VyY2VQbHVnaW5zIiwiZW5hYmxlZCIsImNhdGVnb3JpZXMiLCJ1cGRhdGVEYXRhU291cmNlIiwicHV0IiwiZGVsZXRlRGF0YVNvdXJjZSIsImRlbGV0ZSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwibmFtZUhhc1N1ZmZpeCIsImdldE5ld05hbWUiLCJpbmNyZW1lbnRMYXN0RGlnaXQiLCJnZXRMYXN0RGlnaXQiLCJlbmRzV2l0aCIsInNsaWNlIiwiZGlnaXQiLCJQbHVnaW5UeXBlIiwiZmVhdHVyZUVuYWJsZWQiLCJpdGVtIiwiY2F0ZWdvcnlJbmRleCIsInBsdWdpbkluZGV4IiwiZW50ZXJwcmlzZVBsdWdpbnMiLCJnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMiLCJjYXRlZ29yeSIsImVudGVycHJpc2VQbHVnaW4iLCJmaW5kIiwiZW50ZXJwcmlzZSIsInVubGljZW5zZWQiLCJpbmZvIiwibGlua3MiLCJsaW5rIiwiZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbiIsInNvcnRQbHVnaW5zIiwiYyIsInNvcnRpbmdSdWxlcyIsInByb21ldGhldXMiLCJncmFwaGl0ZSIsImxva2kiLCJteXNxbCIsImphZWdlciIsInBvc3RncmVzIiwiZ2Nsb3VkIiwic29ydCIsImEiLCJiIiwiYVNvcnQiLCJiU29ydCIsImdldFBoYW50b21QbHVnaW4iLCJkZXNjcmlwdGlvbiIsImltZ1VybCIsIm1vZHVsZSIsImJhc2VVcmwiLCJsb2dvcyIsInNtYWxsIiwibGFyZ2UiLCJhdXRob3IiLCJzY3JlZW5zaG90cyIsInVwZGF0ZWQiLCJ2ZXJzaW9uIiwib3B0aW9ucyIsInBsdWdpbkNhdGFsb2dVUkwiLCJQcm9CYWRnZSIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJsb2FkaW5nRFNUeXBlIiwicGx1Z2luTWV0YSIsImhpZ2hsaWdodHNFbmFibGVkIiwiaW1nIiwic3ViVGl0bGUiLCJ0ZXh0IiwiYnJlYWRjcnVtYnMiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImljb24iLCJjb25maWdQYWdlcyIsInBhZ2UiLCJpbmNsdWRlcyIsImhhc0Rhc2hib2FyZHMiLCJoYXNSb2xlIiwiaXNMb2FkaW5nTmF2IiwicGVybWlzc2lvbnNFeHBlcmltZW50SWQiLCJkc1Blcm1pc3Npb25zIiwidGFiU3VmZml4IiwiZXhwZXJpbWVudElkIiwiZXZlbnRWYXJpYW50IiwiaGFzUGVybWlzc2lvbiIsIkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkIiwiYW5hbHl0aWNzRXhwZXJpbWVudElkIiwiYW5hbHl0aWNzIiwiY2FjaGluZ0V4cGVyaW1lbnRJZCIsImNhY2hpbmciLCJoaWRlRnJvbVRhYnMiLCJnZXREYXRhU291cmNlTmF2IiwibWFpbiIsInBhZ2VOYW1lIiwibm9kZSIsImNoaWxkIiwiaW5kZXhPZiIsImdldERhdGFTb3VyY2VMb2FkaW5nTmF2IiwiYmFzaWNBdXRoIiwiYmFzaWNBdXRoVXNlciIsIndpdGhDcmVkZW50aWFscyIsImRhdGFiYXNlIiwianNvbkRhdGEiLCJhdXRoVHlwZSIsImRlZmF1bHRSZWdpb24iLCJvcmdJZCIsInJlYWRPbmx5IiwidHlwZU5hbWUiLCJ0eXBlTG9nb1VybCIsInVzZXIiLCJzZWN1cmVKc29uRmllbGRzIiwiaW5jbHVkZSIsInVuZGVmaW5lZCIsImdldERhdGFTb3VyY2VzIiwicmVnZXgiLCJSZWdFeHAiLCJzZWFyY2hRdWVyeSIsInRlc3QiLCJnZXREYXRhU291cmNlUGx1Z2lucyIsImRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IiwiZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwibGF5b3V0TW9kZSIsImdldERhdGFTb3VyY2VzQ291bnQiLCJkYXRhU291cmNlc0NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==