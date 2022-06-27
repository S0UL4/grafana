"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TeamList"],{

/***/ "./public/app/core/components/RolePicker/TeamRolePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamRolePicker": () => (/* binding */ TeamRolePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _RolePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/RolePicker/RolePicker.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


 // @ts-ignore



const TeamRolePicker = ({
  teamId,
  orgId,
  roleOptions,
  disabled,
  builtinRolesDisabled
}) => {
  const [{
    loading,
    value: appliedRoles = []
  }, getTeamRoles] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    try {
      return await (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchTeamRoles)(teamId, orgId);
    } catch (e) {
      // TODO handle error
      console.error('Error loading options');
    }

    return [];
  }, [orgId, teamId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getTeamRoles();
  }, [orgId, teamId, getTeamRoles]);

  const onRolesChange = async roles => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_2__.updateTeamRoles)(roles, teamId, orgId);
    await getTeamRoles();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RolePicker__WEBPACK_IMPORTED_MODULE_1__.RolePicker, {
    onRolesChange: onRolesChange,
    roleOptions: roleOptions,
    appliedRoles: appliedRoles,
    isLoading: loading,
    disabled: disabled,
    builtinRolesDisabled: builtinRolesDisabled
  });
};

/***/ }),

/***/ "./public/app/core/components/connectWithCleanUp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectWithCleanUp": () => (/* binding */ connectWithCleanUp)
/* harmony export */ });
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const connectWithCleanUp = (mapStateToProps, mapDispatchToProps, stateSelector) => Component => {
  const ConnectedComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps // @ts-ignore
  )(Component);

  const ConnectedComponentWithCleanUp = props => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      return function cleanUp() {
        dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_3__.cleanUpAction)({
          stateSelector
        }));
      };
    }, [dispatch]); // @ts-ignore

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ConnectedComponent, Object.assign({}, props));
  };

  ConnectedComponentWithCleanUp.displayName = `ConnectWithCleanUp(${ConnectedComponent.displayName})`;
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(ConnectedComponentWithCleanUp, Component);
  return ConnectedComponentWithCleanUp;
};

/***/ }),

/***/ "./public/app/features/admin/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightTrial": () => (/* binding */ highlightTrial),
/* harmony export */   "isTrial": () => (/* binding */ isTrial)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function isTrial() {
  var _config$licenseInfo;

  const expiry = (_config$licenseInfo = _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.licenseInfo) === null || _config$licenseInfo === void 0 ? void 0 : _config$licenseInfo.trialExpiry;
  return !!(expiry && expiry > 0);
}
const highlightTrial = () => isTrial() && _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.featureHighlights;

/***/ }),

/***/ "./public/app/features/teams/TeamList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamList": () => (/* binding */ TeamList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/RolePicker/TeamRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/connectWithCleanUp.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3, _th4, _th5;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const pageLimit = 30;
class TeamList extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "deleteTeam", team => {
      this.props.deleteTeam(team.id);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchQuery(value);
    });

    _defineProperty(this, "getPaginatedTeams", teams => {
      const offset = (this.props.searchPage - 1) * pageLimit;
      return teams.slice(offset, offset + pageLimit);
    });

    this.state = {
      roleOptions: []
    };
  }

  componentDidMount() {
    this.fetchTeams();

    if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionRolesList)) {
      this.fetchRoleOptions();
    }
  }

  async fetchTeams() {
    await this.props.loadTeams();
  }

  async fetchRoleOptions() {
    const roleOptions = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_5__.fetchRoleOptions)();
    this.setState({
      roleOptions
    });
  }

  renderTeam(team) {
    var _team$email, _team$email2;

    const {
      editorsCanAdmin,
      signedInUser
    } = this.props;
    const permission = team.permission;
    const teamUrl = `org/teams/edit/${team.id}`;
    const isTeamAdmin = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.isPermissionTeamAdmin)({
      permission,
      editorsCanAdmin,
      signedInUser
    });
    const canDelete = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsDelete, team, isTeamAdmin);
    const canReadTeam = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRead, team, isTeamAdmin);
    const canSeeTeamRoles = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesList, team, false);
    const canUpdateTeamRoles = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesAdd, false) || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesRemove, false);
    const displayRolePicker = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesList) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionRolesList);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "width-4 text-center link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
            className: "filter-table__avatar",
            src: team.avatarUrl,
            alt: "Team avatar"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
          className: "filter-table__avatar",
          src: team.avatarUrl,
          alt: "Team avatar"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          children: team.name
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          children: team.name
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          "aria-label": ((_team$email = team.email) === null || _team$email === void 0 ? void 0 : _team$email.length) > 0 ? undefined : 'Empty email cell',
          children: team.email
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          "aria-label": ((_team$email2 = team.email) === null || _team$email2 === void 0 ? void 0 : _team$email2.length) > 0 ? undefined : 'Empty email cell',
          children: team.email
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          children: team.memberCount
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          children: team.memberCount
        })
      }), displayRolePicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        children: canSeeTeamRoles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_4__.TeamRolePicker, {
          teamId: team.id,
          roleOptions: this.state.roleOptions,
          disabled: !canUpdateTeamRoles
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "text-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.DeleteButton, {
          "aria-label": `Delete team ${team.name}`,
          size: "sm",
          disabled: !canDelete,
          onConfirm: () => this.deleteTeam(team)
        })
      })]
    }, team.id);
  }

  renderEmptyList() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "You haven't created any teams yet.",
      buttonIcon: "users-alt",
      buttonLink: "org/teams/new",
      buttonTitle: " New team",
      buttonDisabled: !app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsCreate),
      proTip: "Assign folder and dashboard permissions to teams instead of users to ease administration.",
      proTipLink: "",
      proTipLinkTitle: "",
      proTipTarget: "_blank"
    });
  }

  renderTeamList() {
    const {
      teams,
      searchQuery,
      editorsCanAdmin,
      searchPage,
      setTeamsSearchPage
    } = this.props;
    const teamAdmin = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasRole('Admin') || editorsCanAdmin && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasRole('Editor');
    const canCreate = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsCreate, teamAdmin);
    const displayRolePicker = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesList) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionRolesList);
    const newTeamHref = canCreate ? 'org/teams/new' : '#';
    const paginatedTeams = this.getPaginatedTeams(teams);
    const totalPages = Math.ceil(teams.length / pageLimit);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
            placeholder: "Search teams",
            value: searchQuery,
            onChange: this.onSearchQueryChange
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
          href: newTeamHref,
          disabled: !canCreate,
          children: "New Team"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.VerticalGroup, {
          spacing: "md",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("table", {
            className: "filter-table filter-table--hover form-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Name"
                })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Email"
                })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Members"
                })), displayRolePicker && (_th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Roles"
                }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  style: {
                    width: '1%'
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("tbody", {
              children: paginatedTeams.map(team => this.renderTeam(team))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
            justify: "flex-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
              onNavigate: setTeamsSearchPage,
              currentPage: searchPage,
              numberOfPages: totalPages,
              hideWhenSinglePage: true
            })
          })]
        })
      })]
    });
  }

  renderList() {
    const {
      teamsCount,
      hasFetched
    } = this.props;

    if (!hasFetched) {
      return null;
    }

    if (teamsCount > 0) {
      return this.renderTeamList();
    } else {
      return this.renderEmptyList();
    }
  }

  render() {
    const {
      hasFetched,
      navModel
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        isLoading: !hasFetched,
        children: this.renderList()
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__.getNavModel)(state.navIndex, 'teams'),
    teams: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getTeams)(state.teams),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getSearchQuery)(state.teams),
    searchPage: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getTeamsSearchPage)(state.teams),
    teamsCount: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getTeamsCount)(state.teams),
    hasFetched: state.teams.hasFetched,
    editorsCanAdmin: app_core_config__WEBPACK_IMPORTED_MODULE_6__.config.editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  loadTeams: _state_actions__WEBPACK_IMPORTED_MODULE_11__.loadTeams,
  deleteTeam: _state_actions__WEBPACK_IMPORTED_MODULE_11__.deleteTeam,
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setSearchQuery,
  setTeamsSearchPage: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setTeamsSearchPage
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_10__.connectWithCleanUp)(mapStateToProps, mapDispatchToProps, state => state.teams)(TeamList));

