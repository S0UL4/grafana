"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AdminEditOrgPage"],{

/***/ "./public/app/features/admin/AdminEditOrgPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminEditOrgPage)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _users_UsersTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/users/UsersTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Legend, _Legend2;

















const getOrg = async orgId => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get('/api/orgs/' + orgId);
};

const getOrgUsers = async orgId => {
  if (app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.OrgUsersRead)) {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get(`/api/orgs/${orgId}/users`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_8__.accessControlQueryParam)());
  }

  return [];
};

const updateOrgUserRole = async (orgUser, orgId) => {
  await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().patch('/api/orgs/' + orgId + '/users/' + orgUser.userId, orgUser);
};

const removeOrgUser = async (orgUser, orgId) => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().delete('/api/orgs/' + orgId + '/users/' + orgUser.userId);
};

function AdminEditOrgPage({
  match
}) {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.navIndex);
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__.getNavModel)(navIndex, 'global-orgs');
  const orgId = parseInt(match.params.id, 10);
  const canWriteOrg = app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.OrgsWrite);
  const canReadUsers = app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.OrgUsersRead);
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [orgState, fetchOrg] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => getOrg(orgId), []);
  const [, fetchOrgUsers] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => getOrgUsers(orgId), []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchOrg();
    fetchOrgUsers().then(res => setUsers(res));
  }, [fetchOrg, fetchOrgUsers]);

  const updateOrgName = async name => {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().put('/api/orgs/' + orgId, Object.assign({}, orgState.value, {
      name
    }));
  };

  const renderMissingUserListRightsMessage = () => {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      severity: "info",
      title: "Access denied",
      children: "You do not have permission to see users in this organization. To update this organization, contact your server administrator."
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
          children: "Edit organization"
        })), orgState.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Form, {
          defaultValues: {
            orgName: orgState.value.name
          },
          onSubmit: async values => await updateOrgName(values.orgName),
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
              label: "Name",
              invalid: !!errors.orgName,
              error: "Name is required",
              disabled: !canWriteOrg,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register('orgName', {
                required: true
              }), {
                id: "org-name-input"
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
              type: "submit",
              disabled: !canWriteOrg,
              children: "Update"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              margin-top: 20px;
            `,
          children: [_Legend2 || (_Legend2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
            children: "Organization users"
          })), !canReadUsers && renderMissingUserListRightsMessage(), canReadUsers && !!users.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_users_UsersTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
            users: users,
            orgId: orgId,
            onRoleChange: (role, orgUser) => {
              updateOrgUserRole(Object.assign({}, orgUser, {
                role
              }), orgId);
              setUsers(users.map(user => {
                if (orgUser.userId === user.userId) {
                  return Object.assign({}, orgUser, {
                    role
                  });
                }

                return user;
              }));
              fetchOrgUsers();
            },
            onRemoveUser: orgUser => {
              removeOrgUser(orgUser, orgId);
              setUsers(users.filter(user => orgUser.userId !== user.userId));
              fetchOrgUsers();
            }
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "./public/app/features/users/UsersTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3, _th4, _th5, _th6;












const UsersTable = props => {
  const {
    users,
    orgId,
    onRoleChange,
    onRemoveUser
  } = props;
  const [userToRemove, setUserToRemove] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [roleOptions, setRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [builtinRoles, setBuiltinRoles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchOptions() {
      try {
        if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionRolesList)) {
          let options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__.fetchRoleOptions)(orgId);
          setRoleOptions(options);
        }

        if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.accessControlBuiltInRoleAssignmentEnabled() && app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionBuiltinRolesList)) {
          const builtInRoles = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__.fetchBuiltinRoles)(orgId);
          setBuiltinRoles(builtInRoles);
        }
      } catch (e) {
        console.error('Error loading options');
      }
    }

    if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled()) {
      fetchOptions();
    }
  }, [orgId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
      className: "filter-table form-inline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Login"
          })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Email"
          })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Name"
          })), _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Seen"
          })), _th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Role"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            style: {
              width: '34px'
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
        children: users.map((user, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-2 text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                className: "filter-table__avatar",
                src: user.avatarUrl,
                alt: "User avatar"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.login,
                children: user.login
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.email,
                children: user.email
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.name,
                children: user.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-1",
              children: user.lastSeenAtAge
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-8",
              children: app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_2__.UserRolePicker, {
                userId: user.userId,
                orgId: orgId,
                builtInRole: user.role,
                onBuiltinRoleChange: newRole => onRoleChange(newRole, user),
                roleOptions: roleOptions,
                builtInRoles: builtinRoles,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.OrgUsersWrite, user)
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__.OrgRolePicker, {
                "aria-label": "Role",
                value: user.role,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.OrgUsersWrite, user),
                onChange: newRole => onRoleChange(newRole, user)
              })
            }), app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.OrgUsersRemove, user) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                size: "sm",
                variant: "destructive",
                onClick: () => {
                  setUserToRemove(user);
                },
                icon: "times",
                "aria-label": "Delete user"
              })
            })]
          }, `${user.userId}-${index}`);
        })
      })]
    }), Boolean(userToRemove) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
      body: `Are you sure you want to delete user ${userToRemove === null || userToRemove === void 0 ? void 0 : userToRemove.login}?`,
      confirmText: "Delete",
      title: "Delete",
      onDismiss: () => {
        setUserToRemove(null);
      },
      isOpen: true,
      onConfirm: () => {
        if (!userToRemove) {
          return;
        }

        onRemoveUser(userToRemove);
        setUserToRemove(null);
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersTable);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5FZGl0T3JnUGFnZS5hY2VlYzA2YjA2YTA4OWY4ZWExMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQU1BLE1BQU1tQixNQUFNLEdBQUcsTUFBT0MsS0FBUCxJQUFnQztFQUM3QyxPQUFPLE1BQU1kLCtEQUFhLEdBQUdlLEdBQWhCLENBQW9CLGVBQWVELEtBQW5DLENBQWI7QUFDRCxDQUZEOztBQUlBLE1BQU1FLFdBQVcsR0FBRyxNQUFPRixLQUFQLElBQWdDO0VBQ2xELElBQUlOLG1FQUFBLENBQXlCRyx1RUFBekIsQ0FBSixFQUFnRTtJQUM5RCxPQUFPLE1BQU1YLCtEQUFhLEdBQUdlLEdBQWhCLENBQXFCLGFBQVlELEtBQU0sUUFBdkMsRUFBZ0RKLHFGQUF1QixFQUF2RSxDQUFiO0VBQ0Q7O0VBQ0QsT0FBTyxFQUFQO0FBQ0QsQ0FMRDs7QUFPQSxNQUFNUyxpQkFBaUIsR0FBRyxPQUFPQyxPQUFQLEVBQXlCTixLQUF6QixLQUFrRDtFQUMxRSxNQUFNZCwrREFBYSxHQUFHcUIsS0FBaEIsQ0FBc0IsZUFBZVAsS0FBZixHQUF1QixTQUF2QixHQUFtQ00sT0FBTyxDQUFDRSxNQUFqRSxFQUF5RUYsT0FBekUsQ0FBTjtBQUNELENBRkQ7O0FBSUEsTUFBTUcsYUFBYSxHQUFHLE9BQU9ILE9BQVAsRUFBeUJOLEtBQXpCLEtBQWtEO0VBQ3RFLE9BQU8sTUFBTWQsK0RBQWEsR0FBR3dCLE1BQWhCLENBQXVCLGVBQWVWLEtBQWYsR0FBdUIsU0FBdkIsR0FBbUNNLE9BQU8sQ0FBQ0UsTUFBbEUsQ0FBYjtBQUNELENBRkQ7O0FBTWUsU0FBU0csZ0JBQVQsQ0FBMEI7RUFBRUM7QUFBRixDQUExQixFQUE0QztFQUN6RCxNQUFNQyxRQUFRLEdBQUc3Qix3REFBVyxDQUFFOEIsS0FBRCxJQUF1QkEsS0FBSyxDQUFDRCxRQUE5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aElEOztBQWtJQSxpRUFBZXZELFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi9BZG1pbkVkaXRPcmdQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy91c2Vycy9Vc2Vyc1RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUFzeW5jRm4gfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBVcmxRdWVyeVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBGb3JtLCBGaWVsZCwgSW5wdXQsIEJ1dHRvbiwgTGVnZW5kLCBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSwgT3JnVXNlciwgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCBVc2Vyc1RhYmxlIGZyb20gJy4uL3VzZXJzL1VzZXJzVGFibGUnO1xuXG5pbnRlcmZhY2UgT3JnTmFtZURUTyB7XG4gIG9yZ05hbWU6IHN0cmluZztcbn1cblxuY29uc3QgZ2V0T3JnID0gYXN5bmMgKG9yZ0lkOiBVcmxRdWVyeVZhbHVlKSA9PiB7XG4gIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL29yZ3MvJyArIG9yZ0lkKTtcbn07XG5cbmNvbnN0IGdldE9yZ1VzZXJzID0gYXN5bmMgKG9yZ0lkOiBVcmxRdWVyeVZhbHVlKSA9PiB7XG4gIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JlYWQpKSB7XG4gICAgcmV0dXJuIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvb3Jncy8ke29yZ0lkfS91c2Vyc2AsIGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCkpO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5cbmNvbnN0IHVwZGF0ZU9yZ1VzZXJSb2xlID0gYXN5bmMgKG9yZ1VzZXI6IE9yZ1VzZXIsIG9yZ0lkOiBVcmxRdWVyeVZhbHVlKSA9PiB7XG4gIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wYXRjaCgnL2FwaS9vcmdzLycgKyBvcmdJZCArICcvdXNlcnMvJyArIG9yZ1VzZXIudXNlcklkLCBvcmdVc2VyKTtcbn07XG5cbmNvbnN0IHJlbW92ZU9yZ1VzZXIgPSBhc3luYyAob3JnVXNlcjogT3JnVXNlciwgb3JnSWQ6IFVybFF1ZXJ5VmFsdWUpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoJy9hcGkvb3Jncy8nICsgb3JnSWQgKyAnL3VzZXJzLycgKyBvcmdVc2VyLnVzZXJJZCk7XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IGlkOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5FZGl0T3JnUGFnZSh7IG1hdGNoIH06IFByb3BzKSB7XG4gIGNvbnN0IG5hdkluZGV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCk7XG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwobmF2SW5kZXgsICdnbG9iYWwtb3JncycpO1xuICBjb25zdCBvcmdJZCA9IHBhcnNlSW50KG1hdGNoLnBhcmFtcy5pZCwgMTApO1xuICBjb25zdCBjYW5Xcml0ZU9yZyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ3NXcml0ZSk7XG4gIGNvbnN0IGNhblJlYWRVc2VycyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ1VzZXJzUmVhZCk7XG5cbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZTxPcmdVc2VyW10+KFtdKTtcblxuICBjb25zdCBbb3JnU3RhdGUsIGZldGNoT3JnXSA9IHVzZUFzeW5jRm4oKCkgPT4gZ2V0T3JnKG9yZ0lkKSwgW10pO1xuICBjb25zdCBbLCBmZXRjaE9yZ1VzZXJzXSA9IHVzZUFzeW5jRm4oKCkgPT4gZ2V0T3JnVXNlcnMob3JnSWQpLCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaE9yZygpO1xuICAgIGZldGNoT3JnVXNlcnMoKS50aGVuKChyZXMpID0+IHNldFVzZXJzKHJlcykpO1xuICB9LCBbZmV0Y2hPcmcsIGZldGNoT3JnVXNlcnNdKTtcblxuICBjb25zdCB1cGRhdGVPcmdOYW1lID0gYXN5bmMgKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KCcvYXBpL29yZ3MvJyArIG9yZ0lkLCB7IC4uLm9yZ1N0YXRlLnZhbHVlLCBuYW1lIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1pc3NpbmdVc2VyTGlzdFJpZ2h0c01lc3NhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIkFjY2VzcyBkZW5pZWRcIj5cbiAgICAgICAgWW91IGRvIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gc2VlIHVzZXJzIGluIHRoaXMgb3JnYW5pemF0aW9uLiBUbyB1cGRhdGUgdGhpcyBvcmdhbml6YXRpb24sIGNvbnRhY3QgeW91ciBzZXJ2ZXJcbiAgICAgICAgYWRtaW5pc3RyYXRvci5cbiAgICAgIDwvQWxlcnQ+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8TGVnZW5kPkVkaXQgb3JnYW5pemF0aW9uPC9MZWdlbmQ+XG4gICAgICAgICAge29yZ1N0YXRlLnZhbHVlICYmIChcbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e3sgb3JnTmFtZTogb3JnU3RhdGUudmFsdWUubmFtZSB9fVxuICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlczogT3JnTmFtZURUTykgPT4gYXdhaXQgdXBkYXRlT3JnTmFtZSh2YWx1ZXMub3JnTmFtZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm9yZ05hbWV9IGVycm9yPVwiTmFtZSBpcyByZXF1aXJlZFwiIGRpc2FibGVkPXshY2FuV3JpdGVPcmd9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCdvcmdOYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX0gaWQ9XCJvcmctbmFtZS1pbnB1dFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFjYW5Xcml0ZU9yZ30+XG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzYFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGVnZW5kPk9yZ2FuaXphdGlvbiB1c2VyczwvTGVnZW5kPlxuICAgICAgICAgICAgeyFjYW5SZWFkVXNlcnMgJiYgcmVuZGVyTWlzc2luZ1VzZXJMaXN0UmlnaHRzTWVzc2FnZSgpfVxuICAgICAgICAgICAge2NhblJlYWRVc2VycyAmJiAhIXVzZXJzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgIDxVc2Vyc1RhYmxlXG4gICAgICAgICAgICAgICAgdXNlcnM9e3VzZXJzfVxuICAgICAgICAgICAgICAgIG9yZ0lkPXtvcmdJZH1cbiAgICAgICAgICAgICAgICBvblJvbGVDaGFuZ2U9eyhyb2xlLCBvcmdVc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVPcmdVc2VyUm9sZSh7IC4uLm9yZ1VzZXIsIHJvbGUgfSwgb3JnSWQpO1xuICAgICAgICAgICAgICAgICAgc2V0VXNlcnMoXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmdVc2VyLnVzZXJJZCA9PT0gdXNlci51c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLm9yZ1VzZXIsIHJvbGUgfTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgZmV0Y2hPcmdVc2VycygpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25SZW1vdmVVc2VyPXsob3JnVXNlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgcmVtb3ZlT3JnVXNlcihvcmdVc2VyLCBvcmdJZCk7XG4gICAgICAgICAgICAgICAgICBzZXRVc2Vycyh1c2Vycy5maWx0ZXIoKHVzZXIpID0+IG9yZ1VzZXIudXNlcklkICE9PSB1c2VyLnVzZXJJZCkpO1xuICAgICAgICAgICAgICAgICAgZmV0Y2hPcmdVc2VycygpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE9yZ1JvbGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29uZmlybU1vZGFsIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgVXNlclJvbGVQaWNrZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvVXNlclJvbGVQaWNrZXInO1xuaW1wb3J0IHsgZmV0Y2hCdWlsdGluUm9sZXMsIGZldGNoUm9sZU9wdGlvbnMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvYXBpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIE9yZ1VzZXIsIFJvbGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBPcmdSb2xlUGlja2VyIH0gZnJvbSAnLi4vYWRtaW4vT3JnUm9sZVBpY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB1c2VyczogT3JnVXNlcltdO1xuICBvcmdJZD86IG51bWJlcjtcbiAgb25Sb2xlQ2hhbmdlOiAocm9sZTogT3JnUm9sZSwgdXNlcjogT3JnVXNlcikgPT4gdm9pZDtcbiAgb25SZW1vdmVVc2VyOiAodXNlcjogT3JnVXNlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgVXNlcnNUYWJsZTogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdXNlcnMsIG9yZ0lkLCBvblJvbGVDaGFuZ2UsIG9uUmVtb3ZlVXNlciB9ID0gcHJvcHM7XG4gIGNvbnN0IFt1c2VyVG9SZW1vdmUsIHNldFVzZXJUb1JlbW92ZV0gPSB1c2VTdGF0ZTxPcmdVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtyb2xlT3B0aW9ucywgc2V0Um9sZU9wdGlvbnNdID0gdXNlU3RhdGU8Um9sZVtdPihbXSk7XG4gIGNvbnN0IFtidWlsdGluUm9sZXMsIHNldEJ1aWx0aW5Sb2xlc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IFJvbGVbXSB9Pih7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaE9wdGlvbnMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uUm9sZXNMaXN0KSkge1xuICAgICAgICAgIGxldCBvcHRpb25zID0gYXdhaXQgZmV0Y2hSb2xlT3B0aW9ucyhvcmdJZCk7XG4gICAgICAgICAgc2V0Um9sZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgY29udGV4dFNydi5hY2Nlc3NDb250cm9sQnVpbHRJblJvbGVBc3NpZ25tZW50RW5hYmxlZCgpICYmXG4gICAgICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uQnVpbHRpblJvbGVzTGlzdClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYnVpbHRJblJvbGVzID0gYXdhaXQgZmV0Y2hCdWlsdGluUm9sZXMob3JnSWQpO1xuICAgICAgICAgIHNldEJ1aWx0aW5Sb2xlcyhidWlsdEluUm9sZXMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgb3B0aW9ucycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGZldGNoT3B0aW9ucygpO1xuICAgIH1cbiAgfSwgW29yZ0lkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgICA8dGg+TG9naW48L3RoPlxuICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5TZWVuPC90aD5cbiAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzM0cHgnIH19IC8+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtgJHt1c2VyLnVzZXJJZH0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVfX2F2YXRhclwiIHNyYz17dXNlci5hdmF0YXJVcmx9IGFsdD1cIlVzZXIgYXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtYXgtd2lkdGgtNlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiB0aXRsZT17dXNlci5sb2dpbn0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmxvZ2lufVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWF4LXdpZHRoLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgdGl0bGU9e3VzZXIuZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtYXgtd2lkdGgtNVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiB0aXRsZT17dXNlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC0xXCI+e3VzZXIubGFzdFNlZW5BdEFnZX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLThcIj5cbiAgICAgICAgICAgICAgICAgIHtjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJSb2xlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkPXt1c2VyLnVzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgICBvcmdJZD17b3JnSWR9XG4gICAgICAgICAgICAgICAgICAgICAgYnVpbHRJblJvbGU9e3VzZXIucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJ1aWx0aW5Sb2xlQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICBidWlsdEluUm9sZXM9e2J1aWx0aW5Sb2xlc31cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1dyaXRlLCB1c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxPcmdSb2xlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3JnVXNlcnNXcml0ZSwgdXNlcil9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdSb2xlKSA9PiBvblJvbGVDaGFuZ2UobmV3Um9sZSwgdXNlcil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICB7Y29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ1VzZXJzUmVtb3ZlLCB1c2VyKSAmJiAoXG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlclRvUmVtb3ZlKHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIHVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICB7Qm9vbGVhbih1c2VyVG9SZW1vdmUpICYmIChcbiAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgIGJvZHk9e2BBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHVzZXIgJHt1c2VyVG9SZW1vdmU/LmxvZ2lufT9gfVxuICAgICAgICAgIGNvbmZpcm1UZXh0PVwiRGVsZXRlXCJcbiAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRVc2VyVG9SZW1vdmUobnVsbCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXVzZXJUb1JlbW92ZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvblJlbW92ZVVzZXIodXNlclRvUmVtb3ZlKTtcbiAgICAgICAgICAgIHNldFVzZXJUb1JlbW92ZShudWxsKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzVGFibGU7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlQXN5bmNGbiIsImdldEJhY2tlbmRTcnYiLCJGb3JtIiwiRmllbGQiLCJJbnB1dCIsIkJ1dHRvbiIsIkxlZ2VuZCIsIkFsZXJ0IiwiUGFnZSIsImNvbnRleHRTcnYiLCJnZXROYXZNb2RlbCIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsIlVzZXJzVGFibGUiLCJnZXRPcmciLCJvcmdJZCIsImdldCIsImdldE9yZ1VzZXJzIiwiaGFzUGVybWlzc2lvbiIsIk9yZ1VzZXJzUmVhZCIsInVwZGF0ZU9yZ1VzZXJSb2xlIiwib3JnVXNlciIsInBhdGNoIiwidXNlcklkIiwicmVtb3ZlT3JnVXNlciIsImRlbGV0ZSIsIkFkbWluRWRpdE9yZ1BhZ2UiLCJtYXRjaCIsIm5hdkluZGV4Iiwic3RhdGUiLCJuYXZNb2RlbCIsInBhcnNlSW50IiwicGFyYW1zIiwiaWQiLCJjYW5Xcml0ZU9yZyIsIk9yZ3NXcml0ZSIsImNhblJlYWRVc2VycyIsInVzZXJzIiwic2V0VXNlcnMiLCJvcmdTdGF0ZSIsImZldGNoT3JnIiwiZmV0Y2hPcmdVc2VycyIsInRoZW4iLCJyZXMiLCJ1cGRhdGVPcmdOYW1lIiwibmFtZSIsInB1dCIsInZhbHVlIiwicmVuZGVyTWlzc2luZ1VzZXJMaXN0UmlnaHRzTWVzc2FnZSIsIm9yZ05hbWUiLCJ2YWx1ZXMiLCJyZWdpc3RlciIsImVycm9ycyIsInJlcXVpcmVkIiwibGVuZ3RoIiwicm9sZSIsIm1hcCIsInVzZXIiLCJmaWx0ZXIiLCJDb25maXJtTW9kYWwiLCJVc2VyUm9sZVBpY2tlciIsImZldGNoQnVpbHRpblJvbGVzIiwiZmV0Y2hSb2xlT3B0aW9ucyIsIk9yZ1JvbGVQaWNrZXIiLCJwcm9wcyIsIm9uUm9sZUNoYW5nZSIsIm9uUmVtb3ZlVXNlciIsInVzZXJUb1JlbW92ZSIsInNldFVzZXJUb1JlbW92ZSIsInJvbGVPcHRpb25zIiwic2V0Um9sZU9wdGlvbnMiLCJidWlsdGluUm9sZXMiLCJzZXRCdWlsdGluUm9sZXMiLCJmZXRjaE9wdGlvbnMiLCJBY3Rpb25Sb2xlc0xpc3QiLCJvcHRpb25zIiwiYWNjZXNzQ29udHJvbEJ1aWx0SW5Sb2xlQXNzaWdubWVudEVuYWJsZWQiLCJBY3Rpb25CdWlsdGluUm9sZXNMaXN0IiwiYnVpbHRJblJvbGVzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQiLCJ3aWR0aCIsImluZGV4IiwiYXZhdGFyVXJsIiwibG9naW4iLCJlbWFpbCIsImxhc3RTZWVuQXRBZ2UiLCJuZXdSb2xlIiwiaGFzUGVybWlzc2lvbkluTWV0YWRhdGEiLCJPcmdVc2Vyc1dyaXRlIiwiT3JnVXNlcnNSZW1vdmUiLCJCb29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==