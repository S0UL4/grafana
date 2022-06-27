"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["CloudAdminPage"],{

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

/***/ "./public/app/features/live/pages/CloudAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudAdminPage)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function CloudAdminPage() {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_5__.useNavModel)('live-cloud');
  const [cloud, setCloud] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get(`api/live/write-configs`).then(data => {
      setCloud(data.writeConfigs);
    }).catch(e => {
      if (e.data) {
        setError(JSON.stringify(e.data, null, 2));
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
        children: error
      }), !cloud && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: "Loading cloud definitions"
      }), cloud && cloud.map(v => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            children: v.uid
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
            className: styles.row,
            children: JSON.stringify(v.settings, null, 2)
          })]
        }, v.uid);
      })]
    })
  });
}

const getStyles = theme => {
  return {
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      cursor: pointer;
    `
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRBZG1pblBhZ2UuZmNiN2QzNTFkODhkYWNjNjIzMWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUVPLE1BQU1FLFdBQVcsR0FBSUMsRUFBRCxJQUEwQjtFQUNuRCxNQUFNQyxRQUFRLEdBQUdKLHdEQUFXLENBQUVLLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ0QsUUFBOUIsQ0FBNUI7RUFDQSxPQUFPSCxnRUFBVyxDQUFDRyxRQUFELEVBQVdELEVBQVgsQ0FBbEI7QUFDRCxDQUhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJZSxTQUFTVSxjQUFULEdBQTBCO0VBQ3ZDLE1BQU1DLFFBQVEsR0FBR1osdUVBQVcsQ0FBQyxZQUFELENBQTVCO0VBQ0EsTUFBTSxDQUFDYSxLQUFELEVBQVFDLFFBQVIsSUFBb0JQLCtDQUFRLENBQXdCLEVBQXhCLENBQWxDO0VBQ0EsTUFBTSxDQUFDUSxLQUFELEVBQVFDLFFBQVIsSUFBb0JULCtDQUFRLEVBQWxDO0VBQ0EsTUFBTVUsTUFBTSxHQUFHUixzREFBUyxDQUFDUyxTQUFELENBQXhCO0VBRUFaLGdEQUFTLENBQUMsTUFBTTtJQUNkRSwrREFBYSxHQUNWVyxHQURILENBQ1Esd0JBRFIsRUFFR0MsSUFGSCxDQUVTQyxJQUFELElBQVU7TUFDZFAsUUFBUSxDQUFDTyxJQUFJLENBQUNDLFlBQU4sQ0FBUjtJQUNELENBSkgsRUFLR0MsS0FMSCxDQUtVQyxDQUFELElBQU87TUFDWixJQUFJQSxDQUFDLENBQUNILElBQU4sRUFBWTtRQUNWTCxRQUFRLENBQUNTLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixDQUFDLENBQUNILElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCLENBQUQsQ0FBUjtNQUNEO0lBQ0YsQ0FUSDtFQVVELENBWFEsRUFXTixFQVhNLENBQVQ7RUFhQSxvQkFDRSx1REFBQyxxRUFBRDtJQUFNLFFBQVEsRUFBRVQsUUFBaEI7SUFBQSx1QkFDRSx3REFBQyw4RUFBRDtNQUFBLFdBQ0dHLEtBQUssaUJBQUk7UUFBQSxVQUFNQTtNQUFOLEVBRFosRUFFRyxDQUFDRixLQUFELGlCQUFVO1FBQUE7TUFBQSxFQUZiLEVBR0dBLEtBQUssSUFDSkEsS0FBSyxDQUFDYyxHQUFOLENBQVdDLENBQUQsSUFBTztRQUNmLG9CQUNFO1VBQUEsd0JBQ0U7WUFBQSxVQUFLQSxDQUFDLENBQUNDO1VBQVAsRUFERixlQUVFO1lBQUssU0FBUyxFQUFFWixNQUFNLENBQUNhLEdBQXZCO1lBQUEsVUFBNkJMLElBQUksQ0FBQ0MsU0FBTCxDQUFlRSxDQUFDLENBQUNHLFFBQWpCLEVBQTJCLElBQTNCLEVBQWlDLENBQWpDO1VBQTdCLEVBRkY7UUFBQSxHQUFVSCxDQUFDLENBQUNDLEdBQVosQ0FERjtNQU1ELENBUEQsQ0FKSjtJQUFBO0VBREYsRUFERjtBQWlCRDs7QUFFRCxNQUFNWCxTQUFTLEdBQUljLEtBQUQsSUFBeUI7RUFDekMsT0FBTztJQUNMRixHQUFHLEVBQUUxQiw2Q0FBSTtBQUNiO0FBQ0E7RUFIUyxDQUFQO0FBS0QsQ0FORCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGl2ZS9wYWdlcy9DbG91ZEFkbWluUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuXG5leHBvcnQgY29uc3QgdXNlTmF2TW9kZWwgPSAoaWQ6IHN0cmluZyk6IE5hdk1vZGVsID0+IHtcbiAgY29uc3QgbmF2SW5kZXggPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KTtcbiAgcmV0dXJuIGdldE5hdk1vZGVsKG5hdkluZGV4LCBpZCk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IHVzZU5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwnO1xuXG5pbXBvcnQgeyBHcmFmYW5hQ2xvdWRCYWNrZW5kIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkQWRtaW5QYWdlKCkge1xuICBjb25zdCBuYXZNb2RlbCA9IHVzZU5hdk1vZGVsKCdsaXZlLWNsb3VkJyk7XG4gIGNvbnN0IFtjbG91ZCwgc2V0Q2xvdWRdID0gdXNlU3RhdGU8R3JhZmFuYUNsb3VkQmFja2VuZFtdPihbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmdldChgYXBpL2xpdmUvd3JpdGUtY29uZmlnc2ApXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDbG91ZChkYXRhLndyaXRlQ29uZmlncyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmRhdGEpIHtcbiAgICAgICAgICBzZXRFcnJvcihKU09OLnN0cmluZ2lmeShlLmRhdGEsIG51bGwsIDIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAge2Vycm9yICYmIDxwcmU+e2Vycm9yfTwvcHJlPn1cbiAgICAgICAgeyFjbG91ZCAmJiA8PkxvYWRpbmcgY2xvdWQgZGVmaW5pdGlvbnM8Lz59XG4gICAgICAgIHtjbG91ZCAmJlxuICAgICAgICAgIGNsb3VkLm1hcCgodikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3YudWlkfT5cbiAgICAgICAgICAgICAgICA8aDI+e3YudWlkfTwvaDI+XG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PntKU09OLnN0cmluZ2lmeSh2LnNldHRpbmdzLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3c6IGNzc2BcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsImdldE5hdk1vZGVsIiwidXNlTmF2TW9kZWwiLCJpZCIsIm5hdkluZGV4Iiwic3RhdGUiLCJjc3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QmFja2VuZFNydiIsInVzZVN0eWxlcyIsIlBhZ2UiLCJDbG91ZEFkbWluUGFnZSIsIm5hdk1vZGVsIiwiY2xvdWQiLCJzZXRDbG91ZCIsImVycm9yIiwic2V0RXJyb3IiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsIndyaXRlQ29uZmlncyIsImNhdGNoIiwiZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYXAiLCJ2IiwidWlkIiwicm93Iiwic2V0dGluZ3MiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=