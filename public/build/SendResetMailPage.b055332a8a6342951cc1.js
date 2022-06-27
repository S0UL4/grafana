"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SendResetMailPage"],{

/***/ "./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgottenPassword": () => (/* binding */ ForgottenPassword)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _Container, _Legend, _Button;










const paragraphStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  color: ${theme.colors.formDescription};
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.regular};
  margin-top: ${theme.spacing.sm};
  display: block;
`;

const ForgottenPassword = () => {
  var _HorizontalGroup, _p2;

  const [emailSent, setEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(paragraphStyles);
  const loginHref = `${app_core_config__WEBPACK_IMPORTED_MODULE_4__["default"].appSubUrl}/login`;

  const sendEmail = async formModel => {
    const res = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/user/password/send-reset-email', formModel);

    if (res) {
      setEmailSent(true);
    }
  };

  if (emailSent) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: "An email with a reset link has been sent to the email address. You should receive it shortly."
      })), _Container || (_Container = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Container, {
        margin: "md"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        variant: "primary",
        href: loginHref,
        children: "Back to login"
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
    onSubmit: sendEmail,
    children: ({
      register,
      errors
    }) => {
      var _errors$userOrEmail;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Legend, {
          children: "Reset password"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "User",
          description: "Enter your information to get a reset link sent to you",
          invalid: !!errors.userOrEmail,
          error: errors === null || errors === void 0 ? void 0 : (_errors$userOrEmail = errors.userOrEmail) === null || _errors$userOrEmail === void 0 ? void 0 : _errors$userOrEmail.message,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
            id: "user-input",
            placeholder: "Email or username"
          }, register('userOrEmail', {
            required: 'Email or username is required'
          })))
        }), _HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "submit",
            children: "Send reset email"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            fill: "text",
            href: loginHref,
            children: "Back to login"
          })]
        })), _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: styles,
          children: "Did you forget your username or email? Contact your Grafana administrator."
        }))]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/core/components/ForgottenPassword/SendResetMailPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendResetMailPage": () => (/* binding */ SendResetMailPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoginLayout;





const SendResetMailPage = () => _LoginLayout || (_LoginLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.LoginLayout, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.InnerBox, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__.ForgottenPassword, {})
  })
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendResetMailPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZFJlc2V0TWFpbFBhZ2UuYjA1NTMzMmE4YTYzNDI5NTFjYzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFNQSxNQUFNYyxlQUFlLEdBQUlDLEtBQUQsSUFBeUJmLDZDQUFJO0FBQ3JELFdBQVdlLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxlQUFnQjtBQUN4QyxlQUFlRixLQUFLLENBQUNHLFVBQU4sQ0FBaUJDLElBQWpCLENBQXNCQyxFQUFHO0FBQ3hDLGlCQUFpQkwsS0FBSyxDQUFDRyxVQUFOLENBQWlCRyxNQUFqQixDQUF3QkMsT0FBUTtBQUNqRCxnQkFBZ0JQLEtBQUssQ0FBQ1EsT0FBTixDQUFjSCxFQUFHO0FBQ2pDO0FBQ0EsQ0FOQTs7QUFRTyxNQUFNSSxpQkFBcUIsR0FBRyxNQUFNO0VBQUE7O0VBQ3pDLE1BQU0sQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLElBQTRCeEIsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0VBQ0EsTUFBTXlCLE1BQU0sR0FBR2pCLHNEQUFTLENBQUNJLGVBQUQsQ0FBeEI7RUFDQSxNQUFNYyxTQUFTLEdBQUksR0FBRWYsaUVBQWlCLFFBQXRDOztFQUVBLE1BQU1pQixTQUFTLEdBQUcsTUFBT0MsU0FBUCxJQUErQjtJQUMvQyxNQUFNQyxHQUFHLEdBQUcsTUFBTTdCLCtEQUFhLEdBQUc4QixJQUFoQixDQUFxQixxQ0FBckIsRUFBNERGLFNBQTVELENBQWxCOztJQUNBLElBQUlDLEdBQUosRUFBUztNQUNQTixZQUFZLENBQUMsSUFBRCxDQUFaO0lBQ0Q7RUFDRixDQUxEOztFQU9BLElBQUlELFNBQUosRUFBZTtJQUNiLG9CQUNFO01BQUEsb0NBQ0U7UUFBQTtNQUFBLEVBREYsNENBRUUsdURBQUMsa0RBQUQ7UUFBVyxNQUFNLEVBQUM7TUFBbEIsRUFGRixnQkFHRSx1REFBQyxtREFBRDtRQUFZLE9BQU8sRUFBQyxTQUFwQjtRQUE4QixJQUFJLEVBQUVHLFNBQXBDO1FBQUE7TUFBQSxFQUhGO0lBQUEsRUFERjtFQVNEOztFQUNELG9CQUNFLHVEQUFDLDZDQUFEO0lBQU0sUUFBUSxFQUFFRSxTQUFoQjtJQUFBLFVBQ0csQ0FBQztNQUFFSSxRQUFGO01BQVlDO0lBQVosQ0FBRDtNQUFBOztNQUFBLG9CQUNDO1FBQUEsOENBQ0UsdURBQUMsK0NBQUQ7VUFBQTtRQUFBLEVBREYsZ0JBRUUsdURBQUMsOENBQUQ7VUFDRSxLQUFLLEVBQUMsTUFEUjtVQUVFLFdBQVcsRUFBQyx3REFGZDtVQUdFLE9BQU8sRUFBRSxDQUFDLENBQUNBLE1BQU0sQ0FBQ0MsV0FIcEI7VUFJRSxLQUFLLEVBQUVELE1BQUYsYUFBRUEsTUFBRiw4Q0FBRUEsTUFBTSxDQUFFQyxXQUFWLHdEQUFFLG9CQUFxQkMsT0FKOUI7VUFBQSx1QkFNRSx1REFBQyw4Q0FBRDtZQUNFLEVBQUUsRUFBQyxZQURMO1lBRUUsV0FBVyxFQUFDO1VBRmQsR0FHTUgsUUFBUSxDQUFDLGFBQUQsRUFBZ0I7WUFBRUksUUFBUSxFQUFFO1VBQVosQ0FBaEIsQ0FIZDtRQU5GLEVBRkYsdURBY0Usd0RBQUMsd0RBQUQ7VUFBQSw4Q0FDRSx1REFBQywrQ0FBRDtZQUFRLElBQUksRUFBQyxRQUFiO1lBQUE7VUFBQSxFQURGLGdCQUVFLHVEQUFDLG1EQUFEO1lBQVksSUFBSSxFQUFDLE1BQWpCO1lBQXdCLElBQUksRUFBRVYsU0FBOUI7WUFBQTtVQUFBLEVBRkY7UUFBQSxFQWRGLDhCQXFCRTtVQUFHLFNBQVMsRUFBRUQsTUFBZDtVQUFBO1FBQUEsRUFyQkY7TUFBQSxFQUREO0lBQUE7RUFESCxFQURGO0FBNkJELENBcERNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQlA7QUFFQTtBQUVBOztBQUVPLE1BQU1jLGlCQUFxQixHQUFHLG1EQUNuQyx1REFBQywyREFBRDtFQUFBLHVCQUNFLHVEQUFDLHdEQUFEO0lBQUEsdUJBQ0UsdURBQUMsaUVBQUQ7RUFERjtBQURGLEVBRG1DLENBQTlCO0FBUVAsaUVBQWVBLGlCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0ZvcmdvdHRlblBhc3N3b3JkL0ZvcmdvdHRlblBhc3N3b3JkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvRm9yZ290dGVuUGFzc3dvcmQvU2VuZFJlc2V0TWFpbFBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEZvcm0sIEZpZWxkLCBJbnB1dCwgQnV0dG9uLCBMZWdlbmQsIENvbnRhaW5lciwgdXNlU3R5bGVzLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5cbmludGVyZmFjZSBFbWFpbERUTyB7XG4gIHVzZXJPckVtYWlsOiBzdHJpbmc7XG59XG5cbmNvbnN0IHBhcmFncmFwaFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiBjc3NgXG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5mb3JtRGVzY3JpcHRpb259O1xuICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS53ZWlnaHQucmVndWxhcn07XG4gIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvcmdvdHRlblBhc3N3b3JkOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsU2VudCwgc2V0RW1haWxTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKHBhcmFncmFwaFN0eWxlcyk7XG4gIGNvbnN0IGxvZ2luSHJlZiA9IGAke2NvbmZpZy5hcHBTdWJVcmx9L2xvZ2luYDtcblxuICBjb25zdCBzZW5kRW1haWwgPSBhc3luYyAoZm9ybU1vZGVsOiBFbWFpbERUTykgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3VzZXIvcGFzc3dvcmQvc2VuZC1yZXNldC1lbWFpbCcsIGZvcm1Nb2RlbCk7XG4gICAgaWYgKHJlcykge1xuICAgICAgc2V0RW1haWxTZW50KHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoZW1haWxTZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkFuIGVtYWlsIHdpdGggYSByZXNldCBsaW5rIGhhcyBiZWVuIHNlbnQgdG8gdGhlIGVtYWlsIGFkZHJlc3MuIFlvdSBzaG91bGQgcmVjZWl2ZSBpdCBzaG9ydGx5LjwvcD5cbiAgICAgICAgPENvbnRhaW5lciBtYXJnaW49XCJtZFwiIC8+XG4gICAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaHJlZj17bG9naW5IcmVmfT5cbiAgICAgICAgICBCYWNrIHRvIGxvZ2luXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvblN1Ym1pdD17c2VuZEVtYWlsfT5cbiAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGVnZW5kPlJlc2V0IHBhc3N3b3JkPC9MZWdlbmQ+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFbnRlciB5b3VyIGluZm9ybWF0aW9uIHRvIGdldCBhIHJlc2V0IGxpbmsgc2VudCB0byB5b3VcIlxuICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMudXNlck9yRW1haWx9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy51c2VyT3JFbWFpbD8ubWVzc2FnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VyLWlucHV0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBvciB1c2VybmFtZVwiXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigndXNlck9yRW1haWwnLCB7IHJlcXVpcmVkOiAnRW1haWwgb3IgdXNlcm5hbWUgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIHJlc2V0IGVtYWlsPC9CdXR0b24+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBmaWxsPVwidGV4dFwiIGhyZWY9e2xvZ2luSHJlZn0+XG4gICAgICAgICAgICAgIEJhY2sgdG8gbG9naW5cbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzfT5EaWQgeW91IGZvcmdldCB5b3VyIHVzZXJuYW1lIG9yIGVtYWlsPyBDb250YWN0IHlvdXIgR3JhZmFuYSBhZG1pbmlzdHJhdG9yLjwvcD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExvZ2luTGF5b3V0LCBJbm5lckJveCB9IGZyb20gJy4uL0xvZ2luL0xvZ2luTGF5b3V0JztcblxuaW1wb3J0IHsgRm9yZ290dGVuUGFzc3dvcmQgfSBmcm9tICcuL0ZvcmdvdHRlblBhc3N3b3JkJztcblxuZXhwb3J0IGNvbnN0IFNlbmRSZXNldE1haWxQYWdlOiBGQyA9ICgpID0+IChcbiAgPExvZ2luTGF5b3V0PlxuICAgIDxJbm5lckJveD5cbiAgICAgIDxGb3Jnb3R0ZW5QYXNzd29yZCAvPlxuICAgIDwvSW5uZXJCb3g+XG4gIDwvTG9naW5MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZW5kUmVzZXRNYWlsUGFnZTtcbiJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiZ2V0QmFja2VuZFNydiIsIkZvcm0iLCJGaWVsZCIsIklucHV0IiwiQnV0dG9uIiwiTGVnZW5kIiwiQ29udGFpbmVyIiwidXNlU3R5bGVzIiwiSG9yaXpvbnRhbEdyb3VwIiwiTGlua0J1dHRvbiIsImNvbmZpZyIsInBhcmFncmFwaFN0eWxlcyIsInRoZW1lIiwiY29sb3JzIiwiZm9ybURlc2NyaXB0aW9uIiwidHlwb2dyYXBoeSIsInNpemUiLCJzbSIsIndlaWdodCIsInJlZ3VsYXIiLCJzcGFjaW5nIiwiRm9yZ290dGVuUGFzc3dvcmQiLCJlbWFpbFNlbnQiLCJzZXRFbWFpbFNlbnQiLCJzdHlsZXMiLCJsb2dpbkhyZWYiLCJhcHBTdWJVcmwiLCJzZW5kRW1haWwiLCJmb3JtTW9kZWwiLCJyZXMiLCJwb3N0IiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJ1c2VyT3JFbWFpbCIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsIkxvZ2luTGF5b3V0IiwiSW5uZXJCb3giLCJTZW5kUmVzZXRNYWlsUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=