"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AdminSettings"],{

/***/ "./public/app/features/admin/AdminSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;










function AdminSettings({
  navModel
}) {
  const {
    loading,
    value: settings
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_6__["default"])(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get('/api/admin/settings'), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "grafana-info-box span8",
        style: {
          margin: '20px 0 25px 0'
        },
        children: "These system settings are defined in grafana.ini or custom.ini (or overridden in ENV variables). To change these you currently need to restart Grafana."
      }), settings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("table", {
        className: "filter-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
          children: Object.entries(settings).map(([sectionName, sectionSettings], i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                className: "admin-settings-section",
                children: sectionName
              }), _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {}))]
            }), Object.entries(sectionSettings).map(([settingName, settingValue], j) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                style: {
                  paddingLeft: '25px'
                },
                children: settingName
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                style: {
                  whiteSpace: 'break-spaces'
                },
                children: settingValue
              })]
            }, `property-${j}`))]
          }, `section-${i}`))
        })
      })]
    })
  });
}

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, 'server-settings')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(AdminSettings));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5TZXR0aW5ncy5jYWRkZTExMTFiMGFlYWU5MzY4NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7O0FBU0EsU0FBU00sYUFBVCxDQUF1QjtFQUFFQztBQUFGLENBQXZCLEVBQTRDO0VBQzFDLE1BQU07SUFBRUMsT0FBRjtJQUFXQyxLQUFLLEVBQUVDO0VBQWxCLElBQStCUixxREFBUSxDQUMzQyxNQUFNQywrREFBYSxHQUFHUSxHQUFoQixDQUFvQixxQkFBcEIsQ0FEcUMsRUFFM0MsRUFGMkMsQ0FBN0M7RUFLQSxvQkFDRSx1REFBQyxxRUFBRDtJQUFNLFFBQVEsRUFBRUosUUFBaEI7SUFBQSx1QkFDRSx3REFBQyw4RUFBRDtNQUFlLFNBQVMsRUFBRUMsT0FBMUI7TUFBQSx3QkFDRTtRQUFLLFNBQVMsRUFBQyx3QkFBZjtRQUF3QyxLQUFLLEVBQUU7VUFBRUksTUFBTSxFQUFFO1FBQVYsQ0FBL0M7UUFBQTtNQUFBLEVBREYsRUFNR0YsUUFBUSxpQkFDUDtRQUFPLFNBQVMsRUFBQyxjQUFqQjtRQUFBLHVCQUNFO1VBQUEsVUFDR0csTUFBTSxDQUFDQyxPQUFQLENBQWVKLFFBQWYsRUFBeUJLLEdBQXpCLENBQTZCLENBQUMsQ0FBQ0MsV0FBRCxFQUFjQyxlQUFkLENBQUQsRUFBaUNDLENBQWpDLGtCQUM1Qix3REFBQywyQ0FBRDtZQUFBLHdCQUNFO2NBQUEsd0JBQ0U7Z0JBQUksU0FBUyxFQUFDLHdCQUFkO2dCQUFBLFVBQXdDRjtjQUF4QyxFQURGLDZCQUVFLGdFQUZGO1lBQUEsRUFERixFQUtHSCxNQUFNLENBQUNDLE9BQVAsQ0FBZUcsZUFBZixFQUFnQ0YsR0FBaEMsQ0FBb0MsQ0FBQyxDQUFDSSxXQUFELEVBQWNDLFlBQWQsQ0FBRCxFQUE4QkMsQ0FBOUIsa0JBQ25DO2NBQUEsd0JBQ0U7Z0JBQUksS0FBSyxFQUFFO2tCQUFFQyxXQUFXLEVBQUU7Z0JBQWYsQ0FBWDtnQkFBQSxVQUFxQ0g7Y0FBckMsRUFERixlQUVFO2dCQUFJLEtBQUssRUFBRTtrQkFBRUksVUFBVSxFQUFFO2dCQUFkLENBQVg7Z0JBQUEsVUFBNENIO2NBQTVDLEVBRkY7WUFBQSxHQUFVLFlBQVdDLENBQUUsRUFBdkIsQ0FERCxDQUxIO1VBQUEsR0FBc0IsV0FBVUgsQ0FBRSxFQUFsQyxDQUREO1FBREg7TUFERixFQVBKO0lBQUE7RUFERixFQURGO0FBK0JEOztBQUVELE1BQU1NLGVBQWUsR0FBSUMsS0FBRCxLQUF3QjtFQUM5Q2xCLFFBQVEsRUFBRUYsd0VBQVcsQ0FBQ29CLEtBQUssQ0FBQ0MsUUFBUCxFQUFpQixpQkFBakI7QUFEeUIsQ0FBeEIsQ0FBeEI7O0FBSUEsaUVBQWV6QixvREFBTyxDQUFDdUIsZUFBRCxDQUFQLENBQXlCbEIsYUFBekIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0FkbWluU2V0dGluZ3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbnR5cGUgU2V0dGluZ3MgPSB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5mdW5jdGlvbiBBZG1pblNldHRpbmdzKHsgbmF2TW9kZWwgfTogUHJvcHMpIHtcbiAgY29uc3QgeyBsb2FkaW5nLCB2YWx1ZTogc2V0dGluZ3MgfSA9IHVzZUFzeW5jKFxuICAgICgpID0+IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvYWRtaW4vc2V0dGluZ3MnKSBhcyBQcm9taXNlPFNldHRpbmdzPixcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZmFuYS1pbmZvLWJveCBzcGFuOFwiIHN0eWxlPXt7IG1hcmdpbjogJzIwcHggMCAyNXB4IDAnIH19PlxuICAgICAgICAgIFRoZXNlIHN5c3RlbSBzZXR0aW5ncyBhcmUgZGVmaW5lZCBpbiBncmFmYW5hLmluaSBvciBjdXN0b20uaW5pIChvciBvdmVycmlkZGVuIGluIEVOViB2YXJpYWJsZXMpLiBUbyBjaGFuZ2VcbiAgICAgICAgICB0aGVzZSB5b3UgY3VycmVudGx5IG5lZWQgdG8gcmVzdGFydCBHcmFmYW5hLlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7c2V0dGluZ3MgJiYgKFxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVcIj5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHNldHRpbmdzKS5tYXAoKFtzZWN0aW9uTmFtZSwgc2VjdGlvblNldHRpbmdzXSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2BzZWN0aW9uLSR7aX1gfT5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFkbWluLXNldHRpbmdzLXNlY3Rpb25cIj57c2VjdGlvbk5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIC8+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHNlY3Rpb25TZXR0aW5ncykubWFwKChbc2V0dGluZ05hbWUsIHNldHRpbmdWYWx1ZV0sIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YHByb3BlcnR5LSR7an1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcyNXB4JyB9fT57c2V0dGluZ05hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ2JyZWFrLXNwYWNlcycgfX0+e3NldHRpbmdWYWx1ZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICl9XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3NlcnZlci1zZXR0aW5ncycpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShBZG1pblNldHRpbmdzKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJ1c2VBc3luYyIsImdldEJhY2tlbmRTcnYiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJBZG1pblNldHRpbmdzIiwibmF2TW9kZWwiLCJsb2FkaW5nIiwidmFsdWUiLCJzZXR0aW5ncyIsImdldCIsIm1hcmdpbiIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJzZWN0aW9uTmFtZSIsInNlY3Rpb25TZXR0aW5ncyIsImkiLCJzZXR0aW5nTmFtZSIsInNldHRpbmdWYWx1ZSIsImoiLCJwYWRkaW5nTGVmdCIsIndoaXRlU3BhY2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==