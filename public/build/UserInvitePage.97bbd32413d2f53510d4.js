"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserInvitePage"],{

/***/ "./public/app/features/org/UserInviteForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInviteForm": () => (/* binding */ UserInviteForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _invites_state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/invites/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button;

const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const roles = [{
  label: 'Viewer',
  value: app_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Viewer
}, {
  label: 'Editor',
  value: app_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Editor
}, {
  label: 'Admin',
  value: app_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Admin
}];
const defaultValues = {
  name: '',
  email: '',
  role: app_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Editor,
  sendEmail: true
};
const UserInviteForm = () => {
  const dispatch = (0,app_types__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  const onSubmit = async formData => {
    await dispatch((0,_invites_state_actions__WEBPACK_IMPORTED_MODULE_6__.addInvitee)(formData)).unwrap();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/org/users/');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
    defaultValues: defaultValues,
    onSubmit: onSubmit,
    children: ({
      register,
      control,
      errors
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          invalid: !!errors.loginOrEmail,
          error: !!errors.loginOrEmail ? 'Email or username is required' : undefined,
          label: "Email or username",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register('loginOrEmail', {
            required: true
          }), {
            placeholder: "email@example.com"
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          invalid: !!errors.name,
          label: "Name",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register('name'), {
            placeholder: "(optional)"
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          invalid: !!errors.role,
          label: "Role",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
            render: _ref => {
              let {} = _ref,
                  field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, Object.assign({}, field, {
                options: roles
              }));
            },
            control: control,
            name: "role"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "Send invite email",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, Object.assign({
            id: "send-email-switch"
          }, register('sendEmail')))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "submit",
            children: "Submit"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            href: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.locationUtil.assureBaseUrl((0,app_core_config__WEBPACK_IMPORTED_MODULE_4__.getConfig)().appSubUrl + '/org/users'),
            variant: "secondary",
            children: "Back"
          })]
        })]
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInviteForm);

/***/ }),

