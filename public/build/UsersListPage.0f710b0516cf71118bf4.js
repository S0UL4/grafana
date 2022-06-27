"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UsersListPage"],{

/***/ "./public/app/features/invites/InviteeRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/invites/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const mapDispatchToProps = {
  revokeInvite: _state_actions__WEBPACK_IMPORTED_MODULE_3__.revokeInvite
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps);

class InviteeRow extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      invitee,
      revokeInvite
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        children: invitee.email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        children: invitee.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
        className: "text-right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ClipboardButton, {
          variant: "secondary",
          size: "sm",
          getText: () => invitee.url,
          children: "Copy Invite"
        }), "\xA0"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "destructive",
          size: "sm",
          icon: "times",
          onClick: () => revokeInvite(invitee.code),
          "aria-label": "Revoke Invite"
        })
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(InviteeRow));

/***/ }),

/***/ "./public/app/features/invites/InviteesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InviteesTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _InviteeRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/invites/InviteeRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3;





class InviteesTable extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      invitees
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
      className: "filter-table form-inline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Email"
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Name"
          })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            style: {
              width: '34px'
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
        "data-testid": "InviteesTable-body",
        children: invitees.map((invitee, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InviteeRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
            invitee: invitee
          }, `${invitee.id}-${index}`);
        })
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/features/invites/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectById": () => (/* binding */ selectById),
/* harmony export */   "selectInvitesMatchingQuery": () => (/* binding */ selectInvitesMatchingQuery),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/invites/state/reducers.ts");


const {
  selectAll,
  selectById,
  selectTotal
} = _reducers__WEBPACK_IMPORTED_MODULE_0__.selectors;

const selectQuery = (_, query) => query;

const selectInvitesMatchingQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)([selectAll, selectQuery], (invites, searchQuery) => {
  const regex = new RegExp(searchQuery, 'i');
  const matches = invites.filter(invite => regex.test(invite.name) || regex.test(invite.email));
  return matches;
});

/***/ }),

/***/ "./public/app/features/users/UsersActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersActionBar": () => (/* binding */ UsersActionBar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _invites_state_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/invites/state/selectors.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/users/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/users/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LinkButton;











class UsersActionBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      canInvite,
      externalUserMngLinkName,
      externalUserMngLinkUrl,
      searchQuery,
      pendingInvitesCount,
      setUsersSearchQuery,
      onShowInvites,
      showInvites
    } = this.props;
    const options = [{
      label: 'Users',
      value: 'users'
    }, {
      label: `Pending Invites (${pendingInvitesCount})`,
      value: 'invites'
    }];
    const canAddToOrg = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.UsersCreate, canInvite);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "page-action-bar",
      "data-testid": "users-action-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
          value: searchQuery,
          onChange: setUsersSearchQuery,
          placeholder: "Search user by login, email or name"
        })
      }), pendingInvitesCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        style: {
          marginLeft: '1rem'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
          value: showInvites ? 'invites' : 'users',
          options: options,
          onChange: onShowInvites
        })
      }), canAddToOrg && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        href: "org/users/invite",
        children: "Invite"
      }))), externalUserMngLinkUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        href: externalUserMngLinkUrl,
        target: "_blank",
        rel: "noopener",
        children: externalUserMngLinkName
      })]
    });
  }

}

function mapStateToProps(state) {
  return {
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getUsersSearchQuery)(state.users),
    pendingInvitesCount: (0,_invites_state_selectors__WEBPACK_IMPORTED_MODULE_5__.selectTotal)(state.invites),
    externalUserMngLinkName: state.users.externalUserMngLinkName,
    externalUserMngLinkUrl: state.users.externalUserMngLinkUrl,
    canInvite: state.users.canInvite
  };
}

const mapDispatchToProps = {
  setUsersSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_6__.setUsersSearchQuery
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(UsersActionBar));

/***/ }),

/***/ "./public/app/features/users/UsersListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListPage": () => (/* binding */ UsersListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _invites_InviteesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/invites/InviteesTable.tsx");
/* harmony import */ var _invites_state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/invites/state/actions.ts");
/* harmony import */ var _invites_state_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/invites/state/selectors.ts");
/* harmony import */ var _UsersActionBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/users/UsersActionBar.tsx");
/* harmony import */ var _UsersTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/users/UsersTable.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/users/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/users/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/users/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function mapStateToProps(state) {
  const searchQuery = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_14__.getUsersSearchQuery)(state.users);
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'users'),
    users: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_14__.getUsers)(state.users),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_14__.getUsersSearchQuery)(state.users),
    searchPage: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_14__.getUsersSearchPage)(state.users),
    invitees: (0,_invites_state_selectors__WEBPACK_IMPORTED_MODULE_9__.selectInvitesMatchingQuery)(state.invites, searchQuery),
    externalUserMngInfo: state.users.externalUserMngInfo,
    hasFetched: state.users.hasFetched
  };
}

