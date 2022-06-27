"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DataSourceSettingsPage"],{

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

/***/ "./public/app/features/datasources/settings/BasicSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const BasicSettings = ({
  dataSourceName,
  isDefault,
  onDefaultChange,
  onNameChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "gf-form-group",
    "aria-label": "Datasource settings page basic settings",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gf-form-inline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form max-width-30",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
          label: "Name",
          tooltip: "The name is used when you select the data source in panels. The default data source is 'preselected in new panels.",
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
            id: "basic-settings-name",
            type: "text",
            value: dataSourceName,
            placeholder: "Name",
            onChange: event => onNameChange(event.currentTarget.value),
            required: true,
            "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource.name
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Default",
        labelWidth: 8,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
          id: "basic-settings-default",
          value: isDefault,
          onChange: event => {
            onDefaultChange(event.currentTarget.checked);
          }
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicSettings);

/***/ }),

/***/ "./public/app/features/datasources/settings/ButtonRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const ButtonRow = ({
  canSave,
  canDelete,
  onDelete,
  onSubmit,
  onTest,
  exploreUrl
}) => {
  const canExploreDataSources = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types___WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.DataSourcesExplore);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "gf-form-button-row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      fill: "solid",
      type: "button",
      onClick: () => history.back(),
      children: "Back"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
      variant: "secondary",
      fill: "solid",
      href: exploreUrl,
      disabled: !canExploreDataSources,
      children: "Explore"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "button",
      variant: "destructive",
      disabled: !canDelete,
      onClick: onDelete,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource["delete"],
      children: "Delete"
    }), canSave && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "submit",
      variant: "primary",
      disabled: !canSave,
      onClick: event => onSubmit(event),
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource.saveAndTest,
      children: "Save & test"
    }), !canSave && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "submit",
      variant: "primary",
      onClick: onTest,
      children: "Test"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonRow);

/***/ }),

/***/ "./public/app/features/datasources/settings/CloudInfoBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudInfoBox": () => (/* binding */ CloudInfoBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data_src_types_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const LOCAL_STORAGE_KEY = 'datasources.settings.cloudInfoBox.isDismissed';
const CloudInfoBox = ({
  dataSource
}) => {
  var _dataSource$version;

  let mainDS = '';
  let extraDS = ''; // don't show for already configured data sources or provisioned data sources

  if (dataSource.readOnly || ((_dataSource$version = dataSource.version) !== null && _dataSource$version !== void 0 ? _dataSource$version : 0) > 2) {
    return null;
  } // Skip showing this info box in some editions


  if (app_core_config__WEBPACK_IMPORTED_MODULE_4__.config.buildInfo.edition !== _grafana_data_src_types_config__WEBPACK_IMPORTED_MODULE_1__.GrafanaEdition.OpenSource) {
    return null;
  }

  switch (dataSource.type) {
    case 'prometheus':
      mainDS = 'Prometheus';
      extraDS = 'Loki';
      break;

    case 'loki':
      mainDS = 'Loki';
      extraDS = 'Prometheus';
      break;

    default:
      return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_3__.LocalStorageValueProvider, {
    storageKey: LOCAL_STORAGE_KEY,
    defaultValue: false,
    children: (isDismissed, onDismiss) => {
      if (isDismissed) {
        return null;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: `Configure your ${mainDS} data source below`,
        severity: "info",
        bottomSpacing: 4,
        onRemove: () => {
          onDismiss(true);
        },
        children: ["Or skip the effort and get ", mainDS, " (and ", extraDS, ") as fully-managed, scalable, and hosted data sources from Grafana Labs with the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: "external-link",
          href: `https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${dataSource.type}-settings`,
          target: "_blank",
          rel: "noreferrer",
          title: "The free plan includes 10k active metrics and 50gb storage.",
          children: "free-forever Grafana Cloud plan"
        }), "."]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/features/datasources/settings/DataSourceSettingsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourceSettingsPage": () => (/* binding */ DataSourceSettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
/* harmony import */ var app_types___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/datasources/state/navModel.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var _BasicSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/datasources/settings/BasicSettings.tsx");
/* harmony import */ var _ButtonRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/datasources/settings/ButtonRow.tsx");
/* harmony import */ var _CloudInfoBox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/datasources/settings/CloudInfoBox.tsx");
/* harmony import */ var _PluginSettings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/datasources/settings/PluginSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _label;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function mapStateToProps(state, props) {
  const dataSourceId = props.match.params.uid;
  const params = new URLSearchParams(props.location.search);
  const dataSource = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_16__.getDataSource)(state.dataSources, dataSourceId);
  const {
    plugin,
    loadError,
    loading,
    testingStatus
  } = state.dataSourceSettings;
  const page = params.get('page');
  const nav = plugin ? (0,_state_navModel__WEBPACK_IMPORTED_MODULE_14__.getDataSourceNav)((0,_state_navModel__WEBPACK_IMPORTED_MODULE_14__.buildNavModel)(dataSource, plugin), page || 'settings') : (0,_state_navModel__WEBPACK_IMPORTED_MODULE_14__.getDataSourceLoadingNav)('settings');
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, page ? `datasource-page-${page}` : `datasource-settings-${dataSourceId}`, nav);
  return {
    dataSource: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_16__.getDataSource)(state.dataSources, dataSourceId),
    dataSourceMeta: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_16__.getDataSourceMeta)(state.dataSources, dataSource.type),
    dataSourceId: dataSourceId,
    page,
    plugin,
    loadError,
    loading,
    testingStatus,
    navModel
  };
}

const mapDispatchToProps = {
  deleteDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_13__.deleteDataSource,
  loadDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_13__.loadDataSource,
  setDataSourceName: _state_reducers__WEBPACK_IMPORTED_MODULE_15__.setDataSourceName,
  updateDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_13__.updateDataSource,
  setIsDefault: _state_reducers__WEBPACK_IMPORTED_MODULE_15__.setIsDefault,
  dataSourceLoaded: _state_reducers__WEBPACK_IMPORTED_MODULE_15__.dataSourceLoaded,
  initDataSourceSettings: _state_actions__WEBPACK_IMPORTED_MODULE_13__.initDataSourceSettings,
  testDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_13__.testDataSource,
  cleanUpAction: app_core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_5__.cleanUpAction
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class DataSourceSettingsPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", async evt => {
      evt.preventDefault();
      await this.props.updateDataSource(Object.assign({}, this.props.dataSource));
      this.testDataSource();
    });

    _defineProperty(this, "onTest", async evt => {
      evt.preventDefault();
      this.testDataSource();
    });

    _defineProperty(this, "onDelete", () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_6__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_12__.ShowConfirmModalEvent({
        title: 'Delete',
        text: `Are you sure you want to delete the "${this.props.dataSource.name}" data source?`,
        yesText: 'Delete',
        icon: 'trash-alt',
        onConfirm: () => {
          this.confirmDelete();
        }
      }));
    });

    _defineProperty(this, "confirmDelete", () => {
      this.props.deleteDataSource();
    });

    _defineProperty(this, "onModelChange", dataSource => {
      this.props.dataSourceLoaded(dataSource);
    });
  }

  componentDidMount() {
    const {
      initDataSourceSettings,
      dataSourceId
    } = this.props;
    initDataSourceSettings(dataSourceId);
  }

  componentWillUnmount() {
    this.props.cleanUpAction({
      stateSelector: state => state.dataSourceSettings
    });
  }

  isReadOnly() {
    return this.props.dataSource.readOnly === true;
  }

  renderIsReadOnlyMessage() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.DataSource.readOnly,
      severity: "info",
      title: "Provisioned data source",
      children: "This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source."
    });
  }

  renderMissingEditRightsMessage() {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      severity: "info",
      title: "Missing rights",
      children: "You are not allowed to modify this data source. Please contact your server admin to update this data source."
    }));
  }

  testDataSource() {
    const {
      dataSource,
      testDataSource
    } = this.props;
    testDataSource(dataSource.name);
  }

  get hasDataSource() {
    return this.props.dataSource.id > 0;
  }

  onNavigateToExplore() {
    const {
      dataSource
    } = this.props;
    const exploreState = JSON.stringify({
      datasource: dataSource.name,
      context: 'explore'
    });
    const url = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.urlUtil.renderUrl('/explore', {
      left: exploreState
    });
    return url;
  }

  renderLoadError() {
    const {
      loadError,
      dataSource
    } = this.props;
    const canDeleteDataSource = !this.isReadOnly() && app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermissionInMetadata(app_types___WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.DataSourcesDelete, dataSource);
    const node = {
      text: loadError,
      subTitle: 'Data Source Error',
      icon: 'exclamation-triangle'
    };
    const nav = {
      node: node,
      main: node
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"], {
      navModel: nav,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"].Contents, {
        isLoading: this.props.loading,
        children: [this.isReadOnly() && this.renderIsReadOnlyMessage(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "gf-form-button-row",
          children: [canDeleteDataSource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            type: "submit",
            variant: "destructive",
            onClick: this.onDelete,
            children: "Delete"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "secondary",
            fill: "outline",
            type: "button",
            onClick: () => history.back(),
            children: "Back"
          })]
        })]
      })
    });
  }

  renderConfigPageBody(page) {
    const {
      plugin
    } = this.props;

    if (!plugin || !plugin.configPages) {
      return null; // still loading
    }

    for (const p of plugin.configPages) {
      if (p.id === page) {
        // Investigate is any plugins using this? We should change this interface
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(p.body, {
          plugin: plugin,
          query: {}
        });
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      children: ["Page not found: ", page]
    });
  }

  renderAlertDetails() {
    var _testingStatus$detail, _testingStatus$detail2, _testingStatus$detail3;

    const {
      testingStatus
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: [testingStatus === null || testingStatus === void 0 ? void 0 : (_testingStatus$detail = testingStatus.details) === null || _testingStatus$detail === void 0 ? void 0 : _testingStatus$detail.message, testingStatus !== null && testingStatus !== void 0 && (_testingStatus$detail2 = testingStatus.details) !== null && _testingStatus$detail2 !== void 0 && _testingStatus$detail2.verboseMessage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("details", {
        style: {
          whiteSpace: 'pre-wrap'
        },
        children: testingStatus === null || testingStatus === void 0 ? void 0 : (_testingStatus$detail3 = testingStatus.details) === null || _testingStatus$detail3 === void 0 ? void 0 : _testingStatus$detail3.verboseMessage
      }) : null]
    });
  }

  renderSettings() {
    const {
      dataSourceMeta,
      setDataSourceName,
      setIsDefault,
      dataSource,
      plugin,
      testingStatus
    } = this.props;
    const canWriteDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermissionInMetadata(app_types___WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.DataSourcesWrite, dataSource);
    const canDeleteDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermissionInMetadata(app_types___WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.DataSourcesDelete, dataSource);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("form", {
      onSubmit: this.onSubmit,
      children: [!canWriteDataSource && this.renderMissingEditRightsMessage(), this.isReadOnly() && this.renderIsReadOnlyMessage(), dataSourceMeta.state && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: "gf-form",
        children: [_label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("label", {
          className: "gf-form-label width-10",
          children: "Plugin state"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("label", {
          className: "gf-form-label gf-form-label--transparent",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_10__.PluginStateInfo, {
            state: dataSourceMeta.state
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_CloudInfoBox__WEBPACK_IMPORTED_MODULE_19__.CloudInfoBox, {
        dataSource: dataSource
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_BasicSettings__WEBPACK_IMPORTED_MODULE_17__["default"], {
        dataSourceName: dataSource.name,
        isDefault: dataSource.isDefault,
        onDefaultChange: state => setIsDefault(state),
        onNameChange: name => setDataSourceName(name)
      }), plugin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_PluginSettings__WEBPACK_IMPORTED_MODULE_20__.PluginSettings, {
        plugin: plugin,
        dataSource: dataSource,
        dataSourceMeta: dataSourceMeta,
        onModelChange: this.onModelChange
      }), (testingStatus === null || testingStatus === void 0 ? void 0 : testingStatus.message) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "gf-form-group p-t-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
          severity: testingStatus.status === 'error' ? 'error' : 'success',
          title: testingStatus.message,
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.DataSource.alert,
          children: testingStatus.details && this.renderAlertDetails()
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ButtonRow__WEBPACK_IMPORTED_MODULE_18__["default"], {
        onSubmit: event => this.onSubmit(event),
        canSave: !this.isReadOnly() && canWriteDataSource,
        canDelete: !this.isReadOnly() && canDeleteDataSource,
        onDelete: this.onDelete,
        onTest: event => this.onTest(event),
        exploreUrl: this.onNavigateToExplore()
      })]
    });
  }

  render() {
    const {
      navModel,
      page,
      loadError,
      loading
    } = this.props;

    if (loadError) {
      return this.renderLoadError();
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"].Contents, {
        isLoading: loading,
        children: this.hasDataSource ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
          children: page ? this.renderConfigPageBody(page) : this.renderSettings()
        }) : null
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourceSettingsPage));

/***/ }),

