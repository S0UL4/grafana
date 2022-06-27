"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PluginListPage"],{

/***/ "./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* binding */ PluginDisabledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginDisabledBadge({
  error
}) {
  const tooltip = errorCodeToTooltip(error);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
    icon: "exclamation-triangle",
    text: "Disabled",
    color: "red",
    tooltip: tooltip
  });
}

function errorCodeToTooltip(error) {
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return 'Plugin disabled due to modified content';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
      return 'Plugin disabled due to invalid plugin signature';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
      return 'Plugin disabled due to missing plugin signature';

    default:
      return `Plugin disabled due to unkown error: ${error}`;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginEnterpriseBadge": () => (/* binding */ PluginEnterpriseBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge;







function PluginEnterpriseBadge({
  plugin
}) {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_3__.getBadgeColor);

  const onClick = ev => {
    ev.preventDefault();
    window.open(`https://grafana.com/grafana/plugins/${plugin.id}?utm_source=grafana_catalog_learn_more`, '_blank', 'noopener,noreferrer');
  };

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('enterprise.plugins')) {
    return _Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
      text: "Enterprise",
      color: "blue"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureBadge, {
      status: plugin.signature
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
      icon: "lock",
      "aria-label": "lock icon",
      text: "Enterprise",
      color: "blue",
      className: customBadgeStyles
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      size: "sm",
      fill: "text",
      icon: "external-link-alt",
      onClick: onClick,
      children: "Learn more"
    })]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginInstalledBadge": () => (/* binding */ PluginInstalledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginInstalledBadge() {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_2__.getBadgeColor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
    text: "Installed",
    color: "orange",
    className: customBadgeStyles
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* binding */ PluginUpdateAvailableBadge),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PluginUpdateAvailableBadge({
  plugin
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles); // Currently renderer plugins are not supported by the catalog due to complications related to installation / update / uninstall.

  if (plugin.hasUpdate && !plugin.isCore && plugin.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginType.renderer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: styles.hasUpdate,
      children: "Update available!"
    });
  }

  return null;
}
const getStyles = theme => {
  return {
    hasUpdate: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* reexport safe */ _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__.PluginDisabledBadge),
/* harmony export */   "PluginEnterpriseBadge": () => (/* reexport safe */ _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__.PluginEnterpriseBadge),
/* harmony export */   "PluginInstalledBadge": () => (/* reexport safe */ _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__.PluginInstalledBadge),
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* reexport safe */ _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__.PluginUpdateAvailableBadge)
/* harmony export */ });
/* harmony import */ var _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx");
/* harmony import */ var _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx");
/* harmony import */ var _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx");
/* harmony import */ var _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx");





/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/sharedStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBadgeColor": () => (/* binding */ getBadgeColor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getBadgeColor = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  background: ${theme.colors.background.primary};
  border-color: ${theme.colors.border.strong};
  color: ${theme.colors.text.secondary};
`;

/***/ }),

/***/ "./public/app/features/plugins/admin/components/HorizontalGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalGroup": () => (/* binding */ HorizontalGroup)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const HorizontalGroup = ({
  children,
  wrap,
  className
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const styles = getStyles(theme, wrap);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, className),
    children: children
  });
};

const getStyles = (theme, wrap) => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};
    & > * {
      margin-bottom: ${theme.spacing()};
      margin-right: ${theme.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginList": () => (/* binding */ PluginList)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _PluginListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginListItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const PluginList = ({
  plugins,
  displayMode
}) => {
  const isList = displayMode === _types__WEBPACK_IMPORTED_MODULE_3__.PluginListDisplayMode.List;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, {
      [styles.list]: isList
    }),
    "data-testid": "plugin-list",
    children: plugins.map(plugin => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PluginListItem__WEBPACK_IMPORTED_MODULE_4__.PluginListItem, {
      plugin: plugin,
      pathName: location.pathname,
      displayMode: displayMode
    }, plugin.id))
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${theme.spacing(3)};
    `,
    list: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      grid-template-columns: 1fr;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGO_SIZE": () => (/* binding */ LOGO_SIZE),
/* harmony export */   "PluginListItem": () => (/* binding */ PluginListItem),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _PluginListItemBadges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginListItemBadges.tsx");
/* harmony import */ var _PluginLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginLogo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const LOGO_SIZE = '48px';
function PluginListItem({
  plugin,
  pathName,
  displayMode = _types__WEBPACK_IMPORTED_MODULE_3__.PluginListDisplayMode.Grid
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const isList = displayMode === _types__WEBPACK_IMPORTED_MODULE_3__.PluginListDisplayMode.List;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
    href: `${pathName}/${plugin.id}`,
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, {
      [styles.list]: isList
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PluginLogo__WEBPACK_IMPORTED_MODULE_5__.PluginLogo, {
      src: plugin.info.logos.small,
      className: styles.pluginLogo,
      height: LOGO_SIZE,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.name, 'plugin-name'),
      children: plugin.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.content, 'plugin-content'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        children: ["By ", plugin.orgName]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PluginListItemBadges__WEBPACK_IMPORTED_MODULE_4__.PluginListItemBadges, {
        plugin: plugin
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.pluginType,
      children: plugin.type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: _types__WEBPACK_IMPORTED_MODULE_3__.PluginIconName[plugin.type],
        title: `${plugin.type} plugin`
      })
    })]
  });
} // Styles shared between the different type of list items

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: grid;
      grid-template-columns: ${LOGO_SIZE} 1fr ${theme.spacing(3)};
      grid-template-rows: auto;
      gap: ${theme.spacing(2)};
      grid-auto-flow: row;
      background: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
      padding: ${theme.spacing(3)};
      transition: ${theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
      duration: theme.transitions.duration.short
    })};

      &:hover {
        background: ${theme.colors.emphasize(theme.colors.background.secondary, 0.03)};
      }
    `,
    list: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${theme.spacing(0, 0, 0.5, 0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,
    pluginType: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${theme.colors.text.secondary};
    `,
    pluginLogo: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${theme.colors.text.secondary};
    `,
    name: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${theme.typography.h4.fontSize};
      color: ${theme.colors.text.primary};
      margin: 0;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginListItemBadges.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginListItemBadges": () => (/* binding */ PluginListItemBadges)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _Badges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _PluginInstalledBadge;






function PluginListItemBadges({
  plugin
}) {
  if (plugin.isEnterprise) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      height: "auto",
      wrap: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginEnterpriseBadge, {
        plugin: plugin
      }), plugin.isDisabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginDisabledBadge, {
        error: plugin.error
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginUpdateAvailableBadge, {
        plugin: plugin
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
    height: "auto",
    wrap: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.PluginSignatureBadge, {
      status: plugin.signature
    }), plugin.isDisabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginDisabledBadge, {
      error: plugin.error
    }), plugin.isInstalled && (_PluginInstalledBadge || (_PluginInstalledBadge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginInstalledBadge, {}))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_2__.PluginUpdateAvailableBadge, {
      plugin: plugin
    })]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginLogo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginLogo": () => (/* binding */ PluginLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


function PluginLogo({
  alt,
  className,
  src,
  height
}) {
  // @ts-ignore - react doesn't know about loading attr.
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    src: src,
    className: className,
    alt: alt,
    loading: "lazy",
    height: height
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/SearchField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchField": () => (/* binding */ SearchField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





// useDebounce has a bug which causes it to fire on first render. This wrapper prevents that.
// https://github.com/streamich/react-use/issues/759
const useDebounceWithoutFirstRender = (callBack, delay = 0, deps = []) => {
  const isFirstRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const debounceDeps = [...deps, isFirstRender];
  return (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return callBack();
  }, delay, debounceDeps);
};

const SearchField = ({
  value,
  onSearch
}) => {
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  useDebounceWithoutFirstRender(() => onSearch(query !== null && query !== void 0 ? query : ''), 500, [query]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
    value: query,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        onSearch(e.currentTarget.value);
      }
    },
    placeholder: "Search Grafana plugins",
    onChange: value => {
      setQuery(value);
    },
    width: 46
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/hooks/useHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHistory": () => (/* binding */ useHistory)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

const useHistory = () => {
  return {
    push: ({
      query
    }) => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial(query);
    }
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/pages/Browse.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Browse)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _components_HorizontalGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/HorizontalGroup.tsx");
/* harmony import */ var _components_PluginList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginList.tsx");
/* harmony import */ var _components_SearchField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/components/SearchField.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _hooks_useHistory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/plugins/admin/hooks/useHistory.tsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");

















function Browse({
  route
}) {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation)();
  const locationSearch = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationSearchToObject)(location.search);
  const navModelId = getNavModelId(route.routeName);
  const navModel = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, navModelId));
  const {
    displayMode,
    setDisplayMode
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_12__.useDisplayMode)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const history = (0,_hooks_useHistory__WEBPACK_IMPORTED_MODULE_11__.useHistory)();
  const remotePluginsAvailable = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_12__.useIsRemotePluginsAvailable)();
  const query = locationSearch.q || '';
  const filterBy = locationSearch.filterBy || 'installed';
  const filterByType = locationSearch.filterByType || 'all';
  const sortBy = locationSearch.sortBy || _helpers__WEBPACK_IMPORTED_MODULE_10__.Sorters.nameAsc;
  const {
    isLoading,
    error,
    plugins
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_12__.useGetAllWithFilters)({
    query,
    filterBy,
    filterByType,
    sortBy
  });
  const filterByOptions = [{
    value: 'all',
    label: 'All'
  }, {
    value: 'installed',
    label: 'Installed'
  }];

  const onSortByChange = value => {
    history.push({
      query: {
        sortBy: value.value
      }
    });
  };

  const onFilterByChange = value => {
    history.push({
      query: {
        filterBy: value
      }
    });
  };

  const onFilterByTypeChange = value => {
    history.push({
      query: {
        filterByType: value
      }
    });
  };

  const onSearch = q => {
    history.push({
      query: {
        filterBy: 'all',
        filterByType: 'all',
        q
      }
    });
  }; // How should we handle errors?


  if (error) {
    console.error(error.message);
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page.Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_HorizontalGroup__WEBPACK_IMPORTED_MODULE_7__.HorizontalGroup, {
        wrap: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_SearchField__WEBPACK_IMPORTED_MODULE_9__.SearchField, {
          value: query,
          onSearch: onSearch
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_HorizontalGroup__WEBPACK_IMPORTED_MODULE_7__.HorizontalGroup, {
          wrap: true,
          className: styles.actionBar,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
              value: filterByType,
              onChange: onFilterByTypeChange,
              options: [{
                value: 'all',
                label: 'All'
              }, {
                value: 'datasource',
                label: 'Data sources'
              }, {
                value: 'panel',
                label: 'Panels'
              }, {
                value: 'app',
                label: 'Applications'
              }]
            })
          }), remotePluginsAvailable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
              value: filterBy,
              onChange: onFilterByChange,
              options: filterByOptions
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
            content: "This filter has been disabled because the Grafana server cannot access grafana.com",
            placement: "top",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
                disabled: true,
                value: filterBy,
                onChange: onFilterByChange,
                options: filterByOptions
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
              "aria-label": "Sort Plugins List",
              width: 24,
              value: sortBy,
              onChange: onSortByChange,
              options: [{
                value: 'nameAsc',
                label: 'Sort by name (A-Z)'
              }, {
                value: 'nameDesc',
                label: 'Sort by name (Z-A)'
              }, {
                value: 'updated',
                label: 'Sort by updated date'
              }, {
                value: 'published',
                label: 'Sort by published date'
              }, {
                value: 'downloads',
                label: 'Sort by downloads'
              }]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
              className: styles.displayAs,
              value: displayMode,
              onChange: setDisplayMode,
              options: [{
                value: _types__WEBPACK_IMPORTED_MODULE_13__.PluginListDisplayMode.Grid,
                icon: 'table',
                description: 'Display plugins in a grid layout'
              }, {
                value: _types__WEBPACK_IMPORTED_MODULE_13__.PluginListDisplayMode.List,
                icon: 'list-ul',
                description: 'Display plugins in list'
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.listWrap,
        children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LoadingPlaceholder, {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                margin-bottom: 0;
              `,
          text: "Loading results"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_PluginList__WEBPACK_IMPORTED_MODULE_8__.PluginList, {
          plugins: plugins,
          displayMode: displayMode
        })
      })]
    })
  });
}

