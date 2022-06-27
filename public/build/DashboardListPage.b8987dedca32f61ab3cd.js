"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DashboardListPage"],{

/***/ "./public/app/features/search/components/DashboardListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardListPage": () => (/* binding */ DashboardListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/search/loaders.ts");
/* harmony import */ var _ManageDashboards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/search/components/ManageDashboards.tsx");
/* harmony import */ var _ManageDashboardsNew__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/search/components/ManageDashboardsNew.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const DashboardListPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({
  navModel,
  match,
  location
}) => {
  var _value$pageNavModel;

  const {
    loading,
    value
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])(() => {
    const uid = match.params.uid;
    const url = location.pathname;

    if (!uid || !url.startsWith('/dashboards')) {
      return Promise.resolve({
        pageNavModel: navModel
      });
    }

    return (0,_loaders__WEBPACK_IMPORTED_MODULE_7__.loadFolderPage)(uid).then(({
      folder,
      folderNav
    }) => {
      const path = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.locationUtil.stripBaseFromUrl(folder.url);

      if (path !== location.pathname) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.push(path);
      }

      return {
        folder,
        pageNavModel: Object.assign({}, navModel, {
          main: folderNav
        })
      };
    });
  }, [match.params.uid]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navModel: (_value$pageNavModel = value === null || value === void 0 ? void 0 : value.pageNavModel) !== null && _value$pageNavModel !== void 0 ? _value$pageNavModel : navModel,
    children: Boolean(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.panelTitleSearch) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
      isLoading: loading,
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
            display: flex;
            flex-direction: column;
            overflow: hidden;
          `,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ManageDashboardsNew__WEBPACK_IMPORTED_MODULE_9__["default"], {
        folder: value === null || value === void 0 ? void 0 : value.folder
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
      isLoading: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ManageDashboards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        folder: value === null || value === void 0 ? void 0 : value.folder
      })
    })
  });
});
DashboardListPage.displayName = 'DashboardListPage';

const mapStateToProps = state => {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'manage-dashboards')
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(DashboardListPage));

/***/ }),

/***/ "./public/app/features/search/components/ManageDashboardsNew.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageDashboardsNew": () => (/* binding */ ManageDashboardsNew),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useLocalStorage.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/search/constants.ts");
/* harmony import */ var _hooks_useSearchKeyboardSelection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/search/hooks/useSearchKeyboardSelection.ts");
/* harmony import */ var _hooks_useSearchQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/search/hooks/useSearchQuery.ts");
/* harmony import */ var _page_components_SearchView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/search/page/components/SearchView.tsx");
/* harmony import */ var _DashboardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/search/components/DashboardActions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Spinner;
















const ManageDashboardsNew = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(({
  folder
}) => {
  var _query$query;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles); // since we don't use "query" from use search... it is not actually loaded from the URL!

  const {
    query,
    onQueryChange
  } = (0,_hooks_useSearchQuery__WEBPACK_IMPORTED_MODULE_8__.useSearchQuery)({});
  const {
    onKeyDown,
    keyboardEvents
  } = (0,_hooks_useSearchKeyboardSelection__WEBPACK_IMPORTED_MODULE_7__.useKeyNavigationListener)(); // TODO: we need to refactor DashboardActions to use folder.uid instead

  const folderId = folder === null || folder === void 0 ? void 0 : folder.id; // const folderUid = folder?.uid;

  const canSave = folder === null || folder === void 0 ? void 0 : folder.canSave;
  const hasEditPermissionInFolders = folder ? canSave : app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasEditPermissionInFolders;
  let [includePanels, setIncludePanels] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(_constants__WEBPACK_IMPORTED_MODULE_6__.SEARCH_PANELS_LOCAL_STORAGE_KEY, true);

  if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.panelTitleSearch) {
    includePanels = false;
  }

  const {
    isEditor
  } = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv;
  const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '');

  const onSearchQueryChange = e => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
  };

  (0,react_use__WEBPACK_IMPORTED_MODULE_13__["default"])(() => onQueryChange(inputValue), 200, [inputValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.actionBar, 'page-action-bar'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.inputWrapper, 'gf-form gf-form--grow m-r-2'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          value: inputValue,
          onChange: onSearchQueryChange,
          onKeyDown: onKeyDown,
          autoFocus: true,
          spellCheck: false,
          placeholder: includePanels ? 'Search for dashboards and panels' : 'Search for dashboards',
          className: styles.searchInput,
          suffix:  false ? 0 : null
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_DashboardActions__WEBPACK_IMPORTED_MODULE_10__.DashboardActions, {
        folderId: folderId,
        canCreateFolders: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.FoldersCreate, isEditor),
        canCreateDashboards: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.DashboardsCreate, hasEditPermissionInFolders || !!canSave)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_page_components_SearchView__WEBPACK_IMPORTED_MODULE_9__.SearchView, {
      showManage: isEditor || hasEditPermissionInFolders || canSave,
      folderDTO: folder,
      queryText: query.query,
      onQueryTextChange: newQueryText => {
        setInputValue(newQueryText);
      },
      hidePseudoFolders: true,
      includePanels: includePanels,
      setIncludePanels: setIncludePanels,
      keyboardEvents: keyboardEvents
    })]
  });
});
ManageDashboardsNew.displayName = 'ManageDashboardsNew';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManageDashboardsNew);

const getStyles = theme => ({
  actionBar: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.breakpoints.down('sm')} {
      flex-wrap: wrap;
    }
  `,
  inputWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.breakpoints.down('sm')} {
      margin-right: 0 !important;
    }
  `,
  searchInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 6px;
    min-height: ${theme.spacing(4)};
  `,
  unsupported: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
  `,
  noResults: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.v1.spacing.md};
    background: ${theme.v1.colors.bg2};
    font-style: italic;
    margin-top: ${theme.v1.spacing.md};
  `
});

