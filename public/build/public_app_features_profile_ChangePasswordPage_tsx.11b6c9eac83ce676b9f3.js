"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_profile_ChangePasswordPage_tsx"],{

/***/ "./public/app/features/profile/ChangePasswordForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordForm": () => (/* binding */ ChangePasswordForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2;









const ChangePasswordForm = ({
  user,
  onChangePassword,
  isSaving
}) => {
  var _user$authLabels, _Button;

  const {
    ldapEnabled,
    authProxyEnabled,
    disableLoginForm
  } = app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"];
  const authSource = ((_user$authLabels = user.authLabels) === null || _user$authLabels === void 0 ? void 0 : _user$authLabels.length) && user.authLabels[0];

  if (ldapEnabled || authProxyEnabled) {
    return _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "You cannot change password when LDAP or auth proxy authentication is enabled."
    }));
  }

  if (authSource && disableLoginForm) {
    return _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "Password cannot be changed here."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
        max-width: 400px;
      `,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: onChangePassword,
      children: ({
        register,
        errors,
        getValues
      }) => {
        var _errors$oldPassword, _errors$newPassword, _errors$confirmNew;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Old password",
            invalid: !!errors.oldPassword,
            error: errors === null || errors === void 0 ? void 0 : (_errors$oldPassword = errors.oldPassword) === null || _errors$oldPassword === void 0 ? void 0 : _errors$oldPassword.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_4__.PasswordField, Object.assign({
              id: "current-password",
              autoComplete: "current-password"
            }, register('oldPassword', {
              required: 'Old password is required'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "New password",
            invalid: !!errors.newPassword,
            error: errors === null || errors === void 0 ? void 0 : (_errors$newPassword = errors.newPassword) === null || _errors$newPassword === void 0 ? void 0 : _errors$newPassword.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_4__.PasswordField, Object.assign({
              id: "new-password",
              autoComplete: "new-password"
            }, register('newPassword', {
              required: 'New password is required',
              validate: {
                confirm: v => v === getValues().confirmNew || 'Passwords must match',
                old: v => v !== getValues().oldPassword || `New password can't be the same as the old one.`
              }
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Confirm password",
            invalid: !!errors.confirmNew,
            error: errors === null || errors === void 0 ? void 0 : (_errors$confirmNew = errors.confirmNew) === null || _errors$confirmNew === void 0 ? void 0 : _errors$confirmNew.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_4__.PasswordField, Object.assign({
              id: "confirm-new-password",
              autoComplete: "new-password"
            }, register('confirmNew', {
              required: 'New password confirmation is required',
              validate: v => v === getValues().newPassword || 'Passwords must match'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              variant: "primary",
              disabled: isSaving,
              type: "submit",
              children: "Change Password"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
              variant: "secondary",
              href: `${app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].appSubUrl}/profile`,
              fill: "outline",
              children: "Cancel"
            })]
          })]
        });
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/profile/ChangePasswordPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useMount.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _ChangePasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/profile/ChangePasswordForm.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/profile/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;












function mapStateToProps(state) {
  const userState = state.user;
  const {
    isUpdating,
    user
  } = userState;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, `change-password`),
    isUpdating,
    user
  };
}

