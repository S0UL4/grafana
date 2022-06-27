"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingFeatureTogglePage"],{

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

/***/ "./public/app/features/alerting/FeatureTogglePage.tsx":
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
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_2__.useNavModel)('alert-list');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        children: "Alerting is not enabled"
      }), "To enable alerting, enable it in the Grafana config:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("pre", {
          children: `[unified_alerting]
enable = true
`
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: ["For legacy alerting", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("pre", {
          children: `[alerting]
enable = true
`
        })]
      })]
    }))
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRpbmdGZWF0dXJlVG9nZ2xlUGFnZS42NjVlZjk3YmY4YWIzMjg2MmZkNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUtBO0FBRU8sTUFBTUUsV0FBVyxHQUFJQyxFQUFELElBQTBCO0VBQ25ELE1BQU1DLFFBQVEsR0FBR0osd0RBQVcsQ0FBRUssS0FBRCxJQUF1QkEsS0FBSyxDQUFDRCxRQUE5QixDQUE1QjtFQUNBLE9BQU9ILGdFQUFXLENBQUNHLFFBQUQsRUFBV0QsRUFBWCxDQUFsQjtBQUNELENBSE07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFFQTtBQUNBOzs7QUFFZSxTQUFTSyxpQkFBVCxHQUE2QjtFQUMxQyxNQUFNQyxRQUFRLEdBQUdQLHVFQUFXLENBQUMsWUFBRCxDQUE1QjtFQUVBLG9CQUNFLHVEQUFDLHFFQUFEO0lBQU0sUUFBUSxFQUFFTyxRQUFoQjtJQUFBLDJEQUNFLHdEQUFDLDhFQUFEO01BQUEsd0JBQ0U7UUFBQTtNQUFBLEVBREYsdUVBR0U7UUFBQSx1QkFDRTtVQUFBLFVBQ0k7QUFDZDtBQUNBO1FBSFU7TUFERixFQUhGLGVBVUU7UUFBQSwrQ0FFRTtVQUFBLFVBQ0k7QUFDZDtBQUNBO1FBSFUsRUFGRjtNQUFBLEVBVkY7SUFBQSxFQURGO0VBQUEsRUFERjtBQXVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvRmVhdHVyZVRvZ2dsZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vc2VsZWN0b3JzL25hdk1vZGVsJztcblxuZXhwb3J0IGNvbnN0IHVzZU5hdk1vZGVsID0gKGlkOiBzdHJpbmcpOiBOYXZNb2RlbCA9PiB7XG4gIGNvbnN0IG5hdkluZGV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCk7XG4gIHJldHVybiBnZXROYXZNb2RlbChuYXZJbmRleCwgaWQpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IHVzZU5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlVG9nZ2xlUGFnZSgpIHtcbiAgY29uc3QgbmF2TW9kZWwgPSB1c2VOYXZNb2RlbCgnYWxlcnQtbGlzdCcpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8aDE+QWxlcnRpbmcgaXMgbm90IGVuYWJsZWQ8L2gxPlxuICAgICAgICBUbyBlbmFibGUgYWxlcnRpbmcsIGVuYWJsZSBpdCBpbiB0aGUgR3JhZmFuYSBjb25maWc6XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHByZT5cbiAgICAgICAgICAgIHtgW3VuaWZpZWRfYWxlcnRpbmddXG5lbmFibGUgPSB0cnVlXG5gfVxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBGb3IgbGVnYWN5IGFsZXJ0aW5nXG4gICAgICAgICAgPHByZT5cbiAgICAgICAgICAgIHtgW2FsZXJ0aW5nXVxuZW5hYmxlID0gdHJ1ZVxuYH1cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwiZ2V0TmF2TW9kZWwiLCJ1c2VOYXZNb2RlbCIsImlkIiwibmF2SW5kZXgiLCJzdGF0ZSIsIlJlYWN0IiwiUGFnZSIsIkZlYXR1cmVUb2dnbGVQYWdlIiwibmF2TW9kZWwiXSwic291cmNlUm9vdCI6IiJ9