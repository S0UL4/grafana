"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistPage"],{

/***/ "./public/app/core/components/PageActionBar/PageActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageActionBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




class PageActionBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      searchQuery,
      linkButton,
      setSearchQuery,
      target,
      placeholder = 'Search by name or type'
    } = this.props;
    const linkProps = {
      href: linkButton === null || linkButton === void 0 ? void 0 : linkButton.href,
      disabled: linkButton === null || linkButton === void 0 ? void 0 : linkButton.disabled
    };

    if (target) {
      linkProps.target = target;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "page-action-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
          value: searchQuery,
          onChange: setSearchQuery,
          placeholder: placeholder
        })
      }), linkButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({}, linkProps, {
        children: linkButton.title
      }))]
    });
  }

}

/***/ }),

/***/ "./public/app/features/playlist/EmptyQueryListBanner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyQueryListBanner": () => (/* binding */ EmptyQueryListBanner)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const EmptyQueryListBanner = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.noResult,
    children: "No playlist found!"
  });
};

const getStyles = theme => {
  return {
    noResult: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(2)};
      background: ${theme.colors.secondary.main};
      font-style: italic;
      margin-top: ${theme.spacing(2)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/playlist/PlaylistPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistPage": () => (/* binding */ PlaylistPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PageActionBar/PageActionBar.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _EmptyQueryListBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/playlist/EmptyQueryListBanner.tsx");
/* harmony import */ var _PlaylistPageList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/playlist/PlaylistPageList.tsx");
/* harmony import */ var _StartModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/playlist/StartModal.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/playlist/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _EmptyQueryListBanner;
















const PlaylistPage = ({
  navModel
}) => {
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchQuery);
  const [hasFetched, setHasFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [startPlaylist, setStartPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [playlistToDelete, setPlaylistToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [forcePlaylistsFetch, setForcePlaylistsFetch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [playlists, setPlaylists] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_13__["default"])(async () => {
    const playlists = await (0,_api__WEBPACK_IMPORTED_MODULE_11__.getAllPlaylist)(searchQuery);

    if (!hasFetched) {
      setHasFetched(true);
    }

    setPlaylists(playlists);
    setDebouncedSearchQuery(searchQuery);
  }, 350, [forcePlaylistsFetch, searchQuery]);
  const hasPlaylists = playlists && playlists.length > 0;

  const onDismissDelete = () => setPlaylistToDelete(undefined);

  const onDeletePlaylist = () => {
    if (!playlistToDelete) {
      return;
    }

    (0,_api__WEBPACK_IMPORTED_MODULE_11__.deletePlaylist)(playlistToDelete.uid).finally(() => {
      setForcePlaylistsFetch(forcePlaylistsFetch + 1);
      setPlaylistToDelete(undefined);
    });
  };

  const emptyListBanner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "There are no playlists created yet",
    buttonIcon: "plus",
    buttonLink: "playlists/new",
    buttonTitle: "Create Playlist",
    buttonDisabled: !app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__.contextSrv.isEditor,
    proTip: "You can use playlists to cycle dashboards on TVs without user control",
    proTipLink: "http://docs.grafana.org/reference/playlist/",
    proTipLinkTitle: "Learn more",
    proTipTarget: "_blank"
  });

  const showSearch = playlists.length > 0 || searchQuery.length > 0 || debouncedSearchQuery.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      isLoading: !hasFetched,
      children: [showSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        searchQuery: searchQuery,
        linkButton: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__.contextSrv.isEditor && {
          title: 'New playlist',
          href: '/playlists/new'
        },
        setSearchQuery: setSearchQuery
      }), !hasPlaylists && searchQuery ? _EmptyQueryListBanner || (_EmptyQueryListBanner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_EmptyQueryListBanner__WEBPACK_IMPORTED_MODULE_8__.EmptyQueryListBanner, {})) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_PlaylistPageList__WEBPACK_IMPORTED_MODULE_9__.PlaylistPageList, {
        playlists: playlists,
        setStartPlaylist: setStartPlaylist,
        setPlaylistToDelete: setPlaylistToDelete
      }), !showSearch && emptyListBanner, playlistToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
        title: playlistToDelete.name,
        confirmText: "Delete",
        body: `Are you sure you want to delete '${playlistToDelete.name}' playlist?`,
        onConfirm: onDeletePlaylist,
        isOpen: Boolean(playlistToDelete),
        onDismiss: onDismissDelete
      }), startPlaylist && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StartModal__WEBPACK_IMPORTED_MODULE_10__.StartModal, {
        playlist: startPlaylist,
        onDismiss: () => setStartPlaylist(undefined)
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'playlists')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistPage));

/***/ }),

