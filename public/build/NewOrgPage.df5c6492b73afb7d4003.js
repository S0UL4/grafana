"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewOrgPage"],{

/***/ "./public/app/features/org/NewOrgPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOrgPage": () => (/* binding */ NewOrgPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/org/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _Button;












const mapStateToProps = state => {
  return {
    navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'global-orgs')
  };
};

const mapDispatchToProps = {
  createOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_6__.createOrganization
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const NewOrgPage = ({
  navModel,
  createOrganization
}) => {
  const createOrg = async newOrg => {
    await createOrganization(newOrg);
    window.location.href = (0,app_core_config__WEBPACK_IMPORTED_MODULE_4__.getConfig)().appSubUrl + '/org';
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
        className: "page-sub-heading",
        children: "New organization"
      })), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
        className: "playlist-description",
        children: ["Each organization contains their own dashboards, data sources, and configuration, which cannot be shared shared between organizations. While users might belong to more than one organization, multiple organizations are most frequently used in multi-tenant deployments.", ' ']
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        onSubmit: createOrg,
        children: ({
          register,
          errors
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Organization name",
              invalid: !!errors.name,
              error: errors.name && errors.name.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                placeholder: "Org name"
              }, register('name', {
                required: 'Organization name is required'
              })))
            }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              children: "Create"
            }))]
          });
        }
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewOrgPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDYSxNQUFELENBQXhCLENBQVI7SUFFQSxPQUFPQSxNQUFQO0VBQ0QsQ0FMRDtBQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvb3JnL05ld09yZ1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL29yZy9zdGF0ZS9hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBGaWVsZCwgRm9ybSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5cbmltcG9ydCB7IGNyZWF0ZU9yZ2FuaXphdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4ge1xuICByZXR1cm4geyBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdnbG9iYWwtb3JncycpIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGNyZWF0ZU9yZ2FuaXphdGlvbixcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG50eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmludGVyZmFjZSBDcmVhdGVPcmdGb3JtRFRPIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTmV3T3JnUGFnZTogRkM8UHJvcHM+ID0gKHsgbmF2TW9kZWwsIGNyZWF0ZU9yZ2FuaXphdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGNyZWF0ZU9yZyA9IGFzeW5jIChuZXdPcmc6IHsgbmFtZTogc3RyaW5nIH0pID0+IHtcbiAgICBhd2FpdCBjcmVhdGVPcmdhbml6YXRpb24obmV3T3JnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGdldENvbmZpZygpLmFwcFN1YlVybCArICcvb3JnJztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5OZXcgb3JnYW5pemF0aW9uPC9oMz5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwbGF5bGlzdC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIEVhY2ggb3JnYW5pemF0aW9uIGNvbnRhaW5zIHRoZWlyIG93biBkYXNoYm9hcmRzLCBkYXRhIHNvdXJjZXMsIGFuZCBjb25maWd1cmF0aW9uLCB3aGljaCBjYW5ub3QgYmUgc2hhcmVkXG4gICAgICAgICAgc2hhcmVkIGJldHdlZW4gb3JnYW5pemF0aW9ucy4gV2hpbGUgdXNlcnMgbWlnaHQgYmVsb25nIHRvIG1vcmUgdGhhbiBvbmUgb3JnYW5pemF0aW9uLCBtdWx0aXBsZSBvcmdhbml6YXRpb25zXG4gICAgICAgICAgYXJlIG1vc3QgZnJlcXVlbnRseSB1c2VkIGluIG11bHRpLXRlbmFudCBkZXBsb3ltZW50cy57JyAnfVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPEZvcm08Q3JlYXRlT3JnRm9ybURUTz4gb25TdWJtaXQ9e2NyZWF0ZU9yZ30+XG4gICAgICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJPcmdhbml6YXRpb24gbmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnMubmFtZSAmJiBlcnJvcnMubmFtZS5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9yZyBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywge1xuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnT3JnYW5pemF0aW9uIG5hbWUgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoTmV3T3JnUGFnZSk7XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVDb25maWd1cmF0aW9uU3VidGl0bGUgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgb3JnYW5pemF0aW9uTG9hZGVkLCB1c2VyT3JnYW5pemF0aW9uc0xvYWRlZCB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG50eXBlIE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogdHlwZW9mIGdldEJhY2tlbmRTcnYgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPcmdhbml6YXRpb24oXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uUmVzcG9uc2UgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9vcmcnKTtcbiAgICBkaXNwYXRjaChvcmdhbml6YXRpb25Mb2FkZWQob3JnYW5pemF0aW9uUmVzcG9uc2UpKTtcblxuICAgIHJldHVybiBvcmdhbml6YXRpb25SZXNwb25zZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9yZ2FuaXphdGlvbihcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uID0gZ2V0U3RvcmUoKS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uO1xuXG4gICAgYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5wdXQoJy9hcGkvb3JnJywgeyBuYW1lOiBvcmdhbml6YXRpb24ubmFtZSB9KTtcblxuICAgIGRpc3BhdGNoKHVwZGF0ZUNvbmZpZ3VyYXRpb25TdWJ0aXRsZShvcmdhbml6YXRpb24ubmFtZSkpO1xuICAgIGRpc3BhdGNoKGxvYWRPcmdhbml6YXRpb24oZGVwZW5kZW5jaWVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyT3JnYW5pemF0aW9uKFxuICBvcmdJZDogbnVtYmVyLFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvblJlc3BvbnNlID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3VzZXIvdXNpbmcvJyArIG9yZ0lkKTtcblxuICAgIGRpc3BhdGNoKHVwZGF0ZUNvbmZpZ3VyYXRpb25TdWJ0aXRsZShvcmdhbml6YXRpb25SZXNwb25zZS5uYW1lKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcmdhbml6YXRpb24oXG4gIG5ld09yZzogeyBuYW1lOiBzdHJpbmcgfSxcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvb3Jncy8nLCBuZXdPcmcpO1xuXG4gICAgZGlzcGF0Y2goc2V0VXNlck9yZ2FuaXphdGlvbihyZXN1bHQub3JnSWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJPcmdhbml6YXRpb25zKFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3VzZXIvb3JncycpO1xuICAgIGRpc3BhdGNoKHVzZXJPcmdhbml6YXRpb25zTG9hZGVkKHJlc3VsdCkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJCdXR0b24iLCJJbnB1dCIsIkZpZWxkIiwiRm9ybSIsIlBhZ2UiLCJnZXRDb25maWciLCJnZXROYXZNb2RlbCIsImNyZWF0ZU9yZ2FuaXphdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIk5ld09yZ1BhZ2UiLCJjcmVhdGVPcmciLCJuZXdPcmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhcHBTdWJVcmwiLCJyZWdpc3RlciIsImVycm9ycyIsIm5hbWUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJnZXRCYWNrZW5kU3J2IiwidXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlIiwib3JnYW5pemF0aW9uTG9hZGVkIiwidXNlck9yZ2FuaXphdGlvbnNMb2FkZWQiLCJsb2FkT3JnYW5pemF0aW9uIiwiZGVwZW5kZW5jaWVzIiwiZGlzcGF0Y2giLCJvcmdhbml6YXRpb25SZXNwb25zZSIsImdldCIsInVwZGF0ZU9yZ2FuaXphdGlvbiIsImdldFN0b3JlIiwib3JnYW5pemF0aW9uIiwicHV0Iiwic2V0VXNlck9yZ2FuaXphdGlvbiIsIm9yZ0lkIiwicG9zdCIsInJlc3VsdCIsImdldFVzZXJPcmdhbml6YXRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==