/***/ "./public/app/features/org/UserInvitePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInvitePage": () => (/* binding */ UserInvitePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _UserInviteForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/org/UserInviteForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _UserInviteForm;









const UserInvitePage = ({
  navModel
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "page-sub-heading",
        children: "Invite user"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "p-b-2",
        children: ["Send invitation or add existing Grafana user to the organization.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          className: "highlight-word",
          children: [" ", app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.user.orgName]
        })]
      }), _UserInviteForm || (_UserInviteForm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_UserInviteForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}))]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, 'users')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(UserInvitePage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckludml0ZVBhZ2UuOTdiYmQzMjQxM2QyZjUzNTEwZDQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUVBOzs7O0FBRUEsTUFBTWdCLEtBQUssR0FBRyxDQUNaO0VBQUVDLEtBQUssRUFBRSxRQUFUO0VBQW1CQyxLQUFLLEVBQUVMLHFEQUFjTTtBQUF4QyxDQURZLEVBRVo7RUFBRUYsS0FBSyxFQUFFLFFBQVQ7RUFBbUJDLEtBQUssRUFBRUwscURBQWNPO0FBQXhDLENBRlksRUFHWjtFQUFFSCxLQUFLLEVBQUUsT0FBVDtFQUFrQkMsS0FBSyxFQUFFTCxvREFBYVE7QUFBdEMsQ0FIWSxDQUFkO0FBY0EsTUFBTUMsYUFBd0IsR0FBRztFQUMvQkMsSUFBSSxFQUFFLEVBRHlCO0VBRS9CQyxLQUFLLEVBQUUsRUFGd0I7RUFHL0JDLElBQUksRUFBRVoscURBSHlCO0VBSS9CYSxTQUFTLEVBQUU7QUFKb0IsQ0FBakM7QUFPTyxNQUFNQyxjQUFjLEdBQUcsTUFBTTtFQUNsQyxNQUFNQyxRQUFRLEdBQUdkLHNEQUFXLEVBQTVCOztFQUVBLE1BQU1lLFFBQVEsR0FBRyxNQUFPQyxRQUFQLElBQStCO0lBQzlDLE1BQU1GLFFBQVEsQ0FBQ2Isa0VBQVUsQ0FBQ2UsUUFBRCxDQUFYLENBQVIsQ0FBK0JDLE1BQS9CLEVBQU47SUFDQTdCLGtFQUFBLENBQXFCLGFBQXJCO0VBQ0QsQ0FIRDs7RUFLQSxvQkFDRSx1REFBQyw2Q0FBRDtJQUFNLGFBQWEsRUFBRW9CLGFBQXJCO0lBQW9DLFFBQVEsRUFBRU8sUUFBOUM7SUFBQSxVQUNHLENBQUM7TUFBRUksUUFBRjtNQUFZQyxPQUFaO01BQXFCQztJQUFyQixDQUFELEtBQW1DO01BQ2xDLG9CQUNFO1FBQUEsd0JBQ0UsdURBQUMsOENBQUQ7VUFDRSxPQUFPLEVBQUUsQ0FBQyxDQUFDQSxNQUFNLENBQUNDLFlBRHBCO1VBRUUsS0FBSyxFQUFFLENBQUMsQ0FBQ0QsTUFBTSxDQUFDQyxZQUFULEdBQXdCLCtCQUF4QixHQUEwREMsU0FGbkU7VUFHRSxLQUFLLEVBQUMsbUJBSFI7VUFBQSx1QkFLRSx1REFBQyw4Q0FBRCxvQkFBV0osUUFBUSxDQUFDLGNBQUQsRUFBaUI7WUFBRUssUUFBUSxFQUFFO1VBQVosQ0FBakIsQ0FBbkI7WUFBeUQsV0FBVyxFQUFDO1VBQXJFO1FBTEYsRUFERixlQVFFLHVEQUFDLDhDQUFEO1VBQU8sT0FBTyxFQUFFLENBQUMsQ0FBQ0gsTUFBTSxDQUFDWixJQUF6QjtVQUErQixLQUFLLEVBQUMsTUFBckM7VUFBQSx1QkFDRSx1REFBQyw4Q0FBRCxvQkFBV1UsUUFBUSxDQUFDLE1BQUQsQ0FBbkI7WUFBNkIsV0FBVyxFQUFDO1VBQXpDO1FBREYsRUFSRixlQVdFLHVEQUFDLDhDQUFEO1VBQU8sT0FBTyxFQUFFLENBQUMsQ0FBQ0UsTUFBTSxDQUFDVixJQUF6QjtVQUErQixLQUFLLEVBQUMsTUFBckM7VUFBQSx1QkFDRSx1REFBQyxxREFBRDtZQUNFLE1BQU0sRUFBRTtjQUFBLElBQUMsRUFBRDtjQUFBLElBQW9CYyxLQUFwQixzQ0FBR0EsS0FBSDs7Y0FBQSxvQkFBa0MsdURBQUMseURBQUQsb0JBQXNCQSxLQUF0QjtnQkFBNkIsT0FBTyxFQUFFdkI7Y0FBdEMsR0FBbEM7WUFBQSxDQURWO1lBRUUsT0FBTyxFQUFFa0IsT0FGWDtZQUdFLElBQUksRUFBQztVQUhQO1FBREYsRUFYRixlQWtCRSx1REFBQyw4Q0FBRDtVQUFPLEtBQUssRUFBQyxtQkFBYjtVQUFBLHVCQUNFLHVEQUFDLCtDQUFEO1lBQVEsRUFBRSxFQUFDO1VBQVgsR0FBbUNELFFBQVEsQ0FBQyxXQUFELENBQTNDO1FBREYsRUFsQkYsZUFxQkUsd0RBQUMsd0RBQUQ7VUFBQSw4Q0FDRSx1REFBQywrQ0FBRDtZQUFRLElBQUksRUFBQyxRQUFiO1lBQUE7VUFBQSxFQURGLGdCQUVFLHVEQUFDLG1EQUFEO1lBQVksSUFBSSxFQUFFaEMscUVBQUEsQ0FBMkJXLDBEQUFTLEdBQUc2QixTQUFaLEdBQXdCLFlBQW5ELENBQWxCO1lBQW9GLE9BQU8sRUFBQyxXQUE1RjtZQUFBO1VBQUEsRUFGRjtRQUFBLEVBckJGO01BQUEsRUFERjtJQThCRDtFQWhDSCxFQURGO0FBb0NELENBNUNNO0FBOENQLGlFQUFlZCxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBOzs7QUFNTyxNQUFNbUIsY0FBeUIsR0FBRyxDQUFDO0VBQUVDO0FBQUYsQ0FBRCxLQUFrQjtFQUN6RCxvQkFDRSx1REFBQyxxRUFBRDtJQUFNLFFBQVEsRUFBRUEsUUFBaEI7SUFBQSx1QkFDRSx3REFBQyw4RUFBRDtNQUFBLG9DQUNFO1FBQUksU0FBUyxFQUFDLGtCQUFkO1FBQUE7TUFBQSxFQURGLGdCQUVFO1FBQUssU0FBUyxFQUFDLE9BQWY7UUFBQSw2RkFFRTtVQUFNLFNBQVMsRUFBQyxnQkFBaEI7VUFBQSxnQkFBbUNILGtFQUFuQztRQUFBLEVBRkY7TUFBQSxFQUZGLHFEQU1FLHVEQUFDLHVEQUFELEtBTkY7SUFBQTtFQURGLEVBREY7QUFZRCxDQWJNOztBQWVQLE1BQU1NLGVBQWUsR0FBSUMsS0FBRCxLQUF3QjtFQUM5Q0osUUFBUSxFQUFFRix3RUFBVyxDQUFDTSxLQUFLLENBQUNDLFFBQVAsRUFBaUIsT0FBakI7QUFEeUIsQ0FBeEIsQ0FBeEI7O0FBSUEsaUVBQWVWLG9EQUFPLENBQUNRLGVBQUQsQ0FBUCxDQUF5QkosY0FBekIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL29yZy9Vc2VySW52aXRlRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvb3JnL1VzZXJJbnZpdGVQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBsb2NhdGlvblV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHtcbiAgSG9yaXpvbnRhbEdyb3VwLFxuICBCdXR0b24sXG4gIExpbmtCdXR0b24sXG4gIElucHV0LFxuICBTd2l0Y2gsXG4gIFJhZGlvQnV0dG9uR3JvdXAsXG4gIEZvcm0sXG4gIEZpZWxkLFxuICBJbnB1dENvbnRyb2wsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBPcmdSb2xlLCB1c2VEaXNwYXRjaCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGFkZEludml0ZWUgfSBmcm9tICcuLi9pbnZpdGVzL3N0YXRlL2FjdGlvbnMnO1xuXG5jb25zdCByb2xlcyA9IFtcbiAgeyBsYWJlbDogJ1ZpZXdlcicsIHZhbHVlOiBPcmdSb2xlLlZpZXdlciB9LFxuICB7IGxhYmVsOiAnRWRpdG9yJywgdmFsdWU6IE9yZ1JvbGUuRWRpdG9yIH0sXG4gIHsgbGFiZWw6ICdBZG1pbicsIHZhbHVlOiBPcmdSb2xlLkFkbWluIH0sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Nb2RlbCB7XG4gIHJvbGU6IE9yZ1JvbGU7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9naW5PckVtYWlsPzogc3RyaW5nO1xuICBzZW5kRW1haWw6IGJvb2xlYW47XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZXM6IEZvcm1Nb2RlbCA9IHtcbiAgbmFtZTogJycsXG4gIGVtYWlsOiAnJyxcbiAgcm9sZTogT3JnUm9sZS5FZGl0b3IsXG4gIHNlbmRFbWFpbDogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VySW52aXRlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGZvcm1EYXRhOiBGb3JtTW9kZWwpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChhZGRJbnZpdGVlKGZvcm1EYXRhKSkudW53cmFwKCk7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9vcmcvdXNlcnMvJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBkZWZhdWx0VmFsdWVzPXtkZWZhdWx0VmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgeyh7IHJlZ2lzdGVyLCBjb250cm9sLCBlcnJvcnMgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubG9naW5PckVtYWlsfVxuICAgICAgICAgICAgICBlcnJvcj17ISFlcnJvcnMubG9naW5PckVtYWlsID8gJ0VtYWlsIG9yIHVzZXJuYW1lIGlzIHJlcXVpcmVkJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBvciB1c2VybmFtZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ2xvZ2luT3JFbWFpbCcsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IHBsYWNlaG9sZGVyPVwiZW1haWxAZXhhbXBsZS5jb21cIiAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy5uYW1lfSBsYWJlbD1cIk5hbWVcIj5cbiAgICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignbmFtZScpfSBwbGFjZWhvbGRlcj1cIihvcHRpb25hbClcIiAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy5yb2xlfSBsYWJlbD1cIlJvbGVcIj5cbiAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IDxSYWRpb0J1dHRvbkdyb3VwIHsuLi5maWVsZH0gb3B0aW9ucz17cm9sZXN9IC8+fVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgbmFtZT1cInJvbGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlNlbmQgaW52aXRlIGVtYWlsXCI+XG4gICAgICAgICAgICAgIDxTd2l0Y2ggaWQ9XCJzZW5kLWVtYWlsLXN3aXRjaFwiIHsuLi5yZWdpc3Rlcignc2VuZEVtYWlsJyl9IC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e2xvY2F0aW9uVXRpbC5hc3N1cmVCYXNlVXJsKGdldENvbmZpZygpLmFwcFN1YlVybCArICcvb3JnL3VzZXJzJyl9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VySW52aXRlRm9ybTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW1wb3J0IFVzZXJJbnZpdGVGb3JtIGZyb20gJy4vVXNlckludml0ZUZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5cbmV4cG9ydCBjb25zdCBVc2VySW52aXRlUGFnZTogRkM8UHJvcHM+ID0gKHsgbmF2TW9kZWwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5JbnZpdGUgdXNlcjwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1iLTJcIj5cbiAgICAgICAgICBTZW5kIGludml0YXRpb24gb3IgYWRkIGV4aXN0aW5nIEdyYWZhbmEgdXNlciB0byB0aGUgb3JnYW5pemF0aW9uLlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodC13b3JkXCI+IHtjb250ZXh0U3J2LnVzZXIub3JnTmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VXNlckludml0ZUZvcm0gLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3VzZXJzJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFVzZXJJbnZpdGVQYWdlKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImxvY2F0aW9uVXRpbCIsImxvY2F0aW9uU2VydmljZSIsIkhvcml6b250YWxHcm91cCIsIkJ1dHRvbiIsIkxpbmtCdXR0b24iLCJJbnB1dCIsIlN3aXRjaCIsIlJhZGlvQnV0dG9uR3JvdXAiLCJGb3JtIiwiRmllbGQiLCJJbnB1dENvbnRyb2wiLCJnZXRDb25maWciLCJPcmdSb2xlIiwidXNlRGlzcGF0Y2giLCJhZGRJbnZpdGVlIiwicm9sZXMiLCJsYWJlbCIsInZhbHVlIiwiVmlld2VyIiwiRWRpdG9yIiwiQWRtaW4iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImVtYWlsIiwicm9sZSIsInNlbmRFbWFpbCIsIlVzZXJJbnZpdGVGb3JtIiwiZGlzcGF0Y2giLCJvblN1Ym1pdCIsImZvcm1EYXRhIiwidW53cmFwIiwicHVzaCIsInJlZ2lzdGVyIiwiY29udHJvbCIsImVycm9ycyIsImxvZ2luT3JFbWFpbCIsInVuZGVmaW5lZCIsInJlcXVpcmVkIiwiZmllbGQiLCJhc3N1cmVCYXNlVXJsIiwiYXBwU3ViVXJsIiwiY29ubmVjdCIsIlBhZ2UiLCJjb250ZXh0U3J2IiwiZ2V0TmF2TW9kZWwiLCJVc2VySW52aXRlUGFnZSIsIm5hdk1vZGVsIiwidXNlciIsIm9yZ05hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==