/***/ "./public/app/features/playlist/PlaylistPageList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistPageList": () => (/* binding */ PlaylistPageList)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavButton.tsx");
/* harmony import */ var _ShareModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/playlist/ShareModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const PlaylistPageList = ({
  playlists,
  setStartPlaylist,
  setPlaylistToDelete
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
    className: styles.list,
    children: playlists.map(playlist => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
      className: styles.listItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
          children: [playlist.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ModalsController, {
            children: ({
              showModal,
              hideModal
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_4__.DashNavButton, {
              tooltip: "Share playlist",
              icon: "share-alt",
              iconSize: "lg",
              onClick: () => {
                showModal(_ShareModal__WEBPACK_IMPORTED_MODULE_5__.ShareModal, {
                  playlistUid: playlist.uid,
                  onDismiss: hideModal
                });
              }
            })
          }, "button-share")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Actions, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            icon: "play",
            onClick: () => setStartPlaylist(playlist),
            children: "Start playlist"
          }), app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.isEditor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
              variant: "secondary",
              href: `/playlists/edit/${playlist.uid}`,
              icon: "cog",
              children: "Edit playlist"
            }, "edit"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              disabled: false,
              onClick: () => setPlaylistToDelete({
                id: playlist.id,
                uid: playlist.uid,
                name: playlist.name
              }),
              icon: "trash-alt",
              variant: "destructive",
              children: "Delete playlist"
            })]
          })]
        })]
      })
    }, playlist.uid))
  });
};

function getStyles(theme) {
  return {
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'grid'
    }),
    listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      listStyle: 'none'
    })
  };
}

/***/ }),

