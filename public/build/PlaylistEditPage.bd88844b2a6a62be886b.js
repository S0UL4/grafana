"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistEditPage"],{

/***/ "./public/app/core/components/OptionsUI/DashboardPickerByID.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPickerByID": () => (/* binding */ DashboardPickerByID)
/* harmony export */ });
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




/**
 * @deprecated prefer using dashboard uid rather than id
 */



/**
 * @deprecated prefer using dashboard uid rather than id
 */
const DashboardPickerByID = ({
  onChange: propsOnChange,
  value,
  width,
  isClearable = false,
  invalid,
  disabled,
  id,
  optionLabel = 'label',
  excludedDashboards
}) => {
  const debouncedSearch = debounce_promise__WEBPACK_IMPORTED_MODULE_0___default()(query => getDashboards(query || '', optionLabel, excludedDashboards), 300);
  const option = value ? {
    value,
    [optionLabel]: value[optionLabel]
  } : undefined;

  const onChange = item => {
    propsOnChange(item === null || item === void 0 ? void 0 : item.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AsyncSelect, {
    inputId: id,
    width: width,
    isClearable: isClearable,
    defaultOptions: true,
    loadOptions: debouncedSearch,
    onChange: onChange,
    placeholder: "Select dashboard",
    noOptionsMessage: "No dashboards found",
    value: option,
    invalid: invalid,
    disabled: disabled,
    getOptionLabel: option => option[optionLabel]
  });
};

async function getDashboards(query, label, excludedDashboards) {
  const result = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.backendSrv.search({
    type: 'dash-db',
    query,
    limit: 100
  });
  const dashboards = result.map(({
    id,
    uid = '',
    title,
    folderTitle
  }) => {
    const value = {
      id,
      uid,
      [label]: `${folderTitle !== null && folderTitle !== void 0 ? folderTitle : 'General'}/${title}`
    };
    return {
      value,
      [label]: value[label]
    };
  });

  if (excludedDashboards) {
    return dashboards.filter(({
      value
    }) => !excludedDashboards.includes(value.uid));
  }

  return dashboards;
}

/***/ }),

/***/ "./public/app/features/playlist/PlaylistEditPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistEditPage": () => (/* binding */ PlaylistEditPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _PlaylistForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/playlist/PlaylistForm.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/playlist/api.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/playlist/styles.ts");
/* harmony import */ var _usePlaylist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/playlist/usePlaylist.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const PlaylistEditPage = ({
  navModel,
  match
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_8__.getPlaylistStyles);
  const {
    playlist,
    loading
  } = (0,_usePlaylist__WEBPACK_IMPORTED_MODULE_9__.usePlaylist)(match.params.uid);

  const onSubmit = async playlist => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_7__.updatePlaylist)(match.params.uid, playlist);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/playlists');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
        className: styles.subHeading,
        children: "Edit playlist"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
        className: styles.description,
        children: "A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PlaylistForm__WEBPACK_IMPORTED_MODULE_6__.PlaylistForm, {
        onSubmit: onSubmit,
        playlist: playlist
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'playlists')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistEditPage));

/***/ }),

/***/ "./public/app/features/playlist/PlaylistForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistForm": () => (/* binding */ PlaylistForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_OptionsUI_DashboardPickerByID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/OptionsUI/DashboardPickerByID.tsx");
/* harmony import */ var _core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var _core_services_search_srv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/services/search_srv.ts");
/* harmony import */ var _PlaylistTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/playlist/PlaylistTable.tsx");
/* harmony import */ var _usePlaylistItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/playlist/usePlaylistItems.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;













const searchSrv = new _core_services_search_srv__WEBPACK_IMPORTED_MODULE_6__.SearchSrv();
const PlaylistForm = ({
  onSubmit,
  playlist
}) => {
  var _PlaylistTable, _Field;

  const {
    name,
    interval,
    items: propItems
  } = playlist;
  const {
    items,
    addById,
    addByTag,
    deleteItem,
    moveDown,
    moveUp
  } = (0,_usePlaylistItems__WEBPACK_IMPORTED_MODULE_8__.usePlaylistItems)(propItems);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
      onSubmit: list => onSubmit(Object.assign({}, list, {
        items
      })),
      validateOn: 'onBlur',
      children: ({
        register,
        errors
      }) => {
        var _errors$name, _errors$interval;

        const isDisabled = items.length === 0 || Object.keys(errors).length > 0;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Name",
            invalid: !!errors.name,
            error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              type: "text"
            }, register('name', {
              required: 'Name is required'
            }), {
              placeholder: "Name",
              defaultValue: name,
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.PlaylistForm.name
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Interval",
            invalid: !!errors.interval,
            error: errors === null || errors === void 0 ? void 0 : (_errors$interval = errors.interval) === null || _errors$interval === void 0 ? void 0 : _errors$interval.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              type: "text"
            }, register('interval', {
              required: 'Interval is required'
            }), {
              placeholder: "5m",
              defaultValue: interval !== null && interval !== void 0 ? interval : '5m',
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.PlaylistForm.interval
            }))
          }), _PlaylistTable || (_PlaylistTable = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PlaylistTable__WEBPACK_IMPORTED_MODULE_7__.PlaylistTable, {
            items: items,
            onMoveUp: moveUp,
            onMoveDown: moveDown,
            onDelete: deleteItem
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "gf-form-group",
            children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
              className: "page-headering",
              children: "Add dashboards"
            })), _Field || (_Field = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Add by title",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_OptionsUI_DashboardPickerByID__WEBPACK_IMPORTED_MODULE_4__.DashboardPickerByID, {
                onChange: addById,
                id: "dashboard-picker",
                isClearable: true
              })
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Add by tag",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_5__.TagFilter, {
                isClearable: true,
                tags: [],
                hideValues: true,
                tagOptions: searchSrv.getDashboardTags,
                onChange: addByTag,
                placeholder: ''
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              variant: "primary",
              disabled: isDisabled,
              children: "Save"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
              variant: "secondary",
              href: `${_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.appSubUrl}/playlists`,
              children: "Cancel"
            })]
          })]
        });
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/playlist/PlaylistTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistTable": () => (/* binding */ PlaylistTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PlaylistTableRows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/PlaylistTableRows.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;





