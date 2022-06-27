"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TeamPages"],{

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

/***/ "./public/app/core/components/Upgrade/UpgradeBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradeBox": () => (/* binding */ UpgradeBox),
/* harmony export */   "UpgradeContent": () => (/* binding */ UpgradeContent),
/* harmony export */   "UpgradeContentVertical": () => (/* binding */ UpgradeContentVertical)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["featureName", "className", "children", "text", "featureId", "eventVariant", "size"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const UpgradeBox = _ref => {
  let {
    featureName,
    className,
    text,
    featureId,
    eventVariant = '',
    size = 'md'
  } = _ref,
      htmlProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(theme => getUpgradeBoxStyles(theme, size));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_grafana_runtime_src__WEBPACK_IMPORTED_MODULE_2__.reportExperimentView)(`feature-highlights-${featureId}`, 'test', eventVariant);
  }, [eventVariant, featureId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", Object.assign({
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.box, className)
  }, htmlProps, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      name: 'rocket',
      className: styles.icon
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: styles.text,
        children: ["You\u2019ve discovered a Pro feature! ", text || `Get the Grafana Pro plan to access ${featureName}.`]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        variant: "secondary",
        size: size,
        className: styles.button,
        href: "https://grafana.com/profile/org/subscription",
        target: "__blank",
        rel: "noopener noreferrer",
        children: "Upgrade"
      })]
    })]
  }));
};

const getUpgradeBoxStyles = (theme, size) => {
  const borderRadius = theme.shape.borderRadius(2);
  const fontBase = size === 'md' ? 'body' : 'bodySmall';
  return {
    box: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      position: relative;
      border-radius: ${borderRadius};
      background: ${theme.colors.success.transparent};
      padding: ${theme.spacing(2)};
      color: ${theme.colors.success.text};
      font-size: ${theme.typography[fontBase].fontSize};
      text-align: left;
      line-height: 16px;
      margin: ${theme.spacing(0, 'auto', 3, 'auto')};
      max-width: ${theme.breakpoints.values.xxl}px;
      width: 100%;
    `,
    inner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    `,
    text: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0;
    `,
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.success.main};
      font-weight: ${theme.typography.fontWeightLight};
      color: white;

      &:hover {
        background-color: ${theme.colors.success.main};
      }

      &:focus-visible {
        box-shadow: none;
        color: ${theme.colors.text.primary};
        outline: 2px solid ${theme.colors.primary.main};
      }
    `,
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(0.5, 1, 0.5, 0.5)};
    `
  };
};

const UpgradeContent = ({
  listItems,
  image,
  featureUrl,
  featureName,
  description,
  caption,
  action
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getUpgradeContentStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
        className: styles.title,
        children: ["Get started with ", featureName]
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
        className: styles.description,
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
        className: styles.list,
        children: listItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: 'check',
            size: 'xl',
            className: styles.icon
          }), " ", item]
        }, index))
      }), (action === null || action === void 0 ? void 0 : action.link) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        variant: 'primary',
        href: action.link,
        children: action.text
      }), (action === null || action === void 0 ? void 0 : action.onClick) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        variant: 'primary',
        onClick: action.onClick,
        children: action.text
      }), featureUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        fill: 'text',
        href: featureUrl,
        className: styles.link,
        target: "_blank",
        rel: "noreferrer noopener",
        children: "Learn more"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.media,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: getImgUrl(image),
        alt: 'Feature screenshot'
      }), caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: styles.caption,
        children: caption
      })]
    })]
  });
};

const getUpgradeContentStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 45%;
      margin-right: ${theme.spacing(4)};
    `,
    media: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 55%;

      img {
        width: 100%;
      }
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.maxContrast};
    `,
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.primary};
      font-weight: ${theme.typography.fontWeightLight};
    `,
    list: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      list-style: none;
      margin: ${theme.spacing(4, 0, 2, 0)};

      li {
        display: flex;
        align-items: flex-start;
        color: ${theme.colors.text.primary};
        padding: ${theme.spacing(1, 0)};
      }
    `,
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.success.main};
      margin-right: ${theme.spacing(1)};
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(2)};
    `,
    caption: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: ${theme.typography.fontWeightLight};
      margin: ${theme.spacing(1, 0, 0)};
    `
  };
};

const UpgradeContentVertical = ({
  featureName,
  description,
  featureUrl,
  image
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getContentVerticalStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
      className: styles.title,
      children: ["Get started with ", featureName]
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
      className: styles.description,
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
      fill: 'text',
      href: featureUrl,
      target: "_blank",
      rel: "noreferrer noopener",
      children: "Learn more"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.media,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: getImgUrl(image),
        alt: 'Feature screenshot'
      })
    })]
  });
};

const getContentVerticalStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow: auto;
      height: 100%;
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.maxContrast};
    `,
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.primary};
      font-weight: ${theme.typography.fontWeightLight};
    `,
    media: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
      margin-top: ${theme.spacing(2)};

      img {
        width: 100%;
      }
    `
  };
};

const getImgUrl = urlOrId => {
  if (urlOrId.startsWith('http')) {
    return urlOrId;
  }

  return '/public/img/enterprise/highlights/' + urlOrId;
};

/***/ }),

/***/ "./public/app/core/components/WithFeatureToggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithFeatureToggle": () => (/* binding */ WithFeatureToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const WithFeatureToggle = ({
  featureToggle,
  children
}) => {
  if (featureToggle === true) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: children
    });
  }

  return null;
};

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

/***/ "./public/app/features/teams/TeamGroupSync.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamGroupSync": () => (/* binding */ TeamGroupSync),
/* harmony export */   "TeamSyncUpgradeContent": () => (/* binding */ TeamSyncUpgradeContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Upgrade/UpgradeBox.tsx");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/admin/utils.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _UpgradeBox, _h, _Tooltip, _div, _Icon2, _th;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function mapStateToProps(state) {
  return {
    groups: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_9__.getTeamGroups)(state.team)
  };
}

const mapDispatchToProps = {
  loadTeamGroups: _state_actions__WEBPACK_IMPORTED_MODULE_8__.loadTeamGroups,
  addTeamGroup: _state_actions__WEBPACK_IMPORTED_MODULE_8__.addTeamGroup,
  removeTeamGroup: _state_actions__WEBPACK_IMPORTED_MODULE_8__.removeTeamGroup
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const headerTooltip = `Sync LDAP, OAuth or SAML groups with your Grafana teams.`;
class TeamGroupSync extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onToggleAdding", () => {
      this.setState({
        isAdding: !this.state.isAdding
      });
    });

    _defineProperty(this, "onNewGroupIdChanged", event => {
      this.setState({
        newGroupId: event.target.value
      });
    });

    _defineProperty(this, "onAddGroup", event => {
      event.preventDefault();
      this.props.addTeamGroup(this.state.newGroupId);
      this.setState({
        isAdding: false,
        newGroupId: ''
      });
    });

    _defineProperty(this, "onRemoveGroup", group => {
      this.props.removeTeamGroup(group.groupId);
    });

    this.state = {
      isAdding: false,
      newGroupId: ''
    };
  }

  componentDidMount() {
    this.fetchTeamGroups();
  }

  async fetchTeamGroups() {
    await this.props.loadTeamGroups();
  }

  isNewGroupValid() {
    return this.state.newGroupId.length > 1;
  }

  renderGroup(group) {
    const {
      isReadOnly
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
        children: group.groupId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
        style: {
          width: '1%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          size: "sm",
          variant: "destructive",
          onClick: () => this.onRemoveGroup(group),
          disabled: isReadOnly,
          "aria-label": `Remove group ${group.groupId}`,
          children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "times"
          }))
        })
      })]
    }, group.groupId);
  }

  render() {
    const {
      isAdding,
      newGroupId
    } = this.state;
    const {
      groups,
      isReadOnly
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      children: [(0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_7__.highlightTrial)() && (_UpgradeBox || (_UpgradeBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__.UpgradeBox, {
        featureId: 'team-sync',
        eventVariant: 'trial',
        featureName: 'team sync',
        text: 'Add a group to enable team sync for free during your trial of Grafana Pro.'
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "page-action-bar",
        children: [(!(0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_7__.highlightTrial)() || groups.length > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
            className: "page-sub-heading",
            children: "External group sync"
          })), _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
            placement: "auto",
            content: headerTooltip,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              className: "icon--has-hover page-sub-heading-icon",
              name: "question-circle"
            })
          }))]
        }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "page-action-bar__spacer"
        })), groups.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "pull-right",
          onClick: this.onToggleAdding,
          disabled: isReadOnly,
          children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "plus"
          })), " Add group"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__.SlideDown, {
        in: isAdding,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "cta-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__.CloseButton, {
            onClick: this.onToggleAdding
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("form", {
            onSubmit: this.onAddGroup,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
                label: 'Add External Group',
                tooltip: "LDAP Group Example: cn=users,ou=groups,dc=grafana,dc=org.",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
                  type: "text",
                  id: 'add-external-group',
                  placeholder: "",
                  value: newGroupId,
                  onChange: this.onNewGroupIdChanged,
                  disabled: isReadOnly
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                disabled: isReadOnly || !this.isNewGroupValid(),
                style: {
                  marginLeft: 4
                },
                children: "Add group"
              })]
            })
          })]
        })
      }), groups.length === 0 && !isAdding && ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_7__.highlightTrial)() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TeamSyncUpgradeContent, {
        action: {
          onClick: this.onToggleAdding,
          text: 'Add group'
        }
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: this.onToggleAdding,
        buttonIcon: "users-alt",
        title: "There are no external groups to sync with",
        buttonTitle: "Add group",
        proTip: headerTooltip,
        proTipLinkTitle: "Learn more",
        proTipLink: "https://docs.grafana.org/auth/enhanced_ldap/",
        proTipTarget: "_blank",
        buttonDisabled: isReadOnly
      })), groups.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("table", {
          className: "filter-table filter-table--hover form-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
              children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                children: "External Group ID"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("tbody", {
            children: groups.map(group => this.renderGroup(group))
          })]
        })
      })]
    });
  }

}
const TeamSyncUpgradeContent = ({
  action
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__.UpgradeContent, {
    action: action,
    listItems: ['Stop managing user access in two places - assign users to groups in SAML, LDAP or Oauth, and manage access at a Team level in Grafana', 'Update users’ permissions immediately when you add or remove them from an LDAP group, with no need for them to sign out and back in'],
    image: `team-sync-${theme.isLight ? 'light' : 'dark'}.png`,
    featureName: 'team sync',
    featureUrl: 'https://grafana.com/docs/grafana/latest/enterprise/team-sync',
    description: 'Team Sync makes it easier for you to manage users’ access in Grafana, by immediately updating each user’s Grafana teams and permissions based on their single sign-on group membership, instead of when users sign in.'
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(TeamGroupSync));

/***/ }),

/***/ "./public/app/features/teams/TeamMemberRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamMemberRow": () => (/* binding */ TeamMemberRow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/WithFeatureToggle.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const mapDispatchToProps = {
  removeTeamMember: _state_actions__WEBPACK_IMPORTED_MODULE_6__.removeTeamMember,
  updateTeamMember: _state_actions__WEBPACK_IMPORTED_MODULE_6__.updateTeamMember
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps);
class TeamMemberRow extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onPermissionChange", (item, member) => {
      const permission = item.value;
      const updatedTeamMember = Object.assign({}, member, {
        permission: permission
      });
      this.props.updateTeamMember(updatedTeamMember);
    });

    this.renderLabels = this.renderLabels.bind(this);
    this.renderPermissions = this.renderPermissions.bind(this);
  }

  onRemoveMember(member) {
    this.props.removeTeamMember(member.userId);
  }

  renderPermissions(member) {
    const {
      editorsCanAdmin,
      signedInUserIsTeamAdmin
    } = this.props;
    const value = app_types__WEBPACK_IMPORTED_MODULE_5__.teamsPermissionLevels.find(dp => dp.value === member.permission);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_4__.WithFeatureToggle, {
      featureToggle: editorsCanAdmin,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        className: "width-5 team-permissions",
        children: signedInUserIsTeamAdmin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
          isSearchable: false,
          options: app_types__WEBPACK_IMPORTED_MODULE_5__.teamsPermissionLevels,
          onChange: item => this.onPermissionChange(item, member),
          value: value,
          width: 32,
          "aria-label": `Select member's ${member.name} permission level`
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          children: value.label
        })
      })
    });
  }

  renderLabels(labels) {
    if (!labels) {
      return _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {}));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      children: labels.map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_3__.TagBadge, {
        label: label,
        removeIcon: false,
        count: 0,
        onClick: () => {}
      }, label))
    });
  }

  render() {
    const {
      member,
      syncEnabled,
      signedInUserIsTeamAdmin
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        className: "width-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          alt: `Avatar for team member "${member.name}"`,
          className: "filter-table__avatar",
          src: member.avatarUrl
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        children: member.login
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        children: member.email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        children: member.name
      }), this.renderPermissions(member), syncEnabled && this.renderLabels(member.labels), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        className: "text-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DeleteButton, {
          "aria-label": `Remove team member ${member.name}`,
          size: "sm",
          disabled: !signedInUserIsTeamAdmin,
          onConfirm: () => this.onRemoveMember(member)
        })
      })]
    }, member.userId);
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamMemberRow));

/***/ }),

/***/ "./public/app/features/teams/TeamMembers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamMembers": () => (/* binding */ TeamMembers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var app_core_components_Select_UserPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Select/UserPicker.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/WithFeatureToggle.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _TeamMemberRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/teams/TeamMemberRow.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td, _Label, _th, _th2, _th3, _th4, _th5, _th6;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function mapStateToProps(state) {
  return {
    searchMemberQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getSearchMemberQuery)(state.team),
    editorsCanAdmin: app_core_config__WEBPACK_IMPORTED_MODULE_8__.config.editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  addTeamMember: _state_actions__WEBPACK_IMPORTED_MODULE_11__.addTeamMember,
  setSearchMemberQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setSearchMemberQuery
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class TeamMembers extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchMemberQuery(value);
    });

    _defineProperty(this, "onToggleAdding", () => {
      this.setState({
        isAdding: !this.state.isAdding
      });
    });

    _defineProperty(this, "onUserSelected", user => {
      this.setState({
        newTeamMember: user
      });
    });

    _defineProperty(this, "onAddUserToTeam", async () => {
      this.props.addTeamMember(this.state.newTeamMember.id);
      this.setState({
        newTeamMember: null
      });
    });

    this.state = {
      isAdding: false,
      newTeamMember: null
    };
  }

  renderLabels(labels) {
    if (!labels) {
      return _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {}));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
      children: labels.map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_6__.TagBadge, {
        label: label,
        removeIcon: false,
        count: 0,
        onClick: () => {}
      }, label))
    });
  }

  render() {
    const {
      isAdding
    } = this.state;
    const {
      searchMemberQuery,
      members,
      syncEnabled,
      editorsCanAdmin,
      signedInUser
    } = this.props;
    const isTeamAdmin = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.isSignedInUserTeamAdmin)({
      members,
      editorsCanAdmin,
      signedInUser
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
            placeholder: "Search members",
            value: searchMemberQuery,
            onChange: this.onSearchQueryChange
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "pull-right",
          onClick: this.onToggleAdding,
          disabled: isAdding || !isTeamAdmin,
          children: "Add member"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__.SlideDown, {
        in: isAdding,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "cta-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__.CloseButton, {
            "aria-label": "Close 'Add team member' dialogue",
            onClick: this.onToggleAdding
          }), _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
            htmlFor: "user-picker",
            children: "Add team member"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "gf-form-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Select_UserPicker__WEBPACK_IMPORTED_MODULE_5__.UserPicker, {
              inputId: "user-picker",
              onSelected: this.onUserSelected,
              className: "min-width-30"
            }), this.state.newTeamMember && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              onClick: this.onAddUserToTeam,
              children: "Add to team"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("table", {
          className: "filter-table filter-table--hover form-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
              children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                children: "Login"
              })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                children: "Email"
              })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                children: "Name"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_7__.WithFeatureToggle, {
                featureToggle: editorsCanAdmin,
                children: _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Permission"
                }))
              }), syncEnabled && (_th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {}))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("tbody", {
            children: members && members.map(member => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeamMemberRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
              member: member,
              syncEnabled: syncEnabled,
              editorsCanAdmin: editorsCanAdmin,
              signedInUserIsTeamAdmin: isTeamAdmin
            }, member.userId))
          })]
        })
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamMembers));

