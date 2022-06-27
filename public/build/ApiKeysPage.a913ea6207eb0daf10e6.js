"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ApiKeysPage"],{

/***/ "./public/app/features/api-keys/APIKeysMigratedCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIKeysMigratedCard": () => (/* binding */ APIKeysMigratedCard),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _a;






const APIKeysMigratedCard = ({
  onHideApiKeys
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
    title: "API keys were migrated to Service accounts. This tab is deprecated.",
    severity: "info",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.text,
      children: "We have upgraded your API keys into more powerful Service accounts and tokens. All your keys are safe and working - you will find them inside respective service accounts. Keys are now called tokens."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.actionRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        className: styles.actionButton,
        href: "org/serviceaccounts",
        onClick: onHideApiKeys,
        children: "Go to service accounts tab and never show API keys tab again"
      }), _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
        href: "org/serviceaccounts",
        children: "Go to service accounts tab"
      }))]
    })]
  });
};
const getStyles = theme => ({
  text: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
  `,
  actionRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    align-items: center;
  `,
  actionButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysActionBar": () => (/* binding */ ApiKeysActionBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const ApiKeysActionBar = ({
  searchQuery,
  disabled,
  onAddClick,
  onSearchChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "page-action-bar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gf-form gf-form--grow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
        placeholder: "Search keys",
        value: searchQuery,
        onChange: onSearchChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "pull-right",
      onClick: onAddClick,
      disabled: disabled,
      children: "Add API key"
    })]
  });
};

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysAddedModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysAddedModal": () => (/* binding */ ApiKeysAddedModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Alert, _p;









function ApiKeysAddedModal({
  onDismiss,
  apiKey,
  rootPath
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const getClipboardText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => apiKey, [apiKey]);

  const onClipboardCopy = () => {
    (0,_store_store__WEBPACK_IMPORTED_MODULE_5__.dispatch)((0,_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.createSuccessNotification)('Content copied to clipboard')));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: "API Key Created",
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    isOpen: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: "Key",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
        id: "Key",
        value: apiKey,
        readOnly: true,
        addonAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ClipboardButton, {
          variant: "primary",
          getText: getClipboardText,
          onClipboardCopy: onClipboardCopy,
          children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "copy"
          })), " Copy"]
        })
      })
    }), _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "info",
      title: "You will only be able to view this key here once!",
      children: "It is not stored in this form, so be sure to copy it now."
    })), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: "text-muted",
      children: "You can authenticate a request using the Authorization HTTP header, example:"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("pre", {
      className: styles.small,
      children: ["curl -H \"Authorization: Bearer ", apiKey, "\" ", rootPath, "/api/dashboards/home"]
    })]
  });
}

function getStyles(theme) {
  return {
    label: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(1)};
      background-color: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
    `,
    small: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.bodySmall.fontSize};
      font-weight: ${theme.typography.bodySmall.fontWeight};
    `
  };
}

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysController.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysController": () => (/* binding */ ApiKeysController)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

const ApiKeysController = ({
  children
}) => {
  const [isAdding, setIsAdding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleIsAdding = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsAdding(!isAdding);
  }, [isAdding]);
  return children({
    isAdding,
    toggleIsAdding
  });
};

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysForm": () => (/* binding */ ApiKeysForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var _core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _span;









const {
  Input
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;
const ROLE_OPTIONS = Object.keys(_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole).map(role => ({
  label: role,
  value: role
}));

function isValidInterval(value) {
  if (!value) {
    return true;
  }

  try {
    _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.intervalToSeconds(value);
    return true;
  } catch {}

  return false;
}

const timeRangeValidationEvents = {
  [_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.EventsWithValidation.onBlur]: [{
    rule: isValidInterval,
    errorMessage: 'Not a valid duration'
  }]
};
const tooltipText = 'The API key life duration. For example, 1d if your key is going to last for one day. Supported units are: s,m,h,d,w,M,y';
const ApiKeysForm = ({
  show,
  onClose,
  onKeyAdded,
  disabled
}) => {
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Viewer);
  const [secondsToLive, setSecondsToLive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setName('');
    setRole(_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Viewer);
    setSecondsToLive('');
  }, [show]);

  const onSubmit = event => {
    event.preventDefault();

    if (isValidInterval(secondsToLive)) {
      onKeyAdded({
        name,
        role,
        secondsToLive
      });
      onClose();
    }
  };

  const onNameChange = event => {
    setName(event.currentTarget.value);
  };

  const onRoleChange = role => {
    setRole(role.value);
  };

  const onSecondsToLiveChange = event => {
    setSecondsToLive(event.currentTarget.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_4__.SlideDown, {
    in: show,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "gf-form-inline cta-form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_3__.CloseButton, {
        onClick: onClose
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
        className: "gf-form-group",
        onSubmit: onSubmit,
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
          children: "Add API Key"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "gf-form-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "gf-form max-width-21",
            children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "gf-form-label",
              children: "Key name"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Input, {
              type: "text",
              className: "gf-form-input",
              value: name,
              placeholder: "Name",
              onChange: onNameChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
              label: "Role",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
                inputId: "role-select",
                value: role,
                onChange: onRoleChange,
                options: ROLE_OPTIONS
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form max-width-21",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
              tooltip: tooltipText,
              label: "Time to live",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Input, {
                id: "time-to-live-input",
                type: "text",
                placeholder: "1d",
                validationEvents: timeRangeValidationEvents,
                value: secondsToLive,
                onChange: onSecondsToLiveChange
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              disabled: disabled,
              children: "Add"
            })
          })]
        })]
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysPageUnconnected": () => (/* binding */ ApiKeysPageUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_features_profile_state_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/profile/state/selectors.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _APIKeysMigratedCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/api-keys/APIKeysMigratedCard.tsx");
/* harmony import */ var _ApiKeysActionBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/api-keys/ApiKeysActionBar.tsx");
/* harmony import */ var _ApiKeysAddedModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/api-keys/ApiKeysAddedModal.tsx");
/* harmony import */ var _ApiKeysController__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/api-keys/ApiKeysController.tsx");
/* harmony import */ var _ApiKeysForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/api-keys/ApiKeysForm.tsx");
/* harmony import */ var _ApiKeysTable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/api-keys/ApiKeysTable.tsx");
/* harmony import */ var _MigrateToServiceAccountsCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/api-keys/MigrateToServiceAccountsCard.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/api-keys/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/api-keys/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/api-keys/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Utils


























function mapStateToProps(state) {
  const canCreate = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.ActionAPIKeysCreate, true);
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, 'apikeys'),
    apiKeys: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_22__.getApiKeys)(state.apiKeys),
    searchQuery: state.apiKeys.searchQuery,
    apiKeysCount: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_22__.getApiKeysCount)(state.apiKeys),
    hasFetched: state.apiKeys.hasFetched,
    timeZone: (0,app_features_profile_state_selectors__WEBPACK_IMPORTED_MODULE_10__.getTimeZone)(state.user),
    includeExpired: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_22__.getIncludeExpired)(state.apiKeys),
    includeExpiredDisabled: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_22__.getIncludeExpiredDisabled)(state.apiKeys),
    canCreate: canCreate,
    apiKeysMigrated: state.apiKeys.apiKeysMigrated
  };
}

