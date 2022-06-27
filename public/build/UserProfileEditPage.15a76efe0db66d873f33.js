"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserProfileEditPage"],{

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

/***/ "./public/app/features/profile/UserOrganizations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserOrganizations": () => (/* binding */ UserOrganizations),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-90a2022092/0/cache/@lingui-react-npm-3.13.3-7273612a0a-7a83a88cab.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _h, _thead, _Button, _Trans;







class UserOrganizations extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      isLoading,
      orgs,
      user
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        text: "Loading organizations..."
      }));
    }

    if (orgs.length === 0) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        className: "page-sub-heading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
          id: "user-orgs.title",
          message: "Organizations"
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
          className: "filter-table form-inline",
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.UserProfile.orgsTable,
          children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                  id: "user-orgs.name-column",
                  message: "Name"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                  id: "user-orgs.role-column",
                  message: "Role"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {})]
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
            children: orgs.map((org, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: org.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: org.role
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  className: "text-right",
                  children: org.orgId === (user === null || user === void 0 ? void 0 : user.orgId) ? _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: true,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                      id: "user-orgs.current-org-button",
                      message: "Current"
                    })
                  })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "secondary",
                    size: "sm",
                    onClick: () => {
                      this.props.setUserOrg(org);
                    },
                    children: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                      id: "user-orgs.select-org-button",
                      message: "Select organisation"
                    }))
                  })
                })]
              }, index);
            })
          })]
        })
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserOrganizations);

/***/ }),

/***/ "./public/app/features/profile/UserProfileEditForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileEditForm": () => (/* binding */ UserProfileEditForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-90a2022092/0/cache/@lingui-react-npm-3.13.3-7273612a0a-7a83a88cab.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/@lingui-core-npm-3.13.3-1015eedd87-608bb8c7f5.zip/node_modules/@lingui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Trans, _Trans2, _InputSuffix, _Trans3, _InputSuffix2, _InputSuffix3, _Trans4, _Tooltip;









const {
  disableLoginForm
} = app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"];
const UserProfileEditForm = ({
  user,
  isSavingUser,
  updateProfile
}) => {
  const onSubmitProfileUpdate = data => {
    updateProfile(data);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: onSubmitProfileUpdate,
    validateOn: "onBlur",
    children: ({
      register,
      errors
    }) => {
      var _user$name, _user$email, _user$login;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
        label: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
          id: "user-profile.title",
          message: "Edit profile"
        })),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
          /*i18n*/
          {
            id: 'user-profile.fields.name-label',
            message: 'Name'
          }),
          invalid: !!errors.name,
          error: _Trans2 || (_Trans2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
            id: "user-profile.fields.name-error",
            message: "Name is required"
          })),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('name', {
            required: true
          }), {
            id: "edit-user-profile-name",
            placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
            /*i18n*/
            {
              id: 'user-profile.fields.name-label',
              message: 'Name'
            }),
            defaultValue: (_user$name = user === null || user === void 0 ? void 0 : user.name) !== null && _user$name !== void 0 ? _user$name : '',
            suffix: _InputSuffix || (_InputSuffix = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
          /*i18n*/
          {
            id: 'user-profile.fields.email-label',
            message: 'Email'
          }),
          invalid: !!errors.email,
          error: _Trans3 || (_Trans3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
            id: "user-profile.fields.email-error",
            message: "Email is required"
          })),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('email', {
            required: true
          }), {
            id: "edit-user-profile-email",
            placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
            /*i18n*/
            {
              id: 'user-profile.fields.email-label',
              message: 'Email'
            }),
            defaultValue: (_user$email = user === null || user === void 0 ? void 0 : user.email) !== null && _user$email !== void 0 ? _user$email : '',
            suffix: _InputSuffix2 || (_InputSuffix2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
          /*i18n*/
          {
            id: 'user-profile.fields.username-label',
            message: 'Username'
          }),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('login'), {
            id: "edit-user-profile-username",
            defaultValue: (_user$login = user === null || user === void 0 ? void 0 : user.login) !== null && _user$login !== void 0 ? _user$login : '',
            placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
            /*i18n*/
            {
              id: 'user-profile.fields.username-label',
              message: 'Username'
            }),
            suffix: _InputSuffix3 || (_InputSuffix3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "gf-form-button-row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "primary",
            disabled: isSavingUser,
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.UserProfile.profileSaveButton,
            type: "submit",
            children: _Trans4 || (_Trans4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
              id: "common.save",
              message: "Save"
            }))
          })
        })]
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfileEditForm);

const InputSuffix = () => {
  return disableLoginForm ? _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    content: "Login details locked because they are managed in another system.",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "lock"
    })
  })) : null;
};

/***/ }),

/***/ "./public/app/features/profile/UserProfileEditPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileEditPage": () => (/* binding */ UserProfileEditPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMount.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _UserOrganizations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/profile/UserOrganizations.tsx");
/* harmony import */ var _UserProfileEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/profile/UserProfileEditForm.tsx");
/* harmony import */ var _UserSessions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/profile/UserSessions.tsx");
/* harmony import */ var _UserTeams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/profile/UserTeams.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/profile/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _SharedPreferences;
















function mapStateToProps(state) {
  const userState = state.user;
  const {
    user,
    teams,
    orgs,
    sessions,
    teamsAreLoading,
    orgsAreLoading,
    sessionsAreLoading,
    isUpdating
  } = userState;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'profile-settings'),
    orgsAreLoading,
    sessionsAreLoading,
    teamsAreLoading,
    orgs,
    sessions,
    teams,
    isUpdating,
    user
  };
}

const mapDispatchToProps = {
  initUserProfilePage: _state_actions__WEBPACK_IMPORTED_MODULE_10__.initUserProfilePage,
  revokeUserSession: _state_actions__WEBPACK_IMPORTED_MODULE_10__.revokeUserSession,
  changeUserOrg: _state_actions__WEBPACK_IMPORTED_MODULE_10__.changeUserOrg,
  updateUserProfile: _state_actions__WEBPACK_IMPORTED_MODULE_10__.updateUserProfile
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function UserProfileEditPage({
  navModel,
  orgsAreLoading,
  sessionsAreLoading,
  teamsAreLoading,
  initUserProfilePage,
  orgs,
  sessions,
  teams,
  isUpdating,
  user,
  revokeUserSession,
  changeUserOrg,
  updateUserProfile
}) {
  (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => initUserProfilePage());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      isLoading: !user,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
        spacing: "md",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserProfileEditForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
          updateProfile: updateUserProfile,
          isSavingUser: isUpdating,
          user: user
        }), _SharedPreferences || (_SharedPreferences = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__["default"], {
          resourceUri: "user"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserTeams__WEBPACK_IMPORTED_MODULE_9__.UserTeams, {
          isLoading: teamsAreLoading,
          teams: teams
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserOrganizations__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isLoading: orgsAreLoading,
          setUserOrg: changeUserOrg,
          orgs: orgs,
          user: user
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserSessions__WEBPACK_IMPORTED_MODULE_8__["default"], {
          isLoading: sessionsAreLoading,
          revokeUserSession: revokeUserSession,
          sessions: sessions
        })]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UserProfileEditPage));