const mapDispatchToProps = {
  loadUsers: _state_actions__WEBPACK_IMPORTED_MODULE_12__.loadUsers,
  fetchInvitees: _invites_state_actions__WEBPACK_IMPORTED_MODULE_8__.fetchInvitees,
  setUsersSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_13__.setUsersSearchQuery,
  setUsersSearchPage: _state_reducers__WEBPACK_IMPORTED_MODULE_13__.setUsersSearchPage,
  updateUser: _state_actions__WEBPACK_IMPORTED_MODULE_12__.updateUser,
  removeUser: _state_actions__WEBPACK_IMPORTED_MODULE_12__.removeUser
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const pageLimit = 30;
class UsersListPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onRoleChange", (role, user) => {
      const updatedUser = Object.assign({}, user, {
        role: role
      });
      this.props.updateUser(updatedUser);
    });

    _defineProperty(this, "onShowInvites", () => {
      this.setState(prevState => ({
        showInvites: !prevState.showInvites
      }));
    });

    _defineProperty(this, "getPaginatedUsers", users => {
      const offset = (this.props.searchPage - 1) * pageLimit;
      return users.slice(offset, offset + pageLimit);
    });

    if (this.props.externalUserMngInfo) {
      this.externalUserMngInfoHtml = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.renderMarkdown)(this.props.externalUserMngInfo);
    }

    this.state = {
      showInvites: false
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchInvitees();
  }

  async fetchUsers() {
    return await this.props.loadUsers();
  }

  async fetchInvitees() {
    return await this.props.fetchInvitees();
  }

  renderTable() {
    const {
      invitees,
      users,
      setUsersSearchPage
    } = this.props;
    const paginatedUsers = this.getPaginatedUsers(users);
    const totalPages = Math.ceil(users.length / pageLimit);

    if (this.state.showInvites) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_invites_InviteesTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
        invitees: invitees
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
        spacing: "md",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_UsersTable__WEBPACK_IMPORTED_MODULE_11__["default"], {
          users: paginatedUsers,
          orgId: app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.user.orgId,
          onRoleChange: (role, user) => this.onRoleChange(role, user),
          onRemoveUser: user => this.props.removeUser(user.userId)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          justify: "flex-end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
            onNavigate: setUsersSearchPage,
            currentPage: this.props.searchPage,
            numberOfPages: totalPages,
            hideWhenSinglePage: true
          })
        })]
      });
    }
  }

  render() {
    const {
      navModel,
      hasFetched
    } = this.props;
    const externalUserMngInfoHtml = this.externalUserMngInfoHtml;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        isLoading: !hasFetched,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_UsersActionBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
            onShowInvites: this.onShowInvites,
            showInvites: this.state.showInvites
          }), externalUserMngInfoHtml && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
            className: "grafana-info-box",
            dangerouslySetInnerHTML: {
              __html: externalUserMngInfoHtml
            }
          }), hasFetched && this.renderTable()]
        })
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UsersListPage));

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

/***/ }),

/***/ "./public/app/features/users/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUsers": () => (/* binding */ loadUsers),
/* harmony export */   "removeUser": () => (/* binding */ removeUser),
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/users/state/reducers.ts");



