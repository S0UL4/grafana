"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewDataSourcePage"],{

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

/***/ "./public/app/features/datasources/NewDataSourcePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getNavModel": () => (/* binding */ getNavModel)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _plugins_components_PluginsErrorsInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/components/PluginsErrorsInfo.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2, _LinkButton, _PluginsErrorsInfo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function mapStateToProps(state) {
  return {
    navModel: getNavModel(),
    plugins: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_9__.getDataSourcePlugins)(state.dataSources),
    searchQuery: state.dataSources.dataSourceTypeSearchQuery,
    categories: state.dataSources.categories,
    isLoading: state.dataSources.isLoadingDataSources
  };
}

const mapDispatchToProps = {
  addDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_7__.addDataSource,
  loadDataSourcePlugins: _state_actions__WEBPACK_IMPORTED_MODULE_7__.loadDataSourcePlugins,
  setDataSourceTypeSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_8__.setDataSourceTypeSearchQuery
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);

class NewDataSourcePage extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onDataSourceTypeClicked", plugin => {
      this.props.addDataSource(plugin);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setDataSourceTypeSearchQuery(value);
    });

    _defineProperty(this, "onLearnMoreClick", evt => {
      evt.stopPropagation();
    });
  }

  componentDidMount() {
    this.props.loadDataSourcePlugins();
  }

  renderPlugins(plugins, id) {
    if (!plugins || !plugins.length) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.List, {
      items: plugins,
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
          > li {
            margin-bottom: 2px;
          }
        `,
      getItemKey: item => item.id.toString(),
      renderItem: item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DataSourceTypeCard, {
        plugin: item,
        onClick: () => this.onDataSourceTypeClicked(item),
        onLearnMoreClick: this.onLearnMoreClick
      }),
      "aria-labelledby": id
    });
  }

  renderCategories() {
    const {
      categories
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "add-data-source-category",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "add-data-source-category__header",
          id: category.id,
          children: category.title
        }), this.renderPlugins(category.plugins, category.id)]
      }, category.id)), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "add-data-source-more",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
          variant: "secondary",
          href: "https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",
          target: "_blank",
          rel: "noopener",
          children: "Find more data source plugins on grafana.com"
        })
      }))]
    });
  }

  render() {
    const {
      navModel,
      isLoading,
      searchQuery,
      plugins
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
        isLoading: isLoading,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FilterInput, {
            value: searchQuery,
            onChange: this.onSearchQueryChange,
            placeholder: "Filter by name or type"
          }), _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
            href: "datasources",
            fill: "outline",
            variant: "secondary",
            icon: "arrow-left",
            children: "Cancel"
          }))]
        }), !searchQuery && (_PluginsErrorsInfo || (_PluginsErrorsInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_plugins_components_PluginsErrorsInfo__WEBPACK_IMPORTED_MODULE_6__.PluginsErrorsInfo, {}))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [searchQuery && this.renderPlugins(plugins), !searchQuery && this.renderCategories()]
        })]
      })
    });
  }

}

const DataSourceTypeCard = props => {
  var _plugin$info, _plugin$info$links;

  const {
    plugin,
    onLearnMoreClick
  } = props;
  const isPhantom = plugin.module === 'phantom';
  const onClick = !isPhantom && !plugin.unlicensed ? props.onClick : () => {}; // find first plugin info link

  const learnMoreLink = ((_plugin$info = plugin.info) === null || _plugin$info === void 0 ? void 0 : (_plugin$info$links = _plugin$info.links) === null || _plugin$info$links === void 0 ? void 0 : _plugin$info$links.length) > 0 ? plugin.info.links[0] : null;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.card, 'card-parent'),
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Heading, {
      className: styles.heading,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.AddDataSource.dataSourcePluginsV2(plugin.name),
      children: plugin.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Figure, {
      align: "center",
      className: styles.figure,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
        className: styles.logo,
        src: plugin.info.logos.small,
        alt: ""
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Description, {
      className: styles.description,
      children: plugin.info.description
    }), !isPhantom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {
      className: styles.meta,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureBadge, {
        status: plugin.signature
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Actions, {
      className: styles.actions,
      children: learnMoreLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
        variant: "secondary",
        href: `${learnMoreLink.url}?utm_source=grafana_add_ds`,
        target: "_blank",
        rel: "noopener",
        onClick: onLearnMoreClick,
        icon: "external-link-alt",
        "aria-label": `${plugin.name}, learn more.`,
        children: learnMoreLink.name
      })
    })]
  });
};

function getStyles(theme) {
  return {
    heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: theme.v1.typography.heading.h5,
      fontWeight: 'inherit'
    }),
    figure: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: 'inherit',
      marginRight: '0px',
      '> img': {
        width: theme.spacing(7)
      }
    }),
    meta: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginTop: '6px',
      position: 'relative'
    }),
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      margin: '0px',
      fontSize: theme.typography.size.sm
    }),
    actions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      position: 'relative',
      alignSelf: 'center',
      marginTop: '0px',
      opacity: 0,
      '.card-parent:hover &, .card-parent:focus-within &': {
        opacity: 1
      }
    }),
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      gridTemplateAreas: `
      "Figure   Heading   Actions"
      "Figure Description Actions"
      "Figure    Meta     Actions"
      "Figure     -       Actions"`
    }),
    logo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginRight: theme.v1.spacing.lg,
      marginLeft: theme.v1.spacing.sm,
      width: theme.spacing(7),
      maxHeight: theme.spacing(7)
    })
  };
}

function getNavModel() {
  const main = {
    icon: 'database',
    id: 'datasource-new',
    text: 'Add data source',
    href: 'datasources/new',
    subTitle: 'Choose a data source type'
  };
  return {
    main: main,
    node: main
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewDataSourcePage));

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

/***/ "./public/app/features/plugins/components/PluginsErrorsInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginsErrorsInfo": () => (/* binding */ PluginsErrorsInfo)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _admin_state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;









function PluginsErrorsInfo() {
  const errors = (0,_admin_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useGetErrors)();
  const {
    isLoading
  } = (0,_admin_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useFetchStatus)();
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme)();

  if (isLoading || errors.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InfoBox, {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.PluginsList.signatureErrorNotice,
    severity: "warning",
    urlTitle: "Read more about plugin signing",
    url: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."
      })), "The following plugins are disabled and not shown in the list below:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.List, {
        items: errors,
        className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
            list-style-type: circle;
          `,
        renderItem: error => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                margin-top: ${theme.spacing.sm};
              `,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
            spacing: "sm",
            justify: "flex-start",
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
              children: error.pluginId
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureBadge, {
              status: mapPluginErrorCodeToSignatureStatus(error.errorCode),
              className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                    margin-top: 0;
                  `
            })]
          })
        })
      })]
    })
  });
}