const PlaylistTable = ({
  items,
  onMoveUp,
  onMoveDown,
  onDelete
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "gf-form-group",
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      className: "page-headering",
      children: "Dashboards"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
      className: "filter-table",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PlaylistTableRows__WEBPACK_IMPORTED_MODULE_1__.PlaylistTableRows, {
          items: items,
          onMoveUp: onMoveUp,
          onMoveDown: onMoveDown,
          onDelete: onDelete
        })
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/playlist/PlaylistTableRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistTableRow": () => (/* binding */ PlaylistTableRow)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const PlaylistTableRow = ({
  item,
  onDelete,
  onMoveDown,
  onMoveUp,
  first,
  last
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);

  const onDeleteClick = event => {
    event.preventDefault();
    onDelete(item);
  };

  const onMoveDownClick = event => {
    event.preventDefault();
    onMoveDown(item);
  };

  const onMoveUpClick = event => {
    event.preventDefault();
    onMoveUp(item);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemRow,
    children: [item.type === 'dashboard_by_id' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.td, styles.item),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "apps",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemIdType
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: item.title
      })]
    }) : null, item.type === 'dashboard_by_tag' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.td, styles.item),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "tag-alt",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemTagType
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_4__.TagBadge, {
        label: item.title,
        removeIcon: false,
        count: 0
      }, item.id)]
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.td, styles.settings),
      children: [!first ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        name: "arrow-up",
        size: "md",
        onClick: onMoveUpClick,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemMoveUp,
        type: "button"
      }) : null, !last ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        name: "arrow-down",
        size: "md",
        onClick: onMoveDownClick,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemMoveDown,
        type: "button"
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        name: "times",
        size: "md",
        onClick: onDeleteClick,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemDelete,
        type: "button"
      })]
    })]
  }, item.title);
};

function getStyles(theme) {
  return {
    td: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: td;
      line-height: 28px;
      max-width: 335px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,
    item: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: item;
      span {
        margin-left: ${theme.spacing.xs};
      }
    `,
    settings: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: settings;
      text-align: right;
    `
  };
}

/***/ }),

/***/ "./public/app/features/playlist/PlaylistTableRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistTableRows": () => (/* binding */ PlaylistTableRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PlaylistTableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/PlaylistTableRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _tr;





const PlaylistTableRows = ({
  items,
  onMoveUp,
  onMoveDown,
  onDelete
}) => {
  if (items.length === 0) {
    return _tr || (_tr = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("em", {
          children: "Playlist is empty. Add dashboards below."
        })
      })
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: items.map((item, index) => {
      const first = index === 0;
      const last = index === items.length - 1;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PlaylistTableRow__WEBPACK_IMPORTED_MODULE_1__.PlaylistTableRow, {
        first: first,
        last: last,
        item: item,
        onDelete: onDelete,
        onMoveDown: onMoveDown,
        onMoveUp: onMoveUp
      }, item.title);
    })
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

/***/ }),

/***/ "./public/app/features/playlist/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPlaylistStyles": () => (/* binding */ getPlaylistStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

function getPlaylistStyles(theme) {
  return {
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: description;
      width: 555px;
      margin-bottom: 20px;
    `,
    subHeading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: sub-heading;
      margin-bottom: ${theme.spacing(2)};
    `
  };
}

/***/ }),

/***/ "./public/app/features/playlist/usePlaylist.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePlaylist": () => (/* binding */ usePlaylist)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/api.ts");


function usePlaylist(playlistUid) {
  const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    items: [],
    interval: '5m',
    name: '',
    uid: ''
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const initPlaylist = async () => {
      if (!playlistUid) {
        setLoading(false);
        return;
      }

      const list = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getPlaylist)(playlistUid);
      setPlaylist(list);
      setLoading(false);
    };

    initPlaylist();
  }, [playlistUid]);
  return {
    playlist,
    loading
  };
}

/***/ }),

