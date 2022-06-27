"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_components_Signup_VerifyEmailPage_tsx"],{

/***/ "./public/app/core/components/Signup/VerifyEmail.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmail": () => (/* binding */ VerifyEmail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _Container, _Legend, _Button;









const VerifyEmail = () => {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();
  const [emailSent, setEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onSubmit = formModel => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post('/api/user/signup', formModel).then(() => {
      setEmailSent(true);
    }).catch(err => {
      var _err$data;

      const msg = ((_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.message) || err;
      notifyApp.warning(msg);
    });
  };

  if (emailSent) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: "An email with a verification link has been sent to the email address. You should receive it shortly."
      })), _Container || (_Container = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Container, {
        margin: "md"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        variant: "primary",
        href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/signup',
        children: "Complete Signup"
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: onSubmit,
    children: ({
      register,
      errors
    }) => {
      var _errors$email;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Legend, {
          children: "Verify Email"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Email",
          description: "Enter your email address to get a verification link sent to you",
          invalid: !!errors.email,
          error: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
            id: "email"
          }, register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/,
              message: 'Email is invalid'
            }
          }), {
            placeholder: "Email"
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Send verification email"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
            fill: "text",
            href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/login',
            children: "Back to login"
          })]
        })]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/core/components/Signup/VerifyEmailPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPage": () => (/* binding */ VerifyEmailPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _VerifyEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Signup/VerifyEmail.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoginLayout;





