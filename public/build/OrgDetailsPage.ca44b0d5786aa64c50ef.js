"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["OrgDetailsPage"],{

/***/ "./public/app/core/components/SharedPreferences/SharedPreferences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedPreferences": () => (/* binding */ SharedPreferences),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-90a2022092/0/cache/@lingui-react-npm-3.13.3-7273612a0a-7a83a88cab.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/@lingui-core-npm-3.13.3-1015eedd87-608bb8c7f5.zip/node_modules/@lingui/core/esm/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/services/PreferencesService.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tooltip, _Trans, _Trans2, _Trans3, _Trans4;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const themes = [{
  value: '',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.default-label',
    message: 'Default'
  })
}, {
  value: 'dark',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.dark-label',
    message: 'Dark'
  })
}, {
  value: 'light',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.light-label',
    message: 'Light'
  })
}];
const languages = [{
  value: '',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
  /*i18n*/
  {
    id: 'common.locale.default',
    message: 'Default'
  })
}, {
  value: 'en',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
  /*i18n*/
  {
    id: 'common.locale.en',
    message: 'English'
  })
}, {
  value: 'es',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
  /*i18n*/
  {
    id: 'common.locale.es',
    message: 'Spanish'
  })
}, {
  value: 'fr',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
  /*i18n*/
  {
    id: 'common.locale.fr',
    message: 'French'
  })
}];
const i18nFlag = Boolean(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.internationalization);
class SharedPreferences extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "service", void 0);

    _defineProperty(this, "onSubmitForm", async () => {
      const {
        homeDashboardId,
        theme,
        timezone,
        weekStart,
        locale,
        queryHistory
      } = this.state;
      await this.service.update({
        homeDashboardId,
        theme,
        timezone,
        weekStart,
        locale,
        queryHistory
      });
      window.location.reload();
    });

    _defineProperty(this, "onThemeChanged", value => {
      this.setState({
        theme: value
      });
    });

    _defineProperty(this, "onTimeZoneChanged", timezone => {
      if (!timezone) {
        return;
      }

      this.setState({
        timezone: timezone
      });
    });

    _defineProperty(this, "onWeekStartChanged", weekStart => {
      this.setState({
        weekStart: weekStart
      });
    });

    _defineProperty(this, "onHomeDashboardChanged", dashboardId => {
      this.setState({
        homeDashboardId: dashboardId
      });
    });

    _defineProperty(this, "onLocaleChanged", locale => {
      this.setState({
        locale
      });
    });

    _defineProperty(this, "getFullDashName", dashboard => {
      if (typeof dashboard.folderTitle === 'undefined' || dashboard.folderTitle === '') {
        return dashboard.title;
      }

      return dashboard.folderTitle + ' / ' + dashboard.title;
    });

    this.service = new app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_6__.PreferencesService(props.resourceUri);
    this.state = {
      homeDashboardId: 0,
      theme: '',
      timezone: '',
      weekStart: '',
      locale: '',
      dashboards: [],
      queryHistory: {
        homeTab: ''
      }
    };
  }

  async componentDidMount() {
    const prefs = await this.service.load();
    const dashboards = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_7__.backendSrv.search({
      starred: true
    });
    const defaultDashboardHit = {
      id: 0,
      title: 'Default',
      tags: [],
      type: '',
      uid: '',
      uri: '',
      url: '',
      folderId: 0,
      folderTitle: '',
      folderUid: '',
      folderUrl: '',
      isStarred: false,
      slug: '',
      items: []
    };

    if (prefs.homeDashboardId > 0 && !dashboards.find(d => d.id === prefs.homeDashboardId)) {
      const missing = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_7__.backendSrv.search({
        dashboardIds: [prefs.homeDashboardId]
      });

      if (missing && missing.length > 0) {
        dashboards.push(missing[0]);
      }
    }

    this.setState({
      homeDashboardId: prefs.homeDashboardId,
      theme: prefs.theme,
      timezone: prefs.timezone,
      weekStart: prefs.weekStart,
      locale: prefs.locale,
      dashboards: [defaultDashboardHit, ...dashboards],
      queryHistory: prefs.queryHistory
    });
  }

  render() {
    const {
      theme,
      timezone,
      weekStart,
      homeDashboardId,
      locale,
      dashboards
    } = this.state;
    const {
      disabled
    } = this.props;
    const styles = getStyles();

    const homeDashboardTooltip = _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_10__.Trans, {
        id: "shared-preferences.fields.home-dashboard-tooltip",
        message: "Not finding the dashboard you want? Star it first, then it should appear in this select box."
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
        name: "info-circle"
      })
    }));

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Form, {
      onSubmit: this.onSubmitForm,
      children: () => {
        var _themes$find;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FieldSet, {
          label: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_10__.Trans, {
            id: "shared-preferences.title",
            message: "Preferences"
          })),
          disabled: disabled,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
            /*i18n*/
            {
              id: 'shared-preferences.fields.theme-label',
              message: 'UI Theme'
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
              options: themes,
              value: (_themes$find = themes.find(item => item.value === theme)) === null || _themes$find === void 0 ? void 0 : _themes$find.value,
              onChange: this.onThemeChanged
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
              htmlFor: "home-dashboard-select",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: styles.labelText,
                children: _Trans2 || (_Trans2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_10__.Trans, {
                  id: "shared-preferences.fields.home-dashboard-label",
                  message: "Home Dashboard"
                }))
              }), homeDashboardTooltip]
            }),
            "data-testid": "User preferences home dashboard drop down",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select, {
              value: dashboards.find(dashboard => dashboard.id === homeDashboardId),
              getOptionValue: i => i.id,
              getOptionLabel: this.getFullDashName,
              onChange: dashboard => this.onHomeDashboardChanged(dashboard.id),
              options: dashboards,
              placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
              /*i18n*/
              {
                id: 'shared-preferences.fields.home-dashboard-placeholder',
                message: 'Choose default dashboard'
              }),
              inputId: "home-dashboard-select"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
            /*i18n*/
            {
              id: 'shared-dashboard.fields.timezone-label',
              message: 'Timezone'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.TimeZonePicker.containerV2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TimeZonePicker, {
              includeInternal: true,
              value: timezone,
              onChange: this.onTimeZoneChanged,
              inputId: "shared-preferences-timezone-picker"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
            /*i18n*/
            {
              id: 'shared-preferences.fields.week-start-label',
              message: 'Week start'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.WeekStartPicker.containerV2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.WeekStartPicker, {
              value: weekStart,
              onChange: this.onWeekStartChanged,
              inputId: 'shared-preferences-week-start-picker'
            })
          }), i18nFlag ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
              htmlFor: "locale-select",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: styles.labelText,
                children: _Trans3 || (_Trans3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_10__.Trans, {
                  id: "shared-preferences.fields.locale-label",
                  message: "Language"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FeatureBadge, {
                featureState: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FeatureState.alpha
              })]
            }),
            "data-testid": "User preferences language drop down",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select, {
              value: languages.find(lang => lang.value === locale),
              onChange: locale => {
                var _locale$value;

                return this.onLocaleChanged((_locale$value = locale.value) !== null && _locale$value !== void 0 ? _locale$value : '');
              },
              options: languages,
              placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_9__.i18n._(
              /*i18n*/
              {
                id: 'shared-preferences.fields.locale-placeholder',
                message: 'Choose language'
              }),
              inputId: "locale-select"
            })
          }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "gf-form-button-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
              type: "submit",
              variant: "primary",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.UserProfile.preferencesSaveButton,
              children: _Trans4 || (_Trans4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_10__.Trans, {
                id: "common.save",
                message: "Save"
              }))
            })
          })]
        });
      }
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedPreferences);
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.stylesFactory)(() => {
  return {
    labelText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: 6px;
    `
  };
});

/***/ }),

/***/ "./public/app/features/org/OrgDetailsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgDetailsPage": () => (/* binding */ OrgDetailsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _OrgProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/org/OrgProfile.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/org/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/org/state/reducers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class OrgDetailsPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onUpdateOrganization", orgName => {
      this.props.setOrganizationName(orgName);
      this.props.updateOrganization();
    });
  }

  async componentDidMount() {
    await this.props.loadOrganization();
  }

  render() {
    const {
      navModel,
      organization
    } = this.props;
    const isLoading = Object.keys(organization).length === 0;
    const canReadOrg = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.OrgsRead);
    const canReadPreferences = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.OrgsPreferencesRead);
    const canWritePreferences = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.OrgsPreferencesWrite);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        isLoading: isLoading,
        children: !isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
          spacing: "lg",
          children: [canReadOrg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_OrgProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {
            onSubmit: this.onUpdateOrganization,
            orgName: organization.name
          }), canReadPreferences && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__["default"], {
            resourceUri: "org",
            disabled: !canWritePreferences
          })]
        })
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'org-settings'),
    organization: state.organization.organization
  };
}

const mapDispatchToProps = {
  loadOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_9__.loadOrganization,
  setOrganizationName: _state_reducers__WEBPACK_IMPORTED_MODULE_10__.setOrganizationName,
  updateOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_9__.updateOrganization
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(OrgDetailsPage));

/***/ }),

/***/ "./public/app/features/org/OrgProfile.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button;








const OrgProfile = ({
  onSubmit,
  orgName
}) => {
  const canWriteOrg = app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.OrgsWrite);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
    defaultValues: {
      orgName
    },
    onSubmit: ({
      orgName
    }) => onSubmit(orgName),
    children: ({
      register
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
      label: "Organization profile",
      disabled: !canWriteOrg,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Organization name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
          id: "org-name-input",
          type: "text"
        }, register('orgName', {
          required: true
        })))
      }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "submit",
        children: "Update organization name"
      }))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrgProfile);

/***/ }),

/***/ "./public/app/features/org/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOrganization": () => (/* binding */ createOrganization),
/* harmony export */   "getUserOrganizations": () => (/* binding */ getUserOrganizations),
/* harmony export */   "loadOrganization": () => (/* binding */ loadOrganization),
/* harmony export */   "setUserOrganization": () => (/* binding */ setUserOrganization),
/* harmony export */   "updateOrganization": () => (/* binding */ updateOrganization)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/org/state/reducers.ts");



function loadOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().get('/api/org');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.organizationLoaded)(organizationResponse));
    return organizationResponse;
  };
}
function updateOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async (dispatch, getStore) => {
    const organization = getStore().organization.organization;
    await dependencies.getBackendSrv().put('/api/org', {
      name: organization.name
    });
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateConfigurationSubtitle)(organization.name));
    dispatch(loadOrganization(dependencies));
  };
}
function setUserOrganization(orgId, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().post('/api/user/using/' + orgId);
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateConfigurationSubtitle)(organizationResponse.name));
  };
}
function createOrganization(newOrg, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().post('/api/orgs/', newOrg);
    dispatch(setUserOrganization(result.orgId));
  };
}
function getUserOrganizations(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().get('/api/user/orgs');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userOrganizationsLoaded)(result));
    return result;
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixNQUFNQyxvQkFBb0IsR0FBRyxNQUFNRixZQUFZLENBQUNKLGFBQWIsR0FBNkJZLElBQTdCLENBQWtDLHFCQUFxQkQsS0FBdkQsQ0FBbkM7SUFFQU4sUUFBUSxDQUFDSiw2RUFBMkIsQ0FBQ0ssb0JBQW9CLENBQUNoQixJQUF0QixDQUE1QixDQUFSO0VBQ0QsQ0FKRDtBQUtEO0FBRU0sU0FBU3VCLGtCQUFULENBQ0xDLE1BREssRUFFTFYsWUFBc0MsR0FBRztFQUFFSixhQUFhLEVBQUVBLDJEQUFhQTtBQUE5QixDQUZwQyxFQUdhO0VBQ2xCLE9BQU8sTUFBT0ssUUFBUCxJQUFvQjtJQUN6QixNQUFNVSxNQUFNLEdBQUcsTUFBTVgsWUFBWSxDQUFDSixhQUFiLEdBQTZCWSxJQUE3QixDQUFrQyxZQUFsQyxFQUFnREUsTUFBaEQsQ0FBckI7SUFFQVQsUUFBUSxDQUFDSyxtQkFBbUIsQ0FBQ0ssTUFBTSxDQUFDSixLQUFSLENBQXBCLENBQVI7RUFDRCxDQUpEO0FBS0Q7QUFFTSxTQUFTSyxvQkFBVCxDQUNMWixZQUFzQyxHQUFHO0VBQUVKLGFBQWEsRUFBRUEsMkRBQWFBO0FBQTlCLENBRHBDLEVBRWE7RUFDbEIsT0FBTyxNQUFPSyxRQUFQLElBQW9CO0lBQ3pCLE1BQU1VLE1BQU0sR0FBRyxNQUFNWCxZQUFZLENBQUNKLGFBQWIsR0FBNkJPLEdBQTdCLENBQWlDLGdCQUFqQyxDQUFyQjtJQUNBRixRQUFRLENBQUNGLGtFQUF1QixDQUFDWSxNQUFELENBQXhCLENBQVI7SUFFQSxPQUFPQSxNQUFQO0VBQ0QsQ0FMRDtBQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1NoYXJlZFByZWZlcmVuY2VzL1NoYXJlZFByZWZlcmVuY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9vcmcvT3JnRGV0YWlsc1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL29yZy9PcmdQcm9maWxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9vcmcvc3RhdGUvYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdCwgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRmllbGQsXG4gIEZpZWxkU2V0LFxuICBGb3JtLFxuICBJY29uLFxuICBMYWJlbCxcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgU2VsZWN0LFxuICBzdHlsZXNGYWN0b3J5LFxuICBUaW1lWm9uZVBpY2tlcixcbiAgVG9vbHRpcCxcbiAgV2Vla1N0YXJ0UGlja2VyLFxuICBGZWF0dXJlQmFkZ2UsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFByZWZlcmVuY2VzU2VydmljZSB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL1ByZWZlcmVuY2VzU2VydmljZSc7XG5pbXBvcnQgeyBiYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU2VhcmNoSGl0LCBEYXNoYm9hcmRTZWFyY2hJdGVtVHlwZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9zZWFyY2gvdHlwZXMnO1xuXG5pbXBvcnQgeyBVc2VyUHJlZmVyZW5jZXNEVE8gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZXNvdXJjZVVyaTogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFN0YXRlID0gVXNlclByZWZlcmVuY2VzRFRPICYge1xuICBkYXNoYm9hcmRzOiBEYXNoYm9hcmRTZWFyY2hIaXRbXTtcbn07XG5cbmNvbnN0IHRoZW1lczogU2VsZWN0YWJsZVZhbHVlW10gPSBbXG4gIHsgdmFsdWU6ICcnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmRlZmF1bHQtbGFiZWwnLCBtZXNzYWdlOiAnRGVmYXVsdCcgfSkgfSxcbiAgeyB2YWx1ZTogJ2RhcmsnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmRhcmstbGFiZWwnLCBtZXNzYWdlOiAnRGFyaycgfSkgfSxcbiAgeyB2YWx1ZTogJ2xpZ2h0JywgbGFiZWw6IHQoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy50aGVtZS5saWdodC1sYWJlbCcsIG1lc3NhZ2U6ICdMaWdodCcgfSkgfSxcbl07XG5cbmNvbnN0IGxhbmd1YWdlczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0gW1xuICB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGxhYmVsOiB0KHtcbiAgICAgIGlkOiAnY29tbW9uLmxvY2FsZS5kZWZhdWx0JyxcbiAgICAgIG1lc3NhZ2U6ICdEZWZhdWx0JyxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnZW4nLFxuICAgIGxhYmVsOiB0KHtcbiAgICAgIGlkOiAnY29tbW9uLmxvY2FsZS5lbicsXG4gICAgICBtZXNzYWdlOiAnRW5nbGlzaCcsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ2VzJyxcbiAgICBsYWJlbDogdCh7XG4gICAgICBpZDogJ2NvbW1vbi5sb2NhbGUuZXMnLFxuICAgICAgbWVzc2FnZTogJ1NwYW5pc2gnLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdmcicsXG4gICAgbGFiZWw6IHQoe1xuICAgICAgaWQ6ICdjb21tb24ubG9jYWxlLmZyJyxcbiAgICAgIG1lc3NhZ2U6ICdGcmVuY2gnLFxuICAgIH0pLFxuICB9LFxuXTtcblxuY29uc3QgaTE4bkZsYWcgPSBCb29sZWFuKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5pbnRlcm5hdGlvbmFsaXphdGlvbik7XG5cbmV4cG9ydCBjbGFzcyBTaGFyZWRQcmVmZXJlbmNlcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHNlcnZpY2U6IFByZWZlcmVuY2VzU2VydmljZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNlcnZpY2UgPSBuZXcgUHJlZmVyZW5jZXNTZXJ2aWNlKHByb3BzLnJlc291cmNlVXJpKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG9tZURhc2hib2FyZElkOiAwLFxuICAgICAgdGhlbWU6ICcnLFxuICAgICAgdGltZXpvbmU6ICcnLFxuICAgICAgd2Vla1N0YXJ0OiAnJyxcbiAgICAgIGxvY2FsZTogJycsXG4gICAgICBkYXNoYm9hcmRzOiBbXSxcbiAgICAgIHF1ZXJ5SGlzdG9yeTogeyBob21lVGFiOiAnJyB9LFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmVmcyA9IGF3YWl0IHRoaXMuc2VydmljZS5sb2FkKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkcyA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgc3RhcnJlZDogdHJ1ZSB9KTtcbiAgICBjb25zdCBkZWZhdWx0RGFzaGJvYXJkSGl0OiBEYXNoYm9hcmRTZWFyY2hIaXQgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIHRpdGxlOiAnRGVmYXVsdCcsXG4gICAgICB0YWdzOiBbXSxcbiAgICAgIHR5cGU6ICcnIGFzIERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlLFxuICAgICAgdWlkOiAnJyxcbiAgICAgIHVyaTogJycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgZm9sZGVySWQ6IDAsXG4gICAgICBmb2xkZXJUaXRsZTogJycsXG4gICAgICBmb2xkZXJVaWQ6ICcnLFxuICAgICAgZm9sZGVyVXJsOiAnJyxcbiAgICAgIGlzU3RhcnJlZDogZmFsc2UsXG4gICAgICBzbHVnOiAnJyxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICB9O1xuXG4gICAgaWYgKHByZWZzLmhvbWVEYXNoYm9hcmRJZCA+IDAgJiYgIWRhc2hib2FyZHMuZmluZCgoZCkgPT4gZC5pZCA9PT0gcHJlZnMuaG9tZURhc2hib2FyZElkKSkge1xuICAgICAgY29uc3QgbWlzc2luZyA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgZGFzaGJvYXJkSWRzOiBbcHJlZnMuaG9tZURhc2hib2FyZElkXSB9KTtcbiAgICAgIGlmIChtaXNzaW5nICYmIG1pc3NpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXNoYm9hcmRzLnB1c2gobWlzc2luZ1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBob21lRGFzaGJvYXJkSWQ6IHByZWZzLmhvbWVEYXNoYm9hcmRJZCxcbiAgICAgIHRoZW1lOiBwcmVmcy50aGVtZSxcbiAgICAgIHRpbWV6b25lOiBwcmVmcy50aW1lem9uZSxcbiAgICAgIHdlZWtTdGFydDogcHJlZnMud2Vla1N0YXJ0LFxuICAgICAgbG9jYWxlOiBwcmVmcy5sb2NhbGUsXG4gICAgICBkYXNoYm9hcmRzOiBbZGVmYXVsdERhc2hib2FyZEhpdCwgLi4uZGFzaGJvYXJkc10sXG4gICAgICBxdWVyeUhpc3Rvcnk6IHByZWZzLnF1ZXJ5SGlzdG9yeSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0Rm9ybSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGhvbWVEYXNoYm9hcmRJZCwgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQsIGxvY2FsZSwgcXVlcnlIaXN0b3J5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGUoeyBob21lRGFzaGJvYXJkSWQsIHRoZW1lLCB0aW1lem9uZSwgd2Vla1N0YXJ0LCBsb2NhbGUsIHF1ZXJ5SGlzdG9yeSB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgb25UaGVtZUNoYW5nZWQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25UaW1lWm9uZUNoYW5nZWQgPSAodGltZXpvbmU/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXRpbWV6b25lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lem9uZTogdGltZXpvbmUgfSk7XG4gIH07XG5cbiAgb25XZWVrU3RhcnRDaGFuZ2VkID0gKHdlZWtTdGFydDogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlZWtTdGFydDogd2Vla1N0YXJ0IH0pO1xuICB9O1xuXG4gIG9uSG9tZURhc2hib2FyZENoYW5nZWQgPSAoZGFzaGJvYXJkSWQ6IG51bWJlcikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob21lRGFzaGJvYXJkSWQ6IGRhc2hib2FyZElkIH0pO1xuICB9O1xuXG4gIG9uTG9jYWxlQ2hhbmdlZCA9IChsb2NhbGU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2NhbGUgfSk7XG4gIH07XG5cbiAgZ2V0RnVsbERhc2hOYW1lID0gKGRhc2hib2FyZDogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4pID0+IHtcbiAgICBpZiAodHlwZW9mIGRhc2hib2FyZC5mb2xkZXJUaXRsZSA9PT0gJ3VuZGVmaW5lZCcgfHwgZGFzaGJvYXJkLmZvbGRlclRpdGxlID09PSAnJykge1xuICAgICAgcmV0dXJuIGRhc2hib2FyZC50aXRsZTtcbiAgICB9XG4gICAgcmV0dXJuIGRhc2hib2FyZC5mb2xkZXJUaXRsZSArICcgLyAnICsgZGFzaGJvYXJkLnRpdGxlO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCB0aW1lem9uZSwgd2Vla1N0YXJ0LCBob21lRGFzaGJvYXJkSWQsIGxvY2FsZSwgZGFzaGJvYXJkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcygpO1xuXG4gICAgY29uc3QgaG9tZURhc2hib2FyZFRvb2x0aXAgPSAoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICA8VHJhbnMgaWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLmhvbWUtZGFzaGJvYXJkLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIE5vdCBmaW5kaW5nIHRoZSBkYXNoYm9hcmQgeW91IHdhbnQ/IFN0YXIgaXQgZmlyc3QsIHRoZW4gaXQgc2hvdWxkIGFwcGVhciBpbiB0aGlzIHNlbGVjdCBib3guXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8SWNvbiBuYW1lPVwiaW5mby1jaXJjbGVcIiAvPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXRGb3JtfT5cbiAgICAgICAgeygpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpZWxkU2V0IGxhYmVsPXs8VHJhbnMgaWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMudGl0bGVcIj5QcmVmZXJlbmNlczwvVHJhbnM+fSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9e3QoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMudGhlbWUtbGFiZWwnLCBtZXNzYWdlOiAnVUkgVGhlbWUnIH0pfT5cbiAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhlbWVzfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lcy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSB0aGVtZSk/LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaGVtZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImhvbWUtZGFzaGJvYXJkLXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbFRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtbGFiZWxcIj5Ib21lIERhc2hib2FyZDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICB7aG9tZURhc2hib2FyZFRvb2x0aXB9XG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIlVzZXIgcHJlZmVyZW5jZXMgaG9tZSBkYXNoYm9hcmQgZHJvcCBkb3duXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXNoYm9hcmRzLmZpbmQoKGRhc2hib2FyZCkgPT4gZGFzaGJvYXJkLmlkID09PSBob21lRGFzaGJvYXJkSWQpfVxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhpKSA9PiBpLmlkfVxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9e3RoaXMuZ2V0RnVsbERhc2hOYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXNoYm9hcmQ6IFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRTZWFyY2hIaXQ+KSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSG9tZURhc2hib2FyZENoYW5nZWQoZGFzaGJvYXJkLmlkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGFzaGJvYXJkc31cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLmhvbWUtZGFzaGJvYXJkLXBsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Nob29zZSBkZWZhdWx0IGRhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9XCJob21lLWRhc2hib2FyZC1zZWxlY3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoeyBpZDogJ3NoYXJlZC1kYXNoYm9hcmQuZmllbGRzLnRpbWV6b25lLWxhYmVsJywgbWVzc2FnZTogJ1RpbWV6b25lJyB9KX1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuVGltZVpvbmVQaWNrZXIuY29udGFpbmVyVjJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGltZVpvbmVQaWNrZXJcbiAgICAgICAgICAgICAgICAgIGluY2x1ZGVJbnRlcm5hbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aW1lem9uZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGltZVpvbmVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cInNoYXJlZC1wcmVmZXJlbmNlcy10aW1lem9uZS1waWNrZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMud2Vlay1zdGFydC1sYWJlbCcsIG1lc3NhZ2U6ICdXZWVrIHN0YXJ0JyB9KX1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuV2Vla1N0YXJ0UGlja2VyLmNvbnRhaW5lclYyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFdlZWtTdGFydFBpY2tlclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dlZWtTdGFydH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2Vla1N0YXJ0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eydzaGFyZWQtcHJlZmVyZW5jZXMtd2Vlay1zdGFydC1waWNrZXInfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAge2kxOG5GbGFnID8gKFxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImxvY2FsZS1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbFRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5sb2NhbGUtbGFiZWxcIj5MYW5ndWFnZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlQmFkZ2UgZmVhdHVyZVN0YXRlPXtGZWF0dXJlU3RhdGUuYWxwaGF9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIlVzZXIgcHJlZmVyZW5jZXMgbGFuZ3VhZ2UgZHJvcCBkb3duXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZXMuZmluZCgobGFuZykgPT4gbGFuZy52YWx1ZSA9PT0gbG9jYWxlKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhsb2NhbGU6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KSA9PiB0aGlzLm9uTG9jYWxlQ2hhbmdlZChsb2NhbGUudmFsdWUgPz8gJycpfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYW5ndWFnZXN9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMubG9jYWxlLXBsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2hvb3NlIGxhbmd1YWdlJyxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0SWQ9XCJsb2NhbGUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5Vc2VyUHJvZmlsZS5wcmVmZXJlbmNlc1NhdmVCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwiY29tbW9uLnNhdmVcIj5TYXZlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpZWxkU2V0PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRQcmVmZXJlbmNlcztcblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGFiZWxUZXh0OiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IFNoYXJlZFByZWZlcmVuY2VzIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvU2hhcmVkUHJlZmVyZW5jZXMvU2hhcmVkUHJlZmVyZW5jZXMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgT3JnYW5pemF0aW9uLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IE9yZ1Byb2ZpbGUgZnJvbSAnLi9PcmdQcm9maWxlJztcbmltcG9ydCB7IGxvYWRPcmdhbml6YXRpb24sIHVwZGF0ZU9yZ2FuaXphdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXRPcmdhbml6YXRpb25OYW1lIH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG4gIG9yZ2FuaXphdGlvbjogT3JnYW5pemF0aW9uO1xuICBsb2FkT3JnYW5pemF0aW9uOiB0eXBlb2YgbG9hZE9yZ2FuaXphdGlvbjtcbiAgc2V0T3JnYW5pemF0aW9uTmFtZTogdHlwZW9mIHNldE9yZ2FuaXphdGlvbk5hbWU7XG4gIHVwZGF0ZU9yZ2FuaXphdGlvbjogdHlwZW9mIHVwZGF0ZU9yZ2FuaXphdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIE9yZ0RldGFpbHNQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBhd2FpdCB0aGlzLnByb3BzLmxvYWRPcmdhbml6YXRpb24oKTtcbiAgfVxuXG4gIG9uVXBkYXRlT3JnYW5pemF0aW9uID0gKG9yZ05hbWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0T3JnYW5pemF0aW9uTmFtZShvcmdOYW1lKTtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZU9yZ2FuaXphdGlvbigpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBvcmdhbml6YXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gT2JqZWN0LmtleXMob3JnYW5pemF0aW9uKS5sZW5ndGggPT09IDA7XG4gICAgY29uc3QgY2FuUmVhZE9yZyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ3NSZWFkKTtcbiAgICBjb25zdCBjYW5SZWFkUHJlZmVyZW5jZXMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdzUHJlZmVyZW5jZXNSZWFkKTtcbiAgICBjb25zdCBjYW5Xcml0ZVByZWZlcmVuY2VzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3Jnc1ByZWZlcmVuY2VzV3JpdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT5cbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwibGdcIj5cbiAgICAgICAgICAgICAge2NhblJlYWRPcmcgJiYgPE9yZ1Byb2ZpbGUgb25TdWJtaXQ9e3RoaXMub25VcGRhdGVPcmdhbml6YXRpb259IG9yZ05hbWU9e29yZ2FuaXphdGlvbi5uYW1lfSAvPn1cbiAgICAgICAgICAgICAge2NhblJlYWRQcmVmZXJlbmNlcyAmJiA8U2hhcmVkUHJlZmVyZW5jZXMgcmVzb3VyY2VVcmk9XCJvcmdcIiBkaXNhYmxlZD17IWNhbldyaXRlUHJlZmVyZW5jZXN9IC8+fVxuICAgICAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ29yZy1zZXR0aW5ncycpLFxuICAgIG9yZ2FuaXphdGlvbjogc3RhdGUub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbixcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2FkT3JnYW5pemF0aW9uLFxuICBzZXRPcmdhbml6YXRpb25OYW1lLFxuICB1cGRhdGVPcmdhbml6YXRpb24sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShPcmdEZXRhaWxzUGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IElucHV0LCBGaWVsZCwgRmllbGRTZXQsIEJ1dHRvbiwgRm9ybSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgb3JnTmFtZTogc3RyaW5nO1xuICBvblN1Ym1pdDogKG9yZ05hbWU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIEZvcm1EVE8ge1xuICBvcmdOYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IE9yZ1Byb2ZpbGU6IEZDPFByb3BzPiA9ICh7IG9uU3VibWl0LCBvcmdOYW1lIH0pID0+IHtcbiAgY29uc3QgY2FuV3JpdGVPcmcgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdzV3JpdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17eyBvcmdOYW1lIH19IG9uU3VibWl0PXsoeyBvcmdOYW1lIH06IEZvcm1EVE8pID0+IG9uU3VibWl0KG9yZ05hbWUpfT5cbiAgICAgIHsoeyByZWdpc3RlciB9KSA9PiAoXG4gICAgICAgIDxGaWVsZFNldCBsYWJlbD1cIk9yZ2FuaXphdGlvbiBwcm9maWxlXCIgZGlzYWJsZWQ9eyFjYW5Xcml0ZU9yZ30+XG4gICAgICAgICAgPEZpZWxkIGxhYmVsPVwiT3JnYW5pemF0aW9uIG5hbWVcIj5cbiAgICAgICAgICAgIDxJbnB1dCBpZD1cIm9yZy1uYW1lLWlucHV0XCIgdHlwZT1cInRleHRcIiB7Li4ucmVnaXN0ZXIoJ29yZ05hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSAvPlxuICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgb3JnYW5pemF0aW9uIG5hbWU8L0J1dHRvbj5cbiAgICAgICAgPC9GaWVsZFNldD5cbiAgICAgICl9XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JnUHJvZmlsZTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVwZGF0ZUNvbmZpZ3VyYXRpb25TdWJ0aXRsZSB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBvcmdhbml6YXRpb25Mb2FkZWQsIHVzZXJPcmdhbml6YXRpb25zTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbnR5cGUgT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiB0eXBlb2YgZ2V0QmFja2VuZFNydiB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE9yZ2FuaXphdGlvbihcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb25SZXNwb25zZSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL29yZycpO1xuICAgIGRpc3BhdGNoKG9yZ2FuaXphdGlvbkxvYWRlZChvcmdhbml6YXRpb25SZXNwb25zZSkpO1xuXG4gICAgcmV0dXJuIG9yZ2FuaXphdGlvblJlc3BvbnNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3JnYW5pemF0aW9uKFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb24gPSBnZXRTdG9yZSgpLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb247XG5cbiAgICBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLnB1dCgnL2FwaS9vcmcnLCB7IG5hbWU6IG9yZ2FuaXphdGlvbi5uYW1lIH0pO1xuXG4gICAgZGlzcGF0Y2godXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlKG9yZ2FuaXphdGlvbi5uYW1lKSk7XG4gICAgZGlzcGF0Y2gobG9hZE9yZ2FuaXphdGlvbihkZXBlbmRlbmNpZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJPcmdhbml6YXRpb24oXG4gIG9yZ0lkOiBudW1iZXIsXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uUmVzcG9uc2UgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvdXNlci91c2luZy8nICsgb3JnSWQpO1xuXG4gICAgZGlzcGF0Y2godXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlKG9yZ2FuaXphdGlvblJlc3BvbnNlLm5hbWUpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9yZ2FuaXphdGlvbihcbiAgbmV3T3JnOiB7IG5hbWU6IHN0cmluZyB9LFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9vcmdzLycsIG5ld09yZyk7XG5cbiAgICBkaXNwYXRjaChzZXRVc2VyT3JnYW5pemF0aW9uKHJlc3VsdC5vcmdJZCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck9yZ2FuaXphdGlvbnMoXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvdXNlci9vcmdzJyk7XG4gICAgZGlzcGF0Y2godXNlck9yZ2FuaXphdGlvbnNMb2FkZWQocmVzdWx0KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkZlYXR1cmVTdGF0ZSIsInNlbGVjdG9ycyIsImNvbmZpZyIsIkJ1dHRvbiIsIkZpZWxkIiwiRmllbGRTZXQiLCJGb3JtIiwiSWNvbiIsIkxhYmVsIiwiUmFkaW9CdXR0b25Hcm91cCIsIlNlbGVjdCIsInN0eWxlc0ZhY3RvcnkiLCJUaW1lWm9uZVBpY2tlciIsIlRvb2x0aXAiLCJXZWVrU3RhcnRQaWNrZXIiLCJGZWF0dXJlQmFkZ2UiLCJQcmVmZXJlbmNlc1NlcnZpY2UiLCJiYWNrZW5kU3J2IiwidGhlbWVzIiwidmFsdWUiLCJsYWJlbCIsImlkIiwibGFuZ3VhZ2VzIiwiaTE4bkZsYWciLCJCb29sZWFuIiwiZmVhdHVyZVRvZ2dsZXMiLCJpbnRlcm5hdGlvbmFsaXphdGlvbiIsIlNoYXJlZFByZWZlcmVuY2VzIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhvbWVEYXNoYm9hcmRJZCIsInRoZW1lIiwidGltZXpvbmUiLCJ3ZWVrU3RhcnQiLCJsb2NhbGUiLCJxdWVyeUhpc3RvcnkiLCJzdGF0ZSIsInNlcnZpY2UiLCJ1cGRhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInNldFN0YXRlIiwiZGFzaGJvYXJkSWQiLCJkYXNoYm9hcmQiLCJmb2xkZXJUaXRsZSIsInRpdGxlIiwicmVzb3VyY2VVcmkiLCJkYXNoYm9hcmRzIiwiaG9tZVRhYiIsImNvbXBvbmVudERpZE1vdW50IiwicHJlZnMiLCJsb2FkIiwic2VhcmNoIiwic3RhcnJlZCIsImRlZmF1bHREYXNoYm9hcmRIaXQiLCJ0YWdzIiwidHlwZSIsInVpZCIsInVyaSIsInVybCIsImZvbGRlcklkIiwiZm9sZGVyVWlkIiwiZm9sZGVyVXJsIiwiaXNTdGFycmVkIiwic2x1ZyIsIml0ZW1zIiwiZmluZCIsImQiLCJtaXNzaW5nIiwiZGFzaGJvYXJkSWRzIiwibGVuZ3RoIiwicHVzaCIsInJlbmRlciIsImRpc2FibGVkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaG9tZURhc2hib2FyZFRvb2x0aXAiLCJvblN1Ym1pdEZvcm0iLCJpdGVtIiwib25UaGVtZUNoYW5nZWQiLCJsYWJlbFRleHQiLCJpIiwiZ2V0RnVsbERhc2hOYW1lIiwib25Ib21lRGFzaGJvYXJkQ2hhbmdlZCIsImNvbXBvbmVudHMiLCJjb250YWluZXJWMiIsIm9uVGltZVpvbmVDaGFuZ2VkIiwib25XZWVrU3RhcnRDaGFuZ2VkIiwiYWxwaGEiLCJsYW5nIiwib25Mb2NhbGVDaGFuZ2VkIiwiVXNlclByb2ZpbGUiLCJwcmVmZXJlbmNlc1NhdmVCdXR0b24iLCJjb25uZWN0IiwiVmVydGljYWxHcm91cCIsIlBhZ2UiLCJjb250ZXh0U3J2IiwiZ2V0TmF2TW9kZWwiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiT3JnUHJvZmlsZSIsImxvYWRPcmdhbml6YXRpb24iLCJ1cGRhdGVPcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb25OYW1lIiwiT3JnRGV0YWlsc1BhZ2UiLCJvcmdOYW1lIiwibmF2TW9kZWwiLCJvcmdhbml6YXRpb24iLCJpc0xvYWRpbmciLCJPYmplY3QiLCJrZXlzIiwiY2FuUmVhZE9yZyIsImhhc1Blcm1pc3Npb24iLCJPcmdzUmVhZCIsImNhblJlYWRQcmVmZXJlbmNlcyIsIk9yZ3NQcmVmZXJlbmNlc1JlYWQiLCJjYW5Xcml0ZVByZWZlcmVuY2VzIiwiT3Jnc1ByZWZlcmVuY2VzV3JpdGUiLCJvblVwZGF0ZU9yZ2FuaXphdGlvbiIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZJbmRleCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIklucHV0Iiwib25TdWJtaXQiLCJjYW5Xcml0ZU9yZyIsIk9yZ3NXcml0ZSIsInJlZ2lzdGVyIiwicmVxdWlyZWQiLCJnZXRCYWNrZW5kU3J2IiwidXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlIiwib3JnYW5pemF0aW9uTG9hZGVkIiwidXNlck9yZ2FuaXphdGlvbnNMb2FkZWQiLCJkZXBlbmRlbmNpZXMiLCJkaXNwYXRjaCIsIm9yZ2FuaXphdGlvblJlc3BvbnNlIiwiZ2V0IiwiZ2V0U3RvcmUiLCJwdXQiLCJzZXRVc2VyT3JnYW5pemF0aW9uIiwib3JnSWQiLCJwb3N0IiwiY3JlYXRlT3JnYW5pemF0aW9uIiwibmV3T3JnIiwicmVzdWx0IiwiZ2V0VXNlck9yZ2FuaXphdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9