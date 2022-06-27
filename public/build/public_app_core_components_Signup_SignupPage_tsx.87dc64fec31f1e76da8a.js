"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_components_Signup_SignupPage_tsx"],{

/***/ "./public/app/core/components/Signup/SignupPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button;











const SignupPage = props => {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();

  const onSubmit = async formData => {
    if (formData.name === '') {
      delete formData.name;
    }

    delete formData.confirm;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post('/api/user/signup/step2', {
      email: formData.email,
      code: formData.code,
      username: formData.email,
      orgName: formData.orgName,
      password: formData.password,
      name: formData.name
    }).catch(err => {
      var _err$data;

      const msg = ((_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.message) || err;
      notifyApp.warning(msg);
    });

    if (response.code === 'redirect-to-select-org') {
      window.location.assign((0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/profile/select-org?signup=1');
    }

    window.location.assign((0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/');
  };

  const defaultValues = {
    email: props.queryParams.email,
    code: props.queryParams.code
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_5__.LoginLayout, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_5__.InnerBox, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        defaultValues: defaultValues,
        onSubmit: onSubmit,
        children: ({
          errors,
          register,
          getValues
        }) => {
          var _errors$email, _errors$password, _errors$confirm;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Your name",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "user-name"
              }, register('name'), {
                placeholder: "(optional)"
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Email",
              invalid: !!errors.email,
              error: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "email"
              }, register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/,
                  message: 'Email is invalid'
                }
              }), {
                type: "email",
                placeholder: "Email"
              }))
            }), !(0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().autoAssignOrg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Org. name",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "org-name"
              }, register('orgName'), {
                placeholder: "Org. name"
              }))
            }), (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().verifyEmailEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Email verification code (sent to your email)",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "verification-code"
              }, register('code'), {
                placeholder: "Code"
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Password",
              invalid: !!errors.password,
              error: errors === null || errors === void 0 ? void 0 : (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_6__.PasswordField, Object.assign({
                id: "new-password",
                autoFocus: true,
                autoComplete: "new-password"
              }, register('password', {
                required: 'Password is required'
              })))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Confirm password",
              invalid: !!errors.confirm,
              error: errors === null || errors === void 0 ? void 0 : (_errors$confirm = errors.confirm) === null || _errors$confirm === void 0 ? void 0 : _errors$confirm.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_6__.PasswordField, Object.assign({
                id: "confirm-new-password",
                autoComplete: "new-password"
              }, register('confirm', {
                required: 'Confirmed password is required',
                validate: v => v === getValues().password || 'Passwords must match!'
              })))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
              children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                children: "Submit"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
                fill: "text",
                href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/login',
                children: "Back to login"
              })]
            })]
          });
        }
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9jb3JlX2NvbXBvbmVudHNfU2lnbnVwX1NpZ251cFBhZ2VfdHN4Ljg3ZGM2NGZlYzMxZjFlNzZkYThhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBbUJPLE1BQU1hLFVBQXFCLEdBQUlDLEtBQUQsSUFBVztFQUM5QyxNQUFNQyxTQUFTLEdBQUdOLGlGQUFrQixFQUFwQzs7RUFDQSxNQUFNTyxRQUFRLEdBQUcsTUFBT0MsUUFBUCxJQUErQjtJQUM5QyxJQUFJQSxRQUFRLENBQUNDLElBQVQsS0FBa0IsRUFBdEIsRUFBMEI7TUFDeEIsT0FBT0QsUUFBUSxDQUFDQyxJQUFoQjtJQUNEOztJQUNELE9BQU9ELFFBQVEsQ0FBQ0UsT0FBaEI7SUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFBTW5CLCtEQUFhLEdBQ2pDb0IsSUFEb0IsQ0FDZix3QkFEZSxFQUNXO01BQzlCQyxLQUFLLEVBQUVMLFFBQVEsQ0FBQ0ssS0FEYztNQUU5QkMsSUFBSSxFQUFFTixRQUFRLENBQUNNLElBRmU7TUFHOUJDLFFBQVEsRUFBRVAsUUFBUSxDQUFDSyxLQUhXO01BSTlCRyxPQUFPLEVBQUVSLFFBQVEsQ0FBQ1EsT0FKWTtNQUs5QkMsUUFBUSxFQUFFVCxRQUFRLENBQUNTLFFBTFc7TUFNOUJSLElBQUksRUFBRUQsUUFBUSxDQUFDQztJQU5lLENBRFgsRUFTcEJTLEtBVG9CLENBU2JDLEdBQUQsSUFBUztNQUFBOztNQUNkLE1BQU1DLEdBQUcsR0FBRyxjQUFBRCxHQUFHLENBQUNFLElBQUosd0RBQVVDLE9BQVYsS0FBcUJILEdBQWpDO01BQ0FiLFNBQVMsQ0FBQ2lCLE9BQVYsQ0FBa0JILEdBQWxCO0lBQ0QsQ0Fab0IsQ0FBdkI7O0lBY0EsSUFBSVQsUUFBUSxDQUFDRyxJQUFULEtBQWtCLHdCQUF0QixFQUFnRDtNQUM5Q1UsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1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LHNCQURMO2dCQUVFLFlBQVksRUFBQztjQUZmLEdBR01TLFFBQVEsQ0FBQyxTQUFELEVBQVk7Z0JBQ3RCRSxRQUFRLEVBQUUsZ0NBRFk7Z0JBRXRCSyxRQUFRLEVBQUdDLENBQUQsSUFBT0EsQ0FBQyxLQUFLUCxTQUFTLEdBQUdmLFFBQWxCLElBQThCO2NBRnpCLENBQVosQ0FIZDtZQURGLEVBcENGLGVBK0NFLHdEQUFDLHdEQUFEO2NBQUEsOENBQ0UsdURBQUMsK0NBQUQ7Z0JBQVEsSUFBSSxFQUFDLFFBQWI7Z0JBQUE7Y0FBQSxFQURGLGdCQUVFLHVEQUFDLG1EQUFEO2dCQUFZLElBQUksRUFBQyxNQUFqQjtnQkFBd0IsSUFBSSxFQUFFbEIsMERBQVMsR0FBRzRCLFNBQVosR0FBd0IsUUFBdEQ7Z0JBQUE7Y0FBQSxFQUZGO1lBQUEsRUEvQ0Y7VUFBQSxFQUREO1FBQUE7TUFESDtJQURGO0VBREYsRUFERjtBQWdFRCxDQWpHTTtBQW1HUCxpRUFBZXZCLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvU2lnbnVwL1NpZ251cFBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRm9ybSwgRmllbGQsIElucHV0LCBCdXR0b24sIEhvcml6b250YWxHcm91cCwgTGlua0J1dHRvbiwgRm9ybUFQSSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBcHBOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuXG5pbXBvcnQgeyBJbm5lckJveCwgTG9naW5MYXlvdXQgfSBmcm9tICcuLi9Mb2dpbi9Mb2dpbkxheW91dCc7XG5pbXBvcnQgeyBQYXNzd29yZEZpZWxkIH0gZnJvbSAnLi4vUGFzc3dvcmRGaWVsZC9QYXNzd29yZEZpZWxkJztcblxuaW50ZXJmYWNlIFNpZ251cERUTyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIG9yZ05hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgY29uZmlybT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zIHtcbiAgZW1haWw/OiBzdHJpbmc7XG4gIGNvZGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHt9LCBRdWVyeVBhcmFtcz4ge31cblxuZXhwb3J0IGNvbnN0IFNpZ251cFBhZ2U6IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBub3RpZnlBcHAgPSB1c2VBcHBOb3RpZmljYXRpb24oKTtcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZm9ybURhdGE6IFNpZ251cERUTykgPT4ge1xuICAgIGlmIChmb3JtRGF0YS5uYW1lID09PSAnJykge1xuICAgICAgZGVsZXRlIGZvcm1EYXRhLm5hbWU7XG4gICAgfVxuICAgIGRlbGV0ZSBmb3JtRGF0YS5jb25maXJtO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5wb3N0KCcvYXBpL3VzZXIvc2lnbnVwL3N0ZXAyJywge1xuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXG4gICAgICAgIGNvZGU6IGZvcm1EYXRhLmNvZGUsXG4gICAgICAgIHVzZXJuYW1lOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgb3JnTmFtZTogZm9ybURhdGEub3JnTmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnN0IG1zZyA9IGVyci5kYXRhPy5tZXNzYWdlIHx8IGVycjtcbiAgICAgICAgbm90aWZ5QXBwLndhcm5pbmcobXNnKTtcbiAgICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmNvZGUgPT09ICdyZWRpcmVjdC10by1zZWxlY3Qtb3JnJykge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihnZXRDb25maWcoKS5hcHBTdWJVcmwgKyAnL3Byb2ZpbGUvc2VsZWN0LW9yZz9zaWdudXA9MScpO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGdldENvbmZpZygpLmFwcFN1YlVybCArICcvJyk7XG4gIH07XG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgICBlbWFpbDogcHJvcHMucXVlcnlQYXJhbXMuZW1haWwsXG4gICAgY29kZTogcHJvcHMucXVlcnlQYXJhbXMuY29kZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMb2dpbkxheW91dD5cbiAgICAgIDxJbm5lckJveD5cbiAgICAgICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17ZGVmYXVsdFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICB7KHsgZXJyb3JzLCByZWdpc3RlciwgZ2V0VmFsdWVzIH06IEZvcm1BUEk8U2lnbnVwRFRPPikgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiWW91ciBuYW1lXCI+XG4gICAgICAgICAgICAgICAgPElucHV0IGlkPVwidXNlci1uYW1lXCIgey4uLnJlZ2lzdGVyKCduYW1lJyl9IHBsYWNlaG9sZGVyPVwiKG9wdGlvbmFsKVwiIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkVtYWlsXCIgaW52YWxpZD17ISFlcnJvcnMuZW1haWx9IGVycm9yPXtlcnJvcnMuZW1haWw/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VtYWlsIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAvXlxcUytAXFxTKyQvLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbWFpbCBpcyBpbnZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIHshZ2V0Q29uZmlnKCkuYXV0b0Fzc2lnbk9yZyAmJiAoXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiT3JnLiBuYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJvcmctbmFtZVwiIHsuLi5yZWdpc3Rlcignb3JnTmFtZScpfSBwbGFjZWhvbGRlcj1cIk9yZy4gbmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2dldENvbmZpZygpLnZlcmlmeUVtYWlsRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiRW1haWwgdmVyaWZpY2F0aW9uIGNvZGUgKHNlbnQgdG8geW91ciBlbWFpbClcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cInZlcmlmaWNhdGlvbi1jb2RlXCIgey4uLnJlZ2lzdGVyKCdjb2RlJyl9IHBsYWNlaG9sZGVyPVwiQ29kZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiUGFzc3dvcmRcIiBpbnZhbGlkPXshIWVycm9ycy5wYXNzd29yZH0gZXJyb3I9e2Vycm9ycz8ucGFzc3dvcmQ/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZEZpZWxkXG4gICAgICAgICAgICAgICAgICBpZD1cIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgeyByZXF1aXJlZDogJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJDb25maXJtIHBhc3N3b3JkXCIgaW52YWxpZD17ISFlcnJvcnMuY29uZmlybX0gZXJyb3I9e2Vycm9ycz8uY29uZmlybT8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkRmllbGRcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybS1uZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29uZmlybScsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdDb25maXJtZWQgcGFzc3dvcmQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHYpID0+IHYgPT09IGdldFZhbHVlcygpLnBhc3N3b3JkIHx8ICdQYXNzd29yZHMgbXVzdCBtYXRjaCEnLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGZpbGw9XCJ0ZXh0XCIgaHJlZj17Z2V0Q29uZmlnKCkuYXBwU3ViVXJsICsgJy9sb2dpbid9PlxuICAgICAgICAgICAgICAgICAgQmFjayB0byBsb2dpblxuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0lubmVyQm94PlxuICAgIDwvTG9naW5MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0QmFja2VuZFNydiIsIkZvcm0iLCJGaWVsZCIsIklucHV0IiwiQnV0dG9uIiwiSG9yaXpvbnRhbEdyb3VwIiwiTGlua0J1dHRvbiIsImdldENvbmZpZyIsInVzZUFwcE5vdGlmaWNhdGlvbiIsIklubmVyQm94IiwiTG9naW5MYXlvdXQiLCJQYXNzd29yZEZpZWxkIiwiU2lnbnVwUGFnZSIsInByb3BzIiwibm90aWZ5QXBwIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsIm5hbWUiLCJjb25maXJtIiwicmVzcG9uc2UiLCJwb3N0IiwiZW1haWwiLCJjb2RlIiwidXNlcm5hbWUiLCJvcmdOYW1lIiwicGFzc3dvcmQiLCJjYXRjaCIsImVyciIsIm1zZyIsImRhdGEiLCJtZXNzYWdlIiwid2FybmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiYXNzaWduIiwiYXBwU3ViVXJsIiwiZGVmYXVsdFZhbHVlcyIsInF1ZXJ5UGFyYW1zIiwiZXJyb3JzIiwicmVnaXN0ZXIiLCJnZXRWYWx1ZXMiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJ2YWx1ZSIsImF1dG9Bc3NpZ25PcmciLCJ2ZXJpZnlFbWFpbEVuYWJsZWQiLCJ2YWxpZGF0ZSIsInYiXSwic291cmNlUm9vdCI6IiJ9