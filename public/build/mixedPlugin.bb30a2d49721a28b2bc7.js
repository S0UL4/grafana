"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["mixedPlugin"],{

/***/ "./public/app/plugins/datasource/mixed/MixedDataSource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MIXED_DATASOURCE_NAME": () => (/* binding */ MIXED_DATASOURCE_NAME),
/* harmony export */   "MixedDatasource": () => (/* binding */ MixedDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/toArray.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/reduce.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");





const MIXED_DATASOURCE_NAME = '-- Mixed --';
class MixedDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
  }

  query(request) {
    // Remove any invalid queries
    const queries = request.targets.filter(t => {
      var _t$datasource;

      return ((_t$datasource = t.datasource) === null || _t$datasource === void 0 ? void 0 : _t$datasource.uid) !== MIXED_DATASOURCE_NAME;
    });

    if (!queries.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        data: []
      }); // nothing
    } // Build groups of queries to run in parallel


    const sets = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(queries, 'datasource.uid');
    const mixed = [];

    for (const key in sets) {
      const targets = sets[key];
      mixed.push({
        datasource: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().get(targets[0].datasource, request.scopedVars),
        targets
      });
    } // Missing UIDs?


    if (!mixed.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        data: []
      }); // nothing
    }

    return this.batchQueries(mixed, request);
  }

  batchQueries(mixed, request) {
    const runningQueries = mixed.filter(this.isQueryable).map((query, i) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(query.datasource).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(api => {
      const dsRequest = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(request);
      dsRequest.requestId = `mixed-${i}-${dsRequest.requestId || ''}`;
      dsRequest.targets = query.targets;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(api.query(dsRequest)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
        return Object.assign({}, response, {
          data: response.data || [],
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading,
          key: `mixed-${i}-${response.key || ''}`
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.toArray)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => {
        err = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.toDataQueryError)(err);
        err.message = `${api.name}: ${err.message}`;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
          data: [],
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Error,
          error: err,
          key: `mixed-${i}-${dsRequest.requestId || ''}`
        }]);
      }));
    })));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)(runningQueries).pipe(flattenResponses(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(this.finalizeResponses), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeAll)());
  }

  testDatasource() {
    return Promise.resolve({});
  }

  isQueryable(query) {
    return query && Array.isArray(query.targets) && query.targets.length > 0;
  }

  finalizeResponses(responses) {
    const {
      length
    } = responses;

    if (length === 0) {
      return responses;
    }

    const error = responses.find(response => response.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Error);

    if (error) {
      responses.push(error); // adds the first found error entry so error shows up in the panel
    } else {
      responses[length - 1].state = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done;
    }

    return responses;
  }

}

function flattenResponses() {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.reduce)((all, current) => {
    return current.reduce((innerAll, innerCurrent) => {
      innerAll.push.apply(innerAll, innerCurrent);
      return innerAll;
    }, all);
  }, []);
}

/***/ }),

