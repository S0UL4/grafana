"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DashboardImport"],{

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

/***/ "./public/app/features/manage-dashboards/DashboardImportPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var _components_ImportDashboardOverview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardOverview.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/manage-dashboards/utils/validation.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button, _VerticalGroup, _ImportDashboardOverv;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const IMPORT_STARTED_EVENT_NAME = 'dashboard_import_loaded';

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, 'import', undefined, true),
  loadingState: state.importDashboard.state
});

const mapDispatchToProps = {
  fetchGcomDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_12__.fetchGcomDashboard,
  importDashboardJson: _state_actions__WEBPACK_IMPORTED_MODULE_12__.importDashboardJson,
  cleanUpAction: _core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_10__.cleanUpAction
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);

class UnthemedDashboardImport extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onFileUpload", event => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'json_uploaded'
      });
      const {
        importDashboardJson
      } = this.props;
      const file = event.currentTarget.files && event.currentTarget.files.length > 0 && event.currentTarget.files[0];

      if (file) {
        const reader = new FileReader();

        const readerOnLoad = () => {
          return e => {
            let dashboard;

            try {
              dashboard = JSON.parse(e.target.result);
            } catch (error) {
              if (error instanceof Error) {
                app_core_app_events__WEBPACK_IMPORTED_MODULE_7__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.AppEvents.alertError, ['Import failed', 'JSON -> JS Serialization failed: ' + error.message]);
              }

              return;
            }

            importDashboardJson(dashboard);
          };
        };

        reader.onload = readerOnLoad();
        reader.readAsText(file);
      }
    });

    _defineProperty(this, "getDashboardFromJson", formData => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'json_pasted'
      });
      this.props.importDashboardJson(JSON.parse(formData.dashboardJson));
    });

    _defineProperty(this, "getGcomDashboard", formData => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'gcom'
      });
      let dashboardId;
      const match = /(^\d+$)|dashboards\/(\d+)/.exec(formData.gcomDashboard);

      if (match && match[1]) {
        dashboardId = match[1];
      } else if (match && match[2]) {
        dashboardId = match[2];
      }

      if (dashboardId) {
        this.props.fetchGcomDashboard(dashboardId);
      }
    });

    const {
      gcomDashboardId
    } = this.props.queryParams;

    if (gcomDashboardId) {
      this.getGcomDashboard({
        gcomDashboard: gcomDashboardId
      });
      return;
    }
  }

  componentWillUnmount() {
    this.props.cleanUpAction({
      stateSelector: state => state.importDashboard
    });
  }

  renderImportForm() {
    const styles = importStyles(this.props.theme);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.option,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.FileUpload, {
          accept: "application/json",
          onFileUpload: this.onFileUpload,
          children: "Upload JSON file"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.option,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Form, {
          onSubmit: this.getGcomDashboard,
          defaultValues: {
            gcomDashboard: ''
          },
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
            label: "Import via grafana.com",
            invalid: !!errors.gcomDashboard,
            error: errors.gcomDashboard && errors.gcomDashboard.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input, Object.assign({
              id: "url-input",
              placeholder: "Grafana.com dashboard URL or ID",
              type: "text"
            }, register('gcomDashboard', {
              required: 'A Grafana dashboard URL or ID is required',
              validate: _utils_validation__WEBPACK_IMPORTED_MODULE_13__.validateGcomDashboard
            }), {
              addonAfter: _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
                type: "submit",
                children: "Load"
              }))
            }))
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.option,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Form, {
          onSubmit: this.getDashboardFromJson,
          defaultValues: {
            dashboardJson: ''
          },
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
              label: "Import via panel json",
              invalid: !!errors.dashboardJson,
              error: errors.dashboardJson && errors.dashboardJson.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextArea, Object.assign({}, register('dashboardJson', {
                required: 'Need a dashboard JSON model',
                validate: _utils_validation__WEBPACK_IMPORTED_MODULE_13__.validateDashboardJson
              }), {
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DashboardImportPage.textarea,
                id: "dashboard-json-textarea",
                rows: 10
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
              type: "submit",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DashboardImportPage.submit,
              children: "Load"
            })]
          })
        })
      })]
    });
  }

  render() {
    const {
      loadingState,
      navModel
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__["default"].Contents, {
        children: [loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading && (_VerticalGroup || (_VerticalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VerticalGroup, {
          justify: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.HorizontalGroup, {
            justify: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Spinner, {
              size: 32
            })
          })
        }))), [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error, _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted].includes(loadingState) && this.renderImportForm(), loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done && (_ImportDashboardOverv || (_ImportDashboardOverv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_ImportDashboardOverview__WEBPACK_IMPORTED_MODULE_11__.ImportDashboardOverview, {})))]
      })
    });
  }

}

const DashboardImportUnConnected = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.withTheme2)(UnthemedDashboardImport);
const DashboardImport = connector(DashboardImportUnConnected);
DashboardImport.displayName = 'DashboardImport';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardImport);
const importStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.stylesFactory)(theme => {
  return {
    option: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(4)};
    `
  };
});

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDashboardForm": () => (/* binding */ ImportDashboardForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/manage-dashboards/utils/validation.ts");
/* harmony import */ var _ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardLibraryPanelsList.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"],
      _excluded2 = ["ref"];

var _Legend;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const ImportDashboardForm = ({
  register,
  errors,
  control,
  getValues,
  uidReset,
  inputs,
  initialFolderId,
  onUidReset,
  onCancel,
  onSubmit,
  watch
}) => {
  var _inputs$libraryPanels, _inputs$libraryPanels2, _inputs$libraryPanels3, _inputs$libraryPanels4;

  const [isSubmitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const watchDataSources = watch('dataSources');
  const watchFolder = watch('folder');
  /*
    This useEffect is needed for overwriting a dashboard. It
    submits the form even if there's validation errors on title or uid.
  */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSubmitted && (errors.title || errors.uid)) {
      onSubmit(getValues(), {});
    }
  }, [errors, getValues, isSubmitted, onSubmit]);
  const newLibraryPanels = (_inputs$libraryPanels = inputs === null || inputs === void 0 ? void 0 : (_inputs$libraryPanels2 = inputs.libraryPanels) === null || _inputs$libraryPanels2 === void 0 ? void 0 : _inputs$libraryPanels2.filter(i => i.state === _state_reducers__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelInputState.New)) !== null && _inputs$libraryPanels !== void 0 ? _inputs$libraryPanels : [];
  const existingLibraryPanels = (_inputs$libraryPanels3 = inputs === null || inputs === void 0 ? void 0 : (_inputs$libraryPanels4 = inputs.libraryPanels) === null || _inputs$libraryPanels4 === void 0 ? void 0 : _inputs$libraryPanels4.filter(i => i.state === _state_reducers__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelInputState.Exits)) !== null && _inputs$libraryPanels3 !== void 0 ? _inputs$libraryPanels3 : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
      children: "Options"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      label: "Name",
      invalid: !!errors.title,
      error: errors.title && errors.title.message,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register('title', {
        required: 'Name is required',
        validate: async v => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateTitle)(v, getValues().folder.id)
      }), {
        type: "text",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.ImportDashboardForm.name
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      label: "Folder",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_5__.FolderPicker, Object.assign({}, field, {
            enableCreateNew: true,
            initialFolderId: initialFolderId
          }));
        },
        name: "folder",
        control: control
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      label: "Unique identifier (UID)",
      description: "The unique identifier (UID) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The UID allows having consistent URLs for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard.",
      invalid: !!errors.uid,
      error: errors.uid && errors.uid.message,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: !uidReset ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
          disabled: true
        }, register('uid', {
          validate: async v => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateUid)(v)
        }), {
          addonAfter: !uidReset && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            onClick: onUidReset,
            children: "Change uid"
          })
        })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register('uid', {
          required: true,
          validate: async v => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateUid)(v)
        })))
      })
    }), inputs.dataSources && inputs.dataSources.map((input, index) => {
      if (input.pluginId === _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_3__.ExpressionDatasourceRef.type) {
        return null;
      }

      const dataSourceOption = `dataSources[${index}]`;
      const current = watchDataSources !== null && watchDataSources !== void 0 ? watchDataSources : [];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: input.label,
        invalid: errors.dataSources && !!errors.dataSources[index],
        error: errors.dataSources && errors.dataSources[index] && 'A data source is required',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
          name: dataSourceOption,
          render: _ref2 => {
            var _current$index;

            let {} = _ref2,
                field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, Object.assign({}, field, {
              noDefault: true,
              placeholder: input.info,
              pluginId: input.pluginId,
              current: (_current$index = current[index]) === null || _current$index === void 0 ? void 0 : _current$index.uid
            }));
          },
          control: control,
          rules: {
            required: true
          }
        })
      }, dataSourceOption);
    }), inputs.constants && inputs.constants.map((input, index) => {
      const constantIndex = `constants[${index}]`;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: input.label,
        error: errors.constants && errors.constants[index] && `${input.label} needs a value`,
        invalid: errors.constants && !!errors.constants[index],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register(constantIndex, {
          required: true
        }), {
          defaultValue: input.value
        }))
      }, constantIndex);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_8__.ImportDashboardLibraryPanelsList, {
      inputs: newLibraryPanels,
      label: "New library panels",
      description: "List of new library panels that will get imported.",
      folderName: watchFolder.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_8__.ImportDashboardLibraryPanelsList, {
      inputs: existingLibraryPanels,
      label: "Existing library panels",
      description: "List of existing library panels. These panels are not affected by the import.",
      folderName: watchFolder.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "submit",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.ImportDashboardForm.submit,
        variant: getButtonVariant(errors),
        onClick: () => {
          setSubmitted(true);
        },
        children: getButtonText(errors)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "reset",
        variant: "secondary",
        onClick: onCancel,
        children: "Cancel"
      })]
    })]
  });
};

function getButtonVariant(errors) {
  return errors && (errors.title || errors.uid) ? 'destructive' : 'primary';
}

function getButtonText(errors) {
  return errors && (errors.title || errors.uid) ? 'Import (Overwrite)' : 'Import';
}

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardLibraryPanelsList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDashboardLibraryPanelsList": () => (/* binding */ ImportDashboardLibraryPanelsList)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _library_panels_components_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function ImportDashboardLibraryPanelsList({
  inputs,
  label,
  description,
  folderName
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (!Boolean(inputs === null || inputs === void 0 ? void 0 : inputs.length)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: styles.spacer,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: label,
      description: description,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: inputs.map((input, index) => {
          const libraryPanelIndex = `elements[${index}]`;
          const libraryPanel = input.state === _state_reducers__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelInputState.New ? Object.assign({}, input.model, {
            meta: Object.assign({}, input.model.meta, {
              folderName: folderName !== null && folderName !== void 0 ? folderName : 'General'
            })
          }) : Object.assign({}, input.model);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: styles.item,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_library_panels_components_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_3__.LibraryPanelCard, {
              libraryPanel: libraryPanel,
              onClick: () => undefined
            })
          }, libraryPanelIndex);
        })
      })
    })
  });
}

function getStyles(theme) {
  return {
    spacer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(2)};
    `,
    item: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(1)};
    `
  };
}

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardOverview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDashboardOverview": () => (/* binding */ ImportDashboardOverview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _ImportDashboardForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td, _td2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const IMPORT_FINISHED_EVENT_NAME = 'dashboard_import_imported';

const mapStateToProps = state => {
  const searchObj = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.getSearchObject();
  return {
    dashboard: state.importDashboard.dashboard,
    meta: state.importDashboard.meta,
    source: state.importDashboard.source,
    inputs: state.importDashboard.inputs,
    folder: searchObj.folderId ? {
      id: Number(searchObj.folderId)
    } : {
      id: 0
    }
  };
};

const mapDispatchToProps = {
  clearLoadedDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_5__.clearLoadedDashboard,
  importDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_5__.importDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);

class ImportDashboardOverviewUnConnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      uidReset: false
    });

    _defineProperty(this, "onSubmit", form => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)(IMPORT_FINISHED_EVENT_NAME);
      this.props.importDashboard(form);
    });

    _defineProperty(this, "onCancel", () => {
      this.props.clearLoadedDashboard();
    });

    _defineProperty(this, "onUidReset", () => {
      this.setState({
        uidReset: true
      });
    });
  }

  render() {
    const {
      dashboard,
      inputs,
      meta,
      source,
      folder
    } = this.props;
    const {
      uidReset
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [source === _state_reducers__WEBPACK_IMPORTED_MODULE_6__.DashboardSource.Gcom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        style: {
          marginBottom: '24px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
            children: ["Importing dashboard from", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: `https://grafana.com/dashboards/${dashboard.gnetId}`,
              className: "external-link",
              target: "_blank",
              rel: "noreferrer",
              children: "Grafana.com"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("table", {
          className: "filter-table form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [_td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: "Published by"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: meta.orgName
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [_td2 || (_td2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: "Updated on"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(meta.updatedAt)
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Form, {
        onSubmit: this.onSubmit,
        defaultValues: Object.assign({}, dashboard, {
          constants: [],
          dataSources: [],
          elements: [],
          folder: folder
        }),
        validateOnMount: true,
        validateFieldsOnMount: ['title', 'uid'],
        validateOn: "onChange",
        children: ({
          register,
          errors,
          control,
          watch,
          getValues
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ImportDashboardForm__WEBPACK_IMPORTED_MODULE_7__.ImportDashboardForm, {
          register: register,
          errors: errors,
          control: control,
          getValues: getValues,
          uidReset: uidReset,
          inputs: inputs,
          onCancel: this.onCancel,
          onUidReset: this.onUidReset,
          onSubmit: this.onSubmit,
          watch: watch,
          initialFolderId: folder.id
        })
      })]
    });
  }

}

