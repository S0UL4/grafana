"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SnapshotListPage"],{

/***/ "./public/app/features/manage-dashboards/SnapshotListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnapshotListPage": () => (/* binding */ SnapshotListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _components_SnapshotListTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/manage-dashboards/components/SnapshotListTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;







const SnapshotListPage = ({
  navModel,
  location
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_SnapshotListTable__WEBPACK_IMPORTED_MODULE_4__.SnapshotListTable, {})
    }))
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, 'snapshots')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(SnapshotListPage));

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/SnapshotListTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnapshotListTable": () => (/* binding */ SnapshotListTable),
/* harmony export */   "getSnapshots": () => (/* binding */ getSnapshots)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/lib/useAsync.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _span;







function getSnapshots() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get('/api/dashboard/snapshots').then(result => {
    return result.map(snapshot => Object.assign({}, snapshot, {
      url: `/dashboard/snapshot/${snapshot.key}`
    }));
  });
}
const SnapshotListTable = () => {
  const [snapshots, setSnapshots] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [removeSnapshot, setRemoveSnapshot] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().pathname;
  const fullUrl = window.location.href;
  const baseUrl = fullUrl.substring(0, fullUrl.indexOf(currentPath));
  (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    const response = await getSnapshots();
    setSnapshots(response);
  }, [setSnapshots]);
  const doRemoveSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async snapshot => {
    const filteredSnapshots = snapshots.filter(ss => ss.key !== snapshot.key);
    setSnapshots(filteredSnapshots);
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`/api/snapshots/${snapshot.key}`).catch(() => {
      setSnapshots(snapshots);
    });
  }, [snapshots]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
      className: "filter-table",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "Name"
            })
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "Snapshot url"
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            style: {
              width: '70px'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            style: {
              width: '30px'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            style: {
              width: '25px'
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
        children: snapshots.map(snapshot => {
          const url = snapshot.externalUrl || snapshot.url;
          const fullUrl = snapshot.externalUrl || `${baseUrl}${snapshot.url}`;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: url,
                children: snapshot.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
                href: url,
                children: fullUrl
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: snapshot.external && (_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "query-keyword",
                children: "External"
              })))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
                href: url,
                variant: "secondary",
                size: "sm",
                icon: "eye",
                children: "View"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              className: "text-right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "destructive",
                size: "sm",
                icon: "times",
                onClick: () => setRemoveSnapshot(snapshot)
              })
            })]
          }, snapshot.key);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
      isOpen: !!removeSnapshot,
      icon: "trash-alt",
      title: "Delete",
      body: `Are you sure you want to delete '${removeSnapshot === null || removeSnapshot === void 0 ? void 0 : removeSnapshot.name}'?`,
      confirmText: "Delete",
      onDismiss: () => setRemoveSnapshot(undefined),
      onConfirm: () => {
        doRemoveSnapshot(removeSnapshot);
        setRemoveSnapshot(undefined);
      }
    })]
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU25hcHNob3RMaXN0UGFnZS5hMTA2ZmMyMzE0NzViMTgzNWMxYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFLQTs7QUFPTyxNQUFNSyxnQkFBMkIsR0FBRyxDQUFDO0VBQUVDLFFBQUY7RUFBWUM7QUFBWixDQUFELEtBQTRCO0VBQ3JFLG9CQUNFLHVEQUFDLHFFQUFEO0lBQU0sUUFBUSxFQUFFRCxRQUFoQjtJQUFBLDJEQUNFLHVEQUFDLDhFQUFEO01BQUEsdUJBQ0UsdURBQUMsNEVBQUQ7SUFERixFQURGO0VBQUEsRUFERjtBQU9ELENBUk07O0FBVVAsTUFBTUUsZUFBZ0UsR0FBSUMsS0FBRCxLQUF3QjtFQUMvRkgsUUFBUSxFQUFFSCx3RUFBVyxDQUFDTSxLQUFLLENBQUNDLFFBQVAsRUFBaUIsV0FBakI7QUFEMEUsQ0FBeEIsQ0FBekU7O0FBSUEsaUVBQWVULG9EQUFPLENBQUNPLGVBQUQsQ0FBUCxDQUF5QkgsZ0JBQXpCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUVBO0FBQ0E7OztBQUlPLFNBQVNjLFlBQVQsR0FBd0I7RUFDN0IsT0FBT0wsK0RBQWEsR0FDakJNLEdBREksQ0FDQSwwQkFEQSxFQUVKQyxJQUZJLENBRUVDLE1BQUQsSUFBd0I7SUFDNUIsT0FBT0EsTUFBTSxDQUFDQyxHQUFQLENBQVlDLFFBQUQsc0JBQ2JBLFFBRGE7TUFFaEJDLEdBQUcsRUFBRyx1QkFBc0JELFFBQVEsQ0FBQ0UsR0FBSTtJQUZ6QixFQUFYLENBQVA7RUFJRCxDQVBJLENBQVA7QUFRRDtBQUNNLE1BQU10QixpQkFBcUIsR0FBRyxNQUFNO0VBQ3pDLE1BQU0sQ0FBQ3VCLFNBQUQsRUFBWUMsWUFBWixJQUE0QmpCLCtDQUFRLENBQWEsRUFBYixDQUExQztFQUNBLE1BQU0sQ0FBQ2tCLGNBQUQsRUFBaUJDLGlCQUFqQixJQUFzQ25CLCtDQUFRLEVBQXBEO0VBQ0EsTUFBTW9CLFdBQVcsR0FBR2hC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QTtNQURILEVBZEY7SUFBQSxFQURGLGVBMENFLHVEQUFDLHFEQUFEO01BQ0UsTUFBTSxFQUFFLENBQUMsQ0FBQ0csY0FEWjtNQUVFLElBQUksRUFBQyxXQUZQO01BR0UsS0FBSyxFQUFDLFFBSFI7TUFJRSxJQUFJLEVBQUcsb0NBQW1DQSxjQUFwQyxhQUFvQ0EsY0FBcEMsdUJBQW9DQSxjQUFjLENBQUVvQixJQUFLLElBSmpFO01BS0UsV0FBVyxFQUFDLFFBTGQ7TUFNRSxTQUFTLEVBQUUsTUFBTW5CLGlCQUFpQixDQUFDcUIsU0FBRCxDQU5wQztNQU9FLFNBQVMsRUFBRSxNQUFNO1FBQ2ZWLGdCQUFnQixDQUFDWixjQUFELENBQWhCO1FBQ0FDLGlCQUFpQixDQUFDcUIsU0FBRCxDQUFqQjtNQUNEO0lBVkgsRUExQ0Y7RUFBQSxFQURGO0FBeURELENBbEZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvU25hcHNob3RMaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvY29tcG9uZW50cy9TbmFwc2hvdExpc3RUYWJsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwU3RhdGVUb1Byb3BzLCBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcblxuaW1wb3J0IHsgU25hcHNob3RMaXN0VGFibGUgfSBmcm9tICcuL2NvbXBvbmVudHMvU25hcHNob3RMaXN0VGFibGUnO1xuXG5pbnRlcmZhY2UgQ29ubmVjdGVkUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBDb25uZWN0ZWRQcm9wcywgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMge31cblxuZXhwb3J0IGNvbnN0IFNuYXBzaG90TGlzdFBhZ2U6IEZDPFByb3BzPiA9ICh7IG5hdk1vZGVsLCBsb2NhdGlvbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8U25hcHNob3RMaXN0VGFibGUgLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM6IE1hcFN0YXRlVG9Qcm9wczxDb25uZWN0ZWRQcm9wcywge30sIFN0b3JlU3RhdGU+ID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdzbmFwc2hvdHMnKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU25hcHNob3RMaXN0UGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBc3luYyBmcm9tICdyZWFjdC11c2UvbGliL3VzZUFzeW5jJztcblxuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBDb25maXJtTW9kYWwsIEJ1dHRvbiwgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU25hcHNob3QgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTbmFwc2hvdHMoKSB7XG4gIHJldHVybiBnZXRCYWNrZW5kU3J2KClcbiAgICAuZ2V0KCcvYXBpL2Rhc2hib2FyZC9zbmFwc2hvdHMnKVxuICAgIC50aGVuKChyZXN1bHQ6IFNuYXBzaG90W10pID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQubWFwKChzbmFwc2hvdCkgPT4gKHtcbiAgICAgICAgLi4uc25hcHNob3QsXG4gICAgICAgIHVybDogYC9kYXNoYm9hcmQvc25hcHNob3QvJHtzbmFwc2hvdC5rZXl9YCxcbiAgICAgIH0pKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBTbmFwc2hvdExpc3RUYWJsZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzbmFwc2hvdHMsIHNldFNuYXBzaG90c10gPSB1c2VTdGF0ZTxTbmFwc2hvdFtdPihbXSk7XG4gIGNvbnN0IFtyZW1vdmVTbmFwc2hvdCwgc2V0UmVtb3ZlU25hcHNob3RdID0gdXNlU3RhdGU8U25hcHNob3QgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IGN1cnJlbnRQYXRoID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkucGF0aG5hbWU7XG4gIGNvbnN0IGZ1bGxVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgY29uc3QgYmFzZVVybCA9IGZ1bGxVcmwuc3Vic3RyaW5nKDAsIGZ1bGxVcmwuaW5kZXhPZihjdXJyZW50UGF0aCkpO1xuXG4gIHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFNuYXBzaG90cygpO1xuICAgIHNldFNuYXBzaG90cyhyZXNwb25zZSk7XG4gIH0sIFtzZXRTbmFwc2hvdHNdKTtcblxuICBjb25zdCBkb1JlbW92ZVNuYXBzaG90ID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKHNuYXBzaG90OiBTbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRTbmFwc2hvdHMgPSBzbmFwc2hvdHMuZmlsdGVyKChzcykgPT4gc3Mua2V5ICE9PSBzbmFwc2hvdC5rZXkpO1xuICAgICAgc2V0U25hcHNob3RzKGZpbHRlcmVkU25hcHNob3RzKTtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZGVsZXRlKGAvYXBpL3NuYXBzaG90cy8ke3NuYXBzaG90LmtleX1gKVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHNldFNuYXBzaG90cyhzbmFwc2hvdHMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFtzbmFwc2hvdHNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICA8c3Ryb25nPk5hbWU8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgIDxzdHJvbmc+U25hcHNob3QgdXJsPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnNzBweCcgfX0+PC90aD5cbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzMwcHgnIH19PjwvdGg+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcyNXB4JyB9fT48L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7c25hcHNob3RzLm1hcCgoc25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHNuYXBzaG90LmV4dGVybmFsVXJsIHx8IHNuYXBzaG90LnVybDtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxVcmwgPSBzbmFwc2hvdC5leHRlcm5hbFVybCB8fCBgJHtiYXNlVXJsfSR7c25hcHNob3QudXJsfWA7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtzbmFwc2hvdC5rZXl9PlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VybH0+e3NuYXBzaG90Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXJsfT57ZnVsbFVybH08L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3NuYXBzaG90LmV4dGVybmFsICYmIDxzcGFuIGNsYXNzTmFtZT1cInF1ZXJ5LWtleXdvcmRcIj5FeHRlcm5hbDwvc3Bhbj59PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e3VybH0gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIGljb249XCJleWVcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlld1xuICAgICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgc2l6ZT1cInNtXCIgaWNvbj1cInRpbWVzXCIgb25DbGljaz17KCkgPT4gc2V0UmVtb3ZlU25hcHNob3Qoc25hcHNob3QpfSAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICBpc09wZW49eyEhcmVtb3ZlU25hcHNob3R9XG4gICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXG4gICAgICAgIGJvZHk9e2BBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICcke3JlbW92ZVNuYXBzaG90Py5uYW1lfSc/YH1cbiAgICAgICAgY29uZmlybVRleHQ9XCJEZWxldGVcIlxuICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFJlbW92ZVNuYXBzaG90KHVuZGVmaW5lZCl9XG4gICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICAgIGRvUmVtb3ZlU25hcHNob3QocmVtb3ZlU25hcHNob3QhKTtcbiAgICAgICAgICBzZXRSZW1vdmVTbmFwc2hvdCh1bmRlZmluZWQpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiUGFnZSIsImdldE5hdk1vZGVsIiwiU25hcHNob3RMaXN0VGFibGUiLCJTbmFwc2hvdExpc3RQYWdlIiwibmF2TW9kZWwiLCJsb2NhdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlQXN5bmMiLCJnZXRCYWNrZW5kU3J2IiwibG9jYXRpb25TZXJ2aWNlIiwiQ29uZmlybU1vZGFsIiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsImdldFNuYXBzaG90cyIsImdldCIsInRoZW4iLCJyZXN1bHQiLCJtYXAiLCJzbmFwc2hvdCIsInVybCIsImtleSIsInNuYXBzaG90cyIsInNldFNuYXBzaG90cyIsInJlbW92ZVNuYXBzaG90Iiwic2V0UmVtb3ZlU25hcHNob3QiLCJjdXJyZW50UGF0aCIsImdldExvY2F0aW9uIiwicGF0aG5hbWUiLCJmdWxsVXJsIiwid2luZG93IiwiaHJlZiIsImJhc2VVcmwiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicmVzcG9uc2UiLCJkb1JlbW92ZVNuYXBzaG90IiwiZmlsdGVyZWRTbmFwc2hvdHMiLCJmaWx0ZXIiLCJzcyIsImRlbGV0ZSIsImNhdGNoIiwid2lkdGgiLCJleHRlcm5hbFVybCIsIm5hbWUiLCJleHRlcm5hbCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=