/***/ "./public/app/features/playlist/ShareModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModal": () => (/* binding */ ShareModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _dashboard_components_ShareModal_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/ShareModal/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;








const ShareModal = ({
  playlistUid,
  onDismiss
}) => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [autoFit, setAutofit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const modes = [{
    label: 'Normal',
    value: false
  }, {
    label: 'TV',
    value: 'tv'
  }, {
    label: 'Kiosk',
    value: true
  }];

  const onShareUrlCopy = () => {
    app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, ['Content copied to clipboard']);
  };

  const params = {};

  if (mode) {
    params.kiosk = mode;
  }

  if (autoFit) {
    params.autofitpanels = true;
  }

  const shareUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.urlUtil.renderUrl(`${(0,_dashboard_components_ShareModal_utils__WEBPACK_IMPORTED_MODULE_4__.buildBaseUrl)()}/play/${playlistUid}`, params);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    isOpen: true,
    title: "Share playlist",
    onDismiss: onDismiss,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Mode",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
          value: mode,
          options: modes,
          onChange: setMode
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
          label: "Autofit",
          description: "Panel heights will be adjusted to fit screen size",
          name: "autofix",
          value: autoFit,
          onChange: e => setAutofit(e.currentTarget.checked)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Link URL",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          id: "link-url-input",
          value: shareUrl,
          readOnly: true,
          addonAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ClipboardButton, {
            variant: "primary",
            getText: () => shareUrl,
            onClipboardCopy: onShareUrlCopy,
            children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "copy"
            })), " Copy"]
          })
        })
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/playlist/StartModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartModal": () => (/* binding */ StartModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const StartModal = ({
  playlist,
  onDismiss
}) => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [autoFit, setAutofit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const modes = [{
    label: 'Normal',
    value: false
  }, {
    label: 'TV',
    value: 'tv'
  }, {
    label: 'Kiosk',
    value: true
  }];

  const onStart = () => {
    const params = {};

    if (mode) {
      params.kiosk = mode;
    }

    if (autoFit) {
      params.autofitpanels = true;
    }

    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.urlUtil.renderUrl(`/playlists/play/${playlist.uid}`, params));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    isOpen: true,
    icon: "play",
    title: "Start playlist",
    onDismiss: onDismiss,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
        label: "Mode",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
          value: mode,
          options: modes,
          onChange: setMode
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
        label: "Autofit",
        description: "Panel heights will be adjusted to fit screen size",
        name: "autofix",
        value: autoFit,
        onChange: e => setAutofit(e.currentTarget.checked)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        variant: "primary",
        onClick: onStart,
        children: ["Start ", playlist.name]
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/playlist/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlaylist": () => (/* binding */ createPlaylist),
/* harmony export */   "deletePlaylist": () => (/* binding */ deletePlaylist),
/* harmony export */   "getAllPlaylist": () => (/* binding */ getAllPlaylist),
/* harmony export */   "getPlaylist": () => (/* binding */ getPlaylist),
/* harmony export */   "updatePlaylist": () => (/* binding */ updatePlaylist)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/store/store.ts");




async function createPlaylist(playlist) {
  await withErrorHandling(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/playlists', playlist));
}
async function updatePlaylist(uid, playlist) {
  await withErrorHandling(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/playlists/${uid}`, playlist));
}
async function deletePlaylist(uid) {
  await withErrorHandling(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/playlists/${uid}`), 'Playlist deleted');
}
async function getPlaylist(uid) {
  const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/playlists/${uid}`);
  return result;
}
async function getAllPlaylist(query) {
  const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/playlists/', {
    query
  });
  return result;
}

async function withErrorHandling(apiCall, message = 'Playlist saved') {
  try {
    await apiCall();
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)(message)));
  } catch (e) {
    if (e instanceof Error) {
      (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)('Unable to save playlist', e)));
    }
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHlCQUFELEVBQTRCUixDQUE1QixDQUF4QixDQUFWLENBQVI7SUFDRDtFQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZUFjdGlvbkJhci9QYWdlQWN0aW9uQmFyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9FbXB0eVF1ZXJ5TGlzdEJhbm5lci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdFBhZ2VMaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9TaGFyZU1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9TdGFydE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9hcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExpbmtCdXR0b24sIEZpbHRlcklucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgc2V0U2VhcmNoUXVlcnk6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBsaW5rQnV0dG9uPzogeyBocmVmOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGRpc2FibGVkPzogYm9vbGVhbiB9O1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlQWN0aW9uQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWFyY2hRdWVyeSwgbGlua0J1dHRvbiwgc2V0U2VhcmNoUXVlcnksIHRhcmdldCwgcGxhY2Vob2xkZXIgPSAnU2VhcmNoIGJ5IG5hbWUgb3IgdHlwZScgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGlua1Byb3BzOiB0eXBlb2YgTGlua0J1dHRvbi5kZWZhdWx0UHJvcHMgPSB7IGhyZWY6IGxpbmtCdXR0b24/LmhyZWYsIGRpc2FibGVkOiBsaW5rQnV0dG9uPy5kaXNhYmxlZCB9O1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgbGlua1Byb3BzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICA8RmlsdGVySW5wdXQgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17c2V0U2VhcmNoUXVlcnl9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtsaW5rQnV0dG9uICYmIDxMaW5rQnV0dG9uIHsuLi5saW5rUHJvcHN9PntsaW5rQnV0dG9uLnRpdGxlfTwvTGlua0J1dHRvbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGNvbnN0IEVtcHR5UXVlcnlMaXN0QmFubmVyID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vUmVzdWx0fT5ObyBwbGF5bGlzdCBmb3VuZCE8L2Rpdj47XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBub1Jlc3VsdDogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeS5tYWlufTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgTWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ29uZmlybU1vZGFsIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IFBhZ2VBY3Rpb25CYXIgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlQWN0aW9uQmFyL1BhZ2VBY3Rpb25CYXInO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcblxuaW1wb3J0IHsgRW1wdHlRdWVyeUxpc3RCYW5uZXIgfSBmcm9tICcuL0VtcHR5UXVlcnlMaXN0QmFubmVyJztcbmltcG9ydCB7IFBsYXlsaXN0UGFnZUxpc3QgfSBmcm9tICcuL1BsYXlsaXN0UGFnZUxpc3QnO1xuaW1wb3J0IHsgU3RhcnRNb2RhbCB9IGZyb20gJy4vU3RhcnRNb2RhbCc7XG5pbXBvcnQgeyBkZWxldGVQbGF5bGlzdCwgZ2V0QWxsUGxheWxpc3QgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBQbGF5bGlzdERUTyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgQ29ubmVjdGVkUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBsYXlsaXN0UGFnZVByb3BzIGV4dGVuZHMgQ29ubmVjdGVkUHJvcHMsIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdFBhZ2U6IEZDPFBsYXlsaXN0UGFnZVByb3BzPiA9ICh7IG5hdk1vZGVsIH0pID0+IHtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2hRdWVyeSwgc2V0RGVib3VuY2VkU2VhcmNoUXVlcnldID0gdXNlU3RhdGUoc2VhcmNoUXVlcnkpO1xuICBjb25zdCBbaGFzRmV0Y2hlZCwgc2V0SGFzRmV0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydFBsYXlsaXN0LCBzZXRTdGFydFBsYXlsaXN0XSA9IHVzZVN0YXRlPFBsYXlsaXN0RFRPIHwgdW5kZWZpbmVkPigpO1xuICBjb25zdCBbcGxheWxpc3RUb0RlbGV0ZSwgc2V0UGxheWxpc3RUb0RlbGV0ZV0gPSB1c2VTdGF0ZTxQbGF5bGlzdERUTyB8IHVuZGVmaW5lZD4oKTtcbiAgY29uc3QgW2ZvcmNlUGxheWxpc3RzRmV0Y2gsIHNldEZvcmNlUGxheWxpc3RzRmV0Y2hdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW3BsYXlsaXN0cywgc2V0UGxheWxpc3RzXSA9IHVzZVN0YXRlPFBsYXlsaXN0RFRPW10+KFtdKTtcblxuICB1c2VEZWJvdW5jZShcbiAgICBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwbGF5bGlzdHMgPSBhd2FpdCBnZXRBbGxQbGF5bGlzdChzZWFyY2hRdWVyeSk7XG4gICAgICBpZiAoIWhhc0ZldGNoZWQpIHtcbiAgICAgICAgc2V0SGFzRmV0Y2hlZCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHNldFBsYXlsaXN0cyhwbGF5bGlzdHMpO1xuICAgICAgc2V0RGVib3VuY2VkU2VhcmNoUXVlcnkoc2VhcmNoUXVlcnkpO1xuICAgIH0sXG4gICAgMzUwLFxuICAgIFtmb3JjZVBsYXlsaXN0c0ZldGNoLCBzZWFyY2hRdWVyeV1cbiAgKTtcblxuICBjb25zdCBoYXNQbGF5bGlzdHMgPSBwbGF5bGlzdHMgJiYgcGxheWxpc3RzLmxlbmd0aCA+IDA7XG4gIGNvbnN0IG9uRGlzbWlzc0RlbGV0ZSA9ICgpID0+IHNldFBsYXlsaXN0VG9EZWxldGUodW5kZWZpbmVkKTtcbiAgY29uc3Qgb25EZWxldGVQbGF5bGlzdCA9ICgpID0+IHtcbiAgICBpZiAoIXBsYXlsaXN0VG9EZWxldGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGVsZXRlUGxheWxpc3QocGxheWxpc3RUb0RlbGV0ZS51aWQpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgc2V0Rm9yY2VQbGF5bGlzdHNGZXRjaChmb3JjZVBsYXlsaXN0c0ZldGNoICsgMSk7XG4gICAgICBzZXRQbGF5bGlzdFRvRGVsZXRlKHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZW1wdHlMaXN0QmFubmVyID0gKFxuICAgIDxFbXB0eUxpc3RDVEFcbiAgICAgIHRpdGxlPVwiVGhlcmUgYXJlIG5vIHBsYXlsaXN0cyBjcmVhdGVkIHlldFwiXG4gICAgICBidXR0b25JY29uPVwicGx1c1wiXG4gICAgICBidXR0b25MaW5rPVwicGxheWxpc3RzL25ld1wiXG4gICAgICBidXR0b25UaXRsZT1cIkNyZWF0ZSBQbGF5bGlzdFwiXG4gICAgICBidXR0b25EaXNhYmxlZD17IWNvbnRleHRTcnYuaXNFZGl0b3J9XG4gICAgICBwcm9UaXA9XCJZb3UgY2FuIHVzZSBwbGF5bGlzdHMgdG8gY3ljbGUgZGFzaGJvYXJkcyBvbiBUVnMgd2l0aG91dCB1c2VyIGNvbnRyb2xcIlxuICAgICAgcHJvVGlwTGluaz1cImh0dHA6Ly9kb2NzLmdyYWZhbmEub3JnL3JlZmVyZW5jZS9wbGF5bGlzdC9cIlxuICAgICAgcHJvVGlwTGlua1RpdGxlPVwiTGVhcm4gbW9yZVwiXG4gICAgICBwcm9UaXBUYXJnZXQ9XCJfYmxhbmtcIlxuICAgIC8+XG4gICk7XG5cbiAgY29uc3Qgc2hvd1NlYXJjaCA9IHBsYXlsaXN0cy5sZW5ndGggPiAwIHx8IHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDAgfHwgZGVib3VuY2VkU2VhcmNoUXVlcnkubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9eyFoYXNGZXRjaGVkfT5cbiAgICAgICAge3Nob3dTZWFyY2ggJiYgKFxuICAgICAgICAgIDxQYWdlQWN0aW9uQmFyXG4gICAgICAgICAgICBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBsaW5rQnV0dG9uPXtjb250ZXh0U3J2LmlzRWRpdG9yICYmIHsgdGl0bGU6ICdOZXcgcGxheWxpc3QnLCBocmVmOiAnL3BsYXlsaXN0cy9uZXcnIH19XG4gICAgICAgICAgICBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWhhc1BsYXlsaXN0cyAmJiBzZWFyY2hRdWVyeSA/IChcbiAgICAgICAgICA8RW1wdHlRdWVyeUxpc3RCYW5uZXIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UGxheWxpc3RQYWdlTGlzdFxuICAgICAgICAgICAgcGxheWxpc3RzPXtwbGF5bGlzdHN9XG4gICAgICAgICAgICBzZXRTdGFydFBsYXlsaXN0PXtzZXRTdGFydFBsYXlsaXN0fVxuICAgICAgICAgICAgc2V0UGxheWxpc3RUb0RlbGV0ZT17c2V0UGxheWxpc3RUb0RlbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IXNob3dTZWFyY2ggJiYgZW1wdHlMaXN0QmFubmVyfVxuICAgICAgICB7cGxheWxpc3RUb0RlbGV0ZSAmJiAoXG4gICAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgICAgdGl0bGU9e3BsYXlsaXN0VG9EZWxldGUubmFtZX1cbiAgICAgICAgICAgIGNvbmZpcm1UZXh0PVwiRGVsZXRlXCJcbiAgICAgICAgICAgIGJvZHk9e2BBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICcke3BsYXlsaXN0VG9EZWxldGUubmFtZX0nIHBsYXlsaXN0P2B9XG4gICAgICAgICAgICBvbkNvbmZpcm09e29uRGVsZXRlUGxheWxpc3R9XG4gICAgICAgICAgICBpc09wZW49e0Jvb2xlYW4ocGxheWxpc3RUb0RlbGV0ZSl9XG4gICAgICAgICAgICBvbkRpc21pc3M9e29uRGlzbWlzc0RlbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7c3RhcnRQbGF5bGlzdCAmJiA8U3RhcnRNb2RhbCBwbGF5bGlzdD17c3RhcnRQbGF5bGlzdH0gb25EaXNtaXNzPXsoKSA9PiBzZXRTdGFydFBsYXlsaXN0KHVuZGVmaW5lZCl9IC8+fVxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzPENvbm5lY3RlZFByb3BzLCB7fSwgU3RvcmVTdGF0ZT4gPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3BsYXlsaXN0cycpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQbGF5bGlzdFBhZ2UpO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgTGlua0J1dHRvbiwgTW9kYWxzQ29udHJvbGxlciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmltcG9ydCB7IERhc2hOYXZCdXR0b24gfSBmcm9tICcuLi9kYXNoYm9hcmQvY29tcG9uZW50cy9EYXNoTmF2L0Rhc2hOYXZCdXR0b24nO1xuXG5pbXBvcnQgeyBTaGFyZU1vZGFsIH0gZnJvbSAnLi9TaGFyZU1vZGFsJztcbmltcG9ydCB7IFBsYXlsaXN0RFRPIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNldFN0YXJ0UGxheWxpc3Q6IChwbGF5bGlzdEl0ZW06IFBsYXlsaXN0RFRPKSA9PiB2b2lkO1xuICBzZXRQbGF5bGlzdFRvRGVsZXRlOiAocGxheWxpc3RJdGVtOiBQbGF5bGlzdERUTykgPT4gdm9pZDtcbiAgcGxheWxpc3RzOiBQbGF5bGlzdERUT1tdIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RQYWdlTGlzdCA9ICh7IHBsYXlsaXN0cywgc2V0U3RhcnRQbGF5bGlzdCwgc2V0UGxheWxpc3RUb0RlbGV0ZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAge3BsYXlsaXN0cyEubWFwKChwbGF5bGlzdDogUGxheWxpc3REVE8pID0+IChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfSBrZXk9e3BsYXlsaXN0LnVpZH0+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZC5IZWFkaW5nPlxuICAgICAgICAgICAgICB7cGxheWxpc3QubmFtZX1cbiAgICAgICAgICAgICAgPE1vZGFsc0NvbnRyb2xsZXIga2V5PVwiYnV0dG9uLXNoYXJlXCI+XG4gICAgICAgICAgICAgICAgeyh7IHNob3dNb2RhbCwgaGlkZU1vZGFsIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxEYXNoTmF2QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJTaGFyZSBwbGF5bGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJzaGFyZS1hbHRcIlxuICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbChTaGFyZU1vZGFsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdFVpZDogcGxheWxpc3QudWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzOiBoaWRlTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvTW9kYWxzQ29udHJvbGxlcj5cbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkaW5nPlxuICAgICAgICAgICAgPENhcmQuQWN0aW9ucz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWNvbj1cInBsYXlcIiBvbkNsaWNrPXsoKSA9PiBzZXRTdGFydFBsYXlsaXN0KHBsYXlsaXN0KX0+XG4gICAgICAgICAgICAgICAgU3RhcnQgcGxheWxpc3RcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIHtjb250ZXh0U3J2LmlzRWRpdG9yICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPExpbmtCdXR0b24ga2V5PVwiZWRpdFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBocmVmPXtgL3BsYXlsaXN0cy9lZGl0LyR7cGxheWxpc3QudWlkfWB9IGljb249XCJjb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgRWRpdCBwbGF5bGlzdFxuICAgICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBsYXlsaXN0VG9EZWxldGUoeyBpZDogcGxheWxpc3QuaWQsIHVpZDogcGxheWxpc3QudWlkLCBuYW1lOiBwbGF5bGlzdC5uYW1lIH0pfVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlIHBsYXlsaXN0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ2FyZC5BY3Rpb25zPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBsaXN0OiBjc3Moe1xuICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIH0pLFxuICAgIGxpc3RJdGVtOiBjc3Moe1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgfSksXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFwcEV2ZW50cywgU2VsZWN0YWJsZVZhbHVlLCBVcmxRdWVyeU1hcCwgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2hlY2tib3gsIENsaXBib2FyZEJ1dHRvbiwgRmllbGQsIEZpZWxkU2V0LCBJY29uLCBJbnB1dCwgTW9kYWwsIFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuXG5pbXBvcnQgeyBidWlsZEJhc2VVcmwgfSBmcm9tICcuLi9kYXNoYm9hcmQvY29tcG9uZW50cy9TaGFyZU1vZGFsL3V0aWxzJztcblxuaW1wb3J0IHsgUGxheWxpc3RNb2RlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBTaGFyZU1vZGFsUHJvcHMge1xuICBwbGF5bGlzdFVpZDogc3RyaW5nO1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTaGFyZU1vZGFsID0gKHsgcGxheWxpc3RVaWQsIG9uRGlzbWlzcyB9OiBTaGFyZU1vZGFsUHJvcHMpID0+IHtcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGU8UGxheWxpc3RNb2RlPihmYWxzZSk7XG4gIGNvbnN0IFthdXRvRml0LCBzZXRBdXRvZml0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtb2RlczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFBsYXlsaXN0TW9kZT4+ID0gW1xuICAgIHsgbGFiZWw6ICdOb3JtYWwnLCB2YWx1ZTogZmFsc2UgfSxcbiAgICB7IGxhYmVsOiAnVFYnLCB2YWx1ZTogJ3R2JyB9LFxuICAgIHsgbGFiZWw6ICdLaW9zaycsIHZhbHVlOiB0cnVlIH0sXG4gIF07XG5cbiAgY29uc3Qgb25TaGFyZVVybENvcHkgPSAoKSA9PiB7XG4gICAgYXBwRXZlbnRzLmVtaXQoQXBwRXZlbnRzLmFsZXJ0U3VjY2VzcywgWydDb250ZW50IGNvcGllZCB0byBjbGlwYm9hcmQnXSk7XG4gIH07XG5cbiAgY29uc3QgcGFyYW1zOiBVcmxRdWVyeU1hcCA9IHt9O1xuICBpZiAobW9kZSkge1xuICAgIHBhcmFtcy5raW9zayA9IG1vZGU7XG4gIH1cbiAgaWYgKGF1dG9GaXQpIHtcbiAgICBwYXJhbXMuYXV0b2ZpdHBhbmVscyA9IHRydWU7XG4gIH1cblxuICBjb25zdCBzaGFyZVVybCA9IHVybFV0aWwucmVuZGVyVXJsKGAke2J1aWxkQmFzZVVybCgpfS9wbGF5LyR7cGxheWxpc3RVaWR9YCwgcGFyYW1zKTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCBpc09wZW49e3RydWV9IHRpdGxlPVwiU2hhcmUgcGxheWxpc3RcIiBvbkRpc21pc3M9e29uRGlzbWlzc30+XG4gICAgICA8RmllbGRTZXQ+XG4gICAgICAgIDxGaWVsZCBsYWJlbD1cIk1vZGVcIj5cbiAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCB2YWx1ZT17bW9kZX0gb3B0aW9ucz17bW9kZXN9IG9uQ2hhbmdlPXtzZXRNb2RlfSAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBsYWJlbD1cIkF1dG9maXRcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQYW5lbCBoZWlnaHRzIHdpbGwgYmUgYWRqdXN0ZWQgdG8gZml0IHNjcmVlbiBzaXplXCJcbiAgICAgICAgICAgIG5hbWU9XCJhdXRvZml4XCJcbiAgICAgICAgICAgIHZhbHVlPXthdXRvRml0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRvZml0KGUuY3VycmVudFRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgIDxGaWVsZCBsYWJlbD1cIkxpbmsgVVJMXCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBpZD1cImxpbmstdXJsLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzaGFyZVVybH1cbiAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICBhZGRvbkFmdGVyPXtcbiAgICAgICAgICAgICAgPENsaXBib2FyZEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGdldFRleHQ9eygpID0+IHNoYXJlVXJsfSBvbkNsaXBib2FyZENvcHk9e29uU2hhcmVVcmxDb3B5fT5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY29weVwiIC8+IENvcHlcbiAgICAgICAgICAgICAgPC9DbGlwYm9hcmRCdXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZD5cbiAgICAgIDwvRmllbGRTZXQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRmllbGQsIEZpZWxkU2V0LCBNb2RhbCwgUmFkaW9CdXR0b25Hcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUGxheWxpc3REVE8sIFBsYXlsaXN0TW9kZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJ0TW9kYWxQcm9wcyB7XG4gIHBsYXlsaXN0OiBQbGF5bGlzdERUTztcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgU3RhcnRNb2RhbDogRkM8U3RhcnRNb2RhbFByb3BzPiA9ICh7IHBsYXlsaXN0LCBvbkRpc21pc3MgfSkgPT4ge1xuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTxQbGF5bGlzdE1vZGU+KGZhbHNlKTtcbiAgY29uc3QgW2F1dG9GaXQsIHNldEF1dG9maXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1vZGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8UGxheWxpc3RNb2RlPj4gPSBbXG4gICAgeyBsYWJlbDogJ05vcm1hbCcsIHZhbHVlOiBmYWxzZSB9LFxuICAgIHsgbGFiZWw6ICdUVicsIHZhbHVlOiAndHYnIH0sXG4gICAgeyBsYWJlbDogJ0tpb3NrJywgdmFsdWU6IHRydWUgfSxcbiAgXTtcblxuICBjb25zdCBvblN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0ge307XG4gICAgaWYgKG1vZGUpIHtcbiAgICAgIHBhcmFtcy5raW9zayA9IG1vZGU7XG4gICAgfVxuICAgIGlmIChhdXRvRml0KSB7XG4gICAgICBwYXJhbXMuYXV0b2ZpdHBhbmVscyA9IHRydWU7XG4gICAgfVxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHVybFV0aWwucmVuZGVyVXJsKGAvcGxheWxpc3RzL3BsYXkvJHtwbGF5bGlzdC51aWR9YCwgcGFyYW1zKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXt0cnVlfSBpY29uPVwicGxheVwiIHRpdGxlPVwiU3RhcnQgcGxheWxpc3RcIiBvbkRpc21pc3M9e29uRGlzbWlzc30+XG4gICAgICA8RmllbGRTZXQ+XG4gICAgICAgIDxGaWVsZCBsYWJlbD1cIk1vZGVcIj5cbiAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCB2YWx1ZT17bW9kZX0gb3B0aW9ucz17bW9kZXN9IG9uQ2hhbmdlPXtzZXRNb2RlfSAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBsYWJlbD1cIkF1dG9maXRcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUGFuZWwgaGVpZ2h0cyB3aWxsIGJlIGFkanVzdGVkIHRvIGZpdCBzY3JlZW4gc2l6ZVwiXG4gICAgICAgICAgbmFtZT1cImF1dG9maXhcIlxuICAgICAgICAgIHZhbHVlPXthdXRvRml0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0b2ZpdChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCl9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkU2V0PlxuICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uU3RhcnR9PlxuICAgICAgICAgIFN0YXJ0IHtwbGF5bGlzdC5uYW1lfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICcuLi8uLi9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24sIGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdCwgUGxheWxpc3REVE8gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsYXlsaXN0KHBsYXlsaXN0OiBQbGF5bGlzdCkge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9wbGF5bGlzdHMnLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGxheWxpc3QodWlkOiBzdHJpbmcsIHBsYXlsaXN0OiBQbGF5bGlzdCkge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL3BsYXlsaXN0cy8ke3VpZH1gLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGxheWxpc3QodWlkOiBzdHJpbmcpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9wbGF5bGlzdHMvJHt1aWR9YCksICdQbGF5bGlzdCBkZWxldGVkJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQbGF5bGlzdCh1aWQ6IHN0cmluZyk6IFByb21pc2U8UGxheWxpc3Q+IHtcbiAgY29uc3QgcmVzdWx0OiBQbGF5bGlzdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvcGxheWxpc3RzLyR7dWlkfWApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGxheWxpc3QocXVlcnk6IHN0cmluZyk6IFByb21pc2U8UGxheWxpc3REVE9bXT4ge1xuICBjb25zdCByZXN1bHQ6IFBsYXlsaXN0RFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsYXlsaXN0cy8nLCB7IHF1ZXJ5IH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiB3aXRoRXJyb3JIYW5kbGluZyhhcGlDYWxsOiAoKSA9PiBQcm9taXNlPHZvaWQ+LCBtZXNzYWdlID0gJ1BsYXlsaXN0IHNhdmVkJykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUNhbGwoKTtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbihtZXNzYWdlKSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdVbmFibGUgdG8gc2F2ZSBwbGF5bGlzdCcsIGUpKSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiTGlua0J1dHRvbiIsIkZpbHRlcklucHV0IiwiUGFnZUFjdGlvbkJhciIsInJlbmRlciIsInNlYXJjaFF1ZXJ5IiwibGlua0J1dHRvbiIsInNldFNlYXJjaFF1ZXJ5IiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJwcm9wcyIsImxpbmtQcm9wcyIsImhyZWYiLCJkaXNhYmxlZCIsInRpdGxlIiwiY3NzIiwidXNlU3R5bGVzMiIsIkVtcHR5UXVlcnlMaXN0QmFubmVyIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwibm9SZXN1bHQiLCJ0aGVtZSIsInNwYWNpbmciLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJtYWluIiwidXNlU3RhdGUiLCJjb25uZWN0IiwidXNlRGVib3VuY2UiLCJDb25maXJtTW9kYWwiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJjb250ZXh0U3J2IiwiRW1wdHlMaXN0Q1RBIiwiUGxheWxpc3RQYWdlTGlzdCIsIlN0YXJ0TW9kYWwiLCJkZWxldGVQbGF5bGlzdCIsImdldEFsbFBsYXlsaXN0IiwiUGxheWxpc3RQYWdlIiwibmF2TW9kZWwiLCJkZWJvdW5jZWRTZWFyY2hRdWVyeSIsInNldERlYm91bmNlZFNlYXJjaFF1ZXJ5IiwiaGFzRmV0Y2hlZCIsInNldEhhc0ZldGNoZWQiLCJzdGFydFBsYXlsaXN0Iiwic2V0U3RhcnRQbGF5bGlzdCIsInBsYXlsaXN0VG9EZWxldGUiLCJzZXRQbGF5bGlzdFRvRGVsZXRlIiwiZm9yY2VQbGF5bGlzdHNGZXRjaCIsInNldEZvcmNlUGxheWxpc3RzRmV0Y2giLCJwbGF5bGlzdHMiLCJzZXRQbGF5bGlzdHMiLCJoYXNQbGF5bGlzdHMiLCJsZW5ndGgiLCJvbkRpc21pc3NEZWxldGUiLCJ1bmRlZmluZWQiLCJvbkRlbGV0ZVBsYXlsaXN0IiwidWlkIiwiZmluYWxseSIsImVtcHR5TGlzdEJhbm5lciIsImlzRWRpdG9yIiwic2hvd1NlYXJjaCIsIm5hbWUiLCJCb29sZWFuIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZJbmRleCIsIkJ1dHRvbiIsIkNhcmQiLCJNb2RhbHNDb250cm9sbGVyIiwiRGFzaE5hdkJ1dHRvbiIsIlNoYXJlTW9kYWwiLCJsaXN0IiwibWFwIiwicGxheWxpc3QiLCJsaXN0SXRlbSIsInNob3dNb2RhbCIsImhpZGVNb2RhbCIsInBsYXlsaXN0VWlkIiwib25EaXNtaXNzIiwiaWQiLCJkaXNwbGF5IiwibGlzdFN0eWxlIiwiQXBwRXZlbnRzIiwidXJsVXRpbCIsIkNoZWNrYm94IiwiQ2xpcGJvYXJkQnV0dG9uIiwiRmllbGQiLCJGaWVsZFNldCIsIkljb24iLCJJbnB1dCIsIk1vZGFsIiwiUmFkaW9CdXR0b25Hcm91cCIsImFwcEV2ZW50cyIsImJ1aWxkQmFzZVVybCIsIm1vZGUiLCJzZXRNb2RlIiwiYXV0b0ZpdCIsInNldEF1dG9maXQiLCJtb2RlcyIsImxhYmVsIiwidmFsdWUiLCJvblNoYXJlVXJsQ29weSIsImVtaXQiLCJhbGVydFN1Y2Nlc3MiLCJwYXJhbXMiLCJraW9zayIsImF1dG9maXRwYW5lbHMiLCJzaGFyZVVybCIsInJlbmRlclVybCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tlZCIsImxvY2F0aW9uU2VydmljZSIsIm9uU3RhcnQiLCJwdXNoIiwiZ2V0QmFja2VuZFNydiIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImRpc3BhdGNoIiwiY3JlYXRlUGxheWxpc3QiLCJ3aXRoRXJyb3JIYW5kbGluZyIsInBvc3QiLCJ1cGRhdGVQbGF5bGlzdCIsInB1dCIsImRlbGV0ZSIsImdldFBsYXlsaXN0IiwicmVzdWx0IiwiZ2V0IiwicXVlcnkiLCJhcGlDYWxsIiwibWVzc2FnZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==