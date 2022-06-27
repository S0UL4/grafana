"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderLibraryPanelsPage"],{

/***/ "./public/app/core/components/FolderFilter/FolderFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderFilter": () => (/* binding */ FolderFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;









function FolderFilter({
  onChange: propsOnChange,
  maxMenuHeight
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const getOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(searchString => getFoldersAsOptions(searchString, setLoading), []);
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()(getOptions, 300), [getOptions]);
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(folders => {
    const changedFolders = [];

    for (const folder of folders) {
      if (folder.value) {
        changedFolders.push(folder.value);
      }
    }

    propsOnChange(changedFolders);
    setValue(folders);
  }, [propsOnChange]);
  const selectOptions = {
    defaultOptions: true,
    isMulti: true,
    noOptionsMessage: 'No folders found',
    placeholder: 'Filter by folder',
    maxMenuHeight,
    value,
    onChange
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.container,
    children: [value.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      size: "xs",
      icon: "trash-alt",
      fill: "text",
      className: styles.clear,
      onClick: () => onChange([]),
      "aria-label": "Clear folders",
      children: "Clear folders"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.AsyncMultiSelect, Object.assign({}, selectOptions, {
      isLoading: loading,
      loadOptions: debouncedLoadOptions,
      prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "filter"
      })),
      "aria-label": "Folder filter"
    }))]
  });
}

async function getFoldersAsOptions(searchString, setLoading) {
  setLoading(true);
  const params = {
    query: searchString,
    type: 'dash-folder',
    permission: app_types__WEBPACK_IMPORTED_MODULE_5__.PermissionLevelString.View
  };
  const searchHits = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().search(params);
  const options = searchHits.map(d => ({
    label: d.title,
    value: {
      id: d.id,
      title: d.title
    }
  }));

  if (!searchString || 'general'.includes(searchString.toLowerCase())) {
    options.unshift({
      label: 'General',
      value: {
        id: 0,
        title: 'General'
      }
    });
  }

  setLoading(false);
  return options;
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,
    clear: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: clear;
      font-size: ${theme.spacing(1.5)};
      position: absolute;
      top: -${theme.spacing(4.5)};
      right: 0;
    `
  };
}

/***/ }),

/***/ "./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelTypeFilter": () => (/* binding */ PanelTypeFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_panel_state_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/panel/state/util.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;







const PanelTypeFilter = ({
  onChange: propsOnChange,
  maxMenuHeight
}) => {
  const plugins = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return (0,app_features_panel_state_util__WEBPACK_IMPORTED_MODULE_3__.getAllPanelPluginMeta)();
  }, []);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => plugins.map(p => ({
    label: p.name,
    imgUrl: p.info.logos.small,
    value: p
  })).sort((a, b) => {
    var _a$label;

    return (_a$label = a.label) === null || _a$label === void 0 ? void 0 : _a$label.localeCompare(b.label);
  }), [plugins]);
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(plugins => {
    const changedPlugins = [];

    for (const plugin of plugins) {
      if (plugin.value) {
        changedPlugins.push(plugin.value);
      }
    }

    propsOnChange(changedPlugins);
    setValue(plugins);
  }, [propsOnChange]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const selectOptions = {
    defaultOptions: true,
    getOptionLabel: i => i.label,
    getOptionValue: i => i.value,
    noOptionsMessage: 'No Panel types found',
    placeholder: 'Filter by type',
    maxMenuHeight,
    options,
    value,
    onChange
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [value.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      size: "xs",
      icon: "trash-alt",
      fill: "text",
      className: styles.clear,
      onClick: () => onChange([]),
      "aria-label": "Clear types",
      children: "Clear types"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({}, selectOptions, {
      prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "filter"
      })),
      "aria-label": "Panel Type filter"
    }))]
  });
};

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,
    clear: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: clear;
      font-size: ${theme.spacing(1.5)};
      position: absolute;
      top: -${theme.spacing(4.5)};
      right: 0;
    `
  };
}

/***/ }),

/***/ "./public/app/features/folders/FolderLibraryPanelsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderLibraryPanelsPage": () => (/* binding */ FolderLibraryPanelsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");
/* harmony import */ var _library_panels_components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, `folder-library-panels-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_7__.getLoadingNav)(1)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_6__.getFolderByUid
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function FolderLibraryPanelsPage({
  navModel,
  getFolderByUid,
  folderUid,
  folder
}) {
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async () => await getFolderByUid(folderUid), [getFolderByUid, folderUid]);
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelsSearch, {
        onClick: setSelected,
        currentFolderId: folder.id,
        showSecondaryActions: true,
        showSort: true,
        showPanelFilter: true
      }), selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_panels_components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_5__.OpenLibraryPanelModal, {
        onDismiss: () => setSelected(undefined),
        libraryPanel: selected
      }) : null]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderLibraryPanelsPage));

/***/ }),

/***/ "./public/app/features/library-panels/components/DeleteLibraryPanelModal/DeleteLibraryPanelModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteLibraryPanelModal": () => (/* binding */ DeleteLibraryPanelModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/styles.ts");
/* harmony import */ var _LibraryPanelsView_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/reducer.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingIndicator, _Confirm, _span, _thead;










const DeleteLibraryPanelModal = ({
  libraryPanel,
  onDismiss,
  onConfirm
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(_styles__WEBPACK_IMPORTED_MODULE_3__.getModalStyles);
  const [{
    dashboardTitles,
    loadingState
  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_6__.deleteLibraryPanelModalReducer, _reducer__WEBPACK_IMPORTED_MODULE_6__.initialDeleteLibraryPanelModalState);
  const asyncDispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_LibraryPanelsView_actions__WEBPACK_IMPORTED_MODULE_4__.asyncDispatcher)(dispatch), [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    asyncDispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.getConnectedDashboards)(libraryPanel));
  }, [asyncDispatch, libraryPanel]);
  const connected = Boolean(dashboardTitles.length);
  const done = loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: styles.modal,
    title: "Delete library panel",
    icon: "trash-alt",
    onDismiss: onDismiss,
    isOpen: true,
    children: [!done ? _LoadingIndicator || (_LoadingIndicator = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(LoadingIndicator, {})) : null, done ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [connected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HasConnectedDashboards, {
        dashboardTitles: dashboardTitles
      }) : null, !connected ? _Confirm || (_Confirm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Confirm, {})) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          fill: "outline",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "destructive",
          onClick: onConfirm,
          disabled: connected,
          children: "Delete"
        })]
      })]
    }) : null]
  });
};

const LoadingIndicator = () => _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
  children: "Loading library panel..."
}));

const Confirm = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(_styles__WEBPACK_IMPORTED_MODULE_3__.getModalStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: styles.modalText,
    children: "Do you want to delete this panel?"
  });
};

const HasConnectedDashboards = ({
  dashboardTitles
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(_styles__WEBPACK_IMPORTED_MODULE_3__.getModalStyles);
  const suffix = dashboardTitles.length === 1 ? 'dashboard.' : 'dashboards.';
  const message = `${dashboardTitles.length} ${suffix}`;

  if (dashboardTitles.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
      className: styles.textInfo,
      children: ['This library panel can not be deleted because it is connected to ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", {
        children: message
      }), ' Remove the library panel from the dashboards listed below and retry.']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
      className: styles.myTable,
      children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Dashboard name"
          })
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
        children: dashboardTitles.map((title, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
            children: title
          })
        }, `dash-title-${i}`))
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/library-panels/components/DeleteLibraryPanelModal/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getConnectedDashboards": () => (/* binding */ getConnectedDashboards)
/* harmony export */ });
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/reducer.ts");


function getConnectedDashboards(libraryPanel) {
  return async function (dispatch) {
    const dashboards = await (0,_state_api__WEBPACK_IMPORTED_MODULE_0__.getConnectedDashboards)(libraryPanel.uid);
    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.searchCompleted)({
      dashboards
    }));
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/DeleteLibraryPanelModal/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteLibraryPanelModalReducer": () => (/* binding */ deleteLibraryPanelModalReducer),
/* harmony export */   "initialDeleteLibraryPanelModalState": () => (/* binding */ initialDeleteLibraryPanelModalState),
/* harmony export */   "searchCompleted": () => (/* binding */ searchCompleted)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-6cd1e25811/0/cache/@reduxjs-toolkit-npm-1.8.1-cf386ae48d-be5cdea975.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");


const initialDeleteLibraryPanelModalState = {
  loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
  dashboardTitles: []
};
const searchCompleted = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/delete/searchCompleted');
const deleteLibraryPanelModalReducer = (state = initialDeleteLibraryPanelModalState, action) => {
  if (searchCompleted.match(action)) {
    return Object.assign({}, state, {
      dashboardTitles: action.payload.dashboards.map(d => d.title),
      loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
    });
  }

  return state;
};

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelCard": () => (/* binding */ LibraryPanelCard)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_panel_components_PanelPluginError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/panel/components/PanelPluginError.tsx");
/* harmony import */ var app_features_panel_components_VizTypePicker_PanelTypeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx");
/* harmony import */ var _DeleteLibraryPanelModal_DeleteLibraryPanelModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/DeleteLibraryPanelModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Icon2;











const LibraryPanelCard = ({
  libraryPanel,
  onClick,
  onDelete,
  showSecondaryActions
}) => {
  var _config$panels$librar;

  const [showDeletionModal, setShowDeletionModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onDeletePanel = () => {
    onDelete === null || onDelete === void 0 ? void 0 : onDelete(libraryPanel);
    setShowDeletionModal(false);
  };

  const panelPlugin = (_config$panels$librar = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.panels[libraryPanel.model.type]) !== null && _config$panels$librar !== void 0 ? _config$panels$librar : (0,app_features_panel_components_PanelPluginError__WEBPACK_IMPORTED_MODULE_4__.getPanelPluginNotFound)(libraryPanel.model.type).meta;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_features_panel_components_VizTypePicker_PanelTypeCard__WEBPACK_IMPORTED_MODULE_5__.PanelTypeCard, {
      isCurrent: false,
      title: libraryPanel.name,
      description: libraryPanel.description,
      plugin: panelPlugin,
      onClick: () => onClick === null || onClick === void 0 ? void 0 : onClick(libraryPanel),
      onDelete: showSecondaryActions ? () => setShowDeletionModal(true) : undefined,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(FolderLink, {
        libraryPanel: libraryPanel
      })
    }), showDeletionModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_DeleteLibraryPanelModal_DeleteLibraryPanelModal__WEBPACK_IMPORTED_MODULE_6__.DeleteLibraryPanelModal, {
      libraryPanel: libraryPanel,
      onConfirm: onDeletePanel,
      onDismiss: () => setShowDeletionModal(false)
    })]
  });
};

function FolderLink({
  libraryPanel
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  if (!libraryPanel.meta.folderUid && !libraryPanel.meta.folderName) {
    return null;
  }

  if (!libraryPanel.meta.folderUid) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      className: styles.metaContainer,
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: 'folder',
        size: "sm"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: libraryPanel.meta.folderName
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
    className: styles.metaContainer,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
      href: `/dashboards/f/${libraryPanel.meta.folderUid}`,
      children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: 'folder-upload',
        size: "sm"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: libraryPanel.meta.folderName
      })]
    })
  });
}

function getStyles(theme) {
  return {
    metaContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      padding-top: ${theme.spacing(0.5)};

      svg {
        margin-right: ${theme.spacing(0.5)};
        margin-bottom: 3px;
      }
    `
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelsSearch": () => (/* binding */ LibraryPanelsSearch),
/* harmony export */   "LibraryPanelsSearchVariant": () => (/* binding */ LibraryPanelsSearchVariant)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_components_FolderFilter_FolderFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/FolderFilter/FolderFilter.tsx");
/* harmony import */ var _core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx");
/* harmony import */ var _core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Select/SortPicker.tsx");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/reducer.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











let LibraryPanelsSearchVariant;

(function (LibraryPanelsSearchVariant) {
  LibraryPanelsSearchVariant["Tight"] = "tight";
  LibraryPanelsSearchVariant["Spacious"] = "spacious";
})(LibraryPanelsSearchVariant || (LibraryPanelsSearchVariant = {}));

const LibraryPanelsSearch = ({
  onClick,
  variant = LibraryPanelsSearchVariant.Spacious,
  currentPanelId,
  currentFolderId,
  perPage = _core_constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_PER_PAGE_PAGINATION,
  showPanelFilter = false,
  showFolderFilter = false,
  showSort = false,
  showSecondaryActions = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [{
    sortDirection,
    panelFilter,
    folderFilter,
    searchQuery
  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_8__.libraryPanelsSearchReducer, Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_8__.initialLibraryPanelsSearchState, {
    folderFilter: currentFolderId ? [currentFolderId.toString(10)] : []
  }));

  const onFilterChange = searchString => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.searchChanged)(searchString));

  const onSortChange = sorting => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.sortChanged)(sorting));

  const onFolderFilterChange = folders => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.folderFilterChanged)(folders));

  const onPanelFilterChange = plugins => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.panelFilterChanged)(plugins));

  if (variant === LibraryPanelsSearchVariant.Spacious) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
        spacing: "lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
          value: searchQuery,
          onChange: onFilterChange,
          placeholder: 'Search by name or description',
          width: 0
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: styles.buttonRow,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            spacing: "sm",
            justify: showSort && showPanelFilter || showFolderFilter ? 'space-between' : 'flex-end',
            children: [showSort && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_5__.SortPicker, {
              value: sortDirection,
              onChange: onSortChange,
              filter: ['alpha-asc', 'alpha-desc']
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
              spacing: "sm",
              justify: showFolderFilter && showPanelFilter ? 'space-between' : 'flex-end',
              children: [showFolderFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_FolderFilter_FolderFilter__WEBPACK_IMPORTED_MODULE_3__.FolderFilter, {
                onChange: onFolderFilterChange
              }), showPanelFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_4__.PanelTypeFilter, {
                onChange: onPanelFilterChange
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: styles.libraryPanelsView,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_7__.LibraryPanelsView, {
            onClickCard: onClick,
            searchString: searchQuery,
            sortDirection: sortDirection,
            panelFilter: panelFilter,
            folderFilter: folderFilter,
            currentPanelId: currentPanelId,
            showSecondaryActions: showSecondaryActions,
            perPage: perPage
          })
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: styles.container,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
      spacing: "xs",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: styles.tightButtonRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: styles.tightFilter,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
            value: searchQuery,
            onChange: onFilterChange,
            placeholder: 'Search by name',
            width: 0
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: styles.tightSortFilter,
          children: [showSort && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_5__.SortPicker, {
            value: sortDirection,
            onChange: onSortChange
          }), showFolderFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_FolderFilter_FolderFilter__WEBPACK_IMPORTED_MODULE_3__.FolderFilter, {
            onChange: onFolderFilterChange,
            maxMenuHeight: 200
          }), showPanelFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_4__.PanelTypeFilter, {
            onChange: onPanelFilterChange,
            maxMenuHeight: 200
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: styles.libraryPanelsView,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_7__.LibraryPanelsView, {
          onClickCard: onClick,
          searchString: searchQuery,
          sortDirection: sortDirection,
          panelFilter: panelFilter,
          folderFilter: folderFilter,
          currentPanelId: currentPanelId,
          showSecondaryActions: showSecondaryActions,
          perPage: perPage
        })
      })]
    })
  });
};

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
      overflow-y: auto;
      padding: ${theme.spacing(1)};
    `,
    buttonRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${theme.spacing(2)}; // Clear types link
    `,
    tightButtonRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${theme.spacing(4)}; // Clear types link
    `,
    tightFilter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
    `,
    tightSortFilter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      padding: ${theme.spacing(0, 0, 0, 0.5)};
    `,
    libraryPanelsView: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
    `
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsSearch/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "folderFilterChanged": () => (/* binding */ folderFilterChanged),
/* harmony export */   "initialLibraryPanelsSearchState": () => (/* binding */ initialLibraryPanelsSearchState),
/* harmony export */   "libraryPanelsSearchReducer": () => (/* binding */ libraryPanelsSearchReducer),
/* harmony export */   "panelFilterChanged": () => (/* binding */ panelFilterChanged),
/* harmony export */   "searchChanged": () => (/* binding */ searchChanged),
/* harmony export */   "sortChanged": () => (/* binding */ sortChanged)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-6cd1e25811/0/cache/@reduxjs-toolkit-npm-1.8.1-cf386ae48d-be5cdea975.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialLibraryPanelsSearchState = {
  searchQuery: '',
  panelFilter: [],
  folderFilter: [],
  sortDirection: undefined
};
const searchChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/searchChanged');
const sortChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/sortChanged');
const panelFilterChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/panelFilterChanged');
const folderFilterChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/folderFilterChanged');
const libraryPanelsSearchReducer = (state, action) => {
  if (searchChanged.match(action)) {
    return Object.assign({}, state, {
      searchQuery: action.payload
    });
  }

  if (sortChanged.match(action)) {
    return Object.assign({}, state, {
      sortDirection: action.payload.value
    });
  }

  if (panelFilterChanged.match(action)) {
    return Object.assign({}, state, {
      panelFilter: action.payload.map(p => p.id)
    });
  }

  if (folderFilterChanged.match(action)) {
    return Object.assign({}, state, {
      folderFilter: action.payload.map(f => String(f.id))
    });
  }

  return state;
};

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelsView": () => (/* binding */ LibraryPanelsView)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;