/***/ }),

/***/ "./public/app/features/profile/UserSessions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-90a2022092/0/cache/@lingui-react-npm-3.13.3-7273612a0a-7a83a88cab.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _h, _thead, _td, _Icon;










class UserSessions extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      isLoading,
      sessions,
      revokeUserSession,
      i18n
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
          id: "user-sessions.loading",
          message: "Loading sessions..."
        })
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: sessions.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
          className: "page-sub-heading",
          children: "Sessions"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "gf-form-group",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
            className: "filter-table form-inline",
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.UserProfile.sessionsTable,
            children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.seen-at-column",
                    message: "Last seen"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.created-at-column",
                    message: "Logged on"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.ip-column",
                    message: "IP address"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.browser-column",
                    message: "Browser & OS"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {})]
              })
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
              children: sessions.map((session, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [session.isActive ? _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: "Now"
                })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: session.seenAt
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: i18n.date(session.createdAt, {
                    dateStyle: 'long'
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: session.clientIp
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                  children: [session.browser, " on ", session.os, " ", session.osVersion]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    size: "sm",
                    variant: "destructive",
                    onClick: () => revokeUserSession(session.id),
                    "aria-label": i18n._(
                    /*i18n*/
                    {
                      id: 'user-session.revoke',
                      message: 'Revoke user session'
                    }),
                    children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                      name: "power"
                    }))
                  })
                })]
              }, index))
            })]
          })
        })]
      })
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lingui_react__WEBPACK_IMPORTED_MODULE_4__.withI18n)()(UserSessions));

/***/ }),

/***/ "./public/app/features/profile/UserTeams.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTeams": () => (/* binding */ UserTeams),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _h, _thead;





class UserTeams extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      isLoading,
      teams
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: "Loading teams..."
      }));
    }

    if (teams.length === 0) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: "page-sub-heading",
        children: "Teams"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
          className: "filter-table form-inline",
          "aria-label": "User teams table",
          children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                children: "Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                children: "Members"
              })]
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
            children: teams.map((team, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  className: "width-4 text-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    className: "filter-table__avatar",
                    src: team.avatarUrl,
                    alt: ""
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: team.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: team.email
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: team.memberCount
                })]
              }, index);
            })
          })]
        })
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserTeams);

/***/ }),

/***/ "./public/app/features/profile/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePassword": () => (/* binding */ changePassword),
/* harmony export */   "changeUserOrg": () => (/* binding */ changeUserOrg),
/* harmony export */   "initUserProfilePage": () => (/* binding */ initUserProfilePage),
/* harmony export */   "loadUser": () => (/* binding */ loadUser),
/* harmony export */   "revokeUserSession": () => (/* binding */ revokeUserSession),
/* harmony export */   "updateUserProfile": () => (/* binding */ updateUserProfile)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/profile/api.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");



function changePassword(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.changePassword(payload);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: false
    }));
  };
}
function initUserProfilePage() {
  return async function (dispatch) {
    await dispatch(loadUser());
    dispatch(loadTeams());
    dispatch(loadOrgs());
    dispatch(loadSessions());
  };
}
function loadUser() {
  return async function (dispatch) {
    const user = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadUser();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userLoaded)({
      user
    }));
  };
}

function loadTeams() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.initLoadTeams)());
    const teams = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadTeams();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.teamsLoaded)({
      teams
    }));
  };
}

function loadOrgs() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.initLoadOrgs)());
    const orgs = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadOrgs();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.orgsLoaded)({
      orgs
    }));
  };
}

function loadSessions() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.initLoadSessions)());
    const sessions = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadSessions();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.sessionsLoaded)({
      sessions
    }));
  };
}