/***/ "./public/app/plugins/datasource/mixed/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Datasource": () => (/* reexport safe */ _MixedDataSource__WEBPACK_IMPORTED_MODULE_0__.MixedDatasource),
/* harmony export */   "MixedDatasource": () => (/* reexport safe */ _MixedDataSource__WEBPACK_IMPORTED_MODULE_0__.MixedDatasource)
/* harmony export */ });
/* harmony import */ var _MixedDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/mixed/MixedDataSource.ts");



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyw2REFBaEQsQ0FBZDs7SUFDQSxJQUFJc0MsS0FBSixFQUFXO01BQ1RRLFNBQVMsQ0FBQzFCLElBQVYsQ0FBZWtCLEtBQWYsRUFEUyxDQUNjO0lBQ3hCLENBRkQsTUFFTztNQUNMUSxTQUFTLENBQUMvQixNQUFNLEdBQUcsQ0FBVixDQUFULENBQXNCaUIsS0FBdEIsR0FBOEJoQyw0REFBOUI7SUFDRDs7SUFFRCxPQUFPOEMsU0FBUDtFQUNEOztBQWxHMkQ7O0FBcUc5RCxTQUFTUCxnQkFBVCxHQUEwRjtFQUN4RixPQUFPMUMsdURBQU0sQ0FBQyxDQUFDb0QsR0FBRCxFQUEyQkMsT0FBM0IsS0FBdUM7SUFDbkQsT0FBT0EsT0FBTyxDQUFDckQsTUFBUixDQUFlLENBQUNzRCxRQUFELEVBQVdDLFlBQVgsS0FBNEI7TUFDaERELFFBQVEsQ0FBQy9CLElBQVQsQ0FBY2lDLEtBQWQsQ0FBb0JGLFFBQXBCLEVBQThCQyxZQUE5QjtNQUNBLE9BQU9ELFFBQVA7SUFDRCxDQUhNLEVBR0pGLEdBSEksQ0FBUDtFQUlELENBTFksRUFLVixFQUxVLENBQWI7QUFNRDs7Ozs7Ozs7Ozs7OztBQ2pJRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9taXhlZC9NaXhlZERhdGFTb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL21peGVkL21vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZURlZXAsIGdyb3VwQnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZm9ya0pvaW4sIGZyb20sIE9ic2VydmFibGUsIG9mLCBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlQWxsLCBtZXJnZU1hcCwgcmVkdWNlLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnksXG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlQXBpLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgTG9hZGluZ1N0YXRlLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2VTcnYsIHRvRGF0YVF1ZXJ5RXJyb3IgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGNvbnN0IE1JWEVEX0RBVEFTT1VSQ0VfTkFNRSA9ICctLSBNaXhlZCAtLSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmF0Y2hlZFF1ZXJpZXMge1xuICBkYXRhc291cmNlOiBQcm9taXNlPERhdGFTb3VyY2VBcGk+O1xuICB0YXJnZXRzOiBEYXRhUXVlcnlbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE1peGVkRGF0YXNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VBcGk8RGF0YVF1ZXJ5PiB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gIH1cblxuICBxdWVyeShyZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PERhdGFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgLy8gUmVtb3ZlIGFueSBpbnZhbGlkIHF1ZXJpZXNcbiAgICBjb25zdCBxdWVyaWVzID0gcmVxdWVzdC50YXJnZXRzLmZpbHRlcigodCkgPT4ge1xuICAgICAgcmV0dXJuIHQuZGF0YXNvdXJjZT8udWlkICE9PSBNSVhFRF9EQVRBU09VUkNFX05BTUU7XG4gICAgfSk7XG5cbiAgICBpZiAoIXF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gb2YoeyBkYXRhOiBbXSB9IGFzIERhdGFRdWVyeVJlc3BvbnNlKTsgLy8gbm90aGluZ1xuICAgIH1cblxuICAgIC8vIEJ1aWxkIGdyb3VwcyBvZiBxdWVyaWVzIHRvIHJ1biBpbiBwYXJhbGxlbFxuICAgIGNvbnN0IHNldHM6IHsgW2tleTogc3RyaW5nXTogRGF0YVF1ZXJ5W10gfSA9IGdyb3VwQnkocXVlcmllcywgJ2RhdGFzb3VyY2UudWlkJyk7XG4gICAgY29uc3QgbWl4ZWQ6IEJhdGNoZWRRdWVyaWVzW10gPSBbXTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHNldHMpIHtcbiAgICAgIGNvbnN0IHRhcmdldHMgPSBzZXRzW2tleV07XG5cbiAgICAgIG1peGVkLnB1c2goe1xuICAgICAgICBkYXRhc291cmNlOiBnZXREYXRhU291cmNlU3J2KCkuZ2V0KHRhcmdldHNbMF0uZGF0YXNvdXJjZSwgcmVxdWVzdC5zY29wZWRWYXJzKSxcbiAgICAgICAgdGFyZ2V0cyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1pc3NpbmcgVUlEcz9cbiAgICBpZiAoIW1peGVkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9mKHsgZGF0YTogW10gfSBhcyBEYXRhUXVlcnlSZXNwb25zZSk7IC8vIG5vdGhpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5iYXRjaFF1ZXJpZXMobWl4ZWQsIHJlcXVlc3QpO1xuICB9XG5cbiAgYmF0Y2hRdWVyaWVzKG1peGVkOiBCYXRjaGVkUXVlcmllc1tdLCByZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PERhdGFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgcnVubmluZ1F1ZXJpZXMgPSBtaXhlZC5maWx0ZXIodGhpcy5pc1F1ZXJ5YWJsZSkubWFwKChxdWVyeSwgaSkgPT5cbiAgICAgIGZyb20ocXVlcnkuZGF0YXNvdXJjZSkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoKGFwaTogRGF0YVNvdXJjZUFwaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRzUmVxdWVzdCA9IGNsb25lRGVlcChyZXF1ZXN0KTtcbiAgICAgICAgICBkc1JlcXVlc3QucmVxdWVzdElkID0gYG1peGVkLSR7aX0tJHtkc1JlcXVlc3QucmVxdWVzdElkIHx8ICcnfWA7XG4gICAgICAgICAgZHNSZXF1ZXN0LnRhcmdldHMgPSBxdWVyeS50YXJnZXRzO1xuXG4gICAgICAgICAgcmV0dXJuIGZyb20oYXBpLnF1ZXJ5KGRzUmVxdWVzdCkpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSB8fCBbXSxcbiAgICAgICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcsXG4gICAgICAgICAgICAgICAga2V5OiBgbWl4ZWQtJHtpfS0ke3Jlc3BvbnNlLmtleSB8fCAnJ31gLFxuICAgICAgICAgICAgICB9IGFzIERhdGFRdWVyeVJlc3BvbnNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0b0FycmF5KCksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgZXJyID0gdG9EYXRhUXVlcnlFcnJvcihlcnIpO1xuICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9IGAke2FwaS5uYW1lfTogJHtlcnIubWVzc2FnZX1gO1xuXG4gICAgICAgICAgICAgIHJldHVybiBvZjxEYXRhUXVlcnlSZXNwb25zZVtdPihbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkVycm9yLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICAgIGtleTogYG1peGVkLSR7aX0tJHtkc1JlcXVlc3QucmVxdWVzdElkIHx8ICcnfWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBmb3JrSm9pbihydW5uaW5nUXVlcmllcykucGlwZShmbGF0dGVuUmVzcG9uc2VzKCksIG1hcCh0aGlzLmZpbmFsaXplUmVzcG9uc2VzKSwgbWVyZ2VBbGwoKSk7XG4gIH1cblxuICB0ZXN0RGF0YXNvdXJjZSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNRdWVyeWFibGUocXVlcnk6IEJhdGNoZWRRdWVyaWVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHF1ZXJ5ICYmIEFycmF5LmlzQXJyYXkocXVlcnkudGFyZ2V0cykgJiYgcXVlcnkudGFyZ2V0cy5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5hbGl6ZVJlc3BvbnNlcyhyZXNwb25zZXM6IERhdGFRdWVyeVJlc3BvbnNlW10pOiBEYXRhUXVlcnlSZXNwb25zZVtdIHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gcmVzcG9uc2VzO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlcztcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvciA9IHJlc3BvbnNlcy5maW5kKChyZXNwb25zZSkgPT4gcmVzcG9uc2Uuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5FcnJvcik7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXNwb25zZXMucHVzaChlcnJvcik7IC8vIGFkZHMgdGhlIGZpcnN0IGZvdW5kIGVycm9yIGVudHJ5IHNvIGVycm9yIHNob3dzIHVwIGluIHRoZSBwYW5lbFxuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZXNbbGVuZ3RoIC0gMV0uc3RhdGUgPSBMb2FkaW5nU3RhdGUuRG9uZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2VzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5SZXNwb25zZXMoKTogT3BlcmF0b3JGdW5jdGlvbjxEYXRhUXVlcnlSZXNwb25zZVtdW10sIERhdGFRdWVyeVJlc3BvbnNlW10+IHtcbiAgcmV0dXJuIHJlZHVjZSgoYWxsOiBEYXRhUXVlcnlSZXNwb25zZVtdLCBjdXJyZW50KSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnQucmVkdWNlKChpbm5lckFsbCwgaW5uZXJDdXJyZW50KSA9PiB7XG4gICAgICBpbm5lckFsbC5wdXNoLmFwcGx5KGlubmVyQWxsLCBpbm5lckN1cnJlbnQpO1xuICAgICAgcmV0dXJuIGlubmVyQWxsO1xuICAgIH0sIGFsbCk7XG4gIH0sIFtdKTtcbn1cbiIsImltcG9ydCB7IE1peGVkRGF0YXNvdXJjZSB9IGZyb20gJy4vTWl4ZWREYXRhU291cmNlJztcbmV4cG9ydCB7IE1peGVkRGF0YXNvdXJjZSwgTWl4ZWREYXRhc291cmNlIGFzIERhdGFzb3VyY2UgfTtcbiJdLCJuYW1lcyI6WyJjbG9uZURlZXAiLCJncm91cEJ5IiwiZm9ya0pvaW4iLCJmcm9tIiwib2YiLCJjYXRjaEVycm9yIiwibWFwIiwibWVyZ2VBbGwiLCJtZXJnZU1hcCIsInJlZHVjZSIsInRvQXJyYXkiLCJEYXRhU291cmNlQXBpIiwiTG9hZGluZ1N0YXRlIiwiZ2V0RGF0YVNvdXJjZVNydiIsInRvRGF0YVF1ZXJ5RXJyb3IiLCJNSVhFRF9EQVRBU09VUkNFX05BTUUiLCJNaXhlZERhdGFzb3VyY2UiLCJjb25zdHJ1Y3RvciIsImluc3RhbmNlU2V0dGluZ3MiLCJxdWVyeSIsInJlcXVlc3QiLCJxdWVyaWVzIiwidGFyZ2V0cyIsImZpbHRlciIsInQiLCJkYXRhc291cmNlIiwidWlkIiwibGVuZ3RoIiwiZGF0YSIsInNldHMiLCJtaXhlZCIsImtleSIsInB1c2giLCJnZXQiLCJzY29wZWRWYXJzIiwiYmF0Y2hRdWVyaWVzIiwicnVubmluZ1F1ZXJpZXMiLCJpc1F1ZXJ5YWJsZSIsImkiLCJwaXBlIiwiYXBpIiwiZHNSZXF1ZXN0IiwicmVxdWVzdElkIiwicmVzcG9uc2UiLCJzdGF0ZSIsIkxvYWRpbmciLCJlcnIiLCJtZXNzYWdlIiwibmFtZSIsIkVycm9yIiwiZXJyb3IiLCJmbGF0dGVuUmVzcG9uc2VzIiwiZmluYWxpemVSZXNwb25zZXMiLCJ0ZXN0RGF0YXNvdXJjZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiQXJyYXkiLCJpc0FycmF5IiwicmVzcG9uc2VzIiwiZmluZCIsIkRvbmUiLCJhbGwiLCJjdXJyZW50IiwiaW5uZXJBbGwiLCJpbm5lckN1cnJlbnQiLCJhcHBseSIsIkRhdGFzb3VyY2UiXSwic291cmNlUm9vdCI6IiJ9