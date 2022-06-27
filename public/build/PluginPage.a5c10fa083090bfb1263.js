"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PluginPage"],{

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

/***/ }),

/***/ "./public/app/features/plugins/admin/components/AppConfigWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigCtrlWrapper": () => (/* binding */ AppConfigCtrlWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _br2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries








class AppConfigCtrlWrapper extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  //@ts-ignore
  // Needed for angular scope
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "model", void 0);

    _defineProperty(this, "preUpdateHook", () => Promise.resolve());

    _defineProperty(this, "postUpdateHook", () => Promise.resolve());

    _defineProperty(this, "update", () => {
      const pluginId = this.model.id;
      this.preUpdateHook().then(() => {
        const updateCmd = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.extend)({
          enabled: this.model.enabled,
          pinned: this.model.pinned,
          jsonData: this.model.jsonData,
          secureJsonData: this.model.secureJsonData
        }, {});
        return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().post(`/api/plugins/${pluginId}/settings`, updateCmd);
      }).then(this.postUpdateHook).then(res => {
        window.location.href = window.location.href;
      });
    });

    _defineProperty(this, "setPreUpdateHook", callback => {
      this.preUpdateHook = callback;
    });

    _defineProperty(this, "setPostUpdateHook", callback => {
      this.postUpdateHook = callback;
    });

    _defineProperty(this, "importDashboards", () => {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.deprecationWarning)('AppConfig', 'importDashboards()');
      return Promise.resolve();
    });

    _defineProperty(this, "enable", () => {
      this.model.enabled = true;
      this.model.pinned = true;
      this.update();
    });

    _defineProperty(this, "disable", () => {
      this.model.enabled = false;
      this.model.pinned = false;
      this.update();
    });

    this.state = {
      angularCtrl: null,
      refresh: 0
    };
  }

  componentDidMount() {
    // Force a reload after the first mount -- is there a better way to do this?
    setTimeout(() => {
      this.setState({
        refresh: this.state.refresh + 1
      });
    }, 5);
  }

  componentDidUpdate(prevProps) {
    if (!this.element || this.state.angularCtrl) {
      return;
    } // Set a copy of the meta


    this.model = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.props.app.meta);
    const loader = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getAngularLoader)();
    const template = '<plugin-component type="app-config-ctrl"></plugin-component>';
    const scopeProps = {
      ctrl: this,
      // used by angular injectorMonkeyPatch to detect this scenario
      isAppConfigCtrl: true
    };
    const angularCtrl = loader.load(this.element, scopeProps, template);
    this.setState({
      angularCtrl
    });
  }

  render() {
    const model = this.model;
    const withRightMargin = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginRight: '8px'
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        ref: element => this.element = element
      }), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), model && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [!model.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          onClick: this.enable,
          className: withRightMargin,
          children: "Enable"
        }), model.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          onClick: this.update,
          className: withRightMargin,
          children: "Update"
        }), model.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "destructive",
          onClick: this.disable,
          className: withRightMargin,
          children: "Disable"
        })]
      })]
    });
  } //-----------------------------------------------------------
  // Copied from plugin_edit_ctrl
  //-----------------------------------------------------------


}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* binding */ PluginDisabledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginDisabledBadge({
  error
}) {
  const tooltip = errorCodeToTooltip(error);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
    icon: "exclamation-triangle",
    text: "Disabled",
    color: "red",
    tooltip: tooltip
  });
}

function errorCodeToTooltip(error) {
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return 'Plugin disabled due to modified content';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
      return 'Plugin disabled due to invalid plugin signature';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
      return 'Plugin disabled due to missing plugin signature';

    default:
      return `Plugin disabled due to unkown error: ${error}`;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginEnterpriseBadge": () => (/* binding */ PluginEnterpriseBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge;







function PluginEnterpriseBadge({
  plugin
}) {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_3__.getBadgeColor);

  const onClick = ev => {
    ev.preventDefault();
    window.open(`https://grafana.com/grafana/plugins/${plugin.id}?utm_source=grafana_catalog_learn_more`, '_blank', 'noopener,noreferrer');
  };

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('enterprise.plugins')) {
    return _Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
      text: "Enterprise",
      color: "blue"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureBadge, {
      status: plugin.signature
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
      icon: "lock",
      "aria-label": "lock icon",
      text: "Enterprise",
      color: "blue",
      className: customBadgeStyles
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      size: "sm",
      fill: "text",
      icon: "external-link-alt",
      onClick: onClick,
      children: "Learn more"
    })]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginInstalledBadge": () => (/* binding */ PluginInstalledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginInstalledBadge() {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_2__.getBadgeColor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
    text: "Installed",
    color: "orange",
    className: customBadgeStyles
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* binding */ PluginUpdateAvailableBadge),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PluginUpdateAvailableBadge({
  plugin
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles); // Currently renderer plugins are not supported by the catalog due to complications related to installation / update / uninstall.

  if (plugin.hasUpdate && !plugin.isCore && plugin.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginType.renderer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: styles.hasUpdate,
      children: "Update available!"
    });
  }

  return null;
}
const getStyles = theme => {
  return {
    hasUpdate: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* reexport safe */ _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__.PluginDisabledBadge),
/* harmony export */   "PluginEnterpriseBadge": () => (/* reexport safe */ _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__.PluginEnterpriseBadge),
/* harmony export */   "PluginInstalledBadge": () => (/* reexport safe */ _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__.PluginInstalledBadge),
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* reexport safe */ _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__.PluginUpdateAvailableBadge)
/* harmony export */ });
/* harmony import */ var _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx");
/* harmony import */ var _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx");
/* harmony import */ var _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx");
/* harmony import */ var _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx");





/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/sharedStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBadgeColor": () => (/* binding */ getBadgeColor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getBadgeColor = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  background: ${theme.colors.background.primary};
  border-color: ${theme.colors.border.strong};
  color: ${theme.colors.text.secondary};
`;

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithApp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithApp": () => (/* binding */ GetStartedWithApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/api.ts");
/* harmony import */ var _hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginConfig.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function GetStartedWithApp({
  plugin
}) {
  const {
    value: pluginConfig
  } = (0,_hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_3__.usePluginConfig)(plugin);

  if (!pluginConfig) {
    return null;
  }

  const {
    enabled,
    jsonData
  } = pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.meta;

  const enable = () => updatePluginSettingsAndReload(plugin.id, {
    enabled: true,
    pinned: true,
    jsonData
  });

  const disable = () => {
    updatePluginSettingsAndReload(plugin.id, {
      enabled: false,
      pinned: false,
      jsonData
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [!enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      onClick: enable,
      children: "Enable"
    }), enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "destructive",
      onClick: disable,
      children: "Disable"
    })]
  });
}

const updatePluginSettingsAndReload = async (id, data) => {
  try {
    await (0,_api__WEBPACK_IMPORTED_MODULE_2__.updatePluginSettings)(id, data); // Reloading the page as the plugin meta changes made here wouldn't be propagated throughout the app.

    window.location.reload();
  } catch (e) {
    console.error('Error while updating the plugin', e);
  }
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithDataSource.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithDataSource": () => (/* binding */ GetStartedWithDataSource)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_datasources_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function GetStartedWithDataSource({
  plugin
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const onAddDataSource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const meta = {
      name: plugin.name,
      id: plugin.id
    };
    dispatch((0,app_features_datasources_state_actions__WEBPACK_IMPORTED_MODULE_3__.addDataSource)(meta));
  }, [dispatch, plugin]);

  if (!(0,_permissions__WEBPACK_IMPORTED_MODULE_4__.isDataSourceEditor)()) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: onAddDataSource,
    children: ["Create a ", plugin.name, " data source"]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithPlugin.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithPlugin": () => (/* binding */ GetStartedWithPlugin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _GetStartedWithApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithApp.tsx");
/* harmony import */ var _GetStartedWithDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithDataSource.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function GetStartedWithPlugin({
  plugin
}) {
  if (!plugin.isInstalled || plugin.isDisabled) {
    return null;
  }

  switch (plugin.type) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginType.datasource:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GetStartedWithDataSource__WEBPACK_IMPORTED_MODULE_3__.GetStartedWithDataSource, {
        plugin: plugin
      });

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginType.app:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GetStartedWithApp__WEBPACK_IMPORTED_MODULE_2__.GetStartedWithApp, {
        plugin: plugin
      });

    default:
      return null;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithPlugin": () => (/* reexport safe */ _GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_0__.GetStartedWithPlugin)
/* harmony export */ });
/* harmony import */ var _GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithPlugin.tsx");


/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/ExternallyManagedButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternallyManagedButton": () => (/* binding */ ExternallyManagedButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function ExternallyManagedButton({
  pluginId,
  pluginStatus
}) {
  const externalManageLink = `${(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getExternalManageLink)(pluginId)}/?tab=installation`;

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_3__.PluginStatus.UPDATE) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      height: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        href: externalManageLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Update via grafana.com"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        variant: "destructive",
        href: externalManageLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Uninstall via grafana.com"
      })]
    });
  }

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_3__.PluginStatus.UNINSTALL) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
      variant: "destructive",
      href: externalManageLink,
      target: "_blank",
      rel: "noopener noreferrer",
      children: "Uninstall via grafana.com"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
    href: externalManageLink,
    target: "_blank",
    rel: "noopener noreferrer",
    children: "Install via grafana.com"
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/InstallControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallControls": () => (/* binding */ InstallControls),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _ExternallyManagedButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/ExternallyManagedButton.tsx");
/* harmony import */ var _InstallControlsButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/InstallControlsButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _a, _Icon2;














const InstallControls = ({
  plugin,
  latestCompatibleVersion
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const isExternallyManaged = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.pluginAdminExternalManageEnabled;
  const hasPermission = (0,_permissions__WEBPACK_IMPORTED_MODULE_6__.isGrafanaAdmin)();
  const isRemotePluginsAvailable = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_7__.useIsRemotePluginsAvailable)();
  const isCompatible = Boolean(latestCompatibleVersion);
  const isInstallControlsDisabled = plugin.isCore || plugin.isDisabled || !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isInstallControlsEnabled)();
  const pluginStatus = plugin.isInstalled ? plugin.hasUpdate ? _types__WEBPACK_IMPORTED_MODULE_8__.PluginStatus.UPDATE : _types__WEBPACK_IMPORTED_MODULE_8__.PluginStatus.UNINSTALL : _types__WEBPACK_IMPORTED_MODULE_8__.PluginStatus.INSTALL;

  if (isInstallControlsDisabled) {
    return null;
  }

  if (plugin.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginType.renderer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: "Renderer plugins cannot be managed by the Plugin Catalog."
    });
  }

  if (plugin.isEnterprise && !(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.featureEnabled)('enterprise.plugins')) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
      height: "auto",
      align: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
        className: styles.message,
        children: "No valid Grafana Enterprise license detected."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
        href: `${(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.getExternalManageLink)(plugin.id)}?utm_source=grafana_catalog_learn_more`,
        target: "_blank",
        rel: "noopener noreferrer",
        size: "sm",
        fill: "text",
        icon: "external-link-alt",
        children: "Learn more"
      })]
    });
  }

  if (plugin.isDev) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: "This is a development build of the plugin and can't be uninstalled."
    });
  }

  if (!hasPermission && !isExternallyManaged) {
    const message = `You do not have permission to ${pluginStatus} this plugin.`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: message
    });
  }

  if (!plugin.isPublished) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.message,
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        name: "exclamation-triangle"
      })), " This plugin is not published to", ' ', _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: "https://www.grafana.com/plugins",
        target: "__blank",
        rel: "noreferrer",
        children: "grafana.com/plugins"
      })), ' ', "and can't be managed via the catalog."]
    });
  }

  if (!isCompatible) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.message,
      children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        name: "exclamation-triangle"
      })), "\xA0This plugin doesn't support your version of Grafana."]
    });
  }

  if (isExternallyManaged) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ExternallyManagedButton__WEBPACK_IMPORTED_MODULE_9__.ExternallyManagedButton, {
      pluginId: plugin.id,
      pluginStatus: pluginStatus
    });
  }

  if (!isRemotePluginsAvailable) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: "The install controls have been disabled because the Grafana server cannot access grafana.com."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_InstallControlsButton__WEBPACK_IMPORTED_MODULE_10__.InstallControlsButton, {
    plugin: plugin,
    pluginStatus: pluginStatus,
    latestCompatibleVersion: latestCompatibleVersion
  });
};
const getStyles = theme => {
  return {
    message: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/InstallControlsButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallControlsButton": () => (/* binding */ InstallControlsButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function InstallControlsButton({
  plugin,
  pluginStatus,
  latestCompatibleVersion
}) {
  const {
    isInstalling,
    error: errorInstalling
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useInstallStatus)();
  const {
    isUninstalling,
    error: errorUninstalling
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useUninstallStatus)();
  const install = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useInstall)();
  const uninstall = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useUninstall)();
  const [isConfirmModalVisible, setIsConfirmModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const showConfirmModal = () => setIsConfirmModalVisible(true);

  const hideConfirmModal = () => setIsConfirmModalVisible(false);

  const uninstallBtnText = isUninstalling ? 'Uninstalling' : 'Uninstall';

  const onInstall = async () => {
    await install(plugin.id, latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version);

    if (!errorInstalling) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, [`Installed ${plugin.name}`]);
    }
  };

  const onUninstall = async () => {
    hideConfirmModal();
    await uninstall(plugin.id);

    if (!errorUninstalling) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, [`Uninstalled ${plugin.name}`]);
    }
  };

  const onUpdate = async () => {
    await install(plugin.id, latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version, true);

    if (!errorInstalling) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, [`Updated ${plugin.name}`]);
    }
  };

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_5__.PluginStatus.UNINSTALL) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
        isOpen: isConfirmModalVisible,
        title: `Uninstall ${plugin.name}`,
        body: "Are you sure you want to uninstall this plugin?",
        confirmText: "Confirm",
        icon: "exclamation-triangle",
        onConfirm: onUninstall,
        onDismiss: hideConfirmModal
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        height: "auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "destructive",
          disabled: isUninstalling,
          onClick: showConfirmModal,
          children: uninstallBtnText
        })
      })]
    });
  }

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_5__.PluginStatus.UPDATE) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      height: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        disabled: isInstalling,
        onClick: onUpdate,
        children: isInstalling ? 'Updating' : 'Update'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "destructive",
        disabled: isUninstalling,
        onClick: onUninstall,
        children: uninstallBtnText
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    disabled: isInstalling,
    onClick: onInstall,
    children: isInstalling ? 'Installing' : 'Install'
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallControls": () => (/* reexport safe */ _InstallControls__WEBPACK_IMPORTED_MODULE_0__.InstallControls),
/* harmony export */   "getStyles": () => (/* reexport safe */ _InstallControls__WEBPACK_IMPORTED_MODULE_0__.getStyles)
/* harmony export */ });
/* harmony import */ var _InstallControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/InstallControls.tsx");


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Loader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const Loader = ({
  text = 'Loading...'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "page-loader-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
      text: text
    })
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDashboards.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDashboards": () => (/* binding */ PluginDashboards)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_datasources_DashboardsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/datasources/DashboardsTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PluginDashboards extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "importAll", () => {
      this.importNext(0);
    });

    _defineProperty(this, "importNext", index => {
      const {
        dashboards
      } = this.state;
      return this.import(dashboards[index], true).then(() => {
        if (index + 1 < dashboards.length) {
          return new Promise(resolve => {
            setTimeout(() => {
              this.importNext(index + 1).then(() => {
                resolve();
              });
            }, 500);
          });
        } else {
          return Promise.resolve();
        }
      });
    });

    _defineProperty(this, "import", (dash, overwrite) => {
      const {
        plugin,
        datasource
      } = this.props;
      const installCmd = {
        pluginId: plugin.id,
        path: dash.path,
        overwrite: overwrite,
        inputs: []
      };

      if (datasource) {
        installCmd.inputs.push({
          name: '*',
          type: 'datasource',
          pluginId: datasource.meta.id,
          value: datasource.name
        });
      }

      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post(`/api/dashboards/import`, installCmd).then(res => {
        app_core_core__WEBPACK_IMPORTED_MODULE_4__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertSuccess, ['Dashboard Imported', dash.title]);
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(dash, res);
        this.setState({
          dashboards: [...this.state.dashboards]
        });
      });
    });

    _defineProperty(this, "remove", dash => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().delete('/api/dashboards/uid/' + dash.uid).then(() => {
        dash.imported = false;
        this.setState({
          dashboards: [...this.state.dashboards]
        });
      });
    });

    this.state = {
      loading: true,
      dashboards: []
    };
  }

  async componentDidMount() {
    const pluginId = this.props.plugin.id;
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get(`/api/plugins/${pluginId}/dashboards`).then(dashboards => {
      this.setState({
        dashboards,
        loading: false
      });
    });
  }

  render() {
    const {
      loading,
      dashboards
    } = this.state;

    if (loading) {
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "loading..."
      }));
    }

    if (!dashboards || !dashboards.length) {
      return _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "No dashboards are included with this plugin"
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_features_datasources_DashboardsTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
        dashboards: dashboards,
        onImport: this.import,
        onRemove: this.remove
      })
    });
  }

}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsBody.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsBody": () => (/* binding */ PluginDetailsBody),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_VersionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/VersionList.tsx");
/* harmony import */ var _hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginConfig.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _AppConfigWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/AppConfigWrapper.tsx");
/* harmony import */ var _PluginDashboards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDashboards.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;










function PluginDetailsBody({
  plugin,
  queryParams,
  pageId
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    value: pluginConfig
  } = (0,_hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_4__.usePluginConfig)(plugin);

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_5__.PluginTabIds.OVERVIEW) {
    var _plugin$details$readm, _plugin$details;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.readme, styles.container),
      dangerouslySetInnerHTML: {
        __html: (_plugin$details$readm = (_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.readme) !== null && _plugin$details$readm !== void 0 ? _plugin$details$readm : 'No plugin help or readme markdown file was found'
      }
    });
  }

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_5__.PluginTabIds.VERSIONS) {
    var _plugin$details2;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_VersionList__WEBPACK_IMPORTED_MODULE_3__.VersionList, {
        versions: (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.versions,
        installedVersion: plugin.installedVersion
      })
    });
  }

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_5__.PluginTabIds.CONFIG && pluginConfig !== null && pluginConfig !== void 0 && pluginConfig.angularConfigCtrl) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AppConfigWrapper__WEBPACK_IMPORTED_MODULE_6__.AppConfigCtrlWrapper, {
        app: pluginConfig
      })
    });
  }

  if (pluginConfig !== null && pluginConfig !== void 0 && pluginConfig.configPages) {
    for (const configPage of pluginConfig.configPages) {
      if (pageId === configPage.id) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: styles.container,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(configPage.body, {
            plugin: pluginConfig,
            query: queryParams
          })
        });
      }
    }
  }

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_5__.PluginTabIds.DASHBOARDS && pluginConfig) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PluginDashboards__WEBPACK_IMPORTED_MODULE_7__.PluginDashboards, {
        plugin: pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.meta
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: styles.container,
    children: _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      children: "Page not found."
    }))
  });
}
const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(3, 4)};
  `,
  readme: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & img {
      max-width: 100%;
    }

    h1,
    h2,
    h3 {
      margin-top: ${theme.spacing(3)};
      margin-bottom: ${theme.spacing(2)};
    }

    *:first-child {
      margin-top: 0;
    }

    li {
      margin-left: ${theme.spacing(2)};
      & > p {
        margin: ${theme.spacing()} 0;
      }
    }

    a {
      color: ${theme.colors.text.link};

      &:hover {
        color: ${theme.colors.text.link};
        text-decoration: underline;
      }
    }
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsDisabledError.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsDisabledError": () => (/* binding */ PluginDetailsDisabledError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _a, _p2, _p3, _p4, _p5;







function PluginDetailsDisabledError({
  className,
  plugin
}) {
  if (!plugin.isDisabled) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
    severity: "error",
    title: "Plugin disabled",
    className: className,
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PluginPage.disabledInfo,
    children: [renderDescriptionFromError(plugin.error), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: "Please contact your server administrator to get this resolved."
    })), _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/administration/cli/#plugins-commands",
      className: "external-link",
      target: "_blank",
      rel: "noreferrer",
      children: "Read more about managing plugins"
    }))]
  });
}

function renderDescriptionFromError(error) {
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
      return _p3 || (_p3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
      return _p4 || (_p4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    default:
      return _p5 || (_p5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "We failed to run this plugin due to an unkown reason and have therefor disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin."
      }));
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsHeader": () => (/* binding */ PluginDetailsHeader),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _Badges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/index.ts");
/* harmony import */ var _GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/index.ts");
/* harmony import */ var _InstallControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/index.tsx");
/* harmony import */ var _PluginDetailsHeaderDependencies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsHeaderDependencies.tsx");
/* harmony import */ var _PluginDetailsHeaderSignature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsHeaderSignature.tsx");
/* harmony import */ var _PluginLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginLogo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;













function PluginDetailsHeader({
  plugin,
  currentUrl,
  parentUrl
}) {
  var _plugin$details, _plugin$details2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const latestCompatibleVersion = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getLatestCompatibleVersion)((_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.versions);
  const version = plugin.installedVersion || (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "page-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.headerContainer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PluginLogo__WEBPACK_IMPORTED_MODULE_9__.PluginLogo, {
          alt: `${plugin.name} logo`,
          src: plugin.info.logos.small,
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              object-fit: contain;
              width: 100%;
              height: 68px;
              max-width: 68px;
            `
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.headerWrapper,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("nav", {
            className: styles.breadcrumb,
            "aria-label": "Breadcrumb",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("ol", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                  className: styles.textUnderline,
                  href: parentUrl,
                  children: "Plugins"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                  href: currentUrl,
                  "aria-current": "page",
                  children: plugin.name
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: styles.headerInformationRow,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
              children: plugin.orgName
            }), (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
              href: link.url,
              children: link.name
            }, link.name)), plugin.downloads > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
              children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: "cloud-download"
              })), ` ${new Intl.NumberFormat().format(plugin.downloads)}`, ' ']
            }), Boolean(version) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
              children: version
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PluginDetailsHeaderSignature__WEBPACK_IMPORTED_MODULE_8__.PluginDetailsHeaderSignature, {
              plugin: plugin
            }), plugin.isDisabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_4__.PluginDisabledBadge, {
              error: plugin.error
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PluginDetailsHeaderDependencies__WEBPACK_IMPORTED_MODULE_7__.PluginDetailsHeaderDependencies, {
            plugin: plugin,
            latestCompatibleVersion: latestCompatibleVersion,
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.headerInformationRow, styles.headerInformationRowSecondary)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            children: plugin.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            height: "auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_InstallControls__WEBPACK_IMPORTED_MODULE_6__.InstallControls, {
              plugin: plugin,
              latestCompatibleVersion: latestCompatibleVersion
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_5__.GetStartedWithPlugin, {
              plugin: plugin
            })]
          })]
        })]
      })
    })
  });
}
const getStyles = theme => {
  return {
    headerContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin-bottom: ${theme.spacing(3)};
      margin-top: ${theme.spacing(3)};
      min-height: 120px;
    `,
    headerWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(3)};
    `,
    breadcrumb: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.h2.fontSize};
      li {
        display: inline;
        list-style: none;
        &::after {
          content: '/';
          padding: 0 0.25ch;
        }
        &:last-child::after {
          content: '';
        }
      }
    `,
    headerInformationRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      margin-top: ${theme.spacing()};
      margin-bottom: ${theme.spacing()};
      flex-flow: wrap;
      & > * {
        &::after {
          content: '|';
          padding: 0 ${theme.spacing()};
        }
        &:last-child::after {
          content: '';
          padding-right: 0;
        }
      }
      font-size: ${theme.typography.h4.fontSize};

      a {
        &:hover {
          text-decoration: underline;
        }
      }
    `,
    headerInformationRowSecondary: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.body.fontSize};
    `,
    headerOrgName: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.h4.fontSize};
    `,
    signature: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(3)};
      margin-bottom: 0;
    `,
    textUnderline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-decoration: underline;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsHeaderDependencies.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsHeaderDependencies": () => (/* binding */ PluginDetailsHeaderDependencies),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function PluginDetailsHeaderDependencies({
  plugin,
  latestCompatibleVersion,
  className
}) {
  var _plugin$details, _plugin$details2, _plugin$details3;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const pluginDependencies = (_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.pluginDependencies;
  const grafanaDependency = plugin.isInstalled ? (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.grafanaDependency : (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.grafanaDependency) || ((_plugin$details3 = plugin.details) === null || _plugin$details3 === void 0 ? void 0 : _plugin$details3.grafanaDependency);
  const hasNoDependencyInfo = !grafanaDependency && (!pluginDependencies || !pluginDependencies.length);

  if (hasNoDependencyInfo) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.dependencyTitle,
      children: "Dependencies:"
    }), Boolean(grafanaDependency) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "grafana",
        className: styles.icon
      }), "Grafana ", grafanaDependency]
    }), pluginDependencies && pluginDependencies.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: pluginDependencies.map(p => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: _types__WEBPACK_IMPORTED_MODULE_3__.PluginIconName[p.type],
            className: styles.icon
          }), p.name, " ", p.version]
        }, p.name);
      })
    })]
  });
}
const getStyles = theme => {
  return {
    dependencyTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: ${theme.typography.fontWeightBold};
      margin-right: ${theme.spacing(0.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      margin-right: ${theme.spacing(0.5)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsHeaderSignature.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsHeaderSignature": () => (/* binding */ PluginDetailsHeaderSignature),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PluginSignatureDetailsBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginSignatureDetailsBadge.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







// Designed to show plugin signature information in the header on the plugin's details page
function PluginDetailsHeaderSignature({
  plugin
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const isSignatureValid = plugin.signature === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.valid;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
      target: "_blank",
      rel: "noreferrer",
      className: styles.link,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureBadge, {
        status: plugin.signature
      })
    }), isSignatureValid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PluginSignatureDetailsBadge__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureDetailsBadge, {
      signatureType: plugin.signatureType,
      signatureOrg: plugin.signatureOrg
    })]
  });
}
const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: inline-flex;
      align-items: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsSignature.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsSignature": () => (/* binding */ PluginDetailsSignature)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _a;







// Designed to show signature information inside the active tab on the plugin's details page
function PluginDetailsSignature({
  className,
  plugin
}) {
  const isSignatureValid = plugin.signature === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginSignatureStatus.valid;
  const isCore = plugin.signature === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginSignatureStatus.internal;
  const isDisabled = plugin.isDisabled && isDisabledDueTooSignatureError(plugin.error); // The basic information is already available in the header

  if (isSignatureValid || isCore || isDisabled) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
    severity: "warning",
    title: "Invalid plugin signature",
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PluginPage.signatureInfo,
    className: className,
    children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can\u2019t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."
    })), _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
      className: "external-link",
      target: "_blank",
      rel: "noreferrer",
      children: "Read more about plugins signing."
    }))]
  });
}

function isDisabledDueTooSignatureError(error) {
  // If the plugin is disabled due to signature error we rely on the disabled
  // error message instad of the warning about the signature.
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return true;

    default:
      return false;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginLogo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginLogo": () => (/* binding */ PluginLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


function PluginLogo({
  alt,
  className,
  src,
  height
}) {
  // @ts-ignore - react doesn't know about loading attr.
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    src: src,
    className: className,
    alt: alt,
    loading: "lazy",
    height: height
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginSignatureDetailsBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsBadge": () => (/* binding */ DetailsBadge),
/* harmony export */   "PluginSignatureDetailsBadge": () => (/* binding */ PluginSignatureDetailsBadge)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const SIGNATURE_ICONS = {
  [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.grafana]: 'grafana',
  [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.commercial]: 'shield',
  [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.community]: 'shield',
  DEFAULT: 'shield-exclamation'
};
// Shows more information about a valid signature
function PluginSignatureDetailsBadge({
  signatureType,
  signatureOrg = ''
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);

  if (!signatureType && !signatureOrg) {
    return null;
  }

  const signatureTypeText = signatureType === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.grafana ? 'Grafana Labs' : (0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(signatureType);
  const signatureIcon = SIGNATURE_ICONS[signatureType || ''] || SIGNATURE_ICONS.DEFAULT;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DetailsBadge, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
        className: styles.strong,
        children: "Level:\xA0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        size: "xs",
        name: signatureIcon
      }), "\xA0", signatureTypeText]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DetailsBadge, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
        className: styles.strong,
        children: "Signed by:"
      }), " ", signatureOrg]
    })]
  });
}
const DetailsBadge = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge, {
    color: "green",
    className: styles.badge,
    text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: children
    })
  });
};

const getStyles = theme => ({
  badge: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.canvas};
    border-color: ${theme.colors.border.strong};
    color: ${theme.colors.text.secondary};
    margin-left: ${theme.spacing()};
  `,
  strong: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.primary};
  `,
  icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(0.5)};
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/components/VersionList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionList": () => (/* binding */ VersionList)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _thead;








const VersionList = ({
  versions = [],
  installedVersion
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const latestCompatibleVersion = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getLatestCompatibleVersion)(versions);

  if (versions.length === 0) {
    return _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "No version history was found."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
    className: styles.table,
    children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
          children: "Version"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
          children: "Last updated"
        })]
      })
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
      children: versions.map(version => {
        const isInstalledVersion = installedVersion === version.version;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
          children: [isInstalledVersion ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
            className: styles.currentVersion,
            children: [version.version, " (installed version)"]
          }) : version.version === (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
            children: [version.version, " (latest compatible version)"]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
            children: version.version
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
            className: isInstalledVersion ? styles.currentVersion : '',
            children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormatTimeAgo)(version.createdAt)
          })]
        }, version.version);
      })
    })]
  });
};

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2, 4, 3)};
  `,
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    table-layout: fixed;
    width: 100%;
    td,
    th {
      padding: ${theme.spacing()} 0;
    }
    th {
      font-size: ${theme.typography.h5.fontSize};
    }
  `,
  currentVersion: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-weight: ${theme.typography.fontWeightBold};
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/hooks/usePluginConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePluginConfig": () => (/* binding */ usePluginConfig)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/utils.ts");


const usePluginConfig = plugin => {
  return (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
    if (!plugin) {
      return null;
    }

    if (plugin.isInstalled && !plugin.isDisabled) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loadPlugin)(plugin.id);
    }

    return null;
  }, [plugin === null || plugin === void 0 ? void 0 : plugin.id, plugin === null || plugin === void 0 ? void 0 : plugin.isInstalled, plugin === null || plugin === void 0 ? void 0 : plugin.isDisabled]);
};

/***/ }),

/***/ "./public/app/features/plugins/admin/hooks/usePluginDetailsTabs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePluginDetailsTabs": () => (/* binding */ usePluginDetailsTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginConfig.tsx");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");






const usePluginDetailsTabs = (plugin, defaultTabs = []) => {
  const {
    loading,
    error,
    value: pluginConfig
  } = (0,_hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_2__.usePluginConfig)(plugin);
  const isPublished = Boolean(plugin === null || plugin === void 0 ? void 0 : plugin.isPublished);
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  const [tabs, defaultTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const canConfigurePlugins = (0,_permissions__WEBPACK_IMPORTED_MODULE_3__.isOrgAdmin)();
    const tabs = [...defaultTabs];
    let defaultTab;

    if (isPublished) {
      tabs.push({
        label: _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabLabels.VERSIONS,
        icon: 'history',
        id: _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.VERSIONS,
        href: `${pathname}?page=${_types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.VERSIONS}`
      });
    } // Not extending the tabs with the config pages if the plugin is not installed


    if (!pluginConfig) {
      defaultTab = _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.OVERVIEW;
      return [tabs, defaultTab];
    }

    if (canConfigurePlugins) {
      if (pluginConfig.meta.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginType.app) {
        var _pluginConfig$meta$in;

        if (pluginConfig.angularConfigCtrl) {
          tabs.push({
            label: 'Config',
            icon: 'cog',
            id: _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.CONFIG,
            href: `${pathname}?page=${_types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.CONFIG}`
          });
          defaultTab = _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.CONFIG;
        }

        if (pluginConfig.configPages) {
          for (const page of pluginConfig.configPages) {
            tabs.push({
              label: page.title,
              icon: page.icon,
              id: page.id,
              href: `${pathname}?page=${page.id}`
            });

            if (!defaultTab) {
              defaultTab = page.id;
            }
          }
        }

        if ((_pluginConfig$meta$in = pluginConfig.meta.includes) !== null && _pluginConfig$meta$in !== void 0 && _pluginConfig$meta$in.find(include => include.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginIncludeType.dashboard)) {
          tabs.push({
            label: 'Dashboards',
            icon: 'apps',
            id: _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.DASHBOARDS,
            href: `${pathname}?page=${_types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.DASHBOARDS}`
          });
        }
      }
    }

    if (!defaultTab) {
      defaultTab = _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.OVERVIEW;
    }

    return [tabs, defaultTab];
  }, [pluginConfig, defaultTabs, pathname, isPublished]);
  return {
    error,
    loading,
    tabs,
    defaultTab
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/pages/PluginDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginDetails),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
/* harmony import */ var _components_PluginDetailsBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsBody.tsx");
/* harmony import */ var _components_PluginDetailsDisabledError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsDisabledError.tsx");
/* harmony import */ var _components_PluginDetailsHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsHeader.tsx");
/* harmony import */ var _components_PluginDetailsSignature__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsSignature.tsx");
/* harmony import */ var _hooks_usePluginDetailsTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginDetailsTabs.tsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page, _br;



















function PluginDetails({
  match,
  queryParams
}) {
  const {
    params: {
      pluginId = ''
    },
    url
  } = match;
  const parentUrl = url.substring(0, url.lastIndexOf('/'));
  const defaultTabs = [{
    label: _types__WEBPACK_IMPORTED_MODULE_14__.PluginTabLabels.OVERVIEW,
    icon: 'file-alt',
    id: _types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.OVERVIEW,
    href: `${url}?page=${_types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.OVERVIEW}`
  }];
  const plugin = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_13__.useGetSingle)(pluginId); // fetches the localplugin settings

  const {
    tabs,
    defaultTab
  } = (0,_hooks_usePluginDetailsTabs__WEBPACK_IMPORTED_MODULE_12__.usePluginDetailsTabs)(plugin, defaultTabs);
  const {
    isLoading: isFetchLoading
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_13__.useFetchStatus)();
  const {
    isLoading: isFetchDetailsLoading
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_13__.useFetchDetailsStatus)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const prevTabs = (0,react_use__WEBPACK_IMPORTED_MODULE_16__["default"])(tabs);
  const pageId = queryParams.page || defaultTab; // If an app plugin is uninstalled we need to reset the active tab when the config / dashboards tabs are removed.

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const hasUninstalledWithConfigPages = prevTabs && prevTabs.length > tabs.length;
    const isViewingAConfigPage = pageId !== _types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.OVERVIEW && pageId !== _types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.VERSIONS;

    if (hasUninstalledWithConfigPages && isViewingAConfigPage) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.replace(`${url}?page=${_types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.OVERVIEW}`);
    }
  }, [pageId, url, tabs, prevTabs]);

  if (isFetchLoading || isFetchDetailsLoading) {
    return _Page || (_Page = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Loader__WEBPACK_IMPORTED_MODULE_7__.Loader, {})
    }));
  }

  if (!plugin) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui_src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {
      justify: "center",
      align: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        severity: app_types__WEBPACK_IMPORTED_MODULE_6__.AppNotificationSeverity.Warning,
        title: "Plugin not found",
        children: ["That plugin cannot be found. Please check the url is correct or ", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("br", {})), "go to the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("a", {
          href: parentUrl,
          children: "plugin catalog"
        }), "."]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PluginDetailsHeader__WEBPACK_IMPORTED_MODULE_10__.PluginDetailsHeader, {
      currentUrl: `${url}?page=${pageId}`,
      parentUrl: parentUrl,
      plugin: plugin
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: "page-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TabsBar, {
          hideBorder: true,
          children: tabs.map(tab => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tab, {
              label: tab.label,
              href: tab.href,
              icon: tab.icon,
              active: tab.id === pageId
            }, tab.label);
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page.Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TabContent, {
        className: styles.tabContent,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PluginDetailsSignature__WEBPACK_IMPORTED_MODULE_11__.PluginDetailsSignature, {
          plugin: plugin,
          className: styles.alert
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PluginDetailsDisabledError__WEBPACK_IMPORTED_MODULE_9__.PluginDetailsDisabledError, {
          plugin: plugin,
          className: styles.alert
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PluginDetailsBody__WEBPACK_IMPORTED_MODULE_8__.PluginDetailsBody, {
          queryParams: queryParams,
          plugin: plugin,
          pageId: pageId
        })]
      })
    })]
  });
}
const getStyles = theme => {
  return {
    alert: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(3)};
      margin-bottom: 0;
    `,
    // Needed due to block formatting context
    tabContent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow: auto;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisplayMode": () => (/* binding */ useDisplayMode),
/* harmony export */   "useFetchAll": () => (/* binding */ useFetchAll),
/* harmony export */   "useFetchDetails": () => (/* binding */ useFetchDetails),
/* harmony export */   "useFetchDetailsStatus": () => (/* binding */ useFetchDetailsStatus),
/* harmony export */   "useFetchStatus": () => (/* binding */ useFetchStatus),
/* harmony export */   "useGetAll": () => (/* binding */ useGetAll),
/* harmony export */   "useGetAllWithFilters": () => (/* binding */ useGetAllWithFilters),
/* harmony export */   "useGetErrors": () => (/* binding */ useGetErrors),
/* harmony export */   "useGetSingle": () => (/* binding */ useGetSingle),
/* harmony export */   "useInstall": () => (/* binding */ useInstall),
/* harmony export */   "useInstallStatus": () => (/* binding */ useInstallStatus),
/* harmony export */   "useIsRemotePluginsAvailable": () => (/* binding */ useIsRemotePluginsAvailable),
/* harmony export */   "useUninstall": () => (/* binding */ useUninstall),
/* harmony export */   "useUninstallStatus": () => (/* binding */ useUninstallStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/state/selectors.ts");






const useGetAllWithFilters = ({
  query = '',
  filterBy = 'installed',
  filterByType = 'all',
  sortBy = _helpers__WEBPACK_IMPORTED_MODULE_2__.Sorters.nameAsc
}) => {
  useFetchAll();
  const filtered = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.find)(query, filterBy, filterByType));
  const {
    isLoading,
    error
  } = useFetchStatus();
  const sortedAndFiltered = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sortPlugins)(filtered, sortBy);
  return {
    isLoading,
    error,
    plugins: sortedAndFiltered
  };
};
const useGetAll = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_5__.selectAll);
};
const useGetSingle = id => {
  useFetchAll();
  useFetchDetails(id);
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectById)(state, id));
};
const useGetErrors = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPluginErrors);
};
const useInstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (id, version, isUpdating) => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.install)({
    id,
    version,
    isUpdating
  }));
};
const useUninstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return id => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall)(id));
};
const useIsRemotePluginsAvailable = () => {
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchRemotePlugins.typePrefix));
  return error === null;
};
const useFetchStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  return {
    isLoading,
    error
  };
};
const useFetchDetailsStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  return {
    isLoading,
    error
  };
};
const useInstallStatus = () => {
  const isInstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  return {
    isInstalling,
    error
  };
};
const useUninstallStatus = () => {
  const isUninstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  return {
    isUninstalling,
    error
  };
}; // Only fetches in case they were not fetched yet

const useFetchAll = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isNotFetched = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestNotFetched)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isNotFetched && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll)());
  }, []); // eslint-disable-line
};
const useFetchDetails = id => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const plugin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectById)(state, id));
  const isNotFetching = !(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const shouldFetch = isNotFetching && plugin && !plugin.details;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    shouldFetch && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails)(id));
  }, [plugin]); // eslint-disable-line
};
const useDisplayMode = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const displayMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_5__.selectDisplayMode);
  return {
    displayMode,
    setDisplayMode: v => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setDisplayMode)(v))
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectById": () => (/* binding */ selectById),
/* harmony export */   "selectDisplayMode": () => (/* binding */ selectDisplayMode),
/* harmony export */   "selectIsRequestNotFetched": () => (/* binding */ selectIsRequestNotFetched),
/* harmony export */   "selectIsRequestPending": () => (/* binding */ selectIsRequestPending),
/* harmony export */   "selectItems": () => (/* binding */ selectItems),
/* harmony export */   "selectPluginErrors": () => (/* binding */ selectPluginErrors),
/* harmony export */   "selectRequest": () => (/* binding */ selectRequest),
/* harmony export */   "selectRequestError": () => (/* binding */ selectRequestError),
/* harmony export */   "selectRoot": () => (/* binding */ selectRoot)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");



const selectRoot = state => state.plugins;
const selectItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  items
}) => items);
const selectDisplayMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  settings
}) => settings.displayMode);
const {
  selectAll,
  selectById
} = _reducer__WEBPACK_IMPORTED_MODULE_1__.pluginsAdapter.getSelectors(selectItems);

const selectInstalled = filterBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins.filter(plugin => filterBy === 'installed' ? plugin.isInstalled : !plugin.isCore));

const findByInstallAndType = (filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectInstalled(filterBy), plugins => plugins.filter(plugin => filterByType === 'all' || plugin.type === filterByType));

const findByKeyword = searchBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => {
  if (searchBy === '') {
    return [];
  }

  return plugins.filter(plugin => {
    const fields = [];

    if (plugin.name) {
      fields.push(plugin.name.toLowerCase());
    }

    if (plugin.orgName) {
      fields.push(plugin.orgName.toLowerCase());
    }

    return fields.some(f => f.includes(searchBy.toLowerCase()));
  });
});

const find = (searchBy, filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(findByInstallAndType(filterBy, filterByType), findByKeyword(searchBy), (filteredPlugins, searchedPlugins) => {
  return searchBy === '' ? filteredPlugins : searchedPlugins;
});
const selectPluginErrors = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins ? plugins.filter(p => Boolean(p.error)).map(p => ({
  pluginId: p.id,
  errorCode: p.error
})) : []); // The following selectors are used to get information about the outstanding or completed plugins-related network requests.

const selectRequest = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  requests = {}
}) => requests[actionType]);
const selectIsRequestPending = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Pending);
const selectRequestError = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Rejected ? request === null || request === void 0 ? void 0 : request.error : null);
const selectIsRequestNotFetched = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => request === undefined);

/***/ }),

/***/ "./public/app/features/plugins/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPlugin": () => (/* binding */ loadPlugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _importPanelPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/importPanelPlugin.ts");
/* harmony import */ var _pluginSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/pluginSettings.ts");
/* harmony import */ var _plugin_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");




async function loadPlugin(pluginId) {
  const info = await (0,_pluginSettings__WEBPACK_IMPORTED_MODULE_2__.getPluginSettings)(pluginId);
  let result;

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.app) {
    result = await (0,_plugin_loader__WEBPACK_IMPORTED_MODULE_3__.importAppPlugin)(info);
  }

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource) {
    result = await (0,_plugin_loader__WEBPACK_IMPORTED_MODULE_3__.importDataSourcePlugin)(info);
  }

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.panel) {
    const panelPlugin = await (0,_importPanelPlugin__WEBPACK_IMPORTED_MODULE_1__.importPanelPluginFromMeta)(info);
    result = panelPlugin;
  }

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.renderer) {
    result = {
      meta: info
    };
  }

  if (!result) {
    throw new Error('Unknown Plugin type: ' + info.type);
  }

  return result;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1Z2luUGFnZS5hNWMxMGZhMDgzMDkwYmZiMTI2My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNDLE9BQVQsR0FBbUI7RUFBQTs7RUFDeEIsTUFBTUMsTUFBTSwwQkFBR0Ysb0VBQUgsd0RBQUcsb0JBQW9CSSxXQUFuQztFQUNBLE9BQU8sQ0FBQyxFQUFFRixNQUFNLElBQUlBLE1BQU0sR0FBRyxDQUFyQixDQUFSO0FBQ0Q7QUFFTSxNQUFNRyxjQUFjLEdBQUcsTUFBTUosT0FBTyxNQUFNRCx5RkFBMUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUVBOzs7O0FBVUEsTUFBTVcsZUFBMEIsR0FBRyxDQUFDO0VBQUVDLFVBQUY7RUFBY0MsUUFBZDtFQUF3QkM7QUFBeEIsQ0FBRCxLQUF3QztFQUN6RSxTQUFTQyxVQUFULENBQW9CQyxTQUFwQixFQUFnRDtJQUM5QyxPQUFPQSxTQUFTLENBQUNDLFFBQVYsS0FBdUJELFNBQVMsQ0FBQ0UsZ0JBQWpDLEdBQW9ELFFBQXBELEdBQStELFdBQXRFO0VBQ0Q7O0VBRUQsb0JBQ0U7SUFBTyxTQUFTLEVBQUMsY0FBakI7SUFBQSx1QkFDRTtNQUFBLFVBQ0dOLFVBQVUsQ0FBQ08sR0FBWCxDQUFlLENBQUNILFNBQUQsRUFBWUksS0FBWixLQUFzQjtRQUNwQyxvQkFDRTtVQUFBLHNDQUNFO1lBQUksU0FBUyxFQUFDLFNBQWQ7WUFBQSx1QkFDRSx1REFBQyw2Q0FBRDtjQUFNLElBQUksRUFBQztZQUFYO1VBREYsRUFERixnQkFJRTtZQUFBLFVBQ0dKLFNBQVMsQ0FBQ0ssUUFBVixnQkFDQztjQUFHLElBQUksRUFBRUwsU0FBUyxDQUFDTSxXQUFuQjtjQUFBLFVBQWlDTixTQUFTLENBQUNPO1lBQTNDLEVBREQsZ0JBR0M7Y0FBQSxVQUFPUCxTQUFTLENBQUNPO1lBQWpCO1VBSkosRUFKRixlQVdFO1lBQUksS0FBSyxFQUFFO2NBQUVDLFNBQVMsRUFBRTtZQUFiLENBQVg7WUFBQSxXQUNHLENBQUNSLFNBQVMsQ0FBQ0ssUUFBWCxnQkFDQyx1REFBQywrQ0FBRDtjQUFRLE9BQU8sRUFBQyxXQUFoQjtjQUE0QixJQUFJLEVBQUMsSUFBakM7Y0FBc0MsT0FBTyxFQUFFLE1BQU1SLFFBQVEsQ0FBQ0csU0FBRCxFQUFZLEtBQVosQ0FBN0Q7Y0FBQTtZQUFBLEVBREQsZ0JBS0MsdURBQUMsK0NBQUQ7Y0FBUSxPQUFPLEVBQUMsV0FBaEI7Y0FBNEIsSUFBSSxFQUFDLElBQWpDO2NBQXNDLE9BQU8sRUFBRSxNQUFNSCxRQUFRLENBQUNHLFNBQUQsRUFBWSxJQUFaLENBQTdEO2NBQUEsVUFDR0QsVUFBVSxDQUFDQyxTQUFEO1lBRGIsRUFOSixFQVVHQSxTQUFTLENBQUNLLFFBQVYsaUJBQ0MsdURBQUMsK0NBQUQ7Y0FDRSxjQUFXLGtCQURiO2NBRUUsSUFBSSxFQUFDLFdBRlA7Y0FHRSxPQUFPLEVBQUMsYUFIVjtjQUlFLElBQUksRUFBQyxJQUpQO2NBS0UsT0FBTyxFQUFFLE1BQU1QLFFBQVEsQ0FBQ0UsU0FBRDtZQUx6QixFQVhKO1VBQUEsRUFYRjtRQUFBLEdBQVUsR0FBRUEsU0FBUyxDQUFDUyxXQUFZLElBQUdMLEtBQU0sRUFBM0MsQ0FERjtNQWtDRCxDQW5DQTtJQURIO0VBREYsRUFERjtBQTBDRCxDQS9DRDs7QUFpREEsaUVBQWVULGVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBb0JPLE1BQU0wQyxzQkFBc0IsR0FBRyxDQUNwQ0MsTUFEb0MsRUFFcENDLFlBQStDLEdBQUc7RUFDaERDLGNBRGdEO0VBRWhEQyxrQkFGZ0Q7RUFHaEROLGFBSGdEO0VBSWhEQyxpQkFKZ0Q7RUFLaERmLHNCQUFzQkEsd0ZBQUFBO0FBTDBCLENBRmQsS0FTZDtFQUN0QixPQUFPLE9BQU9xQixRQUFQLEVBQWlCQyxRQUFqQixLQUE4QjtJQUNuQyxJQUFJLENBQUNMLE1BQUwsRUFBYTtNQUNYSSxRQUFRLENBQUNaLHdFQUE0QixDQUFDLElBQUljLEtBQUosQ0FBVSxZQUFWLENBQUQsQ0FBN0IsQ0FBUjtNQUNBO0lBQ0Q7O0lBRUQsSUFBSTtNQUNGLE1BQU1DLGdCQUFnQixHQUFHLE1BQU1ILFFBQVEsQ0FBQ0gsWUFBWSxDQUFDQyxjQUFiLENBQTRCRixNQUE1QixDQUFELENBQXZDO01BQ0EsTUFBTUksUUFBUSxDQUFDSCxZQUFZLENBQUNFLGtCQUFiLENBQWdDSSxnQkFBaEMsQ0FBRCxDQUFkLENBRkUsQ0FJRjs7TUFDQSxJQUFJRixRQUFRLEdBQUdHLGtCQUFYLENBQThCQyxNQUFsQyxFQUEwQztRQUN4QztNQUNEOztNQUVELE1BQU1DLFVBQVUsR0FBR1QsWUFBWSxDQUFDSixhQUFiLENBQTJCUSxRQUFRLEdBQUdNLFdBQXRDLEVBQW1EWCxNQUFuRCxDQUFuQjtNQUNBLE1BQU1ZLGNBQWMsR0FBR1gsWUFBWSxDQUFDSCxpQkFBYixDQUErQk8sUUFBUSxHQUFHTSxXQUExQyxFQUF1REQsVUFBVSxDQUFFRyxJQUFuRSxDQUF2QjtNQUNBLE1BQU1DLGNBQWMsR0FBRyxNQUFNYixZQUFZLENBQUNsQixzQkFBYixDQUFvQzZCLGNBQXBDLENBQTdCO01BRUFSLFFBQVEsQ0FBQ1gsMkVBQStCLENBQUNxQixjQUFELENBQWhDLENBQVI7SUFDRCxDQWRELENBY0UsT0FBT0MsR0FBUCxFQUFZO01BQ1osSUFBSUEsR0FBRyxZQUFZVCxLQUFuQixFQUEwQjtRQUN4QkYsUUFBUSxDQUFDWix3RUFBNEIsQ0FBQ3VCLEdBQUQsQ0FBN0IsQ0FBUjtNQUNEO0lBQ0Y7RUFDRixDQXpCRDtBQTBCRCxDQXBDTTtBQXNDQSxNQUFNQyxjQUFjLEdBQUcsQ0FDNUJDLGNBRDRCLEVBRTVCaEIsWUFBd0MsR0FBRztFQUN6Q3BCLGdCQUR5QztFQUV6Q0YsYUFBYUEsMEVBQUFBO0FBRjRCLENBRmYsS0FNTjtFQUN0QixPQUFPLE9BQU95QixRQUFQLEVBQWdDQyxRQUFoQyxLQUE2QztJQUNsRCxNQUFNYSxLQUFLLEdBQUcsTUFBTWpCLFlBQVksQ0FBQ3BCLGdCQUFiLEdBQWdDc0MsR0FBaEMsQ0FBb0NGLGNBQXBDLENBQXBCOztJQUVBLElBQUksQ0FBQ0MsS0FBSyxDQUFDRSxjQUFYLEVBQTJCO01BQ3pCO0lBQ0Q7O0lBRURoQixRQUFRLENBQUNULGtFQUFzQixFQUF2QixDQUFSO0lBRUFNLFlBQVksQ0FBQ3RCLGFBQWIsR0FBNkIwQyxrQkFBN0IsQ0FBZ0QsWUFBWTtNQUMxRCxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1KLEtBQUssQ0FBQ0UsY0FBTixFQUFyQjtRQUVBaEIsUUFBUSxDQUFDUixtRUFBdUIsQ0FBQzBCLE1BQUQsQ0FBeEIsQ0FBUjtNQUNELENBSkQsQ0FJRSxPQUFPUCxHQUFQLEVBQVk7UUFDWixJQUFJUSxPQUFKO1FBQ0EsSUFBSUMsT0FBSjs7UUFFQSxJQUFJVCxHQUFHLFlBQVl4Qyw4REFBbkIsRUFBcUM7VUFDbkNnRCxPQUFPLEdBQUdSLEdBQUcsQ0FBQ1EsT0FBZDtVQUNBQyxPQUFPLEdBQUdULEdBQUcsQ0FBQ1MsT0FBZDtRQUNELENBSEQsTUFHTyxJQUFJaEQsOERBQVksQ0FBQ3VDLEdBQUQsQ0FBaEIsRUFBdUI7VUFBQTs7VUFDNUJRLE9BQU8sd0JBQUdSLEdBQUcsQ0FBQ1UsSUFBSixDQUFTRixPQUFaLGlFQUF3QixjQUFhUixHQUFHLENBQUNXLFVBQVcsRUFBM0Q7UUFDRCxDQUZNLE1BRUEsSUFBSVgsR0FBRyxZQUFZVCxLQUFuQixFQUEwQjtVQUMvQmlCLE9BQU8sR0FBR1IsR0FBRyxDQUFDUSxPQUFkO1FBQ0Q7O1FBRURuQixRQUFRLENBQUNWLGdFQUFvQixDQUFDO1VBQUU2QixPQUFGO1VBQVdDO1FBQVgsQ0FBRCxDQUFyQixDQUFSO01BQ0Q7SUFDRixDQXBCRDtFQXFCRCxDQTlCRDtBQStCRCxDQXRDTTtBQXdDQSxTQUFTRyxlQUFULEdBQThDO0VBQ25ELE9BQU8sTUFBT3ZCLFFBQVAsSUFBb0I7SUFDekIsTUFBTXdCLFFBQVEsR0FBRyxNQUFNakQsNEVBQWEsR0FBR3dDLEdBQWhCLENBQW9CLGtCQUFwQixDQUF2QjtJQUNBZixRQUFRLENBQUNiLDZEQUFpQixDQUFDcUMsUUFBRCxDQUFsQixDQUFSO0VBQ0QsQ0FIRDtBQUlEO0FBRU0sU0FBUzFCLGNBQVQsQ0FBd0IyQixHQUF4QixFQUErRTtFQUNwRixPQUFPLE1BQU96QixRQUFQLElBQW9CO0lBQ3pCLE1BQU1NLFVBQVUsR0FBRyxNQUFNb0IseUJBQXlCLENBQUNELEdBQUQsQ0FBbEQ7SUFFQXpCLFFBQVEsQ0FBQ2pCLDREQUFnQixDQUFDdUIsVUFBRCxDQUFqQixDQUFSO0lBQ0EsT0FBT0EsVUFBUDtFQUNELENBTEQ7QUFNRDtBQUVNLFNBQVNQLGtCQUFULENBQTRCTyxVQUE1QixFQUErRTtFQUNwRixPQUFPLE1BQU9OLFFBQVAsSUFBb0I7SUFDekIsTUFBTTJCLFVBQVUsR0FBSSxNQUFNakQsc0ZBQWlCLENBQUM0QixVQUFVLENBQUNHLElBQVosQ0FBM0M7SUFDQSxNQUFNSixNQUFNLEdBQUcsTUFBTTFCLDBGQUFzQixDQUFDZ0QsVUFBRCxDQUEzQztJQUNBLE1BQU1DLFNBQVMsR0FBR3ZCLE1BQU0sQ0FBQ3dCLGVBQVAsQ0FBdUJDLFNBQXZCLFlBQTRDNUQsbUVBQTlEO0lBQ0EsTUFBTTZELElBQUkscUJBQ0xKLFVBREs7TUFFUkMsU0FBUyxFQUFFRCxVQUFVLENBQUNLLE9BQVgsSUFBc0JKO0lBRnpCLEVBQVY7SUFLQTVCLFFBQVEsQ0FBQ2hCLGdFQUFvQixDQUFDK0MsSUFBRCxDQUFyQixDQUFSO0lBRUExQixNQUFNLENBQUMwQixJQUFQLEdBQWNBLElBQWQ7SUFDQS9CLFFBQVEsQ0FBQzFCLGdFQUFjLENBQUNRLHlEQUFhLENBQUN3QixVQUFELEVBQWFELE1BQWIsQ0FBZCxDQUFmLENBQVI7RUFDRCxDQWJEO0FBY0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sZUFBZXFCLHlCQUFmLENBQXlDRCxHQUF6QyxFQUE0RjtFQUNqRztFQUNBLElBQUk7SUFDRixNQUFNUSxLQUFLLEdBQUcsTUFBTWpFLG9EQUFhLENBQy9CTyw0RUFBYSxHQUFHMkQsS0FBaEIsQ0FBMEM7TUFDeENDLE1BQU0sRUFBRSxLQURnQztNQUV4Q0MsR0FBRyxFQUFHLHdCQUF1QlgsR0FBSSxFQUZPO01BR3hDWSxNQUFNLEVBQUU3RCxxRkFBdUIsRUFIUztNQUl4QzhELGNBQWMsRUFBRTtJQUp3QixDQUExQyxDQUQrQixDQUFqQzs7SUFTQSxJQUFJTCxLQUFLLENBQUNNLEVBQVYsRUFBYztNQUNaLE9BQU9OLEtBQUssQ0FBQ1osSUFBYjtJQUNEO0VBQ0YsQ0FiRCxDQWFFLE9BQU9WLEdBQVAsRUFBWTtJQUNaNkIsT0FBTyxDQUFDQyxHQUFSLENBQVkscUNBQVosRUFBbUQ5QixHQUFuRDtFQUNELENBakJnRyxDQW1Cakc7OztFQUNBLE1BQU0rQixFQUFFLEdBQUcsT0FBT2pCLEdBQVAsS0FBZSxRQUFmLEdBQTBCa0IsUUFBUSxDQUFDbEIsR0FBRCxFQUFNLEVBQU4sQ0FBbEMsR0FBOENBLEdBQXpEOztFQUNBLElBQUksQ0FBQ21CLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhSCxFQUFiLENBQUwsRUFBdUI7SUFDckIsTUFBTWxCLFFBQVEsR0FBRyxNQUFNeEQsb0RBQWEsQ0FDbENPLDRFQUFhLEdBQUcyRCxLQUFoQixDQUEwQztNQUN4Q0MsTUFBTSxFQUFFLEtBRGdDO01BRXhDQyxHQUFHLEVBQUcsb0JBQW1CTSxFQUFHLEVBRlk7TUFHeENMLE1BQU0sRUFBRTdELHFGQUF1QixFQUhTO01BSXhDOEQsY0FBYyxFQUFFO0lBSndCLENBQTFDLENBRGtDLENBQXBDLENBRHFCLENBVXJCO0lBQ0E7O0lBQ0EsSUFBSWQsUUFBUSxDQUFDZSxFQUFULElBQWUsT0FBT2QsR0FBUCxLQUFlLFFBQTlCLElBQTBDRCxRQUFRLENBQUNILElBQVQsQ0FBY3FCLEVBQWQsS0FBcUJqQixHQUFuRSxFQUF3RTtNQUN0RSxPQUFPRCxRQUFRLENBQUNILElBQWhCO0lBQ0QsQ0Fkb0IsQ0FnQnJCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7OztJQUNBLElBQUlHLFFBQVEsQ0FBQ2UsRUFBVCxJQUFlZixRQUFRLENBQUNILElBQVQsQ0FBY3FCLEVBQWQsQ0FBaUJJLFFBQWpCLE9BQWdDckIsR0FBbkQsRUFBd0Q7TUFDdERzQixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCaEYscUVBQUEsQ0FBNEIscUJBQW9CdUQsUUFBUSxDQUFDSCxJQUFULENBQWNJLEdBQUksRUFBbEUsQ0FBdkI7TUFDQSxPQUFPLEVBQVAsQ0FGc0QsQ0FFckI7SUFDbEM7RUFDRjs7RUFFRCxNQUFNdkIsS0FBSyxDQUFDLDRCQUFELENBQVg7QUFDRDtBQUVNLFNBQVNpRCxhQUFULENBQXVCOUMsTUFBdkIsRUFBd0U7RUFDN0UsT0FBTyxPQUFPTCxRQUFQLEVBQWlCb0QsUUFBakIsS0FBOEI7SUFDbkMsTUFBTXBELFFBQVEsQ0FBQ3VCLGVBQWUsRUFBaEIsQ0FBZDtJQUVBLE1BQU1oQixXQUFXLEdBQUc2QyxRQUFRLEdBQUc3QyxXQUFYLENBQXVCQSxXQUEzQztJQUVBLE1BQU04QyxXQUFXLEdBQUc7TUFDbEJDLElBQUksRUFBRWpELE1BQU0sQ0FBQ2lELElBREs7TUFFbEI3QyxJQUFJLEVBQUVKLE1BQU0sQ0FBQ3FDLEVBRks7TUFHbEJhLE1BQU0sRUFBRSxPQUhVO01BSWxCQyxTQUFTLEVBQUVqRCxXQUFXLENBQUNrRCxNQUFaLEtBQXVCO0lBSmhCLENBQXBCOztJQU9BLElBQUlDLFNBQVMsQ0FBQ25ELFdBQUQsRUFBYzhDLFdBQVcsQ0FBQ0MsSUFBMUIsQ0FBYixFQUE4QztNQUM1Q0QsV0FBVyxDQUFDQyxJQUFaLEdBQW1CSyxXQUFXLENBQUNwRCxXQUFELEVBQWM4QyxXQUFXLENBQUNDLElBQTFCLENBQTlCO0lBQ0Q7O0lBRUQsTUFBTXBDLE1BQU0sR0FBRyxNQUFNM0MsNEVBQWEsR0FBR3FGLElBQWhCLENBQXFCLGtCQUFyQixFQUF5Q1AsV0FBekMsQ0FBckI7SUFDQSxNQUFNNUUscUZBQWdCLEdBQUdvRixNQUFuQixFQUFOO0lBRUEsTUFBTWpGLHVGQUFBLEVBQU47SUFFQVAsa0VBQUEsQ0FBc0IscUJBQW9CNkMsTUFBTSxDQUFDOEMsVUFBUCxDQUFrQnZDLEdBQUksRUFBaEU7RUFDRCxDQXRCRDtBQXVCRDtBQUVNLFNBQVN3QyxxQkFBVCxHQUFvRDtFQUN6RCxPQUFPLE1BQU9qRSxRQUFQLElBQW9CO0lBQ3pCQSxRQUFRLENBQUNmLGlFQUFxQixFQUF0QixDQUFSO0lBQ0EsTUFBTWlGLE9BQU8sR0FBRyxNQUFNM0YsNEVBQWEsR0FBR3dDLEdBQWhCLENBQW9CLGNBQXBCLEVBQW9DO01BQUVvRCxPQUFPLEVBQUUsQ0FBWDtNQUFjMUQsSUFBSSxFQUFFO0lBQXBCLENBQXBDLENBQXRCO0lBQ0EsTUFBTTJELFVBQVUsR0FBR3ZGLGlFQUFlLENBQUNxRixPQUFELENBQWxDO0lBQ0FsRSxRQUFRLENBQUNkLG1FQUF1QixDQUFDO01BQUVnRixPQUFGO01BQVdFO0lBQVgsQ0FBRCxDQUF4QixDQUFSO0VBQ0QsQ0FMRDtBQU1EO0FBRU0sU0FBU0MsZ0JBQVQsQ0FBMEIvRCxVQUExQixFQUE2RTtFQUNsRixPQUFPLE1BQU9OLFFBQVAsSUFBb0I7SUFDekIsTUFBTXpCLDRFQUFhLEdBQUcrRixHQUFoQixDQUFxQixvQkFBbUJoRSxVQUFVLENBQUNvQyxFQUFHLEVBQXRELEVBQXlEcEMsVUFBekQsQ0FBTixDQUR5QixDQUNtRDs7SUFDNUUsTUFBTTdCLHFGQUFnQixHQUFHb0YsTUFBbkIsRUFBTjtJQUNBLE9BQU83RCxRQUFRLENBQUNGLGNBQWMsQ0FBQ1EsVUFBVSxDQUFDbUIsR0FBWixDQUFmLENBQWY7RUFDRCxDQUpEO0FBS0Q7QUFFTSxTQUFTOEMsZ0JBQVQsR0FBK0M7RUFDcEQsT0FBTyxPQUFPdkUsUUFBUCxFQUFpQm9ELFFBQWpCLEtBQThCO0lBQ25DLE1BQU05QyxVQUFVLEdBQUc4QyxRQUFRLEdBQUc3QyxXQUFYLENBQXVCRCxVQUExQztJQUVBLE1BQU0vQiw0RUFBYSxHQUFHaUcsTUFBaEIsQ0FBd0Isb0JBQW1CbEUsVUFBVSxDQUFDb0MsRUFBRyxFQUF6RCxDQUFOO0lBQ0EsTUFBTWpFLHFGQUFnQixHQUFHb0YsTUFBbkIsRUFBTjtJQUVBeEYsa0VBQUEsQ0FBcUIsY0FBckI7RUFDRCxDQVBEO0FBUUQ7QUFNTSxTQUFTcUYsU0FBVCxDQUFtQm5ELFdBQW5CLEVBQWdEK0MsSUFBaEQsRUFBOEQ7RUFDbkUsT0FDRS9DLFdBQVcsQ0FBQ2tFLE1BQVosQ0FBb0JuRSxVQUFELElBQWdCO0lBQ2pDLE9BQU9BLFVBQVUsQ0FBQ2dELElBQVgsQ0FBZ0JvQixXQUFoQixPQUFrQ3BCLElBQUksQ0FBQ29CLFdBQUwsRUFBekM7RUFDRCxDQUZELEVBRUdqQixNQUZILEdBRVksQ0FIZDtBQUtEO0FBRU0sU0FBU0UsV0FBVCxDQUFxQnBELFdBQXJCLEVBQWtEK0MsSUFBbEQsRUFBZ0U7RUFDckU7RUFDQTtFQUNBLE9BQU9JLFNBQVMsQ0FBQ25ELFdBQUQsRUFBYytDLElBQWQsQ0FBaEIsRUFBcUM7SUFDbkM7SUFDQTtJQUNBLElBQUksQ0FBQ3FCLGFBQWEsQ0FBQ3JCLElBQUQsQ0FBbEIsRUFBMEI7TUFDeEJBLElBQUksR0FBSSxHQUFFQSxJQUFLLElBQWY7SUFDRCxDQUZELE1BRU87TUFDTDtNQUNBO01BRUE7TUFDQUEsSUFBSSxHQUFJLEdBQUVzQixVQUFVLENBQUN0QixJQUFELENBQU8sR0FBRXVCLGtCQUFrQixDQUFDQyxZQUFZLENBQUN4QixJQUFELENBQWIsQ0FBcUIsRUFBcEU7SUFDRDtFQUNGOztFQUVELE9BQU9BLElBQVA7QUFDRDs7QUFFRCxTQUFTcUIsYUFBVCxDQUF1QnJCLElBQXZCLEVBQXFDO0VBQ25DLE9BQU9BLElBQUksQ0FBQ3lCLFFBQUwsQ0FBYyxHQUFkLEVBQW1CekIsSUFBSSxDQUFDRyxNQUFMLEdBQWMsQ0FBakMsQ0FBUDtBQUNEOztBQUVELFNBQVNxQixZQUFULENBQXNCeEIsSUFBdEIsRUFBb0M7RUFDbEMsT0FBT1gsUUFBUSxDQUFDVyxJQUFJLENBQUMwQixLQUFMLENBQVcsQ0FBQyxDQUFaLENBQUQsRUFBaUIsRUFBakIsQ0FBZjtBQUNEOztBQUVELFNBQVNILGtCQUFULENBQTRCSSxLQUE1QixFQUEyQztFQUN6QyxPQUFPcEMsS0FBSyxDQUFDb0MsS0FBRCxDQUFMLEdBQWUsQ0FBZixHQUFtQkEsS0FBSyxHQUFHLENBQWxDO0FBQ0Q7O0FBRUQsU0FBU0wsVUFBVCxDQUFvQnRCLElBQXBCLEVBQWtDO0VBQ2hDLE9BQU9BLElBQUksQ0FBQzBCLEtBQUwsQ0FBVyxDQUFYLEVBQWMxQixJQUFJLENBQUNHLE1BQUwsR0FBYyxDQUE1QixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNoVUQ7QUFDQTtBQUdPLFNBQVM1RSxlQUFULENBQXlCcUYsT0FBekIsRUFBc0Y7RUFDM0YsTUFBTUUsVUFBc0MsR0FBRyxDQUM3QztJQUFFMUIsRUFBRSxFQUFFLE1BQU47SUFBYzdFLEtBQUssRUFBRSx1QkFBckI7SUFBOENxRyxPQUFPLEVBQUU7RUFBdkQsQ0FENkMsRUFFN0M7SUFBRXhCLEVBQUUsRUFBRSxTQUFOO0lBQWlCN0UsS0FBSyxFQUFFLDhCQUF4QjtJQUF3RHFHLE9BQU8sRUFBRTtFQUFqRSxDQUY2QyxFQUc3QztJQUFFeEIsRUFBRSxFQUFFLFNBQU47SUFBaUI3RSxLQUFLLEVBQUUscUJBQXhCO0lBQStDcUcsT0FBTyxFQUFFO0VBQXhELENBSDZDLEVBSTdDO0lBQUV4QixFQUFFLEVBQUUsS0FBTjtJQUFhN0UsS0FBSyxFQUFFLEtBQXBCO0lBQTJCcUcsT0FBTyxFQUFFO0VBQXBDLENBSjZDLEVBSzdDO0lBQUV4QixFQUFFLEVBQUUsT0FBTjtJQUFlN0UsS0FBSyxFQUFFLE9BQXRCO0lBQStCcUcsT0FBTyxFQUFFO0VBQXhDLENBTDZDLEVBTTdDO0lBQUV4QixFQUFFLEVBQUUsWUFBTjtJQUFvQjdFLEtBQUssRUFBRSxvQkFBM0I7SUFBaURxRyxPQUFPLEVBQUU7RUFBMUQsQ0FONkMsRUFPN0M7SUFBRXhCLEVBQUUsRUFBRSxLQUFOO0lBQWE3RSxLQUFLLEVBQUUsa0JBQXBCO0lBQXdDcUcsT0FBTyxFQUFFO0VBQWpELENBUDZDLEVBUTdDO0lBQUV4QixFQUFFLEVBQUUsT0FBTjtJQUFlN0UsS0FBSyxFQUFFLFFBQXRCO0lBQWdDcUcsT0FBTyxFQUFFO0VBQXpDLENBUjZDLEVBUzdDTyxNQVQ2QyxDQVNyQ1csSUFBRCxJQUFVQSxJQVQ0QixDQUEvQztFQVdBLE1BQU1DLGFBQXVELEdBQUcsRUFBaEU7RUFDQSxNQUFNQyxXQUFpRCxHQUFHLEVBQTFEO0VBQ0EsTUFBTUMsaUJBQWlCLEdBQUdDLDJCQUEyQixFQUFyRCxDQWQyRixDQWdCM0Y7O0VBQ0EsS0FBSyxNQUFNQyxRQUFYLElBQXVCckIsVUFBdkIsRUFBbUM7SUFDakNpQixhQUFhLENBQUNJLFFBQVEsQ0FBQy9DLEVBQVYsQ0FBYixHQUE2QitDLFFBQTdCO0VBQ0Q7O0VBRUQsS0FBSyxNQUFNcEYsTUFBWCxJQUFxQjZELE9BQXJCLEVBQThCO0lBQzVCLE1BQU13QixnQkFBZ0IsR0FBR0gsaUJBQWlCLENBQUNJLElBQWxCLENBQXdCUCxJQUFELElBQVVBLElBQUksQ0FBQzFDLEVBQUwsS0FBWXJDLE1BQU0sQ0FBQ3FDLEVBQXBELENBQXpCLENBRDRCLENBRTVCOztJQUNBLElBQUlyQyxNQUFNLENBQUN1RixVQUFQLElBQXFCRixnQkFBekIsRUFBMkM7TUFBQTs7TUFDekNyRixNQUFNLENBQUNvRixRQUFQLEdBQWtCLFlBQWxCO01BQ0FwRixNQUFNLENBQUN3RixVQUFQLEdBQW9CLENBQUNWLGdFQUFjLENBQUMsb0JBQUQsQ0FBbkM7TUFDQTlFLE1BQU0sQ0FBQ3lGLElBQVAsQ0FBWUMsS0FBWixHQUFvQixDQUFBTCxnQkFBZ0IsU0FBaEIsSUFBQUEsZ0JBQWdCLFdBQWhCLHFDQUFBQSxnQkFBZ0IsQ0FBRUksSUFBbEIsZ0ZBQXdCQyxLQUF4QixLQUFpQzFGLE1BQU0sQ0FBQ3lGLElBQVAsQ0FBWUMsS0FBakU7SUFDRCxDQVAyQixDQVM1Qjs7O0lBQ0EsSUFBSTFGLE1BQU0sQ0FBQ3lGLElBQVAsQ0FBWUMsS0FBaEIsRUFBdUI7TUFDckIsS0FBSyxNQUFNQyxJQUFYLElBQW1CM0YsTUFBTSxDQUFDeUYsSUFBUCxDQUFZQyxLQUEvQixFQUFzQztRQUNwQ0MsSUFBSSxDQUFDMUMsSUFBTCxHQUFZLFlBQVo7TUFDRDtJQUNGOztJQUVELE1BQU1tQyxRQUFRLEdBQUdyQixVQUFVLENBQUN1QixJQUFYLENBQWlCUCxJQUFELElBQVVBLElBQUksQ0FBQzFDLEVBQUwsS0FBWXJDLE1BQU0sQ0FBQ29GLFFBQTdDLEtBQTBESixhQUFhLENBQUMsT0FBRCxDQUF4RjtJQUNBSSxRQUFRLENBQUN2QixPQUFULENBQWlCSCxJQUFqQixDQUFzQjFELE1BQXRCLEVBakI0QixDQWtCNUI7O0lBQ0FpRixXQUFXLENBQUNqRixNQUFNLENBQUNxQyxFQUFSLENBQVgsR0FBeUJyQyxNQUF6QjtFQUNEOztFQUVELEtBQUssTUFBTW9GLFFBQVgsSUFBdUJyQixVQUF2QixFQUFtQztJQUNqQztJQUNBLElBQUlxQixRQUFRLENBQUMvQyxFQUFULEtBQWdCLE9BQXBCLEVBQTZCO01BQzNCK0MsUUFBUSxDQUFDdkIsT0FBVCxDQUFpQkgsSUFBakIsQ0FBc0JrQyw0QkFBNEIsRUFBbEQ7SUFDRCxDQUpnQyxDQU1qQzs7O0lBQ0EsSUFBSVIsUUFBUSxDQUFDL0MsRUFBVCxLQUFnQixZQUFwQixFQUFrQztNQUNoQyxLQUFLLE1BQU1yQyxNQUFYLElBQXFCa0YsaUJBQXJCLEVBQXdDO1FBQ3RDLElBQUksQ0FBQ0QsV0FBVyxDQUFDakYsTUFBTSxDQUFDcUMsRUFBUixDQUFoQixFQUE2QjtVQUMzQitDLFFBQVEsQ0FBQ3ZCLE9BQVQsQ0FBaUJILElBQWpCLENBQXNCMUQsTUFBdEI7UUFDRDtNQUNGO0lBQ0Y7O0lBRUQ2RixXQUFXLENBQUNULFFBQVEsQ0FBQ3ZCLE9BQVYsQ0FBWDtFQUNELENBM0QwRixDQTZEM0Y7OztFQUNBLE9BQU9FLFVBQVUsQ0FBQ0ssTUFBWCxDQUFtQjBCLENBQUQsSUFBT0EsQ0FBQyxDQUFDakMsT0FBRixDQUFVVCxNQUFWLEdBQW1CLENBQTVDLENBQVA7QUFDRDs7QUFFRCxTQUFTeUMsV0FBVCxDQUFxQmhDLE9BQXJCLEVBQXNEO0VBQ3BELE1BQU1rQyxZQUFzQyxHQUFHO0lBQzdDQyxVQUFVLEVBQUUsR0FEaUM7SUFFN0NDLFFBQVEsRUFBRSxFQUZtQztJQUc3Q0MsSUFBSSxFQUFFLEVBSHVDO0lBSTdDQyxLQUFLLEVBQUUsRUFKc0M7SUFLN0NDLE1BQU0sRUFBRSxHQUxxQztJQU03Q0MsUUFBUSxFQUFFLEVBTm1DO0lBTzdDQyxNQUFNLEVBQUUsQ0FBQztFQVBvQyxDQUEvQztFQVVBekMsT0FBTyxDQUFDMEMsSUFBUixDQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0lBQ3JCLE1BQU1DLEtBQUssR0FBR1gsWUFBWSxDQUFDUyxDQUFDLENBQUNuRSxFQUFILENBQVosSUFBc0IsQ0FBcEM7SUFDQSxNQUFNc0UsS0FBSyxHQUFHWixZQUFZLENBQUNVLENBQUMsQ0FBQ3BFLEVBQUgsQ0FBWixJQUFzQixDQUFwQzs7SUFDQSxJQUFJcUUsS0FBSyxHQUFHQyxLQUFaLEVBQW1CO01BQ2pCLE9BQU8sQ0FBQyxDQUFSO0lBQ0Q7O0lBQ0QsSUFBSUQsS0FBSyxHQUFHQyxLQUFaLEVBQW1CO01BQ2pCLE9BQU8sQ0FBUDtJQUNEOztJQUVELE9BQU9ILENBQUMsQ0FBQ3ZELElBQUYsR0FBU3dELENBQUMsQ0FBQ3hELElBQVgsR0FBa0IsQ0FBbEIsR0FBc0IsQ0FBQyxDQUE5QjtFQUNELENBWEQ7QUFZRDs7QUFFRCxTQUFTa0MsMkJBQVQsR0FBK0Q7RUFDN0QsT0FBTyxDQUNMeUIsZ0JBQWdCLENBQUM7SUFDZnZFLEVBQUUsRUFBRSwyQkFEVztJQUVmWSxJQUFJLEVBQUUsUUFGUztJQUdmNEQsV0FBVyxFQUFFLG1DQUhFO0lBSWZDLE1BQU0sRUFBRTtFQUpPLENBQUQsQ0FEWCxFQU9MRixnQkFBZ0IsQ0FBQztJQUNmdkUsRUFBRSxFQUFFLDJCQURXO0lBRWZZLElBQUksRUFBRSxRQUZTO0lBR2Y0RCxXQUFXLEVBQUUsa0NBSEU7SUFJZkMsTUFBTSxFQUFFO0VBSk8sQ0FBRCxDQVBYLEVBYUxGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsOEJBRFc7SUFFZlksSUFBSSxFQUFFLFdBRlM7SUFHZjRELFdBQVcsRUFBRSxzQ0FIRTtJQUlmQyxNQUFNLEVBQUU7RUFKTyxDQUFELENBYlgsRUFtQkxGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsK0JBRFc7SUFFZndFLFdBQVcsRUFBRSx3Q0FGRTtJQUdmNUQsSUFBSSxFQUFFLFlBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0FuQlgsRUF5QkxGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsNEJBRFc7SUFFZndFLFdBQVcsRUFBRSxxQ0FGRTtJQUdmNUQsSUFBSSxFQUFFLFNBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0F6QlgsRUErQkxGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsNkJBRFc7SUFFZndFLFdBQVcsRUFBRSx1Q0FGRTtJQUdmNUQsSUFBSSxFQUFFLFdBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0EvQlgsRUFxQ0xGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsNEJBRFc7SUFFZndFLFdBQVcsRUFBRSxxQ0FGRTtJQUdmNUQsSUFBSSxFQUFFLFNBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0FyQ1gsRUEyQ0xGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsOEJBRFc7SUFFZndFLFdBQVcsRUFBRSx1Q0FGRTtJQUdmNUQsSUFBSSxFQUFFLFdBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0EzQ1gsRUFpRExGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsOEJBRFc7SUFFZndFLFdBQVcsRUFBRSx1Q0FGRTtJQUdmNUQsSUFBSSxFQUFFLFdBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0FqRFgsRUF1RExGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsZ0NBRFc7SUFFZndFLFdBQVcsRUFBRSx5Q0FGRTtJQUdmNUQsSUFBSSxFQUFFLGFBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0F2RFgsRUE2RExGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsNEJBRFc7SUFFZndFLFdBQVcsRUFBRSx1Q0FGRTtJQUdmNUQsSUFBSSxFQUFFLFdBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0E3RFgsRUFtRUxGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsOEJBRFc7SUFFZndFLFdBQVcsRUFBRSxzQ0FGRTtJQUdmNUQsSUFBSSxFQUFFLFdBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0FuRVgsRUF5RUxGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsK0JBRFc7SUFFZndFLFdBQVcsRUFBRSx1Q0FGRTtJQUdmNUQsSUFBSSxFQUFFLFlBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0F6RVgsRUErRUxGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUseUJBRFc7SUFFZndFLFdBQVcsRUFBRSxpQ0FGRTtJQUdmNUQsSUFBSSxFQUFFLE1BSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0EvRVgsRUFxRkxGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsMkJBRFc7SUFFZndFLFdBQVcsRUFBRSxtQ0FGRTtJQUdmNUQsSUFBSSxFQUFFLFFBSFM7SUFJZjZELE1BQU0sRUFBRTtFQUpPLENBQUQsQ0FyRlgsRUEyRkxGLGdCQUFnQixDQUFDO0lBQ2Z2RSxFQUFFLEVBQUUsc0NBRFc7SUFFZndFLFdBQVcsRUFBRSxxQ0FGRTtJQUdmNUQsSUFBSSxFQUFFLGtDQUhTO0lBSWY2RCxNQUFNLEVBQUU7RUFKTyxDQUFELENBM0ZYLEVBaUdMRixnQkFBZ0IsQ0FBQztJQUNmdkUsRUFBRSxFQUFFLGdDQURXO0lBRWZ3RSxXQUFXLEVBQUUseUJBRkU7SUFHZjVELElBQUksRUFBRSxjQUhTO0lBSWY2RCxNQUFNLEVBQUU7RUFKTyxDQUFELENBakdYLENBQVA7QUF3R0Q7O0FBRUQsU0FBU2xCLDRCQUFULEdBQThEO0VBQzVELE9BQU87SUFDTHZELEVBQUUsRUFBRSxRQURDO0lBRUxZLElBQUksRUFBRSxlQUZEO0lBR0w3QyxJQUFJLEVBQUV5RSxnRUFIRDtJQUlMa0MsTUFBTSxFQUFFLFNBSkg7SUFLTEMsT0FBTyxFQUFFLEVBTEo7SUFNTHZCLElBQUksRUFBRTtNQUNKb0IsV0FBVyxFQUFFLHVDQURUO01BRUpJLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUsNkJBQVQ7UUFBd0NDLEtBQUssRUFBRTtNQUEvQyxDQUZIO01BR0pDLE1BQU0sRUFBRTtRQUFFbkUsSUFBSSxFQUFFO01BQVIsQ0FISjtNQUlKeUMsS0FBSyxFQUFFLENBQ0w7UUFDRTNELEdBQUcsRUFBRSxxQ0FEUDtRQUVFa0IsSUFBSSxFQUFFO01BRlIsQ0FESyxDQUpIO01BVUpvRSxXQUFXLEVBQUUsRUFWVDtNQVdKQyxPQUFPLEVBQUUsWUFYTDtNQVlKQyxPQUFPLEVBQUU7SUFaTDtFQU5ELENBQVA7QUFxQkQ7O0FBU0QsU0FBU1gsZ0JBQVQsQ0FBMEJZLE9BQTFCLEVBQWtGO0VBQ2hGLE9BQU87SUFDTG5GLEVBQUUsRUFBRW1GLE9BQU8sQ0FBQ25GLEVBRFA7SUFFTFksSUFBSSxFQUFFdUUsT0FBTyxDQUFDdkUsSUFGVDtJQUdMN0MsSUFBSSxFQUFFeUUsZ0VBSEQ7SUFJTGtDLE1BQU0sRUFBRSxTQUpIO0lBS0xDLE9BQU8sRUFBRSxFQUxKO0lBTUx2QixJQUFJLEVBQUU7TUFDSm9CLFdBQVcsRUFBRVcsT0FBTyxDQUFDWCxXQURqQjtNQUVKSSxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFTSxPQUFPLENBQUNWLE1BQWpCO1FBQXlCSyxLQUFLLEVBQUVLLE9BQU8sQ0FBQ1Y7TUFBeEMsQ0FGSDtNQUdKTSxNQUFNLEVBQUU7UUFBRW5FLElBQUksRUFBRTtNQUFSLENBSEo7TUFJSnlDLEtBQUssRUFBRSxDQUNMO1FBQ0UzRCxHQUFHLEVBQUU5RixxRUFBQSxHQUEwQnVMLE9BQU8sQ0FBQ25GLEVBRHpDO1FBRUVZLElBQUksRUFBRTtNQUZSLENBREssQ0FKSDtNQVVKb0UsV0FBVyxFQUFFLEVBVlQ7TUFXSkMsT0FBTyxFQUFFLFlBWEw7TUFZSkMsT0FBTyxFQUFFO0lBWkw7RUFORCxDQUFQO0FBcUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlQRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLE1BQU1LLGFBQWEsR0FBRyxTQUF0QjtBQUVPLFNBQVNuSixhQUFULENBQXVCd0IsVUFBdkIsRUFBdURELE1BQXZELEVBQXNHO0VBQzNHLE1BQU02SCxVQUFVLEdBQUc3SCxNQUFNLENBQUMwQixJQUExQjtFQUNBLE1BQU1vRyxpQkFBaUIsR0FBRzdMLHdGQUExQjtFQUNBLE1BQU04TCxRQUFzQixHQUFHO0lBQzdCQyxHQUFHLEVBQUVILFVBQVUsQ0FBQ3BDLElBQVgsQ0FBZ0J3QixLQUFoQixDQUFzQkUsS0FERTtJQUU3QjlFLEVBQUUsRUFBRSxnQkFBZ0JwQyxVQUFVLENBQUNtQixHQUZGO0lBRzdCNkcsUUFBUSxFQUFHLFNBQVFKLFVBQVUsQ0FBQzVFLElBQUssRUFITjtJQUk3QmxCLEdBQUcsRUFBRSxFQUp3QjtJQUs3Qm1HLElBQUksRUFBRWpJLFVBQVUsQ0FBQ2dELElBTFk7SUFNN0JrRixXQUFXLEVBQUUsQ0FBQztNQUFFM0ssS0FBSyxFQUFFLGNBQVQ7TUFBeUJ1RSxHQUFHLEVBQUU7SUFBOUIsQ0FBRCxDQU5nQjtJQU83QnFHLFFBQVEsRUFBRSxDQUNSO01BQ0VDLE1BQU0sRUFBRSxLQURWO01BRUVDLElBQUksRUFBRSxlQUZSO01BR0VqRyxFQUFFLEVBQUcsdUJBQXNCcEMsVUFBVSxDQUFDbUIsR0FBSSxFQUg1QztNQUlFOEcsSUFBSSxFQUFFLFVBSlI7TUFLRW5HLEdBQUcsRUFBRyxvQkFBbUI5QixVQUFVLENBQUNtQixHQUFJO0lBTDFDLENBRFE7RUFQbUIsQ0FBL0I7O0VBa0JBLElBQUlwQixNQUFNLENBQUN1SSxXQUFYLEVBQXdCO0lBQ3RCLEtBQUssTUFBTUMsSUFBWCxJQUFtQnhJLE1BQU0sQ0FBQ3VJLFdBQTFCLEVBQXVDO01BQ3JDUixRQUFRLENBQUNLLFFBQVQsQ0FBbUIxRSxJQUFuQixDQUF3QjtRQUN0QjJFLE1BQU0sRUFBRSxLQURjO1FBRXRCSCxJQUFJLEVBQUVNLElBQUksQ0FBQ2hMLEtBRlc7UUFHdEI4SyxJQUFJLEVBQUVFLElBQUksQ0FBQ0YsSUFIVztRQUl0QnZHLEdBQUcsRUFBRyxvQkFBbUI5QixVQUFVLENBQUNtQixHQUFJLFVBQVNvSCxJQUFJLENBQUNuRyxFQUFHLEVBSm5DO1FBS3RCQSxFQUFFLEVBQUcsbUJBQWtCbUcsSUFBSSxDQUFDbkcsRUFBRztNQUxULENBQXhCO0lBT0Q7RUFDRjs7RUFFRCxJQUFJd0YsVUFBVSxDQUFDWSxRQUFYLElBQXVCQyxhQUFhLENBQUNiLFVBQVUsQ0FBQ1ksUUFBWixDQUFwQyxJQUE2RGxLLDZEQUFBLENBQW1CLE9BQW5CLENBQWpFLEVBQThGO0lBQzVGd0osUUFBUSxDQUFDSyxRQUFULENBQW1CMUUsSUFBbkIsQ0FBd0I7TUFDdEIyRSxNQUFNLEVBQUUsS0FEYztNQUV0QkMsSUFBSSxFQUFFLE1BRmdCO01BR3RCakcsRUFBRSxFQUFHLHlCQUF3QnBDLFVBQVUsQ0FBQ21CLEdBQUksRUFIdEI7TUFJdEI4RyxJQUFJLEVBQUUsWUFKZ0I7TUFLdEJuRyxHQUFHLEVBQUcsb0JBQW1COUIsVUFBVSxDQUFDbUIsR0FBSTtJQUxsQixDQUF4QjtFQU9EOztFQUVELE1BQU13SCxZQUFZLEdBQUczSSxVQUFVLENBQUNHLElBQVgsS0FBb0J3SCxhQUF6QztFQUVBLE1BQU1pQix1QkFBdUIsR0FBRyxrREFBaEM7RUFDQSxNQUFNQyxhQUEyQixHQUFHO0lBQ2xDVCxNQUFNLEVBQUUsS0FEMEI7SUFFbENDLElBQUksRUFBRSxNQUY0QjtJQUdsQ2pHLEVBQUUsRUFBRywwQkFBeUJwQyxVQUFVLENBQUNtQixHQUFJLEVBSFg7SUFJbEM4RyxJQUFJLEVBQUUsYUFKNEI7SUFLbENuRyxHQUFHLEVBQUcsb0JBQW1COUIsVUFBVSxDQUFDbUIsR0FBSTtFQUxOLENBQXBDOztFQVFBLElBQUk5RSw0REFBYyxNQUFNLENBQUNzTSxZQUF6QixFQUF1QztJQUNyQ0UsYUFBYSxDQUFDQyxTQUFkLEdBQTBCLE1BQU1yQiw4RUFBUSxDQUFDO01BQUVzQixZQUFZLEVBQUVILHVCQUFoQjtNQUF5Q0ksWUFBWSxFQUFFO0lBQXZELENBQUQsQ0FBeEM7RUFDRDs7RUFFRCxJQUFJbkUsZ0VBQWMsQ0FBQyxlQUFELENBQWxCLEVBQXFDO0lBQ25DLElBQUl2RyxtRUFBQSxDQUF5Qm9KLHFGQUF6QixDQUFKLEVBQThFO01BQzVFSSxRQUFRLENBQUNLLFFBQVQsQ0FBbUIxRSxJQUFuQixDQUF3Qm9GLGFBQXhCO0lBQ0Q7RUFDRixDQUpELE1BSU8sSUFBSWhCLGlCQUFpQixJQUFJLENBQUNjLFlBQTFCLEVBQXdDO0lBQzdDYixRQUFRLENBQUNLLFFBQVQsQ0FBbUIxRSxJQUFuQixtQkFDS29GLGFBREw7TUFFRS9HLEdBQUcsRUFBRStHLGFBQWEsQ0FBQy9HLEdBQWQsR0FBb0IsVUFGM0I7TUFHRWdILFNBQVMsRUFBRSxNQUFNckIsOEVBQVEsQ0FBQztRQUFFc0IsWUFBWSxFQUFFSDtNQUFoQixDQUFEO0lBSDNCO0VBS0Q7O0VBRUQsTUFBTU8scUJBQXFCLEdBQUcsK0NBQTlCO0VBQ0EsTUFBTUMsU0FBdUIsR0FBRztJQUM5QmhCLE1BQU0sRUFBRSxLQURzQjtJQUU5QkMsSUFBSSxFQUFFLGFBRndCO0lBRzlCakcsRUFBRSxFQUFHLHVCQUFzQnBDLFVBQVUsQ0FBQ21CLEdBQUksRUFIWjtJQUk5QjhHLElBQUksRUFBRSxVQUp3QjtJQUs5Qm5HLEdBQUcsRUFBRyxvQkFBbUI5QixVQUFVLENBQUNtQixHQUFJO0VBTFYsQ0FBaEM7O0VBUUEsSUFBSTlFLDREQUFjLE1BQU0sQ0FBQ3NNLFlBQXpCLEVBQXVDO0lBQ3JDUyxTQUFTLENBQUNOLFNBQVYsR0FBc0IsTUFBTXJCLDhFQUFRLENBQUM7TUFBRXNCLFlBQVksRUFBRUkscUJBQWhCO01BQXVDSCxZQUFZLEVBQUU7SUFBckQsQ0FBRCxDQUFwQztFQUNEOztFQUVELElBQUluRSxnRUFBYyxDQUFDLFdBQUQsQ0FBbEIsRUFBaUM7SUFDL0JpRCxRQUFRLENBQUNLLFFBQVQsQ0FBbUIxRSxJQUFuQixDQUF3QjJGLFNBQXhCO0VBQ0QsQ0FGRCxNQUVPLElBQUl2QixpQkFBaUIsSUFBSSxDQUFDYyxZQUExQixFQUF3QztJQUM3Q2IsUUFBUSxDQUFDSyxRQUFULENBQW1CMUUsSUFBbkIsbUJBQ0syRixTQURMO01BRUV0SCxHQUFHLEVBQUVzSCxTQUFTLENBQUN0SCxHQUFWLEdBQWdCLFVBRnZCO01BR0VnSCxTQUFTLEVBQUUsTUFBTXJCLDhFQUFRLENBQUM7UUFBRXNCLFlBQVksRUFBRUk7TUFBaEIsQ0FBRDtJQUgzQjtFQUtEOztFQUVELE1BQU1FLG1CQUFtQixHQUFHLHdDQUE1QjtFQUVBLE1BQU1DLE9BQXFCLEdBQUc7SUFDNUJsQixNQUFNLEVBQUUsS0FEb0I7SUFFNUJDLElBQUksRUFBRSxVQUZzQjtJQUc1QmpHLEVBQUUsRUFBRyxvQkFBbUJwQyxVQUFVLENBQUNtQixHQUFJLEVBSFg7SUFJNUI4RyxJQUFJLEVBQUUsT0FKc0I7SUFLNUJuRyxHQUFHLEVBQUcsb0JBQW1COUIsVUFBVSxDQUFDbUIsR0FBSSxRQUxaO0lBTTVCb0ksWUFBWSxFQUFFLENBQUMzQixVQUFVLENBQUN0RyxTQUFaLElBQXlCLENBQUN0Rix1RUFBc0I2SDtFQU5sQyxDQUE5Qjs7RUFTQSxJQUFJeEgsNERBQWMsTUFBTSxDQUFDc00sWUFBekIsRUFBdUM7SUFDckNXLE9BQU8sQ0FBQ1IsU0FBUixHQUFvQixNQUFNckIsOEVBQVEsQ0FBQztNQUFFc0IsWUFBWSxFQUFFTSxtQkFBaEI7TUFBcUNMLFlBQVksRUFBRTtJQUFuRCxDQUFELENBQWxDO0VBQ0Q7O0VBRUQsSUFBSW5FLGdFQUFjLENBQUMsU0FBRCxDQUFsQixFQUErQjtJQUM3QmlELFFBQVEsQ0FBQ0ssUUFBVCxDQUFtQjFFLElBQW5CLENBQXdCNkYsT0FBeEI7RUFDRCxDQUZELE1BRU8sSUFBSXpCLGlCQUFpQixJQUFJLENBQUNjLFlBQTFCLEVBQXdDO0lBQzdDYixRQUFRLENBQUNLLFFBQVQsQ0FBbUIxRSxJQUFuQixtQkFDSzZGLE9BREw7TUFFRXhILEdBQUcsRUFBRXdILE9BQU8sQ0FBQ3hILEdBQVIsR0FBYyxVQUZyQjtNQUdFZ0gsU0FBUyxFQUFFLE1BQU1yQiw4RUFBUSxDQUFDO1FBQUVzQixZQUFZLEVBQUVNO01BQWhCLENBQUQ7SUFIM0I7RUFLRDs7RUFFRCxPQUFPdkIsUUFBUDtBQUNEO0FBRU0sU0FBUzBCLGdCQUFULENBQTBCQyxJQUExQixFQUE4Q0MsUUFBOUMsRUFBMEU7RUFDL0UsSUFBSUMsSUFBa0IsR0FBRztJQUFFMUIsSUFBSSxFQUFFO0VBQVIsQ0FBekIsQ0FEK0UsQ0FHL0U7O0VBQ0EsS0FBSyxNQUFNMkIsS0FBWCxJQUFvQkgsSUFBSSxDQUFDdEIsUUFBekIsRUFBb0M7SUFDbEMsSUFBSXlCLEtBQUssQ0FBQ3hILEVBQU4sQ0FBVXlILE9BQVYsQ0FBa0JILFFBQWxCLElBQThCLENBQWxDLEVBQXFDO01BQ25DRSxLQUFLLENBQUN4QixNQUFOLEdBQWUsSUFBZjtNQUNBdUIsSUFBSSxHQUFHQyxLQUFQO01BQ0E7SUFDRDtFQUNGOztFQUVELE9BQU87SUFDTEgsSUFBSSxFQUFFQSxJQUREO0lBRUxFLElBQUksRUFBRUE7RUFGRCxDQUFQO0FBSUQ7QUFDTSxTQUFTRyx1QkFBVCxDQUFpQ0osUUFBakMsRUFBNkQ7RUFDbEUsTUFBTUQsSUFBSSxHQUFHakwsYUFBYSxDQUN4QjtJQUNFeUUsTUFBTSxFQUFFLEVBRFY7SUFFRThHLFNBQVMsRUFBRSxLQUZiO0lBR0VDLGFBQWEsRUFBRSxFQUhqQjtJQUlFQyxlQUFlLEVBQUUsS0FKbkI7SUFLRUMsUUFBUSxFQUFFLEVBTFo7SUFNRTlILEVBQUUsRUFBRSxDQU5OO0lBT0VqQixHQUFHLEVBQUUsR0FQUDtJQVFFK0IsU0FBUyxFQUFFLEtBUmI7SUFTRWlILFFBQVEsRUFBRTtNQUFFQyxRQUFRLEVBQUUsYUFBWjtNQUEyQkMsYUFBYSxFQUFFO0lBQTFDLENBVFo7SUFVRXJILElBQUksRUFBRSxTQVZSO0lBV0VzSCxLQUFLLEVBQUUsQ0FYVDtJQVlFQyxRQUFRLEVBQUUsS0FaWjtJQWFFcEssSUFBSSxFQUFFd0gsYUFiUjtJQWNFNkMsUUFBUSxFQUFFN0MsYUFkWjtJQWVFOEMsV0FBVyxFQUFFLCtCQWZmO0lBZ0JFM0ksR0FBRyxFQUFFLEVBaEJQO0lBaUJFNEksSUFBSSxFQUFFLEVBakJSO0lBa0JFQyxnQkFBZ0IsRUFBRTtFQWxCcEIsQ0FEd0IsRUFxQnhCO0lBQ0VsSixJQUFJLEVBQUU7TUFDSlcsRUFBRSxFQUFFLEdBREE7TUFFSmpDLElBQUksRUFBRXlFLGdFQUZGO01BR0o1QixJQUFJLEVBQUUsRUFIRjtNQUlKd0MsSUFBSSxFQUFFO1FBQ0oyQixNQUFNLEVBQUU7VUFDTm5FLElBQUksRUFBRSxFQURBO1VBRU5sQixHQUFHLEVBQUU7UUFGQyxDQURKO1FBS0o4RSxXQUFXLEVBQUUsRUFMVDtRQU1KbkIsS0FBSyxFQUFFLENBQUM7VUFBRXpDLElBQUksRUFBRSxFQUFSO1VBQVlsQixHQUFHLEVBQUU7UUFBakIsQ0FBRCxDQU5IO1FBT0prRixLQUFLLEVBQUU7VUFDTEUsS0FBSyxFQUFFLEVBREY7VUFFTEQsS0FBSyxFQUFFO1FBRkYsQ0FQSDtRQVdKRyxXQUFXLEVBQUUsRUFYVDtRQVlKQyxPQUFPLEVBQUUsRUFaTDtRQWFKQyxPQUFPLEVBQUU7TUFiTCxDQUpGO01BbUJKa0IsUUFBUSxFQUFFLEVBbkJOO01Bb0JKMUIsTUFBTSxFQUFFLEVBcEJKO01BcUJKQyxPQUFPLEVBQUU7SUFyQkw7RUFEUixDQXJCd0IsQ0FBMUI7RUFnREEsT0FBT3lDLGdCQUFnQixDQUFDQyxJQUFELEVBQU9DLFFBQVAsQ0FBdkI7QUFDRDs7QUFFRCxTQUFTakIsYUFBVCxDQUF1QkQsUUFBdkIsRUFBMkQ7RUFDekQsT0FDRUEsUUFBUSxDQUFDbkQsSUFBVCxDQUFldUYsT0FBRCxJQUFhO0lBQ3pCLE9BQU9BLE9BQU8sQ0FBQ3pLLElBQVIsS0FBaUIsV0FBeEI7RUFDRCxDQUZELE1BRU8wSyxTQUhUO0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU1NLE1BQU1DLGNBQWMsR0FBSUMsS0FBRCxJQUE2QjtFQUN6RCxNQUFNQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXRixLQUFLLENBQUNHLFdBQWpCLEVBQThCLEdBQTlCLENBQWQ7RUFFQSxPQUFPSCxLQUFLLENBQUM5SyxXQUFOLENBQWtCa0UsTUFBbEIsQ0FBMEJuRSxVQUFELElBQW9DO0lBQ2xFLE9BQU9nTCxLQUFLLENBQUNHLElBQU4sQ0FBV25MLFVBQVUsQ0FBQ2dELElBQXRCLEtBQStCZ0ksS0FBSyxDQUFDRyxJQUFOLENBQVduTCxVQUFVLENBQUNrSyxRQUF0QixDQUEvQixJQUFrRWMsS0FBSyxDQUFDRyxJQUFOLENBQVduTCxVQUFVLENBQUNHLElBQXRCLENBQXpFO0VBQ0QsQ0FGTSxDQUFQO0FBR0QsQ0FOTTtBQVFBLE1BQU1pTCxvQkFBb0IsR0FBSUwsS0FBRCxJQUE2QjtFQUMvRCxNQUFNQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXRixLQUFLLENBQUNNLHlCQUFqQixFQUE0QyxHQUE1QyxDQUFkO0VBRUEsT0FBT04sS0FBSyxDQUFDbkgsT0FBTixDQUFjTyxNQUFkLENBQXNCaEUsSUFBRCxJQUFnQztJQUMxRCxPQUFPNkssS0FBSyxDQUFDRyxJQUFOLENBQVdoTCxJQUFJLENBQUM2QyxJQUFoQixDQUFQO0VBQ0QsQ0FGTSxDQUFQO0FBR0QsQ0FOTTtBQVFBLE1BQU03RCxhQUFhLEdBQUcsQ0FBQzRMLEtBQUQsRUFBMEJPLFlBQTFCLEtBQThFO0VBQ3pHLElBQUlQLEtBQUssQ0FBQy9LLFVBQU4sQ0FBaUJtQixHQUFqQixLQUF5Qm1LLFlBQTdCLEVBQTJDO0lBQ3pDLE9BQU9QLEtBQUssQ0FBQy9LLFVBQWI7RUFDRDs7RUFDRCxPQUFPLEVBQVA7QUFDRCxDQUxNO0FBT0EsTUFBTVosaUJBQWlCLEdBQUcsQ0FBQzJMLEtBQUQsRUFBMEI1SyxJQUExQixLQUFpRTtFQUNoRyxJQUFJNEssS0FBSyxDQUFDN0ssY0FBTixDQUFxQmtDLEVBQXJCLEtBQTRCakMsSUFBaEMsRUFBc0M7SUFDcEMsT0FBTzRLLEtBQUssQ0FBQzdLLGNBQWI7RUFDRDs7RUFFRCxPQUFPLEVBQVA7QUFDRCxDQU5NO0FBUUEsTUFBTXFMLHlCQUF5QixHQUFJUixLQUFELElBQTZCQSxLQUFLLENBQUNHLFdBQXJFO0FBQ0EsTUFBTU0sd0JBQXdCLEdBQUlULEtBQUQsSUFBNkJBLEtBQUssQ0FBQ1UsVUFBcEU7QUFDQSxNQUFNQyxtQkFBbUIsR0FBSVgsS0FBRCxJQUE2QkEsS0FBSyxDQUFDWSxnQkFBL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFXTyxNQUFNTyxvQkFBTixTQUFtQ0gsZ0RBQW5DLENBQStEO0VBRXBFO0VBR0E7RUFJQUksV0FBVyxDQUFDQyxLQUFELEVBQWU7SUFDeEIsTUFBTUEsS0FBTjs7SUFEd0IsaUNBUkksSUFRSjs7SUFBQTs7SUFBQSx1Q0FIVixNQUFNQyxPQUFPLENBQUNDLE9BQVIsRUFHSTs7SUFBQSx3Q0FGVCxNQUFNRCxPQUFPLENBQUNDLE9BQVIsRUFFRzs7SUFBQSxnQ0F3RWpCLE1BQU07TUFDYixNQUFNQyxRQUFRLEdBQUcsS0FBS0MsS0FBTCxDQUFXcEssRUFBNUI7TUFFQSxLQUFLcUssYUFBTCxHQUNHQyxJQURILENBQ1EsTUFBTTtRQUNWLE1BQU1DLFNBQVMsR0FBR2IsOENBQU0sQ0FDdEI7VUFDRWpJLE9BQU8sRUFBRSxLQUFLMkksS0FBTCxDQUFXM0ksT0FEdEI7VUFFRStJLE1BQU0sRUFBRSxLQUFLSixLQUFMLENBQVdJLE1BRnJCO1VBR0V6QyxRQUFRLEVBQUUsS0FBS3FDLEtBQUwsQ0FBV3JDLFFBSHZCO1VBSUUwQyxjQUFjLEVBQUUsS0FBS0wsS0FBTCxDQUFXSztRQUo3QixDQURzQixFQU90QixFQVBzQixDQUF4QjtRQVNBLE9BQU81TywrREFBYSxHQUFHcUYsSUFBaEIsQ0FBc0IsZ0JBQWVpSixRQUFTLFdBQTlDLEVBQTBESSxTQUExRCxDQUFQO01BQ0QsQ0FaSCxFQWFHRCxJQWJILENBYVEsS0FBS0ksY0FiYixFQWNHSixJQWRILENBY1NLLEdBQUQsSUFBUztRQUNidEssTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkYsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUF2QztNQUNELENBaEJIO0lBaUJELENBNUZ5Qjs7SUFBQSwwQ0E4Rk5xSyxRQUFELElBQXlCO01BQzFDLEtBQUtQLGFBQUwsR0FBcUJPLFFBQXJCO0lBQ0QsQ0FoR3lCOztJQUFBLDJDQWtHTEEsUUFBRCxJQUF5QjtNQUMzQyxLQUFLRixjQUFMLEdBQXNCRSxRQUF0QjtJQUNELENBcEd5Qjs7SUFBQSwwQ0F1R1AsTUFBcUI7TUFDdENoQixpRUFBa0IsQ0FBQyxXQUFELEVBQWMsb0JBQWQsQ0FBbEI7TUFDQSxPQUFPSyxPQUFPLENBQUNDLE9BQVIsRUFBUDtJQUNELENBMUd5Qjs7SUFBQSxnQ0E0R2pCLE1BQU07TUFDYixLQUFLRSxLQUFMLENBQVczSSxPQUFYLEdBQXFCLElBQXJCO01BQ0EsS0FBSzJJLEtBQUwsQ0FBV0ksTUFBWCxHQUFvQixJQUFwQjtNQUNBLEtBQUtLLE1BQUw7SUFDRCxDQWhIeUI7O0lBQUEsaUNBa0hoQixNQUFNO01BQ2QsS0FBS1QsS0FBTCxDQUFXM0ksT0FBWCxHQUFxQixLQUFyQjtNQUNBLEtBQUsySSxLQUFMLENBQVdJLE1BQVgsR0FBb0IsS0FBcEI7TUFDQSxLQUFLSyxNQUFMO0lBQ0QsQ0F0SHlCOztJQUV4QixLQUFLbEMsS0FBTCxHQUFhO01BQ1htQyxXQUFXLEVBQUUsSUFERjtNQUVYQyxPQUFPLEVBQUU7SUFGRSxDQUFiO0VBSUQ7O0VBRURDLGlCQUFpQixHQUFHO0lBQ2xCO0lBQ0FDLFVBQVUsQ0FBQyxNQUFNO01BQ2YsS0FBS0MsUUFBTCxDQUFjO1FBQUVILE9BQU8sRUFBRSxLQUFLcEMsS0FBTCxDQUFXb0MsT0FBWCxHQUFxQjtNQUFoQyxDQUFkO0lBQ0QsQ0FGUyxFQUVQLENBRk8sQ0FBVjtFQUdEOztFQUVESSxrQkFBa0IsQ0FBQ0MsU0FBRCxFQUFtQjtJQUNuQyxJQUFJLENBQUMsS0FBS0MsT0FBTixJQUFpQixLQUFLMUMsS0FBTCxDQUFXbUMsV0FBaEMsRUFBNkM7TUFDM0M7SUFDRCxDQUhrQyxDQUtuQzs7O0lBQ0EsS0FBS1YsS0FBTCxHQUFhWCxpREFBUyxDQUFDLEtBQUtPLEtBQUwsQ0FBV3NCLEdBQVgsQ0FBZWpNLElBQWhCLENBQXRCO0lBRUEsTUFBTWtNLE1BQU0sR0FBRzFCLGtFQUFnQixFQUEvQjtJQUNBLE1BQU0yQixRQUFRLEdBQUcsOERBQWpCO0lBQ0EsTUFBTUMsVUFBVSxHQUFHO01BQ2pCQyxJQUFJLEVBQUUsSUFEVztNQUVqQjtNQUNBQyxlQUFlLEVBQUU7SUFIQSxDQUFuQjtJQUtBLE1BQU1iLFdBQVcsR0FBR1MsTUFBTSxDQUFDSyxJQUFQLENBQVksS0FBS1AsT0FBakIsRUFBMEJJLFVBQTFCLEVBQXNDRCxRQUF0QyxDQUFwQjtJQUVBLEtBQUtOLFFBQUwsQ0FBYztNQUFFSjtJQUFGLENBQWQ7RUFDRDs7RUFFRGUsTUFBTSxHQUFHO0lBQ1AsTUFBTXpCLEtBQUssR0FBRyxLQUFLQSxLQUFuQjtJQUVBLE1BQU0wQixlQUFlLEdBQUd0QyxpREFBRyxDQUFDO01BQUV1QyxXQUFXLEVBQUU7SUFBZixDQUFELENBQTNCO0lBRUEsb0JBQ0U7TUFBQSx3QkFDRTtRQUFLLEdBQUcsRUFBR1YsT0FBRCxJQUFjLEtBQUtBLE9BQUwsR0FBZUE7TUFBdkMsRUFERiw2QkFFRSxnRUFGRixnQ0FHRSxnRUFIRixHQUlHakIsS0FBSyxpQkFDSjtRQUFLLFNBQVMsRUFBQyxTQUFmO1FBQUEsV0FDRyxDQUFDQSxLQUFLLENBQUMzSSxPQUFQLGlCQUNDLHVEQUFDLCtDQUFEO1VBQVEsT0FBTyxFQUFDLFNBQWhCO1VBQTBCLE9BQU8sRUFBRSxLQUFLdUssTUFBeEM7VUFBZ0QsU0FBUyxFQUFFRixlQUEzRDtVQUFBO1FBQUEsRUFGSixFQU1HMUIsS0FBSyxDQUFDM0ksT0FBTixpQkFDQyx1REFBQywrQ0FBRDtVQUFRLE9BQU8sRUFBQyxTQUFoQjtVQUEwQixPQUFPLEVBQUUsS0FBS29KLE1BQXhDO1VBQWdELFNBQVMsRUFBRWlCLGVBQTNEO1VBQUE7UUFBQSxFQVBKLEVBV0cxQixLQUFLLENBQUMzSSxPQUFOLGlCQUNDLHVEQUFDLCtDQUFEO1VBQVEsT0FBTyxFQUFDLGFBQWhCO1VBQThCLE9BQU8sRUFBRSxLQUFLd0ssT0FBNUM7VUFBcUQsU0FBUyxFQUFFSCxlQUFoRTtVQUFBO1FBQUEsRUFaSjtNQUFBLEVBTEo7SUFBQSxFQURGO0VBMEJELENBM0VtRSxDQTZFcEU7RUFDQTtFQUNBOzs7QUEvRW9FOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnRFO0FBRUE7QUFDQTs7QUFJTyxTQUFTTSxtQkFBVCxDQUE2QjtFQUFFQztBQUFGLENBQTdCLEVBQW1FO0VBQ3hFLE1BQU1DLE9BQU8sR0FBR0Msa0JBQWtCLENBQUNGLEtBQUQsQ0FBbEM7RUFDQSxvQkFBTyx1REFBQyw4Q0FBRDtJQUFPLElBQUksRUFBQyxzQkFBWjtJQUFtQyxJQUFJLEVBQUMsVUFBeEM7SUFBbUQsS0FBSyxFQUFDLEtBQXpEO0lBQStELE9BQU8sRUFBRUM7RUFBeEUsRUFBUDtBQUNEOztBQUVELFNBQVNDLGtCQUFULENBQTRCRixLQUE1QixFQUF5RTtFQUN2RSxRQUFRQSxLQUFSO0lBQ0UsS0FBS0gsNEVBQUw7TUFDRSxPQUFPLHlDQUFQOztJQUNGLEtBQUtBLDJFQUFMO01BQ0UsT0FBTyxpREFBUDs7SUFDRixLQUFLQSwyRUFBTDtNQUNFLE9BQU8saURBQVA7O0lBQ0Y7TUFDRSxPQUFRLHdDQUF1Q0csS0FBTSxFQUFyRDtFQVJKO0FBVUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUVBO0FBQ0E7QUFJQTs7O0FBSU8sU0FBU1UscUJBQVQsQ0FBK0I7RUFBRXBQO0FBQUYsQ0FBL0IsRUFBc0U7RUFDM0UsTUFBTXFQLGlCQUFpQixHQUFHSCx1REFBVSxDQUFDQyx3REFBRCxDQUFwQzs7RUFDQSxNQUFNRyxPQUFPLEdBQUlDLEVBQUQsSUFBeUQ7SUFDdkVBLEVBQUUsQ0FBQ0MsY0FBSDtJQUNBOU0sTUFBTSxDQUFDK00sSUFBUCxDQUNHLHVDQUFzQ3pQLE1BQU0sQ0FBQ3FDLEVBQUcsd0NBRG5ELEVBRUUsUUFGRixFQUdFLHFCQUhGO0VBS0QsQ0FQRDs7RUFTQSxJQUFJeUMsZ0VBQWMsQ0FBQyxvQkFBRCxDQUFsQixFQUEwQztJQUN4Qyx3Q0FBTyx1REFBQyw4Q0FBRDtNQUFPLElBQUksRUFBQyxZQUFaO01BQXlCLEtBQUssRUFBQztJQUEvQixFQUFQO0VBQ0Q7O0VBRUQsb0JBQ0Usd0RBQUMsd0RBQUQ7SUFBQSx3QkFDRSx1REFBQyw2REFBRDtNQUFzQixNQUFNLEVBQUU5RSxNQUFNLENBQUMwUDtJQUFyQyxFQURGLGVBRUUsdURBQUMsOENBQUQ7TUFBTyxJQUFJLEVBQUMsTUFBWjtNQUFtQixjQUFXLFdBQTlCO01BQTBDLElBQUksRUFBQyxZQUEvQztNQUE0RCxLQUFLLEVBQUMsTUFBbEU7TUFBeUUsU0FBUyxFQUFFTDtJQUFwRixFQUZGLGVBR0UsdURBQUMsK0NBQUQ7TUFBUSxJQUFJLEVBQUMsSUFBYjtNQUFrQixJQUFJLEVBQUMsTUFBdkI7TUFBOEIsSUFBSSxFQUFDLG1CQUFuQztNQUF1RCxPQUFPLEVBQUVDLE9BQWhFO01BQUE7SUFBQSxFQUhGO0VBQUEsRUFERjtBQVNEOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFFQTtBQUVBOztBQUVPLFNBQVNLLG9CQUFULEdBQW9EO0VBQ3pELE1BQU1OLGlCQUFpQixHQUFHSCx1REFBVSxDQUFDQyx3REFBRCxDQUFwQztFQUNBLG9CQUFPLHVEQUFDLDhDQUFEO0lBQU8sSUFBSSxFQUFDLFdBQVo7SUFBd0IsS0FBSyxFQUFDLFFBQTlCO0lBQXVDLFNBQVMsRUFBRUU7RUFBbEQsRUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1REO0FBQ0E7QUFFQTtBQUNBOztBQVFPLFNBQVNPLDBCQUFULENBQW9DO0VBQUU1UDtBQUFGLENBQXBDLEVBQWtGO0VBQ3ZGLE1BQU02UCxNQUFNLEdBQUdYLHVEQUFVLENBQUNZLFNBQUQsQ0FBekIsQ0FEdUYsQ0FHdkY7O0VBQ0EsSUFBSTlQLE1BQU0sQ0FBQytQLFNBQVAsSUFBb0IsQ0FBQy9QLE1BQU0sQ0FBQ2dRLE1BQTVCLElBQXNDaFEsTUFBTSxDQUFDSSxJQUFQLEtBQWdCeUUsOERBQTFELEVBQStFO0lBQzdFLG9CQUFPO01BQUcsU0FBUyxFQUFFZ0wsTUFBTSxDQUFDRSxTQUFyQjtNQUFBO0lBQUEsRUFBUDtFQUNEOztFQUVELE9BQU8sSUFBUDtBQUNEO0FBRU0sTUFBTUQsU0FBUyxHQUFJSSxLQUFELElBQTBCO0VBQ2pELE9BQU87SUFDTEgsU0FBUyxFQUFFbEUsNkNBQUk7QUFDbkIsZUFBZXFFLEtBQUssQ0FBQ0MsTUFBTixDQUFhakksSUFBYixDQUFrQmtJLFNBQVU7QUFDM0MsbUJBQW1CRixLQUFLLENBQUNHLFVBQU4sQ0FBaUJDLFNBQWpCLENBQTJCQyxRQUFTO0FBQ3ZEO0FBQ0E7RUFMUyxDQUFQO0FBT0QsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBSU8sTUFBTXBCLGFBQWEsR0FBSWUsS0FBRCxJQUEwQnJFLDZDQUFJO0FBQzNELGdCQUFnQnFFLEtBQUssQ0FBQ0MsTUFBTixDQUFhSyxVQUFiLENBQXdCQyxPQUFRO0FBQ2hELGtCQUFrQlAsS0FBSyxDQUFDQyxNQUFOLENBQWFPLE1BQWIsQ0FBb0JDLE1BQU87QUFDN0MsV0FBV1QsS0FBSyxDQUFDQyxNQUFOLENBQWFqSSxJQUFiLENBQWtCa0ksU0FBVTtBQUN2QyxDQUpPOzs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFHQTtBQUVBO0FBQ0E7Ozs7QUFPTyxTQUFTVSxpQkFBVCxDQUEyQjtFQUFFOVE7QUFBRixDQUEzQixFQUF5RTtFQUM5RSxNQUFNO0lBQUUrUSxLQUFLLEVBQUVDO0VBQVQsSUFBMEJILHVFQUFlLENBQUM3USxNQUFELENBQS9DOztFQUVBLElBQUksQ0FBQ2dSLFlBQUwsRUFBbUI7SUFDakIsT0FBTyxJQUFQO0VBQ0Q7O0VBRUQsTUFBTTtJQUFFbE4sT0FBRjtJQUFXc0c7RUFBWCxJQUF3QjRHLFlBQXhCLGFBQXdCQSxZQUF4Qix1QkFBd0JBLFlBQVksQ0FBRXRQLElBQTVDOztFQUVBLE1BQU0yTSxNQUFNLEdBQUcsTUFDYjRDLDZCQUE2QixDQUFDalIsTUFBTSxDQUFDcUMsRUFBUixFQUFZO0lBQ3ZDeUIsT0FBTyxFQUFFLElBRDhCO0lBRXZDK0ksTUFBTSxFQUFFLElBRitCO0lBR3ZDekM7RUFIdUMsQ0FBWixDQUQvQjs7RUFPQSxNQUFNa0UsT0FBTyxHQUFHLE1BQU07SUFDcEIyQyw2QkFBNkIsQ0FBQ2pSLE1BQU0sQ0FBQ3FDLEVBQVIsRUFBWTtNQUN2Q3lCLE9BQU8sRUFBRSxLQUQ4QjtNQUV2QytJLE1BQU0sRUFBRSxLQUYrQjtNQUd2Q3pDO0lBSHVDLENBQVosQ0FBN0I7RUFLRCxDQU5EOztFQVFBLG9CQUNFO0lBQUEsV0FDRyxDQUFDdEcsT0FBRCxpQkFDQyx1REFBQywrQ0FBRDtNQUFRLE9BQU8sRUFBQyxTQUFoQjtNQUEwQixPQUFPLEVBQUV1SyxNQUFuQztNQUFBO0lBQUEsRUFGSixFQU9HdkssT0FBTyxpQkFDTix1REFBQywrQ0FBRDtNQUFRLE9BQU8sRUFBQyxhQUFoQjtNQUE4QixPQUFPLEVBQUV3SyxPQUF2QztNQUFBO0lBQUEsRUFSSjtFQUFBLEVBREY7QUFlRDs7QUFFRCxNQUFNMkMsNkJBQTZCLEdBQUcsT0FBTzVPLEVBQVAsRUFBbUJyQixJQUFuQixLQUFpRDtFQUNyRixJQUFJO0lBQ0YsTUFBTTRQLDBEQUFvQixDQUFDdk8sRUFBRCxFQUFLckIsSUFBTCxDQUExQixDQURFLENBR0Y7O0lBQ0EwQixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JhLE1BQWhCO0VBQ0QsQ0FMRCxDQUtFLE9BQU8wTixDQUFQLEVBQVU7SUFDVi9PLE9BQU8sQ0FBQ3VNLEtBQVIsQ0FBYyxpQ0FBZCxFQUFpRHdDLENBQWpEO0VBQ0Q7QUFDRixDQVREOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBR0E7QUFDQTtBQUVBOztBQU9PLFNBQVNJLHdCQUFULENBQWtDO0VBQUV0UjtBQUFGLENBQWxDLEVBQWdGO0VBQ3JGLE1BQU1MLFFBQVEsR0FBR3lSLHdEQUFXLEVBQTVCO0VBQ0EsTUFBTUcsZUFBZSxHQUFHSixrREFBVyxDQUFDLE1BQU07SUFDeEMsTUFBTXpQLElBQUksR0FBRztNQUNYdUIsSUFBSSxFQUFFakQsTUFBTSxDQUFDaUQsSUFERjtNQUVYWixFQUFFLEVBQUVyQyxNQUFNLENBQUNxQztJQUZBLENBQWI7SUFLQTFDLFFBQVEsQ0FBQ21ELHFGQUFhLENBQUNwQixJQUFELENBQWQsQ0FBUjtFQUNELENBUGtDLEVBT2hDLENBQUMvQixRQUFELEVBQVdLLE1BQVgsQ0FQZ0MsQ0FBbkM7O0VBU0EsSUFBSSxDQUFDcVIsZ0VBQWtCLEVBQXZCLEVBQTJCO0lBQ3pCLE9BQU8sSUFBUDtFQUNEOztFQUVELG9CQUNFLHdEQUFDLCtDQUFEO0lBQVEsT0FBTyxFQUFDLFNBQWhCO0lBQTBCLE9BQU8sRUFBRUUsZUFBbkM7SUFBQSx3QkFDWXZSLE1BQU0sQ0FBQ2lELElBRG5CO0VBQUEsRUFERjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENEO0FBRUE7QUFJQTtBQUNBOztBQU1PLFNBQVN1TyxvQkFBVCxDQUE4QjtFQUFFeFI7QUFBRixDQUE5QixFQUFzRTtFQUMzRSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3lSLFdBQVIsSUFBdUJ6UixNQUFNLENBQUMwUixVQUFsQyxFQUE4QztJQUM1QyxPQUFPLElBQVA7RUFDRDs7RUFFRCxRQUFRMVIsTUFBTSxDQUFDSSxJQUFmO0lBQ0UsS0FBS3lFLGdFQUFMO01BQ0Usb0JBQU8sdURBQUMsK0VBQUQ7UUFBMEIsTUFBTSxFQUFFN0U7TUFBbEMsRUFBUDs7SUFDRixLQUFLNkUseURBQUw7TUFDRSxvQkFBTyx1REFBQyxpRUFBRDtRQUFtQixNQUFNLEVBQUU3RTtNQUEzQixFQUFQOztJQUNGO01BQ0UsT0FBTyxJQUFQO0VBTko7QUFRRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRTFCRDtBQUVBO0FBRUE7QUFDQTs7O0FBT08sU0FBUzhSLHVCQUFULENBQWlDO0VBQUV0RixRQUFGO0VBQVl1RjtBQUFaLENBQWpDLEVBQTJGO0VBQ2hHLE1BQU1DLGtCQUFrQixHQUFJLEdBQUVKLCtEQUFxQixDQUFDcEYsUUFBRCxDQUFXLG9CQUE5RDs7RUFFQSxJQUFJdUYsWUFBWSxLQUFLRix1REFBckIsRUFBMEM7SUFDeEMsb0JBQ0Usd0RBQUMsd0RBQUQ7TUFBaUIsTUFBTSxFQUFDLE1BQXhCO01BQUEsd0JBQ0UsdURBQUMsbURBQUQ7UUFBWSxJQUFJLEVBQUVHLGtCQUFsQjtRQUFzQyxNQUFNLEVBQUMsUUFBN0M7UUFBc0QsR0FBRyxFQUFDLHFCQUExRDtRQUFBO01BQUEsRUFERixlQUlFLHVEQUFDLG1EQUFEO1FBQVksT0FBTyxFQUFDLGFBQXBCO1FBQWtDLElBQUksRUFBRUEsa0JBQXhDO1FBQTRELE1BQU0sRUFBQyxRQUFuRTtRQUE0RSxHQUFHLEVBQUMscUJBQWhGO1FBQUE7TUFBQSxFQUpGO0lBQUEsRUFERjtFQVVEOztFQUVELElBQUlELFlBQVksS0FBS0YsMERBQXJCLEVBQTZDO0lBQzNDLG9CQUNFLHVEQUFDLG1EQUFEO01BQVksT0FBTyxFQUFDLGFBQXBCO01BQWtDLElBQUksRUFBRUcsa0JBQXhDO01BQTRELE1BQU0sRUFBQyxRQUFuRTtNQUE0RSxHQUFHLEVBQUMscUJBQWhGO01BQUE7SUFBQSxFQURGO0VBS0Q7O0VBRUQsb0JBQ0UsdURBQUMsbURBQUQ7SUFBWSxJQUFJLEVBQUVBLGtCQUFsQjtJQUFzQyxNQUFNLEVBQUMsUUFBN0M7SUFBc0QsR0FBRyxFQUFDLHFCQUExRDtJQUFBO0VBQUEsRUFERjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFPTyxNQUFNTyxlQUFlLEdBQUcsQ0FBQztFQUFFdlMsTUFBRjtFQUFVd1M7QUFBVixDQUFELEtBQWdEO0VBQzdFLE1BQU0zQyxNQUFNLEdBQUdYLHVEQUFVLENBQUNZLFNBQUQsQ0FBekI7RUFDQSxNQUFNMkMsbUJBQW1CLEdBQUd4VyxxRkFBNUI7RUFDQSxNQUFNaU4sYUFBYSxHQUFHa0osNERBQWMsRUFBcEM7RUFDQSxNQUFNTyx3QkFBd0IsR0FBR04seUVBQTJCLEVBQTVEO0VBQ0EsTUFBTU8sWUFBWSxHQUFHQyxPQUFPLENBQUNMLHVCQUFELENBQTVCO0VBQ0EsTUFBTU0seUJBQXlCLEdBQUc5UyxNQUFNLENBQUNnUSxNQUFQLElBQWlCaFEsTUFBTSxDQUFDMFIsVUFBeEIsSUFBc0MsQ0FBQ1Msa0VBQXdCLEVBQWpHO0VBRUEsTUFBTUosWUFBWSxHQUFHL1IsTUFBTSxDQUFDeVIsV0FBUCxHQUNqQnpSLE1BQU0sQ0FBQytQLFNBQVAsR0FDRThCLHVEQURGLEdBRUVBLDBEQUhlLEdBSWpCQSx3REFKSjs7RUFNQSxJQUFJaUIseUJBQUosRUFBK0I7SUFDN0IsT0FBTyxJQUFQO0VBQ0Q7O0VBRUQsSUFBSTlTLE1BQU0sQ0FBQ0ksSUFBUCxLQUFnQnlFLDhEQUFwQixFQUF5QztJQUN2QyxvQkFBTztNQUFLLFNBQVMsRUFBRWdMLE1BQU0sQ0FBQy9PLE9BQXZCO01BQUE7SUFBQSxFQUFQO0VBQ0Q7O0VBRUQsSUFBSWQsTUFBTSxDQUFDZ1QsWUFBUCxJQUF1QixDQUFDbE8sZ0VBQWMsQ0FBQyxvQkFBRCxDQUExQyxFQUFrRTtJQUNoRSxvQkFDRSx5REFBQyx3REFBRDtNQUFpQixNQUFNLEVBQUMsTUFBeEI7TUFBK0IsS0FBSyxFQUFDLFFBQXJDO01BQUEsd0JBQ0U7UUFBTSxTQUFTLEVBQUUrSyxNQUFNLENBQUMvTyxPQUF4QjtRQUFBO01BQUEsRUFERixlQUVFLHdEQUFDLG1EQUFEO1FBQ0UsSUFBSSxFQUFHLEdBQUU4USwrREFBcUIsQ0FBQzVSLE1BQU0sQ0FBQ3FDLEVBQVIsQ0FBWSx3Q0FENUM7UUFFRSxNQUFNLEVBQUMsUUFGVDtRQUdFLEdBQUcsRUFBQyxxQkFITjtRQUlFLElBQUksRUFBQyxJQUpQO1FBS0UsSUFBSSxFQUFDLE1BTFA7UUFNRSxJQUFJLEVBQUMsbUJBTlA7UUFBQTtNQUFBLEVBRkY7SUFBQSxFQURGO0VBZUQ7O0VBRUQsSUFBSXJDLE1BQU0sQ0FBQ2lULEtBQVgsRUFBa0I7SUFDaEIsb0JBQ0U7TUFBSyxTQUFTLEVBQUVwRCxNQUFNLENBQUMvTyxPQUF2QjtNQUFBO0lBQUEsRUFERjtFQUdEOztFQUVELElBQUksQ0FBQ29JLGFBQUQsSUFBa0IsQ0FBQ3VKLG1CQUF2QixFQUE0QztJQUMxQyxNQUFNM1IsT0FBTyxHQUFJLGlDQUFnQ2lSLFlBQWEsZUFBOUQ7SUFDQSxvQkFBTztNQUFLLFNBQVMsRUFBRWxDLE1BQU0sQ0FBQy9PLE9BQXZCO01BQUEsVUFBaUNBO0lBQWpDLEVBQVA7RUFDRDs7RUFFRCxJQUFJLENBQUNkLE1BQU0sQ0FBQ2tULFdBQVosRUFBeUI7SUFDdkIsb0JBQ0U7TUFBSyxTQUFTLEVBQUVyRCxNQUFNLENBQUMvTyxPQUF2QjtNQUFBLDBDQUNFLHdEQUFDLDZDQUFEO1FBQU0sSUFBSSxFQUFDO01BQVgsRUFERix1Q0FDdUUsR0FEdkUsMkJBRUU7UUFBRyxJQUFJLEVBQUMsaUNBQVI7UUFBMEMsTUFBTSxFQUFDLFNBQWpEO1FBQTJELEdBQUcsRUFBQyxZQUEvRDtRQUFBO01BQUEsRUFGRixHQUlPLEdBSlA7SUFBQSxFQURGO0VBU0Q7O0VBRUQsSUFBSSxDQUFDOFIsWUFBTCxFQUFtQjtJQUNqQixvQkFDRTtNQUFLLFNBQVMsRUFBRS9DLE1BQU0sQ0FBQy9PLE9BQXZCO01BQUEsNENBQ0Usd0RBQUMsNkNBQUQ7UUFBTSxJQUFJLEVBQUM7TUFBWCxFQURGO0lBQUEsRUFERjtFQU1EOztFQUVELElBQUkyUixtQkFBSixFQUF5QjtJQUN2QixvQkFBTyx3REFBQyw2RUFBRDtNQUF5QixRQUFRLEVBQUV6UyxNQUFNLENBQUNxQyxFQUExQztNQUE4QyxZQUFZLEVBQUUwUDtJQUE1RCxFQUFQO0VBQ0Q7O0VBRUQsSUFBSSxDQUFDWSx3QkFBTCxFQUErQjtJQUM3QixvQkFDRTtNQUFLLFNBQVMsRUFBRTlDLE1BQU0sQ0FBQy9PLE9BQXZCO01BQUE7SUFBQSxFQURGO0VBS0Q7O0VBRUQsb0JBQ0Usd0RBQUMsMEVBQUQ7SUFDRSxNQUFNLEVBQUVkLE1BRFY7SUFFRSxZQUFZLEVBQUUrUixZQUZoQjtJQUdFLHVCQUF1QixFQUFFUztFQUgzQixFQURGO0FBT0QsQ0EzRk07QUE2RkEsTUFBTTFDLFNBQVMsR0FBSUksS0FBRCxJQUEwQjtFQUNqRCxPQUFPO0lBQ0xwUCxPQUFPLEVBQUUrSyw2Q0FBSTtBQUNqQixlQUFlcUUsS0FBSyxDQUFDQyxNQUFOLENBQWFqSSxJQUFiLENBQWtCa0ksU0FBVTtBQUMzQztFQUhTLENBQVA7QUFLRCxDQU5NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSFA7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBUU8sU0FBU2tDLHFCQUFULENBQStCO0VBQUV0UyxNQUFGO0VBQVUrUixZQUFWO0VBQXdCUztBQUF4QixDQUEvQixFQUE4RztFQUNuSCxNQUFNO0lBQUVtQixZQUFGO0lBQWdCakYsS0FBSyxFQUFFa0Y7RUFBdkIsSUFBMkNMLDhEQUFnQixFQUFqRTtFQUNBLE1BQU07SUFBRU0sY0FBRjtJQUFrQm5GLEtBQUssRUFBRW9GO0VBQXpCLElBQStDTixnRUFBa0IsRUFBdkU7RUFDQSxNQUFNTyxPQUFPLEdBQUdOLHdEQUFVLEVBQTFCO0VBQ0EsTUFBTU8sU0FBUyxHQUFHTiwwREFBWSxFQUE5QjtFQUNBLE1BQU0sQ0FBQ08scUJBQUQsRUFBd0JDLHdCQUF4QixJQUFvRGYsK0NBQVEsQ0FBQyxLQUFELENBQWxFOztFQUNBLE1BQU1nQixnQkFBZ0IsR0FBRyxNQUFNRCx3QkFBd0IsQ0FBQyxJQUFELENBQXZEOztFQUNBLE1BQU1FLGdCQUFnQixHQUFHLE1BQU1GLHdCQUF3QixDQUFDLEtBQUQsQ0FBdkQ7O0VBQ0EsTUFBTUcsZ0JBQWdCLEdBQUdSLGNBQWMsR0FBRyxjQUFILEdBQW9CLFdBQTNEOztFQUVBLE1BQU1TLFNBQVMsR0FBRyxZQUFZO0lBQzVCLE1BQU1QLE9BQU8sQ0FBQy9ULE1BQU0sQ0FBQ3FDLEVBQVIsRUFBWW1RLHVCQUFaLGFBQVlBLHVCQUFaLHVCQUFZQSx1QkFBdUIsQ0FBRWpMLE9BQXJDLENBQWI7O0lBQ0EsSUFBSSxDQUFDcU0sZUFBTCxFQUFzQjtNQUNwQk4sZ0VBQUEsQ0FBZUYsaUVBQWYsRUFBdUMsQ0FBRSxhQUFZcFQsTUFBTSxDQUFDaUQsSUFBSyxFQUExQixDQUF2QztJQUNEO0VBQ0YsQ0FMRDs7RUFPQSxNQUFNd1IsV0FBVyxHQUFHLFlBQVk7SUFDOUJMLGdCQUFnQjtJQUNoQixNQUFNSixTQUFTLENBQUNoVSxNQUFNLENBQUNxQyxFQUFSLENBQWY7O0lBQ0EsSUFBSSxDQUFDeVIsaUJBQUwsRUFBd0I7TUFDdEJSLGdFQUFBLENBQWVGLGlFQUFmLEVBQXVDLENBQUUsZUFBY3BULE1BQU0sQ0FBQ2lELElBQUssRUFBNUIsQ0FBdkM7SUFDRDtFQUNGLENBTkQ7O0VBUUEsTUFBTXlSLFFBQVEsR0FBRyxZQUFZO0lBQzNCLE1BQU1YLE9BQU8sQ0FBQy9ULE1BQU0sQ0FBQ3FDLEVBQVIsRUFBWW1RLHVCQUFaLGFBQVlBLHVCQUFaLHVCQUFZQSx1QkFBdUIsQ0FBRWpMLE9BQXJDLEVBQThDLElBQTlDLENBQWI7O0lBQ0EsSUFBSSxDQUFDcU0sZUFBTCxFQUFzQjtNQUNwQk4sZ0VBQUEsQ0FBZUYsaUVBQWYsRUFBdUMsQ0FBRSxXQUFVcFQsTUFBTSxDQUFDaUQsSUFBSyxFQUF4QixDQUF2QztJQUNEO0VBQ0YsQ0FMRDs7RUFPQSxJQUFJOE8sWUFBWSxLQUFLRiwwREFBckIsRUFBNkM7SUFDM0Msb0JBQ0U7TUFBQSx3QkFDRSx1REFBQyxxREFBRDtRQUNFLE1BQU0sRUFBRW9DLHFCQURWO1FBRUUsS0FBSyxFQUFHLGFBQVlqVSxNQUFNLENBQUNpRCxJQUFLLEVBRmxDO1FBR0UsSUFBSSxFQUFDLGlEQUhQO1FBSUUsV0FBVyxFQUFDLFNBSmQ7UUFLRSxJQUFJLEVBQUMsc0JBTFA7UUFNRSxTQUFTLEVBQUV3UixXQU5iO1FBT0UsU0FBUyxFQUFFTDtNQVBiLEVBREYsZUFVRSx1REFBQyx3REFBRDtRQUFpQixNQUFNLEVBQUMsTUFBeEI7UUFBQSx1QkFDRSx1REFBQywrQ0FBRDtVQUFRLE9BQU8sRUFBQyxhQUFoQjtVQUE4QixRQUFRLEVBQUVQLGNBQXhDO1VBQXdELE9BQU8sRUFBRU0sZ0JBQWpFO1VBQUEsVUFDR0U7UUFESDtNQURGLEVBVkY7SUFBQSxFQURGO0VBa0JEOztFQUVELElBQUl0QyxZQUFZLEtBQUtGLHVEQUFyQixFQUEwQztJQUN4QyxvQkFDRSx3REFBQyx3REFBRDtNQUFpQixNQUFNLEVBQUMsTUFBeEI7TUFBQSx3QkFDRSx1REFBQywrQ0FBRDtRQUFRLFFBQVEsRUFBRThCLFlBQWxCO1FBQWdDLE9BQU8sRUFBRWUsUUFBekM7UUFBQSxVQUNHZixZQUFZLEdBQUcsVUFBSCxHQUFnQjtNQUQvQixFQURGLGVBSUUsdURBQUMsK0NBQUQ7UUFBUSxPQUFPLEVBQUMsYUFBaEI7UUFBOEIsUUFBUSxFQUFFRSxjQUF4QztRQUF3RCxPQUFPLEVBQUVZLFdBQWpFO1FBQUEsVUFDR0o7TUFESCxFQUpGO0lBQUEsRUFERjtFQVVEOztFQUVELG9CQUNFLHVEQUFDLCtDQUFEO0lBQVEsUUFBUSxFQUFFVixZQUFsQjtJQUFnQyxPQUFPLEVBQUVXLFNBQXpDO0lBQUEsVUFDR1gsWUFBWSxHQUFHLFlBQUgsR0FBa0I7RUFEakMsRUFERjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUV0RkQ7QUFFQTs7QUFNTyxNQUFNaUIsTUFBTSxHQUFHLENBQUM7RUFBRTFNLElBQUksR0FBRztBQUFULENBQUQsS0FBb0M7RUFDeEQsb0JBQ0U7SUFBSyxTQUFTLEVBQUMscUJBQWY7SUFBQSx1QkFDRSx1REFBQywyREFBRDtNQUFvQixJQUFJLEVBQUVBO0lBQTFCO0VBREYsRUFERjtBQUtELENBTk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWFPLE1BQU0yTSxnQkFBTixTQUErQjdJLGdEQUEvQixDQUEyRDtFQUNoRUksV0FBVyxDQUFDQyxLQUFELEVBQWU7SUFDeEIsTUFBTUEsS0FBTjs7SUFEd0IsbUNBaUJkLE1BQU07TUFDaEIsS0FBS3lJLFVBQUwsQ0FBZ0IsQ0FBaEI7SUFDRCxDQW5CeUI7O0lBQUEsb0NBcUJKelgsS0FBRCxJQUFtQjtNQUN0QyxNQUFNO1FBQUVSO01BQUYsSUFBaUIsS0FBS21PLEtBQTVCO01BQ0EsT0FBTyxLQUFLK0osTUFBTCxDQUFZbFksVUFBVSxDQUFDUSxLQUFELENBQXRCLEVBQStCLElBQS9CLEVBQXFDc1AsSUFBckMsQ0FBMEMsTUFBTTtRQUNyRCxJQUFJdFAsS0FBSyxHQUFHLENBQVIsR0FBWVIsVUFBVSxDQUFDdUcsTUFBM0IsRUFBbUM7VUFDakMsT0FBTyxJQUFJa0osT0FBSixDQUFtQkMsT0FBRCxJQUFhO1lBQ3BDZSxVQUFVLENBQUMsTUFBTTtjQUNmLEtBQUt3SCxVQUFMLENBQWdCelgsS0FBSyxHQUFHLENBQXhCLEVBQTJCc1AsSUFBM0IsQ0FBZ0MsTUFBTTtnQkFDcENKLE9BQU87Y0FDUixDQUZEO1lBR0QsQ0FKUyxFQUlQLEdBSk8sQ0FBVjtVQUtELENBTk0sQ0FBUDtRQU9ELENBUkQsTUFRTztVQUNMLE9BQU9ELE9BQU8sQ0FBQ0MsT0FBUixFQUFQO1FBQ0Q7TUFDRixDQVpNLENBQVA7SUFhRCxDQXBDeUI7O0lBQUEsZ0NBc0NqQixDQUFDeUksSUFBRCxFQUF3QkMsU0FBeEIsS0FBK0M7TUFDdEQsTUFBTTtRQUFFalYsTUFBRjtRQUFVMkQ7TUFBVixJQUF5QixLQUFLMEksS0FBcEM7TUFFQSxNQUFNNkksVUFBZSxHQUFHO1FBQ3RCMUksUUFBUSxFQUFFeE0sTUFBTSxDQUFDcUMsRUFESztRQUV0QjhTLElBQUksRUFBRUgsSUFBSSxDQUFDRyxJQUZXO1FBR3RCRixTQUFTLEVBQUVBLFNBSFc7UUFJdEJHLE1BQU0sRUFBRTtNQUpjLENBQXhCOztNQU9BLElBQUl6UixVQUFKLEVBQWdCO1FBQ2R1UixVQUFVLENBQUNFLE1BQVgsQ0FBa0IxUixJQUFsQixDQUF1QjtVQUNyQlQsSUFBSSxFQUFFLEdBRGU7VUFFckI3QyxJQUFJLEVBQUUsWUFGZTtVQUdyQm9NLFFBQVEsRUFBRTdJLFVBQVUsQ0FBQ2pDLElBQVgsQ0FBZ0JXLEVBSEw7VUFJckIwTyxLQUFLLEVBQUVwTixVQUFVLENBQUNWO1FBSkcsQ0FBdkI7TUFNRDs7TUFFRCxPQUFPL0UsK0RBQWEsR0FDakJxRixJQURJLENBQ0Usd0JBREYsRUFDMkIyUixVQUQzQixFQUVKdkksSUFGSSxDQUVFSyxHQUFELElBQTBCO1FBQzlCc0cseURBQUEsQ0FBZUYsaUVBQWYsRUFBdUMsQ0FBQyxvQkFBRCxFQUF1QjRCLElBQUksQ0FBQ3hYLEtBQTVCLENBQXZDO1FBQ0F1Tyw4Q0FBTSxDQUFDaUosSUFBRCxFQUFPaEksR0FBUCxDQUFOO1FBQ0EsS0FBS08sUUFBTCxDQUFjO1VBQUUxUSxVQUFVLEVBQUUsQ0FBQyxHQUFHLEtBQUttTyxLQUFMLENBQVduTyxVQUFmO1FBQWQsQ0FBZDtNQUNELENBTkksQ0FBUDtJQU9ELENBaEV5Qjs7SUFBQSxnQ0FrRWhCbVksSUFBRCxJQUEyQjtNQUNsQzlXLCtEQUFhLEdBQ1ZpRyxNQURILENBQ1UseUJBQXlCNlEsSUFBSSxDQUFDNVQsR0FEeEMsRUFFR3VMLElBRkgsQ0FFUSxNQUFNO1FBQ1ZxSSxJQUFJLENBQUMxWCxRQUFMLEdBQWdCLEtBQWhCO1FBQ0EsS0FBS2lRLFFBQUwsQ0FBYztVQUFFMVEsVUFBVSxFQUFFLENBQUMsR0FBRyxLQUFLbU8sS0FBTCxDQUFXbk8sVUFBZjtRQUFkLENBQWQ7TUFDRCxDQUxIO0lBTUQsQ0F6RXlCOztJQUV4QixLQUFLbU8sS0FBTCxHQUFhO01BQ1hxSyxPQUFPLEVBQUUsSUFERTtNQUVYeFksVUFBVSxFQUFFO0lBRkQsQ0FBYjtFQUlEOztFQUVzQixNQUFqQndRLGlCQUFpQixHQUFHO0lBQ3hCLE1BQU1iLFFBQVEsR0FBRyxLQUFLSCxLQUFMLENBQVdyTSxNQUFYLENBQWtCcUMsRUFBbkM7SUFDQW5FLCtEQUFhLEdBQ1Z3QyxHQURILENBQ1EsZ0JBQWU4TCxRQUFTLGFBRGhDLEVBRUdHLElBRkgsQ0FFUzlQLFVBQUQsSUFBcUI7TUFDekIsS0FBSzBRLFFBQUwsQ0FBYztRQUFFMVEsVUFBRjtRQUFjd1ksT0FBTyxFQUFFO01BQXZCLENBQWQ7SUFDRCxDQUpIO0VBS0Q7O0VBNEREbkgsTUFBTSxHQUFHO0lBQ1AsTUFBTTtNQUFFbUgsT0FBRjtNQUFXeFk7SUFBWCxJQUEwQixLQUFLbU8sS0FBckM7O0lBQ0EsSUFBSXFLLE9BQUosRUFBYTtNQUNYLG9DQUFPO1FBQUE7TUFBQSxFQUFQO0lBQ0Q7O0lBQ0QsSUFBSSxDQUFDeFksVUFBRCxJQUFlLENBQUNBLFVBQVUsQ0FBQ3VHLE1BQS9CLEVBQXVDO01BQ3JDLHNDQUFPO1FBQUE7TUFBQSxFQUFQO0lBQ0Q7O0lBRUQsb0JBQ0U7TUFBSyxTQUFTLEVBQUMsZUFBZjtNQUFBLHVCQUNFLHVEQUFDLGdGQUFEO1FBQWlCLFVBQVUsRUFBRXZHLFVBQTdCO1FBQXlDLFFBQVEsRUFBRSxLQUFLa1ksTUFBeEQ7UUFBZ0UsUUFBUSxFQUFFLEtBQUtPO01BQS9FO0lBREYsRUFERjtFQUtEOztBQTFGK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJsRTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVFPLFNBQVNJLGlCQUFULENBQTJCO0VBQUUxVixNQUFGO0VBQVUyVixXQUFWO0VBQXVCcFc7QUFBdkIsQ0FBM0IsRUFBZ0Y7RUFDckYsTUFBTXNRLE1BQU0sR0FBR1gsdURBQVUsQ0FBQ1ksU0FBRCxDQUF6QjtFQUNBLE1BQU07SUFBRWlCLEtBQUssRUFBRUM7RUFBVCxJQUEwQkgsdUVBQWUsQ0FBQzdRLE1BQUQsQ0FBL0M7O0VBRUEsSUFBSVQsTUFBTSxLQUFLa1cseURBQWYsRUFBc0M7SUFBQTs7SUFDcEMsb0JBQ0U7TUFDRSxTQUFTLEVBQUVGLGdEQUFFLENBQUMxRixNQUFNLENBQUNnRyxNQUFSLEVBQWdCaEcsTUFBTSxDQUFDaUcsU0FBdkIsQ0FEZjtNQUVFLHVCQUF1QixFQUFFO1FBQ3ZCQyxNQUFNLDhDQUFFL1YsTUFBTSxDQUFDZSxPQUFULG9EQUFFLGdCQUFnQjhVLE1BQWxCLHlFQUE0QjtNQURYO0lBRjNCLEVBREY7RUFRRDs7RUFFRCxJQUFJdFcsTUFBTSxLQUFLa1cseURBQWYsRUFBc0M7SUFBQTs7SUFDcEMsb0JBQ0U7TUFBSyxTQUFTLEVBQUU1RixNQUFNLENBQUNpRyxTQUF2QjtNQUFBLHVCQUNFLHVEQUFDLGdFQUFEO1FBQWEsUUFBUSxzQkFBRTlWLE1BQU0sQ0FBQ2UsT0FBVCxxREFBRSxpQkFBZ0JrVixRQUF2QztRQUFpRCxnQkFBZ0IsRUFBRWpXLE1BQU0sQ0FBQ2tXO01BQTFFO0lBREYsRUFERjtFQUtEOztFQUVELElBQUkzVyxNQUFNLEtBQUtrVyx1REFBWCxJQUFrQ3pFLFlBQWxDLGFBQWtDQSxZQUFsQyxlQUFrQ0EsWUFBWSxDQUFFb0YsaUJBQXBELEVBQXVFO0lBQ3JFLG9CQUNFO01BQUssU0FBUyxFQUFFdkcsTUFBTSxDQUFDaUcsU0FBdkI7TUFBQSx1QkFDRSx1REFBQyxtRUFBRDtRQUFzQixHQUFHLEVBQUU5RTtNQUEzQjtJQURGLEVBREY7RUFLRDs7RUFFRCxJQUFJQSxZQUFKLGFBQUlBLFlBQUosZUFBSUEsWUFBWSxDQUFFekksV0FBbEIsRUFBK0I7SUFDN0IsS0FBSyxNQUFNOE4sVUFBWCxJQUF5QnJGLFlBQVksQ0FBQ3pJLFdBQXRDLEVBQW1EO01BQ2pELElBQUloSixNQUFNLEtBQUs4VyxVQUFVLENBQUNoVSxFQUExQixFQUE4QjtRQUM1QixvQkFDRTtVQUFLLFNBQVMsRUFBRXdOLE1BQU0sQ0FBQ2lHLFNBQXZCO1VBQUEsdUJBQ0UsdURBQUMsVUFBRCxDQUFZLElBQVo7WUFBaUIsTUFBTSxFQUFFOUUsWUFBekI7WUFBdUMsS0FBSyxFQUFFMkU7VUFBOUM7UUFERixFQURGO01BS0Q7SUFDRjtFQUNGOztFQUVELElBQUlwVyxNQUFNLEtBQUtrVywyREFBWCxJQUFzQ3pFLFlBQTFDLEVBQXdEO0lBQ3RELG9CQUNFO01BQUssU0FBUyxFQUFFbkIsTUFBTSxDQUFDaUcsU0FBdkI7TUFBQSx1QkFDRSx1REFBQywrREFBRDtRQUFrQixNQUFNLEVBQUU5RSxZQUFGLGFBQUVBLFlBQUYsdUJBQUVBLFlBQVksQ0FBRXRQO01BQXhDO0lBREYsRUFERjtFQUtEOztFQUVELG9CQUNFO0lBQUssU0FBUyxFQUFFbU8sTUFBTSxDQUFDaUcsU0FBdkI7SUFBQSxtQ0FDRTtNQUFBO0lBQUEsRUFERjtFQUFBLEVBREY7QUFLRDtBQUVNLE1BQU1oRyxTQUFTLEdBQUlJLEtBQUQsS0FBMkI7RUFDbEQ0RixTQUFTLEVBQUVqSyw2Q0FBSTtBQUNqQixlQUFlcUUsS0FBSyxDQUFDcUcsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBb0I7QUFDbkMsR0FIb0Q7RUFJbERWLE1BQU0sRUFBRWhLLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0JxRSxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNyQyx1QkFBdUJyRyxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQnJHLEtBQUssQ0FBQ3FHLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3RDO0FBQ0Esa0JBQWtCckcsS0FBSyxDQUFDcUcsT0FBTixFQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWVyRyxLQUFLLENBQUNDLE1BQU4sQ0FBYWpJLElBQWIsQ0FBa0J2QyxJQUFLO0FBQ3RDO0FBQ0E7QUFDQSxpQkFBaUJ1SyxLQUFLLENBQUNDLE1BQU4sQ0FBYWpJLElBQWIsQ0FBa0J2QyxJQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBbkNvRCxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VQO0FBRUE7QUFDQTtBQUNBOzs7QUFTTyxTQUFTK1EsMEJBQVQsQ0FBb0M7RUFBRUMsU0FBRjtFQUFhM1c7QUFBYixDQUFwQyxFQUF1RjtFQUM1RixJQUFJLENBQUNBLE1BQU0sQ0FBQzBSLFVBQVosRUFBd0I7SUFDdEIsT0FBTyxJQUFQO0VBQ0Q7O0VBRUQsb0JBQ0Usd0RBQUMsOENBQUQ7SUFDRSxRQUFRLEVBQUMsT0FEWDtJQUVFLEtBQUssRUFBQyxpQkFGUjtJQUdFLFNBQVMsRUFBRWlGLFNBSGI7SUFJRSxjQUFZSCwyRkFKZDtJQUFBLFdBTUdPLDBCQUEwQixDQUFDL1csTUFBTSxDQUFDME8sS0FBUixDQU43QiwyQkFPRTtNQUFBO0lBQUEsRUFQRiw0QkFRRTtNQUNFLElBQUksRUFBQyw4RUFEUDtNQUVFLFNBQVMsRUFBQyxlQUZaO01BR0UsTUFBTSxFQUFDLFFBSFQ7TUFJRSxHQUFHLEVBQUMsWUFKTjtNQUFBO0lBQUEsRUFSRjtFQUFBLEVBREY7QUFtQkQ7O0FBRUQsU0FBU3FJLDBCQUFULENBQW9DckksS0FBcEMsRUFBMkU7RUFDekUsUUFBUUEsS0FBUjtJQUNFLEtBQUtILDRFQUFMO01BQ0Usa0NBQ0U7UUFBQTtNQUFBLEVBREY7O0lBUUYsS0FBS0EsMkVBQUw7TUFDRSxrQ0FDRTtRQUFBO01BQUEsRUFERjs7SUFRRixLQUFLQSwyRUFBTDtNQUNFLGtDQUNFO1FBQUE7TUFBQSxFQURGOztJQVFGO01BQ0Usa0NBQ0U7UUFBQTtNQUFBLEVBREY7RUE3Qko7QUFvQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUQ7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVFPLFNBQVM2SSxtQkFBVCxDQUE2QjtFQUFFcFgsTUFBRjtFQUFVcVgsVUFBVjtFQUFzQkM7QUFBdEIsQ0FBN0IsRUFBMkY7RUFBQTs7RUFDaEcsTUFBTXpILE1BQU0sR0FBR1gsdURBQVUsQ0FBQ1ksU0FBRCxDQUF6QjtFQUNBLE1BQU0wQyx1QkFBdUIsR0FBR3dFLG9FQUEwQixvQkFBQ2hYLE1BQU0sQ0FBQ2UsT0FBUixvREFBQyxnQkFBZ0JrVixRQUFqQixDQUExRDtFQUNBLE1BQU0xTyxPQUFPLEdBQUd2SCxNQUFNLENBQUNrVyxnQkFBUCxLQUEyQjFELHVCQUEzQixhQUEyQkEsdUJBQTNCLHVCQUEyQkEsdUJBQXVCLENBQUVqTCxPQUFwRCxDQUFoQjtFQUVBLG9CQUNFO0lBQUEsdUJBQ0U7TUFBSyxTQUFTLEVBQUMsZ0JBQWY7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBRXNJLE1BQU0sQ0FBQzBILGVBQXZCO1FBQUEsd0JBQ0Usd0RBQUMsbURBQUQ7VUFDRSxHQUFHLEVBQUcsR0FBRXZYLE1BQU0sQ0FBQ2lELElBQUssT0FEdEI7VUFFRSxHQUFHLEVBQUVqRCxNQUFNLENBQUN5RixJQUFQLENBQVl3QixLQUFaLENBQWtCQyxLQUZ6QjtVQUdFLFNBQVMsRUFBRTJFLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFSVSxFQURGLGVBWUU7VUFBSyxTQUFTLEVBQUVnRSxNQUFNLENBQUMySCxhQUF2QjtVQUFBLHdCQUVFO1lBQUssU0FBUyxFQUFFM0gsTUFBTSxDQUFDNEgsVUFBdkI7WUFBbUMsY0FBVyxZQUE5QztZQUFBLHVCQUNFO2NBQUEsd0JBQ0U7Z0JBQUEsdUJBQ0U7a0JBQUcsU0FBUyxFQUFFNUgsTUFBTSxDQUFDNkgsYUFBckI7a0JBQW9DLElBQUksRUFBRUosU0FBMUM7a0JBQUE7Z0JBQUE7Y0FERixFQURGLGVBTUU7Z0JBQUEsdUJBQ0U7a0JBQUcsSUFBSSxFQUFFRCxVQUFUO2tCQUFxQixnQkFBYSxNQUFsQztrQkFBQSxVQUNHclgsTUFBTSxDQUFDaUQ7Z0JBRFY7Y0FERixFQU5GO1lBQUE7VUFERixFQUZGLGVBaUJFO1lBQUssU0FBUyxFQUFFNE0sTUFBTSxDQUFDOEgsb0JBQXZCO1lBQUEsd0JBRUU7Y0FBQSxVQUFPM1gsTUFBTSxDQUFDNFg7WUFBZCxFQUZGLHNCQUtHNVgsTUFBTSxDQUFDZSxPQUxWLHFEQUtHLGlCQUFnQjJFLEtBQWhCLENBQXNCdEksR0FBdEIsQ0FBMkJ1SSxJQUFELGlCQUN6QjtjQUFtQixJQUFJLEVBQUVBLElBQUksQ0FBQzVELEdBQTlCO2NBQUEsVUFDRzRELElBQUksQ0FBQzFDO1lBRFIsR0FBUTBDLElBQUksQ0FBQzFDLElBQWIsQ0FERCxDQUxILEVBWUdqRCxNQUFNLENBQUM2WCxTQUFQLEdBQW1CLENBQW5CLGlCQUNDO2NBQUEsMENBQ0Usd0RBQUMsNkNBQUQ7Z0JBQU0sSUFBSSxFQUFDO2NBQVgsRUFERixHQUVJLElBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULEdBQXdCQyxNQUF4QixDQUErQmhZLE1BQU0sQ0FBQzZYLFNBQXRDLENBQWlELEVBRnhELEVBRTJELEdBRjNEO1lBQUEsRUFiSixFQW9CR2hGLE9BQU8sQ0FBQ3RMLE9BQUQsQ0FBUCxpQkFBb0I7Y0FBQSxVQUFPQTtZQUFQLEVBcEJ2QixlQXVCRSx3REFBQyx1RkFBRDtjQUE4QixNQUFNLEVBQUV2SDtZQUF0QyxFQXZCRixFQXlCR0EsTUFBTSxDQUFDMFIsVUFBUCxpQkFBcUIsd0RBQUMsd0RBQUQ7Y0FBcUIsS0FBSyxFQUFFMVIsTUFBTSxDQUFDME87WUFBbkMsRUF6QnhCO1VBQUEsRUFqQkYsZUE2Q0Usd0RBQUMsNkZBQUQ7WUFDRSxNQUFNLEVBQUUxTyxNQURWO1lBRUUsdUJBQXVCLEVBQUV3Uyx1QkFGM0I7WUFHRSxTQUFTLEVBQUUrQyxnREFBRSxDQUFDMUYsTUFBTSxDQUFDOEgsb0JBQVIsRUFBOEI5SCxNQUFNLENBQUNvSSw2QkFBckM7VUFIZixFQTdDRixlQW1ERTtZQUFBLFVBQUlqWSxNQUFNLENBQUM2RztVQUFYLEVBbkRGLGVBcURFLHlEQUFDLHdEQUFEO1lBQWlCLE1BQU0sRUFBQyxNQUF4QjtZQUFBLHdCQUNFLHdEQUFDLDZEQUFEO2NBQWlCLE1BQU0sRUFBRTdHLE1BQXpCO2NBQWlDLHVCQUF1QixFQUFFd1M7WUFBMUQsRUFERixlQUVFLHdEQUFDLHVFQUFEO2NBQXNCLE1BQU0sRUFBRXhTO1lBQTlCLEVBRkY7VUFBQSxFQXJERjtRQUFBLEVBWkY7TUFBQTtJQURGO0VBREYsRUFERjtBQTZFRDtBQUVNLE1BQU04UCxTQUFTLEdBQUlJLEtBQUQsSUFBMEI7RUFDakQsT0FBTztJQUNMcUgsZUFBZSxFQUFFMUwsNkNBQUk7QUFDekI7QUFDQSx1QkFBdUJxRSxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN4QyxvQkFBb0JyRyxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNyQztBQUNBLEtBTlM7SUFPTGlCLGFBQWEsRUFBRTNMLDZDQUFJO0FBQ3ZCLHFCQUFxQnFFLEtBQUssQ0FBQ3FHLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3RDLEtBVFM7SUFVTGtCLFVBQVUsRUFBRTVMLDZDQUFJO0FBQ3BCLG1CQUFtQnFFLEtBQUssQ0FBQ0csVUFBTixDQUFpQjZILEVBQWpCLENBQW9CM0gsUUFBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2QlM7SUF3QkxvSCxvQkFBb0IsRUFBRTlMLDZDQUFJO0FBQzlCO0FBQ0E7QUFDQSxvQkFBb0JxRSxLQUFLLENBQUNxRyxPQUFOLEVBQWdCO0FBQ3BDLHVCQUF1QnJHLEtBQUssQ0FBQ3FHLE9BQU4sRUFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUJyRyxLQUFLLENBQUNxRyxPQUFOLEVBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQnJHLEtBQUssQ0FBQ0csVUFBTixDQUFpQjhILEVBQWpCLENBQW9CNUgsUUFBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9DUztJQWdETDBILDZCQUE2QixFQUFFcE0sNkNBQUk7QUFDdkMsbUJBQW1CcUUsS0FBSyxDQUFDRyxVQUFOLENBQWlCK0gsSUFBakIsQ0FBc0I3SCxRQUFTO0FBQ2xELEtBbERTO0lBbURMOEgsYUFBYSxFQUFFeE0sNkNBQUk7QUFDdkIsbUJBQW1CcUUsS0FBSyxDQUFDRyxVQUFOLENBQWlCOEgsRUFBakIsQ0FBb0I1SCxRQUFTO0FBQ2hELEtBckRTO0lBc0RMYixTQUFTLEVBQUU3RCw2Q0FBSTtBQUNuQixnQkFBZ0JxRSxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNqQztBQUNBLEtBekRTO0lBMERMbUIsYUFBYSxFQUFFN0wsNkNBQUk7QUFDdkI7QUFDQTtFQTVEUyxDQUFQO0FBOERELENBL0RNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFHUDtBQUNBO0FBR0E7QUFFQTs7O0FBUU8sU0FBU29MLCtCQUFULENBQXlDO0VBQzlDalgsTUFEOEM7RUFFOUN3Uyx1QkFGOEM7RUFHOUNtRTtBQUg4QyxDQUF6QyxFQUk4QjtFQUFBOztFQUNuQyxNQUFNOUcsTUFBTSxHQUFHWCx1REFBVSxDQUFDWSxTQUFELENBQXpCO0VBQ0EsTUFBTXlJLGtCQUFrQixzQkFBR3ZZLE1BQU0sQ0FBQ2UsT0FBVixvREFBRyxnQkFBZ0J3WCxrQkFBM0M7RUFDQSxNQUFNQyxpQkFBaUIsR0FBR3hZLE1BQU0sQ0FBQ3lSLFdBQVAsdUJBQ3RCelIsTUFBTSxDQUFDZSxPQURlLHFEQUN0QixpQkFBZ0J5WCxpQkFETSxHQUV0QixDQUFBaEcsdUJBQXVCLFNBQXZCLElBQUFBLHVCQUF1QixXQUF2QixZQUFBQSx1QkFBdUIsQ0FBRWdHLGlCQUF6QiwwQkFBOEN4WSxNQUFNLENBQUNlLE9BQXJELHFEQUE4QyxpQkFBZ0J5WCxpQkFBOUQsQ0FGSjtFQUdBLE1BQU1DLG1CQUFtQixHQUFHLENBQUNELGlCQUFELEtBQXVCLENBQUNELGtCQUFELElBQXVCLENBQUNBLGtCQUFrQixDQUFDblYsTUFBbEUsQ0FBNUI7O0VBRUEsSUFBSXFWLG1CQUFKLEVBQXlCO0lBQ3ZCLE9BQU8sSUFBUDtFQUNEOztFQUVELG9CQUNFO0lBQUssU0FBUyxFQUFFOUIsU0FBaEI7SUFBQSx3QkFDRTtNQUFLLFNBQVMsRUFBRTlHLE1BQU0sQ0FBQzZJLGVBQXZCO01BQUE7SUFBQSxFQURGLEVBSUc3RixPQUFPLENBQUMyRixpQkFBRCxDQUFQLGlCQUNDO01BQUEsd0JBQ0UsdURBQUMsNkNBQUQ7UUFBTSxJQUFJLEVBQUMsU0FBWDtRQUFxQixTQUFTLEVBQUUzSSxNQUFNLENBQUN2SDtNQUF2QyxFQURGLGNBRVdrUSxpQkFGWDtJQUFBLEVBTEosRUFZR0Qsa0JBQWtCLElBQUlBLGtCQUFrQixDQUFDblYsTUFBbkIsR0FBNEIsQ0FBbEQsaUJBQ0M7TUFBQSxVQUNHbVYsa0JBQWtCLENBQUNuYixHQUFuQixDQUF3QnViLENBQUQsSUFBTztRQUM3QixvQkFDRTtVQUFBLHdCQUNFLHVEQUFDLDZDQUFEO1lBQU0sSUFBSSxFQUFFTCxrREFBYyxDQUFDSyxDQUFDLENBQUN2WSxJQUFILENBQTFCO1lBQW9DLFNBQVMsRUFBRXlQLE1BQU0sQ0FBQ3ZIO1VBQXRELEVBREYsRUFFR3FRLENBQUMsQ0FBQzFWLElBRkwsT0FFWTBWLENBQUMsQ0FBQ3BSLE9BRmQ7UUFBQSxHQUFXb1IsQ0FBQyxDQUFDMVYsSUFBYixDQURGO01BTUQsQ0FQQTtJQURILEVBYko7RUFBQSxFQURGO0FBMkJEO0FBRU0sTUFBTTZNLFNBQVMsR0FBSUksS0FBRCxJQUEwQjtFQUNqRCxPQUFPO0lBQ0x3SSxlQUFlLEVBQUU3TSw2Q0FBSTtBQUN6QixxQkFBcUJxRSxLQUFLLENBQUNHLFVBQU4sQ0FBaUJ1SSxjQUFlO0FBQ3JELHNCQUFzQjFJLEtBQUssQ0FBQ3FHLE9BQU4sQ0FBYyxHQUFkLENBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRTO0lBVUxqTyxJQUFJLEVBQUV1RCw2Q0FBSTtBQUNkLGVBQWVxRSxLQUFLLENBQUNDLE1BQU4sQ0FBYWpJLElBQWIsQ0FBa0JrSSxTQUFVO0FBQzNDLHNCQUFzQkYsS0FBSyxDQUFDcUcsT0FBTixDQUFjLEdBQWQsQ0FBbUI7QUFDekM7RUFiUyxDQUFQO0FBZUQsQ0FoQk07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEUDtBQUNBO0FBRUE7QUFDQTtBQUlBOzs7QUFNQTtBQUNPLFNBQVNXLDRCQUFULENBQXNDO0VBQUVsWDtBQUFGLENBQXRDLEVBQTZFO0VBQ2xGLE1BQU02UCxNQUFNLEdBQUdYLHVEQUFVLENBQUNZLFNBQUQsQ0FBekI7RUFDQSxNQUFNaUosZ0JBQWdCLEdBQUcvWSxNQUFNLENBQUMwUCxTQUFQLEtBQXFCbUosc0VBQTlDO0VBRUEsb0JBQ0U7SUFBSyxTQUFTLEVBQUVoSixNQUFNLENBQUNpRyxTQUF2QjtJQUFBLHdCQUNFO01BQ0UsSUFBSSxFQUFDLG9FQURQO01BRUUsTUFBTSxFQUFDLFFBRlQ7TUFHRSxHQUFHLEVBQUMsWUFITjtNQUlFLFNBQVMsRUFBRWpHLE1BQU0sQ0FBQ2xLLElBSnBCO01BQUEsdUJBTUUsdURBQUMsNkRBQUQ7UUFBc0IsTUFBTSxFQUFFM0YsTUFBTSxDQUFDMFA7TUFBckM7SUFORixFQURGLEVBVUdxSixnQkFBZ0IsaUJBQ2YsdURBQUMscUZBQUQ7TUFBNkIsYUFBYSxFQUFFL1ksTUFBTSxDQUFDaVosYUFBbkQ7TUFBa0UsWUFBWSxFQUFFalosTUFBTSxDQUFDa1o7SUFBdkYsRUFYSjtFQUFBLEVBREY7QUFnQkQ7QUFFTSxNQUFNcEosU0FBUyxHQUFJSSxLQUFELElBQTBCO0VBQ2pELE9BQU87SUFDTDRGLFNBQVMsRUFBRWpLLDZDQUFJO0FBQ25CO0FBQ0EsS0FIUztJQUlMbEcsSUFBSSxFQUFFa0csNkNBQUk7QUFDZDtBQUNBO0FBQ0E7RUFQUyxDQUFQO0FBU0QsQ0FWTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNQO0FBRUE7QUFDQTtBQUNBOzs7QUFTQTtBQUNPLFNBQVNzTixzQkFBVCxDQUFnQztFQUFFeEMsU0FBRjtFQUFhM1c7QUFBYixDQUFoQyxFQUF5RjtFQUM5RixNQUFNK1ksZ0JBQWdCLEdBQUcvWSxNQUFNLENBQUMwUCxTQUFQLEtBQXFCbUosc0VBQTlDO0VBQ0EsTUFBTTdJLE1BQU0sR0FBR2hRLE1BQU0sQ0FBQzBQLFNBQVAsS0FBcUJtSix5RUFBcEM7RUFDQSxNQUFNbkgsVUFBVSxHQUFHMVIsTUFBTSxDQUFDMFIsVUFBUCxJQUFxQjJILDhCQUE4QixDQUFDclosTUFBTSxDQUFDME8sS0FBUixDQUF0RSxDQUg4RixDQUs5Rjs7RUFDQSxJQUFJcUssZ0JBQWdCLElBQUkvSSxNQUFwQixJQUE4QjBCLFVBQWxDLEVBQThDO0lBQzVDLE9BQU8sSUFBUDtFQUNEOztFQUVELG9CQUNFLHdEQUFDLDhDQUFEO0lBQ0UsUUFBUSxFQUFDLFNBRFg7SUFFRSxLQUFLLEVBQUMsMEJBRlI7SUFHRSxjQUFZOEUsNEZBSGQ7SUFJRSxTQUFTLEVBQUVHLFNBSmI7SUFBQSxvQ0FNRTtNQUFBO0lBQUEsRUFORiw0QkFZRTtNQUNFLElBQUksRUFBQyxvRUFEUDtNQUVFLFNBQVMsRUFBQyxlQUZaO01BR0UsTUFBTSxFQUFDLFFBSFQ7TUFJRSxHQUFHLEVBQUMsWUFKTjtNQUFBO0lBQUEsRUFaRjtFQUFBLEVBREY7QUF1QkQ7O0FBRUQsU0FBUzBDLDhCQUFULENBQXdDM0ssS0FBeEMsRUFBNEU7RUFDMUU7RUFDQTtFQUVBLFFBQVFBLEtBQVI7SUFDRSxLQUFLSCwyRUFBTDtJQUNBLEtBQUtBLDJFQUFMO0lBQ0EsS0FBS0EsNEVBQUw7TUFDRSxPQUFPLElBQVA7O0lBRUY7TUFDRSxPQUFPLEtBQVA7RUFQSjtBQVNEOzs7Ozs7Ozs7Ozs7O0FDOUREOztBQVNPLFNBQVM0SSxVQUFULENBQW9CO0VBQUVvQyxHQUFGO0VBQU81QyxTQUFQO0VBQWtCNkMsR0FBbEI7RUFBdUJDO0FBQXZCLENBQXBCLEVBQTBGO0VBQy9GO0VBQ0Esb0JBQU87SUFBSyxHQUFHLEVBQUVELEdBQVY7SUFBZSxTQUFTLEVBQUU3QyxTQUExQjtJQUFxQyxHQUFHLEVBQUU0QyxHQUExQztJQUErQyxPQUFPLEVBQUMsTUFBdkQ7SUFBOEQsTUFBTSxFQUFFRTtFQUF0RSxFQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUEsTUFBTUcsZUFBeUMsR0FBRztFQUNoRCxDQUFDRCxzRUFBRCxHQUErQixTQURpQjtFQUVoRCxDQUFDQSx5RUFBRCxHQUFrQyxRQUZjO0VBR2hELENBQUNBLHdFQUFELEdBQWlDLFFBSGU7RUFJaERLLE9BQU8sRUFBRTtBQUp1QyxDQUFsRDtBQVlBO0FBQ08sU0FBU2xCLDJCQUFULENBQXFDO0VBQUVHLGFBQUY7RUFBaUJDLFlBQVksR0FBRztBQUFoQyxDQUFyQyxFQUE2RztFQUNsSCxNQUFNckosTUFBTSxHQUFHWCx1REFBVSxDQUFDWSxTQUFELENBQXpCOztFQUVBLElBQUksQ0FBQ21KLGFBQUQsSUFBa0IsQ0FBQ0MsWUFBdkIsRUFBcUM7SUFDbkMsT0FBTyxJQUFQO0VBQ0Q7O0VBRUQsTUFBTWUsaUJBQWlCLEdBQUdoQixhQUFhLEtBQUtVLHNFQUFsQixHQUFnRCxjQUFoRCxHQUFpRUQsa0RBQVUsQ0FBQ1QsYUFBRCxDQUFyRztFQUNBLE1BQU1pQixhQUFhLEdBQUdOLGVBQWUsQ0FBQ1gsYUFBYSxJQUFJLEVBQWxCLENBQWYsSUFBd0NXLGVBQWUsQ0FBQ0ksT0FBOUU7RUFFQSxvQkFDRTtJQUFBLHdCQUNFLHdEQUFDLFlBQUQ7TUFBQSx3QkFDRTtRQUFRLFNBQVMsRUFBRW5LLE1BQU0sQ0FBQ2MsTUFBMUI7UUFBQTtNQUFBLEVBREYsZUFFRSx1REFBQyw2Q0FBRDtRQUFNLElBQUksRUFBQyxJQUFYO1FBQWdCLElBQUksRUFBRXVKO01BQXRCLEVBRkYsVUFJR0QsaUJBSkg7SUFBQSxFQURGLGVBUUUsd0RBQUMsWUFBRDtNQUFBLHdCQUNFO1FBQVEsU0FBUyxFQUFFcEssTUFBTSxDQUFDYyxNQUExQjtRQUFBO01BQUEsRUFERixPQUN5RHVJLFlBRHpEO0lBQUEsRUFSRjtFQUFBLEVBREY7QUFjRDtBQUVNLE1BQU1pQixZQUFzQixHQUFHLENBQUM7RUFBRS9SO0FBQUYsQ0FBRCxLQUFrQjtFQUN0RCxNQUFNeUgsTUFBTSxHQUFHWCx1REFBVSxDQUFDWSxTQUFELENBQXpCO0VBRUEsb0JBQU8sdURBQUMsOENBQUQ7SUFBTyxLQUFLLEVBQUMsT0FBYjtJQUFxQixTQUFTLEVBQUVELE1BQU0sQ0FBQ3VLLEtBQXZDO0lBQThDLElBQUksZUFBRTtNQUFBLFVBQUdoUztJQUFIO0VBQXBELEVBQVA7QUFDRCxDQUpNOztBQU1QLE1BQU0wSCxTQUFTLEdBQUlJLEtBQUQsS0FBMkI7RUFDM0NrSyxLQUFLLEVBQUV2Tyw2Q0FBSTtBQUNiLHdCQUF3QnFFLEtBQUssQ0FBQ0MsTUFBTixDQUFhSyxVQUFiLENBQXdCNkosTUFBTztBQUN2RCxvQkFBb0JuSyxLQUFLLENBQUNDLE1BQU4sQ0FBYU8sTUFBYixDQUFvQkMsTUFBTztBQUMvQyxhQUFhVCxLQUFLLENBQUNDLE1BQU4sQ0FBYWpJLElBQWIsQ0FBa0JrSSxTQUFVO0FBQ3pDLG1CQUFtQkYsS0FBSyxDQUFDcUcsT0FBTixFQUFnQjtBQUNuQyxHQU42QztFQU8zQzVGLE1BQU0sRUFBRTlFLDZDQUFJO0FBQ2QsYUFBYXFFLEtBQUssQ0FBQ0MsTUFBTixDQUFhakksSUFBYixDQUFrQnVJLE9BQVE7QUFDdkMsR0FUNkM7RUFVM0NuSSxJQUFJLEVBQUV1RCw2Q0FBSTtBQUNaLG9CQUFvQnFFLEtBQUssQ0FBQ3FHLE9BQU4sQ0FBYyxHQUFkLENBQW1CO0FBQ3ZDO0FBWjZDLENBQTNCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQVFPLE1BQU1mLFdBQVcsR0FBRyxDQUFDO0VBQUVTLFFBQVEsR0FBRyxFQUFiO0VBQWlCQztBQUFqQixDQUFELEtBQWdEO0VBQ3pFLE1BQU1yRyxNQUFNLEdBQUdYLHVEQUFVLENBQUNZLFNBQUQsQ0FBekI7RUFDQSxNQUFNMEMsdUJBQXVCLEdBQUd3RSxvRUFBMEIsQ0FBQ2YsUUFBRCxDQUExRDs7RUFFQSxJQUFJQSxRQUFRLENBQUM3UyxNQUFULEtBQW9CLENBQXhCLEVBQTJCO0lBQ3pCLGdDQUFPO01BQUE7SUFBQSxFQUFQO0VBQ0Q7O0VBRUQsb0JBQ0U7SUFBTyxTQUFTLEVBQUV5TSxNQUFNLENBQUMwSyxLQUF6QjtJQUFBLDRDQUNFO01BQUEsdUJBQ0U7UUFBQSx3QkFDRTtVQUFBO1FBQUEsRUFERixlQUVFO1VBQUE7UUFBQSxFQUZGO01BQUE7SUFERixFQURGLGdCQU9FO01BQUEsVUFDR3RFLFFBQVEsQ0FBQzdZLEdBQVQsQ0FBY21LLE9BQUQsSUFBYTtRQUN6QixNQUFNaVQsa0JBQWtCLEdBQUd0RSxnQkFBZ0IsS0FBSzNPLE9BQU8sQ0FBQ0EsT0FBeEQ7UUFDQSxvQkFDRTtVQUFBLFdBRUdpVCxrQkFBa0IsZ0JBQ2pCO1lBQUksU0FBUyxFQUFFM0ssTUFBTSxDQUFDNEssY0FBdEI7WUFBQSxXQUF1Q2xULE9BQU8sQ0FBQ0EsT0FBL0M7VUFBQSxFQURpQixHQUVmQSxPQUFPLENBQUNBLE9BQVIsTUFBb0JpTCx1QkFBcEIsYUFBb0JBLHVCQUFwQix1QkFBb0JBLHVCQUF1QixDQUFFakwsT0FBN0MsaUJBQ0Y7WUFBQSxXQUFLQSxPQUFPLENBQUNBLE9BQWI7VUFBQSxFQURFLGdCQUdGO1lBQUEsVUFBS0EsT0FBTyxDQUFDQTtVQUFiLEVBUEosZUFXRTtZQUFJLFNBQVMsRUFBRWlULGtCQUFrQixHQUFHM0ssTUFBTSxDQUFDNEssY0FBVixHQUEyQixFQUE1RDtZQUFBLFVBQ0dILG9FQUFxQixDQUFDL1MsT0FBTyxDQUFDbVQsU0FBVDtVQUR4QixFQVhGO1FBQUEsR0FBU25ULE9BQU8sQ0FBQ0EsT0FBakIsQ0FERjtNQWlCRCxDQW5CQTtJQURILEVBUEY7RUFBQSxFQURGO0FBZ0NELENBeENNOztBQTBDUCxNQUFNdUksU0FBUyxHQUFJSSxLQUFELEtBQTJCO0VBQzNDNEYsU0FBUyxFQUFFakssNkNBQUk7QUFDakIsZUFBZXFFLEtBQUssQ0FBQ3FHLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQXVCO0FBQ3RDLEdBSDZDO0VBSTNDZ0UsS0FBSyxFQUFFMU8sNkNBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQnFFLEtBQUssQ0FBQ3FHLE9BQU4sRUFBZ0I7QUFDakM7QUFDQTtBQUNBLG1CQUFtQnJHLEtBQUssQ0FBQ0csVUFBTixDQUFpQnNLLEVBQWpCLENBQW9CcEssUUFBUztBQUNoRDtBQUNBLEdBZDZDO0VBZTNDa0ssY0FBYyxFQUFFNU8sNkNBQUk7QUFDdEIsbUJBQW1CcUUsS0FBSyxDQUFDRyxVQUFOLENBQWlCdUksY0FBZTtBQUNuRDtBQWpCNkMsQ0FBM0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFFQTtBQUdPLE1BQU0vSCxlQUFlLEdBQUk3USxNQUFELElBQTRCO0VBQ3pELE9BQU80YSxxREFBUSxDQUFDLFlBQVk7SUFDMUIsSUFBSSxDQUFDNWEsTUFBTCxFQUFhO01BQ1gsT0FBTyxJQUFQO0lBQ0Q7O0lBRUQsSUFBSUEsTUFBTSxDQUFDeVIsV0FBUCxJQUFzQixDQUFDelIsTUFBTSxDQUFDMFIsVUFBbEMsRUFBOEM7TUFDNUMsT0FBT21KLGtEQUFVLENBQUM3YSxNQUFNLENBQUNxQyxFQUFSLENBQWpCO0lBQ0Q7O0lBQ0QsT0FBTyxJQUFQO0VBQ0QsQ0FUYyxFQVNaLENBQUNyQyxNQUFELGFBQUNBLE1BQUQsdUJBQUNBLE1BQU0sQ0FBRXFDLEVBQVQsRUFBYXJDLE1BQWIsYUFBYUEsTUFBYix1QkFBYUEsTUFBTSxDQUFFeVIsV0FBckIsRUFBa0N6UixNQUFsQyxhQUFrQ0EsTUFBbEMsdUJBQWtDQSxNQUFNLENBQUUwUixVQUExQyxDQVRZLENBQWY7QUFVRCxDQVhNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVNPLE1BQU15SixvQkFBb0IsR0FBRyxDQUFDbmIsTUFBRCxFQUF5Qm9iLFdBQStCLEdBQUcsRUFBM0QsS0FBOEU7RUFDaEgsTUFBTTtJQUFFL0YsT0FBRjtJQUFXM0csS0FBWDtJQUFrQnFDLEtBQUssRUFBRUM7RUFBekIsSUFBMENILHVFQUFlLENBQUM3USxNQUFELENBQS9EO0VBQ0EsTUFBTWtULFdBQVcsR0FBR0wsT0FBTyxDQUFDN1MsTUFBRCxhQUFDQSxNQUFELHVCQUFDQSxNQUFNLENBQUVrVCxXQUFULENBQTNCO0VBQ0EsTUFBTTtJQUFFbUk7RUFBRixJQUFlTiw2REFBVyxFQUFoQztFQUVBLE1BQU0sQ0FBQ08sSUFBRCxFQUFPQyxVQUFQLElBQXFCVCw4Q0FBTyxDQUFDLE1BQU07SUFDdkMsTUFBTVUsbUJBQW1CLEdBQUdQLHdEQUFVLEVBQXRDO0lBQ0EsTUFBTUssSUFBd0IsR0FBRyxDQUFDLEdBQUdGLFdBQUosQ0FBakM7SUFDQSxJQUFJRyxVQUFKOztJQUVBLElBQUlySSxXQUFKLEVBQWlCO01BQ2ZvSSxJQUFJLENBQUM1WCxJQUFMLENBQVU7UUFDUitYLEtBQUssRUFBRVAsNERBREM7UUFFUjVTLElBQUksRUFBRSxTQUZFO1FBR1JqRyxFQUFFLEVBQUVvVCx5REFISTtRQUlSN1MsSUFBSSxFQUFHLEdBQUV5WSxRQUFTLFNBQVE1Rix5REFBc0I7TUFKeEMsQ0FBVjtJQU1ELENBWnNDLENBY3ZDOzs7SUFDQSxJQUFJLENBQUN6RSxZQUFMLEVBQW1CO01BQ2pCdUssVUFBVSxHQUFHOUYseURBQWI7TUFDQSxPQUFPLENBQUM2RixJQUFELEVBQU9DLFVBQVAsQ0FBUDtJQUNEOztJQUVELElBQUlDLG1CQUFKLEVBQXlCO01BQ3ZCLElBQUl4SyxZQUFZLENBQUN0UCxJQUFiLENBQWtCdEIsSUFBbEIsS0FBMkJ5RSx5REFBL0IsRUFBK0M7UUFBQTs7UUFDN0MsSUFBSW1NLFlBQVksQ0FBQ29GLGlCQUFqQixFQUFvQztVQUNsQ2tGLElBQUksQ0FBQzVYLElBQUwsQ0FBVTtZQUNSK1gsS0FBSyxFQUFFLFFBREM7WUFFUm5ULElBQUksRUFBRSxLQUZFO1lBR1JqRyxFQUFFLEVBQUVvVCx1REFISTtZQUlSN1MsSUFBSSxFQUFHLEdBQUV5WSxRQUFTLFNBQVE1Rix1REFBb0I7VUFKdEMsQ0FBVjtVQU1BOEYsVUFBVSxHQUFHOUYsdURBQWI7UUFDRDs7UUFFRCxJQUFJekUsWUFBWSxDQUFDekksV0FBakIsRUFBOEI7VUFDNUIsS0FBSyxNQUFNQyxJQUFYLElBQW1Cd0ksWUFBWSxDQUFDekksV0FBaEMsRUFBNkM7WUFDM0MrUyxJQUFJLENBQUM1WCxJQUFMLENBQVU7Y0FDUitYLEtBQUssRUFBRWpULElBQUksQ0FBQ2hMLEtBREo7Y0FFUjhLLElBQUksRUFBRUUsSUFBSSxDQUFDRixJQUZIO2NBR1JqRyxFQUFFLEVBQUVtRyxJQUFJLENBQUNuRyxFQUhEO2NBSVJPLElBQUksRUFBRyxHQUFFeVksUUFBUyxTQUFRN1MsSUFBSSxDQUFDbkcsRUFBRztZQUoxQixDQUFWOztZQU1BLElBQUksQ0FBQ2taLFVBQUwsRUFBaUI7Y0FDZkEsVUFBVSxHQUFHL1MsSUFBSSxDQUFDbkcsRUFBbEI7WUFDRDtVQUNGO1FBQ0Y7O1FBRUQsNkJBQUkyTyxZQUFZLENBQUN0UCxJQUFiLENBQWtCK0csUUFBdEIsa0RBQUksc0JBQTRCbkQsSUFBNUIsQ0FBa0N1RixPQUFELElBQWFBLE9BQU8sQ0FBQ3pLLElBQVIsS0FBaUI0YSxzRUFBL0QsQ0FBSixFQUFpRztVQUMvRk0sSUFBSSxDQUFDNVgsSUFBTCxDQUFVO1lBQ1IrWCxLQUFLLEVBQUUsWUFEQztZQUVSblQsSUFBSSxFQUFFLE1BRkU7WUFHUmpHLEVBQUUsRUFBRW9ULDJEQUhJO1lBSVI3UyxJQUFJLEVBQUcsR0FBRXlZLFFBQVMsU0FBUTVGLDJEQUF3QjtVQUoxQyxDQUFWO1FBTUQ7TUFDRjtJQUNGOztJQUVELElBQUksQ0FBQzhGLFVBQUwsRUFBaUI7TUFDZkEsVUFBVSxHQUFHOUYseURBQWI7SUFDRDs7SUFFRCxPQUFPLENBQUM2RixJQUFELEVBQU9DLFVBQVAsQ0FBUDtFQUNELENBOURpQyxFQThEL0IsQ0FBQ3ZLLFlBQUQsRUFBZW9LLFdBQWYsRUFBNEJDLFFBQTVCLEVBQXNDbkksV0FBdEMsQ0E5RCtCLENBQWxDO0VBZ0VBLE9BQU87SUFDTHhFLEtBREs7SUFFTDJHLE9BRks7SUFHTGlHLElBSEs7SUFJTEM7RUFKSyxDQUFQO0FBTUQsQ0EzRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQlA7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUllLFNBQVNjLGFBQVQsQ0FBdUI7RUFBRUMsS0FBRjtFQUFTM0c7QUFBVCxDQUF2QixFQUEwRTtFQUN2RixNQUFNO0lBQ0ozVCxNQUFNLEVBQUU7TUFBRXdLLFFBQVEsR0FBRztJQUFiLENBREo7SUFFSnpLO0VBRkksSUFHRnVhLEtBSEo7RUFJQSxNQUFNaEYsU0FBUyxHQUFHdlYsR0FBRyxDQUFDd2EsU0FBSixDQUFjLENBQWQsRUFBaUJ4YSxHQUFHLENBQUN5YSxXQUFKLENBQWdCLEdBQWhCLENBQWpCLENBQWxCO0VBQ0EsTUFBTXBCLFdBQStCLEdBQUcsQ0FDdEM7SUFDRUssS0FBSyxFQUFFUCw2REFEVDtJQUVFNVMsSUFBSSxFQUFFLFVBRlI7SUFHRWpHLEVBQUUsRUFBRW9ULDBEQUhOO0lBSUU3UyxJQUFJLEVBQUcsR0FBRWIsR0FBSSxTQUFRMFQsMERBQXNCO0VBSjdDLENBRHNDLENBQXhDO0VBUUEsTUFBTXpWLE1BQU0sR0FBR2tjLDJEQUFZLENBQUMxUCxRQUFELENBQTNCLENBZHVGLENBY2hEOztFQUN2QyxNQUFNO0lBQUU4TyxJQUFGO0lBQVFDO0VBQVIsSUFBdUJKLGtGQUFvQixDQUFDbmIsTUFBRCxFQUFTb2IsV0FBVCxDQUFqRDtFQUNBLE1BQU07SUFBRXFCLFNBQVMsRUFBRUM7RUFBYixJQUFnQ1AsNkRBQWMsRUFBcEQ7RUFDQSxNQUFNO0lBQUVNLFNBQVMsRUFBRUU7RUFBYixJQUF1Q1Asb0VBQXFCLEVBQWxFO0VBQ0EsTUFBTXZNLE1BQU0sR0FBR1gsdURBQVUsQ0FBQ1ksU0FBRCxDQUF6QjtFQUNBLE1BQU04TSxRQUFRLEdBQUdqQixzREFBVyxDQUFDTCxJQUFELENBQTVCO0VBQ0EsTUFBTS9iLE1BQU0sR0FBSW9XLFdBQVcsQ0FBQ25OLElBQWIsSUFBc0MrUyxVQUFyRCxDQXBCdUYsQ0FzQnZGOztFQUNBRyxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNbUIsNkJBQTZCLEdBQUdELFFBQVEsSUFBSUEsUUFBUSxDQUFDeFosTUFBVCxHQUFrQmtZLElBQUksQ0FBQ2xZLE1BQXpFO0lBQ0EsTUFBTTBaLG9CQUFvQixHQUFHdmQsTUFBTSxLQUFLa1csMERBQVgsSUFBb0NsVyxNQUFNLEtBQUtrVywwREFBNUU7O0lBRUEsSUFBSW9ILDZCQUE2QixJQUFJQyxvQkFBckMsRUFBMkQ7TUFDekQ5ZSxxRUFBQSxDQUF5QixHQUFFK0QsR0FBSSxTQUFRMFQsMERBQXNCLEVBQTdEO0lBQ0Q7RUFDRixDQVBRLEVBT04sQ0FBQ2xXLE1BQUQsRUFBU3dDLEdBQVQsRUFBY3VaLElBQWQsRUFBb0JzQixRQUFwQixDQVBNLENBQVQ7O0VBU0EsSUFBSUYsY0FBYyxJQUFJQyxxQkFBdEIsRUFBNkM7SUFDM0Msc0NBQ0Usd0RBQUMsK0RBQUQ7TUFBQSx1QkFDRSx3REFBQyxzREFBRDtJQURGLEVBREY7RUFLRDs7RUFFRCxJQUFJLENBQUMzYyxNQUFMLEVBQWE7SUFDWCxvQkFDRSx3REFBQyw0RUFBRDtNQUFRLE9BQU8sRUFBQyxRQUFoQjtNQUF5QixLQUFLLEVBQUMsUUFBL0I7TUFBQSx1QkFDRSx5REFBQyw4Q0FBRDtRQUFPLFFBQVEsRUFBRWljLHNFQUFqQjtRQUFrRCxLQUFLLEVBQUMsa0JBQXhEO1FBQUEsMEdBQ2tFLGlFQURsRSw4QkFFWTtVQUFHLElBQUksRUFBRTNFLFNBQVQ7VUFBQTtRQUFBLEVBRlo7TUFBQTtJQURGLEVBREY7RUFRRDs7RUFFRCxvQkFDRSx5REFBQywrREFBRDtJQUFBLHdCQUNFLHdEQUFDLGlGQUFEO01BQXFCLFVBQVUsRUFBRyxHQUFFdlYsR0FBSSxTQUFReEMsTUFBTyxFQUF2RDtNQUEwRCxTQUFTLEVBQUUrWCxTQUFyRTtNQUFnRixNQUFNLEVBQUV0WDtJQUF4RixFQURGLGVBR0U7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBQyxnQkFBZjtRQUFBLHVCQUNFLHdEQUFDLGdEQUFEO1VBQVMsVUFBVSxNQUFuQjtVQUFBLFVBQ0dzYixJQUFJLENBQUNsZSxHQUFMLENBQVU2ZixHQUFELElBQTJCO1lBQ25DLG9CQUNFLHdEQUFDLDRDQUFEO2NBRUUsS0FBSyxFQUFFQSxHQUFHLENBQUN4QixLQUZiO2NBR0UsSUFBSSxFQUFFd0IsR0FBRyxDQUFDcmEsSUFIWjtjQUlFLElBQUksRUFBRXFhLEdBQUcsQ0FBQzNVLElBSlo7Y0FLRSxNQUFNLEVBQUUyVSxHQUFHLENBQUM1YSxFQUFKLEtBQVc5QztZQUxyQixHQUNPMGQsR0FBRyxDQUFDeEIsS0FEWCxDQURGO1VBU0QsQ0FWQTtRQURIO01BREY7SUFERixFQUhGLGVBb0JFLHdEQUFDLHdFQUFEO01BQUEsdUJBRUUseURBQUMsbURBQUQ7UUFBWSxTQUFTLEVBQUU1TCxNQUFNLENBQUNxTixVQUE5QjtRQUFBLHdCQUNFLHdEQUFDLHVGQUFEO1VBQXdCLE1BQU0sRUFBRWxkLE1BQWhDO1VBQXdDLFNBQVMsRUFBRTZQLE1BQU0sQ0FBQ3NOO1FBQTFELEVBREYsZUFFRSx3REFBQyw4RkFBRDtVQUE0QixNQUFNLEVBQUVuZCxNQUFwQztVQUE0QyxTQUFTLEVBQUU2UCxNQUFNLENBQUNzTjtRQUE5RCxFQUZGLGVBR0Usd0RBQUMsNEVBQUQ7VUFBbUIsV0FBVyxFQUFFeEgsV0FBaEM7VUFBNkMsTUFBTSxFQUFFM1YsTUFBckQ7VUFBNkQsTUFBTSxFQUFFVDtRQUFyRSxFQUhGO01BQUE7SUFGRixFQXBCRjtFQUFBLEVBREY7QUErQkQ7QUFFTSxNQUFNdVEsU0FBUyxHQUFJSSxLQUFELElBQTBCO0VBQ2pELE9BQU87SUFDTGlOLEtBQUssRUFBRXRSLDZDQUFJO0FBQ2YsZ0JBQWdCcUUsS0FBSyxDQUFDcUcsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDakM7QUFDQSxLQUpTO0lBS0w7SUFDQTJHLFVBQVUsRUFBRXJSLDZDQUFJO0FBQ3BCO0FBQ0E7RUFSUyxDQUFQO0FBVUQsQ0FYTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dQO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQWtCTyxNQUFNb1Msb0JBQW9CLEdBQUcsQ0FBQztFQUNuQ0MsS0FBSyxHQUFHLEVBRDJCO0VBRW5DQyxRQUFRLEdBQUcsV0FGd0I7RUFHbkNDLFlBQVksR0FBRyxLQUhvQjtFQUluQ0MsTUFBTSxHQUFHaEIscURBQWVpQjtBQUpXLENBQUQsS0FLckI7RUFDYkMsV0FBVztFQUVYLE1BQU1DLFFBQVEsR0FBR3BCLHdEQUFXLENBQUM5WCxnREFBSSxDQUFDNFksS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxZQUFsQixDQUFMLENBQTVCO0VBQ0EsTUFBTTtJQUFFM0IsU0FBRjtJQUFhL047RUFBYixJQUF1QnlOLGNBQWMsRUFBM0M7RUFDQSxNQUFNc0MsaUJBQWlCLEdBQUc1WSxxREFBVyxDQUFDMlksUUFBRCxFQUFXSCxNQUFYLENBQXJDO0VBRUEsT0FBTztJQUNMNUIsU0FESztJQUVML04sS0FGSztJQUdMN0ssT0FBTyxFQUFFNGE7RUFISixDQUFQO0FBS0QsQ0FqQk07QUFtQkEsTUFBTUMsU0FBUyxHQUFHLE1BQXVCO0VBQzlDSCxXQUFXO0VBRVgsT0FBT25CLHdEQUFXLENBQUNNLGlEQUFELENBQWxCO0FBQ0QsQ0FKTTtBQU1BLE1BQU14QixZQUFZLEdBQUk3WixFQUFELElBQTJDO0VBQ3JFa2MsV0FBVztFQUNYSSxlQUFlLENBQUN0YyxFQUFELENBQWY7RUFFQSxPQUFPK2Esd0RBQVcsQ0FBRXBTLEtBQUQsSUFBb0MyUyxzREFBVSxDQUFDM1MsS0FBRCxFQUFRM0ksRUFBUixDQUEvQyxDQUFsQjtBQUNELENBTE07QUFPQSxNQUFNdWMsWUFBWSxHQUFHLE1BQXFCO0VBQy9DTCxXQUFXO0VBRVgsT0FBT25CLHdEQUFXLENBQUNZLDBEQUFELENBQWxCO0FBQ0QsQ0FKTTtBQU1BLE1BQU12SyxVQUFVLEdBQUcsTUFBTTtFQUM5QixNQUFNOVQsUUFBUSxHQUFHeVIsd0RBQVcsRUFBNUI7RUFDQSxPQUFPLENBQUMvTyxFQUFELEVBQWFrRixPQUFiLEVBQStCc1gsVUFBL0IsS0FBd0RsZixRQUFRLENBQUNvVSxpREFBTyxDQUFDO0lBQUUxUixFQUFGO0lBQU1rRixPQUFOO0lBQWVzWDtFQUFmLENBQUQsQ0FBUixDQUF2RTtBQUNELENBSE07QUFLQSxNQUFNbkwsWUFBWSxHQUFHLE1BQU07RUFDaEMsTUFBTS9ULFFBQVEsR0FBR3lSLHdEQUFXLEVBQTVCO0VBRUEsT0FBUS9PLEVBQUQsSUFBZ0IxQyxRQUFRLENBQUNxVSxtREFBUyxDQUFDM1IsRUFBRCxDQUFWLENBQS9CO0FBQ0QsQ0FKTTtBQU1BLE1BQU1nUSwyQkFBMkIsR0FBRyxNQUFNO0VBQy9DLE1BQU0zRCxLQUFLLEdBQUcwTyx3REFBVyxDQUFDUyw4REFBa0IsQ0FBQ0wsbUVBQUQsQ0FBbkIsQ0FBekI7RUFDQSxPQUFPOU8sS0FBSyxLQUFLLElBQWpCO0FBQ0QsQ0FITTtBQUtBLE1BQU15TixjQUFjLEdBQUcsTUFBTTtFQUNsQyxNQUFNTSxTQUFTLEdBQUdXLHdEQUFXLENBQUNRLGtFQUFzQixDQUFDTix5REFBRCxDQUF2QixDQUE3QjtFQUNBLE1BQU01TyxLQUFLLEdBQUcwTyx3REFBVyxDQUFDUyw4REFBa0IsQ0FBQ1AseURBQUQsQ0FBbkIsQ0FBekI7RUFFQSxPQUFPO0lBQUViLFNBQUY7SUFBYS9OO0VBQWIsQ0FBUDtBQUNELENBTE07QUFPQSxNQUFNME4scUJBQXFCLEdBQUcsTUFBTTtFQUN6QyxNQUFNSyxTQUFTLEdBQUdXLHdEQUFXLENBQUNRLGtFQUFzQixDQUFDTCw2REFBRCxDQUF2QixDQUE3QjtFQUNBLE1BQU03TyxLQUFLLEdBQUcwTyx3REFBVyxDQUFDUyw4REFBa0IsQ0FBQ04sNkRBQUQsQ0FBbkIsQ0FBekI7RUFFQSxPQUFPO0lBQUVkLFNBQUY7SUFBYS9OO0VBQWIsQ0FBUDtBQUNELENBTE07QUFPQSxNQUFNNkUsZ0JBQWdCLEdBQUcsTUFBTTtFQUNwQyxNQUFNSSxZQUFZLEdBQUd5Six3REFBVyxDQUFDUSxrRUFBc0IsQ0FBQzdKLHdEQUFELENBQXZCLENBQWhDO0VBQ0EsTUFBTXJGLEtBQUssR0FBRzBPLHdEQUFXLENBQUNTLDhEQUFrQixDQUFDOUosd0RBQUQsQ0FBbkIsQ0FBekI7RUFFQSxPQUFPO0lBQUVKLFlBQUY7SUFBZ0JqRjtFQUFoQixDQUFQO0FBQ0QsQ0FMTTtBQU9BLE1BQU04RSxrQkFBa0IsR0FBRyxNQUFNO0VBQ3RDLE1BQU1LLGNBQWMsR0FBR3VKLHdEQUFXLENBQUNRLGtFQUFzQixDQUFDNUosMERBQUQsQ0FBdkIsQ0FBbEM7RUFDQSxNQUFNdEYsS0FBSyxHQUFHME8sd0RBQVcsQ0FBQ1MsOERBQWtCLENBQUM3SiwwREFBRCxDQUFuQixDQUF6QjtFQUVBLE9BQU87SUFBRUgsY0FBRjtJQUFrQm5GO0VBQWxCLENBQVA7QUFDRCxDQUxNLEVBT1A7O0FBQ08sTUFBTTZQLFdBQVcsR0FBRyxNQUFNO0VBQy9CLE1BQU01ZSxRQUFRLEdBQUd5Uix3REFBVyxFQUE1QjtFQUNBLE1BQU0yTixZQUFZLEdBQUczQix3REFBVyxDQUFDVSxxRUFBeUIsQ0FBQ1IseURBQUQsQ0FBMUIsQ0FBaEM7RUFFQTVCLGdEQUFTLENBQUMsTUFBTTtJQUNkcUQsWUFBWSxJQUFJcGYsUUFBUSxDQUFDMmQsa0RBQVEsRUFBVCxDQUF4QjtFQUNELENBRlEsRUFFTixFQUZNLENBQVQsQ0FKK0IsQ0FNdkI7QUFDVCxDQVBNO0FBU0EsTUFBTXFCLGVBQWUsR0FBSXRjLEVBQUQsSUFBZ0I7RUFDN0MsTUFBTTFDLFFBQVEsR0FBR3lSLHdEQUFXLEVBQTVCO0VBQ0EsTUFBTXBSLE1BQU0sR0FBR29kLHdEQUFXLENBQUVwUyxLQUFELElBQW9DMlMsc0RBQVUsQ0FBQzNTLEtBQUQsRUFBUTNJLEVBQVIsQ0FBL0MsQ0FBMUI7RUFDQSxNQUFNMmMsYUFBYSxHQUFHLENBQUM1Qix3REFBVyxDQUFDUSxrRUFBc0IsQ0FBQ0wsNkRBQUQsQ0FBdkIsQ0FBbEM7RUFDQSxNQUFNMEIsV0FBVyxHQUFHRCxhQUFhLElBQUloZixNQUFqQixJQUEyQixDQUFDQSxNQUFNLENBQUNlLE9BQXZEO0VBRUEyYSxnREFBUyxDQUFDLE1BQU07SUFDZHVELFdBQVcsSUFBSXRmLFFBQVEsQ0FBQzRkLHNEQUFZLENBQUNsYixFQUFELENBQWIsQ0FBdkI7RUFDRCxDQUZRLEVBRU4sQ0FBQ3JDLE1BQUQsQ0FGTSxDQUFULENBTjZDLENBUS9CO0FBQ2YsQ0FUTTtBQVdBLE1BQU1rZixjQUFjLEdBQUcsTUFBTTtFQUNsQyxNQUFNdmYsUUFBUSxHQUFHeVIsd0RBQVcsRUFBNUI7RUFDQSxNQUFNK04sV0FBVyxHQUFHL0Isd0RBQVcsQ0FBQ1cseURBQUQsQ0FBL0I7RUFFQSxPQUFPO0lBQ0xvQixXQURLO0lBRUwxQixjQUFjLEVBQUcyQixDQUFELElBQThCemYsUUFBUSxDQUFDOGQsd0RBQWMsQ0FBQzJCLENBQUQsQ0FBZjtFQUZqRCxDQUFQO0FBSUQsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklQO0FBSUE7QUFFQTtBQUVPLE1BQU1JLFVBQVUsR0FBSXhVLEtBQUQsSUFBb0NBLEtBQUssQ0FBQ25ILE9BQTdEO0FBRUEsTUFBTTRiLFdBQVcsR0FBR0osZ0VBQWMsQ0FBQ0csVUFBRCxFQUFhLENBQUM7RUFBRUU7QUFBRixDQUFELEtBQWVBLEtBQTVCLENBQWxDO0FBRUEsTUFBTTNCLGlCQUFpQixHQUFHc0IsZ0VBQWMsQ0FBQ0csVUFBRCxFQUFhLENBQUM7RUFBRUc7QUFBRixDQUFELEtBQWtCQSxRQUFRLENBQUNSLFdBQXhDLENBQXhDO0FBRUEsTUFBTTtFQUFFekIsU0FBRjtFQUFhQztBQUFiLElBQTRCNEIsaUVBQUEsQ0FBNEJFLFdBQTVCLENBQWxDOztBQUVQLE1BQU1JLGVBQWUsR0FBSTFCLFFBQUQsSUFDdEJrQixnRUFBYyxDQUFDM0IsU0FBRCxFQUFhN1osT0FBRCxJQUN4QkEsT0FBTyxDQUFDTyxNQUFSLENBQWdCcEUsTUFBRCxJQUFhbWUsUUFBUSxLQUFLLFdBQWIsR0FBMkJuZSxNQUFNLENBQUN5UixXQUFsQyxHQUFnRCxDQUFDelIsTUFBTSxDQUFDZ1EsTUFBcEYsQ0FEWSxDQURoQjs7QUFLQSxNQUFNOFAsb0JBQW9CLEdBQUcsQ0FBQzNCLFFBQUQsRUFBbUJDLFlBQW5CLEtBQzNCaUIsZ0VBQWMsQ0FBQ1EsZUFBZSxDQUFDMUIsUUFBRCxDQUFoQixFQUE2QnRhLE9BQUQsSUFDeENBLE9BQU8sQ0FBQ08sTUFBUixDQUFnQnBFLE1BQUQsSUFBWW9lLFlBQVksS0FBSyxLQUFqQixJQUEwQnBlLE1BQU0sQ0FBQ0ksSUFBUCxLQUFnQmdlLFlBQXJFLENBRFksQ0FEaEI7O0FBS0EsTUFBTTJCLGFBQWEsR0FBSUMsUUFBRCxJQUNwQlgsZ0VBQWMsQ0FBQzNCLFNBQUQsRUFBYTdaLE9BQUQsSUFBYTtFQUNyQyxJQUFJbWMsUUFBUSxLQUFLLEVBQWpCLEVBQXFCO0lBQ25CLE9BQU8sRUFBUDtFQUNEOztFQUVELE9BQU9uYyxPQUFPLENBQUNPLE1BQVIsQ0FBZ0JwRSxNQUFELElBQVk7SUFDaEMsTUFBTWlnQixNQUFnQixHQUFHLEVBQXpCOztJQUNBLElBQUlqZ0IsTUFBTSxDQUFDaUQsSUFBWCxFQUFpQjtNQUNmZ2QsTUFBTSxDQUFDdmMsSUFBUCxDQUFZMUQsTUFBTSxDQUFDaUQsSUFBUCxDQUFZb0IsV0FBWixFQUFaO0lBQ0Q7O0lBRUQsSUFBSXJFLE1BQU0sQ0FBQzRYLE9BQVgsRUFBb0I7TUFDbEJxSSxNQUFNLENBQUN2YyxJQUFQLENBQVkxRCxNQUFNLENBQUM0WCxPQUFQLENBQWV2VCxXQUFmLEVBQVo7SUFDRDs7SUFFRCxPQUFPNGIsTUFBTSxDQUFDQyxJQUFQLENBQWFDLENBQUQsSUFBT0EsQ0FBQyxDQUFDMVgsUUFBRixDQUFXdVgsUUFBUSxDQUFDM2IsV0FBVCxFQUFYLENBQW5CLENBQVA7RUFDRCxDQVhNLENBQVA7QUFZRCxDQWpCYSxDQURoQjs7QUFvQk8sTUFBTWlCLElBQUksR0FBRyxDQUFDMGEsUUFBRCxFQUFtQjdCLFFBQW5CLEVBQXFDQyxZQUFyQyxLQUNsQmlCLGdFQUFjLENBQ1pTLG9CQUFvQixDQUFDM0IsUUFBRCxFQUFXQyxZQUFYLENBRFIsRUFFWjJCLGFBQWEsQ0FBQ0MsUUFBRCxDQUZELEVBR1osQ0FBQ0ksZUFBRCxFQUFrQkMsZUFBbEIsS0FBc0M7RUFDcEMsT0FBT0wsUUFBUSxLQUFLLEVBQWIsR0FBa0JJLGVBQWxCLEdBQW9DQyxlQUEzQztBQUNELENBTFcsQ0FEVDtBQVNBLE1BQU1yQyxrQkFBa0IsR0FBR3FCLGdFQUFjLENBQUMzQixTQUFELEVBQWE3WixPQUFELElBQzFEQSxPQUFPLEdBQ0hBLE9BQU8sQ0FDSk8sTUFESCxDQUNXdVUsQ0FBRCxJQUFPOUYsT0FBTyxDQUFDOEYsQ0FBQyxDQUFDakssS0FBSCxDQUR4QixFQUVHdFIsR0FGSCxDQUdLdWIsQ0FBRCxLQUFxQjtFQUNuQm5NLFFBQVEsRUFBRW1NLENBQUMsQ0FBQ3RXLEVBRE87RUFFbkJpZSxTQUFTLEVBQUUzSCxDQUFDLENBQUVqSztBQUZLLENBQXJCLENBSEosQ0FERyxHQVNILEVBVjBDLENBQXpDLEVBYVA7O0FBQ08sTUFBTTZSLGFBQWEsR0FBSUMsVUFBRCxJQUMzQm5CLGdFQUFjLENBQUNHLFVBQUQsRUFBYSxDQUFDO0VBQUVpQixRQUFRLEdBQUc7QUFBYixDQUFELEtBQXVCQSxRQUFRLENBQUNELFVBQUQsQ0FBNUMsQ0FEVDtBQUdBLE1BQU01QyxzQkFBc0IsR0FBSTRDLFVBQUQsSUFDcENuQixnRUFBYyxDQUFDa0IsYUFBYSxDQUFDQyxVQUFELENBQWQsRUFBNkJFLE9BQUQsSUFBYSxDQUFBQSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUMsTUFBVCxNQUFvQnJCLHlEQUE3RCxDQURUO0FBR0EsTUFBTXpCLGtCQUFrQixHQUFJMkMsVUFBRCxJQUNoQ25CLGdFQUFjLENBQUNrQixhQUFhLENBQUNDLFVBQUQsQ0FBZCxFQUE2QkUsT0FBRCxJQUN4QyxDQUFBQSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUMsTUFBVCxNQUFvQnJCLDBEQUFwQixHQUE2Q29CLE9BQTdDLGFBQTZDQSxPQUE3Qyx1QkFBNkNBLE9BQU8sQ0FBRWhTLEtBQXRELEdBQThELElBRGxELENBRFQ7QUFLQSxNQUFNb1AseUJBQXlCLEdBQUkwQyxVQUFELElBQ3ZDbkIsZ0VBQWMsQ0FBQ2tCLGFBQWEsQ0FBQ0MsVUFBRCxDQUFkLEVBQTZCRSxPQUFELElBQWFBLE9BQU8sS0FBSzVWLFNBQXJELENBRFQ7Ozs7Ozs7Ozs7Ozs7OztBQ2hGUDtBQUVBO0FBQ0E7QUFDQTtBQUVPLGVBQWUrUCxVQUFmLENBQTBCck8sUUFBMUIsRUFBb0U7RUFDekUsTUFBTS9HLElBQUksR0FBRyxNQUFNcEgsa0VBQWlCLENBQUNtTyxRQUFELENBQXBDO0VBQ0EsSUFBSTNMLE1BQUo7O0VBRUEsSUFBSTRFLElBQUksQ0FBQ3JGLElBQUwsS0FBY3lFLHlEQUFsQixFQUFrQztJQUNoQ2hFLE1BQU0sR0FBRyxNQUFNa2dCLCtEQUFlLENBQUN0YixJQUFELENBQTlCO0VBQ0Q7O0VBQ0QsSUFBSUEsSUFBSSxDQUFDckYsSUFBTCxLQUFjeUUsZ0VBQWxCLEVBQXlDO0lBQ3ZDaEUsTUFBTSxHQUFHLE1BQU12QyxzRUFBc0IsQ0FBQ21ILElBQUQsQ0FBckM7RUFDRDs7RUFDRCxJQUFJQSxJQUFJLENBQUNyRixJQUFMLEtBQWN5RSwyREFBbEIsRUFBb0M7SUFDbEMsTUFBTW9jLFdBQVcsR0FBRyxNQUFNSCw2RUFBeUIsQ0FBQ3JiLElBQUQsQ0FBbkQ7SUFDQTVFLE1BQU0sR0FBR29nQixXQUFUO0VBQ0Q7O0VBQ0QsSUFBSXhiLElBQUksQ0FBQ3JGLElBQUwsS0FBY3lFLDhEQUFsQixFQUF1QztJQUNyQ2hFLE1BQU0sR0FBRztNQUFFYSxJQUFJLEVBQUUrRDtJQUFSLENBQVQ7RUFDRDs7RUFFRCxJQUFJLENBQUM1RSxNQUFMLEVBQWE7SUFDWCxNQUFNLElBQUloQixLQUFKLENBQVUsMEJBQTBCNEYsSUFBSSxDQUFDckYsSUFBekMsQ0FBTjtFQUNEOztFQUVELE9BQU9TLE1BQVA7QUFDRDs7Ozs7Ozs7Ozs7O0FDN0J5QztBQUMzQjtBQUNmLGNBQWMsNkNBQU07QUFDcEIsSUFBSSxnREFBUztBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9EYXNoYm9hcmRzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYnVpbGRDYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL25hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQXBwQ29uZmlnV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0JhZGdlcy9QbHVnaW5EaXNhYmxlZEJhZGdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL1BsdWdpbkVudGVycHJpc2VCYWRnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0JhZGdlcy9QbHVnaW5JbnN0YWxsQmFkZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvUGx1Z2luVXBkYXRlQXZhaWxhYmxlQmFkZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0JhZGdlcy9zaGFyZWRTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0dldFN0YXJ0ZWRXaXRoUGx1Z2luL0dldFN0YXJ0ZWRXaXRoQXBwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvR2V0U3RhcnRlZFdpdGhQbHVnaW4vR2V0U3RhcnRlZFdpdGhEYXRhU291cmNlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvR2V0U3RhcnRlZFdpdGhQbHVnaW4vR2V0U3RhcnRlZFdpdGhQbHVnaW4udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9HZXRTdGFydGVkV2l0aFBsdWdpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvSW5zdGFsbENvbnRyb2xzL0V4dGVybmFsbHlNYW5hZ2VkQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvSW5zdGFsbENvbnRyb2xzL0luc3RhbGxDb250cm9scy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0luc3RhbGxDb250cm9scy9JbnN0YWxsQ29udHJvbHNCdXR0b24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9JbnN0YWxsQ29udHJvbHMvaW5kZXgudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9Mb2FkZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5EYXNoYm9hcmRzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0JvZHkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5EZXRhaWxzRGlzYWJsZWRFcnJvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNIZWFkZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNTaWduYXR1cmUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5Mb2dvLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luU2lnbmF0dXJlRGV0YWlsc0JhZGdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvVmVyc2lvbkxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vaG9va3MvdXNlUGx1Z2luQ29uZmlnLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2hvb2tzL3VzZVBsdWdpbkRldGFpbHNUYWJzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL3BhZ2VzL1BsdWdpbkRldGFpbHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vc3RhdGUvaG9va3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9zdGF0ZS9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy91dGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtY2VhOGU4MjZkYy8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuNC4wLTBlZjQ1MjE1NDQtMDg4OWRhOTE5Yi56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlUHJldmlvdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmlhbCgpIHtcbiAgY29uc3QgZXhwaXJ5ID0gY29uZmlnLmxpY2Vuc2VJbmZvPy50cmlhbEV4cGlyeTtcbiAgcmV0dXJuICEhKGV4cGlyeSAmJiBleHBpcnkgPiAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFRyaWFsID0gKCkgPT4gaXNUcmlhbCgpICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBQbHVnaW5EYXNoYm9hcmQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBkYXNoYm9hcmRzOiBQbHVnaW5EYXNoYm9hcmRbXTtcbiAgb25JbXBvcnQ6IChkYXNoYm9hcmQ6IFBsdWdpbkRhc2hib2FyZCwgb3ZlcndyaXRlOiBib29sZWFuKSA9PiB2b2lkO1xuICBvblJlbW92ZTogKGRhc2hib2FyZDogUGx1Z2luRGFzaGJvYXJkKSA9PiB2b2lkO1xufVxuXG5jb25zdCBEYXNoYm9hcmRzVGFibGU6IEZDPFByb3BzPiA9ICh7IGRhc2hib2FyZHMsIG9uSW1wb3J0LCBvblJlbW92ZSB9KSA9PiB7XG4gIGZ1bmN0aW9uIGJ1dHRvblRleHQoZGFzaGJvYXJkOiBQbHVnaW5EYXNoYm9hcmQpIHtcbiAgICByZXR1cm4gZGFzaGJvYXJkLnJldmlzaW9uICE9PSBkYXNoYm9hcmQuaW1wb3J0ZWRSZXZpc2lvbiA/ICdVcGRhdGUnIDogJ1JlLWltcG9ydCc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVcIj5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2Rhc2hib2FyZHMubWFwKChkYXNoYm9hcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9e2Ake2Rhc2hib2FyZC5kYXNoYm9hcmRJZH0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTFcIj5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYXBwc1wiIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7ZGFzaGJvYXJkLmltcG9ydGVkID8gKFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZGFzaGJvYXJkLmltcG9ydGVkVXJsfT57ZGFzaGJvYXJkLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2Rhc2hib2FyZC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICB7IWRhc2hib2FyZC5pbXBvcnRlZCA/IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IG9uSW1wb3J0KGRhc2hib2FyZCwgZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgSW1wb3J0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gb25JbXBvcnQoZGFzaGJvYXJkLCB0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0KGRhc2hib2FyZCl9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtkYXNoYm9hcmQuaW1wb3J0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIGRhc2hib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZShkYXNoYm9hcmQpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZHNUYWJsZTtcbiIsImltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgbG9jYXRpb25VdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQge1xuICBEYXRhU291cmNlV2l0aEJhY2tlbmQsXG4gIGdldERhdGFTb3VyY2VTcnYsXG4gIEhlYWx0aENoZWNrRXJyb3IsXG4gIEhlYWx0aENoZWNrUmVzdWx0RGV0YWlscyxcbiAgaXNGZXRjaEVycm9yLFxuICBsb2NhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXBkYXRlTmF2SW5kZXggfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IGdldFBsdWdpblNldHRpbmdzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpbl9sb2FkZXInO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5LCBUaHVua0Rpc3BhdGNoLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuaW1wb3J0IHsgYnVpbGRDYXRlZ29yaWVzIH0gZnJvbSAnLi9idWlsZENhdGVnb3JpZXMnO1xuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHtcbiAgZGF0YVNvdXJjZUxvYWRlZCxcbiAgZGF0YVNvdXJjZU1ldGFMb2FkZWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQsXG4gIGRhdGFTb3VyY2VzTG9hZGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkLFxuICB0ZXN0RGF0YVNvdXJjZUZhaWxlZCxcbiAgdGVzdERhdGFTb3VyY2VTdGFydGluZyxcbiAgdGVzdERhdGFTb3VyY2VTdWNjZWVkZWQsXG59IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZSwgZ2V0RGF0YVNvdXJjZU1ldGEgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVR5cGVzTG9hZGVkUGF5bG9hZCB7XG4gIHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW107XG4gIGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyB7XG4gIGxvYWREYXRhU291cmNlOiB0eXBlb2YgbG9hZERhdGFTb3VyY2U7XG4gIGxvYWREYXRhU291cmNlTWV0YTogdHlwZW9mIGxvYWREYXRhU291cmNlTWV0YTtcbiAgZ2V0RGF0YVNvdXJjZTogdHlwZW9mIGdldERhdGFTb3VyY2U7XG4gIGdldERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZU1ldGE7XG4gIGltcG9ydERhdGFTb3VyY2VQbHVnaW46IHR5cGVvZiBpbXBvcnREYXRhU291cmNlUGx1Z2luO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzIHtcbiAgZ2V0RGF0YXNvdXJjZVNydjogdHlwZW9mIGdldERhdGFTb3VyY2VTcnY7XG4gIGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcGFnZUlkOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzID0ge1xuICAgIGxvYWREYXRhU291cmNlLFxuICAgIGxvYWREYXRhU291cmNlTWV0YSxcbiAgICBnZXREYXRhU291cmNlLFxuICAgIGdldERhdGFTb3VyY2VNZXRhLFxuICAgIGltcG9ydERhdGFTb3VyY2VQbHVnaW4sXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBpZiAoIXBhZ2VJZCkge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2FkZWREYXRhU291cmNlID0gYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlKHBhZ2VJZCkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlTWV0YShsb2FkZWREYXRhU291cmNlKSk7XG5cbiAgICAgIC8vIGhhdmUgd2UgYWxyZWFkeSBsb2FkZWQgdGhlIHBsdWdpbiB0aGVuIHdlIGNhbiBza2lwIHRoZSBzdGVwcyBiZWxvdz9cbiAgICAgIGlmIChnZXRTdGF0ZSgpLmRhdGFTb3VyY2VTZXR0aW5ncy5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2UoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgcGFnZUlkKTtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNZXRhID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2VNZXRhKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UhLnR5cGUpO1xuICAgICAgY29uc3QgaW1wb3J0ZWRQbHVnaW4gPSBhd2FpdCBkZXBlbmRlbmNpZXMuaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihkYXRhU291cmNlTWV0YSk7XG5cbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQoaW1wb3J0ZWRQbHVnaW4pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKGVycikpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RGF0YVNvdXJjZSA9IChcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyA9IHtcbiAgICBnZXREYXRhc291cmNlU3J2LFxuICAgIGdldEJhY2tlbmRTcnYsXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBkc0FwaSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXREYXRhc291cmNlU3J2KCkuZ2V0KGRhdGFTb3VyY2VOYW1lKTtcblxuICAgIGlmICghZHNBcGkudGVzdERhdGFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nKCkpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS53aXRoTm9CYWNrZW5kQ2FjaGUoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHNBcGkudGVzdERhdGFzb3VyY2UoKTtcblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZChyZXN1bHQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBsZXQgbWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZGV0YWlsczogSGVhbHRoQ2hlY2tSZXN1bHREZXRhaWxzO1xuXG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBIZWFsdGhDaGVja0Vycm9yKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuICAgICAgICAgIGRldGFpbHMgPSBlcnIuZGV0YWlscztcbiAgICAgICAgfSBlbHNlIGlmIChpc0ZldGNoRXJyb3IoZXJyKSkge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnIuZGF0YS5tZXNzYWdlID8/IGBIVFRQIGVycm9yICR7ZXJyLnN0YXR1c1RleHR9YDtcbiAgICAgICAgfSBlbHNlIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlRmFpbGVkKHsgbWVzc2FnZSwgZGV0YWlscyB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9kYXRhc291cmNlcycpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZSh1aWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGF3YWl0IGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkKTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VMb2FkZWQoZGF0YVNvdXJjZSkpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VNZXRhKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBsdWdpbkluZm8gPSAoYXdhaXQgZ2V0UGx1Z2luU2V0dGluZ3MoZGF0YVNvdXJjZS50eXBlKSkgYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gICAgY29uc3QgcGx1Z2luID0gYXdhaXQgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihwbHVnaW5JbmZvKTtcbiAgICBjb25zdCBpc0JhY2tlbmQgPSBwbHVnaW4uRGF0YVNvdXJjZUNsYXNzLnByb3RvdHlwZSBpbnN0YW5jZW9mIERhdGFTb3VyY2VXaXRoQmFja2VuZDtcbiAgICBjb25zdCBtZXRhID0ge1xuICAgICAgLi4ucGx1Z2luSW5mbyxcbiAgICAgIGlzQmFja2VuZDogcGx1Z2luSW5mby5iYWNrZW5kIHx8IGlzQmFja2VuZCxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZU1ldGFMb2FkZWQobWV0YSkpO1xuXG4gICAgcGx1Z2luLm1ldGEgPSBtZXRhO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZSwgcGx1Z2luKSkpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldCBkYXRhIHNvdXJjZSBieSB1aWQgb3IgaWQsIGlmIG9sZCBpZCBkZXRlY3RlZCBoYW5kbGVzIHJlZGlyZWN0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+IHtcbiAgLy8gVHJ5IGZpcnN0IHdpdGggdWlkIGFwaVxuICB0cnkge1xuICAgIGNvbnN0IGJ5VWlkID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy91aWQvJHt1aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoYnlVaWQub2spIHtcbiAgICAgIHJldHVybiBieVVpZC5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBsb29rdXAgZGF0YSBzb3VyY2UgYnkgdWlkJywgZXJyKTtcbiAgfVxuXG4gIC8vIHRyeSBsb29rdXAgYnkgb2xkIGRiIGlkXG4gIGNvbnN0IGlkID0gdHlwZW9mIHVpZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh1aWQsIDEwKSA6IHVpZDtcbiAgaWYgKCFOdW1iZXIuaXNOYU4oaWQpKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzLyR7aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBJZiB0aGUgdWlkIGlzIGEgbnVtYmVyLCB0aGVuIHRoaXMgaXMgYSByZWZyZXNoIG9uIG9uZSBvZiB0aGUgc2V0dGluZ3MgdGFic1xuICAgIC8vIGFuZCB3ZSBjYW4gcmV0dXJuIHRoZSByZXNwb25zZSBkYXRhXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHR5cGVvZiB1aWQgPT09ICdudW1iZXInICYmIHJlc3BvbnNlLmRhdGEuaWQgPT09IHVpZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgLy8gTm90IGlkZWFsIHRvIGRvIGEgZnVsbCBwYWdlIHJlbG9hZCBoZXJlIGJ1dCBzbyB0cmlja3kgdG8gaGFuZGxlIHRoaXNcbiAgICAvLyBvdGhlcndpc2UgV2UgY2FuIHVwZGF0ZSB0aGUgbG9jYXRpb24gdXNpbmcgcmVhY3Qgcm91dGVyLCBidXQgbmVlZCB0b1xuICAgIC8vIGZ1bGx5IHJlbG9hZCB0aGUgcm91dGUgYXMgdGhlIG5hdiBtb2RlbCBwYWdlIGluZGV4IGlzIG5vdCBtYXRjaGluZyB3aXRoXG4gICAgLy8gdGhlIHVybCBpbiB0aGF0IGNhc2UuIEFuZCByZWFjdCByb3V0ZXIgaGFzIG5vIHdheSB0byB1bm1vdW50IHJlbW91bnQgYVxuICAgIC8vIHJvdXRlXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLmRhdGEuaWQudG9TdHJpbmcoKSA9PT0gdWlkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uVXRpbC5hc3N1cmVCYXNlVXJsKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3BvbnNlLmRhdGEudWlkfWApO1xuICAgICAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5nczsgLy8gYXZvaWRzIGZsYXNoaW5nIGFuIGVycm9yXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhU291cmNlKHBsdWdpbjogRGF0YVNvdXJjZVBsdWdpbk1ldGEpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZERhdGFTb3VyY2VzKCkpO1xuXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2VzO1xuXG4gICAgY29uc3QgbmV3SW5zdGFuY2UgPSB7XG4gICAgICBuYW1lOiBwbHVnaW4ubmFtZSxcbiAgICAgIHR5cGU6IHBsdWdpbi5pZCxcbiAgICAgIGFjY2VzczogJ3Byb3h5JyxcbiAgICAgIGlzRGVmYXVsdDogZGF0YVNvdXJjZXMubGVuZ3RoID09PSAwLFxuICAgIH07XG5cbiAgICBpZiAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKSkge1xuICAgICAgbmV3SW5zdGFuY2UubmFtZSA9IGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9kYXRhc291cmNlcycsIG5ld0luc3RhbmNlKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXN1bHQuZGF0YXNvdXJjZS51aWR9YCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZVBsdWdpbnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkKCkpO1xuICAgIGNvbnN0IHBsdWdpbnMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsdWdpbnMnLCB7IGVuYWJsZWQ6IDEsIHR5cGU6ICdkYXRhc291cmNlJyB9KTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnMpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkKHsgcGx1Z2lucywgY2F0ZWdvcmllcyB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWAsIGRhdGFTb3VyY2UpOyAvLyBieSBVSUQgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGxvYWREYXRhU291cmNlKGRhdGFTb3VyY2UudWlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEYXRhU291cmNlKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlO1xuXG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9kYXRhc291cmNlcycpO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgSXRlbVdpdGhOYW1lIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUV4aXRzKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiAoXG4gICAgZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YVNvdXJjZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9KS5sZW5ndGggPiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV3TmFtZShkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICAvLyBOZWVkIHRvIGxvb3AgdGhyb3VnaCBjdXJyZW50IGRhdGEgc291cmNlcyB0byBtYWtlIHN1cmVcbiAgLy8gdGhlIG5hbWUgZG9lc24ndCBleGlzdFxuICB3aGlsZSAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuYW1lKSkge1xuICAgIC8vIElmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGRvZXNuJ3QgZW5kIHdpdGggJy14J1xuICAgIC8vIHdlIGNhbiBhZGQgLTEgdG8gdGhlIG5hbWUgYW5kIGJlIGRvbmUuXG4gICAgaWYgKCFuYW1lSGFzU3VmZml4KG5hbWUpKSB7XG4gICAgICBuYW1lID0gYCR7bmFtZX0tMWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGVuZHMgd2l0aCAnLXgnXG4gICAgICAvLyB3ZSBjYW4gdHJ5IHRvIGluY3JlbWVudCB0aGUgbGFzdCBkaWdpdCB1bnRpbCB0aGUgbmFtZSBpcyB1bmlxdWVcblxuICAgICAgLy8gcmVtb3ZlIHRoZSAneCcgcGFydCBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgbnVtYmVyXG4gICAgICBuYW1lID0gYCR7Z2V0TmV3TmFtZShuYW1lKX0ke2luY3JlbWVudExhc3REaWdpdChnZXRMYXN0RGlnaXQobmFtZSkpfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIG5hbWVIYXNTdWZmaXgobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLmVuZHNXaXRoKCctJywgbmFtZS5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdERpZ2l0KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gcGFyc2VJbnQobmFtZS5zbGljZSgtMSksIDEwKTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50TGFzdERpZ2l0KGRpZ2l0OiBudW1iZXIpIHtcbiAgcmV0dXJuIGlzTmFOKGRpZ2l0KSA/IDEgOiBkaWdpdCArIDE7XG59XG5cbmZ1bmN0aW9uIGdldE5ld05hbWUobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnNsaWNlKDAsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKTogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSA9IFtcbiAgICB7IGlkOiAndHNkYicsIHRpdGxlOiAnVGltZSBzZXJpZXMgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnbG9nZ2luZycsIHRpdGxlOiAnTG9nZ2luZyAmIGRvY3VtZW50IGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3RyYWNpbmcnLCB0aXRsZTogJ0Rpc3RyaWJ1dGVkIHRyYWNpbmcnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdzcWwnLCB0aXRsZTogJ1NRTCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2Nsb3VkJywgdGl0bGU6ICdDbG91ZCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2VudGVycHJpc2UnLCB0aXRsZTogJ0VudGVycHJpc2UgcGx1Z2lucycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2lvdCcsIHRpdGxlOiAnSW5kdXN0cmlhbCAmIElvVCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ290aGVyJywgdGl0bGU6ICdPdGhlcnMnLCBwbHVnaW5zOiBbXSB9LFxuICBdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlJbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5PiA9IHt9O1xuICBjb25zdCBwbHVnaW5JbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbk1ldGE+ID0ge307XG4gIGNvbnN0IGVudGVycHJpc2VQbHVnaW5zID0gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk7XG5cbiAgLy8gYnVpbGQgaW5kaWNlc1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjYXRlZ29yeUluZGV4W2NhdGVnb3J5LmlkXSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIGNvbnN0IGVudGVycHJpc2VQbHVnaW4gPSBlbnRlcnByaXNlUGx1Z2lucy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uaWQpO1xuICAgIC8vIEZvcmNlIGNhdGVnb3J5IGZvciBlbnRlcnByaXNlIHBsdWdpbnNcbiAgICBpZiAocGx1Z2luLmVudGVycHJpc2UgfHwgZW50ZXJwcmlzZVBsdWdpbikge1xuICAgICAgcGx1Z2luLmNhdGVnb3J5ID0gJ2VudGVycHJpc2UnO1xuICAgICAgcGx1Z2luLnVubGljZW5zZWQgPSAhZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpO1xuICAgICAgcGx1Z2luLmluZm8ubGlua3MgPSBlbnRlcnByaXNlUGx1Z2luPy5pbmZvPy5saW5rcyB8fCBwbHVnaW4uaW5mby5saW5rcztcbiAgICB9XG5cbiAgICAvLyBGaXggbGluayBuYW1lXG4gICAgaWYgKHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgcGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgICAgbGluay5uYW1lID0gJ0xlYXJuIG1vcmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uY2F0ZWdvcnkpIHx8IGNhdGVnb3J5SW5kZXhbJ290aGVyJ107XG4gICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgLy8gYWRkIHRvIHBsdWdpbiBpbmRleFxuICAgIHBsdWdpbkluZGV4W3BsdWdpbi5pZF0gPSBwbHVnaW47XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5cbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdjbG91ZCcpIHtcbiAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCkpO1xuICAgIH1cblxuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpbnNcbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdlbnRlcnByaXNlJykge1xuICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgZW50ZXJwcmlzZVBsdWdpbnMpIHtcbiAgICAgICAgaWYgKCFwbHVnaW5JbmRleFtwbHVnaW4uaWRdKSB7XG4gICAgICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0UGx1Z2lucyhjYXRlZ29yeS5wbHVnaW5zKTtcbiAgfVxuXG4gIC8vIE9ubHkgc2hvdyBjYXRlZ29yaWVzIHdpdGggcGx1Z2luc1xuICByZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoKGMpID0+IGMucGx1Z2lucy5sZW5ndGggPiAwKTtcbn1cblxuZnVuY3Rpb24gc29ydFBsdWdpbnMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSkge1xuICBjb25zdCBzb3J0aW5nUnVsZXM6IHsgW2lkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBwcm9tZXRoZXVzOiAxMDAsXG4gICAgZ3JhcGhpdGU6IDk1LFxuICAgIGxva2k6IDkwLFxuICAgIG15c3FsOiA4MCxcbiAgICBqYWVnZXI6IDEwMCxcbiAgICBwb3N0Z3JlczogNzksXG4gICAgZ2Nsb3VkOiAtMSxcbiAgfTtcblxuICBwbHVnaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhU29ydCA9IHNvcnRpbmdSdWxlc1thLmlkXSB8fCAwO1xuICAgIGNvbnN0IGJTb3J0ID0gc29ydGluZ1J1bGVzW2IuaWRdIHx8IDA7XG4gICAgaWYgKGFTb3J0ID4gYlNvcnQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGFTb3J0IDwgYlNvcnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSB7XG4gIHJldHVybiBbXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuaycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBTcGx1bmsgbG9ncycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc3BsdW5rX2xvZ29fMTI4LnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtb3JhY2xlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ09yYWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBPcmFjbGUgU1FMJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9vcmFjbGUucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1keW5hdHJhY2UtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnRHluYXRyYWNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIER5bmF0cmFjZSBkYXRhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9keW5hdHJhY2UucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zZXJ2aWNlbm93LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXJ2aWNlTm93IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU2VydmljZU5vdycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2VydmljZW5vdy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWRhdGFkb2ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RhdGFEb2cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdEYXRhRG9nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9kYXRhZG9nLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbmV3cmVsaWMtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ05ldyBSZWxpYyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ05ldyBSZWxpYycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbmV3cmVsaWMuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1tb25nb2RiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdNb25nb0RCIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTW9uZ29EQicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbW9uZ29kYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNub3dmbGFrZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU25vd2ZsYWtlIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU25vd2ZsYWtlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zbm93Zmxha2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS13YXZlZnJvbnQtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhdmVmcm9udCBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1dhdmVmcm9udCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvd2F2ZWZyb250LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2Rsb3BlczctYXBwZHluYW1pY3MtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcER5bmFtaWNzIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnQXBwRHluYW1pY3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2FwcGR5bmFtaWNzLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FwaGFuYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU0FQIEhBTkHCriBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NBUCBIQU5Bwq4nLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhcF9oYW5hLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtaG9uZXljb21iLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdIb25leWNvbWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvaG9uZXljb21iLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FsZXNmb3JjZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2FsZXNmb3JjZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU2FsZXNmb3JjZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FsZXNmb3JjZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWppcmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ppcmEgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0ppcmEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2ppcmFfbG9nby5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWdpdGxhYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnR2l0TGFiIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdHaXRMYWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2dpdGxhYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1tb25pdG9yaW5nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTaWduYWxGeCBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rIEluZnJhc3RydWN0dXJlIE1vbml0b3JpbmcnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NpZ25hbGZ4LWxvZ28uc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1henVyZWRldm9wcy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXp1cmUgRGV2b3BzIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0F6dXJlIERldm9wcycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvYXp1cmUtZGV2b3BzLnBuZycsXG4gICAgfSksXG4gIF07XG59XG5cbmZ1bmN0aW9uIGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiAnZ2Nsb3VkJyxcbiAgICBuYW1lOiAnR3JhZmFuYSBDbG91ZCcsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9zdGVkIEdyYXBoaXRlLCBQcm9tZXRoZXVzLCBhbmQgTG9raScsXG4gICAgICBsb2dvczogeyBzbWFsbDogJ3B1YmxpYy9pbWcvZ3JhZmFuYV9pY29uLnN2ZycsIGxhcmdlOiAnYXNkJyB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9ncmFmYW5hLmNvbS9wcm9kdWN0cy9jbG91ZC8nLFxuICAgICAgICAgIG5hbWU6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG5cbmludGVyZmFjZSBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1nVXJsOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFBoYW50b21QbHVnaW4ob3B0aW9uczogR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IG9wdGlvbnMuaWQsXG4gICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiBvcHRpb25zLmltZ1VybCwgbGFyZ2U6IG9wdGlvbnMuaW1nVXJsIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6IGNvbmZpZy5wbHVnaW5DYXRhbG9nVVJMICsgb3B0aW9ucy5pZCxcbiAgICAgICAgICBuYW1lOiAnSW5zdGFsbCBub3cnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncywgUGx1Z2luVHlwZSwgUGx1Z2luSW5jbHVkZSwgTmF2TW9kZWwsIE5hdk1vZGVsSXRlbSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFByb0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1Byb0JhZGdlJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBoaWdobGlnaHRUcmlhbCB9IGZyb20gJy4uLy4uL2FkbWluL3V0aWxzJztcbmltcG9ydCB7IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnLi4vc2V0dGluZ3MvUGx1Z2luU2V0dGluZ3MnO1xuXG5jb25zdCBsb2FkaW5nRFNUeXBlID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROYXZNb2RlbChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MsIHBsdWdpbjogR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4pOiBOYXZNb2RlbEl0ZW0ge1xuICBjb25zdCBwbHVnaW5NZXRhID0gcGx1Z2luLm1ldGE7XG4gIGNvbnN0IGhpZ2hsaWdodHNFbmFibGVkID0gY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuICBjb25zdCBuYXZNb2RlbDogTmF2TW9kZWxJdGVtID0ge1xuICAgIGltZzogcGx1Z2luTWV0YS5pbmZvLmxvZ29zLmxhcmdlLFxuICAgIGlkOiAnZGF0YXNvdXJjZS0nICsgZGF0YVNvdXJjZS51aWQsXG4gICAgc3ViVGl0bGU6IGBUeXBlOiAke3BsdWdpbk1ldGEubmFtZX1gLFxuICAgIHVybDogJycsXG4gICAgdGV4dDogZGF0YVNvdXJjZS5uYW1lLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ0RhdGEgU291cmNlcycsIHVybDogJ2RhdGFzb3VyY2VzJyB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBpY29uOiAnc2xpZGVycy12LWFsdCcsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1zZXR0aW5ncy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBpZiAocGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBwYWdlLnRpdGxlLFxuICAgICAgICBpY29uOiBwYWdlLmljb24sXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vP3BhZ2U9JHtwYWdlLmlkfWAsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1wYWdlLSR7cGFnZS5pZH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBsdWdpbk1ldGEuaW5jbHVkZXMgJiYgaGFzRGFzaGJvYXJkcyhwbHVnaW5NZXRhLmluY2x1ZGVzKSAmJiBjb250ZXh0U3J2Lmhhc1JvbGUoJ0FkbWluJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaWNvbjogJ2FwcHMnLFxuICAgICAgaWQ6IGBkYXRhc291cmNlLWRhc2hib2FyZHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgdGV4dDogJ0Rhc2hib2FyZHMnLFxuICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9kYXNoYm9hcmRzYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlzTG9hZGluZ05hdiA9IGRhdGFTb3VyY2UudHlwZSA9PT0gbG9hZGluZ0RTVHlwZTtcblxuICBjb25zdCBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtcGVybWlzc2lvbnMtYmFkZ2UnO1xuICBjb25zdCBkc1Blcm1pc3Npb25zOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnbG9jaycsXG4gICAgaWQ6IGBkYXRhc291cmNlLXBlcm1pc3Npb25zLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnUGVybWlzc2lvbnMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vcGVybWlzc2lvbnNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBkc1Blcm1pc3Npb25zLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdkc3Blcm1pc3Npb25zJykpIHtcbiAgICBpZiAoY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQpKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChkc1Blcm1pc3Npb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmRzUGVybWlzc2lvbnMsXG4gICAgICB1cmw6IGRzUGVybWlzc2lvbnMudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYW5hbHl0aWNzRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1pbnNpZ2h0cy1iYWRnZSc7XG4gIGNvbnN0IGFuYWx5dGljczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2luZm8tY2lyY2xlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtaW5zaWdodHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdJbnNpZ2h0cycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9pbnNpZ2h0c2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGFuYWx5dGljcy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2FuYWx5dGljcycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goYW5hbHl0aWNzKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uYW5hbHl0aWNzLFxuICAgICAgdXJsOiBhbmFseXRpY3MudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNhY2hpbmdFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLXF1ZXJ5LWNhY2hpbmctYmFkZ2UnO1xuXG4gIGNvbnN0IGNhY2hpbmc6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdkYXRhYmFzZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWNhY2hlLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnQ2FjaGUnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vY2FjaGVgLFxuICAgIGhpZGVGcm9tVGFiczogIXBsdWdpbk1ldGEuaXNCYWNrZW5kIHx8ICFjb25maWcuY2FjaGluZy5lbmFibGVkLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBjYWNoaW5nLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2NhY2hpbmcnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGNhY2hpbmcpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5jYWNoaW5nLFxuICAgICAgdXJsOiBjYWNoaW5nLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZU5hdihtYWluOiBOYXZNb2RlbEl0ZW0sIHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGxldCBub2RlOiBOYXZNb2RlbEl0ZW0gPSB7IHRleHQ6ICcnIH07XG5cbiAgLy8gZmluZCBhY3RpdmUgcGFnZVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1haW4uY2hpbGRyZW4hKSB7XG4gICAgaWYgKGNoaWxkLmlkIS5pbmRleE9mKHBhZ2VOYW1lKSA+IDApIHtcbiAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlID0gY2hpbGQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbm9kZSEsXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYocGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgY29uc3QgbWFpbiA9IGJ1aWxkTmF2TW9kZWwoXG4gICAge1xuICAgICAgYWNjZXNzOiAnJyxcbiAgICAgIGJhc2ljQXV0aDogZmFsc2UsXG4gICAgICBiYXNpY0F1dGhVc2VyOiAnJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICBkYXRhYmFzZTogJycsXG4gICAgICBpZDogMSxcbiAgICAgIHVpZDogJ3gnLFxuICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcbiAgICAgIGpzb25EYXRhOiB7IGF1dGhUeXBlOiAnY3JlZGVudGlhbHMnLCBkZWZhdWx0UmVnaW9uOiAnZXUtd2VzdC0yJyB9LFxuICAgICAgbmFtZTogJ0xvYWRpbmcnLFxuICAgICAgb3JnSWQ6IDEsXG4gICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICB0eXBlOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZU5hbWU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTG9nb1VybDogJ3B1YmxpYy9pbWcvaWNuLWRhdGFzb3VyY2Uuc3ZnJyxcbiAgICAgIHVybDogJycsXG4gICAgICB1c2VyOiAnJyxcbiAgICAgIHNlY3VyZUpzb25GaWVsZHM6IHt9LFxuICAgIH0sXG4gICAge1xuICAgICAgbWV0YToge1xuICAgICAgICBpZDogJzEnLFxuICAgICAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgbGlua3M6IFt7IG5hbWU6ICcnLCB1cmw6ICcnIH1dLFxuICAgICAgICAgIGxvZ29zOiB7XG4gICAgICAgICAgICBsYXJnZTogJycsXG4gICAgICAgICAgICBzbWFsbDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICAgICAgdXBkYXRlZDogJycsXG4gICAgICAgICAgdmVyc2lvbjogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVzOiBbXSxcbiAgICAgICAgbW9kdWxlOiAnJyxcbiAgICAgICAgYmFzZVVybDogJycsXG4gICAgICB9LFxuICAgIH0gYXMgYW55XG4gICk7XG5cbiAgcmV0dXJuIGdldERhdGFTb3VyY2VOYXYobWFpbiwgcGFnZU5hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNEYXNoYm9hcmRzKGluY2x1ZGVzOiBQbHVnaW5JbmNsdWRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBpbmNsdWRlcy5maW5kKChpbmNsdWRlKSA9PiB7XG4gICAgICByZXR1cm4gaW5jbHVkZS50eXBlID09PSAnZGFzaGJvYXJkJztcbiAgICB9KSAhPT0gdW5kZWZpbmVkXG4gICk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBVcmxRdWVyeVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VzU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRhc291cmNlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlcyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5uYW1lKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UuZGF0YWJhc2UpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS50eXBlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVBsdWdpbnMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLmRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnBsdWdpbnMuZmlsdGVyKCh0eXBlOiBEYXRhU291cmNlUGx1Z2luTWV0YSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHR5cGUubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2UgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIGRhdGFTb3VyY2VJZDogVXJsUXVlcnlWYWx1ZSk6IERhdGFTb3VyY2VTZXR0aW5ncyA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlLnVpZCA9PT0gZGF0YVNvdXJjZUlkKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2U7XG4gIH1cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlTWV0YSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgdHlwZTogc3RyaW5nKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZU1ldGEuaWQgPT09IHR5cGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZU1ldGE7XG4gIH1cblxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzQ291bnQgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzQ291bnQ7XG4iLCIvLyBMaWJyYXJpZXNcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBjbG9uZURlZXAsIGV4dGVuZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luTWV0YSwgQXBwUGx1Z2luLCBkZXByZWNhdGlvbldhcm5pbmcgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFuZ3VsYXJDb21wb25lbnQsIGdldEFuZ3VsYXJMb2FkZXIsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXBwOiBBcHBQbHVnaW47XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGFuZ3VsYXJDdHJsOiBBbmd1bGFyQ29tcG9uZW50IHwgbnVsbDtcbiAgcmVmcmVzaDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnQ3RybFdyYXBwZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICAvL0B0cy1pZ25vcmVcbiAgbW9kZWw6IFBsdWdpbk1ldGE7XG5cbiAgLy8gTmVlZGVkIGZvciBhbmd1bGFyIHNjb3BlXG4gIHByZVVwZGF0ZUhvb2sgPSAoKSA9PiBQcm9taXNlLnJlc29sdmUoKTtcbiAgcG9zdFVwZGF0ZUhvb2sgPSAoKSA9PiBQcm9taXNlLnJlc29sdmUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuZ3VsYXJDdHJsOiBudWxsLFxuICAgICAgcmVmcmVzaDogMCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gRm9yY2UgYSByZWxvYWQgYWZ0ZXIgdGhlIGZpcnN0IG1vdW50IC0tIGlzIHRoZXJlIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzP1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZnJlc2g6IHRoaXMuc3RhdGUucmVmcmVzaCArIDEgfSk7XG4gICAgfSwgNSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wcykge1xuICAgIGlmICghdGhpcy5lbGVtZW50IHx8IHRoaXMuc3RhdGUuYW5ndWxhckN0cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgYSBjb3B5IG9mIHRoZSBtZXRhXG4gICAgdGhpcy5tb2RlbCA9IGNsb25lRGVlcCh0aGlzLnByb3BzLmFwcC5tZXRhKTtcblxuICAgIGNvbnN0IGxvYWRlciA9IGdldEFuZ3VsYXJMb2FkZXIoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9ICc8cGx1Z2luLWNvbXBvbmVudCB0eXBlPVwiYXBwLWNvbmZpZy1jdHJsXCI+PC9wbHVnaW4tY29tcG9uZW50Pic7XG4gICAgY29uc3Qgc2NvcGVQcm9wcyA9IHtcbiAgICAgIGN0cmw6IHRoaXMsXG4gICAgICAvLyB1c2VkIGJ5IGFuZ3VsYXIgaW5qZWN0b3JNb25rZXlQYXRjaCB0byBkZXRlY3QgdGhpcyBzY2VuYXJpb1xuICAgICAgaXNBcHBDb25maWdDdHJsOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgYW5ndWxhckN0cmwgPSBsb2FkZXIubG9hZCh0aGlzLmVsZW1lbnQsIHNjb3BlUHJvcHMsIHRlbXBsYXRlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBhbmd1bGFyQ3RybCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWw7XG5cbiAgICBjb25zdCB3aXRoUmlnaHRNYXJnaW4gPSBjc3MoeyBtYXJnaW5SaWdodDogJzhweCcgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiByZWY9eyhlbGVtZW50KSA9PiAodGhpcy5lbGVtZW50ID0gZWxlbWVudCl9IC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAge21vZGVsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIHshbW9kZWwuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmVuYWJsZX0gY2xhc3NOYW1lPXt3aXRoUmlnaHRNYXJnaW59PlxuICAgICAgICAgICAgICAgIEVuYWJsZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bW9kZWwuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnVwZGF0ZX0gY2xhc3NOYW1lPXt3aXRoUmlnaHRNYXJnaW59PlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bW9kZWwuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17dGhpcy5kaXNhYmxlfSBjbGFzc05hbWU9e3dpdGhSaWdodE1hcmdpbn0+XG4gICAgICAgICAgICAgICAgRGlzYWJsZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDb3BpZWQgZnJvbSBwbHVnaW5fZWRpdF9jdHJsXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB1cGRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGx1Z2luSWQgPSB0aGlzLm1vZGVsLmlkO1xuXG4gICAgdGhpcy5wcmVVcGRhdGVIb29rKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlQ21kID0gZXh0ZW5kKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMubW9kZWwuZW5hYmxlZCxcbiAgICAgICAgICAgIHBpbm5lZDogdGhpcy5tb2RlbC5waW5uZWQsXG4gICAgICAgICAgICBqc29uRGF0YTogdGhpcy5tb2RlbC5qc29uRGF0YSxcbiAgICAgICAgICAgIHNlY3VyZUpzb25EYXRhOiB0aGlzLm1vZGVsLnNlY3VyZUpzb25EYXRhLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge31cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL3BsdWdpbnMvJHtwbHVnaW5JZH0vc2V0dGluZ3NgLCB1cGRhdGVDbWQpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHRoaXMucG9zdFVwZGF0ZUhvb2spXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICB9KTtcbiAgfTtcblxuICBzZXRQcmVVcGRhdGVIb29rID0gKGNhbGxiYWNrOiAoKSA9PiBhbnkpID0+IHtcbiAgICB0aGlzLnByZVVwZGF0ZUhvb2sgPSBjYWxsYmFjaztcbiAgfTtcblxuICBzZXRQb3N0VXBkYXRlSG9vayA9IChjYWxsYmFjazogKCkgPT4gYW55KSA9PiB7XG4gICAgdGhpcy5wb3N0VXBkYXRlSG9vayA9IGNhbGxiYWNrO1xuICB9O1xuXG4gIC8vIFN0dWIgdG8gYXZvaWQgdW5rbm93biBmdW5jdGlvbiBpbiBsZWdhY3kgY29kZVxuICBpbXBvcnREYXNoYm9hcmRzID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGRlcHJlY2F0aW9uV2FybmluZygnQXBwQ29uZmlnJywgJ2ltcG9ydERhc2hib2FyZHMoKScpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBlbmFibGUgPSAoKSA9PiB7XG4gICAgdGhpcy5tb2RlbC5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGVsLnBpbm5lZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfTtcblxuICBkaXNhYmxlID0gKCkgPT4ge1xuICAgIHRoaXMubW9kZWwuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubW9kZWwucGlubmVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpbkVycm9yQ29kZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbnR5cGUgUHJvcHMgPSB7IGVycm9yPzogUGx1Z2luRXJyb3JDb2RlIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5EaXNhYmxlZEJhZGdlKHsgZXJyb3IgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB0b29sdGlwID0gZXJyb3JDb2RlVG9Ub29sdGlwKGVycm9yKTtcbiAgcmV0dXJuIDxCYWRnZSBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiB0ZXh0PVwiRGlzYWJsZWRcIiBjb2xvcj1cInJlZFwiIHRvb2x0aXA9e3Rvb2x0aXB9IC8+O1xufVxuXG5mdW5jdGlvbiBlcnJvckNvZGVUb1Rvb2x0aXAoZXJyb3I/OiBQbHVnaW5FcnJvckNvZGUpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubW9kaWZpZWRTaWduYXR1cmU6XG4gICAgICByZXR1cm4gJ1BsdWdpbiBkaXNhYmxlZCBkdWUgdG8gbW9kaWZpZWQgY29udGVudCc7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUuaW52YWxpZFNpZ25hdHVyZTpcbiAgICAgIHJldHVybiAnUGx1Z2luIGRpc2FibGVkIGR1ZSB0byBpbnZhbGlkIHBsdWdpbiBzaWduYXR1cmUnO1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1pc3NpbmdTaWduYXR1cmU6XG4gICAgICByZXR1cm4gJ1BsdWdpbiBkaXNhYmxlZCBkdWUgdG8gbWlzc2luZyBwbHVnaW4gc2lnbmF0dXJlJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGBQbHVnaW4gZGlzYWJsZWQgZHVlIHRvIHVua293biBlcnJvcjogJHtlcnJvcn1gO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQmFkZ2UsIEJ1dHRvbiwgSG9yaXpvbnRhbEdyb3VwLCBQbHVnaW5TaWduYXR1cmVCYWRnZSwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgZ2V0QmFkZ2VDb2xvciB9IGZyb20gJy4vc2hhcmVkU3R5bGVzJztcblxudHlwZSBQcm9wcyA9IHsgcGx1Z2luOiBDYXRhbG9nUGx1Z2luIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5FbnRlcnByaXNlQmFkZ2UoeyBwbHVnaW4gfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjdXN0b21CYWRnZVN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0QmFkZ2VDb2xvcik7XG4gIGNvbnN0IG9uQ2xpY2sgPSAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB3aW5kb3cub3BlbihcbiAgICAgIGBodHRwczovL2dyYWZhbmEuY29tL2dyYWZhbmEvcGx1Z2lucy8ke3BsdWdpbi5pZH0/dXRtX3NvdXJjZT1ncmFmYW5hX2NhdGFsb2dfbGVhcm5fbW9yZWAsXG4gICAgICAnX2JsYW5rJyxcbiAgICAgICdub29wZW5lcixub3JlZmVycmVyJ1xuICAgICk7XG4gIH07XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdlbnRlcnByaXNlLnBsdWdpbnMnKSkge1xuICAgIHJldHVybiA8QmFkZ2UgdGV4dD1cIkVudGVycHJpc2VcIiBjb2xvcj1cImJsdWVcIiAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgIDxQbHVnaW5TaWduYXR1cmVCYWRnZSBzdGF0dXM9e3BsdWdpbi5zaWduYXR1cmV9IC8+XG4gICAgICA8QmFkZ2UgaWNvbj1cImxvY2tcIiBhcmlhLWxhYmVsPVwibG9jayBpY29uXCIgdGV4dD1cIkVudGVycHJpc2VcIiBjb2xvcj1cImJsdWVcIiBjbGFzc05hbWU9e2N1c3RvbUJhZGdlU3R5bGVzfSAvPlxuICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBmaWxsPVwidGV4dFwiIGljb249XCJleHRlcm5hbC1saW5rLWFsdFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICBMZWFybiBtb3JlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0hvcml6b250YWxHcm91cD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJhZGdlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBnZXRCYWRnZUNvbG9yIH0gZnJvbSAnLi9zaGFyZWRTdHlsZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luSW5zdGFsbGVkQmFkZ2UoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgY3VzdG9tQmFkZ2VTdHlsZXMgPSB1c2VTdHlsZXMyKGdldEJhZGdlQ29sb3IpO1xuICByZXR1cm4gPEJhZGdlIHRleHQ9XCJJbnN0YWxsZWRcIiBjb2xvcj1cIm9yYW5nZVwiIGNsYXNzTmFtZT17Y3VzdG9tQmFkZ2VTdHlsZXN9IC8+O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IENhdGFsb2dQbHVnaW4gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5VcGRhdGVBdmFpbGFibGVCYWRnZSh7IHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgLy8gQ3VycmVudGx5IHJlbmRlcmVyIHBsdWdpbnMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGNhdGFsb2cgZHVlIHRvIGNvbXBsaWNhdGlvbnMgcmVsYXRlZCB0byBpbnN0YWxsYXRpb24gLyB1cGRhdGUgLyB1bmluc3RhbGwuXG4gIGlmIChwbHVnaW4uaGFzVXBkYXRlICYmICFwbHVnaW4uaXNDb3JlICYmIHBsdWdpbi50eXBlICE9PSBQbHVnaW5UeXBlLnJlbmRlcmVyKSB7XG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT17c3R5bGVzLmhhc1VwZGF0ZX0+VXBkYXRlIGF2YWlsYWJsZSE8L3A+O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoYXNVcGRhdGU6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5ib2R5U21hbGwuZm9udFNpemV9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBgLFxuICB9O1xufTtcbiIsImV4cG9ydCB7IFBsdWdpbkRpc2FibGVkQmFkZ2UgfSBmcm9tICcuL1BsdWdpbkRpc2FibGVkQmFkZ2UnO1xuZXhwb3J0IHsgUGx1Z2luSW5zdGFsbGVkQmFkZ2UgfSBmcm9tICcuL1BsdWdpbkluc3RhbGxCYWRnZSc7XG5leHBvcnQgeyBQbHVnaW5FbnRlcnByaXNlQmFkZ2UgfSBmcm9tICcuL1BsdWdpbkVudGVycHJpc2VCYWRnZSc7XG5leHBvcnQgeyBQbHVnaW5VcGRhdGVBdmFpbGFibGVCYWRnZSB9IGZyb20gJy4vUGx1Z2luVXBkYXRlQXZhaWxhYmxlQmFkZ2UnO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgZ2V0QmFkZ2VDb2xvciA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gY3NzYFxuICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnByaW1hcnl9O1xuICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLmJvcmRlci5zdHJvbmd9O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpbk1ldGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgdXBkYXRlUGx1Z2luU2V0dGluZ3MgfSBmcm9tICcuLi8uLi9hcGknO1xuaW1wb3J0IHsgdXNlUGx1Z2luQ29uZmlnIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlUGx1Z2luQ29uZmlnJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRTdGFydGVkV2l0aEFwcCh7IHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHZhbHVlOiBwbHVnaW5Db25maWcgfSA9IHVzZVBsdWdpbkNvbmZpZyhwbHVnaW4pO1xuXG4gIGlmICghcGx1Z2luQ29uZmlnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7IGVuYWJsZWQsIGpzb25EYXRhIH0gPSBwbHVnaW5Db25maWc/Lm1ldGE7XG5cbiAgY29uc3QgZW5hYmxlID0gKCkgPT5cbiAgICB1cGRhdGVQbHVnaW5TZXR0aW5nc0FuZFJlbG9hZChwbHVnaW4uaWQsIHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaW5uZWQ6IHRydWUsXG4gICAgICBqc29uRGF0YSxcbiAgICB9KTtcblxuICBjb25zdCBkaXNhYmxlID0gKCkgPT4ge1xuICAgIHVwZGF0ZVBsdWdpblNldHRpbmdzQW5kUmVsb2FkKHBsdWdpbi5pZCwge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBwaW5uZWQ6IGZhbHNlLFxuICAgICAganNvbkRhdGEsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFlbmFibGVkICYmIChcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2VuYWJsZX0+XG4gICAgICAgICAgRW5hYmxlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cblxuICAgICAge2VuYWJsZWQgJiYgKFxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e2Rpc2FibGV9PlxuICAgICAgICAgIERpc2FibGVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCB1cGRhdGVQbHVnaW5TZXR0aW5nc0FuZFJlbG9hZCA9IGFzeW5jIChpZDogc3RyaW5nLCBkYXRhOiBQYXJ0aWFsPFBsdWdpbk1ldGE+KSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdXBkYXRlUGx1Z2luU2V0dGluZ3MoaWQsIGRhdGEpO1xuXG4gICAgLy8gUmVsb2FkaW5nIHRoZSBwYWdlIGFzIHRoZSBwbHVnaW4gbWV0YSBjaGFuZ2VzIG1hZGUgaGVyZSB3b3VsZG4ndCBiZSBwcm9wYWdhdGVkIHRocm91Z2hvdXQgdGhlIGFwcC5cbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSB1cGRhdGluZyB0aGUgcGx1Z2luJywgZSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGFkZERhdGFTb3VyY2UgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYWN0aW9ucyc7XG5cbmltcG9ydCB7IGlzRGF0YVNvdXJjZUVkaXRvciB9IGZyb20gJy4uLy4uL3Blcm1pc3Npb25zJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBHZXRTdGFydGVkV2l0aERhdGFTb3VyY2UoeyBwbHVnaW4gfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvbkFkZERhdGFTb3VyY2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgbWV0YSA9IHtcbiAgICAgIG5hbWU6IHBsdWdpbi5uYW1lLFxuICAgICAgaWQ6IHBsdWdpbi5pZCxcbiAgICB9IGFzIERhdGFTb3VyY2VQbHVnaW5NZXRhO1xuXG4gICAgZGlzcGF0Y2goYWRkRGF0YVNvdXJjZShtZXRhKSk7XG4gIH0sIFtkaXNwYXRjaCwgcGx1Z2luXSk7XG5cbiAgaWYgKCFpc0RhdGFTb3VyY2VFZGl0b3IoKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17b25BZGREYXRhU291cmNlfT5cbiAgICAgIENyZWF0ZSBhIHtwbHVnaW4ubmFtZX0gZGF0YSBzb3VyY2VcbiAgICA8L0J1dHRvbj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgR2V0U3RhcnRlZFdpdGhBcHAgfSBmcm9tICcuL0dldFN0YXJ0ZWRXaXRoQXBwJztcbmltcG9ydCB7IEdldFN0YXJ0ZWRXaXRoRGF0YVNvdXJjZSB9IGZyb20gJy4vR2V0U3RhcnRlZFdpdGhEYXRhU291cmNlJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdldFN0YXJ0ZWRXaXRoUGx1Z2luKHsgcGx1Z2luIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGlmICghcGx1Z2luLmlzSW5zdGFsbGVkIHx8IHBsdWdpbi5pc0Rpc2FibGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzd2l0Y2ggKHBsdWdpbi50eXBlKSB7XG4gICAgY2FzZSBQbHVnaW5UeXBlLmRhdGFzb3VyY2U6XG4gICAgICByZXR1cm4gPEdldFN0YXJ0ZWRXaXRoRGF0YVNvdXJjZSBwbHVnaW49e3BsdWdpbn0gLz47XG4gICAgY2FzZSBQbHVnaW5UeXBlLmFwcDpcbiAgICAgIHJldHVybiA8R2V0U3RhcnRlZFdpdGhBcHAgcGx1Z2luPXtwbHVnaW59IC8+O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IHsgR2V0U3RhcnRlZFdpdGhQbHVnaW4gfSBmcm9tICcuL0dldFN0YXJ0ZWRXaXRoUGx1Z2luJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZ2V0RXh0ZXJuYWxNYW5hZ2VMaW5rIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBQbHVnaW5TdGF0dXMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgRXh0ZXJuYWxseU1hbmFnZWRCdXR0b25Qcm9wcyA9IHtcbiAgcGx1Z2luSWQ6IHN0cmluZztcbiAgcGx1Z2luU3RhdHVzOiBQbHVnaW5TdGF0dXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRXh0ZXJuYWxseU1hbmFnZWRCdXR0b24oeyBwbHVnaW5JZCwgcGx1Z2luU3RhdHVzIH06IEV4dGVybmFsbHlNYW5hZ2VkQnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgZXh0ZXJuYWxNYW5hZ2VMaW5rID0gYCR7Z2V0RXh0ZXJuYWxNYW5hZ2VMaW5rKHBsdWdpbklkKX0vP3RhYj1pbnN0YWxsYXRpb25gO1xuXG4gIGlmIChwbHVnaW5TdGF0dXMgPT09IFBsdWdpblN0YXR1cy5VUERBVEUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBoZWlnaHQ9XCJhdXRvXCI+XG4gICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e2V4dGVybmFsTWFuYWdlTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIFVwZGF0ZSB2aWEgZ3JhZmFuYS5jb21cbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICA8TGlua0J1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBocmVmPXtleHRlcm5hbE1hbmFnZUxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICBVbmluc3RhbGwgdmlhIGdyYWZhbmEuY29tXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH1cblxuICBpZiAocGx1Z2luU3RhdHVzID09PSBQbHVnaW5TdGF0dXMuVU5JTlNUQUxMKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIGhyZWY9e2V4dGVybmFsTWFuYWdlTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICBVbmluc3RhbGwgdmlhIGdyYWZhbmEuY29tXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpbmtCdXR0b24gaHJlZj17ZXh0ZXJuYWxNYW5hZ2VMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICBJbnN0YWxsIHZpYSBncmFmYW5hLmNvbVxuICAgIDwvTGlua0J1dHRvbj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIEljb24sIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldEV4dGVybmFsTWFuYWdlTGluaywgaXNJbnN0YWxsQ29udHJvbHNFbmFibGVkIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBpc0dyYWZhbmFBZG1pbiB9IGZyb20gJy4uLy4uL3Blcm1pc3Npb25zJztcbmltcG9ydCB7IHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSB9IGZyb20gJy4uLy4uL3N0YXRlL2hvb2tzJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4sIFBsdWdpblN0YXR1cywgVmVyc2lvbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgRXh0ZXJuYWxseU1hbmFnZWRCdXR0b24gfSBmcm9tICcuL0V4dGVybmFsbHlNYW5hZ2VkQnV0dG9uJztcbmltcG9ydCB7IEluc3RhbGxDb250cm9sc0J1dHRvbiB9IGZyb20gJy4vSW5zdGFsbENvbnRyb2xzQnV0dG9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xuICBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj86IFZlcnNpb247XG59XG5cbmV4cG9ydCBjb25zdCBJbnN0YWxsQ29udHJvbHMgPSAoeyBwbHVnaW4sIGxhdGVzdENvbXBhdGlibGVWZXJzaW9uIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgaXNFeHRlcm5hbGx5TWFuYWdlZCA9IGNvbmZpZy5wbHVnaW5BZG1pbkV4dGVybmFsTWFuYWdlRW5hYmxlZDtcbiAgY29uc3QgaGFzUGVybWlzc2lvbiA9IGlzR3JhZmFuYUFkbWluKCk7XG4gIGNvbnN0IGlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSA9IHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSgpO1xuICBjb25zdCBpc0NvbXBhdGlibGUgPSBCb29sZWFuKGxhdGVzdENvbXBhdGlibGVWZXJzaW9uKTtcbiAgY29uc3QgaXNJbnN0YWxsQ29udHJvbHNEaXNhYmxlZCA9IHBsdWdpbi5pc0NvcmUgfHwgcGx1Z2luLmlzRGlzYWJsZWQgfHwgIWlzSW5zdGFsbENvbnRyb2xzRW5hYmxlZCgpO1xuXG4gIGNvbnN0IHBsdWdpblN0YXR1cyA9IHBsdWdpbi5pc0luc3RhbGxlZFxuICAgID8gcGx1Z2luLmhhc1VwZGF0ZVxuICAgICAgPyBQbHVnaW5TdGF0dXMuVVBEQVRFXG4gICAgICA6IFBsdWdpblN0YXR1cy5VTklOU1RBTExcbiAgICA6IFBsdWdpblN0YXR1cy5JTlNUQUxMO1xuXG4gIGlmIChpc0luc3RhbGxDb250cm9sc0Rpc2FibGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAocGx1Z2luLnR5cGUgPT09IFBsdWdpblR5cGUucmVuZGVyZXIpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5SZW5kZXJlciBwbHVnaW5zIGNhbm5vdCBiZSBtYW5hZ2VkIGJ5IHRoZSBQbHVnaW4gQ2F0YWxvZy48L2Rpdj47XG4gIH1cblxuICBpZiAocGx1Z2luLmlzRW50ZXJwcmlzZSAmJiAhZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgaGVpZ2h0PVwiYXV0b1wiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9Pk5vIHZhbGlkIEdyYWZhbmEgRW50ZXJwcmlzZSBsaWNlbnNlIGRldGVjdGVkLjwvc3Bhbj5cbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICBocmVmPXtgJHtnZXRFeHRlcm5hbE1hbmFnZUxpbmsocGx1Z2luLmlkKX0/dXRtX3NvdXJjZT1ncmFmYW5hX2NhdGFsb2dfbGVhcm5fbW9yZWB9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICBpY29uPVwiZXh0ZXJuYWwtbGluay1hbHRcIlxuICAgICAgICA+XG4gICAgICAgICAgTGVhcm4gbW9yZVxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9XG5cbiAgaWYgKHBsdWdpbi5pc0Rldikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlRoaXMgaXMgYSBkZXZlbG9wbWVudCBidWlsZCBvZiB0aGUgcGx1Z2luIGFuZCBjYW4mIzM5O3QgYmUgdW5pbnN0YWxsZWQuPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghaGFzUGVybWlzc2lvbiAmJiAhaXNFeHRlcm5hbGx5TWFuYWdlZCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgWW91IGRvIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gJHtwbHVnaW5TdGF0dXN9IHRoaXMgcGx1Z2luLmA7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+e21lc3NhZ2V9PC9kaXY+O1xuICB9XG5cbiAgaWYgKCFwbHVnaW4uaXNQdWJsaXNoZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5cbiAgICAgICAgPEljb24gbmFtZT1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgLz4gVGhpcyBwbHVnaW4gaXMgbm90IHB1Ymxpc2hlZCB0b3snICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5ncmFmYW5hLmNvbS9wbHVnaW5zXCIgdGFyZ2V0PVwiX19ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICBncmFmYW5hLmNvbS9wbHVnaW5zXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBhbmQgY2FuJiMzOTt0IGJlIG1hbmFnZWQgdmlhIHRoZSBjYXRhbG9nLlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghaXNDb21wYXRpYmxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XG4gICAgICAgIDxJY29uIG5hbWU9XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIC8+XG4gICAgICAgICZuYnNwO1RoaXMgcGx1Z2luIGRvZXNuJiMzOTt0IHN1cHBvcnQgeW91ciB2ZXJzaW9uIG9mIEdyYWZhbmEuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGlzRXh0ZXJuYWxseU1hbmFnZWQpIHtcbiAgICByZXR1cm4gPEV4dGVybmFsbHlNYW5hZ2VkQnV0dG9uIHBsdWdpbklkPXtwbHVnaW4uaWR9IHBsdWdpblN0YXR1cz17cGx1Z2luU3RhdHVzfSAvPjtcbiAgfVxuXG4gIGlmICghaXNSZW1vdGVQbHVnaW5zQXZhaWxhYmxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+XG4gICAgICAgIFRoZSBpbnN0YWxsIGNvbnRyb2xzIGhhdmUgYmVlbiBkaXNhYmxlZCBiZWNhdXNlIHRoZSBHcmFmYW5hIHNlcnZlciBjYW5ub3QgYWNjZXNzIGdyYWZhbmEuY29tLlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEluc3RhbGxDb250cm9sc0J1dHRvblxuICAgICAgcGx1Z2luPXtwbHVnaW59XG4gICAgICBwbHVnaW5TdGF0dXM9e3BsdWdpblN0YXR1c31cbiAgICAgIGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPXtsYXRlc3RDb21wYXRpYmxlVmVyc2lvbn1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFwcEV2ZW50cyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIENvbmZpcm1Nb2RhbCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5cbmltcG9ydCB7IHVzZUluc3RhbGxTdGF0dXMsIHVzZVVuaW5zdGFsbFN0YXR1cywgdXNlSW5zdGFsbCwgdXNlVW5pbnN0YWxsIH0gZnJvbSAnLi4vLi4vc3RhdGUvaG9va3MnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luU3RhdHVzLCBWZXJzaW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG50eXBlIEluc3RhbGxDb250cm9sc0J1dHRvblByb3BzID0ge1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG4gIHBsdWdpblN0YXR1czogUGx1Z2luU3RhdHVzO1xuICBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj86IFZlcnNpb247XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gSW5zdGFsbENvbnRyb2xzQnV0dG9uKHsgcGx1Z2luLCBwbHVnaW5TdGF0dXMsIGxhdGVzdENvbXBhdGlibGVWZXJzaW9uIH06IEluc3RhbGxDb250cm9sc0J1dHRvblByb3BzKSB7XG4gIGNvbnN0IHsgaXNJbnN0YWxsaW5nLCBlcnJvcjogZXJyb3JJbnN0YWxsaW5nIH0gPSB1c2VJbnN0YWxsU3RhdHVzKCk7XG4gIGNvbnN0IHsgaXNVbmluc3RhbGxpbmcsIGVycm9yOiBlcnJvclVuaW5zdGFsbGluZyB9ID0gdXNlVW5pbnN0YWxsU3RhdHVzKCk7XG4gIGNvbnN0IGluc3RhbGwgPSB1c2VJbnN0YWxsKCk7XG4gIGNvbnN0IHVuaW5zdGFsbCA9IHVzZVVuaW5zdGFsbCgpO1xuICBjb25zdCBbaXNDb25maXJtTW9kYWxWaXNpYmxlLCBzZXRJc0NvbmZpcm1Nb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG93Q29uZmlybU1vZGFsID0gKCkgPT4gc2V0SXNDb25maXJtTW9kYWxWaXNpYmxlKHRydWUpO1xuICBjb25zdCBoaWRlQ29uZmlybU1vZGFsID0gKCkgPT4gc2V0SXNDb25maXJtTW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgY29uc3QgdW5pbnN0YWxsQnRuVGV4dCA9IGlzVW5pbnN0YWxsaW5nID8gJ1VuaW5zdGFsbGluZycgOiAnVW5pbnN0YWxsJztcblxuICBjb25zdCBvbkluc3RhbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgaW5zdGFsbChwbHVnaW4uaWQsIGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPy52ZXJzaW9uKTtcbiAgICBpZiAoIWVycm9ySW5zdGFsbGluZykge1xuICAgICAgYXBwRXZlbnRzLmVtaXQoQXBwRXZlbnRzLmFsZXJ0U3VjY2VzcywgW2BJbnN0YWxsZWQgJHtwbHVnaW4ubmFtZX1gXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uVW5pbnN0YWxsID0gYXN5bmMgKCkgPT4ge1xuICAgIGhpZGVDb25maXJtTW9kYWwoKTtcbiAgICBhd2FpdCB1bmluc3RhbGwocGx1Z2luLmlkKTtcbiAgICBpZiAoIWVycm9yVW5pbnN0YWxsaW5nKSB7XG4gICAgICBhcHBFdmVudHMuZW1pdChBcHBFdmVudHMuYWxlcnRTdWNjZXNzLCBbYFVuaW5zdGFsbGVkICR7cGx1Z2luLm5hbWV9YF0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBpbnN0YWxsKHBsdWdpbi5pZCwgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24/LnZlcnNpb24sIHRydWUpO1xuICAgIGlmICghZXJyb3JJbnN0YWxsaW5nKSB7XG4gICAgICBhcHBFdmVudHMuZW1pdChBcHBFdmVudHMuYWxlcnRTdWNjZXNzLCBbYFVwZGF0ZWQgJHtwbHVnaW4ubmFtZX1gXSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChwbHVnaW5TdGF0dXMgPT09IFBsdWdpblN0YXR1cy5VTklOU1RBTEwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgIGlzT3Blbj17aXNDb25maXJtTW9kYWxWaXNpYmxlfVxuICAgICAgICAgIHRpdGxlPXtgVW5pbnN0YWxsICR7cGx1Z2luLm5hbWV9YH1cbiAgICAgICAgICBib2R5PVwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVuaW5zdGFsbCB0aGlzIHBsdWdpbj9cIlxuICAgICAgICAgIGNvbmZpcm1UZXh0PVwiQ29uZmlybVwiXG4gICAgICAgICAgaWNvbj1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJcbiAgICAgICAgICBvbkNvbmZpcm09e29uVW5pbnN0YWxsfVxuICAgICAgICAgIG9uRGlzbWlzcz17aGlkZUNvbmZpcm1Nb2RhbH1cbiAgICAgICAgLz5cbiAgICAgICAgPEhvcml6b250YWxHcm91cCBoZWlnaHQ9XCJhdXRvXCI+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBkaXNhYmxlZD17aXNVbmluc3RhbGxpbmd9IG9uQ2xpY2s9e3Nob3dDb25maXJtTW9kYWx9PlxuICAgICAgICAgICAge3VuaW5zdGFsbEJ0blRleHR9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwbHVnaW5TdGF0dXMgPT09IFBsdWdpblN0YXR1cy5VUERBVEUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBoZWlnaHQ9XCJhdXRvXCI+XG4gICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzSW5zdGFsbGluZ30gb25DbGljaz17b25VcGRhdGV9PlxuICAgICAgICAgIHtpc0luc3RhbGxpbmcgPyAnVXBkYXRpbmcnIDogJ1VwZGF0ZSd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIGRpc2FibGVkPXtpc1VuaW5zdGFsbGluZ30gb25DbGljaz17b25Vbmluc3RhbGx9PlxuICAgICAgICAgIHt1bmluc3RhbGxCdG5UZXh0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzSW5zdGFsbGluZ30gb25DbGljaz17b25JbnN0YWxsfT5cbiAgICAgIHtpc0luc3RhbGxpbmcgPyAnSW5zdGFsbGluZycgOiAnSW5zdGFsbCd9XG4gICAgPC9CdXR0b24+XG4gICk7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL0luc3RhbGxDb250cm9scyc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKHsgdGV4dCA9ICdMb2FkaW5nLi4uJyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1sb2FkZXItd3JhcHBlclwiPlxuICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PXt0ZXh0fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXBwRXZlbnRzLCBQbHVnaW5NZXRhLCBEYXRhU291cmNlQXBpIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBhcHBFdmVudHMgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCBEYXNoYm9hcmRzVGFibGUgZnJvbSAnYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL0Rhc2hib2FyZHNUYWJsZSc7XG5pbXBvcnQgeyBQbHVnaW5EYXNoYm9hcmQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwbHVnaW46IFBsdWdpbk1ldGE7XG4gIGRhdGFzb3VyY2U/OiBEYXRhU291cmNlQXBpO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBkYXNoYm9hcmRzOiBQbHVnaW5EYXNoYm9hcmRbXTtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFBsdWdpbkRhc2hib2FyZHMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBkYXNoYm9hcmRzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcGx1Z2luSWQgPSB0aGlzLnByb3BzLnBsdWdpbi5pZDtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5nZXQoYC9hcGkvcGx1Z2lucy8ke3BsdWdpbklkfS9kYXNoYm9hcmRzYClcbiAgICAgIC50aGVuKChkYXNoYm9hcmRzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhc2hib2FyZHMsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBpbXBvcnRBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5pbXBvcnROZXh0KDApO1xuICB9O1xuXG4gIHByaXZhdGUgaW1wb3J0TmV4dCA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBkYXNoYm9hcmRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiB0aGlzLmltcG9ydChkYXNoYm9hcmRzW2luZGV4XSwgdHJ1ZSkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoaW5kZXggKyAxIDwgZGFzaGJvYXJkcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltcG9ydE5leHQoaW5kZXggKyAxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgaW1wb3J0ID0gKGRhc2g6IFBsdWdpbkRhc2hib2FyZCwgb3ZlcndyaXRlOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgeyBwbHVnaW4sIGRhdGFzb3VyY2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBpbnN0YWxsQ21kOiBhbnkgPSB7XG4gICAgICBwbHVnaW5JZDogcGx1Z2luLmlkLFxuICAgICAgcGF0aDogZGFzaC5wYXRoLFxuICAgICAgb3ZlcndyaXRlOiBvdmVyd3JpdGUsXG4gICAgICBpbnB1dHM6IFtdLFxuICAgIH07XG5cbiAgICBpZiAoZGF0YXNvdXJjZSkge1xuICAgICAgaW5zdGFsbENtZC5pbnB1dHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICcqJyxcbiAgICAgICAgdHlwZTogJ2RhdGFzb3VyY2UnLFxuICAgICAgICBwbHVnaW5JZDogZGF0YXNvdXJjZS5tZXRhLmlkLFxuICAgICAgICB2YWx1ZTogZGF0YXNvdXJjZS5uYW1lLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoYC9hcGkvZGFzaGJvYXJkcy9pbXBvcnRgLCBpbnN0YWxsQ21kKVxuICAgICAgLnRoZW4oKHJlczogUGx1Z2luRGFzaGJvYXJkKSA9PiB7XG4gICAgICAgIGFwcEV2ZW50cy5lbWl0KEFwcEV2ZW50cy5hbGVydFN1Y2Nlc3MsIFsnRGFzaGJvYXJkIEltcG9ydGVkJywgZGFzaC50aXRsZV0pO1xuICAgICAgICBleHRlbmQoZGFzaCwgcmVzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhc2hib2FyZHM6IFsuLi50aGlzLnN0YXRlLmRhc2hib2FyZHNdIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVtb3ZlID0gKGRhc2g6IFBsdWdpbkRhc2hib2FyZCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmRlbGV0ZSgnL2FwaS9kYXNoYm9hcmRzL3VpZC8nICsgZGFzaC51aWQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGRhc2guaW1wb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhc2hib2FyZHM6IFsuLi50aGlzLnN0YXRlLmRhc2hib2FyZHNdIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgZGFzaGJvYXJkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG4gICAgaWYgKCFkYXNoYm9hcmRzIHx8ICFkYXNoYm9hcmRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDxkaXY+Tm8gZGFzaGJvYXJkcyBhcmUgaW5jbHVkZWQgd2l0aCB0aGlzIHBsdWdpbjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgIDxEYXNoYm9hcmRzVGFibGUgZGFzaGJvYXJkcz17ZGFzaGJvYXJkc30gb25JbXBvcnQ9e3RoaXMuaW1wb3J0fSBvblJlbW92ZT17dGhpcy5yZW1vdmV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFwcFBsdWdpbiwgR3JhZmFuYVRoZW1lMiwgVXJsUXVlcnlNYXAgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFZlcnNpb25MaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9WZXJzaW9uTGlzdCc7XG5pbXBvcnQgeyB1c2VQbHVnaW5Db25maWcgfSBmcm9tICcuLi9ob29rcy91c2VQbHVnaW5Db25maWcnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luVGFiSWRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBBcHBDb25maWdDdHJsV3JhcHBlciB9IGZyb20gJy4vQXBwQ29uZmlnV3JhcHBlcic7XG5pbXBvcnQgeyBQbHVnaW5EYXNoYm9hcmRzIH0gZnJvbSAnLi9QbHVnaW5EYXNoYm9hcmRzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xuICBxdWVyeVBhcmFtczogVXJsUXVlcnlNYXA7XG4gIHBhZ2VJZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRldGFpbHNCb2R5KHsgcGx1Z2luLCBxdWVyeVBhcmFtcywgcGFnZUlkIH06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgdmFsdWU6IHBsdWdpbkNvbmZpZyB9ID0gdXNlUGx1Z2luQ29uZmlnKHBsdWdpbik7XG5cbiAgaWYgKHBhZ2VJZCA9PT0gUGx1Z2luVGFiSWRzLk9WRVJWSUVXKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMucmVhZG1lLCBzdHlsZXMuY29udGFpbmVyKX1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IHBsdWdpbi5kZXRhaWxzPy5yZWFkbWUgPz8gJ05vIHBsdWdpbiBoZWxwIG9yIHJlYWRtZSBtYXJrZG93biBmaWxlIHdhcyBmb3VuZCcsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBpZiAocGFnZUlkID09PSBQbHVnaW5UYWJJZHMuVkVSU0lPTlMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VmVyc2lvbkxpc3QgdmVyc2lvbnM9e3BsdWdpbi5kZXRhaWxzPy52ZXJzaW9uc30gaW5zdGFsbGVkVmVyc2lvbj17cGx1Z2luLmluc3RhbGxlZFZlcnNpb259IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKHBhZ2VJZCA9PT0gUGx1Z2luVGFiSWRzLkNPTkZJRyAmJiBwbHVnaW5Db25maWc/LmFuZ3VsYXJDb25maWdDdHJsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEFwcENvbmZpZ0N0cmxXcmFwcGVyIGFwcD17cGx1Z2luQ29uZmlnIGFzIEFwcFBsdWdpbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAocGx1Z2luQ29uZmlnPy5jb25maWdQYWdlcykge1xuICAgIGZvciAoY29uc3QgY29uZmlnUGFnZSBvZiBwbHVnaW5Db25maWcuY29uZmlnUGFnZXMpIHtcbiAgICAgIGlmIChwYWdlSWQgPT09IGNvbmZpZ1BhZ2UuaWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8Y29uZmlnUGFnZS5ib2R5IHBsdWdpbj17cGx1Z2luQ29uZmlnfSBxdWVyeT17cXVlcnlQYXJhbXN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhZ2VJZCA9PT0gUGx1Z2luVGFiSWRzLkRBU0hCT0FSRFMgJiYgcGx1Z2luQ29uZmlnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFBsdWdpbkRhc2hib2FyZHMgcGx1Z2luPXtwbHVnaW5Db25maWc/Lm1ldGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8cD5QYWdlIG5vdCBmb3VuZC48L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygzLCA0KX07XG4gIGAsXG4gIHJlYWRtZTogY3NzYFxuICAgICYgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBoMSxcbiAgICBoMixcbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICB9XG5cbiAgICAqOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICAmID4gcCB7XG4gICAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKCl9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5saW5rfTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0Lmxpbmt9O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpbkVycm9yQ29kZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luRGV0YWlsc0Rpc2FibGVkRXJyb3IoeyBjbGFzc05hbWUsIHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwge1xuICBpZiAoIXBsdWdpbi5pc0Rpc2FibGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBbGVydFxuICAgICAgc2V2ZXJpdHk9XCJlcnJvclwiXG4gICAgICB0aXRsZT1cIlBsdWdpbiBkaXNhYmxlZFwiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbHVnaW5QYWdlLmRpc2FibGVkSW5mb31cbiAgICA+XG4gICAgICB7cmVuZGVyRGVzY3JpcHRpb25Gcm9tRXJyb3IocGx1Z2luLmVycm9yKX1cbiAgICAgIDxwPlBsZWFzZSBjb250YWN0IHlvdXIgc2VydmVyIGFkbWluaXN0cmF0b3IgdG8gZ2V0IHRoaXMgcmVzb2x2ZWQuPC9wPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9hZG1pbmlzdHJhdGlvbi9jbGkvI3BsdWdpbnMtY29tbWFuZHNcIlxuICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICA+XG4gICAgICAgIFJlYWQgbW9yZSBhYm91dCBtYW5hZ2luZyBwbHVnaW5zXG4gICAgICA8L2E+XG4gICAgPC9BbGVydD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGVzY3JpcHRpb25Gcm9tRXJyb3IoZXJyb3I/OiBQbHVnaW5FcnJvckNvZGUpOiBSZWFjdEVsZW1lbnQge1xuICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubW9kaWZpZWRTaWduYXR1cmU6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBHcmFmYW5hIExhYnMgY2hlY2tzIGVhY2ggcGx1Z2luIHRvIHZlcmlmeSB0aGF0IGl0IGhhcyBhIHZhbGlkIGRpZ2l0YWwgc2lnbmF0dXJlLiBXaGlsZSBkb2luZyB0aGlzLCB3ZVxuICAgICAgICAgIGRpc2NvdmVyZWQgdGhhdCB0aGUgY29udGVudCBvZiB0aGlzIHBsdWdpbiBkb2VzIG5vdCBtYXRjaCBpdHMgc2lnbmF0dXJlLiBXZSBjYW4gbm90IGd1YXJhbnRlZSB0aGUgdHJ1c3R3b3J0aHlcbiAgICAgICAgICBvZiB0aGlzIHBsdWdpbiBhbmQgaGF2ZSB0aGVyZWZvcmUgZGlzYWJsZWQgaXQuIFdlIHJlY29tbWVuZCB5b3UgdG8gcmVpbnN0YWxsIHRoZSBwbHVnaW4gdG8gbWFrZSBzdXJlIHlvdSBhcmVcbiAgICAgICAgICBydW5uaW5nIGEgdmVyaWZpZWQgdmVyc2lvbiBvZiB0aGlzIHBsdWdpbi5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5pbnZhbGlkU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHA+XG4gICAgICAgICAgR3JhZmFuYSBMYWJzIGNoZWNrcyBlYWNoIHBsdWdpbiB0byB2ZXJpZnkgdGhhdCBpdCBoYXMgYSB2YWxpZCBkaWdpdGFsIHNpZ25hdHVyZS4gV2hpbGUgZG9pbmcgdGhpcywgd2VcbiAgICAgICAgICBkaXNjb3ZlcmVkIHRoYXQgaXQgd2FzIGludmFsaWQuIFdlIGNhbiBub3QgZ3VhcmFudGVlIHRoZSB0cnVzdHdvcnRoeSBvZiB0aGlzIHBsdWdpbiBhbmQgaGF2ZSB0aGVyZWZvcmVcbiAgICAgICAgICBkaXNhYmxlZCBpdC4gV2UgcmVjb21tZW5kIHlvdSB0byByZWluc3RhbGwgdGhlIHBsdWdpbiB0byBtYWtlIHN1cmUgeW91IGFyZSBydW5uaW5nIGEgdmVyaWZpZWQgdmVyc2lvbiBvZiB0aGlzXG4gICAgICAgICAgcGx1Z2luLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1pc3NpbmdTaWduYXR1cmU6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBHcmFmYW5hIExhYnMgY2hlY2tzIGVhY2ggcGx1Z2luIHRvIHZlcmlmeSB0aGF0IGl0IGhhcyBhIHZhbGlkIGRpZ2l0YWwgc2lnbmF0dXJlLiBXaGlsZSBkb2luZyB0aGlzLCB3ZVxuICAgICAgICAgIGRpc2NvdmVyZWQgdGhhdCB0aGVyZSBpcyBubyBzaWduYXR1cmUgZm9yIHRoaXMgcGx1Z2luLiBXZSBjYW4gbm90IGd1YXJhbnRlZSB0aGUgdHJ1c3R3b3J0aHkgb2YgdGhpcyBwbHVnaW4gYW5kXG4gICAgICAgICAgaGF2ZSB0aGVyZWZvcmUgZGlzYWJsZWQgaXQuIFdlIHJlY29tbWVuZCB5b3UgdG8gcmVpbnN0YWxsIHRoZSBwbHVnaW4gdG8gbWFrZSBzdXJlIHlvdSBhcmUgcnVubmluZyBhIHZlcmlmaWVkXG4gICAgICAgICAgdmVyc2lvbiBvZiB0aGlzIHBsdWdpbi5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZmFpbGVkIHRvIHJ1biB0aGlzIHBsdWdpbiBkdWUgdG8gYW4gdW5rb3duIHJlYXNvbiBhbmQgaGF2ZSB0aGVyZWZvciBkaXNhYmxlZCBpdC4gV2UgcmVjb21tZW5kIHlvdSB0b1xuICAgICAgICAgIHJlaW5zdGFsbCB0aGUgcGx1Z2luIHRvIG1ha2Ugc3VyZSB5b3UgYXJlIHJ1bm5pbmcgYSB3b3JraW5nIHZlcnNpb24gb2YgdGhpcyBwbHVnaW4uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiwgSWNvbiwgSG9yaXpvbnRhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBnZXRMYXRlc3RDb21wYXRpYmxlVmVyc2lvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgUGx1Z2luRGlzYWJsZWRCYWRnZSB9IGZyb20gJy4vQmFkZ2VzJztcbmltcG9ydCB7IEdldFN0YXJ0ZWRXaXRoUGx1Z2luIH0gZnJvbSAnLi9HZXRTdGFydGVkV2l0aFBsdWdpbic7XG5pbXBvcnQgeyBJbnN0YWxsQ29udHJvbHMgfSBmcm9tICcuL0luc3RhbGxDb250cm9scyc7XG5pbXBvcnQgeyBQbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzIH0gZnJvbSAnLi9QbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzJztcbmltcG9ydCB7IFBsdWdpbkRldGFpbHNIZWFkZXJTaWduYXR1cmUgfSBmcm9tICcuL1BsdWdpbkRldGFpbHNIZWFkZXJTaWduYXR1cmUnO1xuaW1wb3J0IHsgUGx1Z2luTG9nbyB9IGZyb20gJy4vUGx1Z2luTG9nbyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGN1cnJlbnRVcmw6IHN0cmluZztcbiAgcGFyZW50VXJsOiBzdHJpbmc7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5EZXRhaWxzSGVhZGVyKHsgcGx1Z2luLCBjdXJyZW50VXJsLCBwYXJlbnRVcmwgfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGxhdGVzdENvbXBhdGlibGVWZXJzaW9uID0gZ2V0TGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24ocGx1Z2luLmRldGFpbHM/LnZlcnNpb25zKTtcbiAgY29uc3QgdmVyc2lvbiA9IHBsdWdpbi5pbnN0YWxsZWRWZXJzaW9uIHx8IGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPy52ZXJzaW9uO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxQbHVnaW5Mb2dvXG4gICAgICAgICAgICBhbHQ9e2Ake3BsdWdpbi5uYW1lfSBsb2dvYH1cbiAgICAgICAgICAgIHNyYz17cGx1Z2luLmluZm8ubG9nb3Muc21hbGx9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNjhweDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2OHB4O1xuICAgICAgICAgICAgYH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJXcmFwcGVyfT5cbiAgICAgICAgICAgIHsvKiBUaXRsZSAmIG5hdmlnYXRpb24gKi99XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmJyZWFkY3J1bWJ9IGFyaWEtbGFiZWw9XCJCcmVhZGNydW1iXCI+XG4gICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0VW5kZXJsaW5lfSBocmVmPXtwYXJlbnRVcmx9PlxuICAgICAgICAgICAgICAgICAgICBQbHVnaW5zXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtjdXJyZW50VXJsfSBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwbHVnaW4ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySW5mb3JtYXRpb25Sb3d9PlxuICAgICAgICAgICAgICB7LyogT3JnIG5hbWUgKi99XG4gICAgICAgICAgICAgIDxzcGFuPntwbHVnaW4ub3JnTmFtZX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgey8qIExpbmtzICovfVxuICAgICAgICAgICAgICB7cGx1Z2luLmRldGFpbHM/LmxpbmtzLm1hcCgobGluazogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGEga2V5PXtsaW5rLm5hbWV9IGhyZWY9e2xpbmsudXJsfT5cbiAgICAgICAgICAgICAgICAgIHtsaW5rLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICB7LyogRG93bmxvYWRzICovfVxuICAgICAgICAgICAgICB7cGx1Z2luLmRvd25sb2FkcyA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNsb3VkLWRvd25sb2FkXCIgLz5cbiAgICAgICAgICAgICAgICAgIHtgICR7bmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KHBsdWdpbi5kb3dubG9hZHMpfWB9eycgJ31cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIFZlcnNpb24gKi99XG4gICAgICAgICAgICAgIHtCb29sZWFuKHZlcnNpb24pICYmIDxzcGFuPnt2ZXJzaW9ufTwvc3Bhbj59XG5cbiAgICAgICAgICAgICAgey8qIFNpZ25hdHVyZSBpbmZvcm1hdGlvbiAqL31cbiAgICAgICAgICAgICAgPFBsdWdpbkRldGFpbHNIZWFkZXJTaWduYXR1cmUgcGx1Z2luPXtwbHVnaW59IC8+XG5cbiAgICAgICAgICAgICAge3BsdWdpbi5pc0Rpc2FibGVkICYmIDxQbHVnaW5EaXNhYmxlZEJhZGdlIGVycm9yPXtwbHVnaW4uZXJyb3IhfSAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8UGx1Z2luRGV0YWlsc0hlYWRlckRlcGVuZGVuY2llc1xuICAgICAgICAgICAgICBwbHVnaW49e3BsdWdpbn1cbiAgICAgICAgICAgICAgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb249e2xhdGVzdENvbXBhdGlibGVWZXJzaW9ufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5oZWFkZXJJbmZvcm1hdGlvblJvdywgc3R5bGVzLmhlYWRlckluZm9ybWF0aW9uUm93U2Vjb25kYXJ5KX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxwPntwbHVnaW4uZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIGhlaWdodD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgPEluc3RhbGxDb250cm9scyBwbHVnaW49e3BsdWdpbn0gbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb249e2xhdGVzdENvbXBhdGlibGVWZXJzaW9ufSAvPlxuICAgICAgICAgICAgICA8R2V0U3RhcnRlZFdpdGhQbHVnaW4gcGx1Z2luPXtwbHVnaW59IC8+XG4gICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGhlYWRlckNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgYCxcbiAgICBoZWFkZXJXcmFwcGVyOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgICBgLFxuICAgIGJyZWFkY3J1bWI6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmgyLmZvbnRTaXplfTtcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJy8nO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC4yNWNoO1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICBoZWFkZXJJbmZvcm1hdGlvblJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoKX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoKX07XG4gICAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAgICAmID4gKiB7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnfCc7XG4gICAgICAgICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmcoKX07XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDQuZm9udFNpemV9O1xuXG4gICAgICBhIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIGhlYWRlckluZm9ybWF0aW9uUm93U2Vjb25kYXJ5OiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5ib2R5LmZvbnRTaXplfTtcbiAgICBgLFxuICAgIGhlYWRlck9yZ05hbWU6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5Lmg0LmZvbnRTaXplfTtcbiAgICBgLFxuICAgIHNpZ25hdHVyZTogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBgLFxuICAgIHRleHRVbmRlcmxpbmU6IGNzc2BcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIsIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFZlcnNpb24sIENhdGFsb2dQbHVnaW4sIFBsdWdpbkljb25OYW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG4gIGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPzogVmVyc2lvbjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRldGFpbHNIZWFkZXJEZXBlbmRlbmNpZXMoe1xuICBwbHVnaW4sXG4gIGxhdGVzdENvbXBhdGlibGVWZXJzaW9uLFxuICBjbGFzc05hbWUsXG59OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHBsdWdpbkRlcGVuZGVuY2llcyA9IHBsdWdpbi5kZXRhaWxzPy5wbHVnaW5EZXBlbmRlbmNpZXM7XG4gIGNvbnN0IGdyYWZhbmFEZXBlbmRlbmN5ID0gcGx1Z2luLmlzSW5zdGFsbGVkXG4gICAgPyBwbHVnaW4uZGV0YWlscz8uZ3JhZmFuYURlcGVuZGVuY3lcbiAgICA6IGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPy5ncmFmYW5hRGVwZW5kZW5jeSB8fCBwbHVnaW4uZGV0YWlscz8uZ3JhZmFuYURlcGVuZGVuY3k7XG4gIGNvbnN0IGhhc05vRGVwZW5kZW5jeUluZm8gPSAhZ3JhZmFuYURlcGVuZGVuY3kgJiYgKCFwbHVnaW5EZXBlbmRlbmNpZXMgfHwgIXBsdWdpbkRlcGVuZGVuY2llcy5sZW5ndGgpO1xuXG4gIGlmIChoYXNOb0RlcGVuZGVuY3lJbmZvKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXBlbmRlbmN5VGl0bGV9PkRlcGVuZGVuY2llczo8L2Rpdj5cblxuICAgICAgey8qIEdyYWZhbmEgZGVwZW5kZW5jeSAqL31cbiAgICAgIHtCb29sZWFuKGdyYWZhbmFEZXBlbmRlbmN5KSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEljb24gbmFtZT1cImdyYWZhbmFcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgIEdyYWZhbmEge2dyYWZhbmFEZXBlbmRlbmN5fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBQbHVnaW4gZGVwZW5kZW5jaWVzICovfVxuICAgICAge3BsdWdpbkRlcGVuZGVuY2llcyAmJiBwbHVnaW5EZXBlbmRlbmNpZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3BsdWdpbkRlcGVuZGVuY2llcy5tYXAoKHApID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzcGFuIGtleT17cC5uYW1lfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtQbHVnaW5JY29uTmFtZVtwLnR5cGVdfSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgIHtwLm5hbWV9IHtwLnZlcnNpb259XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGRlcGVuZGVuY3lUaXRsZTogY3NzYFxuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZH07XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICBgLFxuICAgIGljb246IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQbHVnaW5TaWduYXR1cmVTdGF0dXMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFBsdWdpblNpZ25hdHVyZUJhZGdlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBQbHVnaW5TaWduYXR1cmVEZXRhaWxzQmFkZ2UgfSBmcm9tICcuL1BsdWdpblNpZ25hdHVyZURldGFpbHNCYWRnZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbi8vIERlc2lnbmVkIHRvIHNob3cgcGx1Z2luIHNpZ25hdHVyZSBpbmZvcm1hdGlvbiBpbiB0aGUgaGVhZGVyIG9uIHRoZSBwbHVnaW4ncyBkZXRhaWxzIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5EZXRhaWxzSGVhZGVyU2lnbmF0dXJlKHsgcGx1Z2luIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBpc1NpZ25hdHVyZVZhbGlkID0gcGx1Z2luLnNpZ25hdHVyZSA9PT0gUGx1Z2luU2lnbmF0dXJlU3RhdHVzLnZhbGlkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9wbHVnaW5zL3BsdWdpbi1zaWduYXR1cmVzL1wiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5rfVxuICAgICAgPlxuICAgICAgICA8UGx1Z2luU2lnbmF0dXJlQmFkZ2Ugc3RhdHVzPXtwbHVnaW4uc2lnbmF0dXJlfSAvPlxuICAgICAgPC9hPlxuXG4gICAgICB7aXNTaWduYXR1cmVWYWxpZCAmJiAoXG4gICAgICAgIDxQbHVnaW5TaWduYXR1cmVEZXRhaWxzQmFkZ2Ugc2lnbmF0dXJlVHlwZT17cGx1Z2luLnNpZ25hdHVyZVR5cGV9IHNpZ25hdHVyZU9yZz17cGx1Z2luLnNpZ25hdHVyZU9yZ30gLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQbHVnaW5FcnJvckNvZGUsIFBsdWdpblNpZ25hdHVyZVN0YXR1cyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG59O1xuXG4vLyBEZXNpZ25lZCB0byBzaG93IHNpZ25hdHVyZSBpbmZvcm1hdGlvbiBpbnNpZGUgdGhlIGFjdGl2ZSB0YWIgb24gdGhlIHBsdWdpbidzIGRldGFpbHMgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRldGFpbHNTaWduYXR1cmUoeyBjbGFzc05hbWUsIHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBpc1NpZ25hdHVyZVZhbGlkID0gcGx1Z2luLnNpZ25hdHVyZSA9PT0gUGx1Z2luU2lnbmF0dXJlU3RhdHVzLnZhbGlkO1xuICBjb25zdCBpc0NvcmUgPSBwbHVnaW4uc2lnbmF0dXJlID09PSBQbHVnaW5TaWduYXR1cmVTdGF0dXMuaW50ZXJuYWw7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBwbHVnaW4uaXNEaXNhYmxlZCAmJiBpc0Rpc2FibGVkRHVlVG9vU2lnbmF0dXJlRXJyb3IocGx1Z2luLmVycm9yKTtcblxuICAvLyBUaGUgYmFzaWMgaW5mb3JtYXRpb24gaXMgYWxyZWFkeSBhdmFpbGFibGUgaW4gdGhlIGhlYWRlclxuICBpZiAoaXNTaWduYXR1cmVWYWxpZCB8fCBpc0NvcmUgfHwgaXNEaXNhYmxlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnRcbiAgICAgIHNldmVyaXR5PVwid2FybmluZ1wiXG4gICAgICB0aXRsZT1cIkludmFsaWQgcGx1Z2luIHNpZ25hdHVyZVwiXG4gICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGx1Z2luUGFnZS5zaWduYXR1cmVJbmZvfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgPlxuICAgICAgPHA+XG4gICAgICAgIEdyYWZhbmEgTGFicyBjaGVja3MgZWFjaCBwbHVnaW4gdG8gdmVyaWZ5IHRoYXQgaXQgaGFzIGEgdmFsaWQgZGlnaXRhbCBzaWduYXR1cmUuIFBsdWdpbiBzaWduYXR1cmUgdmVyaWZpY2F0aW9uXG4gICAgICAgIGlzIHBhcnQgb2Ygb3VyIHNlY3VyaXR5IG1lYXN1cmVzIHRvIGVuc3VyZSBwbHVnaW5zIGFyZSBzYWZlIGFuZCB0cnVzdHdvcnRoeS4gR3JhZmFuYSBMYWJzIGNhbuKAmXQgZ3VhcmFudGVlIHRoZVxuICAgICAgICBpbnRlZ3JpdHkgb2YgdGhpcyB1bnNpZ25lZCBwbHVnaW4uIEFzayB0aGUgcGx1Z2luIGF1dGhvciB0byByZXF1ZXN0IGl0IHRvIGJlIHNpZ25lZC5cbiAgICAgIDwvcD5cblxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9wbHVnaW5zL3BsdWdpbi1zaWduYXR1cmVzL1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgID5cbiAgICAgICAgUmVhZCBtb3JlIGFib3V0IHBsdWdpbnMgc2lnbmluZy5cbiAgICAgIDwvYT5cbiAgICA8L0FsZXJ0PlxuICApO1xufVxuXG5mdW5jdGlvbiBpc0Rpc2FibGVkRHVlVG9vU2lnbmF0dXJlRXJyb3IoZXJyb3I6IFBsdWdpbkVycm9yQ29kZSB8IHVuZGVmaW5lZCkge1xuICAvLyBJZiB0aGUgcGx1Z2luIGlzIGRpc2FibGVkIGR1ZSB0byBzaWduYXR1cmUgZXJyb3Igd2UgcmVseSBvbiB0aGUgZGlzYWJsZWRcbiAgLy8gZXJyb3IgbWVzc2FnZSBpbnN0YWQgb2YgdGhlIHdhcm5pbmcgYWJvdXQgdGhlIHNpZ25hdHVyZS5cblxuICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUuaW52YWxpZFNpZ25hdHVyZTpcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5taXNzaW5nU2lnbmF0dXJlOlxuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1vZGlmaWVkU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFBsdWdpbkxvZ29Qcm9wcyA9IHtcbiAgYWx0OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5Mb2dvKHsgYWx0LCBjbGFzc05hbWUsIHNyYywgaGVpZ2h0IH06IFBsdWdpbkxvZ29Qcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIC8vIEB0cy1pZ25vcmUgLSByZWFjdCBkb2Vzbid0IGtub3cgYWJvdXQgbG9hZGluZyBhdHRyLlxuICByZXR1cm4gPGltZyBzcmM9e3NyY30gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGFsdD17YWx0fSBsb2FkaW5nPVwibGF6eVwiIGhlaWdodD17aGVpZ2h0fSAvPjtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFBsdWdpblNpZ25hdHVyZVR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIsIEljb24sIEJhZGdlLCBJY29uTmFtZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuY29uc3QgU0lHTkFUVVJFX0lDT05TOiBSZWNvcmQ8c3RyaW5nLCBJY29uTmFtZT4gPSB7XG4gIFtQbHVnaW5TaWduYXR1cmVUeXBlLmdyYWZhbmFdOiAnZ3JhZmFuYScsXG4gIFtQbHVnaW5TaWduYXR1cmVUeXBlLmNvbW1lcmNpYWxdOiAnc2hpZWxkJyxcbiAgW1BsdWdpblNpZ25hdHVyZVR5cGUuY29tbXVuaXR5XTogJ3NoaWVsZCcsXG4gIERFRkFVTFQ6ICdzaGllbGQtZXhjbGFtYXRpb24nLFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2lnbmF0dXJlVHlwZT86IFBsdWdpblNpZ25hdHVyZVR5cGU7XG4gIHNpZ25hdHVyZU9yZz86IHN0cmluZztcbn07XG5cbi8vIFNob3dzIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYSB2YWxpZCBzaWduYXR1cmVcbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5TaWduYXR1cmVEZXRhaWxzQmFkZ2UoeyBzaWduYXR1cmVUeXBlLCBzaWduYXR1cmVPcmcgPSAnJyB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgaWYgKCFzaWduYXR1cmVUeXBlICYmICFzaWduYXR1cmVPcmcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNpZ25hdHVyZVR5cGVUZXh0ID0gc2lnbmF0dXJlVHlwZSA9PT0gUGx1Z2luU2lnbmF0dXJlVHlwZS5ncmFmYW5hID8gJ0dyYWZhbmEgTGFicycgOiBjYXBpdGFsaXplKHNpZ25hdHVyZVR5cGUpO1xuICBjb25zdCBzaWduYXR1cmVJY29uID0gU0lHTkFUVVJFX0lDT05TW3NpZ25hdHVyZVR5cGUgfHwgJyddIHx8IFNJR05BVFVSRV9JQ09OUy5ERUZBVUxUO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZXRhaWxzQmFkZ2U+XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3Ryb25nfT5MZXZlbDombmJzcDs8L3N0cm9uZz5cbiAgICAgICAgPEljb24gc2l6ZT1cInhzXCIgbmFtZT17c2lnbmF0dXJlSWNvbn0gLz5cbiAgICAgICAgJm5ic3A7XG4gICAgICAgIHtzaWduYXR1cmVUeXBlVGV4dH1cbiAgICAgIDwvRGV0YWlsc0JhZGdlPlxuXG4gICAgICA8RGV0YWlsc0JhZGdlPlxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLnN0cm9uZ30+U2lnbmVkIGJ5Ojwvc3Ryb25nPiB7c2lnbmF0dXJlT3JnfVxuICAgICAgPC9EZXRhaWxzQmFkZ2U+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBEZXRhaWxzQmFkZ2U6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIDxCYWRnZSBjb2xvcj1cImdyZWVuXCIgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9IHRleHQ9ezw+e2NoaWxkcmVufTwvPn0gLz47XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGJhZGdlOiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5jYW52YXN9O1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYm9yZGVyLnN0cm9uZ307XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKCl9O1xuICBgLFxuICBzdHJvbmc6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5wcmltYXJ5fTtcbiAgYCxcbiAgaWNvbjogY3NzYFxuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXRUaW1lQWdvLCBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBnZXRMYXRlc3RDb21wYXRpYmxlVmVyc2lvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdmVyc2lvbnM/OiBWZXJzaW9uW107XG4gIGluc3RhbGxlZFZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBWZXJzaW9uTGlzdCA9ICh7IHZlcnNpb25zID0gW10sIGluc3RhbGxlZFZlcnNpb24gfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbiA9IGdldExhdGVzdENvbXBhdGlibGVWZXJzaW9uKHZlcnNpb25zKTtcblxuICBpZiAodmVyc2lvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxwPk5vIHZlcnNpb24gaGlzdG9yeSB3YXMgZm91bmQuPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5WZXJzaW9uPC90aD5cbiAgICAgICAgICA8dGg+TGFzdCB1cGRhdGVkPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHt2ZXJzaW9ucy5tYXAoKHZlcnNpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBpc0luc3RhbGxlZFZlcnNpb24gPSBpbnN0YWxsZWRWZXJzaW9uID09PSB2ZXJzaW9uLnZlcnNpb247XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9e3ZlcnNpb24udmVyc2lvbn0+XG4gICAgICAgICAgICAgIHsvKiBWZXJzaW9uIG51bWJlciAqL31cbiAgICAgICAgICAgICAge2lzSW5zdGFsbGVkVmVyc2lvbiA/IChcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudFZlcnNpb259Pnt2ZXJzaW9uLnZlcnNpb259IChpbnN0YWxsZWQgdmVyc2lvbik8L3RkPlxuICAgICAgICAgICAgICApIDogdmVyc2lvbi52ZXJzaW9uID09PSBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj8udmVyc2lvbiA/IChcbiAgICAgICAgICAgICAgICA8dGQ+e3ZlcnNpb24udmVyc2lvbn0gKGxhdGVzdCBjb21wYXRpYmxlIHZlcnNpb24pPC90ZD5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8dGQ+e3ZlcnNpb24udmVyc2lvbn08L3RkPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHsvKiBMYXN0IHVwZGF0ZWQgKi99XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2lzSW5zdGFsbGVkVmVyc2lvbiA/IHN0eWxlcy5jdXJyZW50VmVyc2lvbiA6ICcnfT5cbiAgICAgICAgICAgICAgICB7ZGF0ZVRpbWVGb3JtYXRUaW1lQWdvKHZlcnNpb24uY3JlYXRlZEF0KX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyLCA0LCAzKX07XG4gIGAsXG4gIHRhYmxlOiBjc3NgXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZCxcbiAgICB0aCB7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoKX0gMDtcbiAgICB9XG4gICAgdGgge1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDUuZm9udFNpemV9O1xuICAgIH1cbiAgYCxcbiAgY3VycmVudFZlcnNpb246IGNzc2BcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBsb2FkUGx1Z2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHVzZVBsdWdpbkNvbmZpZyA9IChwbHVnaW4/OiBDYXRhbG9nUGx1Z2luKSA9PiB7XG4gIHJldHVybiB1c2VBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFwbHVnaW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChwbHVnaW4uaXNJbnN0YWxsZWQgJiYgIXBsdWdpbi5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbG9hZFBsdWdpbihwbHVnaW4uaWQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgW3BsdWdpbj8uaWQsIHBsdWdpbj8uaXNJbnN0YWxsZWQsIHBsdWdpbj8uaXNEaXNhYmxlZF0pO1xufTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBQbHVnaW5JbmNsdWRlVHlwZSwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyB1c2VQbHVnaW5Db25maWcgfSBmcm9tICcuLi9ob29rcy91c2VQbHVnaW5Db25maWcnO1xuaW1wb3J0IHsgaXNPcmdBZG1pbiB9IGZyb20gJy4uL3Blcm1pc3Npb25zJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4sIFBsdWdpbkRldGFpbHNUYWIsIFBsdWdpblRhYklkcywgUGx1Z2luVGFiTGFiZWxzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFJldHVyblR5cGUgPSB7XG4gIGVycm9yOiBFcnJvciB8IHVuZGVmaW5lZDtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgdGFiczogUGx1Z2luRGV0YWlsc1RhYltdO1xuICBkZWZhdWx0VGFiOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlUGx1Z2luRGV0YWlsc1RhYnMgPSAocGx1Z2luPzogQ2F0YWxvZ1BsdWdpbiwgZGVmYXVsdFRhYnM6IFBsdWdpbkRldGFpbHNUYWJbXSA9IFtdKTogUmV0dXJuVHlwZSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIHZhbHVlOiBwbHVnaW5Db25maWcgfSA9IHVzZVBsdWdpbkNvbmZpZyhwbHVnaW4pO1xuICBjb25zdCBpc1B1Ymxpc2hlZCA9IEJvb2xlYW4ocGx1Z2luPy5pc1B1Ymxpc2hlZCk7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgY29uc3QgW3RhYnMsIGRlZmF1bHRUYWJdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgY2FuQ29uZmlndXJlUGx1Z2lucyA9IGlzT3JnQWRtaW4oKTtcbiAgICBjb25zdCB0YWJzOiBQbHVnaW5EZXRhaWxzVGFiW10gPSBbLi4uZGVmYXVsdFRhYnNdO1xuICAgIGxldCBkZWZhdWx0VGFiO1xuXG4gICAgaWYgKGlzUHVibGlzaGVkKSB7XG4gICAgICB0YWJzLnB1c2goe1xuICAgICAgICBsYWJlbDogUGx1Z2luVGFiTGFiZWxzLlZFUlNJT05TLFxuICAgICAgICBpY29uOiAnaGlzdG9yeScsXG4gICAgICAgIGlkOiBQbHVnaW5UYWJJZHMuVkVSU0lPTlMsXG4gICAgICAgIGhyZWY6IGAke3BhdGhuYW1lfT9wYWdlPSR7UGx1Z2luVGFiSWRzLlZFUlNJT05TfWAsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBOb3QgZXh0ZW5kaW5nIHRoZSB0YWJzIHdpdGggdGhlIGNvbmZpZyBwYWdlcyBpZiB0aGUgcGx1Z2luIGlzIG5vdCBpbnN0YWxsZWRcbiAgICBpZiAoIXBsdWdpbkNvbmZpZykge1xuICAgICAgZGVmYXVsdFRhYiA9IFBsdWdpblRhYklkcy5PVkVSVklFVztcbiAgICAgIHJldHVybiBbdGFicywgZGVmYXVsdFRhYl07XG4gICAgfVxuXG4gICAgaWYgKGNhbkNvbmZpZ3VyZVBsdWdpbnMpIHtcbiAgICAgIGlmIChwbHVnaW5Db25maWcubWV0YS50eXBlID09PSBQbHVnaW5UeXBlLmFwcCkge1xuICAgICAgICBpZiAocGx1Z2luQ29uZmlnLmFuZ3VsYXJDb25maWdDdHJsKSB7XG4gICAgICAgICAgdGFicy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ29uZmlnJyxcbiAgICAgICAgICAgIGljb246ICdjb2cnLFxuICAgICAgICAgICAgaWQ6IFBsdWdpblRhYklkcy5DT05GSUcsXG4gICAgICAgICAgICBocmVmOiBgJHtwYXRobmFtZX0/cGFnZT0ke1BsdWdpblRhYklkcy5DT05GSUd9YCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkZWZhdWx0VGFiID0gUGx1Z2luVGFiSWRzLkNPTkZJRztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbHVnaW5Db25maWcuY29uZmlnUGFnZXMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGx1Z2luQ29uZmlnLmNvbmZpZ1BhZ2VzKSB7XG4gICAgICAgICAgICB0YWJzLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogcGFnZS50aXRsZSxcbiAgICAgICAgICAgICAgaWNvbjogcGFnZS5pY29uLFxuICAgICAgICAgICAgICBpZDogcGFnZS5pZCxcbiAgICAgICAgICAgICAgaHJlZjogYCR7cGF0aG5hbWV9P3BhZ2U9JHtwYWdlLmlkfWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghZGVmYXVsdFRhYikge1xuICAgICAgICAgICAgICBkZWZhdWx0VGFiID0gcGFnZS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGx1Z2luQ29uZmlnLm1ldGEuaW5jbHVkZXM/LmZpbmQoKGluY2x1ZGUpID0+IGluY2x1ZGUudHlwZSA9PT0gUGx1Z2luSW5jbHVkZVR5cGUuZGFzaGJvYXJkKSkge1xuICAgICAgICAgIHRhYnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogJ0Rhc2hib2FyZHMnLFxuICAgICAgICAgICAgaWNvbjogJ2FwcHMnLFxuICAgICAgICAgICAgaWQ6IFBsdWdpblRhYklkcy5EQVNIQk9BUkRTLFxuICAgICAgICAgICAgaHJlZjogYCR7cGF0aG5hbWV9P3BhZ2U9JHtQbHVnaW5UYWJJZHMuREFTSEJPQVJEU31gLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkZWZhdWx0VGFiKSB7XG4gICAgICBkZWZhdWx0VGFiID0gUGx1Z2luVGFiSWRzLk9WRVJWSUVXO1xuICAgIH1cblxuICAgIHJldHVybiBbdGFicywgZGVmYXVsdFRhYl07XG4gIH0sIFtwbHVnaW5Db25maWcsIGRlZmF1bHRUYWJzLCBwYXRobmFtZSwgaXNQdWJsaXNoZWRdKTtcblxuICByZXR1cm4ge1xuICAgIGVycm9yLFxuICAgIGxvYWRpbmcsXG4gICAgdGFicyxcbiAgICBkZWZhdWx0VGFiLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVzZVN0eWxlczIsIFRhYnNCYXIsIFRhYkNvbnRlbnQsIFRhYiwgQWxlcnQsIEljb25OYW1lIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IEFwcE5vdGlmaWNhdGlvblNldmVyaXR5IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXInO1xuaW1wb3J0IHsgUGx1Z2luRGV0YWlsc0JvZHkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNCb2R5JztcbmltcG9ydCB7IFBsdWdpbkRldGFpbHNEaXNhYmxlZEVycm9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QbHVnaW5EZXRhaWxzRGlzYWJsZWRFcnJvcic7XG5pbXBvcnQgeyBQbHVnaW5EZXRhaWxzSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QbHVnaW5EZXRhaWxzSGVhZGVyJztcbmltcG9ydCB7IFBsdWdpbkRldGFpbHNTaWduYXR1cmUgfSBmcm9tICcuLi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNTaWduYXR1cmUnO1xuaW1wb3J0IHsgdXNlUGx1Z2luRGV0YWlsc1RhYnMgfSBmcm9tICcuLi9ob29rcy91c2VQbHVnaW5EZXRhaWxzVGFicyc7XG5pbXBvcnQgeyB1c2VHZXRTaW5nbGUsIHVzZUZldGNoU3RhdHVzLCB1c2VGZXRjaERldGFpbHNTdGF0dXMgfSBmcm9tICcuLi9zdGF0ZS9ob29rcyc7XG5pbXBvcnQgeyBQbHVnaW5UYWJMYWJlbHMsIFBsdWdpblRhYklkcywgUGx1Z2luRGV0YWlsc1RhYiB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgcGx1Z2luSWQ/OiBzdHJpbmcgfT47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsdWdpbkRldGFpbHMoeyBtYXRjaCwgcXVlcnlQYXJhbXMgfTogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7XG4gICAgcGFyYW1zOiB7IHBsdWdpbklkID0gJycgfSxcbiAgICB1cmwsXG4gIH0gPSBtYXRjaDtcbiAgY29uc3QgcGFyZW50VXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGFzdEluZGV4T2YoJy8nKSk7XG4gIGNvbnN0IGRlZmF1bHRUYWJzOiBQbHVnaW5EZXRhaWxzVGFiW10gPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFBsdWdpblRhYkxhYmVscy5PVkVSVklFVyxcbiAgICAgIGljb246ICdmaWxlLWFsdCcsXG4gICAgICBpZDogUGx1Z2luVGFiSWRzLk9WRVJWSUVXLFxuICAgICAgaHJlZjogYCR7dXJsfT9wYWdlPSR7UGx1Z2luVGFiSWRzLk9WRVJWSUVXfWAsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgcGx1Z2luID0gdXNlR2V0U2luZ2xlKHBsdWdpbklkKTsgLy8gZmV0Y2hlcyB0aGUgbG9jYWxwbHVnaW4gc2V0dGluZ3NcbiAgY29uc3QgeyB0YWJzLCBkZWZhdWx0VGFiIH0gPSB1c2VQbHVnaW5EZXRhaWxzVGFicyhwbHVnaW4sIGRlZmF1bHRUYWJzKTtcbiAgY29uc3QgeyBpc0xvYWRpbmc6IGlzRmV0Y2hMb2FkaW5nIH0gPSB1c2VGZXRjaFN0YXR1cygpO1xuICBjb25zdCB7IGlzTG9hZGluZzogaXNGZXRjaERldGFpbHNMb2FkaW5nIH0gPSB1c2VGZXRjaERldGFpbHNTdGF0dXMoKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBwcmV2VGFicyA9IHVzZVByZXZpb3VzKHRhYnMpO1xuICBjb25zdCBwYWdlSWQgPSAocXVlcnlQYXJhbXMucGFnZSBhcyBQbHVnaW5UYWJJZHMpIHx8IGRlZmF1bHRUYWI7XG5cbiAgLy8gSWYgYW4gYXBwIHBsdWdpbiBpcyB1bmluc3RhbGxlZCB3ZSBuZWVkIHRvIHJlc2V0IHRoZSBhY3RpdmUgdGFiIHdoZW4gdGhlIGNvbmZpZyAvIGRhc2hib2FyZHMgdGFicyBhcmUgcmVtb3ZlZC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYXNVbmluc3RhbGxlZFdpdGhDb25maWdQYWdlcyA9IHByZXZUYWJzICYmIHByZXZUYWJzLmxlbmd0aCA+IHRhYnMubGVuZ3RoO1xuICAgIGNvbnN0IGlzVmlld2luZ0FDb25maWdQYWdlID0gcGFnZUlkICE9PSBQbHVnaW5UYWJJZHMuT1ZFUlZJRVcgJiYgcGFnZUlkICE9PSBQbHVnaW5UYWJJZHMuVkVSU0lPTlM7XG5cbiAgICBpZiAoaGFzVW5pbnN0YWxsZWRXaXRoQ29uZmlnUGFnZXMgJiYgaXNWaWV3aW5nQUNvbmZpZ1BhZ2UpIHtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5yZXBsYWNlKGAke3VybH0/cGFnZT0ke1BsdWdpblRhYklkcy5PVkVSVklFV31gKTtcbiAgICB9XG4gIH0sIFtwYWdlSWQsIHVybCwgdGFicywgcHJldlRhYnNdKTtcblxuICBpZiAoaXNGZXRjaExvYWRpbmcgfHwgaXNGZXRjaERldGFpbHNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghcGx1Z2luKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxBbGVydCBzZXZlcml0eT17QXBwTm90aWZpY2F0aW9uU2V2ZXJpdHkuV2FybmluZ30gdGl0bGU9XCJQbHVnaW4gbm90IGZvdW5kXCI+XG4gICAgICAgICAgVGhhdCBwbHVnaW4gY2Fubm90IGJlIGZvdW5kLiBQbGVhc2UgY2hlY2sgdGhlIHVybCBpcyBjb3JyZWN0IG9yIDxiciAvPlxuICAgICAgICAgIGdvIHRvIHRoZSA8YSBocmVmPXtwYXJlbnRVcmx9PnBsdWdpbiBjYXRhbG9nPC9hPi5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPFBsdWdpbkRldGFpbHNIZWFkZXIgY3VycmVudFVybD17YCR7dXJsfT9wYWdlPSR7cGFnZUlkfWB9IHBhcmVudFVybD17cGFyZW50VXJsfSBwbHVnaW49e3BsdWdpbn0gLz5cbiAgICAgIHsvKiBUYWIgbmF2aWdhdGlvbiAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8VGFic0JhciBoaWRlQm9yZGVyPlxuICAgICAgICAgICAge3RhYnMubWFwKCh0YWI6IFBsdWdpbkRldGFpbHNUYWIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICBrZXk9e3RhYi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXt0YWIubGFiZWx9XG4gICAgICAgICAgICAgICAgICBocmVmPXt0YWIuaHJlZn1cbiAgICAgICAgICAgICAgICAgIGljb249e3RhYi5pY29uIGFzIEljb25OYW1lfVxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0YWIuaWQgPT09IHBhZ2VJZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9UYWJzQmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIHsvKiBBY3RpdmUgdGFiICovfVxuICAgICAgICA8VGFiQ29udGVudCBjbGFzc05hbWU9e3N0eWxlcy50YWJDb250ZW50fT5cbiAgICAgICAgICA8UGx1Z2luRGV0YWlsc1NpZ25hdHVyZSBwbHVnaW49e3BsdWdpbn0gY2xhc3NOYW1lPXtzdHlsZXMuYWxlcnR9IC8+XG4gICAgICAgICAgPFBsdWdpbkRldGFpbHNEaXNhYmxlZEVycm9yIHBsdWdpbj17cGx1Z2lufSBjbGFzc05hbWU9e3N0eWxlcy5hbGVydH0gLz5cbiAgICAgICAgICA8UGx1Z2luRGV0YWlsc0JvZHkgcXVlcnlQYXJhbXM9e3F1ZXJ5UGFyYW1zfSBwbHVnaW49e3BsdWdpbn0gcGFnZUlkPXtwYWdlSWR9IC8+XG4gICAgICAgIDwvVGFiQ29udGVudD5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhbGVydDogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBgLFxuICAgIC8vIE5lZWRlZCBkdWUgdG8gYmxvY2sgZm9ybWF0dGluZyBjb250ZXh0XG4gICAgdGFiQ29udGVudDogY3NzYFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFBsdWdpbkVycm9yIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IHNvcnRQbHVnaW5zLCBTb3J0ZXJzIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luLCBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSwgUGx1Z2luTGlzdERpc3BsYXlNb2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBmZXRjaEFsbCwgZmV0Y2hEZXRhaWxzLCBmZXRjaFJlbW90ZVBsdWdpbnMsIGluc3RhbGwsIHVuaW5zdGFsbCB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXREaXNwbGF5TW9kZSB9IGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQge1xuICBmaW5kLFxuICBzZWxlY3RBbGwsXG4gIHNlbGVjdEJ5SWQsXG4gIHNlbGVjdElzUmVxdWVzdFBlbmRpbmcsXG4gIHNlbGVjdFJlcXVlc3RFcnJvcixcbiAgc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZCxcbiAgc2VsZWN0RGlzcGxheU1vZGUsXG4gIHNlbGVjdFBsdWdpbkVycm9ycyxcbn0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG50eXBlIEZpbHRlcnMgPSB7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xuICBmaWx0ZXJCeT86IHN0cmluZztcbiAgZmlsdGVyQnlUeXBlPzogc3RyaW5nO1xuICBzb3J0Qnk/OiBTb3J0ZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbFdpdGhGaWx0ZXJzID0gKHtcbiAgcXVlcnkgPSAnJyxcbiAgZmlsdGVyQnkgPSAnaW5zdGFsbGVkJyxcbiAgZmlsdGVyQnlUeXBlID0gJ2FsbCcsXG4gIHNvcnRCeSA9IFNvcnRlcnMubmFtZUFzYyxcbn06IEZpbHRlcnMpID0+IHtcbiAgdXNlRmV0Y2hBbGwoKTtcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZVNlbGVjdG9yKGZpbmQocXVlcnksIGZpbHRlckJ5LCBmaWx0ZXJCeVR5cGUpKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaFN0YXR1cygpO1xuICBjb25zdCBzb3J0ZWRBbmRGaWx0ZXJlZCA9IHNvcnRQbHVnaW5zKGZpbHRlcmVkLCBzb3J0QnkpO1xuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIHBsdWdpbnM6IHNvcnRlZEFuZEZpbHRlcmVkLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbCA9ICgpOiBDYXRhbG9nUGx1Z2luW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RBbGwpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldFNpbmdsZSA9IChpZDogc3RyaW5nKTogQ2F0YWxvZ1BsdWdpbiB8IHVuZGVmaW5lZCA9PiB7XG4gIHVzZUZldGNoQWxsKCk7XG4gIHVzZUZldGNoRGV0YWlscyhpZCk7XG5cbiAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUpID0+IHNlbGVjdEJ5SWQoc3RhdGUsIGlkKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0RXJyb3JzID0gKCk6IFBsdWdpbkVycm9yW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RQbHVnaW5FcnJvcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuIChpZDogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nLCBpc1VwZGF0aW5nPzogYm9vbGVhbikgPT4gZGlzcGF0Y2goaW5zdGFsbCh7IGlkLCB2ZXJzaW9uLCBpc1VwZGF0aW5nIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVbmluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICByZXR1cm4gKGlkOiBzdHJpbmcpID0+IGRpc3BhdGNoKHVuaW5zdGFsbChpZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hSZW1vdGVQbHVnaW5zLnR5cGVQcmVmaXgpKTtcbiAgcmV0dXJuIGVycm9yID09PSBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoQWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hBbGwudHlwZVByZWZpeCkpO1xuXG4gIHJldHVybiB7IGlzTG9hZGluZywgZXJyb3IgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VGZXRjaERldGFpbHNTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcblxuICByZXR1cm4geyBpc0xvYWRpbmcsIGVycm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNJbnN0YWxsaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyhpbnN0YWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNJbnN0YWxsaW5nLCBlcnJvciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVVuaW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNVbmluc3RhbGxpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNVbmluc3RhbGxpbmcsIGVycm9yIH07XG59O1xuXG4vLyBPbmx5IGZldGNoZXMgaW4gY2FzZSB0aGV5IHdlcmUgbm90IGZldGNoZWQgeWV0XG5leHBvcnQgY29uc3QgdXNlRmV0Y2hBbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNOb3RGZXRjaGVkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZChmZXRjaEFsbC50eXBlUHJlZml4KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc05vdEZldGNoZWQgJiYgZGlzcGF0Y2goZmV0Y2hBbGwoKSk7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoRGV0YWlscyA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcGx1Z2luID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc2VsZWN0QnlJZChzdGF0ZSwgaWQpKTtcbiAgY29uc3QgaXNOb3RGZXRjaGluZyA9ICF1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoRGV0YWlscy50eXBlUHJlZml4KSk7XG4gIGNvbnN0IHNob3VsZEZldGNoID0gaXNOb3RGZXRjaGluZyAmJiBwbHVnaW4gJiYgIXBsdWdpbi5kZXRhaWxzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvdWxkRmV0Y2ggJiYgZGlzcGF0Y2goZmV0Y2hEZXRhaWxzKGlkKSk7XG4gIH0sIFtwbHVnaW5dKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZURpc3BsYXlNb2RlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGRpc3BsYXlNb2RlID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGlzcGxheU1vZGUpO1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheU1vZGUsXG4gICAgc2V0RGlzcGxheU1vZGU6ICh2OiBQbHVnaW5MaXN0RGlzcGxheU1vZGUpID0+IGRpc3BhdGNoKHNldERpc3BsYXlNb2RlKHYpKSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQgeyBQbHVnaW5FcnJvciwgUGx1Z2luRXJyb3JDb2RlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IFJlcXVlc3RTdGF0dXMsIFBsdWdpbkNhdGFsb2dTdG9yZVN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBwbHVnaW5zQWRhcHRlciB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSb290ID0gKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc3RhdGUucGx1Z2lucztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Um9vdCwgKHsgaXRlbXMgfSkgPT4gaXRlbXMpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlzcGxheU1vZGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyBzZXR0aW5ncyB9KSA9PiBzZXR0aW5ncy5kaXNwbGF5TW9kZSk7XG5cbmV4cG9ydCBjb25zdCB7IHNlbGVjdEFsbCwgc2VsZWN0QnlJZCB9ID0gcGx1Z2luc0FkYXB0ZXIuZ2V0U2VsZWN0b3JzKHNlbGVjdEl0ZW1zKTtcblxuY29uc3Qgc2VsZWN0SW5zdGFsbGVkID0gKGZpbHRlckJ5OiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEFsbCwgKHBsdWdpbnMpID0+XG4gICAgcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gKGZpbHRlckJ5ID09PSAnaW5zdGFsbGVkJyA/IHBsdWdpbi5pc0luc3RhbGxlZCA6ICFwbHVnaW4uaXNDb3JlKSlcbiAgKTtcblxuY29uc3QgZmluZEJ5SW5zdGFsbEFuZFR5cGUgPSAoZmlsdGVyQnk6IHN0cmluZywgZmlsdGVyQnlUeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEluc3RhbGxlZChmaWx0ZXJCeSksIChwbHVnaW5zKSA9PlxuICAgIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IGZpbHRlckJ5VHlwZSA9PT0gJ2FsbCcgfHwgcGx1Z2luLnR5cGUgPT09IGZpbHRlckJ5VHlwZSlcbiAgKTtcblxuY29uc3QgZmluZEJ5S2V5d29yZCA9IChzZWFyY2hCeTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RBbGwsIChwbHVnaW5zKSA9PiB7XG4gICAgaWYgKHNlYXJjaEJ5ID09PSAnJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IFN0cmluZ1tdID0gW107XG4gICAgICBpZiAocGx1Z2luLm5hbWUpIHtcbiAgICAgICAgZmllbGRzLnB1c2gocGx1Z2luLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbHVnaW4ub3JnTmFtZSkge1xuICAgICAgICBmaWVsZHMucHVzaChwbHVnaW4ub3JnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkcy5zb21lKChmKSA9PiBmLmluY2x1ZGVzKHNlYXJjaEJ5LnRvTG93ZXJDYXNlKCkpKTtcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gKHNlYXJjaEJ5OiBzdHJpbmcsIGZpbHRlckJ5OiBzdHJpbmcsIGZpbHRlckJ5VHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBmaW5kQnlJbnN0YWxsQW5kVHlwZShmaWx0ZXJCeSwgZmlsdGVyQnlUeXBlKSxcbiAgICBmaW5kQnlLZXl3b3JkKHNlYXJjaEJ5KSxcbiAgICAoZmlsdGVyZWRQbHVnaW5zLCBzZWFyY2hlZFBsdWdpbnMpID0+IHtcbiAgICAgIHJldHVybiBzZWFyY2hCeSA9PT0gJycgPyBmaWx0ZXJlZFBsdWdpbnMgOiBzZWFyY2hlZFBsdWdpbnM7XG4gICAgfVxuICApO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UGx1Z2luRXJyb3JzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QWxsLCAocGx1Z2lucykgPT5cbiAgcGx1Z2luc1xuICAgID8gcGx1Z2luc1xuICAgICAgICAuZmlsdGVyKChwKSA9PiBCb29sZWFuKHAuZXJyb3IpKVxuICAgICAgICAubWFwKFxuICAgICAgICAgIChwKTogUGx1Z2luRXJyb3IgPT4gKHtcbiAgICAgICAgICAgIHBsdWdpbklkOiBwLmlkLFxuICAgICAgICAgICAgZXJyb3JDb2RlOiBwIS5lcnJvciBhcyBQbHVnaW5FcnJvckNvZGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIDogW11cbik7XG5cbi8vIFRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIGFyZSB1c2VkIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgb3V0c3RhbmRpbmcgb3IgY29tcGxldGVkIHBsdWdpbnMtcmVsYXRlZCBuZXR3b3JrIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlcXVlc3QgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyByZXF1ZXN0cyA9IHt9IH0pID0+IHJlcXVlc3RzW2FjdGlvblR5cGVdKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzUmVxdWVzdFBlbmRpbmcgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSZXF1ZXN0KGFjdGlvblR5cGUpLCAocmVxdWVzdCkgPT4gcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlBlbmRpbmcpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVxdWVzdEVycm9yID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+XG4gICAgcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlJlamVjdGVkID8gcmVxdWVzdD8uZXJyb3IgOiBudWxsXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+IHJlcXVlc3QgPT09IHVuZGVmaW5lZCk7XG4iLCJpbXBvcnQgeyBHcmFmYW5hUGx1Z2luLCBQYW5lbFBsdWdpbk1ldGEsIFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgaW1wb3J0UGFuZWxQbHVnaW5Gcm9tTWV0YSB9IGZyb20gJy4vaW1wb3J0UGFuZWxQbHVnaW4nO1xuaW1wb3J0IHsgZ2V0UGx1Z2luU2V0dGluZ3MgfSBmcm9tICcuL3BsdWdpblNldHRpbmdzJztcbmltcG9ydCB7IGltcG9ydEFwcFBsdWdpbiwgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJy4vcGx1Z2luX2xvYWRlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkUGx1Z2luKHBsdWdpbklkOiBzdHJpbmcpOiBQcm9taXNlPEdyYWZhbmFQbHVnaW4+IHtcbiAgY29uc3QgaW5mbyA9IGF3YWl0IGdldFBsdWdpblNldHRpbmdzKHBsdWdpbklkKTtcbiAgbGV0IHJlc3VsdDogR3JhZmFuYVBsdWdpbiB8IHVuZGVmaW5lZDtcblxuICBpZiAoaW5mby50eXBlID09PSBQbHVnaW5UeXBlLmFwcCkge1xuICAgIHJlc3VsdCA9IGF3YWl0IGltcG9ydEFwcFBsdWdpbihpbmZvKTtcbiAgfVxuICBpZiAoaW5mby50eXBlID09PSBQbHVnaW5UeXBlLmRhdGFzb3VyY2UpIHtcbiAgICByZXN1bHQgPSBhd2FpdCBpbXBvcnREYXRhU291cmNlUGx1Z2luKGluZm8pO1xuICB9XG4gIGlmIChpbmZvLnR5cGUgPT09IFBsdWdpblR5cGUucGFuZWwpIHtcbiAgICBjb25zdCBwYW5lbFBsdWdpbiA9IGF3YWl0IGltcG9ydFBhbmVsUGx1Z2luRnJvbU1ldGEoaW5mbyBhcyBQYW5lbFBsdWdpbk1ldGEpO1xuICAgIHJlc3VsdCA9IHBhbmVsUGx1Z2luIGFzIHVua25vd24gYXMgR3JhZmFuYVBsdWdpbjtcbiAgfVxuICBpZiAoaW5mby50eXBlID09PSBQbHVnaW5UeXBlLnJlbmRlcmVyKSB7XG4gICAgcmVzdWx0ID0geyBtZXRhOiBpbmZvIH0gYXMgR3JhZmFuYVBsdWdpbjtcbiAgfVxuXG4gIGlmICghcmVzdWx0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIFBsdWdpbiB0eXBlOiAnICsgaW5mby50eXBlKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHN0YXRlKSB7XG4gICAgdmFyIHJlZiA9IHVzZVJlZigpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gc3RhdGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuIl0sIm5hbWVzIjpbImNvbmZpZyIsImlzVHJpYWwiLCJleHBpcnkiLCJsaWNlbnNlSW5mbyIsInRyaWFsRXhwaXJ5IiwiaGlnaGxpZ2h0VHJpYWwiLCJmZWF0dXJlVG9nZ2xlcyIsImZlYXR1cmVIaWdobGlnaHRzIiwiUmVhY3QiLCJCdXR0b24iLCJJY29uIiwiRGFzaGJvYXJkc1RhYmxlIiwiZGFzaGJvYXJkcyIsIm9uSW1wb3J0Iiwib25SZW1vdmUiLCJidXR0b25UZXh0IiwiZGFzaGJvYXJkIiwicmV2aXNpb24iLCJpbXBvcnRlZFJldmlzaW9uIiwibWFwIiwiaW5kZXgiLCJpbXBvcnRlZCIsImltcG9ydGVkVXJsIiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJkYXNoYm9hcmRJZCIsImxhc3RWYWx1ZUZyb20iLCJsb2NhdGlvblV0aWwiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJIZWFsdGhDaGVja0Vycm9yIiwiaXNGZXRjaEVycm9yIiwibG9jYXRpb25TZXJ2aWNlIiwidXBkYXRlTmF2SW5kZXgiLCJnZXRCYWNrZW5kU3J2IiwiYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0iLCJnZXREYXRhc291cmNlU3J2IiwiZ2V0UGx1Z2luU2V0dGluZ3MiLCJpbXBvcnREYXRhU291cmNlUGx1Z2luIiwiY29udGV4dFNydiIsImJ1aWxkQ2F0ZWdvcmllcyIsImJ1aWxkTmF2TW9kZWwiLCJkYXRhU291cmNlTG9hZGVkIiwiZGF0YVNvdXJjZU1ldGFMb2FkZWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWRlZCIsImRhdGFTb3VyY2VzTG9hZGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQiLCJ0ZXN0RGF0YVNvdXJjZUZhaWxlZCIsInRlc3REYXRhU291cmNlU3RhcnRpbmciLCJ0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCIsImdldERhdGFTb3VyY2UiLCJnZXREYXRhU291cmNlTWV0YSIsImluaXREYXRhU291cmNlU2V0dGluZ3MiLCJwYWdlSWQiLCJkZXBlbmRlbmNpZXMiLCJsb2FkRGF0YVNvdXJjZSIsImxvYWREYXRhU291cmNlTWV0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJFcnJvciIsImxvYWRlZERhdGFTb3VyY2UiLCJkYXRhU291cmNlU2V0dGluZ3MiLCJwbHVnaW4iLCJkYXRhU291cmNlIiwiZGF0YVNvdXJjZXMiLCJkYXRhU291cmNlTWV0YSIsInR5cGUiLCJpbXBvcnRlZFBsdWdpbiIsImVyciIsInRlc3REYXRhU291cmNlIiwiZGF0YVNvdXJjZU5hbWUiLCJkc0FwaSIsImdldCIsInRlc3REYXRhc291cmNlIiwid2l0aE5vQmFja2VuZENhY2hlIiwicmVzdWx0IiwibWVzc2FnZSIsImRldGFpbHMiLCJkYXRhIiwic3RhdHVzVGV4dCIsImxvYWREYXRhU291cmNlcyIsInJlc3BvbnNlIiwidWlkIiwiZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCIsInBsdWdpbkluZm8iLCJpc0JhY2tlbmQiLCJEYXRhU291cmNlQ2xhc3MiLCJwcm90b3R5cGUiLCJtZXRhIiwiYmFja2VuZCIsImJ5VWlkIiwiZmV0Y2giLCJtZXRob2QiLCJ1cmwiLCJwYXJhbXMiLCJzaG93RXJyb3JBbGVydCIsIm9rIiwiY29uc29sZSIsImxvZyIsImlkIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsInRvU3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYXNzdXJlQmFzZVVybCIsImFkZERhdGFTb3VyY2UiLCJnZXRTdG9yZSIsIm5ld0luc3RhbmNlIiwibmFtZSIsImFjY2VzcyIsImlzRGVmYXVsdCIsImxlbmd0aCIsIm5hbWVFeGl0cyIsImZpbmROZXdOYW1lIiwicG9zdCIsInJlbG9hZCIsImZldGNoVXNlclBlcm1pc3Npb25zIiwicHVzaCIsImRhdGFzb3VyY2UiLCJsb2FkRGF0YVNvdXJjZVBsdWdpbnMiLCJwbHVnaW5zIiwiZW5hYmxlZCIsImNhdGVnb3JpZXMiLCJ1cGRhdGVEYXRhU291cmNlIiwicHV0IiwiZGVsZXRlRGF0YVNvdXJjZSIsImRlbGV0ZSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwibmFtZUhhc1N1ZmZpeCIsImdldE5ld05hbWUiLCJpbmNyZW1lbnRMYXN0RGlnaXQiLCJnZXRMYXN0RGlnaXQiLCJlbmRzV2l0aCIsInNsaWNlIiwiZGlnaXQiLCJQbHVnaW5UeXBlIiwiZmVhdHVyZUVuYWJsZWQiLCJpdGVtIiwiY2F0ZWdvcnlJbmRleCIsInBsdWdpbkluZGV4IiwiZW50ZXJwcmlzZVBsdWdpbnMiLCJnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMiLCJjYXRlZ29yeSIsImVudGVycHJpc2VQbHVnaW4iLCJmaW5kIiwiZW50ZXJwcmlzZSIsInVubGljZW5zZWQiLCJpbmZvIiwibGlua3MiLCJsaW5rIiwiZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbiIsInNvcnRQbHVnaW5zIiwiYyIsInNvcnRpbmdSdWxlcyIsInByb21ldGhldXMiLCJncmFwaGl0ZSIsImxva2kiLCJteXNxbCIsImphZWdlciIsInBvc3RncmVzIiwiZ2Nsb3VkIiwic29ydCIsImEiLCJiIiwiYVNvcnQiLCJiU29ydCIsImdldFBoYW50b21QbHVnaW4iLCJkZXNjcmlwdGlvbiIsImltZ1VybCIsIm1vZHVsZSIsImJhc2VVcmwiLCJsb2dvcyIsInNtYWxsIiwibGFyZ2UiLCJhdXRob3IiLCJzY3JlZW5zaG90cyIsInVwZGF0ZWQiLCJ2ZXJzaW9uIiwib3B0aW9ucyIsInBsdWdpbkNhdGFsb2dVUkwiLCJQcm9CYWRnZSIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJsb2FkaW5nRFNUeXBlIiwicGx1Z2luTWV0YSIsImhpZ2hsaWdodHNFbmFibGVkIiwibmF2TW9kZWwiLCJpbWciLCJzdWJUaXRsZSIsInRleHQiLCJicmVhZGNydW1icyIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaWNvbiIsImNvbmZpZ1BhZ2VzIiwicGFnZSIsImluY2x1ZGVzIiwiaGFzRGFzaGJvYXJkcyIsImhhc1JvbGUiLCJpc0xvYWRpbmdOYXYiLCJwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCIsImRzUGVybWlzc2lvbnMiLCJ0YWJTdWZmaXgiLCJleHBlcmltZW50SWQiLCJldmVudFZhcmlhbnQiLCJoYXNQZXJtaXNzaW9uIiwiRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQiLCJhbmFseXRpY3NFeHBlcmltZW50SWQiLCJhbmFseXRpY3MiLCJjYWNoaW5nRXhwZXJpbWVudElkIiwiY2FjaGluZyIsImhpZGVGcm9tVGFicyIsImdldERhdGFTb3VyY2VOYXYiLCJtYWluIiwicGFnZU5hbWUiLCJub2RlIiwiY2hpbGQiLCJpbmRleE9mIiwiZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYiLCJiYXNpY0F1dGgiLCJiYXNpY0F1dGhVc2VyIiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YWJhc2UiLCJqc29uRGF0YSIsImF1dGhUeXBlIiwiZGVmYXVsdFJlZ2lvbiIsIm9yZ0lkIiwicmVhZE9ubHkiLCJ0eXBlTmFtZSIsInR5cGVMb2dvVXJsIiwidXNlciIsInNlY3VyZUpzb25GaWVsZHMiLCJpbmNsdWRlIiwidW5kZWZpbmVkIiwiZ2V0RGF0YVNvdXJjZXMiLCJzdGF0ZSIsInJlZ2V4IiwiUmVnRXhwIiwic2VhcmNoUXVlcnkiLCJ0ZXN0IiwiZ2V0RGF0YVNvdXJjZVBsdWdpbnMiLCJkYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5IiwiZGF0YVNvdXJjZUlkIiwiZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSIsImdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSIsImxheW91dE1vZGUiLCJnZXREYXRhU291cmNlc0NvdW50IiwiZGF0YVNvdXJjZXNDb3VudCIsImNzcyIsImNsb25lRGVlcCIsImV4dGVuZCIsIlB1cmVDb21wb25lbnQiLCJkZXByZWNhdGlvbldhcm5pbmciLCJnZXRBbmd1bGFyTG9hZGVyIiwiQXBwQ29uZmlnQ3RybFdyYXBwZXIiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwbHVnaW5JZCIsIm1vZGVsIiwicHJlVXBkYXRlSG9vayIsInRoZW4iLCJ1cGRhdGVDbWQiLCJwaW5uZWQiLCJzZWN1cmVKc29uRGF0YSIsInBvc3RVcGRhdGVIb29rIiwicmVzIiwiY2FsbGJhY2siLCJ1cGRhdGUiLCJhbmd1bGFyQ3RybCIsInJlZnJlc2giLCJjb21wb25lbnREaWRNb3VudCIsInNldFRpbWVvdXQiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJhcHAiLCJsb2FkZXIiLCJ0ZW1wbGF0ZSIsInNjb3BlUHJvcHMiLCJjdHJsIiwiaXNBcHBDb25maWdDdHJsIiwibG9hZCIsInJlbmRlciIsIndpdGhSaWdodE1hcmdpbiIsIm1hcmdpblJpZ2h0IiwiZW5hYmxlIiwiZGlzYWJsZSIsIlBsdWdpbkVycm9yQ29kZSIsIkJhZGdlIiwiUGx1Z2luRGlzYWJsZWRCYWRnZSIsImVycm9yIiwidG9vbHRpcCIsImVycm9yQ29kZVRvVG9vbHRpcCIsIm1vZGlmaWVkU2lnbmF0dXJlIiwiaW52YWxpZFNpZ25hdHVyZSIsIm1pc3NpbmdTaWduYXR1cmUiLCJIb3Jpem9udGFsR3JvdXAiLCJQbHVnaW5TaWduYXR1cmVCYWRnZSIsInVzZVN0eWxlczIiLCJnZXRCYWRnZUNvbG9yIiwiUGx1Z2luRW50ZXJwcmlzZUJhZGdlIiwiY3VzdG9tQmFkZ2VTdHlsZXMiLCJvbkNsaWNrIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW4iLCJzaWduYXR1cmUiLCJQbHVnaW5JbnN0YWxsZWRCYWRnZSIsIlBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaGFzVXBkYXRlIiwiaXNDb3JlIiwicmVuZGVyZXIiLCJ0aGVtZSIsImNvbG9ycyIsInNlY29uZGFyeSIsInR5cG9ncmFwaHkiLCJib2R5U21hbGwiLCJmb250U2l6ZSIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwiYm9yZGVyIiwic3Ryb25nIiwidXBkYXRlUGx1Z2luU2V0dGluZ3MiLCJ1c2VQbHVnaW5Db25maWciLCJHZXRTdGFydGVkV2l0aEFwcCIsInZhbHVlIiwicGx1Z2luQ29uZmlnIiwidXBkYXRlUGx1Z2luU2V0dGluZ3NBbmRSZWxvYWQiLCJlIiwidXNlQ2FsbGJhY2siLCJ1c2VEaXNwYXRjaCIsImlzRGF0YVNvdXJjZUVkaXRvciIsIkdldFN0YXJ0ZWRXaXRoRGF0YVNvdXJjZSIsIm9uQWRkRGF0YVNvdXJjZSIsIkdldFN0YXJ0ZWRXaXRoUGx1Z2luIiwiaXNJbnN0YWxsZWQiLCJpc0Rpc2FibGVkIiwiTGlua0J1dHRvbiIsImdldEV4dGVybmFsTWFuYWdlTGluayIsIlBsdWdpblN0YXR1cyIsIkV4dGVybmFsbHlNYW5hZ2VkQnV0dG9uIiwicGx1Z2luU3RhdHVzIiwiZXh0ZXJuYWxNYW5hZ2VMaW5rIiwiVVBEQVRFIiwiVU5JTlNUQUxMIiwiaXNJbnN0YWxsQ29udHJvbHNFbmFibGVkIiwiaXNHcmFmYW5hQWRtaW4iLCJ1c2VJc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUiLCJJbnN0YWxsQ29udHJvbHNCdXR0b24iLCJJbnN0YWxsQ29udHJvbHMiLCJsYXRlc3RDb21wYXRpYmxlVmVyc2lvbiIsImlzRXh0ZXJuYWxseU1hbmFnZWQiLCJwbHVnaW5BZG1pbkV4dGVybmFsTWFuYWdlRW5hYmxlZCIsImlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSIsImlzQ29tcGF0aWJsZSIsIkJvb2xlYW4iLCJpc0luc3RhbGxDb250cm9sc0Rpc2FibGVkIiwiSU5TVEFMTCIsImlzRW50ZXJwcmlzZSIsImlzRGV2IiwiaXNQdWJsaXNoZWQiLCJ1c2VTdGF0ZSIsIkFwcEV2ZW50cyIsIkNvbmZpcm1Nb2RhbCIsImFwcEV2ZW50cyIsInVzZUluc3RhbGxTdGF0dXMiLCJ1c2VVbmluc3RhbGxTdGF0dXMiLCJ1c2VJbnN0YWxsIiwidXNlVW5pbnN0YWxsIiwiaXNJbnN0YWxsaW5nIiwiZXJyb3JJbnN0YWxsaW5nIiwiaXNVbmluc3RhbGxpbmciLCJlcnJvclVuaW5zdGFsbGluZyIsImluc3RhbGwiLCJ1bmluc3RhbGwiLCJpc0NvbmZpcm1Nb2RhbFZpc2libGUiLCJzZXRJc0NvbmZpcm1Nb2RhbFZpc2libGUiLCJzaG93Q29uZmlybU1vZGFsIiwiaGlkZUNvbmZpcm1Nb2RhbCIsInVuaW5zdGFsbEJ0blRleHQiLCJvbkluc3RhbGwiLCJlbWl0IiwiYWxlcnRTdWNjZXNzIiwib25Vbmluc3RhbGwiLCJvblVwZGF0ZSIsIkxvYWRpbmdQbGFjZWhvbGRlciIsIkxvYWRlciIsIlBsdWdpbkRhc2hib2FyZHMiLCJpbXBvcnROZXh0IiwiaW1wb3J0IiwiZGFzaCIsIm92ZXJ3cml0ZSIsImluc3RhbGxDbWQiLCJwYXRoIiwiaW5wdXRzIiwibG9hZGluZyIsInJlbW92ZSIsImN4IiwiVmVyc2lvbkxpc3QiLCJQbHVnaW5UYWJJZHMiLCJQbHVnaW5EZXRhaWxzQm9keSIsInF1ZXJ5UGFyYW1zIiwiT1ZFUlZJRVciLCJyZWFkbWUiLCJjb250YWluZXIiLCJfX2h0bWwiLCJWRVJTSU9OUyIsInZlcnNpb25zIiwiaW5zdGFsbGVkVmVyc2lvbiIsIkNPTkZJRyIsImFuZ3VsYXJDb25maWdDdHJsIiwiY29uZmlnUGFnZSIsIkRBU0hCT0FSRFMiLCJzcGFjaW5nIiwic2VsZWN0b3JzIiwiQWxlcnQiLCJQbHVnaW5EZXRhaWxzRGlzYWJsZWRFcnJvciIsImNsYXNzTmFtZSIsInBhZ2VzIiwiUGx1Z2luUGFnZSIsImRpc2FibGVkSW5mbyIsInJlbmRlckRlc2NyaXB0aW9uRnJvbUVycm9yIiwiZ2V0TGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24iLCJQbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzIiwiUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZSIsIlBsdWdpbkxvZ28iLCJQbHVnaW5EZXRhaWxzSGVhZGVyIiwiY3VycmVudFVybCIsInBhcmVudFVybCIsImhlYWRlckNvbnRhaW5lciIsImhlYWRlcldyYXBwZXIiLCJicmVhZGNydW1iIiwidGV4dFVuZGVybGluZSIsImhlYWRlckluZm9ybWF0aW9uUm93Iiwib3JnTmFtZSIsImRvd25sb2FkcyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJoZWFkZXJJbmZvcm1hdGlvblJvd1NlY29uZGFyeSIsImgyIiwiaDQiLCJib2R5IiwiaGVhZGVyT3JnTmFtZSIsIlBsdWdpbkljb25OYW1lIiwicGx1Z2luRGVwZW5kZW5jaWVzIiwiZ3JhZmFuYURlcGVuZGVuY3kiLCJoYXNOb0RlcGVuZGVuY3lJbmZvIiwiZGVwZW5kZW5jeVRpdGxlIiwicCIsImZvbnRXZWlnaHRCb2xkIiwiUGx1Z2luU2lnbmF0dXJlU3RhdHVzIiwiUGx1Z2luU2lnbmF0dXJlRGV0YWlsc0JhZGdlIiwiaXNTaWduYXR1cmVWYWxpZCIsInZhbGlkIiwic2lnbmF0dXJlVHlwZSIsInNpZ25hdHVyZU9yZyIsIlBsdWdpbkRldGFpbHNTaWduYXR1cmUiLCJpbnRlcm5hbCIsImlzRGlzYWJsZWREdWVUb29TaWduYXR1cmVFcnJvciIsInNpZ25hdHVyZUluZm8iLCJhbHQiLCJzcmMiLCJoZWlnaHQiLCJjYXBpdGFsaXplIiwiUGx1Z2luU2lnbmF0dXJlVHlwZSIsIlNJR05BVFVSRV9JQ09OUyIsImdyYWZhbmEiLCJjb21tZXJjaWFsIiwiY29tbXVuaXR5IiwiREVGQVVMVCIsInNpZ25hdHVyZVR5cGVUZXh0Iiwic2lnbmF0dXJlSWNvbiIsIkRldGFpbHNCYWRnZSIsImJhZGdlIiwiY2FudmFzIiwiZGF0ZVRpbWVGb3JtYXRUaW1lQWdvIiwidGFibGUiLCJpc0luc3RhbGxlZFZlcnNpb24iLCJjdXJyZW50VmVyc2lvbiIsImNyZWF0ZWRBdCIsImg1IiwidXNlQXN5bmMiLCJsb2FkUGx1Z2luIiwidXNlTWVtbyIsInVzZUxvY2F0aW9uIiwiUGx1Z2luSW5jbHVkZVR5cGUiLCJpc09yZ0FkbWluIiwiUGx1Z2luVGFiTGFiZWxzIiwidXNlUGx1Z2luRGV0YWlsc1RhYnMiLCJkZWZhdWx0VGFicyIsInBhdGhuYW1lIiwidGFicyIsImRlZmF1bHRUYWIiLCJjYW5Db25maWd1cmVQbHVnaW5zIiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJ1c2VQcmV2aW91cyIsIlRhYnNCYXIiLCJUYWJDb250ZW50IiwiVGFiIiwiTGF5b3V0IiwiUGFnZSIsIkFwcE5vdGlmaWNhdGlvblNldmVyaXR5IiwidXNlR2V0U2luZ2xlIiwidXNlRmV0Y2hTdGF0dXMiLCJ1c2VGZXRjaERldGFpbHNTdGF0dXMiLCJQbHVnaW5EZXRhaWxzIiwibWF0Y2giLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImlzTG9hZGluZyIsImlzRmV0Y2hMb2FkaW5nIiwiaXNGZXRjaERldGFpbHNMb2FkaW5nIiwicHJldlRhYnMiLCJoYXNVbmluc3RhbGxlZFdpdGhDb25maWdQYWdlcyIsImlzVmlld2luZ0FDb25maWdQYWdlIiwicmVwbGFjZSIsIldhcm5pbmciLCJ0YWIiLCJ0YWJDb250ZW50IiwiYWxlcnQiLCJ1c2VTZWxlY3RvciIsIlNvcnRlcnMiLCJmZXRjaEFsbCIsImZldGNoRGV0YWlscyIsImZldGNoUmVtb3RlUGx1Z2lucyIsInNldERpc3BsYXlNb2RlIiwic2VsZWN0QWxsIiwic2VsZWN0QnlJZCIsInNlbGVjdElzUmVxdWVzdFBlbmRpbmciLCJzZWxlY3RSZXF1ZXN0RXJyb3IiLCJzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkIiwic2VsZWN0RGlzcGxheU1vZGUiLCJzZWxlY3RQbHVnaW5FcnJvcnMiLCJ1c2VHZXRBbGxXaXRoRmlsdGVycyIsInF1ZXJ5IiwiZmlsdGVyQnkiLCJmaWx0ZXJCeVR5cGUiLCJzb3J0QnkiLCJuYW1lQXNjIiwidXNlRmV0Y2hBbGwiLCJmaWx0ZXJlZCIsInNvcnRlZEFuZEZpbHRlcmVkIiwidXNlR2V0QWxsIiwidXNlRmV0Y2hEZXRhaWxzIiwidXNlR2V0RXJyb3JzIiwiaXNVcGRhdGluZyIsInR5cGVQcmVmaXgiLCJpc05vdEZldGNoZWQiLCJpc05vdEZldGNoaW5nIiwic2hvdWxkRmV0Y2giLCJ1c2VEaXNwbGF5TW9kZSIsImRpc3BsYXlNb2RlIiwidiIsImNyZWF0ZVNlbGVjdG9yIiwiUmVxdWVzdFN0YXR1cyIsInBsdWdpbnNBZGFwdGVyIiwic2VsZWN0Um9vdCIsInNlbGVjdEl0ZW1zIiwiaXRlbXMiLCJzZXR0aW5ncyIsImdldFNlbGVjdG9ycyIsInNlbGVjdEluc3RhbGxlZCIsImZpbmRCeUluc3RhbGxBbmRUeXBlIiwiZmluZEJ5S2V5d29yZCIsInNlYXJjaEJ5IiwiZmllbGRzIiwic29tZSIsImYiLCJmaWx0ZXJlZFBsdWdpbnMiLCJzZWFyY2hlZFBsdWdpbnMiLCJlcnJvckNvZGUiLCJzZWxlY3RSZXF1ZXN0IiwiYWN0aW9uVHlwZSIsInJlcXVlc3RzIiwicmVxdWVzdCIsInN0YXR1cyIsIlBlbmRpbmciLCJSZWplY3RlZCIsImltcG9ydFBhbmVsUGx1Z2luRnJvbU1ldGEiLCJpbXBvcnRBcHBQbHVnaW4iLCJwYW5lbCIsInBhbmVsUGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==