/***/ }),

/***/ "./public/app/features/search/loaders.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadFolderPage": () => (/* binding */ loadFolderPage)
/* harmony export */ });
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var _folders_state_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");


const loadFolderPage = uid => {
  return app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.backendSrv.getFolderByUid(uid).then(folder => {
    const navModel = (0,_folders_state_navModel__WEBPACK_IMPORTED_MODULE_1__.buildNavModel)(folder);
    navModel.children[0].active = true;
    return {
      folder,
      folderNav: navModel
    };
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkTGlzdFBhZ2UuYjg5ODdkZWRjYTMyZjYxYWIzY2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBOztBQVlPLE1BQU1hLGlCQUE0QixnQkFBR1gsMkNBQUksQ0FBQyxDQUFDO0VBQUVZLFFBQUY7RUFBWUMsS0FBWjtFQUFtQkM7QUFBbkIsQ0FBRCxLQUFtQztFQUFBOztFQUNsRixNQUFNO0lBQUVDLE9BQUY7SUFBV0M7RUFBWCxJQUFxQmQsc0RBQVEsQ0FBZ0UsTUFBTTtJQUN2RyxNQUFNZSxHQUFHLEdBQUdKLEtBQUssQ0FBQ0ssTUFBTixDQUFhRCxHQUF6QjtJQUNBLE1BQU1FLEdBQUcsR0FBR0wsUUFBUSxDQUFDTSxRQUFyQjs7SUFDQSxJQUFJLENBQUNILEdBQUQsSUFBUSxDQUFDRSxHQUFHLENBQUNFLFVBQUosQ0FBZSxhQUFmLENBQWIsRUFBNEM7TUFDMUMsT0FBT0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCO1FBQUVDLFlBQVksRUFBRVo7TUFBaEIsQ0FBaEIsQ0FBUDtJQUNEOztJQUVELE9BQU9KLHdEQUFjLENBQUNTLEdBQUQsQ0FBZCxDQUFxQlEsSUFBckIsQ0FBMEIsQ0FBQztNQUFFQyxNQUFGO01BQVVDO0lBQVYsQ0FBRCxLQUEyQjtNQUMxRCxNQUFNQyxJQUFJLEdBQUd6Qix3RUFBQSxDQUE4QnVCLE1BQU0sQ0FBQ1AsR0FBckMsQ0FBYjs7TUFFQSxJQUFJUyxJQUFJLEtBQUtkLFFBQVEsQ0FBQ00sUUFBdEIsRUFBZ0M7UUFDOUJmLGtFQUFBLENBQXFCdUIsSUFBckI7TUFDRDs7TUFFRCxPQUFPO1FBQUVGLE1BQUY7UUFBVUYsWUFBWSxvQkFBT1osUUFBUDtVQUFpQm1CLElBQUksRUFBRUo7UUFBdkI7TUFBdEIsQ0FBUDtJQUNELENBUk0sQ0FBUDtFQVNELENBaEJrQyxFQWdCaEMsQ0FBQ2QsS0FBSyxDQUFDSyxN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QUFyQixDQUFQO0VBQ0QsQ0FMTSxDQUFQO0FBTUQsQ0FQTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlYXJjaC9jb21wb25lbnRzL0Rhc2hib2FyZExpc3RQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZWFyY2gvY29tcG9uZW50cy9NYW5hZ2VEYXNoYm9hcmRzTmV3LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZWFyY2gvbG9hZGVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgTWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCwgbG9jYXRpb25VdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgRm9sZGVyRFRPLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgbG9hZEZvbGRlclBhZ2UgfSBmcm9tICcuLi9sb2FkZXJzJztcblxuaW1wb3J0IE1hbmFnZURhc2hib2FyZHMgZnJvbSAnLi9NYW5hZ2VEYXNoYm9hcmRzJztcbmltcG9ydCBNYW5hZ2VEYXNoYm9hcmRzTmV3IGZyb20gJy4vTWFuYWdlRGFzaGJvYXJkc05ldyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGJvYXJkTGlzdFBhZ2VSb3V0ZVBhcmFtcyB7XG4gIHVpZD86IHN0cmluZztcbiAgc2x1Zz86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERhc2hib2FyZExpc3RQYWdlQ29ubmVjdGVkUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczxEYXNoYm9hcmRMaXN0UGFnZVJvdXRlUGFyYW1zPiwgRGFzaGJvYXJkTGlzdFBhZ2VDb25uZWN0ZWRQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkTGlzdFBhZ2U6IEZDPFByb3BzPiA9IG1lbW8oKHsgbmF2TW9kZWwsIG1hdGNoLCBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgdmFsdWUgfSA9IHVzZUFzeW5jPCgpID0+IFByb21pc2U8eyBmb2xkZXI/OiBGb2xkZXJEVE87IHBhZ2VOYXZNb2RlbDogTmF2TW9kZWwgfT4+KCgpID0+IHtcbiAgICBjb25zdCB1aWQgPSBtYXRjaC5wYXJhbXMudWlkO1xuICAgIGNvbnN0IHVybCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmICghdWlkIHx8ICF1cmwuc3RhcnRzV2l0aCgnL2Rhc2hib2FyZHMnKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IHBhZ2VOYXZNb2RlbDogbmF2TW9kZWwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvYWRGb2xkZXJQYWdlKHVpZCEpLnRoZW4oKHsgZm9sZGVyLCBmb2xkZXJOYXYgfSkgPT4ge1xuICAgICAgY29uc3QgcGF0aCA9IGxvY2F0aW9uVXRpbC5zdHJpcEJhc2VGcm9tVXJsKGZvbGRlci51cmwpO1xuXG4gICAgICBpZiAocGF0aCAhPT0gbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2gocGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGZvbGRlciwgcGFnZU5hdk1vZGVsOiB7IC4uLm5hdk1vZGVsLCBtYWluOiBmb2xkZXJOYXYgfSB9O1xuICAgIH0pO1xuICB9LCBbbWF0Y2gucGFyYW1zLnVpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e3ZhbHVlPy5wYWdlTmF2TW9kZWwgPz8gbmF2TW9kZWx9PlxuICAgICAge0Jvb2xlYW4oY29uZmlnLmZlYXR1cmVUb2dnbGVzLnBhbmVsVGl0bGVTZWFyY2gpID8gKFxuICAgICAgICA8UGFnZS5Db250ZW50c1xuICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBgfVxuICAgICAgICA+XG4gICAgICAgICAgPE1hbmFnZURhc2hib2FyZHNOZXcgZm9sZGVyPXt2YWx1ZT8uZm9sZGVyfSAvPlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICApIDogKFxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICAgIDxNYW5hZ2VEYXNoYm9hcmRzIGZvbGRlcj17dmFsdWU/LmZvbGRlcn0gLz5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgKX1cbiAgICA8L1BhZ2U+XG4gICk7XG59KTtcblxuRGFzaGJvYXJkTGlzdFBhZ2UuZGlzcGxheU5hbWUgPSAnRGFzaGJvYXJkTGlzdFBhZ2UnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM6IE1hcFN0YXRlVG9Qcm9wczxEYXNoYm9hcmRMaXN0UGFnZUNvbm5lY3RlZFByb3BzLCB7fSwgU3RvcmVTdGF0ZT4gPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdtYW5hZ2UtZGFzaGJvYXJkcycpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKERhc2hib2FyZExpc3RQYWdlKTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UsIHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW5wdXQsIHVzZVN0eWxlczIsIFNwaW5uZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgRm9sZGVyRFRPLCBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgU0VBUkNIX1BBTkVMU19MT0NBTF9TVE9SQUdFX0tFWSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VLZXlOYXZpZ2F0aW9uTGlzdGVuZXIgfSBmcm9tICcuLi9ob29rcy91c2VTZWFyY2hLZXlib2FyZFNlbGVjdGlvbic7XG5pbXBvcnQgeyB1c2VTZWFyY2hRdWVyeSB9IGZyb20gJy4uL2hvb2tzL3VzZVNlYXJjaFF1ZXJ5JztcbmltcG9ydCB7IFNlYXJjaFZpZXcgfSBmcm9tICcuLi9wYWdlL2NvbXBvbmVudHMvU2VhcmNoVmlldyc7XG5cbmltcG9ydCB7IERhc2hib2FyZEFjdGlvbnMgfSBmcm9tICcuL0Rhc2hib2FyZEFjdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9sZGVyPzogRm9sZGVyRFRPO1xufVxuXG5leHBvcnQgY29uc3QgTWFuYWdlRGFzaGJvYXJkc05ldyA9IFJlYWN0Lm1lbW8oKHsgZm9sZGVyIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgLy8gc2luY2Ugd2UgZG9uJ3QgdXNlIFwicXVlcnlcIiBmcm9tIHVzZSBzZWFyY2guLi4gaXQgaXMgbm90IGFjdHVhbGx5IGxvYWRlZCBmcm9tIHRoZSBVUkwhXG4gIGNvbnN0IHsgcXVlcnksIG9uUXVlcnlDaGFuZ2UgfSA9IHVzZVNlYXJjaFF1ZXJ5KHt9KTtcbiAgY29uc3QgeyBvbktleURvd24sIGtleWJvYXJkRXZlbnRzIH0gPSB1c2VLZXlOYXZpZ2F0aW9uTGlzdGVuZXIoKTtcblxuICAvLyBUT0RPOiB3ZSBuZWVkIHRvIHJlZmFjdG9yIERhc2hib2FyZEFjdGlvbnMgdG8gdXNlIGZvbGRlci51aWQgaW5zdGVhZFxuICBjb25zdCBmb2xkZXJJZCA9IGZvbGRlcj8uaWQ7XG4gIC8vIGNvbnN0IGZvbGRlclVpZCA9IGZvbGRlcj8udWlkO1xuICBjb25zdCBjYW5TYXZlID0gZm9sZGVyPy5jYW5TYXZlO1xuICBjb25zdCBoYXNFZGl0UGVybWlzc2lvbkluRm9sZGVycyA9IGZvbGRlciA/IGNhblNhdmUgOiBjb250ZXh0U3J2Lmhhc0VkaXRQZXJtaXNzaW9uSW5Gb2xkZXJzO1xuXG4gIGxldCBbaW5jbHVkZVBhbmVscywgc2V0SW5jbHVkZVBhbmVsc10gPSB1c2VMb2NhbFN0b3JhZ2U8Ym9vbGVhbj4oU0VBUkNIX1BBTkVMU19MT0NBTF9TVE9SQUdFX0tFWSwgdHJ1ZSk7XG4gIGlmICghY29uZmlnLmZlYXR1cmVUb2dnbGVzLnBhbmVsVGl0bGVTZWFyY2gpIHtcbiAgICBpbmNsdWRlUGFuZWxzID0gZmFsc2U7XG4gIH1cblxuICBjb25zdCB7IGlzRWRpdG9yIH0gPSBjb250ZXh0U3J2O1xuXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKHF1ZXJ5LnF1ZXJ5ID8/ICcnKTtcbiAgY29uc3Qgb25TZWFyY2hRdWVyeUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJbnB1dFZhbHVlKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG4gIHVzZURlYm91bmNlKCgpID0+IG9uUXVlcnlDaGFuZ2UoaW5wdXRWYWx1ZSksIDIwMCwgW2lucHV0VmFsdWVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmFjdGlvbkJhciwgJ3BhZ2UtYWN0aW9uLWJhcicpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5pbnB1dFdyYXBwZXIsICdnZi1mb3JtIGdmLWZvcm0tLWdyb3cgbS1yLTInKX0+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaFF1ZXJ5Q2hhbmdlfVxuICAgICAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIHNwZWxsQ2hlY2s9e2ZhbHNlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2luY2x1ZGVQYW5lbHMgPyAnU2VhcmNoIGZvciBkYXNoYm9hcmRzIGFuZCBwYW5lbHMnIDogJ1NlYXJjaCBmb3IgZGFzaGJvYXJkcyd9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dH1cbiAgICAgICAgICAgIHN1ZmZpeD17ZmFsc2UgPyA8U3Bpbm5lciAvPiA6IG51bGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEYXNoYm9hcmRBY3Rpb25zXG4gICAgICAgICAgZm9sZGVySWQ9e2ZvbGRlcklkfVxuICAgICAgICAgIGNhbkNyZWF0ZUZvbGRlcnM9e2NvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRm9sZGVyc0NyZWF0ZSwgaXNFZGl0b3IpfVxuICAgICAgICAgIGNhbkNyZWF0ZURhc2hib2FyZHM9e2NvbnRleHRTcnYuaGFzQWNjZXNzKFxuICAgICAgICAgICAgQWNjZXNzQ29udHJvbEFjdGlvbi5EYXNoYm9hcmRzQ3JlYXRlLFxuICAgICAgICAgICAgaGFzRWRpdFBlcm1pc3Npb25JbkZvbGRlcnMgfHwgISFjYW5TYXZlXG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8U2VhcmNoVmlld1xuICAgICAgICBzaG93TWFuYWdlPXtpc0VkaXRvciB8fCBoYXNFZGl0UGVybWlzc2lvbkluRm9sZGVycyB8fCBjYW5TYXZlfVxuICAgICAgICBmb2xkZXJEVE89e2ZvbGRlcn1cbiAgICAgICAgcXVlcnlUZXh0PXtxdWVyeS5xdWVyeX1cbiAgICAgICAgb25RdWVyeVRleHRDaGFuZ2U9eyhuZXdRdWVyeVRleHQpID0+IHtcbiAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld1F1ZXJ5VGV4dCk7XG4gICAgICAgIH19XG4gICAgICAgIGhpZGVQc2V1ZG9Gb2xkZXJzPXt0cnVlfVxuICAgICAgICBpbmNsdWRlUGFuZWxzPXtpbmNsdWRlUGFuZWxzIX1cbiAgICAgICAgc2V0SW5jbHVkZVBhbmVscz17c2V0SW5jbHVkZVBhbmVsc31cbiAgICAgICAga2V5Ym9hcmRFdmVudHM9e2tleWJvYXJkRXZlbnRzfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn0pO1xuXG5NYW5hZ2VEYXNoYm9hcmRzTmV3LmRpc3BsYXlOYW1lID0gJ01hbmFnZURhc2hib2FyZHNOZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VEYXNoYm9hcmRzTmV3O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGFjdGlvbkJhcjogY3NzYFxuICAgICR7dGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKX0ge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgYCxcbiAgaW5wdXRXcmFwcGVyOiBjc3NgXG4gICAgJHt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpfSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gIGAsXG4gIHNlYXJjaElucHV0OiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIG1pbi1oZWlnaHQ6ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gIGAsXG4gIHVuc3VwcG9ydGVkOiBjc3NgXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgYCxcbiAgbm9SZXN1bHRzOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS52MS5zcGFjaW5nLm1kfTtcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLnYxLmNvbG9ycy5iZzJ9O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnYxLnNwYWNpbmcubWR9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBiYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuXG5pbXBvcnQgeyBidWlsZE5hdk1vZGVsIH0gZnJvbSAnLi4vZm9sZGVycy9zdGF0ZS9uYXZNb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRm9sZGVyUGFnZSA9ICh1aWQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYmFja2VuZFNydi5nZXRGb2xkZXJCeVVpZCh1aWQpLnRoZW4oKGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IG5hdk1vZGVsID0gYnVpbGROYXZNb2RlbChmb2xkZXIpO1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIVswXS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHsgZm9sZGVyLCBmb2xkZXJOYXY6IG5hdk1vZGVsIH07XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIm1lbW8iLCJjb25uZWN0IiwidXNlQXN5bmMiLCJsb2NhdGlvblV0aWwiLCJjb25maWciLCJsb2NhdGlvblNlcnZpY2UiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJsb2FkRm9sZGVyUGFnZSIsIk1hbmFnZURhc2hib2FyZHMiLCJNYW5hZ2VEYXNoYm9hcmRzTmV3IiwiRGFzaGJvYXJkTGlzdFBhZ2UiLCJuYXZNb2RlbCIsIm1hdGNoIiwibG9jYXRpb24iLCJsb2FkaW5nIiwidmFsdWUiLCJ1aWQiLCJwYXJhbXMiLCJ1cmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhZ2VOYXZNb2RlbCIsInRoZW4iLCJmb2xkZXIiLCJmb2xkZXJOYXYiLCJwYXRoIiwic3RyaXBCYXNlRnJvbVVybCIsInB1c2giLCJtYWluIiwiQm9vbGVhbiIsImZlYXR1cmVUb2dnbGVzIiwicGFuZWxUaXRsZVNlYXJjaCIsImRpc3BsYXlOYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZJbmRleCIsImN4IiwidXNlU3RhdGUiLCJ1c2VEZWJvdW5jZSIsInVzZUxvY2FsU3RvcmFnZSIsIklucHV0IiwidXNlU3R5bGVzMiIsIlNwaW5uZXIiLCJjb250ZXh0U3J2IiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsIlNFQVJDSF9QQU5FTFNfTE9DQUxfU1RPUkFHRV9LRVkiLCJ1c2VLZXlOYXZpZ2F0aW9uTGlzdGVuZXIiLCJ1c2VTZWFyY2hRdWVyeSIsIlNlYXJjaFZpZXciLCJEYXNoYm9hcmRBY3Rpb25zIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwicXVlcnkiLCJvblF1ZXJ5Q2hhbmdlIiwib25LZXlEb3duIiwia2V5Ym9hcmRFdmVudHMiLCJmb2xkZXJJZCIsImlkIiwiY2FuU2F2ZSIsImhhc0VkaXRQZXJtaXNzaW9uSW5Gb2xkZXJzIiwiaW5jbHVkZVBhbmVscyIsInNldEluY2x1ZGVQYW5lbHMiLCJpc0VkaXRvciIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwib25TZWFyY2hRdWVyeUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJhY3Rpb25CYXIiLCJpbnB1dFdyYXBwZXIiLCJzZWFyY2hJbnB1dCIsImhhc0FjY2VzcyIsIkZvbGRlcnNDcmVhdGUiLCJEYXNoYm9hcmRzQ3JlYXRlIiwibmV3UXVlcnlUZXh0IiwidGhlbWUiLCJicmVha3BvaW50cyIsImRvd24iLCJzcGFjaW5nIiwidW5zdXBwb3J0ZWQiLCJub1Jlc3VsdHMiLCJ2MSIsIm1kIiwiY29sb3JzIiwiYmcyIiwiYmFja2VuZFNydiIsImJ1aWxkTmF2TW9kZWwiLCJnZXRGb2xkZXJCeVVpZCIsImNoaWxkcmVuIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==