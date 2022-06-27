"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ChangePasswordPage"],{

/***/ "./public/app/core/components/ForgottenPassword/ChangePasswordPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Login_LoginCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Login/LoginCtrl.tsx");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/ForgottenPassword/ChangePassword.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const ChangePasswordPage = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__.LoginLayout, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__.InnerBox, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Login_LoginCtrl__WEBPACK_IMPORTED_MODULE_1__["default"], {
        resetCode: props.queryParams.code,
        children: ({
          changePassword
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ChangePassword__WEBPACK_IMPORTED_MODULE_3__.ChangePassword, {
          onSubmit: changePassword
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbmdlUGFzc3dvcmRQYWdlLmMyNDgyOTliNjZhNzY5MWI3ODliLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFFQTs7QUFJTyxNQUFNSyxrQkFBNkIsR0FBSUMsS0FBRCxJQUFXO0VBQ3RELG9CQUNFLHVEQUFDLDJEQUFEO0lBQUEsdUJBQ0UsdURBQUMsd0RBQUQ7TUFBQSx1QkFDRSx1REFBQyx3REFBRDtRQUFXLFNBQVMsRUFBRUEsS0FBSyxDQUFDQyxXQUFOLENBQWtCQyxJQUF4QztRQUFBLFVBQ0csQ0FBQztVQUFFQztRQUFGLENBQUQsa0JBQXdCLHVEQUFDLDJEQUFEO1VBQWdCLFFBQVEsRUFBRUE7UUFBMUI7TUFEM0I7SUFERjtFQURGLEVBREY7QUFTRCxDQVZNO0FBWVAsaUVBQWVKLGtCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0ZvcmdvdHRlblBhc3N3b3JkL0NoYW5nZVBhc3N3b3JkUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuXG5pbXBvcnQgTG9naW5DdHJsIGZyb20gJy4uL0xvZ2luL0xvZ2luQ3RybCc7XG5pbXBvcnQgeyBMb2dpbkxheW91dCwgSW5uZXJCb3ggfSBmcm9tICcuLi9Mb2dpbi9Mb2dpbkxheW91dCc7XG5cbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSAnLi9DaGFuZ2VQYXNzd29yZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7fSwgeyBjb2RlOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IGNvbnN0IENoYW5nZVBhc3N3b3JkUGFnZTogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExvZ2luTGF5b3V0PlxuICAgICAgPElubmVyQm94PlxuICAgICAgICA8TG9naW5DdHJsIHJlc2V0Q29kZT17cHJvcHMucXVlcnlQYXJhbXMuY29kZX0+XG4gICAgICAgICAgeyh7IGNoYW5nZVBhc3N3b3JkIH0pID0+IDxDaGFuZ2VQYXNzd29yZCBvblN1Ym1pdD17Y2hhbmdlUGFzc3dvcmR9IC8+fVxuICAgICAgICA8L0xvZ2luQ3RybD5cbiAgICAgIDwvSW5uZXJCb3g+XG4gICAgPC9Mb2dpbkxheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZVBhc3N3b3JkUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxvZ2luQ3RybCIsIkxvZ2luTGF5b3V0IiwiSW5uZXJCb3giLCJDaGFuZ2VQYXNzd29yZCIsIkNoYW5nZVBhc3N3b3JkUGFnZSIsInByb3BzIiwicXVlcnlQYXJhbXMiLCJjb2RlIiwiY2hhbmdlUGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9