const mapDispatchToProps = {
  loadApiKeys: _state_actions__WEBPACK_IMPORTED_MODULE_20__.loadApiKeys,
  deleteApiKey: _state_actions__WEBPACK_IMPORTED_MODULE_20__.deleteApiKey,
  migrateApiKey: _state_actions__WEBPACK_IMPORTED_MODULE_20__.migrateApiKey,
  migrateAll: _state_actions__WEBPACK_IMPORTED_MODULE_20__.migrateAll,
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_21__.setSearchQuery,
  toggleIncludeExpired: _state_actions__WEBPACK_IMPORTED_MODULE_20__.toggleIncludeExpired,
  addApiKey: _state_actions__WEBPACK_IMPORTED_MODULE_20__.addApiKey,
  getApiKeysMigrationStatus: _state_actions__WEBPACK_IMPORTED_MODULE_20__.getApiKeysMigrationStatus,
  hideApiKeys: _state_actions__WEBPACK_IMPORTED_MODULE_20__.hideApiKeys
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class ApiKeysPageUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDeleteApiKey", key => {
      this.props.deleteApiKey(key.id);
    });

    _defineProperty(this, "onMigrateAll", () => {
      this.props.migrateAll();
    });

    _defineProperty(this, "onMigrateApiKey", key => {
      this.props.migrateApiKey(key.id);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchQuery(value);
    });

    _defineProperty(this, "onIncludeExpiredChange", event => {
      this.props.toggleIncludeExpired();
    });

    _defineProperty(this, "onAddApiKey", newApiKey => {
      const openModal = apiKey => {
        const rootPath = window.location.origin + app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].appSubUrl;
        app_core_app_events__WEBPACK_IMPORTED_MODULE_4__["default"].publish(new app_types_events__WEBPACK_IMPORTED_MODULE_12__.ShowModalReactEvent({
          props: {
            apiKey,
            rootPath
          },
          component: _ApiKeysAddedModal__WEBPACK_IMPORTED_MODULE_15__.ApiKeysAddedModal
        }));
      };

      const secondsToLive = newApiKey.secondsToLive;

      try {
        const secondsToLiveAsNumber = secondsToLive ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(secondsToLive) : null;
        const apiKey = Object.assign({}, newApiKey, {
          secondsToLive: secondsToLiveAsNumber
        });
        this.props.addApiKey(apiKey, openModal);
        this.setState(prevState => {
          return Object.assign({}, prevState, {
            isAdding: false
          });
        });
      } catch (err) {
        console.error(err);
      }
    });

    _defineProperty(this, "onHideApiKeys", async () => {
      await this.props.hideApiKeys();
      window.location.reload();
    });
  }

  componentDidMount() {
    this.fetchApiKeys();
    this.props.getApiKeysMigrationStatus();
  }

  async fetchApiKeys() {
    await this.props.loadApiKeys();
  }

  render() {
    const {
      hasFetched,
      navModel,
      apiKeysCount,
      apiKeys,
      searchQuery,
      timeZone,
      includeExpired,
      includeExpiredDisabled,
      canCreate,
      apiKeysMigrated
    } = this.props;

    if (!hasFetched) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
        navModel: navModel,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
          isLoading: true
        })
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
        isLoading: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_ApiKeysController__WEBPACK_IMPORTED_MODULE_16__.ApiKeysController, {
          children: ({
            isAdding,
            toggleIsAdding
          }) => {
            const showCTA = !isAdding && apiKeysCount === 0 && !apiKeysMigrated;
            const showTable = apiKeysCount > 0;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.Fragment, {
              children: [app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].featureToggles.serviceAccounts && !apiKeysMigrated && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_MigrateToServiceAccountsCard__WEBPACK_IMPORTED_MODULE_19__.MigrateToServiceAccountsCard, {
                onMigrate: this.onMigrateAll
              }), app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].featureToggles.serviceAccounts && apiKeysMigrated && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_APIKeysMigratedCard__WEBPACK_IMPORTED_MODULE_13__.APIKeysMigratedCard, {
                onHideApiKeys: this.onHideApiKeys
              }), showCTA ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__["default"], {
                title: "You haven't added any API keys yet.",
                buttonIcon: "key-skeleton-alt",
                onClick: toggleIsAdding,
                buttonTitle: "New API key",
                proTip: "Remember, you can provide view-only API access to other applications.",
                buttonDisabled: !canCreate
              }) : null, showTable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_ApiKeysActionBar__WEBPACK_IMPORTED_MODULE_14__.ApiKeysActionBar, {
                searchQuery: searchQuery,
                disabled: isAdding || !canCreate,
                onAddClick: toggleIsAdding,
                onSearchChange: this.onSearchQueryChange
              }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_ApiKeysForm__WEBPACK_IMPORTED_MODULE_17__.ApiKeysForm, {
                show: isAdding,
                onClose: toggleIsAdding,
                onKeyAdded: this.onAddApiKey,
                disabled: !canCreate
              }), showTable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
                  disabled: includeExpiredDisabled,
                  label: "Include expired keys",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
                    id: "showExpired",
                    value: includeExpired,
                    onChange: this.onIncludeExpiredChange
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_ApiKeysTable__WEBPACK_IMPORTED_MODULE_18__.ApiKeysTable, {
                  apiKeys: apiKeys,
                  timeZone: timeZone,
                  onMigrate: this.onMigrateApiKey,
                  onDelete: this.onDeleteApiKey
                })]
              }) : null]
            });
          }
        })
      })
    });
  }

}
const ApiKeysPage = connector(ApiKeysPageUnconnected);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiKeysPage);

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysTable": () => (/* binding */ ApiKeysTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3;










const ApiKeysTable = ({
  apiKeys,
  timeZone,
  onDelete,
  onMigrate
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = getStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
    className: "filter-table",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
        children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
          children: "Name"
        })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
          children: "Role"
        })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
          children: "Expires"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
          style: {
            width: '34px'
          }
        })]
      })
    }), apiKeys.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
      children: apiKeys.map(key => {
        const isExpired = Boolean(key.expiration && Date.now() > new Date(key.expiration).getTime());
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
          className: styles.tableRow(isExpired),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
            children: key.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
            children: key.role
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
            children: [formatDate(key.expiration, timeZone), isExpired && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
              className: styles.tooltipContainer,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                content: "This API key has expired.",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                  name: 'exclamation-triangle'
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
              justify: "flex-end",
              children: [_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.serviceAccounts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
                size: "sm",
                onClick: () => onMigrate(key),
                children: "Migrate"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.DeleteButton, {
                "aria-label": "Delete API key",
                size: "sm",
                onConfirm: () => onDelete(key),
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ActionAPIKeysDelete, key)
              })]
            })
          })]
        }, key.id);
      })
    }) : null]
  });
};

function formatDate(expiration, timeZone) {
  if (!expiration) {
    return 'No expiration date';
  }

  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(expiration, {
    timeZone
  });
}