function mapPluginErrorCodeToSignatureStatus(code) {
  switch (code) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginErrorCode.invalidSignature:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.invalid;

    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginErrorCode.missingSignature:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.missing;

    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginErrorCode.modifiedSignature:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.modified;

    default:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.missing;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3RGF0YVNvdXJjZVBhZ2UuNGMxNDJjZWNkZDkxZDA4Njc1NTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQyxPQUFULEdBQW1CO0VBQUE7O0VBQ3hCLE1BQU1DLE1BQU0sMEJBQUdGLG9FQUFILHdEQUFHLG9CQUFvQkksV0FBbkM7RUFDQSxPQUFPLENBQUMsRUFBRUYsTUFBTSxJQUFJQSxNQUFNLEdBQUcsQ0FBckIsQ0FBUjtBQUNEO0FBRU0sTUFBTUcsY0FBYyxHQUFHLE1BQU1KLE9BQU8sTUFBTUQseUZBQTFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFFQSxTQUFTMEIsZUFBVCxDQUF5QkMsS0FBekIsRUFBNEM7RUFDMUMsT0FBTztJQUNMQyxRQUFRLEVBQUVDLFdBQVcsRUFEaEI7SUFFTEMsT0FBTyxFQUFFTCxzRUFBb0IsQ0FBQ0UsS0FBSyxDQUFDSSxXQUFQLENBRnhCO0lBR0xDLFdBQVcsRUFBRUwsS0FBSyxDQUFDSSxXQUFOLENBQWtCRSx5QkFIMUI7SUFJTEMsVUFBVSxFQUFFUCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JHLFVBSnpCO0lBS0xDLFNBQVMsRUFBRVIsS0FBSyxDQUFDSSxXQUFOLENBQWtCSztFQUx4QixDQUFQO0FBT0Q7O0FBRUQsTUFBTUMsa0JBQWtCLEdBQUc7RUFDekJmLGFBRHlCO0VBRXpCQyxxQkFGeUI7RUFHekJDLDRCQUE0QkEsMkVBQUFBO0FBSEgsQ0FBM0I7QUFNQSxNQUFNYyxTQUFTLEdBQUcxQixvREFBTyxDQUFDYyxlQUFELEVBQWtCVyxrQkFBbEIsQ0FBekI7O0FBSUEsTUFBTUUsaUJBQU4sU0FBZ0M1QixnREFBaEMsQ0FBcUQ7RUFBQTtJQUFBOztJQUFBLGlEQUt4QjZCLE1BQUQsSUFBa0M7TUFDMUQsS0FBS0MsS0FBTCxDQUFXbkIsYUFBWCxDQUF5QmtCLE1BQXpCO0lBQ0QsQ0FQa0Q7O0lBQUEsNkNBUzVCRSxLQUFELElBQW1CO01BQ3ZDLEtBQUtELEtBQUwsQ0FBV2pCLDRCQUFYLENBQXdDa0IsS0FBeEM7SUFDRCxDQVhrRDs7SUFBQSwwQ0F1Qy9CQyxHQUFELElBQTRDO01BQzdEQSxHQUFHLENBQUNDLGVBQUo7SUFDRCxDQXpDa0Q7RUFBQTs7RUFDbkRDLGlCQUFpQixHQUFHO0lBQ2xCLEtBQUtKLEtBQUwsQ0FBV2xCLHFCQUFYO0VBQ0Q7O0VBVUR1QixhQUFhLENBQUNoQixPQUFELEVBQWtDaUIsRUFBbEMsRUFBK0M7SUFDMUQsSUFBSSxDQUFDakIsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ2tCLE1BQXpCLEVBQWlDO01BQy9CLE9BQU8sSUFBUDtJQUNEOztJQUVELG9CQUNFLHdEQUFDLDZDQUFEO01BQ0UsS0FBSyxFQUFFbEIsT0FEVDtNQUVFLFNBQVMsRUFBRXRCLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFNBTk07TUFPRSxVQUFVLEVBQUd5QyxJQUFELElBQVVBLElBQUksQ0FBQ0YsRUFBTCxDQUFRRyxRQUFSLEVBUHhCO01BUUUsVUFBVSxFQUFHRCxJQUFELGlCQUNWLHdEQUFDLGtCQUFEO1FBQ0UsTUFBTSxFQUFFQSxJQURWO1FBRUUsT0FBTyxFQUFFLE1BQU0sS0FBS0UsdUJBQUwsQ0FBNkJGLElBQTdCLENBRmpCO1FBR0UsZ0JBQWdCLEVBQUUsS0FBS0c7TUFIekIsRUFUSjtNQWVFLG1CQUFpQkw7SUFmbkIsRUFERjtFQW1CRDs7RUFNRE0sZ0JBQWdCLEdBQUc7SUFDakIsTUFBTTtNQUFFbkI7SUFBRixJQUFpQixLQUFLTyxLQUE1QjtJQUVBLG9CQUNFO01BQUEsV0FDR1AsVUFBVSxDQUFDb0IsR0FBWCxDQUFnQkMsUUFBRCxpQkFDZDtRQUFLLFNBQVMsRUFBQywwQkFBZjtRQUFBLHdCQUNFO1VBQUssU0FBUyxFQUFDLGtDQUFmO1VBQWtELEVBQUUsRUFBRUEsUUFBUSxDQUFDUixFQUEvRDtVQUFBLFVBQ0dRLFFBQVEsQ0FBQ0M7UUFEWixFQURGLEVBSUcsS0FBS1YsYUFBTCxDQUFtQlMsUUFBUSxDQUFDekIsT0FBNUIsRUFBcUN5QixRQUFRLENBQUNSLEVBQTlDLENBSkg7TUFBQSxHQUErQ1EsUUFBUSxDQUFDUixFQUF4RCxDQURELENBREgsK0JBU0U7UUFBSyxTQUFTLEVBQUMsc0JBQWY7UUFBQSx1QkFDRSx3REFBQyxtREFBRDtVQUNFLE9BQU8sRUFBQyxXQURWO1VBRUUsSUFBSSxFQUFDLHVFQUZQO1VBR0UsTUFBTSxFQUFDLFFBSFQ7VUFJRSxHQUFHLEVBQUMsVUFKTjtVQUFBO1FBQUE7TUFERixFQVRGO0lBQUEsRUFERjtFQXNCRDs7RUFFRFUsTUFBTSxHQUFHO0lBQ1AsTUFBTTtNQUFFN0IsUUFBRjtNQUFZTyxTQUFaO01BQXVCSCxXQUF2QjtNQUFvQ0Y7SUFBcEMsSUFBZ0QsS0FBS1csS0FBM0Q7SUFFQSxvQkFDRSx3REFBQyxxRUFBRDtNQUFNLFFBQVEsRUFBRWIsUUFBaEI7TUFBQSx1QkFDRSx5REFBQyw4RUFBRDtRQUFlLFNBQVMsRUFBRU8sU0FBMUI7UUFBQSx3QkFDRTtVQUFLLFNBQVMsRUFBQyxpQkFBZjtVQUFBLHdCQUNFLHdEQUFDLG9EQUFEO1lBQWEsS0FBSyxFQUFFSCxXQUFwQjtZQUFpQyxRQUFRLEVBQUUsS0FBSzBCLG1CQUFoRDtZQUFxRSxXQUFXLEVBQUM7VUFBakYsRUFERixpQ0FFRTtZQUFLLFNBQVMsRUFBQztVQUFmLEVBRkYsOENBR0Usd0RBQUMsbURBQUQ7WUFBWSxJQUFJLEVBQUMsYUFBakI7WUFBK0IsSUFBSSxFQUFDLFNBQXBDO1lBQThDLE9BQU8sRUFBQyxXQUF0RDtZQUFrRSxJQUFJLEVBQUMsWUFBdkU7WUFBQTtVQUFBLEVBSEY7UUFBQSxFQURGLEVBUUcsQ0FBQzFCLFdBQUQsOERBQWdCLHdEQUFDLG9GQUFELEtBQWhCLEVBUkgsZUFTRTtVQUFBLFdBQ0dBLFdBQVcsSUFBSSxLQUFLYyxhQUFMLENBQW1CaEIsT0FBbkIsQ0FEbEIsRUFFRyxDQUFDRSxXQUFELElBQWdCLEtBQUtxQixnQkFBTCxFQUZuQjtRQUFBLEVBVEY7TUFBQTtJQURGLEVBREY7RUFrQkQ7O0FBM0ZrRDs7QUFvR3JELE1BQU1NLGtCQUErQyxHQUFJbEIsS0FBRCxJQUFXO0VBQUE7O0VBQ2pFLE1BQU07SUFBRUQsTUFBRjtJQUFVWTtFQUFWLElBQStCWCxLQUFyQztFQUNBLE1BQU1tQixTQUFTLEdBQUdwQixNQUFNLENBQUNxQixNQUFQLEtBQWtCLFNBQXBDO0VBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQUNGLFNBQUQsSUFBYyxDQUFDcEIsTUFBTSxDQUFDdUIsVUFBdEIsR0FBbUN0QixLQUFLLENBQUNxQixPQUF6QyxHQUFtRCxNQUFNLENBQUUsQ0FBM0UsQ0FIaUUsQ0FJakU7O0VBQ0EsTUFBTUUsYUFBYSxHQUFHLGlCQUFBeEIsTUFBTSxDQUFDeUIsSUFBUCxvRkFBYUMsS0FBYiwwRUFBb0JsQixNQUFwQixJQUE2QixDQUE3QixHQUFpQ1IsTUFBTSxDQUFDeUIsSUFBUCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLENBQWpDLEdBQXdELElBQTlFO0VBRUEsTUFBTUMsTUFBTSxHQUFHaEQsdURBQVUsQ0FBQ2lELFNBQUQsQ0FBekI7RUFFQSxvQkFDRSx5REFBQyw2Q0FBRDtJQUFNLFNBQVMsRUFBRTNELGdEQUFFLENBQUMwRCxNQUFNLENBQUNFLElBQVIsRUFBYyxhQUFkLENBQW5CO0lBQWlELE9BQU8sRUFBRVAsT0FBMUQ7SUFBQSx3QkFDRSx3REFBQyxxREFBRDtNQUNFLFNBQVMsRUFBRUssTUFBTSxDQUFDRyxPQURwQjtNQUVFLGNBQVl6RCxxR0FBQSxDQUFrRDJCLE1BQU0sQ0FBQ2tDLElBQXpELENBRmQ7TUFBQSxVQUlHbEMsTUFBTSxDQUFDa0M7SUFKVixFQURGLGVBT0Usd0RBQUMsb0RBQUQ7TUFBYSxLQUFLLEVBQUMsUUFBbkI7TUFBNEIsU0FBUyxFQUFFUCxNQUFNLENBQUNRLE1BQTlDO01BQUEsdUJBQ0U7UUFBSyxTQUFTLEVBQUVSLE1BQU0sQ0FBQ1MsSUFBdkI7UUFBNkIsR0FBRyxFQUFFcEMsTUFBTSxDQUFDeUIsSUFBUCxDQUFZWSxLQUFaLENBQWtCQyxLQUFwRDtRQUEyRCxHQUFHLEVBQUM7TUFBL0Q7SUFERixFQVBGLGVBVUUsd0RBQUMseURBQUQ7TUFBa0IsU0FBUyxFQUFFWCxNQUFNLENBQUNZLFdBQXBDO01BQUEsVUFBa0R2QyxNQUFNLENBQUN5QixJQUFQLENBQVljO0lBQTlELEVBVkYsRUFXRyxDQUFDbkIsU0FBRCxpQkFDQyx3REFBQyxrREFBRDtNQUFXLFNBQVMsRUFBRU8sTUFBTSxDQUFDYSxJQUE3QjtNQUFBLHVCQUNFLHdEQUFDLDZEQUFEO1FBQXNCLE1BQU0sRUFBRXhDLE1BQU0sQ0FBQ3lDO01BQXJDO0lBREYsRUFaSixlQWdCRSx3REFBQyxxREFBRDtNQUFjLFNBQVMsRUFBRWQsTUFBTSxDQUFDZSxPQUFoQztNQUFBLFVBQ0dsQixhQUFhLGlCQUNaLHdEQUFDLG1EQUFEO1FBQ0UsT0FBTyxFQUFDLFdBRFY7UUFFRSxJQUFJLEVBQUcsR0FBRUEsYUFBYSxDQUFDbUIsR0FBSSw0QkFGN0I7UUFHRSxNQUFNLEVBQUMsUUFIVDtRQUlFLEdBQUcsRUFBQyxVQUpOO1FBS0UsT0FBTyxFQUFFL0IsZ0JBTFg7UUFNRSxJQUFJLEVBQUMsbUJBTlA7UUFPRSxjQUFhLEdBQUVaLE1BQU0sQ0FBQ2tDLElBQUssZUFQN0I7UUFBQSxVQVNHVixhQUFhLENBQUNVO01BVGpCO0lBRkosRUFoQkY7RUFBQSxFQURGO0FBa0NELENBM0NEOztBQTZDQSxTQUFTTixTQUFULENBQW1CZ0IsS0FBbkIsRUFBeUM7RUFDdkMsT0FBTztJQUNMZCxPQUFPLEVBQUU5RCxpREFBRyxDQUFDO01BQ1g2RSxRQUFRLEVBQUVELEtBQUssQ0FBQ0UsRUFBTixDQUFTQyxVQUFULENBQW9CakIsT0FBcEIsQ0FBNEJrQixFQUQzQjtNQUVYQyxVQUFVLEVBQUU7SUFGRCxDQUFELENBRFA7SUFLTGQsTUFBTSxFQUFFbkUsaURBQUcsQ0FBQztNQUNWa0YsS0FBSyxFQUFFLFNBREc7TUFFVkMsV0FBVyxFQUFFLEtBRkg7TUFHVixTQUFTO1FBQ1BELEtBQUssRUFBRU4sS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZDtNQURBO0lBSEMsQ0FBRCxDQUxOO0lBWUxaLElBQUksRUFBRXhFLGlEQUFHLENBQUM7TUFDUnFGLFNBQVMsRUFBRSxLQURIO01BRVJDLFFBQVEsRUFBRTtJQUZGLENBQUQsQ0FaSjtJQWdCTGYsV0FBVyxFQUFFdkUsaURBQUcsQ0FBQztNQUNmdUYsTUFBTSxFQUFFLEtBRE87TUFFZlYsUUFBUSxFQUFFRCxLQUFLLENBQUNHLFVBQU4sQ0FBaUJTLElBQWpCLENBQXNCQztJQUZqQixDQUFELENBaEJYO0lBb0JMZixPQUFPLEVBQUUxRSxpREFBRyxDQUFDO01BQ1hzRixRQUFRLEVBQUUsVUFEQztNQUVYSSxTQUFTLEVBQUUsUUFGQTtNQUdYTCxTQUFTLEVBQUUsS0FIQTtNQUlYTSxPQUFPLEVBQUUsQ0FKRTtNQU1YLHFEQUFxRDtRQUNuREEsT0FBTyxFQUFFO01BRDBDO0lBTjFDLENBQUQsQ0FwQlA7SUE4Qkw5QixJQUFJLEVBQUU3RCxpREFBRyxDQUFDO01BQ1I0RixpQkFBaUIsRUFBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtJQUxjLENBQUQsQ0E5Qko7SUFxQ0x4QixJQUFJLEVBQUVwRSxpREFBRyxDQUFDO01BQ1JtRixXQUFXLEVBQUVQLEtBQUssQ0FBQ0UsRUFBTixDQUFTTSxPQUFULENBQWlCUyxFQUR0QjtNQUVSQyxVQUFVLEVBQUVsQixLQUFLLENBQUNFLEVBQU4sQ0FBU00sT0FBVCxDQUFpQkssRUFGckI7TUFHUlAsS0FBSyxFQUFFTixLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBSEM7TUFJUlcsU0FBUyxFQUFFbkIsS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZDtJQUpILENBQUQ7RUFyQ0osQ0FBUDtBQTRDRDs7QUFFTSxTQUFTL0QsV0FBVCxHQUFpQztFQUN0QyxNQUFNMkUsSUFBSSxHQUFHO0lBQ1hDLElBQUksRUFBRSxVQURLO0lBRVgxRCxFQUFFLEVBQUUsZ0JBRk87SUFHWDJELElBQUksRUFBRSxpQkFISztJQUlYQyxJQUFJLEVBQUUsaUJBSks7SUFLWEMsUUFBUSxFQUFFO0VBTEMsQ0FBYjtFQVFBLE9BQU87SUFDTEosSUFBSSxFQUFFQSxJQUREO0lBRUxLLElBQUksRUFBRUw7RUFGRCxDQUFQO0FBSUQ7QUFFRCxpRUFBZWxFLFNBQVMsQ0FBQ0MsaUJBQUQsQ0FBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25QQTtBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBb0JPLE1BQU1rRyxzQkFBc0IsR0FBRyxDQUNwQ0MsTUFEb0MsRUFFcENDLFlBQStDLEdBQUc7RUFDaERDLGNBRGdEO0VBRWhEQyxrQkFGZ0Q7RUFHaEROLGFBSGdEO0VBSWhEQyxpQkFKZ0Q7RUFLaERmLHNCQUFzQkEsd0ZBQUFBO0FBTDBCLENBRmQsS0FTZDtFQUN0QixPQUFPLE9BQU9xQixRQUFQLEVBQWlCQyxRQUFqQixLQUE4QjtJQUNuQyxJQUFJLENBQUNMLE1BQUwsRUFBYTtNQUNYSSxRQUFRLENBQUNaLHdFQUE0QixDQUFDLElBQUljLEtBQUosQ0FBVSxZQUFWLENBQUQsQ0FBN0IsQ0FBUjtNQUNBO0lBQ0Q7O0lBRUQsSUFBSTtNQUNGLE1BQU1DLGdCQUFnQixHQUFHLE1BQU1ILFFBQVEsQ0FBQ0gsWUFBWSxDQUFDQyxjQUFiLENBQTRCRixNQUE1QixDQUFELENBQXZDO01BQ0EsTUFBTUksUUFBUSxDQUFDSCxZQUFZLENBQUNFLGtCQUFiLENBQWdDSSxnQkFBaEMsQ0FBRCxDQUFkLENBRkUsQ0FJRjs7TUFDQSxJQUFJRixRQUFRLEdBQUdHLGtCQUFYLENBQThCMUcsTUFBbEMsRUFBMEM7UUFDeEM7TUFDRDs7TUFFRCxNQUFNMkcsVUFBVSxHQUFHUixZQUFZLENBQUNKLGFBQWIsQ0FBMkJRLFFBQVEsR0FBR2hILFdBQXRDLEVBQW1EMkcsTUFBbkQsQ0FBbkI7TUFDQSxNQUFNVSxjQUFjLEdBQUdULFlBQVksQ0FBQ0gsaUJBQWIsQ0FBK0JPLFFBQVEsR0FBR2hILFdBQTFDLEVBQXVEb0gsVUFBVSxDQUFFRSxJQUFuRSxDQUF2QjtNQUNBLE1BQU1DLGNBQWMsR0FBRyxNQUFNWCxZQUFZLENBQUNsQixzQkFBYixDQUFvQzJCLGNBQXBDLENBQTdCO01BRUFOLFFBQVEsQ0FBQ1gsMkVBQStCLENBQUNtQixjQUFELENBQWhDLENBQVI7SUFDRCxDQWRELENBY0UsT0FBT0MsR0FBUCxFQUFZO01BQ1osSUFBSUEsR0FBRyxZQUFZUCxLQUFuQixFQUEwQjtRQUN4QkYsUUFBUSxDQUFDWix3RUFBNEIsQ0FBQ3FCLEdBQUQsQ0FBN0IsQ0FBUjtNQUNEO0lBQ0Y7RUFDRixDQXpCRDtBQTBCRCxDQXBDTTtBQXNDQSxNQUFNQyxjQUFjLEdBQUcsQ0FDNUJDLGNBRDRCLEVBRTVCZCxZQUF3QyxHQUFHO0VBQ3pDcEIsZ0JBRHlDO0VBRXpDRixhQUFhQSwwRUFBQUE7QUFGNEIsQ0FGZixLQU1OO0VBQ3RCLE9BQU8sT0FBT3lCLFFBQVAsRUFBZ0NDLFFBQWhDLEtBQTZDO0lBQ2xELE1BQU1XLEtBQUssR0FBRyxNQUFNZixZQUFZLENBQUNwQixnQkFBYixHQUFnQ29DLEdBQWhDLENBQW9DRixjQUFwQyxDQUFwQjs7SUFFQSxJQUFJLENBQUNDLEtBQUssQ0FBQ0UsY0FBWCxFQUEyQjtNQUN6QjtJQUNEOztJQUVEZCxRQUFRLENBQUNULGtFQUFzQixFQUF2QixDQUFSO0lBRUFNLFlBQVksQ0FBQ3RCLGFBQWIsR0FBNkJ3QyxrQkFBN0IsQ0FBZ0QsWUFBWTtNQUMxRCxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1KLEtBQUssQ0FBQ0UsY0FBTixFQUFyQjtRQUVBZCxRQUFRLENBQUNSLG1FQUF1QixDQUFDd0IsTUFBRCxDQUF4QixDQUFSO01BQ0QsQ0FKRCxDQUlFLE9BQU9QLEdBQVAsRUFBWTtRQUNaLElBQUlRLE9BQUo7UUFDQSxJQUFJQyxPQUFKOztRQUVBLElBQUlULEdBQUcsWUFBWXRDLDhEQUFuQixFQUFxQztVQUNuQzhDLE9BQU8sR0FBR1IsR0FBRyxDQUFDUSxPQUFkO1VBQ0FDLE9BQU8sR0FBR1QsR0FBRyxDQUFDUyxPQUFkO1FBQ0QsQ0FIRCxNQUdPLElBQUk5Qyw4REFBWSxDQUFDcUMsR0FBRCxDQUFoQixFQUF1QjtVQUFBOztVQUM1QlEsT0FBTyx3QkFBR1IsR0FBRyxDQUFDVSxJQUFKLENBQVNGLE9BQVosaUVBQXdCLGNBQWFSLEdBQUcsQ0FBQ1csVUFBVyxFQUEzRDtRQUNELENBRk0sTUFFQSxJQUFJWCxHQUFHLFlBQVlQLEtBQW5CLEVBQTBCO1VBQy9CZSxPQUFPLEdBQUdSLEdBQUcsQ0FBQ1EsT0FBZDtRQUNEOztRQUVEakIsUUFBUSxDQUFDVixnRUFBb0IsQ0FBQztVQUFFMkIsT0FBRjtVQUFXQztRQUFYLENBQUQsQ0FBckIsQ0FBUjtNQUNEO0lBQ0YsQ0FwQkQ7RUFxQkQsQ0E5QkQ7QUErQkQsQ0F0Q007QUF3Q0EsU0FBU0csZUFBVCxHQUE4QztFQUNuRCxPQUFPLE1BQU9yQixRQUFQLElBQW9CO0lBQ3pCLE1BQU1zQixRQUFRLEdBQUcsTUFBTS9DLDRFQUFhLEdBQUdzQyxHQUFoQixDQUFvQixrQkFBcEIsQ0FBdkI7SUFDQWIsUUFBUSxDQUFDYiw2REFBaUIsQ0FBQ21DLFFBQUQsQ0FBbEIsQ0FBUjtFQUNELENBSEQ7QUFJRDtBQUVNLFNBQVN4QixjQUFULENBQXdCeUIsR0FBeEIsRUFBK0U7RUFDcEYsT0FBTyxNQUFPdkIsUUFBUCxJQUFvQjtJQUN6QixNQUFNSyxVQUFVLEdBQUcsTUFBTW1CLHlCQUF5QixDQUFDRCxHQUFELENBQWxEO0lBRUF2QixRQUFRLENBQUNqQiw0REFBZ0IsQ0FBQ3NCLFVBQUQsQ0FBakIsQ0FBUjtJQUNBLE9BQU9BLFVBQVA7RUFDRCxDQUxEO0FBTUQ7QUFFTSxTQUFTTixrQkFBVCxDQUE0Qk0sVUFBNUIsRUFBK0U7RUFDcEYsT0FBTyxNQUFPTCxRQUFQLElBQW9CO0lBQ3pCLE1BQU15QixVQUFVLEdBQUksTUFBTS9DLHNGQUFpQixDQUFDMkIsVUFBVSxDQUFDRSxJQUFaLENBQTNDO0lBQ0EsTUFBTTdHLE1BQU0sR0FBRyxNQUFNaUYsMEZBQXNCLENBQUM4QyxVQUFELENBQTNDO0lBQ0EsTUFBTUMsU0FBUyxHQUFHaEksTUFBTSxDQUFDaUksZUFBUCxDQUF1QkMsU0FBdkIsWUFBNEMxRCxtRUFBOUQ7SUFDQSxNQUFNaEMsSUFBSSxxQkFDTHVGLFVBREs7TUFFUkMsU0FBUyxFQUFFRCxVQUFVLENBQUNJLE9BQVgsSUFBc0JIO0lBRnpCLEVBQVY7SUFLQTFCLFFBQVEsQ0FBQ2hCLGdFQUFvQixDQUFDOUMsSUFBRCxDQUFyQixDQUFSO0lBRUF4QyxNQUFNLENBQUN3QyxJQUFQLEdBQWNBLElBQWQ7SUFDQThELFFBQVEsQ0FBQzFCLGdFQUFjLENBQUNRLHlEQUFhLENBQUN1QixVQUFELEVBQWEzRyxNQUFiLENBQWQsQ0FBZixDQUFSO0VBQ0QsQ0FiRDtBQWNEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLGVBQWU4SCx5QkFBZixDQUF5Q0QsR0FBekMsRUFBNEY7RUFDakc7RUFDQSxJQUFJO0lBQ0YsTUFBTU8sS0FBSyxHQUFHLE1BQU05RCxvREFBYSxDQUMvQk8sNEVBQWEsR0FBR3dELEtBQWhCLENBQTBDO01BQ3hDQyxNQUFNLEVBQUUsS0FEZ0M7TUFFeEMzRixHQUFHLEVBQUcsd0JBQXVCa0YsR0FBSSxFQUZPO01BR3hDVSxNQUFNLEVBQUV6RCxxRkFBdUIsRUFIUztNQUl4QzBELGNBQWMsRUFBRTtJQUp3QixDQUExQyxDQUQrQixDQUFqQzs7SUFTQSxJQUFJSixLQUFLLENBQUNLLEVBQVYsRUFBYztNQUNaLE9BQU9MLEtBQUssQ0FBQ1gsSUFBYjtJQUNEO0VBQ0YsQ0FiRCxDQWFFLE9BQU9WLEdBQVAsRUFBWTtJQUNaMkIsT0FBTyxDQUFDQyxHQUFSLENBQVkscUNBQVosRUFBbUQ1QixHQUFuRDtFQUNELENBakJnRyxDQW1Cakc7OztFQUNBLE1BQU14RyxFQUFFLEdBQUcsT0FBT3NILEdBQVAsS0FBZSxRQUFmLEdBQTBCZSxRQUFRLENBQUNmLEdBQUQsRUFBTSxFQUFOLENBQWxDLEdBQThDQSxHQUF6RDs7RUFDQSxJQUFJLENBQUNnQixNQUFNLENBQUNDLEtBQVAsQ0FBYXZJLEVBQWIsQ0FBTCxFQUF1QjtJQUNyQixNQUFNcUgsUUFBUSxHQUFHLE1BQU10RCxvREFBYSxDQUNsQ08sNEVBQWEsR0FBR3dELEtBQWhCLENBQTBDO01BQ3hDQyxNQUFNLEVBQUUsS0FEZ0M7TUFFeEMzRixHQUFHLEVBQUcsb0JBQW1CcEMsRUFBRyxFQUZZO01BR3hDZ0ksTUFBTSxFQUFFekQscUZBQXVCLEVBSFM7TUFJeEMwRCxjQUFjLEVBQUU7SUFKd0IsQ0FBMUMsQ0FEa0MsQ0FBcEMsQ0FEcUIsQ0FVckI7SUFDQTs7SUFDQSxJQUFJWixRQUFRLENBQUNhLEVBQVQsSUFBZSxPQUFPWixHQUFQLEtBQWUsUUFBOUIsSUFBMENELFFBQVEsQ0FBQ0gsSUFBVCxDQUFjbEgsRUFBZCxLQUFxQnNILEdBQW5FLEVBQXdFO01BQ3RFLE9BQU9ELFFBQVEsQ0FBQ0gsSUFBaEI7SUFDRCxDQWRvQixDQWdCckI7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7O0lBQ0EsSUFBSUcsUUFBUSxDQUFDYSxFQUFULElBQWViLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjbEgsRUFBZCxDQUFpQkcsUUFBakIsT0FBZ0NtSCxHQUFuRCxFQUF3RDtNQUN0RGtCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQjdFLElBQWhCLEdBQXVCSSxxRUFBQSxDQUE0QixxQkFBb0JxRCxRQUFRLENBQUNILElBQVQsQ0FBY0ksR0FBSSxFQUFsRSxDQUF2QjtNQUNBLE9BQU8sRUFBUCxDQUZzRCxDQUVyQjtJQUNsQztFQUNGOztFQUVELE1BQU1yQixLQUFLLENBQUMsNEJBQUQsQ0FBWDtBQUNEO0FBRU0sU0FBUzFILGFBQVQsQ0FBdUJrQixNQUF2QixFQUF3RTtFQUM3RSxPQUFPLE9BQU9zRyxRQUFQLEVBQWlCNEMsUUFBakIsS0FBOEI7SUFDbkMsTUFBTTVDLFFBQVEsQ0FBQ3FCLGVBQWUsRUFBaEIsQ0FBZDtJQUVBLE1BQU1wSSxXQUFXLEdBQUcySixRQUFRLEdBQUczSixXQUFYLENBQXVCQSxXQUEzQztJQUVBLE1BQU00SixXQUFXLEdBQUc7TUFDbEJqSCxJQUFJLEVBQUVsQyxNQUFNLENBQUNrQyxJQURLO01BRWxCMkUsSUFBSSxFQUFFN0csTUFBTSxDQUFDTyxFQUZLO01BR2xCNkksTUFBTSxFQUFFLE9BSFU7TUFJbEJDLFNBQVMsRUFBRTlKLFdBQVcsQ0FBQ2lCLE1BQVosS0FBdUI7SUFKaEIsQ0FBcEI7O0lBT0EsSUFBSThJLFNBQVMsQ0FBQy9KLFdBQUQsRUFBYzRKLFdBQVcsQ0FBQ2pILElBQTFCLENBQWIsRUFBOEM7TUFDNUNpSCxXQUFXLENBQUNqSCxJQUFaLEdBQW1CcUgsV0FBVyxDQUFDaEssV0FBRCxFQUFjNEosV0FBVyxDQUFDakgsSUFBMUIsQ0FBOUI7SUFDRDs7SUFFRCxNQUFNb0YsTUFBTSxHQUFHLE1BQU16Qyw0RUFBYSxHQUFHMkUsSUFBaEIsQ0FBcUIsa0JBQXJCLEVBQXlDTCxXQUF6QyxDQUFyQjtJQUNBLE1BQU1wRSxxRkFBZ0IsR0FBRzBFLE1BQW5CLEVBQU47SUFFQSxNQUFNdkUsdUZBQUEsRUFBTjtJQUVBUCxrRUFBQSxDQUFzQixxQkFBb0IyQyxNQUFNLENBQUNzQyxVQUFQLENBQWtCL0IsR0FBSSxFQUFoRTtFQUNELENBdEJEO0FBdUJEO0FBRU0sU0FBUzlJLHFCQUFULEdBQW9EO0VBQ3pELE9BQU8sTUFBT3VILFFBQVAsSUFBb0I7SUFDekJBLFFBQVEsQ0FBQ2YsaUVBQXFCLEVBQXRCLENBQVI7SUFDQSxNQUFNakcsT0FBTyxHQUFHLE1BQU11Riw0RUFBYSxHQUFHc0MsR0FBaEIsQ0FBb0IsY0FBcEIsRUFBb0M7TUFBRTBDLE9BQU8sRUFBRSxDQUFYO01BQWNoRCxJQUFJLEVBQUU7SUFBcEIsQ0FBcEMsQ0FBdEI7SUFDQSxNQUFNbkgsVUFBVSxHQUFHeUYsaUVBQWUsQ0FBQzdGLE9BQUQsQ0FBbEM7SUFDQWdILFFBQVEsQ0FBQ2QsbUVBQXVCLENBQUM7TUFBRWxHLE9BQUY7TUFBV0k7SUFBWCxDQUFELENBQXhCLENBQVI7RUFDRCxDQUxEO0FBTUQ7QUFFTSxTQUFTb0ssZ0JBQVQsQ0FBMEJuRCxVQUExQixFQUE2RTtFQUNsRixPQUFPLE1BQU9MLFFBQVAsSUFBb0I7SUFDekIsTUFBTXpCLDRFQUFhLEdBQUdrRixHQUFoQixDQUFxQixvQkFBbUJwRCxVQUFVLENBQUNwRyxFQUFHLEVBQXRELEVBQXlEb0csVUFBekQsQ0FBTixDQUR5QixDQUNtRDs7SUFDNUUsTUFBTTVCLHFGQUFnQixHQUFHMEUsTUFBbkIsRUFBTjtJQUNBLE9BQU9uRCxRQUFRLENBQUNGLGNBQWMsQ0FBQ08sVUFBVSxDQUFDa0IsR0FBWixDQUFmLENBQWY7RUFDRCxDQUpEO0FBS0Q7QUFFTSxTQUFTbUMsZ0JBQVQsR0FBK0M7RUFDcEQsT0FBTyxPQUFPMUQsUUFBUCxFQUFpQjRDLFFBQWpCLEtBQThCO0lBQ25DLE1BQU12QyxVQUFVLEdBQUd1QyxRQUFRLEdBQUczSixXQUFYLENBQXVCb0gsVUFBMUM7SUFFQSxNQUFNOUIsNEVBQWEsR0FBR29GLE1BQWhCLENBQXdCLG9CQUFtQnRELFVBQVUsQ0FBQ3BHLEVBQUcsRUFBekQsQ0FBTjtJQUNBLE1BQU13RSxxRkFBZ0IsR0FBRzBFLE1BQW5CLEVBQU47SUFFQTlFLGtFQUFBLENBQXFCLGNBQXJCO0VBQ0QsQ0FQRDtBQVFEO0FBTU0sU0FBUzJFLFNBQVQsQ0FBbUIvSixXQUFuQixFQUFnRDJDLElBQWhELEVBQThEO0VBQ25FLE9BQ0UzQyxXQUFXLENBQUMySyxNQUFaLENBQW9CdkQsVUFBRCxJQUFnQjtJQUNqQyxPQUFPQSxVQUFVLENBQUN6RSxJQUFYLENBQWdCaUksV0FBaEIsT0FBa0NqSSxJQUFJLENBQUNpSSxXQUFMLEVBQXpDO0VBQ0QsQ0FGRCxFQUVHM0osTUFGSCxHQUVZLENBSGQ7QUFLRDtBQUVNLFNBQVMrSSxXQUFULENBQXFCaEssV0FBckIsRUFBa0QyQyxJQUFsRCxFQUFnRTtFQUNyRTtFQUNBO0VBQ0EsT0FBT29ILFNBQVMsQ0FBQy9KLFdBQUQsRUFBYzJDLElBQWQsQ0FBaEIsRUFBcUM7SUFDbkM7SUFDQTtJQUNBLElBQUksQ0FBQ2tJLGFBQWEsQ0FBQ2xJLElBQUQsQ0FBbEIsRUFBMEI7TUFDeEJBLElBQUksR0FBSSxHQUFFQSxJQUFLLElBQWY7SUFDRCxDQUZELE1BRU87TUFDTDtNQUNBO01BRUE7TUFDQUEsSUFBSSxHQUFJLEdBQUVtSSxVQUFVLENBQUNuSSxJQUFELENBQU8sR0FBRW9JLGtCQUFrQixDQUFDQyxZQUFZLENBQUNySSxJQUFELENBQWIsQ0FBcUIsRUFBcEU7SUFDRDtFQUNGOztFQUVELE9BQU9BLElBQVA7QUFDRDs7QUFFRCxTQUFTa0ksYUFBVCxDQUF1QmxJLElBQXZCLEVBQXFDO0VBQ25DLE9BQU9BLElBQUksQ0FBQ3NJLFFBQUwsQ0FBYyxHQUFkLEVBQW1CdEksSUFBSSxDQUFDMUIsTUFBTCxHQUFjLENBQWpDLENBQVA7QUFDRDs7QUFFRCxTQUFTK0osWUFBVCxDQUFzQnJJLElBQXRCLEVBQW9DO0VBQ2xDLE9BQU8wRyxRQUFRLENBQUMxRyxJQUFJLENBQUN1SSxLQUFMLENBQVcsQ0FBQyxDQUFaLENBQUQsRUFBaUIsRUFBakIsQ0FBZjtBQUNEOztBQUVELFNBQVNILGtCQUFULENBQTRCSSxLQUE1QixFQUEyQztFQUN6QyxPQUFPNUIsS0FBSyxDQUFDNEIsS0FBRCxDQUFMLEdBQWUsQ0FBZixHQUFtQkEsS0FBSyxHQUFHLENBQWxDO0FBQ0Q7O0FBRUQsU0FBU0wsVUFBVCxDQUFvQm5JLElBQXBCLEVBQWtDO0VBQ2hDLE9BQU9BLElBQUksQ0FBQ3VJLEtBQUwsQ0FBVyxDQUFYLEVBQWN2SSxJQUFJLENBQUMxQixNQUFMLEdBQWMsQ0FBNUIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7O0FDaFVEO0FBQ0E7QUFHTyxTQUFTMkUsZUFBVCxDQUF5QjdGLE9BQXpCLEVBQXNGO0VBQzNGLE1BQU1JLFVBQXNDLEdBQUcsQ0FDN0M7SUFBRWEsRUFBRSxFQUFFLE1BQU47SUFBY1MsS0FBSyxFQUFFLHVCQUFyQjtJQUE4QzFCLE9BQU8sRUFBRTtFQUF2RCxDQUQ2QyxFQUU3QztJQUFFaUIsRUFBRSxFQUFFLFNBQU47SUFBaUJTLEtBQUssRUFBRSw4QkFBeEI7SUFBd0QxQixPQUFPLEVBQUU7RUFBakUsQ0FGNkMsRUFHN0M7SUFBRWlCLEVBQUUsRUFBRSxTQUFOO0lBQWlCUyxLQUFLLEVBQUUscUJBQXhCO0lBQStDMUIsT0FBTyxFQUFFO0VBQXhELENBSDZDLEVBSTdDO0lBQUVpQixFQUFFLEVBQUUsS0FBTjtJQUFhUyxLQUFLLEVBQUUsS0FBcEI7SUFBMkIxQixPQUFPLEVBQUU7RUFBcEMsQ0FKNkMsRUFLN0M7SUFBRWlCLEVBQUUsRUFBRSxPQUFOO0lBQWVTLEtBQUssRUFBRSxPQUF0QjtJQUErQjFCLE9BQU8sRUFBRTtFQUF4QyxDQUw2QyxFQU03QztJQUFFaUIsRUFBRSxFQUFFLFlBQU47SUFBb0JTLEtBQUssRUFBRSxvQkFBM0I7SUFBaUQxQixPQUFPLEVBQUU7RUFBMUQsQ0FONkMsRUFPN0M7SUFBRWlCLEVBQUUsRUFBRSxLQUFOO0lBQWFTLEtBQUssRUFBRSxrQkFBcEI7SUFBd0MxQixPQUFPLEVBQUU7RUFBakQsQ0FQNkMsRUFRN0M7SUFBRWlCLEVBQUUsRUFBRSxPQUFOO0lBQWVTLEtBQUssRUFBRSxRQUF0QjtJQUFnQzFCLE9BQU8sRUFBRTtFQUF6QyxDQVI2QyxFQVM3QzRLLE1BVDZDLENBU3JDekosSUFBRCxJQUFVQSxJQVQ0QixDQUEvQztFQVdBLE1BQU1vSyxhQUF1RCxHQUFHLEVBQWhFO0VBQ0EsTUFBTUMsV0FBaUQsR0FBRyxFQUExRDtFQUNBLE1BQU1DLGlCQUFpQixHQUFHQywyQkFBMkIsRUFBckQsQ0FkMkYsQ0FnQjNGOztFQUNBLEtBQUssTUFBTWpLLFFBQVgsSUFBdUJyQixVQUF2QixFQUFtQztJQUNqQ21MLGFBQWEsQ0FBQzlKLFFBQVEsQ0FBQ1IsRUFBVixDQUFiLEdBQTZCUSxRQUE3QjtFQUNEOztFQUVELEtBQUssTUFBTWYsTUFBWCxJQUFxQlYsT0FBckIsRUFBOEI7SUFDNUIsTUFBTTJMLGdCQUFnQixHQUFHRixpQkFBaUIsQ0FBQ0csSUFBbEIsQ0FBd0J6SyxJQUFELElBQVVBLElBQUksQ0FBQ0YsRUFBTCxLQUFZUCxNQUFNLENBQUNPLEVBQXBELENBQXpCLENBRDRCLENBRTVCOztJQUNBLElBQUlQLE1BQU0sQ0FBQ21MLFVBQVAsSUFBcUJGLGdCQUF6QixFQUEyQztNQUFBOztNQUN6Q2pMLE1BQU0sQ0FBQ2UsUUFBUCxHQUFrQixZQUFsQjtNQUNBZixNQUFNLENBQUN1QixVQUFQLEdBQW9CLENBQUNxSixnRUFBYyxDQUFDLG9CQUFELENBQW5DO01BQ0E1SyxNQUFNLENBQUN5QixJQUFQLENBQVlDLEtBQVosR0FBb0IsQ0FBQXVKLGdCQUFnQixTQUFoQixJQUFBQSxnQkFBZ0IsV0FBaEIscUNBQUFBLGdCQUFnQixDQUFFeEosSUFBbEIsZ0ZBQXdCQyxLQUF4QixLQUFpQzFCLE1BQU0sQ0FBQ3lCLElBQVAsQ0FBWUMsS0FBakU7SUFDRCxDQVAyQixDQVM1Qjs7O0lBQ0EsSUFBSTFCLE1BQU0sQ0FBQ3lCLElBQVAsQ0FBWUMsS0FBaEIsRUFBdUI7TUFDckIsS0FBSyxNQUFNMEosSUFBWCxJQUFtQnBMLE1BQU0sQ0FBQ3lCLElBQVAsQ0FBWUMsS0FBL0IsRUFBc0M7UUFDcEMwSixJQUFJLENBQUNsSixJQUFMLEdBQVksWUFBWjtNQUNEO0lBQ0Y7O0lBRUQsTUFBTW5CLFFBQVEsR0FBR3JCLFVBQVUsQ0FBQ3dMLElBQVgsQ0FBaUJ6SyxJQUFELElBQVVBLElBQUksQ0FBQ0YsRUFBTCxLQUFZUCxNQUFNLENBQUNlLFFBQTdDLEtBQTBEOEosYUFBYSxDQUFDLE9BQUQsQ0FBeEY7SUFDQTlKLFFBQVEsQ0FBQ3pCLE9BQVQsQ0FBaUJxSyxJQUFqQixDQUFzQjNKLE1BQXRCLEVBakI0QixDQWtCNUI7O0lBQ0E4SyxXQUFXLENBQUM5SyxNQUFNLENBQUNPLEVBQVIsQ0FBWCxHQUF5QlAsTUFBekI7RUFDRDs7RUFFRCxLQUFLLE1BQU1lLFFBQVgsSUFBdUJyQixVQUF2QixFQUFtQztJQUNqQztJQUNBLElBQUlxQixRQUFRLENBQUNSLEVBQVQsS0FBZ0IsT0FBcEIsRUFBNkI7TUFDM0JRLFFBQVEsQ0FBQ3pCLE9BQVQsQ0FBaUJxSyxJQUFqQixDQUFzQjBCLDRCQUE0QixFQUFsRDtJQUNELENBSmdDLENBTWpDOzs7SUFDQSxJQUFJdEssUUFBUSxDQUFDUixFQUFULEtBQWdCLFlBQXBCLEVBQWtDO01BQ2hDLEtBQUssTUFBTVAsTUFBWCxJQUFxQitLLGlCQUFyQixFQUF3QztRQUN0QyxJQUFJLENBQUNELFdBQVcsQ0FBQzlLLE1BQU0sQ0FBQ08sRUFBUixDQUFoQixFQUE2QjtVQUMzQlEsUUFBUSxDQUFDekIsT0FBVCxDQUFpQnFLLElBQWpCLENBQXNCM0osTUFBdEI7UUFDRDtNQUNGO0lBQ0Y7O0lBRURzTCxXQUFXLENBQUN2SyxRQUFRLENBQUN6QixPQUFWLENBQVg7RUFDRCxDQTNEMEYsQ0E2RDNGOzs7RUFDQSxPQUFPSSxVQUFVLENBQUN3SyxNQUFYLENBQW1CcUIsQ0FBRCxJQUFPQSxDQUFDLENBQUNqTSxPQUFGLENBQVVrQixNQUFWLEdBQW1CLENBQTVDLENBQVA7QUFDRDs7QUFFRCxTQUFTOEssV0FBVCxDQUFxQmhNLE9BQXJCLEVBQXNEO0VBQ3BELE1BQU1rTSxZQUFzQyxHQUFHO0lBQzdDQyxVQUFVLEVBQUUsR0FEaUM7SUFFN0NDLFFBQVEsRUFBRSxFQUZtQztJQUc3Q0MsSUFBSSxFQUFFLEVBSHVDO0lBSTdDQyxLQUFLLEVBQUUsRUFKc0M7SUFLN0NDLE1BQU0sRUFBRSxHQUxxQztJQU03Q0MsUUFBUSxFQUFFLEVBTm1DO0lBTzdDQyxNQUFNLEVBQUUsQ0FBQztFQVBvQyxDQUEvQztFQVVBek0sT0FBTyxDQUFDME0sSUFBUixDQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0lBQ3JCLE1BQU1DLEtBQUssR0FBR1gsWUFBWSxDQUFDUyxDQUFDLENBQUMxTCxFQUFILENBQVosSUFBc0IsQ0FBcEM7SUFDQSxNQUFNNkwsS0FBSyxHQUFHWixZQUFZLENBQUNVLENBQUMsQ0FBQzNMLEVBQUgsQ0FBWixJQUFzQixDQUFwQzs7SUFDQSxJQUFJNEwsS0FBSyxHQUFHQyxLQUFaLEVBQW1CO01BQ2pCLE9BQU8sQ0FBQyxDQUFSO0lBQ0Q7O0lBQ0QsSUFBSUQsS0FBSyxHQUFHQyxLQUFaLEVBQW1CO01BQ2pCLE9BQU8sQ0FBUDtJQUNEOztJQUVELE9BQU9ILENBQUMsQ0FBQy9KLElBQUYsR0FBU2dLLENBQUMsQ0FBQ2hLLElBQVgsR0FBa0IsQ0FBbEIsR0FBc0IsQ0FBQyxDQUE5QjtFQUNELENBWEQ7QUFZRDs7QUFFRCxTQUFTOEksMkJBQVQsR0FBK0Q7RUFDN0QsT0FBTyxDQUNMcUIsZ0JBQWdCLENBQUM7SUFDZjlMLEVBQUUsRUFBRSwyQkFEVztJQUVmMkIsSUFBSSxFQUFFLFFBRlM7SUFHZkssV0FBVyxFQUFFLG1DQUhFO0lBSWYrSixNQUFNLEVBQUU7RUFKTyxDQUFELENBRFgsRUFPTEQsZ0JBQWdCLENBQUM7SUFDZjlMLEVBQUUsRUFBRSwyQkFEVztJQUVmMkIsSUFBSSxFQUFFLFFBRlM7SUFHZkssV0FBVyxFQUFFLGtDQUhFO0lBSWYrSixNQUFNLEVBQUU7RUFKTyxDQUFELENBUFgsRUFhTEQsZ0JBQWdCLENBQUM7SUFDZjlMLEVBQUUsRUFBRSw4QkFEVztJQUVmMkIsSUFBSSxFQUFFLFdBRlM7SUFHZkssV0FBVyxFQUFFLHNDQUhFO0lBSWYrSixNQUFNLEVBQUU7RUFKTyxDQUFELENBYlgsRUFtQkxELGdCQUFnQixDQUFDO0lBQ2Y5TCxFQUFFLEVBQUUsK0JBRFc7SUFFZmdDLFdBQVcsRUFBRSx3Q0FGRTtJQUdmTCxJQUFJLEVBQUUsWUFIUztJQUlmb0ssTUFBTSxFQUFFO0VBSk8sQ0FBRCxDQW5CWCxFQXlCTEQsZ0JBQWdCLENBQUM7SUFDZjlMLEVBQUUsRUFBRSw0QkFEVztJQUVmZ0MsV0FBVyxFQUFFLHFDQUZFO0lBR2ZMLElBQUksRUFBRSxTQUhTO0lBSWZvSyxNQUFNLEVBQUU7RUFKTyxDQUFELENBekJYLEVBK0JMRCxnQkFBZ0IsQ0FBQztJQUNmOUwsRUFBRSxFQUFFLDZCQURXO0lBRWZnQyxXQUFXLEVBQUUsdUNBRkU7SUFHZkwsSUFBSSxFQUFFLFdBSFM7SUFJZm9LLE1BQU0sRUFBRTtFQUpPLENBQUQsQ0EvQlgsRUFxQ0xELGdCQUFnQixDQUFDO0lBQ2Y5TCxFQUFFLEVBQUUsNEJBRFc7SUFFZmdDLFdBQVcsRUFBRSxxQ0FGRTtJQUdmTCxJQUFJLEVBQUUsU0FIUztJQUlmb0ssTUFBTSxFQUFFO0VBSk8sQ0FBRCxDQXJDWCxFQTJDTEQsZ0JBQWdCLENBQUM7SUFDZjlMLEVBQUUsRUFBRSw4QkFEVztJQUVmZ0MsV0FBVyxFQUFFLHVDQUZFO0lBR2ZMLElBQUksRUFBRSxXQUhTO0lBSWZvSyxNQUFNLEVBQUU7RUFKTyxDQUFELENBM0NYLEVBaURMRCxnQkFBZ0IsQ0FBQztJQUNmOUwsRUFBRSxFQUFFLDhCQURXO0lBRWZnQyxXQUFXLEVBQUUsdUNBRkU7SUFHZkwsSUFBSSxFQUFFLFdBSFM7SUFJZm9LLE1BQU0sRUFBRTtFQUpPLENBQUQsQ0FqRFgsRUF1RExELGdCQUFnQixDQUFDO0lBQ2Y5TCxFQUFFLEVBQUUsZ0NBRFc7SUFFZmdDLFdBQVcsRUFBRSx5Q0FGRTtJQUdmTCxJQUFJLEVBQUUsYUFIUztJQUlmb0ssTUFBTSxFQUFFO0VBSk8sQ0FBRCxDQXZEWCxFQTZETEQsZ0JBQWdCLENBQUM7SUFDZjlMLEVBQUUsRUFBRSw0QkFEVztJQUVmZ0MsV0FBVyxFQUFFLHVDQUZFO0lBR2ZMLElBQUksRUFBRSxXQUhTO0lBSWZvSyxNQUFNLEVBQUU7RUFKTyxDQUFELENBN0RYLEVBbUVMRCxnQkFBZ0IsQ0FBQztJQUNmOUwsRUFBRSxFQUFFLDhCQURXO0lBRWZnQyxXQUFXLEVBQUUsc0NBRkU7SUFHZkwsSUFBSSxFQUFFLFdBSFM7SUFJZm9LLE1BQU0sRUFBRTtFQUpPLENBQUQsQ0FuRVgsRUF5RUxELGdCQUFnQixDQUFDO0lBQ2Y5TCxFQUFFLEVBQUUsK0JBRFc7SUFFZmdDLFdBQVcsRUFBRSx1Q0FGRTtJQUdmTCxJQUFJLEVBQUUsWUFIUztJQUlmb0ssTUFBTSxFQUFFO0VBSk8sQ0FBRCxDQXpFWCxFQStFTEQsZ0JBQWdCLENBQUM7SUFDZjlMLEVBQUUsRUFBRSx5QkFEVztJQUVmZ0MsV0FBVyxFQUFFLGlDQUZFO0lBR2ZMLElBQUksRUFBRSxNQUhTO0lBSWZvSyxNQUFNLEVBQUU7RUFKTyxDQUFELENBL0VYLEVBcUZMRCxnQkFBZ0IsQ0FBQztJQUNmOUwsRUFBRSxFQUFFLDJCQURXO0lBRWZnQyxXQUFXLEVBQUUsbUNBRkU7SUFHZkwsSUFBSSxFQUFFLFFBSFM7SUFJZm9LLE1BQU0sRUFBRTtFQUpPLENBQUQsQ0FyRlgsRUEyRkxELGdCQUFnQixDQUFDO0lBQ2Y5TCxFQUFFLEVBQUUsc0NBRFc7SUFFZmdDLFdBQVcsRUFBRSxxQ0FGRTtJQUdmTCxJQUFJLEVBQUUsa0NBSFM7SUFJZm9LLE1BQU0sRUFBRTtFQUpPLENBQUQsQ0EzRlgsRUFpR0xELGdCQUFnQixDQUFDO0lBQ2Y5TCxFQUFFLEVBQUUsZ0NBRFc7SUFFZmdDLFdBQVcsRUFBRSx5QkFGRTtJQUdmTCxJQUFJLEVBQUUsY0FIUztJQUlmb0ssTUFBTSxFQUFFO0VBSk8sQ0FBRCxDQWpHWCxDQUFQO0FBd0dEOztBQUVELFNBQVNqQiw0QkFBVCxHQUE4RDtFQUM1RCxPQUFPO0lBQ0w5SyxFQUFFLEVBQUUsUUFEQztJQUVMMkIsSUFBSSxFQUFFLGVBRkQ7SUFHTDJFLElBQUksRUFBRThELGdFQUhEO0lBSUx0SixNQUFNLEVBQUUsU0FKSDtJQUtMa0wsT0FBTyxFQUFFLEVBTEo7SUFNTDlLLElBQUksRUFBRTtNQUNKYyxXQUFXLEVBQUUsdUNBRFQ7TUFFSkYsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRSw2QkFBVDtRQUF3Q2tLLEtBQUssRUFBRTtNQUEvQyxDQUZIO01BR0pDLE1BQU0sRUFBRTtRQUFFdkssSUFBSSxFQUFFO01BQVIsQ0FISjtNQUlKUixLQUFLLEVBQUUsQ0FDTDtRQUNFaUIsR0FBRyxFQUFFLHFDQURQO1FBRUVULElBQUksRUFBRTtNQUZSLENBREssQ0FKSDtNQVVKd0ssV0FBVyxFQUFFLEVBVlQ7TUFXSkMsT0FBTyxFQUFFLFlBWEw7TUFZSkMsT0FBTyxFQUFFO0lBWkw7RUFORCxDQUFQO0FBcUJEOztBQVNELFNBQVNQLGdCQUFULENBQTBCUSxPQUExQixFQUFrRjtFQUNoRixPQUFPO0lBQ0x0TSxFQUFFLEVBQUVzTSxPQUFPLENBQUN0TSxFQURQO0lBRUwyQixJQUFJLEVBQUUySyxPQUFPLENBQUMzSyxJQUZUO0lBR0wyRSxJQUFJLEVBQUU4RCxnRUFIRDtJQUlMdEosTUFBTSxFQUFFLFNBSkg7SUFLTGtMLE9BQU8sRUFBRSxFQUxKO0lBTUw5SyxJQUFJLEVBQUU7TUFDSmMsV0FBVyxFQUFFc0ssT0FBTyxDQUFDdEssV0FEakI7TUFFSkYsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRXVLLE9BQU8sQ0FBQ1AsTUFBakI7UUFBeUJFLEtBQUssRUFBRUssT0FBTyxDQUFDUDtNQUF4QyxDQUZIO01BR0pHLE1BQU0sRUFBRTtRQUFFdkssSUFBSSxFQUFFO01BQVIsQ0FISjtNQUlKUixLQUFLLEVBQUUsQ0FDTDtRQUNFaUIsR0FBRyxFQUFFbkYscUVBQUEsR0FBMEJxUCxPQUFPLENBQUN0TSxFQUR6QztRQUVFMkIsSUFBSSxFQUFFO01BRlIsQ0FESyxDQUpIO01BVUp3SyxXQUFXLEVBQUUsRUFWVDtNQVdKQyxPQUFPLEVBQUUsWUFYTDtNQVlKQyxPQUFPLEVBQUU7SUFaTDtFQU5ELENBQVA7QUFxQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsTUFBTUssYUFBYSxHQUFHLFNBQXRCO0FBRU8sU0FBUzdILGFBQVQsQ0FBdUJ1QixVQUF2QixFQUF1RDNHLE1BQXZELEVBQXNHO0VBQzNHLE1BQU1rTixVQUFVLEdBQUdsTixNQUFNLENBQUN3QyxJQUExQjtFQUNBLE1BQU0ySyxpQkFBaUIsR0FBRzNQLHdGQUExQjtFQUNBLE1BQU00QixRQUFzQixHQUFHO0lBQzdCZ08sR0FBRyxFQUFFRixVQUFVLENBQUN6TCxJQUFYLENBQWdCWSxLQUFoQixDQUFzQm1LLEtBREU7SUFFN0JqTSxFQUFFLEVBQUUsZ0JBQWdCb0csVUFBVSxDQUFDa0IsR0FGRjtJQUc3QnpELFFBQVEsRUFBRyxTQUFROEksVUFBVSxDQUFDaEwsSUFBSyxFQUhOO0lBSTdCUyxHQUFHLEVBQUUsRUFKd0I7SUFLN0J1QixJQUFJLEVBQUV5QyxVQUFVLENBQUN6RSxJQUxZO0lBTTdCbUwsV0FBVyxFQUFFLENBQUM7TUFBRXJNLEtBQUssRUFBRSxjQUFUO01BQXlCMkIsR0FBRyxFQUFFO0lBQTlCLENBQUQsQ0FOZ0I7SUFPN0IySyxRQUFRLEVBQUUsQ0FDUjtNQUNFQyxNQUFNLEVBQUUsS0FEVjtNQUVFdEosSUFBSSxFQUFFLGVBRlI7TUFHRTFELEVBQUUsRUFBRyx1QkFBc0JvRyxVQUFVLENBQUNrQixHQUFJLEVBSDVDO01BSUUzRCxJQUFJLEVBQUUsVUFKUjtNQUtFdkIsR0FBRyxFQUFHLG9CQUFtQmdFLFVBQVUsQ0FBQ2tCLEdBQUk7SUFMMUMsQ0FEUTtFQVBtQixDQUEvQjs7RUFrQkEsSUFBSTdILE1BQU0sQ0FBQ3dOLFdBQVgsRUFBd0I7SUFDdEIsS0FBSyxNQUFNQyxJQUFYLElBQW1Cek4sTUFBTSxDQUFDd04sV0FBMUIsRUFBdUM7TUFDckNwTyxRQUFRLENBQUNrTyxRQUFULENBQW1CM0QsSUFBbkIsQ0FBd0I7UUFDdEI0RCxNQUFNLEVBQUUsS0FEYztRQUV0QnJKLElBQUksRUFBRXVKLElBQUksQ0FBQ3pNLEtBRlc7UUFHdEJpRCxJQUFJLEVBQUV3SixJQUFJLENBQUN4SixJQUhXO1FBSXRCdEIsR0FBRyxFQUFHLG9CQUFtQmdFLFVBQVUsQ0FBQ2tCLEdBQUksVUFBUzRGLElBQUksQ0FBQ2xOLEVBQUcsRUFKbkM7UUFLdEJBLEVBQUUsRUFBRyxtQkFBa0JrTixJQUFJLENBQUNsTixFQUFHO01BTFQsQ0FBeEI7SUFPRDtFQUNGOztFQUVELElBQUkyTSxVQUFVLENBQUNRLFFBQVgsSUFBdUJDLGFBQWEsQ0FBQ1QsVUFBVSxDQUFDUSxRQUFaLENBQXBDLElBQTZEeEksNkRBQUEsQ0FBbUIsT0FBbkIsQ0FBakUsRUFBOEY7SUFDNUY5RixRQUFRLENBQUNrTyxRQUFULENBQW1CM0QsSUFBbkIsQ0FBd0I7TUFDdEI0RCxNQUFNLEVBQUUsS0FEYztNQUV0QnRKLElBQUksRUFBRSxNQUZnQjtNQUd0QjFELEVBQUUsRUFBRyx5QkFBd0JvRyxVQUFVLENBQUNrQixHQUFJLEVBSHRCO01BSXRCM0QsSUFBSSxFQUFFLFlBSmdCO01BS3RCdkIsR0FBRyxFQUFHLG9CQUFtQmdFLFVBQVUsQ0FBQ2tCLEdBQUk7SUFMbEIsQ0FBeEI7RUFPRDs7RUFFRCxNQUFNZ0csWUFBWSxHQUFHbEgsVUFBVSxDQUFDRSxJQUFYLEtBQW9Cb0csYUFBekM7RUFFQSxNQUFNYSx1QkFBdUIsR0FBRyxrREFBaEM7RUFDQSxNQUFNQyxhQUEyQixHQUFHO0lBQ2xDUixNQUFNLEVBQUUsS0FEMEI7SUFFbEN0SixJQUFJLEVBQUUsTUFGNEI7SUFHbEMxRCxFQUFFLEVBQUcsMEJBQXlCb0csVUFBVSxDQUFDa0IsR0FBSSxFQUhYO0lBSWxDM0QsSUFBSSxFQUFFLGFBSjRCO0lBS2xDdkIsR0FBRyxFQUFHLG9CQUFtQmdFLFVBQVUsQ0FBQ2tCLEdBQUk7RUFMTixDQUFwQzs7RUFRQSxJQUFJaEssNERBQWMsTUFBTSxDQUFDZ1EsWUFBekIsRUFBdUM7SUFDckNFLGFBQWEsQ0FBQ0MsU0FBZCxHQUEwQixNQUFNakIsOEVBQVEsQ0FBQztNQUFFa0IsWUFBWSxFQUFFSCx1QkFBaEI7TUFBeUNJLFlBQVksRUFBRTtJQUF2RCxDQUFELENBQXhDO0VBQ0Q7O0VBRUQsSUFBSXRELGdFQUFjLENBQUMsZUFBRCxDQUFsQixFQUFxQztJQUNuQyxJQUFJMUYsbUVBQUEsQ0FBeUI4SCxxRkFBekIsQ0FBSixFQUE4RTtNQUM1RTVOLFFBQVEsQ0FBQ2tPLFFBQVQsQ0FBbUIzRCxJQUFuQixDQUF3Qm9FLGFBQXhCO0lBQ0Q7RUFDRixDQUpELE1BSU8sSUFBSVosaUJBQWlCLElBQUksQ0FBQ1UsWUFBMUIsRUFBd0M7SUFDN0N6TyxRQUFRLENBQUNrTyxRQUFULENBQW1CM0QsSUFBbkIsbUJBQ0tvRSxhQURMO01BRUVwTCxHQUFHLEVBQUVvTCxhQUFhLENBQUNwTCxHQUFkLEdBQW9CLFVBRjNCO01BR0VxTCxTQUFTLEVBQUUsTUFBTWpCLDhFQUFRLENBQUM7UUFBRWtCLFlBQVksRUFBRUg7TUFBaEIsQ0FBRDtJQUgzQjtFQUtEOztFQUVELE1BQU1PLHFCQUFxQixHQUFHLCtDQUE5QjtFQUNBLE1BQU1DLFNBQXVCLEdBQUc7SUFDOUJmLE1BQU0sRUFBRSxLQURzQjtJQUU5QnRKLElBQUksRUFBRSxhQUZ3QjtJQUc5QjFELEVBQUUsRUFBRyx1QkFBc0JvRyxVQUFVLENBQUNrQixHQUFJLEVBSFo7SUFJOUIzRCxJQUFJLEVBQUUsVUFKd0I7SUFLOUJ2QixHQUFHLEVBQUcsb0JBQW1CZ0UsVUFBVSxDQUFDa0IsR0FBSTtFQUxWLENBQWhDOztFQVFBLElBQUloSyw0REFBYyxNQUFNLENBQUNnUSxZQUF6QixFQUF1QztJQUNyQ1MsU0FBUyxDQUFDTixTQUFWLEdBQXNCLE1BQU1qQiw4RUFBUSxDQUFDO01BQUVrQixZQUFZLEVBQUVJLHFCQUFoQjtNQUF1Q0gsWUFBWSxFQUFFO0lBQXJELENBQUQsQ0FBcEM7RUFDRDs7RUFFRCxJQUFJdEQsZ0VBQWMsQ0FBQyxXQUFELENBQWxCLEVBQWlDO0lBQy9CeEwsUUFBUSxDQUFDa08sUUFBVCxDQUFtQjNELElBQW5CLENBQXdCMkUsU0FBeEI7RUFDRCxDQUZELE1BRU8sSUFBSW5CLGlCQUFpQixJQUFJLENBQUNVLFlBQTFCLEVBQXdDO0lBQzdDek8sUUFBUSxDQUFDa08sUUFBVCxDQUFtQjNELElBQW5CLG1CQUNLMkUsU0FETDtNQUVFM0wsR0FBRyxFQUFFMkwsU0FBUyxDQUFDM0wsR0FBVixHQUFnQixVQUZ2QjtNQUdFcUwsU0FBUyxFQUFFLE1BQU1qQiw4RUFBUSxDQUFDO1FBQUVrQixZQUFZLEVBQUVJO01BQWhCLENBQUQ7SUFIM0I7RUFLRDs7RUFFRCxNQUFNRSxtQkFBbUIsR0FBRyx3Q0FBNUI7RUFFQSxNQUFNQyxPQUFxQixHQUFHO0lBQzVCakIsTUFBTSxFQUFFLEtBRG9CO0lBRTVCdEosSUFBSSxFQUFFLFVBRnNCO0lBRzVCMUQsRUFBRSxFQUFHLG9CQUFtQm9HLFVBQVUsQ0FBQ2tCLEdBQUksRUFIWDtJQUk1QjNELElBQUksRUFBRSxPQUpzQjtJQUs1QnZCLEdBQUcsRUFBRyxvQkFBbUJnRSxVQUFVLENBQUNrQixHQUFJLFFBTFo7SUFNNUI0RyxZQUFZLEVBQUUsQ0FBQ3ZCLFVBQVUsQ0FBQ2xGLFNBQVosSUFBeUIsQ0FBQ3hLLHVFQUFzQnFNO0VBTmxDLENBQTlCOztFQVNBLElBQUloTSw0REFBYyxNQUFNLENBQUNnUSxZQUF6QixFQUF1QztJQUNyQ1csT0FBTyxDQUFDUixTQUFSLEdBQW9CLE1BQU1qQiw4RUFBUSxDQUFDO01BQUVrQixZQUFZLEVBQUVNLG1CQUFoQjtNQUFxQ0wsWUFBWSxFQUFFO0lBQW5ELENBQUQsQ0FBbEM7RUFDRDs7RUFFRCxJQUFJdEQsZ0VBQWMsQ0FBQyxTQUFELENBQWxCLEVBQStCO0lBQzdCeEwsUUFBUSxDQUFDa08sUUFBVCxDQUFtQjNELElBQW5CLENBQXdCNkUsT0FBeEI7RUFDRCxDQUZELE1BRU8sSUFBSXJCLGlCQUFpQixJQUFJLENBQUNVLFlBQTFCLEVBQXdDO0lBQzdDek8sUUFBUSxDQUFDa08sUUFBVCxDQUFtQjNELElBQW5CLG1CQUNLNkUsT0FETDtNQUVFN0wsR0FBRyxFQUFFNkwsT0FBTyxDQUFDN0wsR0FBUixHQUFjLFVBRnJCO01BR0VxTCxTQUFTLEVBQUUsTUFBTWpCLDhFQUFRLENBQUM7UUFBRWtCLFlBQVksRUFBRU07TUFBaEIsQ0FBRDtJQUgzQjtFQUtEOztFQUVELE9BQU9uUCxRQUFQO0FBQ0Q7QUFFTSxTQUFTc1AsZ0JBQVQsQ0FBMEIxSyxJQUExQixFQUE4QzJLLFFBQTlDLEVBQTBFO0VBQy9FLElBQUl0SyxJQUFrQixHQUFHO0lBQUVILElBQUksRUFBRTtFQUFSLENBQXpCLENBRCtFLENBRy9FOztFQUNBLEtBQUssTUFBTTBLLEtBQVgsSUFBb0I1SyxJQUFJLENBQUNzSixRQUF6QixFQUFvQztJQUNsQyxJQUFJc0IsS0FBSyxDQUFDck8sRUFBTixDQUFVc08sT0FBVixDQUFrQkYsUUFBbEIsSUFBOEIsQ0FBbEMsRUFBcUM7TUFDbkNDLEtBQUssQ0FBQ3JCLE1BQU4sR0FBZSxJQUFmO01BQ0FsSixJQUFJLEdBQUd1SyxLQUFQO01BQ0E7SUFDRDtFQUNGOztFQUVELE9BQU87SUFDTDVLLElBQUksRUFBRUEsSUFERDtJQUVMSyxJQUFJLEVBQUVBO0VBRkQsQ0FBUDtBQUlEO0FBQ00sU0FBU3lLLHVCQUFULENBQWlDSCxRQUFqQyxFQUE2RDtFQUNsRSxNQUFNM0ssSUFBSSxHQUFHb0IsYUFBYSxDQUN4QjtJQUNFZ0UsTUFBTSxFQUFFLEVBRFY7SUFFRTJGLFNBQVMsRUFBRSxLQUZiO0lBR0VDLGFBQWEsRUFBRSxFQUhqQjtJQUlFQyxlQUFlLEVBQUUsS0FKbkI7SUFLRUMsUUFBUSxFQUFFLEVBTFo7SUFNRTNPLEVBQUUsRUFBRSxDQU5OO0lBT0VzSCxHQUFHLEVBQUUsR0FQUDtJQVFFd0IsU0FBUyxFQUFFLEtBUmI7SUFTRThGLFFBQVEsRUFBRTtNQUFFQyxRQUFRLEVBQUUsYUFBWjtNQUEyQkMsYUFBYSxFQUFFO0lBQTFDLENBVFo7SUFVRW5OLElBQUksRUFBRSxTQVZSO0lBV0VvTixLQUFLLEVBQUUsQ0FYVDtJQVlFQyxRQUFRLEVBQUUsS0FaWjtJQWFFMUksSUFBSSxFQUFFb0csYUFiUjtJQWNFdUMsUUFBUSxFQUFFdkMsYUFkWjtJQWVFd0MsV0FBVyxFQUFFLCtCQWZmO0lBZ0JFOU0sR0FBRyxFQUFFLEVBaEJQO0lBaUJFK00sSUFBSSxFQUFFLEVBakJSO0lBa0JFQyxnQkFBZ0IsRUFBRTtFQWxCcEIsQ0FEd0IsRUFxQnhCO0lBQ0VuTixJQUFJLEVBQUU7TUFDSmpDLEVBQUUsRUFBRSxHQURBO01BRUpzRyxJQUFJLEVBQUU4RCxnRUFGRjtNQUdKekksSUFBSSxFQUFFLEVBSEY7TUFJSlQsSUFBSSxFQUFFO1FBQ0pnTCxNQUFNLEVBQUU7VUFDTnZLLElBQUksRUFBRSxFQURBO1VBRU5TLEdBQUcsRUFBRTtRQUZDLENBREo7UUFLSkosV0FBVyxFQUFFLEVBTFQ7UUFNSmIsS0FBSyxFQUFFLENBQUM7VUFBRVEsSUFBSSxFQUFFLEVBQVI7VUFBWVMsR0FBRyxFQUFFO1FBQWpCLENBQUQsQ0FOSDtRQU9KTixLQUFLLEVBQUU7VUFDTG1LLEtBQUssRUFBRSxFQURGO1VBRUxsSyxLQUFLLEVBQUU7UUFGRixDQVBIO1FBV0pvSyxXQUFXLEVBQUUsRUFYVDtRQVlKQyxPQUFPLEVBQUUsRUFaTDtRQWFKQyxPQUFPLEVBQUU7TUFiTCxDQUpGO01BbUJKYyxRQUFRLEVBQUUsRUFuQk47TUFvQkpyTSxNQUFNLEVBQUUsRUFwQko7TUFxQkprTCxPQUFPLEVBQUU7SUFyQkw7RUFEUixDQXJCd0IsQ0FBMUI7RUFnREEsT0FBT21DLGdCQUFnQixDQUFDMUssSUFBRCxFQUFPMkssUUFBUCxDQUF2QjtBQUNEOztBQUVELFNBQVNoQixhQUFULENBQXVCRCxRQUF2QixFQUEyRDtFQUN6RCxPQUNFQSxRQUFRLENBQUN4QyxJQUFULENBQWUwRSxPQUFELElBQWE7SUFDekIsT0FBT0EsT0FBTyxDQUFDL0ksSUFBUixLQUFpQixXQUF4QjtFQUNELENBRkQsTUFFT2dKLFNBSFQ7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TU0sTUFBTUMsY0FBYyxHQUFJM1EsS0FBRCxJQUE2QjtFQUN6RCxNQUFNNFEsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVzdRLEtBQUssQ0FBQ0ssV0FBakIsRUFBOEIsR0FBOUIsQ0FBZDtFQUVBLE9BQU9MLEtBQUssQ0FBQ0ksV0FBTixDQUFrQjJLLE1BQWxCLENBQTBCdkQsVUFBRCxJQUFvQztJQUNsRSxPQUFPb0osS0FBSyxDQUFDRSxJQUFOLENBQVd0SixVQUFVLENBQUN6RSxJQUF0QixLQUErQjZOLEtBQUssQ0FBQ0UsSUFBTixDQUFXdEosVUFBVSxDQUFDdUksUUFBdEIsQ0FBL0IsSUFBa0VhLEtBQUssQ0FBQ0UsSUFBTixDQUFXdEosVUFBVSxDQUFDRSxJQUF0QixDQUF6RTtFQUNELENBRk0sQ0FBUDtBQUdELENBTk07QUFRQSxNQUFNNUgsb0JBQW9CLEdBQUlFLEtBQUQsSUFBNkI7RUFDL0QsTUFBTTRRLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVc3USxLQUFLLENBQUNNLHlCQUFqQixFQUE0QyxHQUE1QyxDQUFkO0VBRUEsT0FBT04sS0FBSyxDQUFDRyxPQUFOLENBQWM0SyxNQUFkLENBQXNCckQsSUFBRCxJQUFnQztJQUMxRCxPQUFPa0osS0FBSyxDQUFDRSxJQUFOLENBQVdwSixJQUFJLENBQUMzRSxJQUFoQixDQUFQO0VBQ0QsQ0FGTSxDQUFQO0FBR0QsQ0FOTTtBQVFBLE1BQU02RCxhQUFhLEdBQUcsQ0FBQzVHLEtBQUQsRUFBMEIrUSxZQUExQixLQUE4RTtFQUN6RyxJQUFJL1EsS0FBSyxDQUFDd0gsVUFBTixDQUFpQmtCLEdBQWpCLEtBQXlCcUksWUFBN0IsRUFBMkM7SUFDekMsT0FBTy9RLEtBQUssQ0FBQ3dILFVBQWI7RUFDRDs7RUFDRCxPQUFPLEVBQVA7QUFDRCxDQUxNO0FBT0EsTUFBTVgsaUJBQWlCLEdBQUcsQ0FBQzdHLEtBQUQsRUFBMEIwSCxJQUExQixLQUFpRTtFQUNoRyxJQUFJMUgsS0FBSyxDQUFDeUgsY0FBTixDQUFxQnJHLEVBQXJCLEtBQTRCc0csSUFBaEMsRUFBc0M7SUFDcEMsT0FBTzFILEtBQUssQ0FBQ3lILGNBQWI7RUFDRDs7RUFFRCxPQUFPLEVBQVA7QUFDRCxDQU5NO0FBUUEsTUFBTXVKLHlCQUF5QixHQUFJaFIsS0FBRCxJQUE2QkEsS0FBSyxDQUFDSyxXQUFyRTtBQUNBLE1BQU00USx3QkFBd0IsR0FBSWpSLEtBQUQsSUFBNkJBLEtBQUssQ0FBQ2tSLFVBQXBFO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUluUixLQUFELElBQTZCQSxLQUFLLENBQUNvUixnQkFBL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDUDtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFrQk8sTUFBTWtCLG9CQUFvQixHQUFHLENBQUM7RUFDbkNDLEtBQUssR0FBRyxFQUQyQjtFQUVuQ0MsUUFBUSxHQUFHLFdBRndCO0VBR25DQyxZQUFZLEdBQUcsS0FIb0I7RUFJbkNDLE1BQU0sR0FBR2xCLHFEQUFlbUI7QUFKVyxDQUFELEtBS3JCO0VBQ2JDLFdBQVc7RUFFWCxNQUFNQyxRQUFRLEdBQUd0Qix3REFBVyxDQUFDeEYsZ0RBQUksQ0FBQ3dHLEtBQUQsRUFBUUMsUUFBUixFQUFrQkMsWUFBbEIsQ0FBTCxDQUE1QjtFQUNBLE1BQU07SUFBRWpTLFNBQUY7SUFBYXNTO0VBQWIsSUFBdUJDLGNBQWMsRUFBM0M7RUFDQSxNQUFNQyxpQkFBaUIsR0FBRzdHLHFEQUFXLENBQUMwRyxRQUFELEVBQVdILE1BQVgsQ0FBckM7RUFFQSxPQUFPO0lBQ0xsUyxTQURLO0lBRUxzUyxLQUZLO0lBR0wzUyxPQUFPLEVBQUU2UztFQUhKLENBQVA7QUFLRCxDQWpCTTtBQW1CQSxNQUFNQyxTQUFTLEdBQUcsTUFBdUI7RUFDOUNMLFdBQVc7RUFFWCxPQUFPckIsd0RBQVcsQ0FBQ1EsaURBQUQsQ0FBbEI7QUFDRCxDQUpNO0FBTUEsTUFBTW1CLFlBQVksR0FBSTlSLEVBQUQsSUFBMkM7RUFDckV3UixXQUFXO0VBQ1hPLGVBQWUsQ0FBQy9SLEVBQUQsQ0FBZjtFQUVBLE9BQU9tUSx3REFBVyxDQUFFdlIsS0FBRCxJQUFvQ2dTLHNEQUFVLENBQUNoUyxLQUFELEVBQVFvQixFQUFSLENBQS9DLENBQWxCO0FBQ0QsQ0FMTTtBQU9BLE1BQU1nUyxZQUFZLEdBQUcsTUFBcUI7RUFDL0NSLFdBQVc7RUFFWCxPQUFPckIsd0RBQVcsQ0FBQ2MsMERBQUQsQ0FBbEI7QUFDRCxDQUpNO0FBTUEsTUFBTWdCLFVBQVUsR0FBRyxNQUFNO0VBQzlCLE1BQU1sTSxRQUFRLEdBQUdtSyx3REFBVyxFQUE1QjtFQUNBLE9BQU8sQ0FBQ2xRLEVBQUQsRUFBYXFNLE9BQWIsRUFBK0I2RixVQUEvQixLQUF3RG5NLFFBQVEsQ0FBQ3lLLGlEQUFPLENBQUM7SUFBRXhRLEVBQUY7SUFBTXFNLE9BQU47SUFBZTZGO0VBQWYsQ0FBRCxDQUFSLENBQXZFO0FBQ0QsQ0FITTtBQUtBLE1BQU1DLFlBQVksR0FBRyxNQUFNO0VBQ2hDLE1BQU1wTSxRQUFRLEdBQUdtSyx3REFBVyxFQUE1QjtFQUVBLE9BQVFsUSxFQUFELElBQWdCK0YsUUFBUSxDQUFDMEssbURBQVMsQ0FBQ3pRLEVBQUQsQ0FBVixDQUEvQjtBQUNELENBSk07QUFNQSxNQUFNb1MsMkJBQTJCLEdBQUcsTUFBTTtFQUMvQyxNQUFNVixLQUFLLEdBQUd2Qix3REFBVyxDQUFDVyw4REFBa0IsQ0FBQ1AsbUVBQUQsQ0FBbkIsQ0FBekI7RUFDQSxPQUFPbUIsS0FBSyxLQUFLLElBQWpCO0FBQ0QsQ0FITTtBQUtBLE1BQU1DLGNBQWMsR0FBRyxNQUFNO0VBQ2xDLE1BQU12UyxTQUFTLEdBQUcrUSx3REFBVyxDQUFDVSxrRUFBc0IsQ0FBQ1IseURBQUQsQ0FBdkIsQ0FBN0I7RUFDQSxNQUFNcUIsS0FBSyxHQUFHdkIsd0RBQVcsQ0FBQ1csOERBQWtCLENBQUNULHlEQUFELENBQW5CLENBQXpCO0VBRUEsT0FBTztJQUFFalIsU0FBRjtJQUFhc1M7RUFBYixDQUFQO0FBQ0QsQ0FMTTtBQU9BLE1BQU1ZLHFCQUFxQixHQUFHLE1BQU07RUFDekMsTUFBTWxULFNBQVMsR0FBRytRLHdEQUFXLENBQUNVLGtFQUFzQixDQUFDUCw2REFBRCxDQUF2QixDQUE3QjtFQUNBLE1BQU1vQixLQUFLLEdBQUd2Qix3REFBVyxDQUFDVyw4REFBa0IsQ0FBQ1IsNkRBQUQsQ0FBbkIsQ0FBekI7RUFFQSxPQUFPO0lBQUVsUixTQUFGO0lBQWFzUztFQUFiLENBQVA7QUFDRCxDQUxNO0FBT0EsTUFBTWEsZ0JBQWdCLEdBQUcsTUFBTTtFQUNwQyxNQUFNQyxZQUFZLEdBQUdyQyx3REFBVyxDQUFDVSxrRUFBc0IsQ0FBQ0wsd0RBQUQsQ0FBdkIsQ0FBaEM7RUFDQSxNQUFNa0IsS0FBSyxHQUFHdkIsd0RBQVcsQ0FBQ1csOERBQWtCLENBQUNOLHdEQUFELENBQW5CLENBQXpCO0VBRUEsT0FBTztJQUFFZ0MsWUFBRjtJQUFnQmQ7RUFBaEIsQ0FBUDtBQUNELENBTE07QUFPQSxNQUFNZSxrQkFBa0IsR0FBRyxNQUFNO0VBQ3RDLE1BQU1DLGNBQWMsR0FBR3ZDLHdEQUFXLENBQUNVLGtFQUFzQixDQUFDSiwwREFBRCxDQUF2QixDQUFsQztFQUNBLE1BQU1pQixLQUFLLEdBQUd2Qix3REFBVyxDQUFDVyw4REFBa0IsQ0FBQ0wsMERBQUQsQ0FBbkIsQ0FBekI7RUFFQSxPQUFPO0lBQUVpQyxjQUFGO0lBQWtCaEI7RUFBbEIsQ0FBUDtBQUNELENBTE0sRUFPUDs7QUFDTyxNQUFNRixXQUFXLEdBQUcsTUFBTTtFQUMvQixNQUFNekwsUUFBUSxHQUFHbUssd0RBQVcsRUFBNUI7RUFDQSxNQUFNeUMsWUFBWSxHQUFHeEMsd0RBQVcsQ0FBQ1kscUVBQXlCLENBQUNWLHlEQUFELENBQTFCLENBQWhDO0VBRUFKLGdEQUFTLENBQUMsTUFBTTtJQUNkMEMsWUFBWSxJQUFJNU0sUUFBUSxDQUFDc0ssa0RBQVEsRUFBVCxDQUF4QjtFQUNELENBRlEsRUFFTixFQUZNLENBQVQsQ0FKK0IsQ0FNdkI7QUFDVCxDQVBNO0FBU0EsTUFBTTBCLGVBQWUsR0FBSS9SLEVBQUQsSUFBZ0I7RUFDN0MsTUFBTStGLFFBQVEsR0FBR21LLHdEQUFXLEVBQTVCO0VBQ0EsTUFBTXpRLE1BQU0sR0FBRzBRLHdEQUFXLENBQUV2UixLQUFELElBQW9DZ1Msc0RBQVUsQ0FBQ2hTLEtBQUQsRUFBUW9CLEVBQVIsQ0FBL0MsQ0FBMUI7RUFDQSxNQUFNNFMsYUFBYSxHQUFHLENBQUN6Qyx3REFBVyxDQUFDVSxrRUFBc0IsQ0FBQ1AsNkRBQUQsQ0FBdkIsQ0FBbEM7RUFDQSxNQUFNdUMsV0FBVyxHQUFHRCxhQUFhLElBQUluVCxNQUFqQixJQUEyQixDQUFDQSxNQUFNLENBQUN3SCxPQUF2RDtFQUVBZ0osZ0RBQVMsQ0FBQyxNQUFNO0lBQ2Q0QyxXQUFXLElBQUk5TSxRQUFRLENBQUN1SyxzREFBWSxDQUFDdFEsRUFBRCxDQUFiLENBQXZCO0VBQ0QsQ0FGUSxFQUVOLENBQUNQLE1BQUQsQ0FGTSxDQUFULENBTjZDLENBUS9CO0FBQ2YsQ0FUTTtBQVdBLE1BQU1xVCxjQUFjLEdBQUcsTUFBTTtFQUNsQyxNQUFNL00sUUFBUSxHQUFHbUssd0RBQVcsRUFBNUI7RUFDQSxNQUFNNkMsV0FBVyxHQUFHNUMsd0RBQVcsQ0FBQ2EseURBQUQsQ0FBL0I7RUFFQSxPQUFPO0lBQ0wrQixXQURLO0lBRUxyQyxjQUFjLEVBQUdzQyxDQUFELElBQThCak4sUUFBUSxDQUFDMkssd0RBQWMsQ0FBQ3NDLENBQUQsQ0FBZjtFQUZqRCxDQUFQO0FBSUQsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklQO0FBSUE7QUFFQTtBQUVPLE1BQU1JLFVBQVUsR0FBSXhVLEtBQUQsSUFBb0NBLEtBQUssQ0FBQ0csT0FBN0Q7QUFFQSxNQUFNc1UsV0FBVyxHQUFHSixnRUFBYyxDQUFDRyxVQUFELEVBQWEsQ0FBQztFQUFFRTtBQUFGLENBQUQsS0FBZUEsS0FBNUIsQ0FBbEM7QUFFQSxNQUFNdEMsaUJBQWlCLEdBQUdpQyxnRUFBYyxDQUFDRyxVQUFELEVBQWEsQ0FBQztFQUFFRztBQUFGLENBQUQsS0FBa0JBLFFBQVEsQ0FBQ1IsV0FBeEMsQ0FBeEM7QUFFQSxNQUFNO0VBQUVwQyxTQUFGO0VBQWFDO0FBQWIsSUFBNEJ1QyxpRUFBQSxDQUE0QkUsV0FBNUIsQ0FBbEM7O0FBRVAsTUFBTUksZUFBZSxHQUFJckMsUUFBRCxJQUN0QjZCLGdFQUFjLENBQUN0QyxTQUFELEVBQWE1UixPQUFELElBQ3hCQSxPQUFPLENBQUM0SyxNQUFSLENBQWdCbEssTUFBRCxJQUFhMlIsUUFBUSxLQUFLLFdBQWIsR0FBMkIzUixNQUFNLENBQUNpVSxXQUFsQyxHQUFnRCxDQUFDalUsTUFBTSxDQUFDa1UsTUFBcEYsQ0FEWSxDQURoQjs7QUFLQSxNQUFNQyxvQkFBb0IsR0FBRyxDQUFDeEMsUUFBRCxFQUFtQkMsWUFBbkIsS0FDM0I0QixnRUFBYyxDQUFDUSxlQUFlLENBQUNyQyxRQUFELENBQWhCLEVBQTZCclMsT0FBRCxJQUN4Q0EsT0FBTyxDQUFDNEssTUFBUixDQUFnQmxLLE1BQUQsSUFBWTRSLFlBQVksS0FBSyxLQUFqQixJQUEwQjVSLE1BQU0sQ0FBQzZHLElBQVAsS0FBZ0IrSyxZQUFyRSxDQURZLENBRGhCOztBQUtBLE1BQU13QyxhQUFhLEdBQUlDLFFBQUQsSUFDcEJiLGdFQUFjLENBQUN0QyxTQUFELEVBQWE1UixPQUFELElBQWE7RUFDckMsSUFBSStVLFFBQVEsS0FBSyxFQUFqQixFQUFxQjtJQUNuQixPQUFPLEVBQVA7RUFDRDs7RUFFRCxPQUFPL1UsT0FBTyxDQUFDNEssTUFBUixDQUFnQmxLLE1BQUQsSUFBWTtJQUNoQyxNQUFNc1UsTUFBZ0IsR0FBRyxFQUF6Qjs7SUFDQSxJQUFJdFUsTUFBTSxDQUFDa0MsSUFBWCxFQUFpQjtNQUNmb1MsTUFBTSxDQUFDM0ssSUFBUCxDQUFZM0osTUFBTSxDQUFDa0MsSUFBUCxDQUFZaUksV0FBWixFQUFaO0lBQ0Q7O0lBRUQsSUFBSW5LLE1BQU0sQ0FBQ3VVLE9BQVgsRUFBb0I7TUFDbEJELE1BQU0sQ0FBQzNLLElBQVAsQ0FBWTNKLE1BQU0sQ0FBQ3VVLE9BQVAsQ0FBZXBLLFdBQWYsRUFBWjtJQUNEOztJQUVELE9BQU9tSyxNQUFNLENBQUNFLElBQVAsQ0FBYUMsQ0FBRCxJQUFPQSxDQUFDLENBQUMvRyxRQUFGLENBQVcyRyxRQUFRLENBQUNsSyxXQUFULEVBQVgsQ0FBbkIsQ0FBUDtFQUNELENBWE0sQ0FBUDtBQVlELENBakJhLENBRGhCOztBQW9CTyxNQUFNZSxJQUFJLEdBQUcsQ0FBQ21KLFFBQUQsRUFBbUIxQyxRQUFuQixFQUFxQ0MsWUFBckMsS0FDbEI0QixnRUFBYyxDQUNaVyxvQkFBb0IsQ0FBQ3hDLFFBQUQsRUFBV0MsWUFBWCxDQURSLEVBRVp3QyxhQUFhLENBQUNDLFFBQUQsQ0FGRCxFQUdaLENBQUNLLGVBQUQsRUFBa0JDLGVBQWxCLEtBQXNDO0VBQ3BDLE9BQU9OLFFBQVEsS0FBSyxFQUFiLEdBQWtCSyxlQUFsQixHQUFvQ0MsZUFBM0M7QUFDRCxDQUxXLENBRFQ7QUFTQSxNQUFNbkQsa0JBQWtCLEdBQUdnQyxnRUFBYyxDQUFDdEMsU0FBRCxFQUFhNVIsT0FBRCxJQUMxREEsT0FBTyxHQUNIQSxPQUFPLENBQ0o0SyxNQURILENBQ1cwSyxDQUFELElBQU9DLE9BQU8sQ0FBQ0QsQ0FBQyxDQUFDM0MsS0FBSCxDQUR4QixFQUVHblIsR0FGSCxDQUdLOFQsQ0FBRCxLQUFxQjtFQUNuQkUsUUFBUSxFQUFFRixDQUFDLENBQUNyVSxFQURPO0VBRW5Cd1UsU0FBUyxFQUFFSCxDQUFDLENBQUUzQztBQUZLLENBQXJCLENBSEosQ0FERyxHQVNILEVBVjBDLENBQXpDLEVBYVA7O0FBQ08sTUFBTStDLGFBQWEsR0FBSUMsVUFBRCxJQUMzQnpCLGdFQUFjLENBQUNHLFVBQUQsRUFBYSxDQUFDO0VBQUV1QixRQUFRLEdBQUc7QUFBYixDQUFELEtBQXVCQSxRQUFRLENBQUNELFVBQUQsQ0FBNUMsQ0FEVDtBQUdBLE1BQU03RCxzQkFBc0IsR0FBSTZELFVBQUQsSUFDcEN6QixnRUFBYyxDQUFDd0IsYUFBYSxDQUFDQyxVQUFELENBQWQsRUFBNkJFLE9BQUQsSUFBYSxDQUFBQSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUMsTUFBVCxNQUFvQjNCLHlEQUE3RCxDQURUO0FBR0EsTUFBTXBDLGtCQUFrQixHQUFJNEQsVUFBRCxJQUNoQ3pCLGdFQUFjLENBQUN3QixhQUFhLENBQUNDLFVBQUQsQ0FBZCxFQUE2QkUsT0FBRCxJQUN4QyxDQUFBQSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUMsTUFBVCxNQUFvQjNCLDBEQUFwQixHQUE2QzBCLE9BQTdDLGFBQTZDQSxPQUE3Qyx1QkFBNkNBLE9BQU8sQ0FBRWxELEtBQXRELEdBQThELElBRGxELENBRFQ7QUFLQSxNQUFNWCx5QkFBeUIsR0FBSTJELFVBQUQsSUFDdkN6QixnRUFBYyxDQUFDd0IsYUFBYSxDQUFDQyxVQUFELENBQWQsRUFBNkJFLE9BQUQsSUFBYUEsT0FBTyxLQUFLdEYsU0FBckQsQ0FEVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRlA7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFTyxTQUFTaFIsaUJBQVQsR0FBd0Q7RUFDN0QsTUFBTStXLE1BQU0sR0FBR3JELGdFQUFZLEVBQTNCO0VBQ0EsTUFBTTtJQUFFNVM7RUFBRixJQUFnQnVTLGtFQUFjLEVBQXBDO0VBQ0EsTUFBTXRQLEtBQUssR0FBRytTLHFEQUFRLEVBQXRCOztFQUVBLElBQUloVyxTQUFTLElBQUlpVyxNQUFNLENBQUNwVixNQUFQLEtBQWtCLENBQW5DLEVBQXNDO0lBQ3BDLE9BQU8sSUFBUDtFQUNEOztFQUVELG9CQUNFLHVEQUFDLGdEQUFEO0lBQ0UsY0FBWW5DLG9HQURkO0lBRUUsUUFBUSxFQUFDLFNBRlg7SUFHRSxRQUFRLEVBQUMsZ0NBSFg7SUFJRSxHQUFHLEVBQUMsb0VBSk47SUFBQSx1QkFNRTtNQUFBLG9DQUNFO1FBQUE7TUFBQSxFQURGLHVGQU1FLHVEQUFDLDZDQUFEO1FBQ0UsS0FBSyxFQUFFdVgsTUFEVDtRQUVFLFNBQVMsRUFBRTVYLDZDQUFJO0FBQ3pCO0FBQ0EsV0FKUTtRQUtFLFVBQVUsRUFBR2lVLEtBQUQsaUJBQ1Y7VUFDRSxTQUFTLEVBQUVqVSw2Q0FBSTtBQUM3Qiw4QkFBOEI0RSxLQUFLLENBQUNRLE9BQU4sQ0FBY0ssRUFBRztBQUMvQyxlQUhZO1VBQUEsdUJBS0Usd0RBQUMsd0RBQUQ7WUFBaUIsT0FBTyxFQUFDLElBQXpCO1lBQThCLE9BQU8sRUFBQyxZQUF0QztZQUFtRCxLQUFLLEVBQUMsUUFBekQ7WUFBQSx3QkFDRTtjQUFBLFVBQVN3TyxLQUFLLENBQUM2QztZQUFmLEVBREYsZUFFRSx1REFBQyw2REFBRDtjQUNFLE1BQU0sRUFBRWlCLG1DQUFtQyxDQUFDOUQsS0FBSyxDQUFDOEMsU0FBUCxDQUQ3QztjQUVFLFNBQVMsRUFBRS9XLDZDQUFJO0FBQ2pDO0FBQ0E7WUFKZ0IsRUFGRjtVQUFBO1FBTEY7TUFOSixFQU5GO0lBQUE7RUFORixFQURGO0FBdUNEOztBQUVELFNBQVMrWCxtQ0FBVCxDQUE2Q0MsSUFBN0MsRUFBb0U7RUFDbEUsUUFBUUEsSUFBUjtJQUNFLEtBQUtULDJFQUFMO01BQ0UsT0FBT0Msd0VBQVA7O0lBQ0YsS0FBS0QsMkVBQUw7TUFDRSxPQUFPQyx3RUFBUDs7SUFDRixLQUFLRCw0RUFBTDtNQUNFLE9BQU9DLHlFQUFQOztJQUNGO01BQ0UsT0FBT0Esd0VBQVA7RUFSSjtBQVVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvTmV3RGF0YVNvdXJjZVBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYnVpbGRDYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL25hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL3N0YXRlL2hvb2tzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvY29tcG9uZW50cy9QbHVnaW5zRXJyb3JzSW5mby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmlhbCgpIHtcbiAgY29uc3QgZXhwaXJ5ID0gY29uZmlnLmxpY2Vuc2VJbmZvPy50cmlhbEV4cGlyeTtcbiAgcmV0dXJuICEhKGV4cGlyeSAmJiBleHBpcnkgPiAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFRyaWFsID0gKCkgPT4gaXNUcmlhbCgpICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBHcmFmYW5hVGhlbWUyLCBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDYXJkLCBMaW5rQnV0dG9uLCBMaXN0LCBQbHVnaW5TaWduYXR1cmVCYWRnZSwgRmlsdGVySW5wdXQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgUGx1Z2luc0Vycm9yc0luZm8gfSBmcm9tICcuLi9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luc0Vycm9yc0luZm8nO1xuXG5pbXBvcnQgeyBhZGREYXRhU291cmNlLCBsb2FkRGF0YVNvdXJjZVBsdWdpbnMgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0RGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVBsdWdpbnMgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbCgpLFxuICAgIHBsdWdpbnM6IGdldERhdGFTb3VyY2VQbHVnaW5zKHN0YXRlLmRhdGFTb3VyY2VzKSxcbiAgICBzZWFyY2hRdWVyeTogc3RhdGUuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSxcbiAgICBjYXRlZ29yaWVzOiBzdGF0ZS5kYXRhU291cmNlcy5jYXRlZ29yaWVzLFxuICAgIGlzTG9hZGluZzogc3RhdGUuZGF0YVNvdXJjZXMuaXNMb2FkaW5nRGF0YVNvdXJjZXMsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYWRkRGF0YVNvdXJjZSxcbiAgbG9hZERhdGFTb3VyY2VQbHVnaW5zLFxuICBzZXREYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5LFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbnR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuY2xhc3MgTmV3RGF0YVNvdXJjZVBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMubG9hZERhdGFTb3VyY2VQbHVnaW5zKCk7XG4gIH1cblxuICBvbkRhdGFTb3VyY2VUeXBlQ2xpY2tlZCA9IChwbHVnaW46IERhdGFTb3VyY2VQbHVnaW5NZXRhKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5hZGREYXRhU291cmNlKHBsdWdpbik7XG4gIH07XG5cbiAgb25TZWFyY2hRdWVyeUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXREYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICByZW5kZXJQbHVnaW5zKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10sIGlkPzogc3RyaW5nKSB7XG4gICAgaWYgKCFwbHVnaW5zIHx8ICFwbHVnaW5zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0XG4gICAgICAgIGl0ZW1zPXtwbHVnaW5zfVxuICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICA+IGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIGdldEl0ZW1LZXk9eyhpdGVtKSA9PiBpdGVtLmlkLnRvU3RyaW5nKCl9XG4gICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG4gICAgICAgICAgPERhdGFTb3VyY2VUeXBlQ2FyZFxuICAgICAgICAgICAgcGx1Z2luPXtpdGVtfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkRhdGFTb3VyY2VUeXBlQ2xpY2tlZChpdGVtKX1cbiAgICAgICAgICAgIG9uTGVhcm5Nb3JlQ2xpY2s9e3RoaXMub25MZWFybk1vcmVDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2lkfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgb25MZWFybk1vcmVDbGljayA9IChldnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICByZW5kZXJDYXRlZ29yaWVzKCkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtZGF0YS1zb3VyY2UtY2F0ZWdvcnlcIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWRhdGEtc291cmNlLWNhdGVnb3J5X19oZWFkZXJcIiBpZD17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnkudGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclBsdWdpbnMoY2F0ZWdvcnkucGx1Z2lucywgY2F0ZWdvcnkuaWQpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtZGF0YS1zb3VyY2UtbW9yZVwiPlxuICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dyYWZhbmEuY29tL3BsdWdpbnM/dHlwZT1kYXRhc291cmNlJnV0bV9zb3VyY2U9Z3JhZmFuYV9hZGRfZHNcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBGaW5kIG1vcmUgZGF0YSBzb3VyY2UgcGx1Z2lucyBvbiBncmFmYW5hLmNvbVxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIGlzTG9hZGluZywgc2VhcmNoUXVlcnksIHBsdWdpbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICA8RmlsdGVySW5wdXQgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17dGhpcy5vblNlYXJjaFF1ZXJ5Q2hhbmdlfSBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBuYW1lIG9yIHR5cGVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJfX3NwYWNlclwiIC8+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPVwiZGF0YXNvdXJjZXNcIiBmaWxsPVwib3V0bGluZVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpY29uPVwiYXJyb3ctbGVmdFwiPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7IXNlYXJjaFF1ZXJ5ICYmIDxQbHVnaW5zRXJyb3JzSW5mbyAvPn1cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3NlYXJjaFF1ZXJ5ICYmIHRoaXMucmVuZGVyUGx1Z2lucyhwbHVnaW5zKX1cbiAgICAgICAgICAgIHshc2VhcmNoUXVlcnkgJiYgdGhpcy5yZW5kZXJDYXRlZ29yaWVzKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmludGVyZmFjZSBEYXRhU291cmNlVHlwZUNhcmRQcm9wcyB7XG4gIHBsdWdpbjogRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIG9uTGVhcm5Nb3JlQ2xpY2s6IChldnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZDtcbn1cblxuY29uc3QgRGF0YVNvdXJjZVR5cGVDYXJkOiBGQzxEYXRhU291cmNlVHlwZUNhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwbHVnaW4sIG9uTGVhcm5Nb3JlQ2xpY2sgfSA9IHByb3BzO1xuICBjb25zdCBpc1BoYW50b20gPSBwbHVnaW4ubW9kdWxlID09PSAncGhhbnRvbSc7XG4gIGNvbnN0IG9uQ2xpY2sgPSAhaXNQaGFudG9tICYmICFwbHVnaW4udW5saWNlbnNlZCA/IHByb3BzLm9uQ2xpY2sgOiAoKSA9PiB7fTtcbiAgLy8gZmluZCBmaXJzdCBwbHVnaW4gaW5mbyBsaW5rXG4gIGNvbnN0IGxlYXJuTW9yZUxpbmsgPSBwbHVnaW4uaW5mbz8ubGlua3M/Lmxlbmd0aCA+IDAgPyBwbHVnaW4uaW5mby5saW5rc1swXSA6IG51bGw7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjeChzdHlsZXMuY2FyZCwgJ2NhcmQtcGFyZW50Jyl9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPENhcmQuSGVhZGluZ1xuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuQWRkRGF0YVNvdXJjZS5kYXRhU291cmNlUGx1Z2luc1YyKHBsdWdpbi5uYW1lKX1cbiAgICAgID5cbiAgICAgICAge3BsdWdpbi5uYW1lfVxuICAgICAgPC9DYXJkLkhlYWRpbmc+XG4gICAgICA8Q2FyZC5GaWd1cmUgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5maWd1cmV9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz17cGx1Z2luLmluZm8ubG9nb3Muc21hbGx9IGFsdD1cIlwiIC8+XG4gICAgICA8L0NhcmQuRmlndXJlPlxuICAgICAgPENhcmQuRGVzY3JpcHRpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntwbHVnaW4uaW5mby5kZXNjcmlwdGlvbn08L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICB7IWlzUGhhbnRvbSAmJiAoXG4gICAgICAgIDxDYXJkLk1ldGEgY2xhc3NOYW1lPXtzdHlsZXMubWV0YX0+XG4gICAgICAgICAgPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz5cbiAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICApfVxuICAgICAgPENhcmQuQWN0aW9ucyBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cbiAgICAgICAge2xlYXJuTW9yZUxpbmsgJiYgKFxuICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGhyZWY9e2Ake2xlYXJuTW9yZUxpbmsudXJsfT91dG1fc291cmNlPWdyYWZhbmFfYWRkX2RzYH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkxlYXJuTW9yZUNsaWNrfVxuICAgICAgICAgICAgaWNvbj1cImV4dGVybmFsLWxpbmstYWx0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2Ake3BsdWdpbi5uYW1lfSwgbGVhcm4gbW9yZS5gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsZWFybk1vcmVMaW5rLm5hbWV9XG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9DYXJkLkFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgaGVhZGluZzogY3NzKHtcbiAgICAgIGZvbnRTaXplOiB0aGVtZS52MS50eXBvZ3JhcGh5LmhlYWRpbmcuaDUsXG4gICAgICBmb250V2VpZ2h0OiAnaW5oZXJpdCcsXG4gICAgfSksXG4gICAgZmlndXJlOiBjc3Moe1xuICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnMHB4JyxcbiAgICAgICc+IGltZyc6IHtcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG1ldGE6IGNzcyh7XG4gICAgICBtYXJnaW5Ub3A6ICc2cHgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSksXG4gICAgZGVzY3JpcHRpb246IGNzcyh7XG4gICAgICBtYXJnaW46ICcwcHgnLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbSxcbiAgICB9KSxcbiAgICBhY3Rpb25zOiBjc3Moe1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAnMHB4JyxcbiAgICAgIG9wYWNpdHk6IDAsXG5cbiAgICAgICcuY2FyZC1wYXJlbnQ6aG92ZXIgJiwgLmNhcmQtcGFyZW50OmZvY3VzLXdpdGhpbiAmJzoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBjYXJkOiBjc3Moe1xuICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IGBcbiAgICAgIFwiRmlndXJlICAgSGVhZGluZyAgIEFjdGlvbnNcIlxuICAgICAgXCJGaWd1cmUgRGVzY3JpcHRpb24gQWN0aW9uc1wiXG4gICAgICBcIkZpZ3VyZSAgICBNZXRhICAgICBBY3Rpb25zXCJcbiAgICAgIFwiRmlndXJlICAgICAtICAgICAgIEFjdGlvbnNcImAsXG4gICAgfSksXG4gICAgbG9nbzogY3NzKHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS52MS5zcGFjaW5nLmxnLFxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUudjEuc3BhY2luZy5zbSxcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxuICAgICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICAgIH0pLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF2TW9kZWwoKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0ge1xuICAgIGljb246ICdkYXRhYmFzZScsXG4gICAgaWQ6ICdkYXRhc291cmNlLW5ldycsXG4gICAgdGV4dDogJ0FkZCBkYXRhIHNvdXJjZScsXG4gICAgaHJlZjogJ2RhdGFzb3VyY2VzL25ldycsXG4gICAgc3ViVGl0bGU6ICdDaG9vc2UgYSBkYXRhIHNvdXJjZSB0eXBlJyxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbWFpbixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKE5ld0RhdGFTb3VyY2VQYWdlKTtcbiIsImltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgbG9jYXRpb25VdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQge1xuICBEYXRhU291cmNlV2l0aEJhY2tlbmQsXG4gIGdldERhdGFTb3VyY2VTcnYsXG4gIEhlYWx0aENoZWNrRXJyb3IsXG4gIEhlYWx0aENoZWNrUmVzdWx0RGV0YWlscyxcbiAgaXNGZXRjaEVycm9yLFxuICBsb2NhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXBkYXRlTmF2SW5kZXggfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IGdldFBsdWdpblNldHRpbmdzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpbl9sb2FkZXInO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5LCBUaHVua0Rpc3BhdGNoLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuaW1wb3J0IHsgYnVpbGRDYXRlZ29yaWVzIH0gZnJvbSAnLi9idWlsZENhdGVnb3JpZXMnO1xuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHtcbiAgZGF0YVNvdXJjZUxvYWRlZCxcbiAgZGF0YVNvdXJjZU1ldGFMb2FkZWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQsXG4gIGRhdGFTb3VyY2VzTG9hZGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkLFxuICB0ZXN0RGF0YVNvdXJjZUZhaWxlZCxcbiAgdGVzdERhdGFTb3VyY2VTdGFydGluZyxcbiAgdGVzdERhdGFTb3VyY2VTdWNjZWVkZWQsXG59IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZSwgZ2V0RGF0YVNvdXJjZU1ldGEgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVR5cGVzTG9hZGVkUGF5bG9hZCB7XG4gIHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW107XG4gIGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyB7XG4gIGxvYWREYXRhU291cmNlOiB0eXBlb2YgbG9hZERhdGFTb3VyY2U7XG4gIGxvYWREYXRhU291cmNlTWV0YTogdHlwZW9mIGxvYWREYXRhU291cmNlTWV0YTtcbiAgZ2V0RGF0YVNvdXJjZTogdHlwZW9mIGdldERhdGFTb3VyY2U7XG4gIGdldERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZU1ldGE7XG4gIGltcG9ydERhdGFTb3VyY2VQbHVnaW46IHR5cGVvZiBpbXBvcnREYXRhU291cmNlUGx1Z2luO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzIHtcbiAgZ2V0RGF0YXNvdXJjZVNydjogdHlwZW9mIGdldERhdGFTb3VyY2VTcnY7XG4gIGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcGFnZUlkOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzID0ge1xuICAgIGxvYWREYXRhU291cmNlLFxuICAgIGxvYWREYXRhU291cmNlTWV0YSxcbiAgICBnZXREYXRhU291cmNlLFxuICAgIGdldERhdGFTb3VyY2VNZXRhLFxuICAgIGltcG9ydERhdGFTb3VyY2VQbHVnaW4sXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBpZiAoIXBhZ2VJZCkge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2FkZWREYXRhU291cmNlID0gYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlKHBhZ2VJZCkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlTWV0YShsb2FkZWREYXRhU291cmNlKSk7XG5cbiAgICAgIC8vIGhhdmUgd2UgYWxyZWFkeSBsb2FkZWQgdGhlIHBsdWdpbiB0aGVuIHdlIGNhbiBza2lwIHRoZSBzdGVwcyBiZWxvdz9cbiAgICAgIGlmIChnZXRTdGF0ZSgpLmRhdGFTb3VyY2VTZXR0aW5ncy5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2UoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgcGFnZUlkKTtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNZXRhID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2VNZXRhKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UhLnR5cGUpO1xuICAgICAgY29uc3QgaW1wb3J0ZWRQbHVnaW4gPSBhd2FpdCBkZXBlbmRlbmNpZXMuaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihkYXRhU291cmNlTWV0YSk7XG5cbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQoaW1wb3J0ZWRQbHVnaW4pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKGVycikpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RGF0YVNvdXJjZSA9IChcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyA9IHtcbiAgICBnZXREYXRhc291cmNlU3J2LFxuICAgIGdldEJhY2tlbmRTcnYsXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBkc0FwaSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXREYXRhc291cmNlU3J2KCkuZ2V0KGRhdGFTb3VyY2VOYW1lKTtcblxuICAgIGlmICghZHNBcGkudGVzdERhdGFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nKCkpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS53aXRoTm9CYWNrZW5kQ2FjaGUoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHNBcGkudGVzdERhdGFzb3VyY2UoKTtcblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZChyZXN1bHQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBsZXQgbWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZGV0YWlsczogSGVhbHRoQ2hlY2tSZXN1bHREZXRhaWxzO1xuXG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBIZWFsdGhDaGVja0Vycm9yKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuICAgICAgICAgIGRldGFpbHMgPSBlcnIuZGV0YWlscztcbiAgICAgICAgfSBlbHNlIGlmIChpc0ZldGNoRXJyb3IoZXJyKSkge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnIuZGF0YS5tZXNzYWdlID8/IGBIVFRQIGVycm9yICR7ZXJyLnN0YXR1c1RleHR9YDtcbiAgICAgICAgfSBlbHNlIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlRmFpbGVkKHsgbWVzc2FnZSwgZGV0YWlscyB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9kYXRhc291cmNlcycpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZSh1aWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGF3YWl0IGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkKTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VMb2FkZWQoZGF0YVNvdXJjZSkpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VNZXRhKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBsdWdpbkluZm8gPSAoYXdhaXQgZ2V0UGx1Z2luU2V0dGluZ3MoZGF0YVNvdXJjZS50eXBlKSkgYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gICAgY29uc3QgcGx1Z2luID0gYXdhaXQgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihwbHVnaW5JbmZvKTtcbiAgICBjb25zdCBpc0JhY2tlbmQgPSBwbHVnaW4uRGF0YVNvdXJjZUNsYXNzLnByb3RvdHlwZSBpbnN0YW5jZW9mIERhdGFTb3VyY2VXaXRoQmFja2VuZDtcbiAgICBjb25zdCBtZXRhID0ge1xuICAgICAgLi4ucGx1Z2luSW5mbyxcbiAgICAgIGlzQmFja2VuZDogcGx1Z2luSW5mby5iYWNrZW5kIHx8IGlzQmFja2VuZCxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZU1ldGFMb2FkZWQobWV0YSkpO1xuXG4gICAgcGx1Z2luLm1ldGEgPSBtZXRhO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZSwgcGx1Z2luKSkpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldCBkYXRhIHNvdXJjZSBieSB1aWQgb3IgaWQsIGlmIG9sZCBpZCBkZXRlY3RlZCBoYW5kbGVzIHJlZGlyZWN0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+IHtcbiAgLy8gVHJ5IGZpcnN0IHdpdGggdWlkIGFwaVxuICB0cnkge1xuICAgIGNvbnN0IGJ5VWlkID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy91aWQvJHt1aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoYnlVaWQub2spIHtcbiAgICAgIHJldHVybiBieVVpZC5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBsb29rdXAgZGF0YSBzb3VyY2UgYnkgdWlkJywgZXJyKTtcbiAgfVxuXG4gIC8vIHRyeSBsb29rdXAgYnkgb2xkIGRiIGlkXG4gIGNvbnN0IGlkID0gdHlwZW9mIHVpZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh1aWQsIDEwKSA6IHVpZDtcbiAgaWYgKCFOdW1iZXIuaXNOYU4oaWQpKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzLyR7aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBJZiB0aGUgdWlkIGlzIGEgbnVtYmVyLCB0aGVuIHRoaXMgaXMgYSByZWZyZXNoIG9uIG9uZSBvZiB0aGUgc2V0dGluZ3MgdGFic1xuICAgIC8vIGFuZCB3ZSBjYW4gcmV0dXJuIHRoZSByZXNwb25zZSBkYXRhXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHR5cGVvZiB1aWQgPT09ICdudW1iZXInICYmIHJlc3BvbnNlLmRhdGEuaWQgPT09IHVpZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgLy8gTm90IGlkZWFsIHRvIGRvIGEgZnVsbCBwYWdlIHJlbG9hZCBoZXJlIGJ1dCBzbyB0cmlja3kgdG8gaGFuZGxlIHRoaXNcbiAgICAvLyBvdGhlcndpc2UgV2UgY2FuIHVwZGF0ZSB0aGUgbG9jYXRpb24gdXNpbmcgcmVhY3Qgcm91dGVyLCBidXQgbmVlZCB0b1xuICAgIC8vIGZ1bGx5IHJlbG9hZCB0aGUgcm91dGUgYXMgdGhlIG5hdiBtb2RlbCBwYWdlIGluZGV4IGlzIG5vdCBtYXRjaGluZyB3aXRoXG4gICAgLy8gdGhlIHVybCBpbiB0aGF0IGNhc2UuIEFuZCByZWFjdCByb3V0ZXIgaGFzIG5vIHdheSB0byB1bm1vdW50IHJlbW91bnQgYVxuICAgIC8vIHJvdXRlXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLmRhdGEuaWQudG9TdHJpbmcoKSA9PT0gdWlkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uVXRpbC5hc3N1cmVCYXNlVXJsKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3BvbnNlLmRhdGEudWlkfWApO1xuICAgICAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5nczsgLy8gYXZvaWRzIGZsYXNoaW5nIGFuIGVycm9yXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhU291cmNlKHBsdWdpbjogRGF0YVNvdXJjZVBsdWdpbk1ldGEpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZERhdGFTb3VyY2VzKCkpO1xuXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2VzO1xuXG4gICAgY29uc3QgbmV3SW5zdGFuY2UgPSB7XG4gICAgICBuYW1lOiBwbHVnaW4ubmFtZSxcbiAgICAgIHR5cGU6IHBsdWdpbi5pZCxcbiAgICAgIGFjY2VzczogJ3Byb3h5JyxcbiAgICAgIGlzRGVmYXVsdDogZGF0YVNvdXJjZXMubGVuZ3RoID09PSAwLFxuICAgIH07XG5cbiAgICBpZiAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKSkge1xuICAgICAgbmV3SW5zdGFuY2UubmFtZSA9IGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9kYXRhc291cmNlcycsIG5ld0luc3RhbmNlKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXN1bHQuZGF0YXNvdXJjZS51aWR9YCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZVBsdWdpbnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkKCkpO1xuICAgIGNvbnN0IHBsdWdpbnMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsdWdpbnMnLCB7IGVuYWJsZWQ6IDEsIHR5cGU6ICdkYXRhc291cmNlJyB9KTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnMpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkKHsgcGx1Z2lucywgY2F0ZWdvcmllcyB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWAsIGRhdGFTb3VyY2UpOyAvLyBieSBVSUQgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGxvYWREYXRhU291cmNlKGRhdGFTb3VyY2UudWlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEYXRhU291cmNlKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlO1xuXG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9kYXRhc291cmNlcycpO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgSXRlbVdpdGhOYW1lIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUV4aXRzKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiAoXG4gICAgZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YVNvdXJjZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9KS5sZW5ndGggPiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV3TmFtZShkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICAvLyBOZWVkIHRvIGxvb3AgdGhyb3VnaCBjdXJyZW50IGRhdGEgc291cmNlcyB0byBtYWtlIHN1cmVcbiAgLy8gdGhlIG5hbWUgZG9lc24ndCBleGlzdFxuICB3aGlsZSAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuYW1lKSkge1xuICAgIC8vIElmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGRvZXNuJ3QgZW5kIHdpdGggJy14J1xuICAgIC8vIHdlIGNhbiBhZGQgLTEgdG8gdGhlIG5hbWUgYW5kIGJlIGRvbmUuXG4gICAgaWYgKCFuYW1lSGFzU3VmZml4KG5hbWUpKSB7XG4gICAgICBuYW1lID0gYCR7bmFtZX0tMWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGVuZHMgd2l0aCAnLXgnXG4gICAgICAvLyB3ZSBjYW4gdHJ5IHRvIGluY3JlbWVudCB0aGUgbGFzdCBkaWdpdCB1bnRpbCB0aGUgbmFtZSBpcyB1bmlxdWVcblxuICAgICAgLy8gcmVtb3ZlIHRoZSAneCcgcGFydCBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgbnVtYmVyXG4gICAgICBuYW1lID0gYCR7Z2V0TmV3TmFtZShuYW1lKX0ke2luY3JlbWVudExhc3REaWdpdChnZXRMYXN0RGlnaXQobmFtZSkpfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIG5hbWVIYXNTdWZmaXgobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLmVuZHNXaXRoKCctJywgbmFtZS5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdERpZ2l0KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gcGFyc2VJbnQobmFtZS5zbGljZSgtMSksIDEwKTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50TGFzdERpZ2l0KGRpZ2l0OiBudW1iZXIpIHtcbiAgcmV0dXJuIGlzTmFOKGRpZ2l0KSA/IDEgOiBkaWdpdCArIDE7XG59XG5cbmZ1bmN0aW9uIGdldE5ld05hbWUobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnNsaWNlKDAsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKTogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSA9IFtcbiAgICB7IGlkOiAndHNkYicsIHRpdGxlOiAnVGltZSBzZXJpZXMgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnbG9nZ2luZycsIHRpdGxlOiAnTG9nZ2luZyAmIGRvY3VtZW50IGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3RyYWNpbmcnLCB0aXRsZTogJ0Rpc3RyaWJ1dGVkIHRyYWNpbmcnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdzcWwnLCB0aXRsZTogJ1NRTCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2Nsb3VkJywgdGl0bGU6ICdDbG91ZCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2VudGVycHJpc2UnLCB0aXRsZTogJ0VudGVycHJpc2UgcGx1Z2lucycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2lvdCcsIHRpdGxlOiAnSW5kdXN0cmlhbCAmIElvVCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ290aGVyJywgdGl0bGU6ICdPdGhlcnMnLCBwbHVnaW5zOiBbXSB9LFxuICBdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlJbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5PiA9IHt9O1xuICBjb25zdCBwbHVnaW5JbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbk1ldGE+ID0ge307XG4gIGNvbnN0IGVudGVycHJpc2VQbHVnaW5zID0gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk7XG5cbiAgLy8gYnVpbGQgaW5kaWNlc1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjYXRlZ29yeUluZGV4W2NhdGVnb3J5LmlkXSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIGNvbnN0IGVudGVycHJpc2VQbHVnaW4gPSBlbnRlcnByaXNlUGx1Z2lucy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uaWQpO1xuICAgIC8vIEZvcmNlIGNhdGVnb3J5IGZvciBlbnRlcnByaXNlIHBsdWdpbnNcbiAgICBpZiAocGx1Z2luLmVudGVycHJpc2UgfHwgZW50ZXJwcmlzZVBsdWdpbikge1xuICAgICAgcGx1Z2luLmNhdGVnb3J5ID0gJ2VudGVycHJpc2UnO1xuICAgICAgcGx1Z2luLnVubGljZW5zZWQgPSAhZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpO1xuICAgICAgcGx1Z2luLmluZm8ubGlua3MgPSBlbnRlcnByaXNlUGx1Z2luPy5pbmZvPy5saW5rcyB8fCBwbHVnaW4uaW5mby5saW5rcztcbiAgICB9XG5cbiAgICAvLyBGaXggbGluayBuYW1lXG4gICAgaWYgKHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgcGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgICAgbGluay5uYW1lID0gJ0xlYXJuIG1vcmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uY2F0ZWdvcnkpIHx8IGNhdGVnb3J5SW5kZXhbJ290aGVyJ107XG4gICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgLy8gYWRkIHRvIHBsdWdpbiBpbmRleFxuICAgIHBsdWdpbkluZGV4W3BsdWdpbi5pZF0gPSBwbHVnaW47XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5cbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdjbG91ZCcpIHtcbiAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCkpO1xuICAgIH1cblxuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpbnNcbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdlbnRlcnByaXNlJykge1xuICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgZW50ZXJwcmlzZVBsdWdpbnMpIHtcbiAgICAgICAgaWYgKCFwbHVnaW5JbmRleFtwbHVnaW4uaWRdKSB7XG4gICAgICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0UGx1Z2lucyhjYXRlZ29yeS5wbHVnaW5zKTtcbiAgfVxuXG4gIC8vIE9ubHkgc2hvdyBjYXRlZ29yaWVzIHdpdGggcGx1Z2luc1xuICByZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoKGMpID0+IGMucGx1Z2lucy5sZW5ndGggPiAwKTtcbn1cblxuZnVuY3Rpb24gc29ydFBsdWdpbnMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSkge1xuICBjb25zdCBzb3J0aW5nUnVsZXM6IHsgW2lkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBwcm9tZXRoZXVzOiAxMDAsXG4gICAgZ3JhcGhpdGU6IDk1LFxuICAgIGxva2k6IDkwLFxuICAgIG15c3FsOiA4MCxcbiAgICBqYWVnZXI6IDEwMCxcbiAgICBwb3N0Z3JlczogNzksXG4gICAgZ2Nsb3VkOiAtMSxcbiAgfTtcblxuICBwbHVnaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhU29ydCA9IHNvcnRpbmdSdWxlc1thLmlkXSB8fCAwO1xuICAgIGNvbnN0IGJTb3J0ID0gc29ydGluZ1J1bGVzW2IuaWRdIHx8IDA7XG4gICAgaWYgKGFTb3J0ID4gYlNvcnQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGFTb3J0IDwgYlNvcnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSB7XG4gIHJldHVybiBbXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuaycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBTcGx1bmsgbG9ncycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc3BsdW5rX2xvZ29fMTI4LnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtb3JhY2xlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ09yYWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBPcmFjbGUgU1FMJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9vcmFjbGUucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1keW5hdHJhY2UtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnRHluYXRyYWNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIER5bmF0cmFjZSBkYXRhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9keW5hdHJhY2UucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zZXJ2aWNlbm93LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXJ2aWNlTm93IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU2VydmljZU5vdycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2VydmljZW5vdy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWRhdGFkb2ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RhdGFEb2cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdEYXRhRG9nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9kYXRhZG9nLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbmV3cmVsaWMtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ05ldyBSZWxpYyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ05ldyBSZWxpYycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbmV3cmVsaWMuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1tb25nb2RiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdNb25nb0RCIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTW9uZ29EQicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbW9uZ29kYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNub3dmbGFrZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU25vd2ZsYWtlIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU25vd2ZsYWtlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zbm93Zmxha2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS13YXZlZnJvbnQtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhdmVmcm9udCBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1dhdmVmcm9udCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvd2F2ZWZyb250LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2Rsb3BlczctYXBwZHluYW1pY3MtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcER5bmFtaWNzIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnQXBwRHluYW1pY3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2FwcGR5bmFtaWNzLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FwaGFuYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU0FQIEhBTkHCriBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NBUCBIQU5Bwq4nLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhcF9oYW5hLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtaG9uZXljb21iLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdIb25leWNvbWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvaG9uZXljb21iLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FsZXNmb3JjZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2FsZXNmb3JjZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU2FsZXNmb3JjZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FsZXNmb3JjZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWppcmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ppcmEgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0ppcmEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2ppcmFfbG9nby5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWdpdGxhYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnR2l0TGFiIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdHaXRMYWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2dpdGxhYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1tb25pdG9yaW5nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTaWduYWxGeCBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rIEluZnJhc3RydWN0dXJlIE1vbml0b3JpbmcnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NpZ25hbGZ4LWxvZ28uc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1henVyZWRldm9wcy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXp1cmUgRGV2b3BzIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0F6dXJlIERldm9wcycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvYXp1cmUtZGV2b3BzLnBuZycsXG4gICAgfSksXG4gIF07XG59XG5cbmZ1bmN0aW9uIGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiAnZ2Nsb3VkJyxcbiAgICBuYW1lOiAnR3JhZmFuYSBDbG91ZCcsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9zdGVkIEdyYXBoaXRlLCBQcm9tZXRoZXVzLCBhbmQgTG9raScsXG4gICAgICBsb2dvczogeyBzbWFsbDogJ3B1YmxpYy9pbWcvZ3JhZmFuYV9pY29uLnN2ZycsIGxhcmdlOiAnYXNkJyB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9ncmFmYW5hLmNvbS9wcm9kdWN0cy9jbG91ZC8nLFxuICAgICAgICAgIG5hbWU6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG5cbmludGVyZmFjZSBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1nVXJsOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFBoYW50b21QbHVnaW4ob3B0aW9uczogR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IG9wdGlvbnMuaWQsXG4gICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiBvcHRpb25zLmltZ1VybCwgbGFyZ2U6IG9wdGlvbnMuaW1nVXJsIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6IGNvbmZpZy5wbHVnaW5DYXRhbG9nVVJMICsgb3B0aW9ucy5pZCxcbiAgICAgICAgICBuYW1lOiAnSW5zdGFsbCBub3cnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncywgUGx1Z2luVHlwZSwgUGx1Z2luSW5jbHVkZSwgTmF2TW9kZWwsIE5hdk1vZGVsSXRlbSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFByb0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1Byb0JhZGdlJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBoaWdobGlnaHRUcmlhbCB9IGZyb20gJy4uLy4uL2FkbWluL3V0aWxzJztcbmltcG9ydCB7IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnLi4vc2V0dGluZ3MvUGx1Z2luU2V0dGluZ3MnO1xuXG5jb25zdCBsb2FkaW5nRFNUeXBlID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROYXZNb2RlbChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MsIHBsdWdpbjogR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4pOiBOYXZNb2RlbEl0ZW0ge1xuICBjb25zdCBwbHVnaW5NZXRhID0gcGx1Z2luLm1ldGE7XG4gIGNvbnN0IGhpZ2hsaWdodHNFbmFibGVkID0gY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuICBjb25zdCBuYXZNb2RlbDogTmF2TW9kZWxJdGVtID0ge1xuICAgIGltZzogcGx1Z2luTWV0YS5pbmZvLmxvZ29zLmxhcmdlLFxuICAgIGlkOiAnZGF0YXNvdXJjZS0nICsgZGF0YVNvdXJjZS51aWQsXG4gICAgc3ViVGl0bGU6IGBUeXBlOiAke3BsdWdpbk1ldGEubmFtZX1gLFxuICAgIHVybDogJycsXG4gICAgdGV4dDogZGF0YVNvdXJjZS5uYW1lLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ0RhdGEgU291cmNlcycsIHVybDogJ2RhdGFzb3VyY2VzJyB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBpY29uOiAnc2xpZGVycy12LWFsdCcsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1zZXR0aW5ncy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBpZiAocGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBwYWdlLnRpdGxlLFxuICAgICAgICBpY29uOiBwYWdlLmljb24sXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vP3BhZ2U9JHtwYWdlLmlkfWAsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1wYWdlLSR7cGFnZS5pZH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBsdWdpbk1ldGEuaW5jbHVkZXMgJiYgaGFzRGFzaGJvYXJkcyhwbHVnaW5NZXRhLmluY2x1ZGVzKSAmJiBjb250ZXh0U3J2Lmhhc1JvbGUoJ0FkbWluJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaWNvbjogJ2FwcHMnLFxuICAgICAgaWQ6IGBkYXRhc291cmNlLWRhc2hib2FyZHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgdGV4dDogJ0Rhc2hib2FyZHMnLFxuICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9kYXNoYm9hcmRzYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlzTG9hZGluZ05hdiA9IGRhdGFTb3VyY2UudHlwZSA9PT0gbG9hZGluZ0RTVHlwZTtcblxuICBjb25zdCBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtcGVybWlzc2lvbnMtYmFkZ2UnO1xuICBjb25zdCBkc1Blcm1pc3Npb25zOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnbG9jaycsXG4gICAgaWQ6IGBkYXRhc291cmNlLXBlcm1pc3Npb25zLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnUGVybWlzc2lvbnMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vcGVybWlzc2lvbnNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBkc1Blcm1pc3Npb25zLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdkc3Blcm1pc3Npb25zJykpIHtcbiAgICBpZiAoY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQpKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChkc1Blcm1pc3Npb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmRzUGVybWlzc2lvbnMsXG4gICAgICB1cmw6IGRzUGVybWlzc2lvbnMudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYW5hbHl0aWNzRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1pbnNpZ2h0cy1iYWRnZSc7XG4gIGNvbnN0IGFuYWx5dGljczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2luZm8tY2lyY2xlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtaW5zaWdodHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdJbnNpZ2h0cycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9pbnNpZ2h0c2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGFuYWx5dGljcy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2FuYWx5dGljcycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goYW5hbHl0aWNzKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uYW5hbHl0aWNzLFxuICAgICAgdXJsOiBhbmFseXRpY3MudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNhY2hpbmdFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLXF1ZXJ5LWNhY2hpbmctYmFkZ2UnO1xuXG4gIGNvbnN0IGNhY2hpbmc6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdkYXRhYmFzZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWNhY2hlLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnQ2FjaGUnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vY2FjaGVgLFxuICAgIGhpZGVGcm9tVGFiczogIXBsdWdpbk1ldGEuaXNCYWNrZW5kIHx8ICFjb25maWcuY2FjaGluZy5lbmFibGVkLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBjYWNoaW5nLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2NhY2hpbmcnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGNhY2hpbmcpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5jYWNoaW5nLFxuICAgICAgdXJsOiBjYWNoaW5nLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZU5hdihtYWluOiBOYXZNb2RlbEl0ZW0sIHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGxldCBub2RlOiBOYXZNb2RlbEl0ZW0gPSB7IHRleHQ6ICcnIH07XG5cbiAgLy8gZmluZCBhY3RpdmUgcGFnZVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1haW4uY2hpbGRyZW4hKSB7XG4gICAgaWYgKGNoaWxkLmlkIS5pbmRleE9mKHBhZ2VOYW1lKSA+IDApIHtcbiAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlID0gY2hpbGQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbm9kZSEsXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYocGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgY29uc3QgbWFpbiA9IGJ1aWxkTmF2TW9kZWwoXG4gICAge1xuICAgICAgYWNjZXNzOiAnJyxcbiAgICAgIGJhc2ljQXV0aDogZmFsc2UsXG4gICAgICBiYXNpY0F1dGhVc2VyOiAnJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICBkYXRhYmFzZTogJycsXG4gICAgICBpZDogMSxcbiAgICAgIHVpZDogJ3gnLFxuICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcbiAgICAgIGpzb25EYXRhOiB7IGF1dGhUeXBlOiAnY3JlZGVudGlhbHMnLCBkZWZhdWx0UmVnaW9uOiAnZXUtd2VzdC0yJyB9LFxuICAgICAgbmFtZTogJ0xvYWRpbmcnLFxuICAgICAgb3JnSWQ6IDEsXG4gICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICB0eXBlOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZU5hbWU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTG9nb1VybDogJ3B1YmxpYy9pbWcvaWNuLWRhdGFzb3VyY2Uuc3ZnJyxcbiAgICAgIHVybDogJycsXG4gICAgICB1c2VyOiAnJyxcbiAgICAgIHNlY3VyZUpzb25GaWVsZHM6IHt9LFxuICAgIH0sXG4gICAge1xuICAgICAgbWV0YToge1xuICAgICAgICBpZDogJzEnLFxuICAgICAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgbGlua3M6IFt7IG5hbWU6ICcnLCB1cmw6ICcnIH1dLFxuICAgICAgICAgIGxvZ29zOiB7XG4gICAgICAgICAgICBsYXJnZTogJycsXG4gICAgICAgICAgICBzbWFsbDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICAgICAgdXBkYXRlZDogJycsXG4gICAgICAgICAgdmVyc2lvbjogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVzOiBbXSxcbiAgICAgICAgbW9kdWxlOiAnJyxcbiAgICAgICAgYmFzZVVybDogJycsXG4gICAgICB9LFxuICAgIH0gYXMgYW55XG4gICk7XG5cbiAgcmV0dXJuIGdldERhdGFTb3VyY2VOYXYobWFpbiwgcGFnZU5hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNEYXNoYm9hcmRzKGluY2x1ZGVzOiBQbHVnaW5JbmNsdWRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBpbmNsdWRlcy5maW5kKChpbmNsdWRlKSA9PiB7XG4gICAgICByZXR1cm4gaW5jbHVkZS50eXBlID09PSAnZGFzaGJvYXJkJztcbiAgICB9KSAhPT0gdW5kZWZpbmVkXG4gICk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBVcmxRdWVyeVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VzU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRhc291cmNlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlcyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5uYW1lKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UuZGF0YWJhc2UpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS50eXBlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVBsdWdpbnMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLmRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnBsdWdpbnMuZmlsdGVyKCh0eXBlOiBEYXRhU291cmNlUGx1Z2luTWV0YSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHR5cGUubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2UgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIGRhdGFTb3VyY2VJZDogVXJsUXVlcnlWYWx1ZSk6IERhdGFTb3VyY2VTZXR0aW5ncyA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlLnVpZCA9PT0gZGF0YVNvdXJjZUlkKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2U7XG4gIH1cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlTWV0YSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgdHlwZTogc3RyaW5nKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZU1ldGEuaWQgPT09IHR5cGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZU1ldGE7XG4gIH1cblxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzQ291bnQgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzQ291bnQ7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFBsdWdpbkVycm9yIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IHNvcnRQbHVnaW5zLCBTb3J0ZXJzIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luLCBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSwgUGx1Z2luTGlzdERpc3BsYXlNb2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBmZXRjaEFsbCwgZmV0Y2hEZXRhaWxzLCBmZXRjaFJlbW90ZVBsdWdpbnMsIGluc3RhbGwsIHVuaW5zdGFsbCB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXREaXNwbGF5TW9kZSB9IGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQge1xuICBmaW5kLFxuICBzZWxlY3RBbGwsXG4gIHNlbGVjdEJ5SWQsXG4gIHNlbGVjdElzUmVxdWVzdFBlbmRpbmcsXG4gIHNlbGVjdFJlcXVlc3RFcnJvcixcbiAgc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZCxcbiAgc2VsZWN0RGlzcGxheU1vZGUsXG4gIHNlbGVjdFBsdWdpbkVycm9ycyxcbn0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG50eXBlIEZpbHRlcnMgPSB7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xuICBmaWx0ZXJCeT86IHN0cmluZztcbiAgZmlsdGVyQnlUeXBlPzogc3RyaW5nO1xuICBzb3J0Qnk/OiBTb3J0ZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbFdpdGhGaWx0ZXJzID0gKHtcbiAgcXVlcnkgPSAnJyxcbiAgZmlsdGVyQnkgPSAnaW5zdGFsbGVkJyxcbiAgZmlsdGVyQnlUeXBlID0gJ2FsbCcsXG4gIHNvcnRCeSA9IFNvcnRlcnMubmFtZUFzYyxcbn06IEZpbHRlcnMpID0+IHtcbiAgdXNlRmV0Y2hBbGwoKTtcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZVNlbGVjdG9yKGZpbmQocXVlcnksIGZpbHRlckJ5LCBmaWx0ZXJCeVR5cGUpKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaFN0YXR1cygpO1xuICBjb25zdCBzb3J0ZWRBbmRGaWx0ZXJlZCA9IHNvcnRQbHVnaW5zKGZpbHRlcmVkLCBzb3J0QnkpO1xuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIHBsdWdpbnM6IHNvcnRlZEFuZEZpbHRlcmVkLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbCA9ICgpOiBDYXRhbG9nUGx1Z2luW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RBbGwpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldFNpbmdsZSA9IChpZDogc3RyaW5nKTogQ2F0YWxvZ1BsdWdpbiB8IHVuZGVmaW5lZCA9PiB7XG4gIHVzZUZldGNoQWxsKCk7XG4gIHVzZUZldGNoRGV0YWlscyhpZCk7XG5cbiAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUpID0+IHNlbGVjdEJ5SWQoc3RhdGUsIGlkKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0RXJyb3JzID0gKCk6IFBsdWdpbkVycm9yW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RQbHVnaW5FcnJvcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuIChpZDogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nLCBpc1VwZGF0aW5nPzogYm9vbGVhbikgPT4gZGlzcGF0Y2goaW5zdGFsbCh7IGlkLCB2ZXJzaW9uLCBpc1VwZGF0aW5nIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVbmluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICByZXR1cm4gKGlkOiBzdHJpbmcpID0+IGRpc3BhdGNoKHVuaW5zdGFsbChpZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hSZW1vdGVQbHVnaW5zLnR5cGVQcmVmaXgpKTtcbiAgcmV0dXJuIGVycm9yID09PSBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoQWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hBbGwudHlwZVByZWZpeCkpO1xuXG4gIHJldHVybiB7IGlzTG9hZGluZywgZXJyb3IgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VGZXRjaERldGFpbHNTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcblxuICByZXR1cm4geyBpc0xvYWRpbmcsIGVycm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNJbnN0YWxsaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyhpbnN0YWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNJbnN0YWxsaW5nLCBlcnJvciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVVuaW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNVbmluc3RhbGxpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNVbmluc3RhbGxpbmcsIGVycm9yIH07XG59O1xuXG4vLyBPbmx5IGZldGNoZXMgaW4gY2FzZSB0aGV5IHdlcmUgbm90IGZldGNoZWQgeWV0XG5leHBvcnQgY29uc3QgdXNlRmV0Y2hBbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNOb3RGZXRjaGVkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZChmZXRjaEFsbC50eXBlUHJlZml4KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc05vdEZldGNoZWQgJiYgZGlzcGF0Y2goZmV0Y2hBbGwoKSk7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoRGV0YWlscyA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcGx1Z2luID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc2VsZWN0QnlJZChzdGF0ZSwgaWQpKTtcbiAgY29uc3QgaXNOb3RGZXRjaGluZyA9ICF1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoRGV0YWlscy50eXBlUHJlZml4KSk7XG4gIGNvbnN0IHNob3VsZEZldGNoID0gaXNOb3RGZXRjaGluZyAmJiBwbHVnaW4gJiYgIXBsdWdpbi5kZXRhaWxzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvdWxkRmV0Y2ggJiYgZGlzcGF0Y2goZmV0Y2hEZXRhaWxzKGlkKSk7XG4gIH0sIFtwbHVnaW5dKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZURpc3BsYXlNb2RlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGRpc3BsYXlNb2RlID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGlzcGxheU1vZGUpO1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheU1vZGUsXG4gICAgc2V0RGlzcGxheU1vZGU6ICh2OiBQbHVnaW5MaXN0RGlzcGxheU1vZGUpID0+IGRpc3BhdGNoKHNldERpc3BsYXlNb2RlKHYpKSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQgeyBQbHVnaW5FcnJvciwgUGx1Z2luRXJyb3JDb2RlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IFJlcXVlc3RTdGF0dXMsIFBsdWdpbkNhdGFsb2dTdG9yZVN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBwbHVnaW5zQWRhcHRlciB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSb290ID0gKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc3RhdGUucGx1Z2lucztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Um9vdCwgKHsgaXRlbXMgfSkgPT4gaXRlbXMpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlzcGxheU1vZGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyBzZXR0aW5ncyB9KSA9PiBzZXR0aW5ncy5kaXNwbGF5TW9kZSk7XG5cbmV4cG9ydCBjb25zdCB7IHNlbGVjdEFsbCwgc2VsZWN0QnlJZCB9ID0gcGx1Z2luc0FkYXB0ZXIuZ2V0U2VsZWN0b3JzKHNlbGVjdEl0ZW1zKTtcblxuY29uc3Qgc2VsZWN0SW5zdGFsbGVkID0gKGZpbHRlckJ5OiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEFsbCwgKHBsdWdpbnMpID0+XG4gICAgcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gKGZpbHRlckJ5ID09PSAnaW5zdGFsbGVkJyA/IHBsdWdpbi5pc0luc3RhbGxlZCA6ICFwbHVnaW4uaXNDb3JlKSlcbiAgKTtcblxuY29uc3QgZmluZEJ5SW5zdGFsbEFuZFR5cGUgPSAoZmlsdGVyQnk6IHN0cmluZywgZmlsdGVyQnlUeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEluc3RhbGxlZChmaWx0ZXJCeSksIChwbHVnaW5zKSA9PlxuICAgIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IGZpbHRlckJ5VHlwZSA9PT0gJ2FsbCcgfHwgcGx1Z2luLnR5cGUgPT09IGZpbHRlckJ5VHlwZSlcbiAgKTtcblxuY29uc3QgZmluZEJ5S2V5d29yZCA9IChzZWFyY2hCeTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RBbGwsIChwbHVnaW5zKSA9PiB7XG4gICAgaWYgKHNlYXJjaEJ5ID09PSAnJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IFN0cmluZ1tdID0gW107XG4gICAgICBpZiAocGx1Z2luLm5hbWUpIHtcbiAgICAgICAgZmllbGRzLnB1c2gocGx1Z2luLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbHVnaW4ub3JnTmFtZSkge1xuICAgICAgICBmaWVsZHMucHVzaChwbHVnaW4ub3JnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkcy5zb21lKChmKSA9PiBmLmluY2x1ZGVzKHNlYXJjaEJ5LnRvTG93ZXJDYXNlKCkpKTtcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gKHNlYXJjaEJ5OiBzdHJpbmcsIGZpbHRlckJ5OiBzdHJpbmcsIGZpbHRlckJ5VHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBmaW5kQnlJbnN0YWxsQW5kVHlwZShmaWx0ZXJCeSwgZmlsdGVyQnlUeXBlKSxcbiAgICBmaW5kQnlLZXl3b3JkKHNlYXJjaEJ5KSxcbiAgICAoZmlsdGVyZWRQbHVnaW5zLCBzZWFyY2hlZFBsdWdpbnMpID0+IHtcbiAgICAgIHJldHVybiBzZWFyY2hCeSA9PT0gJycgPyBmaWx0ZXJlZFBsdWdpbnMgOiBzZWFyY2hlZFBsdWdpbnM7XG4gICAgfVxuICApO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UGx1Z2luRXJyb3JzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QWxsLCAocGx1Z2lucykgPT5cbiAgcGx1Z2luc1xuICAgID8gcGx1Z2luc1xuICAgICAgICAuZmlsdGVyKChwKSA9PiBCb29sZWFuKHAuZXJyb3IpKVxuICAgICAgICAubWFwKFxuICAgICAgICAgIChwKTogUGx1Z2luRXJyb3IgPT4gKHtcbiAgICAgICAgICAgIHBsdWdpbklkOiBwLmlkLFxuICAgICAgICAgICAgZXJyb3JDb2RlOiBwIS5lcnJvciBhcyBQbHVnaW5FcnJvckNvZGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIDogW11cbik7XG5cbi8vIFRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIGFyZSB1c2VkIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgb3V0c3RhbmRpbmcgb3IgY29tcGxldGVkIHBsdWdpbnMtcmVsYXRlZCBuZXR3b3JrIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlcXVlc3QgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyByZXF1ZXN0cyA9IHt9IH0pID0+IHJlcXVlc3RzW2FjdGlvblR5cGVdKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzUmVxdWVzdFBlbmRpbmcgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSZXF1ZXN0KGFjdGlvblR5cGUpLCAocmVxdWVzdCkgPT4gcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlBlbmRpbmcpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVxdWVzdEVycm9yID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+XG4gICAgcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlJlamVjdGVkID8gcmVxdWVzdD8uZXJyb3IgOiBudWxsXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+IHJlcXVlc3QgPT09IHVuZGVmaW5lZCk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luRXJyb3JDb2RlLCBQbHVnaW5TaWduYXR1cmVTdGF0dXMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBJbmZvQm94LCBMaXN0LCBQbHVnaW5TaWduYXR1cmVCYWRnZSwgdXNlVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IHVzZUdldEVycm9ycywgdXNlRmV0Y2hTdGF0dXMgfSBmcm9tICcuLi9hZG1pbi9zdGF0ZS9ob29rcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5zRXJyb3JzSW5mbygpOiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlR2V0RXJyb3JzKCk7XG4gIGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB1c2VGZXRjaFN0YXR1cygpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgaWYgKGlzTG9hZGluZyB8fCBlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxJbmZvQm94XG4gICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGx1Z2luc0xpc3Quc2lnbmF0dXJlRXJyb3JOb3RpY2V9XG4gICAgICBzZXZlcml0eT1cIndhcm5pbmdcIlxuICAgICAgdXJsVGl0bGU9XCJSZWFkIG1vcmUgYWJvdXQgcGx1Z2luIHNpZ25pbmdcIlxuICAgICAgdXJsPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbGF0ZXN0L3BsdWdpbnMvcGx1Z2luLXNpZ25hdHVyZXMvXCJcbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBVbnNpZ25lZCBwbHVnaW5zIHdlcmUgZm91bmQgZHVyaW5nIHBsdWdpbiBpbml0aWFsaXphdGlvbi4gR3JhZmFuYSBMYWJzIGNhbm5vdCBndWFyYW50ZWUgdGhlIGludGVncml0eSBvZiB0aGVzZVxuICAgICAgICAgIHBsdWdpbnMuIFdlIHJlY29tbWVuZCBvbmx5IHVzaW5nIHNpZ25lZCBwbHVnaW5zLlxuICAgICAgICA8L3A+XG4gICAgICAgIFRoZSBmb2xsb3dpbmcgcGx1Z2lucyBhcmUgZGlzYWJsZWQgYW5kIG5vdCBzaG93biBpbiB0aGUgbGlzdCBiZWxvdzpcbiAgICAgICAgPExpc3RcbiAgICAgICAgICBpdGVtcz17ZXJyb3JzfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzYFxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICAgICAgICAgYH1cbiAgICAgICAgICByZW5kZXJJdGVtPXsoZXJyb3IpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cCBzcGFjaW5nPVwic21cIiBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57ZXJyb3IucGx1Z2luSWR9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPFBsdWdpblNpZ25hdHVyZUJhZGdlXG4gICAgICAgICAgICAgICAgICBzdGF0dXM9e21hcFBsdWdpbkVycm9yQ29kZVRvU2lnbmF0dXJlU3RhdHVzKGVycm9yLmVycm9yQ29kZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9JbmZvQm94PlxuICApO1xufVxuXG5mdW5jdGlvbiBtYXBQbHVnaW5FcnJvckNvZGVUb1NpZ25hdHVyZVN0YXR1cyhjb2RlOiBQbHVnaW5FcnJvckNvZGUpIHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUuaW52YWxpZFNpZ25hdHVyZTpcbiAgICAgIHJldHVybiBQbHVnaW5TaWduYXR1cmVTdGF0dXMuaW52YWxpZDtcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5taXNzaW5nU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuIFBsdWdpblNpZ25hdHVyZVN0YXR1cy5taXNzaW5nO1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1vZGlmaWVkU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuIFBsdWdpblNpZ25hdHVyZVN0YXR1cy5tb2RpZmllZDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFBsdWdpblNpZ25hdHVyZVN0YXR1cy5taXNzaW5nO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29uZmlnIiwiaXNUcmlhbCIsImV4cGlyeSIsImxpY2Vuc2VJbmZvIiwidHJpYWxFeHBpcnkiLCJoaWdobGlnaHRUcmlhbCIsImZlYXR1cmVUb2dnbGVzIiwiZmVhdHVyZUhpZ2hsaWdodHMiLCJjc3MiLCJjeCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJzZWxlY3RvcnMiLCJDYXJkIiwiTGlua0J1dHRvbiIsIkxpc3QiLCJQbHVnaW5TaWduYXR1cmVCYWRnZSIsIkZpbHRlcklucHV0IiwidXNlU3R5bGVzMiIsIlBhZ2UiLCJQbHVnaW5zRXJyb3JzSW5mbyIsImFkZERhdGFTb3VyY2UiLCJsb2FkRGF0YVNvdXJjZVBsdWdpbnMiLCJzZXREYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5IiwiZ2V0RGF0YVNvdXJjZVBsdWdpbnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdk1vZGVsIiwiZ2V0TmF2TW9kZWwiLCJwbHVnaW5zIiwiZGF0YVNvdXJjZXMiLCJzZWFyY2hRdWVyeSIsImRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJjYXRlZ29yaWVzIiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nRGF0YVNvdXJjZXMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJOZXdEYXRhU291cmNlUGFnZSIsInBsdWdpbiIsInByb3BzIiwidmFsdWUiLCJldnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlclBsdWdpbnMiLCJpZCIsImxlbmd0aCIsIml0ZW0iLCJ0b1N0cmluZyIsIm9uRGF0YVNvdXJjZVR5cGVDbGlja2VkIiwib25MZWFybk1vcmVDbGljayIsInJlbmRlckNhdGVnb3JpZXMiLCJtYXAiLCJjYXRlZ29yeSIsInRpdGxlIiwicmVuZGVyIiwib25TZWFyY2hRdWVyeUNoYW5nZSIsIkRhdGFTb3VyY2VUeXBlQ2FyZCIsImlzUGhhbnRvbSIsIm1vZHVsZSIsIm9uQ2xpY2siLCJ1bmxpY2Vuc2VkIiwibGVhcm5Nb3JlTGluayIsImluZm8iLCJsaW5rcyIsInN0eWxlcyIsImdldFN0eWxlcyIsImNhcmQiLCJoZWFkaW5nIiwicGFnZXMiLCJBZGREYXRhU291cmNlIiwiZGF0YVNvdXJjZVBsdWdpbnNWMiIsIm5hbWUiLCJmaWd1cmUiLCJsb2dvIiwibG9nb3MiLCJzbWFsbCIsImRlc2NyaXB0aW9uIiwibWV0YSIsInNpZ25hdHVyZSIsImFjdGlvbnMiLCJ1cmwiLCJ0aGVtZSIsImZvbnRTaXplIiwidjEiLCJ0eXBvZ3JhcGh5IiwiaDUiLCJmb250V2VpZ2h0Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsIm1hcmdpbiIsInNpemUiLCJzbSIsImFsaWduU2VsZiIsIm9wYWNpdHkiLCJncmlkVGVtcGxhdGVBcmVhcyIsImxnIiwibWFyZ2luTGVmdCIsIm1heEhlaWdodCIsIm1haW4iLCJpY29uIiwidGV4dCIsImhyZWYiLCJzdWJUaXRsZSIsIm5vZGUiLCJsYXN0VmFsdWVGcm9tIiwibG9jYXRpb25VdGlsIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwiSGVhbHRoQ2hlY2tFcnJvciIsImlzRmV0Y2hFcnJvciIsImxvY2F0aW9uU2VydmljZSIsInVwZGF0ZU5hdkluZGV4IiwiZ2V0QmFja2VuZFNydiIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiZ2V0RGF0YXNvdXJjZVNydiIsImdldFBsdWdpblNldHRpbmdzIiwiaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiIsImNvbnRleHRTcnYiLCJidWlsZENhdGVnb3JpZXMiLCJidWlsZE5hdk1vZGVsIiwiZGF0YVNvdXJjZUxvYWRlZCIsImRhdGFTb3VyY2VNZXRhTG9hZGVkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQiLCJkYXRhU291cmNlc0xvYWRlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkIiwidGVzdERhdGFTb3VyY2VGYWlsZWQiLCJ0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nIiwidGVzdERhdGFTb3VyY2VTdWNjZWVkZWQiLCJnZXREYXRhU291cmNlIiwiZ2V0RGF0YVNvdXJjZU1ldGEiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzIiwicGFnZUlkIiwiZGVwZW5kZW5jaWVzIiwibG9hZERhdGFTb3VyY2UiLCJsb2FkRGF0YVNvdXJjZU1ldGEiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiRXJyb3IiLCJsb2FkZWREYXRhU291cmNlIiwiZGF0YVNvdXJjZVNldHRpbmdzIiwiZGF0YVNvdXJjZSIsImRhdGFTb3VyY2VNZXRhIiwidHlwZSIsImltcG9ydGVkUGx1Z2luIiwiZXJyIiwidGVzdERhdGFTb3VyY2UiLCJkYXRhU291cmNlTmFtZSIsImRzQXBpIiwiZ2V0IiwidGVzdERhdGFzb3VyY2UiLCJ3aXRoTm9CYWNrZW5kQ2FjaGUiLCJyZXN1bHQiLCJtZXNzYWdlIiwiZGV0YWlscyIsImRhdGEiLCJzdGF0dXNUZXh0IiwibG9hZERhdGFTb3VyY2VzIiwicmVzcG9uc2UiLCJ1aWQiLCJnZXREYXRhU291cmNlVXNpbmdVaWRPcklkIiwicGx1Z2luSW5mbyIsImlzQmFja2VuZCIsIkRhdGFTb3VyY2VDbGFzcyIsInByb3RvdHlwZSIsImJhY2tlbmQiLCJieVVpZCIsImZldGNoIiwibWV0aG9kIiwicGFyYW1zIiwic2hvd0Vycm9yQWxlcnQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwid2luZG93IiwibG9jYXRpb24iLCJhc3N1cmVCYXNlVXJsIiwiZ2V0U3RvcmUiLCJuZXdJbnN0YW5jZSIsImFjY2VzcyIsImlzRGVmYXVsdCIsIm5hbWVFeGl0cyIsImZpbmROZXdOYW1lIiwicG9zdCIsInJlbG9hZCIsImZldGNoVXNlclBlcm1pc3Npb25zIiwicHVzaCIsImRhdGFzb3VyY2UiLCJlbmFibGVkIiwidXBkYXRlRGF0YVNvdXJjZSIsInB1dCIsImRlbGV0ZURhdGFTb3VyY2UiLCJkZWxldGUiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsIm5hbWVIYXNTdWZmaXgiLCJnZXROZXdOYW1lIiwiaW5jcmVtZW50TGFzdERpZ2l0IiwiZ2V0TGFzdERpZ2l0IiwiZW5kc1dpdGgiLCJzbGljZSIsImRpZ2l0IiwiUGx1Z2luVHlwZSIsImZlYXR1cmVFbmFibGVkIiwiY2F0ZWdvcnlJbmRleCIsInBsdWdpbkluZGV4IiwiZW50ZXJwcmlzZVBsdWdpbnMiLCJnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMiLCJlbnRlcnByaXNlUGx1Z2luIiwiZmluZCIsImVudGVycHJpc2UiLCJsaW5rIiwiZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbiIsInNvcnRQbHVnaW5zIiwiYyIsInNvcnRpbmdSdWxlcyIsInByb21ldGhldXMiLCJncmFwaGl0ZSIsImxva2kiLCJteXNxbCIsImphZWdlciIsInBvc3RncmVzIiwiZ2Nsb3VkIiwic29ydCIsImEiLCJiIiwiYVNvcnQiLCJiU29ydCIsImdldFBoYW50b21QbHVnaW4iLCJpbWdVcmwiLCJiYXNlVXJsIiwibGFyZ2UiLCJhdXRob3IiLCJzY3JlZW5zaG90cyIsInVwZGF0ZWQiLCJ2ZXJzaW9uIiwib3B0aW9ucyIsInBsdWdpbkNhdGFsb2dVUkwiLCJQcm9CYWRnZSIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJsb2FkaW5nRFNUeXBlIiwicGx1Z2luTWV0YSIsImhpZ2hsaWdodHNFbmFibGVkIiwiaW1nIiwiYnJlYWRjcnVtYnMiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImNvbmZpZ1BhZ2VzIiwicGFnZSIsImluY2x1ZGVzIiwiaGFzRGFzaGJvYXJkcyIsImhhc1JvbGUiLCJpc0xvYWRpbmdOYXYiLCJwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCIsImRzUGVybWlzc2lvbnMiLCJ0YWJTdWZmaXgiLCJleHBlcmltZW50SWQiLCJldmVudFZhcmlhbnQiLCJoYXNQZXJtaXNzaW9uIiwiRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQiLCJhbmFseXRpY3NFeHBlcmltZW50SWQiLCJhbmFseXRpY3MiLCJjYWNoaW5nRXhwZXJpbWVudElkIiwiY2FjaGluZyIsImhpZGVGcm9tVGFicyIsImdldERhdGFTb3VyY2VOYXYiLCJwYWdlTmFtZSIsImNoaWxkIiwiaW5kZXhPZiIsImdldERhdGFTb3VyY2VMb2FkaW5nTmF2IiwiYmFzaWNBdXRoIiwiYmFzaWNBdXRoVXNlciIsIndpdGhDcmVkZW50aWFscyIsImRhdGFiYXNlIiwianNvbkRhdGEiLCJhdXRoVHlwZSIsImRlZmF1bHRSZWdpb24iLCJvcmdJZCIsInJlYWRPbmx5IiwidHlwZU5hbWUiLCJ0eXBlTG9nb1VybCIsInVzZXIiLCJzZWN1cmVKc29uRmllbGRzIiwiaW5jbHVkZSIsInVuZGVmaW5lZCIsImdldERhdGFTb3VyY2VzIiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiZGF0YVNvdXJjZUlkIiwiZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSIsImdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSIsImxheW91dE1vZGUiLCJnZXREYXRhU291cmNlc0NvdW50IiwiZGF0YVNvdXJjZXNDb3VudCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJTb3J0ZXJzIiwiZmV0Y2hBbGwiLCJmZXRjaERldGFpbHMiLCJmZXRjaFJlbW90ZVBsdWdpbnMiLCJpbnN0YWxsIiwidW5pbnN0YWxsIiwic2V0RGlzcGxheU1vZGUiLCJzZWxlY3RBbGwiLCJzZWxlY3RCeUlkIiwic2VsZWN0SXNSZXF1ZXN0UGVuZGluZyIsInNlbGVjdFJlcXVlc3RFcnJvciIsInNlbGVjdElzUmVxdWVzdE5vdEZldGNoZWQiLCJzZWxlY3REaXNwbGF5TW9kZSIsInNlbGVjdFBsdWdpbkVycm9ycyIsInVzZUdldEFsbFdpdGhGaWx0ZXJzIiwicXVlcnkiLCJmaWx0ZXJCeSIsImZpbHRlckJ5VHlwZSIsInNvcnRCeSIsIm5hbWVBc2MiLCJ1c2VGZXRjaEFsbCIsImZpbHRlcmVkIiwiZXJyb3IiLCJ1c2VGZXRjaFN0YXR1cyIsInNvcnRlZEFuZEZpbHRlcmVkIiwidXNlR2V0QWxsIiwidXNlR2V0U2luZ2xlIiwidXNlRmV0Y2hEZXRhaWxzIiwidXNlR2V0RXJyb3JzIiwidXNlSW5zdGFsbCIsImlzVXBkYXRpbmciLCJ1c2VVbmluc3RhbGwiLCJ1c2VJc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUiLCJ0eXBlUHJlZml4IiwidXNlRmV0Y2hEZXRhaWxzU3RhdHVzIiwidXNlSW5zdGFsbFN0YXR1cyIsImlzSW5zdGFsbGluZyIsInVzZVVuaW5zdGFsbFN0YXR1cyIsImlzVW5pbnN0YWxsaW5nIiwiaXNOb3RGZXRjaGVkIiwiaXNOb3RGZXRjaGluZyIsInNob3VsZEZldGNoIiwidXNlRGlzcGxheU1vZGUiLCJkaXNwbGF5TW9kZSIsInYiLCJjcmVhdGVTZWxlY3RvciIsIlJlcXVlc3RTdGF0dXMiLCJwbHVnaW5zQWRhcHRlciIsInNlbGVjdFJvb3QiLCJzZWxlY3RJdGVtcyIsIml0ZW1zIiwic2V0dGluZ3MiLCJnZXRTZWxlY3RvcnMiLCJzZWxlY3RJbnN0YWxsZWQiLCJpc0luc3RhbGxlZCIsImlzQ29yZSIsImZpbmRCeUluc3RhbGxBbmRUeXBlIiwiZmluZEJ5S2V5d29yZCIsInNlYXJjaEJ5IiwiZmllbGRzIiwib3JnTmFtZSIsInNvbWUiLCJmIiwiZmlsdGVyZWRQbHVnaW5zIiwic2VhcmNoZWRQbHVnaW5zIiwicCIsIkJvb2xlYW4iLCJwbHVnaW5JZCIsImVycm9yQ29kZSIsInNlbGVjdFJlcXVlc3QiLCJhY3Rpb25UeXBlIiwicmVxdWVzdHMiLCJyZXF1ZXN0Iiwic3RhdHVzIiwiUGVuZGluZyIsIlJlamVjdGVkIiwiUGx1Z2luRXJyb3JDb2RlIiwiUGx1Z2luU2lnbmF0dXJlU3RhdHVzIiwiSG9yaXpvbnRhbEdyb3VwIiwiSW5mb0JveCIsInVzZVRoZW1lIiwiZXJyb3JzIiwiUGx1Z2luc0xpc3QiLCJzaWduYXR1cmVFcnJvck5vdGljZSIsIm1hcFBsdWdpbkVycm9yQ29kZVRvU2lnbmF0dXJlU3RhdHVzIiwiY29kZSIsImludmFsaWRTaWduYXR1cmUiLCJpbnZhbGlkIiwibWlzc2luZ1NpZ25hdHVyZSIsIm1pc3NpbmciLCJtb2RpZmllZFNpZ25hdHVyZSIsIm1vZGlmaWVkIl0sInNvdXJjZVJvb3QiOiIifQ==