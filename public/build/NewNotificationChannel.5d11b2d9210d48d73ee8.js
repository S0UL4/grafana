"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewNotificationChannel"],{

/***/ "./public/app/features/alerting/NewNotificationChannelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelForm.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/utils/notificationChannels.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class NewNotificationChannelPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", data => {
      this.props.createNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.transformSubmitData)(Object.assign({}, _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.defaultValues, data)));
    });

    _defineProperty(this, "onTestChannel", data => {
      this.props.testNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.transformTestData)(Object.assign({}, _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.defaultValues, data)));
    });
  }

  componentDidMount() {
    this.props.loadNotificationTypes();
  }

  render() {
    const {
      navModel,
      notificationChannelTypes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
          className: "page-sub-heading",
          children: "New notification channel"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
          onSubmit: this.onSubmit,
          validateOn: "onChange",
          defaultValues: _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.defaultValues,
          maxWidth: 600,
          children: ({
            register,
            errors,
            control,
            getValues,
            watch
          }) => {
            const selectedChannel = notificationChannelTypes.find(c => c.value === getValues().type.value);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_6__.NotificationChannelForm, {
              selectableChannels: (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.mapChannelsToSelectableValue)(notificationChannelTypes, true),
              selectedChannel: selectedChannel,
              onTestChannel: this.onTestChannel,
              register: register,
              errors: errors,
              getValues: getValues,
              control: control,
              watch: watch,
              imageRendererAvailable: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.rendererAvailable,
              resetSecureField: this.props.resetSecureField,
              secureFields: {}
            });
          }
        })]
      })
    });
  }

}

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'channels'),
  notificationChannelTypes: state.notificationChannel.notificationChannelTypes
});