const ImportDashboardOverview = connector(ImportDashboardOverviewUnConnected);
ImportDashboardOverview.displayName = 'ImportDashboardOverview';

/***/ }),

/***/ "./public/app/features/manage-dashboards/utils/validation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateDashboardJson": () => (/* binding */ validateDashboardJson),
/* harmony export */   "validateGcomDashboard": () => (/* binding */ validateGcomDashboard),
/* harmony export */   "validateTitle": () => (/* binding */ validateTitle),
/* harmony export */   "validateUid": () => (/* binding */ validateUid)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _services_ValidationSrv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");


const validateDashboardJson = json => {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    return 'Not valid JSON';
  }
};
const validateGcomDashboard = gcomDashboard => {
  // From DashboardImportCtrl
  const match = /(^\d+$)|dashboards\/(\d+)/.exec(gcomDashboard);
  return match && (match[1] || match[2]) ? true : 'Could not find a valid Grafana.com ID';
};
const validateTitle = (newTitle, folderId) => {
  return _services_ValidationSrv__WEBPACK_IMPORTED_MODULE_1__.validationSrv.validateNewDashboardName(folderId, newTitle).then(() => {
    return true;
  }).catch(error => {
    if (error.type === 'EXISTING') {
      return error.message;
    }
  });
};
const validateUid = value => {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/dashboards/uid/${value}`).then(existingDashboard => {
    return `Dashboard named '${existingDashboard === null || existingDashboard === void 0 ? void 0 : existingDashboard.dashboard.title}' in folder '${existingDashboard === null || existingDashboard === void 0 ? void 0 : existingDashboard.meta.folderTitle}' has the same UID`;
  }).catch(error => {
    error.isHandled = true;
    return true;
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVUCxTQUFTSCxtQkFBVCxDQUE2QjNTLEtBQTdCLEVBQXFFO0VBQ25FLFFBQVFBLEtBQVI7SUFDRSxLQUFLc1EsaUVBQUw7TUFDRSxPQUFPO1FBQ0xuTyxJQUFJLEVBQUUsWUFERDtRQUVMeVEsS0FBSyxFQUFFLEtBRkY7UUFHTEMsT0FBTyxFQUFHO01BSEwsQ0FBUDs7SUFLRixLQUFLdkMsNERBQUw7TUFDRSxPQUFPO1FBQ0xuTyxJQUFJLEVBQUUsT0FERDtRQUVMeVEsS0FBSyxFQUFFLE1BRkY7UUFHTEMsT0FBTyxFQUFHO01BSEwsQ0FBUDs7SUFLRixLQUFLdkMsMkRBQUw7TUFDRSxPQUFPO1FBQ0xuTyxJQUFJLEVBQUUsTUFERDtRQUVMeVEsS0FBSyxFQUFFLE1BRkY7UUFHTEMsT0FBTyxFQUFHO01BSEwsQ0FBUDs7SUFLRjtNQUNFLE9BQU8sSUFBUDtFQXBCSjtBQXNCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxDYXJkL0xpYnJhcnlQYW5lbENhcmQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1ZpZXcvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNWaWV3L3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvc3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL21hbmFnZS1kYXNoYm9hcmRzL0Rhc2hib2FyZEltcG9ydFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL21hbmFnZS1kYXNoYm9hcmRzL2NvbXBvbmVudHMvSW1wb3J0RGFzaGJvYXJkRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvY29tcG9uZW50cy9JbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvY29tcG9uZW50cy9JbXBvcnREYXNoYm9hcmRPdmVydmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvdXRpbHMvdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9jb21wb25lbnRzL1BsdWdpblN0YXRlSW5mby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBnZXRNb2RhbFN0eWxlcyB9IGZyb20gJy4uLy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGFzeW5jRGlzcGF0Y2hlciB9IGZyb20gJy4uL0xpYnJhcnlQYW5lbHNWaWV3L2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBnZXRDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciwgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBsaWJyYXJ5UGFuZWw6IExpYnJhcnlFbGVtZW50RFRPO1xuICBvbkNvbmZpcm06ICgpID0+IHZvaWQ7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsOiBGQzxQcm9wcz4gPSAoeyBsaWJyYXJ5UGFuZWwsIG9uRGlzbWlzcywgb25Db25maXJtIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldE1vZGFsU3R5bGVzKTtcbiAgY29uc3QgW3sgZGFzaGJvYXJkVGl0bGVzLCBsb2FkaW5nU3RhdGUgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICBkZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFJlZHVjZXIsXG4gICAgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGVcbiAgKTtcbiAgY29uc3QgYXN5bmNEaXNwYXRjaCA9IHVzZU1lbW8oKCkgPT4gYXN5bmNEaXNwYXRjaGVyKGRpc3BhdGNoKSwgW2Rpc3BhdGNoXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmNEaXNwYXRjaChnZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbCkpO1xuICB9LCBbYXN5bmNEaXNwYXRjaCwgbGlicmFyeVBhbmVsXSk7XG4gIGNvbnN0IGNvbm5lY3RlZCA9IEJvb2xlYW4oZGFzaGJvYXJkVGl0bGVzLmxlbmd0aCk7XG4gIGNvbnN0IGRvbmUgPSBsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Eb25lO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfSB0aXRsZT1cIkRlbGV0ZSBsaWJyYXJ5IHBhbmVsXCIgaWNvbj1cInRyYXNoLWFsdFwiIG9uRGlzbWlzcz17b25EaXNtaXNzfSBpc09wZW49e3RydWV9PlxuICAgICAgeyFkb25lID8gPExvYWRpbmdJbmRpY2F0b3IgLz4gOiBudWxsfVxuICAgICAge2RvbmUgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2Nvbm5lY3RlZCA/IDxIYXNDb25uZWN0ZWREYXNoYm9hcmRzIGRhc2hib2FyZFRpdGxlcz17ZGFzaGJvYXJkVGl0bGVzfSAvPiA6IG51bGx9XG4gICAgICAgICAgeyFjb25uZWN0ZWQgPyA8Q29uZmlybSAvPiA6IG51bGx9XG5cbiAgICAgICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25EaXNtaXNzfSBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBvbkNsaWNrPXtvbkNvbmZpcm19IGRpc2FibGVkPXtjb25uZWN0ZWR9PlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5jb25zdCBMb2FkaW5nSW5kaWNhdG9yOiBGQyA9ICgpID0+IDxzcGFuPkxvYWRpbmcgbGlicmFyeSBwYW5lbC4uLjwvc3Bhbj47XG5cbmNvbnN0IENvbmZpcm06IEZDID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGV4dH0+RG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcGFuZWw/PC9kaXY+O1xufTtcblxuY29uc3QgSGFzQ29ubmVjdGVkRGFzaGJvYXJkczogRkM8eyBkYXNoYm9hcmRUaXRsZXM6IHN0cmluZ1tdIH0+ID0gKHsgZGFzaGJvYXJkVGl0bGVzIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldE1vZGFsU3R5bGVzKTtcbiAgY29uc3Qgc3VmZml4ID0gZGFzaGJvYXJkVGl0bGVzLmxlbmd0aCA9PT0gMSA/ICdkYXNoYm9hcmQuJyA6ICdkYXNoYm9hcmRzLic7XG4gIGNvbnN0IG1lc3NhZ2UgPSBgJHtkYXNoYm9hcmRUaXRsZXMubGVuZ3RofSAke3N1ZmZpeH1gO1xuICBpZiAoZGFzaGJvYXJkVGl0bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEluZm99PlxuICAgICAgICB7J1RoaXMgbGlicmFyeSBwYW5lbCBjYW4gbm90IGJlIGRlbGV0ZWQgYmVjYXVzZSBpdCBpcyBjb25uZWN0ZWQgdG8gJ31cbiAgICAgICAgPHN0cm9uZz57bWVzc2FnZX08L3N0cm9uZz5cbiAgICAgICAgeycgUmVtb3ZlIHRoZSBsaWJyYXJ5IHBhbmVsIGZyb20gdGhlIGRhc2hib2FyZHMgbGlzdGVkIGJlbG93IGFuZCByZXRyeS4nfVxuICAgICAgPC9wPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm15VGFibGV9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRhc2hib2FyZCBuYW1lPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2Rhc2hib2FyZFRpdGxlcy5tYXAoKHRpdGxlLCBpKSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtgZGFzaC10aXRsZS0ke2l9YH0+XG4gICAgICAgICAgICAgIDx0ZD57dGl0bGV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGdldENvbm5lY3RlZERhc2hib2FyZHMgYXMgYXBpR2V0Q29ubmVjdGVkRGFzaGJvYXJkcyB9IGZyb20gJy4uLy4uL3N0YXRlL2FwaSc7XG5pbXBvcnQgeyBEaXNwYXRjaFJlc3VsdCwgTGlicmFyeUVsZW1lbnREVE8gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IHNlYXJjaENvbXBsZXRlZCB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE8pOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBkYXNoYm9hcmRzID0gYXdhaXQgYXBpR2V0Q29ubmVjdGVkRGFzaGJvYXJkcyhsaWJyYXJ5UGFuZWwudWlkKTtcbiAgICBkaXNwYXRjaChzZWFyY2hDb21wbGV0ZWQoeyBkYXNoYm9hcmRzIH0pKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9zZWFyY2gvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZTtcbiAgZGFzaGJvYXJkVGl0bGVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlOiBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlID0ge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Mb2FkaW5nLFxuICBkYXNoYm9hcmRUaXRsZXM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaENvbXBsZXRlZCA9IGNyZWF0ZUFjdGlvbjx7IGRhc2hib2FyZHM6IERhc2hib2FyZFNlYXJjaEhpdFtdIH0+KFxuICAnbGlicmFyeVBhbmVscy9kZWxldGUvc2VhcmNoQ29tcGxldGVkJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciA9IChcbiAgc3RhdGU6IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgPSBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSxcbiAgYWN0aW9uOiBBbnlBY3Rpb25cbik6IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgPT4ge1xuICBpZiAoc2VhcmNoQ29tcGxldGVkLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBkYXNoYm9hcmRUaXRsZXM6IGFjdGlvbi5wYXlsb2FkLmRhc2hib2FyZHMubWFwKChkKSA9PiBkLnRpdGxlKSxcbiAgICAgIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSWNvbiwgTGluaywgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldFBhbmVsUGx1Z2luTm90Rm91bmQgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGFuZWwvY29tcG9uZW50cy9QYW5lbFBsdWdpbkVycm9yJztcbmltcG9ydCB7IFBhbmVsVHlwZUNhcmQgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGFuZWwvY29tcG9uZW50cy9WaXpUeXBlUGlja2VyL1BhbmVsVHlwZUNhcmQnO1xuXG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsIH0gZnJvbSAnLi4vRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbENhcmRQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ2xpY2s6IChwYW5lbDogTGlicmFyeUVsZW1lbnREVE8pID0+IHZvaWQ7XG4gIG9uRGVsZXRlPzogKHBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTykgPT4gdm9pZDtcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTGlicmFyeVBhbmVsQ2FyZDogUmVhY3QuRkM8TGlicmFyeVBhbmVsQ2FyZFByb3BzICYgeyBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9PiA9ICh7XG4gIGxpYnJhcnlQYW5lbCxcbiAgb25DbGljayxcbiAgb25EZWxldGUsXG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zLFxufSkgPT4ge1xuICBjb25zdCBbc2hvd0RlbGV0aW9uTW9kYWwsIHNldFNob3dEZWxldGlvbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkRlbGV0ZVBhbmVsID0gKCkgPT4ge1xuICAgIG9uRGVsZXRlPy4obGlicmFyeVBhbmVsKTtcbiAgICBzZXRTaG93RGVsZXRpb25Nb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcGFuZWxQbHVnaW4gPSBjb25maWcucGFuZWxzW2xpYnJhcnlQYW5lbC5tb2RlbC50eXBlXSA/PyBnZXRQYW5lbFBsdWdpbk5vdEZvdW5kKGxpYnJhcnlQYW5lbC5tb2RlbC50eXBlKS5tZXRhO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYW5lbFR5cGVDYXJkXG4gICAgICAgIGlzQ3VycmVudD17ZmFsc2V9XG4gICAgICAgIHRpdGxlPXtsaWJyYXJ5UGFuZWwubmFtZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2xpYnJhcnlQYW5lbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgcGx1Z2luPXtwYW5lbFBsdWdpbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaz8uKGxpYnJhcnlQYW5lbCl9XG4gICAgICAgIG9uRGVsZXRlPXtzaG93U2Vjb25kYXJ5QWN0aW9ucyA/ICgpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKHRydWUpIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICA8Rm9sZGVyTGluayBsaWJyYXJ5UGFuZWw9e2xpYnJhcnlQYW5lbH0gLz5cbiAgICAgIDwvUGFuZWxUeXBlQ2FyZD5cbiAgICAgIHtzaG93RGVsZXRpb25Nb2RhbCAmJiAoXG4gICAgICAgIDxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFxuICAgICAgICAgIGxpYnJhcnlQYW5lbD17bGlicmFyeVBhbmVsfVxuICAgICAgICAgIG9uQ29uZmlybT17b25EZWxldGVQYW5lbH1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgRm9sZGVyTGlua1Byb3BzIHtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbn1cblxuZnVuY3Rpb24gRm9sZGVyTGluayh7IGxpYnJhcnlQYW5lbCB9OiBGb2xkZXJMaW5rUHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghbGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkICYmICFsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWxpYnJhcnlQYW5lbC5tZXRhLmZvbGRlclVpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgICAgPEljb24gbmFtZT17J2ZvbGRlcid9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvZGFzaGJvYXJkcy9mLyR7bGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkfWB9PlxuICAgICAgICA8SWNvbiBuYW1lPXsnZm9sZGVyLXVwbG9hZCd9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIG1ldGFDb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuXG4gICAgICBzdmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgfVxuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZnJvbSwgbWVyZ2UsIG9mLCBTdWJzY3JpcHRpb24sIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaW5hbGl6ZSwgbWFwVG8sIG1lcmdlTWFwLCBzaGFyZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBkZWxldGVMaWJyYXJ5UGFuZWwgYXMgYXBpRGVsZXRlTGlicmFyeVBhbmVsLCBnZXRMaWJyYXJ5UGFuZWxzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcblxuaW1wb3J0IHsgaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGluaXRTZWFyY2gsIHNlYXJjaENvbXBsZXRlZCB9IGZyb20gJy4vcmVkdWNlcic7XG5cbnR5cGUgRGlzcGF0Y2hSZXN1bHQgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pID0+IHZvaWQ7XG5pbnRlcmZhY2UgU2VhcmNoQXJncyB7XG4gIHBlclBhZ2U6IG51bWJlcjtcbiAgcGFnZTogbnVtYmVyO1xuICBzZWFyY2hTdHJpbmc6IHN0cmluZztcbiAgc29ydERpcmVjdGlvbj86IHN0cmluZztcbiAgcGFuZWxGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgZm9sZGVyRmlsdGVyPzogc3RyaW5nW107XG4gIGN1cnJlbnRQYW5lbElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoRm9yTGlicmFyeVBhbmVscyhhcmdzOiBTZWFyY2hBcmdzKTogRGlzcGF0Y2hSZXN1bHQge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIGNvbnN0IGRhdGFPYnNlcnZhYmxlID0gZnJvbShcbiAgICAgIGdldExpYnJhcnlQYW5lbHMoe1xuICAgICAgICBzZWFyY2hTdHJpbmc6IGFyZ3Muc2VhcmNoU3RyaW5nLFxuICAgICAgICBwZXJQYWdlOiBhcmdzLnBlclBhZ2UsXG4gICAgICAgIHBhZ2U6IGFyZ3MucGFnZSxcbiAgICAgICAgZXhjbHVkZVVpZDogYXJncy5jdXJyZW50UGFuZWxJZCxcbiAgICAgICAgc29ydERpcmVjdGlvbjogYXJncy5zb3J0RGlyZWN0aW9uLFxuICAgICAgICB0eXBlRmlsdGVyOiBhcmdzLnBhbmVsRmlsdGVyLFxuICAgICAgICBmb2xkZXJGaWx0ZXI6IGFyZ3MuZm9sZGVyRmlsdGVyLFxuICAgICAgfSlcbiAgICApLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoeyBwZXJQYWdlLCBlbGVtZW50czogbGlicmFyeVBhbmVscywgcGFnZSwgdG90YWxDb3VudCB9KSA9PlxuICAgICAgICBvZihzZWFyY2hDb21wbGV0ZWQoeyBsaWJyYXJ5UGFuZWxzLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50IH0pKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBvZihzZWFyY2hDb21wbGV0ZWQoeyAuLi5pbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgcGFnZTogYXJncy5wYWdlLCBwZXJQYWdlOiBhcmdzLnBlclBhZ2UgfSkpO1xuICAgICAgfSksXG4gICAgICBmaW5hbGl6ZSgoKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKSksIC8vIG1ha2Ugc3VyZSB3ZSB1bnN1YnNjcmliZVxuICAgICAgc2hhcmUoKVxuICAgICk7XG5cbiAgICBzdWJzY3JpcHRpb24uYWRkKFxuICAgICAgLy8gSWYgNTBtcyB3aXRob3V0IGEgcmVzcG9uc2UgZGlzcGF0Y2ggYSBsb2FkaW5nIHN0YXRlXG4gICAgICAvLyBtYXBUbyB3aWxsIHRyYW5zbGF0ZSB0aGUgdGltZXIgZXZlbnQgaW50byBhIGxvYWRpbmcgc3RhdGVcbiAgICAgIC8vIHRha2VVbnRpbCB3aWxsIGNhbmNlbCB0aGUgdGltZXIgZW1pdCB3aGVuIGZpcnN0IHJlc3BvbnNlIGlzIHJlY2VpdmVkIG9uIHRoZSBkYXRhT2JzZXJ2YWJsZVxuICAgICAgbWVyZ2UodGltZXIoNTApLnBpcGUobWFwVG8oaW5pdFNlYXJjaCgpKSwgdGFrZVVudGlsKGRhdGFPYnNlcnZhYmxlKSksIGRhdGFPYnNlcnZhYmxlKS5zdWJzY3JpYmUoZGlzcGF0Y2gpXG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpYnJhcnlQYW5lbCh1aWQ6IHN0cmluZywgYXJnczogU2VhcmNoQXJncyk6IERpc3BhdGNoUmVzdWx0IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGlEZWxldGVMaWJyYXJ5UGFuZWwodWlkKTtcbiAgICAgIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMoYXJncykoZGlzcGF0Y2gpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXN5bmNEaXNwYXRjaGVyKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uOiBhbnkpIHtcbiAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gpO1xuICAgIH1cbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgTGlicmFyeUVsZW1lbnREVE8gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSB7XG4gIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlO1xuICBsaWJyYXJ5UGFuZWxzOiBMaWJyYXJ5RWxlbWVudERUT1tdO1xuICB0b3RhbENvdW50OiBudW1iZXI7XG4gIHBlclBhZ2U6IG51bWJlcjtcbiAgcGFnZTogbnVtYmVyO1xuICBudW1iZXJPZlBhZ2VzOiBudW1iZXI7XG4gIGN1cnJlbnRQYW5lbElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGU6IExpYnJhcnlQYW5lbHNWaWV3U3RhdGUgPSB7XG4gIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcsXG4gIGxpYnJhcnlQYW5lbHM6IFtdLFxuICB0b3RhbENvdW50OiAwLFxuICBwZXJQYWdlOiA0MCxcbiAgcGFnZTogMSxcbiAgbnVtYmVyT2ZQYWdlczogMCxcbiAgY3VycmVudFBhbmVsSWQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0U2VhcmNoID0gY3JlYXRlQWN0aW9uKCdsaWJyYXJ5UGFuZWxzL3ZpZXcvaW5pdFNlYXJjaCcpO1xuZXhwb3J0IGNvbnN0IHNlYXJjaENvbXBsZXRlZCA9IGNyZWF0ZUFjdGlvbjxcbiAgT21pdDxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCAnY3VycmVudFBhbmVsSWQnIHwgJ3NlYXJjaFN0cmluZycgfCAnbG9hZGluZ1N0YXRlJyB8ICdudW1iZXJPZlBhZ2VzJz5cbj4oJ2xpYnJhcnlQYW5lbHMvdmlldy9zZWFyY2hDb21wbGV0ZWQnKTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhZ2UgPSBjcmVhdGVBY3Rpb248UGljazxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCAncGFnZSc+PignbGlicmFyeVBhbmVscy92aWV3L2NoYW5nZVBhZ2UnKTtcblxuZXhwb3J0IGNvbnN0IGxpYnJhcnlQYW5lbHNWaWV3UmVkdWNlciA9IChzdGF0ZTogTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgYWN0aW9uOiBBbnlBY3Rpb24pID0+IHtcbiAgaWYgKGluaXRTZWFyY2gubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Mb2FkaW5nIH07XG4gIH1cblxuICBpZiAoc2VhcmNoQ29tcGxldGVkLm1hdGNoKGFjdGlvbikpIHtcbiAgICBjb25zdCB7IGxpYnJhcnlQYW5lbHMsIHBhZ2UsIHBlclBhZ2UsIHRvdGFsQ291bnQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIGNvbnN0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwodG90YWxDb3VudCAvIHBlclBhZ2UpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGxpYnJhcnlQYW5lbHMsXG4gICAgICBwZXJQYWdlLFxuICAgICAgdG90YWxDb3VudCxcbiAgICAgIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgICBudW1iZXJPZlBhZ2VzLFxuICAgICAgcGFnZTogcGFnZSA+IG51bWJlck9mUGFnZXMgPyBwYWdlIC0gMSA6IHBhZ2UsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChjaGFuZ2VQYWdlLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGFnZTogYWN0aW9uLnBheWxvYWQucGFnZSB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIG15VGFibGU6IGNzc2BcbiAgICAgIG1heC1oZWlnaHQ6IDIwNHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXIucmFkaXVzLnNtfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJnM307XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzF9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLm1kfTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICB0aGVhZCB7XG4gICAgICAgIGNvbG9yOiAjNTM4YWRlO1xuICAgICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICAgIH1cblxuICAgICAgdGgsXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxM3B4O1xuICAgICAgICBoZWlnaHQ6ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgICB9XG5cbiAgICAgIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzJ9O1xuICAgICAgfVxuICAgIGAsXG4gICAgbm90ZVRleHRib3g6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgYCxcbiAgICB0ZXh0SW5mbzogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICBgLFxuICAgIGRhc2hib2FyZFNlYXJjaDogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIG1vZGFsOiBjc3NgXG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgYCxcbiAgICBtb2RhbFRleHQ6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmhlYWRpbmcuaDR9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygke3RoZW1lLnNwYWNpbmcuZH0gKiAyKTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcuZH07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEFwcEV2ZW50cywgR3JhZmFuYVRoZW1lMiwgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IHJlcG9ydEludGVyYWN0aW9uIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEZpZWxkLFxuICBGaWxlVXBsb2FkLFxuICBGb3JtLFxuICBIb3Jpem9udGFsR3JvdXAsXG4gIElucHV0LFxuICBTcGlubmVyLFxuICBzdHlsZXNGYWN0b3J5LFxuICBUZXh0QXJlYSxcbiAgVGhlbWVhYmxlMixcbiAgVmVydGljYWxHcm91cCxcbiAgd2l0aFRoZW1lMixcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGFwcEV2ZW50cyBmcm9tICdhcHAvY29yZS9hcHBfZXZlbnRzJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvYWN0aW9ucy9jbGVhblVwJztcblxuaW1wb3J0IHsgSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXcnO1xuaW1wb3J0IHsgZmV0Y2hHY29tRGFzaGJvYXJkLCBpbXBvcnREYXNoYm9hcmRKc29uIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHZhbGlkYXRlRGFzaGJvYXJkSnNvbiwgdmFsaWRhdGVHY29tRGFzaGJvYXJkIH0gZnJvbSAnLi91dGlscy92YWxpZGF0aW9uJztcblxudHlwZSBEYXNoYm9hcmRJbXBvcnRQYWdlUm91dGVTZWFyY2hQYXJhbXMgPSB7XG4gIGdjb21EYXNoYm9hcmRJZD86IHN0cmluZztcbn07XG5cbnR5cGUgT3duUHJvcHMgPSBUaGVtZWFibGUyICYgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8e30sIERhc2hib2FyZEltcG9ydFBhZ2VSb3V0ZVNlYXJjaFBhcmFtcz47XG5cbmNvbnN0IElNUE9SVF9TVEFSVEVEX0VWRU5UX05BTUUgPSAnZGFzaGJvYXJkX2ltcG9ydF9sb2FkZWQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ2ltcG9ydCcsIHVuZGVmaW5lZCwgdHJ1ZSksXG4gIGxvYWRpbmdTdGF0ZTogc3RhdGUuaW1wb3J0RGFzaGJvYXJkLnN0YXRlLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZmV0Y2hHY29tRGFzaGJvYXJkLFxuICBpbXBvcnREYXNoYm9hcmRKc29uLFxuICBjbGVhblVwQWN0aW9uLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbnR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5jbGFzcyBVbnRoZW1lZERhc2hib2FyZEltcG9ydCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgZ2NvbURhc2hib2FyZElkIH0gPSB0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zO1xuICAgIGlmIChnY29tRGFzaGJvYXJkSWQpIHtcbiAgICAgIHRoaXMuZ2V0R2NvbURhc2hib2FyZCh7IGdjb21EYXNoYm9hcmQ6IGdjb21EYXNoYm9hcmRJZCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yOiAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLmltcG9ydERhc2hib2FyZCB9KTtcbiAgfVxuXG4gIG9uRmlsZVVwbG9hZCA9IChldmVudDogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgcmVwb3J0SW50ZXJhY3Rpb24oSU1QT1JUX1NUQVJURURfRVZFTlRfTkFNRSwge1xuICAgICAgaW1wb3J0X3NvdXJjZTogJ2pzb25fdXBsb2FkZWQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBpbXBvcnREYXNoYm9hcmRKc29uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmZpbGVzICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlsZXMubGVuZ3RoID4gMCAmJiBldmVudC5jdXJyZW50VGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBjb25zdCByZWFkZXJPbkxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoZTogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IGRhc2hib2FyZDogYW55O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXNoYm9hcmQgPSBKU09OLnBhcnNlKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgIGFwcEV2ZW50cy5lbWl0KEFwcEV2ZW50cy5hbGVydEVycm9yLCBbXG4gICAgICAgICAgICAgICAgJ0ltcG9ydCBmYWlsZWQnLFxuICAgICAgICAgICAgICAgICdKU09OIC0+IEpTIFNlcmlhbGl6YXRpb24gZmFpbGVkOiAnICsgZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGltcG9ydERhc2hib2FyZEpzb24oZGFzaGJvYXJkKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICByZWFkZXIub25sb2FkID0gcmVhZGVyT25Mb2FkKCk7XG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0RGFzaGJvYXJkRnJvbUpzb24gPSAoZm9ybURhdGE6IHsgZGFzaGJvYXJkSnNvbjogc3RyaW5nIH0pID0+IHtcbiAgICByZXBvcnRJbnRlcmFjdGlvbihJTVBPUlRfU1RBUlRFRF9FVkVOVF9OQU1FLCB7XG4gICAgICBpbXBvcnRfc291cmNlOiAnanNvbl9wYXN0ZWQnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy5pbXBvcnREYXNoYm9hcmRKc29uKEpTT04ucGFyc2UoZm9ybURhdGEuZGFzaGJvYXJkSnNvbikpO1xuICB9O1xuXG4gIGdldEdjb21EYXNoYm9hcmQgPSAoZm9ybURhdGE6IHsgZ2NvbURhc2hib2FyZDogc3RyaW5nIH0pID0+IHtcbiAgICByZXBvcnRJbnRlcmFjdGlvbihJTVBPUlRfU1RBUlRFRF9FVkVOVF9OQU1FLCB7XG4gICAgICBpbXBvcnRfc291cmNlOiAnZ2NvbScsXG4gICAgfSk7XG5cbiAgICBsZXQgZGFzaGJvYXJkSWQ7XG4gICAgY29uc3QgbWF0Y2ggPSAvKF5cXGQrJCl8ZGFzaGJvYXJkc1xcLyhcXGQrKS8uZXhlYyhmb3JtRGF0YS5nY29tRGFzaGJvYXJkKTtcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgIGRhc2hib2FyZElkID0gbWF0Y2hbMV07XG4gICAgfSBlbHNlIGlmIChtYXRjaCAmJiBtYXRjaFsyXSkge1xuICAgICAgZGFzaGJvYXJkSWQgPSBtYXRjaFsyXTtcbiAgICB9XG5cbiAgICBpZiAoZGFzaGJvYXJkSWQpIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hHY29tRGFzaGJvYXJkKGRhc2hib2FyZElkKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVySW1wb3J0Rm9ybSgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSBpbXBvcnRTdHlsZXModGhpcy5wcm9wcy50aGVtZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PlxuICAgICAgICAgIDxGaWxlVXBsb2FkIGFjY2VwdD1cImFwcGxpY2F0aW9uL2pzb25cIiBvbkZpbGVVcGxvYWQ9e3RoaXMub25GaWxlVXBsb2FkfT5cbiAgICAgICAgICAgIFVwbG9hZCBKU09OIGZpbGVcbiAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuZ2V0R2NvbURhc2hib2FyZH0gZGVmYXVsdFZhbHVlcz17eyBnY29tRGFzaGJvYXJkOiAnJyB9fT5cbiAgICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJbXBvcnQgdmlhIGdyYWZhbmEuY29tXCJcbiAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5nY29tRGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ2NvbURhc2hib2FyZCAmJiBlcnJvcnMuZ2NvbURhc2hib2FyZC5tZXNzYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cInVybC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdyYWZhbmEuY29tIGRhc2hib2FyZCBVUkwgb3IgSURcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdnY29tRGFzaGJvYXJkJywge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0EgR3JhZmFuYSBkYXNoYm9hcmQgVVJMIG9yIElEIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlR2NvbURhc2hib2FyZCxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17PEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9hZDwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuZ2V0RGFzaGJvYXJkRnJvbUpzb259IGRlZmF1bHRWYWx1ZXM9e3sgZGFzaGJvYXJkSnNvbjogJycgfX0+XG4gICAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkltcG9ydCB2aWEgcGFuZWwganNvblwiXG4gICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5kYXNoYm9hcmRKc29ufVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5kYXNoYm9hcmRKc29uICYmIGVycm9ycy5kYXNoYm9hcmRKc29uLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZGFzaGJvYXJkSnNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ05lZWQgYSBkYXNoYm9hcmQgSlNPTiBtb2RlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlRGFzaGJvYXJkSnNvbixcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5EYXNoYm9hcmRJbXBvcnRQYWdlLnRleHRhcmVhfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImRhc2hib2FyZC1qc29uLXRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLkRhc2hib2FyZEltcG9ydFBhZ2Uuc3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIExvYWRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZ1N0YXRlLCBuYXZNb2RlbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgICB7bG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8VmVydGljYWxHcm91cCBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9ezMyfSAvPlxuICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtbTG9hZGluZ1N0YXRlLkVycm9yLCBMb2FkaW5nU3RhdGUuTm90U3RhcnRlZF0uaW5jbHVkZXMobG9hZGluZ1N0YXRlKSAmJiB0aGlzLnJlbmRlckltcG9ydEZvcm0oKX1cbiAgICAgICAgICB7bG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuRG9uZSAmJiA8SW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXcgLz59XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IERhc2hib2FyZEltcG9ydFVuQ29ubmVjdGVkID0gd2l0aFRoZW1lMihVbnRoZW1lZERhc2hib2FyZEltcG9ydCk7XG5jb25zdCBEYXNoYm9hcmRJbXBvcnQgPSBjb25uZWN0b3IoRGFzaGJvYXJkSW1wb3J0VW5Db25uZWN0ZWQpO1xuRGFzaGJvYXJkSW1wb3J0LmRpc3BsYXlOYW1lID0gJ0Rhc2hib2FyZEltcG9ydCc7XG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRJbXBvcnQ7XG5cbmNvbnN0IGltcG9ydFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgb3B0aW9uOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGAsXG4gIH07XG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGlja2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBFeHByZXNzaW9uRGF0YXNvdXJjZVJlZiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL0RhdGFTb3VyY2VXaXRoQmFja2VuZCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEZpZWxkLFxuICBGb3JtQVBJLFxuICBGb3JtRmllbGRFcnJvcnMsXG4gIEZvcm1zT25TdWJtaXQsXG4gIEhvcml6b250YWxHcm91cCxcbiAgSW5wdXQsXG4gIElucHV0Q29udHJvbCxcbiAgTGVnZW5kLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBGb2xkZXJQaWNrZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1NlbGVjdC9Gb2xkZXJQaWNrZXInO1xuXG5pbXBvcnQge1xuICBEYXNoYm9hcmRJbnB1dCxcbiAgRGFzaGJvYXJkSW5wdXRzLFxuICBEYXRhU291cmNlSW5wdXQsXG4gIEltcG9ydERhc2hib2FyZERUTyxcbiAgTGlicmFyeVBhbmVsSW5wdXRTdGF0ZSxcbn0gZnJvbSAnLi4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgdmFsaWRhdGVUaXRsZSwgdmFsaWRhdGVVaWQgfSBmcm9tICcuLi91dGlscy92YWxpZGF0aW9uJztcblxuaW1wb3J0IHsgSW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3QgfSBmcm9tICcuL0ltcG9ydERhc2hib2FyZExpYnJhcnlQYW5lbHNMaXN0JztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUGljazxGb3JtQVBJPEltcG9ydERhc2hib2FyZERUTz4sICdyZWdpc3RlcicgfCAnZXJyb3JzJyB8ICdjb250cm9sJyB8ICdnZXRWYWx1ZXMnIHwgJ3dhdGNoJz4ge1xuICB1aWRSZXNldDogYm9vbGVhbjtcbiAgaW5wdXRzOiBEYXNoYm9hcmRJbnB1dHM7XG4gIGluaXRpYWxGb2xkZXJJZDogbnVtYmVyO1xuXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xuICBvblVpZFJlc2V0OiAoKSA9PiB2b2lkO1xuICBvblN1Ym1pdDogRm9ybXNPblN1Ym1pdDxJbXBvcnREYXNoYm9hcmREVE8+O1xufVxuXG5leHBvcnQgY29uc3QgSW1wb3J0RGFzaGJvYXJkRm9ybTogRkM8UHJvcHM+ID0gKHtcbiAgcmVnaXN0ZXIsXG4gIGVycm9ycyxcbiAgY29udHJvbCxcbiAgZ2V0VmFsdWVzLFxuICB1aWRSZXNldCxcbiAgaW5wdXRzLFxuICBpbml0aWFsRm9sZGVySWQsXG4gIG9uVWlkUmVzZXQsXG4gIG9uQ2FuY2VsLFxuICBvblN1Ym1pdCxcbiAgd2F0Y2gsXG59KSA9PiB7XG4gIGNvbnN0IFtpc1N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgd2F0Y2hEYXRhU291cmNlcyA9IHdhdGNoKCdkYXRhU291cmNlcycpO1xuICBjb25zdCB3YXRjaEZvbGRlciA9IHdhdGNoKCdmb2xkZXInKTtcblxuICAvKlxuICAgIFRoaXMgdXNlRWZmZWN0IGlzIG5lZWRlZCBmb3Igb3ZlcndyaXRpbmcgYSBkYXNoYm9hcmQuIEl0XG4gICAgc3VibWl0cyB0aGUgZm9ybSBldmVuIGlmIHRoZXJlJ3MgdmFsaWRhdGlvbiBlcnJvcnMgb24gdGl0bGUgb3IgdWlkLlxuICAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1N1Ym1pdHRlZCAmJiAoZXJyb3JzLnRpdGxlIHx8IGVycm9ycy51aWQpKSB7XG4gICAgICBvblN1Ym1pdChnZXRWYWx1ZXMoKSwge30gYXMgYW55KTtcbiAgICB9XG4gIH0sIFtlcnJvcnMsIGdldFZhbHVlcywgaXNTdWJtaXR0ZWQsIG9uU3VibWl0XSk7XG4gIGNvbnN0IG5ld0xpYnJhcnlQYW5lbHMgPSBpbnB1dHM/LmxpYnJhcnlQYW5lbHM/LmZpbHRlcigoaSkgPT4gaS5zdGF0ZSA9PT0gTGlicmFyeVBhbmVsSW5wdXRTdGF0ZS5OZXcpID8/IFtdO1xuICBjb25zdCBleGlzdGluZ0xpYnJhcnlQYW5lbHMgPSBpbnB1dHM/LmxpYnJhcnlQYW5lbHM/LmZpbHRlcigoaSkgPT4gaS5zdGF0ZSA9PT0gTGlicmFyeVBhbmVsSW5wdXRTdGF0ZS5FeGl0cykgPz8gW107XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExlZ2VuZD5PcHRpb25zPC9MZWdlbmQ+XG4gICAgICA8RmllbGQgbGFiZWw9XCJOYW1lXCIgaW52YWxpZD17ISFlcnJvcnMudGl0bGV9IGVycm9yPXtlcnJvcnMudGl0bGUgJiYgZXJyb3JzLnRpdGxlLm1lc3NhZ2V9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3RpdGxlJywge1xuICAgICAgICAgICAgcmVxdWlyZWQ6ICdOYW1lIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiBhc3luYyAodjogc3RyaW5nKSA9PiBhd2FpdCB2YWxpZGF0ZVRpdGxlKHYsIGdldFZhbHVlcygpLmZvbGRlci5pZCksXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5JbXBvcnREYXNoYm9hcmRGb3JtLm5hbWV9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkIGxhYmVsPVwiRm9sZGVyXCI+XG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICA8Rm9sZGVyUGlja2VyIHsuLi5maWVsZH0gZW5hYmxlQ3JlYXRlTmV3IGluaXRpYWxGb2xkZXJJZD17aW5pdGlhbEZvbGRlcklkfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImZvbGRlclwiXG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGRcbiAgICAgICAgbGFiZWw9XCJVbmlxdWUgaWRlbnRpZmllciAoVUlEKVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHVuaXF1ZSBpZGVudGlmaWVyIChVSUQpIG9mIGEgZGFzaGJvYXJkIGNhbiBiZSB1c2VkIGZvciB1bmlxdWVseSBpZGVudGlmeSBhIGRhc2hib2FyZCBiZXR3ZWVuIG11bHRpcGxlIEdyYWZhbmEgaW5zdGFsbHMuXG4gICAgICAgICAgICAgICAgVGhlIFVJRCBhbGxvd3MgaGF2aW5nIGNvbnNpc3RlbnQgVVJMcyBmb3IgYWNjZXNzaW5nIGRhc2hib2FyZHMgc28gY2hhbmdpbmcgdGhlIHRpdGxlIG9mIGEgZGFzaGJvYXJkIHdpbGwgbm90IGJyZWFrIGFueVxuICAgICAgICAgICAgICAgIGJvb2ttYXJrZWQgbGlua3MgdG8gdGhhdCBkYXNoYm9hcmQuXCJcbiAgICAgICAgaW52YWxpZD17ISFlcnJvcnMudWlkfVxuICAgICAgICBlcnJvcj17ZXJyb3JzLnVpZCAmJiBlcnJvcnMudWlkLm1lc3NhZ2V9XG4gICAgICA+XG4gICAgICAgIDw+XG4gICAgICAgICAgeyF1aWRSZXNldCA/IChcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3VpZCcsIHsgdmFsaWRhdGU6IGFzeW5jICh2OiBzdHJpbmcpID0+IGF3YWl0IHZhbGlkYXRlVWlkKHYpIH0pfVxuICAgICAgICAgICAgICBhZGRvbkFmdGVyPXshdWlkUmVzZXQgJiYgPEJ1dHRvbiBvbkNsaWNrPXtvblVpZFJlc2V0fT5DaGFuZ2UgdWlkPC9CdXR0b24+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcigndWlkJywgeyByZXF1aXJlZDogdHJ1ZSwgdmFsaWRhdGU6IGFzeW5jICh2OiBzdHJpbmcpID0+IGF3YWl0IHZhbGlkYXRlVWlkKHYpIH0pfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIHtpbnB1dHMuZGF0YVNvdXJjZXMgJiZcbiAgICAgICAgaW5wdXRzLmRhdGFTb3VyY2VzLm1hcCgoaW5wdXQ6IERhdGFTb3VyY2VJbnB1dCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmIChpbnB1dC5wbHVnaW5JZCA9PT0gRXhwcmVzc2lvbkRhdGFzb3VyY2VSZWYudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2VPcHRpb24gPSBgZGF0YVNvdXJjZXNbJHtpbmRleH1dYDtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gd2F0Y2hEYXRhU291cmNlcyA/PyBbXTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtpbnB1dC5sYWJlbH1cbiAgICAgICAgICAgICAga2V5PXtkYXRhU291cmNlT3B0aW9ufVxuICAgICAgICAgICAgICBpbnZhbGlkPXtlcnJvcnMuZGF0YVNvdXJjZXMgJiYgISFlcnJvcnMuZGF0YVNvdXJjZXNbaW5kZXhdfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmRhdGFTb3VyY2VzICYmIGVycm9ycy5kYXRhU291cmNlc1tpbmRleF0gJiYgJ0EgZGF0YSBzb3VyY2UgaXMgcmVxdWlyZWQnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgbmFtZT17ZGF0YVNvdXJjZU9wdGlvbiBhcyBhbnl9XG4gICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICBub0RlZmF1bHQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpbnB1dC5pbmZvfVxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5JZD17aW5wdXQucGx1Z2luSWR9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnRbaW5kZXhdPy51aWR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogdHJ1ZSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIHtpbnB1dHMuY29uc3RhbnRzICYmXG4gICAgICAgIGlucHV0cy5jb25zdGFudHMubWFwKChpbnB1dDogRGFzaGJvYXJkSW5wdXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29uc3RhbnRJbmRleCA9IGBjb25zdGFudHNbJHtpbmRleH1dYDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtpbnB1dC5sYWJlbH1cbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5jb25zdGFudHMgJiYgZXJyb3JzLmNvbnN0YW50c1tpbmRleF0gJiYgYCR7aW5wdXQubGFiZWx9IG5lZWRzIGEgdmFsdWVgfVxuICAgICAgICAgICAgICBpbnZhbGlkPXtlcnJvcnMuY29uc3RhbnRzICYmICEhZXJyb3JzLmNvbnN0YW50c1tpbmRleF19XG4gICAgICAgICAgICAgIGtleT17Y29uc3RhbnRJbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3Rlcihjb25zdGFudEluZGV4IGFzIGFueSwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gZGVmYXVsdFZhbHVlPXtpbnB1dC52YWx1ZX0gLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8SW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3RcbiAgICAgICAgaW5wdXRzPXtuZXdMaWJyYXJ5UGFuZWxzfVxuICAgICAgICBsYWJlbD1cIk5ldyBsaWJyYXJ5IHBhbmVsc1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiTGlzdCBvZiBuZXcgbGlicmFyeSBwYW5lbHMgdGhhdCB3aWxsIGdldCBpbXBvcnRlZC5cIlxuICAgICAgICBmb2xkZXJOYW1lPXt3YXRjaEZvbGRlci50aXRsZX1cbiAgICAgIC8+XG4gICAgICA8SW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3RcbiAgICAgICAgaW5wdXRzPXtleGlzdGluZ0xpYnJhcnlQYW5lbHN9XG4gICAgICAgIGxhYmVsPVwiRXhpc3RpbmcgbGlicmFyeSBwYW5lbHNcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkxpc3Qgb2YgZXhpc3RpbmcgbGlicmFyeSBwYW5lbHMuIFRoZXNlIHBhbmVscyBhcmUgbm90IGFmZmVjdGVkIGJ5IHRoZSBpbXBvcnQuXCJcbiAgICAgICAgZm9sZGVyTmFtZT17d2F0Y2hGb2xkZXIudGl0bGV9XG4gICAgICAvPlxuICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5JbXBvcnREYXNoYm9hcmRGb3JtLnN1Ym1pdH1cbiAgICAgICAgICB2YXJpYW50PXtnZXRCdXR0b25WYXJpYW50KGVycm9ycyl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Z2V0QnV0dG9uVGV4dChlcnJvcnMpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicmVzZXRcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25DYW5jZWx9PlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgIDwvPlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0QnV0dG9uVmFyaWFudChlcnJvcnM6IEZvcm1GaWVsZEVycm9yczxJbXBvcnREYXNoYm9hcmREVE8+KSB7XG4gIHJldHVybiBlcnJvcnMgJiYgKGVycm9ycy50aXRsZSB8fCBlcnJvcnMudWlkKSA/ICdkZXN0cnVjdGl2ZScgOiAncHJpbWFyeSc7XG59XG5cbmZ1bmN0aW9uIGdldEJ1dHRvblRleHQoZXJyb3JzOiBGb3JtRmllbGRFcnJvcnM8SW1wb3J0RGFzaGJvYXJkRFRPPikge1xuICByZXR1cm4gZXJyb3JzICYmIChlcnJvcnMudGl0bGUgfHwgZXJyb3JzLnVpZCkgPyAnSW1wb3J0IChPdmVyd3JpdGUpJyA6ICdJbXBvcnQnO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBMaWJyYXJ5UGFuZWxDYXJkIH0gZnJvbSAnLi4vLi4vbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxDYXJkL0xpYnJhcnlQYW5lbENhcmQnO1xuaW1wb3J0IHsgTGlicmFyeVBhbmVsSW5wdXQsIExpYnJhcnlQYW5lbElucHV0U3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9yZWR1Y2Vycyc7XG5cbmludGVyZmFjZSBJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdFByb3BzIHtcbiAgaW5wdXRzOiBMaWJyYXJ5UGFuZWxJbnB1dFtdO1xuICBsYWJlbDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBmb2xkZXJOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3Qoe1xuICBpbnB1dHMsXG4gIGxhYmVsLFxuICBkZXNjcmlwdGlvbixcbiAgZm9sZGVyTmFtZSxcbn06IEltcG9ydERhc2hib2FyZExpYnJhcnlQYW5lbHNMaXN0UHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghQm9vbGVhbihpbnB1dHM/Lmxlbmd0aCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZXJ9PlxuICAgICAgPEZpZWxkIGxhYmVsPXtsYWJlbH0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufT5cbiAgICAgICAgPD5cbiAgICAgICAgICB7aW5wdXRzLm1hcCgoaW5wdXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaWJyYXJ5UGFuZWxJbmRleCA9IGBlbGVtZW50c1ske2luZGV4fV1gO1xuICAgICAgICAgICAgY29uc3QgbGlicmFyeVBhbmVsID1cbiAgICAgICAgICAgICAgaW5wdXQuc3RhdGUgPT09IExpYnJhcnlQYW5lbElucHV0U3RhdGUuTmV3XG4gICAgICAgICAgICAgICAgPyB7IC4uLmlucHV0Lm1vZGVsLCBtZXRhOiB7IC4uLmlucHV0Lm1vZGVsLm1ldGEsIGZvbGRlck5hbWU6IGZvbGRlck5hbWUgPz8gJ0dlbmVyYWwnIH0gfVxuICAgICAgICAgICAgICAgIDogeyAuLi5pbnB1dC5tb2RlbCB9O1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfSBrZXk9e2xpYnJhcnlQYW5lbEluZGV4fT5cbiAgICAgICAgICAgICAgICA8TGlicmFyeVBhbmVsQ2FyZCBsaWJyYXJ5UGFuZWw9e2xpYnJhcnlQYW5lbH0gb25DbGljaz17KCkgPT4gdW5kZWZpbmVkfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9GaWVsZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgc3BhY2VyOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gICAgaXRlbTogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZGF0ZVRpbWVGb3JtYXQgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSwgcmVwb3J0SW50ZXJhY3Rpb24gfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEZvcm0sIExlZ2VuZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBjbGVhckxvYWRlZERhc2hib2FyZCwgaW1wb3J0RGFzaGJvYXJkIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRTb3VyY2UsIEltcG9ydERhc2hib2FyZERUTyB9IGZyb20gJy4uL3N0YXRlL3JlZHVjZXJzJztcblxuaW1wb3J0IHsgSW1wb3J0RGFzaGJvYXJkRm9ybSB9IGZyb20gJy4vSW1wb3J0RGFzaGJvYXJkRm9ybSc7XG5cbmNvbnN0IElNUE9SVF9GSU5JU0hFRF9FVkVOVF9OQU1FID0gJ2Rhc2hib2FyZF9pbXBvcnRfaW1wb3J0ZWQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHtcbiAgY29uc3Qgc2VhcmNoT2JqID0gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpO1xuXG4gIHJldHVybiB7XG4gICAgZGFzaGJvYXJkOiBzdGF0ZS5pbXBvcnREYXNoYm9hcmQuZGFzaGJvYXJkLFxuICAgIG1ldGE6IHN0YXRlLmltcG9ydERhc2hib2FyZC5tZXRhLFxuICAgIHNvdXJjZTogc3RhdGUuaW1wb3J0RGFzaGJvYXJkLnNvdXJjZSxcbiAgICBpbnB1dHM6IHN0YXRlLmltcG9ydERhc2hib2FyZC5pbnB1dHMsXG4gICAgZm9sZGVyOiBzZWFyY2hPYmouZm9sZGVySWQgPyB7IGlkOiBOdW1iZXIoc2VhcmNoT2JqLmZvbGRlcklkKSB9IDogeyBpZDogMCB9LFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBjbGVhckxvYWRlZERhc2hib2FyZCxcbiAgaW1wb3J0RGFzaGJvYXJkLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbnR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgdWlkUmVzZXQ6IGJvb2xlYW47XG59XG5cbmNsYXNzIEltcG9ydERhc2hib2FyZE92ZXJ2aWV3VW5Db25uZWN0ZWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgdWlkUmVzZXQ6IGZhbHNlLFxuICB9O1xuXG4gIG9uU3VibWl0ID0gKGZvcm06IEltcG9ydERhc2hib2FyZERUTykgPT4ge1xuICAgIHJlcG9ydEludGVyYWN0aW9uKElNUE9SVF9GSU5JU0hFRF9FVkVOVF9OQU1FKTtcblxuICAgIHRoaXMucHJvcHMuaW1wb3J0RGFzaGJvYXJkKGZvcm0pO1xuICB9O1xuXG4gIG9uQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2xlYXJMb2FkZWREYXNoYm9hcmQoKTtcbiAgfTtcblxuICBvblVpZFJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB1aWRSZXNldDogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXNoYm9hcmQsIGlucHV0cywgbWV0YSwgc291cmNlLCBmb2xkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1aWRSZXNldCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7c291cmNlID09PSBEYXNoYm9hcmRTb3VyY2UuR2NvbSAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyNHB4JyB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMZWdlbmQ+XG4gICAgICAgICAgICAgICAgSW1wb3J0aW5nIGRhc2hib2FyZCBmcm9teycgJ31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZ3JhZmFuYS5jb20vZGFzaGJvYXJkcy8ke2Rhc2hib2FyZC5nbmV0SWR9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEdyYWZhbmEuY29tXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xlZ2VuZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlB1Ymxpc2hlZCBieTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e21ldGEub3JnTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlVwZGF0ZWQgb248L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntkYXRlVGltZUZvcm1hdChtZXRhLnVwZGF0ZWRBdCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWVzPXt7IC4uLmRhc2hib2FyZCwgY29uc3RhbnRzOiBbXSwgZGF0YVNvdXJjZXM6IFtdLCBlbGVtZW50czogW10sIGZvbGRlcjogZm9sZGVyIH19XG4gICAgICAgICAgdmFsaWRhdGVPbk1vdW50XG4gICAgICAgICAgdmFsaWRhdGVGaWVsZHNPbk1vdW50PXtbJ3RpdGxlJywgJ3VpZCddfVxuICAgICAgICAgIHZhbGlkYXRlT249XCJvbkNoYW5nZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycywgY29udHJvbCwgd2F0Y2gsIGdldFZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgICA8SW1wb3J0RGFzaGJvYXJkRm9ybVxuICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICBnZXRWYWx1ZXM9e2dldFZhbHVlc31cbiAgICAgICAgICAgICAgdWlkUmVzZXQ9e3VpZFJlc2V0fVxuICAgICAgICAgICAgICBpbnB1dHM9e2lucHV0c31cbiAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMub25DYW5jZWx9XG4gICAgICAgICAgICAgIG9uVWlkUmVzZXQ9e3RoaXMub25VaWRSZXNldH1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgIHdhdGNoPXt3YXRjaH1cbiAgICAgICAgICAgICAgaW5pdGlhbEZvbGRlcklkPXtmb2xkZXIuaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEltcG9ydERhc2hib2FyZE92ZXJ2aWV3ID0gY29ubmVjdG9yKEltcG9ydERhc2hib2FyZE92ZXJ2aWV3VW5Db25uZWN0ZWQpO1xuSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXcuZGlzcGxheU5hbWUgPSAnSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXcnO1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyB2YWxpZGF0aW9uU3J2IH0gZnJvbSAnLi4vc2VydmljZXMvVmFsaWRhdGlvblNydic7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZURhc2hib2FyZEpzb24gPSAoanNvbjogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgSlNPTi5wYXJzZShqc29uKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ05vdCB2YWxpZCBKU09OJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlR2NvbURhc2hib2FyZCA9IChnY29tRGFzaGJvYXJkOiBzdHJpbmcpID0+IHtcbiAgLy8gRnJvbSBEYXNoYm9hcmRJbXBvcnRDdHJsXG4gIGNvbnN0IG1hdGNoID0gLyheXFxkKyQpfGRhc2hib2FyZHNcXC8oXFxkKykvLmV4ZWMoZ2NvbURhc2hib2FyZCk7XG5cbiAgcmV0dXJuIG1hdGNoICYmIChtYXRjaFsxXSB8fCBtYXRjaFsyXSkgPyB0cnVlIDogJ0NvdWxkIG5vdCBmaW5kIGEgdmFsaWQgR3JhZmFuYS5jb20gSUQnO1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlVGl0bGUgPSAobmV3VGl0bGU6IHN0cmluZywgZm9sZGVySWQ6IG51bWJlcikgPT4ge1xuICByZXR1cm4gdmFsaWRhdGlvblNydlxuICAgIC52YWxpZGF0ZU5ld0Rhc2hib2FyZE5hbWUoZm9sZGVySWQsIG5ld1RpdGxlKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgaWYgKGVycm9yLnR5cGUgPT09ICdFWElTVElORycpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVVaWQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gZ2V0QmFja2VuZFNydigpXG4gICAgLmdldChgL2FwaS9kYXNoYm9hcmRzL3VpZC8ke3ZhbHVlfWApXG4gICAgLnRoZW4oKGV4aXN0aW5nRGFzaGJvYXJkKSA9PiB7XG4gICAgICByZXR1cm4gYERhc2hib2FyZCBuYW1lZCAnJHtleGlzdGluZ0Rhc2hib2FyZD8uZGFzaGJvYXJkLnRpdGxlfScgaW4gZm9sZGVyICcke2V4aXN0aW5nRGFzaGJvYXJkPy5tZXRhLmZvbGRlclRpdGxlfScgaGFzIHRoZSBzYW1lIFVJRGA7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBlcnJvci5pc0hhbmRsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUsIFBhbmVsUGx1Z2luTWV0YSwgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgUGx1Z2luU2lnbmF0dXJlQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQbHVnaW5TdGF0ZUluZm8gfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9jb21wb25lbnRzL1BsdWdpblN0YXRlSW5mbyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlzQ3VycmVudDogYm9vbGVhbjtcbiAgcGx1Z2luOiBQYW5lbFBsdWdpbk1ldGE7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9uQ2xpY2s6IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PjtcbiAgb25EZWxldGU/OiAoKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNob3dCYWRnZT86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxUeXBlQ2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgaXNDdXJyZW50LFxuICB0aXRsZSxcbiAgcGx1Z2luLFxuICBvbkNsaWNrLFxuICBvbkRlbGV0ZSxcbiAgZGlzYWJsZWQsXG4gIHNob3dCYWRnZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGNzc0NsYXNzID0gY3goe1xuICAgIFtzdHlsZXMuaXRlbV06IHRydWUsXG4gICAgW3N0eWxlcy5kaXNhYmxlZF06IGRpc2FibGVkIHx8IHBsdWdpbi5zdGF0ZSA9PT0gUGx1Z2luU3RhdGUuZGVwcmVjYXRlZCxcbiAgICBbc3R5bGVzLmN1cnJlbnRdOiBpc0N1cnJlbnQsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzc31cbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5jb21wb25lbnRzLlBsdWdpblZpc3VhbGl6YXRpb24uaXRlbShwbHVnaW4ubmFtZSl9XG4gICAgICBvbkNsaWNrPXtkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IG9uQ2xpY2t9XG4gICAgICB0aXRsZT17aXNDdXJyZW50ID8gJ0NsaWNrIGFnYWluIHRvIGNsb3NlIHRoaXMgc2VjdGlvbicgOiBwbHVnaW4ubmFtZX1cbiAgICA+XG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXtwbHVnaW4uaW5mby5sb2dvcy5zbWFsbH0gYWx0PVwiXCIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtQ29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICB7ZGVzY3JpcHRpb24gPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvc3Bhbj4gOiBudWxsfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93QmFkZ2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJhZGdlLCBkaXNhYmxlZCAmJiBzdHlsZXMuZGlzYWJsZWQpfT5cbiAgICAgICAgICA8UGFuZWxQbHVnaW5CYWRnZSBwbHVnaW49e3BsdWdpbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge29uRGVsZXRlICYmIChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBuYW1lPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIG9uRGVsZXRlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVCdXR0b259XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBidXR0b24gb24gcGFuZWwgdHlwZSBjYXJkXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYW5lbFR5cGVDYXJkLmRpc3BsYXlOYW1lID0gJ1BhbmVsVHlwZUNhcmQnO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpdGVtOiBjc3NgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIGJveC1zaGFkb3c6ICR7dGhlbWUuc2hhZG93cy56MX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdHJhbnNpdGlvbjogJHt0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydiYWNrZ3JvdW5kJ10sIHtcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0LFxuICAgICAgfSl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZW1waGFzaXplKHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeSwgMC4wMyl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgaXRlbUNvbnRlbnQ6IGNzc2BcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMCwgMSl9O1xuICAgIGAsXG4gICAgY3VycmVudDogY3NzYFxuICAgICAgbGFiZWw6IGN1cnJlbnRWaXN1YWxpemF0aW9uSXRlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnByaW1hcnkuYm9yZGVyfTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmFjdGlvbi5zZWxlY3RlZH07XG4gICAgYCxcbiAgICBkaXNhYmxlZDogY3NzYFxuICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBgLFxuICAgIG5hbWU6IGNzc2BcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtfTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gICAgZGVzY3JpcHRpb246IGNzc2BcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRMaWdodH07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDQuNWVtO1xuICAgIGAsXG4gICAgaW1nOiBjc3NgXG4gICAgICBtYXgtaGVpZ2h0OiAzOHB4O1xuICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICAgIGJhZGdlOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnByaW1hcnl9O1xuICAgIGAsXG4gICAgZGVsZXRlQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBgLFxuICB9O1xufTtcblxuaW50ZXJmYWNlIFBhbmVsUGx1Z2luQmFkZ2VQcm9wcyB7XG4gIHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhO1xufVxuXG5jb25zdCBQYW5lbFBsdWdpbkJhZGdlOiBSZWFjdC5GQzxQYW5lbFBsdWdpbkJhZGdlUHJvcHM+ID0gKHsgcGx1Z2luIH0pID0+IHtcbiAgaWYgKGlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUocGx1Z2luLnNpZ25hdHVyZSkpIHtcbiAgICByZXR1cm4gPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz47XG4gIH1cblxuICByZXR1cm4gPFBsdWdpblN0YXRlSW5mbyBzdGF0ZT17cGx1Z2luLnN0YXRlfSAvPjtcbn07XG5cblBhbmVsUGx1Z2luQmFkZ2UuZGlzcGxheU5hbWUgPSAnUGFuZWxQbHVnaW5CYWRnZSc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpblN0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWRnZSwgQmFkZ2VQcm9wcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU/OiBQbHVnaW5TdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IFBsdWdpblN0YXRlSW5mbzogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBnZXRGZWF0dXJlU3RhdGVJbmZvKHByb3BzLnN0YXRlKTtcblxuICBpZiAoIWRpc3BsYXkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiA8QmFkZ2UgY29sb3I9e2Rpc3BsYXkuY29sb3J9IHRpdGxlPXtkaXNwbGF5LnRvb2x0aXB9IHRleHQ9e2Rpc3BsYXkudGV4dH0gaWNvbj17ZGlzcGxheS5pY29ufSAvPjtcbn07XG5cbmZ1bmN0aW9uIGdldEZlYXR1cmVTdGF0ZUluZm8oc3RhdGU/OiBQbHVnaW5TdGF0ZSk6IEJhZGdlUHJvcHMgfCBudWxsIHtcbiAgc3dpdGNoIChzdGF0ZSkge1xuICAgIGNhc2UgUGx1Z2luU3RhdGUuZGVwcmVjYXRlZDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdEZXByZWNhdGVkJyxcbiAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5hbHBoYTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdBbHBoYScsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZXhwZXJpbWVudGFsIGFuZCBmdXR1cmUgdXBkYXRlcyBtaWdodCBub3QgYmUgYmFja3dhcmQgY29tcGF0aWJsZWAsXG4gICAgICB9O1xuICAgIGNhc2UgUGx1Z2luU3RhdGUuYmV0YTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdCZXRhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBjbG9zZSB0byBjb21wbGV0ZSBidXQgbm90IGZ1bGx5IHRlc3RlZGAsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJMb2FkaW5nU3RhdGUiLCJCdXR0b24iLCJNb2RhbCIsInVzZVN0eWxlcyIsImdldE1vZGFsU3R5bGVzIiwiYXN5bmNEaXNwYXRjaGVyIiwiZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyIsImRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciIsImluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlIiwiRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwiLCJsaWJyYXJ5UGFuZWwiLCJvbkRpc21pc3MiLCJvbkNvbmZpcm0iLCJzdHlsZXMiLCJkYXNoYm9hcmRUaXRsZXMiLCJsb2FkaW5nU3RhdGUiLCJkaXNwYXRjaCIsImFzeW5jRGlzcGF0Y2giLCJjb25uZWN0ZWQiLCJCb29sZWFuIiwibGVuZ3RoIiwiZG9uZSIsIkRvbmUiLCJtb2RhbCIsIkxvYWRpbmdJbmRpY2F0b3IiLCJDb25maXJtIiwibW9kYWxUZXh0IiwiSGFzQ29ubmVjdGVkRGFzaGJvYXJkcyIsInN1ZmZpeCIsIm1lc3NhZ2UiLCJ0ZXh0SW5mbyIsIm15VGFibGUiLCJtYXAiLCJ0aXRsZSIsImkiLCJhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIiwic2VhcmNoQ29tcGxldGVkIiwiZGFzaGJvYXJkcyIsInVpZCIsImNyZWF0ZUFjdGlvbiIsIkxvYWRpbmciLCJzdGF0ZSIsImFjdGlvbiIsIm1hdGNoIiwicGF5bG9hZCIsImQiLCJjc3MiLCJ1c2VTdGF0ZSIsImNvbmZpZyIsIkljb24iLCJMaW5rIiwidXNlU3R5bGVzMiIsImdldFBhbmVsUGx1Z2luTm90Rm91bmQiLCJQYW5lbFR5cGVDYXJkIiwiTGlicmFyeVBhbmVsQ2FyZCIsIm9uQ2xpY2siLCJvbkRlbGV0ZSIsInNob3dTZWNvbmRhcnlBY3Rpb25zIiwic2hvd0RlbGV0aW9uTW9kYWwiLCJzZXRTaG93RGVsZXRpb25Nb2RhbCIsIm9uRGVsZXRlUGFuZWwiLCJwYW5lbFBsdWdpbiIsInBhbmVscyIsIm1vZGVsIiwidHlwZSIsIm1ldGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJGb2xkZXJMaW5rIiwiZ2V0U3R5bGVzIiwiZm9sZGVyVWlkIiwiZm9sZGVyTmFtZSIsIm1ldGFDb250YWluZXIiLCJ0aGVtZSIsImNvbG9ycyIsInRleHQiLCJzZWNvbmRhcnkiLCJ0eXBvZ3JhcGh5IiwiYm9keVNtYWxsIiwiZm9udFNpemUiLCJzcGFjaW5nIiwiZnJvbSIsIm1lcmdlIiwib2YiLCJTdWJzY3JpcHRpb24iLCJ0aW1lciIsImNhdGNoRXJyb3IiLCJmaW5hbGl6ZSIsIm1hcFRvIiwibWVyZ2VNYXAiLCJzaGFyZSIsInRha2VVbnRpbCIsImRlbGV0ZUxpYnJhcnlQYW5lbCIsImFwaURlbGV0ZUxpYnJhcnlQYW5lbCIsImdldExpYnJhcnlQYW5lbHMiLCJpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSIsImluaXRTZWFyY2giLCJzZWFyY2hGb3JMaWJyYXJ5UGFuZWxzIiwiYXJncyIsInN1YnNjcmlwdGlvbiIsImRhdGFPYnNlcnZhYmxlIiwic2VhcmNoU3RyaW5nIiwicGVyUGFnZSIsInBhZ2UiLCJleGNsdWRlVWlkIiwiY3VycmVudFBhbmVsSWQiLCJzb3J0RGlyZWN0aW9uIiwidHlwZUZpbHRlciIsInBhbmVsRmlsdGVyIiwiZm9sZGVyRmlsdGVyIiwicGlwZSIsImVsZW1lbnRzIiwibGlicmFyeVBhbmVscyIsInRvdGFsQ291bnQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ1bnN1YnNjcmliZSIsImFkZCIsInN1YnNjcmliZSIsImUiLCJGdW5jdGlvbiIsIm51bWJlck9mUGFnZXMiLCJjaGFuZ2VQYWdlIiwibGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyIiwiTWF0aCIsImNlaWwiLCJib3JkZXIiLCJyYWRpdXMiLCJzbSIsImJnMyIsImJnMSIsInRleHRTZW1pV2VhayIsInNpemUiLCJtZCIsInhsIiwiYmcyIiwibm90ZVRleHRib3giLCJkYXNoYm9hcmRTZWFyY2giLCJoZWFkaW5nIiwiaDQiLCJsaW5rIiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJBcHBFdmVudHMiLCJzZWxlY3RvcnMiLCJyZXBvcnRJbnRlcmFjdGlvbiIsIkZpZWxkIiwiRmlsZVVwbG9hZCIsIkZvcm0iLCJIb3Jpem9udGFsR3JvdXAiLCJJbnB1dCIsIlNwaW5uZXIiLCJzdHlsZXNGYWN0b3J5IiwiVGV4dEFyZWEiLCJWZXJ0aWNhbEdyb3VwIiwid2l0aFRoZW1lMiIsImFwcEV2ZW50cyIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsImNsZWFuVXBBY3Rpb24iLCJJbXBvcnREYXNoYm9hcmRPdmVydmlldyIsImZldGNoR2NvbURhc2hib2FyZCIsImltcG9ydERhc2hib2FyZEpzb24iLCJ2YWxpZGF0ZURhc2hib2FyZEpzb24iLCJ2YWxpZGF0ZUdjb21EYXNoYm9hcmQiLCJJTVBPUlRfU1RBUlRFRF9FVkVOVF9OQU1FIiwibWFwU3RhdGVUb1Byb3BzIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImltcG9ydERhc2hib2FyZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIlVudGhlbWVkRGFzaGJvYXJkSW1wb3J0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImV2ZW50IiwiaW1wb3J0X3NvdXJjZSIsImZpbGUiLCJjdXJyZW50VGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZGVyT25Mb2FkIiwiZGFzaGJvYXJkIiwiSlNPTiIsInBhcnNlIiwidGFyZ2V0IiwicmVzdWx0IiwiRXJyb3IiLCJlbWl0IiwiYWxlcnRFcnJvciIsIm9ubG9hZCIsInJlYWRBc1RleHQiLCJmb3JtRGF0YSIsImRhc2hib2FyZEpzb24iLCJkYXNoYm9hcmRJZCIsImV4ZWMiLCJnY29tRGFzaGJvYXJkIiwiZ2NvbURhc2hib2FyZElkIiwicXVlcnlQYXJhbXMiLCJnZXRHY29tRGFzaGJvYXJkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJzdGF0ZVNlbGVjdG9yIiwicmVuZGVySW1wb3J0Rm9ybSIsImltcG9ydFN0eWxlcyIsIm9wdGlvbiIsIm9uRmlsZVVwbG9hZCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImdldERhc2hib2FyZEZyb21Kc29uIiwiY29tcG9uZW50cyIsIkRhc2hib2FyZEltcG9ydFBhZ2UiLCJ0ZXh0YXJlYSIsInN1Ym1pdCIsInJlbmRlciIsIk5vdFN0YXJ0ZWQiLCJpbmNsdWRlcyIsIkRhc2hib2FyZEltcG9ydFVuQ29ubmVjdGVkIiwiRGFzaGJvYXJkSW1wb3J0IiwiZGlzcGxheU5hbWUiLCJEYXRhU291cmNlUGlja2VyIiwiRXhwcmVzc2lvbkRhdGFzb3VyY2VSZWYiLCJJbnB1dENvbnRyb2wiLCJMZWdlbmQiLCJGb2xkZXJQaWNrZXIiLCJMaWJyYXJ5UGFuZWxJbnB1dFN0YXRlIiwidmFsaWRhdGVUaXRsZSIsInZhbGlkYXRlVWlkIiwiSW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3QiLCJJbXBvcnREYXNoYm9hcmRGb3JtIiwiY29udHJvbCIsImdldFZhbHVlcyIsInVpZFJlc2V0IiwiaW5wdXRzIiwiaW5pdGlhbEZvbGRlcklkIiwib25VaWRSZXNldCIsIm9uQ2FuY2VsIiwib25TdWJtaXQiLCJ3YXRjaCIsImlzU3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwid2F0Y2hEYXRhU291cmNlcyIsIndhdGNoRm9sZGVyIiwibmV3TGlicmFyeVBhbmVscyIsImZpbHRlciIsIk5ldyIsImV4aXN0aW5nTGlicmFyeVBhbmVscyIsIkV4aXRzIiwidiIsImZvbGRlciIsImlkIiwiZmllbGQiLCJkYXRhU291cmNlcyIsImlucHV0IiwiaW5kZXgiLCJwbHVnaW5JZCIsImRhdGFTb3VyY2VPcHRpb24iLCJjdXJyZW50IiwibGFiZWwiLCJpbmZvIiwiY29uc3RhbnRzIiwiY29uc3RhbnRJbmRleCIsInZhbHVlIiwiZ2V0QnV0dG9uVmFyaWFudCIsImdldEJ1dHRvblRleHQiLCJzcGFjZXIiLCJsaWJyYXJ5UGFuZWxJbmRleCIsIml0ZW0iLCJkYXRlVGltZUZvcm1hdCIsImxvY2F0aW9uU2VydmljZSIsImNsZWFyTG9hZGVkRGFzaGJvYXJkIiwiRGFzaGJvYXJkU291cmNlIiwiSU1QT1JUX0ZJTklTSEVEX0VWRU5UX05BTUUiLCJzZWFyY2hPYmoiLCJnZXRTZWFyY2hPYmplY3QiLCJzb3VyY2UiLCJmb2xkZXJJZCIsIk51bWJlciIsIkltcG9ydERhc2hib2FyZE92ZXJ2aWV3VW5Db25uZWN0ZWQiLCJmb3JtIiwic2V0U3RhdGUiLCJHY29tIiwibWFyZ2luQm90dG9tIiwiZ25ldElkIiwib3JnTmFtZSIsInVwZGF0ZWRBdCIsImdldEJhY2tlbmRTcnYiLCJ2YWxpZGF0aW9uU3J2IiwianNvbiIsIm5ld1RpdGxlIiwidmFsaWRhdGVOZXdEYXNoYm9hcmROYW1lIiwidGhlbiIsImNhdGNoIiwiZ2V0IiwiZXhpc3RpbmdEYXNoYm9hcmQiLCJmb2xkZXJUaXRsZSIsImlzSGFuZGxlZCIsImN4IiwiaXNVbnNpZ25lZFBsdWdpblNpZ25hdHVyZSIsIlBsdWdpblN0YXRlIiwiSWNvbkJ1dHRvbiIsIlBsdWdpblNpZ25hdHVyZUJhZGdlIiwiUGx1Z2luU3RhdGVJbmZvIiwiaXNDdXJyZW50IiwicGx1Z2luIiwiZGlzYWJsZWQiLCJzaG93QmFkZ2UiLCJjaGlsZHJlbiIsImNzc0NsYXNzIiwiZGVwcmVjYXRlZCIsIlBsdWdpblZpc3VhbGl6YXRpb24iLCJpbWciLCJsb2dvcyIsInNtYWxsIiwiaXRlbUNvbnRlbnQiLCJiYWRnZSIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZUJ1dHRvbiIsImJhY2tncm91bmQiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInNoYWRvd3MiLCJ6MSIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydCIsImVtcGhhc2l6ZSIsInByaW1hcnkiLCJzZWxlY3RlZCIsImZvbnRXZWlnaHRNZWRpdW0iLCJmb250V2VpZ2h0TGlnaHQiLCJQYW5lbFBsdWdpbkJhZGdlIiwic2lnbmF0dXJlIiwiQmFkZ2UiLCJkaXNwbGF5IiwiZ2V0RmVhdHVyZVN0YXRlSW5mbyIsImNvbG9yIiwidG9vbHRpcCIsImljb24iLCJhbHBoYSIsImJldGEiXSwic291cmNlUm9vdCI6IiJ9