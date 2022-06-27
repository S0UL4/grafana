"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DataSourcesListPage"],{

/***/ "./public/app/core/components/PageActionBar/PageActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageActionBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




class PageActionBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      searchQuery,
      linkButton,
      setSearchQuery,
      target,
      placeholder = 'Search by name or type'
    } = this.props;
    const linkProps = {
      href: linkButton === null || linkButton === void 0 ? void 0 : linkButton.href,
      disabled: linkButton === null || linkButton === void 0 ? void 0 : linkButton.disabled
    };

    if (target) {
      linkProps.target = target;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "page-action-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
          value: searchQuery,
          onChange: setSearchQuery,
          placeholder: placeholder
        })
      }), linkButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({}, linkProps, {
        children: linkButton.title
      }))]
    });
  }

}

/***/ }),

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

/***/ "./public/app/features/datasources/DataSourcesList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourcesList": () => (/* binding */ DataSourcesList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tag;

// Libraries

 // Types




const DataSourcesList = ({
  dataSources,
  layoutMode
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
    className: styles.list,
    children: dataSources.map(dataSource => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
          href: `datasources/edit/${dataSource.uid}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
            children: dataSource.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Figure, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: dataSource.typeLogoUrl,
              alt: "",
              height: "40px",
              width: "40px",
              className: styles.logo
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            children: [dataSource.typeName, dataSource.url, dataSource.isDefault && (_Tag || (_Tag = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tag, {
              name: 'default',
              colorIndex: 1
            }, "default-tag")))]
          })]
        })
      }, dataSource.id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSourcesList);

const getStyles = () => {
  return {
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      listStyle: 'none',
      display: 'grid' // gap: '8px', Add back when legacy support for old Card interface is dropped

    }),
    logo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      objectFit: 'contain'
    })
  };
};

/***/ }),

/***/ "./public/app/features/datasources/DataSourcesListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourcesListPage": () => (/* binding */ DataSourcesListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PageActionBar/PageActionBar.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _DataSourcesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/DataSourcesList.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
















function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'datasources'),
    dataSources: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getDataSources)(state.dataSources),
    layoutMode: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getDataSourcesLayoutMode)(state.dataSources),
    dataSourcesCount: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getDataSourcesCount)(state.dataSources),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getDataSourcesSearchQuery)(state.dataSources),
    hasFetched: state.dataSources.hasFetched
  };
}

const mapDispatchToProps = {
  loadDataSources: _state_actions__WEBPACK_IMPORTED_MODULE_9__.loadDataSources,
  setDataSourcesSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_10__.setDataSourcesSearchQuery,
  setDataSourcesLayoutMode: _state_reducers__WEBPACK_IMPORTED_MODULE_10__.setDataSourcesLayoutMode
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const emptyListModel = {
  title: 'No data sources defined',
  buttonIcon: 'database',
  buttonLink: 'datasources/new',
  buttonTitle: 'Add data source',
  proTip: 'You can also define data sources through configuration files.',
  proTipLink: 'http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list',
  proTipLinkTitle: 'Learn more',
  proTipTarget: '_blank'
};
class DataSourcesListPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  componentDidMount() {
    this.props.loadDataSources();
  }

  render() {
    const {
      dataSources,
      dataSourcesCount,
      navModel,
      layoutMode,
      searchQuery,
      setDataSourcesSearchQuery,
      hasFetched
    } = this.props;
    const canCreateDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.DataSourcesCreate);
    const linkButton = {
      href: 'datasources/new',
      title: 'Add data source',
      disabled: !canCreateDataSource
    };
    const emptyList = Object.assign({}, emptyListModel, {
      buttonDisabled: !canCreateDataSource
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        isLoading: !hasFetched,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
          children: [hasFetched && dataSourcesCount === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, emptyList)), hasFetched && dataSourcesCount > 0 && [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
            searchQuery: searchQuery,
            setSearchQuery: query => setDataSourcesSearchQuery(query),
            linkButton: linkButton
          }, "action-bar"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_DataSourcesList__WEBPACK_IMPORTED_MODULE_8__["default"], {
            dataSources: dataSources,
            layoutMode: layoutMode
          }, "list")]]
        })
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourcesListPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVNvdXJjZXNMaXN0UGFnZS4zOWZkMzFlMjU1OTJlM2Q1YzRhOS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7O0FBVWUsTUFBTUksYUFBTixTQUE0QkgsZ0RBQTVCLENBQWlEO0VBQzlESSxNQUFNLEdBQUc7SUFDUCxNQUFNO01BQUVDLFdBQUY7TUFBZUMsVUFBZjtNQUEyQkMsY0FBM0I7TUFBMkNDLE1BQTNDO01BQW1EQyxXQUFXLEdBQUc7SUFBakUsSUFBOEYsS0FBS0MsS0FBekc7SUFDQSxNQUFNQyxTQUF5QyxHQUFHO01BQUVDLElBQUksRUFBRU4sVUFBRixhQUFFQSxVQUFGLHVCQUFFQSxVQUFVLENBQUVNLElBQXBCO01BQTBCQyxRQUFRLEVBQUVQLFVBQUYsYUFBRUEsVUFBRix1QkFBRUEsVUFBVSxDQUFFTztJQUFoRCxDQUFsRDs7SUFFQSxJQUFJTCxNQUFKLEVBQVk7TUFDVkcsU0FBUyxDQUFDSCxNQUFWLEdBQW1CQSxNQUFuQjtJQUNEOztJQUVELG9CQUNFO01BQUssU0FBUyxFQUFDLGlCQUFmO01BQUEsd0JBQ0U7UUFBSyxTQUFTLEVBQUMsdUJBQWY7UUFBQSx1QkFDRSx1REFBQyxvREFBRDtVQUFhLEtBQUssRUFBRUgsV0FBcEI7VUFBaUMsUUFBUSxFQUFFRSxjQUEzQztVQUEyRCxXQUFXLEVBQUVFO1FBQXhFO01BREYsRUFERixFQUlHSCxVQUFVLGlCQUFJLHVEQUFDLG1EQUFELG9CQUFnQkssU0FBaEI7UUFBQSxVQUE0QkwsVUFBVSxDQUFDUTtNQUF2QyxHQUpqQjtJQUFBLEVBREY7RUFRRDs7QUFqQjZEOzs7Ozs7Ozs7Ozs7O0FDWmhFO0FBRU8sU0FBU0UsT0FBVCxHQUFtQjtFQUFBOztFQUN4QixNQUFNQyxNQUFNLDBCQUFHRixvRUFBSCx3REFBRyxvQkFBb0JJLFdBQW5DO0VBQ0EsT0FBTyxDQUFDLEVBQUVGLE1BQU0sSUFBSUEsTUFBTSxHQUFHLENBQXJCLENBQVI7QUFDRDtBQUVNLE1BQU1HLGNBQWMsR0FB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LElBQUlDLE1BQUosQ0FBVzdOLEtBQUssQ0FBQ2dPLHlCQUFqQixFQUE0QyxHQUE1QyxDQUFkO0VBRUEsT0FBT2hPLEtBQUssQ0FBQytHLE9BQU4sQ0FBY08sTUFBZCxDQUFzQnpELElBQUQsSUFBZ0M7SUFDMUQsT0FBTytKLEtBQUssQ0FBQ0UsSUFBTixDQUFXakssSUFBSSxDQUFDckYsSUFBaEIsQ0FBUDtFQUNELENBRk0sQ0FBUDtBQUdELENBTk07QUFRQSxNQUFNdUUsYUFBYSxHQUFHLENBQUMvQyxLQUFELEVBQTBCaU8sWUFBMUIsS0FBOEU7RUFDekcsSUFBSWpPLEtBQUssQ0FBQzFCLFVBQU4sQ0FBaUJDLEdBQWpCLEtBQXlCMFAsWUFBN0IsRUFBMkM7SUFDekMsT0FBT2pPLEtBQUssQ0FBQzFCLFVBQWI7RUFDRDs7RUFDRCxPQUFPLEVBQVA7QUFDRCxDQUxNO0FBT0EsTUFBTTBFLGlCQUFpQixHQUFHLENBQUNoRCxLQUFELEVBQTBCNkQsSUFBMUIsS0FBaUU7RUFDaEcsSUFBSTdELEtBQUssQ0FBQzRELGNBQU4sQ0FBcUI5RSxFQUFyQixLQUE0QitFLElBQWhDLEVBQXNDO0lBQ3BDLE9BQU83RCxLQUFLLENBQUM0RCxjQUFiO0VBQ0Q7O0VBRUQsT0FBTyxFQUFQO0FBQ0QsQ0FOTTtBQVFBLE1BQU05RCx5QkFBeUIsR0FBSUUsS0FBRCxJQUE2QkEsS0FBSyxDQUFDdkQsV0FBckU7QUFDQSxNQUFNb0Qsd0JBQXdCLEdBQUlHLEtBQUQsSUFBNkJBLEtBQUssQ0FBQy9CLFVBQXBFO0FBQ0EsTUFBTTJCLG1CQUFtQixHQUFJSSxLQUFELElBQTZCQSxLQUFLLENBQUNHLGdCQUEvRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlQWN0aW9uQmFyL1BhZ2VBY3Rpb25CYXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL0RhdGFTb3VyY2VzTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvRGF0YVNvdXJjZXNMaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9idWlsZENhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvc2VsZWN0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMaW5rQnV0dG9uLCBGaWx0ZXJJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XG4gIHNldFNlYXJjaFF1ZXJ5OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgbGlua0J1dHRvbj86IHsgaHJlZjogc3RyaW5nOyB0aXRsZTogc3RyaW5nOyBkaXNhYmxlZD86IGJvb2xlYW4gfTtcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZUFjdGlvbkJhciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VhcmNoUXVlcnksIGxpbmtCdXR0b24sIHNldFNlYXJjaFF1ZXJ5LCB0YXJnZXQsIHBsYWNlaG9sZGVyID0gJ1NlYXJjaCBieSBuYW1lIG9yIHR5cGUnIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxpbmtQcm9wczogdHlwZW9mIExpbmtCdXR0b24uZGVmYXVsdFByb3BzID0geyBocmVmOiBsaW5rQnV0dG9uPy5ocmVmLCBkaXNhYmxlZDogbGlua0J1dHRvbj8uZGlzYWJsZWQgfTtcblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIGxpbmtQcm9wcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgPEZpbHRlcklucHV0IHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e3NldFNlYXJjaFF1ZXJ5fSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bGlua0J1dHRvbiAmJiA8TGlua0J1dHRvbiB7Li4ubGlua1Byb3BzfT57bGlua0J1dHRvbi50aXRsZX08L0xpbmtCdXR0b24+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmlhbCgpIHtcbiAgY29uc3QgZXhwaXJ5ID0gY29uZmlnLmxpY2Vuc2VJbmZvPy50cmlhbEV4cGlyeTtcbiAgcmV0dXJuICEhKGV4cGlyeSAmJiBleHBpcnkgPiAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFRyaWFsID0gKCkgPT4gaXNUcmlhbCgpICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuLy8gVHlwZXNcbmltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncywgTGF5b3V0TW9kZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2FyZCwgVGFnLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhU291cmNlczogRGF0YVNvdXJjZVNldHRpbmdzW107XG4gIGxheW91dE1vZGU6IExheW91dE1vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBEYXRhU291cmNlc0xpc3Q6IEZDPFByb3BzPiA9ICh7IGRhdGFTb3VyY2VzLCBsYXlvdXRNb2RlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICB7ZGF0YVNvdXJjZXMubWFwKChkYXRhU291cmNlKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGtleT17ZGF0YVNvdXJjZS5pZH0+XG4gICAgICAgICAgICA8Q2FyZCBocmVmPXtgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfWB9PlxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkaW5nPntkYXRhU291cmNlLm5hbWV9PC9DYXJkLkhlYWRpbmc+XG4gICAgICAgICAgICAgIDxDYXJkLkZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YVNvdXJjZS50eXBlTG9nb1VybH0gYWx0PVwiXCIgaGVpZ2h0PVwiNDBweFwiIHdpZHRoPVwiNDBweFwiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgICAgICAgIDwvQ2FyZC5GaWd1cmU+XG4gICAgICAgICAgICAgIDxDYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UudHlwZU5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhU291cmNlLnVybCxcbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UuaXNEZWZhdWx0ICYmIDxUYWcga2V5PVwiZGVmYXVsdC10YWdcIiBuYW1lPXsnZGVmYXVsdCd9IGNvbG9ySW5kZXg9ezF9IC8+LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVNvdXJjZXNMaXN0O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGlzdDogY3NzKHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgLy8gZ2FwOiAnOHB4JywgQWRkIGJhY2sgd2hlbiBsZWdhY3kgc3VwcG9ydCBmb3Igb2xkIENhcmQgaW50ZXJmYWNlIGlzIGRyb3BwZWRcbiAgICB9KSxcbiAgICBsb2dvOiBjc3Moe1xuICAgICAgb2JqZWN0Rml0OiAnY29udGFpbicsXG4gICAgfSksXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgSWNvbk5hbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgUGFnZUFjdGlvbkJhciBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2VBY3Rpb25CYXIvUGFnZUFjdGlvbkJhcic7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlLCBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IERhdGFTb3VyY2VzTGlzdCBmcm9tICcuL0RhdGFTb3VyY2VzTGlzdCc7XG5pbXBvcnQgeyBsb2FkRGF0YVNvdXJjZXMgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlLCBzZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQge1xuICBnZXREYXRhU291cmNlcyxcbiAgZ2V0RGF0YVNvdXJjZXNDb3VudCxcbiAgZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlLFxuICBnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5LFxufSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ2RhdGFzb3VyY2VzJyksXG4gICAgZGF0YVNvdXJjZXM6IGdldERhdGFTb3VyY2VzKHN0YXRlLmRhdGFTb3VyY2VzKSxcbiAgICBsYXlvdXRNb2RlOiBnZXREYXRhU291cmNlc0xheW91dE1vZGUoc3RhdGUuZGF0YVNvdXJjZXMpLFxuICAgIGRhdGFTb3VyY2VzQ291bnQ6IGdldERhdGFTb3VyY2VzQ291bnQoc3RhdGUuZGF0YVNvdXJjZXMpLFxuICAgIHNlYXJjaFF1ZXJ5OiBnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5KHN0YXRlLmRhdGFTb3VyY2VzKSxcbiAgICBoYXNGZXRjaGVkOiBzdGF0ZS5kYXRhU291cmNlcy5oYXNGZXRjaGVkLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWREYXRhU291cmNlcyxcbiAgc2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSxcbiAgc2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmNvbnN0IGVtcHR5TGlzdE1vZGVsID0ge1xuICB0aXRsZTogJ05vIGRhdGEgc291cmNlcyBkZWZpbmVkJyxcbiAgYnV0dG9uSWNvbjogJ2RhdGFiYXNlJyBhcyBJY29uTmFtZSxcbiAgYnV0dG9uTGluazogJ2RhdGFzb3VyY2VzL25ldycsXG4gIGJ1dHRvblRpdGxlOiAnQWRkIGRhdGEgc291cmNlJyxcbiAgcHJvVGlwOiAnWW91IGNhbiBhbHNvIGRlZmluZSBkYXRhIHNvdXJjZXMgdGhyb3VnaCBjb25maWd1cmF0aW9uIGZpbGVzLicsXG4gIHByb1RpcExpbms6ICdodHRwOi8vZG9jcy5ncmFmYW5hLm9yZy9hZG1pbmlzdHJhdGlvbi9wcm92aXNpb25pbmcvI2RhdGFzb3VyY2VzP3V0bV9zb3VyY2U9Z3JhZmFuYV9kc19saXN0JyxcbiAgcHJvVGlwTGlua1RpdGxlOiAnTGVhcm4gbW9yZScsXG4gIHByb1RpcFRhcmdldDogJ19ibGFuaycsXG59O1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZXNMaXN0UGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkRGF0YVNvdXJjZXMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2VzLCBkYXRhU291cmNlc0NvdW50LCBuYXZNb2RlbCwgbGF5b3V0TW9kZSwgc2VhcmNoUXVlcnksIHNldERhdGFTb3VyY2VzU2VhcmNoUXVlcnksIGhhc0ZldGNoZWQgfSA9XG4gICAgICB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2FuQ3JlYXRlRGF0YVNvdXJjZSA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzQ3JlYXRlKTtcblxuICAgIGNvbnN0IGxpbmtCdXR0b24gPSB7XG4gICAgICBocmVmOiAnZGF0YXNvdXJjZXMvbmV3JyxcbiAgICAgIHRpdGxlOiAnQWRkIGRhdGEgc291cmNlJyxcbiAgICAgIGRpc2FibGVkOiAhY2FuQ3JlYXRlRGF0YVNvdXJjZSxcbiAgICB9O1xuXG4gICAgY29uc3QgZW1wdHlMaXN0ID0ge1xuICAgICAgLi4uZW1wdHlMaXN0TW9kZWwsXG4gICAgICBidXR0b25EaXNhYmxlZDogIWNhbkNyZWF0ZURhdGFTb3VyY2UsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9eyFoYXNGZXRjaGVkfT5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2hhc0ZldGNoZWQgJiYgZGF0YVNvdXJjZXNDb3VudCA9PT0gMCAmJiA8RW1wdHlMaXN0Q1RBIHsuLi5lbXB0eUxpc3R9IC8+fVxuICAgICAgICAgICAge2hhc0ZldGNoZWQgJiZcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZXNDb3VudCA+IDAgJiYgW1xuICAgICAgICAgICAgICAgIDxQYWdlQWN0aW9uQmFyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgICAgICBzZXRTZWFyY2hRdWVyeT17KHF1ZXJ5KSA9PiBzZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5KHF1ZXJ5KX1cbiAgICAgICAgICAgICAgICAgIGxpbmtCdXR0b249e2xpbmtCdXR0b259XG4gICAgICAgICAgICAgICAgICBrZXk9XCJhY3Rpb24tYmFyXCJcbiAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICA8RGF0YVNvdXJjZXNMaXN0IGRhdGFTb3VyY2VzPXtkYXRhU291cmNlc30gbGF5b3V0TW9kZT17bGF5b3V0TW9kZX0ga2V5PVwibGlzdFwiIC8+LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgIDwvPlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoRGF0YVNvdXJjZXNMaXN0UGFnZSk7XG4iLCJpbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIGxvY2F0aW9uVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLFxuICBnZXREYXRhU291cmNlU3J2LFxuICBIZWFsdGhDaGVja0Vycm9yLFxuICBIZWFsdGhDaGVja1Jlc3VsdERldGFpbHMsXG4gIGlzRmV0Y2hFcnJvcixcbiAgbG9jYXRpb25TZXJ2aWNlLFxufSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVwZGF0ZU5hdkluZGV4IH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0gfSBmcm9tICdhcHAvY29yZS91dGlscy9hY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IGdldERhdGFzb3VyY2VTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9kYXRhc291cmNlX3Nydic7XG5pbXBvcnQgeyBnZXRQbHVnaW5TZXR0aW5ncyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpblNldHRpbmdzJztcbmltcG9ydCB7IGltcG9ydERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9wbHVnaW5fbG9hZGVyJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeSwgVGh1bmtEaXNwYXRjaCwgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmltcG9ydCB7IGJ1aWxkQ2F0ZWdvcmllcyB9IGZyb20gJy4vYnVpbGRDYXRlZ29yaWVzJztcbmltcG9ydCB7IGJ1aWxkTmF2TW9kZWwgfSBmcm9tICcuL25hdk1vZGVsJztcbmltcG9ydCB7XG4gIGRhdGFTb3VyY2VMb2FkZWQsXG4gIGRhdGFTb3VyY2VNZXRhTG9hZGVkLFxuICBkYXRhU291cmNlUGx1Z2luc0xvYWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkLFxuICBkYXRhU291cmNlc0xvYWRlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZCxcbiAgdGVzdERhdGFTb3VyY2VGYWlsZWQsXG4gIHRlc3REYXRhU291cmNlU3RhcnRpbmcsXG4gIHRlc3REYXRhU291cmNlU3VjY2VlZGVkLFxufSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2UsIGdldERhdGFTb3VyY2VNZXRhIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFTb3VyY2VUeXBlc0xvYWRlZFBheWxvYWQge1xuICBwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdO1xuICBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbml0RGF0YVNvdXJjZVNldHRpbmdEZXBlbmRlbmNpZXMge1xuICBsb2FkRGF0YVNvdXJjZTogdHlwZW9mIGxvYWREYXRhU291cmNlO1xuICBsb2FkRGF0YVNvdXJjZU1ldGE6IHR5cGVvZiBsb2FkRGF0YVNvdXJjZU1ldGE7XG4gIGdldERhdGFTb3VyY2U6IHR5cGVvZiBnZXREYXRhU291cmNlO1xuICBnZXREYXRhU291cmNlTWV0YTogdHlwZW9mIGdldERhdGFTb3VyY2VNZXRhO1xuICBpbXBvcnREYXRhU291cmNlUGx1Z2luOiB0eXBlb2YgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyB7XG4gIGdldERhdGFzb3VyY2VTcnY6IHR5cGVvZiBnZXREYXRhU291cmNlU3J2O1xuICBnZXRCYWNrZW5kU3J2OiB0eXBlb2YgZ2V0QmFja2VuZFNydjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXREYXRhU291cmNlU2V0dGluZ3MgPSAoXG4gIHBhZ2VJZDogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyA9IHtcbiAgICBsb2FkRGF0YVNvdXJjZSxcbiAgICBsb2FkRGF0YVNvdXJjZU1ldGEsXG4gICAgZ2V0RGF0YVNvdXJjZSxcbiAgICBnZXREYXRhU291cmNlTWV0YSxcbiAgICBpbXBvcnREYXRhU291cmNlUGx1Z2luLFxuICB9XG4pOiBUaHVua1Jlc3VsdDx2b2lkPiA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgaWYgKCFwYWdlSWQpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQobmV3IEVycm9yKCdJbnZhbGlkIElEJykpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9hZGVkRGF0YVNvdXJjZSA9IGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZShwYWdlSWQpKTtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZU1ldGEobG9hZGVkRGF0YVNvdXJjZSkpO1xuXG4gICAgICAvLyBoYXZlIHdlIGFscmVhZHkgbG9hZGVkIHRoZSBwbHVnaW4gdGhlbiB3ZSBjYW4gc2tpcCB0aGUgc3RlcHMgYmVsb3c/XG4gICAgICBpZiAoZ2V0U3RhdGUoKS5kYXRhU291cmNlU2V0dGluZ3MucGx1Z2luKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIHBhZ2VJZCk7XG4gICAgICBjb25zdCBkYXRhU291cmNlTWV0YSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlTWV0YShnZXRTdGF0ZSgpLmRhdGFTb3VyY2VzLCBkYXRhU291cmNlIS50eXBlKTtcbiAgICAgIGNvbnN0IGltcG9ydGVkUGx1Z2luID0gYXdhaXQgZGVwZW5kZW5jaWVzLmltcG9ydERhdGFTb3VyY2VQbHVnaW4oZGF0YVNvdXJjZU1ldGEpO1xuXG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkKGltcG9ydGVkUGx1Z2luKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChlcnIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdERhdGFTb3VyY2UgPSAoXG4gIGRhdGFTb3VyY2VOYW1lOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogVGVzdERhdGFTb3VyY2VEZXBlbmRlbmNpZXMgPSB7XG4gICAgZ2V0RGF0YXNvdXJjZVNydixcbiAgICBnZXRCYWNrZW5kU3J2LFxuICB9XG4pOiBUaHVua1Jlc3VsdDx2b2lkPiA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgZHNBcGkgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0RGF0YXNvdXJjZVNydigpLmdldChkYXRhU291cmNlTmFtZSk7XG5cbiAgICBpZiAoIWRzQXBpLnRlc3REYXRhc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VTdGFydGluZygpKTtcblxuICAgIGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkud2l0aE5vQmFja2VuZENhY2hlKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRzQXBpLnRlc3REYXRhc291cmNlKCk7XG5cbiAgICAgICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VTdWNjZWVkZWQocmVzdWx0KSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGRldGFpbHM6IEhlYWx0aENoZWNrUmVzdWx0RGV0YWlscztcblxuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgSGVhbHRoQ2hlY2tFcnJvcikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgICAgICAgICBkZXRhaWxzID0gZXJyLmRldGFpbHM7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNGZXRjaEVycm9yKGVycikpIHtcbiAgICAgICAgICBtZXNzYWdlID0gZXJyLmRhdGEubWVzc2FnZSA/PyBgSFRUUCBlcnJvciAke2Vyci5zdGF0dXNUZXh0fWA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBtZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZUZhaWxlZCh7IG1lc3NhZ2UsIGRldGFpbHMgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvZGF0YXNvdXJjZXMnKTtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlc0xvYWRlZChyZXNwb25zZSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2UodWlkOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDxQcm9taXNlPERhdGFTb3VyY2VTZXR0aW5ncz4+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBhd2FpdCBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZCk7XG5cbiAgICBkaXNwYXRjaChkYXRhU291cmNlTG9hZGVkKGRhdGFTb3VyY2UpKTtcbiAgICByZXR1cm4gZGF0YVNvdXJjZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlTWV0YShkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBwbHVnaW5JbmZvID0gKGF3YWl0IGdldFBsdWdpblNldHRpbmdzKGRhdGFTb3VyY2UudHlwZSkpIGFzIERhdGFTb3VyY2VQbHVnaW5NZXRhO1xuICAgIGNvbnN0IHBsdWdpbiA9IGF3YWl0IGltcG9ydERhdGFTb3VyY2VQbHVnaW4ocGx1Z2luSW5mbyk7XG4gICAgY29uc3QgaXNCYWNrZW5kID0gcGx1Z2luLkRhdGFTb3VyY2VDbGFzcy5wcm90b3R5cGUgaW5zdGFuY2VvZiBEYXRhU291cmNlV2l0aEJhY2tlbmQ7XG4gICAgY29uc3QgbWV0YSA9IHtcbiAgICAgIC4uLnBsdWdpbkluZm8sXG4gICAgICBpc0JhY2tlbmQ6IHBsdWdpbkluZm8uYmFja2VuZCB8fCBpc0JhY2tlbmQsXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VNZXRhTG9hZGVkKG1ldGEpKTtcblxuICAgIHBsdWdpbi5tZXRhID0gbWV0YTtcbiAgICBkaXNwYXRjaCh1cGRhdGVOYXZJbmRleChidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2UsIHBsdWdpbikpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgZGF0YSBzb3VyY2UgYnkgdWlkIG9yIGlkLCBpZiBvbGQgaWQgZGV0ZWN0ZWQgaGFuZGxlcyByZWRpcmVjdFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCh1aWQ6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPiB7XG4gIC8vIFRyeSBmaXJzdCB3aXRoIHVpZCBhcGlcbiAgdHJ5IHtcbiAgICBjb25zdCBieVVpZCA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8RGF0YVNvdXJjZVNldHRpbmdzPih7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogYC9hcGkvZGF0YXNvdXJjZXMvdWlkLyR7dWlkfWAsXG4gICAgICAgIHBhcmFtczogYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSxcbiAgICAgICAgc2hvd0Vycm9yQWxlcnQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKGJ5VWlkLm9rKSB7XG4gICAgICByZXR1cm4gYnlVaWQuZGF0YTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gbG9va3VwIGRhdGEgc291cmNlIGJ5IHVpZCcsIGVycik7XG4gIH1cblxuICAvLyB0cnkgbG9va3VwIGJ5IG9sZCBkYiBpZFxuICBjb25zdCBpZCA9IHR5cGVvZiB1aWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQodWlkLCAxMCkgOiB1aWQ7XG4gIGlmICghTnVtYmVyLmlzTmFOKGlkKSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy8ke2lkfWAsXG4gICAgICAgIHBhcmFtczogYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSxcbiAgICAgICAgc2hvd0Vycm9yQWxlcnQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gSWYgdGhlIHVpZCBpcyBhIG51bWJlciwgdGhlbiB0aGlzIGlzIGEgcmVmcmVzaCBvbiBvbmUgb2YgdGhlIHNldHRpbmdzIHRhYnNcbiAgICAvLyBhbmQgd2UgY2FuIHJldHVybiB0aGUgcmVzcG9uc2UgZGF0YVxuICAgIGlmIChyZXNwb25zZS5vayAmJiB0eXBlb2YgdWlkID09PSAnbnVtYmVyJyAmJiByZXNwb25zZS5kYXRhLmlkID09PSB1aWQpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIC8vIE5vdCBpZGVhbCB0byBkbyBhIGZ1bGwgcGFnZSByZWxvYWQgaGVyZSBidXQgc28gdHJpY2t5IHRvIGhhbmRsZSB0aGlzXG4gICAgLy8gb3RoZXJ3aXNlIFdlIGNhbiB1cGRhdGUgdGhlIGxvY2F0aW9uIHVzaW5nIHJlYWN0IHJvdXRlciwgYnV0IG5lZWQgdG9cbiAgICAvLyBmdWxseSByZWxvYWQgdGhlIHJvdXRlIGFzIHRoZSBuYXYgbW9kZWwgcGFnZSBpbmRleCBpcyBub3QgbWF0Y2hpbmcgd2l0aFxuICAgIC8vIHRoZSB1cmwgaW4gdGhhdCBjYXNlLiBBbmQgcmVhY3Qgcm91dGVyIGhhcyBubyB3YXkgdG8gdW5tb3VudCByZW1vdW50IGFcbiAgICAvLyByb3V0ZVxuICAgIGlmIChyZXNwb25zZS5vayAmJiByZXNwb25zZS5kYXRhLmlkLnRvU3RyaW5nKCkgPT09IHVpZCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvblV0aWwuYXNzdXJlQmFzZVVybChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXNwb25zZS5kYXRhLnVpZH1gKTtcbiAgICAgIHJldHVybiB7fSBhcyBEYXRhU291cmNlU2V0dGluZ3M7IC8vIGF2b2lkcyBmbGFzaGluZyBhbiBlcnJvclxuICAgIH1cbiAgfVxuXG4gIHRocm93IEVycm9yKCdDb3VsZCBub3QgZmluZCBkYXRhIHNvdXJjZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF0YVNvdXJjZShwbHVnaW46IERhdGFTb3VyY2VQbHVnaW5NZXRhKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGF3YWl0IGRpc3BhdGNoKGxvYWREYXRhU291cmNlcygpKTtcblxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlcztcblxuICAgIGNvbnN0IG5ld0luc3RhbmNlID0ge1xuICAgICAgbmFtZTogcGx1Z2luLm5hbWUsXG4gICAgICB0eXBlOiBwbHVnaW4uaWQsXG4gICAgICBhY2Nlc3M6ICdwcm94eScsXG4gICAgICBpc0RlZmF1bHQ6IGRhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMCxcbiAgICB9O1xuXG4gICAgaWYgKG5hbWVFeGl0cyhkYXRhU291cmNlcywgbmV3SW5zdGFuY2UubmFtZSkpIHtcbiAgICAgIG5ld0luc3RhbmNlLm5hbWUgPSBmaW5kTmV3TmFtZShkYXRhU291cmNlcywgbmV3SW5zdGFuY2UubmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvZGF0YXNvdXJjZXMnLCBuZXdJbnN0YW5jZSk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgYXdhaXQgY29udGV4dFNydi5mZXRjaFVzZXJQZXJtaXNzaW9ucygpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goYC9kYXRhc291cmNlcy9lZGl0LyR7cmVzdWx0LmRhdGFzb3VyY2UudWlkfWApO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VQbHVnaW5zKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZCgpKTtcbiAgICBjb25zdCBwbHVnaW5zID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9wbHVnaW5zJywgeyBlbmFibGVkOiAxLCB0eXBlOiAnZGF0YXNvdXJjZScgfSk7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zKTtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlUGx1Z2luc0xvYWRlZCh7IHBsdWdpbnMsIGNhdGVnb3JpZXMgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YVNvdXJjZShkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL2RhdGFzb3VyY2VzLyR7ZGF0YVNvdXJjZS5pZH1gLCBkYXRhU291cmNlKTsgLy8gYnkgVUlEIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuICAgIHJldHVybiBkaXNwYXRjaChsb2FkRGF0YVNvdXJjZShkYXRhU291cmNlLnVpZCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRGF0YVNvdXJjZSgpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGdldFN0b3JlKCkuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZTtcblxuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWApO1xuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcblxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvZGF0YXNvdXJjZXMnKTtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEl0ZW1XaXRoTmFtZSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVFeGl0cyhkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gKFxuICAgIGRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFTb3VyY2UubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfSkubGVuZ3RoID4gMFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZE5ld05hbWUoZGF0YVNvdXJjZXM6IEl0ZW1XaXRoTmFtZVtdLCBuYW1lOiBzdHJpbmcpIHtcbiAgLy8gTmVlZCB0byBsb29wIHRocm91Z2ggY3VycmVudCBkYXRhIHNvdXJjZXMgdG8gbWFrZSBzdXJlXG4gIC8vIHRoZSBuYW1lIGRvZXNuJ3QgZXhpc3RcbiAgd2hpbGUgKG5hbWVFeGl0cyhkYXRhU291cmNlcywgbmFtZSkpIHtcbiAgICAvLyBJZiB0aGVyZSdzIGEgZHVwbGljYXRlIG5hbWUgdGhhdCBkb2Vzbid0IGVuZCB3aXRoICcteCdcbiAgICAvLyB3ZSBjYW4gYWRkIC0xIHRvIHRoZSBuYW1lIGFuZCBiZSBkb25lLlxuICAgIGlmICghbmFtZUhhc1N1ZmZpeChuYW1lKSkge1xuICAgICAgbmFtZSA9IGAke25hbWV9LTFgO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSdzIGEgZHVwbGljYXRlIG5hbWUgdGhhdCBlbmRzIHdpdGggJy14J1xuICAgICAgLy8gd2UgY2FuIHRyeSB0byBpbmNyZW1lbnQgdGhlIGxhc3QgZGlnaXQgdW50aWwgdGhlIG5hbWUgaXMgdW5pcXVlXG5cbiAgICAgIC8vIHJlbW92ZSB0aGUgJ3gnIHBhcnQgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgbmV3IG51bWJlclxuICAgICAgbmFtZSA9IGAke2dldE5ld05hbWUobmFtZSl9JHtpbmNyZW1lbnRMYXN0RGlnaXQoZ2V0TGFzdERpZ2l0KG5hbWUpKX1gO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBuYW1lSGFzU3VmZml4KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS5lbmRzV2l0aCgnLScsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIGdldExhc3REaWdpdChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBhcnNlSW50KG5hbWUuc2xpY2UoLTEpLCAxMCk7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudExhc3REaWdpdChkaWdpdDogbnVtYmVyKSB7XG4gIHJldHVybiBpc05hTihkaWdpdCkgPyAxIDogZGlnaXQgKyAxO1xufVxuXG5mdW5jdGlvbiBnZXROZXdOYW1lKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS5zbGljZSgwLCBuYW1lLmxlbmd0aCAtIDEpO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENhdGVnb3JpZXMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSk6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdIHtcbiAgY29uc3QgY2F0ZWdvcmllczogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10gPSBbXG4gICAgeyBpZDogJ3RzZGInLCB0aXRsZTogJ1RpbWUgc2VyaWVzIGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2xvZ2dpbmcnLCB0aXRsZTogJ0xvZ2dpbmcgJiBkb2N1bWVudCBkYXRhYmFzZXMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICd0cmFjaW5nJywgdGl0bGU6ICdEaXN0cmlidXRlZCB0cmFjaW5nJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnc3FsJywgdGl0bGU6ICdTUUwnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdjbG91ZCcsIHRpdGxlOiAnQ2xvdWQnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdlbnRlcnByaXNlJywgdGl0bGU6ICdFbnRlcnByaXNlIHBsdWdpbnMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdpb3QnLCB0aXRsZTogJ0luZHVzdHJpYWwgJiBJb1QnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdvdGhlcicsIHRpdGxlOiAnT3RoZXJzJywgcGx1Z2luczogW10gfSxcbiAgXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pO1xuXG4gIGNvbnN0IGNhdGVnb3J5SW5kZXg6IFJlY29yZDxzdHJpbmcsIERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeT4gPSB7fTtcbiAgY29uc3QgcGx1Z2luSW5kZXg6IFJlY29yZDxzdHJpbmcsIERhdGFTb3VyY2VQbHVnaW5NZXRhPiA9IHt9O1xuICBjb25zdCBlbnRlcnByaXNlUGx1Z2lucyA9IGdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucygpO1xuXG4gIC8vIGJ1aWxkIGluZGljZXNcbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgY2F0ZWdvcnlJbmRleFtjYXRlZ29yeS5pZF0gPSBjYXRlZ29yeTtcbiAgfVxuXG4gIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICBjb25zdCBlbnRlcnByaXNlUGx1Z2luID0gZW50ZXJwcmlzZVBsdWdpbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGx1Z2luLmlkKTtcbiAgICAvLyBGb3JjZSBjYXRlZ29yeSBmb3IgZW50ZXJwcmlzZSBwbHVnaW5zXG4gICAgaWYgKHBsdWdpbi5lbnRlcnByaXNlIHx8IGVudGVycHJpc2VQbHVnaW4pIHtcbiAgICAgIHBsdWdpbi5jYXRlZ29yeSA9ICdlbnRlcnByaXNlJztcbiAgICAgIHBsdWdpbi51bmxpY2Vuc2VkID0gIWZlYXR1cmVFbmFibGVkKCdlbnRlcnByaXNlLnBsdWdpbnMnKTtcbiAgICAgIHBsdWdpbi5pbmZvLmxpbmtzID0gZW50ZXJwcmlzZVBsdWdpbj8uaW5mbz8ubGlua3MgfHwgcGx1Z2luLmluZm8ubGlua3M7XG4gICAgfVxuXG4gICAgLy8gRml4IGxpbmsgbmFtZVxuICAgIGlmIChwbHVnaW4uaW5mby5saW5rcykge1xuICAgICAgZm9yIChjb25zdCBsaW5rIG9mIHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICAgIGxpbmsubmFtZSA9ICdMZWFybiBtb3JlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGx1Z2luLmNhdGVnb3J5KSB8fCBjYXRlZ29yeUluZGV4WydvdGhlciddO1xuICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIC8vIGFkZCB0byBwbHVnaW4gaW5kZXhcbiAgICBwbHVnaW5JbmRleFtwbHVnaW4uaWRdID0gcGx1Z2luO1xuICB9XG5cbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgLy8gYWRkIHBoYW50b20gcGx1Z2luXG4gICAgaWYgKGNhdGVnb3J5LmlkID09PSAnY2xvdWQnKSB7XG4gICAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2goZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbigpKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5zXG4gICAgaWYgKGNhdGVnb3J5LmlkID09PSAnZW50ZXJwcmlzZScpIHtcbiAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIGVudGVycHJpc2VQbHVnaW5zKSB7XG4gICAgICAgIGlmICghcGx1Z2luSW5kZXhbcGx1Z2luLmlkXSkge1xuICAgICAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc29ydFBsdWdpbnMoY2F0ZWdvcnkucGx1Z2lucyk7XG4gIH1cblxuICAvLyBPbmx5IHNob3cgY2F0ZWdvcmllcyB3aXRoIHBsdWdpbnNcbiAgcmV0dXJuIGNhdGVnb3JpZXMuZmlsdGVyKChjKSA9PiBjLnBsdWdpbnMubGVuZ3RoID4gMCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRQbHVnaW5zKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10pIHtcbiAgY29uc3Qgc29ydGluZ1J1bGVzOiB7IFtpZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgcHJvbWV0aGV1czogMTAwLFxuICAgIGdyYXBoaXRlOiA5NSxcbiAgICBsb2tpOiA5MCxcbiAgICBteXNxbDogODAsXG4gICAgamFlZ2VyOiAxMDAsXG4gICAgcG9zdGdyZXM6IDc5LFxuICAgIGdjbG91ZDogLTEsXG4gIH07XG5cbiAgcGx1Z2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYVNvcnQgPSBzb3J0aW5nUnVsZXNbYS5pZF0gfHwgMDtcbiAgICBjb25zdCBiU29ydCA9IHNvcnRpbmdSdWxlc1tiLmlkXSB8fCAwO1xuICAgIGlmIChhU29ydCA+IGJTb3J0KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhU29ydCA8IGJTb3J0KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10ge1xuICByZXR1cm4gW1xuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTcGx1bmsnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgU3BsdW5rIGxvZ3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NwbHVua19sb2dvXzEyOC5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW9yYWNsZS1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdPcmFjbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgT3JhY2xlIFNRTCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvb3JhY2xlLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZHluYXRyYWNlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0R5bmF0cmFjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBEeW5hdHJhY2UgZGF0YScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZHluYXRyYWNlLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2VydmljZW5vdy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2VydmljZU5vdyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NlcnZpY2VOb3cnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NlcnZpY2Vub3cuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1kYXRhZG9nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdEYXRhRG9nIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnRGF0YURvZycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZGF0YWRvZy5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW5ld3JlbGljLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdOZXcgUmVsaWMgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdOZXcgUmVsaWMnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL25ld3JlbGljLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbW9uZ29kYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTW9uZ29EQiBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ01vbmdvREInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL21vbmdvZGIuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zbm93Zmxha2UtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Nub3dmbGFrZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1Nub3dmbGFrZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc25vd2ZsYWtlLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtd2F2ZWZyb250LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdXYXZlZnJvbnQgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdXYXZlZnJvbnQnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3dhdmVmcm9udC5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdkbG9wZXM3LWFwcGR5bmFtaWNzLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBEeW5hbWljcyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ0FwcER5bmFtaWNzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9hcHBkeW5hbWljcy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNhcGhhbmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NBUCBIQU5Bwq4gaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTQVAgSEFOQcKuJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zYXBfaGFuYS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWhvbmV5Y29tYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9uZXljb21iIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdIb25leWNvbWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2hvbmV5Y29tYi5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNhbGVzZm9yY2UtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NhbGVzZm9yY2UgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NhbGVzZm9yY2UnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhbGVzZm9yY2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1qaXJhLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdKaXJhIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdKaXJhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9qaXJhX2xvZ28ucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1naXRsYWItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0dpdExhYiBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnR2l0TGFiJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9naXRsYWIuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zcGx1bmstbW9uaXRvcmluZy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2lnbmFsRnggaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuayBJbmZyYXN0cnVjdHVyZSBNb25pdG9yaW5nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zaWduYWxmeC1sb2dvLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtYXp1cmVkZXZvcHMtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0F6dXJlIERldm9wcyBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdBenVyZSBEZXZvcHMnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2F6dXJlLWRldm9wcy5wbmcnLFxuICAgIH0pLFxuICBdO1xufVxuXG5mdW5jdGlvbiBnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogJ2djbG91ZCcsXG4gICAgbmFtZTogJ0dyYWZhbmEgQ2xvdWQnLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0hvc3RlZCBHcmFwaGl0ZSwgUHJvbWV0aGV1cywgYW5kIExva2knLFxuICAgICAgbG9nb3M6IHsgc21hbGw6ICdwdWJsaWMvaW1nL2dyYWZhbmFfaWNvbi5zdmcnLCBsYXJnZTogJ2FzZCcgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ3JhZmFuYS5jb20vcHJvZHVjdHMvY2xvdWQvJyxcbiAgICAgICAgICBuYW1lOiAnTGVhcm4gbW9yZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuXG5pbnRlcmZhY2UgR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltZ1VybDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQaGFudG9tUGx1Z2luKG9wdGlvbnM6IEdldFBoYW50b21QbHVnaW5PcHRpb25zKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiBvcHRpb25zLmlkLFxuICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBsb2dvczogeyBzbWFsbDogb3B0aW9ucy5pbWdVcmwsIGxhcmdlOiBvcHRpb25zLmltZ1VybCB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBjb25maWcucGx1Z2luQ2F0YWxvZ1VSTCArIG9wdGlvbnMuaWQsXG4gICAgICAgICAgbmFtZTogJ0luc3RhbGwgbm93JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlU2V0dGluZ3MsIFBsdWdpblR5cGUsIFBsdWdpbkluY2x1ZGUsIE5hdk1vZGVsLCBOYXZNb2RlbEl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBQcm9CYWRnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVXBncmFkZS9Qcm9CYWRnZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgaGlnaGxpZ2h0VHJpYWwgfSBmcm9tICcuLi8uLi9hZG1pbi91dGlscyc7XG5pbXBvcnQgeyBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJy4uL3NldHRpbmdzL1BsdWdpblNldHRpbmdzJztcblxuY29uc3QgbG9hZGluZ0RTVHlwZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzLCBwbHVnaW46IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luKTogTmF2TW9kZWxJdGVtIHtcbiAgY29uc3QgcGx1Z2luTWV0YSA9IHBsdWdpbi5tZXRhO1xuICBjb25zdCBoaWdobGlnaHRzRW5hYmxlZCA9IGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiAgY29uc3QgbmF2TW9kZWw6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBpbWc6IHBsdWdpbk1ldGEuaW5mby5sb2dvcy5sYXJnZSxcbiAgICBpZDogJ2RhdGFzb3VyY2UtJyArIGRhdGFTb3VyY2UudWlkLFxuICAgIHN1YlRpdGxlOiBgVHlwZTogJHtwbHVnaW5NZXRhLm5hbWV9YCxcbiAgICB1cmw6ICcnLFxuICAgIHRleHQ6IGRhdGFTb3VyY2UubmFtZSxcbiAgICBicmVhZGNydW1iczogW3sgdGl0bGU6ICdEYXRhIFNvdXJjZXMnLCB1cmw6ICdkYXRhc291cmNlcycgfV0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaWNvbjogJ3NsaWRlcnMtdi1hbHQnLFxuICAgICAgICBpZDogYGRhdGFzb3VyY2Utc2V0dGluZ3MtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgICB0ZXh0OiAnU2V0dGluZ3MnLFxuICAgICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2AsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgaWYgKHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgIGZvciAoY29uc3QgcGFnZSBvZiBwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgdGV4dDogcGFnZS50aXRsZSxcbiAgICAgICAgaWNvbjogcGFnZS5pY29uLFxuICAgICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9Lz9wYWdlPSR7cGFnZS5pZH1gLFxuICAgICAgICBpZDogYGRhdGFzb3VyY2UtcGFnZS0ke3BhZ2UuaWR9YCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwbHVnaW5NZXRhLmluY2x1ZGVzICYmIGhhc0Rhc2hib2FyZHMocGx1Z2luTWV0YS5pbmNsdWRlcykgJiYgY29udGV4dFNydi5oYXNSb2xlKCdBZG1pbicpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGljb246ICdhcHBzJyxcbiAgICAgIGlkOiBgZGF0YXNvdXJjZS1kYXNoYm9hcmRzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgIHRleHQ6ICdEYXNoYm9hcmRzJyxcbiAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vZGFzaGJvYXJkc2AsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBpc0xvYWRpbmdOYXYgPSBkYXRhU291cmNlLnR5cGUgPT09IGxvYWRpbmdEU1R5cGU7XG5cbiAgY29uc3QgcGVybWlzc2lvbnNFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLXBlcm1pc3Npb25zLWJhZGdlJztcbiAgY29uc3QgZHNQZXJtaXNzaW9uczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2xvY2snLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1wZXJtaXNzaW9ucy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ1Blcm1pc3Npb25zJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L3Blcm1pc3Npb25zYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgZHNQZXJtaXNzaW9ucy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnZHNwZXJtaXNzaW9ucycpKSB7XG4gICAgaWYgKGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkKSkge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goZHNQZXJtaXNzaW9ucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5kc1Blcm1pc3Npb25zLFxuICAgICAgdXJsOiBkc1Blcm1pc3Npb25zLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFuYWx5dGljc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtaW5zaWdodHMtYmFkZ2UnO1xuICBjb25zdCBhbmFseXRpY3M6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdpbmZvLWNpcmNsZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWluc2lnaHRzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnSW5zaWdodHMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vaW5zaWdodHNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBhbmFseXRpY3MudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdhbmFseXRpY3MnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGFuYWx5dGljcyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmFuYWx5dGljcyxcbiAgICAgIHVybDogYW5hbHl0aWNzLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjYWNoaW5nRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1xdWVyeS1jYWNoaW5nLWJhZGdlJztcblxuICBjb25zdCBjYWNoaW5nOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnZGF0YWJhc2UnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1jYWNoZS0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0NhY2hlJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2NhY2hlYCxcbiAgICBoaWRlRnJvbVRhYnM6ICFwbHVnaW5NZXRhLmlzQmFja2VuZCB8fCAhY29uZmlnLmNhY2hpbmcuZW5hYmxlZCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgY2FjaGluZy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogY2FjaGluZ0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdjYWNoaW5nJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChjYWNoaW5nKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uY2FjaGluZyxcbiAgICAgIHVybDogY2FjaGluZy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogY2FjaGluZ0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBuYXZNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFTb3VyY2VOYXYobWFpbjogTmF2TW9kZWxJdGVtLCBwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBsZXQgbm9kZTogTmF2TW9kZWxJdGVtID0geyB0ZXh0OiAnJyB9O1xuXG4gIC8vIGZpbmQgYWN0aXZlIHBhZ2VcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBtYWluLmNoaWxkcmVuISkge1xuICAgIGlmIChjaGlsZC5pZCEuaW5kZXhPZihwYWdlTmFtZSkgPiAwKSB7XG4gICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgbm9kZSA9IGNoaWxkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYWluOiBtYWluLFxuICAgIG5vZGU6IG5vZGUhLFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFTb3VyY2VMb2FkaW5nTmF2KHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGNvbnN0IG1haW4gPSBidWlsZE5hdk1vZGVsKFxuICAgIHtcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBiYXNpY0F1dGg6IGZhbHNlLFxuICAgICAgYmFzaWNBdXRoVXNlcjogJycsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgZGF0YWJhc2U6ICcnLFxuICAgICAgaWQ6IDEsXG4gICAgICB1aWQ6ICd4JyxcbiAgICAgIGlzRGVmYXVsdDogZmFsc2UsXG4gICAgICBqc29uRGF0YTogeyBhdXRoVHlwZTogJ2NyZWRlbnRpYWxzJywgZGVmYXVsdFJlZ2lvbjogJ2V1LXdlc3QtMicgfSxcbiAgICAgIG5hbWU6ICdMb2FkaW5nJyxcbiAgICAgIG9yZ0lkOiAxLFxuICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgdHlwZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVOYW1lOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZUxvZ29Vcmw6ICdwdWJsaWMvaW1nL2ljbi1kYXRhc291cmNlLnN2ZycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgdXNlcjogJycsXG4gICAgICBzZWN1cmVKc29uRmllbGRzOiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgIGxpbmtzOiBbeyBuYW1lOiAnJywgdXJsOiAnJyB9XSxcbiAgICAgICAgICBsb2dvczoge1xuICAgICAgICAgICAgbGFyZ2U6ICcnLFxuICAgICAgICAgICAgc21hbGw6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgICAgIHVwZGF0ZWQ6ICcnLFxuICAgICAgICAgIHZlcnNpb246ICcnLFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlczogW10sXG4gICAgICAgIG1vZHVsZTogJycsXG4gICAgICAgIGJhc2VVcmw6ICcnLFxuICAgICAgfSxcbiAgICB9IGFzIGFueVxuICApO1xuXG4gIHJldHVybiBnZXREYXRhU291cmNlTmF2KG1haW4sIHBhZ2VOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzRGFzaGJvYXJkcyhpbmNsdWRlczogUGx1Z2luSW5jbHVkZVtdKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgaW5jbHVkZXMuZmluZCgoaW5jbHVkZSkgPT4ge1xuICAgICAgcmV0dXJuIGluY2x1ZGUudHlwZSA9PT0gJ2Rhc2hib2FyZCc7XG4gICAgfSkgIT09IHVuZGVmaW5lZFxuICApO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgVXJsUXVlcnlWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlc1N0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0YXNvdXJjZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5kYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncykgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KGRhdGFTb3VyY2UubmFtZSkgfHwgcmVnZXgudGVzdChkYXRhU291cmNlLmRhdGFiYXNlKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UudHlwZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VQbHVnaW5zID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5kYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5wbHVnaW5zLmZpbHRlcigodHlwZTogRGF0YVNvdXJjZVBsdWdpbk1ldGEpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh0eXBlLm5hbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlLCBkYXRhU291cmNlSWQ6IFVybFF1ZXJ5VmFsdWUpOiBEYXRhU291cmNlU2V0dGluZ3MgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZS51aWQgPT09IGRhdGFTb3VyY2VJZCkge1xuICAgIHJldHVybiBzdGF0ZS5kYXRhU291cmNlO1xuICB9XG4gIHJldHVybiB7fSBhcyBEYXRhU291cmNlU2V0dGluZ3M7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZU1ldGEgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIHR5cGU6IHN0cmluZyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhID0+IHtcbiAgaWYgKHN0YXRlLmRhdGFTb3VyY2VNZXRhLmlkID09PSB0eXBlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VNZXRhO1xuICB9XG5cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VQbHVnaW5NZXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUubGF5b3V0TW9kZTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc0NvdW50ID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0NvdW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkxpbmtCdXR0b24iLCJGaWx0ZXJJbnB1dCIsIlBhZ2VBY3Rpb25CYXIiLCJyZW5kZXIiLCJzZWFyY2hRdWVyeSIsImxpbmtCdXR0b24iLCJzZXRTZWFyY2hRdWVyeSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicHJvcHMiLCJsaW5rUHJvcHMiLCJocmVmIiwiZGlzYWJsZWQiLCJ0aXRsZSIsImNvbmZpZyIsImlzVHJpYWwiLCJleHBpcnkiLCJsaWNlbnNlSW5mbyIsInRyaWFsRXhwaXJ5IiwiaGlnaGxpZ2h0VHJpYWwiLCJmZWF0dXJlVG9nZ2xlcyIsImZlYXR1cmVIaWdobGlnaHRzIiwiY3NzIiwiQ2FyZCIsIlRhZyIsInVzZVN0eWxlcyIsIkRhdGFTb3VyY2VzTGlzdCIsImRhdGFTb3VyY2VzIiwibGF5b3V0TW9kZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImxpc3QiLCJtYXAiLCJkYXRhU291cmNlIiwidWlkIiwibmFtZSIsInR5cGVMb2dvVXJsIiwibG9nbyIsInR5cGVOYW1lIiwidXJsIiwiaXNEZWZhdWx0IiwiaWQiLCJsaXN0U3R5bGUiLCJkaXNwbGF5Iiwib2JqZWN0Rml0IiwiY29ubmVjdCIsIkVtcHR5TGlzdENUQSIsIlBhZ2UiLCJjb250ZXh0U3J2IiwiZ2V0TmF2TW9kZWwiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwibG9hZERhdGFTb3VyY2VzIiwic2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwic2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSIsImdldERhdGFTb3VyY2VzIiwiZ2V0RGF0YVNvdXJjZXNDb3VudCIsImdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSIsImdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJkYXRhU291cmNlc0NvdW50IiwiaGFzRmV0Y2hlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsImVtcHR5TGlzdE1vZGVsIiwiYnV0dG9uSWNvbiIsImJ1dHRvbkxpbmsiLCJidXR0b25UaXRsZSIsInByb1RpcCIsInByb1RpcExpbmsiLCJwcm9UaXBMaW5rVGl0bGUiLCJwcm9UaXBUYXJnZXQiLCJEYXRhU291cmNlc0xpc3RQYWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjYW5DcmVhdGVEYXRhU291cmNlIiwiaGFzUGVybWlzc2lvbiIsIkRhdGFTb3VyY2VzQ3JlYXRlIiwiZW1wdHlMaXN0IiwiYnV0dG9uRGlzYWJsZWQiLCJxdWVyeSIsImxhc3RWYWx1ZUZyb20iLCJsb2NhdGlvblV0aWwiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJIZWFsdGhDaGVja0Vycm9yIiwiaXNGZXRjaEVycm9yIiwibG9jYXRpb25TZXJ2aWNlIiwidXBkYXRlTmF2SW5kZXgiLCJnZXRCYWNrZW5kU3J2IiwiYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0iLCJnZXREYXRhc291cmNlU3J2IiwiZ2V0UGx1Z2luU2V0dGluZ3MiLCJpbXBvcnREYXRhU291cmNlUGx1Z2luIiwiYnVpbGRDYXRlZ29yaWVzIiwiYnVpbGROYXZNb2RlbCIsImRhdGFTb3VyY2VMb2FkZWQiLCJkYXRhU291cmNlTWV0YUxvYWRlZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkIiwiZGF0YVNvdXJjZXNMb2FkZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZCIsInRlc3REYXRhU291cmNlRmFpbGVkIiwidGVzdERhdGFTb3VyY2VTdGFydGluZyIsInRlc3REYXRhU291cmNlU3VjY2VlZGVkIiwiZ2V0RGF0YVNvdXJjZSIsImdldERhdGFTb3VyY2VNZXRhIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5ncyIsInBhZ2VJZCIsImRlcGVuZGVuY2llcyIsImxvYWREYXRhU291cmNlIiwibG9hZERhdGFTb3VyY2VNZXRhIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIkVycm9yIiwibG9hZGVkRGF0YVNvdXJjZSIsImRhdGFTb3VyY2VTZXR0aW5ncyIsInBsdWdpbiIsImRhdGFTb3VyY2VNZXRhIiwidHlwZSIsImltcG9ydGVkUGx1Z2luIiwiZXJyIiwidGVzdERhdGFTb3VyY2UiLCJkYXRhU291cmNlTmFtZSIsImRzQXBpIiwiZ2V0IiwidGVzdERhdGFzb3VyY2UiLCJ3aXRoTm9CYWNrZW5kQ2FjaGUiLCJyZXN1bHQiLCJtZXNzYWdlIiwiZGV0YWlscyIsImRhdGEiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2UiLCJnZXREYXRhU291cmNlVXNpbmdVaWRPcklkIiwicGx1Z2luSW5mbyIsImlzQmFja2VuZCIsIkRhdGFTb3VyY2VDbGFzcyIsInByb3RvdHlwZSIsIm1ldGEiLCJiYWNrZW5kIiwiYnlVaWQiLCJmZXRjaCIsIm1ldGhvZCIsInBhcmFtcyIsInNob3dFcnJvckFsZXJ0Iiwib2siLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsInRvU3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJhc3N1cmVCYXNlVXJsIiwiYWRkRGF0YVNvdXJjZSIsImdldFN0b3JlIiwibmV3SW5zdGFuY2UiLCJhY2Nlc3MiLCJsZW5ndGgiLCJuYW1lRXhpdHMiLCJmaW5kTmV3TmFtZSIsInBvc3QiLCJyZWxvYWQiLCJmZXRjaFVzZXJQZXJtaXNzaW9ucyIsInB1c2giLCJkYXRhc291cmNlIiwibG9hZERhdGFTb3VyY2VQbHVnaW5zIiwicGx1Z2lucyIsImVuYWJsZWQiLCJjYXRlZ29yaWVzIiwidXBkYXRlRGF0YVNvdXJjZSIsInB1dCIsImRlbGV0ZURhdGFTb3VyY2UiLCJkZWxldGUiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsIm5hbWVIYXNTdWZmaXgiLCJnZXROZXdOYW1lIiwiaW5jcmVtZW50TGFzdERpZ2l0IiwiZ2V0TGFzdERpZ2l0IiwiZW5kc1dpdGgiLCJzbGljZSIsImRpZ2l0IiwiUGx1Z2luVHlwZSIsImZlYXR1cmVFbmFibGVkIiwiaXRlbSIsImNhdGVnb3J5SW5kZXgiLCJwbHVnaW5JbmRleCIsImVudGVycHJpc2VQbHVnaW5zIiwiZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zIiwiY2F0ZWdvcnkiLCJlbnRlcnByaXNlUGx1Z2luIiwiZmluZCIsImVudGVycHJpc2UiLCJ1bmxpY2Vuc2VkIiwiaW5mbyIsImxpbmtzIiwibGluayIsImdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4iLCJzb3J0UGx1Z2lucyIsImMiLCJzb3J0aW5nUnVsZXMiLCJwcm9tZXRoZXVzIiwiZ3JhcGhpdGUiLCJsb2tpIiwibXlzcWwiLCJqYWVnZXIiLCJwb3N0Z3JlcyIsImdjbG91ZCIsInNvcnQiLCJhIiwiYiIsImFTb3J0IiwiYlNvcnQiLCJnZXRQaGFudG9tUGx1Z2luIiwiZGVzY3JpcHRpb24iLCJpbWdVcmwiLCJtb2R1bGUiLCJiYXNlVXJsIiwibG9nb3MiLCJzbWFsbCIsImxhcmdlIiwiYXV0aG9yIiwic2NyZWVuc2hvdHMiLCJ1cGRhdGVkIiwidmVyc2lvbiIsIm9wdGlvbnMiLCJwbHVnaW5DYXRhbG9nVVJMIiwiUHJvQmFkZ2UiLCJsb2FkaW5nRFNUeXBlIiwicGx1Z2luTWV0YSIsImhpZ2hsaWdodHNFbmFibGVkIiwiaW1nIiwic3ViVGl0bGUiLCJ0ZXh0IiwiYnJlYWRjcnVtYnMiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImljb24iLCJjb25maWdQYWdlcyIsInBhZ2UiLCJpbmNsdWRlcyIsImhhc0Rhc2hib2FyZHMiLCJoYXNSb2xlIiwiaXNMb2FkaW5nTmF2IiwicGVybWlzc2lvbnNFeHBlcmltZW50SWQiLCJkc1Blcm1pc3Npb25zIiwidGFiU3VmZml4IiwiZXhwZXJpbWVudElkIiwiZXZlbnRWYXJpYW50IiwiRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQiLCJhbmFseXRpY3NFeHBlcmltZW50SWQiLCJhbmFseXRpY3MiLCJjYWNoaW5nRXhwZXJpbWVudElkIiwiY2FjaGluZyIsImhpZGVGcm9tVGFicyIsImdldERhdGFTb3VyY2VOYXYiLCJtYWluIiwicGFnZU5hbWUiLCJub2RlIiwiY2hpbGQiLCJpbmRleE9mIiwiZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYiLCJiYXNpY0F1dGgiLCJiYXNpY0F1dGhVc2VyIiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YWJhc2UiLCJqc29uRGF0YSIsImF1dGhUeXBlIiwiZGVmYXVsdFJlZ2lvbiIsIm9yZ0lkIiwicmVhZE9ubHkiLCJ1c2VyIiwic2VjdXJlSnNvbkZpZWxkcyIsImluY2x1ZGUiLCJ1bmRlZmluZWQiLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJnZXREYXRhU291cmNlUGx1Z2lucyIsImRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJkYXRhU291cmNlSWQiXSwic291cmNlUm9vdCI6IiJ9