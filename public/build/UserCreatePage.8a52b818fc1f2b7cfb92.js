"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserCreatePage"],{

/***/ "./public/app/features/admin/UserCreatePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Button;












const createUser = async user => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/admin/users', user);

const UserCreatePage = ({
  navModel
}) => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data => {
    await createUser(data);
    history.push('/admin/users');
  }, [history]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
        children: "Add new user"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
        onSubmit: onSubmit,
        validateOn: "onBlur",
        children: ({
          register,
          errors
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Name",
              required: true,
              invalid: !!errors.name,
              error: errors.name ? 'Name is required' : undefined,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
                id: "name-input"
              }, register('name', {
                required: true
              })))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Email",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
                id: "email-input"
              }, register('email')))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Username",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
                id: "username-input"
              }, register('login')))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Password",
              required: true,
              invalid: !!errors.password,
              error: errors.password ? 'Password is required and must contain at least 4 characters' : undefined,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
                id: "password-input"
              }, register('password', {
                validate: value => value.trim() !== '' && value.length >= 4
              }), {
                type: "password"
              }))
            }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              children: "Create user"
            }))]
          });
        }
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'global-users')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(UserCreatePage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNyZWF0ZVBhZ2UuOGE1MmI4MThmYzFmMmI3Y2ZiOTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFhQSxNQUFNVyxVQUFVLEdBQUcsTUFBT0MsSUFBUCxJQUF5QlIsK0RBQWEsR0FBR1MsSUFBaEIsQ0FBcUIsa0JBQXJCLEVBQXlDRCxJQUF6QyxDQUE1Qzs7QUFFQSxNQUFNRSxjQUE2QyxHQUFHLENBQUM7RUFBRUM7QUFBRixDQUFELEtBQWtCO0VBQ3RFLE1BQU1DLE9BQU8sR0FBR2IsNERBQVUsRUFBMUI7RUFFQSxNQUFNYyxRQUFRLEdBQUdoQixrREFBVyxDQUMxQixNQUFPaUIsSUFBUCxJQUF5QjtJQUN2QixNQUFNUCxVQUFVLENBQUNPLElBQUQsQ0FBaEI7SUFDQUYsT0FBTyxDQUFDRyxJQUFSLENBQWEsY0FBYjtFQUNELENBSnlCLEVBSzFCLENBQUNILE9BQUQsQ0FMMEIsQ0FBNUI7RUFRQSxvQkFDRSx1REFBQyxxRUFBRDtJQUFNLFFBQVEsRUFBRUQsUUFBaEI7SUFBQSx1QkFDRSx3REFBQyw4RUFBRDtNQUFBLG9DQUNFO1FBQUE7TUFBQSxFQURGLGdCQUVFLHVEQUFDLDZDQUFEO1FBQU0sUUFBUSxFQUFFRSxRQUFoQjtRQUEwQixVQUFVLEVBQUMsUUFBckM7UUFBQSxVQUNHLENBQUM7VUFBRUcsUUFBRjtVQUFZQztRQUFaLENBQUQsS0FBMEI7VUFDekIsb0JBQ0U7WUFBQSx3QkFDRSx1REFBQyw4Q0FBRDtjQUNFLEtBQUssRUFBQyxNQURSO2NBRUUsUUFBUSxNQUZWO2NBR0UsT0FBTyxFQUFFLENBQUMsQ0FBQ0EsTUFBTSxDQUFDQyxJQUhwQjtjQUlFLEtBQUssRUFBRUQsTUFBTSxDQUFDQyxJQUFQLEdBQWMsa0JBQWQsR0FBbUNDLFNBSjVDO2NBQUEsdUJBTUUsdURBQUMsOENBQUQ7Z0JBQU8sRUFBRSxFQUFDO2NBQVYsR0FBMkJILFFBQVEsQ0FBQyxNQUFELEVBQVM7Z0JBQUVJLFFBQVEsRUFBRTtjQUFaLENBQVQsQ0FBbkM7WUFORixFQURGLGVBVUUsdURBQUMsOENBQUQ7Y0FBTyxLQUFLLEVBQUMsT0FBYjtjQUFBLHVCQUNFLHVEQUFDLDhDQUFEO2dCQUFPLEVBQUUsRUFBQztjQUFWLEdBQTRCSixRQUFRLENBQUMsT0FBRCxDQUFwQztZQURGLEVBVkYsZUFjRSx1REFBQyw4Q0FBRDtjQUFPLEtBQUssRUFBQyxVQUFiO2NBQUEsdUJBQ0UsdURBQUMsOENBQUQ7Z0JBQU8sRUFBRSxFQUFDO2NBQVYsR0FBK0JBLFFBQVEsQ0FBQyxPQUFELENBQXZDO1lBREYsRUFkRixlQWlCRSx1REFBQyw4Q0FBRDtjQUNFLEtBQUssRUFBQyxVQURSO2NBRUUsUUFBUSxNQUZWO2NBR0UsT0FBTyxFQUFFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSSxRQUhwQjtjQUlFLEtBQUssRUFBRUosTUFBTSxDQUFDSSxRQUFQLEdBQWtCLDZEQUFsQixHQUFrRkYsU0FKM0Y7Y0FBQSx1QkFNRSx1REFBQyw4Q0FBRDtnQkFDRSxFQUFFLEVBQUM7Y0FETCxHQUVNSCxRQUFRLENBQUMsVUFBRCxFQUFhO2dCQUN2Qk0sUUFBUSxFQUFHQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixFQUFqQixJQUF1QkQsS0FBSyxDQUFDRSxNQUFOLElBQWdCO2NBRHJDLENBQWIsQ0FGZDtnQkFLRSxJQUFJLEVBQUM7Y0FMUDtZQU5GLEVBakJGLHFDQStCRSx1REFBQywrQ0FBRDtjQUFRLElBQUksRUFBQyxRQUFiO2NBQUE7WUFBQSxFQS9CRjtVQUFBLEVBREY7UUFtQ0Q7TUFyQ0gsRUFGRjtJQUFBO0VBREYsRUFERjtBQThDRCxDQXpERDs7QUEyREEsTUFBTUMsZUFBZSxHQUFJQyxLQUFELEtBQXdCO0VBQzlDaEIsUUFBUSxFQUFFTCxxRUFBVyxDQUFDcUIsS0FBSyxDQUFDQyxRQUFQLEVBQWlCLGNBQWpCO0FBRHlCLENBQXhCLENBQXhCOztBQUlBLGlFQUFlOUIsb0RBQU8sQ0FBQzRCLGVBQUQsQ0FBUCxDQUF5QmhCLGNBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9Vc2VyQ3JlYXRlUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuXG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBVc2VyQ3JlYXRlUGFnZVByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuaW50ZXJmYWNlIFVzZXJEVE8ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBsb2dpbj86IHN0cmluZztcbn1cblxuY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jICh1c2VyOiBVc2VyRFRPKSA9PiBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9hZG1pbi91c2VycycsIHVzZXIpO1xuXG5jb25zdCBVc2VyQ3JlYXRlUGFnZTogUmVhY3QuRkM8VXNlckNyZWF0ZVBhZ2VQcm9wcz4gPSAoeyBuYXZNb2RlbCB9KSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZGF0YTogVXNlckRUTykgPT4ge1xuICAgICAgYXdhaXQgY3JlYXRlVXNlcihkYXRhKTtcbiAgICAgIGhpc3RvcnkucHVzaCgnL2FkbWluL3VzZXJzJyk7XG4gICAgfSxcbiAgICBbaGlzdG9yeV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPGgxPkFkZCBuZXcgdXNlcjwvaDE+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gdmFsaWRhdGVPbj1cIm9uQmx1clwiPlxuICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWUgPyAnTmFtZSBpcyByZXF1aXJlZCcgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwibmFtZS1pbnB1dFwiIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJlbWFpbC1pbnB1dFwiIHsuLi5yZWdpc3RlcignZW1haWwnKX0gLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiVXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cInVzZXJuYW1lLWlucHV0XCIgey4uLnJlZ2lzdGVyKCdsb2dpbicpfSAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMucGFzc3dvcmQgPyAnUGFzc3dvcmQgaXMgcmVxdWlyZWQgYW5kIG11c3QgY29udGFpbiBhdCBsZWFzdCA0IGNoYXJhY3RlcnMnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdwYXNzd29yZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09ICcnICYmIHZhbHVlLmxlbmd0aCA+PSA0LFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgdXNlcjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnZ2xvYmFsLXVzZXJzJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFVzZXJDcmVhdGVQYWdlKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwiY29ubmVjdCIsInVzZUhpc3RvcnkiLCJnZXRCYWNrZW5kU3J2IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiRmllbGQiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJjcmVhdGVVc2VyIiwidXNlciIsInBvc3QiLCJVc2VyQ3JlYXRlUGFnZSIsIm5hdk1vZGVsIiwiaGlzdG9yeSIsIm9uU3VibWl0IiwiZGF0YSIsInB1c2giLCJyZWdpc3RlciIsImVycm9ycyIsIm5hbWUiLCJ1bmRlZmluZWQiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwidmFsaWRhdGUiLCJ2YWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==