/***/ "./public/app/features/datasources/settings/PluginSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginSettings": () => (/* binding */ PluginSettings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PluginSettings extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "component", void 0);

    _defineProperty(this, "scopeProps", void 0);

    _defineProperty(this, "onModelChanged", dataSource => {
      this.props.onModelChange(dataSource);
    });

    this.scopeProps = {
      ctrl: {
        datasourceMeta: props.dataSourceMeta,
        current: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(props.dataSource)
      },
      onModelChanged: this.onModelChanged
    };
    this.onModelChanged = this.onModelChanged.bind(this);
  }

  componentDidMount() {
    const {
      plugin
    } = this.props;

    if (!this.element) {
      return;
    }

    if (!plugin.components.ConfigEditor) {
      // React editor is not specified, let's render angular editor
      // How to approach this better? Introduce ReactDataSourcePlugin interface and typeguard it here?
      const loader = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getAngularLoader)();
      const template = '<plugin-component type="datasource-config-ctrl" />';
      this.component = loader.load(this.element, this.scopeProps, template);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      plugin
    } = this.props;

    if (!plugin.components.ConfigEditor && this.props.dataSource !== prevProps.dataSource) {
      var _this$component;

      this.scopeProps.ctrl.current = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(this.props.dataSource);
      (_this$component = this.component) === null || _this$component === void 0 ? void 0 : _this$component.digest();
    }
  }

  componentWillUnmount() {
    if (this.component) {
      this.component.destroy();
    }
  }

  render() {
    const {
      plugin,
      dataSource
    } = this.props;

    if (!plugin) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ref: element => this.element = element,
      children: plugin.components.ConfigEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(plugin.components.ConfigEditor, {
        options: dataSource,
        onOptionsChange: this.onModelChanged
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginSettings);

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

/***/ "./public/app/features/plugins/components/PluginStateInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginStateInfo": () => (/* binding */ PluginStateInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const PluginStateInfo = props => {
  const display = getFeatureStateInfo(props.state);

  if (!display) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
    color: display.color,
    title: display.tooltip,
    text: display.text,
    icon: display.icon
  });
};

function getFeatureStateInfo(state) {
  switch (state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.deprecated:
      return {
        text: 'Deprecated',
        color: 'red',
        tooltip: `This feature is deprecated and will be removed in a future release`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.alpha:
      return {
        text: 'Alpha',
        color: 'blue',
        tooltip: `This feature is experimental and future updates might not be backward compatible`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.beta:
      return {
        text: 'Beta',
        color: 'blue',
        tooltip: `This feature is close to complete but not fully tested`
      };

    default:
      return null;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVNvdXJjZVNldHRpbmdzUGFnZS40NmY4MjkwNzg1ZWJjNTFmZWU4Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNDLE9BQVQsR0FBbUI7RUFBQTs7RUFDeEIsTUFBTUMsTUFBTSwwQkFBR0Ysb0VBQUgsd0RBQUcsb0JBQW9CSSxXQUFuQztFQUNBLE9BQU8sQ0FBQyxFQUFFRixNQUFNLElBQUlBLE1BQU0sR0FBRyxDQUFyQixDQUFSO0FBQ0Q7QUFFTSxNQUFNRyxjQUFjLEdBQUcsTUFBTUosT0FBTyxNQUFNRCx5RkFBMUM7Ozs7Ozs7Ozs7Ozs7OztBQ1BQO0FBRUE7QUFDQTs7OztBQVNBLE1BQU1hLGFBQXdCLEdBQUcsQ0FBQztFQUFFQyxjQUFGO0VBQWtCQyxTQUFsQjtFQUE2QkMsZUFBN0I7RUFBOENDO0FBQTlDLENBQUQsS0FBa0U7RUFDakcsb0JBQ0U7SUFBSyxTQUFTLEVBQUMsZUFBZjtJQUErQixjQUFXLHlDQUExQztJQUFBLHVCQUNFO01BQUssU0FBUyxFQUFDLGdCQUFmO01BQUEsd0JBQ0U7UUFBSyxTQUFTLEVBQUMsc0JBQWY7UUFBQSx1QkFDRSx1REFBQyxvREFBRDtVQUNFLEtBQUssRUFBQyxNQURSO1VBRUUsT0FBTyxFQUFDLG9IQUZWO1VBSUUsSUFBSSxNQUpOO1VBQUEsdUJBTUUsdURBQUMsOENBQUQ7WUFDRSxFQUFFLEVBQUMscUJBREw7WUFFRSxJQUFJLEVBQUMsTUFGUDtZQUdFLEtBQUssRUFBRUgsY0FIVDtZQUlFLFdBQVcsRUFBQyxNQUpkO1lBS0UsUUFBUSxFQUFHSSxLQUFELElBQVdELFlBQVksQ0FBQ0MsS0FBSyxDQUFDQyxhQUFOLENBQW9CQyxLQUFyQixDQUxuQztZQU1FLFFBQVEsTUFOVjtZQU9FLGNBQVlYLG1GQUErQmM7VUFQN0M7UUFORjtNQURGLEVBREYsZUFvQkUsdURBQUMsb0RBQUQ7UUFBYSxLQUFLLEVBQUMsU0FBbkI7UUFBNkIsVUFBVSxFQUFFLENBQXpDO1FBQUEsdUJBQ0UsdURB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TDJQLEtBQUssRUFBRSxNQUZGO1FBR0xDLE9BQU8sRUFBRztNQUhMLENBQVA7O0lBS0YsS0FBS0wsMkRBQUw7TUFDRSxPQUFPO1FBQ0x2UCxJQUFJLEVBQUUsTUFERDtRQUVMMlAsS0FBSyxFQUFFLE1BRkY7UUFHTEMsT0FBTyxFQUFHO01BSEwsQ0FBUDs7SUFLRjtNQUNFLE9BQU8sSUFBUDtFQXBCSjtBQXNCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3NldHRpbmdzL0Jhc2ljU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3NldHRpbmdzL0J1dHRvblJvdy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc2V0dGluZ3MvQ2xvdWRJbmZvQm94LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zZXR0aW5ncy9EYXRhU291cmNlU2V0dGluZ3NQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zZXR0aW5ncy9QbHVnaW5TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9idWlsZENhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvY29tcG9uZW50cy9QbHVnaW5TdGF0ZUluZm8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJpYWwoKSB7XG4gIGNvbnN0IGV4cGlyeSA9IGNvbmZpZy5saWNlbnNlSW5mbz8udHJpYWxFeHBpcnk7XG4gIHJldHVybiAhIShleHBpcnkgJiYgZXhwaXJ5ID4gMCk7XG59XG5cbmV4cG9ydCBjb25zdCBoaWdobGlnaHRUcmlhbCA9ICgpID0+IGlzVHJpYWwoKSAmJiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZVN3aXRjaCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhU291cmNlTmFtZTogc3RyaW5nO1xuICBpc0RlZmF1bHQ6IGJvb2xlYW47XG4gIG9uTmFtZUNoYW5nZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZDtcbiAgb25EZWZhdWx0Q2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IEJhc2ljU2V0dGluZ3M6IEZDPFByb3BzPiA9ICh7IGRhdGFTb3VyY2VOYW1lLCBpc0RlZmF1bHQsIG9uRGVmYXVsdENoYW5nZSwgb25OYW1lQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIiBhcmlhLWxhYmVsPVwiRGF0YXNvdXJjZSBzZXR0aW5ncyBwYWdlIGJhc2ljIHNldHRpbmdzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBtYXgtd2lkdGgtMzBcIj5cbiAgICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICB0b29sdGlwPVwiVGhlIG5hbWUgaXMgdXNlZCB3aGVuIHlvdSBzZWxlY3QgdGhlIGRhdGEgc291cmNlIGluIHBhbmVscy4gVGhlIGRlZmF1bHQgZGF0YSBzb3VyY2UgaXNcbiAgICAgICAgICAgICAgJ3ByZXNlbGVjdGVkIGluIG5ldyBwYW5lbHMuXCJcbiAgICAgICAgICAgIGdyb3dcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1zZXR0aW5ncy1uYW1lXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVNvdXJjZU5hbWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uTmFtZUNoYW5nZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLkRhdGFTb3VyY2UubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiRGVmYXVsdFwiIGxhYmVsV2lkdGg9ezh9PlxuICAgICAgICAgIDxJbmxpbmVTd2l0Y2hcbiAgICAgICAgICAgIGlkPVwiYmFzaWMtc2V0dGluZ3MtZGVmYXVsdFwiXG4gICAgICAgICAgICB2YWx1ZT17aXNEZWZhdWx0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIG9uRGVmYXVsdENoYW5nZShldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNpY1NldHRpbmdzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEJ1dHRvbiwgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMvJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGV4cGxvcmVVcmw6IHN0cmluZztcbiAgY2FuU2F2ZTogYm9vbGVhbjtcbiAgY2FuRGVsZXRlOiBib29sZWFuO1xuICBvbkRlbGV0ZTogKCkgPT4gdm9pZDtcbiAgb25TdWJtaXQ6IChldmVudDogYW55KSA9PiB2b2lkO1xuICBvblRlc3Q6IChldmVudDogYW55KSA9PiB2b2lkO1xufVxuXG5jb25zdCBCdXR0b25Sb3c6IEZDPFByb3BzPiA9ICh7IGNhblNhdmUsIGNhbkRlbGV0ZSwgb25EZWxldGUsIG9uU3VibWl0LCBvblRlc3QsIGV4cGxvcmVVcmwgfSkgPT4ge1xuICBjb25zdCBjYW5FeHBsb3JlRGF0YVNvdXJjZXMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc0V4cGxvcmUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGZpbGw9XCJzb2xpZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LmJhY2soKX0+XG4gICAgICAgIEJhY2tcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGZpbGw9XCJzb2xpZFwiIGhyZWY9e2V4cGxvcmVVcmx9IGRpc2FibGVkPXshY2FuRXhwbG9yZURhdGFTb3VyY2VzfT5cbiAgICAgICAgRXhwbG9yZVxuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFjYW5EZWxldGV9XG4gICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlfVxuICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuRGF0YVNvdXJjZS5kZWxldGV9XG4gICAgICA+XG4gICAgICAgIERlbGV0ZVxuICAgICAgPC9CdXR0b24+XG4gICAgICB7Y2FuU2F2ZSAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgZGlzYWJsZWQ9eyFjYW5TYXZlfVxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gb25TdWJtaXQoZXZlbnQpfVxuICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5EYXRhU291cmNlLnNhdmVBbmRUZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZSAmYW1wOyB0ZXN0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHshY2FuU2F2ZSAmJiAoXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17b25UZXN0fT5cbiAgICAgICAgICBUZXN0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblJvdztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNldHRpbmdzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBHcmFmYW5hRWRpdGlvbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEvc3JjL3R5cGVzL2NvbmZpZyc7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0xvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXInO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuY29uc3QgTE9DQUxfU1RPUkFHRV9LRVkgPSAnZGF0YXNvdXJjZXMuc2V0dGluZ3MuY2xvdWRJbmZvQm94LmlzRGlzbWlzc2VkJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncztcbn1cblxuZXhwb3J0IGNvbnN0IENsb3VkSW5mb0JveDogRkM8UHJvcHM+ID0gKHsgZGF0YVNvdXJjZSB9KSA9PiB7XG4gIGxldCBtYWluRFMgPSAnJztcbiAgbGV0IGV4dHJhRFMgPSAnJztcblxuICAvLyBkb24ndCBzaG93IGZvciBhbHJlYWR5IGNvbmZpZ3VyZWQgZGF0YSBzb3VyY2VzIG9yIHByb3Zpc2lvbmVkIGRhdGEgc291cmNlc1xuICBpZiAoZGF0YVNvdXJjZS5yZWFkT25seSB8fCAoZGF0YVNvdXJjZS52ZXJzaW9uID8/IDApID4gMikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gU2tpcCBzaG93aW5nIHRoaXMgaW5mbyBib3ggaW4gc29tZSBlZGl0aW9uc1xuICBpZiAoY29uZmlnLmJ1aWxkSW5mby5lZGl0aW9uICE9PSBHcmFmYW5hRWRpdGlvbi5PcGVuU291cmNlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzd2l0Y2ggKGRhdGFTb3VyY2UudHlwZSkge1xuICAgIGNhc2UgJ3Byb21ldGhldXMnOlxuICAgICAgbWFpbkRTID0gJ1Byb21ldGhldXMnO1xuICAgICAgZXh0cmFEUyA9ICdMb2tpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xva2knOlxuICAgICAgbWFpbkRTID0gJ0xva2knO1xuICAgICAgZXh0cmFEUyA9ICdQcm9tZXRoZXVzJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXI8Ym9vbGVhbj4gc3RvcmFnZUtleT17TE9DQUxfU1RPUkFHRV9LRVl9IGRlZmF1bHRWYWx1ZT17ZmFsc2V9PlxuICAgICAgeyhpc0Rpc21pc3NlZCwgb25EaXNtaXNzKSA9PiB7XG4gICAgICAgIGlmIChpc0Rpc21pc3NlZCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICB0aXRsZT17YENvbmZpZ3VyZSB5b3VyICR7bWFpbkRTfSBkYXRhIHNvdXJjZSBiZWxvd2B9XG4gICAgICAgICAgICBzZXZlcml0eT1cImluZm9cIlxuICAgICAgICAgICAgYm90dG9tU3BhY2luZz17NH1cbiAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgIG9uRGlzbWlzcyh0cnVlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgT3Igc2tpcCB0aGUgZWZmb3J0IGFuZCBnZXQge21haW5EU30gKGFuZCB7ZXh0cmFEU30pIGFzIGZ1bGx5LW1hbmFnZWQsIHNjYWxhYmxlLCBhbmQgaG9zdGVkIGRhdGEgc291cmNlcyBmcm9tXG4gICAgICAgICAgICBHcmFmYW5hIExhYnMgd2l0aCB0aGV7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2dyYWZhbmEuY29tL3NpZ251cC9jbG91ZC9jb25uZWN0LWFjY291bnQ/c3JjPWdyYWZhbmEtb3NzJmNudD0ke2RhdGFTb3VyY2UudHlwZX0tc2V0dGluZ3NgfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJUaGUgZnJlZSBwbGFuIGluY2x1ZGVzIDEwayBhY3RpdmUgbWV0cmljcyBhbmQgNTBnYiBzdG9yYWdlLlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGZyZWUtZm9yZXZlciBHcmFmYW5hIENsb3VkIHBsYW5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L0xvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVNldHRpbmdzLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjbGVhblVwQWN0aW9uIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucy9jbGVhblVwJztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgUGx1Z2luU3RhdGVJbmZvIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvY29tcG9uZW50cy9QbHVnaW5TdGF0ZUluZm8nO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSwgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcy8nO1xuXG5pbXBvcnQgeyBTaG93Q29uZmlybU1vZGFsRXZlbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ldmVudHMnO1xuaW1wb3J0IHtcbiAgZGVsZXRlRGF0YVNvdXJjZSxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyxcbiAgbG9hZERhdGFTb3VyY2UsXG4gIHRlc3REYXRhU291cmNlLFxuICB1cGRhdGVEYXRhU291cmNlLFxufSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2VMb2FkaW5nTmF2LCBidWlsZE5hdk1vZGVsLCBnZXREYXRhU291cmNlTmF2IH0gZnJvbSAnLi4vc3RhdGUvbmF2TW9kZWwnO1xuaW1wb3J0IHsgZGF0YVNvdXJjZUxvYWRlZCwgc2V0RGF0YVNvdXJjZU5hbWUsIHNldElzRGVmYXVsdCB9IGZyb20gJy4uL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2UsIGdldERhdGFTb3VyY2VNZXRhIH0gZnJvbSAnLi4vc3RhdGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IEJhc2ljU2V0dGluZ3MgZnJvbSAnLi9CYXNpY1NldHRpbmdzJztcbmltcG9ydCBCdXR0b25Sb3cgZnJvbSAnLi9CdXR0b25Sb3cnO1xuaW1wb3J0IHsgQ2xvdWRJbmZvQm94IH0gZnJvbSAnLi9DbG91ZEluZm9Cb3gnO1xuaW1wb3J0IHsgUGx1Z2luU2V0dGluZ3MgfSBmcm9tICcuL1BsdWdpblNldHRpbmdzJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogT3duUHJvcHMpIHtcbiAgY29uc3QgZGF0YVNvdXJjZUlkID0gcHJvcHMubWF0Y2gucGFyYW1zLnVpZDtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwcm9wcy5sb2NhdGlvbi5zZWFyY2gpO1xuICBjb25zdCBkYXRhU291cmNlID0gZ2V0RGF0YVNvdXJjZShzdGF0ZS5kYXRhU291cmNlcywgZGF0YVNvdXJjZUlkKTtcbiAgY29uc3QgeyBwbHVnaW4sIGxvYWRFcnJvciwgbG9hZGluZywgdGVzdGluZ1N0YXR1cyB9ID0gc3RhdGUuZGF0YVNvdXJjZVNldHRpbmdzO1xuICBjb25zdCBwYWdlID0gcGFyYW1zLmdldCgncGFnZScpO1xuXG4gIGNvbnN0IG5hdiA9IHBsdWdpblxuICAgID8gZ2V0RGF0YVNvdXJjZU5hdihidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2UsIHBsdWdpbiksIHBhZ2UgfHwgJ3NldHRpbmdzJylcbiAgICA6IGdldERhdGFTb3VyY2VMb2FkaW5nTmF2KCdzZXR0aW5ncycpO1xuXG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwoXG4gICAgc3RhdGUubmF2SW5kZXgsXG4gICAgcGFnZSA/IGBkYXRhc291cmNlLXBhZ2UtJHtwYWdlfWAgOiBgZGF0YXNvdXJjZS1zZXR0aW5ncy0ke2RhdGFTb3VyY2VJZH1gLFxuICAgIG5hdlxuICApO1xuXG4gIHJldHVybiB7XG4gICAgZGF0YVNvdXJjZTogZ2V0RGF0YVNvdXJjZShzdGF0ZS5kYXRhU291cmNlcywgZGF0YVNvdXJjZUlkKSxcbiAgICBkYXRhU291cmNlTWV0YTogZ2V0RGF0YVNvdXJjZU1ldGEoc3RhdGUuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UudHlwZSksXG4gICAgZGF0YVNvdXJjZUlkOiBkYXRhU291cmNlSWQsXG4gICAgcGFnZSxcbiAgICBwbHVnaW4sXG4gICAgbG9hZEVycm9yLFxuICAgIGxvYWRpbmcsXG4gICAgdGVzdGluZ1N0YXR1cyxcbiAgICBuYXZNb2RlbCxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBkZWxldGVEYXRhU291cmNlLFxuICBsb2FkRGF0YVNvdXJjZSxcbiAgc2V0RGF0YVNvdXJjZU5hbWUsXG4gIHVwZGF0ZURhdGFTb3VyY2UsXG4gIHNldElzRGVmYXVsdCxcbiAgZGF0YVNvdXJjZUxvYWRlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyxcbiAgdGVzdERhdGFTb3VyY2UsXG4gIGNsZWFuVXBBY3Rpb24sXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY2xhc3MgRGF0YVNvdXJjZVNldHRpbmdzUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBpbml0RGF0YVNvdXJjZVNldHRpbmdzLCBkYXRhU291cmNlSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyhkYXRhU291cmNlSWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5jbGVhblVwQWN0aW9uKHtcbiAgICAgIHN0YXRlU2VsZWN0b3I6IChzdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZVNldHRpbmdzLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXdhaXQgdGhpcy5wcm9wcy51cGRhdGVEYXRhU291cmNlKHsgLi4udGhpcy5wcm9wcy5kYXRhU291cmNlIH0pO1xuXG4gICAgdGhpcy50ZXN0RGF0YVNvdXJjZSgpO1xuICB9O1xuXG4gIG9uVGVzdCA9IGFzeW5jIChldnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnRlc3REYXRhU291cmNlKCk7XG4gIH07XG5cbiAgb25EZWxldGUgPSAoKSA9PiB7XG4gICAgYXBwRXZlbnRzLnB1Ymxpc2goXG4gICAgICBuZXcgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50KHtcbiAgICAgICAgdGl0bGU6ICdEZWxldGUnLFxuICAgICAgICB0ZXh0OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgXCIke3RoaXMucHJvcHMuZGF0YVNvdXJjZS5uYW1lfVwiIGRhdGEgc291cmNlP2AsXG4gICAgICAgIHllc1RleHQ6ICdEZWxldGUnLFxuICAgICAgICBpY29uOiAndHJhc2gtYWx0JyxcbiAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb25maXJtRGVsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uZmlybURlbGV0ZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmRlbGV0ZURhdGFTb3VyY2UoKTtcbiAgfTtcblxuICBvbk1vZGVsQ2hhbmdlID0gKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncykgPT4ge1xuICAgIHRoaXMucHJvcHMuZGF0YVNvdXJjZUxvYWRlZChkYXRhU291cmNlKTtcbiAgfTtcblxuICBpc1JlYWRPbmx5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFTb3VyY2UucmVhZE9ubHkgPT09IHRydWU7XG4gIH1cblxuICByZW5kZXJJc1JlYWRPbmx5TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0IGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5EYXRhU291cmNlLnJlYWRPbmx5fSBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIlByb3Zpc2lvbmVkIGRhdGEgc291cmNlXCI+XG4gICAgICAgIFRoaXMgZGF0YSBzb3VyY2Ugd2FzIGFkZGVkIGJ5IGNvbmZpZyBhbmQgY2Fubm90IGJlIG1vZGlmaWVkIHVzaW5nIHRoZSBVSS4gUGxlYXNlIGNvbnRhY3QgeW91ciBzZXJ2ZXIgYWRtaW4gdG9cbiAgICAgICAgdXBkYXRlIHRoaXMgZGF0YSBzb3VyY2UuXG4gICAgICA8L0FsZXJ0PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNaXNzaW5nRWRpdFJpZ2h0c01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIk1pc3NpbmcgcmlnaHRzXCI+XG4gICAgICAgIFlvdSBhcmUgbm90IGFsbG93ZWQgdG8gbW9kaWZ5IHRoaXMgZGF0YSBzb3VyY2UuIFBsZWFzZSBjb250YWN0IHlvdXIgc2VydmVyIGFkbWluIHRvIHVwZGF0ZSB0aGlzIGRhdGEgc291cmNlLlxuICAgICAgPC9BbGVydD5cbiAgICApO1xuICB9XG5cbiAgdGVzdERhdGFTb3VyY2UoKSB7XG4gICAgY29uc3QgeyBkYXRhU291cmNlLCB0ZXN0RGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0ZXN0RGF0YVNvdXJjZShkYXRhU291cmNlLm5hbWUpO1xuICB9XG5cbiAgZ2V0IGhhc0RhdGFTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YVNvdXJjZS5pZCA+IDA7XG4gIH1cblxuICBvbk5hdmlnYXRlVG9FeHBsb3JlKCkge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBleHBsb3JlU3RhdGUgPSBKU09OLnN0cmluZ2lmeSh7IGRhdGFzb3VyY2U6IGRhdGFTb3VyY2UubmFtZSwgY29udGV4dDogJ2V4cGxvcmUnIH0pO1xuICAgIGNvbnN0IHVybCA9IHVybFV0aWwucmVuZGVyVXJsKCcvZXhwbG9yZScsIHsgbGVmdDogZXhwbG9yZVN0YXRlIH0pO1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICByZW5kZXJMb2FkRXJyb3IoKSB7XG4gICAgY29uc3QgeyBsb2FkRXJyb3IsIGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2FuRGVsZXRlRGF0YVNvdXJjZSA9XG4gICAgICAhdGhpcy5pc1JlYWRPbmx5KCkgJiYgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzRGVsZXRlLCBkYXRhU291cmNlKTtcblxuICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICB0ZXh0OiBsb2FkRXJyb3IhLFxuICAgICAgc3ViVGl0bGU6ICdEYXRhIFNvdXJjZSBFcnJvcicsXG4gICAgICBpY29uOiAnZXhjbGFtYXRpb24tdHJpYW5nbGUnLFxuICAgIH07XG4gICAgY29uc3QgbmF2ID0ge1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIG1haW46IG5vZGUsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2fT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9PlxuICAgICAgICAgIHt0aGlzLmlzUmVhZE9ubHkoKSAmJiB0aGlzLnJlbmRlcklzUmVhZE9ubHlNZXNzYWdlKCl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICAgIHtjYW5EZWxldGVEYXRhU291cmNlICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17dGhpcy5vbkRlbGV0ZX0+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGZpbGw9XCJvdXRsaW5lXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkuYmFjaygpfT5cbiAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ29uZmlnUGFnZUJvZHkocGFnZTogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBwbHVnaW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFwbHVnaW4gfHwgIXBsdWdpbi5jb25maWdQYWdlcykge1xuICAgICAgcmV0dXJuIG51bGw7IC8vIHN0aWxsIGxvYWRpbmdcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgICBpZiAocC5pZCA9PT0gcGFnZSkge1xuICAgICAgICAvLyBJbnZlc3RpZ2F0ZSBpcyBhbnkgcGx1Z2lucyB1c2luZyB0aGlzPyBXZSBzaG91bGQgY2hhbmdlIHRoaXMgaW50ZXJmYWNlXG4gICAgICAgIHJldHVybiA8cC5ib2R5IHBsdWdpbj17cGx1Z2lufSBxdWVyeT17e319IC8+O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2PlBhZ2Ugbm90IGZvdW5kOiB7cGFnZX08L2Rpdj47XG4gIH1cblxuICByZW5kZXJBbGVydERldGFpbHMoKSB7XG4gICAgY29uc3QgeyB0ZXN0aW5nU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHt0ZXN0aW5nU3RhdHVzPy5kZXRhaWxzPy5tZXNzYWdlfVxuICAgICAgICB7dGVzdGluZ1N0YXR1cz8uZGV0YWlscz8udmVyYm9zZU1lc3NhZ2UgPyAoXG4gICAgICAgICAgPGRldGFpbHMgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyB9fT57dGVzdGluZ1N0YXR1cz8uZGV0YWlscz8udmVyYm9zZU1lc3NhZ2V9PC9kZXRhaWxzPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTZXR0aW5ncygpIHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2VNZXRhLCBzZXREYXRhU291cmNlTmFtZSwgc2V0SXNEZWZhdWx0LCBkYXRhU291cmNlLCBwbHVnaW4sIHRlc3RpbmdTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2FuV3JpdGVEYXRhU291cmNlID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzV3JpdGUsIGRhdGFTb3VyY2UpO1xuICAgIGNvbnN0IGNhbkRlbGV0ZURhdGFTb3VyY2UgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNEZWxldGUsIGRhdGFTb3VyY2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cbiAgICAgICAgeyFjYW5Xcml0ZURhdGFTb3VyY2UgJiYgdGhpcy5yZW5kZXJNaXNzaW5nRWRpdFJpZ2h0c01lc3NhZ2UoKX1cbiAgICAgICAge3RoaXMuaXNSZWFkT25seSgpICYmIHRoaXMucmVuZGVySXNSZWFkT25seU1lc3NhZ2UoKX1cbiAgICAgICAge2RhdGFTb3VyY2VNZXRhLnN0YXRlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTEwXCI+UGx1Z2luIHN0YXRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIGdmLWZvcm0tbGFiZWwtLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgIDxQbHVnaW5TdGF0ZUluZm8gc3RhdGU9e2RhdGFTb3VyY2VNZXRhLnN0YXRlfSAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8Q2xvdWRJbmZvQm94IGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IC8+XG5cbiAgICAgICAgPEJhc2ljU2V0dGluZ3NcbiAgICAgICAgICBkYXRhU291cmNlTmFtZT17ZGF0YVNvdXJjZS5uYW1lfVxuICAgICAgICAgIGlzRGVmYXVsdD17ZGF0YVNvdXJjZS5pc0RlZmF1bHR9XG4gICAgICAgICAgb25EZWZhdWx0Q2hhbmdlPXsoc3RhdGUpID0+IHNldElzRGVmYXVsdChzdGF0ZSl9XG4gICAgICAgICAgb25OYW1lQ2hhbmdlPXsobmFtZSkgPT4gc2V0RGF0YVNvdXJjZU5hbWUobmFtZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3BsdWdpbiAmJiAoXG4gICAgICAgICAgPFBsdWdpblNldHRpbmdzXG4gICAgICAgICAgICBwbHVnaW49e3BsdWdpbn1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICBkYXRhU291cmNlTWV0YT17ZGF0YVNvdXJjZU1ldGF9XG4gICAgICAgICAgICBvbk1vZGVsQ2hhbmdlPXt0aGlzLm9uTW9kZWxDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7dGVzdGluZ1N0YXR1cz8ubWVzc2FnZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwIHAtdC0yXCI+XG4gICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgc2V2ZXJpdHk9e3Rlc3RpbmdTdGF0dXMuc3RhdHVzID09PSAnZXJyb3InID8gJ2Vycm9yJyA6ICdzdWNjZXNzJ31cbiAgICAgICAgICAgICAgdGl0bGU9e3Rlc3RpbmdTdGF0dXMubWVzc2FnZX1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLkRhdGFTb3VyY2UuYWxlcnR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0ZXN0aW5nU3RhdHVzLmRldGFpbHMgJiYgdGhpcy5yZW5kZXJBbGVydERldGFpbHMoKX1cbiAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEJ1dHRvblJvd1xuICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHRoaXMub25TdWJtaXQoZXZlbnQpfVxuICAgICAgICAgIGNhblNhdmU9eyF0aGlzLmlzUmVhZE9ubHkoKSAmJiBjYW5Xcml0ZURhdGFTb3VyY2V9XG4gICAgICAgICAgY2FuRGVsZXRlPXshdGhpcy5pc1JlYWRPbmx5KCkgJiYgY2FuRGVsZXRlRGF0YVNvdXJjZX1cbiAgICAgICAgICBvbkRlbGV0ZT17dGhpcy5vbkRlbGV0ZX1cbiAgICAgICAgICBvblRlc3Q9eyhldmVudCkgPT4gdGhpcy5vblRlc3QoZXZlbnQpfVxuICAgICAgICAgIGV4cGxvcmVVcmw9e3RoaXMub25OYXZpZ2F0ZVRvRXhwbG9yZSgpfVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZNb2RlbCwgcGFnZSwgbG9hZEVycm9yLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGxvYWRFcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTG9hZEVycm9yKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgICAge3RoaXMuaGFzRGF0YVNvdXJjZSA/IDxkaXY+e3BhZ2UgPyB0aGlzLnJlbmRlckNvbmZpZ1BhZ2VCb2R5KHBhZ2UpIDogdGhpcy5yZW5kZXJTZXR0aW5ncygpfTwvZGl2PiA6IG51bGx9XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihEYXRhU291cmNlU2V0dGluZ3NQYWdlKTtcbiIsImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5LFxuICBEYXRhU291cmNlQXBpLFxuICBEYXRhU291cmNlSnNvbkRhdGEsXG4gIERhdGFTb3VyY2VQbHVnaW4sXG4gIERhdGFTb3VyY2VQbHVnaW5NZXRhLFxuICBEYXRhU291cmNlU2V0dGluZ3MsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQW5ndWxhckNvbXBvbmVudCwgZ2V0QW5ndWxhckxvYWRlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgdHlwZSBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbiA9IERhdGFTb3VyY2VQbHVnaW48RGF0YVNvdXJjZUFwaTxEYXRhUXVlcnksIERhdGFTb3VyY2VKc29uRGF0YT4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcGx1Z2luOiBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbjtcbiAgZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzO1xuICBkYXRhU291cmNlTWV0YTogRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gIG9uTW9kZWxDaGFuZ2U6IChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBQbHVnaW5TZXR0aW5ncyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgZWxlbWVudDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgY29tcG9uZW50PzogQW5ndWxhckNvbXBvbmVudDtcbiAgc2NvcGVQcm9wczoge1xuICAgIGN0cmw6IHsgZGF0YXNvdXJjZU1ldGE6IERhdGFTb3VyY2VQbHVnaW5NZXRhOyBjdXJyZW50OiBEYXRhU291cmNlU2V0dGluZ3MgfTtcbiAgICBvbk1vZGVsQ2hhbmdlZDogKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncykgPT4gdm9pZDtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNjb3BlUHJvcHMgPSB7XG4gICAgICBjdHJsOiB7IGRhdGFzb3VyY2VNZXRhOiBwcm9wcy5kYXRhU291cmNlTWV0YSwgY3VycmVudDogY2xvbmVEZWVwKHByb3BzLmRhdGFTb3VyY2UpIH0sXG4gICAgICBvbk1vZGVsQ2hhbmdlZDogdGhpcy5vbk1vZGVsQ2hhbmdlZCxcbiAgICB9O1xuICAgIHRoaXMub25Nb2RlbENoYW5nZWQgPSB0aGlzLm9uTW9kZWxDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHBsdWdpbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFwbHVnaW4uY29tcG9uZW50cy5Db25maWdFZGl0b3IpIHtcbiAgICAgIC8vIFJlYWN0IGVkaXRvciBpcyBub3Qgc3BlY2lmaWVkLCBsZXQncyByZW5kZXIgYW5ndWxhciBlZGl0b3JcbiAgICAgIC8vIEhvdyB0byBhcHByb2FjaCB0aGlzIGJldHRlcj8gSW50cm9kdWNlIFJlYWN0RGF0YVNvdXJjZVBsdWdpbiBpbnRlcmZhY2UgYW5kIHR5cGVndWFyZCBpdCBoZXJlP1xuICAgICAgY29uc3QgbG9hZGVyID0gZ2V0QW5ndWxhckxvYWRlcigpO1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSAnPHBsdWdpbi1jb21wb25lbnQgdHlwZT1cImRhdGFzb3VyY2UtY29uZmlnLWN0cmxcIiAvPic7XG5cbiAgICAgIHRoaXMuY29tcG9uZW50ID0gbG9hZGVyLmxvYWQodGhpcy5lbGVtZW50LCB0aGlzLnNjb3BlUHJvcHMsIHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IHsgcGx1Z2luIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghcGx1Z2luLmNvbXBvbmVudHMuQ29uZmlnRWRpdG9yICYmIHRoaXMucHJvcHMuZGF0YVNvdXJjZSAhPT0gcHJldlByb3BzLmRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMuc2NvcGVQcm9wcy5jdHJsLmN1cnJlbnQgPSBjbG9uZURlZXAodGhpcy5wcm9wcy5kYXRhU291cmNlKTtcblxuICAgICAgdGhpcy5jb21wb25lbnQ/LmRpZ2VzdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW9kZWxDaGFuZ2VkID0gKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncykgPT4ge1xuICAgIHRoaXMucHJvcHMub25Nb2RlbENoYW5nZShkYXRhU291cmNlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwbHVnaW4sIGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXBsdWdpbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXsoZWxlbWVudCkgPT4gKHRoaXMuZWxlbWVudCA9IGVsZW1lbnQpfT5cbiAgICAgICAge3BsdWdpbi5jb21wb25lbnRzLkNvbmZpZ0VkaXRvciAmJlxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQocGx1Z2luLmNvbXBvbmVudHMuQ29uZmlnRWRpdG9yLCB7XG4gICAgICAgICAgICBvcHRpb25zOiBkYXRhU291cmNlLFxuICAgICAgICAgICAgb25PcHRpb25zQ2hhbmdlOiB0aGlzLm9uTW9kZWxDaGFuZ2VkLFxuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5TZXR0aW5ncztcbiIsImltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgbG9jYXRpb25VdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQge1xuICBEYXRhU291cmNlV2l0aEJhY2tlbmQsXG4gIGdldERhdGFTb3VyY2VTcnYsXG4gIEhlYWx0aENoZWNrRXJyb3IsXG4gIEhlYWx0aENoZWNrUmVzdWx0RGV0YWlscyxcbiAgaXNGZXRjaEVycm9yLFxuICBsb2NhdGlvblNlcnZpY2UsXG59IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXBkYXRlTmF2SW5kZXggfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IGdldFBsdWdpblNldHRpbmdzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpbl9sb2FkZXInO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5LCBUaHVua0Rpc3BhdGNoLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuaW1wb3J0IHsgYnVpbGRDYXRlZ29yaWVzIH0gZnJvbSAnLi9idWlsZENhdGVnb3JpZXMnO1xuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHtcbiAgZGF0YVNvdXJjZUxvYWRlZCxcbiAgZGF0YVNvdXJjZU1ldGFMb2FkZWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQsXG4gIGRhdGFTb3VyY2VzTG9hZGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkLFxuICB0ZXN0RGF0YVNvdXJjZUZhaWxlZCxcbiAgdGVzdERhdGFTb3VyY2VTdGFydGluZyxcbiAgdGVzdERhdGFTb3VyY2VTdWNjZWVkZWQsXG59IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZSwgZ2V0RGF0YVNvdXJjZU1ldGEgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVR5cGVzTG9hZGVkUGF5bG9hZCB7XG4gIHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW107XG4gIGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyB7XG4gIGxvYWREYXRhU291cmNlOiB0eXBlb2YgbG9hZERhdGFTb3VyY2U7XG4gIGxvYWREYXRhU291cmNlTWV0YTogdHlwZW9mIGxvYWREYXRhU291cmNlTWV0YTtcbiAgZ2V0RGF0YVNvdXJjZTogdHlwZW9mIGdldERhdGFTb3VyY2U7XG4gIGdldERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZU1ldGE7XG4gIGltcG9ydERhdGFTb3VyY2VQbHVnaW46IHR5cGVvZiBpbXBvcnREYXRhU291cmNlUGx1Z2luO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzIHtcbiAgZ2V0RGF0YXNvdXJjZVNydjogdHlwZW9mIGdldERhdGFTb3VyY2VTcnY7XG4gIGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcGFnZUlkOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzID0ge1xuICAgIGxvYWREYXRhU291cmNlLFxuICAgIGxvYWREYXRhU291cmNlTWV0YSxcbiAgICBnZXREYXRhU291cmNlLFxuICAgIGdldERhdGFTb3VyY2VNZXRhLFxuICAgIGltcG9ydERhdGFTb3VyY2VQbHVnaW4sXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBpZiAoIXBhZ2VJZCkge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2FkZWREYXRhU291cmNlID0gYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlKHBhZ2VJZCkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlTWV0YShsb2FkZWREYXRhU291cmNlKSk7XG5cbiAgICAgIC8vIGhhdmUgd2UgYWxyZWFkeSBsb2FkZWQgdGhlIHBsdWdpbiB0aGVuIHdlIGNhbiBza2lwIHRoZSBzdGVwcyBiZWxvdz9cbiAgICAgIGlmIChnZXRTdGF0ZSgpLmRhdGFTb3VyY2VTZXR0aW5ncy5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2UoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgcGFnZUlkKTtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNZXRhID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2VNZXRhKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UhLnR5cGUpO1xuICAgICAgY29uc3QgaW1wb3J0ZWRQbHVnaW4gPSBhd2FpdCBkZXBlbmRlbmNpZXMuaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihkYXRhU291cmNlTWV0YSk7XG5cbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQoaW1wb3J0ZWRQbHVnaW4pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKGVycikpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RGF0YVNvdXJjZSA9IChcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyA9IHtcbiAgICBnZXREYXRhc291cmNlU3J2LFxuICAgIGdldEJhY2tlbmRTcnYsXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBkc0FwaSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXREYXRhc291cmNlU3J2KCkuZ2V0KGRhdGFTb3VyY2VOYW1lKTtcblxuICAgIGlmICghZHNBcGkudGVzdERhdGFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nKCkpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS53aXRoTm9CYWNrZW5kQ2FjaGUoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHNBcGkudGVzdERhdGFzb3VyY2UoKTtcblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZChyZXN1bHQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBsZXQgbWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZGV0YWlsczogSGVhbHRoQ2hlY2tSZXN1bHREZXRhaWxzO1xuXG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBIZWFsdGhDaGVja0Vycm9yKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuICAgICAgICAgIGRldGFpbHMgPSBlcnIuZGV0YWlscztcbiAgICAgICAgfSBlbHNlIGlmIChpc0ZldGNoRXJyb3IoZXJyKSkge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnIuZGF0YS5tZXNzYWdlID8/IGBIVFRQIGVycm9yICR7ZXJyLnN0YXR1c1RleHR9YDtcbiAgICAgICAgfSBlbHNlIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlRmFpbGVkKHsgbWVzc2FnZSwgZGV0YWlscyB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9kYXRhc291cmNlcycpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZSh1aWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGF3YWl0IGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkKTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VMb2FkZWQoZGF0YVNvdXJjZSkpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VNZXRhKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBsdWdpbkluZm8gPSAoYXdhaXQgZ2V0UGx1Z2luU2V0dGluZ3MoZGF0YVNvdXJjZS50eXBlKSkgYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gICAgY29uc3QgcGx1Z2luID0gYXdhaXQgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihwbHVnaW5JbmZvKTtcbiAgICBjb25zdCBpc0JhY2tlbmQgPSBwbHVnaW4uRGF0YVNvdXJjZUNsYXNzLnByb3RvdHlwZSBpbnN0YW5jZW9mIERhdGFTb3VyY2VXaXRoQmFja2VuZDtcbiAgICBjb25zdCBtZXRhID0ge1xuICAgICAgLi4ucGx1Z2luSW5mbyxcbiAgICAgIGlzQmFja2VuZDogcGx1Z2luSW5mby5iYWNrZW5kIHx8IGlzQmFja2VuZCxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZU1ldGFMb2FkZWQobWV0YSkpO1xuXG4gICAgcGx1Z2luLm1ldGEgPSBtZXRhO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZSwgcGx1Z2luKSkpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldCBkYXRhIHNvdXJjZSBieSB1aWQgb3IgaWQsIGlmIG9sZCBpZCBkZXRlY3RlZCBoYW5kbGVzIHJlZGlyZWN0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+IHtcbiAgLy8gVHJ5IGZpcnN0IHdpdGggdWlkIGFwaVxuICB0cnkge1xuICAgIGNvbnN0IGJ5VWlkID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy91aWQvJHt1aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoYnlVaWQub2spIHtcbiAgICAgIHJldHVybiBieVVpZC5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBsb29rdXAgZGF0YSBzb3VyY2UgYnkgdWlkJywgZXJyKTtcbiAgfVxuXG4gIC8vIHRyeSBsb29rdXAgYnkgb2xkIGRiIGlkXG4gIGNvbnN0IGlkID0gdHlwZW9mIHVpZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh1aWQsIDEwKSA6IHVpZDtcbiAgaWYgKCFOdW1iZXIuaXNOYU4oaWQpKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzLyR7aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBJZiB0aGUgdWlkIGlzIGEgbnVtYmVyLCB0aGVuIHRoaXMgaXMgYSByZWZyZXNoIG9uIG9uZSBvZiB0aGUgc2V0dGluZ3MgdGFic1xuICAgIC8vIGFuZCB3ZSBjYW4gcmV0dXJuIHRoZSByZXNwb25zZSBkYXRhXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHR5cGVvZiB1aWQgPT09ICdudW1iZXInICYmIHJlc3BvbnNlLmRhdGEuaWQgPT09IHVpZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgLy8gTm90IGlkZWFsIHRvIGRvIGEgZnVsbCBwYWdlIHJlbG9hZCBoZXJlIGJ1dCBzbyB0cmlja3kgdG8gaGFuZGxlIHRoaXNcbiAgICAvLyBvdGhlcndpc2UgV2UgY2FuIHVwZGF0ZSB0aGUgbG9jYXRpb24gdXNpbmcgcmVhY3Qgcm91dGVyLCBidXQgbmVlZCB0b1xuICAgIC8vIGZ1bGx5IHJlbG9hZCB0aGUgcm91dGUgYXMgdGhlIG5hdiBtb2RlbCBwYWdlIGluZGV4IGlzIG5vdCBtYXRjaGluZyB3aXRoXG4gICAgLy8gdGhlIHVybCBpbiB0aGF0IGNhc2UuIEFuZCByZWFjdCByb3V0ZXIgaGFzIG5vIHdheSB0byB1bm1vdW50IHJlbW91bnQgYVxuICAgIC8vIHJvdXRlXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLmRhdGEuaWQudG9TdHJpbmcoKSA9PT0gdWlkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uVXRpbC5hc3N1cmVCYXNlVXJsKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3BvbnNlLmRhdGEudWlkfWApO1xuICAgICAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5nczsgLy8gYXZvaWRzIGZsYXNoaW5nIGFuIGVycm9yXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhU291cmNlKHBsdWdpbjogRGF0YVNvdXJjZVBsdWdpbk1ldGEpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZERhdGFTb3VyY2VzKCkpO1xuXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2VzO1xuXG4gICAgY29uc3QgbmV3SW5zdGFuY2UgPSB7XG4gICAgICBuYW1lOiBwbHVnaW4ubmFtZSxcbiAgICAgIHR5cGU6IHBsdWdpbi5pZCxcbiAgICAgIGFjY2VzczogJ3Byb3h5JyxcbiAgICAgIGlzRGVmYXVsdDogZGF0YVNvdXJjZXMubGVuZ3RoID09PSAwLFxuICAgIH07XG5cbiAgICBpZiAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKSkge1xuICAgICAgbmV3SW5zdGFuY2UubmFtZSA9IGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9kYXRhc291cmNlcycsIG5ld0luc3RhbmNlKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXN1bHQuZGF0YXNvdXJjZS51aWR9YCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZVBsdWdpbnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkKCkpO1xuICAgIGNvbnN0IHBsdWdpbnMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsdWdpbnMnLCB7IGVuYWJsZWQ6IDEsIHR5cGU6ICdkYXRhc291cmNlJyB9KTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnMpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkKHsgcGx1Z2lucywgY2F0ZWdvcmllcyB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWAsIGRhdGFTb3VyY2UpOyAvLyBieSBVSUQgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGxvYWREYXRhU291cmNlKGRhdGFTb3VyY2UudWlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEYXRhU291cmNlKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlO1xuXG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9kYXRhc291cmNlcycpO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgSXRlbVdpdGhOYW1lIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUV4aXRzKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiAoXG4gICAgZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YVNvdXJjZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9KS5sZW5ndGggPiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV3TmFtZShkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICAvLyBOZWVkIHRvIGxvb3AgdGhyb3VnaCBjdXJyZW50IGRhdGEgc291cmNlcyB0byBtYWtlIHN1cmVcbiAgLy8gdGhlIG5hbWUgZG9lc24ndCBleGlzdFxuICB3aGlsZSAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuYW1lKSkge1xuICAgIC8vIElmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGRvZXNuJ3QgZW5kIHdpdGggJy14J1xuICAgIC8vIHdlIGNhbiBhZGQgLTEgdG8gdGhlIG5hbWUgYW5kIGJlIGRvbmUuXG4gICAgaWYgKCFuYW1lSGFzU3VmZml4KG5hbWUpKSB7XG4gICAgICBuYW1lID0gYCR7bmFtZX0tMWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGVuZHMgd2l0aCAnLXgnXG4gICAgICAvLyB3ZSBjYW4gdHJ5IHRvIGluY3JlbWVudCB0aGUgbGFzdCBkaWdpdCB1bnRpbCB0aGUgbmFtZSBpcyB1bmlxdWVcblxuICAgICAgLy8gcmVtb3ZlIHRoZSAneCcgcGFydCBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgbnVtYmVyXG4gICAgICBuYW1lID0gYCR7Z2V0TmV3TmFtZShuYW1lKX0ke2luY3JlbWVudExhc3REaWdpdChnZXRMYXN0RGlnaXQobmFtZSkpfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIG5hbWVIYXNTdWZmaXgobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLmVuZHNXaXRoKCctJywgbmFtZS5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdERpZ2l0KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gcGFyc2VJbnQobmFtZS5zbGljZSgtMSksIDEwKTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50TGFzdERpZ2l0KGRpZ2l0OiBudW1iZXIpIHtcbiAgcmV0dXJuIGlzTmFOKGRpZ2l0KSA/IDEgOiBkaWdpdCArIDE7XG59XG5cbmZ1bmN0aW9uIGdldE5ld05hbWUobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnNsaWNlKDAsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKTogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSA9IFtcbiAgICB7IGlkOiAndHNkYicsIHRpdGxlOiAnVGltZSBzZXJpZXMgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnbG9nZ2luZycsIHRpdGxlOiAnTG9nZ2luZyAmIGRvY3VtZW50IGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3RyYWNpbmcnLCB0aXRsZTogJ0Rpc3RyaWJ1dGVkIHRyYWNpbmcnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdzcWwnLCB0aXRsZTogJ1NRTCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2Nsb3VkJywgdGl0bGU6ICdDbG91ZCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2VudGVycHJpc2UnLCB0aXRsZTogJ0VudGVycHJpc2UgcGx1Z2lucycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2lvdCcsIHRpdGxlOiAnSW5kdXN0cmlhbCAmIElvVCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ290aGVyJywgdGl0bGU6ICdPdGhlcnMnLCBwbHVnaW5zOiBbXSB9LFxuICBdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlJbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5PiA9IHt9O1xuICBjb25zdCBwbHVnaW5JbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbk1ldGE+ID0ge307XG4gIGNvbnN0IGVudGVycHJpc2VQbHVnaW5zID0gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk7XG5cbiAgLy8gYnVpbGQgaW5kaWNlc1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjYXRlZ29yeUluZGV4W2NhdGVnb3J5LmlkXSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIGNvbnN0IGVudGVycHJpc2VQbHVnaW4gPSBlbnRlcnByaXNlUGx1Z2lucy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uaWQpO1xuICAgIC8vIEZvcmNlIGNhdGVnb3J5IGZvciBlbnRlcnByaXNlIHBsdWdpbnNcbiAgICBpZiAocGx1Z2luLmVudGVycHJpc2UgfHwgZW50ZXJwcmlzZVBsdWdpbikge1xuICAgICAgcGx1Z2luLmNhdGVnb3J5ID0gJ2VudGVycHJpc2UnO1xuICAgICAgcGx1Z2luLnVubGljZW5zZWQgPSAhZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpO1xuICAgICAgcGx1Z2luLmluZm8ubGlua3MgPSBlbnRlcnByaXNlUGx1Z2luPy5pbmZvPy5saW5rcyB8fCBwbHVnaW4uaW5mby5saW5rcztcbiAgICB9XG5cbiAgICAvLyBGaXggbGluayBuYW1lXG4gICAgaWYgKHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgcGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgICAgbGluay5uYW1lID0gJ0xlYXJuIG1vcmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uY2F0ZWdvcnkpIHx8IGNhdGVnb3J5SW5kZXhbJ290aGVyJ107XG4gICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgLy8gYWRkIHRvIHBsdWdpbiBpbmRleFxuICAgIHBsdWdpbkluZGV4W3BsdWdpbi5pZF0gPSBwbHVnaW47XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5cbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdjbG91ZCcpIHtcbiAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCkpO1xuICAgIH1cblxuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpbnNcbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdlbnRlcnByaXNlJykge1xuICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgZW50ZXJwcmlzZVBsdWdpbnMpIHtcbiAgICAgICAgaWYgKCFwbHVnaW5JbmRleFtwbHVnaW4uaWRdKSB7XG4gICAgICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0UGx1Z2lucyhjYXRlZ29yeS5wbHVnaW5zKTtcbiAgfVxuXG4gIC8vIE9ubHkgc2hvdyBjYXRlZ29yaWVzIHdpdGggcGx1Z2luc1xuICByZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoKGMpID0+IGMucGx1Z2lucy5sZW5ndGggPiAwKTtcbn1cblxuZnVuY3Rpb24gc29ydFBsdWdpbnMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSkge1xuICBjb25zdCBzb3J0aW5nUnVsZXM6IHsgW2lkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBwcm9tZXRoZXVzOiAxMDAsXG4gICAgZ3JhcGhpdGU6IDk1LFxuICAgIGxva2k6IDkwLFxuICAgIG15c3FsOiA4MCxcbiAgICBqYWVnZXI6IDEwMCxcbiAgICBwb3N0Z3JlczogNzksXG4gICAgZ2Nsb3VkOiAtMSxcbiAgfTtcblxuICBwbHVnaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhU29ydCA9IHNvcnRpbmdSdWxlc1thLmlkXSB8fCAwO1xuICAgIGNvbnN0IGJTb3J0ID0gc29ydGluZ1J1bGVzW2IuaWRdIHx8IDA7XG4gICAgaWYgKGFTb3J0ID4gYlNvcnQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGFTb3J0IDwgYlNvcnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWUgPyAxIDogLTE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSB7XG4gIHJldHVybiBbXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuaycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBTcGx1bmsgbG9ncycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc3BsdW5rX2xvZ29fMTI4LnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtb3JhY2xlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ09yYWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBPcmFjbGUgU1FMJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9vcmFjbGUucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1keW5hdHJhY2UtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnRHluYXRyYWNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIER5bmF0cmFjZSBkYXRhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9keW5hdHJhY2UucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zZXJ2aWNlbm93LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXJ2aWNlTm93IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU2VydmljZU5vdycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2VydmljZW5vdy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWRhdGFkb2ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RhdGFEb2cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdEYXRhRG9nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9kYXRhZG9nLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbmV3cmVsaWMtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ05ldyBSZWxpYyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ05ldyBSZWxpYycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbmV3cmVsaWMuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1tb25nb2RiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdNb25nb0RCIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTW9uZ29EQicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbW9uZ29kYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNub3dmbGFrZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU25vd2ZsYWtlIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU25vd2ZsYWtlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zbm93Zmxha2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS13YXZlZnJvbnQtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhdmVmcm9udCBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1dhdmVmcm9udCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvd2F2ZWZyb250LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2Rsb3BlczctYXBwZHluYW1pY3MtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcER5bmFtaWNzIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnQXBwRHluYW1pY3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2FwcGR5bmFtaWNzLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FwaGFuYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU0FQIEhBTkHCriBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NBUCBIQU5Bwq4nLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhcF9oYW5hLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtaG9uZXljb21iLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdIb25leWNvbWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvaG9uZXljb21iLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FsZXNmb3JjZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2FsZXNmb3JjZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU2FsZXNmb3JjZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FsZXNmb3JjZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWppcmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ppcmEgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0ppcmEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2ppcmFfbG9nby5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWdpdGxhYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnR2l0TGFiIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdHaXRMYWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2dpdGxhYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1tb25pdG9yaW5nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTaWduYWxGeCBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rIEluZnJhc3RydWN0dXJlIE1vbml0b3JpbmcnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NpZ25hbGZ4LWxvZ28uc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1henVyZWRldm9wcy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXp1cmUgRGV2b3BzIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0F6dXJlIERldm9wcycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvYXp1cmUtZGV2b3BzLnBuZycsXG4gICAgfSksXG4gIF07XG59XG5cbmZ1bmN0aW9uIGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiAnZ2Nsb3VkJyxcbiAgICBuYW1lOiAnR3JhZmFuYSBDbG91ZCcsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9zdGVkIEdyYXBoaXRlLCBQcm9tZXRoZXVzLCBhbmQgTG9raScsXG4gICAgICBsb2dvczogeyBzbWFsbDogJ3B1YmxpYy9pbWcvZ3JhZmFuYV9pY29uLnN2ZycsIGxhcmdlOiAnYXNkJyB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9ncmFmYW5hLmNvbS9wcm9kdWN0cy9jbG91ZC8nLFxuICAgICAgICAgIG5hbWU6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG5cbmludGVyZmFjZSBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1nVXJsOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFBoYW50b21QbHVnaW4ob3B0aW9uczogR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IG9wdGlvbnMuaWQsXG4gICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiBvcHRpb25zLmltZ1VybCwgbGFyZ2U6IG9wdGlvbnMuaW1nVXJsIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6IGNvbmZpZy5wbHVnaW5DYXRhbG9nVVJMICsgb3B0aW9ucy5pZCxcbiAgICAgICAgICBuYW1lOiAnSW5zdGFsbCBub3cnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncywgUGx1Z2luVHlwZSwgUGx1Z2luSW5jbHVkZSwgTmF2TW9kZWwsIE5hdk1vZGVsSXRlbSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFByb0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1Byb0JhZGdlJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBoaWdobGlnaHRUcmlhbCB9IGZyb20gJy4uLy4uL2FkbWluL3V0aWxzJztcbmltcG9ydCB7IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnLi4vc2V0dGluZ3MvUGx1Z2luU2V0dGluZ3MnO1xuXG5jb25zdCBsb2FkaW5nRFNUeXBlID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROYXZNb2RlbChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MsIHBsdWdpbjogR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4pOiBOYXZNb2RlbEl0ZW0ge1xuICBjb25zdCBwbHVnaW5NZXRhID0gcGx1Z2luLm1ldGE7XG4gIGNvbnN0IGhpZ2hsaWdodHNFbmFibGVkID0gY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuICBjb25zdCBuYXZNb2RlbDogTmF2TW9kZWxJdGVtID0ge1xuICAgIGltZzogcGx1Z2luTWV0YS5pbmZvLmxvZ29zLmxhcmdlLFxuICAgIGlkOiAnZGF0YXNvdXJjZS0nICsgZGF0YVNvdXJjZS51aWQsXG4gICAgc3ViVGl0bGU6IGBUeXBlOiAke3BsdWdpbk1ldGEubmFtZX1gLFxuICAgIHVybDogJycsXG4gICAgdGV4dDogZGF0YVNvdXJjZS5uYW1lLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ0RhdGEgU291cmNlcycsIHVybDogJ2RhdGFzb3VyY2VzJyB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBpY29uOiAnc2xpZGVycy12LWFsdCcsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1zZXR0aW5ncy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBpZiAocGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBwYWdlLnRpdGxlLFxuICAgICAgICBpY29uOiBwYWdlLmljb24sXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vP3BhZ2U9JHtwYWdlLmlkfWAsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1wYWdlLSR7cGFnZS5pZH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBsdWdpbk1ldGEuaW5jbHVkZXMgJiYgaGFzRGFzaGJvYXJkcyhwbHVnaW5NZXRhLmluY2x1ZGVzKSAmJiBjb250ZXh0U3J2Lmhhc1JvbGUoJ0FkbWluJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaWNvbjogJ2FwcHMnLFxuICAgICAgaWQ6IGBkYXRhc291cmNlLWRhc2hib2FyZHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgdGV4dDogJ0Rhc2hib2FyZHMnLFxuICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9kYXNoYm9hcmRzYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlzTG9hZGluZ05hdiA9IGRhdGFTb3VyY2UudHlwZSA9PT0gbG9hZGluZ0RTVHlwZTtcblxuICBjb25zdCBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtcGVybWlzc2lvbnMtYmFkZ2UnO1xuICBjb25zdCBkc1Blcm1pc3Npb25zOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnbG9jaycsXG4gICAgaWQ6IGBkYXRhc291cmNlLXBlcm1pc3Npb25zLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnUGVybWlzc2lvbnMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vcGVybWlzc2lvbnNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBkc1Blcm1pc3Npb25zLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdkc3Blcm1pc3Npb25zJykpIHtcbiAgICBpZiAoY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQpKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChkc1Blcm1pc3Npb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmRzUGVybWlzc2lvbnMsXG4gICAgICB1cmw6IGRzUGVybWlzc2lvbnMudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYW5hbHl0aWNzRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1pbnNpZ2h0cy1iYWRnZSc7XG4gIGNvbnN0IGFuYWx5dGljczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2luZm8tY2lyY2xlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtaW5zaWdodHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdJbnNpZ2h0cycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9pbnNpZ2h0c2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGFuYWx5dGljcy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2FuYWx5dGljcycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goYW5hbHl0aWNzKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uYW5hbHl0aWNzLFxuICAgICAgdXJsOiBhbmFseXRpY3MudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNhY2hpbmdFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLXF1ZXJ5LWNhY2hpbmctYmFkZ2UnO1xuXG4gIGNvbnN0IGNhY2hpbmc6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdkYXRhYmFzZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWNhY2hlLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnQ2FjaGUnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vY2FjaGVgLFxuICAgIGhpZGVGcm9tVGFiczogIXBsdWdpbk1ldGEuaXNCYWNrZW5kIHx8ICFjb25maWcuY2FjaGluZy5lbmFibGVkLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBjYWNoaW5nLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2NhY2hpbmcnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGNhY2hpbmcpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5jYWNoaW5nLFxuICAgICAgdXJsOiBjYWNoaW5nLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZU5hdihtYWluOiBOYXZNb2RlbEl0ZW0sIHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGxldCBub2RlOiBOYXZNb2RlbEl0ZW0gPSB7IHRleHQ6ICcnIH07XG5cbiAgLy8gZmluZCBhY3RpdmUgcGFnZVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1haW4uY2hpbGRyZW4hKSB7XG4gICAgaWYgKGNoaWxkLmlkIS5pbmRleE9mKHBhZ2VOYW1lKSA+IDApIHtcbiAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlID0gY2hpbGQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbm9kZSEsXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYocGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgY29uc3QgbWFpbiA9IGJ1aWxkTmF2TW9kZWwoXG4gICAge1xuICAgICAgYWNjZXNzOiAnJyxcbiAgICAgIGJhc2ljQXV0aDogZmFsc2UsXG4gICAgICBiYXNpY0F1dGhVc2VyOiAnJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICBkYXRhYmFzZTogJycsXG4gICAgICBpZDogMSxcbiAgICAgIHVpZDogJ3gnLFxuICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcbiAgICAgIGpzb25EYXRhOiB7IGF1dGhUeXBlOiAnY3JlZGVudGlhbHMnLCBkZWZhdWx0UmVnaW9uOiAnZXUtd2VzdC0yJyB9LFxuICAgICAgbmFtZTogJ0xvYWRpbmcnLFxuICAgICAgb3JnSWQ6IDEsXG4gICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICB0eXBlOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZU5hbWU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTG9nb1VybDogJ3B1YmxpYy9pbWcvaWNuLWRhdGFzb3VyY2Uuc3ZnJyxcbiAgICAgIHVybDogJycsXG4gICAgICB1c2VyOiAnJyxcbiAgICAgIHNlY3VyZUpzb25GaWVsZHM6IHt9LFxuICAgIH0sXG4gICAge1xuICAgICAgbWV0YToge1xuICAgICAgICBpZDogJzEnLFxuICAgICAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgbGlua3M6IFt7IG5hbWU6ICcnLCB1cmw6ICcnIH1dLFxuICAgICAgICAgIGxvZ29zOiB7XG4gICAgICAgICAgICBsYXJnZTogJycsXG4gICAgICAgICAgICBzbWFsbDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICAgICAgdXBkYXRlZDogJycsXG4gICAgICAgICAgdmVyc2lvbjogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVzOiBbXSxcbiAgICAgICAgbW9kdWxlOiAnJyxcbiAgICAgICAgYmFzZVVybDogJycsXG4gICAgICB9LFxuICAgIH0gYXMgYW55XG4gICk7XG5cbiAgcmV0dXJuIGdldERhdGFTb3VyY2VOYXYobWFpbiwgcGFnZU5hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNEYXNoYm9hcmRzKGluY2x1ZGVzOiBQbHVnaW5JbmNsdWRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBpbmNsdWRlcy5maW5kKChpbmNsdWRlKSA9PiB7XG4gICAgICByZXR1cm4gaW5jbHVkZS50eXBlID09PSAnZGFzaGJvYXJkJztcbiAgICB9KSAhPT0gdW5kZWZpbmVkXG4gICk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBVcmxRdWVyeVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VzU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRhc291cmNlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlcyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5uYW1lKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UuZGF0YWJhc2UpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS50eXBlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVBsdWdpbnMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLmRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnBsdWdpbnMuZmlsdGVyKCh0eXBlOiBEYXRhU291cmNlUGx1Z2luTWV0YSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHR5cGUubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2UgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIGRhdGFTb3VyY2VJZDogVXJsUXVlcnlWYWx1ZSk6IERhdGFTb3VyY2VTZXR0aW5ncyA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlLnVpZCA9PT0gZGF0YVNvdXJjZUlkKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2U7XG4gIH1cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlTWV0YSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgdHlwZTogc3RyaW5nKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZU1ldGEuaWQgPT09IHR5cGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZU1ldGE7XG4gIH1cblxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzQ291bnQgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzQ291bnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpblN0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWRnZSwgQmFkZ2VQcm9wcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU/OiBQbHVnaW5TdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IFBsdWdpblN0YXRlSW5mbzogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBnZXRGZWF0dXJlU3RhdGVJbmZvKHByb3BzLnN0YXRlKTtcblxuICBpZiAoIWRpc3BsYXkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiA8QmFkZ2UgY29sb3I9e2Rpc3BsYXkuY29sb3J9IHRpdGxlPXtkaXNwbGF5LnRvb2x0aXB9IHRleHQ9e2Rpc3BsYXkudGV4dH0gaWNvbj17ZGlzcGxheS5pY29ufSAvPjtcbn07XG5cbmZ1bmN0aW9uIGdldEZlYXR1cmVTdGF0ZUluZm8oc3RhdGU/OiBQbHVnaW5TdGF0ZSk6IEJhZGdlUHJvcHMgfCBudWxsIHtcbiAgc3dpdGNoIChzdGF0ZSkge1xuICAgIGNhc2UgUGx1Z2luU3RhdGUuZGVwcmVjYXRlZDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdEZXByZWNhdGVkJyxcbiAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5hbHBoYTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdBbHBoYScsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZXhwZXJpbWVudGFsIGFuZCBmdXR1cmUgdXBkYXRlcyBtaWdodCBub3QgYmUgYmFja3dhcmQgY29tcGF0aWJsZWAsXG4gICAgICB9O1xuICAgIGNhc2UgUGx1Z2luU3RhdGUuYmV0YTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdCZXRhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBjbG9zZSB0byBjb21wbGV0ZSBidXQgbm90IGZ1bGx5IHRlc3RlZGAsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbmZpZyIsImlzVHJpYWwiLCJleHBpcnkiLCJsaWNlbnNlSW5mbyIsInRyaWFsRXhwaXJ5IiwiaGlnaGxpZ2h0VHJpYWwiLCJmZWF0dXJlVG9nZ2xlcyIsImZlYXR1cmVIaWdobGlnaHRzIiwiUmVhY3QiLCJzZWxlY3RvcnMiLCJJbmxpbmVGaWVsZCIsIklubGluZVN3aXRjaCIsIklucHV0IiwiQmFzaWNTZXR0aW5ncyIsImRhdGFTb3VyY2VOYW1lIiwiaXNEZWZhdWx0Iiwib25EZWZhdWx0Q2hhbmdlIiwib25OYW1lQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJwYWdlcyIsIkRhdGFTb3VyY2UiLCJuYW1lIiwiY2hlY2tlZCIsIkJ1dHRvbiIsIkxpbmtCdXR0b24iLCJjb250ZXh0U3J2IiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsIkJ1dHRvblJvdyIsImNhblNhdmUiLCJjYW5EZWxldGUiLCJvbkRlbGV0ZSIsIm9uU3VibWl0Iiwib25UZXN0IiwiZXhwbG9yZVVybCIsImNhbkV4cGxvcmVEYXRhU291cmNlcyIsImhhc1Blcm1pc3Npb24iLCJEYXRhU291cmNlc0V4cGxvcmUiLCJoaXN0b3J5IiwiYmFjayIsImRlbGV0ZSIsInNhdmVBbmRUZXN0IiwiR3JhZmFuYUVkaXRpb24iLCJBbGVydCIsIkxvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXIiLCJMT0NBTF9TVE9SQUdFX0tFWSIsIkNsb3VkSW5mb0JveCIsImRhdGFTb3VyY2UiLCJtYWluRFMiLCJleHRyYURTIiwicmVhZE9ubHkiLCJ2ZXJzaW9uIiwiYnVpbGRJbmZvIiwiZWRpdGlvbiIsIk9wZW5Tb3VyY2UiLCJ0eXBlIiwiaXNEaXNtaXNzZWQiLCJvbkRpc21pc3MiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsInVybFV0aWwiLCJjbGVhblVwQWN0aW9uIiwiYXBwRXZlbnRzIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiUGx1Z2luU3RhdGVJbmZvIiwiU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IiwiZGVsZXRlRGF0YVNvdXJjZSIsImluaXREYXRhU291cmNlU2V0dGluZ3MiLCJsb2FkRGF0YVNvdXJjZSIsInRlc3REYXRhU291cmNlIiwidXBkYXRlRGF0YVNvdXJjZSIsImdldERhdGFTb3VyY2VMb2FkaW5nTmF2IiwiYnVpbGROYXZNb2RlbCIsImdldERhdGFTb3VyY2VOYXYiLCJkYXRhU291cmNlTG9hZGVkIiwic2V0RGF0YVNvdXJjZU5hbWUiLCJzZXRJc0RlZmF1bHQiLCJnZXREYXRhU291cmNlIiwiZ2V0RGF0YVNvdXJjZU1ldGEiLCJQbHVnaW5TZXR0aW5ncyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvcHMiLCJkYXRhU291cmNlSWQiLCJtYXRjaCIsInBhcmFtcyIsInVpZCIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZGF0YVNvdXJjZXMiLCJwbHVnaW4iLCJsb2FkRXJyb3IiLCJsb2FkaW5nIiwidGVzdGluZ1N0YXR1cyIsImRhdGFTb3VyY2VTZXR0aW5ncyIsInBhZ2UiLCJnZXQiLCJuYXYiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiZGF0YVNvdXJjZU1ldGEiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJEYXRhU291cmNlU2V0dGluZ3NQYWdlIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJwdWJsaXNoIiwidGl0bGUiLCJ0ZXh0IiwieWVzVGV4dCIsImljb24iLCJvbkNvbmZpcm0iLCJjb25maXJtRGVsZXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInN0YXRlU2VsZWN0b3IiLCJpc1JlYWRPbmx5IiwicmVuZGVySXNSZWFkT25seU1lc3NhZ2UiLCJyZW5kZXJNaXNzaW5nRWRpdFJpZ2h0c01lc3NhZ2UiLCJoYXNEYXRhU291cmNlIiwiaWQiLCJvbk5hdmlnYXRlVG9FeHBsb3JlIiwiZXhwbG9yZVN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGFzb3VyY2UiLCJjb250ZXh0IiwidXJsIiwicmVuZGVyVXJsIiwibGVmdCIsInJlbmRlckxvYWRFcnJvciIsImNhbkRlbGV0ZURhdGFTb3VyY2UiLCJoYXNQZXJtaXNzaW9uSW5NZXRhZGF0YSIsIkRhdGFTb3VyY2VzRGVsZXRlIiwibm9kZSIsInN1YlRpdGxlIiwibWFpbiIsInJlbmRlckNvbmZpZ1BhZ2VCb2R5IiwiY29uZmlnUGFnZXMiLCJwIiwicmVuZGVyQWxlcnREZXRhaWxzIiwiZGV0YWlscyIsIm1lc3NhZ2UiLCJ2ZXJib3NlTWVzc2FnZSIsIndoaXRlU3BhY2UiLCJyZW5kZXJTZXR0aW5ncyIsImNhbldyaXRlRGF0YVNvdXJjZSIsIkRhdGFTb3VyY2VzV3JpdGUiLCJvbk1vZGVsQ2hhbmdlIiwic3RhdHVzIiwiYWxlcnQiLCJyZW5kZXIiLCJjbG9uZURlZXAiLCJnZXRBbmd1bGFyTG9hZGVyIiwiY29uc3RydWN0b3IiLCJzY29wZVByb3BzIiwiY3RybCIsImRhdGFzb3VyY2VNZXRhIiwiY3VycmVudCIsIm9uTW9kZWxDaGFuZ2VkIiwiYmluZCIsImVsZW1lbnQiLCJjb21wb25lbnRzIiwiQ29uZmlnRWRpdG9yIiwibG9hZGVyIiwidGVtcGxhdGUiLCJjb21wb25lbnQiLCJsb2FkIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiZGlnZXN0IiwiZGVzdHJveSIsImNyZWF0ZUVsZW1lbnQiLCJvcHRpb25zIiwib25PcHRpb25zQ2hhbmdlIiwibGFzdFZhbHVlRnJvbSIsImxvY2F0aW9uVXRpbCIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsIkhlYWx0aENoZWNrRXJyb3IiLCJpc0ZldGNoRXJyb3IiLCJsb2NhdGlvblNlcnZpY2UiLCJ1cGRhdGVOYXZJbmRleCIsImdldEJhY2tlbmRTcnYiLCJhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSIsImdldERhdGFzb3VyY2VTcnYiLCJnZXRQbHVnaW5TZXR0aW5ncyIsImltcG9ydERhdGFTb3VyY2VQbHVnaW4iLCJidWlsZENhdGVnb3JpZXMiLCJkYXRhU291cmNlTWV0YUxvYWRlZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZCIsImRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkIiwiZGF0YVNvdXJjZXNMb2FkZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZCIsInRlc3REYXRhU291cmNlRmFpbGVkIiwidGVzdERhdGFTb3VyY2VTdGFydGluZyIsInRlc3REYXRhU291cmNlU3VjY2VlZGVkIiwicGFnZUlkIiwiZGVwZW5kZW5jaWVzIiwibG9hZERhdGFTb3VyY2VNZXRhIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIkVycm9yIiwibG9hZGVkRGF0YVNvdXJjZSIsImltcG9ydGVkUGx1Z2luIiwiZXJyIiwiZHNBcGkiLCJ0ZXN0RGF0YXNvdXJjZSIsIndpdGhOb0JhY2tlbmRDYWNoZSIsInJlc3VsdCIsImRhdGEiLCJzdGF0dXNUZXh0IiwibG9hZERhdGFTb3VyY2VzIiwicmVzcG9uc2UiLCJnZXREYXRhU291cmNlVXNpbmdVaWRPcklkIiwicGx1Z2luSW5mbyIsImlzQmFja2VuZCIsIkRhdGFTb3VyY2VDbGFzcyIsInByb3RvdHlwZSIsIm1ldGEiLCJiYWNrZW5kIiwiYnlVaWQiLCJmZXRjaCIsIm1ldGhvZCIsInNob3dFcnJvckFsZXJ0Iiwib2siLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsInRvU3RyaW5nIiwid2luZG93IiwiaHJlZiIsImFzc3VyZUJhc2VVcmwiLCJhZGREYXRhU291cmNlIiwiZ2V0U3RvcmUiLCJuZXdJbnN0YW5jZSIsImFjY2VzcyIsImxlbmd0aCIsIm5hbWVFeGl0cyIsImZpbmROZXdOYW1lIiwicG9zdCIsInJlbG9hZCIsImZldGNoVXNlclBlcm1pc3Npb25zIiwicHVzaCIsImxvYWREYXRhU291cmNlUGx1Z2lucyIsInBsdWdpbnMiLCJlbmFibGVkIiwiY2F0ZWdvcmllcyIsInB1dCIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwibmFtZUhhc1N1ZmZpeCIsImdldE5ld05hbWUiLCJpbmNyZW1lbnRMYXN0RGlnaXQiLCJnZXRMYXN0RGlnaXQiLCJlbmRzV2l0aCIsInNsaWNlIiwiZGlnaXQiLCJQbHVnaW5UeXBlIiwiZmVhdHVyZUVuYWJsZWQiLCJpdGVtIiwiY2F0ZWdvcnlJbmRleCIsInBsdWdpbkluZGV4IiwiZW50ZXJwcmlzZVBsdWdpbnMiLCJnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMiLCJjYXRlZ29yeSIsImVudGVycHJpc2VQbHVnaW4iLCJmaW5kIiwiZW50ZXJwcmlzZSIsInVubGljZW5zZWQiLCJpbmZvIiwibGlua3MiLCJsaW5rIiwiZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbiIsInNvcnRQbHVnaW5zIiwiYyIsInNvcnRpbmdSdWxlcyIsInByb21ldGhldXMiLCJncmFwaGl0ZSIsImxva2kiLCJteXNxbCIsImphZWdlciIsInBvc3RncmVzIiwiZ2Nsb3VkIiwic29ydCIsImEiLCJiIiwiYVNvcnQiLCJiU29ydCIsImdldFBoYW50b21QbHVnaW4iLCJkZXNjcmlwdGlvbiIsImltZ1VybCIsIm1vZHVsZSIsImJhc2VVcmwiLCJsb2dvcyIsInNtYWxsIiwibGFyZ2UiLCJhdXRob3IiLCJzY3JlZW5zaG90cyIsInVwZGF0ZWQiLCJwbHVnaW5DYXRhbG9nVVJMIiwiUHJvQmFkZ2UiLCJsb2FkaW5nRFNUeXBlIiwicGx1Z2luTWV0YSIsImhpZ2hsaWdodHNFbmFibGVkIiwiaW1nIiwiYnJlYWRjcnVtYnMiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImluY2x1ZGVzIiwiaGFzRGFzaGJvYXJkcyIsImhhc1JvbGUiLCJpc0xvYWRpbmdOYXYiLCJwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCIsImRzUGVybWlzc2lvbnMiLCJ0YWJTdWZmaXgiLCJleHBlcmltZW50SWQiLCJldmVudFZhcmlhbnQiLCJEYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCIsImFuYWx5dGljc0V4cGVyaW1lbnRJZCIsImFuYWx5dGljcyIsImNhY2hpbmdFeHBlcmltZW50SWQiLCJjYWNoaW5nIiwiaGlkZUZyb21UYWJzIiwicGFnZU5hbWUiLCJjaGlsZCIsImluZGV4T2YiLCJiYXNpY0F1dGgiLCJiYXNpY0F1dGhVc2VyIiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YWJhc2UiLCJqc29uRGF0YSIsImF1dGhUeXBlIiwiZGVmYXVsdFJlZ2lvbiIsIm9yZ0lkIiwidHlwZU5hbWUiLCJ0eXBlTG9nb1VybCIsInVzZXIiLCJzZWN1cmVKc29uRmllbGRzIiwiaW5jbHVkZSIsInVuZGVmaW5lZCIsImdldERhdGFTb3VyY2VzIiwicmVnZXgiLCJSZWdFeHAiLCJzZWFyY2hRdWVyeSIsInRlc3QiLCJnZXREYXRhU291cmNlUGx1Z2lucyIsImRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IiwiZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwibGF5b3V0TW9kZSIsImdldERhdGFTb3VyY2VzQ291bnQiLCJkYXRhU291cmNlc0NvdW50IiwiUGx1Z2luU3RhdGUiLCJCYWRnZSIsImRpc3BsYXkiLCJnZXRGZWF0dXJlU3RhdGVJbmZvIiwiY29sb3IiLCJ0b29sdGlwIiwiZGVwcmVjYXRlZCIsImFscGhhIiwiYmV0YSJdLCJzb3VyY2VSb290IjoiIn0=