const LibraryPanelsView = ({
  className,
  onClickCard,
  searchString,
  sortDirection,
  panelFilter,
  folderFilter,
  showSecondaryActions,
  currentPanelId: currentPanel,
  perPage: propsPerPage = 40
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getPanelViewStyles);
  const [{
    libraryPanels,
    page,
    perPage,
    numberOfPages,
    loadingState,
    currentPanelId
  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_6__.libraryPanelsViewReducer, Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_6__.initialLibraryPanelsViewState, {
    currentPanelId: currentPanel,
    perPage: propsPerPage
  }));
  const asyncDispatch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_actions__WEBPACK_IMPORTED_MODULE_5__.asyncDispatcher)(dispatch), [dispatch]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(() => asyncDispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.searchForLibraryPanels)({
    searchString,
    sortDirection,
    panelFilter,
    folderFilter,
    page,
    perPage,
    currentPanelId
  })), 300, [searchString, sortDirection, panelFilter, folderFilter, page, asyncDispatch]);

  const onDelete = ({
    uid
  }) => asyncDispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.deleteLibraryPanel)(uid, {
    searchString,
    page,
    perPage
  }));

  const onPageChange = page => asyncDispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_6__.changePage)({
    page
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.libraryPanelList,
      children: loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading ? _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        children: "Loading library panels..."
      })) : libraryPanels.length < 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: styles.noPanelsFound,
        children: "No library panels found."
      }) : libraryPanels === null || libraryPanels === void 0 ? void 0 : libraryPanels.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelCard, {
        libraryPanel: item,
        onDelete: onDelete,
        onClick: onClickCard,
        showSecondaryActions: showSecondaryActions
      }, `library-panel=${i}`))
    }), libraryPanels.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.pagination,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
        currentPage: page,
        numberOfPages: numberOfPages,
        onNavigate: onPageChange,
        hideWhenSinglePage: true
      })
    }) : null]
  });
};

const getPanelViewStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,
    libraryPanelList: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${theme.spacing.sm};
    `,
    searchHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
    `,
    newPanelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: 10px;
      align-self: flex-start;
    `,
    pagination: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: center;
      margin-top: ${theme.spacing.sm};
    `,
    noPanelsFound: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: noPanelsFound;
      min-height: 200px;
    `
  };
};

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsView/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncDispatcher": () => (/* binding */ asyncDispatcher),
/* harmony export */   "deleteLibraryPanel": () => (/* binding */ deleteLibraryPanel),
/* harmony export */   "searchForLibraryPanels": () => (/* binding */ searchForLibraryPanels)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/timer.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");




function searchForLibraryPanels(args) {
  return function (dispatch) {
    const subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    const dataObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_state_api__WEBPACK_IMPORTED_MODULE_0__.getLibraryPanels)({
      searchString: args.searchString,
      perPage: args.perPage,
      page: args.page,
      excludeUid: args.currentPanelId,
      sortDirection: args.sortDirection,
      typeFilter: args.panelFilter,
      folderFilter: args.folderFilter
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(({
      perPage,
      elements: libraryPanels,
      page,
      totalCount
    }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.searchCompleted)({
      libraryPanels,
      page,
      perPage,
      totalCount
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.error(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.searchCompleted)(Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_1__.initialLibraryPanelsViewState, {
        page: args.page,
        perPage: args.perPage
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => subscription.unsubscribe()), // make sure we unsubscribe
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());
    subscription.add( // If 50ms without a response dispatch a loading state
    // mapTo will translate the timer event into a loading state
    // takeUntil will cancel the timer emit when first response is received on the dataObservable
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(50).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.initSearch)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(dataObservable)), dataObservable).subscribe(dispatch));
  };
}
function deleteLibraryPanel(uid, args) {
  return async function (dispatch) {
    try {
      await (0,_state_api__WEBPACK_IMPORTED_MODULE_0__.deleteLibraryPanel)(uid);
      searchForLibraryPanels(args)(dispatch);
    } catch (e) {
      console.error(e);
    }
  };
}
function asyncDispatcher(dispatch) {
  return function (action) {
    if (action instanceof Function) {
      return action(dispatch);
    }

    return dispatch(action);
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePage": () => (/* binding */ changePage),
/* harmony export */   "initSearch": () => (/* binding */ initSearch),
/* harmony export */   "initialLibraryPanelsViewState": () => (/* binding */ initialLibraryPanelsViewState),
/* harmony export */   "libraryPanelsViewReducer": () => (/* binding */ libraryPanelsViewReducer),
/* harmony export */   "searchCompleted": () => (/* binding */ searchCompleted)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-6cd1e25811/0/cache/@reduxjs-toolkit-npm-1.8.1-cf386ae48d-be5cdea975.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");


const initialLibraryPanelsViewState = {
  loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
  libraryPanels: [],
  totalCount: 0,
  perPage: 40,
  page: 1,
  numberOfPages: 0,
  currentPanelId: undefined
};
const initSearch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/view/initSearch');
const searchCompleted = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/view/searchCompleted');
const changePage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/view/changePage');
const libraryPanelsViewReducer = (state, action) => {
  if (initSearch.match(action)) {
    return Object.assign({}, state, {
      loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading
    });
  }

  if (searchCompleted.match(action)) {
    const {
      libraryPanels,
      page,
      perPage,
      totalCount
    } = action.payload;
    const numberOfPages = Math.ceil(totalCount / perPage);
    return Object.assign({}, state, {
      libraryPanels,
      perPage,
      totalCount,
      loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
      numberOfPages,
      page: page > numberOfPages ? page - 1 : page
    });
  }

  if (changePage.match(action)) {
    return Object.assign({}, state, {
      page: action.payload.page
    });
  }

  return state;
};

/***/ }),

/***/ "./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenLibraryPanelModal": () => (/* binding */ OpenLibraryPanelModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;











function OpenLibraryPanelModal({
  libraryPanel,
  onDismiss
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const [option, setOption] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getConnected = async () => {
      const connectedDashboards = await (0,_state_api__WEBPACK_IMPORTED_MODULE_6__.getLibraryPanelConnectedDashboards)(libraryPanel.uid);
      setConnected(connectedDashboards.length);
    };

    getConnected();
  }, [libraryPanel.uid]);
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(searchString => loadOptionsAsync(libraryPanel.uid, searchString, setLoading), [libraryPanel.uid]);
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(loadOptions, 300, {
    leading: true,
    trailing: true
  }), [loadOptions]);

  const onViewPanel = e => {
    var _option$value;

    e.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl(`/d/${option === null || option === void 0 ? void 0 : (_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.uid}`, {}));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal, {
    title: "View panel in dashboard",
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    isOpen: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.container,
      children: [connected === 0 ? _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: "Panel is not linked to a dashboard. Add the panel to a dashboard and retry."
      })) : null, connected > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
          children: ["This panel is being used in", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("strong", {
            children: [connected, " ", connected > 1 ? 'dashboards' : 'dashboard']
          }), ".Please choose which dashboard to view the panel in:"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.AsyncSelect, {
          isClearable: true,
          isLoading: loading,
          defaultOptions: true,
          loadOptions: debouncedLoadOptions,
          onChange: setOption,
          placeholder: "Start typing to search for dashboard",
          noOptionsMessage: "No dashboards found"
        })]
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        variant: "secondary",
        onClick: onDismiss,
        fill: "outline",
        children: "Cancel"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        onClick: onViewPanel,
        disabled: !Boolean(option),
        children: option ? `View panel in ${option === null || option === void 0 ? void 0 : option.label}...` : 'View panel in dashboard...'
      })]
    })]
  });
}

async function loadOptionsAsync(uid, searchString, setLoading) {
  setLoading(true);
  const searchHits = await (0,_state_api__WEBPACK_IMPORTED_MODULE_6__.getConnectedDashboards)(uid);
  const options = searchHits.filter(d => d.title.toLowerCase().includes(searchString.toLowerCase())).map(d => ({
    label: d.title,
    value: d
  }));
  setLoading(false);
  return options;
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css``
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getModalStyles": () => (/* binding */ getModalStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

function getModalStyles(theme) {
  return {
    myTable: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${theme.border.radius.sm};
      border: 1px solid ${theme.colors.bg3};
      background: ${theme.colors.bg1};
      color: ${theme.colors.textSemiWeak};
      font-size: ${theme.typography.size.md};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${theme.typography.size.sm};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${theme.spacing.xl};
      }

      tbody > tr:nth-child(odd) {
        background: ${theme.colors.bg2};
      }
    `,
    noteTextbox: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.xl};
    `,
    textInfo: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.textSemiWeak};
      font-size: ${theme.typography.size.sm};
    `,
    dashboardSearch: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing.md};
    `,
    modal: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 500px;
    `,
    modalText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.heading.h4};
      color: ${theme.colors.link};
      margin-bottom: calc(${theme.spacing.d} * 2);
      padding-top: ${theme.spacing.d};
    `
  };
}

/***/ }),

/***/ "./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelTypeCard": () => (/* binding */ PanelTypeCard)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const PanelTypeCard = ({
  isCurrent,
  title,
  plugin,
  onClick,
  onDelete,
  disabled,
  showBadge,
  description,
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const cssClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
    [styles.item]: true,
    [styles.disabled]: disabled || plugin.state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginState.deprecated,
    [styles.current]: isCurrent
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: cssClass,
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.PluginVisualization.item(plugin.name),
    onClick: disabled ? undefined : onClick,
    title: isCurrent ? 'Click again to close this section' : plugin.name,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
      className: styles.img,
      src: plugin.info.logos.small,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.itemContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: styles.name,
        children: title
      }), description ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: styles.description,
        children: description
      }) : null, children]
    }), showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.badge, disabled && styles.disabled),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PanelPluginBadge, {
        plugin: plugin
      })
    }), onDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
      name: "trash-alt",
      onClick: e => {
        e.stopPropagation();
        onDelete();
      },
      className: styles.deleteButton,
      "aria-label": "Delete button on panel type card"
    })]
  });
};
PanelTypeCard.displayName = 'PanelTypeCard';

const getStyles = theme => {
  return {
    item: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
      box-shadow: ${theme.shadows.z1};
      border: 1px solid ${theme.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${theme.transitions.create(['background'], {
      duration: theme.transitions.duration.short
    })};

      &:hover {
        background: ${theme.colors.emphasize(theme.colors.background.secondary, 0.03)};
      }
    `,
    itemContent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow: hidden;
      position: relative;
      padding: ${theme.spacing(0, 1)};
    `,
    current: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: currentVisualizationItem;
      border: 1px solid ${theme.colors.primary.border};
      background: ${theme.colors.action.selected};
    `,
    disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      opacity: 0.2;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,
    name: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.fontWeightMedium};
      width: 100%;
    `,
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      font-weight: ${theme.typography.fontWeightLight};
      width: 100%;
      max-height: 4.5em;
    `,
    img: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,
    badge: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${theme.colors.background.primary};
    `,
    deleteButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: auto;
    `
  };
};

