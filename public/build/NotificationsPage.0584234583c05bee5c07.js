"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NotificationsPage"],{

/***/ "./public/app/core/components/AppNotifications/StoredNotificationItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoredNotificationItem": () => (/* binding */ StoredNotificationItem)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const StoredNotificationItem = ({
  children,
  className,
  isSelected,
  onClick,
  severity = 'error',
  title,
  traceId,
  timestamp
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = getStyles(theme);
  const showTraceId = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.tracing && traceId;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Card, {
    className: className,
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Card.Heading, {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Card.Description, {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Card.Figure, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
        onChange: onClick,
        tabIndex: -1,
        value: isSelected
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Card.Tags, {
      className: styles.trace,
      children: [showTraceId && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        children: `Trace ID: ${traceId}`
      }), timestamp && (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(timestamp, {
        addSuffix: true
      })]
    })]
  });
};

const getStyles = theme => {
  return {
    trace: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      color: theme.colors.text.secondary,
      display: 'flex',
      flexDirection: 'column',
      fontSize: theme.typography.pxToRem(10),
      justifySelf: 'flex-end'
    })
  };
};

/***/ }),

/***/ "./public/app/features/notifications/NotificationsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _StoredNotifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/notifications/StoredNotifications.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;








const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, 'notifications')
});

const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, undefined);
const NotificationsPage = ({
  navModel
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_StoredNotifications__WEBPACK_IMPORTED_MODULE_4__.StoredNotifications, {})
    }))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(NotificationsPage));

/***/ }),

/***/ "./public/app/features/notifications/StoredNotifications.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoredNotifications": () => (/* binding */ StoredNotifications)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-5255b58730/0/cache/@emotion-css-npm-11.9.0-e415e285ad-bd83d9af5c.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-cea8e826dc/0/cache/react-use-npm-17.4.0-0ef4521544-0889da919b.zip/node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_AppNotifications_StoredNotificationItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/AppNotifications/StoredNotificationItem.tsx");
/* harmony import */ var app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span, _Alert;










function StoredNotifications() {
  const dispatch = (0,app_types__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const notifications = (0,app_types__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => (0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.selectWarningsAndErrors)(state.appNotifications));
  const [selectedNotificationIds, setSelectedNotificationIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const allNotificationsSelected = notifications.every(notification => selectedNotificationIds.includes(notification.id));
  const lastReadTimestamp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,app_types__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => (0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.selectLastReadTimestamp)(state.appNotifications)));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.readAllNotifications)(Date.now()));
  });

  const clearSelectedNotifications = () => {
    if (allNotificationsSelected) {
      dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.clearAllNotifications)());
    } else {
      selectedNotificationIds.forEach(id => {
        dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_4__.clearNotification)(id));
      });
    }

    setSelectedNotificationIds([]);
  };

  const handleAllCheckboxToggle = isChecked => {
    setSelectedNotificationIds(isChecked ? notifications.map(n => n.id) : []);
  };

  const handleCheckboxToggle = id => {
    setSelectedNotificationIds(prevState => {
      if (!prevState.includes(id)) {
        return [...prevState, id];
      } else {
        return prevState.filter(notificationId => notificationId !== id);
      }
    });
  };

  if (notifications.length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.noNotifsWrapper,
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "bell",
        size: "xxl"
      })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        children: "Notifications you have received will appear here."
      }))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrapper,
    children: [_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "info",
      title: "This page displays past errors and warnings. Once dismissed, they cannot be retrieved."
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.topRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
        value: allNotificationsSelected,
        onChange: event => handleAllCheckboxToggle(event.target.checked)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        disabled: selectedNotificationIds.length === 0,
        onClick: clearSelectedNotifications,
        children: "Dismiss notifications"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
      className: styles.list,
      children: notifications.map(notif => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
        className: styles.listItem,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_AppNotifications_StoredNotificationItem__WEBPACK_IMPORTED_MODULE_3__.StoredNotificationItem, {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
            [styles.newItem]: notif.timestamp > lastReadTimestamp.current
          }),
          isSelected: selectedNotificationIds.includes(notif.id),
          onClick: () => handleCheckboxToggle(notif.id),
          severity: notif.severity,
          title: notif.title,
          timestamp: notif.timestamp,
          traceId: notif.traceId,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            children: notif.text
          })
        })
      }, notif.id))
    })]
  });
}

