"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SignupInvited"],{

/***/ "./public/app/features/invites/SignupInvited.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupInvitedPage": () => (/* binding */ SignupInvitedPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _Button;











const navModel = {
  main: {
    icon: 'grafana',
    text: 'Invite',
    subTitle: 'Register your Grafana account',
    breadcrumbs: [{
      title: 'Login',
      url: 'login'
    }]
  },
  node: {
    text: ''
  }
};
const SignupInvitedPage = ({
  match
}) => {
  const code = match.params.code;
  const [initFormModel, setInitFormModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [greeting, setGreeting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [invitedBy, setInvitedBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(async () => {
    const invite = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/user/invite/${code}`);
    setInitFormModel({
      email: invite.email,
      name: invite.name,
      username: invite.email
    });
    setGreeting(invite.name || invite.email || invite.username);
    setInvitedBy(invite.invitedBy);
  }, [code]);

  const onSubmit = async formData => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post('/api/user/invite/complete', Object.assign({}, formData, {
      inviteCode: code
    }));
    window.location.href = (0,app_core_config__WEBPACK_IMPORTED_MODULE_4__.getConfig)().appSubUrl + '/';
  };

  if (!initFormModel) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
        className: "page-sub-heading",
        children: ["Hello ", greeting || 'there', "."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "modal-tagline p-b-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("em", {
          children: invitedBy || 'Someone'
        }), " has invited you to join Grafana and the organization", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "highlight-word",
          children: app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.user.orgName
        }), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), "Please complete the following and choose a password to accept your invitation and continue:"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        defaultValues: initFormModel,
        onSubmit: onSubmit,
        children: ({
          register,
          errors
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.email,
            error: errors.email && errors.email.message,
            label: "Email",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
              placeholder: "email@example.com"
            }, register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/,
                message: 'Email is invalid'
              }
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.name,
            error: errors.name && errors.name.message,
            label: "Name",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
              placeholder: "Name (optional)"
            }, register('name')))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.username,
            error: errors.username && errors.username.message,
            label: "Username",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('username', {
              required: 'Username is required'
            }), {
              placeholder: "Username"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.password,
            error: errors.password && errors.password.message,
            label: "Password",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('password', {
              required: 'Password is required'
            }), {
              type: "password",
              placeholder: "Password"
            }))
          }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Sign up"
          }))]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupInvitedPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQyxVQUFELEVBQWE7Y0FBRUcsUUFBUSxFQUFFO1lBQVosQ0FBYixDQURkO2NBRUUsSUFBSSxFQUFDLFVBRlA7Y0FHRSxXQUFXLEVBQUM7WUFIZDtVQURGLEVBbkJGLHFDQTJCRSx1REFBQywrQ0FBRDtZQUFRLElBQUksRUFBQyxRQUFiO1lBQUE7VUFBQSxFQTNCRjtRQUFBO01BRkosRUFURjtJQUFBO0VBREYsRUFERjtBQStDRCxDQTNFTTtBQTZFUCxpRUFBZTVCLGlCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvaW52aXRlcy9TaWdudXBJbnZpdGVkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIEZpZWxkLCBGb3JtLCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuXG5pbnRlcmZhY2UgRm9ybU1vZGVsIHtcbiAgZW1haWw6IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IG5hdk1vZGVsID0ge1xuICBtYWluOiB7XG4gICAgaWNvbjogJ2dyYWZhbmEnLFxuICAgIHRleHQ6ICdJbnZpdGUnLFxuICAgIHN1YlRpdGxlOiAnUmVnaXN0ZXIgeW91ciBHcmFmYW5hIGFjY291bnQnLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ0xvZ2luJywgdXJsOiAnbG9naW4nIH1dLFxuICB9LFxuICBub2RlOiB7XG4gICAgdGV4dDogJycsXG4gIH0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyBjb2RlOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IGNvbnN0IFNpZ251cEludml0ZWRQYWdlOiBGQzxQcm9wcz4gPSAoeyBtYXRjaCB9KSA9PiB7XG4gIGNvbnN0IGNvZGUgPSBtYXRjaC5wYXJhbXMuY29kZTtcbiAgY29uc3QgW2luaXRGb3JtTW9kZWwsIHNldEluaXRGb3JtTW9kZWxdID0gdXNlU3RhdGU8Rm9ybU1vZGVsPigpO1xuICBjb25zdCBbZ3JlZXRpbmcsIHNldEdyZWV0aW5nXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2ludml0ZWRCeSwgc2V0SW52aXRlZEJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuICB1c2VBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaW52aXRlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS91c2VyL2ludml0ZS8ke2NvZGV9YCk7XG5cbiAgICBzZXRJbml0Rm9ybU1vZGVsKHtcbiAgICAgIGVtYWlsOiBpbnZpdGUuZW1haWwsXG4gICAgICBuYW1lOiBpbnZpdGUubmFtZSxcbiAgICAgIHVzZXJuYW1lOiBpbnZpdGUuZW1haWwsXG4gICAgfSk7XG5cbiAgICBzZXRHcmVldGluZyhpbnZpdGUubmFtZSB8fCBpbnZpdGUuZW1haWwgfHwgaW52aXRlLnVzZXJuYW1lKTtcbiAgICBzZXRJbnZpdGVkQnkoaW52aXRlLmludml0ZWRCeSk7XG4gIH0sIFtjb2RlXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZm9ybURhdGE6IEZvcm1Nb2RlbCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3VzZXIvaW52aXRlL2NvbXBsZXRlJywgeyAuLi5mb3JtRGF0YSwgaW52aXRlQ29kZTogY29kZSB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldENvbmZpZygpLmFwcFN1YlVybCArICcvJztcbiAgfTtcblxuICBpZiAoIWluaXRGb3JtTW9kZWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPkhlbGxvIHtncmVldGluZyB8fCAndGhlcmUnfS48L2gzPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtdGFnbGluZSBwLWItMlwiPlxuICAgICAgICAgIDxlbT57aW52aXRlZEJ5IHx8ICdTb21lb25lJ308L2VtPiBoYXMgaW52aXRlZCB5b3UgdG8gam9pbiBHcmFmYW5hIGFuZCB0aGUgb3JnYW5pemF0aW9ueycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHQtd29yZFwiPntjb250ZXh0U3J2LnVzZXIub3JnTmFtZX08L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgUGxlYXNlIGNvbXBsZXRlIHRoZSBmb2xsb3dpbmcgYW5kIGNob29zZSBhIHBhc3N3b3JkIHRvIGFjY2VwdCB5b3VyIGludml0YXRpb24gYW5kIGNvbnRpbnVlOlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvcm0gZGVmYXVsdFZhbHVlcz17aW5pdEZvcm1Nb2RlbH0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMuZW1haWx9IGVycm9yPXtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLm1lc3NhZ2V9IGxhYmVsPVwiRW1haWxcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFbWFpbCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogL15cXFMrQFxcUyskLyxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRW1haWwgaXMgaW52YWxpZCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMubmFtZX0gZXJyb3I9e2Vycm9ycy5uYW1lICYmIGVycm9ycy5uYW1lLm1lc3NhZ2V9IGxhYmVsPVwiTmFtZVwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWUgKG9wdGlvbmFsKVwiIHsuLi5yZWdpc3RlcignbmFtZScpfSAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMudXNlcm5hbWV9IGVycm9yPXtlcnJvcnMudXNlcm5hbWUgJiYgZXJyb3JzLnVzZXJuYW1lLm1lc3NhZ2V9IGxhYmVsPVwiVXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCd1c2VybmFtZScsIHsgcmVxdWlyZWQ6ICdVc2VybmFtZSBpcyByZXF1aXJlZCcgfSl9IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgaW52YWxpZD17ISFlcnJvcnMucGFzc3dvcmR9IGVycm9yPXtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9IGxhYmVsPVwiUGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cEludml0ZWRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VBc3luYyIsImdldEJhY2tlbmRTcnYiLCJCdXR0b24iLCJGaWVsZCIsIkZvcm0iLCJJbnB1dCIsIlBhZ2UiLCJnZXRDb25maWciLCJjb250ZXh0U3J2IiwibmF2TW9kZWwiLCJtYWluIiwiaWNvbiIsInRleHQiLCJzdWJUaXRsZSIsImJyZWFkY3J1bWJzIiwidGl0bGUiLCJ1cmwiLCJub2RlIiwiU2lnbnVwSW52aXRlZFBhZ2UiLCJtYXRjaCIsImNvZGUiLCJwYXJhbXMiLCJpbml0Rm9ybU1vZGVsIiwic2V0SW5pdEZvcm1Nb2RlbCIsImdyZWV0aW5nIiwic2V0R3JlZXRpbmciLCJpbnZpdGVkQnkiLCJzZXRJbnZpdGVkQnkiLCJpbnZpdGUiLCJnZXQiLCJlbWFpbCIsIm5hbWUiLCJ1c2VybmFtZSIsIm9uU3VibWl0IiwiZm9ybURhdGEiLCJwb3N0IiwiaW52aXRlQ29kZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFwcFN1YlVybCIsInVzZXIiLCJvcmdOYW1lIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidmFsdWUiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=