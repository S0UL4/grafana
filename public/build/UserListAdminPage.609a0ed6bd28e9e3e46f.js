"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserListAdminPage"],{

/***/ "./public/app/features/admin/UserListAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addExtraFilters": () => (/* binding */ addExtraFilters),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/admin/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LinkButton, _PageLoader, _th, _th2, _th3, _th4, _th5, _Icon, _th6, _Tooltip, _Tooltip2, _span;















const extraFilters = [];
const addExtraFilters = filter => {
  extraFilters.push(filter);
};
const mapDispatchToProps = {
  fetchUsers: _state_actions__WEBPACK_IMPORTED_MODULE_10__.fetchUsers,
  changeQuery: _state_actions__WEBPACK_IMPORTED_MODULE_10__.changeQuery,
  changePage: _state_actions__WEBPACK_IMPORTED_MODULE_10__.changePage,
  changeFilter: _state_actions__WEBPACK_IMPORTED_MODULE_10__.changeFilter
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__.getNavModel)(state.navIndex, 'global-users'),
  users: state.userListAdmin.users,
  query: state.userListAdmin.query,
  showPaging: state.userListAdmin.showPaging,
  totalPages: state.userListAdmin.totalPages,
  page: state.userListAdmin.page,
  filters: state.userListAdmin.filters,
  isLoading: state.userListAdmin.isLoading
});

const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);

const UserListAdminPageUnConnected = ({
  fetchUsers,
  navModel,
  query,
  changeQuery,
  users,
  showPaging,
  totalPages,
  page,
  changePage,
  changeFilter,
  filters,
  isLoading
}) => {
  var _filters$find;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchUsers();
  }, [fetchUsers]);
  const showLicensedRole = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => users.some(user => user.licensedRole), [users]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "gf-form gf-form--grow",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FilterInput, {
            placeholder: "Search user by login, email, or name.",
            autoFocus: true,
            value: query,
            onChange: changeQuery
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
            options: [{
              label: 'All users',
              value: false
            }, {
              label: 'Active last 30 days',
              value: true
            }],
            onChange: value => changeFilter({
              name: 'activeLast30Days',
              value
            }),
            value: (_filters$find = filters.find(f => f.name === 'activeLast30Days')) === null || _filters$find === void 0 ? void 0 : _filters$find.value,
            className: styles.filter
          }), extraFilters.map((FilterComponent, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FilterComponent, {
            filters: filters,
            onChange: changeFilter,
            className: styles.filter
          }, index))]
        }), app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.UsersCreate) && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          href: "admin/users/create",
          variant: "primary",
          children: "New user"
        })))]
      }), isLoading ? _PageLoader || (_PageLoader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {})) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.table, 'admin-list-table'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("table", {
            className: "filter-table form-inline filter-table--hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  children: "Login"
                })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  children: "Email"
                })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  children: "Name"
                })), _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  children: "Belongs to"
                })), showLicensedRole && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("th", {
                  children: ["Licensed role", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    placement: "top",
                    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                      children: ["Licensed role is based on a user's Org role (i.e. Viewer, Editor, Admin) and their dashboard/folder permissions.", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
                        className: styles.link,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: 'https://grafana.com/docs/grafana/next/enterprise/license/license-restrictions/#active-users-limit',
                        children: "Learn more"
                      })]
                    }),
                    children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "question-circle"
                    }))
                  })]
                }), _th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("th", {
                  children: ["Last active\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    placement: "top",
                    content: "Time since user was seen using Grafana",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "question-circle"
                    })
                  })]
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  style: {
                    width: '1%'
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("tbody", {
              children: users.map(user => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(UserListItem, {
                user: user,
                showLicensedRole: showLicensedRole
              }, user.id))
            })]
          })
        }), showPaging && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
          numberOfPages: totalPages,
          currentPage: page,
          onNavigate: changePage
        })]
      })]
    })
  });
};

const getUsersAriaLabel = name => {
  return `Edit user's ${name} details`;
};

const UserListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({
  user,
  showLicensedRole
}) => {
  var _user$orgs;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const editUrl = `admin/users/edit/${user.id}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "width-4 text-center link-td",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: editUrl,
        "aria-label": `Edit user's ${user.name} details`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
          className: "filter-table__avatar",
          src: user.avatarUrl,
          alt: `Avatar for user ${user.name}`
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.login,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.login
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.email,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.email
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.name,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("td", {
      className: styles.row,
      title: (_user$orgs = user.orgs) !== null && _user$orgs !== void 0 && _user$orgs.length ? `The user is a member of the following organizations: ${user.orgs.map(org => org.name).join(',')}` : undefined,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(OrgUnits, {
        units: user.orgs,
        icon: 'building'
      }), user.isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: editUrl,
        "aria-label": getUsersAriaLabel(user.name),
        children: _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          placement: "top",
          content: "Grafana Admin",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "shield"
          })
        }))
      })]
    }), showLicensedRole && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('link-td', styles.iconRow),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.name,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.licensedRole === 'None' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
          className: styles.disabled,
          children: ["Not assigned", ' ', _Tooltip2 || (_Tooltip2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
            placement: "top",
            content: "A licensed role will be assigned when this user signs in",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              name: "question-circle"
            })
          }))]
        }) : user.licensedRole
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "link-td",
      children: user.lastSeenAtAge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: editUrl,
        "aria-label": `Last seen at ${user.lastSeenAtAge}. Follow to edit user's ${user.name} details.`,
        children: user.lastSeenAtAge === '10 years' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: styles.disabled,
          children: "Never"
        }) : user.lastSeenAtAge
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "text-right",
      children: Array.isArray(user.authLabels) && user.authLabels.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_5__.TagBadge, {
        label: user.authLabels[0],
        removeIcon: false,
        count: 0
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "text-right",
      children: user.isDisabled && (_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
        className: "label label-tag label-tag--gray",
        children: "Disabled"
      })))
    })]
  }, user.id);
});
UserListItem.displayName = 'UserListItem';