const mapDispatchToProps = {
  createNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.createNotificationChannel,
  loadNotificationTypes: _state_actions__WEBPACK_IMPORTED_MODULE_7__.loadNotificationTypes,
  testNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.testNotificationChannel,
  resetSecureField: _state_reducers__WEBPACK_IMPORTED_MODULE_8__.resetSecureField
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewNotificationChannelPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3Tm90aWZpY2F0aW9uQ2hhbm5lbC41ZDExYjJkOTIxMGQ0OGQ3M2VlOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFPQSxNQUFNZ0IsMEJBQU4sU0FBeUNmLGdEQUF6QyxDQUE4RDtFQUFBO0lBQUE7O0lBQUEsa0NBS2hEZ0IsSUFBRCxJQUFrQztNQUMzQyxLQUFLQyxLQUFMLENBQVdWLHlCQUFYLENBQXFDTSxnRkFBbUIsbUJBQU1GLHNFQUFOLEVBQXdCSyxJQUF4QixFQUF4RDtJQUNELENBUDJEOztJQUFBLHVDQVMzQ0EsSUFBRCxJQUFrQztNQUNoRCxLQUFLQyxLQUFMLENBQVdSLHVCQUFYLENBQW1DSyw4RUFBaUIsbUJBQU1ILHNFQUFOLEVBQXdCSyxJQUF4QixFQUFwRDtJQUNELENBWDJEO0VBQUE7O0VBQzVERSxpQkFBaUIsR0FBRztJQUNsQixLQUFLRCxLQUFMLENBQVdULHFCQUFYO0VBQ0Q7O0VBVURXLE1BQU0sR0FBRztJQUNQLE1BQU07TUFBRUMsUUFBRjtNQUFZQztJQUFaLElBQXlDLEtBQUtKLEtBQXBEO0lBRUEsb0JBQ0Usd0RBQUMscUVBQUQ7TUFBTSxRQUFRLEVBQUVHLFFBQWhCO01BQUEsdUJBQ0UseURBQUMsOEVBQUQ7UUFBQSxvQ0FDRTtVQUFJLFNBQVMsRUFBQyxrQkFBZDtVQUFBO1FBQUEsRUFERixnQkFFRSx3REFBQyw2Q0FBRDtVQUFNLFFBQVEsRUFBRSxLQUFLRSxRQUFyQjtVQUErQixVQUFVLEVBQUMsVUFBMUM7VUFBcUQsYUFBYSxFQUFFWCxzRUFBcEU7VUFBbUYsUUFBUSxFQUFFLEdBQTdGO1VBQUEsVUFDRyxDQUFDO1lBQUVZLFFBQUY7WUFBWUMsTUFBWjtZQUFvQkMsT0FBcEI7WUFBNkJDLFNBQTdCO1lBQXdDQztVQUF4QyxDQUFELEtBQXFEO1lBQ3BELE1BQU1DLGVBQWUsR0FBR1Asd0JBQXdCLENBQUNRLElBQXpCLENBQStCQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsS0FBRixLQUFZTCxTQUFTLEdBQUdNLElBQVosQ0FBaUJELEtBQWxFLENBQXhCO1lBRUEsb0JBQ0Usd0RBQUMsd0ZBQUQ7Y0FDRSxrQkFBa0IsRUFBRW5CLHlGQUE0QixDQUFDUyx3QkFBRCxFQUEyQixJQUEzQixDQURsRDtjQUVFLGVBQWUsRUFBRU8sZUFGbkI7Y0FHRSxhQUFhLEVBQUUsS0FBS0ssYUFIdEI7Y0FJRSxRQUFRLEVBQUVWLFFBSlo7Y0FLRSxNQUFNLEVBQUVDLE1BTFY7Y0FNRSxTQUFTLEVBQUVFLFNBTmI7Y0FPRSxPQUFPLEVBQUVELE9BUFg7Y0FRRSxLQUFLLEVBQUVFLEtBUlQ7Y0FTRSxzQkFBc0IsRUFBRXpCLHNFQVQxQjtjQVVFLGdCQUFnQixFQUFFLEtBQUtlLEtBQUwsQ0FBV1AsZ0JBVi9CO2NBV0UsWUFBWSxFQUFFO1lBWGhCLEVBREY7VUFlRDtRQW5CSCxFQUZGO01BQUE7SUFERixFQURGO0VBNEJEOztBQTVDMkQ7O0FBK0M5RCxNQUFNeUIsZUFBZSxHQUFJQyxLQUFELEtBQXdCO0VBQzlDaEIsUUFBUSxFQUFFZix3RUFBVyxDQUFDK0IsS0FBSyxDQUFDQyxRQUFQLEVBQWlCLFVBQWpCLENBRHlCO0VBRTlDaEIsd0JBQXdCLEVBQUVlLEtBQUssQ0FBQ0UsbUJBQU4sQ0FBMEJqQjtBQUZOLENBQXhCLENBQXhCOztBQUtBLE1BQU1rQixrQkFBa0IsR0FBRztFQUN6QmhDLHlCQUR5QjtFQUV6QkMscUJBRnlCO0VBR3pCQyx1QkFIeUI7RUFJekJDLGdCQUFnQkEsK0RBQUFBO0FBSlMsQ0FBM0I7QUFPQSxNQUFNOEIsU0FBUyxHQUFHdkMsb0RBQU8sQ0FBQ2tDLGVBQUQsRUFBa0JJLGtCQUFsQixDQUF6QjtBQUVBLGlFQUFlQyxTQUFTLENBQUN6QiwwQkFBRCxDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUdBO0FBS0E7Ozs7QUFTTyxNQUFNK0IsYUFBd0IsR0FBRyxDQUFDO0VBQ3ZDckIsT0FEdUM7RUFFdkNzQixpQkFGdUM7RUFHdkN2QixNQUh1QztFQUl2Q3dCLFlBSnVDO0VBS3ZDcEIsZUFMdUM7RUFNdkNxQixRQU51QztFQU92QzFCLFFBUHVDO0VBUXZDYjtBQVJ1QyxDQUFELEtBU2xDO0VBQ0osb0JBQ0U7SUFBQSx3QkFDRSx1REFBQyw4Q0FBRDtNQUFPLEtBQUssRUFBQyxNQUFiO01BQW9CLE9BQU8sRUFBRSxDQUFDLENBQUNjLE1BQU0sQ0FBQzBCLElBQXRDO01BQTRDLEtBQUssRUFBRTFCLE1BQU0sQ0FBQzBCLElBQVAsSUFBZTFCLE1BQU0sQ0FBQzBCLElBQVAsQ0FBWUMsT0FBOUU7TUFBQSx1QkFDRSx1REFBQyw4Q0FBRCxvQkFBVzVCLFFBQVEsQ0FBQyxNQUFELEVBQVM7UUFBRTZCLFFBQVEsRUFBRTtNQUFaLENBQVQsQ0FBbkI7SUFERixFQURGLGVBSUUsdURBQUMsOENBQUQ7TUFBTyxLQUFLLEVBQUMsTUFBYjtNQUFBLHVCQUNFLHVEQUFDLHFEQUFEO1FBQ0UsSUFBSSxFQUFDLE1BRFA7UUFFRSxNQUFNLEVBQUU7VUFBQSxJQUFDLEVBQUQ7VUFBQSxJQUFvQkMsS0FBcEIsc0NBQUdBLEtBQUg7O1VBQUEsb0JBQWtDLHVEQUFDLCtDQUFELG9CQUFZQSxLQUFaO1lBQW1CLE9BQU8sRUFBRUo7VUFBNUIsR0FBbEM7UUFBQSxDQUZWO1FBR0UsT0FBTyxFQUFFeEIsT0FIWDtRQUlFLEtBQUssRUFBRTtVQUFFMkIsUUFBUSxFQUFFO1FBQVo7TUFKVDtJQURGLEVBSkYsZUFZRSx1REFBQyxtRkFBRDtNQUNFLHNCQUFzQixFQUFFeEIsZUFBZSxDQUFDMEIsT0FBaEIsQ0FBd0JDLE1BQXhCLENBQWdDQyxDQUFELElBQU9BLENBQUMsQ0FBQ0osUUFBeEMsQ0FEMUI7TUFFRSxpQkFBaUIsRUFBRUwsaUJBRnJCO01BR0UsWUFBWSxFQUFFQyxZQUhoQjtNQUlFLGtCQUFrQixFQUFFdEMsZ0JBSnRCO01BS0UsUUFBUSxFQUFFYSxRQUxaO01BTUUsTUFBTSxFQUFFQyxNQU5WO01BT0UsT0FBTyxFQUFFQztJQVBYLEVBWkY7RUFBQSxFQURGO0FBd0JELENBbENNOzs7Ozs7Ozs7Ozs7Ozs7QUNqQlA7QUFFQTtBQUtBOzs7QUFRTyxNQUFNa0MsZUFBMEIsR0FBRyxDQUFDO0VBQ3pDbEMsT0FEeUM7RUFFekNzQixpQkFGeUM7RUFHekN2QixNQUh5QztFQUl6Q0ksZUFKeUM7RUFLekNvQixZQUx5QztFQU16Q3pCLFFBTnlDO0VBT3pDYjtBQVB5QyxDQUFELEtBUXBDO0VBQUE7O0VBQ0osb0JBQ0Usd0RBQUMsMkRBQUQ7SUFBb0IsS0FBSyxFQUFHLFlBQVdrQixlQUFlLENBQUNnQyxPQUFRLEVBQS9EO0lBQWtFLE1BQU0sRUFBRSxLQUExRTtJQUFBLFdBQ0doQyxlQUFlLENBQUNpQyxJQUFoQixLQUF5QixFQUF6QixpQkFBK0IsdURBQUMsOENBQUQ7TUFBTyxRQUFRLEVBQUMsTUFBaEI7TUFBdUIsS0FBSywyQkFBRWpDLGVBQWUsQ0FBQ2lDLElBQWxCLHlFQUEwQjtJQUF0RCxFQURsQyxlQUVFLHVEQUFDLG1GQUFEO01BQ0Usc0JBQXNCLEVBQUVqQyxlQUFlLENBQUMwQixPQUFoQixDQUF3QkMsTUFBeEIsQ0FBZ0NDLENBQUQsSUFBTyxDQUFDQSxDQUFDLENBQUNKLFFBQXpDLENBRDFCO01BRUUsaUJBQWlCLEVBQUVMLGlCQUZyQjtNQUdFLFFBQVEsRUFBRXhCLFFBSFo7TUFJRSxNQUFNLEVBQUVDLE1BSlY7TUFLRSxPQUFPLEVBQUVDLE9BTFg7TUFNRSxrQkFBa0IsRUFBRWYsZ0JBTnRCO01BT0UsWUFBWSxFQUFFc0M7SUFQaEIsRUFGRjtFQUFBLEVBREY7QUFjRCxDQXZCTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZlA7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQWlCTyxNQUFNMUMsdUJBQWtDLEdBQUcsQ0FBQztFQUNqRG1CLE9BRGlEO0VBRWpERCxNQUZpRDtFQUdqREksZUFIaUQ7RUFJakQwQyxrQkFKaUQ7RUFLakQvQyxRQUxpRDtFQU1qREksS0FOaUQ7RUFPakRELFNBUGlEO0VBUWpENkMsc0JBUmlEO0VBU2pEdEMsYUFUaUQ7RUFVakR2QixnQkFWaUQ7RUFXakRzQztBQVhpRCxDQUFELEtBWTVDO0VBQ0osTUFBTXdCLE1BQU0sR0FBR0MsU0FBUyxDQUFDTixxREFBUSxFQUFULENBQXhCO0VBRUFKLGdEQUFTLENBQUMsTUFBTTtJQUNkO0FBQ0o7QUFDQTtBQUNBO0lBQ0ksTUFBTVcsYUFBYSxHQUNqQixJQUFJQyxHQUFKLENBQ0UvQyxlQURGLGFBQ0VBLGVBREYsdUJBQ0VBLGVBQWUsQ0FBRTBCLE9BQWpCLENBQ0dDLE1BREgsQ0FDV0MsQ0FBRCxJQUFPQSxDQUFDLENBQUNvQixRQUFGLENBQVd2QixLQUQ1QixFQUVHd0IsR0FGSCxDQUVRQyxNQUFELElBQVk7TUFDZixPQUFRLFlBQVdBLE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQnZCLEtBQU0sRUFBekM7SUFDRCxDQUpILENBREYsS0FNSyxFQVBQO0lBUUExQixLQUFLLENBQUMsQ0FBQyxNQUFELEVBQVMsY0FBVCxFQUF5QixhQUF6QixFQUF3QyxHQUFHK0MsYUFBM0MsQ0FBRCxDQUFMO0VBQ0QsQ0FkUSxFQWNOLENBQUM5QyxlQUFELGFBQUNBLGVBQUQsdUJBQUNBLGVBQWUsQ0FBRTBCLE9BQWxCLEVBQTJCM0IsS0FBM0IsQ0FkTSxDQUFUO0VBZ0JBLE1BQU1vQixpQkFBaUIsR0FBR3JCLFNBQVMsRUFBbkM7O0VBRUEsSUFBSSxDQUFDRSxlQUFMLEVBQXNCO0lBQ3BCLDRDQUFPLHVEQUFDLGdEQUFELEtBQVA7RUFDRDs7RUFFRCxvQkFDRTtJQUFLLFNBQVMsRUFBRTRDLE1BQU0sQ0FBQ08sYUFBdkI7SUFBQSx3QkFDRTtNQUFLLFNBQVMsRUFBRVAsTUFBTSxDQUFDUSxRQUF2QjtNQUFBLHVCQUNFLHVEQUFDLHlEQUFEO1FBQ0UsZUFBZSxFQUFFcEQsZUFEbkI7UUFFRSxRQUFRLEVBQUUwQyxrQkFGWjtRQUdFLFlBQVksRUFBRXRCLFlBSGhCO1FBSUUsZ0JBQWdCLEVBQUV0QyxnQkFKcEI7UUFLRSxpQkFBaUIsRUFBRXFDLGlCQUxyQjtRQU1FLFFBQVEsRUFBRXhCLFFBTlo7UUFPRSxNQUFNLEVBQUVDLE1BUFY7UUFRRSxPQUFPLEVBQUVDO01BUlg7SUFERixFQURGLEVBY0dHLGVBQWUsQ0FBQzBCLE9BQWhCLENBQXdCQyxNQUF4QixDQUFnQ0MsQ0FBRCxJQUFPLENBQUNBLENBQUMsQ0FBQ0osUUFBekMsRUFBbUQ2QixNQUFuRCxHQUE0RCxDQUE1RCxpQkFDQztNQUFLLFNBQVMsRUFBRVQsTUFBTSxDQUFDUSxRQUF2QjtNQUFBLHVCQUNFLHVEQUFDLDZEQUFEO1FBQ0UsZUFBZSxFQUFFcEQsZUFEbkI7UUFFRSxZQUFZLEVBQUVvQixZQUZoQjtRQUdFLGdCQUFnQixFQUFFdEMsZ0JBSHBCO1FBSUUsaUJBQWlCLEVBQUVxQyxpQkFKckI7UUFLRSxRQUFRLEVBQUV4QixRQUxaO1FBTUUsTUFBTSxFQUFFQyxNQU5WO1FBT0UsT0FBTyxFQUFFQztNQVBYO0lBREYsRUFmSixlQTJCRTtNQUFLLFNBQVMsRUFBRStDLE1BQU0sQ0FBQ1EsUUFBdkI7TUFBQSx1QkFDRSx1REFBQyx1RUFBRDtRQUNFLHNCQUFzQixFQUFFVCxzQkFEMUI7UUFFRSxpQkFBaUIsRUFBRXhCLGlCQUZyQjtRQUdFLFFBQVEsRUFBRXhCLFFBSFo7UUFJRSxNQUFNLEVBQUVDLE1BSlY7UUFLRSxPQUFPLEVBQUVDO01BTFg7SUFERixFQTNCRixlQW9DRTtNQUFLLFNBQVMsRUFBRStDLE1BQU0sQ0FBQ1UsV0FBdkI7TUFBQSx1QkFDRSx3REFBQyx3REFBRDtRQUFBLDhDQUNFLHVEQUFDLCtDQUFEO1VBQVEsSUFBSSxFQUFDLFFBQWI7VUFBQTtRQUFBLEVBREYsZ0JBRUUsdURBQUMsK0NBQUQ7VUFBUSxJQUFJLEVBQUMsUUFBYjtVQUFzQixPQUFPLEVBQUMsV0FBOUI7VUFBMEMsT0FBTyxFQUFFLE1BQU1qRCxhQUFhLENBQUNQLFNBQVMsRUFBVixDQUF0RTtVQUFBO1FBQUEsRUFGRixlQUtFO1VBQUcsSUFBSSxFQUFHLEdBQUV4QixpRUFBaUIseUJBQTdCO1VBQUEsK0NBQ0UsdURBQUMsK0NBQUQ7WUFBUSxJQUFJLEVBQUMsUUFBYjtZQUFzQixPQUFPLEVBQUMsV0FBOUI7WUFBQTtVQUFBLEVBREY7UUFBQSxFQUxGO01BQUE7SUFERixFQXBDRjtFQUFBLEVBREY7QUFvREQsQ0F6Rk07QUEyRlAsTUFBTXVFLFNBQVMsR0FBR1AsMERBQWEsQ0FBRWtCLEtBQUQsSUFBeUI7RUFDdkQsT0FBTztJQUNMTCxhQUFhLEVBQUVqQiw2Q0FBSSxFQURkO0lBRUxrQixRQUFRLEVBQUVsQiw2Q0FBSTtBQUNsQjtBQUNBLHFCQUFxQnNCLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxFQUFHO0FBQ3RDLEtBTFM7SUFNTEosV0FBVyxFQUFFcEIsNkNBQUk7QUFDckIscUJBQXFCc0IsS0FBSyxDQUFDQyxPQUFOLENBQWNFLEVBQUc7QUFDdEM7RUFSUyxDQUFQO0FBVUQsQ0FYOEIsQ0FBL0I7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUdBO0FBS0E7OztBQVVPLE1BQU0xQywwQkFBcUMsR0FBRyxDQUFDO0VBQ3BEcEIsT0FEb0Q7RUFFcERzQixpQkFGb0Q7RUFHcER2QixNQUhvRDtFQUlwRGtFLHNCQUpvRDtFQUtwRG5FLFFBTG9EO0VBTXBEb0Usa0JBTm9EO0VBT3BEM0M7QUFQb0QsQ0FBRCxLQVEvQztFQUNKLG9CQUNFO0lBQUEsVUFDRzBDLHNCQUFzQixDQUFDYixHQUF2QixDQUEyQixDQUFDQyxNQUFELEVBQW9DYyxLQUFwQyxLQUFzRDtNQUFBOztNQUNoRixNQUFNQyxHQUFHLEdBQUksR0FBRWYsTUFBTSxDQUFDZ0IsS0FBTSxJQUFHRixLQUFNLEVBQXJDLENBRGdGLENBRWhGO01BQ0E7O01BQ0EsTUFBTUcsbUJBQW1CLEdBQ3ZCaEQsaUJBQWlCLENBQUUsWUFBVytCLE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQnZCLEtBQU0sRUFBbkMsQ0FBakIsSUFDQ04saUJBQWlCLENBQUUsWUFBVytCLE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQnZCLEtBQU0sRUFBbkMsQ0FBbEIsQ0FBb0Z0QixLQUZ0Rjs7TUFJQSxJQUFJK0MsTUFBTSxDQUFDRixRQUFQLENBQWdCdkIsS0FBaEIsSUFBeUIwQyxtQkFBbUIsS0FBS2pCLE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQm9CLEVBQXJFLEVBQXlFO1FBQ3ZFLE9BQU8sSUFBUDtNQUNEOztNQUVELElBQUlsQixNQUFNLENBQUNtQixPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO1FBQ2pDLG9CQUNFLHVEQUFDLDhDQUFEO1VBQUEsdUJBQ0UsdURBQUMsaURBQUQsb0JBQ00xRSxRQUFRLENBQ1Z1RCxNQUFNLENBQUNvQixNQUFQLEdBQWlCLGtCQUFpQnBCLE1BQU0sQ0FBQ3FCLFlBQWEsRUFBdEQsR0FBMkQsWUFBV3JCLE1BQU0sQ0FBQ3FCLFlBQWEsRUFEaEYsQ0FEZDtZQUlFLEtBQUssRUFBRXJCLE1BQU0sQ0FBQ2dCLEtBSmhCO1lBS0UsV0FBVyxFQUFFaEIsTUFBTSxDQUFDc0I7VUFMdEI7UUFERixHQUFZUCxHQUFaLENBREY7TUFXRDs7TUFDRCxvQkFDRSx1REFBQyw4Q0FBRDtRQUVFLEtBQUssRUFBRWYsTUFBTSxDQUFDZ0IsS0FGaEI7UUFHRSxXQUFXLEVBQUVoQixNQUFNLENBQUNzQixXQUh0QjtRQUlFLE9BQU8sRUFBRTVFLE1BQU0sQ0FBQzZFLFFBQVAsSUFBbUIsQ0FBQyxDQUFDN0UsTUFBTSxDQUFDNkUsUUFBUCxDQUFnQnZCLE1BQU0sQ0FBQ3FCLFlBQXZCLENBSmhDO1FBS0UsS0FBSyxFQUFFM0UsTUFBTSxDQUFDNkUsUUFBUCw4QkFBbUI3RSxNQUFNLENBQUM2RSxRQUFQLENBQWdCdkIsTUFBTSxDQUFDcUIsWUFBdkIsQ0FBbkIsMERBQW1CLHNCQUFzQ2hELE9BQXpELENBTFQ7UUFBQSxVQU9HSCxZQUFZLElBQUlBLFlBQVksQ0FBQzhCLE1BQU0sQ0FBQ3FCLFlBQVIsQ0FBNUIsZ0JBQ0MsdURBQUMsOENBQUQ7VUFDRSxRQUFRLEVBQUUsSUFEWjtVQUVFLEtBQUssRUFBQyxZQUZSO1VBR0UsTUFBTSxlQUNKLHVEQUFDLCtDQUFEO1lBQVEsT0FBTyxFQUFFLE1BQU1SLGtCQUFrQixDQUFDYixNQUFNLENBQUNxQixZQUFSLENBQXpDO1lBQWdFLElBQUksRUFBQyxNQUFyRTtZQUE0RSxJQUFJLEVBQUMsUUFBakY7WUFBMEYsSUFBSSxFQUFDLElBQS9GO1lBQUE7VUFBQTtRQUpKLEVBREQsZ0JBV0MsdURBQUMseURBQUQ7VUFBZSxNQUFNLEVBQUVyQixNQUF2QjtVQUErQixRQUFRLEVBQUV2RCxRQUF6QztVQUFtRCxPQUFPLEVBQUVFO1FBQTVEO01BbEJKLEdBQ09vRSxHQURQLENBREY7SUF1QkQsQ0FoREE7RUFESCxFQURGO0FBcURELENBOURNOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJQO0FBRUE7Ozs7QUFRTyxNQUFNeEIsb0JBQStCLEdBQUcsQ0FBQztFQUFFdEIsaUJBQUY7RUFBcUJ3QixzQkFBckI7RUFBNkNoRDtBQUE3QyxDQUFELEtBQTZEO0VBQzFHLG9CQUNFLHdEQUFDLDJEQUFEO0lBQW9CLEtBQUssRUFBQyx1QkFBMUI7SUFBa0QsTUFBTSxFQUFFLEtBQTFEO0lBQUEsd0JBQ0UsdURBQUMsOENBQUQ7TUFBQSx1QkFDRSx1REFBQyxpREFBRCxvQkFBY0EsUUFBUSxDQUFDLFdBQUQsQ0FBdEI7UUFBcUMsS0FBSyxFQUFDLFNBQTNDO1FBQXFELFdBQVcsRUFBQztNQUFqRTtJQURGLEVBREYsZUFJRSx1REFBQyw4Q0FBRDtNQUFBLHVCQUNFLHVEQUFDLGlEQUFELG9CQUNNQSxRQUFRLENBQUMsc0JBQUQsQ0FEZDtRQUVFLEtBQUssRUFBQyxlQUZSO1FBR0UsV0FBVyxFQUFDO01BSGQ7SUFERixFQUpGLEVBV0d3QixpQkFBaUIsQ0FBQ3dELFdBQWxCLElBQWlDLENBQUNoQyxzQkFBbEMsMENBQ0MsdURBQUMsZ0RBQUQ7TUFBUyxLQUFLLEVBQUMsdUNBQWY7TUFBQTtJQUFBLEVBREQsRUFYSCxlQWlCRSx1REFBQyw4Q0FBRDtNQUFBLHVCQUNFLHVEQUFDLGlEQUFELG9CQUNNaEQsUUFBUSxDQUFDLHVCQUFELENBRGQ7UUFFRSxLQUFLLEVBQUMseUJBRlI7UUFHRSxXQUFXLEVBQUM7TUFIZDtJQURGLEVBakJGLGVBd0JFLHVEQUFDLDhDQUFEO01BQUEsdUJBQ0UsdURBQUMsaURBQUQsb0JBQ01BLFFBQVEsQ0FBQyxjQUFELENBRGQ7UUFFRSxLQUFLLEVBQUMsZ0JBRlI7UUFHRSxXQUFXLEVBQUM7TUFIZDtJQURGLEVBeEJGLEVBK0JHd0IsaUJBQWlCLENBQUN5RCxZQUFsQixpQkFDQztNQUFBLHVCQUNFLHVEQUFDLDhDQUFEO1FBQ0UsS0FBSyxFQUFDLHFCQURSO1FBRUUsV0FBVyxFQUFDLDBPQUZkO1FBQUEsdUJBTUUsdURBQUMsOENBQUQsb0JBQVdqRixRQUFRLENBQUMsV0FBRCxDQUFuQjtVQUFrQyxLQUFLLEVBQUU7UUFBekM7TUFORjtJQURGLEVBaENKO0VBQUEsRUFERjtBQThDRCxDQS9DTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7QUFFQTs7QUFTTyxNQUFNa0UsYUFBd0IsR0FBRyxDQUFDO0VBQUVoRSxPQUFGO0VBQVdxRCxNQUFYO0VBQW1CdkQsUUFBbkI7RUFBNkJtRjtBQUE3QixDQUFELEtBQTRDO0VBQ2xGLE1BQU1DLFVBQVUsR0FBRzdCLE1BQU0sQ0FBQ29CLE1BQVAsR0FBaUIsa0JBQWlCcEIsTUFBTSxDQUFDcUIsWUFBYSxFQUF0RCxHQUEyRCxZQUFXckIsTUFBTSxDQUFDcUIsWUFBYSxFQUE3Rzs7RUFDQSxRQUFRckIsTUFBTSxDQUFDbUIsT0FBZjtJQUNFLEtBQUssT0FBTDtNQUNFLG9CQUNFLHVEQUFDLDhDQUFELG9CQUNNMUUsUUFBUSxDQUFFLEdBQUVvRixVQUFXLEVBQWYsRUFBa0I7UUFDNUJ2RCxRQUFRLEVBQUUwQixNQUFNLENBQUMxQixRQUFQLEdBQWtCLFVBQWxCLEdBQStCLEtBRGI7UUFFNUJ3RCxRQUFRLEVBQUdDLENBQUQsSUFBUS9CLE1BQU0sQ0FBQ2dDLGNBQVAsS0FBMEIsRUFBMUIsR0FBK0JDLGNBQWMsQ0FBQ0YsQ0FBRCxFQUFJL0IsTUFBTSxDQUFDZ0MsY0FBWCxDQUE3QyxHQUEwRTtNQUZoRSxDQUFsQixDQURkO1FBS0UsT0FBTyxFQUFFSixPQUxYO1FBTUUsSUFBSSxFQUFFNUIsTUFBTSxDQUFDa0MsU0FOZjtRQU9FLFdBQVcsRUFBRWxDLE1BQU0sQ0FBQ21DO01BUHRCLEdBREY7O0lBWUYsS0FBSyxRQUFMO01BQ0Usb0JBQ0UsdURBQUMscURBQUQ7UUFDRSxPQUFPLEVBQUV4RixPQURYO1FBRUUsSUFBSSxFQUFHLEdBQUVrRixVQUFXLEVBRnRCO1FBR0UsTUFBTSxFQUFFO1VBQUE7O1VBQUEsSUFBQyxFQUFEO1VBQUEsSUFBb0J0RCxLQUFwQixzQ0FBR0EsS0FBSDs7VUFBQSxvQkFDTix1REFBQywrQ0FBRCxvQkFBWUEsS0FBWjtZQUFtQixPQUFPLDJCQUFFeUIsTUFBTSxDQUFDb0MsYUFBVCx5RUFBMEJDLFNBQXBEO1lBQStELE9BQU8sRUFBRVQ7VUFBeEUsR0FETTtRQUFBO01BSFYsRUFERjs7SUFVRixLQUFLLFVBQUw7TUFDRSxvQkFDRSx1REFBQyxpREFBRDtRQUNFLE9BQU8sRUFBRUE7TUFEWCxHQUVNbkYsUUFBUSxDQUFFLEdBQUVvRixVQUFXLEVBQWYsRUFBa0I7UUFDNUJ2RCxRQUFRLEVBQUUwQixNQUFNLENBQUMxQixRQUFQLEdBQWtCLFVBQWxCLEdBQStCLEtBRGI7UUFFNUJ3RCxRQUFRLEVBQUdDLENBQUQsSUFBUS9CLE1BQU0sQ0FBQ2dDLGNBQVAsS0FBMEIsRUFBMUIsR0FBK0JDLGNBQWMsQ0FBQ0YsQ0FBRCxFQUFJL0IsTUFBTSxDQUFDZ0MsY0FBWCxDQUE3QyxHQUEwRTtNQUZoRSxDQUFsQixDQUZkLEVBREY7O0lBVUY7TUFDRU0sT0FBTyxDQUFDQyxLQUFSLENBQWMsdUJBQWQsRUFBdUN2QyxNQUFNLENBQUNtQixPQUE5QztNQUNBLE9BQU8sSUFBUDtFQXRDSjtBQXdDRCxDQTFDTTs7QUE0Q1AsTUFBTWMsY0FBYyxHQUFHLENBQUNoRixLQUFELEVBQWdCK0UsY0FBaEIsS0FBMkM7RUFDaEUsT0FBT1EsTUFBTSxDQUFDUixjQUFELENBQU4sQ0FBdUJTLElBQXZCLENBQTRCeEYsS0FBNUIsSUFBcUMsSUFBckMsR0FBNEMsZ0JBQW5EO0FBQ0QsQ0FGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUdBO0FBRU8sU0FBU21HLGtCQUFULENBQTRCNUUsT0FBNUIsRUFBMkU7RUFDaEYsT0FBTyxNQUFPNkUsUUFBUCxJQUFvQjtJQUN6QkEsUUFBUSxDQUFDTCx5REFBYyxFQUFmLENBQVI7SUFDQSxNQUFNTSxLQUFxQixHQUFHLE1BQU1aLCtEQUFhLEdBQUdhLEdBQWhCLENBQW9CLGFBQXBCLEVBQW1DL0UsT0FBbkMsQ0FBcEM7SUFDQTZFLFFBQVEsQ0FBQ0osMkRBQWdCLENBQUNLLEtBQUQsQ0FBakIsQ0FBUjtFQUNELENBSkQ7QUFLRDtBQUVNLFNBQVNFLG9CQUFULENBQThCQyxFQUE5QixFQUEwQ2pGLE9BQTFDLEVBQTJGO0VBQ2hHLE9BQU8sTUFBTzZFLFFBQVAsSUFBb0I7SUFDekIsTUFBTVgsK0RBQWEsR0FBR2dCLElBQWhCLENBQXNCLGVBQWNELEVBQUcsUUFBdkMsRUFBZ0RqRixPQUFoRCxDQUFOO0lBQ0EsTUFBTW1GLFdBQVcsR0FBR2YsNkVBQUEsR0FBa0N0RixLQUFsQyxJQUEyQyxLQUEvRDtJQUNBK0YsUUFBUSxDQUFDRCxrQkFBa0IsQ0FBQztNQUFFOUYsS0FBSyxFQUFFcUcsV0FBVyxDQUFDRSxRQUFaO0lBQVQsQ0FBRCxDQUFuQixDQUFSO0VBQ0QsQ0FKRDtBQUtEO0FBRU0sU0FBU3BJLHlCQUFULENBQW1DUyxJQUFuQyxFQUEwRTtFQUMvRSxPQUFPLE1BQU9tSCxRQUFQLElBQW9CO0lBQ3pCLElBQUk7TUFDRixNQUFNWCwrREFBYSxHQUFHZ0IsSUFBaEIsQ0FBc0IsMEJBQXRCLEVBQWlEeEgsSUFBakQsQ0FBTjtNQUNBbUgsUUFBUSxDQUFDUiwyREFBUyxDQUFDRSx3RkFBeUIsQ0FBQyxzQkFBRCxDQUExQixDQUFWLENBQVI7TUFDQUgsa0VBQUEsQ0FBcUIseUJBQXJCO0lBQ0QsQ0FKRCxDQUlFLE9BQU9MLEtBQVAsRUFBYztNQUNkLElBQUlJLDhEQUFZLENBQUNKLEtBQUQsQ0FBaEIsRUFBeUI7UUFDdkJjLFFBQVEsQ0FBQ1IsMkRBQVMsQ0FBQ0Msc0ZBQXVCLENBQUNQLEtBQUssQ0FBQ3JHLElBQU4sQ0FBV3FHLEtBQVosQ0FBeEIsQ0FBVixDQUFSO01BQ0Q7SUFDRjtFQUNGLENBVkQ7QUFXRDtBQUVNLFNBQVN3Qix5QkFBVCxDQUFtQzdILElBQW5DLEVBQWlFO0VBQ3RFLE9BQU8sTUFBT21ILFFBQVAsSUFBb0I7SUFDekIsSUFBSTtNQUNGLE1BQU1YLCtEQUFhLEdBQUdzQixHQUFoQixDQUFxQiw0QkFBMkI5SCxJQUFJLENBQUN1SCxFQUFHLEVBQXhELEVBQTJEdkgsSUFBM0QsQ0FBTjtNQUNBbUgsUUFBUSxDQUFDUiwyREFBUyxDQUFDRSx3RkFBeUIsQ0FBQyxzQkFBRCxDQUExQixDQUFWLENBQVI7SUFDRCxDQUhELENBR0UsT0FBT1IsS0FBUCxFQUFjO01BQ2QsSUFBSUksOERBQVksQ0FBQ0osS0FBRCxDQUFoQixFQUF5QjtRQUN2QmMsUUFBUSxDQUFDUiwyREFBUyxDQUFDQyxzRkFBdUIsQ0FBQ1AsS0FBSyxDQUFDckcsSUFBTixDQUFXcUcsS0FBWixDQUF4QixDQUFWLENBQVI7TUFDRDtJQUNGO0VBQ0YsQ0FURDtBQVVEO0FBRU0sU0FBUzVHLHVCQUFULENBQWlDTyxJQUFqQyxFQUErRDtFQUNwRSxPQUFPLE9BQU9tSCxRQUFQLEVBQWlCWSxRQUFqQixLQUE4QjtJQUNuQyxNQUFNQyxPQUFPLEdBQUdELFFBQVEsR0FBR3pHLG1CQUFYLENBQStCQSxtQkFBL0M7SUFDQSxNQUFNa0YsK0RBQWEsR0FBR2dCLElBQWhCLENBQXFCLCtCQUFyQjtNQUF3REQsRUFBRSxFQUFFUyxPQUFPLENBQUNUO0lBQXBFLEdBQTJFdkgsSUFBM0UsRUFBTjtFQUNELENBSEQ7QUFJRDtBQUVNLFNBQVNSLHFCQUFULEdBQW9EO0VBQ3pELE9BQU8sTUFBTzJILFFBQVAsSUFBb0I7SUFDekIsTUFBTWMsY0FBNkIsR0FBRyxNQUFNekIsK0RBQWEsR0FBR2EsR0FBaEIsQ0FBcUIsc0JBQXJCLENBQTVDO0lBRUEsTUFBTWEsaUJBQWlCLEdBQUdELGNBQWMsQ0FBQ0UsSUFBZixDQUFvQixDQUFDQyxFQUFELEVBQUtDLEVBQUwsS0FBWTtNQUN4RCxJQUFJRCxFQUFFLENBQUNsRyxJQUFILEdBQVVtRyxFQUFFLENBQUNuRyxJQUFqQixFQUF1QjtRQUNyQixPQUFPLENBQVA7TUFDRDs7TUFDRCxPQUFPLENBQUMsQ0FBUjtJQUNELENBTHlCLENBQTFCO0lBT0FpRixRQUFRLENBQUNGLGtFQUF1QixDQUFDaUIsaUJBQUQsQ0FBeEIsQ0FBUjtFQUNELENBWEQ7QUFZRDtBQUVNLFNBQVNJLHVCQUFULENBQWlDZixFQUFqQyxFQUFnRTtFQUNyRSxPQUFPLE1BQU9KLFFBQVAsSUFBb0I7SUFDekIsTUFBTUEsUUFBUSxDQUFDM0gscUJBQXFCLEVBQXRCLENBQWQ7SUFDQSxNQUFNOEIsbUJBQW1CLEdBQUcsTUFBTWtGLCtEQUFhLEdBQUdhLEdBQWhCLENBQXFCLDRCQUEyQkUsRUFBRyxFQUFuRCxDQUFsQztJQUNBSixRQUFRLENBQUNILG9FQUF5QixDQUFDMUYsbUJBQUQsQ0FBMUIsQ0FBUjtFQUNELENBSkQ7QUFLRDs7Ozs7Ozs7Ozs7Ozs7OztBQzlFRDtBQUdBO0FBR08sTUFBTTNCLGFBQXFDLEdBQUc7RUFDbkQ0SCxFQUFFLEVBQUUsQ0FBQyxDQUQ4QztFQUVuRHJGLElBQUksRUFBRSxFQUY2QztFQUduRGxCLElBQUksRUFBRTtJQUFFRCxLQUFLLEVBQUUsT0FBVDtJQUFrQitELEtBQUssRUFBRTtFQUF6QixDQUg2QztFQUluRFUsWUFBWSxFQUFFLEtBSnFDO0VBS25EZ0QscUJBQXFCLEVBQUUsS0FMNEI7RUFNbkRDLFNBQVMsRUFBRSxLQU53QztFQU9uRHBELFFBQVEsRUFBRTtJQUNSRSxXQUFXLEVBQUVyRyxzRUFETDtJQUVSd0osV0FBVyxFQUFFLElBRkw7SUFHUkMsVUFBVSxFQUFFLE1BSEo7SUFJUkMsUUFBUSxFQUFFO0VBSkYsQ0FQeUM7RUFhbkRDLGNBQWMsRUFBRSxFQWJtQztFQWNuRDdHLFlBQVksRUFBRSxFQWRxQztFQWVuRDhHLFNBQVMsRUFBRTtBQWZ3QyxDQUE5QztBQWtCQSxNQUFNbEosNEJBQTRCLEdBQUcySSx1REFBVSxDQUNwRCxDQUFDUSxvQkFBRCxFQUFrREMsa0JBQWxELEtBQWtIO0VBQ2hILE9BQU9ELG9CQUFvQixDQUFDbEYsR0FBckIsQ0FBMEJtRSxPQUFELElBQWE7SUFDM0MsSUFBSWdCLGtCQUFKLEVBQXdCO01BQ3RCLE9BQU87UUFDTGpJLEtBQUssRUFBRWlILE9BQU8sQ0FBQ2pILEtBRFY7UUFFTCtELEtBQUssRUFBRWtELE9BQU8sQ0FBQ2xELEtBRlY7UUFHTE0sV0FBVyxFQUFFNEMsT0FBTyxDQUFDNUM7TUFIaEIsQ0FBUDtJQUtEOztJQUNELE9BQU87TUFDTHJFLEtBQUssRUFBRWlILE9BQU8sQ0FBQ2pILEtBRFY7TUFFTCtELEtBQUssRUFBRWtELE9BQU8sQ0FBQ2xEO0lBRlYsQ0FBUDtFQUlELENBWk0sQ0FBUDtBQWFELENBZm1ELENBQS9DO0FBa0JBLE1BQU1qRixtQkFBbUIsR0FBSW9KLFFBQUQsSUFBc0M7RUFDdkU7QUFDRjtBQUNBO0FBQ0E7RUFDRSxNQUFNNUQsUUFBUSxHQUFHNkQsTUFBTSxDQUFDQyxXQUFQLENBQ2ZELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlSCxRQUFRLENBQUM1RCxRQUF4QixFQUFrQ3hCLEdBQWxDLENBQXNDLENBQUMsQ0FBQ2dCLEdBQUQsRUFBTTlELEtBQU4sQ0FBRCxLQUFrQjtJQUN0RCxPQUFPLENBQUM4RCxHQUFELEVBQU05RCxLQUFLLElBQUlBLEtBQUssQ0FBQ3NJLGNBQU4sQ0FBcUIsT0FBckIsQ0FBVCxHQUF5Q3RJLEtBQUssQ0FBQ0EsS0FBL0MsR0FBdURBLEtBQTdELENBQVA7RUFDRCxDQUZELENBRGUsQ0FBakI7RUFNQSx5QkFDS3BCLGFBREwsRUFFS3NKLFFBRkw7SUFHRVIsU0FBUyxFQUFFUSxRQUFRLENBQUNSLFNBQVQsS0FBdUIsRUFBdkIsR0FBNEI5SSxhQUFhLENBQUM4SSxTQUExQyxHQUFzRFEsUUFBUSxDQUFDUixTQUg1RTtJQUlFekgsSUFBSSxFQUFFaUksUUFBUSxDQUFDakksSUFBVCxDQUFjRCxLQUp0QjtJQUtFc0UsUUFBUSxvQkFBTzFGLGFBQWEsQ0FBQzBGLFFBQXJCLEVBQWtDQSxRQUFsQyxDQUxWO0lBTUV3RCxjQUFjLG9CQUFPSSxRQUFRLENBQUNKLGNBQWhCO0VBTmhCO0FBUUQsQ0FuQk07QUFxQkEsTUFBTS9JLGlCQUFpQixHQUFJbUosUUFBRCxJQUFzQztFQUFBOztFQUNyRSxPQUFPO0lBQ0wvRyxJQUFJLEVBQUUrRyxRQUFRLENBQUMvRyxJQURWO0lBRUxsQixJQUFJLEVBQUVpSSxRQUFRLENBQUNqSSxJQUFULENBQWNELEtBRmY7SUFHTDBILFNBQVMseUJBQUVRLFFBQVEsQ0FBQ1IsU0FBWCxxRUFBd0I5SSxhQUFhLENBQUM4SSxTQUgxQztJQUlMcEQsUUFBUSxvQkFBTzZELE1BQU0sQ0FBQ0ksTUFBUCxDQUFjM0osYUFBYSxDQUFDMEYsUUFBNUIsRUFBc0M0RCxRQUFRLENBQUM1RCxRQUEvQyxDQUFQLENBSkg7SUFLTHdELGNBQWMsb0JBQU9JLFFBQVEsQ0FBQ0osY0FBaEI7RUFMVCxDQUFQO0FBT0QsQ0FSTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL05ld05vdGlmaWNhdGlvbkNoYW5uZWxQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL0Jhc2ljU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvQ2hhbm5lbFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL05vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL05vdGlmaWNhdGlvblNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL09wdGlvbkVsZW1lbnQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdXRpbHMvbm90aWZpY2F0aW9uQ2hhbm5lbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsRFRPLCBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsRm9ybSB9IGZyb20gJy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25DaGFubmVsRm9ybSc7XG5pbXBvcnQgeyBjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsLCBsb2FkTm90aWZpY2F0aW9uVHlwZXMsIHRlc3ROb3RpZmljYXRpb25DaGFubmVsIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHJlc2V0U2VjdXJlRmllbGQgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7XG4gIGRlZmF1bHRWYWx1ZXMsXG4gIG1hcENoYW5uZWxzVG9TZWxlY3RhYmxlVmFsdWUsXG4gIHRyYW5zZm9ybVN1Ym1pdERhdGEsXG4gIHRyYW5zZm9ybVRlc3REYXRhLFxufSBmcm9tICcuL3V0aWxzL25vdGlmaWNhdGlvbkNoYW5uZWxzJztcblxuY2xhc3MgTmV3Tm90aWZpY2F0aW9uQ2hhbm5lbFBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMubG9hZE5vdGlmaWNhdGlvblR5cGVzKCk7XG4gIH1cblxuICBvblN1Ym1pdCA9IChkYXRhOiBOb3RpZmljYXRpb25DaGFubmVsRFRPKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jcmVhdGVOb3RpZmljYXRpb25DaGFubmVsKHRyYW5zZm9ybVN1Ym1pdERhdGEoeyAuLi5kZWZhdWx0VmFsdWVzLCAuLi5kYXRhIH0pKTtcbiAgfTtcblxuICBvblRlc3RDaGFubmVsID0gKGRhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHtcbiAgICB0aGlzLnByb3BzLnRlc3ROb3RpZmljYXRpb25DaGFubmVsKHRyYW5zZm9ybVRlc3REYXRhKHsgLi4uZGVmYXVsdFZhbHVlcywgLi4uZGF0YSB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPk5ldyBub3RpZmljYXRpb24gY2hhbm5lbDwvaDI+XG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IHZhbGlkYXRlT249XCJvbkNoYW5nZVwiIGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZXN9IG1heFdpZHRoPXs2MDB9PlxuICAgICAgICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMsIGNvbnRyb2wsIGdldFZhbHVlcywgd2F0Y2ggfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZENoYW5uZWwgPSBub3RpZmljYXRpb25DaGFubmVsVHlwZXMuZmluZCgoYykgPT4gYy52YWx1ZSA9PT0gZ2V0VmFsdWVzKCkudHlwZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uQ2hhbm5lbEZvcm1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGVDaGFubmVscz17bWFwQ2hhbm5lbHNUb1NlbGVjdGFibGVWYWx1ZShub3RpZmljYXRpb25DaGFubmVsVHlwZXMsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsPXtzZWxlY3RlZENoYW5uZWx9XG4gICAgICAgICAgICAgICAgICBvblRlc3RDaGFubmVsPXt0aGlzLm9uVGVzdENoYW5uZWx9XG4gICAgICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICAgICAgICAgIGdldFZhbHVlcz17Z2V0VmFsdWVzfVxuICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgIHdhdGNoPXt3YXRjaH1cbiAgICAgICAgICAgICAgICAgIGltYWdlUmVuZGVyZXJBdmFpbGFibGU9e2NvbmZpZy5yZW5kZXJlckF2YWlsYWJsZX1cbiAgICAgICAgICAgICAgICAgIHJlc2V0U2VjdXJlRmllbGQ9e3RoaXMucHJvcHMucmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17e319XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ2NoYW5uZWxzJyksXG4gIG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlczogc3RhdGUubm90aWZpY2F0aW9uQ2hhbm5lbC5ub3RpZmljYXRpb25DaGFubmVsVHlwZXMsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsLFxuICBsb2FkTm90aWZpY2F0aW9uVHlwZXMsXG4gIHRlc3ROb3RpZmljYXRpb25DaGFubmVsLFxuICByZXNldFNlY3VyZUZpZWxkLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG50eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoTmV3Tm90aWZpY2F0aW9uQ2hhbm5lbFBhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBJbnB1dCwgSW5wdXRDb250cm9sLCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHMsIE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25DaGFubmVsRm9ybSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9ucyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIHtcbiAgc2VsZWN0ZWRDaGFubmVsOiBOb3RpZmljYXRpb25DaGFubmVsVHlwZTtcbiAgY2hhbm5lbHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgc2VjdXJlRmllbGRzOiBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzO1xuICByZXNldFNlY3VyZUZpZWxkOiAoa2V5OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBCYXNpY1NldHRpbmdzOiBGQzxQcm9wcz4gPSAoe1xuICBjb250cm9sLFxuICBjdXJyZW50Rm9ybVZhbHVlcyxcbiAgZXJyb3JzLFxuICBzZWN1cmVGaWVsZHMsXG4gIHNlbGVjdGVkQ2hhbm5lbCxcbiAgY2hhbm5lbHMsXG4gIHJlZ2lzdGVyLFxuICByZXNldFNlY3VyZUZpZWxkLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmllbGQgbGFiZWw9XCJOYW1lXCIgaW52YWxpZD17ISFlcnJvcnMubmFtZX0gZXJyb3I9e2Vycm9ycy5uYW1lICYmIGVycm9ycy5uYW1lLm1lc3NhZ2V9PlxuICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogJ05hbWUgaXMgcmVxdWlyZWQnIH0pfSAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZCBsYWJlbD1cIlR5cGVcIj5cbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiA8U2VsZWN0IHsuLi5maWVsZH0gb3B0aW9ucz17Y2hhbm5lbHN9IC8+fVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHRydWUgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8Tm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnNcbiAgICAgICAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucz17c2VsZWN0ZWRDaGFubmVsLm9wdGlvbnMuZmlsdGVyKChvKSA9PiBvLnJlcXVpcmVkKX1cbiAgICAgICAgY3VycmVudEZvcm1WYWx1ZXM9e2N1cnJlbnRGb3JtVmFsdWVzfVxuICAgICAgICBzZWN1cmVGaWVsZHM9e3NlY3VyZUZpZWxkc31cbiAgICAgICAgb25SZXNldFNlY3VyZUZpZWxkPXtyZXNldFNlY3VyZUZpZWxkfVxuICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0LCBDb2xsYXBzYWJsZVNlY3Rpb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHMsIE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25DaGFubmVsRm9ybSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9ucyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIHtcbiAgc2VsZWN0ZWRDaGFubmVsOiBOb3RpZmljYXRpb25DaGFubmVsVHlwZTtcbiAgc2VjdXJlRmllbGRzOiBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzO1xuICByZXNldFNlY3VyZUZpZWxkOiAoa2V5OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFubmVsU2V0dGluZ3M6IEZDPFByb3BzPiA9ICh7XG4gIGNvbnRyb2wsXG4gIGN1cnJlbnRGb3JtVmFsdWVzLFxuICBlcnJvcnMsXG4gIHNlbGVjdGVkQ2hhbm5lbCxcbiAgc2VjdXJlRmllbGRzLFxuICByZWdpc3RlcixcbiAgcmVzZXRTZWN1cmVGaWVsZCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2FibGVTZWN0aW9uIGxhYmVsPXtgT3B0aW9uYWwgJHtzZWxlY3RlZENoYW5uZWwuaGVhZGluZ31gfSBpc09wZW49e2ZhbHNlfT5cbiAgICAgIHtzZWxlY3RlZENoYW5uZWwuaW5mbyAhPT0gJycgJiYgPEFsZXJ0IHNldmVyaXR5PVwiaW5mb1wiIHRpdGxlPXtzZWxlY3RlZENoYW5uZWwuaW5mbyA/PyAnJ30gLz59XG4gICAgICA8Tm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnNcbiAgICAgICAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucz17c2VsZWN0ZWRDaGFubmVsLm9wdGlvbnMuZmlsdGVyKChvKSA9PiAhby5yZXF1aXJlZCl9XG4gICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzPXtjdXJyZW50Rm9ybVZhbHVlc31cbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgb25SZXNldFNlY3VyZUZpZWxkPXtyZXNldFNlY3VyZUZpZWxkfVxuICAgICAgICBzZWN1cmVGaWVsZHM9e3NlY3VyZUZpZWxkc31cbiAgICAgIC8+XG4gICAgPC9Db2xsYXBzYWJsZVNlY3Rpb24+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtQVBJLCBIb3Jpem9udGFsR3JvdXAsIHN0eWxlc0ZhY3RvcnksIHVzZVRoZW1lLCBTcGlubmVyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsVHlwZSwgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgQmFzaWNTZXR0aW5ncyB9IGZyb20gJy4vQmFzaWNTZXR0aW5ncyc7XG5pbXBvcnQgeyBDaGFubmVsU2V0dGluZ3MgfSBmcm9tICcuL0NoYW5uZWxTZXR0aW5ncyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXR0aW5ncyB9IGZyb20gJy4vTm90aWZpY2F0aW9uU2V0dGluZ3MnO1xuXG5pbnRlcmZhY2UgUHJvcHNcbiAgZXh0ZW5kcyBQaWNrPEZvcm1BUEk8Tm90aWZpY2F0aW9uQ2hhbm5lbERUTz4sICdjb250cm9sJyB8ICdlcnJvcnMnIHwgJ3JlZ2lzdGVyJyB8ICd3YXRjaCcgfCAnZ2V0VmFsdWVzJz4ge1xuICBzZWxlY3RhYmxlQ2hhbm5lbHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgc2VsZWN0ZWRDaGFubmVsPzogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIGltYWdlUmVuZGVyZXJBdmFpbGFibGU6IGJvb2xlYW47XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xuICBvblRlc3RDaGFubmVsOiAoZGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzXG4gIGV4dGVuZHMgUGljazxGb3JtQVBJPE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8+LCAnY29udHJvbCcgfCAnZXJyb3JzJyB8ICdyZWdpc3Rlcic+IHtcbiAgY3VycmVudEZvcm1WYWx1ZXM6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE87XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25DaGFubmVsRm9ybTogRkM8UHJvcHM+ID0gKHtcbiAgY29udHJvbCxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIHNlbGVjdGFibGVDaGFubmVscyxcbiAgcmVnaXN0ZXIsXG4gIHdhdGNoLFxuICBnZXRWYWx1ZXMsXG4gIGltYWdlUmVuZGVyZXJBdmFpbGFibGUsXG4gIG9uVGVzdENoYW5uZWwsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG4gIHNlY3VyZUZpZWxkcyxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKHVzZVRoZW1lKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLypcbiAgICAgIEZpbmQgZmllbGRzIHRoYXQgaGF2ZSBkZXBlbmRlbmNpZXMgb24gb3RoZXIgZmllbGRzIGFuZCByZW1vdmVzIGR1cGxpY2F0ZXMuXG4gICAgICBOZWVkcyB0byBiZSBwcmVmaXhlZCB3aXRoIHNldHRpbmdzLlxuICAgICovXG4gICAgY29uc3QgZmllbGRzVG9XYXRjaCA9XG4gICAgICBuZXcgU2V0KFxuICAgICAgICBzZWxlY3RlZENoYW5uZWw/Lm9wdGlvbnNcbiAgICAgICAgICAuZmlsdGVyKChvKSA9PiBvLnNob3dXaGVuLmZpZWxkKVxuICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGBzZXR0aW5ncy4ke29wdGlvbi5zaG93V2hlbi5maWVsZH1gO1xuICAgICAgICAgIH0pXG4gICAgICApIHx8IFtdO1xuICAgIHdhdGNoKFsndHlwZScsICdzZW5kUmVtaW5kZXInLCAndXBsb2FkSW1hZ2UnLCAuLi5maWVsZHNUb1dhdGNoXSk7XG4gIH0sIFtzZWxlY3RlZENoYW5uZWw/Lm9wdGlvbnMsIHdhdGNoXSk7XG5cbiAgY29uc3QgY3VycmVudEZvcm1WYWx1ZXMgPSBnZXRWYWx1ZXMoKTtcblxuICBpZiAoIXNlbGVjdGVkQ2hhbm5lbCkge1xuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICA8QmFzaWNTZXR0aW5nc1xuICAgICAgICAgIHNlbGVjdGVkQ2hhbm5lbD17c2VsZWN0ZWRDaGFubmVsfVxuICAgICAgICAgIGNoYW5uZWxzPXtzZWxlY3RhYmxlQ2hhbm5lbHN9XG4gICAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAgICAgcmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBJZiB0aGVyZSBhcmUgbm8gbm9uLXJlcXVpcmVkIGZpZWxkcywgZG9uJ3QgcmVuZGVyIHRoaXMgc2VjdGlvbiovfVxuICAgICAge3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgICA8Q2hhbm5lbFNldHRpbmdzXG4gICAgICAgICAgICBzZWxlY3RlZENoYW5uZWw9e3NlbGVjdGVkQ2hhbm5lbH1cbiAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17c2VjdXJlRmllbGRzfVxuICAgICAgICAgICAgcmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzPXtjdXJyZW50Rm9ybVZhbHVlc31cbiAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgPE5vdGlmaWNhdGlvblNldHRpbmdzXG4gICAgICAgICAgaW1hZ2VSZW5kZXJlckF2YWlsYWJsZT17aW1hZ2VSZW5kZXJlckF2YWlsYWJsZX1cbiAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUJ1dHRvbnN9PlxuICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gb25UZXN0Q2hhbm5lbChnZXRWYWx1ZXMoKSl9PlxuICAgICAgICAgICAgVGVzdFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxhIGhyZWY9e2Ake2NvbmZpZy5hcHBTdWJVcmx9L2FsZXJ0aW5nL25vdGlmaWNhdGlvbnNgfT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZvcm1Db250YWluZXI6IGNzc2BgLFxuICAgIGZvcm1JdGVtOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIGZvcm1CdXR0b25zOiBjc3NgXG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRmllbGQsIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsRFRPLCBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25DaGFubmVsRm9ybSc7XG5pbXBvcnQgeyBPcHRpb25FbGVtZW50IH0gZnJvbSAnLi9PcHRpb25FbGVtZW50JztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM6IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25bXTtcbiAgY3VycmVudEZvcm1WYWx1ZXM6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE87XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcblxuICBvblJlc2V0U2VjdXJlRmllbGQ6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zOiBGQzxQcm9wcz4gPSAoe1xuICBjb250cm9sLFxuICBjdXJyZW50Rm9ybVZhbHVlcyxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWxPcHRpb25zLFxuICByZWdpc3RlcixcbiAgb25SZXNldFNlY3VyZUZpZWxkLFxuICBzZWN1cmVGaWVsZHMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzZWxlY3RlZENoYW5uZWxPcHRpb25zLm1hcCgob3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke29wdGlvbi5sYWJlbH0tJHtpbmRleH1gO1xuICAgICAgICAvLyBTb21lIG9wdGlvbnMgY2FuIGJlIGRlcGVuZGVudCBvbiBvdGhlciBvcHRpb25zLCB0aGlzIGRldGVybWluZXMgd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgZGVwZW5kZW5jeSBvcHRpb25zXG4gICAgICAgIC8vIEkgdGhpbmsgdGhpcyBuZWVkcyBtb3JlIHRob3VnaHQuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWUgPVxuICAgICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzW2BzZXR0aW5ncy4ke29wdGlvbi5zaG93V2hlbi5maWVsZH1gXSAmJlxuICAgICAgICAgIChjdXJyZW50Rm9ybVZhbHVlc1tgc2V0dGluZ3MuJHtvcHRpb24uc2hvd1doZW4uZmllbGR9YF0gYXMgU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pLnZhbHVlO1xuXG4gICAgICAgIGlmIChvcHRpb24uc2hvd1doZW4uZmllbGQgJiYgc2VsZWN0ZWRPcHRpb25WYWx1ZSAhPT0gb3B0aW9uLnNob3dXaGVuLmlzKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9uLmVsZW1lbnQgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpZWxkIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFxuICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlY3VyZSA/IGBzZWN1cmVTZXR0aW5ncy4ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YCA6IGBzZXR0aW5ncy4ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgbGFiZWw9e29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17b3B0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17b3B0aW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgaW52YWxpZD17ZXJyb3JzLnNldHRpbmdzICYmICEhZXJyb3JzLnNldHRpbmdzW29wdGlvbi5wcm9wZXJ0eU5hbWVdfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5zZXR0aW5ncyAmJiBlcnJvcnMuc2V0dGluZ3Nbb3B0aW9uLnByb3BlcnR5TmFtZV0/Lm1lc3NhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlY3VyZUZpZWxkcyAmJiBzZWN1cmVGaWVsZHNbb3B0aW9uLnByb3BlcnR5TmFtZV0gPyAoXG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiQ29uZmlndXJlZFwiXG4gICAgICAgICAgICAgICAgc3VmZml4PXtcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25SZXNldFNlY3VyZUZpZWxkKG9wdGlvbi5wcm9wZXJ0eU5hbWUpfSBmaWxsPVwidGV4dFwiIHR5cGU9XCJidXR0b25cIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxPcHRpb25FbGVtZW50IG9wdGlvbj17b3B0aW9ufSByZWdpc3Rlcj17cmVnaXN0ZXJ9IGNvbnRyb2w9e2NvbnRyb2x9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENoZWNrYm94LCBDb2xsYXBzYWJsZVNlY3Rpb24sIEZpZWxkLCBJbmZvQm94LCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBOb3RpZmljYXRpb25TZXR0aW5nc1Byb3BzIHtcbiAgaW1hZ2VSZW5kZXJlckF2YWlsYWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvblNldHRpbmdzOiBGQzxQcm9wcz4gPSAoeyBjdXJyZW50Rm9ybVZhbHVlcywgaW1hZ2VSZW5kZXJlckF2YWlsYWJsZSwgcmVnaXN0ZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb2xsYXBzYWJsZVNlY3Rpb24gbGFiZWw9XCJOb3RpZmljYXRpb24gc2V0dGluZ3NcIiBpc09wZW49e2ZhbHNlfT5cbiAgICAgIDxGaWVsZD5cbiAgICAgICAgPENoZWNrYm94IHsuLi5yZWdpc3RlcignaXNEZWZhdWx0Jyl9IGxhYmVsPVwiRGVmYXVsdFwiIGRlc2NyaXB0aW9uPVwiVXNlIHRoaXMgbm90aWZpY2F0aW9uIGZvciBhbGwgYWxlcnRzXCIgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIHsuLi5yZWdpc3Rlcignc2V0dGluZ3MudXBsb2FkSW1hZ2UnKX1cbiAgICAgICAgICBsYWJlbD1cIkluY2x1ZGUgaW1hZ2VcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ2FwdHVyZXMgYW4gaW1hZ2UgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIG5vdGlmaWNhdGlvblwiXG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAge2N1cnJlbnRGb3JtVmFsdWVzLnVwbG9hZEltYWdlICYmICFpbWFnZVJlbmRlcmVyQXZhaWxhYmxlICYmIChcbiAgICAgICAgPEluZm9Cb3ggdGl0bGU9XCJObyBpbWFnZSByZW5kZXJlciBhdmFpbGFibGUvaW5zdGFsbGVkXCI+XG4gICAgICAgICAgR3JhZmFuYSBjYW5ub3QgZmluZCBhbiBpbWFnZSByZW5kZXJlciB0byBjYXB0dXJlIGFuIGltYWdlIGZvciB0aGUgbm90aWZpY2F0aW9uLiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBHcmFmYW5hXG4gICAgICAgICAgSW1hZ2UgUmVuZGVyZXIgcGx1Z2luIGlzIGluc3RhbGxlZC4gUGxlYXNlIGNvbnRhY3QgeW91ciBHcmFmYW5hIGFkbWluaXN0cmF0b3IgdG8gaW5zdGFsbCB0aGUgcGx1Z2luLlxuICAgICAgICA8L0luZm9Cb3g+XG4gICAgICApfVxuICAgICAgPEZpZWxkPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2Rpc2FibGVSZXNvbHZlTWVzc2FnZScpfVxuICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZSBSZXNvbHZlIE1lc3NhZ2VcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGlzYWJsZSB0aGUgcmVzb2x2ZSBtZXNzYWdlIFtPS10gdGhhdCBpcyBzZW50IHdoZW4gYWxlcnRpbmcgc3RhdGUgcmV0dXJucyB0byBmYWxzZVwiXG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3NlbmRSZW1pbmRlcicpfVxuICAgICAgICAgIGxhYmVsPVwiU2VuZCByZW1pbmRlcnNcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU2VuZCBhZGRpdGlvbmFsIG5vdGlmaWNhdGlvbnMgZm9yIHRyaWdnZXJlZCBhbGVydHNcIlxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIHtjdXJyZW50Rm9ybVZhbHVlcy5zZW5kUmVtaW5kZXIgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJTZW5kIHJlbWluZGVyIGV2ZXJ5XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU3BlY2lmeSBob3cgb2Z0ZW4gcmVtaW5kZXJzIHNob3VsZCBiZSBzZW50LCBlLmcuIGV2ZXJ5IDMwcywgMW0sIDEwbSwgMzBtJywgb3IgMWggZXRjLlxuICAgICAgICAgICAgQWxlcnQgcmVtaW5kZXJzIGFyZSBzZW50IGFmdGVyIHJ1bGVzIGFyZSBldmFsdWF0ZWQuIEEgcmVtaW5kZXIgY2FuIG5ldmVyIGJlIHNlbnQgbW9yZSBmcmVxdWVudGx5XG4gICAgICAgICAgICB0aGFuIGEgY29uZmlndXJlZCBhbGVydCBydWxlIGV2YWx1YXRpb24gaW50ZXJ2YWwuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCdmcmVxdWVuY3knKX0gd2lkdGg9ezh9IC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQ29sbGFwc2FibGVTZWN0aW9uPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRm9ybUFQSSwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0LCBUZXh0QXJlYSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUGljazxGb3JtQVBJPGFueT4sICdyZWdpc3RlcicgfCAnY29udHJvbCc+IHtcbiAgb3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uO1xuICBpbnZhbGlkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE9wdGlvbkVsZW1lbnQ6IEZDPFByb3BzPiA9ICh7IGNvbnRyb2wsIG9wdGlvbiwgcmVnaXN0ZXIsIGludmFsaWQgfSkgPT4ge1xuICBjb25zdCBtb2RlbFZhbHVlID0gb3B0aW9uLnNlY3VyZSA/IGBzZWN1cmVTZXR0aW5ncy4ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YCA6IGBzZXR0aW5ncy4ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YDtcbiAgc3dpdGNoIChvcHRpb24uZWxlbWVudCkge1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHttb2RlbFZhbHVlfWAsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBvcHRpb24ucmVxdWlyZWQgPyAnUmVxdWlyZWQnIDogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHYpID0+IChvcHRpb24udmFsaWRhdGlvblJ1bGUgIT09ICcnID8gdmFsaWRhdGVPcHRpb24odiwgb3B0aW9uLnZhbGlkYXRpb25SdWxlKSA6IHRydWUpLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgdHlwZT17b3B0aW9uLmlucHV0VHlwZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17b3B0aW9uLnBsYWNlaG9sZGVyfVxuICAgICAgICAvPlxuICAgICAgKTtcblxuICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBuYW1lPXtgJHttb2RlbFZhbHVlfWB9XG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgPFNlbGVjdCB7Li4uZmllbGR9IG9wdGlvbnM9e29wdGlvbi5zZWxlY3RPcHRpb25zID8/IHVuZGVmaW5lZH0gaW52YWxpZD17aW52YWxpZH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKTtcblxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIGludmFsaWQ9e2ludmFsaWR9XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKGAke21vZGVsVmFsdWV9YCwge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IG9wdGlvbi5yZXF1aXJlZCA/ICdSZXF1aXJlZCcgOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAodikgPT4gKG9wdGlvbi52YWxpZGF0aW9uUnVsZSAhPT0gJycgPyB2YWxpZGF0ZU9wdGlvbih2LCBvcHRpb24udmFsaWRhdGlvblJ1bGUpIDogdHJ1ZSksXG4gICAgICAgICAgfSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgbm90IHN1cHBvcnRlZCcsIG9wdGlvbi5lbGVtZW50KTtcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCB2YWxpZGF0ZU9wdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCB2YWxpZGF0aW9uUnVsZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBSZWdFeHAodmFsaWRhdGlvblJ1bGUpLnRlc3QodmFsdWUpID8gdHJ1ZSA6ICdJbnZhbGlkIGZvcm1hdCc7XG59O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgaXNGZXRjaEVycm9yLCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24sIGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBBbGVydFJ1bGVEVE8sIE5vdGlmaWVyRFRPLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGxvYWRBbGVydFJ1bGVzLCBsb2FkZWRBbGVydFJ1bGVzLCBub3RpZmljYXRpb25DaGFubmVsTG9hZGVkLCBzZXROb3RpZmljYXRpb25DaGFubmVscyB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxlcnRSdWxlc0FzeW5jKG9wdGlvbnM6IHsgc3RhdGU6IHN0cmluZyB9KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2gobG9hZEFsZXJ0UnVsZXMoKSk7XG4gICAgY29uc3QgcnVsZXM6IEFsZXJ0UnVsZURUT1tdID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9hbGVydHMnLCBvcHRpb25zKTtcbiAgICBkaXNwYXRjaChsb2FkZWRBbGVydFJ1bGVzKHJ1bGVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVQYXVzZUFsZXJ0UnVsZShpZDogbnVtYmVyLCBvcHRpb25zOiB7IHBhdXNlZDogYm9vbGVhbiB9KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoYC9hcGkvYWxlcnRzLyR7aWR9L3BhdXNlYCwgb3B0aW9ucyk7XG4gICAgY29uc3Qgc3RhdGVGaWx0ZXIgPSBsb2NhdGlvblNlcnZpY2UuZ2V0U2VhcmNoT2JqZWN0KCkuc3RhdGUgfHwgJ2FsbCc7XG4gICAgZGlzcGF0Y2goZ2V0QWxlcnRSdWxlc0FzeW5jKHsgc3RhdGU6IHN0YXRlRmlsdGVyLnRvU3RyaW5nKCkgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDxQcm9taXNlPHZvaWQ+PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9uc2AsIGRhdGEpO1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24oJ05vdGlmaWNhdGlvbiBjcmVhdGVkJykpKTtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoaXNGZXRjaEVycm9yKGVycm9yKSkge1xuICAgICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oZXJyb3IuZGF0YS5lcnJvcikpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtkYXRhLmlkfWAsIGRhdGEpO1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24oJ05vdGlmaWNhdGlvbiB1cGRhdGVkJykpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGlzRmV0Y2hFcnJvcihlcnJvcikpIHtcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKGVycm9yLmRhdGEuZXJyb3IpKSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGNoYW5uZWwgPSBnZXRTdGF0ZSgpLm5vdGlmaWNhdGlvbkNoYW5uZWwubm90aWZpY2F0aW9uQ2hhbm5lbDtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9hbGVydC1ub3RpZmljYXRpb25zL3Rlc3QnLCB7IGlkOiBjaGFubmVsLmlkLCAuLi5kYXRhIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5vdGlmaWNhdGlvblR5cGVzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IGFsZXJ0Tm90aWZpZXJzOiBOb3RpZmllckRUT1tdID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS9hbGVydC1ub3RpZmllcnNgKTtcblxuICAgIGNvbnN0IG5vdGlmaWNhdGlvblR5cGVzID0gYWxlcnROb3RpZmllcnMuc29ydCgobzEsIG8yKSA9PiB7XG4gICAgICBpZiAobzEubmFtZSA+IG8yLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSk7XG5cbiAgICBkaXNwYXRjaChzZXROb3RpZmljYXRpb25DaGFubmVscyhub3RpZmljYXRpb25UeXBlcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5vdGlmaWNhdGlvbkNoYW5uZWwoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGRpc3BhdGNoKGxvYWROb3RpZmljYXRpb25UeXBlcygpKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25DaGFubmVsID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zLyR7aWR9YCk7XG4gICAgZGlzcGF0Y2gobm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZChub3RpZmljYXRpb25DaGFubmVsKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsRFRPLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0VmFsdWVzOiBOb3RpZmljYXRpb25DaGFubmVsRFRPID0ge1xuICBpZDogLTEsXG4gIG5hbWU6ICcnLFxuICB0eXBlOiB7IHZhbHVlOiAnZW1haWwnLCBsYWJlbDogJ0VtYWlsJyB9LFxuICBzZW5kUmVtaW5kZXI6IGZhbHNlLFxuICBkaXNhYmxlUmVzb2x2ZU1lc3NhZ2U6IGZhbHNlLFxuICBmcmVxdWVuY3k6ICcxNW0nLFxuICBzZXR0aW5nczoge1xuICAgIHVwbG9hZEltYWdlOiBjb25maWcucmVuZGVyZXJBdmFpbGFibGUsXG4gICAgYXV0b1Jlc29sdmU6IHRydWUsXG4gICAgaHR0cE1ldGhvZDogJ1BPU1QnLFxuICAgIHNldmVyaXR5OiAnY3JpdGljYWwnLFxuICB9LFxuICBzZWN1cmVTZXR0aW5nczoge30sXG4gIHNlY3VyZUZpZWxkczoge30sXG4gIGlzRGVmYXVsdDogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgbWFwQ2hhbm5lbHNUb1NlbGVjdGFibGVWYWx1ZSA9IG1lbW9pemVPbmUoXG4gIChub3RpZmljYXRpb25DaGFubmVsczogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVbXSwgaW5jbHVkZURlc2NyaXB0aW9uOiBib29sZWFuKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0+IHtcbiAgICByZXR1cm4gbm90aWZpY2F0aW9uQ2hhbm5lbHMubWFwKChjaGFubmVsKSA9PiB7XG4gICAgICBpZiAoaW5jbHVkZURlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGNoYW5uZWwudmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGNoYW5uZWwubGFiZWwsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoYW5uZWwuZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogY2hhbm5lbC52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGNoYW5uZWwubGFiZWwsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtU3VibWl0RGF0YSA9IChmb3JtRGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4ge1xuICAvKlxuICAgIFNvbWUgc2V0dGluZ3MgY2FuIGJlIG9wdGlvbnMgaW4gYSBzZWxlY3QsIGluIG9yZGVyIHRvIG5vdCBzYXZlIGEgU2VsZWN0YWJsZVZhbHVlPFQ+XG4gICAgd2UgbmVlZCB0byB1c2UgY2hlY2sgaWYgaXQgaXMgYSBTZWxlY3RhYmxlVmFsdWUgYW5kIHVzZSBpdHMgdmFsdWUuXG4gICovXG4gIGNvbnN0IHNldHRpbmdzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKGZvcm1EYXRhLnNldHRpbmdzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgcmV0dXJuIFtrZXksIHZhbHVlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCd2YWx1ZScpID8gdmFsdWUudmFsdWUgOiB2YWx1ZV07XG4gICAgfSlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgLi4uZm9ybURhdGEsXG4gICAgZnJlcXVlbmN5OiBmb3JtRGF0YS5mcmVxdWVuY3kgPT09ICcnID8gZGVmYXVsdFZhbHVlcy5mcmVxdWVuY3kgOiBmb3JtRGF0YS5mcmVxdWVuY3ksXG4gICAgdHlwZTogZm9ybURhdGEudHlwZS52YWx1ZSxcbiAgICBzZXR0aW5nczogeyAuLi5kZWZhdWx0VmFsdWVzLnNldHRpbmdzLCAuLi5zZXR0aW5ncyB9LFxuICAgIHNlY3VyZVNldHRpbmdzOiB7IC4uLmZvcm1EYXRhLnNlY3VyZVNldHRpbmdzIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtVGVzdERhdGEgPSAoZm9ybURhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgIHR5cGU6IGZvcm1EYXRhLnR5cGUudmFsdWUsXG4gICAgZnJlcXVlbmN5OiBmb3JtRGF0YS5mcmVxdWVuY3kgPz8gZGVmYXVsdFZhbHVlcy5mcmVxdWVuY3ksXG4gICAgc2V0dGluZ3M6IHsgLi4uT2JqZWN0LmFzc2lnbihkZWZhdWx0VmFsdWVzLnNldHRpbmdzLCBmb3JtRGF0YS5zZXR0aW5ncykgfSxcbiAgICBzZWN1cmVTZXR0aW5nczogeyAuLi5mb3JtRGF0YS5zZWN1cmVTZXR0aW5ncyB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwiY29uZmlnIiwiRm9ybSIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsIk5vdGlmaWNhdGlvbkNoYW5uZWxGb3JtIiwiY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCIsImxvYWROb3RpZmljYXRpb25UeXBlcyIsInRlc3ROb3RpZmljYXRpb25DaGFubmVsIiwicmVzZXRTZWN1cmVGaWVsZCIsImRlZmF1bHRWYWx1ZXMiLCJtYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlIiwidHJhbnNmb3JtU3VibWl0RGF0YSIsInRyYW5zZm9ybVRlc3REYXRhIiwiTmV3Tm90aWZpY2F0aW9uQ2hhbm5lbFBhZ2UiLCJkYXRhIiwicHJvcHMiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsIm5hdk1vZGVsIiwibm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzIiwib25TdWJtaXQiLCJyZWdpc3RlciIsImVycm9ycyIsImNvbnRyb2wiLCJnZXRWYWx1ZXMiLCJ3YXRjaCIsInNlbGVjdGVkQ2hhbm5lbCIsImZpbmQiLCJjIiwidmFsdWUiLCJ0eXBlIiwib25UZXN0Q2hhbm5lbCIsInJlbmRlcmVyQXZhaWxhYmxlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZJbmRleCIsIm5vdGlmaWNhdGlvbkNoYW5uZWwiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJGaWVsZCIsIklucHV0IiwiSW5wdXRDb250cm9sIiwiU2VsZWN0IiwiTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMiLCJCYXNpY1NldHRpbmdzIiwiY3VycmVudEZvcm1WYWx1ZXMiLCJzZWN1cmVGaWVsZHMiLCJjaGFubmVscyIsIm5hbWUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJmaWVsZCIsIm9wdGlvbnMiLCJmaWx0ZXIiLCJvIiwiQWxlcnQiLCJDb2xsYXBzYWJsZVNlY3Rpb24iLCJDaGFubmVsU2V0dGluZ3MiLCJoZWFkaW5nIiwiaW5mbyIsImNzcyIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIkhvcml6b250YWxHcm91cCIsInN0eWxlc0ZhY3RvcnkiLCJ1c2VUaGVtZSIsIlNwaW5uZXIiLCJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNlbGVjdGFibGVDaGFubmVscyIsImltYWdlUmVuZGVyZXJBdmFpbGFibGUiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJmaWVsZHNUb1dhdGNoIiwiU2V0Iiwic2hvd1doZW4iLCJtYXAiLCJvcHRpb24iLCJmb3JtQ29udGFpbmVyIiwiZm9ybUl0ZW0iLCJsZW5ndGgiLCJmb3JtQnV0dG9ucyIsImFwcFN1YlVybCIsInRoZW1lIiwic3BhY2luZyIsIm1kIiwieGwiLCJDaGVja2JveCIsIk9wdGlvbkVsZW1lbnQiLCJzZWxlY3RlZENoYW5uZWxPcHRpb25zIiwib25SZXNldFNlY3VyZUZpZWxkIiwiaW5kZXgiLCJrZXkiLCJsYWJlbCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJpcyIsImVsZW1lbnQiLCJzZWN1cmUiLCJwcm9wZXJ0eU5hbWUiLCJkZXNjcmlwdGlvbiIsInNldHRpbmdzIiwiSW5mb0JveCIsInVwbG9hZEltYWdlIiwic2VuZFJlbWluZGVyIiwiVGV4dEFyZWEiLCJpbnZhbGlkIiwibW9kZWxWYWx1ZSIsInZhbGlkYXRlIiwidiIsInZhbGlkYXRpb25SdWxlIiwidmFsaWRhdGVPcHRpb24iLCJpbnB1dFR5cGUiLCJwbGFjZWhvbGRlciIsInNlbGVjdE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJSZWdFeHAiLCJ0ZXN0IiwiZ2V0QmFja2VuZFNydiIsImlzRmV0Y2hFcnJvciIsImxvY2F0aW9uU2VydmljZSIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImxvYWRBbGVydFJ1bGVzIiwibG9hZGVkQWxlcnRSdWxlcyIsIm5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQiLCJzZXROb3RpZmljYXRpb25DaGFubmVscyIsImdldEFsZXJ0UnVsZXNBc3luYyIsImRpc3BhdGNoIiwicnVsZXMiLCJnZXQiLCJ0b2dnbGVQYXVzZUFsZXJ0UnVsZSIsImlkIiwicG9zdCIsInN0YXRlRmlsdGVyIiwiZ2V0U2VhcmNoT2JqZWN0IiwidG9TdHJpbmciLCJwdXNoIiwidXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCIsInB1dCIsImdldFN0YXRlIiwiY2hhbm5lbCIsImFsZXJ0Tm90aWZpZXJzIiwibm90aWZpY2F0aW9uVHlwZXMiLCJzb3J0IiwibzEiLCJvMiIsImxvYWROb3RpZmljYXRpb25DaGFubmVsIiwibWVtb2l6ZU9uZSIsImRpc2FibGVSZXNvbHZlTWVzc2FnZSIsImZyZXF1ZW5jeSIsImF1dG9SZXNvbHZlIiwiaHR0cE1ldGhvZCIsInNldmVyaXR5Iiwic2VjdXJlU2V0dGluZ3MiLCJpc0RlZmF1bHQiLCJub3RpZmljYXRpb25DaGFubmVscyIsImluY2x1ZGVEZXNjcmlwdGlvbiIsImZvcm1EYXRhIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiaGFzT3duUHJvcGVydHkiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9