const PanelPluginBadge = ({
  plugin
}) => {
  if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isUnsignedPluginSignature)(plugin.signature)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureBadge, {
      status: plugin.signature
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_5__.PluginStateInfo, {
    state: plugin.state
  });
};

PanelPluginBadge.displayName = 'PanelPluginBadge';

/***/ }),

/***/ "./public/app/features/panel/state/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterPluginList": () => (/* binding */ filterPluginList),
/* harmony export */   "getAllPanelPluginMeta": () => (/* binding */ getAllPanelPluginMeta)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");


function getAllPanelPluginMeta() {
  const allPanels = app_core_config__WEBPACK_IMPORTED_MODULE_1__.config.panels;
  return Object.keys(allPanels).filter(key => allPanels[key]['hideFromList'] === false).map(key => allPanels[key]).sort((a, b) => a.sort - b.sort);
}
function filterPluginList(pluginsList, searchQuery, // Note: this will be an escaped regex string as it comes from `FilterInput`
current) {
  if (!searchQuery.length) {
    return pluginsList.filter(p => {
      if (p.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginState.deprecated) {
        return current.id === p.id;
      }

      return true;
    });
  }

  const query = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.unEscapeStringFromRegex)(searchQuery).toLowerCase();
  const first = [];
  const match = [];
  const isGraphQuery = 'graph'.startsWith(query);

  for (const item of pluginsList) {
    if (item.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginState.deprecated && current.id !== item.id) {
      continue;
    }

    const name = item.name.toLowerCase();
    const idx = name.indexOf(query);

    if (idx === 0) {
      first.push(item);
    } else if (idx > 0) {
      match.push(item);
    } else if (isGraphQuery && item.id === 'timeseries') {
      first.push(item);
    }
  }

  return first.concat(match);
}

/***/ }),

/***/ "./public/app/features/plugins/components/PluginStateInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginStateInfo": () => (/* binding */ PluginStateInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const PluginStateInfo = props => {
  const display = getFeatureStateInfo(props.state);

  if (!display) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
    color: display.color,
    title: display.tooltip,
    text: display.text,
    icon: display.icon
  });
};