const OrgUnits = ({
  units,
  icon
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  if (!(units !== null && units !== void 0 && units.length)) {
    return null;
  }

  return units.length > 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    placement: 'top',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.unitTooltip,
      children: units === null || units === void 0 ? void 0 : units.map(unit => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: unit.url,
        className: styles.link,
        title: unit.name,
        "aria-label": `Edit ${unit.name}`,
        children: unit.name
      }, unit.name))
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.unitItem,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: icon
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
        children: units.length
      })]
    })
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
    href: units[0].url,
    className: styles.unitItem,
    title: units[0].name,
    "aria-label": `Edit ${units[0].name}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      name: icon
    }), " ", units[0].name]
  }, units[0].name);
};

const getStyles = theme => {
  return {
    table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(3)};
    `,
    filter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0 ${theme.spacing(1)};
    `,
    iconRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      svg {
        margin-left: ${theme.spacing(0.5)};
      }
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${theme.spacing(0.5)} 0 !important;
      }
    `,
    unitTooltip: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
    `,
    unitItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      cursor: pointer;
      padding: ${theme.spacing(0.5)} 0;
      margin-right: ${theme.spacing(1)};
    `,
    disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.disabled};
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UserListAdminPageUnConnected));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxpc3RBZG1pblBhZ2UuNjA5YTBlZDZiZDI4ZTllM2U0NmYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFPQSxNQUFNd0IsWUFBK0MsR0FBRyxFQUF4RDtBQUNPLE1BQU1DLGVBQWUsR0FBSUMsTUFBRCxJQUF3QztFQUNyRUYsWUFBWSxDQUFDRyxJQUFiLENBQWtCRCxNQUFsQjtBQUNELENBRk07QUFJUCxNQUFNRSxrQkFBa0IsR0FBRztFQUN6QkwsVUFEeUI7RUFFekJELFdBRnlCO0VBR3pCRCxVQUh5QjtFQUl6QkQsWUFBWUEsMkRBQUFBO0FBSmEsQ0FBM0I7O0FBT0EsTUFBTVMsZUFBZSxHQUFJQyxLQUFELEtBQXdCO0VBQzlDQyxRQUFRLEVBQUViLHFFQUFXLENBQUNZLEtBQUssQ0FBQ0UsUUFBUCxFQUFpQixjQUFqQixDQUR5QjtFQUU5Q0MsS0FBSyxFQUFFSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JELEtBRm1CO0VBRzlDRSxLQUFLLEVBQUVMLEtBQUssQ0FBQ0ksYUFBTixDQUFvQkMsS0FIbUI7RUFJOUNDLFVBQVUsRUFBRU4sS0FBSyxDQUFDSSxhQUFOLENBQW9CRSxVQUpjO0VBSzlDQyxVQUFVLEVBQUVQLEtBQUssQ0FBQ0ksYUFBTixDQUFvQkcsVUFMYztFQU05Q0MsSUFBSSxFQUFFUixLQUFLLENBQUNJLGFBQU4sQ0FBb0JJLElBTm9CO0VBTzlDQyxPQUFPLEVBQUVULEtBQUssQ0FBQ0ksYUFBTixDQUFvQkssT0FQaUI7RUFROUNDLFNBQVMsRUFBRVYsS0FBSyxDQUFDSSxhQUFOLENBQW9CTTtBQVJlLENBQXhCLENBQXhCOztBQVdBLE1BQU1DLFNBQVMsR0FBR25DLG9EQUFPLENBQUN1QixlQUFELEVBQWtCRCxrQkFBbEIsQ0FBekI7O0FBTUEsTUFBTWMsNEJBQTZDLEdBQUcsQ0FBQztFQUNyRG5CLFVBRHFE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QyxTQUFTLENBQUNDLDRCQUFELENBQXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vVXNlckxpc3RBZG1pblBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFR5cGUsIHVzZUVmZmVjdCwgdXNlTWVtbywgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQge1xuICBJY29uLFxuICBJY29uTmFtZSxcbiAgTGlua0J1dHRvbixcbiAgUGFnaW5hdGlvbixcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgVG9vbHRpcCxcbiAgdXNlU3R5bGVzMixcbiAgRmlsdGVySW5wdXQsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFRhZ0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnQmFkZ2UnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuXG5pbXBvcnQgUGFnZUxvYWRlciBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFnZUxvYWRlci9QYWdlTG9hZGVyJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgU3RvcmVTdGF0ZSwgVW5pdCwgVXNlckRUTywgVXNlckZpbHRlciB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgY2hhbmdlRmlsdGVyLCBjaGFuZ2VQYWdlLCBjaGFuZ2VRdWVyeSwgZmV0Y2hVc2VycyB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyUHJvcHMge1xuICBmaWx0ZXJzOiBVc2VyRmlsdGVyW107XG4gIG9uQ2hhbmdlOiAoZmlsdGVyOiBhbnkpID0+IHZvaWQ7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cbmNvbnN0IGV4dHJhRmlsdGVyczogQXJyYXk8Q29tcG9uZW50VHlwZTxGaWx0ZXJQcm9wcz4+ID0gW107XG5leHBvcnQgY29uc3QgYWRkRXh0cmFGaWx0ZXJzID0gKGZpbHRlcjogQ29tcG9uZW50VHlwZTxGaWx0ZXJQcm9wcz4pID0+IHtcbiAgZXh0cmFGaWx0ZXJzLnB1c2goZmlsdGVyKTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZmV0Y2hVc2VycyxcbiAgY2hhbmdlUXVlcnksXG4gIGNoYW5nZVBhZ2UsXG4gIGNoYW5nZUZpbHRlcixcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnZ2xvYmFsLXVzZXJzJyksXG4gIHVzZXJzOiBzdGF0ZS51c2VyTGlzdEFkbWluLnVzZXJzLFxuICBxdWVyeTogc3RhdGUudXNlckxpc3RBZG1pbi5xdWVyeSxcbiAgc2hvd1BhZ2luZzogc3RhdGUudXNlckxpc3RBZG1pbi5zaG93UGFnaW5nLFxuICB0b3RhbFBhZ2VzOiBzdGF0ZS51c2VyTGlzdEFkbWluLnRvdGFsUGFnZXMsXG4gIHBhZ2U6IHN0YXRlLnVzZXJMaXN0QWRtaW4ucGFnZSxcbiAgZmlsdGVyczogc3RhdGUudXNlckxpc3RBZG1pbi5maWx0ZXJzLFxuICBpc0xvYWRpbmc6IHN0YXRlLnVzZXJMaXN0QWRtaW4uaXNMb2FkaW5nLFxufSk7XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge31cblxudHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmNvbnN0IFVzZXJMaXN0QWRtaW5QYWdlVW5Db25uZWN0ZWQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGZldGNoVXNlcnMsXG4gIG5hdk1vZGVsLFxuICBxdWVyeSxcbiAgY2hhbmdlUXVlcnksXG4gIHVzZXJzLFxuICBzaG93UGFnaW5nLFxuICB0b3RhbFBhZ2VzLFxuICBwYWdlLFxuICBjaGFuZ2VQYWdlLFxuICBjaGFuZ2VGaWx0ZXIsXG4gIGZpbHRlcnMsXG4gIGlzTG9hZGluZyxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VycygpO1xuICB9LCBbZmV0Y2hVc2Vyc10pO1xuXG4gIGNvbnN0IHNob3dMaWNlbnNlZFJvbGUgPSB1c2VNZW1vKCgpID0+IHVzZXJzLnNvbWUoKHVzZXIpID0+IHVzZXIubGljZW5zZWRSb2xlKSwgW3VzZXJzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICAgIDxGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB1c2VyIGJ5IGxvZ2luLCBlbWFpbCwgb3IgbmFtZS5cIlxuICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVF1ZXJ5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQWxsIHVzZXJzJywgdmFsdWU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0FjdGl2ZSBsYXN0IDMwIGRheXMnLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBjaGFuZ2VGaWx0ZXIoeyBuYW1lOiAnYWN0aXZlTGFzdDMwRGF5cycsIHZhbHVlIH0pfVxuICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVycy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICdhY3RpdmVMYXN0MzBEYXlzJyk/LnZhbHVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2V4dHJhRmlsdGVycy5tYXAoKEZpbHRlckNvbXBvbmVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEZpbHRlckNvbXBvbmVudCBrZXk9e2luZGV4fSBmaWx0ZXJzPXtmaWx0ZXJzfSBvbkNoYW5nZT17Y2hhbmdlRmlsdGVyfSBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uVXNlcnNDcmVhdGUpICYmIChcbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9XCJhZG1pbi91c2Vycy9jcmVhdGVcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICBOZXcgdXNlclxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxQYWdlTG9hZGVyIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMudGFibGUsICdhZG1pbi1saXN0LXRhYmxlJyl9PlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lIGZpbHRlci10YWJsZS0taG92ZXJcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TG9naW48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5CZWxvbmdzIHRvPC90aD5cbiAgICAgICAgICAgICAgICAgICAge3Nob3dMaWNlbnNlZFJvbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpY2Vuc2VkIHJvbGV7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpY2Vuc2VkIHJvbGUgaXMgYmFzZWQgb24gYSB1c2VyJmFwb3M7cyBPcmcgcm9sZSAoaS5lLiBWaWV3ZXIsIEVkaXRvciwgQWRtaW4pIGFuZCB0aGVpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkL2ZvbGRlciBwZXJtaXNzaW9ucy57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9uZXh0L2VudGVycHJpc2UvbGljZW5zZS9saWNlbnNlLXJlc3RyaWN0aW9ucy8jYWN0aXZlLXVzZXJzLWxpbWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlYXJuIG1vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgTGFzdCBhY3RpdmUmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiBjb250ZW50PVwiVGltZSBzaW5jZSB1c2VyIHdhcyBzZWVuIHVzaW5nIEdyYWZhbmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMSUnIH19PjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VXNlckxpc3RJdGVtIHVzZXI9e3VzZXJ9IHNob3dMaWNlbnNlZFJvbGU9e3Nob3dMaWNlbnNlZFJvbGV9IGtleT17dXNlci5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93UGFnaW5nICYmIDxQYWdpbmF0aW9uIG51bWJlck9mUGFnZXM9e3RvdGFsUGFnZXN9IGN1cnJlbnRQYWdlPXtwYWdlfSBvbk5hdmlnYXRlPXtjaGFuZ2VQYWdlfSAvPn1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5jb25zdCBnZXRVc2Vyc0FyaWFMYWJlbCA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGBFZGl0IHVzZXIncyAke25hbWV9IGRldGFpbHNgO1xufTtcblxudHlwZSBVc2VyTGlzdEl0ZW1Qcm9wcyA9IHtcbiAgdXNlcjogVXNlckRUTztcbiAgc2hvd0xpY2Vuc2VkUm9sZTogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFVzZXJMaXN0SXRlbSA9IG1lbW8oKHsgdXNlciwgc2hvd0xpY2Vuc2VkUm9sZSB9OiBVc2VyTGlzdEl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGVkaXRVcmwgPSBgYWRtaW4vdXNlcnMvZWRpdC8ke3VzZXIuaWR9YDtcblxuICByZXR1cm4gKFxuICAgIDx0ciBrZXk9e3VzZXIuaWR9PlxuICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTQgdGV4dC1jZW50ZXIgbGluay10ZFwiPlxuICAgICAgICA8YSBocmVmPXtlZGl0VXJsfSBhcmlhLWxhYmVsPXtgRWRpdCB1c2VyJ3MgJHt1c2VyLm5hbWV9IGRldGFpbHNgfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZV9fYXZhdGFyXCIgc3JjPXt1c2VyLmF2YXRhclVybH0gYWx0PXtgQXZhdGFyIGZvciB1c2VyICR7dXNlci5uYW1lfWB9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwibGluay10ZCBtYXgtd2lkdGgtMTBcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiBocmVmPXtlZGl0VXJsfSB0aXRsZT17dXNlci5sb2dpbn0gYXJpYS1sYWJlbD17Z2V0VXNlcnNBcmlhTGFiZWwodXNlci5uYW1lKX0+XG4gICAgICAgICAge3VzZXIubG9naW59XG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwibGluay10ZCBtYXgtd2lkdGgtMTBcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiBocmVmPXtlZGl0VXJsfSB0aXRsZT17dXNlci5lbWFpbH0gYXJpYS1sYWJlbD17Z2V0VXNlcnNBcmlhTGFiZWwodXNlci5uYW1lKX0+XG4gICAgICAgICAge3VzZXIuZW1haWx9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwibGluay10ZCBtYXgtd2lkdGgtMTBcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiBocmVmPXtlZGl0VXJsfSB0aXRsZT17dXNlci5uYW1lfSBhcmlhLWxhYmVsPXtnZXRVc2Vyc0FyaWFMYWJlbCh1c2VyLm5hbWUpfT5cbiAgICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgICA8L2E+XG4gICAgICA8L3RkPlxuXG4gICAgICA8dGRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucm93fVxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgdXNlci5vcmdzPy5sZW5ndGhcbiAgICAgICAgICAgID8gYFRoZSB1c2VyIGlzIGEgbWVtYmVyIG9mIHRoZSBmb2xsb3dpbmcgb3JnYW5pemF0aW9uczogJHt1c2VyLm9yZ3MubWFwKChvcmcpID0+IG9yZy5uYW1lKS5qb2luKCcsJyl9YFxuICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8T3JnVW5pdHMgdW5pdHM9e3VzZXIub3Jnc30gaWNvbj17J2J1aWxkaW5nJ30gLz5cbiAgICAgICAge3VzZXIuaXNBZG1pbiAmJiAoXG4gICAgICAgICAgPGEgaHJlZj17ZWRpdFVybH0gYXJpYS1sYWJlbD17Z2V0VXNlcnNBcmlhTGFiZWwodXNlci5uYW1lKX0+XG4gICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiBjb250ZW50PVwiR3JhZmFuYSBBZG1pblwiPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2hpZWxkXCIgLz5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG4gICAgICA8L3RkPlxuICAgICAge3Nob3dMaWNlbnNlZFJvbGUgJiYgKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtjeCgnbGluay10ZCcsIHN0eWxlcy5pY29uUm93KX0+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiBocmVmPXtlZGl0VXJsfSB0aXRsZT17dXNlci5uYW1lfSBhcmlhLWxhYmVsPXtnZXRVc2Vyc0FyaWFMYWJlbCh1c2VyLm5hbWUpfT5cbiAgICAgICAgICAgIHt1c2VyLmxpY2Vuc2VkUm9sZSA9PT0gJ05vbmUnID8gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kaXNhYmxlZH0+XG4gICAgICAgICAgICAgICAgTm90IGFzc2lnbmVkeycgJ31cbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiBjb250ZW50PVwiQSBsaWNlbnNlZCByb2xlIHdpbGwgYmUgYXNzaWduZWQgd2hlbiB0aGlzIHVzZXIgc2lnbnMgaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgdXNlci5saWNlbnNlZFJvbGVcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgICAgKX1cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkXCI+XG4gICAgICAgIHt1c2VyLmxhc3RTZWVuQXRBZ2UgJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtlZGl0VXJsfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YExhc3Qgc2VlbiBhdCAke3VzZXIubGFzdFNlZW5BdEFnZX0uIEZvbGxvdyB0byBlZGl0IHVzZXIncyAke3VzZXIubmFtZX0gZGV0YWlscy5gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt1c2VyLmxhc3RTZWVuQXRBZ2UgPT09ICcxMCB5ZWFycycgPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kaXNhYmxlZH0+TmV2ZXI8L3NwYW4+IDogdXNlci5sYXN0U2VlbkF0QWdlfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICB7QXJyYXkuaXNBcnJheSh1c2VyLmF1dGhMYWJlbHMpICYmIHVzZXIuYXV0aExhYmVscy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8VGFnQmFkZ2UgbGFiZWw9e3VzZXIuYXV0aExhYmVsc1swXX0gcmVtb3ZlSWNvbj17ZmFsc2V9IGNvdW50PXswfSAvPlxuICAgICAgICApfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgIHt1c2VyLmlzRGlzYWJsZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtdGFnIGxhYmVsLXRhZy0tZ3JheVwiPkRpc2FibGVkPC9zcGFuPn1cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn0pO1xuXG5Vc2VyTGlzdEl0ZW0uZGlzcGxheU5hbWUgPSAnVXNlckxpc3RJdGVtJztcblxudHlwZSBPcmdVbml0UHJvcHMgPSB7IHVuaXRzPzogVW5pdFtdOyBpY29uOiBJY29uTmFtZSB9O1xuXG5jb25zdCBPcmdVbml0cyA9ICh7IHVuaXRzLCBpY29uIH06IE9yZ1VuaXRQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgaWYgKCF1bml0cz8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdW5pdHMubGVuZ3RoID4gMSA/IChcbiAgICA8VG9vbHRpcFxuICAgICAgcGxhY2VtZW50PXsndG9wJ31cbiAgICAgIGNvbnRlbnQ9e1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVuaXRUb29sdGlwfT5cbiAgICAgICAgICB7dW5pdHM/Lm1hcCgodW5pdCkgPT4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17dW5pdC51cmx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICAgICAgICAgIHRpdGxlPXt1bml0Lm5hbWV9XG4gICAgICAgICAgICAgIGtleT17dW5pdC5uYW1lfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgRWRpdCAke3VuaXQubmFtZX1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dW5pdC5uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVuaXRJdGVtfT5cbiAgICAgICAgPEljb24gbmFtZT17aWNvbn0gLz4gPHNwYW4+e3VuaXRzLmxlbmd0aH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Rvb2x0aXA+XG4gICkgOiAoXG4gICAgPGFcbiAgICAgIGhyZWY9e3VuaXRzWzBdLnVybH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVuaXRJdGVtfVxuICAgICAgdGl0bGU9e3VuaXRzWzBdLm5hbWV9XG4gICAgICBrZXk9e3VuaXRzWzBdLm5hbWV9XG4gICAgICBhcmlhLWxhYmVsPXtgRWRpdCAke3VuaXRzWzBdLm5hbWV9YH1cbiAgICA+XG4gICAgICA8SWNvbiBuYW1lPXtpY29ufSAvPiB7dW5pdHNbMF0ubmFtZX1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0YWJsZTogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgICBgLFxuICAgIGZpbHRlcjogY3NzYFxuICAgICAgbWFyZ2luOiAwICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBpY29uUm93OiBjc3NgXG4gICAgICBzdmcge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgcm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuXG4gICAgICBhIHtcbiAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDAuNSl9IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBgLFxuICAgIHVuaXRUb29sdGlwOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBgLFxuICAgIHVuaXRJdGVtOiBjc3NgXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMC41KX0gMDtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGRpc2FibGVkOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5kaXNhYmxlZH07XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoVXNlckxpc3RBZG1pblBhZ2VVbkNvbm5lY3RlZCk7XG4iXSwibmFtZXMiOlsiY3NzIiwiY3giLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJtZW1vIiwiY29ubmVjdCIsIkljb24iLCJMaW5rQnV0dG9uIiwiUGFnaW5hdGlvbiIsIlJhZGlvQnV0dG9uR3JvdXAiLCJUb29sdGlwIiwidXNlU3R5bGVzMiIsIkZpbHRlcklucHV0IiwiUGFnZSIsIlRhZ0JhZGdlIiwiY29udGV4dFNydiIsIlBhZ2VMb2FkZXIiLCJnZXROYXZNb2RlbCIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJjaGFuZ2VGaWx0ZXIiLCJjaGFuZ2VQYWdlIiwiY2hhbmdlUXVlcnkiLCJmZXRjaFVzZXJzIiwiZXh0cmFGaWx0ZXJzIiwiYWRkRXh0cmFGaWx0ZXJzIiwiZmlsdGVyIiwicHVzaCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsInVzZXJzIiwidXNlckxpc3RBZG1pbiIsInF1ZXJ5Iiwic2hvd1BhZ2luZyIsInRvdGFsUGFnZXMiLCJwYWdlIiwiZmlsdGVycyIsImlzTG9hZGluZyIsImNvbm5lY3RvciIsIlVzZXJMaXN0QWRtaW5QYWdlVW5Db25uZWN0ZWQiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJzaG93TGljZW5zZWRSb2xlIiwic29tZSIsInVzZXIiLCJsaWNlbnNlZFJvbGUiLCJsYWJlbCIsInZhbHVlIiwibmFtZSIsImZpbmQiLCJmIiwibWFwIiwiRmlsdGVyQ29tcG9uZW50IiwiaW5kZXgiLCJoYXNQZXJtaXNzaW9uIiwiVXNlcnNDcmVhdGUiLCJ0YWJsZSIsImxpbmsiLCJ3aWR0aCIsImlkIiwiZ2V0VXNlcnNBcmlhTGFiZWwiLCJVc2VyTGlzdEl0ZW0iLCJlZGl0VXJsIiwiYXZhdGFyVXJsIiwibG9naW4iLCJlbWFpbCIsInJvdyIsIm9yZ3MiLCJsZW5ndGgiLCJvcmciLCJqb2luIiwidW5kZWZpbmVkIiwiaXNBZG1pbiIsImljb25Sb3ciLCJkaXNhYmxlZCIsImxhc3RTZWVuQXRBZ2UiLCJBcnJheSIsImlzQXJyYXkiLCJhdXRoTGFiZWxzIiwiaXNEaXNhYmxlZCIsImRpc3BsYXlOYW1lIiwiT3JnVW5pdHMiLCJ1bml0cyIsImljb24iLCJ1bml0VG9vbHRpcCIsInVuaXQiLCJ1cmwiLCJ1bml0SXRlbSIsInRoZW1lIiwic3BhY2luZyIsImNvbG9ycyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9