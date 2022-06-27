"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FeatureTogglePage"],{

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavModel": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/live/pages/FeatureTogglePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeatureTogglePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;






function FeatureTogglePage() {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_2__.useNavModel)('live-status');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        children: "Pipeline is not enabled"
      }), "To enable pipelines, enable the feature toggle:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("pre", {
        children: `[feature_toggles] 
enable = live-pipeline
`
      })]
    }))
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVhdHVyZVRvZ2dsZVBhZ2UuYjAxMWNjZDc4YWViMDM2MmQxOTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUVPLE1BQU1FLFdBQVcsR0FBSUMsRUFBRCxJQUEwQjtFQUNuRCxNQUFNQyxRQUFRLEdBQUdKLHdEQUFXLENBQUVLLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ0QsUUFBOUIsQ0FBNUI7RUFDQSxPQUFPSCxnRUFBVyxDQUFDRyxRQUFELEVBQVdELEVBQVgsQ0FBbEI7QUFDRCxDQUhNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BQO0FBRUE7QUFDQTs7O0FBRWUsU0FBU0ssaUJBQVQsR0FBNkI7RUFDMUMsTUFBTUMsUUFBUSxHQUFHUCx1RUFBVyxDQUFDLGFBQUQsQ0FBNUI7RUFFQSxvQkFDRSx1REFBQyxxRUFBRDtJQUFNLFFBQVEsRUFBRU8sUUFBaEI7SUFBQSwyREFDRSx3REFBQyw4RUFBRDtNQUFBLHdCQUNFO1FBQUE7TUFBQSxFQURGLGtFQUdFO1FBQUEsVUFDSTtBQUNaO0FBQ0E7TUFIUSxFQUhGO0lBQUEsRUFERjtFQUFBLEVBREY7QUFhRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGl2ZS9wYWdlcy9GZWF0dXJlVG9nZ2xlUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuXG5leHBvcnQgY29uc3QgdXNlTmF2TW9kZWwgPSAoaWQ6IHN0cmluZyk6IE5hdk1vZGVsID0+IHtcbiAgY29uc3QgbmF2SW5kZXggPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KTtcbiAgcmV0dXJuIGdldE5hdk1vZGVsKG5hdkluZGV4LCBpZCk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgdXNlTmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VOYXZNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVUb2dnbGVQYWdlKCkge1xuICBjb25zdCBuYXZNb2RlbCA9IHVzZU5hdk1vZGVsKCdsaXZlLXN0YXR1cycpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8aDE+UGlwZWxpbmUgaXMgbm90IGVuYWJsZWQ8L2gxPlxuICAgICAgICBUbyBlbmFibGUgcGlwZWxpbmVzLCBlbmFibGUgdGhlIGZlYXR1cmUgdG9nZ2xlOlxuICAgICAgICA8cHJlPlxuICAgICAgICAgIHtgW2ZlYXR1cmVfdG9nZ2xlc10gXG5lbmFibGUgPSBsaXZlLXBpcGVsaW5lXG5gfVxuICAgICAgICA8L3ByZT5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJnZXROYXZNb2RlbCIsInVzZU5hdk1vZGVsIiwiaWQiLCJuYXZJbmRleCIsInN0YXRlIiwiUmVhY3QiLCJQYWdlIiwiRmVhdHVyZVRvZ2dsZVBhZ2UiLCJuYXZNb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=