function getFeatureStateInfo(state) {
  switch (state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.deprecated:
      return {
        text: 'Deprecated',
        color: 'red',
        tooltip: `This feature is deprecated and will be removed in a future release`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.alpha:
      return {
        text: 'Alpha',
        color: 'blue',
        tooltip: `This feature is experimental and future updates might not be backward compatible`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.beta:
      return {
        text: 'Beta',
        color: 'blue',
        tooltip: `This feature is close to complete but not fully tested`
      };

    default:
      return null;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyTGlicmFyeVBhbmVsc1BhZ2UuZmMwMzNiZDMxOWNiM2NkMDRiZmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7OztBQU9PLFNBQVNZLFlBQVQsQ0FBc0I7RUFBRUMsUUFBUSxFQUFFQyxhQUFaO0VBQTJCQztBQUEzQixDQUF0QixFQUFrRztFQUN2RyxNQUFNQyxNQUFNLEdBQUdQLHVEQUFVLENBQUNRLFNBQUQsQ0FBekI7RUFDQSxNQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QmQsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0VBQ0EsTUFBTWUsVUFBVSxHQUFHakIsa0RBQVcsQ0FBRWtCLFlBQUQsSUFBMEJDLG1CQUFtQixDQUFDRCxZQUFELEVBQWVGLFVBQWYsQ0FBOUMsRUFBMEUsRUFBMUUsQ0FBOUI7RUFDQSxNQUFNSSxvQkFBb0IsR0FBR25CLDhDQUFPLENBQUMsTUFBTUgsdURBQVEsQ0FBQ21CLFVBQUQsRUFBYSxHQUFiLENBQWYsRUFBa0MsQ0FBQ0EsVUFBRCxDQUFsQyxDQUFwQztFQUNBLE1BQU0sQ0FBQ0ksS0FBRCxFQUFRQyxRQUFSLElBQW9CcEIsK0NBQVEsQ0FBcUMsRUFBckMsQ0FBbEM7RUFDQSxNQUFNUSxRQUFRLEdBQUdWLGtEQUFXLENBQ3pCdUIsT0FBRCxJQUFpRDtJQUMvQyxNQUFNQyxjQUFjLEdBQUcsRUFBdkI7O0lBQ0EsS0FBSyxNQUFNQyxNQUFYLElBQXFCRixPQUFyQixFQUE4QjtNQUM1QixJQUFJRSxNQUFNLENBQUNKLEtBQVgsRUFBa0I7UUFDaEJHLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQkQsTUFBTSxDQUFDSixLQUEzQjtNQUNEO0lBQ0Y7O0lBQ0RWLGFBQWEsQ0FBQ2EsY0FBRCxDQUFiO0lBQ0FGLFFBQVEsQ0FBQ0MsT0FBRCxDQUFSO0VBQ0QsQ0FWeUIsRUFXMUIsQ0FBQ1osYUFBRCxDQVgwQixDQUE1QjtFQWFBLE1BQU1nQixhQUFhLEdB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LElBQVA7RUFwQko7QUFzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvRm9sZGVyRmlsdGVyL0ZvbGRlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1BhbmVsVHlwZUZpbHRlci9QYW5lbFR5cGVGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2ZvbGRlcnMvRm9sZGVyTGlicmFyeVBhbmVsc1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxDYXJkL0xpYnJhcnlQYW5lbENhcmQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1NlYXJjaC9MaWJyYXJ5UGFuZWxzU2VhcmNoLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNTZWFyY2gvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNWaWV3L0xpYnJhcnlQYW5lbHNWaWV3LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNWaWV3L2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzVmlldy9yZWR1Y2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvT3BlbkxpYnJhcnlQYW5lbE1vZGFsL09wZW5MaWJyYXJ5UGFuZWxNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvc3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BhbmVsL2NvbXBvbmVudHMvVml6VHlwZVBpY2tlci9QYW5lbFR5cGVDYXJkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wYW5lbC9zdGF0ZS91dGlsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvY29tcG9uZW50cy9QbHVnaW5TdGF0ZUluZm8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnZGVib3VuY2UtcHJvbWlzZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFzeW5jTXVsdGlTZWxlY3QsIEljb24sIEJ1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBGb2xkZXJJbmZvLCBQZXJtaXNzaW9uTGV2ZWxTdHJpbmcgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGRlckZpbHRlclByb3BzIHtcbiAgb25DaGFuZ2U6IChmb2xkZXI6IEZvbGRlckluZm9bXSkgPT4gdm9pZDtcbiAgbWF4TWVudUhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvbGRlckZpbHRlcih7IG9uQ2hhbmdlOiBwcm9wc09uQ2hhbmdlLCBtYXhNZW51SGVpZ2h0IH06IEZvbGRlckZpbHRlclByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZ2V0T3B0aW9ucyA9IHVzZUNhbGxiYWNrKChzZWFyY2hTdHJpbmc6IHN0cmluZykgPT4gZ2V0Rm9sZGVyc0FzT3B0aW9ucyhzZWFyY2hTdHJpbmcsIHNldExvYWRpbmcpLCBbXSk7XG4gIGNvbnN0IGRlYm91bmNlZExvYWRPcHRpb25zID0gdXNlTWVtbygoKSA9PiBkZWJvdW5jZShnZXRPcHRpb25zLCAzMDApLCBbZ2V0T3B0aW9uc10pO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxGb2xkZXJJbmZvPj4+KFtdKTtcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZm9sZGVyczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPEZvbGRlckluZm8+PikgPT4ge1xuICAgICAgY29uc3QgY2hhbmdlZEZvbGRlcnMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgZm9sZGVyIG9mIGZvbGRlcnMpIHtcbiAgICAgICAgaWYgKGZvbGRlci52YWx1ZSkge1xuICAgICAgICAgIGNoYW5nZWRGb2xkZXJzLnB1c2goZm9sZGVyLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvcHNPbkNoYW5nZShjaGFuZ2VkRm9sZGVycyk7XG4gICAgICBzZXRWYWx1ZShmb2xkZXJzKTtcbiAgICB9LFxuICAgIFtwcm9wc09uQ2hhbmdlXVxuICApO1xuICBjb25zdCBzZWxlY3RPcHRpb25zID0ge1xuICAgIGRlZmF1bHRPcHRpb25zOiB0cnVlLFxuICAgIGlzTXVsdGk6IHRydWUsXG4gICAgbm9PcHRpb25zTWVzc2FnZTogJ05vIGZvbGRlcnMgZm91bmQnLFxuICAgIHBsYWNlaG9sZGVyOiAnRmlsdGVyIGJ5IGZvbGRlcicsXG4gICAgbWF4TWVudUhlaWdodCxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHt2YWx1ZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFtdKX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xlYXIgZm9sZGVyc1wiXG4gICAgICAgID5cbiAgICAgICAgICBDbGVhciBmb2xkZXJzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICAgIDxBc3luY011bHRpU2VsZWN0XG4gICAgICAgIHsuLi5zZWxlY3RPcHRpb25zfVxuICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRMb2FkT3B0aW9uc31cbiAgICAgICAgcHJlZml4PXs8SWNvbiBuYW1lPVwiZmlsdGVyXCIgLz59XG4gICAgICAgIGFyaWEtbGFiZWw9XCJGb2xkZXIgZmlsdGVyXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvbGRlcnNBc09wdGlvbnMoc2VhcmNoU3RyaW5nOiBzdHJpbmcsIHNldExvYWRpbmc6IChsb2FkaW5nOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIHF1ZXJ5OiBzZWFyY2hTdHJpbmcsXG4gICAgdHlwZTogJ2Rhc2gtZm9sZGVyJyxcbiAgICBwZXJtaXNzaW9uOiBQZXJtaXNzaW9uTGV2ZWxTdHJpbmcuVmlldyxcbiAgfTtcblxuICBjb25zdCBzZWFyY2hIaXRzID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLnNlYXJjaChwYXJhbXMpO1xuICBjb25zdCBvcHRpb25zID0gc2VhcmNoSGl0cy5tYXAoKGQpID0+ICh7IGxhYmVsOiBkLnRpdGxlLCB2YWx1ZTogeyBpZDogZC5pZCwgdGl0bGU6IGQudGl0bGUgfSB9KSk7XG4gIGlmICghc2VhcmNoU3RyaW5nIHx8ICdnZW5lcmFsJy5pbmNsdWRlcyhzZWFyY2hTdHJpbmcudG9Mb3dlckNhc2UoKSkpIHtcbiAgICBvcHRpb25zLnVuc2hpZnQoeyBsYWJlbDogJ0dlbmVyYWwnLCB2YWx1ZTogeyBpZDogMCwgdGl0bGU6ICdHZW5lcmFsJyB9IH0pO1xuICB9XG5cbiAgc2V0TG9hZGluZyhmYWxzZSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgbGFiZWw6IGNvbnRhaW5lcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgYCxcbiAgICBjbGVhcjogY3NzYFxuICAgICAgbGFiZWw6IGNsZWFyO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnNwYWNpbmcoMS41KX07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0ke3RoZW1lLnNwYWNpbmcoNC41KX07XG4gICAgICByaWdodDogMDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFBhbmVsUGx1Z2luTWV0YSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBCdXR0b24sIE11bHRpU2VsZWN0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0QWxsUGFuZWxQbHVnaW5NZXRhIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BhbmVsL3N0YXRlL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6IChwbHVnaW5zOiBQYW5lbFBsdWdpbk1ldGFbXSkgPT4gdm9pZDtcbiAgbWF4TWVudUhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFBhbmVsVHlwZUZpbHRlciA9ICh7IG9uQ2hhbmdlOiBwcm9wc09uQ2hhbmdlLCBtYXhNZW51SGVpZ2h0IH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBwbHVnaW5zID0gdXNlTWVtbzxQYW5lbFBsdWdpbk1ldGFbXT4oKCkgPT4ge1xuICAgIHJldHVybiBnZXRBbGxQYW5lbFBsdWdpbk1ldGEoKTtcbiAgfSwgW10pO1xuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcGx1Z2luc1xuICAgICAgICAubWFwKChwKSA9PiAoeyBsYWJlbDogcC5uYW1lLCBpbWdVcmw6IHAuaW5mby5sb2dvcy5zbWFsbCwgdmFsdWU6IHAgfSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmxhYmVsPy5sb2NhbGVDb21wYXJlKGIubGFiZWwpKSxcbiAgICBbcGx1Z2luc11cbiAgKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8UGFuZWxQbHVnaW5NZXRhPj4+KFtdKTtcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAocGx1Z2luczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFBhbmVsUGx1Z2luTWV0YT4+KSA9PiB7XG4gICAgICBjb25zdCBjaGFuZ2VkUGx1Z2lucyA9IFtdO1xuICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgICAgICBpZiAocGx1Z2luLnZhbHVlKSB7XG4gICAgICAgICAgY2hhbmdlZFBsdWdpbnMucHVzaChwbHVnaW4udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcm9wc09uQ2hhbmdlKGNoYW5nZWRQbHVnaW5zKTtcbiAgICAgIHNldFZhbHVlKHBsdWdpbnMpO1xuICAgIH0sXG4gICAgW3Byb3BzT25DaGFuZ2VdXG4gICk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBzZWxlY3RPcHRpb25zID0ge1xuICAgIGRlZmF1bHRPcHRpb25zOiB0cnVlLFxuICAgIGdldE9wdGlvbkxhYmVsOiAoaTogYW55KSA9PiBpLmxhYmVsLFxuICAgIGdldE9wdGlvblZhbHVlOiAoaTogYW55KSA9PiBpLnZhbHVlLFxuICAgIG5vT3B0aW9uc01lc3NhZ2U6ICdObyBQYW5lbCB0eXBlcyBmb3VuZCcsXG4gICAgcGxhY2Vob2xkZXI6ICdGaWx0ZXIgYnkgdHlwZScsXG4gICAgbWF4TWVudUhlaWdodCxcbiAgICBvcHRpb25zLFxuICAgIHZhbHVlLFxuICAgIG9uQ2hhbmdlLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAge3ZhbHVlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoW10pfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbGVhciB0eXBlc1wiXG4gICAgICAgID5cbiAgICAgICAgICBDbGVhciB0eXBlc1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8TXVsdGlTZWxlY3Qgey4uLnNlbGVjdE9wdGlvbnN9IHByZWZpeD17PEljb24gbmFtZT1cImZpbHRlclwiIC8+fSBhcmlhLWxhYmVsPVwiUGFuZWwgVHlwZSBmaWx0ZXJcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBsYWJlbDogY29udGFpbmVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBgLFxuICAgIGNsZWFyOiBjc3NgXG4gICAgICBsYWJlbDogY2xlYXI7XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUuc3BhY2luZygxLjUpfTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLSR7dGhlbWUuc3BhY2luZyg0LjUpfTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJy4uLy4uL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBMaWJyYXJ5UGFuZWxzU2VhcmNoIH0gZnJvbSAnLi4vbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzU2VhcmNoL0xpYnJhcnlQYW5lbHNTZWFyY2gnO1xuaW1wb3J0IHsgT3BlbkxpYnJhcnlQYW5lbE1vZGFsIH0gZnJvbSAnLi4vbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9PcGVuTGlicmFyeVBhbmVsTW9kYWwvT3BlbkxpYnJhcnlQYW5lbE1vZGFsJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vbGlicmFyeS1wYW5lbHMvdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRGb2xkZXJCeVVpZCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRMb2FkaW5nTmF2IH0gZnJvbSAnLi9zdGF0ZS9uYXZNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IHVpZDogc3RyaW5nIH0+IHt9XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSwgcHJvcHM6IE93blByb3BzKSA9PiB7XG4gIGNvbnN0IHVpZCA9IHByb3BzLm1hdGNoLnBhcmFtcy51aWQ7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCBgZm9sZGVyLWxpYnJhcnktcGFuZWxzLSR7dWlkfWAsIGdldExvYWRpbmdOYXYoMSkpLFxuICAgIGZvbGRlclVpZDogdWlkLFxuICAgIGZvbGRlcjogc3RhdGUuZm9sZGVyLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRGb2xkZXJCeVVpZCxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBmdW5jdGlvbiBGb2xkZXJMaWJyYXJ5UGFuZWxzUGFnZSh7IG5hdk1vZGVsLCBnZXRGb2xkZXJCeVVpZCwgZm9sZGVyVWlkLCBmb2xkZXIgfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXN5bmMoYXN5bmMgKCkgPT4gYXdhaXQgZ2V0Rm9sZGVyQnlVaWQoZm9sZGVyVWlkKSwgW2dldEZvbGRlckJ5VWlkLCBmb2xkZXJVaWRdKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxMaWJyYXJ5RWxlbWVudERUTyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICA8TGlicmFyeVBhbmVsc1NlYXJjaFxuICAgICAgICAgIG9uQ2xpY2s9e3NldFNlbGVjdGVkfVxuICAgICAgICAgIGN1cnJlbnRGb2xkZXJJZD17Zm9sZGVyLmlkfVxuICAgICAgICAgIHNob3dTZWNvbmRhcnlBY3Rpb25zXG4gICAgICAgICAgc2hvd1NvcnRcbiAgICAgICAgICBzaG93UGFuZWxGaWx0ZXJcbiAgICAgICAgLz5cbiAgICAgICAge3NlbGVjdGVkID8gPE9wZW5MaWJyYXJ5UGFuZWxNb2RhbCBvbkRpc21pc3M9eygpID0+IHNldFNlbGVjdGVkKHVuZGVmaW5lZCl9IGxpYnJhcnlQYW5lbD17c2VsZWN0ZWR9IC8+IDogbnVsbH1cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihGb2xkZXJMaWJyYXJ5UGFuZWxzUGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldE1vZGFsU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgYXN5bmNEaXNwYXRjaGVyIH0gZnJvbSAnLi4vTGlicmFyeVBhbmVsc1ZpZXcvYWN0aW9ucyc7XG5cbmltcG9ydCB7IGdldENvbm5lY3RlZERhc2hib2FyZHMgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZGVsZXRlTGlicmFyeVBhbmVsTW9kYWxSZWR1Y2VyLCBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWw6IEZDPFByb3BzPiA9ICh7IGxpYnJhcnlQYW5lbCwgb25EaXNtaXNzLCBvbkNvbmZpcm0gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBbeyBkYXNoYm9hcmRUaXRsZXMsIGxvYWRpbmdTdGF0ZSB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlcixcbiAgICBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZVxuICApO1xuICBjb25zdCBhc3luY0Rpc3BhdGNoID0gdXNlTWVtbygoKSA9PiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2gpLCBbZGlzcGF0Y2hdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luY0Rpc3BhdGNoKGdldENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsKSk7XG4gIH0sIFthc3luY0Rpc3BhdGNoLCBsaWJyYXJ5UGFuZWxdKTtcbiAgY29uc3QgY29ubmVjdGVkID0gQm9vbGVhbihkYXNoYm9hcmRUaXRsZXMubGVuZ3RoKTtcbiAgY29uc3QgZG9uZSA9IGxvYWRpbmdTdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkRvbmU7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9IHRpdGxlPVwiRGVsZXRlIGxpYnJhcnkgcGFuZWxcIiBpY29uPVwidHJhc2gtYWx0XCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IGlzT3Blbj17dHJ1ZX0+XG4gICAgICB7IWRvbmUgPyA8TG9hZGluZ0luZGljYXRvciAvPiA6IG51bGx9XG4gICAgICB7ZG9uZSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y29ubmVjdGVkID8gPEhhc0Nvbm5lY3RlZERhc2hib2FyZHMgZGFzaGJvYXJkVGl0bGVzPXtkYXNoYm9hcmRUaXRsZXN9IC8+IDogbnVsbH1cbiAgICAgICAgICB7IWNvbm5lY3RlZCA/IDxDb25maXJtIC8+IDogbnVsbH1cblxuICAgICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e29uQ29uZmlybX0gZGlzYWJsZWQ9e2Nvbm5lY3RlZH0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IExvYWRpbmdJbmRpY2F0b3I6IEZDID0gKCkgPT4gPHNwYW4+TG9hZGluZyBsaWJyYXJ5IHBhbmVsLi4uPC9zcGFuPjtcblxuY29uc3QgQ29uZmlybTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRNb2RhbFN0eWxlcyk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUZXh0fT5EbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwYW5lbD88L2Rpdj47XG59O1xuXG5jb25zdCBIYXNDb25uZWN0ZWREYXNoYm9hcmRzOiBGQzx7IGRhc2hib2FyZFRpdGxlczogc3RyaW5nW10gfT4gPSAoeyBkYXNoYm9hcmRUaXRsZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBzdWZmaXggPSBkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAxID8gJ2Rhc2hib2FyZC4nIDogJ2Rhc2hib2FyZHMuJztcbiAgY29uc3QgbWVzc2FnZSA9IGAke2Rhc2hib2FyZFRpdGxlcy5sZW5ndGh9ICR7c3VmZml4fWA7XG4gIGlmIChkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5mb30+XG4gICAgICAgIHsnVGhpcyBsaWJyYXJ5IHBhbmVsIGNhbiBub3QgYmUgZGVsZXRlZCBiZWNhdXNlIGl0IGlzIGNvbm5lY3RlZCB0byAnfVxuICAgICAgICA8c3Ryb25nPnttZXNzYWdlfTwvc3Ryb25nPlxuICAgICAgICB7JyBSZW1vdmUgdGhlIGxpYnJhcnkgcGFuZWwgZnJvbSB0aGUgZGFzaGJvYXJkcyBsaXN0ZWQgYmVsb3cgYW5kIHJldHJ5Lid9XG4gICAgICA8L3A+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubXlUYWJsZX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGFzaGJvYXJkIG5hbWU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGFzaGJvYXJkVGl0bGVzLm1hcCgodGl0bGUsIGkpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2BkYXNoLXRpdGxlLSR7aX1gfT5cbiAgICAgICAgICAgICAgPHRkPnt0aXRsZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyBhcyBhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IERpc3BhdGNoUmVzdWx0LCBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgc2VhcmNoQ29tcGxldGVkIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTyk6IERpc3BhdGNoUmVzdWx0IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGNvbnN0IGRhc2hib2FyZHMgPSBhd2FpdCBhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbC51aWQpO1xuICAgIGRpc3BhdGNoKHNlYXJjaENvbXBsZXRlZCh7IGRhc2hib2FyZHMgfSkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU2VhcmNoSGl0IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3NlYXJjaC90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSB7XG4gIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlO1xuICBkYXNoYm9hcmRUaXRsZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGU6IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgPSB7XG4gIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcsXG4gIGRhc2hib2FyZFRpdGxlczogW10sXG59O1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoQ29tcGxldGVkID0gY3JlYXRlQWN0aW9uPHsgZGFzaGJvYXJkczogRGFzaGJvYXJkU2VhcmNoSGl0W10gfT4oXG4gICdsaWJyYXJ5UGFuZWxzL2RlbGV0ZS9zZWFyY2hDb21wbGV0ZWQnXG4pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTGlicmFyeVBhbmVsTW9kYWxSZWR1Y2VyID0gKFxuICBzdGF0ZTogRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSA9IGluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlLFxuICBhY3Rpb246IEFueUFjdGlvblxuKTogRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSA9PiB7XG4gIGlmIChzZWFyY2hDb21wbGV0ZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGRhc2hib2FyZFRpdGxlczogYWN0aW9uLnBheWxvYWQuZGFzaGJvYXJkcy5tYXAoKGQpID0+IGQudGl0bGUpLFxuICAgICAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBJY29uLCBMaW5rLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0UGFuZWxQbHVnaW5Ob3RGb3VuZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1BhbmVsUGx1Z2luRXJyb3InO1xuaW1wb3J0IHsgUGFuZWxUeXBlQ2FyZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZCc7XG5cbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwgfSBmcm9tICcuLi9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlicmFyeVBhbmVsQ2FyZFByb3BzIHtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbiAgb25DbGljazogKHBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTykgPT4gdm9pZDtcbiAgb25EZWxldGU/OiAocGFuZWw6IExpYnJhcnlFbGVtZW50RFRPKSA9PiB2b2lkO1xuICBzaG93U2Vjb25kYXJ5QWN0aW9ucz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBMaWJyYXJ5UGFuZWxDYXJkOiBSZWFjdC5GQzxMaWJyYXJ5UGFuZWxDYXJkUHJvcHMgJiB7IGNoaWxkcmVuPzogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdIH0+ID0gKHtcbiAgbGlicmFyeVBhbmVsLFxuICBvbkNsaWNrLFxuICBvbkRlbGV0ZSxcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnMsXG59KSA9PiB7XG4gIGNvbnN0IFtzaG93RGVsZXRpb25Nb2RhbCwgc2V0U2hvd0RlbGV0aW9uTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uRGVsZXRlUGFuZWwgPSAoKSA9PiB7XG4gICAgb25EZWxldGU/LihsaWJyYXJ5UGFuZWwpO1xuICAgIHNldFNob3dEZWxldGlvbk1vZGFsKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBwYW5lbFBsdWdpbiA9IGNvbmZpZy5wYW5lbHNbbGlicmFyeVBhbmVsLm1vZGVsLnR5cGVdID8/IGdldFBhbmVsUGx1Z2luTm90Rm91bmQobGlicmFyeVBhbmVsLm1vZGVsLnR5cGUpLm1ldGE7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBhbmVsVHlwZUNhcmRcbiAgICAgICAgaXNDdXJyZW50PXtmYWxzZX1cbiAgICAgICAgdGl0bGU9e2xpYnJhcnlQYW5lbC5uYW1lfVxuICAgICAgICBkZXNjcmlwdGlvbj17bGlicmFyeVBhbmVsLmRlc2NyaXB0aW9ufVxuICAgICAgICBwbHVnaW49e3BhbmVsUGx1Z2lufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrPy4obGlicmFyeVBhbmVsKX1cbiAgICAgICAgb25EZWxldGU9e3Nob3dTZWNvbmRhcnlBY3Rpb25zID8gKCkgPT4gc2V0U2hvd0RlbGV0aW9uTW9kYWwodHJ1ZSkgOiB1bmRlZmluZWR9XG4gICAgICA+XG4gICAgICAgIDxGb2xkZXJMaW5rIGxpYnJhcnlQYW5lbD17bGlicmFyeVBhbmVsfSAvPlxuICAgICAgPC9QYW5lbFR5cGVDYXJkPlxuICAgICAge3Nob3dEZWxldGlvbk1vZGFsICYmIChcbiAgICAgICAgPERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsXG4gICAgICAgICAgbGlicmFyeVBhbmVsPXtsaWJyYXJ5UGFuZWx9XG4gICAgICAgICAgb25Db25maXJtPXtvbkRlbGV0ZVBhbmVsfVxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0U2hvd0RlbGV0aW9uTW9kYWwoZmFsc2UpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBGb2xkZXJMaW5rUHJvcHMge1xuICBsaWJyYXJ5UGFuZWw6IExpYnJhcnlFbGVtZW50RFRPO1xufVxuXG5mdW5jdGlvbiBGb2xkZXJMaW5rKHsgbGlicmFyeVBhbmVsIH06IEZvbGRlckxpbmtQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgaWYgKCFsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJVaWQgJiYgIWxpYnJhcnlQYW5lbC5tZXRhLmZvbGRlck5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghbGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1ldGFDb250YWluZXJ9PlxuICAgICAgICA8SWNvbiBuYW1lPXsnZm9sZGVyJ30gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgPHNwYW4+e2xpYnJhcnlQYW5lbC5tZXRhLmZvbGRlck5hbWV9PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1ldGFDb250YWluZXJ9PlxuICAgICAgPExpbmsgaHJlZj17YC9kYXNoYm9hcmRzL2YvJHtsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJVaWR9YH0+XG4gICAgICAgIDxJY29uIG5hbWU9eydmb2xkZXItdXBsb2FkJ30gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgPHNwYW4+e2xpYnJhcnlQYW5lbC5tZXRhLmZvbGRlck5hbWV9PC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgbWV0YUNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgUGFuZWxQbHVnaW5NZXRhLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgdXNlU3R5bGVzMiwgVmVydGljYWxHcm91cCwgRmlsdGVySW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEZvbGRlckZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9uZW50cy9Gb2xkZXJGaWx0ZXIvRm9sZGVyRmlsdGVyJztcbmltcG9ydCB7IFBhbmVsVHlwZUZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9uZW50cy9QYW5lbFR5cGVGaWx0ZXIvUGFuZWxUeXBlRmlsdGVyJztcbmltcG9ydCB7IFNvcnRQaWNrZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L1NvcnRQaWNrZXInO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgRm9sZGVySW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTGlicmFyeVBhbmVsc1ZpZXcgfSBmcm9tICcuLi9MaWJyYXJ5UGFuZWxzVmlldy9MaWJyYXJ5UGFuZWxzVmlldyc7XG5cbmltcG9ydCB7XG4gIGZvbGRlckZpbHRlckNoYW5nZWQsXG4gIGluaXRpYWxMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUsXG4gIGxpYnJhcnlQYW5lbHNTZWFyY2hSZWR1Y2VyLFxuICBwYW5lbEZpbHRlckNoYW5nZWQsXG4gIHNlYXJjaENoYW5nZWQsXG4gIHNvcnRDaGFuZ2VkLFxufSBmcm9tICcuL3JlZHVjZXInO1xuXG5leHBvcnQgZW51bSBMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudCB7XG4gIFRpZ2h0ID0gJ3RpZ2h0JyxcbiAgU3BhY2lvdXMgPSAnc3BhY2lvdXMnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbHNTZWFyY2hQcm9wcyB7XG4gIG9uQ2xpY2s6IChwYW5lbDogTGlicmFyeUVsZW1lbnREVE8pID0+IHZvaWQ7XG4gIHZhcmlhbnQ/OiBMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudDtcbiAgc2hvd1NvcnQ/OiBib29sZWFuO1xuICBzaG93UGFuZWxGaWx0ZXI/OiBib29sZWFuO1xuICBzaG93Rm9sZGVyRmlsdGVyPzogYm9vbGVhbjtcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnM/OiBib29sZWFuO1xuICBjdXJyZW50UGFuZWxJZD86IHN0cmluZztcbiAgY3VycmVudEZvbGRlcklkPzogbnVtYmVyO1xuICBwZXJQYWdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTGlicmFyeVBhbmVsc1NlYXJjaCA9ICh7XG4gIG9uQ2xpY2ssXG4gIHZhcmlhbnQgPSBMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudC5TcGFjaW91cyxcbiAgY3VycmVudFBhbmVsSWQsXG4gIGN1cnJlbnRGb2xkZXJJZCxcbiAgcGVyUGFnZSA9IERFRkFVTFRfUEVSX1BBR0VfUEFHSU5BVElPTixcbiAgc2hvd1BhbmVsRmlsdGVyID0gZmFsc2UsXG4gIHNob3dGb2xkZXJGaWx0ZXIgPSBmYWxzZSxcbiAgc2hvd1NvcnQgPSBmYWxzZSxcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnMgPSBmYWxzZSxcbn06IExpYnJhcnlQYW5lbHNTZWFyY2hQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbeyBzb3J0RGlyZWN0aW9uLCBwYW5lbEZpbHRlciwgZm9sZGVyRmlsdGVyLCBzZWFyY2hRdWVyeSB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGxpYnJhcnlQYW5lbHNTZWFyY2hSZWR1Y2VyLCB7XG4gICAgLi4uaW5pdGlhbExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZSxcbiAgICBmb2xkZXJGaWx0ZXI6IGN1cnJlbnRGb2xkZXJJZCA/IFtjdXJyZW50Rm9sZGVySWQudG9TdHJpbmcoMTApXSA6IFtdLFxuICB9KTtcbiAgY29uc3Qgb25GaWx0ZXJDaGFuZ2UgPSAoc2VhcmNoU3RyaW5nOiBzdHJpbmcpID0+IGRpc3BhdGNoKHNlYXJjaENoYW5nZWQoc2VhcmNoU3RyaW5nKSk7XG4gIGNvbnN0IG9uU29ydENoYW5nZSA9IChzb3J0aW5nOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4gZGlzcGF0Y2goc29ydENoYW5nZWQoc29ydGluZykpO1xuICBjb25zdCBvbkZvbGRlckZpbHRlckNoYW5nZSA9IChmb2xkZXJzOiBGb2xkZXJJbmZvW10pID0+IGRpc3BhdGNoKGZvbGRlckZpbHRlckNoYW5nZWQoZm9sZGVycykpO1xuICBjb25zdCBvblBhbmVsRmlsdGVyQ2hhbmdlID0gKHBsdWdpbnM6IFBhbmVsUGx1Z2luTWV0YVtdKSA9PiBkaXNwYXRjaChwYW5lbEZpbHRlckNoYW5nZWQocGx1Z2lucykpO1xuXG4gIGlmICh2YXJpYW50ID09PSBMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudC5TcGFjaW91cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJsZ1wiPlxuICAgICAgICAgIDxGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTZWFyY2ggYnkgbmFtZSBvciBkZXNjcmlwdGlvbid9XG4gICAgICAgICAgICB3aWR0aD17MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uUm93fT5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXBcbiAgICAgICAgICAgICAgc3BhY2luZz1cInNtXCJcbiAgICAgICAgICAgICAganVzdGlmeT17KHNob3dTb3J0ICYmIHNob3dQYW5lbEZpbHRlcikgfHwgc2hvd0ZvbGRlckZpbHRlciA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdmbGV4LWVuZCd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzaG93U29ydCAmJiAoXG4gICAgICAgICAgICAgICAgPFNvcnRQaWNrZXIgdmFsdWU9e3NvcnREaXJlY3Rpb259IG9uQ2hhbmdlPXtvblNvcnRDaGFuZ2V9IGZpbHRlcj17WydhbHBoYS1hc2MnLCAnYWxwaGEtZGVzYyddfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwXG4gICAgICAgICAgICAgICAgc3BhY2luZz1cInNtXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PXtzaG93Rm9sZGVyRmlsdGVyICYmIHNob3dQYW5lbEZpbHRlciA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdmbGV4LWVuZCd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2hvd0ZvbGRlckZpbHRlciAmJiA8Rm9sZGVyRmlsdGVyIG9uQ2hhbmdlPXtvbkZvbGRlckZpbHRlckNoYW5nZX0gLz59XG4gICAgICAgICAgICAgICAge3Nob3dQYW5lbEZpbHRlciAmJiA8UGFuZWxUeXBlRmlsdGVyIG9uQ2hhbmdlPXtvblBhbmVsRmlsdGVyQ2hhbmdlfSAvPn1cbiAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpYnJhcnlQYW5lbHNWaWV3fT5cbiAgICAgICAgICAgIDxMaWJyYXJ5UGFuZWxzVmlld1xuICAgICAgICAgICAgICBvbkNsaWNrQ2FyZD17b25DbGlja31cbiAgICAgICAgICAgICAgc2VhcmNoU3RyaW5nPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgc29ydERpcmVjdGlvbj17c29ydERpcmVjdGlvbn1cbiAgICAgICAgICAgICAgcGFuZWxGaWx0ZXI9e3BhbmVsRmlsdGVyfVxuICAgICAgICAgICAgICBmb2xkZXJGaWx0ZXI9e2ZvbGRlckZpbHRlcn1cbiAgICAgICAgICAgICAgY3VycmVudFBhbmVsSWQ9e2N1cnJlbnRQYW5lbElkfVxuICAgICAgICAgICAgICBzaG93U2Vjb25kYXJ5QWN0aW9ucz17c2hvd1NlY29uZGFyeUFjdGlvbnN9XG4gICAgICAgICAgICAgIHBlclBhZ2U9e3BlclBhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwieHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWdodEJ1dHRvblJvd30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWdodEZpbHRlcn0+XG4gICAgICAgICAgICA8RmlsdGVySW5wdXQgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17b25GaWx0ZXJDaGFuZ2V9IHBsYWNlaG9sZGVyPXsnU2VhcmNoIGJ5IG5hbWUnfSB3aWR0aD17MH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpZ2h0U29ydEZpbHRlcn0+XG4gICAgICAgICAgICB7c2hvd1NvcnQgJiYgPFNvcnRQaWNrZXIgdmFsdWU9e3NvcnREaXJlY3Rpb259IG9uQ2hhbmdlPXtvblNvcnRDaGFuZ2V9IC8+fVxuICAgICAgICAgICAge3Nob3dGb2xkZXJGaWx0ZXIgJiYgPEZvbGRlckZpbHRlciBvbkNoYW5nZT17b25Gb2xkZXJGaWx0ZXJDaGFuZ2V9IG1heE1lbnVIZWlnaHQ9ezIwMH0gLz59XG4gICAgICAgICAgICB7c2hvd1BhbmVsRmlsdGVyICYmIDxQYW5lbFR5cGVGaWx0ZXIgb25DaGFuZ2U9e29uUGFuZWxGaWx0ZXJDaGFuZ2V9IG1heE1lbnVIZWlnaHQ9ezIwMH0gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpYnJhcnlQYW5lbHNWaWV3fT5cbiAgICAgICAgICA8TGlicmFyeVBhbmVsc1ZpZXdcbiAgICAgICAgICAgIG9uQ2xpY2tDYXJkPXtvbkNsaWNrfVxuICAgICAgICAgICAgc2VhcmNoU3RyaW5nPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb249e3NvcnREaXJlY3Rpb259XG4gICAgICAgICAgICBwYW5lbEZpbHRlcj17cGFuZWxGaWx0ZXJ9XG4gICAgICAgICAgICBmb2xkZXJGaWx0ZXI9e2ZvbGRlckZpbHRlcn1cbiAgICAgICAgICAgIGN1cnJlbnRQYW5lbElkPXtjdXJyZW50UGFuZWxJZH1cbiAgICAgICAgICAgIHNob3dTZWNvbmRhcnlBY3Rpb25zPXtzaG93U2Vjb25kYXJ5QWN0aW9uc31cbiAgICAgICAgICAgIHBlclBhZ2U9e3BlclBhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBidXR0b25Sb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07IC8vIENsZWFyIHR5cGVzIGxpbmtcbiAgICBgLFxuICAgIHRpZ2h0QnV0dG9uUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoNCl9OyAvLyBDbGVhciB0eXBlcyBsaW5rXG4gICAgYCxcbiAgICB0aWdodEZpbHRlcjogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgIGAsXG4gICAgdGlnaHRTb3J0RmlsdGVyOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMCwgMCwgMCwgMC41KX07XG4gICAgYCxcbiAgICBsaWJyYXJ5UGFuZWxzVmlldzogY3NzYFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyBQYW5lbFBsdWdpbk1ldGEsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBGb2xkZXJJbmZvIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZSB7XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XG4gIHNvcnREaXJlY3Rpb24/OiBzdHJpbmc7XG4gIHBhbmVsRmlsdGVyOiBzdHJpbmdbXTtcbiAgZm9sZGVyRmlsdGVyOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGU6IExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZSA9IHtcbiAgc2VhcmNoUXVlcnk6ICcnLFxuICBwYW5lbEZpbHRlcjogW10sXG4gIGZvbGRlckZpbHRlcjogW10sXG4gIHNvcnREaXJlY3Rpb246IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPHN0cmluZz4oJ2xpYnJhcnlQYW5lbHMvc2VhcmNoL3NlYXJjaENoYW5nZWQnKTtcbmV4cG9ydCBjb25zdCBzb3J0Q2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4oJ2xpYnJhcnlQYW5lbHMvc2VhcmNoL3NvcnRDaGFuZ2VkJyk7XG5leHBvcnQgY29uc3QgcGFuZWxGaWx0ZXJDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPFBhbmVsUGx1Z2luTWV0YVtdPignbGlicmFyeVBhbmVscy9zZWFyY2gvcGFuZWxGaWx0ZXJDaGFuZ2VkJyk7XG5leHBvcnQgY29uc3QgZm9sZGVyRmlsdGVyQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxGb2xkZXJJbmZvW10+KCdsaWJyYXJ5UGFuZWxzL3NlYXJjaC9mb2xkZXJGaWx0ZXJDaGFuZ2VkJyk7XG5cbmV4cG9ydCBjb25zdCBsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlciA9IChzdGF0ZTogTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlLCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xuICBpZiAoc2VhcmNoQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlYXJjaFF1ZXJ5OiBhY3Rpb24ucGF5bG9hZCB9O1xuICB9XG5cbiAgaWYgKHNvcnRDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgc29ydERpcmVjdGlvbjogYWN0aW9uLnBheWxvYWQudmFsdWUgfTtcbiAgfVxuXG4gIGlmIChwYW5lbEZpbHRlckNoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYW5lbEZpbHRlcjogYWN0aW9uLnBheWxvYWQubWFwKChwKSA9PiBwLmlkKSB9O1xuICB9XG5cbiAgaWYgKGZvbGRlckZpbHRlckNoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb2xkZXJGaWx0ZXI6IGFjdGlvbi5wYXlsb2FkLm1hcCgoZikgPT4gU3RyaW5nKGYuaWQhKSkgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUsIExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IExpYnJhcnlQYW5lbENhcmQgfSBmcm9tICcuLi9MaWJyYXJ5UGFuZWxDYXJkL0xpYnJhcnlQYW5lbENhcmQnO1xuXG5pbXBvcnQgeyBhc3luY0Rpc3BhdGNoZXIsIGRlbGV0ZUxpYnJhcnlQYW5lbCwgc2VhcmNoRm9yTGlicmFyeVBhbmVscyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgbGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuaW50ZXJmYWNlIExpYnJhcnlQYW5lbFZpZXdQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgb25DbGlja0NhcmQ6IChwYW5lbDogTGlicmFyeUVsZW1lbnREVE8pID0+IHZvaWQ7XG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zPzogYm9vbGVhbjtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG4gIHNlYXJjaFN0cmluZzogc3RyaW5nO1xuICBzb3J0RGlyZWN0aW9uPzogc3RyaW5nO1xuICBwYW5lbEZpbHRlcj86IHN0cmluZ1tdO1xuICBmb2xkZXJGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgcGVyUGFnZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IExpYnJhcnlQYW5lbHNWaWV3OiBSZWFjdC5GQzxMaWJyYXJ5UGFuZWxWaWV3UHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBvbkNsaWNrQ2FyZCxcbiAgc2VhcmNoU3RyaW5nLFxuICBzb3J0RGlyZWN0aW9uLFxuICBwYW5lbEZpbHRlcixcbiAgZm9sZGVyRmlsdGVyLFxuICBzaG93U2Vjb25kYXJ5QWN0aW9ucyxcbiAgY3VycmVudFBhbmVsSWQ6IGN1cnJlbnRQYW5lbCxcbiAgcGVyUGFnZTogcHJvcHNQZXJQYWdlID0gNDAsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRQYW5lbFZpZXdTdHlsZXMpO1xuICBjb25zdCBbeyBsaWJyYXJ5UGFuZWxzLCBwYWdlLCBwZXJQYWdlLCBudW1iZXJPZlBhZ2VzLCBsb2FkaW5nU3RhdGUsIGN1cnJlbnRQYW5lbElkIH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXG4gICAgbGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyLFxuICAgIHtcbiAgICAgIC4uLmluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLFxuICAgICAgY3VycmVudFBhbmVsSWQ6IGN1cnJlbnRQYW5lbCxcbiAgICAgIHBlclBhZ2U6IHByb3BzUGVyUGFnZSxcbiAgICB9XG4gICk7XG4gIGNvbnN0IGFzeW5jRGlzcGF0Y2ggPSB1c2VNZW1vKCgpID0+IGFzeW5jRGlzcGF0Y2hlcihkaXNwYXRjaCksIFtkaXNwYXRjaF0pO1xuICB1c2VEZWJvdW5jZShcbiAgICAoKSA9PlxuICAgICAgYXN5bmNEaXNwYXRjaChcbiAgICAgICAgc2VhcmNoRm9yTGlicmFyeVBhbmVscyh7XG4gICAgICAgICAgc2VhcmNoU3RyaW5nLFxuICAgICAgICAgIHNvcnREaXJlY3Rpb24sXG4gICAgICAgICAgcGFuZWxGaWx0ZXIsXG4gICAgICAgICAgZm9sZGVyRmlsdGVyLFxuICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgcGVyUGFnZSxcbiAgICAgICAgICBjdXJyZW50UGFuZWxJZCxcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgMzAwLFxuICAgIFtzZWFyY2hTdHJpbmcsIHNvcnREaXJlY3Rpb24sIHBhbmVsRmlsdGVyLCBmb2xkZXJGaWx0ZXIsIHBhZ2UsIGFzeW5jRGlzcGF0Y2hdXG4gICk7XG4gIGNvbnN0IG9uRGVsZXRlID0gKHsgdWlkIH06IExpYnJhcnlFbGVtZW50RFRPKSA9PlxuICAgIGFzeW5jRGlzcGF0Y2goZGVsZXRlTGlicmFyeVBhbmVsKHVpZCwgeyBzZWFyY2hTdHJpbmcsIHBhZ2UsIHBlclBhZ2UgfSkpO1xuICBjb25zdCBvblBhZ2VDaGFuZ2UgPSAocGFnZTogbnVtYmVyKSA9PiBhc3luY0Rpc3BhdGNoKGNoYW5nZVBhZ2UoeyBwYWdlIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGFpbmVyLCBjbGFzc05hbWUpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlicmFyeVBhbmVsTGlzdH0+XG4gICAgICAgIHtsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nID8gKFxuICAgICAgICAgIDxwPkxvYWRpbmcgbGlicmFyeSBwYW5lbHMuLi48L3A+XG4gICAgICAgICkgOiBsaWJyYXJ5UGFuZWxzLmxlbmd0aCA8IDEgPyAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm9QYW5lbHNGb3VuZH0+Tm8gbGlicmFyeSBwYW5lbHMgZm91bmQuPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGxpYnJhcnlQYW5lbHM/Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPExpYnJhcnlQYW5lbENhcmRcbiAgICAgICAgICAgICAga2V5PXtgbGlicmFyeS1wYW5lbD0ke2l9YH1cbiAgICAgICAgICAgICAgbGlicmFyeVBhbmVsPXtpdGVtfVxuICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tDYXJkfVxuICAgICAgICAgICAgICBzaG93U2Vjb25kYXJ5QWN0aW9ucz17c2hvd1NlY29uZGFyeUFjdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaWJyYXJ5UGFuZWxzLmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9ufT5cbiAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICBudW1iZXJPZlBhZ2VzPXtudW1iZXJPZlBhZ2VzfVxuICAgICAgICAgICAgb25OYXZpZ2F0ZT17b25QYWdlQ2hhbmdlfVxuICAgICAgICAgICAgaGlkZVdoZW5TaW5nbGVQYWdlPXt0cnVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRQYW5lbFZpZXdTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBgLFxuICAgIGxpYnJhcnlQYW5lbExpc3Q6IGNzc2BcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLWdhcDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIHNlYXJjaEhlYWRlcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBgLFxuICAgIG5ld1BhbmVsQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBgLFxuICAgIHBhZ2luYXRpb246IGNzc2BcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBub1BhbmVsc0ZvdW5kOiBjc3NgXG4gICAgICBsYWJlbDogbm9QYW5lbHNGb3VuZDtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZyb20sIG1lcmdlLCBvZiwgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmluYWxpemUsIG1hcFRvLCBtZXJnZU1hcCwgc2hhcmUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZGVsZXRlTGlicmFyeVBhbmVsIGFzIGFwaURlbGV0ZUxpYnJhcnlQYW5lbCwgZ2V0TGlicmFyeVBhbmVscyB9IGZyb20gJy4uLy4uL3N0YXRlL2FwaSc7XG5cbmltcG9ydCB7IGluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCBpbml0U2VhcmNoLCBzZWFyY2hDb21wbGV0ZWQgfSBmcm9tICcuL3JlZHVjZXInO1xuXG50eXBlIERpc3BhdGNoUmVzdWx0ID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSA9PiB2b2lkO1xuaW50ZXJmYWNlIFNlYXJjaEFyZ3Mge1xuICBwZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2VhcmNoU3RyaW5nOiBzdHJpbmc7XG4gIHNvcnREaXJlY3Rpb24/OiBzdHJpbmc7XG4gIHBhbmVsRmlsdGVyPzogc3RyaW5nW107XG4gIGZvbGRlckZpbHRlcj86IHN0cmluZ1tdO1xuICBjdXJyZW50UGFuZWxJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMoYXJnczogU2VhcmNoQXJncyk6IERpc3BhdGNoUmVzdWx0IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBjb25zdCBkYXRhT2JzZXJ2YWJsZSA9IGZyb20oXG4gICAgICBnZXRMaWJyYXJ5UGFuZWxzKHtcbiAgICAgICAgc2VhcmNoU3RyaW5nOiBhcmdzLnNlYXJjaFN0cmluZyxcbiAgICAgICAgcGVyUGFnZTogYXJncy5wZXJQYWdlLFxuICAgICAgICBwYWdlOiBhcmdzLnBhZ2UsXG4gICAgICAgIGV4Y2x1ZGVVaWQ6IGFyZ3MuY3VycmVudFBhbmVsSWQsXG4gICAgICAgIHNvcnREaXJlY3Rpb246IGFyZ3Muc29ydERpcmVjdGlvbixcbiAgICAgICAgdHlwZUZpbHRlcjogYXJncy5wYW5lbEZpbHRlcixcbiAgICAgICAgZm9sZGVyRmlsdGVyOiBhcmdzLmZvbGRlckZpbHRlcixcbiAgICAgIH0pXG4gICAgKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKHsgcGVyUGFnZSwgZWxlbWVudHM6IGxpYnJhcnlQYW5lbHMsIHBhZ2UsIHRvdGFsQ291bnQgfSkgPT5cbiAgICAgICAgb2Yoc2VhcmNoQ29tcGxldGVkKHsgbGlicmFyeVBhbmVscywgcGFnZSwgcGVyUGFnZSwgdG90YWxDb3VudCB9KSlcbiAgICAgICksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gb2Yoc2VhcmNoQ29tcGxldGVkKHsgLi4uaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIHBhZ2U6IGFyZ3MucGFnZSwgcGVyUGFnZTogYXJncy5wZXJQYWdlIH0pKTtcbiAgICAgIH0pLFxuICAgICAgZmluYWxpemUoKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpLCAvLyBtYWtlIHN1cmUgd2UgdW5zdWJzY3JpYmVcbiAgICAgIHNoYXJlKClcbiAgICApO1xuXG4gICAgc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIC8vIElmIDUwbXMgd2l0aG91dCBhIHJlc3BvbnNlIGRpc3BhdGNoIGEgbG9hZGluZyBzdGF0ZVxuICAgICAgLy8gbWFwVG8gd2lsbCB0cmFuc2xhdGUgdGhlIHRpbWVyIGV2ZW50IGludG8gYSBsb2FkaW5nIHN0YXRlXG4gICAgICAvLyB0YWtlVW50aWwgd2lsbCBjYW5jZWwgdGhlIHRpbWVyIGVtaXQgd2hlbiBmaXJzdCByZXNwb25zZSBpcyByZWNlaXZlZCBvbiB0aGUgZGF0YU9ic2VydmFibGVcbiAgICAgIG1lcmdlKHRpbWVyKDUwKS5waXBlKG1hcFRvKGluaXRTZWFyY2goKSksIHRha2VVbnRpbChkYXRhT2JzZXJ2YWJsZSkpLCBkYXRhT2JzZXJ2YWJsZSkuc3Vic2NyaWJlKGRpc3BhdGNoKVxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaWJyYXJ5UGFuZWwodWlkOiBzdHJpbmcsIGFyZ3M6IFNlYXJjaEFyZ3MpOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpRGVsZXRlTGlicmFyeVBhbmVsKHVpZCk7XG4gICAgICBzZWFyY2hGb3JMaWJyYXJ5UGFuZWxzKGFyZ3MpKGRpc3BhdGNoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jRGlzcGF0Y2hlcihkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xuICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbjogYW55KSB7XG4gICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbik7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbHNWaWV3U3RhdGUge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZTtcbiAgbGlicmFyeVBhbmVsczogTGlicmFyeUVsZW1lbnREVE9bXTtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICBwZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbnVtYmVyT2ZQYWdlczogbnVtYmVyO1xuICBjdXJyZW50UGFuZWxJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlOiBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlID0ge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Mb2FkaW5nLFxuICBsaWJyYXJ5UGFuZWxzOiBbXSxcbiAgdG90YWxDb3VudDogMCxcbiAgcGVyUGFnZTogNDAsXG4gIHBhZ2U6IDEsXG4gIG51bWJlck9mUGFnZXM6IDAsXG4gIGN1cnJlbnRQYW5lbElkOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFNlYXJjaCA9IGNyZWF0ZUFjdGlvbignbGlicmFyeVBhbmVscy92aWV3L2luaXRTZWFyY2gnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hDb21wbGV0ZWQgPSBjcmVhdGVBY3Rpb248XG4gIE9taXQ8TGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgJ2N1cnJlbnRQYW5lbElkJyB8ICdzZWFyY2hTdHJpbmcnIHwgJ2xvYWRpbmdTdGF0ZScgfCAnbnVtYmVyT2ZQYWdlcyc+XG4+KCdsaWJyYXJ5UGFuZWxzL3ZpZXcvc2VhcmNoQ29tcGxldGVkJyk7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlID0gY3JlYXRlQWN0aW9uPFBpY2s8TGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgJ3BhZ2UnPj4oJ2xpYnJhcnlQYW5lbHMvdmlldy9jaGFuZ2VQYWdlJyk7XG5cbmV4cG9ydCBjb25zdCBsaWJyYXJ5UGFuZWxzVmlld1JlZHVjZXIgPSAoc3RhdGU6IExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKSA9PiB7XG4gIGlmIChpbml0U2VhcmNoLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyB9O1xuICB9XG5cbiAgaWYgKHNlYXJjaENvbXBsZXRlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgeyBsaWJyYXJ5UGFuZWxzLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBjb25zdCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsQ291bnQgLyBwZXJQYWdlKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsaWJyYXJ5UGFuZWxzLFxuICAgICAgcGVyUGFnZSxcbiAgICAgIHRvdGFsQ291bnQsXG4gICAgICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgbnVtYmVyT2ZQYWdlcyxcbiAgICAgIHBhZ2U6IHBhZ2UgPiBudW1iZXJPZlBhZ2VzID8gcGFnZSAtIDEgOiBwYWdlLFxuICAgIH07XG4gIH1cblxuICBpZiAoY2hhbmdlUGFnZS5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2U6IGFjdGlvbi5wYXlsb2FkLnBhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQXN5bmNTZWxlY3QsIEJ1dHRvbiwgTW9kYWwsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC90eXBlcyc7XG5pbXBvcnQgeyBnZXRDb25uZWN0ZWREYXNoYm9hcmRzLCBnZXRMaWJyYXJ5UGFuZWxDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5MaWJyYXJ5UGFuZWxNb2RhbFByb3BzIHtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xuICBsaWJyYXJ5UGFuZWw6IExpYnJhcnlFbGVtZW50RFRPO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT3BlbkxpYnJhcnlQYW5lbE1vZGFsKHsgbGlicmFyeVBhbmVsLCBvbkRpc21pc3MgfTogT3BlbkxpYnJhcnlQYW5lbE1vZGFsUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtvcHRpb24sIHNldE9wdGlvbl0gPSB1c2VTdGF0ZTxTZWxlY3RhYmxlVmFsdWU8RGFzaGJvYXJkU2VhcmNoSGl0PiB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjb25uZWN0ZWREYXNoYm9hcmRzID0gYXdhaXQgZ2V0TGlicmFyeVBhbmVsQ29ubmVjdGVkRGFzaGJvYXJkcyhsaWJyYXJ5UGFuZWwudWlkKTtcbiAgICAgIHNldENvbm5lY3RlZChjb25uZWN0ZWREYXNoYm9hcmRzLmxlbmd0aCk7XG4gICAgfTtcbiAgICBnZXRDb25uZWN0ZWQoKTtcbiAgfSwgW2xpYnJhcnlQYW5lbC51aWRdKTtcbiAgY29uc3QgbG9hZE9wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VhcmNoU3RyaW5nOiBzdHJpbmcpID0+IGxvYWRPcHRpb25zQXN5bmMobGlicmFyeVBhbmVsLnVpZCwgc2VhcmNoU3RyaW5nLCBzZXRMb2FkaW5nKSxcbiAgICBbbGlicmFyeVBhbmVsLnVpZF1cbiAgKTtcbiAgY29uc3QgZGVib3VuY2VkTG9hZE9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IGRlYm91bmNlKGxvYWRPcHRpb25zLCAzMDAsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUgfSksXG4gICAgW2xvYWRPcHRpb25zXVxuICApO1xuICBjb25zdCBvblZpZXdQYW5lbCA9IChlOiBNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh1cmxVdGlsLnJlbmRlclVybChgL2QvJHtvcHRpb24/LnZhbHVlPy51aWR9YCwge30pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCB0aXRsZT1cIlZpZXcgcGFuZWwgaW4gZGFzaGJvYXJkXCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IG9uQ2xpY2tCYWNrZHJvcD17b25EaXNtaXNzfSBpc09wZW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtjb25uZWN0ZWQgPT09IDAgPyAoXG4gICAgICAgICAgPHNwYW4+UGFuZWwgaXMgbm90IGxpbmtlZCB0byBhIGRhc2hib2FyZC4gQWRkIHRoZSBwYW5lbCB0byBhIGRhc2hib2FyZCBhbmQgcmV0cnkuPC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge2Nvbm5lY3RlZCA+IDAgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGlzIHBhbmVsIGlzIGJlaW5nIHVzZWQgaW57JyAnfVxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWR9IHtjb25uZWN0ZWQgPiAxID8gJ2Rhc2hib2FyZHMnIDogJ2Rhc2hib2FyZCd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAuUGxlYXNlIGNob29zZSB3aGljaCBkYXNoYm9hcmQgdG8gdmlldyB0aGUgcGFuZWwgaW46XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9ucz17dHJ1ZX1cbiAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZExvYWRPcHRpb25zfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0T3B0aW9ufVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0IHR5cGluZyB0byBzZWFyY2ggZm9yIGRhc2hib2FyZFwiXG4gICAgICAgICAgICAgIG5vT3B0aW9uc01lc3NhZ2U9XCJObyBkYXNoYm9hcmRzIGZvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uVmlld1BhbmVsfSBkaXNhYmxlZD17IUJvb2xlYW4ob3B0aW9uKX0+XG4gICAgICAgICAge29wdGlvbiA/IGBWaWV3IHBhbmVsIGluICR7b3B0aW9uPy5sYWJlbH0uLi5gIDogJ1ZpZXcgcGFuZWwgaW4gZGFzaGJvYXJkLi4uJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICA8L01vZGFsPlxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkT3B0aW9uc0FzeW5jKHVpZDogc3RyaW5nLCBzZWFyY2hTdHJpbmc6IHN0cmluZywgc2V0TG9hZGluZzogKGxvYWRpbmc6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgc2V0TG9hZGluZyh0cnVlKTtcbiAgY29uc3Qgc2VhcmNoSGl0cyA9IGF3YWl0IGdldENvbm5lY3RlZERhc2hib2FyZHModWlkKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlYXJjaEhpdHNcbiAgICAuZmlsdGVyKChkKSA9PiBkLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpKVxuICAgIC5tYXAoKGQpID0+ICh7IGxhYmVsOiBkLnRpdGxlLCB2YWx1ZTogZCB9KSk7XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RhbFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgbXlUYWJsZTogY3NzYFxuICAgICAgbWF4LWhlaWdodDogMjA0cHg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmJvcmRlci5yYWRpdXMuc219O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYmczfTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJnMX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFNlbWlXZWFrfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUubWR9O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIHRoZWFkIHtcbiAgICAgICAgY29sb3I6ICM1MzhhZGU7XG4gICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICAgICAgfVxuXG4gICAgICB0aCxcbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogNnB4IDEzcHg7XG4gICAgICAgIGhlaWdodDogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICAgIH1cblxuICAgICAgdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJnMn07XG4gICAgICB9XG4gICAgYCxcbiAgICBub3RlVGV4dGJveDogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICBgLFxuICAgIHRleHRJbmZvOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFNlbWlXZWFrfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICAgIGAsXG4gICAgZGFzaGJvYXJkU2VhcmNoOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGAsXG4gICAgbW9kYWw6IGNzc2BcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICBgLFxuICAgIG1vZGFsVGV4dDogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaGVhZGluZy5oNH07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCR7dGhlbWUuc3BhY2luZy5kfSAqIDIpO1xuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZy5kfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUsIFBhbmVsUGx1Z2luTWV0YSwgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgUGx1Z2luU2lnbmF0dXJlQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQbHVnaW5TdGF0ZUluZm8gfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9jb21wb25lbnRzL1BsdWdpblN0YXRlSW5mbyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlzQ3VycmVudDogYm9vbGVhbjtcbiAgcGx1Z2luOiBQYW5lbFBsdWdpbk1ldGE7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9uQ2xpY2s6IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PjtcbiAgb25EZWxldGU/OiAoKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNob3dCYWRnZT86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxUeXBlQ2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgaXNDdXJyZW50LFxuICB0aXRsZSxcbiAgcGx1Z2luLFxuICBvbkNsaWNrLFxuICBvbkRlbGV0ZSxcbiAgZGlzYWJsZWQsXG4gIHNob3dCYWRnZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGNzc0NsYXNzID0gY3goe1xuICAgIFtzdHlsZXMuaXRlbV06IHRydWUsXG4gICAgW3N0eWxlcy5kaXNhYmxlZF06IGRpc2FibGVkIHx8IHBsdWdpbi5zdGF0ZSA9PT0gUGx1Z2luU3RhdGUuZGVwcmVjYXRlZCxcbiAgICBbc3R5bGVzLmN1cnJlbnRdOiBpc0N1cnJlbnQsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzc31cbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5jb21wb25lbnRzLlBsdWdpblZpc3VhbGl6YXRpb24uaXRlbShwbHVnaW4ubmFtZSl9XG4gICAgICBvbkNsaWNrPXtkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IG9uQ2xpY2t9XG4gICAgICB0aXRsZT17aXNDdXJyZW50ID8gJ0NsaWNrIGFnYWluIHRvIGNsb3NlIHRoaXMgc2VjdGlvbicgOiBwbHVnaW4ubmFtZX1cbiAgICA+XG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXtwbHVnaW4uaW5mby5sb2dvcy5zbWFsbH0gYWx0PVwiXCIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtQ29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICB7ZGVzY3JpcHRpb24gPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvc3Bhbj4gOiBudWxsfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93QmFkZ2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJhZGdlLCBkaXNhYmxlZCAmJiBzdHlsZXMuZGlzYWJsZWQpfT5cbiAgICAgICAgICA8UGFuZWxQbHVnaW5CYWRnZSBwbHVnaW49e3BsdWdpbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge29uRGVsZXRlICYmIChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBuYW1lPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIG9uRGVsZXRlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVCdXR0b259XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBidXR0b24gb24gcGFuZWwgdHlwZSBjYXJkXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYW5lbFR5cGVDYXJkLmRpc3BsYXlOYW1lID0gJ1BhbmVsVHlwZUNhcmQnO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpdGVtOiBjc3NgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIGJveC1zaGFkb3c6ICR7dGhlbWUuc2hhZG93cy56MX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdHJhbnNpdGlvbjogJHt0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydiYWNrZ3JvdW5kJ10sIHtcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0LFxuICAgICAgfSl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZW1waGFzaXplKHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeSwgMC4wMyl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgaXRlbUNvbnRlbnQ6IGNzc2BcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMCwgMSl9O1xuICAgIGAsXG4gICAgY3VycmVudDogY3NzYFxuICAgICAgbGFiZWw6IGN1cnJlbnRWaXN1YWxpemF0aW9uSXRlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnByaW1hcnkuYm9yZGVyfTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmFjdGlvbi5zZWxlY3RlZH07XG4gICAgYCxcbiAgICBkaXNhYmxlZDogY3NzYFxuICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBgLFxuICAgIG5hbWU6IGNzc2BcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtfTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gICAgZGVzY3JpcHRpb246IGNzc2BcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRMaWdodH07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDQuNWVtO1xuICAgIGAsXG4gICAgaW1nOiBjc3NgXG4gICAgICBtYXgtaGVpZ2h0OiAzOHB4O1xuICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICAgIGJhZGdlOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnByaW1hcnl9O1xuICAgIGAsXG4gICAgZGVsZXRlQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBgLFxuICB9O1xufTtcblxuaW50ZXJmYWNlIFBhbmVsUGx1Z2luQmFkZ2VQcm9wcyB7XG4gIHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhO1xufVxuXG5jb25zdCBQYW5lbFBsdWdpbkJhZGdlOiBSZWFjdC5GQzxQYW5lbFBsdWdpbkJhZGdlUHJvcHM+ID0gKHsgcGx1Z2luIH0pID0+IHtcbiAgaWYgKGlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUocGx1Z2luLnNpZ25hdHVyZSkpIHtcbiAgICByZXR1cm4gPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz47XG4gIH1cblxuICByZXR1cm4gPFBsdWdpblN0YXRlSW5mbyBzdGF0ZT17cGx1Z2luLnN0YXRlfSAvPjtcbn07XG5cblBhbmVsUGx1Z2luQmFkZ2UuZGlzcGxheU5hbWUgPSAnUGFuZWxQbHVnaW5CYWRnZSc7XG4iLCJpbXBvcnQgeyBQYW5lbFBsdWdpbk1ldGEsIFBsdWdpblN0YXRlLCB1bkVzY2FwZVN0cmluZ0Zyb21SZWdleCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBhbmVsUGx1Z2luTWV0YSgpOiBQYW5lbFBsdWdpbk1ldGFbXSB7XG4gIGNvbnN0IGFsbFBhbmVscyA9IGNvbmZpZy5wYW5lbHM7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGFsbFBhbmVscylcbiAgICAuZmlsdGVyKChrZXkpID0+IGFsbFBhbmVsc1trZXldWydoaWRlRnJvbUxpc3QnXSA9PT0gZmFsc2UpXG4gICAgLm1hcCgoa2V5KSA9PiBhbGxQYW5lbHNba2V5XSlcbiAgICAuc29ydCgoYTogUGFuZWxQbHVnaW5NZXRhLCBiOiBQYW5lbFBsdWdpbk1ldGEpID0+IGEuc29ydCAtIGIuc29ydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJQbHVnaW5MaXN0KFxuICBwbHVnaW5zTGlzdDogUGFuZWxQbHVnaW5NZXRhW10sXG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmcsIC8vIE5vdGU6IHRoaXMgd2lsbCBiZSBhbiBlc2NhcGVkIHJlZ2V4IHN0cmluZyBhcyBpdCBjb21lcyBmcm9tIGBGaWx0ZXJJbnB1dGBcbiAgY3VycmVudDogUGFuZWxQbHVnaW5NZXRhXG4pOiBQYW5lbFBsdWdpbk1ldGFbXSB7XG4gIGlmICghc2VhcmNoUXVlcnkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBsdWdpbnNMaXN0LmZpbHRlcigocCkgPT4ge1xuICAgICAgaWYgKHAuc3RhdGUgPT09IFBsdWdpblN0YXRlLmRlcHJlY2F0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQuaWQgPT09IHAuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5ID0gdW5Fc2NhcGVTdHJpbmdGcm9tUmVnZXgoc2VhcmNoUXVlcnkpLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGZpcnN0OiBQYW5lbFBsdWdpbk1ldGFbXSA9IFtdO1xuICBjb25zdCBtYXRjaDogUGFuZWxQbHVnaW5NZXRhW10gPSBbXTtcbiAgY29uc3QgaXNHcmFwaFF1ZXJ5ID0gJ2dyYXBoJy5zdGFydHNXaXRoKHF1ZXJ5KTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgcGx1Z2luc0xpc3QpIHtcbiAgICBpZiAoaXRlbS5zdGF0ZSA9PT0gUGx1Z2luU3RhdGUuZGVwcmVjYXRlZCAmJiBjdXJyZW50LmlkICE9PSBpdGVtLmlkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaWR4ID0gbmFtZS5pbmRleE9mKHF1ZXJ5KTtcblxuICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgIGZpcnN0LnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIGlmIChpZHggPiAwKSB7XG4gICAgICBtYXRjaC5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoaXNHcmFwaFF1ZXJ5ICYmIGl0ZW0uaWQgPT09ICd0aW1lc2VyaWVzJykge1xuICAgICAgZmlyc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlyc3QuY29uY2F0KG1hdGNoKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhZGdlLCBCYWRnZVByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZT86IFBsdWdpblN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgUGx1Z2luU3RhdGVJbmZvOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGdldEZlYXR1cmVTdGF0ZUluZm8ocHJvcHMuc3RhdGUpO1xuXG4gIGlmICghZGlzcGxheSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIDxCYWRnZSBjb2xvcj17ZGlzcGxheS5jb2xvcn0gdGl0bGU9e2Rpc3BsYXkudG9vbHRpcH0gdGV4dD17ZGlzcGxheS50ZXh0fSBpY29uPXtkaXNwbGF5Lmljb259IC8+O1xufTtcblxuZnVuY3Rpb24gZ2V0RmVhdHVyZVN0YXRlSW5mbyhzdGF0ZT86IFBsdWdpblN0YXRlKTogQmFkZ2VQcm9wcyB8IG51bGwge1xuICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0RlcHJlY2F0ZWQnLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2VgLFxuICAgICAgfTtcbiAgICBjYXNlIFBsdWdpblN0YXRlLmFscGhhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0FscGhhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBleHBlcmltZW50YWwgYW5kIGZ1dHVyZSB1cGRhdGVzIG1pZ2h0IG5vdCBiZSBiYWNrd2FyZCBjb21wYXRpYmxlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5iZXRhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0JldGEnLFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGNsb3NlIHRvIGNvbXBsZXRlIGJ1dCBub3QgZnVsbHkgdGVzdGVkYCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY3NzIiwiZGVib3VuY2UiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQXN5bmNNdWx0aVNlbGVjdCIsIkljb24iLCJCdXR0b24iLCJ1c2VTdHlsZXMyIiwiZ2V0QmFja2VuZFNydiIsIlBlcm1pc3Npb25MZXZlbFN0cmluZyIsIkZvbGRlckZpbHRlciIsIm9uQ2hhbmdlIiwicHJvcHNPbkNoYW5nZSIsIm1heE1lbnVIZWlnaHQiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldE9wdGlvbnMiLCJzZWFyY2hTdHJpbmciLCJnZXRGb2xkZXJzQXNPcHRpb25zIiwiZGVib3VuY2VkTG9hZE9wdGlvbnMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZm9sZGVycyIsImNoYW5nZWRGb2xkZXJzIiwiZm9sZGVyIiwicHVzaCIsInNlbGVjdE9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImlzTXVsdGkiLCJub09wdGlvbnNNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJjb250YWluZXIiLCJsZW5ndGgiLCJjbGVhciIsInBhcmFtcyIsInF1ZXJ5IiwidHlwZSIsInBlcm1pc3Npb24iLCJWaWV3Iiwic2VhcmNoSGl0cyIsInNlYXJjaCIsIm9wdGlvbnMiLCJtYXAiLCJkIiwibGFiZWwiLCJ0aXRsZSIsImlkIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInVuc2hpZnQiLCJ0aGVtZSIsInNwYWNpbmciLCJNdWx0aVNlbGVjdCIsImdldEFsbFBhbmVsUGx1Z2luTWV0YSIsIlBhbmVsVHlwZUZpbHRlciIsInBsdWdpbnMiLCJwIiwibmFtZSIsImltZ1VybCIsImluZm8iLCJsb2dvcyIsInNtYWxsIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNoYW5nZWRQbHVnaW5zIiwicGx1Z2luIiwiZ2V0T3B0aW9uTGFiZWwiLCJpIiwiZ2V0T3B0aW9uVmFsdWUiLCJjb25uZWN0IiwidXNlQXN5bmMiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJMaWJyYXJ5UGFuZWxzU2VhcmNoIiwiT3BlbkxpYnJhcnlQYW5lbE1vZGFsIiwiZ2V0Rm9sZGVyQnlVaWQiLCJnZXRMb2FkaW5nTmF2IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9wcyIsInVpZCIsIm1hdGNoIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImZvbGRlclVpZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkZvbGRlckxpYnJhcnlQYW5lbHNQYWdlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJMb2FkaW5nU3RhdGUiLCJNb2RhbCIsInVzZVN0eWxlcyIsImdldE1vZGFsU3R5bGVzIiwiYXN5bmNEaXNwYXRjaGVyIiwiZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyIsImRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciIsImluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlIiwiRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwiLCJsaWJyYXJ5UGFuZWwiLCJvbkRpc21pc3MiLCJvbkNvbmZpcm0iLCJkYXNoYm9hcmRUaXRsZXMiLCJsb2FkaW5nU3RhdGUiLCJkaXNwYXRjaCIsImFzeW5jRGlzcGF0Y2giLCJjb25uZWN0ZWQiLCJCb29sZWFuIiwiZG9uZSIsIkRvbmUiLCJtb2RhbCIsIkxvYWRpbmdJbmRpY2F0b3IiLCJDb25maXJtIiwibW9kYWxUZXh0IiwiSGFzQ29ubmVjdGVkRGFzaGJvYXJkcyIsInN1ZmZpeCIsIm1lc3NhZ2UiLCJ0ZXh0SW5mbyIsIm15VGFibGUiLCJhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIiwic2VhcmNoQ29tcGxldGVkIiwiZGFzaGJvYXJkcyIsImNyZWF0ZUFjdGlvbiIsIkxvYWRpbmciLCJhY3Rpb24iLCJwYXlsb2FkIiwiY29uZmlnIiwiTGluayIsImdldFBhbmVsUGx1Z2luTm90Rm91bmQiLCJQYW5lbFR5cGVDYXJkIiwiTGlicmFyeVBhbmVsQ2FyZCIsIm9uQ2xpY2siLCJvbkRlbGV0ZSIsInNob3dTZWNvbmRhcnlBY3Rpb25zIiwic2hvd0RlbGV0aW9uTW9kYWwiLCJzZXRTaG93RGVsZXRpb25Nb2RhbCIsIm9uRGVsZXRlUGFuZWwiLCJwYW5lbFBsdWdpbiIsInBhbmVscyIsIm1vZGVsIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiRm9sZGVyTGluayIsImZvbGRlck5hbWUiLCJtZXRhQ29udGFpbmVyIiwiY29sb3JzIiwidGV4dCIsInNlY29uZGFyeSIsInR5cG9ncmFwaHkiLCJib2R5U21hbGwiLCJmb250U2l6ZSIsIkhvcml6b250YWxHcm91cCIsIlZlcnRpY2FsR3JvdXAiLCJGaWx0ZXJJbnB1dCIsIlNvcnRQaWNrZXIiLCJERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04iLCJMaWJyYXJ5UGFuZWxzVmlldyIsImZvbGRlckZpbHRlckNoYW5nZWQiLCJpbml0aWFsTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlIiwibGlicmFyeVBhbmVsc1NlYXJjaFJlZHVjZXIiLCJwYW5lbEZpbHRlckNoYW5nZWQiLCJzZWFyY2hDaGFuZ2VkIiwic29ydENoYW5nZWQiLCJMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudCIsInZhcmlhbnQiLCJTcGFjaW91cyIsImN1cnJlbnRQYW5lbElkIiwiY3VycmVudEZvbGRlcklkIiwicGVyUGFnZSIsInNob3dQYW5lbEZpbHRlciIsInNob3dGb2xkZXJGaWx0ZXIiLCJzaG93U29ydCIsInNvcnREaXJlY3Rpb24iLCJwYW5lbEZpbHRlciIsImZvbGRlckZpbHRlciIsInNlYXJjaFF1ZXJ5IiwidG9TdHJpbmciLCJvbkZpbHRlckNoYW5nZSIsIm9uU29ydENoYW5nZSIsInNvcnRpbmciLCJvbkZvbGRlckZpbHRlckNoYW5nZSIsIm9uUGFuZWxGaWx0ZXJDaGFuZ2UiLCJidXR0b25Sb3ciLCJsaWJyYXJ5UGFuZWxzVmlldyIsInRpZ2h0QnV0dG9uUm93IiwidGlnaHRGaWx0ZXIiLCJ0aWdodFNvcnRGaWx0ZXIiLCJmIiwiU3RyaW5nIiwiY3giLCJ1c2VEZWJvdW5jZSIsIlBhZ2luYXRpb24iLCJkZWxldGVMaWJyYXJ5UGFuZWwiLCJzZWFyY2hGb3JMaWJyYXJ5UGFuZWxzIiwiY2hhbmdlUGFnZSIsImluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlIiwibGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyIiwiY2xhc3NOYW1lIiwib25DbGlja0NhcmQiLCJjdXJyZW50UGFuZWwiLCJwcm9wc1BlclBhZ2UiLCJnZXRQYW5lbFZpZXdTdHlsZXMiLCJsaWJyYXJ5UGFuZWxzIiwicGFnZSIsIm51bWJlck9mUGFnZXMiLCJvblBhZ2VDaGFuZ2UiLCJsaWJyYXJ5UGFuZWxMaXN0Iiwibm9QYW5lbHNGb3VuZCIsIml0ZW0iLCJwYWdpbmF0aW9uIiwic20iLCJzZWFyY2hIZWFkZXIiLCJuZXdQYW5lbEJ1dHRvbiIsImZyb20iLCJtZXJnZSIsIm9mIiwiU3Vic2NyaXB0aW9uIiwidGltZXIiLCJjYXRjaEVycm9yIiwiZmluYWxpemUiLCJtYXBUbyIsIm1lcmdlTWFwIiwic2hhcmUiLCJ0YWtlVW50aWwiLCJhcGlEZWxldGVMaWJyYXJ5UGFuZWwiLCJnZXRMaWJyYXJ5UGFuZWxzIiwiaW5pdFNlYXJjaCIsImFyZ3MiLCJzdWJzY3JpcHRpb24iLCJkYXRhT2JzZXJ2YWJsZSIsImV4Y2x1ZGVVaWQiLCJ0eXBlRmlsdGVyIiwicGlwZSIsImVsZW1lbnRzIiwidG90YWxDb3VudCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInVuc3Vic2NyaWJlIiwiYWRkIiwic3Vic2NyaWJlIiwiZSIsIkZ1bmN0aW9uIiwiTWF0aCIsImNlaWwiLCJ1cmxVdGlsIiwibG9jYXRpb25TZXJ2aWNlIiwiQXN5bmNTZWxlY3QiLCJnZXRMaWJyYXJ5UGFuZWxDb25uZWN0ZWREYXNoYm9hcmRzIiwic2V0Q29ubmVjdGVkIiwib3B0aW9uIiwic2V0T3B0aW9uIiwiZ2V0Q29ubmVjdGVkIiwiY29ubmVjdGVkRGFzaGJvYXJkcyIsImxvYWRPcHRpb25zIiwibG9hZE9wdGlvbnNBc3luYyIsImxlYWRpbmciLCJ0cmFpbGluZyIsIm9uVmlld1BhbmVsIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJVcmwiLCJmaWx0ZXIiLCJib3JkZXIiLCJyYWRpdXMiLCJiZzMiLCJiZzEiLCJ0ZXh0U2VtaVdlYWsiLCJzaXplIiwibWQiLCJ4bCIsImJnMiIsIm5vdGVUZXh0Ym94IiwiZGFzaGJvYXJkU2VhcmNoIiwiaGVhZGluZyIsImg0IiwibGluayIsImlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUiLCJQbHVnaW5TdGF0ZSIsInNlbGVjdG9ycyIsIkljb25CdXR0b24iLCJQbHVnaW5TaWduYXR1cmVCYWRnZSIsIlBsdWdpblN0YXRlSW5mbyIsImlzQ3VycmVudCIsImRpc2FibGVkIiwic2hvd0JhZGdlIiwiY2hpbGRyZW4iLCJjc3NDbGFzcyIsImRlcHJlY2F0ZWQiLCJjdXJyZW50IiwiY29tcG9uZW50cyIsIlBsdWdpblZpc3VhbGl6YXRpb24iLCJpbWciLCJpdGVtQ29udGVudCIsImJhZGdlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsZXRlQnV0dG9uIiwiZGlzcGxheU5hbWUiLCJiYWNrZ3JvdW5kIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJzaGFkb3dzIiwiejEiLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImR1cmF0aW9uIiwic2hvcnQiLCJlbXBoYXNpemUiLCJwcmltYXJ5IiwiZm9udFdlaWdodE1lZGl1bSIsImZvbnRXZWlnaHRMaWdodCIsIlBhbmVsUGx1Z2luQmFkZ2UiLCJzaWduYXR1cmUiLCJ1bkVzY2FwZVN0cmluZ0Zyb21SZWdleCIsImFsbFBhbmVscyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJmaWx0ZXJQbHVnaW5MaXN0IiwicGx1Z2luc0xpc3QiLCJmaXJzdCIsImlzR3JhcGhRdWVyeSIsInN0YXJ0c1dpdGgiLCJpZHgiLCJpbmRleE9mIiwiY29uY2F0IiwiQmFkZ2UiLCJkaXNwbGF5IiwiZ2V0RmVhdHVyZVN0YXRlSW5mbyIsImNvbG9yIiwidG9vbHRpcCIsImljb24iLCJhbHBoYSIsImJldGEiXSwic291cmNlUm9vdCI6IiJ9