const getStyles = theme => ({
  actionBar: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.breakpoints.up('xl')} {
      margin-left: auto;
    }
  `,
  listWrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(2)};
  `,
  displayAs: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    svg {
      margin-right: 0;
    }
  `
}); // Because the component is used under multiple paths (/plugins and /admin/plugins) we need to get
// the correct navModel from the store


const getNavModelId = routeName => {
  if (routeName === _types__WEBPACK_IMPORTED_MODULE_13__.PluginAdminRoutes.HomeAdmin || routeName === _types__WEBPACK_IMPORTED_MODULE_13__.PluginAdminRoutes.BrowseAdmin) {
    return 'admin-plugins';
  }

  return 'plugins';
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisplayMode": () => (/* binding */ useDisplayMode),
/* harmony export */   "useFetchAll": () => (/* binding */ useFetchAll),
/* harmony export */   "useFetchDetails": () => (/* binding */ useFetchDetails),
/* harmony export */   "useFetchDetailsStatus": () => (/* binding */ useFetchDetailsStatus),
/* harmony export */   "useFetchStatus": () => (/* binding */ useFetchStatus),
/* harmony export */   "useGetAll": () => (/* binding */ useGetAll),
/* harmony export */   "useGetAllWithFilters": () => (/* binding */ useGetAllWithFilters),
/* harmony export */   "useGetErrors": () => (/* binding */ useGetErrors),
/* harmony export */   "useGetSingle": () => (/* binding */ useGetSingle),
/* harmony export */   "useInstall": () => (/* binding */ useInstall),
/* harmony export */   "useInstallStatus": () => (/* binding */ useInstallStatus),
/* harmony export */   "useIsRemotePluginsAvailable": () => (/* binding */ useIsRemotePluginsAvailable),
/* harmony export */   "useUninstall": () => (/* binding */ useUninstall),
/* harmony export */   "useUninstallStatus": () => (/* binding */ useUninstallStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/state/selectors.ts");






const useGetAllWithFilters = ({
  query = '',
  filterBy = 'installed',
  filterByType = 'all',
  sortBy = _helpers__WEBPACK_IMPORTED_MODULE_2__.Sorters.nameAsc
}) => {
  useFetchAll();
  const filtered = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.find)(query, filterBy, filterByType));
  const {
    isLoading,
    error
  } = useFetchStatus();
  const sortedAndFiltered = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sortPlugins)(filtered, sortBy);
  return {
    isLoading,
    error,
    plugins: sortedAndFiltered
  };
};
const useGetAll = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_5__.selectAll);
};
const useGetSingle = id => {
  useFetchAll();
  useFetchDetails(id);
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectById)(state, id));
};
const useGetErrors = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPluginErrors);
};
const useInstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (id, version, isUpdating) => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.install)({
    id,
    version,
    isUpdating
  }));
};
const useUninstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return id => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall)(id));
};
const useIsRemotePluginsAvailable = () => {
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchRemotePlugins.typePrefix));
  return error === null;
};
const useFetchStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  return {
    isLoading,
    error
  };
};
const useFetchDetailsStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  return {
    isLoading,
    error
  };
};
const useInstallStatus = () => {
  const isInstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  return {
    isInstalling,
    error
  };
};
const useUninstallStatus = () => {
  const isUninstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  return {
    isUninstalling,
    error
  };
}; // Only fetches in case they were not fetched yet

const useFetchAll = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isNotFetched = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestNotFetched)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isNotFetched && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll)());
  }, []); // eslint-disable-line
};
const useFetchDetails = id => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const plugin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectById)(state, id));
  const isNotFetching = !(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const shouldFetch = isNotFetching && plugin && !plugin.details;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    shouldFetch && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails)(id));
  }, [plugin]); // eslint-disable-line
};
const useDisplayMode = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const displayMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_5__.selectDisplayMode);
  return {
    displayMode,
    setDisplayMode: v => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setDisplayMode)(v))
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectById": () => (/* binding */ selectById),
/* harmony export */   "selectDisplayMode": () => (/* binding */ selectDisplayMode),
/* harmony export */   "selectIsRequestNotFetched": () => (/* binding */ selectIsRequestNotFetched),
/* harmony export */   "selectIsRequestPending": () => (/* binding */ selectIsRequestPending),
/* harmony export */   "selectItems": () => (/* binding */ selectItems),
/* harmony export */   "selectPluginErrors": () => (/* binding */ selectPluginErrors),
/* harmony export */   "selectRequest": () => (/* binding */ selectRequest),
/* harmony export */   "selectRequestError": () => (/* binding */ selectRequestError),
/* harmony export */   "selectRoot": () => (/* binding */ selectRoot)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");



const selectRoot = state => state.plugins;
const selectItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  items
}) => items);
const selectDisplayMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  settings
}) => settings.displayMode);
const {
  selectAll,
  selectById
} = _reducer__WEBPACK_IMPORTED_MODULE_1__.pluginsAdapter.getSelectors(selectItems);

const selectInstalled = filterBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins.filter(plugin => filterBy === 'installed' ? plugin.isInstalled : !plugin.isCore));

const findByInstallAndType = (filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectInstalled(filterBy), plugins => plugins.filter(plugin => filterByType === 'all' || plugin.type === filterByType));

const findByKeyword = searchBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => {
  if (searchBy === '') {
    return [];
  }

  return plugins.filter(plugin => {
    const fields = [];

    if (plugin.name) {
      fields.push(plugin.name.toLowerCase());
    }

    if (plugin.orgName) {
      fields.push(plugin.orgName.toLowerCase());
    }

    return fields.some(f => f.includes(searchBy.toLowerCase()));
  });
});

const find = (searchBy, filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(findByInstallAndType(filterBy, filterByType), findByKeyword(searchBy), (filteredPlugins, searchedPlugins) => {
  return searchBy === '' ? filteredPlugins : searchedPlugins;
});
const selectPluginErrors = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins ? plugins.filter(p => Boolean(p.error)).map(p => ({
  pluginId: p.id,
  errorCode: p.error
})) : []); // The following selectors are used to get information about the outstanding or completed plugins-related network requests.

const selectRequest = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  requests = {}
}) => requests[actionType]);
const selectIsRequestPending = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Pending);
const selectRequestError = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Rejected ? request === null || request === void 0 ? void 0 : request.error : null);
const selectIsRequestNotFetched = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => request === undefined);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUF1QkEsUUFBUSxDQUFDRCxVQUFELENBQTVDLENBRFQ7QUFHQSxNQUFNdEQsc0JBQXNCLEdBQUlzRCxVQUFELElBQ3BDekIsZ0VBQWMsQ0FBQ3dCLGFBQWEsQ0FBQ0MsVUFBRCxDQUFkLEVBQTZCRSxPQUFELElBQWEsQ0FBQUEsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVDLE1BQVQsTUFBb0IzQix5REFBN0QsQ0FEVDtBQUdBLE1BQU03QixrQkFBa0IsR0FBSXFELFVBQUQsSUFDaEN6QixnRUFBYyxDQUFDd0IsYUFBYSxDQUFDQyxVQUFELENBQWQsRUFBNkJFLE9BQUQsSUFDeEMsQ0FBQUEsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVDLE1BQVQsTUFBb0IzQiwwREFBcEIsR0FBNkMwQixPQUE3QyxhQUE2Q0EsT0FBN0MsdUJBQTZDQSxPQUFPLENBQUV0TyxLQUF0RCxHQUE4RCxJQURsRCxDQURUO0FBS0EsTUFBTWdMLHlCQUF5QixHQUFJb0QsVUFBRCxJQUN2Q3pCLGdFQUFjLENBQUN3QixhQUFhLENBQUNDLFVBQUQsQ0FBZCxFQUE2QkUsT0FBRCxJQUFhQSxPQUFPLEtBQUtJLFNBQXJELENBRFQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL1BsdWdpbkRpc2FibGVkQmFkZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvUGx1Z2luRW50ZXJwcmlzZUJhZGdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL1BsdWdpbkluc3RhbGxCYWRnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0JhZGdlcy9QbHVnaW5VcGRhdGVBdmFpbGFibGVCYWRnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0JhZGdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL3NoYXJlZFN0eWxlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvSG9yaXpvbnRhbEdyb3VwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luTGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BsdWdpbkxpc3RJdGVtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luTGlzdEl0ZW1CYWRnZXMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5Mb2dvLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvU2VhcmNoRmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vaG9va3MvdXNlSGlzdG9yeS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9wYWdlcy9Ccm93c2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vc3RhdGUvaG9va3MudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9zdGF0ZS9zZWxlY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luRXJyb3JDb2RlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxudHlwZSBQcm9wcyA9IHsgZXJyb3I/OiBQbHVnaW5FcnJvckNvZGUgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRpc2FibGVkQmFkZ2UoeyBlcnJvciB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHRvb2x0aXAgPSBlcnJvckNvZGVUb1Rvb2x0aXAoZXJyb3IpO1xuICByZXR1cm4gPEJhZGdlIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIHRleHQ9XCJEaXNhYmxlZFwiIGNvbG9yPVwicmVkXCIgdG9vbHRpcD17dG9vbHRpcH0gLz47XG59XG5cbmZ1bmN0aW9uIGVycm9yQ29kZVRvVG9vbHRpcChlcnJvcj86IFBsdWdpbkVycm9yQ29kZSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHN3aXRjaCAoZXJyb3IpIHtcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5tb2RpZmllZFNpZ25hdHVyZTpcbiAgICAgIHJldHVybiAnUGx1Z2luIGRpc2FibGVkIGR1ZSB0byBtb2RpZmllZCBjb250ZW50JztcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5pbnZhbGlkU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuICdQbHVnaW4gZGlzYWJsZWQgZHVlIHRvIGludmFsaWQgcGx1Z2luIHNpZ25hdHVyZSc7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubWlzc2luZ1NpZ25hdHVyZTpcbiAgICAgIHJldHVybiAnUGx1Z2luIGRpc2FibGVkIGR1ZSB0byBtaXNzaW5nIHBsdWdpbiBzaWduYXR1cmUnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYFBsdWdpbiBkaXNhYmxlZCBkdWUgdG8gdW5rb3duIGVycm9yOiAke2Vycm9yfWA7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCYWRnZSwgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIFBsdWdpblNpZ25hdHVyZUJhZGdlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRCYWRnZUNvbG9yIH0gZnJvbSAnLi9zaGFyZWRTdHlsZXMnO1xuXG50eXBlIFByb3BzID0geyBwbHVnaW46IENhdGFsb2dQbHVnaW4gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkVudGVycHJpc2VCYWRnZSh7IHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IGN1c3RvbUJhZGdlU3R5bGVzID0gdXNlU3R5bGVzMihnZXRCYWRnZUNvbG9yKTtcbiAgY29uc3Qgb25DbGljayA9IChldjogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHdpbmRvdy5vcGVuKFxuICAgICAgYGh0dHBzOi8vZ3JhZmFuYS5jb20vZ3JhZmFuYS9wbHVnaW5zLyR7cGx1Z2luLmlkfT91dG1fc291cmNlPWdyYWZhbmFfY2F0YWxvZ19sZWFybl9tb3JlYCxcbiAgICAgICdfYmxhbmsnLFxuICAgICAgJ25vb3BlbmVyLG5vcmVmZXJyZXInXG4gICAgKTtcbiAgfTtcblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpKSB7XG4gICAgcmV0dXJuIDxCYWRnZSB0ZXh0PVwiRW50ZXJwcmlzZVwiIGNvbG9yPVwiYmx1ZVwiIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz5cbiAgICAgIDxCYWRnZSBpY29uPVwibG9ja1wiIGFyaWEtbGFiZWw9XCJsb2NrIGljb25cIiB0ZXh0PVwiRW50ZXJwcmlzZVwiIGNvbG9yPVwiYmx1ZVwiIGNsYXNzTmFtZT17Y3VzdG9tQmFkZ2VTdHlsZXN9IC8+XG4gICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIGZpbGw9XCJ0ZXh0XCIgaWNvbj1cImV4dGVybmFsLWxpbmstYWx0XCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIExlYXJuIG1vcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldEJhZGdlQ29sb3IgfSBmcm9tICcuL3NoYXJlZFN0eWxlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5JbnN0YWxsZWRCYWRnZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjdXN0b21CYWRnZVN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0QmFkZ2VDb2xvcik7XG4gIHJldHVybiA8QmFkZ2UgdGV4dD1cIkluc3RhbGxlZFwiIGNvbG9yPVwib3JhbmdlXCIgY2xhc3NOYW1lPXtjdXN0b21CYWRnZVN0eWxlc30gLz47XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlKHsgcGx1Z2luIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICAvLyBDdXJyZW50bHkgcmVuZGVyZXIgcGx1Z2lucyBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgY2F0YWxvZyBkdWUgdG8gY29tcGxpY2F0aW9ucyByZWxhdGVkIHRvIGluc3RhbGxhdGlvbiAvIHVwZGF0ZSAvIHVuaW5zdGFsbC5cbiAgaWYgKHBsdWdpbi5oYXNVcGRhdGUgJiYgIXBsdWdpbi5pc0NvcmUgJiYgcGx1Z2luLnR5cGUgIT09IFBsdWdpblR5cGUucmVuZGVyZXIpIHtcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPXtzdHlsZXMuaGFzVXBkYXRlfT5VcGRhdGUgYXZhaWxhYmxlITwvcD47XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhc1VwZGF0ZTogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGAsXG4gIH07XG59O1xuIiwiZXhwb3J0IHsgUGx1Z2luRGlzYWJsZWRCYWRnZSB9IGZyb20gJy4vUGx1Z2luRGlzYWJsZWRCYWRnZSc7XG5leHBvcnQgeyBQbHVnaW5JbnN0YWxsZWRCYWRnZSB9IGZyb20gJy4vUGx1Z2luSW5zdGFsbEJhZGdlJztcbmV4cG9ydCB7IFBsdWdpbkVudGVycHJpc2VCYWRnZSB9IGZyb20gJy4vUGx1Z2luRW50ZXJwcmlzZUJhZGdlJztcbmV4cG9ydCB7IFBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlIH0gZnJvbSAnLi9QbHVnaW5VcGRhdGVBdmFpbGFibGVCYWRnZSc7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBnZXRCYWRnZUNvbG9yID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiBjc3NgXG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYm9yZGVyLnN0cm9uZ307XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG5gO1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBIb3Jpem9udGFsR3JvdXBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHdyYXA/OiBib29sZWFuO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBIb3Jpem9udGFsR3JvdXAgPSAoeyBjaGlsZHJlbiwgd3JhcCwgY2xhc3NOYW1lIH06IEhvcml6b250YWxHcm91cFByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh0aGVtZSwgd3JhcCk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGFpbmVyLCBjbGFzc05hbWUpfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyLCB3cmFwPzogYm9vbGVhbikgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogJHt3cmFwID8gJ3dyYXAnIDogJ25vLXdyYXAnfTtcbiAgICAmID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoKX07XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygpfTtcbiAgICB9XG4gICAgJiA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luLCBQbHVnaW5MaXN0RGlzcGxheU1vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IFBsdWdpbkxpc3RJdGVtIH0gZnJvbSAnLi9QbHVnaW5MaXN0SXRlbSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBsdWdpbnM6IENhdGFsb2dQbHVnaW5bXTtcbiAgZGlzcGxheU1vZGU6IFBsdWdpbkxpc3REaXNwbGF5TW9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IFBsdWdpbkxpc3QgPSAoeyBwbHVnaW5zLCBkaXNwbGF5TW9kZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBpc0xpc3QgPSBkaXNwbGF5TW9kZSA9PT0gUGx1Z2luTGlzdERpc3BsYXlNb2RlLkxpc3Q7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250YWluZXIsIHsgW3N0eWxlcy5saXN0XTogaXNMaXN0IH0pfSBkYXRhLXRlc3RpZD1cInBsdWdpbi1saXN0XCI+XG4gICAgICB7cGx1Z2lucy5tYXAoKHBsdWdpbikgPT4gKFxuICAgICAgICA8UGx1Z2luTGlzdEl0ZW0ga2V5PXtwbHVnaW4uaWR9IHBsdWdpbj17cGx1Z2lufSBwYXRoTmFtZT17bG9jYXRpb24ucGF0aG5hbWV9IGRpc3BsYXlNb2RlPXtkaXNwbGF5TW9kZX0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjg4cHgsIDFmcikpO1xuICAgICAgZ2FwOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgIGAsXG4gICAgbGlzdDogY3NzYFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEljb24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IENhdGFsb2dQbHVnaW4sIFBsdWdpbkljb25OYW1lLCBQbHVnaW5MaXN0RGlzcGxheU1vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IFBsdWdpbkxpc3RJdGVtQmFkZ2VzIH0gZnJvbSAnLi9QbHVnaW5MaXN0SXRlbUJhZGdlcyc7XG5pbXBvcnQgeyBQbHVnaW5Mb2dvIH0gZnJvbSAnLi9QbHVnaW5Mb2dvJztcblxuZXhwb3J0IGNvbnN0IExPR09fU0laRSA9ICc0OHB4JztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xuICBwYXRoTmFtZTogc3RyaW5nO1xuICBkaXNwbGF5TW9kZT86IFBsdWdpbkxpc3REaXNwbGF5TW9kZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5MaXN0SXRlbSh7IHBsdWdpbiwgcGF0aE5hbWUsIGRpc3BsYXlNb2RlID0gUGx1Z2luTGlzdERpc3BsYXlNb2RlLkdyaWQgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBpc0xpc3QgPSBkaXNwbGF5TW9kZSA9PT0gUGx1Z2luTGlzdERpc3BsYXlNb2RlLkxpc3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXtgJHtwYXRoTmFtZX0vJHtwbHVnaW4uaWR9YH0gY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGFpbmVyLCB7IFtzdHlsZXMubGlzdF06IGlzTGlzdCB9KX0+XG4gICAgICA8UGx1Z2luTG9nbyBzcmM9e3BsdWdpbi5pbmZvLmxvZ29zLnNtYWxsfSBjbGFzc05hbWU9e3N0eWxlcy5wbHVnaW5Mb2dvfSBoZWlnaHQ9e0xPR09fU0laRX0gYWx0PVwiXCIgLz5cbiAgICAgIDxoMiBjbGFzc05hbWU9e2N4KHN0eWxlcy5uYW1lLCAncGx1Z2luLW5hbWUnKX0+e3BsdWdpbi5uYW1lfTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRlbnQsICdwbHVnaW4tY29udGVudCcpfT5cbiAgICAgICAgPHA+Qnkge3BsdWdpbi5vcmdOYW1lfTwvcD5cbiAgICAgICAgPFBsdWdpbkxpc3RJdGVtQmFkZ2VzIHBsdWdpbj17cGx1Z2lufSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsdWdpblR5cGV9PlxuICAgICAgICB7cGx1Z2luLnR5cGUgJiYgPEljb24gbmFtZT17UGx1Z2luSWNvbk5hbWVbcGx1Z2luLnR5cGVdfSB0aXRsZT17YCR7cGx1Z2luLnR5cGV9IHBsdWdpbmB9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICApO1xufVxuXG4vLyBTdHlsZXMgc2hhcmVkIGJldHdlZW4gdGhlIGRpZmZlcmVudCB0eXBlIG9mIGxpc3QgaXRlbXNcbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7TE9HT19TSVpFfSAxZnIgJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgIGdhcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2JhY2tncm91bmQtY29sb3InLCAnYm94LXNoYWRvdycsICdib3JkZXItY29sb3InLCAnY29sb3InXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnQsXG4gICAgICB9KX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5lbXBoYXNpemUodGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5LCAwLjAzKX07XG4gICAgICB9XG4gICAgYCxcbiAgICBsaXN0OiBjc3NgXG4gICAgICByb3ctZ2FwOiAwcHg7XG5cbiAgICAgID4gaW1nIHtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgID4gLnBsdWdpbi1jb250ZW50IHtcbiAgICAgICAgbWluLWhlaWdodDogMHB4O1xuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gNCAvIDM7XG5cbiAgICAgICAgPiBwIHtcbiAgICAgICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygwLCAwLCAwLjUsIDApfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA+IC5wbHVnaW4tbmFtZSB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICAgICAgfVxuICAgIGAsXG4gICAgcGx1Z2luVHlwZTogY3NzYFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBgLFxuICAgIHBsdWdpbkxvZ286IGNzc2BcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYCxcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIGAsXG4gICAgbmFtZTogY3NzYFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDQuZm9udFNpemV9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gICAgICBtYXJnaW46IDA7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIFBsdWdpblNpZ25hdHVyZUJhZGdlIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBQbHVnaW5FbnRlcnByaXNlQmFkZ2UsIFBsdWdpbkRpc2FibGVkQmFkZ2UsIFBsdWdpbkluc3RhbGxlZEJhZGdlLCBQbHVnaW5VcGRhdGVBdmFpbGFibGVCYWRnZSB9IGZyb20gJy4vQmFkZ2VzJztcblxudHlwZSBQbHVnaW5CYWRnZVR5cGUgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5MaXN0SXRlbUJhZGdlcyh7IHBsdWdpbiB9OiBQbHVnaW5CYWRnZVR5cGUpIHtcbiAgaWYgKHBsdWdpbi5pc0VudGVycHJpc2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBoZWlnaHQ9XCJhdXRvXCIgd3JhcD5cbiAgICAgICAgPFBsdWdpbkVudGVycHJpc2VCYWRnZSBwbHVnaW49e3BsdWdpbn0gLz5cbiAgICAgICAge3BsdWdpbi5pc0Rpc2FibGVkICYmIDxQbHVnaW5EaXNhYmxlZEJhZGdlIGVycm9yPXtwbHVnaW4uZXJyb3J9IC8+fVxuICAgICAgICA8UGx1Z2luVXBkYXRlQXZhaWxhYmxlQmFkZ2UgcGx1Z2luPXtwbHVnaW59IC8+XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SG9yaXpvbnRhbEdyb3VwIGhlaWdodD1cImF1dG9cIiB3cmFwPlxuICAgICAgPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz5cbiAgICAgIHtwbHVnaW4uaXNEaXNhYmxlZCAmJiA8UGx1Z2luRGlzYWJsZWRCYWRnZSBlcnJvcj17cGx1Z2luLmVycm9yfSAvPn1cbiAgICAgIHtwbHVnaW4uaXNJbnN0YWxsZWQgJiYgPFBsdWdpbkluc3RhbGxlZEJhZGdlIC8+fVxuICAgICAgPFBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlIHBsdWdpbj17cGx1Z2lufSAvPlxuICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQbHVnaW5Mb2dvUHJvcHMgPSB7XG4gIGFsdDogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHNyYzogc3RyaW5nO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luTG9nbyh7IGFsdCwgY2xhc3NOYW1lLCBzcmMsIGhlaWdodCB9OiBQbHVnaW5Mb2dvUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAvLyBAdHMtaWdub3JlIC0gcmVhY3QgZG9lc24ndCBrbm93IGFib3V0IGxvYWRpbmcgYXR0ci5cbiAgcmV0dXJuIDxpbWcgc3JjPXtzcmN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhbHQ9e2FsdH0gbG9hZGluZz1cImxhenlcIiBoZWlnaHQ9e2hlaWdodH0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgRmlsdGVySW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBvblNlYXJjaDogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbi8vIHVzZURlYm91bmNlIGhhcyBhIGJ1ZyB3aGljaCBjYXVzZXMgaXQgdG8gZmlyZSBvbiBmaXJzdCByZW5kZXIuIFRoaXMgd3JhcHBlciBwcmV2ZW50cyB0aGF0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N0cmVhbWljaC9yZWFjdC11c2UvaXNzdWVzLzc1OVxuY29uc3QgdXNlRGVib3VuY2VXaXRob3V0Rmlyc3RSZW5kZXIgPSAoY2FsbEJhY2s6ICgpID0+IGFueSwgZGVsYXkgPSAwLCBkZXBzOiBSZWFjdC5EZXBlbmRlbmN5TGlzdCA9IFtdKSA9PiB7XG4gIGNvbnN0IGlzRmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XG4gIGNvbnN0IGRlYm91bmNlRGVwcyA9IFsuLi5kZXBzLCBpc0ZpcnN0UmVuZGVyXTtcblxuICByZXR1cm4gdXNlRGVib3VuY2UoXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKGlzRmlyc3RSZW5kZXIuY3VycmVudCkge1xuICAgICAgICBpc0ZpcnN0UmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhbGxCYWNrKCk7XG4gICAgfSxcbiAgICBkZWxheSxcbiAgICBkZWJvdW5jZURlcHNcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hGaWVsZCA9ICh7IHZhbHVlLCBvblNlYXJjaCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKHZhbHVlKTtcblxuICB1c2VEZWJvdW5jZVdpdGhvdXRGaXJzdFJlbmRlcigoKSA9PiBvblNlYXJjaChxdWVyeSA/PyAnJyksIDUwMCwgW3F1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmlsdGVySW5wdXRcbiAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICBvblNlYXJjaChlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggR3JhZmFuYSBwbHVnaW5zXCJcbiAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgc2V0UXVlcnkodmFsdWUpO1xuICAgICAgfX1cbiAgICAgIHdpZHRoPXs0Nn1cbiAgICAvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgY29uc3QgdXNlSGlzdG9yeSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwdXNoOiAoeyBxdWVyeSB9OiBhbnkpID0+IHtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHF1ZXJ5KTtcbiAgICB9LFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUsIEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VhcmNoVG9PYmplY3QgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IExvYWRpbmdQbGFjZWhvbGRlciwgU2VsZWN0LCBSYWRpb0J1dHRvbkdyb3VwLCB1c2VTdHlsZXMyLCBUb29sdGlwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ib3Jpem9udGFsR3JvdXAnO1xuaW1wb3J0IHsgUGx1Z2luTGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGx1Z2luTGlzdCc7XG5pbXBvcnQgeyBTZWFyY2hGaWVsZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRmllbGQnO1xuaW1wb3J0IHsgU29ydGVycyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJy4uL2hvb2tzL3VzZUhpc3RvcnknO1xuaW1wb3J0IHsgdXNlR2V0QWxsV2l0aEZpbHRlcnMsIHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSwgdXNlRGlzcGxheU1vZGUgfSBmcm9tICcuLi9zdGF0ZS9ob29rcyc7XG5pbXBvcnQgeyBQbHVnaW5BZG1pblJvdXRlcywgUGx1Z2luTGlzdERpc3BsYXlNb2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcm93c2UoeyByb3V0ZSB9OiBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IGxvY2F0aW9uU2VhcmNoID0gbG9jYXRpb25TZWFyY2hUb09iamVjdChsb2NhdGlvbi5zZWFyY2gpO1xuICBjb25zdCBuYXZNb2RlbElkID0gZ2V0TmF2TW9kZWxJZChyb3V0ZS5yb3V0ZU5hbWUpO1xuICBjb25zdCBuYXZNb2RlbCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsIG5hdk1vZGVsSWQpKTtcbiAgY29uc3QgeyBkaXNwbGF5TW9kZSwgc2V0RGlzcGxheU1vZGUgfSA9IHVzZURpc3BsYXlNb2RlKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgcmVtb3RlUGx1Z2luc0F2YWlsYWJsZSA9IHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSgpO1xuICBjb25zdCBxdWVyeSA9IChsb2NhdGlvblNlYXJjaC5xIGFzIHN0cmluZykgfHwgJyc7XG4gIGNvbnN0IGZpbHRlckJ5ID0gKGxvY2F0aW9uU2VhcmNoLmZpbHRlckJ5IGFzIHN0cmluZykgfHwgJ2luc3RhbGxlZCc7XG4gIGNvbnN0IGZpbHRlckJ5VHlwZSA9IChsb2NhdGlvblNlYXJjaC5maWx0ZXJCeVR5cGUgYXMgc3RyaW5nKSB8fCAnYWxsJztcbiAgY29uc3Qgc29ydEJ5ID0gKGxvY2F0aW9uU2VhcmNoLnNvcnRCeSBhcyBTb3J0ZXJzKSB8fCBTb3J0ZXJzLm5hbWVBc2M7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgcGx1Z2lucyB9ID0gdXNlR2V0QWxsV2l0aEZpbHRlcnMoe1xuICAgIHF1ZXJ5LFxuICAgIGZpbHRlckJ5LFxuICAgIGZpbHRlckJ5VHlwZSxcbiAgICBzb3J0QnksXG4gIH0pO1xuICBjb25zdCBmaWx0ZXJCeU9wdGlvbnMgPSBbXG4gICAgeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnQWxsJyB9LFxuICAgIHsgdmFsdWU6ICdpbnN0YWxsZWQnLCBsYWJlbDogJ0luc3RhbGxlZCcgfSxcbiAgXTtcblxuICBjb25zdCBvblNvcnRCeUNoYW5nZSA9ICh2YWx1ZTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHtcbiAgICBoaXN0b3J5LnB1c2goeyBxdWVyeTogeyBzb3J0Qnk6IHZhbHVlLnZhbHVlIH0gfSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaWx0ZXJCeUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKHsgcXVlcnk6IHsgZmlsdGVyQnk6IHZhbHVlIH0gfSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaWx0ZXJCeVR5cGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGhpc3RvcnkucHVzaCh7IHF1ZXJ5OiB7IGZpbHRlckJ5VHlwZTogdmFsdWUgfSB9KTtcbiAgfTtcblxuICBjb25zdCBvblNlYXJjaCA9IChxOiBhbnkpID0+IHtcbiAgICBoaXN0b3J5LnB1c2goeyBxdWVyeTogeyBmaWx0ZXJCeTogJ2FsbCcsIGZpbHRlckJ5VHlwZTogJ2FsbCcsIHEgfSB9KTtcbiAgfTtcblxuICAvLyBIb3cgc2hvdWxkIHdlIGhhbmRsZSBlcnJvcnM/XG4gIGlmIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPEhvcml6b250YWxHcm91cCB3cmFwPlxuICAgICAgICAgIDxTZWFyY2hGaWVsZCB2YWx1ZT17cXVlcnl9IG9uU2VhcmNoPXtvblNlYXJjaH0gLz5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIHdyYXAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQmFyfT5cbiAgICAgICAgICAgIHsvKiBGaWx0ZXIgYnkgdHlwZSAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlckJ5VHlwZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25GaWx0ZXJCeVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnQWxsJyB9LFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2RhdGFzb3VyY2UnLCBsYWJlbDogJ0RhdGEgc291cmNlcycgfSxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdwYW5lbCcsIGxhYmVsOiAnUGFuZWxzJyB9LFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2FwcCcsIGxhYmVsOiAnQXBwbGljYXRpb25zJyB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEZpbHRlciBieSBpbnN0YWxsZWQgLyBhbGwgKi99XG4gICAgICAgICAgICB7cmVtb3RlUGx1Z2luc0F2YWlsYWJsZSA/IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCB2YWx1ZT17ZmlsdGVyQnl9IG9uQ2hhbmdlPXtvbkZpbHRlckJ5Q2hhbmdlfSBvcHRpb25zPXtmaWx0ZXJCeU9wdGlvbnN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiVGhpcyBmaWx0ZXIgaGFzIGJlZW4gZGlzYWJsZWQgYmVjYXVzZSB0aGUgR3JhZmFuYSBzZXJ2ZXIgY2Fubm90IGFjY2VzcyBncmFmYW5hLmNvbVwiXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlckJ5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25GaWx0ZXJCeUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVyQnlPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIFNvcnRpbmcgKi99XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnQgUGx1Z2lucyBMaXN0XCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3NvcnRCeX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25Tb3J0QnlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ25hbWVBc2MnLCBsYWJlbDogJ1NvcnQgYnkgbmFtZSAoQS1aKScgfSxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICduYW1lRGVzYycsIGxhYmVsOiAnU29ydCBieSBuYW1lIChaLUEpJyB9LFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ3VwZGF0ZWQnLCBsYWJlbDogJ1NvcnQgYnkgdXBkYXRlZCBkYXRlJyB9LFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ3B1Ymxpc2hlZCcsIGxhYmVsOiAnU29ydCBieSBwdWJsaXNoZWQgZGF0ZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdkb3dubG9hZHMnLCBsYWJlbDogJ1NvcnQgYnkgZG93bmxvYWRzJyB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIERpc3BsYXkgbW9kZSAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwPFBsdWdpbkxpc3REaXNwbGF5TW9kZT5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5QXN9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2Rpc3BsYXlNb2RlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXREaXNwbGF5TW9kZX1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBQbHVnaW5MaXN0RGlzcGxheU1vZGUuR3JpZCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEaXNwbGF5IHBsdWdpbnMgaW4gYSBncmlkIGxheW91dCcsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogUGx1Z2luTGlzdERpc3BsYXlNb2RlLkxpc3QsIGljb246ICdsaXN0LXVsJywgZGVzY3JpcHRpb246ICdEaXNwbGF5IHBsdWdpbnMgaW4gbGlzdCcgfSxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RXcmFwfT5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICB0ZXh0PVwiTG9hZGluZyByZXN1bHRzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxQbHVnaW5MaXN0IHBsdWdpbnM9e3BsdWdpbnN9IGRpc3BsYXlNb2RlPXtkaXNwbGF5TW9kZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgYWN0aW9uQmFyOiBjc3NgXG4gICAgJHt0aGVtZS5icmVha3BvaW50cy51cCgneGwnKX0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuICBgLFxuICBsaXN0V3JhcDogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG4gIGRpc3BsYXlBczogY3NzYFxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICBgLFxufSk7XG5cbi8vIEJlY2F1c2UgdGhlIGNvbXBvbmVudCBpcyB1c2VkIHVuZGVyIG11bHRpcGxlIHBhdGhzICgvcGx1Z2lucyBhbmQgL2FkbWluL3BsdWdpbnMpIHdlIG5lZWQgdG8gZ2V0XG4vLyB0aGUgY29ycmVjdCBuYXZNb2RlbCBmcm9tIHRoZSBzdG9yZVxuY29uc3QgZ2V0TmF2TW9kZWxJZCA9IChyb3V0ZU5hbWU/OiBzdHJpbmcpID0+IHtcbiAgaWYgKHJvdXRlTmFtZSA9PT0gUGx1Z2luQWRtaW5Sb3V0ZXMuSG9tZUFkbWluIHx8IHJvdXRlTmFtZSA9PT0gUGx1Z2luQWRtaW5Sb3V0ZXMuQnJvd3NlQWRtaW4pIHtcbiAgICByZXR1cm4gJ2FkbWluLXBsdWdpbnMnO1xuICB9XG5cbiAgcmV0dXJuICdwbHVnaW5zJztcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFBsdWdpbkVycm9yIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IHNvcnRQbHVnaW5zLCBTb3J0ZXJzIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luLCBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSwgUGx1Z2luTGlzdERpc3BsYXlNb2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBmZXRjaEFsbCwgZmV0Y2hEZXRhaWxzLCBmZXRjaFJlbW90ZVBsdWdpbnMsIGluc3RhbGwsIHVuaW5zdGFsbCB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXREaXNwbGF5TW9kZSB9IGZyb20gJy4vcmVkdWNlcic7XG5pbXBvcnQge1xuICBmaW5kLFxuICBzZWxlY3RBbGwsXG4gIHNlbGVjdEJ5SWQsXG4gIHNlbGVjdElzUmVxdWVzdFBlbmRpbmcsXG4gIHNlbGVjdFJlcXVlc3RFcnJvcixcbiAgc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZCxcbiAgc2VsZWN0RGlzcGxheU1vZGUsXG4gIHNlbGVjdFBsdWdpbkVycm9ycyxcbn0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG50eXBlIEZpbHRlcnMgPSB7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xuICBmaWx0ZXJCeT86IHN0cmluZztcbiAgZmlsdGVyQnlUeXBlPzogc3RyaW5nO1xuICBzb3J0Qnk/OiBTb3J0ZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbFdpdGhGaWx0ZXJzID0gKHtcbiAgcXVlcnkgPSAnJyxcbiAgZmlsdGVyQnkgPSAnaW5zdGFsbGVkJyxcbiAgZmlsdGVyQnlUeXBlID0gJ2FsbCcsXG4gIHNvcnRCeSA9IFNvcnRlcnMubmFtZUFzYyxcbn06IEZpbHRlcnMpID0+IHtcbiAgdXNlRmV0Y2hBbGwoKTtcblxuICBjb25zdCBmaWx0ZXJlZCA9IHVzZVNlbGVjdG9yKGZpbmQocXVlcnksIGZpbHRlckJ5LCBmaWx0ZXJCeVR5cGUpKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaFN0YXR1cygpO1xuICBjb25zdCBzb3J0ZWRBbmRGaWx0ZXJlZCA9IHNvcnRQbHVnaW5zKGZpbHRlcmVkLCBzb3J0QnkpO1xuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIHBsdWdpbnM6IHNvcnRlZEFuZEZpbHRlcmVkLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFsbCA9ICgpOiBDYXRhbG9nUGx1Z2luW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RBbGwpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldFNpbmdsZSA9IChpZDogc3RyaW5nKTogQ2F0YWxvZ1BsdWdpbiB8IHVuZGVmaW5lZCA9PiB7XG4gIHVzZUZldGNoQWxsKCk7XG4gIHVzZUZldGNoRGV0YWlscyhpZCk7XG5cbiAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUpID0+IHNlbGVjdEJ5SWQoc3RhdGUsIGlkKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0RXJyb3JzID0gKCk6IFBsdWdpbkVycm9yW10gPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIHJldHVybiB1c2VTZWxlY3RvcihzZWxlY3RQbHVnaW5FcnJvcnMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgcmV0dXJuIChpZDogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nLCBpc1VwZGF0aW5nPzogYm9vbGVhbikgPT4gZGlzcGF0Y2goaW5zdGFsbCh7IGlkLCB2ZXJzaW9uLCBpc1VwZGF0aW5nIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVbmluc3RhbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICByZXR1cm4gKGlkOiBzdHJpbmcpID0+IGRpc3BhdGNoKHVuaW5zdGFsbChpZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hSZW1vdGVQbHVnaW5zLnR5cGVQcmVmaXgpKTtcbiAgcmV0dXJuIGVycm9yID09PSBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoQWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hBbGwudHlwZVByZWZpeCkpO1xuXG4gIHJldHVybiB7IGlzTG9hZGluZywgZXJyb3IgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VGZXRjaERldGFpbHNTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcblxuICByZXR1cm4geyBpc0xvYWRpbmcsIGVycm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNJbnN0YWxsaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyhpbnN0YWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IoaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNJbnN0YWxsaW5nLCBlcnJvciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVVuaW5zdGFsbFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNVbmluc3RhbGxpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKHVuaW5zdGFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNVbmluc3RhbGxpbmcsIGVycm9yIH07XG59O1xuXG4vLyBPbmx5IGZldGNoZXMgaW4gY2FzZSB0aGV5IHdlcmUgbm90IGZldGNoZWQgeWV0XG5leHBvcnQgY29uc3QgdXNlRmV0Y2hBbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNOb3RGZXRjaGVkID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZChmZXRjaEFsbC50eXBlUHJlZml4KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc05vdEZldGNoZWQgJiYgZGlzcGF0Y2goZmV0Y2hBbGwoKSk7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoRGV0YWlscyA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcGx1Z2luID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc2VsZWN0QnlJZChzdGF0ZSwgaWQpKTtcbiAgY29uc3QgaXNOb3RGZXRjaGluZyA9ICF1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoRGV0YWlscy50eXBlUHJlZml4KSk7XG4gIGNvbnN0IHNob3VsZEZldGNoID0gaXNOb3RGZXRjaGluZyAmJiBwbHVnaW4gJiYgIXBsdWdpbi5kZXRhaWxzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvdWxkRmV0Y2ggJiYgZGlzcGF0Y2goZmV0Y2hEZXRhaWxzKGlkKSk7XG4gIH0sIFtwbHVnaW5dKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZURpc3BsYXlNb2RlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGRpc3BsYXlNb2RlID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGlzcGxheU1vZGUpO1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheU1vZGUsXG4gICAgc2V0RGlzcGxheU1vZGU6ICh2OiBQbHVnaW5MaXN0RGlzcGxheU1vZGUpID0+IGRpc3BhdGNoKHNldERpc3BsYXlNb2RlKHYpKSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQgeyBQbHVnaW5FcnJvciwgUGx1Z2luRXJyb3JDb2RlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IFJlcXVlc3RTdGF0dXMsIFBsdWdpbkNhdGFsb2dTdG9yZVN0YXRlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBwbHVnaW5zQWRhcHRlciB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSb290ID0gKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc3RhdGUucGx1Z2lucztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Um9vdCwgKHsgaXRlbXMgfSkgPT4gaXRlbXMpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0RGlzcGxheU1vZGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyBzZXR0aW5ncyB9KSA9PiBzZXR0aW5ncy5kaXNwbGF5TW9kZSk7XG5cbmV4cG9ydCBjb25zdCB7IHNlbGVjdEFsbCwgc2VsZWN0QnlJZCB9ID0gcGx1Z2luc0FkYXB0ZXIuZ2V0U2VsZWN0b3JzKHNlbGVjdEl0ZW1zKTtcblxuY29uc3Qgc2VsZWN0SW5zdGFsbGVkID0gKGZpbHRlckJ5OiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEFsbCwgKHBsdWdpbnMpID0+XG4gICAgcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gKGZpbHRlckJ5ID09PSAnaW5zdGFsbGVkJyA/IHBsdWdpbi5pc0luc3RhbGxlZCA6ICFwbHVnaW4uaXNDb3JlKSlcbiAgKTtcblxuY29uc3QgZmluZEJ5SW5zdGFsbEFuZFR5cGUgPSAoZmlsdGVyQnk6IHN0cmluZywgZmlsdGVyQnlUeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEluc3RhbGxlZChmaWx0ZXJCeSksIChwbHVnaW5zKSA9PlxuICAgIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IGZpbHRlckJ5VHlwZSA9PT0gJ2FsbCcgfHwgcGx1Z2luLnR5cGUgPT09IGZpbHRlckJ5VHlwZSlcbiAgKTtcblxuY29uc3QgZmluZEJ5S2V5d29yZCA9IChzZWFyY2hCeTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RBbGwsIChwbHVnaW5zKSA9PiB7XG4gICAgaWYgKHNlYXJjaEJ5ID09PSAnJykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IFN0cmluZ1tdID0gW107XG4gICAgICBpZiAocGx1Z2luLm5hbWUpIHtcbiAgICAgICAgZmllbGRzLnB1c2gocGx1Z2luLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbHVnaW4ub3JnTmFtZSkge1xuICAgICAgICBmaWVsZHMucHVzaChwbHVnaW4ub3JnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpZWxkcy5zb21lKChmKSA9PiBmLmluY2x1ZGVzKHNlYXJjaEJ5LnRvTG93ZXJDYXNlKCkpKTtcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gKHNlYXJjaEJ5OiBzdHJpbmcsIGZpbHRlckJ5OiBzdHJpbmcsIGZpbHRlckJ5VHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBmaW5kQnlJbnN0YWxsQW5kVHlwZShmaWx0ZXJCeSwgZmlsdGVyQnlUeXBlKSxcbiAgICBmaW5kQnlLZXl3b3JkKHNlYXJjaEJ5KSxcbiAgICAoZmlsdGVyZWRQbHVnaW5zLCBzZWFyY2hlZFBsdWdpbnMpID0+IHtcbiAgICAgIHJldHVybiBzZWFyY2hCeSA9PT0gJycgPyBmaWx0ZXJlZFBsdWdpbnMgOiBzZWFyY2hlZFBsdWdpbnM7XG4gICAgfVxuICApO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UGx1Z2luRXJyb3JzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QWxsLCAocGx1Z2lucykgPT5cbiAgcGx1Z2luc1xuICAgID8gcGx1Z2luc1xuICAgICAgICAuZmlsdGVyKChwKSA9PiBCb29sZWFuKHAuZXJyb3IpKVxuICAgICAgICAubWFwKFxuICAgICAgICAgIChwKTogUGx1Z2luRXJyb3IgPT4gKHtcbiAgICAgICAgICAgIHBsdWdpbklkOiBwLmlkLFxuICAgICAgICAgICAgZXJyb3JDb2RlOiBwIS5lcnJvciBhcyBQbHVnaW5FcnJvckNvZGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIDogW11cbik7XG5cbi8vIFRoZSBmb2xsb3dpbmcgc2VsZWN0b3JzIGFyZSB1c2VkIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgb3V0c3RhbmRpbmcgb3IgY29tcGxldGVkIHBsdWdpbnMtcmVsYXRlZCBuZXR3b3JrIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlcXVlc3QgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyByZXF1ZXN0cyA9IHt9IH0pID0+IHJlcXVlc3RzW2FjdGlvblR5cGVdKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzUmVxdWVzdFBlbmRpbmcgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSZXF1ZXN0KGFjdGlvblR5cGUpLCAocmVxdWVzdCkgPT4gcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlBlbmRpbmcpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVxdWVzdEVycm9yID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+XG4gICAgcmVxdWVzdD8uc3RhdHVzID09PSBSZXF1ZXN0U3RhdHVzLlJlamVjdGVkID8gcmVxdWVzdD8uZXJyb3IgOiBudWxsXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+IHJlcXVlc3QgPT09IHVuZGVmaW5lZCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQbHVnaW5FcnJvckNvZGUiLCJCYWRnZSIsIlBsdWdpbkRpc2FibGVkQmFkZ2UiLCJlcnJvciIsInRvb2x0aXAiLCJlcnJvckNvZGVUb1Rvb2x0aXAiLCJtb2RpZmllZFNpZ25hdHVyZSIsImludmFsaWRTaWduYXR1cmUiLCJtaXNzaW5nU2lnbmF0dXJlIiwiZmVhdHVyZUVuYWJsZWQiLCJCdXR0b24iLCJIb3Jpem9udGFsR3JvdXAiLCJQbHVnaW5TaWduYXR1cmVCYWRnZSIsInVzZVN0eWxlczIiLCJnZXRCYWRnZUNvbG9yIiwiUGx1Z2luRW50ZXJwcmlzZUJhZGdlIiwicGx1Z2luIiwiY3VzdG9tQmFkZ2VTdHlsZXMiLCJvbkNsaWNrIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsIm9wZW4iLCJpZCIsInNpZ25hdHVyZSIsIlBsdWdpbkluc3RhbGxlZEJhZGdlIiwiY3NzIiwiUGx1Z2luVHlwZSIsIlBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaGFzVXBkYXRlIiwiaXNDb3JlIiwidHlwZSIsInJlbmRlcmVyIiwidGhlbWUiLCJjb2xvcnMiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImJvZHlTbWFsbCIsImZvbnRTaXplIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJib3JkZXIiLCJzdHJvbmciLCJjeCIsInVzZVRoZW1lMiIsImNoaWxkcmVuIiwid3JhcCIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInNwYWNpbmciLCJ1c2VMb2NhdGlvbiIsIlBsdWdpbkxpc3REaXNwbGF5TW9kZSIsIlBsdWdpbkxpc3RJdGVtIiwiUGx1Z2luTGlzdCIsInBsdWdpbnMiLCJkaXNwbGF5TW9kZSIsImlzTGlzdCIsIkxpc3QiLCJsb2NhdGlvbiIsImxpc3QiLCJtYXAiLCJwYXRobmFtZSIsIkljb24iLCJQbHVnaW5JY29uTmFtZSIsIlBsdWdpbkxpc3RJdGVtQmFkZ2VzIiwiUGx1Z2luTG9nbyIsIkxPR09fU0laRSIsInBhdGhOYW1lIiwiR3JpZCIsImluZm8iLCJsb2dvcyIsInNtYWxsIiwicGx1Z2luTG9nbyIsIm5hbWUiLCJjb250ZW50Iiwib3JnTmFtZSIsInBsdWdpblR5cGUiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydCIsImVtcGhhc2l6ZSIsImg0IiwiaXNFbnRlcnByaXNlIiwiaXNEaXNhYmxlZCIsImlzSW5zdGFsbGVkIiwiYWx0Iiwic3JjIiwiaGVpZ2h0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VEZWJvdW5jZSIsIkZpbHRlcklucHV0IiwidXNlRGVib3VuY2VXaXRob3V0Rmlyc3RSZW5kZXIiLCJjYWxsQmFjayIsImRlbGF5IiwiZGVwcyIsImlzRmlyc3RSZW5kZXIiLCJkZWJvdW5jZURlcHMiLCJjdXJyZW50IiwiU2VhcmNoRmllbGQiLCJ2YWx1ZSIsIm9uU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsImUiLCJrZXkiLCJrZXlDb2RlIiwiY3VycmVudFRhcmdldCIsImxvY2F0aW9uU2VydmljZSIsInVzZUhpc3RvcnkiLCJwdXNoIiwicGFydGlhbCIsInVzZVNlbGVjdG9yIiwibG9jYXRpb25TZWFyY2hUb09iamVjdCIsIkxvYWRpbmdQbGFjZWhvbGRlciIsIlNlbGVjdCIsIlJhZGlvQnV0dG9uR3JvdXAiLCJUb29sdGlwIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiU29ydGVycyIsInVzZUdldEFsbFdpdGhGaWx0ZXJzIiwidXNlSXNSZW1vdGVQbHVnaW5zQXZhaWxhYmxlIiwidXNlRGlzcGxheU1vZGUiLCJQbHVnaW5BZG1pblJvdXRlcyIsIkJyb3dzZSIsInJvdXRlIiwibG9jYXRpb25TZWFyY2giLCJzZWFyY2giLCJuYXZNb2RlbElkIiwiZ2V0TmF2TW9kZWxJZCIsInJvdXRlTmFtZSIsIm5hdk1vZGVsIiwic3RhdGUiLCJuYXZJbmRleCIsInNldERpc3BsYXlNb2RlIiwiaGlzdG9yeSIsInJlbW90ZVBsdWdpbnNBdmFpbGFibGUiLCJxIiwiZmlsdGVyQnkiLCJmaWx0ZXJCeVR5cGUiLCJzb3J0QnkiLCJuYW1lQXNjIiwiaXNMb2FkaW5nIiwiZmlsdGVyQnlPcHRpb25zIiwibGFiZWwiLCJvblNvcnRCeUNoYW5nZSIsIm9uRmlsdGVyQnlDaGFuZ2UiLCJvbkZpbHRlckJ5VHlwZUNoYW5nZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwiYWN0aW9uQmFyIiwiZGlzcGxheUFzIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwibGlzdFdyYXAiLCJicmVha3BvaW50cyIsInVwIiwiSG9tZUFkbWluIiwiQnJvd3NlQWRtaW4iLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInNvcnRQbHVnaW5zIiwiZmV0Y2hBbGwiLCJmZXRjaERldGFpbHMiLCJmZXRjaFJlbW90ZVBsdWdpbnMiLCJpbnN0YWxsIiwidW5pbnN0YWxsIiwiZmluZCIsInNlbGVjdEFsbCIsInNlbGVjdEJ5SWQiLCJzZWxlY3RJc1JlcXVlc3RQZW5kaW5nIiwic2VsZWN0UmVxdWVzdEVycm9yIiwic2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZCIsInNlbGVjdERpc3BsYXlNb2RlIiwic2VsZWN0UGx1Z2luRXJyb3JzIiwidXNlRmV0Y2hBbGwiLCJmaWx0ZXJlZCIsInVzZUZldGNoU3RhdHVzIiwic29ydGVkQW5kRmlsdGVyZWQiLCJ1c2VHZXRBbGwiLCJ1c2VHZXRTaW5nbGUiLCJ1c2VGZXRjaERldGFpbHMiLCJ1c2VHZXRFcnJvcnMiLCJ1c2VJbnN0YWxsIiwiZGlzcGF0Y2giLCJ2ZXJzaW9uIiwiaXNVcGRhdGluZyIsInVzZVVuaW5zdGFsbCIsInR5cGVQcmVmaXgiLCJ1c2VGZXRjaERldGFpbHNTdGF0dXMiLCJ1c2VJbnN0YWxsU3RhdHVzIiwiaXNJbnN0YWxsaW5nIiwidXNlVW5pbnN0YWxsU3RhdHVzIiwiaXNVbmluc3RhbGxpbmciLCJpc05vdEZldGNoZWQiLCJpc05vdEZldGNoaW5nIiwic2hvdWxkRmV0Y2giLCJkZXRhaWxzIiwidiIsImNyZWF0ZVNlbGVjdG9yIiwiUmVxdWVzdFN0YXR1cyIsInBsdWdpbnNBZGFwdGVyIiwic2VsZWN0Um9vdCIsInNlbGVjdEl0ZW1zIiwiaXRlbXMiLCJzZXR0aW5ncyIsImdldFNlbGVjdG9ycyIsInNlbGVjdEluc3RhbGxlZCIsImZpbHRlciIsImZpbmRCeUluc3RhbGxBbmRUeXBlIiwiZmluZEJ5S2V5d29yZCIsInNlYXJjaEJ5IiwiZmllbGRzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwiZiIsImluY2x1ZGVzIiwiZmlsdGVyZWRQbHVnaW5zIiwic2VhcmNoZWRQbHVnaW5zIiwicCIsIkJvb2xlYW4iLCJwbHVnaW5JZCIsImVycm9yQ29kZSIsInNlbGVjdFJlcXVlc3QiLCJhY3Rpb25UeXBlIiwicmVxdWVzdHMiLCJyZXF1ZXN0Iiwic3RhdHVzIiwiUGVuZGluZyIsIlJlamVjdGVkIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==