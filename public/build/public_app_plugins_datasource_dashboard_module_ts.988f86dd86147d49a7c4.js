"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_plugins_datasource_dashboard_module_ts"],{

/***/ "./public/app/plugins/datasource/dashboard/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardDatasource": () => (/* binding */ DashboardDatasource)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");


/**
 * This should not really be called
 */
class DashboardDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
  }

  getCollapsedText(query) {
    return `Dashboard Reference: ${query.panelId}`;
  }

  query(options) {
    return Promise.reject('This should not be called directly');
  }

  testDatasource() {
    return Promise.resolve({});
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/dashboard/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/dashboard/datasource.ts");


const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_1__.DashboardDatasource);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9wbHVnaW5zX2RhdGFzb3VyY2VfZGFzaGJvYXJkX21vZHVsZV90cy45ODhmODZkZDg2MTQ3ZDQ5YTdjNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUlBO0FBQ0E7QUFDQTtBQUNPLE1BQU1DLG1CQUFOLFNBQWtDRCx3REFBbEMsQ0FBZ0U7RUFDckVFLFdBQVcsQ0FBQ0MsZ0JBQUQsRUFBK0M7SUFDeEQsTUFBTUEsZ0JBQU47RUFDRDs7RUFFREMsZ0JBQWdCLENBQUNDLEtBQUQsRUFBd0I7SUFDdEMsT0FBUSx3QkFBdUJBLEtBQUssQ0FBQ0MsT0FBUSxFQUE3QztFQUNEOztFQUVERCxLQUFLLENBQUNFLE9BQUQsRUFBd0U7SUFDM0UsT0FBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWUsb0NBQWYsQ0FBUDtFQUNEOztFQUVEQyxjQUFjLEdBQUc7SUFDZixPQUFPRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FBUDtFQUNEOztBQWZvRTs7Ozs7Ozs7Ozs7OztBQ1B2RTtBQUVBO0FBRU8sTUFBTUUsTUFBTSxHQUFHLElBQUlELDJEQUFKLENBQXFCWCw0REFBckIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9kYXNoYm9hcmQvZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZGFzaGJvYXJkL21vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlQXBpLCBEYXRhUXVlcnlSZXF1ZXN0LCBEYXRhUXVlcnlSZXNwb25zZSwgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBUaGlzIHNob3VsZCBub3QgcmVhbGx5IGJlIGNhbGxlZFxuICovXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkRGF0YXNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VBcGk8RGFzaGJvYXJkUXVlcnk+IHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgfVxuXG4gIGdldENvbGxhcHNlZFRleHQocXVlcnk6IERhc2hib2FyZFF1ZXJ5KSB7XG4gICAgcmV0dXJuIGBEYXNoYm9hcmQgUmVmZXJlbmNlOiAke3F1ZXJ5LnBhbmVsSWR9YDtcbiAgfVxuXG4gIHF1ZXJ5KG9wdGlvbnM6IERhdGFRdWVyeVJlcXVlc3Q8RGFzaGJvYXJkUXVlcnk+KTogUHJvbWlzZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnVGhpcyBzaG91bGQgbm90IGJlIGNhbGxlZCBkaXJlY3RseScpO1xuICB9XG5cbiAgdGVzdERhdGFzb3VyY2UoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbihEYXNoYm9hcmREYXRhc291cmNlKTtcbiJdLCJuYW1lcyI6WyJEYXRhU291cmNlQXBpIiwiRGFzaGJvYXJkRGF0YXNvdXJjZSIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2VTZXR0aW5ncyIsImdldENvbGxhcHNlZFRleHQiLCJxdWVyeSIsInBhbmVsSWQiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlamVjdCIsInRlc3REYXRhc291cmNlIiwicmVzb2x2ZSIsIkRhdGFTb3VyY2VQbHVnaW4iLCJwbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9