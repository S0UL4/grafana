"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["EditNotificationChannel"],{

/***/ "./public/app/core/components/connectWithCleanUp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectWithCleanUp": () => (/* binding */ connectWithCleanUp)
/* harmony export */ });
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const connectWithCleanUp = (mapStateToProps, mapDispatchToProps, stateSelector) => Component => {
  const ConnectedComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps // @ts-ignore
  )(Component);

  const ConnectedComponentWithCleanUp = props => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      return function cleanUp() {
        dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_3__.cleanUpAction)({
          stateSelector
        }));
      };
    }, [dispatch]); // @ts-ignore

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ConnectedComponent, Object.assign({}, props));
  };

  ConnectedComponentWithCleanUp.displayName = `ConnectWithCleanUp(${ConnectedComponent.displayName})`;
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(ConnectedComponentWithCleanUp, Component);
  return ConnectedComponentWithCleanUp;
};

/***/ }),

/***/ "./public/app/features/alerting/EditNotificationChannelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditNotificationChannelPage": () => (/* binding */ EditNotificationChannelPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/connectWithCleanUp.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelForm.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/utils/notificationChannels.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class EditNotificationChannelPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", formData => {
      const {
        notificationChannel
      } = this.props;
      this.props.updateNotificationChannel(Object.assign({}, (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.transformSubmitData)(Object.assign({}, notificationChannel, formData, {
        settings: Object.assign({}, notificationChannel.settings, formData.settings)
      })), {
        id: notificationChannel.id
      }));
    });

    _defineProperty(this, "onTestChannel", formData => {
      const {
        notificationChannel
      } = this.props;
      /*
        Same as submit
       */

      this.props.testNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.transformTestData)(Object.assign({}, notificationChannel, formData, {
        settings: Object.assign({}, notificationChannel.settings, formData.settings)
      })));
    });
  }

  componentDidMount() {
    this.props.loadNotificationChannel(parseInt(this.props.match.params.id, 10));
  }

  render() {
    const {
      navModel,
      notificationChannel,
      notificationChannelTypes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
          className: "page-sub-heading",
          children: "Edit notification channel"
        })), notificationChannel && notificationChannel.id > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
          maxWidth: 600,
          onSubmit: this.onSubmit,
          defaultValues: Object.assign({}, notificationChannel, {
            type: notificationChannelTypes.find(n => n.value === notificationChannel.type)
          }),
          children: ({
            control,
            errors,
            getValues,
            register,
            watch
          }) => {
            const selectedChannel = notificationChannelTypes.find(c => c.value === getValues().type.value);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_6__.NotificationChannelForm, {
              selectableChannels: (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.mapChannelsToSelectableValue)(notificationChannelTypes, true),
              selectedChannel: selectedChannel,
              imageRendererAvailable: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.rendererAvailable,
              onTestChannel: this.onTestChannel,
              register: register,
              watch: watch,
              errors: errors,
              getValues: getValues,
              control: control,
              resetSecureField: this.props.resetSecureField,
              secureFields: notificationChannel.secureFields
            });
          }
        }) : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: ["Loading notification channel", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {})]
        }))]
      })
    });
  }

}

const mapStateToProps = state => {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'channels'),
    notificationChannel: state.notificationChannel.notificationChannel,
    notificationChannelTypes: state.notificationChannel.notificationChannelTypes
  };
};

const mapDispatchToProps = {
  loadNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.loadNotificationChannel,
  testNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.testNotificationChannel,
  updateNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.updateNotificationChannel,
  resetSecureField: _state_reducers__WEBPACK_IMPORTED_MODULE_8__.resetSecureField
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,app_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_4__.connectWithCleanUp)(mapStateToProps, mapDispatchToProps, state => state.notificationChannel)(EditNotificationChannelPage));

/***/ }),

/***/ "./public/app/features/alerting/components/BasicSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicSettings": () => (/* binding */ BasicSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const BasicSettings = ({
  control,
  currentFormValues,
  errors,
  secureFields,
  selectedChannel,
  channels,
  register,
  resetSecureField
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Name",
      invalid: !!errors.name,
      error: errors.name && errors.name.message,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('name', {
        required: 'Name is required'
      })))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Type",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        name: "type",
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({}, field, {
            options: channels
          }));
        },
        control: control,
        rules: {
          required: true
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__.NotificationChannelOptions, {
      selectedChannelOptions: selectedChannel.options.filter(o => o.required),
      currentFormValues: currentFormValues,
      secureFields: secureFields,
      onResetSecureField: resetSecureField,
      register: register,
      errors: errors,
      control: control
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/ChannelSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelSettings": () => (/* binding */ ChannelSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const ChannelSettings = ({
  control,
  currentFormValues,
  errors,
  selectedChannel,
  secureFields,
  register,
  resetSecureField
}) => {
  var _selectedChannel$info;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CollapsableSection, {
    label: `Optional ${selectedChannel.heading}`,
    isOpen: false,
    children: [selectedChannel.info !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "info",
      title: (_selectedChannel$info = selectedChannel.info) !== null && _selectedChannel$info !== void 0 ? _selectedChannel$info : ''
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__.NotificationChannelOptions, {
      selectedChannelOptions: selectedChannel.options.filter(o => !o.required),
      currentFormValues: currentFormValues,
      register: register,
      errors: errors,
      control: control,
      onResetSecureField: resetSecureField,
      secureFields: secureFields
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationChannelForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationChannelForm": () => (/* binding */ NotificationChannelForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _BasicSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/components/BasicSettings.tsx");
/* harmony import */ var _ChannelSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/components/ChannelSettings.tsx");
/* harmony import */ var _NotificationSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/components/NotificationSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Spinner, _Button, _Button2;










const NotificationChannelForm = ({
  control,
  errors,
  selectedChannel,
  selectableChannels,
  register,
  watch,
  getValues,
  imageRendererAvailable,
  onTestChannel,
  resetSecureField,
  secureFields
}) => {
  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)());
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    /*
      Find fields that have dependencies on other fields and removes duplicates.
      Needs to be prefixed with settings.
    */
    const fieldsToWatch = new Set(selectedChannel === null || selectedChannel === void 0 ? void 0 : selectedChannel.options.filter(o => o.showWhen.field).map(option => {
      return `settings.${option.showWhen.field}`;
    })) || [];
    watch(['type', 'sendReminder', 'uploadImage', ...fieldsToWatch]);
  }, [selectedChannel === null || selectedChannel === void 0 ? void 0 : selectedChannel.options, watch]);
  const currentFormValues = getValues();

  if (!selectedChannel) {
    return _Spinner || (_Spinner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.formContainer,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BasicSettings__WEBPACK_IMPORTED_MODULE_4__.BasicSettings, {
        selectedChannel: selectedChannel,
        channels: selectableChannels,
        secureFields: secureFields,
        resetSecureField: resetSecureField,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), selectedChannel.options.filter(o => !o.required).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChannelSettings__WEBPACK_IMPORTED_MODULE_5__.ChannelSettings, {
        selectedChannel: selectedChannel,
        secureFields: secureFields,
        resetSecureField: resetSecureField,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_NotificationSettings__WEBPACK_IMPORTED_MODULE_6__.NotificationSettings, {
        imageRendererAvailable: imageRendererAvailable,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formButtons,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "submit",
          children: "Save"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "button",
          variant: "secondary",
          onClick: () => onTestChannel(getValues()),
          children: "Test"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
          href: `${app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].appSubUrl}/alerting/notifications`,
          children: _Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "button",
            variant: "secondary",
            children: "Back"
          }))
        })]
      })
    })]
  });
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(theme => {
  return {
    formContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css``,
    formItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      padding-top: ${theme.spacing.md};
    `,
    formButtons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-top: ${theme.spacing.xl};
    `
  };
});

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationChannelOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationChannelOptions": () => (/* binding */ NotificationChannelOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _OptionElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/components/OptionElement.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const NotificationChannelOptions = ({
  control,
  currentFormValues,
  errors,
  selectedChannelOptions,
  register,
  onResetSecureField,
  secureFields
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: selectedChannelOptions.map((option, index) => {
      var _errors$settings$opti;

      const key = `${option.label}-${index}`; // Some options can be dependent on other options, this determines what is selected in the dependency options
      // I think this needs more thought.

      const selectedOptionValue = currentFormValues[`settings.${option.showWhen.field}`] && currentFormValues[`settings.${option.showWhen.field}`].value;

      if (option.showWhen.field && selectedOptionValue !== option.showWhen.is) {
        return null;
      }

      if (option.element === 'checkbox') {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register(option.secure ? `secureSettings.${option.propertyName}` : `settings.${option.propertyName}`), {
            label: option.label,
            description: option.description
          }))
        }, key);
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: option.label,
        description: option.description,
        invalid: errors.settings && !!errors.settings[option.propertyName],
        error: errors.settings && ((_errors$settings$opti = errors.settings[option.propertyName]) === null || _errors$settings$opti === void 0 ? void 0 : _errors$settings$opti.message),
        children: secureFields && secureFields[option.propertyName] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          readOnly: true,
          value: "Configured",
          suffix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: () => onResetSecureField(option.propertyName),
            fill: "text",
            type: "button",
            size: "sm",
            children: "Clear"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OptionElement__WEBPACK_IMPORTED_MODULE_2__.OptionElement, {
          option: option,
          register: register,
          control: control
        })
      }, key);
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettings": () => (/* binding */ NotificationSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InfoBox;