function revokeUserSession(tokenId) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.revokeUserSession(tokenId);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userSessionRevoked)({
      tokenId
    }));
  };
}
function changeUserOrg(org) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.setUserOrg(org);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.appSubUrl + '/profile';
  };
}
function updateUserProfile(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.updateUserProfile(payload);
    await dispatch(loadUser());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: false
    }));
  };
}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclByb2ZpbGVFZGl0UGFnZS4xNWE3NmVmZTBkYjY2ZDg3M2YzMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFDQTs7O0FBY0EsTUFBTXFCLE1BQXlCLEdBQUcsQ0FDaEM7RUFBRUMsS0FBSyxFQUFFLEVBQVQ7RUFBYUMsS0FBSyxFQUFFO0VBQUY7RUFBSTtJQUFFQyxFQUFFLEVBQUUsd0NBQU47SUFBQSxTQUF5RDtFQUF6RCxDQUFKO0FBQWxCLENBRGdDLEVBRWhDO0VBQUVGLEtBQUssRUFBRSxNQUFUO0VBQWlCQyxLQUFLLEVBQUU7RUFBRjtFQUFJO0lBQUVDLEVBQUUsRUFBRSxxQ0FBTjtJQUFBLFNBQXNEO0VBQXRELENBQUo7QUFBdEIsQ0FGZ0MsRUFHaEM7RUFBRUYsS0FBSyxFQUFFLE9BQVQ7RUFBa0JDLEtBQUssRUFBRTtFQUFGO0VBQUk7SUFBRUMsRUFBRSxFQUFFLHNDQUFOO0lBQUEsU0FBdUQ7RUFBdkQsQ0FBSjtBQUF2QixDQUhnQyxDQUFsQztBQU1BLE1BQU1DLFNBQXlDLEdBQUcsQ0FDaEQ7RUFDRUgsS0FBSyxFQUFFLEVBRFQ7RUFFRUMsS0FBSyxFQUFFO0VBQUY7RUFBSTtJQUNQQyxFQUFFLEVBQUUsdUJBREc7SUFBQSxTQUVFO0VBRkYsQ0FBSjtBQUZQLENBRGdELEVBUWhEO0VBQ0VGLEtBQUssRUFBRSxJQURUO0VBRUVDLEtBQUssRUFBRTtFQUFGO0VBQUk7SUFDUEMsRUFBRSxFQUFFLGtCQURHO0lBQUEsU0FFRTtFQUZGLENBQUo7QUFGUCxDQVJnRCxFQWVoRDtFQUNFRixLQUFLLEVBQUUsSUFEVDtFQUVFQyxLQUFLLEVBQUU7RUFBRjtFQUFJO0lBQ1BDLEVBQUUsRUFBRSxrQkFERztJQUFBLFNBRUU7RUFGRixDQUFKO0FBRlAsQ0FmZ0QsRUFzQmhEO0VBQ0VGLEtBQUssRUFBRSxJQURUO0VBRUVDLEtBQUssRUFBRTtFQUFGO0VBQUk7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SUFDQTlELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQjRJLElBQWhCLEdBQXVCbEwsOERBQUEsR0FBbUIsVUFBMUM7RUFDRCxDQUpEO0FBS0Q7QUFFTSxTQUFTaUksaUJBQVQsQ0FBMkJ5QyxPQUEzQixFQUE0RTtFQUNqRixPQUFPLGdCQUFnQkMsUUFBaEIsRUFBMEI7SUFDL0JBLFFBQVEsQ0FBQ04sc0RBQVcsQ0FBQztNQUFFTyxRQUFRLEVBQUU7SUFBWixDQUFELENBQVosQ0FBUjtJQUNBLE1BQU1iLHVEQUFBLENBQXNCVyxPQUF0QixDQUFOO0lBQ0EsTUFBTUMsUUFBUSxDQUFDRSxRQUFRLEVBQVQsQ0FBZDtJQUNBRixRQUFRLENBQUNOLHNEQUFXLENBQUM7TUFBRU8sUUFBUSxFQUFFO0lBQVosQ0FBRCxDQUFaLENBQVI7RUFDRCxDQUxEO0FBTUQ7Ozs7Ozs7Ozs7OztBQ3pGMkM7QUFDNUM7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1NoYXJlZFByZWZlcmVuY2VzL1NoYXJlZFByZWZlcmVuY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wcm9maWxlL1VzZXJPcmdhbml6YXRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wcm9maWxlL1VzZXJQcm9maWxlRWRpdEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvVXNlclByb2ZpbGVFZGl0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcHJvZmlsZS9Vc2VyU2Vzc2lvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvVXNlclRlYW1zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wcm9maWxlL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXVzZS12aXJ0dWFsLWNlYThlODI2ZGMvMC9jYWNoZS9yZWFjdC11c2UtbnBtLTE3LjQuMC0wZWY0NTIxNTQ0LTA4ODlkYTkxOWIuemlwL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU1vdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB0LCBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGaWVsZCxcbiAgRmllbGRTZXQsXG4gIEZvcm0sXG4gIEljb24sXG4gIExhYmVsLFxuICBSYWRpb0J1dHRvbkdyb3VwLFxuICBTZWxlY3QsXG4gIHN0eWxlc0ZhY3RvcnksXG4gIFRpbWVab25lUGlja2VyLFxuICBUb29sdGlwLFxuICBXZWVrU3RhcnRQaWNrZXIsXG4gIEZlYXR1cmVCYWRnZSxcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUHJlZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvUHJlZmVyZW5jZXNTZXJ2aWNlJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBEYXNoYm9hcmRTZWFyY2hIaXQsIERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3NlYXJjaC90eXBlcyc7XG5cbmltcG9ydCB7IFVzZXJQcmVmZXJlbmNlc0RUTyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlc291cmNlVXJpOiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgU3RhdGUgPSBVc2VyUHJlZmVyZW5jZXNEVE8gJiB7XG4gIGRhc2hib2FyZHM6IERhc2hib2FyZFNlYXJjaEhpdFtdO1xufTtcblxuY29uc3QgdGhlbWVzOiBTZWxlY3RhYmxlVmFsdWVbXSA9IFtcbiAgeyB2YWx1ZTogJycsIGxhYmVsOiB0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMudGhlbWUuZGVmYXVsdC1sYWJlbCcsIG1lc3NhZ2U6ICdEZWZhdWx0JyB9KSB9LFxuICB7IHZhbHVlOiAnZGFyaycsIGxhYmVsOiB0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMudGhlbWUuZGFyay1sYWJlbCcsIG1lc3NhZ2U6ICdEYXJrJyB9KSB9LFxuICB7IHZhbHVlOiAnbGlnaHQnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmxpZ2h0LWxhYmVsJywgbWVzc2FnZTogJ0xpZ2h0JyB9KSB9LFxuXTtcblxuY29uc3QgbGFuZ3VhZ2VzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBbXG4gIHtcbiAgICB2YWx1ZTogJycsXG4gICAgbGFiZWw6IHQoe1xuICAgICAgaWQ6ICdjb21tb24ubG9jYWxlLmRlZmF1bHQnLFxuICAgICAgbWVzc2FnZTogJ0RlZmF1bHQnLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdlbicsXG4gICAgbGFiZWw6IHQoe1xuICAgICAgaWQ6ICdjb21tb24ubG9jYWxlLmVuJyxcbiAgICAgIG1lc3NhZ2U6ICdFbmdsaXNoJyxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnZXMnLFxuICAgIGxhYmVsOiB0KHtcbiAgICAgIGlkOiAnY29tbW9uLmxvY2FsZS5lcycsXG4gICAgICBtZXNzYWdlOiAnU3BhbmlzaCcsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ2ZyJyxcbiAgICBsYWJlbDogdCh7XG4gICAgICBpZDogJ2NvbW1vbi5sb2NhbGUuZnInLFxuICAgICAgbWVzc2FnZTogJ0ZyZW5jaCcsXG4gICAgfSksXG4gIH0sXG5dO1xuXG5jb25zdCBpMThuRmxhZyA9IEJvb2xlYW4oY29uZmlnLmZlYXR1cmVUb2dnbGVzLmludGVybmF0aW9uYWxpemF0aW9uKTtcblxuZXhwb3J0IGNsYXNzIFNoYXJlZFByZWZlcmVuY2VzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc2VydmljZTogUHJlZmVyZW5jZXNTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2VydmljZSA9IG5ldyBQcmVmZXJlbmNlc1NlcnZpY2UocHJvcHMucmVzb3VyY2VVcmkpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob21lRGFzaGJvYXJkSWQ6IDAsXG4gICAgICB0aGVtZTogJycsXG4gICAgICB0aW1lem9uZTogJycsXG4gICAgICB3ZWVrU3RhcnQ6ICcnLFxuICAgICAgbG9jYWxlOiAnJyxcbiAgICAgIGRhc2hib2FyZHM6IFtdLFxuICAgICAgcXVlcnlIaXN0b3J5OiB7IGhvbWVUYWI6ICcnIH0sXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHByZWZzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmxvYWQoKTtcbiAgICBjb25zdCBkYXNoYm9hcmRzID0gYXdhaXQgYmFja2VuZFNydi5zZWFyY2goeyBzdGFycmVkOiB0cnVlIH0pO1xuICAgIGNvbnN0IGRlZmF1bHREYXNoYm9hcmRIaXQ6IERhc2hib2FyZFNlYXJjaEhpdCA9IHtcbiAgICAgIGlkOiAwLFxuICAgICAgdGl0bGU6ICdEZWZhdWx0JyxcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAgdHlwZTogJycgYXMgRGFzaGJvYXJkU2VhcmNoSXRlbVR5cGUsXG4gICAgICB1aWQ6ICcnLFxuICAgICAgdXJpOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBmb2xkZXJJZDogMCxcbiAgICAgIGZvbGRlclRpdGxlOiAnJyxcbiAgICAgIGZvbGRlclVpZDogJycsXG4gICAgICBmb2xkZXJVcmw6ICcnLFxuICAgICAgaXNTdGFycmVkOiBmYWxzZSxcbiAgICAgIHNsdWc6ICcnLFxuICAgICAgaXRlbXM6IFtdLFxuICAgIH07XG5cbiAgICBpZiAocHJlZnMuaG9tZURhc2hib2FyZElkID4gMCAmJiAhZGFzaGJvYXJkcy5maW5kKChkKSA9PiBkLmlkID09PSBwcmVmcy5ob21lRGFzaGJvYXJkSWQpKSB7XG4gICAgICBjb25zdCBtaXNzaW5nID0gYXdhaXQgYmFja2VuZFNydi5zZWFyY2goeyBkYXNoYm9hcmRJZHM6IFtwcmVmcy5ob21lRGFzaGJvYXJkSWRdIH0pO1xuICAgICAgaWYgKG1pc3NpbmcgJiYgbWlzc2luZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRhc2hib2FyZHMucHVzaChtaXNzaW5nWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhvbWVEYXNoYm9hcmRJZDogcHJlZnMuaG9tZURhc2hib2FyZElkLFxuICAgICAgdGhlbWU6IHByZWZzLnRoZW1lLFxuICAgICAgdGltZXpvbmU6IHByZWZzLnRpbWV6b25lLFxuICAgICAgd2Vla1N0YXJ0OiBwcmVmcy53ZWVrU3RhcnQsXG4gICAgICBsb2NhbGU6IHByZWZzLmxvY2FsZSxcbiAgICAgIGRhc2hib2FyZHM6IFtkZWZhdWx0RGFzaGJvYXJkSGl0LCAuLi5kYXNoYm9hcmRzXSxcbiAgICAgIHF1ZXJ5SGlzdG9yeTogcHJlZnMucXVlcnlIaXN0b3J5LFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXRGb3JtID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgaG9tZURhc2hib2FyZElkLCB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCwgbG9jYWxlLCBxdWVyeUhpc3RvcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZSh7IGhvbWVEYXNoYm9hcmRJZCwgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQsIGxvY2FsZSwgcXVlcnlIaXN0b3J5IH0pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBvblRoZW1lQ2hhbmdlZCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRoZW1lOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvblRpbWVab25lQ2hhbmdlZCA9ICh0aW1lem9uZT86IHN0cmluZykgPT4ge1xuICAgIGlmICghdGltZXpvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWV6b25lOiB0aW1lem9uZSB9KTtcbiAgfTtcblxuICBvbldlZWtTdGFydENoYW5nZWQgPSAod2Vla1N0YXJ0OiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vla1N0YXJ0OiB3ZWVrU3RhcnQgfSk7XG4gIH07XG5cbiAgb25Ib21lRGFzaGJvYXJkQ2hhbmdlZCA9IChkYXNoYm9hcmRJZDogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvbWVEYXNoYm9hcmRJZDogZGFzaGJvYXJkSWQgfSk7XG4gIH07XG5cbiAgb25Mb2NhbGVDaGFuZ2VkID0gKGxvY2FsZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2FsZSB9KTtcbiAgfTtcblxuICBnZXRGdWxsRGFzaE5hbWUgPSAoZGFzaGJvYXJkOiBTZWxlY3RhYmxlVmFsdWU8RGFzaGJvYXJkU2VhcmNoSGl0PikgPT4ge1xuICAgIGlmICh0eXBlb2YgZGFzaGJvYXJkLmZvbGRlclRpdGxlID09PSAndW5kZWZpbmVkJyB8fCBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZGFzaGJvYXJkLnRpdGxlO1xuICAgIH1cbiAgICByZXR1cm4gZGFzaGJvYXJkLmZvbGRlclRpdGxlICsgJyAvICcgKyBkYXNoYm9hcmQudGl0bGU7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQsIGhvbWVEYXNoYm9hcmRJZCwgbG9jYWxlLCBkYXNoYm9hcmRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgICBjb25zdCBob21lRGFzaGJvYXJkVG9vbHRpcCA9IChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgIDxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtdG9vbHRpcFwiPlxuICAgICAgICAgICAgTm90IGZpbmRpbmcgdGhlIGRhc2hib2FyZCB5b3Ugd2FudD8gU3RhciBpdCBmaXJzdCwgdGhlbiBpdCBzaG91bGQgYXBwZWFyIGluIHRoaXMgc2VsZWN0IGJveC5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxJY29uIG5hbWU9XCJpbmZvLWNpcmNsZVwiIC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEZvcm19PlxuICAgICAgICB7KCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGRTZXQgbGFiZWw9ezxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy50aXRsZVwiPlByZWZlcmVuY2VzPC9UcmFucz59IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy50aGVtZS1sYWJlbCcsIG1lc3NhZ2U6ICdVSSBUaGVtZScgfSl9PlxuICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGVtZXN9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFsdWUgPT09IHRoZW1lKT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRoZW1lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaG9tZS1kYXNoYm9hcmQtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5ob21lLWRhc2hib2FyZC1sYWJlbFwiPkhvbWUgRGFzaGJvYXJkPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIHtob21lRGFzaGJvYXJkVG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiVXNlciBwcmVmZXJlbmNlcyBob21lIGRhc2hib2FyZCBkcm9wIGRvd25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rhc2hib2FyZHMuZmluZCgoZGFzaGJvYXJkKSA9PiBkYXNoYm9hcmQuaWQgPT09IGhvbWVEYXNoYm9hcmRJZCl9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KGkpID0+IGkuaWR9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17dGhpcy5nZXRGdWxsRGFzaE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhc2hib2FyZDogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4pID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ib21lRGFzaGJvYXJkQ2hhbmdlZChkYXNoYm9hcmQuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkYXNoYm9hcmRzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Qoe1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2hvb3NlIGRlZmF1bHQgZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImhvbWUtZGFzaGJvYXJkLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLWRhc2hib2FyZC5maWVsZHMudGltZXpvbmUtbGFiZWwnLCBtZXNzYWdlOiAnVGltZXpvbmUnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5UaW1lWm9uZVBpY2tlci5jb250YWluZXJWMn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUaW1lWm9uZVBpY2tlclxuICAgICAgICAgICAgICAgICAgaW5jbHVkZUludGVybmFsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWV6b25lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaW1lWm9uZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPVwic2hhcmVkLXByZWZlcmVuY2VzLXRpbWV6b25lLXBpY2tlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy53ZWVrLXN0YXJ0LWxhYmVsJywgbWVzc2FnZTogJ1dlZWsgc3RhcnQnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5XZWVrU3RhcnRQaWNrZXIuY29udGFpbmVyVjJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8V2Vla1N0YXJ0UGlja2VyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla1N0YXJ0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XZWVrU3RhcnRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD17J3NoYXJlZC1wcmVmZXJlbmNlcy13ZWVrLXN0YXJ0LXBpY2tlcid9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICB7aTE4bkZsYWcgPyAoXG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibG9jYWxlLXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLmxvY2FsZS1sYWJlbFwiPkxhbmd1YWdlPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVCYWRnZSBmZWF0dXJlU3RhdGU9e0ZlYXR1cmVTdGF0ZS5hbHBoYX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiVXNlciBwcmVmZXJlbmNlcyBsYW5ndWFnZSBkcm9wIGRvd25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd1YWdlcy5maW5kKChsYW5nKSA9PiBsYW5nLnZhbHVlID09PSBsb2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGxvY2FsZTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHRoaXMub25Mb2NhbGVDaGFuZ2VkKGxvY2FsZS52YWx1ZSA/PyAnJyl9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhbmd1YWdlc31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Qoe1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5sb2NhbGUtcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDaG9vc2UgbGFuZ3VhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImxvY2FsZS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlVzZXJQcm9maWxlLnByZWZlcmVuY2VzU2F2ZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJjb21tb24uc2F2ZVwiPlNhdmU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlZFByZWZlcmVuY2VzO1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbFRleHQ6IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIGAsXG4gIH07XG59KTtcbiIsImltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybyc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBCdXR0b24sIExvYWRpbmdQbGFjZWhvbGRlciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFVzZXJEVE8sIFVzZXJPcmcgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcjogVXNlckRUTyB8IG51bGw7XG4gIG9yZ3M6IFVzZXJPcmdbXTtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBzZXRVc2VyT3JnOiAob3JnOiBVc2VyT3JnKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlck9yZ2FuaXphdGlvbnMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgb3JncywgdXNlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nIG9yZ2FuaXphdGlvbnMuLi5cIiAvPjtcbiAgICB9XG5cbiAgICBpZiAob3Jncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPlxuICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItb3Jncy50aXRsZVwiPk9yZ2FuaXphdGlvbnM8L1RyYW5zPlxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGUgZm9ybS1pbmxpbmVcIiBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuVXNlclByb2ZpbGUub3Jnc1RhYmxlfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItb3Jncy5uYW1lLWNvbHVtblwiPk5hbWU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwidXNlci1vcmdzLnJvbGUtY29sdW1uXCI+Um9sZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtvcmdzLm1hcCgob3JnOiBVc2VyT3JnLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3JnLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntvcmcucm9sZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtvcmcub3JnSWQgPT09IHVzZXI/Lm9yZ0lkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItb3Jncy5jdXJyZW50LW9yZy1idXR0b25cIj5DdXJyZW50PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRVc2VyT3JnKG9yZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItb3Jncy5zZWxlY3Qtb3JnLWJ1dHRvblwiPlNlbGVjdCBvcmdhbmlzYXRpb248L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyT3JnYW5pemF0aW9ucztcbiIsImltcG9ydCB7IFRyYW5zLCB0IH0gZnJvbSAnQGxpbmd1aS9tYWNybyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRmllbGRTZXQsIEZvcm0sIEljb24sIElucHV0LCBUb29sdGlwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgVXNlckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IFByb2ZpbGVVcGRhdGVGaWVsZHMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXI6IFVzZXJEVE8gfCBudWxsO1xuICBpc1NhdmluZ1VzZXI6IGJvb2xlYW47XG4gIHVwZGF0ZVByb2ZpbGU6IChwYXlsb2FkOiBQcm9maWxlVXBkYXRlRmllbGRzKSA9PiB2b2lkO1xufVxuXG5jb25zdCB7IGRpc2FibGVMb2dpbkZvcm0gfSA9IGNvbmZpZztcblxuZXhwb3J0IGNvbnN0IFVzZXJQcm9maWxlRWRpdEZvcm06IEZDPFByb3BzPiA9ICh7IHVzZXIsIGlzU2F2aW5nVXNlciwgdXBkYXRlUHJvZmlsZSB9KSA9PiB7XG4gIGNvbnN0IG9uU3VibWl0UHJvZmlsZVVwZGF0ZSA9IChkYXRhOiBQcm9maWxlVXBkYXRlRmllbGRzKSA9PiB7XG4gICAgdXBkYXRlUHJvZmlsZShkYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdFByb2ZpbGVVcGRhdGV9IHZhbGlkYXRlT249XCJvbkJsdXJcIj5cbiAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RmllbGRTZXQgbGFiZWw9ezxUcmFucyBpZD1cInVzZXItcHJvZmlsZS50aXRsZVwiPkVkaXQgcHJvZmlsZTwvVHJhbnM+fT5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy5uYW1lLWxhYmVsJywgbWVzc2FnZTogJ05hbWUnIH0pfVxuICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5uYW1lfVxuICAgICAgICAgICAgICBlcnJvcj17PFRyYW5zIGlkPVwidXNlci1wcm9maWxlLmZpZWxkcy5uYW1lLWVycm9yXCI+TmFtZSBpcyByZXF1aXJlZDwvVHJhbnM+fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZUxvZ2luRm9ybX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICBpZD1cImVkaXQtdXNlci1wcm9maWxlLW5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KHsgaWQ6ICd1c2VyLXByb2ZpbGUuZmllbGRzLm5hbWUtbGFiZWwnLCBtZXNzYWdlOiAnTmFtZScgfSl9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1c2VyPy5uYW1lID8/ICcnfVxuICAgICAgICAgICAgICAgIHN1ZmZpeD17PElucHV0U3VmZml4IC8+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXt0KHsgaWQ6ICd1c2VyLXByb2ZpbGUuZmllbGRzLmVtYWlsLWxhYmVsJywgbWVzc2FnZTogJ0VtYWlsJyB9KX1cbiAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgIGVycm9yPXs8VHJhbnMgaWQ9XCJ1c2VyLXByb2ZpbGUuZmllbGRzLmVtYWlsLWVycm9yXCI+RW1haWwgaXMgcmVxdWlyZWQ8L1RyYW5zPn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVMb2dpbkZvcm19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgIGlkPVwiZWRpdC11c2VyLXByb2ZpbGUtZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KHsgaWQ6ICd1c2VyLXByb2ZpbGUuZmllbGRzLmVtYWlsLWxhYmVsJywgbWVzc2FnZTogJ0VtYWlsJyB9KX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VzZXI/LmVtYWlsID8/ICcnfVxuICAgICAgICAgICAgICAgIHN1ZmZpeD17PElucHV0U3VmZml4IC8+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXt0KHsgaWQ6ICd1c2VyLXByb2ZpbGUuZmllbGRzLnVzZXJuYW1lLWxhYmVsJywgbWVzc2FnZTogJ1VzZXJuYW1lJyB9KX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVMb2dpbkZvcm19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbG9naW4nKX1cbiAgICAgICAgICAgICAgICBpZD1cImVkaXQtdXNlci1wcm9maWxlLXVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VzZXI/LmxvZ2luID8/ICcnfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KHsgaWQ6ICd1c2VyLXByb2ZpbGUuZmllbGRzLnVzZXJuYW1lLWxhYmVsJywgbWVzc2FnZTogJ1VzZXJuYW1lJyB9KX1cbiAgICAgICAgICAgICAgICBzdWZmaXg9ezxJbnB1dFN1ZmZpeCAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU2F2aW5nVXNlcn1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuVXNlclByb2ZpbGUucHJvZmlsZVNhdmVCdXR0b259XG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJjb21tb24uc2F2ZVwiPlNhdmU8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgICk7XG4gICAgICB9fVxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlRWRpdEZvcm07XG5cbmNvbnN0IElucHV0U3VmZml4OiBGQyA9ICgpID0+IHtcbiAgcmV0dXJuIGRpc2FibGVMb2dpbkZvcm0gPyAoXG4gICAgPFRvb2x0aXAgY29udGVudD1cIkxvZ2luIGRldGFpbHMgbG9ja2VkIGJlY2F1c2UgdGhleSBhcmUgbWFuYWdlZCBpbiBhbm90aGVyIHN5c3RlbS5cIj5cbiAgICAgIDxJY29uIG5hbWU9XCJsb2NrXCIgLz5cbiAgICA8L1Rvb2x0aXA+XG4gICkgOiBudWxsO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZU1vdW50IH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFZlcnRpY2FsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgU2hhcmVkUHJlZmVyZW5jZXMgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9TaGFyZWRQcmVmZXJlbmNlcy9TaGFyZWRQcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IFVzZXJPcmdhbml6YXRpb25zIGZyb20gJy4vVXNlck9yZ2FuaXphdGlvbnMnO1xuaW1wb3J0IFVzZXJQcm9maWxlRWRpdEZvcm0gZnJvbSAnLi9Vc2VyUHJvZmlsZUVkaXRGb3JtJztcbmltcG9ydCBVc2VyU2Vzc2lvbnMgZnJvbSAnLi9Vc2VyU2Vzc2lvbnMnO1xuaW1wb3J0IHsgVXNlclRlYW1zIH0gZnJvbSAnLi9Vc2VyVGVhbXMnO1xuaW1wb3J0IHsgY2hhbmdlVXNlck9yZywgaW5pdFVzZXJQcm9maWxlUGFnZSwgcmV2b2tlVXNlclNlc3Npb24sIHVwZGF0ZVVzZXJQcm9maWxlIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyB7XG4gIG5hdk1vZGVsOiBOYXZNb2RlbDtcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIGNvbnN0IHVzZXJTdGF0ZSA9IHN0YXRlLnVzZXI7XG4gIGNvbnN0IHsgdXNlciwgdGVhbXMsIG9yZ3MsIHNlc3Npb25zLCB0ZWFtc0FyZUxvYWRpbmcsIG9yZ3NBcmVMb2FkaW5nLCBzZXNzaW9uc0FyZUxvYWRpbmcsIGlzVXBkYXRpbmcgfSA9IHVzZXJTdGF0ZTtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdwcm9maWxlLXNldHRpbmdzJyksXG4gICAgb3Jnc0FyZUxvYWRpbmcsXG4gICAgc2Vzc2lvbnNBcmVMb2FkaW5nLFxuICAgIHRlYW1zQXJlTG9hZGluZyxcbiAgICBvcmdzLFxuICAgIHNlc3Npb25zLFxuICAgIHRlYW1zLFxuICAgIGlzVXBkYXRpbmcsXG4gICAgdXNlcixcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBpbml0VXNlclByb2ZpbGVQYWdlLFxuICByZXZva2VVc2VyU2Vzc2lvbixcbiAgY2hhbmdlVXNlck9yZyxcbiAgdXBkYXRlVXNlclByb2ZpbGUsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgZnVuY3Rpb24gVXNlclByb2ZpbGVFZGl0UGFnZSh7XG4gIG5hdk1vZGVsLFxuICBvcmdzQXJlTG9hZGluZyxcbiAgc2Vzc2lvbnNBcmVMb2FkaW5nLFxuICB0ZWFtc0FyZUxvYWRpbmcsXG4gIGluaXRVc2VyUHJvZmlsZVBhZ2UsXG4gIG9yZ3MsXG4gIHNlc3Npb25zLFxuICB0ZWFtcyxcbiAgaXNVcGRhdGluZyxcbiAgdXNlcixcbiAgcmV2b2tlVXNlclNlc3Npb24sXG4gIGNoYW5nZVVzZXJPcmcsXG4gIHVwZGF0ZVVzZXJQcm9maWxlLFxufTogUHJvcHMpIHtcbiAgdXNlTW91bnQoKCkgPT4gaW5pdFVzZXJQcm9maWxlUGFnZSgpKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9eyF1c2VyfT5cbiAgICAgICAgPFZlcnRpY2FsR3JvdXAgc3BhY2luZz1cIm1kXCI+XG4gICAgICAgICAgPFVzZXJQcm9maWxlRWRpdEZvcm0gdXBkYXRlUHJvZmlsZT17dXBkYXRlVXNlclByb2ZpbGV9IGlzU2F2aW5nVXNlcj17aXNVcGRhdGluZ30gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICA8U2hhcmVkUHJlZmVyZW5jZXMgcmVzb3VyY2VVcmk9XCJ1c2VyXCIgLz5cbiAgICAgICAgICA8VXNlclRlYW1zIGlzTG9hZGluZz17dGVhbXNBcmVMb2FkaW5nfSB0ZWFtcz17dGVhbXN9IC8+XG4gICAgICAgICAgPFVzZXJPcmdhbml6YXRpb25zIGlzTG9hZGluZz17b3Jnc0FyZUxvYWRpbmd9IHNldFVzZXJPcmc9e2NoYW5nZVVzZXJPcmd9IG9yZ3M9e29yZ3N9IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgPFVzZXJTZXNzaW9ucyBpc0xvYWRpbmc9e3Nlc3Npb25zQXJlTG9hZGluZ30gcmV2b2tlVXNlclNlc3Npb249e3Jldm9rZVVzZXJTZXNzaW9ufSBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+XG4gICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihVc2VyUHJvZmlsZUVkaXRQYWdlKTtcbiIsImltcG9ydCB7IHQsIFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybyc7XG5pbXBvcnQgeyB3aXRoSTE4biwgd2l0aEkxOG5Qcm9wcyB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBVc2VyU2Vzc2lvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIHdpdGhJMThuUHJvcHMge1xuICBzZXNzaW9uczogVXNlclNlc3Npb25bXTtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICByZXZva2VVc2VyU2Vzc2lvbjogKHRva2VuSWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY2xhc3MgVXNlclNlc3Npb25zIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIHNlc3Npb25zLCByZXZva2VVc2VyU2Vzc2lvbiwgaTE4biB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9ezxUcmFucyBpZD1cInVzZXItc2Vzc2lvbnMubG9hZGluZ1wiPkxvYWRpbmcgc2Vzc2lvbnMuLi48L1RyYW5zPn0gLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtzZXNzaW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5TZXNzaW9uczwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZVwiIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5Vc2VyUHJvZmlsZS5zZXNzaW9uc1RhYmxlfT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJ1c2VyLXNlc3Npb24uc2Vlbi1hdC1jb2x1bW5cIj5MYXN0IHNlZW48L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwidXNlci1zZXNzaW9uLmNyZWF0ZWQtYXQtY29sdW1uXCI+TG9nZ2VkIG9uPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItc2Vzc2lvbi5pcC1jb2x1bW5cIj5JUCBhZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItc2Vzc2lvbi5icm93c2VyLWNvbHVtblwiPkJyb3dzZXIgJmFtcDsgT1M8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7c2Vzc2lvbnMubWFwKChzZXNzaW9uOiBVc2VyU2Vzc2lvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uLmlzQWN0aXZlID8gPHRkPk5vdzwvdGQ+IDogPHRkPntzZXNzaW9uLnNlZW5BdH08L3RkPn1cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kxOG4uZGF0ZShzZXNzaW9uLmNyZWF0ZWRBdCwgeyBkYXRlU3R5bGU6ICdsb25nJyB9KX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c2Vzc2lvbi5jbGllbnRJcH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uLmJyb3dzZXJ9IG9uIHtzZXNzaW9uLm9zfSB7c2Vzc2lvbi5vc1ZlcnNpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJldm9rZVVzZXJTZXNzaW9uKHNlc3Npb24uaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KHsgaWQ6ICd1c2VyLXNlc3Npb24ucmV2b2tlJywgbWVzc2FnZTogJ1Jldm9rZSB1c2VyIHNlc3Npb24nIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicG93ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEkxOG4oKShVc2VyU2Vzc2lvbnMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExvYWRpbmdQbGFjZWhvbGRlciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFRlYW0gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgdGVhbXM6IFRlYW1bXTtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlclRlYW1zIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIHRlYW1zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcgdGVhbXMuLi5cIiAvPjtcbiAgICB9XG5cbiAgICBpZiAodGVhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5UZWFtczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGUgZm9ybS1pbmxpbmVcIiBhcmlhLWxhYmVsPVwiVXNlciB0ZWFtcyB0YWJsZVwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPk1lbWJlcnM8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3RlYW1zLm1hcCgodGVhbTogVGVhbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlX19hdmF0YXJcIiBzcmM9e3RlYW0uYXZhdGFyVXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RlYW0ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RlYW0uZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0ZWFtLm1lbWJlckNvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclRlYW1zO1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IFRodW5rUmVzdWx0LCBVc2VyT3JnIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRmllbGRzLCBQcm9maWxlVXBkYXRlRmllbGRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQge1xuICBpbml0TG9hZE9yZ3MsXG4gIGluaXRMb2FkU2Vzc2lvbnMsXG4gIGluaXRMb2FkVGVhbXMsXG4gIG9yZ3NMb2FkZWQsXG4gIHNlc3Npb25zTG9hZGVkLFxuICBzZXRVcGRhdGluZyxcbiAgdGVhbXNMb2FkZWQsXG4gIHVzZXJMb2FkZWQsXG4gIHVzZXJTZXNzaW9uUmV2b2tlZCxcbn0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQYXNzd29yZChwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZEZpZWxkcyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IHRydWUgfSkpO1xuICAgIGF3YWl0IGFwaS5jaGFuZ2VQYXNzd29yZChwYXlsb2FkKTtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiBmYWxzZSB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VXNlclByb2ZpbGVQYWdlKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGF3YWl0IGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtcygpKTtcbiAgICBkaXNwYXRjaChsb2FkT3JncygpKTtcbiAgICBkaXNwYXRjaChsb2FkU2Vzc2lvbnMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcigpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpLmxvYWRVc2VyKCk7XG4gICAgZGlzcGF0Y2godXNlckxvYWRlZCh7IHVzZXIgfSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBsb2FkVGVhbXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goaW5pdExvYWRUZWFtcygpKTtcbiAgICBjb25zdCB0ZWFtcyA9IGF3YWl0IGFwaS5sb2FkVGVhbXMoKTtcbiAgICBkaXNwYXRjaCh0ZWFtc0xvYWRlZCh7IHRlYW1zIH0pKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZE9yZ3MoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goaW5pdExvYWRPcmdzKCkpO1xuICAgIGNvbnN0IG9yZ3MgPSBhd2FpdCBhcGkubG9hZE9yZ3MoKTtcbiAgICBkaXNwYXRjaChvcmdzTG9hZGVkKHsgb3JncyB9KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRTZXNzaW9ucygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChpbml0TG9hZFNlc3Npb25zKCkpO1xuICAgIGNvbnN0IHNlc3Npb25zID0gYXdhaXQgYXBpLmxvYWRTZXNzaW9ucygpO1xuICAgIGRpc3BhdGNoKHNlc3Npb25zTG9hZGVkKHsgc2Vzc2lvbnMgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2b2tlVXNlclNlc3Npb24odG9rZW5JZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogdHJ1ZSB9KSk7XG4gICAgYXdhaXQgYXBpLnJldm9rZVVzZXJTZXNzaW9uKHRva2VuSWQpO1xuICAgIGRpc3BhdGNoKHVzZXJTZXNzaW9uUmV2b2tlZCh7IHRva2VuSWQgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVXNlck9yZyhvcmc6IFVzZXJPcmcpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiB0cnVlIH0pKTtcbiAgICBhd2FpdCBhcGkuc2V0VXNlck9yZyhvcmcpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29uZmlnLmFwcFN1YlVybCArICcvcHJvZmlsZSc7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVc2VyUHJvZmlsZShwYXlsb2FkOiBQcm9maWxlVXBkYXRlRmllbGRzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogdHJ1ZSB9KSk7XG4gICAgYXdhaXQgYXBpLnVwZGF0ZVVzZXJQcm9maWxlKHBheWxvYWQpO1xuICAgIGF3YWl0IGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IGZhbHNlIH0pKTtcbiAgfTtcbn1cbiIsImltcG9ydCB1c2VFZmZlY3RPbmNlIGZyb20gJy4vdXNlRWZmZWN0T25jZSc7XG52YXIgdXNlTW91bnQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICB1c2VFZmZlY3RPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm4oKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VNb3VudDtcbiJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJGZWF0dXJlU3RhdGUiLCJzZWxlY3RvcnMiLCJjb25maWciLCJCdXR0b24iLCJGaWVsZCIsIkZpZWxkU2V0IiwiRm9ybSIsIkljb24iLCJMYWJlbCIsIlJhZGlvQnV0dG9uR3JvdXAiLCJTZWxlY3QiLCJzdHlsZXNGYWN0b3J5IiwiVGltZVpvbmVQaWNrZXIiLCJUb29sdGlwIiwiV2Vla1N0YXJ0UGlja2VyIiwiRmVhdHVyZUJhZGdlIiwiUHJlZmVyZW5jZXNTZXJ2aWNlIiwiYmFja2VuZFNydiIsInRoZW1lcyIsInZhbHVlIiwibGFiZWwiLCJpZCIsImxhbmd1YWdlcyIsImkxOG5GbGFnIiwiQm9vbGVhbiIsImZlYXR1cmVUb2dnbGVzIiwiaW50ZXJuYXRpb25hbGl6YXRpb24iLCJTaGFyZWRQcmVmZXJlbmNlcyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJob21lRGFzaGJvYXJkSWQiLCJ0aGVtZSIsInRpbWV6b25lIiwid2Vla1N0YXJ0IiwibG9jYWxlIiwicXVlcnlIaXN0b3J5Iiwic3RhdGUiLCJzZXJ2aWNlIiwidXBkYXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzZXRTdGF0ZSIsImRhc2hib2FyZElkIiwiZGFzaGJvYXJkIiwiZm9sZGVyVGl0bGUiLCJ0aXRsZSIsInJlc291cmNlVXJpIiwiZGFzaGJvYXJkcyIsImhvbWVUYWIiLCJjb21wb25lbnREaWRNb3VudCIsInByZWZzIiwibG9hZCIsInNlYXJjaCIsInN0YXJyZWQiLCJkZWZhdWx0RGFzaGJvYXJkSGl0IiwidGFncyIsInR5cGUiLCJ1aWQiLCJ1cmkiLCJ1cmwiLCJmb2xkZXJJZCIsImZvbGRlclVpZCIsImZvbGRlclVybCIsImlzU3RhcnJlZCIsInNsdWciLCJpdGVtcyIsImZpbmQiLCJkIiwibWlzc2luZyIsImRhc2hib2FyZElkcyIsImxlbmd0aCIsInB1c2giLCJyZW5kZXIiLCJkaXNhYmxlZCIsInN0eWxlcyIsImdldFN0eWxlcyIsImhvbWVEYXNoYm9hcmRUb29sdGlwIiwib25TdWJtaXRGb3JtIiwiaXRlbSIsIm9uVGhlbWVDaGFuZ2VkIiwibGFiZWxUZXh0IiwiaSIsImdldEZ1bGxEYXNoTmFtZSIsIm9uSG9tZURhc2hib2FyZENoYW5nZWQiLCJjb21wb25lbnRzIiwiY29udGFpbmVyVjIiLCJvblRpbWVab25lQ2hhbmdlZCIsIm9uV2Vla1N0YXJ0Q2hhbmdlZCIsImFscGhhIiwibGFuZyIsIm9uTG9jYWxlQ2hhbmdlZCIsIlVzZXJQcm9maWxlIiwicHJlZmVyZW5jZXNTYXZlQnV0dG9uIiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwiVXNlck9yZ2FuaXphdGlvbnMiLCJpc0xvYWRpbmciLCJvcmdzIiwidXNlciIsIm9yZ3NUYWJsZSIsIm1hcCIsIm9yZyIsImluZGV4IiwibmFtZSIsInJvbGUiLCJvcmdJZCIsInNldFVzZXJPcmciLCJJbnB1dCIsImRpc2FibGVMb2dpbkZvcm0iLCJVc2VyUHJvZmlsZUVkaXRGb3JtIiwiaXNTYXZpbmdVc2VyIiwidXBkYXRlUHJvZmlsZSIsIm9uU3VibWl0UHJvZmlsZVVwZGF0ZSIsImRhdGEiLCJyZWdpc3RlciIsImVycm9ycyIsInJlcXVpcmVkIiwiZW1haWwiLCJsb2dpbiIsInByb2ZpbGVTYXZlQnV0dG9uIiwiSW5wdXRTdWZmaXgiLCJjb25uZWN0IiwidXNlTW91bnQiLCJWZXJ0aWNhbEdyb3VwIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiVXNlclNlc3Npb25zIiwiVXNlclRlYW1zIiwiY2hhbmdlVXNlck9yZyIsImluaXRVc2VyUHJvZmlsZVBhZ2UiLCJyZXZva2VVc2VyU2Vzc2lvbiIsInVwZGF0ZVVzZXJQcm9maWxlIiwibWFwU3RhdGVUb1Byb3BzIiwidXNlclN0YXRlIiwidGVhbXMiLCJzZXNzaW9ucyIsInRlYW1zQXJlTG9hZGluZyIsIm9yZ3NBcmVMb2FkaW5nIiwic2Vzc2lvbnNBcmVMb2FkaW5nIiwiaXNVcGRhdGluZyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJVc2VyUHJvZmlsZUVkaXRQYWdlIiwid2l0aEkxOG4iLCJpMThuIiwic2Vzc2lvbnNUYWJsZSIsInNlc3Npb24iLCJpc0FjdGl2ZSIsInNlZW5BdCIsImRhdGUiLCJjcmVhdGVkQXQiLCJkYXRlU3R5bGUiLCJjbGllbnRJcCIsImJyb3dzZXIiLCJvcyIsIm9zVmVyc2lvbiIsInRlYW0iLCJhdmF0YXJVcmwiLCJtZW1iZXJDb3VudCIsImFwaSIsImluaXRMb2FkT3JncyIsImluaXRMb2FkU2Vzc2lvbnMiLCJpbml0TG9hZFRlYW1zIiwib3Jnc0xvYWRlZCIsInNlc3Npb25zTG9hZGVkIiwic2V0VXBkYXRpbmciLCJ0ZWFtc0xvYWRlZCIsInVzZXJMb2FkZWQiLCJ1c2VyU2Vzc2lvblJldm9rZWQiLCJjaGFuZ2VQYXNzd29yZCIsInBheWxvYWQiLCJkaXNwYXRjaCIsInVwZGF0aW5nIiwibG9hZFVzZXIiLCJsb2FkVGVhbXMiLCJsb2FkT3JncyIsImxvYWRTZXNzaW9ucyIsInRva2VuSWQiLCJocmVmIiwiYXBwU3ViVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==