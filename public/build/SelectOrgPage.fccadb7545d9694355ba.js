"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SelectOrgPage"],{

/***/ "./public/app/features/org/SelectOrgPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectOrgPage": () => (/* binding */ SelectOrgPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/org/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;










const navModel = {
  main: {
    icon: 'grafana',
    subTitle: 'Preferences',
    text: 'Select active organization'
  },
  node: {
    text: 'Select active organization'
  }
};

const mapStateToProps = state => {
  return {
    userOrgs: state.organization.userOrgs
  };
};

const mapDispatchToProps = {
  setUserOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_5__.setUserOrganization,
  getUserOrganizations: _state_actions__WEBPACK_IMPORTED_MODULE_5__.getUserOrganizations
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const SelectOrgPage = ({
  setUserOrganization,
  getUserOrganizations,
  userOrgs
}) => {
  const setUserOrg = async org => {
    await setUserOrganization(org.orgId);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.appSubUrl + '/';
  };

  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    getUserOrganizations();
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: "You have been invited to another organization! Please select which organization that you want to use right now. You can change this later at any time."
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          wrap: true,
          children: userOrgs && userOrgs.map(org => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            icon: "signin",
            onClick: () => setUserOrg(org),
            children: org.name
          }, org.orgId))
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SelectOrgPage));

/***/ }),

/***/ "./public/app/features/org/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOrganization": () => (/* binding */ createOrganization),
/* harmony export */   "getUserOrganizations": () => (/* binding */ getUserOrganizations),
/* harmony export */   "loadOrganization": () => (/* binding */ loadOrganization),
/* harmony export */   "setUserOrganization": () => (/* binding */ setUserOrganization),
/* harmony export */   "updateOrganization": () => (/* binding */ updateOrganization)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/org/state/reducers.ts");



function loadOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().get('/api/org');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.organizationLoaded)(organizationResponse));
    return organizationResponse;
  };
}
function updateOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async (dispatch, getStore) => {
    const organization = getStore().organization.organization;
    await dependencies.getBackendSrv().put('/api/org', {
      name: organization.name
    });
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateConfigurationSubtitle)(organization.name));
    dispatch(loadOrganization(dependencies));
  };
}
function setUserOrganization(orgId, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().post('/api/user/using/' + orgId);
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateConfigurationSubtitle)(organizationResponse.name));
  };
}
function createOrganization(newOrg, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().post('/api/orgs/', newOrg);
    dispatch(setUserOrganization(result.orgId));
  };
}
function getUserOrganizations(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().get('/api/user/orgs');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userOrganizationsLoaded)(result));
    return result;
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUxEO0FBTUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9vcmcvU2VsZWN0T3JnUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvb3JnL3N0YXRlL2FjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VFZmZlY3RPbmNlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIEhvcml6b250YWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFN0b3JlU3RhdGUsIFVzZXJPcmcgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRVc2VyT3JnYW5pemF0aW9ucywgc2V0VXNlck9yZ2FuaXphdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5cbmNvbnN0IG5hdk1vZGVsID0ge1xuICBtYWluOiB7XG4gICAgaWNvbjogJ2dyYWZhbmEnLFxuICAgIHN1YlRpdGxlOiAnUHJlZmVyZW5jZXMnLFxuICAgIHRleHQ6ICdTZWxlY3QgYWN0aXZlIG9yZ2FuaXphdGlvbicsXG4gIH0sXG4gIG5vZGU6IHtcbiAgICB0ZXh0OiAnU2VsZWN0IGFjdGl2ZSBvcmdhbml6YXRpb24nLFxuICB9LFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlck9yZ3M6IHN0YXRlLm9yZ2FuaXphdGlvbi51c2VyT3JncyxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgc2V0VXNlck9yZ2FuaXphdGlvbixcbiAgZ2V0VXNlck9yZ2FuaXphdGlvbnMsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxudHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY29uc3QgU2VsZWN0T3JnUGFnZTogRkM8UHJvcHM+ID0gKHsgc2V0VXNlck9yZ2FuaXphdGlvbiwgZ2V0VXNlck9yZ2FuaXphdGlvbnMsIHVzZXJPcmdzIH0pID0+IHtcbiAgY29uc3Qgc2V0VXNlck9yZyA9IGFzeW5jIChvcmc6IFVzZXJPcmcpID0+IHtcbiAgICBhd2FpdCBzZXRVc2VyT3JnYW5pemF0aW9uKG9yZy5vcmdJZCk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb25maWcuYXBwU3ViVXJsICsgJy8nO1xuICB9O1xuXG4gIHVzZUVmZmVjdE9uY2UoKCkgPT4ge1xuICAgIGdldFVzZXJPcmdhbml6YXRpb25zKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgWW91IGhhdmUgYmVlbiBpbnZpdGVkIHRvIGFub3RoZXIgb3JnYW5pemF0aW9uISBQbGVhc2Ugc2VsZWN0IHdoaWNoIG9yZ2FuaXphdGlvbiB0aGF0IHlvdSB3YW50IHRvIHVzZSByaWdodFxuICAgICAgICAgICAgbm93LiBZb3UgY2FuIGNoYW5nZSB0aGlzIGxhdGVyIGF0IGFueSB0aW1lLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIHdyYXA+XG4gICAgICAgICAgICB7dXNlck9yZ3MgJiZcbiAgICAgICAgICAgICAgdXNlck9yZ3MubWFwKChvcmcpID0+IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17b3JnLm9yZ0lkfSBpY29uPVwic2lnbmluXCIgb25DbGljaz17KCkgPT4gc2V0VXNlck9yZyhvcmcpfT5cbiAgICAgICAgICAgICAgICAgIHtvcmcubmFtZX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihTZWxlY3RPcmdQYWdlKTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVwZGF0ZUNvbmZpZ3VyYXRpb25TdWJ0aXRsZSB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBvcmdhbml6YXRpb25Mb2FkZWQsIHVzZXJPcmdhbml6YXRpb25zTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbnR5cGUgT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiB0eXBlb2YgZ2V0QmFja2VuZFNydiB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE9yZ2FuaXphdGlvbihcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb25SZXNwb25zZSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL29yZycpO1xuICAgIGRpc3BhdGNoKG9yZ2FuaXphdGlvbkxvYWRlZChvcmdhbml6YXRpb25SZXNwb25zZSkpO1xuXG4gICAgcmV0dXJuIG9yZ2FuaXphdGlvblJlc3BvbnNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3JnYW5pemF0aW9uKFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb24gPSBnZXRTdG9yZSgpLm9yZ2FuaXphdGlvbi5vcmdhbml6YXRpb247XG5cbiAgICBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLnB1dCgnL2FwaS9vcmcnLCB7IG5hbWU6IG9yZ2FuaXphdGlvbi5uYW1lIH0pO1xuXG4gICAgZGlzcGF0Y2godXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlKG9yZ2FuaXphdGlvbi5uYW1lKSk7XG4gICAgZGlzcGF0Y2gobG9hZE9yZ2FuaXphdGlvbihkZXBlbmRlbmNpZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFVzZXJPcmdhbml6YXRpb24oXG4gIG9yZ0lkOiBudW1iZXIsXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uUmVzcG9uc2UgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvdXNlci91c2luZy8nICsgb3JnSWQpO1xuXG4gICAgZGlzcGF0Y2godXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlKG9yZ2FuaXphdGlvblJlc3BvbnNlLm5hbWUpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9yZ2FuaXphdGlvbihcbiAgbmV3T3JnOiB7IG5hbWU6IHN0cmluZyB9LFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9vcmdzLycsIG5ld09yZyk7XG5cbiAgICBkaXNwYXRjaChzZXRVc2VyT3JnYW5pemF0aW9uKHJlc3VsdC5vcmdJZCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck9yZ2FuaXphdGlvbnMoXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvdXNlci9vcmdzJyk7XG4gICAgZGlzcGF0Y2godXNlck9yZ2FuaXphdGlvbnNMb2FkZWQocmVzdWx0KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInVzZUVmZmVjdE9uY2UiLCJjb25maWciLCJCdXR0b24iLCJIb3Jpem9udGFsR3JvdXAiLCJQYWdlIiwiZ2V0VXNlck9yZ2FuaXphdGlvbnMiLCJzZXRVc2VyT3JnYW5pemF0aW9uIiwibmF2TW9kZWwiLCJtYWluIiwiaWNvbiIsInN1YlRpdGxlIiwidGV4dCIsIm5vZGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJPcmdzIiwib3JnYW5pemF0aW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiU2VsZWN0T3JnUGFnZSIsInNldFVzZXJPcmciLCJvcmciLCJvcmdJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFwcFN1YlVybCIsIm1hcCIsIm5hbWUiLCJnZXRCYWNrZW5kU3J2IiwidXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlIiwib3JnYW5pemF0aW9uTG9hZGVkIiwidXNlck9yZ2FuaXphdGlvbnNMb2FkZWQiLCJsb2FkT3JnYW5pemF0aW9uIiwiZGVwZW5kZW5jaWVzIiwiZGlzcGF0Y2giLCJvcmdhbml6YXRpb25SZXNwb25zZSIsImdldCIsInVwZGF0ZU9yZ2FuaXphdGlvbiIsImdldFN0b3JlIiwicHV0IiwicG9zdCIsImNyZWF0ZU9yZ2FuaXphdGlvbiIsIm5ld09yZyIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=