/***/ "./public/app/features/playlist/usePlaylistItems.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePlaylistItems": () => (/* binding */ usePlaylistItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePlaylistItems(playlistItems) {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(playlistItems !== null && playlistItems !== void 0 ? playlistItems : []);
  const addById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(dashboard => {
    if (!dashboard || items.find(item => item.id === dashboard.id)) {
      return;
    }

    const newItem = {
      id: dashboard.id,
      title: dashboard.label,
      type: 'dashboard_by_id',
      value: dashboard.id.toString(10),
      order: items.length + 1
    };
    setItems([...items, newItem]);
  }, [items]);
  const addByTag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(tags => {
    const tag = tags[0];

    if (!tag || items.find(item => item.value === tag)) {
      return;
    }

    const newItem = {
      title: tag,
      type: 'dashboard_by_tag',
      value: tag,
      order: items.length + 1
    };
    setItems([...items, newItem]);
  }, [items]);
  const movePlaylistItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item, offset) => {
    const newItems = [...items];
    const currentPosition = newItems.indexOf(item);
    const newPosition = currentPosition + offset;

    if (newPosition >= 0 && newPosition < newItems.length) {
      newItems.splice(currentPosition, 1);
      newItems.splice(newPosition, 0, item);
    }

    setItems(newItems);
  }, [items]);
  const moveUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => {
    movePlaylistItem(item, -1);
  }, [movePlaylistItem]);
  const moveDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => {
    movePlaylistItem(item, 1);
  }, [movePlaylistItem]);
  const deleteItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => {
    setItems(items.filter(i => i !== item));
  }, [items]);
  return {
    items,
    addById,
    addByTag,
    deleteItem,
    moveDown,
    moveUp
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RFZGl0UGFnZS5iZDg4ODQ0YjJhNmE2MmJlODg2Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ08sTUFBTUksbUJBQThCLEdBQUcsQ0FBQztFQUM3Q0MsUUFBUSxFQUFFQyxhQURtQztFQUU3Q0MsS0FGNkM7RUFHN0NDLEtBSDZDO0VBSTdDQyxXQUFXLEdBQUcsS0FKK0I7RUFLN0NDLE9BTDZDO0VBTTdDQyxRQU42QztFQU83Q0MsRUFQNkM7RUFRN0NDLFdBQVcsR0FBRyxPQVIrQjtFQVM3Q0M7QUFUNkMsQ0FBRCxLQVV4QztFQUNKLE1BQU1DLGVBQWUsR0FBR2YsdURBQVEsQ0FBRWdCLEtBQUQsSUFBbUJDLGFBQWEsQ0FBQ0QsS0FBSyxJQUFJLEVBQVYsRUFBY0gsV0FBZCxFQUEyQkMsa0JBQTNCLENBQWpDLEVBQWlGLEdBQWpGLENBQWhDO0VBQ0EsTUFBTUksTUFBTSxHQUFHWCxLQUFLLEdBQUc7SUFBRUEsS0FBRjtJQUFTLENBQUNNLFdBQUQsR0FBZU4sS0FBSyxDQUFDTSxXQUFEO0VBQTdCLENBQUgsR0FBa0RNLFNBQXRFOztFQUNBLE1BQU1kLFFBQVEsR0FBSWUsSUFBRCxJQUFnRDtJQUMvRGQsYUFBYSxDQUFDYyxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRWIsS0FBUCxDQUFiO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRSx1REFBQyxvREFBRDtJQUNFLE9BQU8sRUFBRUssRUFEWDtJQUVFLEtBQUssRUFBRUosS0FGVDtJQUdFLFdBQVcsRUFBRUMsV0FIZjtJQUlFLGNBQWMsRUFBRSxJQUpsQjtJQUtFLFdBQVcsRUFBRU0sZUFMZjtJQU1FLFFBQVEsRUFBRVYsUUFOWjtJQU9FLFdBQVcsRUFBQyxrQkFQZDtJQVFFLGdCQUFnQixFQUFDLHFCQVJuQjtJQVNFLEtBQUssRUFBRWEsTUFUVDtJQVVFLE9BQU8sRUFBRVIsT0FW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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvT3B0aW9uc1VJL0Rhc2hib2FyZFBpY2tlckJ5SUQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0RWRpdFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RUYWJsZVJvdy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RUYWJsZVJvd3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L2FwaS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvdXNlUGxheWxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L3VzZVBsYXlsaXN0SXRlbXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWJvdW5jZSBmcm9tICdkZWJvdW5jZS1wcm9taXNlJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBc3luY1NlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgcHJlZmVyIHVzaW5nIGRhc2hib2FyZCB1aWQgcmF0aGVyIHRoYW4gaWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRQaWNrZXJJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgdWlkOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6IChkYXNoYm9hcmQ/OiBEYXNoYm9hcmRQaWNrZXJJdGVtKSA9PiB2b2lkO1xuICB2YWx1ZT86IERhc2hib2FyZFBpY2tlckl0ZW07XG4gIHdpZHRoPzogbnVtYmVyO1xuICBpc0NsZWFyYWJsZT86IGJvb2xlYW47XG4gIGludmFsaWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlkPzogc3RyaW5nO1xuICBvcHRpb25MYWJlbD86IHN0cmluZztcbiAgLyoqIExpc3Qgb2YgZGFzaGJvYXJkIFVJRHMgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGUgc2VsZWN0IG9wdGlvbnMgKi9cbiAgZXhjbHVkZWREYXNoYm9hcmRzPzogc3RyaW5nW107XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgcHJlZmVyIHVzaW5nIGRhc2hib2FyZCB1aWQgcmF0aGVyIHRoYW4gaWRcbiAqL1xuZXhwb3J0IGNvbnN0IERhc2hib2FyZFBpY2tlckJ5SUQ6IEZDPFByb3BzPiA9ICh7XG4gIG9uQ2hhbmdlOiBwcm9wc09uQ2hhbmdlLFxuICB2YWx1ZSxcbiAgd2lkdGgsXG4gIGlzQ2xlYXJhYmxlID0gZmFsc2UsXG4gIGludmFsaWQsXG4gIGRpc2FibGVkLFxuICBpZCxcbiAgb3B0aW9uTGFiZWwgPSAnbGFiZWwnLFxuICBleGNsdWRlZERhc2hib2FyZHMsXG59KSA9PiB7XG4gIGNvbnN0IGRlYm91bmNlZFNlYXJjaCA9IGRlYm91bmNlKChxdWVyeTogc3RyaW5nKSA9PiBnZXREYXNoYm9hcmRzKHF1ZXJ5IHx8ICcnLCBvcHRpb25MYWJlbCwgZXhjbHVkZWREYXNoYm9hcmRzKSwgMzAwKTtcbiAgY29uc3Qgb3B0aW9uID0gdmFsdWUgPyB7IHZhbHVlLCBbb3B0aW9uTGFiZWxdOiB2YWx1ZVtvcHRpb25MYWJlbF0gfSA6IHVuZGVmaW5lZDtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoaXRlbTogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFBpY2tlckl0ZW0+KSA9PiB7XG4gICAgcHJvcHNPbkNoYW5nZShpdGVtPy52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXN5bmNTZWxlY3RcbiAgICAgIGlucHV0SWQ9e2lkfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaXNDbGVhcmFibGU9e2lzQ2xlYXJhYmxlfVxuICAgICAgZGVmYXVsdE9wdGlvbnM9e3RydWV9XG4gICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkU2VhcmNofVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgZGFzaGJvYXJkXCJcbiAgICAgIG5vT3B0aW9uc01lc3NhZ2U9XCJObyBkYXNoYm9hcmRzIGZvdW5kXCJcbiAgICAgIHZhbHVlPXtvcHRpb259XG4gICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbltvcHRpb25MYWJlbF19XG4gICAgLz5cbiAgKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhc2hib2FyZHMoXG4gIHF1ZXJ5OiBzdHJpbmcsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIGV4Y2x1ZGVkRGFzaGJvYXJkcz86IHN0cmluZ1tdXG4pOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRQaWNrZXJJdGVtPj4+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYmFja2VuZFNydi5zZWFyY2goeyB0eXBlOiAnZGFzaC1kYicsIHF1ZXJ5LCBsaW1pdDogMTAwIH0pO1xuICBjb25zdCBkYXNoYm9hcmRzID0gcmVzdWx0Lm1hcCgoeyBpZCwgdWlkID0gJycsIHRpdGxlLCBmb2xkZXJUaXRsZSB9KSA9PiB7XG4gICAgY29uc3QgdmFsdWU6IERhc2hib2FyZFBpY2tlckl0ZW0gPSB7XG4gICAgICBpZCxcbiAgICAgIHVpZCxcbiAgICAgIFtsYWJlbF06IGAke2ZvbGRlclRpdGxlID8/ICdHZW5lcmFsJ30vJHt0aXRsZX1gLFxuICAgIH07XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgW2xhYmVsXTogdmFsdWVbbGFiZWxdIH07XG4gIH0pO1xuXG4gIGlmIChleGNsdWRlZERhc2hib2FyZHMpIHtcbiAgICByZXR1cm4gZGFzaGJvYXJkcy5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gIWV4Y2x1ZGVkRGFzaGJvYXJkcy5pbmNsdWRlcyh2YWx1ZS51aWQgYXMgc3RyaW5nKSk7XG4gIH1cblxuICByZXR1cm4gZGFzaGJvYXJkcztcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIE1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJy4uLy4uL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5cbmltcG9ydCB7IFBsYXlsaXN0Rm9ybSB9IGZyb20gJy4vUGxheWxpc3RGb3JtJztcbmltcG9ydCB7IHVwZGF0ZVBsYXlsaXN0IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgZ2V0UGxheWxpc3RTdHlsZXMgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBQbGF5bGlzdCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUGxheWxpc3QgfSBmcm9tICcuL3VzZVBsYXlsaXN0JztcblxuaW50ZXJmYWNlIENvbm5lY3RlZFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlUGFyYW1zIHtcbiAgdWlkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIENvbm5lY3RlZFByb3BzLCBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczxSb3V0ZVBhcmFtcz4ge31cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0RWRpdFBhZ2U6IEZDPFByb3BzPiA9ICh7IG5hdk1vZGVsLCBtYXRjaCB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0UGxheWxpc3RTdHlsZXMpO1xuICBjb25zdCB7IHBsYXlsaXN0LCBsb2FkaW5nIH0gPSB1c2VQbGF5bGlzdChtYXRjaC5wYXJhbXMudWlkKTtcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAocGxheWxpc3Q6IFBsYXlsaXN0KSA9PiB7XG4gICAgYXdhaXQgdXBkYXRlUGxheWxpc3QobWF0Y2gucGFyYW1zLnVpZCwgcGxheWxpc3QpO1xuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvcGxheWxpc3RzJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnN1YkhlYWRpbmd9PkVkaXQgcGxheWxpc3Q8L2gzPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBBIHBsYXlsaXN0IHJvdGF0ZXMgdGhyb3VnaCBhIHByZS1zZWxlY3RlZCBsaXN0IG9mIGRhc2hib2FyZHMuIEEgcGxheWxpc3QgY2FuIGJlIGEgZ3JlYXQgd2F5IHRvIGJ1aWxkXG4gICAgICAgICAgc2l0dWF0aW9uYWwgYXdhcmVuZXNzLCBvciBqdXN0IHNob3cgb2ZmIHlvdXIgbWV0cmljcyB0byB5b3VyIHRlYW0gb3IgdmlzaXRvcnMuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8UGxheWxpc3RGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gcGxheWxpc3Q9e3BsYXlsaXN0fSAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzPENvbm5lY3RlZFByb3BzLCB7fSwgU3RvcmVTdGF0ZT4gPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3BsYXlsaXN0cycpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQbGF5bGlzdEVkaXRQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZvcm0sIEhvcml6b250YWxHcm91cCwgSW5wdXQsIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRQaWNrZXJCeUlEIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9PcHRpb25zVUkvRGFzaGJvYXJkUGlja2VyQnlJRCc7XG5cbmltcG9ydCB7IFRhZ0ZpbHRlciB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnRmlsdGVyJztcbmltcG9ydCB7IFNlYXJjaFNydiB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvc2VhcmNoX3Nydic7XG5cbmltcG9ydCB7IFBsYXlsaXN0VGFibGUgfSBmcm9tICcuL1BsYXlsaXN0VGFibGUnO1xuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZVBsYXlsaXN0SXRlbXMgfSBmcm9tICcuL3VzZVBsYXlsaXN0SXRlbXMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RGb3JtUHJvcHMge1xuICBvblN1Ym1pdDogKHBsYXlsaXN0OiBQbGF5bGlzdCkgPT4gdm9pZDtcbiAgcGxheWxpc3Q6IFBsYXlsaXN0O1xufVxuXG5jb25zdCBzZWFyY2hTcnYgPSBuZXcgU2VhcmNoU3J2KCk7XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdEZvcm06IEZDPFBsYXlsaXN0Rm9ybVByb3BzPiA9ICh7IG9uU3VibWl0LCBwbGF5bGlzdCB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaW50ZXJ2YWwsIGl0ZW1zOiBwcm9wSXRlbXMgfSA9IHBsYXlsaXN0O1xuICBjb25zdCB7IGl0ZW1zLCBhZGRCeUlkLCBhZGRCeVRhZywgZGVsZXRlSXRlbSwgbW92ZURvd24sIG1vdmVVcCB9ID0gdXNlUGxheWxpc3RJdGVtcyhwcm9wSXRlbXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17KGxpc3Q6IFBsYXlsaXN0KSA9PiBvblN1Ym1pdCh7IC4uLmxpc3QsIGl0ZW1zIH0pfSB2YWxpZGF0ZU9uPXsnb25CbHVyJ30+XG4gICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gaXRlbXMubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnM/Lm5hbWU/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogJ05hbWUgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0ubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJJbnRlcnZhbFwiIGludmFsaWQ9eyEhZXJyb3JzLmludGVydmFsfSBlcnJvcj17ZXJyb3JzPy5pbnRlcnZhbD8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2ludGVydmFsJywgeyByZXF1aXJlZDogJ0ludGVydmFsIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNW1cIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbnRlcnZhbCA/PyAnNW0nfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pbnRlcnZhbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxQbGF5bGlzdFRhYmxlIGl0ZW1zPXtpdGVtc30gb25Nb3ZlVXA9e21vdmVVcH0gb25Nb3ZlRG93bj17bW92ZURvd259IG9uRGVsZXRlPXtkZWxldGVJdGVtfSAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRlcmluZ1wiPkFkZCBkYXNoYm9hcmRzPC9oMz5cblxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkFkZCBieSB0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPERhc2hib2FyZFBpY2tlckJ5SUQgb25DaGFuZ2U9e2FkZEJ5SWR9IGlkPVwiZGFzaGJvYXJkLXBpY2tlclwiIGlzQ2xlYXJhYmxlIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkFkZCBieSB0YWdcIj5cbiAgICAgICAgICAgICAgICAgIDxUYWdGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgICAgICAgdGFncz17W119XG4gICAgICAgICAgICAgICAgICAgIGhpZGVWYWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgdGFnT3B0aW9ucz17c2VhcmNoU3J2LmdldERhc2hib2FyZFRhZ3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthZGRCeVRhZ31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eycnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBocmVmPXtgJHtjb25maWcuYXBwU3ViVXJsfS9wbGF5bGlzdHNgfT5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9Gb3JtPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGxheWxpc3RUYWJsZVJvd3MgfSBmcm9tICcuL1BsYXlsaXN0VGFibGVSb3dzJztcbmltcG9ydCB7IFBsYXlsaXN0SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RUYWJsZVByb3BzIHtcbiAgaXRlbXM6IFBsYXlsaXN0SXRlbVtdO1xuICBvbk1vdmVVcDogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25Nb3ZlRG93bjogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25EZWxldGU6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdFRhYmxlOiBGQzxQbGF5bGlzdFRhYmxlUHJvcHM+ID0gKHsgaXRlbXMsIG9uTW92ZVVwLCBvbk1vdmVEb3duLCBvbkRlbGV0ZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJpbmdcIj5EYXNoYm9hcmRzPC9oMz5cblxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZVwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPFBsYXlsaXN0VGFibGVSb3dzIGl0ZW1zPXtpdGVtc30gb25Nb3ZlVXA9e29uTW92ZVVwfSBvbk1vdmVEb3duPXtvbk1vdmVEb3dufSBvbkRlbGV0ZT17b25EZWxldGV9IC8+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgSWNvbiwgSWNvbkJ1dHRvbiwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBUYWdCYWRnZSB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnQmFkZ2UnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIFBsYXlsaXN0VGFibGVSb3dQcm9wcyB7XG4gIGZpcnN0OiBib29sZWFuO1xuICBsYXN0OiBib29sZWFuO1xuICBpdGVtOiBQbGF5bGlzdEl0ZW07XG4gIG9uTW92ZVVwOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbk1vdmVEb3duOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbkRlbGV0ZTogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0VGFibGVSb3c6IEZDPFBsYXlsaXN0VGFibGVSb3dQcm9wcz4gPSAoeyBpdGVtLCBvbkRlbGV0ZSwgb25Nb3ZlRG93biwgb25Nb3ZlVXAsIGZpcnN0LCBsYXN0IH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IG9uRGVsZXRlQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uRGVsZXRlKGl0ZW0pO1xuICB9O1xuICBjb25zdCBvbk1vdmVEb3duQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uTW92ZURvd24oaXRlbSk7XG4gIH07XG4gIGNvbnN0IG9uTW92ZVVwQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uTW92ZVVwKGl0ZW0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHRyIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbVJvd30ga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgIHtpdGVtLnR5cGUgPT09ICdkYXNoYm9hcmRfYnlfaWQnID8gKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtjeChzdHlsZXMudGQsIHN0eWxlcy5pdGVtKX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cImFwcHNcIiBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1JZFR5cGV9IC8+XG4gICAgICAgICAgPHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICA8L3RkPlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7aXRlbS50eXBlID09PSAnZGFzaGJvYXJkX2J5X3RhZycgPyAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e2N4KHN0eWxlcy50ZCwgc3R5bGVzLml0ZW0pfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwidGFnLWFsdFwiIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbVRhZ1R5cGV9IC8+XG4gICAgICAgICAgPFRhZ0JhZGdlIGtleT17aXRlbS5pZH0gbGFiZWw9e2l0ZW0udGl0bGV9IHJlbW92ZUljb249e2ZhbHNlfSBjb3VudD17MH0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPHRkIGNsYXNzTmFtZT17Y3goc3R5bGVzLnRkLCBzdHlsZXMuc2V0dGluZ3MpfT5cbiAgICAgICAgeyFmaXJzdCA/IChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgbmFtZT1cImFycm93LXVwXCJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk1vdmVVcENsaWNrfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtTW92ZVVwfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHshbGFzdCA/IChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgbmFtZT1cImFycm93LWRvd25cIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTW92ZURvd25DbGlja31cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbU1vdmVEb3dufVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgbmFtZT1cInRpbWVzXCJcbiAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlQ2xpY2t9XG4gICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtRGVsZXRlfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAvPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZDogY3NzYFxuICAgICAgbGFiZWw6IHRkO1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICBtYXgtd2lkdGg6IDMzNXB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBgLFxuICAgIGl0ZW06IGNzc2BcbiAgICAgIGxhYmVsOiBpdGVtO1xuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICAgICAgfVxuICAgIGAsXG4gICAgc2V0dGluZ3M6IGNzc2BcbiAgICAgIGxhYmVsOiBzZXR0aW5ncztcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsYXlsaXN0VGFibGVSb3cgfSBmcm9tICcuL1BsYXlsaXN0VGFibGVSb3cnO1xuaW1wb3J0IHsgUGxheWxpc3RJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQbGF5bGlzdFRhYmxlUm93c1Byb3BzIHtcbiAgaXRlbXM6IFBsYXlsaXN0SXRlbVtdO1xuICBvbk1vdmVVcDogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25Nb3ZlRG93bjogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25EZWxldGU6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdFRhYmxlUm93czogRkM8UGxheWxpc3RUYWJsZVJvd3NQcm9wcz4gPSAoeyBpdGVtcywgb25Nb3ZlVXAsIG9uTW92ZURvd24sIG9uRGVsZXRlIH0pID0+IHtcbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZW0+UGxheWxpc3QgaXMgZW1wdHkuIEFkZCBkYXNoYm9hcmRzIGJlbG93LjwvZW0+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBjb25zdCBsYXN0ID0gaW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBsYXlsaXN0VGFibGVSb3dcbiAgICAgICAgICAgIGZpcnN0PXtmaXJzdH1cbiAgICAgICAgICAgIGxhc3Q9e2xhc3R9XG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlfVxuICAgICAgICAgICAgb25Nb3ZlRG93bj17b25Nb3ZlRG93bn1cbiAgICAgICAgICAgIG9uTW92ZVVwPXtvbk1vdmVVcH1cbiAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICcuLi8uLi9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24sIGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdCwgUGxheWxpc3REVE8gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsYXlsaXN0KHBsYXlsaXN0OiBQbGF5bGlzdCkge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9wbGF5bGlzdHMnLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGxheWxpc3QodWlkOiBzdHJpbmcsIHBsYXlsaXN0OiBQbGF5bGlzdCkge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL3BsYXlsaXN0cy8ke3VpZH1gLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGxheWxpc3QodWlkOiBzdHJpbmcpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9wbGF5bGlzdHMvJHt1aWR9YCksICdQbGF5bGlzdCBkZWxldGVkJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQbGF5bGlzdCh1aWQ6IHN0cmluZyk6IFByb21pc2U8UGxheWxpc3Q+IHtcbiAgY29uc3QgcmVzdWx0OiBQbGF5bGlzdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvcGxheWxpc3RzLyR7dWlkfWApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGxheWxpc3QocXVlcnk6IHN0cmluZyk6IFByb21pc2U8UGxheWxpc3REVE9bXT4ge1xuICBjb25zdCByZXN1bHQ6IFBsYXlsaXN0RFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsYXlsaXN0cy8nLCB7IHF1ZXJ5IH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiB3aXRoRXJyb3JIYW5kbGluZyhhcGlDYWxsOiAoKSA9PiBQcm9taXNlPHZvaWQ+LCBtZXNzYWdlID0gJ1BsYXlsaXN0IHNhdmVkJykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUNhbGwoKTtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbihtZXNzYWdlKSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdVbmFibGUgdG8gc2F2ZSBwbGF5bGlzdCcsIGUpKSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGF5bGlzdFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgICBsYWJlbDogZGVzY3JpcHRpb247XG4gICAgICB3aWR0aDogNTU1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGAsXG4gICAgc3ViSGVhZGluZzogY3NzYFxuICAgICAgbGFiZWw6IHN1Yi1oZWFkaW5nO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0UGxheWxpc3QgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBQbGF5bGlzdCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGxheWxpc3QocGxheWxpc3RVaWQ/OiBzdHJpbmcpIHtcbiAgY29uc3QgW3BsYXlsaXN0LCBzZXRQbGF5bGlzdF0gPSB1c2VTdGF0ZTxQbGF5bGlzdD4oeyBpdGVtczogW10sIGludGVydmFsOiAnNW0nLCBuYW1lOiAnJywgdWlkOiAnJyB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0UGxheWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXBsYXlsaXN0VWlkKSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBsaXN0ID0gYXdhaXQgZ2V0UGxheWxpc3QocGxheWxpc3RVaWQpO1xuICAgICAgc2V0UGxheWxpc3QobGlzdCk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGluaXRQbGF5bGlzdCgpO1xuICB9LCBbcGxheWxpc3RVaWRdKTtcblxuICByZXR1cm4geyBwbGF5bGlzdCwgbG9hZGluZyB9O1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRQaWNrZXJJdGVtIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9PcHRpb25zVUkvRGFzaGJvYXJkUGlja2VyQnlJRCc7XG5cbmltcG9ydCB7IFBsYXlsaXN0SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUGxheWxpc3RJdGVtcyhwbGF5bGlzdEl0ZW1zPzogUGxheWxpc3RJdGVtW10pIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTxQbGF5bGlzdEl0ZW1bXT4ocGxheWxpc3RJdGVtcyA/PyBbXSk7XG5cbiAgY29uc3QgYWRkQnlJZCA9IHVzZUNhbGxiYWNrKFxuICAgIChkYXNoYm9hcmQ/OiBEYXNoYm9hcmRQaWNrZXJJdGVtKSA9PiB7XG4gICAgICBpZiAoIWRhc2hib2FyZCB8fCBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBkYXNoYm9hcmQuaWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3SXRlbTogUGxheWxpc3RJdGVtID0ge1xuICAgICAgICBpZDogZGFzaGJvYXJkLmlkLFxuICAgICAgICB0aXRsZTogZGFzaGJvYXJkLmxhYmVsIGFzIHN0cmluZyxcbiAgICAgICAgdHlwZTogJ2Rhc2hib2FyZF9ieV9pZCcsXG4gICAgICAgIHZhbHVlOiBkYXNoYm9hcmQuaWQudG9TdHJpbmcoMTApLFxuICAgICAgICBvcmRlcjogaXRlbXMubGVuZ3RoICsgMSxcbiAgICAgIH07XG4gICAgICBzZXRJdGVtcyhbLi4uaXRlbXMsIG5ld0l0ZW1dKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICBjb25zdCBhZGRCeVRhZyA9IHVzZUNhbGxiYWNrKFxuICAgICh0YWdzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgY29uc3QgdGFnID0gdGFnc1swXTtcbiAgICAgIGlmICghdGFnIHx8IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFsdWUgPT09IHRhZykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdJdGVtOiBQbGF5bGlzdEl0ZW0gPSB7XG4gICAgICAgIHRpdGxlOiB0YWcsXG4gICAgICAgIHR5cGU6ICdkYXNoYm9hcmRfYnlfdGFnJyxcbiAgICAgICAgdmFsdWU6IHRhZyxcbiAgICAgICAgb3JkZXI6IGl0ZW1zLmxlbmd0aCArIDEsXG4gICAgICB9O1xuICAgICAgc2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfSxcbiAgICBbaXRlbXNdXG4gICk7XG5cbiAgY29uc3QgbW92ZVBsYXlsaXN0SXRlbSA9IHVzZUNhbGxiYWNrKFxuICAgIChpdGVtOiBQbGF5bGlzdEl0ZW0sIG9mZnNldDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtc107XG4gICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBuZXdJdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gKyBvZmZzZXQ7XG5cbiAgICAgIGlmIChuZXdQb3NpdGlvbiA+PSAwICYmIG5ld1Bvc2l0aW9uIDwgbmV3SXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIG5ld0l0ZW1zLnNwbGljZShjdXJyZW50UG9zaXRpb24sIDEpO1xuICAgICAgICBuZXdJdGVtcy5zcGxpY2UobmV3UG9zaXRpb24sIDAsIGl0ZW0pO1xuICAgICAgfVxuICAgICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICAgIH0sXG4gICAgW2l0ZW1zXVxuICApO1xuXG4gIGNvbnN0IG1vdmVVcCA9IHVzZUNhbGxiYWNrKFxuICAgIChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHtcbiAgICAgIG1vdmVQbGF5bGlzdEl0ZW0oaXRlbSwgLTEpO1xuICAgIH0sXG4gICAgW21vdmVQbGF5bGlzdEl0ZW1dXG4gICk7XG5cbiAgY29uc3QgbW92ZURvd24gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBtb3ZlUGxheWxpc3RJdGVtKGl0ZW0sIDEpO1xuICAgIH0sXG4gICAgW21vdmVQbGF5bGlzdEl0ZW1dXG4gICk7XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9IHVzZUNhbGxiYWNrKFxuICAgIChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHtcbiAgICAgIHNldEl0ZW1zKGl0ZW1zLmZpbHRlcigoaSkgPT4gaSAhPT0gaXRlbSkpO1xuICAgIH0sXG4gICAgW2l0ZW1zXVxuICApO1xuXG4gIHJldHVybiB7IGl0ZW1zLCBhZGRCeUlkLCBhZGRCeVRhZywgZGVsZXRlSXRlbSwgbW92ZURvd24sIG1vdmVVcCB9O1xufVxuIl0sIm5hbWVzIjpbImRlYm91bmNlIiwiUmVhY3QiLCJBc3luY1NlbGVjdCIsImJhY2tlbmRTcnYiLCJEYXNoYm9hcmRQaWNrZXJCeUlEIiwib25DaGFuZ2UiLCJwcm9wc09uQ2hhbmdlIiwidmFsdWUiLCJ3aWR0aCIsImlzQ2xlYXJhYmxlIiwiaW52YWxpZCIsImRpc2FibGVkIiwiaWQiLCJvcHRpb25MYWJlbCIsImV4Y2x1ZGVkRGFzaGJvYXJkcyIsImRlYm91bmNlZFNlYXJjaCIsInF1ZXJ5IiwiZ2V0RGFzaGJvYXJkcyIsIm9wdGlvbiIsInVuZGVmaW5lZCIsIml0ZW0iLCJsYWJlbCIsInJlc3VsdCIsInNlYXJjaCIsInR5cGUiLCJsaW1pdCIsImRhc2hib2FyZHMiLCJtYXAiLCJ1aWQiLCJ0aXRsZSIsImZvbGRlclRpdGxlIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJjb25uZWN0IiwibG9jYXRpb25TZXJ2aWNlIiwidXNlU3R5bGVzMiIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsIlBsYXlsaXN0Rm9ybSIsInVwZGF0ZVBsYXlsaXN0IiwiZ2V0UGxheWxpc3RTdHlsZXMiLCJ1c2VQbGF5bGlzdCIsIlBsYXlsaXN0RWRpdFBhZ2UiLCJuYXZNb2RlbCIsIm1hdGNoIiwic3R5bGVzIiwicGxheWxpc3QiLCJsb2FkaW5nIiwicGFyYW1zIiwib25TdWJtaXQiLCJwdXNoIiwic3ViSGVhZGluZyIsImRlc2NyaXB0aW9uIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZJbmRleCIsInNlbGVjdG9ycyIsImNvbmZpZyIsIkJ1dHRvbiIsIkZpZWxkIiwiRm9ybSIsIkhvcml6b250YWxHcm91cCIsIklucHV0IiwiTGlua0J1dHRvbiIsIlRhZ0ZpbHRlciIsIlNlYXJjaFNydiIsIlBsYXlsaXN0VGFibGUiLCJ1c2VQbGF5bGlzdEl0ZW1zIiwic2VhcmNoU3J2IiwibmFtZSIsImludGVydmFsIiwiaXRlbXMiLCJwcm9wSXRlbXMiLCJhZGRCeUlkIiwiYWRkQnlUYWciLCJkZWxldGVJdGVtIiwibW92ZURvd24iLCJtb3ZlVXAiLCJsaXN0IiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJpc0Rpc2FibGVkIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInBhZ2VzIiwiZ2V0RGFzaGJvYXJkVGFncyIsImFwcFN1YlVybCIsIlBsYXlsaXN0VGFibGVSb3dzIiwib25Nb3ZlVXAiLCJvbk1vdmVEb3duIiwib25EZWxldGUiLCJjc3MiLCJjeCIsIkljb24iLCJJY29uQnV0dG9uIiwidXNlU3R5bGVzIiwiVGFnQmFkZ2UiLCJQbGF5bGlzdFRhYmxlUm93IiwiZmlyc3QiLCJsYXN0IiwiZ2V0U3R5bGVzIiwib25EZWxldGVDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbk1vdmVEb3duQ2xpY2siLCJvbk1vdmVVcENsaWNrIiwiaXRlbVJvdyIsInRkIiwiaXRlbUlkVHlwZSIsIml0ZW1UYWdUeXBlIiwic2V0dGluZ3MiLCJpdGVtTW92ZVVwIiwiaXRlbU1vdmVEb3duIiwiaXRlbURlbGV0ZSIsInRoZW1lIiwic3BhY2luZyIsInhzIiwiaW5kZXgiLCJnZXRCYWNrZW5kU3J2Iiwibm90aWZ5QXBwIiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIiwiZGlzcGF0Y2giLCJjcmVhdGVQbGF5bGlzdCIsIndpdGhFcnJvckhhbmRsaW5nIiwicG9zdCIsInB1dCIsImRlbGV0ZVBsYXlsaXN0IiwiZGVsZXRlIiwiZ2V0UGxheWxpc3QiLCJnZXQiLCJnZXRBbGxQbGF5bGlzdCIsImFwaUNhbGwiLCJlIiwiRXJyb3IiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInBsYXlsaXN0VWlkIiwic2V0UGxheWxpc3QiLCJzZXRMb2FkaW5nIiwiaW5pdFBsYXlsaXN0IiwidXNlQ2FsbGJhY2siLCJwbGF5bGlzdEl0ZW1zIiwic2V0SXRlbXMiLCJkYXNoYm9hcmQiLCJmaW5kIiwibmV3SXRlbSIsInRvU3RyaW5nIiwib3JkZXIiLCJ0YWdzIiwidGFnIiwibW92ZVBsYXlsaXN0SXRlbSIsIm9mZnNldCIsIm5ld0l0ZW1zIiwiY3VycmVudFBvc2l0aW9uIiwiaW5kZXhPZiIsIm5ld1Bvc2l0aW9uIiwic3BsaWNlIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=