/***/ }),

/***/ "./public/app/features/teams/TeamPages.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamPages": () => (/* binding */ TeamPages),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Upgrade/UpgradeBox.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _TeamGroupSync__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/teams/TeamGroupSync.tsx");
/* harmony import */ var _TeamMembers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/teams/TeamMembers.tsx");
/* harmony import */ var _TeamPermissions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/teams/TeamPermissions.tsx");
/* harmony import */ var _TeamSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/teams/TeamSettings.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _UpgradeBox, _TeamSyncUpgradeConte;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var PageTypes;

(function (PageTypes) {
  PageTypes["Members"] = "members";
  PageTypes["Settings"] = "settings";
  PageTypes["GroupSync"] = "groupsync";
})(PageTypes || (PageTypes = {}));

function mapStateToProps(state, props) {
  var _props$match$params$p;

  const teamId = parseInt(props.match.params.id, 10);
  const team = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_17__.getTeam)(state.team, teamId);
  let defaultPage = 'members';

  if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.accessControlEnabled()) {
    // With RBAC the settings page will always be available
    if (!team || !app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
      defaultPage = 'settings';
    }
  }

  const pageName = (_props$match$params$p = props.match.params.page) !== null && _props$match$params$p !== void 0 ? _props$match$params$p : defaultPage;
  const teamLoadingNav = (0,_state_navModel__WEBPACK_IMPORTED_MODULE_16__.getTeamLoadingNav)(pageName);
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__.getNavModel)(state.navIndex, `team-${pageName}-${teamId}`, teamLoadingNav);
  const members = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_17__.getTeamMembers)(state.team);
  return {
    navModel,
    teamId: teamId,
    pageName: pageName,
    team,
    members,
    editorsCanAdmin: app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  loadTeam: _state_actions__WEBPACK_IMPORTED_MODULE_15__.loadTeam,
  loadTeamMembers: _state_actions__WEBPACK_IMPORTED_MODULE_15__.loadTeamMembers
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
class TeamPages extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "textsAreEqual", (text1, text2) => {
      if (!text1 && !text2) {
        return true;
      }

      if (!text1 || !text2) {
        return false;
      }

      return text1.toLocaleLowerCase() === text2.toLocaleLowerCase();
    });

    _defineProperty(this, "hideTabsFromNonTeamAdmin", (navModel, isSignedInUserTeamAdmin) => {
      if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.accessControlEnabled()) {
        return navModel;
      }

      if (!isSignedInUserTeamAdmin && navModel.main && navModel.main.children) {
        navModel.main.children.filter(navItem => !this.textsAreEqual(navItem.text, PageTypes.Members)).map(navItem => {
          navItem.hideFromTabs = true;
        });
      }

      return navModel;
    });

    this.state = {
      isLoading: false,
      isSyncEnabled: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.featureEnabled)('teamsync')
    };
  }

  async componentDidMount() {
    await this.fetchTeam();
  }

  async fetchTeam() {
    const {
      loadTeam,
      teamId
    } = this.props;
    this.setState({
      isLoading: true
    });
    const team = await loadTeam(teamId); // With accesscontrol, the TeamPermissions will fetch team members

    if (!app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.accessControlEnabled()) {
      await this.props.loadTeamMembers();
    }

    this.setState({
      isLoading: false
    });
    return team;
  }

  getCurrentPage() {
    const pages = ['members', 'settings', 'groupsync'];
    const currentPage = this.props.pageName;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(pages, currentPage) ? currentPage : pages[0];
  }

  renderPage(isSignedInUserTeamAdmin) {
    const {
      isSyncEnabled
    } = this.state;
    const {
      members,
      team
    } = this.props;
    const currentPage = this.getCurrentPage();
    const canReadTeam = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsRead, team, isSignedInUserTeamAdmin);
    const canReadTeamPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsPermissionsRead, team, isSignedInUserTeamAdmin);
    const canWriteTeamPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsPermissionsWrite, team, isSignedInUserTeamAdmin);

    switch (currentPage) {
      case PageTypes.Members:
        if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.accessControlEnabled()) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamPermissions__WEBPACK_IMPORTED_MODULE_13__["default"], {
            team: team
          });
        } else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamMembers__WEBPACK_IMPORTED_MODULE_12__["default"], {
            syncEnabled: isSyncEnabled,
            members: members
          });
        }

      case PageTypes.Settings:
        return canReadTeam && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamSettings__WEBPACK_IMPORTED_MODULE_14__["default"], {
          team: team
        });

      case PageTypes.GroupSync:
        if (isSyncEnabled) {
          if (canReadTeamPermissions) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamGroupSync__WEBPACK_IMPORTED_MODULE_11__["default"], {
              isReadOnly: !canWriteTeamPermissions
            });
          }
        } else if (app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].featureToggles.featureHighlights) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
            children: [_UpgradeBox || (_UpgradeBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__.UpgradeBox, {
              featureName: 'team sync',
              featureId: 'team-sync'
            })), _TeamSyncUpgradeConte || (_TeamSyncUpgradeConte = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamGroupSync__WEBPACK_IMPORTED_MODULE_11__.TeamSyncUpgradeContent, {}))]
          });
        }

    }

    return null;
  }

  render() {
    const {
      team,
      navModel,
      members,
      editorsCanAdmin,
      signedInUser
    } = this.props;
    const isTeamAdmin = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_17__.isSignedInUserTeamAdmin)({
      members,
      editorsCanAdmin,
      signedInUser
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      navModel: this.hideTabsFromNonTeamAdmin(navModel, isTeamAdmin),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
        isLoading: this.state.isLoading,
        children: team && Object.keys(team).length !== 0 && this.renderPage(isTeamAdmin)
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.withTheme2)(TeamPages)));

/***/ }),

/***/ "./public/app/features/teams/TeamPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/AccessControl/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






// TeamPermissions component replaces TeamMembers component when the accesscontrol feature flag is set
const TeamPermissions = props => {
  const canSetPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermissionInMetadata(_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.ActionTeamsPermissionsWrite, props.team);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_1__.Permissions, {
    title: "Members",
    addPermissionTitle: "Add member",
    buttonLabel: "Add member",
    resource: "teams",
    resourceId: props.team.id,
    canSetPermissions: canSetPermissions
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamPermissions);

/***/ }),

/***/ "./public/app/features/teams/TeamSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamSettings": () => (/* binding */ TeamSettings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const mapDispatchToProps = {
  updateTeam: _state_actions__WEBPACK_IMPORTED_MODULE_6__.updateTeam
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps);
const TeamSettings = ({
  team,
  updateTeam
}) => {
  const canWriteTeamSettings = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsWrite, team);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
      label: "Team settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        defaultValues: Object.assign({}, team),
        onSubmit: formTeam => {
          updateTeam(formTeam.name, formTeam.email);
        },
        disabled: !canWriteTeamSettings,
        children: ({
          register,
          errors
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Name",
            disabled: !canWriteTeamSettings,
            required: true,
            invalid: !!errors.name,
            error: "Name is required",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('name', {
              required: true
            }), {
              id: "name-input"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Email",
            description: "This is optional and is primarily used to set the team profile avatar (via gravatar service).",
            disabled: !canWriteTeamSettings,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('email'), {
              placeholder: "team@email.com",
              type: "email",
              id: "email-input"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            disabled: !canWriteTeamSettings,
            children: "Update"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_3__.SharedPreferences, {
      resourceUri: `teams/${team.id}`,
      disabled: !canWriteTeamSettings
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamSettings));

/***/ }),

/***/ "./public/app/features/teams/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTeamGroup": () => (/* binding */ addTeamGroup),
/* harmony export */   "addTeamMember": () => (/* binding */ addTeamMember),
/* harmony export */   "deleteTeam": () => (/* binding */ deleteTeam),
/* harmony export */   "loadTeam": () => (/* binding */ loadTeam),
/* harmony export */   "loadTeamGroups": () => (/* binding */ loadTeamGroups),
/* harmony export */   "loadTeamMembers": () => (/* binding */ loadTeamMembers),
/* harmony export */   "loadTeams": () => (/* binding */ loadTeams),
/* harmony export */   "removeTeamGroup": () => (/* binding */ removeTeamGroup),
/* harmony export */   "removeTeamMember": () => (/* binding */ removeTeamMember),
/* harmony export */   "updateTeam": () => (/* binding */ updateTeam),
/* harmony export */   "updateTeamMember": () => (/* binding */ updateTeamMember)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");







function loadTeams() {
  return async dispatch => {
    // Early return if the user cannot list teams
    if (!app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRead)) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamsLoaded)([]));
      return;
    }

    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/teams/search', (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__.accessControlQueryParam)({
      perpage: 1000,
      page: 1
    }));
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamsLoaded)(response.teams));
  };
}
function loadTeam(id) {
  return async dispatch => {
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${id}`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__.accessControlQueryParam)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamLoaded)(response));
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_5__.buildNavModel)(response)));
  };
}
function loadTeamMembers() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/members`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamMembersLoaded)(response));
  };
}
function addTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/members`, {
      userId: id
    });
    dispatch(loadTeamMembers());
  };
}
function removeTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/members/${id}`);
    dispatch(loadTeamMembers());
  };
}
function updateTeam(name, email) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${team.id}`, {
      name,
      email
    });
    dispatch(loadTeam(team.id));
  };
}
function loadTeamGroups() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/groups`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamGroupsLoaded)(response));
  };
}
function addTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/groups`, {
      groupId: groupId
    });
    dispatch(loadTeamGroups());
  };
}
function removeTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/groups/${encodeURIComponent(groupId)}`);
    dispatch(loadTeamGroups());
  };
}
function deleteTeam(id) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${id}`); // Update users permissions in case they lost teams.read with the deletion

    await app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.fetchUserPermissions();
    dispatch(loadTeams());
  };
}
function updateTeamMember(member) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${member.teamId}/members/${member.userId}`, {
      permission: member.permission
    });
    dispatch(loadTeamMembers());
  };
}

/***/ }),

/***/ "./public/app/features/teams/state/navModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildNavModel": () => (/* binding */ buildNavModel),
/* harmony export */   "getTeamLoadingNav": () => (/* binding */ getTeamLoadingNav)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Upgrade/ProBadge.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/admin/utils.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");






const loadingTeam = {
  avatarUrl: 'public/img/user_profile.png',
  id: 1,
  name: 'Loading',
  email: 'loading',
  memberCount: 0,
  permission: app_types__WEBPACK_IMPORTED_MODULE_5__.TeamPermissionLevel.Member
};
function buildNavModel(team) {
  const navModel = {
    img: team.avatarUrl,
    id: 'team-' + team.id,
    subTitle: 'Manage members and settings',
    url: '',
    text: team.name,
    breadcrumbs: [{
      title: 'Teams',
      url: 'org/teams'
    }],
    children: [// With RBAC this tab will always be available (but not always editable)
    // With Legacy it will be hidden by hideTabsFromNonTeamAdmin should the user not be allowed to see it
    {
      active: false,
      icon: 'sliders-v-alt',
      id: `team-settings-${team.id}`,
      text: 'Settings',
      url: `org/teams/edit/${team.id}/settings`
    }]
  }; // While team is loading we leave the members tab
  // With RBAC the Members tab is available when user has ActionTeamsPermissionsRead for this team
  // With Legacy it will always be present

  if (team === loadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
    navModel.children.unshift({
      active: false,
      icon: 'users-alt',
      id: `team-members-${team.id}`,
      text: 'Members',
      url: `org/teams/edit/${team.id}/members`
    });
  }

  const teamGroupSync = {
    active: false,
    icon: 'sync',
    id: `team-groupsync-${team.id}`,
    text: 'External group sync',
    url: `org/teams/edit/${team.id}/groupsync`
  };
  const isLoadingTeam = team === loadingTeam;

  if ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_4__.highlightTrial)()) {
    teamGroupSync.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__.ProBadge)({
      experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge',
      eventVariant: 'trial'
    });
  } // With both Legacy and RBAC the tab is protected being featureEnabled
  // While team is loading we leave the teamsync tab
  // With RBAC the External Group Sync tab is available when user has ActionTeamsPermissionsRead for this team


  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.featureEnabled)('teamsync')) {
    if (isLoadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
      navModel.children.push(teamGroupSync);
    }
  } else if (app_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].featureToggles.featureHighlights) {
    navModel.children.push(Object.assign({}, teamGroupSync, {
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__.ProBadge)({
        experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge'
      })
    }));
  }

  return navModel;
}
function getTeamLoadingNav(pageName) {
  const main = buildNavModel(loadingTeam);
  let node; // find active page

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

/***/ }),

/***/ "./public/app/features/teams/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSearchMemberQuery": () => (/* binding */ getSearchMemberQuery),
/* harmony export */   "getSearchQuery": () => (/* binding */ getSearchQuery),
/* harmony export */   "getTeam": () => (/* binding */ getTeam),
/* harmony export */   "getTeamGroups": () => (/* binding */ getTeamGroups),
/* harmony export */   "getTeamMembers": () => (/* binding */ getTeamMembers),
/* harmony export */   "getTeams": () => (/* binding */ getTeams),
/* harmony export */   "getTeamsCount": () => (/* binding */ getTeamsCount),
/* harmony export */   "getTeamsSearchPage": () => (/* binding */ getTeamsSearchPage),
/* harmony export */   "isPermissionTeamAdmin": () => (/* binding */ isPermissionTeamAdmin),
/* harmony export */   "isSignedInUserTeamAdmin": () => (/* binding */ isSignedInUserTeamAdmin)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");