function getStyles(theme) {
  return {
    topRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      alignItems: 'center',
      display: 'flex',
      gap: theme.spacing(2)
    }),
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      flexDirection: 'column'
    }),
    listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      alignItems: 'center',
      display: 'flex',
      gap: theme.spacing(2),
      listStyle: 'none',
      position: 'relative'
    }),
    newItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      '&::before': {
        content: '""',
        height: '100%',
        position: 'absolute',
        left: '-7px',
        top: 0,
        background: theme.colors.gradients.brandVertical,
        width: theme.spacing(0.5),
        borderRadius: theme.shape.borderRadius(1)
      }
    }),
    noNotifsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: theme.spacing(1)
    }),
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2)
    })
  };
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistanceToNow/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsToNow ` to `formatDistanceToNow`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *   ```
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */

function formatDistanceToNow(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uc1BhZ2UuMDU4NDIzNDU4M2MwNWJlZTVjMDcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQWVPLE1BQU1PLHNCQUFzQixHQUFHLENBQUM7RUFDckNDLFFBRHFDO0VBRXJDQyxTQUZxQztFQUdyQ0MsVUFIcUM7RUFJckNDLE9BSnFDO0VBS3JDQyxRQUFRLEdBQUcsT0FMMEI7RUFNckNDLEtBTnFDO0VBT3JDQyxPQVBxQztFQVFyQ0M7QUFScUMsQ0FBRCxLQVN6QjtFQUNYLE1BQU1DLEtBQUssR0FBR1Ysc0RBQVMsRUFBdkI7RUFDQSxNQUFNVyxNQUFNLEdBQUdDLFNBQVMsQ0FBQ0YsS0FBRCxDQUF4QjtFQUNBLE1BQU1HLFdBQVcsR0FBR2hCLDJFQUFBLElBQWlDVyxPQUFyRDtFQUVBLG9CQUNFLHdEQUFDLDZDQUFEO0lBQU0sU0FBUyxFQUFFTCxTQUFqQjtJQUE0QixPQUFPLEVBQUVFLE9BQXJDO0lBQUEsd0JBQ0UsdURBQUMscURBQUQ7TUFBQSxVQUFlRTtJQUFmLEVBREYsZUFFRSx1REFBQyx5REFBRDtNQUFBLFVBQW1CTDtJQUFuQixFQUZGLGVBR0UsdURBQUMsb0RBQUQ7TUFBQSx1QkFDRSx1REFBQyxpREFBRDtRQUFVLFFBQVEsRUFBRUcsT0FBcEI7UUFBNkIsUUFBUSxFQUFFLENBQUMsQ0FBeEM7UUFBMkMsS0FBSyxFQUFFRDtNQUFsRDtJQURGLEVBSEYsZUFNRSx3REFBQyxrREFBRDtNQUFXLFNBQVMsRUFBRU8sTUFBTSxDQUFDSyxLQUE3QjtNQUFBLFdBQ0dILFdBQVcsaUJBQUk7UUFBQSxVQUFRLGFBQVlMLE9BQVE7TUFBNUIsRUFEbEIsRUFFR0MsU0FBUyxJQUFJZCxvREFBbUIsQ0FBQ2MsU0FBRCxFQUFZO1FBQUVRLFNBQVMsRUFBRTtNQUFiLENBQVosQ0FGbkM7SUFBQSxFQU5GO0VBQUEsRUFERjtBQWFELENBM0JNOztBQTZCUCxNQUFNTCxTQUFTLEdBQUlGLEtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxTQUFTLG9FQUFlO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0FwcE5vdGlmaWNhdGlvbnMvU3RvcmVkTm90aWZpY2F0aW9uSXRlbS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbm90aWZpY2F0aW9ucy9TdG9yZWROb3RpZmljYXRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvZGF0ZS1mbnMtbnBtLTIuMjguMC1jMTljNWFkZDFiLWEwNTE2YjJlNGYuemlwL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2RhdGUtZm5zLW5wbS0yLjI4LjAtYzE5YzVhZGQxYi1hMDUxNmIyZTRmLnppcC9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2RhdGUtZm5zLW5wbS0yLjI4LjAtYzE5YzVhZGQxYi1hMDUxNmIyZTRmLnppcC9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9kYXRlLWZucy1ucG0tMi4yOC4wLWMxOWM1YWRkMWItYTA1MTZiMmU0Zi56aXAvbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZVRvTm93L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBDYXJkLCBDaGVja2JveCwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgdHlwZSBBbGVydFZhcmlhbnQgPSAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2luZm8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgc2V2ZXJpdHk/OiBBbGVydFZhcmlhbnQ7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRpbWVzdGFtcD86IG51bWJlcjtcbiAgdHJhY2VJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFN0b3JlZE5vdGlmaWNhdGlvbkl0ZW0gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBpc1NlbGVjdGVkLFxuICBvbkNsaWNrLFxuICBzZXZlcml0eSA9ICdlcnJvcicsXG4gIHRpdGxlLFxuICB0cmFjZUlkLFxuICB0aW1lc3RhbXAsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModGhlbWUpO1xuICBjb25zdCBzaG93VHJhY2VJZCA9IGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy50cmFjaW5nICYmIHRyYWNlSWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8Q2FyZC5IZWFkaW5nPnt0aXRsZX08L0NhcmQuSGVhZGluZz5cbiAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPntjaGlsZHJlbn08L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICA8Q2FyZC5GaWd1cmU+XG4gICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17b25DbGlja30gdGFiSW5kZXg9ey0xfSB2YWx1ZT17aXNTZWxlY3RlZH0gLz5cbiAgICAgIDwvQ2FyZC5GaWd1cmU+XG4gICAgICA8Q2FyZC5UYWdzIGNsYXNzTmFtZT17c3R5bGVzLnRyYWNlfT5cbiAgICAgICAge3Nob3dUcmFjZUlkICYmIDxzcGFuPntgVHJhY2UgSUQ6ICR7dHJhY2VJZH1gfTwvc3Bhbj59XG4gICAgICAgIHt0aW1lc3RhbXAgJiYgZm9ybWF0RGlzdGFuY2VUb05vdyh0aW1lc3RhbXAsIHsgYWRkU3VmZml4OiB0cnVlIH0pfVxuICAgICAgPC9DYXJkLlRhZ3M+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHJhY2U6IGNzcyh7XG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgICAgYWxpZ25TZWxmOiAnZmxleC1lbmQnLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMCksXG4gICAgICBqdXN0aWZ5U2VsZjogJ2ZsZXgtZW5kJyxcbiAgICB9KSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBTdG9yZWROb3RpZmljYXRpb25zIH0gZnJvbSAnLi9TdG9yZWROb3RpZmljYXRpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdub3RpZmljYXRpb25zJyksXG59KTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHVuZGVmaW5lZCk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIHt9XG5cbnR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uc1BhZ2UgPSAoeyBuYXZNb2RlbCB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPFN0b3JlZE5vdGlmaWNhdGlvbnMgLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTm90aWZpY2F0aW9uc1BhZ2UpO1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdE9uY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBDaGVja2JveCwgSWNvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFN0b3JlZE5vdGlmaWNhdGlvbkl0ZW0gfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0FwcE5vdGlmaWNhdGlvbnMvU3RvcmVkTm90aWZpY2F0aW9uSXRlbSc7XG5pbXBvcnQge1xuICBjbGVhckFsbE5vdGlmaWNhdGlvbnMsXG4gIGNsZWFyTm90aWZpY2F0aW9uLFxuICByZWFkQWxsTm90aWZpY2F0aW9ucyxcbiAgc2VsZWN0V2FybmluZ3NBbmRFcnJvcnMsXG4gIHNlbGVjdExhc3RSZWFkVGltZXN0YW1wLFxufSBmcm9tICdhcHAvY29yZS9yZWR1Y2Vycy9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlZE5vdGlmaWNhdGlvbnMoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc2VsZWN0V2FybmluZ3NBbmRFcnJvcnMoc3RhdGUuYXBwTm90aWZpY2F0aW9ucykpO1xuICBjb25zdCBbc2VsZWN0ZWROb3RpZmljYXRpb25JZHMsIHNldFNlbGVjdGVkTm90aWZpY2F0aW9uSWRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IGFsbE5vdGlmaWNhdGlvbnNTZWxlY3RlZCA9IG5vdGlmaWNhdGlvbnMuZXZlcnkoKG5vdGlmaWNhdGlvbikgPT5cbiAgICBzZWxlY3RlZE5vdGlmaWNhdGlvbklkcy5pbmNsdWRlcyhub3RpZmljYXRpb24uaWQpXG4gICk7XG4gIGNvbnN0IGxhc3RSZWFkVGltZXN0YW1wID0gdXNlUmVmKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc2VsZWN0TGFzdFJlYWRUaW1lc3RhbXAoc3RhdGUuYXBwTm90aWZpY2F0aW9ucykpKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHVzZUVmZmVjdE9uY2UoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHJlYWRBbGxOb3RpZmljYXRpb25zKERhdGUubm93KCkpKTtcbiAgfSk7XG5cbiAgY29uc3QgY2xlYXJTZWxlY3RlZE5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XG4gICAgaWYgKGFsbE5vdGlmaWNhdGlvbnNTZWxlY3RlZCkge1xuICAgICAgZGlzcGF0Y2goY2xlYXJBbGxOb3RpZmljYXRpb25zKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZE5vdGlmaWNhdGlvbklkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChjbGVhck5vdGlmaWNhdGlvbihpZCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHNldFNlbGVjdGVkTm90aWZpY2F0aW9uSWRzKFtdKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBbGxDaGVja2JveFRvZ2dsZSA9IChpc0NoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRTZWxlY3RlZE5vdGlmaWNhdGlvbklkcyhpc0NoZWNrZWQgPyBub3RpZmljYXRpb25zLm1hcCgobikgPT4gbi5pZCkgOiBbXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hUb2dnbGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkTm90aWZpY2F0aW9uSWRzKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIGlmICghcHJldlN0YXRlLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICByZXR1cm4gWy4uLnByZXZTdGF0ZSwgaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5maWx0ZXIoKG5vdGlmaWNhdGlvbklkKSA9PiBub3RpZmljYXRpb25JZCAhPT0gaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGlmIChub3RpZmljYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vTm90aWZzV3JhcHBlcn0+XG4gICAgICAgIDxJY29uIG5hbWU9XCJiZWxsXCIgc2l6ZT1cInh4bFwiIC8+XG4gICAgICAgIDxzcGFuPk5vdGlmaWNhdGlvbnMgeW91IGhhdmUgcmVjZWl2ZWQgd2lsbCBhcHBlYXIgaGVyZS48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPEFsZXJ0XG4gICAgICAgIHNldmVyaXR5PVwiaW5mb1wiXG4gICAgICAgIHRpdGxlPVwiVGhpcyBwYWdlIGRpc3BsYXlzIHBhc3QgZXJyb3JzIGFuZCB3YXJuaW5ncy4gT25jZSBkaXNtaXNzZWQsIHRoZXkgY2Fubm90IGJlIHJldHJpZXZlZC5cIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wUm93fT5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgdmFsdWU9e2FsbE5vdGlmaWNhdGlvbnNTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gaGFuZGxlQWxsQ2hlY2tib3hUb2dnbGUoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtzZWxlY3RlZE5vdGlmaWNhdGlvbklkcy5sZW5ndGggPT09IDB9IG9uQ2xpY2s9e2NsZWFyU2VsZWN0ZWROb3RpZmljYXRpb25zfT5cbiAgICAgICAgICBEaXNtaXNzIG5vdGlmaWNhdGlvbnNcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKChub3RpZikgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e25vdGlmLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0+XG4gICAgICAgICAgICA8U3RvcmVkTm90aWZpY2F0aW9uSXRlbVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHsgW3N0eWxlcy5uZXdJdGVtXTogbm90aWYudGltZXN0YW1wID4gbGFzdFJlYWRUaW1lc3RhbXAuY3VycmVudCB9KX1cbiAgICAgICAgICAgICAgaXNTZWxlY3RlZD17c2VsZWN0ZWROb3RpZmljYXRpb25JZHMuaW5jbHVkZXMobm90aWYuaWQpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGVja2JveFRvZ2dsZShub3RpZi5pZCl9XG4gICAgICAgICAgICAgIHNldmVyaXR5PXtub3RpZi5zZXZlcml0eX1cbiAgICAgICAgICAgICAgdGl0bGU9e25vdGlmLnRpdGxlfVxuICAgICAgICAgICAgICB0aW1lc3RhbXA9e25vdGlmLnRpbWVzdGFtcH1cbiAgICAgICAgICAgICAgdHJhY2VJZD17bm90aWYudHJhY2VJZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4+e25vdGlmLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9TdG9yZWROb3RpZmljYXRpb25JdGVtPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgdG9wUm93OiBjc3Moe1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSksXG4gICAgbGlzdDogY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0pLFxuICAgIGxpc3RJdGVtOiBjc3Moe1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH0pLFxuICAgIG5ld0l0ZW06IGNzcyh7XG4gICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJy03cHgnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9ycy5ncmFkaWVudHMuYnJhbmRWZXJ0aWNhbCxcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoMSksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG5vTm90aWZzV3JhcHBlcjogY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBnYXA6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgfSksXG4gICAgd3JhcHBlcjogY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZ2FwOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0pLFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgZGlydHlPYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZGlydHlPYmplY3QgPSBkaXJ0eU9iamVjdCB8fCB7fTtcblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkaXJ0eU9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGlydHlPYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGRpcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3QoZGlydHlPYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgZGlydHlPYmplY3QpO1xufSIsImltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBkaXN0YW5jZUluV29yZHMgYCB0byBgZm9ybWF0RGlzdGFuY2VgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqIC0gVGhlIG9yZGVyIG9mIGFyZ3VtZW50cyBpcyBzd2FwcGVkIHRvIG1ha2UgdGhlIGZ1bmN0aW9uXG4gKiAgIGNvbnNpc3RlbnQgd2l0aCBgZGlmZmVyZW5jZUluLi4uYCBmdW5jdGlvbnMuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3JkcyhcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKSxcbiAqICAgeyBpbmNsdWRlU2Vjb25kczogdHJ1ZSB9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpO1xuICBsb2NhbGl6ZU9wdGlvbnMuYWRkU3VmZml4ID0gQm9vbGVhbihvcHRpb25zLmFkZFN1ZmZpeCk7XG4gIGxvY2FsaXplT3B0aW9ucy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuICB2YXIgb2Zmc2V0SW5TZWNvbmRzID0gKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpKSAvIDEwMDA7XG4gIHZhciBtaW51dGVzID0gTWF0aC5yb3VuZCgoc2Vjb25kcyAtIG9mZnNldEluU2Vjb25kcykgLyA2MCk7XG4gIHZhciBtb250aHM7IC8vIDAgdXAgdG8gMiBtaW5zXG5cbiAgaWYgKG1pbnV0ZXMgPCAyKSB7XG4gICAgaWYgKG9wdGlvbnMuaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgNSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAxMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDIwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2hhbGZBTWludXRlJywgbnVsbCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgIHZhciBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNzUgZGF5cyB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9UV09fTU9OVEhTKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpOyAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcblxuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICB2YXIgbmVhcmVzdE1vbnRoID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG5lYXJlc3RNb250aCwgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPSBtb250aHMgJSAxMjtcbiAgICB2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTsgLy8gTiB5ZWFycyB1cCB0byAxIHllYXJzIDMgbW9udGhzXG5cbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgMyBtb250aHMgdXAgdG8gTiB5ZWFycyA5IG1vbnRoc1xuICAgIH0gZWxzZSBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDkpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ292ZXJYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgZGlzdGFuY2VJbldvcmRzIGZyb20gXCIuLi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VUb05vd1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIHRvIG5vdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBkaXN0YW5jZUluV29yZHNUb05vdyBgIHRvIGBmb3JtYXREaXN0YW5jZVRvTm93YFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzVG9Ob3cobmV3IERhdGUoMjAxNCwgNiwgMiksIHsgYWRkU3VmZml4OiB0cnVlIH0pXG4gKiAgIC8vPT4gJ2luIDYgbW9udGhzJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgeyBhZGRTdWZmaXg6IHRydWUgfSlcbiAqICAgLy89PiAnaW4gNiBtb250aHMnXG4gKiAgIGBgYFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBzcGVjaWZpZXMgaWYgbm93IGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgcGFzc2VkIGRhdGVcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDIgSnVseSAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpXG4gKiApXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTUsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAge2luY2x1ZGVTZWNvbmRzOiB0cnVlfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYsIHdpdGggYSBzdWZmaXg/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdpbiBhYm91dCAxIHllYXInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBBdWd1c3QgMjAxNiBpbiBFc3BlcmFudG8/XG4gKiB2YXIgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vdyhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGRpc3RhbmNlSW5Xb3JkcyhkaXJ0eURhdGUsIERhdGUubm93KCksIGRpcnR5T3B0aW9ucyk7XG59Il0sIm5hbWVzIjpbImNzcyIsImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJSZWFjdCIsImNvbmZpZyIsIkNhcmQiLCJDaGVja2JveCIsInVzZVRoZW1lMiIsIlN0b3JlZE5vdGlmaWNhdGlvbkl0ZW0iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImlzU2VsZWN0ZWQiLCJvbkNsaWNrIiwic2V2ZXJpdHkiLCJ0aXRsZSIsInRyYWNlSWQiLCJ0aW1lc3RhbXAiLCJ0aGVtZSIsInN0eWxlcyIsImdldFN0eWxlcyIsInNob3dUcmFjZUlkIiwiZmVhdHVyZVRvZ2dsZXMiLCJ0cmFjaW5nIiwidHJhY2UiLCJhZGRTdWZmaXgiLCJhbGlnbkl0ZW1zIiwiYWxpZ25TZWxmIiwiY29sb3IiLCJjb2xvcnMiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmb250U2l6ZSIsInR5cG9ncmFwaHkiLCJweFRvUmVtIiwianVzdGlmeVNlbGYiLCJjb25uZWN0IiwiUGFnZSIsImdldE5hdk1vZGVsIiwiU3RvcmVkTm90aWZpY2F0aW9ucyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImNvbm5lY3RvciIsInVuZGVmaW5lZCIsIk5vdGlmaWNhdGlvbnNQYWdlIiwiY3giLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdE9uY2UiLCJBbGVydCIsIkJ1dHRvbiIsIkljb24iLCJ1c2VTdHlsZXMyIiwiY2xlYXJBbGxOb3RpZmljYXRpb25zIiwiY2xlYXJOb3RpZmljYXRpb24iLCJyZWFkQWxsTm90aWZpY2F0aW9ucyIsInNlbGVjdFdhcm5pbmdzQW5kRXJyb3JzIiwic2VsZWN0TGFzdFJlYWRUaW1lc3RhbXAiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZGlzcGF0Y2giLCJub3RpZmljYXRpb25zIiwiYXBwTm90aWZpY2F0aW9ucyIsInNlbGVjdGVkTm90aWZpY2F0aW9uSWRzIiwic2V0U2VsZWN0ZWROb3RpZmljYXRpb25JZHMiLCJhbGxOb3RpZmljYXRpb25zU2VsZWN0ZWQiLCJldmVyeSIsIm5vdGlmaWNhdGlvbiIsImluY2x1ZGVzIiwiaWQiLCJsYXN0UmVhZFRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJjbGVhclNlbGVjdGVkTm90aWZpY2F0aW9ucyIsImZvckVhY2giLCJoYW5kbGVBbGxDaGVja2JveFRvZ2dsZSIsImlzQ2hlY2tlZCIsIm1hcCIsIm4iLCJoYW5kbGVDaGVja2JveFRvZ2dsZSIsInByZXZTdGF0ZSIsImZpbHRlciIsIm5vdGlmaWNhdGlvbklkIiwibGVuZ3RoIiwibm9Ob3RpZnNXcmFwcGVyIiwid3JhcHBlciIsInRvcFJvdyIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsImxpc3QiLCJub3RpZiIsImxpc3RJdGVtIiwibmV3SXRlbSIsImN1cnJlbnQiLCJnYXAiLCJzcGFjaW5nIiwibGlzdFN0eWxlIiwicG9zaXRpb24iLCJjb250ZW50IiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsImJhY2tncm91bmQiLCJncmFkaWVudHMiLCJicmFuZFZlcnRpY2FsIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJzaGFwZSJdLCJzb3VyY2VSb290IjoiIn0=