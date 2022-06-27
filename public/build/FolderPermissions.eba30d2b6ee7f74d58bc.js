"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderPermissions"],{

/***/ "./public/app/features/folders/AccessControlFolderPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessControlFolderPermissions": () => (/* binding */ AccessControlFolderPermissions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/AccessControl/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function mapStateToProps(state, props) {
  const uid = props.match.params.uid;
  return {
    uid: uid,
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, `folder-permissions-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_8__.getLoadingNav)(1))
  };
}

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_7__.getFolderByUid
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const AccessControlFolderPermissions = ({
  uid,
  getFolderByUid,
  navModel
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getFolderByUid(uid);
  }, [getFolderByUid, uid]);
  const canSetPermissions = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.FoldersPermissionsWrite);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_2__.Permissions, {
        resource: "folders",
        resourceId: uid,
        canSetPermissions: canSetPermissions
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(AccessControlFolderPermissions));

/***/ }),

/***/ "./public/app/features/folders/FolderPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPermissions": () => (/* binding */ FolderPermissions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PermissionList_AddPermission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/PermissionList/AddPermission.tsx");
/* harmony import */ var app_core_components_PermissionList_PermissionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PermissionList/PermissionList.tsx");
/* harmony import */ var app_core_components_PermissionList_PermissionsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/PermissionList/PermissionsInfo.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _h, _Tooltip, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__.getNavModel)(state.navIndex, `folder-permissions-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_10__.getLoadingNav)(1)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_9__.getFolderByUid,
  getFolderPermissions: _state_actions__WEBPACK_IMPORTED_MODULE_9__.getFolderPermissions,
  updateFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_9__.updateFolderPermission,
  removeFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_9__.removeFolderPermission,
  addFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_9__.addFolderPermission
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class FolderPermissions extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onOpenAddPermissions", () => {
      this.setState({
        isAdding: true
      });
    });

    _defineProperty(this, "onRemoveItem", item => {
      this.props.removeFolderPermission(item);
    });

    _defineProperty(this, "onPermissionChanged", (item, level) => {
      this.props.updateFolderPermission(item, level);
    });

    _defineProperty(this, "onAddPermission", newItem => {
      return this.props.addFolderPermission(newItem);
    });

    _defineProperty(this, "onCancelAddPermission", () => {
      this.setState({
        isAdding: false
      });
    });

    this.state = {
      isAdding: false
    };
  }

  componentDidMount() {
    this.props.getFolderByUid(this.props.folderUid);
    this.props.getFolderPermissions(this.props.folderUid);
  }

  render() {
    const {
      navModel,
      folder
    } = this.props;
    const {
      isAdding
    } = this.state;

    if (folder.id === 0) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
        navModel: navModel,
        children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
          isLoading: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {})
        }))
      });
    }

    const folderInfo = {
      title: folder.title,
      url: folder.url,
      id: folder.id
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "page-action-bar",
          children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
            className: "page-sub-heading",
            children: "Folder Permissions"
          })), _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
            placement: "auto",
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PermissionList_PermissionsInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              className: "icon--has-hover page-sub-heading-icon",
              name: "question-circle"
            })
          })), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            className: "pull-right",
            onClick: this.onOpenAddPermissions,
            disabled: isAdding,
            children: "Add Permission"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__.SlideDown, {
          in: isAdding,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PermissionList_AddPermission__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onAddPermission: this.onAddPermission,
            onCancel: this.onCancelAddPermission
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PermissionList_PermissionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
          items: folder.permissions,
          onRemoveItem: this.onRemoveItem,
          onPermissionChanged: this.onPermissionChanged,
          isFetching: false,
          folderInfo: folderInfo
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderPermissions));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyUGVybWlzc2lvbnMuZWJhMzBkMmI2ZWU3Zjc0ZDU4YmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFJQSxTQUFTVSxlQUFULENBQXlCQyxLQUF6QixFQUE0Q0MsS0FBNUMsRUFBK0Q7RUFDN0QsTUFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkYsR0FBL0I7RUFDQSxPQUFPO0lBQ0xBLEdBQUcsRUFBRUEsR0FEQTtJQUVMRyxRQUFRLEVBQUVWLHdFQUFXLENBQUNLLEtBQUssQ0FBQ00sUUFBUCxFQUFrQixzQkFBcUJKLEdBQUksRUFBM0MsRUFBOENKLDhEQUFhLENBQUMsQ0FBRCxDQUEzRDtFQUZoQixDQUFQO0FBSUQ7O0FBRUQsTUFBTVMsa0JBQWtCLEdBQUc7RUFDekJWLGNBQWNBLDREQUFBQTtBQURXLENBQTNCO0FBSUEsTUFBTVcsU0FBUyxHQUFHakIsb0RBQU8sQ0FBQ1EsZUFBRCxFQUFrQlEsa0JBQWxCLENBQXpCO0FBR08sTUFBTUUsOEJBQThCLEdBQUcsQ0FBQztFQUFFUCxHQUFGO0VBQU9MLGNBQVA7RUFBdUJRO0FBQXZCLENBQUQsS0FBOEM7RUFDMUZmLGdEQUFTLENBQUMsTUFBTTtJQUNkTyxjQUFjLENBQUNLLEdBQUQsQ0FBZDtFQUNELENBRlEsRUFFTixDQUFDTCxjQUFELEVBQWlCSyxHQUFqQixDQUZNLENBQVQ7RUFJQSxNQUFNUSxpQkFBaUIsR0FBR2hCLG1FQUFBLENBQXlCRSxrRkFBekIsQ0FBMUI7RUFFQSxvQkFDRSx1REFBQyxxRUFBRDtJQUFNLFFBQVEsRUFBRVMsUUFBaEI7SUFBQSx1QkFDRSx1REFBQyw4RUFBRDtNQUFBLHVCQUNFLHVEQUFDLDBFQUFEO1FBQWEsUUFBUSxFQUFDLFNBQXRCO1FBQWdDLFVBQVUsRUFBRUgsR0FBNUM7UUFBaUQsaUJBQWlCLEVBQUVRO01BQXBF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LEVBQUUvQixRQUFoQjtNQUFBLHVCQUNFLHlEQUFDLDhFQUFEO1FBQUEsd0JBQ0U7VUFBSyxTQUFTLEVBQUMsaUJBQWY7VUFBQSxvQ0FDRTtZQUFJLFNBQVMsRUFBQyxrQkFBZDtZQUFBO1VBQUEsRUFERix3Q0FFRSx3REFBQyxnREFBRDtZQUFTLFNBQVMsRUFBQyxNQUFuQjtZQUEwQixPQUFPLGVBQUUsd0RBQUMsMEZBQUQsS0FBbkM7WUFBQSx1QkFDRSx3REFBQyw2Q0FBRDtjQUFNLFNBQVMsRUFBQyx1Q0FBaEI7Y0FBd0QsSUFBSSxFQUFDO1lBQTdEO1VBREYsRUFGRixnQ0FLRTtZQUFLLFNBQVMsRUFBQztVQUFmLEVBTEYsZ0JBTUUsd0RBQUMsK0NBQUQ7WUFBUSxTQUFTLEVBQUMsWUFBbEI7WUFBK0IsT0FBTyxFQUFFLEtBQUttQyxvQkFBN0M7WUFBbUUsUUFBUSxFQUFFVixRQUE3RTtZQUFBO1VBQUEsRUFORjtRQUFBLEVBREYsZUFXRSx3REFBQywrRUFBRDtVQUFXLEVBQUUsRUFBRUEsUUFBZjtVQUFBLHVCQUNFLHdEQUFDLHdGQUFEO1lBQWUsZUFBZSxFQUFFLEtBQUtXLGVBQXJDO1lBQXNELFFBQVEsRUFBRSxLQUFLQztVQUFyRTtRQURGLEVBWEYsZUFjRSx3REFBQyx5RkFBRDtVQUNFLEtBQUssRUFBRWhCLE1BQU0sQ0FBQ2lCLFdBRGhCO1VBRUUsWUFBWSxFQUFFLEtBQUtDLFlBRnJCO1VBR0UsbUJBQW1CLEVBQUUsS0FBS0MsbUJBSDVCO1VBSUUsVUFBVSxFQUFFLEtBSmQ7VUFLRSxVQUFVLEVBQUVSO1FBTGQsRUFkRjtNQUFBO0lBREYsRUFERjtFQTBCRDs7QUE1RWdFO0FBK0VuRSxpRUFBZTdCLFNBQVMsQ0FBQ21CLGlCQUFELENBQXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZm9sZGVycy9BY2Nlc3NDb250cm9sRm9sZGVyUGVybWlzc2lvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2ZvbGRlcnMvRm9sZGVyUGVybWlzc2lvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgUGVybWlzc2lvbnMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRGb2xkZXJCeVVpZCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRMb2FkaW5nTmF2IH0gZnJvbSAnLi9zdGF0ZS9uYXZNb2RlbCc7XG5cbmludGVyZmFjZSBSb3V0ZVByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyB1aWQ6IHN0cmluZyB9PiB7fVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUsIHByb3BzOiBSb3V0ZVByb3BzKSB7XG4gIGNvbnN0IHVpZCA9IHByb3BzLm1hdGNoLnBhcmFtcy51aWQ7XG4gIHJldHVybiB7XG4gICAgdWlkOiB1aWQsXG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCBgZm9sZGVyLXBlcm1pc3Npb25zLSR7dWlkfWAsIGdldExvYWRpbmdOYXYoMSkpLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldEZvbGRlckJ5VWlkLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5leHBvcnQgdHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY29uc3QgQWNjZXNzQ29udHJvbEZvbGRlclBlcm1pc3Npb25zID0gKHsgdWlkLCBnZXRGb2xkZXJCeVVpZCwgbmF2TW9kZWwgfTogUHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRGb2xkZXJCeVVpZCh1aWQpO1xuICB9LCBbZ2V0Rm9sZGVyQnlVaWQsIHVpZF0pO1xuXG4gIGNvbnN0IGNhblNldFBlcm1pc3Npb25zID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRm9sZGVyc1Blcm1pc3Npb25zV3JpdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8UGVybWlzc2lvbnMgcmVzb3VyY2U9XCJmb2xkZXJzXCIgcmVzb3VyY2VJZD17dWlkfSBjYW5TZXRQZXJtaXNzaW9ucz17Y2FuU2V0UGVybWlzc2lvbnN9IC8+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKEFjY2Vzc0NvbnRyb2xGb2xkZXJQZXJtaXNzaW9ucyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBUb29sdGlwLCBJY29uLCBCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTbGlkZURvd24gfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0FuaW1hdGlvbnMvU2xpZGVEb3duJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCBBZGRQZXJtaXNzaW9uIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGVybWlzc2lvbkxpc3QvQWRkUGVybWlzc2lvbic7XG5pbXBvcnQgUGVybWlzc2lvbkxpc3QgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QZXJtaXNzaW9uTGlzdC9QZXJtaXNzaW9uTGlzdCc7XG5pbXBvcnQgUGVybWlzc2lvbnNJbmZvIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGVybWlzc2lvbkxpc3QvUGVybWlzc2lvbnNJbmZvJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IERhc2hib2FyZEFjbCwgUGVybWlzc2lvbkxldmVsLCBOZXdEYXNoYm9hcmRBY2xJdGVtIH0gZnJvbSAnYXBwL3R5cGVzL2FjbCc7XG5cbmltcG9ydCB7XG4gIGdldEZvbGRlckJ5VWlkLFxuICBnZXRGb2xkZXJQZXJtaXNzaW9ucyxcbiAgdXBkYXRlRm9sZGVyUGVybWlzc2lvbixcbiAgcmVtb3ZlRm9sZGVyUGVybWlzc2lvbixcbiAgYWRkRm9sZGVyUGVybWlzc2lvbixcbn0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldExvYWRpbmdOYXYgfSBmcm9tICcuL3N0YXRlL25hdk1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogT3duUHJvcHMpID0+IHtcbiAgY29uc3QgdWlkID0gcHJvcHMubWF0Y2gucGFyYW1zLnVpZDtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsIGBmb2xkZXItcGVybWlzc2lvbnMtJHt1aWR9YCwgZ2V0TG9hZGluZ05hdigxKSksXG4gICAgZm9sZGVyVWlkOiB1aWQsXG4gICAgZm9sZGVyOiBzdGF0ZS5mb2xkZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldEZvbGRlckJ5VWlkLFxuICBnZXRGb2xkZXJQZXJtaXNzaW9ucyxcbiAgdXBkYXRlRm9sZGVyUGVybWlzc2lvbixcbiAgcmVtb3ZlRm9sZGVyUGVybWlzc2lvbixcbiAgYWRkRm9sZGVyUGVybWlzc2lvbixcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBpc0FkZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEZvbGRlclBlcm1pc3Npb25zIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQWRkaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRGb2xkZXJCeVVpZCh0aGlzLnByb3BzLmZvbGRlclVpZCk7XG4gICAgdGhpcy5wcm9wcy5nZXRGb2xkZXJQZXJtaXNzaW9ucyh0aGlzLnByb3BzLmZvbGRlclVpZCk7XG4gIH1cblxuICBvbk9wZW5BZGRQZXJtaXNzaW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBZGRpbmc6IHRydWUgfSk7XG4gIH07XG5cbiAgb25SZW1vdmVJdGVtID0gKGl0ZW06IERhc2hib2FyZEFjbCkgPT4ge1xuICAgIHRoaXMucHJvcHMucmVtb3ZlRm9sZGVyUGVybWlzc2lvbihpdGVtKTtcbiAgfTtcblxuICBvblBlcm1pc3Npb25DaGFuZ2VkID0gKGl0ZW06IERhc2hib2FyZEFjbCwgbGV2ZWw6IFBlcm1pc3Npb25MZXZlbCkgPT4ge1xuICAgIHRoaXMucHJvcHMudXBkYXRlRm9sZGVyUGVybWlzc2lvbihpdGVtLCBsZXZlbCk7XG4gIH07XG5cbiAgb25BZGRQZXJtaXNzaW9uID0gKG5ld0l0ZW06IE5ld0Rhc2hib2FyZEFjbEl0ZW0pID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5hZGRGb2xkZXJQZXJtaXNzaW9uKG5ld0l0ZW0pO1xuICB9O1xuXG4gIG9uQ2FuY2VsQWRkUGVybWlzc2lvbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBZGRpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBmb2xkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc0FkZGluZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChmb2xkZXIuaWQgPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXt0cnVlfT5cbiAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgICA8L1BhZ2U+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGZvbGRlckluZm8gPSB7IHRpdGxlOiBmb2xkZXIudGl0bGUsIHVybDogZm9sZGVyLnVybCwgaWQ6IGZvbGRlci5pZCB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPkZvbGRlciBQZXJtaXNzaW9uczwvaDM+XG4gICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJhdXRvXCIgY29udGVudD17PFBlcm1pc3Npb25zSW5mbyAvPn0+XG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImljb24tLWhhcy1ob3ZlciBwYWdlLXN1Yi1oZWFkaW5nLWljb25cIiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgLz5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyX19zcGFjZXJcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCIgb25DbGljaz17dGhpcy5vbk9wZW5BZGRQZXJtaXNzaW9uc30gZGlzYWJsZWQ9e2lzQWRkaW5nfT5cbiAgICAgICAgICAgICAgQWRkIFBlcm1pc3Npb25cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTbGlkZURvd24gaW49e2lzQWRkaW5nfT5cbiAgICAgICAgICAgIDxBZGRQZXJtaXNzaW9uIG9uQWRkUGVybWlzc2lvbj17dGhpcy5vbkFkZFBlcm1pc3Npb259IG9uQ2FuY2VsPXt0aGlzLm9uQ2FuY2VsQWRkUGVybWlzc2lvbn0gLz5cbiAgICAgICAgICA8L1NsaWRlRG93bj5cbiAgICAgICAgICA8UGVybWlzc2lvbkxpc3RcbiAgICAgICAgICAgIGl0ZW1zPXtmb2xkZXIucGVybWlzc2lvbnN9XG4gICAgICAgICAgICBvblJlbW92ZUl0ZW09e3RoaXMub25SZW1vdmVJdGVtfVxuICAgICAgICAgICAgb25QZXJtaXNzaW9uQ2hhbmdlZD17dGhpcy5vblBlcm1pc3Npb25DaGFuZ2VkfVxuICAgICAgICAgICAgaXNGZXRjaGluZz17ZmFsc2V9XG4gICAgICAgICAgICBmb2xkZXJJbmZvPXtmb2xkZXJJbmZvfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihGb2xkZXJQZXJtaXNzaW9ucyk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjb25uZWN0IiwiUGVybWlzc2lvbnMiLCJQYWdlIiwiY29udGV4dFNydiIsImdldE5hdk1vZGVsIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImdldEZvbGRlckJ5VWlkIiwiZ2V0TG9hZGluZ05hdiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvcHMiLCJ1aWQiLCJtYXRjaCIsInBhcmFtcyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJBY2Nlc3NDb250cm9sRm9sZGVyUGVybWlzc2lvbnMiLCJjYW5TZXRQZXJtaXNzaW9ucyIsImhhc1Blcm1pc3Npb24iLCJGb2xkZXJzUGVybWlzc2lvbnNXcml0ZSIsIlB1cmVDb21wb25lbnQiLCJUb29sdGlwIiwiSWNvbiIsIkJ1dHRvbiIsIlNsaWRlRG93biIsIkFkZFBlcm1pc3Npb24iLCJQZXJtaXNzaW9uTGlzdCIsIlBlcm1pc3Npb25zSW5mbyIsImdldEZvbGRlclBlcm1pc3Npb25zIiwidXBkYXRlRm9sZGVyUGVybWlzc2lvbiIsInJlbW92ZUZvbGRlclBlcm1pc3Npb24iLCJhZGRGb2xkZXJQZXJtaXNzaW9uIiwiZm9sZGVyVWlkIiwiZm9sZGVyIiwiRm9sZGVyUGVybWlzc2lvbnMiLCJjb25zdHJ1Y3RvciIsInNldFN0YXRlIiwiaXNBZGRpbmciLCJpdGVtIiwibGV2ZWwiLCJuZXdJdGVtIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJpZCIsImZvbGRlckluZm8iLCJ0aXRsZSIsInVybCIsIm9uT3BlbkFkZFBlcm1pc3Npb25zIiwib25BZGRQZXJtaXNzaW9uIiwib25DYW5jZWxBZGRQZXJtaXNzaW9uIiwicGVybWlzc2lvbnMiLCJvblJlbW92ZUl0ZW0iLCJvblBlcm1pc3Npb25DaGFuZ2VkIl0sInNvdXJjZVJvb3QiOiIifQ==