function loadUsers() {
  return async dispatch => {
    const users = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/org/users', (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_1__.accessControlQueryParam)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.usersLoaded)(users));
  };
}
function updateUser(user) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().patch(`/api/org/users/${user.userId}`, {
      role: user.role
    });
    dispatch(loadUsers());
  };
}
function removeUser(userId) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/org/users/${userId}`);
    dispatch(loadUsers());
  };
}

/***/ }),

/***/ "./public/app/features/users/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "getUsersSearchPage": () => (/* binding */ getUsersSearchPage),
/* harmony export */   "getUsersSearchQuery": () => (/* binding */ getUsersSearchQuery)
/* harmony export */ });
const getUsers = state => {
  const regex = new RegExp(state.searchQuery, 'i');
  return state.users.filter(user => {
    return regex.test(user.login) || regex.test(user.email) || regex.test(user.name);
  });
};
const getUsersSearchQuery = state => state.searchQuery;
const getUsersSearchPage = state => state.searchPage;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sTUFBT3FDLFFBQVAsSUFBb0I7SUFDekIsTUFBTUgsK0RBQWEsR0FBR00sTUFBaEIsQ0FBd0Isa0JBQWlCeEMsTUFBTyxFQUFoRCxDQUFOO0lBQ0FxQyxRQUFRLENBQUN0RSxTQUFTLEVBQVYsQ0FBUjtFQUNELENBSEQ7QUFJRDs7Ozs7Ozs7Ozs7OztBQ3pCTSxNQUFNSSxRQUFRLEdBQUlkLEtBQUQsSUFBdUI7RUFDN0MsTUFBTTVCLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcyQixLQUFLLENBQUM3QixXQUFqQixFQUE4QixHQUE5QixDQUFkO0VBRUEsT0FBTzZCLEtBQUssQ0FBQ0MsS0FBTixDQUFZMUIsTUFBWixDQUFvQmtELElBQUQsSUFBVTtJQUNsQyxPQUFPckQsS0FBSyxDQUFDSyxJQUFOLENBQVdnRCxJQUFJLENBQUM2QyxLQUFoQixLQUEwQmxHLEtBQUssQ0FBQ0ssSUFBTixDQUFXZ0QsSUFBSSxDQUFDMUUsS0FBaEIsQ0FBMUIsSUFBb0RxQixLQUFLLENBQUNLLElBQU4sQ0FBV2dELElBQUksQ0FBQ3pFLElBQWhCLENBQTNEO0VBQ0QsQ0FGTSxDQUFQO0FBR0QsQ0FOTTtBQVFBLE1BQU1nQyxtQkFBbUIsR0FBSWdCLEtBQUQsSUFBdUJBLEtBQUssQ0FBQzdCLFdBQXpEO0FBQ0EsTUFBTTRDLGtCQUFrQixHQUFJZixLQUFELElBQXVCQSxLQUFLLENBQUNrQixVQUF4RCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2ludml0ZXMvSW52aXRlZVJvdy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvaW52aXRlcy9JbnZpdGVlc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9pbnZpdGVzL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy91c2Vycy9Vc2Vyc0FjdGlvbkJhci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdXNlcnMvVXNlcnNMaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdXNlcnMvVXNlcnNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdXNlcnMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy91c2Vycy9zdGF0ZS9zZWxlY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgQnV0dG9uLCBDbGlwYm9hcmRCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBJbnZpdGVlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgcmV2b2tlSW52aXRlIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICByZXZva2VJbnZpdGUsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyB7XG4gIGludml0ZWU6IEludml0ZWU7XG59XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuY2xhc3MgSW52aXRlZVJvdyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW52aXRlZSwgcmV2b2tlSW52aXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD57aW52aXRlZS5lbWFpbH08L3RkPlxuICAgICAgICA8dGQ+e2ludml0ZWUubmFtZX08L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxDbGlwYm9hcmRCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIGdldFRleHQ9eygpID0+IGludml0ZWUudXJsfT5cbiAgICAgICAgICAgIENvcHkgSW52aXRlXG4gICAgICAgICAgPC9DbGlwYm9hcmRCdXR0b24+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIGljb249XCJ0aW1lc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXZva2VJbnZpdGUoaW52aXRlZS5jb2RlKX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZXZva2UgSW52aXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihJbnZpdGVlUm93KTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbnZpdGVlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IEludml0ZWVSb3cgZnJvbSAnLi9JbnZpdGVlUm93JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGludml0ZWVzOiBJbnZpdGVlW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludml0ZWVzVGFibGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGludml0ZWVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGUgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzM0cHgnIH19IC8+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IGRhdGEtdGVzdGlkPVwiSW52aXRlZXNUYWJsZS1ib2R5XCI+XG4gICAgICAgICAge2ludml0ZWVzLm1hcCgoaW52aXRlZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8SW52aXRlZVJvdyBrZXk9e2Ake2ludml0ZWUuaWR9LSR7aW5kZXh9YH0gaW52aXRlZT17aW52aXRlZX0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgY29uc3QgeyBzZWxlY3RBbGwsIHNlbGVjdEJ5SWQsIHNlbGVjdFRvdGFsIH0gPSBzZWxlY3RvcnM7XG5cbmNvbnN0IHNlbGVjdFF1ZXJ5ID0gKF86IGFueSwgcXVlcnk6IHN0cmluZykgPT4gcXVlcnk7XG5leHBvcnQgY29uc3Qgc2VsZWN0SW52aXRlc01hdGNoaW5nUXVlcnkgPSBjcmVhdGVTZWxlY3Rvcihbc2VsZWN0QWxsLCBzZWxlY3RRdWVyeV0sIChpbnZpdGVzLCBzZWFyY2hRdWVyeSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoUXVlcnksICdpJyk7XG4gIGNvbnN0IG1hdGNoZXMgPSBpbnZpdGVzLmZpbHRlcigoaW52aXRlKSA9PiByZWdleC50ZXN0KGludml0ZS5uYW1lKSB8fCByZWdleC50ZXN0KGludml0ZS5lbWFpbCkpO1xuICByZXR1cm4gbWF0Y2hlcztcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBSYWRpb0J1dHRvbkdyb3VwLCBMaW5rQnV0dG9uLCBGaWx0ZXJJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBzZWxlY3RUb3RhbCB9IGZyb20gJy4uL2ludml0ZXMvc3RhdGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgc2V0VXNlcnNTZWFyY2hRdWVyeSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0VXNlcnNTZWFyY2hRdWVyeSB9IGZyb20gJy4vc3RhdGUvc2VsZWN0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XG4gIHNldFVzZXJzU2VhcmNoUXVlcnk6IHR5cGVvZiBzZXRVc2Vyc1NlYXJjaFF1ZXJ5O1xuICBvblNob3dJbnZpdGVzOiAoKSA9PiB2b2lkO1xuICBwZW5kaW5nSW52aXRlc0NvdW50OiBudW1iZXI7XG4gIGNhbkludml0ZTogYm9vbGVhbjtcbiAgc2hvd0ludml0ZXM6IGJvb2xlYW47XG4gIGV4dGVybmFsVXNlck1uZ0xpbmtVcmw6IHN0cmluZztcbiAgZXh0ZXJuYWxVc2VyTW5nTGlua05hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJzQWN0aW9uQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FuSW52aXRlLFxuICAgICAgZXh0ZXJuYWxVc2VyTW5nTGlua05hbWUsXG4gICAgICBleHRlcm5hbFVzZXJNbmdMaW5rVXJsLFxuICAgICAgc2VhcmNoUXVlcnksXG4gICAgICBwZW5kaW5nSW52aXRlc0NvdW50LFxuICAgICAgc2V0VXNlcnNTZWFyY2hRdWVyeSxcbiAgICAgIG9uU2hvd0ludml0ZXMsXG4gICAgICBzaG93SW52aXRlcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgeyBsYWJlbDogJ1VzZXJzJywgdmFsdWU6ICd1c2VycycgfSxcbiAgICAgIHsgbGFiZWw6IGBQZW5kaW5nIEludml0ZXMgKCR7cGVuZGluZ0ludml0ZXNDb3VudH0pYCwgdmFsdWU6ICdpbnZpdGVzJyB9LFxuICAgIF07XG4gICAgY29uc3QgY2FuQWRkVG9PcmcgPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLlVzZXJzQ3JlYXRlLCBjYW5JbnZpdGUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCIgZGF0YS10ZXN0aWQ9XCJ1c2Vycy1hY3Rpb24tYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgPEZpbHRlcklucHV0XG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0VXNlcnNTZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHVzZXIgYnkgbG9naW4sIGVtYWlsIG9yIG5hbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cGVuZGluZ0ludml0ZXNDb3VudCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzFyZW0nIH19PlxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXAgdmFsdWU9e3Nob3dJbnZpdGVzID8gJ2ludml0ZXMnIDogJ3VzZXJzJ30gb3B0aW9ucz17b3B0aW9uc30gb25DaGFuZ2U9e29uU2hvd0ludml0ZXN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjYW5BZGRUb09yZyAmJiA8TGlua0J1dHRvbiBocmVmPVwib3JnL3VzZXJzL2ludml0ZVwiPkludml0ZTwvTGlua0J1dHRvbj59XG4gICAgICAgIHtleHRlcm5hbFVzZXJNbmdMaW5rVXJsICYmIChcbiAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXtleHRlcm5hbFVzZXJNbmdMaW5rVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICAge2V4dGVybmFsVXNlck1uZ0xpbmtOYW1lfVxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBhbnkpIHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hRdWVyeTogZ2V0VXNlcnNTZWFyY2hRdWVyeShzdGF0ZS51c2VycyksXG4gICAgcGVuZGluZ0ludml0ZXNDb3VudDogc2VsZWN0VG90YWwoc3RhdGUuaW52aXRlcyksXG4gICAgZXh0ZXJuYWxVc2VyTW5nTGlua05hbWU6IHN0YXRlLnVzZXJzLmV4dGVybmFsVXNlck1uZ0xpbmtOYW1lLFxuICAgIGV4dGVybmFsVXNlck1uZ0xpbmtVcmw6IHN0YXRlLnVzZXJzLmV4dGVybmFsVXNlck1uZ0xpbmtVcmwsXG4gICAgY2FuSW52aXRlOiBzdGF0ZS51c2Vycy5jYW5JbnZpdGUsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgc2V0VXNlcnNTZWFyY2hRdWVyeSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJzQWN0aW9uQmFyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHJlbmRlck1hcmtkb3duIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIFBhZ2luYXRpb24sIFZlcnRpY2FsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBPcmdVc2VyLCBPcmdSb2xlLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IEludml0ZWVzVGFibGUgZnJvbSAnLi4vaW52aXRlcy9JbnZpdGVlc1RhYmxlJztcbmltcG9ydCB7IGZldGNoSW52aXRlZXMgfSBmcm9tICcuLi9pbnZpdGVzL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2VsZWN0SW52aXRlc01hdGNoaW5nUXVlcnkgfSBmcm9tICcuLi9pbnZpdGVzL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCBVc2Vyc0FjdGlvbkJhciBmcm9tICcuL1VzZXJzQWN0aW9uQmFyJztcbmltcG9ydCBVc2Vyc1RhYmxlIGZyb20gJy4vVXNlcnNUYWJsZSc7XG5pbXBvcnQgeyBsb2FkVXNlcnMsIHJlbW92ZVVzZXIsIHVwZGF0ZVVzZXIgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0VXNlcnNTZWFyY2hRdWVyeSwgc2V0VXNlcnNTZWFyY2hQYWdlIH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXRVc2VycywgZ2V0VXNlcnNTZWFyY2hRdWVyeSwgZ2V0VXNlcnNTZWFyY2hQYWdlIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUpIHtcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBnZXRVc2Vyc1NlYXJjaFF1ZXJ5KHN0YXRlLnVzZXJzKTtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICd1c2VycycpLFxuICAgIHVzZXJzOiBnZXRVc2VycyhzdGF0ZS51c2VycyksXG4gICAgc2VhcmNoUXVlcnk6IGdldFVzZXJzU2VhcmNoUXVlcnkoc3RhdGUudXNlcnMpLFxuICAgIHNlYXJjaFBhZ2U6IGdldFVzZXJzU2VhcmNoUGFnZShzdGF0ZS51c2VycyksXG4gICAgaW52aXRlZXM6IHNlbGVjdEludml0ZXNNYXRjaGluZ1F1ZXJ5KHN0YXRlLmludml0ZXMsIHNlYXJjaFF1ZXJ5KSxcbiAgICBleHRlcm5hbFVzZXJNbmdJbmZvOiBzdGF0ZS51c2Vycy5leHRlcm5hbFVzZXJNbmdJbmZvLFxuICAgIGhhc0ZldGNoZWQ6IHN0YXRlLnVzZXJzLmhhc0ZldGNoZWQsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZFVzZXJzLFxuICBmZXRjaEludml0ZWVzLFxuICBzZXRVc2Vyc1NlYXJjaFF1ZXJ5LFxuICBzZXRVc2Vyc1NlYXJjaFBhZ2UsXG4gIHVwZGF0ZVVzZXIsXG4gIHJlbW92ZVVzZXIsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIHNob3dJbnZpdGVzOiBib29sZWFuO1xufVxuXG5jb25zdCBwYWdlTGltaXQgPSAzMDtcblxuZXhwb3J0IGNsYXNzIFVzZXJzTGlzdFBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBkZWNsYXJlIGV4dGVybmFsVXNlck1uZ0luZm9IdG1sOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZXh0ZXJuYWxVc2VyTW5nSW5mbykge1xuICAgICAgdGhpcy5leHRlcm5hbFVzZXJNbmdJbmZvSHRtbCA9IHJlbmRlck1hcmtkb3duKHRoaXMucHJvcHMuZXh0ZXJuYWxVc2VyTW5nSW5mbyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dJbnZpdGVzOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFVzZXJzKCk7XG4gICAgdGhpcy5mZXRjaEludml0ZWVzKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaFVzZXJzKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnByb3BzLmxvYWRVc2VycygpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hJbnZpdGVlcygpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcm9wcy5mZXRjaEludml0ZWVzKCk7XG4gIH1cblxuICBvblJvbGVDaGFuZ2UgPSAocm9sZTogT3JnUm9sZSwgdXNlcjogT3JnVXNlcikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0geyAuLi51c2VyLCByb2xlOiByb2xlIH07XG5cbiAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodXBkYXRlZFVzZXIpO1xuICB9O1xuXG4gIG9uU2hvd0ludml0ZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgc2hvd0ludml0ZXM6ICFwcmV2U3RhdGUuc2hvd0ludml0ZXMsXG4gICAgfSkpO1xuICB9O1xuXG4gIGdldFBhZ2luYXRlZFVzZXJzID0gKHVzZXJzOiBPcmdVc2VyW10pID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSAodGhpcy5wcm9wcy5zZWFyY2hQYWdlIC0gMSkgKiBwYWdlTGltaXQ7XG4gICAgcmV0dXJuIHVzZXJzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcGFnZUxpbWl0KTtcbiAgfTtcblxuICByZW5kZXJUYWJsZSgpIHtcbiAgICBjb25zdCB7IGludml0ZWVzLCB1c2Vycywgc2V0VXNlcnNTZWFyY2hQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBhZ2luYXRlZFVzZXJzID0gdGhpcy5nZXRQYWdpbmF0ZWRVc2Vycyh1c2Vycyk7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh1c2Vycy5sZW5ndGggLyBwYWdlTGltaXQpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd0ludml0ZXMpIHtcbiAgICAgIHJldHVybiA8SW52aXRlZXNUYWJsZSBpbnZpdGVlcz17aW52aXRlZXN9IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwibWRcIj5cbiAgICAgICAgICA8VXNlcnNUYWJsZVxuICAgICAgICAgICAgdXNlcnM9e3BhZ2luYXRlZFVzZXJzfVxuICAgICAgICAgICAgb3JnSWQ9e2NvbnRleHRTcnYudXNlci5vcmdJZH1cbiAgICAgICAgICAgIG9uUm9sZUNoYW5nZT17KHJvbGUsIHVzZXIpID0+IHRoaXMub25Sb2xlQ2hhbmdlKHJvbGUsIHVzZXIpfVxuICAgICAgICAgICAgb25SZW1vdmVVc2VyPXsodXNlcikgPT4gdGhpcy5wcm9wcy5yZW1vdmVVc2VyKHVzZXIudXNlcklkKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICBvbk5hdmlnYXRlPXtzZXRVc2Vyc1NlYXJjaFBhZ2V9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXt0aGlzLnByb3BzLnNlYXJjaFBhZ2V9XG4gICAgICAgICAgICAgIG51bWJlck9mUGFnZXM9e3RvdGFsUGFnZXN9XG4gICAgICAgICAgICAgIGhpZGVXaGVuU2luZ2xlUGFnZT17dHJ1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIGhhc0ZldGNoZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXh0ZXJuYWxVc2VyTW5nSW5mb0h0bWwgPSB0aGlzLmV4dGVybmFsVXNlck1uZ0luZm9IdG1sO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17IWhhc0ZldGNoZWR9PlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VXNlcnNBY3Rpb25CYXIgb25TaG93SW52aXRlcz17dGhpcy5vblNob3dJbnZpdGVzfSBzaG93SW52aXRlcz17dGhpcy5zdGF0ZS5zaG93SW52aXRlc30gLz5cbiAgICAgICAgICAgIHtleHRlcm5hbFVzZXJNbmdJbmZvSHRtbCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZmFuYS1pbmZvLWJveFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZXh0ZXJuYWxVc2VyTW5nSW5mb0h0bWwgfX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aGFzRmV0Y2hlZCAmJiB0aGlzLnJlbmRlclRhYmxlKCl9XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihVc2Vyc0xpc3RQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgT3JnUm9sZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBVc2VyUm9sZVBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9Vc2VyUm9sZVBpY2tlcic7XG5pbXBvcnQgeyBmZXRjaEJ1aWx0aW5Sb2xlcywgZmV0Y2hSb2xlT3B0aW9ucyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9hcGknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgT3JnVXNlciwgUm9sZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IE9yZ1JvbGVQaWNrZXIgfSBmcm9tICcuLi9hZG1pbi9PcmdSb2xlUGlja2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXJzOiBPcmdVc2VyW107XG4gIG9yZ0lkPzogbnVtYmVyO1xuICBvblJvbGVDaGFuZ2U6IChyb2xlOiBPcmdSb2xlLCB1c2VyOiBPcmdVc2VyKSA9PiB2b2lkO1xuICBvblJlbW92ZVVzZXI6ICh1c2VyOiBPcmdVc2VyKSA9PiB2b2lkO1xufVxuXG5jb25zdCBVc2Vyc1RhYmxlOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB1c2Vycywgb3JnSWQsIG9uUm9sZUNoYW5nZSwgb25SZW1vdmVVc2VyIH0gPSBwcm9wcztcbiAgY29uc3QgW3VzZXJUb1JlbW92ZSwgc2V0VXNlclRvUmVtb3ZlXSA9IHVzZVN0YXRlPE9yZ1VzZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3JvbGVPcHRpb25zLCBzZXRSb2xlT3B0aW9uc10gPSB1c2VTdGF0ZTxSb2xlW10+KFtdKTtcbiAgY29uc3QgW2J1aWx0aW5Sb2xlcywgc2V0QnVpbHRpblJvbGVzXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogUm9sZVtdIH0+KHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoT3B0aW9ucygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25Sb2xlc0xpc3QpKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbnMgPSBhd2FpdCBmZXRjaFJvbGVPcHRpb25zKG9yZ0lkKTtcbiAgICAgICAgICBzZXRSb2xlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb250ZXh0U3J2LmFjY2Vzc0NvbnRyb2xCdWlsdEluUm9sZUFzc2lnbm1lbnRFbmFibGVkKCkgJiZcbiAgICAgICAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25CdWlsdGluUm9sZXNMaXN0KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBidWlsdEluUm9sZXMgPSBhd2FpdCBmZXRjaEJ1aWx0aW5Sb2xlcyhvcmdJZCk7XG4gICAgICAgICAgc2V0QnVpbHRpblJvbGVzKGJ1aWx0SW5Sb2xlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBvcHRpb25zJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgICAgZmV0Y2hPcHRpb25zKCk7XG4gICAgfVxuICB9LCBbb3JnSWRdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgIDx0aD5Mb2dpbjwvdGg+XG4gICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxuICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoPlNlZW48L3RoPlxuICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMzRweCcgfX0gLz5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3VzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2Ake3VzZXIudXNlcklkfS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZV9fYXZhdGFyXCIgc3JjPXt1c2VyLmF2YXRhclVybH0gYWx0PVwiVXNlciBhdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1heC13aWR0aC02XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbGxpcHNpc1wiIHRpdGxlPXt1c2VyLmxvZ2lufT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIubG9naW59XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtYXgtd2lkdGgtNVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiB0aXRsZT17dXNlci5lbWFpbH0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1heC13aWR0aC01XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbGxpcHNpc1wiIHRpdGxlPXt1c2VyLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTFcIj57dXNlci5sYXN0U2VlbkF0QWdlfTwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtOFwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRleHRTcnYubGljZW5zZWRBY2Nlc3NDb250cm9sRW5hYmxlZCgpID8gKFxuICAgICAgICAgICAgICAgICAgICA8VXNlclJvbGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ9e3VzZXIudXNlcklkfVxuICAgICAgICAgICAgICAgICAgICAgIG9yZ0lkPXtvcmdJZH1cbiAgICAgICAgICAgICAgICAgICAgICBidWlsdEluUm9sZT17dXNlci5yb2xlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQnVpbHRpblJvbGVDaGFuZ2U9eyhuZXdSb2xlKSA9PiBvblJvbGVDaGFuZ2UobmV3Um9sZSwgdXNlcil9XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZU9wdGlvbnM9e3JvbGVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIGJ1aWx0SW5Sb2xlcz17YnVpbHRpblJvbGVzfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ1VzZXJzV3JpdGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPE9yZ1JvbGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUm9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1dyaXRlLCB1c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5ld1JvbGUpID0+IG9uUm9sZUNoYW5nZShuZXdSb2xlLCB1c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIHtjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3JnVXNlcnNSZW1vdmUsIHVzZXIpICYmIChcbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyVG9SZW1vdmUodXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidGltZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgdXNlclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIHtCb29sZWFuKHVzZXJUb1JlbW92ZSkgJiYgKFxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgYm9keT17YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdXNlciAke3VzZXJUb1JlbW92ZT8ubG9naW59P2B9XG4gICAgICAgICAgY29uZmlybVRleHQ9XCJEZWxldGVcIlxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlXCJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHtcbiAgICAgICAgICAgIHNldFVzZXJUb1JlbW92ZShudWxsKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlzT3Blbj17dHJ1ZX1cbiAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgICAgIGlmICghdXNlclRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uUmVtb3ZlVXNlcih1c2VyVG9SZW1vdmUpO1xuICAgICAgICAgICAgc2V0VXNlclRvUmVtb3ZlKG51bGwpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcnNUYWJsZTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvYWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBPcmdVc2VyIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgVGh1bmtSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IHVzZXJzTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL29yZy91c2VycycsIGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCkpO1xuICAgIGRpc3BhdGNoKHVzZXJzTG9hZGVkKHVzZXJzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXI6IE9yZ1VzZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucGF0Y2goYC9hcGkvb3JnL3VzZXJzLyR7dXNlci51c2VySWR9YCwgeyByb2xlOiB1c2VyLnJvbGUgfSk7XG4gICAgZGlzcGF0Y2gobG9hZFVzZXJzKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlcih1c2VySWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvb3JnL3VzZXJzLyR7dXNlcklkfWApO1xuICAgIGRpc3BhdGNoKGxvYWRVc2VycygpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IFVzZXJzU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSAoc3RhdGU6IFVzZXJzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS51c2Vycy5maWx0ZXIoKHVzZXIpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh1c2VyLmxvZ2luKSB8fCByZWdleC50ZXN0KHVzZXIuZW1haWwpIHx8IHJlZ2V4LnRlc3QodXNlci5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlcnNTZWFyY2hRdWVyeSA9IChzdGF0ZTogVXNlcnNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0VXNlcnNTZWFyY2hQYWdlID0gKHN0YXRlOiBVc2Vyc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJCdXR0b24iLCJDbGlwYm9hcmRCdXR0b24iLCJyZXZva2VJbnZpdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJJbnZpdGVlUm93IiwicmVuZGVyIiwiaW52aXRlZSIsInByb3BzIiwiZW1haWwiLCJuYW1lIiwidXJsIiwiY29kZSIsIkludml0ZWVzVGFibGUiLCJpbnZpdGVlcyIsIndpZHRoIiwibWFwIiwiaW5kZXgiLCJpZCIsImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QWxsIiwic2VsZWN0QnlJZCIsInNlbGVjdFRvdGFsIiwic2VsZWN0UXVlcnkiLCJfIiwicXVlcnkiLCJzZWxlY3RJbnZpdGVzTWF0Y2hpbmdRdWVyeSIsImludml0ZXMiLCJzZWFyY2hRdWVyeSIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2hlcyIsImZpbHRlciIsImludml0ZSIsInRlc3QiLCJSYWRpb0J1dHRvbkdyb3VwIiwiTGlua0J1dHRvbiIsIkZpbHRlcklucHV0IiwiY29udGV4dFNydiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJzZXRVc2Vyc1NlYXJjaFF1ZXJ5IiwiZ2V0VXNlcnNTZWFyY2hRdWVyeSIsIlVzZXJzQWN0aW9uQmFyIiwiY2FuSW52aXRlIiwiZXh0ZXJuYWxVc2VyTW5nTGlua05hbWUiLCJleHRlcm5hbFVzZXJNbmdMaW5rVXJsIiwicGVuZGluZ0ludml0ZXNDb3VudCIsIm9uU2hvd0ludml0ZXMiLCJzaG93SW52aXRlcyIsIm9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiY2FuQWRkVG9PcmciLCJoYXNBY2Nlc3MiLCJVc2Vyc0NyZWF0ZSIsIm1hcmdpbkxlZnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJzIiwicmVuZGVyTWFya2Rvd24iLCJIb3Jpem9udGFsR3JvdXAiLCJQYWdpbmF0aW9uIiwiVmVydGljYWxHcm91cCIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsImZldGNoSW52aXRlZXMiLCJVc2Vyc1RhYmxlIiwibG9hZFVzZXJzIiwicmVtb3ZlVXNlciIsInVwZGF0ZVVzZXIiLCJzZXRVc2Vyc1NlYXJjaFBhZ2UiLCJnZXRVc2VycyIsImdldFVzZXJzU2VhcmNoUGFnZSIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJzZWFyY2hQYWdlIiwiZXh0ZXJuYWxVc2VyTW5nSW5mbyIsImhhc0ZldGNoZWQiLCJwYWdlTGltaXQiLCJVc2Vyc0xpc3RQYWdlIiwiY29uc3RydWN0b3IiLCJyb2xlIiwidXNlciIsInVwZGF0ZWRVc2VyIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJvZmZzZXQiLCJzbGljZSIsImV4dGVybmFsVXNlck1uZ0luZm9IdG1sIiwiY29tcG9uZW50RGlkTW91bnQiLCJmZXRjaFVzZXJzIiwicmVuZGVyVGFibGUiLCJwYWdpbmF0ZWRVc2VycyIsImdldFBhZ2luYXRlZFVzZXJzIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwib3JnSWQiLCJvblJvbGVDaGFuZ2UiLCJ1c2VySWQiLCJfX2h0bWwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbmZpcm1Nb2RhbCIsIlVzZXJSb2xlUGlja2VyIiwiZmV0Y2hCdWlsdGluUm9sZXMiLCJmZXRjaFJvbGVPcHRpb25zIiwiT3JnUm9sZVBpY2tlciIsIm9uUmVtb3ZlVXNlciIsInVzZXJUb1JlbW92ZSIsInNldFVzZXJUb1JlbW92ZSIsInJvbGVPcHRpb25zIiwic2V0Um9sZU9wdGlvbnMiLCJidWlsdGluUm9sZXMiLCJzZXRCdWlsdGluUm9sZXMiLCJmZXRjaE9wdGlvbnMiLCJoYXNQZXJtaXNzaW9uIiwiQWN0aW9uUm9sZXNMaXN0IiwiYWNjZXNzQ29udHJvbEJ1aWx0SW5Sb2xlQXNzaWdubWVudEVuYWJsZWQiLCJBY3Rpb25CdWlsdGluUm9sZXNMaXN0IiwiYnVpbHRJblJvbGVzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQiLCJhdmF0YXJVcmwiLCJsb2dpbiIsImxhc3RTZWVuQXRBZ2UiLCJuZXdSb2xlIiwiaGFzUGVybWlzc2lvbkluTWV0YWRhdGEiLCJPcmdVc2Vyc1dyaXRlIiwiT3JnVXNlcnNSZW1vdmUiLCJCb29sZWFuIiwiZ2V0QmFja2VuZFNydiIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwidXNlcnNMb2FkZWQiLCJkaXNwYXRjaCIsImdldCIsInBhdGNoIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==