const getStyles = theme => ({
  tableRow: isExpired => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${isExpired ? theme.colors.text.secondary : theme.colors.text.primary};
  `,
  tooltipContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/api-keys/MigrateToServiceAccountsCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MigrateToServiceAccountsCard": () => (/* binding */ MigrateToServiceAccountsCard),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;






const MigrateToServiceAccountsCard = ({
  onMigrate,
  disabled
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
    title: "Switch from API keys to Service accounts",
    severity: "info",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.text,
      children: "Service accounts give you more control. API keys will be automatically migrated into tokens inside respective service accounts. The current API keys will still work, but will be called tokens and you will find them in the detail view of a respective service account."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.actionRow,
      children: [!disabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: styles.actionButton,
        onClick: onMigrate,
        children: "Migrate now"
      }), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        children: "Read more about Service accounts and how to turn them on"
      }))]
    })]
  });
};
const getStyles = theme => ({
  text: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
  `,
  actionRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    align-items: center;
  `,
  actionButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/api-keys/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addApiKey": () => (/* binding */ addApiKey),
/* harmony export */   "deleteApiKey": () => (/* binding */ deleteApiKey),
/* harmony export */   "getApiKeysMigrationStatus": () => (/* binding */ getApiKeysMigrationStatus),
/* harmony export */   "hideApiKeys": () => (/* binding */ hideApiKeys),
/* harmony export */   "loadApiKeys": () => (/* binding */ loadApiKeys),
/* harmony export */   "migrateAll": () => (/* binding */ migrateAll),
/* harmony export */   "migrateApiKey": () => (/* binding */ migrateApiKey),
/* harmony export */   "toggleIncludeExpired": () => (/* binding */ toggleIncludeExpired)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_features_serviceaccounts_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/serviceaccounts/constants.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/api-keys/state/reducers.ts");





function addApiKey(apiKey, openModal) {
  return async dispatch => {
    const result = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post('/api/auth/keys', apiKey);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.setSearchQuery)(''));
    dispatch(loadApiKeys());
    openModal(result.key);
  };
}
function loadApiKeys() {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.isFetching)());
    const [keys, keysIncludingExpired] = await Promise.all([(0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get('/api/auth/keys?includeExpired=false&accesscontrol=true'), (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get('/api/auth/keys?includeExpired=true&accesscontrol=true')]);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.apiKeysLoaded)({
      keys,
      keysIncludingExpired
    }));
  };
}
function deleteApiKey(id) {
  return async dispatch => {
    (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`/api/auth/keys/${id}`).then(() => dispatch(loadApiKeys()));
  };
}
function migrateApiKey(id) {
  return async dispatch => {
    try {
      await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post(`/api/serviceaccounts/migrate/${id}`);
    } finally {
      dispatch(loadApiKeys());
    }
  };
}
function migrateAll() {
  return async dispatch => {
    try {
      await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post('/api/serviceaccounts/migrate');
      app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].set(app_features_serviceaccounts_constants__WEBPACK_IMPORTED_MODULE_3__.API_KEYS_MIGRATION_INFO_STORAGE_KEY, true);
    } finally {
      dispatch(getApiKeysMigrationStatus());
      dispatch(loadApiKeys());
    }
  };
}
function getApiKeysMigrationStatus() {
  return async dispatch => {
    // TODO: remove when service account enabled by default (or use another way to detect if it's enabled)
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.serviceAccounts) {
      const result = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get('/api/serviceaccounts/migrationstatus');
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.apiKeysMigrationStatusLoaded)(!!(result !== null && result !== void 0 && result.migrated)));
    }
  };
}
function hideApiKeys() {
  return async dispatch => {
    await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post('/api/serviceaccounts/hideApiKeys');
  };
}
function toggleIncludeExpired() {
  return dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_4__.includeExpiredToggled)());
  };
}

/***/ }),

/***/ "./public/app/features/api-keys/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApiKeys": () => (/* binding */ getApiKeys),
/* harmony export */   "getApiKeysCount": () => (/* binding */ getApiKeysCount),
/* harmony export */   "getIncludeExpired": () => (/* binding */ getIncludeExpired),
/* harmony export */   "getIncludeExpiredDisabled": () => (/* binding */ getIncludeExpiredDisabled)
/* harmony export */ });
const getApiKeysCount = state => state.includeExpired ? state.keysIncludingExpired.length : state.keys.length;
const getApiKeys = state => {
  const regex = RegExp(state.searchQuery, 'i');
  const keysToFilter = state.includeExpired ? state.keysIncludingExpired : state.keys;
  return keysToFilter.filter(key => {
    return regex.test(key.name) || regex.test(key.role);
  });
};
const getIncludeExpired = state => state.includeExpired;
const getIncludeExpiredDisabled = state => state.keys.length === 0 && state.keysIncludingExpired.length > 0;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNJLElBQU4sQ0FBV3pFLEdBQUcsQ0FBQzFFLElBQWYsQ0FBL0I7RUFDRCxDQUZNLENBQVA7QUFHRCxDQVBNO0FBU0EsTUFBTW9ELGlCQUFpQixHQUFJRyxLQUFELElBQXlCQSxLQUFLLENBQUNXLGNBQXpEO0FBRUEsTUFBTWIseUJBQXlCLEdBQUlFLEtBQUQsSUFDdkNBLEtBQUssQ0FBQ3pELElBQU4sQ0FBV21ILE1BQVgsS0FBc0IsQ0FBdEIsSUFBMkIxRCxLQUFLLENBQUNnRixvQkFBTixDQUEyQnRCLE1BQTNCLEdBQW9DLENBRDFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvQVBJS2V5c01pZ3JhdGVkQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvQXBpS2V5c0FjdGlvbkJhci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvQXBpS2V5c0FkZGVkTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FwaS1rZXlzL0FwaUtleXNDb250cm9sbGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hcGkta2V5cy9BcGlLZXlzRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvQXBpS2V5c1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FwaS1rZXlzL0FwaUtleXNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvTWlncmF0ZVRvU2VydmljZUFjY291bnRzQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hcGkta2V5cy9zdGF0ZS9zZWxlY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkhpZGVBcGlLZXlzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQVBJS2V5c01pZ3JhdGVkQ2FyZCA9ICh7IG9uSGlkZUFwaUtleXMgfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxBbGVydCB0aXRsZT1cIkFQSSBrZXlzIHdlcmUgbWlncmF0ZWQgdG8gU2VydmljZSBhY2NvdW50cy4gVGhpcyB0YWIgaXMgZGVwcmVjYXRlZC5cIiBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgIFdlIGhhdmUgdXBncmFkZWQgeW91ciBBUEkga2V5cyBpbnRvIG1vcmUgcG93ZXJmdWwgU2VydmljZSBhY2NvdW50cyBhbmQgdG9rZW5zLiBBbGwgeW91ciBrZXlzIGFyZSBzYWZlIGFuZFxuICAgICAgICB3b3JraW5nIC0geW91IHdpbGwgZmluZCB0aGVtIGluc2lkZSByZXNwZWN0aXZlIHNlcnZpY2UgYWNjb3VudHMuIEtleXMgYXJlIG5vdyBjYWxsZWQgdG9rZW5zLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvblJvd30+XG4gICAgICAgIDxMaW5rQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJ1dHRvbn0gaHJlZj1cIm9yZy9zZXJ2aWNlYWNjb3VudHNcIiBvbkNsaWNrPXtvbkhpZGVBcGlLZXlzfT5cbiAgICAgICAgICBHbyB0byBzZXJ2aWNlIGFjY291bnRzIHRhYiBhbmQgbmV2ZXIgc2hvdyBBUEkga2V5cyB0YWIgYWdhaW5cbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICA8YSBocmVmPVwib3JnL3NlcnZpY2VhY2NvdW50c1wiPkdvIHRvIHNlcnZpY2UgYWNjb3VudHMgdGFiPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9BbGVydD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHRleHQ6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICBgLFxuICBhY3Rpb25Sb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG4gIGFjdGlvbkJ1dHRvbjogY3NzYFxuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24sIEZpbHRlcklucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25BZGRDbGljazogKCkgPT4gdm9pZDtcbiAgb25TZWFyY2hDaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQXBpS2V5c0FjdGlvbkJhcjogRkM8UHJvcHM+ID0gKHsgc2VhcmNoUXVlcnksIGRpc2FibGVkLCBvbkFkZENsaWNrLCBvblNlYXJjaENoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgIDxGaWx0ZXJJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBrZXlzXCIgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17b25TZWFyY2hDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIG9uQ2xpY2s9e29uQWRkQ2xpY2t9IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgIEFkZCBBUEkga2V5XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgRmllbGQsIE1vZGFsLCB1c2VTdHlsZXMyLCBJbnB1dCwgSWNvbiwgQ2xpcGJvYXJkQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICcuLi8uLi9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gIGFwaUtleTogc3RyaW5nO1xuICByb290UGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBpS2V5c0FkZGVkTW9kYWwoeyBvbkRpc21pc3MsIGFwaUtleSwgcm9vdFBhdGggfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZ2V0Q2xpcGJvYXJkVGV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IGFwaUtleSwgW2FwaUtleV0pO1xuICBjb25zdCBvbkNsaXBib2FyZENvcHkgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24oJ0NvbnRlbnQgY29waWVkIHRvIGNsaXBib2FyZCcpKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHRpdGxlPVwiQVBJIEtleSBDcmVhdGVkXCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IG9uQ2xpY2tCYWNrZHJvcD17b25EaXNtaXNzfSBpc09wZW4+XG4gICAgICA8RmllbGQgbGFiZWw9XCJLZXlcIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWQ9XCJLZXlcIlxuICAgICAgICAgIHZhbHVlPXthcGlLZXl9XG4gICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICBhZGRvbkFmdGVyPXtcbiAgICAgICAgICAgIDxDbGlwYm9hcmRCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBnZXRUZXh0PXtnZXRDbGlwYm9hcmRUZXh0fSBvbkNsaXBib2FyZENvcHk9e29uQ2xpcGJvYXJkQ29weX0+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb3B5XCIgLz4gQ29weVxuICAgICAgICAgICAgPC9DbGlwYm9hcmRCdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIllvdSB3aWxsIG9ubHkgYmUgYWJsZSB0byB2aWV3IHRoaXMga2V5IGhlcmUgb25jZSFcIj5cbiAgICAgICAgSXQgaXMgbm90IHN0b3JlZCBpbiB0aGlzIGZvcm0sIHNvIGJlIHN1cmUgdG8gY29weSBpdCBub3cuXG4gICAgICA8L0FsZXJ0PlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+WW91IGNhbiBhdXRoZW50aWNhdGUgYSByZXF1ZXN0IHVzaW5nIHRoZSBBdXRob3JpemF0aW9uIEhUVFAgaGVhZGVyLCBleGFtcGxlOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGx9PlxuICAgICAgICBjdXJsIC1IICZxdW90O0F1dGhvcml6YXRpb246IEJlYXJlciB7YXBpS2V5fSZxdW90OyB7cm9vdFBhdGh9L2FwaS9kYXNoYm9hcmRzL2hvbWVcbiAgICAgIDwvcHJlPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gICAgYCxcbiAgICBzbWFsbDogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRXZWlnaHR9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQXBpIHtcbiAgaXNBZGRpbmc6IGJvb2xlYW47XG4gIHRvZ2dsZUlzQWRkaW5nOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogKHByb3BzOiBBcGkpID0+IEpTWC5FbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgQXBpS2V5c0NvbnRyb2xsZXI6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzQWRkaW5nLCBzZXRJc0FkZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZUlzQWRkaW5nID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzQWRkaW5nKCFpc0FkZGluZyk7XG4gIH0sIFtpc0FkZGluZ10pO1xuXG4gIHJldHVybiBjaGlsZHJlbih7IGlzQWRkaW5nLCB0b2dnbGVJc0FkZGluZyB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIEZDLCBGb3JtRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHJhbmdlVXRpbCwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBFdmVudHNXaXRoVmFsaWRhdGlvbiwgTGVnYWN5Rm9ybXMsIFZhbGlkYXRpb25FdmVudHMsIEJ1dHRvbiwgU2VsZWN0LCBJbmxpbmVGaWVsZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9DbG9zZUJ1dHRvbi9DbG9zZUJ1dHRvbic7XG5cbmltcG9ydCB7IFNsaWRlRG93biB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9BbmltYXRpb25zL1NsaWRlRG93bic7XG5pbXBvcnQgeyBOZXdBcGlLZXksIE9yZ1JvbGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IHsgSW5wdXQgfSA9IExlZ2FjeUZvcm1zO1xuY29uc3QgUk9MRV9PUFRJT05TOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8T3JnUm9sZT4+ID0gT2JqZWN0LmtleXMoT3JnUm9sZSkubWFwKChyb2xlKSA9PiAoe1xuICBsYWJlbDogcm9sZSxcbiAgdmFsdWU6IHJvbGUgYXMgT3JnUm9sZSxcbn0pKTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25LZXlBZGRlZDogKGFwaUtleTogTmV3QXBpS2V5KSA9PiB2b2lkO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEludGVydmFsKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRyeSB7XG4gICAgcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKHZhbHVlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCB7fVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IHRpbWVSYW5nZVZhbGlkYXRpb25FdmVudHM6IFZhbGlkYXRpb25FdmVudHMgPSB7XG4gIFtFdmVudHNXaXRoVmFsaWRhdGlvbi5vbkJsdXJdOiBbXG4gICAge1xuICAgICAgcnVsZTogaXNWYWxpZEludGVydmFsLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnTm90IGEgdmFsaWQgZHVyYXRpb24nLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCB0b29sdGlwVGV4dCA9XG4gICdUaGUgQVBJIGtleSBsaWZlIGR1cmF0aW9uLiBGb3IgZXhhbXBsZSwgMWQgaWYgeW91ciBrZXkgaXMgZ29pbmcgdG8gbGFzdCBmb3Igb25lIGRheS4gU3VwcG9ydGVkIHVuaXRzIGFyZTogcyxtLGgsZCx3LE0seSc7XG5cbmV4cG9ydCBjb25zdCBBcGlLZXlzRm9ybTogRkM8UHJvcHM+ID0gKHsgc2hvdywgb25DbG9zZSwgb25LZXlBZGRlZCwgZGlzYWJsZWQgfSkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGU8T3JnUm9sZT4oT3JnUm9sZS5WaWV3ZXIpO1xuICBjb25zdCBbc2Vjb25kc1RvTGl2ZSwgc2V0U2Vjb25kc1RvTGl2ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXROYW1lKCcnKTtcbiAgICBzZXRSb2xlKE9yZ1JvbGUuVmlld2VyKTtcbiAgICBzZXRTZWNvbmRzVG9MaXZlKCcnKTtcbiAgfSwgW3Nob3ddKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaXNWYWxpZEludGVydmFsKHNlY29uZHNUb0xpdmUpKSB7XG4gICAgICBvbktleUFkZGVkKHsgbmFtZSwgcm9sZSwgc2Vjb25kc1RvTGl2ZSB9KTtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uTmFtZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXROYW1lKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBvblJvbGVDaGFuZ2UgPSAocm9sZTogU2VsZWN0YWJsZVZhbHVlPE9yZ1JvbGU+KSA9PiB7XG4gICAgc2V0Um9sZShyb2xlLnZhbHVlISk7XG4gIH07XG4gIGNvbnN0IG9uU2Vjb25kc1RvTGl2ZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRTZWNvbmRzVG9MaXZlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlRG93biBpbj17c2hvd30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lIGN0YS1mb3JtXCI+XG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8aDU+QWRkIEFQSSBLZXk8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBtYXgtd2lkdGgtMjFcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbFwiPktleSBuYW1lPC9zcGFuPlxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJnZi1mb3JtLWlucHV0XCIgdmFsdWU9e25hbWV9IHBsYWNlaG9sZGVyPVwiTmFtZVwiIG9uQ2hhbmdlPXtvbk5hbWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJSb2xlXCI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdCBpbnB1dElkPVwicm9sZS1zZWxlY3RcIiB2YWx1ZT17cm9sZX0gb25DaGFuZ2U9e29uUm9sZUNoYW5nZX0gb3B0aW9ucz17Uk9MRV9PUFRJT05TfSAvPlxuICAgICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gbWF4LXdpZHRoLTIxXCI+XG4gICAgICAgICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPXt0b29sdGlwVGV4dH0gbGFiZWw9XCJUaW1lIHRvIGxpdmVcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwidGltZS10by1saXZlLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWRcIlxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkV2ZW50cz17dGltZVJhbmdlVmFsaWRhdGlvbkV2ZW50c31cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWNvbmRzVG9MaXZlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU2Vjb25kc1RvTGl2ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9TbGlkZURvd24+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gVXRpbHNcbmltcG9ydCB7IHJhbmdlVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZVN3aXRjaCwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBnZXRUaW1lWm9uZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wcm9maWxlL3N0YXRlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBBcGlLZXksIE5ld0FwaUtleSwgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBTaG93TW9kYWxSZWFjdEV2ZW50IH0gZnJvbSAnYXBwL3R5cGVzL2V2ZW50cyc7XG5cbmltcG9ydCB7IEFQSUtleXNNaWdyYXRlZENhcmQgfSBmcm9tICcuL0FQSUtleXNNaWdyYXRlZENhcmQnO1xuaW1wb3J0IHsgQXBpS2V5c0FjdGlvbkJhciB9IGZyb20gJy4vQXBpS2V5c0FjdGlvbkJhcic7XG5pbXBvcnQgeyBBcGlLZXlzQWRkZWRNb2RhbCB9IGZyb20gJy4vQXBpS2V5c0FkZGVkTW9kYWwnO1xuaW1wb3J0IHsgQXBpS2V5c0NvbnRyb2xsZXIgfSBmcm9tICcuL0FwaUtleXNDb250cm9sbGVyJztcbmltcG9ydCB7IEFwaUtleXNGb3JtIH0gZnJvbSAnLi9BcGlLZXlzRm9ybSc7XG5pbXBvcnQgeyBBcGlLZXlzVGFibGUgfSBmcm9tICcuL0FwaUtleXNUYWJsZSc7XG5pbXBvcnQgeyBNaWdyYXRlVG9TZXJ2aWNlQWNjb3VudHNDYXJkIH0gZnJvbSAnLi9NaWdyYXRlVG9TZXJ2aWNlQWNjb3VudHNDYXJkJztcbmltcG9ydCB7XG4gIGFkZEFwaUtleSxcbiAgZGVsZXRlQXBpS2V5LFxuICBtaWdyYXRlQXBpS2V5LFxuICBtaWdyYXRlQWxsLFxuICBsb2FkQXBpS2V5cyxcbiAgdG9nZ2xlSW5jbHVkZUV4cGlyZWQsXG4gIGdldEFwaUtleXNNaWdyYXRpb25TdGF0dXMsXG4gIGhpZGVBcGlLZXlzLFxufSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0U2VhcmNoUXVlcnkgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7IGdldEFwaUtleXMsIGdldEFwaUtleXNDb3VudCwgZ2V0SW5jbHVkZUV4cGlyZWQsIGdldEluY2x1ZGVFeHBpcmVkRGlzYWJsZWQgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICBjb25zdCBjYW5DcmVhdGUgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvbkFQSUtleXNDcmVhdGUsIHRydWUpO1xuXG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnYXBpa2V5cycpLFxuICAgIGFwaUtleXM6IGdldEFwaUtleXMoc3RhdGUuYXBpS2V5cyksXG4gICAgc2VhcmNoUXVlcnk6IHN0YXRlLmFwaUtleXMuc2VhcmNoUXVlcnksXG4gICAgYXBpS2V5c0NvdW50OiBnZXRBcGlLZXlzQ291bnQoc3RhdGUuYXBpS2V5cyksXG4gICAgaGFzRmV0Y2hlZDogc3RhdGUuYXBpS2V5cy5oYXNGZXRjaGVkLFxuICAgIHRpbWVab25lOiBnZXRUaW1lWm9uZShzdGF0ZS51c2VyKSxcbiAgICBpbmNsdWRlRXhwaXJlZDogZ2V0SW5jbHVkZUV4cGlyZWQoc3RhdGUuYXBpS2V5cyksXG4gICAgaW5jbHVkZUV4cGlyZWREaXNhYmxlZDogZ2V0SW5jbHVkZUV4cGlyZWREaXNhYmxlZChzdGF0ZS5hcGlLZXlzKSxcbiAgICBjYW5DcmVhdGU6IGNhbkNyZWF0ZSxcbiAgICBhcGlLZXlzTWlncmF0ZWQ6IHN0YXRlLmFwaUtleXMuYXBpS2V5c01pZ3JhdGVkLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRBcGlLZXlzLFxuICBkZWxldGVBcGlLZXksXG4gIG1pZ3JhdGVBcGlLZXksXG4gIG1pZ3JhdGVBbGwsXG4gIHNldFNlYXJjaFF1ZXJ5LFxuICB0b2dnbGVJbmNsdWRlRXhwaXJlZCxcbiAgYWRkQXBpS2V5LFxuICBnZXRBcGlLZXlzTWlncmF0aW9uU3RhdHVzLFxuICBoaWRlQXBpS2V5cyxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge31cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpc0FkZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEFwaUtleXNQYWdlVW5jb25uZWN0ZWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoQXBpS2V5cygpO1xuICAgIHRoaXMucHJvcHMuZ2V0QXBpS2V5c01pZ3JhdGlvblN0YXR1cygpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hBcGlLZXlzKCkge1xuICAgIGF3YWl0IHRoaXMucHJvcHMubG9hZEFwaUtleXMoKTtcbiAgfVxuXG4gIG9uRGVsZXRlQXBpS2V5ID0gKGtleTogQXBpS2V5KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVBcGlLZXkoa2V5LmlkISk7XG4gIH07XG5cbiAgb25NaWdyYXRlQWxsID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubWlncmF0ZUFsbCgpO1xuICB9O1xuXG4gIG9uTWlncmF0ZUFwaUtleSA9IChrZXk6IEFwaUtleSkgPT4ge1xuICAgIHRoaXMucHJvcHMubWlncmF0ZUFwaUtleShrZXkuaWQhKTtcbiAgfTtcblxuICBvblNlYXJjaFF1ZXJ5Q2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldFNlYXJjaFF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICBvbkluY2x1ZGVFeHBpcmVkQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMudG9nZ2xlSW5jbHVkZUV4cGlyZWQoKTtcbiAgfTtcblxuICBvbkFkZEFwaUtleSA9IChuZXdBcGlLZXk6IE5ld0FwaUtleSkgPT4ge1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IChhcGlLZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgcm9vdFBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgY29uZmlnLmFwcFN1YlVybDtcblxuICAgICAgYXBwRXZlbnRzLnB1Ymxpc2goXG4gICAgICAgIG5ldyBTaG93TW9kYWxSZWFjdEV2ZW50KHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYXBpS2V5LFxuICAgICAgICAgICAgcm9vdFBhdGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wb25lbnQ6IEFwaUtleXNBZGRlZE1vZGFsLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2Vjb25kc1RvTGl2ZSA9IG5ld0FwaUtleS5zZWNvbmRzVG9MaXZlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZWNvbmRzVG9MaXZlQXNOdW1iZXIgPSBzZWNvbmRzVG9MaXZlID8gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKHNlY29uZHNUb0xpdmUpIDogbnVsbDtcbiAgICAgIGNvbnN0IGFwaUtleTogQXBpS2V5ID0ge1xuICAgICAgICAuLi5uZXdBcGlLZXksXG4gICAgICAgIHNlY29uZHNUb0xpdmU6IHNlY29uZHNUb0xpdmVBc051bWJlcixcbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLmFkZEFwaUtleShhcGlLZXksIG9wZW5Nb2RhbCk7XG4gICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGU6IFN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIGlzQWRkaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICBvbkhpZGVBcGlLZXlzID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRoaXMucHJvcHMuaGlkZUFwaUtleXMoKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhhc0ZldGNoZWQsXG4gICAgICBuYXZNb2RlbCxcbiAgICAgIGFwaUtleXNDb3VudCxcbiAgICAgIGFwaUtleXMsXG4gICAgICBzZWFyY2hRdWVyeSxcbiAgICAgIHRpbWVab25lLFxuICAgICAgaW5jbHVkZUV4cGlyZWQsXG4gICAgICBpbmNsdWRlRXhwaXJlZERpc2FibGVkLFxuICAgICAgY2FuQ3JlYXRlLFxuICAgICAgYXBpS2V5c01pZ3JhdGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFoYXNGZXRjaGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17dHJ1ZX0+e308L1BhZ2UuQ29udGVudHM+XG4gICAgICAgIDwvUGFnZT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17ZmFsc2V9PlxuICAgICAgICAgIDxBcGlLZXlzQ29udHJvbGxlcj5cbiAgICAgICAgICAgIHsoeyBpc0FkZGluZywgdG9nZ2xlSXNBZGRpbmcgfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzaG93Q1RBID0gIWlzQWRkaW5nICYmIGFwaUtleXNDb3VudCA9PT0gMCAmJiAhYXBpS2V5c01pZ3JhdGVkO1xuICAgICAgICAgICAgICBjb25zdCBzaG93VGFibGUgPSBhcGlLZXlzQ291bnQgPiAwO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7LyogVE9ETzogcmVtb3ZlIGZlYXR1cmUgZmxhZyBjaGVjayBiZWZvcmUgR0EgKi99XG4gICAgICAgICAgICAgICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLnNlcnZpY2VBY2NvdW50cyAmJiAhYXBpS2V5c01pZ3JhdGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE1pZ3JhdGVUb1NlcnZpY2VBY2NvdW50c0NhcmQgb25NaWdyYXRlPXt0aGlzLm9uTWlncmF0ZUFsbH0gLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLnNlcnZpY2VBY2NvdW50cyAmJiBhcGlLZXlzTWlncmF0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QVBJS2V5c01pZ3JhdGVkQ2FyZCBvbkhpZGVBcGlLZXlzPXt0aGlzLm9uSGlkZUFwaUtleXN9IC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3Nob3dDVEEgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eUxpc3RDVEFcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdSBoYXZlbid0IGFkZGVkIGFueSBBUEkga2V5cyB5ZXQuXCJcbiAgICAgICAgICAgICAgICAgICAgICBidXR0b25JY29uPVwia2V5LXNrZWxldG9uLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlSXNBZGRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGl0bGU9XCJOZXcgQVBJIGtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgcHJvVGlwPVwiUmVtZW1iZXIsIHlvdSBjYW4gcHJvdmlkZSB2aWV3LW9ubHkgQVBJIGFjY2VzcyB0byBvdGhlciBhcHBsaWNhdGlvbnMuXCJcbiAgICAgICAgICAgICAgICAgICAgICBidXR0b25EaXNhYmxlZD17IWNhbkNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAge3Nob3dUYWJsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEFwaUtleXNBY3Rpb25CYXJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQWRkaW5nIHx8ICFjYW5DcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25BZGRDbGljaz17dG9nZ2xlSXNBZGRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMub25TZWFyY2hRdWVyeUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPEFwaUtleXNGb3JtXG4gICAgICAgICAgICAgICAgICAgIHNob3c9e2lzQWRkaW5nfVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0b2dnbGVJc0FkZGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25LZXlBZGRlZD17dGhpcy5vbkFkZEFwaUtleX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5DcmVhdGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3Nob3dUYWJsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFZlcnRpY2FsR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgPElubGluZUZpZWxkIGRpc2FibGVkPXtpbmNsdWRlRXhwaXJlZERpc2FibGVkfSBsYWJlbD1cIkluY2x1ZGUgZXhwaXJlZCBrZXlzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5saW5lU3dpdGNoIGlkPVwic2hvd0V4cGlyZWRcIiB2YWx1ZT17aW5jbHVkZUV4cGlyZWR9IG9uQ2hhbmdlPXt0aGlzLm9uSW5jbHVkZUV4cGlyZWRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICA8QXBpS2V5c1RhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXlzPXthcGlLZXlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVpvbmU9e3RpbWVab25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25NaWdyYXRlPXt0aGlzLm9uTWlncmF0ZUFwaUtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXt0aGlzLm9uRGVsZXRlQXBpS2V5fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L0FwaUtleXNDb250cm9sbGVyPlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBBcGlLZXlzUGFnZSA9IGNvbm5lY3RvcihBcGlLZXlzUGFnZVVuY29ubmVjdGVkKTtcbmV4cG9ydCBkZWZhdWx0IEFwaUtleXNQYWdlO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXQsIEdyYWZhbmFUaGVtZTIsIFRpbWVab25lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRGVsZXRlQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIEljb24sIEljb25OYW1lLCBUb29sdGlwLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgQXBpS2V5IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhcGlLZXlzOiBBcGlLZXlbXTtcbiAgdGltZVpvbmU6IFRpbWVab25lO1xuICBvbkRlbGV0ZTogKGFwaUtleTogQXBpS2V5KSA9PiB2b2lkO1xuICBvbk1pZ3JhdGU6IChhcGlLZXk6IEFwaUtleSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFwaUtleXNUYWJsZTogRkM8UHJvcHM+ID0gKHsgYXBpS2V5cywgdGltZVpvbmUsIG9uRGVsZXRlLCBvbk1pZ3JhdGUgfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModGhlbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZVwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgIDx0aD5Sb2xlPC90aD5cbiAgICAgICAgICA8dGg+RXhwaXJlczwvdGg+XG4gICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMzRweCcgfX0gLz5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICB7YXBpS2V5cy5sZW5ndGggPiAwID8gKFxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2FwaUtleXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzRXhwaXJlZCA9IEJvb2xlYW4oa2V5LmV4cGlyYXRpb24gJiYgRGF0ZS5ub3coKSA+IG5ldyBEYXRlKGtleS5leHBpcmF0aW9uKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17a2V5LmlkfSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvdyhpc0V4cGlyZWQpfT5cbiAgICAgICAgICAgICAgICA8dGQ+e2tleS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntrZXkucm9sZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKGtleS5leHBpcmF0aW9uLCB0aW1lWm9uZSl9XG4gICAgICAgICAgICAgICAgICB7aXNFeHBpcmVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudD1cIlRoaXMgQVBJIGtleSBoYXMgZXhwaXJlZC5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9eydleGNsYW1hdGlvbi10cmlhbmdsZScgYXMgSWNvbk5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cCBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpZy5mZWF0dXJlVG9nZ2xlcy5zZXJ2aWNlQWNjb3VudHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gb25NaWdyYXRlKGtleSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgTWlncmF0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBBUEkga2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gb25EZWxldGUoa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25BUElLZXlzRGVsZXRlLCBrZXkpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICApIDogbnVsbH1cbiAgICA8L3RhYmxlPlxuICApO1xufTtcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShleHBpcmF0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQsIHRpbWVab25lOiBUaW1lWm9uZSk6IHN0cmluZyB7XG4gIGlmICghZXhwaXJhdGlvbikge1xuICAgIHJldHVybiAnTm8gZXhwaXJhdGlvbiBkYXRlJztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQoZXhwaXJhdGlvbiwgeyB0aW1lWm9uZSB9KTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB0YWJsZVJvdzogKGlzRXhwaXJlZDogYm9vbGVhbikgPT4gY3NzYFxuICAgIGNvbG9yOiAke2lzRXhwaXJlZCA/IHRoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeSA6IHRoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICBgLFxuICB0b29sdGlwQ29udGFpbmVyOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbk1pZ3JhdGU6ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE1pZ3JhdGVUb1NlcnZpY2VBY2NvdW50c0NhcmQgPSAoeyBvbk1pZ3JhdGUsIGRpc2FibGVkIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnQgdGl0bGU9XCJTd2l0Y2ggZnJvbSBBUEkga2V5cyB0byBTZXJ2aWNlIGFjY291bnRzXCIgc2V2ZXJpdHk9XCJpbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICBTZXJ2aWNlIGFjY291bnRzIGdpdmUgeW91IG1vcmUgY29udHJvbC4gQVBJIGtleXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IG1pZ3JhdGVkIGludG8gdG9rZW5zIGluc2lkZSByZXNwZWN0aXZlXG4gICAgICAgIHNlcnZpY2UgYWNjb3VudHMuIFRoZSBjdXJyZW50IEFQSSBrZXlzIHdpbGwgc3RpbGwgd29yaywgYnV0IHdpbGwgYmUgY2FsbGVkIHRva2VucyBhbmQgeW91IHdpbGwgZmluZCB0aGVtIGluIHRoZVxuICAgICAgICBkZXRhaWwgdmlldyBvZiBhIHJlc3BlY3RpdmUgc2VydmljZSBhY2NvdW50LlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvblJvd30+XG4gICAgICAgIHshZGlzYWJsZWQgJiYgKFxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQnV0dG9ufSBvbkNsaWNrPXtvbk1pZ3JhdGV9PlxuICAgICAgICAgICAgTWlncmF0ZSBub3dcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPHNwYW4+UmVhZCBtb3JlIGFib3V0IFNlcnZpY2UgYWNjb3VudHMgYW5kIGhvdyB0byB0dXJuIHRoZW0gb248L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L0FsZXJ0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgdGV4dDogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG4gIGFjdGlvblJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYCxcbiAgYWN0aW9uQnV0dG9uOiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnYXBwL2NvcmUvc3RvcmUnO1xuaW1wb3J0IHsgQVBJX0tFWVNfTUlHUkFUSU9OX0lORk9fU1RPUkFHRV9LRVkgfSBmcm9tICdhcHAvZmVhdHVyZXMvc2VydmljZWFjY291bnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBcGlLZXksIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHtcbiAgYXBpS2V5c0xvYWRlZCxcbiAgaW5jbHVkZUV4cGlyZWRUb2dnbGVkLFxuICBpc0ZldGNoaW5nLFxuICBhcGlLZXlzTWlncmF0aW9uU3RhdHVzTG9hZGVkLFxuICBzZXRTZWFyY2hRdWVyeSxcbn0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBcGlLZXkoYXBpS2V5OiBBcGlLZXksIG9wZW5Nb2RhbDogKGtleTogc3RyaW5nKSA9PiB2b2lkKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvYXV0aC9rZXlzJywgYXBpS2V5KTtcbiAgICBkaXNwYXRjaChzZXRTZWFyY2hRdWVyeSgnJykpO1xuICAgIGRpc3BhdGNoKGxvYWRBcGlLZXlzKCkpO1xuICAgIG9wZW5Nb2RhbChyZXN1bHQua2V5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBcGlLZXlzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGlzRmV0Y2hpbmcoKSk7XG4gICAgY29uc3QgW2tleXMsIGtleXNJbmNsdWRpbmdFeHBpcmVkXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvYXV0aC9rZXlzP2luY2x1ZGVFeHBpcmVkPWZhbHNlJmFjY2Vzc2NvbnRyb2w9dHJ1ZScpLFxuICAgICAgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9hdXRoL2tleXM/aW5jbHVkZUV4cGlyZWQ9dHJ1ZSZhY2Nlc3Njb250cm9sPXRydWUnKSxcbiAgICBdKTtcbiAgICBkaXNwYXRjaChhcGlLZXlzTG9hZGVkKHsga2V5cywga2V5c0luY2x1ZGluZ0V4cGlyZWQgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQXBpS2V5KGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5kZWxldGUoYC9hcGkvYXV0aC9rZXlzLyR7aWR9YClcbiAgICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGxvYWRBcGlLZXlzKCkpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGVBcGlLZXkoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9zZXJ2aWNlYWNjb3VudHMvbWlncmF0ZS8ke2lkfWApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBkaXNwYXRjaChsb2FkQXBpS2V5cygpKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlQWxsKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9zZXJ2aWNlYWNjb3VudHMvbWlncmF0ZScpO1xuICAgICAgc3RvcmUuc2V0KEFQSV9LRVlTX01JR1JBVElPTl9JTkZPX1NUT1JBR0VfS0VZLCB0cnVlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZGlzcGF0Y2goZ2V0QXBpS2V5c01pZ3JhdGlvblN0YXR1cygpKTtcbiAgICAgIGRpc3BhdGNoKGxvYWRBcGlLZXlzKCkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwaUtleXNNaWdyYXRpb25TdGF0dXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgLy8gVE9ETzogcmVtb3ZlIHdoZW4gc2VydmljZSBhY2NvdW50IGVuYWJsZWQgYnkgZGVmYXVsdCAob3IgdXNlIGFub3RoZXIgd2F5IHRvIGRldGVjdCBpZiBpdCdzIGVuYWJsZWQpXG4gICAgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5zZXJ2aWNlQWNjb3VudHMpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvc2VydmljZWFjY291bnRzL21pZ3JhdGlvbnN0YXR1cycpO1xuICAgICAgZGlzcGF0Y2goYXBpS2V5c01pZ3JhdGlvblN0YXR1c0xvYWRlZCghIXJlc3VsdD8ubWlncmF0ZWQpKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQXBpS2V5cygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9zZXJ2aWNlYWNjb3VudHMvaGlkZUFwaUtleXMnKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUluY2x1ZGVFeHBpcmVkKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGluY2x1ZGVFeHBpcmVkVG9nZ2xlZCgpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IEFwaUtleXNTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRBcGlLZXlzQ291bnQgPSAoc3RhdGU6IEFwaUtleXNTdGF0ZSkgPT5cbiAgc3RhdGUuaW5jbHVkZUV4cGlyZWQgPyBzdGF0ZS5rZXlzSW5jbHVkaW5nRXhwaXJlZC5sZW5ndGggOiBzdGF0ZS5rZXlzLmxlbmd0aDtcblxuZXhwb3J0IGNvbnN0IGdldEFwaUtleXMgPSAoc3RhdGU6IEFwaUtleXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IFJlZ0V4cChzdGF0ZS5zZWFyY2hRdWVyeSwgJ2knKTtcbiAgY29uc3Qga2V5c1RvRmlsdGVyID0gc3RhdGUuaW5jbHVkZUV4cGlyZWQgPyBzdGF0ZS5rZXlzSW5jbHVkaW5nRXhwaXJlZCA6IHN0YXRlLmtleXM7XG5cbiAgcmV0dXJuIGtleXNUb0ZpbHRlci5maWx0ZXIoKGtleSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KGtleS5uYW1lKSB8fCByZWdleC50ZXN0KGtleS5yb2xlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0SW5jbHVkZUV4cGlyZWQgPSAoc3RhdGU6IEFwaUtleXNTdGF0ZSkgPT4gc3RhdGUuaW5jbHVkZUV4cGlyZWQ7XG5cbmV4cG9ydCBjb25zdCBnZXRJbmNsdWRlRXhwaXJlZERpc2FibGVkID0gKHN0YXRlOiBBcGlLZXlzU3RhdGUpID0+XG4gIHN0YXRlLmtleXMubGVuZ3RoID09PSAwICYmIHN0YXRlLmtleXNJbmNsdWRpbmdFeHBpcmVkLmxlbmd0aCA+IDA7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJBbGVydCIsIkxpbmtCdXR0b24iLCJ1c2VTdHlsZXMyIiwiQVBJS2V5c01pZ3JhdGVkQ2FyZCIsIm9uSGlkZUFwaUtleXMiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJ0ZXh0IiwiYWN0aW9uUm93IiwiYWN0aW9uQnV0dG9uIiwidGhlbWUiLCJzcGFjaW5nIiwiQnV0dG9uIiwiRmlsdGVySW5wdXQiLCJBcGlLZXlzQWN0aW9uQmFyIiwic2VhcmNoUXVlcnkiLCJkaXNhYmxlZCIsIm9uQWRkQ2xpY2siLCJvblNlYXJjaENoYW5nZSIsInVzZUNhbGxiYWNrIiwiRmllbGQiLCJNb2RhbCIsIklucHV0IiwiSWNvbiIsIkNsaXBib2FyZEJ1dHRvbiIsIm5vdGlmeUFwcCIsImNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24iLCJkaXNwYXRjaCIsIkFwaUtleXNBZGRlZE1vZGFsIiwib25EaXNtaXNzIiwiYXBpS2V5Iiwicm9vdFBhdGgiLCJnZXRDbGlwYm9hcmRUZXh0Iiwib25DbGlwYm9hcmRDb3B5Iiwic21hbGwiLCJsYWJlbCIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInR5cG9ncmFwaHkiLCJib2R5U21hbGwiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ1c2VTdGF0ZSIsIkFwaUtleXNDb250cm9sbGVyIiwiY2hpbGRyZW4iLCJpc0FkZGluZyIsInNldElzQWRkaW5nIiwidG9nZ2xlSXNBZGRpbmciLCJ1c2VFZmZlY3QiLCJyYW5nZVV0aWwiLCJFdmVudHNXaXRoVmFsaWRhdGlvbiIsIkxlZ2FjeUZvcm1zIiwiU2VsZWN0IiwiSW5saW5lRmllbGQiLCJDbG9zZUJ1dHRvbiIsIlNsaWRlRG93biIsIk9yZ1JvbGUiLCJST0xFX09QVElPTlMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm9sZSIsInZhbHVlIiwiaXNWYWxpZEludGVydmFsIiwiaW50ZXJ2YWxUb1NlY29uZHMiLCJ0aW1lUmFuZ2VWYWxpZGF0aW9uRXZlbnRzIiwib25CbHVyIiwicnVsZSIsImVycm9yTWVzc2FnZSIsInRvb2x0aXBUZXh0IiwiQXBpS2V5c0Zvcm0iLCJzaG93Iiwib25DbG9zZSIsIm9uS2V5QWRkZWQiLCJuYW1lIiwic2V0TmFtZSIsInNldFJvbGUiLCJWaWV3ZXIiLCJzZWNvbmRzVG9MaXZlIiwic2V0U2Vjb25kc1RvTGl2ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTmFtZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJvblJvbGVDaGFuZ2UiLCJvblNlY29uZHNUb0xpdmVDaGFuZ2UiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsIklubGluZVN3aXRjaCIsIlZlcnRpY2FsR3JvdXAiLCJhcHBFdmVudHMiLCJFbXB0eUxpc3RDVEEiLCJQYWdlIiwiY29uZmlnIiwiY29udGV4dFNydiIsImdldE5hdk1vZGVsIiwiZ2V0VGltZVpvbmUiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiU2hvd01vZGFsUmVhY3RFdmVudCIsIkFwaUtleXNUYWJsZSIsIk1pZ3JhdGVUb1NlcnZpY2VBY2NvdW50c0NhcmQiLCJhZGRBcGlLZXkiLCJkZWxldGVBcGlLZXkiLCJtaWdyYXRlQXBpS2V5IiwibWlncmF0ZUFsbCIsImxvYWRBcGlLZXlzIiwidG9nZ2xlSW5jbHVkZUV4cGlyZWQiLCJnZXRBcGlLZXlzTWlncmF0aW9uU3RhdHVzIiwiaGlkZUFwaUtleXMiLCJzZXRTZWFyY2hRdWVyeSIsImdldEFwaUtleXMiLCJnZXRBcGlLZXlzQ291bnQiLCJnZXRJbmNsdWRlRXhwaXJlZCIsImdldEluY2x1ZGVFeHBpcmVkRGlzYWJsZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNhbkNyZWF0ZSIsImhhc0FjY2VzcyIsIkFjdGlvbkFQSUtleXNDcmVhdGUiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiYXBpS2V5cyIsImFwaUtleXNDb3VudCIsImhhc0ZldGNoZWQiLCJ0aW1lWm9uZSIsInVzZXIiLCJpbmNsdWRlRXhwaXJlZCIsImluY2x1ZGVFeHBpcmVkRGlzYWJsZWQiLCJhcGlLZXlzTWlncmF0ZWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJBcGlLZXlzUGFnZVVuY29ubmVjdGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImtleSIsImlkIiwibmV3QXBpS2V5Iiwib3Blbk1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJhcHBTdWJVcmwiLCJwdWJsaXNoIiwiY29tcG9uZW50Iiwic2Vjb25kc1RvTGl2ZUFzTnVtYmVyIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWxvYWQiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoQXBpS2V5cyIsInJlbmRlciIsInNob3dDVEEiLCJzaG93VGFibGUiLCJmZWF0dXJlVG9nZ2xlcyIsInNlcnZpY2VBY2NvdW50cyIsIm9uTWlncmF0ZUFsbCIsIm9uU2VhcmNoUXVlcnlDaGFuZ2UiLCJvbkFkZEFwaUtleSIsIm9uSW5jbHVkZUV4cGlyZWRDaGFuZ2UiLCJvbk1pZ3JhdGVBcGlLZXkiLCJvbkRlbGV0ZUFwaUtleSIsIkFwaUtleXNQYWdlIiwiZGF0ZVRpbWVGb3JtYXQiLCJEZWxldGVCdXR0b24iLCJIb3Jpem9udGFsR3JvdXAiLCJUb29sdGlwIiwidXNlVGhlbWUyIiwib25EZWxldGUiLCJvbk1pZ3JhdGUiLCJ3aWR0aCIsImxlbmd0aCIsImlzRXhwaXJlZCIsIkJvb2xlYW4iLCJleHBpcmF0aW9uIiwiRGF0ZSIsIm5vdyIsImdldFRpbWUiLCJ0YWJsZVJvdyIsImZvcm1hdERhdGUiLCJ0b29sdGlwQ29udGFpbmVyIiwiaGFzUGVybWlzc2lvbkluTWV0YWRhdGEiLCJBY3Rpb25BUElLZXlzRGVsZXRlIiwicHJpbWFyeSIsImdldEJhY2tlbmRTcnYiLCJzdG9yZSIsIkFQSV9LRVlTX01JR1JBVElPTl9JTkZPX1NUT1JBR0VfS0VZIiwiYXBpS2V5c0xvYWRlZCIsImluY2x1ZGVFeHBpcmVkVG9nZ2xlZCIsImlzRmV0Y2hpbmciLCJhcGlLZXlzTWlncmF0aW9uU3RhdHVzTG9hZGVkIiwicmVzdWx0IiwicG9zdCIsImtleXNJbmNsdWRpbmdFeHBpcmVkIiwiUHJvbWlzZSIsImFsbCIsImdldCIsImRlbGV0ZSIsInRoZW4iLCJzZXQiLCJtaWdyYXRlZCIsInJlZ2V4IiwiUmVnRXhwIiwia2V5c1RvRmlsdGVyIiwiZmlsdGVyIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=