/***/ }),

/***/ "./public/app/features/teams/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTeamGroup": () => (/* binding */ addTeamGroup),
/* harmony export */   "addTeamMember": () => (/* binding */ addTeamMember),
/* harmony export */   "deleteTeam": () => (/* binding */ deleteTeam),
/* harmony export */   "loadTeam": () => (/* binding */ loadTeam),
/* harmony export */   "loadTeamGroups": () => (/* binding */ loadTeamGroups),
/* harmony export */   "loadTeamMembers": () => (/* binding */ loadTeamMembers),
/* harmony export */   "loadTeams": () => (/* binding */ loadTeams),
/* harmony export */   "removeTeamGroup": () => (/* binding */ removeTeamGroup),
/* harmony export */   "removeTeamMember": () => (/* binding */ removeTeamMember),
/* harmony export */   "updateTeam": () => (/* binding */ updateTeam),
/* harmony export */   "updateTeamMember": () => (/* binding */ updateTeamMember)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");







function loadTeams() {
  return async dispatch => {
    // Early return if the user cannot list teams
    if (!app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRead)) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamsLoaded)([]));
      return;
    }

    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/teams/search', (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__.accessControlQueryParam)({
      perpage: 1000,
      page: 1
    }));
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamsLoaded)(response.teams));
  };
}
function loadTeam(id) {
  return async dispatch => {
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${id}`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__.accessControlQueryParam)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamLoaded)(response));
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_5__.buildNavModel)(response)));
  };
}
function loadTeamMembers() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/members`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamMembersLoaded)(response));
  };
}
function addTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/members`, {
      userId: id
    });
    dispatch(loadTeamMembers());
  };
}
function removeTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/members/${id}`);
    dispatch(loadTeamMembers());
  };
}
function updateTeam(name, email) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${team.id}`, {
      name,
      email
    });
    dispatch(loadTeam(team.id));
  };
}
function loadTeamGroups() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/groups`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamGroupsLoaded)(response));
  };
}
function addTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/groups`, {
      groupId: groupId
    });
    dispatch(loadTeamGroups());
  };
}
function removeTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/groups/${encodeURIComponent(groupId)}`);
    dispatch(loadTeamGroups());
  };
}
function deleteTeam(id) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${id}`); // Update users permissions in case they lost teams.read with the deletion

    await app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.fetchUserPermissions();
    dispatch(loadTeams());
  };
}
function updateTeamMember(member) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${member.teamId}/members/${member.userId}`, {
      permission: member.permission
    });
    dispatch(loadTeamMembers());
  };
}

/***/ }),

/***/ "./public/app/features/teams/state/navModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildNavModel": () => (/* binding */ buildNavModel),
/* harmony export */   "getTeamLoadingNav": () => (/* binding */ getTeamLoadingNav)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Upgrade/ProBadge.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/admin/utils.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");






const loadingTeam = {
  avatarUrl: 'public/img/user_profile.png',
  id: 1,
  name: 'Loading',
  email: 'loading',
  memberCount: 0,
  permission: app_types__WEBPACK_IMPORTED_MODULE_5__.TeamPermissionLevel.Member
};
function buildNavModel(team) {
  const navModel = {
    img: team.avatarUrl,
    id: 'team-' + team.id,
    subTitle: 'Manage members and settings',
    url: '',
    text: team.name,
    breadcrumbs: [{
      title: 'Teams',
      url: 'org/teams'
    }],
    children: [// With RBAC this tab will always be available (but not always editable)
    // With Legacy it will be hidden by hideTabsFromNonTeamAdmin should the user not be allowed to see it
    {
      active: false,
      icon: 'sliders-v-alt',
      id: `team-settings-${team.id}`,
      text: 'Settings',
      url: `org/teams/edit/${team.id}/settings`
    }]
  }; // While team is loading we leave the members tab
  // With RBAC the Members tab is available when user has ActionTeamsPermissionsRead for this team
  // With Legacy it will always be present

  if (team === loadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
    navModel.children.unshift({
      active: false,
      icon: 'users-alt',
      id: `team-members-${team.id}`,
      text: 'Members',
      url: `org/teams/edit/${team.id}/members`
    });
  }

  const teamGroupSync = {
    active: false,
    icon: 'sync',
    id: `team-groupsync-${team.id}`,
    text: 'External group sync',
    url: `org/teams/edit/${team.id}/groupsync`
  };
  const isLoadingTeam = team === loadingTeam;

  if ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_4__.highlightTrial)()) {
    teamGroupSync.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__.ProBadge)({
      experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge',
      eventVariant: 'trial'
    });
  } // With both Legacy and RBAC the tab is protected being featureEnabled
  // While team is loading we leave the teamsync tab
  // With RBAC the External Group Sync tab is available when user has ActionTeamsPermissionsRead for this team


  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.featureEnabled)('teamsync')) {
    if (isLoadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
      navModel.children.push(teamGroupSync);
    }
  } else if (app_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].featureToggles.featureHighlights) {
    navModel.children.push(Object.assign({}, teamGroupSync, {
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__.ProBadge)({
        experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge'
      })
    }));
  }

  return navModel;
}
function getTeamLoadingNav(pageName) {
  const main = buildNavModel(loadingTeam);
  let node; // find active page

  for (const child of main.children) {
    if (child.id.indexOf(pageName) > 0) {
      child.active = true;
      node = child;
      break;
    }
  }

  return {
    main: main,
    node: node
  };
}

/***/ }),

/***/ "./public/app/features/teams/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSearchMemberQuery": () => (/* binding */ getSearchMemberQuery),
/* harmony export */   "getSearchQuery": () => (/* binding */ getSearchQuery),
/* harmony export */   "getTeam": () => (/* binding */ getTeam),
/* harmony export */   "getTeamGroups": () => (/* binding */ getTeamGroups),
/* harmony export */   "getTeamMembers": () => (/* binding */ getTeamMembers),
/* harmony export */   "getTeams": () => (/* binding */ getTeams),
/* harmony export */   "getTeamsCount": () => (/* binding */ getTeamsCount),
/* harmony export */   "getTeamsSearchPage": () => (/* binding */ getTeamsSearchPage),
/* harmony export */   "isPermissionTeamAdmin": () => (/* binding */ isPermissionTeamAdmin),
/* harmony export */   "isSignedInUserTeamAdmin": () => (/* binding */ isSignedInUserTeamAdmin)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");