const getSearchQuery = state => state.searchQuery;
const getSearchMemberQuery = state => state.searchMemberQuery;
const getTeamGroups = state => state.groups;
const getTeamsCount = state => state.teams.length;
const getTeamsSearchPage = state => state.searchPage;
const getTeam = (state, currentTeamId) => {
  if (state.team.id === parseInt(currentTeamId, 10)) {
    return state.team;
  }

  return null;
};
const getTeams = state => {
  const regex = RegExp(state.searchQuery, 'i');
  return state.teams.filter(team => {
    return regex.test(team.name);
  });
};
const getTeamMembers = state => {
  const regex = RegExp(state.searchMemberQuery, 'i');
  return state.members.filter(member => {
    return regex.test(member.login) || regex.test(member.email) || regex.test(member.name);
  });
};
const isSignedInUserTeamAdmin = config => {
  const {
    members,
    signedInUser,
    editorsCanAdmin
  } = config;
  const userInMembers = members.find(m => m.userId === signedInUser.id);
  const permission = userInMembers ? userInMembers.permission : app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Member;
  return isPermissionTeamAdmin({
    permission,
    signedInUser,
    editorsCanAdmin
  });
};
const isPermissionTeamAdmin = config => {
  const {
    permission,
    signedInUser,
    editorsCanAdmin
  } = config;
  const isAdmin = signedInUser.isGrafanaAdmin || signedInUser.orgRole === app_types__WEBPACK_IMPORTED_MODULE_0__.OrgRole.Admin;
  const userIsTeamAdmin = permission === app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Admin;
  const isSignedInUserTeamAdmin = isAdmin || userIsTeamAdmin;
  return isSignedInUserTeamAdmin || !editorsCanAdmin;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UHJlZmVyZW5jZXMvU2hhcmVkUHJlZmVyZW5jZXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1VwZ3JhZGVCb3gudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9XaXRoRmVhdHVyZVRvZ2dsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbUdyb3VwU3luYy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbU1lbWJlclJvdy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbU1lbWJlcnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL1RlYW1QYWdlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbVBlcm1pc3Npb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9UZWFtU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvc3RhdGUvc2VsZWN0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB0LCBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGaWVsZCxcbiAgRmllbGRTZXQsXG4gIEZvcm0sXG4gIEljb24sXG4gIExhYmVsLFxuICBSYWRpb0J1dHRvbkdyb3VwLFxuICBTZWxlY3QsXG4gIHN0eWxlc0ZhY3RvcnksXG4gIFRpbWVab25lUGlja2VyLFxuICBUb29sdGlwLFxuICBXZWVrU3RhcnRQaWNrZXIsXG4gIEZlYXR1cmVCYWRnZSxcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUHJlZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvUHJlZmVyZW5jZXNTZXJ2aWNlJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBEYXNoYm9hcmRTZWFyY2hIaXQsIERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3NlYXJjaC90eXBlcyc7XG5cbmltcG9ydCB7IFVzZXJQcmVmZXJlbmNlc0RUTyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlc291cmNlVXJpOiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgU3RhdGUgPSBVc2VyUHJlZmVyZW5jZXNEVE8gJiB7XG4gIGRhc2hib2FyZHM6IERhc2hib2FyZFNlYXJjaEhpdFtdO1xufTtcblxuY29uc3QgdGhlbWVzOiBTZWxlY3RhYmxlVmFsdWVbXSA9IFtcbiAgeyB2YWx1ZTogJycsIGxhYmVsOiB0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMudGhlbWUuZGVmYXVsdC1sYWJlbCcsIG1lc3NhZ2U6ICdEZWZhdWx0JyB9KSB9LFxuICB7IHZhbHVlOiAnZGFyaycsIGxhYmVsOiB0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMudGhlbWUuZGFyay1sYWJlbCcsIG1lc3NhZ2U6ICdEYXJrJyB9KSB9LFxuICB7IHZhbHVlOiAnbGlnaHQnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmxpZ2h0LWxhYmVsJywgbWVzc2FnZTogJ0xpZ2h0JyB9KSB9LFxuXTtcblxuY29uc3QgbGFuZ3VhZ2VzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBbXG4gIHtcbiAgICB2YWx1ZTogJycsXG4gICAgbGFiZWw6IHQoe1xuICAgICAgaWQ6ICdjb21tb24ubG9jYWxlLmRlZmF1bHQnLFxuICAgICAgbWVzc2FnZTogJ0RlZmF1bHQnLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdlbicsXG4gICAgbGFiZWw6IHQoe1xuICAgICAgaWQ6ICdjb21tb24ubG9jYWxlLmVuJyxcbiAgICAgIG1lc3NhZ2U6ICdFbmdsaXNoJyxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnZXMnLFxuICAgIGxhYmVsOiB0KHtcbiAgICAgIGlkOiAnY29tbW9uLmxvY2FsZS5lcycsXG4gICAgICBtZXNzYWdlOiAnU3BhbmlzaCcsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ2ZyJyxcbiAgICBsYWJlbDogdCh7XG4gICAgICBpZDogJ2NvbW1vbi5sb2NhbGUuZnInLFxuICAgICAgbWVzc2FnZTogJ0ZyZW5jaCcsXG4gICAgfSksXG4gIH0sXG5dO1xuXG5jb25zdCBpMThuRmxhZyA9IEJvb2xlYW4oY29uZmlnLmZlYXR1cmVUb2dnbGVzLmludGVybmF0aW9uYWxpemF0aW9uKTtcblxuZXhwb3J0IGNsYXNzIFNoYXJlZFByZWZlcmVuY2VzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc2VydmljZTogUHJlZmVyZW5jZXNTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc2VydmljZSA9IG5ldyBQcmVmZXJlbmNlc1NlcnZpY2UocHJvcHMucmVzb3VyY2VVcmkpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBob21lRGFzaGJvYXJkSWQ6IDAsXG4gICAgICB0aGVtZTogJycsXG4gICAgICB0aW1lem9uZTogJycsXG4gICAgICB3ZWVrU3RhcnQ6ICcnLFxuICAgICAgbG9jYWxlOiAnJyxcbiAgICAgIGRhc2hib2FyZHM6IFtdLFxuICAgICAgcXVlcnlIaXN0b3J5OiB7IGhvbWVUYWI6ICcnIH0sXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHByZWZzID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmxvYWQoKTtcbiAgICBjb25zdCBkYXNoYm9hcmRzID0gYXdhaXQgYmFja2VuZFNydi5zZWFyY2goeyBzdGFycmVkOiB0cnVlIH0pO1xuICAgIGNvbnN0IGRlZmF1bHREYXNoYm9hcmRIaXQ6IERhc2hib2FyZFNlYXJjaEhpdCA9IHtcbiAgICAgIGlkOiAwLFxuICAgICAgdGl0bGU6ICdEZWZhdWx0JyxcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAgdHlwZTogJycgYXMgRGFzaGJvYXJkU2VhcmNoSXRlbVR5cGUsXG4gICAgICB1aWQ6ICcnLFxuICAgICAgdXJpOiAnJyxcbiAgICAgIHVybDogJycsXG4gICAgICBmb2xkZXJJZDogMCxcbiAgICAgIGZvbGRlclRpdGxlOiAnJyxcbiAgICAgIGZvbGRlclVpZDogJycsXG4gICAgICBmb2xkZXJVcmw6ICcnLFxuICAgICAgaXNTdGFycmVkOiBmYWxzZSxcbiAgICAgIHNsdWc6ICcnLFxuICAgICAgaXRlbXM6IFtdLFxuICAgIH07XG5cbiAgICBpZiAocHJlZnMuaG9tZURhc2hib2FyZElkID4gMCAmJiAhZGFzaGJvYXJkcy5maW5kKChkKSA9PiBkLmlkID09PSBwcmVmcy5ob21lRGFzaGJvYXJkSWQpKSB7XG4gICAgICBjb25zdCBtaXNzaW5nID0gYXdhaXQgYmFja2VuZFNydi5zZWFyY2goeyBkYXNoYm9hcmRJZHM6IFtwcmVmcy5ob21lRGFzaGJvYXJkSWRdIH0pO1xuICAgICAgaWYgKG1pc3NpbmcgJiYgbWlzc2luZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRhc2hib2FyZHMucHVzaChtaXNzaW5nWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhvbWVEYXNoYm9hcmRJZDogcHJlZnMuaG9tZURhc2hib2FyZElkLFxuICAgICAgdGhlbWU6IHByZWZzLnRoZW1lLFxuICAgICAgdGltZXpvbmU6IHByZWZzLnRpbWV6b25lLFxuICAgICAgd2Vla1N0YXJ0OiBwcmVmcy53ZWVrU3RhcnQsXG4gICAgICBsb2NhbGU6IHByZWZzLmxvY2FsZSxcbiAgICAgIGRhc2hib2FyZHM6IFtkZWZhdWx0RGFzaGJvYXJkSGl0LCAuLi5kYXNoYm9hcmRzXSxcbiAgICAgIHF1ZXJ5SGlzdG9yeTogcHJlZnMucXVlcnlIaXN0b3J5LFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXRGb3JtID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgaG9tZURhc2hib2FyZElkLCB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCwgbG9jYWxlLCBxdWVyeUhpc3RvcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZSh7IGhvbWVEYXNoYm9hcmRJZCwgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQsIGxvY2FsZSwgcXVlcnlIaXN0b3J5IH0pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBvblRoZW1lQ2hhbmdlZCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRoZW1lOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvblRpbWVab25lQ2hhbmdlZCA9ICh0aW1lem9uZT86IHN0cmluZykgPT4ge1xuICAgIGlmICghdGltZXpvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWV6b25lOiB0aW1lem9uZSB9KTtcbiAgfTtcblxuICBvbldlZWtTdGFydENoYW5nZWQgPSAod2Vla1N0YXJ0OiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vla1N0YXJ0OiB3ZWVrU3RhcnQgfSk7XG4gIH07XG5cbiAgb25Ib21lRGFzaGJvYXJkQ2hhbmdlZCA9IChkYXNoYm9hcmRJZDogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvbWVEYXNoYm9hcmRJZDogZGFzaGJvYXJkSWQgfSk7XG4gIH07XG5cbiAgb25Mb2NhbGVDaGFuZ2VkID0gKGxvY2FsZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2FsZSB9KTtcbiAgfTtcblxuICBnZXRGdWxsRGFzaE5hbWUgPSAoZGFzaGJvYXJkOiBTZWxlY3RhYmxlVmFsdWU8RGFzaGJvYXJkU2VhcmNoSGl0PikgPT4ge1xuICAgIGlmICh0eXBlb2YgZGFzaGJvYXJkLmZvbGRlclRpdGxlID09PSAndW5kZWZpbmVkJyB8fCBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZGFzaGJvYXJkLnRpdGxlO1xuICAgIH1cbiAgICByZXR1cm4gZGFzaGJvYXJkLmZvbGRlclRpdGxlICsgJyAvICcgKyBkYXNoYm9hcmQudGl0bGU7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQsIGhvbWVEYXNoYm9hcmRJZCwgbG9jYWxlLCBkYXNoYm9hcmRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgICBjb25zdCBob21lRGFzaGJvYXJkVG9vbHRpcCA9IChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgIDxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtdG9vbHRpcFwiPlxuICAgICAgICAgICAgTm90IGZpbmRpbmcgdGhlIGRhc2hib2FyZCB5b3Ugd2FudD8gU3RhciBpdCBmaXJzdCwgdGhlbiBpdCBzaG91bGQgYXBwZWFyIGluIHRoaXMgc2VsZWN0IGJveC5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxJY29uIG5hbWU9XCJpbmZvLWNpcmNsZVwiIC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEZvcm19PlxuICAgICAgICB7KCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGRTZXQgbGFiZWw9ezxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy50aXRsZVwiPlByZWZlcmVuY2VzPC9UcmFucz59IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy50aGVtZS1sYWJlbCcsIG1lc3NhZ2U6ICdVSSBUaGVtZScgfSl9PlxuICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGVtZXN9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFsdWUgPT09IHRoZW1lKT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRoZW1lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaG9tZS1kYXNoYm9hcmQtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5ob21lLWRhc2hib2FyZC1sYWJlbFwiPkhvbWUgRGFzaGJvYXJkPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIHtob21lRGFzaGJvYXJkVG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiVXNlciBwcmVmZXJlbmNlcyBob21lIGRhc2hib2FyZCBkcm9wIGRvd25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rhc2hib2FyZHMuZmluZCgoZGFzaGJvYXJkKSA9PiBkYXNoYm9hcmQuaWQgPT09IGhvbWVEYXNoYm9hcmRJZCl9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KGkpID0+IGkuaWR9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17dGhpcy5nZXRGdWxsRGFzaE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhc2hib2FyZDogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4pID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ib21lRGFzaGJvYXJkQ2hhbmdlZChkYXNoYm9hcmQuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkYXNoYm9hcmRzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Qoe1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2hvb3NlIGRlZmF1bHQgZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImhvbWUtZGFzaGJvYXJkLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLWRhc2hib2FyZC5maWVsZHMudGltZXpvbmUtbGFiZWwnLCBtZXNzYWdlOiAnVGltZXpvbmUnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5UaW1lWm9uZVBpY2tlci5jb250YWluZXJWMn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUaW1lWm9uZVBpY2tlclxuICAgICAgICAgICAgICAgICAgaW5jbHVkZUludGVybmFsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWV6b25lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaW1lWm9uZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPVwic2hhcmVkLXByZWZlcmVuY2VzLXRpbWV6b25lLXBpY2tlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy53ZWVrLXN0YXJ0LWxhYmVsJywgbWVzc2FnZTogJ1dlZWsgc3RhcnQnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5XZWVrU3RhcnRQaWNrZXIuY29udGFpbmVyVjJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8V2Vla1N0YXJ0UGlja2VyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla1N0YXJ0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XZWVrU3RhcnRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD17J3NoYXJlZC1wcmVmZXJlbmNlcy13ZWVrLXN0YXJ0LXBpY2tlcid9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICB7aTE4bkZsYWcgPyAoXG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibG9jYWxlLXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLmxvY2FsZS1sYWJlbFwiPkxhbmd1YWdlPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVCYWRnZSBmZWF0dXJlU3RhdGU9e0ZlYXR1cmVTdGF0ZS5hbHBoYX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiVXNlciBwcmVmZXJlbmNlcyBsYW5ndWFnZSBkcm9wIGRvd25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd1YWdlcy5maW5kKChsYW5nKSA9PiBsYW5nLnZhbHVlID09PSBsb2NhbGUpfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGxvY2FsZTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHRoaXMub25Mb2NhbGVDaGFuZ2VkKGxvY2FsZS52YWx1ZSA/PyAnJyl9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2xhbmd1YWdlc31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Qoe1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5sb2NhbGUtcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDaG9vc2UgbGFuZ3VhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImxvY2FsZS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlVzZXJQcm9maWxlLnByZWZlcmVuY2VzU2F2ZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJjb21tb24uc2F2ZVwiPlNhdmU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlZFByZWZlcmVuY2VzO1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbFRleHQ6IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIGAsXG4gIH07XG59KTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHJlcG9ydEV4cGVyaW1lbnRWaWV3IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG50eXBlIENvbXBvbmVudFNpemUgPSAnc20nIHwgJ21kJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxPclNWR0VsZW1lbnQ+IHtcbiAgZmVhdHVyZU5hbWU6IHN0cmluZztcbiAgc2l6ZT86IENvbXBvbmVudFNpemU7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGV2ZW50VmFyaWFudD86IHN0cmluZztcbiAgZmVhdHVyZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBVcGdyYWRlQm94ID0gKHtcbiAgZmVhdHVyZU5hbWUsXG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGZlYXR1cmVJZCxcbiAgZXZlbnRWYXJpYW50ID0gJycsXG4gIHNpemUgPSAnbWQnLFxuICAuLi5odG1sUHJvcHNcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoKHRoZW1lKSA9PiBnZXRVcGdyYWRlQm94U3R5bGVzKHRoZW1lLCBzaXplKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXBvcnRFeHBlcmltZW50VmlldyhgZmVhdHVyZS1oaWdobGlnaHRzLSR7ZmVhdHVyZUlkfWAsICd0ZXN0JywgZXZlbnRWYXJpYW50KTtcbiAgfSwgW2V2ZW50VmFyaWFudCwgZmVhdHVyZUlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJveCwgY2xhc3NOYW1lKX0gey4uLmh0bWxQcm9wc30+XG4gICAgICA8SWNvbiBuYW1lPXsncm9ja2V0J30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBZb3XigJl2ZSBkaXNjb3ZlcmVkIGEgUHJvIGZlYXR1cmUhIHt0ZXh0IHx8IGBHZXQgdGhlIEdyYWZhbmEgUHJvIHBsYW4gdG8gYWNjZXNzICR7ZmVhdHVyZU5hbWV9LmB9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9wcm9maWxlL29yZy9zdWJzY3JpcHRpb25cIlxuICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgVXBncmFkZVxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFVwZ3JhZGVCb3hTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIsIHNpemU6IENvbXBvbmVudFNpemUpID0+IHtcbiAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDIpO1xuICBjb25zdCBmb250QmFzZSA9IHNpemUgPT09ICdtZCcgPyAnYm9keScgOiAnYm9keVNtYWxsJztcblxuICByZXR1cm4ge1xuICAgIGJveDogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAke2JvcmRlclJhZGl1c307XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5zdWNjZXNzLnRyYW5zcGFyZW50fTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuc3VjY2Vzcy50ZXh0fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5W2ZvbnRCYXNlXS5mb250U2l6ZX07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygwLCAnYXV0bycsIDMsICdhdXRvJyl9O1xuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54eGx9cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBgLFxuICAgIGlubmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGAsXG4gICAgdGV4dDogY3NzYFxuICAgICAgbWFyZ2luOiAwO1xuICAgIGAsXG4gICAgYnV0dG9uOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5zdWNjZXNzLm1haW59O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TGlnaHR9O1xuICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuc3VjY2Vzcy5tYWlufTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5Lm1haW59O1xuICAgICAgfVxuICAgIGAsXG4gICAgaWNvbjogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMC41LCAxLCAwLjUsIDAuNSl9O1xuICAgIGAsXG4gIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwZ3JhZGVDb250ZW50UHJvcHMge1xuICBpbWFnZTogc3RyaW5nO1xuICBmZWF0dXJlVXJsPzogc3RyaW5nO1xuICBmZWF0dXJlTmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbGlzdEl0ZW1zOiBzdHJpbmdbXTtcbiAgY2FwdGlvbj86IHN0cmluZztcbiAgYWN0aW9uPzoge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBsaW5rPzogc3RyaW5nO1xuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgVXBncmFkZUNvbnRlbnQgPSAoe1xuICBsaXN0SXRlbXMsXG4gIGltYWdlLFxuICBmZWF0dXJlVXJsLFxuICBmZWF0dXJlTmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNhcHRpb24sXG4gIGFjdGlvbixcbn06IFVwZ3JhZGVDb250ZW50UHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRVcGdyYWRlQ29udGVudFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5HZXQgc3RhcnRlZCB3aXRoIHtmZWF0dXJlTmFtZX08L2gzPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGg2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9oNj59XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAgICB7bGlzdEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT17J2NoZWNrJ30gc2l6ZT17J3hsJ30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz4ge2l0ZW19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YWN0aW9uPy5saW5rICYmIChcbiAgICAgICAgICA8TGlua0J1dHRvbiB2YXJpYW50PXsncHJpbWFyeSd9IGhyZWY9e2FjdGlvbi5saW5rfT5cbiAgICAgICAgICAgIHthY3Rpb24udGV4dH1cbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHthY3Rpb24/Lm9uQ2xpY2sgJiYgKFxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD17J3ByaW1hcnknfSBvbkNsaWNrPXthY3Rpb24ub25DbGlja30+XG4gICAgICAgICAgICB7YWN0aW9uLnRleHR9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtmZWF0dXJlVXJsICYmIChcbiAgICAgICAgICA8TGlua0J1dHRvbiBmaWxsPXsndGV4dCd9IGhyZWY9e2ZlYXR1cmVVcmx9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cbiAgICAgICAgICAgIExlYXJuIG1vcmVcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWF9PlxuICAgICAgICA8aW1nIHNyYz17Z2V0SW1nVXJsKGltYWdlKX0gYWx0PXsnRmVhdHVyZSBzY3JlZW5zaG90J30gLz5cbiAgICAgICAge2NhcHRpb24gJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FwdGlvbn0+e2NhcHRpb259PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0VXBncmFkZUNvbnRlbnRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYCxcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICB3aWR0aDogNDUlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGAsXG4gICAgbWVkaWE6IGNzc2BcbiAgICAgIHdpZHRoOiA1NSU7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGAsXG4gICAgdGl0bGU6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0Lm1heENvbnRyYXN0fTtcbiAgICBgLFxuICAgIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5wcmltYXJ5fTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICBgLFxuICAgIGxpc3Q6IGNzc2BcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0LCAwLCAyLCAwKX07XG5cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSwgMCl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgaWNvbjogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnN1Y2Nlc3MubWFpbn07XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIGNhcHRpb246IGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDAsIDApfTtcbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFVwZ3JhZGVDb250ZW50VmVydGljYWwgPSAoe1xuICBmZWF0dXJlTmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIGZlYXR1cmVVcmwsXG4gIGltYWdlLFxufTogT21pdDxVcGdyYWRlQ29udGVudFByb3BzLCAnbGlzdEl0ZW1zJyB8ICdjYXB0aW9uJz4pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRDb250ZW50VmVydGljYWxTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+R2V0IHN0YXJ0ZWQgd2l0aCB7ZmVhdHVyZU5hbWV9PC9oMz5cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiA8aDYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L2g2Pn1cbiAgICAgIDxMaW5rQnV0dG9uIGZpbGw9eyd0ZXh0J30gaHJlZj17ZmVhdHVyZVVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPlxuICAgICAgICBMZWFybiBtb3JlXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhfT5cbiAgICAgICAgPGltZyBzcmM9e2dldEltZ1VybChpbWFnZSl9IGFsdD17J0ZlYXR1cmUgc2NyZWVuc2hvdCd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldENvbnRlbnRWZXJ0aWNhbFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQubWF4Q29udHJhc3R9O1xuICAgIGAsXG4gICAgZGVzY3JpcHRpb246IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TGlnaHR9O1xuICAgIGAsXG4gICAgbWVkaWE6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldEltZ1VybCA9ICh1cmxPcklkOiBzdHJpbmcpID0+IHtcbiAgaWYgKHVybE9ySWQuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgcmV0dXJuIHVybE9ySWQ7XG4gIH1cblxuICByZXR1cm4gJy9wdWJsaWMvaW1nL2VudGVycHJpc2UvaGlnaGxpZ2h0cy8nICsgdXJsT3JJZDtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBmZWF0dXJlVG9nZ2xlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgV2l0aEZlYXR1cmVUb2dnbGU6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IGZlYXR1cmVUb2dnbGUsIGNoaWxkcmVuIH0pID0+IHtcbiAgaWYgKGZlYXR1cmVUb2dnbGUgPT09IHRydWUpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmlhbCgpIHtcbiAgY29uc3QgZXhwaXJ5ID0gY29uZmlnLmxpY2Vuc2VJbmZvPy50cmlhbEV4cGlyeTtcbiAgcmV0dXJuICEhKGV4cGlyeSAmJiBleHBpcnkgPiAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFRyaWFsID0gKCkgPT4gaXNUcmlhbCgpICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IElucHV0LCBUb29sdGlwLCBJY29uLCBCdXR0b24sIHVzZVRoZW1lMiwgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU2xpZGVEb3duIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9BbmltYXRpb25zL1NsaWRlRG93bic7XG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24vQ2xvc2VCdXR0b24nO1xuaW1wb3J0IEVtcHR5TGlzdENUQSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0VtcHR5TGlzdENUQS9FbXB0eUxpc3RDVEEnO1xuaW1wb3J0IHsgVXBncmFkZUJveCwgVXBncmFkZUNvbnRlbnQsIFVwZ3JhZGVDb250ZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvVXBncmFkZUJveCc7XG5pbXBvcnQgeyBoaWdobGlnaHRUcmlhbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscyc7XG5cbmltcG9ydCB7IFN0b3JlU3RhdGUsIFRlYW1Hcm91cCB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgYWRkVGVhbUdyb3VwLCBsb2FkVGVhbUdyb3VwcywgcmVtb3ZlVGVhbUdyb3VwIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldFRlYW1Hcm91cHMgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGdyb3VwczogZ2V0VGVhbUdyb3VwcyhzdGF0ZS50ZWFtKSxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2FkVGVhbUdyb3VwcyxcbiAgYWRkVGVhbUdyb3VwLFxuICByZW1vdmVUZWFtR3JvdXAsXG59O1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge1xuICBpc1JlYWRPbmx5OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc0FkZGluZzogYm9vbGVhbjtcbiAgbmV3R3JvdXBJZDogc3RyaW5nO1xufVxuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuY29uc3QgaGVhZGVyVG9vbHRpcCA9IGBTeW5jIExEQVAsIE9BdXRoIG9yIFNBTUwgZ3JvdXBzIHdpdGggeW91ciBHcmFmYW5hIHRlYW1zLmA7XG5cbmV4cG9ydCBjbGFzcyBUZWFtR3JvdXBTeW5jIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzQWRkaW5nOiBmYWxzZSwgbmV3R3JvdXBJZDogJycgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hUZWFtR3JvdXBzKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaFRlYW1Hcm91cHMoKSB7XG4gICAgYXdhaXQgdGhpcy5wcm9wcy5sb2FkVGVhbUdyb3VwcygpO1xuICB9XG5cbiAgb25Ub2dnbGVBZGRpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQWRkaW5nOiAhdGhpcy5zdGF0ZS5pc0FkZGluZyB9KTtcbiAgfTtcblxuICBvbk5ld0dyb3VwSWRDaGFuZ2VkID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3R3JvdXBJZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIG9uQWRkR3JvdXAgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5hZGRUZWFtR3JvdXAodGhpcy5zdGF0ZS5uZXdHcm91cElkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBZGRpbmc6IGZhbHNlLCBuZXdHcm91cElkOiAnJyB9KTtcbiAgfTtcblxuICBvblJlbW92ZUdyb3VwID0gKGdyb3VwOiBUZWFtR3JvdXApID0+IHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZVRlYW1Hcm91cChncm91cC5ncm91cElkKTtcbiAgfTtcblxuICBpc05ld0dyb3VwVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubmV3R3JvdXBJZC5sZW5ndGggPiAxO1xuICB9XG5cbiAgcmVuZGVyR3JvdXAoZ3JvdXA6IFRlYW1Hcm91cCkge1xuICAgIGNvbnN0IHsgaXNSZWFkT25seSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17Z3JvdXAuZ3JvdXBJZH0+XG4gICAgICAgIDx0ZD57Z3JvdXAuZ3JvdXBJZH08L3RkPlxuICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxJScgfX0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uUmVtb3ZlR3JvdXAoZ3JvdXApfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUmVhZE9ubHl9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgUmVtb3ZlIGdyb3VwICR7Z3JvdXAuZ3JvdXBJZH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ0aW1lc1wiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0FkZGluZywgbmV3R3JvdXBJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGdyb3VwcywgaXNSZWFkT25seSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2hpZ2hsaWdodFRyaWFsKCkgJiYgKFxuICAgICAgICAgIDxVcGdyYWRlQm94XG4gICAgICAgICAgICBmZWF0dXJlSWQ9eyd0ZWFtLXN5bmMnfVxuICAgICAgICAgICAgZXZlbnRWYXJpYW50PXsndHJpYWwnfVxuICAgICAgICAgICAgZmVhdHVyZU5hbWU9eyd0ZWFtIHN5bmMnfVxuICAgICAgICAgICAgdGV4dD17J0FkZCBhIGdyb3VwIHRvIGVuYWJsZSB0ZWFtIHN5bmMgZm9yIGZyZWUgZHVyaW5nIHlvdXIgdHJpYWwgb2YgR3JhZmFuYSBQcm8uJ31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgIHsoIWhpZ2hsaWdodFRyaWFsKCkgfHwgZ3JvdXBzLmxlbmd0aCA+IDApICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+RXh0ZXJuYWwgZ3JvdXAgc3luYzwvaDM+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImF1dG9cIiBjb250ZW50PXtoZWFkZXJUb29sdGlwfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uLS1oYXMtaG92ZXIgcGFnZS1zdWItaGVhZGluZy1pY29uXCIgbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJfX3NwYWNlclwiIC8+XG4gICAgICAgICAge2dyb3Vwcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMub25Ub2dnbGVBZGRpbmd9IGRpc2FibGVkPXtpc1JlYWRPbmx5fT5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInBsdXNcIiAvPiBBZGQgZ3JvdXBcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxTbGlkZURvd24gaW49e2lzQWRkaW5nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS1mb3JtXCI+XG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5vblRvZ2dsZUFkZGluZ30gLz5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uQWRkR3JvdXB9PlxuICAgICAgICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD17J0FkZCBFeHRlcm5hbCBHcm91cCd9XG4gICAgICAgICAgICAgICAgICB0b29sdGlwPVwiTERBUCBHcm91cCBFeGFtcGxlOiBjbj11c2VycyxvdT1ncm91cHMsZGM9Z3JhZmFuYSxkYz1vcmcuXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBpZD17J2FkZC1leHRlcm5hbC1ncm91cCd9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0dyb3VwSWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTmV3R3JvdXBJZENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1JlYWRPbmx5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1JlYWRPbmx5IHx8ICF0aGlzLmlzTmV3R3JvdXBWYWxpZCgpfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiA0IH19PlxuICAgICAgICAgICAgICAgICAgQWRkIGdyb3VwXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2xpZGVEb3duPlxuXG4gICAgICAgIHtncm91cHMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgIWlzQWRkaW5nICYmXG4gICAgICAgICAgKGhpZ2hsaWdodFRyaWFsKCkgPyAoXG4gICAgICAgICAgICA8VGVhbVN5bmNVcGdyYWRlQ29udGVudCBhY3Rpb249e3sgb25DbGljazogdGhpcy5vblRvZ2dsZUFkZGluZywgdGV4dDogJ0FkZCBncm91cCcgfX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEVtcHR5TGlzdENUQVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlQWRkaW5nfVxuICAgICAgICAgICAgICBidXR0b25JY29uPVwidXNlcnMtYWx0XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJUaGVyZSBhcmUgbm8gZXh0ZXJuYWwgZ3JvdXBzIHRvIHN5bmMgd2l0aFwiXG4gICAgICAgICAgICAgIGJ1dHRvblRpdGxlPVwiQWRkIGdyb3VwXCJcbiAgICAgICAgICAgICAgcHJvVGlwPXtoZWFkZXJUb29sdGlwfVxuICAgICAgICAgICAgICBwcm9UaXBMaW5rVGl0bGU9XCJMZWFybiBtb3JlXCJcbiAgICAgICAgICAgICAgcHJvVGlwTGluaz1cImh0dHBzOi8vZG9jcy5ncmFmYW5hLm9yZy9hdXRoL2VuaGFuY2VkX2xkYXAvXCJcbiAgICAgICAgICAgICAgcHJvVGlwVGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgYnV0dG9uRGlzYWJsZWQ9e2lzUmVhZE9ubHl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgIHtncm91cHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1saXN0LXRhYmxlXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZpbHRlci10YWJsZS0taG92ZXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aD5FeHRlcm5hbCBHcm91cCBJRDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxJScgfX0gLz5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+e2dyb3Vwcy5tYXAoKGdyb3VwKSA9PiB0aGlzLnJlbmRlckdyb3VwKGdyb3VwKSl9PC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBUZWFtU3luY1VwZ3JhZGVDb250ZW50ID0gKHsgYWN0aW9uIH06IHsgYWN0aW9uPzogVXBncmFkZUNvbnRlbnRQcm9wc1snYWN0aW9uJ10gfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICByZXR1cm4gKFxuICAgIDxVcGdyYWRlQ29udGVudFxuICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICBsaXN0SXRlbXM9e1tcbiAgICAgICAgJ1N0b3AgbWFuYWdpbmcgdXNlciBhY2Nlc3MgaW4gdHdvIHBsYWNlcyAtIGFzc2lnbiB1c2VycyB0byBncm91cHMgaW4gU0FNTCwgTERBUCBvciBPYXV0aCwgYW5kIG1hbmFnZSBhY2Nlc3MgYXQgYSBUZWFtIGxldmVsIGluIEdyYWZhbmEnLFxuICAgICAgICAnVXBkYXRlIHVzZXJz4oCZIHBlcm1pc3Npb25zIGltbWVkaWF0ZWx5IHdoZW4geW91IGFkZCBvciByZW1vdmUgdGhlbSBmcm9tIGFuIExEQVAgZ3JvdXAsIHdpdGggbm8gbmVlZCBmb3IgdGhlbSB0byBzaWduIG91dCBhbmQgYmFjayBpbicsXG4gICAgICBdfVxuICAgICAgaW1hZ2U9e2B0ZWFtLXN5bmMtJHt0aGVtZS5pc0xpZ2h0ID8gJ2xpZ2h0JyA6ICdkYXJrJ30ucG5nYH1cbiAgICAgIGZlYXR1cmVOYW1lPXsndGVhbSBzeW5jJ31cbiAgICAgIGZlYXR1cmVVcmw9eydodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9sYXRlc3QvZW50ZXJwcmlzZS90ZWFtLXN5bmMnfVxuICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAnVGVhbSBTeW5jIG1ha2VzIGl0IGVhc2llciBmb3IgeW91IHRvIG1hbmFnZSB1c2Vyc+KAmSBhY2Nlc3MgaW4gR3JhZmFuYSwgYnkgaW1tZWRpYXRlbHkgdXBkYXRpbmcgZWFjaCB1c2Vy4oCZcyBHcmFmYW5hIHRlYW1zIGFuZCBwZXJtaXNzaW9ucyBiYXNlZCBvbiB0aGVpciBzaW5nbGUgc2lnbi1vbiBncm91cCBtZW1iZXJzaGlwLCBpbnN0ZWFkIG9mIHdoZW4gdXNlcnMgc2lnbiBpbi4nXG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZWFtR3JvdXBTeW5jKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VsZWN0LCBEZWxldGVCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBUYWdCYWRnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVGFnRmlsdGVyL1RhZ0JhZGdlJztcbmltcG9ydCB7IFdpdGhGZWF0dXJlVG9nZ2xlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9XaXRoRmVhdHVyZVRvZ2dsZSc7XG5pbXBvcnQgeyBUZWFtTWVtYmVyLCB0ZWFtc1Blcm1pc3Npb25MZXZlbHMsIFRlYW1QZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyB1cGRhdGVUZWFtTWVtYmVyLCByZW1vdmVUZWFtTWVtYmVyIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICByZW1vdmVUZWFtTWVtYmVyLFxuICB1cGRhdGVUZWFtTWVtYmVyLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge1xuICBtZW1iZXI6IFRlYW1NZW1iZXI7XG4gIHN5bmNFbmFibGVkOiBib29sZWFuO1xuICBlZGl0b3JzQ2FuQWRtaW46IGJvb2xlYW47XG4gIHNpZ25lZEluVXNlcklzVGVhbUFkbWluOiBib29sZWFuO1xufVxuZXhwb3J0IHR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPiAmIE93blByb3BzO1xuXG5leHBvcnQgY2xhc3MgVGVhbU1lbWJlclJvdyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVuZGVyTGFiZWxzID0gdGhpcy5yZW5kZXJMYWJlbHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlclBlcm1pc3Npb25zID0gdGhpcy5yZW5kZXJQZXJtaXNzaW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25SZW1vdmVNZW1iZXIobWVtYmVyOiBUZWFtTWVtYmVyKSB7XG4gICAgdGhpcy5wcm9wcy5yZW1vdmVUZWFtTWVtYmVyKG1lbWJlci51c2VySWQpO1xuICB9XG5cbiAgb25QZXJtaXNzaW9uQ2hhbmdlID0gKGl0ZW06IFNlbGVjdGFibGVWYWx1ZTxUZWFtUGVybWlzc2lvbkxldmVsPiwgbWVtYmVyOiBUZWFtTWVtYmVyKSA9PiB7XG4gICAgY29uc3QgcGVybWlzc2lvbiA9IGl0ZW0udmFsdWU7XG4gICAgY29uc3QgdXBkYXRlZFRlYW1NZW1iZXI6IFRlYW1NZW1iZXIgPSB7XG4gICAgICAuLi5tZW1iZXIsXG4gICAgICBwZXJtaXNzaW9uOiBwZXJtaXNzaW9uIGFzIG51bWJlcixcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9wcy51cGRhdGVUZWFtTWVtYmVyKHVwZGF0ZWRUZWFtTWVtYmVyKTtcbiAgfTtcblxuICByZW5kZXJQZXJtaXNzaW9ucyhtZW1iZXI6IFRlYW1NZW1iZXIpIHtcbiAgICBjb25zdCB7IGVkaXRvcnNDYW5BZG1pbiwgc2lnbmVkSW5Vc2VySXNUZWFtQWRtaW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsdWUgPSB0ZWFtc1Blcm1pc3Npb25MZXZlbHMuZmluZCgoZHApID0+IGRwLnZhbHVlID09PSBtZW1iZXIucGVybWlzc2lvbikhO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxXaXRoRmVhdHVyZVRvZ2dsZSBmZWF0dXJlVG9nZ2xlPXtlZGl0b3JzQ2FuQWRtaW59PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtNSB0ZWFtLXBlcm1pc3Npb25zXCI+XG4gICAgICAgICAge3NpZ25lZEluVXNlcklzVGVhbUFkbWluID8gKFxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvcHRpb25zPXt0ZWFtc1Blcm1pc3Npb25MZXZlbHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5vblBlcm1pc3Npb25DaGFuZ2UoaXRlbSwgbWVtYmVyKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BTZWxlY3QgbWVtYmVyJ3MgJHttZW1iZXIubmFtZX0gcGVybWlzc2lvbiBsZXZlbGB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3Bhbj57dmFsdWUubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L1dpdGhGZWF0dXJlVG9nZ2xlPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMYWJlbHMobGFiZWxzOiBzdHJpbmdbXSkge1xuICAgIGlmICghbGFiZWxzKSB7XG4gICAgICByZXR1cm4gPHRkIC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGQ+XG4gICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCkgPT4gKFxuICAgICAgICAgIDxUYWdCYWRnZSBrZXk9e2xhYmVsfSBsYWJlbD17bGFiZWx9IHJlbW92ZUljb249e2ZhbHNlfSBjb3VudD17MH0gb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICkpfVxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVtYmVyLCBzeW5jRW5hYmxlZCwgc2lnbmVkSW5Vc2VySXNUZWFtQWRtaW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e21lbWJlci51c2VySWR9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD17YEF2YXRhciBmb3IgdGVhbSBtZW1iZXIgXCIke21lbWJlci5uYW1lfVwiYH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZV9fYXZhdGFyXCJcbiAgICAgICAgICAgIHNyYz17bWVtYmVyLmF2YXRhclVybH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+e21lbWJlci5sb2dpbn08L3RkPlxuICAgICAgICA8dGQ+e21lbWJlci5lbWFpbH08L3RkPlxuICAgICAgICA8dGQ+e21lbWJlci5uYW1lfTwvdGQ+XG4gICAgICAgIHt0aGlzLnJlbmRlclBlcm1pc3Npb25zKG1lbWJlcil9XG4gICAgICAgIHtzeW5jRW5hYmxlZCAmJiB0aGlzLnJlbmRlckxhYmVscyhtZW1iZXIubGFiZWxzKX1cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8RGVsZXRlQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgUmVtb3ZlIHRlYW0gbWVtYmVyICR7bWVtYmVyLm5hbWV9YH1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IXNpZ25lZEluVXNlcklzVGVhbUFkbWlufVxuICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiB0aGlzLm9uUmVtb3ZlTWVtYmVyKG1lbWJlcil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoVGVhbU1lbWJlclJvdyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgRmlsdGVySW5wdXQsIExhYmVsIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU2xpZGVEb3duIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9BbmltYXRpb25zL1NsaWRlRG93bic7XG5pbXBvcnQgeyBDbG9zZUJ1dHRvbiB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQ2xvc2VCdXR0b24vQ2xvc2VCdXR0b24nO1xuaW1wb3J0IHsgVXNlclBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L1VzZXJQaWNrZXInO1xuaW1wb3J0IHsgVGFnQmFkZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdCYWRnZSc7XG5pbXBvcnQgeyBXaXRoRmVhdHVyZVRvZ2dsZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvV2l0aEZlYXR1cmVUb2dnbGUnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBUZWFtTWVtYmVyLCBPcmdVc2VyIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IFRlYW1NZW1iZXJSb3cgZnJvbSAnLi9UZWFtTWVtYmVyUm93JztcbmltcG9ydCB7IGFkZFRlYW1NZW1iZXIgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0U2VhcmNoTWVtYmVyUXVlcnkgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7IGdldFNlYXJjaE1lbWJlclF1ZXJ5LCBpc1NpZ25lZEluVXNlclRlYW1BZG1pbiB9IGZyb20gJy4vc3RhdGUvc2VsZWN0b3JzJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBhbnkpIHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hNZW1iZXJRdWVyeTogZ2V0U2VhcmNoTWVtYmVyUXVlcnkoc3RhdGUudGVhbSksXG4gICAgZWRpdG9yc0NhbkFkbWluOiBjb25maWcuZWRpdG9yc0NhbkFkbWluLCAvLyB0aGlzIG1ha2VzIHRoZSBmZWF0dXJlIHRvZ2dsZSBtb2NrYWJsZS9jb250cm9sbGFibGUgZnJvbSB0ZXN0cyxcbiAgICBzaWduZWRJblVzZXI6IGNvbnRleHRTcnYudXNlciwgLy8gdGhpcyBtYWtlcyB0aGUgZmVhdHVyZSB0b2dnbGUgbW9ja2FibGUvY29udHJvbGxhYmxlIGZyb20gdGVzdHMsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYWRkVGVhbU1lbWJlcixcbiAgc2V0U2VhcmNoTWVtYmVyUXVlcnksXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuaW50ZXJmYWNlIE93blByb3BzIHtcbiAgbWVtYmVyczogVGVhbU1lbWJlcltdO1xuICBzeW5jRW5hYmxlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPiAmIE93blByb3BzO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNBZGRpbmc6IGJvb2xlYW47XG4gIG5ld1RlYW1NZW1iZXI/OiBTZWxlY3RhYmxlVmFsdWU8T3JnVXNlclsndXNlcklkJ10+IHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFRlYW1NZW1iZXJzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlzQWRkaW5nOiBmYWxzZSwgbmV3VGVhbU1lbWJlcjogbnVsbCB9O1xuICB9XG5cbiAgb25TZWFyY2hRdWVyeUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRTZWFyY2hNZW1iZXJRdWVyeSh2YWx1ZSk7XG4gIH07XG5cbiAgb25Ub2dnbGVBZGRpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQWRkaW5nOiAhdGhpcy5zdGF0ZS5pc0FkZGluZyB9KTtcbiAgfTtcblxuICBvblVzZXJTZWxlY3RlZCA9ICh1c2VyOiBTZWxlY3RhYmxlVmFsdWU8T3JnVXNlclsndXNlcklkJ10+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5ld1RlYW1NZW1iZXI6IHVzZXIgfSk7XG4gIH07XG5cbiAgb25BZGRVc2VyVG9UZWFtID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuYWRkVGVhbU1lbWJlcih0aGlzLnN0YXRlLm5ld1RlYW1NZW1iZXIhLmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3VGVhbU1lbWJlcjogbnVsbCB9KTtcbiAgfTtcblxuICByZW5kZXJMYWJlbHMobGFiZWxzOiBzdHJpbmdbXSkge1xuICAgIGlmICghbGFiZWxzKSB7XG4gICAgICByZXR1cm4gPHRkIC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGQ+XG4gICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCkgPT4gKFxuICAgICAgICAgIDxUYWdCYWRnZSBrZXk9e2xhYmVsfSBsYWJlbD17bGFiZWx9IHJlbW92ZUljb249e2ZhbHNlfSBjb3VudD17MH0gb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICkpfVxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNBZGRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzZWFyY2hNZW1iZXJRdWVyeSwgbWVtYmVycywgc3luY0VuYWJsZWQsIGVkaXRvcnNDYW5BZG1pbiwgc2lnbmVkSW5Vc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzVGVhbUFkbWluID0gaXNTaWduZWRJblVzZXJUZWFtQWRtaW4oeyBtZW1iZXJzLCBlZGl0b3JzQ2FuQWRtaW4sIHNpZ25lZEluVXNlciB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICA8RmlsdGVySW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggbWVtYmVyc1wiIHZhbHVlPXtzZWFyY2hNZW1iZXJRdWVyeX0gb25DaGFuZ2U9e3RoaXMub25TZWFyY2hRdWVyeUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlQWRkaW5nfSBkaXNhYmxlZD17aXNBZGRpbmcgfHwgIWlzVGVhbUFkbWlufT5cbiAgICAgICAgICAgIEFkZCBtZW1iZXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFNsaWRlRG93biBpbj17aXNBZGRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWZvcm1cIj5cbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2UgJ0FkZCB0ZWFtIG1lbWJlcicgZGlhbG9ndWVcIiBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlQWRkaW5nfSAvPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ1c2VyLXBpY2tlclwiPkFkZCB0ZWFtIG1lbWJlcjwvTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICAgIDxVc2VyUGlja2VyIGlucHV0SWQ9XCJ1c2VyLXBpY2tlclwiIG9uU2VsZWN0ZWQ9e3RoaXMub25Vc2VyU2VsZWN0ZWR9IGNsYXNzTmFtZT1cIm1pbi13aWR0aC0zMFwiIC8+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm5ld1RlYW1NZW1iZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMub25BZGRVc2VyVG9UZWFtfT5cbiAgICAgICAgICAgICAgICAgIEFkZCB0byB0ZWFtXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TbGlkZURvd24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1saXN0LXRhYmxlXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmaWx0ZXItdGFibGUtLWhvdmVyIGZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgICAgICA8dGg+TG9naW48L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDxXaXRoRmVhdHVyZVRvZ2dsZSBmZWF0dXJlVG9nZ2xlPXtlZGl0b3JzQ2FuQWRtaW59PlxuICAgICAgICAgICAgICAgICAgPHRoPlBlcm1pc3Npb248L3RoPlxuICAgICAgICAgICAgICAgIDwvV2l0aEZlYXR1cmVUb2dnbGU+XG4gICAgICAgICAgICAgICAge3N5bmNFbmFibGVkICYmIDx0aCAvPn1cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxJScgfX0gLz5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHttZW1iZXJzICYmXG4gICAgICAgICAgICAgICAgbWVtYmVycy5tYXAoKG1lbWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRlYW1NZW1iZXJSb3dcbiAgICAgICAgICAgICAgICAgICAga2V5PXttZW1iZXIudXNlcklkfVxuICAgICAgICAgICAgICAgICAgICBtZW1iZXI9e21lbWJlcn1cbiAgICAgICAgICAgICAgICAgICAgc3luY0VuYWJsZWQ9e3N5bmNFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICBlZGl0b3JzQ2FuQWRtaW49e2VkaXRvcnNDYW5BZG1pbn1cbiAgICAgICAgICAgICAgICAgICAgc2lnbmVkSW5Vc2VySXNUZWFtQWRtaW49e2lzVGVhbUFkbWlufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihUZWFtTWVtYmVycyk7XG4iLCJpbXBvcnQgeyBpbmNsdWRlcyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFRoZW1lYWJsZTIsIHdpdGhUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBVcGdyYWRlQm94IH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1VwZ3JhZGVCb3gnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IFRlYW1Hcm91cFN5bmMsIHsgVGVhbVN5bmNVcGdyYWRlQ29udGVudCB9IGZyb20gJy4vVGVhbUdyb3VwU3luYyc7XG5pbXBvcnQgVGVhbU1lbWJlcnMgZnJvbSAnLi9UZWFtTWVtYmVycyc7XG5pbXBvcnQgVGVhbVBlcm1pc3Npb25zIGZyb20gJy4vVGVhbVBlcm1pc3Npb25zJztcbmltcG9ydCBUZWFtU2V0dGluZ3MgZnJvbSAnLi9UZWFtU2V0dGluZ3MnO1xuaW1wb3J0IHsgbG9hZFRlYW0sIGxvYWRUZWFtTWVtYmVycyB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRUZWFtTG9hZGluZ05hdiB9IGZyb20gJy4vc3RhdGUvbmF2TW9kZWwnO1xuaW1wb3J0IHsgZ2V0VGVhbSwgZ2V0VGVhbU1lbWJlcnMsIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5pbnRlcmZhY2UgVGVhbVBhZ2VSb3V0ZVBhcmFtcyB7XG4gIGlkOiBzdHJpbmc7XG4gIHBhZ2U6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczxUZWFtUGFnZVJvdXRlUGFyYW1zPiwgVGhlbWVhYmxlMiB7fVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc1N5bmNFbmFibGVkOiBib29sZWFuO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG59XG5cbmVudW0gUGFnZVR5cGVzIHtcbiAgTWVtYmVycyA9ICdtZW1iZXJzJyxcbiAgU2V0dGluZ3MgPSAnc2V0dGluZ3MnLFxuICBHcm91cFN5bmMgPSAnZ3JvdXBzeW5jJyxcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogT3duUHJvcHMpIHtcbiAgY29uc3QgdGVhbUlkID0gcGFyc2VJbnQocHJvcHMubWF0Y2gucGFyYW1zLmlkLCAxMCk7XG4gIGNvbnN0IHRlYW0gPSBnZXRUZWFtKHN0YXRlLnRlYW0sIHRlYW1JZCk7XG4gIGxldCBkZWZhdWx0UGFnZSA9ICdtZW1iZXJzJztcbiAgaWYgKGNvbnRleHRTcnYuYWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgIC8vIFdpdGggUkJBQyB0aGUgc2V0dGluZ3MgcGFnZSB3aWxsIGFsd2F5cyBiZSBhdmFpbGFibGVcbiAgICBpZiAoIXRlYW0gfHwgIWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCwgdGVhbSkpIHtcbiAgICAgIGRlZmF1bHRQYWdlID0gJ3NldHRpbmdzJztcbiAgICB9XG4gIH1cbiAgY29uc3QgcGFnZU5hbWUgPSBwcm9wcy5tYXRjaC5wYXJhbXMucGFnZSA/PyBkZWZhdWx0UGFnZTtcbiAgY29uc3QgdGVhbUxvYWRpbmdOYXYgPSBnZXRUZWFtTG9hZGluZ05hdihwYWdlTmFtZSBhcyBzdHJpbmcpO1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCBgdGVhbS0ke3BhZ2VOYW1lfS0ke3RlYW1JZH1gLCB0ZWFtTG9hZGluZ05hdik7XG4gIGNvbnN0IG1lbWJlcnMgPSBnZXRUZWFtTWVtYmVycyhzdGF0ZS50ZWFtKTtcblxuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsLFxuICAgIHRlYW1JZDogdGVhbUlkLFxuICAgIHBhZ2VOYW1lOiBwYWdlTmFtZSxcbiAgICB0ZWFtLFxuICAgIG1lbWJlcnMsXG4gICAgZWRpdG9yc0NhbkFkbWluOiBjb25maWcuZWRpdG9yc0NhbkFkbWluLCAvLyB0aGlzIG1ha2VzIHRoZSBmZWF0dXJlIHRvZ2dsZSBtb2NrYWJsZS9jb250cm9sbGFibGUgZnJvbSB0ZXN0cyxcbiAgICBzaWduZWRJblVzZXI6IGNvbnRleHRTcnYudXNlciwgLy8gdGhpcyBtYWtlcyB0aGUgZmVhdHVyZSB0b2dnbGUgbW9ja2FibGUvY29udHJvbGxhYmxlIGZyb20gdGVzdHMsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZFRlYW0sXG4gIGxvYWRUZWFtTWVtYmVycyxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBjbGFzcyBUZWFtUGFnZXMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlzU3luY0VuYWJsZWQ6IGZlYXR1cmVFbmFibGVkKCd0ZWFtc3luYycpLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBhd2FpdCB0aGlzLmZldGNoVGVhbSgpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hUZWFtKCkge1xuICAgIGNvbnN0IHsgbG9hZFRlYW0sIHRlYW1JZCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICAgIGNvbnN0IHRlYW0gPSBhd2FpdCBsb2FkVGVhbSh0ZWFtSWQpO1xuICAgIC8vIFdpdGggYWNjZXNzY29udHJvbCwgdGhlIFRlYW1QZXJtaXNzaW9ucyB3aWxsIGZldGNoIHRlYW0gbWVtYmVyc1xuICAgIGlmICghY29udGV4dFNydi5hY2Nlc3NDb250cm9sRW5hYmxlZCgpKSB7XG4gICAgICBhd2FpdCB0aGlzLnByb3BzLmxvYWRUZWFtTWVtYmVycygpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgICByZXR1cm4gdGVhbTtcbiAgfVxuXG4gIGdldEN1cnJlbnRQYWdlKCkge1xuICAgIGNvbnN0IHBhZ2VzID0gWydtZW1iZXJzJywgJ3NldHRpbmdzJywgJ2dyb3Vwc3luYyddO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gdGhpcy5wcm9wcy5wYWdlTmFtZTtcbiAgICByZXR1cm4gaW5jbHVkZXMocGFnZXMsIGN1cnJlbnRQYWdlKSA/IGN1cnJlbnRQYWdlIDogcGFnZXNbMF07XG4gIH1cblxuICB0ZXh0c0FyZUVxdWFsID0gKHRleHQxOiBzdHJpbmcsIHRleHQyOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXRleHQxICYmICF0ZXh0Mikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0ZXh0MSB8fCAhdGV4dDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDEudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gdGV4dDIudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgfTtcblxuICBoaWRlVGFic0Zyb21Ob25UZWFtQWRtaW4gPSAobmF2TW9kZWw6IE5hdk1vZGVsLCBpc1NpZ25lZEluVXNlclRlYW1BZG1pbjogYm9vbGVhbikgPT4ge1xuICAgIGlmIChjb250ZXh0U3J2LmFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIHJldHVybiBuYXZNb2RlbDtcbiAgICB9XG5cbiAgICBpZiAoIWlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluICYmIG5hdk1vZGVsLm1haW4gJiYgbmF2TW9kZWwubWFpbi5jaGlsZHJlbikge1xuICAgICAgbmF2TW9kZWwubWFpbi5jaGlsZHJlblxuICAgICAgICAuZmlsdGVyKChuYXZJdGVtKSA9PiAhdGhpcy50ZXh0c0FyZUVxdWFsKG5hdkl0ZW0udGV4dCwgUGFnZVR5cGVzLk1lbWJlcnMpKVxuICAgICAgICAubWFwKChuYXZJdGVtKSA9PiB7XG4gICAgICAgICAgbmF2SXRlbS5oaWRlRnJvbVRhYnMgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmF2TW9kZWw7XG4gIH07XG5cbiAgcmVuZGVyUGFnZShpc1NpZ25lZEluVXNlclRlYW1BZG1pbjogYm9vbGVhbik6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBpc1N5bmNFbmFibGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbWVtYmVycywgdGVhbSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IHRoaXMuZ2V0Q3VycmVudFBhZ2UoKTtcblxuICAgIGNvbnN0IGNhblJlYWRUZWFtID0gY29udGV4dFNydi5oYXNBY2Nlc3NJbk1ldGFkYXRhKFxuICAgICAgQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1JlYWQsXG4gICAgICB0ZWFtISxcbiAgICAgIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluXG4gICAgKTtcbiAgICBjb25zdCBjYW5SZWFkVGVhbVBlcm1pc3Npb25zID0gY29udGV4dFNydi5oYXNBY2Nlc3NJbk1ldGFkYXRhKFxuICAgICAgQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCxcbiAgICAgIHRlYW0hLFxuICAgICAgaXNTaWduZWRJblVzZXJUZWFtQWRtaW5cbiAgICApO1xuICAgIGNvbnN0IGNhbldyaXRlVGVhbVBlcm1pc3Npb25zID0gY29udGV4dFNydi5oYXNBY2Nlc3NJbk1ldGFkYXRhKFxuICAgICAgQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1Blcm1pc3Npb25zV3JpdGUsXG4gICAgICB0ZWFtISxcbiAgICAgIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluXG4gICAgKTtcblxuICAgIHN3aXRjaCAoY3VycmVudFBhZ2UpIHtcbiAgICAgIGNhc2UgUGFnZVR5cGVzLk1lbWJlcnM6XG4gICAgICAgIGlmIChjb250ZXh0U3J2LmFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgICAgICByZXR1cm4gPFRlYW1QZXJtaXNzaW9ucyB0ZWFtPXt0ZWFtIX0gLz47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDxUZWFtTWVtYmVycyBzeW5jRW5hYmxlZD17aXNTeW5jRW5hYmxlZH0gbWVtYmVycz17bWVtYmVyc30gLz47XG4gICAgICAgIH1cbiAgICAgIGNhc2UgUGFnZVR5cGVzLlNldHRpbmdzOlxuICAgICAgICByZXR1cm4gY2FuUmVhZFRlYW0gJiYgPFRlYW1TZXR0aW5ncyB0ZWFtPXt0ZWFtIX0gLz47XG4gICAgICBjYXNlIFBhZ2VUeXBlcy5Hcm91cFN5bmM6XG4gICAgICAgIGlmIChpc1N5bmNFbmFibGVkKSB7XG4gICAgICAgICAgaWYgKGNhblJlYWRUZWFtUGVybWlzc2lvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiA8VGVhbUdyb3VwU3luYyBpc1JlYWRPbmx5PXshY2FuV3JpdGVUZWFtUGVybWlzc2lvbnN9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFVwZ3JhZGVCb3ggZmVhdHVyZU5hbWU9eyd0ZWFtIHN5bmMnfSBmZWF0dXJlSWQ9eyd0ZWFtLXN5bmMnfSAvPlxuICAgICAgICAgICAgICA8VGVhbVN5bmNVcGdyYWRlQ29udGVudCAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGVhbSwgbmF2TW9kZWwsIG1lbWJlcnMsIGVkaXRvcnNDYW5BZG1pbiwgc2lnbmVkSW5Vc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzVGVhbUFkbWluID0gaXNTaWduZWRJblVzZXJUZWFtQWRtaW4oeyBtZW1iZXJzLCBlZGl0b3JzQ2FuQWRtaW4sIHNpZ25lZEluVXNlciB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17dGhpcy5oaWRlVGFic0Zyb21Ob25UZWFtQWRtaW4obmF2TW9kZWwsIGlzVGVhbUFkbWluKX0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17dGhpcy5zdGF0ZS5pc0xvYWRpbmd9PlxuICAgICAgICAgIHt0ZWFtICYmIE9iamVjdC5rZXlzKHRlYW0pLmxlbmd0aCAhPT0gMCAmJiB0aGlzLnJlbmRlclBhZ2UoaXNUZWFtQWRtaW4pfVxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3Iod2l0aFRoZW1lMihUZWFtUGFnZXMpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBlcm1pc3Npb25zIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9BY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW0gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgVGVhbVBlcm1pc3Npb25zUHJvcHMgPSB7XG4gIHRlYW06IFRlYW07XG59O1xuXG4vLyBUZWFtUGVybWlzc2lvbnMgY29tcG9uZW50IHJlcGxhY2VzIFRlYW1NZW1iZXJzIGNvbXBvbmVudCB3aGVuIHRoZSBhY2Nlc3Njb250cm9sIGZlYXR1cmUgZmxhZyBpcyBzZXRcbmNvbnN0IFRlYW1QZXJtaXNzaW9ucyA9IChwcm9wczogVGVhbVBlcm1pc3Npb25zUHJvcHMpID0+IHtcbiAgY29uc3QgY2FuU2V0UGVybWlzc2lvbnMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKFxuICAgIEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1dyaXRlLFxuICAgIHByb3BzLnRlYW1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQZXJtaXNzaW9uc1xuICAgICAgdGl0bGU9XCJNZW1iZXJzXCJcbiAgICAgIGFkZFBlcm1pc3Npb25UaXRsZT1cIkFkZCBtZW1iZXJcIlxuICAgICAgYnV0dG9uTGFiZWw9XCJBZGQgbWVtYmVyXCJcbiAgICAgIHJlc291cmNlPVwidGVhbXNcIlxuICAgICAgcmVzb3VyY2VJZD17cHJvcHMudGVhbS5pZH1cbiAgICAgIGNhblNldFBlcm1pc3Npb25zPXtjYW5TZXRQZXJtaXNzaW9uc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbVBlcm1pc3Npb25zO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IElucHV0LCBGaWVsZCwgRm9ybSwgQnV0dG9uLCBGaWVsZFNldCwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNoYXJlZFByZWZlcmVuY2VzIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9TaGFyZWRQcmVmZXJlbmNlcy9TaGFyZWRQcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgVGVhbSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IHVwZGF0ZVRlYW0gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHVwZGF0ZVRlYW0sXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyB7XG4gIHRlYW06IFRlYW07XG59XG5leHBvcnQgdHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+ICYgT3duUHJvcHM7XG5cbmV4cG9ydCBjb25zdCBUZWFtU2V0dGluZ3M6IEZDPFByb3BzPiA9ICh7IHRlYW0sIHVwZGF0ZVRlYW0gfSkgPT4ge1xuICBjb25zdCBjYW5Xcml0ZVRlYW1TZXR0aW5ncyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1dyaXRlLCB0ZWFtKTtcblxuICByZXR1cm4gKFxuICAgIDxWZXJ0aWNhbEdyb3VwPlxuICAgICAgPEZpZWxkU2V0IGxhYmVsPVwiVGVhbSBzZXR0aW5nc1wiPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e3sgLi4udGVhbSB9fVxuICAgICAgICAgIG9uU3VibWl0PXsoZm9ybVRlYW06IFRlYW0pID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZVRlYW0oZm9ybVRlYW0ubmFtZSwgZm9ybVRlYW0uZW1haWwpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgZGlzYWJsZWQ9eyFjYW5Xcml0ZVRlYW1TZXR0aW5nc31cbiAgICAgICAgPlxuICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5Xcml0ZVRlYW1TZXR0aW5nc31cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgICAgZXJyb3I9XCJOYW1lIGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBpZD1cIm5hbWUtaW5wdXRcIiAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyBvcHRpb25hbCBhbmQgaXMgcHJpbWFyaWx5IHVzZWQgdG8gc2V0IHRoZSB0ZWFtIHByb2ZpbGUgYXZhdGFyICh2aWEgZ3JhdmF0YXIgc2VydmljZSkuXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhbldyaXRlVGVhbVNldHRpbmdzfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignZW1haWwnKX0gcGxhY2Vob2xkZXI9XCJ0ZWFtQGVtYWlsLmNvbVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWwtaW5wdXRcIiAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWNhbldyaXRlVGVhbVNldHRpbmdzfT5cbiAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0ZpZWxkU2V0PlxuICAgICAgPFNoYXJlZFByZWZlcmVuY2VzIHJlc291cmNlVXJpPXtgdGVhbXMvJHt0ZWFtLmlkfWB9IGRpc2FibGVkPXshY2FuV3JpdGVUZWFtU2V0dGluZ3N9IC8+XG4gICAgPC9WZXJ0aWNhbEdyb3VwPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKFRlYW1TZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVOYXZJbmRleCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0gfSBmcm9tICdhcHAvY29yZS91dGlscy9hY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW1NZW1iZXIsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHsgdGVhbUdyb3Vwc0xvYWRlZCwgdGVhbUxvYWRlZCwgdGVhbU1lbWJlcnNMb2FkZWQsIHRlYW1zTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgLy8gRWFybHkgcmV0dXJuIGlmIHRoZSB1c2VyIGNhbm5vdCBsaXN0IHRlYW1zXG4gICAgaWYgKCFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1JlYWQpKSB7XG4gICAgICBkaXNwYXRjaCh0ZWFtc0xvYWRlZChbXSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChcbiAgICAgICcvYXBpL3RlYW1zL3NlYXJjaCcsXG4gICAgICBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSh7IHBlcnBhZ2U6IDEwMDAsIHBhZ2U6IDEgfSlcbiAgICApO1xuICAgIGRpc3BhdGNoKHRlYW1zTG9hZGVkKHJlc3BvbnNlLnRlYW1zKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbShpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3RlYW1zLyR7aWR9YCwgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSk7XG4gICAgZGlzcGF0Y2godGVhbUxvYWRlZChyZXNwb25zZSkpO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwocmVzcG9uc2UpKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbU1lbWJlcnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9tZW1iZXJzYCk7XG4gICAgZGlzcGF0Y2godGVhbU1lbWJlcnNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRlYW1NZW1iZXIoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9tZW1iZXJzYCwgeyB1c2VySWQ6IGlkIH0pO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtTWVtYmVycygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRlYW1NZW1iZXIoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L21lbWJlcnMvJHtpZH1gKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbU1lbWJlcnMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZWFtKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9YCwgeyBuYW1lLCBlbWFpbCB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbSh0ZWFtLmlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbUdyb3VwcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L2dyb3Vwc2ApO1xuICAgIGRpc3BhdGNoKHRlYW1Hcm91cHNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRlYW1Hcm91cChncm91cElkOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vZ3JvdXBzYCwgeyBncm91cElkOiBncm91cElkIH0pO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtR3JvdXBzKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGVhbUdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L2dyb3Vwcy8ke2VuY29kZVVSSUNvbXBvbmVudChncm91cElkKX1gKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbUdyb3VwcygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRlYW0oaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvdGVhbXMvJHtpZH1gKTtcbiAgICAvLyBVcGRhdGUgdXNlcnMgcGVybWlzc2lvbnMgaW4gY2FzZSB0aGV5IGxvc3QgdGVhbXMucmVhZCB3aXRoIHRoZSBkZWxldGlvblxuICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbXMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZWFtTWVtYmVyKG1lbWJlcjogVGVhbU1lbWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvdGVhbXMvJHttZW1iZXIudGVhbUlkfS9tZW1iZXJzLyR7bWVtYmVyLnVzZXJJZH1gLCB7XG4gICAgICBwZXJtaXNzaW9uOiBtZW1iZXIucGVybWlzc2lvbixcbiAgICB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbU1lbWJlcnMoKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBOYXZNb2RlbEl0ZW0sIE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUHJvQmFkZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvUHJvQmFkZ2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IGhpZ2hsaWdodFRyaWFsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW0sIFRlYW1QZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5jb25zdCBsb2FkaW5nVGVhbSA9IHtcbiAgYXZhdGFyVXJsOiAncHVibGljL2ltZy91c2VyX3Byb2ZpbGUucG5nJyxcbiAgaWQ6IDEsXG4gIG5hbWU6ICdMb2FkaW5nJyxcbiAgZW1haWw6ICdsb2FkaW5nJyxcbiAgbWVtYmVyQ291bnQ6IDAsXG4gIHBlcm1pc3Npb246IFRlYW1QZXJtaXNzaW9uTGV2ZWwuTWVtYmVyLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2TW9kZWwodGVhbTogVGVhbSk6IE5hdk1vZGVsSXRlbSB7XG4gIGNvbnN0IG5hdk1vZGVsOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaW1nOiB0ZWFtLmF2YXRhclVybCxcbiAgICBpZDogJ3RlYW0tJyArIHRlYW0uaWQsXG4gICAgc3ViVGl0bGU6ICdNYW5hZ2UgbWVtYmVycyBhbmQgc2V0dGluZ3MnLFxuICAgIHVybDogJycsXG4gICAgdGV4dDogdGVhbS5uYW1lLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ1RlYW1zJywgdXJsOiAnb3JnL3RlYW1zJyB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgLy8gV2l0aCBSQkFDIHRoaXMgdGFiIHdpbGwgYWx3YXlzIGJlIGF2YWlsYWJsZSAoYnV0IG5vdCBhbHdheXMgZWRpdGFibGUpXG4gICAgICAvLyBXaXRoIExlZ2FjeSBpdCB3aWxsIGJlIGhpZGRlbiBieSBoaWRlVGFic0Zyb21Ob25UZWFtQWRtaW4gc2hvdWxkIHRoZSB1c2VyIG5vdCBiZSBhbGxvd2VkIHRvIHNlZSBpdFxuICAgICAge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBpY29uOiAnc2xpZGVycy12LWFsdCcsXG4gICAgICAgIGlkOiBgdGVhbS1zZXR0aW5ncy0ke3RlYW0uaWR9YCxcbiAgICAgICAgdGV4dDogJ1NldHRpbmdzJyxcbiAgICAgICAgdXJsOiBgb3JnL3RlYW1zL2VkaXQvJHt0ZWFtLmlkfS9zZXR0aW5nc2AsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgLy8gV2hpbGUgdGVhbSBpcyBsb2FkaW5nIHdlIGxlYXZlIHRoZSBtZW1iZXJzIHRhYlxuICAvLyBXaXRoIFJCQUMgdGhlIE1lbWJlcnMgdGFiIGlzIGF2YWlsYWJsZSB3aGVuIHVzZXIgaGFzIEFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkIGZvciB0aGlzIHRlYW1cbiAgLy8gV2l0aCBMZWdhY3kgaXQgd2lsbCBhbHdheXMgYmUgcHJlc2VudFxuICBpZiAoXG4gICAgdGVhbSA9PT0gbG9hZGluZ1RlYW0gfHxcbiAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1JlYWQsIHRlYW0pXG4gICkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS51bnNoaWZ0KHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBpY29uOiAndXNlcnMtYWx0JyxcbiAgICAgIGlkOiBgdGVhbS1tZW1iZXJzLSR7dGVhbS5pZH1gLFxuICAgICAgdGV4dDogJ01lbWJlcnMnLFxuICAgICAgdXJsOiBgb3JnL3RlYW1zL2VkaXQvJHt0ZWFtLmlkfS9tZW1iZXJzYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHRlYW1Hcm91cFN5bmM6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdzeW5jJyxcbiAgICBpZDogYHRlYW0tZ3JvdXBzeW5jLSR7dGVhbS5pZH1gLFxuICAgIHRleHQ6ICdFeHRlcm5hbCBncm91cCBzeW5jJyxcbiAgICB1cmw6IGBvcmcvdGVhbXMvZWRpdC8ke3RlYW0uaWR9L2dyb3Vwc3luY2AsXG4gIH07XG5cbiAgY29uc3QgaXNMb2FkaW5nVGVhbSA9IHRlYW0gPT09IGxvYWRpbmdUZWFtO1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpKSB7XG4gICAgdGVhbUdyb3VwU3luYy50YWJTdWZmaXggPSAoKSA9PlxuICAgICAgUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGlzTG9hZGluZ1RlYW0gPyAnJyA6ICdmZWF0dXJlLWhpZ2hsaWdodHMtdGVhbS1zeW5jLWJhZGdlJywgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgLy8gV2l0aCBib3RoIExlZ2FjeSBhbmQgUkJBQyB0aGUgdGFiIGlzIHByb3RlY3RlZCBiZWluZyBmZWF0dXJlRW5hYmxlZFxuICAvLyBXaGlsZSB0ZWFtIGlzIGxvYWRpbmcgd2UgbGVhdmUgdGhlIHRlYW1zeW5jIHRhYlxuICAvLyBXaXRoIFJCQUMgdGhlIEV4dGVybmFsIEdyb3VwIFN5bmMgdGFiIGlzIGF2YWlsYWJsZSB3aGVuIHVzZXIgaGFzIEFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkIGZvciB0aGlzIHRlYW1cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCd0ZWFtc3luYycpKSB7XG4gICAgaWYgKGlzTG9hZGluZ1RlYW0gfHwgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkLCB0ZWFtKSkge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2godGVhbUdyb3VwU3luYyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cykge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLnRlYW1Hcm91cFN5bmMsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBpc0xvYWRpbmdUZWFtID8gJycgOiAnZmVhdHVyZS1oaWdobGlnaHRzLXRlYW0tc3luYy1iYWRnZScgfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZWFtTG9hZGluZ05hdihwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0gYnVpbGROYXZNb2RlbChsb2FkaW5nVGVhbSk7XG5cbiAgbGV0IG5vZGU6IE5hdk1vZGVsSXRlbTtcblxuICAvLyBmaW5kIGFjdGl2ZSBwYWdlXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgbWFpbi5jaGlsZHJlbiEpIHtcbiAgICBpZiAoY2hpbGQuaWQhLmluZGV4T2YocGFnZU5hbWUpID4gMCkge1xuICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbixcbiAgICBub2RlOiBub2RlISxcbiAgfTtcbn1cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBUZWFtLCBUZWFtc1N0YXRlLCBUZWFtU3RhdGUsIFRlYW1NZW1iZXIsIE9yZ1JvbGUsIFRlYW1QZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUXVlcnkgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldFNlYXJjaE1lbWJlclF1ZXJ5ID0gKHN0YXRlOiBUZWFtU3RhdGUpID0+IHN0YXRlLnNlYXJjaE1lbWJlclF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldFRlYW1Hcm91cHMgPSAoc3RhdGU6IFRlYW1TdGF0ZSkgPT4gc3RhdGUuZ3JvdXBzO1xuZXhwb3J0IGNvbnN0IGdldFRlYW1zQ291bnQgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHN0YXRlLnRlYW1zLmxlbmd0aDtcbmV4cG9ydCBjb25zdCBnZXRUZWFtc1NlYXJjaFBhZ2UgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHN0YXRlLnNlYXJjaFBhZ2U7XG5cbmV4cG9ydCBjb25zdCBnZXRUZWFtID0gKHN0YXRlOiBUZWFtU3RhdGUsIGN1cnJlbnRUZWFtSWQ6IGFueSk6IFRlYW0gfCBudWxsID0+IHtcbiAgaWYgKHN0YXRlLnRlYW0uaWQgPT09IHBhcnNlSW50KGN1cnJlbnRUZWFtSWQsIDEwKSkge1xuICAgIHJldHVybiBzdGF0ZS50ZWFtO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGVhbXMgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnRlYW1zLmZpbHRlcigodGVhbSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHRlYW0ubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRlYW1NZW1iZXJzID0gKHN0YXRlOiBUZWFtU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBSZWdFeHAoc3RhdGUuc2VhcmNoTWVtYmVyUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLm1lbWJlcnMuZmlsdGVyKChtZW1iZXIpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChtZW1iZXIubG9naW4pIHx8IHJlZ2V4LnRlc3QobWVtYmVyLmVtYWlsKSB8fCByZWdleC50ZXN0KG1lbWJlci5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XG4gIG1lbWJlcnM6IFRlYW1NZW1iZXJbXTtcbiAgZWRpdG9yc0NhbkFkbWluOiBib29sZWFuO1xuICBzaWduZWRJblVzZXI6IFVzZXI7XG59XG5cbmV4cG9ydCBjb25zdCBpc1NpZ25lZEluVXNlclRlYW1BZG1pbiA9IChjb25maWc6IENvbmZpZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7IG1lbWJlcnMsIHNpZ25lZEluVXNlciwgZWRpdG9yc0NhbkFkbWluIH0gPSBjb25maWc7XG4gIGNvbnN0IHVzZXJJbk1lbWJlcnMgPSBtZW1iZXJzLmZpbmQoKG0pID0+IG0udXNlcklkID09PSBzaWduZWRJblVzZXIuaWQpO1xuICBjb25zdCBwZXJtaXNzaW9uID0gdXNlckluTWVtYmVycyA/IHVzZXJJbk1lbWJlcnMucGVybWlzc2lvbiA6IFRlYW1QZXJtaXNzaW9uTGV2ZWwuTWVtYmVyO1xuXG4gIHJldHVybiBpc1Blcm1pc3Npb25UZWFtQWRtaW4oeyBwZXJtaXNzaW9uLCBzaWduZWRJblVzZXIsIGVkaXRvcnNDYW5BZG1pbiB9KTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNvbmZpZyB7XG4gIHBlcm1pc3Npb246IFRlYW1QZXJtaXNzaW9uTGV2ZWw7XG4gIGVkaXRvcnNDYW5BZG1pbjogYm9vbGVhbjtcbiAgc2lnbmVkSW5Vc2VyOiBVc2VyO1xufVxuXG5leHBvcnQgY29uc3QgaXNQZXJtaXNzaW9uVGVhbUFkbWluID0gKGNvbmZpZzogUGVybWlzc2lvbkNvbmZpZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7IHBlcm1pc3Npb24sIHNpZ25lZEluVXNlciwgZWRpdG9yc0NhbkFkbWluIH0gPSBjb25maWc7XG4gIGNvbnN0IGlzQWRtaW4gPSBzaWduZWRJblVzZXIuaXNHcmFmYW5hQWRtaW4gfHwgc2lnbmVkSW5Vc2VyLm9yZ1JvbGUgPT09IE9yZ1JvbGUuQWRtaW47XG4gIGNvbnN0IHVzZXJJc1RlYW1BZG1pbiA9IHBlcm1pc3Npb24gPT09IFRlYW1QZXJtaXNzaW9uTGV2ZWwuQWRtaW47XG4gIGNvbnN0IGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluID0gaXNBZG1pbiB8fCB1c2VySXNUZWFtQWRtaW47XG5cbiAgcmV0dXJuIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluIHx8ICFlZGl0b3JzQ2FuQWRtaW47XG59O1xuIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIkZlYXR1cmVTdGF0ZSIsInNlbGVjdG9ycyIsImNvbmZpZyIsIkJ1dHRvbiIsIkZpZWxkIiwiRmllbGRTZXQiLCJGb3JtIiwiSWNvbiIsIkxhYmVsIiwiUmFkaW9CdXR0b25Hcm91cCIsIlNlbGVjdCIsInN0eWxlc0ZhY3RvcnkiLCJUaW1lWm9uZVBpY2tlciIsIlRvb2x0aXAiLCJXZWVrU3RhcnRQaWNrZXIiLCJGZWF0dXJlQmFkZ2UiLCJQcmVmZXJlbmNlc1NlcnZpY2UiLCJiYWNrZW5kU3J2IiwidGhlbWVzIiwidmFsdWUiLCJsYWJlbCIsImlkIiwibGFuZ3VhZ2VzIiwiaTE4bkZsYWciLCJCb29sZWFuIiwiZmVhdHVyZVRvZ2dsZXMiLCJpbnRlcm5hdGlvbmFsaXphdGlvbiIsIlNoYXJlZFByZWZlcmVuY2VzIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhvbWVEYXNoYm9hcmRJZCIsInRoZW1lIiwidGltZXpvbmUiLCJ3ZWVrU3RhcnQiLCJsb2NhbGUiLCJxdWVyeUhpc3RvcnkiLCJzdGF0ZSIsInNlcnZpY2UiLCJ1cGRhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInNldFN0YXRlIiwiZGFzaGJvYXJkSWQiLCJkYXNoYm9hcmQiLCJmb2xkZXJUaXRsZSIsInRpdGxlIiwicmVzb3VyY2VVcmkiLCJkYXNoYm9hcmRzIiwiaG9tZVRhYiIsImNvbXBvbmVudERpZE1vdW50IiwicHJlZnMiLCJsb2FkIiwic2VhcmNoIiwic3RhcnJlZCIsImRlZmF1bHREYXNoYm9hcmRIaXQiLCJ0YWdzIiwidHlwZSIsInVpZCIsInVyaSIsInVybCIsImZvbGRlcklkIiwiZm9sZGVyVWlkIiwiZm9sZGVyVXJsIiwiaXNTdGFycmVkIiwic2x1ZyIsIml0ZW1zIiwiZmluZCIsImQiLCJtaXNzaW5nIiwiZGFzaGJvYXJkSWRzIiwibGVuZ3RoIiwicHVzaCIsInJlbmRlciIsImRpc2FibGVkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaG9tZURhc2hib2FyZFRvb2x0aXAiLCJvblN1Ym1pdEZvcm0iLCJpdGVtIiwib25UaGVtZUNoYW5nZWQiLCJsYWJlbFRleHQiLCJpIiwiZ2V0RnVsbERhc2hOYW1lIiwib25Ib21lRGFzaGJvYXJkQ2hhbmdlZCIsImNvbXBvbmVudHMiLCJjb250YWluZXJWMiIsIm9uVGltZVpvbmVDaGFuZ2VkIiwib25XZWVrU3RhcnRDaGFuZ2VkIiwiYWxwaGEiLCJsYW5nIiwib25Mb2NhbGVDaGFuZ2VkIiwiVXNlclByb2ZpbGUiLCJwcmVmZXJlbmNlc1NhdmVCdXR0b24iLCJjeCIsInVzZUVmZmVjdCIsInJlcG9ydEV4cGVyaW1lbnRWaWV3IiwiTGlua0J1dHRvbiIsInVzZVN0eWxlczIiLCJVcGdyYWRlQm94IiwiZmVhdHVyZU5hbWUiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiZmVhdHVyZUlkIiwiZXZlbnRWYXJpYW50Iiwic2l6ZSIsImh0bWxQcm9wcyIsImdldFVwZ3JhZGVCb3hTdHlsZXMiLCJib3giLCJpY29uIiwiaW5uZXIiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJzaGFwZSIsImZvbnRCYXNlIiwiY29sb3JzIiwic3VjY2VzcyIsInRyYW5zcGFyZW50Iiwic3BhY2luZyIsInR5cG9ncmFwaHkiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwidmFsdWVzIiwieHhsIiwibWFpbiIsImZvbnRXZWlnaHRMaWdodCIsInByaW1hcnkiLCJVcGdyYWRlQ29udGVudCIsImxpc3RJdGVtcyIsImltYWdlIiwiZmVhdHVyZVVybCIsImRlc2NyaXB0aW9uIiwiY2FwdGlvbiIsImFjdGlvbiIsImdldFVwZ3JhZGVDb250ZW50U3R5bGVzIiwiY29udGFpbmVyIiwiY29udGVudCIsImxpc3QiLCJtYXAiLCJpbmRleCIsImxpbmsiLCJvbkNsaWNrIiwibWVkaWEiLCJnZXRJbWdVcmwiLCJtYXhDb250cmFzdCIsIlVwZ3JhZGVDb250ZW50VmVydGljYWwiLCJnZXRDb250ZW50VmVydGljYWxTdHlsZXMiLCJ1cmxPcklkIiwic3RhcnRzV2l0aCIsIldpdGhGZWF0dXJlVG9nZ2xlIiwiZmVhdHVyZVRvZ2dsZSIsImNoaWxkcmVuIiwiaXNUcmlhbCIsImV4cGlyeSIsImxpY2Vuc2VJbmZvIiwidHJpYWxFeHBpcnkiLCJoaWdobGlnaHRUcmlhbCIsImZlYXR1cmVIaWdobGlnaHRzIiwiY29ubmVjdCIsIklucHV0IiwidXNlVGhlbWUyIiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIlNsaWRlRG93biIsIkNsb3NlQnV0dG9uIiwiRW1wdHlMaXN0Q1RBIiwiYWRkVGVhbUdyb3VwIiwibG9hZFRlYW1Hcm91cHMiLCJyZW1vdmVUZWFtR3JvdXAiLCJnZXRUZWFtR3JvdXBzIiwibWFwU3RhdGVUb1Byb3BzIiwiZ3JvdXBzIiwidGVhbSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsImhlYWRlclRvb2x0aXAiLCJUZWFtR3JvdXBTeW5jIiwiaXNBZGRpbmciLCJldmVudCIsIm5ld0dyb3VwSWQiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImdyb3VwIiwiZ3JvdXBJZCIsImZldGNoVGVhbUdyb3VwcyIsImlzTmV3R3JvdXBWYWxpZCIsInJlbmRlckdyb3VwIiwiaXNSZWFkT25seSIsIndpZHRoIiwib25SZW1vdmVHcm91cCIsIm9uVG9nZ2xlQWRkaW5nIiwib25BZGRHcm91cCIsIm9uTmV3R3JvdXBJZENoYW5nZWQiLCJtYXJnaW5MZWZ0IiwiVGVhbVN5bmNVcGdyYWRlQ29udGVudCIsImlzTGlnaHQiLCJEZWxldGVCdXR0b24iLCJUYWdCYWRnZSIsInRlYW1zUGVybWlzc2lvbkxldmVscyIsInVwZGF0ZVRlYW1NZW1iZXIiLCJyZW1vdmVUZWFtTWVtYmVyIiwiVGVhbU1lbWJlclJvdyIsIm1lbWJlciIsInBlcm1pc3Npb24iLCJ1cGRhdGVkVGVhbU1lbWJlciIsInJlbmRlckxhYmVscyIsImJpbmQiLCJyZW5kZXJQZXJtaXNzaW9ucyIsIm9uUmVtb3ZlTWVtYmVyIiwidXNlcklkIiwiZWRpdG9yc0NhbkFkbWluIiwic2lnbmVkSW5Vc2VySXNUZWFtQWRtaW4iLCJkcCIsIm9uUGVybWlzc2lvbkNoYW5nZSIsIm5hbWUiLCJsYWJlbHMiLCJzeW5jRW5hYmxlZCIsImF2YXRhclVybCIsImxvZ2luIiwiZW1haWwiLCJGaWx0ZXJJbnB1dCIsIlVzZXJQaWNrZXIiLCJjb250ZXh0U3J2IiwiYWRkVGVhbU1lbWJlciIsInNldFNlYXJjaE1lbWJlclF1ZXJ5IiwiZ2V0U2VhcmNoTWVtYmVyUXVlcnkiLCJpc1NpZ25lZEluVXNlclRlYW1BZG1pbiIsInNlYXJjaE1lbWJlclF1ZXJ5Iiwic2lnbmVkSW5Vc2VyIiwidXNlciIsIlRlYW1NZW1iZXJzIiwibmV3VGVhbU1lbWJlciIsIm1lbWJlcnMiLCJpc1RlYW1BZG1pbiIsIm9uU2VhcmNoUXVlcnlDaGFuZ2UiLCJvblVzZXJTZWxlY3RlZCIsIm9uQWRkVXNlclRvVGVhbSIsImluY2x1ZGVzIiwiZmVhdHVyZUVuYWJsZWQiLCJ3aXRoVGhlbWUyIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsIlRlYW1QZXJtaXNzaW9ucyIsIlRlYW1TZXR0aW5ncyIsImxvYWRUZWFtIiwibG9hZFRlYW1NZW1iZXJzIiwiZ2V0VGVhbUxvYWRpbmdOYXYiLCJnZXRUZWFtIiwiZ2V0VGVhbU1lbWJlcnMiLCJQYWdlVHlwZXMiLCJ0ZWFtSWQiLCJwYXJzZUludCIsIm1hdGNoIiwicGFyYW1zIiwiZGVmYXVsdFBhZ2UiLCJhY2Nlc3NDb250cm9sRW5hYmxlZCIsImhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhIiwiQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1JlYWQiLCJwYWdlTmFtZSIsInBhZ2UiLCJ0ZWFtTG9hZGluZ05hdiIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJUZWFtUGFnZXMiLCJ0ZXh0MSIsInRleHQyIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJmaWx0ZXIiLCJuYXZJdGVtIiwidGV4dHNBcmVFcXVhbCIsIk1lbWJlcnMiLCJoaWRlRnJvbVRhYnMiLCJpc0xvYWRpbmciLCJpc1N5bmNFbmFibGVkIiwiZmV0Y2hUZWFtIiwiZ2V0Q3VycmVudFBhZ2UiLCJwYWdlcyIsImN1cnJlbnRQYWdlIiwicmVuZGVyUGFnZSIsImNhblJlYWRUZWFtIiwiaGFzQWNjZXNzSW5NZXRhZGF0YSIsIkFjdGlvblRlYW1zUmVhZCIsImNhblJlYWRUZWFtUGVybWlzc2lvbnMiLCJjYW5Xcml0ZVRlYW1QZXJtaXNzaW9ucyIsIkFjdGlvblRlYW1zUGVybWlzc2lvbnNXcml0ZSIsIlNldHRpbmdzIiwiR3JvdXBTeW5jIiwiaGlkZVRhYnNGcm9tTm9uVGVhbUFkbWluIiwiT2JqZWN0Iiwia2V5cyIsIlBlcm1pc3Npb25zIiwiY2FuU2V0UGVybWlzc2lvbnMiLCJWZXJ0aWNhbEdyb3VwIiwidXBkYXRlVGVhbSIsImNhbldyaXRlVGVhbVNldHRpbmdzIiwiQWN0aW9uVGVhbXNXcml0ZSIsImZvcm1UZWFtIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJyZXF1aXJlZCIsImdldEJhY2tlbmRTcnYiLCJ1cGRhdGVOYXZJbmRleCIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiYnVpbGROYXZNb2RlbCIsInRlYW1Hcm91cHNMb2FkZWQiLCJ0ZWFtTG9hZGVkIiwidGVhbU1lbWJlcnNMb2FkZWQiLCJ0ZWFtc0xvYWRlZCIsImxvYWRUZWFtcyIsImRpc3BhdGNoIiwiaGFzUGVybWlzc2lvbiIsInJlc3BvbnNlIiwiZ2V0IiwicGVycGFnZSIsInRlYW1zIiwiZ2V0U3RvcmUiLCJwb3N0IiwiZGVsZXRlIiwicHV0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVsZXRlVGVhbSIsImZldGNoVXNlclBlcm1pc3Npb25zIiwiUHJvQmFkZ2UiLCJUZWFtUGVybWlzc2lvbkxldmVsIiwibG9hZGluZ1RlYW0iLCJtZW1iZXJDb3VudCIsIk1lbWJlciIsImltZyIsInN1YlRpdGxlIiwiYnJlYWRjcnVtYnMiLCJhY3RpdmUiLCJ1bnNoaWZ0IiwidGVhbUdyb3VwU3luYyIsImlzTG9hZGluZ1RlYW0iLCJ0YWJTdWZmaXgiLCJleHBlcmltZW50SWQiLCJub2RlIiwiY2hpbGQiLCJpbmRleE9mIiwiT3JnUm9sZSIsImdldFNlYXJjaFF1ZXJ5Iiwic2VhcmNoUXVlcnkiLCJnZXRUZWFtc0NvdW50IiwiZ2V0VGVhbXNTZWFyY2hQYWdlIiwic2VhcmNoUGFnZSIsImN1cnJlbnRUZWFtSWQiLCJnZXRUZWFtcyIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsInVzZXJJbk1lbWJlcnMiLCJtIiwiaXNQZXJtaXNzaW9uVGVhbUFkbWluIiwiaXNBZG1pbiIsImlzR3JhZmFuYUFkbWluIiwib3JnUm9sZSIsIkFkbWluIiwidXNlcklzVGVhbUFkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==