const mapDispatchToProps = {
  loadUser: _state_actions__WEBPACK_IMPORTED_MODULE_5__.loadUser,
  changePassword: _state_actions__WEBPACK_IMPORTED_MODULE_5__.changePassword
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function ChangePasswordPage({
  navModel,
  loadUser,
  isUpdating,
  user,
  changePassword
}) {
  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(() => loadUser());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      isLoading: !Boolean(user),
      children: user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          className: "page-heading",
          children: "Change Your Password"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ChangePasswordForm__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordForm, {
          user: user,
          onChangePassword: changePassword,
          isSaving: isUpdating
        })]
      }) : null
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(ChangePasswordPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19wcm9maWxlX0NoYW5nZVBhc3N3b3JkUGFnZV90c3guMTFiNmM5ZWFjODNjZTY3NmI5ZjMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7OztBQVVPLE1BQU1TLGtCQUE2QixHQUFHLENBQUM7RUFBRUMsSUFBRjtFQUFRQyxnQkFBUjtFQUEwQkM7QUFBMUIsQ0FBRCxLQUEwQztFQUFBOztFQUNyRixNQUFNO0lBQUVDLFdBQUY7SUFBZUMsZ0JBQWY7SUFBaUNDO0VBQWpDLElBQXNEUix1REFBNUQ7RUFDQSxNQUFNUyxVQUFVLEdBQUcscUJBQUFOLElBQUksQ0FBQ08sVUFBTCxzRUFBaUJDLE1BQWpCLEtBQTJCUixJQUFJLENBQUNPLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBOUM7O0VBRUEsSUFBSUosV0FBVyxJQUFJQyxnQkFBbkIsRUFBcUM7SUFDbkMsZ0NBQU87TUFBQTtJQUFBLEVBQVA7RUFDRDs7RUFDRCxJQUFJRSxVQUFVLElBQUlELGdCQUFsQixFQUFvQztJQUNsQyxrQ0FBTztNQUFBO0lBQUEsRUFBUDtFQUNEOztFQUVELG9CQUNFO0lBQ0UsU0FBUyxFQUFFZiw2Q0FBSTtBQUNyQjtBQUNBLE9BSEk7SUFBQSx1QkFLRSx1REFBQyw2Q0FBRDtNQUFNLFFBQVEsRUFBRVcsZ0JBQWhCO01BQUEsVUFDRyxDQUFDO1FBQUVRLFFBQUY7UUFBWUMsTUFBWjtRQUFvQkM7TUFBcEIsQ0FBRCxLQUFxQztRQUFBOztRQUNwQyxvQkFDRTtVQUFBLHdCQUNFLHVEQUFDLDhDQUFEO1lBQU8sS0FBSyxFQUFDLGNBQWI7WUFBNEIsT0FBTyxFQUFFLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRSxXQUE5QztZQUEyRCxLQUFLLEVBQUVGLE1BQUYsYUFBRUEsTUFBRiw4Q0FBRUEsTUFBTSxDQUFFRSxXQUFWLHdEQUFFLG9CQUFxQkMsT0FBdkY7WUFBQSx1QkFDRSx1REFBQyx1RkFBRDtjQUNFLEVB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RU0sU0FBU0MsYUFBVCxDQUF1QkMsR0FBdkIsRUFBd0Q7RUFDN0QsT0FBTyxnQkFBZ0JaLFFBQWhCLEVBQTBCO0lBQy9CQSxRQUFRLENBQUNMLHNEQUFXLENBQUM7TUFBRU0sUUFBUSxFQUFFO0lBQVosQ0FBRCxDQUFaLENBQVI7SUFDQSxNQUFNWixnREFBQSxDQUFldUIsR0FBZixDQUFOO0lBQ0FFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUJwRSw4REFBQSxHQUFtQixVQUExQztFQUNELENBSkQ7QUFLRDtBQUVNLFNBQVNxRSxpQkFBVCxDQUEyQmxCLE9BQTNCLEVBQTRFO0VBQ2pGLE9BQU8sZ0JBQWdCQyxRQUFoQixFQUEwQjtJQUMvQkEsUUFBUSxDQUFDTCxzREFBVyxDQUFDO01BQUVNLFFBQVEsRUFBRTtJQUFaLENBQUQsQ0FBWixDQUFSO0lBQ0EsTUFBTVosdURBQUEsQ0FBc0JVLE9BQXRCLENBQU47SUFDQSxNQUFNQyxRQUFRLENBQUN0QixRQUFRLEVBQVQsQ0FBZDtJQUNBc0IsUUFBUSxDQUFDTCxzREFBVyxDQUFDO01BQUVNLFFBQVEsRUFBRTtJQUFaLENBQUQsQ0FBWixDQUFSO0VBQ0QsQ0FMRDtBQU1EOzs7Ozs7Ozs7Ozs7QUN6RjJDO0FBQzVDO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvQ2hhbmdlUGFzc3dvcmRGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wcm9maWxlL0NoYW5nZVBhc3N3b3JkUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcHJvZmlsZS9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC1jZWE4ZTgyNmRjLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy40LjAtMGVmNDUyMTU0NC0wODg5ZGE5MTliLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNb3VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24sIEZpZWxkLCBGb3JtLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBVc2VyRFRPIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgUGFzc3dvcmRGaWVsZCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9QYXNzd29yZEZpZWxkL1Bhc3N3b3JkRmllbGQnO1xuXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEZpZWxkcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcjogVXNlckRUTztcbiAgaXNTYXZpbmc6IGJvb2xlYW47XG4gIG9uQ2hhbmdlUGFzc3dvcmQ6IChwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZEZpZWxkcykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENoYW5nZVBhc3N3b3JkRm9ybTogRkM8UHJvcHM+ID0gKHsgdXNlciwgb25DaGFuZ2VQYXNzd29yZCwgaXNTYXZpbmcgfSkgPT4ge1xuICBjb25zdCB7IGxkYXBFbmFibGVkLCBhdXRoUHJveHlFbmFibGVkLCBkaXNhYmxlTG9naW5Gb3JtIH0gPSBjb25maWc7XG4gIGNvbnN0IGF1dGhTb3VyY2UgPSB1c2VyLmF1dGhMYWJlbHM/Lmxlbmd0aCAmJiB1c2VyLmF1dGhMYWJlbHNbMF07XG5cbiAgaWYgKGxkYXBFbmFibGVkIHx8IGF1dGhQcm94eUVuYWJsZWQpIHtcbiAgICByZXR1cm4gPHA+WW91IGNhbm5vdCBjaGFuZ2UgcGFzc3dvcmQgd2hlbiBMREFQIG9yIGF1dGggcHJveHkgYXV0aGVudGljYXRpb24gaXMgZW5hYmxlZC48L3A+O1xuICB9XG4gIGlmIChhdXRoU291cmNlICYmIGRpc2FibGVMb2dpbkZvcm0pIHtcbiAgICByZXR1cm4gPHA+UGFzc3dvcmQgY2Fubm90IGJlIGNoYW5nZWQgaGVyZS48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uQ2hhbmdlUGFzc3dvcmR9PlxuICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycywgZ2V0VmFsdWVzIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiT2xkIHBhc3N3b3JkXCIgaW52YWxpZD17ISFlcnJvcnMub2xkUGFzc3dvcmR9IGVycm9yPXtlcnJvcnM/Lm9sZFBhc3N3b3JkPy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRGaWVsZFxuICAgICAgICAgICAgICAgICAgaWQ9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdvbGRQYXNzd29yZCcsIHsgcmVxdWlyZWQ6ICdPbGQgcGFzc3dvcmQgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmV3IHBhc3N3b3JkXCIgaW52YWxpZD17ISFlcnJvcnMubmV3UGFzc3dvcmR9IGVycm9yPXtlcnJvcnM/Lm5ld1Bhc3N3b3JkPy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRGaWVsZFxuICAgICAgICAgICAgICAgICAgaWQ9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbmV3UGFzc3dvcmQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25maXJtOiAodikgPT4gdiA9PT0gZ2V0VmFsdWVzKCkuY29uZmlybU5ldyB8fCAnUGFzc3dvcmRzIG11c3QgbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgIG9sZDogKHYpID0+IHYgIT09IGdldFZhbHVlcygpLm9sZFBhc3N3b3JkIHx8IGBOZXcgcGFzc3dvcmQgY2FuJ3QgYmUgdGhlIHNhbWUgYXMgdGhlIG9sZCBvbmUuYCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiQ29uZmlybSBwYXNzd29yZFwiIGludmFsaWQ9eyEhZXJyb3JzLmNvbmZpcm1OZXd9IGVycm9yPXtlcnJvcnM/LmNvbmZpcm1OZXc/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZEZpZWxkXG4gICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm0tbmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2NvbmZpcm1OZXcnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnTmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAodikgPT4gdiA9PT0gZ2V0VmFsdWVzKCkubmV3UGFzc3dvcmQgfHwgJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoJyxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGRpc2FibGVkPXtpc1NhdmluZ30gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGhyZWY9e2Ake2NvbmZpZy5hcHBTdWJVcmx9L3Byb2ZpbGVgfSBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlTW91bnQgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRm9ybSB9IGZyb20gJy4vQ2hhbmdlUGFzc3dvcmRGb3JtJztcbmltcG9ydCB7IGNoYW5nZVBhc3N3b3JkLCBsb2FkVXNlciB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICBjb25zdCB1c2VyU3RhdGUgPSBzdGF0ZS51c2VyO1xuICBjb25zdCB7IGlzVXBkYXRpbmcsIHVzZXIgfSA9IHVzZXJTdGF0ZTtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsIGBjaGFuZ2UtcGFzc3dvcmRgKSxcbiAgICBpc1VwZGF0aW5nLFxuICAgIHVzZXIsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZFVzZXIsXG4gIGNoYW5nZVBhc3N3b3JkLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGZ1bmN0aW9uIENoYW5nZVBhc3N3b3JkUGFnZSh7IG5hdk1vZGVsLCBsb2FkVXNlciwgaXNVcGRhdGluZywgdXNlciwgY2hhbmdlUGFzc3dvcmQgfTogUHJvcHMpIHtcbiAgdXNlTW91bnQoKCkgPT4gbG9hZFVzZXIoKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXshQm9vbGVhbih1c2VyKX0+XG4gICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+Q2hhbmdlIFlvdXIgUGFzc3dvcmQ8L2gzPlxuICAgICAgICAgICAgPENoYW5nZVBhc3N3b3JkRm9ybSB1c2VyPXt1c2VyfSBvbkNoYW5nZVBhc3N3b3JkPXtjaGFuZ2VQYXNzd29yZH0gaXNTYXZpbmc9e2lzVXBkYXRpbmd9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKENoYW5nZVBhc3N3b3JkUGFnZSk7XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgVGh1bmtSZXN1bHQsIFVzZXJPcmcgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRGaWVsZHMsIFByb2ZpbGVVcGRhdGVGaWVsZHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7XG4gIGluaXRMb2FkT3JncyxcbiAgaW5pdExvYWRTZXNzaW9ucyxcbiAgaW5pdExvYWRUZWFtcyxcbiAgb3Jnc0xvYWRlZCxcbiAgc2Vzc2lvbnNMb2FkZWQsXG4gIHNldFVwZGF0aW5nLFxuICB0ZWFtc0xvYWRlZCxcbiAgdXNlckxvYWRlZCxcbiAgdXNlclNlc3Npb25SZXZva2VkLFxufSBmcm9tICcuL3JlZHVjZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkKHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkRmllbGRzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogdHJ1ZSB9KSk7XG4gICAgYXdhaXQgYXBpLmNoYW5nZVBhc3N3b3JkKHBheWxvYWQpO1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IGZhbHNlIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRVc2VyUHJvZmlsZVBhZ2UoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZFVzZXIoKSk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1zKCkpO1xuICAgIGRpc3BhdGNoKGxvYWRPcmdzKCkpO1xuICAgIGRpc3BhdGNoKGxvYWRTZXNzaW9ucygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRVc2VyKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcGkubG9hZFVzZXIoKTtcbiAgICBkaXNwYXRjaCh1c2VyTG9hZGVkKHsgdXNlciB9KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRUZWFtcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChpbml0TG9hZFRlYW1zKCkpO1xuICAgIGNvbnN0IHRlYW1zID0gYXdhaXQgYXBpLmxvYWRUZWFtcygpO1xuICAgIGRpc3BhdGNoKHRlYW1zTG9hZGVkKHsgdGVhbXMgfSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBsb2FkT3JncygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChpbml0TG9hZE9yZ3MoKSk7XG4gICAgY29uc3Qgb3JncyA9IGF3YWl0IGFwaS5sb2FkT3JncygpO1xuICAgIGRpc3BhdGNoKG9yZ3NMb2FkZWQoeyBvcmdzIH0pKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZFNlc3Npb25zKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKGluaXRMb2FkU2Vzc2lvbnMoKSk7XG4gICAgY29uc3Qgc2Vzc2lvbnMgPSBhd2FpdCBhcGkubG9hZFNlc3Npb25zKCk7XG4gICAgZGlzcGF0Y2goc2Vzc2lvbnNMb2FkZWQoeyBzZXNzaW9ucyB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZva2VVc2VyU2Vzc2lvbih0b2tlbklkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiB0cnVlIH0pKTtcbiAgICBhd2FpdCBhcGkucmV2b2tlVXNlclNlc3Npb24odG9rZW5JZCk7XG4gICAgZGlzcGF0Y2godXNlclNlc3Npb25SZXZva2VkKHsgdG9rZW5JZCB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VVc2VyT3JnKG9yZzogVXNlck9yZyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IHRydWUgfSkpO1xuICAgIGF3YWl0IGFwaS5zZXRVc2VyT3JnKG9yZyk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb25maWcuYXBwU3ViVXJsICsgJy9wcm9maWxlJztcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVzZXJQcm9maWxlKHBheWxvYWQ6IFByb2ZpbGVVcGRhdGVGaWVsZHMpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiB0cnVlIH0pKTtcbiAgICBhd2FpdCBhcGkudXBkYXRlVXNlclByb2ZpbGUocGF5bG9hZCk7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZFVzZXIoKSk7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogZmFsc2UgfSkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHVzZUVmZmVjdE9uY2UgZnJvbSAnLi91c2VFZmZlY3RPbmNlJztcbnZhciB1c2VNb3VudCA9IGZ1bmN0aW9uIChmbikge1xuICAgIHVzZUVmZmVjdE9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBmbigpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZU1vdW50O1xuIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwiQnV0dG9uIiwiRmllbGQiLCJGb3JtIiwiSG9yaXpvbnRhbEdyb3VwIiwiTGlua0J1dHRvbiIsImNvbmZpZyIsIlBhc3N3b3JkRmllbGQiLCJDaGFuZ2VQYXNzd29yZEZvcm0iLCJ1c2VyIiwib25DaGFuZ2VQYXNzd29yZCIsImlzU2F2aW5nIiwibGRhcEVuYWJsZWQiLCJhdXRoUHJveHlFbmFibGVkIiwiZGlzYWJsZUxvZ2luRm9ybSIsImF1dGhTb3VyY2UiLCJhdXRoTGFiZWxzIiwibGVuZ3RoIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvbGRQYXNzd29yZCIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsIm5ld1Bhc3N3b3JkIiwidmFsaWRhdGUiLCJjb25maXJtIiwidiIsImNvbmZpcm1OZXciLCJvbGQiLCJhcHBTdWJVcmwiLCJjb25uZWN0IiwidXNlTW91bnQiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJjaGFuZ2VQYXNzd29yZCIsImxvYWRVc2VyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyU3RhdGUiLCJpc1VwZGF0aW5nIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkNoYW5nZVBhc3N3b3JkUGFnZSIsIkJvb2xlYW4iLCJhcGkiLCJpbml0TG9hZE9yZ3MiLCJpbml0TG9hZFNlc3Npb25zIiwiaW5pdExvYWRUZWFtcyIsIm9yZ3NMb2FkZWQiLCJzZXNzaW9uc0xvYWRlZCIsInNldFVwZGF0aW5nIiwidGVhbXNMb2FkZWQiLCJ1c2VyTG9hZGVkIiwidXNlclNlc3Npb25SZXZva2VkIiwicGF5bG9hZCIsImRpc3BhdGNoIiwidXBkYXRpbmciLCJpbml0VXNlclByb2ZpbGVQYWdlIiwibG9hZFRlYW1zIiwibG9hZE9yZ3MiLCJsb2FkU2Vzc2lvbnMiLCJ0ZWFtcyIsIm9yZ3MiLCJzZXNzaW9ucyIsInJldm9rZVVzZXJTZXNzaW9uIiwidG9rZW5JZCIsImNoYW5nZVVzZXJPcmciLCJvcmciLCJzZXRVc2VyT3JnIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXBkYXRlVXNlclByb2ZpbGUiXSwic291cmNlUm9vdCI6IiJ9