const getSearchQuery = state => state.searchQuery;
const getSearchMemberQuery = state => state.searchMemberQuery;
const getTeamGroups = state => state.groups;
const getTeamsCount = state => state.teams.length;
const getTeamsSearchPage = state => state.searchPage;
const getTeam = (state, currentTeamId) => {
  if (state.team.id === parseInt(currentTeamId, 10)) {
    return state.team;
  }

  return null;
};
const getTeams = state => {
  const regex = RegExp(state.searchQuery, 'i');
  return state.teams.filter(team => {
    return regex.test(team.name);
  });
};
const getTeamMembers = state => {
  const regex = RegExp(state.searchMemberQuery, 'i');
  return state.members.filter(member => {
    return regex.test(member.login) || regex.test(member.email) || regex.test(member.name);
  });
};
const isSignedInUserTeamAdmin = config => {
  const {
    members,
    signedInUser,
    editorsCanAdmin
  } = config;
  const userInMembers = members.find(m => m.userId === signedInUser.id);
  const permission = userInMembers ? userInMembers.permission : app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Member;
  return isPermissionTeamAdmin({
    permission,
    signedInUser,
    editorsCanAdmin
  });
};
const isPermissionTeamAdmin = config => {
  const {
    permission,
    signedInUser,
    editorsCanAdmin
  } = config;
  const isAdmin = signedInUser.isGrafanaAdmin || signedInUser.orgRole === app_types__WEBPACK_IMPORTED_MODULE_0__.OrgRole.Admin;
  const userIsTeamAdmin = permission === app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Admin;
  const isSignedInUserTeamAdmin = isAdmin || userIsTeamAdmin;
  return isSignedInUserTeamAdmin || !editorsCanAdmin;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjRCxZQUFkO0lBQTRCRDtFQUE1QixDQUFELENBQTVCO0FBQ0QsQ0FOTTtBQWNBLE1BQU1sQixxQkFBcUIsR0FBSTdCLE1BQUQsSUFBdUM7RUFDMUUsTUFBTTtJQUFFaUQsVUFBRjtJQUFjRCxZQUFkO0lBQTRCRDtFQUE1QixJQUFnRC9DLE1BQXREO0VBQ0EsTUFBTTRLLE9BQU8sR0FBRzVILFlBQVksQ0FBQzZILGNBQWIsSUFBK0I3SCxZQUFZLENBQUM4SCxPQUFiLEtBQXlCckIsb0RBQXhFO0VBQ0EsTUFBTXVCLGVBQWUsR0FBRy9ILFVBQVUsS0FBSzZFLGdFQUF2QztFQUNBLE1BQU0wQyx1QkFBdUIsR0FBR0ksT0FBTyxJQUFJSSxlQUEzQztFQUVBLE9BQU9SLHVCQUF1QixJQUFJLENBQUN6SCxlQUFuQztBQUNELENBUE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9UZWFtUm9sZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL2Nvbm5lY3RXaXRoQ2xlYW5VcC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbUxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvc3RhdGUvbmF2TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvc3RhdGUvc2VsZWN0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXN5bmNGbiB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IFJvbGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBSb2xlUGlja2VyIH0gZnJvbSAnLi9Sb2xlUGlja2VyJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IGZldGNoVGVhbVJvbGVzLCB1cGRhdGVUZWFtUm9sZXMgfSBmcm9tICcuL2FwaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB0ZWFtSWQ6IG51bWJlcjtcbiAgb3JnSWQ/OiBudW1iZXI7XG4gIHJvbGVPcHRpb25zOiBSb2xlW107XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgYnVpbHRpblJvbGVzRGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVGVhbVJvbGVQaWNrZXI6IEZDPFByb3BzPiA9ICh7IHRlYW1JZCwgb3JnSWQsIHJvbGVPcHRpb25zLCBkaXNhYmxlZCwgYnVpbHRpblJvbGVzRGlzYWJsZWQgfSkgPT4ge1xuICBjb25zdCBbeyBsb2FkaW5nLCB2YWx1ZTogYXBwbGllZFJvbGVzID0gW10gfSwgZ2V0VGVhbVJvbGVzXSA9IHVzZUFzeW5jRm4oYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgZmV0Y2hUZWFtUm9sZXModGVhbUlkLCBvcmdJZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVE9ETyBoYW5kbGUgZXJyb3JcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgb3B0aW9ucycpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH0sIFtvcmdJZCwgdGVhbUlkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUZWFtUm9sZXMoKTtcbiAgfSwgW29yZ0lkLCB0ZWFtSWQsIGdldFRlYW1Sb2xlc10pO1xuXG4gIGNvbnN0IG9uUm9sZXNDaGFuZ2UgPSBhc3luYyAocm9sZXM6IFJvbGVbXSkgPT4ge1xuICAgIGF3YWl0IHVwZGF0ZVRlYW1Sb2xlcyhyb2xlcywgdGVhbUlkLCBvcmdJZCk7XG4gICAgYXdhaXQgZ2V0VGVhbVJvbGVzKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Um9sZVBpY2tlclxuICAgICAgb25Sb2xlc0NoYW5nZT17b25Sb2xlc0NoYW5nZX1cbiAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgIGFwcGxpZWRSb2xlcz17YXBwbGllZFJvbGVzfVxuICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgYnVpbHRpblJvbGVzRGlzYWJsZWQ9e2J1aWx0aW5Sb2xlc0Rpc2FibGVkfVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRUeXBlLCBGdW5jdGlvbkNvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgTWFwRGlzcGF0Y2hUb1Byb3BzUGFyYW0sIE1hcFN0YXRlVG9Qcm9wc1BhcmFtLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiwgU3RhdGVTZWxlY3RvciB9IGZyb20gJy4uL2FjdGlvbnMvY2xlYW5VcCc7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0V2l0aENsZWFuVXAgPVxuICA8XG4gICAgVFN0YXRlUHJvcHMgZXh0ZW5kcyB7fSA9IHt9LFxuICAgIFREaXNwYXRjaFByb3BzID0ge30sXG4gICAgVE93blByb3BzID0ge30sXG4gICAgU3RhdGUgPSB7fSxcbiAgICBUU2VsZWN0b3IgZXh0ZW5kcyBvYmplY3QgPSB7fSxcbiAgICBTdGF0aWNzID0ge31cbiAgPihcbiAgICBtYXBTdGF0ZVRvUHJvcHM6IE1hcFN0YXRlVG9Qcm9wc1BhcmFtPFRTdGF0ZVByb3BzLCBUT3duUHJvcHMsIFN0YXRlPixcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHM6IE1hcERpc3BhdGNoVG9Qcm9wc1BhcmFtPFREaXNwYXRjaFByb3BzLCBUT3duUHJvcHM+LFxuICAgIHN0YXRlU2VsZWN0b3I6IFN0YXRlU2VsZWN0b3I8VFNlbGVjdG9yPlxuICApID0+XG4gIChDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8YW55PikgPT4ge1xuICAgIGNvbnN0IENvbm5lY3RlZENvbXBvbmVudCA9IGNvbm5lY3QoXG4gICAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICApKENvbXBvbmVudCk7XG5cbiAgICBjb25zdCBDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcDogRnVuY3Rpb25Db21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhblVwKCkge1xuICAgICAgICAgIGRpc3BhdGNoKGNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yIH0pKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIDxDb25uZWN0ZWRDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbiAgICB9O1xuXG4gICAgQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXAuZGlzcGxheU5hbWUgPSBgQ29ubmVjdFdpdGhDbGVhblVwKCR7Q29ubmVjdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lfSlgO1xuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwLCBDb21wb25lbnQpO1xuICAgIHR5cGUgSG9pc3RlZCA9IHR5cGVvZiBDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcCAmIFN0YXRpY3M7XG5cbiAgICByZXR1cm4gQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXAgYXMgSG9pc3RlZDtcbiAgfTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJpYWwoKSB7XG4gIGNvbnN0IGV4cGlyeSA9IGNvbmZpZy5saWNlbnNlSW5mbz8udHJpYWxFeHBpcnk7XG4gIHJldHVybiAhIShleHBpcnkgJiYgZXhwaXJ5ID4gMCk7XG59XG5cbmV4cG9ydCBjb25zdCBoaWdobGlnaHRUcmlhbCA9ICgpID0+IGlzVHJpYWwoKSAmJiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERlbGV0ZUJ1dHRvbiwgTGlua0J1dHRvbiwgRmlsdGVySW5wdXQsIFZlcnRpY2FsR3JvdXAsIEhvcml6b250YWxHcm91cCwgUGFnaW5hdGlvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFRlYW1Sb2xlUGlja2VyIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Sb2xlUGlja2VyL1RlYW1Sb2xlUGlja2VyJztcbmltcG9ydCB7IGZldGNoUm9sZU9wdGlvbnMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvYXBpJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBjb250ZXh0U3J2LCBVc2VyIH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgUm9sZSwgU3RvcmVTdGF0ZSwgVGVhbSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNvbm5lY3RXaXRoQ2xlYW5VcCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9jb25uZWN0V2l0aENsZWFuVXAnO1xuXG5pbXBvcnQgeyBkZWxldGVUZWFtLCBsb2FkVGVhbXMgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0U2VhcmNoUXVlcnksIHNldFRlYW1zU2VhcmNoUGFnZSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0U2VhcmNoUXVlcnksIGdldFRlYW1zLCBnZXRUZWFtc0NvdW50LCBnZXRUZWFtc1NlYXJjaFBhZ2UsIGlzUGVybWlzc2lvblRlYW1BZG1pbiB9IGZyb20gJy4vc3RhdGUvc2VsZWN0b3JzJztcblxuY29uc3QgcGFnZUxpbWl0ID0gMzA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG4gIHRlYW1zOiBUZWFtW107XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XG4gIHNlYXJjaFBhZ2U6IG51bWJlcjtcbiAgdGVhbXNDb3VudDogbnVtYmVyO1xuICBoYXNGZXRjaGVkOiBib29sZWFuO1xuICBsb2FkVGVhbXM6IHR5cGVvZiBsb2FkVGVhbXM7XG4gIGRlbGV0ZVRlYW06IHR5cGVvZiBkZWxldGVUZWFtO1xuICBzZXRTZWFyY2hRdWVyeTogdHlwZW9mIHNldFNlYXJjaFF1ZXJ5O1xuICBzZXRUZWFtc1NlYXJjaFBhZ2U6IHR5cGVvZiBzZXRUZWFtc1NlYXJjaFBhZ2U7XG4gIGVkaXRvcnNDYW5BZG1pbjogYm9vbGVhbjtcbiAgc2lnbmVkSW5Vc2VyOiBVc2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgcm9sZU9wdGlvbnM6IFJvbGVbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFRlYW1MaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHJvbGVPcHRpb25zOiBbXSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFRlYW1zKCk7XG4gICAgaWYgKGNvbnRleHRTcnYubGljZW5zZWRBY2Nlc3NDb250cm9sRW5hYmxlZCgpICYmIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblJvbGVzTGlzdCkpIHtcbiAgICAgIHRoaXMuZmV0Y2hSb2xlT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZldGNoVGVhbXMoKSB7XG4gICAgYXdhaXQgdGhpcy5wcm9wcy5sb2FkVGVhbXMoKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoUm9sZU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgcm9sZU9wdGlvbnMgPSBhd2FpdCBmZXRjaFJvbGVPcHRpb25zKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGVPcHRpb25zIH0pO1xuICB9XG5cbiAgZGVsZXRlVGVhbSA9ICh0ZWFtOiBUZWFtKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVUZWFtKHRlYW0uaWQpO1xuICB9O1xuXG4gIG9uU2VhcmNoUXVlcnlDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoUXVlcnkodmFsdWUpO1xuICB9O1xuXG4gIHJlbmRlclRlYW0odGVhbTogVGVhbSkge1xuICAgIGNvbnN0IHsgZWRpdG9yc0NhbkFkbWluLCBzaWduZWRJblVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGVybWlzc2lvbiA9IHRlYW0ucGVybWlzc2lvbjtcbiAgICBjb25zdCB0ZWFtVXJsID0gYG9yZy90ZWFtcy9lZGl0LyR7dGVhbS5pZH1gO1xuICAgIGNvbnN0IGlzVGVhbUFkbWluID0gaXNQZXJtaXNzaW9uVGVhbUFkbWluKHsgcGVybWlzc2lvbiwgZWRpdG9yc0NhbkFkbWluLCBzaWduZWRJblVzZXIgfSk7XG4gICAgY29uc3QgY2FuRGVsZXRlID0gY29udGV4dFNydi5oYXNBY2Nlc3NJbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNEZWxldGUsIHRlYW0sIGlzVGVhbUFkbWluKTtcbiAgICBjb25zdCBjYW5SZWFkVGVhbSA9IGNvbnRleHRTcnYuaGFzQWNjZXNzSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUmVhZCwgdGVhbSwgaXNUZWFtQWRtaW4pO1xuICAgIGNvbnN0IGNhblNlZVRlYW1Sb2xlcyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUm9sZXNMaXN0LCB0ZWFtLCBmYWxzZSk7XG4gICAgY29uc3QgY2FuVXBkYXRlVGVhbVJvbGVzID1cbiAgICAgIGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNSb2xlc0FkZCwgZmFsc2UpIHx8XG4gICAgICBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUm9sZXNSZW1vdmUsIGZhbHNlKTtcbiAgICBjb25zdCBkaXNwbGF5Um9sZVBpY2tlciA9XG4gICAgICBjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSAmJlxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNSb2xlc0xpc3QpICYmXG4gICAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25Sb2xlc0xpc3QpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e3RlYW0uaWR9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtNCB0ZXh0LWNlbnRlciBsaW5rLXRkXCI+XG4gICAgICAgICAge2NhblJlYWRUZWFtID8gKFxuICAgICAgICAgICAgPGEgaHJlZj17dGVhbVVybH0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlX19hdmF0YXJcIiBzcmM9e3RlYW0uYXZhdGFyVXJsfSBhbHQ9XCJUZWFtIGF2YXRhclwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlX19hdmF0YXJcIiBzcmM9e3RlYW0uYXZhdGFyVXJsfSBhbHQ9XCJUZWFtIGF2YXRhclwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICB7Y2FuUmVhZFRlYW0gPyA8YSBocmVmPXt0ZWFtVXJsfT57dGVhbS5uYW1lfTwvYT4gOiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggOHB4JyB9fT57dGVhbS5uYW1lfTwvZGl2Pn1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICB7Y2FuUmVhZFRlYW0gPyAoXG4gICAgICAgICAgICA8YSBocmVmPXt0ZWFtVXJsfSBhcmlhLWxhYmVsPXt0ZWFtLmVtYWlsPy5sZW5ndGggPiAwID8gdW5kZWZpbmVkIDogJ0VtcHR5IGVtYWlsIGNlbGwnfT5cbiAgICAgICAgICAgICAge3RlYW0uZW1haWx9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzBweCA4cHgnIH19IGFyaWEtbGFiZWw9e3RlYW0uZW1haWw/Lmxlbmd0aCA+IDAgPyB1bmRlZmluZWQgOiAnRW1wdHkgZW1haWwgY2VsbCd9PlxuICAgICAgICAgICAgICB7dGVhbS5lbWFpbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkXCI+XG4gICAgICAgICAge2NhblJlYWRUZWFtID8gKFxuICAgICAgICAgICAgPGEgaHJlZj17dGVhbVVybH0+e3RlYW0ubWVtYmVyQ291bnR9PC9hPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggOHB4JyB9fT57dGVhbS5tZW1iZXJDb3VudH08L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RkPlxuICAgICAgICB7ZGlzcGxheVJvbGVQaWNrZXIgJiYgKFxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIHtjYW5TZWVUZWFtUm9sZXMgJiYgKFxuICAgICAgICAgICAgICA8VGVhbVJvbGVQaWNrZXIgdGVhbUlkPXt0ZWFtLmlkfSByb2xlT3B0aW9ucz17dGhpcy5zdGF0ZS5yb2xlT3B0aW9uc30gZGlzYWJsZWQ9eyFjYW5VcGRhdGVUZWFtUm9sZXN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICl9XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPERlbGV0ZUJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YERlbGV0ZSB0ZWFtICR7dGVhbS5uYW1lfWB9XG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5EZWxldGV9XG4gICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHRoaXMuZGVsZXRlVGVhbSh0ZWFtKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRW1wdHlMaXN0KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgIHRpdGxlPVwiWW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgdGVhbXMgeWV0LlwiXG4gICAgICAgIGJ1dHRvbkljb249XCJ1c2Vycy1hbHRcIlxuICAgICAgICBidXR0b25MaW5rPVwib3JnL3RlYW1zL25ld1wiXG4gICAgICAgIGJ1dHRvblRpdGxlPVwiIE5ldyB0ZWFtXCJcbiAgICAgICAgYnV0dG9uRGlzYWJsZWQ9eyFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc0NyZWF0ZSl9XG4gICAgICAgIHByb1RpcD1cIkFzc2lnbiBmb2xkZXIgYW5kIGRhc2hib2FyZCBwZXJtaXNzaW9ucyB0byB0ZWFtcyBpbnN0ZWFkIG9mIHVzZXJzIHRvIGVhc2UgYWRtaW5pc3RyYXRpb24uXCJcbiAgICAgICAgcHJvVGlwTGluaz1cIlwiXG4gICAgICAgIHByb1RpcExpbmtUaXRsZT1cIlwiXG4gICAgICAgIHByb1RpcFRhcmdldD1cIl9ibGFua1wiXG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBnZXRQYWdpbmF0ZWRUZWFtcyA9ICh0ZWFtczogVGVhbVtdKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gKHRoaXMucHJvcHMuc2VhcmNoUGFnZSAtIDEpICogcGFnZUxpbWl0O1xuICAgIHJldHVybiB0ZWFtcy5zbGljZShvZmZzZXQsIG9mZnNldCArIHBhZ2VMaW1pdCk7XG4gIH07XG5cbiAgcmVuZGVyVGVhbUxpc3QoKSB7XG4gICAgY29uc3QgeyB0ZWFtcywgc2VhcmNoUXVlcnksIGVkaXRvcnNDYW5BZG1pbiwgc2VhcmNoUGFnZSwgc2V0VGVhbXNTZWFyY2hQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRlYW1BZG1pbiA9IGNvbnRleHRTcnYuaGFzUm9sZSgnQWRtaW4nKSB8fCAoZWRpdG9yc0NhbkFkbWluICYmIGNvbnRleHRTcnYuaGFzUm9sZSgnRWRpdG9yJykpO1xuICAgIGNvbnN0IGNhbkNyZWF0ZSA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNDcmVhdGUsIHRlYW1BZG1pbik7XG4gICAgY29uc3QgZGlzcGxheVJvbGVQaWNrZXIgPVxuICAgICAgY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkgJiZcbiAgICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUm9sZXNMaXN0KSAmJlxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uUm9sZXNMaXN0KTtcbiAgICBjb25zdCBuZXdUZWFtSHJlZiA9IGNhbkNyZWF0ZSA/ICdvcmcvdGVhbXMvbmV3JyA6ICcjJztcbiAgICBjb25zdCBwYWdpbmF0ZWRUZWFtcyA9IHRoaXMuZ2V0UGFnaW5hdGVkVGVhbXModGVhbXMpO1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGVhbXMubGVuZ3RoIC8gcGFnZUxpbWl0KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICA8RmlsdGVySW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGVhbXNcIiB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNoUXVlcnlDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPXtuZXdUZWFtSHJlZn0gZGlzYWJsZWQ9eyFjYW5DcmVhdGV9PlxuICAgICAgICAgICAgTmV3IFRlYW1cbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tbGlzdC10YWJsZVwiPlxuICAgICAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJtZFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmaWx0ZXItdGFibGUtLWhvdmVyIGZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggLz5cbiAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+TWVtYmVyczwvdGg+XG4gICAgICAgICAgICAgICAgICB7ZGlzcGxheVJvbGVQaWNrZXIgJiYgPHRoPlJvbGVzPC90aD59XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxJScgfX0gLz5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+e3BhZ2luYXRlZFRlYW1zLm1hcCgodGVhbSkgPT4gdGhpcy5yZW5kZXJUZWFtKHRlYW0pKX08L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAganVzdGlmeT1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17c2V0VGVhbXNTZWFyY2hQYWdlfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtzZWFyY2hQYWdlfVxuICAgICAgICAgICAgICAgIG51bWJlck9mUGFnZXM9e3RvdGFsUGFnZXN9XG4gICAgICAgICAgICAgICAgaGlkZVdoZW5TaW5nbGVQYWdlPXt0cnVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMaXN0KCkge1xuICAgIGNvbnN0IHsgdGVhbXNDb3VudCwgaGFzRmV0Y2hlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghaGFzRmV0Y2hlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRlYW1zQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZWFtTGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJFbXB0eUxpc3QoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYXNGZXRjaGVkLCBuYXZNb2RlbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9eyFoYXNGZXRjaGVkfT57dGhpcy5yZW5kZXJMaXN0KCl9PC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAndGVhbXMnKSxcbiAgICB0ZWFtczogZ2V0VGVhbXMoc3RhdGUudGVhbXMpLFxuICAgIHNlYXJjaFF1ZXJ5OiBnZXRTZWFyY2hRdWVyeShzdGF0ZS50ZWFtcyksXG4gICAgc2VhcmNoUGFnZTogZ2V0VGVhbXNTZWFyY2hQYWdlKHN0YXRlLnRlYW1zKSxcbiAgICB0ZWFtc0NvdW50OiBnZXRUZWFtc0NvdW50KHN0YXRlLnRlYW1zKSxcbiAgICBoYXNGZXRjaGVkOiBzdGF0ZS50ZWFtcy5oYXNGZXRjaGVkLFxuICAgIGVkaXRvcnNDYW5BZG1pbjogY29uZmlnLmVkaXRvcnNDYW5BZG1pbiwgLy8gdGhpcyBtYWtlcyB0aGUgZmVhdHVyZSB0b2dnbGUgbW9ja2FibGUvY29udHJvbGxhYmxlIGZyb20gdGVzdHMsXG4gICAgc2lnbmVkSW5Vc2VyOiBjb250ZXh0U3J2LnVzZXIsIC8vIHRoaXMgbWFrZXMgdGhlIGZlYXR1cmUgdG9nZ2xlIG1vY2thYmxlL2NvbnRyb2xsYWJsZSBmcm9tIHRlc3RzLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRUZWFtcyxcbiAgZGVsZXRlVGVhbSxcbiAgc2V0U2VhcmNoUXVlcnksXG4gIHNldFRlYW1zU2VhcmNoUGFnZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RXaXRoQ2xlYW5VcChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgKHN0YXRlKSA9PiBzdGF0ZS50ZWFtcykoVGVhbUxpc3QpO1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXBkYXRlTmF2SW5kZXggfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvYWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBUZWFtTWVtYmVyLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGJ1aWxkTmF2TW9kZWwgfSBmcm9tICcuL25hdk1vZGVsJztcbmltcG9ydCB7IHRlYW1Hcm91cHNMb2FkZWQsIHRlYW1Mb2FkZWQsIHRlYW1NZW1iZXJzTG9hZGVkLCB0ZWFtc0xvYWRlZCB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRlYW1zKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIC8vIEVhcmx5IHJldHVybiBpZiB0aGUgdXNlciBjYW5ub3QgbGlzdCB0ZWFtc1xuICAgIGlmICghY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNSZWFkKSkge1xuICAgICAgZGlzcGF0Y2godGVhbXNMb2FkZWQoW10pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoXG4gICAgICAnL2FwaS90ZWFtcy9zZWFyY2gnLFxuICAgICAgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oeyBwZXJwYWdlOiAxMDAwLCBwYWdlOiAxIH0pXG4gICAgKTtcbiAgICBkaXNwYXRjaCh0ZWFtc0xvYWRlZChyZXNwb25zZS50ZWFtcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRlYW0oaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS90ZWFtcy8ke2lkfWAsIGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCkpO1xuICAgIGRpc3BhdGNoKHRlYW1Mb2FkZWQocmVzcG9uc2UpKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVOYXZJbmRleChidWlsZE5hdk1vZGVsKHJlc3BvbnNlKSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRlYW1NZW1iZXJzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vbWVtYmVyc2ApO1xuICAgIGRpc3BhdGNoKHRlYW1NZW1iZXJzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUZWFtTWVtYmVyKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vbWVtYmVyc2AsIHsgdXNlcklkOiBpZCB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbU1lbWJlcnMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUZWFtTWVtYmVyKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9tZW1iZXJzLyR7aWR9YCk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1NZW1iZXJzKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGVhbShuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfWAsIHsgbmFtZSwgZW1haWwgfSk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW0odGVhbS5pZCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRlYW1Hcm91cHMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9ncm91cHNgKTtcbiAgICBkaXNwYXRjaCh0ZWFtR3JvdXBzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUZWFtR3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L2dyb3Vwc2AsIHsgZ3JvdXBJZDogZ3JvdXBJZCB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbUdyb3VwcygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRlYW1Hcm91cChncm91cElkOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9ncm91cHMvJHtlbmNvZGVVUklDb21wb25lbnQoZ3JvdXBJZCl9YCk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1Hcm91cHMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUZWFtKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL3RlYW1zLyR7aWR9YCk7XG4gICAgLy8gVXBkYXRlIHVzZXJzIHBlcm1pc3Npb25zIGluIGNhc2UgdGhleSBsb3N0IHRlYW1zLnJlYWQgd2l0aCB0aGUgZGVsZXRpb25cbiAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1zKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGVhbU1lbWJlcihtZW1iZXI6IFRlYW1NZW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL3RlYW1zLyR7bWVtYmVyLnRlYW1JZH0vbWVtYmVycy8ke21lbWJlci51c2VySWR9YCwge1xuICAgICAgcGVybWlzc2lvbjogbWVtYmVyLnBlcm1pc3Npb24sXG4gICAgfSk7XG4gICAgZGlzcGF0Y2gobG9hZFRlYW1NZW1iZXJzKCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgTmF2TW9kZWxJdGVtLCBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFByb0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1Byb0JhZGdlJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBoaWdobGlnaHRUcmlhbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscyc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBUZWFtLCBUZWFtUGVybWlzc2lvbkxldmVsIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuY29uc3QgbG9hZGluZ1RlYW0gPSB7XG4gIGF2YXRhclVybDogJ3B1YmxpYy9pbWcvdXNlcl9wcm9maWxlLnBuZycsXG4gIGlkOiAxLFxuICBuYW1lOiAnTG9hZGluZycsXG4gIGVtYWlsOiAnbG9hZGluZycsXG4gIG1lbWJlckNvdW50OiAwLFxuICBwZXJtaXNzaW9uOiBUZWFtUGVybWlzc2lvbkxldmVsLk1lbWJlcixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hdk1vZGVsKHRlYW06IFRlYW0pOiBOYXZNb2RlbEl0ZW0ge1xuICBjb25zdCBuYXZNb2RlbDogTmF2TW9kZWxJdGVtID0ge1xuICAgIGltZzogdGVhbS5hdmF0YXJVcmwsXG4gICAgaWQ6ICd0ZWFtLScgKyB0ZWFtLmlkLFxuICAgIHN1YlRpdGxlOiAnTWFuYWdlIG1lbWJlcnMgYW5kIHNldHRpbmdzJyxcbiAgICB1cmw6ICcnLFxuICAgIHRleHQ6IHRlYW0ubmFtZSxcbiAgICBicmVhZGNydW1iczogW3sgdGl0bGU6ICdUZWFtcycsIHVybDogJ29yZy90ZWFtcycgfV0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIC8vIFdpdGggUkJBQyB0aGlzIHRhYiB3aWxsIGFsd2F5cyBiZSBhdmFpbGFibGUgKGJ1dCBub3QgYWx3YXlzIGVkaXRhYmxlKVxuICAgICAgLy8gV2l0aCBMZWdhY3kgaXQgd2lsbCBiZSBoaWRkZW4gYnkgaGlkZVRhYnNGcm9tTm9uVGVhbUFkbWluIHNob3VsZCB0aGUgdXNlciBub3QgYmUgYWxsb3dlZCB0byBzZWUgaXRcbiAgICAgIHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaWNvbjogJ3NsaWRlcnMtdi1hbHQnLFxuICAgICAgICBpZDogYHRlYW0tc2V0dGluZ3MtJHt0ZWFtLmlkfWAsXG4gICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXG4gICAgICAgIHVybDogYG9yZy90ZWFtcy9lZGl0LyR7dGVhbS5pZH0vc2V0dGluZ3NgLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIC8vIFdoaWxlIHRlYW0gaXMgbG9hZGluZyB3ZSBsZWF2ZSB0aGUgbWVtYmVycyB0YWJcbiAgLy8gV2l0aCBSQkFDIHRoZSBNZW1iZXJzIHRhYiBpcyBhdmFpbGFibGUgd2hlbiB1c2VyIGhhcyBBY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCBmb3IgdGhpcyB0ZWFtXG4gIC8vIFdpdGggTGVnYWN5IGl0IHdpbGwgYWx3YXlzIGJlIHByZXNlbnRcbiAgaWYgKFxuICAgIHRlYW0gPT09IGxvYWRpbmdUZWFtIHx8XG4gICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkLCB0ZWFtKVxuICApIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEudW5zaGlmdCh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaWNvbjogJ3VzZXJzLWFsdCcsXG4gICAgICBpZDogYHRlYW0tbWVtYmVycy0ke3RlYW0uaWR9YCxcbiAgICAgIHRleHQ6ICdNZW1iZXJzJyxcbiAgICAgIHVybDogYG9yZy90ZWFtcy9lZGl0LyR7dGVhbS5pZH0vbWVtYmVyc2AsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB0ZWFtR3JvdXBTeW5jOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnc3luYycsXG4gICAgaWQ6IGB0ZWFtLWdyb3Vwc3luYy0ke3RlYW0uaWR9YCxcbiAgICB0ZXh0OiAnRXh0ZXJuYWwgZ3JvdXAgc3luYycsXG4gICAgdXJsOiBgb3JnL3RlYW1zL2VkaXQvJHt0ZWFtLmlkfS9ncm91cHN5bmNgLFxuICB9O1xuXG4gIGNvbnN0IGlzTG9hZGluZ1RlYW0gPSB0ZWFtID09PSBsb2FkaW5nVGVhbTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSkge1xuICAgIHRlYW1Hcm91cFN5bmMudGFiU3VmZml4ID0gKCkgPT5cbiAgICAgIFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBpc0xvYWRpbmdUZWFtID8gJycgOiAnZmVhdHVyZS1oaWdobGlnaHRzLXRlYW0tc3luYy1iYWRnZScsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIC8vIFdpdGggYm90aCBMZWdhY3kgYW5kIFJCQUMgdGhlIHRhYiBpcyBwcm90ZWN0ZWQgYmVpbmcgZmVhdHVyZUVuYWJsZWRcbiAgLy8gV2hpbGUgdGVhbSBpcyBsb2FkaW5nIHdlIGxlYXZlIHRoZSB0ZWFtc3luYyB0YWJcbiAgLy8gV2l0aCBSQkFDIHRoZSBFeHRlcm5hbCBHcm91cCBTeW5jIHRhYiBpcyBhdmFpbGFibGUgd2hlbiB1c2VyIGhhcyBBY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCBmb3IgdGhpcyB0ZWFtXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgndGVhbXN5bmMnKSkge1xuICAgIGlmIChpc0xvYWRpbmdUZWFtIHx8IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCwgdGVhbSkpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHRlYW1Hcm91cFN5bmMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHMpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi50ZWFtR3JvdXBTeW5jLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogaXNMb2FkaW5nVGVhbSA/ICcnIDogJ2ZlYXR1cmUtaGlnaGxpZ2h0cy10ZWFtLXN5bmMtYmFkZ2UnIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVhbUxvYWRpbmdOYXYocGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgY29uc3QgbWFpbiA9IGJ1aWxkTmF2TW9kZWwobG9hZGluZ1RlYW0pO1xuXG4gIGxldCBub2RlOiBOYXZNb2RlbEl0ZW07XG5cbiAgLy8gZmluZCBhY3RpdmUgcGFnZVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1haW4uY2hpbGRyZW4hKSB7XG4gICAgaWYgKGNoaWxkLmlkIS5pbmRleE9mKHBhZ2VOYW1lKSA+IDApIHtcbiAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlID0gY2hpbGQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbm9kZSEsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgVGVhbSwgVGVhbXNTdGF0ZSwgVGVhbVN0YXRlLCBUZWFtTWVtYmVyLCBPcmdSb2xlLCBUZWFtUGVybWlzc2lvbkxldmVsIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFF1ZXJ5ID0gKHN0YXRlOiBUZWFtc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeTtcbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hNZW1iZXJRdWVyeSA9IChzdGF0ZTogVGVhbVN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hNZW1iZXJRdWVyeTtcbmV4cG9ydCBjb25zdCBnZXRUZWFtR3JvdXBzID0gKHN0YXRlOiBUZWFtU3RhdGUpID0+IHN0YXRlLmdyb3VwcztcbmV4cG9ydCBjb25zdCBnZXRUZWFtc0NvdW50ID0gKHN0YXRlOiBUZWFtc1N0YXRlKSA9PiBzdGF0ZS50ZWFtcy5sZW5ndGg7XG5leHBvcnQgY29uc3QgZ2V0VGVhbXNTZWFyY2hQYWdlID0gKHN0YXRlOiBUZWFtc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hQYWdlO1xuXG5leHBvcnQgY29uc3QgZ2V0VGVhbSA9IChzdGF0ZTogVGVhbVN0YXRlLCBjdXJyZW50VGVhbUlkOiBhbnkpOiBUZWFtIHwgbnVsbCA9PiB7XG4gIGlmIChzdGF0ZS50ZWFtLmlkID09PSBwYXJzZUludChjdXJyZW50VGVhbUlkLCAxMCkpIHtcbiAgICByZXR1cm4gc3RhdGUudGVhbTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRlYW1zID0gKHN0YXRlOiBUZWFtc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS50ZWFtcy5maWx0ZXIoKHRlYW0pID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh0ZWFtLm5hbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUZWFtTWVtYmVycyA9IChzdGF0ZTogVGVhbVN0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gUmVnRXhwKHN0YXRlLnNlYXJjaE1lbWJlclF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5tZW1iZXJzLmZpbHRlcigobWVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QobWVtYmVyLmxvZ2luKSB8fCByZWdleC50ZXN0KG1lbWJlci5lbWFpbCkgfHwgcmVnZXgudGVzdChtZW1iZXIubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICBtZW1iZXJzOiBUZWFtTWVtYmVyW107XG4gIGVkaXRvcnNDYW5BZG1pbjogYm9vbGVhbjtcbiAgc2lnbmVkSW5Vc2VyOiBVc2VyO1xufVxuXG5leHBvcnQgY29uc3QgaXNTaWduZWRJblVzZXJUZWFtQWRtaW4gPSAoY29uZmlnOiBDb25maWcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgeyBtZW1iZXJzLCBzaWduZWRJblVzZXIsIGVkaXRvcnNDYW5BZG1pbiB9ID0gY29uZmlnO1xuICBjb25zdCB1c2VySW5NZW1iZXJzID0gbWVtYmVycy5maW5kKChtKSA9PiBtLnVzZXJJZCA9PT0gc2lnbmVkSW5Vc2VyLmlkKTtcbiAgY29uc3QgcGVybWlzc2lvbiA9IHVzZXJJbk1lbWJlcnMgPyB1c2VySW5NZW1iZXJzLnBlcm1pc3Npb24gOiBUZWFtUGVybWlzc2lvbkxldmVsLk1lbWJlcjtcblxuICByZXR1cm4gaXNQZXJtaXNzaW9uVGVhbUFkbWluKHsgcGVybWlzc2lvbiwgc2lnbmVkSW5Vc2VyLCBlZGl0b3JzQ2FuQWRtaW4gfSk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25Db25maWcge1xuICBwZXJtaXNzaW9uOiBUZWFtUGVybWlzc2lvbkxldmVsO1xuICBlZGl0b3JzQ2FuQWRtaW46IGJvb2xlYW47XG4gIHNpZ25lZEluVXNlcjogVXNlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGlzUGVybWlzc2lvblRlYW1BZG1pbiA9IChjb25maWc6IFBlcm1pc3Npb25Db25maWcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgeyBwZXJtaXNzaW9uLCBzaWduZWRJblVzZXIsIGVkaXRvcnNDYW5BZG1pbiB9ID0gY29uZmlnO1xuICBjb25zdCBpc0FkbWluID0gc2lnbmVkSW5Vc2VyLmlzR3JhZmFuYUFkbWluIHx8IHNpZ25lZEluVXNlci5vcmdSb2xlID09PSBPcmdSb2xlLkFkbWluO1xuICBjb25zdCB1c2VySXNUZWFtQWRtaW4gPSBwZXJtaXNzaW9uID09PSBUZWFtUGVybWlzc2lvbkxldmVsLkFkbWluO1xuICBjb25zdCBpc1NpZ25lZEluVXNlclRlYW1BZG1pbiA9IGlzQWRtaW4gfHwgdXNlcklzVGVhbUFkbWluO1xuXG4gIHJldHVybiBpc1NpZ25lZEluVXNlclRlYW1BZG1pbiB8fCAhZWRpdG9yc0NhbkFkbWluO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUFzeW5jRm4iLCJSb2xlUGlja2VyIiwiZmV0Y2hUZWFtUm9sZXMiLCJ1cGRhdGVUZWFtUm9sZXMiLCJUZWFtUm9sZVBpY2tlciIsInRlYW1JZCIsIm9yZ0lkIiwicm9sZU9wdGlvbnMiLCJkaXNhYmxlZCIsImJ1aWx0aW5Sb2xlc0Rpc2FibGVkIiwibG9hZGluZyIsInZhbHVlIiwiYXBwbGllZFJvbGVzIiwiZ2V0VGVhbVJvbGVzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm9uUm9sZXNDaGFuZ2UiLCJyb2xlcyIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwiY29ubmVjdCIsInVzZURpc3BhdGNoIiwiY2xlYW5VcEFjdGlvbiIsImNvbm5lY3RXaXRoQ2xlYW5VcCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInN0YXRlU2VsZWN0b3IiLCJDb21wb25lbnQiLCJDb25uZWN0ZWRDb21wb25lbnQiLCJDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcCIsInByb3BzIiwiZGlzcGF0Y2giLCJjbGVhblVwIiwiZGlzcGxheU5hbWUiLCJjb25maWciLCJpc1RyaWFsIiwiZXhwaXJ5IiwibGljZW5zZUluZm8iLCJ0cmlhbEV4cGlyeSIsImhpZ2hsaWdodFRyaWFsIiwiZmVhdHVyZVRvZ2dsZXMiLCJmZWF0dXJlSGlnaGxpZ2h0cyIsIlB1cmVDb21wb25lbnQiLCJEZWxldGVCdXR0b24iLCJMaW5rQnV0dG9uIiwiRmlsdGVySW5wdXQiLCJWZXJ0aWNhbEdyb3VwIiwiSG9yaXpvbnRhbEdyb3VwIiwiUGFnaW5hdGlvbiIsIkVtcHR5TGlzdENUQSIsIlBhZ2UiLCJmZXRjaFJvbGVPcHRpb25zIiwiZ2V0TmF2TW9kZWwiLCJjb250ZXh0U3J2IiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImRlbGV0ZVRlYW0iLCJsb2FkVGVhbXMiLCJzZXRTZWFyY2hRdWVyeSIsInNldFRlYW1zU2VhcmNoUGFnZSIsImdldFNlYXJjaFF1ZXJ5IiwiZ2V0VGVhbXMiLCJnZXRUZWFtc0NvdW50IiwiZ2V0VGVhbXNTZWFyY2hQYWdlIiwiaXNQZXJtaXNzaW9uVGVhbUFkbWluIiwicGFnZUxpbWl0IiwiVGVhbUxpc3QiLCJjb25zdHJ1Y3RvciIsInRlYW0iLCJpZCIsInRlYW1zIiwib2Zmc2V0Iiwic2VhcmNoUGFnZSIsInNsaWNlIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoVGVhbXMiLCJsaWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkIiwiaGFzUGVybWlzc2lvbiIsIkFjdGlvblJvbGVzTGlzdCIsInNldFN0YXRlIiwicmVuZGVyVGVhbSIsImVkaXRvcnNDYW5BZG1pbiIsInNpZ25lZEluVXNlciIsInBlcm1pc3Npb24iLCJ0ZWFtVXJsIiwiaXNUZWFtQWRtaW4iLCJjYW5EZWxldGUiLCJoYXNBY2Nlc3NJbk1ldGFkYXRhIiwiQWN0aW9uVGVhbXNEZWxldGUiLCJjYW5SZWFkVGVhbSIsIkFjdGlvblRlYW1zUmVhZCIsImNhblNlZVRlYW1Sb2xlcyIsIkFjdGlvblRlYW1zUm9sZXNMaXN0IiwiY2FuVXBkYXRlVGVhbVJvbGVzIiwiaGFzQWNjZXNzIiwiQWN0aW9uVGVhbXNSb2xlc0FkZCIsIkFjdGlvblRlYW1zUm9sZXNSZW1vdmUiLCJkaXNwbGF5Um9sZVBpY2tlciIsImF2YXRhclVybCIsIm5hbWUiLCJwYWRkaW5nIiwiZW1haWwiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJtZW1iZXJDb3VudCIsInJlbmRlckVtcHR5TGlzdCIsIkFjdGlvblRlYW1zQ3JlYXRlIiwicmVuZGVyVGVhbUxpc3QiLCJzZWFyY2hRdWVyeSIsInRlYW1BZG1pbiIsImhhc1JvbGUiLCJjYW5DcmVhdGUiLCJuZXdUZWFtSHJlZiIsInBhZ2luYXRlZFRlYW1zIiwiZ2V0UGFnaW5hdGVkVGVhbXMiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJvblNlYXJjaFF1ZXJ5Q2hhbmdlIiwid2lkdGgiLCJtYXAiLCJyZW5kZXJMaXN0IiwidGVhbXNDb3VudCIsImhhc0ZldGNoZWQiLCJyZW5kZXIiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwidXNlciIsImdldEJhY2tlbmRTcnYiLCJ1cGRhdGVOYXZJbmRleCIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiYnVpbGROYXZNb2RlbCIsInRlYW1Hcm91cHNMb2FkZWQiLCJ0ZWFtTG9hZGVkIiwidGVhbU1lbWJlcnNMb2FkZWQiLCJ0ZWFtc0xvYWRlZCIsInJlc3BvbnNlIiwiZ2V0IiwicGVycGFnZSIsInBhZ2UiLCJsb2FkVGVhbSIsImxvYWRUZWFtTWVtYmVycyIsImdldFN0b3JlIiwiYWRkVGVhbU1lbWJlciIsInBvc3QiLCJ1c2VySWQiLCJyZW1vdmVUZWFtTWVtYmVyIiwiZGVsZXRlIiwidXBkYXRlVGVhbSIsInB1dCIsImxvYWRUZWFtR3JvdXBzIiwiYWRkVGVhbUdyb3VwIiwiZ3JvdXBJZCIsInJlbW92ZVRlYW1Hcm91cCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZldGNoVXNlclBlcm1pc3Npb25zIiwidXBkYXRlVGVhbU1lbWJlciIsIm1lbWJlciIsImZlYXR1cmVFbmFibGVkIiwiUHJvQmFkZ2UiLCJUZWFtUGVybWlzc2lvbkxldmVsIiwibG9hZGluZ1RlYW0iLCJNZW1iZXIiLCJpbWciLCJzdWJUaXRsZSIsInVybCIsInRleHQiLCJicmVhZGNydW1icyIsInRpdGxlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpY29uIiwiaGFzUGVybWlzc2lvbkluTWV0YWRhdGEiLCJBY3Rpb25UZWFtc1Blcm1pc3Npb25zUmVhZCIsInVuc2hpZnQiLCJ0ZWFtR3JvdXBTeW5jIiwiaXNMb2FkaW5nVGVhbSIsInRhYlN1ZmZpeCIsImV4cGVyaW1lbnRJZCIsImV2ZW50VmFyaWFudCIsInB1c2giLCJnZXRUZWFtTG9hZGluZ05hdiIsInBhZ2VOYW1lIiwibWFpbiIsIm5vZGUiLCJjaGlsZCIsImluZGV4T2YiLCJPcmdSb2xlIiwiZ2V0U2VhcmNoTWVtYmVyUXVlcnkiLCJzZWFyY2hNZW1iZXJRdWVyeSIsImdldFRlYW1Hcm91cHMiLCJncm91cHMiLCJnZXRUZWFtIiwiY3VycmVudFRlYW1JZCIsInBhcnNlSW50IiwicmVnZXgiLCJSZWdFeHAiLCJmaWx0ZXIiLCJ0ZXN0IiwiZ2V0VGVhbU1lbWJlcnMiLCJtZW1iZXJzIiwibG9naW4iLCJpc1NpZ25lZEluVXNlclRlYW1BZG1pbiIsInVzZXJJbk1lbWJlcnMiLCJmaW5kIiwibSIsImlzQWRtaW4iLCJpc0dyYWZhbmFBZG1pbiIsIm9yZ1JvbGUiLCJBZG1pbiIsInVzZXJJc1RlYW1BZG1pbiJdLCJzb3VyY2VSb290IjoiIn0=