const NotificationSettings = ({
  currentFormValues,
  imageRendererAvailable,
  register
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CollapsableSection, {
    label: "Notification settings",
    isOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('isDefault'), {
        label: "Default",
        description: "Use this notification for all alerts"
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('settings.uploadImage'), {
        label: "Include image",
        description: "Captures an image and include it in the notification"
      }))
    }), currentFormValues.uploadImage && !imageRendererAvailable && (_InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InfoBox, {
      title: "No image renderer available/installed",
      children: "Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('disableResolveMessage'), {
        label: "Disable Resolve Message",
        description: "Disable the resolve message [OK] that is sent when alerting state returns to false"
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('sendReminder'), {
        label: "Send reminders",
        description: "Send additional notifications for triggered alerts"
      }))
    }), currentFormValues.sendReminder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Send reminder every",
        description: "Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m', or 1h etc. Alert reminders are sent after rules are evaluated. A reminder can never be sent more frequently than a configured alert rule evaluation interval.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('frequency'), {
          width: 8
        }))
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/OptionElement.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionElement": () => (/* binding */ OptionElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const OptionElement = ({
  control,
  option,
  register,
  invalid
}) => {
  const modelValue = option.secure ? `secureSettings.${option.propertyName}` : `settings.${option.propertyName}`;

  switch (option.element) {
    case 'input':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`${modelValue}`, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      }), {
        invalid: invalid,
        type: option.inputType,
        placeholder: option.placeholder
      }));

    case 'select':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        control: control,
        name: `${modelValue}`,
        render: _ref => {
          var _option$selectOptions;

          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({}, field, {
            options: (_option$selectOptions = option.selectOptions) !== null && _option$selectOptions !== void 0 ? _option$selectOptions : undefined,
            invalid: invalid
          }));
        }
      });

    case 'textarea':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, Object.assign({
        invalid: invalid
      }, register(`${modelValue}`, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      })));

    default:
      console.error('Element not supported', option.element);
      return null;
  }
};

const validateOption = (value, validationRule) => {
  return RegExp(validationRule).test(value) ? true : 'Invalid format';
};

/***/ }),

/***/ "./public/app/features/alerting/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotificationChannel": () => (/* binding */ createNotificationChannel),
/* harmony export */   "getAlertRulesAsync": () => (/* binding */ getAlertRulesAsync),
/* harmony export */   "loadNotificationChannel": () => (/* binding */ loadNotificationChannel),
/* harmony export */   "loadNotificationTypes": () => (/* binding */ loadNotificationTypes),
/* harmony export */   "testNotificationChannel": () => (/* binding */ testNotificationChannel),
/* harmony export */   "togglePauseAlertRule": () => (/* binding */ togglePauseAlertRule),
/* harmony export */   "updateNotificationChannel": () => (/* binding */ updateNotificationChannel)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");




