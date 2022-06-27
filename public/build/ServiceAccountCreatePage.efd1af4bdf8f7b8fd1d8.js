"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServiceAccountCreatePage"],{

/***/ "./public/app/features/serviceaccounts/ServiceAccountCreatePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceAccountCreatePageUnconnected": () => (/* binding */ ServiceAccountCreatePageUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Button;

















const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, 'serviceaccounts')
});

const createServiceAccount = async sa => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/serviceaccounts/', sa);

const updateServiceAccount = async (id, sa) => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().patch(`/api/serviceaccounts/${id}`, sa);

const ServiceAccountCreatePageUnconnected = ({
  navModel
}) => {
  const [roleOptions, setRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [builtinRoles, setBuiltinRoles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [pendingRoles, setPendingRoles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const currentOrgId = app_core_core__WEBPACK_IMPORTED_MODULE_7__.contextSrv.user.orgId;
  const [serviceAccount, setServiceAccount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    id: 0,
    orgId: app_core_core__WEBPACK_IMPORTED_MODULE_7__.contextSrv.user.orgId,
    role: app_types__WEBPACK_IMPORTED_MODULE_8__.OrgRole.Viewer,
    tokens: 0,
    name: '',
    login: '',
    isDisabled: false,
    createdAt: '',
    teams: []
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchOptions() {
      try {
        if (app_core_core__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.ActionRolesList)) {
          let options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_6__.fetchRoleOptions)(currentOrgId);
          setRoleOptions(options);
        }

        if (app_core_core__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.ActionBuiltinRolesList)) {
          const builtInRoles = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_6__.fetchBuiltinRoles)(currentOrgId);
          setBuiltinRoles(builtInRoles);
        }
      } catch (e) {
        console.error('Error loading options', e);
      }
    }

    if (app_core_core__WEBPACK_IMPORTED_MODULE_7__.contextSrv.licensedAccessControlEnabled()) {
      fetchOptions();
    }
  }, [currentOrgId]);
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useHistory)();
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data => {
    data.role = serviceAccount.role;
    const response = await createServiceAccount(data);

    try {
      const newAccount = {
        avatarUrl: response.avatarUrl,
        id: response.id,
        isDisabled: response.isDisabled,
        login: response.login,
        name: response.name,
        orgId: response.orgId,
        role: response.role,
        tokens: response.tokens
      };
      await updateServiceAccount(response.id, data);

      if (app_core_core__WEBPACK_IMPORTED_MODULE_7__.contextSrv.licensedAccessControlEnabled()) {
        await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_6__.updateUserRoles)(pendingRoles, newAccount.id, newAccount.orgId);
      }
    } catch (e) {
      console.error(e);
    }

    history.push('/org/serviceaccounts/');
  }, [history, serviceAccount.role, pendingRoles]);

  const onRoleChange = role => {
    setServiceAccount(Object.assign({}, serviceAccount, {
      role: role
    }));
  };

  const onPendingRolesUpdate = (roles, userId, orgId) => {
    // keep the new role assignments for user
    setPendingRoles(roles);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
        children: "Create service account"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
        onSubmit: onSubmit,
        validateOn: "onSubmit",
        children: ({
          register,
          errors
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Display name",
              required: true,
              invalid: !!errors.name,
              error: errors.name ? 'Display name is required' : undefined,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
                id: "display-name-input"
              }, register('name', {
                required: true
              }), {
                autoFocus: true
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Role",
              children: app_core_core__WEBPACK_IMPORTED_MODULE_7__.contextSrv.licensedAccessControlEnabled() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_5__.UserRolePicker, {
                userId: serviceAccount.id || 0,
                orgId: serviceAccount.orgId,
                builtInRole: serviceAccount.role,
                builtInRoles: builtinRoles,
                onBuiltinRoleChange: onRoleChange,
                builtinRolesDisabled: false,
                roleOptions: roleOptions,
                updateDisabled: true,
                onApplyRoles: onPendingRolesUpdate,
                pendingRoles: pendingRoles
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_10__.OrgRolePicker, {
                "aria-label": "Role",
                value: serviceAccount.role,
                onChange: onRoleChange
              })
            }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              children: "Create"
            }))]
          });
        }
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ServiceAccountCreatePageUnconnected));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZUFjY291bnRDcmVhdGVQYWdlLmVmZDFhZjRiZGY4ZjdiOGZkMWQ4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7OztBQU1BLE1BQU1xQixlQUFlLEdBQUlDLEtBQUQsS0FBd0I7RUFDOUNDLFFBQVEsRUFBRUoscUVBQVcsQ0FBQ0csS0FBSyxDQUFDRSxRQUFQLEVBQWlCLGlCQUFqQjtBQUR5QixDQUF4QixDQUF4Qjs7QUFJQSxNQUFNQyxvQkFBb0IsR0FBRyxNQUFPQyxFQUFQLElBQWlDcEIsK0RBQWEsR0FBR3FCLElBQWhCLENBQXFCLHVCQUFyQixFQUE4Q0QsRUFBOUMsQ0FBOUQ7O0FBRUEsTUFBTUUsb0JBQW9CLEdBQUcsT0FBT0MsRUFBUCxFQUFtQkgsRUFBbkIsS0FDM0JwQiwrREFBYSxHQUFHd0IsS0FBaEIsQ0FBdUIsd0JBQXVCRCxFQUFHLEVBQWpELEVBQW9ESCxFQUFwRCxDQURGOztBQUdPLE1BQU1LLG1DQUFtQyxHQUFHLENBQUM7RUFBRVI7QUFBRixDQUFELEtBQXNDO0VBQ3ZGLE1BQU0sQ0FBQ1MsV0FBRCxFQUFjQyxjQUFkLElBQWdDOUIsK0NBQVEsQ0FBUyxFQUFULENBQTlDO0VBQ0EsTUFBTSxDQUFDK0IsWUFBRCxFQUFlQyxlQUFmLElBQWtDaEMsK0NBQVEsQ0FBNEIsRUFBNUIsQ0FBaEQ7RUFDQSxNQUFNLENBQUNpQyxZQUFELEVBQWVDLGVBQWYsSUFBa0NsQywrQ0FBUSxDQUFTLEVBQVQsQ0FBaEQ7RUFFQSxNQUFNbUMsWUFBWSxHQUFHdEIsZ0VBQXJCO0VBQ0EsTUFBTSxDQUFDeUIsY0FBRCxFQUFpQkMsaUJBQWpCLElBQXNDdkMsK0NBQVEsQ0FBb0I7SUFDdEUwQixFQUFFLEVBQUUsQ0FEa0U7SUFFdEVXLEtBQUssRUFBRXhCLGdFQUYrRDtJQUd0RTJCLElBQUksRUFBRXpCLHFEQUhn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NkQsUUFBUSxFQUFFeUI7Y0FBdkU7WUFmSixFQVRGLHFDQTJCRSx3REFBQywrQ0FBRDtjQUFRLElBQUksRUFBQyxRQUFiO2NBQUE7WUFBQSxFQTNCRjtVQUFBLEVBREY7UUErQkQ7TUFqQ0gsRUFGRjtJQUFBO0VBREYsRUFERjtBQTBDRCxDQTFITTtBQTRIUCxpRUFBZWhFLG9EQUFPLENBQUNpQixlQUFELENBQVAsQ0FBeUJVLG1DQUF6QixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VydmljZWFjY291bnRzL1NlcnZpY2VBY2NvdW50Q3JlYXRlUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgVXNlclJvbGVQaWNrZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvVXNlclJvbGVQaWNrZXInO1xuaW1wb3J0IHsgZmV0Y2hCdWlsdGluUm9sZXMsIGZldGNoUm9sZU9wdGlvbnMsIHVwZGF0ZVVzZXJSb2xlcyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9hcGknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgT3JnUm9sZSwgUm9sZSwgU2VydmljZUFjY291bnRDcmVhdGVBcGlSZXNwb25zZSwgU2VydmljZUFjY291bnREVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBPcmdSb2xlUGlja2VyIH0gZnJvbSAnLi4vYWRtaW4vT3JnUm9sZVBpY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnc2VydmljZWFjY291bnRzJyksXG59KTtcblxuY29uc3QgY3JlYXRlU2VydmljZUFjY291bnQgPSBhc3luYyAoc2E6IFNlcnZpY2VBY2NvdW50RFRPKSA9PiBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9zZXJ2aWNlYWNjb3VudHMvJywgc2EpO1xuXG5jb25zdCB1cGRhdGVTZXJ2aWNlQWNjb3VudCA9IGFzeW5jIChpZDogbnVtYmVyLCBzYTogU2VydmljZUFjY291bnREVE8pID0+XG4gIGdldEJhY2tlbmRTcnYoKS5wYXRjaChgL2FwaS9zZXJ2aWNlYWNjb3VudHMvJHtpZH1gLCBzYSk7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlQWNjb3VudENyZWF0ZVBhZ2VVbmNvbm5lY3RlZCA9ICh7IG5hdk1vZGVsIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbcm9sZU9wdGlvbnMsIHNldFJvbGVPcHRpb25zXSA9IHVzZVN0YXRlPFJvbGVbXT4oW10pO1xuICBjb25zdCBbYnVpbHRpblJvbGVzLCBzZXRCdWlsdGluUm9sZXNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBSb2xlW10gfT4oe30pO1xuICBjb25zdCBbcGVuZGluZ1JvbGVzLCBzZXRQZW5kaW5nUm9sZXNdID0gdXNlU3RhdGU8Um9sZVtdPihbXSk7XG5cbiAgY29uc3QgY3VycmVudE9yZ0lkID0gY29udGV4dFNydi51c2VyLm9yZ0lkO1xuICBjb25zdCBbc2VydmljZUFjY291bnQsIHNldFNlcnZpY2VBY2NvdW50XSA9IHVzZVN0YXRlPFNlcnZpY2VBY2NvdW50RFRPPih7XG4gICAgaWQ6IDAsXG4gICAgb3JnSWQ6IGNvbnRleHRTcnYudXNlci5vcmdJZCxcbiAgICByb2xlOiBPcmdSb2xlLlZpZXdlcixcbiAgICB0b2tlbnM6IDAsXG4gICAgbmFtZTogJycsXG4gICAgbG9naW46ICcnLFxuICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAgIGNyZWF0ZWRBdDogJycsXG4gICAgdGVhbXM6IFtdLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoT3B0aW9ucygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25Sb2xlc0xpc3QpKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbnMgPSBhd2FpdCBmZXRjaFJvbGVPcHRpb25zKGN1cnJlbnRPcmdJZCk7XG4gICAgICAgICAgc2V0Um9sZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uQnVpbHRpblJvbGVzTGlzdCkpIHtcbiAgICAgICAgICBjb25zdCBidWlsdEluUm9sZXMgPSBhd2FpdCBmZXRjaEJ1aWx0aW5Sb2xlcyhjdXJyZW50T3JnSWQpO1xuICAgICAgICAgIHNldEJ1aWx0aW5Sb2xlcyhidWlsdEluUm9sZXMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgb3B0aW9ucycsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGZldGNoT3B0aW9ucygpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRPcmdJZF0pO1xuXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZGF0YTogU2VydmljZUFjY291bnREVE8pID0+IHtcbiAgICAgIGRhdGEucm9sZSA9IHNlcnZpY2VBY2NvdW50LnJvbGU7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyZWF0ZVNlcnZpY2VBY2NvdW50KGRhdGEpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudDogU2VydmljZUFjY291bnRDcmVhdGVBcGlSZXNwb25zZSA9IHtcbiAgICAgICAgICBhdmF0YXJVcmw6IHJlc3BvbnNlLmF2YXRhclVybCxcbiAgICAgICAgICBpZDogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogcmVzcG9uc2UuaXNEaXNhYmxlZCxcbiAgICAgICAgICBsb2dpbjogcmVzcG9uc2UubG9naW4sXG4gICAgICAgICAgbmFtZTogcmVzcG9uc2UubmFtZSxcbiAgICAgICAgICBvcmdJZDogcmVzcG9uc2Uub3JnSWQsXG4gICAgICAgICAgcm9sZTogcmVzcG9uc2Uucm9sZSxcbiAgICAgICAgICB0b2tlbnM6IHJlc3BvbnNlLnRva2VucyxcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgdXBkYXRlU2VydmljZUFjY291bnQocmVzcG9uc2UuaWQsIGRhdGEpO1xuICAgICAgICBpZiAoY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgICAgICBhd2FpdCB1cGRhdGVVc2VyUm9sZXMocGVuZGluZ1JvbGVzLCBuZXdBY2NvdW50LmlkLCBuZXdBY2NvdW50Lm9yZ0lkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgICAgaGlzdG9yeS5wdXNoKCcvb3JnL3NlcnZpY2VhY2NvdW50cy8nKTtcbiAgICB9LFxuICAgIFtoaXN0b3J5LCBzZXJ2aWNlQWNjb3VudC5yb2xlLCBwZW5kaW5nUm9sZXNdXG4gICk7XG5cbiAgY29uc3Qgb25Sb2xlQ2hhbmdlID0gKHJvbGU6IE9yZ1JvbGUpID0+IHtcbiAgICBzZXRTZXJ2aWNlQWNjb3VudCh7XG4gICAgICAuLi5zZXJ2aWNlQWNjb3VudCxcbiAgICAgIHJvbGU6IHJvbGUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25QZW5kaW5nUm9sZXNVcGRhdGUgPSAocm9sZXM6IFJvbGVbXSwgdXNlcklkOiBudW1iZXIsIG9yZ0lkOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHtcbiAgICAvLyBrZWVwIHRoZSBuZXcgcm9sZSBhc3NpZ25tZW50cyBmb3IgdXNlclxuICAgIHNldFBlbmRpbmdSb2xlcyhyb2xlcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxoMT5DcmVhdGUgc2VydmljZSBhY2NvdW50PC9oMT5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSB2YWxpZGF0ZU9uPVwib25TdWJtaXRcIj5cbiAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNwbGF5IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWUgPyAnRGlzcGxheSBuYW1lIGlzIHJlcXVpcmVkJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJkaXNwbGF5LW5hbWUtaW5wdXRcIiB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBhdXRvRm9jdXMgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlJvbGVcIj5cbiAgICAgICAgICAgICAgICAgIHtjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJSb2xlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkPXtzZXJ2aWNlQWNjb3VudC5pZCB8fCAwfVxuICAgICAgICAgICAgICAgICAgICAgIG9yZ0lkPXtzZXJ2aWNlQWNjb3VudC5vcmdJZH1cbiAgICAgICAgICAgICAgICAgICAgICBidWlsdEluUm9sZT17c2VydmljZUFjY291bnQucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICBidWlsdEluUm9sZXM9e2J1aWx0aW5Sb2xlc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkJ1aWx0aW5Sb2xlQ2hhbmdlPXtvblJvbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYnVpbHRpblJvbGVzRGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkFwcGx5Um9sZXM9e29uUGVuZGluZ1JvbGVzVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdSb2xlcz17cGVuZGluZ1JvbGVzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPE9yZ1JvbGVQaWNrZXIgYXJpYS1sYWJlbD1cIlJvbGVcIiB2YWx1ZT17c2VydmljZUFjY291bnQucm9sZX0gb25DaGFuZ2U9e29uUm9sZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VydmljZUFjY291bnRDcmVhdGVQYWdlVW5jb25uZWN0ZWQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJ1c2VIaXN0b3J5IiwiZ2V0QmFja2VuZFNydiIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIkZpZWxkIiwiUGFnZSIsIlVzZXJSb2xlUGlja2VyIiwiZmV0Y2hCdWlsdGluUm9sZXMiLCJmZXRjaFJvbGVPcHRpb25zIiwidXBkYXRlVXNlclJvbGVzIiwiY29udGV4dFNydiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJPcmdSb2xlIiwiZ2V0TmF2TW9kZWwiLCJPcmdSb2xlUGlja2VyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiY3JlYXRlU2VydmljZUFjY291bnQiLCJzYSIsInBvc3QiLCJ1cGRhdGVTZXJ2aWNlQWNjb3VudCIsImlkIiwicGF0Y2giLCJTZXJ2aWNlQWNjb3VudENyZWF0ZVBhZ2VVbmNvbm5lY3RlZCIsInJvbGVPcHRpb25zIiwic2V0Um9sZU9wdGlvbnMiLCJidWlsdGluUm9sZXMiLCJzZXRCdWlsdGluUm9sZXMiLCJwZW5kaW5nUm9sZXMiLCJzZXRQZW5kaW5nUm9sZXMiLCJjdXJyZW50T3JnSWQiLCJ1c2VyIiwib3JnSWQiLCJzZXJ2aWNlQWNjb3VudCIsInNldFNlcnZpY2VBY2NvdW50Iiwicm9sZSIsIlZpZXdlciIsInRva2VucyIsIm5hbWUiLCJsb2dpbiIsImlzRGlzYWJsZWQiLCJjcmVhdGVkQXQiLCJ0ZWFtcyIsImZldGNoT3B0aW9ucyIsImhhc1Blcm1pc3Npb24iLCJBY3Rpb25Sb2xlc0xpc3QiLCJvcHRpb25zIiwiQWN0aW9uQnVpbHRpblJvbGVzTGlzdCIsImJ1aWx0SW5Sb2xlcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkIiwiaGlzdG9yeSIsIm9uU3VibWl0IiwiZGF0YSIsInJlc3BvbnNlIiwibmV3QWNjb3VudCIsImF2YXRhclVybCIsInB1c2giLCJvblJvbGVDaGFuZ2UiLCJvblBlbmRpbmdSb2xlc1VwZGF0ZSIsInJvbGVzIiwidXNlcklkIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJ1bmRlZmluZWQiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=