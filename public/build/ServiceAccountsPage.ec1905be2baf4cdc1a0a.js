"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServiceAccountsPage"],{

/***/ "./public/app/features/serviceaccounts/ServiceAccountsListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceAccountsListPageUnconnected": () => (/* binding */ ServiceAccountsListPageUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _components_CreateTokenModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/serviceaccounts/components/CreateTokenModal.tsx");
/* harmony import */ var _components_ServiceAccountsListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/serviceaccounts/components/ServiceAccountsListItem.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/serviceaccounts/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Tooltip, _span, _LinkButton, _PageLoader, _th, _th2, _th3, _th4, _th5;



















function mapStateToProps(state) {
  return Object.assign({
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, 'serviceaccounts')
  }, state.serviceAccounts);
}

const mapDispatchToProps = {
  changeQuery: _state_actions__WEBPACK_IMPORTED_MODULE_13__.changeQuery,
  fetchACOptions: _state_actions__WEBPACK_IMPORTED_MODULE_13__.fetchACOptions,
  fetchServiceAccounts: _state_actions__WEBPACK_IMPORTED_MODULE_13__.fetchServiceAccounts,
  deleteServiceAccount: _state_actions__WEBPACK_IMPORTED_MODULE_13__.deleteServiceAccount,
  updateServiceAccount: _state_actions__WEBPACK_IMPORTED_MODULE_13__.updateServiceAccount,
  changeStateFilter: _state_actions__WEBPACK_IMPORTED_MODULE_13__.changeStateFilter,
  createServiceAccountToken: _state_actions__WEBPACK_IMPORTED_MODULE_13__.createServiceAccountToken,
  getApiKeysMigrationStatus: _state_actions__WEBPACK_IMPORTED_MODULE_13__.getApiKeysMigrationStatus,
  getApiKeysMigrationInfo: _state_actions__WEBPACK_IMPORTED_MODULE_13__.getApiKeysMigrationInfo,
  closeApiKeysMigrationInfo: _state_actions__WEBPACK_IMPORTED_MODULE_13__.closeApiKeysMigrationInfo
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);
const ServiceAccountsListPageUnconnected = ({
  navModel,
  serviceAccounts,
  isLoading,
  roleOptions,
  builtInRoles,
  query,
  serviceAccountStateFilter,
  apiKeysMigrated,
  showApiKeysMigrationInfo,
  changeQuery,
  fetchACOptions,
  fetchServiceAccounts,
  deleteServiceAccount,
  updateServiceAccount,
  changeStateFilter,
  createServiceAccountToken,
  getApiKeysMigrationStatus,
  getApiKeysMigrationInfo,
  closeApiKeysMigrationInfo
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const [isAddModalOpen, setIsAddModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isDisableModalOpen, setIsDisableModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [newToken, setNewToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const [currentServiceAccount, setCurrentServiceAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchServiceAccounts({
      withLoadingIndicator: true
    });
    getApiKeysMigrationStatus();
    getApiKeysMigrationInfo();

    if (app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.licensedAccessControlEnabled()) {
      fetchACOptions();
    }
  }, [fetchACOptions, fetchServiceAccounts, getApiKeysMigrationStatus, getApiKeysMigrationInfo]);
  const noServiceAccountsCreated = serviceAccounts.length === 0 && serviceAccountStateFilter === app_types__WEBPACK_IMPORTED_MODULE_10__.ServiceAccountStateFilter.All && !query;

  const onRoleChange = async (role, serviceAccount) => {
    const updatedServiceAccount = Object.assign({}, serviceAccount, {
      role: role
    });
    updateServiceAccount(updatedServiceAccount);

    if (app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.licensedAccessControlEnabled()) {
      fetchACOptions();
    }
  };

  const onQueryChange = value => {
    changeQuery(value);
  };

  const onStateFilterChange = value => {
    changeStateFilter(value);
  };

  const onRemoveButtonClick = serviceAccount => {
    setCurrentServiceAccount(serviceAccount);
    setIsRemoveModalOpen(true);
  };

  const onServiceAccountRemove = async () => {
    if (currentServiceAccount) {
      deleteServiceAccount(currentServiceAccount.id);
    }

    onRemoveModalClose();
  };

  const onDisableButtonClick = serviceAccount => {
    setCurrentServiceAccount(serviceAccount);
    setIsDisableModalOpen(true);
  };

  const onDisable = () => {
    if (currentServiceAccount) {
      updateServiceAccount(Object.assign({}, currentServiceAccount, {
        isDisabled: true
      }));
    }

    onDisableModalClose();
  };

  const onEnable = serviceAccount => {
    updateServiceAccount(Object.assign({}, serviceAccount, {
      isDisabled: false
    }));
  };

  const onTokenAdd = serviceAccount => {
    setCurrentServiceAccount(serviceAccount);
    setIsAddModalOpen(true);
  };

  const onTokenCreate = async token => {
    if (currentServiceAccount) {
      createServiceAccountToken(currentServiceAccount.id, token, setNewToken);
    }
  };

  const onAddModalClose = () => {
    setIsAddModalOpen(false);
    setCurrentServiceAccount(null);
    setNewToken('');
  };

  const onRemoveModalClose = () => {
    setIsRemoveModalOpen(false);
    setCurrentServiceAccount(null);
  };

  const onDisableModalClose = () => {
    setIsDisableModalOpen(false);
    setCurrentServiceAccount(null);
  };

  const onMigrationInfoClose = () => {
    closeApiKeysMigrationInfo();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
      children: [apiKeysMigrated && showApiKeysMigrationInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
        title: "API keys migrated to Service accounts. Your keys are now called tokens and live inside respective service accounts. Learn more.",
        severity: "success",
        onRemove: onMigrationInfoClose
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: styles.pageHeader,
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
          children: "Service accounts"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: styles.apiKeyInfoLabel,
          children: [_Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
            placement: "bottom",
            interactive: true,
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
              children: ["API keys are now service Accounts with tokens. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
                href: "",
                children: "Read more"
              })]
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
              name: "question-circle"
            })
          })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
            children: "Looking for API keys?"
          }))]
        }), !noServiceAccountsCreated && app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ServiceAccountsCreate) && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
          href: "org/serviceaccounts/create",
          variant: "primary",
          children: "Add service account"
        })))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: styles.filterRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FilterInput, {
          placeholder: "Search service account by name",
          value: query,
          onChange: onQueryChange,
          width: 50
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: styles.filterDelimiter
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
          options: [{
            label: 'All',
            value: app_types__WEBPACK_IMPORTED_MODULE_10__.ServiceAccountStateFilter.All
          }, {
            label: 'With expiring tokens',
            value: app_types__WEBPACK_IMPORTED_MODULE_10__.ServiceAccountStateFilter.WithExpiredTokens
          }, {
            label: 'Disabled',
            value: app_types__WEBPACK_IMPORTED_MODULE_10__.ServiceAccountStateFilter.Disabled
          }],
          onChange: onStateFilterChange,
          value: serviceAccountStateFilter,
          className: styles.filter
        })]
      }), isLoading && (_PageLoader || (_PageLoader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {}))), !isLoading && noServiceAccountsCreated && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: "You haven't created any service accounts yet.",
          buttonIcon: "key-skeleton-alt",
          buttonLink: "org/serviceaccounts/create",
          buttonTitle: "Add service account",
          buttonDisabled: !app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ServiceAccountsCreate),
          proTip: "Remember, you can provide specific permissions for API access to other applications.",
          proTipLink: "",
          proTipLinkTitle: "",
          proTipTarget: "_blank"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.table, 'admin-list-table'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("table", {
            className: "filter-table filter-table--hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Account"
                })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "ID"
                })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Roles"
                })), _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Tokens"
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  style: {
                    width: '34px'
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("tbody", {
              children: !isLoading && serviceAccounts.length !== 0 && serviceAccounts.map(serviceAccount => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_ServiceAccountsListItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
                serviceAccount: serviceAccount,
                builtInRoles: builtInRoles,
                roleOptions: roleOptions,
                onRoleChange: onRoleChange,
                onRemoveButtonClick: onRemoveButtonClick,
                onDisable: onDisableButtonClick,
                onEnable: onEnable,
                onAddTokenClick: onTokenAdd
              }, serviceAccount.id))
            })]
          })
        })
      }), currentServiceAccount && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, {
          isOpen: isRemoveModalOpen,
          body: `Are you sure you want to delete '${currentServiceAccount.name}'${!!currentServiceAccount.tokens ? ` and ${currentServiceAccount.tokens} accompanying ${pluralize__WEBPACK_IMPORTED_MODULE_1___default()('token', currentServiceAccount.tokens)}` : ''}?`,
          confirmText: "Delete",
          title: "Delete service account",
          onConfirm: onServiceAccountRemove,
          onDismiss: onRemoveModalClose
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, {
          isOpen: isDisableModalOpen,
          title: "Disable service account",
          body: `Are you sure you want to disable '${currentServiceAccount.name}'?`,
          confirmText: "Disable service account",
          onConfirm: onDisable,
          onDismiss: onDisableModalClose
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_CreateTokenModal__WEBPACK_IMPORTED_MODULE_11__.CreateTokenModal, {
          isOpen: isAddModalOpen,
          token: newToken,
          serviceAccountLogin: currentServiceAccount.login,
          onCreateToken: onTokenCreate,
          onClose: onAddModalClose
        })]
      })]
    })
  });
};
const getStyles = theme => {
  return {
    table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(3)};
    `,
    filter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0 ${theme.spacing(1)};
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
    `,
    pageHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin-bottom: ${theme.spacing(2)};
    `,
    apiKeyInfoLabel: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(1)};
      line-height: 2.2;
      flex-grow: 1;
      color: ${theme.colors.text.secondary};

      span {
        padding: ${theme.spacing(0.5)};
      }
    `,
    filterRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('page-action-bar', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
        display: flex;
        justifycontent: flex-end;
      `),
    filterDelimiter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
    `
  };
};
const ServiceAccountsListPage = connector(ServiceAccountsListPageUnconnected);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceAccountsListPage);

/***/ }),

/***/ "./public/app/features/serviceaccounts/components/ServiceAccountsListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;











const getServiceAccountsAriaLabel = name => {
  return `Edit service account's ${name} details`;
};

const ServiceAccountListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({
  serviceAccount,
  onRoleChange,
  roleOptions,
  builtInRoles,
  onRemoveButtonClick,
  onDisable,
  onEnable,
  onAddTokenClick
}) => {
  const editUrl = `org/serviceaccounts/${serviceAccount.id}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const canUpdateRole = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ServiceAccountsWrite, serviceAccount);
  const displayRolePicker = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ActionRolesList) && app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ActionUserRolesList);
  const enableRolePicker = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.OrgUsersWrite) && canUpdateRole;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
      [styles.disabled]: serviceAccount.isDisabled
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      className: "width-4 text-center link-td",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        href: editUrl,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          className: "filter-table__avatar",
          src: serviceAccount.avatarUrl,
          alt: `Avatar for user ${serviceAccount.name}`
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: serviceAccount.name,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        className: styles.accountId,
        href: editUrl,
        title: serviceAccount.login,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.login
      })
    }), app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      children: displayRolePicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_3__.UserRolePicker, {
        userId: serviceAccount.id,
        orgId: serviceAccount.orgId,
        builtInRole: serviceAccount.role,
        onBuiltinRoleChange: newRole => onRoleChange(newRole, serviceAccount),
        roleOptions: roleOptions,
        builtInRoles: builtInRoles,
        disabled: !enableRolePicker || serviceAccount.isDisabled
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_features_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_5__.OrgRolePicker, {
        "aria-label": "Role",
        value: serviceAccount.role,
        disabled: !canUpdateRole || serviceAccount.isDisabled,
        onChange: newRole => onRoleChange(newRole, serviceAccount)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: "Tokens",
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.tokensInfo, {
            [styles.tokensInfoSecondary]: !serviceAccount.tokens
          }),
          children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "key-skeleton-alt"
            })
          })), serviceAccount.tokens || 'No tokens']
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        justify: "flex-end",
        children: [app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ServiceAccountsWrite) && !serviceAccount.tokens && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: () => onAddTokenClick(serviceAccount),
          disabled: serviceAccount.isDisabled,
          children: "Add token"
        }), app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ServiceAccountsWrite, serviceAccount) && (serviceAccount.isDisabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: () => onEnable(serviceAccount),
          children: "Enable"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: () => onDisable(serviceAccount),
          children: "Disable"
        })), app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ServiceAccountsDelete, serviceAccount) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
          className: styles.deleteButton,
          name: "trash-alt",
          size: "md",
          onClick: () => onRemoveButtonClick(serviceAccount),
          "aria-label": `Delete service account ${serviceAccount.name}`
        })]
      })
    })]
  }, serviceAccount.id);
});
ServiceAccountListItem.displayName = 'ServiceAccountListItem';

const getStyles = theme => {
  return {
    iconRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      svg {
        margin-left: ${theme.spacing(0.5)};
      }
    `,
    accountId: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('ellipsis', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
        color: ${theme.colors.text.secondary};
      `),
    deleteButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
    `,
    tokensInfo: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      span {
        margin-right: ${theme.spacing(1)};
      }
    `,
    tokensInfoSecondary: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
    `,
    disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      td a {
        color: ${theme.colors.text.secondary};
      }
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceAccountListItem);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZUFjY291bnRzUGFnZS5lYzE5MDViZTJiYWY0Y2RjMWEwYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQWlCQSxTQUFTa0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBNEM7RUFDMUM7SUFDRUMsUUFBUSxFQUFFakIsd0VBQVcsQ0FBQ2dCLEtBQUssQ0FBQ0UsUUFBUCxFQUFpQixpQkFBakI7RUFEdkIsR0FFS0YsS0FBSyxDQUFDRyxlQUZYO0FBSUQ7O0FBRUQsTUFBTUMsa0JBQWtCLEdBQUc7RUFDekJmLFdBRHlCO0VBRXpCQyxjQUZ5QjtFQUd6QkMsb0JBSHlCO0VBSXpCQyxvQkFKeUI7RUFLekJDLG9CQUx5QjtFQU16QkMsaUJBTnlCO0VBT3pCQyx5QkFQeUI7RUFRekJDLHlCQVJ5QjtFQVN6QkMsdUJBVHlCO0VBVXpCQyx5QkFBeUJBLHdFQUFBQTtBQVZBLENBQTNCO0FBYUEsTUFBTU8sU0FBUyxHQUFHbEMsb0RBQU8sQ0FBQzRCLGVBQUQsRUFBa0JLLGtCQUFsQixDQUF6QjtBQUVPLE1BQU1FLGtDQUFrQyxHQUFHLENBQUM7RUFDakRMLFFBRGlEO0VBRWpERSxlQUZpRDtFQUdqREksU0FIaUQ7RUFJakRDLFdBSmlEO0VBS2pEQyxZQUxpRDtFQU1qREMsS0FOaUQ7RUFPakRDLHlCQVBpRDtFQVFqREMsZUFSaUQ7RUFTakRDLHdCQVRpRDtFQVVqRHhCLFdBVmlEO0VBV2pEQyxjQVhpRDtFQVlqREMsb0JBWmlEO0VBYWpEQyxvQkFiaUQ7RUFjakRDLG9CQWRpRDtFQWVqREMsaUJBZmlEO0VBZ0JqREMseUJBaEJpRDtFQWlCakRDLHlCQWpCaUQ7RUFrQmpEQyx1QkFsQmlEO0VBbUJqREM7QUFuQmlELENBQUQsS0FvQnhCO0VBQ3hCLE1BQU1nQixNQUFNLEdBQUduQyx1REFBVSxDQUFDb0MsU0FBRCxDQUF6QjtFQUNBLE1BQU0sQ0FBQ0MsY0FBRCxFQUFpQkMsaUJBQWpCLElBQXNDL0MsK0NBQVEsQ0FBQyxLQUFELENBQXBEO0VBQ0EsTUFBTSxDQUFDZ0QsaUJBQUQsRUFBb0JDLG9CQUFwQixJQUE0Q2pELCtDQUFRLENBQUMsS0FBRCxDQUExRDtFQUNBLE1BQU0sQ0FBQ2tELGtCQUFELEVBQXFCQyxxQkFBckIsSUFBOENuRCwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUQ7RUFDQSxNQUFNLENBQUNvRCxRQUFELEVBQVdDLFdBQVgsSUFBMEJyRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7RUFDQSxNQUFNLENBQUNzRCxxQkFBRCxFQUF3QkMsd0JBQXhCLElBQW9EdkQsK0NBQVEsQ0FBMkIsSUFBM0IsQ0FBbEU7RUFFQUQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2RzQixvQkFBb0IsQ0FBQztNQUFFbUMsb0JBQW9CLEVBQUU7SUFBeEIsQ0FBRCxDQUFwQjtJQUNBOUIseUJBQXlCO0lBQ3pCQyx1QkFBdUI7O0lBQ3ZCLElBQUlkLGtGQUFBLEVBQUosRUFBK0M7TUFDN0NPLGNBQWM7SUFDZjtFQUNGLENBUFEsRUFPTixDQUFDQSxjQUFELEVBQWlCQyxvQkFBakIsRUFBdUNLLHlCQUF2QyxFQUFrRUMsdUJBQWxFLENBUE0sQ0FBVDtFQVNBLE1BQU0rQix3QkFBd0IsR0FDNUJ6QixlQUFlLENBQUMwQixNQUFoQixLQUEyQixDQUEzQixJQUFnQ2xCLHlCQUF5QixLQUFLekIscUVBQTlELElBQStGLENBQUN3QixLQURsRzs7RUFHQSxNQUFNcUIsWUFBWSxHQUFHLE9BQU9DLElBQVAsRUFBc0JDLGNBQXRCLEtBQTREO0lBQy9FLE1BQU1DLHFCQUFxQixxQkFBUUQsY0FBUjtNQUF3QkQsSUFBSSxFQUFFQTtJQUE5QixFQUEzQjtJQUNBdkMsb0JBQW9CLENBQUN5QyxxQkFBRCxDQUFwQjs7SUFDQSxJQUFJbkQsa0ZBQUEsRUFBSixFQUErQztNQUM3Q08sY0FBYztJQUNmO0VBQ0YsQ0FORDs7RUFRQSxNQUFNNkMsYUFBYSxHQUFJQyxLQUFELElBQW1CO0lBQ3ZDL0MsV0FBVyxDQUFDK0MsS0FBRCxDQUFYO0VBQ0QsQ0FGRDs7RUFJQSxNQUFNQyxtQkFBbUIsR0FBSUQsS0FBRCxJQUFzQztJQUNoRTFDLGlCQUFpQixDQUFDMEMsS0FBRCxDQUFqQjtFQUNELENBRkQ7O0VBSUEsTUFBTUUsbUJBQW1CLEdBQUlMLGNBQUQsSUFBdUM7SUFDakVSLHdCQUF3QixDQUFDUSxjQUFELENBQXhCO0lBQ0FkLG9CQUFvQixDQUFDLElBQUQsQ0FBcEI7RUFDRCxDQUhEOztFQUtBLE1BQU1vQixzQkFBc0IsR0FBRyxZQUFZO0lBQ3pDLElBQUlmLHFCQUFKLEVBQTJCO01BQ3pCaEMsb0JBQW9CLENBQUNnQyxxQkFBcUIsQ0FBQ2dCLEVBQXZCLENBQXBCO0lBQ0Q7O0lBQ0RDLGtCQUFrQjtFQUNuQixDQUxEOztFQU9BLE1BQU1DLG9CQUFvQixHQUFJVCxjQUFELElBQXVDO0lBQ2xFUix3QkFBd0IsQ0FBQ1EsY0FBRCxDQUF4QjtJQUNBWixxQkFBcUIsQ0FBQyxJQUFELENBQXJCO0VBQ0QsQ0FIRDs7RUFLQSxNQUFNc0IsU0FBUyxHQUFHLE1BQU07SUFDdEIsSUFBSW5CLHFCQUFKLEVBQTJCO01BQ3pCL0Isb0JBQW9CLG1CQUFNK0IscUJBQU47UUFBNkJvQixVQUFVLEVBQUU7TUFBekMsR0FBcEI7SUFDRDs7SUFDREMsbUJBQW1CO0VBQ3BCLENBTEQ7O0VBT0EsTUFBTUMsUUFBUSxHQUFJYixjQUFELElBQXVDO0lBQ3REeEMsb0JBQW9CLG1CQUFNd0MsY0FBTjtNQUFzQlcsVUFBVSxFQUFFO0lBQWxDLEdBQXBCO0VBQ0QsQ0FGRDs7RUFJQSxNQUFNRyxVQUFVLEdBQUlkLGNBQUQsSUFBdUM7SUFDeERSLHdCQUF3QixDQUFDUSxjQUFELENBQXhCO0lBQ0FoQixpQkFBaUIsQ0FBQyxJQUFELENBQWpCO0VBQ0QsQ0FIRDs7RUFLQSxNQUFNK0IsYUFBYSxHQUFHLE1BQU9DLEtBQVAsSUFBc0M7SUFDMUQsSUFBSXpCLHFCQUFKLEVBQTJCO01BQ3pCN0IseUJBQXlCLENBQUM2QixxQkFBcUIsQ0FBQ2dCLEVBQXZCLEVBQTJCUyxLQUEzQixFQUFrQzFCLFdBQWxDLENBQXpCO0lBQ0Q7RUFDRixDQUpEOztFQU1BLE1BQU0yQixlQUFlLEdBQUcsTUFBTTtJQUM1QmpDLGlCQUFpQixDQUFDLEtBQUQsQ0FBakI7SUFDQVEsd0JBQXdCLENBQUMsSUFBRCxDQUF4QjtJQUNBRixXQUFXLENBQUMsRUFBRCxDQUFYO0VBQ0QsQ0FKRDs7RUFNQSxNQUFNa0Isa0JBQWtCLEdBQUcsTUFBTTtJQUMvQnRCLG9CQUFvQixDQUFDLEtBQUQsQ0FBcEI7SUFDQU0sd0JBQXdCLENBQUMsSUFBRCxDQUF4QjtFQUNELENBSEQ7O0VBS0EsTUFBTW9CLG1CQUFtQixHQUFHLE1BQU07SUFDaEN4QixxQkFBcUIsQ0FBQyxLQUFELENBQXJCO0lBQ0FJLHdCQUF3QixDQUFDLElBQUQsQ0FBeEI7RUFDRCxDQUhEOztFQUtBLE1BQU0wQixvQkFBb0IsR0FBRyxNQUFNO0lBQ2pDckQseUJBQXlCO0VBQzFCLENBRkQ7O0VBSUEsb0JBQ0Usd0RBQUMscUVBQUQ7SUFBTSxRQUFRLEVBQUVHLFFBQWhCO0lBQUEsdUJBQ0UseURBQUMsOEVBQUQ7TUFBQSxXQUNHVyxlQUFlLElBQUlDLHdCQUFuQixpQkFDQyx3REFBQyw4Q0FBRDtRQUNFLEtBQUssRUFBQyxpSUFEUjtRQUdFLFFBQVEsRUFBQyxTQUhYO1FBSUUsUUFBUSxFQUFFc0M7TUFKWixFQUZKLGVBU0U7UUFBSyxTQUFTLEVBQUVyQyxNQUFNLENBQUNzQyxVQUF2QjtRQUFBLG9DQUNFO1VBQUE7UUFBQSxFQURGLGdCQUVFO1VBQUssU0FBUyxFQUFFdEMsTUFBTSxDQUFDdUMsZUFBdkI7VUFBQSxnREFDRSx3REFBQyxnREFBRDtZQUNFLFNBQVMsRUFBQyxRQURaO1lBRUUsV0FBVyxNQUZiO1lBR0UsT0FBTyxlQUNMO2NBQUEsMkVBQ2lEO2dCQUFHLElBQUksRUFBQyxFQUFSO2dCQUFBO2NBQUEsRUFEakQ7WUFBQSxFQUpKO1lBQUEsdUJBU0Usd0RBQUMsNkNBQUQ7Y0FBTSxJQUFJLEVBQUM7WUFBWDtVQVRGLEVBREYsa0NBWUU7WUFBQTtVQUFBLEVBWkY7UUFBQSxFQUZGLEVBZ0JHLENBQUN6Qix3QkFBRCxJQUE2QjdDLG1FQUFBLENBQXlCRSxpRkFBekIsQ0FBN0IsZ0RBQ0Msd0RBQUMsbURBQUQ7VUFBWSxJQUFJLEVBQUMsNEJBQWpCO1VBQThDLE9BQU8sRUFBQyxTQUF0RDtVQUFBO1FBQUEsRUFERCxFQWhCSDtNQUFBLEVBVEYsZUErQkU7UUFBSyxTQUFTLEVBQUU2QixNQUFNLENBQUMwQyxTQUF2QjtRQUFBLHdCQUNFLHdEQUFDLG9EQUFEO1VBQWEsV0FBVyxFQUFDLGdDQUF6QjtVQUEwRCxLQUFLLEVBQUU5QyxLQUFqRTtVQUF3RSxRQUFRLEVBQUV5QixhQUFsRjtVQUFpRyxLQUFLLEVBQUU7UUFBeEcsRUFERixlQUVFO1VBQUssU0FBUyxFQUFFckIsTUFBTSxDQUFDMkM7UUFBdkIsRUFGRixlQUdFLHdEQUFDLHlEQUFEO1VBQ0UsT0FBTyxFQUFFLENBQ1A7WUFBRUMsS0FBSyxFQUFFLEtBQVQ7WUFBZ0J0QixLQUFLLEVBQUVsRCxxRUFBNkI0QztVQUFwRCxDQURPLEVBRVA7WUFBRTRCLEtBQUssRUFBRSxzQkFBVDtZQUFpQ3RCLEtBQUssRUFBRWxELG1GQUEyQ3lFO1VBQW5GLENBRk8sRUFHUDtZQUFFRCxLQUFLLEVBQUUsVUFBVDtZQUFxQnRCLEtBQUssRUFBRWxELDBFQUFrQzBFO1VBQTlELENBSE8sQ0FEWDtVQU1FLFFBQVEsRUFBRXZCLG1CQU5aO1VBT0UsS0FBSyxFQUFFMUIseUJBUFQ7VUFRRSxTQUFTLEVBQUVHLE1BQU0sQ0FBQytDO1FBUnBCLEVBSEY7TUFBQSxFQS9CRixFQTZDR3RELFNBQVMsZ0RBQUksd0RBQUMsaUZBQUQsS0FBSixFQTdDWixFQThDRyxDQUFDQSxTQUFELElBQWNxQix3QkFBZCxpQkFDQztRQUFBLHVCQUNFLHdEQUFDLHFGQUFEO1VBQ0UsS0FBSyxFQUFDLCtDQURSO1VBRUUsVUFBVSxFQUFDLGtCQUZiO1VBR0UsVUFBVSxFQUFDLDRCQUhiO1VBSUUsV0FBVyxFQUFDLHFCQUpkO1VBS0UsY0FBYyxFQUFFLENBQUM3QyxtRUFBQSxDQUF5QkUsaUZBQXpCLENBTG5CO1VBTUUsTUFBTSxFQUFDLHNGQU5UO1VBT0UsVUFBVSxFQUFDLEVBUGI7VUFRRSxlQUFlLEVBQUMsRUFSbEI7VUFTRSxZQUFZLEVBQUM7UUFUZjtNQURGLEVBL0NKLGVBOERFO1FBQUEsdUJBQ0U7VUFBSyxTQUFTLEVBQUVuQixnREFBRSxDQUFDZ0QsTUFBTSxDQUFDZ0QsS0FBUixFQUFlLGtCQUFmLENBQWxCO1VBQUEsdUJBQ0U7WUFBTyxTQUFTLEVBQUMsa0NBQWpCO1lBQUEsd0JBQ0U7Y0FBQSx1QkFDRTtnQkFBQSxzQ0FDRSxpRUFERixnQ0FFRTtrQkFBQTtnQkFBQSxFQUZGLGdDQUdFO2tCQUFBO2dCQUFBLEVBSEYsZ0NBSUU7a0JBQUE7Z0JBQUEsRUFKRixnQ0FLRTtrQkFBQTtnQkFBQSxFQUxGLGdCQU1FO2tCQUFJLEtBQUssRUFBRTtvQkFBRUMsS0FBSyxFQUFFO2tCQUFUO2dCQUFYLEVBTkY7Y0FBQTtZQURGLEVBREYsZUFXRTtjQUFBLFVBQ0csQ0FBQ3hELFNBQUQsSUFDQ0osZUFBZSxDQUFDMEIsTUFBaEIsS0FBMkIsQ0FENUIsSUFFQzFCLGVBQWUsQ0FBQzZELEdBQWhCLENBQXFCL0IsY0FBRCxpQkFDbEIsd0RBQUMsNEVBQUQ7Z0JBQ0UsY0FBYyxFQUFFQSxjQURsQjtnQkFHRSxZQUFZLEVBQUV4QixZQUhoQjtnQkFJRSxXQUFXLEVBQUVELFdBSmY7Z0JBS0UsWUFBWSxFQUFFdUIsWUFMaEI7Z0JBTUUsbUJBQW1CLEVBQUVPLG1CQU52QjtnQkFPRSxTQUFTLEVBQUVJLG9CQVBiO2dCQVFFLFFBQVEsRUFBRUksUUFSWjtnQkFTRSxlQUFlLEVBQUVDO2NBVG5CLEdBRU9kLGNBQWMsQ0FBQ08sRUFGdEIsQ0FERjtZQUhKLEVBWEY7VUFBQTtRQURGO01BREYsRUE5REYsRUErRkdoQixxQkFBcUIsaUJBQ3BCO1FBQUEsd0JBQ0Usd0RBQUMscURBQUQ7VUFDRSxNQUFNLEVBQUVOLGlCQURWO1VBRUUsSUFBSSxFQUFHLG9DQUFtQ00scUJBQXFCLENBQUN5QyxJQUFLLElBQ25FLENBQUMsQ0FBQ3pDLHFCQUFxQixDQUFDMEMsTUFBeEIsR0FDSyxRQUFPMUMscUJBQXFCLENBQUMwQyxNQUFPLGlCQUFnQm5HLGdEQUFTLENBQzVELE9BRDRELEVBRTVEeUQscUJBQXFCLENBQUMwQyxNQUZzQyxDQUc1RCxFQUpOLEdBS0ksRUFDTCxHQVRIO1VBVUUsV0FBVyxFQUFDLFFBVmQ7VUFXRSxLQUFLLEVBQUMsd0JBWFI7VUFZRSxTQUFTLEVBQUUzQixzQkFaYjtVQWFFLFNBQVMsRUFBRUU7UUFiYixFQURGLGVBZ0JFLHdEQUFDLHFEQUFEO1VBQ0UsTUFBTSxFQUFFckIsa0JBRFY7VUFFRSxLQUFLLEVBQUMseUJBRlI7VUFHRSxJQUFJLEVBQUcscUNBQW9DSSxxQkFBcUIsQ0FBQ3lDLElBQUssSUFIeEU7VUFJRSxXQUFXLEVBQUMseUJBSmQ7VUFLRSxTQUFTLEVBQUV0QixTQUxiO1VBTUUsU0FBUyxFQUFFRTtRQU5iLEVBaEJGLGVBd0JFLHdEQUFDLDJFQUFEO1VBQ0UsTUFBTSxFQUFFN0IsY0FEVjtVQUVFLEtBQUssRUFBRU0sUUFGVDtVQUdFLG1CQUFtQixFQUFFRSxxQkFBcUIsQ0FBQzJDLEtBSDdDO1VBSUUsYUFBYSxFQUFFbkIsYUFKakI7VUFLRSxPQUFPLEVBQUVFO1FBTFgsRUF4QkY7TUFBQSxFQWhHSjtJQUFBO0VBREYsRUFERjtBQXNJRCxDQXpQTTtBQTJQQSxNQUFNbkMsU0FBUyxHQUFJcUQsS0FBRCxJQUEwQjtFQUNqRCxPQUFPO0lBQ0xOLEtBQUssRUFBRWpHLDZDQUFJO0FBQ2Ysb0JBQW9CdUcsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNyQyxLQUhTO0lBSUxSLE1BQU0sRUFBRWhHLDZDQUFJO0FBQ2hCLGtCQUFrQnVHLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDbkMsS0FOUztJQU9MQyxHQUFHLEVBQUV6Ryw2Q0FBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUJ1RyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxHQUFkLENBQW1CO0FBQ3RDO0FBQ0EsS0FmUztJQWdCTEUsV0FBVyxFQUFFMUcsNkNBQUk7QUFDckI7QUFDQTtBQUNBLEtBbkJTO0lBb0JMMkcsUUFBUSxFQUFFM0csNkNBQUk7QUFDbEI7QUFDQSxpQkFBaUJ1RyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxHQUFkLENBQW1CO0FBQ3BDLHNCQUFzQkQsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN2QyxLQXhCUztJQXlCTEksUUFBUSxFQUFFNUcsNkNBQUk7QUFDbEIsZUFBZXVHLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUFiLENBQWtCRixRQUFTO0FBQzFDLEtBM0JTO0lBNEJMRyxJQUFJLEVBQUUvRyw2Q0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBaENTO0lBaUNMdUYsVUFBVSxFQUFFdkYsNkNBQUk7QUFDcEI7QUFDQSx1QkFBdUJ1RyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3hDLEtBcENTO0lBcUNMaEIsZUFBZSxFQUFFeEYsNkNBQUk7QUFDekIscUJBQXFCdUcsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN0QztBQUNBO0FBQ0EsZUFBZUQsS0FBSyxDQUFDTSxNQUFOLENBQWFDLElBQWIsQ0FBa0JFLFNBQVU7QUFDM0M7QUFDQTtBQUNBLG1CQUFtQlQsS0FBSyxDQUFDQyxPQUFOLENBQWMsR0FBZCxDQUFtQjtBQUN0QztBQUNBLEtBOUNTO0lBK0NMYixTQUFTLEVBQUUxRixnREFBRSxDQUNYLGlCQURXLEVBRVhELDZDQUFJO0FBQ1Y7QUFDQTtBQUNBLE9BTGlCLENBL0NSO0lBc0RMNEYsZUFBZSxFQUFFNUYsNkNBQUk7QUFDekI7QUFDQTtFQXhEUyxDQUFQO0FBMERELENBM0RNO0FBNkRQLE1BQU1pSCx1QkFBdUIsR0FBR3pFLFNBQVMsQ0FBQ0Msa0NBQUQsQ0FBekM7QUFDQSxpRUFBZXdFLHVCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoWEE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFhQSxNQUFNTywyQkFBMkIsR0FBSXBCLElBQUQsSUFBa0I7RUFDcEQsT0FBUSwwQkFBeUJBLElBQUssVUFBdEM7QUFDRCxDQUZEOztBQUlBLE1BQU03RSxzQkFBc0IsZ0JBQUcyRiwyQ0FBSSxDQUNqQyxDQUFDO0VBQ0M5QyxjQUREO0VBRUNGLFlBRkQ7RUFHQ3ZCLFdBSEQ7RUFJQ0MsWUFKRDtFQUtDNkIsbUJBTEQ7RUFNQ0ssU0FORDtFQU9DRyxRQVBEO0VBUUN3QztBQVJELENBQUQsS0FTbUM7RUFDakMsTUFBTUMsT0FBTyxHQUFJLHVCQUFzQnRELGNBQWMsQ0FBQ08sRUFBRyxFQUF6RDtFQUNBLE1BQU0xQixNQUFNLEdBQUduQyx1REFBVSxDQUFDb0MsU0FBRCxDQUF6QjtFQUNBLE1BQU15RSxhQUFhLEdBQUd6Ryw2RUFBQSxDQUFtQ0UsK0VBQW5DLEVBQTZFZ0QsY0FBN0UsQ0FBdEI7RUFDQSxNQUFNMEQsaUJBQWlCLEdBQ3JCNUcsbUVBQUEsQ0FBeUJFLDBFQUF6QixLQUNBRixtRUFBQSxDQUF5QkUsOEVBQXpCLENBRkY7RUFHQSxNQUFNNkcsZ0JBQWdCLEdBQUcvRyxtRUFBQSxDQUF5QkUsd0VBQXpCLEtBQStEdUcsYUFBeEY7RUFFQSxvQkFDRTtJQUE0QixTQUFTLEVBQUUxSCxnREFBRSxDQUFDO01BQUUsQ0FBQ2dELE1BQU0sQ0FBQzJELFFBQVIsR0FBbUJ4QyxjQUFjLENBQUNXO0lBQXBDLENBQUQsQ0FBekM7SUFBQSx3QkFDRTtNQUFJLFNBQVMsRUFBQyw2QkFBZDtNQUFBLHVCQUNFO1FBQUcsSUFBSSxFQUFFMkMsT0FBVDtRQUFrQixjQUFZRiwyQkFBMkIsQ0FBQ3BELGNBQWMsQ0FBQ2dDLElBQWhCLENBQXpEO1FBQUEsdUJBQ0U7VUFDRSxTQUFTLEVBQUMsc0JBRFo7VUFFRSxHQUFHLEVBQUVoQyxjQUFjLENBQUMrRCxTQUZ0QjtVQUdFLEdBQUcsRUFBRyxtQkFBa0IvRCxjQUFjLENBQUNnQyxJQUFLO1FBSDlDO01BREY7SUFERixFQURGLGVBVUU7TUFBSSxTQUFTLEVBQUMsc0JBQWQ7TUFBQSx1QkFDRTtRQUNFLFNBQVMsRUFBQyxVQURaO1FBRUUsSUFBSSxFQUFFc0IsT0FGUjtRQUdFLEtBQUssRUFBRXRELGNBQWMsQ0FBQ2dDLElBSHhCO1FBSUUsY0FBWW9CLDJCQUEyQixDQUFDcEQsY0FBYyxDQUFDZ0MsSUFBaEIsQ0FKekM7UUFBQSxVQU1HaEMsY0FBYyxDQUFDZ0M7TUFObEI7SUFERixFQVZGLGVBb0JFO01BQUksU0FBUyxFQUFDLHNCQUFkO01BQUEsdUJBQ0U7UUFDRSxTQUFTLEVBQUVuRCxNQUFNLENBQUNtRixTQURwQjtRQUVFLElBQUksRUFBRVYsT0FGUjtRQUdFLEtBQUssRUFBRXRELGNBQWMsQ0FBQ2tDLEtBSHhCO1FBSUUsY0FBWWtCLDJCQUEyQixDQUFDcEQsY0FBYyxDQUFDZ0MsSUFBaEIsQ0FKekM7UUFBQSxVQU1HaEMsY0FBYyxDQUFDa0M7TUFObEI7SUFERixFQXBCRixFQThCR3BGLGtGQUFBLGtCQUNDO01BQUEsVUFDRzRHLGlCQUFpQixpQkFDaEIsdURBQUMseUZBQUQ7UUFDRSxNQUFNLEVBQUUxRCxjQUFjLENBQUNPLEVBRHpCO1FBRUUsS0FBSyxFQUFFUCxjQUFjLENBQUNpRSxLQUZ4QjtRQUdFLFdBQVcsRUFBRWpFLGNBQWMsQ0FBQ0QsSUFIOUI7UUFJRSxtQkFBbUIsRUFBR21FLE9BQUQsSUFBYXBFLFlBQVksQ0FBQ29FLE9BQUQsRUFBVWxFLGNBQVYsQ0FKaEQ7UUFLRSxXQUFXLEVBQUV6QixXQUxmO1FBTUUsWUFBWSxFQUFFQyxZQU5oQjtRQU9FLFFBQVEsRUFBRSxDQUFDcUYsZ0JBQUQsSUFBcUI3RCxjQUFjLENBQUNXO01BUGhEO0lBRkosRUFERCxnQkFlQztNQUFBLHVCQUNFLHVEQUFDLDJFQUFEO1FBQ0UsY0FBVyxNQURiO1FBRUUsS0FBSyxFQUFFWCxjQUFjLENBQUNELElBRnhCO1FBR0UsUUFBUSxFQUFFLENBQUN3RCxhQUFELElBQWtCdkQsY0FBYyxDQUFDVyxVQUg3QztRQUlFLFFBQVEsRUFBR3VELE9BQUQsSUFBYXBFLFlBQVksQ0FBQ29FLE9BQUQsRUFBVWxFLGNBQVY7TUFKckM7SUFERixFQTdDSixlQXNERTtNQUFJLFNBQVMsRUFBQyxzQkFBZDtNQUFBLHVCQUNFO1FBQ0UsU0FBUyxFQUFDLFVBRFo7UUFFRSxJQUFJLEVBQUVzRCxPQUZSO1FBR0UsS0FBSyxFQUFDLFFBSFI7UUFJRSxjQUFZRiwyQkFBMkIsQ0FBQ3BELGNBQWMsQ0FBQ2dDLElBQWhCLENBSnpDO1FBQUEsdUJBTUU7VUFBSyxTQUFTLEVBQUVuRyxnREFBRSxDQUFDZ0QsTUFBTSxDQUFDc0YsVUFBUixFQUFvQjtZQUFFLENBQUN0RixNQUFNLENBQUN1RixtQkFBUixHQUE4QixDQUFDcEUsY0FBYyxDQUFDaUM7VUFBaEQsQ0FBcEIsQ0FBbEI7VUFBQSwwQ0FDRTtZQUFBLHVCQUNFLHVEQUFDLDZDQUFEO2NBQU0sSUFBSSxFQUFDO1lBQVg7VUFERixFQURGLEdBSUdqQyxjQUFjLENBQUNpQyxNQUFmLElBQXlCLFdBSjVCO1FBQUE7TUFORjtJQURGLEVBdERGLGVBcUVFO01BQUEsdUJBQ0Usd0RBQUMsd0RBQUQ7UUFBaUIsT0FBTyxFQUFDLFVBQXpCO1FBQUEsV0FDR25GLG1FQUFBLENBQXlCRSwrRUFBekIsS0FBc0UsQ0FBQ2dELGNBQWMsQ0FBQ2lDLE1BQXRGLGlCQUNDLHVEQUFDLCtDQUFEO1VBQVEsT0FBTyxFQUFFLE1BQU1vQixlQUFlLENBQUNyRCxjQUFELENBQXRDO1VBQXdELFFBQVEsRUFBRUEsY0FBYyxDQUFDVyxVQUFqRjtVQUFBO1FBQUEsRUFGSixFQU1HN0QsNkVBQUEsQ0FBbUNFLCtFQUFuQyxFQUE2RWdELGNBQTdFLE1BQ0VBLGNBQWMsQ0FBQ1csVUFBZixnQkFDQyx1REFBQywrQ0FBRDtVQUFRLE9BQU8sRUFBQyxTQUFoQjtVQUEwQixPQUFPLEVBQUUsTUFBTUUsUUFBUSxDQUFDYixjQUFELENBQWpEO1VBQUE7UUFBQSxFQURELGdCQUtDLHVEQUFDLCtDQUFEO1VBQVEsT0FBTyxFQUFDLFdBQWhCO1VBQTRCLE9BQU8sRUFBRSxNQUFNVSxTQUFTLENBQUNWLGNBQUQsQ0FBcEQ7VUFBQTtRQUFBLEVBTkgsQ0FOSCxFQWdCR2xELDZFQUFBLENBQW1DRSxnRkFBbkMsRUFBOEVnRCxjQUE5RSxrQkFDQyx1REFBQyxtREFBRDtVQUNFLFNBQVMsRUFBRW5CLE1BQU0sQ0FBQ3lGLFlBRHBCO1VBRUUsSUFBSSxFQUFDLFdBRlA7VUFHRSxJQUFJLEVBQUMsSUFIUDtVQUlFLE9BQU8sRUFBRSxNQUFNakUsbUJBQW1CLENBQUNMLGNBQUQsQ0FKcEM7VUFLRSxjQUFhLDBCQUF5QkEsY0FBYyxDQUFDZ0MsSUFBSztRQUw1RCxFQWpCSjtNQUFBO0lBREYsRUFyRUY7RUFBQSxHQUFTaEMsY0FBYyxDQUFDTyxFQUF4QixDQURGO0FBb0dELENBdkhnQyxDQUFuQztBQXlIQXBELHNCQUFzQixDQUFDb0gsV0FBdkIsR0FBcUMsd0JBQXJDOztBQUVBLE1BQU16RixTQUFTLEdBQUlxRCxLQUFELElBQTBCO0VBQzFDLE9BQU87SUFDTHFDLE9BQU8sRUFBRTVJLDZDQUFJO0FBQ2pCO0FBQ0EsdUJBQXVCdUcsS0FBSyxDQUFDQyxPQUFOLENBQWMsR0FBZCxDQUFtQjtBQUMxQztBQUNBLEtBTFM7SUFNTDRCLFNBQVMsRUFBRW5JLGdEQUFFLENBQ1gsVUFEVyxFQUVYRCw2Q0FBSTtBQUNWLGlCQUFpQnVHLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUFiLENBQWtCRSxTQUFVO0FBQzdDLE9BSmlCLENBTlI7SUFZTDBCLFlBQVksRUFBRTFJLDZDQUFJO0FBQ3RCLGVBQWV1RyxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsSUFBYixDQUFrQkUsU0FBVTtBQUMzQyxLQWRTO0lBZUx1QixVQUFVLEVBQUV2SSw2Q0FBSTtBQUNwQjtBQUNBLHdCQUF3QnVHLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDekM7QUFDQSxLQW5CUztJQW9CTGdDLG1CQUFtQixFQUFFeEksNkNBQUk7QUFDN0IsZUFBZXVHLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUFiLENBQWtCRSxTQUFVO0FBQzNDLEtBdEJTO0lBdUJMSixRQUFRLEVBQUU1Ryw2Q0FBSTtBQUNsQjtBQUNBLGlCQUFpQnVHLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxJQUFiLENBQWtCRSxTQUFVO0FBQzdDO0FBQ0E7RUEzQlMsQ0FBUDtBQTZCRCxDQTlCRDs7QUFnQ0EsaUVBQWV6RixzQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlcnZpY2VhY2NvdW50cy9TZXJ2aWNlQWNjb3VudHNMaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VydmljZWFjY291bnRzL2NvbXBvbmVudHMvU2VydmljZUFjY291bnRzTGlzdEl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgT3JnUm9sZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIENvbmZpcm1Nb2RhbCwgRmlsdGVySW5wdXQsIEljb24sIExpbmtCdXR0b24sIFJhZGlvQnV0dG9uR3JvdXAsIFRvb2x0aXAsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgUGFnZUxvYWRlciBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2VMb2FkZXIvUGFnZUxvYWRlcic7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlLCBTZXJ2aWNlQWNjb3VudERUTywgQWNjZXNzQ29udHJvbEFjdGlvbiwgU2VydmljZUFjY291bnRTdGF0ZUZpbHRlciB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IENyZWF0ZVRva2VuTW9kYWwsIFNlcnZpY2VBY2NvdW50VG9rZW4gfSBmcm9tICcuL2NvbXBvbmVudHMvQ3JlYXRlVG9rZW5Nb2RhbCc7XG5pbXBvcnQgU2VydmljZUFjY291bnRMaXN0SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvU2VydmljZUFjY291bnRzTGlzdEl0ZW0nO1xuaW1wb3J0IHtcbiAgY2hhbmdlUXVlcnksXG4gIGZldGNoQUNPcHRpb25zLFxuICBmZXRjaFNlcnZpY2VBY2NvdW50cyxcbiAgZGVsZXRlU2VydmljZUFjY291bnQsXG4gIHVwZGF0ZVNlcnZpY2VBY2NvdW50LFxuICBjaGFuZ2VTdGF0ZUZpbHRlcixcbiAgY3JlYXRlU2VydmljZUFjY291bnRUb2tlbixcbiAgZ2V0QXBpS2V5c01pZ3JhdGlvblN0YXR1cyxcbiAgZ2V0QXBpS2V5c01pZ3JhdGlvbkluZm8sXG4gIGNsb3NlQXBpS2V5c01pZ3JhdGlvbkluZm8sXG59IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5cbmludGVyZmFjZSBPd25Qcm9wcyB7fVxuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3NlcnZpY2VhY2NvdW50cycpLFxuICAgIC4uLnN0YXRlLnNlcnZpY2VBY2NvdW50cyxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBjaGFuZ2VRdWVyeSxcbiAgZmV0Y2hBQ09wdGlvbnMsXG4gIGZldGNoU2VydmljZUFjY291bnRzLFxuICBkZWxldGVTZXJ2aWNlQWNjb3VudCxcbiAgdXBkYXRlU2VydmljZUFjY291bnQsXG4gIGNoYW5nZVN0YXRlRmlsdGVyLFxuICBjcmVhdGVTZXJ2aWNlQWNjb3VudFRva2VuLFxuICBnZXRBcGlLZXlzTWlncmF0aW9uU3RhdHVzLFxuICBnZXRBcGlLZXlzTWlncmF0aW9uSW5mbyxcbiAgY2xvc2VBcGlLZXlzTWlncmF0aW9uSW5mbyxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgY29uc3QgU2VydmljZUFjY291bnRzTGlzdFBhZ2VVbmNvbm5lY3RlZCA9ICh7XG4gIG5hdk1vZGVsLFxuICBzZXJ2aWNlQWNjb3VudHMsXG4gIGlzTG9hZGluZyxcbiAgcm9sZU9wdGlvbnMsXG4gIGJ1aWx0SW5Sb2xlcyxcbiAgcXVlcnksXG4gIHNlcnZpY2VBY2NvdW50U3RhdGVGaWx0ZXIsXG4gIGFwaUtleXNNaWdyYXRlZCxcbiAgc2hvd0FwaUtleXNNaWdyYXRpb25JbmZvLFxuICBjaGFuZ2VRdWVyeSxcbiAgZmV0Y2hBQ09wdGlvbnMsXG4gIGZldGNoU2VydmljZUFjY291bnRzLFxuICBkZWxldGVTZXJ2aWNlQWNjb3VudCxcbiAgdXBkYXRlU2VydmljZUFjY291bnQsXG4gIGNoYW5nZVN0YXRlRmlsdGVyLFxuICBjcmVhdGVTZXJ2aWNlQWNjb3VudFRva2VuLFxuICBnZXRBcGlLZXlzTWlncmF0aW9uU3RhdHVzLFxuICBnZXRBcGlLZXlzTWlncmF0aW9uSW5mbyxcbiAgY2xvc2VBcGlLZXlzTWlncmF0aW9uSW5mbyxcbn06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IFtpc0FkZE1vZGFsT3Blbiwgc2V0SXNBZGRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNSZW1vdmVNb2RhbE9wZW4sIHNldElzUmVtb3ZlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzRGlzYWJsZU1vZGFsT3Blbiwgc2V0SXNEaXNhYmxlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25ld1Rva2VuLCBzZXROZXdUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXJyZW50U2VydmljZUFjY291bnQsIHNldEN1cnJlbnRTZXJ2aWNlQWNjb3VudF0gPSB1c2VTdGF0ZTxTZXJ2aWNlQWNjb3VudERUTyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hTZXJ2aWNlQWNjb3VudHMoeyB3aXRoTG9hZGluZ0luZGljYXRvcjogdHJ1ZSB9KTtcbiAgICBnZXRBcGlLZXlzTWlncmF0aW9uU3RhdHVzKCk7XG4gICAgZ2V0QXBpS2V5c01pZ3JhdGlvbkluZm8oKTtcbiAgICBpZiAoY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGZldGNoQUNPcHRpb25zKCk7XG4gICAgfVxuICB9LCBbZmV0Y2hBQ09wdGlvbnMsIGZldGNoU2VydmljZUFjY291bnRzLCBnZXRBcGlLZXlzTWlncmF0aW9uU3RhdHVzLCBnZXRBcGlLZXlzTWlncmF0aW9uSW5mb10pO1xuXG4gIGNvbnN0IG5vU2VydmljZUFjY291bnRzQ3JlYXRlZCA9XG4gICAgc2VydmljZUFjY291bnRzLmxlbmd0aCA9PT0gMCAmJiBzZXJ2aWNlQWNjb3VudFN0YXRlRmlsdGVyID09PSBTZXJ2aWNlQWNjb3VudFN0YXRlRmlsdGVyLkFsbCAmJiAhcXVlcnk7XG5cbiAgY29uc3Qgb25Sb2xlQ2hhbmdlID0gYXN5bmMgKHJvbGU6IE9yZ1JvbGUsIHNlcnZpY2VBY2NvdW50OiBTZXJ2aWNlQWNjb3VudERUTykgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRTZXJ2aWNlQWNjb3VudCA9IHsgLi4uc2VydmljZUFjY291bnQsIHJvbGU6IHJvbGUgfTtcbiAgICB1cGRhdGVTZXJ2aWNlQWNjb3VudCh1cGRhdGVkU2VydmljZUFjY291bnQpO1xuICAgIGlmIChjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgICAgZmV0Y2hBQ09wdGlvbnMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25RdWVyeUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY2hhbmdlUXVlcnkodmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uU3RhdGVGaWx0ZXJDaGFuZ2UgPSAodmFsdWU6IFNlcnZpY2VBY2NvdW50U3RhdGVGaWx0ZXIpID0+IHtcbiAgICBjaGFuZ2VTdGF0ZUZpbHRlcih2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25SZW1vdmVCdXR0b25DbGljayA9IChzZXJ2aWNlQWNjb3VudDogU2VydmljZUFjY291bnREVE8pID0+IHtcbiAgICBzZXRDdXJyZW50U2VydmljZUFjY291bnQoc2VydmljZUFjY291bnQpO1xuICAgIHNldElzUmVtb3ZlTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VydmljZUFjY291bnRSZW1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRTZXJ2aWNlQWNjb3VudCkge1xuICAgICAgZGVsZXRlU2VydmljZUFjY291bnQoY3VycmVudFNlcnZpY2VBY2NvdW50LmlkKTtcbiAgICB9XG4gICAgb25SZW1vdmVNb2RhbENsb3NlKCk7XG4gIH07XG5cbiAgY29uc3Qgb25EaXNhYmxlQnV0dG9uQ2xpY2sgPSAoc2VydmljZUFjY291bnQ6IFNlcnZpY2VBY2NvdW50RFRPKSA9PiB7XG4gICAgc2V0Q3VycmVudFNlcnZpY2VBY2NvdW50KHNlcnZpY2VBY2NvdW50KTtcbiAgICBzZXRJc0Rpc2FibGVNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25EaXNhYmxlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2VydmljZUFjY291bnQpIHtcbiAgICAgIHVwZGF0ZVNlcnZpY2VBY2NvdW50KHsgLi4uY3VycmVudFNlcnZpY2VBY2NvdW50LCBpc0Rpc2FibGVkOiB0cnVlIH0pO1xuICAgIH1cbiAgICBvbkRpc2FibGVNb2RhbENsb3NlKCk7XG4gIH07XG5cbiAgY29uc3Qgb25FbmFibGUgPSAoc2VydmljZUFjY291bnQ6IFNlcnZpY2VBY2NvdW50RFRPKSA9PiB7XG4gICAgdXBkYXRlU2VydmljZUFjY291bnQoeyAuLi5zZXJ2aWNlQWNjb3VudCwgaXNEaXNhYmxlZDogZmFsc2UgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub2tlbkFkZCA9IChzZXJ2aWNlQWNjb3VudDogU2VydmljZUFjY291bnREVE8pID0+IHtcbiAgICBzZXRDdXJyZW50U2VydmljZUFjY291bnQoc2VydmljZUFjY291bnQpO1xuICAgIHNldElzQWRkTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9rZW5DcmVhdGUgPSBhc3luYyAodG9rZW46IFNlcnZpY2VBY2NvdW50VG9rZW4pID0+IHtcbiAgICBpZiAoY3VycmVudFNlcnZpY2VBY2NvdW50KSB7XG4gICAgICBjcmVhdGVTZXJ2aWNlQWNjb3VudFRva2VuKGN1cnJlbnRTZXJ2aWNlQWNjb3VudC5pZCwgdG9rZW4sIHNldE5ld1Rva2VuKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25BZGRNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIHNldElzQWRkTW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRDdXJyZW50U2VydmljZUFjY291bnQobnVsbCk7XG4gICAgc2V0TmV3VG9rZW4oJycpO1xuICB9O1xuXG4gIGNvbnN0IG9uUmVtb3ZlTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRJc1JlbW92ZU1vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0Q3VycmVudFNlcnZpY2VBY2NvdW50KG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGlzYWJsZU1vZGFsQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0SXNEaXNhYmxlTW9kYWxPcGVuKGZhbHNlKTtcbiAgICBzZXRDdXJyZW50U2VydmljZUFjY291bnQobnVsbCk7XG4gIH07XG5cbiAgY29uc3Qgb25NaWdyYXRpb25JbmZvQ2xvc2UgPSAoKSA9PiB7XG4gICAgY2xvc2VBcGlLZXlzTWlncmF0aW9uSW5mbygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICB7YXBpS2V5c01pZ3JhdGVkICYmIHNob3dBcGlLZXlzTWlncmF0aW9uSW5mbyAmJiAoXG4gICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICB0aXRsZT1cIkFQSSBrZXlzIG1pZ3JhdGVkIHRvIFNlcnZpY2UgYWNjb3VudHMuIFlvdXIga2V5cyBhcmUgbm93IGNhbGxlZCB0b2tlbnMgYW5kIGxpdmUgaW5zaWRlIHJlc3BlY3RpdmUgc2VydmljZVxuICAgICAgICAgIGFjY291bnRzLiBMZWFybiBtb3JlLlwiXG4gICAgICAgICAgICBzZXZlcml0eT1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgb25SZW1vdmU9e29uTWlncmF0aW9uSW5mb0Nsb3NlfVxuICAgICAgICAgID48L0FsZXJ0PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VIZWFkZXJ9PlxuICAgICAgICAgIDxoMj5TZXJ2aWNlIGFjY291bnRzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwaUtleUluZm9MYWJlbH0+XG4gICAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZVxuICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgQVBJIGtleXMgYXJlIG5vdyBzZXJ2aWNlIEFjY291bnRzIHdpdGggdG9rZW5zLiA8YSBocmVmPVwiXCI+UmVhZCBtb3JlPC9hPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPHNwYW4+TG9va2luZyBmb3IgQVBJIGtleXM/PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHshbm9TZXJ2aWNlQWNjb3VudHNDcmVhdGVkICYmIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLlNlcnZpY2VBY2NvdW50c0NyZWF0ZSkgJiYgKFxuICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj1cIm9yZy9zZXJ2aWNlYWNjb3VudHMvY3JlYXRlXCIgdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgQWRkIHNlcnZpY2UgYWNjb3VudFxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclJvd30+XG4gICAgICAgICAgPEZpbHRlcklucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIHNlcnZpY2UgYWNjb3VudCBieSBuYW1lXCIgdmFsdWU9e3F1ZXJ5fSBvbkNoYW5nZT17b25RdWVyeUNoYW5nZX0gd2lkdGg9ezUwfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyRGVsaW1pdGVyfT48L2Rpdj5cbiAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICB7IGxhYmVsOiAnQWxsJywgdmFsdWU6IFNlcnZpY2VBY2NvdW50U3RhdGVGaWx0ZXIuQWxsIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdXaXRoIGV4cGlyaW5nIHRva2VucycsIHZhbHVlOiBTZXJ2aWNlQWNjb3VudFN0YXRlRmlsdGVyLldpdGhFeHBpcmVkVG9rZW5zIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdEaXNhYmxlZCcsIHZhbHVlOiBTZXJ2aWNlQWNjb3VudFN0YXRlRmlsdGVyLkRpc2FibGVkIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU3RhdGVGaWx0ZXJDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17c2VydmljZUFjY291bnRTdGF0ZUZpbHRlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzTG9hZGluZyAmJiA8UGFnZUxvYWRlciAvPn1cbiAgICAgICAgeyFpc0xvYWRpbmcgJiYgbm9TZXJ2aWNlQWNjb3VudHNDcmVhdGVkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEVtcHR5TGlzdENUQVxuICAgICAgICAgICAgICB0aXRsZT1cIllvdSBoYXZlbid0IGNyZWF0ZWQgYW55IHNlcnZpY2UgYWNjb3VudHMgeWV0LlwiXG4gICAgICAgICAgICAgIGJ1dHRvbkljb249XCJrZXktc2tlbGV0b24tYWx0XCJcbiAgICAgICAgICAgICAgYnV0dG9uTGluaz1cIm9yZy9zZXJ2aWNlYWNjb3VudHMvY3JlYXRlXCJcbiAgICAgICAgICAgICAgYnV0dG9uVGl0bGU9XCJBZGQgc2VydmljZSBhY2NvdW50XCJcbiAgICAgICAgICAgICAgYnV0dG9uRGlzYWJsZWQ9eyFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5TZXJ2aWNlQWNjb3VudHNDcmVhdGUpfVxuICAgICAgICAgICAgICBwcm9UaXA9XCJSZW1lbWJlciwgeW91IGNhbiBwcm92aWRlIHNwZWNpZmljIHBlcm1pc3Npb25zIGZvciBBUEkgYWNjZXNzIHRvIG90aGVyIGFwcGxpY2F0aW9ucy5cIlxuICAgICAgICAgICAgICBwcm9UaXBMaW5rPVwiXCJcbiAgICAgICAgICAgICAgcHJvVGlwTGlua1RpdGxlPVwiXCJcbiAgICAgICAgICAgICAgcHJvVGlwVGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnRhYmxlLCAnYWRtaW4tbGlzdC10YWJsZScpfT5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGUgZmlsdGVyLXRhYmxlLS1ob3ZlclwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+QWNjb3VudDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+SUQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPlJvbGVzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5Ub2tlbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMzRweCcgfX0gLz5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyFpc0xvYWRpbmcgJiZcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2VBY2NvdW50cy5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2VBY2NvdW50cy5tYXAoKHNlcnZpY2VBY2NvdW50OiBTZXJ2aWNlQWNjb3VudERUTykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2VydmljZUFjY291bnRMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VBY2NvdW50PXtzZXJ2aWNlQWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NlcnZpY2VBY2NvdW50LmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGJ1aWx0SW5Sb2xlcz17YnVpbHRJblJvbGVzfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICBvblJvbGVDaGFuZ2U9e29uUm9sZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZUJ1dHRvbkNsaWNrPXtvblJlbW92ZUJ1dHRvbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRGlzYWJsZT17b25EaXNhYmxlQnV0dG9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgb25FbmFibGU9e29uRW5hYmxlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQWRkVG9rZW5DbGljaz17b25Ub2tlbkFkZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgIHtjdXJyZW50U2VydmljZUFjY291bnQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgICAgIGlzT3Blbj17aXNSZW1vdmVNb2RhbE9wZW59XG4gICAgICAgICAgICAgIGJvZHk9e2BBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICcke2N1cnJlbnRTZXJ2aWNlQWNjb3VudC5uYW1lfScke1xuICAgICAgICAgICAgICAgICEhY3VycmVudFNlcnZpY2VBY2NvdW50LnRva2Vuc1xuICAgICAgICAgICAgICAgICAgPyBgIGFuZCAke2N1cnJlbnRTZXJ2aWNlQWNjb3VudC50b2tlbnN9IGFjY29tcGFueWluZyAke3BsdXJhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAndG9rZW4nLFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZXJ2aWNlQWNjb3VudC50b2tlbnNcbiAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgIH0/YH1cbiAgICAgICAgICAgICAgY29uZmlybVRleHQ9XCJEZWxldGVcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBzZXJ2aWNlIGFjY291bnRcIlxuICAgICAgICAgICAgICBvbkNvbmZpcm09e29uU2VydmljZUFjY291bnRSZW1vdmV9XG4gICAgICAgICAgICAgIG9uRGlzbWlzcz17b25SZW1vdmVNb2RhbENsb3NlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICAgICAgaXNPcGVuPXtpc0Rpc2FibGVNb2RhbE9wZW59XG4gICAgICAgICAgICAgIHRpdGxlPVwiRGlzYWJsZSBzZXJ2aWNlIGFjY291bnRcIlxuICAgICAgICAgICAgICBib2R5PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRpc2FibGUgJyR7Y3VycmVudFNlcnZpY2VBY2NvdW50Lm5hbWV9Jz9gfVxuICAgICAgICAgICAgICBjb25maXJtVGV4dD1cIkRpc2FibGUgc2VydmljZSBhY2NvdW50XCJcbiAgICAgICAgICAgICAgb25Db25maXJtPXtvbkRpc2FibGV9XG4gICAgICAgICAgICAgIG9uRGlzbWlzcz17b25EaXNhYmxlTW9kYWxDbG9zZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q3JlYXRlVG9rZW5Nb2RhbFxuICAgICAgICAgICAgICBpc09wZW49e2lzQWRkTW9kYWxPcGVufVxuICAgICAgICAgICAgICB0b2tlbj17bmV3VG9rZW59XG4gICAgICAgICAgICAgIHNlcnZpY2VBY2NvdW50TG9naW49e2N1cnJlbnRTZXJ2aWNlQWNjb3VudC5sb2dpbn1cbiAgICAgICAgICAgICAgb25DcmVhdGVUb2tlbj17b25Ub2tlbkNyZWF0ZX1cbiAgICAgICAgICAgICAgb25DbG9zZT17b25BZGRNb2RhbENsb3NlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFibGU6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgYCxcbiAgICBmaWx0ZXI6IGNzc2BcbiAgICAgIG1hcmdpbjogMCAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgcm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuXG4gICAgICBhIHtcbiAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDAuNSl9IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBgLFxuICAgIHVuaXRUb29sdGlwOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBgLFxuICAgIHVuaXRJdGVtOiBjc3NgXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMC41KX0gMDtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGRpc2FibGVkOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5kaXNhYmxlZH07XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGAsXG4gICAgcGFnZUhlYWRlcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICBhcGlLZXlJbmZvTGFiZWw6IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgbGluZS1oZWlnaHQ6IDIuMjtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgICB9XG4gICAgYCxcbiAgICBmaWx0ZXJSb3c6IGN4KFxuICAgICAgJ3BhZ2UtYWN0aW9uLWJhcicsXG4gICAgICBjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnljb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGBcbiAgICApLFxuICAgIGZpbHRlckRlbGltaXRlcjogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgIGAsXG4gIH07XG59O1xuXG5jb25zdCBTZXJ2aWNlQWNjb3VudHNMaXN0UGFnZSA9IGNvbm5lY3RvcihTZXJ2aWNlQWNjb3VudHNMaXN0UGFnZVVuY29ubmVjdGVkKTtcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VBY2NvdW50c0xpc3RQYWdlO1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgT3JnUm9sZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIEljb24sIEljb25CdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBVc2VyUm9sZVBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9Vc2VyUm9sZVBpY2tlcic7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBPcmdSb2xlUGlja2VyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FkbWluL09yZ1JvbGVQaWNrZXInO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgUm9sZSwgU2VydmljZUFjY291bnREVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG50eXBlIFNlcnZpY2VBY2NvdW50TGlzdEl0ZW1Qcm9wcyA9IHtcbiAgc2VydmljZUFjY291bnQ6IFNlcnZpY2VBY2NvdW50RFRPO1xuICBvblJvbGVDaGFuZ2U6IChyb2xlOiBPcmdSb2xlLCBzZXJ2aWNlQWNjb3VudDogU2VydmljZUFjY291bnREVE8pID0+IHZvaWQ7XG4gIHJvbGVPcHRpb25zOiBSb2xlW107XG4gIGJ1aWx0SW5Sb2xlczogUmVjb3JkPHN0cmluZywgUm9sZVtdPjtcbiAgb25SZW1vdmVCdXR0b25DbGljazogKHNlcnZpY2VBY2NvdW50OiBTZXJ2aWNlQWNjb3VudERUTykgPT4gdm9pZDtcbiAgb25EaXNhYmxlOiAoc2VydmljZUFjY291bnQ6IFNlcnZpY2VBY2NvdW50RFRPKSA9PiB2b2lkO1xuICBvbkVuYWJsZTogKHNlcnZpY2VBY2NvdW50OiBTZXJ2aWNlQWNjb3VudERUTykgPT4gdm9pZDtcbiAgb25BZGRUb2tlbkNsaWNrOiAoc2VydmljZUFjY291bnQ6IFNlcnZpY2VBY2NvdW50RFRPKSA9PiB2b2lkO1xufTtcblxuY29uc3QgZ2V0U2VydmljZUFjY291bnRzQXJpYUxhYmVsID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYEVkaXQgc2VydmljZSBhY2NvdW50J3MgJHtuYW1lfSBkZXRhaWxzYDtcbn07XG5cbmNvbnN0IFNlcnZpY2VBY2NvdW50TGlzdEl0ZW0gPSBtZW1vKFxuICAoe1xuICAgIHNlcnZpY2VBY2NvdW50LFxuICAgIG9uUm9sZUNoYW5nZSxcbiAgICByb2xlT3B0aW9ucyxcbiAgICBidWlsdEluUm9sZXMsXG4gICAgb25SZW1vdmVCdXR0b25DbGljayxcbiAgICBvbkRpc2FibGUsXG4gICAgb25FbmFibGUsXG4gICAgb25BZGRUb2tlbkNsaWNrLFxuICB9OiBTZXJ2aWNlQWNjb3VudExpc3RJdGVtUHJvcHMpID0+IHtcbiAgICBjb25zdCBlZGl0VXJsID0gYG9yZy9zZXJ2aWNlYWNjb3VudHMvJHtzZXJ2aWNlQWNjb3VudC5pZH1gO1xuICAgIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgICBjb25zdCBjYW5VcGRhdGVSb2xlID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLlNlcnZpY2VBY2NvdW50c1dyaXRlLCBzZXJ2aWNlQWNjb3VudCk7XG4gICAgY29uc3QgZGlzcGxheVJvbGVQaWNrZXIgPVxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uUm9sZXNMaXN0KSAmJlxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVXNlclJvbGVzTGlzdCk7XG4gICAgY29uc3QgZW5hYmxlUm9sZVBpY2tlciA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ1VzZXJzV3JpdGUpICYmIGNhblVwZGF0ZVJvbGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17c2VydmljZUFjY291bnQuaWR9IGNsYXNzTmFtZT17Y3goeyBbc3R5bGVzLmRpc2FibGVkXTogc2VydmljZUFjY291bnQuaXNEaXNhYmxlZCB9KX0+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC00IHRleHQtY2VudGVyIGxpbmstdGRcIj5cbiAgICAgICAgICA8YSBocmVmPXtlZGl0VXJsfSBhcmlhLWxhYmVsPXtnZXRTZXJ2aWNlQWNjb3VudHNBcmlhTGFiZWwoc2VydmljZUFjY291bnQubmFtZSl9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVfX2F2YXRhclwiXG4gICAgICAgICAgICAgIHNyYz17c2VydmljZUFjY291bnQuYXZhdGFyVXJsfVxuICAgICAgICAgICAgICBhbHQ9e2BBdmF0YXIgZm9yIHVzZXIgJHtzZXJ2aWNlQWNjb3VudC5uYW1lfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGQgbWF4LXdpZHRoLTEwXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsbGlwc2lzXCJcbiAgICAgICAgICAgIGhyZWY9e2VkaXRVcmx9XG4gICAgICAgICAgICB0aXRsZT17c2VydmljZUFjY291bnQubmFtZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2dldFNlcnZpY2VBY2NvdW50c0FyaWFMYWJlbChzZXJ2aWNlQWNjb3VudC5uYW1lKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2VydmljZUFjY291bnQubmFtZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkIG1heC13aWR0aC0xMFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50SWR9XG4gICAgICAgICAgICBocmVmPXtlZGl0VXJsfVxuICAgICAgICAgICAgdGl0bGU9e3NlcnZpY2VBY2NvdW50LmxvZ2lufVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17Z2V0U2VydmljZUFjY291bnRzQXJpYUxhYmVsKHNlcnZpY2VBY2NvdW50Lm5hbWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZXJ2aWNlQWNjb3VudC5sb2dpbn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIHtjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSA/IChcbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICB7ZGlzcGxheVJvbGVQaWNrZXIgJiYgKFxuICAgICAgICAgICAgICA8VXNlclJvbGVQaWNrZXJcbiAgICAgICAgICAgICAgICB1c2VySWQ9e3NlcnZpY2VBY2NvdW50LmlkfVxuICAgICAgICAgICAgICAgIG9yZ0lkPXtzZXJ2aWNlQWNjb3VudC5vcmdJZH1cbiAgICAgICAgICAgICAgICBidWlsdEluUm9sZT17c2VydmljZUFjY291bnQucm9sZX1cbiAgICAgICAgICAgICAgICBvbkJ1aWx0aW5Sb2xlQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHNlcnZpY2VBY2NvdW50KX1cbiAgICAgICAgICAgICAgICByb2xlT3B0aW9ucz17cm9sZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgYnVpbHRJblJvbGVzPXtidWlsdEluUm9sZXN9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbmFibGVSb2xlUGlja2VyIHx8IHNlcnZpY2VBY2NvdW50LmlzRGlzYWJsZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPE9yZ1JvbGVQaWNrZXJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJvbGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VydmljZUFjY291bnQucm9sZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5VcGRhdGVSb2xlIHx8IHNlcnZpY2VBY2NvdW50LmlzRGlzYWJsZWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHNlcnZpY2VBY2NvdW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgKX1cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGQgbWF4LXdpZHRoLTEwXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsbGlwc2lzXCJcbiAgICAgICAgICAgIGhyZWY9e2VkaXRVcmx9XG4gICAgICAgICAgICB0aXRsZT1cIlRva2Vuc1wiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtnZXRTZXJ2aWNlQWNjb3VudHNBcmlhTGFiZWwoc2VydmljZUFjY291bnQubmFtZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy50b2tlbnNJbmZvLCB7IFtzdHlsZXMudG9rZW5zSW5mb1NlY29uZGFyeV06ICFzZXJ2aWNlQWNjb3VudC50b2tlbnMgfSl9PlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwia2V5LXNrZWxldG9uLWFsdFwiPjwvSWNvbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7c2VydmljZUFjY291bnQudG9rZW5zIHx8ICdObyB0b2tlbnMnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPEhvcml6b250YWxHcm91cCBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgIHtjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5TZXJ2aWNlQWNjb3VudHNXcml0ZSkgJiYgIXNlcnZpY2VBY2NvdW50LnRva2VucyAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25BZGRUb2tlbkNsaWNrKHNlcnZpY2VBY2NvdW50KX0gZGlzYWJsZWQ9e3NlcnZpY2VBY2NvdW50LmlzRGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgIEFkZCB0b2tlblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLlNlcnZpY2VBY2NvdW50c1dyaXRlLCBzZXJ2aWNlQWNjb3VudCkgJiZcbiAgICAgICAgICAgICAgKHNlcnZpY2VBY2NvdW50LmlzRGlzYWJsZWQgPyAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uRW5hYmxlKHNlcnZpY2VBY2NvdW50KX0+XG4gICAgICAgICAgICAgICAgICBFbmFibGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBvbkRpc2FibGUoc2VydmljZUFjY291bnQpfT5cbiAgICAgICAgICAgICAgICAgIERpc2FibGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7Y29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLlNlcnZpY2VBY2NvdW50c0RlbGV0ZSwgc2VydmljZUFjY291bnQpICYmIChcbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVCdXR0b259XG4gICAgICAgICAgICAgICAgbmFtZT1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZUJ1dHRvbkNsaWNrKHNlcnZpY2VBY2NvdW50KX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgRGVsZXRlIHNlcnZpY2UgYWNjb3VudCAke3NlcnZpY2VBY2NvdW50Lm5hbWV9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbik7XG5TZXJ2aWNlQWNjb3VudExpc3RJdGVtLmRpc3BsYXlOYW1lID0gJ1NlcnZpY2VBY2NvdW50TGlzdEl0ZW0nO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpY29uUm93OiBjc3NgXG4gICAgICBzdmcge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgYWNjb3VudElkOiBjeChcbiAgICAgICdlbGxpcHNpcycsXG4gICAgICBjc3NgXG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgICBgXG4gICAgKSxcbiAgICBkZWxldGVCdXR0b246IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgYCxcbiAgICB0b2tlbnNJbmZvOiBjc3NgXG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgdG9rZW5zSW5mb1NlY29uZGFyeTogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBgLFxuICAgIGRpc2FibGVkOiBjc3NgXG4gICAgICB0ZCBhIHtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIH1cbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUFjY291bnRMaXN0SXRlbTtcbiJdLCJuYW1lcyI6WyJjc3MiLCJjeCIsInBsdXJhbGl6ZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25uZWN0IiwiQWxlcnQiLCJDb25maXJtTW9kYWwiLCJGaWx0ZXJJbnB1dCIsIkljb24iLCJMaW5rQnV0dG9uIiwiUmFkaW9CdXR0b25Hcm91cCIsIlRvb2x0aXAiLCJ1c2VTdHlsZXMyIiwiRW1wdHlMaXN0Q1RBIiwiUGFnZSIsIlBhZ2VMb2FkZXIiLCJjb250ZXh0U3J2IiwiZ2V0TmF2TW9kZWwiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiU2VydmljZUFjY291bnRTdGF0ZUZpbHRlciIsIkNyZWF0ZVRva2VuTW9kYWwiLCJTZXJ2aWNlQWNjb3VudExpc3RJdGVtIiwiY2hhbmdlUXVlcnkiLCJmZXRjaEFDT3B0aW9ucyIsImZldGNoU2VydmljZUFjY291bnRzIiwiZGVsZXRlU2VydmljZUFjY291bnQiLCJ1cGRhdGVTZXJ2aWNlQWNjb3VudCIsImNoYW5nZVN0YXRlRmlsdGVyIiwiY3JlYXRlU2VydmljZUFjY291bnRUb2tlbiIsImdldEFwaUtleXNNaWdyYXRpb25TdGF0dXMiLCJnZXRBcGlLZXlzTWlncmF0aW9uSW5mbyIsImNsb3NlQXBpS2V5c01pZ3JhdGlvbkluZm8iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJzZXJ2aWNlQWNjb3VudHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJTZXJ2aWNlQWNjb3VudHNMaXN0UGFnZVVuY29ubmVjdGVkIiwiaXNMb2FkaW5nIiwicm9sZU9wdGlvbnMiLCJidWlsdEluUm9sZXMiLCJxdWVyeSIsInNlcnZpY2VBY2NvdW50U3RhdGVGaWx0ZXIiLCJhcGlLZXlzTWlncmF0ZWQiLCJzaG93QXBpS2V5c01pZ3JhdGlvbkluZm8iLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJpc0FkZE1vZGFsT3BlbiIsInNldElzQWRkTW9kYWxPcGVuIiwiaXNSZW1vdmVNb2RhbE9wZW4iLCJzZXRJc1JlbW92ZU1vZGFsT3BlbiIsImlzRGlzYWJsZU1vZGFsT3BlbiIsInNldElzRGlzYWJsZU1vZGFsT3BlbiIsIm5ld1Rva2VuIiwic2V0TmV3VG9rZW4iLCJjdXJyZW50U2VydmljZUFjY291bnQiLCJzZXRDdXJyZW50U2VydmljZUFjY291bnQiLCJ3aXRoTG9hZGluZ0luZGljYXRvciIsImxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQiLCJub1NlcnZpY2VBY2NvdW50c0NyZWF0ZWQiLCJsZW5ndGgiLCJBbGwiLCJvblJvbGVDaGFuZ2UiLCJyb2xlIiwic2VydmljZUFjY291bnQiLCJ1cGRhdGVkU2VydmljZUFjY291bnQiLCJvblF1ZXJ5Q2hhbmdlIiwidmFsdWUiLCJvblN0YXRlRmlsdGVyQ2hhbmdlIiwib25SZW1vdmVCdXR0b25DbGljayIsIm9uU2VydmljZUFjY291bnRSZW1vdmUiLCJpZCIsIm9uUmVtb3ZlTW9kYWxDbG9zZSIsIm9uRGlzYWJsZUJ1dHRvbkNsaWNrIiwib25EaXNhYmxlIiwiaXNEaXNhYmxlZCIsIm9uRGlzYWJsZU1vZGFsQ2xvc2UiLCJvbkVuYWJsZSIsIm9uVG9rZW5BZGQiLCJvblRva2VuQ3JlYXRlIiwidG9rZW4iLCJvbkFkZE1vZGFsQ2xvc2UiLCJvbk1pZ3JhdGlvbkluZm9DbG9zZSIsInBhZ2VIZWFkZXIiLCJhcGlLZXlJbmZvTGFiZWwiLCJoYXNQZXJtaXNzaW9uIiwiU2VydmljZUFjY291bnRzQ3JlYXRlIiwiZmlsdGVyUm93IiwiZmlsdGVyRGVsaW1pdGVyIiwibGFiZWwiLCJXaXRoRXhwaXJlZFRva2VucyIsIkRpc2FibGVkIiwiZmlsdGVyIiwidGFibGUiLCJ3aWR0aCIsIm1hcCIsIm5hbWUiLCJ0b2tlbnMiLCJsb2dpbiIsInRoZW1lIiwic3BhY2luZyIsInJvdyIsInVuaXRUb29sdGlwIiwidW5pdEl0ZW0iLCJkaXNhYmxlZCIsImNvbG9ycyIsInRleHQiLCJsaW5rIiwic2Vjb25kYXJ5IiwiU2VydmljZUFjY291bnRzTGlzdFBhZ2UiLCJtZW1vIiwiQnV0dG9uIiwiSG9yaXpvbnRhbEdyb3VwIiwiSWNvbkJ1dHRvbiIsIlVzZXJSb2xlUGlja2VyIiwiT3JnUm9sZVBpY2tlciIsImdldFNlcnZpY2VBY2NvdW50c0FyaWFMYWJlbCIsIm9uQWRkVG9rZW5DbGljayIsImVkaXRVcmwiLCJjYW5VcGRhdGVSb2xlIiwiaGFzUGVybWlzc2lvbkluTWV0YWRhdGEiLCJTZXJ2aWNlQWNjb3VudHNXcml0ZSIsImRpc3BsYXlSb2xlUGlja2VyIiwiQWN0aW9uUm9sZXNMaXN0IiwiQWN0aW9uVXNlclJvbGVzTGlzdCIsImVuYWJsZVJvbGVQaWNrZXIiLCJPcmdVc2Vyc1dyaXRlIiwiYXZhdGFyVXJsIiwiYWNjb3VudElkIiwib3JnSWQiLCJuZXdSb2xlIiwidG9rZW5zSW5mbyIsInRva2Vuc0luZm9TZWNvbmRhcnkiLCJTZXJ2aWNlQWNjb3VudHNEZWxldGUiLCJkZWxldGVCdXR0b24iLCJkaXNwbGF5TmFtZSIsImljb25Sb3ciXSwic291cmNlUm9vdCI6IiJ9