function getAlertRulesAsync(options) {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.loadAlertRules)());
    const rules = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/alerts', options);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.loadedAlertRules)(rules));
  };
}
function togglePauseAlertRule(id, options) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alerts/${id}/pause`, options);
    const stateFilter = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getSearchObject().state || 'all';
    dispatch(getAlertRulesAsync({
      state: stateFilter.toString()
    }));
  };
}
function createNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alert-notifications`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification created')));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push('/alerting/notifications');
    } catch (error) {
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isFetchError)(error)) {
        dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
      }
    }
  };
}
function updateNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/alert-notifications/${data.id}`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification updated')));
    } catch (error) {
      if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isFetchError)(error)) {
        dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
      }
    }
  };
}
function testNotificationChannel(data) {
  return async (dispatch, getState) => {
    const channel = getState().notificationChannel.notificationChannel;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/alert-notifications/test', Object.assign({
      id: channel.id
    }, data));
  };
}
function loadNotificationTypes() {
  return async dispatch => {
    const alertNotifiers = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifiers`);
    const notificationTypes = alertNotifiers.sort((o1, o2) => {
      if (o1.name > o2.name) {
        return 1;
      }

      return -1;
    });
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.setNotificationChannels)(notificationTypes));
  };
}
function loadNotificationChannel(id) {
  return async dispatch => {
    await dispatch(loadNotificationTypes());
    const notificationChannel = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifications/${id}`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.notificationChannelLoaded)(notificationChannel));
  };
}

/***/ }),

/***/ "./public/app/features/alerting/utils/notificationChannels.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultValues": () => (/* binding */ defaultValues),
/* harmony export */   "mapChannelsToSelectableValue": () => (/* binding */ mapChannelsToSelectableValue),
/* harmony export */   "transformSubmitData": () => (/* binding */ transformSubmitData),
/* harmony export */   "transformTestData": () => (/* binding */ transformTestData)
/* harmony export */ });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


const defaultValues = {
  id: -1,
  name: '',
  type: {
    value: 'email',
    label: 'Email'
  },
  sendReminder: false,
  disableResolveMessage: false,
  frequency: '15m',
  settings: {
    uploadImage: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.rendererAvailable,
    autoResolve: true,
    httpMethod: 'POST',
    severity: 'critical'
  },
  secureSettings: {},
  secureFields: {},
  isDefault: false
};
const mapChannelsToSelectableValue = (0,memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])((notificationChannels, includeDescription) => {
  return notificationChannels.map(channel => {
    if (includeDescription) {
      return {
        value: channel.value,
        label: channel.label,
        description: channel.description
      };
    }

    return {
      value: channel.value,
      label: channel.label
    };
  });
});
const transformSubmitData = formData => {
  /*
    Some settings can be options in a select, in order to not save a SelectableValue<T>
    we need to use check if it is a SelectableValue and use its value.
  */
  const settings = Object.fromEntries(Object.entries(formData.settings).map(([key, value]) => {
    return [key, value && value.hasOwnProperty('value') ? value.value : value];
  }));
  return Object.assign({}, defaultValues, formData, {
    frequency: formData.frequency === '' ? defaultValues.frequency : formData.frequency,
    type: formData.type.value,
    settings: Object.assign({}, defaultValues.settings, settings),
    secureSettings: Object.assign({}, formData.secureSettings)
  });
};
const transformTestData = formData => {
  var _formData$frequency;

  return {
    name: formData.name,
    type: formData.type.value,
    frequency: (_formData$frequency = formData.frequency) !== null && _formData$frequency !== void 0 ? _formData$frequency : defaultValues.frequency,
    settings: Object.assign({}, Object.assign(defaultValues.settings, formData.settings)),
    secureSettings: Object.assign({}, formData.secureSettings)
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdE5vdGlmaWNhdGlvbkNoYW5uZWwuMjYxMDE5MzUzYjEyN2M3NTE1YWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVPLE1BQU1NLGtCQUFrQixHQUM3QixDQVFFQyxlQVJGLEVBU0VDLGtCQVRGLEVBVUVDLGFBVkYsS0FZQ0MsU0FBRCxJQUFtQztFQUNqQyxNQUFNQyxrQkFBa0IsR0FBR1Isb0RBQU8sQ0FDaENJLGVBRGdDLEVBRWhDQyxrQkFGZ0MsQ0FHaEM7RUFIZ0MsQ0FBUCxDQUl6QkUsU0FKeUIsQ0FBM0I7O0VBTUEsTUFBTUUsNkJBQWdELEdBQUlDLEtBQUQsSUFBVztJQUNsRSxNQUFNQyxRQUFRLEdBQUdWLHdEQUFXLEVBQTVCO0lBQ0FGLGdEQUFTLENBQUMsTUFBTTtNQUNkLE9BQU8sU0FBU2EsT0FBVCxHQUFtQjtRQUN4QkQsUUFBUSxDQUFDVCwrREFBYSxDQUFDO1VBQUVJO1FBQUYsQ0FBRCxDQUFkLENBQVI7TUFDRCxDQUZEO0lBR0QsQ0FKUSxFQUlOLENBQUNLLFFBQUQsQ0FKTSxDQUFULENBRmtFLENBT2xFOztJQUNBLG9CQUFPLHVEQUFDLGtCQUFELG9CQUF3QkQsS0FBeEIsRUFBUDtFQUNELENBVEQ7O0VBV0FELDZCQUE2QixDQUFDSSxXQUE5QixHQUE2QyxzQkFBcUJMLGtCQUFrQixDQUFDSyxXQUFZLEdBQWpHO0VBQ0FoQiw4REFBb0IsQ0FBQ1ksNkJBQUQsRUFBZ0NGLFNBQWhDLENBQXBCO0VBR0EsT0FBT0UsNkJBQVA7QUFDRCxDQXBDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQW1CTyxNQUFNbUIsMkJBQU4sU0FBMENkLGdEQUExQyxDQUErRDtFQUFBO0lBQUE7O0lBQUEsa0NBS3hEZSxRQUFELElBQXNDO01BQy9DLE1BQU07UUFBRUM7TUFBRixJQUEwQixLQUFLcEIsS0FB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IjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvY29ubmVjdFdpdGhDbGVhblVwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9FZGl0Tm90aWZpY2F0aW9uQ2hhbm5lbFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvQmFzaWNTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9DaGFubmVsU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvT3B0aW9uRWxlbWVudC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91dGlscy9ub3RpZmljYXRpb25DaGFubmVscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFR5cGUsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBNYXBEaXNwYXRjaFRvUHJvcHNQYXJhbSwgTWFwU3RhdGVUb1Byb3BzUGFyYW0sIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBjbGVhblVwQWN0aW9uLCBTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vYWN0aW9ucy9jbGVhblVwJztcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RXaXRoQ2xlYW5VcCA9XG4gIDxcbiAgICBUU3RhdGVQcm9wcyBleHRlbmRzIHt9ID0ge30sXG4gICAgVERpc3BhdGNoUHJvcHMgPSB7fSxcbiAgICBUT3duUHJvcHMgPSB7fSxcbiAgICBTdGF0ZSA9IHt9LFxuICAgIFRTZWxlY3RvciBleHRlbmRzIG9iamVjdCA9IHt9LFxuICAgIFN0YXRpY3MgPSB7fVxuICA+KFxuICAgIG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzUGFyYW08VFN0YXRlUHJvcHMsIFRPd25Qcm9wcywgU3RhdGU+LFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wczogTWFwRGlzcGF0Y2hUb1Byb3BzUGFyYW08VERpc3BhdGNoUHJvcHMsIFRPd25Qcm9wcz4sXG4gICAgc3RhdGVTZWxlY3RvcjogU3RhdGVTZWxlY3RvcjxUU2VsZWN0b3I+XG4gICkgPT5cbiAgKENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxhbnk+KSA9PiB7XG4gICAgY29uc3QgQ29ubmVjdGVkQ29tcG9uZW50ID0gY29ubmVjdChcbiAgICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICkoQ29tcG9uZW50KTtcblxuICAgIGNvbnN0IENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwOiBGdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFuVXAoKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY2xlYW5VcEFjdGlvbih7IHN0YXRlU2VsZWN0b3IgfSkpO1xuICAgICAgICB9O1xuICAgICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gPENvbm5lY3RlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xuICAgIH07XG5cbiAgICBDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcC5kaXNwbGF5TmFtZSA9IGBDb25uZWN0V2l0aENsZWFuVXAoJHtDb25uZWN0ZWRDb21wb25lbnQuZGlzcGxheU5hbWV9KWA7XG4gICAgaG9pc3ROb25SZWFjdFN0YXRpY3MoQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXAsIENvbXBvbmVudCk7XG4gICAgdHlwZSBIb2lzdGVkID0gdHlwZW9mIENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwICYgU3RhdGljcztcblxuICAgIHJldHVybiBDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcCBhcyBIb2lzdGVkO1xuICB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXBEaXNwYXRjaFRvUHJvcHMsIE1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRm9ybSwgU3Bpbm5lciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGNvbm5lY3RXaXRoQ2xlYW5VcCB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvY29ubmVjdFdpdGhDbGVhblVwJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsVHlwZSwgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxGb3JtIH0gZnJvbSAnLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtJztcbmltcG9ydCB7IGxvYWROb3RpZmljYXRpb25DaGFubmVsLCB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCwgdXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyByZXNldFNlY3VyZUZpZWxkIH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBtYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlLCB0cmFuc2Zvcm1TdWJtaXREYXRhLCB0cmFuc2Zvcm1UZXN0RGF0YSB9IGZyb20gJy4vdXRpbHMvbm90aWZpY2F0aW9uQ2hhbm5lbHMnO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IGlkOiBzdHJpbmcgfT4ge31cblxuaW50ZXJmYWNlIENvbm5lY3RlZFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xuICBub3RpZmljYXRpb25DaGFubmVsOiBhbnk7XG4gIG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlczogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVbXTtcbn1cblxuaW50ZXJmYWNlIERpc3BhdGNoUHJvcHMge1xuICBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbDogdHlwZW9mIGxvYWROb3RpZmljYXRpb25DaGFubmVsO1xuICB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbDogdHlwZW9mIHRlc3ROb3RpZmljYXRpb25DaGFubmVsO1xuICB1cGRhdGVOb3RpZmljYXRpb25DaGFubmVsOiB0eXBlb2YgdXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbDtcbiAgcmVzZXRTZWN1cmVGaWVsZDogdHlwZW9mIHJlc2V0U2VjdXJlRmllbGQ7XG59XG5cbnR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzICYgRGlzcGF0Y2hQcm9wcztcblxuZXhwb3J0IGNsYXNzIEVkaXROb3RpZmljYXRpb25DaGFubmVsUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkTm90aWZpY2F0aW9uQ2hhbm5lbChwYXJzZUludCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCwgMTApKTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gKGZvcm1EYXRhOiBOb3RpZmljYXRpb25DaGFubmVsRFRPKSA9PiB7XG4gICAgY29uc3QgeyBub3RpZmljYXRpb25DaGFubmVsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5wcm9wcy51cGRhdGVOb3RpZmljYXRpb25DaGFubmVsKHtcbiAgICAgIC8qXG4gICAgICAgU29tZSBzZXR0aW5ncyB3aGljaCBsaXZlcyBpbiBhIGNvbGxhcHNlZCBzZWN0aW9uIHdpbGwgbm90IGJlIHJlZ2lzdGVyZWQgc2luY2VcbiAgICAgICB0aGUgc2VjdGlvbiB3aWxsIG5vdCBiZSByZW5kZXJlZCBpZiBhIHVzZXIgZG9lc24ndCBleHBhbmQgaXQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXG4gICAgICAgbWVyZ2UgdGhlIGluaXRpYWxEYXRhIHdpdGggYW55IGNoYW5nZXMgZnJvbSB0aGUgZm9ybS5cbiAgICAgICovXG4gICAgICAuLi50cmFuc2Zvcm1TdWJtaXREYXRhKHtcbiAgICAgICAgLi4ubm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIHNldHRpbmdzOiB7IC4uLm5vdGlmaWNhdGlvbkNoYW5uZWwuc2V0dGluZ3MsIC4uLmZvcm1EYXRhLnNldHRpbmdzIH0sXG4gICAgICB9KSxcbiAgICAgIGlkOiBub3RpZmljYXRpb25DaGFubmVsLmlkLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uVGVzdENoYW5uZWwgPSAoZm9ybURhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHtcbiAgICBjb25zdCB7IG5vdGlmaWNhdGlvbkNoYW5uZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgLypcbiAgICAgIFNhbWUgYXMgc3VibWl0XG4gICAgICovXG4gICAgdGhpcy5wcm9wcy50ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbChcbiAgICAgIHRyYW5zZm9ybVRlc3REYXRhKHtcbiAgICAgICAgLi4ubm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIHNldHRpbmdzOiB7IC4uLm5vdGlmaWNhdGlvbkNoYW5uZWwuc2V0dGluZ3MsIC4uLmZvcm1EYXRhLnNldHRpbmdzIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIG5vdGlmaWNhdGlvbkNoYW5uZWwsIG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPkVkaXQgbm90aWZpY2F0aW9uIGNoYW5uZWw8L2gyPlxuICAgICAgICAgIHtub3RpZmljYXRpb25DaGFubmVsICYmIG5vdGlmaWNhdGlvbkNoYW5uZWwuaWQgPiAwID8gKFxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgbWF4V2lkdGg9ezYwMH1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAuLi5ub3RpZmljYXRpb25DaGFubmVsLFxuICAgICAgICAgICAgICAgIHR5cGU6IG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcy5maW5kKChuKSA9PiBuLnZhbHVlID09PSBub3RpZmljYXRpb25DaGFubmVsLnR5cGUpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7KHsgY29udHJvbCwgZXJyb3JzLCBnZXRWYWx1ZXMsIHJlZ2lzdGVyLCB3YXRjaCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGFubmVsID0gbm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzLmZpbmQoKGMpID0+IGMudmFsdWUgPT09IGdldFZhbHVlcygpLnR5cGUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25DaGFubmVsRm9ybVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlQ2hhbm5lbHM9e21hcENoYW5uZWxzVG9TZWxlY3RhYmxlVmFsdWUobm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsPXtzZWxlY3RlZENoYW5uZWx9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlUmVuZGVyZXJBdmFpbGFibGU9e2NvbmZpZy5yZW5kZXJlckF2YWlsYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgb25UZXN0Q2hhbm5lbD17dGhpcy5vblRlc3RDaGFubmVsfVxuICAgICAgICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIHdhdGNoPXt3YXRjaH1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgIGdldFZhbHVlcz17Z2V0VmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICByZXNldFNlY3VyZUZpZWxkPXt0aGlzLnByb3BzLnJlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17bm90aWZpY2F0aW9uQ2hhbm5lbC5zZWN1cmVGaWVsZHN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIExvYWRpbmcgbm90aWZpY2F0aW9uIGNoYW5uZWxcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzPENvbm5lY3RlZFByb3BzLCBPd25Qcm9wcywgU3RvcmVTdGF0ZT4gPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdjaGFubmVscycpLFxuICAgIG5vdGlmaWNhdGlvbkNoYW5uZWw6IHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWwubm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgICBub3RpZmljYXRpb25DaGFubmVsVHlwZXM6IHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWwubm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzOiBNYXBEaXNwYXRjaFRvUHJvcHM8RGlzcGF0Y2hQcm9wcywgT3duUHJvcHM+ID0ge1xuICBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgdGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gIHVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0V2l0aENsZWFuVXAoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAoc3RhdGUpID0+IHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWxcbikoRWRpdE5vdGlmaWNhdGlvbkNoYW5uZWxQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGaWVsZCwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbDogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIGNoYW5uZWxzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQmFzaWNTZXR0aW5nczogRkM8UHJvcHM+ID0gKHtcbiAgY29udHJvbCxcbiAgY3VycmVudEZvcm1WYWx1ZXMsXG4gIGVycm9ycyxcbiAgc2VjdXJlRmllbGRzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIGNoYW5uZWxzLFxuICByZWdpc3RlcixcbiAgcmVzZXRTZWN1cmVGaWVsZCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnMubmFtZSAmJiBlcnJvcnMubmFtZS5tZXNzYWdlfT5cbiAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6ICdOYW1lIGlzIHJlcXVpcmVkJyB9KX0gLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQgbGFiZWw9XCJUeXBlXCI+XG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gPFNlbGVjdCB7Li4uZmllbGR9IG9wdGlvbnM9e2NoYW5uZWxzfSAvPn1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gby5yZXF1aXJlZCl9XG4gICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzPXtjdXJyZW50Rm9ybVZhbHVlc31cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydCwgQ29sbGFwc2FibGVTZWN0aW9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbDogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbm5lbFNldHRpbmdzOiBGQzxQcm9wcz4gPSAoe1xuICBjb250cm9sLFxuICBjdXJyZW50Rm9ybVZhbHVlcyxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIHNlY3VyZUZpZWxkcyxcbiAgcmVnaXN0ZXIsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNhYmxlU2VjdGlvbiBsYWJlbD17YE9wdGlvbmFsICR7c2VsZWN0ZWRDaGFubmVsLmhlYWRpbmd9YH0gaXNPcGVuPXtmYWxzZX0+XG4gICAgICB7c2VsZWN0ZWRDaGFubmVsLmluZm8gIT09ICcnICYmIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT17c2VsZWN0ZWRDaGFubmVsLmluZm8gPz8gJyd9IC8+fVxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpfVxuICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAvPlxuICAgIDwvQ29sbGFwc2FibGVTZWN0aW9uPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUFQSSwgSG9yaXpvbnRhbEdyb3VwLCBzdHlsZXNGYWN0b3J5LCB1c2VUaGVtZSwgU3Bpbm5lciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGUsIE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8sIE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IEJhc2ljU2V0dGluZ3MgfSBmcm9tICcuL0Jhc2ljU2V0dGluZ3MnO1xuaW1wb3J0IHsgQ2hhbm5lbFNldHRpbmdzIH0gZnJvbSAnLi9DaGFubmVsU2V0dGluZ3MnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3MgfSBmcm9tICcuL05vdGlmaWNhdGlvblNldHRpbmdzJztcblxuaW50ZXJmYWNlIFByb3BzXG4gIGV4dGVuZHMgUGljazxGb3JtQVBJPE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8+LCAnY29udHJvbCcgfCAnZXJyb3JzJyB8ICdyZWdpc3RlcicgfCAnd2F0Y2gnIHwgJ2dldFZhbHVlcyc+IHtcbiAgc2VsZWN0YWJsZUNoYW5uZWxzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHNlbGVjdGVkQ2hhbm5lbD86IE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlO1xuICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlOiBib29sZWFuO1xuICBzZWN1cmVGaWVsZHM6IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHM7XG4gIHJlc2V0U2VjdXJlRmllbGQ6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbiAgb25UZXN0Q2hhbm5lbDogKGRhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wc1xuICBleHRlbmRzIFBpY2s8Rm9ybUFQSTxOb3RpZmljYXRpb25DaGFubmVsRFRPPiwgJ2NvbnRyb2wnIHwgJ2Vycm9ycycgfCAncmVnaXN0ZXInPiB7XG4gIGN1cnJlbnRGb3JtVmFsdWVzOiBOb3RpZmljYXRpb25DaGFubmVsRFRPO1xufVxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm06IEZDPFByb3BzPiA9ICh7XG4gIGNvbnRyb2wsXG4gIGVycm9ycyxcbiAgc2VsZWN0ZWRDaGFubmVsLFxuICBzZWxlY3RhYmxlQ2hhbm5lbHMsXG4gIHJlZ2lzdGVyLFxuICB3YXRjaCxcbiAgZ2V0VmFsdWVzLFxuICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlLFxuICBvblRlc3RDaGFubmVsLFxuICByZXNldFNlY3VyZUZpZWxkLFxuICBzZWN1cmVGaWVsZHMsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8qXG4gICAgICBGaW5kIGZpZWxkcyB0aGF0IGhhdmUgZGVwZW5kZW5jaWVzIG9uIG90aGVyIGZpZWxkcyBhbmQgcmVtb3ZlcyBkdXBsaWNhdGVzLlxuICAgICAgTmVlZHMgdG8gYmUgcHJlZml4ZWQgd2l0aCBzZXR0aW5ncy5cbiAgICAqL1xuICAgIGNvbnN0IGZpZWxkc1RvV2F0Y2ggPVxuICAgICAgbmV3IFNldChcbiAgICAgICAgc2VsZWN0ZWRDaGFubmVsPy5vcHRpb25zXG4gICAgICAgICAgLmZpbHRlcigobykgPT4gby5zaG93V2hlbi5maWVsZClcbiAgICAgICAgICAubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgc2V0dGluZ3MuJHtvcHRpb24uc2hvd1doZW4uZmllbGR9YDtcbiAgICAgICAgICB9KVxuICAgICAgKSB8fCBbXTtcbiAgICB3YXRjaChbJ3R5cGUnLCAnc2VuZFJlbWluZGVyJywgJ3VwbG9hZEltYWdlJywgLi4uZmllbGRzVG9XYXRjaF0pO1xuICB9LCBbc2VsZWN0ZWRDaGFubmVsPy5vcHRpb25zLCB3YXRjaF0pO1xuXG4gIGNvbnN0IGN1cnJlbnRGb3JtVmFsdWVzID0gZ2V0VmFsdWVzKCk7XG5cbiAgaWYgKCFzZWxlY3RlZENoYW5uZWwpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgPEJhc2ljU2V0dGluZ3NcbiAgICAgICAgICBzZWxlY3RlZENoYW5uZWw9e3NlbGVjdGVkQ2hhbm5lbH1cbiAgICAgICAgICBjaGFubmVscz17c2VsZWN0YWJsZUNoYW5uZWxzfVxuICAgICAgICAgIHNlY3VyZUZpZWxkcz17c2VjdXJlRmllbGRzfVxuICAgICAgICAgIHJlc2V0U2VjdXJlRmllbGQ9e3Jlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgY3VycmVudEZvcm1WYWx1ZXM9e2N1cnJlbnRGb3JtVmFsdWVzfVxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogSWYgdGhlcmUgYXJlIG5vIG5vbi1yZXF1aXJlZCBmaWVsZHMsIGRvbid0IHJlbmRlciB0aGlzIHNlY3Rpb24qL31cbiAgICAgIHtzZWxlY3RlZENoYW5uZWwub3B0aW9ucy5maWx0ZXIoKG8pID0+ICFvLnJlcXVpcmVkKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgICAgPENoYW5uZWxTZXR0aW5nc1xuICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsPXtzZWxlY3RlZENoYW5uZWx9XG4gICAgICAgICAgICBzZWN1cmVGaWVsZHM9e3NlY3VyZUZpZWxkc31cbiAgICAgICAgICAgIHJlc2V0U2VjdXJlRmllbGQ9e3Jlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgIDxOb3RpZmljYXRpb25TZXR0aW5nc1xuICAgICAgICAgIGltYWdlUmVuZGVyZXJBdmFpbGFibGU9e2ltYWdlUmVuZGVyZXJBdmFpbGFibGV9XG4gICAgICAgICAgY3VycmVudEZvcm1WYWx1ZXM9e2N1cnJlbnRGb3JtVmFsdWVzfVxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1CdXR0b25zfT5cbiAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IG9uVGVzdENoYW5uZWwoZ2V0VmFsdWVzKCkpfT5cbiAgICAgICAgICAgIFRlc3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8YSBocmVmPXtgJHtjb25maWcuYXBwU3ViVXJsfS9hbGVydGluZy9ub3RpZmljYXRpb25zYH0+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmb3JtQ29udGFpbmVyOiBjc3NgYCxcbiAgICBmb3JtSXRlbTogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgYCxcbiAgICBmb3JtQnV0dG9uczogY3NzYFxuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgYCxcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZpZWxkLCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiwgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgT3B0aW9uRWxlbWVudCB9IGZyb20gJy4vT3B0aW9uRWxlbWVudCc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMge1xuICBzZWxlY3RlZENoYW5uZWxPcHRpb25zOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uW107XG4gIGN1cnJlbnRGb3JtVmFsdWVzOiBOb3RpZmljYXRpb25DaGFubmVsRFRPO1xuICBzZWN1cmVGaWVsZHM6IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHM7XG5cbiAgb25SZXNldFNlY3VyZUZpZWxkOiAoa2V5OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uczogRkM8UHJvcHM+ID0gKHtcbiAgY29udHJvbCxcbiAgY3VycmVudEZvcm1WYWx1ZXMsXG4gIGVycm9ycyxcbiAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucyxcbiAgcmVnaXN0ZXIsXG4gIG9uUmVzZXRTZWN1cmVGaWVsZCxcbiAgc2VjdXJlRmllbGRzLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2VsZWN0ZWRDaGFubmVsT3B0aW9ucy5tYXAoKG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtvcHRpb24ubGFiZWx9LSR7aW5kZXh9YDtcbiAgICAgICAgLy8gU29tZSBvcHRpb25zIGNhbiBiZSBkZXBlbmRlbnQgb24gb3RoZXIgb3B0aW9ucywgdGhpcyBkZXRlcm1pbmVzIHdoYXQgaXMgc2VsZWN0ZWQgaW4gdGhlIGRlcGVuZGVuY3kgb3B0aW9uc1xuICAgICAgICAvLyBJIHRoaW5rIHRoaXMgbmVlZHMgbW9yZSB0aG91Z2h0LlxuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlID1cbiAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlc1tgc2V0dGluZ3MuJHtvcHRpb24uc2hvd1doZW4uZmllbGR9YF0gJiZcbiAgICAgICAgICAoY3VycmVudEZvcm1WYWx1ZXNbYHNldHRpbmdzLiR7b3B0aW9uLnNob3dXaGVuLmZpZWxkfWBdIGFzIFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KS52YWx1ZTtcblxuICAgICAgICBpZiAob3B0aW9uLnNob3dXaGVuLmZpZWxkICYmIHNlbGVjdGVkT3B0aW9uVmFsdWUgIT09IG9wdGlvbi5zaG93V2hlbi5pcykge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbi5lbGVtZW50ID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGaWVsZCBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWN1cmUgPyBgc2VjdXJlU2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWAgOiBgc2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e29wdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e29wdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGludmFsaWQ9e2Vycm9ycy5zZXR0aW5ncyAmJiAhIWVycm9ycy5zZXR0aW5nc1tvcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuc2V0dGluZ3MgJiYgZXJyb3JzLnNldHRpbmdzW29wdGlvbi5wcm9wZXJ0eU5hbWVdPy5tZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWN1cmVGaWVsZHMgJiYgc2VjdXJlRmllbGRzW29wdGlvbi5wcm9wZXJ0eU5hbWVdID8gKFxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cIkNvbmZpZ3VyZWRcIlxuICAgICAgICAgICAgICAgIHN1ZmZpeD17XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzZXRTZWN1cmVGaWVsZChvcHRpb24ucHJvcGVydHlOYW1lKX0gZmlsbD1cInRleHRcIiB0eXBlPVwiYnV0dG9uXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8T3B0aW9uRWxlbWVudCBvcHRpb249e29wdGlvbn0gcmVnaXN0ZXI9e3JlZ2lzdGVyfSBjb250cm9sPXtjb250cm9sfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDaGVja2JveCwgQ29sbGFwc2FibGVTZWN0aW9uLCBGaWVsZCwgSW5mb0JveCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIGltYWdlUmVuZGVyZXJBdmFpbGFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25TZXR0aW5nczogRkM8UHJvcHM+ID0gKHsgY3VycmVudEZvcm1WYWx1ZXMsIGltYWdlUmVuZGVyZXJBdmFpbGFibGUsIHJlZ2lzdGVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2FibGVTZWN0aW9uIGxhYmVsPVwiTm90aWZpY2F0aW9uIHNldHRpbmdzXCIgaXNPcGVuPXtmYWxzZX0+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveCB7Li4ucmVnaXN0ZXIoJ2lzRGVmYXVsdCcpfSBsYWJlbD1cIkRlZmF1bHRcIiBkZXNjcmlwdGlvbj1cIlVzZSB0aGlzIG5vdGlmaWNhdGlvbiBmb3IgYWxsIGFsZXJ0c1wiIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3NldHRpbmdzLnVwbG9hZEltYWdlJyl9XG4gICAgICAgICAgbGFiZWw9XCJJbmNsdWRlIGltYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNhcHR1cmVzIGFuIGltYWdlIGFuZCBpbmNsdWRlIGl0IGluIHRoZSBub3RpZmljYXRpb25cIlxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIHtjdXJyZW50Rm9ybVZhbHVlcy51cGxvYWRJbWFnZSAmJiAhaW1hZ2VSZW5kZXJlckF2YWlsYWJsZSAmJiAoXG4gICAgICAgIDxJbmZvQm94IHRpdGxlPVwiTm8gaW1hZ2UgcmVuZGVyZXIgYXZhaWxhYmxlL2luc3RhbGxlZFwiPlxuICAgICAgICAgIEdyYWZhbmEgY2Fubm90IGZpbmQgYW4gaW1hZ2UgcmVuZGVyZXIgdG8gY2FwdHVyZSBhbiBpbWFnZSBmb3IgdGhlIG5vdGlmaWNhdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgR3JhZmFuYVxuICAgICAgICAgIEltYWdlIFJlbmRlcmVyIHBsdWdpbiBpcyBpbnN0YWxsZWQuIFBsZWFzZSBjb250YWN0IHlvdXIgR3JhZmFuYSBhZG1pbmlzdHJhdG9yIHRvIGluc3RhbGwgdGhlIHBsdWdpbi5cbiAgICAgICAgPC9JbmZvQm94PlxuICAgICAgKX1cbiAgICAgIDxGaWVsZD5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdkaXNhYmxlUmVzb2x2ZU1lc3NhZ2UnKX1cbiAgICAgICAgICBsYWJlbD1cIkRpc2FibGUgUmVzb2x2ZSBNZXNzYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpc2FibGUgdGhlIHJlc29sdmUgbWVzc2FnZSBbT0tdIHRoYXQgaXMgc2VudCB3aGVuIGFsZXJ0aW5nIHN0YXRlIHJldHVybnMgdG8gZmFsc2VcIlxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZD5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdzZW5kUmVtaW5kZXInKX1cbiAgICAgICAgICBsYWJlbD1cIlNlbmQgcmVtaW5kZXJzXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNlbmQgYWRkaXRpb25hbCBub3RpZmljYXRpb25zIGZvciB0cmlnZ2VyZWQgYWxlcnRzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICB7Y3VycmVudEZvcm1WYWx1ZXMuc2VuZFJlbWluZGVyICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiU2VuZCByZW1pbmRlciBldmVyeVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNwZWNpZnkgaG93IG9mdGVuIHJlbWluZGVycyBzaG91bGQgYmUgc2VudCwgZS5nLiBldmVyeSAzMHMsIDFtLCAxMG0sIDMwbScsIG9yIDFoIGV0Yy5cbiAgICAgICAgICAgIEFsZXJ0IHJlbWluZGVycyBhcmUgc2VudCBhZnRlciBydWxlcyBhcmUgZXZhbHVhdGVkLiBBIHJlbWluZGVyIGNhbiBuZXZlciBiZSBzZW50IG1vcmUgZnJlcXVlbnRseVxuICAgICAgICAgICAgdGhhbiBhIGNvbmZpZ3VyZWQgYWxlcnQgcnVsZSBldmFsdWF0aW9uIGludGVydmFsLlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignZnJlcXVlbmN5Jyl9IHdpZHRoPXs4fSAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0NvbGxhcHNhYmxlU2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZvcm1BUEksIElucHV0LCBJbnB1dENvbnRyb2wsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBpY2s8Rm9ybUFQSTxhbnk+LCAncmVnaXN0ZXInIHwgJ2NvbnRyb2wnPiB7XG4gIG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbjtcbiAgaW52YWxpZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPcHRpb25FbGVtZW50OiBGQzxQcm9wcz4gPSAoeyBjb250cm9sLCBvcHRpb24sIHJlZ2lzdGVyLCBpbnZhbGlkIH0pID0+IHtcbiAgY29uc3QgbW9kZWxWYWx1ZSA9IG9wdGlvbi5zZWN1cmUgPyBgc2VjdXJlU2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWAgOiBgc2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWA7XG4gIHN3aXRjaCAob3B0aW9uLmVsZW1lbnQpIHtcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoYCR7bW9kZWxWYWx1ZX1gLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogb3B0aW9uLnJlcXVpcmVkID8gJ1JlcXVpcmVkJyA6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICh2KSA9PiAob3B0aW9uLnZhbGlkYXRpb25SdWxlICE9PSAnJyA/IHZhbGlkYXRlT3B0aW9uKHYsIG9wdGlvbi52YWxpZGF0aW9uUnVsZSkgOiB0cnVlKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHR5cGU9e29wdGlvbi5pbnB1dFR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e29wdGlvbi5wbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgbmFtZT17YCR7bW9kZWxWYWx1ZX1gfVxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxTZWxlY3Qgey4uLmZpZWxkfSBvcHRpb25zPXtvcHRpb24uc2VsZWN0T3B0aW9ucyA/PyB1bmRlZmluZWR9IGludmFsaWQ9e2ludmFsaWR9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHttb2RlbFZhbHVlfWAsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBvcHRpb24ucmVxdWlyZWQgPyAnUmVxdWlyZWQnIDogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHYpID0+IChvcHRpb24udmFsaWRhdGlvblJ1bGUgIT09ICcnID8gdmFsaWRhdGVPcHRpb24odiwgb3B0aW9uLnZhbGlkYXRpb25SdWxlKSA6IHRydWUpLFxuICAgICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICAgKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBzdXBwb3J0ZWQnLCBvcHRpb24uZWxlbWVudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgdmFsaWRhdGVPcHRpb24gPSAodmFsdWU6IHN0cmluZywgdmFsaWRhdGlvblJ1bGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gUmVnRXhwKHZhbGlkYXRpb25SdWxlKS50ZXN0KHZhbHVlKSA/IHRydWUgOiAnSW52YWxpZCBmb3JtYXQnO1xufTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGlzRmV0Y2hFcnJvciwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uLCBjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgQWxlcnRSdWxlRFRPLCBOb3RpZmllckRUTywgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBsb2FkQWxlcnRSdWxlcywgbG9hZGVkQWxlcnRSdWxlcywgbm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCwgc2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMgfSBmcm9tICcuL3JlZHVjZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsZXJ0UnVsZXNBc3luYyhvcHRpb25zOiB7IHN0YXRlOiBzdHJpbmcgfSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvYWRBbGVydFJ1bGVzKCkpO1xuICAgIGNvbnN0IHJ1bGVzOiBBbGVydFJ1bGVEVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvYWxlcnRzJywgb3B0aW9ucyk7XG4gICAgZGlzcGF0Y2gobG9hZGVkQWxlcnRSdWxlcyhydWxlcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUGF1c2VBbGVydFJ1bGUoaWQ6IG51bWJlciwgb3B0aW9uczogeyBwYXVzZWQ6IGJvb2xlYW4gfSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL2FsZXJ0cy8ke2lkfS9wYXVzZWAsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0YXRlRmlsdGVyID0gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpLnN0YXRlIHx8ICdhbGwnO1xuICAgIGRpc3BhdGNoKGdldEFsZXJ0UnVsZXNBc3luYyh7IHN0YXRlOiBzdGF0ZUZpbHRlci50b1N0cmluZygpIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8UHJvbWlzZTx2b2lkPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnNgLCBkYXRhKTtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKCdOb3RpZmljYXRpb24gY3JlYXRlZCcpKSk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGlzRmV0Y2hFcnJvcihlcnJvcikpIHtcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKGVycm9yLmRhdGEuZXJyb3IpKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zLyR7ZGF0YS5pZH1gLCBkYXRhKTtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKCdOb3RpZmljYXRpb24gdXBkYXRlZCcpKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChpc0ZldGNoRXJyb3IoZXJyb3IpKSB7XG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihlcnJvci5kYXRhLmVycm9yKSkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3ROb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBjaGFubmVsID0gZ2V0U3RhdGUoKS5ub3RpZmljYXRpb25DaGFubmVsLm5vdGlmaWNhdGlvbkNoYW5uZWw7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy90ZXN0JywgeyBpZDogY2hhbm5lbC5pZCwgLi4uZGF0YSB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROb3RpZmljYXRpb25UeXBlcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBhbGVydE5vdGlmaWVyczogTm90aWZpZXJEVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvYWxlcnQtbm90aWZpZXJzYCk7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25UeXBlcyA9IGFsZXJ0Tm90aWZpZXJzLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgaWYgKG8xLm5hbWUgPiBvMi5uYW1lKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH0pO1xuXG4gICAgZGlzcGF0Y2goc2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMobm90aWZpY2F0aW9uVHlwZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROb3RpZmljYXRpb25DaGFubmVsKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkTm90aWZpY2F0aW9uVHlwZXMoKSk7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uQ2hhbm5lbCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy8ke2lkfWApO1xuICAgIGRpc3BhdGNoKG5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQobm90aWZpY2F0aW9uQ2hhbm5lbCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFZhbHVlczogTm90aWZpY2F0aW9uQ2hhbm5lbERUTyA9IHtcbiAgaWQ6IC0xLFxuICBuYW1lOiAnJyxcbiAgdHlwZTogeyB2YWx1ZTogJ2VtYWlsJywgbGFiZWw6ICdFbWFpbCcgfSxcbiAgc2VuZFJlbWluZGVyOiBmYWxzZSxcbiAgZGlzYWJsZVJlc29sdmVNZXNzYWdlOiBmYWxzZSxcbiAgZnJlcXVlbmN5OiAnMTVtJyxcbiAgc2V0dGluZ3M6IHtcbiAgICB1cGxvYWRJbWFnZTogY29uZmlnLnJlbmRlcmVyQXZhaWxhYmxlLFxuICAgIGF1dG9SZXNvbHZlOiB0cnVlLFxuICAgIGh0dHBNZXRob2Q6ICdQT1NUJyxcbiAgICBzZXZlcml0eTogJ2NyaXRpY2FsJyxcbiAgfSxcbiAgc2VjdXJlU2V0dGluZ3M6IHt9LFxuICBzZWN1cmVGaWVsZHM6IHt9LFxuICBpc0RlZmF1bHQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IG1hcENoYW5uZWxzVG9TZWxlY3RhYmxlVmFsdWUgPSBtZW1vaXplT25lKFxuICAobm90aWZpY2F0aW9uQ2hhbm5lbHM6IE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlW10sIGluY2x1ZGVEZXNjcmlwdGlvbjogYm9vbGVhbik6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9PiB7XG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbkNoYW5uZWxzLm1hcCgoY2hhbm5lbCkgPT4ge1xuICAgICAgaWYgKGluY2x1ZGVEZXNjcmlwdGlvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBjaGFubmVsLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBjaGFubmVsLmxhYmVsLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGFubmVsLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IGNoYW5uZWwudmFsdWUsXG4gICAgICAgIGxhYmVsOiBjaGFubmVsLmxhYmVsLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybVN1Ym1pdERhdGEgPSAoZm9ybURhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHtcbiAgLypcbiAgICBTb21lIHNldHRpbmdzIGNhbiBiZSBvcHRpb25zIGluIGEgc2VsZWN0LCBpbiBvcmRlciB0byBub3Qgc2F2ZSBhIFNlbGVjdGFibGVWYWx1ZTxUPlxuICAgIHdlIG5lZWQgdG8gdXNlIGNoZWNrIGlmIGl0IGlzIGEgU2VsZWN0YWJsZVZhbHVlIGFuZCB1c2UgaXRzIHZhbHVlLlxuICAqL1xuICBjb25zdCBzZXR0aW5ncyA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhmb3JtRGF0YS5zZXR0aW5ncykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIHJldHVybiBba2V5LCB2YWx1ZSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA/IHZhbHVlLnZhbHVlIDogdmFsdWVdO1xuICAgIH0pXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5kZWZhdWx0VmFsdWVzLFxuICAgIC4uLmZvcm1EYXRhLFxuICAgIGZyZXF1ZW5jeTogZm9ybURhdGEuZnJlcXVlbmN5ID09PSAnJyA/IGRlZmF1bHRWYWx1ZXMuZnJlcXVlbmN5IDogZm9ybURhdGEuZnJlcXVlbmN5LFxuICAgIHR5cGU6IGZvcm1EYXRhLnR5cGUudmFsdWUsXG4gICAgc2V0dGluZ3M6IHsgLi4uZGVmYXVsdFZhbHVlcy5zZXR0aW5ncywgLi4uc2V0dGluZ3MgfSxcbiAgICBzZWN1cmVTZXR0aW5nczogeyAuLi5mb3JtRGF0YS5zZWN1cmVTZXR0aW5ncyB9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybVRlc3REYXRhID0gKGZvcm1EYXRhOiBOb3RpZmljYXRpb25DaGFubmVsRFRPKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogZm9ybURhdGEubmFtZSxcbiAgICB0eXBlOiBmb3JtRGF0YS50eXBlLnZhbHVlLFxuICAgIGZyZXF1ZW5jeTogZm9ybURhdGEuZnJlcXVlbmN5ID8/IGRlZmF1bHRWYWx1ZXMuZnJlcXVlbmN5LFxuICAgIHNldHRpbmdzOiB7IC4uLk9iamVjdC5hc3NpZ24oZGVmYXVsdFZhbHVlcy5zZXR0aW5ncywgZm9ybURhdGEuc2V0dGluZ3MpIH0sXG4gICAgc2VjdXJlU2V0dGluZ3M6IHsgLi4uZm9ybURhdGEuc2VjdXJlU2V0dGluZ3MgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsImNvbm5lY3QiLCJ1c2VEaXNwYXRjaCIsImNsZWFuVXBBY3Rpb24iLCJjb25uZWN0V2l0aENsZWFuVXAiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJzdGF0ZVNlbGVjdG9yIiwiQ29tcG9uZW50IiwiQ29ubmVjdGVkQ29tcG9uZW50IiwiQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXAiLCJwcm9wcyIsImRpc3BhdGNoIiwiY2xlYW5VcCIsImRpc3BsYXlOYW1lIiwiUHVyZUNvbXBvbmVudCIsImNvbmZpZyIsIkZvcm0iLCJTcGlubmVyIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0iLCJsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbCIsInRlc3ROb3RpZmljYXRpb25DaGFubmVsIiwidXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCIsInJlc2V0U2VjdXJlRmllbGQiLCJtYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlIiwidHJhbnNmb3JtU3VibWl0RGF0YSIsInRyYW5zZm9ybVRlc3REYXRhIiwiRWRpdE5vdGlmaWNhdGlvbkNoYW5uZWxQYWdlIiwiZm9ybURhdGEiLCJub3RpZmljYXRpb25DaGFubmVsIiwic2V0dGluZ3MiLCJpZCIsImNvbXBvbmVudERpZE1vdW50IiwicGFyc2VJbnQiLCJtYXRjaCIsInBhcmFtcyIsInJlbmRlciIsIm5hdk1vZGVsIiwibm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzIiwib25TdWJtaXQiLCJ0eXBlIiwiZmluZCIsIm4iLCJ2YWx1ZSIsImNvbnRyb2wiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJyZWdpc3RlciIsIndhdGNoIiwic2VsZWN0ZWRDaGFubmVsIiwiYyIsInJlbmRlcmVyQXZhaWxhYmxlIiwib25UZXN0Q2hhbm5lbCIsInNlY3VyZUZpZWxkcyIsInN0YXRlIiwibmF2SW5kZXgiLCJGaWVsZCIsIklucHV0IiwiSW5wdXRDb250cm9sIiwiU2VsZWN0IiwiTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMiLCJCYXNpY1NldHRpbmdzIiwiY3VycmVudEZvcm1WYWx1ZXMiLCJjaGFubmVscyIsIm5hbWUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJmaWVsZCIsIm9wdGlvbnMiLCJmaWx0ZXIiLCJvIiwiQWxlcnQiLCJDb2xsYXBzYWJsZVNlY3Rpb24iLCJDaGFubmVsU2V0dGluZ3MiLCJoZWFkaW5nIiwiaW5mbyIsImNzcyIsIkJ1dHRvbiIsIkhvcml6b250YWxHcm91cCIsInN0eWxlc0ZhY3RvcnkiLCJ1c2VUaGVtZSIsIk5vdGlmaWNhdGlvblNldHRpbmdzIiwic2VsZWN0YWJsZUNoYW5uZWxzIiwiaW1hZ2VSZW5kZXJlckF2YWlsYWJsZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImZpZWxkc1RvV2F0Y2giLCJTZXQiLCJzaG93V2hlbiIsIm1hcCIsIm9wdGlvbiIsImZvcm1Db250YWluZXIiLCJmb3JtSXRlbSIsImxlbmd0aCIsImZvcm1CdXR0b25zIiwiYXBwU3ViVXJsIiwidGhlbWUiLCJzcGFjaW5nIiwibWQiLCJ4bCIsIkNoZWNrYm94IiwiT3B0aW9uRWxlbWVudCIsInNlbGVjdGVkQ2hhbm5lbE9wdGlvbnMiLCJvblJlc2V0U2VjdXJlRmllbGQiLCJpbmRleCIsImtleSIsImxhYmVsIiwic2VsZWN0ZWRPcHRpb25WYWx1ZSIsImlzIiwiZWxlbWVudCIsInNlY3VyZSIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0aW9uIiwiSW5mb0JveCIsInVwbG9hZEltYWdlIiwic2VuZFJlbWluZGVyIiwiVGV4dEFyZWEiLCJpbnZhbGlkIiwibW9kZWxWYWx1ZSIsInZhbGlkYXRlIiwidiIsInZhbGlkYXRpb25SdWxlIiwidmFsaWRhdGVPcHRpb24iLCJpbnB1dFR5cGUiLCJwbGFjZWhvbGRlciIsInNlbGVjdE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJSZWdFeHAiLCJ0ZXN0IiwiZ2V0QmFja2VuZFNydiIsImlzRmV0Y2hFcnJvciIsImxvY2F0aW9uU2VydmljZSIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImxvYWRBbGVydFJ1bGVzIiwibG9hZGVkQWxlcnRSdWxlcyIsIm5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQiLCJzZXROb3RpZmljYXRpb25DaGFubmVscyIsImdldEFsZXJ0UnVsZXNBc3luYyIsInJ1bGVzIiwiZ2V0IiwidG9nZ2xlUGF1c2VBbGVydFJ1bGUiLCJwb3N0Iiwic3RhdGVGaWx0ZXIiLCJnZXRTZWFyY2hPYmplY3QiLCJ0b1N0cmluZyIsImNyZWF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwiLCJkYXRhIiwicHVzaCIsInB1dCIsImdldFN0YXRlIiwiY2hhbm5lbCIsImxvYWROb3RpZmljYXRpb25UeXBlcyIsImFsZXJ0Tm90aWZpZXJzIiwibm90aWZpY2F0aW9uVHlwZXMiLCJzb3J0IiwibzEiLCJvMiIsIm1lbW9pemVPbmUiLCJkZWZhdWx0VmFsdWVzIiwiZGlzYWJsZVJlc29sdmVNZXNzYWdlIiwiZnJlcXVlbmN5IiwiYXV0b1Jlc29sdmUiLCJodHRwTWV0aG9kIiwic2V2ZXJpdHkiLCJzZWN1cmVTZXR0aW5ncyIsImlzRGVmYXVsdCIsIm5vdGlmaWNhdGlvbkNoYW5uZWxzIiwiaW5jbHVkZURlc2NyaXB0aW9uIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiaGFzT3duUHJvcGVydHkiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9