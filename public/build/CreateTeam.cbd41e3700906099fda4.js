"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["CreateTeam"],{

/***/ "./public/app/features/teams/CreateTeam.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTeam": () => (/* binding */ CreateTeam),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class CreateTeam extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "create", async formModel => {
      const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/teams', formModel);

      if (result.teamId) {
        await app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.fetchUserPermissions();
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push(`/org/teams/edit/${result.teamId}`);
      }
    });
  }

  render() {
    const {
      navModel
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
          onSubmit: this.create,
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, {
            label: "New Team",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Name",
              required: true,
              invalid: !!errors.name,
              error: "Team name is required",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register('name', {
                required: true
              }), {
                id: "team-name",
                width: 60
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: 'Email',
              description: 'This is optional and is primarily used for allowing custom team avatars.',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register('email'), {
                type: "email",
                id: "team-email",
                placeholder: "email@test.com",
                width: 60
              }))
            }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "gf-form-button-row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "submit",
                variant: "primary",
                children: "Create"
              })
            }))]
          })
        })
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'teams')
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(CreateTeam));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlVGVhbS5jYmQ0MWUzNzAwOTA2MDk5ZmRhNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFZTyxNQUFNYSxVQUFOLFNBQXlCWixnREFBekIsQ0FBOEM7RUFBQTtJQUFBOztJQUFBLGdDQUMxQyxNQUFPYSxTQUFQLElBQThCO01BQ3JDLE1BQU1DLE1BQU0sR0FBRyxNQUFNWiwrREFBYSxHQUFHYSxJQUFoQixDQUFxQixZQUFyQixFQUFtQ0YsU0FBbkMsQ0FBckI7O01BQ0EsSUFBSUMsTUFBTSxDQUFDRSxNQUFYLEVBQW1CO1FBQ2pCLE1BQU1OLDBFQUFBLEVBQU47UUFDQVAsa0VBQUEsQ0FBc0IsbUJBQWtCVyxNQUFNLENBQUNFLE1BQU8sRUFBdEQ7TUFDRDtJQUNGLENBUGtEO0VBQUE7O0VBUW5ERyxNQUFNLEdBQUc7SUFDUCxNQUFNO01BQUVDO0lBQUYsSUFBZSxLQUFLQyxLQUExQjtJQUVBLG9CQUNFLHVEQUFDLHFFQUFEO01BQU0sUUFBUSxFQUFFRCxRQUFoQjtNQUFBLHVCQUNFLHVEQUFDLDhFQUFEO1FBQUEsdUJBQ0UsdURBQUMsNkNBQUQ7VUFBTSxRQUFRLEVBQUUsS0FBS0UsTUFBckI7VUFBQSxVQUNHLENBQUM7WUFBRUMsUUFBRjtZQUFZQztVQUFaLENBQUQsa0JBQ0Msd0RBQUMsaURBQUQ7WUFBVSxLQUFLLEVBQUMsVUFBaEI7WUFBQSx3QkFDRSx1REFBQyw4Q0FBRDtjQUFPLEtBQUssRUFBQyxNQUFiO2NBQW9CLFFBQVEsTUFBNUI7Y0FBNkIsT0FBTyxFQUFFLENBQUMsQ0FBQ0EsTUFBTSxDQUFDQyxJQUEvQztjQUFxRCxLQUFLLEVBQUMsdUJBQTNEO2NBQUEsdUJBQ0UsdURBQUMsOENBQUQsb0JBQVdGLFFBQVEsQ0FBQyxNQUFELEVBQVM7Z0JBQUVHLFFBQVEsRUFBRTtjQUFaLENBQVQsQ0FBbkI7Z0JBQWlELEVBQUUsRUFBQyxXQUFwRDtnQkFBZ0UsS0FBSyxFQUFFO2NBQXZFO1lBREYsRUFERixlQUlFLHVEQUFDLDhDQUFEO2NBQ0UsS0FBSyxFQUFFLE9BRFQ7Y0FFRSxXQUFXLEVBQUUsMEVBRmY7Y0FBQSx1QkFJRSx1REFBQyw4Q0FBRCxvQkFBV0gsUUFBUSxDQUFDLE9BQUQsQ0FBbkI7Z0JBQThCLElBQUksRUFBQyxPQUFuQztnQkFBMkMsRUFBRSxFQUFDLFlBQTlDO2dCQUEyRCxXQUFXLEVBQUMsZ0JBQXZFO2dCQUF3RixLQUFLLEVBQUU7Y0FBL0Y7WUFKRixFQUpGLCtCQVVFO2NBQUssU0FBUyxFQUFDLG9CQUFmO2NBQUEsdUJBQ0UsdURBQUMsK0NBQUQ7Z0JBQVEsSUFBSSxFQUFDLFFBQWI7Z0JBQXNCLE9BQU8sRUFBQyxTQUE5QjtnQkFBQTtjQUFBO1lBREYsRUFWRjtVQUFBO1FBRko7TUFERjtJQURGLEVBREY7RUEwQkQ7O0FBckNrRDs7QUF3Q3JELFNBQVNJLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQTRDO0VBQzFDLE9BQU87SUFDTFIsUUFBUSxFQUFFVCx3RUFBVyxDQUFDaUIsS0FBSyxDQUFDQyxRQUFQLEVBQWlCLE9BQWpCO0VBRGhCLENBQVA7QUFHRDs7QUFFRCxpRUFBZTVCLG9EQUFPLENBQUMwQixlQUFELENBQVAsQ0FBeUJmLFVBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9DcmVhdGVUZWFtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2LCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRmllbGQsIElucHV0LCBGaWVsZFNldCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5pbnRlcmZhY2UgVGVhbURUTyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZVRlYW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNyZWF0ZSA9IGFzeW5jIChmb3JtTW9kZWw6IFRlYW1EVE8pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS90ZWFtcycsIGZvcm1Nb2RlbCk7XG4gICAgaWYgKHJlc3VsdC50ZWFtSWQpIHtcbiAgICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKGAvb3JnL3RlYW1zL2VkaXQvJHtyZXN1bHQudGVhbUlkfWApO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuY3JlYXRlfT5cbiAgICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgICAgPEZpZWxkU2V0IGxhYmVsPVwiTmV3IFRlYW1cIj5cbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJOYW1lXCIgcmVxdWlyZWQgaW52YWxpZD17ISFlcnJvcnMubmFtZX0gZXJyb3I9XCJUZWFtIG5hbWUgaXMgcmVxdWlyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBpZD1cInRlYW0tbmFtZVwiIHdpZHRoPXs2MH0gLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9eydFbWFpbCd9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17J1RoaXMgaXMgb3B0aW9uYWwgYW5kIGlzIHByaW1hcmlseSB1c2VkIGZvciBhbGxvd2luZyBjdXN0b20gdGVhbSBhdmF0YXJzLid9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignZW1haWwnKX0gdHlwZT1cImVtYWlsXCIgaWQ9XCJ0ZWFtLWVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbEB0ZXN0LmNvbVwiIHdpZHRoPXs2MH0gLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0ZpZWxkU2V0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3RlYW1zJyksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDcmVhdGVUZWFtKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwiZ2V0QmFja2VuZFNydiIsImxvY2F0aW9uU2VydmljZSIsIkJ1dHRvbiIsIkZvcm0iLCJGaWVsZCIsIklucHV0IiwiRmllbGRTZXQiLCJQYWdlIiwiY29udGV4dFNydiIsImdldE5hdk1vZGVsIiwiQ3JlYXRlVGVhbSIsImZvcm1Nb2RlbCIsInJlc3VsdCIsInBvc3QiLCJ0ZWFtSWQiLCJmZXRjaFVzZXJQZXJtaXNzaW9ucyIsInB1c2giLCJyZW5kZXIiLCJuYXZNb2RlbCIsInByb3BzIiwiY3JlYXRlIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJuYW1lIiwicmVxdWlyZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==