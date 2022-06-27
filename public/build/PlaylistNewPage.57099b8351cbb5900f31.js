"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistNewPage"],{

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

/***/ "./public/app/features/playlist/PlaylistNewPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistNewPage": () => (/* binding */ PlaylistNewPage),
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












const PlaylistNewPage = ({
  navModel
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_8__.getPlaylistStyles);
  const {
    playlist,
    loading
  } = (0,_usePlaylist__WEBPACK_IMPORTED_MODULE_9__.usePlaylist)();

  const onSubmit = async playlist => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_7__.createPlaylist)(playlist);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/playlists');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
        className: styles.subHeading,
        children: "New Playlist"
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistNewPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWUsR0FBR0YsTUFBdEM7O0lBRUEsSUFBSUksV0FBVyxJQUFJLENBQWYsSUFBb0JBLFdBQVcsR0FBR0gsUUFBUSxDQUFDNUYsTUFBL0MsRUFBdUQ7TUFDckQ0RixRQUFRLENBQUNJLE1BQVQsQ0FBZ0JILGVBQWhCLEVBQWlDLENBQWpDO01BQ0FELFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQkQsV0FBaEIsRUFBNkIsQ0FBN0IsRUFBZ0N6SSxJQUFoQztJQUNEOztJQUNENEgsUUFBUSxDQUFDVSxRQUFELENBQVI7RUFDRCxDQVhpQyxFQVlsQyxDQUFDdkcsS0FBRCxDQVprQyxDQUFwQztFQWVBLE1BQU1NLE1BQU0sR0FBR3FGLGtEQUFXLENBQ3ZCMUgsSUFBRCxJQUF3QjtJQUN0Qm9JLGdCQUFnQixDQUFDcEksSUFBRCxFQUFPLENBQUMsQ0FBUixDQUFoQjtFQUNELENBSHVCLEVBSXhCLENBQUNvSSxnQkFBRCxDQUp3QixDQUExQjtFQU9BLE1BQU1oRyxRQUFRLEdBQUdzRixrREFBVyxDQUN6QjFILElBQUQsSUFBd0I7SUFDdEJvSSxnQkFBZ0IsQ0FBQ3BJLElBQUQsRUFBTyxDQUFQLENBQWhCO0VBQ0QsQ0FIeUIsRUFJMUIsQ0FBQ29JLGdCQUFELENBSjBCLENBQTVCO0VBT0EsTUFBTWpHLFVBQVUsR0FBR3VGLGtEQUFXLENBQzNCMUgsSUFBRCxJQUF3QjtJQUN0QjRILFFBQVEsQ0FBQzdGLEtBQUssQ0FBQ3BCLE1BQU4sQ0FBY2dJLENBQUQsSUFBT0EsQ0FBQyxLQUFLM0ksSUFBMUIsQ0FBRCxDQUFSO0VBQ0QsQ0FIMkIsRUFJNUIsQ0FBQytCLEtBQUQsQ0FKNEIsQ0FBOUI7RUFPQSxPQUFPO0lBQUVBLEtBQUY7SUFBU0UsT0FBVDtJQUFrQkMsUUFBbEI7SUFBNEJDLFVBQTVCO0lBQXdDQyxRQUF4QztJQUFrREM7RUFBbEQsQ0FBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL09wdGlvbnNVSS9EYXNoYm9hcmRQaWNrZXJCeUlELnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0TmV3UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RUYWJsZVJvdy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RUYWJsZVJvd3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L2FwaS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvdXNlUGxheWxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L3VzZVBsYXlsaXN0SXRlbXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWJvdW5jZSBmcm9tICdkZWJvdW5jZS1wcm9taXNlJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBc3luY1NlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgcHJlZmVyIHVzaW5nIGRhc2hib2FyZCB1aWQgcmF0aGVyIHRoYW4gaWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRQaWNrZXJJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgdWlkOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6IChkYXNoYm9hcmQ/OiBEYXNoYm9hcmRQaWNrZXJJdGVtKSA9PiB2b2lkO1xuICB2YWx1ZT86IERhc2hib2FyZFBpY2tlckl0ZW07XG4gIHdpZHRoPzogbnVtYmVyO1xuICBpc0NsZWFyYWJsZT86IGJvb2xlYW47XG4gIGludmFsaWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlkPzogc3RyaW5nO1xuICBvcHRpb25MYWJlbD86IHN0cmluZztcbiAgLyoqIExpc3Qgb2YgZGFzaGJvYXJkIFVJRHMgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGUgc2VsZWN0IG9wdGlvbnMgKi9cbiAgZXhjbHVkZWREYXNoYm9hcmRzPzogc3RyaW5nW107XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgcHJlZmVyIHVzaW5nIGRhc2hib2FyZCB1aWQgcmF0aGVyIHRoYW4gaWRcbiAqL1xuZXhwb3J0IGNvbnN0IERhc2hib2FyZFBpY2tlckJ5SUQ6IEZDPFByb3BzPiA9ICh7XG4gIG9uQ2hhbmdlOiBwcm9wc09uQ2hhbmdlLFxuICB2YWx1ZSxcbiAgd2lkdGgsXG4gIGlzQ2xlYXJhYmxlID0gZmFsc2UsXG4gIGludmFsaWQsXG4gIGRpc2FibGVkLFxuICBpZCxcbiAgb3B0aW9uTGFiZWwgPSAnbGFiZWwnLFxuICBleGNsdWRlZERhc2hib2FyZHMsXG59KSA9PiB7XG4gIGNvbnN0IGRlYm91bmNlZFNlYXJjaCA9IGRlYm91bmNlKChxdWVyeTogc3RyaW5nKSA9PiBnZXREYXNoYm9hcmRzKHF1ZXJ5IHx8ICcnLCBvcHRpb25MYWJlbCwgZXhjbHVkZWREYXNoYm9hcmRzKSwgMzAwKTtcbiAgY29uc3Qgb3B0aW9uID0gdmFsdWUgPyB7IHZhbHVlLCBbb3B0aW9uTGFiZWxdOiB2YWx1ZVtvcHRpb25MYWJlbF0gfSA6IHVuZGVmaW5lZDtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoaXRlbTogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFBpY2tlckl0ZW0+KSA9PiB7XG4gICAgcHJvcHNPbkNoYW5nZShpdGVtPy52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXN5bmNTZWxlY3RcbiAgICAgIGlucHV0SWQ9e2lkfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaXNDbGVhcmFibGU9e2lzQ2xlYXJhYmxlfVxuICAgICAgZGVmYXVsdE9wdGlvbnM9e3RydWV9XG4gICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkU2VhcmNofVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgZGFzaGJvYXJkXCJcbiAgICAgIG5vT3B0aW9uc01lc3NhZ2U9XCJObyBkYXNoYm9hcmRzIGZvdW5kXCJcbiAgICAgIHZhbHVlPXtvcHRpb259XG4gICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbltvcHRpb25MYWJlbF19XG4gICAgLz5cbiAgKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhc2hib2FyZHMoXG4gIHF1ZXJ5OiBzdHJpbmcsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIGV4Y2x1ZGVkRGFzaGJvYXJkcz86IHN0cmluZ1tdXG4pOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRQaWNrZXJJdGVtPj4+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYmFja2VuZFNydi5zZWFyY2goeyB0eXBlOiAnZGFzaC1kYicsIHF1ZXJ5LCBsaW1pdDogMTAwIH0pO1xuICBjb25zdCBkYXNoYm9hcmRzID0gcmVzdWx0Lm1hcCgoeyBpZCwgdWlkID0gJycsIHRpdGxlLCBmb2xkZXJUaXRsZSB9KSA9PiB7XG4gICAgY29uc3QgdmFsdWU6IERhc2hib2FyZFBpY2tlckl0ZW0gPSB7XG4gICAgICBpZCxcbiAgICAgIHVpZCxcbiAgICAgIFtsYWJlbF06IGAke2ZvbGRlclRpdGxlID8/ICdHZW5lcmFsJ30vJHt0aXRsZX1gLFxuICAgIH07XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgW2xhYmVsXTogdmFsdWVbbGFiZWxdIH07XG4gIH0pO1xuXG4gIGlmIChleGNsdWRlZERhc2hib2FyZHMpIHtcbiAgICByZXR1cm4gZGFzaGJvYXJkcy5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gIWV4Y2x1ZGVkRGFzaGJvYXJkcy5pbmNsdWRlcyh2YWx1ZS51aWQgYXMgc3RyaW5nKSk7XG4gIH1cblxuICByZXR1cm4gZGFzaGJvYXJkcztcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZvcm0sIEhvcml6b250YWxHcm91cCwgSW5wdXQsIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRQaWNrZXJCeUlEIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9PcHRpb25zVUkvRGFzaGJvYXJkUGlja2VyQnlJRCc7XG5cbmltcG9ydCB7IFRhZ0ZpbHRlciB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnRmlsdGVyJztcbmltcG9ydCB7IFNlYXJjaFNydiB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvc2VhcmNoX3Nydic7XG5cbmltcG9ydCB7IFBsYXlsaXN0VGFibGUgfSBmcm9tICcuL1BsYXlsaXN0VGFibGUnO1xuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZVBsYXlsaXN0SXRlbXMgfSBmcm9tICcuL3VzZVBsYXlsaXN0SXRlbXMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RGb3JtUHJvcHMge1xuICBvblN1Ym1pdDogKHBsYXlsaXN0OiBQbGF5bGlzdCkgPT4gdm9pZDtcbiAgcGxheWxpc3Q6IFBsYXlsaXN0O1xufVxuXG5jb25zdCBzZWFyY2hTcnYgPSBuZXcgU2VhcmNoU3J2KCk7XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdEZvcm06IEZDPFBsYXlsaXN0Rm9ybVByb3BzPiA9ICh7IG9uU3VibWl0LCBwbGF5bGlzdCB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaW50ZXJ2YWwsIGl0ZW1zOiBwcm9wSXRlbXMgfSA9IHBsYXlsaXN0O1xuICBjb25zdCB7IGl0ZW1zLCBhZGRCeUlkLCBhZGRCeVRhZywgZGVsZXRlSXRlbSwgbW92ZURvd24sIG1vdmVVcCB9ID0gdXNlUGxheWxpc3RJdGVtcyhwcm9wSXRlbXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17KGxpc3Q6IFBsYXlsaXN0KSA9PiBvblN1Ym1pdCh7IC4uLmxpc3QsIGl0ZW1zIH0pfSB2YWxpZGF0ZU9uPXsnb25CbHVyJ30+XG4gICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gaXRlbXMubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnM/Lm5hbWU/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogJ05hbWUgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0ubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJJbnRlcnZhbFwiIGludmFsaWQ9eyEhZXJyb3JzLmludGVydmFsfSBlcnJvcj17ZXJyb3JzPy5pbnRlcnZhbD8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2ludGVydmFsJywgeyByZXF1aXJlZDogJ0ludGVydmFsIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNW1cIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbnRlcnZhbCA/PyAnNW0nfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pbnRlcnZhbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxQbGF5bGlzdFRhYmxlIGl0ZW1zPXtpdGVtc30gb25Nb3ZlVXA9e21vdmVVcH0gb25Nb3ZlRG93bj17bW92ZURvd259IG9uRGVsZXRlPXtkZWxldGVJdGVtfSAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRlcmluZ1wiPkFkZCBkYXNoYm9hcmRzPC9oMz5cblxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkFkZCBieSB0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPERhc2hib2FyZFBpY2tlckJ5SUQgb25DaGFuZ2U9e2FkZEJ5SWR9IGlkPVwiZGFzaGJvYXJkLXBpY2tlclwiIGlzQ2xlYXJhYmxlIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkFkZCBieSB0YWdcIj5cbiAgICAgICAgICAgICAgICAgIDxUYWdGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgICAgICAgdGFncz17W119XG4gICAgICAgICAgICAgICAgICAgIGhpZGVWYWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgdGFnT3B0aW9ucz17c2VhcmNoU3J2LmdldERhc2hib2FyZFRhZ3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthZGRCeVRhZ31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eycnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBocmVmPXtgJHtjb25maWcuYXBwU3ViVXJsfS9wbGF5bGlzdHNgfT5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9Gb3JtPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIE1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJy4uLy4uL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5cbmltcG9ydCB7IFBsYXlsaXN0Rm9ybSB9IGZyb20gJy4vUGxheWxpc3RGb3JtJztcbmltcG9ydCB7IGNyZWF0ZVBsYXlsaXN0IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgZ2V0UGxheWxpc3RTdHlsZXMgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBQbGF5bGlzdCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUGxheWxpc3QgfSBmcm9tICcuL3VzZVBsYXlsaXN0JztcblxuaW50ZXJmYWNlIENvbm5lY3RlZFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBDb25uZWN0ZWRQcm9wcywgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMge31cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0TmV3UGFnZTogRkM8UHJvcHM+ID0gKHsgbmF2TW9kZWwgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFBsYXlsaXN0U3R5bGVzKTtcbiAgY29uc3QgeyBwbGF5bGlzdCwgbG9hZGluZyB9ID0gdXNlUGxheWxpc3QoKTtcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAocGxheWxpc3Q6IFBsYXlsaXN0KSA9PiB7XG4gICAgYXdhaXQgY3JlYXRlUGxheWxpc3QocGxheWxpc3QpO1xuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvcGxheWxpc3RzJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnN1YkhlYWRpbmd9Pk5ldyBQbGF5bGlzdDwvaDM+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIEEgcGxheWxpc3Qgcm90YXRlcyB0aHJvdWdoIGEgcHJlLXNlbGVjdGVkIGxpc3Qgb2YgZGFzaGJvYXJkcy4gQSBwbGF5bGlzdCBjYW4gYmUgYSBncmVhdCB3YXkgdG8gYnVpbGRcbiAgICAgICAgICBzaXR1YXRpb25hbCBhd2FyZW5lc3MsIG9yIGp1c3Qgc2hvdyBvZmYgeW91ciBtZXRyaWNzIHRvIHlvdXIgdGVhbSBvciB2aXNpdG9ycy5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxQbGF5bGlzdEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBwbGF5bGlzdD17cGxheWxpc3R9IC8+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzOiBNYXBTdGF0ZVRvUHJvcHM8Q29ubmVjdGVkUHJvcHMsIHt9LCBTdG9yZVN0YXRlPiA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAncGxheWxpc3RzJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBsYXlsaXN0TmV3UGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsYXlsaXN0VGFibGVSb3dzIH0gZnJvbSAnLi9QbGF5bGlzdFRhYmxlUm93cyc7XG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIFBsYXlsaXN0VGFibGVQcm9wcyB7XG4gIGl0ZW1zOiBQbGF5bGlzdEl0ZW1bXTtcbiAgb25Nb3ZlVXA6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uTW92ZURvd246IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uRGVsZXRlOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RUYWJsZTogRkM8UGxheWxpc3RUYWJsZVByb3BzPiA9ICh7IGl0ZW1zLCBvbk1vdmVVcCwgb25Nb3ZlRG93biwgb25EZWxldGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyaW5nXCI+RGFzaGJvYXJkczwvaDM+XG5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDxQbGF5bGlzdFRhYmxlUm93cyBpdGVtcz17aXRlbXN9IG9uTW92ZVVwPXtvbk1vdmVVcH0gb25Nb3ZlRG93bj17b25Nb3ZlRG93bn0gb25EZWxldGU9e29uRGVsZXRlfSAvPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgTW91c2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEljb24sIEljb25CdXR0b24sIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgVGFnQmFkZ2UgfSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvVGFnRmlsdGVyL1RhZ0JhZGdlJztcblxuaW1wb3J0IHsgUGxheWxpc3RJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQbGF5bGlzdFRhYmxlUm93UHJvcHMge1xuICBmaXJzdDogYm9vbGVhbjtcbiAgbGFzdDogYm9vbGVhbjtcbiAgaXRlbTogUGxheWxpc3RJdGVtO1xuICBvbk1vdmVVcDogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25Nb3ZlRG93bjogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbiAgb25EZWxldGU6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdFRhYmxlUm93OiBGQzxQbGF5bGlzdFRhYmxlUm93UHJvcHM+ID0gKHsgaXRlbSwgb25EZWxldGUsIG9uTW92ZURvd24sIG9uTW92ZVVwLCBmaXJzdCwgbGFzdCB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCBvbkRlbGV0ZUNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBvbkRlbGV0ZShpdGVtKTtcbiAgfTtcbiAgY29uc3Qgb25Nb3ZlRG93bkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBvbk1vdmVEb3duKGl0ZW0pO1xuICB9O1xuICBjb25zdCBvbk1vdmVVcENsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBvbk1vdmVVcChpdGVtKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDx0ciBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1Sb3d9IGtleT17aXRlbS50aXRsZX0+XG4gICAgICB7aXRlbS50eXBlID09PSAnZGFzaGJvYXJkX2J5X2lkJyA/IChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT17Y3goc3R5bGVzLnRkLCBzdHlsZXMuaXRlbSl9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJhcHBzXCIgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtSWRUeXBlfSAvPlxuICAgICAgICAgIDxzcGFuPntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC90ZD5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2l0ZW0udHlwZSA9PT0gJ2Rhc2hib2FyZF9ieV90YWcnID8gKFxuICAgICAgICA8dGQgY2xhc3NOYW1lPXtjeChzdHlsZXMudGQsIHN0eWxlcy5pdGVtKX0+XG4gICAgICAgICAgPEljb24gbmFtZT1cInRhZy1hbHRcIiBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1UYWdUeXBlfSAvPlxuICAgICAgICAgIDxUYWdCYWRnZSBrZXk9e2l0ZW0uaWR9IGxhYmVsPXtpdGVtLnRpdGxlfSByZW1vdmVJY29uPXtmYWxzZX0gY291bnQ9ezB9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDx0ZCBjbGFzc05hbWU9e2N4KHN0eWxlcy50ZCwgc3R5bGVzLnNldHRpbmdzKX0+XG4gICAgICAgIHshZmlyc3QgPyAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG5hbWU9XCJhcnJvdy11cFwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgb25DbGljaz17b25Nb3ZlVXBDbGlja31cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbU1vdmVVcH1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7IWxhc3QgPyAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIG5hbWU9XCJhcnJvdy1kb3duXCJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk1vdmVEb3duQ2xpY2t9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1Nb3ZlRG93bn1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG5hbWU9XCJ0aW1lc1wiXG4gICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZUNsaWNrfVxuICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbURlbGV0ZX1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgdGQ6IGNzc2BcbiAgICAgIGxhYmVsOiB0ZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgbWF4LXdpZHRoOiAzMzVweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYCxcbiAgICBpdGVtOiBjc3NgXG4gICAgICBsYWJlbDogaXRlbTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHNldHRpbmdzOiBjc3NgXG4gICAgICBsYWJlbDogc2V0dGluZ3M7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdFRhYmxlUm93IH0gZnJvbSAnLi9QbGF5bGlzdFRhYmxlUm93JztcbmltcG9ydCB7IFBsYXlsaXN0SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RUYWJsZVJvd3NQcm9wcyB7XG4gIGl0ZW1zOiBQbGF5bGlzdEl0ZW1bXTtcbiAgb25Nb3ZlVXA6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uTW92ZURvd246IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uRGVsZXRlOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RUYWJsZVJvd3M6IEZDPFBsYXlsaXN0VGFibGVSb3dzUHJvcHM+ID0gKHsgaXRlbXMsIG9uTW92ZVVwLCBvbk1vdmVEb3duLCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGVtPlBsYXlsaXN0IGlzIGVtcHR5LiBBZGQgZGFzaGJvYXJkcyBiZWxvdy48L2VtPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgY29uc3QgbGFzdCA9IGluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQbGF5bGlzdFRhYmxlUm93XG4gICAgICAgICAgICBmaXJzdD17Zmlyc3R9XG4gICAgICAgICAgICBsYXN0PXtsYXN0fVxuICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgIG9uTW92ZURvd249e29uTW92ZURvd259XG4gICAgICAgICAgICBvbk1vdmVVcD17b25Nb3ZlVXB9XG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnLi4vLi4vY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uLCBjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJztcblxuaW1wb3J0IHsgUGxheWxpc3QsIFBsYXlsaXN0RFRPIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbGF5bGlzdChwbGF5bGlzdDogUGxheWxpc3QpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvcGxheWxpc3RzJywgcGxheWxpc3QpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBsYXlsaXN0KHVpZDogc3RyaW5nLCBwbGF5bGlzdDogUGxheWxpc3QpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9wbGF5bGlzdHMvJHt1aWR9YCwgcGxheWxpc3QpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBsYXlsaXN0KHVpZDogc3RyaW5nKSB7XG4gIGF3YWl0IHdpdGhFcnJvckhhbmRsaW5nKCgpID0+IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvcGxheWxpc3RzLyR7dWlkfWApLCAnUGxheWxpc3QgZGVsZXRlZCcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWxpc3QodWlkOiBzdHJpbmcpOiBQcm9taXNlPFBsYXlsaXN0PiB7XG4gIGNvbnN0IHJlc3VsdDogUGxheWxpc3QgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3BsYXlsaXN0cy8ke3VpZH1gKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBsYXlsaXN0KHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPFBsYXlsaXN0RFRPW10+IHtcbiAgY29uc3QgcmVzdWx0OiBQbGF5bGlzdERUT1tdID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9wbGF5bGlzdHMvJywgeyBxdWVyeSB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gd2l0aEVycm9ySGFuZGxpbmcoYXBpQ2FsbDogKCkgPT4gUHJvbWlzZTx2b2lkPiwgbWVzc2FnZSA9ICdQbGF5bGlzdCBzYXZlZCcpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhcGlDYWxsKCk7XG4gICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24obWVzc2FnZSkpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbignVW5hYmxlIHRvIHNhdmUgcGxheWxpc3QnLCBlKSkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWxpc3RTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbjogY3NzYFxuICAgICAgbGFiZWw6IGRlc2NyaXB0aW9uO1xuICAgICAgd2lkdGg6IDU1NXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBgLFxuICAgIHN1YkhlYWRpbmc6IGNzc2BcbiAgICAgIGxhYmVsOiBzdWItaGVhZGluZztcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldFBsYXlsaXN0IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXlsaXN0KHBsYXlsaXN0VWlkPzogc3RyaW5nKSB7XG4gIGNvbnN0IFtwbGF5bGlzdCwgc2V0UGxheWxpc3RdID0gdXNlU3RhdGU8UGxheWxpc3Q+KHsgaXRlbXM6IFtdLCBpbnRlcnZhbDogJzVtJywgbmFtZTogJycsIHVpZDogJycgfSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW5pdFBsYXlsaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFwbGF5bGlzdFVpZCkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IGdldFBsYXlsaXN0KHBsYXlsaXN0VWlkKTtcbiAgICAgIHNldFBsYXlsaXN0KGxpc3QpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcbiAgICBpbml0UGxheWxpc3QoKTtcbiAgfSwgW3BsYXlsaXN0VWlkXSk7XG5cbiAgcmV0dXJuIHsgcGxheWxpc3QsIGxvYWRpbmcgfTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGFzaGJvYXJkUGlja2VySXRlbSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvT3B0aW9uc1VJL0Rhc2hib2FyZFBpY2tlckJ5SUQnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXlsaXN0SXRlbXMocGxheWxpc3RJdGVtcz86IFBsYXlsaXN0SXRlbVtdKSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8UGxheWxpc3RJdGVtW10+KHBsYXlsaXN0SXRlbXMgPz8gW10pO1xuXG4gIGNvbnN0IGFkZEJ5SWQgPSB1c2VDYWxsYmFjayhcbiAgICAoZGFzaGJvYXJkPzogRGFzaGJvYXJkUGlja2VySXRlbSkgPT4ge1xuICAgICAgaWYgKCFkYXNoYm9hcmQgfHwgaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZGFzaGJvYXJkLmlkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0l0ZW06IFBsYXlsaXN0SXRlbSA9IHtcbiAgICAgICAgaWQ6IGRhc2hib2FyZC5pZCxcbiAgICAgICAgdGl0bGU6IGRhc2hib2FyZC5sYWJlbCBhcyBzdHJpbmcsXG4gICAgICAgIHR5cGU6ICdkYXNoYm9hcmRfYnlfaWQnLFxuICAgICAgICB2YWx1ZTogZGFzaGJvYXJkLmlkLnRvU3RyaW5nKDEwKSxcbiAgICAgICAgb3JkZXI6IGl0ZW1zLmxlbmd0aCArIDEsXG4gICAgICB9O1xuICAgICAgc2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfSxcbiAgICBbaXRlbXNdXG4gICk7XG5cbiAgY29uc3QgYWRkQnlUYWcgPSB1c2VDYWxsYmFjayhcbiAgICAodGFnczogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IHRhZyA9IHRhZ3NbMF07XG4gICAgICBpZiAoIXRhZyB8fCBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSB0YWcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3SXRlbTogUGxheWxpc3RJdGVtID0ge1xuICAgICAgICB0aXRsZTogdGFnLFxuICAgICAgICB0eXBlOiAnZGFzaGJvYXJkX2J5X3RhZycsXG4gICAgICAgIHZhbHVlOiB0YWcsXG4gICAgICAgIG9yZGVyOiBpdGVtcy5sZW5ndGggKyAxLFxuICAgICAgfTtcbiAgICAgIHNldEl0ZW1zKFsuLi5pdGVtcywgbmV3SXRlbV0pO1xuICAgIH0sXG4gICAgW2l0ZW1zXVxuICApO1xuXG4gIGNvbnN0IG1vdmVQbGF5bGlzdEl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtLCBvZmZzZXQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXNdO1xuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbmV3SXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgb2Zmc2V0O1xuXG4gICAgICBpZiAobmV3UG9zaXRpb24gPj0gMCAmJiBuZXdQb3NpdGlvbiA8IG5ld0l0ZW1zLmxlbmd0aCkge1xuICAgICAgICBuZXdJdGVtcy5zcGxpY2UoY3VycmVudFBvc2l0aW9uLCAxKTtcbiAgICAgICAgbmV3SXRlbXMuc3BsaWNlKG5ld1Bvc2l0aW9uLCAwLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICBjb25zdCBtb3ZlVXAgPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBtb3ZlUGxheWxpc3RJdGVtKGl0ZW0sIC0xKTtcbiAgICB9LFxuICAgIFttb3ZlUGxheWxpc3RJdGVtXVxuICApO1xuXG4gIGNvbnN0IG1vdmVEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4ge1xuICAgICAgbW92ZVBsYXlsaXN0SXRlbShpdGVtLCAxKTtcbiAgICB9LFxuICAgIFttb3ZlUGxheWxpc3RJdGVtXVxuICApO1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBzZXRJdGVtcyhpdGVtcy5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICByZXR1cm4geyBpdGVtcywgYWRkQnlJZCwgYWRkQnlUYWcsIGRlbGV0ZUl0ZW0sIG1vdmVEb3duLCBtb3ZlVXAgfTtcbn1cbiJdLCJuYW1lcyI6WyJkZWJvdW5jZSIsIlJlYWN0IiwiQXN5bmNTZWxlY3QiLCJiYWNrZW5kU3J2IiwiRGFzaGJvYXJkUGlja2VyQnlJRCIsIm9uQ2hhbmdlIiwicHJvcHNPbkNoYW5nZSIsInZhbHVlIiwid2lkdGgiLCJpc0NsZWFyYWJsZSIsImludmFsaWQiLCJkaXNhYmxlZCIsImlkIiwib3B0aW9uTGFiZWwiLCJleGNsdWRlZERhc2hib2FyZHMiLCJkZWJvdW5jZWRTZWFyY2giLCJxdWVyeSIsImdldERhc2hib2FyZHMiLCJvcHRpb24iLCJ1bmRlZmluZWQiLCJpdGVtIiwibGFiZWwiLCJyZXN1bHQiLCJzZWFyY2giLCJ0eXBlIiwibGltaXQiLCJkYXNoYm9hcmRzIiwibWFwIiwidWlkIiwidGl0bGUiLCJmb2xkZXJUaXRsZSIsImZpbHRlciIsImluY2x1ZGVzIiwic2VsZWN0b3JzIiwiY29uZmlnIiwiQnV0dG9uIiwiRmllbGQiLCJGb3JtIiwiSG9yaXpvbnRhbEdyb3VwIiwiSW5wdXQiLCJMaW5rQnV0dG9uIiwiVGFnRmlsdGVyIiwiU2VhcmNoU3J2IiwiUGxheWxpc3RUYWJsZSIsInVzZVBsYXlsaXN0SXRlbXMiLCJzZWFyY2hTcnYiLCJQbGF5bGlzdEZvcm0iLCJvblN1Ym1pdCIsInBsYXlsaXN0IiwibmFtZSIsImludGVydmFsIiwiaXRlbXMiLCJwcm9wSXRlbXMiLCJhZGRCeUlkIiwiYWRkQnlUYWciLCJkZWxldGVJdGVtIiwibW92ZURvd24iLCJtb3ZlVXAiLCJsaXN0IiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJpc0Rpc2FibGVkIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInBhZ2VzIiwiZ2V0RGFzaGJvYXJkVGFncyIsImFwcFN1YlVybCIsImNvbm5lY3QiLCJsb2NhdGlvblNlcnZpY2UiLCJ1c2VTdHlsZXMyIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiY3JlYXRlUGxheWxpc3QiLCJnZXRQbGF5bGlzdFN0eWxlcyIsInVzZVBsYXlsaXN0IiwiUGxheWxpc3ROZXdQYWdlIiwibmF2TW9kZWwiLCJzdHlsZXMiLCJsb2FkaW5nIiwicHVzaCIsInN1YkhlYWRpbmciLCJkZXNjcmlwdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiLCJQbGF5bGlzdFRhYmxlUm93cyIsIm9uTW92ZVVwIiwib25Nb3ZlRG93biIsIm9uRGVsZXRlIiwiY3NzIiwiY3giLCJJY29uIiwiSWNvbkJ1dHRvbiIsInVzZVN0eWxlcyIsIlRhZ0JhZGdlIiwiUGxheWxpc3RUYWJsZVJvdyIsImZpcnN0IiwibGFzdCIsImdldFN0eWxlcyIsIm9uRGVsZXRlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib25Nb3ZlRG93bkNsaWNrIiwib25Nb3ZlVXBDbGljayIsIml0ZW1Sb3ciLCJ0ZCIsIml0ZW1JZFR5cGUiLCJpdGVtVGFnVHlwZSIsInNldHRpbmdzIiwiaXRlbU1vdmVVcCIsIml0ZW1Nb3ZlRG93biIsIml0ZW1EZWxldGUiLCJ0aGVtZSIsInNwYWNpbmciLCJ4cyIsImluZGV4IiwiZ2V0QmFja2VuZFNydiIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImRpc3BhdGNoIiwid2l0aEVycm9ySGFuZGxpbmciLCJwb3N0IiwidXBkYXRlUGxheWxpc3QiLCJwdXQiLCJkZWxldGVQbGF5bGlzdCIsImRlbGV0ZSIsImdldFBsYXlsaXN0IiwiZ2V0IiwiZ2V0QWxsUGxheWxpc3QiLCJhcGlDYWxsIiwiZSIsIkVycm9yIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwbGF5bGlzdFVpZCIsInNldFBsYXlsaXN0Iiwic2V0TG9hZGluZyIsImluaXRQbGF5bGlzdCIsInVzZUNhbGxiYWNrIiwicGxheWxpc3RJdGVtcyIsInNldEl0ZW1zIiwiZGFzaGJvYXJkIiwiZmluZCIsIm5ld0l0ZW0iLCJ0b1N0cmluZyIsIm9yZGVyIiwidGFncyIsInRhZyIsIm1vdmVQbGF5bGlzdEl0ZW0iLCJvZmZzZXQiLCJuZXdJdGVtcyIsImN1cnJlbnRQb3NpdGlvbiIsImluZGV4T2YiLCJuZXdQb3NpdGlvbiIsInNwbGljZSIsImkiXSwic291cmNlUm9vdCI6IiJ9