const VerifyEmailPage = () => {
  return _LoginLayout || (_LoginLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.LoginLayout, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.InnerBox, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_VerifyEmail__WEBPACK_IMPORTED_MODULE_2__.VerifyEmail, {})
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyEmailPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9jb3JlX2NvbXBvbmVudHNfU2lnbnVwX1ZlcmlmeUVtYWlsUGFnZV90c3guMDc0MjllMzAxZGVjYTE0Mzk5MzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQU1PLE1BQU1hLFdBQWUsR0FBRyxNQUFNO0VBQ25DLE1BQU1DLFNBQVMsR0FBR0YsaUZBQWtCLEVBQXBDO0VBQ0EsTUFBTSxDQUFDRyxTQUFELEVBQVlDLFlBQVosSUFBNEJmLCtDQUFRLENBQUMsS0FBRCxDQUExQzs7RUFFQSxNQUFNZ0IsUUFBUSxHQUFJQyxTQUFELElBQXlCO0lBQ3hDaEIsK0RBQWEsR0FDVmlCLElBREgsQ0FDUSxrQkFEUixFQUM0QkQsU0FENUIsRUFFR0UsSUFGSCxDQUVRLE1BQU07TUFDVkosWUFBWSxDQUFDLElBQUQsQ0FBWjtJQUNELENBSkgsRUFLR0ssS0FMSCxDQUtVQyxHQUFELElBQVM7TUFBQTs7TUFDZCxNQUFNQyxHQUFHLEdBQUcsY0FBQUQsR0FBRyxDQUFDRSxJQUFKLHdEQUFVQyxPQUFWLEtBQXFCSCxHQUFqQztNQUNBUixTQUFTLENBQUNZLE9BQVYsQ0FBa0JILEdBQWxCO0lBQ0QsQ0FSSDtFQVNELENBVkQ7O0VBWUEsSUFBSVIsU0FBSixFQUFlO0lBQ2Isb0JBQ0U7TUFBQSxvQ0FDRTtRQUFBO01BQUEsRUFERiw0Q0FFRSx1REFBQyxrREFBRDtRQUFXLE1BQU0sRUFBQztNQUFsQixFQUZGLGdCQUdFLHVEQUFDLG1EQUFEO1FBQVksT0FBTyxFQUFDLFNBQXBCO1FBQThCLElBQUksRUFBRUosMERBQVMsR0FBR2dCLFNBQVosR0FBd0IsU0FBNUQ7UUFBQTtNQUFBLEVBSEY7SUFBQSxFQURGO0VBU0Q7O0VBRUQsb0JBQ0UsdURBQUMsNkNBQUQ7SUFBTSxRQUFRLEVBQUVWLFFBQWhCO0lBQUEsVUFDRyxDQUFDO01BQUVXLFFBQUY7TUFBWUM7SUFBWixDQUFEO01BQUE7O01BQUEsb0JBQ0M7UUFBQSw4Q0FDRSx1REFBQywrQ0FBRDtVQUFBO1FBQUEsRUFERixnQkFFRSx1REFBQyw4Q0FBRDtVQUNFLEtBQUssRUFBQyxPQURSO1VBRUUsV0FBVyxFQUFDLGlFQUZkO1VBR0UsT0FBTyxFQUFFLENBQUMsQ0FBQ0EsTUFBTSxDQUFDQyxLQUhwQjtVQUlFLEtBQUssbUJBQUVELE1BQU0sQ0FBQ0MsS0FBVCxrREFBRSxjQUFjTCxPQUp2QjtVQUFBLHVCQU1FLHVEQUFDLDhDQUFEO1lBQ0UsRUFBRSxFQUFDO1VBREwsR0FFTUcsUUFBUSxDQUFDLE9BQUQsRUFBVTtZQUNwQkcsUUFBUSxFQUFFLG1CQURVO1lBRXBCQyxPQUFPLEVBQUU7Y0FDUEMsS0FBSyxFQUFFLFdBREE7Y0FFUFIsT0FBTyxFQUFFO1lBRkY7VUFGVyxDQUFWLENBRmQ7WUFTRSxXQUFXLEVBQUM7VUFUZDtRQU5GLEVBRkYsZUFvQkUsd0RBQUMsd0RBQUQ7VUFBQSw4Q0FDRSx1REFBQywrQ0FBRDtZQUFRLElBQUksRUFBQyxRQUFiO1lBQUE7VUFBQSxFQURGLGdCQUVFLHVEQUFDLG1EQUFEO1lBQVksSUFBSSxFQUFDLE1BQWpCO1lBQXdCLElBQUksRUFBRWQsMERBQVMsR0FBR2dCLFNBQVosR0FBd0IsUUFBdEQ7WUFBQTtVQUFBLEVBRkY7UUFBQSxFQXBCRjtNQUFBLEVBREQ7SUFBQTtFQURILEVBREY7QUFpQ0QsQ0E3RE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hQO0FBRUE7QUFFQTs7QUFFTyxNQUFNUyxlQUFtQixHQUFHLE1BQU07RUFDdkMsb0RBQ0UsdURBQUMsMkRBQUQ7SUFBQSx1QkFDRSx1REFBQyx3REFBRDtNQUFBLHVCQUNFLHVEQUFDLHFEQUFEO0lBREY7RUFERixFQURGO0FBT0QsQ0FSTTtBQVVQLGlFQUFlQSxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1NpZ251cC9WZXJpZnlFbWFpbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1NpZ251cC9WZXJpZnlFbWFpbFBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEZvcm0sIEZpZWxkLCBJbnB1dCwgQnV0dG9uLCBMZWdlbmQsIENvbnRhaW5lciwgSG9yaXpvbnRhbEdyb3VwLCBMaW5rQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHVzZUFwcE5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcblxuaW50ZXJmYWNlIEVtYWlsRFRPIHtcbiAgZW1haWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFZlcmlmeUVtYWlsOiBGQyA9ICgpID0+IHtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IFtlbWFpbFNlbnQsIHNldEVtYWlsU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybU1vZGVsOiBFbWFpbERUTykgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoJy9hcGkvdXNlci9zaWdudXAnLCBmb3JtTW9kZWwpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldEVtYWlsU2VudCh0cnVlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zdCBtc2cgPSBlcnIuZGF0YT8ubWVzc2FnZSB8fCBlcnI7XG4gICAgICAgIG5vdGlmeUFwcC53YXJuaW5nKG1zZyk7XG4gICAgICB9KTtcbiAgfTtcblxuICBpZiAoZW1haWxTZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkFuIGVtYWlsIHdpdGggYSB2ZXJpZmljYXRpb24gbGluayBoYXMgYmVlbiBzZW50IHRvIHRoZSBlbWFpbCBhZGRyZXNzLiBZb3Ugc2hvdWxkIHJlY2VpdmUgaXQgc2hvcnRseS48L3A+XG4gICAgICAgIDxDb250YWluZXIgbWFyZ2luPVwibWRcIiAvPlxuICAgICAgICA8TGlua0J1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGhyZWY9e2dldENvbmZpZygpLmFwcFN1YlVybCArICcvc2lnbnVwJ30+XG4gICAgICAgICAgQ29tcGxldGUgU2lnbnVwXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExlZ2VuZD5WZXJpZnkgRW1haWw8L0xlZ2VuZD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gZ2V0IGEgdmVyaWZpY2F0aW9uIGxpbmsgc2VudCB0byB5b3VcIlxuICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmVtYWlsPy5tZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VtYWlsIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogL15cXFMrQFxcUyskLyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbWFpbCBpcyBpbnZhbGlkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQgdmVyaWZpY2F0aW9uIGVtYWlsPC9CdXR0b24+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBmaWxsPVwidGV4dFwiIGhyZWY9e2dldENvbmZpZygpLmFwcFN1YlVybCArICcvbG9naW4nfT5cbiAgICAgICAgICAgICAgQmFjayB0byBsb2dpblxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9Gb3JtPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTG9naW5MYXlvdXQsIElubmVyQm94IH0gZnJvbSAnLi4vTG9naW4vTG9naW5MYXlvdXQnO1xuXG5pbXBvcnQgeyBWZXJpZnlFbWFpbCB9IGZyb20gJy4vVmVyaWZ5RW1haWwnO1xuXG5leHBvcnQgY29uc3QgVmVyaWZ5RW1haWxQYWdlOiBGQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TG9naW5MYXlvdXQ+XG4gICAgICA8SW5uZXJCb3g+XG4gICAgICAgIDxWZXJpZnlFbWFpbCAvPlxuICAgICAgPC9Jbm5lckJveD5cbiAgICA8L0xvZ2luTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5RW1haWxQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRCYWNrZW5kU3J2IiwiRm9ybSIsIkZpZWxkIiwiSW5wdXQiLCJCdXR0b24iLCJMZWdlbmQiLCJDb250YWluZXIiLCJIb3Jpem9udGFsR3JvdXAiLCJMaW5rQnV0dG9uIiwiZ2V0Q29uZmlnIiwidXNlQXBwTm90aWZpY2F0aW9uIiwiVmVyaWZ5RW1haWwiLCJub3RpZnlBcHAiLCJlbWFpbFNlbnQiLCJzZXRFbWFpbFNlbnQiLCJvblN1Ym1pdCIsImZvcm1Nb2RlbCIsInBvc3QiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJtc2ciLCJkYXRhIiwibWVzc2FnZSIsIndhcm5pbmciLCJhcHBTdWJVcmwiLCJyZWdpc3RlciIsImVycm9ycyIsImVtYWlsIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJMb2dpbkxheW91dCIsIklubmVyQm94IiwiVmVyaWZ5RW1haWxQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==